(self.webpackChunkave_react_docs=self.webpackChunkave_react_docs||[]).push([[530],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6267:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),c=["components"],s={id:"status-bar",title:"StatusBar \u72b6\u6001\u680f"},i=void 0,u={unversionedId:"status-bar",id:"status-bar",isDocsHomePage:!1,title:"StatusBar \u72b6\u6001\u680f",description:"\x3c!-- ## \u7b80\u4ecb",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/status-bar.md",sourceDirName:".",slug:"/status-bar",permalink:"/Ave-React-Docs/zh-cn/status-bar",version:"current",frontMatter:{id:"status-bar",title:"StatusBar \u72b6\u6001\u680f"},sidebar:"components",previous:{title:"ScrollBar \u6eda\u52a8\u6761",permalink:"/Ave-React-Docs/zh-cn/scroll-bar"},next:{title:"Calendar \u65e5\u5386",permalink:"/Ave-React-Docs/zh-cn/calendar"}},l=[{value:"\u4f8b\u5b50",id:"examples",children:[{value:"\u57fa\u672c\u7528\u6cd5",id:"example-basic",children:[]}]}],p={toc:l};function d(e){var t=e.components,s=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"examples"},"\u4f8b\u5b50"),(0,o.kt)("h3",{id:"example-basic"},"\u57fa\u672c\u7528\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"export function App() {\n    const parts: IStatusBarComponentProps['parts'] = [\n        { size: '120dpx', text: 'feature/status-bar', clickable: true },\n        { size: '100dpx', text: 'Git Graph', clickable: true },\n        { size: '1' },\n    ];\n\n    return (\n        <Window>\n            <DemoLayout>\n                <StatusBar\n                    parts={parts}\n                    onClick={(sender, index) => {\n                        console.log(`index: ${index}`);\n                    }}\n                ></StatusBar>\n            </DemoLayout>\n        </Window>\n    );\n}\n\ninterface IDemoLayoutProps {\n    children?: any[] | any;\n    width?: string;\n    height?: string;\n}\n\nfunction DemoLayout(props: IDemoLayoutProps) {\n    const height = props?.height ?? '32dpx';\n\n    const demoLayout = {\n        columns: `1`,\n        rows: `1 ${height}`,\n        areas: {\n            control: { row: 1, column: 0 },\n        },\n    };\n    return (\n        <Grid style={{ layout: demoLayout }}>\n            <Grid style={{ area: demoLayout.areas.control }}>\n                {props.children}\n            </Grid>\n        </Grid>\n    );\n}\n")),(0,o.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u6f14\u793a\u4e86\u72b6\u6001\u680f\u7684\u57fa\u672c\u7528\u6cd5\uff1a\u5728\u5e95\u90e8\u653e\u7f6e\u4e00\u4e9b\u53ef\u70b9\u51fb\u7684\u533a\u5757\uff0c\u5e76\u54cd\u5e94\u70b9\u51fb\u4e8b\u4ef6\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"status bar basic",src:n(8458).Z})),(0,o.kt)("p",null,"\u540c\u65f6\uff0c\u63a7\u5236\u53f0\u5c06\u4f1a\u6709\u8fd9\u6837\u7684\u8f93\u51fa\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"index: 1\nindex: 0\n")),(0,o.kt)("h4",{id:"api-basic"},"API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IStatusBarComponentProps extends IComponentProps {\n    parts: IStatusBarPart[];\n    onClick?: Parameters<IStatusBar['OnClick']>[0];\n}\n\nexport interface IStatusBarPart {\n    size: string;\n    text?: string;\n    clickable?: boolean;\n}\n")))}d.isMDXComponent=!0},8458:function(e,t,n){"use strict";t.Z=n.p+"assets/images/status-bar-basic-c41f440be0d07c0e6d261034378b6cb1.gif"}}]);