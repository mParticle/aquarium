import{aL as r}from"./iframe-B35pOOAK.js";const{expect:a,userEvent:c,within:l}=__STORYBOOK_MODULE_TEST__,o=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2",disabled:!0},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],i={title:"Components/Data Display/Tabs",component:r,tags:["play-test-validation"],args:{}},e={args:{items:o,defaultActiveKey:"1",type:"line",size:"middle",tabPosition:"top",centered:!1},argTypes:{type:{control:"select",options:["line","card","editable-card"]},size:{control:"select",options:["large","middle","small"]},tabPosition:{control:"select",options:["top","right","bottom","left"]},centered:{control:"select",options:[!1,!0]}}},t={args:{items:o,defaultActiveKey:"1"},play:async({canvasElement:s})=>{const n=l(s);await a(n.getByText("Content of Tab Pane 1")).toBeInTheDocument(),await c.click(n.getByText("Tab 3")),await a(n.getByText("Content of Tab Pane 3")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    defaultActiveKey: '1',
    type: 'line',
    size: 'middle',
    tabPosition: 'top',
    centered: false
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['line', 'card', 'editable-card']
    },
    size: {
      control: 'select',
      options: ['large', 'middle', 'small']
    },
    tabPosition: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left']
    },
    centered: {
      control: 'select',
      options: [false, true]
    }
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    defaultActiveKey: '1'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Content of Tab Pane 1')).toBeInTheDocument();
    await userEvent.click(canvas.getByText('Tab 3'));
    await expect(canvas.getByText('Content of Tab Pane 3')).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};const d=["Playground","Primary"],m=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,Primary:t,__namedExportsOrder:d,default:i},Symbol.toStringTag,{value:"Module"}));export{t as P,m as T,e as a};
