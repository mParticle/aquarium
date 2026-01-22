import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./iframe-DPsSDxI5.js";import{v as n,w as l}from"./UnauthorizedTooltip-DInzTCbR.js";import"./ErrorStateIcon-N5tZzBSe.js";import"./SuccessStateIcon-jdQomLYr.js";import"./WarningStateIcon-BOAINRnk.js";import"./preload-helper-PPVm8Dsz.js";import"./LightTheme-BtoaoHMG.js";import"./row-D3EgDzJn.js";import"./Context-BfWCYYV6.js";import"./useToken-D3WBQzQr.js";import"./presets-C7IxLGBr.js";import"./index-C_XAaiqg.js";import"./index-BkHrRISK.js";import"./AntdIcon-DQ0RjuI5.js";import"./style-C-7nCLOl.js";import"./client-Bm7MYF5w.js";import"./WarningFilled-DE1WQ37c.js";const $={title:"Components/Data Entry/RadioCard",component:n,parameters:{layout:"padded"}},i={render:()=>{const[t,a]=o.useState("secret");return e.jsx(l,{children:e.jsx(n,{value:t,onChange:a,orientation:"vertical",radioAlign:"start",options:[{value:"basic",title:"Basic plan $10/month",description:"Includes up to 10 users, 20 GB individual data and access to all features."},{value:"business",title:"Business plan $20/month",description:"Includes up to 20 users, 40 GB individual data and access to all features."},{value:"enterprise",title:"Enterprise plan $40/month",description:"Unlimited users, unlimited individual data and access to all features."},{value:"ultimate",title:"Ultimate plan $60/month",description:"Unlimited users, unlimited individual data and access to all features."},{value:"secret",title:"Secret plan $80/month",description:"Unlimited users, unlimited individual data and access to all features."}]})})}},r={render:()=>{const[t,a]=o.useState("warehouse");return e.jsx(l,{children:e.jsx(n,{value:t,onChange:a,orientation:"horizontal",radioAlign:"center",options:[{value:"warehouse",title:"Warehouse Only",description:"This audience membership won't be saved to mParticle user profiles."},{value:"hybrid",title:"Enable for Hybrid Audiences",description:"Add membership of this audience to in platform profiles and optionally enrich audience with in platform user data."}]})})}},s={render:()=>{const[t,a]=o.useState("standard");return e.jsx(l,{children:e.jsx(n,{value:t,onChange:a,orientation:"vertical",radioAlign:"start",options:[{value:"standard",title:"Standard Access",description:"Full access to all standard features and integrations."},{value:"premium",title:"Premium Access",description:"Enhanced features with priority support and advanced analytics.",disabled:!0,tooltipTitle:"Premium access requires an upgraded subscription plan."}]})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const j=["Vertical","Horizontal","Disabled"];export{s as Disabled,r as Horizontal,i as Vertical,j as __namedExportsOrder,$ as default};
