var d=Object.defineProperty,m=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var c=(e,r,o)=>r in e?d(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,s=(e,r)=>{for(var o in r||(r={}))g.call(r,o)&&c(e,o,r[o]);if(n)for(var o of n(r))f.call(r,o)&&c(e,o,r[o]);return e},a=(e,r)=>m(e,u(r));import{j as T}from"./jsx-runtime-BcCOBRXo.js";import{r as y}from"./GlobalNavigation-ByoW-fgh.js";const _={title:"Components/Data Display/Tag",component:e=>T.jsx(y,a(s({},e),{children:"Tag"}))},t={args:{color:"default",bordered:!0},argTypes:{color:{control:"select",options:["success","processing","default","error","warning"]}}};var l,p,i;t.parameters=a(s({},t.parameters),{docs:a(s({},(l=t.parameters)==null?void 0:l.docs),{source:s({originalSource:`{
  args: {
    color: 'default',
    bordered: true
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['success', 'processing', 'default', 'error', 'warning']
    }
  }
}`},(i=(p=t.parameters)==null?void 0:p.docs)==null?void 0:i.source)})});const b=["Primary"],O=Object.freeze(Object.defineProperty({__proto__:null,Primary:t,__namedExportsOrder:b,default:_},Symbol.toStringTag,{value:"Module"}));export{O as T,_ as m};
