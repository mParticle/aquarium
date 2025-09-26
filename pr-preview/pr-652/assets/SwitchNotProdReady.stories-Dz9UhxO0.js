var J=Object.defineProperty,K=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var x=(s,a,n)=>a in s?J(s,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[a]=n,e=(s,a)=>{for(var n in a||(a={}))X.call(a,n)&&x(s,n,a[n]);if(k)for(var n of k(a))Y.call(a,n)&&x(s,n,a[n]);return s},t=(s,a)=>K(s,Q(a));import{j as r}from"./jsx-runtime-CVnACwZl.js";import{v as d,a as H,e as Z,I as S}from"./NavigationItemsService-DsQe2apM.js";import{E as g}from"./ExampleStory-D8j9eLs-.js";import"./ErrorStateIcon-DUz035cB.js";import"./_baseClone-CXAe4HsA.js";import{r as ee}from"./index-3OP4wdng.js";import"./LightTheme-BtoaoHMG.js";import"./row-Bsm_WxsR.js";import"./Context-R5ee3nrF.js";import"./useToken-C_i1q6Gz.js";import"./presets-BrZHayqo.js";import"./extends-CF3RwP-h.js";import"./index-B-gr4m3q.js";import"./isNativeReflectConstruct-CWIsGhkf.js";const ge={title:"Components/Not Prod Ready/Data Entry/Switch",component:d,args:{autoFocus:!1,checked:!1,checkedChildren:"On",className:"",defaultChecked:!1,defaultValue:!1,disabled:!1,loading:!1,size:"default",unCheckedChildren:"Off",value:!1,onClick:(s,a)=>{},onChange:(s,a)=>{alert(`Switch changed: ${s}`)}}},c={args:{checked:!0}},o={args:{checked:!0,checkedChildren:"On (Custom Copy)",unCheckedChildren:"Off (Custom Copy)"}},l={args:{disabled:!0}},i={args:{loading:!0}},m={args:{size:"small"}},u={render:()=>{const[s,a]=ee.useState(!0),n=()=>{a(!s)};return r.jsx(g,{title:"Press button to toggle disabled state.",children:r.jsxs(H,{direction:"vertical",children:[r.jsx(d,{disabled:s,defaultChecked:!0}),r.jsx(Z,{type:"primary",onClick:n,children:"Toggle disabled"})]})})}},h={render:()=>r.jsxs(g,{title:r.jsx(r.Fragment,{children:"size=small represents a small sized switch."}),children:[r.jsx(d,{defaultChecked:!0}),r.jsx("br",{}),r.jsx(d,{size:"small",defaultChecked:!0})]})},p={render:()=>r.jsxs(g,{title:"Mark a pending state of switch.",children:[r.jsx(d,{loading:!0,defaultChecked:!0}),r.jsx("br",{}),r.jsx(d,{size:"small",loading:!0,checkedChildren:"Loading",unCheckedChildren:"Loading"})]})},C={render:()=>r.jsx(g,{title:"With text and icon.",children:r.jsxs(H,{direction:"vertical",children:[r.jsx(d,{checkedChildren:"Checked Text",unCheckedChildren:"Unchecked Text",defaultChecked:!0}),r.jsx(d,{checkedChildren:"1",unCheckedChildren:"0"}),r.jsx(d,{checkedChildren:r.jsx(S,{name:"selected"}),unCheckedChildren:r.jsx(S,{name:"support"}),defaultChecked:!0})]})})};var f,b,j;c.parameters=t(e({},c.parameters),{docs:t(e({},(f=c.parameters)==null?void 0:f.docs),{source:e({originalSource:`{
  args: {
    checked: true
  }
}`},(j=(b=c.parameters)==null?void 0:b.docs)==null?void 0:j.source)})});var E,y,w;o.parameters=t(e({},o.parameters),{docs:t(e({},(E=o.parameters)==null?void 0:E.docs),{source:e({originalSource:`{
  args: {
    checked: true,
    checkedChildren: 'On (Custom Copy)',
    unCheckedChildren: 'Off (Custom Copy)'
  }
}`},(w=(y=o.parameters)==null?void 0:y.docs)==null?void 0:w.source)})});var z,v,D;l.parameters=t(e({},l.parameters),{docs:t(e({},(z=l.parameters)==null?void 0:z.docs),{source:e({originalSource:`{
  args: {
    disabled: true
  }
}`},(D=(v=l.parameters)==null?void 0:v.docs)==null?void 0:D.source)})});var L,T,O;i.parameters=t(e({},i.parameters),{docs:t(e({},(L=i.parameters)==null?void 0:L.docs),{source:e({originalSource:`{
  args: {
    loading: true
  }
}`},(O=(T=i.parameters)==null?void 0:T.docs)==null?void 0:O.source)})});var I,B,P;m.parameters=t(e({},m.parameters),{docs:t(e({},(I=m.parameters)==null?void 0:I.docs),{source:e({originalSource:`{
  args: {
    size: 'small'
  }
}`},(P=(B=m.parameters)==null?void 0:B.docs)==null?void 0:P.source)})});var A,F,M;u.parameters=t(e({},u.parameters),{docs:t(e({},(A=u.parameters)==null?void 0:A.docs),{source:e({originalSource:`{
  render: () => {
    const [disabled, setDisabled] = useState(true);
    const toggle = () => {
      setDisabled(!disabled);
    };
    return <ExampleStory title="Press button to toggle disabled state.">
        <Space direction="vertical">
          <Switch disabled={disabled} defaultChecked />
          <Button type="primary" onClick={toggle}>
            Toggle disabled
          </Button>
        </Space>
      </ExampleStory>;
  }
}`},(M=(F=u.parameters)==null?void 0:F.docs)==null?void 0:M.source)})});var N,R,U;h.parameters=t(e({},h.parameters),{docs:t(e({},(N=h.parameters)==null?void 0:N.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title={<>size=small represents a small sized switch.</>}>
        <Switch defaultChecked />
        <br />
        <Switch size="small" defaultChecked />
      </ExampleStory>;
  }
}`},(U=(R=h.parameters)==null?void 0:R.docs)==null?void 0:U.source)})});var W,_,V;p.parameters=t(e({},p.parameters),{docs:t(e({},(W=p.parameters)==null?void 0:W.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title="Mark a pending state of switch.">
        <Switch loading defaultChecked />
        <br />
        <Switch size="small" loading checkedChildren="Loading" unCheckedChildren="Loading" />
      </ExampleStory>;
  }
}`},(V=(_=p.parameters)==null?void 0:_.docs)==null?void 0:V.source)})});var $,q,G;C.parameters=t(e({},C.parameters),{docs:t(e({},($=C.parameters)==null?void 0:$.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title="With text and icon.">
        <Space direction="vertical">
          <Switch checkedChildren="Checked Text" unCheckedChildren="Unchecked Text" defaultChecked />
          <Switch checkedChildren="1" unCheckedChildren="0" />
          <Switch checkedChildren={<Icon name="selected" />} unCheckedChildren={<Icon name="support" />} defaultChecked />
        </Space>
      </ExampleStory>;
  }
}`},(G=(q=C.parameters)==null?void 0:q.docs)==null?void 0:G.source)})});const ke=["Checked","CustomCopy","Disabled","Loading","Small","ExampleDisabled","ExampleSizes","ExampleLoading","ExampleTextAndIcon"];export{c as Checked,o as CustomCopy,l as Disabled,u as ExampleDisabled,p as ExampleLoading,h as ExampleSizes,C as ExampleTextAndIcon,i as Loading,m as Small,ke as __namedExportsOrder,ge as default};
