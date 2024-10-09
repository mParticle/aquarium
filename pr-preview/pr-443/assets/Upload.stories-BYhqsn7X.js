var R=Object.defineProperty,S=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var u=(e,a,t)=>a in e?R(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,r=(e,a)=>{for(var t in a||(a={}))B.call(a,t)&&u(e,t,a[t]);if(l)for(var t of l(a))E.call(a,t)&&u(e,t,a[t]);return e},o=(e,a)=>S(e,A(a));import{j as m}from"./jsx-runtime-BcCOBRXo.js";import{a2 as W,B as O,I as _}from"./GlobalNavigation-qsnRifS4.js";import"./ConfigProvider-CEh3sHE6.js";import"./_baseClone-BjCwUuX-.js";import"./index-CNk6hRaE.js";import"./index-CqBomLS8.js";import"./useToken-C-GAQQ-5.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CYew8PZR.js";import"./row-B98CqS5b.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";import"./LightTheme-DxveuNKr.js";import"./_getPrototype-CAOE_2rY.js";const ae={title:"Components/Data Entry/Upload",component:e=>m.jsx(W,o(r({},e),{children:m.jsx(O,{icon:m.jsx(_,{name:"mpLogo"}),children:"Click to Upload"})})),args:{accept:".jpg,.png,.gif",action:"/upload",beforeUpload:(e,a)=>(alert("Before Upload:"),!0),customRequest:void 0,data:e=>(alert("Custom Data:"),{name:e.name,type:e.type}),defaultFileList:[],directory:!1,disabled:!1,fileList:[],headers:{Authorization:"Bearer token"},iconRender:void 0,isImageUrl:void 0,itemRender:void 0,listType:"text",maxCount:void 0,method:"post",multiple:!1,name:"file",openFileDialogOnClick:!0,previewFile:void 0,progress:{strokeWidth:2,showInfo:!1},showUploadList:!0,withCredentials:!1,onChange:e=>{alert("Upload Change:")},onDrop:e=>{alert("File Drop:")},onDownload:e=>{alert("Download:")},onPreview:e=>{alert("Preview:")},onRemove:e=>(alert("Remove:"),!0)}},s={},p={args:{listType:"picture-card"}},i={args:{onDrop:e=>{alert("File Drop:")}}},n={args:{progress:{strokeWidth:5,showInfo:!0}}},c={args:{accept:".pdf,.docx"}},d={args:{disabled:!0}};var g,f,D;s.parameters=o(r({},s.parameters),{docs:o(r({},(g=s.parameters)==null?void 0:g.docs),{source:r({originalSource:"{}"},(D=(f=s.parameters)==null?void 0:f.docs)==null?void 0:D.source)})});var h,v,C;p.parameters=o(r({},p.parameters),{docs:o(r({},(h=p.parameters)==null?void 0:h.docs),{source:r({originalSource:`{
  args: {
    listType: 'picture-card'
  }
}`},(C=(v=p.parameters)==null?void 0:v.docs)==null?void 0:C.source)})});var y,U,x;i.parameters=o(r({},i.parameters),{docs:o(r({},(y=i.parameters)==null?void 0:y.docs),{source:r({originalSource:`{
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
}`},(L=(F=n.parameters)==null?void 0:F.docs)==null?void 0:L.source)})});var T,b,j;c.parameters=o(r({},c.parameters),{docs:o(r({},(T=c.parameters)==null?void 0:T.docs),{source:r({originalSource:`{
  args: {
    accept: '.pdf,.docx'
  }
}`},(j=(b=c.parameters)==null?void 0:b.docs)==null?void 0:j.source)})});var k,I,P;d.parameters=o(r({},d.parameters),{docs:o(r({},(k=d.parameters)==null?void 0:k.docs),{source:r({originalSource:`{
  args: {
    disabled: true
  }
}`},(P=(I=d.parameters)==null?void 0:I.docs)==null?void 0:P.source)})});const te=["Primary","CustomListType","DragAndDropUpload","CustomProgress","CustomAcceptFileType","DisabledUpload"];export{c as CustomAcceptFileType,p as CustomListType,n as CustomProgress,d as DisabledUpload,i as DragAndDropUpload,s as Primary,te as __namedExportsOrder,ae as default};
