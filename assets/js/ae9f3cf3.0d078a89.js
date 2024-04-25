"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[4179],{4482:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=t(74848),i=t(28453);const s={sidebar_position:3},r="Template Primer",o={id:"advanced/maker/template",title:"Template Primer",description:"The template language is based on Go Text Templates. The template language is described in the Go Text Template documentation.",source:"@site/docs/advanced/maker/template.md",sourceDirName:"advanced/maker",slug:"/advanced/maker/template",permalink:"/docs/advanced/maker/template",draft:!1,unlisted:!1,editUrl:"https://github.com/apigear-io/apigear-docs/edit/main/docs/advanced/maker/template.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Quick Start",permalink:"/docs/advanced/maker/tutorial"},next:{title:"Filter Reference",permalink:"/docs/advanced/maker/filters"}},l={},c=[{value:"Basic Syntax",id:"basic-syntax",level:2},{value:"Loops",id:"loops",level:2},{value:"Assignments",id:"assignments",level:2},{value:"Conditionals",id:"conditionals",level:2},{value:"White Space",id:"white-space",level:2},{value:"String Formatting",id:"string-formatting",level:2},{value:"Debugging Templates",id:"debugging-templates",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"template-primer",children:"Template Primer"}),"\n",(0,a.jsxs)(n.p,{children:["The template language is based on Go Text Templates. The template language is described in the ",(0,a.jsx)(n.a,{href:"https://golang.org/pkg/text/template/",children:"Go Text Template documentation"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["To use a template you need to define a template file with the extension ",(0,a.jsx)(n.code,{children:".tpl"}),". Inside the template file you can use the template language to generate text, which is then written to the target file."]}),"\n",(0,a.jsx)(n.h2,{id:"basic-syntax",children:"Basic Syntax"}),"\n",(0,a.jsxs)(n.p,{children:["The template syntax writes the text as is to the target file. Actions inside the text allow to control the output. A action is a text inside ",(0,a.jsx)(n.code,{children:"{{"})," and ",(0,a.jsx)(n.code,{children:"}}"}),". The action can be a variable, a function or a control structure."]}),"\n",(0,a.jsxs)(n.p,{children:["To access variables you can use the current scope ",(0,a.jsx)(n.code,{children:"."}),". All variables are title case. For example to access the name of the current module you can use the following template:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"{{ .Module.Name }}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"loops",children:"Loops"}),"\n",(0,a.jsxs)(n.p,{children:["To iterate over a list you can use the ",(0,a.jsx)(n.code,{children:"range"})," keyword. For example to iterate over all interfaces in the current module:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"{{ range .Module.Interfaces }}\n    {{ .Name }}\n{{ end }}\n"})}),"\n",(0,a.jsx)(n.p,{children:"See how the current context changes inside the range loop."}),"\n",(0,a.jsxs)(n.p,{children:["A loop can also be empty and the ",(0,a.jsx)(n.code,{children:"else"})," keyword can be used to define the empty case. For example to iterate over all interfaces in the current module:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"{{ range .Module.Interfaces }}\n    {{ .Name }}\n{{ else }}\n    No interfaces found\n{{ end }}\n"})}),"\n",(0,a.jsx)(n.p,{children:"To use the index and current element you can"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"{{ range $index, $element := .Module.Interfaces }}\n    {{ $index }}: {{ $element.Name }}\n{{ end }}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Index is a zero-based iterator and element is the current element in the loop."}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsx)(n.p,{children:"To join lists with commas you can use the loop index."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"{{ range $i, $e := .Module.Interfaces }}\n    {{ if $i}},{{ end }}{{ .Name }}\n{{ end }}\n"})}),(0,a.jsxs)(n.p,{children:["A comma will be printed when ",(0,a.jsx)(n.code,{children:"$i"})," is not zero."]})]}),"\n",(0,a.jsx)(n.h2,{id:"assignments",children:"Assignments"}),"\n",(0,a.jsx)(n.p,{children:"To define new variable you can assign a value to a variable. For example to assign the name of the current module to a variable:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"{{ $name := .Module.Name }}\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsx)(n.p,{children:"This allows you to define a set of variables at the beginning of the document and used them throughout. For example a class name for the current interface:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"{{ $class := Camel .Name }}\n"})})]}),"\n",(0,a.jsx)(n.h2,{id:"conditionals",children:"Conditionals"}),"\n",(0,a.jsx)(n.p,{children:"You can use an if-end or if-else-end construct to control the output. For example to only output the name of the current interface if it is not empty:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"{{ if .Name }}\n    {{ .Name }}\n{{ end }}\n"})}),"\n",(0,a.jsx)(n.p,{children:"or to output a default value if the name is empty:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"{{ if .Name }}\n    {{ .Name }}\n{{ else }}\n    {{ .Module.Name }}\n{{ end }}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"white-space",children:"White Space"}),"\n",(0,a.jsx)(n.p,{children:"The template language allows to control the white space. For example to remove the white space before the output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"{{- if .Name }}\n    {{ .Name }}\n{{- end }}\n"})}),"\n",(0,a.jsx)(n.p,{children:"or to remove the white space after the output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"{{ if .Name -}}\n    {{ .Name }}\n{{ end }}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"string-formatting",children:"String Formatting"}),"\n",(0,a.jsxs)(n.p,{children:["You can use the ",(0,a.jsx)(n.code,{children:"printf"})," function to format strings. For example to prefix an interface name with ",(0,a.jsx)(n.code,{children:"I"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'{{ printf "I%s" .Name }}\n'})}),"\n",(0,a.jsx)(n.p,{children:"or to merge two strings, where each string is camel cased."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'{{ printf "%s%s" (Camel .Interface.Name) (Camel .Name) }}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"printf"})," syntax is described in the ",(0,a.jsx)(n.a,{href:"https://gobyexample.com/string-formatting",children:"Go Printf Formatting"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"debugging-templates",children:"Debugging Templates"}),"\n",(0,a.jsxs)(n.p,{children:["Sometimes it is useful to see the current context of the template. You can use the ",(0,a.jsx)(n.code,{children:"printf"})," function to print the current context:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'{{ printf "%#v" . }}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var a=t(96540);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);