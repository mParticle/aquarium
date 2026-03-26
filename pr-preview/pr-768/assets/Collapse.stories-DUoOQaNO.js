import{j as e,o as l,p as s,q as a}from"./iframe-DqPcEXEM.js";const t=[{key:"1",label:"Environment",children:e.jsx(e.Fragment,{children:e.jsx(s,{style:{width:"200px"},options:[{value:"development",label:"Development"},{value:"production",label:"Production"}]})})},{key:"2",label:"Inputs",children:e.jsx(s,{mode:"tags",style:{width:"200px"},options:[{value:"Braze",label:"Braze"},{value:"mP Analytics",label:"mP Analytics"},{value:"Cortex",label:"Cortex"},{value:"Applytics",label:"Applytics"},{value:"Google Analytics",label:"Google Analytics"}]})}],i={title:"Components/Data Display/Collapse",component:l,args:{defaultActiveKey:void 0,ghost:!1,items:t,onChange:r=>{console.log(r)}}},o={args:{accordion:!1,bordered:!0,ghost:!1,size:"middle",expandIconPosition:"start",items:t},argTypes:{accordion:{control:"select",options:[!1,!0]},bordered:{control:"select",options:[!1,!0]},ghost:{control:"select",options:[!1,!0]},size:{control:"select",options:["large","middle","small"]},expandIconPosition:{control:"select",options:["start","end"]}}},n={render:()=>e.jsx(a,{theme:{components:{Collapse:{headerPadding:"2px 0",contentPadding:"0 24px"}}},children:e.jsx("div",{style:{width:"400px"},children:e.jsx(l,{ghost:!0,items:t})})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    accordion: false,
    bordered: true,
    ghost: false,
    size: 'middle',
    expandIconPosition: 'start',
    items
  },
  argTypes: {
    accordion: {
      control: 'select',
      options: [false, true]
    },
    bordered: {
      control: 'select',
      options: [false, true]
    },
    ghost: {
      control: 'select',
      options: [false, true]
    },
    size: {
      control: 'select',
      options: ['large', 'middle', 'small']
    },
    expandIconPosition: {
      control: 'select',
      options: ['start', 'end']
    }
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const c=["Playground","GhostCollapse"],p=Object.freeze(Object.defineProperty({__proto__:null,GhostCollapse:n,Playground:o,__namedExportsOrder:c,default:i},Symbol.toStringTag,{value:"Module"}));export{p as C,n as G,o as P};
