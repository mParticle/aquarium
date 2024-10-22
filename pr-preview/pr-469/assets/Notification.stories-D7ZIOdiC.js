var R=Object.defineProperty,W=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var u=(t,e,s)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,r=(t,e)=>{for(var s in e||(e={}))D.call(e,s)&&u(t,s,e[s]);if(d)for(var s of d(e))F.call(e,s)&&u(t,s,e[s]);return t},o=(t,e)=>W(t,_(e));import{j as M}from"./jsx-runtime-BcCOBRXo.js";import{a2 as O,B as T}from"./GlobalNavigation-DpExnP0a.js";import"./index-CNk6hRaE.js";import"./ConfigProvider-BRwLXval.js";import"./LightTheme-BtoaoHMG.js";import"./index-z2stgOKB.js";import"./useToken-5RYkiW09.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CYew8PZR.js";import"./row-DegztUsn.js";import"./_baseClone-BjCwUuX-.js";import"./_getPrototype-CAOE_2rY.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";const er={title:"Components/Feedback/Notification",component:O,args:{type:"info",children:M.jsx(T,{type:"primary",children:"Show Notification"}),message:"Message",description:"Description goes here",duration:0,btn:void 0,className:void 0,closeIcon:!0,icon:void 0,key:void 0,placement:"topRight",style:void 0,role:"alert",onClick:function(){alert("Notification Clicked")},onClose:function(){alert("Notification Closed")}},argTypes:{role:{control:"select",options:["alert","status"]},type:{control:"select",options:["info","warning","success","error"]}}},a={},n={args:{duration:1}},i={args:{type:"info"}},c={args:{type:"warning"}},p={args:{type:"success"}},m={args:{type:"error"}};var l,g,y;a.parameters=o(r({},a.parameters),{docs:o(r({},(l=a.parameters)==null?void 0:l.docs),{source:r({originalSource:"{}"},(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source)})});var f,S,h;n.parameters=o(r({},n.parameters),{docs:o(r({},(f=n.parameters)==null?void 0:f.docs),{source:r({originalSource:`{
  args: {
    duration: 1
  }
}`},(h=(S=n.parameters)==null?void 0:S.docs)==null?void 0:h.source)})});var N,v,x;i.parameters=o(r({},i.parameters),{docs:o(r({},(N=i.parameters)==null?void 0:N.docs),{source:r({originalSource:`{
  args: {
    type: 'info'
  }
}`},(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source)})});var C,k,w;c.parameters=o(r({},c.parameters),{docs:o(r({},(C=c.parameters)==null?void 0:C.docs),{source:r({originalSource:`{
  args: {
    type: 'warning'
  }
}`},(w=(k=c.parameters)==null?void 0:k.docs)==null?void 0:w.source)})});var E,j,I;p.parameters=o(r({},p.parameters),{docs:o(r({},(E=p.parameters)==null?void 0:E.docs),{source:r({originalSource:`{
  args: {
    type: 'success'
  }
}`},(I=(j=p.parameters)==null?void 0:j.docs)==null?void 0:I.source)})});var b,B,P;m.parameters=o(r({},m.parameters),{docs:o(r({},(b=m.parameters)==null?void 0:b.docs),{source:r({originalSource:`{
  args: {
    type: 'error'
  }
}`},(P=(B=m.parameters)==null?void 0:B.docs)==null?void 0:P.source)})});const sr=["Primary","Short","Info","Warning","Success","Error"];export{m as Error,i as Info,a as Primary,n as Short,p as Success,c as Warning,sr as __namedExportsOrder,er as default};
