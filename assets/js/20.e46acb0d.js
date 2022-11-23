(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{297:function(t,e,a){"use strict";a.r(e);var s=a(10),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"quick-start"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[t._v("#")]),t._v(" Quick Start")]),t._v(" "),e("p",[t._v("A template is a technology template to transform the ObjectAPI in any kind and amount of other text documents, e.g. source code. It consist of a set of rules and template documents.")]),t._v(" "),e("p",[t._v("The best way to create a new template template is to create an external template folder and link it up to an ApiGear Studio API project using an API module and a solution.")]),t._v(" "),e("p",[t._v("The goal of this tutorial is to create a template which generates a typescript interface from an API document. For this we use an demo API which like this:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# demo.module.yaml")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("schema")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"apigear.module/1.0"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" demo\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.1"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interfaces")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Counter\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("properties")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" count\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" int\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("operations")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" increment\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" decrement\n")])])]),e("p",[t._v("The API shall be transformed into a typescript interface which will finally be like this:")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// demo.ts")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Counter")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  count"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" int"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("decrement")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"creating-a-template"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-template"}},[t._v("#")]),t._v(" Creating a template")]),t._v(" "),e("p",[t._v("In this project we will create a "),e("code",[t._v("mytemplate")]),t._v(" template inside a "),e("code",[t._v("myproject")]),t._v(" together some apis to test the template.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" myproject "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" myproject\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" mytemplate "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" mytemplate\n")])])]),e("p",[t._v("First we create our toot project folder called "),e("code",[t._v("myproject")]),t._v(" and inside out template folder called "),e("code",[t._v("mytemplate")]),t._v(". Insie the "),e("code",[t._v("mytemplate")]),t._v(" folder we place a rules document ("),e("code",[t._v("rules.yaml")]),t._v(") and an templates folder for our template documents.")]),t._v(" "),e("p",[t._v("The folder structure will look like this.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("myproject/\n  mytemplate/\n    rules.yaml\n    templates/\n")])])]),e("p",[t._v("The rules document defines which documents are written based on which API symbols, in our case we use the "),e("code",[t._v("module")]),t._v(" scope, as we want to create one document per module. The source document is a "),e("code",[t._v("tpl")]),t._v(" template document and the target document is a text document, where the target name can also be a template string.")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rules.yaml")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("features")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" default\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scopes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("match")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" module\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("documents")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("source")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" module.ts.tpl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("target")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(".Module.Name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(".ts "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("The "),e("code",[t._v("module.ts.tpl")]),t._v(" file inside the "),e("code",[t._v("template/templates")]),t._v(" folder can be empty initially, we fill it up later.")]),t._v(" "),e("p",[t._v("Now our basic template project is ready, it's time to link it up with an ApiGear Studio API project.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("myproject/\n  mytemplate/\n    rules.yaml\n    templates/\n      module.ts.tpl\n")])])]),e("h2",{attrs:{id:"create-api-project"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-api-project"}},[t._v("#")]),t._v(" Create API Project")]),t._v(" "),e("p",[t._v("Open ApiGear Studio and add an API project to the "),e("code",[t._v("myproject")]),t._v(" folder. This will create an "),e("code",[t._v("apigear")]),t._v(" folder to the project.")]),t._v(" "),e("p",[t._v("From within ApiGear Studio create an API module named "),e("code",[t._v("demo")]),t._v(" which will act as our test API.")]),t._v(" "),e("p",[t._v("Copy our demo API into the API document.")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# demo.module.yaml")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("schema")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"apigear.module/1.0"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" demo\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.1"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interfaces")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Counter\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("properties")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" count\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" int\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("operations")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" increment\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" decrement\n")])])]),e("p",[t._v("The demo API now needs to be linked to the template rules document. This is done from within a solution document, which links API modules to templates.")]),t._v(" "),e("p",[t._v("Open ApiGear Studio and create a solution document also called "),e("code",[t._v("demo")]),t._v(", and the content should look like this.")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# demo.solution.yaml")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("schema")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"apigear.solution/1.0"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" demo\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.1"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("layers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" demo\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("output")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ../output\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" demo.module.yaml\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ../mytemplate\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("features")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" default\n")])])]),e("p",[t._v("This will first parse all defined modules (demo) and apply the given template to the modules. The documents will then be written relative to the given output directory.")]),t._v(" "),e("p",[t._v("Your project should look like this now:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("myproject/\n  apigear/\n    demo.module.yaml\n    demo.solution.yaml\n  template/\n    rules.yaml\n    templates/\n      module.ts.tpl\n")])])]),e("p",[t._v("When you now run the solution it will create an empty "),e("code",[t._v("output/demo.ts")]),t._v(" document inside the project directory.")]),t._v(" "),e("p",[t._v("Now we have a basic setup ready.")]),t._v(" "),e("div",{staticClass:"language-treeview extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("myproject/\n  apigear/\n    demo.module.yaml\n    demo.solution.yaml\n  template/\n    rules.yaml\n    templates/\n      module.ts.tpl\n  output/\n    demo.ts\n")])])]),e("h2",{attrs:{id:"demo-goal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#demo-goal"}},[t._v("#")]),t._v(" Demo Goal")]),t._v(" "),e("p",[t._v("Remember we want to create an interface for each interface inside an API module. For our demo API the resulting typescript shall look like this:")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// demo.ts")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Counter")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  count"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" int"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("decrement")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("This defines a standalone typescript interface to be usable in your applications.")]),t._v(" "),e("p",[t._v("The rules document already takes care that for each API module one typescript document is created, based on the module name. Now we need to fill in the content of the typescript code.")]),t._v(" "),e("h2",{attrs:{id:"typescript-template"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#typescript-template"}},[t._v("#")]),t._v(" Typescript Template")]),t._v(" "),e("p",[t._v("Inside our "),e("code",[t._v("module.ts.liquid")]),t._v(" template document each interface in the module shall be an typescript interface.\nThis can be accomplished with the for-loop from the liquidjs template engine.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("{{ range .Module.Interfaces }}\ninterface {{ .Name }} {\n}\n{{ end }}\n")])])]),e("p",[t._v("After updating the "),e("code",[t._v("module.ts.tpl")]),t._v(" with the above content, we can run the solution. This will rewrite the target document with the content of the typescript template.")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Counter")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"filling-in-the-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filling-in-the-details"}},[t._v("#")]),t._v(" Filling in the details")]),t._v(" "),e("p",[t._v("There are still the properties and operations missing from the source code. We can add them into the template using another for loop, which iterate over the properties and operations from the interface.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("{{ range .Module.Interfaces }}\ninterface {{ .Name }} {\n  {{ range .Properties }}\n  {{ .Name }}: {{ tsType . }};\n  {{ end }}\n  {{ range .Operations }}\n  {{ .Name }}(): {{ tsReturn .Return }};\n  {{ end }}\n}\n{{ end }}\n")])])]),e("p",[t._v("This will already add the properties and some simple operations to the source code. After running the solution we will see the update source code.")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// demo.ts")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Counter")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  count"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" int"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("decrement")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("So great. Are we finished? The mindful reader already figured out that the operation parameters are missing. To demonstrate this we will add steps parameters to the increment and decrement operations.")]),t._v(" "),e("p",[t._v("We first update our API demo module ("),e("code",[t._v("demo.module.yaml")]),t._v(") adding parameters to the operations like this:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("operations")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" increment\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("params")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" step\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" int\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" decrement\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("params")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" step\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" int\n")])])]),e("p",[t._v("If you would run the solution again you would no see a change as we currently not handle these parameters. We need to update the template document ("),e("code",[t._v("module.ts.liquid")]),t._v(") first to handle the parameters using the params filter.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("{{ range .Operations }}\n{{ .Name }}({{ params .Params }}): {{ tsReturn .Return }};\n{{ end }}\n")])])]),e("p",[t._v("Now running the solution again will update the typescript source code to the final result:")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// demo.ts")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Counter")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  count"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" int"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("step"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" int"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("decrement")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("step"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" int"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("This shows how easy it is to create an own template solution for a supported technology.")]),t._v(" "),e("h2",{attrs:{id:"packaging"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#packaging"}},[t._v("#")]),t._v(" Packaging")]),t._v(" "),e("p",[t._v("Template packages are git repositories, which can be published to a git server. The template package can be referenced from a solution document using the "),e("code",[t._v("git")]),t._v(" scheme.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("apigear template "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("git-url"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("p",[t._v("Or if the template is registered with the registry, it can be installed using the name.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("apigear template "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("h2",{attrs:{id:"next-steps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next Steps")]),t._v(" "),e("p",[t._v("This simple demo shows the workflow of creating technology templates using ApiGear Studio.")]),t._v(" "),e("p",[t._v("ApiGear support several programming languages and technologies, such as Python, C++, TypeScript, Go and others and is able to create complex solutions for almost every application.")]),t._v(" "),e("p",[t._v("ApiGear comes with several advanced technology templates which provides solutions for the most common problems. In case the provides solutions do not fit your needs ApiGear is designed to allow quick adoptions of the underlying technology templates.")])])}),[],!1,null,null,null);e.default=n.exports}}]);