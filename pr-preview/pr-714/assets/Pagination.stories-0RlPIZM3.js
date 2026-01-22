import{j as r}from"./jsx-runtime-u17CrQMm.js";import{ap as o}from"./UnauthorizedTooltip-DInzTCbR.js";import{E as n}from"./ExampleStory-D9NFb6Ax.js";const i={title:"Components/Not Prod Ready/Navigation/Pagination",component:o,args:{current:1,defaultCurrent:1,defaultPageSize:10,pageSize:10,pageSizeOptions:[10,20,50,100],onChange:(t,a)=>{alert(`Page changed to ${t}, Page Size: ${a}`)},onShowSizeChange:(t,a)=>{alert(`Page Size changed to ${a}, Current Page: ${t}`)}}},e={render:()=>r.jsx(n,{title:"",children:r.jsx(o,{defaultCurrent:1,pageSize:40,total:500})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="">
        <Pagination defaultCurrent={1} pageSize={40} total={500} />
      </ExampleStory>;
  }
}`,...e.parameters?.docs?.source}}};const s=["Default"],u=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:s,default:i},Symbol.toStringTag,{value:"Module"}));export{u as P,i as m};
