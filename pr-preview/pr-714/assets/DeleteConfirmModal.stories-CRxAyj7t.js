import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-ZAwtOOsv.js";import{X as l,Y as b,c as h,b as m,Z as j,I as C,_ as D}from"./UnauthorizedTooltip-C-uexwNG.js";import"./ErrorStateIcon-B6JkuEkJ.js";import"./SuccessStateIcon-BoEEKEoh.js";import"./WarningStateIcon-DvK-CXgy.js";import{F as y,w as u,E as g}from"./style-BLGxefMg.js";const I={title:"Components/feedback/Modal/Delete Confirm Modal",component:l,args:{}},k=()=>{const[n,t]=p.useState(!1),i=({key:r})=>{r==="delete"?t(!0):console.log("Menu item clicked:",r)},c=()=>{t(!1),D.success("Item deleted successfully")},d=()=>{t(!1)},x={menu:{items:[{key:"edit",label:"Edit"},{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"},{key:"delete",label:"Delete",danger:!0}],onClick:i}},f=[{key:"1",name:"Item Name",type:"Item Type",category:"Category A",createdBy:"John Doe",actions:e.jsx(j,{...x,placement:"bottom",children:e.jsx("a",{onClick:r=>r.preventDefault(),children:e.jsx(C,{name:"moreActions",size:"lg",color:"default"})})})}],T=[{title:"Name",dataIndex:"name",key:"name",width:"200px"},{title:"Type",dataIndex:"type",key:"type",width:"150px"},{title:"Category",dataIndex:"category",key:"category",width:"150px"},{title:"Created by",dataIndex:"createdBy",key:"createdBy",width:"150px"},{title:"Actions",dataIndex:"actions",key:"actions",align:"center",width:"100px"}];return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx(b,{columns:T,dataSource:f,pagination:!1,size:"middle",className:"no-hover-table"}),e.jsx("style",{children:`
          .no-hover-table .ant-table-tbody > tr:hover > td {
            background: transparent !important;
          }
        `})]}),e.jsx(l,{title:"Delete item?",open:n,onCancel:d,onOk:c,children:e.jsxs("div",{children:[e.jsxs("p",{children:["This action will permanently delete ",e.jsx("span",{style:{fontWeight:y},children:"Item Name"})," and all associated data. If this item is currently being used in other areas of the system, those connections will be removed."]}),e.jsx("p",{style:{color:g,marginTop:u},children:"This action can't be undone."})]})})]})},a={render:k},w=()=>{const[n,t]=p.useState(!1),i=()=>{t(!0)},c=()=>{t(!1)},d=()=>{t(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(h,{type:"default",onClick:i,children:"View Delete Confirm Modal"}),e.jsx(l,{title:"Delete item?",open:n,onCancel:d,onOk:c,children:e.jsxs("div",{children:[e.jsxs("p",{children:["This action will permanently delete ",e.jsx("span",{style:{fontWeight:y},children:"Item Name"})," and all associated data. If this item is currently being used in other areas of the system, those connections will be removed."]}),e.jsx("p",{style:{color:g,marginTop:u},children:"This action can't be undone."})]})})]})},o={render:w},s={render:()=>{const[n,t]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(h,{danger:!0,onClick:()=>t(!0),children:"Delete Item"}),e.jsx(l,{title:"Delete item?",open:n,onCancel:()=>t(!1),onOk:()=>{t(!1),console.log("Item deleted")},children:e.jsxs(e.Fragment,{children:[e.jsxs(m.Paragraph,{children:["This action will permanently delete ",e.jsx(m.Text,{strong:!0,children:"Item Name"})," and all associated data. If this item is currently being used in other areas of the system, those connections will be removed."]}),e.jsx(m.Text,{type:"danger",children:"This action can't be undone."})]})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: DeleteConfirmTemplate
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: SimpleDeleteConfirmTemplate
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const S=["UXFlow","DeleteConfirm","SimpleExample"],B=Object.freeze(Object.defineProperty({__proto__:null,DeleteConfirm:o,SimpleExample:s,UXFlow:a,__namedExportsOrder:S,default:I},Symbol.toStringTag,{value:"Module"}));export{B as D,s as S};
