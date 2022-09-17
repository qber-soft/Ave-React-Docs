(self.webpackChunkave_react_docs=self.webpackChunkave_react_docs||[]).push([[608],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,d=f["".concat(l,".").concat(m)]||f[m]||s[m]||c;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5124:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(2122),o=n(9756),c=(n(7294),n(3905)),a=["components"],i={id:"color-picker",title:"ColorPicker \u989c\u8272\u9009\u62e9\u5668"},l=void 0,u={unversionedId:"color-picker",id:"color-picker",isDocsHomePage:!1,title:"ColorPicker \u989c\u8272\u9009\u62e9\u5668",description:"\x3c!-- ## \u7b80\u4ecb",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/color-picker.md",sourceDirName:".",slug:"/color-picker",permalink:"/Ave-React-Docs/zh-cn/color-picker",version:"current",frontMatter:{id:"color-picker",title:"ColorPicker \u989c\u8272\u9009\u62e9\u5668"}},p=[{value:"\u4f8b\u5b50",id:"examples",children:[{value:"\u57fa\u672c\u7528\u6cd5",id:"example-basic",children:[]}]}],s={toc:p};function f(e){var t=e.components,i=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"examples"},"\u4f8b\u5b50"),(0,c.kt)("h3",{id:"example-basic"},"\u57fa\u672c\u7528\u6cd5"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{7-9}","{7-9}":!0},"import { Window, Button, Vec4 } from 'ave-ui';\n\nexport function main(window: Window) {\n    const button = new Button(window);\n    button.SetText('Button');\n    button.OnClick((sender) => {\n        const commonUi = window.GetCommonUi();\n        const result = commonUi.PickColor(new Vec4(255, 255, 255, 255), false);\n        sender.SetTextColor(result);\n    });\n\n    const container = getControlDemoContainer(window);\n    container.ControlAdd(button).SetGrid(1, 1);\n    window.SetContent(container);\n}\n")),(0,c.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u6f14\u793a\u4e86\u989c\u8272\u9009\u62e9\u5668\u7684\u57fa\u672c\u7528\u6cd5: \u83b7\u53d6\u7528\u6237\u9009\u62e9\u7684\u989c\u8272\uff0c\u7136\u540e\u7528\u5b83\u8bbe\u7f6e\u6309\u94ae\u4e0a\u7684\u6587\u5b57\u989c\u8272\u3002"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"color picker basic",src:n(499).Z})),(0,c.kt)("h4",{id:"api-basic"},"API"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ICommonUi {\n    PickColor(defaultColor: Vec4, allowAlpha: boolean): Vec4;\n}\n")),(0,c.kt)("p",null,"\u5728\u4f8b\u5b50\u4e2d\u6211\u4eec\u8bbe\u7f6e\u7684",(0,c.kt)("inlineCode",{parentName:"p"},"defaultColor"),"\uff08\u6bcf\u6b21\u6253\u5f00\u53d6\u8272\u5668\u65f6\u5019\u7684\u9ed8\u8ba4\u989c\u8272\uff09\u662f\u767d\u8272\uff08",(0,c.kt)("inlineCode",{parentName:"p"},"new Vec4(255, 255, 255, 255)"),"\uff09:"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"color picker default color",src:n(3235).Z})),(0,c.kt)("p",null,"\u5982\u679c\u5e0c\u671b\u6bcf\u6b21\u6253\u5f00\u53d6\u8272\u5668\u90fd\u662f\u4e0a\u4e00\u6b21\u7684\u989c\u8272\uff0c\u53ef\u4ee5\u8fd9\u6837\u4fee\u6539\u4ee3\u7801\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-diff"},"-   const result = commonUi.PickColor(new Vec4(255, 255, 255, 255), false);\n+   const result = commonUi.PickColor(sender.GetTextColor(), false);\n")),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"color picker default color 2",src:n(7249).Z})),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"allowAlpha")," \u5219\u63a7\u5236\u662f\u5426\u80fd\u9009\u62e9\u989c\u8272 alpha \u503c\uff0c\u503c\u4e3a ",(0,c.kt)("inlineCode",{parentName:"p"},"false")," \u7684\u65f6\u5019\u6700\u540e\u8fd4\u56de\u7684\u989c\u8272 alpha \u59cb\u7ec8\u662f 255\u3002"))}f.isMDXComponent=!0},499:function(e,t,n){"use strict";t.Z=n.p+"assets/images/color-picker-basic-27f07e5aa52242c6098dec199a5228ef.gif"},7249:function(e,t,n){"use strict";t.Z=n.p+"assets/images/color-picker-default-color-2-9a20e42c688cb7a07e9ab3d63b486aaf.gif"},3235:function(e,t,n){"use strict";t.Z=n.p+"assets/images/color-picker-default-color-4c1ee8d1ce7e8813ed7058f85bb06ca5.png"}}]);