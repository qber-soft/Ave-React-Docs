(self.webpackChunknode_ave_docs=self.webpackChunknode_ave_docs||[]).push([[512],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||c;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5504:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var r=n(2122),o=n(9756),c=(n(7294),n(3905)),a=["components"],i={id:"color-picker",title:"ColorPicker"},l=void 0,s={unversionedId:"color-picker",id:"color-picker",isDocsHomePage:!1,title:"ColorPicker",description:"Examples",source:"@site/docs/color-picker.md",sourceDirName:".",slug:"/color-picker",permalink:"/Ave-Nodejs-Docs/color-picker",version:"current",frontMatter:{id:"color-picker",title:"ColorPicker"},sidebar:"components",previous:{title:"Input",permalink:"/Ave-Nodejs-Docs/input"},next:{title:"ScrollBar",permalink:"/Ave-Nodejs-Docs/scroll-bar"}},u=[{value:"Examples",id:"examples",children:[{value:"Basic",id:"example-basic",children:[]}]}],p={toc:u};function f(e){var t=e.components,i=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"examples"},"Examples"),(0,c.kt)("h3",{id:"example-basic"},"Basic"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{7-9}","{7-9}":!0},"import { Window, Button, Vec4 } from 'ave-ui';\n\nexport function main(window: Window) {\n    const button = new Button(window);\n    button.SetText('Button');\n    button.OnClick((sender) => {\n        const commonUi = window.GetCommonUi();\n        const result = commonUi.PickColor(new Vec4(255, 255, 255, 255), false);\n        sender.SetTextColor(result);\n    });\n\n    const container = getControlDemoContainer(window);\n    container.ControlAdd(button).SetGrid(1, 1);\n    window.SetContent(container);\n}\n")),(0,c.kt)("p",null,"Get selected color and use it to set color of button text:"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"color picker basic",src:n(8133).Z})),(0,c.kt)("h4",{id:"api-basic"},"API"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ICommonUi {\n    PickColor(defaultColor: Vec4, allowAlpha: boolean): Vec4;\n}\n")),(0,c.kt)("p",null,"In the above example, we set ",(0,c.kt)("inlineCode",{parentName:"p"},"defaultColor")," to white(",(0,c.kt)("inlineCode",{parentName:"p"},"new Vec4(255, 255, 255, 255)"),"):"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"color picker default color",src:n(5810).Z})),(0,c.kt)("p",null,"If we want to use the last used color as default, modify code in this way:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-diff"},"-   const result = commonUi.PickColor(new Vec4(255, 255, 255, 255), false);\n+   const result = commonUi.PickColor(sender.GetTextColor(), false);\n")),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"color picker default color 2",src:n(8735).Z})),(0,c.kt)("p",null,"If ",(0,c.kt)("inlineCode",{parentName:"p"},"allowAlpha")," is false, returned alpha of color is always 255, if it's true, we can select not only RGB, bug also alpha channel."))}f.isMDXComponent=!0},8133:function(e,t,n){"use strict";t.Z=n.p+"assets/images/color-picker-basic-27f07e5aa52242c6098dec199a5228ef.gif"},8735:function(e,t,n){"use strict";t.Z=n.p+"assets/images/color-picker-default-color-2-9a20e42c688cb7a07e9ab3d63b486aaf.gif"},5810:function(e,t,n){"use strict";t.Z=n.p+"assets/images/color-picker-default-color-4c1ee8d1ce7e8813ed7058f85bb06ca5.png"}}]);