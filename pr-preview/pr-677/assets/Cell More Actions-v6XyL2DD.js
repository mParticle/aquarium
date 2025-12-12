var d=Object.defineProperty,h=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var r=(n,e,s)=>e in n?d(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s,o=(n,e)=>{for(var s in e||(e={}))m.call(e,s)&&r(n,s,e[s]);if(t)for(var s of t(e))x.call(e,s)&&r(n,s,e[s]);return n},l=(n,e)=>h(n,u(e));import{j as i}from"./jsx-runtime-C9TrHvcC.js";import{useMDXComponents as c}from"./index-CkQzTg6q.js";import"./index-3OP4wdng.js";function a(n){const e=o(o({h1:"h1",h4:"h4",li:"li",p:"p",ul:"ul"},c()),n.components);return i.jsxs(i.Fragment,{children:[i.jsx(e.h1,{id:"more-actions-menu",children:"More Actions Menu"}),`
`,i.jsx(e.h4,{id:"overview",children:"Overview"}),`
`,i.jsx(e.p,{children:"The Actions Menu provides a consolidated interface for row-specific operations, such as delete, duplicate, download, and archive, all grouped within a single menu."}),`
`,i.jsx(e.h4,{id:"usage-guidelines",children:"Usage Guidelines"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:"Highlight destructive actions in red to ensure emphasis and user caution."}),`
`,i.jsx(e.li,{children:"Omit icons from menu items to maintain a clean, easy-to-read menu."}),`
`,i.jsx(e.li,{children:'Display the "More Actions" menu even when only one option is available.'}),`
`]}),`
`,i.jsx(e.h4,{id:"examples",children:"Examples:"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:"Disabled menu item (Coming Soon)"}),`
`]})]})}function v(n={}){const{wrapper:e}=o(o({},c()),n.components);return e?i.jsx(e,l(o({},n),{children:i.jsx(a,o({},n))})):a(n)}export{v as default};
