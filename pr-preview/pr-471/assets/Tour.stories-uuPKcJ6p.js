var v=Object.defineProperty,P=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var f=(e,t,r)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,o=(e,t)=>{for(var r in t||(t={}))E.call(t,r)&&f(e,r,t[r]);if(u)for(var r of u(t))R.call(t,r)&&f(e,r,t[r]);return e},n=(e,t)=>P(e,T(t));import{j as s}from"./jsx-runtime-CVnACwZl.js";import{r as c}from"./index-3OP4wdng.js";import{H as m,B as b,J as k,I as B}from"./GlobalNavigation-DxJ0bpmA.js";import"./ConfigProvider-CLSyxc9v.js";import"./_baseClone-B3DJrZ5i.js";import"./index-DWDMsSA9.js";import"./useToken-CXWLUMEq.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-B-gr4m3q.js";import"./isNativeReflectConstruct-D-r9sWlk.js";import"./row-BmOE1Szh.js";import"./dayjs.min-FTgVsUrW.js";import"./customParseFormat-Dfkg1z51.js";import"./LightTheme-BtoaoHMG.js";const U={title:"Components/Data Display/Tour",component:m,args:{}},a={},i={render:()=>{const e=c.useRef(null),[t,r]=c.useState(!1),l=[{title:"Center",description:"Displayed in the center of screen.",target:null},{title:"Right",description:"On the right of target.",placement:"right",target:()=>e.current},{title:"Top",description:"On the top of target.",placement:"top",target:()=>e.current}];return s.jsxs(s.Fragment,{children:[s.jsx("div",{ref:e,children:s.jsx(b,{type:"primary",onClick:()=>{r(!0)},children:"Begin Tour"})}),s.jsx(m,{open:t,onClose:()=>{r(!1)},steps:l})]})}},p={render:()=>{const e=c.useRef(null),[t,r]=c.useState(!1),l=[{title:"Navigate mParticle effortlessly!",description:"Switch between product suites anytime using this selector.",placement:"right",target:()=>e.current}];return s.jsxs(s.Fragment,{children:[s.jsx("div",{ref:e,children:s.jsx(k,{label:"Data Platform",icon:s.jsx(B,{name:"siteMap"}),onSuiteLogoClick:()=>{r(!0)}})}),s.jsx(m,{mask:!1,type:"primary",open:t,onClose:()=>{r(!1)},steps:l})]})}};var d,g,h;a.parameters=n(o({},a.parameters),{docs:n(o({},(d=a.parameters)==null?void 0:d.docs),{source:o({originalSource:"{}"},(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source)})});var x,y,O;i.parameters=n(o({},i.parameters),{docs:n(o({},(x=i.parameters)==null?void 0:x.docs),{source:o({originalSource:`{
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
}`},(O=(y=i.parameters)==null?void 0:y.docs)==null?void 0:O.source)})});var S,j,C;p.parameters=n(o({},p.parameters),{docs:n(o({},(S=p.parameters)==null?void 0:S.docs),{source:o({originalSource:`{
  render: () => {
    const ref = useRef(null);
    const [open, setOpen] = useState<boolean>(false);
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
}`},(C=(j=p.parameters)==null?void 0:j.docs)==null?void 0:C.source)})});const V=["Primary","ExamplePlacement","ExampleNavLogo"];export{p as ExampleNavLogo,i as ExamplePlacement,a as Primary,V as __namedExportsOrder,U as default};
