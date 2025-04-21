var J=Object.defineProperty,K=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var x=(s,t,n)=>t in s?J(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,e=(s,t)=>{for(var n in t||(t={}))X.call(t,n)&&x(s,n,t[n]);if(k)for(var n of k(t))Y.call(t,n)&&x(s,n,t[n]);return s},a=(s,t)=>K(s,Q(t));import{j as r}from"./jsx-runtime-BcCOBRXo.js";import{z as d,b as H,g as Z,I as S}from"./NavigationItemsService-D07KrxCy.js";import{E as g}from"./ExampleStory-ByniDHPF.js";import"./_baseClone-DBzvlRjn.js";import{r as ee}from"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-GPgCuxPF.js";import"./useToken-BSaSgSTZ.js";import"./extends-CF3RwP-h.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";const he={title:"Components/Not Prod Ready/Data Entry/Switch",component:d,args:{autoFocus:!1,checked:!1,checkedChildren:"On",className:"",defaultChecked:!1,defaultValue:!1,disabled:!1,loading:!1,size:"default",unCheckedChildren:"Off",value:!1,onClick:(s,t)=>{},onChange:(s,t)=>{alert(`Switch changed: ${s}`)}}},c={args:{checked:!0}},o={args:{checked:!0,checkedChildren:"On (Custom Copy)",unCheckedChildren:"Off (Custom Copy)"}},l={args:{disabled:!0}},i={args:{loading:!0}},u={args:{size:"small"}},m={render:()=>{const[s,t]=ee.useState(!0),n=()=>{t(!s)};return r.jsx(g,{title:"Press button to toggle disabled state.",children:r.jsxs(H,{direction:"vertical",children:[r.jsx(d,{disabled:s,defaultChecked:!0}),r.jsx(Z,{type:"primary",onClick:n,children:"Toggle disabled"})]})})}},h={render:()=>r.jsxs(g,{title:r.jsx(r.Fragment,{children:"size=small represents a small sized switch."}),children:[r.jsx(d,{defaultChecked:!0}),r.jsx("br",{}),r.jsx(d,{size:"small",defaultChecked:!0})]})},p={render:()=>r.jsxs(g,{title:"Mark a pending state of switch.",children:[r.jsx(d,{loading:!0,defaultChecked:!0}),r.jsx("br",{}),r.jsx(d,{size:"small",loading:!0,checkedChildren:"Loading",unCheckedChildren:"Loading"})]})},C={render:()=>r.jsx(g,{title:"With text and icon.",children:r.jsxs(H,{direction:"vertical",children:[r.jsx(d,{checkedChildren:"Checked Text",unCheckedChildren:"Unchecked Text",defaultChecked:!0}),r.jsx(d,{checkedChildren:"1",unCheckedChildren:"0"}),r.jsx(d,{checkedChildren:r.jsx(S,{name:"selected"}),unCheckedChildren:r.jsx(S,{name:"support"}),defaultChecked:!0})]})})};var f,b,j;c.parameters=a(e({},c.parameters),{docs:a(e({},(f=c.parameters)==null?void 0:f.docs),{source:e({originalSource:`{
  args: {
    checked: true
  }
}`},(j=(b=c.parameters)==null?void 0:b.docs)==null?void 0:j.source)})});var E,y,w;o.parameters=a(e({},o.parameters),{docs:a(e({},(E=o.parameters)==null?void 0:E.docs),{source:e({originalSource:`{
  args: {
    checked: true,
    checkedChildren: 'On (Custom Copy)',
    unCheckedChildren: 'Off (Custom Copy)'
  }
}`},(w=(y=o.parameters)==null?void 0:y.docs)==null?void 0:w.source)})});var z,D,L;l.parameters=a(e({},l.parameters),{docs:a(e({},(z=l.parameters)==null?void 0:z.docs),{source:e({originalSource:`{
  args: {
    disabled: true
  }
}`},(L=(D=l.parameters)==null?void 0:D.docs)==null?void 0:L.source)})});var T,v,O;i.parameters=a(e({},i.parameters),{docs:a(e({},(T=i.parameters)==null?void 0:T.docs),{source:e({originalSource:`{
  args: {
    loading: true
  }
}`},(O=(v=i.parameters)==null?void 0:v.docs)==null?void 0:O.source)})});var I,B,P;u.parameters=a(e({},u.parameters),{docs:a(e({},(I=u.parameters)==null?void 0:I.docs),{source:e({originalSource:`{
  args: {
    size: 'small'
  }
}`},(P=(B=u.parameters)==null?void 0:B.docs)==null?void 0:P.source)})});var A,F,M;m.parameters=a(e({},m.parameters),{docs:a(e({},(A=m.parameters)==null?void 0:A.docs),{source:e({originalSource:`{
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
}`},(M=(F=m.parameters)==null?void 0:F.docs)==null?void 0:M.source)})});var N,R,U;h.parameters=a(e({},h.parameters),{docs:a(e({},(N=h.parameters)==null?void 0:N.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title={<>size=small represents a small sized switch.</>}>
        <Switch defaultChecked />
        <br />
        <Switch size="small" defaultChecked />
      </ExampleStory>;
  }
}`},(U=(R=h.parameters)==null?void 0:R.docs)==null?void 0:U.source)})});var W,_,V;p.parameters=a(e({},p.parameters),{docs:a(e({},(W=p.parameters)==null?void 0:W.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title="Mark a pending state of switch.">
        <Switch loading defaultChecked />
        <br />
        <Switch size="small" loading checkedChildren="Loading" unCheckedChildren="Loading" />
      </ExampleStory>;
  }
}`},(V=(_=p.parameters)==null?void 0:_.docs)==null?void 0:V.source)})});var $,q,G;C.parameters=a(e({},C.parameters),{docs:a(e({},($=C.parameters)==null?void 0:$.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title="With text and icon.">
        <Space direction="vertical">
          <Switch checkedChildren="Checked Text" unCheckedChildren="Unchecked Text" defaultChecked />
          <Switch checkedChildren="1" unCheckedChildren="0" />
          <Switch checkedChildren={<Icon name="selected" />} unCheckedChildren={<Icon name="support" />} defaultChecked />
        </Space>
      </ExampleStory>;
  }
}`},(G=(q=C.parameters)==null?void 0:q.docs)==null?void 0:G.source)})});const pe=["Checked","CustomCopy","Disabled","Loading","Small","ExampleDisabled","ExampleSizes","ExampleLoading","ExampleTextAndIcon"];export{c as Checked,o as CustomCopy,l as Disabled,m as ExampleDisabled,p as ExampleLoading,h as ExampleSizes,C as ExampleTextAndIcon,i as Loading,u as Small,pe as __namedExportsOrder,he as default};
