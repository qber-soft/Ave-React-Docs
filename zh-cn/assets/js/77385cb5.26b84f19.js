(self.webpackChunknode_ave_docs=self.webpackChunknode_ave_docs||[]).push([[185],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return y}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),y=o,k=d["".concat(c,".").concat(y)]||d[y]||u[y]||a;return t?r.createElement(k,i(i({ref:n},l),{},{components:t})):r.createElement(k,i({ref:n},l))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4455:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i=["components"],s={id:"keyboard",title:"\u952e\u76d8"},c=void 0,p={unversionedId:"keyboard",id:"keyboard",isDocsHomePage:!1,title:"\u952e\u76d8",description:"\u4f8b\u5b50",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/keyboard.md",sourceDirName:".",slug:"/keyboard",permalink:"/Ave-Nodejs-Docs/zh-cn/keyboard",version:"current",frontMatter:{id:"keyboard",title:"\u952e\u76d8"},sidebar:"components",previous:{title:"\u4e3b\u9898",permalink:"/Ave-Nodejs-Docs/zh-cn/theme"},next:{title:"\u9f20\u6807",permalink:"/Ave-Nodejs-Docs/zh-cn/mouse"}},l=[{value:"\u4f8b\u5b50",id:"examples",children:[{value:"WSAD",id:"example-wsad",children:[]}]}],u={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"examples"},"\u4f8b\u5b50"),(0,a.kt)("h3",{id:"example-wsad"},"WSAD"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/qber-soft/Ave-Nodejs/blob/main/Code/Avernakis%20Nodejs/Test-Nodejs/examples/unit/keyboard-event/event-basic.ts"},"examples/unit/keyboard-event/event-basic.ts"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{3,10}","{3,10}":!0},"export function main(window: Window) {\n    // hk: hot key\n    const hkW = window.HotkeyRegister(KbKey.W, 0);\n    const hkS = window.HotkeyRegister(KbKey.S, 0);\n    const hkA = window.HotkeyRegister(KbKey.A, 0);\n    const hkD = window.HotkeyRegister(KbKey.D, 0);\n\n    window.OnWindowHotkey((sender, nId, key, n) => {\n        switch (nId) {\n            case hkW:\n                console.log('press w');\n                break;\n            case hkS:\n                console.log('press s');\n                break;\n            case hkA:\n                console.log('press a');\n                break;\n            case hkD:\n                console.log('press d');\n                break;\n        }\n    });\n\n    const container = getControlDemoContainer(window);\n    window.SetContent(container);\n}\n")),(0,a.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u6f14\u793a\u4e86\u5bf9\u952e\u76d8\u4e8b\u4ef6\u7684\u54cd\u5e94\uff1a\u6309 wsad\uff0c\u7136\u540e\u8f93\u51fa\u5bf9\u5e94\u6309\u952e\u5230\u63a7\u5236\u53f0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"press w\npress s\npress a\npress d\n")),(0,a.kt)("h4",{id:"api-hot-key"},"API"),(0,a.kt)("p",null,"\u6ce8\u518c\u5feb\u6377\u952e\uff08hotkey\uff09\uff0c\u7136\u540e\u83b7\u53d6\u4e00\u4e2a\u6570\u5b57\u6765\u6307\u4ee3\u8fd9\u4e2a\u5feb\u6377\u952e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export type IWindow<T> = {\n    HotkeyRegister(key: KbKey, n: InputModifier): number;\n}\n\nexport enum KbKey {\n    None,\n\n    // Function\n    Escape,\n    F1,\n    F2,\n    F3,\n    ...\n\n    A,\n    B,\n    C,\n    D,\n    E,\n    F,\n    G,\n    H,\n    I,\n    J,\n    K,\n    L,\n    M,\n    ...\n}\n\nexport enum InputModifier {\n    // Keyboard\n    LControl /**/ = 0x00000001,\n    LShift /**/ = 0x00000002,\n    LMenu /**/ = 0x00000004,\n    LSys /**/ = 0x00000008,\n    RControl /**/ = 0x00000010,\n    ...\n\n    // Pointer\n    Button1 /**/ = 0x00000100,\n    Button2 /**/ = 0x00000200,\n    ...\n}\n")),(0,a.kt)("p",null,"\u8fd9\u91cc",(0,a.kt)("inlineCode",{parentName:"p"},"nId"),"\u7684\u503c\u90fd\u662f\u4e4b\u524d\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"HotkeyRegister"),"\u8fd4\u56de\u7684\u6570\u5b57\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export type IWindow<T> = {\n    OnWindowHotkey(\n        fn: (sender: T, nId: number, key: KbKey, n: InputModifier) => void,\n    ): T;\n};\n")))}d.isMDXComponent=!0}}]);