var h=Object.defineProperty,b=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var p=(s,r,o)=>r in s?h(s,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[r]=o,e=(s,r)=>{for(var o in r||(r={}))z.call(r,o)&&p(s,o,r[o]);if(m)for(var o of m(r))E.call(r,o)&&p(s,o,r[o]);return s},a=(s,r)=>b(s,j(r));import{j as P}from"./jsx-runtime-BcCOBRXo.js";import{a9 as _,g as w}from"./NavigationItemsService-BDA9pJrk.js";import"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-D9D95D_h.js";import"./useToken-D9toSmcO.js";import"./extends-CF3RwP-h.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-DBzvlRjn.js";const J={title:"Components/Feedback/Message",component:_,args:{children:P.jsx(w,{children:"Show Message"}),className:void 0,content:"Message content",duration:3,icon:void 0,key:void 0,style:void 0,onClick:void 0,onClose:void 0}},t={},n={args:{duration:1}},c={args:{style:{fontSize:"24px",color:"#959ee6"}}},i={args:{onClick:()=>{alert("Message clicked")}}};var d,l,u;t.parameters=a(e({},t.parameters),{docs:a(e({},(d=t.parameters)==null?void 0:d.docs),{source:e({originalSource:"{}"},(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source)})});var g,S,k;n.parameters=a(e({},n.parameters),{docs:a(e({},(g=n.parameters)==null?void 0:g.docs),{source:e({originalSource:`{
  args: {
    duration: 1
  }
}`},(k=(S=n.parameters)==null?void 0:S.docs)==null?void 0:k.source)})});var C,y,x;c.parameters=a(e({},c.parameters),{docs:a(e({},(C=c.parameters)==null?void 0:C.docs),{source:e({originalSource:`{
  args: {
    style: {
      fontSize: '24px',
      color: '#959ee6'
    }
  }
}`},(x=(y=c.parameters)==null?void 0:y.docs)==null?void 0:x.source)})});var v,M,f;i.parameters=a(e({},i.parameters),{docs:a(e({},(v=i.parameters)==null?void 0:v.docs),{source:e({originalSource:`{
  args: {
    onClick: () => {
      alert('Message clicked');
    }
  }
}`},(f=(M=i.parameters)==null?void 0:M.docs)==null?void 0:f.source)})});const K=["Primary","Short","CustomStyle","Clickable"];export{i as Clickable,c as CustomStyle,t as Primary,n as Short,K as __namedExportsOrder,J as default};
