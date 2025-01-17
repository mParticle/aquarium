var m=Object.defineProperty,l=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var c=(n,e,o)=>e in n?m(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,s=(n,e)=>{for(var o in e||(e={}))p.call(e,o)&&c(n,o,e[o]);if(r)for(var o of r(e))u.call(e,o)&&c(n,o,e[o]);return n},d=(n,e)=>l(n,h(e));import{j as t}from"./jsx-runtime-BcCOBRXo.js";import{useMDXComponents as i}from"./index-BI4Okn8T.js";import"./index-CNk6hRaE.js";function a(n){const e=s(s({a:"a",h1:"h1",p:"p"},i()),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"component-process",children:"Component Process"}),`
`,t.jsx(e.p,{children:`We have a process around introducing new components into the library. This process is designed to ensure that the components we add are well-designed,
well-documented, and well-tested. See the link above to understand more about it.`}),`
`,t.jsxs(e.p,{children:[t.jsx(e.a,{href:"https://www.figma.com/board/jRyvM0L4fWa8j1NmE5tZ7y/Component-Process",rel:"nofollow",children:"Component Process Figjam"}),`
`,t.jsx(e.a,{href:"https://docs.google.com/document/d/1VvnaEzl_IBSMBMmPdGMnkX1FScQWBs5D8QYY2NuS9GI/edit?tab=t.0#heading=h.2z05vt46ooti",rel:"nofollow",children:"Component Library & Custom Component Process"})]})]})}function g(n={}){const{wrapper:e}=s(s({},i()),n.components);return e?t.jsx(e,d(s({},n),{children:t.jsx(a,s({},n))})):a(n)}export{g as default};