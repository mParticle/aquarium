var a=Object.defineProperty,d=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var o=(s,e,i)=>e in s?a(s,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[e]=i,n=(s,e)=>{for(var i in e||(e={}))h.call(e,i)&&o(s,i,e[i]);if(t)for(var i of t(e))p.call(e,i)&&o(s,i,e[i]);return s},l=(s,e)=>d(s,m(e));import{j as r}from"./jsx-runtime-BcCOBRXo.js";import{useMDXComponents as u}from"./index-BI4Okn8T.js";import{ae as x,ag as j}from"./index-sP2YIL6C.js";import{Q as f,m as g}from"./QueryItem.stories-CAgZE585.js";import"./index-CNk6hRaE.js";import"./iframe-BVZZuHdL.js";import"../sb-preview/runtime.js";import"./index-D-4E_f9W.js";import"./index-J1TP6alb.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-DBzvlRjn.js";import"./index-P2MZap72.js";import"./index-DrFu-skq.js";import"./NavigationItemsService-MY6sGjCO.js";import"./LightTheme-BtoaoHMG.js";import"./row-GPgCuxPF.js";import"./useToken-BSaSgSTZ.js";function c(s){const e=n(n({h1:"h1",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul"},u()),s.components);return r.jsxs(r.Fragment,{children:[r.jsx(x,{of:f}),`
`,`
`,r.jsx(e.h1,{id:"queryitem",children:"QueryItem"}),`
`,r.jsxs(e.p,{children:["QueryItems are the essential elements used for query builders such as ",r.jsx(e.strong,{children:"Analysis Builder"}),", ",r.jsx(e.strong,{children:"Audience Builder"}),", or ",r.jsx(e.strong,{children:"Prediction Builder"}),". They work together to form clauses that power query logic."]}),`
`,r.jsx(e.h4,{id:"types-of-queryitems",children:r.jsx(e.strong,{children:"Types of QueryItems"})}),`
`,r.jsx(e.p,{children:"There are four types of QueryItems, each serving a specific purpose:"}),`
`,r.jsxs(e.ol,{children:[`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"ValueSelector"}),": Used to select a specific value from a list or range."]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"Qualifier"}),": Defines conditions, such as operators (e.g., equals, greater than)."]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"Text"}),": Allows free-form text input for custom queries or descriptions."]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"Action"}),": Provides interactive options, such as adding or removing query items."]}),`
`]}),`
`,r.jsx(e.h4,{id:"when-to-use",children:r.jsx(e.strong,{children:"When To Use"})}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:"To build queries for analytical tools like Audience Builder or Analysis Builder."}),`
`]}),`
`,r.jsx(j,{meta:g})]})}function E(s={}){const{wrapper:e}=n(n({},u()),s.components);return e?r.jsx(e,l(n({},s),{children:r.jsx(c,n({},s))})):c(s)}export{E as default};
