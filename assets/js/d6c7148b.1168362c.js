(self.webpackChunkave_react_docs=self.webpackChunkave_react_docs||[]).push([[430],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(t),f=o,y=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return t?r.createElement(y,i(i({ref:n},s),{},{components:t})):r.createElement(y,i({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1990:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i=["components"],c={id:"hyperlink",title:"Hyperlink"},l=void 0,p={unversionedId:"hyperlink",id:"hyperlink",isDocsHomePage:!1,title:"Hyperlink",description:"Examples",source:"@site/docs/hyperlink.md",sourceDirName:".",slug:"/hyperlink",permalink:"/Ave-React-Docs/hyperlink",version:"current",frontMatter:{id:"hyperlink",title:"Hyperlink"},sidebar:"components",previous:{title:"ScrollBar",permalink:"/Ave-React-Docs/scroll-bar"},next:{title:"Image",permalink:"/Ave-React-Docs/image"}},s=[{value:"Examples",id:"examples",children:[{value:"Basic",id:"example-basic",children:[]}]}],u={toc:s};function m(e){var n=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,c,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"example-basic"},"Basic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"export function App() {\n    return (\n        <Window>\n            <DemoLayout>\n                <Hyperlink\n                    text=\"<https://github.com/>\"\n                    onClick={() => {\n                        console.log('hyperlink clicked');\n                    }}\n                />\n            </DemoLayout>\n        </Window>\n    );\n}\n")),(0,a.kt)("p",null,"Usage:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"hyperlink basic",src:t(7687).Z})),(0,a.kt)("p",null,"In console:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"hyperlink clicked\n")),(0,a.kt)("h4",{id:"api-basic"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IHyperlinkComponentProps extends IComponentProps {\n    // the format of text: it should be wrapped in \"<>\", eg. <https://github.com/>\n    text: string;\n    onClick?: Parameters<IHyperlink['OnClick']>[0];\n}\n")))}m.isMDXComponent=!0},7687:function(e,n,t){"use strict";n.Z=t.p+"assets/images/hyperlink-basic-0588f8b45246c0de0d90f82ca3a54a64.gif"}}]);