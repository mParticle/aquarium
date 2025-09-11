var d=Object.defineProperty,h=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var o=(n,e,i)=>e in n?d(n,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[e]=i,l=(n,e)=>{for(var i in e||(e={}))p.call(e,i)&&o(n,i,e[i]);if(s)for(var i of s(e))m.call(e,i)&&o(n,i,e[i]);return n},a=(n,e)=>h(n,x(e));import{j as t}from"./jsx-runtime-CVnACwZl.js";import{useMDXComponents as r}from"./index-CkQzTg6q.js";import"./index-3OP4wdng.js";function c(n){const e=l(l({h1:"h1",h3:"h3",h4:"h4",p:"p"},r()),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"table-cells",children:"Table Cells"}),`
`,t.jsx(e.h3,{id:"text",children:"Text"}),`
`,t.jsx(e.p,{children:"Text cells support 1 or 2 lines of text. Single-line text cells are typically used for concise information like names, identifiers, or short labels. Two-line text cells are used when additional context is needed and can include entry type or ID, allowing for more detailed information without consuming excessive space."}),`
`,t.jsx(e.p,{children:"[Insert 2 lines example]"}),`
`,t.jsx(e.h4,{id:"case",children:"Case"}),`
`,t.jsx(e.p,{children:"We use sentence case for everything except for titles, which use title case. Exceptions are allowed based on a specific project requirements."}),`
`,t.jsx(e.h4,{id:"truncating-long-names",children:"Truncating Long names"}),`
`,t.jsx(e.p,{children:"Column with most dynamic and longest copy to typically have  flexible. When needed implement cell truncation by ending the text with ellipses and display the full text in a tooltip upon hovering."}),`
`,t.jsx(e.p,{children:"[Insert Example]"}),`
`,t.jsx(e.h4,{id:"cell-alligment",children:"Cell Alligment"}),`
`,t.jsx(e.p,{children:"Text content within table cells is typically left-aligned to enhance readability and allow for easier scanning of information."})]})}function y(n={}){const{wrapper:e}=l(l({},r()),n.components);return e?t.jsx(e,a(l({},n),{children:t.jsx(c,l({},n))})):c(n)}export{y as default};
