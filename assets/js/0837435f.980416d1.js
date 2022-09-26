(self.webpackChunkave_react_docs=self.webpackChunkave_react_docs||[]).push([[946],{3905:function(A,n,e){"use strict";e.d(n,{Zo:function(){return g},kt:function(){return R}});var t=e(7294);function B(A,n,e){return n in A?Object.defineProperty(A,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):A[n]=e,A}function o(A,n){var e=Object.keys(A);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(A,n).enumerable}))),e.push.apply(e,t)}return e}function r(A){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){B(A,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(A,n,Object.getOwnPropertyDescriptor(e,n))}))}return A}function E(A,n){if(null==A)return{};var e,t,B=function(A,n){if(null==A)return{};var e,t,B={},o=Object.keys(A);for(t=0;t<o.length;t++)e=o[t],n.indexOf(e)>=0||(B[e]=A[e]);return B}(A,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);for(t=0;t<o.length;t++)e=o[t],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(A,e)&&(B[e]=A[e])}return B}var C=t.createContext({}),I=function(A){var n=t.useContext(C),e=n;return A&&(e="function"==typeof A?A(n):r(r({},n),A)),e},g=function(A){var n=I(A.components);return t.createElement(C.Provider,{value:n},A.children)},a={inlineCode:"code",wrapper:function(A){var n=A.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(A,n){var e=A.components,B=A.mdxType,o=A.originalType,C=A.parentName,g=E(A,["components","mdxType","originalType","parentName"]),s=I(e),R=B,c=s["".concat(C,".").concat(R)]||s[R]||a[R]||o;return e?t.createElement(c,r(r({ref:n},g),{},{components:e})):t.createElement(c,r({ref:n},g))}));function R(A,n){var e=arguments,B=n&&n.mdxType;if("string"==typeof A||B){var o=e.length,r=new Array(o);r[0]=s;var E={};for(var C in n)hasOwnProperty.call(n,C)&&(E[C]=n[C]);E.originalType=A,E.mdxType="string"==typeof A?A:B,r[1]=E;for(var I=2;I<o;I++)r[I]=e[I];return t.createElement.apply(null,r)}return t.createElement.apply(null,e)}s.displayName="MDXCreateElement"},6574:function(A,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return E},contentTitle:function(){return C},metadata:function(){return I},toc:function(){return g},default:function(){return s}});var t=e(2122),B=e(9756),o=(e(7294),e(3905)),r=["components"],E={id:"custom-component",title:"Custom Component"},C=void 0,I={unversionedId:"custom-component",id:"custom-component",isDocsHomePage:!1,title:"Custom Component",description:"Examples",source:"@site/docs/custom-component.md",sourceDirName:".",slug:"/custom-component",permalink:"/Ave-React-Docs/custom-component",version:"current",frontMatter:{id:"custom-component",title:"Custom Component"},sidebar:"components",previous:{title:"Label",permalink:"/Ave-React-Docs/label"},next:{title:"Theme",permalink:"/Ave-React-Docs/theme"}},g=[{value:"Examples",id:"examples",children:[{value:"Basic",id:"example-basic",children:[]},{value:"Custom Button",id:"example-button",children:[]}]}],a={toc:g};function s(A){var n=A.components,E=(0,B.Z)(A,r);return(0,o.kt)("wrapper",(0,t.Z)({},a,E,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"example-basic"},"Basic"),(0,o.kt)("p",null,"You can create your own component using ",(0,o.kt)("inlineCode",{parentName:"p"},"Placeholder")," Component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{13}","{13}":!0},"export function App() {\n    const onPaintPost = useCallback<IPlaceholderComponentProps['onPaintPost']>(\n        (sender: IPlaceholder, painter: IPainter, rect: Rect) => {\n            painter.SetPenColor(new Vec4(255, 0, 0, 255));\n            painter.DrawRectangle(0, 0, rect.w, rect.h);\n        },\n        [],\n    );\n\n    return (\n        <Window>\n            <DemoLayout width=\"500dpx\" height=\"500dpx\">\n                <Placeholder onPaintPost={onPaintPost} />\n            </DemoLayout>\n        </Window>\n    );\n}\n\nexport interface IDemoLayoutProps {\n    children?: any[] | any;\n    width?: string;\n    height?: string;\n}\n\nexport function DemoLayout(props: IDemoLayoutProps) {\n    const width = props?.width ?? '120dpx';\n    const height = props?.height ?? '32dpx';\n\n    const demoLayout = {\n        columns: `1 ${width} 1`,\n        rows: `1 ${height} 1`,\n        areas: {\n            center: { row: 1, column: 1 },\n        },\n    };\n    return (\n        <Grid style={{ layout: demoLayout }}>\n            <Grid style={{ area: demoLayout.areas.center }}>\n                {props.children}\n            </Grid>\n        </Grid>\n    );\n}\n")),(0,o.kt)("p",null,"This gives us a red rectangle:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"placeholder basic",src:e(2605).Z})),(0,o.kt)("p",null,"Custom UI is achieved by painter API, which is similar to canvas API."),(0,o.kt)("h4",{id:"api-basic"},"API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'export interface IPlaceholderComponentProps extends IComponentProps {\n    onPaintPost?: Parameters<IControl["OnPaintPost"]>[0];\n    onPointerEnter?: Parameters<IControl["OnPointerEnter"]>[0];\n    onPointerLeave?: Parameters<IControl["OnPointerLeave"]>[0];\n    onPointerPress?: Parameters<IControl["OnPointerPress"]>[0];\n    onPointerRelease?: Parameters<IControl["OnPointerRelease"]>[0];\n    onPointerMove?: Parameters<IControl["OnPointerMove"]>[0];\n}\n\nexport interface IPainter {\n    SetPenColor(vColor: Vec4): void;\n    DrawRectangle(x: number, y: number, w: number, h: number): void;\n    ...\n}\n')),(0,o.kt)("h3",{id:"example-button"},"Custom Button"),(0,o.kt)("p",null,"This example shows how to listen to event, and finally get this custom button:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"custom button",src:e(3796).Z})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'export function App() {\n    return (\n        <Window>\n            <DemoLayout>\n                <Button text="Primary Button" />\n            </DemoLayout>\n        </Window>\n    );\n}\n\nexport interface IDemoLayoutProps {\n    ...\n}\n\nexport function DemoLayout(props: IDemoLayoutProps) {\n    ...\n}\n\ninterface IButtonStyle {\n    border: {\n        radius: number;\n    };\n    color: Vec4;\n    backgroundColor: Vec4;\n    font: {\n        size: number;\n        family: string[];\n    };\n}\n\ninterface IButtonProps {\n    text: string;\n    style?: IButtonStyle;\n}\n\nconst colors = {\n    normal: new Vec4(24, 144, 255, 255),\n    hover: new Vec4(64, 169, 255, 255),\n    active: new Vec4(9, 109, 217, 255),\n    white: new Vec4(255, 255, 255, 255),\n};\n\nconst defaultButtonStyle = {\n    border: {\n        radius: 3,\n    },\n    color: colors.white,\n    backgroundColor: colors.normal,\n    font: {\n        size: 9,\n        family: ["Segoe UI", "Microsoft YaHei UI", "Meiryo UI", "SimSun-ExtB"],\n    },\n};\n\nfunction Button(props: IButtonProps) {\n    const [style, setStyle] = useState(props.style ?? defaultButtonStyle);\n    const text = props.text ?? "Button";\n\n    const [isEntered, setIsEntered] = useState(false);\n    const [isPressed, setIsPressed] = useState(false);\n\n    const onPaintPost = useCallback<IPlaceholderComponentProps["onPaintPost"]>(\n        (sender: IPlaceholder, painter: IPainter, rect: Rect) => {\n            const { border, color, backgroundColor, font: fontStyle } = style;\n\n            const fontDesc = new FontDescription();\n            fontDesc.Name = fontStyle.family;\n            fontDesc.Size = fontStyle.size;\n\n            const context = getAppContext();\n            const window = context.getWindow();\n            const font = new Byo2Font(window, fontDesc);\n\n            painter.SetFillColor(backgroundColor);\n            painter.FillRoundedRectangle(rect.x, rect.y, rect.w, rect.h, border.radius, border.radius);\n            painter.SetTextColor(color);\n            painter.DrawString(font, rect, text, DrawTextFlag.Center | DrawTextFlag.VCenter, text.length);\n        },\n        [style, text]\n    );\n\n    const onPointerEnter = useCallback<IPlaceholderComponentProps["onPointerEnter"]>((sender: IPlaceholder) => {\n        setIsEntered(true);\n        setStyle({\n            ...style,\n            backgroundColor: colors.hover,\n        });\n        sender.Redraw();\n    }, []);\n\n    const onPointerLeave = useCallback<IPlaceholderComponentProps["onPointerLeave"]>(\n        (sender: IPlaceholder) => {\n            setIsEntered(false);\n            if (!isPressed) {\n                setStyle({\n                    ...style,\n                    backgroundColor: colors.normal,\n                });\n            }\n            sender.Redraw();\n        },\n        [isPressed]\n    );\n\n    const onPointerPress = useCallback<IPlaceholderComponentProps["onPointerPress"]>((sender: IPlaceholder) => {\n        setIsPressed(true);\n        setStyle({\n            ...style,\n            backgroundColor: colors.active,\n        });\n        sender.Redraw();\n    }, []);\n\n    const onPointerRelease = useCallback<IPlaceholderComponentProps["onPointerRelease"]>((sender: IPlaceholder) => {\n        setIsPressed(false);\n        setStyle({\n            ...style,\n            backgroundColor: colors.normal,\n        });\n        sender.Redraw();\n    }, []);\n\n    return <Placeholder onPaintPost={onPaintPost} onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave} onPointerPress={onPointerPress} onPointerRelease={onPointerRelease} />;\n}\n')),(0,o.kt)("h4",{id:"button-ui"},"UI"),(0,o.kt)("p",null,"A button is just a rectangle with text:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{13-29}","{13-29}":!0},"const onPaintPost = useCallback<IPlaceholderComponentProps['onPaintPost']>(\n    (sender: IPlaceholder, painter: IPainter, rect: Rect) => {\n        const { border, color, backgroundColor, font: fontStyle } = style;\n\n        const fontDesc = new FontDescription();\n        fontDesc.Name = fontStyle.family;\n        fontDesc.Size = fontStyle.size;\n\n        const context = getAppContext();\n        const window = context.getWindow();\n        const font = new Byo2Font(window, fontDesc);\n\n        painter.SetFillColor(backgroundColor);\n        painter.FillRoundedRectangle(\n            rect.x,\n            rect.y,\n            rect.w,\n            rect.h,\n            border.radius,\n            border.radius,\n        );\n        painter.SetTextColor(color);\n        painter.DrawString(\n            font,\n            rect,\n            text,\n            DrawTextFlag.Center | DrawTextFlag.VCenter,\n            text.length,\n        );\n    },\n    [style, text],\n);\n")),(0,o.kt)("h4",{id:"button-event"},"Event"),(0,o.kt)("p",null,"Enter & Leave, Press & Release:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{4-7}","{4-7}":!0},"return (\n    <Placeholder\n        onPaintPost={onPaintPost}\n        onPointerEnter={onPointerEnter}\n        onPointerLeave={onPointerLeave}\n        onPointerPress={onPointerPress}\n        onPointerRelease={onPointerRelease}\n    />\n);\n")),(0,o.kt)("h4",{id:"button-style"},"Style"),(0,o.kt)("p",null,"Yes, fully customizable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface IButtonStyle {\n    border: {\n        radius: number;\n    };\n    color: Vec4;\n    backgroundColor: Vec4;\n    font: {\n        size: number;\n        family: string[];\n    };\n}\n")),(0,o.kt)("h4",{id:"api-from-button-example"},"API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IControl extends IControlExtension {\n    OnPointerEnter(\n        fn: (sender: IControl, mp: MessagePointer) => void,\n    ): IControl;\n    OnPointerLeave(\n        fn: (sender: IControl, mp: MessagePointer) => void,\n    ): IControl;\n    OnPointerPress(\n        fn: (sender: IControl, mp: MessagePointer) => void,\n    ): IControl;\n    OnPointerRelease(\n        fn: (sender: IControl, mp: MessagePointer) => void,\n    ): IControl;\n}\n\nexport interface IPainter {\n    SetFillColor(vColor: Vec4): void;\n    FillRoundedRectangle(\n        x: number,\n        y: number,\n        w: number,\n        h: number,\n        rx: number,\n        ry: number,\n    ): void;\n\n    SetTextColor(vColor: Vec4): void;\n    DrawString(\n        pFont: Byo2Font,\n        rc: Rect,\n        s: string,\n        nFlag: DrawTextFlag,\n        nCharCount: number,\n    ): Rect;\n}\n")))}s.isMDXComponent=!0},3796:function(A,n,e){"use strict";n.Z=e.p+"assets/images/custom-button-3489587c1f0ffb63bfbfc849b5bcb029.gif"},2605:function(A,n){"use strict";n.Z="data:image/png;base64,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AAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgRHAEAAACAGMERAAAAAIgZTabT6eXVSXnl8kY5f2m9vPDaWvmL743KYw+u9YcAwP7ed+epfg0AeLf6/suv9GsAsL9Hn1osv/j+afnAycVy5vihcurIQjmyNBYcAciowdF/pADAu5f/Xw7A9dorOHqkGgAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgLdh2i9nrgmO23cCAAAAAFwPdzgCAAAAADGCIwAAAAAQIzgCAAAAADGCIwAAAAAQIzgCAAAAADGCIwAAAAAQIzgCAAAAADGCIwAAAAAQIzgCAAAAADGCIwAAAAAQIzgCAAAAADGCIwAAAAAQIzgCAAAAADGCIwAAAAAQIzgCAAAAADGCIwAAAAAQIzgCAAAAADGCIwAAAAAQIzgCAAAAADGCIwAAAAAQIzgCAAAAADGCIwAAAAAQIzgCAAAAADGCIwAAAAAQIzgCAAAAADGCIwAAAAAQIzgCAAAAADGCIwAAAAAQIzgCAAAAADGCIwAAAAAQIzgCAAAAADGCIwAAAADwloxGo35ty47guNtBAAAAAAAH4Q5HAAAAACBGcAQAAAAAYgRHAAAAACBGcAQAAAAAYgRHAAAAACBGcAQAAAAAYgRHAAAAACBGcAQAAAAAYgRHAAAAACBGcAQAAAAAYgRHAAAAACBGcAQAAAAAYgRHAAAAACBGcAQAAAAAYgRHAAAAACBGcAQAAAAAYgRHAAAAACBGcAQAAAAAYgRHAAAAACBGcAQAAAAAYgRHAAAAACBGcAQAAAAAYgRHAAAAACBGcAQAAAAAYgRHAAAAACBGcAQAAAAAYgRHAAAAACBGcAQAAAAA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"}}]);