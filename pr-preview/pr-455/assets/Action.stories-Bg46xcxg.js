var Q=Object.defineProperty,L=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var d=(a,e,o)=>e in a?Q(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o,r=(a,e)=>{for(var o in e||(e={}))v.call(e,o)&&d(a,o,e[o]);if(m)for(var o of m(e))w.call(e,o)&&d(a,o,e[o]);return a},t=(a,e)=>L(a,P(e));import{Z as E}from"./GlobalNavigation-B4hMuqih.js";import"./ConfigProvider-C77M1HMj.js";import"./_baseClone-BjCwUuX-.js";import"./jsx-runtime-BcCOBRXo.js";import"./index-CNk6hRaE.js";import"./index-z2stgOKB.js";import"./useToken-5RYkiW09.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CYew8PZR.js";import"./row-DegztUsn.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";import"./LightTheme-DxveuNKr.js";import"./_getPrototype-CAOE_2rY.js";const V={title:"Components/Data Entry/QueryItem/Action",component:E.Action,parameters:{docs:{description:{component:'This is the "Action" component of the QueryItem component group. This component is currently meant to trigger a single action, but will eventually support a list of actions via a dropdown list interface.'}}},args:{}},n={args:{text:"Primary Action",type:"primary"}},s={args:{text:"Secondary Action",type:"default"}},i={args:{text:"Disabled Action",type:"disabled"}},c={args:{text:"On Click Action",type:"primary",onClick:()=>{alert("You clicked the QueryItem.Action!")}}},p={args:{text:"Loading",type:"disabled",loading:!0}};var l,u,y;n.parameters=t(r({},n.parameters),{docs:t(r({},(l=n.parameters)==null?void 0:l.docs),{source:r({originalSource:`{
  args: {
    text: 'Primary Action',
    type: 'primary'
  }
}`},(y=(u=n.parameters)==null?void 0:u.docs)==null?void 0:y.source)})});var g,A,x;s.parameters=t(r({},s.parameters),{docs:t(r({},(g=s.parameters)==null?void 0:g.docs),{source:r({originalSource:`{
  args: {
    text: 'Secondary Action',
    type: 'default'
  }
}`},(x=(A=s.parameters)==null?void 0:A.docs)==null?void 0:x.source)})});var b,S,k;i.parameters=t(r({},i.parameters),{docs:t(r({},(b=i.parameters)==null?void 0:b.docs),{source:r({originalSource:`{
  args: {
    text: 'Disabled Action',
    type: 'disabled'
  }
}`},(k=(S=i.parameters)==null?void 0:S.docs)==null?void 0:k.source)})});var f,C,h;c.parameters=t(r({},c.parameters),{docs:t(r({},(f=c.parameters)==null?void 0:f.docs),{source:r({originalSource:`{
  args: {
    text: 'On Click Action',
    type: 'primary',
    onClick: () => {
      alert('You clicked the QueryItem.Action!');
    }
  }
}`},(h=(C=c.parameters)==null?void 0:C.docs)==null?void 0:h.source)})});var D,I,O;p.parameters=t(r({},p.parameters),{docs:t(r({},(D=p.parameters)==null?void 0:D.docs),{source:r({originalSource:`{
  args: {
    text: 'Loading',
    type: 'disabled',
    loading: true
  }
}`},(O=(I=p.parameters)==null?void 0:I.docs)==null?void 0:O.source)})});const W=["Primary","Secondary","Disabled","OnClick","Loading"];export{i as Disabled,p as Loading,c as OnClick,n as Primary,s as Secondary,W as __namedExportsOrder,V as default};
