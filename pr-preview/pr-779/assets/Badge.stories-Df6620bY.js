import{B as s,j as e,b as t,C as g,e as x,f as m,g as f,h as v}from"./iframe-DjyemrhT.js";const S={title:"Components/Data Display/Badge",component:s},r={args:{status:"success",text:"Active",dot:!1,variant:"default",shape:"pill",size:"md"},argTypes:{status:{control:"select",options:["success","processing","default","error","warning"]},dot:{control:"select",options:[!1,!0]},variant:{control:"select",options:["default","filled"]},shape:{control:"select",options:["pill","square"]},size:{control:"select",options:["sm","md","lg"]}},parameters:{controls:{exclude:/^(?!status|text|dot|variant|shape|size)/}}},n={render:()=>{const d=[{label:"Primary",value:g},{label:"Success",value:x},{label:"Warning",value:m},{label:"Error",value:f},{label:"Paused",value:v}];return e.jsx(t,{wrap:!0,size:"large",children:d.map(({label:a,value:p})=>e.jsx(s,{dot:!0,color:p,title:a},a))})}},l={argTypes:{status:{control:"select",options:["success","processing","default","error","warning"]}},render:()=>e.jsxs(t,{orientation:"horizontal",wrap:!0,size:"large",children:[e.jsx(s,{status:"success",text:"Success"}),e.jsx(s,{status:"error",text:"Error"}),e.jsx(s,{status:"default",text:"Paused"}),e.jsx(s,{status:"processing",text:"Processing"}),e.jsx(s,{status:"warning",text:"Warning"})]})},o={args:{dot:!0,status:"success",text:"Active"}},i={render:()=>e.jsxs(t,{wrap:!0,size:"middle",children:[e.jsx(s,{status:"success",text:"Success",variant:"filled"}),e.jsx(s,{status:"error",text:"Error",variant:"filled"}),e.jsx(s,{status:"default",text:"Paused",variant:"filled"}),e.jsx(s,{status:"processing",text:"Processing",variant:"filled"}),e.jsx(s,{status:"warning",text:"Warning",variant:"filled"})]})},c={render:()=>e.jsxs(t,{wrap:!0,size:"middle",children:[e.jsx(s,{status:"success",text:"Success",variant:"filled",shape:"square"}),e.jsx(s,{status:"error",text:"Error",variant:"filled",shape:"square"}),e.jsx(s,{status:"default",text:"Paused",variant:"filled",shape:"square"}),e.jsx(s,{status:"processing",text:"Processing",variant:"filled",shape:"square"}),e.jsx(s,{status:"warning",text:"Warning",variant:"filled",shape:"square"})]})},u={render:()=>{const d=[{label:"Success",status:"success"},{label:"Error",status:"error"},{label:"Warning",status:"warning"},{label:"Processing",status:"processing"},{label:"Paused",status:"default"}];return e.jsx(t,{orientation:"vertical",size:"large",children:d.map(({status:a})=>e.jsxs(t,{wrap:!0,size:"middle",align:"start",children:[e.jsx(s,{status:a,text:"Small",variant:"filled",size:"sm"}),e.jsx(s,{status:a,text:"Medium",variant:"filled",size:"md"}),e.jsx(s,{status:a,text:"Large",variant:"filled",size:"lg"})]},a))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'success',
    text: 'Active',
    dot: false,
    variant: 'default',
    shape: 'pill',
    size: 'md'
  },
  argTypes: {
    status: {
      control: 'select',
      options: ['success', 'processing', 'default', 'error', 'warning']
    },
    dot: {
      control: 'select',
      options: [false, true]
    },
    variant: {
      control: 'select',
      options: ['default', 'filled']
    },
    shape: {
      control: 'select',
      options: ['pill', 'square']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    }
  },
  parameters: {
    controls: {
      exclude: /^(?!status|text|dot|variant|shape|size)/
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
      value: ColorTextPlaceholder
    }] as const;
    return <Space wrap size="large">
        {colors.map(({
        label,
        value
      }) => <Badge dot key={label} color={value} title={label} />)}
      </Space>;
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    dot: true,
    status: 'success',
    text: 'Active'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Space wrap size="middle">
        <Badge status="success" text="Success" variant="filled" />
        <Badge status="error" text="Error" variant="filled" />
        <Badge status="default" text="Paused" variant="filled" />
        <Badge status="processing" text="Processing" variant="filled" />
        <Badge status="warning" text="Warning" variant="filled" />
      </Space>;
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Space wrap size="middle">
        <Badge status="success" text="Success" variant="filled" shape="square" />
        <Badge status="error" text="Error" variant="filled" shape="square" />
        <Badge status="default" text="Paused" variant="filled" shape="square" />
        <Badge status="processing" text="Processing" variant="filled" shape="square" />
        <Badge status="warning" text="Warning" variant="filled" shape="square" />
      </Space>;
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
    return <Space orientation="vertical" size="large">
        {statuses.map(({
        status
      }) => <Space key={status} wrap size="middle" align="start">
            <Badge status={status} text="Small" variant="filled" size="sm" />
            <Badge status={status} text="Medium" variant="filled" size="md" />
            <Badge status={status} text="Large" variant="filled" size="lg" />
          </Space>)}
      </Space>;
  }
}`,...u.parameters?.docs?.source}}};const h=["Playground","DotBadge","StatusBadge","WithText","FilledPill","FilledSquare","FilledSizes"],z=Object.freeze(Object.defineProperty({__proto__:null,DotBadge:n,FilledPill:i,FilledSizes:u,FilledSquare:c,Playground:r,StatusBadge:l,WithText:o,__namedExportsOrder:h,default:S},Symbol.toStringTag,{value:"Module"}));export{z as B,n as D,i as F,r as P,l as S,c as a,u as b};
