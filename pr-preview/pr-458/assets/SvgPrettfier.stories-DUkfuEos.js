var I=Object.defineProperty,R=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var v=(e,r,t)=>r in e?I(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,h=(e,r)=>{for(var t in r||(r={}))D.call(r,t)&&v(e,t,r[t]);if(x)for(var t of x(r))U.call(r,t)&&v(e,t,r[t]);return e},S=(e,r)=>R(e,k(r));var j=(e,r,t)=>new Promise((u,l)=>{var c=n=>{try{a(t.next(n))}catch(p){l(p)}},y=n=>{try{a(t.throw(n))}catch(p){l(p)}},a=n=>n.done?u(n.value):Promise.resolve(n.value).then(c,y);a((t=t.apply(e,r)).next())});import{j as o}from"./jsx-runtime-BcCOBRXo.js";import{r as m}from"./index-CNk6hRaE.js";import{d as B,Y as N,B as w,L as g}from"./GlobalNavigation-BU3Jz6lE.js";import"./ConfigProvider-C77M1HMj.js";import"./_baseClone-BjCwUuX-.js";import"./index-z2stgOKB.js";import"./useToken-5RYkiW09.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CYew8PZR.js";import"./row-DegztUsn.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";import"./LightTheme-DxveuNKr.js";import"./_getPrototype-CAOE_2rY.js";const G=()=>{const[e,r]=m.useState([]),[t,u]=m.useState(!1),[l,c]=m.useState(""),[y,a]=m.useState(""),[n,p]=m.useState([]),V=({fileList:s})=>{r(s!=null?s:[]);const i=(s!=null?s:[]).map(d=>d.name).join(", ");c(`Files uploaded successfully: ${i}`),a("success")},F=()=>j(void 0,null,function*(){if((e!=null?e:[]).length===0){c("No files to prettify"),a("error");return}const s=new FormData;(e!=null?e:[]).forEach(i=>{s.append("files",i.originFileObj)}),u(!0),c("");try{const i=yield fetch("http://localhost:8000/api",{method:"POST",body:s}),d=yield i.json();p(d),i.ok?(c("All files prettified successfully!"),a("success")):(c("Some files could not be processed. See details below."),a("error")),d.some(T=>T.status==="error")||r([])}catch(i){const d=i instanceof Error?i.message:"An unknown error occurred";c(`Error prettifying the files: ${d}`),a("error")}finally{u(!1)}});return o.jsxs("div",{style:{padding:"40px",maxWidth:"600px",margin:"0 auto"},children:[o.jsx("h1",{style:{marginBottom:"10px"},children:"Prettify Your Icons"}),o.jsx("p",{style:{color:"#666",marginBottom:"20px"},children:"Upload your SVG files and make them consistent with our styling guidelines."}),o.jsxs(B,{direction:"vertical",size:"large",style:{width:"100%"},children:[o.jsx(N,{onChange:V,multiple:!0,accept:".svg",fileList:e,onRemove:s=>{r((e!=null?e:[]).filter(i=>i.uid!==s.uid))},showUploadList:!0,style:{width:"100%"},children:o.jsx(w,{disabled:t,style:{width:"100%"},children:"Select SVG Files"})}),e.length>0&&o.jsx(g,{header:o.jsx("div",{children:"Uploaded Files"}),bordered:!0,dataSource:e,renderItem:s=>o.jsx(g.Item,{children:s.name})}),l&&o.jsx("div",{style:{color:y==="success"?"green":"red",marginTop:"10px",fontWeight:"bold"},children:l}),n.length>0&&o.jsx(g,{header:o.jsx("div",{children:"File Results"}),bordered:!0,dataSource:n,renderItem:s=>o.jsxs(g.Item,{style:{color:s.status==="error"?"red":"green"},children:[s.file,": ",s.status==="success"?"Prettified":`Error - ${s.message}`]})}),o.jsx(w,{type:"primary",onClick:()=>{F().catch(console.error)},style:{width:"100%"},disabled:(e!=null?e:[]).length===0||t,children:t?"Prettifying...":"Prettify"})]})]})};G.__docgenInfo={description:"",methods:[],displayName:"SVGPrettifier"};const O=`
### SVG Prettifier Documentation

The \`SVGPrettifier\` component is used to upload and prettify SVG files. Each SVG must follow the project's styling guidelines and must have a **unique name** to avoid overwriting existing icons.
** This only works locally.** 

#### Starting the Server
To process the uploaded SVGs, a server must be running. You can start the server by following these steps:

1. Navigate to the project root folder.
2. Run the following command to start the server:
   \`\`\` #run
   npm run icons-prettifier
   \`\`\`
3. The server will start on **port 8000**. Ensure this port is available or update the port configuration in the server script.
4. The server handles the uploaded SVG files and saves the prettified versions to the designated folder.

For more information on the icon component and usage, please refer to the [Icons Documentation](?path=/docs/aquarium-general-icons--documentation).
`,re={title:"Components/Other/SVGPrettifier",component:G,parameters:{docs:{description:{component:O}}}},f={};var P,b,E;f.parameters=S(h({},f.parameters),{docs:S(h({},(P=f.parameters)==null?void 0:P.docs),{source:h({originalSource:"{}"},(E=(b=f.parameters)==null?void 0:b.docs)==null?void 0:E.source)})});const se=["Primary"];export{f as Primary,se as __namedExportsOrder,re as default};
