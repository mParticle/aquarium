var _=Object.defineProperty,F=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var S=(e,t,a)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&S(e,a,t[a]);if(p)for(var a of p(t))x.call(t,a)&&S(e,a,t[a]);return e},c=(e,t)=>F(e,P(t));var T=(e,t)=>{var a={};for(var n in e)b.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&p)for(var n of p(e))t.indexOf(n)<0&&x.call(e,n)&&(a[n]=e[n]);return a};import{j as d}from"./jsx-runtime-C9TrHvcC.js";import{r as k}from"./index-3OP4wdng.js";import{z as m,T as K,F as O,c as W}from"./NavigationItemsService-D7rbcSBn.js";import"./ErrorStateIcon-CCC_pZ4i.js";import"./SuccessStateIcon-BmkUEj3T.js";import"./WarningStateIcon-L7ZRO98p.js";import"./_baseClone-DwBCp-Ss.js";import{S as Y}from"./style-C8GWJwT7.js";const A={title:"Components/Data Entry/Switch",component:m,args:{disabled:!1,loading:!1,onClick:(e,t)=>{},onChange:(e,t)=>{console.log(`Switch changed: ${e}`)}}},l={args:{checked:!1,disabled:!1},render:e=>{var r;const[t,a]=k.useState((r=e.checked)!=null?r:!1),n=(o,h)=>{a(o),e.onChange&&e.onChange(o,h)};return d.jsx(m,c(s({},e),{checked:t,onChange:n,"data-testid":"switch-default"}))}},i={args:{checked:!1,disabled:!1,size:"small"},render:e=>{var r;const[t,a]=k.useState((r=e.checked)!=null?r:!1),n=(o,h)=>{a(o),e.onChange&&e.onChange(o,h)};return d.jsx(m,c(s({},e),{checked:t,onChange:n,"data-testid":"switch-small"}))}},g={args:{defaultChecked:!0,disabled:!0},render:e=>d.jsx(K,{title:"You don't have permissions to change this setting.",children:d.jsx(m,c(s({},e),{"data-testid":"switch-disabled"}))})},u={args:{checked:!0},render:e=>{const C=e,{checked:t,onChange:a}=C,n=T(C,["checked","onChange"]),[r,o]=k.useState(t!=null?t:!1),h=(f,V)=>{o(f),a==null||a(f,V)};return d.jsxs(O,{align:"center",gap:Y,children:[d.jsx(m,c(s({},n),{checked:r,onChange:h,"data-testid":"switch-with-label"})),d.jsx(W.Text,{color:"ColorTextSecondary",children:r?"Enabled state helper text":"Disabled state helper text"})]})}};var w,E,v;l.parameters=c(s({},l.parameters),{docs:c(s({},(w=l.parameters)==null?void 0:w.docs),{source:s({originalSource:`{
  args: {
    checked: false,
    disabled: false
  },
  render: args => {
    const [checked, setChecked] = useState(args.checked ?? false);
    const handleChange = (checkedValue: boolean, event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
      setChecked(checkedValue);
      if (args.onChange) {
        args.onChange(checkedValue, event);
      }
    };
    return <Switch {...args} checked={checked} onChange={handleChange} data-testid="switch-default" />;
  }
}`},(v=(E=l.parameters)==null?void 0:E.docs)==null?void 0:v.source)})});var y,j,M;i.parameters=c(s({},i.parameters),{docs:c(s({},(y=i.parameters)==null?void 0:y.docs),{source:s({originalSource:`{
  args: {
    checked: false,
    disabled: false,
    size: 'small'
  },
  render: args => {
    const [checked, setChecked] = useState(args.checked ?? false);
    const handleChange = (checkedValue: boolean, event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
      setChecked(checkedValue);
      if (args.onChange) {
        args.onChange(checkedValue, event);
      }
    };
    return <Switch {...args} checked={checked} onChange={handleChange} data-testid="switch-small" />;
  }
}`},(M=(j=i.parameters)==null?void 0:j.docs)==null?void 0:M.source)})});var L,R,z;g.parameters=c(s({},g.parameters),{docs:c(s({},(L=g.parameters)==null?void 0:L.docs),{source:s({originalSource:`{
  args: {
    defaultChecked: true,
    disabled: true
  },
  render: args => {
    return <Tooltip title="You don't have permissions to change this setting.">
        <Switch {...args} data-testid="switch-disabled" />
      </Tooltip>;
  }
}`},(z=(R=g.parameters)==null?void 0:R.docs)==null?void 0:z.source)})});var B,D,H;u.parameters=c(s({},u.parameters),{docs:c(s({},(B=u.parameters)==null?void 0:B.docs),{source:s({originalSource:`{
  args: {
    checked: true
  },
  render: args => {
    const {
      checked: checkedArg,
      onChange,
      ...rest
    } = args;
    const [checked, setChecked] = useState(checkedArg ?? false);
    const handleChange = (checkedValue: boolean, event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
      setChecked(checkedValue);
      onChange?.(checkedValue, event);
    };
    return <Flex align="center" gap={SizeSm}>
        <Switch {...rest} checked={checked} onChange={handleChange} data-testid="switch-with-label" />
        <Typography.Text color="ColorTextSecondary">
          {checked ? 'Enabled state helper text' : 'Disabled state helper text'}
        </Typography.Text>
      </Flex>;
  }
}`},(H=(D=u.parameters)==null?void 0:D.docs)==null?void 0:H.source)})});const $=["Primary","Small","Disabled","WithLabel"],ee=Object.freeze(Object.defineProperty({__proto__:null,Disabled:g,Primary:l,Small:i,WithLabel:u,__namedExportsOrder:$,default:A},Symbol.toStringTag,{value:"Module"}));export{g as D,l as P,ee as S,u as W,i as a};
