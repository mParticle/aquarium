var g=Object.defineProperty,m=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var i=(e,r,o)=>r in e?g(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,a=(e,r)=>{for(var o in r||(r={}))f.call(r,o)&&i(e,o,r[o]);if(n)for(var o of n(r))j.call(r,o)&&i(e,o,r[o]);return e},c=(e,r)=>m(e,T(r));import{j as t}from"./jsx-runtime-BcCOBRXo.js";import{r as l,b as x}from"./NavigationItemsService-CBMOgh94.js";import"./_baseClone-DBzvlRjn.js";const b={title:"Components/Data Display/Tag",component:e=>t.jsx(l,c(a({},e),{children:"Tag"}))},s={args:{color:"default",bordered:!0},argTypes:{color:{control:"select",options:["success","processing","default","error","warning"]}},render:()=>t.jsxs(x,{direction:"vertical",children:[t.jsx(l,{color:"blue",children:"Prod"}),t.jsx(l,{color:"purple",children:"Dev"}),t.jsx(l,{color:"default",children:"Default"})]})};var d,p,u;s.parameters=c(a({},s.parameters),{docs:c(a({},(d=s.parameters)==null?void 0:d.docs),{source:a({originalSource:`{
  args: {
    color: 'default',
    bordered: true
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['success', 'processing', 'default', 'error', 'warning']
    }
  },
  render: () => {
    return <Space direction="vertical">
        <Tag color="blue">Prod</Tag>
        <Tag color="purple">Dev</Tag>
        <Tag color="default">Default</Tag>
      </Space>;
  }
}`},(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source)})});const y=["Primary"],v=Object.freeze(Object.defineProperty({__proto__:null,Primary:s,__namedExportsOrder:y,default:b},Symbol.toStringTag,{value:"Module"}));export{v as T,b as m};
