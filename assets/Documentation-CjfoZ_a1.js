var c=Object.defineProperty,p=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var a=(e,n,s)=>n in e?c(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,o=(e,n)=>{for(var s in n||(n={}))x.call(n,s)&&a(e,s,n[s]);if(r)for(var s of r(n))u.call(n,s)&&a(e,s,n[s]);return e},l=(e,n)=>p(e,m(n));import{j as t}from"./jsx-runtime-C9TrHvcC.js";import{useMDXComponents as h}from"./index-CkQzTg6q.js";import{ae as j,ag as i,af as g}from"./index-D0oyLsDz.js";import{B as f,T as b,L as w,S as y,I as v,a as I,b as L,c as B,d as T,e as U,D as k}from"./Button.stories-Cu6-aF28.js";import"./index-3OP4wdng.js";import"./iframe-TA9mk4yY.js";import"../sb-preview/runtime.js";import"./index-DA79H6I3.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-DwBCp-Ss.js";import"./index-dQMQm6Vu.js";import"./index-DrFu-skq.js";import"./UnauthorizedTooltip-BRUt4Tzc.js";import"./ErrorStateIcon-UoyK5ecU.js";import"./style-BbwCNso5.js";import"./WarningFilled-D6ijQqgK.js";import"./AntdIcon-DRQs8XP6.js";import"./presets-CQzyf-6F.js";import"./Context-R5ee3nrF.js";import"./SuccessStateIcon-DOqzJwEs.js";import"./WarningStateIcon-CKREznl9.js";import"./LightTheme-BtoaoHMG.js";import"./row-DlEJUZa0.js";import"./useToken-BIYN7ogo.js";import"./index-1POLsKUh.js";import"./Trash04-7_s1Rvvf.js";function d(e){const n=o(o({a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul"},h()),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(j,{of:f}),`
`,`
`,t.jsx(n.h1,{id:"button",children:"Button"}),`
`,t.jsx(n.h3,{id:"overview",children:"Overview"}),`
`,t.jsxs(n.p,{children:["The ",t.jsx(n.strong,{children:"Button"})," component is used to trigger actions or navigate the interface. It supports various styles, sizes, and states to fit different use cases."]}),`
`,t.jsx(n.h3,{id:"button-types",children:"Button Types"}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"Primary"})," – High-emphasis actions like submitting or saving workflows."]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"Secondary"})," – Supportive tasks such as canceling or opening supplemental dialogs."]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"Tertiary"})," – Lower-priority options that should sit behind primary/secondary CTAs."]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"Text"})," – Quiet inline affordances that should blend into surrounding content."]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"Link"})," – Navigation-style actions that resemble hyperlinks within layouts."]}),`
`]}),`
`,t.jsx(i,{of:b}),`
`,t.jsx(g,{of:w}),`
`,t.jsx(n.h3,{id:"button-sizes",children:"Button sizes"}),`
`,t.jsxs(n.p,{children:["Buttons ship in three heights to support different layouts. The default is ",t.jsx(n.code,{children:"middle"}),", shown alongside the smaller and larger options below."]}),`
`,t.jsx(i,{of:y}),`
`,t.jsx(n.h3,{id:"buttons-with-icons",children:"Buttons with icons"}),`
`,t.jsx(n.p,{children:"The icon-enabled variants mirror the same hierarchy while reinforcing meaning with glyphs."}),`
`,t.jsx(i,{of:v}),`
`,t.jsx(n.h4,{id:"icon-only-buttons",children:"Icon-only buttons"}),`
`,t.jsx(n.p,{children:"Icon-only buttons provide compact controls for toolbars and quick actions where text isn’t necessary."}),`
`,t.jsx(i,{of:I}),`
`,t.jsx(n.h3,{id:"icon-comparison-local-vs-untitled-ui",children:"Icon Comparison: Local vs Untitled UI"}),`
`,t.jsx(n.p,{children:"Aquarium supports both local in-house icons and Untitled UI icons. Compare the two implementations below."}),`
`,t.jsx(n.h4,{id:"buttons-with-local-icons",children:"Buttons with Local Icons"}),`
`,t.jsxs(n.p,{children:["Local icons use the ",t.jsx(n.code,{children:"Icon"})," component with icon names from the Aquarium library."]}),`
`,t.jsx(i,{of:L}),`
`,t.jsx(n.h4,{id:"buttons-with-untitled-ui-icons",children:"Buttons with Untitled UI Icons"}),`
`,t.jsxs(n.p,{children:["Untitled UI icons use the same ",t.jsx(n.code,{children:"Icon"})," component, but pass the imported icon component instead of a string name."]}),`
`,t.jsx(i,{of:B}),`
`,t.jsx(n.h3,{id:"loading-state",children:"Loading state"}),`
`,t.jsx(n.p,{children:"The loading variant keeps the user informed while an action finishes processing. Use concise labels that set expectations."}),`
`,t.jsx(i,{of:T}),`
`,t.jsx(n.h3,{id:"loading-text-button",children:"Loading text button"}),`
`,t.jsx(n.p,{children:"Use the text treatment for subtle “load more” affordances that need to display progress without taking extra visual weight."}),`
`,t.jsx(i,{of:U}),`
`,t.jsx(n.h3,{id:"destructive-action",children:"Destructive action"}),`
`,t.jsx(n.p,{children:"Use the danger style to signal irreversible steps such as deletions. Pair it with clear language so users understand the impact."}),`
`,t.jsx(i,{of:k}),`
`,t.jsx(n.h3,{id:"related-links",children:"Related Links"}),`
`,t.jsxs(n.table,{children:[t.jsx(n.thead,{children:t.jsxs(n.tr,{children:[t.jsx(n.th,{children:"Type"}),t.jsx(n.th,{children:"Resource"})]})}),t.jsxs(n.tbody,{children:[t.jsxs(n.tr,{children:[t.jsx(n.td,{children:"Eames"}),t.jsx(n.td,{children:t.jsx(n.a,{href:"https://www.figma.com/design/veXnmignQnJz8StIq10VJ5/Eames-2.0---Foundations-%26-Components?node-id=368-430&p=f&t=1Pi9thxrLJt7TsHN-0",rel:"nofollow",children:"Button Component"})})]}),t.jsxs(n.tr,{children:[t.jsx(n.td,{children:"AntD"}),t.jsx(n.td,{children:t.jsx(n.a,{href:"https://ant.design/components/button",rel:"nofollow",children:"Button Component"})})]})]})]})]})}function on(e={}){const{wrapper:n}=o(o({},h()),e.components);return n?t.jsx(n,l(o({},e),{children:t.jsx(d,o({},e))})):d(e)}export{on as default};
