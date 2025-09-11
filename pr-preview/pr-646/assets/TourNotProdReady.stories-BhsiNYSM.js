var O=Object.defineProperty,T=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var c=(t,e,r)=>e in t?O(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,o=(t,e)=>{for(var r in e||(e={}))j.call(e,r)&&c(t,r,e[r]);if(i)for(var r of i(e))P.call(e,r)&&c(t,r,e[r]);return t},s=(t,e)=>T(t,C(e));import{j as n}from"./jsx-runtime-CVnACwZl.js";import{r as m}from"./index-3OP4wdng.js";import{p as x,f as R}from"./NavigationItemsService-ChoF_JX4.js";import"./ErrorStateIcon-BRZ77WZC.js";import"./_baseClone-CXAe4HsA.js";import"./LightTheme-BtoaoHMG.js";import"./row-Bsm_WxsR.js";import"./Context-R5ee3nrF.js";import"./useToken-C_i1q6Gz.js";import"./presets-BrZHayqo.js";import"./extends-CF3RwP-h.js";import"./index-B-gr4m3q.js";import"./isNativeReflectConstruct-CWIsGhkf.js";const A={title:"Components/Not Prod Ready/Data Display/Tour",component:x,args:{}},p={},a={render:()=>{const t=m.useRef(null),[e,r]=m.useState(!1),y=[{title:"Center",description:"Displayed in the center of screen.",target:null},{title:"Right",description:"On the right of target.",placement:"right",target:()=>t.current},{title:"Top",description:"On the top of target.",placement:"top",target:()=>t.current}];return n.jsxs(n.Fragment,{children:[n.jsx("div",{ref:t,children:n.jsx(R,{type:"primary",onClick:()=>{r(!0)},children:"Begin Tour"})}),n.jsx(x,{open:e,onClose:()=>{r(!1)},steps:y})]})}};var l,u,d;p.parameters=s(o({},p.parameters),{docs:s(o({},(l=p.parameters)==null?void 0:l.docs),{source:o({originalSource:"{}"},(d=(u=p.parameters)==null?void 0:u.docs)==null?void 0:d.source)})});var f,g,h;a.parameters=s(o({},a.parameters),{docs:s(o({},(f=a.parameters)==null?void 0:f.docs),{source:o({originalSource:`{
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
}`},(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source)})});const G=["Primary","ExamplePlacement"];export{a as ExamplePlacement,p as Primary,G as __namedExportsOrder,A as default};
