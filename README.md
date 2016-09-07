# Angular 2 Reference App

Another reference app for my Angular 2 Development. I have created different Angular components for UI elements.

- Angular 2 uses Typescript (a typed superset of JS which compiles to JS at runtime on any platform).

## Typescript

TypeScript is a free and open source programming language developed and maintained by Microsoft.

It is a strict superset of JavaScript, and adds optional static typing and class-based object-oriented programming to the language. Anders Hejlsberg, lead architect of C# and creator of Delphi and Turbo Pascal, has worked on the development of TypeScript. TypeScript may be used to develop JavaScript applications for client-side or server-side (Node.js) execution.

TypeScript is designed for development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, any existing JavaScript programs are also valid TypeScript programs.

TypeScript supports definition files that can contain type information of existing JavaScript libraries, much like C/C++ header files can describe the structure of existing object files. This enables other programs to use the values defined in the files as if they were statically typed TypeScript entities. There are third-party header files for popular libraries like jQuery, MongoDB, and D3.js. TypeScript headers for the Node.js basic modules are also available, allowing development of Node.js programs within TypeScript.

The TypeScript compiler is itself written in TypeScript, transcompiled to JavaScript and licensed under the Apache 2 License.

TypeScript is included as a first-class programming language in Microsoft Visual Studio 2013 Update 2 and later, beside C# and other Microsoft languages. An official extension allows Visual Studio 2012 to support TypeScript as well.

Command line tool

> tsc

https://www.typescriptlang.org/docs/tutorial.html

## Installing the Angular 2 CLI Tool

> npm install -g angular-cli

You can check your installation by running..

> ng version

CLI tool reference https://cli.angular.io/reference.pdf

## Creating a new project

> ng new angular-reference-app

> cd angular-reference-app

> ng serve

## Example CLI Commands

### Generate a new component
> ng generate component my-new-component

### Generate a new directive
> ng generate directive my-new-directive

### Generate a new pipe
> ng generate pipe my-new-pipe

### Generate a new service
> ng generate service my-new-service

### Generate a new class
> ng generate class my-new-class

### Generate a new interface
> ng generate interface my-new-interface

### Generate a new enum
> ng generate enum my-new-enum

### Running Tests

Run all end-to-end tests using protractor.

> ng e2e

Run unit tests with Karma

> ng test

### Angular 2 Dependencies

A complete reference of Angular 2 classes can be seen at this link. They are all grouped by component.

https://angular.io/docs/ts/latest/api/

Some example Angular Dependencies out of the box

- common
- compiler
- core
- platform-browser
- platform-browser-dynamic
- router

Others

Systems.js - Allows you to import files and modules https://github.com/systemjs/systemjs
ES6 Shim - Allows older Javascript engines to be ECMAScript 6 comptaible https://www.npmjs.com/package/es6-shim
RXJS - Reactive Architecture libraries for more asynchronous applications. RxJS = Observables + Operators + Schedulers. http://reactivex.io/rxjs/
Reflect-metadata - Nice syntax when adding metadata to classes (uses annotations instead) http://stackoverflow.com/questions/30539571/can-anyone-explain-what-es7-reflect-metadata-is-all-about#_=_
Zone.js - Javascript is asynchronous in that tasks are not always run one right after the other (e.g. setTimeout) and you can't just put a timer at the start and put one at the end because another function to be executed might be delayed. This is where zone.js comes in, your code can be executed within defined zones which is useful for things like debugging, testing and profiling. https://github.com/angular/zone.js/
Clang Format - Formatting tool for your code which can also be used with GIT http://clang.llvm.org/docs/ClangFormat.html


### Configuration Files

src/tsconfig.json - TypeScript compiler configuration.. You will be able to see that our typescript compiler will convert all our code to ES5 for best browser compatibility. Sourcemaps are also turned on so that we can see the original files in the browser when optimizing our JS.

typings.json - TypesScript declaration files.

.editorconfig - Helps with code formatting in common IDEs

Note: JS sourcemap files are a way to map a combined/minified file back to their original state.

### Notes

- When adding a component to the main app component it must be added as a directive.

### Resources

Angular 2 Quickstart on Github https://github.com/angular/quickstart
