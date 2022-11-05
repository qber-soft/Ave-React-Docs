(self.webpackChunkave_react_docs=self.webpackChunkave_react_docs||[]).push([[122],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},567:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),a=["components"],c={id:"rich-list-box",title:"RichListBox \u591a\u683c\u5f0f\u5217\u8868\u6846"},s=void 0,l={unversionedId:"rich-list-box",id:"rich-list-box",isDocsHomePage:!1,title:"RichListBox \u591a\u683c\u5f0f\u5217\u8868\u6846",description:"\x3c!-- ## \u7b80\u4ecb",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/rich-list-box.md",sourceDirName:".",slug:"/rich-list-box",permalink:"/Ave-React-Docs/zh-cn/rich-list-box",version:"current",frontMatter:{id:"rich-list-box",title:"RichListBox \u591a\u683c\u5f0f\u5217\u8868\u6846"},sidebar:"components",previous:{title:"ListBox \u5217\u8868\u6846",permalink:"/Ave-React-Docs/zh-cn/list-box"},next:{title:"Progress \u8fdb\u5ea6\u6761",permalink:"/Ave-React-Docs/zh-cn/progress"}},p=[{value:"\u4f8b\u5b50",id:"examples",children:[{value:"\u57fa\u672c\u7528\u6cd5",id:"example-basic",children:[]}]}],u={toc:p};function d(e){var n=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,c,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"examples"},"\u4f8b\u5b50"),(0,i.kt)("h3",{id:"example-basic"},"\u57fa\u672c\u7528\u6cd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"export function App() {\n    const headers: IRichListBoxComponentProps['headers'] = [\n        { name: 'ID', size: '200dpx', dataKey: 'id' },\n        { name: 'Name', size: '200dpx', dataKey: 'name' },\n    ];\n\n    const data: IRichListBoxComponentProps['data'] = [\n        { id: '1', name: 'a' },\n        { id: '2', name: 'b' },\n        { id: '3', name: 'c' },\n        { id: '4', name: 'd' },\n        { id: '5', name: 'e' },\n        { id: '6', name: 'f' },\n    ];\n\n    return (\n        <Window>\n            <DemoLayout width=\"410dpx\" height=\"300dpx\">\n                <RichListBox\n                    headers={headers}\n                    data={data}\n                    onSelectionEnd={(sender) => {\n                        const itemIndex = sender.ItemGetSelection();\n                        console.log(itemIndex);\n                    }}\n                ></RichListBox>\n            </DemoLayout>\n        </Window>\n    );\n}\n")),(0,i.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u6f14\u793a\u4e86\u591a\u683c\u5f0f\u5217\u8868\u6846\u7684\u57fa\u672c\u7528\u6cd5\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"rich list box basic",src:t(6103).Z})),(0,i.kt)("p",null,"\u540c\u65f6\uff0c\u63a7\u5236\u53f0\u6709\u4ee5\u4e0b log \u6253\u5370\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"0\n2\n4\n")),(0,i.kt)("h4",{id:"api-basic"},"API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IRichListBoxComponentProps extends IComponentProps {\n    headers: IRichListBoxHeader[];\n    data?: IRichListBoxData[];\n    onSelectionEnd?: Parameters<IRichListBox['OnSelectionEnd']>[0];\n}\n\nexport interface IRichListBoxHeader {\n    name: string;\n    size: string;\n    dataKey: string;\n    align?: HeaderItemFormat;\n}\n\nexport type IRichListBoxData = Record<string, string>;\n")))}d.isMDXComponent=!0},6103:function(e,n,t){"use strict";n.Z=t.p+"assets/images/rich-list-box-basic-52e973e97ddfb07f93741fa75e072ebe.gif"}}]);