var h=Object.defineProperty,b=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var p=(s,e,o)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o,r=(s,e)=>{for(var o in e||(e={}))z.call(e,o)&&p(s,o,e[o]);if(m)for(var o of m(e))E.call(e,o)&&p(s,o,e[o]);return s},t=(s,e)=>b(s,j(e));import{j as P}from"./jsx-runtime-CS-_a2eV.js";import{a3 as _,b as w}from"./GlobalNavigation-Be6idjSk.js";import"./index-Ca44TZ0D.js";import"./ConfigProvider-aHzMMMgW.js";import"./LightTheme-BZ07JyGW.js";import"./index-BxrKW6hI.js";import"./useToken-Dnjd_Rha.js";import"./extends-CCbyfPlC.js";import"./Serializer-DsJDcYJc.js";import"./index-DFiuTWKW.js";import"./isNativeReflectConstruct-DQQXTUsj.js";import"./row-BOpWxek0.js";import"./_baseClone-BwI25-yt.js";import"./_getPrototype-fDUIJvdn.js";import"./dayjs.min-kn1EBQqj.js";import"./customParseFormat-CECOPgIS.js";const V={title:"Components/Feedback/Message",component:_,args:{children:P.jsx(w,{children:"Show Message"}),className:void 0,content:"Message content",duration:3,icon:void 0,key:void 0,style:void 0,onClick:void 0,onClose:void 0}},a={},n={args:{duration:1}},c={args:{style:{fontSize:"24px",color:"#959ee6"}}},i={args:{onClick:()=>{alert("Message clicked")}}};var d,l,u;a.parameters=t(r({},a.parameters),{docs:t(r({},(d=a.parameters)==null?void 0:d.docs),{source:r({originalSource:"{}"},(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source)})});var g,S,k;n.parameters=t(r({},n.parameters),{docs:t(r({},(g=n.parameters)==null?void 0:g.docs),{source:r({originalSource:`{
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
