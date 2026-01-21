import{n as o}from"./UnauthorizedTooltip-C-uexwNG.js";const{expect:a,userEvent:s,within:c}=__STORYBOOK_MODULE_TEST__,r=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2",disabled:!0},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],i={title:"Components/Data Display/Tabs",component:o,tags:["play-test-validation"],args:{}},e={args:{items:r,defaultActiveKey:"1"},play:async({canvasElement:n})=>{const t=c(n);await a(t.getByText("Content of Tab Pane 1")).toBeInTheDocument(),await s.click(t.getByText("Tab 3")),await a(t.getByText("Content of Tab Pane 3")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const T=["Primary"],b=Object.freeze(Object.defineProperty({__proto__:null,Primary:e,__namedExportsOrder:T,default:i},Symbol.toStringTag,{value:"Module"}));export{b as T,i as m};
