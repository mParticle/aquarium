import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-DPsSDxI5.js";import{ab as p,a as c}from"./UnauthorizedTooltip-DInzTCbR.js";import"./ErrorStateIcon-N5tZzBSe.js";import"./SuccessStateIcon-jdQomLYr.js";import"./WarningStateIcon-BOAINRnk.js";import"./preload-helper-PPVm8Dsz.js";import"./LightTheme-BtoaoHMG.js";import"./row-D3EgDzJn.js";import"./Context-BfWCYYV6.js";import"./useToken-D3WBQzQr.js";import"./presets-C7IxLGBr.js";import"./index-C_XAaiqg.js";import"./index-BkHrRISK.js";import"./AntdIcon-DQ0RjuI5.js";import"./style-C-7nCLOl.js";import"./client-Bm7MYF5w.js";import"./WarningFilled-DE1WQ37c.js";const S={title:"Components/Not Prod Ready/Data Display/Tour",component:p,args:{}},t={},r={render:()=>{const o=n.useRef(null),[i,s]=n.useState(!1),a=[{title:"Center",description:"Displayed in the center of screen.",target:null},{title:"Right",description:"On the right of target.",placement:"right",target:()=>o.current},{title:"Top",description:"On the top of target.",placement:"top",target:()=>o.current}];return e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:o,children:e.jsx(c,{type:"primary",onClick:()=>{s(!0)},children:"Begin Tour"})}),e.jsx(p,{open:i,onClose:()=>{s(!1)},steps:a})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const v=["Primary","ExamplePlacement"];export{r as ExamplePlacement,t as Primary,v as __namedExportsOrder,S as default};
