var C=Object.defineProperty,P=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var d=(s,e,r)=>e in s?C(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,a=(s,e)=>{for(var r in e||(e={}))w.call(e,r)&&d(s,r,e[r]);if(i)for(var r of i(e))E.call(e,r)&&d(s,r,e[r]);return s},o=(s,e)=>P(s,f(e));import{j as t}from"./jsx-runtime-GRP_BLAX.js";import{B as l,a as y}from"./NavigationItemsService-Hr1be8SE.js";import"./ErrorStateIcon-Do_CM_GO.js";import"./SuccessStateIcon-CmToGiKI.js";import"./WarningStateIcon-M2kIOVZb.js";import"./_baseClone-BJQa_8Hx.js";import{l as W,m as h,h as z,C as _,n as D}from"./style-Cv9zhzF_.js";const T={title:"Components/Data Display/Badge",component:l},c={render:()=>{const s=[{label:"Primary",value:W},{label:"Success",value:h},{label:"Warning",value:z},{label:"Error",value:_},{label:"Paused",value:D}];return t.jsx(y,{wrap:!0,size:"large",children:s.map(({label:e,value:r})=>t.jsx(l,{dot:!0,color:r,title:e},e))})}},n={argTypes:{status:{control:"select",options:["success","processing","default","error","warning"]}},render:()=>t.jsxs(y,{orientation:"horizontal",wrap:!0,size:"large",children:[t.jsx(l,{status:"success",text:"Success"}),t.jsx(l,{status:"error",text:"Error"}),t.jsx(l,{status:"default",text:"Paused"}),t.jsx(l,{status:"processing",text:"Processing"}),t.jsx(l,{status:"warning",text:"Warning"})]})},u={args:{dot:!0,status:"success",text:"Active"}};var p,g,m;c.parameters=o(a({},c.parameters),{docs:o(a({},(p=c.parameters)==null?void 0:p.docs),{source:a({originalSource:`{
  render: () => {
    const colors = [{
      label: 'Primary',
      value: ColorPrimary
    }, {
      label: 'Success',
      value: ColorSuccess
    }, {
      label: 'Warning',
      value: ColorWarning
    }, {
      label: 'Error',
      value: ColorError
    }, {
      label: 'Paused',
      value: ColorBorderSecondary
    }] as const;
    return <Space wrap size="large">
        {colors.map(({
        label,
        value
      }) => <Badge dot key={label} color={value} title={label} />)}
      </Space>;
  }
}`},(m=(g=c.parameters)==null?void 0:g.docs)==null?void 0:m.source)})});var x,S,B;n.parameters=o(a({},n.parameters),{docs:o(a({},(x=n.parameters)==null?void 0:x.docs),{source:a({originalSource:`{
  argTypes: {
    status: {
      control: 'select',
      options: ['success', 'processing', 'default', 'error', 'warning']
    }
  },
  render: () => {
    return <Space orientation="horizontal" wrap size="large">
        <Badge status="success" text="Success" />
        <Badge status="error" text="Error" />
        <Badge status="default" text="Paused" />
        <Badge status="processing" text="Processing" />
        <Badge status="warning" text="Warning" />
      </Space>;
  }
}`},(B=(S=n.parameters)==null?void 0:S.docs)==null?void 0:B.source)})});var b,v,j;u.parameters=o(a({},u.parameters),{docs:o(a({},(b=u.parameters)==null?void 0:b.docs),{source:a({originalSource:`{
  args: {
    dot: true,
    status: 'success',
    text: 'Active'
  }
}`},(j=(v=u.parameters)==null?void 0:v.docs)==null?void 0:j.source)})});const O=["DotBadge","StatusBadge","WithText"],I=Object.freeze(Object.defineProperty({__proto__:null,DotBadge:c,StatusBadge:n,WithText:u,__namedExportsOrder:O,default:T},Symbol.toStringTag,{value:"Module"}));export{I as B,c as D,n as S};
