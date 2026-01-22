import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as s}from"./iframe-DPsSDxI5.js";import{ab as a,ac as p,I as l}from"./UnauthorizedTooltip-DInzTCbR.js";import"./ErrorStateIcon-N5tZzBSe.js";import"./SuccessStateIcon-jdQomLYr.js";import"./WarningStateIcon-BOAINRnk.js";const c={title:"Components/Not Prod Ready/Data Display/Tour",component:a,args:{}},t={render:()=>{const o=s.useRef(null),[n,r]=s.useState(!0),i=[{title:"Navigate mParticle effortlessly!",description:"Switch between product suites anytime using this selector.",placement:"right",target:()=>o.current}];return e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:o,children:e.jsx(p,{label:"Data Platform",icon:e.jsx(l,{name:"siteMap"}),onSuiteLogoClick:()=>{r(!0)}})}),e.jsx(a,{mask:!1,type:"primary",open:n,onClose:()=>{r(!1)},steps:i})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const m=["ExampleNavLogo"],S=Object.freeze(Object.defineProperty({__proto__:null,ExampleNavLogo:t,__namedExportsOrder:m,default:c},Symbol.toStringTag,{value:"Module"}));export{S as T,c as m};
