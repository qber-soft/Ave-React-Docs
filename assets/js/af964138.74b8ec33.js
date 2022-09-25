(self.webpackChunkave_react_docs=self.webpackChunkave_react_docs||[]).push([[502],{3905:function(n,e,t){"use strict";t.d(e,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var u=r.createContext({}),l=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},p=function(n){var e=l(n.components);return r.createElement(u.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,u=n.parentName,p=c(n,["components","mdxType","originalType","parentName"]),g=l(t),d=a,f=g["".concat(u,".").concat(d)]||g[d]||s[d]||i;return t?r.createElement(f,o(o({ref:e},p),{},{components:t})):r.createElement(f,o({ref:e},p))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,o=new Array(i);o[0]=g;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=n,c.mdxType="string"==typeof n?n:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6597:function(n,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return g}});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),o=["components"],c={id:"i18n",title:"i18n"},u=void 0,l={unversionedId:"i18n",id:"i18n",isDocsHomePage:!1,title:"i18n",description:"Examples",source:"@site/docs/i18n.md",sourceDirName:".",slug:"/i18n",permalink:"/Ave-React-Docs/i18n",version:"current",frontMatter:{id:"i18n",title:"i18n"},sidebar:"components",previous:{title:"Clipboard",permalink:"/Ave-React-Docs/clipboard"}},p=[{value:"Examples",id:"examples",children:[{value:"Basic",id:"example-basic",children:[]}]}],s={toc:p};function g(n){var e=n.components,c=(0,a.Z)(n,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,c,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"example-basic"},"Basic"),(0,i.kt)("p",null,"This is the basic example for i18n:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"i18n basic",src:t(6148).Z})),(0,i.kt)("p",null,"Basically, we use ",(0,i.kt)("inlineCode",{parentName:"p"},"LangSetDefaultString")," to set language assets(your translations), and then use ",(0,i.kt)("inlineCode",{parentName:"p"},"LangSetCurrent")," to set current language."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{19-20} title="i18n-switch"',"{19-20}":!0,title:'"i18n-switch"'},"export interface ILang extends ILangBase {\n    // ave built-in language key\n    AppTitle: string;\n\n    // user defined key\n    SwitchLang: string;\n}\n\nexport function onInitI18n(app: App) {\n    const i18n: Ii18n<ILang> = {\n        t(key, toReplace: object = {}) {\n            let result = app.LangGetString(key);\n            Object.keys(toReplace).forEach((each) => {\n                result = result.replace(`{{${each}}}`, toReplace[each]);\n            });\n            return result;\n        },\n        switch(this: Ii18n, id) {\n            app.LangSetDefaultString(id, this.lang[id]);\n            app.LangSetCurrent(id);\n        },\n        lang: {\n            [CultureId.en_us]: {\n                // ave built-in language key\n                __FontStd: \"Segoe UI\",\n                AppTitle: 'My App',\n\n                // user defined key\n                SwitchLang: 'Switch Lang',\n            },\n            [CultureId.zh_cn]: {\n                __FontStd: \"Microsoft YaHei UI\",\n                AppTitle: '\u6211\u7684\u5e94\u7528',\n\n                SwitchLang: '\u5207\u6362\u8bed\u8a00'\n            },\n        },\n    };\n\n    const context = getAppContext();\n    context.setI18n(i18n);\n}\n\n")),(0,i.kt)("p",null,"We have built-in support for i18n, as long as you create UI component with language key, language change happens automatically."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { onInitI18n } from "./i18n-switch";\n\nfunction onInit(app: App) {\n    onInitI18n(app);\n    const context = getAppContext();\n    const i18n = context.getI18n();\n    i18n.switch(CultureId.en_us);\n}\n\nexport function TestI18nButtonSwitch() {\n    const [currentLang, setCurrentLang] = useState<CultureId>(CultureId.en_us);\n\n    const onSwitchLang: IButtonComponentProps["onClick"] = () => {\n        const context = getAppContext();\n        const i18n = context.getI18n();\n        if (currentLang === CultureId.en_us) {\n            setCurrentLang(CultureId.zh_cn);\n            i18n.switch(CultureId.zh_cn);\n        } else if (currentLang === CultureId.zh_cn) {\n            setCurrentLang(CultureId.en_us);\n            i18n.switch(CultureId.en_us);\n        }\n    };\n\n    return (\n        <Window onInit={onInit}>\n            <DemoLayout>\n                <Button langKey="SwitchLang" onClick={onSwitchLang}></Button>\n            </DemoLayout>\n        </Window>\n    );\n}\n')),(0,i.kt)("h4",{id:"api-basic"},"API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IApp {\n    LangSetDefaultString(cid: CultureId, v: any): App;\n    LangSetCurrent(n: CultureId): App;\n}\n\nexport enum CultureId {\n    Default /**/ = -1,\n    en_us /**/ = 0,\n    ...\n    zh_cn /**/ = 562,\n    ...\n}\n")))}g.isMDXComponent=!0},6148:function(n,e,t){"use strict";e.Z=t.p+"assets/images/i18n-basic-22afa80aed715efc83608babb3abcea7.gif"}}]);