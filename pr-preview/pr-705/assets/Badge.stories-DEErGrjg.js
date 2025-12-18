var E=Object.defineProperty,b=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var g=(o,s,r)=>s in o?E(o,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[s]=r,a=(o,s)=>{for(var r in s||(s={}))D.call(s,r)&&g(o,r,s[r]);if(d)for(var r of d(s))_.call(s,r)&&g(o,r,s[r]);return o},c=(o,s)=>b(o,h(s));import{j as t}from"./jsx-runtime-GRP_BLAX.js";import{B as e,a as p}from"./NavigationItemsService-X1c0Ak7F.js";import{i as v}from"./style-D_W9RJEq.js";import{E as P}from"./ExampleStory-pmgsDdhF.js";import"./ErrorStateIcon-CV-SFDiX.js";import"./SuccessStateIcon-BRdTivqB.js";import"./WarningStateIcon-Dr6311Ya.js";import"./_baseClone-BJQa_8Hx.js";const T={title:"Components/Data Display/Badge",component:e},n={args:{dot:!0,color:v}},u={argTypes:{status:{control:"select",options:["success","processing","default","error","warning"]}},render:()=>t.jsxs(P,{title:"Standalone badge with status.",children:[t.jsxs(p,{children:[t.jsx(e,{status:"success"}),t.jsx(e,{status:"error"}),t.jsx(e,{status:"default"}),t.jsx(e,{status:"processing"}),t.jsx(e,{status:"warning"})]}),t.jsx("br",{}),t.jsxs(p,{orientation:"vertical",children:[t.jsx(e,{status:"success",text:"Success"}),t.jsx(e,{status:"error",text:"Error"}),t.jsx(e,{status:"default",text:"Default"}),t.jsx(e,{status:"processing",text:"Processing"}),t.jsx(e,{status:"warning",text:"Warning"})]})]})},i={args:{dot:!0,status:"success",text:"Active"}};var l,m,x;n.parameters=c(a({},n.parameters),{docs:c(a({},(l=n.parameters)==null?void 0:l.docs),{source:a({originalSource:`{
  args: {
    dot: true,
    color: ColorPrimary
  }
}`},(x=(m=n.parameters)==null?void 0:m.docs)==null?void 0:x.source)})});var S,B,j;u.parameters=c(a({},u.parameters),{docs:c(a({},(S=u.parameters)==null?void 0:S.docs),{source:a({originalSource:`{
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
        <Space orientation="vertical">
          <Badge status="success" text="Success" />
          <Badge status="error" text="Error" />
          <Badge status="default" text="Default" />
          <Badge status="processing" text="Processing" />
          <Badge status="warning" text="Warning" />
        </Space>
      </ExampleStory>;
  }
}`},(j=(B=u.parameters)==null?void 0:B.docs)==null?void 0:j.source)})});var f,y,w;i.parameters=c(a({},i.parameters),{docs:c(a({},(f=i.parameters)==null?void 0:f.docs),{source:a({originalSource:`{
  args: {
    dot: true,
    status: 'success',
    text: 'Active'
  }
}`},(w=(y=i.parameters)==null?void 0:y.docs)==null?void 0:w.source)})});const W=["DotBadge","StatusBadge","WithText"],G=Object.freeze(Object.defineProperty({__proto__:null,DotBadge:n,StatusBadge:u,WithText:i,__namedExportsOrder:W,default:T},Symbol.toStringTag,{value:"Module"}));export{G as B,n as D,u as S};
