var S=Object.defineProperty,f=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var n=(e,r,o)=>r in e?S(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,t=(e,r)=>{for(var o in r||(r={}))b.call(r,o)&&n(e,o,r[o]);if(i)for(var o of i(r))x.call(r,o)&&n(e,o,r[o]);return e},a=(e,r)=>f(e,F(r));import{a8 as C}from"./NavigationItemsService-5sJoM56V.js";import"./jsx-runtime-CVnACwZl.js";import"./index-3OP4wdng.js";import"./ErrorStateIcon-BEU0OB1a.js";import"./extends-CF3RwP-h.js";import"./presets-BrZHayqo.js";import"./Context-R5ee3nrF.js";import"./LightTheme-BtoaoHMG.js";import"./row-Bsm_WxsR.js";import"./useToken-C_i1q6Gz.js";import"./index-B-gr4m3q.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-CXAe4HsA.js";const A={title:"Components/Not Prod Ready/General/FloatButton",component:C,args:{description:"Float Button",tooltip:"Tooltip Text",type:"primary",shape:"circle",href:"",target:"",badge:void 0,onClick:e=>{alert("Float Button Clicked!")}},argTypes:{shape:{control:"select",options:["circle","square"]},type:{control:"select",options:["default","primary"]}}},s={},p={args:{badge:{count:5}}},c={args:{shape:"square"}};var m,d,l;s.parameters=a(t({},s.parameters),{docs:a(t({},(m=s.parameters)==null?void 0:m.docs),{source:t({originalSource:"{}"},(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source)})});var u,g,y;p.parameters=a(t({},p.parameters),{docs:a(t({},(u=p.parameters)==null?void 0:u.docs),{source:t({originalSource:`{
  args: {
    badge: {
      count: 5
    }
  }
}`},(y=(g=p.parameters)==null?void 0:g.docs)==null?void 0:y.source)})});var h,B,q;c.parameters=a(t({},c.parameters),{docs:a(t({},(h=c.parameters)==null?void 0:h.docs),{source:t({originalSource:`{
  args: {
    shape: 'square'
  }
}`},(q=(B=c.parameters)==null?void 0:B.docs)==null?void 0:q.source)})});const D=["Primary","WithBadge","Square"];export{s as Primary,c as Square,p as WithBadge,D as __namedExportsOrder,A as default};
