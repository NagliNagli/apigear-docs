"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[911],{4920:(e,a,n)=>{n.r(a),n.d(a,{default:()=>r});n(6540);var t=n(4586),l=n(5435),s=n(6137),o=n(4848);function r(){const{siteConfig:e}=(0,t.A)();return(0,o.jsxs)(l.A,{children:[(0,o.jsx)("h2",{children:"Site config"}),(0,o.jsx)(s.A,{src:e,collapseDepth:3})]})}},6137:(e,a,n)=>{n.d(a,{A:()=>M});var t=n(6540);const l=e=>"boolean"==typeof e||e instanceof Boolean,s=e=>"number"==typeof e||e instanceof Number,o=e=>"bigint"==typeof e||e instanceof BigInt,r=e=>!!e&&e instanceof Date,c=e=>"string"==typeof e||e instanceof String,u=e=>Array.isArray(e),i=e=>e instanceof Object&&null!==e;let d=1;const p=()=>d++;function m(e){let{field:a,value:n,data:l,lastElement:s,openBracket:o,closeBracket:r,level:c,style:u,shouldExpandNode:i}=e;const d=(0,t.useRef)(!1),[m,_,v]=function(e){const[a,n]=(0,t.useState)(e());return[a,()=>n((e=>!e)),n]}((()=>i(c,n,a)));(0,t.useEffect)((()=>{d.current?v(i(c,n,a)):d.current=!0}),[i]);const b=m?u.collapseIcon:u.expandIcon,h=m?"collapse JSON":"expand JSON",x=function(){const e=(0,t.useRef)();return void 0===e.current&&(e.current=`:jsnvw:${p()}:`),e.current}(),g=c+1,E=l.length-1,y=e=>{" "===e.key&&_()};return(0,t.createElement)("div",{className:u.basicChildStyle,role:"list"},(0,t.createElement)("span",{className:b,onClick:_,onKeyDown:y,role:"button",tabIndex:0,"aria-label":h,"aria-expanded":m,"aria-controls":m?x:void 0}),a&&(0,t.createElement)("span",{className:u.label},a,":"),(0,t.createElement)("span",{className:u.punctuation},o),m?(0,t.createElement)("div",{id:x},l.map(((e,a)=>(0,t.createElement)(f,{key:e[0]||a,field:e[0],value:e[1],style:u,lastElement:a===E,level:g,shouldExpandNode:i})))):(0,t.createElement)("span",{className:u.collapsedContent,onClick:_,onKeyDown:y,role:"button",tabIndex:-1,"aria-hidden":!0,"aria-label":h,"aria-expanded":m}),(0,t.createElement)("span",{className:u.punctuation},r),!s&&(0,t.createElement)("span",{className:u.punctuation},","))}function _(e){let{field:a,value:n,style:t,lastElement:l,shouldExpandNode:s,level:o}=e;return m({field:a,value:n,lastElement:l||!1,level:o,openBracket:"{",closeBracket:"}",style:t,shouldExpandNode:s,data:Object.keys(n).map((e=>[e,n[e]]))})}function v(e){let{field:a,value:n,style:t,lastElement:l,level:s,shouldExpandNode:o}=e;return m({field:a,value:n,lastElement:l||!1,level:s,openBracket:"[",closeBracket:"]",style:t,shouldExpandNode:o,data:n.map((e=>[void 0,e]))})}function b(e){let{field:a,value:n,style:u,lastElement:i}=e,d=n,p=u.otherValue;return null===n?(d="null",p=u.nullValue):void 0===n?(d="undefined",p=u.undefinedValue):c(n)?(d=u.noQuotesForStringValues?n:`"${n}"`,p=u.stringValue):l(n)?(d=n?"true":"false",p=u.booleanValue):s(n)?(d=n.toString(),p=u.numberValue):o(n)?(d=`${n.toString()}n`,p=u.numberValue):d=r(n)?n.toISOString():n.toString(),""===a&&(a='""'),(0,t.createElement)("div",{className:u.basicChildStyle,role:"listitem"},a&&(0,t.createElement)("span",{className:u.label},a,":"),(0,t.createElement)("span",{className:p},d),!i&&(0,t.createElement)("span",{className:u.punctuation},","))}function f(e){const a=e.value;return u(a)?(0,t.createElement)(v,Object.assign({},e)):i(a)&&!r(a)?(0,t.createElement)(_,Object.assign({},e)):(0,t.createElement)(b,Object.assign({},e))}var h="_2bkNM";const x={container:"_2IvMF _GzYRV",basicChildStyle:h,label:"_1MGIk",nullValue:"_2T6PJ",undefinedValue:"_1Gho6",stringValue:"_vGjyY",booleanValue:"_3zQKs",numberValue:"_1bQdo",otherValue:"_1xvuR",punctuation:"_3uHL6 _3eOF8",collapseIcon:"_oLqym _f10Tu _1MFti _1LId0",expandIcon:"_2AXVT _f10Tu _1MFti _1UmXx",collapsedContent:"_2KJWg _1pNG9 _1MFti",noQuotesForStringValues:!1},g=()=>!0,E=e=>{let{data:a,style:n=x,shouldExpandNode:l=g}=e;return(0,t.createElement)("div",{className:n.container},(0,t.createElement)(f,{value:a,style:n,lastElement:!0,level:0,shouldExpandNode:l}))},y="containerParaiso_cQJv",N="basicElementParaiso_QZsA",V="labelParaiso_wRN4",j="nullValueParaiso_AoA7",k="undefinedValueParaiso_FhTI",I="stringValueParaiso_V3BI",S="booleanValueParaiso_DtTx",C="numberValueParaiso_QJS7",A="otherValueParaiso_LEJn",P="punctuationParaiso_IgdH",F="expandIconParaiso_FXv1",B="collapseIconParaiso_vUhq",D="collapseContentParaiso_r7rr";var J=n(4848);const O={container:y,basicChildStyle:N,label:V,nullValue:j,undefinedValue:k,stringValue:I,booleanValue:S,numberValue:C,otherValue:A,punctuation:P,collapseIcon:B,expandIcon:F,collapsedContent:D};function M(e){let{src:a,collapseDepth:n}=e;return(0,J.jsx)(E,{data:a,shouldExpandNode:(e,a)=>Array.isArray(a)?a.length<5:void 0!==n&&e<n,style:O})}},5435:(e,a,n)=>{n.d(a,{A:()=>c});n(6540);var t=n(5260),l=n(8774);const s={container:"container_UJDL",nav:"nav_uyzg",navlink:"navlink_fkkq",active:"active_YJyX"};var o=n(4848);function r(e){let{to:a,children:n}=e;return(0,o.jsx)(l.A,{className:s.navlink,isNavLink:!0,to:a,exact:!0,activeStyle:{backgroundColor:"#363739"},children:n})}function c(e){let{children:a}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.A,{children:[(0,o.jsx)("html",{lang:"en"}),(0,o.jsx)("title",{children:"Docusaurus debug panel"}),(0,o.jsx)("meta",{name:"robots",content:"noindex"})]}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("nav",{className:s.nav,children:[(0,o.jsx)(r,{to:"/__docusaurus/debug",children:"Config"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/metadata",children:"Metadata"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/registry",children:"Registry"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/routes",children:"Routes"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/content",children:"Content"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/globalData",children:"Global data"})]}),(0,o.jsx)("main",{className:s.container,children:a})]})]})}}}]);