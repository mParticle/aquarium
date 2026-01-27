import{aZ as r,j as t,$ as s}from"./iframe-D7Ys59RG.js";import"./preload-helper-PPVm8Dsz.js";const a=[{title:"Define request",description:"Gather requirements"},{title:"Review",description:"Validate with stakeholders"},{title:"Approve",description:"Get program sign-off"}],c={title:"UX Patterns/Steps",component:r,parameters:{layout:"centered"}},e={render:()=>t.jsx(s,{style:{margin:"auto"},children:t.jsx(r,{items:a,labelPlacement:"vertical",current:2})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => {
    const currentStep = 3;
    return <Center style={{
      margin: 'auto'
    }}>
        <Steps items={items} labelPlacement="vertical" current={currentStep - 1} />
      </Center>;
  }
}`,...e.parameters?.docs?.source}}};const p=["UXPatternExample"];export{e as UXPatternExample,p as __namedExportsOrder,c as default};
