var h=Object.defineProperty,p=Object.defineProperties;var a=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var s=(i,t,o)=>t in i?h(i,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[t]=o,n=(i,t)=>{for(var o in t||(t={}))m.call(t,o)&&s(i,o,t[o]);if(r)for(var o of r(t))x.call(t,o)&&s(i,o,t[o]);return i},l=(i,t)=>p(i,a(t));import{j as e}from"./jsx-runtime-C9TrHvcC.js";import{useMDXComponents as d}from"./index-CkQzTg6q.js";import{ae as j,ag as u}from"./index-MG0AG4oM.js";import{H as f}from"./Tooltip.stories-CfX6RQ4c.js";import"./index-3OP4wdng.js";import"./iframe-_pxdV1Z6.js";import"../sb-preview/runtime.js";import"./index-DA79H6I3.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-DwBCp-Ss.js";import"./index-dQMQm6Vu.js";import"./index-DrFu-skq.js";import"./UnauthorizedTooltip-BP3vU_2e.js";import"./ErrorStateIcon-D4ZDga1S.js";import"./style-B81W5px8.js";import"./WarningFilled-D6ijQqgK.js";import"./AntdIcon-DRQs8XP6.js";import"./presets-CQzyf-6F.js";import"./Context-R5ee3nrF.js";import"./SuccessStateIcon-1Kmip0Q-.js";import"./WarningStateIcon-r-wpv2TM.js";import"./LightTheme-5-ZTbvef.js";import"./row-DlEJUZa0.js";import"./useToken-BIYN7ogo.js";import"./HelpCircle-suXMuS68.js";function c(i){const t=n(n({a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul"},d()),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"Patterns/Help Icon"}),`
`,e.jsx(t.h1,{id:"help-icon",children:"Help Icon"}),`
`,e.jsx(t.h3,{id:"overview",children:"Overview"}),`
`,e.jsxs(t.p,{children:["A contextual help indicator that displays a tooltip when hovered. Use ",e.jsx(t.code,{children:"IconWithTooltip"})," with the ",e.jsx(t.code,{children:"RoktHelpCircle"})," icon to create this pattern."]}),`
`,e.jsx(t.h3,{id:"when-to-use",children:"When to use:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"To provide inline contextual help next to labels, form fields, or settings."}),`
`,e.jsx(t.li,{children:"To explain technical terms or metrics without cluttering the interface."}),`
`,e.jsx(t.li,{children:"To offer tips or guidance that users can discover on hover."}),`
`]}),`
`,e.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { IconWithTooltip } from '@mparticle/aquarium'
import { RoktHelpCircle } from '@mparticle/aquarium/icons'

<IconWithTooltip
  title="Helpful context about this field"
  iconProps={{ name: RoktHelpCircle }}
/>
`})}),`
`,e.jsx(t.h3,{id:"examples",children:"Examples"}),`
`,e.jsx(u,{of:f}),`
`,e.jsx(t.h4,{id:"related-links",children:"Related Links"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Resource"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Tooltip"}),e.jsx(t.td,{children:e.jsx(t.a,{href:"/docs/components-data-display-tooltip--docs",children:"Tooltip Component"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"IconWithTooltip"}),e.jsx(t.td,{children:e.jsx(t.a,{href:"/docs/components-data-display-tooltip--text-with-icon",children:"IconWithTooltip"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Eames"}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://www.figma.com/design/veXnmignQnJz8StIq10VJ5/Eames-2.0---Foundations-%26-Components?node-id=413-13162&t=5iHsAw2QyK8Lx8zt-4",rel:"nofollow",children:"Tooltip Component"})})]})]})]})]})}function O(i={}){const{wrapper:t}=n(n({},d()),i.components);return t?e.jsx(t,l(n({},i),{children:e.jsx(c,n({},i))})):c(i)}export{O as default};
