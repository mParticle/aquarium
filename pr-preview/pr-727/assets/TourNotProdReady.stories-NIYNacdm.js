var O=Object.defineProperty,T=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var c=(t,e,r)=>e in t?O(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,o=(t,e)=>{for(var r in e||(e={}))j.call(e,r)&&c(t,r,e[r]);if(a)for(var r of a(e))P.call(e,r)&&c(t,r,e[r]);return t},s=(t,e)=>T(t,C(e));import{j as n}from"./jsx-runtime-C9TrHvcC.js";import{r as m}from"./index-3OP4wdng.js";import{p as x,c as R}from"./UnauthorizedTooltip-CcOWkX1f.js";import"./ErrorStateIcon-BxkwRIYA.js";import"./SuccessStateIcon-MRKGGhEP.js";import"./WarningStateIcon-CPwME_Ua.js";import"./_baseClone-DwBCp-Ss.js";import"./LightTheme--Kfu-hn5.js";import"./row-DlEJUZa0.js";import"./Context-R5ee3nrF.js";import"./useToken-BIYN7ogo.js";import"./presets-CQzyf-6F.js";import"./extends-CF3RwP-h.js";import"./index-DA79H6I3.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./AntdIcon-DRQs8XP6.js";import"./style-nTycTR2d.js";import"./WarningFilled-D6ijQqgK.js";const L={title:"Components/Not Prod Ready/Data Display/Tour",component:x,args:{}},p={},i={render:()=>{const t=m.useRef(null),[e,r]=m.useState(!1),y=[{title:"Center",description:"Displayed in the center of screen.",target:null},{title:"Right",description:"On the right of target.",placement:"right",target:()=>t.current},{title:"Top",description:"On the top of target.",placement:"top",target:()=>t.current}];return n.jsxs(n.Fragment,{children:[n.jsx("div",{ref:t,children:n.jsx(R,{type:"primary",onClick:()=>{r(!0)},children:"Begin Tour"})}),n.jsx(x,{open:e,onClose:()=>{r(!1)},steps:y})]})}};var l,u,d;p.parameters=s(o({},p.parameters),{docs:s(o({},(l=p.parameters)==null?void 0:l.docs),{source:o({originalSource:"{}"},(d=(u=p.parameters)==null?void 0:u.docs)==null?void 0:d.source)})});var f,g,h;i.parameters=s(o({},i.parameters),{docs:s(o({},(f=i.parameters)==null?void 0:f.docs),{source:o({originalSource:`{
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
}`},(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source)})});const M=["Primary","ExamplePlacement"];export{i as ExamplePlacement,p as Primary,M as __namedExportsOrder,L as default};
