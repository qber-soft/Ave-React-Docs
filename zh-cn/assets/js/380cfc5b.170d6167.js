(self.webpackChunkave_react_docs=self.webpackChunkave_react_docs||[]).push([[342],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return s},kt:function(){return f}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),l=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},s=function(e){var r=l(e.components);return t.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(i,".").concat(f)]||m[f]||p[f]||c;return n?t.createElement(d,o(o({ref:r},s),{},{components:n})):t.createElement(d,o({ref:r},s))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<c;l++)o[l]=n[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7711:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var t=n(2122),a=n(9756),c=(n(7294),n(3905)),o=["components"],u={id:"track-bar",title:"TrackBar \u8f68\u9053\u6761"},i=void 0,l={unversionedId:"track-bar",id:"track-bar",isDocsHomePage:!1,title:"TrackBar \u8f68\u9053\u6761",description:"\x3c!-- ## \u7b80\u4ecb",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/track-bar.md",sourceDirName:".",slug:"/track-bar",permalink:"/Ave-React-Docs/zh-cn/track-bar",version:"current",frontMatter:{id:"track-bar",title:"TrackBar \u8f68\u9053\u6761"}},s=[{value:"\u4f8b\u5b50",id:"examples",children:[{value:"\u57fa\u672c\u7528\u6cd5",id:"example-basic",children:[]}]}],p={toc:s};function m(e){var r=e.components,u=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,t.Z)({},p,u,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"examples"},"\u4f8b\u5b50"),(0,c.kt)("h3",{id:"example-basic"},"\u57fa\u672c\u7528\u6cd5"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{4-7}","{4-7}":!0},"import { Window, TrackBar } from 'ave-ui';\n\nexport function main(window: Window) {\n    const trackBar = new TrackBar(window);\n    trackBar.OnThumbRelease((sender) => {\n        console.log(`on thumb release, current value: ${sender.GetValue()}`);\n    });\n\n    const container = getControlDemoContainer(window, 1, 500, 25);\n    container.ControlAdd(trackBar).SetGrid(1, 1);\n    window.SetContent(container);\n}\n")),(0,c.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u6f14\u793a\u4e86\u8f68\u9053\u6761\u7684\u57fa\u672c\u7528\u6cd5\uff1a\u62d6\u52a8\u6ed1\u5757\u4ee5\u83b7\u53d6\u5bf9\u5e94\u4f4d\u7f6e\u7684\u503c:"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"track bar basic",src:n(577).Z})),(0,c.kt)("p",null,"\u540c\u65f6\u63a7\u5236\u53f0\u8fd8\u6709\u7c7b\u4f3c\u8fd9\u6837\u7684\u8f93\u51fa\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"on thumb release, current value: 0\non thumb release, current value: 22\non thumb release, current value: 46\non thumb release, current value: 69\non thumb release, current value: 75\non thumb release, current value: 85\non thumb release, current value: 100\n...\n")),(0,c.kt)("h4",{id:"api-basic"},"API"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ITrackBar extends IControl {\n    // \u83b7\u53d6\u6ed1\u5757\u5f53\u524d\u4f4d\u7f6e\u503c\uff0c\u9ed8\u8ba4\u8303\u56f4\u662f[0,100]\n    GetValue(): number;\n    SetValue(nValue: number): TrackBar;\n\n    // \u8bbe\u7f6e\u4e00\u4e2a\u56de\u8c03\uff0c\u5728\u62d6\u52a8\u6ed1\u5757\u653e\u624b\u7684\u65f6\u5019\u8c03\u7528\n    OnThumbRelease(fn: (sender: TrackBar) => void): TrackBar;\n}\n")))}m.isMDXComponent=!0},577:function(e,r,n){"use strict";r.Z=n.p+"assets/images/track-bar-basic-dda240f6befe490c75d535c2b08d16a4.gif"}}]);