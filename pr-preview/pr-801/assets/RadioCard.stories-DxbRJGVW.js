import{$ as l,j as e,A as s,a0 as d,a1 as c,a2 as u,I as o}from"./iframe-DCYbTPIE.js";import{s as p,t as m,n as v}from"./Users01-DnpuUW-e.js";const r={backgroundColor:u,border:`1px solid ${c}`,color:d},g={title:"Components/Data Entry/RadioCard",component:l,parameters:{layout:"padded"}},t={tags:["!dev"],args:{value:"basic",orientation:"vertical",radioAlign:"start",options:[{value:"basic",title:"Basic plan $10/month",description:"Includes up to 10 users, 20 GB individual data and access to all features."},{value:"business",title:"Business plan $20/month",description:"Includes up to 20 users, 40 GB individual data and access to all features."},{value:"enterprise",title:"Enterprise plan $40/month",description:"Unlimited users, unlimited individual data and access to all features."}]},argTypes:{orientation:{control:"select",options:["vertical","horizontal"]},radioAlign:{control:"select",options:["start","center"]},radioPosition:{control:"select",options:["start","end"]}}},a={name:"With avatar and radio on the end",tags:["!dev"],args:{value:"grow",orientation:"vertical",radioAlign:"start",radioPosition:"end",options:[{value:"grow",title:"Grow Sales",description:"Reach all customers",icon:e.jsx(s,{size:32,style:r,icon:e.jsx(o,{name:p,size:"sm",color:"inherit"})})},{value:"retain",title:"Retain Customers",description:"Re-engage existing shoppers",icon:e.jsx(s,{size:32,style:r,icon:e.jsx(o,{name:m,size:"sm",color:"inherit"})})},{value:"convert",title:"Increase Conversion",description:"Lift checkout performance",icon:e.jsx(s,{size:32,style:r,icon:e.jsx(o,{name:v,size:"sm",color:"inherit"})})}]}},i={name:"Vertical states",tags:["!dev"],args:{value:"selected",orientation:"vertical",radioAlign:"start",options:[{value:"default",title:"Basic plan $10/month",description:"Includes up to 10 users, 20 GB individual data and access to all features."},{value:"selected",title:"Business plan $20/month",description:"Includes up to 20 users, 40 GB individual data and access to all features."},{value:"disabled",title:"Enterprise plan $40/month",description:"Unlimited users, unlimited individual data and access to all features.",disabled:!0,tooltipTitle:"This plan is not available for your account."}]}},n={name:"Horizontal states",tags:["!dev"],args:{value:"",orientation:"horizontal",radioAlign:"center",options:[{value:"default",title:"Warehouse Only",description:"This audience membership won't be saved to mParticle user profiles."},{value:"disabled",title:"Legacy Mode",description:"Connects using the previous integration for backward compatibility.",disabled:!0,tooltipTitle:"Legacy mode is no longer supported for new audiences."}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    value: 'basic',
    orientation: 'vertical',
    radioAlign: 'start',
    options: [{
      value: 'basic',
      title: 'Basic plan $10/month',
      description: 'Includes up to 10 users, 20 GB individual data and access to all features.'
    }, {
      value: 'business',
      title: 'Business plan $20/month',
      description: 'Includes up to 20 users, 40 GB individual data and access to all features.'
    }, {
      value: 'enterprise',
      title: 'Enterprise plan $40/month',
      description: 'Unlimited users, unlimited individual data and access to all features.'
    }]
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal']
    },
    radioAlign: {
      control: 'select',
      options: ['start', 'center']
    },
    radioPosition: {
      control: 'select',
      options: ['start', 'end']
    }
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'With avatar and radio on the end',
  tags: ['!dev'],
  args: {
    value: 'grow',
    orientation: 'vertical',
    radioAlign: 'start',
    radioPosition: 'end',
    options: [{
      value: 'grow',
      title: 'Grow Sales',
      description: 'Reach all customers',
      icon: <Avatar size={32} style={avatarStyle} icon={<Icon name={RoktRocket} size="sm" color="inherit" />} />
    }, {
      value: 'retain',
      title: 'Retain Customers',
      description: 'Re-engage existing shoppers',
      icon: <Avatar size={32} style={avatarStyle} icon={<Icon name={RoktUsers} size="sm" color="inherit" />} />
    }, {
      value: 'convert',
      title: 'Increase Conversion',
      description: 'Lift checkout performance',
      icon: <Avatar size={32} style={avatarStyle} icon={<Icon name={RoktTrendUp} size="sm" color="inherit" />} />
    }]
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Vertical states',
  tags: ['!dev'],
  args: {
    value: 'selected',
    orientation: 'vertical',
    radioAlign: 'start',
    options: [{
      value: 'default',
      title: 'Basic plan $10/month',
      description: 'Includes up to 10 users, 20 GB individual data and access to all features.'
    }, {
      value: 'selected',
      title: 'Business plan $20/month',
      description: 'Includes up to 20 users, 40 GB individual data and access to all features.'
    }, {
      value: 'disabled',
      title: 'Enterprise plan $40/month',
      description: 'Unlimited users, unlimited individual data and access to all features.',
      disabled: true,
      tooltipTitle: 'This plan is not available for your account.'
    }]
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Horizontal states',
  tags: ['!dev'],
  args: {
    value: '',
    orientation: 'horizontal',
    radioAlign: 'center',
    options: [{
      value: 'default',
      title: 'Warehouse Only',
      description: "This audience membership won't be saved to mParticle user profiles."
    }, {
      value: 'disabled',
      title: 'Legacy Mode',
      description: 'Connects using the previous integration for backward compatibility.',
      disabled: true,
      tooltipTitle: 'Legacy mode is no longer supported for new audiences.'
    }]
  }
}`,...n.parameters?.docs?.source}}};const h=["Playground","WithIconRadioEnd","VerticalStates","HorizontalStates"],y=Object.freeze(Object.defineProperty({__proto__:null,HorizontalStates:n,Playground:t,VerticalStates:i,WithIconRadioEnd:a,__namedExportsOrder:h,default:g},Symbol.toStringTag,{value:"Module"}));export{n as H,t as P,y as R,i as V,a as W};
