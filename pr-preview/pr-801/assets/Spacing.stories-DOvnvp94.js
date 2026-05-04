import{j as a,F as d,T as o,aJ as t,aP as c,N as m,z as p,c as S,c9 as v,ca as x,cb as k,K as h,cc as y,x as X,ai as M,l as z,aj as T,a9 as P,aU as R,aT as w,cd as j,aq as B,P as f,ce as L,cf as b,aD as F,ag as C,cg as _,ch as G,bT as D,an as I,a7 as O,ci as u}from"./iframe-CGRBtYa3.js";import{C as U}from"./CopyableToken-BbvbVt0W.js";const $={title:"Design Tokens/Spacing"},g=({width:e})=>a.jsx("div",{style:{width:e,height:"12px",backgroundColor:u,borderRadius:"2px"}}),E=({radius:e})=>a.jsx("div",{style:{width:"48px",height:"48px",backgroundColor:u,borderRadius:typeof e=="number"?`${e}px`:e}}),l=[{title:"Preview",dataIndex:"preview",key:"preview",width:"25%"},{title:"Name",dataIndex:"name",key:"name",width:"20%"},{title:"Token",dataIndex:"token",key:"token",width:"35%",render:e=>a.jsx(U,{name:e})},{title:"Value",dataIndex:"value",key:"value",width:"20%"}],N=[{token:"SizeXxs",name:"XXS",value:c},{token:"SizeXs",name:"XS",value:m},{token:"SizeSm",name:"SM",value:p},{token:"Size",name:"Base",value:S},{token:"SizeMs",name:"MS",value:v},{token:"SizeMd",name:"MD",value:x},{token:"SizeLg",name:"LG",value:k},{token:"SizeXl",name:"XL",value:h},{token:"SizeXxl",name:"XXL",value:y}].map(e=>({key:e.token,preview:a.jsx(g,{width:e.value}),...e})),q=[{token:"MarginXxs",name:"XXS",value:X},{token:"MarginXs",name:"XS",value:M},{token:"MarginSm",name:"SM",value:z},{token:"Margin",name:"Base",value:T},{token:"MarginMd",name:"MD",value:P},{token:"MarginLg",name:"LG",value:R},{token:"MarginXl",name:"XL",value:w},{token:"MarginXxl",name:"XXL",value:j}].map(e=>({key:e.token,preview:a.jsx(g,{width:e.value}),...e})),J=[{token:"PaddingXxs",name:"XXS",value:B},{token:"PaddingXs",name:"XS",value:f},{token:"PaddingSm",name:"SM",value:L},{token:"Padding",name:"Base",value:b},{token:"PaddingMd",name:"MD",value:F},{token:"PaddingLg",name:"LG",value:C},{token:"PaddingXl",name:"XL",value:_}].map(e=>({key:e.token,preview:a.jsx(g,{width:e.value}),...e})),K=[{token:"BorderRadiusXs",name:"XS",value:G},{token:"BorderRadiusSm",name:"SM",value:D},{token:"BorderRadius",name:"Base",value:`${I}px`},{token:"BorderRadiusLg",name:"LG",value:`${O}px`}].map((e,A)=>({key:e.token,preview:a.jsx(E,{radius:e.value}),...e})),n={render:()=>a.jsxs(d,{vertical:!0,gap:24,children:[a.jsx(o.Title,{level:3,children:"Sizes"}),a.jsx(o.Paragraph,{type:"secondary",children:"Generic size tokens. Use for widths, heights, and gaps."}),a.jsx(t,{columns:l,dataSource:N,pagination:!1,size:"middle"})]})},s={render:()=>a.jsxs(d,{vertical:!0,gap:24,children:[a.jsx(o.Title,{level:3,children:"Margins"}),a.jsx(t,{columns:l,dataSource:q,pagination:!1,size:"middle"})]})},i={render:()=>a.jsxs(d,{vertical:!0,gap:24,children:[a.jsx(o.Title,{level:3,children:"Paddings"}),a.jsx(t,{columns:l,dataSource:J,pagination:!1,size:"middle"})]})},r={name:"Border Radius",render:()=>a.jsxs(d,{vertical:!0,gap:24,children:[a.jsx(o.Title,{level:3,children:"Border Radius"}),a.jsx(t,{columns:l,dataSource:K,pagination:!1,size:"middle"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={24}>
      <Typography.Title level={3}>Sizes</Typography.Title>
      <Typography.Paragraph type="secondary">
        Generic size tokens. Use for widths, heights, and gaps.
      </Typography.Paragraph>
      <Table columns={tokenColumns} dataSource={sizeRows} pagination={false} size="middle" />
    </Flex>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={24}>
      <Typography.Title level={3}>Margins</Typography.Title>
      <Table columns={tokenColumns} dataSource={marginRows} pagination={false} size="middle" />
    </Flex>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={24}>
      <Typography.Title level={3}>Paddings</Typography.Title>
      <Table columns={tokenColumns} dataSource={paddingRows} pagination={false} size="middle" />
    </Flex>
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Border Radius',
  render: () => <Flex vertical gap={24}>
      <Typography.Title level={3}>Border Radius</Typography.Title>
      <Table columns={tokenColumns} dataSource={radiusRows} pagination={false} size="middle" />
    </Flex>
}`,...r.parameters?.docs?.source}}};const V=["Sizes","Margins","Paddings","Radius"],W=Object.freeze(Object.defineProperty({__proto__:null,Margins:s,Paddings:i,Radius:r,Sizes:n,__namedExportsOrder:V,default:$},Symbol.toStringTag,{value:"Module"}));export{s as M,i as P,r as R,W as S,n as a};
