import{j as e,u as r,b as a,aL as m}from"./iframe-CAxsTqMS.js";const T={title:"Components/Data Display/Tag",component:p=>e.jsx(r,{...p,children:"Tag"}),parameters:{docs:{description:{component:`The Tag component displays small, labeled elements used to categorize, identify, or highlight content.
Tags are versatile for indicating types or other identifiers and can include text, icons, or color coding to enhance readability and organization.`}}}},o={args:{color:"default",bordered:!0,closable:!1,children:"Tag Label"},argTypes:{color:{control:"select",options:["default","success","processing","error","warning","magenta","blue","cyan","geekblue","gold","green","lime","orange","purple","red","volcano"]},bordered:{control:"select",options:[!1,!0]},closable:{control:"select",options:[!1,!0]}}},n={args:{color:"default",bordered:!0},argTypes:{color:{control:"select",options:["success","processing","default","error","warning"]}},render:()=>e.jsxs(a,{orientation:"vertical",children:[e.jsx(r,{color:"blue",children:"Prod"}),e.jsx(r,{color:"purple",children:"Dev"}),e.jsx(r,{color:"default",children:"Default"})]})},l={render:()=>e.jsxs(a,{size:[24,24],wrap:!0,children:[e.jsx(r,{bordered:!0,color:"default",children:"New"}),e.jsx(r,{bordered:!0,color:"default",children:"Beta"})]})},c={render:()=>e.jsxs(a,{size:[24,24],wrap:!0,children:[e.jsx(r,{bordered:!0,color:"success",children:"Strong"}),e.jsx(r,{bordered:!0,color:"warning",children:"Moderate"}),e.jsx(r,{bordered:!0,color:"error",children:"Weak"})]})},s={render:()=>{const p=[{color:"default",label:"Default"},{color:"magenta",label:"Magenta"},{color:"blue",label:"Blue"},{color:"cyan",label:"Cyan"},{color:"geekblue",label:"Geekblue"},{color:"gold",label:"Gold"},{color:"green",label:"Green"},{color:"lime",label:"Lime"},{color:"orange",label:"Orange"},{color:"purple",label:"Purple"},{color:"red",label:"Red"},{color:"volcano",label:"Volcano"}];return e.jsx(a,{size:[16,16],wrap:!0,children:p.map(b=>e.jsx(r,{bordered:!0,color:b.color,children:b.label},b.label))})}},t={render:()=>e.jsx(r,{color:"default",variant:"outlined",children:"Outlined Tag"})},d={parameters:{docs:{source:{state:"hidden"}}},render:()=>e.jsx(r,{bordered:!0,color:"default",icon:e.jsx(m,{}),children:"Tag with icon"})},u={render:()=>e.jsx(r,{bordered:!0,color:"default",closable:!0,children:"Closable Tag"})},i={render:()=>e.jsxs(a,{size:[16,16],children:[e.jsx(r.CheckableTag,{bordered:!0,checked:!0,children:"Checked Tag"}),e.jsx(r.CheckableTag,{bordered:!0,checked:!1,children:"Unchecked Tag"})]})},g={render:()=>e.jsxs(a,{size:[16,16],children:[e.jsx(r,{bordered:!0,color:"blue",children:"Prod"}),e.jsx(r,{bordered:!0,color:"purple",children:"Dev"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'default',
    bordered: true,
    closable: false,
    children: 'Tag Label'
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'success', 'processing', 'error', 'warning', 'magenta', 'blue', 'cyan', 'geekblue', 'gold', 'green', 'lime', 'orange', 'purple', 'red', 'volcano']
    },
    bordered: {
      control: 'select',
      options: [false, true]
    },
    closable: {
      control: 'select',
      options: [false, true]
    }
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'default',
    bordered: true
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['success', 'processing', 'default', 'error', 'warning']
    }
  },
  render: () => {
    return <Space orientation="vertical">
        <Tag color="blue">Prod</Tag>
        <Tag color="purple">Dev</Tag>
        <Tag color="default">Default</Tag>
      </Space>;
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Space size={[24, 24]} wrap>
        <Tag bordered color="default">
          New
        </Tag>
        <Tag bordered color="default">
          Beta
        </Tag>
      </Space>;
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Space size={[24, 24]} wrap>
        <Tag bordered color="success">
          Strong
        </Tag>
        <Tag bordered color="warning">
          Moderate
        </Tag>
        <Tag bordered color="error">
          Weak
        </Tag>
      </Space>;
  }
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const tags = [{
      color: 'default',
      label: 'Default'
    }, {
      color: 'magenta',
      label: 'Magenta'
    }, {
      color: 'blue',
      label: 'Blue'
    }, {
      color: 'cyan',
      label: 'Cyan'
    }, {
      color: 'geekblue',
      label: 'Geekblue'
    }, {
      color: 'gold',
      label: 'Gold'
    }, {
      color: 'green',
      label: 'Green'
    }, {
      color: 'lime',
      label: 'Lime'
    }, {
      color: 'orange',
      label: 'Orange'
    }, {
      color: 'purple',
      label: 'Purple'
    }, {
      color: 'red',
      label: 'Red'
    }, {
      color: 'volcano',
      label: 'Volcano'
    }] as const;
    return <Space size={[16, 16]} wrap>
        {tags.map(tag => <Tag key={tag.label} bordered color={tag.color}>
            {tag.label}
          </Tag>)}
      </Space>;
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Tag color="default" variant="outlined">
        Outlined Tag
      </Tag>;
  }
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        state: 'hidden'
      }
    }
  },
  render: () => {
    return <Tag bordered color="default" icon={<ClockCircleOutlined />}>
        Tag with icon
      </Tag>;
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Tag bordered color="default" closable>
        Closable Tag
      </Tag>;
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Space size={[16, 16]}>
        <Tag.CheckableTag bordered checked>
          Checked Tag
        </Tag.CheckableTag>
        <Tag.CheckableTag bordered checked={false}>
          Unchecked Tag
        </Tag.CheckableTag>
      </Space>;
  }
}`,...i.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Space size={[16, 16]}>
        <Tag bordered color="blue">
          Prod
        </Tag>
        <Tag bordered color="purple">
          Dev
        </Tag>
      </Space>;
  }
}`,...g.parameters?.docs?.source}}};const h=["Playground","Primary","InfoTags","HealthTags","TagOverviewCards","OutlinedTagExample","TagWithIconExample","ClosableTagExample","ClickableTagExample","EnvironmentTagsExample"],x=Object.freeze(Object.defineProperty({__proto__:null,ClickableTagExample:i,ClosableTagExample:u,EnvironmentTagsExample:g,HealthTags:c,InfoTags:l,OutlinedTagExample:t,Playground:o,Primary:n,TagOverviewCards:s,TagWithIconExample:d,__namedExportsOrder:h,default:T},Symbol.toStringTag,{value:"Module"}));export{u as C,g as E,c as H,l as I,t as O,o as P,x as T,s as a,d as b,i as c};
