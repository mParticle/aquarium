var S=Object.defineProperty,b=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var i=(e,r,t)=>r in e?S(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,o=(e,r)=>{for(var t in r||(r={}))F.call(r,t)&&i(e,t,r[t]);if(n)for(var t of n(r))x.call(r,t)&&i(e,t,r[t]);return e},a=(e,r)=>b(e,f(r));import{ab as C}from"./GlobalNavigation-BBrMXD8g.js";import"./jsx-runtime-BcCOBRXo.js";import"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-D9D95D_h.js";import"./useToken-D9toSmcO.js";import"./extends-CF3RwP-h.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-DBzvlRjn.js";const z={title:"Components/General/FloatButton",component:C,args:{description:"Float Button",tooltip:"Tooltip Text",type:"primary",shape:"circle",href:"",target:"",badge:void 0,onClick:e=>{alert("Float Button Clicked!")}},argTypes:{shape:{control:"select",options:["circle","square"]},type:{control:"select",options:["default","primary"]}}},s={},p={args:{badge:{count:5}}},c={args:{shape:"square"}};var m,l,u;s.parameters=a(o({},s.parameters),{docs:a(o({},(m=s.parameters)==null?void 0:m.docs),{source:o({originalSource:"{}"},(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source)})});var d,g,h;p.parameters=a(o({},p.parameters),{docs:a(o({},(d=p.parameters)==null?void 0:d.docs),{source:o({originalSource:`{
  args: {
    badge: {
      count: 5
    }
  }
}`},(h=(g=p.parameters)==null?void 0:g.docs)==null?void 0:h.source)})});var y,B,q;c.parameters=a(o({},c.parameters),{docs:a(o({},(y=c.parameters)==null?void 0:y.docs),{source:o({originalSource:`{
  args: {
    shape: 'square'
  }
}`},(q=(B=c.parameters)==null?void 0:B.docs)==null?void 0:q.source)})});const A=["Primary","WithBadge","Square"];export{s as Primary,c as Square,p as WithBadge,A as __namedExportsOrder,z as default};
