"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[4394],{2962:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=t(74848),i=t(28453);const a={sidebar_position:3},r="Qt C++ SDK Template",c={id:"sdk/qtcpp-sdk",title:"Qt C++ SDK Template",description:"The Qt C++ template generates a CMake based SDK to develop QtQuick plugins or C++ libraries. Each API module is transformed into an own C++ library and wrapped in a QtQuick plugin. This allows you to use and test the library independent from the QtQuick technology.",source:"@site/docs/sdk/qtcpp-sdk.md",sourceDirName:"sdk",slug:"/sdk/qtcpp-sdk",permalink:"/docs/sdk/qtcpp-sdk",draft:!1,unlisted:!1,editUrl:"https://github.com/apigear-io/apigear-docs/edit/main/docs/sdk/qtcpp-sdk.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"C++ 14 SDK template",permalink:"/docs/sdk/cpp14-sdk"},next:{title:"Python SDK Template",permalink:"/docs/sdk/python-sdk"}},o={},l=[{value:"Interfaces",id:"interfaces",level:2},{value:"Data Structures",id:"data-structures",level:2},{value:"Enumerations",id:"enumerations",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"qt-c-sdk-template",children:"Qt C++ SDK Template"}),"\n",(0,s.jsx)(n.p,{children:"The Qt C++ template generates a CMake based SDK to develop QtQuick plugins or C++ libraries. Each API module is transformed into an own C++ library and wrapped in a QtQuick plugin. This allows you to use and test the library independent from the QtQuick technology."}),"\n",(0,s.jsx)(n.p,{children:"The Qt C++ SDK also supports the use of the simulation backend. And the ApiGear analytics data center (experimental)."}),"\n",(0,s.jsx)(n.p,{children:"Following template feature switches are supported:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Basic - Only creates the interface files for you"}),"\n",(0,s.jsx)(n.li,{children:"Scaffold - Creates a full project with reference implementation and build system support."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In the generated source code you will find a ",(0,s.jsx)(n.code,{children:"README"})," which explain in great detail how to build and use the code."]}),"\n",(0,s.jsx)(n.h1,{id:"api",children:"API"}),"\n",(0,s.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsx)(n.p,{children:"An interface like this counter will be directly transformed to an abstract C++ class."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"interfaces:\n  - name: Counter\n    properties:\n      - name: count\n        type: int\n    operations:\n      - name: increment\n"})}),"\n",(0,s.jsx)(n.p,{children:"The class will then later be used to be implemented by the customer."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class AbstractCounter : public QObject {\n    Q_OBJECT\npublic:\n    AbstractCounter(QObject * parent=nullptr);\n    virtual void setCount(int count) = 0;\n    virtual int count() const = 0;\n    virtual void increment() = 0;\nQ_SIGNALS:\n    void countChanged(int count);\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"data-structures",children:"Data Structures"}),"\n",(0,s.jsx)(n.p,{children:"A data structure like this message which contains one field, called text is transformed into a C++ class with public fields."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"structs:\n  - name: Message\n    fields:\n      - name: text\n        type: string\n"})}),"\n",(0,s.jsx)(n.p,{children:"A data structure is transformed to a Qt C++ gadget so it can be also be used later in QML."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Message\n{\n    Q_GADGET\n    Q_PROPERTY(QString text READ text WRITE setText)\n\npublic:\n    Message();\n    void setText(const QString& text);\n    QString text() const;\n\n    bool operator==(const Message &other) const;\n    bool operator!=(const Message &other) const;\n\nprivate:\n    QString m_text;\n};\n\nQ_DECLARE_METATYPE(Message)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"enumerations",children:"Enumerations"}),"\n",(0,s.jsx)(n.p,{children:"A enumeration will be transformed to a standalone class with an enum embedded."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"enums:\n  - name: Direction\n    members:\n      - name: Up\n      - name: Down\n      - name: Left\n      - name: Right\n"})}),"\n",(0,s.jsx)(n.p,{children:"This is transformed to"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Direction : public QObject {\n    Q_OBJECT\npublic:\n    Direction(QObject *parent = nullptr)\n        : QObject(parent)\n        {}\n    enum DirectionEnum {\n        Up = 0,\n        Down = 1,\n        Left = 2,\n        Right = 3,\n    };\n    Q_ENUM(DirectionEnum)\n\n    static DirectionEnum toEnum(quint8 v, bool *ok);\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(96540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);