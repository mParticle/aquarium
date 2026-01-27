import{ah as p,y as u,j as e,i as o,ai as n,aj as h,ak as g,g as y,al as w,u as f,am as x,an as b,I as j}from"./iframe-B6Y2oegk.js";const{expect:B,screen:C,userEvent:k,within:D}=__STORYBOOK_MODULE_TEST__,T={title:"Components/Feedback/Drawer",component:p,tags:["play-test-validation"],parameters:{docs:{description:{component:"A panel which slides in from the edge of the screen."}}},args:{}},i={render:()=>{const[r,t]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>t(!0),children:"Open Drawer"}),e.jsx(p,{title:"Drawer Title",open:r,onClose:()=>t(!1),children:e.jsx(n,{style:{width:"100%",height:"100%",backgroundColor:w,border:`1px solid ${y}`,borderRadius:g,color:h},align:"center",justify:"center",children:"Content"})})]})},play:async({canvasElement:r})=>{const s=D(r).getByRole("button",{name:"Open Drawer"});await k.click(s);const a=await C.findByText("Content");await B(a).toBeVisible();const m=C.getByLabelText("Close");await k.click(m)},parameters:{docs:{description:{story:"A default drawer perfect for settings panels."}}}},l={render:()=>{const[r,t]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>t(!0),children:"Open Drawer"}),e.jsx(p,{title:"Drawer Title",open:r,onClose:()=>t(!1),width:"large",placement:"right",children:e.jsx(n,{style:{width:"100%",height:"100%",backgroundColor:w,border:`1px solid ${y}`,borderRadius:g,color:h},align:"center",justify:"center",children:"Content"})})]})},parameters:{docs:{description:{story:"A large drawer (736px width) ideal for detailed forms, project management interfaces, or content-heavy layouts."}}}},c={render:()=>{const[r,t]=u.useState(!1),s=()=>{console.log("Copy link clicked")},a=e.jsxs(n,{justify:"space-between",align:"center",style:{width:"100%"},children:[e.jsx("span",{children:"Drawer Title"}),e.jsx(f,{title:"Copy Link",children:e.jsx(o,{type:"text",size:"small",onClick:s,style:{padding:b,minWidth:x,height:x},children:e.jsx(j,{name:"link",size:"sm"})})})]});return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>t(!0),children:"Open Drawer"}),e.jsx(p,{title:a,open:r,onClose:()=>t(!1),placement:"right",children:e.jsx(n,{style:{width:"100%",height:"100%",backgroundColor:w,border:`1px solid ${y}`,borderRadius:g,color:h},align:"center",justify:"center",children:"Content"})})]})},parameters:{docs:{description:{story:"A default drawer with a link icon in the header for sharing or bookmarking."}}}},d={render:()=>{const[r,t]=u.useState(!1),s=()=>{console.log("Reset clicked")},a=()=>{console.log("Save clicked")},m=e.jsxs(n,{justify:"space-between",align:"center",style:{width:"100%"},children:[e.jsx("span",{children:"Drawer Title"}),e.jsxs(n,{gap:"small",children:[e.jsx(o,{onClick:s,children:"Reset"}),e.jsx(o,{type:"primary",onClick:a,children:"Save"})]})]});return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>t(!0),children:"Open Drawer"}),e.jsx(p,{title:m,open:r,onClose:()=>t(!1),placement:"right",children:e.jsx(n,{style:{width:"100%",height:"100%",backgroundColor:w,border:`1px solid ${y}`,borderRadius:g,color:h},align:"center",justify:"center",children:"Content"})})]})},parameters:{docs:{description:{story:"A drawer with action buttons (Reset and Save) in the header."}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button', {
      name: 'Open Drawer'
    });
    await userEvent.click(openButton);
    const drawerContent = await screen.findByText('Content');
    await expect(drawerContent).toBeVisible();
    const closeButton = screen.getByLabelText('Close');
    await userEvent.click(closeButton);
  },
  parameters: {
    docs: {
      description: {
        story: 'A default drawer perfect for settings panels.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer title="Drawer Title" open={open} onClose={() => setOpen(false)} width="large" placement="right">
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const O=["Primary","LargeDrawer","DrawerWithLink","DrawerWithButtons"],R=Object.freeze(Object.defineProperty({__proto__:null,DrawerWithButtons:d,DrawerWithLink:c,LargeDrawer:l,Primary:i,__namedExportsOrder:O,default:T},Symbol.toStringTag,{value:"Module"}));export{R as D,l as L,i as P,d as a,c as b};
