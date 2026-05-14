import{j as a,F as d,T as o,ar as t,aN as m,N as c,z as p,c as S,c8 as v,c9 as x,ca as k,K as h,cb as y,x as X,ag as M,l as z,ah as T,a7 as R,aU as w,aT as P,cc as j,ao as B,P as f,aS as L,cd as b,aH as F,ae as C,ce as _,cf as G,bS as D,al as I,a4 as N,cg as u}from"./iframe-D96v7dCn.js";import{C as O}from"./CopyableToken-DVzbFS4P.js";const U={title:"Design Tokens/Spacing"},g=({width:e})=>a.jsx("div",{style:{width:e,height:"12px",backgroundColor:u,borderRadius:"2px"}}),$=({radius:e})=>a.jsx("div",{style:{width:"48px",height:"48px",backgroundColor:u,borderRadius:typeof e=="number"?`${e}px`:e}}),l=[{title:"Preview",dataIndex:"preview",key:"preview",width:"25%"},{title:"Name",dataIndex:"name",key:"name",width:"20%"},{title:"Token",dataIndex:"token",key:"token",width:"35%",render:e=>a.jsx(O,{name:e})},{title:"Value",dataIndex:"value",key:"value",width:"20%"}],E=[{token:"SizeXxs",name:"XXS",value:m},{token:"SizeXs",name:"XS",value:c},{token:"SizeSm",name:"SM",value:p},{token:"Size",name:"Base",value:S},{token:"SizeMs",name:"MS",value:v},{token:"SizeMd",name:"MD",value:x},{token:"SizeLg",name:"LG",value:k},{token:"SizeXl",name:"XL",value:h},{token:"SizeXxl",name:"XXL",value:y}].map(e=>({key:e.token,preview:a.jsx(g,{width:e.value}),...e})),H=[{token:"MarginXxs",name:"XXS",value:X},{token:"MarginXs",name:"XS",value:M},{token:"MarginSm",name:"SM",value:z},{token:"Margin",name:"Base",value:T},{token:"MarginMd",name:"MD",value:R},{token:"MarginLg",name:"LG",value:w},{token:"MarginXl",name:"XL",value:P},{token:"MarginXxl",name:"XXL",value:j}].map(e=>({key:e.token,preview:a.jsx(g,{width:e.value}),...e})),K=[{token:"PaddingXxs",name:"XXS",value:B},{token:"PaddingXs",name:"XS",value:f},{token:"PaddingSm",name:"SM",value:L},{token:"Padding",name:"Base",value:b},{token:"PaddingMd",name:"MD",value:F},{token:"PaddingLg",name:"LG",value:C},{token:"PaddingXl",name:"XL",value:_}].map(e=>({key:e.token,preview:a.jsx(g,{width:e.value}),...e})),V=[{token:"BorderRadiusXs",name:"XS",value:G},{token:"BorderRadiusSm",name:"SM",value:D},{token:"BorderRadius",name:"Base",value:`${I}px`},{token:"BorderRadiusLg",name:"LG",value:`${N}px`}].map((e,A)=>({key:e.token,preview:a.jsx($,{radius:e.value}),...e})),n={render:()=>a.jsxs(d,{vertical:!0,gap:24,children:[a.jsx(o.Title,{level:3,children:"Sizes"}),a.jsx(o.Paragraph,{type:"secondary",children:"Generic size tokens. Use for widths, heights, and gaps."}),a.jsx(t,{columns:l,dataSource:E,pagination:!1,size:"middle"})]})},s={render:()=>a.jsxs(d,{vertical:!0,gap:24,children:[a.jsx(o.Title,{level:3,children:"Margins"}),a.jsx(t,{columns:l,dataSource:H,pagination:!1,size:"middle"})]})},i={render:()=>a.jsxs(d,{vertical:!0,gap:24,children:[a.jsx(o.Title,{level:3,children:"Paddings"}),a.jsx(t,{columns:l,dataSource:K,pagination:!1,size:"middle"})]})},r={name:"Border Radius",render:()=>a.jsxs(d,{vertical:!0,gap:24,children:[a.jsx(o.Title,{level:3,children:"Border Radius"}),a.jsx(t,{columns:l,dataSource:V,pagination:!1,size:"middle"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const q=["Sizes","Margins","Paddings","Radius"],W=Object.freeze(Object.defineProperty({__proto__:null,Margins:s,Paddings:i,Radius:r,Sizes:n,__namedExportsOrder:q,default:U},Symbol.toStringTag,{value:"Module"}));export{s as M,i as P,r as R,W as S,n as a};
