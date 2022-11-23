(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{328:function(e,t,a){"use strict";a.r(t);var i=a(10),o=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"development-cycle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#development-cycle"}},[e._v("#")]),e._v(" Development cycle")]),e._v(" "),t("p",[e._v("Now, that you know the basics about the "),t("a",{attrs:{href:"../objectapi/overview"}},[e._v("ObjectAPI")]),e._v(" and how to create SDKs using ApiGear, we provide some demos and hints for real world projects.")]),e._v(" "),t("p",[e._v("We will cover starting from scratch as well as updating an existing API, previously created using ApiGear. Our "),t("a",{attrs:{href:"https://github.com/apigear-io/objectapi-demos",target:"_blank",rel:"noopener noreferrer"}},[e._v("demos"),t("OutboundLink")],1),e._v(" are implemented using the same process as described below.")]),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("img",{staticClass:"light-img",attrs:{src:"/devcycle_43_light.svg",alt:"Dev cycle light"}}),e._v(" "),t("img",{staticClass:"dark-img",attrs:{src:"/devcycle_43_dark.svg",alt:"Dev cycle dark"}}),e._v("\nThe graphic describes the development cycle using ApiGear.\n"),t("p",[e._v("Like every modern development tool ApiGear fully supports an agile development approach. You can start with a minimal API definition and then iteratively add more functionality or change existing details. Theoretically, you could even rewrite the whole API.\nHowever, using the "),t("em",[e._v("API first approach")]),e._v(" will help you design more stable and high quality APIs.")]),e._v(" "),t("h2",{attrs:{id:"define-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#define-api"}},[e._v("#")]),e._v(" Define API")]),e._v(" "),t("p",[e._v("As with every "),t("em",[e._v("API first approach")]),e._v(" you start at defining your "),t("a",{attrs:{href:"../objectapi/modules"}},[e._v("ObjectAPI module")]),e._v(".\nThe easiest way to do this in a team is to use our online collaboration suite as described in "),t("a",{attrs:{href:"../guide/modules"}},[e._v("Start -> modules")]),e._v(" section.")]),e._v(" "),t("h2",{attrs:{id:"create-sdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-sdk"}},[e._v("#")]),e._v(" Create SDK")]),e._v(" "),t("p",[e._v("Once you have created one or several API modules you are set to create your first SDK. Therefore you choose one of our expert engineered "),t("a",{attrs:{href:"../sdk/intro"}},[e._v("SDK templates")]),e._v(" and a SDK runner for your project.")]),e._v(" "),t("p",[e._v("The SDK runner will create a "),t("em",[e._v(".zip")]),e._v(" file for you to download.")]),e._v(" "),t("h2",{attrs:{id:"apply-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apply-changes"}},[e._v("#")]),e._v(" Apply Changes")]),e._v(" "),t("p",[e._v("The aforementioned SDK "),t("em",[e._v(".zip")]),e._v(" file consists of several different files depending on the SDK runner setup and chosen programming language.")]),e._v(" "),t("p",[e._v('Assuming you chose the "full package including scaffolding" then you have the following types of files:')]),e._v(" "),t("ol",[t("li",[e._v("The plain API in your preferred language")]),e._v(" "),t("li",[e._v("A stub implementation derived from this API with a basic implementation")]),e._v(" "),t("li",[e._v("A suite of test files covering the stub implementation")]),e._v(" "),t("li",[e._v("Project files to instantaneously build the whole API module and execute the test cases")]),e._v(" "),t("li",[e._v("Additional adapters created by ApiGear to provide API analytics insights.")])]),e._v(" "),t("p",[e._v("From here on we recommend a "),t("em",[e._v("split strategy")]),e._v(" depending on whether you created the API module for the first time or whether you want to update an existing implementation.")]),e._v(" "),t("h3",{attrs:{id:"first-run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#first-run"}},[e._v("#")]),e._v(" First run")]),e._v(" "),t("p",[e._v("The easiest way to set your project up for long time API updates is to create an "),t("em",[e._v("ini(tial)")]),e._v(" folder within your project and extract the SDK "),t("em",[e._v("unmodified")]),e._v(" in this folder. Afterwards you just simply copy this "),t("em",[e._v("ini")]),e._v(" folder to a "),t("em",[e._v("sol(ution)")]),e._v(" folder. You should then commit this state as initial version to be able to always rollback.")]),e._v(" "),t("p",[e._v("Once this is done you can start replacing the API stub implementation in the "),t("em",[e._v("sol")]),e._v(" folder with your business logic and the same time update the test stubs to cover the real API behavior.")]),e._v(" "),t("h3",{attrs:{id:"updating-existing-apis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updating-existing-apis"}},[e._v("#")]),e._v(" Updating existing APIs")]),e._v(" "),t("p",[e._v("When you have set up your project as described in the "),t("em",[e._v("first run")]),e._v(" using a "),t("em",[e._v("ini")]),e._v(" and "),t("em",[e._v("sol")]),e._v(" folder - or a similar setup - you can now easily apply updates to your API using the following steps.")]),e._v(" "),t("ul",[t("li",[e._v("extract the updated SDK "),t("em",[e._v("unmodified")]),e._v(" into the "),t("em",[e._v("ini")]),e._v(" folder. A diff of your preferred source control tool should only should the auto generated changes based on your API modification")]),e._v(" "),t("li",[e._v("use a "),t("em",[e._v("compare and merge")]),e._v(" tool to go over the differences of the updated "),t("em",[e._v("ini")]),e._v(" folder and your existing implementation in the "),t("em",[e._v("sol")]),e._v(" folder")]),e._v(" "),t("li",[e._v("only apply the interface changes without overwriting your business logic")])]),e._v(" "),t("p",[e._v("This process might sound cumbersome on first sight but is really easy and straight forward to use.")]),e._v(" "),t("h2",{attrs:{id:"create-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-application"}},[e._v("#")]),e._v(" Create application")]),e._v(" "),t("p",[e._v("Now, that we have our API module in place we can start using it an application.\nDepending on whether it is the same team or a different team implementing the application, they can use the module either with a stub implementation, a simulation adapter or the real business logic. There is no dependency anymore - the API module and the application can be both developed in parallel based on the commonly defined API description.")]),e._v(" "),t("p",[e._v("Our "),t("a",{attrs:{href:"https://github.com/apigear-io/objectapi-demos",target:"_blank",rel:"noopener noreferrer"}},[e._v("demos"),t("OutboundLink")],1),e._v(" were developed the same way as described above. Small increments at a time, super fast and with high quality built in. The applications are stored in the "),t("em",[e._v("app(lication)")]),e._v(" folder.")]),e._v(" "),t("h2",{attrs:{id:"gain-insights"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gain-insights"}},[e._v("#")]),e._v(" Gain insights")]),e._v(" "),t("p",[e._v("With the upcoming feature "),t("em",[e._v("ApiGear analytics")]),e._v(" you will gain full insight into your customers API usage. Based on this highly valuable feedback you are able to make fully informed decisions on which feature to extend or which could be spared for future efficiency and customer satisfaction.")])])}),[],!1,null,null,null);t.default=o.exports}}]);