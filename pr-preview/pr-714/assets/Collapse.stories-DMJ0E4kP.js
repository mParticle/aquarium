import{j as e}from"./jsx-runtime-u17CrQMm.js";import{g as s,h as n,i as a}from"./UnauthorizedTooltip-C-uexwNG.js";import"./ErrorStateIcon-B6JkuEkJ.js";import"./SuccessStateIcon-BoEEKEoh.js";import"./WarningStateIcon-DvK-CXgy.js";const l=[{key:"1",label:"Environment",children:e.jsx(e.Fragment,{children:e.jsx(n,{style:{width:"200px"},options:[{value:"development",label:"Development"},{value:"production",label:"Production"}]})})},{key:"2",label:"Inputs",children:e.jsx(n,{mode:"tags",style:{width:"200px"},options:[{value:"Braze",label:"Braze"},{value:"mP Analytics",label:"mP Analytics"},{value:"Cortex",label:"Cortex"},{value:"Applytics",label:"Applytics"},{value:"Google Analytics",label:"Google Analytics"}]})}],r={title:"Components/Data Display/Collapse",component:t=>e.jsx(s,{items:l,...t}),args:{defaultActiveKey:void 0,ghost:!1,items:l,onChange:t=>{console.log(t)}}},o={render:()=>e.jsx(a,{theme:{components:{Collapse:{headerPadding:"2px 0",contentPadding:"0 24px"}}},children:e.jsx("div",{style:{width:"400px"},children:e.jsx(s,{ghost:!0,items:l})})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ConfigProvider theme={{
      components: {
        Collapse: {
          headerPadding: '2px 0',
          contentPadding: '0 24px'
        }
      }
    }}>
        <div style={{
        width: '400px'
      }}>
          <Collapse ghost items={items} />
        </div>
      </ConfigProvider>;
  }
}`,...o.parameters?.docs?.source}}};const i=["GhostCollapse"],g=Object.freeze(Object.defineProperty({__proto__:null,GhostCollapse:o,__namedExportsOrder:i,default:r},Symbol.toStringTag,{value:"Module"}));export{g as C,o as G};
