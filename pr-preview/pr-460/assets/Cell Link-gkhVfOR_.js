var a=Object.defineProperty,u=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var m=(n,t,e)=>t in n?a(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,o=(n,t)=>{for(var e in t||(t={}))j.call(t,e)&&m(n,e,t[e]);if(r)for(var e of r(t))f.call(t,e)&&m(n,e,t[e]);return n},c=(n,t)=>u(n,x(t));import{j as s}from"./jsx-runtime-BcCOBRXo.js";import{useMDXComponents as p}from"./index-BI4Okn8T.js";import"./index-CNk6hRaE.js";function i(n){const t=o(o({img:"img",p:"p"},p()),n.components);return s.jsx(t.p,{children:s.jsx(t.img,{src:"../../assets/test.png",alt:""})})}function C(n={}){const{wrapper:t}=o(o({},p()),n.components);return t?s.jsx(t,c(o({},n),{children:s.jsx(i,o({},n))})):i(n)}export{C as default};
