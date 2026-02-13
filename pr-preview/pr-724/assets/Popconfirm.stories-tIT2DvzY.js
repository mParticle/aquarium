var h=Object.defineProperty,u=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var c=(t,e,r)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,a=(t,e)=>{for(var r in e||(e={}))g.call(e,r)&&c(t,r,e[r]);if(i)for(var r of i(e))y.call(e,r)&&c(t,r,e[r]);return t},s=(t,e)=>u(t,x(e));import{j as o}from"./jsx-runtime-C9TrHvcC.js";import{a0 as f,c as T,F as b,b as p}from"./UnauthorizedTooltip-CFBRFl5k.js";import"./ErrorStateIcon-Bn71kASD.js";import"./SuccessStateIcon-BBIR4N5L.js";import"./WarningStateIcon-DbHBKXbS.js";import"./_baseClone-DwBCp-Ss.js";import"./index-3OP4wdng.js";const j={title:"Components/Feedback/Popconfirm",component:f,args:{}},n={args:{title:o.jsx(o.Fragment,{children:o.jsxs(b,{gap:8,children:[o.jsx(p.Text,{strong:!0,children:"Audience Fault"}),o.jsx(p.Text,{children:"Dec 09 2024, 13:04:51"})]})}),description:"We were unable to forward this audience because the connection has been marked as faulted.",trigger:"hover",placement:"bottom",showCancel:!1,okText:"Resume",overlayInnerStyle:{maxWidth:"320px"},children:o.jsx(T,{children:"Show popconfirm"})}};var m,l,d;n.parameters=s(a({},n.parameters),{docs:s(a({},(m=n.parameters)==null?void 0:m.docs),{source:a({originalSource:`{
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
}`},(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source)})});const w=["Primary"],C=Object.freeze(Object.defineProperty({__proto__:null,Primary:n,__namedExportsOrder:w,default:j},Symbol.toStringTag,{value:"Module"}));export{C as P,j as m};
