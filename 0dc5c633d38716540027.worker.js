/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/docz/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../node_modules/workerize-loader/dist/rpc-worker-loader.js!../node_modules/gatsby/dist/utils/babel-loader.js?!../node_modules/gatsby/dist/utils/babel-loader.js?!../src/docs/try/components/hegel.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/parser/lib/index.js":
/*!**************************************************!*\
  !*** ../node_modules/@babel/parser/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

const beforeExpr = true;
const startsExpr = true;
const isLoop = true;
const isAssign = true;
const prefix = true;
const postfix = true;
class TokenType {
  constructor(label, conf = {}) {
    this.label = label;
    this.keyword = conf.keyword;
    this.beforeExpr = !!conf.beforeExpr;
    this.startsExpr = !!conf.startsExpr;
    this.rightAssociative = !!conf.rightAssociative;
    this.isLoop = !!conf.isLoop;
    this.isAssign = !!conf.isAssign;
    this.prefix = !!conf.prefix;
    this.postfix = !!conf.postfix;
    this.binop = conf.binop != null ? conf.binop : null;
    this.updateContext = null;
  }

}
const keywords = new Map();

function createKeyword(name, options = {}) {
  options.keyword = name;
  const token = new TokenType(name, options);
  keywords.set(name, token);
  return token;
}

function createBinop(name, binop) {
  return new TokenType(name, {
    beforeExpr,
    binop
  });
}

const types = {
  num: new TokenType("num", {
    startsExpr
  }),
  bigint: new TokenType("bigint", {
    startsExpr
  }),
  regexp: new TokenType("regexp", {
    startsExpr
  }),
  string: new TokenType("string", {
    startsExpr
  }),
  name: new TokenType("name", {
    startsExpr
  }),
  eof: new TokenType("eof"),
  bracketL: new TokenType("[", {
    beforeExpr,
    startsExpr
  }),
  bracketR: new TokenType("]"),
  braceL: new TokenType("{", {
    beforeExpr,
    startsExpr
  }),
  braceBarL: new TokenType("{|", {
    beforeExpr,
    startsExpr
  }),
  braceR: new TokenType("}"),
  braceBarR: new TokenType("|}"),
  parenL: new TokenType("(", {
    beforeExpr,
    startsExpr
  }),
  parenR: new TokenType(")"),
  comma: new TokenType(",", {
    beforeExpr
  }),
  semi: new TokenType(";", {
    beforeExpr
  }),
  colon: new TokenType(":", {
    beforeExpr
  }),
  doubleColon: new TokenType("::", {
    beforeExpr
  }),
  dot: new TokenType("."),
  question: new TokenType("?", {
    beforeExpr
  }),
  questionDot: new TokenType("?."),
  arrow: new TokenType("=>", {
    beforeExpr
  }),
  template: new TokenType("template"),
  ellipsis: new TokenType("...", {
    beforeExpr
  }),
  backQuote: new TokenType("`", {
    startsExpr
  }),
  dollarBraceL: new TokenType("${", {
    beforeExpr,
    startsExpr
  }),
  at: new TokenType("@"),
  hash: new TokenType("#", {
    startsExpr
  }),
  interpreterDirective: new TokenType("#!..."),
  eq: new TokenType("=", {
    beforeExpr,
    isAssign
  }),
  assign: new TokenType("_=", {
    beforeExpr,
    isAssign
  }),
  incDec: new TokenType("++/--", {
    prefix,
    postfix,
    startsExpr
  }),
  bang: new TokenType("!", {
    beforeExpr,
    prefix,
    startsExpr
  }),
  tilde: new TokenType("~", {
    beforeExpr,
    prefix,
    startsExpr
  }),
  pipeline: createBinop("|>", 0),
  nullishCoalescing: createBinop("??", 1),
  logicalOR: createBinop("||", 1),
  logicalAND: createBinop("&&", 2),
  bitwiseOR: createBinop("|", 3),
  bitwiseXOR: createBinop("^", 4),
  bitwiseAND: createBinop("&", 5),
  equality: createBinop("==/!=/===/!==", 6),
  relational: createBinop("</>/<=/>=", 7),
  bitShift: createBinop("<</>>/>>>", 8),
  plusMin: new TokenType("+/-", {
    beforeExpr,
    binop: 9,
    prefix,
    startsExpr
  }),
  modulo: new TokenType("%", {
    beforeExpr,
    binop: 10,
    startsExpr
  }),
  star: createBinop("*", 10),
  slash: createBinop("/", 10),
  exponent: new TokenType("**", {
    beforeExpr,
    binop: 11,
    rightAssociative: true
  }),
  _break: createKeyword("break"),
  _case: createKeyword("case", {
    beforeExpr
  }),
  _catch: createKeyword("catch"),
  _continue: createKeyword("continue"),
  _debugger: createKeyword("debugger"),
  _default: createKeyword("default", {
    beforeExpr
  }),
  _do: createKeyword("do", {
    isLoop,
    beforeExpr
  }),
  _else: createKeyword("else", {
    beforeExpr
  }),
  _finally: createKeyword("finally"),
  _for: createKeyword("for", {
    isLoop
  }),
  _function: createKeyword("function", {
    startsExpr
  }),
  _if: createKeyword("if"),
  _return: createKeyword("return", {
    beforeExpr
  }),
  _switch: createKeyword("switch"),
  _throw: createKeyword("throw", {
    beforeExpr,
    prefix,
    startsExpr
  }),
  _try: createKeyword("try"),
  _var: createKeyword("var"),
  _const: createKeyword("const"),
  _while: createKeyword("while", {
    isLoop
  }),
  _with: createKeyword("with"),
  _new: createKeyword("new", {
    beforeExpr,
    startsExpr
  }),
  _this: createKeyword("this", {
    startsExpr
  }),
  _super: createKeyword("super", {
    startsExpr
  }),
  _class: createKeyword("class", {
    startsExpr
  }),
  _extends: createKeyword("extends", {
    beforeExpr
  }),
  _export: createKeyword("export"),
  _import: createKeyword("import", {
    startsExpr
  }),
  _null: createKeyword("null", {
    startsExpr
  }),
  _true: createKeyword("true", {
    startsExpr
  }),
  _false: createKeyword("false", {
    startsExpr
  }),
  _in: createKeyword("in", {
    beforeExpr,
    binop: 7
  }),
  _instanceof: createKeyword("instanceof", {
    beforeExpr,
    binop: 7
  }),
  _typeof: createKeyword("typeof", {
    beforeExpr,
    prefix,
    startsExpr
  }),
  _void: createKeyword("void", {
    beforeExpr,
    prefix,
    startsExpr
  }),
  _delete: createKeyword("delete", {
    beforeExpr,
    prefix,
    startsExpr
  })
};

const SCOPE_OTHER = 0b0000000000,
      SCOPE_PROGRAM = 0b0000000001,
      SCOPE_FUNCTION = 0b0000000010,
      SCOPE_ASYNC = 0b0000000100,
      SCOPE_GENERATOR = 0b0000001000,
      SCOPE_ARROW = 0b0000010000,
      SCOPE_SIMPLE_CATCH = 0b0000100000,
      SCOPE_SUPER = 0b0001000000,
      SCOPE_DIRECT_SUPER = 0b0010000000,
      SCOPE_CLASS = 0b0100000000,
      SCOPE_TS_MODULE = 0b1000000000,
      SCOPE_VAR = SCOPE_PROGRAM | SCOPE_FUNCTION | SCOPE_TS_MODULE;
function functionFlags(isAsync, isGenerator) {
  return SCOPE_FUNCTION | (isAsync ? SCOPE_ASYNC : 0) | (isGenerator ? SCOPE_GENERATOR : 0);
}
const BIND_KIND_VALUE = 0b00000000001,
      BIND_KIND_TYPE = 0b00000000010,
      BIND_SCOPE_VAR = 0b00000000100,
      BIND_SCOPE_LEXICAL = 0b00000001000,
      BIND_SCOPE_FUNCTION = 0b00000010000,
      BIND_FLAGS_NONE = 0b00001000000,
      BIND_FLAGS_CLASS = 0b00010000000,
      BIND_FLAGS_TS_ENUM = 0b00100000000,
      BIND_FLAGS_TS_CONST_ENUM = 0b01000000000,
      BIND_FLAGS_TS_EXPORT_ONLY = 0b10000000000;
const BIND_CLASS = BIND_KIND_VALUE | BIND_KIND_TYPE | BIND_SCOPE_LEXICAL | BIND_FLAGS_CLASS,
      BIND_LEXICAL = BIND_KIND_VALUE | 0 | BIND_SCOPE_LEXICAL | 0,
      BIND_VAR = BIND_KIND_VALUE | 0 | BIND_SCOPE_VAR | 0,
      BIND_FUNCTION = BIND_KIND_VALUE | 0 | BIND_SCOPE_FUNCTION | 0,
      BIND_TS_INTERFACE = 0 | BIND_KIND_TYPE | 0 | BIND_FLAGS_CLASS,
      BIND_TS_TYPE = 0 | BIND_KIND_TYPE | 0 | 0,
      BIND_TS_ENUM = BIND_KIND_VALUE | BIND_KIND_TYPE | BIND_SCOPE_LEXICAL | BIND_FLAGS_TS_ENUM,
      BIND_TS_AMBIENT = 0 | 0 | 0 | BIND_FLAGS_TS_EXPORT_ONLY,
      BIND_NONE = 0 | 0 | 0 | BIND_FLAGS_NONE,
      BIND_OUTSIDE = BIND_KIND_VALUE | 0 | 0 | BIND_FLAGS_NONE,
      BIND_TS_CONST_ENUM = BIND_TS_ENUM | BIND_FLAGS_TS_CONST_ENUM,
      BIND_TS_NAMESPACE = 0 | 0 | 0 | BIND_FLAGS_TS_EXPORT_ONLY;
const CLASS_ELEMENT_FLAG_STATIC = 0b100,
      CLASS_ELEMENT_KIND_GETTER = 0b010,
      CLASS_ELEMENT_KIND_SETTER = 0b001,
      CLASS_ELEMENT_KIND_ACCESSOR = CLASS_ELEMENT_KIND_GETTER | CLASS_ELEMENT_KIND_SETTER;
const CLASS_ELEMENT_STATIC_GETTER = CLASS_ELEMENT_KIND_GETTER | CLASS_ELEMENT_FLAG_STATIC,
      CLASS_ELEMENT_STATIC_SETTER = CLASS_ELEMENT_KIND_SETTER | CLASS_ELEMENT_FLAG_STATIC,
      CLASS_ELEMENT_INSTANCE_GETTER = CLASS_ELEMENT_KIND_GETTER,
      CLASS_ELEMENT_INSTANCE_SETTER = CLASS_ELEMENT_KIND_SETTER,
      CLASS_ELEMENT_OTHER = 0;

function isSimpleProperty(node) {
  return node != null && node.type === "Property" && node.kind === "init" && node.method === false;
}

var estree = (superClass => class extends superClass {
  estreeParseRegExpLiteral({
    pattern,
    flags
  }) {
    let regex = null;

    try {
      regex = new RegExp(pattern, flags);
    } catch (e) {}

    const node = this.estreeParseLiteral(regex);
    node.regex = {
      pattern,
      flags
    };
    return node;
  }

  estreeParseBigIntLiteral(value) {
    const bigInt = typeof BigInt !== "undefined" ? BigInt(value) : null;
    const node = this.estreeParseLiteral(bigInt);
    node.bigint = String(node.value || value);
    return node;
  }

  estreeParseLiteral(value) {
    return this.parseLiteral(value, "Literal");
  }

  directiveToStmt(directive) {
    const directiveLiteral = directive.value;
    const stmt = this.startNodeAt(directive.start, directive.loc.start);
    const expression = this.startNodeAt(directiveLiteral.start, directiveLiteral.loc.start);
    expression.value = directiveLiteral.value;
    expression.raw = directiveLiteral.extra.raw;
    stmt.expression = this.finishNodeAt(expression, "Literal", directiveLiteral.end, directiveLiteral.loc.end);
    stmt.directive = directiveLiteral.extra.raw.slice(1, -1);
    return this.finishNodeAt(stmt, "ExpressionStatement", directive.end, directive.loc.end);
  }

  initFunction(node, isAsync) {
    super.initFunction(node, isAsync);
    node.expression = false;
  }

  checkDeclaration(node) {
    if (isSimpleProperty(node)) {
      this.checkDeclaration(node.value);
    } else {
      super.checkDeclaration(node);
    }
  }

  checkGetterSetterParams(method) {
    const prop = method;
    const paramCount = prop.kind === "get" ? 0 : 1;
    const start = prop.start;

    if (prop.value.params.length !== paramCount) {
      if (prop.kind === "get") {
        this.raise(start, "getter must not have any formal parameters");
      } else {
        this.raise(start, "setter must have exactly one formal parameter");
      }
    } else if (prop.kind === "set" && prop.value.params[0].type === "RestElement") {
      this.raise(start, "setter function argument must not be a rest parameter");
    }
  }

  checkLVal(expr, bindingType = BIND_NONE, checkClashes, contextDescription, disallowLetBinding) {
    switch (expr.type) {
      case "ObjectPattern":
        expr.properties.forEach(prop => {
          this.checkLVal(prop.type === "Property" ? prop.value : prop, bindingType, checkClashes, "object destructuring pattern", disallowLetBinding);
        });
        break;

      default:
        super.checkLVal(expr, bindingType, checkClashes, contextDescription, disallowLetBinding);
    }
  }

  checkDuplicatedProto(prop, protoRef, refExpressionErrors) {
    if (prop.type === "SpreadElement" || prop.computed || prop.method || prop.shorthand) {
      return;
    }

    const key = prop.key;
    const name = key.type === "Identifier" ? key.name : String(key.value);

    if (name === "__proto__" && prop.kind === "init") {
      if (protoRef.used) {
        if (refExpressionErrors && refExpressionErrors.doubleProto === -1) {
          refExpressionErrors.doubleProto = key.start;
        } else {
          this.raise(key.start, "Redefinition of __proto__ property");
        }
      }

      protoRef.used = true;
    }
  }

  isValidDirective(stmt) {
    return stmt.type === "ExpressionStatement" && stmt.expression.type === "Literal" && typeof stmt.expression.value === "string" && (!stmt.expression.extra || !stmt.expression.extra.parenthesized);
  }

  stmtToDirective(stmt) {
    const directive = super.stmtToDirective(stmt);
    const value = stmt.expression.value;
    directive.value.value = value;
    return directive;
  }

  parseBlockBody(node, allowDirectives, topLevel, end) {
    super.parseBlockBody(node, allowDirectives, topLevel, end);
    const directiveStatements = node.directives.map(d => this.directiveToStmt(d));
    node.body = directiveStatements.concat(node.body);
    delete node.directives;
  }

  pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper) {
    this.parseMethod(method, isGenerator, isAsync, isConstructor, allowsDirectSuper, "ClassMethod", true);

    if (method.typeParameters) {
      method.value.typeParameters = method.typeParameters;
      delete method.typeParameters;
    }

    classBody.body.push(method);
  }

  parseExprAtom(refExpressionErrors) {
    switch (this.state.type) {
      case types.num:
      case types.string:
        return this.estreeParseLiteral(this.state.value);

      case types.regexp:
        return this.estreeParseRegExpLiteral(this.state.value);

      case types.bigint:
        return this.estreeParseBigIntLiteral(this.state.value);

      case types._null:
        return this.estreeParseLiteral(null);

      case types._true:
        return this.estreeParseLiteral(true);

      case types._false:
        return this.estreeParseLiteral(false);

      default:
        return super.parseExprAtom(refExpressionErrors);
    }
  }

  parseLiteral(value, type, startPos, startLoc) {
    const node = super.parseLiteral(value, type, startPos, startLoc);
    node.raw = node.extra.raw;
    delete node.extra;
    return node;
  }

  parseFunctionBody(node, allowExpression, isMethod = false) {
    super.parseFunctionBody(node, allowExpression, isMethod);
    node.expression = node.body.type !== "BlockStatement";
  }

  parseMethod(node, isGenerator, isAsync, isConstructor, allowDirectSuper, type, inClassScope = false) {
    let funcNode = this.startNode();
    funcNode.kind = node.kind;
    funcNode = super.parseMethod(funcNode, isGenerator, isAsync, isConstructor, allowDirectSuper, type, inClassScope);
    funcNode.type = "FunctionExpression";
    delete funcNode.kind;
    node.value = funcNode;
    type = type === "ClassMethod" ? "MethodDefinition" : type;
    return this.finishNode(node, type);
  }

  parseObjectMethod(prop, isGenerator, isAsync, isPattern, containsEsc) {
    const node = super.parseObjectMethod(prop, isGenerator, isAsync, isPattern, containsEsc);

    if (node) {
      node.type = "Property";
      if (node.kind === "method") node.kind = "init";
      node.shorthand = false;
    }

    return node;
  }

  parseObjectProperty(prop, startPos, startLoc, isPattern, refExpressionErrors) {
    const node = super.parseObjectProperty(prop, startPos, startLoc, isPattern, refExpressionErrors);

    if (node) {
      node.kind = "init";
      node.type = "Property";
    }

    return node;
  }

  toAssignable(node) {
    if (isSimpleProperty(node)) {
      this.toAssignable(node.value);
      return node;
    }

    return super.toAssignable(node);
  }

  toAssignableObjectExpressionProp(prop, isLast) {
    if (prop.kind === "get" || prop.kind === "set") {
      throw this.raise(prop.key.start, "Object pattern can't contain getter or setter");
    } else if (prop.method) {
      throw this.raise(prop.key.start, "Object pattern can't contain methods");
    } else {
      super.toAssignableObjectExpressionProp(prop, isLast);
    }
  }

  finishCallExpression(node, optional) {
    super.finishCallExpression(node, optional);

    if (node.callee.type === "Import") {
      node.type = "ImportExpression";
      node.source = node.arguments[0];
      delete node.arguments;
      delete node.callee;
    }

    return node;
  }

  toReferencedListDeep(exprList, isParenthesizedExpr) {
    if (!exprList) {
      return;
    }

    super.toReferencedListDeep(exprList, isParenthesizedExpr);
  }

});

const lineBreak = /\r\n?|[\n\u2028\u2029]/;
const lineBreakG = new RegExp(lineBreak.source, "g");
function isNewLine(code) {
  switch (code) {
    case 10:
    case 13:
    case 8232:
    case 8233:
      return true;

    default:
      return false;
  }
}
const skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
function isWhitespace(code) {
  switch (code) {
    case 0x0009:
    case 0x000b:
    case 0x000c:
    case 32:
    case 160:
    case 5760:
    case 0x2000:
    case 0x2001:
    case 0x2002:
    case 0x2003:
    case 0x2004:
    case 0x2005:
    case 0x2006:
    case 0x2007:
    case 0x2008:
    case 0x2009:
    case 0x200a:
    case 0x202f:
    case 0x205f:
    case 0x3000:
    case 0xfeff:
      return true;

    default:
      return false;
  }
}

class TokContext {
  constructor(token, isExpr, preserveSpace, override) {
    this.token = token;
    this.isExpr = !!isExpr;
    this.preserveSpace = !!preserveSpace;
    this.override = override;
  }

}
const types$1 = {
  braceStatement: new TokContext("{", false),
  braceExpression: new TokContext("{", true),
  templateQuasi: new TokContext("${", false),
  parenStatement: new TokContext("(", false),
  parenExpression: new TokContext("(", true),
  template: new TokContext("`", true, true, p => p.readTmplToken()),
  functionExpression: new TokContext("function", true),
  functionStatement: new TokContext("function", false)
};

types.parenR.updateContext = types.braceR.updateContext = function () {
  if (this.state.context.length === 1) {
    this.state.exprAllowed = true;
    return;
  }

  let out = this.state.context.pop();

  if (out === types$1.braceStatement && this.curContext().token === "function") {
    out = this.state.context.pop();
  }

  this.state.exprAllowed = !out.isExpr;
};

types.name.updateContext = function (prevType) {
  let allowed = false;

  if (prevType !== types.dot) {
    if (this.state.value === "of" && !this.state.exprAllowed || this.state.value === "yield" && this.scope.inGenerator) {
      allowed = true;
    }
  }

  this.state.exprAllowed = allowed;

  if (this.state.isIterator) {
    this.state.isIterator = false;
  }
};

types.braceL.updateContext = function (prevType) {
  this.state.context.push(this.braceIsBlock(prevType) ? types$1.braceStatement : types$1.braceExpression);
  this.state.exprAllowed = true;
};

types.dollarBraceL.updateContext = function () {
  this.state.context.push(types$1.templateQuasi);
  this.state.exprAllowed = true;
};

types.parenL.updateContext = function (prevType) {
  const statementParens = prevType === types._if || prevType === types._for || prevType === types._with || prevType === types._while;
  this.state.context.push(statementParens ? types$1.parenStatement : types$1.parenExpression);
  this.state.exprAllowed = true;
};

types.incDec.updateContext = function () {};

types._function.updateContext = types._class.updateContext = function (prevType) {
  if (prevType.beforeExpr && prevType !== types.semi && prevType !== types._else && !(prevType === types._return && lineBreak.test(this.input.slice(this.state.lastTokEnd, this.state.start))) && !((prevType === types.colon || prevType === types.braceL) && this.curContext() === types$1.b_stat)) {
    this.state.context.push(types$1.functionExpression);
  } else {
    this.state.context.push(types$1.functionStatement);
  }

  this.state.exprAllowed = false;
};

types.backQuote.updateContext = function () {
  if (this.curContext() === types$1.template) {
    this.state.context.pop();
  } else {
    this.state.context.push(types$1.template);
  }

  this.state.exprAllowed = false;
};

const reservedWords = {
  strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
  strictBind: ["eval", "arguments"]
};
const reservedWordsStrictSet = new Set(reservedWords.strict);
const reservedWordsStrictBindSet = new Set(reservedWords.strictBind);
const isReservedWord = (word, inModule) => {
  return inModule && word === "await" || word === "enum";
};
function isStrictReservedWord(word, inModule) {
  return isReservedWord(word, inModule) || reservedWordsStrictSet.has(word);
}
function isStrictBindOnlyReservedWord(word) {
  return reservedWordsStrictBindSet.has(word);
}
function isStrictBindReservedWord(word, inModule) {
  return isStrictReservedWord(word, inModule) || isStrictBindOnlyReservedWord(word);
}
function isKeyword(word) {
  return keywords.has(word);
}
const keywordRelationalOperator = /^in(stanceof)?$/;
let nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u08a0-\u08b4\u08b6-\u08bd\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fef\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7bf\ua7c2-\ua7c6\ua7f7-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab67\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";
let nonASCIIidentifierChars = "\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08d3-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1df9\u1dfb-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";
const nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
const nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;
const astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 477, 28, 11, 0, 9, 21, 155, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 12, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 0, 33, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 0, 161, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 270, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 754, 9486, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42710, 42, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541];
const astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 525, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 4, 9, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 232, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 19723, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 792487, 239];

function isInAstralSet(code, set) {
  let pos = 0x10000;

  for (let i = 0, length = set.length; i < length; i += 2) {
    pos += set[i];
    if (pos > code) return false;
    pos += set[i + 1];
    if (pos >= code) return true;
  }

  return false;
}

function isIdentifierStart(code) {
  if (code < 65) return code === 36;
  if (code <= 90) return true;
  if (code < 97) return code === 95;
  if (code <= 122) return true;

  if (code <= 0xffff) {
    return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code));
  }

  return isInAstralSet(code, astralIdentifierStartCodes);
}
function isIteratorStart(current, next) {
  return current === 64 && next === 64;
}
function isIdentifierChar(code) {
  if (code < 48) return code === 36;
  if (code < 58) return true;
  if (code < 65) return false;
  if (code <= 90) return true;
  if (code < 97) return code === 95;
  if (code <= 122) return true;

  if (code <= 0xffff) {
    return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code));
  }

  return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
}

const reservedTypes = new Set(["_", "any", "bool", "boolean", "empty", "extends", "false", "interface", "mixed", "null", "number", "static", "string", "true", "typeof", "void"]);

function isEsModuleType(bodyElement) {
  return bodyElement.type === "DeclareExportAllDeclaration" || bodyElement.type === "DeclareExportDeclaration" && (!bodyElement.declaration || bodyElement.declaration.type !== "TypeAlias" && bodyElement.declaration.type !== "InterfaceDeclaration");
}

function hasTypeImportKind(node) {
  return node.importKind === "type" || node.importKind === "typeof";
}

function isMaybeDefaultImport(state) {
  return (state.type === types.name || !!state.type.keyword) && state.value !== "from";
}

const exportSuggestions = {
  const: "declare export var",
  let: "declare export var",
  type: "export type",
  interface: "export interface"
};

function partition(list, test) {
  const list1 = [];
  const list2 = [];

  for (let i = 0; i < list.length; i++) {
    (test(list[i], i, list) ? list1 : list2).push(list[i]);
  }

  return [list1, list2];
}

const FLOW_PRAGMA_REGEX = /\*?\s*@((?:no)?flow)\b/;
var flow = (superClass => class extends superClass {
  constructor(options, input) {
    super(options, input);
    this.flowPragma = undefined;
  }

  shouldParseTypes() {
    return this.getPluginOption("flow", "all") || this.flowPragma === "flow";
  }

  shouldParseEnums() {
    return !!this.getPluginOption("flow", "enums");
  }

  finishToken(type, val) {
    if (type !== types.string && type !== types.semi && type !== types.interpreterDirective) {
      if (this.flowPragma === undefined) {
        this.flowPragma = null;
      }
    }

    return super.finishToken(type, val);
  }

  addComment(comment) {
    if (this.flowPragma === undefined) {
      const matches = FLOW_PRAGMA_REGEX.exec(comment.value);

      if (!matches) ; else if (matches[1] === "flow") {
        this.flowPragma = "flow";
      } else if (matches[1] === "noflow") {
        this.flowPragma = "noflow";
      } else {
        throw new Error("Unexpected flow pragma");
      }
    }

    return super.addComment(comment);
  }

  flowParseTypeInitialiser(tok) {
    const oldInType = this.state.inType;
    this.state.inType = true;
    this.expect(tok || types.colon);
    const type = this.flowParseType();
    this.state.inType = oldInType;
    return type;
  }

  flowParsePredicate() {
    const node = this.startNode();
    const moduloLoc = this.state.startLoc;
    const moduloPos = this.state.start;
    this.expect(types.modulo);
    const checksLoc = this.state.startLoc;
    this.expectContextual("checks");

    if (moduloLoc.line !== checksLoc.line || moduloLoc.column !== checksLoc.column - 1) {
      this.raise(moduloPos, "Spaces between ´%´ and ´checks´ are not allowed here.");
    }

    if (this.eat(types.parenL)) {
      node.value = this.parseExpression();
      this.expect(types.parenR);
      return this.finishNode(node, "DeclaredPredicate");
    } else {
      return this.finishNode(node, "InferredPredicate");
    }
  }

  flowParseTypeAndPredicateInitialiser() {
    const oldInType = this.state.inType;
    this.state.inType = true;
    this.expect(types.colon);
    let type = null;
    let predicate = null;

    if (this.match(types.modulo)) {
      this.state.inType = oldInType;
      predicate = this.flowParsePredicate();
    } else {
      type = this.flowParseType();
      this.state.inType = oldInType;

      if (this.match(types.modulo)) {
        predicate = this.flowParsePredicate();
      }
    }

    return [type, predicate];
  }

  flowParseDeclareClass(node) {
    this.next();
    this.flowParseInterfaceish(node, true);
    return this.finishNode(node, "DeclareClass");
  }

  flowParseDeclareFunction(node) {
    this.next();
    const id = node.id = this.parseIdentifier();
    const typeNode = this.startNode();
    const typeContainer = this.startNode();

    if (this.isRelational("<")) {
      typeNode.typeParameters = this.flowParseTypeParameterDeclaration();
    } else {
      typeNode.typeParameters = null;
    }

    this.expect(types.parenL);
    const tmp = this.flowParseFunctionTypeParams();
    typeNode.params = tmp.params;
    typeNode.rest = tmp.rest;
    this.expect(types.parenR);
    [typeNode.returnType, node.predicate] = this.flowParseTypeAndPredicateInitialiser();
    typeContainer.typeAnnotation = this.finishNode(typeNode, "FunctionTypeAnnotation");
    id.typeAnnotation = this.finishNode(typeContainer, "TypeAnnotation");
    this.resetEndLocation(id);
    this.semicolon();
    return this.finishNode(node, "DeclareFunction");
  }

  flowParseDeclare(node, insideModule) {
    if (this.match(types._class)) {
      return this.flowParseDeclareClass(node);
    } else if (this.match(types._function)) {
      return this.flowParseDeclareFunction(node);
    } else if (this.match(types._var)) {
      return this.flowParseDeclareVariable(node);
    } else if (this.eatContextual("module")) {
      if (this.match(types.dot)) {
        return this.flowParseDeclareModuleExports(node);
      } else {
        if (insideModule) {
          this.raise(this.state.lastTokStart, "`declare module` cannot be used inside another `declare module`");
        }

        return this.flowParseDeclareModule(node);
      }
    } else if (this.isContextual("type")) {
      return this.flowParseDeclareTypeAlias(node);
    } else if (this.isContextual("opaque")) {
      return this.flowParseDeclareOpaqueType(node);
    } else if (this.isContextual("interface")) {
      return this.flowParseDeclareInterface(node);
    } else if (this.match(types._export)) {
      return this.flowParseDeclareExportDeclaration(node, insideModule);
    } else {
      throw this.unexpected();
    }
  }

  flowParseDeclareVariable(node) {
    this.next();
    node.id = this.flowParseTypeAnnotatableIdentifier(true);
    this.scope.declareName(node.id.name, BIND_VAR, node.id.start);
    this.semicolon();
    return this.finishNode(node, "DeclareVariable");
  }

  flowParseDeclareModule(node) {
    this.scope.enter(SCOPE_OTHER);

    if (this.match(types.string)) {
      node.id = this.parseExprAtom();
    } else {
      node.id = this.parseIdentifier();
    }

    const bodyNode = node.body = this.startNode();
    const body = bodyNode.body = [];
    this.expect(types.braceL);

    while (!this.match(types.braceR)) {
      let bodyNode = this.startNode();

      if (this.match(types._import)) {
        this.next();

        if (!this.isContextual("type") && !this.match(types._typeof)) {
          this.raise(this.state.lastTokStart, "Imports within a `declare module` body must always be `import type` or `import typeof`");
        }

        this.parseImport(bodyNode);
      } else {
        this.expectContextual("declare", "Only declares and type imports are allowed inside declare module");
        bodyNode = this.flowParseDeclare(bodyNode, true);
      }

      body.push(bodyNode);
    }

    this.scope.exit();
    this.expect(types.braceR);
    this.finishNode(bodyNode, "BlockStatement");
    let kind = null;
    let hasModuleExport = false;
    const errorMessage = "Found both `declare module.exports` and `declare export` in the same module. " + "Modules can only have 1 since they are either an ES module or they are a CommonJS module";
    body.forEach(bodyElement => {
      if (isEsModuleType(bodyElement)) {
        if (kind === "CommonJS") {
          this.raise(bodyElement.start, errorMessage);
        }

        kind = "ES";
      } else if (bodyElement.type === "DeclareModuleExports") {
        if (hasModuleExport) {
          this.raise(bodyElement.start, "Duplicate `declare module.exports` statement");
        }

        if (kind === "ES") this.raise(bodyElement.start, errorMessage);
        kind = "CommonJS";
        hasModuleExport = true;
      }
    });
    node.kind = kind || "CommonJS";
    return this.finishNode(node, "DeclareModule");
  }

  flowParseDeclareExportDeclaration(node, insideModule) {
    this.expect(types._export);

    if (this.eat(types._default)) {
      if (this.match(types._function) || this.match(types._class)) {
        node.declaration = this.flowParseDeclare(this.startNode());
      } else {
        node.declaration = this.flowParseType();
        this.semicolon();
      }

      node.default = true;
      return this.finishNode(node, "DeclareExportDeclaration");
    } else {
      if (this.match(types._const) || this.isLet() || (this.isContextual("type") || this.isContextual("interface")) && !insideModule) {
        const label = this.state.value;
        const suggestion = exportSuggestions[label];
        this.unexpected(this.state.start, `\`declare export ${label}\` is not supported. Use \`${suggestion}\` instead`);
      }

      if (this.match(types._var) || this.match(types._function) || this.match(types._class) || this.isContextual("opaque")) {
          node.declaration = this.flowParseDeclare(this.startNode());
          node.default = false;
          return this.finishNode(node, "DeclareExportDeclaration");
        } else if (this.match(types.star) || this.match(types.braceL) || this.isContextual("interface") || this.isContextual("type") || this.isContextual("opaque")) {
          node = this.parseExport(node);

          if (node.type === "ExportNamedDeclaration") {
            node.type = "ExportDeclaration";
            node.default = false;
            delete node.exportKind;
          }

          node.type = "Declare" + node.type;
          return node;
        }
    }

    throw this.unexpected();
  }

  flowParseDeclareModuleExports(node) {
    this.next();
    this.expectContextual("exports");
    node.typeAnnotation = this.flowParseTypeAnnotation();
    this.semicolon();
    return this.finishNode(node, "DeclareModuleExports");
  }

  flowParseDeclareTypeAlias(node) {
    this.next();
    this.flowParseTypeAlias(node);
    node.type = "DeclareTypeAlias";
    return node;
  }

  flowParseDeclareOpaqueType(node) {
    this.next();
    this.flowParseOpaqueType(node, true);
    node.type = "DeclareOpaqueType";
    return node;
  }

  flowParseDeclareInterface(node) {
    this.next();
    this.flowParseInterfaceish(node);
    return this.finishNode(node, "DeclareInterface");
  }

  flowParseInterfaceish(node, isClass = false) {
    node.id = this.flowParseRestrictedIdentifier(!isClass, true);
    this.scope.declareName(node.id.name, isClass ? BIND_FUNCTION : BIND_LEXICAL, node.id.start);

    if (this.isRelational("<")) {
      node.typeParameters = this.flowParseTypeParameterDeclaration();
    } else {
      node.typeParameters = null;
    }

    node.extends = [];
    node.implements = [];
    node.mixins = [];

    if (this.eat(types._extends)) {
      do {
        node.extends.push(this.flowParseInterfaceExtends());
      } while (!isClass && this.eat(types.comma));
    }

    if (this.isContextual("mixins")) {
      this.next();

      do {
        node.mixins.push(this.flowParseInterfaceExtends());
      } while (this.eat(types.comma));
    }

    if (this.isContextual("implements")) {
      this.next();

      do {
        node.implements.push(this.flowParseInterfaceExtends());
      } while (this.eat(types.comma));
    }

    node.body = this.flowParseObjectType({
      allowStatic: isClass,
      allowExact: false,
      allowSpread: false,
      allowProto: isClass,
      allowInexact: false
    });
  }

  flowParseInterfaceExtends() {
    const node = this.startNode();
    node.id = this.flowParseQualifiedTypeIdentifier();

    if (this.isRelational("<")) {
      node.typeParameters = this.flowParseTypeParameterInstantiation();
    } else {
      node.typeParameters = null;
    }

    return this.finishNode(node, "InterfaceExtends");
  }

  flowParseInterface(node) {
    this.flowParseInterfaceish(node);
    return this.finishNode(node, "InterfaceDeclaration");
  }

  checkNotUnderscore(word) {
    if (word === "_") {
      this.raise(this.state.start, "`_` is only allowed as a type argument to call or new");
    }
  }

  checkReservedType(word, startLoc, declaration) {
    if (!reservedTypes.has(word)) return;

    if (declaration) {
      this.raise(startLoc, `Cannot overwrite reserved type ${word}`);
      return;
    }

    this.raise(startLoc, `Unexpected reserved type ${word}`);
  }

  flowParseRestrictedIdentifier(liberal, declaration) {
    this.checkReservedType(this.state.value, this.state.start, declaration);
    return this.parseIdentifier(liberal);
  }

  flowParseTypeAlias(node) {
    node.id = this.flowParseRestrictedIdentifier(false, true);
    this.scope.declareName(node.id.name, BIND_LEXICAL, node.id.start);

    if (this.isRelational("<")) {
      node.typeParameters = this.flowParseTypeParameterDeclaration();
    } else {
      node.typeParameters = null;
    }

    node.right = this.flowParseTypeInitialiser(types.eq);
    this.semicolon();
    return this.finishNode(node, "TypeAlias");
  }

  flowParseOpaqueType(node, declare) {
    this.expectContextual("type");
    node.id = this.flowParseRestrictedIdentifier(true, true);
    this.scope.declareName(node.id.name, BIND_LEXICAL, node.id.start);

    if (this.isRelational("<")) {
      node.typeParameters = this.flowParseTypeParameterDeclaration();
    } else {
      node.typeParameters = null;
    }

    node.supertype = null;

    if (this.match(types.colon)) {
      node.supertype = this.flowParseTypeInitialiser(types.colon);
    }

    node.impltype = null;

    if (!declare) {
      node.impltype = this.flowParseTypeInitialiser(types.eq);
    }

    this.semicolon();
    return this.finishNode(node, "OpaqueType");
  }

  flowParseTypeParameter(requireDefault = false) {
    const nodeStart = this.state.start;
    const node = this.startNode();
    const variance = this.flowParseVariance();
    const ident = this.flowParseTypeAnnotatableIdentifier();
    node.name = ident.name;
    node.variance = variance;
    node.bound = ident.typeAnnotation;

    if (this.match(types.eq)) {
      this.eat(types.eq);
      node.default = this.flowParseType();
    } else {
      if (requireDefault) {
        this.raise(nodeStart, "Type parameter declaration needs a default, since a preceding type parameter declaration has a default.");
      }
    }

    return this.finishNode(node, "TypeParameter");
  }

  flowParseTypeParameterDeclaration() {
    const oldInType = this.state.inType;
    const node = this.startNode();
    node.params = [];
    this.state.inType = true;

    if (this.isRelational("<") || this.match(types.jsxTagStart)) {
      this.next();
    } else {
      this.unexpected();
    }

    let defaultRequired = false;

    do {
      const typeParameter = this.flowParseTypeParameter(defaultRequired);
      node.params.push(typeParameter);

      if (typeParameter.default) {
        defaultRequired = true;
      }

      if (!this.isRelational(">")) {
        this.expect(types.comma);
      }
    } while (!this.isRelational(">"));

    this.expectRelational(">");
    this.state.inType = oldInType;
    return this.finishNode(node, "TypeParameterDeclaration");
  }

  flowParseTypeParameterInstantiation() {
    const node = this.startNode();
    const oldInType = this.state.inType;
    node.params = [];
    this.state.inType = true;
    this.expectRelational("<");
    const oldNoAnonFunctionType = this.state.noAnonFunctionType;
    this.state.noAnonFunctionType = false;

    while (!this.isRelational(">")) {
      node.params.push(this.flowParseType());

      if (!this.isRelational(">")) {
        this.expect(types.comma);
      }
    }

    this.state.noAnonFunctionType = oldNoAnonFunctionType;
    this.expectRelational(">");
    this.state.inType = oldInType;
    return this.finishNode(node, "TypeParameterInstantiation");
  }

  flowParseTypeParameterInstantiationCallOrNew() {
    const node = this.startNode();
    const oldInType = this.state.inType;
    node.params = [];
    this.state.inType = true;
    this.expectRelational("<");

    while (!this.isRelational(">")) {
      node.params.push(this.flowParseTypeOrImplicitInstantiation());

      if (!this.isRelational(">")) {
        this.expect(types.comma);
      }
    }

    this.expectRelational(">");
    this.state.inType = oldInType;
    return this.finishNode(node, "TypeParameterInstantiation");
  }

  flowParseInterfaceType() {
    const node = this.startNode();
    this.expectContextual("interface");
    node.extends = [];

    if (this.eat(types._extends)) {
      do {
        node.extends.push(this.flowParseInterfaceExtends());
      } while (this.eat(types.comma));
    }

    node.body = this.flowParseObjectType({
      allowStatic: false,
      allowExact: false,
      allowSpread: false,
      allowProto: false,
      allowInexact: false
    });
    return this.finishNode(node, "InterfaceTypeAnnotation");
  }

  flowParseObjectPropertyKey() {
    return this.match(types.num) || this.match(types.string) ? this.parseExprAtom() : this.parseIdentifier(true);
  }

  flowParseObjectTypeIndexer(node, isStatic, variance) {
    node.static = isStatic;

    if (this.lookahead().type === types.colon) {
      node.id = this.flowParseObjectPropertyKey();
      node.key = this.flowParseTypeInitialiser();
    } else {
      node.id = null;
      node.key = this.flowParseType();
    }

    this.expect(types.bracketR);
    node.value = this.flowParseTypeInitialiser();
    node.variance = variance;
    return this.finishNode(node, "ObjectTypeIndexer");
  }

  flowParseObjectTypeInternalSlot(node, isStatic) {
    node.static = isStatic;
    node.id = this.flowParseObjectPropertyKey();
    this.expect(types.bracketR);
    this.expect(types.bracketR);

    if (this.isRelational("<") || this.match(types.parenL)) {
      node.method = true;
      node.optional = false;
      node.value = this.flowParseObjectTypeMethodish(this.startNodeAt(node.start, node.loc.start));
    } else {
      node.method = false;

      if (this.eat(types.question)) {
        node.optional = true;
      }

      node.value = this.flowParseTypeInitialiser();
    }

    return this.finishNode(node, "ObjectTypeInternalSlot");
  }

  flowParseObjectTypeMethodish(node) {
    node.params = [];
    node.rest = null;
    node.typeParameters = null;

    if (this.isRelational("<")) {
      node.typeParameters = this.flowParseTypeParameterDeclaration();
    }

    this.expect(types.parenL);

    while (!this.match(types.parenR) && !this.match(types.ellipsis)) {
      node.params.push(this.flowParseFunctionTypeParam());

      if (!this.match(types.parenR)) {
        this.expect(types.comma);
      }
    }

    if (this.eat(types.ellipsis)) {
      node.rest = this.flowParseFunctionTypeParam();
    }

    this.expect(types.parenR);
    node.returnType = this.flowParseTypeInitialiser();
    return this.finishNode(node, "FunctionTypeAnnotation");
  }

  flowParseObjectTypeCallProperty(node, isStatic) {
    const valueNode = this.startNode();
    node.static = isStatic;
    node.value = this.flowParseObjectTypeMethodish(valueNode);
    return this.finishNode(node, "ObjectTypeCallProperty");
  }

  flowParseObjectType({
    allowStatic,
    allowExact,
    allowSpread,
    allowProto,
    allowInexact
  }) {
    const oldInType = this.state.inType;
    this.state.inType = true;
    const nodeStart = this.startNode();
    nodeStart.callProperties = [];
    nodeStart.properties = [];
    nodeStart.indexers = [];
    nodeStart.internalSlots = [];
    let endDelim;
    let exact;
    let inexact = false;

    if (allowExact && this.match(types.braceBarL)) {
      this.expect(types.braceBarL);
      endDelim = types.braceBarR;
      exact = true;
    } else {
      this.expect(types.braceL);
      endDelim = types.braceR;
      exact = false;
    }

    nodeStart.exact = exact;

    while (!this.match(endDelim)) {
      let isStatic = false;
      let protoStart = null;
      let inexactStart = null;
      const node = this.startNode();

      if (allowProto && this.isContextual("proto")) {
        const lookahead = this.lookahead();

        if (lookahead.type !== types.colon && lookahead.type !== types.question) {
          this.next();
          protoStart = this.state.start;
          allowStatic = false;
        }
      }

      if (allowStatic && this.isContextual("static")) {
        const lookahead = this.lookahead();

        if (lookahead.type !== types.colon && lookahead.type !== types.question) {
          this.next();
          isStatic = true;
        }
      }

      const variance = this.flowParseVariance();

      if (this.eat(types.bracketL)) {
        if (protoStart != null) {
          this.unexpected(protoStart);
        }

        if (this.eat(types.bracketL)) {
          if (variance) {
            this.unexpected(variance.start);
          }

          nodeStart.internalSlots.push(this.flowParseObjectTypeInternalSlot(node, isStatic));
        } else {
          nodeStart.indexers.push(this.flowParseObjectTypeIndexer(node, isStatic, variance));
        }
      } else if (this.match(types.parenL) || this.isRelational("<")) {
        if (protoStart != null) {
          this.unexpected(protoStart);
        }

        if (variance) {
          this.unexpected(variance.start);
        }

        nodeStart.callProperties.push(this.flowParseObjectTypeCallProperty(node, isStatic));
      } else {
        let kind = "init";

        if (this.isContextual("get") || this.isContextual("set")) {
          const lookahead = this.lookahead();

          if (lookahead.type === types.name || lookahead.type === types.string || lookahead.type === types.num) {
            kind = this.state.value;
            this.next();
          }
        }

        const propOrInexact = this.flowParseObjectTypeProperty(node, isStatic, protoStart, variance, kind, allowSpread, allowInexact != null ? allowInexact : !exact);

        if (propOrInexact === null) {
          inexact = true;
          inexactStart = this.state.lastTokStart;
        } else {
          nodeStart.properties.push(propOrInexact);
        }
      }

      this.flowObjectTypeSemicolon();

      if (inexactStart && !this.match(types.braceR) && !this.match(types.braceBarR)) {
        this.raise(inexactStart, "Explicit inexact syntax must appear at the end of an inexact object");
      }
    }

    this.expect(endDelim);

    if (allowSpread) {
      nodeStart.inexact = inexact;
    }

    const out = this.finishNode(nodeStart, "ObjectTypeAnnotation");
    this.state.inType = oldInType;
    return out;
  }

  flowParseObjectTypeProperty(node, isStatic, protoStart, variance, kind, allowSpread, allowInexact) {
    if (this.eat(types.ellipsis)) {
      const isInexactToken = this.match(types.comma) || this.match(types.semi) || this.match(types.braceR) || this.match(types.braceBarR);

      if (isInexactToken) {
        if (!allowSpread) {
          this.raise(this.state.lastTokStart, "Explicit inexact syntax cannot appear in class or interface definitions");
        } else if (!allowInexact) {
          this.raise(this.state.lastTokStart, "Explicit inexact syntax cannot appear inside an explicit exact object type");
        }

        if (variance) {
          this.raise(variance.start, "Explicit inexact syntax cannot have variance");
        }

        return null;
      }

      if (!allowSpread) {
        this.raise(this.state.lastTokStart, "Spread operator cannot appear in class or interface definitions");
      }

      if (protoStart != null) {
        this.unexpected(protoStart);
      }

      if (variance) {
        this.raise(variance.start, "Spread properties cannot have variance");
      }

      node.argument = this.flowParseType();
      return this.finishNode(node, "ObjectTypeSpreadProperty");
    } else {
      node.key = this.flowParseObjectPropertyKey();
      node.static = isStatic;
      node.proto = protoStart != null;
      node.kind = kind;
      let optional = false;

      if (this.isRelational("<") || this.match(types.parenL)) {
        node.method = true;

        if (protoStart != null) {
          this.unexpected(protoStart);
        }

        if (variance) {
          this.unexpected(variance.start);
        }

        node.value = this.flowParseObjectTypeMethodish(this.startNodeAt(node.start, node.loc.start));

        if (kind === "get" || kind === "set") {
          this.flowCheckGetterSetterParams(node);
        }
      } else {
        if (kind !== "init") this.unexpected();
        node.method = false;

        if (this.eat(types.question)) {
          optional = true;
        }

        node.value = this.flowParseTypeInitialiser();
        node.variance = variance;
      }

      node.optional = optional;
      return this.finishNode(node, "ObjectTypeProperty");
    }
  }

  flowCheckGetterSetterParams(property) {
    const paramCount = property.kind === "get" ? 0 : 1;
    const start = property.start;
    const length = property.value.params.length + (property.value.rest ? 1 : 0);

    if (length !== paramCount) {
      if (property.kind === "get") {
        this.raise(start, "getter must not have any formal parameters");
      } else {
        this.raise(start, "setter must have exactly one formal parameter");
      }
    }

    if (property.kind === "set" && property.value.rest) {
      this.raise(start, "setter function argument must not be a rest parameter");
    }
  }

  flowObjectTypeSemicolon() {
    if (!this.eat(types.semi) && !this.eat(types.comma) && !this.match(types.braceR) && !this.match(types.braceBarR)) {
      this.unexpected();
    }
  }

  flowParseQualifiedTypeIdentifier(startPos, startLoc, id) {
    startPos = startPos || this.state.start;
    startLoc = startLoc || this.state.startLoc;
    let node = id || this.flowParseRestrictedIdentifier(true);

    while (this.eat(types.dot)) {
      const node2 = this.startNodeAt(startPos, startLoc);
      node2.qualification = node;
      node2.id = this.flowParseRestrictedIdentifier(true);
      node = this.finishNode(node2, "QualifiedTypeIdentifier");
    }

    return node;
  }

  flowParseGenericType(startPos, startLoc, id) {
    const node = this.startNodeAt(startPos, startLoc);
    node.typeParameters = null;
    node.id = this.flowParseQualifiedTypeIdentifier(startPos, startLoc, id);

    if (this.isRelational("<")) {
      node.typeParameters = this.flowParseTypeParameterInstantiation();
    }

    return this.finishNode(node, "GenericTypeAnnotation");
  }

  flowParseTypeofType() {
    const node = this.startNode();
    this.expect(types._typeof);
    node.argument = this.flowParsePrimaryType();
    return this.finishNode(node, "TypeofTypeAnnotation");
  }

  flowParseTupleType() {
    const node = this.startNode();
    node.types = [];
    this.expect(types.bracketL);

    while (this.state.pos < this.length && !this.match(types.bracketR)) {
      node.types.push(this.flowParseType());
      if (this.match(types.bracketR)) break;
      this.expect(types.comma);
    }

    this.expect(types.bracketR);
    return this.finishNode(node, "TupleTypeAnnotation");
  }

  flowParseFunctionTypeParam() {
    let name = null;
    let optional = false;
    let typeAnnotation = null;
    const node = this.startNode();
    const lh = this.lookahead();

    if (lh.type === types.colon || lh.type === types.question) {
      name = this.parseIdentifier();

      if (this.eat(types.question)) {
        optional = true;
      }

      typeAnnotation = this.flowParseTypeInitialiser();
    } else {
      typeAnnotation = this.flowParseType();
    }

    node.name = name;
    node.optional = optional;
    node.typeAnnotation = typeAnnotation;
    return this.finishNode(node, "FunctionTypeParam");
  }

  reinterpretTypeAsFunctionTypeParam(type) {
    const node = this.startNodeAt(type.start, type.loc.start);
    node.name = null;
    node.optional = false;
    node.typeAnnotation = type;
    return this.finishNode(node, "FunctionTypeParam");
  }

  flowParseFunctionTypeParams(params = []) {
    let rest = null;

    while (!this.match(types.parenR) && !this.match(types.ellipsis)) {
      params.push(this.flowParseFunctionTypeParam());

      if (!this.match(types.parenR)) {
        this.expect(types.comma);
      }
    }

    if (this.eat(types.ellipsis)) {
      rest = this.flowParseFunctionTypeParam();
    }

    return {
      params,
      rest
    };
  }

  flowIdentToTypeAnnotation(startPos, startLoc, node, id) {
    switch (id.name) {
      case "any":
        return this.finishNode(node, "AnyTypeAnnotation");

      case "bool":
      case "boolean":
        return this.finishNode(node, "BooleanTypeAnnotation");

      case "mixed":
        return this.finishNode(node, "MixedTypeAnnotation");

      case "empty":
        return this.finishNode(node, "EmptyTypeAnnotation");

      case "number":
        return this.finishNode(node, "NumberTypeAnnotation");

      case "string":
        return this.finishNode(node, "StringTypeAnnotation");

      default:
        this.checkNotUnderscore(id.name);
        return this.flowParseGenericType(startPos, startLoc, id);
    }
  }

  flowParsePrimaryType() {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    const node = this.startNode();
    let tmp;
    let type;
    let isGroupedType = false;
    const oldNoAnonFunctionType = this.state.noAnonFunctionType;

    switch (this.state.type) {
      case types.name:
        if (this.isContextual("interface")) {
          return this.flowParseInterfaceType();
        }

        return this.flowIdentToTypeAnnotation(startPos, startLoc, node, this.parseIdentifier());

      case types.braceL:
        return this.flowParseObjectType({
          allowStatic: false,
          allowExact: false,
          allowSpread: true,
          allowProto: false,
          allowInexact: true
        });

      case types.braceBarL:
        return this.flowParseObjectType({
          allowStatic: false,
          allowExact: true,
          allowSpread: true,
          allowProto: false,
          allowInexact: false
        });

      case types.bracketL:
        this.state.noAnonFunctionType = false;
        type = this.flowParseTupleType();
        this.state.noAnonFunctionType = oldNoAnonFunctionType;
        return type;

      case types.relational:
        if (this.state.value === "<") {
          node.typeParameters = this.flowParseTypeParameterDeclaration();
          this.expect(types.parenL);
          tmp = this.flowParseFunctionTypeParams();
          node.params = tmp.params;
          node.rest = tmp.rest;
          this.expect(types.parenR);
          this.expect(types.arrow);
          node.returnType = this.flowParseType();
          return this.finishNode(node, "FunctionTypeAnnotation");
        }

        break;

      case types.parenL:
        this.next();

        if (!this.match(types.parenR) && !this.match(types.ellipsis)) {
          if (this.match(types.name)) {
            const token = this.lookahead().type;
            isGroupedType = token !== types.question && token !== types.colon;
          } else {
            isGroupedType = true;
          }
        }

        if (isGroupedType) {
          this.state.noAnonFunctionType = false;
          type = this.flowParseType();
          this.state.noAnonFunctionType = oldNoAnonFunctionType;

          if (this.state.noAnonFunctionType || !(this.match(types.comma) || this.match(types.parenR) && this.lookahead().type === types.arrow)) {
            this.expect(types.parenR);
            return type;
          } else {
            this.eat(types.comma);
          }
        }

        if (type) {
          tmp = this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(type)]);
        } else {
          tmp = this.flowParseFunctionTypeParams();
        }

        node.params = tmp.params;
        node.rest = tmp.rest;
        this.expect(types.parenR);
        this.expect(types.arrow);
        node.returnType = this.flowParseType();
        node.typeParameters = null;
        return this.finishNode(node, "FunctionTypeAnnotation");

      case types.string:
        return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");

      case types._true:
      case types._false:
        node.value = this.match(types._true);
        this.next();
        return this.finishNode(node, "BooleanLiteralTypeAnnotation");

      case types.plusMin:
        if (this.state.value === "-") {
          this.next();

          if (this.match(types.num)) {
            return this.parseLiteral(-this.state.value, "NumberLiteralTypeAnnotation", node.start, node.loc.start);
          }

          if (this.match(types.bigint)) {
            return this.parseLiteral(-this.state.value, "BigIntLiteralTypeAnnotation", node.start, node.loc.start);
          }

          throw this.raise(this.state.start, `Unexpected token, expected "number" or "bigint"`);
        }

        this.unexpected();

      case types.num:
        return this.parseLiteral(this.state.value, "NumberLiteralTypeAnnotation");

      case types.bigint:
        return this.parseLiteral(this.state.value, "BigIntLiteralTypeAnnotation");

      case types._void:
        this.next();
        return this.finishNode(node, "VoidTypeAnnotation");

      case types._null:
        this.next();
        return this.finishNode(node, "NullLiteralTypeAnnotation");

      case types._this:
        this.next();
        return this.finishNode(node, "ThisTypeAnnotation");

      case types.star:
        this.next();
        return this.finishNode(node, "ExistsTypeAnnotation");

      default:
        if (this.state.type.keyword === "typeof") {
          return this.flowParseTypeofType();
        } else if (this.state.type.keyword) {
          const label = this.state.type.label;
          this.next();
          return super.createIdentifier(node, label);
        }

    }

    throw this.unexpected();
  }

  flowParsePostfixType() {
    const startPos = this.state.start,
          startLoc = this.state.startLoc;
    let type = this.flowParsePrimaryType();

    while (this.match(types.bracketL) && !this.canInsertSemicolon()) {
      const node = this.startNodeAt(startPos, startLoc);
      node.elementType = type;
      this.expect(types.bracketL);
      this.expect(types.bracketR);
      type = this.finishNode(node, "ArrayTypeAnnotation");
    }

    return type;
  }

  flowParsePrefixType() {
    const node = this.startNode();

    if (this.eat(types.question)) {
      node.typeAnnotation = this.flowParsePrefixType();
      return this.finishNode(node, "NullableTypeAnnotation");
    } else {
      return this.flowParsePostfixType();
    }
  }

  flowParseAnonFunctionWithoutParens() {
    const param = this.flowParsePrefixType();

    if (!this.state.noAnonFunctionType && this.eat(types.arrow)) {
      const node = this.startNodeAt(param.start, param.loc.start);
      node.params = [this.reinterpretTypeAsFunctionTypeParam(param)];
      node.rest = null;
      node.returnType = this.flowParseType();
      node.typeParameters = null;
      return this.finishNode(node, "FunctionTypeAnnotation");
    }

    return param;
  }

  flowParseIntersectionType() {
    const node = this.startNode();
    this.eat(types.bitwiseAND);
    const type = this.flowParseAnonFunctionWithoutParens();
    node.types = [type];

    while (this.eat(types.bitwiseAND)) {
      node.types.push(this.flowParseAnonFunctionWithoutParens());
    }

    return node.types.length === 1 ? type : this.finishNode(node, "IntersectionTypeAnnotation");
  }

  flowParseUnionType() {
    const node = this.startNode();
    this.eat(types.bitwiseOR);
    const type = this.flowParseIntersectionType();
    node.types = [type];

    while (this.eat(types.bitwiseOR)) {
      node.types.push(this.flowParseIntersectionType());
    }

    return node.types.length === 1 ? type : this.finishNode(node, "UnionTypeAnnotation");
  }

  flowParseType() {
    const oldInType = this.state.inType;
    this.state.inType = true;
    const type = this.flowParseUnionType();
    this.state.inType = oldInType;
    this.state.exprAllowed = this.state.exprAllowed || this.state.noAnonFunctionType;
    return type;
  }

  flowParseTypeOrImplicitInstantiation() {
    if (this.state.type === types.name && this.state.value === "_") {
      const startPos = this.state.start;
      const startLoc = this.state.startLoc;
      const node = this.parseIdentifier();
      return this.flowParseGenericType(startPos, startLoc, node);
    } else {
      return this.flowParseType();
    }
  }

  flowParseTypeAnnotation() {
    const node = this.startNode();
    node.typeAnnotation = this.flowParseTypeInitialiser();
    return this.finishNode(node, "TypeAnnotation");
  }

  flowParseTypeAnnotatableIdentifier(allowPrimitiveOverride) {
    const ident = allowPrimitiveOverride ? this.parseIdentifier() : this.flowParseRestrictedIdentifier();

    if (this.match(types.colon)) {
      ident.typeAnnotation = this.flowParseTypeAnnotation();
      this.resetEndLocation(ident);
    }

    return ident;
  }

  typeCastToParameter(node) {
    node.expression.typeAnnotation = node.typeAnnotation;
    this.resetEndLocation(node.expression, node.typeAnnotation.end, node.typeAnnotation.loc.end);
    return node.expression;
  }

  flowParseVariance() {
    let variance = null;

    if (this.match(types.plusMin)) {
      variance = this.startNode();

      if (this.state.value === "+") {
        variance.kind = "plus";
      } else {
        variance.kind = "minus";
      }

      this.next();
      this.finishNode(variance, "Variance");
    }

    return variance;
  }

  parseFunctionBody(node, allowExpressionBody, isMethod = false) {
    if (allowExpressionBody) {
      return this.forwardNoArrowParamsConversionAt(node, () => super.parseFunctionBody(node, true, isMethod));
    }

    return super.parseFunctionBody(node, false, isMethod);
  }

  parseFunctionBodyAndFinish(node, type, isMethod = false) {
    if (this.match(types.colon)) {
      const typeNode = this.startNode();
      [typeNode.typeAnnotation, node.predicate] = this.flowParseTypeAndPredicateInitialiser();
      node.returnType = typeNode.typeAnnotation ? this.finishNode(typeNode, "TypeAnnotation") : null;
    }

    super.parseFunctionBodyAndFinish(node, type, isMethod);
  }

  parseStatement(context, topLevel) {
    if (this.state.strict && this.match(types.name) && this.state.value === "interface") {
      const node = this.startNode();
      this.next();
      return this.flowParseInterface(node);
    } else if (this.shouldParseEnums() && this.isContextual("enum")) {
      const node = this.startNode();
      this.next();
      return this.flowParseEnumDeclaration(node);
    } else {
      const stmt = super.parseStatement(context, topLevel);

      if (this.flowPragma === undefined && !this.isValidDirective(stmt)) {
        this.flowPragma = null;
      }

      return stmt;
    }
  }

  parseExpressionStatement(node, expr) {
    if (expr.type === "Identifier") {
      if (expr.name === "declare") {
        if (this.match(types._class) || this.match(types.name) || this.match(types._function) || this.match(types._var) || this.match(types._export)) {
          return this.flowParseDeclare(node);
        }
      } else if (this.match(types.name)) {
        if (expr.name === "interface") {
          return this.flowParseInterface(node);
        } else if (expr.name === "type") {
          return this.flowParseTypeAlias(node);
        } else if (expr.name === "opaque") {
          return this.flowParseOpaqueType(node, false);
        }
      }
    }

    return super.parseExpressionStatement(node, expr);
  }

  shouldParseExportDeclaration() {
    return this.isContextual("type") || this.isContextual("interface") || this.isContextual("opaque") || this.shouldParseEnums() && this.isContextual("enum") || super.shouldParseExportDeclaration();
  }

  isExportDefaultSpecifier() {
    if (this.match(types.name) && (this.state.value === "type" || this.state.value === "interface" || this.state.value === "opaque" || this.shouldParseEnums() && this.state.value === "enum")) {
      return false;
    }

    return super.isExportDefaultSpecifier();
  }

  parseExportDefaultExpression() {
    if (this.shouldParseEnums() && this.isContextual("enum")) {
      const node = this.startNode();
      this.next();
      return this.flowParseEnumDeclaration(node);
    }

    return super.parseExportDefaultExpression();
  }

  parseConditional(expr, noIn, startPos, startLoc, refNeedsArrowPos) {
    if (!this.match(types.question)) return expr;

    if (refNeedsArrowPos) {
      const result = this.tryParse(() => super.parseConditional(expr, noIn, startPos, startLoc));

      if (!result.node) {
        refNeedsArrowPos.start = result.error.pos || this.state.start;
        return expr;
      }

      if (result.error) this.state = result.failState;
      return result.node;
    }

    this.expect(types.question);
    const state = this.state.clone();
    const originalNoArrowAt = this.state.noArrowAt;
    const node = this.startNodeAt(startPos, startLoc);
    let {
      consequent,
      failed
    } = this.tryParseConditionalConsequent();
    let [valid, invalid] = this.getArrowLikeExpressions(consequent);

    if (failed || invalid.length > 0) {
      const noArrowAt = [...originalNoArrowAt];

      if (invalid.length > 0) {
        this.state = state;
        this.state.noArrowAt = noArrowAt;

        for (let i = 0; i < invalid.length; i++) {
          noArrowAt.push(invalid[i].start);
        }

        ({
          consequent,
          failed
        } = this.tryParseConditionalConsequent());
        [valid, invalid] = this.getArrowLikeExpressions(consequent);
      }

      if (failed && valid.length > 1) {
        this.raise(state.start, "Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.");
      }

      if (failed && valid.length === 1) {
        this.state = state;
        this.state.noArrowAt = noArrowAt.concat(valid[0].start);
        ({
          consequent,
          failed
        } = this.tryParseConditionalConsequent());
      }
    }

    this.getArrowLikeExpressions(consequent, true);
    this.state.noArrowAt = originalNoArrowAt;
    this.expect(types.colon);
    node.test = expr;
    node.consequent = consequent;
    node.alternate = this.forwardNoArrowParamsConversionAt(node, () => this.parseMaybeAssign(noIn, undefined, undefined, undefined));
    return this.finishNode(node, "ConditionalExpression");
  }

  tryParseConditionalConsequent() {
    this.state.noArrowParamsConversionAt.push(this.state.start);
    const consequent = this.parseMaybeAssign();
    const failed = !this.match(types.colon);
    this.state.noArrowParamsConversionAt.pop();
    return {
      consequent,
      failed
    };
  }

  getArrowLikeExpressions(node, disallowInvalid) {
    const stack = [node];
    const arrows = [];

    while (stack.length !== 0) {
      const node = stack.pop();

      if (node.type === "ArrowFunctionExpression") {
        if (node.typeParameters || !node.returnType) {
          this.finishArrowValidation(node);
        } else {
          arrows.push(node);
        }

        stack.push(node.body);
      } else if (node.type === "ConditionalExpression") {
        stack.push(node.consequent);
        stack.push(node.alternate);
      }
    }

    if (disallowInvalid) {
      arrows.forEach(node => this.finishArrowValidation(node));
      return [arrows, []];
    }

    return partition(arrows, node => node.params.every(param => this.isAssignable(param, true)));
  }

  finishArrowValidation(node) {
    var _node$extra;

    this.toAssignableList(node.params, (_node$extra = node.extra) == null ? void 0 : _node$extra.trailingComma);
    this.scope.enter(functionFlags(false, false) | SCOPE_ARROW);
    super.checkParams(node, false, true);
    this.scope.exit();
  }

  forwardNoArrowParamsConversionAt(node, parse) {
    let result;

    if (this.state.noArrowParamsConversionAt.indexOf(node.start) !== -1) {
      this.state.noArrowParamsConversionAt.push(this.state.start);
      result = parse();
      this.state.noArrowParamsConversionAt.pop();
    } else {
      result = parse();
    }

    return result;
  }

  parseParenItem(node, startPos, startLoc) {
    node = super.parseParenItem(node, startPos, startLoc);

    if (this.eat(types.question)) {
      node.optional = true;
      this.resetEndLocation(node);
    }

    if (this.match(types.colon)) {
      const typeCastNode = this.startNodeAt(startPos, startLoc);
      typeCastNode.expression = node;
      typeCastNode.typeAnnotation = this.flowParseTypeAnnotation();
      return this.finishNode(typeCastNode, "TypeCastExpression");
    }

    return node;
  }

  assertModuleNodeAllowed(node) {
    if (node.type === "ImportDeclaration" && (node.importKind === "type" || node.importKind === "typeof") || node.type === "ExportNamedDeclaration" && node.exportKind === "type" || node.type === "ExportAllDeclaration" && node.exportKind === "type") {
      return;
    }

    super.assertModuleNodeAllowed(node);
  }

  parseExport(node) {
    const decl = super.parseExport(node);

    if (decl.type === "ExportNamedDeclaration" || decl.type === "ExportAllDeclaration") {
      decl.exportKind = decl.exportKind || "value";
    }

    return decl;
  }

  parseExportDeclaration(node) {
    if (this.isContextual("type")) {
      node.exportKind = "type";
      const declarationNode = this.startNode();
      this.next();

      if (this.match(types.braceL)) {
        node.specifiers = this.parseExportSpecifiers();
        this.parseExportFrom(node);
        return null;
      } else {
        return this.flowParseTypeAlias(declarationNode);
      }
    } else if (this.isContextual("opaque")) {
      node.exportKind = "type";
      const declarationNode = this.startNode();
      this.next();
      return this.flowParseOpaqueType(declarationNode, false);
    } else if (this.isContextual("interface")) {
      node.exportKind = "type";
      const declarationNode = this.startNode();
      this.next();
      return this.flowParseInterface(declarationNode);
    } else if (this.shouldParseEnums() && this.isContextual("enum")) {
      node.exportKind = "value";
      const declarationNode = this.startNode();
      this.next();
      return this.flowParseEnumDeclaration(declarationNode);
    } else {
      return super.parseExportDeclaration(node);
    }
  }

  eatExportStar(node) {
    if (super.eatExportStar(...arguments)) return true;

    if (this.isContextual("type") && this.lookahead().type === types.star) {
      node.exportKind = "type";
      this.next();
      this.next();
      return true;
    }

    return false;
  }

  maybeParseExportNamespaceSpecifier(node) {
    const pos = this.state.start;
    const hasNamespace = super.maybeParseExportNamespaceSpecifier(node);

    if (hasNamespace && node.exportKind === "type") {
      this.unexpected(pos);
    }

    return hasNamespace;
  }

  parseClassId(node, isStatement, optionalId) {
    super.parseClassId(node, isStatement, optionalId);

    if (this.isRelational("<")) {
      node.typeParameters = this.flowParseTypeParameterDeclaration();
    }
  }

  getTokenFromCode(code) {
    const next = this.input.charCodeAt(this.state.pos + 1);

    if (code === 123 && next === 124) {
      return this.finishOp(types.braceBarL, 2);
    } else if (this.state.inType && (code === 62 || code === 60)) {
      return this.finishOp(types.relational, 1);
    } else if (isIteratorStart(code, next)) {
      this.state.isIterator = true;
      return super.readWord();
    } else {
      return super.getTokenFromCode(code);
    }
  }

  isAssignable(node, isBinding) {
    switch (node.type) {
      case "Identifier":
      case "ObjectPattern":
      case "ArrayPattern":
      case "AssignmentPattern":
        return true;

      case "ObjectExpression":
        {
          const last = node.properties.length - 1;
          return node.properties.every((prop, i) => {
            return prop.type !== "ObjectMethod" && (i === last || prop.type === "SpreadElement") && this.isAssignable(prop);
          });
        }

      case "ObjectProperty":
        return this.isAssignable(node.value);

      case "SpreadElement":
        return this.isAssignable(node.argument);

      case "ArrayExpression":
        return node.elements.every(element => this.isAssignable(element));

      case "AssignmentExpression":
        return node.operator === "=";

      case "ParenthesizedExpression":
      case "TypeCastExpression":
        return this.isAssignable(node.expression);

      case "MemberExpression":
      case "OptionalMemberExpression":
        return !isBinding;

      default:
        return false;
    }
  }

  toAssignable(node) {
    if (node.type === "TypeCastExpression") {
      return super.toAssignable(this.typeCastToParameter(node));
    } else {
      return super.toAssignable(node);
    }
  }

  toAssignableList(exprList, trailingCommaPos) {
    for (let i = 0; i < exprList.length; i++) {
      const expr = exprList[i];

      if (expr && expr.type === "TypeCastExpression") {
        exprList[i] = this.typeCastToParameter(expr);
      }
    }

    return super.toAssignableList(exprList, trailingCommaPos);
  }

  toReferencedList(exprList, isParenthesizedExpr) {
    for (let i = 0; i < exprList.length; i++) {
      const expr = exprList[i];

      if (expr && expr.type === "TypeCastExpression" && (!expr.extra || !expr.extra.parenthesized) && (exprList.length > 1 || !isParenthesizedExpr)) {
        this.raise(expr.typeAnnotation.start, "The type cast expression is expected to be wrapped with parenthesis");
      }
    }

    return exprList;
  }

  checkLVal(expr, bindingType = BIND_NONE, checkClashes, contextDescription) {
    if (expr.type !== "TypeCastExpression") {
      return super.checkLVal(expr, bindingType, checkClashes, contextDescription);
    }
  }

  parseClassProperty(node) {
    if (this.match(types.colon)) {
      node.typeAnnotation = this.flowParseTypeAnnotation();
    }

    return super.parseClassProperty(node);
  }

  parseClassPrivateProperty(node) {
    if (this.match(types.colon)) {
      node.typeAnnotation = this.flowParseTypeAnnotation();
    }

    return super.parseClassPrivateProperty(node);
  }

  isClassMethod() {
    return this.isRelational("<") || super.isClassMethod();
  }

  isClassProperty() {
    return this.match(types.colon) || super.isClassProperty();
  }

  isNonstaticConstructor(method) {
    return !this.match(types.colon) && super.isNonstaticConstructor(method);
  }

  pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper) {
    if (method.variance) {
      this.unexpected(method.variance.start);
    }

    delete method.variance;

    if (this.isRelational("<")) {
      method.typeParameters = this.flowParseTypeParameterDeclaration();
    }

    super.pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper);
  }

  pushClassPrivateMethod(classBody, method, isGenerator, isAsync) {
    if (method.variance) {
      this.unexpected(method.variance.start);
    }

    delete method.variance;

    if (this.isRelational("<")) {
      method.typeParameters = this.flowParseTypeParameterDeclaration();
    }

    super.pushClassPrivateMethod(classBody, method, isGenerator, isAsync);
  }

  parseClassSuper(node) {
    super.parseClassSuper(node);

    if (node.superClass && this.isRelational("<")) {
      node.superTypeParameters = this.flowParseTypeParameterInstantiation();
    }

    if (this.isContextual("implements")) {
      this.next();
      const implemented = node.implements = [];

      do {
        const node = this.startNode();
        node.id = this.flowParseRestrictedIdentifier(true);

        if (this.isRelational("<")) {
          node.typeParameters = this.flowParseTypeParameterInstantiation();
        } else {
          node.typeParameters = null;
        }

        implemented.push(this.finishNode(node, "ClassImplements"));
      } while (this.eat(types.comma));
    }
  }

  parsePropertyName(node, isPrivateNameAllowed) {
    const variance = this.flowParseVariance();
    const key = super.parsePropertyName(node, isPrivateNameAllowed);
    node.variance = variance;
    return key;
  }

  parseObjPropValue(prop, startPos, startLoc, isGenerator, isAsync, isPattern, refExpressionErrors, containsEsc) {
    if (prop.variance) {
      this.unexpected(prop.variance.start);
    }

    delete prop.variance;
    let typeParameters;

    if (this.isRelational("<")) {
      typeParameters = this.flowParseTypeParameterDeclaration();
      if (!this.match(types.parenL)) this.unexpected();
    }

    super.parseObjPropValue(prop, startPos, startLoc, isGenerator, isAsync, isPattern, refExpressionErrors, containsEsc);

    if (typeParameters) {
      (prop.value || prop).typeParameters = typeParameters;
    }
  }

  parseAssignableListItemTypes(param) {
    if (this.eat(types.question)) {
      if (param.type !== "Identifier") {
        this.raise(param.start, "A binding pattern parameter cannot be optional in an implementation signature.");
      }

      param.optional = true;
    }

    if (this.match(types.colon)) {
      param.typeAnnotation = this.flowParseTypeAnnotation();
    }

    this.resetEndLocation(param);
    return param;
  }

  parseMaybeDefault(startPos, startLoc, left) {
    const node = super.parseMaybeDefault(startPos, startLoc, left);

    if (node.type === "AssignmentPattern" && node.typeAnnotation && node.right.start < node.typeAnnotation.start) {
      this.raise(node.typeAnnotation.start, "Type annotations must come before default assignments, " + "e.g. instead of `age = 25: number` use `age: number = 25`");
    }

    return node;
  }

  shouldParseDefaultImport(node) {
    if (!hasTypeImportKind(node)) {
      return super.shouldParseDefaultImport(node);
    }

    return isMaybeDefaultImport(this.state);
  }

  parseImportSpecifierLocal(node, specifier, type, contextDescription) {
    specifier.local = hasTypeImportKind(node) ? this.flowParseRestrictedIdentifier(true, true) : this.parseIdentifier();
    this.checkLVal(specifier.local, BIND_LEXICAL, undefined, contextDescription);
    node.specifiers.push(this.finishNode(specifier, type));
  }

  maybeParseDefaultImportSpecifier(node) {
    node.importKind = "value";
    let kind = null;

    if (this.match(types._typeof)) {
      kind = "typeof";
    } else if (this.isContextual("type")) {
      kind = "type";
    }

    if (kind) {
      const lh = this.lookahead();

      if (kind === "type" && lh.type === types.star) {
        this.unexpected(lh.start);
      }

      if (isMaybeDefaultImport(lh) || lh.type === types.braceL || lh.type === types.star) {
        this.next();
        node.importKind = kind;
      }
    }

    return super.maybeParseDefaultImportSpecifier(node);
  }

  parseImportSpecifier(node) {
    const specifier = this.startNode();
    const firstIdentLoc = this.state.start;
    const firstIdent = this.parseIdentifier(true);
    let specifierTypeKind = null;

    if (firstIdent.name === "type") {
      specifierTypeKind = "type";
    } else if (firstIdent.name === "typeof") {
      specifierTypeKind = "typeof";
    }

    let isBinding = false;

    if (this.isContextual("as") && !this.isLookaheadContextual("as")) {
      const as_ident = this.parseIdentifier(true);

      if (specifierTypeKind !== null && !this.match(types.name) && !this.state.type.keyword) {
        specifier.imported = as_ident;
        specifier.importKind = specifierTypeKind;
        specifier.local = as_ident.__clone();
      } else {
        specifier.imported = firstIdent;
        specifier.importKind = null;
        specifier.local = this.parseIdentifier();
      }
    } else if (specifierTypeKind !== null && (this.match(types.name) || this.state.type.keyword)) {
      specifier.imported = this.parseIdentifier(true);
      specifier.importKind = specifierTypeKind;

      if (this.eatContextual("as")) {
        specifier.local = this.parseIdentifier();
      } else {
        isBinding = true;
        specifier.local = specifier.imported.__clone();
      }
    } else {
      isBinding = true;
      specifier.imported = firstIdent;
      specifier.importKind = null;
      specifier.local = specifier.imported.__clone();
    }

    const nodeIsTypeImport = hasTypeImportKind(node);
    const specifierIsTypeImport = hasTypeImportKind(specifier);

    if (nodeIsTypeImport && specifierIsTypeImport) {
      this.raise(firstIdentLoc, "The `type` and `typeof` keywords on named imports can only be used on regular " + "`import` statements. It cannot be used with `import type` or `import typeof` statements");
    }

    if (nodeIsTypeImport || specifierIsTypeImport) {
      this.checkReservedType(specifier.local.name, specifier.local.start, true);
    }

    if (isBinding && !nodeIsTypeImport && !specifierIsTypeImport) {
      this.checkReservedWord(specifier.local.name, specifier.start, true, true);
    }

    this.checkLVal(specifier.local, BIND_LEXICAL, undefined, "import specifier");
    node.specifiers.push(this.finishNode(specifier, "ImportSpecifier"));
  }

  parseFunctionParams(node, allowModifiers) {
    const kind = node.kind;

    if (kind !== "get" && kind !== "set" && this.isRelational("<")) {
      node.typeParameters = this.flowParseTypeParameterDeclaration();
    }

    super.parseFunctionParams(node, allowModifiers);
  }

  parseVarId(decl, kind) {
    super.parseVarId(decl, kind);

    if (this.match(types.colon)) {
      decl.id.typeAnnotation = this.flowParseTypeAnnotation();
      this.resetEndLocation(decl.id);
    }
  }

  parseAsyncArrowFromCallExpression(node, call) {
    if (this.match(types.colon)) {
      const oldNoAnonFunctionType = this.state.noAnonFunctionType;
      this.state.noAnonFunctionType = true;
      node.returnType = this.flowParseTypeAnnotation();
      this.state.noAnonFunctionType = oldNoAnonFunctionType;
    }

    return super.parseAsyncArrowFromCallExpression(node, call);
  }

  shouldParseAsyncArrow() {
    return this.match(types.colon) || super.shouldParseAsyncArrow();
  }

  parseMaybeAssign(noIn, refExpressionErrors, afterLeftParse, refNeedsArrowPos) {
    let state = null;
    let jsx;

    if (this.hasPlugin("jsx") && (this.match(types.jsxTagStart) || this.isRelational("<"))) {
      state = this.state.clone();
      jsx = this.tryParse(() => super.parseMaybeAssign(noIn, refExpressionErrors, afterLeftParse, refNeedsArrowPos), state);
      if (!jsx.error) return jsx.node;
      const {
        context
      } = this.state;

      if (context[context.length - 1] === types$1.j_oTag) {
        context.length -= 2;
      } else if (context[context.length - 1] === types$1.j_expr) {
        context.length -= 1;
      }
    }

    if (jsx && jsx.error || this.isRelational("<")) {
      state = state || this.state.clone();
      let typeParameters;
      const arrow = this.tryParse(() => {
        typeParameters = this.flowParseTypeParameterDeclaration();
        const arrowExpression = this.forwardNoArrowParamsConversionAt(typeParameters, () => super.parseMaybeAssign(noIn, refExpressionErrors, afterLeftParse, refNeedsArrowPos));
        arrowExpression.typeParameters = typeParameters;
        this.resetStartLocationFromNode(arrowExpression, typeParameters);
        return arrowExpression;
      }, state);
      const arrowExpression = arrow.node && arrow.node.type === "ArrowFunctionExpression" ? arrow.node : null;
      if (!arrow.error && arrowExpression) return arrowExpression;

      if (jsx && jsx.node) {
        this.state = jsx.failState;
        return jsx.node;
      }

      if (arrowExpression) {
        this.state = arrow.failState;
        return arrowExpression;
      }

      if (jsx && jsx.thrown) throw jsx.error;
      if (arrow.thrown) throw arrow.error;
      throw this.raise(typeParameters.start, "Expected an arrow function after this type parameter declaration");
    }

    return super.parseMaybeAssign(noIn, refExpressionErrors, afterLeftParse, refNeedsArrowPos);
  }

  parseArrow(node) {
    if (this.match(types.colon)) {
      const result = this.tryParse(() => {
        const oldNoAnonFunctionType = this.state.noAnonFunctionType;
        this.state.noAnonFunctionType = true;
        const typeNode = this.startNode();
        [typeNode.typeAnnotation, node.predicate] = this.flowParseTypeAndPredicateInitialiser();
        this.state.noAnonFunctionType = oldNoAnonFunctionType;
        if (this.canInsertSemicolon()) this.unexpected();
        if (!this.match(types.arrow)) this.unexpected();
        return typeNode;
      });
      if (result.thrown) return null;
      if (result.error) this.state = result.failState;
      node.returnType = result.node.typeAnnotation ? this.finishNode(result.node, "TypeAnnotation") : null;
    }

    return super.parseArrow(node);
  }

  shouldParseArrow() {
    return this.match(types.colon) || super.shouldParseArrow();
  }

  setArrowFunctionParameters(node, params) {
    if (this.state.noArrowParamsConversionAt.indexOf(node.start) !== -1) {
      node.params = params;
    } else {
      super.setArrowFunctionParameters(node, params);
    }
  }

  checkParams(node, allowDuplicates, isArrowFunction) {
    if (isArrowFunction && this.state.noArrowParamsConversionAt.indexOf(node.start) !== -1) {
      return;
    }

    return super.checkParams(...arguments);
  }

  parseParenAndDistinguishExpression(canBeArrow) {
    return super.parseParenAndDistinguishExpression(canBeArrow && this.state.noArrowAt.indexOf(this.state.start) === -1);
  }

  parseSubscripts(base, startPos, startLoc, noCalls) {
    if (base.type === "Identifier" && base.name === "async" && this.state.noArrowAt.indexOf(startPos) !== -1) {
      this.next();
      const node = this.startNodeAt(startPos, startLoc);
      node.callee = base;
      node.arguments = this.parseCallExpressionArguments(types.parenR, false);
      base = this.finishNode(node, "CallExpression");
    } else if (base.type === "Identifier" && base.name === "async" && this.isRelational("<")) {
      const state = this.state.clone();
      const arrow = this.tryParse(abort => this.parseAsyncArrowWithTypeParameters(startPos, startLoc) || abort(), state);
      if (!arrow.error && !arrow.aborted) return arrow.node;
      const result = this.tryParse(() => super.parseSubscripts(base, startPos, startLoc, noCalls), state);
      if (result.node && !result.error) return result.node;

      if (arrow.node) {
        this.state = arrow.failState;
        return arrow.node;
      }

      if (result.node) {
        this.state = result.failState;
        return result.node;
      }

      throw arrow.error || result.error;
    }

    return super.parseSubscripts(base, startPos, startLoc, noCalls);
  }

  parseSubscript(base, startPos, startLoc, noCalls, subscriptState) {
    if (this.match(types.questionDot) && this.isLookaheadRelational("<")) {
      subscriptState.optionalChainMember = true;

      if (noCalls) {
        subscriptState.stop = true;
        return base;
      }

      this.next();
      const node = this.startNodeAt(startPos, startLoc);
      node.callee = base;
      node.typeArguments = this.flowParseTypeParameterInstantiation();
      this.expect(types.parenL);
      node.arguments = this.parseCallExpressionArguments(types.parenR, false);
      node.optional = true;
      return this.finishCallExpression(node, true);
    } else if (!noCalls && this.shouldParseTypes() && this.isRelational("<")) {
      const node = this.startNodeAt(startPos, startLoc);
      node.callee = base;
      const result = this.tryParse(() => {
        node.typeArguments = this.flowParseTypeParameterInstantiationCallOrNew();
        this.expect(types.parenL);
        node.arguments = this.parseCallExpressionArguments(types.parenR, false);
        if (subscriptState.optionalChainMember) node.optional = false;
        return this.finishCallExpression(node, subscriptState.optionalChainMember);
      });

      if (result.node) {
        if (result.error) this.state = result.failState;
        return result.node;
      }
    }

    return super.parseSubscript(base, startPos, startLoc, noCalls, subscriptState);
  }

  parseNewArguments(node) {
    let targs = null;

    if (this.shouldParseTypes() && this.isRelational("<")) {
      targs = this.tryParse(() => this.flowParseTypeParameterInstantiationCallOrNew()).node;
    }

    node.typeArguments = targs;
    super.parseNewArguments(node);
  }

  parseAsyncArrowWithTypeParameters(startPos, startLoc) {
    const node = this.startNodeAt(startPos, startLoc);
    this.parseFunctionParams(node);
    if (!this.parseArrow(node)) return;
    return this.parseArrowExpression(node, undefined, true);
  }

  readToken_mult_modulo(code) {
    const next = this.input.charCodeAt(this.state.pos + 1);

    if (code === 42 && next === 47 && this.state.hasFlowComment) {
      this.state.hasFlowComment = false;
      this.state.pos += 2;
      this.nextToken();
      return;
    }

    super.readToken_mult_modulo(code);
  }

  readToken_pipe_amp(code) {
    const next = this.input.charCodeAt(this.state.pos + 1);

    if (code === 124 && next === 125) {
      this.finishOp(types.braceBarR, 2);
      return;
    }

    super.readToken_pipe_amp(code);
  }

  parseTopLevel(file, program) {
    const fileNode = super.parseTopLevel(file, program);

    if (this.state.hasFlowComment) {
      this.raise(this.state.pos, "Unterminated flow-comment");
    }

    return fileNode;
  }

  skipBlockComment() {
    if (this.hasPlugin("flowComments") && this.skipFlowComment()) {
      if (this.state.hasFlowComment) {
        this.unexpected(null, "Cannot have a flow comment inside another flow comment");
      }

      this.hasFlowCommentCompletion();
      this.state.pos += this.skipFlowComment();
      this.state.hasFlowComment = true;
      return;
    }

    if (this.state.hasFlowComment) {
      const end = this.input.indexOf("*-/", this.state.pos += 2);

      if (end === -1) {
        throw this.raise(this.state.pos - 2, "Unterminated comment");
      }

      this.state.pos = end + 3;
      return;
    }

    super.skipBlockComment();
  }

  skipFlowComment() {
    const {
      pos
    } = this.state;
    let shiftToFirstNonWhiteSpace = 2;

    while ([32, 9].includes(this.input.charCodeAt(pos + shiftToFirstNonWhiteSpace))) {
      shiftToFirstNonWhiteSpace++;
    }

    const ch2 = this.input.charCodeAt(shiftToFirstNonWhiteSpace + pos);
    const ch3 = this.input.charCodeAt(shiftToFirstNonWhiteSpace + pos + 1);

    if (ch2 === 58 && ch3 === 58) {
      return shiftToFirstNonWhiteSpace + 2;
    }

    if (this.input.slice(shiftToFirstNonWhiteSpace + pos, shiftToFirstNonWhiteSpace + pos + 12) === "flow-include") {
      return shiftToFirstNonWhiteSpace + 12;
    }

    if (ch2 === 58 && ch3 !== 58) {
      return shiftToFirstNonWhiteSpace;
    }

    return false;
  }

  hasFlowCommentCompletion() {
    const end = this.input.indexOf("*/", this.state.pos);

    if (end === -1) {
      throw this.raise(this.state.pos, "Unterminated comment");
    }
  }

  flowEnumErrorBooleanMemberNotInitialized(pos, {
    enumName,
    memberName
  }) {
    this.raise(pos, `Boolean enum members need to be initialized. Use either \`${memberName} = true,\` ` + `or \`${memberName} = false,\` in enum \`${enumName}\`.`);
  }

  flowEnumErrorInvalidMemberName(pos, {
    enumName,
    memberName
  }) {
    const suggestion = memberName[0].toUpperCase() + memberName.slice(1);
    this.raise(pos, `Enum member names cannot start with lowercase 'a' through 'z'. Instead of using ` + `\`${memberName}\`, consider using \`${suggestion}\`, in enum \`${enumName}\`.`);
  }

  flowEnumErrorDuplicateMemberName(pos, {
    enumName,
    memberName
  }) {
    this.raise(pos, `Enum member names need to be unique, but the name \`${memberName}\` has already been used ` + `before in enum \`${enumName}\`.`);
  }

  flowEnumErrorInconsistentMemberValues(pos, {
    enumName
  }) {
    this.raise(pos, `Enum \`${enumName}\` has inconsistent member initializers. Either use no initializers, or ` + `consistently use literals (either booleans, numbers, or strings) for all member initializers.`);
  }

  flowEnumErrorInvalidExplicitType(pos, {
    enumName,
    suppliedType
  }) {
    const suggestion = `Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in ` + `enum \`${enumName}\`.`;
    const message = suppliedType === null ? `Supplied enum type is not valid. ${suggestion}` : `Enum type \`${suppliedType}\` is not valid. ${suggestion}`;
    return this.raise(pos, message);
  }

  flowEnumErrorInvalidMemberInitializer(pos, {
    enumName,
    explicitType,
    memberName
  }) {
    let message = null;

    switch (explicitType) {
      case "boolean":
      case "number":
      case "string":
        message = `Enum \`${enumName}\` has type \`${explicitType}\`, so the initializer of ` + `\`${memberName}\` needs to be a ${explicitType} literal.`;
        break;

      case "symbol":
        message = `Symbol enum members cannot be initialized. Use \`${memberName},\` in ` + `enum \`${enumName}\`.`;
        break;

      default:
        message = `The enum member initializer for \`${memberName}\` needs to be a literal (either ` + `a boolean, number, or string) in enum \`${enumName}\`.`;
    }

    return this.raise(pos, message);
  }

  flowEnumErrorNumberMemberNotInitialized(pos, {
    enumName,
    memberName
  }) {
    this.raise(pos, `Number enum members need to be initialized, e.g. \`${memberName} = 1\` in enum \`${enumName}\`.`);
  }

  flowEnumErrorStringMemberInconsistentlyInitailized(pos, {
    enumName
  }) {
    this.raise(pos, `String enum members need to consistently either all use initializers, or use no initializers, ` + `in enum \`${enumName}\`.`);
  }

  flowEnumMemberInit() {
    const startPos = this.state.start;

    const endOfInit = () => this.match(types.comma) || this.match(types.braceR);

    switch (this.state.type) {
      case types.num:
        {
          const literal = this.parseLiteral(this.state.value, "NumericLiteral");

          if (endOfInit()) {
            return {
              type: "number",
              pos: literal.start,
              value: literal
            };
          }

          return {
            type: "invalid",
            pos: startPos
          };
        }

      case types.string:
        {
          const literal = this.parseLiteral(this.state.value, "StringLiteral");

          if (endOfInit()) {
            return {
              type: "string",
              pos: literal.start,
              value: literal
            };
          }

          return {
            type: "invalid",
            pos: startPos
          };
        }

      case types._true:
      case types._false:
        {
          const literal = this.parseBooleanLiteral();

          if (endOfInit()) {
            return {
              type: "boolean",
              pos: literal.start,
              value: literal
            };
          }

          return {
            type: "invalid",
            pos: startPos
          };
        }

      default:
        return {
          type: "invalid",
          pos: startPos
        };
    }
  }

  flowEnumMemberRaw() {
    const pos = this.state.start;
    const id = this.parseIdentifier(true);
    const init = this.eat(types.eq) ? this.flowEnumMemberInit() : {
      type: "none",
      pos
    };
    return {
      id,
      init
    };
  }

  flowEnumCheckExplicitTypeMismatch(pos, context, expectedType) {
    const {
      explicitType
    } = context;

    if (explicitType === null) {
      return;
    }

    if (explicitType !== expectedType) {
      this.flowEnumErrorInvalidMemberInitializer(pos, context);
    }
  }

  flowEnumMembers({
    enumName,
    explicitType
  }) {
    const seenNames = new Set();
    const members = {
      booleanMembers: [],
      numberMembers: [],
      stringMembers: [],
      defaultedMembers: []
    };

    while (!this.match(types.braceR)) {
      const memberNode = this.startNode();
      const {
        id,
        init
      } = this.flowEnumMemberRaw();
      const memberName = id.name;

      if (memberName === "") {
        continue;
      }

      if (/^[a-z]/.test(memberName)) {
        this.flowEnumErrorInvalidMemberName(id.start, {
          enumName,
          memberName
        });
      }

      if (seenNames.has(memberName)) {
        this.flowEnumErrorDuplicateMemberName(id.start, {
          enumName,
          memberName
        });
      }

      seenNames.add(memberName);
      const context = {
        enumName,
        explicitType,
        memberName
      };
      memberNode.id = id;

      switch (init.type) {
        case "boolean":
          {
            this.flowEnumCheckExplicitTypeMismatch(init.pos, context, "boolean");
            memberNode.init = init.value;
            members.booleanMembers.push(this.finishNode(memberNode, "EnumBooleanMember"));
            break;
          }

        case "number":
          {
            this.flowEnumCheckExplicitTypeMismatch(init.pos, context, "number");
            memberNode.init = init.value;
            members.numberMembers.push(this.finishNode(memberNode, "EnumNumberMember"));
            break;
          }

        case "string":
          {
            this.flowEnumCheckExplicitTypeMismatch(init.pos, context, "string");
            memberNode.init = init.value;
            members.stringMembers.push(this.finishNode(memberNode, "EnumStringMember"));
            break;
          }

        case "invalid":
          {
            throw this.flowEnumErrorInvalidMemberInitializer(init.pos, context);
          }

        case "none":
          {
            switch (explicitType) {
              case "boolean":
                this.flowEnumErrorBooleanMemberNotInitialized(init.pos, context);
                break;

              case "number":
                this.flowEnumErrorNumberMemberNotInitialized(init.pos, context);
                break;

              default:
                members.defaultedMembers.push(this.finishNode(memberNode, "EnumDefaultedMember"));
            }
          }
      }

      if (!this.match(types.braceR)) {
        this.expect(types.comma);
      }
    }

    return members;
  }

  flowEnumStringMembers(initializedMembers, defaultedMembers, {
    enumName
  }) {
    if (initializedMembers.length === 0) {
      return defaultedMembers;
    } else if (defaultedMembers.length === 0) {
      return initializedMembers;
    } else if (defaultedMembers.length > initializedMembers.length) {
      for (let _i = 0; _i < initializedMembers.length; _i++) {
        const member = initializedMembers[_i];
        this.flowEnumErrorStringMemberInconsistentlyInitailized(member.start, {
          enumName
        });
      }

      return defaultedMembers;
    } else {
      for (let _i2 = 0; _i2 < defaultedMembers.length; _i2++) {
        const member = defaultedMembers[_i2];
        this.flowEnumErrorStringMemberInconsistentlyInitailized(member.start, {
          enumName
        });
      }

      return initializedMembers;
    }
  }

  flowEnumParseExplicitType({
    enumName
  }) {
    if (this.eatContextual("of")) {
      if (!this.match(types.name)) {
        throw this.flowEnumErrorInvalidExplicitType(this.state.start, {
          enumName,
          suppliedType: null
        });
      }

      const {
        value
      } = this.state;
      this.next();

      if (value !== "boolean" && value !== "number" && value !== "string" && value !== "symbol") {
        this.flowEnumErrorInvalidExplicitType(this.state.start, {
          enumName,
          suppliedType: value
        });
      }

      return value;
    }

    return null;
  }

  flowEnumBody(node, {
    enumName,
    nameLoc
  }) {
    const explicitType = this.flowEnumParseExplicitType({
      enumName
    });
    this.expect(types.braceL);
    const members = this.flowEnumMembers({
      enumName,
      explicitType
    });

    switch (explicitType) {
      case "boolean":
        node.explicitType = true;
        node.members = members.booleanMembers;
        this.expect(types.braceR);
        return this.finishNode(node, "EnumBooleanBody");

      case "number":
        node.explicitType = true;
        node.members = members.numberMembers;
        this.expect(types.braceR);
        return this.finishNode(node, "EnumNumberBody");

      case "string":
        node.explicitType = true;
        node.members = this.flowEnumStringMembers(members.stringMembers, members.defaultedMembers, {
          enumName
        });
        this.expect(types.braceR);
        return this.finishNode(node, "EnumStringBody");

      case "symbol":
        node.members = members.defaultedMembers;
        this.expect(types.braceR);
        return this.finishNode(node, "EnumSymbolBody");

      default:
        {
          const empty = () => {
            node.members = [];
            this.expect(types.braceR);
            return this.finishNode(node, "EnumStringBody");
          };

          node.explicitType = false;
          const boolsLen = members.booleanMembers.length;
          const numsLen = members.numberMembers.length;
          const strsLen = members.stringMembers.length;
          const defaultedLen = members.defaultedMembers.length;

          if (!boolsLen && !numsLen && !strsLen && !defaultedLen) {
            return empty();
          } else if (!boolsLen && !numsLen) {
            node.members = this.flowEnumStringMembers(members.stringMembers, members.defaultedMembers, {
              enumName
            });
            this.expect(types.braceR);
            return this.finishNode(node, "EnumStringBody");
          } else if (!numsLen && !strsLen && boolsLen >= defaultedLen) {
            for (let _i3 = 0, _members$defaultedMem = members.defaultedMembers; _i3 < _members$defaultedMem.length; _i3++) {
              const member = _members$defaultedMem[_i3];
              this.flowEnumErrorBooleanMemberNotInitialized(member.start, {
                enumName,
                memberName: member.id.name
              });
            }

            node.members = members.booleanMembers;
            this.expect(types.braceR);
            return this.finishNode(node, "EnumBooleanBody");
          } else if (!boolsLen && !strsLen && numsLen >= defaultedLen) {
            for (let _i4 = 0, _members$defaultedMem2 = members.defaultedMembers; _i4 < _members$defaultedMem2.length; _i4++) {
              const member = _members$defaultedMem2[_i4];
              this.flowEnumErrorNumberMemberNotInitialized(member.start, {
                enumName,
                memberName: member.id.name
              });
            }

            node.members = members.numberMembers;
            this.expect(types.braceR);
            return this.finishNode(node, "EnumNumberBody");
          } else {
            this.flowEnumErrorInconsistentMemberValues(nameLoc, {
              enumName
            });
            return empty();
          }
        }
    }
  }

  flowParseEnumDeclaration(node) {
    const id = this.parseIdentifier();
    node.id = id;
    node.body = this.flowEnumBody(this.startNode(), {
      enumName: id.name,
      nameLoc: id.start
    });
    return this.finishNode(node, "EnumDeclaration");
  }

});

const entities = {
  quot: "\u0022",
  amp: "&",
  apos: "\u0027",
  lt: "<",
  gt: ">",
  nbsp: "\u00A0",
  iexcl: "\u00A1",
  cent: "\u00A2",
  pound: "\u00A3",
  curren: "\u00A4",
  yen: "\u00A5",
  brvbar: "\u00A6",
  sect: "\u00A7",
  uml: "\u00A8",
  copy: "\u00A9",
  ordf: "\u00AA",
  laquo: "\u00AB",
  not: "\u00AC",
  shy: "\u00AD",
  reg: "\u00AE",
  macr: "\u00AF",
  deg: "\u00B0",
  plusmn: "\u00B1",
  sup2: "\u00B2",
  sup3: "\u00B3",
  acute: "\u00B4",
  micro: "\u00B5",
  para: "\u00B6",
  middot: "\u00B7",
  cedil: "\u00B8",
  sup1: "\u00B9",
  ordm: "\u00BA",
  raquo: "\u00BB",
  frac14: "\u00BC",
  frac12: "\u00BD",
  frac34: "\u00BE",
  iquest: "\u00BF",
  Agrave: "\u00C0",
  Aacute: "\u00C1",
  Acirc: "\u00C2",
  Atilde: "\u00C3",
  Auml: "\u00C4",
  Aring: "\u00C5",
  AElig: "\u00C6",
  Ccedil: "\u00C7",
  Egrave: "\u00C8",
  Eacute: "\u00C9",
  Ecirc: "\u00CA",
  Euml: "\u00CB",
  Igrave: "\u00CC",
  Iacute: "\u00CD",
  Icirc: "\u00CE",
  Iuml: "\u00CF",
  ETH: "\u00D0",
  Ntilde: "\u00D1",
  Ograve: "\u00D2",
  Oacute: "\u00D3",
  Ocirc: "\u00D4",
  Otilde: "\u00D5",
  Ouml: "\u00D6",
  times: "\u00D7",
  Oslash: "\u00D8",
  Ugrave: "\u00D9",
  Uacute: "\u00DA",
  Ucirc: "\u00DB",
  Uuml: "\u00DC",
  Yacute: "\u00DD",
  THORN: "\u00DE",
  szlig: "\u00DF",
  agrave: "\u00E0",
  aacute: "\u00E1",
  acirc: "\u00E2",
  atilde: "\u00E3",
  auml: "\u00E4",
  aring: "\u00E5",
  aelig: "\u00E6",
  ccedil: "\u00E7",
  egrave: "\u00E8",
  eacute: "\u00E9",
  ecirc: "\u00EA",
  euml: "\u00EB",
  igrave: "\u00EC",
  iacute: "\u00ED",
  icirc: "\u00EE",
  iuml: "\u00EF",
  eth: "\u00F0",
  ntilde: "\u00F1",
  ograve: "\u00F2",
  oacute: "\u00F3",
  ocirc: "\u00F4",
  otilde: "\u00F5",
  ouml: "\u00F6",
  divide: "\u00F7",
  oslash: "\u00F8",
  ugrave: "\u00F9",
  uacute: "\u00FA",
  ucirc: "\u00FB",
  uuml: "\u00FC",
  yacute: "\u00FD",
  thorn: "\u00FE",
  yuml: "\u00FF",
  OElig: "\u0152",
  oelig: "\u0153",
  Scaron: "\u0160",
  scaron: "\u0161",
  Yuml: "\u0178",
  fnof: "\u0192",
  circ: "\u02C6",
  tilde: "\u02DC",
  Alpha: "\u0391",
  Beta: "\u0392",
  Gamma: "\u0393",
  Delta: "\u0394",
  Epsilon: "\u0395",
  Zeta: "\u0396",
  Eta: "\u0397",
  Theta: "\u0398",
  Iota: "\u0399",
  Kappa: "\u039A",
  Lambda: "\u039B",
  Mu: "\u039C",
  Nu: "\u039D",
  Xi: "\u039E",
  Omicron: "\u039F",
  Pi: "\u03A0",
  Rho: "\u03A1",
  Sigma: "\u03A3",
  Tau: "\u03A4",
  Upsilon: "\u03A5",
  Phi: "\u03A6",
  Chi: "\u03A7",
  Psi: "\u03A8",
  Omega: "\u03A9",
  alpha: "\u03B1",
  beta: "\u03B2",
  gamma: "\u03B3",
  delta: "\u03B4",
  epsilon: "\u03B5",
  zeta: "\u03B6",
  eta: "\u03B7",
  theta: "\u03B8",
  iota: "\u03B9",
  kappa: "\u03BA",
  lambda: "\u03BB",
  mu: "\u03BC",
  nu: "\u03BD",
  xi: "\u03BE",
  omicron: "\u03BF",
  pi: "\u03C0",
  rho: "\u03C1",
  sigmaf: "\u03C2",
  sigma: "\u03C3",
  tau: "\u03C4",
  upsilon: "\u03C5",
  phi: "\u03C6",
  chi: "\u03C7",
  psi: "\u03C8",
  omega: "\u03C9",
  thetasym: "\u03D1",
  upsih: "\u03D2",
  piv: "\u03D6",
  ensp: "\u2002",
  emsp: "\u2003",
  thinsp: "\u2009",
  zwnj: "\u200C",
  zwj: "\u200D",
  lrm: "\u200E",
  rlm: "\u200F",
  ndash: "\u2013",
  mdash: "\u2014",
  lsquo: "\u2018",
  rsquo: "\u2019",
  sbquo: "\u201A",
  ldquo: "\u201C",
  rdquo: "\u201D",
  bdquo: "\u201E",
  dagger: "\u2020",
  Dagger: "\u2021",
  bull: "\u2022",
  hellip: "\u2026",
  permil: "\u2030",
  prime: "\u2032",
  Prime: "\u2033",
  lsaquo: "\u2039",
  rsaquo: "\u203A",
  oline: "\u203E",
  frasl: "\u2044",
  euro: "\u20AC",
  image: "\u2111",
  weierp: "\u2118",
  real: "\u211C",
  trade: "\u2122",
  alefsym: "\u2135",
  larr: "\u2190",
  uarr: "\u2191",
  rarr: "\u2192",
  darr: "\u2193",
  harr: "\u2194",
  crarr: "\u21B5",
  lArr: "\u21D0",
  uArr: "\u21D1",
  rArr: "\u21D2",
  dArr: "\u21D3",
  hArr: "\u21D4",
  forall: "\u2200",
  part: "\u2202",
  exist: "\u2203",
  empty: "\u2205",
  nabla: "\u2207",
  isin: "\u2208",
  notin: "\u2209",
  ni: "\u220B",
  prod: "\u220F",
  sum: "\u2211",
  minus: "\u2212",
  lowast: "\u2217",
  radic: "\u221A",
  prop: "\u221D",
  infin: "\u221E",
  ang: "\u2220",
  and: "\u2227",
  or: "\u2228",
  cap: "\u2229",
  cup: "\u222A",
  int: "\u222B",
  there4: "\u2234",
  sim: "\u223C",
  cong: "\u2245",
  asymp: "\u2248",
  ne: "\u2260",
  equiv: "\u2261",
  le: "\u2264",
  ge: "\u2265",
  sub: "\u2282",
  sup: "\u2283",
  nsub: "\u2284",
  sube: "\u2286",
  supe: "\u2287",
  oplus: "\u2295",
  otimes: "\u2297",
  perp: "\u22A5",
  sdot: "\u22C5",
  lceil: "\u2308",
  rceil: "\u2309",
  lfloor: "\u230A",
  rfloor: "\u230B",
  lang: "\u2329",
  rang: "\u232A",
  loz: "\u25CA",
  spades: "\u2660",
  clubs: "\u2663",
  hearts: "\u2665",
  diams: "\u2666"
};

const HEX_NUMBER = /^[\da-fA-F]+$/;
const DECIMAL_NUMBER = /^\d+$/;
types$1.j_oTag = new TokContext("<tag", false);
types$1.j_cTag = new TokContext("</tag", false);
types$1.j_expr = new TokContext("<tag>...</tag>", true, true);
types.jsxName = new TokenType("jsxName");
types.jsxText = new TokenType("jsxText", {
  beforeExpr: true
});
types.jsxTagStart = new TokenType("jsxTagStart", {
  startsExpr: true
});
types.jsxTagEnd = new TokenType("jsxTagEnd");

types.jsxTagStart.updateContext = function () {
  this.state.context.push(types$1.j_expr);
  this.state.context.push(types$1.j_oTag);
  this.state.exprAllowed = false;
};

types.jsxTagEnd.updateContext = function (prevType) {
  const out = this.state.context.pop();

  if (out === types$1.j_oTag && prevType === types.slash || out === types$1.j_cTag) {
    this.state.context.pop();
    this.state.exprAllowed = this.curContext() === types$1.j_expr;
  } else {
    this.state.exprAllowed = true;
  }
};

function isFragment(object) {
  return object ? object.type === "JSXOpeningFragment" || object.type === "JSXClosingFragment" : false;
}

function getQualifiedJSXName(object) {
  if (object.type === "JSXIdentifier") {
    return object.name;
  }

  if (object.type === "JSXNamespacedName") {
    return object.namespace.name + ":" + object.name.name;
  }

  if (object.type === "JSXMemberExpression") {
    return getQualifiedJSXName(object.object) + "." + getQualifiedJSXName(object.property);
  }

  throw new Error("Node had unexpected type: " + object.type);
}

var jsx = (superClass => class extends superClass {
  jsxReadToken() {
    let out = "";
    let chunkStart = this.state.pos;

    for (;;) {
      if (this.state.pos >= this.length) {
        throw this.raise(this.state.start, "Unterminated JSX contents");
      }

      const ch = this.input.charCodeAt(this.state.pos);

      switch (ch) {
        case 60:
        case 123:
          if (this.state.pos === this.state.start) {
            if (ch === 60 && this.state.exprAllowed) {
              ++this.state.pos;
              return this.finishToken(types.jsxTagStart);
            }

            return super.getTokenFromCode(ch);
          }

          out += this.input.slice(chunkStart, this.state.pos);
          return this.finishToken(types.jsxText, out);

        case 38:
          out += this.input.slice(chunkStart, this.state.pos);
          out += this.jsxReadEntity();
          chunkStart = this.state.pos;
          break;

        default:
          if (isNewLine(ch)) {
            out += this.input.slice(chunkStart, this.state.pos);
            out += this.jsxReadNewLine(true);
            chunkStart = this.state.pos;
          } else {
            ++this.state.pos;
          }

      }
    }
  }

  jsxReadNewLine(normalizeCRLF) {
    const ch = this.input.charCodeAt(this.state.pos);
    let out;
    ++this.state.pos;

    if (ch === 13 && this.input.charCodeAt(this.state.pos) === 10) {
      ++this.state.pos;
      out = normalizeCRLF ? "\n" : "\r\n";
    } else {
      out = String.fromCharCode(ch);
    }

    ++this.state.curLine;
    this.state.lineStart = this.state.pos;
    return out;
  }

  jsxReadString(quote) {
    let out = "";
    let chunkStart = ++this.state.pos;

    for (;;) {
      if (this.state.pos >= this.length) {
        throw this.raise(this.state.start, "Unterminated string constant");
      }

      const ch = this.input.charCodeAt(this.state.pos);
      if (ch === quote) break;

      if (ch === 38) {
        out += this.input.slice(chunkStart, this.state.pos);
        out += this.jsxReadEntity();
        chunkStart = this.state.pos;
      } else if (isNewLine(ch)) {
        out += this.input.slice(chunkStart, this.state.pos);
        out += this.jsxReadNewLine(false);
        chunkStart = this.state.pos;
      } else {
        ++this.state.pos;
      }
    }

    out += this.input.slice(chunkStart, this.state.pos++);
    return this.finishToken(types.string, out);
  }

  jsxReadEntity() {
    let str = "";
    let count = 0;
    let entity;
    let ch = this.input[this.state.pos];
    const startPos = ++this.state.pos;

    while (this.state.pos < this.length && count++ < 10) {
      ch = this.input[this.state.pos++];

      if (ch === ";") {
        if (str[0] === "#") {
          if (str[1] === "x") {
            str = str.substr(2);

            if (HEX_NUMBER.test(str)) {
              entity = String.fromCodePoint(parseInt(str, 16));
            }
          } else {
            str = str.substr(1);

            if (DECIMAL_NUMBER.test(str)) {
              entity = String.fromCodePoint(parseInt(str, 10));
            }
          }
        } else {
          entity = entities[str];
        }

        break;
      }

      str += ch;
    }

    if (!entity) {
      this.state.pos = startPos;
      return "&";
    }

    return entity;
  }

  jsxReadWord() {
    let ch;
    const start = this.state.pos;

    do {
      ch = this.input.charCodeAt(++this.state.pos);
    } while (isIdentifierChar(ch) || ch === 45);

    return this.finishToken(types.jsxName, this.input.slice(start, this.state.pos));
  }

  jsxParseIdentifier() {
    const node = this.startNode();

    if (this.match(types.jsxName)) {
      node.name = this.state.value;
    } else if (this.state.type.keyword) {
      node.name = this.state.type.keyword;
    } else {
      this.unexpected();
    }

    this.next();
    return this.finishNode(node, "JSXIdentifier");
  }

  jsxParseNamespacedName() {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    const name = this.jsxParseIdentifier();
    if (!this.eat(types.colon)) return name;
    const node = this.startNodeAt(startPos, startLoc);
    node.namespace = name;
    node.name = this.jsxParseIdentifier();
    return this.finishNode(node, "JSXNamespacedName");
  }

  jsxParseElementName() {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    let node = this.jsxParseNamespacedName();

    if (node.type === "JSXNamespacedName") {
      return node;
    }

    while (this.eat(types.dot)) {
      const newNode = this.startNodeAt(startPos, startLoc);
      newNode.object = node;
      newNode.property = this.jsxParseIdentifier();
      node = this.finishNode(newNode, "JSXMemberExpression");
    }

    return node;
  }

  jsxParseAttributeValue() {
    let node;

    switch (this.state.type) {
      case types.braceL:
        node = this.startNode();
        this.next();
        node = this.jsxParseExpressionContainer(node);

        if (node.expression.type === "JSXEmptyExpression") {
          this.raise(node.start, "JSX attributes must only be assigned a non-empty expression");
        }

        return node;

      case types.jsxTagStart:
      case types.string:
        return this.parseExprAtom();

      default:
        throw this.raise(this.state.start, "JSX value should be either an expression or a quoted JSX text");
    }
  }

  jsxParseEmptyExpression() {
    const node = this.startNodeAt(this.state.lastTokEnd, this.state.lastTokEndLoc);
    return this.finishNodeAt(node, "JSXEmptyExpression", this.state.start, this.state.startLoc);
  }

  jsxParseSpreadChild(node) {
    this.next();
    node.expression = this.parseExpression();
    this.expect(types.braceR);
    return this.finishNode(node, "JSXSpreadChild");
  }

  jsxParseExpressionContainer(node) {
    if (this.match(types.braceR)) {
      node.expression = this.jsxParseEmptyExpression();
    } else {
      node.expression = this.parseExpression();
    }

    this.expect(types.braceR);
    return this.finishNode(node, "JSXExpressionContainer");
  }

  jsxParseAttribute() {
    const node = this.startNode();

    if (this.eat(types.braceL)) {
      this.expect(types.ellipsis);
      node.argument = this.parseMaybeAssign();
      this.expect(types.braceR);
      return this.finishNode(node, "JSXSpreadAttribute");
    }

    node.name = this.jsxParseNamespacedName();
    node.value = this.eat(types.eq) ? this.jsxParseAttributeValue() : null;
    return this.finishNode(node, "JSXAttribute");
  }

  jsxParseOpeningElementAt(startPos, startLoc) {
    const node = this.startNodeAt(startPos, startLoc);

    if (this.match(types.jsxTagEnd)) {
      this.expect(types.jsxTagEnd);
      return this.finishNode(node, "JSXOpeningFragment");
    }

    node.name = this.jsxParseElementName();
    return this.jsxParseOpeningElementAfterName(node);
  }

  jsxParseOpeningElementAfterName(node) {
    const attributes = [];

    while (!this.match(types.slash) && !this.match(types.jsxTagEnd)) {
      attributes.push(this.jsxParseAttribute());
    }

    node.attributes = attributes;
    node.selfClosing = this.eat(types.slash);
    this.expect(types.jsxTagEnd);
    return this.finishNode(node, "JSXOpeningElement");
  }

  jsxParseClosingElementAt(startPos, startLoc) {
    const node = this.startNodeAt(startPos, startLoc);

    if (this.match(types.jsxTagEnd)) {
      this.expect(types.jsxTagEnd);
      return this.finishNode(node, "JSXClosingFragment");
    }

    node.name = this.jsxParseElementName();
    this.expect(types.jsxTagEnd);
    return this.finishNode(node, "JSXClosingElement");
  }

  jsxParseElementAt(startPos, startLoc) {
    const node = this.startNodeAt(startPos, startLoc);
    const children = [];
    const openingElement = this.jsxParseOpeningElementAt(startPos, startLoc);
    let closingElement = null;

    if (!openingElement.selfClosing) {
      contents: for (;;) {
        switch (this.state.type) {
          case types.jsxTagStart:
            startPos = this.state.start;
            startLoc = this.state.startLoc;
            this.next();

            if (this.eat(types.slash)) {
              closingElement = this.jsxParseClosingElementAt(startPos, startLoc);
              break contents;
            }

            children.push(this.jsxParseElementAt(startPos, startLoc));
            break;

          case types.jsxText:
            children.push(this.parseExprAtom());
            break;

          case types.braceL:
            {
              const node = this.startNode();
              this.next();

              if (this.match(types.ellipsis)) {
                children.push(this.jsxParseSpreadChild(node));
              } else {
                children.push(this.jsxParseExpressionContainer(node));
              }

              break;
            }

          default:
            throw this.unexpected();
        }
      }

      if (isFragment(openingElement) && !isFragment(closingElement)) {
        this.raise(closingElement.start, "Expected corresponding JSX closing tag for <>");
      } else if (!isFragment(openingElement) && isFragment(closingElement)) {
        this.raise(closingElement.start, "Expected corresponding JSX closing tag for <" + getQualifiedJSXName(openingElement.name) + ">");
      } else if (!isFragment(openingElement) && !isFragment(closingElement)) {
        if (getQualifiedJSXName(closingElement.name) !== getQualifiedJSXName(openingElement.name)) {
          this.raise(closingElement.start, "Expected corresponding JSX closing tag for <" + getQualifiedJSXName(openingElement.name) + ">");
        }
      }
    }

    if (isFragment(openingElement)) {
      node.openingFragment = openingElement;
      node.closingFragment = closingElement;
    } else {
      node.openingElement = openingElement;
      node.closingElement = closingElement;
    }

    node.children = children;

    if (this.isRelational("<")) {
      throw this.raise(this.state.start, "Adjacent JSX elements must be wrapped in an enclosing tag. " + "Did you want a JSX fragment <>...</>?");
    }

    return isFragment(openingElement) ? this.finishNode(node, "JSXFragment") : this.finishNode(node, "JSXElement");
  }

  jsxParseElement() {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    this.next();
    return this.jsxParseElementAt(startPos, startLoc);
  }

  parseExprAtom(refExpressionErrors) {
    if (this.match(types.jsxText)) {
      return this.parseLiteral(this.state.value, "JSXText");
    } else if (this.match(types.jsxTagStart)) {
      return this.jsxParseElement();
    } else if (this.isRelational("<") && this.input.charCodeAt(this.state.pos) !== 33) {
      this.finishToken(types.jsxTagStart);
      return this.jsxParseElement();
    } else {
      return super.parseExprAtom(refExpressionErrors);
    }
  }

  getTokenFromCode(code) {
    if (this.state.inPropertyName) return super.getTokenFromCode(code);
    const context = this.curContext();

    if (context === types$1.j_expr) {
      return this.jsxReadToken();
    }

    if (context === types$1.j_oTag || context === types$1.j_cTag) {
      if (isIdentifierStart(code)) {
        return this.jsxReadWord();
      }

      if (code === 62) {
        ++this.state.pos;
        return this.finishToken(types.jsxTagEnd);
      }

      if ((code === 34 || code === 39) && context === types$1.j_oTag) {
        return this.jsxReadString(code);
      }
    }

    if (code === 60 && this.state.exprAllowed && this.input.charCodeAt(this.state.pos + 1) !== 33) {
      ++this.state.pos;
      return this.finishToken(types.jsxTagStart);
    }

    return super.getTokenFromCode(code);
  }

  updateContext(prevType) {
    if (this.match(types.braceL)) {
      const curContext = this.curContext();

      if (curContext === types$1.j_oTag) {
        this.state.context.push(types$1.braceExpression);
      } else if (curContext === types$1.j_expr) {
        this.state.context.push(types$1.templateQuasi);
      } else {
        super.updateContext(prevType);
      }

      this.state.exprAllowed = true;
    } else if (this.match(types.slash) && prevType === types.jsxTagStart) {
      this.state.context.length -= 2;
      this.state.context.push(types$1.j_cTag);
      this.state.exprAllowed = false;
    } else {
      return super.updateContext(prevType);
    }
  }

});

class Scope {
  constructor(flags) {
    this.var = [];
    this.lexical = [];
    this.functions = [];
    this.flags = flags;
  }

}
class ScopeHandler {
  constructor(raise, inModule) {
    this.scopeStack = [];
    this.undefinedExports = new Map();
    this.undefinedPrivateNames = new Map();
    this.raise = raise;
    this.inModule = inModule;
  }

  get inFunction() {
    return (this.currentVarScope().flags & SCOPE_FUNCTION) > 0;
  }

  get inGenerator() {
    return (this.currentVarScope().flags & SCOPE_GENERATOR) > 0;
  }

  get inAsync() {
    for (let i = this.scopeStack.length - 1;; i--) {
      const scope = this.scopeStack[i];
      const isVarScope = scope.flags & SCOPE_VAR;
      const isClassScope = scope.flags & SCOPE_CLASS;

      if (isClassScope && !isVarScope) {
        return false;
      } else if (isVarScope) {
        return (scope.flags & SCOPE_ASYNC) > 0;
      }
    }
  }

  get allowSuper() {
    return (this.currentThisScope().flags & SCOPE_SUPER) > 0;
  }

  get allowDirectSuper() {
    return (this.currentThisScope().flags & SCOPE_DIRECT_SUPER) > 0;
  }

  get inClass() {
    return (this.currentThisScope().flags & SCOPE_CLASS) > 0;
  }

  get inNonArrowFunction() {
    return (this.currentThisScope().flags & SCOPE_FUNCTION) > 0;
  }

  get treatFunctionsAsVar() {
    return this.treatFunctionsAsVarInScope(this.currentScope());
  }

  createScope(flags) {
    return new Scope(flags);
  }

  enter(flags) {
    this.scopeStack.push(this.createScope(flags));
  }

  exit() {
    this.scopeStack.pop();
  }

  treatFunctionsAsVarInScope(scope) {
    return !!(scope.flags & SCOPE_FUNCTION || !this.inModule && scope.flags & SCOPE_PROGRAM);
  }

  declareName(name, bindingType, pos) {
    let scope = this.currentScope();

    if (bindingType & BIND_SCOPE_LEXICAL || bindingType & BIND_SCOPE_FUNCTION) {
      this.checkRedeclarationInScope(scope, name, bindingType, pos);

      if (bindingType & BIND_SCOPE_FUNCTION) {
        scope.functions.push(name);
      } else {
        scope.lexical.push(name);
      }

      if (bindingType & BIND_SCOPE_LEXICAL) {
        this.maybeExportDefined(scope, name);
      }
    } else if (bindingType & BIND_SCOPE_VAR) {
      for (let i = this.scopeStack.length - 1; i >= 0; --i) {
        scope = this.scopeStack[i];
        this.checkRedeclarationInScope(scope, name, bindingType, pos);
        scope.var.push(name);
        this.maybeExportDefined(scope, name);
        if (scope.flags & SCOPE_VAR) break;
      }
    }

    if (this.inModule && scope.flags & SCOPE_PROGRAM) {
      this.undefinedExports.delete(name);
    }
  }

  maybeExportDefined(scope, name) {
    if (this.inModule && scope.flags & SCOPE_PROGRAM) {
      this.undefinedExports.delete(name);
    }
  }

  checkRedeclarationInScope(scope, name, bindingType, pos) {
    if (this.isRedeclaredInScope(scope, name, bindingType)) {
      this.raise(pos, `Identifier '${name}' has already been declared`);
    }
  }

  isRedeclaredInScope(scope, name, bindingType) {
    if (!(bindingType & BIND_KIND_VALUE)) return false;

    if (bindingType & BIND_SCOPE_LEXICAL) {
      return scope.lexical.indexOf(name) > -1 || scope.functions.indexOf(name) > -1 || scope.var.indexOf(name) > -1;
    }

    if (bindingType & BIND_SCOPE_FUNCTION) {
      return scope.lexical.indexOf(name) > -1 || !this.treatFunctionsAsVarInScope(scope) && scope.var.indexOf(name) > -1;
    }

    return scope.lexical.indexOf(name) > -1 && !(scope.flags & SCOPE_SIMPLE_CATCH && scope.lexical[0] === name) || !this.treatFunctionsAsVarInScope(scope) && scope.functions.indexOf(name) > -1;
  }

  checkLocalExport(id) {
    if (this.scopeStack[0].lexical.indexOf(id.name) === -1 && this.scopeStack[0].var.indexOf(id.name) === -1 && this.scopeStack[0].functions.indexOf(id.name) === -1) {
      this.undefinedExports.set(id.name, id.start);
    }
  }

  currentScope() {
    return this.scopeStack[this.scopeStack.length - 1];
  }

  currentVarScope() {
    for (let i = this.scopeStack.length - 1;; i--) {
      const scope = this.scopeStack[i];

      if (scope.flags & SCOPE_VAR) {
        return scope;
      }
    }
  }

  currentThisScope() {
    for (let i = this.scopeStack.length - 1;; i--) {
      const scope = this.scopeStack[i];

      if ((scope.flags & SCOPE_VAR || scope.flags & SCOPE_CLASS) && !(scope.flags & SCOPE_ARROW)) {
        return scope;
      }
    }
  }

}

class TypeScriptScope extends Scope {
  constructor(...args) {
    super(...args);
    this.types = [];
    this.enums = [];
    this.constEnums = [];
    this.classes = [];
    this.exportOnlyBindings = [];
  }

}

class TypeScriptScopeHandler extends ScopeHandler {
  createScope(flags) {
    return new TypeScriptScope(flags);
  }

  declareName(name, bindingType, pos) {
    const scope = this.currentScope();

    if (bindingType & BIND_FLAGS_TS_EXPORT_ONLY) {
      this.maybeExportDefined(scope, name);
      scope.exportOnlyBindings.push(name);
      return;
    }

    super.declareName(...arguments);

    if (bindingType & BIND_KIND_TYPE) {
      if (!(bindingType & BIND_KIND_VALUE)) {
        this.checkRedeclarationInScope(scope, name, bindingType, pos);
        this.maybeExportDefined(scope, name);
      }

      scope.types.push(name);
    }

    if (bindingType & BIND_FLAGS_TS_ENUM) scope.enums.push(name);
    if (bindingType & BIND_FLAGS_TS_CONST_ENUM) scope.constEnums.push(name);
    if (bindingType & BIND_FLAGS_CLASS) scope.classes.push(name);
  }

  isRedeclaredInScope(scope, name, bindingType) {
    if (scope.enums.indexOf(name) > -1) {
      if (bindingType & BIND_FLAGS_TS_ENUM) {
        const isConst = !!(bindingType & BIND_FLAGS_TS_CONST_ENUM);
        const wasConst = scope.constEnums.indexOf(name) > -1;
        return isConst !== wasConst;
      }

      return true;
    }

    if (bindingType & BIND_FLAGS_CLASS && scope.classes.indexOf(name) > -1) {
      if (scope.lexical.indexOf(name) > -1) {
        return !!(bindingType & BIND_KIND_VALUE);
      } else {
        return false;
      }
    }

    if (bindingType & BIND_KIND_TYPE && scope.types.indexOf(name) > -1) {
      return true;
    }

    return super.isRedeclaredInScope(...arguments);
  }

  checkLocalExport(id) {
    if (this.scopeStack[0].types.indexOf(id.name) === -1 && this.scopeStack[0].exportOnlyBindings.indexOf(id.name) === -1) {
      super.checkLocalExport(id);
    }
  }

}

function nonNull(x) {
  if (x == null) {
    throw new Error(`Unexpected ${x} value.`);
  }

  return x;
}

function assert(x) {
  if (!x) {
    throw new Error("Assert fail");
  }
}

function keywordTypeFromName(value) {
  switch (value) {
    case "any":
      return "TSAnyKeyword";

    case "boolean":
      return "TSBooleanKeyword";

    case "bigint":
      return "TSBigIntKeyword";

    case "never":
      return "TSNeverKeyword";

    case "number":
      return "TSNumberKeyword";

    case "object":
      return "TSObjectKeyword";

    case "string":
      return "TSStringKeyword";

    case "symbol":
      return "TSSymbolKeyword";

    case "undefined":
      return "TSUndefinedKeyword";

    case "unknown":
      return "TSUnknownKeyword";

    default:
      return undefined;
  }
}

var typescript = (superClass => class extends superClass {
  getScopeHandler() {
    return TypeScriptScopeHandler;
  }

  tsIsIdentifier() {
    return this.match(types.name);
  }

  tsNextTokenCanFollowModifier() {
    this.next();
    return !this.hasPrecedingLineBreak() && !this.match(types.parenL) && !this.match(types.parenR) && !this.match(types.colon) && !this.match(types.eq) && !this.match(types.question) && !this.match(types.bang);
  }

  tsParseModifier(allowedModifiers) {
    if (!this.match(types.name)) {
      return undefined;
    }

    const modifier = this.state.value;

    if (allowedModifiers.indexOf(modifier) !== -1 && this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this))) {
      return modifier;
    }

    return undefined;
  }

  tsParseModifiers(allowedModifiers) {
    const modifiers = Object.create(null);

    while (true) {
      const startPos = this.state.start;
      const modifier = this.tsParseModifier(allowedModifiers);
      if (!modifier) break;

      if (Object.hasOwnProperty.call(modifiers, modifier)) {
        this.raise(startPos, `Duplicate modifier: '${modifier}'`);
      }

      modifiers[modifier] = true;
    }

    return modifiers;
  }

  tsIsListTerminator(kind) {
    switch (kind) {
      case "EnumMembers":
      case "TypeMembers":
        return this.match(types.braceR);

      case "HeritageClauseElement":
        return this.match(types.braceL);

      case "TupleElementTypes":
        return this.match(types.bracketR);

      case "TypeParametersOrArguments":
        return this.isRelational(">");
    }

    throw new Error("Unreachable");
  }

  tsParseList(kind, parseElement) {
    const result = [];

    while (!this.tsIsListTerminator(kind)) {
      result.push(parseElement());
    }

    return result;
  }

  tsParseDelimitedList(kind, parseElement) {
    return nonNull(this.tsParseDelimitedListWorker(kind, parseElement, true));
  }

  tsParseDelimitedListWorker(kind, parseElement, expectSuccess) {
    const result = [];

    while (true) {
      if (this.tsIsListTerminator(kind)) {
        break;
      }

      const element = parseElement();

      if (element == null) {
        return undefined;
      }

      result.push(element);

      if (this.eat(types.comma)) {
        continue;
      }

      if (this.tsIsListTerminator(kind)) {
        break;
      }

      if (expectSuccess) {
        this.expect(types.comma);
      }

      return undefined;
    }

    return result;
  }

  tsParseBracketedList(kind, parseElement, bracket, skipFirstToken) {
    if (!skipFirstToken) {
      if (bracket) {
        this.expect(types.bracketL);
      } else {
        this.expectRelational("<");
      }
    }

    const result = this.tsParseDelimitedList(kind, parseElement);

    if (bracket) {
      this.expect(types.bracketR);
    } else {
      this.expectRelational(">");
    }

    return result;
  }

  tsParseImportType() {
    const node = this.startNode();
    this.expect(types._import);
    this.expect(types.parenL);

    if (!this.match(types.string)) {
      this.raise(this.state.start, "Argument in a type import must be a string literal");
    }

    node.argument = this.parseExprAtom();
    this.expect(types.parenR);

    if (this.eat(types.dot)) {
      node.qualifier = this.tsParseEntityName(true);
    }

    if (this.isRelational("<")) {
      node.typeParameters = this.tsParseTypeArguments();
    }

    return this.finishNode(node, "TSImportType");
  }

  tsParseEntityName(allowReservedWords) {
    let entity = this.parseIdentifier();

    while (this.eat(types.dot)) {
      const node = this.startNodeAtNode(entity);
      node.left = entity;
      node.right = this.parseIdentifier(allowReservedWords);
      entity = this.finishNode(node, "TSQualifiedName");
    }

    return entity;
  }

  tsParseTypeReference() {
    const node = this.startNode();
    node.typeName = this.tsParseEntityName(false);

    if (!this.hasPrecedingLineBreak() && this.isRelational("<")) {
      node.typeParameters = this.tsParseTypeArguments();
    }

    return this.finishNode(node, "TSTypeReference");
  }

  tsParseThisTypePredicate(lhs) {
    this.next();
    const node = this.startNodeAtNode(lhs);
    node.parameterName = lhs;
    node.typeAnnotation = this.tsParseTypeAnnotation(false);
    return this.finishNode(node, "TSTypePredicate");
  }

  tsParseThisTypeNode() {
    const node = this.startNode();
    this.next();
    return this.finishNode(node, "TSThisType");
  }

  tsParseTypeQuery() {
    const node = this.startNode();
    this.expect(types._typeof);

    if (this.match(types._import)) {
      node.exprName = this.tsParseImportType();
    } else {
      node.exprName = this.tsParseEntityName(true);
    }

    return this.finishNode(node, "TSTypeQuery");
  }

  tsParseTypeParameter() {
    const node = this.startNode();
    node.name = this.parseIdentifierName(node.start);
    node.constraint = this.tsEatThenParseType(types._extends);
    node.default = this.tsEatThenParseType(types.eq);
    return this.finishNode(node, "TSTypeParameter");
  }

  tsTryParseTypeParameters() {
    if (this.isRelational("<")) {
      return this.tsParseTypeParameters();
    }
  }

  tsParseTypeParameters() {
    const node = this.startNode();

    if (this.isRelational("<") || this.match(types.jsxTagStart)) {
      this.next();
    } else {
      this.unexpected();
    }

    node.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this), false, true);
    return this.finishNode(node, "TSTypeParameterDeclaration");
  }

  tsTryNextParseConstantContext() {
    if (this.lookahead().type === types._const) {
      this.next();
      return this.tsParseTypeReference();
    }

    return null;
  }

  tsFillSignature(returnToken, signature) {
    const returnTokenRequired = returnToken === types.arrow;
    signature.typeParameters = this.tsTryParseTypeParameters();
    this.expect(types.parenL);
    signature.parameters = this.tsParseBindingListForSignature();

    if (returnTokenRequired) {
      signature.typeAnnotation = this.tsParseTypeOrTypePredicateAnnotation(returnToken);
    } else if (this.match(returnToken)) {
      signature.typeAnnotation = this.tsParseTypeOrTypePredicateAnnotation(returnToken);
    }
  }

  tsParseBindingListForSignature() {
    return this.parseBindingList(types.parenR, 41).map(pattern => {
      if (pattern.type !== "Identifier" && pattern.type !== "RestElement" && pattern.type !== "ObjectPattern" && pattern.type !== "ArrayPattern") {
        this.raise(pattern.start, "Name in a signature must be an Identifier, ObjectPattern or ArrayPattern," + `instead got ${pattern.type}`);
      }

      return pattern;
    });
  }

  tsParseTypeMemberSemicolon() {
    if (!this.eat(types.comma)) {
      this.semicolon();
    }
  }

  tsParseSignatureMember(kind, node) {
    this.tsFillSignature(types.colon, node);
    this.tsParseTypeMemberSemicolon();
    return this.finishNode(node, kind);
  }

  tsIsUnambiguouslyIndexSignature() {
    this.next();
    return this.eat(types.name) && this.match(types.colon);
  }

  tsTryParseIndexSignature(node) {
    if (!(this.match(types.bracketL) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this)))) {
      return undefined;
    }

    this.expect(types.bracketL);
    const id = this.parseIdentifier();
    id.typeAnnotation = this.tsParseTypeAnnotation();
    this.resetEndLocation(id);
    this.expect(types.bracketR);
    node.parameters = [id];
    const type = this.tsTryParseTypeAnnotation();
    if (type) node.typeAnnotation = type;
    this.tsParseTypeMemberSemicolon();
    return this.finishNode(node, "TSIndexSignature");
  }

  tsParsePropertyOrMethodSignature(node, readonly) {
    if (this.eat(types.question)) node.optional = true;
    const nodeAny = node;

    if (!readonly && (this.match(types.parenL) || this.isRelational("<"))) {
      const method = nodeAny;
      this.tsFillSignature(types.colon, method);
      this.tsParseTypeMemberSemicolon();
      return this.finishNode(method, "TSMethodSignature");
    } else {
      const property = nodeAny;
      if (readonly) property.readonly = true;
      const type = this.tsTryParseTypeAnnotation();
      if (type) property.typeAnnotation = type;
      this.tsParseTypeMemberSemicolon();
      return this.finishNode(property, "TSPropertySignature");
    }
  }

  tsParseTypeMember() {
    const node = this.startNode();

    if (this.match(types.parenL) || this.isRelational("<")) {
      return this.tsParseSignatureMember("TSCallSignatureDeclaration", node);
    }

    if (this.match(types._new)) {
      const id = this.startNode();
      this.next();

      if (this.match(types.parenL) || this.isRelational("<")) {
        return this.tsParseSignatureMember("TSConstructSignatureDeclaration", node);
      } else {
        node.key = this.createIdentifier(id, "new");
        return this.tsParsePropertyOrMethodSignature(node, false);
      }
    }

    const readonly = !!this.tsParseModifier(["readonly"]);
    const idx = this.tsTryParseIndexSignature(node);

    if (idx) {
      if (readonly) node.readonly = true;
      return idx;
    }

    this.parsePropertyName(node, false);
    return this.tsParsePropertyOrMethodSignature(node, readonly);
  }

  tsParseTypeLiteral() {
    const node = this.startNode();
    node.members = this.tsParseObjectTypeMembers();
    return this.finishNode(node, "TSTypeLiteral");
  }

  tsParseObjectTypeMembers() {
    this.expect(types.braceL);
    const members = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
    this.expect(types.braceR);
    return members;
  }

  tsIsStartOfMappedType() {
    this.next();

    if (this.eat(types.plusMin)) {
      return this.isContextual("readonly");
    }

    if (this.isContextual("readonly")) {
      this.next();
    }

    if (!this.match(types.bracketL)) {
      return false;
    }

    this.next();

    if (!this.tsIsIdentifier()) {
      return false;
    }

    this.next();
    return this.match(types._in);
  }

  tsParseMappedTypeParameter() {
    const node = this.startNode();
    node.name = this.parseIdentifierName(node.start);
    node.constraint = this.tsExpectThenParseType(types._in);
    return this.finishNode(node, "TSTypeParameter");
  }

  tsParseMappedType() {
    const node = this.startNode();
    this.expect(types.braceL);

    if (this.match(types.plusMin)) {
      node.readonly = this.state.value;
      this.next();
      this.expectContextual("readonly");
    } else if (this.eatContextual("readonly")) {
      node.readonly = true;
    }

    this.expect(types.bracketL);
    node.typeParameter = this.tsParseMappedTypeParameter();
    this.expect(types.bracketR);

    if (this.match(types.plusMin)) {
      node.optional = this.state.value;
      this.next();
      this.expect(types.question);
    } else if (this.eat(types.question)) {
      node.optional = true;
    }

    node.typeAnnotation = this.tsTryParseType();
    this.semicolon();
    this.expect(types.braceR);
    return this.finishNode(node, "TSMappedType");
  }

  tsParseTupleType() {
    const node = this.startNode();
    node.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), true, false);
    let seenOptionalElement = false;
    node.elementTypes.forEach(elementNode => {
      if (elementNode.type === "TSOptionalType") {
        seenOptionalElement = true;
      } else if (seenOptionalElement && elementNode.type !== "TSRestType") {
        this.raise(elementNode.start, "A required element cannot follow an optional element.");
      }
    });
    return this.finishNode(node, "TSTupleType");
  }

  tsParseTupleElementType() {
    if (this.match(types.ellipsis)) {
      const restNode = this.startNode();
      this.next();
      restNode.typeAnnotation = this.tsParseType();

      if (this.match(types.comma) && this.lookaheadCharCode() !== 93) {
        this.raiseRestNotLast(this.state.start);
      }

      return this.finishNode(restNode, "TSRestType");
    }

    const type = this.tsParseType();

    if (this.eat(types.question)) {
      const optionalTypeNode = this.startNodeAtNode(type);
      optionalTypeNode.typeAnnotation = type;
      return this.finishNode(optionalTypeNode, "TSOptionalType");
    }

    return type;
  }

  tsParseParenthesizedType() {
    const node = this.startNode();
    this.expect(types.parenL);
    node.typeAnnotation = this.tsParseType();
    this.expect(types.parenR);
    return this.finishNode(node, "TSParenthesizedType");
  }

  tsParseFunctionOrConstructorType(type) {
    const node = this.startNode();

    if (type === "TSConstructorType") {
      this.expect(types._new);
    }

    this.tsFillSignature(types.arrow, node);
    return this.finishNode(node, type);
  }

  tsParseLiteralTypeNode() {
    const node = this.startNode();

    node.literal = (() => {
      switch (this.state.type) {
        case types.num:
        case types.string:
        case types._true:
        case types._false:
          return this.parseExprAtom();

        default:
          throw this.unexpected();
      }
    })();

    return this.finishNode(node, "TSLiteralType");
  }

  tsParseTemplateLiteralType() {
    const node = this.startNode();
    const templateNode = this.parseTemplate(false);

    if (templateNode.expressions.length > 0) {
      this.raise(templateNode.expressions[0].start, "Template literal types cannot have any substitution");
    }

    node.literal = templateNode;
    return this.finishNode(node, "TSLiteralType");
  }

  tsParseThisTypeOrThisTypePredicate() {
    const thisKeyword = this.tsParseThisTypeNode();

    if (this.isContextual("is") && !this.hasPrecedingLineBreak()) {
      return this.tsParseThisTypePredicate(thisKeyword);
    } else {
      return thisKeyword;
    }
  }

  tsParseNonArrayType() {
    switch (this.state.type) {
      case types.name:
      case types._void:
      case types._null:
        {
          const type = this.match(types._void) ? "TSVoidKeyword" : this.match(types._null) ? "TSNullKeyword" : keywordTypeFromName(this.state.value);

          if (type !== undefined && this.lookaheadCharCode() !== 46) {
            const node = this.startNode();
            this.next();
            return this.finishNode(node, type);
          }

          return this.tsParseTypeReference();
        }

      case types.string:
      case types.num:
      case types._true:
      case types._false:
        return this.tsParseLiteralTypeNode();

      case types.plusMin:
        if (this.state.value === "-") {
          const node = this.startNode();

          if (this.lookahead().type !== types.num) {
            throw this.unexpected();
          }

          node.literal = this.parseMaybeUnary();
          return this.finishNode(node, "TSLiteralType");
        }

        break;

      case types._this:
        return this.tsParseThisTypeOrThisTypePredicate();

      case types._typeof:
        return this.tsParseTypeQuery();

      case types._import:
        return this.tsParseImportType();

      case types.braceL:
        return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();

      case types.bracketL:
        return this.tsParseTupleType();

      case types.parenL:
        return this.tsParseParenthesizedType();

      case types.backQuote:
        return this.tsParseTemplateLiteralType();
    }

    throw this.unexpected();
  }

  tsParseArrayTypeOrHigher() {
    let type = this.tsParseNonArrayType();

    while (!this.hasPrecedingLineBreak() && this.eat(types.bracketL)) {
      if (this.match(types.bracketR)) {
        const node = this.startNodeAtNode(type);
        node.elementType = type;
        this.expect(types.bracketR);
        type = this.finishNode(node, "TSArrayType");
      } else {
        const node = this.startNodeAtNode(type);
        node.objectType = type;
        node.indexType = this.tsParseType();
        this.expect(types.bracketR);
        type = this.finishNode(node, "TSIndexedAccessType");
      }
    }

    return type;
  }

  tsParseTypeOperator(operator) {
    const node = this.startNode();
    this.expectContextual(operator);
    node.operator = operator;
    node.typeAnnotation = this.tsParseTypeOperatorOrHigher();

    if (operator === "readonly") {
      this.tsCheckTypeAnnotationForReadOnly(node);
    }

    return this.finishNode(node, "TSTypeOperator");
  }

  tsCheckTypeAnnotationForReadOnly(node) {
    switch (node.typeAnnotation.type) {
      case "TSTupleType":
      case "TSArrayType":
        return;

      default:
        this.raise(node.start, "'readonly' type modifier is only permitted on array and tuple literal types.");
    }
  }

  tsParseInferType() {
    const node = this.startNode();
    this.expectContextual("infer");
    const typeParameter = this.startNode();
    typeParameter.name = this.parseIdentifierName(typeParameter.start);
    node.typeParameter = this.finishNode(typeParameter, "TSTypeParameter");
    return this.finishNode(node, "TSInferType");
  }

  tsParseTypeOperatorOrHigher() {
    const operator = ["keyof", "unique", "readonly"].find(kw => this.isContextual(kw));
    return operator ? this.tsParseTypeOperator(operator) : this.isContextual("infer") ? this.tsParseInferType() : this.tsParseArrayTypeOrHigher();
  }

  tsParseUnionOrIntersectionType(kind, parseConstituentType, operator) {
    this.eat(operator);
    let type = parseConstituentType();

    if (this.match(operator)) {
      const types = [type];

      while (this.eat(operator)) {
        types.push(parseConstituentType());
      }

      const node = this.startNodeAtNode(type);
      node.types = types;
      type = this.finishNode(node, kind);
    }

    return type;
  }

  tsParseIntersectionTypeOrHigher() {
    return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), types.bitwiseAND);
  }

  tsParseUnionTypeOrHigher() {
    return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), types.bitwiseOR);
  }

  tsIsStartOfFunctionType() {
    if (this.isRelational("<")) {
      return true;
    }

    return this.match(types.parenL) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this));
  }

  tsSkipParameterStart() {
    if (this.match(types.name) || this.match(types._this)) {
      this.next();
      return true;
    }

    if (this.match(types.braceL)) {
      let braceStackCounter = 1;
      this.next();

      while (braceStackCounter > 0) {
        if (this.match(types.braceL)) {
          ++braceStackCounter;
        } else if (this.match(types.braceR)) {
          --braceStackCounter;
        }

        this.next();
      }

      return true;
    }

    if (this.match(types.bracketL)) {
      let braceStackCounter = 1;
      this.next();

      while (braceStackCounter > 0) {
        if (this.match(types.bracketL)) {
          ++braceStackCounter;
        } else if (this.match(types.bracketR)) {
          --braceStackCounter;
        }

        this.next();
      }

      return true;
    }

    return false;
  }

  tsIsUnambiguouslyStartOfFunctionType() {
    this.next();

    if (this.match(types.parenR) || this.match(types.ellipsis)) {
      return true;
    }

    if (this.tsSkipParameterStart()) {
      if (this.match(types.colon) || this.match(types.comma) || this.match(types.question) || this.match(types.eq)) {
        return true;
      }

      if (this.match(types.parenR)) {
        this.next();

        if (this.match(types.arrow)) {
          return true;
        }
      }
    }

    return false;
  }

  tsParseTypeOrTypePredicateAnnotation(returnToken) {
    return this.tsInType(() => {
      const t = this.startNode();
      this.expect(returnToken);
      const asserts = this.tsTryParse(this.tsParseTypePredicateAsserts.bind(this));

      if (asserts && this.match(types._this)) {
        let thisTypePredicate = this.tsParseThisTypeOrThisTypePredicate();

        if (thisTypePredicate.type === "TSThisType") {
          const node = this.startNodeAtNode(t);
          node.parameterName = thisTypePredicate;
          node.asserts = true;
          thisTypePredicate = this.finishNode(node, "TSTypePredicate");
        } else {
          thisTypePredicate.asserts = true;
        }

        t.typeAnnotation = thisTypePredicate;
        return this.finishNode(t, "TSTypeAnnotation");
      }

      const typePredicateVariable = this.tsIsIdentifier() && this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this));

      if (!typePredicateVariable) {
        if (!asserts) {
          return this.tsParseTypeAnnotation(false, t);
        }

        const node = this.startNodeAtNode(t);
        node.parameterName = this.parseIdentifier();
        node.asserts = asserts;
        t.typeAnnotation = this.finishNode(node, "TSTypePredicate");
        return this.finishNode(t, "TSTypeAnnotation");
      }

      const type = this.tsParseTypeAnnotation(false);
      const node = this.startNodeAtNode(t);
      node.parameterName = typePredicateVariable;
      node.typeAnnotation = type;
      node.asserts = asserts;
      t.typeAnnotation = this.finishNode(node, "TSTypePredicate");
      return this.finishNode(t, "TSTypeAnnotation");
    });
  }

  tsTryParseTypeOrTypePredicateAnnotation() {
    return this.match(types.colon) ? this.tsParseTypeOrTypePredicateAnnotation(types.colon) : undefined;
  }

  tsTryParseTypeAnnotation() {
    return this.match(types.colon) ? this.tsParseTypeAnnotation() : undefined;
  }

  tsTryParseType() {
    return this.tsEatThenParseType(types.colon);
  }

  tsParseTypePredicatePrefix() {
    const id = this.parseIdentifier();

    if (this.isContextual("is") && !this.hasPrecedingLineBreak()) {
      this.next();
      return id;
    }
  }

  tsParseTypePredicateAsserts() {
    if (!this.match(types.name) || this.state.value !== "asserts" || this.hasPrecedingLineBreak()) {
      return false;
    }

    const containsEsc = this.state.containsEsc;
    this.next();

    if (!this.match(types.name) && !this.match(types._this)) {
      return false;
    }

    if (containsEsc) {
      this.raise(this.state.lastTokStart, "Escape sequence in keyword asserts");
    }

    return true;
  }

  tsParseTypeAnnotation(eatColon = true, t = this.startNode()) {
    this.tsInType(() => {
      if (eatColon) this.expect(types.colon);
      t.typeAnnotation = this.tsParseType();
    });
    return this.finishNode(t, "TSTypeAnnotation");
  }

  tsParseType() {
    assert(this.state.inType);
    const type = this.tsParseNonConditionalType();

    if (this.hasPrecedingLineBreak() || !this.eat(types._extends)) {
      return type;
    }

    const node = this.startNodeAtNode(type);
    node.checkType = type;
    node.extendsType = this.tsParseNonConditionalType();
    this.expect(types.question);
    node.trueType = this.tsParseType();
    this.expect(types.colon);
    node.falseType = this.tsParseType();
    return this.finishNode(node, "TSConditionalType");
  }

  tsParseNonConditionalType() {
    if (this.tsIsStartOfFunctionType()) {
      return this.tsParseFunctionOrConstructorType("TSFunctionType");
    }

    if (this.match(types._new)) {
      return this.tsParseFunctionOrConstructorType("TSConstructorType");
    }

    return this.tsParseUnionTypeOrHigher();
  }

  tsParseTypeAssertion() {
    const node = this.startNode();

    const _const = this.tsTryNextParseConstantContext();

    node.typeAnnotation = _const || this.tsNextThenParseType();
    this.expectRelational(">");
    node.expression = this.parseMaybeUnary();
    return this.finishNode(node, "TSTypeAssertion");
  }

  tsParseHeritageClause(descriptor) {
    const originalStart = this.state.start;
    const delimitedList = this.tsParseDelimitedList("HeritageClauseElement", this.tsParseExpressionWithTypeArguments.bind(this));

    if (!delimitedList.length) {
      this.raise(originalStart, `'${descriptor}' list cannot be empty.`);
    }

    return delimitedList;
  }

  tsParseExpressionWithTypeArguments() {
    const node = this.startNode();
    node.expression = this.tsParseEntityName(false);

    if (this.isRelational("<")) {
      node.typeParameters = this.tsParseTypeArguments();
    }

    return this.finishNode(node, "TSExpressionWithTypeArguments");
  }

  tsParseInterfaceDeclaration(node) {
    node.id = this.parseIdentifier();
    this.checkLVal(node.id, BIND_TS_INTERFACE, undefined, "typescript interface declaration");
    node.typeParameters = this.tsTryParseTypeParameters();

    if (this.eat(types._extends)) {
      node.extends = this.tsParseHeritageClause("extends");
    }

    const body = this.startNode();
    body.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this));
    node.body = this.finishNode(body, "TSInterfaceBody");
    return this.finishNode(node, "TSInterfaceDeclaration");
  }

  tsParseTypeAliasDeclaration(node) {
    node.id = this.parseIdentifier();
    this.checkLVal(node.id, BIND_TS_TYPE, undefined, "typescript type alias");
    node.typeParameters = this.tsTryParseTypeParameters();
    node.typeAnnotation = this.tsExpectThenParseType(types.eq);
    this.semicolon();
    return this.finishNode(node, "TSTypeAliasDeclaration");
  }

  tsInNoContext(cb) {
    const oldContext = this.state.context;
    this.state.context = [oldContext[0]];

    try {
      return cb();
    } finally {
      this.state.context = oldContext;
    }
  }

  tsInType(cb) {
    const oldInType = this.state.inType;
    this.state.inType = true;

    try {
      return cb();
    } finally {
      this.state.inType = oldInType;
    }
  }

  tsEatThenParseType(token) {
    return !this.match(token) ? undefined : this.tsNextThenParseType();
  }

  tsExpectThenParseType(token) {
    return this.tsDoThenParseType(() => this.expect(token));
  }

  tsNextThenParseType() {
    return this.tsDoThenParseType(() => this.next());
  }

  tsDoThenParseType(cb) {
    return this.tsInType(() => {
      cb();
      return this.tsParseType();
    });
  }

  tsParseEnumMember() {
    const node = this.startNode();
    node.id = this.match(types.string) ? this.parseExprAtom() : this.parseIdentifier(true);

    if (this.eat(types.eq)) {
      node.initializer = this.parseMaybeAssign();
    }

    return this.finishNode(node, "TSEnumMember");
  }

  tsParseEnumDeclaration(node, isConst) {
    if (isConst) node.const = true;
    node.id = this.parseIdentifier();
    this.checkLVal(node.id, isConst ? BIND_TS_CONST_ENUM : BIND_TS_ENUM, undefined, "typescript enum declaration");
    this.expect(types.braceL);
    node.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this));
    this.expect(types.braceR);
    return this.finishNode(node, "TSEnumDeclaration");
  }

  tsParseModuleBlock() {
    const node = this.startNode();
    this.scope.enter(SCOPE_OTHER);
    this.expect(types.braceL);
    this.parseBlockOrModuleBlockBody(node.body = [], undefined, true, types.braceR);
    this.scope.exit();
    return this.finishNode(node, "TSModuleBlock");
  }

  tsParseModuleOrNamespaceDeclaration(node, nested = false) {
    node.id = this.parseIdentifier();

    if (!nested) {
      this.checkLVal(node.id, BIND_TS_NAMESPACE, null, "module or namespace declaration");
    }

    if (this.eat(types.dot)) {
      const inner = this.startNode();
      this.tsParseModuleOrNamespaceDeclaration(inner, true);
      node.body = inner;
    } else {
      this.scope.enter(SCOPE_TS_MODULE);
      node.body = this.tsParseModuleBlock();
      this.scope.exit();
    }

    return this.finishNode(node, "TSModuleDeclaration");
  }

  tsParseAmbientExternalModuleDeclaration(node) {
    if (this.isContextual("global")) {
      node.global = true;
      node.id = this.parseIdentifier();
    } else if (this.match(types.string)) {
      node.id = this.parseExprAtom();
    } else {
      this.unexpected();
    }

    if (this.match(types.braceL)) {
      this.scope.enter(SCOPE_TS_MODULE);
      node.body = this.tsParseModuleBlock();
      this.scope.exit();
    } else {
      this.semicolon();
    }

    return this.finishNode(node, "TSModuleDeclaration");
  }

  tsParseImportEqualsDeclaration(node, isExport) {
    node.isExport = isExport || false;
    node.id = this.parseIdentifier();
    this.checkLVal(node.id, BIND_LEXICAL, undefined, "import equals declaration");
    this.expect(types.eq);
    node.moduleReference = this.tsParseModuleReference();
    this.semicolon();
    return this.finishNode(node, "TSImportEqualsDeclaration");
  }

  tsIsExternalModuleReference() {
    return this.isContextual("require") && this.lookaheadCharCode() === 40;
  }

  tsParseModuleReference() {
    return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(false);
  }

  tsParseExternalModuleReference() {
    const node = this.startNode();
    this.expectContextual("require");
    this.expect(types.parenL);

    if (!this.match(types.string)) {
      throw this.unexpected();
    }

    node.expression = this.parseExprAtom();
    this.expect(types.parenR);
    return this.finishNode(node, "TSExternalModuleReference");
  }

  tsLookAhead(f) {
    const state = this.state.clone();
    const res = f();
    this.state = state;
    return res;
  }

  tsTryParseAndCatch(f) {
    const result = this.tryParse(abort => f() || abort());
    if (result.aborted || !result.node) return undefined;
    if (result.error) this.state = result.failState;
    return result.node;
  }

  tsTryParse(f) {
    const state = this.state.clone();
    const result = f();

    if (result !== undefined && result !== false) {
      return result;
    } else {
      this.state = state;
      return undefined;
    }
  }

  tsTryParseDeclare(nany) {
    if (this.isLineTerminator()) {
      return;
    }

    let starttype = this.state.type;
    let kind;

    if (this.isContextual("let")) {
      starttype = types._var;
      kind = "let";
    }

    switch (starttype) {
      case types._function:
        return this.parseFunctionStatement(nany, false, true);

      case types._class:
        nany.declare = true;
        return this.parseClass(nany, true, false);

      case types._const:
        if (this.match(types._const) && this.isLookaheadContextual("enum")) {
          this.expect(types._const);
          this.expectContextual("enum");
          return this.tsParseEnumDeclaration(nany, true);
        }

      case types._var:
        kind = kind || this.state.value;
        return this.parseVarStatement(nany, kind);

      case types.name:
        {
          const value = this.state.value;

          if (value === "global") {
            return this.tsParseAmbientExternalModuleDeclaration(nany);
          } else {
            return this.tsParseDeclaration(nany, value, true);
          }
        }
    }
  }

  tsTryParseExportDeclaration() {
    return this.tsParseDeclaration(this.startNode(), this.state.value, true);
  }

  tsParseExpressionStatement(node, expr) {
    switch (expr.name) {
      case "declare":
        {
          const declaration = this.tsTryParseDeclare(node);

          if (declaration) {
            declaration.declare = true;
            return declaration;
          }

          break;
        }

      case "global":
        if (this.match(types.braceL)) {
          this.scope.enter(SCOPE_TS_MODULE);
          const mod = node;
          mod.global = true;
          mod.id = expr;
          mod.body = this.tsParseModuleBlock();
          this.scope.exit();
          return this.finishNode(mod, "TSModuleDeclaration");
        }

        break;

      default:
        return this.tsParseDeclaration(node, expr.name, false);
    }
  }

  tsParseDeclaration(node, value, next) {
    switch (value) {
      case "abstract":
        if (this.tsCheckLineTerminatorAndMatch(types._class, next)) {
          const cls = node;
          cls.abstract = true;

          if (next) {
            this.next();

            if (!this.match(types._class)) {
              this.unexpected(null, types._class);
            }
          }

          return this.parseClass(cls, true, false);
        }

        break;

      case "enum":
        if (next || this.match(types.name)) {
          if (next) this.next();
          return this.tsParseEnumDeclaration(node, false);
        }

        break;

      case "interface":
        if (this.tsCheckLineTerminatorAndMatch(types.name, next)) {
          if (next) this.next();
          return this.tsParseInterfaceDeclaration(node);
        }

        break;

      case "module":
        if (next) this.next();

        if (this.match(types.string)) {
          return this.tsParseAmbientExternalModuleDeclaration(node);
        } else if (this.tsCheckLineTerminatorAndMatch(types.name, next)) {
          return this.tsParseModuleOrNamespaceDeclaration(node);
        }

        break;

      case "namespace":
        if (this.tsCheckLineTerminatorAndMatch(types.name, next)) {
          if (next) this.next();
          return this.tsParseModuleOrNamespaceDeclaration(node);
        }

        break;

      case "type":
        if (this.tsCheckLineTerminatorAndMatch(types.name, next)) {
          if (next) this.next();
          return this.tsParseTypeAliasDeclaration(node);
        }

        break;
    }
  }

  tsCheckLineTerminatorAndMatch(tokenType, next) {
    return (next || this.match(tokenType)) && !this.isLineTerminator();
  }

  tsTryParseGenericAsyncArrowFunction(startPos, startLoc) {
    if (!this.isRelational("<")) {
      return undefined;
    }

    const res = this.tsTryParseAndCatch(() => {
      const node = this.startNodeAt(startPos, startLoc);
      node.typeParameters = this.tsParseTypeParameters();
      super.parseFunctionParams(node);
      node.returnType = this.tsTryParseTypeOrTypePredicateAnnotation();
      this.expect(types.arrow);
      return node;
    });

    if (!res) {
      return undefined;
    }

    return this.parseArrowExpression(res, null, true);
  }

  tsParseTypeArguments() {
    const node = this.startNode();
    node.params = this.tsInType(() => this.tsInNoContext(() => {
      this.expectRelational("<");
      return this.tsParseDelimitedList("TypeParametersOrArguments", this.tsParseType.bind(this));
    }));
    this.state.exprAllowed = false;
    this.expectRelational(">");
    return this.finishNode(node, "TSTypeParameterInstantiation");
  }

  tsIsDeclarationStart() {
    if (this.match(types.name)) {
      switch (this.state.value) {
        case "abstract":
        case "declare":
        case "enum":
        case "interface":
        case "module":
        case "namespace":
        case "type":
          return true;
      }
    }

    return false;
  }

  isExportDefaultSpecifier() {
    if (this.tsIsDeclarationStart()) return false;
    return super.isExportDefaultSpecifier();
  }

  parseAssignableListItem(allowModifiers, decorators) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    let accessibility;
    let readonly = false;

    if (allowModifiers) {
      accessibility = this.parseAccessModifier();
      readonly = !!this.tsParseModifier(["readonly"]);
    }

    const left = this.parseMaybeDefault();
    this.parseAssignableListItemTypes(left);
    const elt = this.parseMaybeDefault(left.start, left.loc.start, left);

    if (accessibility || readonly) {
      const pp = this.startNodeAt(startPos, startLoc);

      if (decorators.length) {
        pp.decorators = decorators;
      }

      if (accessibility) pp.accessibility = accessibility;
      if (readonly) pp.readonly = readonly;

      if (elt.type !== "Identifier" && elt.type !== "AssignmentPattern") {
        this.raise(pp.start, "A parameter property may not be declared using a binding pattern.");
      }

      pp.parameter = elt;
      return this.finishNode(pp, "TSParameterProperty");
    }

    if (decorators.length) {
      left.decorators = decorators;
    }

    return elt;
  }

  parseFunctionBodyAndFinish(node, type, isMethod = false) {
    if (this.match(types.colon)) {
      node.returnType = this.tsParseTypeOrTypePredicateAnnotation(types.colon);
    }

    const bodilessType = type === "FunctionDeclaration" ? "TSDeclareFunction" : type === "ClassMethod" ? "TSDeclareMethod" : undefined;

    if (bodilessType && !this.match(types.braceL) && this.isLineTerminator()) {
      this.finishNode(node, bodilessType);
      return;
    }

    super.parseFunctionBodyAndFinish(node, type, isMethod);
  }

  registerFunctionStatementId(node) {
    if (!node.body && node.id) {
      this.checkLVal(node.id, BIND_TS_AMBIENT, null, "function name");
    } else {
      super.registerFunctionStatementId(...arguments);
    }
  }

  parseSubscript(base, startPos, startLoc, noCalls, state) {
    if (!this.hasPrecedingLineBreak() && this.match(types.bang)) {
      this.state.exprAllowed = false;
      this.next();
      const nonNullExpression = this.startNodeAt(startPos, startLoc);
      nonNullExpression.expression = base;
      return this.finishNode(nonNullExpression, "TSNonNullExpression");
    }

    if (this.isRelational("<")) {
      const result = this.tsTryParseAndCatch(() => {
        if (!noCalls && this.atPossibleAsync(base)) {
          const asyncArrowFn = this.tsTryParseGenericAsyncArrowFunction(startPos, startLoc);

          if (asyncArrowFn) {
            return asyncArrowFn;
          }
        }

        const node = this.startNodeAt(startPos, startLoc);
        node.callee = base;
        const typeArguments = this.tsParseTypeArguments();

        if (typeArguments) {
          if (!noCalls && this.eat(types.parenL)) {
            node.arguments = this.parseCallExpressionArguments(types.parenR, false);
            node.typeParameters = typeArguments;
            return this.finishCallExpression(node, state.optionalChainMember);
          } else if (this.match(types.backQuote)) {
            return this.parseTaggedTemplateExpression(startPos, startLoc, base, state, typeArguments);
          }
        }

        this.unexpected();
      });
      if (result) return result;
    }

    return super.parseSubscript(base, startPos, startLoc, noCalls, state);
  }

  parseNewArguments(node) {
    if (this.isRelational("<")) {
      const typeParameters = this.tsTryParseAndCatch(() => {
        const args = this.tsParseTypeArguments();
        if (!this.match(types.parenL)) this.unexpected();
        return args;
      });

      if (typeParameters) {
        node.typeParameters = typeParameters;
      }
    }

    super.parseNewArguments(node);
  }

  parseExprOp(left, leftStartPos, leftStartLoc, minPrec, noIn) {
    if (nonNull(types._in.binop) > minPrec && !this.hasPrecedingLineBreak() && this.isContextual("as")) {
      const node = this.startNodeAt(leftStartPos, leftStartLoc);
      node.expression = left;

      const _const = this.tsTryNextParseConstantContext();

      if (_const) {
        node.typeAnnotation = _const;
      } else {
        node.typeAnnotation = this.tsNextThenParseType();
      }

      this.finishNode(node, "TSAsExpression");
      return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, noIn);
    }

    return super.parseExprOp(left, leftStartPos, leftStartLoc, minPrec, noIn);
  }

  checkReservedWord(word, startLoc, checkKeywords, isBinding) {}

  checkDuplicateExports() {}

  parseImport(node) {
    if (this.match(types.name) && this.lookahead().type === types.eq) {
      return this.tsParseImportEqualsDeclaration(node);
    }

    return super.parseImport(node);
  }

  parseExport(node) {
    if (this.match(types._import)) {
      this.expect(types._import);
      return this.tsParseImportEqualsDeclaration(node, true);
    } else if (this.eat(types.eq)) {
      const assign = node;
      assign.expression = this.parseExpression();
      this.semicolon();
      return this.finishNode(assign, "TSExportAssignment");
    } else if (this.eatContextual("as")) {
      const decl = node;
      this.expectContextual("namespace");
      decl.id = this.parseIdentifier();
      this.semicolon();
      return this.finishNode(decl, "TSNamespaceExportDeclaration");
    } else {
      return super.parseExport(node);
    }
  }

  isAbstractClass() {
    return this.isContextual("abstract") && this.lookahead().type === types._class;
  }

  parseExportDefaultExpression() {
    if (this.isAbstractClass()) {
      const cls = this.startNode();
      this.next();
      this.parseClass(cls, true, true);
      cls.abstract = true;
      return cls;
    }

    if (this.state.value === "interface") {
      const result = this.tsParseDeclaration(this.startNode(), this.state.value, true);
      if (result) return result;
    }

    return super.parseExportDefaultExpression();
  }

  parseStatementContent(context, topLevel) {
    if (this.state.type === types._const) {
      const ahead = this.lookahead();

      if (ahead.type === types.name && ahead.value === "enum") {
        const node = this.startNode();
        this.expect(types._const);
        this.expectContextual("enum");
        return this.tsParseEnumDeclaration(node, true);
      }
    }

    return super.parseStatementContent(context, topLevel);
  }

  parseAccessModifier() {
    return this.tsParseModifier(["public", "protected", "private"]);
  }

  parseClassMember(classBody, member, state, constructorAllowsSuper) {
    const accessibility = this.parseAccessModifier();
    if (accessibility) member.accessibility = accessibility;
    super.parseClassMember(classBody, member, state, constructorAllowsSuper);
  }

  parseClassMemberWithIsStatic(classBody, member, state, isStatic, constructorAllowsSuper) {
    const modifiers = this.tsParseModifiers(["abstract", "readonly", "declare"]);
    Object.assign(member, modifiers);
    const idx = this.tsTryParseIndexSignature(member);

    if (idx) {
      classBody.body.push(idx);

      if (modifiers.abstract) {
        this.raise(member.start, "Index signatures cannot have the 'abstract' modifier");
      }

      if (isStatic) {
        this.raise(member.start, "Index signatures cannot have the 'static' modifier");
      }

      if (member.accessibility) {
        this.raise(member.start, `Index signatures cannot have an accessibility modifier ('${member.accessibility}')`);
      }

      return;
    }

    super.parseClassMemberWithIsStatic(classBody, member, state, isStatic, constructorAllowsSuper);
  }

  parsePostMemberNameModifiers(methodOrProp) {
    const optional = this.eat(types.question);
    if (optional) methodOrProp.optional = true;

    if (methodOrProp.readonly && this.match(types.parenL)) {
      this.raise(methodOrProp.start, "Class methods cannot have the 'readonly' modifier");
    }

    if (methodOrProp.declare && this.match(types.parenL)) {
      this.raise(methodOrProp.start, "Class methods cannot have the 'declare' modifier");
    }
  }

  parseExpressionStatement(node, expr) {
    const decl = expr.type === "Identifier" ? this.tsParseExpressionStatement(node, expr) : undefined;
    return decl || super.parseExpressionStatement(node, expr);
  }

  shouldParseExportDeclaration() {
    if (this.tsIsDeclarationStart()) return true;
    return super.shouldParseExportDeclaration();
  }

  parseConditional(expr, noIn, startPos, startLoc, refNeedsArrowPos) {
    if (!refNeedsArrowPos || !this.match(types.question)) {
      return super.parseConditional(expr, noIn, startPos, startLoc, refNeedsArrowPos);
    }

    const result = this.tryParse(() => super.parseConditional(expr, noIn, startPos, startLoc));

    if (!result.node) {
      refNeedsArrowPos.start = result.error.pos || this.state.start;
      return expr;
    }

    if (result.error) this.state = result.failState;
    return result.node;
  }

  parseParenItem(node, startPos, startLoc) {
    node = super.parseParenItem(node, startPos, startLoc);

    if (this.eat(types.question)) {
      node.optional = true;
      this.resetEndLocation(node);
    }

    if (this.match(types.colon)) {
      const typeCastNode = this.startNodeAt(startPos, startLoc);
      typeCastNode.expression = node;
      typeCastNode.typeAnnotation = this.tsParseTypeAnnotation();
      return this.finishNode(typeCastNode, "TSTypeCastExpression");
    }

    return node;
  }

  parseExportDeclaration(node) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    const isDeclare = this.eatContextual("declare");
    let declaration;

    if (this.match(types.name)) {
      declaration = this.tsTryParseExportDeclaration();
    }

    if (!declaration) {
      declaration = super.parseExportDeclaration(node);
    }

    if (declaration && isDeclare) {
      this.resetStartLocation(declaration, startPos, startLoc);
      declaration.declare = true;
    }

    return declaration;
  }

  parseClassId(node, isStatement, optionalId) {
    if ((!isStatement || optionalId) && this.isContextual("implements")) {
      return;
    }

    super.parseClassId(node, isStatement, optionalId, node.declare ? BIND_TS_AMBIENT : BIND_CLASS);
    const typeParameters = this.tsTryParseTypeParameters();
    if (typeParameters) node.typeParameters = typeParameters;
  }

  parseClassPropertyAnnotation(node) {
    if (!node.optional && this.eat(types.bang)) {
      node.definite = true;
    }

    const type = this.tsTryParseTypeAnnotation();
    if (type) node.typeAnnotation = type;
  }

  parseClassProperty(node) {
    this.parseClassPropertyAnnotation(node);

    if (node.declare && this.match(types.equal)) {
      this.raise(this.state.start, "'declare' class fields cannot have an initializer");
    }

    return super.parseClassProperty(node);
  }

  parseClassPrivateProperty(node) {
    if (node.abstract) {
      this.raise(node.start, "Private elements cannot have the 'abstract' modifier.");
    }

    if (node.accessibility) {
      this.raise(node.start, `Private elements cannot have an accessibility modifier ('${node.accessibility}')`);
    }

    this.parseClassPropertyAnnotation(node);
    return super.parseClassPrivateProperty(node);
  }

  pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper) {
    const typeParameters = this.tsTryParseTypeParameters();
    if (typeParameters) method.typeParameters = typeParameters;
    super.pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper);
  }

  pushClassPrivateMethod(classBody, method, isGenerator, isAsync) {
    const typeParameters = this.tsTryParseTypeParameters();
    if (typeParameters) method.typeParameters = typeParameters;
    super.pushClassPrivateMethod(classBody, method, isGenerator, isAsync);
  }

  parseClassSuper(node) {
    super.parseClassSuper(node);

    if (node.superClass && this.isRelational("<")) {
      node.superTypeParameters = this.tsParseTypeArguments();
    }

    if (this.eatContextual("implements")) {
      node.implements = this.tsParseHeritageClause("implements");
    }
  }

  parseObjPropValue(prop, ...args) {
    const typeParameters = this.tsTryParseTypeParameters();
    if (typeParameters) prop.typeParameters = typeParameters;
    super.parseObjPropValue(prop, ...args);
  }

  parseFunctionParams(node, allowModifiers) {
    const typeParameters = this.tsTryParseTypeParameters();
    if (typeParameters) node.typeParameters = typeParameters;
    super.parseFunctionParams(node, allowModifiers);
  }

  parseVarId(decl, kind) {
    super.parseVarId(decl, kind);

    if (decl.id.type === "Identifier" && this.eat(types.bang)) {
      decl.definite = true;
    }

    const type = this.tsTryParseTypeAnnotation();

    if (type) {
      decl.id.typeAnnotation = type;
      this.resetEndLocation(decl.id);
    }
  }

  parseAsyncArrowFromCallExpression(node, call) {
    if (this.match(types.colon)) {
      node.returnType = this.tsParseTypeAnnotation();
    }

    return super.parseAsyncArrowFromCallExpression(node, call);
  }

  parseMaybeAssign(...args) {
    let state;
    let jsx;
    let typeCast;

    if (this.match(types.jsxTagStart)) {
      state = this.state.clone();
      jsx = this.tryParse(() => super.parseMaybeAssign(...args), state);
      if (!jsx.error) return jsx.node;
      const {
        context
      } = this.state;

      if (context[context.length - 1] === types$1.j_oTag) {
        context.length -= 2;
      } else if (context[context.length - 1] === types$1.j_expr) {
        context.length -= 1;
      }
    }

    if (!(jsx && jsx.error) && !this.isRelational("<")) {
      return super.parseMaybeAssign(...args);
    }

    let typeParameters;
    state = state || this.state.clone();
    const arrow = this.tryParse(abort => {
      typeParameters = this.tsParseTypeParameters();
      const expr = super.parseMaybeAssign(...args);

      if (expr.type !== "ArrowFunctionExpression" || expr.extra && expr.extra.parenthesized) {
        abort();
      }

      if (typeParameters && typeParameters.params.length !== 0) {
        this.resetStartLocationFromNode(expr, typeParameters);
      }

      expr.typeParameters = typeParameters;
      return expr;
    }, state);
    if (!arrow.error && !arrow.aborted) return arrow.node;

    if (!jsx) {
      assert(!this.hasPlugin("jsx"));
      typeCast = this.tryParse(() => super.parseMaybeAssign(...args), state);
      if (!typeCast.error) return typeCast.node;
    }

    if (jsx && jsx.node) {
      this.state = jsx.failState;
      return jsx.node;
    }

    if (arrow.node) {
      this.state = arrow.failState;
      return arrow.node;
    }

    if (typeCast && typeCast.node) {
      this.state = typeCast.failState;
      return typeCast.node;
    }

    if (jsx && jsx.thrown) throw jsx.error;
    if (arrow.thrown) throw arrow.error;
    if (typeCast && typeCast.thrown) throw typeCast.error;
    throw jsx && jsx.error || arrow.error || typeCast && typeCast.error;
  }

  parseMaybeUnary(refExpressionErrors) {
    if (!this.hasPlugin("jsx") && this.isRelational("<")) {
      return this.tsParseTypeAssertion();
    } else {
      return super.parseMaybeUnary(refExpressionErrors);
    }
  }

  parseArrow(node) {
    if (this.match(types.colon)) {
      const result = this.tryParse(abort => {
        const returnType = this.tsParseTypeOrTypePredicateAnnotation(types.colon);
        if (this.canInsertSemicolon() || !this.match(types.arrow)) abort();
        return returnType;
      });
      if (result.aborted) return;

      if (!result.thrown) {
        if (result.error) this.state = result.failState;
        node.returnType = result.node;
      }
    }

    return super.parseArrow(node);
  }

  parseAssignableListItemTypes(param) {
    if (this.eat(types.question)) {
      if (param.type !== "Identifier") {
        this.raise(param.start, "A binding pattern parameter cannot be optional in an implementation signature.");
      }

      param.optional = true;
    }

    const type = this.tsTryParseTypeAnnotation();
    if (type) param.typeAnnotation = type;
    this.resetEndLocation(param);
    return param;
  }

  toAssignable(node) {
    switch (node.type) {
      case "TSTypeCastExpression":
        return super.toAssignable(this.typeCastToParameter(node));

      case "TSParameterProperty":
        return super.toAssignable(node);

      case "TSAsExpression":
      case "TSNonNullExpression":
      case "TSTypeAssertion":
        node.expression = this.toAssignable(node.expression);
        return node;

      default:
        return super.toAssignable(node);
    }
  }

  checkLVal(expr, bindingType = BIND_NONE, checkClashes, contextDescription) {
    switch (expr.type) {
      case "TSTypeCastExpression":
        return;

      case "TSParameterProperty":
        this.checkLVal(expr.parameter, bindingType, checkClashes, "parameter property");
        return;

      case "TSAsExpression":
      case "TSNonNullExpression":
      case "TSTypeAssertion":
        this.checkLVal(expr.expression, bindingType, checkClashes, contextDescription);
        return;

      default:
        super.checkLVal(expr, bindingType, checkClashes, contextDescription);
        return;
    }
  }

  parseBindingAtom() {
    switch (this.state.type) {
      case types._this:
        return this.parseIdentifier(true);

      default:
        return super.parseBindingAtom();
    }
  }

  parseMaybeDecoratorArguments(expr) {
    if (this.isRelational("<")) {
      const typeArguments = this.tsParseTypeArguments();

      if (this.match(types.parenL)) {
        const call = super.parseMaybeDecoratorArguments(expr);
        call.typeParameters = typeArguments;
        return call;
      }

      this.unexpected(this.state.start, types.parenL);
    }

    return super.parseMaybeDecoratorArguments(expr);
  }

  isClassMethod() {
    return this.isRelational("<") || super.isClassMethod();
  }

  isClassProperty() {
    return this.match(types.bang) || this.match(types.colon) || super.isClassProperty();
  }

  parseMaybeDefault(...args) {
    const node = super.parseMaybeDefault(...args);

    if (node.type === "AssignmentPattern" && node.typeAnnotation && node.right.start < node.typeAnnotation.start) {
      this.raise(node.typeAnnotation.start, "Type annotations must come before default assignments, " + "e.g. instead of `age = 25: number` use `age: number = 25`");
    }

    return node;
  }

  getTokenFromCode(code) {
    if (this.state.inType && (code === 62 || code === 60)) {
      return this.finishOp(types.relational, 1);
    } else {
      return super.getTokenFromCode(code);
    }
  }

  toAssignableList(exprList) {
    for (let i = 0; i < exprList.length; i++) {
      const expr = exprList[i];
      if (!expr) continue;

      switch (expr.type) {
        case "TSTypeCastExpression":
          exprList[i] = this.typeCastToParameter(expr);
          break;

        case "TSAsExpression":
        case "TSTypeAssertion":
          if (!this.state.maybeInArrowParameters) {
            exprList[i] = this.typeCastToParameter(expr);
          } else {
            this.raise(expr.start, "Unexpected type cast in parameter position.");
          }

          break;
      }
    }

    return super.toAssignableList(...arguments);
  }

  typeCastToParameter(node) {
    node.expression.typeAnnotation = node.typeAnnotation;
    this.resetEndLocation(node.expression, node.typeAnnotation.end, node.typeAnnotation.loc.end);
    return node.expression;
  }

  toReferencedList(exprList, isInParens) {
    for (let i = 0; i < exprList.length; i++) {
      const expr = exprList[i];

      if (expr && expr.type === "TSTypeCastExpression") {
        this.raise(expr.start, "Did not expect a type annotation here.");
      }
    }

    return exprList;
  }

  shouldParseArrow() {
    return this.match(types.colon) || super.shouldParseArrow();
  }

  shouldParseAsyncArrow() {
    return this.match(types.colon) || super.shouldParseAsyncArrow();
  }

  canHaveLeadingDecorator() {
    return super.canHaveLeadingDecorator() || this.isAbstractClass();
  }

  jsxParseOpeningElementAfterName(node) {
    if (this.isRelational("<")) {
      const typeArguments = this.tsTryParseAndCatch(() => this.tsParseTypeArguments());
      if (typeArguments) node.typeParameters = typeArguments;
    }

    return super.jsxParseOpeningElementAfterName(node);
  }

  getGetterSetterExpectedParamCount(method) {
    const baseCount = super.getGetterSetterExpectedParamCount(method);
    const firstParam = method.params[0];
    const hasContextParam = firstParam && firstParam.type === "Identifier" && firstParam.name === "this";
    return hasContextParam ? baseCount + 1 : baseCount;
  }

});

types.placeholder = new TokenType("%%", {
  startsExpr: true
});
var placeholders = (superClass => class extends superClass {
  parsePlaceholder(expectedNode) {
    if (this.match(types.placeholder)) {
      const node = this.startNode();
      this.next();
      this.assertNoSpace("Unexpected space in placeholder.");
      node.name = super.parseIdentifier(true);
      this.assertNoSpace("Unexpected space in placeholder.");
      this.expect(types.placeholder);
      return this.finishPlaceholder(node, expectedNode);
    }
  }

  finishPlaceholder(node, expectedNode) {
    const isFinished = !!(node.expectedNode && node.type === "Placeholder");
    node.expectedNode = expectedNode;
    return isFinished ? node : this.finishNode(node, "Placeholder");
  }

  getTokenFromCode(code) {
    if (code === 37 && this.input.charCodeAt(this.state.pos + 1) === 37) {
      return this.finishOp(types.placeholder, 2);
    }

    return super.getTokenFromCode(...arguments);
  }

  parseExprAtom() {
    return this.parsePlaceholder("Expression") || super.parseExprAtom(...arguments);
  }

  parseIdentifier() {
    return this.parsePlaceholder("Identifier") || super.parseIdentifier(...arguments);
  }

  checkReservedWord(word) {
    if (word !== undefined) super.checkReservedWord(...arguments);
  }

  parseBindingAtom() {
    return this.parsePlaceholder("Pattern") || super.parseBindingAtom(...arguments);
  }

  checkLVal(expr) {
    if (expr.type !== "Placeholder") super.checkLVal(...arguments);
  }

  toAssignable(node) {
    if (node && node.type === "Placeholder" && node.expectedNode === "Expression") {
      node.expectedNode = "Pattern";
      return node;
    }

    return super.toAssignable(...arguments);
  }

  verifyBreakContinue(node) {
    if (node.label && node.label.type === "Placeholder") return;
    super.verifyBreakContinue(...arguments);
  }

  parseExpressionStatement(node, expr) {
    if (expr.type !== "Placeholder" || expr.extra && expr.extra.parenthesized) {
      return super.parseExpressionStatement(...arguments);
    }

    if (this.match(types.colon)) {
      const stmt = node;
      stmt.label = this.finishPlaceholder(expr, "Identifier");
      this.next();
      stmt.body = this.parseStatement("label");
      return this.finishNode(stmt, "LabeledStatement");
    }

    this.semicolon();
    node.name = expr.name;
    return this.finishPlaceholder(node, "Statement");
  }

  parseBlock() {
    return this.parsePlaceholder("BlockStatement") || super.parseBlock(...arguments);
  }

  parseFunctionId() {
    return this.parsePlaceholder("Identifier") || super.parseFunctionId(...arguments);
  }

  parseClass(node, isStatement, optionalId) {
    const type = isStatement ? "ClassDeclaration" : "ClassExpression";
    this.next();
    this.takeDecorators(node);
    const placeholder = this.parsePlaceholder("Identifier");

    if (placeholder) {
      if (this.match(types._extends) || this.match(types.placeholder) || this.match(types.braceL)) {
        node.id = placeholder;
      } else if (optionalId || !isStatement) {
        node.id = null;
        node.body = this.finishPlaceholder(placeholder, "ClassBody");
        return this.finishNode(node, type);
      } else {
        this.unexpected(null, "A class name is required");
      }
    } else {
      this.parseClassId(node, isStatement, optionalId);
    }

    this.parseClassSuper(node);
    node.body = this.parsePlaceholder("ClassBody") || this.parseClassBody(!!node.superClass);
    return this.finishNode(node, type);
  }

  parseExport(node) {
    const placeholder = this.parsePlaceholder("Identifier");
    if (!placeholder) return super.parseExport(...arguments);

    if (!this.isContextual("from") && !this.match(types.comma)) {
      node.specifiers = [];
      node.source = null;
      node.declaration = this.finishPlaceholder(placeholder, "Declaration");
      return this.finishNode(node, "ExportNamedDeclaration");
    }

    this.expectPlugin("exportDefaultFrom");
    const specifier = this.startNode();
    specifier.exported = placeholder;
    node.specifiers = [this.finishNode(specifier, "ExportDefaultSpecifier")];
    return super.parseExport(node);
  }

  maybeParseExportDefaultSpecifier(node) {
    if (node.specifiers && node.specifiers.length > 0) {
      return true;
    }

    return super.maybeParseExportDefaultSpecifier(...arguments);
  }

  checkExport(node) {
    const {
      specifiers
    } = node;

    if (specifiers && specifiers.length) {
      node.specifiers = specifiers.filter(node => node.exported.type === "Placeholder");
    }

    super.checkExport(node);
    node.specifiers = specifiers;
  }

  parseImport(node) {
    const placeholder = this.parsePlaceholder("Identifier");
    if (!placeholder) return super.parseImport(...arguments);
    node.specifiers = [];

    if (!this.isContextual("from") && !this.match(types.comma)) {
      node.source = this.finishPlaceholder(placeholder, "StringLiteral");
      this.semicolon();
      return this.finishNode(node, "ImportDeclaration");
    }

    const specifier = this.startNodeAtNode(placeholder);
    specifier.local = placeholder;
    this.finishNode(specifier, "ImportDefaultSpecifier");
    node.specifiers.push(specifier);

    if (this.eat(types.comma)) {
      const hasStarImport = this.maybeParseStarImportSpecifier(node);
      if (!hasStarImport) this.parseNamedImportSpecifiers(node);
    }

    this.expectContextual("from");
    node.source = this.parseImportSource();
    this.semicolon();
    return this.finishNode(node, "ImportDeclaration");
  }

  parseImportSource() {
    return this.parsePlaceholder("StringLiteral") || super.parseImportSource(...arguments);
  }

});

var v8intrinsic = (superClass => class extends superClass {
  parseV8Intrinsic() {
    if (this.match(types.modulo)) {
      const v8IntrinsicStart = this.state.start;
      const node = this.startNode();
      this.eat(types.modulo);

      if (this.match(types.name)) {
        const name = this.parseIdentifierName(this.state.start);
        const identifier = this.createIdentifier(node, name);
        identifier.type = "V8IntrinsicIdentifier";

        if (this.match(types.parenL)) {
          return identifier;
        }
      }

      this.unexpected(v8IntrinsicStart);
    }
  }

  parseExprAtom() {
    return this.parseV8Intrinsic() || super.parseExprAtom(...arguments);
  }

});

function hasPlugin(plugins, name) {
  return plugins.some(plugin => {
    if (Array.isArray(plugin)) {
      return plugin[0] === name;
    } else {
      return plugin === name;
    }
  });
}
function getPluginOption(plugins, name, option) {
  const plugin = plugins.find(plugin => {
    if (Array.isArray(plugin)) {
      return plugin[0] === name;
    } else {
      return plugin === name;
    }
  });

  if (plugin && Array.isArray(plugin)) {
    return plugin[1][option];
  }

  return null;
}
const PIPELINE_PROPOSALS = ["minimal", "smart", "fsharp"];
function validatePlugins(plugins) {
  if (hasPlugin(plugins, "decorators")) {
    if (hasPlugin(plugins, "decorators-legacy")) {
      throw new Error("Cannot use the decorators and decorators-legacy plugin together");
    }

    const decoratorsBeforeExport = getPluginOption(plugins, "decorators", "decoratorsBeforeExport");

    if (decoratorsBeforeExport == null) {
      throw new Error("The 'decorators' plugin requires a 'decoratorsBeforeExport' option," + " whose value must be a boolean. If you are migrating from" + " Babylon/Babel 6 or want to use the old decorators proposal, you" + " should use the 'decorators-legacy' plugin instead of 'decorators'.");
    } else if (typeof decoratorsBeforeExport !== "boolean") {
      throw new Error("'decoratorsBeforeExport' must be a boolean.");
    }
  }

  if (hasPlugin(plugins, "flow") && hasPlugin(plugins, "typescript")) {
    throw new Error("Cannot combine flow and typescript plugins.");
  }

  if (hasPlugin(plugins, "placeholders") && hasPlugin(plugins, "v8intrinsic")) {
    throw new Error("Cannot combine placeholders and v8intrinsic plugins.");
  }

  if (hasPlugin(plugins, "pipelineOperator") && !PIPELINE_PROPOSALS.includes(getPluginOption(plugins, "pipelineOperator", "proposal"))) {
    throw new Error("'pipelineOperator' requires 'proposal' option whose value should be one of: " + PIPELINE_PROPOSALS.map(p => `'${p}'`).join(", "));
  }
}
const mixinPlugins = {
  estree,
  jsx,
  flow,
  typescript,
  v8intrinsic,
  placeholders
};
const mixinPluginNames = Object.keys(mixinPlugins);

const defaultOptions = {
  sourceType: "script",
  sourceFilename: undefined,
  startLine: 1,
  allowAwaitOutsideFunction: false,
  allowReturnOutsideFunction: false,
  allowImportExportEverywhere: false,
  allowSuperOutsideMethod: false,
  allowUndeclaredExports: false,
  plugins: [],
  strictMode: null,
  ranges: false,
  tokens: false,
  createParenthesizedExpressions: false,
  errorRecovery: false
};
function getOptions(opts) {
  const options = {};

  for (let _i = 0, _Object$keys = Object.keys(defaultOptions); _i < _Object$keys.length; _i++) {
    const key = _Object$keys[_i];
    options[key] = opts && opts[key] != null ? opts[key] : defaultOptions[key];
  }

  return options;
}

class Position {
  constructor(line, col) {
    this.line = line;
    this.column = col;
  }

}
class SourceLocation {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

}
function getLineInfo(input, offset) {
  let line = 1;
  let lineStart = 0;
  let match;
  lineBreakG.lastIndex = 0;

  while ((match = lineBreakG.exec(input)) && match.index < offset) {
    line++;
    lineStart = lineBreakG.lastIndex;
  }

  return new Position(line, offset - lineStart);
}

class BaseParser {
  constructor() {
    this.sawUnambiguousESM = false;
    this.ambiguousScriptDifferentAst = false;
  }

  hasPlugin(name) {
    return this.plugins.has(name);
  }

  getPluginOption(plugin, name) {
    if (this.hasPlugin(plugin)) return this.plugins.get(plugin)[name];
  }

}

function last(stack) {
  return stack[stack.length - 1];
}

class CommentsParser extends BaseParser {
  addComment(comment) {
    if (this.filename) comment.loc.filename = this.filename;
    this.state.trailingComments.push(comment);
    this.state.leadingComments.push(comment);
  }

  adjustCommentsAfterTrailingComma(node, elements, takeAllComments) {
    if (this.state.leadingComments.length === 0) {
      return;
    }

    let lastElement = null;
    let i = elements.length;

    while (lastElement === null && i > 0) {
      lastElement = elements[--i];
    }

    if (lastElement === null) {
      return;
    }

    for (let j = 0; j < this.state.leadingComments.length; j++) {
      if (this.state.leadingComments[j].end < this.state.commentPreviousNode.end) {
        this.state.leadingComments.splice(j, 1);
        j--;
      }
    }

    const newTrailingComments = [];

    for (let i = 0; i < this.state.leadingComments.length; i++) {
      const leadingComment = this.state.leadingComments[i];

      if (leadingComment.end < node.end) {
        newTrailingComments.push(leadingComment);

        if (!takeAllComments) {
          this.state.leadingComments.splice(i, 1);
          i--;
        }
      } else {
        if (node.trailingComments === undefined) {
          node.trailingComments = [];
        }

        node.trailingComments.push(leadingComment);
      }
    }

    if (takeAllComments) this.state.leadingComments = [];

    if (newTrailingComments.length > 0) {
      lastElement.trailingComments = newTrailingComments;
    } else if (lastElement.trailingComments !== undefined) {
      lastElement.trailingComments = [];
    }
  }

  processComment(node) {
    if (node.type === "Program" && node.body.length > 0) return;
    const stack = this.state.commentStack;
    let firstChild, lastChild, trailingComments, i, j;

    if (this.state.trailingComments.length > 0) {
      if (this.state.trailingComments[0].start >= node.end) {
        trailingComments = this.state.trailingComments;
        this.state.trailingComments = [];
      } else {
        this.state.trailingComments.length = 0;
      }
    } else if (stack.length > 0) {
      const lastInStack = last(stack);

      if (lastInStack.trailingComments && lastInStack.trailingComments[0].start >= node.end) {
        trailingComments = lastInStack.trailingComments;
        delete lastInStack.trailingComments;
      }
    }

    if (stack.length > 0 && last(stack).start >= node.start) {
      firstChild = stack.pop();
    }

    while (stack.length > 0 && last(stack).start >= node.start) {
      lastChild = stack.pop();
    }

    if (!lastChild && firstChild) lastChild = firstChild;

    if (firstChild) {
      switch (node.type) {
        case "ObjectExpression":
          this.adjustCommentsAfterTrailingComma(node, node.properties);
          break;

        case "ObjectPattern":
          this.adjustCommentsAfterTrailingComma(node, node.properties, true);
          break;

        case "CallExpression":
          this.adjustCommentsAfterTrailingComma(node, node.arguments);
          break;

        case "ArrayExpression":
          this.adjustCommentsAfterTrailingComma(node, node.elements);
          break;

        case "ArrayPattern":
          this.adjustCommentsAfterTrailingComma(node, node.elements, true);
          break;
      }
    } else if (this.state.commentPreviousNode && (this.state.commentPreviousNode.type === "ImportSpecifier" && node.type !== "ImportSpecifier" || this.state.commentPreviousNode.type === "ExportSpecifier" && node.type !== "ExportSpecifier")) {
      this.adjustCommentsAfterTrailingComma(node, [this.state.commentPreviousNode]);
    }

    if (lastChild) {
      if (lastChild.leadingComments) {
        if (lastChild !== node && lastChild.leadingComments.length > 0 && last(lastChild.leadingComments).end <= node.start) {
          node.leadingComments = lastChild.leadingComments;
          delete lastChild.leadingComments;
        } else {
          for (i = lastChild.leadingComments.length - 2; i >= 0; --i) {
            if (lastChild.leadingComments[i].end <= node.start) {
              node.leadingComments = lastChild.leadingComments.splice(0, i + 1);
              break;
            }
          }
        }
      }
    } else if (this.state.leadingComments.length > 0) {
      if (last(this.state.leadingComments).end <= node.start) {
        if (this.state.commentPreviousNode) {
          for (j = 0; j < this.state.leadingComments.length; j++) {
            if (this.state.leadingComments[j].end < this.state.commentPreviousNode.end) {
              this.state.leadingComments.splice(j, 1);
              j--;
            }
          }
        }

        if (this.state.leadingComments.length > 0) {
          node.leadingComments = this.state.leadingComments;
          this.state.leadingComments = [];
        }
      } else {
        for (i = 0; i < this.state.leadingComments.length; i++) {
          if (this.state.leadingComments[i].end > node.start) {
            break;
          }
        }

        const leadingComments = this.state.leadingComments.slice(0, i);

        if (leadingComments.length) {
          node.leadingComments = leadingComments;
        }

        trailingComments = this.state.leadingComments.slice(i);

        if (trailingComments.length === 0) {
          trailingComments = null;
        }
      }
    }

    this.state.commentPreviousNode = node;

    if (trailingComments) {
      if (trailingComments.length && trailingComments[0].start >= node.start && last(trailingComments).end <= node.end) {
        node.innerComments = trailingComments;
      } else {
        node.trailingComments = trailingComments;
      }
    }

    stack.push(node);
  }

}

class LocationParser extends CommentsParser {
  getLocationForPosition(pos) {
    let loc;
    if (pos === this.state.start) loc = this.state.startLoc;else if (pos === this.state.lastTokStart) loc = this.state.lastTokStartLoc;else if (pos === this.state.end) loc = this.state.endLoc;else if (pos === this.state.lastTokEnd) loc = this.state.lastTokEndLoc;else loc = getLineInfo(this.input, pos);
    return loc;
  }

  raise(pos, message, {
    missingPluginNames,
    code
  } = {}) {
    const loc = this.getLocationForPosition(pos);
    message += ` (${loc.line}:${loc.column})`;
    const err = new SyntaxError(message);
    err.pos = pos;
    err.loc = loc;

    if (missingPluginNames) {
      err.missingPlugin = missingPluginNames;
    }

    if (code !== undefined) {
      err.code = code;
    }

    if (this.options.errorRecovery) {
      if (!this.isLookahead) this.state.errors.push(err);
      return err;
    } else {
      throw err;
    }
  }

}

class State {
  constructor() {
    this.errors = [];
    this.potentialArrowAt = -1;
    this.noArrowAt = [];
    this.noArrowParamsConversionAt = [];
    this.inParameters = false;
    this.maybeInArrowParameters = false;
    this.inPipeline = false;
    this.inType = false;
    this.noAnonFunctionType = false;
    this.inPropertyName = false;
    this.hasFlowComment = false;
    this.isIterator = false;
    this.topicContext = {
      maxNumOfResolvableTopics: 0,
      maxTopicIndex: null
    };
    this.soloAwait = false;
    this.inFSharpPipelineDirectBody = false;
    this.labels = [];
    this.decoratorStack = [[]];
    this.yieldPos = -1;
    this.awaitPos = -1;
    this.comments = [];
    this.trailingComments = [];
    this.leadingComments = [];
    this.commentStack = [];
    this.commentPreviousNode = null;
    this.pos = 0;
    this.lineStart = 0;
    this.type = types.eof;
    this.value = null;
    this.start = 0;
    this.end = 0;
    this.lastTokEndLoc = null;
    this.lastTokStartLoc = null;
    this.lastTokStart = 0;
    this.lastTokEnd = 0;
    this.context = [types$1.braceStatement];
    this.exprAllowed = true;
    this.containsEsc = false;
    this.containsOctal = false;
    this.octalPosition = null;
    this.exportedIdentifiers = [];
    this.tokensLength = 0;
  }

  init(options) {
    this.strict = options.strictMode === false ? false : options.sourceType === "module";
    this.curLine = options.startLine;
    this.startLoc = this.endLoc = this.curPosition();
  }

  curPosition() {
    return new Position(this.curLine, this.pos - this.lineStart);
  }

  clone(skipArrays) {
    const state = new State();
    const keys = Object.keys(this);

    for (let i = 0, length = keys.length; i < length; i++) {
      const key = keys[i];
      let val = this[key];

      if (!skipArrays && Array.isArray(val)) {
        val = val.slice();
      }

      state[key] = val;
    }

    return state;
  }

}

var _isDigit = function isDigit(code) {
  return code >= 48 && code <= 57;
};
const VALID_REGEX_FLAGS = new Set(["g", "m", "s", "i", "y", "u"]);
const forbiddenNumericSeparatorSiblings = {
  decBinOct: [46, 66, 69, 79, 95, 98, 101, 111],
  hex: [46, 88, 95, 120]
};
const allowedNumericSeparatorSiblings = {};
allowedNumericSeparatorSiblings.bin = [48, 49];
allowedNumericSeparatorSiblings.oct = [...allowedNumericSeparatorSiblings.bin, 50, 51, 52, 53, 54, 55];
allowedNumericSeparatorSiblings.dec = [...allowedNumericSeparatorSiblings.oct, 56, 57];
allowedNumericSeparatorSiblings.hex = [...allowedNumericSeparatorSiblings.dec, 65, 66, 67, 68, 69, 70, 97, 98, 99, 100, 101, 102];
class Token {
  constructor(state) {
    this.type = state.type;
    this.value = state.value;
    this.start = state.start;
    this.end = state.end;
    this.loc = new SourceLocation(state.startLoc, state.endLoc);
  }

}
class Tokenizer extends LocationParser {
  constructor(options, input) {
    super();
    this.tokens = [];
    this.state = new State();
    this.state.init(options);
    this.input = input;
    this.length = input.length;
    this.isLookahead = false;
  }

  pushToken(token) {
    this.tokens.length = this.state.tokensLength;
    this.tokens.push(token);
    ++this.state.tokensLength;
  }

  next() {
    if (!this.isLookahead) {
      this.checkKeywordEscapes();

      if (this.options.tokens) {
        this.pushToken(new Token(this.state));
      }
    }

    this.state.lastTokEnd = this.state.end;
    this.state.lastTokStart = this.state.start;
    this.state.lastTokEndLoc = this.state.endLoc;
    this.state.lastTokStartLoc = this.state.startLoc;
    this.nextToken();
  }

  eat(type) {
    if (this.match(type)) {
      this.next();
      return true;
    } else {
      return false;
    }
  }

  match(type) {
    return this.state.type === type;
  }

  lookahead() {
    const old = this.state;
    this.state = old.clone(true);
    this.isLookahead = true;
    this.next();
    this.isLookahead = false;
    const curr = this.state;
    this.state = old;
    return curr;
  }

  nextTokenStart() {
    const thisTokEnd = this.state.pos;
    skipWhiteSpace.lastIndex = thisTokEnd;
    const skip = skipWhiteSpace.exec(this.input);
    return thisTokEnd + skip[0].length;
  }

  lookaheadCharCode() {
    return this.input.charCodeAt(this.nextTokenStart());
  }

  setStrict(strict) {
    this.state.strict = strict;
    if (!this.match(types.num) && !this.match(types.string)) return;
    this.state.pos = this.state.start;

    while (this.state.pos < this.state.lineStart) {
      this.state.lineStart = this.input.lastIndexOf("\n", this.state.lineStart - 2) + 1;
      --this.state.curLine;
    }

    this.nextToken();
  }

  curContext() {
    return this.state.context[this.state.context.length - 1];
  }

  nextToken() {
    const curContext = this.curContext();
    if (!curContext || !curContext.preserveSpace) this.skipSpace();
    this.state.containsOctal = false;
    this.state.octalPosition = null;
    this.state.start = this.state.pos;
    this.state.startLoc = this.state.curPosition();

    if (this.state.pos >= this.length) {
      this.finishToken(types.eof);
      return;
    }

    if (curContext.override) {
      curContext.override(this);
    } else {
      this.getTokenFromCode(this.input.codePointAt(this.state.pos));
    }
  }

  pushComment(block, text, start, end, startLoc, endLoc) {
    const comment = {
      type: block ? "CommentBlock" : "CommentLine",
      value: text,
      start: start,
      end: end,
      loc: new SourceLocation(startLoc, endLoc)
    };
    if (this.options.tokens) this.pushToken(comment);
    this.state.comments.push(comment);
    this.addComment(comment);
  }

  skipBlockComment() {
    const startLoc = this.state.curPosition();
    const start = this.state.pos;
    const end = this.input.indexOf("*/", this.state.pos + 2);
    if (end === -1) throw this.raise(start, "Unterminated comment");
    this.state.pos = end + 2;
    lineBreakG.lastIndex = start;
    let match;

    while ((match = lineBreakG.exec(this.input)) && match.index < this.state.pos) {
      ++this.state.curLine;
      this.state.lineStart = match.index + match[0].length;
    }

    if (this.isLookahead) return;
    this.pushComment(true, this.input.slice(start + 2, end), start, this.state.pos, startLoc, this.state.curPosition());
  }

  skipLineComment(startSkip) {
    const start = this.state.pos;
    const startLoc = this.state.curPosition();
    let ch = this.input.charCodeAt(this.state.pos += startSkip);

    if (this.state.pos < this.length) {
      while (!isNewLine(ch) && ++this.state.pos < this.length) {
        ch = this.input.charCodeAt(this.state.pos);
      }
    }

    if (this.isLookahead) return;
    this.pushComment(false, this.input.slice(start + startSkip, this.state.pos), start, this.state.pos, startLoc, this.state.curPosition());
  }

  skipSpace() {
    loop: while (this.state.pos < this.length) {
      const ch = this.input.charCodeAt(this.state.pos);

      switch (ch) {
        case 32:
        case 160:
        case 9:
          ++this.state.pos;
          break;

        case 13:
          if (this.input.charCodeAt(this.state.pos + 1) === 10) {
            ++this.state.pos;
          }

        case 10:
        case 8232:
        case 8233:
          ++this.state.pos;
          ++this.state.curLine;
          this.state.lineStart = this.state.pos;
          break;

        case 47:
          switch (this.input.charCodeAt(this.state.pos + 1)) {
            case 42:
              this.skipBlockComment();
              break;

            case 47:
              this.skipLineComment(2);
              break;

            default:
              break loop;
          }

          break;

        default:
          if (isWhitespace(ch)) {
            ++this.state.pos;
          } else {
            break loop;
          }

      }
    }
  }

  finishToken(type, val) {
    this.state.end = this.state.pos;
    this.state.endLoc = this.state.curPosition();
    const prevType = this.state.type;
    this.state.type = type;
    this.state.value = val;
    if (!this.isLookahead) this.updateContext(prevType);
  }

  readToken_numberSign() {
    if (this.state.pos === 0 && this.readToken_interpreter()) {
      return;
    }

    const nextPos = this.state.pos + 1;
    const next = this.input.charCodeAt(nextPos);

    if (next >= 48 && next <= 57) {
      throw this.raise(this.state.pos, "Unexpected digit after hash token");
    }

    if (this.hasPlugin("classPrivateProperties") || this.hasPlugin("classPrivateMethods") || this.getPluginOption("pipelineOperator", "proposal") === "smart") {
      this.finishOp(types.hash, 1);
    } else {
      throw this.raise(this.state.pos, "Unexpected character '#'");
    }
  }

  readToken_dot() {
    const next = this.input.charCodeAt(this.state.pos + 1);

    if (next >= 48 && next <= 57) {
      this.readNumber(true);
      return;
    }

    if (next === 46 && this.input.charCodeAt(this.state.pos + 2) === 46) {
      this.state.pos += 3;
      this.finishToken(types.ellipsis);
    } else {
      ++this.state.pos;
      this.finishToken(types.dot);
    }
  }

  readToken_slash() {
    if (this.state.exprAllowed && !this.state.inType) {
      ++this.state.pos;
      this.readRegexp();
      return;
    }

    const next = this.input.charCodeAt(this.state.pos + 1);

    if (next === 61) {
      this.finishOp(types.assign, 2);
    } else {
      this.finishOp(types.slash, 1);
    }
  }

  readToken_interpreter() {
    if (this.state.pos !== 0 || this.length < 2) return false;
    const start = this.state.pos;
    this.state.pos += 1;
    let ch = this.input.charCodeAt(this.state.pos);
    if (ch !== 33) return false;

    while (!isNewLine(ch) && ++this.state.pos < this.length) {
      ch = this.input.charCodeAt(this.state.pos);
    }

    const value = this.input.slice(start + 2, this.state.pos);
    this.finishToken(types.interpreterDirective, value);
    return true;
  }

  readToken_mult_modulo(code) {
    let type = code === 42 ? types.star : types.modulo;
    let width = 1;
    let next = this.input.charCodeAt(this.state.pos + 1);
    const exprAllowed = this.state.exprAllowed;

    if (code === 42 && next === 42) {
      width++;
      next = this.input.charCodeAt(this.state.pos + 2);
      type = types.exponent;
    }

    if (next === 61 && !exprAllowed) {
      width++;
      type = types.assign;
    }

    this.finishOp(type, width);
  }

  readToken_pipe_amp(code) {
    const next = this.input.charCodeAt(this.state.pos + 1);

    if (next === code) {
      if (this.input.charCodeAt(this.state.pos + 2) === 61) {
        this.finishOp(types.assign, 3);
      } else {
        this.finishOp(code === 124 ? types.logicalOR : types.logicalAND, 2);
      }

      return;
    }

    if (code === 124) {
      if (next === 62) {
        this.finishOp(types.pipeline, 2);
        return;
      }
    }

    if (next === 61) {
      this.finishOp(types.assign, 2);
      return;
    }

    this.finishOp(code === 124 ? types.bitwiseOR : types.bitwiseAND, 1);
  }

  readToken_caret() {
    const next = this.input.charCodeAt(this.state.pos + 1);

    if (next === 61) {
      this.finishOp(types.assign, 2);
    } else {
      this.finishOp(types.bitwiseXOR, 1);
    }
  }

  readToken_plus_min(code) {
    const next = this.input.charCodeAt(this.state.pos + 1);

    if (next === code) {
      if (next === 45 && !this.inModule && this.input.charCodeAt(this.state.pos + 2) === 62 && (this.state.lastTokEnd === 0 || lineBreak.test(this.input.slice(this.state.lastTokEnd, this.state.pos)))) {
        this.skipLineComment(3);
        this.skipSpace();
        this.nextToken();
        return;
      }

      this.finishOp(types.incDec, 2);
      return;
    }

    if (next === 61) {
      this.finishOp(types.assign, 2);
    } else {
      this.finishOp(types.plusMin, 1);
    }
  }

  readToken_lt_gt(code) {
    const next = this.input.charCodeAt(this.state.pos + 1);
    let size = 1;

    if (next === code) {
      size = code === 62 && this.input.charCodeAt(this.state.pos + 2) === 62 ? 3 : 2;

      if (this.input.charCodeAt(this.state.pos + size) === 61) {
        this.finishOp(types.assign, size + 1);
        return;
      }

      this.finishOp(types.bitShift, size);
      return;
    }

    if (next === 33 && code === 60 && !this.inModule && this.input.charCodeAt(this.state.pos + 2) === 45 && this.input.charCodeAt(this.state.pos + 3) === 45) {
      this.skipLineComment(4);
      this.skipSpace();
      this.nextToken();
      return;
    }

    if (next === 61) {
      size = 2;
    }

    this.finishOp(types.relational, size);
  }

  readToken_eq_excl(code) {
    const next = this.input.charCodeAt(this.state.pos + 1);

    if (next === 61) {
      this.finishOp(types.equality, this.input.charCodeAt(this.state.pos + 2) === 61 ? 3 : 2);
      return;
    }

    if (code === 61 && next === 62) {
      this.state.pos += 2;
      this.finishToken(types.arrow);
      return;
    }

    this.finishOp(code === 61 ? types.eq : types.bang, 1);
  }

  readToken_question() {
    const next = this.input.charCodeAt(this.state.pos + 1);
    const next2 = this.input.charCodeAt(this.state.pos + 2);

    if (next === 63 && !this.state.inType) {
      if (next2 === 61) {
        this.finishOp(types.assign, 3);
      } else {
        this.finishOp(types.nullishCoalescing, 2);
      }
    } else if (next === 46 && !(next2 >= 48 && next2 <= 57)) {
      this.state.pos += 2;
      this.finishToken(types.questionDot);
    } else {
      ++this.state.pos;
      this.finishToken(types.question);
    }
  }

  getTokenFromCode(code) {
    switch (code) {
      case 46:
        this.readToken_dot();
        return;

      case 40:
        ++this.state.pos;
        this.finishToken(types.parenL);
        return;

      case 41:
        ++this.state.pos;
        this.finishToken(types.parenR);
        return;

      case 59:
        ++this.state.pos;
        this.finishToken(types.semi);
        return;

      case 44:
        ++this.state.pos;
        this.finishToken(types.comma);
        return;

      case 91:
        ++this.state.pos;
        this.finishToken(types.bracketL);
        return;

      case 93:
        ++this.state.pos;
        this.finishToken(types.bracketR);
        return;

      case 123:
        ++this.state.pos;
        this.finishToken(types.braceL);
        return;

      case 125:
        ++this.state.pos;
        this.finishToken(types.braceR);
        return;

      case 58:
        if (this.hasPlugin("functionBind") && this.input.charCodeAt(this.state.pos + 1) === 58) {
          this.finishOp(types.doubleColon, 2);
        } else {
          ++this.state.pos;
          this.finishToken(types.colon);
        }

        return;

      case 63:
        this.readToken_question();
        return;

      case 96:
        ++this.state.pos;
        this.finishToken(types.backQuote);
        return;

      case 48:
        {
          const next = this.input.charCodeAt(this.state.pos + 1);

          if (next === 120 || next === 88) {
            this.readRadixNumber(16);
            return;
          }

          if (next === 111 || next === 79) {
            this.readRadixNumber(8);
            return;
          }

          if (next === 98 || next === 66) {
            this.readRadixNumber(2);
            return;
          }
        }

      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        this.readNumber(false);
        return;

      case 34:
      case 39:
        this.readString(code);
        return;

      case 47:
        this.readToken_slash();
        return;

      case 37:
      case 42:
        this.readToken_mult_modulo(code);
        return;

      case 124:
      case 38:
        this.readToken_pipe_amp(code);
        return;

      case 94:
        this.readToken_caret();
        return;

      case 43:
      case 45:
        this.readToken_plus_min(code);
        return;

      case 60:
      case 62:
        this.readToken_lt_gt(code);
        return;

      case 61:
      case 33:
        this.readToken_eq_excl(code);
        return;

      case 126:
        this.finishOp(types.tilde, 1);
        return;

      case 64:
        ++this.state.pos;
        this.finishToken(types.at);
        return;

      case 35:
        this.readToken_numberSign();
        return;

      case 92:
        this.readWord();
        return;

      default:
        if (isIdentifierStart(code)) {
          this.readWord();
          return;
        }

    }

    throw this.raise(this.state.pos, `Unexpected character '${String.fromCodePoint(code)}'`);
  }

  finishOp(type, size) {
    const str = this.input.slice(this.state.pos, this.state.pos + size);
    this.state.pos += size;
    this.finishToken(type, str);
  }

  readRegexp() {
    const start = this.state.pos;
    let escaped, inClass;

    for (;;) {
      if (this.state.pos >= this.length) {
        throw this.raise(start, "Unterminated regular expression");
      }

      const ch = this.input.charAt(this.state.pos);

      if (lineBreak.test(ch)) {
        throw this.raise(start, "Unterminated regular expression");
      }

      if (escaped) {
        escaped = false;
      } else {
        if (ch === "[") {
          inClass = true;
        } else if (ch === "]" && inClass) {
          inClass = false;
        } else if (ch === "/" && !inClass) {
          break;
        }

        escaped = ch === "\\";
      }

      ++this.state.pos;
    }

    const content = this.input.slice(start, this.state.pos);
    ++this.state.pos;
    let mods = "";

    while (this.state.pos < this.length) {
      const char = this.input[this.state.pos];
      const charCode = this.input.codePointAt(this.state.pos);

      if (VALID_REGEX_FLAGS.has(char)) {
        if (mods.indexOf(char) > -1) {
          this.raise(this.state.pos + 1, "Duplicate regular expression flag");
        }
      } else if (isIdentifierChar(charCode) || charCode === 92) {
        this.raise(this.state.pos + 1, "Invalid regular expression flag");
      } else {
        break;
      }

      ++this.state.pos;
      mods += char;
    }

    this.finishToken(types.regexp, {
      pattern: content,
      flags: mods
    });
  }

  readInt(radix, len, forceLen, allowNumSeparator = true) {
    const start = this.state.pos;
    const forbiddenSiblings = radix === 16 ? forbiddenNumericSeparatorSiblings.hex : forbiddenNumericSeparatorSiblings.decBinOct;
    const allowedSiblings = radix === 16 ? allowedNumericSeparatorSiblings.hex : radix === 10 ? allowedNumericSeparatorSiblings.dec : radix === 8 ? allowedNumericSeparatorSiblings.oct : allowedNumericSeparatorSiblings.bin;
    let invalid = false;
    let total = 0;

    for (let i = 0, e = len == null ? Infinity : len; i < e; ++i) {
      const code = this.input.charCodeAt(this.state.pos);
      let val;

      if (this.hasPlugin("numericSeparator")) {
        if (code === 95) {
          const prev = this.input.charCodeAt(this.state.pos - 1);
          const next = this.input.charCodeAt(this.state.pos + 1);

          if (allowedSiblings.indexOf(next) === -1) {
            this.raise(this.state.pos, "A numeric separator is only allowed between two digits");
          } else if (forbiddenSiblings.indexOf(prev) > -1 || forbiddenSiblings.indexOf(next) > -1 || Number.isNaN(next)) {
            this.raise(this.state.pos, "A numeric separator is only allowed between two digits");
          }

          if (!allowNumSeparator) {
            this.raise(this.state.pos, "Numeric separators are not allowed inside unicode escape sequences or hex escape sequences");
          }

          ++this.state.pos;
          continue;
        }
      }

      if (code >= 97) {
        val = code - 97 + 10;
      } else if (code >= 65) {
        val = code - 65 + 10;
      } else if (_isDigit(code)) {
        val = code - 48;
      } else {
        val = Infinity;
      }

      if (val >= radix) {
        if (this.options.errorRecovery && val <= 9) {
          val = 0;
          this.raise(this.state.start + i + 2, "Expected number in radix " + radix);
        } else if (forceLen) {
          val = 0;
          invalid = true;
        } else {
          break;
        }
      }

      ++this.state.pos;
      total = total * radix + val;
    }

    if (this.state.pos === start || len != null && this.state.pos - start !== len || invalid) {
      return null;
    }

    return total;
  }

  readRadixNumber(radix) {
    const start = this.state.pos;
    let isBigInt = false;
    this.state.pos += 2;
    const val = this.readInt(radix);

    if (val == null) {
      this.raise(this.state.start + 2, "Expected number in radix " + radix);
    }

    if (this.hasPlugin("bigInt")) {
      if (this.input.charCodeAt(this.state.pos) === 110) {
        ++this.state.pos;
        isBigInt = true;
      }
    }

    if (isIdentifierStart(this.input.codePointAt(this.state.pos))) {
      throw this.raise(this.state.pos, "Identifier directly after number");
    }

    if (isBigInt) {
      const str = this.input.slice(start, this.state.pos).replace(/[_n]/g, "");
      this.finishToken(types.bigint, str);
      return;
    }

    this.finishToken(types.num, val);
  }

  readNumber(startsWithDot) {
    const start = this.state.pos;
    let isFloat = false;
    let isBigInt = false;
    let isNonOctalDecimalInt = false;

    if (!startsWithDot && this.readInt(10) === null) {
      this.raise(start, "Invalid number");
    }

    let octal = this.state.pos - start >= 2 && this.input.charCodeAt(start) === 48;

    if (octal) {
      if (this.state.strict) {
        this.raise(start, "Legacy octal literals are not allowed in strict mode");
      }

      if (/[89]/.test(this.input.slice(start, this.state.pos))) {
        octal = false;
        isNonOctalDecimalInt = true;
      }
    }

    let next = this.input.charCodeAt(this.state.pos);

    if (next === 46 && !octal) {
      ++this.state.pos;
      this.readInt(10);
      isFloat = true;
      next = this.input.charCodeAt(this.state.pos);
    }

    if ((next === 69 || next === 101) && !octal) {
      next = this.input.charCodeAt(++this.state.pos);

      if (next === 43 || next === 45) {
        ++this.state.pos;
      }

      if (this.readInt(10) === null) this.raise(start, "Invalid number");
      isFloat = true;
      next = this.input.charCodeAt(this.state.pos);
    }

    if (this.hasPlugin("numericSeparator") && (octal || isNonOctalDecimalInt)) {
      const underscorePos = this.input.slice(start, this.state.pos).indexOf("_");

      if (underscorePos > 0) {
        this.raise(underscorePos + start, "Numeric separator can not be used after leading 0");
      }
    }

    if (this.hasPlugin("bigInt")) {
      if (next === 110) {
        if (isFloat || octal || isNonOctalDecimalInt) {
          this.raise(start, "Invalid BigIntLiteral");
        }

        ++this.state.pos;
        isBigInt = true;
      }
    }

    if (isIdentifierStart(this.input.codePointAt(this.state.pos))) {
      throw this.raise(this.state.pos, "Identifier directly after number");
    }

    const str = this.input.slice(start, this.state.pos).replace(/[_n]/g, "");

    if (isBigInt) {
      this.finishToken(types.bigint, str);
      return;
    }

    const val = octal ? parseInt(str, 8) : parseFloat(str);
    this.finishToken(types.num, val);
  }

  readCodePoint(throwOnInvalid) {
    const ch = this.input.charCodeAt(this.state.pos);
    let code;

    if (ch === 123) {
      const codePos = ++this.state.pos;
      code = this.readHexChar(this.input.indexOf("}", this.state.pos) - this.state.pos, true, throwOnInvalid);
      ++this.state.pos;

      if (code !== null && code > 0x10ffff) {
        if (throwOnInvalid) {
          this.raise(codePos, "Code point out of bounds");
        } else {
          return null;
        }
      }
    } else {
      code = this.readHexChar(4, false, throwOnInvalid);
    }

    return code;
  }

  readString(quote) {
    let out = "",
        chunkStart = ++this.state.pos;

    for (;;) {
      if (this.state.pos >= this.length) {
        throw this.raise(this.state.start, "Unterminated string constant");
      }

      const ch = this.input.charCodeAt(this.state.pos);
      if (ch === quote) break;

      if (ch === 92) {
        out += this.input.slice(chunkStart, this.state.pos);
        out += this.readEscapedChar(false);
        chunkStart = this.state.pos;
      } else if (ch === 8232 || ch === 8233) {
        ++this.state.pos;
        ++this.state.curLine;
        this.state.lineStart = this.state.pos;
      } else if (isNewLine(ch)) {
        throw this.raise(this.state.start, "Unterminated string constant");
      } else {
        ++this.state.pos;
      }
    }

    out += this.input.slice(chunkStart, this.state.pos++);
    this.finishToken(types.string, out);
  }

  readTmplToken() {
    let out = "",
        chunkStart = this.state.pos,
        containsInvalid = false;

    for (;;) {
      if (this.state.pos >= this.length) {
        throw this.raise(this.state.start, "Unterminated template");
      }

      const ch = this.input.charCodeAt(this.state.pos);

      if (ch === 96 || ch === 36 && this.input.charCodeAt(this.state.pos + 1) === 123) {
        if (this.state.pos === this.state.start && this.match(types.template)) {
          if (ch === 36) {
            this.state.pos += 2;
            this.finishToken(types.dollarBraceL);
            return;
          } else {
            ++this.state.pos;
            this.finishToken(types.backQuote);
            return;
          }
        }

        out += this.input.slice(chunkStart, this.state.pos);
        this.finishToken(types.template, containsInvalid ? null : out);
        return;
      }

      if (ch === 92) {
        out += this.input.slice(chunkStart, this.state.pos);
        const escaped = this.readEscapedChar(true);

        if (escaped === null) {
          containsInvalid = true;
        } else {
          out += escaped;
        }

        chunkStart = this.state.pos;
      } else if (isNewLine(ch)) {
        out += this.input.slice(chunkStart, this.state.pos);
        ++this.state.pos;

        switch (ch) {
          case 13:
            if (this.input.charCodeAt(this.state.pos) === 10) {
              ++this.state.pos;
            }

          case 10:
            out += "\n";
            break;

          default:
            out += String.fromCharCode(ch);
            break;
        }

        ++this.state.curLine;
        this.state.lineStart = this.state.pos;
        chunkStart = this.state.pos;
      } else {
        ++this.state.pos;
      }
    }
  }

  readEscapedChar(inTemplate) {
    const throwOnInvalid = !inTemplate;
    const ch = this.input.charCodeAt(++this.state.pos);
    ++this.state.pos;

    switch (ch) {
      case 110:
        return "\n";

      case 114:
        return "\r";

      case 120:
        {
          const code = this.readHexChar(2, false, throwOnInvalid);
          return code === null ? null : String.fromCharCode(code);
        }

      case 117:
        {
          const code = this.readCodePoint(throwOnInvalid);
          return code === null ? null : String.fromCodePoint(code);
        }

      case 116:
        return "\t";

      case 98:
        return "\b";

      case 118:
        return "\u000b";

      case 102:
        return "\f";

      case 13:
        if (this.input.charCodeAt(this.state.pos) === 10) {
          ++this.state.pos;
        }

      case 10:
        this.state.lineStart = this.state.pos;
        ++this.state.curLine;

      case 8232:
      case 8233:
        return "";

      case 56:
      case 57:
        if (inTemplate) {
          return null;
        }

      default:
        if (ch >= 48 && ch <= 55) {
          const codePos = this.state.pos - 1;
          let octalStr = this.input.substr(this.state.pos - 1, 3).match(/^[0-7]+/)[0];
          let octal = parseInt(octalStr, 8);

          if (octal > 255) {
            octalStr = octalStr.slice(0, -1);
            octal = parseInt(octalStr, 8);
          }

          this.state.pos += octalStr.length - 1;
          const next = this.input.charCodeAt(this.state.pos);

          if (octalStr !== "0" || next === 56 || next === 57) {
            if (inTemplate) {
              return null;
            } else if (this.state.strict) {
              this.raise(codePos, "Octal literal in strict mode");
            } else if (!this.state.containsOctal) {
              this.state.containsOctal = true;
              this.state.octalPosition = codePos;
            }
          }

          return String.fromCharCode(octal);
        }

        return String.fromCharCode(ch);
    }
  }

  readHexChar(len, forceLen, throwOnInvalid) {
    const codePos = this.state.pos;
    const n = this.readInt(16, len, forceLen, false);

    if (n === null) {
      if (throwOnInvalid) {
        this.raise(codePos, "Bad character escape sequence");
      } else {
        this.state.pos = codePos - 1;
      }
    }

    return n;
  }

  readWord1() {
    let word = "";
    this.state.containsEsc = false;
    const start = this.state.pos;
    let chunkStart = this.state.pos;

    while (this.state.pos < this.length) {
      const ch = this.input.codePointAt(this.state.pos);

      if (isIdentifierChar(ch)) {
        this.state.pos += ch <= 0xffff ? 1 : 2;
      } else if (this.state.isIterator && ch === 64) {
        ++this.state.pos;
      } else if (ch === 92) {
        this.state.containsEsc = true;
        word += this.input.slice(chunkStart, this.state.pos);
        const escStart = this.state.pos;
        const identifierCheck = this.state.pos === start ? isIdentifierStart : isIdentifierChar;

        if (this.input.charCodeAt(++this.state.pos) !== 117) {
          this.raise(this.state.pos, "Expecting Unicode escape sequence \\uXXXX");
          continue;
        }

        ++this.state.pos;
        const esc = this.readCodePoint(true);

        if (esc !== null) {
          if (!identifierCheck(esc)) {
            this.raise(escStart, "Invalid Unicode escape");
          }

          word += String.fromCodePoint(esc);
        }

        chunkStart = this.state.pos;
      } else {
        break;
      }
    }

    return word + this.input.slice(chunkStart, this.state.pos);
  }

  isIterator(word) {
    return word === "@@iterator" || word === "@@asyncIterator";
  }

  readWord() {
    const word = this.readWord1();
    const type = keywords.get(word) || types.name;

    if (this.state.isIterator && (!this.isIterator(word) || !this.state.inType)) {
      this.raise(this.state.pos, `Invalid identifier ${word}`);
    }

    this.finishToken(type, word);
  }

  checkKeywordEscapes() {
    const kw = this.state.type.keyword;

    if (kw && this.state.containsEsc) {
      this.raise(this.state.start, `Escape sequence in keyword ${kw}`);
    }
  }

  braceIsBlock(prevType) {
    const parent = this.curContext();

    if (parent === types$1.functionExpression || parent === types$1.functionStatement) {
      return true;
    }

    if (prevType === types.colon && (parent === types$1.braceStatement || parent === types$1.braceExpression)) {
      return !parent.isExpr;
    }

    if (prevType === types._return || prevType === types.name && this.state.exprAllowed) {
      return lineBreak.test(this.input.slice(this.state.lastTokEnd, this.state.start));
    }

    if (prevType === types._else || prevType === types.semi || prevType === types.eof || prevType === types.parenR || prevType === types.arrow) {
      return true;
    }

    if (prevType === types.braceL) {
      return parent === types$1.braceStatement;
    }

    if (prevType === types._var || prevType === types._const || prevType === types.name) {
      return false;
    }

    if (prevType === types.relational) {
      return true;
    }

    return !this.state.exprAllowed;
  }

  updateContext(prevType) {
    const type = this.state.type;
    let update;

    if (type.keyword && (prevType === types.dot || prevType === types.questionDot)) {
      this.state.exprAllowed = false;
    } else if (update = type.updateContext) {
      update.call(this, prevType);
    } else {
      this.state.exprAllowed = type.beforeExpr;
    }
  }

}

const literal = /^('|")((?:\\?.)*?)\1/;
class UtilParser extends Tokenizer {
  addExtra(node, key, val) {
    if (!node) return;
    const extra = node.extra = node.extra || {};
    extra[key] = val;
  }

  isRelational(op) {
    return this.match(types.relational) && this.state.value === op;
  }

  isLookaheadRelational(op) {
    const next = this.nextTokenStart();

    if (this.input.charAt(next) === op) {
      if (next + 1 === this.input.length) {
        return true;
      }

      const afterNext = this.input.charCodeAt(next + 1);
      return afterNext !== op.charCodeAt(0) && afterNext !== 61;
    }

    return false;
  }

  expectRelational(op) {
    if (this.isRelational(op)) {
      this.next();
    } else {
      this.unexpected(null, types.relational);
    }
  }

  isContextual(name) {
    return this.match(types.name) && this.state.value === name && !this.state.containsEsc;
  }

  isUnparsedContextual(nameStart, name) {
    const nameEnd = nameStart + name.length;
    return this.input.slice(nameStart, nameEnd) === name && (nameEnd === this.input.length || !isIdentifierChar(this.input.charCodeAt(nameEnd)));
  }

  isLookaheadContextual(name) {
    const next = this.nextTokenStart();
    return this.isUnparsedContextual(next, name);
  }

  eatContextual(name) {
    return this.isContextual(name) && this.eat(types.name);
  }

  expectContextual(name, message) {
    if (!this.eatContextual(name)) this.unexpected(null, message);
  }

  canInsertSemicolon() {
    return this.match(types.eof) || this.match(types.braceR) || this.hasPrecedingLineBreak();
  }

  hasPrecedingLineBreak() {
    return lineBreak.test(this.input.slice(this.state.lastTokEnd, this.state.start));
  }

  isLineTerminator() {
    return this.eat(types.semi) || this.canInsertSemicolon();
  }

  semicolon() {
    if (!this.isLineTerminator()) this.unexpected(null, types.semi);
  }

  expect(type, pos) {
    this.eat(type) || this.unexpected(pos, type);
  }

  assertNoSpace(message = "Unexpected space.") {
    if (this.state.start > this.state.lastTokEnd) {
      this.raise(this.state.lastTokEnd, message);
    }
  }

  unexpected(pos, messageOrType = "Unexpected token") {
    if (typeof messageOrType !== "string") {
      messageOrType = `Unexpected token, expected "${messageOrType.label}"`;
    }

    throw this.raise(pos != null ? pos : this.state.start, messageOrType);
  }

  expectPlugin(name, pos) {
    if (!this.hasPlugin(name)) {
      throw this.raise(pos != null ? pos : this.state.start, `This experimental syntax requires enabling the parser plugin: '${name}'`, {
        missingPluginNames: [name]
      });
    }

    return true;
  }

  expectOnePlugin(names, pos) {
    if (!names.some(n => this.hasPlugin(n))) {
      throw this.raise(pos != null ? pos : this.state.start, `This experimental syntax requires enabling one of the following parser plugin(s): '${names.join(", ")}'`, {
        missingPluginNames: names
      });
    }
  }

  checkYieldAwaitInDefaultParams() {
    if (this.state.yieldPos !== -1 && (this.state.awaitPos === -1 || this.state.yieldPos < this.state.awaitPos)) {
      this.raise(this.state.yieldPos, "Yield cannot be used as name inside a generator function");
    }

    if (this.state.awaitPos !== -1) {
      this.raise(this.state.awaitPos, "Await cannot be used as name inside an async function");
    }
  }

  strictDirective(start) {
    for (;;) {
      skipWhiteSpace.lastIndex = start;
      start += skipWhiteSpace.exec(this.input)[0].length;
      const match = literal.exec(this.input.slice(start));
      if (!match) break;
      if (match[2] === "use strict") return true;
      start += match[0].length;
      skipWhiteSpace.lastIndex = start;
      start += skipWhiteSpace.exec(this.input)[0].length;

      if (this.input[start] === ";") {
        start++;
      }
    }

    return false;
  }

  tryParse(fn, oldState = this.state.clone()) {
    const abortSignal = {
      node: null
    };

    try {
      const node = fn((node = null) => {
        abortSignal.node = node;
        throw abortSignal;
      });

      if (this.state.errors.length > oldState.errors.length) {
        const failState = this.state;
        this.state = oldState;
        return {
          node,
          error: failState.errors[oldState.errors.length],
          thrown: false,
          aborted: false,
          failState
        };
      }

      return {
        node,
        error: null,
        thrown: false,
        aborted: false,
        failState: null
      };
    } catch (error) {
      const failState = this.state;
      this.state = oldState;

      if (error instanceof SyntaxError) {
        return {
          node: null,
          error,
          thrown: true,
          aborted: false,
          failState
        };
      }

      if (error === abortSignal) {
        return {
          node: abortSignal.node,
          error: null,
          thrown: false,
          aborted: true,
          failState
        };
      }

      throw error;
    }
  }

  checkExpressionErrors(refExpressionErrors, andThrow) {
    if (!refExpressionErrors) return false;
    const {
      shorthandAssign,
      doubleProto
    } = refExpressionErrors;
    if (!andThrow) return shorthandAssign >= 0 || doubleProto >= 0;

    if (shorthandAssign >= 0) {
      this.unexpected(shorthandAssign);
    }

    if (doubleProto >= 0) {
      this.raise(doubleProto, "Redefinition of __proto__ property");
    }
  }

}
class ExpressionErrors {
  constructor() {
    this.shorthandAssign = -1;
    this.doubleProto = -1;
  }

}

class Node {
  constructor(parser, pos, loc) {
    this.type = "";
    this.start = pos;
    this.end = 0;
    this.loc = new SourceLocation(loc);
    if (parser && parser.options.ranges) this.range = [pos, 0];
    if (parser && parser.filename) this.loc.filename = parser.filename;
  }

  __clone() {
    const newNode = new Node();
    const keys = Object.keys(this);

    for (let i = 0, length = keys.length; i < length; i++) {
      const key = keys[i];

      if (key !== "leadingComments" && key !== "trailingComments" && key !== "innerComments") {
        newNode[key] = this[key];
      }
    }

    return newNode;
  }

}

class NodeUtils extends UtilParser {
  startNode() {
    return new Node(this, this.state.start, this.state.startLoc);
  }

  startNodeAt(pos, loc) {
    return new Node(this, pos, loc);
  }

  startNodeAtNode(type) {
    return this.startNodeAt(type.start, type.loc.start);
  }

  finishNode(node, type) {
    return this.finishNodeAt(node, type, this.state.lastTokEnd, this.state.lastTokEndLoc);
  }

  finishNodeAt(node, type, pos, loc) {

    node.type = type;
    node.end = pos;
    node.loc.end = loc;
    if (this.options.ranges) node.range[1] = pos;
    this.processComment(node);
    return node;
  }

  resetStartLocation(node, start, startLoc) {
    node.start = start;
    node.loc.start = startLoc;
    if (this.options.ranges) node.range[0] = start;
  }

  resetEndLocation(node, end = this.state.lastTokEnd, endLoc = this.state.lastTokEndLoc) {
    node.end = end;
    node.loc.end = endLoc;
    if (this.options.ranges) node.range[1] = end;
  }

  resetStartLocationFromNode(node, locationNode) {
    this.resetStartLocation(node, locationNode.start, locationNode.loc.start);
  }

}

const unwrapParenthesizedExpression = node => {
  return node.type === "ParenthesizedExpression" ? unwrapParenthesizedExpression(node.expression) : node;
};

class LValParser extends NodeUtils {
  toAssignable(node) {
    var _node$extra, _node$extra3;

    let parenthesized = undefined;

    if (node.type === "ParenthesizedExpression" || ((_node$extra = node.extra) == null ? void 0 : _node$extra.parenthesized)) {
      parenthesized = unwrapParenthesizedExpression(node);

      if (parenthesized.type !== "Identifier" && parenthesized.type !== "MemberExpression") {
        this.raise(node.start, "Invalid parenthesized assignment pattern");
      }
    }

    switch (node.type) {
      case "Identifier":
      case "ObjectPattern":
      case "ArrayPattern":
      case "AssignmentPattern":
        break;

      case "ObjectExpression":
        node.type = "ObjectPattern";

        for (let i = 0, length = node.properties.length, last = length - 1; i < length; i++) {
          var _node$extra2;

          const prop = node.properties[i];
          const isLast = i === last;
          this.toAssignableObjectExpressionProp(prop, isLast);

          if (isLast && prop.type === "RestElement" && ((_node$extra2 = node.extra) == null ? void 0 : _node$extra2.trailingComma)) {
            this.raiseRestNotLast(node.extra.trailingComma);
          }
        }

        break;

      case "ObjectProperty":
        this.toAssignable(node.value);
        break;

      case "SpreadElement":
        {
          this.checkToRestConversion(node);
          node.type = "RestElement";
          const arg = node.argument;
          this.toAssignable(arg);
          break;
        }

      case "ArrayExpression":
        node.type = "ArrayPattern";
        this.toAssignableList(node.elements, (_node$extra3 = node.extra) == null ? void 0 : _node$extra3.trailingComma);
        break;

      case "AssignmentExpression":
        if (node.operator !== "=") {
          this.raise(node.left.end, "Only '=' operator can be used for specifying default value.");
        }

        node.type = "AssignmentPattern";
        delete node.operator;
        this.toAssignable(node.left);
        break;

      case "ParenthesizedExpression":
        this.toAssignable(parenthesized);
        break;
    }

    return node;
  }

  toAssignableObjectExpressionProp(prop, isLast) {
    if (prop.type === "ObjectMethod") {
      const error = prop.kind === "get" || prop.kind === "set" ? "Object pattern can't contain getter or setter" : "Object pattern can't contain methods";
      this.raise(prop.key.start, error);
    } else if (prop.type === "SpreadElement" && !isLast) {
      this.raiseRestNotLast(prop.start);
    } else {
      this.toAssignable(prop);
    }
  }

  toAssignableList(exprList, trailingCommaPos) {
    let end = exprList.length;

    if (end) {
      const last = exprList[end - 1];

      if (last && last.type === "RestElement") {
        --end;
      } else if (last && last.type === "SpreadElement") {
        last.type = "RestElement";
        const arg = last.argument;
        this.toAssignable(arg);

        if (arg.type !== "Identifier" && arg.type !== "MemberExpression" && arg.type !== "ArrayPattern" && arg.type !== "ObjectPattern") {
          this.unexpected(arg.start);
        }

        if (trailingCommaPos) {
          this.raiseTrailingCommaAfterRest(trailingCommaPos);
        }

        --end;
      }
    }

    for (let i = 0; i < end; i++) {
      const elt = exprList[i];

      if (elt) {
        this.toAssignable(elt);

        if (elt.type === "RestElement") {
          this.raiseRestNotLast(elt.start);
        }
      }
    }

    return exprList;
  }

  toReferencedList(exprList, isParenthesizedExpr) {
    return exprList;
  }

  toReferencedListDeep(exprList, isParenthesizedExpr) {
    this.toReferencedList(exprList, isParenthesizedExpr);

    for (let _i = 0; _i < exprList.length; _i++) {
      const expr = exprList[_i];

      if (expr && expr.type === "ArrayExpression") {
        this.toReferencedListDeep(expr.elements);
      }
    }
  }

  parseSpread(refExpressionErrors, refNeedsArrowPos) {
    const node = this.startNode();
    this.next();
    node.argument = this.parseMaybeAssign(false, refExpressionErrors, undefined, refNeedsArrowPos);
    return this.finishNode(node, "SpreadElement");
  }

  parseRestBinding() {
    const node = this.startNode();
    this.next();
    node.argument = this.parseBindingAtom();
    return this.finishNode(node, "RestElement");
  }

  parseBindingAtom() {
    switch (this.state.type) {
      case types.bracketL:
        {
          const node = this.startNode();
          this.next();
          node.elements = this.parseBindingList(types.bracketR, 93, true);
          return this.finishNode(node, "ArrayPattern");
        }

      case types.braceL:
        return this.parseObj(true);
    }

    return this.parseIdentifier();
  }

  parseBindingList(close, closeCharCode, allowEmpty, allowModifiers) {
    const elts = [];
    let first = true;

    while (!this.eat(close)) {
      if (first) {
        first = false;
      } else {
        this.expect(types.comma);
      }

      if (allowEmpty && this.match(types.comma)) {
        elts.push(null);
      } else if (this.eat(close)) {
        break;
      } else if (this.match(types.ellipsis)) {
        elts.push(this.parseAssignableListItemTypes(this.parseRestBinding()));
        this.checkCommaAfterRest(closeCharCode);
        this.expect(close);
        break;
      } else {
        const decorators = [];

        if (this.match(types.at) && this.hasPlugin("decorators")) {
          this.raise(this.state.start, "Stage 2 decorators cannot be used to decorate parameters");
        }

        while (this.match(types.at)) {
          decorators.push(this.parseDecorator());
        }

        elts.push(this.parseAssignableListItem(allowModifiers, decorators));
      }
    }

    return elts;
  }

  parseAssignableListItem(allowModifiers, decorators) {
    const left = this.parseMaybeDefault();
    this.parseAssignableListItemTypes(left);
    const elt = this.parseMaybeDefault(left.start, left.loc.start, left);

    if (decorators.length) {
      left.decorators = decorators;
    }

    return elt;
  }

  parseAssignableListItemTypes(param) {
    return param;
  }

  parseMaybeDefault(startPos, startLoc, left) {
    startLoc = startLoc || this.state.startLoc;
    startPos = startPos || this.state.start;
    left = left || this.parseBindingAtom();
    if (!this.eat(types.eq)) return left;
    const node = this.startNodeAt(startPos, startLoc);
    node.left = left;
    node.right = this.parseMaybeAssign();
    return this.finishNode(node, "AssignmentPattern");
  }

  checkLVal(expr, bindingType = BIND_NONE, checkClashes, contextDescription, disallowLetBinding, strictModeChanged = false) {
    switch (expr.type) {
      case "Identifier":
        if (this.state.strict && (strictModeChanged ? isStrictBindReservedWord(expr.name, this.inModule) : isStrictBindOnlyReservedWord(expr.name))) {
          this.raise(expr.start, `${bindingType === BIND_NONE ? "Assigning to" : "Binding"} '${expr.name}' in strict mode`);
        }

        if (checkClashes) {
          const key = `_${expr.name}`;

          if (checkClashes[key]) {
            this.raise(expr.start, "Argument name clash");
          } else {
            checkClashes[key] = true;
          }
        }

        if (disallowLetBinding && expr.name === "let") {
          this.raise(expr.start, "'let' is not allowed to be used as a name in 'let' or 'const' declarations.");
        }

        if (!(bindingType & BIND_NONE)) {
          this.scope.declareName(expr.name, bindingType, expr.start);
        }

        break;

      case "MemberExpression":
        if (bindingType !== BIND_NONE) {
          this.raise(expr.start, "Binding member expression");
        }

        break;

      case "ObjectPattern":
        for (let _i2 = 0, _expr$properties = expr.properties; _i2 < _expr$properties.length; _i2++) {
          let prop = _expr$properties[_i2];
          if (prop.type === "ObjectProperty") prop = prop.value;else if (prop.type === "ObjectMethod") continue;
          this.checkLVal(prop, bindingType, checkClashes, "object destructuring pattern", disallowLetBinding);
        }

        break;

      case "ArrayPattern":
        for (let _i3 = 0, _expr$elements = expr.elements; _i3 < _expr$elements.length; _i3++) {
          const elem = _expr$elements[_i3];

          if (elem) {
            this.checkLVal(elem, bindingType, checkClashes, "array destructuring pattern", disallowLetBinding);
          }
        }

        break;

      case "AssignmentPattern":
        this.checkLVal(expr.left, bindingType, checkClashes, "assignment pattern");
        break;

      case "RestElement":
        this.checkLVal(expr.argument, bindingType, checkClashes, "rest element");
        break;

      case "ParenthesizedExpression":
        this.checkLVal(expr.expression, bindingType, checkClashes, "parenthesized expression");
        break;

      default:
        {
          const message = (bindingType === BIND_NONE ? "Invalid" : "Binding invalid") + " left-hand side" + (contextDescription ? " in " + contextDescription : "expression");
          this.raise(expr.start, message);
        }
    }
  }

  checkToRestConversion(node) {
    if (node.argument.type !== "Identifier" && node.argument.type !== "MemberExpression") {
      this.raise(node.argument.start, "Invalid rest operator's argument");
    }
  }

  checkCommaAfterRest(close) {
    if (this.match(types.comma)) {
      if (this.lookaheadCharCode() === close) {
        this.raiseTrailingCommaAfterRest(this.state.start);
      } else {
        this.raiseRestNotLast(this.state.start);
      }
    }
  }

  raiseRestNotLast(pos) {
    throw this.raise(pos, `Rest element must be last element`);
  }

  raiseTrailingCommaAfterRest(pos) {
    this.raise(pos, `Unexpected trailing comma after rest element`);
  }

}

class ExpressionParser extends LValParser {
  checkDuplicatedProto(prop, protoRef, refExpressionErrors) {
    if (prop.type === "SpreadElement" || prop.computed || prop.kind || prop.shorthand) {
      return;
    }

    const key = prop.key;
    const name = key.type === "Identifier" ? key.name : String(key.value);

    if (name === "__proto__") {
      if (protoRef.used) {
        if (refExpressionErrors) {
          if (refExpressionErrors.doubleProto === -1) {
            refExpressionErrors.doubleProto = key.start;
          }
        } else {
          this.raise(key.start, "Redefinition of __proto__ property");
        }
      }

      protoRef.used = true;
    }
  }

  getExpression() {
    let scopeFlags = SCOPE_PROGRAM;

    if (this.hasPlugin("topLevelAwait") && this.inModule) {
      scopeFlags |= SCOPE_ASYNC;
    }

    this.scope.enter(scopeFlags);
    this.nextToken();
    const expr = this.parseExpression();

    if (!this.match(types.eof)) {
      this.unexpected();
    }

    expr.comments = this.state.comments;
    expr.errors = this.state.errors;
    return expr;
  }

  parseExpression(noIn, refExpressionErrors) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    const expr = this.parseMaybeAssign(noIn, refExpressionErrors);

    if (this.match(types.comma)) {
      const node = this.startNodeAt(startPos, startLoc);
      node.expressions = [expr];

      while (this.eat(types.comma)) {
        node.expressions.push(this.parseMaybeAssign(noIn, refExpressionErrors));
      }

      this.toReferencedList(node.expressions);
      return this.finishNode(node, "SequenceExpression");
    }

    return expr;
  }

  parseMaybeAssign(noIn, refExpressionErrors, afterLeftParse, refNeedsArrowPos) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;

    if (this.isContextual("yield")) {
      if (this.scope.inGenerator) {
        let left = this.parseYield(noIn);

        if (afterLeftParse) {
          left = afterLeftParse.call(this, left, startPos, startLoc);
        }

        return left;
      } else {
        this.state.exprAllowed = false;
      }
    }

    let ownExpressionErrors;

    if (refExpressionErrors) {
      ownExpressionErrors = false;
    } else {
      refExpressionErrors = new ExpressionErrors();
      ownExpressionErrors = true;
    }

    if (this.match(types.parenL) || this.match(types.name)) {
      this.state.potentialArrowAt = this.state.start;
    }

    let left = this.parseMaybeConditional(noIn, refExpressionErrors, refNeedsArrowPos);

    if (afterLeftParse) {
      left = afterLeftParse.call(this, left, startPos, startLoc);
    }

    if (this.state.type.isAssign) {
      const node = this.startNodeAt(startPos, startLoc);
      const operator = this.state.value;
      node.operator = operator;

      if (operator === "??=") {
        this.expectPlugin("logicalAssignment");
      }

      if (operator === "||=" || operator === "&&=") {
        this.expectPlugin("logicalAssignment");
      }

      if (this.match(types.eq)) {
        node.left = this.toAssignable(left);
        refExpressionErrors.doubleProto = -1;
      } else {
        node.left = left;
      }

      if (refExpressionErrors.shorthandAssign >= node.left.start) {
        refExpressionErrors.shorthandAssign = -1;
      }

      this.checkLVal(left, undefined, undefined, "assignment expression");
      this.next();
      node.right = this.parseMaybeAssign(noIn);
      return this.finishNode(node, "AssignmentExpression");
    } else if (ownExpressionErrors) {
      this.checkExpressionErrors(refExpressionErrors, true);
    }

    return left;
  }

  parseMaybeConditional(noIn, refExpressionErrors, refNeedsArrowPos) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    const potentialArrowAt = this.state.potentialArrowAt;
    const expr = this.parseExprOps(noIn, refExpressionErrors);

    if (expr.type === "ArrowFunctionExpression" && expr.start === potentialArrowAt) {
      return expr;
    }

    if (this.checkExpressionErrors(refExpressionErrors, false)) return expr;
    return this.parseConditional(expr, noIn, startPos, startLoc, refNeedsArrowPos);
  }

  parseConditional(expr, noIn, startPos, startLoc, refNeedsArrowPos) {
    if (this.eat(types.question)) {
      const node = this.startNodeAt(startPos, startLoc);
      node.test = expr;
      node.consequent = this.parseMaybeAssign();
      this.expect(types.colon);
      node.alternate = this.parseMaybeAssign(noIn);
      return this.finishNode(node, "ConditionalExpression");
    }

    return expr;
  }

  parseExprOps(noIn, refExpressionErrors) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    const potentialArrowAt = this.state.potentialArrowAt;
    const expr = this.parseMaybeUnary(refExpressionErrors);

    if (expr.type === "ArrowFunctionExpression" && expr.start === potentialArrowAt) {
      return expr;
    }

    if (this.checkExpressionErrors(refExpressionErrors, false)) {
      return expr;
    }

    return this.parseExprOp(expr, startPos, startLoc, -1, noIn);
  }

  parseExprOp(left, leftStartPos, leftStartLoc, minPrec, noIn) {
    let prec = this.state.type.binop;

    if (prec != null && (!noIn || !this.match(types._in))) {
      if (prec > minPrec) {
        const operator = this.state.value;

        if (operator === "|>" && this.state.inFSharpPipelineDirectBody) {
          return left;
        }

        const node = this.startNodeAt(leftStartPos, leftStartLoc);
        node.left = left;
        node.operator = operator;

        if (operator === "**" && left.type === "UnaryExpression" && (this.options.createParenthesizedExpressions || !(left.extra && left.extra.parenthesized))) {
          this.raise(left.argument.start, "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.");
        }

        const op = this.state.type;
        const logical = op === types.logicalOR || op === types.logicalAND;
        const coalesce = op === types.nullishCoalescing;

        if (op === types.pipeline) {
          this.expectPlugin("pipelineOperator");
          this.state.inPipeline = true;
          this.checkPipelineAtInfixOperator(left, leftStartPos);
        } else if (coalesce) {
          prec = types.logicalAND.binop;
        }

        this.next();

        if (op === types.pipeline && this.getPluginOption("pipelineOperator", "proposal") === "minimal") {
          if (this.match(types.name) && this.state.value === "await" && this.scope.inAsync) {
            throw this.raise(this.state.start, `Unexpected "await" after pipeline body; await must have parentheses in minimal proposal`);
          }
        }

        node.right = this.parseExprOpRightExpr(op, prec, noIn);
        this.finishNode(node, logical || coalesce ? "LogicalExpression" : "BinaryExpression");
        const nextOp = this.state.type;

        if (coalesce && (nextOp === types.logicalOR || nextOp === types.logicalAND) || logical && nextOp === types.nullishCoalescing) {
          throw this.raise(this.state.start, `Nullish coalescing operator(??) requires parens when mixing with logical operators`);
        }

        return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, noIn);
      }
    }

    return left;
  }

  parseExprOpRightExpr(op, prec, noIn) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;

    switch (op) {
      case types.pipeline:
        switch (this.getPluginOption("pipelineOperator", "proposal")) {
          case "smart":
            return this.withTopicPermittingContext(() => {
              return this.parseSmartPipelineBody(this.parseExprOpBaseRightExpr(op, prec, noIn), startPos, startLoc);
            });

          case "fsharp":
            return this.withSoloAwaitPermittingContext(() => {
              return this.parseFSharpPipelineBody(prec, noIn);
            });
        }

      default:
        return this.parseExprOpBaseRightExpr(op, prec, noIn);
    }
  }

  parseExprOpBaseRightExpr(op, prec, noIn) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    return this.parseExprOp(this.parseMaybeUnary(), startPos, startLoc, op.rightAssociative ? prec - 1 : prec, noIn);
  }

  parseMaybeUnary(refExpressionErrors) {
    if (this.isContextual("await") && this.isAwaitAllowed()) {
      return this.parseAwait();
    } else if (this.state.type.prefix) {
      const node = this.startNode();
      const update = this.match(types.incDec);
      node.operator = this.state.value;
      node.prefix = true;

      if (node.operator === "throw") {
        this.expectPlugin("throwExpressions");
      }

      this.next();
      node.argument = this.parseMaybeUnary();
      this.checkExpressionErrors(refExpressionErrors, true);

      if (update) {
        this.checkLVal(node.argument, undefined, undefined, "prefix operation");
      } else if (this.state.strict && node.operator === "delete") {
        const arg = node.argument;

        if (arg.type === "Identifier") {
          this.raise(node.start, "Deleting local variable in strict mode");
        } else if (arg.type === "MemberExpression" && arg.property.type === "PrivateName") {
          this.raise(node.start, "Deleting a private field is not allowed");
        }
      }

      return this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
    }

    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    let expr = this.parseExprSubscripts(refExpressionErrors);
    if (this.checkExpressionErrors(refExpressionErrors, false)) return expr;

    while (this.state.type.postfix && !this.canInsertSemicolon()) {
      const node = this.startNodeAt(startPos, startLoc);
      node.operator = this.state.value;
      node.prefix = false;
      node.argument = expr;
      this.checkLVal(expr, undefined, undefined, "postfix operation");
      this.next();
      expr = this.finishNode(node, "UpdateExpression");
    }

    return expr;
  }

  parseExprSubscripts(refExpressionErrors) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    const potentialArrowAt = this.state.potentialArrowAt;
    const expr = this.parseExprAtom(refExpressionErrors);

    if (expr.type === "ArrowFunctionExpression" && expr.start === potentialArrowAt) {
      return expr;
    }

    return this.parseSubscripts(expr, startPos, startLoc);
  }

  parseSubscripts(base, startPos, startLoc, noCalls) {
    const state = {
      optionalChainMember: false,
      maybeAsyncArrow: this.atPossibleAsync(base),
      stop: false
    };

    do {
      base = this.parseSubscript(base, startPos, startLoc, noCalls, state);
      state.maybeAsyncArrow = false;
    } while (!state.stop);

    return base;
  }

  parseSubscript(base, startPos, startLoc, noCalls, state) {
    if (!noCalls && this.eat(types.doubleColon)) {
      const node = this.startNodeAt(startPos, startLoc);
      node.object = base;
      node.callee = this.parseNoCallExpr();
      state.stop = true;
      return this.parseSubscripts(this.finishNode(node, "BindExpression"), startPos, startLoc, noCalls);
    }

    let optional = false;

    if (this.match(types.questionDot)) {
      state.optionalChainMember = optional = true;

      if (noCalls && this.lookaheadCharCode() === 40) {
        state.stop = true;
        return base;
      }

      this.next();
    }

    const computed = this.eat(types.bracketL);

    if (optional && !this.match(types.parenL) && !this.match(types.backQuote) || computed || this.eat(types.dot)) {
      const node = this.startNodeAt(startPos, startLoc);
      node.object = base;
      node.property = computed ? this.parseExpression() : optional ? this.parseIdentifier(true) : this.parseMaybePrivateName(true);
      node.computed = computed;

      if (node.property.type === "PrivateName") {
        if (node.object.type === "Super") {
          this.raise(startPos, "Private fields can't be accessed on super");
        }

        this.classScope.usePrivateName(node.property.id.name, node.property.start);
      }

      if (computed) {
        this.expect(types.bracketR);
      }

      if (state.optionalChainMember) {
        node.optional = optional;
        return this.finishNode(node, "OptionalMemberExpression");
      } else {
        return this.finishNode(node, "MemberExpression");
      }
    } else if (!noCalls && this.match(types.parenL)) {
      const oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
      const oldYieldPos = this.state.yieldPos;
      const oldAwaitPos = this.state.awaitPos;
      this.state.maybeInArrowParameters = true;
      this.state.yieldPos = -1;
      this.state.awaitPos = -1;
      this.next();
      let node = this.startNodeAt(startPos, startLoc);
      node.callee = base;

      if (optional) {
        node.optional = true;
        node.arguments = this.parseCallExpressionArguments(types.parenR, false);
      } else {
        node.arguments = this.parseCallExpressionArguments(types.parenR, state.maybeAsyncArrow, base.type === "Import", base.type !== "Super", node);
      }

      this.finishCallExpression(node, state.optionalChainMember);

      if (state.maybeAsyncArrow && this.shouldParseAsyncArrow() && !optional) {
        state.stop = true;
        node = this.parseAsyncArrowFromCallExpression(this.startNodeAt(startPos, startLoc), node);
        this.checkYieldAwaitInDefaultParams();
        this.state.yieldPos = oldYieldPos;
        this.state.awaitPos = oldAwaitPos;
      } else {
        this.toReferencedListDeep(node.arguments);
        if (oldYieldPos !== -1) this.state.yieldPos = oldYieldPos;

        if (!this.isAwaitAllowed() && !oldMaybeInArrowParameters || oldAwaitPos !== -1) {
          this.state.awaitPos = oldAwaitPos;
        }
      }

      this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
      return node;
    } else if (this.match(types.backQuote)) {
      return this.parseTaggedTemplateExpression(startPos, startLoc, base, state);
    } else {
      state.stop = true;
      return base;
    }
  }

  parseTaggedTemplateExpression(startPos, startLoc, base, state, typeArguments) {
    const node = this.startNodeAt(startPos, startLoc);
    node.tag = base;
    node.quasi = this.parseTemplate(true);
    if (typeArguments) node.typeParameters = typeArguments;

    if (state.optionalChainMember) {
      this.raise(startPos, "Tagged Template Literals are not allowed in optionalChain");
    }

    return this.finishNode(node, "TaggedTemplateExpression");
  }

  atPossibleAsync(base) {
    return base.type === "Identifier" && base.name === "async" && this.state.lastTokEnd === base.end && !this.canInsertSemicolon() && this.input.slice(base.start, base.end) === "async";
  }

  finishCallExpression(node, optional) {
    if (node.callee.type === "Import") {
      if (node.arguments.length !== 1) {
        this.raise(node.start, "import() requires exactly one argument");
      } else {
        const importArg = node.arguments[0];

        if (importArg && importArg.type === "SpreadElement") {
          this.raise(importArg.start, "... is not allowed in import()");
        }
      }
    }

    return this.finishNode(node, optional ? "OptionalCallExpression" : "CallExpression");
  }

  parseCallExpressionArguments(close, possibleAsyncArrow, dynamicImport, allowPlaceholder, nodeForExtra) {
    const elts = [];
    let innerParenStart;
    let first = true;
    const oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
    this.state.inFSharpPipelineDirectBody = false;

    while (!this.eat(close)) {
      if (first) {
        first = false;
      } else {
        this.expect(types.comma);

        if (this.match(close)) {
          if (dynamicImport) {
            this.raise(this.state.lastTokStart, "Trailing comma is disallowed inside import(...) arguments");
          }

          if (nodeForExtra) {
            this.addExtra(nodeForExtra, "trailingComma", this.state.lastTokStart);
          }

          this.next();
          break;
        }
      }

      if (this.match(types.parenL) && !innerParenStart) {
        innerParenStart = this.state.start;
      }

      elts.push(this.parseExprListItem(false, possibleAsyncArrow ? new ExpressionErrors() : undefined, possibleAsyncArrow ? {
        start: 0
      } : undefined, allowPlaceholder));
    }

    if (possibleAsyncArrow && innerParenStart && this.shouldParseAsyncArrow()) {
      this.unexpected();
    }

    this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
    return elts;
  }

  shouldParseAsyncArrow() {
    return this.match(types.arrow) && !this.canInsertSemicolon();
  }

  parseAsyncArrowFromCallExpression(node, call) {
    var _call$extra;

    this.expect(types.arrow);
    this.parseArrowExpression(node, call.arguments, true, (_call$extra = call.extra) == null ? void 0 : _call$extra.trailingComma);
    return node;
  }

  parseNoCallExpr() {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    return this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true);
  }

  parseExprAtom(refExpressionErrors) {
    if (this.state.type === types.slash) this.readRegexp();
    const canBeArrow = this.state.potentialArrowAt === this.state.start;
    let node;

    switch (this.state.type) {
      case types._super:
        node = this.startNode();
        this.next();

        if (this.match(types.parenL) && !this.scope.allowDirectSuper && !this.options.allowSuperOutsideMethod) {
          this.raise(node.start, "super() is only valid inside a class constructor of a subclass. " + "Maybe a typo in the method name ('constructor') or not extending another class?");
        } else if (!this.scope.allowSuper && !this.options.allowSuperOutsideMethod) {
          this.raise(node.start, "super is only allowed in object methods and classes");
        }

        if (!this.match(types.parenL) && !this.match(types.bracketL) && !this.match(types.dot)) {
          this.raise(node.start, "super can only be used with function calls (i.e. super()) or " + "in property accesses (i.e. super.prop or super[prop])");
        }

        return this.finishNode(node, "Super");

      case types._import:
        node = this.startNode();
        this.next();

        if (this.match(types.dot)) {
          return this.parseImportMetaProperty(node);
        }

        if (!this.match(types.parenL)) {
          this.raise(this.state.lastTokStart, "import can only be used in import() or import.meta");
        }

        return this.finishNode(node, "Import");

      case types._this:
        node = this.startNode();
        this.next();
        return this.finishNode(node, "ThisExpression");

      case types.name:
        {
          node = this.startNode();
          const containsEsc = this.state.containsEsc;
          const id = this.parseIdentifier();

          if (!containsEsc && id.name === "async" && this.match(types._function) && !this.canInsertSemicolon()) {
            const last = this.state.context.length - 1;

            if (this.state.context[last] !== types$1.functionStatement) {
              throw new Error("Internal error");
            }

            this.state.context[last] = types$1.functionExpression;
            this.next();
            return this.parseFunction(node, undefined, true);
          } else if (canBeArrow && !containsEsc && id.name === "async" && this.match(types.name) && !this.canInsertSemicolon()) {
            const oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
            const oldYieldPos = this.state.yieldPos;
            const oldAwaitPos = this.state.awaitPos;
            this.state.maybeInArrowParameters = true;
            this.state.yieldPos = -1;
            this.state.awaitPos = -1;
            const params = [this.parseIdentifier()];
            this.expect(types.arrow);
            this.checkYieldAwaitInDefaultParams();
            this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
            this.state.yieldPos = oldYieldPos;
            this.state.awaitPos = oldAwaitPos;
            this.parseArrowExpression(node, params, true);
            return node;
          }

          if (canBeArrow && this.match(types.arrow) && !this.canInsertSemicolon()) {
            this.next();
            this.parseArrowExpression(node, [id], false);
            return node;
          }

          return id;
        }

      case types._do:
        {
          this.expectPlugin("doExpressions");
          const node = this.startNode();
          this.next();
          const oldLabels = this.state.labels;
          this.state.labels = [];
          node.body = this.parseBlock();
          this.state.labels = oldLabels;
          return this.finishNode(node, "DoExpression");
        }

      case types.regexp:
        {
          const value = this.state.value;
          node = this.parseLiteral(value.value, "RegExpLiteral");
          node.pattern = value.pattern;
          node.flags = value.flags;
          return node;
        }

      case types.num:
        return this.parseLiteral(this.state.value, "NumericLiteral");

      case types.bigint:
        return this.parseLiteral(this.state.value, "BigIntLiteral");

      case types.string:
        return this.parseLiteral(this.state.value, "StringLiteral");

      case types._null:
        node = this.startNode();
        this.next();
        return this.finishNode(node, "NullLiteral");

      case types._true:
      case types._false:
        return this.parseBooleanLiteral();

      case types.parenL:
        return this.parseParenAndDistinguishExpression(canBeArrow);

      case types.bracketL:
        {
          const oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
          this.state.inFSharpPipelineDirectBody = false;
          node = this.startNode();
          this.next();
          node.elements = this.parseExprList(types.bracketR, true, refExpressionErrors, node);

          if (!this.state.maybeInArrowParameters) {
            this.toReferencedList(node.elements);
          }

          this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
          return this.finishNode(node, "ArrayExpression");
        }

      case types.braceL:
        {
          const oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
          this.state.inFSharpPipelineDirectBody = false;
          const ret = this.parseObj(false, refExpressionErrors);
          this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
          return ret;
        }

      case types._function:
        return this.parseFunctionExpression();

      case types.at:
        this.parseDecorators();

      case types._class:
        node = this.startNode();
        this.takeDecorators(node);
        return this.parseClass(node, false);

      case types._new:
        return this.parseNew();

      case types.backQuote:
        return this.parseTemplate(false);

      case types.doubleColon:
        {
          node = this.startNode();
          this.next();
          node.object = null;
          const callee = node.callee = this.parseNoCallExpr();

          if (callee.type === "MemberExpression") {
            return this.finishNode(node, "BindExpression");
          } else {
            throw this.raise(callee.start, "Binding should be performed on object property.");
          }
        }

      case types.hash:
        {
          if (this.state.inPipeline) {
            node = this.startNode();

            if (this.getPluginOption("pipelineOperator", "proposal") !== "smart") {
              this.raise(node.start, "Primary Topic Reference found but pipelineOperator not passed 'smart' for 'proposal' option.");
            }

            this.next();

            if (!this.primaryTopicReferenceIsAllowedInCurrentTopicContext()) {
              this.raise(node.start, `Topic reference was used in a lexical context without topic binding`);
            }

            this.registerTopicReference();
            return this.finishNode(node, "PipelinePrimaryTopicReference");
          }
        }

      default:
        throw this.unexpected();
    }
  }

  parseBooleanLiteral() {
    const node = this.startNode();
    node.value = this.match(types._true);
    this.next();
    return this.finishNode(node, "BooleanLiteral");
  }

  parseMaybePrivateName(isPrivateNameAllowed) {
    const isPrivate = this.match(types.hash);

    if (isPrivate) {
      this.expectOnePlugin(["classPrivateProperties", "classPrivateMethods"]);

      if (!isPrivateNameAllowed) {
        this.raise(this.state.pos, "Private names can only be used as the name of a class element (i.e. class C { #p = 42; #m() {} } )\n or a property of member expression (i.e. this.#p).");
      }

      const node = this.startNode();
      this.next();
      this.assertNoSpace("Unexpected space between # and identifier");
      node.id = this.parseIdentifier(true);
      return this.finishNode(node, "PrivateName");
    } else {
      return this.parseIdentifier(true);
    }
  }

  parseFunctionExpression() {
    const node = this.startNode();
    let meta = this.startNode();
    this.next();
    meta = this.createIdentifier(meta, "function");

    if (this.scope.inGenerator && this.eat(types.dot)) {
      return this.parseMetaProperty(node, meta, "sent");
    }

    return this.parseFunction(node);
  }

  parseMetaProperty(node, meta, propertyName) {
    node.meta = meta;

    if (meta.name === "function" && propertyName === "sent") {
      if (this.isContextual(propertyName)) {
        this.expectPlugin("functionSent");
      } else if (!this.hasPlugin("functionSent")) {
        this.unexpected();
      }
    }

    const containsEsc = this.state.containsEsc;
    node.property = this.parseIdentifier(true);

    if (node.property.name !== propertyName || containsEsc) {
      this.raise(node.property.start, `The only valid meta property for ${meta.name} is ${meta.name}.${propertyName}`);
    }

    return this.finishNode(node, "MetaProperty");
  }

  parseImportMetaProperty(node) {
    const id = this.createIdentifier(this.startNodeAtNode(node), "import");
    this.expect(types.dot);

    if (this.isContextual("meta")) {
      this.expectPlugin("importMeta");

      if (!this.inModule) {
        this.raise(id.start, `import.meta may appear only with 'sourceType: "module"'`, {
          code: "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"
        });
      }

      this.sawUnambiguousESM = true;
    } else if (!this.hasPlugin("importMeta")) {
      this.raise(id.start, `Dynamic imports require a parameter: import('a.js')`);
    }

    return this.parseMetaProperty(node, id, "meta");
  }

  parseLiteral(value, type, startPos, startLoc) {
    startPos = startPos || this.state.start;
    startLoc = startLoc || this.state.startLoc;
    const node = this.startNodeAt(startPos, startLoc);
    this.addExtra(node, "rawValue", value);
    this.addExtra(node, "raw", this.input.slice(startPos, this.state.end));
    node.value = value;
    this.next();
    return this.finishNode(node, type);
  }

  parseParenAndDistinguishExpression(canBeArrow) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    let val;
    this.expect(types.parenL);
    const oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
    const oldYieldPos = this.state.yieldPos;
    const oldAwaitPos = this.state.awaitPos;
    const oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
    this.state.maybeInArrowParameters = true;
    this.state.yieldPos = -1;
    this.state.awaitPos = -1;
    this.state.inFSharpPipelineDirectBody = false;
    const innerStartPos = this.state.start;
    const innerStartLoc = this.state.startLoc;
    const exprList = [];
    const refExpressionErrors = new ExpressionErrors();
    const refNeedsArrowPos = {
      start: 0
    };
    let first = true;
    let spreadStart;
    let optionalCommaStart;

    while (!this.match(types.parenR)) {
      if (first) {
        first = false;
      } else {
        this.expect(types.comma, refNeedsArrowPos.start || null);

        if (this.match(types.parenR)) {
          optionalCommaStart = this.state.start;
          break;
        }
      }

      if (this.match(types.ellipsis)) {
        const spreadNodeStartPos = this.state.start;
        const spreadNodeStartLoc = this.state.startLoc;
        spreadStart = this.state.start;
        exprList.push(this.parseParenItem(this.parseRestBinding(), spreadNodeStartPos, spreadNodeStartLoc));
        this.checkCommaAfterRest(41);
        break;
      } else {
        exprList.push(this.parseMaybeAssign(false, refExpressionErrors, this.parseParenItem, refNeedsArrowPos));
      }
    }

    const innerEndPos = this.state.start;
    const innerEndLoc = this.state.startLoc;
    this.expect(types.parenR);
    this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
    this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
    let arrowNode = this.startNodeAt(startPos, startLoc);

    if (canBeArrow && this.shouldParseArrow() && (arrowNode = this.parseArrow(arrowNode))) {
      this.checkYieldAwaitInDefaultParams();
      this.state.yieldPos = oldYieldPos;
      this.state.awaitPos = oldAwaitPos;

      for (let _i = 0; _i < exprList.length; _i++) {
        const param = exprList[_i];

        if (param.extra && param.extra.parenthesized) {
          this.unexpected(param.extra.parenStart);
        }
      }

      this.parseArrowExpression(arrowNode, exprList, false);
      return arrowNode;
    }

    if (oldYieldPos !== -1) this.state.yieldPos = oldYieldPos;
    if (oldAwaitPos !== -1) this.state.awaitPos = oldAwaitPos;

    if (!exprList.length) {
      this.unexpected(this.state.lastTokStart);
    }

    if (optionalCommaStart) this.unexpected(optionalCommaStart);
    if (spreadStart) this.unexpected(spreadStart);
    this.checkExpressionErrors(refExpressionErrors, true);
    if (refNeedsArrowPos.start) this.unexpected(refNeedsArrowPos.start);
    this.toReferencedListDeep(exprList, true);

    if (exprList.length > 1) {
      val = this.startNodeAt(innerStartPos, innerStartLoc);
      val.expressions = exprList;
      this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
    } else {
      val = exprList[0];
    }

    if (!this.options.createParenthesizedExpressions) {
      this.addExtra(val, "parenthesized", true);
      this.addExtra(val, "parenStart", startPos);
      return val;
    }

    const parenExpression = this.startNodeAt(startPos, startLoc);
    parenExpression.expression = val;
    this.finishNode(parenExpression, "ParenthesizedExpression");
    return parenExpression;
  }

  shouldParseArrow() {
    return !this.canInsertSemicolon();
  }

  parseArrow(node) {
    if (this.eat(types.arrow)) {
      return node;
    }
  }

  parseParenItem(node, startPos, startLoc) {
    return node;
  }

  parseNew() {
    const node = this.startNode();
    let meta = this.startNode();
    this.next();
    meta = this.createIdentifier(meta, "new");

    if (this.eat(types.dot)) {
      const metaProp = this.parseMetaProperty(node, meta, "target");

      if (!this.scope.inNonArrowFunction && !this.scope.inClass) {
        let error = "new.target can only be used in functions";

        if (this.hasPlugin("classProperties")) {
          error += " or class properties";
        }

        this.raise(metaProp.start, error);
      }

      return metaProp;
    }

    node.callee = this.parseNoCallExpr();

    if (node.callee.type === "Import") {
      this.raise(node.callee.start, "Cannot use new with import(...)");
    } else if (node.callee.type === "OptionalMemberExpression" || node.callee.type === "OptionalCallExpression") {
      this.raise(this.state.lastTokEnd, "constructors in/after an Optional Chain are not allowed");
    } else if (this.eat(types.questionDot)) {
      this.raise(this.state.start, "constructors in/after an Optional Chain are not allowed");
    }

    this.parseNewArguments(node);
    return this.finishNode(node, "NewExpression");
  }

  parseNewArguments(node) {
    if (this.eat(types.parenL)) {
      const args = this.parseExprList(types.parenR);
      this.toReferencedList(args);
      node.arguments = args;
    } else {
      node.arguments = [];
    }
  }

  parseTemplateElement(isTagged) {
    const elem = this.startNode();

    if (this.state.value === null) {
      if (!isTagged) {
        this.raise(this.state.start + 1, "Invalid escape sequence in template");
      }
    }

    elem.value = {
      raw: this.input.slice(this.state.start, this.state.end).replace(/\r\n?/g, "\n"),
      cooked: this.state.value
    };
    this.next();
    elem.tail = this.match(types.backQuote);
    return this.finishNode(elem, "TemplateElement");
  }

  parseTemplate(isTagged) {
    const node = this.startNode();
    this.next();
    node.expressions = [];
    let curElt = this.parseTemplateElement(isTagged);
    node.quasis = [curElt];

    while (!curElt.tail) {
      this.expect(types.dollarBraceL);
      node.expressions.push(this.parseExpression());
      this.expect(types.braceR);
      node.quasis.push(curElt = this.parseTemplateElement(isTagged));
    }

    this.next();
    return this.finishNode(node, "TemplateLiteral");
  }

  parseObj(isPattern, refExpressionErrors) {
    const propHash = Object.create(null);
    let first = true;
    const node = this.startNode();
    node.properties = [];
    this.next();

    while (!this.eat(types.braceR)) {
      if (first) {
        first = false;
      } else {
        this.expect(types.comma);

        if (this.match(types.braceR)) {
          this.addExtra(node, "trailingComma", this.state.lastTokStart);
          this.next();
          break;
        }
      }

      const prop = this.parseObjectMember(isPattern, refExpressionErrors);

      if (!isPattern) {
        this.checkDuplicatedProto(prop, propHash, refExpressionErrors);
      }

      if (prop.shorthand) {
        this.addExtra(prop, "shorthand", true);
      }

      node.properties.push(prop);
    }

    return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression");
  }

  isAsyncProp(prop) {
    return !prop.computed && prop.key.type === "Identifier" && prop.key.name === "async" && (this.match(types.name) || this.match(types.num) || this.match(types.string) || this.match(types.bracketL) || this.state.type.keyword || this.match(types.star)) && !this.hasPrecedingLineBreak();
  }

  parseObjectMember(isPattern, refExpressionErrors) {
    let decorators = [];

    if (this.match(types.at)) {
      if (this.hasPlugin("decorators")) {
        this.raise(this.state.start, "Stage 2 decorators disallow object literal property decorators");
      }

      while (this.match(types.at)) {
        decorators.push(this.parseDecorator());
      }
    }

    const prop = this.startNode();
    let isGenerator = false;
    let isAsync = false;
    let startPos;
    let startLoc;

    if (this.match(types.ellipsis)) {
      if (decorators.length) this.unexpected();

      if (isPattern) {
        this.next();
        prop.argument = this.parseIdentifier();
        this.checkCommaAfterRest(125);
        return this.finishNode(prop, "RestElement");
      }

      return this.parseSpread();
    }

    if (decorators.length) {
      prop.decorators = decorators;
      decorators = [];
    }

    prop.method = false;

    if (isPattern || refExpressionErrors) {
      startPos = this.state.start;
      startLoc = this.state.startLoc;
    }

    if (!isPattern) {
      isGenerator = this.eat(types.star);
    }

    const containsEsc = this.state.containsEsc;
    this.parsePropertyName(prop, false);

    if (!isPattern && !containsEsc && !isGenerator && this.isAsyncProp(prop)) {
      isAsync = true;
      isGenerator = this.eat(types.star);
      this.parsePropertyName(prop, false);
    } else {
      isAsync = false;
    }

    this.parseObjPropValue(prop, startPos, startLoc, isGenerator, isAsync, isPattern, refExpressionErrors, containsEsc);
    return prop;
  }

  isGetterOrSetterMethod(prop, isPattern) {
    return !isPattern && !prop.computed && prop.key.type === "Identifier" && (prop.key.name === "get" || prop.key.name === "set") && (this.match(types.string) || this.match(types.num) || this.match(types.bracketL) || this.match(types.name) || !!this.state.type.keyword);
  }

  getGetterSetterExpectedParamCount(method) {
    return method.kind === "get" ? 0 : 1;
  }

  checkGetterSetterParams(method) {
    const paramCount = this.getGetterSetterExpectedParamCount(method);
    const start = method.start;

    if (method.params.length !== paramCount) {
      if (method.kind === "get") {
        this.raise(start, "getter must not have any formal parameters");
      } else {
        this.raise(start, "setter must have exactly one formal parameter");
      }
    }

    if (method.kind === "set" && method.params[method.params.length - 1].type === "RestElement") {
      this.raise(start, "setter function argument must not be a rest parameter");
    }
  }

  parseObjectMethod(prop, isGenerator, isAsync, isPattern, containsEsc) {
    if (isAsync || isGenerator || this.match(types.parenL)) {
      if (isPattern) this.unexpected();
      prop.kind = "method";
      prop.method = true;
      return this.parseMethod(prop, isGenerator, isAsync, false, false, "ObjectMethod");
    }

    if (!containsEsc && this.isGetterOrSetterMethod(prop, isPattern)) {
      if (isGenerator || isAsync) this.unexpected();
      prop.kind = prop.key.name;
      this.parsePropertyName(prop, false);
      this.parseMethod(prop, false, false, false, false, "ObjectMethod");
      this.checkGetterSetterParams(prop);
      return prop;
    }
  }

  parseObjectProperty(prop, startPos, startLoc, isPattern, refExpressionErrors) {
    prop.shorthand = false;

    if (this.eat(types.colon)) {
      prop.value = isPattern ? this.parseMaybeDefault(this.state.start, this.state.startLoc) : this.parseMaybeAssign(false, refExpressionErrors);
      return this.finishNode(prop, "ObjectProperty");
    }

    if (!prop.computed && prop.key.type === "Identifier") {
      this.checkReservedWord(prop.key.name, prop.key.start, true, true);

      if (isPattern) {
        prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key.__clone());
      } else if (this.match(types.eq) && refExpressionErrors) {
        if (refExpressionErrors.shorthandAssign === -1) {
          refExpressionErrors.shorthandAssign = this.state.start;
        }

        prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key.__clone());
      } else {
        prop.value = prop.key.__clone();
      }

      prop.shorthand = true;
      return this.finishNode(prop, "ObjectProperty");
    }
  }

  parseObjPropValue(prop, startPos, startLoc, isGenerator, isAsync, isPattern, refExpressionErrors, containsEsc) {
    const node = this.parseObjectMethod(prop, isGenerator, isAsync, isPattern, containsEsc) || this.parseObjectProperty(prop, startPos, startLoc, isPattern, refExpressionErrors);
    if (!node) this.unexpected();
    return node;
  }

  parsePropertyName(prop, isPrivateNameAllowed) {
    if (this.eat(types.bracketL)) {
      prop.computed = true;
      prop.key = this.parseMaybeAssign();
      this.expect(types.bracketR);
    } else {
      const oldInPropertyName = this.state.inPropertyName;
      this.state.inPropertyName = true;
      prop.key = this.match(types.num) || this.match(types.string) || this.match(types.bigint) ? this.parseExprAtom() : this.parseMaybePrivateName(isPrivateNameAllowed);

      if (prop.key.type !== "PrivateName") {
        prop.computed = false;
      }

      this.state.inPropertyName = oldInPropertyName;
    }

    return prop.key;
  }

  initFunction(node, isAsync) {
    node.id = null;
    node.generator = false;
    node.async = !!isAsync;
  }

  parseMethod(node, isGenerator, isAsync, isConstructor, allowDirectSuper, type, inClassScope = false) {
    const oldYieldPos = this.state.yieldPos;
    const oldAwaitPos = this.state.awaitPos;
    this.state.yieldPos = -1;
    this.state.awaitPos = -1;
    this.initFunction(node, isAsync);
    node.generator = !!isGenerator;
    const allowModifiers = isConstructor;
    this.scope.enter(functionFlags(isAsync, node.generator) | SCOPE_SUPER | (inClassScope ? SCOPE_CLASS : 0) | (allowDirectSuper ? SCOPE_DIRECT_SUPER : 0));
    this.parseFunctionParams(node, allowModifiers);
    this.parseFunctionBodyAndFinish(node, type, true);
    this.scope.exit();
    this.state.yieldPos = oldYieldPos;
    this.state.awaitPos = oldAwaitPos;
    return node;
  }

  parseArrowExpression(node, params, isAsync, trailingCommaPos) {
    this.scope.enter(functionFlags(isAsync, false) | SCOPE_ARROW);
    this.initFunction(node, isAsync);
    const oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
    const oldYieldPos = this.state.yieldPos;
    const oldAwaitPos = this.state.awaitPos;

    if (params) {
      this.state.maybeInArrowParameters = true;
      this.setArrowFunctionParameters(node, params, trailingCommaPos);
    }

    this.state.maybeInArrowParameters = false;
    this.state.yieldPos = -1;
    this.state.awaitPos = -1;
    this.parseFunctionBody(node, true);
    this.scope.exit();
    this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
    this.state.yieldPos = oldYieldPos;
    this.state.awaitPos = oldAwaitPos;
    return this.finishNode(node, "ArrowFunctionExpression");
  }

  setArrowFunctionParameters(node, params, trailingCommaPos) {
    node.params = this.toAssignableList(params, trailingCommaPos);
  }

  parseFunctionBodyAndFinish(node, type, isMethod = false) {
    this.parseFunctionBody(node, false, isMethod);
    this.finishNode(node, type);
  }

  parseFunctionBody(node, allowExpression, isMethod = false) {
    const isExpression = allowExpression && !this.match(types.braceL);
    const oldStrict = this.state.strict;
    let useStrict = false;
    const oldInParameters = this.state.inParameters;
    this.state.inParameters = false;

    if (isExpression) {
      node.body = this.parseMaybeAssign();
      this.checkParams(node, false, allowExpression, false);
    } else {
      const nonSimple = !this.isSimpleParamList(node.params);

      if (!oldStrict || nonSimple) {
        useStrict = this.strictDirective(this.state.end);

        if (useStrict && nonSimple) {
          const errorPos = (node.kind === "method" || node.kind === "constructor") && !!node.key ? node.key.end : node.start;
          this.raise(errorPos, "Illegal 'use strict' directive in function with non-simple parameter list");
        }
      }

      const oldLabels = this.state.labels;
      this.state.labels = [];
      if (useStrict) this.state.strict = true;
      this.checkParams(node, !oldStrict && !useStrict && !allowExpression && !isMethod && !nonSimple, allowExpression, !oldStrict && useStrict);
      node.body = this.parseBlock(true, false);
      this.state.labels = oldLabels;
    }

    this.state.inParameters = oldInParameters;

    if (this.state.strict && node.id) {
      this.checkLVal(node.id, BIND_OUTSIDE, undefined, "function name", undefined, !oldStrict && useStrict);
    }

    this.state.strict = oldStrict;
  }

  isSimpleParamList(params) {
    for (let i = 0, len = params.length; i < len; i++) {
      if (params[i].type !== "Identifier") return false;
    }

    return true;
  }

  checkParams(node, allowDuplicates, isArrowFunction, strictModeChanged = true) {
    const nameHash = Object.create(null);

    for (let i = 0; i < node.params.length; i++) {
      this.checkLVal(node.params[i], BIND_VAR, allowDuplicates ? null : nameHash, "function parameter list", undefined, strictModeChanged);
    }
  }

  parseExprList(close, allowEmpty, refExpressionErrors, nodeForExtra) {
    const elts = [];
    let first = true;

    while (!this.eat(close)) {
      if (first) {
        first = false;
      } else {
        this.expect(types.comma);

        if (this.match(close)) {
          if (nodeForExtra) {
            this.addExtra(nodeForExtra, "trailingComma", this.state.lastTokStart);
          }

          this.next();
          break;
        }
      }

      elts.push(this.parseExprListItem(allowEmpty, refExpressionErrors));
    }

    return elts;
  }

  parseExprListItem(allowEmpty, refExpressionErrors, refNeedsArrowPos, allowPlaceholder) {
    let elt;

    if (allowEmpty && this.match(types.comma)) {
      elt = null;
    } else if (this.match(types.ellipsis)) {
      const spreadNodeStartPos = this.state.start;
      const spreadNodeStartLoc = this.state.startLoc;
      elt = this.parseParenItem(this.parseSpread(refExpressionErrors, refNeedsArrowPos), spreadNodeStartPos, spreadNodeStartLoc);
    } else if (this.match(types.question)) {
      this.expectPlugin("partialApplication");

      if (!allowPlaceholder) {
        this.raise(this.state.start, "Unexpected argument placeholder");
      }

      const node = this.startNode();
      this.next();
      elt = this.finishNode(node, "ArgumentPlaceholder");
    } else {
      elt = this.parseMaybeAssign(false, refExpressionErrors, this.parseParenItem, refNeedsArrowPos);
    }

    return elt;
  }

  parseIdentifier(liberal) {
    const node = this.startNode();
    const name = this.parseIdentifierName(node.start, liberal);
    return this.createIdentifier(node, name);
  }

  createIdentifier(node, name) {
    node.name = name;
    node.loc.identifierName = name;
    return this.finishNode(node, "Identifier");
  }

  parseIdentifierName(pos, liberal) {
    let name;

    if (this.match(types.name)) {
      name = this.state.value;
    } else if (this.state.type.keyword) {
      name = this.state.type.keyword;

      if ((name === "class" || name === "function") && (this.state.lastTokEnd !== this.state.lastTokStart + 1 || this.input.charCodeAt(this.state.lastTokStart) !== 46)) {
        this.state.context.pop();
      }
    } else {
      throw this.unexpected();
    }

    if (liberal) {
      this.state.type = types.name;
    } else {
      this.checkReservedWord(name, this.state.start, !!this.state.type.keyword, false);
    }

    this.next();
    return name;
  }

  checkReservedWord(word, startLoc, checkKeywords, isBinding) {
    if (this.scope.inGenerator && word === "yield") {
      this.raise(startLoc, "Can not use 'yield' as identifier inside a generator");
      return;
    }

    if (word === "await") {
      if (this.scope.inAsync) {
        this.raise(startLoc, "Can not use 'await' as identifier inside an async function");
        return;
      }

      if (this.state.awaitPos === -1 && (this.state.maybeInArrowParameters || this.isAwaitAllowed())) {
        this.state.awaitPos = this.state.start;
      }
    }

    if (this.scope.inClass && !this.scope.inNonArrowFunction && word === "arguments") {
      this.raise(startLoc, "'arguments' is not allowed in class field initializer");
      return;
    }

    if (checkKeywords && isKeyword(word)) {
      this.raise(startLoc, `Unexpected keyword '${word}'`);
      return;
    }

    const reservedTest = !this.state.strict ? isReservedWord : isBinding ? isStrictBindReservedWord : isStrictReservedWord;

    if (reservedTest(word, this.inModule)) {
      if (!this.scope.inAsync && word === "await") {
        this.raise(startLoc, "Can not use keyword 'await' outside an async function");
      } else {
        this.raise(startLoc, `Unexpected reserved word '${word}'`);
      }
    }
  }

  isAwaitAllowed() {
    if (this.scope.inFunction) return this.scope.inAsync;
    if (this.options.allowAwaitOutsideFunction) return true;

    if (this.hasPlugin("topLevelAwait")) {
      return this.inModule && this.scope.inAsync;
    }

    return false;
  }

  parseAwait() {
    const node = this.startNode();
    this.next();

    if (this.state.inParameters) {
      this.raise(node.start, "await is not allowed in async function parameters");
    } else if (this.state.awaitPos === -1) {
      this.state.awaitPos = node.start;
    }

    if (this.eat(types.star)) {
      this.raise(node.start, "await* has been removed from the async functions proposal. Use Promise.all() instead.");
    }

    if (!this.scope.inFunction && !this.options.allowAwaitOutsideFunction) {
      if (this.hasPrecedingLineBreak() || this.match(types.plusMin) || this.match(types.parenL) || this.match(types.bracketL) || this.match(types.backQuote) || this.match(types.regexp) || this.match(types.slash) || this.hasPlugin("v8intrinsic") && this.match(types.modulo)) {
        this.ambiguousScriptDifferentAst = true;
      } else {
        this.sawUnambiguousESM = true;
      }
    }

    if (!this.state.soloAwait) {
      node.argument = this.parseMaybeUnary();
    }

    return this.finishNode(node, "AwaitExpression");
  }

  parseYield(noIn) {
    const node = this.startNode();

    if (this.state.inParameters) {
      this.raise(node.start, "yield is not allowed in generator parameters");
    } else if (this.state.yieldPos === -1) {
      this.state.yieldPos = node.start;
    }

    this.next();

    if (this.match(types.semi) || !this.match(types.star) && !this.state.type.startsExpr || this.hasPrecedingLineBreak()) {
      node.delegate = false;
      node.argument = null;
    } else {
      node.delegate = this.eat(types.star);
      node.argument = this.parseMaybeAssign(noIn);
    }

    return this.finishNode(node, "YieldExpression");
  }

  checkPipelineAtInfixOperator(left, leftStartPos) {
    if (this.getPluginOption("pipelineOperator", "proposal") === "smart") {
      if (left.type === "SequenceExpression") {
        this.raise(leftStartPos, `Pipeline head should not be a comma-separated sequence expression`);
      }
    }
  }

  parseSmartPipelineBody(childExpression, startPos, startLoc) {
    const pipelineStyle = this.checkSmartPipelineBodyStyle(childExpression);
    this.checkSmartPipelineBodyEarlyErrors(childExpression, pipelineStyle, startPos);
    return this.parseSmartPipelineBodyInStyle(childExpression, pipelineStyle, startPos, startLoc);
  }

  checkSmartPipelineBodyEarlyErrors(childExpression, pipelineStyle, startPos) {
    if (this.match(types.arrow)) {
      throw this.raise(this.state.start, `Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized`);
    } else if (pipelineStyle === "PipelineTopicExpression" && childExpression.type === "SequenceExpression") {
      this.raise(startPos, `Pipeline body may not be a comma-separated sequence expression`);
    }
  }

  parseSmartPipelineBodyInStyle(childExpression, pipelineStyle, startPos, startLoc) {
    const bodyNode = this.startNodeAt(startPos, startLoc);

    switch (pipelineStyle) {
      case "PipelineBareFunction":
        bodyNode.callee = childExpression;
        break;

      case "PipelineBareConstructor":
        bodyNode.callee = childExpression.callee;
        break;

      case "PipelineBareAwaitedFunction":
        bodyNode.callee = childExpression.argument;
        break;

      case "PipelineTopicExpression":
        if (!this.topicReferenceWasUsedInCurrentTopicContext()) {
          this.raise(startPos, `Pipeline is in topic style but does not use topic reference`);
        }

        bodyNode.expression = childExpression;
        break;

      default:
        throw new Error(`Internal @babel/parser error: Unknown pipeline style (${pipelineStyle})`);
    }

    return this.finishNode(bodyNode, pipelineStyle);
  }

  checkSmartPipelineBodyStyle(expression) {
    switch (expression.type) {
      default:
        return this.isSimpleReference(expression) ? "PipelineBareFunction" : "PipelineTopicExpression";
    }
  }

  isSimpleReference(expression) {
    switch (expression.type) {
      case "MemberExpression":
        return !expression.computed && this.isSimpleReference(expression.object);

      case "Identifier":
        return true;

      default:
        return false;
    }
  }

  withTopicPermittingContext(callback) {
    const outerContextTopicState = this.state.topicContext;
    this.state.topicContext = {
      maxNumOfResolvableTopics: 1,
      maxTopicIndex: null
    };

    try {
      return callback();
    } finally {
      this.state.topicContext = outerContextTopicState;
    }
  }

  withTopicForbiddingContext(callback) {
    const outerContextTopicState = this.state.topicContext;
    this.state.topicContext = {
      maxNumOfResolvableTopics: 0,
      maxTopicIndex: null
    };

    try {
      return callback();
    } finally {
      this.state.topicContext = outerContextTopicState;
    }
  }

  withSoloAwaitPermittingContext(callback) {
    const outerContextSoloAwaitState = this.state.soloAwait;
    this.state.soloAwait = true;

    try {
      return callback();
    } finally {
      this.state.soloAwait = outerContextSoloAwaitState;
    }
  }

  registerTopicReference() {
    this.state.topicContext.maxTopicIndex = 0;
  }

  primaryTopicReferenceIsAllowedInCurrentTopicContext() {
    return this.state.topicContext.maxNumOfResolvableTopics >= 1;
  }

  topicReferenceWasUsedInCurrentTopicContext() {
    return this.state.topicContext.maxTopicIndex != null && this.state.topicContext.maxTopicIndex >= 0;
  }

  parseFSharpPipelineBody(prec, noIn) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    this.state.potentialArrowAt = this.state.start;
    const oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
    this.state.inFSharpPipelineDirectBody = true;
    const ret = this.parseExprOp(this.parseMaybeUnary(), startPos, startLoc, prec, noIn);
    this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
    return ret;
  }

}

const loopLabel = {
  kind: "loop"
},
      switchLabel = {
  kind: "switch"
};
const FUNC_NO_FLAGS = 0b000,
      FUNC_STATEMENT = 0b001,
      FUNC_HANGING_STATEMENT = 0b010,
      FUNC_NULLABLE_ID = 0b100;
class StatementParser extends ExpressionParser {
  parseTopLevel(file, program) {
    program.sourceType = this.options.sourceType;
    program.interpreter = this.parseInterpreterDirective();
    this.parseBlockBody(program, true, true, types.eof);

    if (this.inModule && !this.options.allowUndeclaredExports && this.scope.undefinedExports.size > 0) {
      for (let _i = 0, _Array$from = Array.from(this.scope.undefinedExports); _i < _Array$from.length; _i++) {
        const [name] = _Array$from[_i];
        const pos = this.scope.undefinedExports.get(name);
        this.raise(pos, `Export '${name}' is not defined`);
      }
    }

    file.program = this.finishNode(program, "Program");
    file.comments = this.state.comments;
    if (this.options.tokens) file.tokens = this.tokens;
    return this.finishNode(file, "File");
  }

  stmtToDirective(stmt) {
    const expr = stmt.expression;
    const directiveLiteral = this.startNodeAt(expr.start, expr.loc.start);
    const directive = this.startNodeAt(stmt.start, stmt.loc.start);
    const raw = this.input.slice(expr.start, expr.end);
    const val = directiveLiteral.value = raw.slice(1, -1);
    this.addExtra(directiveLiteral, "raw", raw);
    this.addExtra(directiveLiteral, "rawValue", val);
    directive.value = this.finishNodeAt(directiveLiteral, "DirectiveLiteral", expr.end, expr.loc.end);
    return this.finishNodeAt(directive, "Directive", stmt.end, stmt.loc.end);
  }

  parseInterpreterDirective() {
    if (!this.match(types.interpreterDirective)) {
      return null;
    }

    const node = this.startNode();
    node.value = this.state.value;
    this.next();
    return this.finishNode(node, "InterpreterDirective");
  }

  isLet(context) {
    if (!this.isContextual("let")) {
      return false;
    }

    const next = this.nextTokenStart();
    const nextCh = this.input.charCodeAt(next);
    if (nextCh === 91) return true;
    if (context) return false;
    if (nextCh === 123) return true;

    if (isIdentifierStart(nextCh)) {
      let pos = next + 1;

      while (isIdentifierChar(this.input.charCodeAt(pos))) {
        ++pos;
      }

      const ident = this.input.slice(next, pos);
      if (!keywordRelationalOperator.test(ident)) return true;
    }

    return false;
  }

  parseStatement(context, topLevel) {
    if (this.match(types.at)) {
      this.parseDecorators(true);
    }

    return this.parseStatementContent(context, topLevel);
  }

  parseStatementContent(context, topLevel) {
    let starttype = this.state.type;
    const node = this.startNode();
    let kind;

    if (this.isLet(context)) {
      starttype = types._var;
      kind = "let";
    }

    switch (starttype) {
      case types._break:
      case types._continue:
        return this.parseBreakContinueStatement(node, starttype.keyword);

      case types._debugger:
        return this.parseDebuggerStatement(node);

      case types._do:
        return this.parseDoStatement(node);

      case types._for:
        return this.parseForStatement(node);

      case types._function:
        if (this.lookaheadCharCode() === 46) break;

        if (context) {
          if (this.state.strict) {
            this.raise(this.state.start, "In strict mode code, functions can only be declared at top level or inside a block");
          } else if (context !== "if" && context !== "label") {
            this.raise(this.state.start, "In non-strict mode code, functions can only be declared at top level, " + "inside a block, or as the body of an if statement");
          }
        }

        return this.parseFunctionStatement(node, false, !context);

      case types._class:
        if (context) this.unexpected();
        return this.parseClass(node, true);

      case types._if:
        return this.parseIfStatement(node);

      case types._return:
        return this.parseReturnStatement(node);

      case types._switch:
        return this.parseSwitchStatement(node);

      case types._throw:
        return this.parseThrowStatement(node);

      case types._try:
        return this.parseTryStatement(node);

      case types._const:
      case types._var:
        kind = kind || this.state.value;

        if (context && kind !== "var") {
          this.raise(this.state.start, "Lexical declaration cannot appear in a single-statement context");
        }

        return this.parseVarStatement(node, kind);

      case types._while:
        return this.parseWhileStatement(node);

      case types._with:
        return this.parseWithStatement(node);

      case types.braceL:
        return this.parseBlock();

      case types.semi:
        return this.parseEmptyStatement(node);

      case types._export:
      case types._import:
        {
          const nextTokenCharCode = this.lookaheadCharCode();

          if (nextTokenCharCode === 40 || nextTokenCharCode === 46) {
            break;
          }

          if (!this.options.allowImportExportEverywhere && !topLevel) {
            this.raise(this.state.start, "'import' and 'export' may only appear at the top level");
          }

          this.next();
          let result;

          if (starttype === types._import) {
            result = this.parseImport(node);

            if (result.type === "ImportDeclaration" && (!result.importKind || result.importKind === "value")) {
              this.sawUnambiguousESM = true;
            }
          } else {
            result = this.parseExport(node);

            if (result.type === "ExportNamedDeclaration" && (!result.exportKind || result.exportKind === "value") || result.type === "ExportAllDeclaration" && (!result.exportKind || result.exportKind === "value") || result.type === "ExportDefaultDeclaration") {
              this.sawUnambiguousESM = true;
            }
          }

          this.assertModuleNodeAllowed(node);
          return result;
        }

      default:
        {
          if (this.isAsyncFunction()) {
            if (context) {
              this.raise(this.state.start, "Async functions can only be declared at the top level or inside a block");
            }

            this.next();
            return this.parseFunctionStatement(node, true, !context);
          }
        }
    }

    const maybeName = this.state.value;
    const expr = this.parseExpression();

    if (starttype === types.name && expr.type === "Identifier" && this.eat(types.colon)) {
      return this.parseLabeledStatement(node, maybeName, expr, context);
    } else {
      return this.parseExpressionStatement(node, expr);
    }
  }

  assertModuleNodeAllowed(node) {
    if (!this.options.allowImportExportEverywhere && !this.inModule) {
      this.raise(node.start, `'import' and 'export' may appear only with 'sourceType: "module"'`, {
        code: "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"
      });
    }
  }

  takeDecorators(node) {
    const decorators = this.state.decoratorStack[this.state.decoratorStack.length - 1];

    if (decorators.length) {
      node.decorators = decorators;
      this.resetStartLocationFromNode(node, decorators[0]);
      this.state.decoratorStack[this.state.decoratorStack.length - 1] = [];
    }
  }

  canHaveLeadingDecorator() {
    return this.match(types._class);
  }

  parseDecorators(allowExport) {
    const currentContextDecorators = this.state.decoratorStack[this.state.decoratorStack.length - 1];

    while (this.match(types.at)) {
      const decorator = this.parseDecorator();
      currentContextDecorators.push(decorator);
    }

    if (this.match(types._export)) {
      if (!allowExport) {
        this.unexpected();
      }

      if (this.hasPlugin("decorators") && !this.getPluginOption("decorators", "decoratorsBeforeExport")) {
        this.raise(this.state.start, "Using the export keyword between a decorator and a class is not allowed. " + "Please use `export @dec class` instead.");
      }
    } else if (!this.canHaveLeadingDecorator()) {
      throw this.raise(this.state.start, "Leading decorators must be attached to a class declaration");
    }
  }

  parseDecorator() {
    this.expectOnePlugin(["decorators-legacy", "decorators"]);
    const node = this.startNode();
    this.next();

    if (this.hasPlugin("decorators")) {
      this.state.decoratorStack.push([]);
      const startPos = this.state.start;
      const startLoc = this.state.startLoc;
      let expr;

      if (this.eat(types.parenL)) {
        expr = this.parseExpression();
        this.expect(types.parenR);
      } else {
        expr = this.parseIdentifier(false);

        while (this.eat(types.dot)) {
          const node = this.startNodeAt(startPos, startLoc);
          node.object = expr;
          node.property = this.parseIdentifier(true);
          node.computed = false;
          expr = this.finishNode(node, "MemberExpression");
        }
      }

      node.expression = this.parseMaybeDecoratorArguments(expr);
      this.state.decoratorStack.pop();
    } else {
      node.expression = this.parseExprSubscripts();
    }

    return this.finishNode(node, "Decorator");
  }

  parseMaybeDecoratorArguments(expr) {
    if (this.eat(types.parenL)) {
      const node = this.startNodeAtNode(expr);
      node.callee = expr;
      node.arguments = this.parseCallExpressionArguments(types.parenR, false);
      this.toReferencedList(node.arguments);
      return this.finishNode(node, "CallExpression");
    }

    return expr;
  }

  parseBreakContinueStatement(node, keyword) {
    const isBreak = keyword === "break";
    this.next();

    if (this.isLineTerminator()) {
      node.label = null;
    } else {
      node.label = this.parseIdentifier();
      this.semicolon();
    }

    this.verifyBreakContinue(node, keyword);
    return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");
  }

  verifyBreakContinue(node, keyword) {
    const isBreak = keyword === "break";
    let i;

    for (i = 0; i < this.state.labels.length; ++i) {
      const lab = this.state.labels[i];

      if (node.label == null || lab.name === node.label.name) {
        if (lab.kind != null && (isBreak || lab.kind === "loop")) break;
        if (node.label && isBreak) break;
      }
    }

    if (i === this.state.labels.length) {
      this.raise(node.start, "Unsyntactic " + keyword);
    }
  }

  parseDebuggerStatement(node) {
    this.next();
    this.semicolon();
    return this.finishNode(node, "DebuggerStatement");
  }

  parseHeaderExpression() {
    this.expect(types.parenL);
    const val = this.parseExpression();
    this.expect(types.parenR);
    return val;
  }

  parseDoStatement(node) {
    this.next();
    this.state.labels.push(loopLabel);
    node.body = this.withTopicForbiddingContext(() => this.parseStatement("do"));
    this.state.labels.pop();
    this.expect(types._while);
    node.test = this.parseHeaderExpression();
    this.eat(types.semi);
    return this.finishNode(node, "DoWhileStatement");
  }

  parseForStatement(node) {
    this.next();
    this.state.labels.push(loopLabel);
    let awaitAt = -1;

    if (this.isAwaitAllowed() && this.eatContextual("await")) {
      awaitAt = this.state.lastTokStart;
    }

    this.scope.enter(SCOPE_OTHER);
    this.expect(types.parenL);

    if (this.match(types.semi)) {
      if (awaitAt > -1) {
        this.unexpected(awaitAt);
      }

      return this.parseFor(node, null);
    }

    const isLet = this.isLet();

    if (this.match(types._var) || this.match(types._const) || isLet) {
      const init = this.startNode();
      const kind = isLet ? "let" : this.state.value;
      this.next();
      this.parseVar(init, true, kind);
      this.finishNode(init, "VariableDeclaration");

      if ((this.match(types._in) || this.isContextual("of")) && init.declarations.length === 1) {
        return this.parseForIn(node, init, awaitAt);
      }

      if (awaitAt > -1) {
        this.unexpected(awaitAt);
      }

      return this.parseFor(node, init);
    }

    const refExpressionErrors = new ExpressionErrors();
    const init = this.parseExpression(true, refExpressionErrors);

    if (this.match(types._in) || this.isContextual("of")) {
      this.toAssignable(init);
      const description = this.isContextual("of") ? "for-of statement" : "for-in statement";
      this.checkLVal(init, undefined, undefined, description);
      return this.parseForIn(node, init, awaitAt);
    } else {
      this.checkExpressionErrors(refExpressionErrors, true);
    }

    if (awaitAt > -1) {
      this.unexpected(awaitAt);
    }

    return this.parseFor(node, init);
  }

  parseFunctionStatement(node, isAsync, declarationPosition) {
    this.next();
    return this.parseFunction(node, FUNC_STATEMENT | (declarationPosition ? 0 : FUNC_HANGING_STATEMENT), isAsync);
  }

  parseIfStatement(node) {
    this.next();
    node.test = this.parseHeaderExpression();
    node.consequent = this.parseStatement("if");
    node.alternate = this.eat(types._else) ? this.parseStatement("if") : null;
    return this.finishNode(node, "IfStatement");
  }

  parseReturnStatement(node) {
    if (!this.scope.inFunction && !this.options.allowReturnOutsideFunction) {
      this.raise(this.state.start, "'return' outside of function");
    }

    this.next();

    if (this.isLineTerminator()) {
      node.argument = null;
    } else {
      node.argument = this.parseExpression();
      this.semicolon();
    }

    return this.finishNode(node, "ReturnStatement");
  }

  parseSwitchStatement(node) {
    this.next();
    node.discriminant = this.parseHeaderExpression();
    const cases = node.cases = [];
    this.expect(types.braceL);
    this.state.labels.push(switchLabel);
    this.scope.enter(SCOPE_OTHER);
    let cur;

    for (let sawDefault; !this.match(types.braceR);) {
      if (this.match(types._case) || this.match(types._default)) {
        const isCase = this.match(types._case);
        if (cur) this.finishNode(cur, "SwitchCase");
        cases.push(cur = this.startNode());
        cur.consequent = [];
        this.next();

        if (isCase) {
          cur.test = this.parseExpression();
        } else {
          if (sawDefault) {
            this.raise(this.state.lastTokStart, "Multiple default clauses");
          }

          sawDefault = true;
          cur.test = null;
        }

        this.expect(types.colon);
      } else {
        if (cur) {
          cur.consequent.push(this.parseStatement(null));
        } else {
          this.unexpected();
        }
      }
    }

    this.scope.exit();
    if (cur) this.finishNode(cur, "SwitchCase");
    this.next();
    this.state.labels.pop();
    return this.finishNode(node, "SwitchStatement");
  }

  parseThrowStatement(node) {
    this.next();

    if (lineBreak.test(this.input.slice(this.state.lastTokEnd, this.state.start))) {
      this.raise(this.state.lastTokEnd, "Illegal newline after throw");
    }

    node.argument = this.parseExpression();
    this.semicolon();
    return this.finishNode(node, "ThrowStatement");
  }

  parseTryStatement(node) {
    this.next();
    node.block = this.parseBlock();
    node.handler = null;

    if (this.match(types._catch)) {
      const clause = this.startNode();
      this.next();

      if (this.match(types.parenL)) {
        this.expect(types.parenL);
        clause.param = this.parseBindingAtom();
        const simple = clause.param.type === "Identifier";
        this.scope.enter(simple ? SCOPE_SIMPLE_CATCH : 0);
        this.checkLVal(clause.param, BIND_LEXICAL, null, "catch clause");
        this.expect(types.parenR);
      } else {
        clause.param = null;
        this.scope.enter(SCOPE_OTHER);
      }

      clause.body = this.withTopicForbiddingContext(() => this.parseBlock(false, false));
      this.scope.exit();
      node.handler = this.finishNode(clause, "CatchClause");
    }

    node.finalizer = this.eat(types._finally) ? this.parseBlock() : null;

    if (!node.handler && !node.finalizer) {
      this.raise(node.start, "Missing catch or finally clause");
    }

    return this.finishNode(node, "TryStatement");
  }

  parseVarStatement(node, kind) {
    this.next();
    this.parseVar(node, false, kind);
    this.semicolon();
    return this.finishNode(node, "VariableDeclaration");
  }

  parseWhileStatement(node) {
    this.next();
    node.test = this.parseHeaderExpression();
    this.state.labels.push(loopLabel);
    node.body = this.withTopicForbiddingContext(() => this.parseStatement("while"));
    this.state.labels.pop();
    return this.finishNode(node, "WhileStatement");
  }

  parseWithStatement(node) {
    if (this.state.strict) {
      this.raise(this.state.start, "'with' in strict mode");
    }

    this.next();
    node.object = this.parseHeaderExpression();
    node.body = this.withTopicForbiddingContext(() => this.parseStatement("with"));
    return this.finishNode(node, "WithStatement");
  }

  parseEmptyStatement(node) {
    this.next();
    return this.finishNode(node, "EmptyStatement");
  }

  parseLabeledStatement(node, maybeName, expr, context) {
    for (let _i2 = 0, _this$state$labels = this.state.labels; _i2 < _this$state$labels.length; _i2++) {
      const label = _this$state$labels[_i2];

      if (label.name === maybeName) {
        this.raise(expr.start, `Label '${maybeName}' is already declared`);
      }
    }

    const kind = this.state.type.isLoop ? "loop" : this.match(types._switch) ? "switch" : null;

    for (let i = this.state.labels.length - 1; i >= 0; i--) {
      const label = this.state.labels[i];

      if (label.statementStart === node.start) {
        label.statementStart = this.state.start;
        label.kind = kind;
      } else {
        break;
      }
    }

    this.state.labels.push({
      name: maybeName,
      kind: kind,
      statementStart: this.state.start
    });
    node.body = this.parseStatement(context ? context.indexOf("label") === -1 ? context + "label" : context : "label");
    this.state.labels.pop();
    node.label = expr;
    return this.finishNode(node, "LabeledStatement");
  }

  parseExpressionStatement(node, expr) {
    node.expression = expr;
    this.semicolon();
    return this.finishNode(node, "ExpressionStatement");
  }

  parseBlock(allowDirectives = false, createNewLexicalScope = true) {
    const node = this.startNode();
    this.expect(types.braceL);

    if (createNewLexicalScope) {
      this.scope.enter(SCOPE_OTHER);
    }

    this.parseBlockBody(node, allowDirectives, false, types.braceR);

    if (createNewLexicalScope) {
      this.scope.exit();
    }

    return this.finishNode(node, "BlockStatement");
  }

  isValidDirective(stmt) {
    return stmt.type === "ExpressionStatement" && stmt.expression.type === "StringLiteral" && !stmt.expression.extra.parenthesized;
  }

  parseBlockBody(node, allowDirectives, topLevel, end) {
    const body = node.body = [];
    const directives = node.directives = [];
    this.parseBlockOrModuleBlockBody(body, allowDirectives ? directives : undefined, topLevel, end);
  }

  parseBlockOrModuleBlockBody(body, directives, topLevel, end) {
    let parsedNonDirective = false;
    let oldStrict;
    let octalPosition;

    while (!this.eat(end)) {
      if (!parsedNonDirective && this.state.containsOctal && !octalPosition) {
        octalPosition = this.state.octalPosition;
      }

      const stmt = this.parseStatement(null, topLevel);

      if (directives && !parsedNonDirective && this.isValidDirective(stmt)) {
        const directive = this.stmtToDirective(stmt);
        directives.push(directive);

        if (oldStrict === undefined && directive.value.value === "use strict") {
          oldStrict = this.state.strict;
          this.setStrict(true);

          if (octalPosition) {
            this.raise(octalPosition, "Octal literal in strict mode");
          }
        }

        continue;
      }

      parsedNonDirective = true;
      body.push(stmt);
    }

    if (oldStrict === false) {
      this.setStrict(false);
    }
  }

  parseFor(node, init) {
    node.init = init;
    this.expect(types.semi);
    node.test = this.match(types.semi) ? null : this.parseExpression();
    this.expect(types.semi);
    node.update = this.match(types.parenR) ? null : this.parseExpression();
    this.expect(types.parenR);
    node.body = this.withTopicForbiddingContext(() => this.parseStatement("for"));
    this.scope.exit();
    this.state.labels.pop();
    return this.finishNode(node, "ForStatement");
  }

  parseForIn(node, init, awaitAt) {
    const isForIn = this.match(types._in);
    this.next();

    if (isForIn) {
      if (awaitAt > -1) this.unexpected(awaitAt);
    } else {
      node.await = awaitAt > -1;
    }

    if (init.type === "VariableDeclaration" && init.declarations[0].init != null && (!isForIn || this.state.strict || init.kind !== "var" || init.declarations[0].id.type !== "Identifier")) {
      this.raise(init.start, `${isForIn ? "for-in" : "for-of"} loop variable declaration may not have an initializer`);
    } else if (init.type === "AssignmentPattern") {
      this.raise(init.start, "Invalid left-hand side in for-loop");
    }

    node.left = init;
    node.right = isForIn ? this.parseExpression() : this.parseMaybeAssign();
    this.expect(types.parenR);
    node.body = this.withTopicForbiddingContext(() => this.parseStatement("for"));
    this.scope.exit();
    this.state.labels.pop();
    return this.finishNode(node, isForIn ? "ForInStatement" : "ForOfStatement");
  }

  parseVar(node, isFor, kind) {
    const declarations = node.declarations = [];
    const isTypescript = this.hasPlugin("typescript");
    node.kind = kind;

    for (;;) {
      const decl = this.startNode();
      this.parseVarId(decl, kind);

      if (this.eat(types.eq)) {
        decl.init = this.parseMaybeAssign(isFor);
      } else {
        if (kind === "const" && !(this.match(types._in) || this.isContextual("of"))) {
          if (!isTypescript) {
            this.unexpected();
          }
        } else if (decl.id.type !== "Identifier" && !(isFor && (this.match(types._in) || this.isContextual("of")))) {
          this.raise(this.state.lastTokEnd, "Complex binding patterns require an initialization value");
        }

        decl.init = null;
      }

      declarations.push(this.finishNode(decl, "VariableDeclarator"));
      if (!this.eat(types.comma)) break;
    }

    return node;
  }

  parseVarId(decl, kind) {
    decl.id = this.parseBindingAtom();
    this.checkLVal(decl.id, kind === "var" ? BIND_VAR : BIND_LEXICAL, undefined, "variable declaration", kind !== "var");
  }

  parseFunction(node, statement = FUNC_NO_FLAGS, isAsync = false) {
    const isStatement = statement & FUNC_STATEMENT;
    const isHangingStatement = statement & FUNC_HANGING_STATEMENT;
    const requireId = !!isStatement && !(statement & FUNC_NULLABLE_ID);
    this.initFunction(node, isAsync);

    if (this.match(types.star) && isHangingStatement) {
      this.raise(this.state.start, "Generators can only be declared at the top level or inside a block");
    }

    node.generator = this.eat(types.star);

    if (isStatement) {
      node.id = this.parseFunctionId(requireId);
    }

    const oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
    const oldYieldPos = this.state.yieldPos;
    const oldAwaitPos = this.state.awaitPos;
    this.state.maybeInArrowParameters = false;
    this.state.yieldPos = -1;
    this.state.awaitPos = -1;
    this.scope.enter(functionFlags(node.async, node.generator));

    if (!isStatement) {
      node.id = this.parseFunctionId();
    }

    this.parseFunctionParams(node);
    this.withTopicForbiddingContext(() => {
      this.parseFunctionBodyAndFinish(node, isStatement ? "FunctionDeclaration" : "FunctionExpression");
    });
    this.scope.exit();

    if (isStatement && !isHangingStatement) {
      this.registerFunctionStatementId(node);
    }

    this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
    this.state.yieldPos = oldYieldPos;
    this.state.awaitPos = oldAwaitPos;
    return node;
  }

  parseFunctionId(requireId) {
    return requireId || this.match(types.name) ? this.parseIdentifier() : null;
  }

  parseFunctionParams(node, allowModifiers) {
    const oldInParameters = this.state.inParameters;
    this.state.inParameters = true;
    this.expect(types.parenL);
    node.params = this.parseBindingList(types.parenR, 41, false, allowModifiers);
    this.state.inParameters = oldInParameters;
    this.checkYieldAwaitInDefaultParams();
  }

  registerFunctionStatementId(node) {
    if (!node.id) return;
    this.scope.declareName(node.id.name, this.state.strict || node.generator || node.async ? this.scope.treatFunctionsAsVar ? BIND_VAR : BIND_LEXICAL : BIND_FUNCTION, node.id.start);
  }

  parseClass(node, isStatement, optionalId) {
    this.next();
    this.takeDecorators(node);
    const oldStrict = this.state.strict;
    this.state.strict = true;
    this.parseClassId(node, isStatement, optionalId);
    this.parseClassSuper(node);
    node.body = this.parseClassBody(!!node.superClass);
    this.state.strict = oldStrict;
    return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression");
  }

  isClassProperty() {
    return this.match(types.eq) || this.match(types.semi) || this.match(types.braceR);
  }

  isClassMethod() {
    return this.match(types.parenL);
  }

  isNonstaticConstructor(method) {
    return !method.computed && !method.static && (method.key.name === "constructor" || method.key.value === "constructor");
  }

  parseClassBody(constructorAllowsSuper) {
    this.classScope.enter();
    const state = {
      hadConstructor: false
    };
    let decorators = [];
    const classBody = this.startNode();
    classBody.body = [];
    this.expect(types.braceL);
    this.withTopicForbiddingContext(() => {
      while (!this.eat(types.braceR)) {
        if (this.eat(types.semi)) {
          if (decorators.length > 0) {
            throw this.raise(this.state.lastTokEnd, "Decorators must not be followed by a semicolon");
          }

          continue;
        }

        if (this.match(types.at)) {
          decorators.push(this.parseDecorator());
          continue;
        }

        const member = this.startNode();

        if (decorators.length) {
          member.decorators = decorators;
          this.resetStartLocationFromNode(member, decorators[0]);
          decorators = [];
        }

        this.parseClassMember(classBody, member, state, constructorAllowsSuper);

        if (member.kind === "constructor" && member.decorators && member.decorators.length > 0) {
          this.raise(member.start, "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?");
        }
      }
    });

    if (decorators.length) {
      throw this.raise(this.state.start, "You have trailing decorators with no method");
    }

    this.classScope.exit();
    return this.finishNode(classBody, "ClassBody");
  }

  parseClassMember(classBody, member, state, constructorAllowsSuper) {
    let isStatic = false;
    const containsEsc = this.state.containsEsc;

    if (this.match(types.name) && this.state.value === "static") {
      const key = this.parseIdentifier(true);

      if (this.isClassMethod()) {
        const method = member;
        method.kind = "method";
        method.computed = false;
        method.key = key;
        method.static = false;
        this.pushClassMethod(classBody, method, false, false, false, false);
        return;
      } else if (this.isClassProperty()) {
        const prop = member;
        prop.computed = false;
        prop.key = key;
        prop.static = false;
        classBody.body.push(this.parseClassProperty(prop));
        return;
      } else if (containsEsc) {
        throw this.unexpected();
      }

      isStatic = true;
    }

    this.parseClassMemberWithIsStatic(classBody, member, state, isStatic, constructorAllowsSuper);
  }

  parseClassMemberWithIsStatic(classBody, member, state, isStatic, constructorAllowsSuper) {
    const publicMethod = member;
    const privateMethod = member;
    const publicProp = member;
    const privateProp = member;
    const method = publicMethod;
    const publicMember = publicMethod;
    member.static = isStatic;

    if (this.eat(types.star)) {
      method.kind = "method";
      this.parseClassPropertyName(method);

      if (method.key.type === "PrivateName") {
        this.pushClassPrivateMethod(classBody, privateMethod, true, false);
        return;
      }

      if (this.isNonstaticConstructor(publicMethod)) {
        this.raise(publicMethod.key.start, "Constructor can't be a generator");
      }

      this.pushClassMethod(classBody, publicMethod, true, false, false, false);
      return;
    }

    const containsEsc = this.state.containsEsc;
    const key = this.parseClassPropertyName(member);
    const isPrivate = key.type === "PrivateName";
    const isSimple = key.type === "Identifier";
    const maybeQuestionTokenStart = this.state.start;
    this.parsePostMemberNameModifiers(publicMember);

    if (this.isClassMethod()) {
      method.kind = "method";

      if (isPrivate) {
        this.pushClassPrivateMethod(classBody, privateMethod, false, false);
        return;
      }

      const isConstructor = this.isNonstaticConstructor(publicMethod);
      let allowsDirectSuper = false;

      if (isConstructor) {
        publicMethod.kind = "constructor";

        if (state.hadConstructor && !this.hasPlugin("typescript")) {
          this.raise(key.start, "Duplicate constructor in the same class");
        }

        state.hadConstructor = true;
        allowsDirectSuper = constructorAllowsSuper;
      }

      this.pushClassMethod(classBody, publicMethod, false, false, isConstructor, allowsDirectSuper);
    } else if (this.isClassProperty()) {
      if (isPrivate) {
        this.pushClassPrivateProperty(classBody, privateProp);
      } else {
        this.pushClassProperty(classBody, publicProp);
      }
    } else if (isSimple && key.name === "async" && !containsEsc && !this.isLineTerminator()) {
      const isGenerator = this.eat(types.star);

      if (publicMember.optional) {
        this.unexpected(maybeQuestionTokenStart);
      }

      method.kind = "method";
      this.parseClassPropertyName(method);
      this.parsePostMemberNameModifiers(publicMember);

      if (method.key.type === "PrivateName") {
        this.pushClassPrivateMethod(classBody, privateMethod, isGenerator, true);
      } else {
        if (this.isNonstaticConstructor(publicMethod)) {
          this.raise(publicMethod.key.start, "Constructor can't be an async function");
        }

        this.pushClassMethod(classBody, publicMethod, isGenerator, true, false, false);
      }
    } else if (isSimple && (key.name === "get" || key.name === "set") && !containsEsc && !(this.match(types.star) && this.isLineTerminator())) {
      method.kind = key.name;
      this.parseClassPropertyName(publicMethod);

      if (method.key.type === "PrivateName") {
        this.pushClassPrivateMethod(classBody, privateMethod, false, false);
      } else {
        if (this.isNonstaticConstructor(publicMethod)) {
          this.raise(publicMethod.key.start, "Constructor can't have get/set modifier");
        }

        this.pushClassMethod(classBody, publicMethod, false, false, false, false);
      }

      this.checkGetterSetterParams(publicMethod);
    } else if (this.isLineTerminator()) {
      if (isPrivate) {
        this.pushClassPrivateProperty(classBody, privateProp);
      } else {
        this.pushClassProperty(classBody, publicProp);
      }
    } else {
      this.unexpected();
    }
  }

  parseClassPropertyName(member) {
    const key = this.parsePropertyName(member, true);

    if (!member.computed && member.static && (key.name === "prototype" || key.value === "prototype")) {
      this.raise(key.start, "Classes may not have static property named prototype");
    }

    if (key.type === "PrivateName" && key.id.name === "constructor") {
      this.raise(key.start, "Classes may not have a private field named '#constructor'");
    }

    return key;
  }

  pushClassProperty(classBody, prop) {
    if (!prop.computed && (prop.key.name === "constructor" || prop.key.value === "constructor")) {
      this.raise(prop.key.start, "Classes may not have a field named 'constructor'");
    }

    classBody.body.push(this.parseClassProperty(prop));
  }

  pushClassPrivateProperty(classBody, prop) {
    this.expectPlugin("classPrivateProperties", prop.key.start);
    const node = this.parseClassPrivateProperty(prop);
    classBody.body.push(node);
    this.classScope.declarePrivateName(node.key.id.name, CLASS_ELEMENT_OTHER, node.key.start);
  }

  pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper) {
    classBody.body.push(this.parseMethod(method, isGenerator, isAsync, isConstructor, allowsDirectSuper, "ClassMethod", true));
  }

  pushClassPrivateMethod(classBody, method, isGenerator, isAsync) {
    this.expectPlugin("classPrivateMethods", method.key.start);
    const node = this.parseMethod(method, isGenerator, isAsync, false, false, "ClassPrivateMethod", true);
    classBody.body.push(node);
    const kind = node.kind === "get" ? node.static ? CLASS_ELEMENT_STATIC_GETTER : CLASS_ELEMENT_INSTANCE_GETTER : node.kind === "set" ? node.static ? CLASS_ELEMENT_STATIC_SETTER : CLASS_ELEMENT_INSTANCE_SETTER : CLASS_ELEMENT_OTHER;
    this.classScope.declarePrivateName(node.key.id.name, kind, node.key.start);
  }

  parsePostMemberNameModifiers(methodOrProp) {}

  parseAccessModifier() {
    return undefined;
  }

  parseClassPrivateProperty(node) {
    this.scope.enter(SCOPE_CLASS | SCOPE_SUPER);
    node.value = this.eat(types.eq) ? this.parseMaybeAssign() : null;
    this.semicolon();
    this.scope.exit();
    return this.finishNode(node, "ClassPrivateProperty");
  }

  parseClassProperty(node) {
    if (!node.typeAnnotation) {
      this.expectPlugin("classProperties");
    }

    this.scope.enter(SCOPE_CLASS | SCOPE_SUPER);

    if (this.match(types.eq)) {
      this.expectPlugin("classProperties");
      this.next();
      node.value = this.parseMaybeAssign();
    } else {
      node.value = null;
    }

    this.semicolon();
    this.scope.exit();
    return this.finishNode(node, "ClassProperty");
  }

  parseClassId(node, isStatement, optionalId, bindingType = BIND_CLASS) {
    if (this.match(types.name)) {
      node.id = this.parseIdentifier();

      if (isStatement) {
        this.checkLVal(node.id, bindingType, undefined, "class name");
      }
    } else {
      if (optionalId || !isStatement) {
        node.id = null;
      } else {
        this.unexpected(null, "A class name is required");
      }
    }
  }

  parseClassSuper(node) {
    node.superClass = this.eat(types._extends) ? this.parseExprSubscripts() : null;
  }

  parseExport(node) {
    const hasDefault = this.maybeParseExportDefaultSpecifier(node);
    const parseAfterDefault = !hasDefault || this.eat(types.comma);
    const hasStar = parseAfterDefault && this.eatExportStar(node);
    const hasNamespace = hasStar && this.maybeParseExportNamespaceSpecifier(node);
    const parseAfterNamespace = parseAfterDefault && (!hasNamespace || this.eat(types.comma));
    const isFromRequired = hasDefault || hasStar;

    if (hasStar && !hasNamespace) {
      if (hasDefault) this.unexpected();
      this.parseExportFrom(node, true);
      return this.finishNode(node, "ExportAllDeclaration");
    }

    const hasSpecifiers = this.maybeParseExportNamedSpecifiers(node);

    if (hasDefault && parseAfterDefault && !hasStar && !hasSpecifiers || hasNamespace && parseAfterNamespace && !hasSpecifiers) {
      throw this.unexpected(null, types.braceL);
    }

    let hasDeclaration;

    if (isFromRequired || hasSpecifiers) {
      hasDeclaration = false;
      this.parseExportFrom(node, isFromRequired);
    } else {
      hasDeclaration = this.maybeParseExportDeclaration(node);
    }

    if (isFromRequired || hasSpecifiers || hasDeclaration) {
      this.checkExport(node, true, false, !!node.source);
      return this.finishNode(node, "ExportNamedDeclaration");
    }

    if (this.eat(types._default)) {
      node.declaration = this.parseExportDefaultExpression();
      this.checkExport(node, true, true);
      return this.finishNode(node, "ExportDefaultDeclaration");
    }

    throw this.unexpected(null, types.braceL);
  }

  eatExportStar(node) {
    return this.eat(types.star);
  }

  maybeParseExportDefaultSpecifier(node) {
    if (this.isExportDefaultSpecifier()) {
      this.expectPlugin("exportDefaultFrom");
      const specifier = this.startNode();
      specifier.exported = this.parseIdentifier(true);
      node.specifiers = [this.finishNode(specifier, "ExportDefaultSpecifier")];
      return true;
    }

    return false;
  }

  maybeParseExportNamespaceSpecifier(node) {
    if (this.isContextual("as")) {
      if (!node.specifiers) node.specifiers = [];
      const specifier = this.startNodeAt(this.state.lastTokStart, this.state.lastTokStartLoc);
      this.next();
      specifier.exported = this.parseIdentifier(true);
      node.specifiers.push(this.finishNode(specifier, "ExportNamespaceSpecifier"));
      return true;
    }

    return false;
  }

  maybeParseExportNamedSpecifiers(node) {
    if (this.match(types.braceL)) {
      if (!node.specifiers) node.specifiers = [];
      node.specifiers.push(...this.parseExportSpecifiers());
      node.source = null;
      node.declaration = null;
      return true;
    }

    return false;
  }

  maybeParseExportDeclaration(node) {
    if (this.shouldParseExportDeclaration()) {
      if (this.isContextual("async")) {
        const next = this.nextTokenStart();

        if (!this.isUnparsedContextual(next, "function")) {
          this.unexpected(next, `Unexpected token, expected "function"`);
        }
      }

      node.specifiers = [];
      node.source = null;
      node.declaration = this.parseExportDeclaration(node);
      return true;
    }

    return false;
  }

  isAsyncFunction() {
    if (!this.isContextual("async")) return false;
    const next = this.nextTokenStart();
    return !lineBreak.test(this.input.slice(this.state.pos, next)) && this.isUnparsedContextual(next, "function");
  }

  parseExportDefaultExpression() {
    const expr = this.startNode();
    const isAsync = this.isAsyncFunction();

    if (this.match(types._function) || isAsync) {
      this.next();

      if (isAsync) {
        this.next();
      }

      return this.parseFunction(expr, FUNC_STATEMENT | FUNC_NULLABLE_ID, isAsync);
    } else if (this.match(types._class)) {
      return this.parseClass(expr, true, true);
    } else if (this.match(types.at)) {
      if (this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport")) {
        this.raise(this.state.start, "Decorators must be placed *before* the 'export' keyword." + " You can set the 'decoratorsBeforeExport' option to false to use" + " the 'export @decorator class {}' syntax");
      }

      this.parseDecorators(false);
      return this.parseClass(expr, true, true);
    } else if (this.match(types._const) || this.match(types._var) || this.isLet()) {
      throw this.raise(this.state.start, "Only expressions, functions or classes are allowed as the `default` export.");
    } else {
      const res = this.parseMaybeAssign();
      this.semicolon();
      return res;
    }
  }

  parseExportDeclaration(node) {
    return this.parseStatement(null);
  }

  isExportDefaultSpecifier() {
    if (this.match(types.name)) {
      return this.state.value !== "async" && this.state.value !== "let";
    }

    if (!this.match(types._default)) {
      return false;
    }

    const next = this.nextTokenStart();
    return this.input.charCodeAt(next) === 44 || this.isUnparsedContextual(next, "from");
  }

  parseExportFrom(node, expect) {
    if (this.eatContextual("from")) {
      node.source = this.parseImportSource();
      this.checkExport(node);
    } else {
      if (expect) {
        this.unexpected();
      } else {
        node.source = null;
      }
    }

    this.semicolon();
  }

  shouldParseExportDeclaration() {
    if (this.match(types.at)) {
      this.expectOnePlugin(["decorators", "decorators-legacy"]);

      if (this.hasPlugin("decorators")) {
        if (this.getPluginOption("decorators", "decoratorsBeforeExport")) {
          this.unexpected(this.state.start, "Decorators must be placed *before* the 'export' keyword." + " You can set the 'decoratorsBeforeExport' option to false to use" + " the 'export @decorator class {}' syntax");
        } else {
          return true;
        }
      }
    }

    return this.state.type.keyword === "var" || this.state.type.keyword === "const" || this.state.type.keyword === "function" || this.state.type.keyword === "class" || this.isLet() || this.isAsyncFunction();
  }

  checkExport(node, checkNames, isDefault, isFrom) {
    if (checkNames) {
      if (isDefault) {
        this.checkDuplicateExports(node, "default");
      } else if (node.specifiers && node.specifiers.length) {
        for (let _i3 = 0, _node$specifiers = node.specifiers; _i3 < _node$specifiers.length; _i3++) {
          const specifier = _node$specifiers[_i3];
          this.checkDuplicateExports(specifier, specifier.exported.name);

          if (!isFrom && specifier.local) {
            this.checkReservedWord(specifier.local.name, specifier.local.start, true, false);
            this.scope.checkLocalExport(specifier.local);
          }
        }
      } else if (node.declaration) {
        if (node.declaration.type === "FunctionDeclaration" || node.declaration.type === "ClassDeclaration") {
          const id = node.declaration.id;
          if (!id) throw new Error("Assertion failure");
          this.checkDuplicateExports(node, id.name);
        } else if (node.declaration.type === "VariableDeclaration") {
          for (let _i4 = 0, _node$declaration$dec = node.declaration.declarations; _i4 < _node$declaration$dec.length; _i4++) {
            const declaration = _node$declaration$dec[_i4];
            this.checkDeclaration(declaration.id);
          }
        }
      }
    }

    const currentContextDecorators = this.state.decoratorStack[this.state.decoratorStack.length - 1];

    if (currentContextDecorators.length) {
      const isClass = node.declaration && (node.declaration.type === "ClassDeclaration" || node.declaration.type === "ClassExpression");

      if (!node.declaration || !isClass) {
        throw this.raise(node.start, "You can only use decorators on an export when exporting a class");
      }

      this.takeDecorators(node.declaration);
    }
  }

  checkDeclaration(node) {
    if (node.type === "Identifier") {
      this.checkDuplicateExports(node, node.name);
    } else if (node.type === "ObjectPattern") {
      for (let _i5 = 0, _node$properties = node.properties; _i5 < _node$properties.length; _i5++) {
        const prop = _node$properties[_i5];
        this.checkDeclaration(prop);
      }
    } else if (node.type === "ArrayPattern") {
      for (let _i6 = 0, _node$elements = node.elements; _i6 < _node$elements.length; _i6++) {
        const elem = _node$elements[_i6];

        if (elem) {
          this.checkDeclaration(elem);
        }
      }
    } else if (node.type === "ObjectProperty") {
      this.checkDeclaration(node.value);
    } else if (node.type === "RestElement") {
      this.checkDeclaration(node.argument);
    } else if (node.type === "AssignmentPattern") {
      this.checkDeclaration(node.left);
    }
  }

  checkDuplicateExports(node, name) {
    if (this.state.exportedIdentifiers.indexOf(name) > -1) {
      this.raise(node.start, name === "default" ? "Only one default export allowed per module." : `\`${name}\` has already been exported. Exported identifiers must be unique.`);
    }

    this.state.exportedIdentifiers.push(name);
  }

  parseExportSpecifiers() {
    const nodes = [];
    let first = true;
    this.expect(types.braceL);

    while (!this.eat(types.braceR)) {
      if (first) {
        first = false;
      } else {
        this.expect(types.comma);
        if (this.eat(types.braceR)) break;
      }

      const node = this.startNode();
      node.local = this.parseIdentifier(true);
      node.exported = this.eatContextual("as") ? this.parseIdentifier(true) : node.local.__clone();
      nodes.push(this.finishNode(node, "ExportSpecifier"));
    }

    return nodes;
  }

  parseImport(node) {
    node.specifiers = [];

    if (!this.match(types.string)) {
      const hasDefault = this.maybeParseDefaultImportSpecifier(node);
      const parseNext = !hasDefault || this.eat(types.comma);
      const hasStar = parseNext && this.maybeParseStarImportSpecifier(node);
      if (parseNext && !hasStar) this.parseNamedImportSpecifiers(node);
      this.expectContextual("from");
    }

    node.source = this.parseImportSource();
    this.semicolon();
    return this.finishNode(node, "ImportDeclaration");
  }

  parseImportSource() {
    if (!this.match(types.string)) this.unexpected();
    return this.parseExprAtom();
  }

  shouldParseDefaultImport(node) {
    return this.match(types.name);
  }

  parseImportSpecifierLocal(node, specifier, type, contextDescription) {
    specifier.local = this.parseIdentifier();
    this.checkLVal(specifier.local, BIND_LEXICAL, undefined, contextDescription);
    node.specifiers.push(this.finishNode(specifier, type));
  }

  maybeParseDefaultImportSpecifier(node) {
    if (this.shouldParseDefaultImport(node)) {
      this.parseImportSpecifierLocal(node, this.startNode(), "ImportDefaultSpecifier", "default import specifier");
      return true;
    }

    return false;
  }

  maybeParseStarImportSpecifier(node) {
    if (this.match(types.star)) {
      const specifier = this.startNode();
      this.next();
      this.expectContextual("as");
      this.parseImportSpecifierLocal(node, specifier, "ImportNamespaceSpecifier", "import namespace specifier");
      return true;
    }

    return false;
  }

  parseNamedImportSpecifiers(node) {
    let first = true;
    this.expect(types.braceL);

    while (!this.eat(types.braceR)) {
      if (first) {
        first = false;
      } else {
        if (this.eat(types.colon)) {
          throw this.raise(this.state.start, "ES2015 named imports do not destructure. " + "Use another statement for destructuring after the import.");
        }

        this.expect(types.comma);
        if (this.eat(types.braceR)) break;
      }

      this.parseImportSpecifier(node);
    }
  }

  parseImportSpecifier(node) {
    const specifier = this.startNode();
    specifier.imported = this.parseIdentifier(true);

    if (this.eatContextual("as")) {
      specifier.local = this.parseIdentifier();
    } else {
      this.checkReservedWord(specifier.imported.name, specifier.start, true, true);
      specifier.local = specifier.imported.__clone();
    }

    this.checkLVal(specifier.local, BIND_LEXICAL, undefined, "import specifier");
    node.specifiers.push(this.finishNode(specifier, "ImportSpecifier"));
  }

}

class ClassScope {
  constructor() {
    this.privateNames = new Set();
    this.loneAccessors = new Map();
    this.undefinedPrivateNames = new Map();
  }

}
class ClassScopeHandler {
  constructor(raise) {
    this.stack = [];
    this.undefinedPrivateNames = new Map();
    this.raise = raise;
  }

  current() {
    return this.stack[this.stack.length - 1];
  }

  enter() {
    this.stack.push(new ClassScope());
  }

  exit() {
    const oldClassScope = this.stack.pop();
    const current = this.current();

    for (let _i = 0, _Array$from = Array.from(oldClassScope.undefinedPrivateNames); _i < _Array$from.length; _i++) {
      const [name, pos] = _Array$from[_i];

      if (current) {
        if (!current.undefinedPrivateNames.has(name)) {
          current.undefinedPrivateNames.set(name, pos);
        }
      } else {
        this.raiseUndeclaredPrivateName(name, pos);
      }
    }
  }

  declarePrivateName(name, elementType, pos) {
    const classScope = this.current();
    let redefined = classScope.privateNames.has(name);

    if (elementType & CLASS_ELEMENT_KIND_ACCESSOR) {
      const accessor = redefined && classScope.loneAccessors.get(name);

      if (accessor) {
        const oldStatic = accessor & CLASS_ELEMENT_FLAG_STATIC;
        const newStatic = elementType & CLASS_ELEMENT_FLAG_STATIC;
        const oldKind = accessor & CLASS_ELEMENT_KIND_ACCESSOR;
        const newKind = elementType & CLASS_ELEMENT_KIND_ACCESSOR;
        redefined = oldKind === newKind || oldStatic !== newStatic;
        if (!redefined) classScope.loneAccessors.delete(name);
      } else if (!redefined) {
        classScope.loneAccessors.set(name, elementType);
      }
    }

    if (redefined) {
      this.raise(pos, `Duplicate private name #${name}`);
    }

    classScope.privateNames.add(name);
    classScope.undefinedPrivateNames.delete(name);
  }

  usePrivateName(name, pos) {
    let classScope;

    for (let _i2 = 0, _this$stack = this.stack; _i2 < _this$stack.length; _i2++) {
      classScope = _this$stack[_i2];
      if (classScope.privateNames.has(name)) return;
    }

    if (classScope) {
      classScope.undefinedPrivateNames.set(name, pos);
    } else {
      this.raiseUndeclaredPrivateName(name, pos);
    }
  }

  raiseUndeclaredPrivateName(name, pos) {
    this.raise(pos, `Private name #${name} is not defined`);
  }

}

class Parser extends StatementParser {
  constructor(options, input) {
    options = getOptions(options);
    super(options, input);
    const ScopeHandler = this.getScopeHandler();
    this.options = options;
    this.inModule = this.options.sourceType === "module";
    this.scope = new ScopeHandler(this.raise.bind(this), this.inModule);
    this.classScope = new ClassScopeHandler(this.raise.bind(this));
    this.plugins = pluginsMap(this.options.plugins);
    this.filename = options.sourceFilename;
  }

  getScopeHandler() {
    return ScopeHandler;
  }

  parse() {
    let scopeFlags = SCOPE_PROGRAM;

    if (this.hasPlugin("topLevelAwait") && this.inModule) {
      scopeFlags |= SCOPE_ASYNC;
    }

    this.scope.enter(scopeFlags);
    const file = this.startNode();
    const program = this.startNode();
    this.nextToken();
    file.errors = null;
    this.parseTopLevel(file, program);
    file.errors = this.state.errors;
    return file;
  }

}

function pluginsMap(plugins) {
  const pluginMap = new Map();

  for (let _i = 0; _i < plugins.length; _i++) {
    const plugin = plugins[_i];
    const [name, options] = Array.isArray(plugin) ? plugin : [plugin, {}];
    if (!pluginMap.has(name)) pluginMap.set(name, options || {});
  }

  return pluginMap;
}

function parse(input, options) {
  if (options && options.sourceType === "unambiguous") {
    options = Object.assign({}, options);

    try {
      options.sourceType = "module";
      const parser = getParser(options, input);
      const ast = parser.parse();

      if (parser.sawUnambiguousESM) {
        return ast;
      }

      if (parser.ambiguousScriptDifferentAst) {
        try {
          options.sourceType = "script";
          return getParser(options, input).parse();
        } catch (_unused) {}
      } else {
        ast.program.sourceType = "script";
      }

      return ast;
    } catch (moduleError) {
      try {
        options.sourceType = "script";
        return getParser(options, input).parse();
      } catch (_unused2) {}

      throw moduleError;
    }
  } else {
    return getParser(options, input).parse();
  }
}
function parseExpression(input, options) {
  const parser = getParser(options, input);

  if (parser.options.strictMode) {
    parser.state.strict = true;
  }

  return parser.getExpression();
}

function getParser(options, input) {
  let cls = Parser;

  if (options && options.plugins) {
    validatePlugins(options.plugins);
    cls = getParserClass(options.plugins);
  }

  return new cls(options, input);
}

const parserClassCache = {};

function getParserClass(pluginsFromOptions) {
  const pluginList = mixinPluginNames.filter(name => hasPlugin(pluginsFromOptions, name));
  const key = pluginList.join("/");
  let cls = parserClassCache[key];

  if (!cls) {
    cls = Parser;

    for (let _i = 0; _i < pluginList.length; _i++) {
      const plugin = pluginList[_i];
      cls = mixinPlugins[plugin](cls);
    }

    parserClassCache[key] = cls;
  }

  return cls;
}

exports.parse = parse;
exports.parseExpression = parseExpression;
exports.tokTypes = types;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "../node_modules/@hegel/core/checking/index.js":
/*!*****************************************************!*\
  !*** ../node_modules/@hegel/core/checking/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _errors = __webpack_require__(/*! ../utils/errors */ "../node_modules/@hegel/core/utils/errors.js");

var _errors2 = _interopRequireDefault(_errors);

var _type = __webpack_require__(/*! ../type-graph/types/type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _typeVar = __webpack_require__(/*! ../type-graph/types/type-var */ "../node_modules/@hegel/core/type-graph/types/type-var.js");

var _callMeta = __webpack_require__(/*! ../type-graph/meta/call-meta */ "../node_modules/@hegel/core/type-graph/meta/call-meta.js");

var _typeScope = __webpack_require__(/*! ../type-graph/type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

var _tupleType = __webpack_require__(/*! ../type-graph/types/tuple-type */ "../node_modules/@hegel/core/type-graph/types/tuple-type.js");

var _unionType = __webpack_require__(/*! ../type-graph/types/union-type */ "../node_modules/@hegel/core/type-graph/types/union-type.js");

var _bottomType = __webpack_require__(/*! ../type-graph/types/bottom-type */ "../node_modules/@hegel/core/type-graph/types/bottom-type.js");

var _genericType = __webpack_require__(/*! ../type-graph/types/generic-type */ "../node_modules/@hegel/core/type-graph/types/generic-type.js");

var _moduleScope = __webpack_require__(/*! ../type-graph/module-scope */ "../node_modules/@hegel/core/type-graph/module-scope.js");

var _variableInfo = __webpack_require__(/*! ../type-graph/variable-info */ "../node_modules/@hegel/core/type-graph/variable-info.js");

var _variableScope = __webpack_require__(/*! ../type-graph/variable-scope */ "../node_modules/@hegel/core/type-graph/variable-scope.js");

var _immutableType = __webpack_require__(/*! ../type-graph/types/immutable-type */ "../node_modules/@hegel/core/type-graph/types/immutable-type.js");

var _functionType = __webpack_require__(/*! ../type-graph/types/function-type */ "../node_modules/@hegel/core/type-graph/types/function-type.js");

var _functionType2 = __webpack_require__(/*! ../inference/function-type */ "../node_modules/@hegel/core/inference/function-type.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getActualType(actual, typeScope) {
  if (actual === undefined || actual === null) {
    return _type.Type.Undefined;
  }

  if (Array.isArray(actual)) {
    const items = actual.map(a => getActualType(a, typeScope));
    return _tupleType.TupleType.term(_tupleType.TupleType.getName(items), {}, items);
  }

  if (actual instanceof _variableInfo.VariableInfo) {
    return getActualType(actual.type, typeScope);
  }

  if (actual instanceof _typeVar.TypeVar && actual.root != undefined) {
    return actual.root;
  }

  return actual;
}

function isAssign(call) {
  return call.targetName.includes("=") && !call.targetName.includes("==");
}

function isValidTypes(targetName, declaratedType, actual, typeScope) {
  let declaratedRootType = declaratedType instanceof _functionType.RestArgument ? declaratedType.type : declaratedType;
  const actualRootType = getActualType(actual, typeScope);

  if (declaratedType instanceof _functionType.RestArgument && Array.isArray(actual)) {
    return isValidTypes(targetName, declaratedType.type, actualRootType, typeScope);
  } else if (!(declaratedType instanceof _functionType.RestArgument)) {
    declaratedRootType = declaratedRootType instanceof _typeVar.TypeVar && declaratedRootType.root ? declaratedRootType.root : declaratedRootType;

    if (actualRootType instanceof _unionType.UnionType) {
      return actualRootType.variants.every(t => isValidTypes(targetName, declaratedRootType, t, typeScope));
    }

    if (declaratedRootType.onlyLiteral && actual instanceof _variableInfo.VariableInfo) {
      return declaratedRootType.equalsTo(actualRootType);
    }

    if (targetName === "return" && declaratedRootType instanceof _typeVar.TypeVar) {
      return declaratedRootType.equalsTo(actualRootType);
    }

    return declaratedRootType.isPrincipalTypeFor(actualRootType);
  }

  throw new Error("Never!");
}

function checkSingleCall(call, typeScope) {
  const givenArgumentsTypes = call.arguments.map(t => t instanceof _variableInfo.VariableInfo ? t.type : t);
  const targetFunctionType = (0, _functionType2.getCallTarget)(call);
  const targetArguments = targetFunctionType.argumentsTypes;
  const requiredTargetArguments = targetArguments.filter(a => !(a instanceof _unionType.UnionType && a.variants.find(a => a.equalsTo(_type.Type.Undefined)) || a instanceof _functionType.RestArgument));

  if (requiredTargetArguments.length > givenArgumentsTypes.length) {
    throw new _errors2.default(`${requiredTargetArguments.length} arguments are required. Given ${givenArgumentsTypes.length}.`, call.loc);
  }

  if (targetArguments.length < givenArgumentsTypes.length && !(targetArguments[targetArguments.length - 1] instanceof _functionType.RestArgument)) {
    throw new _errors2.default(`${targetArguments.length} arguments are expected. Given ${givenArgumentsTypes.length}.`, call.loc);
  }

  let firstArgumentType = call.arguments[0];
  firstArgumentType = firstArgumentType instanceof _variableInfo.VariableInfo ? firstArgumentType.type : firstArgumentType;

  if (isAssign(call) && firstArgumentType instanceof _immutableType.$AppliedImmutable) {
    throw new _errors2.default(`Attempt to mutate immutable type`, call.loc);
  }

  for (let i = 0; i < targetArguments.length; i++) {
    const arg1 = targetArguments[i];
    const arg2 = arg1 instanceof _functionType.RestArgument ? call.arguments.slice(i) : call.arguments[i];

    if (!isValidTypes(call.targetName, arg1, arg2, typeScope)) {
      let actualType = arg1 instanceof _functionType.RestArgument ? givenArgumentsTypes.slice(i) : givenArgumentsTypes[i];
      actualType = actualType instanceof _variableInfo.VariableInfo ? actualType.type : actualType;
      const actualTypeName = // $FlowIssue
      arg2 === undefined ? "undefined" : _tupleType.TupleType.getName(actualType);
      throw new _errors2.default(`Type "${actualTypeName}" is incompatible with type "${String(arg1.name)}"`, call.argumentsLocations[i] || call.loc);
    }
  }
}

function checkCalls(path, scope, typeScope, errors) {
  let returnWasCalled = false;

  for (let i = 0; i < scope.calls.length; i++) {
    const call = scope.calls[i];

    if (call.target === undefined) {
      continue;
    }

    if (call.targetName === "return") {
      returnWasCalled = true;
    }

    try {
      checkSingleCall(call, typeScope);
    } catch (e) {
      e.source = path;
      errors.push(e);
    }
  }

  if (scope instanceof _variableScope.VariableScope && scope.type === _variableScope.VariableScope.FUNCTION_TYPE && scope.declaration instanceof _variableInfo.VariableInfo && !returnWasCalled) {
    const {
      declaration
    } = scope;
    const functionDeclaration = declaration.type instanceof _genericType.GenericType ? declaration.type.subordinateType : declaration.type;
    const returnType = functionDeclaration.returnType;

    if (returnType === undefined || returnType instanceof _typeVar.TypeVar && !returnType.isUserDefined) {
      return;
    }

    const functionShouldNotReturnSomething = returnType === _type.Type.Undefined || returnType === _type.Type.Unknown || functionDeclaration.isAsync && (returnType.equalsTo(_type.Type.Undefined.promisify()) || returnType.equalsTo(_type.Type.Unknown.promisify()));

    if (!functionShouldNotReturnSomething) {
      errors.push(new _errors2.default(`Function should return something with type "${String(returnType.name)}"`, declaration.meta.loc, path));
    }
  }
}

exports.default = checkCalls;

/***/ }),

/***/ "../node_modules/@hegel/core/index.js":
/*!********************************************!*\
  !*** ../node_modules/@hegel/core/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createModuleScope = exports.createGlobalScope = exports.HegelError = exports.VariableInfo = exports.Type = exports.PositionedModuleScope = exports.ModuleScope = exports.VariableScope = exports.TypeScope = undefined;

var _errors = __webpack_require__(/*! ./utils/errors */ "../node_modules/@hegel/core/utils/errors.js");

var _errors2 = _interopRequireDefault(_errors);

var _type = __webpack_require__(/*! ./type-graph/types/type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _typeScope = __webpack_require__(/*! ./type-graph/type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

var _variableInfo = __webpack_require__(/*! ./type-graph/variable-info */ "../node_modules/@hegel/core/type-graph/variable-info.js");

var _variableScope = __webpack_require__(/*! ./type-graph/variable-scope */ "../node_modules/@hegel/core/type-graph/variable-scope.js");

var _moduleScope = __webpack_require__(/*! ./type-graph/module-scope */ "../node_modules/@hegel/core/type-graph/module-scope.js");

var _typeGraph = __webpack_require__(/*! ./type-graph/type-graph */ "../node_modules/@hegel/core/type-graph/type-graph.js");

var _typeGraph2 = _interopRequireDefault(_typeGraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TypeScope = exports.TypeScope = _typeScope.TypeScope;
const VariableScope = exports.VariableScope = _variableScope.VariableScope;
const ModuleScope = exports.ModuleScope = _moduleScope.ModuleScope;
const PositionedModuleScope = exports.PositionedModuleScope = _moduleScope.PositionedModuleScope;
const Type = exports.Type = _type.Type;
const VariableInfo = exports.VariableInfo = _variableInfo.VariableInfo;
const HegelError = exports.HegelError = _errors2.default;
const createGlobalScope = exports.createGlobalScope = _typeGraph2.default;
const createModuleScope = exports.createModuleScope = _typeGraph.createModuleScope;

/***/ }),

/***/ "../node_modules/@hegel/core/inference/equals-refinement.js":
/*!******************************************************************!*\
  !*** ../node_modules/@hegel/core/inference/equals-refinement.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refinePropertyWithConstraint = refinePropertyWithConstraint;
exports.refinementProperty = refinementProperty;
exports.equalsRefinement = equalsRefinement;

var _nodes = __webpack_require__(/*! ../utils/nodes */ "../node_modules/@hegel/core/utils/nodes.js");

var _nodes2 = _interopRequireDefault(_nodes);

var _errors = __webpack_require__(/*! ../utils/errors */ "../node_modules/@hegel/core/utils/errors.js");

var _errors2 = _interopRequireDefault(_errors);

var _type = __webpack_require__(/*! ../type-graph/types/type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _typeVar = __webpack_require__(/*! ../type-graph/types/type-var */ "../node_modules/@hegel/core/type-graph/types/type-var.js");

var _typeScope = __webpack_require__(/*! ../type-graph/type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

var _unionType = __webpack_require__(/*! ../type-graph/types/union-type */ "../node_modules/@hegel/core/type-graph/types/union-type.js");

var _objectType = __webpack_require__(/*! ../type-graph/types/object-type */ "../node_modules/@hegel/core/type-graph/types/object-type.js");

var _variableInfo = __webpack_require__(/*! ../type-graph/variable-info */ "../node_modules/@hegel/core/type-graph/variable-info.js");

var _variableScope = __webpack_require__(/*! ../type-graph/variable-scope */ "../node_modules/@hegel/core/type-graph/variable-scope.js");

var _collectionType = __webpack_require__(/*! ../type-graph/types/collection-type */ "../node_modules/@hegel/core/type-graph/types/collection-type.js");

var _common = __webpack_require__(/*! ../utils/common */ "../node_modules/@hegel/core/utils/common.js");

var _inferenceUtils = __webpack_require__(/*! ../utils/inference-utils */ "../node_modules/@hegel/core/utils/inference-utils.js");

var _typeUtils = __webpack_require__(/*! ../utils/type-utils */ "../node_modules/@hegel/core/utils/type-utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isIdentifierOrProperty(node) {
  return node.type === _nodes2.default.IDENTIFIER && node.name !== "undefined" || node.type === _nodes2.default.MEMBER_EXPRESSION;
}

function getEqualsArguments(left, right, refinementNode) {
  if (refinementNode.type !== _nodes2.default.BINARY_EXPRESSION || !["===", "==", "!==", "!="].includes(refinementNode.operator)) {
    return;
  }

  let target = null;

  if (isIdentifierOrProperty(left)) {
    target = left;
  } else if (isIdentifierOrProperty(right)) {
    target = right;
  }

  let value = null;

  if (isSimpleLiteral(left)) {
    value = left;
  } else if (isSimpleLiteral(right)) {
    value = right;
  }

  if (!target || !value) {
    return null;
  }

  return {
    value,
    target
  };
}

function isStrict(refinementNode) {
  switch (refinementNode.operator) {
    case "===":
    case "!==":
      return true;

    case "==":
    case "!=":
      return false;
  }

  throw new Error("Never!");
}

function isSimpleLiteral(node) {
  return node.type === _nodes2.default.NULL_LITERAL || node.type === _nodes2.default.NUMERIC_LITERAL || node.type === _nodes2.default.BIGINT_LITERAL || node.type === _nodes2.default.STRING_LITERAL || node.type === _nodes2.default.BOOLEAN_LITERAL || node.type === _nodes2.default.IDENTIFIER && node.name === "undefined";
}

function getRefinmentType(value, refinementNode) {
  const UNION = _unionType.UnionType.term("undefined | null", {}, [_type.Type.Undefined, _type.Type.Null]);

  const strict = isStrict(refinementNode);

  switch (value.type) {
    case _nodes2.default.NUMERIC_LITERAL:
      return _type.Type.term(value.value, {
        isSubtypeOf: _type.Type.Number
      });

    case _nodes2.default.BIGINT_LITERAL:
      return _type.Type.term(`${value.value}n`, {
        isSubtypeOf: _type.Type.BigInt
      });

    case _nodes2.default.STRING_LITERAL:
      return _type.Type.term(`'${value.value}'`, {
        isSubtypeOf: _type.Type.String
      });

    case _nodes2.default.BOOLEAN_LITERAL:
      return _type.Type.term(value.value, {
        isSubtypeOf: _type.Type.Boolean
      });

    case _nodes2.default.NULL_LITERAL:
      return strict ? _type.Type.Null : UNION;
  }

  if (value.type === _nodes2.default.IDENTIFIER && value.name === "undefined") {
    return strict ? _type.Type.Undefined : UNION;
  }

  throw new Error("Never!");
}

function refinementVariants([refinementedVariants, alternateVariants], variant, refinementType) {
  if (refinementType.isPrincipalTypeFor(variant)) {
    return [refinementedVariants.concat([variant]), alternateVariants];
  }

  if (variant.isSuperTypeFor(refinementType)) {
    return [refinementedVariants.concat([refinementType]), alternateVariants.concat([variant])];
  }

  return [refinementedVariants, alternateVariants.concat([variant])];
}

function equalsIdentifier(node, currentScope, typeScope, value, refinementNode) {
  const variableName = node.name;
  const refinementType = getRefinmentType(value, refinementNode);
  const variableInfo = currentScope.findVariable(node);
  const [refinementedVariants, alternateVariants] = variableInfo.type instanceof _unionType.UnionType ? variableInfo.type.variants.reduce((res, variant) => refinementVariants(res, variant, refinementType), [[], []]) : refinementVariants([[], []], variableInfo.type, refinementType);

  if (!(variableInfo.type instanceof _typeVar.TypeVar) && refinementedVariants.length === 0) {
    throw new _errors2.default(`Type ${String(variableInfo.type.name)} can't be "${String(refinementType.name)}" type`, refinementNode.loc);
  }

  let refinementedType;
  let alternateType;

  if (variableInfo.type instanceof _unionType.UnionType) {
    refinementedType = _unionType.UnionType.term(null, {}, refinementedVariants);
    alternateType = _unionType.UnionType.term(null, {}, alternateVariants);
  } else {
    refinementedType = refinementType;
    alternateType = variableInfo.type;
  }

  return [variableName, refinementedType, alternateType];
}

function refinePropertyWithConstraint(chaining, refinementType, variableType, typeScope) {
  const refinementedType = chaining.reduceRight((res, property) => {
    const propertiesForObjectType = [[property, new _variableInfo.VariableInfo(res)]];
    return _objectType.ObjectType.term(_objectType.ObjectType.getName(propertiesForObjectType), {}, propertiesForObjectType);
  }, refinementType);
  return [refinementedType, variableType];
}

function propertyWith(propertyName, propertyType, propertyOwner, typeScope) {
  if (propertyType == undefined) {
    return propertyType;
  }

  const newPropertyOwner = (0, _typeUtils.createObjectWith)(propertyName, propertyType, typeScope);
  return (0, _typeUtils.mergeObjectsTypes)(propertyOwner, newPropertyOwner, typeScope);
}

function refinementProperty(variableName, variableType, refinementType, refinementNode, currentPropertyNameIndex, chainingProperties, typeScope, destructUnion = false) {
  const currentPropertyName = chainingProperties[currentPropertyNameIndex];
  const isLast = currentPropertyNameIndex === chainingProperties.length - 1;

  if (variableType instanceof _typeVar.TypeVar) {
    if (!variableType.constraint) {
      return refinePropertyWithConstraint(chainingProperties.slice(currentPropertyNameIndex), refinementType, variableType, typeScope);
    }

    variableType = variableType.constraint;
  }

  if (isLast && variableType instanceof _collectionType.CollectionType) {
    return;
  }

  if (variableType instanceof _objectType.ObjectType) {
    const property = variableType.getPropertyType(currentPropertyName);

    if (property == null) {
      return;
    }

    if (isLast) {
      if (property instanceof _unionType.UnionType) {
        const [refinementedVariants, alternateVariants] = property.variants.reduce((res, variant) => refinementVariants(res, variant, refinementType), [[], []]);
        const [refinemented, alternate] = (0, _inferenceUtils.getTypesFromVariants)( // $FlowIssue
        refinementedVariants, // $FlowIssue
        alternateVariants, typeScope);
        return [propertyWith(currentPropertyName, refinemented, variableType, typeScope), propertyWith(currentPropertyName, alternate, variableType, typeScope)];
      }

      if (refinementType.isPrincipalTypeFor(property)) {
        return [variableType, undefined];
      }

      if (property.isPrincipalTypeFor(refinementType)) {
        return [propertyWith(currentPropertyName, refinementType, variableType, typeScope), variableType];
      }

      if (destructUnion && refinementType instanceof _unionType.UnionType) {
        const pickedVariants = refinementType.variants.filter(variant => property.isPrincipalTypeFor(variant));
        return [propertyWith(currentPropertyName, _unionType.UnionType.term(null, {}, pickedVariants), variableType, typeScope), variableType];
      }

      return [undefined, variableType];
    }

    const nextIndex = currentPropertyNameIndex + 1;
    const nestedRefinement = refinementProperty(variableName, property, refinementType, refinementNode, nextIndex, chainingProperties, typeScope);

    if (!nestedRefinement) {
      return;
    }

    return [propertyWith(currentPropertyName, nestedRefinement[0], variableType, typeScope), propertyWith(currentPropertyName, nestedRefinement[1], variableType, typeScope)];
  }

  if (variableType instanceof _unionType.UnionType) {
    const [refinementedVariants, alternateVariants] = variableType.variants.reduce(([refinementedVariants, alternateVariants], variant) => {
      const isNotAlternateVariant = variant instanceof _objectType.ObjectType && variant.getPropertyType(currentPropertyName);
      const refinementedTypeAndAlternateType = isNotAlternateVariant ? refinementProperty(variableName, variant, refinementType, refinementNode, currentPropertyNameIndex, chainingProperties, typeScope) : undefined;

      if (!refinementedTypeAndAlternateType) {
        return [refinementedVariants, alternateVariants.concat([variant])];
      }

      const [refinementedType, alternateType] = refinementedTypeAndAlternateType;
      return [refinementedType ? refinementedVariants.concat([refinementedType]) : refinementedVariants, alternateType ? alternateVariants.concat([alternateType]) : alternateVariants];
    }, [[], []]);
    return (0, _inferenceUtils.getTypesFromVariants)(refinementedVariants, alternateVariants, typeScope);
  }
}

function equalsProperty(node, currentScope, typeScope, value, refinementNode) {
  const targetObject = (0, _common.getMemberExressionTarget)(node);

  if (targetObject.type !== _nodes2.default.IDENTIFIER) {
    return;
  }

  const variableName = targetObject.name;
  const propertiesChaining = (0, _inferenceUtils.getPropertyChaining)(node);
  const refinementType = getRefinmentType(value, refinementNode);
  const targetVariableInfo = currentScope.findVariable(targetObject);

  if (!variableName || !targetVariableInfo || !propertiesChaining || targetVariableInfo instanceof _variableScope.VariableScope) {
    return;
  }

  const refinmentedAndAlternate = refinementProperty(variableName, targetVariableInfo.type, refinementType, refinementNode, 0, propertiesChaining, typeScope);

  if (refinmentedAndAlternate == undefined) {
    return;
  }

  if (refinmentedAndAlternate[0] == undefined || refinmentedAndAlternate[1] == undefined) {
    const typeName = String(refinementType.name);
    throw new _errors2.default(`Property can't be "${typeName}" type or always have type "${typeName}"`, refinementNode.loc);
  }

  return [variableName, refinmentedAndAlternate[0], refinmentedAndAlternate[1]];
}

function equalsRefinement(currentRefinementNode, currentScope, typeScope, moduleScope) {
  const args = getEqualsArguments(currentRefinementNode.left, currentRefinementNode.right, currentRefinementNode);

  if (!args) {
    return;
  }

  const {
    target,
    value
  } = args;
  let refinementedType, alternateType, name;

  if (target.type === _nodes2.default.IDENTIFIER) {
    [name, refinementedType, alternateType] = equalsIdentifier(target, currentScope, typeScope, value, currentRefinementNode);
  }

  if (target.type === _nodes2.default.MEMBER_EXPRESSION) {
    const result = equalsProperty(target, currentScope, typeScope, value, currentRefinementNode);

    if (!result) {
      return;
    }

    [name, refinementedType, alternateType] = result;
  }

  if (refinementedType) {
    if (currentRefinementNode.operator === "!==" || currentRefinementNode.operator === "!=") {
      // $FlowIssue
      return [name, alternateType, refinementedType];
    } // $FlowIssue


    return [name, refinementedType, alternateType];
  }
}

/***/ }),

/***/ "../node_modules/@hegel/core/inference/error-type.js":
/*!***********************************************************!*\
  !*** ../node_modules/@hegel/core/inference/error-type.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inferenceErrorType = inferenceErrorType;

var _type = __webpack_require__(/*! ../type-graph/types/type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _unionType = __webpack_require__(/*! ../type-graph/types/union-type */ "../node_modules/@hegel/core/type-graph/types/union-type.js");

var _moduleScope = __webpack_require__(/*! ../type-graph/module-scope */ "../node_modules/@hegel/core/type-graph/module-scope.js");

var _variableInfo = __webpack_require__(/*! ../type-graph/variable-info */ "../node_modules/@hegel/core/type-graph/variable-info.js");

var _variableScope = __webpack_require__(/*! ../type-graph/variable-scope */ "../node_modules/@hegel/core/type-graph/variable-scope.js");

function inferenceErrorType(tryNode, moduleScope) {
  const tryScope = moduleScope.scopes.get(_variableScope.VariableScope.getName(tryNode));

  if (tryScope === undefined || tryScope.throwable === undefined) {
    throw new Error("Never");
  }

  const variants = tryScope.throwable.map(t => t instanceof _variableInfo.VariableInfo ? t.type : t);
  return _unionType.UnionType.term(null, {}, variants);
}

/***/ }),

/***/ "../node_modules/@hegel/core/inference/function-type.js":
/*!**************************************************************!*\
  !*** ../node_modules/@hegel/core/inference/function-type.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inferenceFunctionLiteralType = inferenceFunctionLiteralType;
exports.getCallTarget = getCallTarget;
exports.implicitApplyGeneric = implicitApplyGeneric;
exports.getRawFunctionType = getRawFunctionType;
exports.getInvocationType = getInvocationType;
exports.clearRoot = clearRoot;
exports.prepareGenericFunctionType = prepareGenericFunctionType;
exports.inferenceFunctionTypeByScope = inferenceFunctionTypeByScope;
exports.isGenericFunctionType = isGenericFunctionType;

var _nodes = __webpack_require__(/*! ../utils/nodes */ "../node_modules/@hegel/core/utils/nodes.js");

var _nodes2 = _interopRequireDefault(_nodes);

var _errors = __webpack_require__(/*! ../utils/errors */ "../node_modules/@hegel/core/utils/errors.js");

var _errors2 = _interopRequireDefault(_errors);

var _type = __webpack_require__(/*! ../type-graph/types/type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _meta = __webpack_require__(/*! ../type-graph/meta/meta */ "../node_modules/@hegel/core/type-graph/meta/meta.js");

var _typeVar = __webpack_require__(/*! ../type-graph/types/type-var */ "../node_modules/@hegel/core/type-graph/types/type-var.js");

var _callMeta = __webpack_require__(/*! ../type-graph/meta/call-meta */ "../node_modules/@hegel/core/type-graph/meta/call-meta.js");

var _typeScope = __webpack_require__(/*! ../type-graph/type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

var _constants = __webpack_require__(/*! ../type-graph/constants */ "../node_modules/@hegel/core/type-graph/constants.js");

var _unionType = __webpack_require__(/*! ../type-graph/types/union-type */ "../node_modules/@hegel/core/type-graph/types/union-type.js");

var _typeUtils = __webpack_require__(/*! ../utils/type-utils */ "../node_modules/@hegel/core/utils/type-utils.js");

var _bottomType = __webpack_require__(/*! ../type-graph/types/bottom-type */ "../node_modules/@hegel/core/type-graph/types/bottom-type.js");

var _genericType = __webpack_require__(/*! ../type-graph/types/generic-type */ "../node_modules/@hegel/core/type-graph/types/generic-type.js");

var _moduleScope = __webpack_require__(/*! ../type-graph/module-scope */ "../node_modules/@hegel/core/type-graph/module-scope.js");

var _variableInfo = __webpack_require__(/*! ../type-graph/variable-info */ "../node_modules/@hegel/core/type-graph/variable-info.js");

var _throwsType = __webpack_require__(/*! ../type-graph/types/throws-type */ "../node_modules/@hegel/core/type-graph/types/throws-type.js");

var _variableScope = __webpack_require__(/*! ../type-graph/variable-scope */ "../node_modules/@hegel/core/type-graph/variable-scope.js");

var _collectionType = __webpack_require__(/*! ../type-graph/types/collection-type */ "../node_modules/@hegel/core/type-graph/types/collection-type.js");

var _variableUtils = __webpack_require__(/*! ../utils/variable-utils */ "../node_modules/@hegel/core/utils/variable-utils.js");

var _call = __webpack_require__(/*! ../type-graph/call */ "../node_modules/@hegel/core/type-graph/call.js");

var _scopeUtils = __webpack_require__(/*! ../utils/scope-utils */ "../node_modules/@hegel/core/utils/scope-utils.js");

var _functionType = __webpack_require__(/*! ../type-graph/types/function-type */ "../node_modules/@hegel/core/type-graph/types/function-type.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const typeVarNames = ["a'", "b'", "c'", "d'", "e'", "f'", "g'", "h'", "i'", "j'", "k'", "l'", "m'", "n'", "o'", "p'", "a''", "b''", "c''", "d''", "e''", "f''", "g''", "h''", "i''", "j''", "k''", "l''", "m''", "n''", "o''", "p''"];

function inferenceFunctionLiteralType(currentNode, typeScope, parentScope, typeGraph, isTypeDefinitions, parentNode, pre, middle, post) {
  const localTypeScope = new _typeScope.TypeScope((0, _scopeUtils.findNearestTypeScope)(parentScope, typeGraph));
  const functionScope = isTypeDefinitions ? new _variableScope.VariableScope(_variableScope.VariableScope.FUNCTION_TYPE, parentScope) : typeGraph.scopes.get(_variableScope.VariableScope.getName(currentNode));

  if (!(functionScope instanceof _variableScope.VariableScope)) {
    throw new Error("Function scope should be created before inference");
  }

  const genericArguments = new Set();

  if (currentNode.typeParameters != undefined) {
    currentNode.typeParameters.params.forEach(typeAnnotation => genericArguments.add((0, _typeUtils.getTypeFromTypeAnnotation)({
      typeAnnotation
    }, localTypeScope, parentScope, true, null, parentNode, typeGraph, pre, middle, post)));
  } else {
    localTypeScope.makeCustom();
  }

  let nameIndex = 0;

  try {
    do {
      _type.Type.find(typeVarNames[nameIndex], {
        parent: localTypeScope
      });

      nameIndex++;
    } while (true);
  } catch {}

  const self = parentScope.type === _variableScope.VariableScope.CLASS_TYPE || parentScope.type === _variableScope.VariableScope.OBJECT_TYPE ? // $FlowIssue
  parentScope.body.get(_constants.THIS_TYPE).type : null;
  const argumentsTypes = currentNode.params.map((param, index) => {
    if (param.optional && !isTypeDefinitions) {
      throw new _errors2.default("The optional argument syntax is not allowed. Please use maybe type syntax.", param.loc);
    }

    const {
      name
    } = param.left || param;
    const typeNode = param.left !== undefined ? param.left.typeAnnotation : param.typeAnnotation;
    const typeAnnotation = param.optional ? {
      typeAnnotation: { ...typeNode,
        type: _nodes2.default.NULLABLE_TYPE_ANNOTATION
      }
    } : typeNode;
    let paramType = (0, _typeUtils.getTypeFromTypeAnnotation)(typeAnnotation, localTypeScope, parentScope, false, // $FlowIssue
    self, parentNode, typeGraph, pre, middle, post);
    const isWithoutAnnotation = typeNode == undefined;
    functionScope.body.set(name, new _variableInfo.VariableInfo(paramType, localTypeScope, new _meta.Meta(param.loc)));

    if (param.left !== undefined) {
      const callResultType = (0, _call.addCallToTypeGraph)(param, typeGraph, functionScope, parentNode, pre, middle, post);
      const newType = callResultType.result instanceof _variableInfo.VariableInfo ? callResultType.result.type : callResultType.result;
      paramType = !isWithoutAnnotation ? paramType : (0, _variableUtils.getVariableType)(new _variableInfo.VariableInfo(paramType), newType, typeScope, callResultType.inferenced);
      const variants = [paramType, _type.Type.Undefined];
      paramType = !isWithoutAnnotation ? paramType : _unionType.UnionType.term(null, {}, variants);
    }

    if (param.type === _nodes2.default.REST_ELEMENT) {
      if (!(paramType instanceof _collectionType.CollectionType)) {
        throw new _errors2.default("Rest argument type should be an array-like", param.typeAnnotation.loc);
      }

      paramType = new _functionType.RestArgument(paramType);
    }

    if (isWithoutAnnotation && paramType === _type.Type.Unknown) {
      const typeVar = (0, _typeUtils.addTypeVar)(typeVarNames[nameIndex + index], localTypeScope);

      if (typeVar instanceof _typeVar.TypeVar) {
        genericArguments.add(typeVar);
      }

      return typeVar;
    }

    return paramType;
  });
  let throwableType;
  let returnType = currentNode.returnType != undefined ? (0, _typeUtils.getTypeFromTypeAnnotation)(currentNode.returnType, localTypeScope, parentScope, false, // $FlowIssue
  self, parentNode, typeGraph, pre, middle, post) : (0, _typeUtils.addTypeVar)(typeVarNames[nameIndex + argumentsTypes.length], localTypeScope);

  if (currentNode.returnType == undefined) {
    if (returnType instanceof _typeVar.TypeVar) {
      genericArguments.add(returnType);
    }
  } else if (currentNode.async) {
    const unknownPromise = _type.Type.Unknown.promisify();

    if (!unknownPromise.isPrincipalTypeFor(returnType)) {
      throw new _errors2.default(`Return type of async function should be an promise`, currentNode.returnType.loc);
    }
  } else if (returnType instanceof _throwsType.$ThrowsResult) {
    throwableType = returnType;
    returnType = returnType.resultType;
  }

  const genericArgumentsTypes = [...genericArguments];

  const typeName = _functionType.FunctionType.getName(argumentsTypes, returnType, genericArgumentsTypes, currentNode.async, throwableType && throwableType.errorType);

  const type = _functionType.FunctionType.term(typeName, {}, argumentsTypes, returnType);

  type.isAsync = currentNode.async === true;
  type.throwable = throwableType && throwableType.errorType;

  if (genericArgumentsTypes.length === 0 || !(type instanceof _functionType.FunctionType)) {
    return type;
  }

  return _genericType.GenericType.new(typeName, {}, genericArgumentsTypes, localTypeScope, type);
}

function getCallTarget(call, withClean = true) {
  let callTargetType = call.target instanceof _variableInfo.VariableInfo ? call.target.type : call.target;

  if (callTargetType instanceof _typeVar.TypeVar) {
    callTargetType = _type.Type.getTypeRoot(callTargetType);
  }

  if (callTargetType instanceof _genericType.GenericType) {
    callTargetType = getRawFunctionType(callTargetType, call.arguments, null, callTargetType.localTypeScope, call.loc, // $FlowIssue
    withClean);
  }

  return callTargetType;
}

const isArgumentVariable = x => {
  const type = x instanceof _variableInfo.VariableInfo ? x.type : x;
  return type instanceof _typeVar.TypeVar;
};

function resolveOuterTypeVarsFromCall(call, genericArguments, oldGenericArguments, typeScope, typeGraph) {
  const callTarget = getCallTarget(call, false);

  if (callTarget === undefined) {
    return;
  } // $FlowIssue


  const level = oldGenericArguments[0];
  const roots = new Map();

  for (let i = 0; i < call.arguments.length; i++) {
    const callArgument = call.arguments[i];
    let actualType = callArgument instanceof _variableInfo.VariableInfo ? callArgument.type : callArgument;
    let declaratedType = callTarget.argumentsTypes[i];

    if (actualType === undefined || declaratedType === undefined) {
      continue;
    }

    actualType = _type.Type.getTypeRoot(actualType, true);
    declaratedType = _type.Type.getTypeRoot(declaratedType); // $FlowIssue

    const difference = declaratedType.getDifference(actualType, true);

    for (let j = 0; j < difference.length; j++) {
      let {
        root,
        variable
      } = difference[j];

      if (_typeVar.TypeVar.isSelf(root)) {
        continue;
      }

      root = _type.Type.getTypeRoot(root);
      variable = _type.Type.getTypeRoot(variable, true);

      if (!genericArguments.some(arg => arg.contains(variable))) {
        continue;
      }

      const shouldSetNewRoot = variable instanceof _typeVar.TypeVar && !root.contains(variable) && (variable.isUserDefined || variable.constraint === undefined) && (variable.root === undefined || variable.root.isSuperTypeFor(variable.root));

      if (!genericArguments.includes(variable)) {
        genericArguments.push(variable);
      }

      if (!shouldSetNewRoot) {
        continue;
      }

      variable.root = root;
    }
  }
}

function implicitApplyGeneric(fn, argumentsTypes, localTypeScope, loc, withClean = true, dropUnknown = false) {
  const appliedArgumentsTypes = new Map();
  const unreachableTypes = new Set();
  const declaratedArgumentsTypes = fn.subordinateType.argumentsTypes;

  for (let i = 0; i < declaratedArgumentsTypes.length; i++) {
    const maybeBottom = declaratedArgumentsTypes[i];
    const givenArgument = argumentsTypes[i] || _type.Type.Undefined;
    const givenArgumentType = givenArgument instanceof _variableInfo.VariableInfo ? givenArgument.type : givenArgument;
    let declaratedArgument = maybeBottom;
    declaratedArgument = declaratedArgument instanceof _bottomType.$BottomType ? declaratedArgument.unpack() : declaratedArgument;
    declaratedArgument = declaratedArgument instanceof _genericType.GenericType ? declaratedArgument.subordinateType : declaratedArgument;
    const difference = givenArgumentType.getDifference(declaratedArgument);

    for (let j = 0; j < difference.length; j++) {
      let {
        root,
        variable
      } = difference[j];

      if (_typeVar.TypeVar.isSelf(root)) {
        continue;
      }

      root = _type.Type.getTypeRoot(root);
      variable = _type.Type.getTypeRoot(variable); // $FlowIssue

      variable = fn.genericArguments.find(arg => arg.equalsTo(variable));

      if (variable === undefined) {
        continue;
      }

      const existed = appliedArgumentsTypes.get(variable);
      const shouldSetNewRoot = variable instanceof _typeVar.TypeVar && variable !== root && (existed === undefined || existed instanceof _typeVar.TypeVar || dropUnknown && existed === _type.Type.Unknown || root.isSuperTypeFor(existed));

      if (!shouldSetNewRoot) {
        continue;
      }

      appliedArgumentsTypes.set(variable, root);
    }

    if (maybeBottom instanceof _bottomType.$BottomType) {
      maybeBottom.unrootSubordinateType();
    }
  }

  if (appliedArgumentsTypes.size === 0) {
    return fn.subordinateType;
  }

  const rootFinder = t => {
    const root = _type.Type.getTypeRoot(t);

    let mainRoot = appliedArgumentsTypes.get(root);

    while (appliedArgumentsTypes.has(mainRoot)) {
      mainRoot = appliedArgumentsTypes.get(mainRoot);
    }

    return mainRoot;
  };

  const appliedParameters = fn.genericArguments.map(t => {
    const resultType = rootFinder(t) || _type.Type.getTypeRoot(t);

    if (resultType instanceof _typeVar.TypeVar && !(0, _typeUtils.isReachableType)(resultType, localTypeScope)) {
      unreachableTypes.add(resultType);
    }

    return resultType;
  });
  const result = fn.applyGeneric(appliedParameters, loc).generalize([...unreachableTypes], localTypeScope);

  if (withClean) {
    fn.genericArguments.forEach(clearRoot);
  }

  return result;
}

const invocationTypeNames = ["q'", "r'", "s'", "t'", "u'", "v'", "w'", "x'", "y'", "z'"];
let iterator = 0;

function getRawFunctionType(fn, args, genericArguments, localTypeScope, loc, withClean = true, initializing = false, dropUnknown = false) {
  fn = fn instanceof _typeVar.TypeVar && fn.root !== undefined ? _type.Type.getTypeRoot(fn) : fn;

  if (fn instanceof _functionType.FunctionType) {
    return fn;
  }

  if (fn instanceof _typeVar.TypeVar) {
    if (fn.isUserDefined) {
      throw new Error("Never!");
    }

    const argTypes = args.map(a => a instanceof _variableInfo.VariableInfo ? a.type : a);
    const returnTypeName = invocationTypeNames[iterator];

    const returnType = _typeVar.TypeVar.new(returnTypeName, {
      parent: localTypeScope
    });

    const newFunctionTypeName = _functionType.FunctionType.getName(argTypes, returnType, []);

    const result = _functionType.FunctionType.term(newFunctionTypeName, {
      parent: localTypeScope
    }, argTypes, returnType);

    fn.root = result;
    return result;
  }

  const result = genericArguments != null ? // $FlowIssue
  fn.applyGeneric(genericArguments, loc, true, false, initializing) : implicitApplyGeneric(fn, args, localTypeScope, loc, withClean, dropUnknown);

  if (result instanceof _genericType.GenericType) {
    return result.subordinateType;
  }

  return result;
}

function getInvocationType(fn, argumentsTypes, genericArguments, localTypeScope, loc, initializing = false, dropUnknown = false) {
  let {
    returnType
  } = fn instanceof _functionType.FunctionType ? fn : getRawFunctionType(fn, argumentsTypes, genericArguments, localTypeScope, loc, true, initializing, dropUnknown);
  returnType = returnType instanceof _typeVar.TypeVar ? _type.Type.getTypeRoot(returnType) : returnType;
  returnType = returnType instanceof _bottomType.$BottomType ? returnType.unpack() : returnType;
  return returnType instanceof _typeVar.TypeVar ? _type.Type.getTypeRoot(returnType) : returnType;
}

function clearRoot(type) {
  while (type instanceof _typeVar.TypeVar && type.root != undefined) {
    const root = type.root;
    type.root = undefined;
    type = root;
  }
}

function prepareGenericFunctionType(functionScope) {
  const {
    genericArguments
  } = functionScope.declaration.type;

  for (let i = 0; i < genericArguments.length; i++) {
    const genericArgument = genericArguments[i];

    if (genericArgument instanceof _typeVar.TypeVar && genericArgument.isUserDefined) {
      clearRoot(genericArgument);
    }
  }
}

function inferenceFunctionTypeByScope(functionScope, typeScope, typeGraph) {
  const {
    calls = []
  } = functionScope;
  const {
    genericArguments: oldGenericArguments,
    localTypeScope,
    subordinateType: {
      argumentsTypes,
      returnType,
      isAsync,
      throwable
    }
  } = functionScope.declaration.type;
  const genericArguments = [...oldGenericArguments];
  let returnWasCalled = false; // $FlowIssue

  const nestedScopes = functionScope.getAllChildScopes(typeGraph);

  for (const {
    calls
  } of nestedScopes) {
    for (let i = 0; i < calls.length; i++) {
      resolveOuterTypeVarsFromCall(calls[i], genericArguments, oldGenericArguments, localTypeScope, typeGraph);
    }
  }

  for (let i = 0; i < calls.length; i++) {
    if (calls[i].targetName === "return" && returnType instanceof _typeVar.TypeVar && !returnType.isUserDefined) {
      returnWasCalled = true;
      const {
        arguments: [returnArgument],
        inferenced
      } = calls[i];
      const newReturnType = returnArgument instanceof _variableInfo.VariableInfo ? returnArgument.type : returnArgument;
      const newOneRoot = (0, _variableUtils.getVariableType)(undefined, newReturnType instanceof _typeVar.TypeVar ? _type.Type.getTypeRoot(newReturnType) : newReturnType, typeScope, inferenced);

      if (newOneRoot === returnType) {
        continue;
      }

      const oldRoot = _type.Type.getTypeRoot(returnType);

      if (returnType.root === undefined) {
        returnType.root = newOneRoot;
      } else if (!oldRoot.isPrincipalTypeFor(newOneRoot)) {
        const variants = (oldRoot instanceof _unionType.UnionType ? oldRoot.variants : [oldRoot]).concat([newOneRoot]);
        returnType.root = _unionType.UnionType.term(null, {}, variants);
      }
    }
  }

  if (!returnWasCalled && returnType instanceof _typeVar.TypeVar && !returnType.isUserDefined) {
    returnType.root = isAsync ? _type.Type.Undefined.promisify() : _type.Type.Undefined;
  }

  const created = new Map();

  for (let i = 0; i < genericArguments.length; i++) {
    const genericArg = genericArguments[i];

    const root = _type.Type.getTypeRoot(genericArg);

    if (root instanceof _typeVar.TypeVar && !genericArguments.includes(root)) {
      const alreadyCreated = created.get(root);
      const newRoot = alreadyCreated !== undefined ? alreadyCreated : Object.assign(new _typeVar.TypeVar(""), root, {
        isUserDefined: false
      });
      genericArg.root = newRoot;

      if (alreadyCreated === undefined) {
        created.set(root, newRoot);
      }
    }
  }

  const [allVars, allRoots] = genericArguments.reduce(([vars, roots], t) => t.root !== undefined ? [vars.concat([t]), roots.concat([_type.Type.getTypeRoot(t)])] : [vars, roots], [[], []]);

  for (const scope of nestedScopes) {
    for (const [_, v] of scope.body) {
      if (v.type instanceof _typeVar.TypeVar && v.type.root != undefined) {
        v.type = _type.Type.getTypeRoot(v.type);
      } else {
        // $FlowIssue
        v.type = v.type.changeAll(allVars, allRoots);
      }
    }
  }

  let newGenericArguments = new Set();
  const newArgumentsTypes = argumentsTypes.map(t => {
    let result = t instanceof _typeVar.TypeVar && t.root != undefined ? _type.Type.getTypeRoot(t) : t; // $FlowIssue

    result = result.changeAll(allVars, allRoots, typeScope);

    if (result instanceof _typeVar.TypeVar && // $FlowIssue
    !(0, _typeUtils.isReachableType)(result, localTypeScope.parent)) {
      newGenericArguments.add(result);
    }

    return result;
  });
  let newReturnType = returnType instanceof _typeVar.TypeVar && returnType.root != undefined ? _type.Type.getTypeRoot(returnType) : returnType;
  newReturnType = newReturnType.changeAll(allVars, allRoots, typeScope);

  if (newReturnType instanceof _typeVar.TypeVar) {
    newGenericArguments.add(newReturnType);
  }

  const shouldBeCleaned = [];

  for (const {
    calls
  } of nestedScopes) {
    for (let i = 0; i < calls.length; i++) {
      const call = calls[i];
      const args = call.arguments;
      const target = call.target;
      const targetType = target instanceof _variableInfo.VariableInfo ? target.type : target;

      for (let j = 0; j < args.length; j++) {
        const argument = args[j];
        const argumentType = argument instanceof _variableInfo.VariableInfo ? argument.type : argument;

        if (!(argumentType instanceof _typeVar.TypeVar)) {
          if (argument instanceof _type.Type) {
            args[j] = argument.changeAll(allVars, allRoots, typeScope);
          }

          continue;
        }

        const copy = created.get(argumentType);

        if (argumentType.root !== undefined) {
          args[j] = _type.Type.getTypeRoot(argumentType);

          if (oldGenericArguments.includes(argumentType) && argumentType.isUserDefined) {
            shouldBeCleaned.push(argumentType);
          }
        } else if (copy !== undefined) {
          args[j] = copy;

          if (call.targetName === "return" && call.target instanceof _functionType.FunctionType) {
            // $FlowIssue
            call.target = targetType.changeAll([argumentType], [copy], typeScope);
          }
        }
      }

      if (targetType instanceof _genericType.GenericType) {
        targetType.genericArguments.forEach(a => a.isUserDefined && shouldBeCleaned.push(a));
      }
    }
  }

  for (let i = 0; i < oldGenericArguments.length; i++) {
    const genericArgument = oldGenericArguments[i];

    const oldRoot = _type.Type.getTypeRoot(genericArgument);

    clearRoot(genericArgument);
    const isTypeVarStillExisted = newArgumentsTypes.find(arg => arg.contains(genericArgument));

    if (isTypeVarStillExisted && genericArgument instanceof _typeVar.TypeVar) {
      newGenericArguments.add(genericArgument);
    }

    if (genericArgument instanceof _typeVar.TypeVar && !genericArgument.isUserDefined && genericArgument !== oldRoot) {
      genericArgument.root = oldRoot;
    }
  }

  for (let i = 0; i < genericArguments.length; i++) {
    const genericArgument = genericArguments[i];

    const root = _type.Type.getTypeRoot(genericArgument.changeAll(allVars, allRoots, localTypeScope));

    if (!(root instanceof _typeVar.TypeVar) || oldGenericArguments.some(a => root.equalsTo(a, true) || genericArgument.equalsTo(a, true))) {
      continue;
    }

    newGenericArguments.add(root);
  }

  shouldBeCleaned.forEach(clearRoot);
  const newGenericArgumentsTypes = [...newGenericArguments].map(t => {
    t.isUserDefined = true;
    return t;
  });

  const newFunctionTypeName = _functionType.FunctionType.getName(newArgumentsTypes, newReturnType, newGenericArgumentsTypes, isAsync, throwable);

  let newFunctionType = _functionType.FunctionType.term(newFunctionTypeName, {}, newArgumentsTypes, newReturnType, isAsync);

  if (newFunctionType instanceof _functionType.FunctionType && newFunctionType.throwble === undefined) {
    newFunctionType.throwable = throwable;
  }

  if (newGenericArgumentsTypes.length > 0) {
    newFunctionType = _genericType.GenericType.new(newFunctionTypeName, {}, newGenericArgumentsTypes, localTypeScope, newFunctionType);
  } // $FlowIssue


  functionScope.declaration.type = newFunctionType;
}

function isGenericFunctionType(type) {
  return type instanceof _genericType.GenericType && type.subordinateType instanceof _functionType.FunctionType;
}

/***/ }),

/***/ "../node_modules/@hegel/core/inference/in-operator.js":
/*!************************************************************!*\
  !*** ../node_modules/@hegel/core/inference/in-operator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inRefinement = inRefinement;

var _nodes = __webpack_require__(/*! ../utils/nodes */ "../node_modules/@hegel/core/utils/nodes.js");

var _nodes2 = _interopRequireDefault(_nodes);

var _errors = __webpack_require__(/*! ../utils/errors */ "../node_modules/@hegel/core/utils/errors.js");

var _errors2 = _interopRequireDefault(_errors);

var _type = __webpack_require__(/*! ../type-graph/types/type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _typeScope = __webpack_require__(/*! ../type-graph/type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

var _unionType = __webpack_require__(/*! ../type-graph/types/union-type */ "../node_modules/@hegel/core/type-graph/types/union-type.js");

var _objectType = __webpack_require__(/*! ../type-graph/types/object-type */ "../node_modules/@hegel/core/type-graph/types/object-type.js");

var _variableInfo = __webpack_require__(/*! ../type-graph/variable-info */ "../node_modules/@hegel/core/type-graph/variable-info.js");

var _variableScope = __webpack_require__(/*! ../type-graph/variable-scope */ "../node_modules/@hegel/core/type-graph/variable-scope.js");

var _common = __webpack_require__(/*! ../utils/common */ "../node_modules/@hegel/core/utils/common.js");

var _typeUtils = __webpack_require__(/*! ../utils/type-utils */ "../node_modules/@hegel/core/utils/type-utils.js");

var _inferenceUtils = __webpack_require__(/*! ../utils/inference-utils */ "../node_modules/@hegel/core/utils/inference-utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inIdentifier(targetNode, currentScope, typeScope, propertyName, refinementNode) {
  const variable = currentScope.findVariable(targetNode);
  const type = variable.type;

  if (type.equalsTo(_objectType.ObjectType.Object)) {
    return [targetNode.name, _objectType.ObjectType.term(null, {}, [[propertyName, new _variableInfo.VariableInfo(_type.Type.Unknown)]]), type];
  }

  if (type instanceof _unionType.UnionType) {
    const [refinementedVariants, alternateVariants] = type.variants.reduce(([refinementedVariants, alternateVariants], variant) => {
      if (variant instanceof _objectType.ObjectType && variant.getPropertyType(propertyName)) {
        return [refinementedVariants.concat([variant]), alternateVariants];
      }

      return [refinementedVariants, alternateVariants.concat([variant])];
    }, [[], []]);
    return [targetNode.name, ...(0, _inferenceUtils.getTypesFromVariants)(refinementedVariants, alternateVariants, typeScope)];
  }
}

function refinementProperty(variableName, variableType, propertyName, refinementNode, currentPropertyNameIndex, chainingProperties, typeScope) {
  const currentPropertyName = chainingProperties[currentPropertyNameIndex];
  const isLast = currentPropertyNameIndex === chainingProperties.length - 1;

  if (variableType instanceof _objectType.ObjectType) {
    const property = variableType.properties.get(currentPropertyName);

    if (property === undefined) {
      return;
    }

    if (isLast) {
      if (!(property.type instanceof _unionType.UnionType) && !(property.type instanceof _objectType.ObjectType)) {
        throw new _errors2.default(`Property have not "${propertyName}" property or always have property "${propertyName}"`, refinementNode.loc);
      }

      if (property.type instanceof _objectType.ObjectType) {
        return property.type.getPropertyType(propertyName) ? [property.type, undefined] : [undefined, property.type];
      }

      const [refinementedVariants, alternateVariants] = property.type.variants.reduce(([refinementedVariants, alternateVariants], variant) => variant instanceof _objectType.ObjectType && variant.getPropertyType(propertyName) ? [refinementedVariants.concat([variant]), alternateVariants] : [refinementedVariants, alternateVariants.concat([variant])], [[], []]);
      const refinement = (0, _inferenceUtils.getTypesFromVariants)(refinementedVariants, alternateVariants, typeScope);
      return (0, _inferenceUtils.mergeRefinementsVariants)(refinement[0], refinement[1], new _variableInfo.VariableInfo(_objectType.ObjectType.term("{ }", {}, []), property.parent, property.meta), currentPropertyName, typeScope);
    }

    return refinementProperty(variableName, property.type, propertyName, refinementNode, currentPropertyNameIndex + 1, chainingProperties, typeScope);
  }

  if (variableType instanceof _unionType.UnionType) {
    const [refinementedVariants, alternateVariants] = variableType.variants.reduce(([refinementedVariants, alternateVariants], variant) => {
      const isNotAlternateVariant = variant instanceof _objectType.ObjectType && variant.getPropertyType(currentPropertyName);
      const refinementedTypeAndAlternateType = isNotAlternateVariant ? refinementProperty(variableName, variant, propertyName, refinementNode, currentPropertyNameIndex, chainingProperties, typeScope) : undefined;

      if (!refinementedTypeAndAlternateType) {
        return [refinementedVariants, alternateVariants.concat([variant])];
      }

      const [refinementedType, alternateType] = refinementedTypeAndAlternateType;
      return [refinementedType ? refinementedVariants.concat([(0, _typeUtils.mergeObjectsTypes)(variant, (0, _typeUtils.createObjectWith)(currentPropertyName, refinementedType, typeScope), typeScope)]) : refinementedVariants, alternateType ? alternateVariants.concat([(0, _typeUtils.mergeObjectsTypes)(variant, (0, _typeUtils.createObjectWith)(currentPropertyName, alternateType, typeScope), typeScope)]) : alternateVariants];
    }, [[], []]);
    return (0, _inferenceUtils.getTypesFromVariants)(refinementedVariants, alternateVariants, typeScope);
  }
}

function inProperty(targetNode, currentScope, typeScope, propertyName, refinementNode) {
  const targetObject = (0, _common.getMemberExressionTarget)(targetNode);

  if (targetObject.type !== _nodes2.default.IDENTIFIER) {
    return;
  }

  const variableName = targetObject.name;
  const propertiesChaining = (0, _inferenceUtils.getPropertyChaining)(targetNode);
  const targetVariableInfo = currentScope.findVariable(targetObject);

  if (!variableName || !targetVariableInfo || !propertiesChaining || targetVariableInfo instanceof _variableScope.VariableScope) {
    return;
  }

  const refinmentedAndAlternate = refinementProperty(variableName, targetVariableInfo.type, propertyName, refinementNode, 0, propertiesChaining, typeScope);

  if (!refinmentedAndAlternate || !refinmentedAndAlternate[0] || !refinmentedAndAlternate[1]) {
    throw new _errors2.default(`Property have not "${propertyName}" property or always have property "${propertyName}"`, refinementNode.loc);
  }

  return [variableName, refinmentedAndAlternate[0], refinmentedAndAlternate[1]];
}

function inRefinement(currentRefinementNode, currentScope, typeScope, moduleScope) {
  if (currentRefinementNode.left.type !== _nodes2.default.STRING_LITERAL || currentRefinementNode.right.type !== _nodes2.default.IDENTIFIER && currentRefinementNode.right.type !== _nodes2.default.MEMBER_EXPRESSION) {
    return;
  }

  const {
    left: propertyNameNode,
    right: targetNode
  } = currentRefinementNode;
  const propertyName = propertyNameNode.value;
  let refinementedType, alternateType, name;

  if (currentRefinementNode.right.type === _nodes2.default.IDENTIFIER) {
    const result = inIdentifier(currentRefinementNode.right, currentScope, typeScope, propertyName, currentRefinementNode);

    if (!result) {
      return;
    }

    [name, refinementedType, alternateType] = result;
  }

  if (currentRefinementNode.right.type === _nodes2.default.MEMBER_EXPRESSION) {
    const result = inProperty(currentRefinementNode.right, currentScope, typeScope, propertyName, currentRefinementNode);

    if (!result) {
      return;
    }

    [name, refinementedType, alternateType] = result;
  }

  return name && refinementedType && alternateType ? [name, refinementedType, alternateType] : undefined;
}

/***/ }),

/***/ "../node_modules/@hegel/core/inference/index.js":
/*!******************************************************!*\
  !*** ../node_modules/@hegel/core/inference/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inferenceTypeForNode = inferenceTypeForNode;

var _nodes = __webpack_require__(/*! ../utils/nodes */ "../node_modules/@hegel/core/utils/nodes.js");

var _nodes2 = _interopRequireDefault(_nodes);

var _type = __webpack_require__(/*! ../type-graph/types/type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _typeScope = __webpack_require__(/*! ../type-graph/type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

var _constants = __webpack_require__(/*! ../type-graph/constants */ "../node_modules/@hegel/core/type-graph/constants.js");

var _moduleScope = __webpack_require__(/*! ../type-graph/module-scope */ "../node_modules/@hegel/core/type-graph/module-scope.js");

var _variableInfo = __webpack_require__(/*! ../type-graph/variable-info */ "../node_modules/@hegel/core/type-graph/variable-info.js");

var _variableScope = __webpack_require__(/*! ../type-graph/variable-scope */ "../node_modules/@hegel/core/type-graph/variable-scope.js");

var _immutableType = __webpack_require__(/*! ../type-graph/types/immutable-type */ "../node_modules/@hegel/core/type-graph/types/immutable-type.js");

var _tupleType = __webpack_require__(/*! ./tuple-type */ "../node_modules/@hegel/core/inference/tuple-type.js");

var _functionType = __webpack_require__(/*! ./function-type */ "../node_modules/@hegel/core/inference/function-type.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inferenceTypeForNode(currentNode, typeScope, parentScope, typeGraph, parentNode, pre, middle, post, isTypeDefinitions = false, isImmutable = false) {
  let result = null;

  switch (currentNode.type) {
    case _nodes2.default.NUMERIC_LITERAL:
      result = _type.Type.term(currentNode.value, {
        isSubtypeOf: _type.Type.Number
      });
      break;

    case _nodes2.default.BIGINT_LITERAL:
      result = _type.Type.term(`${currentNode.value}n`, {
        isSubtypeOf: _type.Type.BigInt
      });
      break;

    case _nodes2.default.TEMPLATE_LITERAL:
      result = _type.Type.String;
      break;

    case _nodes2.default.STRING_LITERAL:
      result = _type.Type.term(`'${currentNode.value}'`, {
        isSubtypeOf: _type.Type.String
      });
      break;

    case _nodes2.default.BOOLEAN_LITERAL:
      result = _type.Type.term(currentNode.value, {
        isSubtypeOf: _type.Type.Boolean
      });
      break;

    case _nodes2.default.NULL_LITERAL:
      result = _type.Type.Null;
      break;

    case _nodes2.default.REG_EXP_LITERAL:
      result = _type.Type.find("RegExp");
      break;

    case _nodes2.default.ARRAY_EXPRESSION:
      result = (0, _tupleType.inferenceTupleType)(currentNode, typeScope, parentScope, typeGraph, parentNode, pre, middle, post);
      break;

    case _nodes2.default.OBJECT_EXPRESSION:
    case _nodes2.default.CLASS_EXPRESSION:
      const objectScope = typeGraph.scopes.get(_variableScope.VariableScope.getName(currentNode));

      if (objectScope === undefined) {
        throw new Error("Never!!!");
      }

      const self = objectScope.type === _variableScope.VariableScope.OBJECT_TYPE ? objectScope.body.get(_constants.THIS_TYPE) : objectScope.declaration;

      if (!(self instanceof _variableInfo.VariableInfo)) {
        throw new Error("Never!!!");
      }

      result = self.type;
      break;

    case _nodes2.default.OBJECT_METHOD:
    case _nodes2.default.CLASS_METHOD:
    case _nodes2.default.FUNCTION_DECLARATION:
    case _nodes2.default.TS_DECLARE_METHOD:
    case _nodes2.default.FUNCTION_EXPRESSION:
    case _nodes2.default.ARROW_FUNCTION_EXPRESSION:
    case _nodes2.default.TS_FUNCTION_DECLARATION:
      result = (0, _functionType.inferenceFunctionLiteralType)(currentNode, typeScope, parentScope, typeGraph, isTypeDefinitions, parentNode, pre, middle, post);
      break;

    case _nodes2.default.IDENTIFIER:
    case _nodes2.default.THIS_EXPRESSION:
      const query = { ...currentNode,
        name: currentNode.name || _constants.THIS_TYPE
      };
      const variableInfo = parentScope.findVariable(query);
      result = variableInfo.type;
      break;
  }

  if (isImmutable && result !== null && currentNode.type !== _nodes2.default.IDENTIFIER && currentNode.type !== _nodes2.default.THIS_EXPRESSION) {
    result = _immutableType.$AppliedImmutable.term(null, {}, result);
  }

  if (result) {
    return result;
  }

  throw new Error(currentNode.type);
}

/***/ }),

/***/ "../node_modules/@hegel/core/inference/instanceof.js":
/*!***********************************************************!*\
  !*** ../node_modules/@hegel/core/inference/instanceof.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.instanceofRefinement = instanceofRefinement;

var _nodes = __webpack_require__(/*! ../utils/nodes */ "../node_modules/@hegel/core/utils/nodes.js");

var _nodes2 = _interopRequireDefault(_nodes);

var _errors = __webpack_require__(/*! ../utils/errors */ "../node_modules/@hegel/core/utils/errors.js");

var _errors2 = _interopRequireDefault(_errors);

var _type = __webpack_require__(/*! ../type-graph/types/type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _typeScope = __webpack_require__(/*! ../type-graph/type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

var _unionType = __webpack_require__(/*! ../type-graph/types/union-type */ "../node_modules/@hegel/core/type-graph/types/union-type.js");

var _objectType = __webpack_require__(/*! ../type-graph/types/object-type */ "../node_modules/@hegel/core/type-graph/types/object-type.js");

var _variableScope = __webpack_require__(/*! ../type-graph/variable-scope */ "../node_modules/@hegel/core/type-graph/variable-scope.js");

var _common = __webpack_require__(/*! ../utils/common */ "../node_modules/@hegel/core/utils/common.js");

var _inferenceUtils = __webpack_require__(/*! ../utils/inference-utils */ "../node_modules/@hegel/core/utils/inference-utils.js");

var _typeUtils = __webpack_require__(/*! ../utils/type-utils */ "../node_modules/@hegel/core/utils/type-utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function instanceofIdentifier(targetNode, constructor, currentScope, typeScope, refinementNode) {
  const variable = currentScope.findVariable(targetNode);
  const type = variable.type;

  if (!(type instanceof _unionType.UnionType) && type !== _type.Type.Unknown) {
    throw new _errors2.default(`Type "${String(type.name)}" never or always instance of "${String(constructor.name)}"`, targetNode.loc);
  }

  if (type === _type.Type.Unknown) {
    return [targetNode.name, constructor, type];
  } // $FlowIssue


  const [refinementedVariants, alternateVariants] = type.variants.reduce(([refinementedVariants, alternateVariants], variant) => constructor.isPrincipalTypeFor(variant) ? [refinementedVariants.concat([variant]), alternateVariants] : [refinementedVariants, alternateVariants.concat([variant])], [[], []]);
  return [targetNode.name, ...(0, _inferenceUtils.getTypesFromVariants)(refinementedVariants, alternateVariants, typeScope)];
}

function refinementProperty(variableName, variableType, constructor, refinementNode, currentPropertyNameIndex, chainingProperties, typeScope) {
  const currentPropertyName = chainingProperties[currentPropertyNameIndex];
  const isLast = currentPropertyNameIndex === chainingProperties.length - 1;

  if (variableType instanceof _objectType.ObjectType) {
    const property = variableType.properties.get(currentPropertyName);

    if (property === undefined) {
      return;
    }

    if (isLast) {
      if (!(property.type instanceof _unionType.UnionType)) {
        return constructor.isPrincipalTypeFor(property.type) ? [property.type, undefined] : [undefined, property.type];
      }

      const [refinementedVariants, alternateVariants] = property.type.variants.reduce(([refinementedVariants, alternateVariants], variant) => {
        const refinmentedProperty = variant instanceof _objectType.ObjectType ? variant.properties.get(currentPropertyName) : undefined;
        return refinmentedProperty && constructor.isSuperTypeFor(refinementProperty.type) ? [refinementedVariants.concat([variant]), alternateVariants] : [refinementedVariants, alternateVariants.concat([variant])];
      }, [[], []]);
      return (0, _inferenceUtils.getTypesFromVariants)(refinementedVariants, alternateVariants, typeScope);
    }

    return refinementProperty(variableName, property.type, constructor, refinementNode, currentPropertyNameIndex + 1, chainingProperties, typeScope);
  }

  if (variableType instanceof _unionType.UnionType) {
    const [refinementedVariants, alternateVariants] = variableType.variants.reduce(([refinementedVariants, alternateVariants], variant) => {
      const isNotAlternateVariant = variant instanceof _objectType.ObjectType && variant.getPropertyType(currentPropertyName);
      const refinementedTypeAndAlternateType = isNotAlternateVariant ? refinementProperty(variableName, variant, constructor, refinementNode, currentPropertyNameIndex, chainingProperties, typeScope) : undefined;

      if (!refinementedTypeAndAlternateType) {
        return [refinementedVariants, alternateVariants.concat([variant])];
      }

      const [refinementedType, alternateType] = refinementedTypeAndAlternateType;
      return [refinementedType ? refinementedVariants.concat([(0, _typeUtils.mergeObjectsTypes)(variant, (0, _typeUtils.createObjectWith)(currentPropertyName, refinementedType, typeScope), typeScope)]) : refinementedVariants, alternateType ? alternateVariants.concat([(0, _typeUtils.mergeObjectsTypes)(variant, (0, _typeUtils.createObjectWith)(currentPropertyName, alternateType, typeScope), typeScope)]) : alternateVariants];
    }, [[], []]);
    return (0, _inferenceUtils.getTypesFromVariants)(refinementedVariants, alternateVariants, typeScope);
  }
}

function instanceofProperty(targetNode, constructor, currentScope, typeScope, refinementNode) {
  const targetObject = (0, _common.getMemberExressionTarget)(targetNode);

  if (targetObject.type !== _nodes2.default.IDENTIFIER) {
    return;
  }

  const variableName = targetObject.name;
  const propertiesChaining = (0, _inferenceUtils.getPropertyChaining)(targetNode);
  const targetVariableInfo = currentScope.findVariable(targetObject);

  if (!variableName || !targetVariableInfo || !propertiesChaining || targetVariableInfo instanceof _variableScope.VariableScope) {
    return;
  }

  const refinmentedAndAlternate = refinementProperty(variableName, targetVariableInfo.type, constructor, refinementNode, 0, propertiesChaining, typeScope);

  if (!refinmentedAndAlternate || !refinmentedAndAlternate[0] || !refinmentedAndAlternate[1]) {
    throw new _errors2.default(`Property never or always be instance of "${refinementNode.right.name}"`, refinementNode.loc);
  }

  return [variableName, refinmentedAndAlternate[0], refinmentedAndAlternate[1]];
}

function instanceofRefinement(currentRefinementNode, currentScope, typeScope, moduleScope) {
  const {
    left: target,
    right: constructorNode
  } = currentRefinementNode;

  if (target.type !== _nodes2.default.IDENTIFIER && target.type !== _nodes2.default.MEMBER_EXPRESSION || constructorNode.type !== _nodes2.default.IDENTIFIER) {
    return;
  }

  const constructor = currentScope.findVariable(constructorNode);

  if (!(constructor.type instanceof _objectType.ObjectType && constructor.type.instanceType !== null)) {
    throw new _errors2.default("Cannot apply instanceof to non-class type", constructorNode.loc);
  }

  const instanceType = constructor.type.instanceType;
  let refinementedType, alternateType, name;

  if (target.type === _nodes2.default.IDENTIFIER) {
    [name, refinementedType, alternateType] = instanceofIdentifier(target, instanceType, currentScope, typeScope, currentRefinementNode);
  }

  if (target.type === _nodes2.default.MEMBER_EXPRESSION) {
    const result = instanceofProperty(target, instanceType, currentScope, typeScope, currentRefinementNode);

    if (!result) {
      return;
    }

    [name, refinementedType, alternateType] = result;
  }

  return name && refinementedType && alternateType ? [name, refinementedType, alternateType] : undefined;
}

/***/ }),

/***/ "../node_modules/@hegel/core/inference/refinement.js":
/*!***********************************************************!*\
  !*** ../node_modules/@hegel/core/inference/refinement.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refinement = refinement;

var _nodes = __webpack_require__(/*! ../utils/nodes */ "../node_modules/@hegel/core/utils/nodes.js");

var _nodes2 = _interopRequireDefault(_nodes);

var _type = __webpack_require__(/*! ../type-graph/types/type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _typeScope = __webpack_require__(/*! ../type-graph/type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

var _unionType = __webpack_require__(/*! ../type-graph/types/union-type */ "../node_modules/@hegel/core/type-graph/types/union-type.js");

var _moduleScope = __webpack_require__(/*! ../type-graph/module-scope */ "../node_modules/@hegel/core/type-graph/module-scope.js");

var _variableInfo = __webpack_require__(/*! ../type-graph/variable-info */ "../node_modules/@hegel/core/type-graph/variable-info.js");

var _variableScope = __webpack_require__(/*! ../type-graph/variable-scope */ "../node_modules/@hegel/core/type-graph/variable-scope.js");

var _inOperator = __webpack_require__(/*! ./in-operator */ "../node_modules/@hegel/core/inference/in-operator.js");

var _typeof = __webpack_require__(/*! ./typeof */ "../node_modules/@hegel/core/inference/typeof.js");

var _variableRefinement = __webpack_require__(/*! ./variable-refinement */ "../node_modules/@hegel/core/inference/variable-refinement.js");

var _common = __webpack_require__(/*! ../utils/common */ "../node_modules/@hegel/core/utils/common.js");

var _instanceof = __webpack_require__(/*! ./instanceof */ "../node_modules/@hegel/core/inference/instanceof.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getScopesForLogicalExpression(condition, currentScope, moduleScope) {
  const primaryScopeName = _variableScope.VariableScope.getName({
    loc: {
      start: condition.loc.end
    }
  }); // $FlowIssue


  let primaryScope = moduleScope.scopes.get(primaryScopeName);

  if (!(primaryScope instanceof _variableScope.VariableScope)) {
    primaryScope = new _variableScope.VariableScope(_variableScope.VariableScope.BLOCK_TYPE, currentScope);
    moduleScope.scopes.set(primaryScopeName, primaryScope);
  }

  const alternateScopeName = _variableScope.VariableScope.getName({
    loc: {
      start: condition.loc.start
    }
  }); // $FlowIssue


  let alternateScope = moduleScope.scopes.get(alternateScopeName);

  if (!(alternateScope instanceof _variableScope.VariableScope)) {
    alternateScope = new _variableScope.VariableScope(_variableScope.VariableScope.BLOCK_TYPE, currentScope);
    moduleScope.scopes.set(alternateScopeName, alternateScope);
  }

  return condition.operator === "&&" ? [primaryScope, alternateScope] : [alternateScope, primaryScope];
}

function getScopesForConditionalExpression(condition, currentScope, moduleScope) {
  const primaryScopeName = _variableScope.VariableScope.getName({
    loc: {
      start: condition.loc.start
    }
  }); // $FlowIssue


  let primaryScope = moduleScope.scopes.get(primaryScopeName);

  if (!(primaryScope instanceof _variableScope.VariableScope)) {
    primaryScope = new _variableScope.VariableScope(_variableScope.VariableScope.BLOCK_TYPE, currentScope);
    moduleScope.scopes.set(primaryScopeName, primaryScope);
  }

  const alternateScopeName = _variableScope.VariableScope.getName({
    loc: {
      start: condition.loc.end
    }
  }); // $FlowIssue


  let alternateScope = moduleScope.scopes.get(alternateScopeName);

  if (!(alternateScope instanceof _variableScope.VariableScope)) {
    alternateScope = new _variableScope.VariableScope(_variableScope.VariableScope.BLOCK_TYPE, currentScope);
    moduleScope.scopes.set(alternateScopeName, alternateScope);
  }

  return [primaryScope, alternateScope];
}

function getPrimaryAndAlternativeScopes(currentRefinementNode, currentScope, typeScope, moduleScope) {
  let primaryScope;
  let alternateScope;

  switch (currentRefinementNode.type) {
    case _nodes2.default.IF_STATEMENT:
      primaryScope = moduleScope.scopes.get(_variableScope.VariableScope.getName(currentRefinementNode.consequent));
      alternateScope = currentRefinementNode.alternate && moduleScope.scopes.get(_variableScope.VariableScope.getName(currentRefinementNode.alternate));
      break;

    case _nodes2.default.WHILE_STATEMENT:
    case _nodes2.default.DO_WHILE_STATEMENT:
    case _nodes2.default.FOR_STATEMENT:
      primaryScope = moduleScope.scopes.get(_variableScope.VariableScope.getName(currentRefinementNode.body));
      break;

    case _nodes2.default.LOGICAL_EXPRESSION:
      [primaryScope, alternateScope] = getScopesForLogicalExpression(currentRefinementNode, currentScope, moduleScope);
      break;

    case _nodes2.default.CONDITIONAL_EXPRESSION:
      [primaryScope, alternateScope] = getScopesForConditionalExpression(currentRefinementNode, currentScope, moduleScope);
      break;
  }

  if (!primaryScope || primaryScope instanceof _variableInfo.VariableInfo || alternateScope instanceof _variableInfo.VariableInfo) {
    throw new Error("Never!");
  }

  return [primaryScope, alternateScope];
}

function getCondition(currentRefinementNode) {
  switch (currentRefinementNode.type) {
    case _nodes2.default.IF_STATEMENT:
    case _nodes2.default.CONDITIONAL_EXPRESSION:
    case _nodes2.default.WHILE_STATEMENT:
    case _nodes2.default.DO_WHILE_STATEMENT:
    case _nodes2.default.FOR_STATEMENT:
      return currentRefinementNode.test;

    case _nodes2.default.LOGICAL_EXPRESSION:
      return currentRefinementNode;
  }
}

function intersectionOfTypes(type1, type2, typeScope) {
  if (type1 instanceof _unionType.UnionType && type2 instanceof _unionType.UnionType) {
    const intersectedVariants = (0, _common.intersection)(type1.variants, type2.variants, (a, b) => a.equalsTo(b))[0];
    return _unionType.UnionType.term(_unionType.UnionType.getName(intersectedVariants), {}, intersectedVariants);
  }

  if (type1 instanceof _unionType.UnionType || type2 instanceof _unionType.UnionType) {
    // $FlowIssue
    const [unionType, notUnion] = type1 instanceof _unionType.UnionType ? [type1, type2] : [type2, type1]; // $FlowIssue

    const isTypeExisting = unionType.variants.some(t => t.equalsTo(notUnion));
    return isTypeExisting ? notUnion : _type.Type.Never;
  }

  return type1;
}

function unionOfTypes(type1, type2, typeScope) {
  if (type1 instanceof _unionType.UnionType && type2 instanceof _unionType.UnionType) {
    const unionVariants = (0, _common.union)(type1.variants, type2.variants, (a, b) => a.equalsTo(b));
    return _unionType.UnionType.term(_unionType.UnionType.getName(unionVariants), {}, unionVariants);
  }

  if (type1 instanceof _unionType.UnionType || type2 instanceof _unionType.UnionType) {
    const [unionType, notUnion] = type1 instanceof _unionType.UnionType ? [type1, type2] : [type2, type1];
    const newVariants = (0, _common.union)( // $FlowIssue
    unionType.variants, [notUnion], (a, b) => a.equalsTo(b));
    return _unionType.UnionType.term(_unionType.UnionType.getName(newVariants), {}, newVariants);
  }

  if (type1.isPrincipalTypeFor(type2)) {
    return type1;
  }

  if (type2.isPrincipalTypeFor(type1)) {
    return type2;
  }

  const variants = [type1, type2];
  return _unionType.UnionType.term(_unionType.UnionType.getName(variants), {}, variants);
}

function getRefinementByBinaryExpression(binaryExpression, currentScope, typeScope, moduleScope) {
  switch (binaryExpression.operator) {
    case "==":
    case "!=":
    case "===":
    case "!==":
      return (0, _typeof.typeofRefinement)(binaryExpression, currentScope, typeScope, moduleScope);

    case "in":
      return (0, _inOperator.inRefinement)(binaryExpression, currentScope, typeScope, moduleScope);

    case "instanceof":
      return (0, _instanceof.instanceofRefinement)(binaryExpression, currentScope, typeScope, moduleScope);
  }
}

function refinementByCondition(condition, currentScope, typeScope, moduleScope) {
  switch (condition.type) {
    case _nodes2.default.UNARY_EXPRESSION:
      if (condition.operator === "!") {
        const refinements = refinementByCondition(condition.argument, currentScope, typeScope, moduleScope);
        return refinements && refinements.map(refinement => refinement && [refinement[0], refinement[2], refinement[1]]);
      }

    case _nodes2.default.BINARY_EXPRESSION:
      const typeofResult = getRefinementByBinaryExpression(condition, currentScope, typeScope, moduleScope);
      return typeofResult && [typeofResult];

    case _nodes2.default.IDENTIFIER:
    case _nodes2.default.MEMBER_EXPRESSION:
      const refinemented = (0, _variableRefinement.variableRefinement)(condition, currentScope, typeScope, moduleScope);
      return refinemented && [refinemented];

    case _nodes2.default.LOGICAL_EXPRESSION:
      const [additionalPrimaryScope, additionalAlternateScope] = getScopesForLogicalExpression(condition, currentScope, moduleScope);
      const leftSideRefinement = refinementByCondition(condition.left.body || condition.left, currentScope, typeScope, moduleScope);

      if (leftSideRefinement) {
        leftSideRefinement.forEach(([key, refinement, alternate]) => {
          if (refinement !== undefined) {
            additionalPrimaryScope.body.set(key, new _variableInfo.VariableInfo(refinement, additionalPrimaryScope));
          }

          if (alternate !== undefined) {
            additionalAlternateScope.body.set(key, new _variableInfo.VariableInfo(alternate, additionalAlternateScope));
          }
        });
      }

      const rightSideRefinement = refinementByCondition(condition.right.body || condition.right, condition.operator === "||" ? additionalAlternateScope : additionalPrimaryScope, typeScope, moduleScope);

      if (!leftSideRefinement || !rightSideRefinement) {
        return condition.operator === "&&" ? leftSideRefinement : rightSideRefinement;
      }

      const [sameRefinement, other] = (0, _common.intersection)(leftSideRefinement, rightSideRefinement, (a, b) => a[0] === b[0]);

      if (sameRefinement.length === 0) {
        return other;
      }

      const sameRefinementVariants = sameRefinement.map(([key, refinementedType, alternateType]) => {
        const sameRefinement = leftSideRefinement.find(a => a[0] === key);

        if (condition.operator === "||") {
          return [key, unionOfTypes(refinementedType, sameRefinement[1], typeScope), intersectionOfTypes(alternateType, sameRefinement[2], typeScope)];
        }

        if (condition.operator === "&&") {
          return [key, intersectionOfTypes(refinementedType, sameRefinement[1], typeScope), unionOfTypes(alternateType, sameRefinement[2], typeScope)];
        }

        return [key, refinementedType, alternateType];
      });
      return sameRefinementVariants.concat(other);
  }
}

function refinement(currentRefinementNode, currentScope, typeScope, moduleScope) {
  if (currentRefinementNode.isRefinemented) {
    return;
  }

  const [primaryScope, alternateScope] = getPrimaryAndAlternativeScopes(currentRefinementNode, currentScope, typeScope, moduleScope);
  const condition = getCondition(currentRefinementNode);

  if (condition == undefined) {
    return;
  }

  const currentRefinements = refinementByCondition(condition, currentScope, typeScope, moduleScope);

  if (!currentRefinements) {
    return;
  }

  currentRefinements.forEach(refinement => {
    const [varName, refinementedType, alternateType] = refinement;
    primaryScope.body.set(varName, new _variableInfo.VariableInfo(refinementedType));

    if (alternateType && alternateScope) {
      alternateScope.body.set(varName, new _variableInfo.VariableInfo(alternateType));
    }
  });
}

/***/ }),

/***/ "../node_modules/@hegel/core/inference/tuple-type.js":
/*!***********************************************************!*\
  !*** ../node_modules/@hegel/core/inference/tuple-type.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inferenceTupleType = inferenceTupleType;

var _type = __webpack_require__(/*! ../type-graph/types/type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _tupleType = __webpack_require__(/*! ../type-graph/types/tuple-type */ "../node_modules/@hegel/core/type-graph/types/tuple-type.js");

var _moduleScope = __webpack_require__(/*! ../type-graph/module-scope */ "../node_modules/@hegel/core/type-graph/module-scope.js");

var _variableScope = __webpack_require__(/*! ../type-graph/variable-scope */ "../node_modules/@hegel/core/type-graph/variable-scope.js");

var _call = __webpack_require__(/*! ../type-graph/call */ "../node_modules/@hegel/core/type-graph/call.js");

function inferenceTupleType(currentNode, typeScope, parentScope, typeGraph, parentNode, pre, middle, post) {
  const items = currentNode.elements.map(a => {
    if (a === null) {
      return _type.Type.Undefined;
    }

    const {
      result
    } = (0, _call.addCallToTypeGraph)(a, typeGraph, parentScope, parentNode, pre, middle, post);
    return result instanceof _type.Type ? result : result.type;
  });
  return _tupleType.TupleType.term(null, {}, items);
}

/***/ }),

/***/ "../node_modules/@hegel/core/inference/typeof.js":
/*!*******************************************************!*\
  !*** ../node_modules/@hegel/core/inference/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeofRefinement = typeofRefinement;

var _nodes = __webpack_require__(/*! ../utils/nodes */ "../node_modules/@hegel/core/utils/nodes.js");

var _nodes2 = _interopRequireDefault(_nodes);

var _errors = __webpack_require__(/*! ../utils/errors */ "../node_modules/@hegel/core/utils/errors.js");

var _errors2 = _interopRequireDefault(_errors);

var _type = __webpack_require__(/*! ../type-graph/types/type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _typeVar = __webpack_require__(/*! ../type-graph/types/type-var */ "../node_modules/@hegel/core/type-graph/types/type-var.js");

var _typeScope = __webpack_require__(/*! ../type-graph/type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

var _unionType = __webpack_require__(/*! ../type-graph/types/union-type */ "../node_modules/@hegel/core/type-graph/types/union-type.js");

var _objectType = __webpack_require__(/*! ../type-graph/types/object-type */ "../node_modules/@hegel/core/type-graph/types/object-type.js");

var _functionType = __webpack_require__(/*! ../type-graph/types/function-type */ "../node_modules/@hegel/core/type-graph/types/function-type.js");

var _variableScope = __webpack_require__(/*! ../type-graph/variable-scope */ "../node_modules/@hegel/core/type-graph/variable-scope.js");

var _common = __webpack_require__(/*! ../utils/common */ "../node_modules/@hegel/core/utils/common.js");

var _equalsRefinement = __webpack_require__(/*! ./equals-refinement */ "../node_modules/@hegel/core/inference/equals-refinement.js");

var _inferenceUtils = __webpack_require__(/*! ../utils/inference-utils */ "../node_modules/@hegel/core/utils/inference-utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isEqualOperator(node) {
  return node.type === _nodes2.default.BINARY_EXPRESSION && (node.operator === "===" || node.operator === "==" || node.operator === "!==" || node.operator === "!=");
}

function isTypeofOperator(node) {
  return node.type === _nodes2.default.UNARY_EXPRESSION && node.operator === "typeof";
}

function isReturnTypeOfTypeof(node) {
  return node.type === _nodes2.default.STRING_LITERAL;
}

function getTypeofAndLiteral(left, right, typeofOperator) {
  let typeofNode = null;

  if (isTypeofOperator(left)) {
    typeofNode = left;
  } else if (isTypeofOperator(right)) {
    typeofNode = right;
  }

  let stringNode = null;

  if (isReturnTypeOfTypeof(left)) {
    stringNode = left;
  } else if (isReturnTypeOfTypeof(right)) {
    stringNode = right;
  }

  if (!typeofNode || !stringNode) {
    return null;
  }

  return {
    typeofNode,
    stringNode
  };
}

function getRefinmentType(stringNode) {
  switch (stringNode.value) {
    case "number":
      return _type.Type.Number;

    case "string":
      return _type.Type.String;

    case "boolean":
      return _type.Type.Boolean;

    case "bigint":
      return _type.Type.BigInt;

    case "undefined":
      return _type.Type.Undefined;

    case "function":
      return _functionType.FunctionType.Function;

    case "object":
      return _unionType.UnionType.term("Object | null", {}, [_objectType.ObjectType.Object, _type.Type.Null]);
  }

  throw new _errors2.default(`Typeof cannot return "${stringNode.value}" value`, stringNode.loc);
}

function typeofIdentifier(node, currentScope, typeScope, stringNode, refinementNode) {
  const variableName = node.name;
  const refinementType = getRefinmentType(stringNode);
  const variableInfo = currentScope.findVariable(node);
  const [refinementedVariants, alternateVariants] = variableInfo.type instanceof _unionType.UnionType ? variableInfo.type.variants.reduce(([refinementedVariants, alternateVariants], variant) => refinementType.isPrincipalTypeFor(variant) ? [refinementedVariants.concat([variant]), alternateVariants] : [refinementedVariants, alternateVariants.concat([variant])], [[], []]) : [[], []];

  if (!(variableInfo.type instanceof _typeVar.TypeVar) && refinementedVariants.length === 0) {
    throw new _errors2.default(`Type ${String(variableInfo.type.name)} can't be "${stringNode.value}" type`, refinementNode.loc);
  }

  let refinementedType;
  let alternateType;

  if (variableInfo.type instanceof _unionType.UnionType) {
    refinementedType = _unionType.UnionType.term(null, {}, refinementedVariants);
    alternateType = _unionType.UnionType.term(null, {}, alternateVariants);
  } else {
    refinementedType = refinementType;
    alternateType = variableInfo.type;
  }

  return [variableName, refinementedType, alternateType];
}

function typeofProperty(node, currentScope, typeScope, stringNode, refinementNode) {
  const targetObject = (0, _common.getMemberExressionTarget)(node);

  if (targetObject.type !== _nodes2.default.IDENTIFIER) {
    return;
  }

  const variableName = targetObject.name;
  const propertiesChaining = (0, _inferenceUtils.getPropertyChaining)(node);
  const refinementType = getRefinmentType(stringNode);
  const targetVariableInfo = currentScope.findVariable(targetObject);

  if (!variableName || !propertiesChaining) {
    return;
  }

  const refinmentedAndAlternate = (0, _equalsRefinement.refinementProperty)(variableName, targetVariableInfo.type, refinementType, refinementNode, 0, propertiesChaining, typeScope);

  if (!refinmentedAndAlternate || !refinmentedAndAlternate[0] || !refinmentedAndAlternate[1]) {
    throw new _errors2.default(`Property can't be "${stringNode.value}" type or always have type "${stringNode.value}"`, refinementNode.loc);
  }

  return [variableName, refinmentedAndAlternate[0], refinmentedAndAlternate[1]];
}

function typeofRefinement(currentRefinementNode, currentScope, typeScope, moduleScope) {
  const typeofOperator = moduleScope.findVariable({
    name: "typeof"
  });

  if (!isEqualOperator(currentRefinementNode)) {
    return;
  }

  const args = getTypeofAndLiteral(currentRefinementNode.left, currentRefinementNode.right, typeofOperator);

  if (!args) {
    return (0, _equalsRefinement.equalsRefinement)(currentRefinementNode, currentScope, typeScope, moduleScope);
  }

  const {
    typeofNode,
    stringNode
  } = args;
  let refinementedType, alternateType, name;

  if (typeofNode.argument.type === _nodes2.default.IDENTIFIER) {
    [name, refinementedType, alternateType] = typeofIdentifier(typeofNode.argument, currentScope, typeScope, stringNode, currentRefinementNode);
  }

  if (typeofNode.argument.type === _nodes2.default.MEMBER_EXPRESSION) {
    const result = typeofProperty(typeofNode.argument, currentScope, typeScope, stringNode, currentRefinementNode);

    if (!result) {
      return;
    }

    [name, refinementedType, alternateType] = result;
  }

  if (refinementedType) {
    if (currentRefinementNode.operator === "!==" || currentRefinementNode.operator === "!=") {
      // $FlowIssue
      return [name, alternateType, refinementedType];
    } // $FlowIssue


    return [name, refinementedType, alternateType];
  }
}

/***/ }),

/***/ "../node_modules/@hegel/core/inference/variable-refinement.js":
/*!********************************************************************!*\
  !*** ../node_modules/@hegel/core/inference/variable-refinement.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.variableRefinement = variableRefinement;

var _nodes = __webpack_require__(/*! ../utils/nodes */ "../node_modules/@hegel/core/utils/nodes.js");

var _nodes2 = _interopRequireDefault(_nodes);

var _errors = __webpack_require__(/*! ../utils/errors */ "../node_modules/@hegel/core/utils/errors.js");

var _errors2 = _interopRequireDefault(_errors);

var _type = __webpack_require__(/*! ../type-graph/types/type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _typeVar = __webpack_require__(/*! ../type-graph/types/type-var */ "../node_modules/@hegel/core/type-graph/types/type-var.js");

var _unionType = __webpack_require__(/*! ../type-graph/types/union-type */ "../node_modules/@hegel/core/type-graph/types/union-type.js");

var _typeUtils = __webpack_require__(/*! ../utils/type-utils */ "../node_modules/@hegel/core/utils/type-utils.js");

var _equalsRefinement = __webpack_require__(/*! ./equals-refinement */ "../node_modules/@hegel/core/inference/equals-refinement.js");

var _inferenceUtils = __webpack_require__(/*! ../utils/inference-utils */ "../node_modules/@hegel/core/utils/inference-utils.js");

var _common = __webpack_require__(/*! ../utils/common */ "../node_modules/@hegel/core/utils/common.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFalsyVariants(type) {
  return (0, _typeUtils.getFalsy)().filter(falsy => type.isPrincipalTypeFor(falsy));
}

function getTruthyVariants(type) {
  if ((0, _typeUtils.isFalsy)(type)) {
    return [];
  }

  if (type === _type.Type.Boolean) {
    return [_type.Type.term(true, {
      isSubtypeOf: _type.Type.Boolean
    })];
  }

  if (type instanceof _unionType.UnionType) {
    return type.variants.filter(variant => !(0, _typeUtils.isFalsy)(variant));
  }

  return [type];
}

function forVariable(node, currentScope, typeScope) {
  const name = node.name;
  const variableInfo = currentScope.findVariable(node);
  const refinementedVariants = getTruthyVariants(variableInfo.type);
  const alternateVariants = getFalsyVariants(variableInfo.type);

  if (!(variableInfo.type instanceof _typeVar.TypeVar) && refinementedVariants.length === 0) {
    return;
  }

  return [name, _unionType.UnionType.term(null, {}, refinementedVariants), _unionType.UnionType.term(null, {}, alternateVariants)];
}

function forProperty(node, currentScope, typeScope) {
  const targetObject = (0, _common.getMemberExressionTarget)(node);

  if (targetObject.type !== _nodes2.default.IDENTIFIER) {
    return;
  }

  const variableName = targetObject.name;
  const propertiesChaining = (0, _inferenceUtils.getPropertyChaining)(node);
  const targetVariableInfo = currentScope.findVariable(targetObject);

  if (!variableName || !propertiesChaining) {
    return;
  }

  const refinementType = _unionType.UnionType.term(null, {}, (0, _typeUtils.getFalsy)());

  const refinmentedAndAlternate = (0, _equalsRefinement.refinementProperty)(variableName, targetVariableInfo.type, refinementType, node, 0, propertiesChaining, typeScope, true);

  if (!refinmentedAndAlternate || !refinmentedAndAlternate[0] || !refinmentedAndAlternate[1]) {
    return;
  }

  return [variableName, refinmentedAndAlternate[1], refinmentedAndAlternate[0]];
}

function variableRefinement(node, currentScope, typeScope, moduleScope) {
  return node.type === _nodes2.default.IDENTIFIER ? forVariable(node, currentScope, typeScope) : forProperty(node, currentScope, typeScope);
}

/***/ }),

/***/ "../node_modules/@hegel/core/type-graph/call.js":
/*!******************************************************!*\
  !*** ../node_modules/@hegel/core/type-graph/call.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCallToTypeGraph = addCallToTypeGraph;
exports.addPropertyToThis = addPropertyToThis;
exports.addMethodToThis = addMethodToThis;

var _nodes = __webpack_require__(/*! ../utils/nodes */ "../node_modules/@hegel/core/utils/nodes.js");

var _nodes2 = _interopRequireDefault(_nodes);

var _errors = __webpack_require__(/*! ../utils/errors */ "../node_modules/@hegel/core/utils/errors.js");

var _errors2 = _interopRequireDefault(_errors);

var _meta = __webpack_require__(/*! ./meta/meta */ "../node_modules/@hegel/core/type-graph/meta/meta.js");

var _type = __webpack_require__(/*! ./types/type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _keysType = __webpack_require__(/*! ./types/keys-type */ "../node_modules/@hegel/core/type-graph/types/keys-type.js");

var _valuesType = __webpack_require__(/*! ./types/values-type */ "../node_modules/@hegel/core/type-graph/types/values-type.js");

var _typeVar = __webpack_require__(/*! ./types/type-var */ "../node_modules/@hegel/core/type-graph/types/type-var.js");

var _callMeta = __webpack_require__(/*! ./meta/call-meta */ "../node_modules/@hegel/core/type-graph/meta/call-meta.js");

var _typeScope = __webpack_require__(/*! ./type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

var _unionType = __webpack_require__(/*! ./types/union-type */ "../node_modules/@hegel/core/type-graph/types/union-type.js");

var _objectType = __webpack_require__(/*! ./types/object-type */ "../node_modules/@hegel/core/type-graph/types/object-type.js");

var _genericType = __webpack_require__(/*! ./types/generic-type */ "../node_modules/@hegel/core/type-graph/types/generic-type.js");

var _bottomType = __webpack_require__(/*! ./types/bottom-type */ "../node_modules/@hegel/core/type-graph/types/bottom-type.js");

var _functionType = __webpack_require__(/*! ./types/function-type */ "../node_modules/@hegel/core/type-graph/types/function-type.js");

var _variableInfo = __webpack_require__(/*! ./variable-info */ "../node_modules/@hegel/core/type-graph/variable-info.js");

var _propertyType = __webpack_require__(/*! ./types/property-type */ "../node_modules/@hegel/core/type-graph/types/property-type.js");

var _variableScope = __webpack_require__(/*! ./variable-scope */ "../node_modules/@hegel/core/type-graph/variable-scope.js");

var _collectionType = __webpack_require__(/*! ../type-graph/types/collection-type */ "../node_modules/@hegel/core/type-graph/types/collection-type.js");

var _throwable = __webpack_require__(/*! ../utils/throwable */ "../node_modules/@hegel/core/utils/throwable.js");

var _functionUtils = __webpack_require__(/*! ../utils/function-utils */ "../node_modules/@hegel/core/utils/function-utils.js");

var _common = __webpack_require__(/*! ../utils/common */ "../node_modules/@hegel/core/utils/common.js");

var _variableUtils = __webpack_require__(/*! ../utils/variable-utils */ "../node_modules/@hegel/core/utils/variable-utils.js");

var _immutableType = __webpack_require__(/*! ./types/immutable-type */ "../node_modules/@hegel/core/type-graph/types/immutable-type.js");

var _inference = __webpack_require__(/*! ../inference */ "../node_modules/@hegel/core/inference/index.js");

var _typeUtils = __webpack_require__(/*! ../utils/type-utils */ "../node_modules/@hegel/core/utils/type-utils.js");

var _moduleScope = __webpack_require__(/*! ./module-scope */ "../node_modules/@hegel/core/type-graph/module-scope.js");

var _constants = __webpack_require__(/*! ./constants */ "../node_modules/@hegel/core/type-graph/constants.js");

var _functionType2 = __webpack_require__(/*! ../inference/function-type */ "../node_modules/@hegel/core/inference/function-type.js");

var _scopeUtils = __webpack_require__(/*! ../utils/scope-utils */ "../node_modules/@hegel/core/utils/scope-utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addCallToTypeGraph(node, moduleScope, currentScope, parentNode, pre, middle, post, meta = {}) {
  let target = null;
  let inferenced = undefined;
  let targetName = "";
  let args = null;
  let argsLocations = [];
  let genericArguments = null;
  const typeScope = (0, _scopeUtils.findNearestTypeScope)(currentScope, moduleScope);
  const withPositions = moduleScope instanceof _moduleScope.PositionedModuleScope;

  if (node == null) {
    return {
      result: _type.Type.Undefined,
      inferenced: false
    };
  }

  if (node.type === _nodes2.default.EXPRESSION_STATEMENT) {
    node = node.expression;
  }

  if (node.type === _nodes2.default.SUPER) {
    node = {
      type: _nodes2.default.IDENTIFIER,
      name: "super",
      loc: node.loc
    };
  }

  switch (node.type) {
    case _nodes2.default.TEMPLATE_LITERAL:
      args = node.expressions.map(expression => addCallToTypeGraph(expression, moduleScope, currentScope, parentNode, pre, middle, post, meta));
      return {
        result: _type.Type.String,
        inferened: false
      };

    case _nodes2.default.IF_STATEMENT:
      target = currentScope.findVariable({
        name: "if",
        loc: node.loc
      });
      args = [addCallToTypeGraph(node.test, moduleScope, currentScope, parentNode, pre, middle, post, meta).result];
      break;

    case _nodes2.default.WHILE_STATEMENT:
      target = currentScope.findVariable({
        name: "while",
        loc: node.loc
      });
      args = [addCallToTypeGraph(node.test, moduleScope, currentScope, parentNode, pre, middle, post, meta).result];
      break;

    case _nodes2.default.DO_WHILE_STATEMENT:
      target = currentScope.findVariable({
        name: "do-while",
        loc: node.loc
      });
      args = [addCallToTypeGraph(node.test, moduleScope, currentScope, parentNode, pre, middle, post, meta).result];
      break;

    case _nodes2.default.FOR_STATEMENT:
      target = currentScope.findVariable({
        name: "for",
        loc: node.loc
      });
      args = [_type.Type.Unknown, node.test ? addCallToTypeGraph(node.test, moduleScope, // $FlowIssue
      moduleScope.scopes.get(_variableScope.VariableScope.getName(node.body)), parentNode, pre, middle, post, meta).result : _type.Type.Undefined, _type.Type.Unknown];
      break;

    case _nodes2.default.FUNCTION_EXPRESSION:
    case _nodes2.default.ARROW_FUNCTION_EXPRESSION:
    case _nodes2.default.IDENTIFIER:
      const nodeName = node.type === _nodes2.default.IDENTIFIER ? node : {
        name: (0, _common.getAnonymousKey)(node),
        loc: node.loc
      };
      const varInfo = currentScope.findVariable(nodeName, parentNode, moduleScope, pre, middle, post);

      if (withPositions && node.type === _nodes2.default.IDENTIFIER) {
        // $FlowIssue
        moduleScope.addPosition(node, varInfo);
      }

      return {
        result: varInfo
      };

    case _nodes2.default.CLASS_PROPERTY:
    case _nodes2.default.OBJECT_PROPERTY:
      const self = currentScope.findVariable({
        name: _constants.THIS_TYPE
      }); // $FlowIssue

      let selfObject = node.static ? // $FlowIssue
      self.parent.declaration.type : self.type;
      selfObject = selfObject instanceof _genericType.GenericType ? selfObject.subordinateType : selfObject;
      const propertyType = selfObject.properties.get(node.key.name || `${node.key.value}`);

      if (propertyType === undefined) {
        throw new Error("Never!!!");
      }

      const value = node.value === null ? {
        result: _type.Type.Undefined,
        inferenced: false
      } : addCallToTypeGraph(node.value, moduleScope, currentScope, parentNode, pre, middle, post, meta);
      inferenced = value.inferenced;
      args = [node.typeAnnotation != null ? propertyType : value.result, value.result];
      targetName = "=";
      target = currentScope.findVariable({
        name: targetName,
        loc: node.loc
      });
      break;

    case _nodes2.default.VARIABLE_DECLARATOR:
      const variableType = currentScope.findVariable(node.id);

      if (withPositions) {
        // $FlowIssue
        moduleScope.addPosition(node.id, variableType);
      }

      const init = node.init === null ? {
        result: _type.Type.Undefined,
        inferenced: false
      } : addCallToTypeGraph(node.init, moduleScope, currentScope, parentNode, pre, middle, post, { ...meta,
        isImmutable: variableType.type instanceof _immutableType.$AppliedImmutable
      });
      inferenced = init.inferenced;
      targetName = "init";
      args = [variableType, init.result];
      target = currentScope.findVariable({
        name: "=",
        loc: node.loc
      }).type;
      target = target instanceof _genericType.GenericType && node.id.typeAnnotation != undefined ? target.applyGeneric([variableType.type]) : target;
      break;

    case _nodes2.default.THROW_STATEMENT:
      const error = addCallToTypeGraph(node.argument, moduleScope, currentScope, parentNode, pre, middle, post, meta);
      args = [(0, _variableUtils.getVariableType)(undefined, error.result instanceof _variableInfo.VariableInfo ? error.result.type : error.result, typeScope, error.inferenced)];
      targetName = "throw";
      target = currentScope.findVariable({
        name: targetName,
        loc: node.loc
      }, parentNode, moduleScope, pre, middle, post);
      (0, _throwable.addToThrowable)(args[0], currentScope);
      break;

    case _nodes2.default.AWAIT_EXPRESSION:
      args = [addCallToTypeGraph(node.argument, moduleScope, currentScope, parentNode, pre, middle, post, meta).result];
      targetName = "await";
      target = currentScope.findVariable({
        name: targetName,
        loc: node.loc
      }, parentNode, moduleScope, pre, middle, post);
      break;

    case _nodes2.default.LOGICAL_EXPRESSION:
      args = [addCallToTypeGraph(node.left.body, moduleScope, // $FlowIssue
      moduleScope.scopes.get(_variableScope.VariableScope.getName(node.left)), node.left, pre, middle, post, meta).result, addCallToTypeGraph(node.right.body, moduleScope, // $FlowIssue
      moduleScope.scopes.get(_variableScope.VariableScope.getName(node.right)), node.right, pre, middle, post, meta).result];
      let leftArg = args[0];
      leftArg = leftArg instanceof _variableInfo.VariableInfo ? leftArg.type : leftArg;
      leftArg = node.operator === "&&" ? (0, _typeUtils.pickFalsy)(leftArg) : (0, _typeUtils.pickTruthy)(leftArg);
      args[0] = leftArg || args[0];

    case _nodes2.default.BINARY_EXPRESSION:
      args = args || [addCallToTypeGraph(node.left, moduleScope, currentScope, parentNode, pre, middle, post, meta).result, addCallToTypeGraph(node.right, moduleScope, currentScope, parentNode, pre, middle, post, meta).result];
      targetName = node.operator === "+" ? "b+" : node.operator;
      targetName = node.operator === "-" ? "b-" : targetName;
      target = currentScope.findVariable({
        name: targetName,
        loc: node.loc
      });
      break;

    case _nodes2.default.ASSIGNMENT_EXPRESSION:
    case _nodes2.default.ASSIGNMENT_PATTERN:
      const right = addCallToTypeGraph(node.right, moduleScope, currentScope, parentNode, pre, middle, post, meta);
      const left = addCallToTypeGraph(node.left, moduleScope, currentScope, parentNode, pre, middle, post, {
        isForAssign: true
      });
      args = [left.result, right.result];

      if (left.result instanceof _variableInfo.VariableInfo && left.result.isConstant) {
        throw new _errors2.default("Cannot assign to variable because it is a constant.", node.loc);
      }

      targetName = node.operator || "=";
      target = currentScope.findVariable({
        name: targetName,
        loc: node.loc
      }).type;
      target = target instanceof _genericType.GenericType && (node.type !== _nodes2.default.ASSIGNMENT_PATTERN || node.left.typeAnnotation != undefined) ? // $FlowIssue
      target.applyGeneric([left.result.type || left.result]) : target;
      inferenced = right.inferenced;
      break;

    case _nodes2.default.RETURN_STATEMENT:
      targetName = "return";
      const fn = (0, _scopeUtils.findNearestScopeByType)(_variableScope.VariableScope.FUNCTION_TYPE, currentScope);

      if (fn instanceof _moduleScope.ModuleScope) {
        throw new _errors2.default("Call return outside function", node.loc);
      }

      const arg = addCallToTypeGraph(node.argument, moduleScope, currentScope, parentNode, pre, middle, post, meta);
      inferenced = arg.inferenced;
      const argType = arg.result instanceof _variableInfo.VariableInfo ? arg.result.type : arg.result;
      let fType = fn.declaration.type;
      fType = fType instanceof _genericType.GenericType ? fType.subordinateType : fType;
      args = [fType.isAsync && !argType.isPromise() ? argType.promisify() : arg.result];
      const declaration = fn.declaration.type instanceof _genericType.GenericType ? fn.declaration.type.subordinateType : fn.declaration.type;
      target = currentScope.findVariable({
        name: targetName,
        loc: node.loc
      }, parentNode, moduleScope, pre, middle, post);
      target = declaration.returnType instanceof _bottomType.$BottomType || declaration.returnType instanceof _typeVar.TypeVar && !declaration.returnType.isUserDefined ? target : // $FlowIssue
      target.type.applyGeneric([declaration.returnType], node.loc);
      currentScope = fn;
      break;

    case _nodes2.default.UNARY_EXPRESSION:
    case _nodes2.default.UPDATE_EXPRESSION:
      targetName = node.operator;
      args = [addCallToTypeGraph(node.argument, moduleScope, currentScope, parentNode, pre, middle, post, meta).result];
      target = currentScope.findVariable({
        name: targetName,
        loc: node.loc
      });
      break;

    case _nodes2.default.PURE_KEY:
      args = [addCallToTypeGraph(node.of, moduleScope, currentScope, parentNode, pre, middle, post, meta).result];
      targetName = "Object.keys";
      args = args.map(a => a instanceof _variableInfo.VariableInfo ? a.type : a);
      target = new _keysType.$Keys().applyGeneric(args, node.loc); // $FlowIssue

      target = new _functionType.FunctionType(targetName, {}, args, target);
      break;

    case _nodes2.default.PURE_VALUE:
      target = addCallToTypeGraph(node.of, moduleScope, currentScope, parentNode, pre, middle, post, meta).result;
      args = [target];
      targetName = "Object.values";
      args = args.map(a => a instanceof _variableInfo.VariableInfo ? a.type : a);
      target = new _valuesType.$Values().applyGeneric(args, node.loc); // $FlowIssue

      target = new _functionType.FunctionType(targetName, {}, args, target);
      break;

    case _nodes2.default.MEMBER_EXPRESSION:
      args = [(0, _typeUtils.getWrapperType)(addCallToTypeGraph(node.object, moduleScope, currentScope, parentNode, pre, middle, post, meta).result, moduleScope), node.property.type === _nodes2.default.IDENTIFIER && !node.computed ? _type.Type.term(`'${node.property.name}'`, {
        isSubtypeOf: _type.Type.String
      }) : addCallToTypeGraph(node.property, moduleScope, currentScope, parentNode, pre, middle, post, meta).result];
      targetName = ".";
      genericArguments = args.map(t => t instanceof _variableInfo.VariableInfo ? t.type : t);
      const lts = new _typeScope.TypeScope(typeScope);
      const argsTypes = [_typeVar.TypeVar.new("A", {
        parent: lts
      }, undefined, true), _typeVar.TypeVar.new("B", {
        parent: lts
      }, undefined, true)];
      const property = new _bottomType.$BottomType({
        isForAssign: meta.isForAssign
      }, new _propertyType.$PropertyType(), genericArguments);
      target = _genericType.GenericType.term(`<A, B>(A, B) => ${String(property.name)}`, {}, argsTypes, lts, new _functionType.FunctionType("", {}, argsTypes, property));
      break;

    case _nodes2.default.CONDITIONAL_EXPRESSION:
      args = [addCallToTypeGraph(node.test, moduleScope, currentScope, parentNode, pre, middle, post, meta).result, addCallToTypeGraph(node.consequent.body, moduleScope, // $FlowIssue
      moduleScope.scopes.get(_variableScope.VariableScope.getName(node.consequent)), node.consequent, pre, middle, post, meta).result, addCallToTypeGraph(node.alternate.body, moduleScope, // $FlowIssue
      moduleScope.scopes.get(_variableScope.VariableScope.getName(node.alternate)), node.alternate, pre, middle, post, meta).result];
      targetName = "?:";
      target = currentScope.findVariable({
        name: targetName,
        loc: node.loc
      });
      break;

    case _nodes2.default.NEW_EXPRESSION:
      const argument = addCallToTypeGraph(node.callee, moduleScope, currentScope, parentNode, pre, middle, post, meta).result;
      const argumentType = argument instanceof _variableInfo.VariableInfo ? argument.type : argument;
      const potentialArgument = addCallToTypeGraph({ ...node,
        type: _nodes2.default.CALL_EXPRESSION,
        isConstructor: true
      }, moduleScope, currentScope, parentNode, pre, middle, post, meta).result;

      const defaultObject = _objectType.ObjectType.term("{  }", {}, []);

      args = [_objectType.ObjectType.Object.isPrincipalTypeFor(potentialArgument) ? potentialArgument : defaultObject];
      targetName = "new";
      target = currentScope.findVariable({
        name: targetName,
        loc: node.loc
      });
      break;

    case _nodes2.default.CALL_EXPRESSION:
      if (node.callee.type === _nodes2.default.IDENTIFIER || node.callee.type === _nodes2.default.THIS_EXPRESSION || node.callee.type === _nodes2.default.SUPER) {
        targetName = node.callee.name;

        if (node.callee.type === _nodes2.default.SUPER) {
          targetName = "super";
        }

        if (node.callee.type === _nodes2.default.THIS_EXPRESSION) {
          targetName = _constants.THIS_TYPE;
        }

        target = currentScope.findVariable({
          name: targetName,
          loc: node.callee.loc
        }, parentNode, moduleScope, pre, middle, post);

        if (withPositions) {
          // $FlowIssue
          moduleScope.addPosition(node.callee, target);
        }
      } else {
        target = addCallToTypeGraph(node.callee, moduleScope, currentScope, parentNode, pre, middle, post, meta).result;

        if (target instanceof _typeVar.TypeVar) {
          throw new _errors2.default("Inferencing of functions inside inferenced object is not safe, if you want to use functions as property of your variable - add a type to this variable.", node.loc);
        }
      }

      let targetType = target instanceof _variableInfo.VariableInfo ? target.type : target;

      if (!(targetType instanceof _functionType.FunctionType) && !(targetType instanceof _genericType.GenericType && targetType.subordinateType instanceof _functionType.FunctionType)) {
        target = targetType.getPropertyType(node.isConstructor ? _constants.CONSTRUCTABLE : _constants.CALLABLE) || target;
        target = typeof targetType === "string" ? _variableScope.VariableScope.addAndTraverseNodeWithType( // $FlowIssue
        undefined, target, parentNode, moduleScope, pre, middle, post) : target;
        target = target instanceof _variableInfo.VariableInfo ? target : new _variableInfo.VariableInfo(target, currentScope);
        targetType = target.type;
      }

      let fnType = targetType instanceof _genericType.GenericType ? targetType.subordinateType : targetType;
      const localTypeScope = targetType instanceof _genericType.GenericType ? targetType.localTypeScope : typeScope;

      if (!(fnType instanceof _functionType.FunctionType) && !(fnType instanceof _typeVar.TypeVar && !fnType.isUserDefined)) {
        throw new _errors2.default(fnType instanceof _unionType.UnionType && fnType.variants.every(_functionUtils.isCallableType) ? `Signatures of each variant of type "${String(fnType.name)}" are not compatible with each other` : `The type "${String(fnType.name)}" is not callable.`, node.loc);
      }

      args = node.arguments.map((n, i) => {
        argsLocations.push(n.loc); // $FlowIssue

        const defaultArg = (fnType.argumentsTypes || [])[i];
        return n.type === _nodes2.default.FUNCTION_EXPRESSION || n.type === _nodes2.default.ARROW_FUNCTION_EXPRESSION ? defaultArg : addCallToTypeGraph(n, moduleScope, currentScope, parentNode, pre, middle, post, { ...meta,
          isImmutable: defaultArg instanceof _immutableType.$AppliedImmutable
        }).result;
      });
      genericArguments = node.typeArguments && node.typeArguments.params.map(arg => (0, _typeUtils.getTypeFromTypeAnnotation)({
        typeAnnotation: arg
      }, typeScope, currentScope, false, null, parentNode, moduleScope, pre, middle, post));
      fnType = (0, _functionType2.getRawFunctionType)( // $FlowIssue
      targetType, args, genericArguments, localTypeScope, node.loc);
      args = node.arguments.map((n, i) => n.type === _nodes2.default.FUNCTION_EXPRESSION || n.type === _nodes2.default.ARROW_FUNCTION_EXPRESSION ? // $FlowIssue
      _variableScope.VariableScope.addAndTraverseNodeWithType( // $FlowIssue
      (fnType.argumentsTypes || [])[i], n, parentNode, moduleScope, pre, middle, post) : // $FlowIssue
      args[i]);
      const throwableType = targetType instanceof _genericType.GenericType ? targetType.subordinateType : targetType;

      if (throwableType.throwable !== undefined) {
        (0, _throwable.addToThrowable)(throwableType.throwable, currentScope);
      }

      if (genericArguments != null) {
        target = fnType;
      }

      inferenced = targetType instanceof _genericType.GenericType && targetType.subordinateType.returnType instanceof _typeVar.TypeVar;
      break;

    case _nodes2.default.THIS_EXPRESSION:
      const selfVar = currentScope.findVariable({
        name: _constants.THIS_TYPE,
        loc: node.loc
      });
      const nearestFunctionScope = (0, _scopeUtils.findNearestScopeByType)(_variableScope.VariableScope.FUNCTION_TYPE, currentScope);
      nearestFunctionScope.calls.push(new _callMeta.CallMeta(undefined, [], node.loc, "this"));
      return {
        result: selfVar.type,
        inferenced: false
      };

    case _nodes2.default.SEQUENCE_EXPRESSION:
      return addCallToTypeGraph(node.expressions[node.expressions.length - 1], moduleScope, currentScope, parentNode, pre, middle, post, meta);

    default:
      return {
        result: (0, _inference.inferenceTypeForNode)(node, typeScope, currentScope, moduleScope, parentNode, pre, middle, post, meta.isTypeDefinitions, meta.isImmutable),
        isLiteral: true,
        inferenced: true
      };
  }

  if (target === null || args === null) {
    throw new Error("Never!!!");
  }

  const targetType = target instanceof _variableInfo.VariableInfo ? target.type : target;
  const options = {
    pre,
    args,
    meta,
    node,
    post,
    middle,
    target,
    moduleScope,
    typeScope,
    targetType,
    parentNode,
    dropUnknown: targetName === "=" || targetName === "init",
    genericArguments: genericArguments && genericArguments.map(a => a instanceof _type.Type ? a : a.type)
  };

  const getResult = targetType => {
    const {
      result,
      inferenced: localInferenced
    } = invoke({ ...options,
      targetType
    });
    inferenced = inferenced || localInferenced;
    return result;
  };

  const invocationType = targetType instanceof _unionType.UnionType ? _unionType.UnionType.term(null, {}, targetType.variants.map(getResult)) : getResult(targetType);
  const callMeta = new _callMeta.CallMeta(target, args, node.loc, targetName, inferenced, argsLocations);

  while (currentScope.skipCalls !== false && currentScope !== moduleScope) {
    // $FlowIssue
    currentScope = currentScope.parent;
  }

  currentScope.calls.push(callMeta);
  return {
    result: invocationType,
    inferenced
  };
}

function invoke({
  parentNode,
  typeScope,
  moduleScope,
  pre,
  middle,
  post,
  target,
  targetType,
  genericArguments,
  args,
  node,
  meta,
  dropUnknown
}) {
  if (!(targetType instanceof _bottomType.$BottomType) && !(targetType instanceof _typeVar.TypeVar && !targetType.isUserDefined) && !(targetType instanceof _functionType.FunctionType) && !(targetType instanceof _genericType.GenericType && targetType.subordinateType instanceof _functionType.FunctionType)) {
    throw new _errors2.default("The target is not callable type.", node.loc);
  }

  try {
    const invocationType = (0, _functionType2.getInvocationType)(targetType, args, genericArguments, typeScope, node.loc, meta.isForAssign, dropUnknown);

    if (!(invocationType instanceof _type.Type)) {
      return {
        result: addPropertyToThis(invocationType, parentNode, typeScope, moduleScope, pre, middle, post),
        inferenced: false
      };
    }

    if (targetType instanceof _typeVar.TypeVar && !targetType.isUserDefined && target instanceof _variableInfo.VariableInfo) {
      let func = (0, _scopeUtils.findNearestScopeByType)(_variableScope.VariableScope.FUNCTION_TYPE, // $FlowIssue
      target.parent);

      if (func.declaration && func.declaration.type instanceof _genericType.GenericType && invocationType instanceof _typeVar.TypeVar) {
        const genericArguments = func.declaration.type.genericArguments;
        genericArguments.push(invocationType);

        const fn = _type.Type.getTypeRoot(targetType);

        fn.argumentsTypes.forEach(arg => {
          if (arg instanceof _typeVar.TypeVar && !arg.isUserDefined && !genericArguments.includes(arg)) {
            genericArguments.push(arg);
          }
        });
      }
    }

    return {
      result: invocationType,
      inferenced: isInferencedTypeVar(targetType) && isInferencedTypeVar(invocationType, true)
    };
  } catch (e) {
    if (e.loc === undefined) {
      e.loc = node.loc;
    }

    throw e;
  }
}

function isInferencedTypeVar(t, withoutRoot = false) {
  return t instanceof _typeVar.TypeVar && !t.isUserDefined && (!withoutRoot || t.root === undefined);
}

function addPropertyToThis(currentNode, parentNode, typeScope, moduleScope, precompute, middlecompute, postcompute) {
  const propertyName = currentNode.key.name || `${currentNode.key.value}`; // $FlowIssue

  const currentScope = (0, _scopeUtils.getParentForNode)(currentNode, parentNode, moduleScope);
  const currentClassScope = (0, _scopeUtils.findNearestScopeByType)([_variableScope.VariableScope.CLASS_TYPE, _variableScope.VariableScope.OBJECT_TYPE], currentScope); // $FlowIssue

  const self = currentNode.static ? currentClassScope.declaration : currentClassScope.findVariable({
    name: _constants.THIS_TYPE
  });
  const selfType = self.type instanceof _genericType.GenericType ? self.type.subordinateType : self.type;

  if (currentClassScope.isProcessed) {
    // $FlowIssue
    return selfType.properties.get(propertyName).type;
  }

  const currentTypeScope = self.type instanceof _genericType.GenericType ? self.type.localTypeScope : typeScope;
  let type = _type.Type.Undefined;

  if (currentNode.typeAnnotation != null) {
    type = (0, _typeUtils.getTypeFromTypeAnnotation)(currentNode.typeAnnotation, currentTypeScope, currentClassScope, false, null, parentNode, moduleScope, precompute, middlecompute, postcompute);
  }

  const property = new _variableInfo.VariableInfo(type, currentClassScope, new _meta.Meta(currentNode.loc));

  if (!(selfType instanceof _objectType.ObjectType)) {
    throw new Error("Never!!!");
  }

  if (currentNode.type === _nodes2.default.OBJECT_PROPERTY) {
    property.hasInitializer = true;
  }

  selfType.properties.set(propertyName, property);

  if (moduleScope instanceof _moduleScope.PositionedModuleScope) {
    moduleScope.addPosition(currentNode.key, property);
  }

  if (currentNode.type === _nodes2.default.OBJECT_METHOD || currentNode.type === _nodes2.default.CLASS_METHOD) {
    const fn = _variableScope.VariableScope.addAndTraverseNodeWithType(null, currentNode, parentNode, moduleScope, precompute, middlecompute, postcompute);

    property.hasInitializer = true;

    if (fn === undefined) {
      throw new Error("Never!!!");
    }

    property.type = fn.type;
  } else if (currentNode.value != null) {
    const inferencedType = addCallToTypeGraph(currentNode, moduleScope, currentClassScope, parentNode, precompute, middlecompute, postcompute).result;
    property.hasInitializer = true;

    if (currentNode.typeAnnotation === undefined) {
      property.type = inferencedType;
    }
  }

  if (moduleScope instanceof _moduleScope.PositionedModuleScope) {
    moduleScope.addPosition(currentNode, property);
  }

  return property.type;
}

function addMethodToThis(currentNode, parentNode, moduleScope, pre, middle, post, isTypeDefinitions) {
  const currentScope = moduleScope.scopes.get(_variableScope.VariableScope.getName(parentNode));

  if (currentScope === undefined) {
    throw new Error("Never!!!");
  }

  const classScope = (0, _scopeUtils.findNearestScopeByType)([_variableScope.VariableScope.CLASS_TYPE, _variableScope.VariableScope.OBJECT_TYPE], currentScope);

  if (classScope.isProcessed) {
    return;
  }

  const propertyName = currentNode.key.name === "constructor" ? _constants.CONSTRUCTABLE : currentNode.key.name;
  const self = classScope.findVariable({
    name: _constants.THIS_TYPE
  }); // $FlowIssue

  const classVar = currentNode.static || propertyName === _constants.CONSTRUCTABLE ? classScope.declaration : self;
  const classType = classVar.type instanceof _genericType.GenericType ? classVar.type.subordinateType : classVar.type;
  const methodScope = moduleScope.scopes.get(_variableScope.VariableScope.getName(currentNode));

  if (methodScope !== undefined && !isTypeDefinitions) {
    return false;
  } // $FlowIssue


  const existedProperty = classType.properties.get(propertyName);
  const expectedType = existedProperty instanceof _variableInfo.VariableInfo ? existedProperty.type : undefined;
  currentNode.expected = currentNode.expected || expectedType;
  const fn = (0, _functionUtils.addFunctionToTypeGraph)(currentNode, parentNode, moduleScope, pre, middle, post, isTypeDefinitions);
  fn.hasInitializer = true;

  if (!isTypeDefinitions && classScope.type === _variableScope.VariableScope.CLASS_TYPE) {
    const fnScope = moduleScope.scopes.get(_variableScope.VariableScope.getName(currentNode)); // $FlowIssue

    fnScope.body.set(_constants.THIS_TYPE, currentNode.static ? classScope.declaration : self);

    if (classScope.declaration.type.isSubtypeOf !== _objectType.ObjectType.Object && currentNode.static) {
      // $FlowIssue
      fnScope.body.set("super", new _variableInfo.VariableInfo(classScope.declaration.type.isSubtypeOf));
    }
  } // $FlowIssue


  classType.properties.set(propertyName, fn);

  if (propertyName === _constants.CONSTRUCTABLE) {
    const type = fn.type instanceof _genericType.GenericType ? fn.type.subordinateType : fn.type;
    type.returnType = (type.returnType instanceof _objectType.ObjectType || type.returnType instanceof _collectionType.CollectionType) && _objectType.ObjectType.Object.isPrincipalTypeFor(type.returnType) ? type.returnType : self.type;
    fn.type = type;
  }

  if (moduleScope instanceof _moduleScope.PositionedModuleScope) {
    moduleScope.addPosition(currentNode, fn);
  }
}

/***/ }),

/***/ "../node_modules/@hegel/core/type-graph/constants.js":
/*!***********************************************************!*\
  !*** ../node_modules/@hegel/core/type-graph/constants.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// flow
const THIS_TYPE = exports.THIS_TYPE = "[[This]]";
const CALLABLE = exports.CALLABLE = "[[Callable]]";
const CONSTRUCTABLE = exports.CONSTRUCTABLE = "[[Constructable]]";
const INDEXABLE = exports.INDEXABLE = "[[Indexable]]";

/***/ }),

/***/ "../node_modules/@hegel/core/type-graph/meta/call-meta.js":
/*!****************************************************************!*\
  !*** ../node_modules/@hegel/core/type-graph/meta/call-meta.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CallMeta = undefined;

var _meta = __webpack_require__(/*! ./meta */ "../node_modules/@hegel/core/type-graph/meta/meta.js");

var _type = __webpack_require__(/*! ../types/type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _genericType = __webpack_require__(/*! ../types/generic-type */ "../node_modules/@hegel/core/type-graph/types/generic-type.js");

var _functionType = __webpack_require__(/*! ../types/function-type */ "../node_modules/@hegel/core/type-graph/types/function-type.js");

var _variableInfo = __webpack_require__(/*! ../variable-info */ "../node_modules/@hegel/core/type-graph/variable-info.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class CallMeta extends _meta.Meta {
  constructor(target, args, loc, targetName, inferenced = false, argumentsLocations = []) {
    super(loc);

    _defineProperty(this, "target", void 0);

    _defineProperty(this, "targetName", void 0);

    _defineProperty(this, "arguments", void 0);

    _defineProperty(this, "argumentsLocations", void 0);

    _defineProperty(this, "inferenced", void 0);

    this.target = target;
    this.targetName = targetName;
    this.arguments = args;
    this.inferenced = inferenced;
    this.argumentsLocations = argumentsLocations;
  }

}

exports.CallMeta = CallMeta;

/***/ }),

/***/ "../node_modules/@hegel/core/type-graph/meta/meta.js":
/*!***********************************************************!*\
  !*** ../node_modules/@hegel/core/type-graph/meta/meta.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ZeroLocation = {
  start: {
    column: -1,
    line: -1
  },
  end: {
    column: -1,
    line: -1
  }
};

class Meta {
  constructor(loc = ZeroLocation) {
    _defineProperty(this, "loc", void 0);

    _defineProperty(this, "changed", void 0);

    this.loc = loc;
    this.changed = false;
  }

}

exports.Meta = Meta;

/***/ }),

/***/ "../node_modules/@hegel/core/type-graph/module-scope.js":
/*!**************************************************************!*\
  !*** ../node_modules/@hegel/core/type-graph/module-scope.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PositionedModuleScope = exports.ModuleScope = undefined;

var _scope = __webpack_require__(/*! ./scope */ "../node_modules/@hegel/core/type-graph/scope.js");

var _typeScope = __webpack_require__(/*! ./type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// $FlowIssue
class ModuleScope extends _scope.Scope {
  constructor(path, body = new Map(), parent = null, typeScope = new _typeScope.TypeScope()) {
    // $FlowIssue
    super(parent);

    _defineProperty(this, "typeScope", void 0);

    _defineProperty(this, "parent", void 0);

    _defineProperty(this, "calls", []);

    _defineProperty(this, "exports", void 0);

    _defineProperty(this, "exportsTypes", void 0);

    _defineProperty(this, "scopes", void 0);

    _defineProperty(this, "path", void 0);

    this.parent = parent;
    this.path = path;
    this.body = body;
    this.typeScope = typeScope;
    this.exports = new Map();
    this.exportsTypes = new Map();
    this.scopes = new Map();
  }

}

exports.ModuleScope = ModuleScope;

class PositionedModuleScope extends ModuleScope {
  constructor(path, body = new Map(), parent, typeScope = new _typeScope.TypeScope()) {
    super(path, body, parent, typeScope);

    _defineProperty(this, "positions", void 0);

    this.positions = new Map();
  }

  addPosition(node, variableInfo) {
    const line = this.positions.get(node.loc.start.line) || new Map();
    line.set(`${node.loc.start.column},${node.loc.end.column}`, variableInfo);
    this.positions.set(node.loc.start.line, line);
  }

  getVarAtPosition(loc, typeGraph) {
    const line = this.positions.get(loc.line);

    if (line === undefined) {
      return;
    }

    let varInfo = undefined;

    for (const [startEnd, vi] of line.entries()) {
      let [start, end] = startEnd.split(",");
      start = Number(start);
      end = Number(end);

      if (loc.column >= start && loc.column <= end) {
        varInfo = vi;
        break;
      }
    }

    return varInfo;
  }

}

exports.PositionedModuleScope = PositionedModuleScope;

/***/ }),

/***/ "../node_modules/@hegel/core/type-graph/scope.js":
/*!*******************************************************!*\
  !*** ../node_modules/@hegel/core/type-graph/scope.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scope = undefined;

var _errors = __webpack_require__(/*! ../utils/errors */ "../node_modules/@hegel/core/utils/errors.js");

var _errors2 = _interopRequireDefault(_errors);

var _traverse = __webpack_require__(/*! ../utils/traverse */ "../node_modules/@hegel/core/utils/traverse.js");

var _traverse2 = _interopRequireDefault(_traverse);

var _variableInfo = __webpack_require__(/*! ./variable-info */ "../node_modules/@hegel/core/type-graph/variable-info.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Scope {
  static canTraverseFunction(rest) {
    return rest.length === 5;
  }

  static getName(node) {
    return `[[Scope${node.loc.start.line}-${node.loc.start.column}]]`;
  }

  static addAndTraverseNodeWithType(definedType, currentNode, parentNode, typeGraph, precompute, middlecompute, postcompute) {
    currentNode.expected = definedType != undefined && "variants" in definedType ? // $FlowIssue
    definedType.variants.find(a => "argumentsTypes" in a) : definedType;
    const scopeName = this.getName(currentNode);
    (0, _traverse2.default)(currentNode, precompute, middlecompute, postcompute, parentNode);
    const scope = typeGraph.scopes.get(scopeName); // $FlowIssue

    if (scope === undefined || scope.type !== "function") {
      return;
    } // $FlowIssue


    const declaration = scope.declaration;

    if (!(declaration instanceof _variableInfo.VariableInfo)) {
      throw new Error("Never!!!");
    }

    return declaration;
  }

  constructor(parent) {
    _defineProperty(this, "body", new Map());

    _defineProperty(this, "parent", void 0);

    this.parent = parent;
  }

  findVariable({
    name,
    loc
  }, ...rest) {
    let parent = this;

    do {
      const variableInfo = parent.body.get(name);

      if (variableInfo) {
        if (variableInfo instanceof _variableInfo.VariableInfo) {
          if ("subordinateMagicType" in variableInfo.type && name !== ".") {
            const newType = variableInfo.type.unpack();
            variableInfo.type = newType;
          }

          return variableInfo;
        }

        if (!(variableInfo instanceof Scope) && Scope.canTraverseFunction(rest)) {
          // $FlowIssue
          const result = Scope.addAndTraverseNodeWithType( // $FlowIssue
          undefined, variableInfo, ...rest);
          return result === undefined ? this.findVariable({
            name,
            loc
          }) : result;
        }
      }

      parent = parent.parent;
    } while (parent);

    throw new _errors2.default(`Variable "${name}" is not defined!`, loc);
  }

  findRecord({
    name,
    loc
  }) {
    let parent = this;

    do {
      const recordInfo = parent.body.get(name);

      if (recordInfo && !(recordInfo instanceof Scope)) {
        return recordInfo;
      }

      parent = parent.parent;
    } while (parent);

    throw new _errors2.default(`Record "${name}" is not defined!`, loc);
  }

  isParentFor(scope) {
    let parent = scope;

    do {
      if (parent === this) {
        return true;
      }

      parent = parent.parent;
    } while (parent != null);
  }

  getAllChildScopes(module) {
    const children = [];

    for (const [_, scope] of module.scopes) {
      if (this.isParentFor(scope)) {
        children.push(scope);
      }
    }

    return children;
  }

}

exports.Scope = Scope;

/***/ }),

/***/ "../node_modules/@hegel/core/type-graph/type-graph.js":
/*!************************************************************!*\
  !*** ../node_modules/@hegel/core/type-graph/type-graph.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createModuleScope = createModuleScope;

var _nodes = __webpack_require__(/*! ../utils/nodes */ "../node_modules/@hegel/core/utils/nodes.js");

var _nodes2 = _interopRequireDefault(_nodes);

var _checking = __webpack_require__(/*! ../checking */ "../node_modules/@hegel/core/checking/index.js");

var _checking2 = _interopRequireDefault(_checking);

var _traverse = __webpack_require__(/*! ../utils/traverse */ "../node_modules/@hegel/core/utils/traverse.js");

var _traverse2 = _interopRequireDefault(_traverse);

var _globals = __webpack_require__(/*! ../utils/globals */ "../node_modules/@hegel/core/utils/globals.js");

var _globals2 = _interopRequireDefault(_globals);

var _utilityTypes = __webpack_require__(/*! ../utils/utility-types */ "../node_modules/@hegel/core/utils/utility-types.js");

var _utilityTypes2 = _interopRequireDefault(_utilityTypes);

var _operators = __webpack_require__(/*! ../utils/operators */ "../node_modules/@hegel/core/utils/operators.js");

var _operators2 = _interopRequireDefault(_operators);

var _imports = __webpack_require__(/*! ../utils/imports */ "../node_modules/@hegel/core/utils/imports.js");

var _imports2 = _interopRequireDefault(_imports);

var _errors = __webpack_require__(/*! ../utils/errors */ "../node_modules/@hegel/core/utils/errors.js");

var _errors2 = _interopRequireDefault(_errors);

var _type = __webpack_require__(/*! ./types/type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _meta = __webpack_require__(/*! ./meta/meta */ "../node_modules/@hegel/core/type-graph/meta/meta.js");

var _typeVar = __webpack_require__(/*! ./types/type-var */ "../node_modules/@hegel/core/type-graph/types/type-var.js");

var _typeScope = __webpack_require__(/*! ./type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

var _refinement = __webpack_require__(/*! ../inference/refinement */ "../node_modules/@hegel/core/inference/refinement.js");

var _unionType = __webpack_require__(/*! ./types/union-type */ "../node_modules/@hegel/core/type-graph/types/union-type.js");

var _objectType = __webpack_require__(/*! ./types/object-type */ "../node_modules/@hegel/core/type-graph/types/object-type.js");

var _genericType = __webpack_require__(/*! ./types/generic-type */ "../node_modules/@hegel/core/type-graph/types/generic-type.js");

var _functionType = __webpack_require__(/*! ./types/function-type */ "../node_modules/@hegel/core/type-graph/types/function-type.js");

var _variableInfo = __webpack_require__(/*! ./variable-info */ "../node_modules/@hegel/core/type-graph/variable-info.js");

var _variableScope = __webpack_require__(/*! ./variable-scope */ "../node_modules/@hegel/core/type-graph/variable-scope.js");

var _variableUtils = __webpack_require__(/*! ../utils/variable-utils */ "../node_modules/@hegel/core/utils/variable-utils.js");

var _errorType = __webpack_require__(/*! ../inference/error-type */ "../node_modules/@hegel/core/inference/error-type.js");

var _moduleScope = __webpack_require__(/*! ./module-scope */ "../node_modules/@hegel/core/type-graph/module-scope.js");

var _call = __webpack_require__(/*! ./call */ "../node_modules/@hegel/core/type-graph/call.js");

var _hierarchy = __webpack_require__(/*! ../utils/hierarchy */ "../node_modules/@hegel/core/utils/hierarchy.js");

var _typeUtils = __webpack_require__(/*! ../utils/type-utils */ "../node_modules/@hegel/core/utils/type-utils.js");

var _functionUtils = __webpack_require__(/*! ../utils/function-utils */ "../node_modules/@hegel/core/utils/function-utils.js");

var _classUtils = __webpack_require__(/*! ../utils/class-utils */ "../node_modules/@hegel/core/utils/class-utils.js");

var _functionType2 = __webpack_require__(/*! ../inference/function-type */ "../node_modules/@hegel/core/inference/function-type.js");

var _scopeUtils = __webpack_require__(/*! ../utils/scope-utils */ "../node_modules/@hegel/core/utils/scope-utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const hasTypeParams = node => node.typeParameters && (node.typeParameters.type === _nodes2.default.TYPE_PARAMETER_DECLARATION || node.typeParameters.type === _nodes2.default.TS_TYPE_PARAMETER_DECLARATION) && Array.isArray(node.typeParameters.params) && node.typeParameters.params.length !== 0;

const getAliasBody = node => {
  switch (node.type) {
    case _nodes2.default.TYPE_ALIAS:
      return {
        typeAnnotation: node.right
      };

    case _nodes2.default.TS_INTERFACE_DECLARATION:
      return {
        typeAnnotation: node
      };

    case _nodes2.default.TS_TYPE_ALIAS:
      return node;
  }

  throw new Error(node.type);
};

const addTypeAlias = (node, parentNode, typeGraph, precompute, middlecompute, postcompute) => {
  const typeScope = typeGraph.typeScope;
  const localTypeScope = new _typeScope.TypeScope(typeScope);
  const typeName = node.id.name;

  const self = _typeVar.TypeVar.createSelf(typeName, typeScope);

  typeScope.body.set(typeName, self);
  const genericArguments = node.typeParameters && node.typeParameters.params.map(typeAnnotation => (0, _typeUtils.getTypeFromTypeAnnotation)({
    typeAnnotation
  }, localTypeScope, typeGraph, true, self, parentNode, typeGraph, precompute, middlecompute, postcompute));
  const name = genericArguments != undefined ? _genericType.GenericType.getName(typeName, genericArguments) : undefined;
  const type = (0, _typeUtils.getTypeFromTypeAnnotation)(getAliasBody(node), localTypeScope, typeGraph, false, self, parentNode, typeGraph, precompute, middlecompute, postcompute, name);
  const typeAlias = genericArguments ? _genericType.GenericType.new(typeName, {
    parent: typeScope
  }, genericArguments, localTypeScope, type) : type;
  self.root = typeAlias;
  self.name = typeAlias.name;

  if (genericArguments != null) {
    typeAlias.shouldBeUsedAsGeneric = true;
  }

  typeScope.body.set(typeName, typeAlias);

  if (node.exportAs) {
    typeGraph.exportsTypes.set(node.exportAs, typeAlias);
  }
};

const fillModuleScope = (typeGraph, errors, isTypeDefinitions) => {
  const typeScope = typeGraph.typeScope;
  return (currentNode, parentNode, precompute, middlecompute, postcompute, meta = {}) => {
    switch (currentNode.type) {
      case _nodes2.default.VARIABLE_DECLARATION:
        if (currentNode.init != undefined) {
          currentNode.declarations.forEach(a => Object.assign(a, {
            init: currentNode.init
          }));
        }

        break;

      case _nodes2.default.VARIABLE_DECLARATOR:
        const variableInfo = (0, _variableUtils.addVariableToGraph)(Object.assign(currentNode, meta), parentNode, typeGraph, precompute, middlecompute, postcompute);

        if (currentNode.init != undefined && variableInfo.type !== _type.Type.Unknown) {
          currentNode.init.expected = variableInfo.type;
        }

        break;

      case _nodes2.default.TYPE_ALIAS:
      case _nodes2.default.TS_TYPE_ALIAS:
      case _nodes2.default.TS_INTERFACE_DECLARATION:
        addTypeAlias(currentNode, parentNode, typeGraph, precompute, middlecompute, postcompute);
        break;

      case _nodes2.default.CLASS_DECLARATION:
      case _nodes2.default.CLASS_EXPRESSION:
      case _nodes2.default.OBJECT_EXPRESSION:
        (0, _classUtils.addClassScopeToTypeGraph)(currentNode, parentNode, typeGraph);
        break;

      case _nodes2.default.LOGICAL_EXPRESSION:
      case _nodes2.default.CONDITIONAL_EXPRESSION:
        (0, _refinement.refinement)(currentNode, (0, _scopeUtils.getParentForNode)(currentNode, parentNode, typeGraph), typeScope, typeGraph);
        break;

      case _nodes2.default.IF_STATEMENT:
      case _nodes2.default.WHILE_STATEMENT:
      case _nodes2.default.DO_WHILE_STATEMENT:
      case _nodes2.default.FOR_STATEMENT:
        const block = currentNode.body || currentNode.consequent;
        (0, _scopeUtils.addScopeToTypeGraph)(block, parentNode, typeGraph);

        if (currentNode.alternate) {
          (0, _scopeUtils.addScopeToTypeGraph)(currentNode.alternate, parentNode, typeGraph);
        }

        (0, _refinement.refinement)(currentNode, (0, _scopeUtils.getParentForNode)(block, parentNode, typeGraph), typeScope, typeGraph);

        if (currentNode.test != undefined) {
          currentNode.test.isRefinemented = true;
        }

        break;

      case _nodes2.default.FUNCTION_DECLARATION:
      case _nodes2.default.TS_FUNCTION_DECLARATION:
        const existedRecord = (0, _scopeUtils.getParentForNode)(currentNode, parentNode, typeGraph).findRecord(currentNode.id);

        if (existedRecord instanceof _variableInfo.VariableInfo) {
          return false;
        }

      case _nodes2.default.FUNCTION_EXPRESSION:
      case _nodes2.default.ARROW_FUNCTION_EXPRESSION:
        const functionVariable = (0, _functionUtils.addFunctionToTypeGraph)(currentNode, parentNode, typeGraph, precompute, middlecompute, postcompute, isTypeDefinitions);

        if (currentNode.exportAs) {
          typeGraph.exports.set(currentNode.exportAs, functionVariable);
        }

        break;

      case _nodes2.default.BLOCK_STATEMENT:
        if (_nodes2.default.isFunction(parentNode) && parentNode.body === currentNode) {
          break;
        }

        (0, _scopeUtils.addScopeToTypeGraph)(currentNode, parentNode, typeGraph);
        break;

      case _nodes2.default.OBJECT_METHOD:
      case _nodes2.default.CLASS_METHOD:
      case _nodes2.default.TS_DECLARE_METHOD:
        (0, _call.addMethodToThis)(currentNode, parentNode, typeGraph, precompute, middlecompute, postcompute, isTypeDefinitions);
        break;

      case _nodes2.default.TRY_STATEMENT:
        currentNode.block.skipCalls = true;
        const tryBlock = (0, _scopeUtils.getScopeFromNode)(currentNode.block, parentNode, typeGraph);
        tryBlock.throwable = [];
        typeGraph.scopes.set(_variableScope.VariableScope.getName(currentNode.block), tryBlock);

        if (!currentNode.handler) {
          return true;
        }

        const handlerScopeKey = _variableScope.VariableScope.getName(currentNode.handler.body);

        typeGraph.scopes.set(handlerScopeKey, (0, _scopeUtils.getScopeFromNode)(currentNode.handler.body, parentNode, typeGraph));

        if (!currentNode.handler.param) {
          return true;
        }

        (0, _variableUtils.addVariableToGraph)(currentNode.handler.param, currentNode.handler.body, typeGraph, precompute, middlecompute, postcompute, currentNode.handler.param.name);
        break;
    }

    return true;
  };
};

const middlefillModuleScope = (typeGraph, errors, isTypeDefinitions) => {
  const typeScope = typeGraph.typeScope;
  return (currentNode, parentNode, precompute, middlecompute, postcompute, meta = {}) => {
    if (currentNode.type === _nodes2.default.EXPORT_NAMED_DECLARATION || currentNode.type === _nodes2.default.EXPORT_DEFAULT_DECLARATION) {
      currentNode = currentNode.declaration;
    }

    switch (currentNode.type) {
      case _nodes2.default.THIS_TYPE_DEFINITION:
        (0, _classUtils.addThisToClassScope)(currentNode, parentNode, typeScope, typeGraph, precompute, middlecompute, postcompute);
        break;

      case _nodes2.default.OBJECT_PROPERTY:
      case _nodes2.default.OBJECT_METHOD:
      case _nodes2.default.CLASS_PROPERTY:
      case _nodes2.default.CLASS_METHOD:
        (0, _classUtils.addPropertyNodeToThis)(currentNode, parentNode, typeGraph, precompute, middlecompute, postcompute);
        break;

      case _nodes2.default.FUNCTION_DECLARATION:
      case _nodes2.default.TS_FUNCTION_DECLARATION:
        (0, _functionUtils.addFunctionNodeToTypeGraph)(currentNode, parentNode, typeGraph);
        break;

      case _nodes2.default.TS_INTERFACE_DECLARATION:
      case _nodes2.default.CLASS_DECLARATION:
      case _nodes2.default.TS_TYPE_ALIAS:
        if (currentNode.type === _nodes2.default.CLASS_DECLARATION && !isTypeDefinitions) {
          return;
        }

        (0, _typeUtils.addTypeNodeToTypeGraph)(currentNode, typeGraph);
        break;
    }
  };
};

const afterFillierActions = (moduleScope, errors, isTypeDefinitions) => {
  const typeScope = moduleScope.typeScope;
  return (currentNode, parentNode, precompute, middlecompute, postcompute, meta = {}) => {
    const currentScope = (0, _scopeUtils.getParentForNode)(currentNode, parentNode, moduleScope);

    switch (currentNode.type) {
      case _nodes2.default.OBJECT_EXPRESSION:
        const obj = (0, _classUtils.addObjectToTypeGraph)(currentNode, moduleScope);

        if (currentNode.exportAs) {
          moduleScope.exports.set(currentNode.exportAs, obj);
        }

        break;

      case _nodes2.default.CLASS_PROPERTY:
      case _nodes2.default.OBJECT_PROPERTY:
        (0, _call.addPropertyToThis)(currentNode, parentNode, typeScope, moduleScope, precompute, middlecompute, postcompute);
        break;

      case _nodes2.default.CLASS_DECLARATION:
      case _nodes2.default.CLASS_EXPRESSION:
        const classConstructor = (0, _classUtils.addClassToTypeGraph)(currentNode, typeScope, moduleScope, parentNode, precompute, middlecompute, postcompute, isTypeDefinitions);

        if (currentNode.exportAs) {
          moduleScope.exports.set(currentNode.exportAs, classConstructor);
          moduleScope.exportsTypes.set(currentNode.exportAs, // $FlowIssue
          classConstructor.type.instanceType);
        }

        break;

      case _nodes2.default.TYPE_ALIAS:
      case _nodes2.default.TS_TYPE_ALIAS:
      case _nodes2.default.TS_INTERFACE_DECLARATION:
        const type = _type.Type.find(currentNode.id.name, {
          parent: typeScope
        }, parentNode, moduleScope, precompute, middlecompute, postcompute);

        if (currentNode.exportAs && !moduleScope.exportsTypes.has(currentNode.exportAs)) {
          moduleScope.exportsTypes.set(currentNode.exportAs, type);
        }

        break;

      case _nodes2.default.VARIABLE_DECLARATION:
        break;

      case _nodes2.default.VARIABLE_DECLARATOR:
        const variableInfo = currentScope.findVariable(currentNode.id);
        const newTypeOrVar = isTypeDefinitions && currentNode.init === null ? _type.Type.Unknown : (0, _call.addCallToTypeGraph)(currentNode, moduleScope, currentScope, parentNode, precompute, middlecompute, postcompute);

        if (currentNode.id != null && currentNode.id.typeAnnotation == undefined) {
          const newType = newTypeOrVar.result instanceof _variableInfo.VariableInfo ? newTypeOrVar.result.type : newTypeOrVar.result;
          variableInfo.type = (0, _variableUtils.getVariableType)(variableInfo, newType, typeScope, newTypeOrVar.inferenced);
        }

        if (currentNode.exportAs) {
          moduleScope.exports.set(currentNode.exportAs, variableInfo);
        }

        break;

      case _nodes2.default.BLOCK_STATEMENT:
        if (!currentNode.catchBlock || !currentNode.catchBlock.param) {
          return;
        }

        if (currentNode.catchBlock.param.type !== _nodes2.default.IDENTIFIER) {
          throw new Error("Unsupported yet");
        }

        const errorVariable = (0, _scopeUtils.getParentForNode)(currentNode.catchBlock.param, currentNode.catchBlock.body, moduleScope).findVariable(currentNode.catchBlock.param, parentNode, moduleScope, precompute, middlecompute, postcompute);
        errorVariable.type = (0, _errorType.inferenceErrorType)(currentNode, moduleScope);
        errorVariable.type = _unionType.UnionType.term(null, {}, [_type.Type.Unknown, errorVariable.type]);

        if (moduleScope instanceof _moduleScope.PositionedModuleScope) {
          moduleScope.addPosition(currentNode.catchBlock.param, errorVariable);
        }

        break;

      case _nodes2.default.IF_STATEMENT:
      case _nodes2.default.RETURN_STATEMENT:
      case _nodes2.default.EXPRESSION_STATEMENT:
      case _nodes2.default.WHILE_STATEMENT:
      case _nodes2.default.DO_WHILE_STATEMENT:
      case _nodes2.default.FOR_STATEMENT:
      case _nodes2.default.THROW_STATEMENT:
      case _nodes2.default.NEW_EXPRESSION:
        const resultOfCall = (0, _call.addCallToTypeGraph)(currentNode, moduleScope, currentScope, parentNode, precompute, middlecompute, postcompute).result;

        if (currentNode.exportAs) {
          const exportVar = resultOfCall instanceof _variableInfo.VariableInfo ? resultOfCall : new _variableInfo.VariableInfo(resultOfCall, moduleScope);
          moduleScope.exports.set(currentNode.exportAs, exportVar);
        }

        break;

      case _nodes2.default.OBJECT_METHOD:
      case _nodes2.default.CLASS_METHOD:
      case _nodes2.default.FUNCTION_EXPRESSION:
      case _nodes2.default.ARROW_FUNCTION_EXPRESSION:
      case _nodes2.default.FUNCTION_DECLARATION:
        const functionScope = moduleScope.scopes.get(_variableScope.VariableScope.getName(currentNode));

        if (functionScope === undefined) {
          throw new Error("Never!!!");
        }

        const {
          declaration
        } = functionScope;

        if (declaration === undefined) {
          throw new Error("Never!!!");
        }

        const declarationType = declaration.type instanceof _genericType.GenericType ? declaration.type.subordinateType : declaration.type;
        declarationType.throwable = (functionScope.throwable || []).length ? (0, _errorType.inferenceErrorType)(currentNode, moduleScope) : undefined;

        if (functionScope.declaration instanceof _variableInfo.VariableInfo) {
          const fnType = functionScope.declaration.type;

          if (fnType instanceof _genericType.GenericType && functionScope.type === _variableScope.VariableScope.FUNCTION_TYPE && fnType.subordinateType instanceof _functionType.FunctionType) {
            // $FlowIssue - Type refinements
            (0, _functionType2.prepareGenericFunctionType)(functionScope);

            if (fnType.genericArguments.some(a => !a.isUserDefined)) {
              (0, _functionType2.inferenceFunctionTypeByScope)( // $FlowIssue - Type refinements
              functionScope, typeScope, moduleScope);
            }
          }

          if (currentNode.exportAs) {
            moduleScope.exports.set(currentNode.exportAs, declaration);
          }
        }

        break;

      case _nodes2.default.TS_EXPORT_ASSIGNMENT:
        let whatWillBeExported = (0, _call.addCallToTypeGraph)(currentNode.expression, moduleScope, currentScope, parentNode, precompute, middlecompute, postcompute).result;

        if (whatWillBeExported instanceof _type.Type) {
          whatWillBeExported = new _variableInfo.VariableInfo(whatWillBeExported, moduleScope);
        }

        moduleScope.exports.set("default", whatWillBeExported);
        const exportedType = whatWillBeExported.type;

        if (exportedType instanceof _objectType.ObjectType) {
          exportedType.properties.forEach((value, key) => {
            moduleScope.exports.set(key, value);
          });
        }

        break;

      default:
        if (currentNode.exportAs) {
          const value = (0, _call.addCallToTypeGraph)(currentNode, moduleScope, currentScope, parentNode, precompute, middlecompute, postcompute, {
            isTypeDefinitions
          }).result;
          moduleScope.exports.set(currentNode.exportAs, value instanceof _variableInfo.VariableInfo ? value : new _variableInfo.VariableInfo(value, currentScope, new _meta.Meta(currentNode.loc)));
        }

        break;
    }

    if (currentNode.type === _nodes2.default.THROW_STATEMENT || currentNode.type === _nodes2.default.RETURN_STATEMENT) {
      throw new _errors.UnreachableError(currentNode.loc);
    }
  };
};

async function createModuleScope(ast, errors, getModuleTypeGraph, globalModule, isTypeDefinitions, withPositions = true) {
  const typeScope = new _typeScope.TypeScope(globalModule.typeScope);
  const module = new (withPositions ? _moduleScope.PositionedModuleScope : _moduleScope.ModuleScope)(ast.path, new Map(), globalModule, typeScope);
  await (0, _imports2.default)(ast, errors, module, typeScope, getModuleTypeGraph, isTypeDefinitions);

  try {
    (0, _traverse2.default)(ast, fillModuleScope(module, errors, isTypeDefinitions), middlefillModuleScope(module, errors, isTypeDefinitions), afterFillierActions(module, errors, isTypeDefinitions));
  } catch (e) {
    if (!(e instanceof _errors2.default) && !Array.isArray(e)) {
      throw e;
    }

    if (Array.isArray(e)) {
      errors.push(...e.map(e => Object.assign(e, {
        path: ast.path
      })));
    } else {
      e.source = ast.path;
      errors.push(e);
    }
  }

  module.scopes.forEach(scope => (0, _checking2.default)(ast.path, scope, typeScope, errors));
  (0, _checking2.default)(ast.path, module, typeScope, errors);
  return module;
}

async function createGlobalScope(ast, getModuleTypeGraph, isTypeDefinitions = false, mixTypeDefinitions = a => {}, withPositions = false) {
  const errors = [];
  const globalModule = new _moduleScope.ModuleScope("#global");
  _type.Type.prettyMode = withPositions;
  (0, _hierarchy.setupBaseHierarchy)(globalModule.typeScope);
  (0, _globals2.default)(globalModule);
  (0, _utilityTypes2.default)(globalModule);
  await mixTypeDefinitions(globalModule);
  (0, _hierarchy.setupFullHierarchy)(globalModule.typeScope);
  (0, _operators2.default)(globalModule);

  const createDependencyModuleScope = (ast, isTypeDefinitions) => createModuleScope(ast, errors, getModuleFromString, globalModule, isTypeDefinitions);

  const getModuleFromString = (path, currentPath, loc) => getModuleTypeGraph(path, currentPath, loc, createDependencyModuleScope);

  const modules = await Promise.all(ast.map(module => createModuleScope(module, errors, getModuleFromString, globalModule, isTypeDefinitions, withPositions)));
  (0, _hierarchy.dropAllGlobals)();
  return [modules, errors, globalModule];
}

exports.default = createGlobalScope;

/***/ }),

/***/ "../node_modules/@hegel/core/type-graph/type-scope.js":
/*!************************************************************!*\
  !*** ../node_modules/@hegel/core/type-graph/type-scope.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeScope = undefined;

var _type = __webpack_require__(/*! ./types/type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _scope = __webpack_require__(/*! ./scope */ "../node_modules/@hegel/core/type-graph/scope.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class TypeScope {
  constructor(parent) {
    _defineProperty(this, "priority", void 0);

    _defineProperty(this, "parent", void 0);

    _defineProperty(this, "body", new Map());

    this.parent = parent === undefined ? null : parent;
    this.priority = parent === undefined ? 0 : parent.priority + 1;
  }

  makeCustom() {
    this.priority += 100;
  }

  findTypeWithName(name, ...rest) {
    let currentTypeScope = this;
    let existedType = undefined;

    while (currentTypeScope !== null) {
      existedType = currentTypeScope.body.get(name);

      if (existedType !== undefined) {
        if (existedType instanceof _type.Type) {
          return existedType;
        }

        if (_scope.Scope.canTraverseFunction(rest)) {
          // $FlowIssue
          const result = _scope.Scope.addAndTraverseNodeWithType( // $FlowIssue
          undefined, existedType, ...rest);

          return result === undefined ? this.findTypeWithName(name) : result;
        }
      }

      currentTypeScope = currentTypeScope.parent;
    }

    return undefined;
  }

}

exports.TypeScope = TypeScope;

/***/ }),

/***/ "../node_modules/@hegel/core/type-graph/types/bottom-type.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@hegel/core/type-graph/types/bottom-type.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$BottomType = undefined;

var _type = __webpack_require__(/*! ./type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _typeVar = __webpack_require__(/*! ./type-var */ "../node_modules/@hegel/core/type-graph/types/type-var.js");

var _unionType = __webpack_require__(/*! ./union-type */ "../node_modules/@hegel/core/type-graph/types/union-type.js");

var _functionType = __webpack_require__(/*! ./function-type */ "../node_modules/@hegel/core/type-graph/types/function-type.js");

class $BottomType extends _type.Type {
  static getParent(meta, _, genericArguments = []) {
    return genericArguments.reduce((parent, type) => parent.priority < type.parent.priority ? type.parent : parent, meta.parent || _type.Type.GlobalTypeScope);
  }

  static new(name, meta = {}, ...args) {
    const parent = this.getParent(meta, ...args);
    const newMeta = { ...meta,
      parent
    };
    const newType = new this(newMeta, ...args);
    parent.body.set(name, newType);
    return newType;
  }

  static getName(name, parameters) {
    if (parameters.length === 0) {
      return String(name);
    }

    return `${String(name)}<${parameters.reduce((res, t) => `${res}${res ? ", " : ""}${String(_type.Type.getTypeRoot(t).name)}`, "")}>`;
  }

  constructor(meta, subordinateMagicType, genericArguments = [], loc) {
    meta = { ...meta,
      parent: $BottomType.getParent(meta, subordinateMagicType, genericArguments)
    };
    super($BottomType.getName(subordinateMagicType.name, genericArguments), meta);
    this.subordinateMagicType = subordinateMagicType;
    this.genericArguments = genericArguments;
    this.loc = loc;
    this.priority = subordinateMagicType.priority + 1;
    this.isForAssign = meta.isForAssign;
  }

  changeAll(sourceTypes, targetTypes, typeScope) {
    if (sourceTypes.every(type => !this.canContain(type))) {
      return this;
    }

    if (this._alreadyProcessedWith !== null) {
      return this._alreadyProcessedWith;
    }

    let includedUndefined = false;
    let includedBottom = false;
    const includedSelfIndex = sourceTypes.findIndex(t => this.equalsTo(t));

    if (includedSelfIndex !== -1) {
      return targetTypes[includedSelfIndex];
    }

    const mapper = argument => {
      if (argument instanceof $BottomType) {
        const newType = argument.changeAll(sourceTypes, targetTypes, typeScope);
        includedBottom = true;
        return newType !== argument ? newType : undefined;
      }

      if (argument instanceof _typeVar.TypeVar) {
        const argumentIndex = sourceTypes.findIndex(a => argument instanceof $BottomType ? argument.subordinateType === a : a.equalsTo(argument));
        const result = argumentIndex === -1 ? undefined : targetTypes[argumentIndex];

        if (result === undefined) {
          includedUndefined = true;
        }

        return result;
      }

      return argument;
    };

    this._alreadyProcessedWith = _typeVar.TypeVar.createSelf(this.getChangedName(sourceTypes, targetTypes), this.parent);

    try {
      const appliedParameters = this.genericArguments.map(argument => argument instanceof _unionType.UnionType ? argument.variants.map(mapper).find(a => a !== undefined) : mapper(argument));

      if (appliedParameters.every(a => a === undefined)) {
        return this.endChanges(this);
      }

      if (includedUndefined) {
        const type = this.subordinateMagicType.changeAll(sourceTypes, targetTypes, typeScope);
        return this.endChanges(new $BottomType({}, type, type.genericArguments, this.loc));
      }

      if (includedBottom) {
        return this.endChanges(new $BottomType({}, this.subordinateMagicType, appliedParameters, this.loc));
      }

      const target = this.subordinateMagicType instanceof _typeVar.TypeVar && this.subordinateMagicType.root != undefined ? this.subordinateMagicType.root : this.subordinateMagicType;
      return this.endChanges(target.applyGeneric(appliedParameters, this.loc, false, false, this.isForASsign));
    } catch (e) {
      this._alreadyProcessedWith = null;
      throw e;
    }
  }

  unpack() {
    const target = this.subordinateMagicType instanceof _typeVar.TypeVar && this.subordinateMagicType.root != undefined ? _type.Type.getTypeRoot(this.subordinateMagicType) : this.subordinateMagicType;

    if ("subordinateType" in target) {
      return target.applyGeneric(this.genericArguments.map(a => a instanceof _typeVar.TypeVar && a.root != undefined ? a.root : a), this.loc, true, true, this.isForAssign);
    }

    throw new Error(`Never!!! ${target.constructor.name}`);
  }

  isPrincipalTypeFor(other) {
    if (this._alreadyProcessedWith === other || this.equalsTo(other)) {
      return true;
    }

    this._alreadyProcessedWith = other;
    const self = this.unpack();
    const result = self.isPrincipalTypeFor(other);
    this._alreadyProcessedWith = null;
    return result;
  }

  applyGeneric(parameters, loc, shouldBeMemoize, isCalledAsBottom, ...args) {
    const returnType = parameters.some(p => p instanceof _typeVar.TypeVar && p.isUserDefined) ? new $BottomType({}, this.subordinateMagicType, parameters, loc) : this.subordinateMagicType.applyGeneric(parameters, loc, shouldBeMemoize, true, this.isForAssign);
    return _functionType.FunctionType.term(_functionType.FunctionType.getName(parameters, returnType), {}, parameters, returnType);
  }

  getDifference(type, withReverseUnion = false) {
    if (this._alreadyProcessedWith === type || this.referenceEqualsTo(type)) {
      return [];
    }

    if (type instanceof _typeVar.TypeVar) {
      return [{
        root: this,
        variable: type
      }];
    }

    if (type instanceof $BottomType) {
      type = type.subordinateMagicType;
    }

    const subordinate = this.getOponentType(this.subordinateMagicType);
    this._alreadyProcessedWith = type;
    const diff = subordinate.getDifference(type, withReverseUnion);
    this._alreadyProcessedWith = null;
    return "genericArguments" in subordinate ? diff.map(diff => {
      const index = subordinate.genericArguments.indexOf(diff.variable);

      if (index === -1) {
        return diff;
      }

      return {
        variable: this.genericArguments[index],
        root: diff.root
      };
    }) : diff;
  }

  getRootedSubordinateType() {
    const {
      subordinateMagicType
    } = this;

    if ("subordinateType" in subordinateMagicType) {
      subordinateMagicType.genericArguments.forEach((arg, index) => {
        arg.root = this.genericArguments[index];
      });
    }

    return subordinateMagicType;
  }

  unrootSubordinateType() {
    const {
      subordinateMagicType
    } = this;

    if ("subordinateType" in subordinateMagicType) {
      subordinateMagicType.genericArguments.forEach((arg, index) => {
        arg.root = undefined;
      });
    }
  }

  equalsTo(type) {
    if (this.referenceEqualsTo(type)) {
      return true;
    }

    if (this._alreadyProcessedWith === type) {
      return true;
    }

    this._alreadyProcessedWith = type;

    const result = type instanceof $BottomType && this.canContain(type) && this.genericArguments.length === type.genericArguments.length && this.genericArguments.every((arg, i) => arg.equalsTo(type.genericArguments[i])) && _type.Type.getTypeRoot(this.subordinateMagicType) === _type.Type.getTypeRoot(type.subordinateMagicType);

    this._alreadyProcessedWith = null;
    return result;
  }

  contains(type) {
    if (this._alreadyProcessedWith === type || !this.canContain(type)) {
      return false;
    }

    this._alreadyProcessedWith = type;
    const result = this.genericArguments.some(a => a.contains(type)) || this.subordinateMagicType.contains(type);
    this._alreadyProcessedWith = null;
    return result;
  }

  weakContains(type) {
    if (this._alreadyProcessedWith === type || !this.canContain(type)) {
      return false;
    }

    this._alreadyProcessedWith = type;
    const result = this.genericArguments.some(a => a.weakContains(type)) || this.subordinateMagicType.weakContains(type);
    this._alreadyProcessedWith = null;
    return result;
  }

  makeNominal() {
    this.subordinateMagicType.makeNominal();
  }

  getNextParent(typeScope) {
    if (this._alreadyProcessedWith !== null) {
      return _type.Type.GlobalTypeScope;
    }

    this._alreadyProcessedWith = this;
    const sortedParents = [...this.genericArguments].map(a => a.getNextParent(typeScope)).sort((a, b) => b.priority - a.priority);

    for (const parent of sortedParents) {
      if (parent.priority <= typeScope.priority && parent !== typeScope) {
        this._alreadyProcessedWith = null;
        return parent;
      }
    }

    this._alreadyProcessedWith = null;
    return _type.Type.GlobalTypeScope;
  }

}

exports.$BottomType = $BottomType;

/***/ }),

/***/ "../node_modules/@hegel/core/type-graph/types/collection-type.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@hegel/core/type-graph/types/collection-type.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollectionType = undefined;

var _type = __webpack_require__(/*! ./type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _typeVar = __webpack_require__(/*! ./type-var */ "../node_modules/@hegel/core/type-graph/types/type-var.js");

var _tupleType = __webpack_require__(/*! ./tuple-type */ "../node_modules/@hegel/core/type-graph/types/tuple-type.js");

var _unionType = __webpack_require__(/*! ./union-type */ "../node_modules/@hegel/core/type-graph/types/union-type.js");

var _genericType = __webpack_require__(/*! ./generic-type */ "../node_modules/@hegel/core/type-graph/types/generic-type.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class CollectionType extends _type.Type {
  static term(name, meta = {}, keyType, valueType, ...args) {
    let parent = meta.parent;

    if (parent === undefined || keyType.parent.priority > parent.priority) {
      parent = keyType.parent;
    }

    if (parent === undefined || valueType.parent.priority > parent.priority) {
      parent = valueType.parent;
    }

    const newMeta = { ...meta,
      parent
    };
    return super.term(name, newMeta, keyType, valueType, ...args);
  }

  static getName(keyType, valueType) {
    return `{ [key: ${String(_type.Type.getTypeRoot(keyType).name)}]: ${String(_type.Type.getTypeRoot(valueType).name)} }`;
  }

  constructor(name, meta = {}, keyType, valueType) {
    super(name, meta);

    _defineProperty(this, "keyType", void 0);

    _defineProperty(this, "valueType", void 0);

    _defineProperty(this, "priority", 2);

    this.keyType = keyType;
    this.valueType = valueType;
    this.onlyLiteral = true;
  }

  getPropertyType(propertyName, isForAssign = false) {
    if (typeof propertyName === this.keyType.name || propertyName === this.keyType.name) {
      if (isForAssign) {
        return this.valueType;
      }

      const result = this.valueType instanceof _unionType.UnionType && this.valueType.variants.some(a => a.equalsTo(_type.Type.Undefined)) ? this.valueType : _unionType.UnionType.term(_unionType.UnionType.getName([this.valueType, _type.Type.Undefined]), {}, [this.valueType, _type.Type.Undefined]);

      if (result) {
        return result;
      }
    }

    return super.getPropertyType(propertyName);
  }

  equalsTo(anotherType) {
    anotherType = this.getOponentType(anotherType, true, false);

    if (this.referenceEqualsTo(anotherType)) {
      return true;
    }

    if (this._alreadyProcessedWith === anotherType) {
      return true;
    }

    this._alreadyProcessedWith = anotherType;
    const result = anotherType instanceof CollectionType && super.equalsTo(anotherType) && this.canContain(anotherType) && this.keyType.equalsTo(anotherType.keyType) && this.valueType.equalsTo(anotherType.valueType);
    this._alreadyProcessedWith = null;
    return result;
  }

  isSuperTypeFor(anotherType) {
    anotherType = this.getOponentType(anotherType);

    const selfNameWithoutApplying = _genericType.GenericType.getNameWithoutApplying(this.name);

    const otherfNameWithoutApplying = _genericType.GenericType.getNameWithoutApplying(anotherType.name);

    if (this._alreadyProcessedWith === anotherType) {
      return true;
    }

    this._alreadyProcessedWith = anotherType;
    const result = anotherType instanceof CollectionType && selfNameWithoutApplying === otherfNameWithoutApplying && this.keyType.equalsTo(anotherType.keyType) && this.valueType.isPrincipalTypeFor(anotherType.valueType) || anotherType instanceof _tupleType.TupleType && (anotherType.isSubtypeOf === null || selfNameWithoutApplying === _genericType.GenericType.getNameWithoutApplying(anotherType.isSubtypeOf.name)) && this.keyType.equalsTo(_type.Type.Number) && anotherType.items.every(t => this.valueType.isPrincipalTypeFor(t));
    this._alreadyProcessedWith = null;
    return result;
  }

  changeAll(sourceTypes, targetTypes, typeScope) {
    if (sourceTypes.every(type => !this.canContain(type))) {
      return this;
    }

    if (this._alreadyProcessedWith !== null) {
      return this._alreadyProcessedWith;
    }

    this._alreadyProcessedWith = _typeVar.TypeVar.createSelf(this.getChangedName(sourceTypes, targetTypes), this.parent);

    try {
      const newValueType = this.valueType.changeAll(sourceTypes, targetTypes, typeScope);
      const isSubtypeOf = this.isSubtypeOf && this.isSubtypeOf.changeAll(sourceTypes, targetTypes, typeScope);

      if (newValueType === this.valueType && isSubtypeOf === this.isSubtypeOf) {
        this._alreadyProcessedWith = null;
        return this;
      }

      return this.endChanges(CollectionType.term(this.getChangedName(sourceTypes, targetTypes), {
        isSubtypeOf
      }, this.keyType, newValueType));
    } catch (e) {
      this._alreadyProcessedWith = null;
      throw e;
    }
  }

  getDifference(type, withReverseUnion = false) {
    type = this.getOponentType(type);

    if (this._alreadyProcessedWith === type || this.referenceEqualsTo(type)) {
      return [];
    }

    this._alreadyProcessedWith = type;

    if (type instanceof _tupleType.TupleType) {
      // $FlowIssue
      type = type.isSubtypeOf;
    }

    if (type instanceof CollectionType) {
      const keyDiff = this.keyType.getDifference(type.keyType, withReverseUnion);
      const valueDiff = this.valueType.getDifference(type.valueType, withReverseUnion);
      this._alreadyProcessedWith = null;
      return keyDiff.concat(valueDiff);
    }

    const result = super.getDifference(type, withReverseUnion);
    this._alreadyProcessedWith = null;
    return result;
  }

  contains(type) {
    if (this._alreadyProcessedWith === type || !this.canContain(type)) {
      return false;
    }

    this._alreadyProcessedWith = type;
    const result = super.contains(type) || this.keyType.contains(type) || this.valueType.contains(type);
    this._alreadyProcessedWith = null;
    return result;
  }

  weakContains(type) {
    if (this._alreadyProcessedWith === type || !this.canContain(type)) {
      return false;
    }

    this._alreadyProcessedWith = type;
    const result = super.contains(type) || this.keyType.weakContains(type) || this.valueType.weakContains(type);
    this._alreadyProcessedWith = null;
    return result;
  }

  makeNominal() {
    // $FlowIssue
    this.isSubtypeOf.makeNominal();
  }

  getNextParent(typeScope) {
    if (this._alreadyProcessedWith !== null) {
      return _type.Type.GlobalTypeScope;
    }

    this._alreadyProcessedWith = this;
    const sortedParents = [this.keyType, this.valueType].map(a => a.getNextParent(typeScope)).sort((a, b) => b.priority - a.priority);

    for (const parent of sortedParents) {
      if (parent.priority <= typeScope.priority && parent !== typeScope) {
        this._alreadyProcessedWith = null;
        return parent;
      }
    }

    this._alreadyProcessedWith = null;
    return _type.Type.GlobalTypeScope;
  }

}

exports.CollectionType = CollectionType;

/***/ }),

/***/ "../node_modules/@hegel/core/type-graph/types/function-type.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@hegel/core/type-graph/types/function-type.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FunctionType = exports.RestArgument = undefined;

var _type = __webpack_require__(/*! ./type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _typeVar = __webpack_require__(/*! ./type-var */ "../node_modules/@hegel/core/type-graph/types/type-var.js");

var _typeScope = __webpack_require__(/*! ../type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

var _constants = __webpack_require__(/*! ../constants */ "../node_modules/@hegel/core/type-graph/constants.js");

var _genericType = __webpack_require__(/*! ./generic-type */ "../node_modules/@hegel/core/type-graph/types/generic-type.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class RestArgument extends _type.Type {
  static term(name, meta = {}, type, ...args) {
    const newMeta = { ...meta,
      parent: meta.parent || type.parent
    };
    return super.term(name, newMeta, type, ...args);
  }

  constructor(type) {
    super(`...${String(type.name)}`);

    _defineProperty(this, "type", void 0);

    this.type = type;
  }

  changeAll(sourceTypes, targetTypes, typeScope) {
    if (sourceTypes.every(type => !this.canContain(type))) {
      return this;
    }

    if (this._alreadyProcessedWith !== null) {
      return this._alreadyProcessedWith;
    }

    this._alreadyProcessedWith = _typeVar.TypeVar.createSelf(this.name, this.parent);

    try {
      const newType = this.type.changeAll(sourceTypes, targetTypes, typeScope);

      if (this.type === newType) {
        this._alreadyProcessedWith = null;
        return this;
      }

      return this.endChanges(new RestArgument(newType));
    } catch (e) {
      this._alreadyProcessedWith = null;
      throw e;
    }
  }

  isType(action, anotherType) {
    if (!(anotherType instanceof RestArgument)) {
      return false;
    }

    const selfType = this.getOponentType(this.type, false);
    const otherType = this.getOponentType(anotherType.type, false);

    if (!("valueType" in selfType && "valueType" in otherType)) {
      return false;
    } // $FlowIssue


    return selfType.valueType[action](otherType.valueType);
  }

  equalsTo(anotherType) {
    return this.isType("equalsTo", anotherType);
  }

  isSuperTypeFor(anotherType) {
    return this.isType("isSuperTypeFor", anotherType);
  }

  contains(type) {
    return this.type.contains(type);
  }

  weakContains(type) {
    return this.type.weakContains(type);
  }

  getDifference(type, withReverseUnion = false) {
    const selfType = this.getOponentType(this.type); // $FlowIssue

    return selfType.valueType.getDifference(type, withReverseUnion);
  }

}

exports.RestArgument = RestArgument;

class FunctionType extends _type.Type {
  static term(name, meta = {}, argumentsTypes, returnType, ...args) {
    let parent = meta.parent;
    const searchingItems = argumentsTypes.concat([returnType]);
    const length = searchingItems.length;

    for (let i = 0; i < length; i++) {
      const item = searchingItems[i];

      if (item instanceof _type.Type && (parent === undefined || parent.priority < item.parent.priority)) {
        parent = item.parent;
      }
    }

    const newMeta = { ...meta,
      parent
    };
    return super.term(name, newMeta, argumentsTypes, returnType, ...args);
  }

  static getName(params, returnType, genericParams = [], isAsync = false, throws) {
    const asyncPart = this.getAsyncPart(isAsync);
    const genericPart = this.getGenericPart(genericParams, this.prettyMode && genericParams.length >= 4);
    const argsPart = this.getArgumentsPart(params, this.prettyMode && (params.length >= 4 || params.some(param => String(param.name).includes("\n")) && params.length !== 1));
    const throwsPart = this.getThrowsPart(throws);
    const returnPart = this.getReturnPart(returnType);
    return this.prettyMode ? this.multyLine(asyncPart, genericPart, argsPart, throwsPart, returnPart) : this.oneLine(asyncPart, genericPart, argsPart, throwsPart, returnPart);
  }

  static oneLine(asyncPart, genericPart, argsPart, throwsPart, returnPart) {
    return `${asyncPart}${genericPart}${argsPart} => ${returnPart}${throwsPart}`;
  }

  static multyLine(asyncPart, genericPart, argsPart, throwsPart, returnPart) {
    return `${asyncPart}${genericPart}${argsPart} => ${returnPart.replace(/\n/g, "\n\t")}${throwsPart}`;
  }

  static getAsyncPart(isAsync) {
    return isAsync ? "async " : "";
  }

  static getGenericPart(genericParams = [], isMultyLine = false) {
    return genericParams.length === 0 ? "" : `<${genericParams.reduce((res, t) => `${res}${res ? `,${isMultyLine ? "\n\t" : " "}` : ""}${String(t.name)}${t.constraint ? `: ${String(t.constraint.name)}` : ""}`, "")}>`;
  }

  static getArgumentsPart(args = [], isMultyLine = false) {
    return `(${isMultyLine ? "\n\t" : ""}${args.map(param => {
      const isRest = param instanceof RestArgument; // $FlowIssue

      param = _type.Type.getTypeRoot(isRest ? param.type : param);
      const t = String(param.name);
      const name = isRest ? `...${t} ` : t;
      return isMultyLine ? name.replace(/\n/g, "\n\t") : name;
    }).join(isMultyLine ? ",\n\t" : ", ")}${isMultyLine ? "\n" : ""})`;
  }

  static getThrowsPart(throws) {
    return throws !== undefined ? ` throws ${String(throws.name)}` : "";
  }

  static getReturnPart(returnType) {
    return String(returnType.name);
  }

  constructor(name, typeMeta = {}, argumentsTypes, returnType, isAsync = false) {
    super(name, {
      isSubtypeOf: FunctionType.Function,
      ...typeMeta
    });

    _defineProperty(this, "argumentsTypes", void 0);

    _defineProperty(this, "returnType", void 0);

    _defineProperty(this, "throwable", void 0);

    _defineProperty(this, "isAsync", void 0);

    _defineProperty(this, "priority", 2);

    this.argumentsTypes = argumentsTypes;
    this.returnType = returnType;
    this.isAsync = isAsync;
  }

  changeAll(sourceTypes, targetTypes, typeScope) {
    if (sourceTypes.every(type => !this.canContain(type))) {
      return this;
    }

    if (this._alreadyProcessedWith !== null) {
      return this._alreadyProcessedWith;
    }

    this._alreadyProcessedWith = _typeVar.TypeVar.createSelf(this.getChangedName(sourceTypes, targetTypes), this.parent);
    let isArgumentsChanged = false;

    try {
      const newArguments = this.argumentsTypes.map(t => {
        const newT = t.changeAll(sourceTypes, targetTypes, typeScope);

        if (newT === t) {
          return t;
        }

        isArgumentsChanged = true;
        return newT;
      });
      const newReturn = this.returnType.changeAll(sourceTypes, targetTypes, typeScope);

      if (newReturn === this.returnType && !isArgumentsChanged) {
        this._alreadyProcessedWith = null;
        return this;
      }

      const result = FunctionType.term(FunctionType.getName(newArguments, newReturn, undefined, this.isAsync), {}, newArguments, newReturn);
      result.isAsync = this.isAsync;
      return this.endChanges(result);
    } catch (e) {
      this._alreadyProcessedWith = null;
      throw e;
    }
  }

  equalsTo(anotherType) {
    anotherType = this.getOponentType(anotherType);

    if (this.referenceEqualsTo(anotherType)) {
      return true;
    }

    if (this._alreadyProcessedWith === anotherType) {
      return true;
    }

    this._alreadyProcessedWith = anotherType;
    const result = anotherType instanceof FunctionType && super.equalsTo(anotherType) && this.canContain(anotherType) && this.returnType.equalsTo(anotherType.returnType) && this.argumentsTypes.length === anotherType.argumentsTypes.length && this.argumentsTypes.every((arg, i) => // $FlowIssue
    arg.equalsTo(anotherType.argumentsTypes[i]));
    this._alreadyProcessedWith = null;
    return result;
  }

  isSuperTypeFor(anotherType) {
    anotherType = this.getOponentType(anotherType);

    if (this._alreadyProcessedWith === anotherType) {
      return true;
    }

    this._alreadyProcessedWith = anotherType;

    if (!(anotherType instanceof FunctionType)) {
      anotherType = anotherType.getPropertyType(_constants.CALLABLE);

      if (anotherType === null) {
        this._alreadyProcessedWith = null;
        return false;
      }
    }

    const result = this.returnType.isPrincipalTypeFor(anotherType.returnType) && this.argumentsTypes.length >= anotherType.argumentsTypes.length && anotherType.argumentsTypes.every((arg, i) => arg.isPrincipalTypeFor(this.argumentsTypes[i] || _type.Type.Undefined));
    this._alreadyProcessedWith = null;
    return result;
  }

  getDifference(type, withReverseUnion = false) {
    if (this._alreadyProcessedWith === type || this.referenceEqualsTo(type)) {
      return [];
    }

    this._alreadyProcessedWith = type;

    if ("subordinateType" in type && // $FlowIssue
    type.subordinateType instanceof FunctionType) {
      type = type.subordinateType;
    }

    if (type instanceof FunctionType) {
      const {
        argumentsTypes,
        returnType
      } = type; // $FlowIssue

      const argumentsDiff = this.argumentsTypes.flatMap((arg, i) => argumentsTypes[i] ? arg.getDifference(argumentsTypes[i], withReverseUnion) : []);
      const returnDiff = this.returnType.getDifference(returnType, withReverseUnion);
      this._alreadyProcessedWith = null;
      return argumentsDiff.concat(returnDiff);
    }

    const result = super.getDifference(type, withReverseUnion);
    this._alreadyProcessedWith = null;
    return result;
  }

  contains(type) {
    if (this._alreadyProcessedWith === type || !this.canContain(type)) {
      return false;
    }

    this._alreadyProcessedWith = type;
    const result = super.contains(type) || this.argumentsTypes.some(a => a.contains(type)) || this.returnType.contains(type);
    this._alreadyProcessedWith = null;
    return result;
  }

  weakContains(type) {
    if (this._alreadyProcessedWith === type || !this.canContain(type)) {
      return false;
    }

    this._alreadyProcessedWith = type;
    const result = super.weakContains(type) || this.argumentsTypes.some(a => a.weakContains(type)) || this.returnType.weakContains(type);
    this._alreadyProcessedWith = null;
    return result;
  }

  generalize(types, typeScope) {
    const localTypeScope = new _typeScope.TypeScope(typeScope);
    const newArguments = this.argumentsTypes.map(arg => arg.generalize(types, localTypeScope));
    const newReturnType = this.returnType.generalize(types, localTypeScope);
    const maybeGenericTypes = newArguments.concat(newReturnType);
    const newGenericArguments = types.filter(type => maybeGenericTypes.some(arg => arg.weakContains(type) && !arg.containsAsGeneric(type)));

    if (this.argumentsTypes.every((arg, i) => arg === newArguments[i]) && this.returnType === newReturnType && newGenericArguments.length === 0) {
      return this;
    }

    const fnName = FunctionType.getName(newArguments, newReturnType, newGenericArguments);
    const newFnType = FunctionType.term(fnName, {}, newArguments, newReturnType);

    if (newGenericArguments.length === 0) {
      return newFnType;
    }

    return _genericType.GenericType.new(fnName, {
      parent: typeScope
    }, newGenericArguments, localTypeScope, newFnType);
  }

  getNextParent(typeScope) {
    if (this._alreadyProcessedWith !== null) {
      return _type.Type.GlobalTypeScope;
    }

    this._alreadyProcessedWith = this;
    const sortedParents = this.argumentsTypes.concat([this.returnType]).map(a => a.getNextParent(typeScope)).sort((a, b) => b.priority - a.priority);

    for (const parent of sortedParents) {
      if (parent.priority <= typeScope.priority && parent !== typeScope) {
        this._alreadyProcessedWith = null;
        return parent;
      }
    }

    this._alreadyProcessedWith = null;
    return _type.Type.GlobalTypeScope;
  }

}

exports.FunctionType = FunctionType;

_defineProperty(FunctionType, "Function", new _typeVar.TypeVar("Function"));

/***/ }),

/***/ "../node_modules/@hegel/core/type-graph/types/generic-type.js":
/*!********************************************************************!*\
  !*** ../node_modules/@hegel/core/type-graph/types/generic-type.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenericType = undefined;

var _errors = __webpack_require__(/*! ../../utils/errors */ "../node_modules/@hegel/core/utils/errors.js");

var _errors2 = _interopRequireDefault(_errors);

var _type = __webpack_require__(/*! ./type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _typeVar = __webpack_require__(/*! ./type-var */ "../node_modules/@hegel/core/type-graph/types/type-var.js");

var _unionType = __webpack_require__(/*! ./union-type */ "../node_modules/@hegel/core/type-graph/types/union-type.js");

var _typeScope = __webpack_require__(/*! ../type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

var _bottomType = __webpack_require__(/*! ./bottom-type */ "../node_modules/@hegel/core/type-graph/types/bottom-type.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class GenericType extends _type.Type {
  static new(name, meta = {}, ...args) {
    const [, localTypeScope, subordinateType] = args;
    const declaratedParent = meta.parent || _type.Type.GlobalTypeScope;
    const subordinateParent = subordinateType.getNextParent(localTypeScope);
    const parent = declaratedParent.priority > subordinateParent.priority ? declaratedParent : subordinateParent;
    return super.new(name, { ...meta,
      parent
    }, ...args);
  }

  static term(name, meta = {}, ...args) {
    const [, localTypeScope, subordinateType] = args;
    const declaratedParent = meta.parent || _type.Type.GlobalTypeScope;
    const subordinateParent = subordinateType.getNextParent(localTypeScope.priority);
    const parent = declaratedParent.priority > subordinateParent.priority ? declaratedParent : subordinateParent;
    return super.term(name, { ...meta,
      parent
    }, ...args);
  }

  static getNameWithoutApplying(name) {
    return String(name).replace(/<[\w\W]+>/g, "");
  }

  static getName(name, parameters) {
    if (parameters.length === 0) {
      return String(name);
    }

    const isMultyLine = this.prettyMode && parameters.length >= 4;
    const isSplitterPresented = isMultyLine || parameters.some(a => a instanceof _unionType.UnionType && a.variants.length >= 4);
    return `${String(name)}<${isSplitterPresented ? "\n\t" : ""}${this.getParametersPart(parameters, isMultyLine)}${isSplitterPresented ? "\n" : ""}>`;
  }

  static getParametersPart(parameters, isMultyLine = false) {
    return parameters.reduce((res, t) => `${res}${res ? `,${isMultyLine ? "\n\t" : " "}` : ""}${String(t.name).replace(/\n/g, "\n\t")}`, "");
  }

  constructor(name, meta = {}, genericArguments, typeScope, type) {
    super(name, meta);

    _defineProperty(this, "genericArguments", void 0);

    _defineProperty(this, "subordinateType", void 0);

    _defineProperty(this, "localTypeScope", void 0);

    this.subordinateType = type;
    this.localTypeScope = typeScope;
    this.genericArguments = genericArguments;
  }

  isSuperTypeFor(anotherType) {
    if (this._alreadyProcessedWith === anotherType) {
      return true;
    }

    this._alreadyProcessedWith = anotherType;
    const otherType = anotherType instanceof GenericType ? anotherType.subordinateType : anotherType;
    const result = this.subordinateType.isSuperTypeFor(otherType);
    this._alreadyProcessedWith = null;
    return result;
  }

  assertParameters(parameters, loc, ignoreLength = false) {
    if (parameters.length !== this.genericArguments.length) {
      throw new _errors2.default(`Generic "${String(this.name)}" called with wrong number of arguments. Expect: ${this.genericArguments.length}, Actual: ${parameters.length}`, loc);
    }

    const genericArguments = this.genericArguments.map(a => a.constraint !== undefined ? new _typeVar.TypeVar(String(a.name), {
      isSubtypeOf: a.isSubtypeOf,
      parent: a.parent
    }, // $FlowIssue
    a.constraint.changeAll(this.genericArguments, parameters), a.isUserDefined) : a);
    const wrongArgumentIndex = genericArguments.findIndex((arg, i) => !arg.isPrincipalTypeFor(parameters[i]));

    if (wrongArgumentIndex !== -1) {
      const parameter = parameters[wrongArgumentIndex];
      const typeVar = genericArguments[wrongArgumentIndex];
      throw new _errors2.default(`Parameter "${String(parameter.name)}" is incompatible with restriction ${typeVar.constraint ? `"${String(typeVar.constraint.name)}` : `of type "${String(typeVar.name)}"`}"`, loc);
    }
  }

  changeAll(sourceTypes, targetTypes, typeScope) {
    if (sourceTypes.every(type => !this.canContain(type))) {
      return this;
    }

    if (this._alreadyProcessedWith !== null) {
      return this._alreadyProcessedWith;
    }

    this._alreadyProcessedWith = _typeVar.TypeVar.createSelf(this.getChangedName(sourceTypes, targetTypes), this.parent);

    try {
      const newSubordinateType = this.subordinateType.changeAll(sourceTypes, targetTypes, typeScope);

      if (newSubordinateType === this.subordinateType) {
        this._alreadyProcessedWith = null;
        return this;
      }

      const newGenericArguments = this.genericArguments.filter(arg => newSubordinateType.contains(arg));

      if (newGenericArguments.length === 0) {
        return this.endChanges(newSubordinateType);
      }

      const newName = "argumentsTypes" in newSubordinateType ? newSubordinateType.constructor.getName(newSubordinateType.argumentsTypes, newSubordinateType.returnType, newGenericArguments) : GenericType.getName(newSubordinateType.name, newGenericArguments);
      const theMostCloseParent = targetTypes.reduce((parent, type) => newSubordinateType.contains(type) && (parent === undefined || parent.priority <= type.parent.priority) ? type.parent : parent, undefined);
      return this.endChanges(GenericType.term(newName, {
        parent: theMostCloseParent
      }, newGenericArguments, this.localTypeScope, newSubordinateType));
    } catch (e) {
      this._alreadyProcessedWith = null;
      throw e;
    }
  }

  applyGeneric(appliedParameters, loc, shouldBeMemoize = true) {
    this.assertParameters(appliedParameters, loc);
    const parameters = this.genericArguments.map((t, i) => {
      const appliedType = appliedParameters[i]; // Needed for type inferencing

      if (appliedType instanceof _typeVar.TypeVar && !appliedType.isUserDefined && t.isUserDefined && appliedType.constraint !== t.constraint) {
        return t;
      }

      if (t.constraint === undefined || !(t.constraint instanceof _unionType.UnionType) || appliedType.equalsTo(t)) {
        return appliedType;
      }

      if (t.constraint instanceof _unionType.UnionType && appliedType instanceof _unionType.UnionType) {
        return appliedType;
      }

      const variant = t.constraint.variants.find(v => v.isPrincipalTypeFor(appliedType));

      if (variant === undefined) {
        throw new Error("Never!");
      }

      return variant;
    });
    const appliedTypeName = GenericType.getName(this.name, parameters);
    const oldAppliedSelf = new _bottomType.$BottomType({
      parent: this.subordinateType.parent
    }, this, this.genericArguments);
    const theMostPriorityParent = parameters.reduce((parent, type) => parent === undefined || parent.priority < type.parent.priority ? type.parent : parent, _type.Type.GlobalTypeScope);

    const appliedSelf = _typeVar.TypeVar.term(appliedTypeName, {
      parent: theMostPriorityParent,
      isSubtypeOf: _typeVar.TypeVar.Self
    }, undefined, true);

    if (!(appliedSelf instanceof _typeVar.TypeVar)) {
      return appliedSelf;
    }

    const result = this.subordinateType.changeAll([...this.genericArguments, oldAppliedSelf], [...parameters, appliedSelf], theMostPriorityParent);
    result.name = result.name === undefined ? appliedTypeName : result.name;
    appliedSelf.root = result;
    result.priority = this.subordinateType.priority + 1;
    return result.save();
  }

  getPropertyType(propertyName) {
    const result = this.subordinateType.getPropertyType(propertyName);

    if (result === null && this.isSubtypeOf != null) {
      return this.isSubtypeOf.getPropertyType(propertyName);
    }

    return result;
  }

  getDifference(type, withReverseUnion = false) {
    if (this._alreadyProcessedWith === type || this.referenceEqualsTo(type)) {
      return [];
    }

    if (this.subordinateType === null) {
      return type instanceof _typeVar.TypeVar ? [{
        root: this,
        variable: type
      }] : [];
    }

    this._alreadyProcessedWith = type;

    if (type instanceof GenericType) {
      const result = this.subordinateType.getDifference(type.subordinateType, withReverseUnion) // $FlowIssue
      .filter(a => !type.genericArguments.includes(a.variable));
      this._alreadyProcessedWith = null;
      return result;
    }

    if (type instanceof _typeVar.TypeVar) {
      const result = super.getDifference(type, withReverseUnion);
      this._alreadyProcessedWith = null;
      return result;
    }

    const result = this.subordinateType.getDifference(type, withReverseUnion).filter(a => !this.genericArguments.includes(a.variable));
    this._alreadyProcessedWith = null;
    return result;
  }

  contains(type) {
    if (this._alreadyProcessedWith === type || !this.canContain(type)) {
      return false;
    }

    this._alreadyProcessedWith = type;
    const result = super.contains(type) || this.subordinateType.contains(type);
    this._alreadyProcessedWith = null;
    return result;
  }

  weakContains(type) {
    if (this._alreadyProcessedWith === type || !this.canContain(type)) {
      return false;
    }

    this._alreadyProcessedWith = type;
    const result = super.contains(type) || this.subordinateType.weakContains(type);
    this._alreadyProcessedWith = null;
    return result;
  }

  makeNominal() {
    this.subordinateType.makeNominal();
  }

  containsAsGeneric(type) {
    return this.genericArguments.includes(type);
  }

  getNextParent(typeScope) {
    if (this._alreadyProcessedWith !== null || this.subordinateType == null) {
      return _type.Type.GlobalTypeScope;
    }

    this._alreadyProcessedWith = this;
    const result = this.subordinateType.getNextParent(typeScope);
    this._alreadyProcessedWith = null;
    return result;
  }

  canContain(type) {
    return this.subordinateType !== null && this.subordinateType.canContain(type);
  }

}

exports.GenericType = GenericType;

/***/ }),

/***/ "../node_modules/@hegel/core/type-graph/types/immutable-type.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@hegel/core/type-graph/types/immutable-type.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$Immutable = exports.$AppliedImmutable = undefined;

var _errors = __webpack_require__(/*! ../../utils/errors */ "../node_modules/@hegel/core/utils/errors.js");

var _errors2 = _interopRequireDefault(_errors);

var _type = __webpack_require__(/*! ./type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _typeVar = __webpack_require__(/*! ./type-var */ "../node_modules/@hegel/core/type-graph/types/type-var.js");

var _typeScope = __webpack_require__(/*! ../type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

var _genericType = __webpack_require__(/*! ./generic-type */ "../node_modules/@hegel/core/type-graph/types/generic-type.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class $AppliedImmutable extends _type.Type {
  static term(name, meta = {}, readonly, ...args) {
    name = name || this.getName(readonly);
    let parent = meta.parent;

    if (parent === undefined || readonly.parent.priority > parent.priority) {
      parent = readonly.parent;
    }

    const newMeta = { ...meta,
      parent
    };
    return super.term(name, newMeta, readonly, ...args);
  }

  static getName(type) {
    return `$Immutable<${String(type.name)}>`;
  }

  constructor(name, meta = {}, type) {
    name = name || this.getName(type);
    super(name, meta);

    _defineProperty(this, "readonly", void 0);

    this.readonly = type;
  }

  equalsTo(type) {
    return type instanceof $AppliedImmutable && this.readonly.equalsTo(type.readonly);
  }

  isSuperTypeFor(type) {
    return type instanceof $AppliedImmutable && this.readonly.isSuperTypeFor(type.readonly);
  }

  contains(type) {
    return this.readonly.contains(type);
  }

  weakContains(type) {
    return this.readonly.contains(type);
  }

  changeAll(...args) {
    const changed = this.readonly.changeAll(...args);

    if (changed === this.readonly) {
      return this;
    }

    return $AppliedImmutable.term(null, {}, changed);
  }

  getPropertyType(propertyName) {
    const propertyType = this.readonly.getPropertyType(propertyName);

    if (propertyType === null || propertyType instanceof $AppliedImmutable) {
      return propertyType;
    }

    return $AppliedImmutable.term(null, {}, propertyType);
  }

}

exports.$AppliedImmutable = $AppliedImmutable;

class $Immutable extends _genericType.GenericType {
  constructor(_, meta = {}) {
    const parent = new _typeScope.TypeScope(meta.parent);
    super("$Immutable", meta, [_typeVar.TypeVar.term("target", {
      parent
    })], parent, null);
  }

  isPrincipalTypeFor() {
    return false;
  }

  equalsTo(type) {
    return false;
  }

  isSuperTypeFor() {
    return false;
  }

  applyGeneric(parameters, loc, shouldBeMemoize = true, isCalledAsBottom = false) {
    super.assertParameters(parameters, loc);
    const [target] = parameters;

    if (!(target instanceof _type.Type)) {
      throw new _errors2.default("First parameter should be an type", loc);
    }

    return $AppliedImmutable.term(`$Immutable<${String(target.name)}>`, {
      parent: target.parent
    }, target);
  }

}

exports.$Immutable = $Immutable;

/***/ }),

/***/ "../node_modules/@hegel/core/type-graph/types/instance-of-type.js":
/*!************************************************************************!*\
  !*** ../node_modules/@hegel/core/type-graph/types/instance-of-type.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$InstanceOf = undefined;

var _errors = __webpack_require__(/*! ../../utils/errors */ "../node_modules/@hegel/core/utils/errors.js");

var _errors2 = _interopRequireDefault(_errors);

var _typeVar = __webpack_require__(/*! ./type-var */ "../node_modules/@hegel/core/type-graph/types/type-var.js");

var _typeScope = __webpack_require__(/*! ../type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

var _objectType = __webpack_require__(/*! ./object-type */ "../node_modules/@hegel/core/type-graph/types/object-type.js");

var _genericType = __webpack_require__(/*! ./generic-type */ "../node_modules/@hegel/core/type-graph/types/generic-type.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class $InstanceOf extends _genericType.GenericType {
  constructor(_, meta = {}) {
    const parent = new _typeScope.TypeScope(meta.parent);
    super("$InstanceOf", meta, [_typeVar.TypeVar.term("target", {
      parent
    })], parent, null);
  }

  isPrincipalTypeFor() {
    return false;
  }

  equalsTo() {
    return false;
  }

  isSuperTypeFor() {
    return false;
  }

  applyGeneric(parameters, loc) {
    super.assertParameters(parameters, loc);
    const [target] = parameters;

    if (!(target.type instanceof _objectType.ObjectType && target.type.instanceType !== null)) {
      throw new _errors2.default("Cannot apply $InstanceOf to non-class type", loc);
    }

    return target.type.instanceType;
  }

}

exports.$InstanceOf = $InstanceOf;

/***/ }),

/***/ "../node_modules/@hegel/core/type-graph/types/intersection-type.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@hegel/core/type-graph/types/intersection-type.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$Intersection = undefined;

var _errors = __webpack_require__(/*! ../../utils/errors */ "../node_modules/@hegel/core/utils/errors.js");

var _errors2 = _interopRequireDefault(_errors);

var _typeVar = __webpack_require__(/*! ./type-var */ "../node_modules/@hegel/core/type-graph/types/type-var.js");

var _typeScope = __webpack_require__(/*! ../type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

var _objectType = __webpack_require__(/*! ./object-type */ "../node_modules/@hegel/core/type-graph/types/object-type.js");

var _genericType = __webpack_require__(/*! ./generic-type */ "../node_modules/@hegel/core/type-graph/types/generic-type.js");

var _bottomType = __webpack_require__(/*! ./bottom-type */ "../node_modules/@hegel/core/type-graph/types/bottom-type.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class $Intersection extends _genericType.GenericType {
  constructor(_, meta = {}) {
    const parent = new _typeScope.TypeScope(meta.parent);
    super("$Intersection", meta, [_typeVar.TypeVar.term("target1", {
      parent
    }), _typeVar.TypeVar.term("target2", {
      parent
    })], parent, null);
  }

  isPrincipalTypeFor() {
    return false;
  }

  equalsTo() {
    return false;
  }

  isSuperTypeFor() {
    return false;
  }

  applyGeneric(parameters, loc, shouldBeMemoize = true, isCalledAsBottom = false) {
    super.assertParameters(parameters, loc);
    const [firstObject, secondObject] = parameters;
    const isFirstVar = firstObject instanceof _typeVar.TypeVar;
    const isSecondVar = secondObject instanceof _typeVar.TypeVar;

    if (isFirstVar && !firstObject.isUserDefined) {
      firstObject.constraint = _objectType.ObjectType.Object;
    }

    if (isSecondVar && !secondObject.isUserDefined) {
      secondObject.constraint = _objectType.ObjectType.Object;
    }

    if (isFirstVar || isSecondVar) {
      return new _bottomType.$BottomType({}, this, [firstObject, secondObject]);
    }

    if (!(firstObject instanceof _objectType.ObjectType)) {
      throw new _errors2.default("First parameter should be an object type", loc);
    }

    if (!(secondObject instanceof _objectType.ObjectType)) {
      throw new _errors2.default("Second parameter should be an object type", loc);
    }

    const newProperties = [...firstObject.properties, ...secondObject.properties];
    return _objectType.ObjectType.term(_objectType.ObjectType.getName(newProperties), {}, newProperties);
  }

}

exports.$Intersection = $Intersection;

/***/ }),

/***/ "../node_modules/@hegel/core/type-graph/types/keys-type.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@hegel/core/type-graph/types/keys-type.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$Keys = undefined;

var _errors = __webpack_require__(/*! ../../utils/errors */ "../node_modules/@hegel/core/utils/errors.js");

var _errors2 = _interopRequireDefault(_errors);

var _type = __webpack_require__(/*! ./type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _typeVar = __webpack_require__(/*! ./type-var */ "../node_modules/@hegel/core/type-graph/types/type-var.js");

var _tupleType = __webpack_require__(/*! ./tuple-type */ "../node_modules/@hegel/core/type-graph/types/tuple-type.js");

var _typeScope = __webpack_require__(/*! ../type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

var _unionType = __webpack_require__(/*! ./union-type */ "../node_modules/@hegel/core/type-graph/types/union-type.js");

var _objectType = __webpack_require__(/*! ./object-type */ "../node_modules/@hegel/core/type-graph/types/object-type.js");

var _genericType = __webpack_require__(/*! ./generic-type */ "../node_modules/@hegel/core/type-graph/types/generic-type.js");

var _collectionType = __webpack_require__(/*! ./collection-type */ "../node_modules/@hegel/core/type-graph/types/collection-type.js");

var _constants = __webpack_require__(/*! ../constants */ "../node_modules/@hegel/core/type-graph/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class $Keys extends _genericType.GenericType {
  constructor(_, meta = {}) {
    const parent = new _typeScope.TypeScope(meta.parent);
    super("$Keys", meta, [_typeVar.TypeVar.term("target", {
      parent
    })], parent, null);
  }

  isPrincipalTypeFor() {
    return false;
  }

  equalsTo() {
    return false;
  }

  isSuperTypeFor() {
    return false;
  }

  applyGeneric(parameters, loc, shouldBeMemoize = true, isCalledAsBottom = false) {
    super.assertParameters(parameters, loc);
    const [realTarget] = parameters;

    if (!(realTarget instanceof _objectType.ObjectType) && !(realTarget instanceof _tupleType.TupleType) && !(realTarget instanceof _collectionType.CollectionType)) {
      throw new _errors2.default("First parameter should be an object or collection type", loc);
    }

    if (realTarget instanceof _tupleType.TupleType) {
      return realTarget.isSubtypeOf.keyType;
    }

    if (realTarget instanceof _collectionType.CollectionType) {
      return realTarget.keyType;
    }

    const variants = [];

    for (const property of realTarget.properties.keys()) {
      if (property !== _constants.CALLABLE && property !== _constants.CONSTRUCTABLE && property !== _constants.INDEXABLE) {
        variants.push(_type.Type.term(`'${property}'`, {
          isSubtypeOf: _type.Type.String
        }));
      }
    }

    return _unionType.UnionType.term(_unionType.UnionType.getName(variants), {}, variants);
  }

}

exports.$Keys = $Keys;

/***/ }),

/***/ "../node_modules/@hegel/core/type-graph/types/object-type.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@hegel/core/type-graph/types/object-type.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ObjectType = undefined;

var _type = __webpack_require__(/*! ./type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _common = __webpack_require__(/*! ../../utils/common */ "../node_modules/@hegel/core/utils/common.js");

var _typeVar = __webpack_require__(/*! ./type-var */ "../node_modules/@hegel/core/type-graph/types/type-var.js");

var _unionType = __webpack_require__(/*! ./union-type */ "../node_modules/@hegel/core/type-graph/types/union-type.js");

var _functionType = __webpack_require__(/*! ./function-type */ "../node_modules/@hegel/core/type-graph/types/function-type.js");

var _variableInfo = __webpack_require__(/*! ../variable-info */ "../node_modules/@hegel/core/type-graph/variable-info.js");

var _immutableType = __webpack_require__(/*! ./immutable-type */ "../node_modules/@hegel/core/type-graph/types/immutable-type.js");

var _constants = __webpack_require__(/*! ../constants */ "../node_modules/@hegel/core/type-graph/constants.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ObjectType extends _type.Type {
  static term(name, meta = {}, properties, ...args) {
    name = name == undefined ? ObjectType.getName(properties) : name;
    let parent = meta.parent || _type.Type.GlobalTypeScope;
    const length = properties.length;

    for (let i = 0; i < length; i++) {
      const property = properties[i][1];

      if (property instanceof _variableInfo.VariableInfo) {
        const propertyType = property.type;

        if (parent === undefined || parent.priority < propertyType.parent.priority) {
          parent = propertyType.parent;
        }
      }
    }

    const newMeta = { ...meta,
      parent
    };
    return super.term(name, newMeta, properties, ...args);
  }

  static getName(params, type) {
    if (type !== undefined && String(type.name)[0] !== "{") {
      return undefined;
    }

    const filteredProperties = params ? (0, _common.unique)(params, ([key]) => key) : [];
    const properties = filteredProperties.sort(([name1], [name2]) => String(name1).localeCompare(String(name2)));
    return this.prettyMode && filteredProperties.length > 2 ? this.multyLine(properties) : this.oneLine(properties);
  }

  static oneLine(properties) {
    return `{ ${properties.map(([name, type]) => `${name}: ${String(_type.Type.getTypeRoot(type instanceof _variableInfo.VariableInfo ? type.type : type).name)}`).join(", ")} }`;
  }

  static multyLine(properties) {
    return `{\n${properties.map(([name, type]) => `\t${name}: ${String(_type.Type.getTypeRoot(type instanceof _variableInfo.VariableInfo ? type.type : type).name).replace(/\n/g, "\n\t")}`).join(",\n")}\n}`;
  }

  constructor(name, options = {}, properties) {
    name = name == undefined ? ObjectType.getName(properties) : name;
    super(name, {
      isSubtypeOf: name === "Object" ? undefined : ObjectType.Object,
      ...options
    });

    _defineProperty(this, "isNominal", void 0);

    _defineProperty(this, "properties", void 0);

    _defineProperty(this, "instanceType", null);

    _defineProperty(this, "priority", 2);

    this.isNominal = Boolean(options.isNominal);
    const filteredProperties = properties ? (0, _common.unique)(properties, ([key]) => key) : [];
    this.properties = new Map(filteredProperties);
    this.onlyLiteral = true;
  }

  getPropertyType(propertyName) {
    let fieldOwner = this;
    let field = null;

    while (fieldOwner) {
      // $FlowIssue
      field = fieldOwner.properties.get(propertyName);

      if (field || !(fieldOwner.isSubtypeOf && fieldOwner.isSubtypeOf instanceof ObjectType)) {
        break;
      }

      fieldOwner = fieldOwner.isSubtypeOf;
    }

    if (!field) {
      return null;
    }

    return field.type instanceof _type.Type ? field.type : field;
  }

  isAllProperties(predicate, anotherType) {
    for (const [key, {
      type
    }] of this.properties) {
      if (type === undefined || [_constants.CALLABLE, _constants.INDEXABLE, _constants.CONSTRUCTABLE].includes(key)) {
        continue;
      }

      const anotherProperty = anotherType.properties.get(key) || {
        type: _type.Type.Undefined
      };
      /* $FlowIssue - flow doesn't type methods by name */

      if (!type[predicate](anotherProperty.type)) {
        return false;
      }
    }

    return true;
  }

  changeAll(sourceTypes, targetTypes, typeScope) {
    if (sourceTypes.every(type => !this.canContain(type))) {
      return this;
    }

    if (this._alreadyProcessedWith !== null) {
      return this._alreadyProcessedWith;
    }

    this._alreadyProcessedWith = _typeVar.TypeVar.createSelf(this.getChangedName(sourceTypes, targetTypes), this.parent);
    let isAnyPropertyChanged = false;

    try {
      const newProperties = [];
      this.properties.forEach((vInfo, key) => {
        if (!(vInfo instanceof _variableInfo.VariableInfo)) {
          return;
        }

        const newType = vInfo.type.changeAll(sourceTypes, targetTypes, typeScope);

        if (vInfo.type === newType) {
          return newProperties.push([key, vInfo]);
        }

        isAnyPropertyChanged = true;
        newProperties.push([key, new _variableInfo.VariableInfo(newType, vInfo.parent, vInfo.meta)]);
      });
      const isSubtypeOf = this.isSubtypeOf === null || this.isSubtypeOf === ObjectType.Object ? this.isSubtypeOf : this.isSubtypeOf.changeAll(sourceTypes, targetTypes, typeScope);

      if (!isAnyPropertyChanged && this.isSubtypeOf === isSubtypeOf) {
        this._alreadyProcessedWith = null;
        return this;
      }

      const result = ObjectType.term(ObjectType.getName(newProperties, this) || this.getChangedName(sourceTypes, targetTypes), {
        isSubtypeOf
      }, newProperties);
      return this.endChanges(result);
    } catch (e) {
      this._alreadyProcessedWith = null;
      throw e;
    }
  }

  equalsTo(anotherType) {
    anotherType = this.getOponentType(anotherType, true, false);

    if (this.referenceEqualsTo(anotherType)) {
      return true;
    }

    if (!(anotherType instanceof ObjectType) || anotherType.properties.size !== this.properties.size || !super.equalsTo(anotherType) || !this.canContain(anotherType)) {
      return false;
    }

    if (this._alreadyProcessedWith === anotherType) {
      return true;
    }

    this._alreadyProcessedWith = anotherType;
    const result = this.isAllProperties("equalsTo", anotherType);
    this._alreadyProcessedWith = null;
    return result;
  }

  isInHierarchyOf(anotherType) {
    do {
      if (this === anotherType) {
        return true;
      } // $FlowIssue


      anotherType = anotherType.isSubtypeOf;
    } while (anotherType && anotherType.isSubtypeOf);

    return false;
  }

  isSuperTypeFor(anotherType) {
    anotherType = this.getOponentType(anotherType);

    if (anotherType instanceof ObjectType && this === ObjectType.Object.root || this.isInHierarchyOf(anotherType)) {
      return true;
    }

    if (this._alreadyProcessedWith === anotherType) {
      return true;
    }

    this._alreadyProcessedWith = anotherType;
    const requiredProperties = [...this.properties.values()].filter(({
      type
    }) => !(type instanceof _unionType.UnionType) || !type.variants.some(t => t.equalsTo(_type.Type.Undefined)));
    const result = anotherType instanceof ObjectType && !this.isNominal ? anotherType.properties.size >= requiredProperties.length && this.isAllProperties("isPrincipalTypeFor", anotherType) : anotherType.isSubtypeOf != undefined && this.isPrincipalTypeFor(anotherType.isSubtypeOf);
    this._alreadyProcessedWith = null;
    return result;
  }

  getDifference(type, withReverseUnion = false) {
    if (this._alreadyProcessedWith === type || this.referenceEqualsTo(type)) {
      return [];
    }

    this._alreadyProcessedWith = type;

    if (type instanceof ObjectType) {
      let differences = [];
      const {
        properties
      } = type;
      this.properties.forEach(({
        type
      }, key) => {
        const other = properties.get(key);

        if (other === undefined) {
          return;
        }

        differences = differences.concat(type.getDifference(other.type, withReverseUnion));
      });
      this._alreadyProcessedWith = null;
      return differences;
    }

    if (type instanceof _functionType.FunctionType) {
      const callable = this.properties.get(_constants.CALLABLE);

      if (callable !== undefined) {
        const result = callable.type.getDifference(type, withReverseUnion);
        this._alreadyProcessedWith = null;
        return result;
      }
    }

    const result = super.getDifference(type, withReverseUnion);
    this._alreadyProcessedWith = null;
    return result;
  }

  contains(type) {
    if (this._alreadyProcessedWith === type || !this.canContain(type)) {
      return false;
    }

    if (super.contains(type)) {
      return true;
    }

    this._alreadyProcessedWith = type;

    for (const [_, property] of this.properties) {
      if (property instanceof _variableInfo.VariableInfo && property.type.contains(type)) {
        this._alreadyProcessedWith = null;
        return true;
      }
    }

    this._alreadyProcessedWith = null;
    return false;
  }

  weakContains(type) {
    if (this._alreadyProcessedWith === type || !this.canContain(type)) {
      return false;
    }

    this._alreadyProcessedWith = type;
    const result = super.contains(type) || this.equalsTo(type);
    this._alreadyProcessedWith = null;
    return result;
  }

  getNextParent(typeScope) {
    if (this._alreadyProcessedWith !== null) {
      return _type.Type.GlobalTypeScope;
    }

    this._alreadyProcessedWith = this;
    const sortedParents = [...this.properties].filter(([_, v]) => v instanceof _variableInfo.VariableInfo).map(([_, {
      type
    }]) => type.getNextParent(typeScope)).sort((a, b) => b.priority - a.priority);

    for (const parent of sortedParents) {
      if (parent.priority <= typeScope.priority && parent !== typeScope) {
        this._alreadyProcessedWith = null;
        return parent;
      }
    }

    this._alreadyProcessedWith = null;
    return _type.Type.GlobalTypeScope;
  }

}

exports.ObjectType = ObjectType;

_defineProperty(ObjectType, "Object", new _typeVar.TypeVar("Object"));

/***/ }),

/***/ "../node_modules/@hegel/core/type-graph/types/omit-type.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@hegel/core/type-graph/types/omit-type.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$Omit = undefined;

var _errors = __webpack_require__(/*! ../../utils/errors */ "../node_modules/@hegel/core/utils/errors.js");

var _errors2 = _interopRequireDefault(_errors);

var _type = __webpack_require__(/*! ./type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _typeVar = __webpack_require__(/*! ./type-var */ "../node_modules/@hegel/core/type-graph/types/type-var.js");

var _typeScope = __webpack_require__(/*! ../type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

var _unionType = __webpack_require__(/*! ./union-type */ "../node_modules/@hegel/core/type-graph/types/union-type.js");

var _objectType = __webpack_require__(/*! ./object-type */ "../node_modules/@hegel/core/type-graph/types/object-type.js");

var _genericType = __webpack_require__(/*! ./generic-type */ "../node_modules/@hegel/core/type-graph/types/generic-type.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class $Omit extends _genericType.GenericType {
  constructor(_, meta = {}) {
    const parent = new _typeScope.TypeScope(meta.parent);
    super("$Omit", meta, [_typeVar.TypeVar.term("target", {
      parent
    }), _typeVar.TypeVar.term("properties", {
      parent
    })], parent, null);
  }

  isPrincipalTypeFor() {
    return false;
  }

  equalsTo() {
    return false;
  }

  isSuperTypeFor() {
    return false;
  }

  applyGeneric(parameters, loc, shouldBeMemoize = true, isCalledAsBottom = false) {
    super.assertParameters(parameters, loc);
    const [target, properties] = parameters;
    const realTarget = target.constraint || target;

    if (!(realTarget instanceof _objectType.ObjectType)) {
      throw new _errors2.default("First parameter should be an object type", loc);
    }

    const picks = properties instanceof _unionType.UnionType ? properties.variants : [properties];
    const pickedProperties = picks.map(variant => {
      if (variant.isSubtypeOf && variant.isSubtypeOf.equalsTo(_type.Type.String)) {
        return variant.name;
      }

      throw new _errors2.default("The second parameter should be an string literals type");
    });
    const oldProperties = [...realTarget.properties.entries()];
    const newProperties = oldProperties.filter(([name]) => !pickedProperties.includes(`'${name}'`));
    return _objectType.ObjectType.term(_objectType.ObjectType.getName(newProperties), {}, newProperties);
  }

}

exports.$Omit = $Omit;

/***/ }),

/***/ "../node_modules/@hegel/core/type-graph/types/partial-type.js":
/*!********************************************************************!*\
  !*** ../node_modules/@hegel/core/type-graph/types/partial-type.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$Partial = undefined;

var _errors = __webpack_require__(/*! ../../utils/errors */ "../node_modules/@hegel/core/utils/errors.js");

var _errors2 = _interopRequireDefault(_errors);

var _type = __webpack_require__(/*! ./type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _typeVar = __webpack_require__(/*! ./type-var */ "../node_modules/@hegel/core/type-graph/types/type-var.js");

var _typeScope = __webpack_require__(/*! ../type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

var _unionType = __webpack_require__(/*! ./union-type */ "../node_modules/@hegel/core/type-graph/types/union-type.js");

var _objectType = __webpack_require__(/*! ./object-type */ "../node_modules/@hegel/core/type-graph/types/object-type.js");

var _genericType = __webpack_require__(/*! ./generic-type */ "../node_modules/@hegel/core/type-graph/types/generic-type.js");

var _variableInfo = __webpack_require__(/*! ../variable-info */ "../node_modules/@hegel/core/type-graph/variable-info.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class $Partial extends _genericType.GenericType {
  constructor(_, meta = {}) {
    const parent = new _typeScope.TypeScope(meta.parent);
    super("$Partial", meta, [_typeVar.TypeVar.term("target", {
      parent
    })], parent, null);
  }

  isPrincipalTypeFor() {
    return false;
  }

  equalsTo() {
    return false;
  }

  isSuperTypeFor() {
    return false;
  }

  applyGeneric(parameters, loc, shouldBeMemoize = true, isCalledAsBottom = false) {
    super.assertParameters(parameters, loc);
    const [target] = parameters;
    const realTarget = target.constraint || target;

    if (!(realTarget instanceof _objectType.ObjectType)) {
      throw new _errors2.default("First parameter should be an object type", loc);
    }

    const oldProperties = [...realTarget.properties.entries()];
    const newProperties = oldProperties.map(([name, property]) => {
      const variants = [_type.Type.Undefined, ...(property.type instanceof _unionType.UnionType ? property.type.variants : [property.type])];

      const newType = _unionType.UnionType.term(_unionType.UnionType.getName(variants), {}, variants);

      return [name, new _variableInfo.VariableInfo(newType, property.parent, property.meta)];
    });
    return _objectType.ObjectType.term(_objectType.ObjectType.getName(newProperties), {}, newProperties);
  }

}

exports.$Partial = $Partial;

/***/ }),

/***/ "../node_modules/@hegel/core/type-graph/types/pick-type.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@hegel/core/type-graph/types/pick-type.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$Pick = undefined;

var _errors = __webpack_require__(/*! ../../utils/errors */ "../node_modules/@hegel/core/utils/errors.js");

var _errors2 = _interopRequireDefault(_errors);

var _type = __webpack_require__(/*! ./type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _typeVar = __webpack_require__(/*! ./type-var */ "../node_modules/@hegel/core/type-graph/types/type-var.js");

var _unionType = __webpack_require__(/*! ./union-type */ "../node_modules/@hegel/core/type-graph/types/union-type.js");

var _typeScope = __webpack_require__(/*! ../type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

var _objectType = __webpack_require__(/*! ./object-type */ "../node_modules/@hegel/core/type-graph/types/object-type.js");

var _genericType = __webpack_require__(/*! ./generic-type */ "../node_modules/@hegel/core/type-graph/types/generic-type.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class $Pick extends _genericType.GenericType {
  constructor(_, meta = {}) {
    const parent = new _typeScope.TypeScope(meta.parent);
    super("$Pick", meta, [_typeVar.TypeVar.term("target", {
      parent
    }), _typeVar.TypeVar.term("properties", {
      parent
    })], parent, null);
  }

  isPrincipalTypeFor() {
    return false;
  }

  equalsTo() {
    return false;
  }

  isSuperTypeFor() {
    return false;
  }

  applyGeneric(parameters, loc, shouldBeMemoize = true, isCalledAsBottom = false) {
    super.assertParameters(parameters, loc);
    const [target, properties] = parameters;
    const realTarget = target.constraint || target;

    if (!(realTarget instanceof _objectType.ObjectType)) {
      throw new _errors2.default("First parameter should be an object type", loc);
    }

    const picks = properties instanceof _unionType.UnionType ? properties.variants : [properties];
    const pickedProperties = picks.map(variant => {
      if (variant.isSubtypeOf && variant.isSubtypeOf.equalsTo(_type.Type.String)) {
        return variant.name;
      }

      throw new _errors2.default("The second parameter should be an string literals type");
    });
    const oldProperties = [...realTarget.properties.entries()];
    const newProperties = oldProperties.filter(([name]) => pickedProperties.includes(`'${name}'`));
    return _objectType.ObjectType.term(_objectType.ObjectType.getName(newProperties), {}, newProperties);
  }

}

exports.$Pick = $Pick;

/***/ }),

/***/ "../node_modules/@hegel/core/type-graph/types/property-type.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@hegel/core/type-graph/types/property-type.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$PropertyType = undefined;

var _errors = __webpack_require__(/*! ../../utils/errors */ "../node_modules/@hegel/core/utils/errors.js");

var _errors2 = _interopRequireDefault(_errors);

var _type = __webpack_require__(/*! ./type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _keysType = __webpack_require__(/*! ./keys-type */ "../node_modules/@hegel/core/type-graph/types/keys-type.js");

var _typeVar = __webpack_require__(/*! ./type-var */ "../node_modules/@hegel/core/type-graph/types/type-var.js");

var _tupleType = __webpack_require__(/*! ./tuple-type */ "../node_modules/@hegel/core/type-graph/types/tuple-type.js");

var _unionType = __webpack_require__(/*! ./union-type */ "../node_modules/@hegel/core/type-graph/types/union-type.js");

var _typeScope = __webpack_require__(/*! ../type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

var _objectType = __webpack_require__(/*! ./object-type */ "../node_modules/@hegel/core/type-graph/types/object-type.js");

var _bottomType = __webpack_require__(/*! ./bottom-type */ "../node_modules/@hegel/core/type-graph/types/bottom-type.js");

var _genericType = __webpack_require__(/*! ./generic-type */ "../node_modules/@hegel/core/type-graph/types/generic-type.js");

var _variableInfo = __webpack_require__(/*! ../variable-info */ "../node_modules/@hegel/core/type-graph/variable-info.js");

var _collectionType = __webpack_require__(/*! ./collection-type */ "../node_modules/@hegel/core/type-graph/types/collection-type.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class $PropertyType extends _genericType.GenericType {
  constructor(_, meta = {}) {
    const parent = new _typeScope.TypeScope(meta.parent);
    super("$PropertyType", meta, [_typeVar.TypeVar.term("target", {
      parent
    }), _typeVar.TypeVar.term("property", {
      parent
    })], parent, null);
  }

  findRealTarget(target, loc) {
    if (target instanceof _unionType.UnionType) {
      return target;
    }

    let obj = target;

    while (obj !== null && !(obj instanceof _objectType.ObjectType)) {
      obj = obj.isSubtypeOf;
    }

    return obj;
  }

  isPrincipalTypeFor() {
    return false;
  }

  equalsTo() {
    return false;
  }

  isSuperTypeFor() {
    return false;
  }

  applyGeneric(parameters, loc, shouldBeMemoize = true, isCalledAsBottom = false, initializing = false) {
    super.assertParameters(parameters, loc);
    const [currentTarget, property] = parameters;

    const realTarget = _type.Type.getTypeRoot(currentTarget);

    const realProperty = _type.Type.getTypeRoot(property);

    const propertyName = realProperty.isSubtypeOf && realProperty.isSubtypeOf.name === "string" ? realProperty.name.slice(1, -1) : realProperty.name;
    const isTargetVariable = realTarget instanceof _typeVar.TypeVar;
    const isPropertyVariable = realProperty instanceof _typeVar.TypeVar;

    if (isTargetVariable && !realTarget.isUserDefined) {
      if (realTarget.constraint === undefined) {
        if (isPropertyVariable) {
          realTarget.constraint = _objectType.ObjectType.Object.root;
        } else {
          const props = [[propertyName, new _variableInfo.VariableInfo(_typeVar.TypeVar.term(`${realTarget.name.slice(0, realTarget.name.indexOf("'"))}0'`, {
            parent: realTarget.parent
          }))]];
          realTarget.constraint = _objectType.ObjectType.term(null, {}, props);
        }
      } else if (realTarget.constraint instanceof _objectType.ObjectType && !isPropertyVariable && !realTarget.constraint.properties.has(propertyName)) {
        const props = [...realTarget.constraint.properties, [propertyName, new _variableInfo.VariableInfo(_typeVar.TypeVar.term(`${realTarget.name.slice(0, realTarget.name.indexOf("'"))}${realTarget.constraint.properties.size}'`, {
          parent: realTarget.parent
        }))]];
        realTarget.constraint = _objectType.ObjectType.term(null, {}, props);
      }
    }

    if (isPropertyVariable && !realProperty.isUserDefined && realProperty.constraint === undefined) {
      let constraint = undefined;

      if (realTarget instanceof _collectionType.CollectionType) {
        constraint = realTarget.keyType;
      } else if (realTarget instanceof _tupleType.TupleType) {
        constraint = Array.from({
          length: realTarget.items.length
        }).map((_, i) => _type.Type.term(i + 1, {
          isSubtypeOf: _type.Type.Number
        }));
      } else if (realTarget instanceof _objectType.ObjectType) {
        constraint = _unionType.UnionType.term(null, {}, [...realTarget.properties].map(([key]) => _type.Type.term(`'${key}'`, {
          isSubtypeOf: _type.Type.String
        })));
      } else if (isTargetVariable) {
        constraint = new _bottomType.$BottomType({}, new _keysType.$Keys(), [realTarget]);
      }

      realProperty.constraint = constraint;
    }

    if (isTargetVariable && !isPropertyVariable) {
      return realTarget.constraint.properties.get(propertyName).type;
    }

    if (isPropertyVariable) {
      return new _bottomType.$BottomType({}, this, [realTarget, realProperty], loc);
    }

    if (realTarget instanceof _unionType.UnionType) {
      try {
        const variants = realTarget.variants.map(v => this.applyGeneric([v, realProperty], loc, shouldBeMemoize, isCalledAsBottom));
        return _unionType.UnionType.term(_unionType.UnionType.getName(variants), {}, variants);
      } catch {
        throw new _errors2.default(`Property "${propertyName}" does not exist in "${currentTarget.name}"`, loc);
      }
    }

    const fieldType = realTarget.getPropertyType(propertyName, initializing);

    if (!realProperty.isSubtypeOf && !isCalledAsBottom) {
      throw new _errors2.default("Second parameter should be an literal", loc);
    }

    if (fieldType !== null) {
      return fieldType;
    }

    throw new _errors2.default(`Property "${propertyName}" are not exists in "${currentTarget.name}"`, loc);
  }

}

exports.$PropertyType = $PropertyType;

/***/ }),

/***/ "../node_modules/@hegel/core/type-graph/types/return-type.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@hegel/core/type-graph/types/return-type.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$ReturnType = undefined;

var _errors = __webpack_require__(/*! ../../utils/errors */ "../node_modules/@hegel/core/utils/errors.js");

var _errors2 = _interopRequireDefault(_errors);

var _typeVar = __webpack_require__(/*! ./type-var */ "../node_modules/@hegel/core/type-graph/types/type-var.js");

var _typeScope = __webpack_require__(/*! ../type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

var _genericType = __webpack_require__(/*! ./generic-type */ "../node_modules/@hegel/core/type-graph/types/generic-type.js");

var _functionType = __webpack_require__(/*! ./function-type */ "../node_modules/@hegel/core/type-graph/types/function-type.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class $ReturnType extends _genericType.GenericType {
  constructor(_, meta = {}) {
    const parent = new _typeScope.TypeScope(meta.parent);
    super("$ReturnType", meta, [_typeVar.TypeVar.term("target", {
      parent
    })], parent, null);
  }

  isPrincipalTypeFor() {
    return false;
  }

  equalsTo() {
    return false;
  }

  isSuperTypeFor() {
    return false;
  }

  applyGeneric(parameters, loc, shouldBeMemoize = true, isCalledAsBottom = false) {
    super.assertParameters(parameters, loc);
    const [target] = parameters;
    const realTarget = target.constraint || target;

    if (!(realTarget instanceof _functionType.FunctionType)) {
      throw new _errors2.default("First parameter should be an function type", loc);
    }

    return realTarget.returnType;
  }

}

exports.$ReturnType = $ReturnType;

/***/ }),

/***/ "../node_modules/@hegel/core/type-graph/types/throws-type.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@hegel/core/type-graph/types/throws-type.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$Throws = exports.$ThrowsResult = undefined;

var _type = __webpack_require__(/*! ./type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _typeVar = __webpack_require__(/*! ./type-var */ "../node_modules/@hegel/core/type-graph/types/type-var.js");

var _typeScope = __webpack_require__(/*! ../type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

var _genericType = __webpack_require__(/*! ./generic-type */ "../node_modules/@hegel/core/type-graph/types/generic-type.js");

class $ThrowsResult extends _type.Type {
  constructor(name, meta = {}, resultType, errorType) {
    super(name, meta);
    this.resultType = resultType;
    this.errorType = errorType;
  }

}

exports.$ThrowsResult = $ThrowsResult;

class $Throws extends _genericType.GenericType {
  constructor(_, meta = {}) {
    const parent = new _typeScope.TypeScope(meta.parent);
    super("$Throws", meta, [_typeVar.TypeVar.term("result", {
      parent
    }), _typeVar.TypeVar.term("errors", {
      parent
    })], parent, null);
  }

  isPrincipalTypeFor() {
    return false;
  }

  equalsTo() {
    return false;
  }

  isSuperTypeFor() {
    return false;
  }

  applyGeneric(parameters, loc, shouldBeMemoize = true, isCalledAsBottom = false) {
    super.assertParameters(parameters, loc);
    const [result, error] = parameters;
    return $ThrowsResult.term(`$Throws<${String(result.name)}, ${String(error.name)}>`, {
      parent: result.parent
    }, result, error);
  }

}

exports.$Throws = $Throws;

/***/ }),

/***/ "../node_modules/@hegel/core/type-graph/types/tuple-type.js":
/*!******************************************************************!*\
  !*** ../node_modules/@hegel/core/type-graph/types/tuple-type.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TupleType = undefined;

var _errors = __webpack_require__(/*! ../../utils/errors */ "../node_modules/@hegel/core/utils/errors.js");

var _errors2 = _interopRequireDefault(_errors);

var _type = __webpack_require__(/*! ./type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _typeVar = __webpack_require__(/*! ./type-var */ "../node_modules/@hegel/core/type-graph/types/type-var.js");

var _typeScope = __webpack_require__(/*! ../type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

var _unionType = __webpack_require__(/*! ./union-type */ "../node_modules/@hegel/core/type-graph/types/union-type.js");

var _bottomType = __webpack_require__(/*! ./bottom-type */ "../node_modules/@hegel/core/type-graph/types/bottom-type.js");

var _collectionType = __webpack_require__(/*! ./collection-type */ "../node_modules/@hegel/core/type-graph/types/collection-type.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class TupleType extends _type.Type {
  static term(name, meta = {}, items, ...args) {
    let parent = meta.parent;
    const length = items.length;

    for (let i = 0; i < length; i++) {
      const item = items[i];

      if (item instanceof _type.Type && (parent === undefined || parent.priority < item.parent.priority)) {
        // $FlowIssue
        parent = item.parent;
      }
    }

    name = name === null ? TupleType.getName(items) : name;
    const newMeta = { ...meta,
      parent
    };
    return super.term(name, newMeta, items, ...args);
  }

  static getName(params) {
    if (params instanceof _type.Type) {
      return String(params.name);
    }

    const isMultyLine = this.prettyMode && params.length >= 4;
    return `[${isMultyLine ? "\n\t" : ""}${params.reduce((res, t) => `${res}${res ? `,${isMultyLine ? "\n\t" : " "}` : ""}${String(_type.Type.getTypeRoot(t).name).replace(/\n/g, "\n\t")}`, "")}${isMultyLine ? "\n" : ""}]`;
  }

  constructor(name, meta = {}, items) {
    const arrayValue = [items.length !== 0 ? _unionType.UnionType.term(null, {}, items) : _type.Type.Unknown];
    const isSubtypeOf = TupleType.Array.root === undefined ? new _bottomType.$BottomType({}, TupleType.Array, arrayValue) : TupleType.Array.root.applyGeneric(arrayValue);
    super(name, { ...meta,
      isSubtypeOf
    });

    _defineProperty(this, "items", void 0);

    _defineProperty(this, "onlyLiteral", true);

    this.items = items;
  }

  changeAll(sourceTypes, targetTypes, typeScope) {
    if (sourceTypes.every(type => !this.canContain(type))) {
      return this;
    }

    if (this._alreadyProcessedWith !== null) {
      return this._alreadyProcessedWith;
    }

    this._alreadyProcessedWith = _typeVar.TypeVar.createSelf(this.getChangedName(sourceTypes, targetTypes), this.parent);

    try {
      let isItemsChanged = false;
      const newItems = this.items.map(t => {
        const newT = t.changeAll(sourceTypes, targetTypes, typeScope);

        if (newT === t) {
          return t;
        }

        isItemsChanged = true;
        return newT;
      });
      const isSubtypeOf = this.isSubtypeOf && this.isSubtypeOf.changeAll(sourceTypes, targetTypes, typeScope);

      if (!isItemsChanged && isSubtypeOf === this.isSubtypeOf) {
        this._alreadyProcessedWith = null;
        return this;
      }

      return this.endChanges(TupleType.term(null, {
        isSubtypeOf
      }, newItems));
    } catch (e) {
      this._alreadyProcessedWith = null;
      throw e;
    }
  }

  isSuperTypeFor(anotherType) {
    anotherType = this.getOponentType(anotherType);

    if (this._alreadyProcessedWith === anotherType) {
      return true;
    }

    this._alreadyProcessedWith = anotherType;
    const result = anotherType instanceof TupleType && anotherType.items.length === this.items.length && //$FlowIssue - instanceof type refinement
    this.items.every((t, i) => t.isPrincipalTypeFor(anotherType.items[i]));
    this._alreadyProcessedWith = null;
    return result;
  }

  equalsTo(anotherType) {
    anotherType = this.getOponentType(anotherType);

    if (this.referenceEqualsTo(anotherType)) {
      return true;
    }

    if (this._alreadyProcessedWith === anotherType) {
      return true;
    }

    this._alreadyProcessedWith = anotherType;
    const anotherVariants = anotherType instanceof TupleType ? anotherType.items : [];
    const result = anotherType instanceof TupleType && super.equalsTo(anotherType) && this.canContain(anotherType) && this.items.length === anotherVariants.length && this.items.every((type, index) => type.equalsTo(anotherVariants[index]));
    this._alreadyProcessedWith = null;
    return result;
  }

  getPropertyType(propertyIndex) {
    if (typeof propertyIndex === "number") {
      return propertyIndex < this.items.length ? this.items[propertyIndex] : null;
    }

    if (propertyIndex === "length") {
      return _type.Type.term(this.items.length, {
        isSubtypeOf: _type.Type.Number
      });
    }

    if (TupleType.mutable.includes(propertyIndex)) {
      throw new _errors2.default("You trying to use tuple as Array, please setup variable type as Array");
    }

    return super.getPropertyType(propertyIndex);
  }

  getDifference(type, withReverseUnion = false) {
    if (this._alreadyProcessedWith === type || this.referenceEqualsTo(type)) {
      return [];
    }

    this._alreadyProcessedWith = type;

    if (type instanceof TupleType) {
      let differences = [];
      const {
        items
      } = type;
      this.items.forEach((type, index) => {
        const other = items[index];

        if (other === undefined) {
          return;
        }

        differences = differences.concat(type.getDifference(other, withReverseUnion));
      });
      this._alreadyProcessedWith = null;
      return differences;
    }

    if (type instanceof _collectionType.CollectionType) {
      // $FlowIssue
      const result = this.isSubtypeOf.getDifference(type, withReverseUnion);
      this._alreadyProcessedWith = null;
      return result;
    }

    const result = super.getDifference(type, withReverseUnion);
    this._alreadyProcessedWith = null;
    return result;
  }

  contains(type) {
    if (this._alreadyProcessedWith === type || !this.canContain(type)) {
      return false;
    }

    this._alreadyProcessedWith = type;
    const result = super.contains(type) || this.items.some(i => i.contains(type));
    this._alreadyProcessedWith = null;
    return result;
  }

  weakContains(type) {
    if (this._alreadyProcessedWith === type || !this.canContain(type)) {
      return false;
    }

    this._alreadyProcessedWith = type;
    const result = super.contains(type) || this.items.some(i => i.weakContains(type));
    this._alreadyProcessedWith = null;
    return result;
  }

  getNextParent(typeScope) {
    if (this._alreadyProcessedWith !== null) {
      return _type.Type.GlobalTypeScope;
    }

    this._alreadyProcessedWith = this;
    const sortedParents = [...this.items].map(a => a.getNextParent(typeScope)).sort((a, b) => b.priority - a.priority);

    for (const parent of sortedParents) {
      if (parent.priority <= typeScope.priority && parent !== typeScope) {
        this._alreadyProcessedWith = null;
        return parent;
      }
    }

    this._alreadyProcessedWith = null;
    return _type.Type.GlobalTypeScope;
  }

}

exports.TupleType = TupleType;

_defineProperty(TupleType, "Array", new _typeVar.TypeVar("Array"));

_defineProperty(TupleType, "mutable", ["pop", "push", "reverse", "shift", "sort", "splice", "unshift"]);

/***/ }),

/***/ "../node_modules/@hegel/core/type-graph/types/type-of-type.js":
/*!********************************************************************!*\
  !*** ../node_modules/@hegel/core/type-graph/types/type-of-type.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$TypeOf = undefined;

var _typeVar = __webpack_require__(/*! ./type-var */ "../node_modules/@hegel/core/type-graph/types/type-var.js");

var _typeScope = __webpack_require__(/*! ../type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

var _genericType = __webpack_require__(/*! ./generic-type */ "../node_modules/@hegel/core/type-graph/types/generic-type.js");

class $TypeOf extends _genericType.GenericType {
  constructor(_, meta = {}) {
    const parent = new _typeScope.TypeScope(meta.parent);
    super("$TypeOf", {}, [_typeVar.TypeVar.term("target", {
      parent
    })], parent, null, meta);
  }

  isPrincipalTypeFor() {
    return false;
  }

  equalsTo() {
    return false;
  }

  isSuperTypeFor() {
    return false;
  }

  applyGeneric(parameters, loc) {
    super.assertParameters(parameters, loc);
    const [target] = parameters;
    return target.type;
  }

}

exports.$TypeOf = $TypeOf;

/***/ }),

/***/ "../node_modules/@hegel/core/type-graph/types/type-var.js":
/*!****************************************************************!*\
  !*** ../node_modules/@hegel/core/type-graph/types/type-var.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeVar = undefined;

var _type = __webpack_require__(/*! ./type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _constants = __webpack_require__(/*! ../constants */ "../node_modules/@hegel/core/type-graph/constants.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class TypeVar extends _type.Type {
  static isSelf(type) {
    return type.isSubtypeOf === this.Self;
  }

  static createSelf(name, parent) {
    // $FlowIssue
    return new this(name, {
      parent,
      isSubtypeOf: TypeVar.Self
    });
  }

  get isUserDefined() {
    return this._isUserDefined;
  }

  set isUserDefined(isUserDefined) {
    this._isUserDefined = this._isUserDefined || isUserDefined;
  }

  constructor(name, meta = {}, constraint, isUserDefined = false) {
    super(name, meta);

    _defineProperty(this, "constraint", void 0);

    _defineProperty(this, "root", void 0);

    _defineProperty(this, "_isUserDefined", void 0);

    _defineProperty(this, "priority", 0);

    this.name = name;
    this.constraint = constraint;
    this._isUserDefined = isUserDefined;
  }

  equalsTo(anotherType, strict = false, withoutRoot = false) {
    const isDifferenceInDefinition = this.isUserDefined && anotherType instanceof TypeVar && !anotherType.isUserDefined && !strict;

    if (isDifferenceInDefinition || this.referenceEqualsTo(anotherType)) {
      return true;
    }

    if (this.root != undefined) {
      // $FlowIssue
      return this.root.equalsTo(anotherType, strict, withoutRoot);
    }

    if (anotherType instanceof TypeVar && anotherType.constraint !== undefined && this.constraint !== undefined) {
      return super.equalsTo(anotherType) && // $FlowIssue
      this.constraint.equalsTo(anotherType.constraint) || // $FlowIssue
      this.constraint.equalsTo(anotherType);
    }

    return anotherType instanceof TypeVar && this.constraint === anotherType.constraint && super.equalsTo(anotherType);
  }

  isSuperTypeFor(type) {
    if (this.root !== undefined) {
      return this.root.isSuperTypeFor(type);
    }

    if (this.constraint === undefined) {
      return true;
    }

    return this.constraint.isPrincipalTypeFor(type);
  }

  changeAll(sourceTypes, targetTypes, typeScope) {
    const indexOfNewRootType = sourceTypes.findIndex( // $FlowIssue
    a => a.equalsTo(this, true, true));

    if (indexOfNewRootType !== -1) {
      return targetTypes[indexOfNewRootType];
    }

    if (this.root !== undefined) {
      return this.root.changeAll(sourceTypes, targetTypes, typeScope);
    }

    if (this.constraint !== undefined) {
      const newConstraint = this.constraint.changeAll(sourceTypes, targetTypes, typeScope);

      if (newConstraint !== this.constraint) {
        return new TypeVar(String(this.name), {
          parent: this.parent
        }, newConstraint);
      }
    }

    return this;
  }

  applyGeneric() {
    return this;
  }

  getDifference(type, withReverseUnion = false) {
    if (this._alreadyProcessedWith === type || this.referenceEqualsTo(type)) {
      return [];
    }

    this._alreadyProcessedWith = type;
    let result = [];

    if (this.root !== undefined) {
      result = this.root.getDifference(type, withReverseUnion);
    } else if (type instanceof TypeVar && this !== type) {
      result = [{
        root: this,
        variable: type
      }];
    } else if ("variants" in type) {
      result = super.getDifference(type, withReverseUnion);
    }

    this._alreadyProcessedWith = null;
    return result;
  }

  contains(type) {
    return this.constraint != undefined && this.constraint.contains(type) || this.equalsTo(type, true, true);
  }

  getNextParent(typeScope) {
    if (this._alreadyProcessedWith !== null) {
      return _type.Type.GlobalTypeScope;
    }

    this._alreadyProcessedWith = this;

    if (this.root !== undefined || this.constraint !== undefined) {
      const target = this.root || this.constraint; // $FlowIssue

      const result = target.getNextParent(typeScope);
      this._alreadyProcessedWith = null;
      return result;
    }

    this._alreadyProcessedWith = null;

    if (this.parent.priority <= typeScope.priority && this.parent !== typeScope) {
      return this.parent;
    }

    return _type.Type.GlobalTypeScope;
  }

}

exports.TypeVar = TypeVar;

_defineProperty(TypeVar, "Self", new TypeVar(_constants.THIS_TYPE));

/***/ }),

/***/ "../node_modules/@hegel/core/type-graph/types/type.js":
/*!************************************************************!*\
  !*** ../node_modules/@hegel/core/type-graph/types/type.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Type = undefined;

var _errors = __webpack_require__(/*! ../../utils/errors */ "../node_modules/@hegel/core/utils/errors.js");

var _errors2 = _interopRequireDefault(_errors);

var _constants = __webpack_require__(/*! ../constants */ "../node_modules/@hegel/core/type-graph/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const BOUNDARY = "[\\(\\)\\[\\]\\{\\}\\<\\>\\s\\n,]";

class Type {
  static find(name, meta = {}, ...args) {
    const scope = meta.parent || Type.GlobalTypeScope; // $FlowIssue

    const existed = scope.findTypeWithName(name, ...args);

    if (existed === undefined) {
      throw new _errors2.default(`Type "${String(name)}" are not existed`, meta.loc);
    }

    return existed;
  }

  static new(name, meta = {}, ...args) {
    let scope = meta.parent || Type.GlobalTypeScope;
    const suptypeParent = meta.isSubtypeOf && meta.isSubtypeOf.parent;

    if (suptypeParent && // $FlowIssue
    meta.isSubtypeOf.name !== _constants.THIS_TYPE && suptypeParent.priority > scope.priority) {
      scope = suptypeParent;
    }

    const newType = new this(name, { ...meta,
      parent: scope
    }, ...args);
    scope.body.set(name, newType);
    return newType;
  }

  static term(name, meta = {}, ...args) {
    const scope = meta.parent || Type.GlobalTypeScope;
    const existed = scope.findTypeWithName(name);

    if (this.shouldBeReplaced(existed, name, meta, ...args)) {
      return this.new(name, meta, ...args);
    }

    return existed;
  }

  static shouldBeReplaced(type, name, meta, ...args) {
    return type === undefined || !(type instanceof this || this.name === "TypeVar");
  }

  static getTypeRoot(type, stepBeforeNonVariableRoot = false) {
    let potentialRoot = type;

    while ("root" in potentialRoot && // $FlowIssue
    potentialRoot.root != undefined && ( // $FlowIssue
    !stepBeforeNonVariableRoot || "root" in potentialRoot.root)) {
      // $FlowIssue
      potentialRoot = potentialRoot.root;
    }

    return potentialRoot;
  }

  constructor(name, meta = {}) {
    _defineProperty(this, "name", void 0);

    _defineProperty(this, "parent", void 0);

    _defineProperty(this, "shouldBeUsedAsGeneric", void 0);

    _defineProperty(this, "isSubtypeOf", void 0);

    _defineProperty(this, "_alreadyProcessedWith", null);

    _defineProperty(this, "onlyLiteral", false);

    _defineProperty(this, "priority", 1);

    const {
      parent = Type.GlobalTypeScope,
      isSubtypeOf = null,
      shouldBeUsedAsGeneric = false
    } = meta;
    this.name = name;
    this.isSubtypeOf = isSubtypeOf;
    this.parent = parent;
    this.shouldBeUsedAsGeneric = shouldBeUsedAsGeneric;
  }

  getChangedName(sourceTypes, targetTypes) {
    let pattern = "";
    const map = sourceTypes.reduce((map, type, index) => {
      const name = String(type.name);
      map.set(name, String(targetTypes[index].name));
      pattern += (pattern && "|") + name.replace(/\|/g, "\\|");
      return map;
    }, new Map());
    const template = new RegExp(`(?<=^|${BOUNDARY})(${pattern})(?=$|${BOUNDARY})`, "gm");
    return String(this.name).replace(template, typeName => map.get(typeName) || "");
  }

  changeAll(sourceTypes, targetTypes, typeScope) {
    const indexOfNewType = sourceTypes.indexOf(this);
    return indexOfNewType === -1 ? this : targetTypes[indexOfNewType];
  }

  save() {
    const existed = this.parent.body.get(this.name);

    if (existed === undefined || !(existed instanceof this.constructor)) {
      this.parent.body.set(this.name, this);
    }

    return this;
  }

  referenceEqualsTo(anotherType) {
    return this === anotherType;
  }

  equalsTo(anotherType) {
    return this.referenceEqualsTo(anotherType) || this.name === anotherType.name;
  }

  isSuperTypeFor(type) {
    if (this._alreadyProcessedWith === type) {
      return true;
    }

    if (type.isSubtypeOf === null || !this.canContain(type.isSubtypeOf)) {
      return false;
    }

    this._alreadyProcessedWith = type;
    const result = this.isPrincipalTypeFor(type.isSubtypeOf);
    this._alreadyProcessedWith = null;
    return result;
  }

  getPropertyType(propertyName) {
    if (this.isSubtypeOf != null) {
      return this.isSubtypeOf.getPropertyType(propertyName);
    }

    return null;
  }

  isPrincipalTypeFor(type) {
    return this.equalsTo(Type.Unknown) || this.equalsTo(type) || this.isSuperTypeFor(type);
  }

  getDifference(type, withReverseUnion = false) {
    if (this.referenceEqualsTo(type)) {
      return [];
    }

    if ("variants" in type) {
      // $FlowIssue
      const variants = [...type.variants].sort((t1, t2) => t2.priority - t1.priority);

      for (const variant of variants) {
        const diff = this.getDifference(variant, withReverseUnion);

        if (diff.length !== 0) {
          return diff;
        }
      }

      return [];
    }

    if ("root" in type && type.isSubtypeOf === null) {
      return [{
        root: this,
        variable: type
      }];
    }

    if ("subordinateMagicType" in type) {
      // $FlowIssue
      return this.getDifference(type.unpack(), withReverseUnion);
    }

    return [];
  }

  contains(type) {
    return this === type;
  }

  weakContains(type) {
    return this.contains(type);
  }

  getOponentType(type, withUnpack = true, withReadonly = true) {
    if ("root" in type) {
      type = Type.getTypeRoot(type);
    }

    if ("unpack" in type) {
      // $FlowIssue
      type = withUnpack ? type.unpack() : type.subordinateMagicType;
    }

    if ("root" in type) {
      type = Type.getTypeRoot(type);
    } // $FlowIssue


    if ("subordinateType" in type && type.subordinateType !== null) {
      // $FlowIssue
      type = type.subordinateType;
    }

    if ("root" in type) {
      type = Type.getTypeRoot(type);
    }

    if (withReadonly && "readonly" in type) {
      // $FlowIssue
      type = type.readonly;
    }

    return type;
  }

  makeNominal() {}

  setInitialized(propertyName) {}

  generalize(types, typeScope) {
    return this;
  }

  containsAsGeneric(type) {
    return false;
  }

  promisify() {
    const Promise = Type.find("Promise");
    return Promise.applyGeneric([this]);
  }

  isPromise() {
    const name = String(this.name);
    return /^Promise/.test(name);
  }

  canContain(type) {
    return this.parent.priority >= type.parent.priority;
  }

  endChanges(result) {
    if (this._alreadyProcessedWith === null) {
      return result;
    } // $FlowIssue


    this._alreadyProcessedWith.root = result;
    this._alreadyProcessedWith.name = result.name;
    this._alreadyProcessedWith = null;
    return result;
  }

  getNextParent(typeScope) {
    return Type.GlobalTypeScope;
  }

}

exports.Type = Type;

_defineProperty(Type, "GlobalTypeScope", void 0);

_defineProperty(Type, "Undefined", new Type("undefined"));

_defineProperty(Type, "Null", new Type(null));

_defineProperty(Type, "String", new Type("string"));

_defineProperty(Type, "Symbol", new Type("symbol"));

_defineProperty(Type, "Boolean", new Type("boolean"));

_defineProperty(Type, "Number", new Type("number"));

_defineProperty(Type, "BigInt", new Type("bigint"));

_defineProperty(Type, "Unknown", new Type("unknown"));

_defineProperty(Type, "Never", new Type("never"));

_defineProperty(Type, "prettyMode", false);

/***/ }),

/***/ "../node_modules/@hegel/core/type-graph/types/union-type.js":
/*!******************************************************************!*\
  !*** ../node_modules/@hegel/core/type-graph/types/union-type.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnionType = undefined;

var _type = __webpack_require__(/*! ./type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _common = __webpack_require__(/*! ../../utils/common */ "../node_modules/@hegel/core/utils/common.js");

var _typeVar = __webpack_require__(/*! ./type-var */ "../node_modules/@hegel/core/type-graph/types/type-var.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// $FlowIssue
class UnionType extends _type.Type {
  static term(name, meta = {}, variants, ...args) {
    variants = UnionType.flatten(variants);
    const principalTypeInside = UnionType.getPrincipalTypeInside(variants);

    if (principalTypeInside !== undefined) {
      return principalTypeInside;
    }

    name = name == null ? UnionType.getName(variants) : name;
    let parent = meta.parent;
    const length = variants.length;

    for (let i = 0; i < length; i++) {
      const variant = variants[i];

      if (variant instanceof _type.Type && (parent === undefined || parent.priority < variant.parent.priority)) {
        parent = variant.parent;
      }
    }

    const newMeta = { ...meta,
      parent
    };
    return super.term(name, newMeta, variants, ...args);
  }

  static getPrincipalTypeInside(variants) {
    return variants.length === 1 ? variants[0] : variants.find(variant => !(variant instanceof _typeVar.TypeVar) && variants.every(subVariant => variant.equalsTo(subVariant)));
  }

  static getName(params) {
    params = (0, _common.unique)(params.map(a => _type.Type.getTypeRoot(a)), a => String(a.name));
    const isMultyLine = this.prettyMode && params.length >= 4;
    return `${params.sort((t1, t2) => String(t1.name).localeCompare(String(t2.name))).reduce((res, t) => {
      const isFunction = "argumentsTypes" in t || // $FlowIssue
      "subordinateType" in t && "argumentsTypes" in t.subordinateType;
      let typeName = String(t.name);

      if (isFunction) {
        typeName = `(${typeName})`;
      }

      return isMultyLine ? this.multyLine(res, typeName) : this.oneLine(res, typeName);
    }, "")}`;
  }

  static oneLine(res, typeName) {
    return `${res}${res ? " | " : ""}${typeName}`;
  }

  static multyLine(res, typeName) {
    return `${res}${res ? "\n| " : "  "}${typeName}`;
  }

  static flatten(variants) {
    // $FlowIssue
    return variants.flatMap(variant => variant instanceof UnionType ? this.flatten(variant.variants) : [variant]);
  }

  constructor(name, meta = {}, variants) {
    variants = UnionType.flatten(variants);
    name = name == null ? UnionType.getName(variants) : name;
    super(name, meta);

    _defineProperty(this, "variants", void 0);

    const principalTypeInside = UnionType.getPrincipalTypeInside(variants);

    if (principalTypeInside) {
      return principalTypeInside;
    }

    this.variants = (0, _common.unique)(variants, a => String(a.name)).sort((t1, t2) => String(t1.name).localeCompare(String(t2.name)));
  }

  changeAll(sourceTypes, targetTypes, typeScope) {
    if (sourceTypes.every(type => !this.canContain(type))) {
      return this;
    }

    if (this._alreadyProcessedWith !== null) {
      return this._alreadyProcessedWith;
    }

    this._alreadyProcessedWith = _typeVar.TypeVar.createSelf(this.getChangedName(sourceTypes, targetTypes), this.parent);

    try {
      let isVariantsChanged = false;
      const newVariants = this.variants.map(t => {
        const newT = t.changeAll(sourceTypes, targetTypes, typeScope);

        if (newT === t) {
          return t;
        }

        isVariantsChanged = true;
        return newT;
      });

      if (!isVariantsChanged) {
        this._alreadyProcessedWith = null;
        return this;
      }

      return this.endChanges(UnionType.term(null, {}, newVariants));
    } catch (e) {
      this._alreadyProcessedWith = null;
      throw e;
    }
  }

  equalsTo(anotherType) {
    anotherType = this.getOponentType(anotherType);

    if (this.referenceEqualsTo(anotherType)) {
      return true;
    }

    if (this._alreadyProcessedWith === anotherType) {
      return true;
    }

    this._alreadyProcessedWith = anotherType;
    const anotherVariants = anotherType instanceof UnionType ? anotherType.variants : [];
    const result = anotherType instanceof UnionType && super.equalsTo(anotherType) && this.canContain(anotherType) && this.variants.length === anotherVariants.length && this.variants.every((type, index) => type.equalsTo(anotherVariants[index]));
    this._alreadyProcessedWith = null;
    return result;
  }

  isSuperTypeFor(anotherType) {
    anotherType = this.getOponentType(anotherType);

    if (this._alreadyProcessedWith === anotherType) {
      return true;
    }

    this._alreadyProcessedWith = anotherType;

    if (anotherType instanceof UnionType) {
      for (const variantType of anotherType.variants) {
        if (!this.variants.some(type => type.isPrincipalTypeFor(variantType))) {
          this._alreadyProcessedWith = null;
          return false;
        }
      }

      this._alreadyProcessedWith = null;
      return true;
    }

    const result = this.variants.some(type => type.isPrincipalTypeFor(anotherType));
    this._alreadyProcessedWith = null;
    return result;
  }

  getPropertyType(propertyName) {
    return null;
  }

  contains(type) {
    if (this._alreadyProcessedWith === type || !this.canContain(type)) {
      return false;
    }

    this._alreadyProcessedWith = type;
    const result = super.contains(type) || this.variants.some(v => v.contains(type));
    this._alreadyProcessedWith = null;
    return result;
  }

  getDifference(type, withReverseUnion = false) {
    if (this._alreadyProcessedWith === type || this.referenceEqualsTo(type)) {
      return [];
    }

    this._alreadyProcessedWith = type;

    if (type instanceof UnionType || withReverseUnion) {
      // $FlowIssue
      const diff = this.variants.flatMap(variant => variant.getDifference(type, withReverseUnion));
      const reducer = new Map();

      for (const {
        root,
        variable
      } of diff) {
        const existed = reducer.get(variable) || [];
        existed.push(root);
        reducer.set(variable, existed);
      }

      const aggregatedDiff = [];

      for (const [variable, variants] of reducer) {
        aggregatedDiff.push({
          variable,
          root: variants.length === 1 ? variants[0] : UnionType.term(null, {}, variants)
        });
      }

      this._alreadyProcessedWith = null;
      return aggregatedDiff;
    }

    const result = super.getDifference(type, withReverseUnion);
    this._alreadyProcessedWith = null;
    return result;
  }

  weakContains(type) {
    if (this._alreadyProcessedWith === type || !this.canContain(type)) {
      return false;
    }

    this._alreadyProcessedWith = type;
    const result = super.contains(type) || this.variants.some(v => v.weakContains(type));
    this._alreadyProcessedWith = null;
    return result;
  }

  generalize(types, typeScope) {
    const variants = this.variants.map(v => v.generalize(types, typeScope));

    if (this.variants.every((v, i) => v === variants[i])) {
      return this;
    }

    return UnionType.term(null, {}, variants);
  }

  containsAsGeneric(type) {
    return this.variants.some(v => v.containsAsGeneric(type));
  }

  getNextParent(typeScope) {
    if (this._alreadyProcessedWith !== null) {
      return _type.Type.GlobalTypeScope;
    }

    this._alreadyProcessedWith = this;
    const sortedParents = [...this.variants].map(a => a.getNextParent(typeScope)).sort((a, b) => b.priority - a.priority);

    for (const parent of sortedParents) {
      if (parent.priority <= typeScope.priority && parent !== typeScope) {
        this._alreadyProcessedWith = null;
        return parent;
      }
    }

    this._alreadyProcessedWith = null;
    return _type.Type.GlobalTypeScope;
  }

}

exports.UnionType = UnionType;

/***/ }),

/***/ "../node_modules/@hegel/core/type-graph/types/values-type.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@hegel/core/type-graph/types/values-type.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$Values = undefined;

var _errors = __webpack_require__(/*! ../../utils/errors */ "../node_modules/@hegel/core/utils/errors.js");

var _errors2 = _interopRequireDefault(_errors);

var _typeVar = __webpack_require__(/*! ./type-var */ "../node_modules/@hegel/core/type-graph/types/type-var.js");

var _tupleType = __webpack_require__(/*! ./tuple-type */ "../node_modules/@hegel/core/type-graph/types/tuple-type.js");

var _typeScope = __webpack_require__(/*! ../type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

var _unionType = __webpack_require__(/*! ./union-type */ "../node_modules/@hegel/core/type-graph/types/union-type.js");

var _objectType = __webpack_require__(/*! ./object-type */ "../node_modules/@hegel/core/type-graph/types/object-type.js");

var _genericType = __webpack_require__(/*! ./generic-type */ "../node_modules/@hegel/core/type-graph/types/generic-type.js");

var _collectionType = __webpack_require__(/*! ./collection-type */ "../node_modules/@hegel/core/type-graph/types/collection-type.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class $Values extends _genericType.GenericType {
  constructor(_, meta = {}) {
    const parent = new _typeScope.TypeScope(meta.parent);
    super("$Values", meta, [_typeVar.TypeVar.term("target", {
      parent
    })], parent, null);
  }

  isPrincipalTypeFor() {
    return false;
  }

  equalsTo() {
    return false;
  }

  isSuperTypeFor() {
    return false;
  }

  applyGeneric(parameters, loc) {
    super.assertParameters(parameters, loc);
    const [target] = parameters;
    const realTarget = target.constraint || target;

    if (!(realTarget instanceof _objectType.ObjectType) && !(realTarget instanceof _tupleType.TupleType) && !(realTarget instanceof _collectionType.CollectionType)) {
      throw new _errors2.default("First parameter should be an object or collection type", loc);
    }

    if (realTarget instanceof _tupleType.TupleType) {
      return realTarget.isSubtypeOf.valueType;
    }

    if (realTarget instanceof _collectionType.CollectionType) {
      return realTarget.valueType;
    }

    const values = [...realTarget.properties.values()];
    const variants = values.map(value => value.type);
    return _unionType.UnionType.term(_unionType.UnionType.getName(variants), {}, variants);
  }

}

exports.$Values = $Values;

/***/ }),

/***/ "../node_modules/@hegel/core/type-graph/variable-info.js":
/*!***************************************************************!*\
  !*** ../node_modules/@hegel/core/type-graph/variable-info.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VariableInfo = undefined;

var _meta = __webpack_require__(/*! ./meta/meta */ "../node_modules/@hegel/core/type-graph/meta/meta.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class VariableInfo {
  constructor(type, parent, meta = new _meta.Meta(), isConstant = false) {
    _defineProperty(this, "type", void 0);

    _defineProperty(this, "parent", void 0);

    _defineProperty(this, "isConstant", false);

    _defineProperty(this, "hasInitializer", false);

    _defineProperty(this, "meta", void 0);

    this.type = type;
    this.parent = parent;
    this.meta = meta;
    this.isConstant = isConstant;
  }

}

exports.VariableInfo = VariableInfo;

/***/ }),

/***/ "../node_modules/@hegel/core/type-graph/variable-scope.js":
/*!****************************************************************!*\
  !*** ../node_modules/@hegel/core/type-graph/variable-scope.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VariableScope = undefined;

var _scope = __webpack_require__(/*! ./scope */ "../node_modules/@hegel/core/type-graph/scope.js");

var _variableInfo = __webpack_require__(/*! ./variable-info */ "../node_modules/@hegel/core/type-graph/variable-info.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// $FlowIssue
class VariableScope extends _scope.Scope {
  constructor(type, parent, declaration, skipCalls = false) {
    super(parent);

    _defineProperty(this, "type", void 0);

    _defineProperty(this, "parent", void 0);

    _defineProperty(this, "calls", []);

    _defineProperty(this, "throwable", void 0);

    _defineProperty(this, "declaration", void 0);

    _defineProperty(this, "skipCalls", void 0);

    _defineProperty(this, "isProcessed", false);

    _defineProperty(this, "body", void 0);

    this.parent = parent;
    this.type = type;
    this.declaration = declaration;
    this.skipCalls = skipCalls;
    this.body = new Map();
  }

}

exports.VariableScope = VariableScope;

_defineProperty(VariableScope, "BLOCK_TYPE", "block");

_defineProperty(VariableScope, "FUNCTION_TYPE", "function");

_defineProperty(VariableScope, "OBJECT_TYPE", "object");

_defineProperty(VariableScope, "CLASS_TYPE", "class");

/***/ }),

/***/ "../node_modules/@hegel/core/utils/class-utils.js":
/*!********************************************************!*\
  !*** ../node_modules/@hegel/core/utils/class-utils.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addThisToClassScope = addThisToClassScope;
exports.addClassScopeToTypeGraph = addClassScopeToTypeGraph;
exports.addPropertyNodeToThis = addPropertyNodeToThis;
exports.addObjectToTypeGraph = addObjectToTypeGraph;
exports.addClassToTypeGraph = addClassToTypeGraph;

var _nodes = __webpack_require__(/*! ./nodes */ "../node_modules/@hegel/core/utils/nodes.js");

var _nodes2 = _interopRequireDefault(_nodes);

var _errors = __webpack_require__(/*! ./errors */ "../node_modules/@hegel/core/utils/errors.js");

var _errors2 = _interopRequireDefault(_errors);

var _meta = __webpack_require__(/*! ../type-graph/meta/meta */ "../node_modules/@hegel/core/type-graph/meta/meta.js");

var _callMeta = __webpack_require__(/*! ../type-graph/meta/call-meta */ "../node_modules/@hegel/core/type-graph/meta/call-meta.js");

var _typeScope = __webpack_require__(/*! ../type-graph/type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

var _objectType = __webpack_require__(/*! ../type-graph/types/object-type */ "../node_modules/@hegel/core/type-graph/types/object-type.js");

var _genericType = __webpack_require__(/*! ../type-graph/types/generic-type */ "../node_modules/@hegel/core/type-graph/types/generic-type.js");

var _functionType = __webpack_require__(/*! ../type-graph/types/function-type */ "../node_modules/@hegel/core/type-graph/types/function-type.js");

var _variableInfo = __webpack_require__(/*! ../type-graph/variable-info */ "../node_modules/@hegel/core/type-graph/variable-info.js");

var _variableScope = __webpack_require__(/*! ../type-graph/variable-scope */ "../node_modules/@hegel/core/type-graph/variable-scope.js");

var _collectionType = __webpack_require__(/*! ../type-graph/types/collection-type */ "../node_modules/@hegel/core/type-graph/types/collection-type.js");

var _call = __webpack_require__(/*! ../type-graph/call */ "../node_modules/@hegel/core/type-graph/call.js");

var _functionUtils = __webpack_require__(/*! ./function-utils */ "../node_modules/@hegel/core/utils/function-utils.js");

var _typeUtils = __webpack_require__(/*! ./type-utils */ "../node_modules/@hegel/core/utils/type-utils.js");

var _constants = __webpack_require__(/*! ../type-graph/constants */ "../node_modules/@hegel/core/type-graph/constants.js");

var _common = __webpack_require__(/*! ./common */ "../node_modules/@hegel/core/utils/common.js");

var _scopeUtils = __webpack_require__(/*! ../utils/scope-utils */ "../node_modules/@hegel/core/utils/scope-utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addThisToClassScope(currentNode, parentNode, typeScope, typeGraph, precompute, middlecompute, postcompute) {
  parentNode = currentNode.parentNode;
  currentNode = currentNode.definition;
  const classScope = typeGraph.scopes.get(_variableScope.VariableScope.getName(currentNode));

  if (classScope === undefined) {
    throw new Error("Never!!!");
  }

  if (classScope.declaration !== undefined) {
    return;
  }

  const parentTypeScope = (0, _scopeUtils.findNearestTypeScope)(classScope, typeGraph);
  const name = currentNode.id != undefined ? (0, _common.getDeclarationName)(currentNode) : "{ }";

  const selfObject = _objectType.ObjectType.term(name, {
    parent: typeScope,
    isNominal: currentNode.type === _nodes2.default.CLASS_EXPRESSION || currentNode.type === _nodes2.default.CLASS_DECLARATION
  }, []);

  const localTypeScope = new _typeScope.TypeScope(parentTypeScope);
  const self = currentNode.typeParameters === undefined ? selfObject : _genericType.GenericType.term(name, {
    parent: typeScope
  }, currentNode.typeParameters.params.map(typeAnnotation => (0, _typeUtils.getTypeFromTypeAnnotation)({
    typeAnnotation
  }, localTypeScope, classScope.parent, true, null, parentNode, typeGraph, precompute, middlecompute, postcompute)), localTypeScope, selfObject);
  let superClass;

  if (currentNode.superClass != null) {
    superClass = (0, _call.addCallToTypeGraph)(currentNode.superClass, typeGraph, classScope.parent, parentNode, precompute, middlecompute, postcompute).result;
    superClass = superClass instanceof _variableInfo.VariableInfo ? superClass.type : superClass;

    if (!(superClass instanceof _objectType.ObjectType && superClass.instanceType !== null)) {
      throw new _errors2.default("Cannot extend class from non-class type", currentNode.superClass.loc);
    }

    const superType = superClass.instanceType;

    if (superType instanceof _genericType.GenericType && currentNode.superTypeParameters == null) {
      throw new _errors2.default(`Generic type "${String(superType.name)}" should be used with type paramteres!`, currentNode.superClass.loc);
    }

    const superFunctionType = (0, _functionUtils.functionWithReturnType)( // $FlowIssue
    superClass.properties.get(_constants.CONSTRUCTABLE).type, self);
    const $super = new _objectType.ObjectType(String(superClass.name), {
      isSubtypeOf: superType
    }, [[_constants.CALLABLE, new _variableInfo.VariableInfo(superFunctionType)]]);
    const genericParams = (currentNode.superTypeParameters || []).map(arg => (0, _typeUtils.getTypeFromTypeAnnotation)({
      typeAnnotation: arg
    }, typeScope, localTypeScope, true, null, parentNode, typeGraph, precompute, middlecompute, postcompute));
    selfObject.isSubtypeOf = superType instanceof _genericType.GenericType ? superType.applyGeneric(genericParams, currentNode.superClass.loc) : superClass.instanceType;
    classScope.body.set("super", new _variableInfo.VariableInfo($super, classScope));
  }

  const selfVar = new _variableInfo.VariableInfo(self, classScope);
  classScope.body.set(_constants.THIS_TYPE, selfVar);

  if (currentNode.type === _nodes2.default.CLASS_EXPRESSION || currentNode.type === _nodes2.default.CLASS_DECLARATION) {
    parentTypeScope.body.set(name, selfVar.type);
    const staticName = getClassName(currentNode);
    const options = {
      isNominal: true
    };

    if (superClass !== undefined) {
      // $FlowIssue
      options.isSubtypeOf = superClass;
    } // $FlowIssue


    const staticSelfObject = _objectType.ObjectType.term(staticName, options, []);

    const staticSelfVar = new _variableInfo.VariableInfo(staticSelfObject, classScope.parent);
    classScope.parent.body.set(name, staticSelfVar);
    classScope.declaration = staticSelfVar;
    staticSelfObject.instanceType = self;
    const isConstructorPresented = currentNode.body.body.some(m => m.kind === "constructor");

    if (!isConstructorPresented) {
      const $super = classScope.body.get("super");
      const constructor = // $FlowIssue
      $super && $super.type.properties.get(_constants.CALLABLE) || new _variableInfo.VariableInfo(_functionType.FunctionType.new(`() => ${name}`, {
        parent: self.parent
      }, [], self), classScope, new _meta.Meta(currentNode.loc)); // $FlowIssue

      const type = constructor.type instanceof _genericType.GenericType ? constructor.type.subordinateType : constructor.type;
      type.returnType = (type.returnType instanceof _objectType.ObjectType || type.returnType instanceof _collectionType.CollectionType) && _objectType.ObjectType.Object.isPrincipalTypeFor(type.returnType) ? type.returnType : self;
      constructor.type = type;
      staticSelfObject.properties.set(_constants.CONSTRUCTABLE, constructor);
    }
  }
}

function addThisToObjectScope(objectScope, currentNode) {
  const properties = currentNode.expected instanceof _objectType.ObjectType ? [...currentNode.expected.properties] : [];
  const self = new _objectType.ObjectType("{  }", {}, properties);
  const selfVar = new _variableInfo.VariableInfo(self, objectScope);
  objectScope.body.set(_constants.THIS_TYPE, selfVar);
}

function addClassScopeToTypeGraph(currentNode, parentNode, typeGraph) {
  const scope = (0, _scopeUtils.getScopeFromNode)(currentNode, parentNode, typeGraph);
  const parentTypeScope = (0, _scopeUtils.findNearestTypeScope)(scope, typeGraph);
  const name = currentNode.id != undefined ? (0, _common.getDeclarationName)(currentNode) : (0, _common.getAnonymousKey)(currentNode);
  parentTypeScope.body.set(name, currentNode);
  typeGraph.scopes.set(_variableScope.VariableScope.getName(currentNode), scope);

  if (scope.type === _variableScope.VariableScope.OBJECT_TYPE) {
    addThisToObjectScope(scope, currentNode);
  } else {
    currentNode.body.body.unshift({
      type: _nodes2.default.THIS_TYPE_DEFINITION,
      parentNode,
      definition: currentNode,
      loc: currentNode.loc
    });
  }

  return scope;
}

function addPropertyNodeToThis(currentNode, parentNode, typeGraph, pre, middle, post) {
  let propertyName = currentNode.key.name || `${currentNode.key.value}`;
  propertyName = propertyName === "constructor" ? _constants.CONSTRUCTABLE : propertyName; // $FlowIssue

  const currentClassScope = (0, _scopeUtils.getParentForNode)(currentNode, parentNode, typeGraph);

  if (currentClassScope.isProcessed) {
    return;
  } // $FlowIssue


  const self = currentNode.static || propertyName === _constants.CONSTRUCTABLE ? currentClassScope.declaration : currentClassScope.findVariable({
    name: _constants.THIS_TYPE
  }, parentNode, typeGraph, pre, middle, post);
  const selfType = self.type instanceof _genericType.GenericType ? self.type.subordinateType : self.type;

  if (!(selfType instanceof _objectType.ObjectType)) {
    throw new Error("Never!!!");
  }

  const existedProperty = selfType.properties.get(propertyName);

  if (existedProperty !== undefined && (currentClassScope.type === _variableScope.VariableScope.CLASS_TYPE || existedProperty instanceof _variableInfo.VariableInfo && existedProperty.hasInitializer)) {
    throw new _errors2.default("Duplicated property definition!", currentNode.loc);
  }

  if (!(existedProperty instanceof _variableInfo.VariableInfo)) {
    selfType.properties.set(propertyName, currentNode);
  }
}

function addObjectToTypeGraph(currentNode, typeGraph) {
  const objectScope = typeGraph.scopes.get(_variableScope.VariableScope.getName(currentNode));

  if (objectScope === undefined) {
    throw new Error("Never!!!");
  }

  const self = objectScope.body.get(_constants.THIS_TYPE);

  if (!(self instanceof _variableInfo.VariableInfo)) {
    throw new Error("Never!!!");
  } // $FlowIssue


  let selfType = self.type instanceof _genericType.GenericType ? self.type.subordinateType : self.type;
  const properties = [];

  for (const [key, property] of selfType.properties.entries()) {
    if (property.hasInitializer) {
      properties.push([key, property]);
    }
  }

  const name = _objectType.ObjectType.getName(properties, selfType);

  selfType = _objectType.ObjectType.term(name, {}, properties);
  self.type = selfType;
  objectScope.isProcessed = true;
  return self;
}

function addClassToTypeGraph(classNode, typeScope, typeGraph, parentNode, pre, middle, post, isTypeDefinitions) {
  const classScope = typeGraph.scopes.get(_variableScope.VariableScope.getName(classNode));
  const name = classNode.id != undefined ? (0, _common.getDeclarationName)(classNode) : (0, _common.getAnonymousKey)(classNode);

  if (!(classScope instanceof _variableScope.VariableScope)) {
    throw new Error("Never!!!");
  }

  const self = classScope.findVariable({
    name: _constants.THIS_TYPE
  }, parentNode, typeGraph, pre, middle, post); // $FlowIssue

  const {
    properties
  } = self.type instanceof _genericType.GenericType ? self.type.subordinateType : self.type;

  if (self.type.name === "{  }") {
    self.type.name = _objectType.ObjectType.getName([...properties]);
  }

  const errors = []; // properties.forEach((property, key) => {
  //  if (!property.hasInitializer && property.type.name !== "undefined") {
  //    errors.push(new HegelError(`Property "${key}" has a type, but doesn't have an initializer!`, property.meta.loc));
  //  }
  // });

  if (errors.length !== 0) {
    throw errors;
  }

  const superType = classScope.body.get("super");
  typeScope.body.set(name, self.type);
  const existedConstructor = classNode.body.body.find(m => m.kind === "constructor");

  if (existedConstructor && !isTypeDefinitions) {
    const constructorScope = typeGraph.scopes.get(_variableScope.VariableScope.getName(existedConstructor));

    if (!(constructorScope instanceof _variableScope.VariableScope)) {
      throw new Error("Never!!!");
    }

    if (constructorScope.calls.find(call => call.targetName === "return") === undefined) {
      const callMeta = new _callMeta.CallMeta(new _functionType.FunctionType("", {}, [self.type], self.type), [self], // $FlowIssue
      constructorScope.declaration.meta.loc, "return", false);
      constructorScope.calls.push(callMeta);
    }

    if (superType !== undefined) {
      const superCallIndex = constructorScope.calls.findIndex(call => call.targetName === "super");
      const thisCallIndex = constructorScope.calls.findIndex(call => call.targetName === "this");

      if (superCallIndex === -1) {
        throw new _errors2.default('Constructor must contain "super" call super inside', // $FlowIssue
        constructorScope.declaration.meta.loc);
      }

      if (thisCallIndex !== -1 && superCallIndex > thisCallIndex) {
        throw new _errors2.default('"super" must be called before accessing "this"', constructorScope.calls[thisCallIndex].loc);
      }
    }
  }

  classScope.isProcessed = true; // $FlowIssue

  return classScope.declaration;
}

function getClassName(classNode) {
  if (classNode.id !== null) {
    return `class ${classNode.id.name}`;
  }

  return `Anonymous Class [${classNode.loc.start.line}:${classNode.loc.end.line}]`;
}

/***/ }),

/***/ "../node_modules/@hegel/core/utils/common.js":
/*!***************************************************!*\
  !*** ../node_modules/@hegel/core/utils/common.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDeclarationName = exports.getAnonymousKey = undefined;
exports.unique = unique;
exports.intersection = intersection;
exports.union = union;
exports.getMemberExressionTarget = getMemberExressionTarget;

var _nodes = __webpack_require__(/*! ./nodes */ "../node_modules/@hegel/core/utils/nodes.js");

var _nodes2 = _interopRequireDefault(_nodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getAnonymousKey = exports.getAnonymousKey = node => `[[Anonymuos${node.loc.start.line}-${node.loc.start.column}]]`;

const getDeclarationName = exports.getDeclarationName = node => node.id.name;

function unique(arr, getKey = x => x) {
  const filterObject = {};

  for (let i = 0; i < arr.length; i++) {
    const key = getKey(arr[i]);
    filterObject[key] = arr[i];
  }

  return Object.values(filterObject);
}

function intersection(arr1, arr2, isEquals = (a, b) => a === b) {
  const intersectionResult = [];
  const exclusiveOr = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (!isEquals(arr1[i], arr2[j])) {
        exclusiveOr.push(arr1[i], arr2[j]);
        continue;
      }

      intersectionResult.push(arr2[j]);
    }
  }

  return [intersectionResult, exclusiveOr];
}

function union(arr1, arr2, isEquals = (a, b) => a === b) {
  const unionResult = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (isEquals(arr1[i], arr2[j])) {
        unionResult.push(arr2[j]);
        continue;
      }

      unionResult.push(arr2[j]);
    }
  }

  return unionResult;
}

function getMemberExressionTarget(node) {
  let target = node;

  do {
    target = target.object;
  } while (target.type === _nodes2.default.MEMBER_EXPRESSION);

  return target;
}

/***/ }),

/***/ "../node_modules/@hegel/core/utils/errors.js":
/*!***************************************************!*\
  !*** ../node_modules/@hegel/core/utils/errors.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class HegelError extends Error {
  constructor(message, loc, source = "") {
    super(message);

    _defineProperty(this, "loc", void 0);

    _defineProperty(this, "source", void 0);

    this.loc = loc;
    this.source = source;
  }

}

exports.default = HegelError;

class UnreachableError extends Error {
  constructor(loc) {
    super("");

    _defineProperty(this, "loc", void 0);

    this.loc = loc;
  }

}

exports.UnreachableError = UnreachableError;

/***/ }),

/***/ "../node_modules/@hegel/core/utils/function-utils.js":
/*!***********************************************************!*\
  !*** ../node_modules/@hegel/core/utils/function-utils.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addFunctionScopeToTypeGraph = addFunctionScopeToTypeGraph;
exports.addFunctionNodeToTypeGraph = addFunctionNodeToTypeGraph;
exports.addFunctionToTypeGraph = addFunctionToTypeGraph;
exports.isCallableType = isCallableType;
exports.functionWithReturnType = functionWithReturnType;

var _nodes = __webpack_require__(/*! ./nodes */ "../node_modules/@hegel/core/utils/nodes.js");

var _nodes2 = _interopRequireDefault(_nodes);

var _meta = __webpack_require__(/*! ../type-graph/meta/meta */ "../node_modules/@hegel/core/type-graph/meta/meta.js");

var _type = __webpack_require__(/*! ../type-graph/types/type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _typeVar = __webpack_require__(/*! ../type-graph/types/type-var */ "../node_modules/@hegel/core/type-graph/types/type-var.js");

var _unionType = __webpack_require__(/*! ../type-graph/types/union-type */ "../node_modules/@hegel/core/type-graph/types/union-type.js");

var _genericType = __webpack_require__(/*! ../type-graph/types/generic-type */ "../node_modules/@hegel/core/type-graph/types/generic-type.js");

var _functionType = __webpack_require__(/*! ../type-graph/types/function-type */ "../node_modules/@hegel/core/type-graph/types/function-type.js");

var _variableInfo = __webpack_require__(/*! ../type-graph/variable-info */ "../node_modules/@hegel/core/type-graph/variable-info.js");

var _variableScope = __webpack_require__(/*! ../type-graph/variable-scope */ "../node_modules/@hegel/core/type-graph/variable-scope.js");

var _variableUtils = __webpack_require__(/*! ./variable-utils */ "../node_modules/@hegel/core/utils/variable-utils.js");

var _inference = __webpack_require__(/*! ../inference */ "../node_modules/@hegel/core/inference/index.js");

var _moduleScope = __webpack_require__(/*! ../type-graph/module-scope */ "../node_modules/@hegel/core/type-graph/module-scope.js");

var _common = __webpack_require__(/*! ./common */ "../node_modules/@hegel/core/utils/common.js");

var _scopeUtils = __webpack_require__(/*! ../utils/scope-utils */ "../node_modules/@hegel/core/utils/scope-utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addFunctionScopeToTypeGraph(currentNode, parentNode, moduleScope, variableInfo) {
  const scope = (0, _scopeUtils.getScopeFromNode)(currentNode, parentNode, moduleScope, variableInfo);
  scope.throwable = [];
  moduleScope.scopes.set(_variableScope.VariableScope.getName(currentNode), scope);

  if (currentNode.type === _nodes2.default.FUNCTION_EXPRESSION && currentNode.id) {
    scope.body.set((0, _common.getDeclarationName)(currentNode), variableInfo);
  }

  return scope;
}

function addFunctionNodeToTypeGraph(currentNode, parentNode, moduleScope) {
  const name = (0, _common.getDeclarationName)(currentNode);
  const currentScope = (0, _scopeUtils.getParentForNode)(currentNode, parentNode, moduleScope);
  currentScope.body.set(name, currentNode);
}

function addFunctionToTypeGraph(currentNode, parentNode, moduleScope, pre, middle, post, isTypeDefinitions) {
  const name = currentNode.type === _nodes2.default.FUNCTION_DECLARATION || currentNode.type === _nodes2.default.TS_FUNCTION_DECLARATION ? (0, _common.getDeclarationName)(currentNode) : (0, _common.getAnonymousKey)(currentNode);
  const variableInfo = (0, _variableUtils.addVariableToGraph)(currentNode, parentNode, moduleScope, pre, middle, post, name);
  const currentTypeScope = (0, _scopeUtils.findNearestTypeScope)(variableInfo.parent, moduleScope);
  const scope = isTypeDefinitions ? new _variableScope.VariableScope(_variableScope.VariableScope.FUNCTION_TYPE, variableInfo.parent) : addFunctionScopeToTypeGraph(currentNode, parentNode, moduleScope, variableInfo);
  variableInfo.type = (0, _inference.inferenceTypeForNode)(currentNode, currentTypeScope, variableInfo.parent, moduleScope, parentNode, pre, middle, post, isTypeDefinitions);
  const expectedType = currentNode.expected;
  const functionType = variableInfo.type instanceof _genericType.GenericType ? variableInfo.type.subordinateType : variableInfo.type;

  if (expectedType instanceof _functionType.FunctionType) {
    // $FlowIssue
    const inferencedArgumentsTypes = functionType.argumentsTypes;
    const expectedArgumentsTypes = expectedType.argumentsTypes;

    for (let i = 0; i < inferencedArgumentsTypes.length; i++) {
      const inferenced = inferencedArgumentsTypes[i];
      const expected = expectedArgumentsTypes[i];

      if (inferenced instanceof _typeVar.TypeVar && !inferenced.isUserDefined && expected !== undefined) {
        inferencedArgumentsTypes[i] = expected;
      }
    }
  }

  const withPositions = moduleScope instanceof _moduleScope.PositionedModuleScope;
  currentNode.params.forEach((param, index) => {
    let type = functionType.argumentsTypes[index];
    const id = param.left || param;

    if (param.left != undefined && type instanceof _unionType.UnionType && id.typeAnnotation == undefined) {
      const types = type.variants.filter(a => a !== _type.Type.Undefined);
      type = _unionType.UnionType.term(null, {
        parent: currentTypeScope
      }, types);
    }

    let varInfo = scope.body.get(id.name);

    if (varInfo !== undefined) {
      varInfo.type = type;
      varInfo.parent = scope;
    } else {
      varInfo = new _variableInfo.VariableInfo(type, scope, new _meta.Meta(id.loc));
      scope.body.set(id.name, varInfo);
    }

    if (withPositions) {
      // $FlowIssue
      moduleScope.addPosition(id, varInfo);
    }
  });

  if (withPositions && currentNode.id != null) {
    // $FlowIssue
    moduleScope.addPosition(currentNode.id, variableInfo);
  }

  return variableInfo;
}

function isCallableType(a) {
  if (a instanceof _genericType.GenericType) {
    a = a.subordinateType;
  }

  return a instanceof _functionType.FunctionType;
}

function functionWithReturnType(functionType, newReturnType) {
  const oldFunctionType = functionType instanceof _genericType.GenericType ? functionType.subordinateType : functionType;
  const newFunctionArguments = [...oldFunctionType.argumentsTypes];
  const newFunctionGenericArguments = functionType instanceof _genericType.GenericType ? [...functionType.genericArguments] : [];

  const newFunctionType = _functionType.FunctionType.term(_functionType.FunctionType.getName(newFunctionArguments, newReturnType, newFunctionGenericArguments, oldFunctionType.isAsync), {}, newFunctionArguments, newReturnType);

  if (!(functionType instanceof _genericType.GenericType) || newFunctionType instanceof _genericType.GenericType) {
    return newFunctionType;
  }

  return _genericType.GenericType.new(newFunctionType.name, {}, newFunctionGenericArguments, functionType.localTypeScope, newFunctionType);
}

/***/ }),

/***/ "../node_modules/@hegel/core/utils/globals.js":
/*!****************************************************!*\
  !*** ../node_modules/@hegel/core/utils/globals.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type = __webpack_require__(/*! ../type-graph/types/type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _variableInfo = __webpack_require__(/*! ../type-graph/variable-info */ "../node_modules/@hegel/core/type-graph/variable-info.js");

const mixBaseGlobals = moduleScope => {
  const typeScope = moduleScope.typeScope;
  const globalTypes = [["unknown", _type.Type.Unknown], ["never", _type.Type.Never], ["undefined", _type.Type.Undefined], [null, _type.Type.Null], ["number", _type.Type.Number], ["bigint", _type.Type.BigInt], ["string", _type.Type.String], ["boolean", _type.Type.Boolean], ["symbol", _type.Type.Symbol]];
  const globals = [["undefined", new _variableInfo.VariableInfo(_type.Type.Undefined)]];

  for (const [name, type] of globalTypes) {
    typeScope.body.set(name, type);
    type.parent = typeScope;
  }

  for (const [name, variable] of globals) {
    moduleScope.body.set(name, variable);
    variable.parent = moduleScope;
  }
};

exports.default = mixBaseGlobals;

/***/ }),

/***/ "../node_modules/@hegel/core/utils/hierarchy.js":
/*!******************************************************!*\
  !*** ../node_modules/@hegel/core/utils/hierarchy.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupBaseHierarchy = setupBaseHierarchy;
exports.setupFullHierarchy = setupFullHierarchy;
exports.dropAllGlobals = dropAllGlobals;

var _type = __webpack_require__(/*! ../type-graph/types/type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _typeVar = __webpack_require__(/*! ../type-graph/types/type-var */ "../node_modules/@hegel/core/type-graph/types/type-var.js");

var _typeScope = __webpack_require__(/*! ../type-graph/type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

var _tupleType = __webpack_require__(/*! ../type-graph/types/tuple-type */ "../node_modules/@hegel/core/type-graph/types/tuple-type.js");

var _objectType = __webpack_require__(/*! ../type-graph/types/object-type */ "../node_modules/@hegel/core/type-graph/types/object-type.js");

var _genericType = __webpack_require__(/*! ../type-graph/types/generic-type */ "../node_modules/@hegel/core/type-graph/types/generic-type.js");

var _functionType = __webpack_require__(/*! ../type-graph/types/function-type */ "../node_modules/@hegel/core/type-graph/types/function-type.js");

function setupBaseHierarchy(globalTypeScope) {
  _type.Type.GlobalTypeScope = globalTypeScope;
  _type.Type.Undefined.parent = globalTypeScope;
  _type.Type.Null.parent = globalTypeScope;
  _type.Type.String.parent = globalTypeScope;
  _type.Type.Symbol.parent = globalTypeScope;
  _type.Type.Boolean.parent = globalTypeScope;
  _type.Type.Number.parent = globalTypeScope;
  _type.Type.BigInt.parent = globalTypeScope;
  _type.Type.Unknown.parent = globalTypeScope;
  _type.Type.Never.parent = globalTypeScope;
  _objectType.ObjectType.Object.parent = globalTypeScope;
  _functionType.FunctionType.Function.parent = globalTypeScope;
  _tupleType.TupleType.Array.parent = globalTypeScope;
  _typeVar.TypeVar.Self.parent = globalTypeScope;
}

function setupFullHierarchy(globalTypeScope) {
  _objectType.ObjectType.Object.root = _objectType.ObjectType.term("Object", {}, []);
  globalTypeScope.body.set("Object", _objectType.ObjectType.Object);
  _functionType.FunctionType.Function.root = _objectType.ObjectType.term("Function", {}, []);
  globalTypeScope.body.set("Function", _functionType.FunctionType.Function);
  const local = new _typeScope.TypeScope(globalTypeScope);
  _tupleType.TupleType.Array.root = _genericType.GenericType.term("Array", {}, [_typeVar.TypeVar.new("T", {
    parent: local
  })], local, _objectType.ObjectType.new("Array<T>", {
    parent: local
  }, []));
  globalTypeScope.body.set("Array", _tupleType.TupleType.Array);
}

function dropAllGlobals() {
  _objectType.ObjectType.Object.root = undefined;
  _functionType.FunctionType.Function.root = undefined;
  _tupleType.TupleType.Array.root = undefined;
}

/***/ }),

/***/ "../node_modules/@hegel/core/utils/imports.js":
/*!****************************************************!*\
  !*** ../node_modules/@hegel/core/utils/imports.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.importDependencies = importDependencies;
exports.default = mixImportedDependencies;

var _nodes = __webpack_require__(/*! ./nodes */ "../node_modules/@hegel/core/utils/nodes.js");

var _nodes2 = _interopRequireDefault(_nodes);

var _errors = __webpack_require__(/*! ./errors */ "../node_modules/@hegel/core/utils/errors.js");

var _errors2 = _interopRequireDefault(_errors);

var _meta = __webpack_require__(/*! ../type-graph/meta/meta */ "../node_modules/@hegel/core/type-graph/meta/meta.js");

var _type = __webpack_require__(/*! ../type-graph/types/type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _objectType = __webpack_require__(/*! ../type-graph/types/object-type */ "../node_modules/@hegel/core/type-graph/types/object-type.js");

var _variableInfo = __webpack_require__(/*! ../type-graph/variable-info */ "../node_modules/@hegel/core/type-graph/variable-info.js");

var _moduleScope = __webpack_require__(/*! ../type-graph/module-scope */ "../node_modules/@hegel/core/type-graph/module-scope.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getImportName(specifier) {
  if (specifier.type === _nodes2.default.IMPORT_SPECIFIER) {
    return specifier.imported.name;
  }

  if (specifier.type === _nodes2.default.IMPORT_DEFAULT_SPECIFIER) {
    return "default";
  }

  return null;
}

function importDependencies(importNode, moduleTypeGraph, currentModuleTypeGraph, currentModuleTypeScope, isTypeDefinitions) {
  const {
    exports,
    exportsTypes
  } = moduleTypeGraph;
  const importSource = importNode.importKind === "type" || isTypeDefinitions ? exportsTypes : exports;
  const importTarget = importNode.importKind === "type" || isTypeDefinitions ? currentModuleTypeScope : currentModuleTypeGraph;
  const importEntries = [...importSource.entries()].map(([key, a]) => [key, a instanceof _variableInfo.VariableInfo ? a : new _variableInfo.VariableInfo(a)]);
  const withPositions = currentModuleTypeGraph instanceof _moduleScope.PositionedModuleScope;
  const shouldBeVariable = importTarget instanceof _moduleScope.ModuleScope;
  importNode.specifiers.forEach(specifier => {
    const importName = getImportName(specifier);
    let importElement = importName ? importSource.get(importName) : _objectType.ObjectType.term(_objectType.ObjectType.getName(importEntries), {
      typeScope: currentModuleTypeScope
    }, importEntries);

    if (importElement === undefined) {
      throw new _errors2.default(`Module "${importNode.source.value}" hasn't "${importName || "*"}" export`, specifier.loc);
    }

    if (importElement instanceof _objectType.ObjectType && importElement.instanceType !== null) {
      currentModuleTypeScope.body.set(importName, importElement.instanceType);
    }

    if (shouldBeVariable && !(importElement instanceof _variableInfo.VariableInfo)) {
      importElement = new _variableInfo.VariableInfo(importElement, // $FlowIssue
      importTarget, new _meta.Meta(specifier.loc));
    }

    let finalImportVariable = importElement;

    if (importNode.importKind !== "type" && !isTypeDefinitions && importElement instanceof _type.Type) {
      finalImportVariable = new _variableInfo.VariableInfo(importElement, currentModuleTypeGraph);
    }

    if ((importNode.importKind === "type" || isTypeDefinitions) && importElement instanceof _variableInfo.VariableInfo) {
      finalImportVariable = importElement.type;
    } // $FlowIssue


    importTarget.body.set(specifier.local.name, finalImportVariable);

    if (withPositions) {
      // $FlowIssue
      currentModuleTypeGraph.addPosition(specifier, finalImportVariable);
    }
  });
}

async function mixImportedDependencies(ast, errors, currentModuleScope, currentTypeScope, getModuleTypeGraph, isTypeDefinitions) {
  const importRequests = [];

  for (let i = 0; i < ast.body.length; i++) {
    const node = ast.body[i];

    if (node.type === _nodes2.default.IMPORT_DECLARATION) {
      importRequests.push(Promise.all([node, getModuleTypeGraph(node.source.value, ast.path, node.loc).then(module => {
        if (errors.some(error => error.source === module.path) && currentModuleScope instanceof _moduleScope.PositionedModuleScope) {
          errors.push(new _errors2.default(`There are problems inside "${node.source.value}"`, node.loc, currentModuleScope.path));
        }

        return module;
      })]));
    }
  }

  const importedTypeGraphs = await Promise.all(importRequests);

  for (let i = 0; i < importedTypeGraphs.length; i++) {
    try {
      const [importNode, moduleTypeGraph] = importedTypeGraphs[i];
      importDependencies(importNode, moduleTypeGraph, currentModuleScope, currentTypeScope, isTypeDefinitions);
    } catch (e) {
      if (!(e instanceof _errors2.default)) {
        throw e;
      }

      errors.push(e);
    }
  }
}

/***/ }),

/***/ "../node_modules/@hegel/core/utils/inference-utils.js":
/*!************************************************************!*\
  !*** ../node_modules/@hegel/core/utils/inference-utils.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTypesFromVariants = getTypesFromVariants;
exports.getPropertyChaining = getPropertyChaining;
exports.mergeRefinementsVariants = mergeRefinementsVariants;

var _nodes = __webpack_require__(/*! ../utils/nodes */ "../node_modules/@hegel/core/utils/nodes.js");

var _nodes2 = _interopRequireDefault(_nodes);

var _unionType = __webpack_require__(/*! ../type-graph/types/union-type */ "../node_modules/@hegel/core/type-graph/types/union-type.js");

var _typeUtils = __webpack_require__(/*! ./type-utils */ "../node_modules/@hegel/core/utils/type-utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTypesFromVariants(_refinementedVariants, _alternateVariants, typeScope) {
  // $FlowIssue
  const refinementedVariants = _refinementedVariants.filter(a => a != undefined); // $FlowIssue


  const alternateVariants = _alternateVariants.filter(a => a != undefined);

  return [refinementedVariants.length ? _unionType.UnionType.term(null, {}, refinementedVariants) : undefined, alternateVariants.length ? _unionType.UnionType.term(null, {}, alternateVariants) : undefined];
}

function getPropertyChaining(node) {
  let memberPointer = node;
  const chaining = [];

  do {
    if (memberPointer.property.type !== _nodes2.default.IDENTIFIER || memberPointer.computed) {
      return;
    }

    chaining.unshift(memberPointer.property.name || memberPointer.property.value);
    memberPointer = memberPointer.object;
  } while (memberPointer.type === _nodes2.default.MEMBER_EXPRESSION);

  return chaining;
}

function mergeRefinementsVariants(refinementedType, alternateType, originalProperty, propertyName, typeScope) {
  const nestedRefinementedType = refinementedType && (0, _typeUtils.createObjectWith)(propertyName, refinementedType, typeScope, originalProperty.meta);
  const nestedAlternateType = alternateType && (0, _typeUtils.createObjectWith)(propertyName, alternateType, typeScope, originalProperty.meta);
  return [nestedRefinementedType && (0, _typeUtils.mergeObjectsTypes)( // $FlowIssue
  originalProperty.type, nestedRefinementedType, typeScope), nestedAlternateType && // $FlowIssue
  (0, _typeUtils.mergeObjectsTypes)(originalProperty.type, nestedAlternateType, typeScope)];
}

/***/ }),

/***/ "../node_modules/@hegel/core/utils/nodes.js":
/*!**************************************************!*\
  !*** ../node_modules/@hegel/core/utils/nodes.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const DECLARATION_TYPES = exports.DECLARATION_TYPES = {
  VARIABLE_DECLARATOR: "VariableDeclarator",
  VARIABLE_DECLARATION: "VariableDeclaration",
  FUNCTION_DECLARATION: "FunctionDeclaration",
  TS_FUNCTION_DECLARATION: "TSDeclareFunction",
  TS_CALL_SIGNATURE_DECLARATION: "TSCallSignatureDeclaration",
  TS_TYPE_QUERY: "TSTypeQuery",
  CLASS_DECLARATION: "ClassDeclaration",
  VARIABLE_DECLARATOR: "VariableDeclarator",
  VARIABLE_DECLARATOR: "VariableDeclarator",
  TYPE_ALIAS: "TypeAlias",
  TS_TYPE_ALIAS: "TSTypeAliasDeclaration",
  TS_DECLARE_METHOD: "TSDeclareMethod",
  TS_INTERFACE_DECLARATION: "TSInterfaceDeclaration",
  TYPE_PARAMETER: "TypeParameter",
  TYPE_PARAMETER_DECLARATION: "TypeParameterDeclaration",
  TS_TYPE_PARAMETER_DECLARATION: "TSTypeParameterDeclaration",
  TS_TYPE_PARAMETER: "TSTypeParameter",
  EXPORT_NAMED_DECLARATION: "ExportNamedDeclaration",
  EXPORT_DEFAULT_DECLARATION: "ExportDefaultDeclaration",
  IMPORT_DECLARATION: "ImportDeclaration"
};
const STATEMENTS_TYPES = exports.STATEMENTS_TYPES = {
  PURE_KEY: "PureKeyStatement",
  PURE_VALUE: "PureValueStatement",
  BLOCK_STATEMENT: "BlockStatement",
  IF_STATEMENT: "IfStatement",
  WHILE_STATEMENT: "WhileStatement",
  DO_WHILE_STATEMENT: "DoWhileStatement",
  FOR_STATEMENT: "ForStatement",
  FOR_IN_STATEMENT: "ForInStatement",
  FOR_OF_STATEMENT: "ForOfStatement",
  EXPRESSION_STATEMENT: "ExpressionStatement",
  RETURN_STATEMENT: "ReturnStatement",
  EMPTY_STATEMENT: "EmptyStatement",
  TRY_STATEMENT: "TryStatement",
  THROW_STATEMENT: "ThrowStatement",
  CATCH_CLAUSE: "CatchClause"
};
const EXPRESSIONS_TYPES = exports.EXPRESSIONS_TYPES = {
  SUPER: "Super",
  ARRAY_EXPRESSION: "ArrayExpression",
  SEQUENCE_EXPRESSION: "SequenceExpression",
  FUNCTION_EXPRESSION: "FunctionExpression",
  ARROW_FUNCTION_EXPRESSION: "ArrowFunctionExpression",
  OBJECT_EXPRESSION: "ObjectExpression",
  CLASS_EXPRESSION: "ClassExpression",
  ASSIGNMENT_EXPRESSION: "AssignmentExpression",
  TS_EXPORT_ASSIGNMENT: "TSExportAssignment",
  ASSIGNMENT_PATTERN: "AssignmentPattern",
  BINARY_EXPRESSION: "BinaryExpression",
  UNARY_EXPRESSION: "UnaryExpression",
  CONDITIONAL_EXPRESSION: "ConditionalExpression",
  AWAIT_EXPRESSION: "AwaitExpression",
  LOGICAL_EXPRESSION: "LogicalExpression",
  CALL_EXPRESSION: "CallExpression",
  MEMBER_EXPRESSION: "MemberExpression",
  UPDATE_EXPRESSION: "UpdateExpression",
  NEW_EXPRESSION: "NewExpression",
  THIS_EXPRESSION: "ThisExpression",
  TS_EXPRESSION_WITH_TYPE_ARGUMENTS: "TSExpressionWithTypeArguments",
  REST_ELEMENT: "RestElement"
};
const OBJECT_PROPERTIES = exports.OBJECT_PROPERTIES = {
  OBJECT_EXPRESSION: "ObjectExpression",
  OBJECT_METHOD: "ObjectMethod",
  TS_OBJECT_METHOD: "TSMethodSignature",
  OBJECT_PROPERTY: "ObjectProperty",
  TS_OBJECT_PROPERTY: "TSPropertySignature",
  TS_INDEX_PROPERTY: "TSIndexSignature",
  TS_CONSTRUCT_SIGNATURE_DECLARATION: "TSConstructSignatureDeclaration"
};
const CLASS_PROPERTIES = exports.CLASS_PROPERTIES = {
  CLASS_METHOD: "ClassMethod",
  CLASS_PROPERTY: "ClassProperty"
};
const LITERAL_TYPES = exports.LITERAL_TYPES = {
  NUMERIC_LITERAL: "NumericLiteral",
  BIGINT_LITERAL: "BigIntLiteral",
  STRING_LITERAL: "StringLiteral",
  BOOLEAN_LITERAL: "BooleanLiteral",
  NULL_LITERAL: "NullLiteral",
  REG_EXP_LITERAL: "RegExpLiteral",
  TS_LITERAL_TYPE: "TSLiteralType",
  TEMPLATE_LITERAL: "TemplateLiteral"
};
const ANNOTATION_TYPES = exports.ANNOTATION_TYPES = {
  FUNCTION_TYPE_ANNOTATION: "FunctionTypeAnnotation",
  ANY_TYPE_ANNOTATION: "AnyTypeAnnotation",
  VOID_TYPE_ANNOTATION: "VoidTypeAnnotation",
  BOOLEAN_TYPE_ANNOTATION: "BooleanTypeAnnotation",
  MIXED_TYPE_ANNOTATION: "MixedTypeAnnotation",
  EMPTY_TYPE_ANNOTATION: "EmptyTypeAnnotation",
  NUMBER_TYPE_ANNOTATION: "NumberTypeAnnotation",
  STRING_TYPE_ANNOTATION: "StringTypeAnnotation",
  NULL_LITERAL_TYPE_ANNOTATION: "NullLiteralTypeAnnotation",
  GENERIC_TYPE_ANNOTATION: "GenericTypeAnnotation",
  NUBMER_LITERAL_TYPE_ANNOTATION: "NumberLiteralTypeAnnotation",
  BOOLEAN_LITERAL_TYPE_ANNOTATION: "BooleanLiteralTypeAnnotation",
  STRING_LITERAL_TYPE_ANNOTATION: "StringLiteralTypeAnnotation",
  OBJECT_TYPE_ANNOTATION: "ObjectTypeAnnotation",
  OBJECT_TYPE_PROPERTY: "ObjectTypeProperty",
  OBJECT_TYPE_SPREAD_PROPERTY: "ObjectTypeSpreadProperty",
  UNION_TYPE_ANNOTATION: "UnionTypeAnnotation",
  NULLABLE_TYPE_ANNOTATION: "NullableTypeAnnotation",
  TUPLE_TYPE_ANNOTATION: "TupleTypeAnnotation",
  TS_PARENTHESIZED_TYPE: "TSParenthesizedType",
  TS_FUNCTION_TYPE_ANNOTATION: "TSFunctionType",
  TS_ANY_TYPE_ANNOTATION: "TSAnyKeyword",
  TS_SYMBOL_TYPE_ANNOTATION: "TSSymbolKeyword",
  TS_VOID_TYPE_ANNOTATION: "TSVoidKeyword",
  TS_BOOLEAN_TYPE_ANNOTATION: "TSBooleanKeyword",
  TS_UNKNOWN_TYPE_ANNOTATION: "TSUnknownKeyword",
  TS_NEVER_TYPE_ANNOTATION: "TSNeverKeyword",
  TS_NUMBER_TYPE_ANNOTATION: "TSNumberKeyword",
  TS_BIGINT_TYPE_ANNOTATION: "TSBigIntKeyword",
  TS_SYMBOL_TYPE_ANNOTATION: "TSSymbolKeyword",
  TS_STRING_TYPE_ANNOTATION: "TSStringKeyword",
  TS_NULL_LITERAL_TYPE_ANNOTATION: "TSNullKeyword",
  TS_OBJECT_KEYWORD: "TSObjectKeyword",
  TS_TYPE_OPERATOR: "TSTypeOperator",
  TS_GENERIC_TYPE_ANNOTATION: "TSTypeReference",
  TS_OBJECT_TYPE_ANNOTATION: "TSTypeLiteral",
  TS_UNION_TYPE_ANNOTATION: "TSUnionType",
  TS_TUPLE_TYPE_ANNOTATION: "TSTupleType",
  TS_TYPE_ANNOTATION: "TSTypeAnnotation",
  TS_TYPE_REFERENCE_ANNOTATION: "TSTypeReference",
  THIS_TYPE_ANNOTATION: "ThisTypeAnnotation",
  TS_THIS_TYPE_ANNOTATION: "TSThisType",
  TS_UNDEFINED_TYPE_ANNOTATION: "TSUndefinedKeyword",
  TS_ARRAY_TYPE_ANNOTATION: "TSArrayType",
  TS_INTERSECTION_TYPE: "TSIntersectionType"
};
const INITIALIZATION_TYPES = exports.INITIALIZATION_TYPES = {
  IDENTIFIER: "Identifier",
  PROGRAM: "Program"
};
const DECLARATION_KINDS = exports.DECLARATION_KINDS = {
  VAR: "var",
  CONST: "const",
  LET: "let"
};
const SPECIFIERS_TYPES = exports.SPECIFIERS_TYPES = {
  IMPORT_DEFAULT_SPECIFIER: "ImportDefaultSpecifier",
  IMPORT_NAMESPACE_SPECIFIER: "ImportNamespaceSpecifier",
  IMPORT_SPECIFIER: "ImportSpecifier"
};
const SPECIAL_TYPES = exports.SPECIAL_TYPES = {
  THIS_TYPE_DEFINITION: "ThisTypeDefinition"
};

const isUnscopableDeclaration = exports.isUnscopableDeclaration = ({
  kind
}) => kind === DECLARATION_KINDS.VAR;

const isObject = exports.isObject = node => node.type === OBJECT_PROPERTIES.OBJECT_EXPRESSION;

const isScopeCreator = exports.isScopeCreator = node => [INITIALIZATION_TYPES.PROGRAM, OBJECT_PROPERTIES.OBJECT_METHOD, CLASS_PROPERTIES.CLASS_METHOD, DECLARATION_TYPES.CLASS_DECLARATION, EXPRESSIONS_TYPES.CLASS_EXPRESSION, EXPRESSIONS_TYPES.OBJECT_EXPRESSION, STATEMENTS_TYPES.BLOCK_STATEMENT, EXPRESSIONS_TYPES.FUNCTION_EXPRESSION, DECLARATION_TYPES.FUNCTION_DECLARATION, ANNOTATION_TYPES.FUNCTION_TYPE_ANNOTATION, EXPRESSIONS_TYPES.ARROW_FUNCTION_EXPRESSION].includes(node.type);

const isFunction = exports.isFunction = node => [DECLARATION_TYPES.FUNCTION_DECLARATION, EXPRESSIONS_TYPES.FUNCTION_EXPRESSION, EXPRESSIONS_TYPES.ARROW_FUNCTION_EXPRESSION, ANNOTATION_TYPES.FUNCTION_TYPE_ANNOTATION, OBJECT_PROPERTIES.OBJECT_METHOD, CLASS_PROPERTIES.CLASS_METHOD].includes(node.type);

exports.default = {
  isObject,
  isFunction,
  isScopeCreator,
  isUnscopableDeclaration,
  ...DECLARATION_TYPES,
  ...STATEMENTS_TYPES,
  ...ANNOTATION_TYPES,
  ...EXPRESSIONS_TYPES,
  ...INITIALIZATION_TYPES,
  ...OBJECT_PROPERTIES,
  ...CLASS_PROPERTIES,
  ...LITERAL_TYPES,
  ...SPECIFIERS_TYPES,
  ...SPECIAL_TYPES
};

/***/ }),

/***/ "../node_modules/@hegel/core/utils/operators.js":
/*!******************************************************!*\
  !*** ../node_modules/@hegel/core/utils/operators.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genericFunction = undefined;

var _meta = __webpack_require__(/*! ../type-graph/meta/meta */ "../node_modules/@hegel/core/type-graph/meta/meta.js");

var _type = __webpack_require__(/*! ../type-graph/types/type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _typeVar = __webpack_require__(/*! ../type-graph/types/type-var */ "../node_modules/@hegel/core/type-graph/types/type-var.js");

var _typeScope = __webpack_require__(/*! ../type-graph/type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

var _unionType = __webpack_require__(/*! ../type-graph/types/union-type */ "../node_modules/@hegel/core/type-graph/types/union-type.js");

var _objectType = __webpack_require__(/*! ../type-graph/types/object-type */ "../node_modules/@hegel/core/type-graph/types/object-type.js");

var _genericType = __webpack_require__(/*! ../type-graph/types/generic-type */ "../node_modules/@hegel/core/type-graph/types/generic-type.js");

var _bottomType = __webpack_require__(/*! ../type-graph/types/bottom-type */ "../node_modules/@hegel/core/type-graph/types/bottom-type.js");

var _functionType = __webpack_require__(/*! ../type-graph/types/function-type */ "../node_modules/@hegel/core/type-graph/types/function-type.js");

var _variableInfo = __webpack_require__(/*! ../type-graph/variable-info */ "../node_modules/@hegel/core/type-graph/variable-info.js");

const zeroMetaLocation = new _meta.Meta();

const genericFunction = exports.genericFunction = (typeScope, getGenericArguments, getTypeParameters, getReturnType) => {
  const localTypeScope = new _typeScope.TypeScope(typeScope);
  let genericArguments = getGenericArguments(localTypeScope);
  genericArguments.forEach(([key, type]) => localTypeScope.body.set(key, type));
  genericArguments = genericArguments.map(([, t]) => Object.assign(t, {
    isUserDefined: true
  }));
  const parametersTypes = getTypeParameters(localTypeScope);
  const returnType = getReturnType(localTypeScope);
  return _genericType.GenericType.term(_functionType.FunctionType.getName(parametersTypes, returnType, genericArguments), {
    parent: typeScope
  }, genericArguments, localTypeScope, _functionType.FunctionType.term(_functionType.FunctionType.getName(parametersTypes, returnType), {
    parent: localTypeScope
  }, parametersTypes, returnType));
};

const mixBaseOperators = moduleScope => {
  const typeScope = moduleScope.typeScope;
  const operators = [["+", _functionType.FunctionType.term("(number) => number", {
    parent: typeScope
  }, [_type.Type.Number], _type.Type.Number)], ["-", _functionType.FunctionType.term("(number) => number", {
    parent: typeScope
  }, [_type.Type.Number], _type.Type.Number)], ["!", _functionType.FunctionType.term("(boolean) => boolean", {
    parent: typeScope
  }, [_type.Type.Boolean], _type.Type.Boolean)], ["~", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  }, _unionType.UnionType.term("bigint | number", {
    parent: typeScope
  }, [_type.Type.BigInt, _type.Type.Number]))]], l => [l.body.get("T")], l => l.body.get("T"))], ["typeof", _functionType.FunctionType.term('(unknown) => "string" | "boolean" | "number" | "function" | "object" | "undefined" | "symbol" | "bigint"', {
    parent: typeScope
  }, [_type.Type.Unknown], _unionType.UnionType.term("'string' | 'boolean' | 'number' | 'function' | 'object' | 'undefined' | 'symbol' | 'bigint'", {
    parent: typeScope
  }, [_type.Type.term("'string'", {
    isSubtypeOf: _type.Type.String
  }), _type.Type.term("'number'", {
    isSubtypeOf: _type.Type.String
  }), _type.Type.term("'boolean'", {
    isSubtypeOf: _type.Type.String
  }), _type.Type.term("'undefined'", {
    isSubtypeOf: _type.Type.String
  }), _type.Type.term("'object'", {
    isSubtypeOf: _type.Type.String
  }), _type.Type.term("'bigint'", {
    isSubtypeOf: _type.Type.String
  }), _type.Type.term("'symbol'", {
    isSubtypeOf: _type.Type.String
  }), _type.Type.term("'function'", {
    isSubtypeOf: _type.Type.String
  })]))], ["void", _functionType.FunctionType.term("(unknown) => undefined", {
    parent: typeScope
  }, [_type.Type.Unknown], _type.Type.String)], ["delete", _functionType.FunctionType.term("(unknown) => undefined", {
    parent: typeScope
  }, [_type.Type.Unknown], _type.Type.Undefined)], typeScope.body.has("Promise") ? ["await", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  })]], l => [_unionType.UnionType.term(null, {}, [_type.Type.find("Promise").applyGeneric([l.body.get("T")]), l.body.get("T")])], l => l.body.get("T"))] : ["await", _functionType.FunctionType.term("(unknown) => unknown", {
    parent: typeScope
  }, [_type.Type.Unknown], _type.Type.Unknown)], ["==", _functionType.FunctionType.term("(unknown, unknown) => boolean", {
    parent: typeScope
  }, [_type.Type.Unknown, _type.Type.Unknown], _type.Type.Boolean)], ["===", _functionType.FunctionType.term("(unknown, unknown) => boolean", {
    parent: typeScope
  }, [_type.Type.Unknown, _type.Type.Unknown], _type.Type.Boolean)], ["!==", _functionType.FunctionType.term("(unknown, unknown) => boolean", {
    parent: typeScope
  }, [_type.Type.Unknown, _type.Type.Unknown], _type.Type.Boolean)], ["!=", _functionType.FunctionType.term("(unknown, unknown) => boolean", {
    parent: typeScope
  }, [_type.Type.Unknown, _type.Type.Unknown], _type.Type.Boolean)], [">=", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  }, _unionType.UnionType.term("bigint | number", {}, [_type.Type.BigInt, _type.Type.Number]))]], l => [l.body.get("T"), l.body.get("T")], _ => _type.Type.Boolean)], ["<=", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  }, _unionType.UnionType.term("bigint | number", {}, [_type.Type.BigInt, _type.Type.Number]))]], l => [l.body.get("T"), l.body.get("T")], _ => _type.Type.Boolean)], [">", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  }, _unionType.UnionType.term("bigint | number", {}, [_type.Type.BigInt, _type.Type.Number]))]], l => [l.body.get("T"), l.body.get("T")], _ => _type.Type.Boolean)], ["<", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  }, _unionType.UnionType.term("bigint | number", {}, [_type.Type.BigInt, _type.Type.Number]))]], l => [l.body.get("T"), l.body.get("T")], _ => _type.Type.Boolean)], ["b+", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  }, _unionType.UnionType.term("bigint | number | string", {}, [_type.Type.BigInt, _type.Type.Number, _type.Type.String]))]], l => [l.body.get("T"), l.body.get("T")], l => l.body.get("T"))], ["b-", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  }, _unionType.UnionType.term("bigint | number", {}, [_type.Type.BigInt, _type.Type.Number]))]], l => [l.body.get("T"), l.body.get("T")], l => l.body.get("T"))], ["/", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  }, _unionType.UnionType.term("bigint | number", {}, [_type.Type.BigInt, _type.Type.Number]))]], l => [l.body.get("T"), l.body.get("T")], l => l.body.get("T"))], ["%", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  }, _unionType.UnionType.term("bigint | number", {}, [_type.Type.BigInt, _type.Type.Number]))]], l => [l.body.get("T"), l.body.get("T")], l => l.body.get("T"))], ["|", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  }, _unionType.UnionType.term("bigint | number", {}, [_type.Type.BigInt, _type.Type.Number]))]], l => [l.body.get("T"), l.body.get("T")], l => l.body.get("T"))], ["&", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  }, _unionType.UnionType.term("bigint | number", {}, [_type.Type.BigInt, _type.Type.Number]))]], l => [l.body.get("T"), l.body.get("T")], l => l.body.get("T"))], ["*", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  }, _unionType.UnionType.term("bigint | number", {}, [_type.Type.BigInt, _type.Type.Number]))]], l => [l.body.get("T"), l.body.get("T")], l => l.body.get("T"))], ["^", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  }, _unionType.UnionType.term("bigint | number", {}, [_type.Type.BigInt, _type.Type.Number]))]], l => [l.body.get("T"), l.body.get("T")], l => l.body.get("T"))], ["**", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  }, _unionType.UnionType.term("bigint | number", {}, [_type.Type.BigInt, _type.Type.Number]))]], l => [l.body.get("T"), l.body.get("T")], l => l.body.get("T"))], ["<<", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  }, _unionType.UnionType.term("bigint | number", {}, [_type.Type.BigInt, _type.Type.Number]))]], l => [l.body.get("T"), l.body.get("T")], l => l.body.get("T"))], [">>", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  }, _unionType.UnionType.term("bigint | number", {}, [_type.Type.BigInt, _type.Type.Number]))]], l => [l.body.get("T"), l.body.get("T")], l => l.body.get("T"))], [">>>", _functionType.FunctionType.term("(number, number) => number", {
    parent: typeScope
  }, [_type.Type.Number, _type.Type.Number], _type.Type.Number)], ["in", _functionType.FunctionType.term("(string, Object) => boolean", {
    parent: typeScope
  }, [_type.Type.String, _objectType.ObjectType.Object], _type.Type.Boolean)], ["instanceof", _functionType.FunctionType.term("(unknown, unknown) => boolean", {
    parent: typeScope
  }, [_type.Type.Unknown, _type.Type.Unknown], _type.Type.Boolean)], ["=", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  })]], l => [l.body.get("T"), l.body.get("T")], l => l.body.get("T"))], ["+=", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  }, _unionType.UnionType.term("bigint | number | string", {}, [_type.Type.BigInt, _type.Type.Number, _type.Type.String]))]], l => [l.body.get("T"), l.body.get("T")], l => l.body.get("T"))], ["-=", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  }, _unionType.UnionType.term("bigint | number", {}, [_type.Type.BigInt, _type.Type.Number]))]], l => [l.body.get("T"), l.body.get("T")], l => l.body.get("T"))], ["*=", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  }, _unionType.UnionType.term("bigint | number", {}, [_type.Type.BigInt, _type.Type.Number]))]], l => [l.body.get("T"), l.body.get("T")], l => l.body.get("T"))], ["/=", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  }, _unionType.UnionType.term("bigint | number", {}, [_type.Type.BigInt, _type.Type.Number]))]], l => [l.body.get("T"), l.body.get("T")], l => l.body.get("T"))], ["%=", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  }, _unionType.UnionType.term("bigint | number", {}, [_type.Type.BigInt, _type.Type.Number]))]], l => [l.body.get("T"), l.body.get("T")], l => l.body.get("T"))], ["**=", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  }, _unionType.UnionType.term("bigint | number", {}, [_type.Type.BigInt, _type.Type.Number]))]], l => [l.body.get("T"), l.body.get("T")], l => l.body.get("T"))], [">>=", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  }, _unionType.UnionType.term("bigint | number", {}, [_type.Type.BigInt, _type.Type.Number]))]], l => [l.body.get("T"), l.body.get("T")], l => l.body.get("T"))], [">>>=", _functionType.FunctionType.term("(number, number) => number", {
    parent: typeScope
  }, [_type.Type.Number, _type.Type.Number], _type.Type.Number)], ["<<=", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  }, _unionType.UnionType.term("bigint | number", {}, [_type.Type.BigInt, _type.Type.Number]))]], l => [l.body.get("T"), l.body.get("T")], l => l.body.get("T"))], ["|=", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  }, _unionType.UnionType.term("bigint | number", {}, [_type.Type.BigInt, _type.Type.Number]))]], l => [l.body.get("T"), l.body.get("T")], l => l.body.get("T"))], ["&=", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  }, _unionType.UnionType.term("bigint | number", {}, [_type.Type.BigInt, _type.Type.Number]))]], l => [l.body.get("T"), l.body.get("T")], l => l.body.get("T"))], // Updates
  ["++", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  }, _unionType.UnionType.term("bigint | number", {}, [_type.Type.BigInt, _type.Type.Number]))]], l => [l.body.get("T")], l => l.body.get("T"))], ["--", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  }, _unionType.UnionType.term("bigint | number", {}, [_type.Type.BigInt, _type.Type.Number]))]], l => [l.body.get("T")], l => l.body.get("T"))], [// Logical
  "&&", genericFunction(typeScope, parent => [["A", _typeVar.TypeVar.term("A", {
    parent
  })], ["B", _typeVar.TypeVar.term("B", {
    parent
  })]], l => [l.body.get("A"), l.body.get("B")], l => _unionType.UnionType.term("A | B", {
    parent: l
  }, [l.body.get("A"), l.body.get("B")]))], ["||", genericFunction(typeScope, parent => [["A", _typeVar.TypeVar.term("A", {
    parent
  })], ["B", _typeVar.TypeVar.term("B", {
    parent
  })]], l => [l.body.get("A"), l.body.get("B")], l => _unionType.UnionType.term("A | B", {
    parent: l
  }, [l.body.get("A"), l.body.get("B")]))], ["?:", genericFunction(typeScope, parent => [["A", _typeVar.TypeVar.term("A", {
    parent
  })], ["B", _typeVar.TypeVar.term("B", {
    parent
  })]], l => [_type.Type.Boolean, l.body.get("A"), l.body.get("B")], l => _unionType.UnionType.term("A | B", {
    parent: l
  }, [l.body.get("A"), l.body.get("B")]))], ["if", _functionType.FunctionType.term("(boolean) => void", {
    parent: typeScope
  }, [_type.Type.Boolean], _type.Type.Undefined)], ["while", _functionType.FunctionType.term("(boolean) => void", {
    parent: typeScope
  }, [_type.Type.Boolean], _type.Type.Undefined)], ["do-while", _functionType.FunctionType.term("(boolean) => void", {
    parent: typeScope
  }, [_type.Type.Boolean], _type.Type.Undefined)], ["for", _functionType.FunctionType.term("(?unknown, ?boolean, ?unknown) => void", {
    parent: typeScope
  }, [_unionType.UnionType.term("undefined | unknown", {}, [_type.Type.Undefined, _type.Type.Unknown]), _unionType.UnionType.term("boolean | undefined", {}, [_type.Type.Boolean, _type.Type.Undefined]), _unionType.UnionType.term("undefined | unknown", {}, [_type.Type.Undefined, _type.Type.Unknown])], _type.Type.Undefined)], ["return", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  })]], l => [l.body.get("T")], l => l.body.get("T"))], ["new", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  })]], l => [l.body.get("T")], l => l.body.get("T"))], ["throw", genericFunction(typeScope, parent => [["T", _typeVar.TypeVar.term("T", {
    parent
  })]], l => [l.body.get("T")], l => l.body.get("T"))]].forEach(([name, type]) => moduleScope.body.set(name, new _variableInfo.VariableInfo(type, moduleScope, zeroMetaLocation)));
};

exports.default = mixBaseOperators;

/***/ }),

/***/ "../node_modules/@hegel/core/utils/scope-utils.js":
/*!********************************************************!*\
  !*** ../node_modules/@hegel/core/utils/scope-utils.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScopeType = getScopeType;
exports.findNearestScopeByType = findNearestScopeByType;
exports.findNearestTypeScope = findNearestTypeScope;
exports.getParentForNode = getParentForNode;
exports.getScopeFromNode = getScopeFromNode;
exports.addScopeToTypeGraph = addScopeToTypeGraph;

var _nodes = __webpack_require__(/*! ../utils/nodes */ "../node_modules/@hegel/core/utils/nodes.js");

var _nodes2 = _interopRequireDefault(_nodes);

var _typeScope = __webpack_require__(/*! ../type-graph/type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

var _moduleScope = __webpack_require__(/*! ../type-graph/module-scope */ "../node_modules/@hegel/core/type-graph/module-scope.js");

var _variableScope = __webpack_require__(/*! ../type-graph/variable-scope */ "../node_modules/@hegel/core/type-graph/variable-scope.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getScopeType(node) {
  switch (node.type) {
    case _nodes2.default.BLOCK_STATEMENT:
      return _variableScope.VariableScope.BLOCK_TYPE;

    case _nodes2.default.FUNCTION_DECLARATION:
    case _nodes2.default.FUNCTION_EXPRESSION:
    case _nodes2.default.ARROW_FUNCTION_EXPRESSION:
    case _nodes2.default.OBJECT_METHOD:
    case _nodes2.default.CLASS_METHOD:
    case _nodes2.default.FUNCTION_TYPE_ANNOTATION:
      return _variableScope.VariableScope.FUNCTION_TYPE;

    case _nodes2.default.OBJECT_EXPRESSION:
      return _variableScope.VariableScope.OBJECT_TYPE;

    case _nodes2.default.CLASS_DECLARATION:
    case _nodes2.default.CLASS_EXPRESSION:
      return _variableScope.VariableScope.CLASS_TYPE;
  }

  throw new Error("Never for getScopeType");
}

function findNearestScopeByType(type, parentContext) {
  type = Array.isArray(type) ? type : [type];
  let parent = parentContext;

  while (parent instanceof _variableScope.VariableScope) {
    if (type.includes(parent.type)) {
      return parent;
    }

    parent = parent.parent;
  }

  return parent;
}

function findNearestTypeScope(currentScope, typeGraph) {
  let scope = findNearestScopeByType([_variableScope.VariableScope.FUNCTION_TYPE, _variableScope.VariableScope.CLASS_TYPE], currentScope);

  do {
    // $FlowIssue
    if (scope.declaration && "localTypeScope" in scope.declaration.type) {
      // $FlowIssue
      return scope.declaration.type.localTypeScope;
    }

    const parent = scope.parent;

    if (parent === null) {
      break;
    }

    scope = findNearestScopeByType([_variableScope.VariableScope.FUNCTION_TYPE, _variableScope.VariableScope.CLASS_TYPE], parent);
  } while (scope.parent instanceof _variableScope.VariableScope);

  return typeGraph.typeScope;
}

function getParentForNode(currentNode, parentNode, typeGraph) {
  if (!parentNode || parentNode.type === _nodes2.default.PROGRAM) {
    return typeGraph;
  }

  const name = _variableScope.VariableScope.getName(parentNode);

  const scope = typeGraph.scopes.get(name);

  if (scope === undefined) {
    return typeGraph;
  }

  if (_nodes2.default.isUnscopableDeclaration(currentNode)) {
    return findNearestScopeByType(_variableScope.VariableScope.FUNCTION_TYPE, scope || typeGraph);
  }

  return scope;
}

function getScopeFromNode(currentNode, parentNode, typeGraph, declaration) {
  return new _variableScope.VariableScope(getScopeType(currentNode), parentNode instanceof _variableScope.VariableScope || parentNode instanceof _moduleScope.ModuleScope ? parentNode : getParentForNode(currentNode, parentNode, typeGraph), declaration, currentNode.skipCalls !== undefined);
}

function addScopeToTypeGraph(currentNode, parentNode, typeGraph) {
  const scopeName = _variableScope.VariableScope.getName(currentNode);

  if (typeGraph.scopes.has(scopeName)) {
    return;
  }

  typeGraph.scopes.set(scopeName, getScopeFromNode(currentNode, parentNode, typeGraph));
}

/***/ }),

/***/ "../node_modules/@hegel/core/utils/throwable.js":
/*!******************************************************!*\
  !*** ../node_modules/@hegel/core/utils/throwable.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToThrowable = addToThrowable;

var _type = __webpack_require__(/*! ../type-graph/types/type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _moduleScope = __webpack_require__(/*! ../type-graph/module-scope */ "../node_modules/@hegel/core/type-graph/module-scope.js");

var _variableInfo = __webpack_require__(/*! ../type-graph/variable-info */ "../node_modules/@hegel/core/type-graph/variable-info.js");

var _variableScope = __webpack_require__(/*! ../type-graph/variable-scope */ "../node_modules/@hegel/core/type-graph/variable-scope.js");

function findThrowableBlock(parentScope) {
  if (!parentScope || !(parentScope instanceof _variableScope.VariableScope)) {
    throw new Error("Never");
  }

  let parent = parentScope;

  do {
    if (parent.throwable) {
      return parent;
    }

    parent = parent.parent;
  } while (parent !== null);

  return null;
}

function addToThrowable(throwType, currentScope) {
  const throwableScope = findThrowableBlock(currentScope);

  if (!throwableScope || !(currentScope instanceof _variableScope.VariableScope) || !throwableScope.throwable) {
    return;
  }

  throwableScope.throwable.push(throwType);
}

/***/ }),

/***/ "../node_modules/@hegel/core/utils/traverse.js":
/*!*****************************************************!*\
  !*** ../node_modules/@hegel/core/utils/traverse.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compose = undefined;

var _nodes = __webpack_require__(/*! ./nodes */ "../node_modules/@hegel/core/utils/nodes.js");

var _nodes2 = _interopRequireDefault(_nodes);

var _errors = __webpack_require__(/*! ./errors */ "../node_modules/@hegel/core/utils/errors.js");

var _errors2 = _interopRequireDefault(_errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const compose = exports.compose = (...fns) => (...args) => {
  const additionalArgs = args.slice(1);
  return fns.reduce((res, fn) => fn(res, ...additionalArgs), args[0]);
};

function mixBodyToArrowFunctionExpression(currentNode) {
  if (currentNode.type !== _nodes2.default.ARROW_FUNCTION_EXPRESSION || currentNode.body.type === _nodes2.default.BLOCK_STATEMENT) {
    return currentNode;
  }

  currentNode.body = {
    type: _nodes2.default.BLOCK_STATEMENT,
    body: [{
      type: _nodes2.default.RETURN_STATEMENT,
      argument: currentNode.body,
      loc: currentNode.body.loc
    }],
    loc: currentNode.body.loc
  };
  return currentNode;
}

function mixBlockToLogicalOperator(currentNode) {
  if (currentNode.type !== _nodes2.default.LOGICAL_EXPRESSION || currentNode.operator !== "&&" && currentNode.operator !== "||") {
    return currentNode;
  }

  currentNode.left = {
    type: _nodes2.default.BLOCK_STATEMENT,
    body: currentNode.left,
    loc: {
      start: currentNode.loc.start,
      end: currentNode.loc.start
    }
  };
  currentNode.right = {
    type: _nodes2.default.BLOCK_STATEMENT,
    body: currentNode.right,
    loc: {
      start: currentNode.loc.end,
      end: currentNode.loc.end
    }
  };
  return currentNode;
}

function mixBlockToConditionalExpression(currentNode) {
  if (currentNode.type !== _nodes2.default.CONDITIONAL_EXPRESSION) {
    return currentNode;
  }

  currentNode.consequent = {
    type: _nodes2.default.BLOCK_STATEMENT,
    body: currentNode.consequent,
    loc: {
      start: currentNode.loc.start,
      end: currentNode.loc.start
    }
  };
  currentNode.alternate = {
    type: _nodes2.default.BLOCK_STATEMENT,
    body: currentNode.alternate,
    loc: {
      start: currentNode.loc.end,
      end: currentNode.loc.end
    }
  };
  return currentNode;
}

function mixBlockForStatements(currentNode) {
  if (currentNode.type !== _nodes2.default.IF_STATEMENT && currentNode.type !== _nodes2.default.WHILE_STATEMENT && currentNode.type !== _nodes2.default.FOR_STATEMENT && currentNode.type !== _nodes2.default.FOR_IN_STATEMENT && currentNode.type !== _nodes2.default.FOR_OF_STATEMENT) {
    return currentNode;
  }

  if (currentNode.type === _nodes2.default.IF_STATEMENT && currentNode.alternate && currentNode.alternate.type !== _nodes2.default.BLOCK_STATEMENT) {
    currentNode.alternate = {
      type: _nodes2.default.BLOCK_STATEMENT,
      body: [currentNode.alternate],
      loc: currentNode.alternate.loc
    };
  }

  const propertyName = currentNode.type === _nodes2.default.IF_STATEMENT ? "consequent" : "body";

  if (currentNode[propertyName].type === _nodes2.default.BLOCK_STATEMENT) {
    return currentNode;
  }

  currentNode[propertyName] = {
    type: _nodes2.default.BLOCK_STATEMENT,
    body: [currentNode[propertyName]],
    loc: currentNode[propertyName].loc
  };
  return currentNode;
}

function getInitFor(node) {
  switch (node.type) {
    case _nodes2.default.FOR_IN_STATEMENT:
      return {
        type: _nodes2.default.PURE_KEY,
        of: node.right
      };

    case _nodes2.default.FOR_OF_STATEMENT:
      return {
        type: _nodes2.default.PURE_VALUE,
        of: node.right
      };

    default:
      return;
  }
}

function mixDeclarationsInideForBlock(currentNode) {
  if (currentNode.type !== _nodes2.default.FOR_IN_STATEMENT && currentNode.type !== _nodes2.default.FOR_OF_STATEMENT && (currentNode.type !== _nodes2.default.FOR_STATEMENT || currentNode.init === null)) {
    return currentNode;
  }

  if (currentNode.body.type === _nodes2.default.EMPTY_STATEMENT) {
    currentNode.body = {
      type: _nodes2.default.BLOCK_STATEMENT,
      body: [],
      loc: currentNode.init.loc
    };
  }

  currentNode.body.body.unshift(currentNode.init || { ...currentNode.left,
    init: getInitFor(currentNode)
  });
  return currentNode;
}

function mixExportInfo(currentNode) {
  if (currentNode.type !== _nodes2.default.EXPORT_NAMED_DECLARATION && currentNode.type !== _nodes2.default.EXPORT_DEFAULT_DECLARATION) {
    return currentNode;
  }

  return currentNode.declaration.type !== _nodes2.default.VARIABLE_DECLARATION ? { ...currentNode.declaration,
    exportAs: currentNode.type === _nodes2.default.EXPORT_DEFAULT_DECLARATION ? "default" : currentNode.declaration.id.name
  } : { ...currentNode.declaration,
    declarations: currentNode.declaration.declarations.map(declaration => ({ ...declaration,
      exportAs: declaration.id.name
    }))
  };
}

function mixTryCatchInfo(currentNode) {
  if (currentNode.type !== _nodes2.default.TRY_STATEMENT) {
    return currentNode;
  }

  return { ...currentNode,
    block: { ...currentNode.block,
      catchBlock: currentNode.handler
    }
  };
}

function mixElseIfReturnOrThrowExisted(currentNode, parentNode) {
  if (parentNode === undefined || currentNode.type !== _nodes2.default.IF_STATEMENT || currentNode.consequent.body.findIndex(node => node.type === _nodes2.default.RETURN_STATEMENT || node.type === _nodes2.default.THROW_STATEMENT) === -1) {
    return currentNode;
  }

  const body = parentNode.body.body || parentNode.body;

  if (!Array.isArray(body)) {
    return currentNode;
  }

  const indexOfSlice = body.indexOf(currentNode);

  if (indexOfSlice === -1) {
    return currentNode;
  }

  const alternate = currentNode.alternate || {
    type: _nodes2.default.BLOCK_STATEMENT,
    skipCalls: true,
    body: [],
    loc: {
      start: currentNode.loc.end,
      end: currentNode.loc.end
    }
  };
  alternate.body = alternate.body.concat(body.splice(indexOfSlice + 1));
  return { ...currentNode,
    alternate
  };
}

const getBody = currentNode => currentNode.body || currentNode.declarations || currentNode.properties || [currentNode.block, currentNode.handler, currentNode.test, currentNode.finalizer, currentNode.alternate, currentNode.value, currentNode.init && currentNode.init.callee, currentNode.init, currentNode.object, currentNode.property, currentNode.left, currentNode.right, currentNode.argument, currentNode.expression && currentNode.expression.callee, currentNode.expression, currentNode.discriminant, currentNode.callee, ...(currentNode.elements || []), ...(currentNode.cases || []), ...(currentNode.expressions || []), ...(currentNode.arguments || []).filter(a => !_nodes2.default.isFunction(a)), ...(Array.isArray(currentNode.consequent) ? currentNode.consequent : [currentNode.consequent])].filter(Boolean);

const getNextParent = (currentNode, parentNode) => parentNode && (_nodes2.default.isFunction(parentNode) && currentNode === parentNode.body || _nodes2.default.isScopeCreator(parentNode) && !_nodes2.default.isScopeCreator(currentNode)) ? parentNode : currentNode;

const getCurrentNode = compose(mixDeclarationsInideForBlock, mixBodyToArrowFunctionExpression, mixTryCatchInfo, mixBlockForStatements, mixExportInfo, mixBlockToLogicalOperator, mixElseIfReturnOrThrowExisted, mixBlockToConditionalExpression);

function traverseTree(node, pre, middle, post, parentNode = null, meta = {}) {
  const currentNode = getCurrentNode(node, parentNode, meta);
  const shouldContinueTraversing = pre(currentNode, parentNode, pre, middle, post, meta);

  if (!shouldContinueTraversing) {
    return;
  }

  const body = getBody(currentNode);

  if (!body) {
    return;
  }

  const nextParent = getNextParent(currentNode, parentNode);

  if (Array.isArray(body)) {
    let i = 0;

    try {
      for (i = 0; i < body.length; i++) {
        middle(body[i], nextParent, pre, middle, post, meta);
      }

      for (i = 0; i < body.length; i++) {
        traverseTree(body[i], pre, middle, post, nextParent, { ...meta,
          kind: currentNode.kind
        });
      }
    } catch (e) {
      if (!(e instanceof _errors.UnreachableError)) {
        throw e;
      }

      if (i < body.length - 1) {
        throw new _errors2.default("Unreachable code after this line", e.loc);
      }
    }
  } else {
    traverseTree(body, pre, middle, post, nextParent, meta);
  }

  post(currentNode, parentNode, pre, middle, post, meta);
}

exports.default = traverseTree;

/***/ }),

/***/ "../node_modules/@hegel/core/utils/type-utils.js":
/*!*******************************************************!*\
  !*** ../node_modules/@hegel/core/utils/type-utils.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FALSY = undefined;
exports.addTypeNodeToTypeGraph = addTypeNodeToTypeGraph;
exports.isReachableType = isReachableType;
exports.addTypeVar = addTypeVar;
exports.getTypeFromTypeAnnotation = getTypeFromTypeAnnotation;
exports.mergeObjectsTypes = mergeObjectsTypes;
exports.createObjectWith = createObjectWith;
exports.get = get;
exports.createSelf = createSelf;
exports.getWrapperType = getWrapperType;
exports.getFalsy = getFalsy;
exports.pickFalsy = pickFalsy;
exports.pickTruthy = pickTruthy;
exports.isFalsy = isFalsy;

var _nodes = __webpack_require__(/*! ./nodes */ "../node_modules/@hegel/core/utils/nodes.js");

var _nodes2 = _interopRequireDefault(_nodes);

var _errors = __webpack_require__(/*! ./errors */ "../node_modules/@hegel/core/utils/errors.js");

var _errors2 = _interopRequireDefault(_errors);

var _meta = __webpack_require__(/*! ../type-graph/meta/meta */ "../node_modules/@hegel/core/type-graph/meta/meta.js");

var _type = __webpack_require__(/*! ../type-graph/types/type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _common = __webpack_require__(/*! ./common */ "../node_modules/@hegel/core/utils/common.js");

var _typeVar = __webpack_require__(/*! ../type-graph/types/type-var */ "../node_modules/@hegel/core/type-graph/types/type-var.js");

var _typeScope = __webpack_require__(/*! ../type-graph/type-scope */ "../node_modules/@hegel/core/type-graph/type-scope.js");

var _tupleType = __webpack_require__(/*! ../type-graph/types/tuple-type */ "../node_modules/@hegel/core/type-graph/types/tuple-type.js");

var _unionType = __webpack_require__(/*! ../type-graph/types/union-type */ "../node_modules/@hegel/core/type-graph/types/union-type.js");

var _objectType = __webpack_require__(/*! ../type-graph/types/object-type */ "../node_modules/@hegel/core/type-graph/types/object-type.js");

var _bottomType = __webpack_require__(/*! ../type-graph/types/bottom-type */ "../node_modules/@hegel/core/type-graph/types/bottom-type.js");

var _genericType = __webpack_require__(/*! ../type-graph/types/generic-type */ "../node_modules/@hegel/core/type-graph/types/generic-type.js");

var _variableInfo = __webpack_require__(/*! ../type-graph/variable-info */ "../node_modules/@hegel/core/type-graph/variable-info.js");

var _variableScope = __webpack_require__(/*! ../type-graph/variable-scope */ "../node_modules/@hegel/core/type-graph/variable-scope.js");

var _intersectionType = __webpack_require__(/*! ../type-graph/types/intersection-type */ "../node_modules/@hegel/core/type-graph/types/intersection-type.js");

var _collectionType = __webpack_require__(/*! ../type-graph/types/collection-type */ "../node_modules/@hegel/core/type-graph/types/collection-type.js");

var _functionType = __webpack_require__(/*! ../type-graph/types/function-type */ "../node_modules/@hegel/core/type-graph/types/function-type.js");

var _constants = __webpack_require__(/*! ../type-graph/constants */ "../node_modules/@hegel/core/type-graph/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addTypeNodeToTypeGraph(currentNode, typeGraph) {
  const name = (0, _common.getDeclarationName)(currentNode);
  typeGraph.typeScope.body.set(name, currentNode);
}

function isReachableType(type, typeScope) {
  let reachableType = null;

  try {
    reachableType = _type.Type.find(type.name, {
      parent: typeScope
    });
  } catch {}

  return reachableType !== null && type.equalsTo(reachableType);
}

function addTypeVar(name, localTypeScope, constraint, isUserDefined = false) {
  return _typeVar.TypeVar.new(name, {
    parent: localTypeScope
  }, constraint, isUserDefined);
}

function nullable(annotation) {
  return annotation.optional ? {
    typeAnnotation: { ...annotation.typeAnnotation,
      type: _nodes2.default.NULLABLE_TYPE_ANNOTATION
    }
  } : annotation.typeAnnotation;
}

function getTypeFromTypeAnnotation(typeNode, typeScope, currentScope, rewritable = true, self = null, parentNode, typeGraph, precompute, middlecompute, postcompute, customName) {
  if (!typeNode || !typeNode.typeAnnotation) {
    return _type.Type.Unknown;
  } // TODO: ADd $Readonly instead ignoring


  if (typeNode.typeAnnotation.type === _nodes2.default.TS_PARENTHESIZED_TYPE || typeNode.typeAnnotation.type === _nodes2.default.TS_TYPE_OPERATOR) {
    typeNode.typeAnnotation = typeNode.typeAnnotation.typeAnnotation;
  }

  switch (typeNode.typeAnnotation.type) {
    case _nodes2.default.THIS_TYPE_ANNOTATION:
    case _nodes2.default.TS_THIS_TYPE_ANNOTATION:
      if (self === null || self === undefined) {
        throw new _errors2.default("Can not use `this` type without context", typeNode.loc);
      }

      return self;

    case _nodes2.default.TS_LITERAL_TYPE:
      return getTypeFromTypeAnnotation({
        typeAnnotation: typeNode.typeAnnotation.literal
      }, typeScope, currentScope, rewritable, self, parentNode, typeGraph, precompute, middlecompute, postcompute);

    case _nodes2.default.ANY_TYPE_ANNOTATION:
      throw new _errors2.default('There is no "any" type in Hegel.', typeNode.typeAnnotation.loc);

    case _nodes2.default.TS_SYMBOL_TYPE_ANNOTATION:
      return _type.Type.Symbol;

    case _nodes2.default.TS_BIGINT_TYPE_ANNOTATION:
      return _type.Type.BigInt;

    case _nodes2.default.TS_UNDEFINED_TYPE_ANNOTATION:
      return _type.Type.Undefined;

    case _nodes2.default.TS_OBJECT_KEYWORD:
      return _objectType.ObjectType.Object;

    case _nodes2.default.VOID_TYPE_ANNOTATION:
    case _nodes2.default.TS_VOID_TYPE_ANNOTATION:
      return _type.Type.Undefined;

    case _nodes2.default.BOOLEAN_TYPE_ANNOTATION:
    case _nodes2.default.TS_BOOLEAN_TYPE_ANNOTATION:
      return _type.Type.Boolean;

    case _nodes2.default.TS_ANY_TYPE_ANNOTATION:
    case _nodes2.default.MIXED_TYPE_ANNOTATION:
    case _nodes2.default.TS_UNKNOWN_TYPE_ANNOTATION:
    case _nodes2.default.TS_ANY_TYPE_ANNOTATION:
      return _type.Type.Unknown;

    case _nodes2.default.EMPTY_TYPE_ANNOTATION:
    case _nodes2.default.TS_NEVER_TYPE_ANNOTATION:
      return _type.Type.Never;

    case _nodes2.default.NUMBER_TYPE_ANNOTATION:
    case _nodes2.default.TS_NUMBER_TYPE_ANNOTATION:
      return _type.Type.Number;

    case _nodes2.default.STRING_TYPE_ANNOTATION:
    case _nodes2.default.TS_STRING_TYPE_ANNOTATION:
      return _type.Type.String;

    case _nodes2.default.NULL_LITERAL_TYPE_ANNOTATION:
    case _nodes2.default.TS_NULL_LITERAL_TYPE_ANNOTATION:
      return _type.Type.Null;

    case _nodes2.default.NUBMER_LITERAL_TYPE_ANNOTATION:
    case _nodes2.default.NUMERIC_LITERAL:
      return _type.Type.term(typeNode.typeAnnotation.value, {
        isSubtypeOf: _type.Type.Number
      });

    case _nodes2.default.BOOLEAN_LITERAL_TYPE_ANNOTATION:
    case _nodes2.default.BOOLEAN_LITERAL:
      return _type.Type.term(typeNode.typeAnnotation.value, {
        isSubtypeOf: _type.Type.Boolean
      });

    case _nodes2.default.STRING_LITERAL_TYPE_ANNOTATION:
    case _nodes2.default.STRING_LITERAL:
      return _type.Type.term(`'${typeNode.typeAnnotation.value}'`, {
        isSubtypeOf: _type.Type.String
      });

    case _nodes2.default.TS_SYMBOL_TYPE_ANNOTATION:
      return _type.Type.Symbol;

    case _nodes2.default.TS_INTERSECTION_TYPE:
      const firstObject = getTypeFromTypeAnnotation({
        typeAnnotation: typeNode.typeAnnotation.types[0]
      }, typeScope, currentScope, rewritable, self, parentNode, typeGraph, precompute, middlecompute, postcompute);
      const secondObject = getTypeFromTypeAnnotation({
        typeAnnotation: typeNode.typeAnnotation.types[1]
      }, typeScope, currentScope, rewritable, self, parentNode, typeGraph, precompute, middlecompute, postcompute);
      return _type.Type.find("$Intersection").applyGeneric([firstObject, secondObject], typeNode.loc);

    case _nodes2.default.NULLABLE_TYPE_ANNOTATION:
      const resultType = getTypeFromTypeAnnotation(typeNode.typeAnnotation, typeScope, currentScope, rewritable, self, parentNode, typeGraph, precompute, middlecompute, postcompute);
      return _unionType.UnionType.term(null, {}, [resultType, _type.Type.Undefined]);

    case _nodes2.default.TS_OBJECT_PROPERTY:
      return getTypeFromTypeAnnotation( // Ohhh, TS is beautiful ❤️
      nullable(typeNode.typeAnnotation), typeScope, currentScope, false, self, parentNode, typeGraph, precompute, middlecompute, postcompute);

    case _nodes2.default.UNION_TYPE_ANNOTATION:
    case _nodes2.default.TS_UNION_TYPE_ANNOTATION:
      const unionVariants = typeNode.typeAnnotation.types.map(typeAnnotation => getTypeFromTypeAnnotation({
        typeAnnotation
      }, typeScope, currentScope, false, self, parentNode, typeGraph, precompute, middlecompute, postcompute));
      return _unionType.UnionType.term(null, {}, unionVariants);

    case _nodes2.default.TUPLE_TYPE_ANNOTATION:
    case _nodes2.default.TS_TUPLE_TYPE_ANNOTATION:
      const tupleVariants = (typeNode.typeAnnotation.types || typeNode.typeAnnotation.elementTypes).map(typeAnnotation => getTypeFromTypeAnnotation({
        typeAnnotation
      }, typeScope, currentScope, false, self, parentNode, typeGraph, precompute, middlecompute, postcompute));
      return _tupleType.TupleType.term(_tupleType.TupleType.getName(tupleVariants), {}, tupleVariants);

    case _nodes2.default.TYPE_PARAMETER:
    case _nodes2.default.TS_TYPE_PARAMETER:
      return addTypeVar(typeNode.typeAnnotation.name, typeScope, typeNode.typeAnnotation.bound && getTypeFromTypeAnnotation(typeNode.typeAnnotation.bound, typeScope, currentScope, false, self, parentNode, typeGraph, precompute, middlecompute, postcompute), true);

    case _nodes2.default.TS_INDEX_PROPERTY:
      const key = getTypeFromTypeAnnotation(typeNode.typeAnnotation.parameters[0].typeAnnotation, typeScope, currentScope, rewritable, self, parentNode, typeGraph, precompute, middlecompute, postcompute);
      const value = getTypeFromTypeAnnotation( // Ohhh, TS is beautiful ❤️
      typeNode.typeAnnotation.typeAnnotation, typeScope, currentScope, rewritable, self, parentNode, typeGraph, precompute, middlecompute, postcompute);
      return new _collectionType.CollectionType("", {
        parent: key.parent.priority > value.parent.priority ? key.parent : value.parent
      }, key, value);

    case _nodes2.default.OBJECT_TYPE_ANNOTATION:
    case _nodes2.default.TS_OBJECT_TYPE_ANNOTATION:
    case _nodes2.default.TS_INTERFACE_DECLARATION:
      const {
        typeAnnotation: annotation
      } = typeNode;
      const objectBody = annotation.body || annotation;
      const properties = objectBody.properties || objectBody.body || objectBody.members;
      const superTypes = (annotation.extends || []).map(node => getTypeFromTypeAnnotation({
        typeAnnotation: node
      }, typeScope, currentScope, rewritable, self, parentNode, typeGraph, precompute, middlecompute, postcompute));
      const params = properties.flatMap(property => {
        if (property.type === _nodes2.default.OBJECT_TYPE_SPREAD_PROPERTY) {
          const spreadType = getTypeFromTypeAnnotation({
            typeAnnotation: property.argument
          }, typeScope, currentScope, rewritable, self, parentNode, typeGraph, precompute, middlecompute, postcompute);

          if (!(spreadType instanceof _objectType.ObjectType)) {
            throw new _errors2.default("Cannot spread non-object type", property.loc);
          }

          return [...spreadType.properties];
        }

        return [[getPropertyName(property), getTypeFromTypeAnnotation({
          typeAnnotation: property.value || property
        }, typeScope, currentScope, rewritable, self, parentNode, typeGraph, precompute, middlecompute, postcompute)]];
      });

      if (customName === undefined) {
        customName = annotation.id != undefined ? annotation.id.name : _objectType.ObjectType.getName(params);
      }

      const resultObj = _objectType.ObjectType.term(customName, {}, params.map(([name, type]) => [name, type instanceof _variableInfo.VariableInfo ? type : new _variableInfo.VariableInfo(type, currentScope)]).concat(superTypes.reduce((res, type, index) => res.concat([...getPropertiesForType(type, annotation.extends[index])]), [])));

      const constructor = resultObj.properties.get(_constants.CONSTRUCTABLE);

      if (constructor !== undefined) {
        const constructorType = constructor.type instanceof _genericType.GenericType ? constructor.type.subordinateType : constructor.type;
        resultObj.instanceType = constructorType.returnType;
      }

      return getResultObjectType(resultObj);

    case _nodes2.default.TS_ARRAY_TYPE_ANNOTATION:
      return getTypeFromTypeAnnotation({
        typeAnnotation: {
          type: _nodes2.default.TS_TYPE_REFERENCE_ANNOTATION,
          id: {
            name: "Array"
          },
          typeParameters: {
            params: [typeNode.typeAnnotation.elementType]
          }
        }
      }, typeScope, currentScope, rewritable, self, parentNode, typeGraph, precompute, middlecompute, postcompute);

    case _nodes2.default.TS_TYPE_QUERY:
      typeNode.typeAnnotation = {
        loc: typeNode.typeAnnotation.loc,
        type: _nodes2.default.GENERIC_TYPE_ANNOTATION,
        id: {
          name: "$TypeOf"
        },
        typeParameters: {
          params: [{
            id: typeNode.typeAnnotation.exprName
          }]
        }
      };

    case _nodes2.default.GENERIC_TYPE_ANNOTATION:
    case _nodes2.default.TS_TYPE_REFERENCE_ANNOTATION:
    case _nodes2.default.TS_EXPRESSION_WITH_TYPE_ARGUMENTS:
      const target = typeNode.typeAnnotation || typeNode;
      const genericArguments = target.typeParameters && target.typeParameters.params;
      const genericName = (target.id || target.typeName || target.expression).name;

      if (genericArguments != undefined) {
        const typeInScope = _type.Type.find(genericName, {
          parent: typeScope,
          loc: target.loc
        }, parentNode, typeGraph, precompute, middlecompute, postcompute);

        const existedGenericType = typeInScope instanceof _typeVar.TypeVar && typeInScope.root != undefined ? typeInScope.root : typeInScope;

        if (!existedGenericType || !(existedGenericType instanceof _genericType.GenericType) && !_typeVar.TypeVar.isSelf(existedGenericType)) {
          throw new _errors2.default(`Apply undeclareted generic type '${genericName}'`, typeNode.typeAnnotation.loc);
        }

        if (existedGenericType.name === "$TypeOf" || existedGenericType.name === "$InstanceOf") {
          if (genericArguments.length !== 1 || genericArguments[0].id == undefined || genericArguments[0].id.type !== _nodes2.default.IDENTIFIER) {
            throw new _errors2.default(`"${existedGenericType.name}" work only with identifier`, typeNode.typeAnnotation.loc);
          }

          return existedGenericType.applyGeneric( // $FlowIssue
          [currentScope.findVariable(genericArguments[0].id)], typeNode.typeAnnotation.loc, false);
        }

        const genericParams = genericArguments.map(arg => getTypeFromTypeAnnotation({
          typeAnnotation: arg
        }, typeScope, currentScope, rewritable, self, parentNode, typeGraph, precompute, middlecompute, postcompute));
        return genericParams.some(t => t instanceof _typeVar.TypeVar && t !== self) || _typeVar.TypeVar.isSelf(existedGenericType) ? new _bottomType.$BottomType({
          parent: existedGenericType.parent
        }, existedGenericType, genericParams, typeNode.typeAnnotation.loc) : // $FlowIssue
        existedGenericType.applyGeneric(genericParams, typeNode.typeAnnotation.loc);
      }

      if (!rewritable) {
        const typeInScope = _type.Type.find(genericName, {
          parent: typeScope,
          loc: target.loc
        }, parentNode, typeGraph, precompute, middlecompute, postcompute);

        if (typeInScope.shouldBeUsedAsGeneric) {
          throw new _errors2.default(`Generic type "${String(typeInScope.name)}" should be used with type paramteres!`, target.loc);
        }

        return typeInScope instanceof _typeVar.TypeVar && typeInScope.root != undefined ? typeInScope.root : typeInScope;
      }

      const typeInScope = _type.Type.find(genericName, {
        parent: typeScope,
        loc: target.loc
      });

      return typeInScope instanceof _typeVar.TypeVar && typeInScope.root != undefined ? typeInScope.root : typeInScope;

    case _nodes2.default.TS_OBJECT_METHOD:
    case _nodes2.default.FUNCTION_TYPE_ANNOTATION:
    case _nodes2.default.TS_CALL_SIGNATURE_DECLARATION:
    case _nodes2.default.TS_CONSTRUCT_SIGNATURE_DECLARATION:
    case _nodes2.default.TS_FUNCTION_TYPE_ANNOTATION:
      const localTypeScope = new _typeScope.TypeScope(typeScope);
      const genericParams = typeNode.typeAnnotation.typeParameters ? typeNode.typeAnnotation.typeParameters.params.map(param => getTypeFromTypeAnnotation({
        typeAnnotation: param
      }, localTypeScope, currentScope, rewritable, self, parentNode, typeGraph, precompute, middlecompute, postcompute)) : [];
      const {
        params: paramsNode,
        parameters
      } = typeNode.typeAnnotation;
      const argNodes = paramsNode || parameters;
      const args = argNodes.map(annotation => {
        const result = getTypeFromTypeAnnotation( // Ohhh, TS is beautiful ❤️
        annotation.typeAnnotation.type === _nodes2.default.TS_TYPE_ANNOTATION ? nullable(annotation) : annotation, localTypeScope, currentScope, rewritable, self, parentNode, typeGraph, precompute, middlecompute, postcompute);
        return annotation.type === _nodes2.default.REST_ELEMENT ? new _functionType.RestArgument(result) : result;
      });
      const {
        returnType: returnTypeNode
      } = typeNode.typeAnnotation;
      const returnType = getTypeFromTypeAnnotation(returnTypeNode ? {
        typeAnnotation: returnTypeNode
      } : // Ohhh, TS is beautiful ❤️
      typeNode.typeAnnotation.typeAnnotation, localTypeScope, currentScope, rewritable, self, parentNode, typeGraph, precompute, middlecompute, postcompute);

      const typeName = _functionType.FunctionType.getName(args, returnType, genericParams);

      const type = _functionType.FunctionType.term(typeName, {}, args, returnType);

      if (genericParams.length === 0 || !(type instanceof _functionType.FunctionType)) {
        return type;
      }

      return _genericType.GenericType.new(typeName, {}, genericParams, localTypeScope, type);
  }

  return _type.Type.Unknown;
}

function mergeObjectsTypes(obj1 = _objectType.ObjectType.term("{ }", {}, []), obj2 = _objectType.ObjectType.term("{ }", {}, []), typeScope) {
  if (obj1 instanceof _typeVar.TypeVar) {
    return obj1;
  }

  if (obj2 instanceof _typeVar.TypeVar) {
    return obj2;
  }

  const resultProperties = (0, _common.unique)([...obj1.properties.entries(), ...obj2.properties.entries()], ([key]) => key);
  return _objectType.ObjectType.term(_objectType.ObjectType.getName(resultProperties), {}, resultProperties);
}

function createObjectWith(key, type, typeScope, meta) {
  const properties = [[key, new _variableInfo.VariableInfo(type, undefined, meta)]];
  return _objectType.ObjectType.term(_objectType.ObjectType.getName(properties), {}, properties);
}

function get(variable, propertyChaining, memberExpressionLoc) {
  if (!propertyChaining) {
    return;
  }

  return propertyChaining.reduce((type, propertyName) => {
    if (!(type instanceof _objectType.ObjectType)) {
      return;
    }

    const property = type.properties.get(propertyName);

    if (property === undefined) {
      return;
    }

    return property.type;
  }, variable.type);
}

function createSelf(node, parent) {
  return _typeVar.TypeVar.new(node.id.name, {
    isSubtypeOf: _typeVar.TypeVar.Self,
    parent
  }, null, true);
}

function getPropertyName(property) {
  if (property.key !== undefined) {
    return property.key.name;
  }

  switch (property.type) {
    case _nodes2.default.TS_CALL_SIGNATURE_DECLARATION:
      return _constants.CALLABLE;

    case _nodes2.default.TS_CONSTRUCT_SIGNATURE_DECLARATION:
      return _constants.CONSTRUCTABLE;

    case _nodes2.default.TS_INDEX_PROPERTY:
      return _constants.INDEXABLE;
  }

  throw new Error("Never");
}

function getResultObjectType(object) {
  const indexable = object.properties.get(_constants.INDEXABLE);

  if (indexable !== undefined) {
    object.properties.delete(_constants.INDEXABLE);
    indexable.type.isSubtypeOf = object;
    indexable.type.name = object.name;
    object.parent.body.set(object.name, indexable.type);
    object.name = `${String(object.name)}.prototype`;
    object.parent.body.set(object.name, object);
    return indexable.type;
  }

  return object;
}

function getPropertiesForType(type, node) {
  switch (type && type.constructor) {
    case _objectType.ObjectType:
      // $FlowIssue
      return type.properties;

    case _bottomType.$BottomType:
      // $FlowIssue
      return getPropertiesForType(type.unpack(), node);

    case _functionType.FunctionType:
    case _collectionType.CollectionType:
      // $FlowIssue
      return getPropertiesForType(type.isSubtypeOf, node);

    case _genericType.GenericType:
      throw new _errors2.default("Generic type should be applied before usage", node.loc);

    case _type.Type:
      throw new _errors2.default("Type can not be extended by simple type", node.loc);

    default:
      throw new _errors2.default(`Can not be extended by ${String(type && type.name)}`, node.loc);
  }
}

function getWrapperType(argument, typeGraph) {
  const type = argument instanceof _variableInfo.VariableInfo ? argument.type : argument;

  if (type instanceof _unionType.UnionType) {
    const variants = type.variants.map(t => getWrapperType(t, typeGraph)); // $FlowIssue

    return _unionType.UnionType.term(null, {}, variants);
  }

  if (type === _type.Type.String || type.isSubtypeOf === _type.Type.String) {
    return _type.Type.find("String");
  }

  if (type === _type.Type.Number || type.isSubtypeOf === _type.Type.Number) {
    return _type.Type.find("Number");
  }

  if (type === _type.Type.Boolean || type.isSubtypeOf === _type.Type.Boolean) {
    return _type.Type.find("Boolean");
  }

  if (type === _type.Type.Symbol || type.isSubtypeOf === _type.Type.Symbol) {
    return _type.Type.find("Symbol");
  }

  return argument;
}

let FALSY = exports.FALSY = [];

function getFalsy() {
  if (FALSY.length === 0) {
    exports.FALSY = FALSY = [_type.Type.term(false, {
      isSubtypeOf: _type.Type.Boolean
    }), _type.Type.term(0, {
      isSubtypeOf: _type.Type.Number
    }), _type.Type.term("0n", {
      isSubtypeOf: _type.Type.BigInt
    }), _type.Type.term("''", {
      isSubtypeOf: _type.Type.String
    }), _type.Type.Null, _type.Type.Undefined];
  }

  return FALSY;
}

function pickFalsy(type) {
  if (type instanceof _unionType.UnionType) {
    const variants = type.variants.map(pickFalsy).filter(Boolean);
    return _unionType.UnionType.term(null, {}, variants);
  }

  if (type === _type.Type.Boolean) {
    return _type.Type.term(false, {
      isSubtypeOf: _type.Type.Boolean
    });
  }

  if (type === _type.Type.String) {
    return _type.Type.term("''", {
      isSubtypeOf: _type.Type.String
    });
  }

  if (type === _type.Type.Number) {
    return _type.Type.term(0, {
      isSubtypeOf: _type.Type.Number
    });
  }

  if (type === _type.Type.BigInt) {
    return _type.Type.term("0n", {
      isSubtypeOf: _type.Type.BigInt
    });
  }

  if (type === _type.Type.Undefined || type === _type.Type.Null) {
    return type;
  }

  if (isFalsy(type)) {
    return type;
  }
}

function pickTruthy(type) {
  if (type instanceof _unionType.UnionType) {
    const variants = type.variants.map(pickTruthy).filter(Boolean);
    return _unionType.UnionType.term(null, {}, variants);
  }

  if (type === _type.Type.Boolean) {
    return _type.Type.term(true, {
      isSubtypeOf: _type.Type.Boolean
    });
  }

  if (!isFalsy(type)) {
    return type;
  }
}

function isFalsy(type) {
  return getFalsy().includes(type);
}

/***/ }),

/***/ "../node_modules/@hegel/core/utils/utility-types.js":
/*!**********************************************************!*\
  !*** ../node_modules/@hegel/core/utils/utility-types.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keysType = __webpack_require__(/*! ../type-graph/types/keys-type */ "../node_modules/@hegel/core/type-graph/types/keys-type.js");

var _pickType = __webpack_require__(/*! ../type-graph/types/pick-type */ "../node_modules/@hegel/core/type-graph/types/pick-type.js");

var _omitType = __webpack_require__(/*! ../type-graph/types/omit-type */ "../node_modules/@hegel/core/type-graph/types/omit-type.js");

var _typeOfType = __webpack_require__(/*! ../type-graph/types/type-of-type */ "../node_modules/@hegel/core/type-graph/types/type-of-type.js");

var _throwsType = __webpack_require__(/*! ../type-graph/types/throws-type */ "../node_modules/@hegel/core/type-graph/types/throws-type.js");

var _valuesType = __webpack_require__(/*! ../type-graph/types/values-type */ "../node_modules/@hegel/core/type-graph/types/values-type.js");

var _partialType = __webpack_require__(/*! ../type-graph/types/partial-type */ "../node_modules/@hegel/core/type-graph/types/partial-type.js");

var _immutableType = __webpack_require__(/*! ../type-graph/types/immutable-type */ "../node_modules/@hegel/core/type-graph/types/immutable-type.js");

var _returnType = __webpack_require__(/*! ../type-graph/types/return-type */ "../node_modules/@hegel/core/type-graph/types/return-type.js");

var _instanceOfType = __webpack_require__(/*! ../type-graph/types/instance-of-type */ "../node_modules/@hegel/core/type-graph/types/instance-of-type.js");

var _propertyType = __webpack_require__(/*! ../type-graph/types/property-type */ "../node_modules/@hegel/core/type-graph/types/property-type.js");

var _intersectionType = __webpack_require__(/*! ../type-graph/types/intersection-type */ "../node_modules/@hegel/core/type-graph/types/intersection-type.js");

const mixUtilityTypes = moduleScope => {
  const typeScope = moduleScope.typeScope;
  const utilityTypes = new Map([["$PropertyType", new _propertyType.$PropertyType(_propertyType.$PropertyType.name, {
    parent: typeScope
  })], ["$InstanceOf", new _instanceOfType.$InstanceOf(_instanceOfType.$InstanceOf.name, {
    parent: typeScope
  })], ["$Keys", new _keysType.$Keys(_keysType.$Keys.name, {
    parent: typeScope
  })], ["$Values", new _valuesType.$Values(_valuesType.$Values.name, {
    parent: typeScope
  })], ["$Partial", new _partialType.$Partial(_partialType.$Partial.name, {
    parent: typeScope
  })], ["$Pick", new _pickType.$Pick(_pickType.$Pick.name, {
    parent: typeScope
  })], ["$Omit", new _omitType.$Omit(_omitType.$Omit.name, {
    parent: typeScope
  })], ["$ReturnType", new _returnType.$ReturnType(_returnType.$ReturnType.name, {
    parent: typeScope
  })], ["$TypeOf", new _typeOfType.$TypeOf(_typeOfType.$TypeOf.name, {
    parent: typeScope
  })], ["$Intersection", new _intersectionType.$Intersection(_intersectionType.$Intersection.name, {
    parent: typeScope
  })], ["$Throws", new _throwsType.$Throws(_throwsType.$Throws.name, {
    parent: typeScope
  })], ["$Immutable", new _immutableType.$Immutable(_immutableType.$Immutable.name, {
    parent: typeScope
  })]]);

  for (const [name, type] of utilityTypes) {
    typeScope.body.set(name, type);
    type.parent = typeScope;
  }
};

exports.default = mixUtilityTypes;

/***/ }),

/***/ "../node_modules/@hegel/core/utils/variable-utils.js":
/*!***********************************************************!*\
  !*** ../node_modules/@hegel/core/utils/variable-utils.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVariableInfoFromDelcaration = getVariableInfoFromDelcaration;
exports.getSuperTypeOf = getSuperTypeOf;
exports.getVariableType = getVariableType;
exports.addVariableToGraph = addVariableToGraph;

var _meta = __webpack_require__(/*! ../type-graph/meta/meta */ "../node_modules/@hegel/core/type-graph/meta/meta.js");

var _type = __webpack_require__(/*! ../type-graph/types/type */ "../node_modules/@hegel/core/type-graph/types/type.js");

var _unionType = __webpack_require__(/*! ../type-graph/types/union-type */ "../node_modules/@hegel/core/type-graph/types/union-type.js");

var _tupleType = __webpack_require__(/*! ../type-graph/types/tuple-type */ "../node_modules/@hegel/core/type-graph/types/tuple-type.js");

var _objectType = __webpack_require__(/*! ../type-graph/types/object-type */ "../node_modules/@hegel/core/type-graph/types/object-type.js");

var _functionType = __webpack_require__(/*! ../type-graph/types/function-type */ "../node_modules/@hegel/core/type-graph/types/function-type.js");

var _variableInfo = __webpack_require__(/*! ../type-graph/variable-info */ "../node_modules/@hegel/core/type-graph/variable-info.js");

var _common = __webpack_require__(/*! ./common */ "../node_modules/@hegel/core/utils/common.js");

var _moduleScope = __webpack_require__(/*! ../type-graph/module-scope */ "../node_modules/@hegel/core/type-graph/module-scope.js");

var _typeUtils = __webpack_require__(/*! ./type-utils */ "../node_modules/@hegel/core/utils/type-utils.js");

var _scopeUtils = __webpack_require__(/*! ./scope-utils */ "../node_modules/@hegel/core/utils/scope-utils.js");

function getVariableInfoFromDelcaration(currentNode, parentNode, typeGraph, precompute, middlecompute, postcompute) {
  const parentScope = (0, _scopeUtils.getParentForNode)(currentNode, parentNode, typeGraph);
  const currentTypeScope = (0, _scopeUtils.findNearestTypeScope)(parentScope, typeGraph);
  const annotatedType = (0, _typeUtils.getTypeFromTypeAnnotation)(currentNode.id && currentNode.id.typeAnnotation, currentTypeScope, parentScope, false, null, parentNode, typeGraph, precompute, middlecompute, postcompute);
  return new _variableInfo.VariableInfo(annotatedType, parentScope, new _meta.Meta(currentNode.loc), currentNode.kind === "const");
}

function getSuperTypeOf(type, typeScope) {
  if (!type.isSubtypeOf || type.name === null || type.name === "undefined" || type instanceof _functionType.FunctionType || type instanceof _tupleType.TupleType || type instanceof _unionType.UnionType || type instanceof _objectType.ObjectType && String(type.name)[0] !== "{") {
    return type;
  }

  if (type instanceof _objectType.ObjectType) {
    const propertyTypes = [...type.properties.entries()].map(([key, v]) => [key, v.type]);
    const newProperties = propertyTypes.map(([key, p]) => [key, // $FlowIssue
    Object.assign(new _variableInfo.VariableInfo(), type.properties.get(key), {
      type: getSuperTypeOf(p, typeScope)
    })]);
    return _objectType.ObjectType.term(_objectType.ObjectType.getName(newProperties), {}, newProperties);
  }

  return type.isSubtypeOf;
}

function getVariableType(variable, newType, typeScope, inferenced = false) {
  if (variable && variable.type !== _type.Type.Unknown) {
    return variable.type;
  }

  if (!inferenced || variable && variable.isConstant && newType.constructor === _type.Type) {
    return newType;
  }

  return getSuperTypeOf(newType, typeScope);
}

function addVariableToGraph(currentNode, parentNode, moduleScope, precompute, middlecompute, postcompute, customName = (0, _common.getDeclarationName)(currentNode)) {
  const variableInfo = getVariableInfoFromDelcaration(currentNode, parentNode, moduleScope, precompute, middlecompute, postcompute);
  variableInfo.parent.body.set(customName, variableInfo);

  if (moduleScope instanceof _moduleScope.PositionedModuleScope && currentNode.id != null) {
    moduleScope.addPosition(currentNode.id, variableInfo);
  }

  return variableInfo;
}

/***/ }),

/***/ "../node_modules/workerize-loader/dist/rpc-worker-loader.js!../node_modules/gatsby/dist/utils/babel-loader.js?!../node_modules/gatsby/dist/utils/babel-loader.js?!../src/docs/try/components/hegel.js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/workerize-loader/dist/rpc-worker-loader.js!../node_modules/gatsby/dist/utils/babel-loader.js??ref--4-0!../node_modules/gatsby/dist/utils/babel-loader.js??ref--18!../src/docs/try/components/hegel.js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: getTypeByLocation, mixTypeDefinitions, getStandardTypeDefinitions, getDiagnostics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypeByLocation", function() { return getTypeByLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixTypeDefinitions", function() { return mixTypeDefinitions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStandardTypeDefinitions", function() { return getStandardTypeDefinitions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDiagnostics", function() { return getDiagnostics; });
/* harmony import */ var _babel_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/parser */ "../node_modules/@babel/parser/lib/index.js");
/* harmony import */ var _babel_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_parser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hegel_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hegel/core */ "../node_modules/@hegel/core/index.js");
/* harmony import */ var _hegel_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hegel_core__WEBPACK_IMPORTED_MODULE_1__);
let module=undefined;const STANDARD_LIB_OPTIONS={plugins:["typescript"]};const DEFAULT_OPTIONS={plugins:["bigInt","classProperties","classPrivateMethods","classPrivateProperties",["flow",{all:true}]]};// eslint-disable-next-line
const STANDARD_AST=Object(_babel_parser__WEBPACK_IMPORTED_MODULE_0__["parse"])(`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/////////////////////////////
/// ECMAScript APIs
/////////////////////////////

declare var NaN: number;
declare var Infinity: number;

/**
 * Evaluates JavaScript code and executes it.
 * @param x A String value that contains valid JavaScript code.
 */
declare function eval(x: string): any;

// /**
//   * Converts A string to an integer.
//   * @param s A string to convert into a number.
//   * @param radix A value between 2 and 36 that specifies the base of the number in numString.
//   * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.
//   * All other strings are considered decimal.
//   */
declare function parseInt(s: string, radix?: number): number;

// /**
//   * Converts a string to a floating-point number.
//   * @param string A string that contains a floating-point number.
//   */
declare function parseFloat(string: string): number;

// /**
//   * Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).
//   * @param number A numeric value.
//   */
declare function isNaN(number: number): boolean;

// /**
//   * Determines whether a supplied number is finite.
//   * @param number Any numeric value.
//   */
declare function isFinite(number: number): boolean;

// /**
//   * Gets the unencoded version of an encoded Uniform Resource Identifier (URI).
//   * @param encodedURI A value representing an encoded URI.
//   */
declare function decodeURI(encodedURI: string): string;

// /**
//   * Gets the unencoded version of an encoded component of a Uniform Resource Identifier (URI).
//   * @param encodedURIComponent A value representing an encoded URI component.
//   */
declare function decodeURIComponent(encodedURIComponent: string): string;

// /**
//   * Encodes a text string as a valid Uniform Resource Identifier (URI)
//   * @param uri A value representing an encoded URI.
//   */
declare function encodeURI(uri: string): string;

// /**
//   * Encodes a text string as a valid component of a Uniform Resource Identifier (URI).
//   * @param uriComponent A value representing an encoded URI component.
//   */
declare function encodeURIComponent(
  uriComponent: string | number | boolean
): string;

// /**
//   * Computes a new string in which certain characters have been replaced by a hexadecimal escape sequence.
//   * @param string A string value
//   */
declare function escape(string: string): string;

// /**
//   * Computes a new string in which hexadecimal escape sequences are replaced with the character that it represents.
//   * @param string A string value
//   */
declare function unescape(string: string): string;

interface IteratorYieldResult<TYield> {
  done?: false;
  value: TYield;
}

interface IteratorReturnResult<TReturn> {
  done: true;
  value: TReturn;
}

type IteratorResult<T, TReturn> =
  | IteratorYieldResult<T>
  | IteratorReturnResult<TReturn>;

interface Iterator<T, TReturn, TNext> {
  // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.
  next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
  return?(value?: TReturn): IteratorResult<T, TReturn>;
  throw?(e?: any): IteratorResult<T, TReturn>;
}

interface Iterable<T> {
  //[Symbol.iterator](): Iterator<T>;
}

interface IterableIterator<T> extends Iterator<T, any, any> {
  //[Symbol.iterator](): IterableIterator<T>;
}

interface Symbol {
  //   /** Returns a string representation of an object. */
  toString(): string;

  //   /** Returns the primitive value of the specified object. */
  valueOf(): symbol;
}

interface SymbolConstructor {
  readonly prototype: symbol;
  readonly iterator: symbol;
  readonly asyncIterator: symbol;

  (description?: string | number): symbol;

  for(key: string): symbol;

  keyFor(sym: symbol): string | undefined;
}

declare var Symbol: SymbolConstructor;

declare type PropertyKey = string | number | symbol;

interface PropertyDescriptor {
  configurable?: boolean;
  enumerable?: boolean;
  value?: any;
  writable?: boolean;
  get?(): any;
  set?(v: any): void;
}

interface PropertyDescriptorMap {
  [s: string]: PropertyDescriptor;
}

interface Array<T> {
  //     /**
  //       * Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.
  //       */
  length: number;
  //     /**
  //       * Returns a string representation of an array.
  //       */
  toString(): string;
  //     /**
  //       * Returns a string representation of an array. The elements are converted to string using their toLocalString methods.
  //       */
  toLocaleString(): string;
  //     /**
  //       * Removes the last element from an array and returns it.
  //       */
  pop(): T | undefined;
  //     /**
  //       * Appends new elements to an array, and returns the new length of the array.
  //       * @param items New elements of the Array.
  //       */
  push(...items: T[]): number;
  //     /**
  //       * Combines two or more arrays.
  //       * @param items Additional items to add to the end of array1.
  //       */
  concat(...items: Array<T>[]): T[];
  //     /**
  //       * Combines two or more arrays.
  //       * @param items Additional items to add to the end of array1.
  //       */
  //     concat(...items: (T | ConcatArray<T>)[]): T[];
  //     /**
  //       * Adds all the elements of an array separated by the specified separator string.
  //       * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
  //       */
  join(separator?: string): string;
  //     /**
  //       * Reverses the elements in an Array.
  //       */
  reverse(): T[];
  //     /**
  //       * Removes the first element from an array and returns it.
  //       */
  shift(): T | undefined;
  //     /**
  //       * Returns a section of an array.
  //       * @param start The beginning of the specified portion of the array.
  //       * @param end The end of the specified portion of the array.
  //       */
  slice(start?: number, end?: number): T[];
  //     /**
  //       * Sorts an array.
  //       * @param compareFn The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order.
  //       */
  sort(compareFn?: (a: T, b: T) => number): Array<T>;
  //     /**
  //       * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
  //       * @param start The zero-based location in the array from which to start removing elements.
  //       * @param deleteCount The number of elements to remove.
  //       */
  splice(start: number, deleteCount?: number): T[];
  //     /**
  //       * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
  //       * @param start The zero-based location in the array from which to start removing elements.
  //       * @param deleteCount The number of elements to remove.
  //       * @param items Elements to insert into the array in place of the deleted elements.
  //       */
  splice(start: number, deleteCount: number, ...items: T[]): T[];
  //     /**
  //       * Inserts new elements at the start of an array.
  //       * @param items  Elements to insert at the start of the Array.
  //       */
  unshift(...items: T[]): number;
  //     /**
  //       * Returns the index of the first occurrence of a value in an array.
  //       * @param searchElement The value to locate in the array.
  //       * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
  //       */
  indexOf(searchElement: T, fromIndex?: number): number;
  includes(searchElement: T): boolean;
  find(fn: (el: T) => boolean): T | undefined;
  findIndex(fn: (el: T) => boolean): number;
  //     /**
  //       * Returns the index of the last occurrence of a specified value in an array.
  //       * @param searchElement The value to locate in the array.
  //       * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
  //       */
  lastIndexOf(searchElement: T, fromIndex?: number): number;
  //     /**
  //       * Determines whether all the members of an array satisfy the specified test.
  //       * @param callbackfn A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
  //       */
  every(
    callbackfn: (value: T, index: number, array: T[]) => unknown,
    thisArg?: any
  ): boolean;
  //     /**
  //       * Determines whether the specified callback function returns true for any element of an array.
  //       * @param callbackfn A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
  //       */
  some(
    callbackfn: (value: T, index: number, array: T[]) => unknown,
    thisArg?: any
  ): boolean;
  //     /**
  //       * Performs the specified action for each element in an array.
  //       * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
  //       * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
  //       */
  forEach(
    callbackfn: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ): void;
  //     /**
  //       * Calls a defined callback function on each element of an array, and returns an array that contains the results.
  //       * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
  //       */
  map<U>(
    callbackfn: (value: T, index: number, array: T[]) => U,
    thisArg?: any
  ): U[];
  //     /**
  //      * Returns the elements of an array that meet the condition specified in a callback function.
  //      * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
  //      * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
  //      */
  filter(
    callbackfn: (value: T, index: number, array: T[]) => boolean,
    thisArg?: any
  ): T[];
  //     /**
  //       * Returns the elements of an array that meet the condition specified in a callback function.
  //       * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
  //       */
  //     /**
  //       * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
  //       */
  //     reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
  //     reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
  //     /**
  //       * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
  //       */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => U,
    initialValue?: U
  ): U;
  //     /**
  //       * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
  //       */
  //     reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
  //     reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
  //     /**
  //       * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
  //       */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => U,
    initialValue?: U
  ): U;

  /** Iterator */
  //[Symbol.iterator](): IterableIterator<T>;
  /**
   * Returns an iterable of key, value pairs for every entry in the array
   */
  // entries(): IterableIterator<[number, T]>;
  /**
   * Returns an iterable of keys in the array
   */
  // keys(): IterableIterator<number>;
  /**
   * Returns an iterable of values in the array
   */
  // values(): IterableIterator<T>;

  [n: number]: T;
}

interface RegExpExecArray extends Array<string> {
  index: number;
  input: string;
}

interface RegExpMatchArray extends Array<string> {
  index?: number;
  input?: string;
}

interface RegExp {
  /**
   * Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.
   * @param string The String object or string literal on which to perform the search.
   */
  exec(string: string): RegExpExecArray | null;

  /**
   * Returns a Boolean value that indicates whether or not a pattern exists in a searched string.
   * @param string String on which to perform the search.
   */
  test(string: string): boolean;

  /** Returns a copy of the text of the regular expression pattern. Read-only. The regExp argument is a Regular expression object. It can be a variable name or a literal. */
  readonly source: string;

  /** Returns a Boolean value indicating the state of the global flag (g) used with a regular expression. Default is false. Read-only. */
  readonly global: boolean;

  /** Returns a Boolean value indicating the state of the ignoreCase flag (i) used with a regular expression. Default is false. Read-only. */
  readonly ignoreCase: boolean;

  /** Returns a Boolean value indicating the state of the multiline flag (m) used with a regular expression. Default is false. Read-only. */
  readonly multiline: boolean;

  lastIndex: number;

  // Non-standard extensions
  compile(): this;
}

interface RegExpConstructor {
  new (pattern: string, flags?: string): RegExp;
  (pattern: string, flags?: string): RegExp;
  readonly prototype: RegExp;

  // Non-standard extensions
  $1: string;
  $2: string;
  $3: string;
  $4: string;
  $5: string;
  $6: string;
  $7: string;
  $8: string;
  $9: string;
  lastMatch: string;
}

declare var RegExp: RegExpConstructor;

// /**
//   * Creates a new function.
//   */
interface Function {
  //     /**
  //       * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
  //       * @param thisArg The object to be used as the this object.
  //       * @param argArray A set of arguments to be passed to the function.
  //       */
  apply(this: Function, thisArg: any, argArray?: any): any;

  //     /**
  //       * Calls a method of an object, substituting another object for the current object.
  //       * @param thisArg The object to be used as the current object.
  //       * @param argArray A list of arguments to be passed to the method.
  //       */
  call(this: Function, thisArg: any, ...argArray: any[]): any;

  //     /**
  //       * For a given function, creates a bound function that has the same body as the original function.
  //       * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
  //       * @param thisArg An object to which the this keyword can refer inside the new function.
  //       * @param argArray A list of arguments to be passed to the new function.
  //       */
  bind(this: Function, thisArg: any, ...argArray: any[]): any;

  //     /** Returns a string representation of a function. */
  toString(): string;

  prototype: any;
  readonly length: number;

  //     // Non-standard extensions
  arguments: any;
  caller: Function;
}

interface FunctionConstructor {
  //     /**
  //       * Creates a new function.
  //       * @param args A list of arguments the function accepts.
  //       */
  new (...args: string[]): Function;
  (...args: string[]): Function;
  readonly prototype: Function;
}

declare var Function: FunctionConstructor;

interface ReadonlyArray<T> {
  //     /**
  //       * Gets the length of the array. This is a number one higher than the highest element defined in an array.
  //       */
  readonly length: number;
  //     /**
  //       * Returns a string representation of an array.
  //       */
  toString(): string;
  //     /**
  //       * Returns a string representation of an array. The elements are converted to string using their toLocalString methods.
  //       */
  toLocaleString(): string;
  //     /**
  //       * Combines two or more arrays.
  //       * @param items Additional items to add to the end of array1.
  //       */
  concat(...items: ReadonlyArray<T>[]): T[];
  //       * Adds all the elements of an array separated by the specified separator string.
  //       * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
  //       */
  join(separator?: string): string;
  //     /**
  //       * Returns a section of an array.
  //       * @param start The beginning of the specified portion of the array.
  //       * @param end The end of the specified portion of the array.
  //       */
  slice(start?: number, end?: number): T[];
  //     /**
  //       * Returns the index of the first occurrence of a value in an array.
  //       * @param searchElement The value to locate in the array.
  //       * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
  //       */
  indexOf(searchElement: T, fromIndex?: number): number;
  //     /**
  //       * Returns the index of the last occurrence of a specified value in an array.
  //       * @param searchElement The value to locate in the array.
  //       * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
  //       */
  lastIndexOf(searchElement: T, fromIndex?: number): number;
  //     /**
  //       * Determines whether all the members of an array satisfy the specified test.
  //       * @param callbackfn A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
  //       */
  every(
    callbackfn: (value: T, index: number, array: ReadonlyArray<T>) => unknown,
    thisArg?: any
  ): boolean;
  //     /**
  //       * Determines whether the specified callback function returns true for any element of an array.
  //       * @param callbackfn A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
  //       */
  some(
    callbackfn: (value: T, index: number, array: ReadonlyArray<T>) => unknown,
    thisArg?: any
  ): boolean;
  //     /**
  //       * Performs the specified action for each element in an array.
  //       * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
  //       * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
  //       */
  forEach(
    callbackfn: (value: T, index: number, array: ReadonlyArray<T>) => void,
    thisArg?: any
  ): void;
  //     /**
  //       * Calls a defined callback function on each element of an array, and returns an array that contains the results.
  //       * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
  //       */
  map<U>(
    callbackfn: (value: T, index: number, array: ReadonlyArray<T>) => U,
    thisArg?: any
  ): U[];
  //     /**
  //      * Returns the elements of an array that meet the condition specified in a callback function.
  //      * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
  //      * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
  //      */
  filter(
    callbackfn: (value: T, index: number, array: ReadonlyArray<T>) => boolean,
    thisArg?: any
  ): T[];
  //     /**
  //       * Returns the elements of an array that meet the condition specified in a callback function.
  //       * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
  //       */
  // filter(callbackfn: (value: T, index: number, array: ReadonlyArray<T>) => unknown, thisArg?: any): T[];
  //     /**
  //       * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
  //       */
  // reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: ReadonlyArray<T>) => T, initialValue?: T): T;
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      array: ReadonlyArray<T>
    ) => U,
    initialValue?: U
  ): U;
  //     /**
  //       * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
  //       */
  //     /**
  //       * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
  //       */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      array: ReadonlyArray<T>
    ) => U,
    initialValue?: U
  ): U;
  //     /**
  //       * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
  //       */

  readonly [n: number]: T;
}

interface Object {
  //     /** The initial value of Object.prototype.constructor is the standard built-in Object constructor. */
  constructor: Function;

  //     /** Returns a string representation of an object. */
  toString(): string;

  //     /** Returns a date converted to a string using the current locale. */
  toLocaleString(): string;

  //     /** Returns the primitive value of the specified object. */
  valueOf(): Object;

  //     /**
  //       * Determines whether an object has a property with the specified name.
  //       * @param v A property name.
  //       */
  hasOwnProperty(v: PropertyKey): boolean;

  //     /**
  //       * Determines whether an object exists in another object's prototype chain.
  //       * @param v Another object whose prototype chain is to be checked.
  //       */
  isPrototypeOf(v: Object): boolean;

  //     /**
  //       * Determines whether a specified property is enumerable.
  //       * @param v A property name.
  //       */
  propertyIsEnumerable(v: PropertyKey): boolean;
}

interface ObjectConstructor {
  constructor(value?: any): Object;

  //     /** A reference to the prototype for a class of objects. */
  readonly prototype: Object;

  //     /**
  //       * Returns the prototype of an object.
  //       * @param o The object that references the prototype.
  //       */
  getPrototypeOf(o: any): any;

  //     /**
  //       * Gets the own property descriptor of the specified object.
  //       * An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.
  //       * @param o Object that contains the property.
  //       * @param p Name of the property.
  //     */
  getOwnPropertyDescriptor(
    o: any,
    p: PropertyKey
  ): PropertyDescriptor | undefined;

  //     /**
  //       * Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
  //       * on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.
  //       * @param o Object that contains the own properties.
  //       */
  getOwnPropertyNames(o: any): string[];

  //     /**
  //       * Creates an object that has the specified prototype, and that optionally contains specified properties.
  //       * @param o Object to use as a prototype. May be null
  //       * @param properties JavaScript object that contains one or more property descriptors.
  //       */
  create(o: Object | null, properties?: PropertyDescriptorMap): any;

  //     /**
  //       * Adds a property to an object, or modifies attributes of an existing property.
  //       * @param o Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.
  //       * @param p The property name.
  //       * @param attributes Descriptor for the property. It can be for a data property or an accessor property.
  //       */
  defineProperty(o: any, p: PropertyKey, attributes: PropertyDescriptor): any;

  //     /**
  //       * Adds one or more properties to an object, and/or modifies attributes of existing properties.
  //       * @param o Object on which to add or modify the properties. This can be a native JavaScript object or a DOM object.
  //       * @param properties JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.
  //       */
  defineProperties(o: any, properties: PropertyDescriptorMap): any;

  //     /**
  //       * Prevents the modification of attributes of existing properties, and prevents the addition of new properties.
  //       * @param o Object on which to lock the attributes.
  //       */
  seal<T>(o: T): T;

  //     /**
  //       * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
  //       * @param o Object on which to lock the attributes.
  //       */
  freeze<T>(a: T[]): ReadonlyArray<T>;

  //     /**
  //       * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
  //       * @param o Object on which to lock the attributes.
  //       */
  // freeze<T extends Function>(f: T): T;

  //     /**
  //       * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
  //       * @param o Object on which to lock the attributes.
  //       */
  freeze<T>(o: T): T;

  //     /**
  //       * Prevents the addition of new properties to an object.
  //       * @param o Object to make non-extensible.
  //       */
  preventExtensions<T>(o: T): T;

  //     /**
  //       * Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.
  //       * @param o Object to test.
  //       */
  isSealed(o: any): boolean;

  //     /**
  //       * Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.
  //       * @param o Object to test.
  //       */
  isFrozen(o: any): boolean;

  //     /**
  //       * Returns a value that indicates whether new properties can be added to an object.
  //       * @param o Object to test.
  //       */
  isExtensible(o: any): boolean;

  //     /**
  //       * Returns the names of the enumerable string properties and methods of an object.
  //       * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
  //       */
  keys(o: object): string[];

  /**
   * Copy the values of all of the enumerable own properties from one or more source objects to a
   * target object. Returns the target object.
   * @param target The target object to copy to.
   * @param source The source object from which to copy properties.
   */
  assign<T, U>(target: T, source: U): T & U;
}

// /**
//   * Provides functionality common to all JavaScript objects.
//   */
declare var Object: ObjectConstructor;

// /**
//  * Extracts the type of the 'this' parameter of a function type, or 'unknown' if the function type has no 'this' parameter.
//  */
// type ThisParameterType<T> = T extends (this: unknown, ...args: any[]) => any ? unknown : T extends (this: infer U, ...args: any[]) => any ? U : unknown;

// /////////////////////////////
// /// ECMAScript Internationalization API
// /////////////////////////////

interface CollatorOptions {
  usage?: string;
  localeMatcher?: string;
  numeric?: boolean;
  caseFirst?: string;
  sensitivity?: string;
  ignorePunctuation?: boolean;
}

interface ResolvedCollatorOptions {
  locale: string;
  usage: string;
  sensitivity: string;
  ignorePunctuation: boolean;
  collation: string;
  caseFirst: string;
  numeric: boolean;
}

interface Collator {
  compare(x: string, y: string): number;
  resolvedOptions(): ResolvedCollatorOptions;
}

declare var Collator: {
  new (locales?: string | string[], options?: CollatorOptions): Collator;
  (locales?: string | string[], options?: CollatorOptions): Collator;
  supportedLocalesOf(
    locales: string | string[],
    options?: CollatorOptions
  ): string[];
};

// /**
//  * Removes the 'this' parameter from a function type.
//  */
interface String {
  //     /** Returns a string representation of a string. */
  toString(): string;

  //     /**
  //       * Returns the character at the specified index.
  //       * @param pos The zero-based index of the desired character.
  //       */
  charAt(pos: number): string;

  //     /**
  //       * Returns the Unicode value of the character at the specified location.
  //       * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.
  //       */
  charCodeAt(index: number): number;

  //     /**
  //       * Returns a string that contains the concatenation of two or more strings.
  //       * @param strings The strings to append to the end of the string.
  //       */
  concat(...strings: string[]): string;

  //     /**
  //       * Returns the position of the first occurrence of a substring.
  //       * @param searchString The substring to search for in the string
  //       * @param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
  //       */
  indexOf(searchString: string, position?: number): number;

  //     /**
  //       * Returns the last occurrence of a substring in the string.
  //       * @param searchString The substring to search for.
  //       * @param position The index at which to begin searching. If omitted, the search begins at the end of the string.
  //       */
  lastIndexOf(searchString: string, position?: number): number;

  //     /**
  //       * Determines whether two strings are equivalent in the current locale.
  //       * @param that String to compare to target string
  //       */
  localeCompare(that: string): number;

  //     /**
  //       * Matches a string with a regular expression, and returns an array containing the results of that search.
  //       * @param regexp A variable name or string literal containing the regular expression pattern and flags.
  //       */
  match(regexp: string | RegExp): RegExpMatchArray | null;

  padStart(lengh: number, str: string): string;
  padEnd(lengh: number, str: string): string;

  //     /**
  //       * Replaces text in a string, using a regular expression or search string.
  //       * @param searchValue A string to search for.
  //       * @param replaceValue A string containing the text to replace for every successful match of searchValue in this string.
  //       */
  replace(searchValue: string | RegExp, replaceValue: string): string;

  //     /**
  //       * Replaces text in a string, using a regular expression or search string.
  //       * @param searchValue A string to search for.
  //       * @param replacer A function that returns the replacement text.
  //       */

  //     /**
  //       * Finds the first substring match in a regular expression search.
  //       * @param regexp The regular expression pattern and applicable flags.
  //       */
  search(regexp: string | RegExp): number;

  //     /**
  //       * Returns a section of a string.
  //       * @param start The index to the beginning of the specified portion of stringObj.
  //       * @param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
  //       * If this value is not specified, the substring continues to the end of stringObj.
  //       */
  slice(start?: number, end?: number): string;

  //     /**
  //       * Split a string into substrings using the specified separator and return them as an array.
  //       * @param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
  //       * @param limit A value used to limit the number of elements returned in the array.
  //       */
  split(separator: string | RegExp, limit?: number): string[];

  //     /**
  //       * Returns the substring at the specified location within a String object.
  //       * @param start The zero-based index number indicating the beginning of the substring.
  //       * @param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
  //       * If end is omitted, the characters from start through the end of the original string are returned.
  //       */
  substring(start: number, end?: number): string;

  //     /** Converts all the alphabetic characters in a string to lowercase. */
  toLowerCase(): string;

  //     /** Converts all alphabetic characters to lowercase, taking into account the host environment's current locale. */
  toLocaleLowerCase(): string;

  //     /** Converts all the alphabetic characters in a string to uppercase. */
  toUpperCase(): string;

  //     /**
  //       * Determines whether two strings are equivalent in the current or specified locale.
  //       * @param that String to compare to target string
  //       * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.
  //       * @param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.
  //       */
  localeCompare(
    that: string,
    locales?: string | string[],
    options?: CollatorOptions
  ): number;

  //     /** Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale. */
  //     toLocaleUpperCase(): string;

  //     /** Removes the leading and trailing white space and line terminator characters from a string. */
  trim(): string;

  //     /** Returns the length of a String object. */
  readonly length: number;

  //     // IE extensions
  //     /**
  //       * Gets a substring beginning at the specified location and having the specified length.
  //       * @param from The starting position of the desired substring. The index of the first character in the string is zero.
  //       * @param length The number of characters to include in the returned substring.
  //       */
  substr(from: number, length?: number): string;

  //     /** Returns the primitive value of the specified object. */
  valueOf(): string;

  //[Symbol.iterator](): IterableIterator<string>;

  /** Removes whitespace from the left end of a string. */
  trimLeft(): string;
  /** Removes whitespace from the right end of a string. */
  trimRight(): string;

  includes(substr: string): boolean;
  readonly [index: number]: string;
}

interface StringConstructor {
  new (value?: any): String;
  (value?: any): string;
  readonly prototype: String;
  fromCharCode(...codes: number[]): string;
}

// /**
//   * Allows manipulation and formatting of text strings and determination and location of substrings within strings.
//   */
declare var String: StringConstructor;

interface Boolean {
  /** Returns the primitive value of the specified object. */
  valueOf(): boolean;
}

interface BooleanConstructor {
  // new(value?: any): Boolean;
  (value: unknown): boolean;
  readonly prototype: Boolean;
}

declare var Boolean: BooleanConstructor;

interface NumberFormatOptions {
  localeMatcher?: string;
  style?: string;
  currency?: string;
  currencyDisplay?: string;
  useGrouping?: boolean;
  minimumIntegerDigits?: number;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  minimumSignificantDigits?: number;
  maximumSignificantDigits?: number;
}

interface ResolvedNumberFormatOptions {
  locale: string;
  numberingSystem: string;
  style: string;
  currency?: string;
  currencyDisplay?: string;
  minimumIntegerDigits: number;
  minimumFractionDigits: number;
  maximumFractionDigits: number;
  minimumSignificantDigits?: number;
  maximumSignificantDigits?: number;
  useGrouping: boolean;
}

interface NumberFormat {
  format(value: number): string;
  resolvedOptions(): ResolvedNumberFormatOptions;
}

declare var NumberFormat: {
  new (
    locales?: string | string[],
    options?: NumberFormatOptions
  ): NumberFormat;
  (locales?: string | string[], options?: NumberFormatOptions): NumberFormat;
  supportedLocalesOf(
    locales: string | string[],
    options?: NumberFormatOptions
  ): string[];
};

interface BigInt {
  //     /**
  //       * Returns a string representation of an object.
  //       * @param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.
  //       */
  toString(radix?: number): string;

  //     /**
  //       * Converts a number to a string by using the current or specified locale.
  //       * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
  //       * @param options An object that contains one or more properties that specify comparison options.
  //       */
  toLocaleString(
    locales?: string | string[],
    options?: NumberFormatOptions
  ): string;

  //     /**
  //       * Returns a string representing a number in fixed-point notation.
  //       * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
  //       */
  toFixed(fractionDigits?: number): string;

  //     /**
  //       * Returns a string containing a number represented in exponential notation.
  //       * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
  //       */
  toExponential(fractionDigits?: number): string;

  //     /**
  //       * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
  //       * @param precision Number of significant digits. Must be in the range 1 - 21, inclusive.
  //       */
  toPrecision(precision?: number): string;

  //     /** Returns the primitive value of the specified object. */
  valueOf(): bigint;
}

interface BigIntConstructor {
  new (value?: any): BigInt;
  (value?: any): bigint;
  readonly prototype: BigInt;
}

declare var BigInt: BigIntConstructor;

interface Number {
  //     /**
  //       * Returns a string representation of an object.
  //       * @param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.
  //       */
  toString(radix?: number): string;

  //     /**
  //       * Converts a number to a string by using the current or specified locale.
  //       * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
  //       * @param options An object that contains one or more properties that specify comparison options.
  //       */
  toLocaleString(
    locales?: string | string[],
    options?: NumberFormatOptions
  ): string;

  //     /**
  //       * Returns a string representing a number in fixed-point notation.
  //       * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
  //       */
  toFixed(fractionDigits?: number): string;

  //     /**
  //       * Returns a string containing a number represented in exponential notation.
  //       * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
  //       */
  toExponential(fractionDigits?: number): string;

  //     /**
  //       * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
  //       * @param precision Number of significant digits. Must be in the range 1 - 21, inclusive.
  //       */
  toPrecision(precision?: number): string;

  //     /** Returns the primitive value of the specified object. */
  valueOf(): number;
}

interface NumberConstructor {
  new (value?: any): Number;
  (value?: any): number;
  readonly prototype: Number;

  //     /** The largest number that can be represented in JavaScript. Equal to approximately 1.79E+308. */
  readonly MAX_VALUE: number;

  //     /** The closest number to zero that can be represented in JavaScript. Equal to approximately 5.00E-324. */
  readonly MIN_VALUE: number;

  //     /**
  //       * A value that is not a number.
  //       * In equality comparisons, NaN does not equal any value, including itself. To test whether a value is equivalent to NaN, use the isNaN function.
  //       */
  readonly NaN: number;

  //     /**
  //       * A value that is less than the largest negative number that can be represented in JavaScript.
  //       * JavaScript displays NEGATIVE_INFINITY values as -infinity.
  //       */
  readonly NEGATIVE_INFINITY: number;

  //     /**
  //       * A value greater than the largest number that can be represented in JavaScript.
  //       * JavaScript displays POSITIVE_INFINITY values as infinity.
  //       */
  readonly POSITIVE_INFINITY: number;
}

// /** An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers. */
declare var Number: NumberConstructor;

// interface TemplateStringsArray extends ReadonlyArray<string> {
//     readonly raw: ReadonlyArray<string>;
// }

// /**
//  * The type of import.meta.
//  *
//  * If you need to declare that a given property exists on import.meta,
//  * this type may be augmented via interface merging.
//  */
interface ImportMeta {}

interface Math {
  //     /** The mathematical constant e. This is Euler's number, the base of natural logarithms. */
  readonly E: number;
  //     /** The natural logarithm of 10. */
  readonly LN10: number;
  //     /** The natural logarithm of 2. */
  readonly LN2: number;
  //     /** The base-2 logarithm of e. */
  readonly LOG2E: number;
  //     /** The base-10 logarithm of e. */
  readonly LOG10E: number;
  //     /** Pi. This is the ratio of the circumference of a circle to its diameter. */
  readonly PI: number;
  //     /** The square root of 0.5, or, equivalently, one divided by the square root of 2. */
  readonly SQRT1_2: number;
  //     /** The square root of 2. */
  readonly SQRT2: number;
  //     /**
  //       * Returns the absolute value of a number (the value without regard to whether it is positive or negative).
  //       * For example, the absolute value of -5 is the same as the absolute value of 5.
  //       * @param x A numeric expression for which the absolute value is needed.
  //       */
  abs(x: number): number;
  //     /**
  //       * Returns the arc cosine (or inverse cosine) of a number.
  //       * @param x A numeric expression.
  //       */
  acos(x: number): number;
  //     /**
  //       * Returns the arcsine of a number.
  //       * @param x A numeric expression.
  //       */
  asin(x: number): number;
  //     /**
  //       * Returns the arctangent of a number.
  //       * @param x A numeric expression for which the arctangent is needed.
  //       */
  atan(x: number): number;
  //     /**
  //       * Returns the angle (in radians) from the X axis to a point.
  //       * @param y A numeric expression representing the cartesian y-coordinate.
  //       * @param x A numeric expression representing the cartesian x-coordinate.
  //       */
  atan2(y: number, x: number): number;
  //     /**
  //       * Returns the smallest integer greater than or equal to its numeric argument.
  //       * @param x A numeric expression.
  //       */
  ceil(x: number): number;
  //     /**
  //       * Returns the cosine of a number.
  //       * @param x A numeric expression that contains an angle measured in radians.
  //       */
  cos(x: number): number;
  //     /**
  //       * Returns e (the base of natural logarithms) raised to a power.
  //       * @param x A numeric expression representing the power of e.
  //       */
  exp(x: number): number;
  //     /**
  //       * Returns the greatest integer less than or equal to its numeric argument.
  //       * @param x A numeric expression.
  //       */
  floor(x: number): number;
  //     /**
  //       * Returns the natural logarithm (base e) of a number.
  //       * @param x A numeric expression.
  //       */
  log(x: number): number;
  //     /**
  //       * Returns the larger of a set of supplied numeric expressions.
  //       * @param values Numeric expressions to be evaluated.
  //       */
  max(...values: number[]): number;
  //     /**
  //       * Returns the smaller of a set of supplied numeric expressions.
  //       * @param values Numeric expressions to be evaluated.
  //       */
  min(...values: number[]): number;
  //     /**
  //       * Returns the value of a base expression taken to a specified power.
  //       * @param x The base value of the expression.
  //       * @param y The exponent value of the expression.
  //       */
  pow(x: number, y: number): number;
  //     /** Returns a pseudorandom number between 0 and 1. */
  random(): number;
  //     /**
  //       * Returns a supplied numeric expression rounded to the nearest number.
  //       * @param x The value to be rounded to the nearest number.
  //       */
  round(x: number): number;
  //     /**
  //       * Returns the sine of a number.
  //       * @param x A numeric expression that contains an angle measured in radians.
  //       */
  sin(x: number): number;
  //     /**
  //       * Returns the square root of a number.
  //       * @param x A numeric expression.
  //       */
  sqrt(x: number): number;
  //     /**
  //       * Returns the tangent of a number.
  //       * @param x A numeric expression that contains an angle measured in radians.
  //       */
  tan(x: number): number;
}
// /** An intrinsic object that provides basic mathematics functionality and constants. */
declare var Math: Math;

interface DateTimeFormatOptions {
  localeMatcher?: string;
  weekday?: string;
  era?: string;
  year?: string;
  month?: string;
  day?: string;
  hour?: string;
  minute?: string;
  second?: string;
  timeZoneName?: string;
  formatMatcher?: string;
  hour12?: boolean;
  timeZone?: string;
}

interface ResolvedDateTimeFormatOptions {
  locale: string;
  calendar: string;
  numberingSystem: string;
  timeZone: string;
  hour12?: boolean;
  weekday?: string;
  era?: string;
  year?: string;
  month?: string;
  day?: string;
  hour?: string;
  minute?: string;
  second?: string;
  timeZoneName?: string;
}

// /** Enables basic storage and retrieval of dates and times. */
interface Date {
  //     /** Returns a string representation of a date. The format of the string depends on the locale. */
  toString(): string;
  //     /** Returns a date as a string value. */
  toDateString(): string;
  //     /** Returns a time as a string value. */
  toTimeString(): string;
  //     /** Returns a value as a string value appropriate to the host environment's current locale. */
  toLocaleString(): string;
  //     /** Returns a date as a string value appropriate to the host environment's current locale. */
  toLocaleDateString(): string;
  //     /** Returns a time as a string value appropriate to the host environment's current locale. */
  toLocaleTimeString(): string;
  //     /** Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC. */
  valueOf(): number;
  //     /** Gets the time value in milliseconds. */
  getTime(): number;
  //     /** Gets the year, using local time. */
  getFullYear(): number;
  //     /** Gets the year using Universal Coordinated Time (UTC). */
  getUTCFullYear(): number;
  //     /** Gets the month, using local time. */
  getMonth(): number;
  //     /** Gets the month of a Date object using Universal Coordinated Time (UTC). */
  getUTCMonth(): number;
  //     /** Gets the day-of-the-month, using local time. */
  getDate(): number;
  //     /** Gets the day-of-the-month, using Universal Coordinated Time (UTC). */
  getUTCDate(): number;
  //     /** Gets the day of the week, using local time. */
  getDay(): number;
  //     /** Gets the day of the week using Universal Coordinated Time (UTC). */
  getUTCDay(): number;
  //     /** Gets the hours in a date, using local time. */
  getHours(): number;
  //     /** Gets the hours value in a Date object using Universal Coordinated Time (UTC). */
  getUTCHours(): number;
  //     /** Gets the minutes of a Date object, using local time. */
  getMinutes(): number;
  //     /** Gets the minutes of a Date object using Universal Coordinated Time (UTC). */
  getUTCMinutes(): number;
  //     /** Gets the seconds of a Date object, using local time. */
  getSeconds(): number;
  //     /** Gets the seconds of a Date object using Universal Coordinated Time (UTC). */
  getUTCSeconds(): number;
  //     /** Gets the milliseconds of a Date, using local time. */
  getMilliseconds(): number;
  //     /** Gets the milliseconds of a Date object using Universal Coordinated Time (UTC). */
  getUTCMilliseconds(): number;
  //     /** Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC). */
  getTimezoneOffset(): number;
  //     /**
  //       * Sets the date and time value in the Date object.
  //       * @param time A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 GMT.
  //       */
  setTime(time: number): number;
  //     /**
  //       * Sets the milliseconds value in the Date object using local time.
  //       * @param ms A numeric value equal to the millisecond value.
  //       */
  setMilliseconds(ms: number): number;
  //     /**
  //       * Sets the milliseconds value in the Date object using Universal Coordinated Time (UTC).
  //       * @param ms A numeric value equal to the millisecond value.
  //       */
  setUTCMilliseconds(ms: number): number;

  //     /**
  //       * Sets the seconds value in the Date object using local time.
  //       * @param sec A numeric value equal to the seconds value.
  //       * @param ms A numeric value equal to the milliseconds value.
  //       */
  setSeconds(sec: number, ms?: number): number;
  //     /**
  //       * Sets the seconds value in the Date object using Universal Coordinated Time (UTC).
  //       * @param sec A numeric value equal to the seconds value.
  //       * @param ms A numeric value equal to the milliseconds value.
  //       */
  setUTCSeconds(sec: number, ms?: number): number;
  //     /**
  //       * Sets the minutes value in the Date object using local time.
  //       * @param min A numeric value equal to the minutes value.
  //       * @param sec A numeric value equal to the seconds value.
  //       * @param ms A numeric value equal to the milliseconds value.
  //       */
  setMinutes(min: number, sec?: number, ms?: number): number;
  //     /**
  //       * Sets the minutes value in the Date object using Universal Coordinated Time (UTC).
  //       * @param min A numeric value equal to the minutes value.
  //       * @param sec A numeric value equal to the seconds value.
  //       * @param ms A numeric value equal to the milliseconds value.
  //       */
  setUTCMinutes(min: number, sec?: number, ms?: number): number;
  //     /**
  //       * Sets the hour value in the Date object using local time.
  //       * @param hours A numeric value equal to the hours value.
  //       * @param min A numeric value equal to the minutes value.
  //       * @param sec A numeric value equal to the seconds value.
  //       * @param ms A numeric value equal to the milliseconds value.
  //       */
  setHours(hours: number, min?: number, sec?: number, ms?: number): number;
  //     /**
  //       * Sets the hours value in the Date object using Universal Coordinated Time (UTC).
  //       * @param hours A numeric value equal to the hours value.
  //       * @param min A numeric value equal to the minutes value.
  //       * @param sec A numeric value equal to the seconds value.
  //       * @param ms A numeric value equal to the milliseconds value.
  //       */
  setUTCHours(hours: number, min?: number, sec?: number, ms?: number): number;
  //     /**
  //       * Sets the numeric day-of-the-month value of the Date object using local time.
  //       * @param date A numeric value equal to the day of the month.
  //       */
  setDate(date: number): number;
  //     /**
  //       * Sets the numeric day of the month in the Date object using Universal Coordinated Time (UTC).
  //       * @param date A numeric value equal to the day of the month.
  //       */
  setUTCDate(date: number): number;
  //     /**
  //       * Sets the month value in the Date object using local time.
  //       * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
  //       * @param date A numeric value representing the day of the month. If this value is not supplied, the value from a call to the getDate method is used.
  //       */
  setMonth(month: number, date?: number): number;
  //     /**
  //       * Sets the month value in the Date object using Universal Coordinated Time (UTC).
  //       * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
  //       * @param date A numeric value representing the day of the month. If it is not supplied, the value from a call to the getUTCDate method is used.
  //       */
  setUTCMonth(month: number, date?: number): number;
  //     /**
  //       * Sets the year of the Date object using local time.
  //       * @param year A numeric value for the year.
  //       * @param month A zero-based numeric value for the month (0 for January, 11 for December). Must be specified if numDate is specified.
  //       * @param date A numeric value equal for the day of the month.
  //       */
  setFullYear(year: number, month?: number, date?: number): number;
  //     /**
  //       * Sets the year value in the Date object using Universal Coordinated Time (UTC).
  //       * @param year A numeric value equal to the year.
  //       * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. Must be supplied if numDate is supplied.
  //       * @param date A numeric value equal to the day of the month.
  //       */
  setUTCFullYear(year: number, month?: number, date?: number): number;
  //     /** Returns a date converted to a string using Universal Coordinated Time (UTC). */
  toUTCString(): string;
  //     /** Returns a date as a string value in ISO format. */
  toISOString(): string;
  //     /** Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization. */
  toJSON(key?: any): string;
  //     /**
  //       * Converts a date and time to a string by using the current or specified locale.
  //       * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
  //       * @param options An object that contains one or more properties that specify comparison options.
  //       */
  toLocaleString(
    locales?: string | string[],
    options?: DateTimeFormatOptions
  ): string;
  //     /**
  //       * Converts a date to a string by using the current or specified locale.
  //       * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
  //       * @param options An object that contains one or more properties that specify comparison options.
  //       */
  toLocaleDateString(
    locales?: string | string[],
    options?: DateTimeFormatOptions
  ): string;

  //     /**
  //       * Converts a time to a string by using the current or specified locale.
  //       * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
  //       * @param options An object that contains one or more properties that specify comparison options.
  //       */
  toLocaleTimeString(
    locales?: string | string[],
    options?: DateTimeFormatOptions
  ): string;
}

interface DateTimeFormat {
  format(date?: Date | number): string;
  resolvedOptions(): ResolvedDateTimeFormatOptions;
}

declare var DateTimeFormat: {
  new (
    locales?: string | string[],
    options?: DateTimeFormatOptions
  ): DateTimeFormat;
  (
    locales?: string | string[],
    options?: DateTimeFormatOptions
  ): DateTimeFormat;
  supportedLocalesOf(
    locales: string | string[],
    options?: DateTimeFormatOptions
  ): string[];
};

interface DateConstructor {
  new (): Date;
  new (value: number | string): Date;
  new (
    year: number,
    month: number,
    date?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    ms?: number
  ): Date;
  // (): string;
  readonly prototype: Date;
  //     /**
  //       * Parses a string containing a date, and returns the number of milliseconds between that date and midnight, January 1, 1970.
  //       * @param s A date string
  //       */
  parse(s: string): number;
  //     /**
  //       * Returns the number of milliseconds between midnight, January 1, 1970 Universal Coordinated Time (UTC) (or GMT) and the specified date.
  //       * @param year The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.
  //       * @param month The month as an number between 0 and 11 (January to December).
  //       * @param date The date as an number between 1 and 31.
  //       * @param hours Must be supplied if minutes is supplied. An number from 0 to 23 (midnight to 11pm) that specifies the hour.
  //       * @param minutes Must be supplied if seconds is supplied. An number from 0 to 59 that specifies the minutes.
  //       * @param seconds Must be supplied if milliseconds is supplied. An number from 0 to 59 that specifies the seconds.
  //       * @param ms An number from 0 to 999 that specifies the milliseconds.
  //       */
  UTC(
    year: number,
    month: number,
    date?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    ms?: number
  ): number;
  now(): number;
}

declare var Date: DateConstructor;

class Error {
  name: string;
  message: string;
  stack?: string;
  constructor(message?: string);
}

class EvalError extends Error {}

class RangeError extends Error {}

class ReferenceError extends Error {}

class SyntaxError extends Error {}

class TypeError extends Error {}

class URIError extends Error {}

interface JSON {
  //     /**
  //       * Converts a JavaScript Object Notation (JSON) string into an object.
  //       * @param text A valid JSON string.
  //       * @param reviver A function that transforms the results. This function is called for each member of the object.
  //       * If a member contains nested objects, the nested objects are transformed before the parent object is.
  //       */
  parse(
    text: string,
    reviver?: (this: any, key: string, value: any) => any
  ): object;
  //     /**
  //       * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
  //       * @param value A JavaScript value, usually an object or array, to be converted.
  //       * @param replacer A function that transforms the results.
  //       * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
  //       */
  stringify(
    value: any,
    replacer?: (this: any, key: string, value: any) => any,
    space?: string | number
  ): string;
  //     /**
  //       * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
  //       * @param value A JavaScript value, usually an object or array, to be converted.
  //       * @param replacer An array of strings and numbers that acts as a approved list for selecting the object properties that will be stringified.
  //       * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
  //       */
  stringify(
    value: any,
    replacer?: (number | string)[] | null,
    space?: string | number
  ): string;
}

// /**
//   * An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.
//   */
declare var JSON: JSON;

// /////////////////////////////
// /// ECMAScript Array API (specially handled by compiler)
// /////////////////////////////

interface TypedPropertyDescriptor<T> {
  enumerable?: boolean;
  configurable?: boolean;
  writable?: boolean;
  value?: T;
  get?: () => T;
  set?: (value: T) => void;
}

// declare type PromiseConstructorLike = new <T>(executor: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void) => PromiseLike<T>;

interface PromiseLike<T> {
  //     /**
  //      * Attaches callbacks for the resolution and/or rejection of the Promise.
  //      * @param onfulfilled The callback to execute when the Promise is resolved.
  //      * @param onrejected The callback to execute when the Promise is rejected.
  //      * @returns A Promise for the completion of which ever callback is executed.
  //      */
  then<TResult1, TResult2>(
    onfulfilled?: (value: T) => TResult1 | PromiseLike<TResult1>,
    onrejected?: (reason: any) => TResult2 | PromiseLike<TResult2>
  ): PromiseLike<TResult1 | TResult2>;
}

// /**
//  * Represents the completion of an asynchronous operation
//  */
interface Promise<T> {
  //     /**
  //      * Attaches callbacks for the resolution and/or rejection of the Promise.
  //      * @param onfulfilled The callback to execute when the Promise is resolved.
  //      * @param onrejected The callback to execute when the Promise is rejected.
  //      * @returns A Promise for the completion of which ever callback is executed.
  //      */
  then<TResult1, TResult2>(
    onfulfilled?: (value: T) => TResult1 | PromiseLike<TResult1>,
    onrejected?: (reason: any) => TResult2 | PromiseLike<TResult2>
  ): Promise<TResult1 | TResult2>;

  //     /**
  //      * Attaches a callback for only the rejection of the Promise.
  //      * @param onrejected The callback to execute when the Promise is rejected.
  //      * @returns A Promise for the completion of the callback.
  //      */
  catch<TResult>(
    onrejected: (reason: any) => TResult | PromiseLike<TResult>
  ): Promise<TResult>;
}

interface PromiseConstructor {
  /**
   * A reference to the prototype.
   */
  prototype: Promise<any>;

  /**
   * Creates a new Promise.
   * @param executor A callback used to initialize the promise. This callback is passed two arguments:
   * a resolve callback used to resolve the promise with a value or the result of another promise,
   * and a reject callback used to reject the promise with a provided reason or error.
   */
  <T>(
    executor: (
      resolve: (value?: T | PromiseLike<T>) => void,
      reject: (reason?: any) => void
    ) => void
  ): Promise<T>;

  // /**
  //  * Creates a Promise that is resolved with an array of results when all of the provided Promises
  //  * resolve, or rejected when any Promise is rejected.
  //  * @param values An array of Promises.
  //  * @returns A new Promise.
  //  */
  // all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>, T10 | PromiseLike<T10>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;

  // /**
  //  * Creates a Promise that is resolved with an array of results when all of the provided Promises
  //  * resolve, or rejected when any Promise is rejected.
  //  * @param values An array of Promises.
  //  * @returns A new Promise.
  //  */
  // all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;

  // /**
  //  * Creates a Promise that is resolved with an array of results when all of the provided Promises
  //  * resolve, or rejected when any Promise is rejected.
  //  * @param values An array of Promises.
  //  * @returns A new Promise.
  //  */
  // all<T1, T2, T3, T4, T5, T6, T7, T8>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8]>;

  // /**
  //  * Creates a Promise that is resolved with an array of results when all of the provided Promises
  //  * resolve, or rejected when any Promise is rejected.
  //  * @param values An array of Promises.
  //  * @returns A new Promise.
  //  */
  // all<T1, T2, T3, T4, T5, T6, T7>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>]): Promise<[T1, T2, T3, T4, T5, T6, T7]>;

  // /**
  //  * Creates a Promise that is resolved with an array of results when all of the provided Promises
  //  * resolve, or rejected when any Promise is rejected.
  //  * @param values An array of Promises.
  //  * @returns A new Promise.
  //  */
  // all<T1, T2, T3, T4, T5, T6>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>]): Promise<[T1, T2, T3, T4, T5, T6]>;

  // /**
  //  * Creates a Promise that is resolved with an array of results when all of the provided Promises
  //  * resolve, or rejected when any Promise is rejected.
  //  * @param values An array of Promises.
  //  * @returns A new Promise.
  //  */
  // all<T1, T2, T3, T4, T5>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>, T5 | PromiseLike<T5>]): Promise<[T1, T2, T3, T4, T5]>;

  // /**
  //  * Creates a Promise that is resolved with an array of results when all of the provided Promises
  //  * resolve, or rejected when any Promise is rejected.
  //  * @param values An array of Promises.
  //  * @returns A new Promise.
  //  */
  // all<T1, T2, T3, T4>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>]): Promise<[T1, T2, T3, T4]>;

  // /**
  //  * Creates a Promise that is resolved with an array of results when all of the provided Promises
  //  * resolve, or rejected when any Promise is rejected.
  //  * @param values An array of Promises.
  //  * @returns A new Promise.
  //  */
  // all<T1, T2, T3>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>]): Promise<[T1, T2, T3]>;

  // /**
  //  * Creates a Promise that is resolved with an array of results when all of the provided Promises
  //  * resolve, or rejected when any Promise is rejected.
  //  * @param values An array of Promises.
  //  * @returns A new Promise.
  //  */
  // all<T1, T2>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>]): Promise<[T1, T2]>;

  /**
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  all<T>(values: Array<T | PromiseLike<T>>): Promise<T[]>;

  /**
   * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
   * or rejected.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  race<T>(values: Array<PromiseLike<T> | T>): Promise<T>;

  /**
   * Creates a new rejected promise for the provided reason.
   * @param reason The reason the promise was rejected.
   * @returns A new rejected Promise.
   */
  reject(reason?: any): Promise<any>;

  /**
   * Creates a new resolved promise for the provided value.
   * @param value A promise.
   * @returns A promise whose internal state matches the provided promise.
   */
  resolve<T>(value: T | PromiseLike<T> | undefined): Promise<T>;
}

declare var Promise: PromiseConstructor;

//interface AsyncIterator<T, TReturn = any, TNext = undefined> {
// NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.
//    next(...args: [] | [TNext]): Promise<IteratorResult<T, TReturn>>;
//    return?(value?: TReturn | PromiseLike<TReturn>): Promise<IteratorResult<T, TReturn>>;
//    throw?(e?: any): Promise<IteratorResult<T, TReturn>>;
//}

// interface AsyncIterable<T> {
// [Symbol.asyncIterator](): AsyncIterator<T>;
// }

// interface AsyncIterableIterator<T> extends AsyncIterator<T, any, any> {
// [Symbol.asyncIterator](): AsyncIterableIterator<T>;
// }

interface ArrayLike<T> {
  readonly length: number;
  readonly [n: number]: T;
}

// /**
//   * Represents a raw buffer of binary data, which is used to store data for the
//   * different typed arrays. ArrayBuffers cannot be read from or written to directly,
//   * but can be passed to a typed array or DataView Object to interpret the raw
//   * buffer as needed.
//   */
interface ArrayBuffer {
  //     /**
  //       * Read-only. The length of the ArrayBuffer (in bytes).
  //       */
  readonly byteLength: number;

  //     /**
  //       * Returns a section of an ArrayBuffer.
  //       */
  slice(begin: number, end?: number): ArrayBuffer;
}

// /**
//  * Allowed ArrayBuffer types for the buffer of an ArrayBufferView and related Typed Arrays.
//  */
interface ArrayBufferTypes {
  ArrayBuffer: ArrayBuffer;
}

type ArrayBufferLike = ArrayBuffer;

interface ArrayBufferView {
  //     /**
  //       * The ArrayBuffer instance referenced by the array.
  //       */
  buffer: ArrayBufferLike;

  //     /**
  //       * The length in bytes of the array.
  //       */
  byteLength: number;

  //     /**
  //       * The offset in bytes of the array.
  //       */
  byteOffset: number;
}

interface ArrayBufferConstructor {
  readonly prototype: ArrayBuffer;
  new (byteLength: number): ArrayBuffer;
  isView(arg: ArrayBufferView): true;
  isView(arg: any): false;
}

declare var ArrayBuffer: ArrayBufferConstructor;

interface DataView {
  readonly buffer: ArrayBuffer;
  readonly byteLength: number;
  readonly byteOffset: number;
  //     /**
  //       * Gets the Float32 value at the specified byte offset from the start of the view. There is
  //       * no alignment constraint; multi-byte values may be fetched from any offset.
  //       * @param byteOffset The place in the buffer at which the value should be retrieved.
  //       */
  getFloat32(byteOffset: number, littleEndian?: boolean): number;

  //     /**
  //       * Gets the Float64 value at the specified byte offset from the start of the view. There is
  //       * no alignment constraint; multi-byte values may be fetched from any offset.
  //       * @param byteOffset The place in the buffer at which the value should be retrieved.
  //       */
  getFloat64(byteOffset: number, littleEndian?: boolean): number;

  //     /**
  //       * Gets the Int8 value at the specified byte offset from the start of the view. There is
  //       * no alignment constraint; multi-byte values may be fetched from any offset.
  //       * @param byteOffset The place in the buffer at which the value should be retrieved.
  //       */
  getInt8(byteOffset: number): number;

  //     /**
  //       * Gets the Int16 value at the specified byte offset from the start of the view. There is
  //       * no alignment constraint; multi-byte values may be fetched from any offset.
  //       * @param byteOffset The place in the buffer at which the value should be retrieved.
  //       */
  getInt16(byteOffset: number, littleEndian?: boolean): number;
  //     /**
  //       * Gets the Int32 value at the specified byte offset from the start of the view. There is
  //       * no alignment constraint; multi-byte values may be fetched from any offset.
  //       * @param byteOffset The place in the buffer at which the value should be retrieved.
  //       */
  getInt32(byteOffset: number, littleEndian?: boolean): number;

  //     /**
  //       * Gets the Uint8 value at the specified byte offset from the start of the view. There is
  //       * no alignment constraint; multi-byte values may be fetched from any offset.
  //       * @param byteOffset The place in the buffer at which the value should be retrieved.
  //       */
  getUint8(byteOffset: number): number;

  //     /**
  //       * Gets the Uint16 value at the specified byte offset from the start of the view. There is
  //       * no alignment constraint; multi-byte values may be fetched from any offset.
  //       * @param byteOffset The place in the buffer at which the value should be retrieved.
  //       */
  getUint16(byteOffset: number, littleEndian?: boolean): number;

  //     /**
  //       * Gets the Uint32 value at the specified byte offset from the start of the view. There is
  //       * no alignment constraint; multi-byte values may be fetched from any offset.
  //       * @param byteOffset The place in the buffer at which the value should be retrieved.
  //       */
  getUint32(byteOffset: number, littleEndian?: boolean): number;

  //     /**
  //       * Stores an Float32 value at the specified byte offset from the start of the view.
  //       * @param byteOffset The place in the buffer at which the value should be set.
  //       * @param value The value to set.
  //       * @param littleEndian If false or undefined, a big-endian value should be written,
  //       * otherwise a little-endian value should be written.
  //       */
  setFloat32(byteOffset: number, value: number, littleEndian?: boolean): void;

  //     /**
  //       * Stores an Float64 value at the specified byte offset from the start of the view.
  //       * @param byteOffset The place in the buffer at which the value should be set.
  //       * @param value The value to set.
  //       * @param littleEndian If false or undefined, a big-endian value should be written,
  //       * otherwise a little-endian value should be written.
  //       */
  setFloat64(byteOffset: number, value: number, littleEndian?: boolean): void;

  //     /**
  //       * Stores an Int8 value at the specified byte offset from the start of the view.
  //       * @param byteOffset The place in the buffer at which the value should be set.
  //       * @param value The value to set.
  //       */
  setInt8(byteOffset: number, value: number): void;

  //     /**
  //       * Stores an Int16 value at the specified byte offset from the start of the view.
  //       * @param byteOffset The place in the buffer at which the value should be set.
  //       * @param value The value to set.
  //       * @param littleEndian If false or undefined, a big-endian value should be written,
  //       * otherwise a little-endian value should be written.
  //       */
  setInt16(byteOffset: number, value: number, littleEndian?: boolean): void;

  //     /**
  //       * Stores an Int32 value at the specified byte offset from the start of the view.
  //       * @param byteOffset The place in the buffer at which the value should be set.
  //       * @param value The value to set.
  //       * @param littleEndian If false or undefined, a big-endian value should be written,
  //       * otherwise a little-endian value should be written.
  //       */
  setInt32(byteOffset: number, value: number, littleEndian?: boolean): void;

  //     /**
  //       * Stores an Uint8 value at the specified byte offset from the start of the view.
  //       * @param byteOffset The place in the buffer at which the value should be set.
  //       * @param value The value to set.
  //       */
  setUint8(byteOffset: number, value: number): void;

  //     /**
  //       * Stores an Uint16 value at the specified byte offset from the start of the view.
  //       * @param byteOffset The place in the buffer at which the value should be set.
  //       * @param value The value to set.
  //       * @param littleEndian If false or undefined, a big-endian value should be written,
  //       * otherwise a little-endian value should be written.
  //       */
  setUint16(byteOffset: number, value: number, littleEndian?: boolean): void;

  //     /**
  //       * Stores an Uint32 value at the specified byte offset from the start of the view.
  //       * @param byteOffset The place in the buffer at which the value should be set.
  //       * @param value The value to set.
  //       * @param littleEndian If false or undefined, a big-endian value should be written,
  //       * otherwise a little-endian value should be written.
  //       */
  setUint32(byteOffset: number, value: number, littleEndian?: boolean): void;
}

interface DataViewConstructor {
  new (
    buffer: ArrayBufferLike,
    byteOffset?: number,
    byteLength?: number
  ): DataView;
}

declare var DataView: DataViewConstructor;

// /**
//   * A typed array of 8-bit integer values. The contents are initialized to 0. If the requested
//   * number of bytes could not be allocated an exception is raised.
//   */
interface Int8Array {
  //     /**
  //       * The size in bytes of each element in the array.
  //       */
  readonly BYTES_PER_ELEMENT: number;

  //     /**
  //       * The ArrayBuffer instance referenced by the array.
  //       */
  readonly buffer: ArrayBufferLike;

  //     /**
  //       * The length in bytes of the array.
  //       */
  readonly byteLength: number;

  //     /**
  //       * The offset in bytes of the array.
  //       */
  readonly byteOffset: number;

  //     /**
  //       * Returns the this object after copying a section of the array identified by start and end
  //       * to the same array starting at position target
  //       * @param target If target is negative, it is treated as length+target where length is the
  //       * length of the array.
  //       * @param start If start is negative, it is treated as length+start. If end is negative, it
  //       * is treated as length+end.
  //       * @param end If not specified, length of the this object is used as its default value.
  //       */
  copyWithin(target: number, start: number, end?: number): this;

  //     /**
  //       * Determines whether all the members of an array satisfy the specified test.
  //       * @param callbackfn A function that accepts up to three arguments. The every method calls
  //       * the callbackfn function for each element in array1 until the callbackfn returns false,
  //       * or until the end of the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  every(
    callbackfn: (value: number, index: number, array: Int8Array) => boolean,
    thisArg?: any
  ): boolean;

  //     /**
  //         * Returns the this object after filling the section identified by start and end with value
  //         * @param value value to fill array section with
  //         * @param start index to start filling the array at. If start is negative, it is treated as
  //         * length+start where length is the length of the array.
  //         * @param end index to stop filling the array at. If end is negative, it is treated as
  //         * length+end.
  //         */
  fill(value: number, start?: number, end?: number): this;

  //     /**
  //       * Returns the elements of an array that meet the condition specified in a callback function.
  //       * @param callbackfn A function that accepts up to three arguments. The filter method calls
  //       * the callbackfn function one time for each element in the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  filter(
    callbackfn: (value: number, index: number, array: Int8Array) => any,
    thisArg?: any
  ): Int8Array;

  //     /**
  //       * Returns the value of the first element in the array where predicate is true, and undefined
  //       * otherwise.
  //       * @param predicate find calls predicate once for each element of the array, in ascending
  //       * order, until it finds one where predicate returns true. If such an element is found, find
  //       * immediately returns that element value. Otherwise, find returns undefined.
  //       * @param thisArg If provided, it will be used as the this value for each invocation of
  //       * predicate. If it is not provided, undefined is used instead.
  //       */
  find(
    predicate: (value: number, index: number, obj: Int8Array) => boolean,
    thisArg?: any
  ): number | undefined;

  //     /**
  //       * Returns the index of the first element in the array where predicate is true, and -1
  //       * otherwise.
  //       * @param predicate find calls predicate once for each element of the array, in ascending
  //       * order, until it finds one where predicate returns true. If such an element is found,
  //       * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
  //       * @param thisArg If provided, it will be used as the this value for each invocation of
  //       * predicate. If it is not provided, undefined is used instead.
  //       */
  findIndex(
    predicate: (value: number, index: number, obj: Int8Array) => boolean,
    thisArg?: any
  ): number;

  //     /**
  //       * Performs the specified action for each element in an array.
  //       * @param callbackfn  A function that accepts up to three arguments. forEach calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  forEach(
    callbackfn: (value: number, index: number, array: Int8Array) => void,
    thisArg?: any
  ): void;

  //     /**
  //       * Returns the index of the first occurrence of a value in an array.
  //       * @param searchElement The value to locate in the array.
  //       * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
  //       *  search starts at index 0.
  //       */
  indexOf(searchElement: number, fromIndex?: number): number;

  //     /**
  //       * Adds all the elements of an array separated by the specified separator string.
  //       * @param separator A string used to separate one element of an array from the next in the
  //       * resulting String. If omitted, the array elements are separated with a comma.
  //       */
  join(separator?: string): string;

  //     /**
  //       * Returns the index of the last occurrence of a value in an array.
  //       * @param searchElement The value to locate in the array.
  //       * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
  //       * search starts at index 0.
  //       */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  //     /**
  //       * The length of the array.
  //       */
  readonly length: number;

  //     /**
  //       * Calls a defined callback function on each element of an array, and returns an array that
  //       * contains the results.
  //       * @param callbackfn A function that accepts up to three arguments. The map method calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  map(
    callbackfn: (value: number, index: number, array: Int8Array) => number,
    thisArg?: any
  ): Int8Array;

  //     /**
  //       * Calls the specified callback function for all the elements in an array. The return value of
  //       * the callback function is the accumulated result, and is provided as an argument in the next
  //       * call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an argument
  //       * instead of an array value.
  //       */
  // reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int8Array) => number, initialValue?: number): number;

  //     /**
  //       * Calls the specified callback function for all the elements in an array. The return value of
  //       * the callback function is the accumulated result, and is provided as an argument in the next
  //       * call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an argument
  //       * instead of an array value.
  //       */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Int8Array
    ) => U,
    initialValue?: U
  ): U;

  //     /**
  //       * Calls the specified callback function for all the elements in an array, in descending order.
  //       * The return value of the callback function is the accumulated result, and is provided as an
  //       * argument in the next call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
  //       * the callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an
  //       * argument instead of an array value.
  //       */
  //     reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int8Array) => number): number;
  //     reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int8Array) => number, initialValue: number): number;

  //     /**
  //       * Calls the specified callback function for all the elements in an array, in descending order.
  //       * The return value of the callback function is the accumulated result, and is provided as an
  //       * argument in the next call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
  //       * the callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an argument
  //       * instead of an array value.
  //       */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Int8Array
    ) => U,
    initialValue?: U
  ): U;

  //     /**
  //       * Reverses the elements in an Array.
  //       */
  reverse(): Int8Array;

  //     /**
  //       * Sets a value or an array of values.
  //       * @param array A typed or untyped array of values to set.
  //       * @param offset The index in the current array at which the values are to be written.
  //       */
  set(array: ArrayLike<number>, offset?: number): void;

  //     /**
  //       * Returns a section of an array.
  //       * @param start The beginning of the specified portion of the array.
  //       * @param end The end of the specified portion of the array.
  //       */
  slice(start?: number, end?: number): Int8Array;

  //     /**
  //       * Determines whether the specified callback function returns true for any element of an array.
  //       * @param callbackfn A function that accepts up to three arguments. The some method calls the
  //       * callbackfn function for each element in array1 until the callbackfn returns true, or until
  //       * the end of the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  some(
    callbackfn: (value: number, index: number, array: Int8Array) => boolean,
    thisArg?: any
  ): boolean;

  //     /**
  //       * Sorts an array.
  //       * @param compareFn The name of the function used to determine the order of the elements. If
  //       * omitted, the elements are sorted in ascending, ASCII character order.
  //       */
  sort(compareFn?: (a: number, b: number) => number): this;

  //     /**
  //       * Gets a new Int8Array view of the ArrayBuffer store for this array, referencing the elements
  //       * at begin, inclusive, up to end, exclusive.
  //       * @param begin The index of the beginning of the array.
  //       * @param end The index of the end of the array.
  //       */
  subarray(begin: number, end?: number): Int8Array;

  //     /**
  //       * Converts a number to a string by using the current locale.
  //       */
  toLocaleString(): string;

  //     /**
  //       * Returns a string representation of an array.
  //       */
  toString(): string;
  //[Symbol.iterator](): IterableIterator<number>;
  /**
   * Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;
  /**
   * Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;
  /**
   * Returns an list of values in the array
   */
  values(): IterableIterator<number>;
  [index: number]: number;
}

interface Int8ArrayConstructor {
  readonly prototype: Int8Array;
  // new (length: number): Int8Array;
  new (
    arrayOrArrayBuffer:
      | ArrayLike<number>
      | ArrayBufferLike
      | number
      | Iterable<number>,
    bufferOffset?: number,
    length?: number
  ): Int8Array;

  //     /**
  //       * The size in bytes of each element in the array.
  //       */
  readonly BYTES_PER_ELEMENT: number;

  //     /**
  //       * Returns a new array from a set of elements.
  //       * @param items A set of elements to include in the new array object.
  //       */
  of(...items: number[]): Int8Array;

  //     /**
  //       * Creates an array from an array-like or iterable object.
  //       * @param arrayLike An array-like or iterable object to convert to an array.
  //       */
  from(arrayLike: ArrayLike<number>): Int8Array;

  //     /**
  //       * Creates an array from an array-like or iterable object.
  //       * @param arrayLike An array-like or iterable object to convert to an array.
  //       * @param mapfn A mapping function to call on every element of the array.
  //       * @param thisArg Value of 'this' used to invoke the mapfn.
  //       */
  from<T>(
    arrayLike: ArrayLike<T>,
    mapfn: (v: T, k: number) => number,
    thisArg?: any
  ): Int8Array;
}

declare var Int8Array: Int8ArrayConstructor;

// /**
//   * A typed array of 8-bit unsigned integer values. The contents are initialized to 0. If the
//   * requested number of bytes could not be allocated an exception is raised.
//   */
interface Uint8Array {
  //     /**
  //       * The size in bytes of each element in the array.
  //       */
  readonly BYTES_PER_ELEMENT: number;

  //     /**
  //       * The ArrayBuffer instance referenced by the array.
  //       */
  readonly buffer: ArrayBufferLike;

  //     /**
  //       * The length in bytes of the array.
  //       */
  readonly byteLength: number;

  //     /**
  //       * The offset in bytes of the array.
  //       */
  readonly byteOffset: number;

  //     /**
  //       * Returns the this object after copying a section of the array identified by start and end
  //       * to the same array starting at position target
  //       * @param target If target is negative, it is treated as length+target where length is the
  //       * length of the array.
  //       * @param start If start is negative, it is treated as length+start. If end is negative, it
  //       * is treated as length+end.
  //       * @param end If not specified, length of the this object is used as its default value.
  //       */
  copyWithin(target: number, start: number, end?: number): this;

  //     /**
  //       * Determines whether all the members of an array satisfy the specified test.
  //       * @param callbackfn A function that accepts up to three arguments. The every method calls
  //       * the callbackfn function for each element in array1 until the callbackfn returns false,
  //       * or until the end of the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  every(
    callbackfn: (value: number, index: number, array: Uint8Array) => boolean,
    thisArg?: any
  ): boolean;

  //     /**
  //         * Returns the this object after filling the section identified by start and end with value
  //         * @param value value to fill array section with
  //         * @param start index to start filling the array at. If start is negative, it is treated as
  //         * length+start where length is the length of the array.
  //         * @param end index to stop filling the array at. If end is negative, it is treated as
  //         * length+end.
  //         */
  fill(value: number, start?: number, end?: number): this;

  //     /**
  //       * Returns the elements of an array that meet the condition specified in a callback function.
  //       * @param callbackfn A function that accepts up to three arguments. The filter method calls
  //       * the callbackfn function one time for each element in the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  filter(
    callbackfn: (value: number, index: number, array: Uint8Array) => any,
    thisArg?: any
  ): Uint8Array;

  //     /**
  //       * Returns the value of the first element in the array where predicate is true, and undefined
  //       * otherwise.
  //       * @param predicate find calls predicate once for each element of the array, in ascending
  //       * order, until it finds one where predicate returns true. If such an element is found, find
  //       * immediately returns that element value. Otherwise, find returns undefined.
  //       * @param thisArg If provided, it will be used as the this value for each invocation of
  //       * predicate. If it is not provided, undefined is used instead.
  //       */
  find(
    predicate: (value: number, index: number, obj: Uint8Array) => boolean,
    thisArg?: any
  ): number | undefined;

  //     /**
  //       * Returns the index of the first element in the array where predicate is true, and -1
  //       * otherwise.
  //       * @param predicate find calls predicate once for each element of the array, in ascending
  //       * order, until it finds one where predicate returns true. If such an element is found,
  //       * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
  //       * @param thisArg If provided, it will be used as the this value for each invocation of
  //       * predicate. If it is not provided, undefined is used instead.
  //       */
  findIndex(
    predicate: (value: number, index: number, obj: Uint8Array) => boolean,
    thisArg?: any
  ): number;

  //     /**
  //       * Performs the specified action for each element in an array.
  //       * @param callbackfn  A function that accepts up to three arguments. forEach calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  forEach(
    callbackfn: (value: number, index: number, array: Uint8Array) => void,
    thisArg?: any
  ): void;

  //     /**
  //       * Returns the index of the first occurrence of a value in an array.
  //       * @param searchElement The value to locate in the array.
  //       * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
  //       *  search starts at index 0.
  //       */
  indexOf(searchElement: number, fromIndex?: number): number;

  //     /**
  //       * Adds all the elements of an array separated by the specified separator string.
  //       * @param separator A string used to separate one element of an array from the next in the
  //       * resulting String. If omitted, the array elements are separated with a comma.
  //       */
  join(separator?: string): string;

  //     /**
  //       * Returns the index of the last occurrence of a value in an array.
  //       * @param searchElement The value to locate in the array.
  //       * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
  //       * search starts at index 0.
  //       */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  //     /**
  //       * The length of the array.
  //       */
  readonly length: number;

  //     /**
  //       * Calls a defined callback function on each element of an array, and returns an array that
  //       * contains the results.
  //       * @param callbackfn A function that accepts up to three arguments. The map method calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  map(
    callbackfn: (value: number, index: number, array: Uint8Array) => number,
    thisArg?: any
  ): Uint8Array;

  //     /**
  //       * Calls the specified callback function for all the elements in an array. The return value of
  //       * the callback function is the accumulated result, and is provided as an argument in the next
  //       * call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an argument
  //       * instead of an array value.
  //       */
  //     reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number): number;
  //     reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number, initialValue: number): number;

  //     /**
  //       * Calls the specified callback function for all the elements in an array. The return value of
  //       * the callback function is the accumulated result, and is provided as an argument in the next
  //       * call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an argument
  //       * instead of an array value.
  //       */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint8Array
    ) => U,
    initialValue?: U
  ): U;

  //     /**
  //       * Calls the specified callback function for all the elements in an array, in descending order.
  //       * The return value of the callback function is the accumulated result, and is provided as an
  //       * argument in the next call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
  //       * the callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an
  //       * argument instead of an array value.
  //       */
  //     reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number): number;
  //     reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number, initialValue: number): number;

  //     /**
  //       * Calls the specified callback function for all the elements in an array, in descending order.
  //       * The return value of the callback function is the accumulated result, and is provided as an
  //       * argument in the next call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
  //       * the callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an argument
  //       * instead of an array value.
  //       */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint8Array
    ) => U,
    initialValue?: U
  ): U;

  //     /**
  //       * Reverses the elements in an Array.
  //       */
  reverse(): Uint8Array;

  //     /**
  //       * Sets a value or an array of values.
  //       * @param array A typed or untyped array of values to set.
  //       * @param offset The index in the current array at which the values are to be written.
  //       */
  set(array: ArrayLike<number>, offset?: number): void;

  //     /**
  //       * Returns a section of an array.
  //       * @param start The beginning of the specified portion of the array.
  //       * @param end The end of the specified portion of the array.
  //       */
  slice(start?: number, end?: number): Uint8Array;

  //     /**
  //       * Determines whether the specified callback function returns true for any element of an array.
  //       * @param callbackfn A function that accepts up to three arguments. The some method calls the
  //       * callbackfn function for each element in array1 until the callbackfn returns true, or until
  //       * the end of the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  some(
    callbackfn: (value: number, index: number, array: Uint8Array) => boolean,
    thisArg?: any
  ): boolean;

  //     /**
  //       * Sorts an array.
  //       * @param compareFn The name of the function used to determine the order of the elements. If
  //       * omitted, the elements are sorted in ascending, ASCII character order.
  //       */
  sort(compareFn?: (a: number, b: number) => number): this;

  //     /**
  //       * Gets a new Uint8Array view of the ArrayBuffer store for this array, referencing the elements
  //       * at begin, inclusive, up to end, exclusive.
  //       * @param begin The index of the beginning of the array.
  //       * @param end The index of the end of the array.
  //       */
  subarray(begin: number, end?: number): Uint8Array;

  //     /**
  //       * Converts a number to a string by using the current locale.
  //       */
  toLocaleString(): string;

  //     /**
  //       * Returns a string representation of an array.
  //       */
  toString(): string;
  // [Symbol.iterator](): IterableIterator<number>;
  /**
   * Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;
  /**
   * Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;
  /**
   * Returns an list of values in the array
   */
  values(): IterableIterator<number>;

  [index: number]: number;
}

interface Uint8ArrayConstructor {
  readonly prototype: Uint8Array;
  // new (length: number): Uint8Array;
  new (
    arrayOrArrayBuffer:
      | ArrayLike<number>
      | ArrayBufferLike
      | number
      | Iterable<number>,
    byteOffset: number,
    length?: number
  ): Uint8Array;

  //     /**
  //       * The size in bytes of each element in the array.
  //       */
  readonly BYTES_PER_ELEMENT: number;

  //     /**
  //       * Returns a new array from a set of elements.
  //       * @param items A set of elements to include in the new array object.
  //       */
  of(...items: number[]): Uint8Array;

  //     /**
  //       * Creates an array from an array-like or iterable object.
  //       * @param arrayLike An array-like or iterable object to convert to an array.
  //       */
  from(arrayLike: ArrayLike<number>): Uint8Array;

  //     /**
  //       * Creates an array from an array-like or iterable object.
  //       * @param arrayLike An array-like or iterable object to convert to an array.
  //       * @param mapfn A mapping function to call on every element of the array.
  //       * @param thisArg Value of 'this' used to invoke the mapfn.
  //       */
  from<T>(
    arrayLike: ArrayLike<T>,
    mapfn: (v: T, k: number) => number,
    thisArg?: any
  ): Uint8Array;
}

declare var Uint8Array: Uint8ArrayConstructor;

// /**
//   * A typed array of 8-bit unsigned integer (clamped) values. The contents are initialized to 0.
//   * If the requested number of bytes could not be allocated an exception is raised.
//   */
interface Uint8ClampedArray {
  //     /**
  //       * The size in bytes of each element in the array.
  //       */
  readonly BYTES_PER_ELEMENT: number;

  //     /**
  //       * The ArrayBuffer instance referenced by the array.
  //       */
  readonly buffer: ArrayBufferLike;

  //     /**
  //       * The length in bytes of the array.
  //       */
  readonly byteLength: number;

  //     /**
  //       * The offset in bytes of the array.
  //       */
  readonly byteOffset: number;

  //     /**
  //       * Returns the this object after copying a section of the array identified by start and end
  //       * to the same array starting at position target
  //       * @param target If target is negative, it is treated as length+target where length is the
  //       * length of the array.
  //       * @param start If start is negative, it is treated as length+start. If end is negative, it
  //       * is treated as length+end.
  //       * @param end If not specified, length of the this object is used as its default value.
  //       */
  copyWithin(target: number, start: number, end?: number): this;

  //     /**
  //       * Determines whether all the members of an array satisfy the specified test.
  //       * @param callbackfn A function that accepts up to three arguments. The every method calls
  //       * the callbackfn function for each element in array1 until the callbackfn returns false,
  //       * or until the end of the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  every(
    callbackfn: (
      value: number,
      index: number,
      array: Uint8ClampedArray
    ) => boolean,
    thisArg?: any
  ): boolean;

  //     /**
  //         * Returns the this object after filling the section identified by start and end with value
  //         * @param value value to fill array section with
  //         * @param start index to start filling the array at. If start is negative, it is treated as
  //         * length+start where length is the length of the array.
  //         * @param end index to stop filling the array at. If end is negative, it is treated as
  //         * length+end.
  //         */
  fill(value: number, start?: number, end?: number): this;

  //     /**
  //       * Returns the elements of an array that meet the condition specified in a callback function.
  //       * @param callbackfn A function that accepts up to three arguments. The filter method calls
  //       * the callbackfn function one time for each element in the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  filter(
    callbackfn: (value: number, index: number, array: Uint8ClampedArray) => any,
    thisArg?: any
  ): Uint8ClampedArray;

  //     /**
  //       * Returns the value of the first element in the array where predicate is true, and undefined
  //       * otherwise.
  //       * @param predicate find calls predicate once for each element of the array, in ascending
  //       * order, until it finds one where predicate returns true. If such an element is found, find
  //       * immediately returns that element value. Otherwise, find returns undefined.
  //       * @param thisArg If provided, it will be used as the this value for each invocation of
  //       * predicate. If it is not provided, undefined is used instead.
  //       */
  find(
    predicate: (
      value: number,
      index: number,
      obj: Uint8ClampedArray
    ) => boolean,
    thisArg?: any
  ): number | undefined;

  //     /**
  //       * Returns the index of the first element in the array where predicate is true, and -1
  //       * otherwise.
  //       * @param predicate find calls predicate once for each element of the array, in ascending
  //       * order, until it finds one where predicate returns true. If such an element is found,
  //       * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
  //       * @param thisArg If provided, it will be used as the this value for each invocation of
  //       * predicate. If it is not provided, undefined is used instead.
  //       */
  findIndex(
    predicate: (
      value: number,
      index: number,
      obj: Uint8ClampedArray
    ) => boolean,
    thisArg?: any
  ): number;

  //     /**
  //       * Performs the specified action for each element in an array.
  //       * @param callbackfn  A function that accepts up to three arguments. forEach calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  forEach(
    callbackfn: (
      value: number,
      index: number,
      array: Uint8ClampedArray
    ) => void,
    thisArg?: any
  ): void;

  //     /**
  //       * Returns the index of the first occurrence of a value in an array.
  //       * @param searchElement The value to locate in the array.
  //       * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
  //       *  search starts at index 0.
  //       */
  indexOf(searchElement: number, fromIndex?: number): number;

  //     /**
  //       * Adds all the elements of an array separated by the specified separator string.
  //       * @param separator A string used to separate one element of an array from the next in the
  //       * resulting String. If omitted, the array elements are separated with a comma.
  //       */
  join(separator?: string): string;

  //     /**
  //       * Returns the index of the last occurrence of a value in an array.
  //       * @param searchElement The value to locate in the array.
  //       * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
  //       * search starts at index 0.
  //       */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  //     /**
  //       * The length of the array.
  //       */
  readonly length: number;

  //     /**
  //       * Calls a defined callback function on each element of an array, and returns an array that
  //       * contains the results.
  //       * @param callbackfn A function that accepts up to three arguments. The map method calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  map(
    callbackfn: (
      value: number,
      index: number,
      array: Uint8ClampedArray
    ) => number,
    thisArg?: any
  ): Uint8ClampedArray;

  //     /**
  //       * Calls the specified callback function for all the elements in an array. The return value of
  //       * the callback function is the accumulated result, and is provided as an argument in the next
  //       * call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an argument
  //       * instead of an array value.
  //       */
  // reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => number): number;
  //     reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => number, initialValue: number): number;

  //     /**
  //       * Calls the specified callback function for all the elements in an array. The return value of
  //       * the callback function is the accumulated result, and is provided as an argument in the next
  //       * call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an argument
  //       * instead of an array value.
  //       */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint8ClampedArray
    ) => U,
    initialValue?: U
  ): U;

  //     /**
  //       * Calls the specified callback function for all the elements in an array, in descending order.
  //       * The return value of the callback function is the accumulated result, and is provided as an
  //       * argument in the next call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
  //       * the callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an
  //       * argument instead of an array value.
  //       */
  //     reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => number): number;
  //     reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => number, initialValue: number): number;

  //     /**
  //       * Calls the specified callback function for all the elements in an array, in descending order.
  //       * The return value of the callback function is the accumulated result, and is provided as an
  //       * argument in the next call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
  //       * the callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an argument
  //       * instead of an array value.
  //       */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint8ClampedArray
    ) => U,
    initialValue?: U
  ): U;

  //     /**
  //       * Reverses the elements in an Array.
  //       */
  reverse(): Uint8ClampedArray;

  //     /**
  //       * Sets a value or an array of values.
  //       * @param array A typed or untyped array of values to set.
  //       * @param offset The index in the current array at which the values are to be written.
  //       */
  set(array: ArrayLike<number>, offset?: number): void;

  //     /**
  //       * Returns a section of an array.
  //       * @param start The beginning of the specified portion of the array.
  //       * @param end The end of the specified portion of the array.
  //       */
  slice(start?: number, end?: number): Uint8ClampedArray;

  //     /**
  //       * Determines whether the specified callback function returns true for any element of an array.
  //       * @param callbackfn A function that accepts up to three arguments. The some method calls the
  //       * callbackfn function for each element in array1 until the callbackfn returns true, or until
  //       * the end of the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  some(
    callbackfn: (
      value: number,
      index: number,
      array: Uint8ClampedArray
    ) => boolean,
    thisArg?: any
  ): boolean;

  //     /**
  //       * Sorts an array.
  //       * @param compareFn The name of the function used to determine the order of the elements. If
  //       * omitted, the elements are sorted in ascending, ASCII character order.
  //       */
  sort(compareFn?: (a: number, b: number) => number): this;

  //     /**
  //       * Gets a new Uint8ClampedArray view of the ArrayBuffer store for this array, referencing the elements
  //       * at begin, inclusive, up to end, exclusive.
  //       * @param begin The index of the beginning of the array.
  //       * @param end The index of the end of the array.
  //       */
  subarray(begin: number, end?: number): Uint8ClampedArray;

  //     /**
  //       * Converts a number to a string by using the current locale.
  //       */
  toLocaleString(): string;

  //     /**
  //       * Returns a string representation of an array.
  //       */
  toString(): string;
  // [Symbol.iterator](): IterableIterator<number>;
  /**
   * Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;
  /**
   * Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;
  /**
   * Returns an list of values in the array
   */
  values(): IterableIterator<number>;
  [index: number]: number;
}

interface Uint8ClampedArrayConstructor {
  readonly prototype: Uint8ClampedArray;
  // new (length: number): Uint8ClampedArray;
  new (
    arrayOrArrayBuffer:
      | ArrayLike<number>
      | ArrayBufferLike
      | number
      | Iterable<number>,
    byteOffset?: number,
    length?: number
  ): Uint8ClampedArray;
  // new (
  //   buffer: ArrayBufferLike,
  //   byteOffset: number,
  //   length?: number
  // ): Uint8ClampedArray;

  //     /**
  //       * The size in bytes of each element in the array.
  //       */
  readonly BYTES_PER_ELEMENT: number;

  //     /**
  //       * Returns a new array from a set of elements.
  //       * @param items A set of elements to include in the new array object.
  //       */
  of(...items: number[]): Uint8ClampedArray;

  //     /**
  //       * Creates an array from an array-like or iterable object.
  //       * @param arrayLike An array-like or iterable object to convert to an array.
  //       */
  from(arrayLike: ArrayLike<number>): Uint8ClampedArray;

  //     /**
  //       * Creates an array from an array-like or iterable object.
  //       * @param arrayLike An array-like or iterable object to convert to an array.
  //       * @param mapfn A mapping function to call on every element of the array.
  //       * @param thisArg Value of 'this' used to invoke the mapfn.
  //       */
  from<T>(
    arrayLike: ArrayLike<T>,
    mapfn: (v: T, k: number) => number,
    thisArg?: any
  ): Uint8ClampedArray;
}
declare var Uint8ClampedArray: Uint8ClampedArrayConstructor;

// /**
//   * A typed array of 16-bit signed integer values. The contents are initialized to 0. If the
//   * requested number of bytes could not be allocated an exception is raised.
//   */
interface Int16Array {
  //     /**
  //       * The size in bytes of each element in the array.
  //       */
  readonly BYTES_PER_ELEMENT: number;

  //     /**
  //       * The ArrayBuffer instance referenced by the array.
  //       */
  readonly buffer: ArrayBufferLike;

  //     /**
  //       * The length in bytes of the array.
  //       */
  readonly byteLength: number;

  //     /**
  //       * The offset in bytes of the array.
  //       */
  readonly byteOffset: number;

  //     /**
  //       * Returns the this object after copying a section of the array identified by start and end
  //       * to the same array starting at position target
  //       * @param target If target is negative, it is treated as length+target where length is the
  //       * length of the array.
  //       * @param start If start is negative, it is treated as length+start. If end is negative, it
  //       * is treated as length+end.
  //       * @param end If not specified, length of the this object is used as its default value.
  //       */
  copyWithin(target: number, start: number, end?: number): this;

  //     /**
  //       * Determines whether all the members of an array satisfy the specified test.
  //       * @param callbackfn A function that accepts up to three arguments. The every method calls
  //       * the callbackfn function for each element in array1 until the callbackfn returns false,
  //       * or until the end of the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  every(
    callbackfn: (value: number, index: number, array: Int16Array) => boolean,
    thisArg?: any
  ): boolean;

  //     /**
  //         * Returns the this object after filling the section identified by start and end with value
  //         * @param value value to fill array section with
  //         * @param start index to start filling the array at. If start is negative, it is treated as
  //         * length+start where length is the length of the array.
  //         * @param end index to stop filling the array at. If end is negative, it is treated as
  //         * length+end.
  //         */
  fill(value: number, start?: number, end?: number): this;

  //     /**
  //       * Returns the elements of an array that meet the condition specified in a callback function.
  //       * @param callbackfn A function that accepts up to three arguments. The filter method calls
  //       * the callbackfn function one time for each element in the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  filter(
    callbackfn: (value: number, index: number, array: Int16Array) => any,
    thisArg?: any
  ): Int16Array;

  //     /**
  //       * Returns the value of the first element in the array where predicate is true, and undefined
  //       * otherwise.
  //       * @param predicate find calls predicate once for each element of the array, in ascending
  //       * order, until it finds one where predicate returns true. If such an element is found, find
  //       * immediately returns that element value. Otherwise, find returns undefined.
  //       * @param thisArg If provided, it will be used as the this value for each invocation of
  //       * predicate. If it is not provided, undefined is used instead.
  //       */
  find(
    predicate: (value: number, index: number, obj: Int16Array) => boolean,
    thisArg?: any
  ): number | undefined;

  //     /**
  //       * Returns the index of the first element in the array where predicate is true, and -1
  //       * otherwise.
  //       * @param predicate find calls predicate once for each element of the array, in ascending
  //       * order, until it finds one where predicate returns true. If such an element is found,
  //       * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
  //       * @param thisArg If provided, it will be used as the this value for each invocation of
  //       * predicate. If it is not provided, undefined is used instead.
  //       */
  findIndex(
    predicate: (value: number, index: number, obj: Int16Array) => boolean,
    thisArg?: any
  ): number;

  //     /**
  //       * Performs the specified action for each element in an array.
  //       * @param callbackfn  A function that accepts up to three arguments. forEach calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  forEach(
    callbackfn: (value: number, index: number, array: Int16Array) => void,
    thisArg?: any
  ): void;
  //     /**
  //       * Returns the index of the first occurrence of a value in an array.
  //       * @param searchElement The value to locate in the array.
  //       * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
  //       *  search starts at index 0.
  //       */
  indexOf(searchElement: number, fromIndex?: number): number;

  //     /**
  //       * Adds all the elements of an array separated by the specified separator string.
  //       * @param separator A string used to separate one element of an array from the next in the
  //       * resulting String. If omitted, the array elements are separated with a comma.
  //       */
  join(separator?: string): string;

  //     /**
  //       * Returns the index of the last occurrence of a value in an array.
  //       * @param searchElement The value to locate in the array.
  //       * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
  //       * search starts at index 0.
  //       */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  //     /**
  //       * The length of the array.
  //       */
  readonly length: number;

  //     /**
  //       * Calls a defined callback function on each element of an array, and returns an array that
  //       * contains the results.
  //       * @param callbackfn A function that accepts up to three arguments. The map method calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  map(
    callbackfn: (value: number, index: number, array: Int16Array) => number,
    thisArg?: any
  ): Int16Array;

  //     /**
  //       * Calls the specified callback function for all the elements in an array. The return value of
  //       * the callback function is the accumulated result, and is provided as an argument in the next
  //       * call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an argument
  //       * instead of an array value.
  //       */
  //     reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int16Array) => number): number;
  //     reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int16Array) => number, initialValue: number): number;

  //     /**
  //       * Calls the specified callback function for all the elements in an array. The return value of
  //       * the callback function is the accumulated result, and is provided as an argument in the next
  //       * call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an argument
  //       * instead of an array value.
  //       */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Int16Array
    ) => U,
    initialValue?: U
  ): U;

  //     /**
  //       * Calls the specified callback function for all the elements in an array, in descending order.
  //       * The return value of the callback function is the accumulated result, and is provided as an
  //       * argument in the next call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
  //       * the callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an
  //       * argument instead of an array value.
  //       */
  //     reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int16Array) => number): number;
  //     reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int16Array) => number, initialValue: number): number;

  //     /**
  //       * Calls the specified callback function for all the elements in an array, in descending order.
  //       * The return value of the callback function is the accumulated result, and is provided as an
  //       * argument in the next call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
  //       * the callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an argument
  //       * instead of an array value.
  //       */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Int16Array
    ) => U,
    initialValue?: U
  ): U;

  //     /**
  //       * Reverses the elements in an Array.
  //       */
  reverse(): Int16Array;

  //     /**
  //       * Sets a value or an array of values.
  //       * @param array A typed or untyped array of values to set.
  //       * @param offset The index in the current array at which the values are to be written.
  //       */
  set(array: ArrayLike<number>, offset?: number): void;

  //     /**
  //       * Returns a section of an array.
  //       * @param start The beginning of the specified portion of the array.
  //       * @param end The end of the specified portion of the array.
  //       */
  slice(start?: number, end?: number): Int16Array;

  //     /**
  //       * Determines whether the specified callback function returns true for any element of an array.
  //       * @param callbackfn A function that accepts up to three arguments. The some method calls the
  //       * callbackfn function for each element in array1 until the callbackfn returns true, or until
  //       * the end of the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  some(
    callbackfn: (value: number, index: number, array: Int16Array) => boolean,
    thisArg?: any
  ): boolean;

  //     /**
  //       * Sorts an array.
  //       * @param compareFn The name of the function used to determine the order of the elements. If
  //       * omitted, the elements are sorted in ascending, ASCII character order.
  //       */
  sort(compareFn?: (a: number, b: number) => number): this;

  //     /**
  //       * Gets a new Int16Array view of the ArrayBuffer store for this array, referencing the elements
  //       * at begin, inclusive, up to end, exclusive.
  //       * @param begin The index of the beginning of the array.
  //       * @param end The index of the end of the array.
  //       */
  subarray(begin: number, end?: number): Int16Array;

  //     /**
  //       * Converts a number to a string by using the current locale.
  //       */
  toLocaleString(): string;

  //     /**
  //       * Returns a string representation of an array.
  //       */
  toString(): string;
  // [Symbol.iterator](): IterableIterator<number>;
  /**
   * Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;
  /**
   * Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;
  /**
   * Returns an list of values in the array
   */
  values(): IterableIterator<number>;
  [index: number]: number;
}

interface Int16ArrayConstructor {
  readonly prototype: Int16Array;
  // new (length: number): Int16Array;
  new (
    arrayOrArrayBuffer:
      | ArrayLike<number>
      | ArrayBufferLike
      | number
      | Iterable<number>,
    byteOffset?: number,
    length?: number
  ): Int16Array;

  //     /**
  //       * The size in bytes of each element in the array.
  //       */
  readonly BYTES_PER_ELEMENT: number;

  //     /**
  //       * Returns a new array from a set of elements.
  //       * @param items A set of elements to include in the new array object.
  //       */
  of(...items: number[]): Int16Array;

  //     /**
  //       * Creates an array from an array-like or iterable object.
  //       * @param arrayLike An array-like or iterable object to convert to an array.
  //       */
  from(arrayLike: ArrayLike<number> | Iterable<number>): Int16Array;

  //     /**
  //       * Creates an array from an array-like or iterable object.
  //       * @param arrayLike An array-like or iterable object to convert to an array.
  //       * @param mapfn A mapping function to call on every element of the array.
  //       * @param thisArg Value of 'this' used to invoke the mapfn.
  //       */
}
declare var Int16Array: Int16ArrayConstructor;

// /**
//   * A typed array of 16-bit unsigned integer values. The contents are initialized to 0. If the
//   * requested number of bytes could not be allocated an exception is raised.
//   */
interface Uint16Array {
  //     /**
  //       * The size in bytes of each element in the array.
  //       */
  readonly BYTES_PER_ELEMENT: number;

  //     /**
  //       * The ArrayBuffer instance referenced by the array.
  //       */
  readonly buffer: ArrayBufferLike;

  //     /**
  //       * The length in bytes of the array.
  //       */
  readonly byteLength: number;

  //     /**
  //       * The offset in bytes of the array.
  //       */
  readonly byteOffset: number;

  //     /**
  //       * Returns the this object after copying a section of the array identified by start and end
  //       * to the same array starting at position target
  //       * @param target If target is negative, it is treated as length+target where length is the
  //       * length of the array.
  //       * @param start If start is negative, it is treated as length+start. If end is negative, it
  //       * is treated as length+end.
  //       * @param end If not specified, length of the this object is used as its default value.
  //       */
  copyWithin(target: number, start: number, end?: number): this;

  //     /**
  //       * Determines whether all the members of an array satisfy the specified test.
  //       * @param callbackfn A function that accepts up to three arguments. The every method calls
  //       * the callbackfn function for each element in array1 until the callbackfn returns false,
  //       * or until the end of the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  every(
    callbackfn: (value: number, index: number, array: Uint16Array) => boolean,
    thisArg?: any
  ): boolean;

  //     /**
  //         * Returns the this object after filling the section identified by start and end with value
  //         * @param value value to fill array section with
  //         * @param start index to start filling the array at. If start is negative, it is treated as
  //         * length+start where length is the length of the array.
  //         * @param end index to stop filling the array at. If end is negative, it is treated as
  //         * length+end.
  //         */
  fill(value: number, start?: number, end?: number): this;

  //     /**
  //       * Returns the elements of an array that meet the condition specified in a callback function.
  //       * @param callbackfn A function that accepts up to three arguments. The filter method calls
  //       * the callbackfn function one time for each element in the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  filter(
    callbackfn: (value: number, index: number, array: Uint16Array) => any,
    thisArg?: any
  ): Uint16Array;

  //     /**
  //       * Returns the value of the first element in the array where predicate is true, and undefined
  //       * otherwise.
  //       * @param predicate find calls predicate once for each element of the array, in ascending
  //       * order, until it finds one where predicate returns true. If such an element is found, find
  //       * immediately returns that element value. Otherwise, find returns undefined.
  //       * @param thisArg If provided, it will be used as the this value for each invocation of
  //       * predicate. If it is not provided, undefined is used instead.
  //       */
  find(
    predicate: (value: number, index: number, obj: Uint16Array) => boolean,
    thisArg?: any
  ): number | undefined;

  //     /**
  //       * Returns the index of the first element in the array where predicate is true, and -1
  //       * otherwise.
  //       * @param predicate find calls predicate once for each element of the array, in ascending
  //       * order, until it finds one where predicate returns true. If such an element is found,
  //       * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
  //       * @param thisArg If provided, it will be used as the this value for each invocation of
  //       * predicate. If it is not provided, undefined is used instead.
  // */
  findIndex(
    predicate: (value: number, index: number, obj: Uint16Array) => boolean,
    thisArg?: any
  ): number;

  //     /**
  //       * Performs the specified action for each element in an array.
  //       * @param callbackfn  A function that accepts up to three arguments. forEach calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  forEach(
    callbackfn: (value: number, index: number, array: Uint16Array) => void,
    thisArg?: any
  ): void;

  //     /**
  //       * Returns the index of the first occurrence of a value in an array.
  //       * @param searchElement The value to locate in the array.
  //       * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
  //       *  search starts at index 0.
  //       */
  indexOf(searchElement: number, fromIndex?: number): number;

  //     /**
  //       * Adds all the elements of an array separated by the specified separator string.
  //       * @param separator A string used to separate one element of an array from the next in the
  //       * resulting String. If omitted, the array elements are separated with a comma.
  //       */
  join(separator?: string): string;

  //     /**
  //       * Returns the index of the last occurrence of a value in an array.
  //       * @param searchElement The value to locate in the array.
  //       * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
  //       * search starts at index 0.
  //       */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  //     /**
  //       * The length of the array.
  //       */
  readonly length: number;

  //     /**
  //       * Calls a defined callback function on each element of an array, and returns an array that
  //       * contains the results.
  //       * @param callbackfn A function that accepts up to three arguments. The map method calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  map(
    callbackfn: (value: number, index: number, array: Uint16Array) => number,
    thisArg?: any
  ): Uint16Array;

  //     /**
  //       * Calls the specified callback function for all the elements in an array. The return value of
  //       * the callback function is the accumulated result, and is provided as an argument in the next
  //       * call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an argument
  //       * instead of an array value.
  //       */
  // reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint16Array) => number): number;
  //     reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint16Array) => number, initialValue: number): number;

  //     /**
  //       * Calls the specified callback function for all the elements in an array. The return value of
  //       * the callback function is the accumulated result, and is provided as an argument in the next
  //       * call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an argument
  //       * instead of an array value.
  //       */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint16Array
    ) => U,
    initialValue?: U
  ): U;

  //     /**
  //       * Calls the specified callback function for all the elements in an array, in descending order.
  //       * The return value of the callback function is the accumulated result, and is provided as an
  //       * argument in the next call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
  //       * the callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an
  //       * argument instead of an array value.
  //       */
  //     reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint16Array) => number): number;
  //     reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint16Array) => number, initialValue: number): number;

  //     /**
  //       * Calls the specified callback function for all the elements in an array, in descending order.
  //       * The return value of the callback function is the accumulated result, and is provided as an
  //       * argument in the next call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
  //       * the callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an argument
  //       * instead of an array value.
  //       */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint16Array
    ) => U,
    initialValue?: U
  ): U;

  //     /**
  //       * Reverses the elements in an Array.
  //       */
  reverse(): Uint16Array;

  //     /**
  //       * Sets a value or an array of values.
  //       * @param array A typed or untyped array of values to set.
  //       * @param offset The index in the current array at which the values are to be written.
  //       */
  set(array: ArrayLike<number>, offset?: number): void;

  //     /**
  //       * Returns a section of an array.
  //       * @param start The beginning of the specified portion of the array.
  //       * @param end The end of the specified portion of the array.
  //       */
  slice(start?: number, end?: number): Uint16Array;

  //     /**
  //       * Determines whether the specified callback function returns true for any element of an array.
  //       * @param callbackfn A function that accepts up to three arguments. The some method calls the
  //       * callbackfn function for each element in array1 until the callbackfn returns true, or until
  //       * the end of the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  some(
    callbackfn: (value: number, index: number, array: Uint16Array) => boolean,
    thisArg?: any
  ): boolean;

  //     /**
  //       * Sorts an array.
  //       * @param compareFn The name of the function used to determine the order of the elements. If
  //       * omitted, the elements are sorted in ascending, ASCII character order.
  //       */
  sort(compareFn?: (a: number, b: number) => number): this;

  //     /**
  //       * Gets a new Uint16Array view of the ArrayBuffer store for this array, referencing the elements
  //       * at begin, inclusive, up to end, exclusive.
  //       * @param begin The index of the beginning of the array.
  //       * @param end The index of the end of the array.
  //       */
  subarray(begin: number, end?: number): Uint16Array;

  //     /**
  //       * Converts a number to a string by using the current locale.
  //       */
  toLocaleString(): string;

  //     /**
  //       * Returns a string representation of an array.
  //       */
  toString(): string;
  //[Symbol.iterator](): IterableIterator<number>;
  /**
   * Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;
  /**
   * Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;
  /**
   * Returns an list of values in the array
   */
  values(): IterableIterator<number>;

  [index: number]: number;
}

interface Uint16ArrayConstructor {
  readonly prototype: Uint16Array;
  // new (length: number): Uint16Array;
  new (
    arrayOrArrayBuffer:
      | ArrayLike<number>
      | ArrayBufferLike
      | number
      | Iterable<number>,
    byteOffset?: number,
    length?: number
  ): Uint16Array;

  //     /**
  //       * The size in bytes of each element in the array.
  //       */
  readonly BYTES_PER_ELEMENT: number;

  //     /**
  //       * Returns a new array from a set of elements.
  //       * @param items A set of elements to include in the new array object.
  //       */
  of(...items: number[]): Uint16Array;

  //     /**
  //       * Creates an array from an array-like or iterable object.
  //       * @param arrayLike An array-like or iterable object to convert to an array.
  //       */
  from(arrayLike: ArrayLike<number> | Iterable<number>): Uint16Array;

  //     /**
  //       * Creates an array from an array-like or iterable object.
  //       * @param arrayLike An array-like or iterable object to convert to an array.
  //       * @param mapfn A mapping function to call on every element of the array.
  //       * @param thisArg Value of 'this' used to invoke the mapfn.
  //       */
}
declare var Uint16Array: Uint16ArrayConstructor;
// /**
//   * A typed array of 32-bit signed integer values. The contents are initialized to 0. If the
//   * requested number of bytes could not be allocated an exception is raised.
//   */
interface Int32Array {
  //     /**
  //       * The size in bytes of each element in the array.
  //       */
  readonly BYTES_PER_ELEMENT: number;

  //     /**
  //       * The ArrayBuffer instance referenced by the array.
  //       */
  readonly buffer: ArrayBufferLike;

  //     /**
  //       * The length in bytes of the array.
  //       */
  readonly byteLength: number;

  //     /**
  //       * The offset in bytes of the array.
  //       */
  readonly byteOffset: number;

  //     /**
  //       * Returns the this object after copying a section of the array identified by start and end
  //       * to the same array starting at position target
  //       * @param target If target is negative, it is treated as length+target where length is the
  //       * length of the array.
  //       * @param start If start is negative, it is treated as length+start. If end is negative, it
  //       * is treated as length+end.
  //       * @param end If not specified, length of the this object is used as its default value.
  //       */
  copyWithin(target: number, start: number, end?: number): this;

  //     /**
  //       * Determines whether all the members of an array satisfy the specified test.
  //       * @param callbackfn A function that accepts up to three arguments. The every method calls
  //       * the callbackfn function for each element in array1 until the callbackfn returns false,
  //       * or until the end of the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  every(
    callbackfn: (value: number, index: number, array: Int32Array) => boolean,
    thisArg?: any
  ): boolean;

  //     /**
  //         * Returns the this object after filling the section identified by start and end with value
  //         * @param value value to fill array section with
  //         * @param start index to start filling the array at. If start is negative, it is treated as
  //         * length+start where length is the length of the array.
  //         * @param end index to stop filling the array at. If end is negative, it is treated as
  //         * length+end.
  //         */
  fill(value: number, start?: number, end?: number): this;

  //     /**
  //       * Returns the elements of an array that meet the condition specified in a callback function.
  //       * @param callbackfn A function that accepts up to three arguments. The filter method calls
  //       * the callbackfn function one time for each element in the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  filter(
    callbackfn: (value: number, index: number, array: Int32Array) => any,
    thisArg?: any
  ): Int32Array;

  //     /**
  //       * Returns the value of the first element in the array where predicate is true, and undefined
  //       * otherwise.
  //       * @param predicate find calls predicate once for each element of the array, in ascending
  //       * order, until it finds one where predicate returns true. If such an element is found, find
  //       * immediately returns that element value. Otherwise, find returns undefined.
  //       * @param thisArg If provided, it will be used as the this value for each invocation of
  //       * predicate. If it is not provided, undefined is used instead.
  //       */
  find(
    predicate: (value: number, index: number, obj: Int32Array) => boolean,
    thisArg?: any
  ): number | undefined;

  //     /**
  //       * Returns the index of the first element in the array where predicate is true, and -1
  //       * otherwise.
  //       * @param predicate find calls predicate once for each element of the array, in ascending
  //       * order, until it finds one where predicate returns true. If such an element is found,
  //       * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
  //       * @param thisArg If provided, it will be used as the this value for each invocation of
  //       * predicate. If it is not provided, undefined is used instead.
  //       */
  //     findIndex(predicate: (value: number, index: number, obj: Int32Array) => boolean, thisArg?: any): number;

  //     /**
  //       * Performs the specified action for each element in an array.
  //       * @param callbackfn  A function that accepts up to three arguments. forEach calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  forEach(
    callbackfn: (value: number, index: number, array: Int32Array) => void,
    thisArg?: any
  ): void;

  //     /**
  //       * Returns the index of the first occurrence of a value in an array.
  //       * @param searchElement The value to locate in the array.
  //       * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
  //       *  search starts at index 0.
  //       */
  indexOf(searchElement: number, fromIndex?: number): number;

  //     /**
  //       * Adds all the elements of an array separated by the specified separator string.
  //       * @param separator A string used to separate one element of an array from the next in the
  //       * resulting String. If omitted, the array elements are separated with a comma.
  // */
  join(separator?: string): string;

  //     /**
  //       * Returns the index of the last occurrence of a value in an array.
  //       * @param searchElement The value to locate in the array.
  //       * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
  //       * search starts at index 0.
  //       */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  //     /**
  //       * The length of the array.
  //       */
  readonly length: number;

  //     /**
  //       * Calls a defined callback function on each element of an array, and returns an array that
  //       * contains the results.
  //       * @param callbackfn A function that accepts up to three arguments. The map method calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  map(
    callbackfn: (value: number, index: number, array: Int32Array) => number,
    thisArg?: any
  ): Int32Array;

  //     /**
  //       * Calls the specified callback function for all the elements in an array. The return value of
  //       * the callback function is the accumulated result, and is provided as an argument in the next
  //       * call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an argument
  //       * instead of an array value.
  //       */
  //     reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int32Array) => number): number;
  //     reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int32Array) => number, initialValue: number): number;

  //     /**
  //       * Calls the specified callback function for all the elements in an array. The return value of
  //       * the callback function is the accumulated result, and is provided as an argument in the next
  //       * call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an argument
  //       * instead of an array value.
  //       */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Int32Array
    ) => U,
    initialValue?: U
  ): U;

  //     /**
  //       * Calls the specified callback function for all the elements in an array, in descending order.
  //       * The return value of the callback function is the accumulated result, and is provided as an
  //       * argument in the next call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
  //       * the callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an
  //       * argument instead of an array value.
  //       */
  //     reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int32Array) => number): number;
  //     reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int32Array) => number, initialValue: number): number;

  //     /**
  //       * Calls the specified callback function for all the elements in an array, in descending order.
  //       * The return value of the callback function is the accumulated result, and is provided as an
  //       * argument in the next call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
  //       * the callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an argument
  //       * instead of an array value.
  //       */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Int32Array
    ) => U,
    initialValue?: U
  ): U;

  //     /**
  //       * Reverses the elements in an Array.
  //       */
  reverse(): Int32Array;

  //     /**
  //       * Sets a value or an array of values.
  //       * @param array A typed or untyped array of values to set.
  //       * @param offset The index in the current array at which the values are to be written.
  //       */
  set(array: ArrayLike<number>, offset?: number): void;

  //     /**
  //       * Returns a section of an array.
  //       * @param start The beginning of the specified portion of the array.
  //       * @param end The end of the specified portion of the array.
  //       */
  slice(start?: number, end?: number): Int32Array;

  //     /**
  //       * Determines whether the specified callback function returns true for any element of an array.
  //       * @param callbackfn A function that accepts up to three arguments. The some method calls the
  //       * callbackfn function for each element in array1 until the callbackfn returns true, or until
  //       * the end of the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  some(
    callbackfn: (value: number, index: number, array: Int32Array) => boolean,
    thisArg?: any
  ): boolean;

  //     /**
  //       * Sorts an array.
  //       * @param compareFn The name of the function used to determine the order of the elements. If
  //       * omitted, the elements are sorted in ascending, ASCII character order.
  //       */
  sort(compareFn?: (a: number, b: number) => number): this;

  //     /**
  //       * Gets a new Int32Array view of the ArrayBuffer store for this array, referencing the elements
  //       * at begin, inclusive, up to end, exclusive.
  //       * @param begin The index of the beginning of the array.
  //       * @param end The index of the end of the array.
  //       */
  subarray(begin: number, end?: number): Int32Array;

  //     /**
  //       * Converts a number to a string by using the current locale.
  //       */
  toLocaleString(): string;

  //     /**
  //       * Returns a string representation of an array.
  //       */
  toString(): string;
  // [Symbol.iterator](): IterableIterator<number>;
  /**
   * Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;
  /**
   * Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;
  /**
   * Returns an list of values in the array
   */
  values(): IterableIterator<number>;

  [index: number]: number;
}

interface Int32ArrayConstructor {
  readonly prototype: Int32Array;
  // new (length: number): Int32Array;
  new (
    arrayOrArrayBuffer:
      | ArrayLike<number>
      | ArrayBufferLike
      | number
      | Iterable<number>
  ): Int32Array;
  // new (
  //   buffer: ArrayBufferLike,
  //   byteOffset: number,
  //   length?: number
  // ): Int32Array;

  //     /**
  //       * The size in bytes of each element in the array.
  //       */
  readonly BYTES_PER_ELEMENT: number;

  //     /**
  //       * Returns a new array from a set of elements.
  //       * @param items A set of elements to include in the new array object.
  //       */
  of(...items: number[]): Int32Array;

  //     /**
  //       * Creates an array from an array-like or iterable object.
  //       * @param arrayLike An array-like or iterable object to convert to an array.
  //       */
  from(arrayLike: ArrayLike<number> | Iterable<number>): Int32Array;
}

declare var Int32Array: Int32ArrayConstructor;

// /**
//   * A typed array of 32-bit unsigned integer values. The contents are initialized to 0. If the
//   * requested number of bytes could not be allocated an exception is raised.
//   */
interface Uint32Array {
  //     /**
  //       * The size in bytes of each element in the array.
  //       */
  readonly BYTES_PER_ELEMENT: number;

  //     /**
  //       * The ArrayBuffer instance referenced by the array.
  //       */
  readonly buffer: ArrayBufferLike;

  //     /**
  //       * The length in bytes of the array.
  //       */
  readonly byteLength: number;

  //     /**
  //       * The offset in bytes of the array.
  //       */
  readonly byteOffset: number;

  //     /**
  //       * Returns the this object after copying a section of the array identified by start and end
  //       * to the same array starting at position target
  //       * @param target If target is negative, it is treated as length+target where length is the
  //       * length of the array.
  //       * @param start If start is negative, it is treated as length+start. If end is negative, it
  //       * is treated as length+end.
  //       * @param end If not specified, length of the this object is used as its default value.
  //       */
  copyWithin(target: number, start: number, end?: number): this;

  //     /**
  //       * Determines whether all the members of an array satisfy the specified test.
  //       * @param callbackfn A function that accepts up to three arguments. The every method calls
  //       * the callbackfn function for each element in array1 until the callbackfn returns false,
  //       * or until the end of the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  every(
    callbackfn: (value: number, index: number, array: Uint32Array) => boolean,
    thisArg?: any
  ): boolean;

  //     /**
  //         * Returns the this object after filling the section identified by start and end with value
  //         * @param value value to fill array section with
  //         * @param start index to start filling the array at. If start is negative, it is treated as
  //         * length+start where length is the length of the array.
  //         * @param end index to stop filling the array at. If end is negative, it is treated as
  //         * length+end.
  //         */
  fill(value: number, start?: number, end?: number): this;

  //     /**
  //       * Returns the elements of an array that meet the condition specified in a callback function.
  //       * @param callbackfn A function that accepts up to three arguments. The filter method calls
  //       * the callbackfn function one time for each element in the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  filter(
    callbackfn: (value: number, index: number, array: Uint32Array) => any,
    thisArg?: any
  ): Uint32Array;

  //     /**
  //       * Returns the value of the first element in the array where predicate is true, and undefined
  //       * otherwise.
  //       * @param predicate find calls predicate once for each element of the array, in ascending
  //       * order, until it finds one where predicate returns true. If such an element is found, find
  //       * immediately returns that element value. Otherwise, find returns undefined.
  //       * @param thisArg If provided, it will be used as the this value for each invocation of
  //       * predicate. If it is not provided, undefined is used instead.
  //       */
  find(
    predicate: (value: number, index: number, obj: Uint32Array) => boolean,
    thisArg?: any
  ): number | undefined;

  //     /**
  //       * Returns the index of the first element in the array where predicate is true, and -1
  //       * otherwise.
  //       * @param predicate find calls predicate once for each element of the array, in ascending
  //       * order, until it finds one where predicate returns true. If such an element is found,
  //       * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
  //       * @param thisArg If provided, it will be used as the this value for each invocation of
  //       * predicate. If it is not provided, undefined is used instead.
  //       */
  findIndex(
    predicate: (value: number, index: number, obj: Uint32Array) => boolean,
    thisArg?: any
  ): number;

  //     /**
  //       * Performs the specified action for each element in an array.
  //       * @param callbackfn  A function that accepts up to three arguments. forEach calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  forEach(
    callbackfn: (value: number, index: number, array: Uint32Array) => void,
    thisArg?: any
  ): void;
  //     /**
  //       * Returns the index of the first occurrence of a value in an array.
  //       * @param searchElement The value to locate in the array.
  //       * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
  //       *  search starts at index 0.
  //       */
  indexOf(searchElement: number, fromIndex?: number): number;

  //     /**
  //       * Adds all the elements of an array separated by the specified separator string.
  //       * @param separator A string used to separate one element of an array from the next in the
  //       * resulting String. If omitted, the array elements are separated with a comma.
  //       */
  join(separator?: string): string;

  //     /**
  //       * Returns the index of the last occurrence of a value in an array.
  //       * @param searchElement The value to locate in the array.
  //       * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
  //       * search starts at index 0.
  //       */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  //     /**
  //       * The length of the array.
  //       */
  readonly length: number;

  //     /**
  //       * Calls a defined callback function on each element of an array, and returns an array that
  //       * contains the results.
  //       * @param callbackfn A function that accepts up to three arguments. The map method calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  map(
    callbackfn: (value: number, index: number, array: Uint32Array) => number,
    thisArg?: any
  ): Uint32Array;

  //     /**
  //       * Calls the specified callback function for all the elements in an array. The return value of
  //       * the callback function is the accumulated result, and is provided as an argument in the next
  //       * call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an argument
  // * instead of an array value.
  //       */
  // reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint32Array) => number): number;
  //     reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint32Array) => number, initialValue: number): number;

  //     /**
  //       * Calls the specified callback function for all the elements in an array. The return value of
  //       * the callback function is the accumulated result, and is provided as an argument in the next
  //       * call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an argument
  //       * instead of an array value.
  //       */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint32Array
    ) => U,
    initialValue?: U
  ): U;

  //     /**
  //       * Calls the specified callback function for all the elements in an array, in descending order.
  //       * The return value of the callback function is the accumulated result, and is provided as an
  //       * argument in the next call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
  //       * the callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an
  //       * argument instead of an array value.
  //       */
  //     reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint32Array) => number): number;
  //     reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint32Array) => number, initialValue: number): number;

  //     /**
  //       * Calls the specified callback function for all the elements in an array, in descending order.
  //       * The return value of the callback function is the accumulated result, and is provided as an
  //       * argument in the next call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
  //       * the callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an argument
  //       * instead of an array value.
  //       */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint32Array
    ) => U,
    initialValue?: U
  ): U;

  //     /**
  //       * Reverses the elements in an Array.
  //       */
  reverse(): Uint32Array;

  //     /**
  //       * Sets a value or an array of values.
  //       * @param array A typed or untyped array of values to set.
  //       * @param offset The index in the current array at which the values are to be written.
  //       */
  set(array: ArrayLike<number>, offset?: number): void;

  //     /**
  //       * Returns a section of an array.
  //       * @param start The beginning of the specified portion of the array.
  //       * @param end The end of the specified portion of the array.
  //       */
  slice(start?: number, end?: number): Uint32Array;

  //     /**
  //       * Determines whether the specified callback function returns true for any element of an array.
  //       * @param callbackfn A function that accepts up to three arguments. The some method calls the
  //       * callbackfn function for each element in array1 until the callbackfn returns true, or until
  //       * the end of the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  some(
    callbackfn: (value: number, index: number, array: Uint32Array) => boolean,
    thisArg?: any
  ): boolean;

  //     /**
  //       * Sorts an array.
  //       * @param compareFn The name of the function used to determine the order of the elements. If
  //       * omitted, the elements are sorted in ascending, ASCII character order.
  //       */
  sort(compareFn?: (a: number, b: number) => number): this;

  //     /**
  //       * Gets a new Uint32Array view of the ArrayBuffer store for this array, referencing the elements
  //       * at begin, inclusive, up to end, exclusive.
  //       * @param begin The index of the beginning of the array.
  //       * @param end The index of the end of the array.
  //       */
  subarray(begin: number, end?: number): Uint32Array;

  //     /**
  //       * Converts a number to a string by using the current locale.
  //       */
  toLocaleString(): string;

  //     /**
  //       * Returns a string representation of an array.
  //       */
  toString(): string;
  //[Symbol.iterator](): IterableIterator<number>;
  /**
   * Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;
  /**
   * Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;
  /**
   * Returns an list of values in the array
   */
  values(): IterableIterator<number>;

  [index: number]: number;
}

interface Uint32ArrayConstructor {
  readonly prototype: Uint32Array;
  new (arrayOrLength: number | Array<number> | Iterable<number>): Uint32Array;
  // new (
  //   buffer: ArrayBufferLike,
  //   byteOffset: number,
  //   length?: number
  // ): Uint32Array;

  //     /**
  //       * The size in bytes of each element in the array.
  //       */
  readonly BYTES_PER_ELEMENT: number;

  //     /**
  //       * Returns a new array from a set of elements.
  //       * @param items A set of elements to include in the new array object.
  //       */
  of(...items: number[]): Uint32Array;

  //     /**
  //       * Creates an array from an array-like or iterable object.
  //       * @param arrayLike An array-like or iterable object to convert to an array.
  //       */
  from(arrayLike: ArrayLike<number> | Iterable<number>): Uint32Array;

  //     /**
  //       * Creates an array from an array-like or iterable object.
  //       * @param arrayLike An array-like or iterable object to convert to an array.
  //       * @param mapfn A mapping function to call on every element of the array.
  //       * @param thisArg Value of 'this' used to invoke the mapfn.
  //       */
}
declare var Uint32Array: Uint32ArrayConstructor;

// /**
//   * A typed array of 32-bit float values. The contents are initialized to 0. If the requested number
//   * of bytes could not be allocated an exception is raised.
//   */
interface Float32Array {
  //     /**
  //       * The size in bytes of each element in the array.
  //       */
  readonly BYTES_PER_ELEMENT: number;

  //     /**
  //       * The ArrayBuffer instance referenced by the array.
  //       */
  readonly buffer: ArrayBufferLike;

  //     /**
  //       * The length in bytes of the array.
  //       */
  readonly byteLength: number;

  //     /**
  //       * The offset in bytes of the array.
  //       */
  readonly byteOffset: number;

  //     /**
  //       * Returns the this object after copying a section of the array identified by start and end
  //       * to the same array starting at position target
  //       * @param target If target is negative, it is treated as length+target where length is the
  //       * length of the array.
  //       * @param start If start is negative, it is treated as length+start. If end is negative, it
  //       * is treated as length+end.
  //       * @param end If not specified, length of the this object is used as its default value.
  //       */
  copyWithin(target: number, start: number, end?: number): this;

  //     /**
  //       * Determines whether all the members of an array satisfy the specified test.
  //       * @param callbackfn A function that accepts up to three arguments. The every method calls
  //       * the callbackfn function for each element in array1 until the callbackfn returns false,
  //       * or until the end of the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  every(
    callbackfn: (value: number, index: number, array: Float32Array) => boolean,
    thisArg?: any
  ): boolean;

  //     /**
  //         * Returns the this object after filling the section identified by start and end with value
  //         * @param value value to fill array section with
  //         * @param start index to start filling the array at. If start is negative, it is treated as
  //         * length+start where length is the length of the array.
  //         * @param end index to stop filling the array at. If end is negative, it is treated as
  //         * length+end.
  //         */
  fill(value: number, start?: number, end?: number): this;

  //     /**
  //       * Returns the elements of an array that meet the condition specified in a callback function.
  //       * @param callbackfn A function that accepts up to three arguments. The filter method calls
  //       * the callbackfn function one time for each element in the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  filter(
    callbackfn: (value: number, index: number, array: Float32Array) => any,
    thisArg?: any
  ): Float32Array;

  //     /**
  //       * Returns the value of the first element in the array where predicate is true, and undefined
  //       * otherwise.
  //       * @param predicate find calls predicate once for each element of the array, in ascending
  //       * order, until it finds one where predicate returns true. If such an element is found, find
  //       * immediately returns that element value. Otherwise, find returns undefined.
  //       * @param thisArg If provided, it will be used as the this value for each invocation of
  //       * predicate. If it is not provided, undefined is used instead.
  //       */
  find(
    predicate: (value: number, index: number, obj: Float32Array) => boolean,
    thisArg?: any
  ): number | undefined;

  //     /**
  //       * Returns the index of the first element in the array where predicate is true, and -1
  //       * otherwise.
  //       * @param predicate find calls predicate once for each element of the array, in ascending
  //       * order, until it finds one where predicate returns true. If such an element is found,
  //       * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
  //       * @param thisArg If provided, it will be used as the this value for each invocation of
  //       * predicate. If it is not provided, undefined is used instead.
  //       */
  findIndex(
    predicate: (value: number, index: number, obj: Float32Array) => boolean,
    thisArg?: any
  ): number;

  //     /**
  //       * Performs the specified action for each element in an array.
  //       * @param callbackfn  A function that accepts up to three arguments. forEach calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  forEach(
    callbackfn: (value: number, index: number, array: Float32Array) => void,
    thisArg?: any
  ): void;

  //     /**
  //       * Returns the index of the first occurrence of a value in an array.
  //       * @param searchElement The value to locate in the array.
  //       * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
  //       *  search starts at index 0.
  //       */
  indexOf(searchElement: number, fromIndex?: number): number;

  //     /**
  //       * Adds all the elements of an array separated by the specified separator string.
  //       * @param separator A string used to separate one element of an array from the next in the
  //       * resulting String. If omitted, the array elements are separated with a comma.
  //       */
  join(separator?: string): string;

  //     /**
  //       * Returns the index of the last occurrence of a value in an array.
  //       * @param searchElement The value to locate in the array.
  //       * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
  //       * search starts at index 0.
  //       */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  //     /**
  //       * The length of the array.
  //       */
  readonly length: number;

  //     /**
  //       * Calls a defined callback function on each element of an array, and returns an array that
  //       * contains the results.
  //       * @param callbackfn A function that accepts up to three arguments. The map method calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  map(
    callbackfn: (value: number, index: number, array: Float32Array) => number,
    thisArg?: any
  ): Float32Array;

  //     /**
  //       * Calls the specified callback function for all the elements in an array. The return value of
  //       * the callback function is the accumulated result, and is provided as an argument in the next
  //       * call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an argument
  //       * instead of an array value.
  //       */
  //     reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number): number;
  //     reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number, initialValue: number): number;

  //     /**
  //       * Calls the specified callback function for all the elements in an array. The return value of
  //       * the callback function is the accumulated result, and is provided as an argument in the next
  //       * call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an argument
  //       * instead of an array value.
  //       */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Float32Array
    ) => U,
    initialValue?: U
  ): U;

  //     /**
  //       * Calls the specified callback function for all the elements in an array, in descending order.
  //       * The return value of the callback function is the accumulated result, and is provided as an
  //       * argument in the next call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
  //       * the callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an
  //       * argument instead of an array value.
  //       */
  //     reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number): number;
  //     reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number, initialValue: number): number;

  //     /**
  //       * Calls the specified callback function for all the elements in an array, in descending order.
  //       * The return value of the callback function is the accumulated result, and is provided as an
  //       * argument in the next call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
  //       * the callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an argument
  //       * instead of an array value.
  //       */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Float32Array
    ) => U,
    initialValue?: U
  ): U;

  //     /**
  //       * Reverses the elements in an Array.
  //       */
  reverse(): Float32Array;

  //     /**
  //       * Sets a value or an array of values.
  //       * @param array A typed or untyped array of values to set.
  //       * @param offset The index in the current array at which the values are to be written.
  //       */
  set(array: ArrayLike<number>, offset?: number): void;

  //     /**
  //       * Returns a section of an array.
  //       * @param start The beginning of the specified portion of the array.
  //       * @param end The end of the specified portion of the array.
  //       */
  slice(start?: number, end?: number): Float32Array;

  //     /**
  //       * Determines whether the specified callback function returns true for any element of an array.
  //       * @param callbackfn A function that accepts up to three arguments. The some method calls the
  //       * callbackfn function for each element in array1 until the callbackfn returns true, or until
  //       * the end of the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  some(
    callbackfn: (value: number, index: number, array: Float32Array) => boolean,
    thisArg?: any
  ): boolean;

  //     /**
  //       * Sorts an array.
  //       * @param compareFn The name of the function used to determine the order of the elements. If
  //       * omitted, the elements are sorted in ascending, ASCII character order.
  //       */
  sort(compareFn?: (a: number, b: number) => number): this;

  //     /**
  //       * Gets a new Float32Array view of the ArrayBuffer store for this array, referencing the elements
  //       * at begin, inclusive, up to end, exclusive.
  //       * @param begin The index of the beginning of the array.
  //       * @param end The index of the end of the array.
  //       */
  subarray(begin: number, end?: number): Float32Array;

  //     /**
  //       * Converts a number to a string by using the current locale.
  //       */
  toLocaleString(): string;

  //     /**
  //       * Returns a string representation of an array.
  //       */
  toString(): string;
  //  [Symbol.iterator](): IterableIterator<number>;
  /**
   * Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;
  /**
   * Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;
  /**
   * Returns an list of values in the array
   */
  values(): IterableIterator<number>;
  [index: number]: number;
}

interface Float32ArrayConstructor {
  readonly prototype: Float32Array;
  // new (length: number): Float32Array;
  new (
    arrayOrArrayBuffer:
      | ArrayLike<number>
      | ArrayBufferLike
      | number
      | Iterable<number>,
    byteOffset?: number,
    length?: number
  ): Float32Array;
  // new (
  //   buffer: ArrayBufferLike,
  //   byteOffset: number,
  //   length?: number
  // ): Float32Array;

  //     /**
  //       * The size in bytes of each element in the array.
  //       */
  readonly BYTES_PER_ELEMENT: number;

  //     /**
  //       * Returns a new array from a set of elements.
  //       * @param items A set of elements to include in the new array object.
  //       */
  of(...items: number[]): Float32Array;

  //     /**
  //       * Creates an array from an array-like or iterable object.
  //       * @param arrayLike An array-like or iterable object to convert to an array.
  //       */
  from(arrayLike: ArrayLike<number> | Iterable<number>): Float32Array;

  //     /**
  //       * Creates an array from an array-like or iterable object.
  //       * @param arrayLike An array-like or iterable object to convert to an array.
  //       * @param mapfn A mapping function to call on every element of the array.
  //       * @param thisArg Value of 'this' used to invoke the mapfn.
  //       */
}
declare var Float32Array: Float32ArrayConstructor;

// /**
//   * A typed array of 64-bit float values. The contents are initialized to 0. If the requested
//   * number of bytes could not be allocated an exception is raised.
//   */
interface Float64Array {
  //     /**
  //       * The size in bytes of each element in the array.
  //       */
  readonly BYTES_PER_ELEMENT: number;

  //     /**
  //       * The ArrayBuffer instance referenced by the array.
  //       */
  readonly buffer: ArrayBufferLike;

  //     /**
  //       * The length in bytes of the array.
  //       */
  readonly byteLength: number;

  //     /**
  //       * The offset in bytes of the array.
  //       */
  readonly byteOffset: number;

  //     /**
  //       * Returns the this object after copying a section of the array identified by start and end
  //       * to the same array starting at position target
  //       * @param target If target is negative, it is treated as length+target where length is the
  //       * length of the array.
  //       * @param start If start is negative, it is treated as length+start. If end is negative, it
  //       * is treated as length+end.
  //       * @param end If not specified, length of the this object is used as its default value.
  //       */
  copyWithin(target: number, start: number, end?: number): this;

  //     /**
  //       * Determines whether all the members of an array satisfy the specified test.
  //       * @param callbackfn A function that accepts up to three arguments. The every method calls
  //       * the callbackfn function for each element in array1 until the callbackfn returns false,
  //       * or until the end of the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  every(
    callbackfn: (value: number, index: number, array: Float64Array) => boolean,
    thisArg?: any
  ): boolean;

  //     /**
  //         * Returns the this object after filling the section identified by start and end with value
  //         * @param value value to fill array section with
  //         * @param start index to start filling the array at. If start is negative, it is treated as
  //         * length+start where length is the length of the array.
  //         * @param end index to stop filling the array at. If end is negative, it is treated as
  //         * length+end.
  //         */
  fill(value: number, start?: number, end?: number): this;

  //     /**
  //       * Returns the elements of an array that meet the condition specified in a callback function.
  //       * @param callbackfn A function that accepts up to three arguments. The filter method calls
  //       * the callbackfn function one time for each element in the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  filter(
    callbackfn: (value: number, index: number, array: Float64Array) => any,
    thisArg?: any
  ): Float64Array;

  //     /**
  //       * Returns the value of the first element in the array where predicate is true, and undefined
  //       * otherwise.
  //       * @param predicate find calls predicate once for each element of the array, in ascending
  //       * order, until it finds one where predicate returns true. If such an element is found, find
  //       * immediately returns that element value. Otherwise, find returns undefined.
  //       * @param thisArg If provided, it will be used as the this value for each invocation of
  //       * predicate. If it is not provided, undefined is used instead.
  //       */
  find(
    predicate: (value: number, index: number, obj: Float64Array) => boolean,
    thisArg?: any
  ): number | undefined;

  //     /**
  //       * Returns the index of the first element in the array where predicate is true, and -1
  //       * otherwise.
  //       * @param predicate find calls predicate once for each element of the array, in ascending
  //       * order, until it finds one where predicate returns true. If such an element is found,
  //       * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
  //       * @param thisArg If provided, it will be used as the this value for each invocation of
  //       * predicate. If it is not provided, undefined is used instead.
  //       */
  findIndex(
    predicate: (value: number, index: number, obj: Float64Array) => boolean,
    thisArg?: any
  ): number;

  //     /**
  //       * Performs the specified action for each element in an array.
  //       * @param callbackfn  A function that accepts up to three arguments. forEach calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  forEach(
    callbackfn: (value: number, index: number, array: Float64Array) => void,
    thisArg?: any
  ): void;

  //     /**
  //       * Returns the index of the first occurrence of a value in an array.
  //       * @param searchElement The value to locate in the array.
  //       * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
  //       *  search starts at index 0.
  //       */
  indexOf(searchElement: number, fromIndex?: number): number;

  //     /**
  //       * Adds all the elements of an array separated by the specified separator string.
  //       * @param separator A string used to separate one element of an array from the next in the
  //       * resulting String. If omitted, the array elements are separated with a comma.
  //       */
  join(separator?: string): string;

  //     /**
  //       * Returns the index of the last occurrence of a value in an array.
  //       * @param searchElement The value to locate in the array.
  //       * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
  //       * search starts at index 0.
  //       */
  lastIndexOf(searchElement: number, fromIndex?: number): number;

  //     /**
  //       * The length of the array.
  //       */
  readonly length: number;

  //     /**
  //       * Calls a defined callback function on each element of an array, and returns an array that
  //       * contains the results.
  //       * @param callbackfn A function that accepts up to three arguments. The map method calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  map(
    callbackfn: (value: number, index: number, array: Float64Array) => number,
    thisArg?: any
  ): Float64Array;

  //     /**
  //       * Calls the specified callback function for all the elements in an array. The return value of
  //       * the callback function is the accumulated result, and is provided as an argument in the next
  //       * call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an argument
  //       * instead of an array value.
  //       */
  //     reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float64Array) => number): number;
  //     reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float64Array) => number, initialValue: number): number;

  //     /**
  //       * Calls the specified callback function for all the elements in an array. The return value of
  //       * the callback function is the accumulated result, and is provided as an argument in the next
  //       * call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
  //       * callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an argument
  //       * instead of an array value.
  //       */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Float64Array
    ) => U,
    initialValue?: U
  ): U;

  //     /**
  //       * Calls the specified callback function for all the elements in an array, in descending order.
  //       * The return value of the callback function is the accumulated result, and is provided as an
  //       * argument in the next call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
  //       * the callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an
  //       * argument instead of an array value.
  //       */
  //     reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float64Array) => number): number;
  //     reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float64Array) => number, initialValue: number): number;

  //     /**
  //       * Calls the specified callback function for all the elements in an array, in descending order.
  //       * The return value of the callback function is the accumulated result, and is provided as an
  //       * argument in the next call to the callback function.
  //       * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
  //       * the callbackfn function one time for each element in the array.
  //       * @param initialValue If initialValue is specified, it is used as the initial value to start
  //       * the accumulation. The first call to the callbackfn function provides this value as an argument
  //       * instead of an array value.
  //       */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Float64Array
    ) => U,
    initialValue?: U
  ): U;

  //     /**
  //       * Reverses the elements in an Array.
  //       */
  reverse(): Float64Array;

  //     /**
  //       * Sets a value or an array of values.
  //       * @param array A typed or untyped array of values to set.
  //       * @param offset The index in the current array at which the values are to be written.
  //       */
  set(array: ArrayLike<number>, offset?: number): void;

  //     /**
  //       * Returns a section of an array.
  //       * @param start The beginning of the specified portion of the array.
  //       * @param end The end of the specified portion of the array.
  //       */
  slice(start?: number, end?: number): Float64Array;

  //     /**
  //       * Determines whether the specified callback function returns true for any element of an array.
  //       * @param callbackfn A function that accepts up to three arguments. The some method calls the
  //       * callbackfn function for each element in array1 until the callbackfn returns true, or until
  //       * the end of the array.
  //       * @param thisArg An object to which the this keyword can refer in the callbackfn function.
  //       * If thisArg is omitted, undefined is used as the this value.
  //       */
  some(
    callbackfn: (value: number, index: number, array: Float64Array) => boolean,
    thisArg?: any
  ): boolean;

  //     /**
  //       * Sorts an array.
  //       * @param compareFn The name of the function used to determine the order of the elements. If
  //       * omitted, the elements are sorted in ascending, ASCII character order.
  //       */
  sort(compareFn?: (a: number, b: number) => number): this;

  //     /**
  //       * Gets a new Float64Array view of the ArrayBuffer store for this array, referencing the elements
  //       * at begin, inclusive, up to end, exclusive.
  //       * @param begin The index of the beginning of the array.
  //       * @param end The index of the end of the array.
  //       */
  subarray(begin: number, end?: number): Float64Array;

  //     /**
  //       * Converts a number to a string by using the current locale.
  //       */
  toLocaleString(): string;

  //     /**
  //       * Returns a string representation of an array.
  //       */
  toString(): string;
  //[Symbol.iterator](): IterableIterator<number>;
  /**
   * Returns an array of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, number]>;
  /**
   * Returns an list of keys in the array
   */
  keys(): IterableIterator<number>;
  /**
   * Returns an list of values in the array
   */
  values(): IterableIterator<number>;

  [index: number]: number;
}

interface Float64ArrayConstructor {
  readonly prototype: Float64Array;
  // new (length: number): Float64Array;
  new (
    arrayOrArrayBuffer:
      | ArrayLike<number>
      | ArrayBufferLike
      | number
      | Iterable<number>,
    byteOffset?: number,
    length?: number
  ): Float64Array;

  //     /**
  //       * The size in bytes of each element in the array.
  //       */
  readonly BYTES_PER_ELEMENT: number;

  //     /**
  //       * Returns a new array from a set of elements.
  //       * @param items A set of elements to include in the new array object.
  //       */
  of(...items: number[]): Float64Array;

  //     /**
  //       * Creates an array from an array-like or iterable object.
  //       * @param arrayLike An array-like or iterable object to convert to an array.
  //       */
  from(arrayLike: ArrayLike<number> | Iterable<number>): Float64Array;

  //     /**
  //       * Creates an array from an array-like or iterable object.
  //       * @param arrayLike An array-like or iterable object to convert to an array.
  //       * @param mapfn A mapping function to call on every element of the array.
  //       * @param thisArg Value of 'this' used to invoke the mapfn.
  //       */
}
declare var Float64Array: Float64ArrayConstructor;

interface ArrayConstructor {
  new <T>(arrayLength: number): (T | undefined)[];
  <T>(...items: T[]): T[];
  isArray(arg: any): arg is Array<any>;
  readonly prototype: Array<any>;
  from(
    value:
      | Int8Array
      | Int16Array
      | Int32Array
      | Uint8Array
      | Uint16Array
      | Uint32Array
      | Float32Array
      | Float64Array
  ): number[];
  /**
   * Creates an array from an iterable object.
   * @param iterable An iterable object to convert to an array.
   */
  from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
}

declare var Array: ArrayConstructor;

interface Map<K, V> {
  clear(): void;
  delete(key: K): boolean;
  forEach(
    callbackfn: (value: V, key: K, map: Map<K, V>) => void,
    thisArg?: any
  ): void;
  get(key: K): V | undefined;
  has(key: K): boolean;
  set(key: K, value: V): Map<K, V>;
  readonly size: number;
  /** Returns an iterable of entries in the map. */
  //[Symbol.iterator](): IterableIterator<[K, V]>;
  /**
   * Returns an iterable of key, value pairs for every entry in the map.
   */
  // FIXME: make entries return iterable
  //entries(): IterableIterator<[K, V]>;
  entries(): Array<[K, V]>;
  /**
   * Returns an iterable of keys in the map
   */
  //keys(): IterableIterator<K>;
  /**
   * Returns an iterable of values in the map
   */
  // values(): IterableIterator<V>;
}

interface MapConstructor {
  new <K, V>(entries?: Array<[K, V]> | Map<K, V> | null): Map<K, V>;
}

declare var Map: MapConstructor;

interface ReadonlyMap<K, V> {
  forEach(
    callbackfn: (value: V, key: K, map: ReadonlyMap<K, V>) => void,
    thisArg?: any
  ): void;
  get(key: K): V | undefined;
  has(key: K): boolean;
  readonly size: number;
}

interface WeakMap<K extends object, V> {
  delete(key: K): boolean;
  get(key: K): V | undefined;
  has(key: K): boolean;
  set(key: K, value: V): this;
}

interface WeakMapConstructor {
  new <K extends object, V>(
    entries?: Array<[K, V]> | Map<K, V> | WeakMap<K, V> | null
  ): WeakMap<K, V>;
}
declare var WeakMap: WeakMapConstructor;

interface Set<T> {
  add(value: T): this;
  clear(): void;
  delete(value: T): boolean;
  forEach(
    callbackfn: (value: T, value2: T, set: Set<T>) => void,
    thisArg?: any
  ): void;
  has(value: T): boolean;
  readonly size: number;
  /** Iterates over values in the set. */
  //[Symbol.iterator](): IterableIterator<T>;
  /**
   * Returns an iterable of [v,v] pairs for every value v in the set.
   */
  entries(): IterableIterator<[T, T]>;
  /**
   * Despite its name, returns an iterable of the values in the set,
   */
  keys(): IterableIterator<T>;
  /**
   * Returns an iterable of values in the set.
   */
  values(): IterableIterator<T>;
}

interface ReadonlySet<T> {
  /** Iterates over values in the set. */
  //    [Symbol.iterator](): IterableIterator<T>;
}

interface SetConstructor {
  new <T>(values?: T[] | Set<T> | null): Set<T>;
  readonly prototype: Set<any>;
}
declare var Set: SetConstructor;

interface ReadonlySet<T> {
  forEach(
    callbackfn: (value: T, value2: T, set: ReadonlySet<T>) => void,
    thisArg?: any
  ): void;
  has(value: T): boolean;
  readonly size: number;
}

interface WeakSet<T extends object> {
  add(value: T): this;
  delete(value: T): boolean;
  has(value: T): boolean;
}

interface WeakSetConstructor {
  new <T extends object>(values?: T[] | Set<T> | WeakSet<T> | null): WeakSet<T>;
}
declare var WeakSet: WeakSetConstructor;

interface SharedArrayBuffer {
  /**
   * Read-only. The length of the ArrayBuffer (in bytes).
   */
  readonly byteLength: number;
  /*
     * The SharedArrayBuffer constructor's length property whose value is 1.
     */
  length: number;
  /**
   * Returns a section of an SharedArrayBuffer.
   */
  slice(begin: number, end?: number): SharedArrayBuffer;
  //readonly [Symbol.species]: SharedArrayBuffer;
  //readonly [Symbol.toStringTag]: "SharedArrayBuffer";
}

interface SharedArrayBufferConstructor {
  readonly prototype: SharedArrayBuffer;
  new (byteLength: number): SharedArrayBuffer;
}

declare var SharedArrayBuffer: SharedArrayBufferConstructor;

interface ArrayBufferTypes {
  SharedArrayBuffer: SharedArrayBuffer;
}

interface Atomics {
  /**
   * Adds a value to the value at the given position in the array, returning the original value.
   * Until this atomic operation completes, any other read or write operation against the array
   * will block.
   */
  add(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number
  ): number;
  /**
   * Stores the bitwise AND of a value with the value at the given position in the array,
   * returning the original value. Until this atomic operation completes, any other read or
   * write operation against the array will block.
   */
  and(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number
  ): number;
  /**
   * Replaces the value at the given position in the array if the original value equals the given
   * expected value, returning the original value. Until this atomic operation completes, any
   * other read or write operation against the array will block.
   */
  compareExchange(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    expectedValue: number,
    replacementValue: number
  ): number;
  /**
   * Replaces the value at the given position in the array, returning the original value. Until
   * this atomic operation completes, any other read or write operation against the array will
   * block.
   */
  exchange(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number
  ): number;
  /**
   * Returns a value indicating whether high-performance algorithms can use atomic operations
   * (true) or must use locks (false) for the given number of bytes-per-element of a typed
   * array.
   */
  isLockFree(size: number): boolean;
  /**
   * Returns the value at the given position in the array. Until this atomic operation completes,
   * any other read or write operation against the array will block.
   */
  load(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number
  ): number;
  /**
   * Stores the bitwise OR of a value with the value at the given position in the array,
   * returning the original value. Until this atomic operation completes, any other read or write
   * operation against the array will block.
   */
  or(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number
  ): number;
  /**
   * Stores a value at the given position in the array, returning the new value. Until this
   * atomic operation completes, any other read or write operation against the array will block.
   */
  store(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number
  ): number;
  /**
   * Subtracts a value from the value at the given position in the array, returning the original
   * value. Until this atomic operation completes, any other read or write operation against the
   * array will block.
   */
  sub(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number
  ): number;
  /**
   * If the value at the given position in the array is equal to the provided value, the current
   * agent is put to sleep causing execution to suspend until the timeout expires (returning
   * "timed-out") or until the agent is awoken (returning "ok"); otherwise, returns
   * "not-equal".
   */
  wait(
    typedArray: Int32Array,
    index: number,
    value: number,
    timeout?: number
  ): "ok" | "not-equal" | "timed-out";
  /**
   * Wakes up sleeping agents that are waiting on the given index of the array, returning the
   * number of agents that were awoken.
   */
  notify(typedArray: Int32Array, index: number, count: number): number;
  /**
   * Stores the bitwise XOR of a value with the value at the given position in the array,
   * returning the original value. Until this atomic operation completes, any other read or write
   * operation against the array will block.
   */
  xor(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number
  ): number;
  //readonly [Symbol.toStringTag]: "Atomics";
}

declare var Atomics: Atomics;

type DateTimeFormatPartTypes =
  | "day"
  | "dayPeriod"
  | "era"
  | "hour"
  | "literal"
  | "minute"
  | "month"
  | "second"
  | "timeZoneName"
  | "weekday"
  | "year";

interface DateTimeFormatPart {
  type: DateTimeFormatPartTypes;
  value: string;
}

interface DateTimeFormat {
  formatToParts(date?: Date | number): DateTimeFormatPart[];
}

interface Intl {
  DateTimeFormat: DateTimeFormat;
}

declare var Intl: Intl;

interface TemplateStringsArray extends ReadonlyArray<string> {
  readonly raw: string[];
}
`,STANDARD_LIB_OPTIONS).program;function getTypeByLocation(location){if(module===undefined){return;}const varInfo=module.getVarAtPosition(location);return varInfo&&varInfo.type;}if(typeof getTypeByLocation!=='undefined'&&getTypeByLocation&&getTypeByLocation===Object(getTypeByLocation)&&Object.isExtensible(getTypeByLocation)&&!getTypeByLocation.hasOwnProperty('__filemeta')){Object.defineProperty(getTypeByLocation,'__filemeta',{configurable:true,value:{name:"getTypeByLocation",filename:"src/docs/try/components/hegel.js"}});}if(typeof getTypeByLocation!=='undefined'&&getTypeByLocation&&getTypeByLocation===Object(getTypeByLocation)&&Object.isExtensible(getTypeByLocation)&&!getTypeByLocation.hasOwnProperty('__filemeta')){Object.defineProperty(getTypeByLocation,'__filemeta',{configurable:true,value:{name:"getTypeByLocation",filename:"src/docs/try/components/hegel.js"}});}let stdLibTypeGraph;async function mixTypeDefinitions(globalScope){if(stdLibTypeGraph===undefined){stdLibTypeGraph=await getStandardTypeDefinitions(globalScope);}const body=new Map(globalScope.body);for(const[name,variable]of stdLibTypeGraph.body.entries()){variable.parent=globalScope;body.set(name,variable);}const typesBody=new Map(globalScope.typeScope.body);for(const[name,type]of stdLibTypeGraph.typeScope.body.entries()){type.parent=globalScope.typeScope;typesBody.set(name,type);}globalScope.body=body;globalScope.typeScope.body=typesBody;}if(typeof mixTypeDefinitions!=='undefined'&&mixTypeDefinitions&&mixTypeDefinitions===Object(mixTypeDefinitions)&&Object.isExtensible(mixTypeDefinitions)&&!mixTypeDefinitions.hasOwnProperty('__filemeta')){Object.defineProperty(mixTypeDefinitions,'__filemeta',{configurable:true,value:{name:"mixTypeDefinitions",filename:"src/docs/try/components/hegel.js"}});}if(typeof mixTypeDefinitions!=='undefined'&&mixTypeDefinitions&&mixTypeDefinitions===Object(mixTypeDefinitions)&&Object.isExtensible(mixTypeDefinitions)&&!mixTypeDefinitions.hasOwnProperty('__filemeta')){Object.defineProperty(mixTypeDefinitions,'__filemeta',{configurable:true,value:{name:"mixTypeDefinitions",filename:"src/docs/try/components/hegel.js"}});}async function getStandardTypeDefinitions(globalScope){const errors=[];const graph=await Object(_hegel_core__WEBPACK_IMPORTED_MODULE_1__["createModuleScope"])(STANDARD_AST,errors,()=>{},globalScope,true);if(errors.length>0){throw errors;}return graph;}if(typeof getStandardTypeDefinitions!=='undefined'&&getStandardTypeDefinitions&&getStandardTypeDefinitions===Object(getStandardTypeDefinitions)&&Object.isExtensible(getStandardTypeDefinitions)&&!getStandardTypeDefinitions.hasOwnProperty('__filemeta')){Object.defineProperty(getStandardTypeDefinitions,'__filemeta',{configurable:true,value:{name:"getStandardTypeDefinitions",filename:"src/docs/try/components/hegel.js"}});}if(typeof getStandardTypeDefinitions!=='undefined'&&getStandardTypeDefinitions&&getStandardTypeDefinitions===Object(getStandardTypeDefinitions)&&Object.isExtensible(getStandardTypeDefinitions)&&!getStandardTypeDefinitions.hasOwnProperty('__filemeta')){Object.defineProperty(getStandardTypeDefinitions,'__filemeta',{configurable:true,value:{name:"getStandardTypeDefinitions",filename:"src/docs/try/components/hegel.js"}});}async function getDiagnostics(sourceCode){let errors=[];try{const ast=Object(_babel_parser__WEBPACK_IMPORTED_MODULE_0__["parse"])(sourceCode,DEFAULT_OPTIONS).program;[[module],errors]=await Object(_hegel_core__WEBPACK_IMPORTED_MODULE_1__["createGlobalScope"])([ast],()=>{},false,mixTypeDefinitions,true);}catch(e){errors=[e];}return errors.map(toTransferableObject);}if(typeof getDiagnostics!=='undefined'&&getDiagnostics&&getDiagnostics===Object(getDiagnostics)&&Object.isExtensible(getDiagnostics)&&!getDiagnostics.hasOwnProperty('__filemeta')){Object.defineProperty(getDiagnostics,'__filemeta',{configurable:true,value:{name:"getDiagnostics",filename:"src/docs/try/components/hegel.js"}});}if(typeof getDiagnostics!=='undefined'&&getDiagnostics&&getDiagnostics===Object(getDiagnostics)&&Object.isExtensible(getDiagnostics)&&!getDiagnostics.hasOwnProperty('__filemeta')){Object.defineProperty(getDiagnostics,'__filemeta',{configurable:true,value:{name:"getDiagnostics",filename:"src/docs/try/components/hegel.js"}});}function toTransferableObject(error){const loc=error.loc;return{message:error.message,source:error.source,loc:loc&&formatLoc(loc)};}function formatLoc(loc){return loc.start?{start:{line:loc.start.line,column:loc.start.column},end:{line:loc.end.line,column:loc.end.column}}:{start:{line:loc.line,column:loc.column},end:{line:loc.line,column:loc.column+1}};}
addEventListener('message', function (e) {var ref = e.data;var type = ref.type;var method = ref.method;var id = ref.id;var params = ref.params;var f,p;if (type === 'RPC' && method) {if (f = __webpack_exports__[method]) {p = Promise.resolve().then(function () { return f.apply(__webpack_exports__, params); });} else {p = Promise.reject('No such method');}p.then(function (result) {postMessage({type: 'RPC',id: id,result: result});}).catch(function (e) {var error = {message: e};if (e.stack) {error.message = e.message;error.stack = e.stack;error.name = e.name;}postMessage({type: 'RPC',id: id,error: error});});}});postMessage({type: 'RPC',method: 'ready'});

/***/ })

/******/ });
//# sourceMappingURL=0dc5c633d38716540027.worker.js.map