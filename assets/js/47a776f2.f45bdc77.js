(self.webpackChunkave_react_docs=self.webpackChunkave_react_docs||[]).push([[954],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return h}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=r.createContext({}),l=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(t),h=a,d=p["".concat(m,".").concat(h)]||p[h]||u[h]||o;return t?r.createElement(d,i(i({ref:n},s),{},{components:t})):r.createElement(d,i({ref:n},s))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var m in n)hasOwnProperty.call(n,m)&&(c[m]=n[m]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4108:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return m},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i=["components"],c={id:"theme",title:"Theme"},m=void 0,l={unversionedId:"theme",id:"theme",isDocsHomePage:!1,title:"Theme",description:"Examples",source:"@site/docs/theme.md",sourceDirName:".",slug:"/theme",permalink:"/Ave-React-Docs/theme",version:"current",frontMatter:{id:"theme",title:"Theme"}},s=[{value:"Examples",id:"examples",children:[{value:"Basic",id:"example-basic",children:[]}]}],u={toc:s};function p(e){var n=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,c,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"example-basic"},"Basic"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{15,17}","{15,17}":!0},"import { Window, Button, ThemeImage, ThemePredefined_Dark } from 'ave-ui';\n\nexport interface IThemeManager {\n    theme: ThemeImage;\n    themeDark: ThemePredefined_Dark;\n}\n\nexport function main(window: Window, themeManager: IThemeManager) {\n    const button = new Button(window);\n    button.SetText('Toggling Themes');\n\n    let isDark = false;\n    button.OnClick((sender) => {\n        if (!isDark) {\n            themeManager.themeDark.SetStyle(themeManager.theme, 0); // switch to dark theme\n        } else {\n            themeManager.theme.ResetTheme(); // reset to light theme\n        }\n        isDark = !isDark;\n    });\n\n    const container = getControlDemoContainer(window);\n    container.ControlAdd(button).SetGrid(1, 1);\n    window.SetContent(container);\n}\n")),(0,o.kt)("p",null,"This example shows how to toggle theme:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"toggle theme",src:t(3077).Z})),(0,o.kt)("p",null,"The creation of ",(0,o.kt)("inlineCode",{parentName:"p"},"themeManager"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{3,7,9-10,16}","{3,7,9-10,16}":!0},"export function run(main: Function) {\n    // ...\n    const theme = new ThemeImage();\n    if (!theme) process.exit(-1);\n\n    cpWindow.Theme = theme;\n    globalThis.theme = theme; // avoid GC\n\n    const themeDark = new ThemePredefined_Dark();\n    globalThis.themeDark = themeDark; // avoid GC\n\n    const window = new Window(cpWindow);\n    globalThis.window = window;\n\n    window.OnCreateContent((sender) => {\n        const themeManager = { theme, themeDark };\n        main(window, themeManager);\n        return true;\n    });\n    // ...\n}\n")),(0,o.kt)("h4",{id:"api-basic"},"API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IThemePredefined_Dark {\n    SetStyle(theme: IThemeImage, nStyle: number): void;\n}\n\nexport interface IThemeImage {\n    ResetTheme(): void;\n}\n")))}p.isMDXComponent=!0},3077:function(e,n,t){"use strict";n.Z=t.p+"assets/images/toggle-theme-ceb8a208981ca65f4223ca6aadd4364c.gif"}}]);