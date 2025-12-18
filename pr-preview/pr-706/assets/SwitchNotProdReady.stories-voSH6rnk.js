var J=Object.defineProperty,K=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var x=(s,a,n)=>a in s?J(s,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[a]=n,e=(s,a)=>{for(var n in a||(a={}))X.call(a,n)&&x(s,n,a[n]);if(k)for(var n of k(a))Y.call(a,n)&&x(s,n,a[n]);return s},t=(s,a)=>K(s,Q(a));import{j as r}from"./jsx-runtime-GRP_BLAX.js";import{z as d,a as H,e as Z,I as S}from"./NavigationItemsService-bN03Ttq5.js";import{E as g}from"./ExampleStory-BDhlP4za.js";import"./ErrorStateIcon-BDqumtIe.js";import"./SuccessStateIcon-CaXEMaF4.js";import"./WarningStateIcon-Z0wE8OWa.js";import"./_baseClone-BJQa_8Hx.js";import{r as ee}from"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-M_82l6gX.js";import"./Context-BUSkoOJ1.js";import"./useToken-ZHvy9ttm.js";import"./presets-vy2ytAcW.js";import"./index-DN1Ck1Y5.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./AntdIcon-Bm4W6gxM.js";import"./style-C9UL_bK6.js";import"./client-CgpM46-k.js";import"./WarningFilled-KKNPfhjt.js";const be={title:"Components/Not Prod Ready/Data Entry/Switch",component:d,args:{autoFocus:!1,checked:!1,checkedChildren:"On",className:"",defaultChecked:!1,defaultValue:!1,disabled:!1,loading:!1,size:"default",unCheckedChildren:"Off",value:!1,onClick:(s,a)=>{},onChange:(s,a)=>{alert(`Switch changed: ${s}`)}}},o={args:{checked:!0}},c={args:{checked:!0,checkedChildren:"On (Custom Copy)",unCheckedChildren:"Off (Custom Copy)"}},i={args:{disabled:!0}},l={args:{loading:!0}},m={args:{size:"small"}},p={render:()=>{const[s,a]=ee.useState(!0),n=()=>{a(!s)};return r.jsx(g,{title:"Press button to toggle disabled state.",children:r.jsxs(H,{orientation:"vertical",children:[r.jsx(d,{disabled:s,defaultChecked:!0}),r.jsx(Z,{type:"primary",onClick:n,children:"Toggle disabled"})]})})}},u={render:()=>r.jsxs(g,{title:r.jsx(r.Fragment,{children:"size=small represents a small sized switch."}),children:[r.jsx(d,{defaultChecked:!0}),r.jsx("br",{}),r.jsx(d,{size:"small",defaultChecked:!0})]})},h={render:()=>r.jsxs(g,{title:"Mark a pending state of switch.",children:[r.jsx(d,{loading:!0,defaultChecked:!0}),r.jsx("br",{}),r.jsx(d,{size:"small",loading:!0,checkedChildren:"Loading",unCheckedChildren:"Loading"})]})},C={render:()=>r.jsx(g,{title:"With text and icon.",children:r.jsxs(H,{orientation:"vertical",children:[r.jsx(d,{checkedChildren:"Checked Text",unCheckedChildren:"Unchecked Text",defaultChecked:!0}),r.jsx(d,{checkedChildren:"1",unCheckedChildren:"0"}),r.jsx(d,{checkedChildren:r.jsx(S,{name:"selected"}),unCheckedChildren:r.jsx(S,{name:"support"}),defaultChecked:!0})]})})};var f,b,j;o.parameters=t(e({},o.parameters),{docs:t(e({},(f=o.parameters)==null?void 0:f.docs),{source:e({originalSource:`{
  args: {
    checked: true
  }
}`},(j=(b=o.parameters)==null?void 0:b.docs)==null?void 0:j.source)})});var E,y,w;c.parameters=t(e({},c.parameters),{docs:t(e({},(E=c.parameters)==null?void 0:E.docs),{source:e({originalSource:`{
  args: {
    checked: true,
    checkedChildren: 'On (Custom Copy)',
    unCheckedChildren: 'Off (Custom Copy)'
  }
}`},(w=(y=c.parameters)==null?void 0:y.docs)==null?void 0:w.source)})});var z,D,L;i.parameters=t(e({},i.parameters),{docs:t(e({},(z=i.parameters)==null?void 0:z.docs),{source:e({originalSource:`{
  args: {
    disabled: true
  }
}`},(L=(D=i.parameters)==null?void 0:D.docs)==null?void 0:L.source)})});var T,v,O;l.parameters=t(e({},l.parameters),{docs:t(e({},(T=l.parameters)==null?void 0:T.docs),{source:e({originalSource:`{
  args: {
    loading: true
  }
}`},(O=(v=l.parameters)==null?void 0:v.docs)==null?void 0:O.source)})});var I,B,P;m.parameters=t(e({},m.parameters),{docs:t(e({},(I=m.parameters)==null?void 0:I.docs),{source:e({originalSource:`{
  args: {
    size: 'small'
  }
}`},(P=(B=m.parameters)==null?void 0:B.docs)==null?void 0:P.source)})});var A,F,M;p.parameters=t(e({},p.parameters),{docs:t(e({},(A=p.parameters)==null?void 0:A.docs),{source:e({originalSource:`{
  render: () => {
    const [disabled, setDisabled] = useState(true);
    const toggle = () => {
      setDisabled(!disabled);
    };
    return <ExampleStory title="Press button to toggle disabled state.">
        <Space orientation="vertical">
          <Switch disabled={disabled} defaultChecked />
          <Button type="primary" onClick={toggle}>
            Toggle disabled
          </Button>
        </Space>
      </ExampleStory>;
  }
}`},(M=(F=p.parameters)==null?void 0:F.docs)==null?void 0:M.source)})});var N,R,U;u.parameters=t(e({},u.parameters),{docs:t(e({},(N=u.parameters)==null?void 0:N.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title={<>size=small represents a small sized switch.</>}>
        <Switch defaultChecked />
        <br />
        <Switch size="small" defaultChecked />
      </ExampleStory>;
  }
}`},(U=(R=u.parameters)==null?void 0:R.docs)==null?void 0:U.source)})});var W,_,V;h.parameters=t(e({},h.parameters),{docs:t(e({},(W=h.parameters)==null?void 0:W.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title="Mark a pending state of switch.">
        <Switch loading defaultChecked />
        <br />
        <Switch size="small" loading checkedChildren="Loading" unCheckedChildren="Loading" />
      </ExampleStory>;
  }
}`},(V=(_=h.parameters)==null?void 0:_.docs)==null?void 0:V.source)})});var $,q,G;C.parameters=t(e({},C.parameters),{docs:t(e({},($=C.parameters)==null?void 0:$.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title="With text and icon.">
        <Space orientation="vertical">
          <Switch checkedChildren="Checked Text" unCheckedChildren="Unchecked Text" defaultChecked />
          <Switch checkedChildren="1" unCheckedChildren="0" />
          <Switch checkedChildren={<Icon name="selected" />} unCheckedChildren={<Icon name="support" />} defaultChecked />
        </Space>
      </ExampleStory>;
  }
}`},(G=(q=C.parameters)==null?void 0:q.docs)==null?void 0:G.source)})});const je=["Checked","CustomCopy","Disabled","Loading","Small","ExampleDisabled","ExampleSizes","ExampleLoading","ExampleTextAndIcon"];export{o as Checked,c as CustomCopy,i as Disabled,p as ExampleDisabled,h as ExampleLoading,u as ExampleSizes,C as ExampleTextAndIcon,l as Loading,m as Small,je as __namedExportsOrder,be as default};
