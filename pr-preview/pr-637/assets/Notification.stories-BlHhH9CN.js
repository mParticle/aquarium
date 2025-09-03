var O=Object.defineProperty,R=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var u=(a,o,s)=>o in a?O(a,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[o]=s,r=(a,o)=>{for(var s in o||(o={}))T.call(o,s)&&u(a,s,o[s]);if(d)for(var s of d(o))W.call(o,s)&&u(a,s,o[s]);return a},e=(a,o)=>R(a,M(o));import{j as z}from"./jsx-runtime-BcCOBRXo.js";import{$ as B,g as D}from"./NavigationItemsService-ATkgRqTp.js";const F={title:"Components/Not Prod Ready/Feedback/Notification",component:B,args:{type:"info",children:z.jsx(D,{type:"primary",children:"Show Notification"}),message:"Message",description:"Description goes here",duration:0,btn:void 0,className:void 0,closeIcon:!0,icon:void 0,key:void 0,placement:"topRight",style:void 0,role:"alert",onClick:function(){alert("Notification Clicked")},onClose:function(){alert("Notification Closed")}},argTypes:{role:{control:"select",options:["alert","status"]},type:{control:"select",options:["info","warning","success","error"]}}},t={},n={args:{duration:1}},c={args:{type:"info"}},i={args:{type:"warning"}},p={args:{type:"success"}},m={args:{type:"error"}};var l,g,y;t.parameters=e(r({},t.parameters),{docs:e(r({},(l=t.parameters)==null?void 0:l.docs),{source:r({originalSource:"{}"},(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source)})});var f,S,N;n.parameters=e(r({},n.parameters),{docs:e(r({},(f=n.parameters)==null?void 0:f.docs),{source:r({originalSource:`{
  args: {
    duration: 1
  }
}`},(N=(S=n.parameters)==null?void 0:S.docs)==null?void 0:N.source)})});var h,v,_;c.parameters=e(r({},c.parameters),{docs:e(r({},(h=c.parameters)==null?void 0:h.docs),{source:r({originalSource:`{
  args: {
    type: 'info'
  }
}`},(_=(v=c.parameters)==null?void 0:v.docs)==null?void 0:_.source)})});var b,j,x;i.parameters=e(r({},i.parameters),{docs:e(r({},(b=i.parameters)==null?void 0:b.docs),{source:r({originalSource:`{
  args: {
    type: 'warning'
  }
}`},(x=(j=i.parameters)==null?void 0:j.docs)==null?void 0:x.source)})});var C,k,w;p.parameters=e(r({},p.parameters),{docs:e(r({},(C=p.parameters)==null?void 0:C.docs),{source:r({originalSource:`{
  args: {
    type: 'success'
  }
}`},(w=(k=p.parameters)==null?void 0:k.docs)==null?void 0:w.source)})});var E,P,I;m.parameters=e(r({},m.parameters),{docs:e(r({},(E=m.parameters)==null?void 0:E.docs),{source:r({originalSource:`{
  args: {
    type: 'error'
  }
}`},(I=(P=m.parameters)==null?void 0:P.docs)==null?void 0:I.source)})});const $=["Primary","Short","Info","Warning","Success","Error"],H=Object.freeze(Object.defineProperty({__proto__:null,Error:m,Info:c,Primary:t,Short:n,Success:p,Warning:i,__namedExportsOrder:$,default:F},Symbol.toStringTag,{value:"Module"}));export{H as N,F as m};
