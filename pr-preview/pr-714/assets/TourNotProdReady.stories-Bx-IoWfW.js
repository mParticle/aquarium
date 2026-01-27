import{aK as a,y as n,j as e,i as c}from"./iframe-_QPLlW2H.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"Components/Not Prod Ready/Data Display/Tour",component:a,args:{}},t={},r={render:()=>{const s=n.useRef(null),[p,o]=n.useState(!1),i=[{title:"Center",description:"Displayed in the center of screen.",target:null},{title:"Right",description:"On the right of target.",placement:"right",target:()=>s.current},{title:"Top",description:"On the top of target.",placement:"top",target:()=>s.current}];return e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:s,children:e.jsx(c,{type:"primary",onClick:()=>{o(!0)},children:"Begin Tour"})}),e.jsx(a,{open:p,onClose:()=>{o(!1)},steps:i})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ref = useRef(null);
    const [open, setOpen] = useState<boolean>(false);
    const steps: ITourProps['steps'] = [{
      title: 'Center',
      description: 'Displayed in the center of screen.',
      target: null
    }, {
      title: 'Right',
      description: 'On the right of target.',
      placement: 'right',
      target: () => ref.current
    }, {
      title: 'Top',
      description: 'On the top of target.',
      placement: 'top',
      target: () => ref.current
    }];
    return <>
        <div ref={ref}>
          <Button type="primary" onClick={() => {
          setOpen(true);
        }}>
            Begin Tour
          </Button>
        </div>

        <Tour open={open} onClose={() => {
        setOpen(false);
      }} steps={steps} />
      </>;
  }
}`,...r.parameters?.docs?.source}}};const d=["Primary","ExamplePlacement"];export{r as ExamplePlacement,t as Primary,d as __namedExportsOrder,m as default};
