(self.webpackChunkave_react_docs=self.webpackChunkave_react_docs||[]).push([[586],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),i=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=i(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=i(t),f=a,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return t?n.createElement(d,c(c({ref:r},s),{},{components:t})):n.createElement(d,c({ref:r},s))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,c[1]=u;for(var i=2;i<o;i++)c[i]=t[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7082:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return m}});var n=t(2122),a=t(9756),o=(t(7294),t(3905)),c=["components"],u={id:"track-bar",title:"TrackBar"},l=void 0,i={unversionedId:"track-bar",id:"track-bar",isDocsHomePage:!1,title:"TrackBar",description:"Examples",source:"@site/docs/track-bar.md",sourceDirName:".",slug:"/track-bar",permalink:"/Ave-React-Docs/track-bar",version:"current",frontMatter:{id:"track-bar",title:"TrackBar"},sidebar:"components",previous:{title:"RadioBox",permalink:"/Ave-React-Docs/radio-box"},next:{title:"Tree",permalink:"/Ave-React-Docs/tree"}},s=[{value:"Examples",id:"examples",children:[{value:"Basic",id:"example-basic",children:[]}]}],p={toc:s};function m(e){var r=e.components,u=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,u,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"example-basic"},"Basic"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'export function App() {\n    return (\n        <Window>\n            <DemoLayout width="500dpx" height="25dpx">\n                <TrackBar\n                    onThumbRelease={(sender) => {\n                        console.log(\n                            `on thumb release, current value: ${sender.GetValue()}`,\n                        );\n                    }}\n                ></TrackBar>\n            </DemoLayout>\n        </Window>\n    );\n}\n')),(0,o.kt)("p",null,"Drag it and get value:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"track bar basic",src:t(6356).Z})),(0,o.kt)("p",null,"In console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"on thumb release, current value: 0\non thumb release, current value: 22\non thumb release, current value: 46\non thumb release, current value: 69\non thumb release, current value: 75\non thumb release, current value: 85\non thumb release, current value: 100\n...\n")),(0,o.kt)("h4",{id:"api-basic"},"API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ITrackBarComponentProps extends IComponentProps {\n    onThumbRelease?: Parameters<ITrackBar['OnThumbRelease']>[0];\n}\n")))}m.isMDXComponent=!0},6356:function(e,r,t){"use strict";r.Z=t.p+"assets/images/track-bar-basic-dda240f6befe490c75d535c2b08d16a4.gif"}}]);