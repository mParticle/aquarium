var v=Object.defineProperty,C=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var f=(e,t,n)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&f(e,n,t[n]);if(m)for(var n of m(t))k.call(t,n)&&f(e,n,t[n]);return e},o=(e,t)=>C(e,P(t));import{j as r}from"./jsx-runtime-BcCOBRXo.js";import{r as c}from"./index-CNk6hRaE.js";import{x as u,k as E,y as R,I as D}from"./GlobalNavigation-DgsMOKTE.js";import"./_baseClone-u1J3oOXU.js";const L={title:"Components/Data Display/Tour",component:u,args:{}},a={},i={render:()=>{const e=c.useRef(null),[t,n]=c.useState(!1),l=[{title:"Center",description:"Displayed in the center of screen.",target:null},{title:"Right",description:"On the right of target.",placement:"right",target:()=>e.current},{title:"Top",description:"On the top of target.",placement:"top",target:()=>e.current}];return r.jsxs(r.Fragment,{children:[r.jsx("div",{ref:e,children:r.jsx(E,{type:"primary",onClick:()=>{n(!0)},children:"Begin Tour"})}),r.jsx(u,{open:t,onClose:()=>{n(!1)},steps:l})]})}},p={render:()=>{const e=c.useRef(null),[t,n]=c.useState(!1),l=[{title:"Navigate mParticle effortlessly!",description:"Switch between product suites anytime using this selector.",placement:"right",target:()=>e.current}];return r.jsxs(r.Fragment,{children:[r.jsx("div",{ref:e,children:r.jsx(R,{label:"Data Platform",icon:r.jsx(D,{name:"siteMap"}),onSuiteLogoClick:()=>{n(!0)}})}),r.jsx(u,{mask:!1,type:"primary",open:t,onClose:()=>{n(!1)},steps:l})]})}};var d,g,h;a.parameters=o(s({},a.parameters),{docs:o(s({},(d=a.parameters)==null?void 0:d.docs),{source:s({originalSource:"{}"},(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source)})});var y,x,S;i.parameters=o(s({},i.parameters),{docs:o(s({},(y=i.parameters)==null?void 0:y.docs),{source:s({originalSource:`{
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
}`},(S=(x=i.parameters)==null?void 0:x.docs)==null?void 0:S.source)})});var O,j,T;p.parameters=o(s({},p.parameters),{docs:o(s({},(O=p.parameters)==null?void 0:O.docs),{source:s({originalSource:`{
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
