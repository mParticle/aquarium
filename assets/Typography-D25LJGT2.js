var a=Object.defineProperty,u=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var c=(n,t,o)=>t in n?a(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,e=(n,t)=>{for(var o in t||(t={}))x.call(t,o)&&c(n,o,t[o]);if(s)for(var o of s(t))d.call(t,o)&&c(n,o,t[o]);return n},m=(n,t)=>u(n,h(t));import{j as r}from"./jsx-runtime-CS-_a2eV.js";import{useMDXComponents as p}from"./index-Bqh_nw6E.js";import"./index-Ca44TZ0D.js";function i(n){const t=e(e({h1:"h1"},p()),n.components);return r.jsx(t.h1,{id:"typography",children:"Typography"})}function l(n={}){const{wrapper:t}=e(e({},p()),n.components);return t?r.jsx(t,m(e({},n),{children:r.jsx(i,e({},n))})):i(n)}export{l as default};