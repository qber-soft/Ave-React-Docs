(self.webpackChunkave_react_docs=self.webpackChunkave_react_docs||[]).push([[617],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6661:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],c={id:"date-picker",title:"DatePicker"},s=void 0,p={unversionedId:"date-picker",id:"date-picker",isDocsHomePage:!1,title:"DatePicker",description:"Examples",source:"@site/docs/date-picker.md",sourceDirName:".",slug:"/date-picker",permalink:"/Ave-React-Docs/date-picker",version:"current",frontMatter:{id:"date-picker",title:"DatePicker"},sidebar:"components",previous:{title:"Calendar",permalink:"/Ave-React-Docs/calendar"},next:{title:"Knob",permalink:"/Ave-React-Docs/knob"}},l=[{value:"Examples",id:"examples",children:[{value:"Basic",id:"example-basic",children:[]},{value:"Set Date",id:"example-set",children:[]}]}],u={toc:l};function d(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"example-basic"},"Basic"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'export function App() {\n    return (\n        <Window>\n            <DemoLayout width="250dpx">\n                <DatePicker\n                    onChange={(sender) => {\n                        const timePoint = sender.GetDate();\n                        console.log(\n                            `Date: ${timePoint.Year}-${timePoint.Month}-${timePoint.Day}`,\n                        );\n                    }}\n                ></DatePicker>\n            </DemoLayout>\n        </Window>\n    );\n}\n')),(0,o.kt)("p",null,"In this example, we demonstrate the basic usage of date picker: pick a date :)"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"date picker basic",src:n(2870).Z})),(0,o.kt)("p",null,"In console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Date: 2022-3-27\nDate: 2022-3-28\n")),(0,o.kt)("h4",{id:"api-basic"},"API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IDatePickerComponentProps extends IComponentProps {\n    onChange?: Parameters<IDatePicker['OnChange']>[0];\n}\n")),(0,o.kt)("h3",{id:"example-set"},"Set Date"),(0,o.kt)("p",null,"Just like that in ",(0,o.kt)("a",{parentName:"p",href:"./calendar#example-set"},"Calendar: Set Date"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'export function App() {\n    const [date, setDate] = useState(Date.now());\n    const [dateMark, setDateMark] = useState(Date.now());\n\n    return (\n        <Window title="DatePicker Set">\n            <DemoLayout width="250dpx">\n                <DatePicker\n                    date={date}\n                    dateMark={dateMark}\n                    onChange={(sender) => {\n                        const timePoint = sender.GetDate();\n                        const timestamp = timePoint.JsDateTime;\n                        setDate(timestamp);\n                        setDateMark(timestamp);\n                    }}\n                ></DatePicker>\n            </DemoLayout>\n        </Window>\n    );\n}\n')),(0,o.kt)("p",null,"Display the last selected date:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"date picker set",src:n(1019).Z})),(0,o.kt)("h4",{id:"api-set"},"API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IDatePickerComponentProps extends IComponentProps {\n    date?: number;\n    dateMark?: number;\n}\n")))}d.isMDXComponent=!0},2870:function(e,t,n){"use strict";t.Z=n.p+"assets/images/date-picker-basic-71371f0451455f29392e99fa2f2d8b73.gif"},1019:function(e,t,n){"use strict";t.Z=n.p+"assets/images/date-picker-set-ad3506ead0d62f4ec43055643c308320.gif"}}]);