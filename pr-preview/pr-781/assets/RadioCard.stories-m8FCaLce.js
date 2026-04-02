import{b1 as a}from"./iframe-UKicon8b.js";const i={title:"Components/Data Entry/RadioCard",component:a,parameters:{layout:"padded"}},e={name:"Vertical states",tags:["!dev"],args:{value:"selected",orientation:"vertical",radioAlign:"start",options:[{value:"default",title:"Basic plan $10/month",description:"Includes up to 10 users, 20 GB individual data and access to all features."},{value:"selected",title:"Business plan $20/month",description:"Includes up to 20 users, 40 GB individual data and access to all features."},{value:"disabled",title:"Enterprise plan $40/month",description:"Unlimited users, unlimited individual data and access to all features.",disabled:!0,tooltipTitle:"This plan is not available for your account."}]}},t={name:"Horizontal states",tags:["!dev"],args:{value:"",orientation:"horizontal",radioAlign:"center",options:[{value:"default",title:"Warehouse Only",description:"This audience membership won't be saved to mParticle user profiles."},{value:"disabled",title:"Legacy Mode",description:"Connects using the previous integration for backward compatibility.",disabled:!0,tooltipTitle:"Legacy mode is no longer supported for new audiences."}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const s=["VerticalStates","HorizontalStates"],o=Object.freeze(Object.defineProperty({__proto__:null,HorizontalStates:t,VerticalStates:e,__namedExportsOrder:s,default:i},Symbol.toStringTag,{value:"Module"}));export{t as H,o as R,e as V};
