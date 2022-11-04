(self.webpackChunkave_react_docs=self.webpackChunkave_react_docs||[]).push([[519],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return f}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=r,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return t?o.createElement(m,i(i({ref:n},s),{},{components:t})):o.createElement(m,i({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6827:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var o=t(2122),r=t(9756),a=(t(7294),t(3905)),i=["components"],c={id:"radio-box",title:"RadioBox \u5355\u9009\u6846"},l=void 0,u={unversionedId:"radio-box",id:"radio-box",isDocsHomePage:!1,title:"RadioBox \u5355\u9009\u6846",description:"\x3c!-- ## \u7b80\u4ecb",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/radio-box.md",sourceDirName:".",slug:"/radio-box",permalink:"/Ave-React-Docs/zh-cn/radio-box",version:"current",frontMatter:{id:"radio-box",title:"RadioBox \u5355\u9009\u6846"},sidebar:"components",previous:{title:"Tab \u6807\u7b7e\u9875",permalink:"/Ave-React-Docs/zh-cn/tab"},next:{title:"TrackBar \u8f68\u9053\u6761",permalink:"/Ave-React-Docs/zh-cn/track-bar"}},s=[{value:"\u4f8b\u5b50",id:"examples",children:[{value:"\u57fa\u672c\u7528\u6cd5",id:"example-basic",children:[]}]}],p={toc:s};function d(e){var n=e.components,c=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,c,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"examples"},"\u4f8b\u5b50"),(0,a.kt)("h3",{id:"example-basic"},"\u57fa\u672c\u7528\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"export function App() {\n    const [valueA, setValueA] = useState(false);\n    const [valueB, setValueB] = useState(false);\n\n    const onCheck: IRadioBoxComponentProps['onCheck'] = (sender) => {\n        const option = sender.GetText();\n        console.log(`${option} onCheck`);\n\n        if (option === 'Option A' && !valueA) {\n            setValueA(!valueA);\n            setValueB(false);\n        } else if (option === 'Option B' && !valueB) {\n            setValueB(!valueB);\n            setValueA(false);\n        }\n    };\n\n    return (\n        <Window>\n            <DemoLayout>\n                <RadioBox\n                    text=\"Option A\"\n                    onCheck={onCheck}\n                    value={valueA}\n                ></RadioBox>\n                <RadioBox\n                    text=\"Option B\"\n                    onCheck={onCheck}\n                    value={valueB}\n                ></RadioBox>\n            </DemoLayout>\n        </Window>\n    );\n}\n\ninterface IDemoLayoutProps {\n    children?: any[] | any;\n    width?: string;\n    height?: string;\n}\n\nfunction DemoLayout(props: IDemoLayoutProps) {\n    const width = props?.width ?? '120dpx';\n    const height = props?.height ?? '32dpx';\n\n    const demoLayout = {\n        columns: `1 ${width} ${width} 1`,\n        rows: `1 ${height} 1`,\n        areas: {\n            left: { row: 1, column: 1 },\n            right: { row: 1, column: 2 },\n        },\n    };\n    const [left, right] = props.children;\n    return (\n        <Grid style={{ layout: demoLayout }}>\n            <Grid style={{ area: demoLayout.areas.left }}>{left}</Grid>\n            <Grid style={{ area: demoLayout.areas.right }}>{right}</Grid>\n        </Grid>\n    );\n}\n")),(0,a.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u6f14\u793a\u4e86\u5355\u9009\u6846\u7684\u57fa\u672c\u7528\u6cd5\uff1a\u5728\u591a\u4e2a\u5907\u9009\u9879\u4e2d\u9009\u62e9\u4e00\u4e2a\u9009\u9879\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"radio-box basic",src:t(149).Z})),(0,a.kt)("p",null,"\u540c\u65f6\uff0c\u63a7\u5236\u53f0\u8fd8\u6709\u4ee5\u4e0b\u8f93\u51fa\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Option A onCheck\nOption B onCheck\nOption A onCheck\n")),(0,a.kt)("h4",{id:"api-basic"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IRadioBoxComponentProps extends IComponentProps {\n    text: string;\n    value?: boolean;\n    onCheck?: Parameters<IRadioBox['OnCheck']>[0];\n}\n")))}d.isMDXComponent=!0},149:function(e,n,t){"use strict";n.Z=t.p+"assets/images/radio-box-basic-23d26eb39e3dc740543a23d869fd62bd.gif"}}]);