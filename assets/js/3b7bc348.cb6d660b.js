"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[3349],{8108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=n(4848),o=n(8453);const i={sidebar_position:2},r="Use Cases",a={id:"advanced/objectlink/cases",title:"Use Cases",description:"Object Link can be used to link the UI layer to the underlying service layer but also to link low-level things like a sensor to a high-level thing like a dashboard. Due to the combination of properties/operations and signals the protocol can be used to describe a wide range of use cases.",source:"@site/docs/advanced/objectlink/cases.md",sourceDirName:"advanced/objectlink",slug:"/advanced/objectlink/cases",permalink:"/docs/advanced/objectlink/cases",draft:!1,unlisted:!1,editUrl:"https://github.com/apigear-io/apigear-docs/edit/main/docs/advanced/objectlink/cases.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/docs/advanced/objectlink/intro"},next:{title:"Lifecycle",permalink:"/docs/advanced/objectlink/lifecycle"}},c={},l=[{value:"Services",id:"services",level:2},{value:"Sensors",id:"sensors",level:2},{value:"Actuators",id:"actuators",level:2},{value:"Remote Procedure Calls",id:"remote-procedure-calls",level:2},{value:"Highly Interactive Services",id:"highly-interactive-services",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"use-cases",children:"Use Cases"}),"\n",(0,s.jsx)(t.p,{children:"Object Link can be used to link the UI layer to the underlying service layer but also to link low-level things like a sensor to a high-level thing like a dashboard. Due to the combination of properties/operations and signals the protocol can be used to describe a wide range of use cases."}),"\n",(0,s.jsx)(t.p,{children:"It can be used during development using JSON and later switch to a binary protocol for production for faster communication."}),"\n",(0,s.jsx)(t.h2,{id:"services",children:"Services"}),"\n",(0,s.jsx)(t.p,{children:"When designing embedded platforms, it is often necessary to provide a state full design. The state is inherent from the device (e.g. temperature, location, current radio station). These states are often used by multiple applications. The applications are often not aware of each other and the state is not synchronized. This leads to a lot of duplicated code and a lot of complexity."}),"\n",(0,s.jsxs)(t.p,{children:["The protocol allows to share state between applications. ANd the state is automatically synced across applications and platforms. The applications can be written in different languages and can be running on different platforms. The protocol is designed to be used with the ",(0,s.jsx)(t.a,{href:"/docs/advanced/objectapi/intro",children:"ObjectAPI"})," specification. This allows to define a common API surface for the applications."]}),"\n",(0,s.jsx)(t.p,{children:"Protocol Features Used:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Property"}),": read/write/notify"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Operations"}),": request/response"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Signals"}),": notify"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"sensors",children:"Sensors"}),"\n",(0,s.jsx)(t.p,{children:"A sensor can just use the property aspects of the protocol. The sensor can send property changes to the application. The application can then use the property changes to update the UI. For this the sensor does have to be linked to the remote object."}),"\n",(0,s.jsx)(t.p,{children:"Protocol Features Used:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Property"}),": write"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"actuators",children:"Actuators"}),"\n",(0,s.jsx)(t.p,{children:"An actuator can just use the property aspects of the protocol. The application can send property changes to the actuator. The actuator can then use the property changes to update the state of the actuator. For this the actuator has to be linked to the remote object to receive changes."}),"\n",(0,s.jsx)(t.p,{children:"Protocol Features Used:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Property"}),": notify"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"remote-procedure-calls",children:"Remote Procedure Calls"}),"\n",(0,s.jsxs)(t.p,{children:["The protocol can be used to implement remote procedure calls. The protocol is designed to be used with the ",(0,s.jsx)(t.a,{href:"/docs/advanced/objectapi/intro",children:"ObjectAPI"})," specification. This allows to define a common API surface for the applications. The protocol can be used to implement a remote procedure call. The request is send to the service and the service replies with the result."]}),"\n",(0,s.jsx)(t.p,{children:"Additional the service can notify the client about events using the signal aspect of the protocol."}),"\n",(0,s.jsx)(t.p,{children:"Protocol Features Used:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Operations"}),": request/response"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"highly-interactive-services",children:"Highly Interactive Services"}),"\n",(0,s.jsx)(t.p,{children:"The protocol can be used to implement highly interactive services. For example for a whiteboard application the protocol can dynamically update the UI about the current location of the pen and it's state. Actions can be expressed as operations using the request/reply aspect of the protocol.\nThe signals can be used to send a constant stream of events to the client."}),"\n",(0,s.jsx)(t.p,{children:"Protocol Features Used:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Property"}),": read/write/notify"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Operations"}),": request/response"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Signals"}),": notify"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(6540);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);