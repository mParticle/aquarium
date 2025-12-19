var S=Object.defineProperty,w=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var m=(t,e,a)=>e in t?S(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,i=(t,e)=>{for(var a in e||(e={}))E.call(e,a)&&m(t,a,e[a]);if(p)for(var a of p(e))$.call(e,a)&&m(t,a,e[a]);return t},r=(t,e)=>w(t,V(e));import{j as s}from"./jsx-runtime-C9TrHvcC.js";import{r as u}from"./index-3OP4wdng.js";import{af as d,a8 as c,F as j}from"./NavigationItemsService-DAKspliy.js";import"./ErrorStateIcon-CcQoYP7x.js";import"./SuccessStateIcon-Dn1_3x90.js";import"./WarningStateIcon-OlzhE0bB.js";import"./_baseClone-DwBCp-Ss.js";import"./LightTheme-BtoaoHMG.js";import"./row-DlEJUZa0.js";import"./Context-R5ee3nrF.js";import"./useToken-BIYN7ogo.js";import"./presets-CQzyf-6F.js";import"./extends-CF3RwP-h.js";import"./index-DA79H6I3.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./AntdIcon-DRQs8XP6.js";import"./style-BbwCNso5.js";import"./WarningFilled-D6ijQqgK.js";const M={title:"Components/Data Entry/RadioCard",component:d,parameters:{layout:"padded"}},n={render:()=>{const[t,e]=u.useState("secret");return s.jsx(c,{children:s.jsx(d,{value:t,onChange:e,orientation:"vertical",radioAlign:"start",options:[{value:"basic",title:"Basic plan $10/month",description:"Includes up to 10 users, 20 GB individual data and access to all features."},{value:"business",title:"Business plan $20/month",description:"Includes up to 20 users, 40 GB individual data and access to all features."},{value:"enterprise",title:"Enterprise plan $40/month",description:"Unlimited users, unlimited individual data and access to all features."},{value:"ultimate",title:"Ultimate plan $60/month",description:"Unlimited users, unlimited individual data and access to all features."},{value:"secret",title:"Secret plan $80/month",description:"Unlimited users, unlimited individual data and access to all features."}]})})}},o={render:()=>{const[t,e]=u.useState("warehouse");return s.jsx(c,{children:s.jsx(j,{vertical:!0,style:{maxWidth:"1200px",width:"100%"},children:s.jsx(d,{value:t,onChange:e,orientation:"horizontal",radioAlign:"center",options:[{value:"warehouse",title:"Warehouse Only",description:"This audience membership won't be saved to mParticle user profiles."},{value:"hybrid",title:"Enable for Hybrid Audiences",description:"Add membership of this audience to in platform profiles and optionally enrich audience with in platform user data."}]})})})}},l={render:()=>{const[t,e]=u.useState("standard");return s.jsx(c,{children:s.jsx(d,{value:t,onChange:e,orientation:"vertical",radioAlign:"start",options:[{value:"standard",title:"Standard Access",description:"Full access to all standard features and integrations."},{value:"premium",title:"Premium Access",description:"Enhanced features with priority support and advanced analytics.",disabled:!0,tooltipTitle:"Premium access requires an upgraded subscription plan."}]})})}};var h,v,f;n.parameters=r(i({},n.parameters),{docs:r(i({},(h=n.parameters)==null?void 0:h.docs),{source:i({originalSource:`{
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
}`},(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source)})});var b,g,x;o.parameters=r(i({},o.parameters),{docs:r(i({},(b=o.parameters)==null?void 0:b.docs),{source:i({originalSource:`{
  render: () => {
    const [value, setValue] = useState('warehouse');
    return <Center>
        <Flex vertical style={{
        maxWidth: '1200px',
        width: '100%'
      }}>
          <RadioCards value={value} onChange={setValue} orientation="horizontal" radioAlign="center" options={[{
          value: 'warehouse',
          title: 'Warehouse Only',
          description: "This audience membership won't be saved to mParticle user profiles."
        }, {
          value: 'hybrid',
          title: 'Enable for Hybrid Audiences',
          description: 'Add membership of this audience to in platform profiles and optionally enrich audience with in platform user data.'
        }]} />
        </Flex>
      </Center>;
  }
}`},(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source)})});var C,y,A;l.parameters=r(i({},l.parameters),{docs:r(i({},(C=l.parameters)==null?void 0:C.docs),{source:i({originalSource:`{
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
}`},(A=(y=l.parameters)==null?void 0:y.docs)==null?void 0:A.source)})});const N=["Vertical","Horizontal","Disabled"];export{l as Disabled,o as Horizontal,n as Vertical,N as __namedExportsOrder,M as default};
