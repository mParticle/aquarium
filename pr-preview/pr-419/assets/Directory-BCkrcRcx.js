var x=Object.defineProperty,a=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var i=(n,t,o)=>t in n?x(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,e=(n,t)=>{for(var o in t||(t={}))f.call(t,o)&&i(n,o,t[o]);if(c)for(var o of c(t))h.call(t,o)&&i(n,o,t[o]);return n},s=(n,t)=>a(n,d(t));import{j as r}from"./jsx-runtime-CS-_a2eV.js";import{useMDXComponents as u}from"./index-Bqh_nw6E.js";import"./index-Ca44TZ0D.js";function m(n){const t=e(e({h1:"h1"},u()),n.components);return r.jsx(t.h1,{id:"directory",children:"Directory"})}function l(n={}){const{wrapper:t}=e(e({},u()),n.components);return t?r.jsx(t,s(e({},n),{children:r.jsx(m,e({},n))})):m(n)}export{l as default};
