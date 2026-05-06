import{j as e,F as r,aX as d,aM as n,aF as s}from"./iframe-TPzgAJbn.js";import"./preload-helper-PPVm8Dsz.js";const i=[{title:"Name",dataIndex:"name",key:"name",width:"40%"},{title:"Type",dataIndex:"type",key:"type",width:"20%"},{title:"Owner",dataIndex:"owner",key:"owner",width:"40%"}],l=()=>e.jsx(r,{align:"center",style:{padding:`${d} ${n}`,borderBottom:"1px solid #f0f0f0"},children:i.map(t=>e.jsx("div",{style:{width:t.width,paddingRight:n},children:e.jsx(s.Input,{active:!0,size:"small",style:{width:"70%",height:16}})},String(t.key)))}),p=()=>e.jsx(r,{align:"center",style:{padding:`${d} ${n}`,background:"#fafafa",borderBottom:"1px solid #f0f0f0"},children:i.map(t=>e.jsx("div",{style:{width:t.width,fontWeight:600},children:t.title},String(t.key)))}),f={title:"UX Patterns/Data Exploration/Table/Patterns/Loading Skeleton",parameters:{docs:{description:{component:"Render a skeleton table while the first page is loading. Keep the column shape so the layout does not jump when real data arrives. For subsequent pages (pagination), prefer keeping the previous data visible (TanStack Query `keepPreviousData`) over flashing a skeleton."}}}},a={render:()=>e.jsxs("div",{style:{border:"1px solid #f0f0f0",borderRadius:8,overflow:"hidden"},children:[e.jsx(p,{}),Array.from({length:5}).map((t,o)=>e.jsx(l,{},o))]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    border: '1px solid #f0f0f0',
    borderRadius: 8,
    overflow: 'hidden'
  }}>
      <SkeletonHeader />
      {Array.from({
      length: 5
    }).map((_, i) => <SkeletonRow key={i} />)}
    </div>
}`,...a.parameters?.docs?.source}}};const c=["Default"];export{a as Default,c as __namedExportsOrder,f as default};
