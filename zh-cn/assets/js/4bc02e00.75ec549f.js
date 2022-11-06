(self.webpackChunkave_react_docs=self.webpackChunkave_react_docs||[]).push([[987],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||c;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6377:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(2122),o=n(9756),c=(n(7294),n(3905)),a=["components"],i={id:"tree",title:"Tree \u6811\u5f62\u63a7\u4ef6"},l=void 0,s={unversionedId:"tree",id:"tree",isDocsHomePage:!1,title:"Tree \u6811\u5f62\u63a7\u4ef6",description:"\x3c!-- ## \u7b80\u4ecb",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/tree.md",sourceDirName:".",slug:"/tree",permalink:"/Ave-React-Docs/zh-cn/tree",version:"current",frontMatter:{id:"tree",title:"Tree \u6811\u5f62\u63a7\u4ef6"},sidebar:"components",previous:{title:"TrackBar \u8f68\u9053\u6761",permalink:"/Ave-React-Docs/zh-cn/track-bar"},next:{title:"Image \u56fe\u7247",permalink:"/Ave-React-Docs/zh-cn/image"}},p=[{value:"\u4f8b\u5b50",id:"examples",children:[{value:"\u57fa\u672c\u7528\u6cd5",id:"example-basic",children:[]}]}],u={toc:p};function d(e){var t=e.components,i=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"examples"},"\u4f8b\u5b50"),(0,c.kt)("h3",{id:"example-basic"},"\u57fa\u672c\u7528\u6cd5"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},"export function App() {\n    const nodes: ITreeComponentProps['nodes'] = [\n        {\n            text: 'A',\n            children: [\n                { text: 'C', children: [{ text: 'D', children: [] }] },\n                { text: 'B', children: [] },\n            ],\n        },\n    ];\n    return (\n        <Window>\n            <DemoLayout width=\"500dpx\" height=\"300dpx\">\n                <Tree\n                    nodes={nodes}\n                    onSelect={(sender, selected) => {\n                        console.log(`select ${selected.text}`);\n                    }}\n                ></Tree>\n            </DemoLayout>\n        </Window>\n    );\n}\n")),(0,c.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u6f14\u793a\u4e86\u6811\u5f62\u63a7\u4ef6\u7684\u57fa\u672c\u7528\u6cd5\uff1a\u663e\u793a\u4e00\u7cfb\u5217\u8282\u70b9\u5e76\u54cd\u5e94\u70b9\u51fb\u4e8b\u4ef6:"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"tree basic",src:n(7477).Z})),(0,c.kt)("p",null,"\u540c\u65f6\u63a7\u5236\u53f0\u8fd8\u6709\u4ee5\u4e0b\u8f93\u51fa\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"select A\nselect C\nselect D\nselect B\n")),(0,c.kt)("h4",{id:"api-basic"},"API"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ITreeComponentProps extends IComponentProps {\n    nodes: ITreeNode[];\n    onSelect?: (sender: NativeTree, selected: ITreeNode) => void;\n}\n\nexport interface ITreeNode {\n    text: string;\n    children: ITreeNode[];\n}\n")))}d.isMDXComponent=!0},7477:function(e,t,n){"use strict";t.Z=n.p+"assets/images/tree-basic-e89f618d4e381804c3de8cb64cd69195.gif"}}]);