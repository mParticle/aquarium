import{j as e}from"./jsx-runtime-CVnACwZl.js";import{T as s,b as n,c as d}from"./GlobalNavigation-Cm5mBd9v.js";import"./index-3OP4wdng.js";import"./ConfigProvider-C4rPDA4Q.js";import"./LightTheme-BtoaoHMG.js";import"./index-vcA8fjEC.js";import"./useToken-CXWLUMEq.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-B-gr4m3q.js";import"./isNativeReflectConstruct-D-r9sWlk.js";import"./row-BwvytWES.js";import"./_baseClone-B3DJrZ5i.js";import"./dayjs.min-FTgVsUrW.js";import"./customParseFormat-Dfkg1z51.js";const i=[{title:"Name",dataIndex:"name",key:"name",render:r=>e.jsx("a",{children:r})},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Tags",key:"tags",dataIndex:"tags",render:(r,{tags:t})=>e.jsx(e.Fragment,{children:t.map(a=>{let o=a.length>5?"geekblue":"green";return a==="loser"&&(o="volcano"),e.jsx(n,{color:o,children:a.toUpperCase()},a)})})},{title:"Action",key:"action",render:(r,t)=>e.jsxs(d,{size:"middle",children:[e.jsxs("a",{children:["Invite ",t.name]}),e.jsx("a",{children:"Delete"})]})}],m=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sydney No. 1 Lake Park",tags:["cool","teacher"]}],L={title:"UX Patterns/Table",component:()=>e.jsx(s,{columns:i,dataSource:m}),args:{}},P=[];export{P as __namedExportsOrder,L as default};
