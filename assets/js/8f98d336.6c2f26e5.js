(self.webpackChunkave_react_docs=self.webpackChunkave_react_docs||[]).push([[10],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2050:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],l={id:"calendar",title:"Calendar"},c=void 0,s={unversionedId:"calendar",id:"calendar",isDocsHomePage:!1,title:"Calendar",description:"Examples",source:"@site/docs/calendar.md",sourceDirName:".",slug:"/calendar",permalink:"/Ave-React-Docs/calendar",version:"current",frontMatter:{id:"calendar",title:"Calendar"},sidebar:"components",previous:{title:"StatusBar",permalink:"/Ave-React-Docs/status-bar"},next:{title:"DatePicker",permalink:"/Ave-React-Docs/date-picker"}},p=[{value:"Examples",id:"examples",children:[{value:"Basic",id:"example-basic",children:[]},{value:"Set Date",id:"example-set",children:[]}]}],u={toc:p};function d(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"example-basic"},"Basic"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'export function App() {\n    return (\n        <Window>\n            <DemoLayout width="500dpx" height="500dpx">\n                <Calendar\n                    onChange={(sender) => {\n                        const timePoint = sender.GetDate();\n                        console.log(\n                            `Date: ${timePoint.Year}-${timePoint.Month}-${timePoint.Day}`,\n                        );\n                    }}\n                ></Calendar>\n            </DemoLayout>\n        </Window>\n    );\n}\n')),(0,i.kt)("p",null,"In this example, we demonstrate the basic usage of calendar:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"display current date: by default, current date is highlighted"),(0,i.kt)("li",{parentName:"ul"},"get selected date")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"calendar basic",src:n(5502).Z})),(0,i.kt)("p",null,"In console:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Date: 2022-3-10\nDate: 2022-3-30\n")),(0,i.kt)("h4",{id:"api-basic"},"API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ICalendarComponentProps extends IComponentProps {\n    onChange?: Parameters<ICalendar['OnChange']>[0];\n}\n")),(0,i.kt)("h3",{id:"example-set"},"Set Date"),(0,i.kt)("p",null,"By default, current date will be highlighted when you open it, we can customize selected date using ",(0,i.kt)("inlineCode",{parentName:"p"},"date")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dateMark"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'export function App() {\n    const timestamp = new TimePoint(2021, 11, 5).JsDateTime;\n    const [date, setDate] = useState(timestamp);\n    const [dateMark, setDateMark] = useState(timestamp);\n\n    return (\n        <Window>\n            <DemoLayout width="500dpx" height="500dpx">\n                <Calendar\n                    date={date}\n                    dateMark={dateMark}\n                    onChange={(sender) => {\n                        const timePoint = sender.GetDate();\n                        const timestamp = timePoint.JsDateTime;\n                        setDate(timestamp);\n                        setDateMark(timestamp);\n                    }}\n                ></Calendar>\n            </DemoLayout>\n        </Window>\n    );\n}\n')),(0,i.kt)("p",null,"In this example, we set date to ",(0,i.kt)("inlineCode",{parentName:"p"},"2021/11/5"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"calendar set",src:n(368).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"date"),": outline"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dateMark"),": filled background")),(0,i.kt)("p",null,"The differences between them can be seen from this example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"-const timestamp = new TimePoint(2021, 11, 5).JsDateTime;\n+const timestamp = new TimePoint(2021, 11, 6).JsDateTime;\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"calendar set 2",src:n(2590).Z})),(0,i.kt)("h4",{id:"api-set"},"API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ICalendarComponentProps extends IComponentProps {\n    date?: number;\n    dateMark?: number;\n}\n")))}d.isMDXComponent=!0},5502:function(e,t,n){"use strict";t.Z=n.p+"assets/images/calendar-basic-cec95193d06898f47d70213b55ed5ca4.gif"},2590:function(e,t,n){"use strict";t.Z=n.p+"assets/images/calendar-set-2-6406f1ae0be84dc625b6053aa100a242.png"},368:function(e,t,n){"use strict";t.Z=n.p+"assets/images/calendar-set-ff6692862ea220be8056150b83fc9798.png"}}]);