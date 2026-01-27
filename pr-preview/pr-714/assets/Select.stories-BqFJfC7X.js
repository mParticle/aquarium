import{o as a}from"./iframe-D7Ys59RG.js";const{expect:r,screen:c,userEvent:l}=__STORYBOOK_MODULE_TEST__,s={title:"Components/Data Entry/Select",component:a,tags:["play-test-validation"],args:{}},e={args:{placeholder:"Select Environment",options:[{label:"All",value:"all"},{label:"Prod",value:"prod"},{label:"Dev",value:"dev"}],style:{width:"180px"}},play:async o=>{const t=o.canvasElement.querySelector(".ant-select");if(!t)throw new Error("Select element not found");await l.click(t);const n=await c.findByText("Prod");await r(n).toBeInTheDocument(),await l.click(n)}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select Environment',
    options: [{
      label: 'All',
      value: 'all'
    }, {
      label: 'Prod',
      value: 'prod'
    }, {
      label: 'Dev',
      value: 'dev'
    }],
    style: {
      width: '180px'
    }
  },
  play: async context => {
    const selectElement = context.canvasElement.querySelector('.ant-select');
    if (!selectElement) {
      throw new Error('Select element not found');
    }
    await userEvent.click(selectElement);
    const prodOption = await screen.findByText('Prod');
    await expect(prodOption).toBeInTheDocument();
    await userEvent.click(prodOption);
  }
}`,...e.parameters?.docs?.source}}};const i=["Primary"],d=Object.freeze(Object.defineProperty({__proto__:null,Primary:e,__namedExportsOrder:i,default:s},Symbol.toStringTag,{value:"Module"}));export{d as S,s as m};
