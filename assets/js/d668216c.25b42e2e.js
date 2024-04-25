"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[3081],{10280:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=t(74848),i=t(28453);const r={sidebar_position:2},a="C++ 14 SDK template",c={id:"sdk/cpp14-sdk",title:"C++ 14 SDK template",description:"The C++ 14 code SDK generates C++ 14 conform interfaces to be implemented by the developers. If scaffolding is switched on it will also generate a full project with CMake, Conan and test support. The project will scale with new API modules.",source:"@site/docs/sdk/cpp14-sdk.md",sourceDirName:"sdk",slug:"/sdk/cpp14-sdk",permalink:"/docs/sdk/cpp14-sdk",draft:!1,unlisted:!1,editUrl:"https://github.com/apigear-io/apigear-docs/edit/main/docs/sdk/cpp14-sdk.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/docs/sdk/intro"},next:{title:"Qt C++ SDK Template",permalink:"/docs/sdk/qtcpp-sdk"}},o={},l=[{value:"Interfaces",id:"interfaces",level:2},{value:"Data Structures",id:"data-structures",level:2},{value:"Enumerations",id:"enumerations",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"c-14-sdk-template",children:"C++ 14 SDK template"}),"\n",(0,s.jsx)(n.p,{children:"The C++ 14 code SDK generates C++ 14 conform interfaces to be implemented by the developers. If scaffolding is switched on it will also generate a full project with CMake, Conan and test support. The project will scale with new API modules."}),"\n",(0,s.jsx)(n.p,{children:"Following template feature switches are supported:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Basic - Only creates the interface files for you"}),"\n",(0,s.jsx)(n.li,{children:"Scaffold - Creates a full project with reference implementation and build system support."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In the generated source code you will find a ",(0,s.jsx)(n.code,{children:"README"})," which explains in great detail how to build and use the code."]}),"\n",(0,s.jsx)(n.h1,{id:"api",children:"API"}),"\n",(0,s.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsx)(n.p,{children:"An interface like this counter will be directly transformed to an abstract C++ class."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"interfaces:\n  - name: Counter\n    properties:\n      - name: count\n        type: int\n    operations:\n      - name: increment\n"})}),"\n",(0,s.jsx)(n.p,{children:"The class will then later be used to be implemented by the customer."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class CounterBase\n{\npublic:\n    CounterBase(){};\n    virtual ~CounterBase(){};\n// methods\n    virtual void increment() = 0;\n\n// property methods\n    virtual void setCount(int count) = 0;\n    virtual int count() const = 0;\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"data-structures",children:"Data Structures"}),"\n",(0,s.jsx)(n.p,{children:"A data structure like this message which contains one field, called text is transformed into a C++ class with public fields."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"structs:\n  - name: Message\n    fields:\n      - name: text\n        type: string\n"})}),"\n",(0,s.jsx)(n.p,{children:"A data structure is transformed to a Qt C++ class with public fields."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Message\n{\npublic:\n    Message();\n    void setText(const std::string& text);\n    std::string text() const;\n\n    bool operator==(const Message &other) const;\n    bool operator!=(const Message &other) const;\n\nprivate:\n    std::string m_text;\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"enumerations",children:"Enumerations"}),"\n",(0,s.jsx)(n.p,{children:"A enumeration will be transformed to a standalone class with an enum embedded."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"enums:\n  - name: Direction\n    members:\n      - name: Up\n      - name: Down\n      - name: Left\n      - name: Right\n"})}),"\n",(0,s.jsx)(n.p,{children:"This is transformed to"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Direction {\npublic:\n    Direction()\n        {}\n    enum DirectionEnum {\n        Up = 0,\n        Down = 1,\n        Left = 2,\n        Right = 3\n    };\n\n    static DirectionEnum toEnum(std::uint8_t v, bool *ok);\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var s=t(96540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);