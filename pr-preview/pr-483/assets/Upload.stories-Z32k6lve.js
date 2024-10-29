var I=Object.defineProperty,R=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var u=(e,a,s)=>a in e?I(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,r=(e,a)=>{for(var s in a||(a={}))A.call(a,s)&&u(e,s,a[s]);if(m)for(var s of m(a))O.call(a,s)&&u(e,s,a[s]);return e},o=(e,a)=>R(e,_(a));import{j as d}from"./jsx-runtime-BcCOBRXo.js";import{U as B,k as E,I as W}from"./GlobalNavigation-CXibBWWk.js";import"./_baseClone-DBzvlRjn.js";const z={title:"Components/Data Entry/Upload",component:e=>d.jsx(B,o(r({},e),{children:d.jsx(E,{icon:d.jsx(W,{name:"mpLogo"}),children:"Click to Upload"})})),args:{accept:".jpg,.png,.gif",action:"/upload",beforeUpload:(e,a)=>(alert("Before Upload:"),!0),customRequest:void 0,data:e=>(alert("Custom Data:"),{name:e.name,type:e.type}),defaultFileList:[],directory:!1,disabled:!1,fileList:[],headers:{Authorization:"Bearer token"},iconRender:void 0,isImageUrl:void 0,itemRender:void 0,listType:"text",maxCount:void 0,method:"post",multiple:!1,name:"file",openFileDialogOnClick:!0,previewFile:void 0,progress:{strokeWidth:2,showInfo:!1},showUploadList:!0,withCredentials:!1,onChange:e=>{alert("Upload Change:")},onDrop:e=>{alert("File Drop:")},onDownload:e=>{alert("Download:")},onPreview:e=>{alert("Preview:")},onRemove:e=>(alert("Remove:"),!0)}},t={},n={args:{listType:"picture-card"}},p={args:{onDrop:e=>{alert("File Drop:")}}},i={args:{progress:{strokeWidth:5,showInfo:!0}}},c={args:{accept:".pdf,.docx"}},l={args:{disabled:!0}};var g,f,D;t.parameters=o(r({},t.parameters),{docs:o(r({},(g=t.parameters)==null?void 0:g.docs),{source:r({originalSource:"{}"},(D=(f=t.parameters)==null?void 0:f.docs)==null?void 0:D.source)})});var h,v,y;n.parameters=o(r({},n.parameters),{docs:o(r({},(h=n.parameters)==null?void 0:h.docs),{source:r({originalSource:`{
  args: {
    listType: 'picture-card'
  }
}`},(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source)})});var U,C,x;p.parameters=o(r({},p.parameters),{docs:o(r({},(U=p.parameters)==null?void 0:U.docs),{source:r({originalSource:`{
  args: {
    onDrop: event => {
      alert('File Drop:');
    }
  }
}`},(x=(C=p.parameters)==null?void 0:C.docs)==null?void 0:x.source)})});var w,b,S;i.parameters=o(r({},i.parameters),{docs:o(r({},(w=i.parameters)==null?void 0:w.docs),{source:r({originalSource:`{
  args: {
    progress: {
      strokeWidth: 5,
      showInfo: true
    }
  }
}`},(S=(b=i.parameters)==null?void 0:b.docs)==null?void 0:S.source)})});var j,F,T;c.parameters=o(r({},c.parameters),{docs:o(r({},(j=c.parameters)==null?void 0:j.docs),{source:r({originalSource:`{
  args: {
    accept: '.pdf,.docx'
  }
}`},(T=(F=c.parameters)==null?void 0:F.docs)==null?void 0:T.source)})});var k,L,P;l.parameters=o(r({},l.parameters),{docs:o(r({},(k=l.parameters)==null?void 0:k.docs),{source:r({originalSource:`{
  args: {
    disabled: true
  }
}`},(P=(L=l.parameters)==null?void 0:L.docs)==null?void 0:P.source)})});const q=["Primary","CustomListType","DragAndDropUpload","CustomProgress","CustomAcceptFileType","DisabledUpload"],K=Object.freeze(Object.defineProperty({__proto__:null,CustomAcceptFileType:c,CustomListType:n,CustomProgress:i,DisabledUpload:l,DragAndDropUpload:p,Primary:t,__namedExportsOrder:q,default:z},Symbol.toStringTag,{value:"Module"}));export{K as U,z as m};
