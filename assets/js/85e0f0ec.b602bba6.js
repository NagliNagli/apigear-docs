"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[1195],{8711:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=i(4848),t=i(8453);const o={sidebar_position:1},s="Introduction",r={id:"advanced/simulation/intro",title:"Introduction",description:"What is a simulation?",source:"@site/docs/advanced/simulation/intro.md",sourceDirName:"advanced/simulation",slug:"/advanced/simulation/intro",permalink:"/docs/advanced/simulation/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/apigear-io/apigear-docs/edit/main/docs/advanced/simulation/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"API Simulation",permalink:"/docs/category/api-simulation"},next:{title:"Scenario Documents",permalink:"/docs/advanced/simulation/scenario"}},c={},l=[{value:"What is a simulation?",id:"what-is-a-simulation",level:2},{value:"What is a simulation server?",id:"what-is-a-simulation-server",level:2},{value:"What is a simulation scenario?",id:"what-is-a-simulation-scenario",level:2},{value:"What is a simulation protocol?",id:"what-is-a-simulation-protocol",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(n.h2,{id:"what-is-a-simulation",children:"What is a simulation?"}),"\n",(0,a.jsx)(n.p,{children:"A simulation is a virtual representation of a service. It can be used to test, demonstrate or develop applications without the need to have the actual service available."}),"\n",(0,a.jsx)(n.h2,{id:"what-is-a-simulation-server",children:"What is a simulation server?"}),"\n",(0,a.jsx)(n.p,{children:"A simulation server is a server which hosts one or more simulations in form fo scenarios. It can be used to test, demonstrate or develop applications without the need to have the actual service available."}),"\n",(0,a.jsx)(n.h2,{id:"what-is-a-simulation-scenario",children:"What is a simulation scenario?"}),"\n",(0,a.jsx)(n.p,{children:"A simulation scenario is a set of interfaces and their properties, operations, signals which can be loaded into a simulation server. A scenario can react to operations and can also be used to change properties or send signals."}),"\n",(0,a.jsx)(n.p,{children:"A scenario allows also to define sequences of actions which can be triggered by an operation call or by name. The actions can change the property values of the service or send signals."}),"\n",(0,a.jsx)(n.p,{children:"Simulation scenarios can be written using a YAML schema."}),"\n",(0,a.jsx)(n.p,{children:"Based on our counter demo we can write a YAML based scenario like this."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'schema: apigear.scenario/1.0\nname: "demo scenario"\nversion: "1.0"\ninterfaces:\n  - name: demo.Counter:\n    properties:\n      count: 0\n    operations:\n      - name: increment:\n        actions:\n          - $set { count: 10 }\n      - name: decrement:\n        actions:\n          - $set { count: -10 }\n  - name: demo.Echo:\n    operation:\n      - name: say:\n        actions:\n          - $return { result: "Hello World" }\n'})}),"\n",(0,a.jsxs)(n.p,{children:["This is a simple scenario which imitate a ",(0,a.jsx)(n.code,{children:"demo.Counter"})," and ",(0,a.jsx)(n.code,{children:"demo.Echo"})," interface."]}),"\n",(0,a.jsx)(n.p,{children:"When this scenario is loaded into the simulation server a client can just call these simulation operations. This scenario does not include sequences."}),"\n",(0,a.jsx)(n.h2,{id:"what-is-a-simulation-protocol",children:"What is a simulation protocol?"}),"\n",(0,a.jsxs)(n.p,{children:["A simulation protocol is a way to interact with a simulation server. It defines how to call operations, how to get the state of an interface and how to trigger sequences. The simulation server currently supports the ObjectLink protocol which is available in the ",(0,a.jsx)(n.a,{href:"/docs/advanced/objectlink/intro",children:"ObjectLink"})," section."]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>r});var a=i(6540);const t={},o=a.createContext(t);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);