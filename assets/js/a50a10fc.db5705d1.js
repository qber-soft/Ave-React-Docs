(self.webpackChunkave_react_docs=self.webpackChunkave_react_docs||[]).push([[448],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(t),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return t?r.createElement(d,i(i({ref:n},s),{},{components:t})):r.createElement(d,i({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8655:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i=["components"],c={id:"input",title:"Input"},l=void 0,u={unversionedId:"input",id:"input",isDocsHomePage:!1,title:"Input",description:"Examples",source:"@site/docs/input.md",sourceDirName:".",slug:"/input",permalink:"/Ave-React-Docs/input",version:"current",frontMatter:{id:"input",title:"Input"},sidebar:"components",previous:{title:"MessageBox",permalink:"/Ave-React-Docs/message-box"},next:{title:"ColorPicker",permalink:"/Ave-React-Docs/color-picker"}},s=[{value:"Examples",id:"examples",children:[{value:"Basic",id:"example-basic",children:[]}]}],p={toc:s};function m(e){var n=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,c,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"example-basic"},"Basic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{11-23}","{11-23}":!0},"export function App() {\n    return (\n        <Window>\n            <DemoLayout>\n                <Button\n                    text=\"Button\"\n                    onClick={async () => {\n                        const context = getAppContext();\n                        const window = context.getWindow();\n\n                        const commonUi = window.GetCommonUi();\n                        const label = 'Please input:';\n                        const placeHolder = 'input here';\n                        const title = 'Title';\n                        const value = 'default input';\n                        const fallback = 'input cancelled';\n                        const result = await commonUi.Input(\n                            fallback,\n                            label,\n                            value,\n                            placeHolder,\n                            title,\n                        );\n                        console.log(`input result: \"${result}\"`);\n                    }}\n                ></Button>\n            </DemoLayout>\n        </Window>\n    );\n}\n")),(0,a.kt)("p",null,"Get user input:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"input basic",src:t(3467).Z})),(0,a.kt)("p",null,'Click "Ok":'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# in console\ninput result: "default"\n')),(0,a.kt)("p",null,'Click "x":'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# in console\ninput result: "input cancelled" # This value is the fallback we set in code.\n')),(0,a.kt)("h4",{id:"api-basic"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ICommonUi {\n    Input(\n        s: string,\n        sMain: string,\n        sDetail: string,\n        sCue: string,\n        sTitle: string,\n    ): Promise<string>;\n}\n")))}m.isMDXComponent=!0},3467:function(e,n,t){"use strict";n.Z=t.p+"assets/images/input-basic-d511ec355993882efaa62d72c0d3743c.gif"}}]);