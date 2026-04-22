import{cj as a,G as o,j as e,ck as l,I as c}from"./iframe-hsBKt3md.js";const p={title:"Experimental/Data Display/Tour",component:a,args:{}},t={render:()=>{const s=o.useRef(null),[n,r]=o.useState(!0),i=[{title:"Navigate mParticle effortlessly!",description:"Switch between product suites anytime using this selector.",placement:"right",target:()=>s.current}];return e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:s,children:e.jsx(l,{label:"Data Platform",icon:e.jsx(c,{name:"siteMap"}),onSuiteLogoClick:()=>{r(!0)}})}),e.jsx(a,{mask:!1,type:"primary",open:n,onClose:()=>{r(!1)},steps:i})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const u=["ExampleNavLogo"],f=Object.freeze(Object.defineProperty({__proto__:null,ExampleNavLogo:t,__namedExportsOrder:u,default:p},Symbol.toStringTag,{value:"Module"}));export{t as E,f as T};
