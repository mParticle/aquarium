var b=Object.defineProperty,g=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var n=(r,e,t)=>e in r?b(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,a=(r,e)=>{for(var t in e||(e={}))f.call(e,t)&&n(r,t,e[t]);if(i)for(var t of i(e))D.call(e,t)&&n(r,t,e[t]);return r},s=(r,e)=>g(r,T(e));import{Q as y}from"./ChartColors-B94s4zHg.js";import"./_baseClone-DBzvlRjn.js";import"./jsx-runtime-BcCOBRXo.js";import"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-D9D95D_h.js";import"./useToken-D9toSmcO.js";import"./extends-CF3RwP-h.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";const q={title:"Components/Data Entry/QueryItem/Text",component:y.Text,parameters:{docs:{description:{component:'This is the "Text" component of the QueryItem component group.'}}},args:{}},o={args:{text:"Default Text",disabled:!1}},m={args:{text:"Disabled Text",disabled:!0}};var p,d,c;o.parameters=s(a({},o.parameters),{docs:s(a({},(p=o.parameters)==null?void 0:p.docs),{source:a({originalSource:`{
  args: {
    text: 'Default Text',
    disabled: false
  }
}`},(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source)})});var l,u,x;m.parameters=s(a({},m.parameters),{docs:s(a({},(l=m.parameters)==null?void 0:l.docs),{source:a({originalSource:`{
  args: {
    text: 'Disabled Text',
    disabled: true
  }
}`},(x=(u=m.parameters)==null?void 0:u.docs)==null?void 0:x.source)})});const v=["Primary","Disabled"];export{m as Disabled,o as Primary,v as __namedExportsOrder,q as default};
