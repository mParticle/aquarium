var h=Object.defineProperty,u=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var i=(t,e,r)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,a=(t,e)=>{for(var r in e||(e={}))g.call(e,r)&&i(t,r,e[r]);if(c)for(var r of c(e))y.call(e,r)&&i(t,r,e[r]);return t},s=(t,e)=>u(t,x(e));import{j as n}from"./jsx-runtime-BcCOBRXo.js";import{V as f,F as T,f as p,g as b}from"./UserPreferences-G8oDgLcC.js";import"./_baseClone-DBzvlRjn.js";const j={title:"Components/Feedback/Popconfirm",component:f,args:{}},o={args:{title:n.jsx(n.Fragment,{children:n.jsxs(T,{gap:8,children:[n.jsx(p.Text,{strong:!0,children:"Audience Fault"}),n.jsx(p.Text,{children:"Dec 09 2024, 13:04:51"})]})}),description:"We were unable to forward this audience because the connection has been marked as faulted.",trigger:"hover",placement:"bottom",showCancel:!1,okText:"Resume",overlayInnerStyle:{maxWidth:"320px"},children:n.jsx(b,{children:"Show popconfirm"})}};var l,m,d;o.parameters=s(a({},o.parameters),{docs:s(a({},(l=o.parameters)==null?void 0:l.docs),{source:a({originalSource:`{
  args: {
    title: <>
        <Flex gap={8}>
          <Typography.Text strong>Audience Fault</Typography.Text>
          <Typography.Text>Dec 09 2024, 13:04:51</Typography.Text>
        </Flex>
      </>,
    description: 'We were unable to forward this audience because the connection has been marked as faulted.',
    trigger: 'hover',
    placement: 'bottom',
    showCancel: false,
    okText: 'Resume',
    overlayInnerStyle: {
      maxWidth: '320px'
    },
    children: <Button>Show popconfirm</Button>
  }
}`},(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source)})});const w=["Primary"],k=Object.freeze(Object.defineProperty({__proto__:null,Primary:o,__namedExportsOrder:w,default:j},Symbol.toStringTag,{value:"Module"}));export{k as P,j as m};
