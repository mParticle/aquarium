var g=Object.defineProperty,x=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var p=(s,e,t)=>e in s?g(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,a=(s,e)=>{for(var t in e||(e={}))y.call(e,t)&&p(s,t,e[t]);if(i)for(var t of i(e))j.call(e,t)&&p(s,t,e[t]);return s},n=(s,e)=>x(s,S(e));import{j as r}from"./jsx-runtime-BcCOBRXo.js";import{r as l}from"./index-CNk6hRaE.js";import{s as f,t as b,I as h}from"./NavigationItemsService-CSanGvDO.js";import"./_baseClone-DBzvlRjn.js";const v={title:"Components/Data Display/Tour",component:f,args:{}},o={render:()=>{const s=l.useRef(null),[e,t]=l.useState(!0),d=[{title:"Navigate mParticle effortlessly!",description:"Switch between product suites anytime using this selector.",placement:"right",target:()=>s.current}];return r.jsxs(r.Fragment,{children:[r.jsx("div",{ref:s,children:r.jsx(b,{label:"Data Platform",icon:r.jsx(h,{name:"siteMap"}),onSuiteLogoClick:()=>{t(!0)}})}),r.jsx(f,{mask:!1,type:"primary",open:e,onClose:()=>{t(!1)},steps:d})]})}};var c,u,m;o.parameters=n(a({},o.parameters),{docs:n(a({},(c=o.parameters)==null?void 0:c.docs),{source:a({originalSource:`{
  render: () => {
    const ref = useRef(null);
    const [open, setOpen] = useState<boolean>(true);
    const steps: ITourProps['steps'] = [{
      title: 'Navigate mParticle effortlessly!',
      description: 'Switch between product suites anytime using this selector.',
      placement: 'right',
      target: () => ref.current
    }];
    return <>
        <div ref={ref}>
          <SuiteLogo label="Data Platform" icon={<Icon name="siteMap" />} onSuiteLogoClick={() => {
          setOpen(true);
        }} />
        </div>

        <Tour mask={false} type="primary" open={open} onClose={() => {
        setOpen(false);
      }} steps={steps} />
      </>;
  }
}`},(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source)})});const O=["ExampleNavLogo"],E=Object.freeze(Object.defineProperty({__proto__:null,ExampleNavLogo:o,__namedExportsOrder:O,default:v},Symbol.toStringTag,{value:"Module"}));export{E as T,v as m};
