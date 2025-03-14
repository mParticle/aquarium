var z=Object.defineProperty,B=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var d=(a,t,s)=>t in a?z(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,r=(a,t)=>{for(var s in t||(t={}))w.call(t,s)&&d(a,s,t[s]);if(u)for(var s of u(t))R.call(t,s)&&d(a,s,t[s]);return a},o=(a,t)=>B(a,I(t));import{j as e}from"./jsx-runtime-BcCOBRXo.js";import{Y as _,I as A,f as m,g as p}from"./NavigationItemsService-CUhqNHHc.js";import"./_baseClone-DBzvlRjn.js";const E={title:"Components/Not Prod Ready/Feedback/Result",component:_,args:{}},n={args:{icon:e.jsx(A,{name:"premium",variant:"duo-tone",size:"xxxxl",color:"brand"}),title:e.jsxs(e.Fragment,{children:[e.jsx(m.Text,{type:"secondary",size:"lg",strong:!0,children:"Premium Feature."}),e.jsx("br",{}),e.jsx(m.Title,{level:2,children:"Achieve next-level personalization with Predictive Attributes"})]}),extra:e.jsxs(e.Fragment,{children:[e.jsx(p,{type:"primary",children:"Start Free Trial"}),e.jsx(p,{type:"default",children:"Learn More"})]})}},i={args:{status:"error",title:"We were unable to load the prediction details.",subTitle:e.jsxs(e.Fragment,{children:["Please"," ",e.jsx(p,{type:"link",style:{padding:0},children:"refresh the page"})," ","to try again. If the problem persists, ",e.jsx("a",{children:"contact support"}),"."]})}},c={args:{status:"success"}},l={args:{status:"warning"}};var g,y,x;n.parameters=o(r({},n.parameters),{docs:o(r({},(g=n.parameters)==null?void 0:g.docs),{source:r({originalSource:`{
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
}`},(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source)})});var h,b,T;i.parameters=o(r({},i.parameters),{docs:o(r({},(h=i.parameters)==null?void 0:h.docs),{source:r({originalSource:`{
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
}`},(T=(b=i.parameters)==null?void 0:b.docs)==null?void 0:T.source)})});var j,f,v;c.parameters=o(r({},c.parameters),{docs:o(r({},(j=c.parameters)==null?void 0:j.docs),{source:r({originalSource:`{
  args: {
    status: 'success'
  }
}`},(v=(f=c.parameters)==null?void 0:f.docs)==null?void 0:v.source)})});var P,S,F;l.parameters=o(r({},l.parameters),{docs:o(r({},(P=l.parameters)==null?void 0:P.docs),{source:r({originalSource:`{
  args: {
    status: 'warning'
  }
}`},(F=(S=l.parameters)==null?void 0:S.docs)==null?void 0:F.source)})});const W=["Info","Error","Primary","Warning"],C=Object.freeze(Object.defineProperty({__proto__:null,Error:i,Info:n,Primary:c,Warning:l,__namedExportsOrder:W,default:E},Symbol.toStringTag,{value:"Module"}));export{C as R,E as m};
