(self.webpackChunkave_react_docs=self.webpackChunkave_react_docs||[]).push([[586],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return s},kt:function(){return d}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),l=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},s=function(e){var r=l(e.components);return t.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?t.createElement(f,c(c({ref:r},s),{},{components:n})):t.createElement(f,c({ref:r},s))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7082:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var t=n(2122),a=n(9756),o=(n(7294),n(3905)),c=["components"],i={id:"track-bar",title:"TrackBar"},u=void 0,l={unversionedId:"track-bar",id:"track-bar",isDocsHomePage:!1,title:"TrackBar",description:"Examples",source:"@site/docs/track-bar.md",sourceDirName:".",slug:"/track-bar",permalink:"/Ave-React-Docs/track-bar",version:"current",frontMatter:{id:"track-bar",title:"TrackBar"},sidebar:"components",previous:{title:"RadioBox",permalink:"/Ave-React-Docs/radio-box"},next:{title:"Tree",permalink:"/Ave-React-Docs/tree"}},s=[{value:"Examples",id:"examples",children:[{value:"Basic",id:"example-basic",children:[]}]}],p={toc:s};function m(e){var r=e.components,i=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,t.Z)({},p,i,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"example-basic"},"Basic"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{4-7}","{4-7}":!0},"import { Window, TrackBar } from 'ave-ui';\n\nexport function main(window: Window) {\n    const trackBar = new TrackBar(window);\n    trackBar.OnThumbRelease((sender) => {\n        console.log(`on thumb release, current value: ${sender.GetValue()}`);\n    });\n\n    const container = getControlDemoContainer(window, 1, 500, 25);\n    container.ControlAdd(trackBar).SetGrid(1, 1);\n    window.SetContent(container);\n}\n")),(0,o.kt)("p",null,"Drag it and get value:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"track bar basic",src:n(6356).Z})),(0,o.kt)("p",null,"In console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"on thumb release, current value: 0\non thumb release, current value: 22\non thumb release, current value: 46\non thumb release, current value: 69\non thumb release, current value: 75\non thumb release, current value: 85\non thumb release, current value: 100\n...\n")),(0,o.kt)("h4",{id:"api-basic"},"API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ITrackBar extends IControl {\n    // range is [0,100]\n    GetValue(): number;\n    SetValue(nValue: number): TrackBar;\n\n    //\n    OnThumbRelease(fn: (sender: TrackBar) => void): TrackBar;\n}\n")))}m.isMDXComponent=!0},6356:function(e,r,n){"use strict";r.Z=n.p+"assets/images/track-bar-basic-dda240f6befe490c75d535c2b08d16a4.gif"}}]);