var b=Object.defineProperty,y=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var u=(t,e,a)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,i=(t,e)=>{for(var a in e||(e={}))w.call(e,a)&&u(t,a,e[a]);if(d)for(var a of d(e))$.call(e,a)&&u(t,a,e[a]);return t},r=(t,e)=>y(t,g(e));import{j as s}from"./jsx-runtime-C9TrHvcC.js";import{r as C}from"./index-3OP4wdng.js";import{af as l,a8 as x,F as R}from"./NavigationItemsService-7KzyURgV.js";import"./ErrorStateIcon-CcQoYP7x.js";import"./SuccessStateIcon-Dn1_3x90.js";import"./WarningStateIcon-OlzhE0bB.js";import"./_baseClone-DwBCp-Ss.js";import"./LightTheme-BtoaoHMG.js";import"./row-DlEJUZa0.js";import"./Context-R5ee3nrF.js";import"./useToken-BIYN7ogo.js";import"./presets-CQzyf-6F.js";import"./extends-CF3RwP-h.js";import"./index-DA79H6I3.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./AntdIcon-DRQs8XP6.js";import"./style-BbwCNso5.js";import"./WarningFilled-D6ijQqgK.js";const q={title:"Components/Data Entry/RadioCard",component:l,parameters:{layout:"padded"}},n={render:()=>{const[t,e]=C.useState("secret");return s.jsx(x,{children:s.jsx(l,{value:t,onChange:e,orientation:"vertical",radioAlign:"start",options:[{value:"basic",title:"Basic plan $10/month",description:"Includes up to 10 users, 20 GB individual data and access to all features."},{value:"business",title:"Business plan $20/month",description:"Includes up to 20 users, 40 GB individual data and access to all features."},{value:"enterprise",title:"Enterprise plan $40/month",description:"Unlimited users, unlimited individual data and access to all features."},{value:"ultimate",title:"Ultimate plan $60/month",description:"Unlimited users, unlimited individual data and access to all features."},{value:"secret",title:"Secret plan $80/month",description:"Unlimited users, unlimited individual data and access to all features."}]})})}},o={render:()=>{const[t,e]=C.useState("warehouse");return s.jsx(x,{children:s.jsx(R,{vertical:!0,style:{maxWidth:"1200px",width:"100%"},children:s.jsx(l,{value:t,onChange:e,orientation:"horizontal",radioAlign:"center",options:[{value:"warehouse",title:"Warehouse Only",description:"This audience membership won't be saved to mParticle user profiles."},{value:"hybrid",title:"Enable for Hybrid Audiences",description:"Add membership of this audience to in platform profiles and optionally enrich audience with in platform user data."}]})})})}};var c,p,m;n.parameters=r(i({},n.parameters),{docs:r(i({},(c=n.parameters)==null?void 0:c.docs),{source:i({originalSource:`{
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
}`},(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source)})});var h,v,f;o.parameters=r(i({},o.parameters),{docs:r(i({},(h=o.parameters)==null?void 0:h.docs),{source:i({originalSource:`{
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
}`},(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source)})});const J=["VerticalRadioCardGroup","HorizontalRadioCardGroup"];export{o as HorizontalRadioCardGroup,n as VerticalRadioCardGroup,J as __namedExportsOrder,q as default};
