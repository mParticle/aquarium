var g=Object.defineProperty,x=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var p=(o,e,t)=>e in o?g(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,a=(o,e)=>{for(var t in e||(e={}))S.call(e,t)&&p(o,t,e[t]);if(i)for(var t of i(e))j.call(e,t)&&p(o,t,e[t]);return o},n=(o,e)=>x(o,y(e));import{j as r}from"./jsx-runtime-C9TrHvcC.js";import{r as l}from"./index-3OP4wdng.js";import{o as f,p as b,I as h}from"./NavigationItemsService-XOeb84fc.js";import"./ErrorStateIcon-BHl8GMmJ.js";import"./SuccessStateIcon-BsaRgexj.js";import"./WarningStateIcon-BcHB9QZV.js";import"./_baseClone-DwBCp-Ss.js";const v={title:"Components/Not Prod Ready/Data Display/Tour",component:f,args:{}},s={render:()=>{const o=l.useRef(null),[e,t]=l.useState(!0),d=[{title:"Navigate mParticle effortlessly!",description:"Switch between product suites anytime using this selector.",placement:"right",target:()=>o.current}];return r.jsxs(r.Fragment,{children:[r.jsx("div",{ref:o,children:r.jsx(b,{label:"Data Platform",icon:r.jsx(h,{name:"siteMap"}),onSuiteLogoClick:()=>{t(!0)}})}),r.jsx(f,{mask:!1,type:"primary",open:e,onClose:()=>{t(!1)},steps:d})]})}};var c,m,u;s.parameters=n(a({},s.parameters),{docs:n(a({},(c=s.parameters)==null?void 0:c.docs),{source:a({originalSource:`{
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
}`},(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source)})});const O=["ExampleNavLogo"],w=Object.freeze(Object.defineProperty({__proto__:null,ExampleNavLogo:s,__namedExportsOrder:O,default:v},Symbol.toStringTag,{value:"Module"}));export{w as T,v as m};
