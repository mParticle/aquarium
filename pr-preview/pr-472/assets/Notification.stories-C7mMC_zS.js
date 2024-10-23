var W=Object.defineProperty,_=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var u=(t,e,s)=>e in t?W(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,r=(t,e)=>{for(var s in e||(e={}))D.call(e,s)&&u(t,s,e[s]);if(d)for(var s of d(e))F.call(e,s)&&u(t,s,e[s]);return t},o=(t,e)=>_(t,B(e));import{j as M}from"./jsx-runtime-BcCOBRXo.js";import{X as O,k as T}from"./GlobalNavigation-DgsMOKTE.js";import"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-4dnY1EES.js";import"./useToken-BceXVVM_.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-0c7aa-qo.js";import"./_baseClone-u1J3oOXU.js";import"./_getPrototype-CAOE_2rY.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";const rr={title:"Components/Feedback/Notification",component:O,args:{type:"info",children:M.jsx(T,{type:"primary",children:"Show Notification"}),message:"Message",description:"Description goes here",duration:0,btn:void 0,className:void 0,closeIcon:!0,icon:void 0,key:void 0,placement:"topRight",style:void 0,role:"alert",onClick:function(){alert("Notification Clicked")},onClose:function(){alert("Notification Closed")}},argTypes:{role:{control:"select",options:["alert","status"]},type:{control:"select",options:["info","warning","success","error"]}}},a={},n={args:{duration:1}},c={args:{type:"info"}},i={args:{type:"warning"}},p={args:{type:"success"}},m={args:{type:"error"}};var l,g,y;a.parameters=o(r({},a.parameters),{docs:o(r({},(l=a.parameters)==null?void 0:l.docs),{source:r({originalSource:"{}"},(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source)})});var f,S,h;n.parameters=o(r({},n.parameters),{docs:o(r({},(f=n.parameters)==null?void 0:f.docs),{source:r({originalSource:`{
  args: {
    duration: 1
  }
}`},(h=(S=n.parameters)==null?void 0:S.docs)==null?void 0:h.source)})});var N,k,v;c.parameters=o(r({},c.parameters),{docs:o(r({},(N=c.parameters)==null?void 0:N.docs),{source:r({originalSource:`{
  args: {
    type: 'info'
  }
}`},(v=(k=c.parameters)==null?void 0:k.docs)==null?void 0:v.source)})});var x,C,w;i.parameters=o(r({},i.parameters),{docs:o(r({},(x=i.parameters)==null?void 0:x.docs),{source:r({originalSource:`{
  args: {
    type: 'warning'
  }
}`},(w=(C=i.parameters)==null?void 0:C.docs)==null?void 0:w.source)})});var E,j,I;p.parameters=o(r({},p.parameters),{docs:o(r({},(E=p.parameters)==null?void 0:E.docs),{source:r({originalSource:`{
  args: {
    type: 'success'
  }
}`},(I=(j=p.parameters)==null?void 0:j.docs)==null?void 0:I.source)})});var b,P,R;m.parameters=o(r({},m.parameters),{docs:o(r({},(b=m.parameters)==null?void 0:b.docs),{source:r({originalSource:`{
  args: {
    type: 'error'
  }
}`},(R=(P=m.parameters)==null?void 0:P.docs)==null?void 0:R.source)})});const or=["Primary","Short","Info","Warning","Success","Error"];export{m as Error,c as Info,a as Primary,n as Short,p as Success,i as Warning,or as __namedExportsOrder,rr as default};
