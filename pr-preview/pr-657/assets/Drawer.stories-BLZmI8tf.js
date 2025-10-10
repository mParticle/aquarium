var R=Object.defineProperty,B=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var m=(r,t,n)=>t in r?R(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,s=(r,t)=>{for(var n in t||(t={}))A.call(t,n)&&m(r,n,t[n]);if(f)for(var n of f(t))L.call(t,n)&&m(r,n,t[n]);return r},o=(r,t)=>B(r,T(t));import{j as e}from"./jsx-runtime-CVnACwZl.js";import{r as h}from"./index-3OP4wdng.js";import{z as p,e as i,T as z,I as H}from"./NavigationItemsService-BrFDf0TK.js";import"./ErrorStateIcon-w4D1x5VF.js";import"./SuccessStateIcon-D6uerxEu.js";import"./WarningStateIcon-DR3bdROO.js";import"./_baseClone-CXAe4HsA.js";const W={title:"Components/Feedback/Drawer",component:p,parameters:{docs:{description:{component:"A panel which slides in from the edge of the screen."}}},args:{}},a={render:()=>{const[r,t]=h.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>t(!0),children:"Open Drawer"}),e.jsx(p,{title:"Drawer Title",open:r,onClose:()=>t(!1),width:378,placement:"right",children:e.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:"#f5f5f5",border:"1px solid #d9d9d9",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"center",color:"#666"},children:"Content"})})]})},parameters:{docs:{description:{story:"A default drawer (378px width) perfect for settings panels and forms."}}}},l={render:()=>{const[r,t]=h.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>t(!0),children:"Open Drawer"}),e.jsx(p,{title:"Drawer Title",open:r,onClose:()=>t(!1),width:736,placement:"right",children:e.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:"#f5f5f5",border:"1px solid #d9d9d9",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"center",color:"#666"},children:"Content"})})]})},parameters:{docs:{description:{story:"A large drawer (736px width) ideal for detailed forms, project management interfaces, or content-heavy layouts."}}}},d={render:()=>{const[r,t]=h.useState(!1),n=()=>{console.log("Copy link clicked")},u=e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[e.jsx("span",{children:"Drawer Title"}),e.jsx(z,{title:"Copy Link",children:e.jsx(i,{type:"text",size:"small",onClick:n,style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"4px",minWidth:"32px",height:"32px"},children:e.jsx(H,{name:"link",size:"sm"})})})]});return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>t(!0),children:"Open Drawer"}),e.jsx(p,{title:u,open:r,onClose:()=>t(!1),width:378,placement:"right",children:e.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:"#f5f5f5",border:"1px solid #d9d9d9",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"center",color:"#666"},children:"Content"})})]})},parameters:{docs:{description:{story:"A default drawer with a link icon in the header."}}}},c={render:()=>{const[r,t]=h.useState(!1),n=()=>{console.log("Reset clicked")},u=()=>{console.log("Save clicked")},I=e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[e.jsx("span",{children:"Drawer Title"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(i,{onClick:n,children:"Reset"}),e.jsx(i,{type:"primary",onClick:u,children:"Save"})]})]});return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>t(!0),children:"Open Drawer"}),e.jsx(p,{title:I,open:r,onClose:()=>t(!1),width:378,placement:"right",children:e.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:"#f5f5f5",border:"1px solid #d9d9d9",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"center",color:"#666"},children:"Content"})})]})},parameters:{docs:{description:{story:"A drawer with action buttons (Reset and Save) in the header."}}}};var x,y,w;a.parameters=o(s({},a.parameters),{docs:o(s({},(x=a.parameters)==null?void 0:x.docs),{source:s({originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer title="Drawer Title" open={open} onClose={() => setOpen(false)} width={378} placement="right">
          <div style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#f5f5f5',
          border: '1px solid #d9d9d9',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666'
        }}>
            Content
          </div>
        </Drawer>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: 'A default drawer (378px width) perfect for settings panels and forms.'
      }
    }
  }
}`},(w=(y=a.parameters)==null?void 0:y.docs)==null?void 0:w.source)})});var g,C,k;l.parameters=o(s({},l.parameters),{docs:o(s({},(g=l.parameters)==null?void 0:g.docs),{source:s({originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer title="Drawer Title" open={open} onClose={() => setOpen(false)} width={736} placement="right">
          <div style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#f5f5f5',
          border: '1px solid #d9d9d9',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666'
        }}>
            Content
          </div>
        </Drawer>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: 'A large drawer (736px width) ideal for detailed forms, project management interfaces, or content-heavy layouts.'
      }
    }
  }
}`},(k=(C=l.parameters)==null?void 0:C.docs)==null?void 0:k.source)})});var j,b,D;d.parameters=o(s({},d.parameters),{docs:o(s({},(j=d.parameters)==null?void 0:j.docs),{source:s({originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    const handleCopyLink = () => {
      // Copy functionality would go here
      console.log('Copy link clicked');
    };
    const customHeader = <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%'
    }}>
        <span>Drawer Title</span>
        <Tooltip title="Copy Link">
          <Button type="text" size="small" onClick={handleCopyLink} style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4px',
          minWidth: '32px',
          height: '32px'
        }}>
            <Icon name="link" size="sm" />
          </Button>
        </Tooltip>
      </div>;
    return <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer title={customHeader} open={open} onClose={() => setOpen(false)} width={378} placement="right">
          <div style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#f5f5f5',
          border: '1px solid #d9d9d9',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666'
        }}>
            Content
          </div>
        </Drawer>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: 'A default drawer with a link icon in the header.'
      }
    }
  }
}`},(D=(b=d.parameters)==null?void 0:b.docs)==null?void 0:D.source)})});var v,O,S;c.parameters=o(s({},c.parameters),{docs:o(s({},(v=c.parameters)==null?void 0:v.docs),{source:s({originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    const handleReset = () => {
      console.log('Reset clicked');
    };
    const handleSave = () => {
      console.log('Save clicked');
    };
    const customHeader = <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%'
    }}>
        <span>Drawer Title</span>
        <div style={{
        display: 'flex',
        gap: '8px'
      }}>
          <Button onClick={handleReset}>Reset</Button>
          <Button type="primary" onClick={handleSave}>
            Save
          </Button>
        </div>
      </div>;
    return <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer title={customHeader} open={open} onClose={() => setOpen(false)} width={378} placement="right">
          <div style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#f5f5f5',
          border: '1px solid #d9d9d9',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666'
        }}>
            Content
          </div>
        </Drawer>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: 'A drawer with action buttons (Reset and Save) in the header.'
      }
    }
  }
}`},(S=(O=c.parameters)==null?void 0:O.docs)==null?void 0:S.source)})});const _=["Primary","LargeDrawer","DefaultDrawerWithIcon","DrawerWithButtons"],N=Object.freeze(Object.defineProperty({__proto__:null,DefaultDrawerWithIcon:d,DrawerWithButtons:c,LargeDrawer:l,Primary:a,__namedExportsOrder:_,default:W},Symbol.toStringTag,{value:"Module"}));export{N as D,l as L,a as P,c as a,d as b};
