var F=Object.defineProperty,k=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var v=(e,r,t)=>r in e?F(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,h=(e,r)=>{for(var t in r||(r={}))R.call(r,t)&&v(e,t,r[t]);if(x)for(var t of x(r))U.call(r,t)&&v(e,t,r[t]);return e},S=(e,r)=>k(e,I(r));var j=(e,r,t)=>new Promise((m,d)=>{var c=n=>{try{a(t.next(n))}catch(p){d(p)}},y=n=>{try{a(t.throw(n))}catch(p){d(p)}},a=n=>n.done?m(n.value):Promise.resolve(n.value).then(c,y);a((t=t.apply(e,r)).next())});import{j as o}from"./jsx-runtime-BcCOBRXo.js";import{r as u}from"./index-CNk6hRaE.js";import{b as D,U as B,k as w,L as g}from"./GlobalNavigation-DcQaj0R2.js";import"./_baseClone-DBzvlRjn.js";import"./LightTheme-BtoaoHMG.js";import"./row-C8Fpq1AK.js";import"./useToken-BceXVVM_.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";const C=()=>{const[e,r]=u.useState([]),[t,m]=u.useState(!1),[d,c]=u.useState(""),[y,a]=u.useState(""),[n,p]=u.useState([]),G=({fileList:s})=>{r(s!=null?s:[]);const i=(s!=null?s:[]).map(l=>l.name).join(", ");c(`Files uploaded successfully: ${i}`),a("success")},T=()=>j(void 0,null,function*(){if((e!=null?e:[]).length===0){c("No files to prettify"),a("error");return}const s=new FormData;(e!=null?e:[]).forEach(i=>{s.append("files",i.originFileObj)}),m(!0),c("");try{const i=yield fetch("http://localhost:8000/api",{method:"POST",body:s}),l=yield i.json();p(l),i.ok?(c("All files prettified successfully!"),a("success")):(c("Some files could not be processed. See details below."),a("error")),l.some(V=>V.status==="error")||r([])}catch(i){const l=i instanceof Error?i.message:"An unknown error occurred";c(`Error prettifying the files: ${l}`),a("error")}finally{m(!1)}});return o.jsxs("div",{style:{padding:"40px",maxWidth:"600px",margin:"0 auto"},children:[o.jsx("h1",{style:{marginBottom:"10px"},children:"Prettify Your Icons"}),o.jsx("p",{style:{color:"#666",marginBottom:"20px"},children:"Upload your SVG files and make them consistent with our styling guidelines."}),o.jsxs(D,{direction:"vertical",size:"large",style:{width:"100%"},children:[o.jsx(B,{onChange:G,multiple:!0,accept:".svg",fileList:e,onRemove:s=>{r((e!=null?e:[]).filter(i=>i.uid!==s.uid))},showUploadList:!0,style:{width:"100%"},children:o.jsx(w,{disabled:t,style:{width:"100%"},children:"Select SVG Files"})}),e.length>0&&o.jsx(g,{header:o.jsx("div",{children:"Uploaded Files"}),bordered:!0,dataSource:e,renderItem:s=>o.jsx(g.Item,{children:s.name})}),d&&o.jsx("div",{style:{color:y==="success"?"green":"red",marginTop:"10px",fontWeight:"bold"},children:d}),n.length>0&&o.jsx(g,{header:o.jsx("div",{children:"File Results"}),bordered:!0,dataSource:n,renderItem:s=>o.jsxs(g.Item,{style:{color:s.status==="error"?"red":"green"},children:[s.file,": ",s.status==="success"?"Prettified":`Error - ${s.message}`]})}),o.jsx(w,{type:"primary",onClick:()=>{T().catch(console.error)},style:{width:"100%"},disabled:(e!=null?e:[]).length===0||t,children:t?"Prettifying...":"Prettify"})]})]})},M=`
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
`,L={title:"Contributing/Tooling/SVGPrettifier",component:C,parameters:{docs:{description:{component:M}}}},f={};var b,P,E;f.parameters=S(h({},f.parameters),{docs:S(h({},(b=f.parameters)==null?void 0:b.docs),{source:h({originalSource:"{}"},(E=(P=f.parameters)==null?void 0:P.docs)==null?void 0:E.source)})});const ee=["Primary"];export{f as Primary,ee as __namedExportsOrder,L as default};
