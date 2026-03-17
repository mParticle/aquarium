var v=Object.defineProperty,P=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var d=(o,e,n)=>e in o?v(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,t=(o,e)=>{for(var n in e||(e={}))C.call(e,n)&&d(o,n,e[n]);if(c)for(var n of c(e))j.call(e,n)&&d(o,n,e[n]);return o},l=(o,e)=>P(o,b(e));import{j as s}from"./jsx-runtime-C9TrHvcC.js";import{g as y,h as p,i as z}from"./UnauthorizedTooltip-C_2AFDqS.js";import"./ErrorStateIcon-8BB9p4tv.js";import"./SuccessStateIcon-fN8ivNoK.js";import"./WarningStateIcon-DpS0_2CM.js";import"./_baseClone-DwBCp-Ss.js";import"./index-3OP4wdng.js";const i=[{key:"1",label:"Environment",children:s.jsx(s.Fragment,{children:s.jsx(p,{style:{width:"200px"},options:[{value:"development",label:"Development"},{value:"production",label:"Production"}]})})},{key:"2",label:"Inputs",children:s.jsx(p,{mode:"tags",style:{width:"200px"},options:[{value:"Braze",label:"Braze"},{value:"mP Analytics",label:"mP Analytics"},{value:"Cortex",label:"Cortex"},{value:"Applytics",label:"Applytics"},{value:"Google Analytics",label:"Google Analytics"}]})}],A={title:"Components/Data Display/Collapse",component:y,args:{defaultActiveKey:void 0,ghost:!1,items:i,onChange:o=>{console.log(o)}}},r={args:{accordion:!1,bordered:!0,ghost:!1,size:"middle",expandIconPosition:"start",items:i},argTypes:{accordion:{control:"select",options:[!1,!0]},bordered:{control:"select",options:[!1,!0]},ghost:{control:"select",options:[!1,!0]},size:{control:"select",options:["large","middle","small"]},expandIconPosition:{control:"select",options:["start","end"]}}},a={render:()=>s.jsx(z,{theme:{components:{Collapse:{headerPadding:"2px 0",contentPadding:"0 24px"}}},children:s.jsx("div",{style:{width:"400px"},children:s.jsx(y,{ghost:!0,items:i})})})};var m,u,g;r.parameters=l(t({},r.parameters),{docs:l(t({},(m=r.parameters)==null?void 0:m.docs),{source:t({originalSource:`{
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
}`},(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source)})});var h,x,f;a.parameters=l(t({},a.parameters),{docs:l(t({},(h=a.parameters)==null?void 0:h.docs),{source:t({originalSource:`{
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
}`},(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source)})});const S=["Playground","GhostCollapse"],k=Object.freeze(Object.defineProperty({__proto__:null,GhostCollapse:a,Playground:r,__namedExportsOrder:S,default:A},Symbol.toStringTag,{value:"Module"}));export{k as C,a as G,r as P};
