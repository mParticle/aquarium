var O=Object.defineProperty,T=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var c=(t,e,r)=>e in t?O(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,o=(t,e)=>{for(var r in e||(e={}))j.call(e,r)&&c(t,r,e[r]);if(i)for(var r of i(e))P.call(e,r)&&c(t,r,e[r]);return t},s=(t,e)=>T(t,C(e));import{j as n}from"./jsx-runtime-BcCOBRXo.js";import{r as l}from"./index-CNk6hRaE.js";import{s as x,g as R}from"./NavigationItemsService-D07KrxCy.js";import"./_baseClone-DBzvlRjn.js";import"./LightTheme-BtoaoHMG.js";import"./row-GPgCuxPF.js";import"./useToken-BSaSgSTZ.js";import"./extends-CF3RwP-h.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";const q={title:"Components/Not Prod Ready/Data Display/Tour",component:x,args:{}},a={},p={render:()=>{const t=l.useRef(null),[e,r]=l.useState(!1),y=[{title:"Center",description:"Displayed in the center of screen.",target:null},{title:"Right",description:"On the right of target.",placement:"right",target:()=>t.current},{title:"Top",description:"On the top of target.",placement:"top",target:()=>t.current}];return n.jsxs(n.Fragment,{children:[n.jsx("div",{ref:t,children:n.jsx(R,{type:"primary",onClick:()=>{r(!0)},children:"Begin Tour"})}),n.jsx(x,{open:e,onClose:()=>{r(!1)},steps:y})]})}};var m,u,d;a.parameters=s(o({},a.parameters),{docs:s(o({},(m=a.parameters)==null?void 0:m.docs),{source:o({originalSource:"{}"},(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source)})});var g,f,h;p.parameters=s(o({},p.parameters),{docs:s(o({},(g=p.parameters)==null?void 0:g.docs),{source:o({originalSource:`{
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
}`},(h=(f=p.parameters)==null?void 0:f.docs)==null?void 0:h.source)})});const w=["Primary","ExamplePlacement"];export{p as ExamplePlacement,a as Primary,w as __namedExportsOrder,q as default};
