var h=Object.defineProperty,b=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var p=(s,e,o)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o,r=(s,e)=>{for(var o in e||(e={}))z.call(e,o)&&p(s,o,e[o]);if(m)for(var o of m(e))B.call(e,o)&&p(s,o,e[o]);return s},a=(s,e)=>b(s,j(e));import{j as E}from"./jsx-runtime-CVnACwZl.js";import{a1 as P,B as _}from"./GlobalNavigation-DxJ0bpmA.js";import"./index-3OP4wdng.js";import"./ConfigProvider-CLSyxc9v.js";import"./LightTheme-BtoaoHMG.js";import"./index-DWDMsSA9.js";import"./useToken-CXWLUMEq.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-B-gr4m3q.js";import"./isNativeReflectConstruct-D-r9sWlk.js";import"./row-BmOE1Szh.js";import"./_baseClone-B3DJrZ5i.js";import"./dayjs.min-FTgVsUrW.js";import"./customParseFormat-Dfkg1z51.js";const U={title:"Components/Feedback/Message",component:P,args:{children:E.jsx(_,{children:"Show Message"}),className:void 0,content:"Message content",duration:3,icon:void 0,key:void 0,style:void 0,onClick:void 0,onClose:void 0}},t={},n={args:{duration:1}},c={args:{style:{fontSize:"24px",color:"#959ee6"}}},i={args:{onClick:()=>{alert("Message clicked")}}};var d,l,u;t.parameters=a(r({},t.parameters),{docs:a(r({},(d=t.parameters)==null?void 0:d.docs),{source:r({originalSource:"{}"},(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source)})});var g,S,k;n.parameters=a(r({},n.parameters),{docs:a(r({},(g=n.parameters)==null?void 0:g.docs),{source:r({originalSource:`{
  args: {
    duration: 1
  }
}`},(k=(S=n.parameters)==null?void 0:S.docs)==null?void 0:k.source)})});var C,y,x;c.parameters=a(r({},c.parameters),{docs:a(r({},(C=c.parameters)==null?void 0:C.docs),{source:r({originalSource:`{
  args: {
    style: {
      fontSize: '24px',
      color: '#959ee6'
    }
  }
}`},(x=(y=c.parameters)==null?void 0:y.docs)==null?void 0:x.source)})});var v,M,f;i.parameters=a(r({},i.parameters),{docs:a(r({},(v=i.parameters)==null?void 0:v.docs),{source:r({originalSource:`{
  args: {
    onClick: () => {
      alert('Message clicked');
    }
  }
}`},(f=(M=i.parameters)==null?void 0:M.docs)==null?void 0:f.source)})});const V=["Primary","Short","CustomStyle","Clickable"];export{i as Clickable,c as CustomStyle,t as Primary,n as Short,V as __namedExportsOrder,U as default};
