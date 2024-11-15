var b=Object.defineProperty,g=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var p=(r,e,t)=>e in r?b(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,o=(r,e)=>{for(var t in e||(e={}))f.call(e,t)&&p(r,t,e[t]);if(i)for(var t of i(e))D.call(e,t)&&p(r,t,e[t]);return r},a=(r,e)=>g(r,T(e));import{Q as y}from"./GlobalNavigation-vXHgDRim.js";import"./_baseClone-DBzvlRjn.js";import"./jsx-runtime-BcCOBRXo.js";import"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-C-vZtyW2.js";import"./useToken-B2DZIv7q.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";const z={title:"Components/Data Entry/QueryItem/Text",component:y.Text,parameters:{docs:{description:{component:'This is the "Text" component of the QueryItem component group.'}}},args:{}},s={args:{text:"Default Text",disabled:!1}},m={args:{text:"Disabled Text",disabled:!0}};var n,d,c;s.parameters=a(o({},s.parameters),{docs:a(o({},(n=s.parameters)==null?void 0:n.docs),{source:o({originalSource:`{
  args: {
    text: 'Default Text',
    disabled: false
  }
}`},(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source)})});var l,u,x;m.parameters=a(o({},m.parameters),{docs:a(o({},(l=m.parameters)==null?void 0:l.docs),{source:o({originalSource:`{
  args: {
    text: 'Disabled Text',
    disabled: true
  }
}`},(x=(u=m.parameters)==null?void 0:u.docs)==null?void 0:x.source)})});const A=["Primary","Disabled"];export{m as Disabled,s as Primary,A as __namedExportsOrder,z as default};
