"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[328],{2669:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=t(4848),a=t(8453);const s={title:"API surface for objects",description:"Overview of a typical API surface for objects in an IDL.",slug:"api-surface",tags:["api","idl"],authors:[{name:"J\xfcrgen Ryannel",title:"Lead Programmer",image_url:"https://avatars.githubusercontent.com/u/636357?v=4"}]},i=void 0,o={permalink:"/blog/api-surface",source:"@site/blog/2023-02-27-api-surface.md",title:"API surface for objects",description:"Overview of a typical API surface for objects in an IDL.",date:"2023-02-27T00:00:00.000Z",tags:[{label:"api",permalink:"/blog/tags/api"},{label:"idl",permalink:"/blog/tags/idl"}],readingTime:2.945,hasTruncateMarker:!0,authors:[{name:"J\xfcrgen Ryannel",title:"Lead Programmer",image_url:"https://avatars.githubusercontent.com/u/636357?v=4",imageURL:"https://avatars.githubusercontent.com/u/636357?v=4"}],frontMatter:{title:"API surface for objects",description:"Overview of a typical API surface for objects in an IDL.",slug:"api-surface",tags:["api","idl"],authors:[{name:"J\xfcrgen Ryannel",title:"Lead Programmer",image_url:"https://avatars.githubusercontent.com/u/636357?v=4",imageURL:"https://avatars.githubusercontent.com/u/636357?v=4"}]},unlisted:!1},c={authorsImageUrls:[void 0]},l=[{value:"Properties",id:"properties",level:2},{value:"Operations",id:"operations",level:2},{value:"Signals",id:"signals",level:2},{value:"Structures",id:"structures",level:2},{value:"Enumerations",id:"enumerations",level:2},{value:"Modules",id:"modules",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"An API surface is the public interface of an object which is exposed to users of the object. The API surface is defined by an IDL and defines the contract between the user and the implementer of an object."}),"\n",(0,r.jsx)(n.p,{children:"The API surface for an object consists of the following parts:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Properties: Properties are the state of an object. They can be read and written and notify users about changes. Properties can be of any type."}),"\n",(0,r.jsx)(n.li,{children:"Operations: Operations are functions that can be called on an object. They can be synchronous or asynchronous. Operations can receive parameters and return a value."}),"\n",(0,r.jsx)(n.li,{children:"Signals: Signals are events that can be emitted by an object. They can be received by users of the object."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"interface name {\n    `prop-name` : type                     // property\n    `operation-name` ( params ): `type`       // operation\n    signal `signal-name` ( params )        // signal\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"For example a heating system could have the following API surface:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"interface HeatingSystem {\n    temperature: float\n    setTemperature(float temperature)\n    signal maxTemperatureReached()\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"As users of an API you can use the API surface to understand how to use an object. You can also use the API surface to understand how to implement an object. The API surface is the contract between the user and the implementer of an object."}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.p,{children:"Properties are the state of an object. They can be read and written and notify users about changes. Properties can be of any type."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"interface HeatingSystem {\n    temperature: float\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the example above the ",(0,r.jsx)(n.code,{children:"temperature"})," property is of type ",(0,r.jsx)(n.code,{children:"float"}),". The type can be any type that is supported by the IDL. The type can be a primitive type or a complex type. A primitive type can be one of the following:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"int"})," : integer value"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"float"})," : floating point value"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"string"})," : string value"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"bool"})," : boolean value"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Types can also be arrays. To define arrays of a type just append the ",(0,r.jsx)(n.code,{children:"[]"})," to the type (for example ",(0,r.jsx)(n.code,{children:"int[]"}),")."]}),"\n",(0,r.jsx)(n.h2,{id:"operations",children:"Operations"}),"\n",(0,r.jsx)(n.p,{children:"Operations are functions that can be called on an object. They can be synchronous or asynchronous. Operations can receive parameters and return a value."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"interface HeatingSystem {\n    setTemperature(float temperature)\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the example above the ",(0,r.jsx)(n.code,{children:"setTemperature"})," operation receives a parameter of type ",(0,r.jsx)(n.code,{children:"float"}),". The operation does not return a value."]}),"\n",(0,r.jsx)(n.h2,{id:"signals",children:"Signals"}),"\n",(0,r.jsx)(n.p,{children:"Signals are events that can be emitted by an object. They can be received by users of the object."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"interface HeatingSystem {\n    signal maxTemperatureReached()\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the example above the ",(0,r.jsx)(n.code,{children:"maxTemperatureReached"})," signal does not receive any parameters."]}),"\n",(0,r.jsx)(n.h2,{id:"structures",children:"Structures"}),"\n",(0,r.jsx)(n.p,{children:"Different than objects which can be interacted with, structures are just data structures that can be used to send complex information between objects. A structure is defined as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"struct Struct1 {}\n"})}),"\n",(0,r.jsx)(n.p,{children:"A struct can have fields of any type."}),"\n",(0,r.jsx)(n.h2,{id:"enumerations",children:"Enumerations"}),"\n",(0,r.jsx)(n.p,{children:"An enumeration is a set of named values. An enumeration is defined as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"enum Enum1 {\n    value1\n    value2\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"An enumeration can be used as a type for properties, operations and signals."}),"\n",(0,r.jsx)(n.h2,{id:"modules",children:"Modules"}),"\n",(0,r.jsx)(n.p,{children:"A module is a collection of objects, structures and enumerations. A module is defined as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"module name version\n\ninterface Name {}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The version of a module is a string that follows the ",(0,r.jsx)(n.a,{href:"https://semver.org/",children:"semver"})," format. The version of a module is optional. If no version is specified the version is ",(0,r.jsx)(n.code,{children:"0.0.0"}),"."]}),"\n",(0,r.jsx)(n.h1,{id:"working-with-the-api-surface",children:"Working with the API surface"}),"\n",(0,r.jsx)(n.p,{children:"When designing an API surface it is important to keep the following in mind:"})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(6540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);