import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-ZAwtOOsv.js";import{p,c}from"./UnauthorizedTooltip-C-uexwNG.js";import"./ErrorStateIcon-B6JkuEkJ.js";import"./SuccessStateIcon-BoEEKEoh.js";import"./WarningStateIcon-DvK-CXgy.js";import"./preload-helper-PPVm8Dsz.js";import"./LightTheme-BtoaoHMG.js";import"./row-_uEFDODe.js";import"./Context-D1vOXvMD.js";import"./useToken-xerQhSdt.js";import"./presets-C7IxLGBr.js";import"./index-BkWt5-fR.js";import"./index-CKTaITbW.js";import"./AntdIcon-CLyLtIX5.js";import"./style-BLGxefMg.js";import"./client-D5Z-HDZA.js";import"./WarningFilled-DrGq8YeO.js";const S={title:"Components/Not Prod Ready/Data Display/Tour",component:p,args:{}},t={},r={render:()=>{const o=n.useRef(null),[i,s]=n.useState(!1),a=[{title:"Center",description:"Displayed in the center of screen.",target:null},{title:"Right",description:"On the right of target.",placement:"right",target:()=>o.current},{title:"Top",description:"On the top of target.",placement:"top",target:()=>o.current}];return e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:o,children:e.jsx(c,{type:"primary",onClick:()=>{s(!0)},children:"Begin Tour"})}),e.jsx(p,{open:i,onClose:()=>{s(!1)},steps:a})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
