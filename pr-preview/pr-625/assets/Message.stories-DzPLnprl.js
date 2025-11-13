var b=Object.defineProperty,_=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var d=(o,s,r)=>s in o?b(o,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[s]=r,e=(o,s)=>{for(var r in s||(s={}))j.call(s,r)&&d(o,r,s[r]);if(l)for(var r of l(s))P.call(s,r)&&d(o,r,s[r]);return o},a=(o,s)=>_(o,h(s));import{j as z}from"./jsx-runtime-C9TrHvcC.js";import{H as O,e as E}from"./NavigationItemsService-BxVPGtX7.js";const w={title:"Components/Feedback/Message",component:O,args:{children:z.jsx(E,{children:"Show Message"}),className:void 0,content:"Message content",duration:3,icon:void 0,key:void 0,style:void 0,onClick:void 0,onClose:void 0}},t={args:{type:"success"}},n={args:{duration:1}},c={args:{style:{fontSize:"24px",color:"#959ee6"}}},i={args:{onClick:()=>{alert("Message clicked")}}};var m,p,u;t.parameters=a(e({},t.parameters),{docs:a(e({},(m=t.parameters)==null?void 0:m.docs),{source:e({originalSource:`{
  args: {
    type: 'success'
  }
}`},(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source)})});var g,S,y;n.parameters=a(e({},n.parameters),{docs:a(e({},(g=n.parameters)==null?void 0:g.docs),{source:e({originalSource:`{
  args: {
    duration: 1
  }
}`},(y=(S=n.parameters)==null?void 0:S.docs)==null?void 0:y.source)})});var k,C,M;c.parameters=a(e({},c.parameters),{docs:a(e({},(k=c.parameters)==null?void 0:k.docs),{source:e({originalSource:`{
  args: {
    style: {
      fontSize: '24px',
      color: '#959ee6'
    }
  }
}`},(M=(C=c.parameters)==null?void 0:C.docs)==null?void 0:M.source)})});var f,v,x;i.parameters=a(e({},i.parameters),{docs:a(e({},(f=i.parameters)==null?void 0:f.docs),{source:e({originalSource:`{
  args: {
    onClick: () => {
      alert('Message clicked');
    }
  }
}`},(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source)})});const B=["Primary","Short","CustomStyle","Clickable"],R=Object.freeze(Object.defineProperty({__proto__:null,Clickable:i,CustomStyle:c,Primary:t,Short:n,__namedExportsOrder:B,default:w},Symbol.toStringTag,{value:"Module"}));export{R as M,t as P};
