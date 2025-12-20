var d=Object.defineProperty,x=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var a=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,o=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&a(e,r,t[r]);if(s)for(var r of s(t))g.call(t,r)&&a(e,r,t[r]);return e},p=(e,t)=>x(e,S(t));import{j as m}from"./jsx-runtime-GRP_BLAX.js";import{ab as u,a8 as P}from"./NavigationItemsService-Hr1be8SE.js";import"./ErrorStateIcon-Do_CM_GO.js";import"./SuccessStateIcon-CmToGiKI.js";import"./WarningStateIcon-M2kIOVZb.js";import"./_baseClone-BJQa_8Hx.js";import"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-M_82l6gX.js";import"./Context-BUSkoOJ1.js";import"./useToken-ZHvy9ttm.js";import"./presets-vy2ytAcW.js";import"./index-DN1Ck1Y5.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./AntdIcon-Bm4W6gxM.js";import"./style-Cv9zhzF_.js";import"./client-CgpM46-k.js";import"./WarningFilled-KKNPfhjt.js";const h=[{title:"Define request",description:"Gather requirements"},{title:"Review",description:"Validate with stakeholders"},{title:"Approve",description:"Get program sign-off"}],B={title:"UX Patterns/Steps",component:u,parameters:{layout:"centered"}},i={render:()=>m.jsx(P,{style:{margin:"auto"},children:m.jsx(u,{items:h,labelPlacement:"vertical",current:2})})};var n,c,l;i.parameters=p(o({},i.parameters),{docs:p(o({},(n=i.parameters)==null?void 0:n.docs),{source:o({originalSource:`{
  render: () => {
    const currentStep = 3;
    return <Center style={{
      margin: 'auto'
    }}>
        <Steps items={items} labelPlacement="vertical" current={currentStep - 1} />
      </Center>;
  }
}`},(l=(c=i.parameters)==null?void 0:c.docs)==null?void 0:l.source)})});const F=["UXPatternExample"];export{i as UXPatternExample,F as __namedExportsOrder,B as default};
