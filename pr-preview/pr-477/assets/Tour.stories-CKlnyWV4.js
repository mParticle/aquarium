var v=Object.defineProperty,C=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var f=(e,t,r)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,o=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&f(e,r,t[r]);if(m)for(var r of m(t))k.call(t,r)&&f(e,r,t[r]);return e},n=(e,t)=>C(e,P(t));import{j as s}from"./jsx-runtime-BcCOBRXo.js";import{r as c}from"./index-CNk6hRaE.js";import{x as u,k as E,y as R,I as D}from"./GlobalNavigation-Dqx_v86T.js";import"./_baseClone-DBzvlRjn.js";const L={title:"Components/Data Display/Tour",component:u,args:{}},a={},i={render:()=>{const e=c.useRef(null),[t,r]=c.useState(!1),l=[{title:"Center",description:"Displayed in the center of screen.",target:null},{title:"Right",description:"On the right of target.",placement:"right",target:()=>e.current},{title:"Top",description:"On the top of target.",placement:"top",target:()=>e.current}];return s.jsxs(s.Fragment,{children:[s.jsx("div",{ref:e,children:s.jsx(E,{type:"primary",onClick:()=>{r(!0)},children:"Begin Tour"})}),s.jsx(u,{open:t,onClose:()=>{r(!1)},steps:l})]})}},p={render:()=>{const e=c.useRef(null),[t,r]=c.useState(!1),l=[{title:"Navigate mParticle effortlessly!",description:"Switch between product suites anytime using this selector.",placement:"right",target:()=>e.current}];return s.jsxs(s.Fragment,{children:[s.jsx("div",{ref:e,children:s.jsx(R,{label:"Data Platform",icon:s.jsx(D,{name:"siteMap"}),onSuiteLogoClick:()=>{r(!0)}})}),s.jsx(u,{mask:!1,type:"primary",open:t,onClose:()=>{r(!1)},steps:l})]})}};var d,g,h;a.parameters=n(o({},a.parameters),{docs:n(o({},(d=a.parameters)==null?void 0:d.docs),{source:o({originalSource:"{}"},(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source)})});var y,x,S;i.parameters=n(o({},i.parameters),{docs:n(o({},(y=i.parameters)==null?void 0:y.docs),{source:o({originalSource:`{
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
}`},(S=(x=i.parameters)==null?void 0:x.docs)==null?void 0:S.source)})});var O,j,T;p.parameters=n(o({},p.parameters),{docs:n(o({},(O=p.parameters)==null?void 0:O.docs),{source:o({originalSource:`{
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
}`},(T=(j=p.parameters)==null?void 0:j.docs)==null?void 0:T.source)})});const _=["Primary","ExamplePlacement","ExampleNavLogo"],F=Object.freeze(Object.defineProperty({__proto__:null,ExampleNavLogo:p,ExamplePlacement:i,Primary:a,__namedExportsOrder:_,default:L},Symbol.toStringTag,{value:"Module"}));export{F as T,L as m};
