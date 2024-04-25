"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[6413],{8832:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});var o=t(74848),r=t(28453),i=t(21432),a=t(64214);const l={sidebar_position:4},c="Monitor",s={id:"features/monitor",title:"Monitor",description:"Use our monitor feature to examine the interface calls, state and signals. With this feature you obtain a monitor client and a monitored version of your interfaces. The monitoring server is embedded into the ApiGear Studio and CLI application(/docs/cli/intro).",source:"@site/template-docs/template-qt6/docs/docs/features/monitor.md",sourceDirName:"features",slug:"/features/monitor",permalink:"/template-qt6/docs/features/monitor",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Olink",permalink:"/template-qt6/docs/features/olink"},next:{title:"QML Plugin",permalink:"/template-qt6/docs/features/qmlplugin"}},d={},h=[{value:"File overview for module",id:"file-overview-for-module",level:2},{value:"Qt Trace Client",id:"qt-trace-client",level:3},{value:"Monitor",id:"monitor-1",level:3},{value:"Tracing with QML objects",id:"tracing-with-qml-objects",level:3},{value:"Setup",id:"setup",level:3}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"monitor",children:"Monitor"}),"\n",(0,o.jsxs)(n.p,{children:["Use our monitor feature to examine the interface calls, state and signals. With this feature you obtain a monitor client and a monitored version of your interfaces. The monitoring server is embedded into the ",(0,o.jsx)(n.a,{href:"/docs/studio/intro",children:"ApiGear Studio"})," and CLI application(/docs/cli/intro).\nMore details on ",(0,o.jsx)(n.a,{href:"/docs/advanced/monitor/intro",children:"monitoring"})]}),"\n",(0,o.jsx)(n.h2,{id:"file-overview-for-module",children:"File overview for module"}),"\n",(0,o.jsx)(n.p,{children:"With an example  API"}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Hello World API (click to expand)"}),(0,o.jsx)(i.A,{language:"yaml",showLineNumbers:!0,children:a.A})]}),"\n",(0,o.jsx)(n.p,{children:"the following file structure will be generated. The purpose and content of each file is explained below."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:"{4,16}",children:"\ud83d\udcc2hello-world\n \u2523 \ud83d\udcc2apigear\n \u2503 ...\n \u2523 \ud83d\udcc2qt_hello_world\n \u2503 \u2523 \ud83d\udcc2apigear\n \u2503 \u2503 \u2523 \ud83d\udcc2monitor\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcagentclient.cpp\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcagentclient.h\n \u2503 \u2503 \u2503 \u2517 \ud83d\udcdcCMakeLists.txt\n \u2503 \u2503 ...\n \u2503 \u2523 \ud83d\udcc2examples\n \u2503 \u2523 \ud83d\udcc2io_world\n \u2503 \u2503 \u2523 \ud83d\udcc2api\n \u2503 \u2503 \u2523 \ud83d\udcc2implementation\n \u2503 \u2503 \u2523 \ud83d\udcc2olink\n \u2503 \u2503 \u2523 \ud83d\udcc2monitor\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcagent.cpp\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcagent.h\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcCMakeLists.txt\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdctracedapifactory.cpp\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdctracedapifactory.h\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdchellotraced.cpp\n \u2503 \u2503 \u2503 \u2517 \ud83d\udcdchellotraced.h\n ...\n"})}),"\n",(0,o.jsx)(n.h3,{id:"qt-trace-client",children:"Qt Trace Client"}),"\n",(0,o.jsxs)(n.p,{children:["When generating the monitor feature (or olink feature) you'll get an additional folder it the top most directory: \ud83d\udcc2hello-world/\ud83d\udcc2apigear. The \ud83d\udcc2monitor subfolder contains a client for logging, with a network layer (based on the QtWebSocket library).\nThe class connects to the ",(0,o.jsx)(n.code,{children:"Apigear Trace Server"})," and takes care of formatting and sending the traces."]}),"\n",(0,o.jsx)(n.h3,{id:"monitor-1",children:"Monitor"}),"\n",(0,o.jsxs)(n.p,{children:["Files ",(0,o.jsx)(n.code,{children:"\ud83d\udcdchellotraced.h"})," and ",(0,o.jsx)(n.code,{children:"\ud83d\udcdchellotraced.cpp"})," contain the trace wrapper for the ",(0,o.jsx)(n.code,{children:"Hello"})," interface. The wrapper class is generated for each interface."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"class IO_WORLD_MONITOR_EXPORT HelloTraced : public AbstractHello\n{\n    explicit HelloTraced(std::shared_ptr<AbstractHello> impl);\n\n...\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["It shares the ownership of the wrapped object. It forwards all calls to the implementation and forwards all the signals (including the property changed signals) calls from it, so you can use the ",(0,o.jsx)(n.code,{children:"TracedHello"})," as a ",(0,o.jsx)(n.code,{children:"Hello"})," object. Note that the ",(0,o.jsx)(n.code,{children:"Hello"})," object is the object that fulfills the ",(0,o.jsx)(n.code,{children:"AbstractHello"})," interface, it can be e.g. the ",(0,o.jsx)(n.a,{href:"/template-qt6/docs/features/olink",children:(0,o.jsx)(n.code,{children:"OlinkClient"})})," version of ",(0,o.jsx)(n.code,{children:"Hello"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"\ud83d\udcdcagent.h"})," and ",(0,o.jsx)(n.code,{children:"\ud83d\udcdcagent.cpp"})," files contain helpers to prepare interface specific trace data for the general tracing ",(0,o.jsx)(n.a,{href:"monitor#qt-trace-client",children:"TraceClient"})]}),"\n",(0,o.jsx)(n.h3,{id:"tracing-with-qml-objects",children:"Tracing with QML objects"}),"\n",(0,o.jsxs)(n.p,{children:["Files ",(0,o.jsx)(n.code,{children:"\ud83d\udcdctracedapifactory.h"}),"  and ",(0,o.jsx)(n.code,{children:"\ud83d\udcdctracedapifactory.cpp"})," contain the TracedApiFactory which creates the interfaces wrapped with the trace decorator.\nIn our example it will produce only ",(0,o.jsx)(n.code,{children:"Hello"})," interfaces:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"class IO_WORLD_MONITOR_EXPORT TracedApiFactory : public QObject, public IApiFactory\n{\n    TracedApiFactory(IApiFactory& factory, QObject *parent = nullptr);\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The factory is necessary when you want to use the traced ",(0,o.jsx)(n.code,{children:"Hello"})," object directly in QML. For that, you will choose the ",(0,o.jsx)(n.a,{href:"qmlplugin#qml-wrappers",children:"QML version"})," of your API to which you need provide proper backend - this is what the factory is for. See more details ",(0,o.jsx)(n.a,{href:"qmlplugin#providing-backend-to-qml-wrapper",children:"on providing backend to QML wrapper"}),". The important difference between other factories implementations is, that the ",(0,o.jsx)(n.code,{children:"TracedHello"})," is a wrapper, it requires the actual implementation to be passed to it. Therefor the factory needs a factory of the actual implementation objects, which it will wrap with the trace functionality. That it requires a factory in constructor. You can provide any backed you need e.g. your custom object, the ",(0,o.jsx)(n.a,{href:"/template-qt6/docs/features/olink",children:(0,o.jsx)(n.code,{children:"OlinkClient"})}),".\nSee the example of traced OlinkClient backend below:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:'    // Prepare Factory before app is created.\n    ApiGear::ObjectLink::ClientRegistry client_registry;\n    ApiGear::ObjectLink::OLinkClient client(client_registry);\n    io_world::OLinkFactory io_worldOlinkFactory(client);\n    io_world::TracedApiFactory io_worldTracedOlinkFactory(io_worldOlinkFactory); \n    io_world::ApiFactory::set(&io_worldTracedOlinkFactory);\n    ...\n    // Connect the client - all qml olink clients will be linked if the server services are already up.\n    client.connectToHost(QUrl("ws://127.0.0.1:8182"));\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The factory uses the ",(0,o.jsx)(n.code,{children:"ApiGear::ObjectLink::OLinkClient"})," and links the objects when they are created. You don't have to perform any other actions, just use your qml version of ",(0,o.jsx)(n.code,{children:"Hello"}),". Also on trace the TracedHello calls the ",(0,o.jsx)(n.code,{children:"AgentClient"})," monitor class that handles connection to trace server. So with such setup you'll be able to get your data from ",(0,o.jsx)(n.code,{children:"OlinkServer"})," and see the traces in ApiGear studio."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-qml",children:"...\nimport io_world 1.0\n\nApplicationWindow {\n...\n            Button {\n            width: 80\n            height: 80\n            text: qmlIoWorldHello.last.content\n            onClicked: {\n                qmlIoWorldHello.say(someMessage, someWhen)\n            }\n        }\n    IoWorldHello { id: qmlIoWorldHello }\n...\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,o.jsx)(n.p,{children:"This feature requires using the classes wrapped with monitor decorators, which collect the traces, instead of using the implementation classes directly. Either in qml as shown above or in your code, where you create the interface instances."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'\n#include "io_world/implementation/hello.h"\n#include "io_world/monitor/hellotraced.h"\n\n#include <QtCore>\n#include <memory>\n\n#include <iostream>\n\nint main(){\n\n    auto ioWorldHello = std::make_shared<io_world::Hello>();\n    io_world::HelloTraced ioWorldHelloTraced(ioWorldHello);\n\n    useIoWorldHEllo(ioWorldHelloTraced); // your code that requires io_world::Hello\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Also make sure that you are using the same port for sending and receiving traces.\nFor sending: check the ",(0,o.jsx)(n.a,{href:"monitor#qt-trace-client",children:"apigear monitor agent"})," ",(0,o.jsx)(n.code,{children:"agentclient.cpp"}),", by default the address is set to ",(0,o.jsx)(n.code,{children:"ws://localhost:8152/ws"}),".\nFor receiver: go to studio settings and set same port number."]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},64214:(e,n,t)=>{t.d(n,{A:()=>o});const o='schema: apigear.module/1.0\nname: io.world\nversion: "1.0.0"\n\ninterfaces:\n  - name: Hello\n    properties:\n      - { name: last, type: Message }\n    operations:\n      - name: say\n        params:\n          - { name: msg, type: Message }\n          - { name: when, type: When }\n        return:\n          type: int\n    signals:\n      - name: justSaid\n        params:\n          - { name: msg, type: Message }\nenums:\n  - name: When\n    members:\n      - { name: Now, value: 0 }\n      - { name: Soon, value: 1 }\n      - { name: Never, value: 2 }\nstructs:\n  - name: Message\n    fields:\n      - { name: content, type: string }\n'}}]);