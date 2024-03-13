"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[4075],{4762:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=a(4848),t=a(8453);const i={sidebar_position:3},r="API Modules",o={id:"advanced/objectapi/modules",title:"API Modules",description:"Module Namespaces",source:"@site/docs/advanced/objectapi/modules.md",sourceDirName:"advanced/objectapi",slug:"/advanced/objectapi/modules",permalink:"/docs/advanced/objectapi/modules",draft:!1,unlisted:!1,editUrl:"https://github.com/apigear-io/apigear-docs/edit/main/docs/advanced/objectapi/modules.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"API Foundation",permalink:"/docs/advanced/objectapi/core"},next:{title:"Advanced Concepts",permalink:"/docs/advanced/objectapi/advanced"}},d={},c=[{value:"Module Namespaces",id:"module-namespaces",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Object state",id:"object-state",level:3},{value:"Operation",id:"operation",level:3},{value:"Signals",id:"signals",level:3},{value:"Data Structures",id:"data-structures",level:2},{value:"Enumerations",id:"enumerations",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"api-modules",children:"API Modules"}),"\n",(0,s.jsx)(n.h2,{id:"module-namespaces",children:"Module Namespaces"}),"\n",(0,s.jsx)(n.p,{children:"A module is a namespace for ObjectAPI symbols like interfaces, structures and enumerations. The module bundles these symbols together in one namespace."}),"\n",(0,s.jsxs)(n.p,{children:["A module is identified by its ",(0,s.jsx)(n.code,{children:"name"})," and ",(0,s.jsx)(n.code,{children:"version"}),". The module name should be typically lowercase and words separated by ",(0,s.jsx)(n.code,{children:"."}),", like a reverse URI notation ",(0,s.jsx)(n.code,{children:"org.example"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["A module can have an additional ",(0,s.jsx)(n.code,{children:"info"})," block to describe in more detailed the module information."]}),"\n",(0,s.jsxs)(n.p,{children:["Typically a module consist of the ",(0,s.jsx)(n.code,{children:"apigear.interfaces"})," version declaration, the module name and version, the list of interfaces, structures and signals."]}),"\n",(0,s.jsx)(n.p,{children:"The version number must be written as a string, otherwise it wil be converted to a numeric value (e.g. 1 for 1.0)."}),"\n",(0,s.jsx)(n.p,{children:"Only ObjectAPI, name, version are mandatory. The other identifiers are optional."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'schema: apigear.module/1.0\nname: org.example\nversion: "1.0"\ninterfaces:\nstructs:\nenums:\n'})}),"\n",(0,s.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsx)(n.p,{children:"An interface is the main instance to describe your software boundary using interface terms. The interface consist of state, operation and signals. The state is typically describe a a set of properties of the interface and operations modify the interface state. Signals notify the user of changes of the interface."}),"\n",(0,s.jsxs)(n.p,{children:["The interface itself is identified by its ",(0,s.jsx)(n.code,{children:"name"})," inside a module."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'schema: apigear.module/1.0\nname: "org.example"\nversion: "1.0"\n\ninterfaces:\n  - name: MyInterface\n'})}),"\n",(0,s.jsx)(n.h3,{id:"object-state",children:"Object state"}),"\n",(0,s.jsxs)(n.p,{children:["Each property has a ",(0,s.jsx)(n.code,{children:"name"})," and a ",(0,s.jsx)(n.code,{children:"type"})," as also ",(0,s.jsx)(n.code,{children:"description"})," and additional ",(0,s.jsx)(n.code,{children:"meta"})," data."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# ...\ninterfaces:\n  - name: MyInterface\n    properties:\n      - name: value\n        type: int\n"})}),"\n",(0,s.jsx)(n.h3,{id:"operation",children:"Operation"}),"\n",(0,s.jsx)(n.p,{children:"A operation defines the interaction with the interface. It is a collection of operations which can either manipulate the properties or return data."}),"\n",(0,s.jsx)(n.p,{children:"Ideally you design your operations in a way that they can be divided into commands and queries. A command is an operation which does something on the interface and a query collects data from the interface and returns it to the user."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# ...\ninterfaces:\n  - name: MyInterface\n    operations:\n      - name: command\n        description: A command does not have a return type\n      - name: query\n        type: string\n        description: A query returns data\n"})}),"\n",(0,s.jsx)(n.p,{children:"Operation can have parameter arguments"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# ...\ninterfaces:\n  - name: MyInterface\n    operations:\n      - name: command\n        params:\n          - name: step\n            type: int\n        return:\n          type: int\n"})}),"\n",(0,s.jsx)(n.p,{children:"The arguments do parameterize the operation."}),"\n",(0,s.jsx)(n.h3,{id:"signals",children:"Signals"}),"\n",(0,s.jsx)(n.p,{children:"A signal allows the interface to notify the outside world about events happening, e.g. triggered by others. A signal is like an operation, but never defines a type."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# ...\ninterfaces:\n  - name: MyInterface\n    signals:\n      - name: error\n        params:\n          - name: code\n            type: int\n"})}),"\n",(0,s.jsx)(n.h2,{id:"data-structures",children:"Data Structures"}),"\n",(0,s.jsxs)(n.p,{children:["A structure represents a data structure which can be used for communication. The structure consists of a ",(0,s.jsx)(n.code,{children:"name"})," and a set of data fields. Each field again has a ",(0,s.jsx)(n.code,{children:"name"})," and a ",(0,s.jsx)(n.code,{children:"type"})," information."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# ...\nstructs:\n  - name: Message\n    fields:\n      - name: msg\n        type: string\n"})}),"\n",(0,s.jsx)(n.p,{children:"A data structure does not contain any operations or signals. A data structure is typically used as a type for properties, operation parameters and others."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# ...\ninterfaces:\n  - name: MessageSender\n    properties:\n      - name: lastMessage\n        type: Message\n    operations:\n      - name: send\n        params:\n          - name: msg\n            type: Message\n"})}),"\n",(0,s.jsx)(n.p,{children:"Data structure can be identified just be identified its name."}),"\n",(0,s.jsx)(n.p,{children:"Data structures can be nested by using the type name of the nested type. In some programming languages care needs to be taken by the order of declaration."}),"\n",(0,s.jsx)(n.h2,{id:"enumerations",children:"Enumerations"}),"\n",(0,s.jsx)(n.p,{children:"Enumerations and Flags are value types, which allow a user to use a defined number of choices to identify a value."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"enums:\n  - name: Status\n    members:\n      - name: None\n        value: 0\n      - name: Loading\n        value: 1\n      - name: Ready\n        value: 2\n      - name: Error\n        value: 3\n"})}),"\n",(0,s.jsx)(n.p,{children:"The values are optional and when missing the value is counted incrementally from 0 on upwards."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"enums:\n  - name: Status\n    members:\n      - name: None\n      - name: Loading\n      - name: Ready\n      - name: Error\n"})}),"\n",(0,s.jsx)(n.p,{children:"An enumeration is also a symbol and can be used by its name to identify its type."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# ...\ninterfaces:\n  - name: MyInterface\n    properties:\n      - name: status\n        type: Status # references the Status enumeration\n"})})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>o});var s=a(6540);const t={},i=s.createContext(t);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);