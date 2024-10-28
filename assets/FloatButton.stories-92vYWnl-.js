var S=Object.defineProperty,f=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var n=(e,r,t)=>r in e?S(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,o=(e,r)=>{for(var t in r||(r={}))b.call(r,t)&&n(e,t,r[t]);if(i)for(var t of i(r))x.call(r,t)&&n(e,t,r[t]);return e},a=(e,r)=>f(e,F(r));import{a2 as C}from"./GlobalNavigation-CqlaFCqC.js";import"./jsx-runtime-BcCOBRXo.js";import"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-C8Fpq1AK.js";import"./useToken-BceXVVM_.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-DBzvlRjn.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";const H={title:"Components/General/FloatButton",component:C,args:{description:"Float Button",tooltip:"Tooltip Text",type:"primary",shape:"circle",href:"",target:"",badge:void 0,onClick:e=>{alert("Float Button Clicked!")}},argTypes:{shape:{control:"select",options:["circle","square"]},type:{control:"select",options:["default","primary"]}}},s={},p={args:{badge:{count:5}}},c={args:{shape:"square"}};var m,l,u;s.parameters=a(o({},s.parameters),{docs:a(o({},(m=s.parameters)==null?void 0:m.docs),{source:o({originalSource:"{}"},(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source)})});var d,g,h;p.parameters=a(o({},p.parameters),{docs:a(o({},(d=p.parameters)==null?void 0:d.docs),{source:o({originalSource:`{
  args: {
    badge: {
      count: 5
    }
  }
}`},(h=(g=p.parameters)==null?void 0:g.docs)==null?void 0:h.source)})});var y,B,q;c.parameters=a(o({},c.parameters),{docs:a(o({},(y=c.parameters)==null?void 0:y.docs),{source:o({originalSource:`{
  args: {
    shape: 'square'
  }
}`},(q=(B=c.parameters)==null?void 0:B.docs)==null?void 0:q.source)})});const I=["Primary","WithBadge","Square"];export{s as Primary,c as Square,p as WithBadge,I as __namedExportsOrder,H as default};
