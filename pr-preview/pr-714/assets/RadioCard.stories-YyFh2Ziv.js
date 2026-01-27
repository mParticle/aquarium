import{_ as n,y as l,j as e,$ as o}from"./iframe-_QPLlW2H.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"Components/Data Entry/RadioCard",component:n,parameters:{layout:"padded"}},i={render:()=>{const[a,t]=l.useState("secret");return e.jsx(o,{children:e.jsx(n,{value:a,onChange:t,orientation:"vertical",radioAlign:"start",options:[{value:"basic",title:"Basic plan $10/month",description:"Includes up to 10 users, 20 GB individual data and access to all features."},{value:"business",title:"Business plan $20/month",description:"Includes up to 20 users, 40 GB individual data and access to all features."},{value:"enterprise",title:"Enterprise plan $40/month",description:"Unlimited users, unlimited individual data and access to all features."},{value:"ultimate",title:"Ultimate plan $60/month",description:"Unlimited users, unlimited individual data and access to all features."},{value:"secret",title:"Secret plan $80/month",description:"Unlimited users, unlimited individual data and access to all features."}]})})}},s={render:()=>{const[a,t]=l.useState("warehouse");return e.jsx(o,{children:e.jsx(n,{value:a,onChange:t,orientation:"horizontal",radioAlign:"center",options:[{value:"warehouse",title:"Warehouse Only",description:"This audience membership won't be saved to mParticle user profiles."},{value:"hybrid",title:"Enable for Hybrid Audiences",description:"Add membership of this audience to in platform profiles and optionally enrich audience with in platform user data."}]})})}},r={render:()=>{const[a,t]=l.useState("standard");return e.jsx(o,{children:e.jsx(n,{value:a,onChange:t,orientation:"vertical",radioAlign:"start",options:[{value:"standard",title:"Standard Access",description:"Full access to all standard features and integrations."},{value:"premium",title:"Premium Access",description:"Enhanced features with priority support and advanced analytics.",disabled:!0,tooltipTitle:"Premium access requires an upgraded subscription plan."}]})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('secret');
    return <Center>
        <RadioCards value={value} onChange={setValue} orientation="vertical" radioAlign="start" options={[{
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
      }, {
        value: 'ultimate',
        title: 'Ultimate plan $60/month',
        description: 'Unlimited users, unlimited individual data and access to all features.'
      }, {
        value: 'secret',
        title: 'Secret plan $80/month',
        description: 'Unlimited users, unlimited individual data and access to all features.'
      }]} />
      </Center>;
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('warehouse');
    return <Center>
        <RadioCards value={value} onChange={setValue} orientation="horizontal" radioAlign="center" options={[{
        value: 'warehouse',
        title: 'Warehouse Only',
        description: "This audience membership won't be saved to mParticle user profiles."
      }, {
        value: 'hybrid',
        title: 'Enable for Hybrid Audiences',
        description: 'Add membership of this audience to in platform profiles and optionally enrich audience with in platform user data.'
      }]} />
      </Center>;
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('standard');
    return <Center>
        <RadioCards value={value} onChange={setValue} orientation="vertical" radioAlign="start" options={[{
        value: 'standard',
        title: 'Standard Access',
        description: 'Full access to all standard features and integrations.'
      }, {
        value: 'premium',
        title: 'Premium Access',
        description: 'Enhanced features with priority support and advanced analytics.',
        disabled: true,
        tooltipTitle: 'Premium access requires an upgraded subscription plan.'
      }]} />
      </Center>;
  }
}`,...r.parameters?.docs?.source}}};const p=["Vertical","Horizontal","Disabled"];export{r as Disabled,s as Horizontal,i as Vertical,p as __namedExportsOrder,c as default};
