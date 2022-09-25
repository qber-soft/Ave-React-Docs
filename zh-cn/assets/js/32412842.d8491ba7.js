(self.webpackChunkave_react_docs=self.webpackChunkave_react_docs||[]).push([[535],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(t),f=a,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||o;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},192:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i=["components"],c={id:"clipboard",title:"\u526a\u8d34\u677f"},l=void 0,p={unversionedId:"clipboard",id:"clipboard",isDocsHomePage:!1,title:"\u526a\u8d34\u677f",description:"\u4f8b\u5b50",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/clipboard.md",sourceDirName:".",slug:"/clipboard",permalink:"/Ave-React-Docs/zh-cn/clipboard",version:"current",frontMatter:{id:"clipboard",title:"\u526a\u8d34\u677f"},sidebar:"components",previous:{title:"\u4e3b\u9898",permalink:"/Ave-React-Docs/zh-cn/theme"}},u=[{value:"\u4f8b\u5b50",id:"examples",children:[{value:"\u57fa\u672c\u7528\u6cd5",id:"example-basic",children:[]}]}],s={toc:u};function d(e){var n=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,c,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"examples"},"\u4f8b\u5b50"),(0,o.kt)("h3",{id:"example-basic"},"\u57fa\u672c\u7528\u6cd5"),(0,o.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u6f14\u793a\u4e86\u600e\u6837\u4ece\u526a\u8d34\u677f\u8bfb\u53d6\u5185\u5bb9\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"clipboard basic",src:t(482).Z})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{3}","{3}":!0},'export function App() {\n    const onInspectClipboard: IButtonComponentProps[\'onClick\'] = () => {\n        const clipboard = AveGetClipboard();\n        if (clipboard.HasImage()) {\n            const aveImage = clipboard.GetImage();\n            const imageData = aveImage.GetImage(0, 0, 0);\n            console.log(\n                `image found! width: ${imageData.Width} height: ${imageData.Height}`,\n            );\n        } else if (clipboard.HasFile()) {\n            const [file] = clipboard.GetFile();\n            console.log(`file found! path: ${file}`);\n        } else {\n            console.log(`nothing found in clipboard`);\n        }\n    };\n\n    return (\n        <Window title="Clipboard Basic">\n            <DemoLayout>\n                <Button\n                    text="Inspect Clipboard"\n                    onClick={onInspectClipboard}\n                ></Button>\n            </DemoLayout>\n        </Window>\n    );\n}\n')),(0,o.kt)("p",null,"\u5f53\u526a\u8d34\u677f\u91cc\u9762\u6ca1\u4e1c\u897f\u7684\u65f6\u5019\uff0c\u70b9\u6309\u94ae\uff0c\u63a7\u5236\u53f0\u4f1a\u6709\u5982\u4e0b\u8f93\u51fa\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nothing found in clipboard\n")),(0,o.kt)("p",null,"\u5f53\u590d\u5236\u4e86\u56fe\u7247\u5230\u526a\u8d34\u677f\uff08\u6bd4\u5982\u901a\u8fc7\u6f14\u793a\u4e2d\u622a\u5c4f\u7684\u65b9\u5f0f\uff09\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u7c7b\u4f3c\u8fd9\u6837\u7684log\uff08\u5ffd\u7565\u5177\u4f53\u503c\uff09\uff1a\nimage found! width: 413 height: 169\n")),(0,o.kt)("p",null,"\u5f53\u590d\u5236\u4e86\u6587\u4ef6\u7684\u65f6\u5019\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"file found! path: D:\\GitHub\\docs\\xxx\n")),(0,o.kt)("h4",{id:"api-basic"},"API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// get global clipboard instance\nexport function AveGetClipboard(): IClipboard;\n\nexport interface IClipboard {\n    SetImage(img: AveImage): boolean;\n    GetImage(): AveImage;\n    HasImage(): boolean;\n\n    SetFile(file: string[]): boolean;\n    GetFile(): string[]; // return file paths\n    HasFile(): boolean;\n}\n")))}d.isMDXComponent=!0},482:function(e,n,t){"use strict";n.Z=t.p+"assets/images/clipboard-basic-53e0b435d539036c3457eca0f80b64d9.gif"}}]);