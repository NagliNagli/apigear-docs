"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[2029],{9611:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var t=s(4848),i=s(8453);const c={sidebar_position:1},d="Introduction",r={id:"advanced/objectlink/intro",title:"Introduction",description:"ObjectLink is an IPC protocol based on the idea to link a local object to a remote object a network connection. Object link allows users to communicate state full objects over a network connection. The protocol is designed to be used with the ObjectAPI specification.",source:"@site/docs/advanced/objectlink/intro.md",sourceDirName:"advanced/objectlink",slug:"/advanced/objectlink/intro",permalink:"/docs/advanced/objectlink/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/apigear-io/apigear-docs/edit/main/docs/advanced/objectlink/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"ObjectLink",permalink:"/docs/category/objectlink"},next:{title:"Use Cases",permalink:"/docs/advanced/objectlink/cases"}},o={},l=[{value:"JSON Notation",id:"json-notation",level:2},{value:"Message Types",id:"message-types",level:2},{value:"Message Formats",id:"message-formats",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["ObjectLink is an IPC protocol based on the idea to link a local object to a remote object a network connection. Object link allows users to communicate state full objects over a network connection. The protocol is designed to be used with the ",(0,t.jsx)(n.a,{href:"/docs/advanced/objectapi/intro",children:"ObjectAPI"})," specification."]}),"\n",(0,t.jsx)(n.p,{children:"The design is based on several main concepts:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Properties are reactive and synchronized between the local and remote object"}),"\n",(0,t.jsx)(n.li,{children:"Operations allows a request/response communication between the local and remote object"}),"\n",(0,t.jsx)(n.li,{children:"Signals are used to notify the local object about events on the remote object"}),"\n",(0,t.jsx)(n.li,{children:"Modules are used to group objects and to define a namespace"}),"\n",(0,t.jsx)(n.li,{children:"The local and remove object a represented by an easy to use object API surface"}),"\n",(0,t.jsx)(n.li,{children:"The object API surface can be defined by an ObjectAPI document"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"json-notation",children:"JSON Notation"}),"\n",(0,t.jsx)(n.p,{children:"Throughout the protocol description, the JSON notation is used. All data types must be valid JSON data types."}),"\n",(0,t.jsx)(n.p,{children:"For transport several protocols are supported, see list below:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.json.org/json-en.html",children:"JSON"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://msgpack.org/index.html",children:"MsgPack"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://cbor.io/",children:"CBOR"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The client and server needs to know their transport and encoding in advance. There is no protocol negotiation designed. This allows us to keep the protocol simple."}),"\n",(0,t.jsx)(n.h2,{id:"message-types",children:"Message Types"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"./lifecycle",children:"Lifecycle"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--\x3e LINK"})," - link the local object with a remote object"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<-- INIT"})," - initialized the local object with properties from the remote object"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--\x3e UNLINK"})," - unlinks a local object from a remote object"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"./properties",children:"Properties"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--\x3e SET_PROPERTY"})," - send a property change to a remote object"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<-- PROPERTY_CHANGE"})," - sends property changes to all linked client objects"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"./methods",children:"Methods"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--\x3e INVOKE"})," - invoke a method on a remote object"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<-- INVOKE_REPLY"})," - reply of an remote invokation"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"./signals",children:"Signals"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<-- SIGNAL"})," - send remote events back to all linked client objects"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"./errors",children:"Errors"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<-- ERROR"})," - send an error back to the client with the msg type of the original message"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"message-formats",children:"Message Formats"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Direction"}),(0,t.jsx)(n.th,{children:"Message"}),(0,t.jsx)(n.th,{children:"Value"}),(0,t.jsx)(n.th,{children:"Format"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"->"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"LINK"})}),(0,t.jsx)(n.td,{children:"10"}),(0,t.jsx)(n.td,{children:"[ MsgType, ObjectId ]"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"<-"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"INIT"})}),(0,t.jsx)(n.td,{children:"11"}),(0,t.jsx)(n.td,{children:"[ MsgType, ObjectId, Dict ]"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"->"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"UNLINK"})}),(0,t.jsx)(n.td,{children:"12"}),(0,t.jsx)(n.td,{children:"[ MsgType, ObjectId ]"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"->"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SET_PROPERTY"})}),(0,t.jsx)(n.td,{children:"20"}),(0,t.jsx)(n.td,{children:"[ MsgType, PropertyId, Value ]"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"<-"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"PROPERTY_CHANGE"})}),(0,t.jsx)(n.td,{children:"21"}),(0,t.jsx)(n.td,{children:"[ MsgType, ObjectId, Value ]"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"->"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"INVOKE"})}),(0,t.jsx)(n.td,{children:"30"}),(0,t.jsx)(n.td,{children:"[ MsgType, RequestID, MethodId, Args ]"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"<-"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"INVOKE_REPLY"})}),(0,t.jsx)(n.td,{children:"31"}),(0,t.jsx)(n.td,{children:"[ MsgType, RequestID, Value ]"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"<-"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SIGNAL"})}),(0,t.jsx)(n.td,{children:"40"}),(0,t.jsx)(n.td,{children:"[ MsgType, SignalId, Args ]"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"<-"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ERROR"})}),(0,t.jsx)(n.td,{children:"50"}),(0,t.jsx)(n.td,{children:"[ MsgType, MsgType, RequestID, Error ]"})]})]})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"MsgType"}),": integer value of message type"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ObjectId"}),": a string identifying the resource as module and object name (e.g. ",(0,t.jsx)(n.code,{children:'"demo.Calc"'}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Dict"}),": A JSON dictionary, e.g. ",(0,t.jsx)(n.code,{children:'{ "count": 0}'})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Args"}),": A JSON array, e.g. ",(0,t.jsx)(n.code,{children:"[ 1, 2 ]"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PropertyId"}),": A ObjectID with a property path (e.g. ",(0,t.jsx)(n.code,{children:'"demo.Calc/count"'}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Value"}),": Any valid JSON value including JSON arrays or objects"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"MethodId"}),": A ObjectID with a method path (e.g. ",(0,t.jsx)(n.code,{children:'"demo.Calc/increment"'}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"RequestId"}),": A unique integer value identifying the request during the connection. Typically a value incremented by one on each request and starting by 1 and then reset to 1 by max value."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"SignalId"}),": A ObjectID with a signal path (e.g. ",(0,t.jsx)(n.code,{children:'"demo.Calc/shutdown"'}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Error"}),": A string describing the error"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>r});var t=s(6540);const i={},c=t.createContext(i);function d(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);