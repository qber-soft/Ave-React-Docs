(self.webpackChunkave_react_docs=self.webpackChunkave_react_docs||[]).push([[11],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(u,".").concat(f)]||m[f]||l[f]||c;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<c;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3140:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(2122),o=n(9756),c=(n(7294),n(3905)),a=["components"],i={id:"image",title:"Image \u56fe\u7247"},u=void 0,p={unversionedId:"image",id:"image",isDocsHomePage:!1,title:"Image \u56fe\u7247",description:"\x3c!-- ## \u7b80\u4ecb",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/image.md",sourceDirName:".",slug:"/image",permalink:"/Ave-React-Docs/zh-cn/image",version:"current",frontMatter:{id:"image",title:"Image \u56fe\u7247"},sidebar:"components",previous:{title:"ColorPicker \u989c\u8272\u9009\u62e9\u5668",permalink:"/Ave-React-Docs/zh-cn/color-picker"},next:{title:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6",permalink:"/Ave-React-Docs/zh-cn/custom-component"}},s=[{value:"\u4f8b\u5b50",id:"examples",children:[{value:"\u57fa\u672c\u7528\u6cd5",id:"example-basic",children:[]}]}],l={toc:s};function m(e){var t=e.components,i=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"examples"},"\u4f8b\u5b50"),(0,c.kt)("h3",{id:"example-basic"},"\u57fa\u672c\u7528\u6cd5"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{2,6}","{2,6}":!0},'export function App() {\n    const src = assetsPath(\'Clock#6.png\');\n    return (\n        <Window>\n            <DemoLayout width="1" height="1">\n                <Image src={src} />\n            </DemoLayout>\n        </Window>\n    );\n}\n')),(0,c.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u6f14\u793a\u4e86\u5982\u4f55\u663e\u793a\u4e00\u5f20\u56fe\u7247\uff1a"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"picture basic",src:n(6808).Z})),(0,c.kt)("h4",{id:"api-basic"},"API"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IImageComponentProps extends IComponentProps {\n    /**\n     * \u56fe\u7247\u6587\u4ef6\u7684\u7edd\u5bf9\u8def\u5f84 \u6216 AveImage\n     */\n    src: string | AveImage;\n}\n")))}m.isMDXComponent=!0},6808:function(e,t,n){"use strict";t.Z=n.p+"assets/images/picture-basic-3da3350b11c0666a0bc9ebbfab965dbf.png"}}]);