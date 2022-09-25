(self.webpackChunkave_react_docs=self.webpackChunkave_react_docs||[]).push([[546],{3905:function(t,n,e){"use strict";e.d(n,{Zo:function(){return l},kt:function(){return d}});var o=e(7294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function u(t,n){if(null==t)return{};var e,o,r=function(t,n){if(null==t)return{};var e,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)e=a[o],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)e=a[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var i=o.createContext({}),s=function(t){var n=o.useContext(i),e=n;return t&&(e="function"==typeof t?t(n):c(c({},n),t)),e},l=function(t){var n=s(t.components);return o.createElement(i.Provider,{value:n},t.children)},p={inlineCode:"code",wrapper:function(t){var n=t.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(t,n){var e=t.components,r=t.mdxType,a=t.originalType,i=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),m=s(e),d=r,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return e?o.createElement(f,c(c({ref:n},l),{},{components:e})):o.createElement(f,c({ref:n},l))}));function d(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var a=e.length,c=new Array(a);c[0]=m;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=t,u.mdxType="string"==typeof t?t:r,c[1]=u;for(var s=2;s<a;s++)c[s]=e[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,e)}m.displayName="MDXCreateElement"},5255:function(t,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var o=e(2122),r=e(9756),a=(e(7294),e(3905)),c=["components"],u={id:"button",title:"Button \u6309\u94ae"},i=void 0,s={unversionedId:"button",id:"button",isDocsHomePage:!1,title:"Button \u6309\u94ae",description:"\x3c!-- ## \u7b80\u4ecb",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/button.md",sourceDirName:".",slug:"/button",permalink:"/Ave-React-Docs/zh-cn/button",version:"current",frontMatter:{id:"button",title:"Button \u6309\u94ae"},sidebar:"components",previous:{title:"\u5e03\u5c40",permalink:"/Ave-React-Docs/zh-cn/layout"},next:{title:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6",permalink:"/Ave-React-Docs/zh-cn/custom-component"}},l=[{value:"\u4f8b\u5b50",id:"examples",children:[{value:"\u8bbe\u7f6e\u6587\u6848",id:"example-set-text",children:[]},{value:"\u8bbe\u7f6e\u6587\u5b57\u989c\u8272",id:"example-set-text-color",children:[]},{value:"\u5916\u89c2\u6837\u5f0f",id:"example-button-visual-style",children:[]},{value:"\u70b9\u51fb\u4e8b\u4ef6",id:"example-button-event-click",children:[]},{value:"\u8bbe\u7f6e\u56fe\u6807",id:"example-set-icon",children:[]}]}],p={toc:l};function m(t){var n=t.components,u=(0,r.Z)(t,c);return(0,a.kt)("wrapper",(0,o.Z)({},p,u,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"examples"},"\u4f8b\u5b50"),(0,a.kt)("h3",{id:"example-set-text"},"\u8bbe\u7f6e\u6587\u6848"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{5}","{5}":!0},"export function App() {\n    return (\n        <Window>\n            <DemoLayout>\n                <Button text=\"Button\"></Button>\n            </DemoLayout>\n        </Window>\n    );\n}\n\n// boilerplate code: place control at the center of window\ninterface IDemoLayoutProps {\n    children?: any[] | any;\n    width?: string;\n    height?: string;\n}\n\nfunction DemoLayout(props: IDemoLayoutProps) {\n    const width = props?.width ?? '120dpx';\n    const height = props?.height ?? '32dpx';\n\n    const demoLayout = {\n        columns: `1 ${width} 1`,\n        rows: `1 ${height} 1`,\n        areas: {\n            center: { row: 1, column: 1 },\n        },\n    };\n    return (\n        <Grid style={{ layout: demoLayout }}>\n            <Grid style={{ area: demoLayout.areas.center }}>\n                {props.children}\n            </Grid>\n        </Grid>\n    );\n}\n")),(0,a.kt)("p",null,"\u6211\u4eec\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"text"),"\u6765\u8bbe\u7f6e\u6309\u94ae\u4e0a\u7684\u6587\u6848\uff0c\u8fd0\u884c\u4e4b\u540e\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"button set text",src:e(6738).Z})),(0,a.kt)("h4",{id:"api-button-set-text"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IButtonComponentProps extends IComponentProps {\n    text?: string;\n    ...\n}\n")),(0,a.kt)("h3",{id:"example-set-text-color"},"\u8bbe\u7f6e\u6587\u5b57\u989c\u8272"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{7}","{7}":!0},'export function App() {\n    return (\n        <Window>\n            <DemoLayout>\n                <Button\n                    text="Button"\n                    style={{ color: new Vec4(0, 146, 255, 255 * 0.75) }}\n                ></Button>\n            </DemoLayout>\n        </Window>\n    );\n}\n')),(0,a.kt)("p",null,"\u8fd0\u884c\u4e4b\u540e\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"button text color",src:e(5008).Z})),(0,a.kt)("h4",{id:"api-button-text-color"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IButtonComponentProps extends IComponentProps {\n  style?: IButtonStyle;\n  ...\n}\n\nexport interface IButtonStyle extends IComponentStyle {\n  color?: Vec4;\n  ...\n}\n")),(0,a.kt)("h3",{id:"example-button-visual-style"},"\u5916\u89c2\u6837\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{7,11}","{7,11}":!0},'export function App() {\n    return (\n        <Window>\n            <DemoLayout>\n                <Button\n                    text="Button"\n                    style={{ visualStyle: ButtonStyle.Command }}\n                ></Button>\n                <Button\n                    text="Button"\n                    style={{ visualStyle: ButtonStyle.Push }}\n                ></Button>\n            </DemoLayout>\n        </Window>\n    );\n}\n')),(0,a.kt)("p",null,"\u8fd9\u4e24\u79cd\u6837\u5f0f\u5728\u529f\u80fd\u4e0a\u6ca1\u6709\u4efb\u4f55\u533a\u522b\uff0c\u53ea\u662f\u5916\u89c2\u4e0a\u770b\u8d77\u6765\u4e0d\u540c\u3002push \u7684\u610f\u601d\u662f\u8bf4\u8fd9\u4e2a\u6309\u94ae\u662f\u6709\u6309\u4e0b\u5f39\u8d77\u7684\u6837\u5f0f\uff08\u6bd4\u8f83\u6709\u5c42\u6b21\u611f\u90a3\u79cd\uff09\uff0ccommand \u5c31\u662f\u6709\u70b9\u7c7b\u4f3c\u8d85\u94fe\u63a5\u90a3\u79cd\u7684\u6837\u5f0f\u3002\u4ee5\u4e0b\u662f\u70b9\u51fb\u7684\u6548\u679c\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"button style",src:e(975).Z})),(0,a.kt)("h4",{id:"api-button-style"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IButtonStyle extends IComponentStyle {\n  visualStyle?: ButtonStyle;\n  ...\n}\n\nexport enum ButtonStyle {\n    Push,\n    Command,\n}\n")),(0,a.kt)("h3",{id:"example-button-event-click"},"\u70b9\u51fb\u4e8b\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{9}","{9}":!0},"export function App() {\n    const [text, setText] = useState('Button');\n\n    return (\n        <Window>\n            <DemoLayout>\n                <Button\n                    text={text}\n                    onClick={() => setText('Button Clicked')}\n                ></Button>\n            </DemoLayout>\n        </Window>\n    );\n}\n")),(0,a.kt)("p",null,"\u4ee5\u4e0b\u6f14\u793a\u70b9\u51fb\u6309\u94ae\u4e4b\u540e\u4fee\u6539\u6309\u94ae\u4e0a\u7684\u6587\u6848\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"button event click",src:e(4167).Z})),(0,a.kt)("h4",{id:"api-button-event-click"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IButtonComponentProps extends IComponentProps {\n  onClick?: () => void;\n  ...\n}\n")),(0,a.kt)("h3",{id:"example-set-icon"},"\u8bbe\u7f6e\u56fe\u6807"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{14}","{14}":!0},"import { iconResource } from './icon-resource';\n\nfunction onInit(app: App) {\n    const context = getAppContext();\n    context.setIconResource(iconResource as unknown as IIconResource);\n}\n\nexport function App() {\n    return (\n        <Window onInit={onInit}>\n            <DemoLayout>\n                <Button\n                    text=\"Open\"\n                    iconInfo={{ name: 'open-file', size: 16 }}\n                ></Button>\n            </DemoLayout>\n        </Window>\n    );\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="icon-resource.ts"',title:'"icon-resource.ts"'},"const iconResource = {\n    size: [16],\n    path: {\n        'open-file': [assetsPath('open-file#0.png')],\n    },\n} as const;\n\nexport { iconResource };\n\nexport type IconResourceMapType = Record<\n    keyof typeof iconResource.path,\n    number\n>;\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u5728\u6587\u5b57\u65c1\u8fb9\u8bbe\u7f6e\u4e00\u4e2a",(0,a.kt)("a",{parentName:"p",href:"icon#introduction"},"\u56fe\u6807"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"button set icon",src:e(5668).Z})),(0,a.kt)("h4",{id:"api-set-icon"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IButtonComponentProps extends IComponentProps {\n    iconInfo?: {\n        name: string;\n        size?: number;\n    };\n    ...\n}\n")))}m.isMDXComponent=!0},4167:function(t,n,e){"use strict";n.Z=e.p+"assets/images/button-event-click-418d5d9eb2a8ea061b4228248aa46f0c.gif"},5668:function(t,n,e){"use strict";n.Z=e.p+"assets/images/button-set-icon-7df1ffbcf7134ea480b0ad301d31392f.png"},6738:function(t,n,e){"use strict";n.Z=e.p+"assets/images/button-set-text-896efc9135f2d3c726add01f7b95255d.png"},975:function(t,n,e){"use strict";n.Z=e.p+"assets/images/button-style-dec5deee21cfef98dd17656a34a81767.gif"},5008:function(t,n,e){"use strict";n.Z=e.p+"assets/images/button-text-color-e38971a5e4f1c8cf517fccff2695644c.png"}}]);