var c=Object.defineProperty,d=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var s=(t,e,a)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,o=(t,e)=>{for(var a in e||(e={}))f.call(e,a)&&s(t,a,e[a]);if(i)for(var a of i(e))P.call(e,a)&&s(t,a,e[a]);return t},n=(t,e)=>d(t,S(e));import{j as l}from"./jsx-runtime-BcCOBRXo.js";import{a2 as m}from"./ChartColors-B_sXm60j.js";import{E as x}from"./ExampleStory-DjH9nMhb.js";const z={title:"Components/Navigation/Pagination",component:m,args:{current:1,defaultCurrent:1,defaultPageSize:10,pageSize:10,pageSizeOptions:[10,20,50,100],onChange:(t,e)=>{alert(`Page changed to ${t}, Page Size: ${e}`)},onShowSizeChange:(t,e)=>{alert(`Page Size changed to ${e}, Current Page: ${t}`)}}},r={render:()=>l.jsx(x,{title:"",children:l.jsx(m,{defaultCurrent:1,pageSize:40,total:500})})};var g,p,u;r.parameters=n(o({},r.parameters),{docs:n(o({},(g=r.parameters)==null?void 0:g.docs),{source:o({originalSource:`{
  render: () => {
    return <ExampleStory title="">
        <Pagination defaultCurrent={1} pageSize={40} total={500} />
      </ExampleStory>;
  }
}`},(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source)})});const C=["Default"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:C,default:z},Symbol.toStringTag,{value:"Module"}));export{y as P,z as m};
