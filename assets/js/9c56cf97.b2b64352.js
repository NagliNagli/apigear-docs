"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[6813],{58707:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var i=t(74848),s=t(28453),o=t(21432),r=t(22295);t.p;const l={sidebar_position:3},a="MQTT",c={id:"features/mqtt",title:"MQTT",description:"This is an experimental feature. It contains the smallest working set of functionalities to adapt the generated interface for use with the MQTT protocol.",source:"@site/template-docs/template-cpp14/docs/docs/features/mqtt.md",sourceDirName:"features",slug:"/features/mqtt",permalink:"/template-cpp14/docs/features/mqtt",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Stubs",permalink:"/template-cpp14/docs/features/stubs"},next:{title:"Olink",permalink:"/template-cpp14/docs/features/olink"}},d={},h=[{value:"File overview for module",id:"file-overview-for-module",level:2},{value:"ApiGear MQTT - The Network Layer",id:"apigear-mqtt---the-network-layer",level:3},{value:"MQTT Client Adapter",id:"mqtt-client-adapter",level:3},{value:"Properties",id:"properties",level:4},{value:"Operations",id:"operations",level:4},{value:"Signals",id:"signals",level:4},{value:"Use <code>HelloClient</code>",id:"use-helloclient",level:4},{value:"MQTT Server Adapter",id:"mqtt-server-adapter",level:3},{value:"Properties",id:"properties-1",level:4},{value:"Operations",id:"operations-1",level:4},{value:"Signals",id:"signals-1",level:4},{value:"Use <code>HelloService</code>",id:"use-helloservice",level:4},{value:"MQTT Messages",id:"mqtt-messages",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Details:l}=n;return l||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"mqtt",children:"MQTT"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"This is an experimental feature. It contains the smallest working set of functionalities to adapt the generated interface for use with the MQTT protocol.\nIt doesn't include any security, the error handling is minimal and it is not production ready. Please also check issues on github for this template."})}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.a,{href:"https://eclipse.dev/paho/index.php?page=clients/python/index.php",children:"PAHO"})," library is used to implement MQTT in this library. It seems to have significant performance limitations for high load."]}),(0,i.jsx)(n.p,{children:"If you need to use MQTT in high load application consider using our qt template - currently seems to be working much better."})]}),"\n",(0,i.jsxs)(n.p,{children:["This feature does not only introduce MQTT protocol into your project, but also show that an existing protocol can be adapted for sharing your data in your ecosystem. When going through this document you may notice this implementation contains general client/server adapters in ",(0,i.jsx)(n.code,{children:"\ud83d\udcc2hello-world/apigear/mqtt"}),"\nand an interface specific part generated from templates for each interface in ",(0,i.jsx)(n.code,{children:"\ud83d\udcc2hello-world/cpp_hello_world/modules/io_world/generated/mqtt"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This feature provides a ",(0,i.jsx)(n.em,{children:"client"})," and ",(0,i.jsx)(n.em,{children:"service"})," adapter for your interfaces for the MQTT protocol. It allows you to connect different applications in the same or different technologies (check all of our ",(0,i.jsx)(n.a,{href:"/docs/sdk/intro",children:"templates"}),")."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use an ",(0,i.jsx)(n.em,{children:"Mqtt client"})," instead of your interface implementation to be able to receive data from remote service."]}),"\n",(0,i.jsxs)(n.li,{children:["Use an ",(0,i.jsx)(n.em,{children:"Mqtt server adapter"})," to expose your interface implementation as a remote service."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"The MQTT broker is not provided with the template. To be able to run client and service you need to run a broker of your choice, which is accessible for both client and service."})}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["In this library we use STL classes in public interfaces.\nWe assume that this library is built from source (configuration provided by generated ",(0,i.jsx)(n.code,{children:"CMakeLists"}),").\nOtherwise, it has to be ensured that your build configuration matches the library build configuration."]})}),"\n",(0,i.jsx)(n.h2,{id:"file-overview-for-module",children:"File overview for module"}),"\n",(0,i.jsx)(n.p,{children:"With our API definition"}),"\n",(0,i.jsxs)(l,{children:[(0,i.jsx)("summary",{children:"Hello World API (click to expand)"}),(0,i.jsx)(o.A,{language:"yaml",showLineNumbers:!0,children:r.A})]}),"\n",(0,i.jsx)(n.p,{children:"the following file structure is generated. The purpose and content of each file is explained below."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:"{6,21}",children:"\ud83d\udcc2hello-world\n \u2523 \ud83d\udcc2apigear\n \u2503 ...\n \u2523 \ud83d\udcc2cpp_hello_world\n \u2503 \u2523 \ud83d\udcc2apigear\n \u2503 \u2503 \u2523 \ud83d\udcc2mqtt\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcCMakeLists.txt\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcmqttclient.cpp\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcmqttclient.h\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcmqttservice.cpp\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcmqttservice.h\n \u2503 \u2503 \u2503 \u2523 ... (helper files)\n \u2503 \u2503 ...\n \u2503 \u2523 \ud83d\udcc2examples\n \u2503 \u2523 \ud83d\udcc2modules\n \u2503 \u2503 \u2517 \ud83d\udcc2io_world\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcc2generated\n \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcc2mqtt\n \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcCMakeLists.txt\n \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdchelloclient.cpp\n \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdchelloclient.h\n \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdchelloservice.cpp\n \u2503 \u2503 \u2503 \u2503 \u2503 \u2517 \ud83d\udcdchelloservice.h\n ...\n"})}),"\n",(0,i.jsx)(n.h3,{id:"apigear-mqtt---the-network-layer",children:"ApiGear MQTT - The Network Layer"}),"\n",(0,i.jsxs)(n.p,{children:["When using the ",(0,i.jsx)(n.code,{children:"mqtt"})," feature (or any of those: ",(0,i.jsx)(n.code,{children:"olink"}),", ",(0,i.jsx)(n.code,{children:"monitor"})," feature) you'll get an additional folder at the top most directory: the ",(0,i.jsx)(n.code,{children:"\ud83d\udcc2hello-world/cpp_hello_world/apigear"}),". The ",(0,i.jsx)(n.code,{children:"\ud83d\udcc2mqtt"})," subfolder contains objects that implement a network layer (based on ",(0,i.jsx)(n.a,{href:"https://eclipse.dev/paho/index.php?page=clients/python/index.php",children:"PAHO"})," library) for the MQTT protocol. Those are:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Client"})," - Adapts the MQTT client, to serve as an network endpoint for ",(0,i.jsx)(n.a,{href:"mqtt#mqtt-client-adapter",children:"interface client adapters"}),".\nExposes:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"methods that allow receiving data from remote service: subscribing for properties changes, signals emission and method response invocation;"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"methods that allow remote using the service: requesting property change or invoking a method."}),"\n",(0,i.jsx)(n.p,{children:"The client may serve many client interface adapters, even for the same interfaces (allows subscribing for same topic).\nIn case many interface client adapters for same interface are connected: property changes and signals are provided to all the interface client adapters, but the invoke method response will be delivered only for the one that requested it."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ServiceAdapter"})," - Adapts the MQTT client to serve as an network endpoint for ",(0,i.jsx)(n.a,{href:"mqtt#mqtt-server-adapter",children:"interface service adapters"}),".\nExposes:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"methods that allow receiving requests from remote clients: subscribing for properties change requests, send method invocation;"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"methods that allow publishing property change, signal, functionality to handles sending a response for method invocation requests."}),"\n",(0,i.jsxs)(n.p,{children:["This ",(0,i.jsx)(n.code,{children:"ServiceAdapter"})," may be used for many interface service adapters, but it is not recommended to use more than one interface service adapter for same interface."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Have in mind that MQTT might not be suitable for high-frequency messages especially with one mqtt client serving more than one object.\nAlso the brokers have limits for messages number/size queued from one client. In case you are not getting all the messages consider changing those or splitting traffic between more clients (maybe some handle the properties, some handle the methods)."})}),"\n",(0,i.jsx)(n.h3,{id:"mqtt-client-adapter",children:"MQTT Client Adapter"}),"\n",(0,i.jsxs)(n.p,{children:["Files ",(0,i.jsx)(n.code,{children:"\ud83d\udcdchelloclient.h"})," and ",(0,i.jsx)(n.code,{children:"\ud83d\udcdchelloclient.cpp"})," implement the remote client for the ",(0,i.jsx)(n.code,{children:"Hello"})," interface - a ",(0,i.jsx)(n.code,{children:"HelloClient"})," class.",(0,i.jsx)("br",{}),"\nThe object is an ",(0,i.jsx)(n.code,{children:"IHello"})," implementation.",(0,i.jsx)("br",{}),"\nIt requires an instance of Apigear::Mqtt::Client to work. It uses the Client to subscribe (and unsubscribe) for topics that allow receiving properties, signals and invoke responses from service."]}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(n.p,{children:["The property getters (here ",(0,i.jsx)(n.code,{children:"getLast()"})," ) return immediately the locally stored,last received value from service. ",(0,i.jsx)("br",{}),"\nThe property setter (here ",(0,i.jsx)(n.code,{children:"void setLast(const Message& last)"})," ) requests setting a value on service side, local value is not changed. ",(0,i.jsx)("br",{}),"\nYou can subscribe to a property change event (here ",(0,i.jsx)(n.code,{children:"last"})," property ) through the publisher which you can get from the API with ",(0,i.jsx)(n.code,{children:"_getPublisher()"}),".\nOr you can subscribe as an ",(0,i.jsx)(n.code,{children:"IHelloSubscriber"})," and get all changes. See ",(0,i.jsx)(n.a,{href:"/template-cpp14/docs/features/api#publisher",children:"publisher"})," and ",(0,i.jsx)(n.a,{href:"/template-cpp14/docs/features/api#subscriber",children:"subscriber"})," for more info on subscribing.\nWhen the client receives information that server changed the property, a target property (here ",(0,i.jsx)(n.code,{children:"last"}),") is updated locally and a notifies subscribers that property has changed."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The connected interface client adapter has its local properties in sync with a service. The messages with property changes are retained in MQTT broker, so all properties which are already set are provided."})}),"\n",(0,i.jsx)(n.h4,{id:"operations",children:"Operations"}),"\n",(0,i.jsx)(n.p,{children:"The operations have an async version, which is called by the immediate version."}),"\n",(0,i.jsx)(n.p,{children:"The async version sends an invoke operation request to a server."}),"\n",(0,i.jsxs)(n.p,{children:["So calling ",(0,i.jsx)(n.code,{children:"myHelloClientInstance.say(myWhen)"})," implements execution of ",(0,i.jsx)(n.code,{children:"sayAsync"})," and waits for the result (for non-void type of operations). Have in mind that this is a blocking operation."]}),"\n",(0,i.jsx)(n.h4,{id:"signals",children:"Signals"}),"\n",(0,i.jsx)(n.p,{children:"You should not emit any signals from a client."}),"\n",(0,i.jsxs)(n.p,{children:["You can subscribe to any signals offered by your interface (here ",(0,i.jsx)(n.code,{children:"justSaid)"})," signal), through the publisher. You can either select the signal you're interested in, or subscribe as an ",(0,i.jsx)(n.code,{children:"IHelloSubscriber"})," to get all the signals and property change notifications."]}),"\n",(0,i.jsxs)(n.p,{children:["When a ",(0,i.jsx)(n.code,{children:"HelloClient"})," client receives the message from server that indicates the signal was emitted it notifies all the subscribers that requested this notification.."]}),"\n",(0,i.jsxs)(n.h4,{id:"use-helloclient",children:["Use ",(0,i.jsx)(n.code,{children:"HelloClient"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"HelloClient"})," is an adapter of Mqtt (with protocol and network layer implementation), here provided by a ",(0,i.jsx)(n.code,{children:"ApiGear::MQTT::Client"}),".\nAll you need to do is to pass the ",(0,i.jsx)(n.code,{children:"ApiGear::MQTT::Client"})," to your Interface Client Adapter, and request connecting to host when it is convenient for you."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'// Create a client and make a connection\nauto mqttclient = std::make_shared<ApiGear::MQTT::Client>("UniqueClientName");\n\n// set up modules\nauto ioWorldHello = std::make_unique<IoWorld::MQTT::HelloClient>(mqttclient);\n\n// start mqtt connection\nmqttclient.connectToHost("tcp://localhost:1883"); // Use the same port number as your broker is using. Typically, without any other settings it is "1883".\n\n// use your ioWorldHello as it was Hello implementation\nioWorldHello->say(IoWorld::WhenEnum::Soon);\nauto lastMessage = ioWorldHello->getLast();\nIoWorld::Message someMessage("the new content");\nioWorldHello->setLast(someMessage);\ntestIoWorldHello->_getPublisher().subscribeToJustSaid([](auto args) { /*handle the signal*/});\n'})}),"\n",(0,i.jsx)(n.h3,{id:"mqtt-server-adapter",children:"MQTT Server Adapter"}),"\n",(0,i.jsxs)(n.p,{children:["The files ",(0,i.jsx)(n.code,{children:"\ud83d\udcdchelloservice.h"})," and ",(0,i.jsx)(n.code,{children:"\ud83d\udcdchelloservice.cpp"})," contain the MQTT service side adapter for the ",(0,i.jsx)(n.code,{children:"Hello"})," interface - the ",(0,i.jsx)(n.code,{children:"HelloService"})," class. It uses the general MQTT service adapter ",(0,i.jsx)(n.code,{children:"ApiGear::MQTT::Service"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"HelloService"})," object exposes the local object for remote usage with the MQTT protocol. It handles all the network requests, and calls on your local object.\nThe client connections and communication with them is handled transparently for you, no additional actions are needed."]}),"\n",(0,i.jsx)(n.h4,{id:"properties-1",children:"Properties"}),"\n",(0,i.jsxs)(n.p,{children:["Each time a property of your the ",(0,i.jsx)(n.code,{children:"Hello"})," interface implementation changes, a message is sent to all connected clients with information, which property changed to which value. It is true for both - local calls on the ",(0,i.jsx)(n.code,{children:"Hello"})," object, by other local ",(0,i.jsx)(n.code,{children:"Hello"})," users or when a change property request message is received by this ",(0,i.jsx)(n.code,{children:"HelloService"})," (the ",(0,i.jsx)(n.code,{children:"HelloService"})," applies the property on your local ",(0,i.jsx)(n.code,{children:"Hello"})," object and then the ",(0,i.jsx)(n.code,{children:"HelloService"})," is triggered)."]}),"\n",(0,i.jsx)(n.h4,{id:"operations-1",children:"Operations"}),"\n",(0,i.jsxs)(n.p,{children:["The operations invocation which was triggered from the clients through the network will be performed on your local ",(0,i.jsx)(n.code,{children:"Hello"})," object. The result of the operation (if any) will be returned only to the client, from which the message was send, not all clients."]}),"\n",(0,i.jsx)(n.h4,{id:"signals-1",children:"Signals"}),"\n",(0,i.jsxs)(n.p,{children:["All the signals emitted by your local ",(0,i.jsx)(n.code,{children:"Hello"})," objects are forwarded as an MQTT message to all connected clients."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Have in mind that the ",(0,i.jsx)(n.code,{children:"Hello"})," implementation is not thread safe by default."]})}),"\n",(0,i.jsxs)(n.h4,{id:"use-helloservice",children:["Use ",(0,i.jsx)(n.code,{children:"HelloService"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"HelloService"})," is an adapter of Mqtt (with protocol and network layer implementation), here provided by a ",(0,i.jsx)(n.code,{children:"ApiGear::MQTT::ServiceAdapter"}),"\nAll you need to do is to pass the ",(0,i.jsx)(n.code,{children:"ApiGear::MQTT::ServiceAdapter"})," and a local Hello implementation to your HelloService Adapter, then request connecting to host whenever convenient for you."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'auto mqttservice = std::make_shared<ApiGear::MQTT::Service>("ServiceUniqueNameInMqtt");\nauto ioWorldHello = std::make_shared<IoWorld::Hello>();\nIoWorld::MQTT::HelloService mqttHelloService(ioWorldHello, mqttservice);\n\n// start mqtt connection\nmqttservice->connectToHost("tcp://localhost:1883");\n\n// use your ioWorldHello as it was Hello implementation, all property changes, and signals will be passed to connected MqttHello clients.\nioWorldHello->say(IoWorld::WhenEnum::Soon);\nIoWorld::Message someMessage("the new content");\nauto lastMessage = ioWorldHello->getLast();\nioWorldHello->setLast(someMessage); // after this call - if new property is different than current one - all clients will be informed about new value.\ntestIoWorldHello->_getPublisher().publishJustSaid(someMessage);\n'})}),"\n",(0,i.jsx)(n.h3,{id:"mqtt-messages",children:"MQTT Messages"}),"\n",(0,i.jsxs)(n.p,{children:["In case you want construct messages for client or server side on your own, please check how topics are created and how does the payload look like, check this document ",(0,i.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(6955).A+"",children:"messages format"}),"."]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},6955:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/files/ApiGearMQTTv0.1-2a3f7ef573c506e85e1be8ce33178064.pdf"},22295:(e,n,t)=>{t.d(n,{A:()=>i});const i='schema: apigear.module/1.0\nname: io.world\nversion: "1.0.0"\n\ninterfaces:\n  - name: Hello\n    properties:\n      - { name: last, type: Message }\n    operations:\n      - name: say\n        params:\n          - { name: msg, type: Message }\n          - { name: when, type: When }\n        return:\n          type: int\n    signals:\n      - name: justSaid\n        params:\n          - { name: msg, type: Message }\nenums:\n  - name: When\n    members:\n      - { name: Now, value: 0 }\n      - { name: Soon, value: 1 }\n      - { name: Never, value: 2 }\nstructs:\n  - name: Message\n    fields:\n      - { name: content, type: string }\n'}}]);