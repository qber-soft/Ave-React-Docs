(self.webpackChunkave_react_docs=self.webpackChunkave_react_docs||[]).push([[963],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return d}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),c=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=c(e.components);return o.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return t?o.createElement(f,a(a({ref:n},l),{},{components:t})):o.createElement(f,a({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1677:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var o=t(2122),r=t(9756),i=(t(7294),t(3905)),a=["components"],s={id:"mouse",title:"\u9f20\u6807"},u=void 0,c={unversionedId:"mouse",id:"mouse",isDocsHomePage:!1,title:"\u9f20\u6807",description:"\u4f8b\u5b50",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/mouse.md",sourceDirName:".",slug:"/mouse",permalink:"/Ave-React-Docs/zh-cn/mouse",version:"current",frontMatter:{id:"mouse",title:"\u9f20\u6807"}},l=[{value:"\u4f8b\u5b50",id:"examples",children:[{value:"\u57fa\u672c\u7528\u6cd5",id:"example-basic",children:[]}]}],p={toc:l};function m(e){var n=e.components,s=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"examples"},"\u4f8b\u5b50"),(0,i.kt)("h3",{id:"example-basic"},"\u57fa\u672c\u7528\u6cd5"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/qber-soft/Ave-Nodejs/blob/main/Code/Avernakis%20Nodejs/Test-Nodejs/examples/unit/mouse-event/event-basic.ts"},"examples/unit/mouse-event/event-basic.ts"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"mouse event basic",src:t(4139).Z})),(0,i.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u6f14\u793a\u4e86\u5bf9\u4ee5\u4e0b\u4e8b\u4ef6\u7684\u5904\u7406\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enter & Leave"),(0,i.kt)("li",{parentName:"ul"},"Press & Release"),(0,i.kt)("li",{parentName:"ul"},"Move"),(0,i.kt)("li",{parentName:"ul"},"Hover")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{16,20,26,29,34,38}","{16,20,26,29,34,38}":!0},"function formatMessagePointer(m: MessagePointer) {\n    return `pos: (${m.Position.x}, ${m.Position.y})`;\n}\n\nexport function main(window: Window) {\n    const button = new Button(window);\n    let entered = false;\n    let pos = Vec2.Zero;\n\n    const updateButton = () =>\n        button.SetText(`${entered ? `at ${pos.x}, ${pos.y}` : 'out'}`);\n\n    updateButton();\n\n    //\n    button.OnPointerEnter((sender, mp) => {\n        entered = true;\n        updateButton();\n    });\n    button.OnPointerLeave((sender, mp) => {\n        entered = false;\n        updateButton();\n    });\n\n    //\n    button.OnPointerPress((sender, mp) => {\n        console.log(`on press: ${formatMessagePointer(mp)}`);\n    });\n    button.OnPointerRelease((sender, mp) => {\n        console.log(`on release: ${formatMessagePointer(mp)}`);\n    });\n\n    //\n    button.OnPointerMove((sender, mp) => {\n        pos = mp.Position;\n        updateButton();\n    });\n    button.OnPointerHover((sender, mp) => {\n        console.log('on hover');\n    });\n\n    const container = getControlDemoContainer(window);\n    container.ControlAdd(button).SetGrid(1, 1);\n    window.SetContent(container);\n}\n")),(0,i.kt)("h4",{id:"api-basic"},"API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IControl extends IControlExtension {\n    //\n    OnPointerEnter(\n        fn: (sender: IControl, mp: MessagePointer) => void,\n    ): IControl;\n    OnPointerLeave(\n        fn: (sender: IControl, mp: MessagePointer) => void,\n    ): IControl;\n\n    //\n    OnPointerPress(\n        fn: (sender: IControl, mp: MessagePointer) => void,\n    ): IControl;\n    OnPointerRelease(\n        fn: (sender: IControl, mp: MessagePointer) => void,\n    ): IControl;\n\n    //\n    OnPointerMove(fn: (sender: IControl, mp: MessagePointer) => void): IControl;\n    OnPointerHover(\n        fn: (sender: IControl, mp: MessagePointer) => void,\n    ): IControl;\n}\n\nexport class MessagePointer {\n    // Common\n    Id: number;\n    Type: PointerType;\n    Position: Vec2;\n    Modifier: InputModifier;\n    Button: PointerButton;\n    Count: number;\n\n    ...\n}\n")))}m.isMDXComponent=!0},4139:function(e,n,t){"use strict";n.Z=t.p+"assets/images/mouse-event-basic-291471b8c6b3c0a0dad436bf0bb73e31.gif"}}]);