import{$ as n}from"./iframe-CKfwzrZw.js";const s={title:"Components/Data Entry/RadioCard",component:n,parameters:{layout:"padded"}},e={tags:["!dev"],args:{value:"basic",orientation:"vertical",radioAlign:"start",options:[{value:"basic",title:"Basic plan $10/month",description:"Includes up to 10 users, 20 GB individual data and access to all features."},{value:"business",title:"Business plan $20/month",description:"Includes up to 20 users, 40 GB individual data and access to all features."},{value:"enterprise",title:"Enterprise plan $40/month",description:"Unlimited users, unlimited individual data and access to all features."}]},argTypes:{orientation:{control:"select",options:["vertical","horizontal"]},radioAlign:{control:"select",options:["start","center"]}}},t={name:"Vertical states",tags:["!dev"],args:{value:"selected",orientation:"vertical",radioAlign:"start",options:[{value:"default",title:"Basic plan $10/month",description:"Includes up to 10 users, 20 GB individual data and access to all features."},{value:"selected",title:"Business plan $20/month",description:"Includes up to 20 users, 40 GB individual data and access to all features."},{value:"disabled",title:"Enterprise plan $40/month",description:"Unlimited users, unlimited individual data and access to all features.",disabled:!0,tooltipTitle:"This plan is not available for your account."}]}},a={name:"Horizontal states",tags:["!dev"],args:{value:"",orientation:"horizontal",radioAlign:"center",options:[{value:"default",title:"Warehouse Only",description:"This audience membership won't be saved to mParticle user profiles."},{value:"disabled",title:"Legacy Mode",description:"Connects using the previous integration for backward compatibility.",disabled:!0,tooltipTitle:"Legacy mode is no longer supported for new audiences."}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
    }
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const i=["Playground","VerticalStates","HorizontalStates"],r=Object.freeze(Object.defineProperty({__proto__:null,HorizontalStates:a,Playground:e,VerticalStates:t,__namedExportsOrder:i,default:s},Symbol.toStringTag,{value:"Module"}));export{a as H,e as P,r as R,t as V};
