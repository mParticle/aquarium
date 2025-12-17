var h=Object.defineProperty,p=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var l=(i,e,s)=>e in i?h(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s,t=(i,e)=>{for(var s in e||(e={}))j.call(e,s)&&l(i,s,e[s]);if(r)for(var s of r(e))m.call(e,s)&&l(i,s,e[s]);return i},o=(i,e)=>p(i,x(e));import{j as n}from"./jsx-runtime-C9TrHvcC.js";import{useMDXComponents as c}from"./index-CkQzTg6q.js";import{ae as u,ag as a}from"./index-BsIh4bYX.js";import{S as g,P as b,V as f}from"./Splitter.stories-D4RhJ7iz.js";import"./index-3OP4wdng.js";import"./iframe-Ca1CJtVt.js";import"../sb-preview/runtime.js";import"./index-DA79H6I3.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-DwBCp-Ss.js";import"./index-dQMQm6Vu.js";import"./index-DrFu-skq.js";import"./NavigationItemsService-BvMxDu-c.js";import"./ErrorStateIcon-pFfO2vlM.js";import"./style-Pm6nqJ4t.js";import"./WarningFilled-D6ijQqgK.js";import"./AntdIcon-DRQs8XP6.js";import"./presets-CQzyf-6F.js";import"./Context-R5ee3nrF.js";import"./SuccessStateIcon-T2etWKpW.js";import"./WarningStateIcon-CxJtg587.js";import"./LightTheme-BtoaoHMG.js";import"./row-DlEJUZa0.js";import"./useToken-BIYN7ogo.js";function d(i){const e=t(t({a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul"},c()),i.components);return n.jsxs(n.Fragment,{children:[n.jsx(u,{of:g}),`
`,`
`,n.jsx(e.h1,{id:"splitter",children:"Splitter"}),`
`,n.jsx(e.h4,{id:"overview",children:"Overview"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.strong,{children:"Splitter"})," component divides content into resizable panels, allowing users to adjust the layout dynamically. It provides a flexible way to create split-pane interfaces for dashboards, editors, and other complex layouts."]}),`
`,n.jsx(e.h4,{id:"key-features",children:"Key Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Resizable Panels:"})," Users can drag the splitter handle to resize panels interactively."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Layout Options:"})," Supports both horizontal (default) and vertical layouts."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Panel Configuration:"})," Individual panels can be configured with size constraints, default sizes, and collapsible behavior."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Flexible Sizing:"})," Supports percentage-based, pixel-based, and auto-sizing options."]}),`
`]}),`
`,n.jsx(e.h3,{id:"splitter-variants-and-use-cases",children:"Splitter Variants and Use Cases"}),`
`,n.jsx(e.h4,{id:"horizontal-splitter",children:"Horizontal Splitter"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Use Case"}),": For side-by-side content layouts."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Example:"})," Main content area with a sidebar, code editor with file browser, or dashboard with navigation panel."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Examples"}),":"]}),`
`,n.jsx(a,{of:b}),`
`,n.jsx(e.h4,{id:"vertical-splitter",children:"Vertical Splitter"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Use Case"}),": For stacked content layouts."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Example:"})," Editor with console output, header/content/footer layouts, or top/bottom dashboard sections."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Examples"}),":"]}),`
`,n.jsx(a,{of:f}),`
`,n.jsx(e.h3,{id:"panel-configuration",children:"Panel Configuration"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Splitter.Panel"})," component accepts the following key props:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"defaultSize"})}),": Initial size of the panel (string or number)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"size"})}),": Controlled size of the panel"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"min"})}),": Minimum size constraint"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"max"})}),": Maximum size constraint"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"collapsible"})}),": Whether the panel can be collapsed"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"resizable"})}),": Whether the panel can be resized"]}),`
`]}),`
`,n.jsx(e.h3,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use percentage-based sizing for responsive layouts"}),`
`,n.jsx(e.li,{children:"Set appropriate minimum sizes to prevent panels from becoming unusable"}),`
`,n.jsx(e.li,{children:"Consider the content hierarchy when determining default panel sizes"}),`
`,n.jsx(e.li,{children:"Use collapsible panels sparingly to avoid interface complexity"}),`
`]}),`
`,n.jsx(e.h4,{id:"related-links",children:"Related Links"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Type"}),n.jsx(e.th,{children:"Resource"})]})}),n.jsx(e.tbody,{children:n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"AntD"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://ant.design/components/splitter",rel:"nofollow",children:"Splitter Component"})})]})})]})]})}function G(i={}){const{wrapper:e}=t(t({},c()),i.components);return e?n.jsx(e,o(t({},i),{children:n.jsx(d,t({},i))})):d(i)}export{G as default};
