(self.webpackChunkave_react_docs=self.webpackChunkave_react_docs||[]).push([[741],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return l},kt:function(){return p}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),b=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=b(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),d=b(n),p=a,m=d["".concat(s,".").concat(p)]||d[p]||u[p]||o;return n?r.createElement(m,i(i({ref:e},l),{},{components:n})):r.createElement(m,i({ref:e},l))}));function p(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3043:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return b},toc:function(){return l},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],c={id:"tab",title:"Tab"},s=void 0,b={unversionedId:"tab",id:"tab",isDocsHomePage:!1,title:"Tab",description:"Examples",source:"@site/docs/tab.md",sourceDirName:".",slug:"/tab",permalink:"/Ave-React-Docs/tab",version:"current",frontMatter:{id:"tab",title:"Tab"}},l=[{value:"Examples",id:"examples",children:[{value:"Basic",id:"example-basic",children:[]},{value:"Set Content",id:"set-content",children:[]}]}],u={toc:l};function d(t){var e=t.components,c=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,c,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"example-basic"},"Basic"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{4,6,9}","{4,6,9}":!0},"import { Window, Tab, TabItem } from 'ave-ui';\n\nexport function main(window: Window) {\n    const tab = new Tab(window);\n\n    const tabItem1 = new TabItem();\n    tabItem1.Id = 1;\n    tabItem1.Text = 'tab1';\n    tab.TabInsert(tabItem1);\n\n    const tabItem2 = new TabItem();\n    tabItem2.Id = 2;\n    tabItem2.Text = 'tab2';\n    tab.TabInsert(tabItem2);\n\n    const container = getControlDemoContainer(window, 1, 300, 150);\n    container.ControlAdd(tab).SetGrid(1, 1);\n    window.SetContent(container);\n}\n")),(0,o.kt)("p",null,"Switch between ",(0,o.kt)("inlineCode",{parentName:"p"},"tab1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tab2"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"tab basic",src:n(5828).Z})),(0,o.kt)("h4",{id:"api-basic"},"API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ITab extends IControl {\n    // add tab, return true when success\n    TabInsert(tabItem: TabItem): boolean;\n}\n\nexport class TabItem {\n    // 0 is reserved, don't use it as your tab id\n    Id: number = 0;\n    Order: number = 0;\n    Icon: IconCache = 0;\n    // title of tab\n    Text: string = '';\n    StackGroup: string = '';\n    StackText: string = '';\n    GroupId: number = 0;\n    Misc: TabItemMisc = TabItemMisc.None;\n    ButtonMask: number = 0;\n    Color: Vec4 = new Vec4();\n}\n")),(0,o.kt)("h3",{id:"set-content"},"Set Content"),(0,o.kt)("p",null,"We can put any control in tab:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{11-15}","{11-15}":!0},"import { Window, Tab, TabItem, Grid, Vec4 } from 'ave-ui';\n\nexport function main(window: Window) {\n    const tab = new Tab(window);\n\n    const tabItem1 = new TabItem();\n    tabItem1.Id = 1;\n    tabItem1.Text = 'tab1';\n    tab.TabInsert(tabItem1);\n\n    {\n        const grid = new Grid(window);\n        grid.SetBackColor(new Vec4(0, 146, 255, 255 * 0.75));\n        tab.ContentSet(1, grid);\n    }\n\n    const tabItem2 = new TabItem();\n    tabItem2.Id = 2;\n    tabItem2.Text = 'tab2';\n    tab.TabInsert(tabItem2);\n\n    {\n        const grid = new Grid(window);\n        grid.SetBackColor(new Vec4(238, 39, 70, 255));\n        tab.ContentSet(2, grid);\n    }\n\n    const container = getControlDemoContainer(window, 1, 300, 150);\n    container.ControlAdd(tab).SetGrid(1, 1);\n    window.SetContent(container);\n}\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"tab set content",src:n(2978).Z})),(0,o.kt)("h4",{id:"api-set-content"},"API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ITab extends IControl {\n    ContentSet(index: number, control: IControl);\n}\n")))}d.isMDXComponent=!0},5828:function(t,e,n){"use strict";e.Z=n.p+"assets/images/tab-basic-becd78bbfa3db6ff445ad9790db5b2e8.gif"},2978:function(t,e,n){"use strict";e.Z=n.p+"assets/images/tab-set-content-19c0a7f38dc413116a6187130f9d507e.gif"}}]);