var m=Object.defineProperty,d=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var s=(i,e,r)=>e in i?m(i,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[e]=r,o=(i,e)=>{for(var r in e||(e={}))p.call(e,r)&&s(i,r,e[r]);if(t)for(var r of t(e))f.call(e,r)&&s(i,r,e[r]);return i},a=(i,e)=>d(i,h(e));import{j as n}from"./jsx-runtime-CVnACwZl.js";import{useMDXComponents as c}from"./index-CkQzTg6q.js";import{ae as x,ag as j}from"./index-0kuvaJH_.js";import{D as u,S as w}from"./DeleteConfirmModal.stories-DD1xgXnQ.js";import"./index-3OP4wdng.js";import"./iframe-BqxHCfgQ.js";import"../sb-preview/runtime.js";import"./index-B-gr4m3q.js";import"./index-J1TP6alb.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-CXAe4HsA.js";import"./index-DtC6qIGv.js";import"./index-DrFu-skq.js";import"./NavigationItemsService-DmnbhENc.js";import"./ErrorStateIcon-DUz035cB.js";import"./presets-BrZHayqo.js";import"./Context-R5ee3nrF.js";import"./LightTheme-BtoaoHMG.js";import"./row-Bsm_WxsR.js";import"./useToken-C_i1q6Gz.js";function l(i){const e=o(o({a:"a",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul"},c()),i.components);return n.jsxs(n.Fragment,{children:[n.jsx(x,{of:u}),`
`,n.jsx(e.h1,{id:"delete-confirm",children:"Delete Confirm"}),`
`,n.jsx(e.h4,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:"A delete confirmation prompts users to confirm before performing destructive actions—especially those that are irreversible. These actions often affect systems or downstream processes and require deliberate confirmation. It typically appears in a modal with:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"A clear warning"}),`
`,n.jsx(e.li,{children:"Details about what's being deleted"}),`
`,n.jsx(e.li,{children:"Options to confirm or cancel"}),`
`]}),`
`,n.jsxs(e.p,{children:["This pattern is triggered from the ",n.jsx(e.a,{href:"?path=/story/components-feedback-modal-delete-confirm-modal--ux-flow",children:"More actions menu"})," in a table row or a card."]}),`
`,n.jsx(e.h3,{id:"when-to-use",children:"When to Use"}),`
`,n.jsx(e.p,{children:"Use a delete confirmation when the action has significant impact or cannot be undone, such as:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Deleting a connection"}),`
`,n.jsx(e.li,{children:"Removing an audience"}),`
`,n.jsx(e.li,{children:"Deleting a data plan"}),`
`]}),`
`,n.jsx(e.h3,{id:"when-to-avoid",children:"When to Avoid"}),`
`,n.jsx(e.p,{children:"Avoid confirmations for low-risk or easily reversible actions, where added friction slows the user down. Examples include:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Removing criteria from an audience"}),`
`,n.jsx(e.li,{children:"Clearing temporary filters or tags"}),`
`]}),`
`,n.jsx(j,{of:w})]})}function z(i={}){const{wrapper:e}=o(o({},c()),i.components);return e?n.jsx(e,a(o({},i),{children:n.jsx(l,o({},i))})):l(i)}export{z as default};
