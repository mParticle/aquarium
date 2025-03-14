var d=Object.defineProperty,D=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var p=(r,e,t)=>e in r?d(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,s=(r,e)=>{for(var t in e||(e={}))w.call(e,t)&&p(r,t,e[t]);if(l)for(var t of l(e))x.call(e,t)&&p(r,t,e[t]);return r},a=(r,e)=>D(r,f(e));import{j as n}from"./jsx-runtime-BcCOBRXo.js";import{r as O}from"./index-CNk6hRaE.js";import{K as u,g as j}from"./NavigationItemsService-CUhqNHHc.js";const g={title:"Components/Feedback/Drawer",component:u,args:{}},o={render:()=>{const[r,e]=O.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(j,{onClick:()=>e(!0),children:"Open Drawer"}),n.jsx(u,{title:"Drawer Title",open:r,onClose:()=>e(!1),children:n.jsx("p",{children:"Drawer content"})})]})}};var c,i,m;o.parameters=a(s({},o.parameters),{docs:a(s({},(c=o.parameters)==null?void 0:c.docs),{source:s({originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer title="Drawer Title" open={open} onClose={() => setOpen(false)}>
          <p>Drawer content</p>
        </Drawer>
      </>;
  }
}`},(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source)})});const h=["Primary"],C=Object.freeze(Object.defineProperty({__proto__:null,Primary:o,__namedExportsOrder:h,default:g},Symbol.toStringTag,{value:"Module"}));export{C as D,g as m};
