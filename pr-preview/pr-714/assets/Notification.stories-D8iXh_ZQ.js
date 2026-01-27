import{j as n,aO as c,i}from"./iframe-D7Ys59RG.js";const p={title:"Components/Not Prod Ready/Feedback/Notification",component:c,args:{type:"info",children:n.jsx(i,{type:"primary",children:"Show Notification"}),message:"Message",description:"Description goes here",duration:0,btn:void 0,className:void 0,closeIcon:!0,icon:void 0,key:void 0,placement:"topRight",style:void 0,role:"alert",onClick:function(){alert("Notification Clicked")},onClose:function(){alert("Notification Closed")}},argTypes:{role:{control:"select",options:["alert","status"]},type:{control:"select",options:["info","warning","success","error"]}}},r={},e={args:{duration:1}},o={args:{type:"info"}},s={args:{type:"warning"}},a={args:{type:"success"}},t={args:{type:"error"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    duration: 1
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'warning'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'error'
  }
}`,...t.parameters?.docs?.source}}};const d=["Primary","Short","Info","Warning","Success","Error"],u=Object.freeze(Object.defineProperty({__proto__:null,Error:t,Info:o,Primary:r,Short:e,Success:a,Warning:s,__namedExportsOrder:d,default:p},Symbol.toStringTag,{value:"Module"}));export{u as N,p as m};
