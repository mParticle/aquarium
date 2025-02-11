var h=Object.defineProperty,v=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var i=(e,o,t)=>o in e?h(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,r=(e,o)=>{for(var t in o||(o={}))w.call(o,t)&&i(e,t,o[t]);if(s)for(var t of s(o))x.call(o,t)&&i(e,t,o[t]);return e},l=(e,o)=>v(e,U(o));import{j as a}from"./jsx-runtime-BcCOBRXo.js";import{U as c,g as u,I as f}from"./UserPreferences-B4C7sIlx.js";import"./_baseClone-DBzvlRjn.js";const g={title:"Components/Data Entry/Upload",component:e=>a.jsx(c,l(r({},e),{children:a.jsx(u,{icon:a.jsx(f,{name:"mpLogo"}),children:"Click to Upload"})})),args:{accept:".jpg,.png,.gif",action:"/upload",beforeUpload:(e,o)=>(alert("Before Upload:"),!0),customRequest:void 0,data:e=>(alert("Custom Data:"),{name:e.name,type:e.type}),defaultFileList:[],directory:!1,disabled:!1,fileList:[],headers:{Authorization:"Bearer token"},iconRender:void 0,isImageUrl:void 0,itemRender:void 0,listType:"text",maxCount:void 0,method:"post",multiple:!1,name:"file",openFileDialogOnClick:!0,previewFile:void 0,progress:{strokeWidth:2,showInfo:!1},showUploadList:!0,withCredentials:!1,onChange:e=>{alert("Upload Change:")},onDrop:e=>{alert("File Drop:")},onDownload:e=>{alert("Download:")},onPreview:e=>{alert("Preview:")},onRemove:e=>(alert("Remove:"),!0)}},n={render:()=>a.jsx(c,{multiple:!1,showUploadList:{showDownloadIcon:!1,showRemoveIcon:!1},maxCount:1,fileList:[],accept:"text/csv",children:a.jsx(u,{icon:a.jsx(f,{name:"upload",size:"sm"}),children:"Upload"})})};var d,p,m;n.parameters=l(r({},n.parameters),{docs:l(r({},(d=n.parameters)==null?void 0:d.docs),{source:r({originalSource:`{
  render: () => {
    return <Upload multiple={false} showUploadList={{
      showDownloadIcon: false,
      showRemoveIcon: false
    }} maxCount={1} fileList={[]} accept="text/csv">
        <Button icon={<Icon name="upload" size="sm" />}>Upload</Button>
      </Upload>;
  }
}`},(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source)})});const j=["Primary"],L=Object.freeze(Object.defineProperty({__proto__:null,Primary:n,__namedExportsOrder:j,default:g},Symbol.toStringTag,{value:"Module"}));export{L as U,g as m};
