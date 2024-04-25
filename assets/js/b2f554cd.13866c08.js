"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[5894],{76042:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"api-surface","metadata":{"permalink":"/blog/api-surface","source":"@site/blog/2023-02-27-api-surface.md","title":"API surface for objects","description":"Overview of a typical API surface for objects in an IDL.","date":"2023-02-27T00:00:00.000Z","tags":[{"label":"api","permalink":"/blog/tags/api"},{"label":"idl","permalink":"/blog/tags/idl"}],"readingTime":2.945,"hasTruncateMarker":true,"authors":[{"name":"J\xfcrgen Ryannel","title":"Lead Programmer","image_url":"https://avatars.githubusercontent.com/u/636357?v=4","imageURL":"https://avatars.githubusercontent.com/u/636357?v=4"}],"frontMatter":{"title":"API surface for objects","description":"Overview of a typical API surface for objects in an IDL.","slug":"api-surface","tags":["api","idl"],"authors":[{"name":"J\xfcrgen Ryannel","title":"Lead Programmer","image_url":"https://avatars.githubusercontent.com/u/636357?v=4","imageURL":"https://avatars.githubusercontent.com/u/636357?v=4"}]},"unlisted":false},"content":"An API surface is the public interface of an object which is exposed to users of the object. The API surface is defined by an IDL and defines the contract between the user and the implementer of an object. \\n\\n\x3c!--truncate--\x3e\\n\\nThe API surface for an object consists of the following parts:\\n- Properties: Properties are the state of an object. They can be read and written and notify users about changes. Properties can be of any type.\\n- Operations: Operations are functions that can be called on an object. They can be synchronous or asynchronous. Operations can receive parameters and return a value.\\n- Signals: Signals are events that can be emitted by an object. They can be received by users of the object.\\n\\n\\n```\\ninterface name {\\n    `prop-name` : type                     // property\\n    `operation-name` ( params ): `type`       // operation\\n    signal `signal-name` ( params )        // signal\\n}\\n```\\n\\nFor example a heating system could have the following API surface:\\n\\n```\\ninterface HeatingSystem {\\n    temperature: float\\n    setTemperature(float temperature)\\n    signal maxTemperatureReached()\\n}\\n```\\n\\nAs users of an API you can use the API surface to understand how to use an object. You can also use the API surface to understand how to implement an object. The API surface is the contract between the user and the implementer of an object.\\n\\n## Properties\\n\\nProperties are the state of an object. They can be read and written and notify users about changes. Properties can be of any type.\\n\\n```\\ninterface HeatingSystem {\\n    temperature: float\\n}\\n```\\n\\nIn the example above the `temperature` property is of type `float`. The type can be any type that is supported by the IDL. The type can be a primitive type or a complex type. A primitive type can be one of the following:\\n- `int` : integer value\\n- `float` : floating point value\\n- `string` : string value\\n- `bool` : boolean value\\n\\nTypes can also be arrays. To define arrays of a type just append the `[]` to the type (for example `int[]`).\\n\\n## Operations\\n\\nOperations are functions that can be called on an object. They can be synchronous or asynchronous. Operations can receive parameters and return a value.\\n\\n```\\ninterface HeatingSystem {\\n    setTemperature(float temperature)\\n}\\n```\\n\\nIn the example above the `setTemperature` operation receives a parameter of type `float`. The operation does not return a value.\\n\\n## Signals\\n\\nSignals are events that can be emitted by an object. They can be received by users of the object.\\n\\n```\\ninterface HeatingSystem {\\n    signal maxTemperatureReached()\\n}\\n```\\n\\nIn the example above the `maxTemperatureReached` signal does not receive any parameters.\\n\\n## Structures\\n\\nDifferent than objects which can be interacted with, structures are just data structures that can be used to send complex information between objects. A structure is defined as follows:\\n\\n```\\nstruct Struct1 {}\\n```\\n\\nA struct can have fields of any type.\\n\\n\\n## Enumerations\\n\\nAn enumeration is a set of named values. An enumeration is defined as follows:\\n\\n```\\nenum Enum1 {\\n    value1\\n    value2\\n}\\n```\\n\\nAn enumeration can be used as a type for properties, operations and signals.\\n\\n## Modules \\n\\nA module is a collection of objects, structures and enumerations. A module is defined as follows:\\n\\n```\\nmodule name version\\n\\ninterface Name {}\\n```\\n\\nThe version of a module is a string that follows the [semver](https://semver.org/) format. The version of a module is optional. If no version is specified the version is `0.0.0`.\\n\\n\\n# Working with the API surface\\n\\nWhen designing an API surface it is important to keep the following in mind:"}]}')}}]);