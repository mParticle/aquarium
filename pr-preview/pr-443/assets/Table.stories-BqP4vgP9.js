var g=Object.defineProperty,x=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var i=(r,e,a)=>e in r?g(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,o=(r,e)=>{for(var a in e||(e={}))y.call(e,a)&&i(r,a,e[a]);if(m)for(var a of m(e))h.call(e,a)&&i(r,a,e[a]);return r},s=(r,e)=>x(r,u(e));import{j as t}from"./jsx-runtime-BcCOBRXo.js";import{q as k,z as j,G as S}from"./GlobalNavigation-qsnRifS4.js";import"./index-CNk6hRaE.js";import"./ConfigProvider-CEh3sHE6.js";import"./LightTheme-DxveuNKr.js";import"./index-CqBomLS8.js";import"./useToken-C-GAQQ-5.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CYew8PZR.js";import"./row-B98CqS5b.js";import"./_baseClone-BjCwUuX-.js";import"./_getPrototype-CAOE_2rY.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";const F={title:"Components/Data Display/Table",component:k,args:{}},T=[{title:"Name",dataIndex:"name",key:"name",render:r=>t.jsx("a",{children:r})},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Tags",key:"tags",dataIndex:"tags",render:(r,{tags:e})=>t.jsx(t.Fragment,{children:e.map(a=>{let d=a.length>5?"geekblue":"green";return a==="loser"&&(d="volcano"),t.jsx(j,{color:d,children:a.toUpperCase()},a)})})},{title:"Action",key:"action",render:(r,e)=>t.jsxs(S,{size:"middle",children:[t.jsxs("a",{children:["Invite ",e.name]}),t.jsx("a",{children:"Delete"})]})}],I=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sydney No. 1 Lake Park",tags:["cool","teacher"]}],n={render:()=>t.jsx(k,{columns:T,dataSource:I})};var c,l,p;n.parameters=s(o({},n.parameters),{docs:s(o({},(c=n.parameters)==null?void 0:c.docs),{source:o({originalSource:`{
  render: () => {
    return <Table<DataType> columns={columns} dataSource={data} />;
  }
}`},(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source)})});const O=["Secondary"];export{n as Secondary,O as __namedExportsOrder,F as default};
