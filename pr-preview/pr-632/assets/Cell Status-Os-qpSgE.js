var d=Object.defineProperty,h=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var o=(n,e,s)=>e in n?d(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s,i=(n,e)=>{for(var s in e||(e={}))u.call(e,s)&&o(n,s,e[s]);if(a)for(var s of a(e))x.call(e,s)&&o(n,s,e[s]);return n},r=(n,e)=>h(n,m(e));import{j as t}from"./jsx-runtime-BcCOBRXo.js";import{useMDXComponents as c}from"./index-BI4Okn8T.js";import"./index-CNk6hRaE.js";function l(n){const e=i(i({h1:"h1",h3:"h3",h4:"h4",p:"p"},c()),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"table-cells",children:"Table Cells"}),`
`,t.jsx(e.h3,{id:"status",children:"Status"}),`
`,t.jsx(e.p,{children:"Always use badge components for system status. Reserve tags for actual tags, labels, and environment descriptions (e.g., prod, dev). This ensures clear visual distinction between different information types."}),`
`,t.jsx(e.h4,{id:"do",children:"Do"}),`
`,t.jsx("img",{src:"images/basic-table.png"}),`
`,t.jsx(e.h4,{id:"dont",children:"Don't"}),`
`,t.jsx("img",{src:"images/basic-table.png"}),`
`,t.jsx(e.h3,{id:"cell-aligment",children:"Cell Aligment"}),`
`,t.jsx(e.p,{children:"Statuses are left-aligned to create a cohesive and organized table layout."})]})}function b(n={}){const{wrapper:e}=i(i({},c()),n.components);return e?t.jsx(e,r(i({},n),{children:t.jsx(l,i({},n))})):l(n)}export{b as default};
