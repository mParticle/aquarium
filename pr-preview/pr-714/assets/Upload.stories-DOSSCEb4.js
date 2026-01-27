import{j as o,a2 as a,i as n,I as r}from"./iframe-B6Y2oegk.js";const l={title:"Components/Data Entry/Upload",component:e=>o.jsx(a,{...e,children:o.jsx(n,{icon:o.jsx(r,{name:"mpLogo"}),children:"Click to Upload"})}),args:{accept:".jpg,.png,.gif",action:"/upload",beforeUpload:(e,i)=>(alert("Before Upload:"),!0),customRequest:void 0,data:e=>(alert("Custom Data:"),{name:e.name,type:e.type}),defaultFileList:[],directory:!1,disabled:!1,fileList:[],headers:{Authorization:"Bearer token"},iconRender:void 0,isImageUrl:void 0,itemRender:void 0,listType:"text",maxCount:void 0,method:"post",multiple:!1,name:"file",openFileDialogOnClick:!0,previewFile:void 0,progress:{strokeWidth:2,showInfo:!1},showUploadList:!0,withCredentials:!1,onChange:e=>{alert("Upload Change:")},onDrop:e=>{alert("File Drop:")},onDownload:e=>{alert("Download:")},onPreview:e=>{alert("Preview:")},onRemove:e=>(alert("Remove:"),!0)}},t={render:()=>o.jsx(a,{multiple:!1,showUploadList:{showDownloadIcon:!1,showRemoveIcon:!1},maxCount:1,fileList:[],accept:"text/csv",children:o.jsx(n,{icon:o.jsx(r,{name:"upload",size:"sm"}),children:"Upload"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Upload multiple={false} showUploadList={{
      showDownloadIcon: false,
      showRemoveIcon: false
    }} maxCount={1} fileList={[]} accept="text/csv">
        <Button icon={<Icon name="upload" size="sm" />}>Upload</Button>
      </Upload>;
  }
}`,...t.parameters?.docs?.source}}};const s=["Primary"],p=Object.freeze(Object.defineProperty({__proto__:null,Primary:t,__namedExportsOrder:s,default:l},Symbol.toStringTag,{value:"Module"}));export{p as U,l as m};
