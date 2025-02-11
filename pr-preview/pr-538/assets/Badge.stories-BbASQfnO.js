var w=Object.defineProperty,E=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var g=(o,t,r)=>t in o?w(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r,a=(o,t)=>{for(var r in t||(t={}))D.call(t,r)&&g(o,r,t[r]);if(d)for(var r of d(t))_.call(t,r)&&g(o,r,t[r]);return o},c=(o,t)=>E(o,h(t));import{j as s}from"./jsx-runtime-BcCOBRXo.js";import{B as e,C as v,b as p}from"./ChartColors-DMlX28qH.js";import{E as P}from"./ExampleStory-mtr-LWJv.js";import"./_baseClone-DBzvlRjn.js";const T={title:"Components/Data Display/Badge",component:e},n={args:{dot:!0,color:v}},u={argTypes:{status:{control:"select",options:["success","processing","default","error","warning"]}},render:()=>s.jsxs(P,{title:"Standalone badge with status.",children:[s.jsxs(p,{children:[s.jsx(e,{status:"success"}),s.jsx(e,{status:"error"}),s.jsx(e,{status:"default"}),s.jsx(e,{status:"processing"}),s.jsx(e,{status:"warning"})]}),s.jsx("br",{}),s.jsxs(p,{direction:"vertical",children:[s.jsx(e,{status:"success",text:"Success"}),s.jsx(e,{status:"error",text:"Error"}),s.jsx(e,{status:"default",text:"Default"}),s.jsx(e,{status:"processing",text:"Processing"}),s.jsx(e,{status:"warning",text:"Warning"})]})]})},i={args:{dot:!0,status:"success",text:"Active"}};var l,x,m;n.parameters=c(a({},n.parameters),{docs:c(a({},(l=n.parameters)==null?void 0:l.docs),{source:a({originalSource:`{
  args: {
    dot: true,
    color: ColorPrimary
  }
}`},(m=(x=n.parameters)==null?void 0:x.docs)==null?void 0:m.source)})});var S,B,j;u.parameters=c(a({},u.parameters),{docs:c(a({},(S=u.parameters)==null?void 0:S.docs),{source:a({originalSource:`{
  argTypes: {
    status: {
      control: 'select',
      options: ['success', 'processing', 'default', 'error', 'warning']
    }
  },
  render: () => {
    return <ExampleStory title="Standalone badge with status.">
        <Space>
          <Badge status="success" />
          <Badge status="error" />
          <Badge status="default" />
          <Badge status="processing" />
          <Badge status="warning" />
        </Space>
        <br />
        <Space direction="vertical">
          <Badge status="success" text="Success" />
          <Badge status="error" text="Error" />
          <Badge status="default" text="Default" />
          <Badge status="processing" text="Processing" />
          <Badge status="warning" text="Warning" />
        </Space>
      </ExampleStory>;
  }
}`},(j=(B=u.parameters)==null?void 0:B.docs)==null?void 0:j.source)})});var f,y,b;i.parameters=c(a({},i.parameters),{docs:c(a({},(f=i.parameters)==null?void 0:f.docs),{source:a({originalSource:`{
  args: {
    dot: true,
    status: 'success',
    text: 'Active'
  }
}`},(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source)})});const C=["DotBadge","StatusBadge","WithText"],R=Object.freeze(Object.defineProperty({__proto__:null,DotBadge:n,StatusBadge:u,WithText:i,__namedExportsOrder:C,default:T},Symbol.toStringTag,{value:"Module"}));export{R as B,n as D,u as S};
