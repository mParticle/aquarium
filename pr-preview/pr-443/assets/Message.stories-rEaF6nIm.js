var h=Object.defineProperty,b=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var p=(s,e,o)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o,r=(s,e)=>{for(var o in e||(e={}))z.call(e,o)&&p(s,o,e[o]);if(m)for(var o of m(e))B.call(e,o)&&p(s,o,e[o]);return s},t=(s,e)=>b(s,j(e));import{j as E}from"./jsx-runtime-BcCOBRXo.js";import{a6 as P,B as _}from"./GlobalNavigation-qsnRifS4.js";import"./index-CNk6hRaE.js";import"./ConfigProvider-CEh3sHE6.js";import"./LightTheme-DxveuNKr.js";import"./index-CqBomLS8.js";import"./useToken-C-GAQQ-5.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CYew8PZR.js";import"./row-B98CqS5b.js";import"./_baseClone-BjCwUuX-.js";import"./_getPrototype-CAOE_2rY.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";const V={title:"Components/Feedback/Message",component:P,args:{children:E.jsx(_,{children:"Show Message"}),className:void 0,content:"Message content",duration:3,icon:void 0,key:void 0,style:void 0,onClick:void 0,onClose:void 0}},a={},n={args:{duration:1}},c={args:{style:{fontSize:"24px",color:"#959ee6"}}},i={args:{onClick:()=>{alert("Message clicked")}}};var d,l,u;a.parameters=t(r({},a.parameters),{docs:t(r({},(d=a.parameters)==null?void 0:d.docs),{source:r({originalSource:"{}"},(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source)})});var g,S,k;n.parameters=t(r({},n.parameters),{docs:t(r({},(g=n.parameters)==null?void 0:g.docs),{source:r({originalSource:`{
  args: {
    duration: 1
  }
}`},(k=(S=n.parameters)==null?void 0:S.docs)==null?void 0:k.source)})});var C,y,x;c.parameters=t(r({},c.parameters),{docs:t(r({},(C=c.parameters)==null?void 0:C.docs),{source:r({originalSource:`{
  args: {
    style: {
      fontSize: '24px',
      color: '#959ee6'
    }
  }
}`},(x=(y=c.parameters)==null?void 0:y.docs)==null?void 0:x.source)})});var v,M,f;i.parameters=t(r({},i.parameters),{docs:t(r({},(v=i.parameters)==null?void 0:v.docs),{source:r({originalSource:`{
  args: {
    onClick: () => {
      alert('Message clicked');
    }
  }
}`},(f=(M=i.parameters)==null?void 0:M.docs)==null?void 0:f.source)})});const W=["Primary","Short","CustomStyle","Clickable"];export{i as Clickable,c as CustomStyle,a as Primary,n as Short,W as __namedExportsOrder,V as default};
