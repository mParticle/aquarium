var c=Object.defineProperty,d=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var a=(t,n,e)=>n in t?c(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,o=(t,n)=>{for(var e in n||(n={}))l.call(n,e)&&a(t,e,n[e]);if(i)for(var e of i(n))p.call(n,e)&&a(t,e,n[e]);return t},r=(t,n)=>d(t,u(n));import{j as s}from"./jsx-runtime-CS-_a2eV.js";import{useMDXComponents as m}from"./index-Bqh_nw6E.js";import"./index-Ca44TZ0D.js";function h(t){const n=o(o({h1:"h1",h3:"h3",p:"p"},m()),t.components);return s.jsxs(s.Fragment,{children:[s.jsx(n.h1,{id:"faq",children:"FAQ"}),`
`,s.jsx(n.h3,{id:"what-should-i-do-if-i-cant-implement-my-design-specs-using-antd-atoms",children:"What should I do if I can't implement my design specs using Antd atoms?"}),`
`,s.jsx(n.p,{children:`Please ask questions about it in the #aquarium channel. Ideally have a branch with your work in progress and some Storybook
stories so that we can see what you're trying to do.`})]})}function g(t={}){const{wrapper:n}=o(o({},m()),t.components);return n?s.jsx(n,r(o({},t),{children:s.jsx(h,o({},t))})):h(t)}export{g as default};