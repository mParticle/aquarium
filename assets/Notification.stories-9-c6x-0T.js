var W=Object.defineProperty,_=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var u=(t,e,s)=>e in t?W(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,r=(t,e)=>{for(var s in e||(e={}))D.call(e,s)&&u(t,s,e[s]);if(d)for(var s of d(e))F.call(e,s)&&u(t,s,e[s]);return t},o=(t,e)=>_(t,B(e));import{j as M}from"./jsx-runtime-CS-_a2eV.js";import{a5 as O,b as T}from"./GlobalNavigation-CTOqPsCG.js";import"./index-Ca44TZ0D.js";import"./ConfigProvider-aHzMMMgW.js";import"./LightTheme-BZ07JyGW.js";import"./index-BxrKW6hI.js";import"./useToken-Dnjd_Rha.js";import"./extends-CCbyfPlC.js";import"./Serializer-DsJDcYJc.js";import"./index-DFiuTWKW.js";import"./isNativeReflectConstruct-DQQXTUsj.js";import"./row-BOpWxek0.js";import"./_baseClone-BwI25-yt.js";import"./_getPrototype-fDUIJvdn.js";import"./dayjs.min-kn1EBQqj.js";import"./customParseFormat-CECOPgIS.js";const er={title:"Components/Feedback/Notification",component:O,args:{type:"info",children:M.jsx(T,{type:"primary",children:"Show Notification"}),message:"Message",description:"Description goes here",duration:0,btn:void 0,className:void 0,closeIcon:!0,icon:void 0,key:void 0,placement:"topRight",style:void 0,role:"alert",onClick:function(){alert("Notification Clicked")},onClose:function(){alert("Notification Closed")}},argTypes:{role:{control:"select",options:["alert","status"]},type:{control:"select",options:["info","warning","success","error"]}}},a={},n={args:{duration:1}},i={args:{type:"info"}},c={args:{type:"warning"}},p={args:{type:"success"}},m={args:{type:"error"}};var l,g,y;a.parameters=o(r({},a.parameters),{docs:o(r({},(l=a.parameters)==null?void 0:l.docs),{source:r({originalSource:"{}"},(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source)})});var f,S,h;n.parameters=o(r({},n.parameters),{docs:o(r({},(f=n.parameters)==null?void 0:f.docs),{source:r({originalSource:`{
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
}`},(w=(k=c.parameters)==null?void 0:k.docs)==null?void 0:w.source)})});var E,b,j;p.parameters=o(r({},p.parameters),{docs:o(r({},(E=p.parameters)==null?void 0:E.docs),{source:r({originalSource:`{
  args: {
    type: 'success'
  }
}`},(j=(b=p.parameters)==null?void 0:b.docs)==null?void 0:j.source)})});var I,P,R;m.parameters=o(r({},m.parameters),{docs:o(r({},(I=m.parameters)==null?void 0:I.docs),{source:r({originalSource:`{
  args: {
    type: 'error'
  }
}`},(R=(P=m.parameters)==null?void 0:P.docs)==null?void 0:R.source)})});const sr=["Primary","Short","Info","Warning","Success","Error"];export{m as Error,i as Info,a as Primary,n as Short,p as Success,c as Warning,sr as __namedExportsOrder,er as default};
