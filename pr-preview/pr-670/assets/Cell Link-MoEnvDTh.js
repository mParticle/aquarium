var a=Object.defineProperty,d=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var r=(t,n,s)=>n in t?a(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,o=(t,n)=>{for(var s in n||(n={}))u.call(n,s)&&r(t,s,n[s]);if(i)for(var s of i(n))j.call(n,s)&&r(t,s,n[s]);return t},l=(t,n)=>d(t,x(n));import{j as e}from"./jsx-runtime-C9TrHvcC.js";import{useMDXComponents as c}from"./index-CkQzTg6q.js";import"./index-3OP4wdng.js";function h(t){const n=o(o({h1:"h1",h3:"h3",h4:"h4",h5:"h5",p:"p"},c()),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"table-cells",children:"Table Cells"}),`
`,e.jsx(n.h3,{id:"links",children:"Links"}),`
`,e.jsx(n.h4,{id:"when-to-use",children:"When to use:"}),`
`,e.jsx(n.h5,{id:"text-links",children:"Text Links:"}),`
`,e.jsx(n.p,{children:"Use the Link component [Insert Link] to navigate to other pages, sections, or external resources."}),`
`,e.jsx(n.h5,{id:"call-to-actions-ctas",children:"Call-to-Actions (CTAs):"}),`
`,e.jsx(n.p,{children:'Links that serve as action triggers, like "Activate", should also follow these styles.'}),`
`,e.jsx(n.h5,{id:"buttons-vs-links",children:"Buttons vs Links:"}),`
`,e.jsx(n.p,{children:'Use links for navigation and "More Actions" menu or a buttons for actions.'})]})}function L(t={}){const{wrapper:n}=o(o({},c()),t.components);return n?e.jsx(n,l(o({},t),{children:e.jsx(h,o({},t))})):h(t)}export{L as default};
