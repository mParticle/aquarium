var x=Object.defineProperty,p=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var i=(t,n,e)=>n in t?x(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,o=(t,n)=>{for(var e in n||(n={}))d.call(n,e)&&i(t,e,n[e]);if(s)for(var e of s(n))h.call(n,e)&&i(t,e,n[e]);return t},c=(t,n)=>p(t,u(n));import{j as r}from"./jsx-runtime-CVnACwZl.js";import{useMDXComponents as a}from"./index-CkQzTg6q.js";import"./index-3OP4wdng.js";function m(t){const n=o(o({h1:"h1",p:"p"},a()),t.components);return r.jsxs(r.Fragment,{children:[r.jsx(n.h1,{id:"maintainers",children:"Maintainers"}),`
`,r.jsx(n.p,{children:"TBD"})]})}function D(t={}){const{wrapper:n}=o(o({},a()),t.components);return n?r.jsx(n,c(o({},t),{children:r.jsx(m,o({},t))})):m(t)}export{D as default};
