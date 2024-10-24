var W=Object.defineProperty,_=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var u=(t,o,s)=>o in t?W(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s,r=(t,o)=>{for(var s in o||(o={}))D.call(o,s)&&u(t,s,o[s]);if(d)for(var s of d(o))F.call(o,s)&&u(t,s,o[s]);return t},e=(t,o)=>_(t,B(o));import{j as M}from"./jsx-runtime-BcCOBRXo.js";import{X as O,k as T}from"./GlobalNavigation-CBDGVYSC.js";import"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-C8Fpq1AK.js";import"./useToken-BceXVVM_.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-DBzvlRjn.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";const $={title:"Components/Feedback/Notification",component:O,args:{type:"info",children:M.jsx(T,{type:"primary",children:"Show Notification"}),message:"Message",description:"Description goes here",duration:0,btn:void 0,className:void 0,closeIcon:!0,icon:void 0,key:void 0,placement:"topRight",style:void 0,role:"alert",onClick:function(){alert("Notification Clicked")},onClose:function(){alert("Notification Closed")}},argTypes:{role:{control:"select",options:["alert","status"]},type:{control:"select",options:["info","warning","success","error"]}}},a={},n={args:{duration:1}},c={args:{type:"info"}},i={args:{type:"warning"}},p={args:{type:"success"}},m={args:{type:"error"}};var l,g,y;a.parameters=e(r({},a.parameters),{docs:e(r({},(l=a.parameters)==null?void 0:l.docs),{source:r({originalSource:"{}"},(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source)})});var f,S,h;n.parameters=e(r({},n.parameters),{docs:e(r({},(f=n.parameters)==null?void 0:f.docs),{source:r({originalSource:`{
  args: {
    duration: 1
  }
}`},(h=(S=n.parameters)==null?void 0:S.docs)==null?void 0:h.source)})});var N,k,v;c.parameters=e(r({},c.parameters),{docs:e(r({},(N=c.parameters)==null?void 0:N.docs),{source:r({originalSource:`{
  args: {
    type: 'info'
  }
}`},(v=(k=c.parameters)==null?void 0:k.docs)==null?void 0:v.source)})});var x,C,w;i.parameters=e(r({},i.parameters),{docs:e(r({},(x=i.parameters)==null?void 0:x.docs),{source:r({originalSource:`{
  args: {
    type: 'warning'
  }
}`},(w=(C=i.parameters)==null?void 0:C.docs)==null?void 0:w.source)})});var E,j,I;p.parameters=e(r({},p.parameters),{docs:e(r({},(E=p.parameters)==null?void 0:E.docs),{source:r({originalSource:`{
  args: {
    type: 'success'
  }
}`},(I=(j=p.parameters)==null?void 0:j.docs)==null?void 0:I.source)})});var b,P,R;m.parameters=e(r({},m.parameters),{docs:e(r({},(b=m.parameters)==null?void 0:b.docs),{source:r({originalSource:`{
  args: {
    type: 'error'
  }
}`},(R=(P=m.parameters)==null?void 0:P.docs)==null?void 0:R.source)})});const rr=["Primary","Short","Info","Warning","Success","Error"];export{m as Error,c as Info,a as Primary,n as Short,p as Success,i as Warning,rr as __namedExportsOrder,$ as default};
