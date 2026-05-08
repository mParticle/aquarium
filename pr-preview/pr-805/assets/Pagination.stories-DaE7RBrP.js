import{ct as n,j as r}from"./iframe-CPW_KvgL.js";import{E as o}from"./ExampleStory-CIYUx13i.js";const i={title:"Experimental/Navigation/Pagination",component:n,args:{current:1,defaultCurrent:1,defaultPageSize:10,pageSize:10,pageSizeOptions:[10,20,50,100],onChange:(t,a)=>{alert(`Page changed to ${t}, Page Size: ${a}`)},onShowSizeChange:(t,a)=>{alert(`Page Size changed to ${a}, Current Page: ${t}`)}}},e={render:()=>r.jsx(o,{title:"",children:r.jsx(n,{defaultCurrent:1,pageSize:40,total:500})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="">
        <Pagination defaultCurrent={1} pageSize={40} total={500} />
      </ExampleStory>;
  }
}`,...e.parameters?.docs?.source}}};const s=["Default"],p=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:s,default:i},Symbol.toStringTag,{value:"Module"}));export{p as P,i as m};
