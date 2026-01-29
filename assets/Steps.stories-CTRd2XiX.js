var d=Object.defineProperty,x=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var a=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,o=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&a(e,r,t[r]);if(s)for(var r of s(t))g.call(t,r)&&a(e,r,t[r]);return e},p=(e,t)=>x(e,S(t));import{j as m}from"./jsx-runtime-C9TrHvcC.js";import{ac as u,a8 as P}from"./UnauthorizedTooltip-BRUt4Tzc.js";import"./ErrorStateIcon-UoyK5ecU.js";import"./SuccessStateIcon-DOqzJwEs.js";import"./WarningStateIcon-CKREznl9.js";import"./_baseClone-DwBCp-Ss.js";import"./index-3OP4wdng.js";import"./LightTheme-BtoaoHMG.js";import"./row-DlEJUZa0.js";import"./Context-R5ee3nrF.js";import"./useToken-BIYN7ogo.js";import"./presets-CQzyf-6F.js";import"./extends-CF3RwP-h.js";import"./index-DA79H6I3.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./AntdIcon-DRQs8XP6.js";import"./style-BbwCNso5.js";import"./WarningFilled-D6ijQqgK.js";const h=[{title:"Define request",description:"Gather requirements"},{title:"Review",description:"Validate with stakeholders"},{title:"Approve",description:"Get program sign-off"}],B={title:"UX Patterns/Steps",component:u,parameters:{layout:"centered"}},i={render:()=>m.jsx(P,{style:{margin:"auto"},children:m.jsx(u,{items:h,labelPlacement:"vertical",current:2})})};var n,c,l;i.parameters=p(o({},i.parameters),{docs:p(o({},(n=i.parameters)==null?void 0:n.docs),{source:o({originalSource:`{
  render: () => {
    const currentStep = 3;
    return <Center style={{
      margin: 'auto'
    }}>
        <Steps items={items} labelPlacement="vertical" current={currentStep - 1} />
      </Center>;
  }
}`},(l=(c=i.parameters)==null?void 0:c.docs)==null?void 0:l.source)})});const F=["UXPatternExample"];export{i as UXPatternExample,F as __namedExportsOrder,B as default};
