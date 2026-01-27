import{a0 as i,y as g,j as s,u as p,F as C,O as S,T as b}from"./iframe-D7Ys59RG.js";const f={title:"Components/Data Entry/Switch",component:i,args:{disabled:!1,loading:!1,onClick:(e,a)=>{},onChange:(e,a)=>{console.log(`Switch changed: ${e}`)}}},d={args:{checked:!1,disabled:!1},render:e=>{const[a,n]=g.useState(e.checked??!1),c=(t,r)=>{n(t),e.onChange&&e.onChange(t,r)};return s.jsx(i,{...e,checked:a,onChange:c,"data-testid":"switch-default"})}},o={args:{checked:!1,disabled:!1,size:"small"},render:e=>{const[a,n]=g.useState(e.checked??!1),c=(t,r)=>{n(t),e.onChange&&e.onChange(t,r)};return s.jsx(i,{...e,checked:a,onChange:c,"data-testid":"switch-small"})}},h={args:{defaultChecked:!0,disabled:!0},render:e=>s.jsx(p,{title:"You don't have permissions to change this setting.",children:s.jsx(i,{...e,"data-testid":"switch-disabled"})})},l={args:{checked:!0},render:e=>{const{checked:a,onChange:n,...c}=e,[t,r]=g.useState(a??!1),k=(u,m)=>{r(u),n?.(u,m)};return s.jsxs(C,{align:"center",gap:S,children:[s.jsx(i,{...c,checked:t,onChange:k,"data-testid":"switch-with-label"}),s.jsx(b.Text,{color:"ColorTextSecondary",children:t?"Enabled state helper text":"Disabled state helper text"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true,
    disabled: true
  },
  render: args => {
    return <Tooltip title="You don't have permissions to change this setting.">
        <Switch {...args} data-testid="switch-disabled" />
      </Tooltip>;
  }
}`,...h.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const x=["Primary","Small","Disabled","WithLabel"],w=Object.freeze(Object.defineProperty({__proto__:null,Disabled:h,Primary:d,Small:o,WithLabel:l,__namedExportsOrder:x,default:f},Symbol.toStringTag,{value:"Module"}));export{h as D,d as P,w as S,l as W,o as a};
