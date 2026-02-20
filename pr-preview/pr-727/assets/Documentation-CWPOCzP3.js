var c=Object.defineProperty,p=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var a=(e,t,s)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,o=(e,t)=>{for(var s in t||(t={}))u.call(t,s)&&a(e,s,t[s]);if(r)for(var s of r(t))m.call(t,s)&&a(e,s,t[s]);return e},d=(e,t)=>p(e,x(t));import{j as n}from"./jsx-runtime-C9TrHvcC.js";import{useMDXComponents as h}from"./index-CkQzTg6q.js";import{ae as j,ag as i,af as g}from"./index-CXhIS2aE.js";import{B as f,T as b,L as w,D as y,S as v,I,a as k,b as B,c as L,d as T,e as U,f as C}from"./Button.stories-C8nx7YOn.js";import"./index-3OP4wdng.js";import"./iframe-vvq_LGlr.js";import"../sb-preview/runtime.js";import"./index-DA79H6I3.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-DwBCp-Ss.js";import"./index-dQMQm6Vu.js";import"./index-DrFu-skq.js";import"./UnauthorizedTooltip-caQfJv4u.js";import"./ErrorStateIcon-D4ZDga1S.js";import"./style-B81W5px8.js";import"./WarningFilled-D6ijQqgK.js";import"./AntdIcon-DRQs8XP6.js";import"./presets-CQzyf-6F.js";import"./Context-R5ee3nrF.js";import"./SuccessStateIcon-1Kmip0Q-.js";import"./WarningStateIcon-r-wpv2TM.js";import"./LightTheme-5-ZTbvef.js";import"./row-DlEJUZa0.js";import"./useToken-BIYN7ogo.js";import"./index-1POLsKUh.js";import"./Trash01-1xR_L0dD.js";function l(e){const t=o(o({a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul"},h()),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(j,{of:f}),`
`,`
`,n.jsx(t.h1,{id:"button",children:"Button"}),`
`,n.jsx(t.h3,{id:"overview",children:"Overview"}),`
`,n.jsxs(t.p,{children:["The ",n.jsx(t.strong,{children:"Button"})," component is used to trigger actions or navigate the interface. It supports various styles, sizes, and states to fit different use cases."]}),`
`,n.jsx(t.h3,{id:"button-types",children:"Button Types"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Primary"})," – High-emphasis actions like submitting or saving workflows."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Secondary"})," – Supportive tasks such as canceling or opening supplemental dialogs."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Tertiary"})," – Lower-priority options that should sit behind primary/secondary CTAs."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Text"})," – Quiet inline affordances that should blend into surrounding content."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Link"})," – Navigation-style actions that resemble hyperlinks within layouts."]}),`
`]}),`
`,n.jsx(i,{of:b}),`
`,n.jsx(g,{of:w}),`
`,n.jsx(t.h3,{id:"dark-button",children:"Dark Button"}),`
`,n.jsxs(t.p,{children:["The ",n.jsx(t.strong,{children:"Dark"})," button provides a bold, high-contrast option with a black background and white text. Use ",n.jsx(t.code,{children:'color="default"'})," with ",n.jsx(t.code,{children:'variant="solid"'})," to achieve this style."]}),`
`,n.jsx(i,{of:y}),`
`,n.jsx(t.h3,{id:"button-sizes",children:"Button sizes"}),`
`,n.jsxs(t.p,{children:["Buttons ship in three heights to support different layouts. The default is ",n.jsx(t.code,{children:"middle"}),", shown alongside the smaller and larger options below."]}),`
`,n.jsx(i,{of:v}),`
`,n.jsx(t.h3,{id:"buttons-with-icons",children:"Buttons with icons"}),`
`,n.jsx(t.p,{children:"The icon-enabled variants mirror the same hierarchy while reinforcing meaning with glyphs."}),`
`,n.jsx(i,{of:I}),`
`,n.jsx(t.h4,{id:"icon-only-buttons",children:"Icon-only buttons"}),`
`,n.jsx(t.p,{children:"Icon-only buttons provide compact controls for toolbars and quick actions where text isn’t necessary."}),`
`,n.jsx(i,{of:k}),`
`,n.jsx(t.h3,{id:"icon-comparison-local-vs-untitled-ui",children:"Icon Comparison: Local vs Untitled UI"}),`
`,n.jsx(t.p,{children:"Aquarium supports both local in-house icons and Untitled UI icons. Compare the two implementations below."}),`
`,n.jsx(t.h4,{id:"buttons-with-local-icons",children:"Buttons with Local Icons"}),`
`,n.jsxs(t.p,{children:["Local icons use the ",n.jsx(t.code,{children:"Icon"})," component with icon names from the Aquarium library."]}),`
`,n.jsx(i,{of:B}),`
`,n.jsx(t.h4,{id:"buttons-with-untitled-ui-icons",children:"Buttons with Untitled UI Icons"}),`
`,n.jsxs(t.p,{children:["Untitled UI icons use the same ",n.jsx(t.code,{children:"Icon"})," component, but pass the imported icon component instead of a string name."]}),`
`,n.jsx(i,{of:L}),`
`,n.jsx(t.h3,{id:"loading-state",children:"Loading state"}),`
`,n.jsx(t.p,{children:"The loading variant keeps the user informed while an action finishes processing. Use concise labels that set expectations."}),`
`,n.jsx(i,{of:T}),`
`,n.jsx(t.h3,{id:"loading-text-button",children:"Loading text button"}),`
`,n.jsx(t.p,{children:"Use the text treatment for subtle “load more” affordances that need to display progress without taking extra visual weight."}),`
`,n.jsx(i,{of:U}),`
`,n.jsx(t.h3,{id:"destructive-action",children:"Destructive action"}),`
`,n.jsx(t.p,{children:"Use the danger style to signal irreversible steps such as deletions. Pair it with clear language so users understand the impact."}),`
`,n.jsx(i,{of:C}),`
`,n.jsx(t.h3,{id:"related-links",children:"Related Links"}),`
`,n.jsxs(t.table,{children:[n.jsx(t.thead,{children:n.jsxs(t.tr,{children:[n.jsx(t.th,{children:"Type"}),n.jsx(t.th,{children:"Resource"})]})}),n.jsxs(t.tbody,{children:[n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Eames"}),n.jsx(t.td,{children:n.jsx(t.a,{href:"https://www.figma.com/design/veXnmignQnJz8StIq10VJ5/Eames-2.0---Foundations-%26-Components?node-id=368-430&p=f&t=1Pi9thxrLJt7TsHN-0",rel:"nofollow",children:"Button Component"})})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"AntD"}),n.jsx(t.td,{children:n.jsx(t.a,{href:"https://ant.design/components/button",rel:"nofollow",children:"Button Component"})})]})]})]})]})}function ot(e={}){const{wrapper:t}=o(o({},h()),e.components);return t?n.jsx(t,d(o({},e),{children:n.jsx(l,o({},e))})):l(e)}export{ot as default};
