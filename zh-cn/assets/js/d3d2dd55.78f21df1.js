(self.webpackChunkave_react_docs=self.webpackChunkave_react_docs||[]).push([[489],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},2240:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return y},default:function(){return P},frontMatter:function(){return b},metadata:function(){return h},toc:function(){return k}});var r=n(2122),a=n(9756),o=n(7294),s=n(3905),i=n(9443);var c=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(6010),l="tabItem_1uMI",p="tabItemActive_2DSg";var m=37,d=39;var f=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,a=e.values,s=e.groupId,i=e.className,f=c(),g=f.tabGroupChoices,v=f.setTabGroupChoices,b=(0,o.useState)(r),y=b[0],h=b[1],k=o.Children.toArray(e.children),x=[];if(null!=s){var P=g[s];null!=P&&P!==y&&a.some((function(e){return e.value===P}))&&h(P)}var w=function(e){var t=e.currentTarget,n=x.indexOf(t),r=a[n].value;h(r),null!=s&&(v(s,r),setTimeout((function(){var e,n,r,a,o,s,i,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,s=window,i=s.innerHeight,c=s.innerWidth,n>=0&&o<=c&&a<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case d:var r=x.indexOf(e.target)+1;n=x[r]||x[0];break;case m:var a=x.indexOf(e.target)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":n},i)},a.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,u.Z)("tabs__item",l,{"tabs__item--active":y===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:O,onFocus:w,onClick:w},n)}))),t?(0,o.cloneElement)(k.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))};var g=function(e){var t=e.children,n=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:r},t)},v=["components"],b={id:"progress",title:"Progress \u8fdb\u5ea6\u6761"},y=void 0,h={unversionedId:"progress",id:"progress",isDocsHomePage:!1,title:"Progress \u8fdb\u5ea6\u6761",description:"\x3c!--",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/progress.mdx",sourceDirName:".",slug:"/progress",permalink:"/Ave-React-Docs/zh-cn/progress",version:"current",frontMatter:{id:"progress",title:"Progress \u8fdb\u5ea6\u6761"},sidebar:"components",previous:{title:"TextBox \u6587\u672c\u6846",permalink:"/Ave-React-Docs/zh-cn/text-box"},next:{title:"CheckBox \u591a\u9009\u6846",permalink:"/Ave-React-Docs/zh-cn/check-box"}},k=[{value:"\u4f8b\u5b50",id:"examples",children:[{value:"\u57fa\u672c\u7528\u6cd5",id:"example-basic",children:[]},{value:"\u72b6\u6001",id:"example-state",children:[]},{value:"\u6b65\u957f\uff08\u6bcf\u6b21\u589e\u52a0\u591a\u5c11\uff09",id:"example-step",children:[]}]}],x={toc:k};function P(e){var t=e.components,o=(0,a.Z)(e,v);return(0,s.kt)("wrapper",(0,r.Z)({},x,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"examples"},"\u4f8b\u5b50"),(0,s.kt)("h3",{id:"example-basic"},"\u57fa\u672c\u7528\u6cd5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"export function App() {\n    return (\n        <Window>\n            <DemoLayout>\n                <Progress value={75} max={100} animation></Progress>\n            </DemoLayout>\n        </Window>\n    );\n}\n\ninterface IDemoLayoutProps {\n    children?: any[] | any;\n    width?: string;\n    height?: string;\n}\n\nfunction DemoLayout(props: IDemoLayoutProps) {\n    const width = props?.width ?? '240dpx';\n    const height = props?.height ?? '32dpx';\n\n    const demoLayout = {\n        columns: `1 ${width} 1`,\n        rows: `1 ${height} 1`,\n        areas: {\n            center: { row: 1, column: 1 },\n        },\n    };\n    return (\n        <Grid style={{ layout: demoLayout }}>\n            <Grid style={{ area: demoLayout.areas.center }}>\n                {props.children}\n            </Grid>\n        </Grid>\n    );\n}\n")),(0,s.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u6f14\u793a\u4e86\u8fdb\u5ea6\u6761\u7684\u57fa\u672c\u7528\u6cd5\uff1a"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"progress basic",src:n(1881).Z})),(0,s.kt)("p",null,"\u5176\u4e2d",(0,s.kt)("inlineCode",{parentName:"p"},"animation"),"\u8bbe\u7f6e\u7684\u52a8\u753b\u662f\u8fdb\u5ea6\u6761\u4e2d\u5149\u5f71\u7684\u6d41\u52a8\u3002"),(0,s.kt)("h4",{id:"api-basic"},"API"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IProgressComponentProps extends IComponentProps {\n    value: number;\n    max?: number;\n    animation?: boolean;\n}\n")),(0,s.kt)("h3",{id:"example-state"},"\u72b6\u6001"),(0,s.kt)("p",null,"\u901a\u8fc7 ",(0,s.kt)("inlineCode",{parentName:"p"},"state")," \u53ef\u4ee5\u8bbe\u7f6e\u8fdb\u5ea6\u6761\u72b6\u6001:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{9}","{9}":!0},"export function App() {\n    return (\n        <Window>\n            <DemoLayout>\n                <Progress\n                    value={75}\n                    max={100}\n                    animation\n                    state={ProgressBarState.Normal}\n                ></Progress>\n            </DemoLayout>\n        </Window>\n    );\n}\n")),(0,s.kt)(f,{defaultValue:"normal",values:[{label:"Normal",value:"normal"},{label:"Paused",value:"paused"},{label:"Error",value:"error"},{label:"Pulse",value:"pulse"}],mdxType:"Tabs"},(0,s.kt)(g,{value:"normal",mdxType:"TabItem"},(0,s.kt)("img",{src:n(8991).Z})),(0,s.kt)(g,{value:"paused",mdxType:"TabItem"},(0,s.kt)("img",{src:n(1868).Z})),(0,s.kt)(g,{value:"error",mdxType:"TabItem"},(0,s.kt)("img",{src:n(5274).Z})),(0,s.kt)(g,{value:"pulse",mdxType:"TabItem"},(0,s.kt)("img",{src:n(3399).Z}))),(0,s.kt)("h4",{id:"api-state"},"API"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IProgressBar extends IControl {\n    SetState(state: ProgressBarState): ProgressBar;\n    GetState(): ProgressBarState;\n}\n\nexport enum ProgressBarState {\n    Normal,\n    Paused,\n    Error,\n    Pulse,\n    None,\n}\n")),(0,s.kt)("h3",{id:"example-step"},"\u6b65\u957f\uff08\u6bcf\u6b21\u589e\u52a0\u591a\u5c11\uff09"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"export function App() {\n    const [value, setValue] = useState(0);\n    useEffect(() => {\n        setInterval(() => {\n            if (value < 100) {\n                setValue((prev) => prev + 1); // step is 1\n            }\n        }, 100);\n    }, []);\n    return (\n        <Window>\n            <DemoLayout>\n                <Progress value={value}></Progress>\n            </DemoLayout>\n        </Window>\n    );\n}\n")),(0,s.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u6f14\u793a\u4e86\u600e\u6837\u5b9e\u73b0\u901a\u5e38\u6211\u4eec\u770b\u5230\u7684\u201c\u8fdb\u5ea6\u6761\u4e0d\u65ad\u589e\u957f\u201d\u7684\u6548\u679c\uff1a"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"progress step",src:n(3478).Z})))}P.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})},8991:function(e,t,n){"use strict";t.Z=n.p+"assets/images/progress-basic-90422138c07738a06478ac8c76b833a8.gif"},5274:function(e,t,n){"use strict";t.Z=n.p+"assets/images/progress-error-969ca51d1b1d99b07553cdc67b358bf7.gif"},1868:function(e,t,n){"use strict";t.Z=n.p+"assets/images/progress-paused-85c2c5391e3882f83584b8bc0405cb83.gif"},3399:function(e,t,n){"use strict";t.Z=n.p+"assets/images/progress-pulse-620f86cb311ca951061e394ecb4f5c6f.gif"},1881:function(e,t,n){"use strict";t.Z=n.p+"assets/images/progress-basic-90422138c07738a06478ac8c76b833a8.gif"},3478:function(e,t,n){"use strict";t.Z=n.p+"assets/images/progress-step-6fd79aa2e3c081bd6beb4b74f290041c.gif"}}]);