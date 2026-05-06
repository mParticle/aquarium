import{j as a,F as d,T as o,aw as t,aS as m,$ as c,W as p,c as S,cc as v,cd as k,ce as x,_ as h,cf as X,v as y,w as M,l as z,s as T,af as w,aY as R,q as P,cg as j,at as f,P as B,aX as L,ch as b,aM as F,am as C,ci as _,cj as G,bW as D,t as I,p as $,ck as u}from"./iframe-FEOso3HU.js";import{C as O}from"./CopyableToken-CqPXm5En.js";const E={title:"Design Tokens/Spacing"},g=({width:e})=>a.jsx("div",{style:{width:e,height:"12px",backgroundColor:u,borderRadius:"2px"}}),U=({radius:e})=>a.jsx("div",{style:{width:"48px",height:"48px",backgroundColor:u,borderRadius:typeof e=="number"?`${e}px`:e}}),l=[{title:"Preview",dataIndex:"preview",key:"preview",width:"25%"},{title:"Name",dataIndex:"name",key:"name",width:"20%"},{title:"Token",dataIndex:"token",key:"token",width:"35%",render:e=>a.jsx(O,{name:e})},{title:"Value",dataIndex:"value",key:"value",width:"20%"}],W=[{token:"SizeXxs",name:"XXS",value:m},{token:"SizeXs",name:"XS",value:c},{token:"SizeSm",name:"SM",value:p},{token:"Size",name:"Base",value:S},{token:"SizeMs",name:"MS",value:v},{token:"SizeMd",name:"MD",value:k},{token:"SizeLg",name:"LG",value:x},{token:"SizeXl",name:"XL",value:h},{token:"SizeXxl",name:"XXL",value:X}].map(e=>({key:e.token,preview:a.jsx(g,{width:e.value}),...e})),q=[{token:"MarginXxs",name:"XXS",value:y},{token:"MarginXs",name:"XS",value:M},{token:"MarginSm",name:"SM",value:z},{token:"Margin",name:"Base",value:T},{token:"MarginMd",name:"MD",value:w},{token:"MarginLg",name:"LG",value:R},{token:"MarginXl",name:"XL",value:P},{token:"MarginXxl",name:"XXL",value:j}].map(e=>({key:e.token,preview:a.jsx(g,{width:e.value}),...e})),N=[{token:"PaddingXxs",name:"XXS",value:f},{token:"PaddingXs",name:"XS",value:B},{token:"PaddingSm",name:"SM",value:L},{token:"Padding",name:"Base",value:b},{token:"PaddingMd",name:"MD",value:F},{token:"PaddingLg",name:"LG",value:C},{token:"PaddingXl",name:"XL",value:_}].map(e=>({key:e.token,preview:a.jsx(g,{width:e.value}),...e})),V=[{token:"BorderRadiusXs",name:"XS",value:G},{token:"BorderRadiusSm",name:"SM",value:D},{token:"BorderRadius",name:"Base",value:`${I}px`},{token:"BorderRadiusLg",name:"LG",value:`${$}px`}].map((e,A)=>({key:e.token,preview:a.jsx(U,{radius:e.value}),...e})),s={render:()=>a.jsxs(d,{vertical:!0,gap:24,children:[a.jsx(o.Title,{level:3,children:"Sizes"}),a.jsx(o.Paragraph,{type:"secondary",children:"Generic size tokens. Use for widths, heights, and gaps."}),a.jsx(t,{columns:l,dataSource:W,pagination:!1,size:"middle"})]})},n={render:()=>a.jsxs(d,{vertical:!0,gap:24,children:[a.jsx(o.Title,{level:3,children:"Margins"}),a.jsx(t,{columns:l,dataSource:q,pagination:!1,size:"middle"})]})},i={render:()=>a.jsxs(d,{vertical:!0,gap:24,children:[a.jsx(o.Title,{level:3,children:"Paddings"}),a.jsx(t,{columns:l,dataSource:N,pagination:!1,size:"middle"})]})},r={name:"Border Radius",render:()=>a.jsxs(d,{vertical:!0,gap:24,children:[a.jsx(o.Title,{level:3,children:"Border Radius"}),a.jsx(t,{columns:l,dataSource:V,pagination:!1,size:"middle"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={24}>
      <Typography.Title level={3}>Sizes</Typography.Title>
      <Typography.Paragraph type="secondary">
        Generic size tokens. Use for widths, heights, and gaps.
      </Typography.Paragraph>
      <Table columns={tokenColumns} dataSource={sizeRows} pagination={false} size="middle" />
    </Flex>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={24}>
      <Typography.Title level={3}>Margins</Typography.Title>
      <Table columns={tokenColumns} dataSource={marginRows} pagination={false} size="middle" />
    </Flex>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const Y=["Sizes","Margins","Paddings","Radius"],K=Object.freeze(Object.defineProperty({__proto__:null,Margins:n,Paddings:i,Radius:r,Sizes:s,__namedExportsOrder:Y,default:E},Symbol.toStringTag,{value:"Module"}));export{n as M,i as P,r as R,K as S,s as a};
