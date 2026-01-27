var $=Object.defineProperty,z=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var f=(t,r,o)=>r in t?$(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,n=(t,r)=>{for(var o in r||(r={}))W.call(r,o)&&f(t,o,r[o]);if(C)for(var o of C(r))_.call(r,o)&&f(t,o,r[o]);return t},s=(t,r)=>z(t,P(r));import{j as e}from"./jsx-runtime-C9TrHvcC.js";import{r as u}from"./index-3OP4wdng.js";import{O as h,c as a,V as i,T as E,I}from"./UnauthorizedTooltip-eZKPU17v.js";import"./ErrorStateIcon-DkRO_jVf.js";import"./SuccessStateIcon-BsHb_NtW.js";import"./WarningStateIcon-UE2i1S7-.js";import"./_baseClone-DwBCp-Ss.js";import{x as m,y as g,n as y,z as x,A as k,D as X}from"./style-BbwCNso5.js";const M={title:"Components/Feedback/Drawer",component:h,parameters:{docs:{description:{component:"A panel which slides in from the edge of the screen."}}},args:{}},l={render:()=>{const[t,r]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>r(!0),children:"Open Drawer"}),e.jsx(h,{title:"Drawer Title",open:t,onClose:()=>r(!1),children:e.jsx(i,{style:{width:"100%",height:"100%",backgroundColor:x,border:`1px solid ${y}`,borderRadius:g,color:m},align:"center",justify:"center",children:"Content"})})]})},parameters:{docs:{description:{story:"A default drawer perfect for settings panels."}}}},c={render:()=>{const[t,r]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>r(!0),children:"Open Drawer"}),e.jsx(h,{title:"Drawer Title",open:t,onClose:()=>r(!1),width:"large",placement:"right",children:e.jsx(i,{style:{width:"100%",height:"100%",backgroundColor:x,border:`1px solid ${y}`,borderRadius:g,color:m},align:"center",justify:"center",children:"Content"})})]})},parameters:{docs:{description:{story:"A large drawer (736px width) ideal for detailed forms, project management interfaces, or content-heavy layouts."}}}},d={render:()=>{const[t,r]=u.useState(!1),o=()=>{console.log("Copy link clicked")},w=e.jsxs(i,{justify:"space-between",align:"center",style:{width:"100%"},children:[e.jsx("span",{children:"Drawer Title"}),e.jsx(E,{title:"Copy Link",children:e.jsx(a,{type:"text",size:"small",onClick:o,style:{padding:X,minWidth:k,height:k},children:e.jsx(I,{name:"link",size:"sm"})})})]});return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>r(!0),children:"Open Drawer"}),e.jsx(h,{title:w,open:t,onClose:()=>r(!1),placement:"right",children:e.jsx(i,{style:{width:"100%",height:"100%",backgroundColor:x,border:`1px solid ${y}`,borderRadius:g,color:m},align:"center",justify:"center",children:"Content"})})]})},parameters:{docs:{description:{story:"A default drawer with a link icon in the header for sharing or bookmarking."}}}},p={render:()=>{const[t,r]=u.useState(!1),o=()=>{console.log("Reset clicked")},w=()=>{console.log("Save clicked")},H=e.jsxs(i,{justify:"space-between",align:"center",style:{width:"100%"},children:[e.jsx("span",{children:"Drawer Title"}),e.jsxs(i,{gap:"small",children:[e.jsx(a,{onClick:o,children:"Reset"}),e.jsx(a,{type:"primary",onClick:w,children:"Save"})]})]});return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>r(!0),children:"Open Drawer"}),e.jsx(h,{title:H,open:t,onClose:()=>r(!1),placement:"right",children:e.jsx(i,{style:{width:"100%",height:"100%",backgroundColor:x,border:`1px solid ${y}`,borderRadius:g,color:m},align:"center",justify:"center",children:"Content"})})]})},parameters:{docs:{description:{story:"A drawer with action buttons (Reset and Save) in the header."}}}};var j,b,D;l.parameters=s(n({},l.parameters),{docs:s(n({},(j=l.parameters)==null?void 0:j.docs),{source:n({originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer title="Drawer Title" open={open} onClose={() => setOpen(false)}>
          <Flex style={{
          width: '100%',
          height: '100%',
          backgroundColor: ColorFillTertiary,
          border: \`1px solid \${ColorBorderSecondary}\`,
          borderRadius: BorderRadius,
          color: ColorTextTertiary
        }} align="center" justify="center">
            Content
          </Flex>
        </Drawer>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: 'A default drawer perfect for settings panels.'
      }
    }
  }
}`},(D=(b=l.parameters)==null?void 0:b.docs)==null?void 0:D.source)})});var S,O,T;c.parameters=s(n({},c.parameters),{docs:s(n({},(S=c.parameters)==null?void 0:S.docs),{source:n({originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer title="Drawer Title" open={open} onClose={() => setOpen(false)} width='large' placement="right">
          <Flex style={{
          width: '100%',
          height: '100%',
          backgroundColor: ColorFillTertiary,
          border: \`1px solid \${ColorBorderSecondary}\`,
          borderRadius: BorderRadius,
          color: ColorTextTertiary
        }} align="center" justify="center">
            Content
          </Flex>
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
}`},(T=(O=c.parameters)==null?void 0:O.docs)==null?void 0:T.source)})});var B,F,R;d.parameters=s(n({},d.parameters),{docs:s(n({},(B=d.parameters)==null?void 0:B.docs),{source:n({originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    const handleCopyLink = () => {
      // Copy functionality would go here
      console.log('Copy link clicked');
    };
    const customHeader = <Flex justify="space-between" align="center" style={{
      width: '100%'
    }}>
        <span>Drawer Title</span>
        <Tooltip title="Copy Link">
          <Button type="text" size="small" onClick={handleCopyLink} style={{
          padding: PaddingXxs,
          minWidth: ControlHeight,
          height: ControlHeight
        }}>
            <Icon name="link" size="sm" />
          </Button>
        </Tooltip>
      </Flex>;
    return <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer title={customHeader} open={open} onClose={() => setOpen(false)} placement="right">
          <Flex style={{
          width: '100%',
          height: '100%',
          backgroundColor: ColorFillTertiary,
          border: \`1px solid \${ColorBorderSecondary}\`,
          borderRadius: BorderRadius,
          color: ColorTextTertiary
        }} align="center" justify="center">
            Content
          </Flex>
        </Drawer>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: 'A default drawer with a link icon in the header for sharing or bookmarking.'
      }
    }
  }
}`},(R=(F=d.parameters)==null?void 0:F.docs)==null?void 0:R.source)})});var v,A,L;p.parameters=s(n({},p.parameters),{docs:s(n({},(v=p.parameters)==null?void 0:v.docs),{source:n({originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    const handleReset = () => {
      console.log('Reset clicked');
    };
    const handleSave = () => {
      console.log('Save clicked');
    };
    const customHeader = <Flex justify="space-between" align="center" style={{
      width: '100%'
    }}>
        <span>Drawer Title</span>
        <Flex gap="small">
          <Button onClick={handleReset}>Reset</Button>
          <Button type="primary" onClick={handleSave}>
            Save
          </Button>
        </Flex>
      </Flex>;
    return <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer title={customHeader} open={open} onClose={() => setOpen(false)} placement="right">
          <Flex style={{
          width: '100%',
          height: '100%',
          backgroundColor: ColorFillTertiary,
          border: \`1px solid \${ColorBorderSecondary}\`,
          borderRadius: BorderRadius,
          color: ColorTextTertiary
        }} align="center" justify="center">
            Content
          </Flex>
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
}`},(L=(A=p.parameters)==null?void 0:A.docs)==null?void 0:L.source)})});const V=["Primary","LargeDrawer","DrawerWithLink","DrawerWithButtons"],ee=Object.freeze(Object.defineProperty({__proto__:null,DrawerWithButtons:p,DrawerWithLink:d,LargeDrawer:c,Primary:l,__namedExportsOrder:V,default:M},Symbol.toStringTag,{value:"Module"}));export{ee as D,c as L,l as P,p as a,d as b};
