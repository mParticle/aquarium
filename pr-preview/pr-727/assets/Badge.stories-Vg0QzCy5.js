var T=Object.defineProperty,A=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var m=(t,s,n)=>s in t?T(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,r=(t,s)=>{for(var n in s||(s={}))O.call(s,n)&&m(t,n,s[n]);if(x)for(var n of x(s))k.call(s,n)&&m(t,n,s[n]);return t},l=(t,s)=>A(t,M(s));import{j as e}from"./jsx-runtime-C9TrHvcC.js";import{B as a,a as i}from"./UnauthorizedTooltip-IVeG9WZ4.js";import"./ErrorStateIcon-FLGin3jk.js";import"./SuccessStateIcon-_M6njUXq.js";import"./WarningStateIcon-BB5mpqG0.js";import"./_baseClone-DwBCp-Ss.js";import"./index-3OP4wdng.js";import{l as I,m as L,h as R,C as G,n as H}from"./style-CvbdM76I.js";const J={title:"Components/Data Display/Badge",component:a},o={render:()=>{const t=[{label:"Primary",value:I},{label:"Success",value:L},{label:"Warning",value:R},{label:"Error",value:G},{label:"Paused",value:H}];return e.jsx(i,{wrap:!0,size:"large",children:t.map(({label:s,value:n})=>e.jsx(a,{dot:!0,color:n,title:s},s))})}},u={argTypes:{status:{control:"select",options:["success","processing","default","error","warning"]}},render:()=>e.jsxs(i,{direction:"horizontal",wrap:!0,size:"large",children:[e.jsx(a,{status:"success",text:"Success"}),e.jsx(a,{status:"error",text:"Error"}),e.jsx(a,{status:"default",text:"Paused"}),e.jsx(a,{status:"processing",text:"Processing"}),e.jsx(a,{status:"warning",text:"Warning"})]})},c={args:{dot:!0,status:"success",text:"Active"}},d={render:()=>e.jsxs(i,{wrap:!0,size:"middle",children:[e.jsx(a,{status:"success",text:"Success",variant:"filled"}),e.jsx(a,{status:"error",text:"Error",variant:"filled"}),e.jsx(a,{status:"default",text:"Paused",variant:"filled"}),e.jsx(a,{status:"processing",text:"Processing",variant:"filled"}),e.jsx(a,{status:"warning",text:"Warning",variant:"filled"})]})},g={render:()=>e.jsxs(i,{wrap:!0,size:"middle",children:[e.jsx(a,{status:"success",text:"Success",variant:"filled",shape:"square"}),e.jsx(a,{status:"error",text:"Error",variant:"filled",shape:"square"}),e.jsx(a,{status:"default",text:"Paused",variant:"filled",shape:"square"}),e.jsx(a,{status:"processing",text:"Processing",variant:"filled",shape:"square"}),e.jsx(a,{status:"warning",text:"Warning",variant:"filled",shape:"square"})]})},p={render:()=>{const t=[{label:"Success",status:"success"},{label:"Error",status:"error"},{label:"Warning",status:"warning"},{label:"Processing",status:"processing"},{label:"Paused",status:"default"}];return e.jsx(i,{direction:"vertical",size:"large",children:t.map(({status:s})=>e.jsxs(i,{wrap:!0,size:"middle",align:"start",children:[e.jsx(a,{status:s,text:"Small",variant:"filled",size:"sm"}),e.jsx(a,{status:s,text:"Medium",variant:"filled",size:"md"}),e.jsx(a,{status:s,text:"Large",variant:"filled",size:"lg"})]},s))})}};var f,S,v;o.parameters=l(r({},o.parameters),{docs:l(r({},(f=o.parameters)==null?void 0:f.docs),{source:r({originalSource:`{
  render: () => {
    const colors = [{
      label: 'Primary',
      value: ColorInfo
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
}`},(v=(S=o.parameters)==null?void 0:S.docs)==null?void 0:v.source)})});var B,j,b;u.parameters=l(r({},u.parameters),{docs:l(r({},(B=u.parameters)==null?void 0:B.docs),{source:r({originalSource:`{
  argTypes: {
    status: {
      control: 'select',
      options: ['success', 'processing', 'default', 'error', 'warning']
    }
  },
  render: () => {
    return <Space direction="horizontal" wrap size="large">
        <Badge status="success" text="Success" />
        <Badge status="error" text="Error" />
        <Badge status="default" text="Paused" />
        <Badge status="processing" text="Processing" />
        <Badge status="warning" text="Warning" />
      </Space>;
  }
}`},(b=(j=u.parameters)==null?void 0:j.docs)==null?void 0:b.source)})});var z,P,h;c.parameters=l(r({},c.parameters),{docs:l(r({},(z=c.parameters)==null?void 0:z.docs),{source:r({originalSource:`{
  args: {
    dot: true,
    status: 'success',
    text: 'Active'
  }
}`},(h=(P=c.parameters)==null?void 0:P.docs)==null?void 0:h.source)})});var w,E,W;d.parameters=l(r({},d.parameters),{docs:l(r({},(w=d.parameters)==null?void 0:w.docs),{source:r({originalSource:`{
  render: () => {
    return <Space wrap size="middle">
        <Badge status="success" text="Success" variant="filled" />
        <Badge status="error" text="Error" variant="filled" />
        <Badge status="default" text="Paused" variant="filled" />
        <Badge status="processing" text="Processing" variant="filled" />
        <Badge status="warning" text="Warning" variant="filled" />
      </Space>;
  }
}`},(W=(E=d.parameters)==null?void 0:E.docs)==null?void 0:W.source)})});var q,y,C;g.parameters=l(r({},g.parameters),{docs:l(r({},(q=g.parameters)==null?void 0:q.docs),{source:r({originalSource:`{
  render: () => {
    return <Space wrap size="middle">
        <Badge status="success" text="Success" variant="filled" shape="square" />
        <Badge status="error" text="Error" variant="filled" shape="square" />
        <Badge status="default" text="Paused" variant="filled" shape="square" />
        <Badge status="processing" text="Processing" variant="filled" shape="square" />
        <Badge status="warning" text="Warning" variant="filled" shape="square" />
      </Space>;
  }
}`},(C=(y=g.parameters)==null?void 0:y.docs)==null?void 0:C.source)})});var F,_,D;p.parameters=l(r({},p.parameters),{docs:l(r({},(F=p.parameters)==null?void 0:F.docs),{source:r({originalSource:`{
  render: () => {
    const statuses: Array<{
      label: string;
      status: 'success' | 'error' | 'warning' | 'processing' | 'default';
    }> = [{
      label: 'Success',
      status: 'success'
    }, {
      label: 'Error',
      status: 'error'
    }, {
      label: 'Warning',
      status: 'warning'
    }, {
      label: 'Processing',
      status: 'processing'
    }, {
      label: 'Paused',
      status: 'default'
    }];
    return <Space direction="vertical" size="large">
        {statuses.map(({
        status
      }) => <Space key={status} wrap size="middle" align="start">
            <Badge status={status} text="Small" variant="filled" size="sm" />
            <Badge status={status} text="Medium" variant="filled" size="md" />
            <Badge status={status} text="Large" variant="filled" size="lg" />
          </Space>)}
      </Space>;
  }
}`},(D=(_=p.parameters)==null?void 0:_.docs)==null?void 0:D.source)})});const K=["DotBadge","StatusBadge","WithText","FilledPill","FilledSquare","FilledSizes"],se=Object.freeze(Object.defineProperty({__proto__:null,DotBadge:o,FilledPill:d,FilledSizes:p,FilledSquare:g,StatusBadge:u,WithText:c,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{se as B,o as D,d as F,u as S,g as a,p as b};
