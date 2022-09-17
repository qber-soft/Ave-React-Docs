(self.webpackChunkave_react_docs=self.webpackChunkave_react_docs||[]).push([[418],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,m=f["".concat(u,".").concat(d)]||f[d]||l[d]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7844:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],c={id:"introduction",title:"\u7b80\u4ecb",slug:"/"},u=void 0,s={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"\u7b80\u4ecb",description:"Avernakis \u662f\u7528\u4e8e\u521b\u5efa\u684c\u9762\u5e94\u7528\u7684 UI \u5e93\uff0cSDK \u672c\u8eab\u662f\u7531 C++ \u5199\u6210\uff0c\u4e3a\u4e86\u65b9\u4fbf\u5f00\u53d1\uff0c\u4f7f\u7528 napi \u5c01\u88c5\u6210\u4e86 JS API\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/introduction.md",sourceDirName:".",slug:"/",permalink:"/Ave-React-Docs/zh-cn/",version:"current",frontMatter:{id:"introduction",title:"\u7b80\u4ecb",slug:"/"},sidebar:"docs",next:{title:"\u5feb\u901f\u4e0a\u624b",permalink:"/Ave-React-Docs/zh-cn/getting-started"}},p=[{value:"Avernakis Native",id:"avernakis-native",children:[]},{value:"JS API",id:"js-api",children:[]}],l={toc:p};function f(e){var t=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Avernakis \u662f\u7528\u4e8e\u521b\u5efa\u684c\u9762\u5e94\u7528\u7684 UI \u5e93\uff0cSDK \u672c\u8eab\u662f\u7531 C++ \u5199\u6210\uff0c\u4e3a\u4e86\u65b9\u4fbf\u5f00\u53d1\uff0c\u4f7f\u7528 napi \u5c01\u88c5\u6210\u4e86 JS API\u3002"),(0,i.kt)("p",null,"\u6b64\u6587\u6863\u7ad9\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528\u8fd9\u4e9b API \u8fdb\u884c\u5f00\u53d1\u3002"),(0,i.kt)("h2",{id:"avernakis-native"},"Avernakis Native"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/qber-soft/Ave-SDK/blob/main/README_zh-cn.md"},"Avernakis C++ SDK ")," \u672c\u8eab\u529f\u80fd\u5341\u5206\u4e30\u5bcc\uff0c\u5728\u5df2\u7ecf\u53d1\u5e03\u7684\u7248\u672c\u4e2d\uff0c\u9644\u5e26\u6709\u76f8\u5e94\u7684\u6f14\u793a\u7a0b\u5e8f\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/qber-soft/Ave-SDK/releases/download/0.8.0/AvernakisApp.7z"},"AvernakisApp.7z"),"\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u4e0b\u8f7d\u540e\u6253\u5f00\uff1aSpellcaster-Gui-Image/Bin64/Test-Gui.exe")),(0,i.kt)("p",null,"\u4ee5\u4e0b\u89c6\u9891\u4f7f\u7528\u8fd9\u4e2a\u6f14\u793a\u7a0b\u5e8f\uff0c\u7b80\u8981\u5c55\u793a SDK \u7684\u529f\u80fd\uff1a"),(0,i.kt)("video",{src:n(6408).Z,controls:!0,autoplay:!0,style:{width:800}}),(0,i.kt)("p",null,"\u652f\u6301\u6697\u8272\u4e3b\u9898\uff1a"),(0,i.kt)("video",{src:n(7345).Z,controls:!0,autoplay:!0,style:{width:800}}),(0,i.kt)("h2",{id:"js-api"},"JS API"),(0,i.kt)("p",null,"\u76ee\u524d\u53ea\u5b8c\u6210\u4e86\u90e8\u5206 API \u7684\u5c01\u88c5\u3002"),(0,i.kt)("p",null,"JS SDK \u4ed3\u5e93\u4f4d\u4e8e\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/qber-soft/Ave-Nodejs"},"https://github.com/qber-soft/Ave-Nodejs")))}f.isMDXComponent=!0},7345:function(e,t,n){"use strict";t.Z=n.p+"assets/medias/intro-components-dark-664facef19f523497e8ab060ff37bf91.mp4"},6408:function(e,t,n){"use strict";t.Z=n.p+"assets/medias/intro-components-d930de11be746c87a19e92495c180958.mp4"}}]);