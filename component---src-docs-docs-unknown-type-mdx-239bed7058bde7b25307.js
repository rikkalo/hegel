(this.webpackJsonp=this.webpackJsonp||[]).push([[24],{1316:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return p}));t(19),t(5),t(3),t(1),t(13),t(14),t(22);var a=t(59),o=t(66);t(36);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/docs/unknown-type.mdx"}});var i={_frontmatter:c},s=o.a;function p(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(a.b)(s,r({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"unknown-type"},"Unknown Type"),Object(a.b)("hr",null),Object(a.b)("p",null,"Sometimes you don't know which type will come as function argument/variable value/object property value.\nAs example ",Object(a.b)("a",r({parentName:"p"},{href:"https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse"}),Object(a.b)("inlineCode",{parentName:"a"},"JSON.parse")),". This function can return array of any types, object with any properties or any valid JSON value like string, number, boolean and etc."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-typescript"}),"const anything = JSON.parse('{ \"name\": null }');\n")),Object(a.b)("p",null,"The most general type in Hegel is ",Object(a.b)("inlineCode",{parentName:"p"},"unknown"),". You can imagine this type as ",Object(a.b)("a",r({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Universal_set"}),'"Universal Set"'),". It means that all possible values in JavaScript has ",Object(a.b)("inlineCode",{parentName:"p"},"unknown")," type. It's a supertype for all types in Hegel type system."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-typescript"}),'const anyNumber: unknown = 2;\nconst anyString: unknown = "something";\nconst anything: unknown = class User {};\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you already familiar with TypeScript or Flow.js, this type has the same semantic as ",Object(a.b)("inlineCode",{parentName:"p"},"unknown")," in TS or ",Object(a.b)("inlineCode",{parentName:"p"},"mixed")," in Flow.js")),Object(a.b)("p",null,"But, as you can understand, you can assign concret type to wider type, but you can't assign wider type to a concrete type."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-typescript"}),'const concretType: string = "I\'m good for unknown";\nconst wideType: unknown = "I\'m too wide for string";\n\nconst iCanBeUnknown: unknown = concretType;\nconst andICanBeString: string = concretType;\n\nconst andICanBeUnknownToo: unknown = wideType;\nconst butCantBeString: string = wideType;\n')),Object(a.b)("p",null,"Also, it means that you can't use unknown type as an argument for function which waiting for some concrete type:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-typescript"}),"function waitingFor(value: string) {\n  return `Awesome ${value}`;\n}\n\nconst anything: unknown = 4;\n\nwaitingFor(anything);\n")),Object(a.b)("p",null,"Or operator:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-typescript"}),"function waitingFor(value: unknown) {\n  return `Awesome ${value}`;\n}\n\nwaitingFor(class User {});\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Actualy, Hegel provide an ability to ",Object(a.b)("a",r({parentName:"p"},{href:"/docz/docs/type-refinement"}),"refine type"),".")))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/docs/unknown-type.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-docs-unknown-type-mdx-239bed7058bde7b25307.js.map