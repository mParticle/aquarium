var W=Object.defineProperty,_=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var u=(t,o,s)=>o in t?W(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s,r=(t,o)=>{for(var s in o||(o={}))D.call(o,s)&&u(t,s,o[s]);if(d)for(var s of d(o))F.call(o,s)&&u(t,s,o[s]);return t},e=(t,o)=>_(t,B(o));import{j as M}from"./jsx-runtime-BcCOBRXo.js";import{N as O,g as T}from"./ChartColors-BWTk1_ST.js";import"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-D9D95D_h.js";import"./useToken-D9toSmcO.js";import"./extends-CF3RwP-h.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-DBzvlRjn.js";const X={title:"Components/Not Prod Ready/Feedback/Notification",component:O,args:{type:"info",children:M.jsx(T,{type:"primary",children:"Show Notification"}),message:"Message",description:"Description goes here",duration:0,btn:void 0,className:void 0,closeIcon:!0,icon:void 0,key:void 0,placement:"topRight",style:void 0,role:"alert",onClick:function(){alert("Notification Clicked")},onClose:function(){alert("Notification Closed")}},argTypes:{role:{control:"select",options:["alert","status"]},type:{control:"select",options:["info","warning","success","error"]}}},a={},n={args:{duration:1}},c={args:{type:"info"}},i={args:{type:"warning"}},p={args:{type:"success"}},m={args:{type:"error"}};var g,l,y;a.parameters=e(r({},a.parameters),{docs:e(r({},(g=a.parameters)==null?void 0:g.docs),{source:r({originalSource:"{}"},(y=(l=a.parameters)==null?void 0:l.docs)==null?void 0:y.source)})});var f,S,N;n.parameters=e(r({},n.parameters),{docs:e(r({},(f=n.parameters)==null?void 0:f.docs),{source:r({originalSource:`{
  args: {
    duration: 1
  }
}`},(N=(S=n.parameters)==null?void 0:S.docs)==null?void 0:N.source)})});var h,v,x;c.parameters=e(r({},c.parameters),{docs:e(r({},(h=c.parameters)==null?void 0:h.docs),{source:r({originalSource:`{
  args: {
    type: 'info'
  }
}`},(x=(v=c.parameters)==null?void 0:v.docs)==null?void 0:x.source)})});var C,k,w;i.parameters=e(r({},i.parameters),{docs:e(r({},(C=i.parameters)==null?void 0:C.docs),{source:r({originalSource:`{
  args: {
    type: 'warning'
  }
}`},(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source)})});var E,j,I;p.parameters=e(r({},p.parameters),{docs:e(r({},(E=p.parameters)==null?void 0:E.docs),{source:r({originalSource:`{
  args: {
    type: 'success'
  }
}`},(I=(j=p.parameters)==null?void 0:j.docs)==null?void 0:I.source)})});var P,R,b;m.parameters=e(r({},m.parameters),{docs:e(r({},(P=m.parameters)==null?void 0:P.docs),{source:r({originalSource:`{
  args: {
    type: 'error'
  }
}`},(b=(R=m.parameters)==null?void 0:R.docs)==null?void 0:b.source)})});const Y=["Primary","Short","Info","Warning","Success","Error"];export{m as Error,c as Info,a as Primary,n as Short,p as Success,i as Warning,Y as __namedExportsOrder,X as default};
