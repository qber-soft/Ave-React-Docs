(self.webpackChunkave_react_docs=self.webpackChunkave_react_docs||[]).push([[761],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},9608:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return w},default:function(){return S},frontMatter:function(){return v},metadata:function(){return h},toc:function(){return k}});var r=n(2122),a=n(9756),o=n(7294),s=n(3905),i=n(9443);var l=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(6010),u="tabItem_1uMI",p="tabItemActive_2DSg";var m=37,d=39;var g=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,a=e.values,s=e.groupId,i=e.className,g=l(),f=g.tabGroupChoices,b=g.setTabGroupChoices,v=(0,o.useState)(r),w=v[0],h=v[1],k=o.Children.toArray(e.children),y=[];if(null!=s){var S=f[s];null!=S&&S!==w&&a.some((function(e){return e.value===S}))&&h(S)}var x=function(e){var t=e.currentTarget,n=y.indexOf(t),r=a[n].value;h(r),null!=s&&(b(s,r),setTimeout((function(){var e,n,r,a,o,s,i,l;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,s=window,i=s.innerHeight,l=s.innerWidth,n>=0&&o<=l&&a<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},P=function(e){var t,n;switch(e.keyCode){case d:var r=y.indexOf(e.target)+1;n=y[r]||y[0];break;case m:var a=y.indexOf(e.target)-1;n=y[a]||y[y.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":n},i)},a.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":w===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:P,onFocus:x,onClick:x},n)}))),t?(0,o.cloneElement)(k.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))};var f=function(e){var t=e.children,n=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:r},t)},b=["components"],v={id:"progress",title:"Progress"},w=void 0,h={unversionedId:"progress",id:"progress",isDocsHomePage:!1,title:"Progress",description:"Examples",source:"@site/docs/progress.mdx",sourceDirName:".",slug:"/progress",permalink:"/Ave-React-Docs/progress",version:"current",frontMatter:{id:"progress",title:"Progress"}},k=[{value:"Examples",id:"examples",children:[{value:"Basic",id:"example-basic",children:[]},{value:"State",id:"example-state",children:[]},{value:"Step",id:"example-step",children:[]}]}],y={toc:k};function S(e){var t=e.components,o=(0,a.Z)(e,b);return(0,s.kt)("wrapper",(0,r.Z)({},y,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("h3",{id:"example-basic"},"Basic"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{5-6}","{5-6}":!0},"import { Window, ProgressBar, Grid } from 'ave-ui';\n\nexport function main(window: Window) {\n    const progressBar = new ProgressBar(window);\n    progressBar.SetMaximum(100).SetAnimation(true);\n    progressBar.SetValue(75);\n\n    const container = getControlDemoContainer(window);\n    container.ControlAdd(progressBar).SetGrid(1, 1);\n    window.SetContent(container);\n}\n\nfunction getControlDemoContainer(window: Window, count = 1) {\n    const container = new Grid(window);\n    container.ColAddSlice(1);\n    container.ColAddDpx(...Array.from<number>({ length: count }).fill(240));\n    container.ColAddSlice(1);\n\n    container.RowAddSlice(1);\n    container.RowAddDpx(...Array.from<number>({ length: count }).fill(32));\n    container.RowAddSlice(1);\n    return container;\n}\n")),(0,s.kt)("p",null,"In this example, we demonstrate the basic usage of progress."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"SetAnimation")," controls the flowing light."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"progress basic",src:n(865).Z})),(0,s.kt)("h4",{id:"api-basic"},"API"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IProgressBar extends IControl {\n    SetMaximum(value: number): ProgressBar;\n    GetMaximum(): number;\n\n    SetValue(value: number): ProgressBar;\n    GetValue(): number;\n\n    SetAnimation(enableAnimation: boolean): ProgressBar;\n\n    // animation is enabled: return true, else false\n    GetAnimation(): boolean;\n}\n")),(0,s.kt)("h3",{id:"example-state"},"State"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"SetState")," to change the status of progress:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{7}","{7}":!0},"import { Window, ProgressBar, Grid, ProgressBarState } from 'ave-ui';\n\nexport function main(window: Window) {\n    const progressBar = new ProgressBar(window);\n    progressBar.SetMaximum(100).SetAnimation(true);\n    progressBar.SetValue(75);\n    progressBar.SetState(ProgressBarState.Normal);\n\n    const container = getControlDemoContainer(window);\n    container.ControlAdd(progressBar).SetGrid(1, 1);\n    window.SetContent(container);\n}\n")),(0,s.kt)(g,{defaultValue:"normal",values:[{label:"Normal",value:"normal"},{label:"Paused",value:"paused"},{label:"Error",value:"error"},{label:"Pulse",value:"pulse"}],mdxType:"Tabs"},(0,s.kt)(f,{value:"normal",mdxType:"TabItem"},(0,s.kt)("img",{src:n(3911).Z})),(0,s.kt)(f,{value:"paused",mdxType:"TabItem"},(0,s.kt)("img",{src:n(6257).Z})),(0,s.kt)(f,{value:"error",mdxType:"TabItem"},(0,s.kt)("img",{src:n(6799).Z})),(0,s.kt)(f,{value:"pulse",mdxType:"TabItem"},(0,s.kt)("img",{src:n(6462).Z}))),(0,s.kt)("h4",{id:"api-state"},"API"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IProgressBar extends IControl {\n    SetState(state: ProgressBarState): ProgressBar;\n    GetState(): ProgressBarState;\n}\n\nexport enum ProgressBarState {\n    Normal,\n    Paused,\n    Error,\n    Pulse,\n    None,\n}\n")),(0,s.kt)("h3",{id:"example-step"},"Step"),(0,s.kt)("p",null,"Step is used to set the completion percentage of each increment."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Window, ProgressBar, Grid } from 'ave-ui';\n\nexport function main(window: Window) {\n    const progressBar = new ProgressBar(window);\n    progressBar.SetMaximum(100).SetAnimation(true);\n\n    // grow from 0%\n    progressBar.SetValue(0);\n\n    // each increment is 1%\n    progressBar.SetStep(1);\n\n    const container = getControlDemoContainer(window);\n    container.ControlAdd(progressBar).SetGrid(1, 1);\n    window.SetContent(container);\n\n    const id = setInterval(() => {\n        if (progressBar.GetValue() < 100) {\n            //\n            progressBar.Step();\n        } else {\n            clearInterval(id);\n        }\n    }, 100);\n}\n")),(0,s.kt)("p",null,"This example shows how to implement loading:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"progress step",src:n(1592).Z})),(0,s.kt)("h4",{id:"api-step"},"API"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IProgressBar extends IControl {\n    SetStep(value: number): ProgressBar;\n    GetStep(): number;\n    Step(): ProgressBar;\n}\n")))}S.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})},3911:function(e,t,n){"use strict";t.Z=n.p+"assets/images/progress-basic-90422138c07738a06478ac8c76b833a8.gif"},6799:function(e,t,n){"use strict";t.Z=n.p+"assets/images/progress-error-969ca51d1b1d99b07553cdc67b358bf7.gif"},6257:function(e,t,n){"use strict";t.Z=n.p+"assets/images/progress-paused-85c2c5391e3882f83584b8bc0405cb83.gif"},6462:function(e,t,n){"use strict";t.Z=n.p+"assets/images/progress-pulse-620f86cb311ca951061e394ecb4f5c6f.gif"},865:function(e,t,n){"use strict";t.Z=n.p+"assets/images/progress-basic-90422138c07738a06478ac8c76b833a8.gif"},1592:function(e,t,n){"use strict";t.Z=n.p+"assets/images/progress-step-6fd79aa2e3c081bd6beb4b74f290041c.gif"}}]);