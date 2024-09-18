var Q=Object.defineProperty,L=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var d=(a,e,o)=>e in a?Q(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o,r=(a,e)=>{for(var o in e||(e={}))v.call(e,o)&&d(a,o,e[o]);if(m)for(var o of m(e))w.call(e,o)&&d(a,o,e[o]);return a},t=(a,e)=>L(a,P(e));import{X as E}from"./GlobalNavigation-BFudnXls.js";import"./ConfigProvider-aHzMMMgW.js";import"./_baseClone-BwI25-yt.js";import"./jsx-runtime-CS-_a2eV.js";import"./index-Ca44TZ0D.js";import"./index-BxrKW6hI.js";import"./useToken-Dnjd_Rha.js";import"./extends-CCbyfPlC.js";import"./Serializer-DsJDcYJc.js";import"./index-DFiuTWKW.js";import"./isNativeReflectConstruct-DQQXTUsj.js";import"./row-BOpWxek0.js";import"./dayjs.min-kn1EBQqj.js";import"./customParseFormat-CECOPgIS.js";import"./LightTheme-BZ07JyGW.js";import"./_getPrototype-fDUIJvdn.js";const V={title:"Components/Data Entry/QueryItem/Action",component:E.Action,parameters:{docs:{description:{component:'This is the "Action" component of the QueryItem component group. This component is currently meant to trigger a single action, but will eventually support a list of actions via a dropdown list interface.'}}},args:{}},n={args:{text:"Primary Action",type:"primary"}},s={args:{text:"Secondary Action",type:"default"}},i={args:{text:"Disabled Action",type:"disabled"}},c={args:{text:"On Click Action",type:"primary",onClick:()=>{alert("You clicked the QueryItem.Action!")}}},p={args:{text:"Loading",type:"disabled",loading:!0}};var l,u,y;n.parameters=t(r({},n.parameters),{docs:t(r({},(l=n.parameters)==null?void 0:l.docs),{source:r({originalSource:`{
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
