(self.webpackChunkave_react_docs=self.webpackChunkave_react_docs||[]).push([[162],{3905:function(n,e,t){"use strict";t.d(e,{Zo:function(){return d},kt:function(){return A}});var o=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var s=o.createContext({}),p=function(n){var e=o.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},d=function(n){var e=p(n.components);return o.createElement(s.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,a=n.originalType,s=n.parentName,d=l(n,["components","mdxType","originalType","parentName"]),u=p(t),A=r,m=u["".concat(s,".").concat(A)]||u[A]||c[A]||a;return t?o.createElement(m,i(i({ref:e},d),{},{components:t})):o.createElement(m,i({ref:e},d))}));function A(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l.mdxType="string"==typeof n?n:r,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},601:function(n,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var o=t(2122),r=t(9756),a=(t(7294),t(3905)),i=["components"],l={id:"getting-started",title:"Getting Started"},s=void 0,p={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Usage",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/Ave-React-Docs/getting-started",version:"current",frontMatter:{id:"getting-started",title:"Getting Started"}},d=[{value:"Usage",id:"usage",children:[]},{value:"Hello Window",id:"hello-window",children:[]},{value:"Hello Button",id:"hello-button",children:[]},{value:"Debug",id:"debug",children:[]},{value:"Package",id:"package",children:[]}],c={toc:d};function u(n){var e=n.components,l=(0,r.Z)(n,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> npm i ave-ui\n")),(0,a.kt)("h2",{id:"hello-window"},"Hello Window"),(0,a.kt)("p",null,"This example from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/qber-soft/Ave-Nodejs-Template"},"Ave-Nodejs-Template")," is designed to let us get a glimpse of Ave:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"clone template project and ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run dev"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://github.com/qber-soft/Ave-Nodejs-Template/blob/main/src/index.ts"',title:'"https://github.com/qber-soft/Ave-Nodejs-Template/blob/main/src/index.ts"'},"import {\n    App,\n    WindowCreation,\n    Window,\n    WindowFlag,\n    Grid,\n    Vec4,\n    AveGetSDKVersion,\n} from 'ave-ui';\nimport * as path from 'path';\n\nexport function main(window: Window) {\n    const grid = new Grid(window);\n    const lightBlue = new Vec4(0, 146, 255, 255 * 0.75);\n    grid.SetBackColor(lightBlue);\n\n    //\n    const version = AveGetSDKVersion();\n    console.log(\n        `ave sdk version: ${JSON.stringify(\n            version.VersionString,\n            null,\n            4,\n        )}, is private: ${version.IsPrivateVersion}`,\n    );\n    window.SetContent(grid);\n}\n\nrun(main);\n\nexport function run(main: Function) {\n    const app = new App();\n\n    const iconDataMap = {\n        WindowIcon: [\n            path.resolve(__dirname, '../assets/Ave#0.png'),\n            path.resolve(__dirname, '../assets/Ave#1.png'),\n            path.resolve(__dirname, '../assets/Ave#2.png'),\n        ],\n    };\n    const resMap = app.CreateResourceMap(app, [16, 24, 32], iconDataMap);\n\n    globalThis.app = app;\n\n    //\n    const cpWindow = new WindowCreation();\n    cpWindow.Title = 'Ave Template';\n    cpWindow.Flag |= WindowFlag.Layered;\n\n    const window = new Window(cpWindow);\n    globalThis._window = window;\n\n    window.OnCreateContent((window) => {\n        window.SetIcon(resMap.WindowIcon);\n        main(window);\n        return true;\n    });\n\n    if (!window.CreateWindow()) process.exit(-1);\n\n    window.SetVisible(true);\n    window.Activate();\n}\n\nexport function get3x3Grid(window: Window, width = 120, height = 32) {\n    const container = new Grid(window);\n    container.ColAddSlice(1);\n    container.ColAddDpx(width);\n    container.ColAddSlice(1);\n\n    container.RowAddSlice(1);\n    container.RowAddDpx(height);\n    container.RowAddSlice(1);\n    return container;\n}\n")),(0,a.kt)("p",null,"You will get a light blue window:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"template basic",src:t(9543).Z})),(0,a.kt)("p",null,"Let's understand it piece by piece. First, create an instance of App, assign it to global to avoid GC:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{1,3}","{1,3}":!0},"const app = new App();\n...\nglobalThis.app = app;\n")),(0,a.kt)("p",null,"Create resource map, which will be used as reference to icon."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{8}","{8}":!0},"const iconDataMap = {\n    WindowIcon: [\n        path.resolve(__dirname, '../assets/Ave#0.png'),\n        path.resolve(__dirname, '../assets/Ave#1.png'),\n        path.resolve(__dirname, '../assets/Ave#2.png'),\n    ],\n};\nconst resMap = app.CreateResourceMap(\n    app,\n    [16, 24, 32] /* icon size list */,\n    iconDataMap,\n);\n")),(0,a.kt)("p",null,"Create an instance of Window:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{2,6}","{2,6}":!0},"// cp: creation param\nconst cpWindow = new WindowCreation();\ncpWindow.Title = 'Ave Template';\ncpWindow.Flag |= WindowFlag.Layered;\n\nconst window = new Window(cpWindow);\nglobalThis._window = window;\n")),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"OnCreateContent"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"set window icon using resource map"),(0,a.kt)("li",{parentName:"ul"},"create content of this simple application: just a grid with background"),(0,a.kt)("li",{parentName:"ul"},"print sdk version")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{2,10,15,17}","{2,10,15,17}":!0},"window.OnCreateContent(window => {\n    window.SetIcon(resMap.WindowIcon);\n    main(window);\n    return true\n})\n\n...\n\nexport function main(window: Window) {\n    const grid = new Grid(window);\n    const lightBlue = new Vec4(0, 146, 255, 255 * 0.75);\n    grid.SetBackColor(lightBlue);\n\n    //\n    const version = AveGetSDKVersion();\n    console.log(`ave sdk version: ${JSON.stringify(version.VersionString, null, 4)}, is private: ${version.IsPrivateVersion}`);\n    window.SetContent(grid);\n}\n...\n")),(0,a.kt)("p",null,"Boilerplate code about window creation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"if (!window.CreateWindow()) process.exit(-1);\n\nwindow.SetVisible(true);\nwindow.Activate();\n")),(0,a.kt)("h2",{id:"hello-button"},"Hello Button"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"clone template project and ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run dev:button"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export function main(window: Window) {\n    const button = new Button(window);\n    button.SetText('Button');\n    button.OnClick((sender) => {\n        sender.SetText('Button Clicked');\n        console.log('button clicked');\n    });\n\n    const container = get3x3Grid(window);\n    container.ControlAdd(button).SetGrid(1, 1);\n    window.SetContent(container);\n}\n")),(0,a.kt)("p",null,"Replace code in main, which gives us a basic application with button:"),(0,a.kt)("video",{src:t(6575).Z,controls:!0,autoplay:!0,style:{width:800}}),(0,a.kt)("h2",{id:"debug"},"Debug"),(0,a.kt)("p",null,"Ave app is just node app, so you can debug it as usual. For convenience, we add this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/qber-soft/Ave-Nodejs-Template/blob/main/.vscode/launch.json"},"launch config")," in template project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "configurations": [\n        {\n            "name": "Launch",\n            "type": "node",\n            "request": "launch",\n            "args": ["./src/index.ts"],\n            "runtimeArgs": ["--nolazy", "-r", "ts-node/register"],\n            "sourceMaps": true,\n            "cwd": "${workspaceRoot}",\n            "protocol": "inspector"\n        }\n    ]\n}\n')),(0,a.kt)("p",null,"Set some breakpoints and press ",(0,a.kt)("inlineCode",{parentName:"p"},"Launch"),", you are ready to go:"),(0,a.kt)("video",{src:t(9917).Z,controls:!0,autoplay:!0,style:{width:800}}),(0,a.kt)("h2",{id:"package"},"Package"),(0,a.kt)("p",null,"Clone template project and ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run release"),", the output is a single ",(0,a.kt)("inlineCode",{parentName:"p"},"exe"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"40M = 30M node runtime + 10M sdk node addon")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"package",src:t(2234).Z})),(0,a.kt)("p",null,"You can config app info in ",(0,a.kt)("inlineCode",{parentName:"p"},"ave.config.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { IPackConfig } from 'ave-pack';\n\nconst config: IPackConfig = {\n    build: {\n        projectRoot: __dirname,\n        target: 'node14-win-x64',\n        input: './build/src/index.js',\n        output: './bin/ave-app.exe',\n    },\n    resource: {\n        icon: './assets/ave.ico',\n        productVersion: '0.0.1',\n        productName: 'Ave Template App',\n        fileVersion: '0.0.1',\n        companyName: 'QberSoft',\n        fileDescription: 'The Template App of Ave',\n        LegalCopyright: `\xa9 ${new Date().getFullYear()} Ave Copyright.`,\n    },\n};\n\nexport default config;\n")))}u.isMDXComponent=!0},6575:function(n,e,t){"use strict";e.Z=t.p+"assets/medias/getting-started-template-project-238f6ff0ebba525d82a6c5a58b9dad0f.mp4"},9917:function(n,e,t){"use strict";e.Z=t.p+"assets/medias/vscode-debug-40afd41873ec9f3f6fa59c6b8e90eb22.mp4"},9543:function(n,e,t){"use strict";e.Z=t.p+"assets/images/template-basic-270f77c001452dfd6023b5bc4bd1d133.png"},2234:function(n,e){"use strict";e.Z="data:image/png;base64,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"}}]);