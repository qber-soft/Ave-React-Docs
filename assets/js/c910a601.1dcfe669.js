(self.webpackChunkave_react_docs=self.webpackChunkave_react_docs||[]).push([[590],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||c;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},828:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(2122),o=n(9756),c=(n(7294),n(3905)),a=["components"],i={id:"tree",title:"Tree"},l=void 0,s={unversionedId:"tree",id:"tree",isDocsHomePage:!1,title:"Tree",description:"Examples",source:"@site/docs/tree.md",sourceDirName:".",slug:"/tree",permalink:"/Ave-React-Docs/tree",version:"current",frontMatter:{id:"tree",title:"Tree"},sidebar:"components",previous:{title:"TrackBar",permalink:"/Ave-React-Docs/track-bar"},next:{title:"Image",permalink:"/Ave-React-Docs/image"}},p=[{value:"Examples",id:"examples",children:[{value:"Basic",id:"example-basic",children:[]}]}],u={toc:p};function d(e){var t=e.components,i=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"examples"},"Examples"),(0,c.kt)("h3",{id:"example-basic"},"Basic"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},"export function App() {\n    const nodes: ITreeComponentProps['nodes'] = [\n        {\n            text: 'A',\n            children: [\n                { text: 'C', children: [{ text: 'D', children: [] }] },\n                { text: 'B', children: [] },\n            ],\n        },\n    ];\n    return (\n        <Window>\n            <DemoLayout width=\"500dpx\" height=\"300dpx\">\n                <Tree\n                    nodes={nodes}\n                    onSelect={(sender, selected) => {\n                        console.log(`select ${selected.text}`);\n                    }}\n                ></Tree>\n            </DemoLayout>\n        </Window>\n    );\n}\n")),(0,c.kt)("p",null,"Usage:"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"tree basic",src:n(3682).Z})),(0,c.kt)("p",null,"In console:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"select A\nselect C\nselect D\nselect B\n")),(0,c.kt)("h4",{id:"api-basic"},"API"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ITreeComponentProps extends IComponentProps {\n    nodes: ITreeNode[];\n    onSelect?: (sender: NativeTree, selected: ITreeNode) => void;\n}\n\nexport interface ITreeNode {\n    text: string;\n    children: ITreeNode[];\n}\n")))}d.isMDXComponent=!0},3682:function(e,t,n){"use strict";t.Z=n.p+"assets/images/tree-basic-e89f618d4e381804c3de8cb64cd69195.gif"}}]);