import{j as i,a2 as p,i as d,I as c}from"./iframe-D7Ys59RG.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"Components/Not Prod Ready/Data Entry/Upload",component:e=>i.jsx(p,{...e,children:i.jsx(d,{icon:i.jsx(c,{name:"mpLogo"}),children:"Click to Upload"})}),args:{accept:".jpg,.png,.gif",action:"/upload",beforeUpload:(e,l)=>(alert("Before Upload:"),!0),customRequest:void 0,data:e=>(alert("Custom Data:"),{name:e.name,type:e.type}),defaultFileList:[],directory:!1,disabled:!1,fileList:[],headers:{Authorization:"Bearer token"},iconRender:void 0,isImageUrl:void 0,itemRender:void 0,listType:"text",maxCount:void 0,method:"post",multiple:!1,name:"file",openFileDialogOnClick:!0,previewFile:void 0,progress:{strokeWidth:2,showInfo:!1},showUploadList:!0,withCredentials:!1,onChange:e=>{alert("Upload Change:")},onDrop:e=>{alert("File Drop:")},onDownload:e=>{alert("Download:")},onPreview:e=>{alert("Preview:")},onRemove:e=>(alert("Remove:"),!0)}},r={},o={args:{listType:"picture-card"}},a={args:{onDrop:e=>{alert("File Drop:")}}},s={args:{progress:{strokeWidth:5,showInfo:!0}}},t={args:{accept:".pdf,.docx"}},n={args:{disabled:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    listType: 'picture-card'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    onDrop: event => {
      alert('File Drop:');
    }
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    progress: {
      strokeWidth: 5,
      showInfo: true
    }
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    accept: '.pdf,.docx'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};const f=["Primary","CustomListType","DragAndDropUpload","CustomProgress","CustomAcceptFileType","DisabledUpload"];export{t as CustomAcceptFileType,o as CustomListType,s as CustomProgress,n as DisabledUpload,a as DragAndDropUpload,r as Primary,f as __namedExportsOrder,g as default};
