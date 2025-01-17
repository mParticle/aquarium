var k=Object.defineProperty,p=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var h=(e,n,a)=>n in e?k(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,t=(e,n)=>{for(var a in n||(n={}))S.call(n,a)&&h(e,a,n[a]);if(d)for(var a of d(n))b.call(n,a)&&h(e,a,n[a]);return e},o=(e,n)=>p(e,C(n));import{j as v}from"./jsx-runtime-BcCOBRXo.js";import{r as x}from"./index-CNk6hRaE.js";import{z as m}from"./GlobalNavigation-D7q1LiTq.js";const E={title:"Components/Data Entry/Switch",component:m,args:{disabled:!1,loading:!1,onClick:(e,n)=>{},onChange:(e,n)=>{console.log(`Switch changed: ${e}`)}}},c={args:{checked:!1,disabled:!1},render:e=>{var s;const[n,a]=x.useState((s=e.checked)!=null?s:!1),f=(r,u)=>{a(r),e.onChange&&e.onChange(r,u)};return v.jsx(m,o(t({},e),{checked:n,onChange:f}))}};var l,i,g;c.parameters=o(t({},c.parameters),{docs:o(t({},(l=c.parameters)==null?void 0:l.docs),{source:t({originalSource:`{
  args: {
    checked: false,
    disabled: false
  },
  render: args => {
    const [checked, setChecked] = useState(args.checked ?? false);
    const handleChange = (checkedValue: boolean, event: React.MouseEvent<HTMLButtonElement>) => {
      setChecked(checkedValue);
      if (args.onChange) {
        args.onChange(checkedValue, event);
      }
    };
    return <Switch {...args} checked={checked} onChange={handleChange} />;
  }
}`},(g=(i=c.parameters)==null?void 0:i.docs)==null?void 0:g.source)})});const _=["Primary"],O=Object.freeze(Object.defineProperty({__proto__:null,Primary:c,__namedExportsOrder:_,default:E},Symbol.toStringTag,{value:"Module"}));export{O as S,E as m};
