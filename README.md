# Welcome

I created this repo in order to have a quick playground for my javascript code.

## Playground

There is no anything new and complicated, the tools are things that can be done in a couple of steps, but that is the problem always do all those steps.

### Objective

I like things like jsfiddle is very nice, I want to have the same in my local machine. Probably is already there some repositories doing the same, I want to do my own repository to understand more Javascript.

So, in the end is just and HTML, CSS (SCSS), Javascript and a Result ready to be used.

### How to use it

To build the project just press Ctrl+Shift+B this will execute the ```npm start``` or execute the ```npm start``` in a terminal.

To debug the code in VSCode, the extension mention below need to be installed and there is already some Launchers, just press F5 or select one from the VS Code.

### Unit Test

Jasmine is the tool used for unit test. Using VSCode extension [Jasmine Test Explorer](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-jasmine-test-adapter) is possible to debug the unit test

In order to execute the unit test use ```npm run test``` it will create the bundles and execute the unit test or use ```npm run test:watch``` this webpack will check your unit test changes.

## Workspace

Since some file and folders bother me, I excluded them from the VS Code explorer. if you want to see them, remember that you can enable them by change the [settings.json](./.vscode/settings.json)

### Excluded Files Folder

- node_modules
- .vscode
- package.json
- package-lock.json
- tsconfig.json
- webpack.config.js
- .gitignore
- dist
- spec

## Extensions

I have added one recommended extension for this project only. The [JavaScript Debugger](https://marketplace.visualstudio.com/items?itemName=ms-vscode.js-debug). In order to make easy to debug your javascript code in visual studio.

## TODO

- [x] Unit Testing with Webpack
- [ ] Console in the HTML - Tool for nice web console
- [x] Debug Unit Test
- [ ] Typescript
- [ ] Unit Test Typescript
- [ ] Remove test code in the javascript and css
- [ ] Fix unit test
- [ ] remove unused packages
