// @flow
import HegelError from "../../utils/errors";
import { Type } from "./type";
import { TypeVar } from "./type-var";
import { UnionType } from "./union-type";
import { TypeScope } from "../type-scope";
import { $BottomType } from "./bottom-type";
import type { TypeMeta } from "./type";
import type { SourceLocation } from "@babel/parser";

export class GenericType<T: Type> extends Type {
  static new(name: mixed, meta?: TypeMeta = {}, ...args: Array<any>) {
    const [, localTypeScope, subordinateType] = args;
    const declaratedParent = meta.parent || Type.GlobalTypeScope;
    const subordinateParent = subordinateType.getNextParent(localTypeScope);
    const parent =
      declaratedParent.priority > subordinateParent.priority
        ? declaratedParent
        : subordinateParent;
    return super.new(name, { ...meta, parent }, ...args);
  }

  static term(name: mixed, meta?: TypeMeta = {}, ...args: Array<any>) {
    const [, localTypeScope, subordinateType] = args;
    const declaratedParent = meta.parent || Type.GlobalTypeScope;
    const subordinateParent = subordinateType.getNextParent(
      localTypeScope.priority
    );
    const parent =
      declaratedParent.priority > subordinateParent.priority
        ? declaratedParent
        : subordinateParent;
    return super.term(name, { ...meta, parent }, ...args);
  }

  static getNameWithoutApplying(name: mixed) {
    return String(name).replace(/<[\w\W]+>/g, "");
  }

  static getName<T: Type>(name: mixed, parameters: Array<T>) {
    if (parameters.length === 0) {
      return String(name);
    }
    const isMultyLine = this.prettyMode && parameters.length >= 4;
    const isSplitterPresented =
      isMultyLine ||
      parameters.some(a => a instanceof UnionType && a.variants.length >= 4);
    return `${String(name)}<${
      isSplitterPresented ? "\n\t" : ""
    }${this.getParametersPart(parameters, isMultyLine)}${
      isSplitterPresented ? "\n" : ""
    }>`;
  }

  static getParametersPart<T: Type>(
    parameters: Array<T>,
    isMultyLine: boolean = false
  ) {
    return parameters.reduce(
      (res, t) =>
        `${res}${res ? `,${isMultyLine ? "\n\t" : " "}` : ""}${String(
          t.name
        ).replace(/\n/g, "\n\t")}`,
      ""
    );
  }

  genericArguments: Array<TypeVar>;
  subordinateType: T;
  localTypeScope: TypeScope;

  constructor(
    name: string,
    meta?: TypeMeta = {},
    genericArguments: Array<TypeVar>,
    typeScope: TypeScope,
    type: T
  ) {
    super(name, meta);
    this.subordinateType = type;
    this.localTypeScope = typeScope;
    this.genericArguments = genericArguments;
  }

  isSuperTypeFor(anotherType: Type) {
    if (this._alreadyProcessedWith === anotherType) {
      return true;
    }
    this._alreadyProcessedWith = anotherType;
    const otherType =
      anotherType instanceof GenericType
        ? anotherType.subordinateType
        : anotherType;
    const result = this.subordinateType.isSuperTypeFor(otherType);
    this._alreadyProcessedWith = null;
    return result;
  }

  assertParameters(
    parameters: Array<Type>,
    loc?: SourceLocation,
    ignoreLength?: boolean = false
  ) {
    if (parameters.length !== this.genericArguments.length) {
      throw new HegelError(
        `Generic "${String(
          this.name
        )}" called with wrong number of arguments. Expect: ${
          this.genericArguments.length
        }, Actual: ${parameters.length}`,
        loc
      );
    }
    const genericArguments = this.genericArguments.map(
      a =>
        a.constraint !== undefined
          ? new TypeVar(
              String(a.name),
              { isSubtypeOf: a.isSubtypeOf, parent: a.parent },
              // $FlowIssue
              a.constraint.changeAll(this.genericArguments, parameters),
              a.isUserDefined
            )
          : a
    );
    const wrongArgumentIndex = genericArguments.findIndex(
      (arg, i) => !arg.isPrincipalTypeFor(parameters[i])
    );
    if (wrongArgumentIndex !== -1) {
      const parameter = parameters[wrongArgumentIndex];
      const typeVar = genericArguments[wrongArgumentIndex];
      throw new HegelError(
        `Parameter "${String(
          parameter.name
        )}" is incompatible with restriction ${
          typeVar.constraint
            ? `"${String(typeVar.constraint.name)}`
            : `of type "${String(typeVar.name)}"`
        }"`,
        loc
      );
    }
  }

  changeAll(
    sourceTypes: Array<Type>,
    targetTypes: Array<Type>,
    typeScope: TypeScope
  ): Type {
    if (sourceTypes.every(type => !this.canContain(type))) {
      return this;
    }
    if (this._alreadyProcessedWith !== null) {
      return this._alreadyProcessedWith;
    }
    this._alreadyProcessedWith = TypeVar.createSelf(
      this.getChangedName(sourceTypes, targetTypes),
      this.parent
    );
    try {
      const newSubordinateType = this.subordinateType.changeAll(
        sourceTypes,
        targetTypes,
        typeScope
      );
      if (newSubordinateType === this.subordinateType) {
        this._alreadyProcessedWith = null;
        return this;
      }
      const newGenericArguments = this.genericArguments.filter(arg =>
        newSubordinateType.contains(arg)
      );
      if (newGenericArguments.length === 0) {
        return this.endChanges(newSubordinateType);
      }
      const newName =
        "argumentsTypes" in newSubordinateType
          ? newSubordinateType.constructor.getName(
              newSubordinateType.argumentsTypes,
              newSubordinateType.returnType,
              newGenericArguments
            )
          : GenericType.getName(newSubordinateType.name, newGenericArguments);
      const theMostCloseParent: TypeScope | void = targetTypes.reduce(
        (parent: TypeScope | void, type) =>
          newSubordinateType.contains(type) &&
          (parent === undefined || parent.priority <= type.parent.priority)
            ? type.parent
            : parent,
        undefined
      );
      return this.endChanges(
        GenericType.term(
          newName,
          { parent: theMostCloseParent },
          newGenericArguments,
          this.localTypeScope,
          newSubordinateType
        )
      );
    } catch (e) {
      this._alreadyProcessedWith = null;
      throw e;
    }
  }

  applyGeneric(
    appliedParameters: Array<Type>,
    loc?: SourceLocation,
    shouldBeMemoize?: boolean = true
  ): T {
    this.assertParameters(appliedParameters, loc);
    const parameters: Array<Type> = this.genericArguments.map((t, i) => {
      const appliedType = appliedParameters[i];
      // Needed for type inferencing
      if (
        appliedType instanceof TypeVar &&
        !appliedType.isUserDefined &&
        t.isUserDefined &&
        appliedType.constraint !== t.constraint
      ) {
        return t;
      }
      if (
        t.constraint === undefined ||
        !(t.constraint instanceof UnionType) ||
        appliedType.equalsTo(t)
      ) {
        return appliedType;
      }
      if (
        t.constraint instanceof UnionType &&
        appliedType instanceof UnionType
      ) {
        return appliedType;
      }
      const variant = t.constraint.variants.find(v =>
        v.isPrincipalTypeFor(appliedType)
      );
      if (variant === undefined) {
        throw new Error("Never!");
      }
      return variant;
    });
    const appliedTypeName = GenericType.getName(this.name, parameters);
    const oldAppliedSelf = new $BottomType(
      { parent: this.subordinateType.parent },
      this,
      this.genericArguments
    );
    const theMostPriorityParent = parameters.reduce(
      (parent, type) =>
        parent === undefined || parent.priority < type.parent.priority
          ? type.parent
          : parent,
      Type.GlobalTypeScope
    );
    const appliedSelf = TypeVar.term(
      appliedTypeName,
      { parent: theMostPriorityParent, isSubtypeOf: TypeVar.Self },
      undefined,
      true
    );
    if (!(appliedSelf instanceof TypeVar)) {
      return appliedSelf;
    }
    const result = this.subordinateType.changeAll(
      [...this.genericArguments, oldAppliedSelf],
      [...parameters, appliedSelf],
      theMostPriorityParent
    );
    result.name = result.name === undefined ? appliedTypeName : result.name;
    appliedSelf.root = result;
    result.priority = this.subordinateType.priority + 1;
    return result.save();
  }

  getPropertyType(propertyName: mixed): ?Type {
    const result = this.subordinateType.getPropertyType(propertyName);
    if (result === null && this.isSubtypeOf != null) {
      return this.isSubtypeOf.getPropertyType(propertyName);
    }
    return result;
  }

  getDifference(type: Type, withReverseUnion?: boolean = false) {
    if (this._alreadyProcessedWith === type || this.referenceEqualsTo(type)) {
      return [];
    }
    if (this.subordinateType === null) {
      return type instanceof TypeVar ? [{ root: this, variable: type }] : [];
    }
    this._alreadyProcessedWith = type;
    if (type instanceof GenericType) {
      const result = this.subordinateType
        .getDifference(type.subordinateType, withReverseUnion)
        // $FlowIssue
        .filter(a => !type.genericArguments.includes(a.variable));
      this._alreadyProcessedWith = null;
      return result;
    }
    if (type instanceof TypeVar) {
      const result = super.getDifference(type, withReverseUnion);
      this._alreadyProcessedWith = null;
      return result;
    }
    const result = this.subordinateType
      .getDifference(type, withReverseUnion)
      .filter(a => !this.genericArguments.includes(a.variable));
    this._alreadyProcessedWith = null;
    return result;
  }

  contains(type: Type) {
    if (this._alreadyProcessedWith === type || !this.canContain(type)) {
      return false;
    }
    this._alreadyProcessedWith = type;
    const result = super.contains(type) || this.subordinateType.contains(type);
    this._alreadyProcessedWith = null;
    return result;
  }

  weakContains(type: Type) {
    if (this._alreadyProcessedWith === type || !this.canContain(type)) {
      return false;
    }
    this._alreadyProcessedWith = type;
    const result =
      super.contains(type) || this.subordinateType.weakContains(type);
    this._alreadyProcessedWith = null;
    return result;
  }

  makeNominal() {
    this.subordinateType.makeNominal();
  }

  containsAsGeneric(type: Type) {
    return this.genericArguments.includes(type);
  }

  getNextParent(typeScope: TypeScope) {
    if (this._alreadyProcessedWith !== null || this.subordinateType == null) {
      return Type.GlobalTypeScope;
    }
    this._alreadyProcessedWith = this;
    const result = this.subordinateType.getNextParent(typeScope);
    this._alreadyProcessedWith = null;
    return result;
  }
}
