var c=Object.defineProperty,x=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var l=(e,n,t)=>n in e?c(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,r=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&l(e,t,n[t]);if(o)for(var t of o(n))u.call(n,t)&&l(e,t,n[t]);return e},a=(e,n)=>x(e,j(n));import{j as s}from"./jsx-runtime-CVnACwZl.js";import{useMDXComponents as d}from"./index-CkQzTg6q.js";import{ae as m,ag as i}from"./index-yET1rcpp.js";import{B as g,P as f,a as y,D as b,b as I,c as v,d as k,L as C,e as w,I as B}from"./Button.stories-Bp9ORChV.js";import"./index-3OP4wdng.js";import"./iframe-BhTGXhKX.js";import"../sb-preview/runtime.js";import"./index-B-gr4m3q.js";import"./index-J1TP6alb.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-CXAe4HsA.js";import"./index-DtC6qIGv.js";import"./index-DrFu-skq.js";import"./NavigationItemsService-CwiLuB8p.js";import"./ErrorStateIcon-DUz035cB.js";import"./presets-BrZHayqo.js";import"./Context-R5ee3nrF.js";import"./LightTheme-BtoaoHMG.js";import"./row-Bsm_WxsR.js";import"./useToken-C_i1q6Gz.js";import"./index-BU0ZtLqn.js";function h(e){const n=r(r({a:"a",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul"},d()),e.components);return s.jsxs(s.Fragment,{children:[s.jsx(m,{of:g}),`
`,`
`,s.jsx(n.h1,{id:"button",children:"Button"}),`
`,s.jsx(n.h4,{id:"overview",children:"Overview"}),`
`,s.jsxs(n.p,{children:["The ",s.jsx(n.strong,{children:"Button"})," component is used to trigger actions or navigate the interface. It supports various styles, sizes, and states to fit different use cases."]}),`
`,s.jsx(n.h4,{id:"key-features",children:"Key Features"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Variants:"})," Includes primary, default, dashed, text, and link buttons for different use cases."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Sizes:"})," Supports small, medium (default), and large sizes."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"States:"})," Disabled, loading, and hover states to indicate action availability."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Icons:"})," Easily integrate icons for visual clarity and emphasis."]}),`
`]}),`
`,s.jsx(n.h3,{id:"button-variants-and-use-cases",children:"Button Variants and Use Cases"}),`
`,s.jsx(n.h4,{id:"primary-button",children:"Primary Button"}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"Use Case"}),": For the main action on a page or section."]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Example:"})," Submitting a form, saving changes, or initiating a key process."]}),`
`]}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"Examples"}),":"]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"With Icon"}),":"]}),`
`]}),`
`,s.jsx(i,{of:f}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Without Icon"}),":"]}),`
`]}),`
`,s.jsx(i,{of:y}),`
`,s.jsx(n.h4,{id:"default-button",children:"Default Button"}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"Use Case"}),": For secondary actions that complement the primary task."]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Example:"})," Canceling an action, opening a dialog, or performing less important tasks."]}),`
`]}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"Examples"}),":"]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"With Icon"}),":"]}),`
`]}),`
`,s.jsx(i,{of:b}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Without Icon"}),":"]}),`
`]}),`
`,s.jsx(i,{of:I}),`
`,s.jsx(n.h4,{id:"dashed-button",children:"Dashed Button"}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"Use Case"}),": For tertiary actions in the visual hierarchy."]}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"Examples"}),":"]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"With Icon"}),":"]}),`
`]}),`
`,s.jsx(i,{of:v}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Without Icon"}),":"]}),`
`]}),`
`,s.jsx(i,{of:k}),`
`,s.jsx(n.h4,{id:"link-button",children:"Link Button"}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"Use Case"}),": Ideal for triggering an actions that don't require heavy visual emphasis."]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Example:"}),` Viewing errors, navigating to documentation
When navigating to a new URL or external page, always use `,s.jsx(n.a,{href:"https://mparticle.github.io/aquarium/?path=/story/components-general-typography-link--primary",rel:"nofollow",children:"Typography.Link"})," instead of a Link Button."]}),`
`]}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"Examples"}),":"]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"With Icon"}),":"]}),`
`]}),`
`,s.jsx(i,{of:C}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Without Icon"}),":"]}),`
`]}),`
`,s.jsx(i,{of:w}),`
`,s.jsx(n.h4,{id:"icon-only-button",children:"Icon-Only Button"}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"Use Case"}),": For compact controls where only an icon is needed."]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Example:"})," Toolbar controls, close buttons, or quick actions."]}),`
`]}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"Examples"}),":"]}),`
`,s.jsx(i,{of:B}),`
`,s.jsx(n.h4,{id:"related-links",children:"Related Links"}),`
`,s.jsxs(n.table,{children:[s.jsx(n.thead,{children:s.jsxs(n.tr,{children:[s.jsx(n.th,{children:"Type"}),s.jsx(n.th,{children:"Resource"})]})}),s.jsxs(n.tbody,{children:[s.jsxs(n.tr,{children:[s.jsx(n.td,{children:"Eames"}),s.jsx(n.td,{children:s.jsx(n.a,{href:"https://www.figma.com/design/veXnmignQnJz8StIq10VJ5/Eames-2.0---Foundations-%26-Components?node-id=368-430&p=f&t=1Pi9thxrLJt7TsHN-0",rel:"nofollow",children:"Button Component"})})]}),s.jsxs(n.tr,{children:[s.jsx(n.td,{children:"AntD"}),s.jsx(n.td,{children:s.jsx(n.a,{href:"https://ant.design/components/button",rel:"nofollow",children:"Button Component"})})]})]})]})]})}function G(e={}){const{wrapper:n}=r(r({},d()),e.components);return n?s.jsx(n,a(r({},e),{children:s.jsx(h,r({},e))})):h(e)}export{G as default};
