var u=Object.defineProperty,f=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var l=(a,e,o)=>e in a?u(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o,t=(a,e)=>{for(var o in e||(e={}))b.call(e,o)&&l(a,o,e[o]);if(d)for(var o of d(e))g.call(e,o)&&l(a,o,e[o]);return a},s=(a,e)=>f(a,p(e));import{j as C}from"./jsx-runtime-BcCOBRXo.js";import{w as k}from"./ChartColors-B_sXm60j.js";import"./_baseClone-DBzvlRjn.js";import{r as x}from"./index-CNk6hRaE.js";const y={title:"Components/Data Entry/Checkbox",component:a=>{var n,c;const[e,o]=x.useState((c=(n=a.checked)!=null?n:a.defaultChecked)!=null?c:!1);return C.jsx(k,s(t({},a),{checked:e,onChange:j=>{o(!e)}}))},args:{defaultChecked:!0,disabled:!1},argTypes:{defaultChecked:{control:"boolean"},disabled:{control:"boolean"}}},r={args:{disabled:!1,children:"Don’t show this message again"}};var i,m,h;r.parameters=s(t({},r.parameters),{docs:s(t({},(i=r.parameters)==null?void 0:i.docs),{source:t({originalSource:`{
  args: {
    disabled: false,
    children: 'Don’t show this message again'
  }
}`},(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source)})});const _=["Primary"],P=Object.freeze(Object.defineProperty({__proto__:null,Primary:r,__namedExportsOrder:_,default:y},Symbol.toStringTag,{value:"Module"}));export{P as C,y as m};
