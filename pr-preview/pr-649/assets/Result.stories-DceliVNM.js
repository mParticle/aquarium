var z=Object.defineProperty,B=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var d=(s,t,a)=>t in s?z(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a,r=(s,t)=>{for(var a in t||(t={}))I.call(t,a)&&d(s,a,t[a]);if(u)for(var a of u(t))R.call(t,a)&&d(s,a,t[a]);return s},o=(s,t)=>B(s,w(t));import{j as e}from"./jsx-runtime-CVnACwZl.js";import{Y as _,a as A,T as m,f as p}from"./NavigationItemsService-4v_cF5PP.js";import"./ErrorStateIcon-BRZ77WZC.js";import"./_baseClone-CXAe4HsA.js";const E={title:"Components/Not Prod Ready/Feedback/Result",component:_,args:{}},n={args:{icon:e.jsx(A,{name:"premium",variant:"duo-tone",size:"xxxxl",color:"brand"}),title:e.jsxs(e.Fragment,{children:[e.jsx(m.Text,{type:"secondary",size:"lg",strong:!0,children:"Premium Feature."}),e.jsx("br",{}),e.jsx(m.Title,{level:2,children:"Achieve next-level personalization with Predictive Attributes"})]}),extra:e.jsxs(e.Fragment,{children:[e.jsx(p,{type:"primary",children:"Start Free Trial"}),e.jsx(p,{type:"default",children:"Learn More"})]})}},i={args:{status:"error",title:"We were unable to load the prediction details.",subTitle:e.jsxs(e.Fragment,{children:["Please"," ",e.jsx(p,{type:"link",style:{padding:0},children:"refresh the page"})," ","to try again. If the problem persists, ",e.jsx("a",{children:"contact support"}),"."]})}},c={args:{status:"success"}},l={args:{status:"warning"}};var g,y,x;n.parameters=o(r({},n.parameters),{docs:o(r({},(g=n.parameters)==null?void 0:g.docs),{source:r({originalSource:`{
  args: {
    icon: <Icon name="premium" variant="duo-tone" size="xxxxl" color="brand" />,
    title: <>
        <Typography.Text type="secondary" size="lg" strong>
          Premium Feature.
        </Typography.Text>
        <br />
        <Typography.Title level={2}>Achieve next-level personalization with Predictive Attributes</Typography.Title>
      </>,
    extra: <>
        <Button type="primary">Start Free Trial</Button>
        <Button type="default">Learn More</Button>
      </>
  }
}`},(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source)})});var h,T,b;i.parameters=o(r({},i.parameters),{docs:o(r({},(h=i.parameters)==null?void 0:h.docs),{source:r({originalSource:`{
  args: {
    status: 'error',
    title: 'We were unable to load the prediction details.',
    subTitle: <>
        Please{' '}
        <Button type="link" style={{
        padding: 0
      }}>
          refresh the page
        </Button>{' '}
        to try again. If the problem persists, <a>contact support</a>.
      </>
  }
}`},(b=(T=i.parameters)==null?void 0:T.docs)==null?void 0:b.source)})});var j,f,v;c.parameters=o(r({},c.parameters),{docs:o(r({},(j=c.parameters)==null?void 0:j.docs),{source:r({originalSource:`{
  args: {
    status: 'success'
  }
}`},(v=(f=c.parameters)==null?void 0:f.docs)==null?void 0:v.source)})});var P,S,F;l.parameters=o(r({},l.parameters),{docs:o(r({},(P=l.parameters)==null?void 0:P.docs),{source:r({originalSource:`{
  args: {
    status: 'warning'
  }
}`},(F=(S=l.parameters)==null?void 0:S.docs)==null?void 0:F.source)})});const W=["Info","Error","Primary","Warning"],N=Object.freeze(Object.defineProperty({__proto__:null,Error:i,Info:n,Primary:c,Warning:l,__namedExportsOrder:W,default:E},Symbol.toStringTag,{value:"Module"}));export{N as R,E as m};
