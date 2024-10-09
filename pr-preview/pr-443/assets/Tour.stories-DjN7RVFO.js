var v=Object.defineProperty,P=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var f=(e,t,n)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))E.call(t,n)&&f(e,n,t[n]);if(u)for(var n of u(t))R.call(t,n)&&f(e,n,t[n]);return e},o=(e,t)=>P(e,T(t));import{j as r}from"./jsx-runtime-BcCOBRXo.js";import{r as c}from"./index-CNk6hRaE.js";import{K as m,B as b,N as k,I as B}from"./GlobalNavigation-qsnRifS4.js";import"./ConfigProvider-CEh3sHE6.js";import"./_baseClone-BjCwUuX-.js";import"./index-CqBomLS8.js";import"./useToken-C-GAQQ-5.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CYew8PZR.js";import"./row-B98CqS5b.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";import"./LightTheme-DxveuNKr.js";import"./_getPrototype-CAOE_2rY.js";const V={title:"Components/Data Display/Tour",component:m,args:{}},a={},i={render:()=>{const e=c.useRef(null),[t,n]=c.useState(!1),l=[{title:"Center",description:"Displayed in the center of screen.",target:null},{title:"Right",description:"On the right of target.",placement:"right",target:()=>e.current},{title:"Top",description:"On the top of target.",placement:"top",target:()=>e.current}];return r.jsxs(r.Fragment,{children:[r.jsx("div",{ref:e,children:r.jsx(b,{type:"primary",onClick:()=>{n(!0)},children:"Begin Tour"})}),r.jsx(m,{open:t,onClose:()=>{n(!1)},steps:l})]})}},p={render:()=>{const e=c.useRef(null),[t,n]=c.useState(!1),l=[{title:"Navigate mParticle effortlessly!",description:"Switch between product suites anytime using this selector.",placement:"right",target:()=>e.current}];return r.jsxs(r.Fragment,{children:[r.jsx("div",{ref:e,children:r.jsx(k,{label:"Data Platform",icon:r.jsx(B,{name:"siteMap"}),onSuiteLogoClick:()=>{n(!0)}})}),r.jsx(m,{mask:!1,type:"primary",open:t,onClose:()=>{n(!1)},steps:l})]})}};var d,g,h;a.parameters=o(s({},a.parameters),{docs:o(s({},(d=a.parameters)==null?void 0:d.docs),{source:s({originalSource:"{}"},(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source)})});var x,y,O;i.parameters=o(s({},i.parameters),{docs:o(s({},(x=i.parameters)==null?void 0:x.docs),{source:s({originalSource:`{
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
}`},(O=(y=i.parameters)==null?void 0:y.docs)==null?void 0:O.source)})});var S,j,C;p.parameters=o(s({},p.parameters),{docs:o(s({},(S=p.parameters)==null?void 0:S.docs),{source:s({originalSource:`{
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
}`},(C=(j=p.parameters)==null?void 0:j.docs)==null?void 0:C.source)})});const W=["Primary","ExamplePlacement","ExampleNavLogo"];export{p as ExampleNavLogo,i as ExamplePlacement,a as Primary,W as __namedExportsOrder,V as default};
