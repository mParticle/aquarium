import{b5 as r,y as p,j as e,aJ as b,b6 as h,ag as y,b7 as u,i as g,T as m,a7 as j,I as C,a_ as D}from"./iframe-D7Ys59RG.js";const I={title:"Components/feedback/Modal/Delete Confirm Modal",component:r,args:{}},k=()=>{const[a,t]=p.useState(!1),i=({key:l})=>{l==="delete"?t(!0):console.log("Menu item clicked:",l)},c=()=>{t(!1),D.success("Item deleted successfully")},d=()=>{t(!1)},x={menu:{items:[{key:"edit",label:"Edit"},{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"},{key:"delete",label:"Delete",danger:!0}],onClick:i}},f=[{key:"1",name:"Item Name",type:"Item Type",category:"Category A",createdBy:"John Doe",actions:e.jsx(j,{...x,placement:"bottom",children:e.jsx("a",{onClick:l=>l.preventDefault(),children:e.jsx(C,{name:"moreActions",size:"lg",color:"default"})})})}],T=[{title:"Name",dataIndex:"name",key:"name",width:"200px"},{title:"Type",dataIndex:"type",key:"type",width:"150px"},{title:"Category",dataIndex:"category",key:"category",width:"150px"},{title:"Created by",dataIndex:"createdBy",key:"createdBy",width:"150px"},{title:"Actions",dataIndex:"actions",key:"actions",align:"center",width:"100px"}];return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx(b,{columns:T,dataSource:f,pagination:!1,size:"middle",className:"no-hover-table"}),e.jsx("style",{children:`
          .no-hover-table .ant-table-tbody > tr:hover > td {
            background: transparent !important;
          }
        `})]}),e.jsx(r,{title:"Delete item?",open:a,onCancel:d,onOk:c,children:e.jsxs("div",{children:[e.jsxs("p",{children:["This action will permanently delete ",e.jsx("span",{style:{fontWeight:h},children:"Item Name"})," and all associated data. If this item is currently being used in other areas of the system, those connections will be removed."]}),e.jsx("p",{style:{color:u,marginTop:y},children:"This action can't be undone."})]})})]})},n={render:k},w=()=>{const[a,t]=p.useState(!1),i=()=>{t(!0)},c=()=>{t(!1)},d=()=>{t(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(g,{type:"default",onClick:i,children:"View Delete Confirm Modal"}),e.jsx(r,{title:"Delete item?",open:a,onCancel:d,onOk:c,children:e.jsxs("div",{children:[e.jsxs("p",{children:["This action will permanently delete ",e.jsx("span",{style:{fontWeight:h},children:"Item Name"})," and all associated data. If this item is currently being used in other areas of the system, those connections will be removed."]}),e.jsx("p",{style:{color:u,marginTop:y},children:"This action can't be undone."})]})})]})},s={render:w},o={render:()=>{const[a,t]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(g,{danger:!0,onClick:()=>t(!0),children:"Delete Item"}),e.jsx(r,{title:"Delete item?",open:a,onCancel:()=>t(!1),onOk:()=>{t(!1),console.log("Item deleted")},children:e.jsxs(e.Fragment,{children:[e.jsxs(m.Paragraph,{children:["This action will permanently delete ",e.jsx(m.Text,{strong:!0,children:"Item Name"})," and all associated data. If this item is currently being used in other areas of the system, those connections will be removed."]}),e.jsx(m.Text,{type:"danger",children:"This action can't be undone."})]})})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: DeleteConfirmTemplate
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: SimpleDeleteConfirmTemplate
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button danger onClick={() => setOpen(true)}>
          Delete Item
        </Button>

        <DeleteConfirmModal title="Delete item?" open={open} onCancel={() => setOpen(false)} onOk={() => {
        setOpen(false);
        console.log('Item deleted');
      }}>
          <>
            <Typography.Paragraph>
              This action will permanently delete <Typography.Text strong>Item Name</Typography.Text> and all associated
              data. If this item is currently being used in other areas of the system, those connections will be
              removed.
            </Typography.Paragraph>
            <Typography.Text type="danger">This action can&apos;t be undone.</Typography.Text>
          </>
        </DeleteConfirmModal>
      </>;
  }
}`,...o.parameters?.docs?.source}}};const S=["UXFlow","DeleteConfirm","SimpleExample"],O=Object.freeze(Object.defineProperty({__proto__:null,DeleteConfirm:s,SimpleExample:o,UXFlow:n,__namedExportsOrder:S,default:I},Symbol.toStringTag,{value:"Module"}));export{O as D,o as S};
