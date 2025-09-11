var F=Object.defineProperty,L=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var l=(a,s,o)=>s in a?F(a,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[s]=o,e=(a,s)=>{for(var o in s||(s={}))R.call(s,o)&&l(a,o,s[o]);if(u)for(var o of u(s))T.call(s,o)&&l(a,o,s[o]);return a},r=(a,s)=>L(a,N(s));import{j as t}from"./jsx-runtime-CVnACwZl.js";import{M as q,f as E,b as A}from"./NavigationItemsService-ChoF_JX4.js";import"./ErrorStateIcon-BRZ77WZC.js";import"./_baseClone-CXAe4HsA.js";const D={title:"Components/Feedback/Message",component:q,args:{children:t.jsx(E,{children:"Show Message"}),className:void 0,content:"Message content",duration:3,icon:void 0,key:void 0,style:void 0,onClick:void 0,onClose:void 0}},n={args:{type:"success"}},c={args:{duration:1}},i={args:{duration:100}},d={args:{style:{fontSize:"24px",color:"#959ee6"}}},m={args:{onClick:()=>{alert("Message clicked")}}},p={args:{duration:100,content:t.jsx(t.Fragment,{children:t.jsxs(A,{size:"large",children:[t.jsx(E,{children:"Button"})," with Spacing"]})})}};var g,S,C;n.parameters=r(e({},n.parameters),{docs:r(e({},(g=n.parameters)==null?void 0:g.docs),{source:e({originalSource:`{
  args: {
    type: 'success'
  }
}`},(C=(S=n.parameters)==null?void 0:S.docs)==null?void 0:C.source)})});var y,h,x;c.parameters=r(e({},c.parameters),{docs:r(e({},(y=c.parameters)==null?void 0:y.docs),{source:e({originalSource:`{
  args: {
    duration: 1
  }
}`},(x=(h=c.parameters)==null?void 0:h.docs)==null?void 0:x.source)})});var M,k,f;i.parameters=r(e({},i.parameters),{docs:r(e({},(M=i.parameters)==null?void 0:M.docs),{source:e({originalSource:`{
  args: {
    duration: 100
  }
}`},(f=(k=i.parameters)==null?void 0:k.docs)==null?void 0:f.source)})});var j,b,v;d.parameters=r(e({},d.parameters),{docs:r(e({},(j=d.parameters)==null?void 0:j.docs),{source:e({originalSource:`{
  args: {
    style: {
      fontSize: '24px',
      color: '#959ee6'
    }
  }
}`},(v=(b=d.parameters)==null?void 0:b.docs)==null?void 0:v.source)})});var _,z,B;m.parameters=r(e({},m.parameters),{docs:r(e({},(_=m.parameters)==null?void 0:_.docs),{source:e({originalSource:`{
  args: {
    onClick: () => {
      alert('Message clicked');
    }
  }
}`},(B=(z=m.parameters)==null?void 0:z.docs)==null?void 0:B.source)})});var P,w,O;p.parameters=r(e({},p.parameters),{docs:r(e({},(P=p.parameters)==null?void 0:P.docs),{source:e({originalSource:`{
  args: {
    duration: 100,
    content: <>
        <Space size="large">
          <Button>Button</Button> with Spacing
        </Space>
      </>
  }
}`},(O=(w=p.parameters)==null?void 0:w.docs)==null?void 0:O.source)})});const G=["Primary","Short","Long","CustomStyle","Clickable","CustomContent"],U=Object.freeze(Object.defineProperty({__proto__:null,Clickable:m,CustomContent:p,CustomStyle:d,Long:i,Primary:n,Short:c,__namedExportsOrder:G,default:D},Symbol.toStringTag,{value:"Module"}));export{U as M,n as P};
