var I=Object.defineProperty,x=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var l=(s,r,a)=>r in s?I(s,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[r]=a,e=(s,r)=>{for(var a in r||(r={}))T.call(r,a)&&l(s,a,r[a]);if(u)for(var a of u(r))_.call(r,a)&&l(s,a,r[a]);return s},o=(s,r)=>x(s,E(r));import{J as C}from"./NavigationItemsService-ygfc6o4a.js";const O={title:"Components/Feedback/Alert",component:C,args:{banner:!1,showIcon:!1,type:"info",onClose:s=>{alert("Alert On Close")},afterClose:()=>{console.log("Alert After Closed")}},argTypes:{type:{control:"select",options:["success","info","warning","error"]}}},t={args:{type:"info",message:"Note",description:"Audience size estimates are approximate."}},n={args:{type:"success",closable:!0,message:"The predictive attribute has been successfully created and now is being calculated."}},c={args:{message:"The default environment is Production.",description:"Ensure your audience's environment aligns with that of any parent audiences to avoid unexpected results.",type:"warning",showIcon:!0,closable:!0}},i={args:{message:"An error occurred creating the tracing configuration",type:"error",showIcon:!1}};var p,d,g;t.parameters=o(e({},t.parameters),{docs:o(e({},(p=t.parameters)==null?void 0:p.docs),{source:e({originalSource:`{
  args: {
    type: 'info',
    message: 'Note',
    description: 'Audience size estimates are approximate.'
  }
}`},(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source)})});var m,f,y;n.parameters=o(e({},n.parameters),{docs:o(e({},(m=n.parameters)==null?void 0:m.docs),{source:e({originalSource:`{
  args: {
    type: 'success',
    closable: true,
    message: 'The predictive attribute has been successfully created and now is being calculated.'
  }
}`},(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source)})});var h,b,w;c.parameters=o(e({},c.parameters),{docs:o(e({},(h=c.parameters)==null?void 0:h.docs),{source:e({originalSource:`{
  args: {
    message: 'The default environment is Production.',
    description: "Ensure your audience's environment aligns with that of any parent audiences to avoid unexpected results.",
    type: 'warning',
    showIcon: true,
    closable: true
  }
}`},(w=(b=c.parameters)==null?void 0:b.docs)==null?void 0:w.source)})});var A,S,v;i.parameters=o(e({},i.parameters),{docs:o(e({},(A=i.parameters)==null?void 0:A.docs),{source:e({originalSource:`{
  args: {
    message: 'An error occurred creating the tracing configuration',
    type: 'error',
    showIcon: false
  }
}`},(v=(S=i.parameters)==null?void 0:S.docs)==null?void 0:v.source)})});const z=["Info","Success","Warning","Error"],N=Object.freeze(Object.defineProperty({__proto__:null,Error:i,Info:t,Success:n,Warning:c,__namedExportsOrder:z,default:O},Symbol.toStringTag,{value:"Module"}));export{N as A,i as E,t as I,n as S};
