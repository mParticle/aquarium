var J=Object.defineProperty,K=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var x=(s,a,n)=>a in s?J(s,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[a]=n,e=(s,a)=>{for(var n in a||(a={}))X.call(a,n)&&x(s,n,a[n]);if(k)for(var n of k(a))Y.call(a,n)&&x(s,n,a[n]);return s},t=(s,a)=>K(s,Q(a));import{j as r}from"./jsx-runtime-C9TrHvcC.js";import{v as d,a as H,e as Z,I as S}from"./NavigationItemsService-DcOkMjKp.js";import{E as g}from"./ExampleStory-BYd05bXO.js";import"./ErrorStateIcon-Clx5lk_q.js";import"./SuccessStateIcon-CrBP74im.js";import"./WarningStateIcon-irkX5OVh.js";import"./_baseClone-DwBCp-Ss.js";import{r as ee}from"./index-3OP4wdng.js";import"./LightTheme-BtoaoHMG.js";import"./row-DlEJUZa0.js";import"./Context-R5ee3nrF.js";import"./useToken-BIYN7ogo.js";import"./presets-CQzyf-6F.js";import"./extends-CF3RwP-h.js";import"./index-DA79H6I3.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./AntdIcon-DRQs8XP6.js";import"./style-BvWo89XW.js";import"./WarningFilled-D6ijQqgK.js";const be={title:"Components/Not Prod Ready/Data Entry/Switch",component:d,args:{autoFocus:!1,checked:!1,checkedChildren:"On",className:"",defaultChecked:!1,defaultValue:!1,disabled:!1,loading:!1,size:"default",unCheckedChildren:"Off",value:!1,onClick:(s,a)=>{},onChange:(s,a)=>{alert(`Switch changed: ${s}`)}}},c={args:{checked:!0}},o={args:{checked:!0,checkedChildren:"On (Custom Copy)",unCheckedChildren:"Off (Custom Copy)"}},i={args:{disabled:!0}},l={args:{loading:!0}},m={args:{size:"small"}},p={render:()=>{const[s,a]=ee.useState(!0),n=()=>{a(!s)};return r.jsx(g,{title:"Press button to toggle disabled state.",children:r.jsxs(H,{direction:"vertical",children:[r.jsx(d,{disabled:s,defaultChecked:!0}),r.jsx(Z,{type:"primary",onClick:n,children:"Toggle disabled"})]})})}},u={render:()=>r.jsxs(g,{title:r.jsx(r.Fragment,{children:"size=small represents a small sized switch."}),children:[r.jsx(d,{defaultChecked:!0}),r.jsx("br",{}),r.jsx(d,{size:"small",defaultChecked:!0})]})},h={render:()=>r.jsxs(g,{title:"Mark a pending state of switch.",children:[r.jsx(d,{loading:!0,defaultChecked:!0}),r.jsx("br",{}),r.jsx(d,{size:"small",loading:!0,checkedChildren:"Loading",unCheckedChildren:"Loading"})]})},C={render:()=>r.jsx(g,{title:"With text and icon.",children:r.jsxs(H,{direction:"vertical",children:[r.jsx(d,{checkedChildren:"Checked Text",unCheckedChildren:"Unchecked Text",defaultChecked:!0}),r.jsx(d,{checkedChildren:"1",unCheckedChildren:"0"}),r.jsx(d,{checkedChildren:r.jsx(S,{name:"selected"}),unCheckedChildren:r.jsx(S,{name:"support"}),defaultChecked:!0})]})})};var f,b,j;c.parameters=t(e({},c.parameters),{docs:t(e({},(f=c.parameters)==null?void 0:f.docs),{source:e({originalSource:`{
  args: {
    checked: true
  }
}`},(j=(b=c.parameters)==null?void 0:b.docs)==null?void 0:j.source)})});var E,y,w;o.parameters=t(e({},o.parameters),{docs:t(e({},(E=o.parameters)==null?void 0:E.docs),{source:e({originalSource:`{
  args: {
    checked: true,
    checkedChildren: 'On (Custom Copy)',
    unCheckedChildren: 'Off (Custom Copy)'
  }
}`},(w=(y=o.parameters)==null?void 0:y.docs)==null?void 0:w.source)})});var z,v,D;i.parameters=t(e({},i.parameters),{docs:t(e({},(z=i.parameters)==null?void 0:z.docs),{source:e({originalSource:`{
  args: {
    disabled: true
  }
}`},(D=(v=i.parameters)==null?void 0:v.docs)==null?void 0:D.source)})});var L,T,O;l.parameters=t(e({},l.parameters),{docs:t(e({},(L=l.parameters)==null?void 0:L.docs),{source:e({originalSource:`{
  args: {
    loading: true
  }
}`},(O=(T=l.parameters)==null?void 0:T.docs)==null?void 0:O.source)})});var I,B,P;m.parameters=t(e({},m.parameters),{docs:t(e({},(I=m.parameters)==null?void 0:I.docs),{source:e({originalSource:`{
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
        <Space direction="vertical">
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
        <Space direction="vertical">
          <Switch checkedChildren="Checked Text" unCheckedChildren="Unchecked Text" defaultChecked />
          <Switch checkedChildren="1" unCheckedChildren="0" />
          <Switch checkedChildren={<Icon name="selected" />} unCheckedChildren={<Icon name="support" />} defaultChecked />
        </Space>
      </ExampleStory>;
  }
}`},(G=(q=C.parameters)==null?void 0:q.docs)==null?void 0:G.source)})});const je=["Checked","CustomCopy","Disabled","Loading","Small","ExampleDisabled","ExampleSizes","ExampleLoading","ExampleTextAndIcon"];export{c as Checked,o as CustomCopy,i as Disabled,p as ExampleDisabled,h as ExampleLoading,u as ExampleSizes,C as ExampleTextAndIcon,l as Loading,m as Small,je as __namedExportsOrder,be as default};
