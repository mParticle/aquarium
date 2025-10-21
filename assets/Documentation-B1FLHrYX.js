var m=Object.defineProperty,d=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var s=(n,e,r)=>e in n?m(n,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[e]=r,o=(n,e)=>{for(var r in e||(e={}))p.call(e,r)&&s(n,r,e[r]);if(t)for(var r of t(e))f.call(e,r)&&s(n,r,e[r]);return n},a=(n,e)=>d(n,h(e));import{j as i}from"./jsx-runtime-CVnACwZl.js";import{useMDXComponents as c}from"./index-CkQzTg6q.js";import{ae as x,ag as j}from"./index-CQtavQAv.js";import{D as u,S as w}from"./DeleteConfirmModal.stories-fEHb-7y9.js";import"./index-3OP4wdng.js";import"./iframe-Cl-BLcPI.js";import"../sb-preview/runtime.js";import"./index-B-gr4m3q.js";import"./index-J1TP6alb.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-CXAe4HsA.js";import"./index-DtC6qIGv.js";import"./index-DrFu-skq.js";import"./NavigationItemsService-syAq51yM.js";import"./ErrorStateIcon-kjHStgbV.js";import"./style-Bcqy26BW.js";import"./presets-BrZHayqo.js";import"./Context-R5ee3nrF.js";import"./WarningFilled-CeF8OMKd.js";import"./SuccessStateIcon-709Tdv_u.js";import"./WarningStateIcon-ZHXkKKYB.js";import"./LightTheme-BtoaoHMG.js";import"./row-Bsm_WxsR.js";import"./useToken-C_i1q6Gz.js";function l(n){const e=o(o({a:"a",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul"},c()),n.components);return i.jsxs(i.Fragment,{children:[i.jsx(x,{of:u}),`
`,i.jsx(e.h1,{id:"delete-confirm",children:"Delete Confirm"}),`
`,i.jsx(e.h4,{id:"overview",children:"Overview"}),`
`,i.jsx(e.p,{children:"A delete confirmation prompts users to confirm before performing destructive actions—especially those that are irreversible. These actions often affect systems or downstream processes and require deliberate confirmation. It typically appears in a modal with:"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:"A clear warning"}),`
`,i.jsx(e.li,{children:"Details about what's being deleted"}),`
`,i.jsx(e.li,{children:"Options to confirm or cancel"}),`
`]}),`
`,i.jsxs(e.p,{children:["This pattern is triggered from the ",i.jsx(e.a,{href:"?path=/story/components-feedback-modal-delete-confirm-modal--ux-flow",children:"More actions menu"})," in a table row or a card."]}),`
`,i.jsx(e.h3,{id:"when-to-use",children:"When to Use"}),`
`,i.jsx(e.p,{children:"Use a delete confirmation when the action has significant impact or cannot be undone, such as:"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:"Deleting a connection"}),`
`,i.jsx(e.li,{children:"Removing an audience"}),`
`,i.jsx(e.li,{children:"Deleting a data plan"}),`
`]}),`
`,i.jsx(e.h3,{id:"when-to-avoid",children:"When to Avoid"}),`
`,i.jsx(e.p,{children:"Avoid confirmations for low-risk or easily reversible actions, where added friction slows the user down. Examples include:"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:"Removing criteria from an audience"}),`
`,i.jsx(e.li,{children:"Clearing temporary filters or tags"}),`
`]}),`
`,i.jsx(j,{of:w})]})}function J(n={}){const{wrapper:e}=o(o({},c()),n.components);return e?i.jsx(e,a(o({},n),{children:i.jsx(l,o({},n))})):l(n)}export{J as default};
