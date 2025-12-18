var O=Object.defineProperty,L=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var d=(a,e,o)=>e in a?O(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o,r=(a,e)=>{for(var o in e||(e={}))v.call(e,o)&&d(a,o,e[o]);if(m)for(var o of m(e))w.call(e,o)&&d(a,o,e[o]);return a},t=(a,e)=>L(a,P(e));import{Q as E}from"./NavigationItemsService-bN03Ttq5.js";import"./ErrorStateIcon-BDqumtIe.js";import"./SuccessStateIcon-CaXEMaF4.js";import"./WarningStateIcon-Z0wE8OWa.js";import"./_baseClone-BJQa_8Hx.js";import"./jsx-runtime-GRP_BLAX.js";import"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-M_82l6gX.js";import"./Context-BUSkoOJ1.js";import"./useToken-ZHvy9ttm.js";import"./presets-vy2ytAcW.js";import"./index-DN1Ck1Y5.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./AntdIcon-Bm4W6gxM.js";import"./style-C9UL_bK6.js";import"./client-CgpM46-k.js";import"./WarningFilled-KKNPfhjt.js";const Z={title:"Components/Data Entry/QueryItem/Action",component:E.Action,parameters:{docs:{description:{component:'This is the "Action" component of the QueryItem component group. This component is currently meant to trigger a single action, but will eventually support a list of actions via a dropdown list interface.'}}},args:{}},n={args:{text:"Primary Action",type:"primary"}},i={args:{text:"Secondary Action",type:"default"}},s={args:{text:"Disabled Action",type:"disabled"}},c={args:{text:"On Click Action",type:"primary",onClick:()=>{alert("You clicked the QueryItem.Action!")}}},p={args:{text:"Loading",type:"disabled",loading:!0}};var l,u,y;n.parameters=t(r({},n.parameters),{docs:t(r({},(l=n.parameters)==null?void 0:l.docs),{source:r({originalSource:`{
  args: {
    text: 'Primary Action',
    type: 'primary'
  }
}`},(y=(u=n.parameters)==null?void 0:u.docs)==null?void 0:y.source)})});var g,A,x;i.parameters=t(r({},i.parameters),{docs:t(r({},(g=i.parameters)==null?void 0:g.docs),{source:r({originalSource:`{
  args: {
    text: 'Secondary Action',
    type: 'default'
  }
}`},(x=(A=i.parameters)==null?void 0:A.docs)==null?void 0:x.source)})});var b,S,k;s.parameters=t(r({},s.parameters),{docs:t(r({},(b=s.parameters)==null?void 0:b.docs),{source:r({originalSource:`{
  args: {
    text: 'Disabled Action',
    type: 'disabled'
  }
}`},(k=(S=s.parameters)==null?void 0:S.docs)==null?void 0:k.source)})});var f,C,h;c.parameters=t(r({},c.parameters),{docs:t(r({},(f=c.parameters)==null?void 0:f.docs),{source:r({originalSource:`{
  args: {
    text: 'On Click Action',
    type: 'primary',
    onClick: () => {
      alert('You clicked the QueryItem.Action!');
    }
  }
}`},(h=(C=c.parameters)==null?void 0:C.docs)==null?void 0:h.source)})});var Q,D,I;p.parameters=t(r({},p.parameters),{docs:t(r({},(Q=p.parameters)==null?void 0:Q.docs),{source:r({originalSource:`{
  args: {
    text: 'Loading',
    type: 'disabled',
    loading: true
  }
}`},(I=(D=p.parameters)==null?void 0:D.docs)==null?void 0:I.source)})});const $=["Primary","Secondary","Disabled","OnClick","Loading"];export{s as Disabled,p as Loading,c as OnClick,n as Primary,i as Secondary,$ as __namedExportsOrder,Z as default};
