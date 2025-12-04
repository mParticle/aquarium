var I=Object.defineProperty,S=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var u=(e,t,a)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,r=(e,t)=>{for(var a in t||(t={}))B.call(t,a)&&u(e,a,t[a]);if(l)for(var a of l(t))E.call(t,a)&&u(e,a,t[a]);return e},o=(e,t)=>S(e,A(t));import{j as m}from"./jsx-runtime-C9TrHvcC.js";import{U as W,e as O,I as _}from"./NavigationItemsService-CuW-fsP7.js";import"./ErrorStateIcon-D_e7WI4k.js";import"./SuccessStateIcon-BOl5ngQb.js";import"./WarningStateIcon-_MuwvI3D.js";import"./_baseClone-DwBCp-Ss.js";import"./index-3OP4wdng.js";import"./LightTheme-BtoaoHMG.js";import"./row-DlEJUZa0.js";import"./Context-R5ee3nrF.js";import"./useToken-BIYN7ogo.js";import"./presets-CQzyf-6F.js";import"./extends-CF3RwP-h.js";import"./index-DA79H6I3.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./AntdIcon-DRQs8XP6.js";import"./style-DdnVebKF.js";import"./WarningFilled-D6ijQqgK.js";const se={title:"Components/Not Prod Ready/Data Entry/Upload",component:e=>m.jsx(W,o(r({},e),{children:m.jsx(O,{icon:m.jsx(_,{name:"mpLogo"}),children:"Click to Upload"})})),args:{accept:".jpg,.png,.gif",action:"/upload",beforeUpload:(e,t)=>(alert("Before Upload:"),!0),customRequest:void 0,data:e=>(alert("Custom Data:"),{name:e.name,type:e.type}),defaultFileList:[],directory:!1,disabled:!1,fileList:[],headers:{Authorization:"Bearer token"},iconRender:void 0,isImageUrl:void 0,itemRender:void 0,listType:"text",maxCount:void 0,method:"post",multiple:!1,name:"file",openFileDialogOnClick:!0,previewFile:void 0,progress:{strokeWidth:2,showInfo:!1},showUploadList:!0,withCredentials:!1,onChange:e=>{alert("Upload Change:")},onDrop:e=>{alert("File Drop:")},onDownload:e=>{alert("Download:")},onPreview:e=>{alert("Preview:")},onRemove:e=>(alert("Remove:"),!0)}},s={},p={args:{listType:"picture-card"}},i={args:{onDrop:e=>{alert("File Drop:")}}},n={args:{progress:{strokeWidth:5,showInfo:!0}}},d={args:{accept:".pdf,.docx"}},c={args:{disabled:!0}};var g,f,D;s.parameters=o(r({},s.parameters),{docs:o(r({},(g=s.parameters)==null?void 0:g.docs),{source:r({originalSource:"{}"},(D=(f=s.parameters)==null?void 0:f.docs)==null?void 0:D.source)})});var h,v,y;p.parameters=o(r({},p.parameters),{docs:o(r({},(h=p.parameters)==null?void 0:h.docs),{source:r({originalSource:`{
  args: {
    listType: 'picture-card'
  }
}`},(y=(v=p.parameters)==null?void 0:v.docs)==null?void 0:y.source)})});var C,U,x;i.parameters=o(r({},i.parameters),{docs:o(r({},(C=i.parameters)==null?void 0:C.docs),{source:r({originalSource:`{
  args: {
    onDrop: event => {
      alert('File Drop:');
    }
  }
}`},(x=(U=i.parameters)==null?void 0:U.docs)==null?void 0:x.source)})});var w,F,L;n.parameters=o(r({},n.parameters),{docs:o(r({},(w=n.parameters)==null?void 0:w.docs),{source:r({originalSource:`{
  args: {
    progress: {
      strokeWidth: 5,
      showInfo: true
    }
  }
}`},(L=(F=n.parameters)==null?void 0:F.docs)==null?void 0:L.source)})});var P,R,T;d.parameters=o(r({},d.parameters),{docs:o(r({},(P=d.parameters)==null?void 0:P.docs),{source:r({originalSource:`{
  args: {
    accept: '.pdf,.docx'
  }
}`},(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source)})});var b,j,k;c.parameters=o(r({},c.parameters),{docs:o(r({},(b=c.parameters)==null?void 0:b.docs),{source:r({originalSource:`{
  args: {
    disabled: true
  }
}`},(k=(j=c.parameters)==null?void 0:j.docs)==null?void 0:k.source)})});const pe=["Primary","CustomListType","DragAndDropUpload","CustomProgress","CustomAcceptFileType","DisabledUpload"];export{d as CustomAcceptFileType,p as CustomListType,n as CustomProgress,c as DisabledUpload,i as DragAndDropUpload,s as Primary,pe as __namedExportsOrder,se as default};
