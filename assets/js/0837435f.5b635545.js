(self.webpackChunkave_react_docs=self.webpackChunkave_react_docs||[]).push([[946],{3905:function(A,B,e){"use strict";e.d(B,{Zo:function(){return g},kt:function(){return c}});var n=e(7294);function t(A,B,e){return B in A?Object.defineProperty(A,B,{value:e,enumerable:!0,configurable:!0,writable:!0}):A[B]=e,A}function E(A,B){var e=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);B&&(n=n.filter((function(B){return Object.getOwnPropertyDescriptor(A,B).enumerable}))),e.push.apply(e,n)}return e}function r(A){for(var B=1;B<arguments.length;B++){var e=null!=arguments[B]?arguments[B]:{};B%2?E(Object(e),!0).forEach((function(B){t(A,B,e[B])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(e)):E(Object(e)).forEach((function(B){Object.defineProperty(A,B,Object.getOwnPropertyDescriptor(e,B))}))}return A}function o(A,B){if(null==A)return{};var e,n,t=function(A,B){if(null==A)return{};var e,n,t={},E=Object.keys(A);for(n=0;n<E.length;n++)e=E[n],B.indexOf(e)>=0||(t[e]=A[e]);return t}(A,B);if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(A);for(n=0;n<E.length;n++)e=E[n],B.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(A,e)&&(t[e]=A[e])}return t}var C=n.createContext({}),I=function(A){var B=n.useContext(C),e=B;return A&&(e="function"==typeof A?A(B):r(r({},B),A)),e},g=function(A){var B=I(A.components);return n.createElement(C.Provider,{value:B},A.children)},w={inlineCode:"code",wrapper:function(A){var B=A.children;return n.createElement(n.Fragment,{},B)}},R=n.forwardRef((function(A,B){var e=A.components,t=A.mdxType,E=A.originalType,C=A.parentName,g=o(A,["components","mdxType","originalType","parentName"]),R=I(e),c=t,s=R["".concat(C,".").concat(c)]||R[c]||w[c]||E;return e?n.createElement(s,r(r({ref:B},g),{},{components:e})):n.createElement(s,r({ref:B},g))}));function c(A,B){var e=arguments,t=B&&B.mdxType;if("string"==typeof A||t){var E=e.length,r=new Array(E);r[0]=R;var o={};for(var C in B)hasOwnProperty.call(B,C)&&(o[C]=B[C]);o.originalType=A,o.mdxType="string"==typeof A?A:t,r[1]=o;for(var I=2;I<E;I++)r[I]=e[I];return n.createElement.apply(null,r)}return n.createElement.apply(null,e)}R.displayName="MDXCreateElement"},6574:function(A,B,e){"use strict";e.r(B),e.d(B,{frontMatter:function(){return o},contentTitle:function(){return C},metadata:function(){return I},toc:function(){return g},default:function(){return R}});var n=e(2122),t=e(9756),E=(e(7294),e(3905)),r=["components"],o={id:"custom-component",title:"Custom Component"},C=void 0,I={unversionedId:"custom-component",id:"custom-component",isDocsHomePage:!1,title:"Custom Component",description:"Examples",source:"@site/docs/custom-component.md",sourceDirName:".",slug:"/custom-component",permalink:"/Ave-React-Docs/custom-component",version:"current",frontMatter:{id:"custom-component",title:"Custom Component"}},g=[{value:"Examples",id:"examples",children:[{value:"Basic",id:"example-basic",children:[]},{value:"Custom Button",id:"example-button",children:[]}]}],w={toc:g};function R(A){var B=A.components,o=(0,t.Z)(A,r);return(0,E.kt)("wrapper",(0,n.Z)({},w,o,{components:B,mdxType:"MDXLayout"}),(0,E.kt)("h2",{id:"examples"},"Examples"),(0,E.kt)("h3",{id:"example-basic"},"Basic"),(0,E.kt)("p",null,"You can create your own component using ",(0,E.kt)("inlineCode",{parentName:"p"},"Placeholder")," Component:"),(0,E.kt)("blockquote",null,(0,E.kt)("p",{parentName:"blockquote"},(0,E.kt)("a",{parentName:"p",href:"https://github.com/qber-soft/Ave-Nodejs/blob/main/Code/Avernakis%20Nodejs/Test-Nodejs/examples/unit/placeholder/placeholder-basic.ts"},"examples/unit/placeholder/placeholder-basic.ts"))),(0,E.kt)("pre",null,(0,E.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{3}","{3}":!0},"export function main(window: Window) {\n    const placeholder = new Placeholder(window);\n    placeholder.OnPaintPost((sender, painter, rect) => {\n        painter.SetPenColor(new Vec4(255, 0, 0, 255));\n        painter.DrawRectangle(0, 0, rect.w, rect.h);\n    });\n    const container = getControlDemoContainer(window, 1, 500, 500);\n    container.ControlAdd(placeholder).SetGrid(1, 1);\n    window.SetContent(container);\n}\n")),(0,E.kt)("p",null,"This gives us a red rectangle:"),(0,E.kt)("p",null,(0,E.kt)("img",{alt:"placeholder basic",src:e(2605).Z})),(0,E.kt)("p",null,"Custom UI is achieved by painter API, which is similar to canvas API."),(0,E.kt)("h4",{id:"api-basic"},"API"),(0,E.kt)("pre",null,(0,E.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IControl extends IControlExtension {\n    OnPaintPost(\n        fn: (sender: IControl, painter: IPainter, rect: Rect) => void,\n    ): IControl;\n}\n\nexport interface IPainter {\n    SetPenColor(vColor: Vec4): void;\n    DrawRectangle(x: number, y: number, w: number, h: number): void;\n}\n")),(0,E.kt)("h3",{id:"example-button"},"Custom Button"),(0,E.kt)("p",null,"This example shows how to listen to event, and finally get this custom button:"),(0,E.kt)("p",null,(0,E.kt)("img",{alt:"custom button",src:e(3796).Z})),(0,E.kt)("blockquote",null,(0,E.kt)("p",{parentName:"blockquote"},(0,E.kt)("a",{parentName:"p",href:"https://github.com/qber-soft/Ave-Nodejs/blob/main/Code/Avernakis%20Nodejs/Test-Nodejs/examples/unit/placeholder/custom-button.ts"},"examples/unit/placeholder/custom-button.ts"))),(0,E.kt)("p",null,"Usage:"),(0,E.kt)("pre",null,(0,E.kt)("code",{parentName:"pre",className:"language-ts"},"export function main(window: Window) {\n    const button = new Button(window, 'Primary Button');\n    const container = getControlDemoContainer(window, 1, 120, 32);\n    container.ControlAdd(button.control).SetGrid(1, 1);\n    window.SetContent(container);\n}\n")),(0,E.kt)("h4",{id:"button-ui"},"UI"),(0,E.kt)("p",null,"A button is just a rectangle with text:"),(0,E.kt)("pre",null,(0,E.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{14-17}","{14-17}":!0},"class Button {\n    text: string;\n    placeholder: Placeholder;\n    font: Byo2Font;\n    style: IButtonStyle;\n    colors: { normal: Vec4; active: Vec4; hover: Vec4 };\n    isEntered: boolean;\n    isPressed: boolean;\n\n    ...\n\n    onPaint(sender: IPlaceholder, painter: IPainter, rect: Rect) {\n        const { border, color, backgroundColor } = this.style;\n        painter.SetFillColor(backgroundColor);\n        painter.FillRoundedRectangle(rect.x, rect.y, rect.w, rect.h, border.radius, border.radius);\n        painter.SetTextColor(color);\n        painter.DrawString(this.font, rect, this.text, DrawTextFlag.Center | DrawTextFlag.VCenter, this.text.length);\n    }\n}\n")),(0,E.kt)("h4",{id:"button-event"},"Event"),(0,E.kt)("p",null,"Enter & Leave, Press & Release:"),(0,E.kt)("pre",null,(0,E.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{7-10}","{7-10}":!0},"class Button {\n    ...\n    constructor(window: Window, text: string) {\n        ...\n        this.placeholder = new Placeholder(window);\n        this.placeholder.OnPaintPost(this.onPaint.bind(this));\n        this.placeholder.OnPointerEnter(this.onEnter.bind(this));\n        this.placeholder.OnPointerLeave(this.onLeave.bind(this));\n        this.placeholder.OnPointerPress(this.onPress.bind(this));\n        this.placeholder.OnPointerRelease(this.onRelease.bind(this));\n        ...\n        this.isEntered = false;\n        this.isPressed = false;\n    }\n\n    onEnter() {\n        this.isEntered = true;\n        this.style.backgroundColor = this.colors.hover;\n        this.placeholder.Redraw();\n    }\n\n    onPress() {\n        this.isPressed = true;\n        this.style.backgroundColor = this.colors.active;\n        this.placeholder.Redraw();\n    }\n\n    onRelease() {\n        this.isPressed = false;\n        this.style.backgroundColor = this.colors.normal;\n        this.placeholder.Redraw();\n    }\n\n    onLeave() {\n        this.isEntered = false;\n        if (!this.isPressed) {\n            this.style.backgroundColor = this.colors.normal;\n        }\n        this.placeholder.Redraw();\n    }\n}\n")),(0,E.kt)("h4",{id:"button-style"},"Style"),(0,E.kt)("p",null,"Yes, fully customizable:"),(0,E.kt)("pre",null,(0,E.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{14}","{14}":!0},'class Button {\n    ...\n    constructor(window: Window, text: string) {\n        this.text = text;\n\n        ...\n\n        this.colors = {\n            normal: new Vec4(24, 144, 255, 255),\n            hover: new Vec4(64, 169, 255, 255),\n            active: new Vec4(9, 109, 217, 255),\n        };\n\n        this.style = {\n            border: {\n                radius: 3,\n            },\n            color: new Vec4(255, 255, 255, 255),\n            backgroundColor: this.colors.normal,\n            font: {\n                size: 9,\n                family: ["Segoe UI", "Microsoft YaHei UI", "Meiryo UI", "SimSun-ExtB"],\n            },\n        };\n\n        const fontDesc = new FontDescription();\n        fontDesc.Name = this.style.font.family;\n        fontDesc.Size = this.style.font.size;\n        const font = new Byo2Font(window, fontDesc);\n        this.font = font;\n    }\n    ...\n}\n')),(0,E.kt)("h4",{id:"api-from-button-example"},"API"),(0,E.kt)("pre",null,(0,E.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IControl extends IControlExtension {\n    OnPointerEnter(\n        fn: (sender: IControl, mp: MessagePointer) => void,\n    ): IControl;\n    OnPointerLeave(\n        fn: (sender: IControl, mp: MessagePointer) => void,\n    ): IControl;\n    OnPointerPress(\n        fn: (sender: IControl, mp: MessagePointer) => void,\n    ): IControl;\n    OnPointerRelease(\n        fn: (sender: IControl, mp: MessagePointer) => void,\n    ): IControl;\n}\n\nexport interface IPainter {\n    SetFillColor(vColor: Vec4): void;\n    FillRoundedRectangle(\n        x: number,\n        y: number,\n        w: number,\n        h: number,\n        rx: number,\n        ry: number,\n    ): void;\n\n    SetTextColor(vColor: Vec4): void;\n    DrawString(\n        pFont: Byo2Font,\n        rc: Rect,\n        s: string,\n        nFlag: DrawTextFlag,\n        nCharCount: number,\n    ): Rect;\n}\n")))}R.isMDXComponent=!0},3796:function(A,B,e){"use strict";B.Z=e.p+"assets/images/custom-button-3489587c1f0ffb63bfbfc849b5bcb029.gif"},2605:function(A,B){"use strict";B.Z="data:image/png;base64,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AAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgZTabT6eXVSXnl8kY5f2m9vPDaWvmL743KYw+u9YcAwP7ed+epfg0AeLf6/suv9GsAsL9Hn1osv/j+afnAycVy5vihcurIQjmyNBYcAciowdF/pADAu5f/Xw7A9dorOHqkGgAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgLdh2i9nrgmO23cCAAAAAFwPdzgCAAAAADGCIwAAAAAQIzgCAAAAADGCIwAAAAAQIzgCAAAAADGCIwAAAAAQIzgCAAAAADGCIwAAAAAQIzgCAAAAADGCIwAAAAAQIzgCAAAAADGCIwAAAAAQIzgCAAAAADGCIwAAAAAQIzgCAAAAADGCIwAAAAAQIzgCAAAAADGCIwAAAAAQIzgCAAAAADGCIwAAAAAQIzgCAAAAADGCIwAAAAAQIzgCAAAAADGCIwAAAAAQIzgCAAAAADGCIwAAAAAQIzgCAAAAADGCIwAAAAAQIzgCAAAAADGCIwAAAAAQIzgCAAAAADGCIwAAAADwloxGo35ty47guNtBAAAAAAAH4Q5HAAAAACBGcAQAAAAAYgRHAAAAACBGcAQAAAAAYgRHAAAAACBGcAQAAAAAYgRHAAAAACBGcAQAAAAAYgRHAAAAACBGcAQAAAAAYgRHAAAAACBGcAQAAAAAYgRHAAAAACBGcAQAAAAAYgRHAAAAACBGcAQAAAAAYgRHAAAAACBGcAQAAAAAYgRHAAAAACBGcAQAAAAAYgRHAAAAACBGcAQAAAAAYgRHAAAAACBGcAQAAAAAYgRHAAAAACBGcAQAAAAAYgRHAAAAACBGcAQAAAAA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"}}]);