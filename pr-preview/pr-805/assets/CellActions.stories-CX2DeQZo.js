import{ar as r,j as i,a8 as y,I as w,w as g}from"./iframe-CPW_KvgL.js";import"./preload-helper-PPVm8Dsz.js";const{expect:s,userEvent:d,within:t}=__STORYBOOK_MODULE_TEST__,m=[{key:"1",name:"Welcome Series",status:"active",isReadOnly:!1},{key:"2",name:"Legacy Pipeline",status:"archived",isReadOnly:!0},{key:"3",name:"Black Friday",status:"active",isReadOnly:!1}],T={title:"UX Patterns/Data Exploration/Table/Cell Types/Actions",component:r,parameters:{docs:{description:{component:"A More Actions cell consolidates row-level operations into a single dropdown. Destructive actions render in red. Hide actions that are not applicable to a row; disable (with a tooltip) actions that exist but are not currently allowed."}}}},h=e=>({items:[{key:"edit",label:"Edit",disabled:e.isReadOnly},{key:"duplicate",label:"Duplicate"},e.status==="active"&&{key:"archive",label:"Archive"},{key:"delete",label:e.isReadOnly?i.jsx(g,{title:"Read-only records can't be deleted",placement:"left",children:i.jsx("span",{children:"Delete"})}):"Delete",danger:!0,disabled:e.isReadOnly}].filter(Boolean),onClick:({key:n,domEvent:a})=>{a.stopPropagation(),console.log("Action:",n,"on",e.name)}}),u=[{title:"Name",dataIndex:"name",key:"name"},{title:"Status",dataIndex:"status",key:"status"},{title:"Actions",key:"actions",align:"center",width:90,render:(e,o)=>i.jsx(y,{menu:h(o),placement:"bottom",children:i.jsx("a",{"aria-label":`Actions for ${o.name}`,onClick:n=>n.stopPropagation(),children:i.jsx(w,{name:"moreActions",size:"lg",color:"default"})})})}],l={render:()=>i.jsx(r,{columns:u,dataSource:m,pagination:!1}),play:async({canvasElement:e})=>{const n=t(e).getByLabelText("Actions for Welcome Series");await d.click(n);const a=await t(document.body).findByRole("menu");await s(t(a).getByText("Edit")).toBeInTheDocument(),await s(t(a).getByText("Duplicate")).toBeInTheDocument(),await s(t(a).getByText("Archive")).toBeInTheDocument(),await s(t(a).getByText("Delete")).toBeInTheDocument()}},c={name:"Disabled item with tooltip",parameters:{docs:{description:{story:'When an action is unavailable for a row, disable the menu item and wrap its label in a `Tooltip` explaining why. Hover the actions button on the "Legacy Pipeline" row.'}}},render:()=>i.jsx(r,{columns:u,dataSource:m,pagination:!1}),play:async({canvasElement:e})=>{const n=t(e).getByLabelText("Actions for Legacy Pipeline");await d.click(n);const a=await t(document.body).findByRole("menu"),p=t(a).getByText("Delete");await s(p.closest('[role="menuitem"]')).toHaveClass(/disabled/)}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Table<Row> columns={actionsColumns} dataSource={data} pagination={false} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByLabelText('Actions for Welcome Series');
    await userEvent.click(trigger);
    const menu = await within(document.body).findByRole('menu');
    await expect(within(menu).getByText('Edit')).toBeInTheDocument();
    await expect(within(menu).getByText('Duplicate')).toBeInTheDocument();
    await expect(within(menu).getByText('Archive')).toBeInTheDocument();
    await expect(within(menu).getByText('Delete')).toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Disabled item with tooltip',
  parameters: {
    docs: {
      description: {
        story: 'When an action is unavailable for a row, disable the menu item and wrap its label in a \`Tooltip\` explaining why. Hover the actions button on the "Legacy Pipeline" row.'
      }
    }
  },
  render: () => <Table<Row> columns={actionsColumns} dataSource={data} pagination={false} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByLabelText('Actions for Legacy Pipeline');
    await userEvent.click(trigger);
    const menu = await within(document.body).findByRole('menu');
    const deleteItem = within(menu).getByText('Delete');
    await expect(deleteItem.closest('[role="menuitem"]')).toHaveClass(/disabled/);
  }
}`,...c.parameters?.docs?.source}}};const v=["Default","DisabledWithTooltip"];export{l as Default,c as DisabledWithTooltip,v as __namedExportsOrder,T as default};
