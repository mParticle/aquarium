var E=Object.defineProperty,B=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var g=(n,t,a)=>t in n?E(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,o=(n,t)=>{for(var a in t||(t={}))A.call(t,a)&&g(n,a,t[a]);if(u)for(var a of u(t))P.call(t,a)&&g(n,a,t[a]);return n},s=(n,t)=>B(n,_(t));import{j as e}from"./jsx-runtime-C9TrHvcC.js";import{r as y}from"./index-3OP4wdng.js";import{J as d,K as z,e as w,c as h,N as W,I as J,O as U}from"./NavigationItemsService-CuW-fsP7.js";import"./ErrorStateIcon-D_e7WI4k.js";import"./SuccessStateIcon-BOl5ngQb.js";import"./WarningStateIcon-_MuwvI3D.js";import"./_baseClone-DwBCp-Ss.js";import{F as O,s as S,t as M}from"./style-DdnVebKF.js";const X={title:"Components/feedback/Modal/Delete Confirm Modal",component:d,args:{}},K=()=>{const[n,t]=y.useState(!1),a=({key:c})=>{c==="delete"?t(!0):console.log("Menu item clicked:",c)},m=()=>{t(!1),U.success("Item deleted successfully")},p=()=>{t(!1)},v={menu:{items:[{key:"edit",label:"Edit"},{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"},{key:"delete",label:"Delete",danger:!0}],onClick:a}},F=[{key:"1",name:"Item Name",type:"Item Type",category:"Category A",createdBy:"John Doe",actions:e.jsx(W,s(o({},v),{placement:"bottom",children:e.jsx("a",{onClick:c=>c.preventDefault(),children:e.jsx(J,{name:"moreActions",size:"lg",color:"default"})})}))}],N=[{title:"Name",dataIndex:"name",key:"name",width:"200px"},{title:"Type",dataIndex:"type",key:"type",width:"150px"},{title:"Category",dataIndex:"category",key:"category",width:"150px"},{title:"Created by",dataIndex:"createdBy",key:"createdBy",width:"150px"},{title:"Actions",dataIndex:"actions",key:"actions",align:"center",width:"100px"}];return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx(z,{columns:N,dataSource:F,pagination:!1,size:"middle",className:"no-hover-table"}),e.jsx("style",{children:`
          .no-hover-table .ant-table-tbody > tr:hover > td {
            background: transparent !important;
          }
        `})]}),e.jsx(d,{title:"Delete item?",open:n,onCancel:p,onOk:m,children:e.jsxs("div",{children:[e.jsxs("p",{children:["This action will permanently delete ",e.jsx("span",{style:{fontWeight:O},children:"Item Name"})," and all associated data. If this item is currently being used in other areas of the system, those connections will be removed."]}),e.jsx("p",{style:{color:M,marginTop:S},children:"This action can't be undone."})]})})]})},r={render:K},R=()=>{const[n,t]=y.useState(!1),a=()=>{t(!0)},m=()=>{t(!1)},p=()=>{t(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(w,{type:"default",onClick:a,children:"View Delete Confirm Modal"}),e.jsx(d,{title:"Delete item?",open:n,onCancel:p,onOk:m,children:e.jsxs("div",{children:[e.jsxs("p",{children:["This action will permanently delete ",e.jsx("span",{style:{fontWeight:O},children:"Item Name"})," and all associated data. If this item is currently being used in other areas of the system, those connections will be removed."]}),e.jsx("p",{style:{color:M,marginTop:S},children:"This action can't be undone."})]})})]})},l={render:R},i={render:()=>{const[n,t]=y.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(w,{danger:!0,onClick:()=>t(!0),children:"Delete Item"}),e.jsx(d,{title:"Delete item?",open:n,onCancel:()=>t(!1),onOk:()=>{t(!1),console.log("Item deleted")},children:e.jsxs(e.Fragment,{children:[e.jsxs(h.Paragraph,{children:["This action will permanently delete ",e.jsx(h.Text,{strong:!0,children:"Item Name"})," and all associated data. If this item is currently being used in other areas of the system, those connections will be removed."]}),e.jsx(h.Text,{type:"danger",children:"This action can't be undone."})]})})]})}};var x,f,T;r.parameters=s(o({},r.parameters),{docs:s(o({},(x=r.parameters)==null?void 0:x.docs),{source:o({originalSource:`{
  render: DeleteConfirmTemplate
}`},(T=(f=r.parameters)==null?void 0:f.docs)==null?void 0:T.source)})});var j,b,C;l.parameters=s(o({},l.parameters),{docs:s(o({},(j=l.parameters)==null?void 0:j.docs),{source:o({originalSource:`{
  render: SimpleDeleteConfirmTemplate
}`},(C=(b=l.parameters)==null?void 0:b.docs)==null?void 0:C.source)})});var D,I,k;i.parameters=s(o({},i.parameters),{docs:s(o({},(D=i.parameters)==null?void 0:D.docs),{source:o({originalSource:`{
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
}`},(k=(I=i.parameters)==null?void 0:I.docs)==null?void 0:k.source)})});const V=["UXFlow","DeleteConfirm","SimpleExample"],te=Object.freeze(Object.defineProperty({__proto__:null,DeleteConfirm:l,SimpleExample:i,UXFlow:r,__namedExportsOrder:V,default:X},Symbol.toStringTag,{value:"Module"}));export{te as D,i as S};
