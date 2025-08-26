var k=Object.defineProperty,p=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var h=(e,n,t)=>n in e?k(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,a=(e,n)=>{for(var t in n||(n={}))S.call(n,t)&&h(e,t,n[t]);if(d)for(var t of d(n))b.call(n,t)&&h(e,t,n[t]);return e},c=(e,n)=>p(e,C(n));import{j as E}from"./jsx-runtime-BcCOBRXo.js";import{r as v}from"./index-CNk6hRaE.js";import{z as m}from"./NavigationItemsService-BPxQx0Ux.js";const x={title:"Components/Data Entry/Switch",component:m,args:{disabled:!1,loading:!1,onClick:(e,n)=>{},onChange:(e,n)=>{console.log(`Switch changed: ${e}`)}}},o={args:{checked:!1,disabled:!1},render:e=>{var s;const[n,t]=v.useState((s=e.checked)!=null?s:!1),u=(r,f)=>{t(r),e.onChange&&e.onChange(r,f)};return E.jsx(m,c(a({},e),{checked:n,onChange:u}))}};var l,i,g;o.parameters=c(a({},o.parameters),{docs:c(a({},(l=o.parameters)==null?void 0:l.docs),{source:a({originalSource:`{
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
    return <Switch {...args} checked={checked} onChange={handleChange} />;
  }
}`},(g=(i=o.parameters)==null?void 0:i.docs)==null?void 0:g.source)})});const y=["Primary"],O=Object.freeze(Object.defineProperty({__proto__:null,Primary:o,__namedExportsOrder:y,default:x},Symbol.toStringTag,{value:"Module"}));export{O as S,x as m};
