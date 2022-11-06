(self.webpackChunkave_react_docs=self.webpackChunkave_react_docs||[]).push([[914],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(t),g=o,f=m["".concat(i,".").concat(g)]||m[g]||p[g]||a;return t?r.createElement(f,s(s({ref:n},u),{},{components:t})):r.createElement(f,s({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9103:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),s=["components"],c={id:"message-box",title:"MessageBox"},i=void 0,l={unversionedId:"message-box",id:"message-box",isDocsHomePage:!1,title:"MessageBox",description:"Examples",source:"@site/docs/message-box.md",sourceDirName:".",slug:"/message-box",permalink:"/Ave-React-Docs/message-box",version:"current",frontMatter:{id:"message-box",title:"MessageBox"},sidebar:"components",previous:{title:"CheckBox",permalink:"/Ave-React-Docs/check-box"},next:{title:"Input",permalink:"/Ave-React-Docs/input"}},u=[{value:"Examples",id:"examples",children:[{value:"Basic",id:"example-basic",children:[]}]}],p={toc:u};function m(e){var n=e.components,c=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,c,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"example-basic"},"Basic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{11-18}","{11-18}":!0},"export function App() {\n    return (\n        <Window>\n            <DemoLayout>\n                <Button\n                    text=\"Button\"\n                    onClick={async () => {\n                        const context = getAppContext();\n                        const window = context.getWindow();\n\n                        const commonUi = window.GetCommonUi();\n                        const result = await commonUi.Message(\n                            'Message',\n                            'This is a message',\n                            MessageIcon.Infomation,\n                            MessageButton.YesNo,\n                            'Title',\n                        );\n                        console.log(\n                            `message result: ${result}(${MessageResult[result]})`,\n                        );\n                    }}\n                ></Button>\n            </DemoLayout>\n        </Window>\n    );\n}\n")),(0,a.kt)("p",null,"Usage:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"message box basic",src:t(151).Z})),(0,a.kt)("p",null,"In console:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"message result: 2(Yes)\nmessage result: 3(No)\nmessage result: 0(Default)\n")),(0,a.kt)("h4",{id:"api-basic"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IWindow extends IControl {\n    GetCommonUi(): ICommonUi;\n}\n\nexport interface ICommonUi {\n    Message(\n        sMain: string,\n        sDetail: string,\n        nIcon: MessageIcon,\n        nButton: MessageButton,\n        sTitle: string,\n    ): Promise<MessageResult>;\n}\n\nexport enum MessageIcon {\n    None,\n    Infomation,\n    Warning,\n    Error,\n}\n\nexport enum MessageButton {\n    Ok = 0x01,\n    Yes = 0x02,\n    No = 0x04,\n    Retry = 0x08,\n    Cancel = 0x10,\n    Close = 0x20,\n    OkCancel = Ok | Cancel,\n    YesNo = Yes | No,\n    YesNoCancel = Yes | No | Cancel,\n    RetryCancel = Retry | Cancel,\n}\n\nexport enum MessageResult {\n    Failed,\n    Ok,\n    Yes,\n    No,\n    Retry,\n    Cancel,\n    Close,\n    Button,\n    Default = Failed,\n}\n")))}m.isMDXComponent=!0},151:function(e,n,t){"use strict";n.Z=t.p+"assets/images/message-box-basic-7e713ad08e169f399c1f9ef12a1ab572.gif"}}]);