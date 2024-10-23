var P=Object.defineProperty,R=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var i=(o,s,a)=>s in o?P(o,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[s]=a,r=(o,s)=>{for(var a in s||(s={}))b.call(s,a)&&i(o,a,s[a]);if(p)for(var a of p(s))k.call(s,a)&&i(o,a,s[a]);return o},t=(o,s)=>R(o,W(s));import{_ as C}from"./GlobalNavigation-5LNJCI2e.js";import"./jsx-runtime-BcCOBRXo.js";import"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-C8Fpq1AK.js";import"./useToken-BceXVVM_.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-DBzvlRjn.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";const L={title:"Components/Feedback/Result",component:C,args:{}},e={args:{status:"success"}},n={args:{status:"error"}},c={args:{status:"warning"}},m={args:{status:"info"}};var u,g,d;e.parameters=t(r({},e.parameters),{docs:t(r({},(u=e.parameters)==null?void 0:u.docs),{source:r({originalSource:`{
  args: {
    status: 'success'
  }
}`},(d=(g=e.parameters)==null?void 0:g.docs)==null?void 0:d.source)})});var l,f,S;n.parameters=t(r({},n.parameters),{docs:t(r({},(l=n.parameters)==null?void 0:l.docs),{source:r({originalSource:`{
  args: {
    status: 'error'
  }
}`},(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source)})});var E,_,w;c.parameters=t(r({},c.parameters),{docs:t(r({},(E=c.parameters)==null?void 0:E.docs),{source:r({originalSource:`{
  args: {
    status: 'warning'
  }
}`},(w=(_=c.parameters)==null?void 0:_.docs)==null?void 0:w.source)})});var x,y,I;m.parameters=t(r({},m.parameters),{docs:t(r({},(x=m.parameters)==null?void 0:x.docs),{source:r({originalSource:`{
  args: {
    status: 'info'
  }
}`},(I=(y=m.parameters)==null?void 0:y.docs)==null?void 0:I.source)})});const M=["Primary","Error","Warning","Info"];export{n as Error,m as Info,e as Primary,c as Warning,M as __namedExportsOrder,L as default};
