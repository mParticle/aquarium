var Y=Object.defineProperty,Z=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var S=(s,t,n)=>t in s?Y(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,e=(s,t)=>{for(var n in t||(t={}))re.call(t,n)&&S(s,n,t[n]);if(x)for(var n of x(t))ae.call(t,n)&&S(s,n,t[n]);return s},r=(s,t)=>Z(s,ee(t));import{j as a}from"./jsx-runtime-CVnACwZl.js";import{k as c,e as X,B as te,I as f}from"./GlobalNavigation-Cm5mBd9v.js";import{E as k}from"./ExampleStory-DWIM4kpW.js";import"./ConfigProvider-C4rPDA4Q.js";import"./_baseClone-B3DJrZ5i.js";import{r as se}from"./index-3OP4wdng.js";import"./index-vcA8fjEC.js";import"./useToken-CXWLUMEq.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-B-gr4m3q.js";import"./isNativeReflectConstruct-D-r9sWlk.js";import"./row-BwvytWES.js";import"./dayjs.min-FTgVsUrW.js";import"./customParseFormat-Dfkg1z51.js";import"./LightTheme-BtoaoHMG.js";const je={title:"Components/Data Entry/Switch",component:c,args:{autoFocus:!1,checked:!1,checkedChildren:"On",className:"",defaultChecked:!1,defaultValue:!1,disabled:!1,loading:!1,size:"default",unCheckedChildren:"Off",value:!1,onClick:(s,t)=>{},onChange:(s,t)=>{alert(`Switch changed: ${s}`)}}},d={},o={args:{checked:!0}},i={args:{checked:!0,checkedChildren:"On (Custom Copy)",unCheckedChildren:"Off (Custom Copy)"}},l={args:{disabled:!0}},m={args:{loading:!0}},u={args:{size:"small"}},p={render:()=>{const[s,t]=se.useState(!0),n=()=>{t(!s)};return a.jsx(k,{title:"Press button to toggle disabled state.",children:a.jsxs(X,{direction:"vertical",children:[a.jsx(c,{disabled:s,defaultChecked:!0}),a.jsx(te,{type:"primary",onClick:n,children:"Toggle disabled"})]})})}},h={render:()=>a.jsxs(k,{title:a.jsx(a.Fragment,{children:"size=small represents a small sized switch."}),children:[a.jsx(c,{defaultChecked:!0}),a.jsx("br",{}),a.jsx(c,{size:"small",defaultChecked:!0})]})},C={render:()=>a.jsxs(k,{title:"Mark a pending state of switch.",children:[a.jsx(c,{loading:!0,defaultChecked:!0}),a.jsx("br",{}),a.jsx(c,{size:"small",loading:!0,checkedChildren:"Loading",unCheckedChildren:"Loading"})]})},g={render:()=>a.jsx(k,{title:"With text and icon.",children:a.jsxs(X,{direction:"vertical",children:[a.jsx(c,{checkedChildren:"Checked Text",unCheckedChildren:"Unchecked Text",defaultChecked:!0}),a.jsx(c,{checkedChildren:"1",unCheckedChildren:"0"}),a.jsx(c,{checkedChildren:a.jsx(f,{name:"selected"}),unCheckedChildren:a.jsx(f,{name:"support"}),defaultChecked:!0})]})})};var b,j,y;d.parameters=r(e({},d.parameters),{docs:r(e({},(b=d.parameters)==null?void 0:b.docs),{source:e({originalSource:"{}"},(y=(j=d.parameters)==null?void 0:j.docs)==null?void 0:y.source)})});var E,w,z;o.parameters=r(e({},o.parameters),{docs:r(e({},(E=o.parameters)==null?void 0:E.docs),{source:e({originalSource:`{
  args: {
    checked: true
  }
}`},(z=(w=o.parameters)==null?void 0:w.docs)==null?void 0:z.source)})});var D,L,T;i.parameters=r(e({},i.parameters),{docs:r(e({},(D=i.parameters)==null?void 0:D.docs),{source:e({originalSource:`{
  args: {
    checked: true,
    checkedChildren: 'On (Custom Copy)',
    unCheckedChildren: 'Off (Custom Copy)'
  }
}`},(T=(L=i.parameters)==null?void 0:L.docs)==null?void 0:T.source)})});var v,O,I;l.parameters=r(e({},l.parameters),{docs:r(e({},(v=l.parameters)==null?void 0:v.docs),{source:e({originalSource:`{
  args: {
    disabled: true
  }
}`},(I=(O=l.parameters)==null?void 0:O.docs)==null?void 0:I.source)})});var B,P,A;m.parameters=r(e({},m.parameters),{docs:r(e({},(B=m.parameters)==null?void 0:B.docs),{source:e({originalSource:`{
  args: {
    loading: true
  }
}`},(A=(P=m.parameters)==null?void 0:P.docs)==null?void 0:A.source)})});var F,M,U;u.parameters=r(e({},u.parameters),{docs:r(e({},(F=u.parameters)==null?void 0:F.docs),{source:e({originalSource:`{
  args: {
    size: 'small'
  }
}`},(U=(M=u.parameters)==null?void 0:M.docs)==null?void 0:U.source)})});var W,_,N;p.parameters=r(e({},p.parameters),{docs:r(e({},(W=p.parameters)==null?void 0:W.docs),{source:e({originalSource:`{
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
}`},(N=(_=p.parameters)==null?void 0:_.docs)==null?void 0:N.source)})});var R,V,$;h.parameters=r(e({},h.parameters),{docs:r(e({},(R=h.parameters)==null?void 0:R.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title={<>size=small represents a small sized switch.</>}>
        <Switch defaultChecked />
        <br />
        <Switch size="small" defaultChecked />
      </ExampleStory>;
  }
}`},($=(V=h.parameters)==null?void 0:V.docs)==null?void 0:$.source)})});var q,G,H;C.parameters=r(e({},C.parameters),{docs:r(e({},(q=C.parameters)==null?void 0:q.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title="Mark a pending state of switch.">
        <Switch loading defaultChecked />
        <br />
        <Switch size="small" loading checkedChildren="Loading" unCheckedChildren="Loading" />
      </ExampleStory>;
  }
}`},(H=(G=C.parameters)==null?void 0:G.docs)==null?void 0:H.source)})});var J,K,Q;g.parameters=r(e({},g.parameters),{docs:r(e({},(J=g.parameters)==null?void 0:J.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title="With text and icon.">
        <Space direction="vertical">
          <Switch checkedChildren="Checked Text" unCheckedChildren="Unchecked Text" defaultChecked />
          <Switch checkedChildren="1" unCheckedChildren="0" />
          <Switch checkedChildren={<Icon name="selected" />} unCheckedChildren={<Icon name="support" />} defaultChecked />
        </Space>
      </ExampleStory>;
  }
}`},(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source)})});const ye=["Primary","Checked","CustomCopy","Disabled","Loading","Small","ExampleDisabled","ExampleSizes","ExampleLoading","ExampleTextAndIcon"];export{o as Checked,i as CustomCopy,l as Disabled,p as ExampleDisabled,C as ExampleLoading,h as ExampleSizes,g as ExampleTextAndIcon,m as Loading,d as Primary,u as Small,ye as __namedExportsOrder,je as default};
