(self.webpackChunkave_react_docs=self.webpackChunkave_react_docs||[]).push([[32],{3905:function(A,I,C){"use strict";C.d(I,{Zo:function(){return r},kt:function(){return j}});var g=C(7294);function E(A,I,C){return I in A?Object.defineProperty(A,I,{value:C,enumerable:!0,configurable:!0,writable:!0}):A[I]=C,A}function e(A,I){var C=Object.keys(A);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(A);I&&(g=g.filter((function(I){return Object.getOwnPropertyDescriptor(A,I).enumerable}))),C.push.apply(C,g)}return C}function n(A){for(var I=1;I<arguments.length;I++){var C=null!=arguments[I]?arguments[I]:{};I%2?e(Object(C),!0).forEach((function(I){E(A,I,C[I])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(C)):e(Object(C)).forEach((function(I){Object.defineProperty(A,I,Object.getOwnPropertyDescriptor(C,I))}))}return A}function z(A,I){if(null==A)return{};var C,g,E=function(A,I){if(null==A)return{};var C,g,E={},e=Object.keys(A);for(g=0;g<e.length;g++)C=e[g],I.indexOf(C)>=0||(E[C]=A[C]);return E}(A,I);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(A);for(g=0;g<e.length;g++)C=e[g],I.indexOf(C)>=0||Object.prototype.propertyIsEnumerable.call(A,C)&&(E[C]=A[C])}return E}var t=g.createContext({}),D=function(A){var I=g.useContext(t),C=I;return A&&(C="function"==typeof A?A(I):n(n({},I),A)),C},r=function(A){var I=D(A.components);return g.createElement(t.Provider,{value:I},A.children)},Q={inlineCode:"code",wrapper:function(A){var I=A.children;return g.createElement(g.Fragment,{},I)}},c=g.forwardRef((function(A,I){var C=A.components,E=A.mdxType,e=A.originalType,t=A.parentName,r=z(A,["components","mdxType","originalType","parentName"]),c=D(C),j=E,a=c["".concat(t,".").concat(j)]||c[j]||Q[j]||e;return C?g.createElement(a,n(n({ref:I},r),{},{components:C})):g.createElement(a,n({ref:I},r))}));function j(A,I){var C=arguments,E=I&&I.mdxType;if("string"==typeof A||E){var e=C.length,n=new Array(e);n[0]=c;var z={};for(var t in I)hasOwnProperty.call(I,t)&&(z[t]=I[t]);z.originalType=A,z.mdxType="string"==typeof A?A:E,n[1]=z;for(var D=2;D<e;D++)n[D]=C[D];return g.createElement.apply(null,n)}return g.createElement.apply(null,C)}c.displayName="MDXCreateElement"},8704:function(A,I,C){"use strict";C.r(I),C.d(I,{frontMatter:function(){return z},contentTitle:function(){return t},metadata:function(){return D},toc:function(){return r},default:function(){return c}});var g=C(2122),E=C(9756),e=(C(7294),C(3905)),n=["components"],z={id:"window",title:"\u7a97\u53e3"},t=void 0,D={unversionedId:"window",id:"window",isDocsHomePage:!1,title:"\u7a97\u53e3",description:"\x3c!-- ## \u7b80\u4ecb",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/window.md",sourceDirName:".",slug:"/window",permalink:"/Ave-React-Docs/zh-cn/window",version:"current",frontMatter:{id:"window",title:"\u7a97\u53e3"},sidebar:"components",previous:{title:"\u7ec4\u4ef6\u603b\u89c8",permalink:"/Ave-React-Docs/zh-cn/components"},next:{title:"\u5e03\u5c40",permalink:"/Ave-React-Docs/zh-cn/layout"}},r=[{value:"\u4f8b\u5b50",id:"examples",children:[{value:"\u57fa\u672c\u7a97\u53e3",id:"example-window-basic",children:[]},{value:"\u534a\u900f\u660e\u7a97\u53e3",id:"example-window-opacity",children:[]}]}],Q={toc:r};function c(A){var I=A.components,z=(0,E.Z)(A,n);return(0,e.kt)("wrapper",(0,g.Z)({},Q,z,{components:I,mdxType:"MDXLayout"}),(0,e.kt)("h2",{id:"examples"},"\u4f8b\u5b50"),(0,e.kt)("h3",{id:"example-window-basic"},"\u57fa\u672c\u7a97\u53e3"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { AveRenderer, Window } from 'ave-react';\n\nexport function App() {\n    return <Window></Window>;\n}\n\nAveRenderer.render(<App />);\n")),(0,e.kt)("p",null,"\u8fd0\u884c\u4e4b\u540e\u4f1a\u5f39\u51fa\u8fd9\u6837\u7684\u7a97\u53e3\uff1a"),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"window basic",src:C(8768).Z})),(0,e.kt)("h4",{id:"api-window-basic"},"API"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IWindowComponentProps extends IComponentProps {\n    title?: string;\n    withBackground?: boolean;\n    withCaption?: boolean;\n    onInit?: (app: App) => void;\n    onLanguageChange?: (app: App) => void;\n}\n")),(0,e.kt)("h3",{id:"example-window-opacity"},"\u534a\u900f\u660e\u7a97\u53e3"),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"window opacity",src:C(4729).Z})),(0,e.kt)("p",null,"\u4ee3\u7801\u4e2d\u53ef\u4ee5\u8fd9\u6837\u5b9e\u73b0\uff1a"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{24,33}","{24,33}":!0},"export function App() {\n    return (\n        <Window withBackground={false}>\n            <Grid>\n                <Grid\n                    dockMode={DockMode.Fill}\n                    style={{\n                        opacity: 0.3,\n                        backgroundColor: new Vec4(100, 149, 237, 255),\n                    }}\n                ></Grid>\n            </Grid>\n        </Window>\n    );\n}\n")),(0,e.kt)("p",null,"\u5173\u4e8e grid \u900f\u660e\u5ea6\uff0c\u89c1\uff1a",(0,e.kt)("a",{parentName:"p",href:"layout#example-grid-opacity"},"\u534a\u900f\u660e Grid"),"\u3002"))}c.isMDXComponent=!0},8768:function(A,I){"use strict";I.Z="data:image/png;base64,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AAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAQIzgCAAAAADECI4AAAAAwMsw7bczu4LjzicBAAAAAK6EOxwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAACIERwBAAAAgBjBEQAAAAB4SUajUb+3bU9w3O8kAAAAAICDcIcjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAABAjOAIAAAAAMYIjAAAAAPCSjUajfm9mR3Dc/SQAAAAAwJVwhyMAAAAAECM4AgAAAAAxgiMAAAAAECM4AgAAAAAxgiMAAAAAECM4AgAAAAAxgiMAAAAAECM4AgAAAAAxgiMAAAAAECM4AgAAAAAxgiMAAAAAECM4AgAAAAAxgiMAAAAAECM4AgAAAAAxgiMAAAAAECM4AgAAAAAxgiMAAAAAECM4AgAAAAAxgiMAAAAAECM4AgAAAAAxgiMAAAAAECM4AgAAAAAxgiMAAAAAECM4AgAAAAAxgiMAAAAAECM4AgAAAAAvy2g06vfmguP8JAAAAADAS+EORwAAAAAgRnAEAAAAAGIERwAAAAAgRnAEAAAAAGIERwAAAAAgRnAEAAAAAGIERwAAAAAgRnAEAAAAAGIERwAAAAAgRnAEAAAAAGIERwAAAAAgRnAEAAAAAGIERwAAAAAgRnAEAAAAAGIERwAAAAAgRnAEAAAAAGIERwAAAAAgRnAEAAAAAGIERwAAAAAgRnAEAAAAAGIERwAAAAAgRnAEAAAAAGIERwAAAAAgRnAEAAAAAGIERwAAAAAgRnAEAAAAAGIERwAAAAAgRnAEAAAAAGIERwAAAAAgRnAEAAAAAGIERwAAAAAgRnAEAAAAAF6mab/dERy3JwEAAAAAXgp3OAIAAAAAMYIjAAAAABAjOAIAAAAAMXuD49R3OQIAAAAAB7BPS+yD4+yJ8agb9QEAAAAA4DJqS9zOiX1jrA+j0eyJcRmVI4IjAAAAAHAAtSXWpliTYm2M1bgPj+2JhXEpi4IjAAAAAHAAtSXWpljbYjMd7nCsFbLGxoVRObKw93PXAAAAAAC71ZZYm2Jti7UxVn1wnJZuvhzpjq5fbFMAAAAAAC+qtsTaFGtbrI2x6g6nZTyqtz6OytHu2evrGQAAAAAAl1FbYm2KtS3Wxlhb42jaWd+clLXNUlYuTspz3fj82Y3yubPdBAAAAADAPt55aqG849SRcsPRcTnejaWF+pWN41lw3JxOy/rmtFxcn5bV9UlZXZuWZy5Mync2utEdb2yOyvpkWja6MemGb3kEAACAV6/hl2QBLms6LePxqP0adf2BmPqdjfVj1PXOxhPXjcvy0qgsd8dHF7vnF0Zlofv/lxYcJ92Fm5NpWZ+Usr4xLRe68UI3Lm5MSvdPi5Gb3XZSpqU7ra4DAAAA1zj/8QuHQfB+9Rl3/5PVX6Guv0bdfnS629aPUR87MirXdWOxjvo9jv3Hqltw7LSQ2MJjt61xca1FxtnxZC42VoIjAAAAAK8V13YkPVjoG6Jj/TXq+gMxNS4u1Tsa++MaGus59d9VC471orqpO3W0j01PRy1ATtvvy8wWnp16Lf8LBgAAAAB2mm5F11H7M/sR6tFo9nHr+kwbwzlDcNxtT1yc2wUAAAAAXmN2VMTtCLlTKf8PODtsbP9Rm1AAAAAASUVORK5CYII="},4729:function(A,I,C){"use strict";I.Z=C.p+"assets/images/window-opacity-d765b7e4ec30d9cf550d9682c974102a.png"}}]);