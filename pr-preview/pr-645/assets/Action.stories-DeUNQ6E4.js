var O=Object.defineProperty,L=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var d=(a,r,o)=>r in a?O(a,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[r]=o,e=(a,r)=>{for(var o in r||(r={}))v.call(r,o)&&d(a,o,r[o]);if(m)for(var o of m(r))w.call(r,o)&&d(a,o,r[o]);return a},t=(a,r)=>L(a,P(r));import{Q as E}from"./NavigationItemsService-Cgs2Md3n.js";import"./ErrorStateIcon-BRZ77WZC.js";import"./_baseClone-CXAe4HsA.js";import"./jsx-runtime-CVnACwZl.js";import"./index-3OP4wdng.js";import"./LightTheme-BtoaoHMG.js";import"./row-Bsm_WxsR.js";import"./Context-R5ee3nrF.js";import"./useToken-C_i1q6Gz.js";import"./presets-BrZHayqo.js";import"./extends-CF3RwP-h.js";import"./index-B-gr4m3q.js";import"./isNativeReflectConstruct-CWIsGhkf.js";const R={title:"Components/Data Entry/QueryItem/Action",component:E.Action,parameters:{docs:{description:{component:'This is the "Action" component of the QueryItem component group. This component is currently meant to trigger a single action, but will eventually support a list of actions via a dropdown list interface.'}}},args:{}},n={args:{text:"Primary Action",type:"primary"}},s={args:{text:"Secondary Action",type:"default"}},i={args:{text:"Disabled Action",type:"disabled"}},c={args:{text:"On Click Action",type:"primary",onClick:()=>{alert("You clicked the QueryItem.Action!")}}},p={args:{text:"Loading",type:"disabled",loading:!0}};var l,u,y;n.parameters=t(e({},n.parameters),{docs:t(e({},(l=n.parameters)==null?void 0:l.docs),{source:e({originalSource:`{
  args: {
    text: 'Primary Action',
    type: 'primary'
  }
}`},(y=(u=n.parameters)==null?void 0:u.docs)==null?void 0:y.source)})});var g,A,x;s.parameters=t(e({},s.parameters),{docs:t(e({},(g=s.parameters)==null?void 0:g.docs),{source:e({originalSource:`{
  args: {
    text: 'Secondary Action',
    type: 'default'
  }
}`},(x=(A=s.parameters)==null?void 0:A.docs)==null?void 0:x.source)})});var b,S,k;i.parameters=t(e({},i.parameters),{docs:t(e({},(b=i.parameters)==null?void 0:b.docs),{source:e({originalSource:`{
  args: {
    text: 'Disabled Action',
    type: 'disabled'
  }
}`},(k=(S=i.parameters)==null?void 0:S.docs)==null?void 0:k.source)})});var f,C,h;c.parameters=t(e({},c.parameters),{docs:t(e({},(f=c.parameters)==null?void 0:f.docs),{source:e({originalSource:`{
  args: {
    text: 'On Click Action',
    type: 'primary',
    onClick: () => {
      alert('You clicked the QueryItem.Action!');
    }
  }
}`},(h=(C=c.parameters)==null?void 0:C.docs)==null?void 0:h.source)})});var Q,D,I;p.parameters=t(e({},p.parameters),{docs:t(e({},(Q=p.parameters)==null?void 0:Q.docs),{source:e({originalSource:`{
  args: {
    text: 'Loading',
    type: 'disabled',
    loading: true
  }
}`},(I=(D=p.parameters)==null?void 0:D.docs)==null?void 0:I.source)})});const U=["Primary","Secondary","Disabled","OnClick","Loading"];export{i as Disabled,p as Loading,c as OnClick,n as Primary,s as Secondary,U as __namedExportsOrder,R as default};
