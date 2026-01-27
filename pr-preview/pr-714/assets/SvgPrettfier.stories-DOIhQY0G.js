import{y as a,j as t,S as j,a2 as w,i as f,L as l}from"./iframe-B6Y2oegk.js";import"./preload-helper-PPVm8Dsz.js";const P=()=>{const[r,d]=a.useState([]),[u,p]=a.useState(!1),[h,o]=a.useState(""),[g,n]=a.useState(""),[m,y]=a.useState([]),S=({fileList:e})=>{d(e??[]);const s=(e??[]).map(i=>i.name).join(", ");o(`Files uploaded successfully: ${s}`),n("success")},x=async()=>{if((r??[]).length===0){o("No files to prettify"),n("error");return}const e=new FormData;(r??[]).forEach(s=>{e.append("files",s.originFileObj)}),p(!0),o("");try{const s=await fetch("http://localhost:8000/api",{method:"POST",body:e}),i=await s.json();y(i),s.ok?(o("All files prettified successfully!"),n("success")):(o("Some files could not be processed. See details below."),n("error")),i.some(v=>v.status==="error")||d([])}catch(s){const i=s instanceof Error?s.message:"An unknown error occurred";o(`Error prettifying the files: ${i}`),n("error")}finally{p(!1)}};return t.jsxs("div",{style:{padding:"40px",maxWidth:"600px",margin:"0 auto"},children:[t.jsx("h1",{style:{marginBottom:"10px"},children:"Prettify Your Icons"}),t.jsx("p",{style:{color:"#666",marginBottom:"20px"},children:"Upload your SVG files and make them consistent with our styling guidelines."}),t.jsxs(j,{orientation:"vertical",size:"large",style:{width:"100%"},children:[t.jsx(w,{onChange:S,multiple:!0,accept:".svg",fileList:r,onRemove:e=>{d((r??[]).filter(s=>s.uid!==e.uid))},showUploadList:!0,style:{width:"100%"},children:t.jsx(f,{disabled:u,style:{width:"100%"},children:"Select SVG Files"})}),r.length>0&&t.jsx(l,{header:t.jsx("div",{children:"Uploaded Files"}),bordered:!0,dataSource:r,renderItem:e=>t.jsx(l.Item,{children:e.name})}),h&&t.jsx("div",{style:{color:g==="success"?"green":"red",marginTop:"10px",fontWeight:"bold"},children:h}),m.length>0&&t.jsx(l,{header:t.jsx("div",{children:"File Results"}),bordered:!0,dataSource:m,renderItem:e=>t.jsxs(l.Item,{style:{color:e.status==="error"?"red":"green"},children:[e.file,": ",e.status==="success"?"Prettified":`Error - ${e.message}`]})}),t.jsx(f,{type:"primary",onClick:()=>{x().catch(console.error)},style:{width:"100%"},disabled:(r??[]).length===0||u,children:u?"Prettifying...":"Prettify"})]})]})},b=`
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
`,V={title:"Contributing/Tooling/SVGPrettifier",component:P,parameters:{docs:{description:{component:b}}}},c={};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};const F=["Primary"];export{c as Primary,F as __namedExportsOrder,V as default};
