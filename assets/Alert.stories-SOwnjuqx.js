var I=Object.defineProperty,x=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var l=(s,r,o)=>r in s?I(s,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[r]=o,e=(s,r)=>{for(var o in r||(r={}))_.call(r,o)&&l(s,o,r[o]);if(u)for(var o of u(r))C.call(r,o)&&l(s,o,r[o]);return s},t=(s,r)=>x(s,T(r));import{J as E}from"./NavigationItemsService-Dag8Roiz.js";const O={title:"Components/Feedback/Alert",component:E,args:{banner:!1,showIcon:!1,type:"info",onClose:s=>{alert("Alert On Close")},afterClose:()=>{console.log("Alert After Closed")}},argTypes:{type:{control:"select",options:["success","info","warning","error"]}}},a={args:{type:"info",message:"Note",description:"Audience size estimates are approximate."}},n={args:{type:"success",closable:!0,message:"The predictive attribute has been successfully created and now is being calculated."}},c={args:{message:"The default environment is Production.",description:"Ensure your audience's environment aligns with that of any parent audiences to avoid unexpected results.",type:"warning",showIcon:!0,closable:!0}},i={args:{description:"An error occurred creating the tracing configuration",type:"error",showIcon:!1}};var p,d,g;a.parameters=t(e({},a.parameters),{docs:t(e({},(p=a.parameters)==null?void 0:p.docs),{source:e({originalSource:`{
  args: {
    type: 'info',
    message: 'Note',
    description: 'Audience size estimates are approximate.'
  }
}`},(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.source)})});var m,f,y;n.parameters=t(e({},n.parameters),{docs:t(e({},(m=n.parameters)==null?void 0:m.docs),{source:e({originalSource:`{
  args: {
    type: 'success',
    closable: true,
    message: 'The predictive attribute has been successfully created and now is being calculated.'
  }
}`},(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source)})});var h,b,w;c.parameters=t(e({},c.parameters),{docs:t(e({},(h=c.parameters)==null?void 0:h.docs),{source:e({originalSource:`{
  args: {
    message: 'The default environment is Production.',
    description: "Ensure your audience's environment aligns with that of any parent audiences to avoid unexpected results.",
    type: 'warning',
    showIcon: true,
    closable: true
  }
}`},(w=(b=c.parameters)==null?void 0:b.docs)==null?void 0:w.source)})});var A,v,S;i.parameters=t(e({},i.parameters),{docs:t(e({},(A=i.parameters)==null?void 0:A.docs),{source:e({originalSource:`{
  args: {
    description: 'An error occurred creating the tracing configuration',
    type: 'error',
    showIcon: false
  }
}`},(S=(v=i.parameters)==null?void 0:v.docs)==null?void 0:S.source)})});const z=["Info","Success","Warning","Error"],N=Object.freeze(Object.defineProperty({__proto__:null,Error:i,Info:a,Success:n,Warning:c,__namedExportsOrder:z,default:O},Symbol.toStringTag,{value:"Module"}));export{N as A,O as m};
