"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[5676],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6267:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(3117),i=n(102),o=(n(7294),n(4137)),r=["components"],l={sidebar_position:4},s="App splitting",p={unversionedId:"concepts/app-splitting",id:"concepts/app-splitting",isDocsHomePage:!1,title:"App splitting",description:"Group: Layers",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/concepts/app-splitting.md",sourceDirName:"concepts",slug:"/concepts/app-splitting",permalink:"/en/docs/concepts/app-splitting",editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/concepts/app-splitting.md",tags:[],version:"current",lastUpdatedAt:1646735857,formattedLastUpdatedAt:"3/8/2022",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"conceptsSidebar",previous:{title:"Cross-communication",permalink:"/en/docs/concepts/cross-communication"},next:{title:"Low Coupling & High Cohesion",permalink:"/en/docs/concepts/low-coupling"}},c=[{value:"Group: <code>Layers</code>",id:"group-layers",children:[{value:"Layer order",id:"layer-order",children:[{value:"By the level of knowledge/responsibility",id:"by-the-level-of-knowledgeresponsibility",children:[],level:4},{value:"By the level of danger of changes",id:"by-the-level-of-danger-of-changes",children:[],level:4}],level:3}],level:2},{value:"Group: <code>Slices</code>",id:"group-slices",children:[{value:"Rules",id:"rules",children:[{value:"Low Coupling &amp; High Cohesion",id:"low-coupling--high-cohesion",children:[],level:4},{value:"Grouping",id:"grouping",children:[],level:4}],level:3}],level:2},{value:"Group: <code>Segments</code>",id:"group-segments",children:[{value:"Restrictions",id:"restrictions",children:[{value:"General rules",id:"general-rules",children:[],level:4},{value:"Application for layers",id:"application-for-layers",children:[],level:4}],level:3}],level:2},{value:"See also",id:"see-also",children:[],level:2}],d={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"app-splitting"},"App splitting"),(0,o.kt)("h2",{id:"group-layers"},"Group: ",(0,o.kt)("inlineCode",{parentName:"h2"},"Layers")),(0,o.kt)("p",null,"The first level of separation: according to the ",(0,o.kt)("strong",{parentName:"p"},"scope of responsibility")," of the module"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Self-check")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'"Which application layer does the module belong to?"'))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"\u2514\u2500\u2500 src/\n    \u251c\u2500\u2500 app/                    # Initializing application logic\n    \u251c\u2500\u2500 processes/              # (Optional) Application processes running over pages\n    \u251c\u2500\u2500 pages/                  # Application pages\n    \u251c\u2500\u2500 widgets/                # Independent and self-contained blocks for pages\n    \u251c\u2500\u2500 features/               # (Optional) Processing of user scenarios\n    \u251c\u2500\u2500 entities/               # (Optional) Business entities that domain logic operates with\n    \u2514\u2500\u2500 shared/                 # Reused modules, non business specific\n")),(0,o.kt)("h3",{id:"layer-order"},"Layer order"),(0,o.kt)("p",null,"If you look at the order of the layers , you can distinguish two general patterns:"),(0,o.kt)("h4",{id:"by-the-level-of-knowledgeresponsibility"},"By the level of knowledge/responsibility"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"app")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"processes")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"pages")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"features")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"entities")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"shared")),(0,o.kt)("p",null,'The module "knows" only about itself and the underlying modules, but not the ones lying above'),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This also affects the allowed imports")),(0,o.kt)("h4",{id:"by-the-level-of-danger-of-changes"},"By the level of danger of changes"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"shared")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"entities")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"features")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"pages")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"processes")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"app")),(0,o.kt)("p",null,"The lower the module is located , the more dangerous it is to make changes to it"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Because most likely it is used in many overlying layers")),(0,o.kt)("h2",{id:"group-slices"},"Group: ",(0,o.kt)("inlineCode",{parentName:"h2"},"Slices")),(0,o.kt)("p",null,"The second level of separation is by ",(0,o.kt)("strong",{parentName:"p"},"specific BL functionality")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The methodology has almost no effect on this level and much depends ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/feature-sliced/documentation/discussions/65"},"on the specific project"))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Self-check")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'"What scope of BL does the module affect?"'),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("em",{parentName:"p"},"Before that , it is necessary to determine the scope of responsibility (layer)")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"\u251c\u2500\u2500 app/\n|   # Does not have specific slices, \n|   # Because it contains meta-logic on the project and its initialization\n\u251c\u2500\u2500 processes/\n|   # Slices implementing processes on pages\n|   \u251c\u2500\u2500 payment\n|   \u251c\u2500\u2500 auth\n|   \u251c\u2500\u2500 quick-tour\n|   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 pages/\n|   # Slices implementing application pages\n|   # At the same time, due to the specifics of routing, they can be invested in each other\n|   \u251c\u2500\u2500 profile\n|   \u251c\u2500\u2500 sign-up\n|   \u251c\u2500\u2500 feed\n|   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 widgets/\n|   # Slices implementing independent page blocks\n|   \u251c\u2500\u2500 header\n|   \u251c\u2500\u2500 feed\n|   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 features/\n|   # Slices implementing user scenarios on pages\n|   \u251c\u2500\u2500 auth-by-phone\n|   \u251c\u2500\u2500 inline-post\n|   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 entities/\n|   # Slices of business entities for implementing a more complex BL\n|   \u251c\u2500\u2500 viewer\n|   \u251c\u2500\u2500 posts\n|   \u251c\u2500\u2500 i18n\n|   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 shared/\n|    # Does not have specific slices\n|    # is rather a set of commonly used segments, without binding to the BL\n")),(0,o.kt)("h3",{id:"rules"},"Rules"),(0,o.kt)("p",null,"Since a slice is a specific level of abstraction, the methodology is obliged to impose certain rules on it"),(0,o.kt)("h4",{id:"low-coupling--high-cohesion"},"Low Coupling & High Cohesion"),(0,o.kt)("p",null,"Slices of the same layer ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/low-coupling"},"cannot use each other directly"),", and their interaction and composition should be determined on the upper layer, relative to their current one"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=features/baz/ui.tsx",title:"features/baz/ui.tsx"},'// Bad: the feature imports another feature (slices of the same layer)\nimport { Bar } from "features/bar"\n\nfunction Baz({ foo, ...barProps}) {\n    ...\n    <Bar {...barProps} />\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=pages/foo/ui.tsx",title:"pages/foo/ui.tsx"},'// Good: features are compiled on the page (overlying layer)\nimport { Baz } from "features/baz"\nimport { Bar } from "features/bar"\n\nfunction Foo() {\n    ...\n    <Baz {...fooProps}>\n        <Bar {...barProps} />\n    </Baz>\n}\n')),(0,o.kt)("h4",{id:"grouping"},"Grouping"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In most cases, you should avoid nesting in slices, and use only ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/layers/features#structural-grouping-features"},"structural grouping by folders"),", without additional coupling logic"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"features/order/           # Feature group\n   \u251c\u2500\u2500 add-to-cart        # Full-fledged feature\n   \u251c\u2500\u2500 total-info         # Full-fledged feature\n-  \u251c\u2500\u2500 model.ts           # General logic for the group\n-  \u251c\u2500\u2500 hooks.ts           # General hooks for the group\n   \u2514\u2500\u2500 index.ts           # Public API with feature re-export\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"At the same time, some layers (e.g., pages) initially require nesting due to the requirements of the project / framework"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pages/\n   \u251c\u2500\u2500 order/\n   |    \u251c\u2500\u2500 cart/\n   |    \u251c\u2500\u2500 checkout/\n   |    |    \u251c\u2500\u2500 delivery/\n   |    |    \u2514\u2500\u2500 payment/\n   |    \u251c\u2500\u2500 result/\n   |    \u2514\u2500\u2500 index.tsx\n   \u251c\u2500\u2500 auth/\n   |    \u251c\u2500\u2500 sign-in/\n   |    \u2514\u2500\u2500 sign-up/\n   \u251c\u2500\u2500 home/\n   \u251c\u2500\u2500 catalog/\n")))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Nested slices should be avoided as much as possible, but even if you have to use them (for example, for pages), you need to ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/low-coupling"},"link them explicitly"),", to avoid unforeseen consequences"))),(0,o.kt)("h2",{id:"group-segments"},"Group: ",(0,o.kt)("inlineCode",{parentName:"h2"},"Segments")),(0,o.kt)("p",null,"The third level of separation: by ",(0,o.kt)("strong",{parentName:"p"},"the purpose of the module in the code and implementation")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Self-check")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'"What part of the technical implementation of the logic affects the module?"'),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("em",{parentName:"p"},"Before that, it is necessary to determine the scope of influence (layer) and domain affiliation (slice)")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"{layer}/\n    \u251c\u2500\u2500 {slice}/\n    |   \u251c\u2500\u2500 ui/                     # UI-logic (components, ui-widgets,...)\n    |   \u251c\u2500\u2500 model/                  # Business logic (store, actions, effects, reducers,...)\n    |   \u251c\u2500\u2500 lib/                    # Infrastructure logic (utils/helpers)\n    |   \u251c\u2500\u2500 config*/                # Configuration (of the project / slice)\n    |   \u2514\u2500\u2500 api*/                   # Logic of API requests (api instances, requests,...)\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"At the same time, each segment can be represented ",(0,o.kt)("strong",{parentName:"em"},"as a file, or as a separate directory")," - depending on the complexity and size")),(0,o.kt)("h3",{id:"restrictions"},"Restrictions"),(0,o.kt)("p",null,"The methodology was developed with the aim of not limiting and not bothering developers with the rules for choosing abstractions ",(0,o.kt)("em",{parentName:"p"},"(it's desirable to use ",(0,o.kt)("strong",{parentName:"em"},"any segment in any layer"),")")),(0,o.kt)("p",null,"However, as a result of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/feature-sliced/documentation/discussions/"},"discussions and analysis of extensive experience")," - it was determined that it is better and more practical ",(0,o.kt)("strong",{parentName:"p"},"to limit each layer to segments used internally"),"."),(0,o.kt)("h4",{id:"general-rules"},"General rules"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("strong",{parentName:"li"},"higher")," the layer is located , the more it knows about the BL of the application and vice versa"),(0,o.kt)("li",{parentName:"ol"},"API logic ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/66"},"recommended")," should be put in ",(0,o.kt)("inlineCode",{parentName:"li"},"shared")," so that the logic is not scattered around the project")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Usually, it is common and presented as single instances",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},'Edge-case "exceptions"'),": ",(0,o.kt)("em",{parentName:"li"},"GraphQL"),", ",(0,o.kt)("em",{parentName:"li"},"react-query hooks"))))),(0,o.kt)("h4",{id:"application-for-layers"},"Application for layers"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Layer"),(0,o.kt)("th",{parentName:"tr",align:null},"Content"),(0,o.kt)("th",{parentName:"tr",align:null},"Allowed Segments"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"app")),(0,o.kt)("td",{parentName:"tr",align:null},"Does not include slices and contains initialization logic"),(0,o.kt)("td",{parentName:"tr",align:null},"The existing segments are not quite suitable, and therefore ",(0,o.kt)("inlineCode",{parentName:"td"},"/providers (/hoc, ...)"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"/styles"),", etc. are usually used. It depends very much on the project and is unlikely to be solved by the methodology")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"processes")),(0,o.kt)("td",{parentName:"tr",align:null},"The slices inside include only business logic, without displaying (1)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ui")," ",(0,o.kt)("inlineCode",{parentName:"td"},"lib")," ",(0,o.kt)("inlineCode",{parentName:"td"},"model")," (",(0,o.kt)("inlineCode",{parentName:"td"},"api"),")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"pages")),(0,o.kt)("td",{parentName:"tr",align:null},"The slices inside include a ui and model composition of various features for a specific page"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ui")," ",(0,o.kt)("inlineCode",{parentName:"td"},"lib")," ",(0,o.kt)("inlineCode",{parentName:"td"},"model")," (",(0,o.kt)("inlineCode",{parentName:"td"},"api"),")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"features")),(0,o.kt)("td",{parentName:"tr",align:null},"The slices inside include the composition of entities and the implementation of BL in the model + display"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ui")," ",(0,o.kt)("inlineCode",{parentName:"td"},"lib")," ",(0,o.kt)("inlineCode",{parentName:"td"},"model")," (",(0,o.kt)("inlineCode",{parentName:"td"},"api"),")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"entities")),(0,o.kt)("td",{parentName:"tr",align:null},"The slices inside represent a disparate set of submodules for using"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ui")," ",(0,o.kt)("inlineCode",{parentName:"td"},"lib")," ",(0,o.kt)("inlineCode",{parentName:"td"},"model")," (",(0,o.kt)("inlineCode",{parentName:"td"},"api"),")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"shared")),(0,o.kt)("td",{parentName:"tr",align:null},"Contains only infrastructure logic without BL (1)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ui")," ",(0,o.kt)("inlineCode",{parentName:"td"},"lib")," ",(0,o.kt)("inlineCode",{parentName:"td"},"api"))))),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/31"},"(Discussion) Methodology abstractions, their goals and naming")),(0,o.kt)("li",{parentName:"ul"},"Discussions on naming entities",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/31#discussioncomment-464894"},"Naming survey")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/20"},(0,o.kt)("inlineCode",{parentName:"a"},"processes")," vs ",(0,o.kt)("inlineCode",{parentName:"a"},"flows")," vs ..."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/68"},(0,o.kt)("inlineCode",{parentName:"a"},"model")," vs ",(0,o.kt)("inlineCode",{parentName:"a"},"store")," vs ...")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://t.me/atomicdesign/18951"},"Primary description of abstractions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.pluralsight.com/guides/how-to-organize-your-react-+-redux-codebase"},"(Article) About the organization of the code base ",(0,o.kt)("em",{parentName:"a"},"with a complete comparison of several approaches"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://alexmngn.medium.com/why-react-developers-should-modularize-their-applications-d26d381854c1"},"(Article) About project modularization")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/reference/layers/overview"},"(Reference) Layers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/reference/segments"},"(Reference) Segments"))))}m.isMDXComponent=!0}}]);