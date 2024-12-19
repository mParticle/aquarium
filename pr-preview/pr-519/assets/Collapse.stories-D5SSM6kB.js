var g=Object.defineProperty,v=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var p=(e,o,n)=>o in e?g(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,l=(e,o)=>{for(var n in o||(o={}))C.call(o,n)&&p(e,n,o[n]);if(i)for(var n of i(o))y.call(o,n)&&p(e,n,o[n]);return e},s=(e,o)=>v(e,h(o));import{j as t}from"./jsx-runtime-BcCOBRXo.js";import{M as P,P as j}from"./PlusSquareOutlined-5Tt6X6Vh.js";import{i as x,j as b,k as d}from"./GlobalNavigation-ByoW-fgh.js";import"./_baseClone-DBzvlRjn.js";const r=[{key:"1",label:"Environment",children:t.jsx(t.Fragment,{children:t.jsx(d,{style:{width:"200px"},options:[{value:"development",label:"Development"},{value:"production",label:"Production"}]})})},{key:"2",label:"Inputs",children:t.jsx(d,{mode:"tags",style:{width:"200px"},options:[{value:"Braze",label:"Braze"},{value:"mP Analytics",label:"mP Analytics"},{value:"Cortex",label:"Cortex"},{value:"Applytics",label:"Applytics"},{value:"Google Analytics",label:"Google Analytics"}]})}],f={title:"Components/Data Display/Collapse",component:e=>t.jsx(x,l({items:r},e)),args:{defaultActiveKey:void 0,expandIcon:void 0,ghost:!1,items:r,onChange:e=>{console.log(e)}}},a={render:()=>t.jsx(b,{theme:{components:{Collapse:{headerPadding:"2px 0",contentPadding:"0 24px"}}},children:t.jsx(x,{ghost:!0,expandIcon:({isActive:e})=>e?t.jsx(P,{}):t.jsx(j,{}),items:r})})};var c,u,m;a.parameters=s(l({},a.parameters),{docs:s(l({},(c=a.parameters)==null?void 0:c.docs),{source:l({originalSource:`{
  render: () => {
    return <ConfigProvider theme={{
      components: {
        Collapse: {
          headerPadding: '2px 0',
          contentPadding: '0 24px'
        }
      }
    }}>
        <Collapse ghost expandIcon={({
        isActive
      }): React.JSX.Element => isActive ? <MinusSquareOutlined /> : <PlusSquareOutlined />} items={items} />
      </ConfigProvider>;
  }
}`},(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source)})});const S=["GhostCollapse"],E=Object.freeze(Object.defineProperty({__proto__:null,GhostCollapse:a,__namedExportsOrder:S,default:f},Symbol.toStringTag,{value:"Module"}));export{E as C,a as G};
