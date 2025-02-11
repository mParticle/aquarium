var b=Object.defineProperty,T=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var c=(a,t,r)=>t in a?b(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,o=(a,t)=>{for(var r in t||(t={}))f.call(t,r)&&c(a,r,t[r]);if(p)for(var r of p(t))v.call(t,r)&&c(a,r,t[r]);return a},s=(a,t)=>T(a,j(t));import{j as e}from"./jsx-runtime-BcCOBRXo.js";import{X as F,I as z,f as u,g as l}from"./UserPreferences-CFgoWLE1.js";import"./_baseClone-DBzvlRjn.js";const B={title:"Components/Feedback/Result",component:F,args:{}},n={args:{icon:e.jsx(z,{name:"premium",variant:"duo-tone",size:"xxxxl",color:"brand"}),title:e.jsxs(e.Fragment,{children:[e.jsx(u.Text,{type:"secondary",size:"lg",strong:!0,children:"Premium Feature."}),e.jsx("br",{}),e.jsx(u.Title,{level:2,children:"Achieve next-level personalization with Predictive Attributes"})]}),extra:e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"primary",children:"Start Free Trial"}),e.jsx(l,{type:"default",children:"Learn More"})]})}},i={args:{status:"error",title:"We were unable to load the prediction details.",subTitle:e.jsxs(e.Fragment,{children:["Please"," ",e.jsx(l,{type:"link",style:{padding:0},children:"refresh the page"})," ","to try again. If the problem persists, ",e.jsx("a",{children:"contact support"}),"."]})}};var d,m,x;n.parameters=s(o({},n.parameters),{docs:s(o({},(d=n.parameters)==null?void 0:d.docs),{source:o({originalSource:`{
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
}`},(x=(m=n.parameters)==null?void 0:m.docs)==null?void 0:x.source)})});var g,y,h;i.parameters=s(o({},i.parameters),{docs:s(o({},(g=i.parameters)==null?void 0:g.docs),{source:o({originalSource:`{
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
}`},(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source)})});const I=["Info","Error"],w=Object.freeze(Object.defineProperty({__proto__:null,Error:i,Info:n,__namedExportsOrder:I,default:B},Symbol.toStringTag,{value:"Module"}));export{w as R,B as m};
