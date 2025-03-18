var S=Object.defineProperty,b=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var i=(e,r,o)=>r in e?S(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,t=(e,r)=>{for(var o in r||(r={}))F.call(r,o)&&i(e,o,r[o]);if(n)for(var o of n(r))x.call(r,o)&&i(e,o,r[o]);return e},a=(e,r)=>b(e,f(r));import{ab as C}from"./NavigationItemsService-B_w_oJmi.js";import"./jsx-runtime-BcCOBRXo.js";import"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-D9D95D_h.js";import"./useToken-D9toSmcO.js";import"./extends-CF3RwP-h.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-DBzvlRjn.js";const j={title:"Components/Not Prod Ready/General/FloatButton",component:C,args:{description:"Float Button",tooltip:"Tooltip Text",type:"primary",shape:"circle",href:"",target:"",badge:void 0,onClick:e=>{alert("Float Button Clicked!")}},argTypes:{shape:{control:"select",options:["circle","square"]},type:{control:"select",options:["default","primary"]}}},s={},p={args:{badge:{count:5}}},c={args:{shape:"square"}};var m,d,l;s.parameters=a(t({},s.parameters),{docs:a(t({},(m=s.parameters)==null?void 0:m.docs),{source:t({originalSource:"{}"},(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source)})});var u,g,y;p.parameters=a(t({},p.parameters),{docs:a(t({},(u=p.parameters)==null?void 0:u.docs),{source:t({originalSource:`{
  args: {
    badge: {
      count: 5
    }
  }
}`},(y=(g=p.parameters)==null?void 0:g.docs)==null?void 0:y.source)})});var h,B,q;c.parameters=a(t({},c.parameters),{docs:a(t({},(h=c.parameters)==null?void 0:h.docs),{source:t({originalSource:`{
  args: {
    shape: 'square'
  }
}`},(q=(B=c.parameters)==null?void 0:B.docs)==null?void 0:q.source)})});const w=["Primary","WithBadge","Square"];export{s as Primary,c as Square,p as WithBadge,w as __namedExportsOrder,j as default};
