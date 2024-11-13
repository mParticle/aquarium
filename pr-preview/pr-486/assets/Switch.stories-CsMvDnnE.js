var Y=Object.defineProperty,Z=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var S=(t,s,n)=>s in t?Y(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,e=(t,s)=>{for(var n in s||(s={}))re.call(s,n)&&S(t,n,s[n]);if(x)for(var n of x(s))ae.call(s,n)&&S(t,n,s[n]);return t},r=(t,s)=>Z(t,ee(s));import{j as a}from"./jsx-runtime-BcCOBRXo.js";import{m as c,b as X,k as se,I as f}from"./GlobalNavigation-DbknxE2N.js";import{E as k}from"./ExampleStory-Cp1x3LA4.js";import"./_baseClone-DBzvlRjn.js";import{r as te}from"./index-CNk6hRaE.js";const ne={title:"Components/Data Entry/Switch",component:c,args:{autoFocus:!1,checked:!1,checkedChildren:"On",className:"",defaultChecked:!1,defaultValue:!1,disabled:!1,loading:!1,size:"default",unCheckedChildren:"Off",value:!1,onClick:(t,s)=>{},onChange:(t,s)=>{alert(`Switch changed: ${t}`)}}},d={},o={args:{checked:!0}},l={args:{checked:!0,checkedChildren:"On (Custom Copy)",unCheckedChildren:"Off (Custom Copy)"}},i={args:{disabled:!0}},u={args:{loading:!0}},m={args:{size:"small"}},h={render:()=>{const[t,s]=te.useState(!0),n=()=>{s(!t)};return a.jsx(k,{title:"Press button to toggle disabled state.",children:a.jsxs(X,{direction:"vertical",children:[a.jsx(c,{disabled:t,defaultChecked:!0}),a.jsx(se,{type:"primary",onClick:n,children:"Toggle disabled"})]})})}},p={render:()=>a.jsxs(k,{title:a.jsx(a.Fragment,{children:"size=small represents a small sized switch."}),children:[a.jsx(c,{defaultChecked:!0}),a.jsx("br",{}),a.jsx(c,{size:"small",defaultChecked:!0})]})},C={render:()=>a.jsxs(k,{title:"Mark a pending state of switch.",children:[a.jsx(c,{loading:!0,defaultChecked:!0}),a.jsx("br",{}),a.jsx(c,{size:"small",loading:!0,checkedChildren:"Loading",unCheckedChildren:"Loading"})]})},g={render:()=>a.jsx(k,{title:"With text and icon.",children:a.jsxs(X,{direction:"vertical",children:[a.jsx(c,{checkedChildren:"Checked Text",unCheckedChildren:"Unchecked Text",defaultChecked:!0}),a.jsx(c,{checkedChildren:"1",unCheckedChildren:"0"}),a.jsx(c,{checkedChildren:a.jsx(f,{name:"selected"}),unCheckedChildren:a.jsx(f,{name:"support"}),defaultChecked:!0})]})})};var b,j,y;d.parameters=r(e({},d.parameters),{docs:r(e({},(b=d.parameters)==null?void 0:b.docs),{source:e({originalSource:"{}"},(y=(j=d.parameters)==null?void 0:j.docs)==null?void 0:y.source)})});var E,w,z;o.parameters=r(e({},o.parameters),{docs:r(e({},(E=o.parameters)==null?void 0:E.docs),{source:e({originalSource:`{
  args: {
    checked: true
  }
}`},(z=(w=o.parameters)==null?void 0:w.docs)==null?void 0:z.source)})});var O,T,v;l.parameters=r(e({},l.parameters),{docs:r(e({},(O=l.parameters)==null?void 0:O.docs),{source:e({originalSource:`{
  args: {
    checked: true,
    checkedChildren: 'On (Custom Copy)',
    unCheckedChildren: 'Off (Custom Copy)'
  }
}`},(v=(T=l.parameters)==null?void 0:T.docs)==null?void 0:v.source)})});var D,L,I;i.parameters=r(e({},i.parameters),{docs:r(e({},(D=i.parameters)==null?void 0:D.docs),{source:e({originalSource:`{
  args: {
    disabled: true
  }
}`},(I=(L=i.parameters)==null?void 0:L.docs)==null?void 0:I.source)})});var _,P,B;u.parameters=r(e({},u.parameters),{docs:r(e({},(_=u.parameters)==null?void 0:_.docs),{source:e({originalSource:`{
  args: {
    loading: true
  }
}`},(B=(P=u.parameters)==null?void 0:P.docs)==null?void 0:B.source)})});var M,A,F;m.parameters=r(e({},m.parameters),{docs:r(e({},(M=m.parameters)==null?void 0:M.docs),{source:e({originalSource:`{
  args: {
    size: 'small'
  }
}`},(F=(A=m.parameters)==null?void 0:A.docs)==null?void 0:F.source)})});var U,W,N;h.parameters=r(e({},h.parameters),{docs:r(e({},(U=h.parameters)==null?void 0:U.docs),{source:e({originalSource:`{
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
}`},(N=(W=h.parameters)==null?void 0:W.docs)==null?void 0:N.source)})});var R,V,$;p.parameters=r(e({},p.parameters),{docs:r(e({},(R=p.parameters)==null?void 0:R.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title={<>size=small represents a small sized switch.</>}>
        <Switch defaultChecked />
        <br />
        <Switch size="small" defaultChecked />
      </ExampleStory>;
  }
}`},($=(V=p.parameters)==null?void 0:V.docs)==null?void 0:$.source)})});var q,G,H;C.parameters=r(e({},C.parameters),{docs:r(e({},(q=C.parameters)==null?void 0:q.docs),{source:e({originalSource:`{
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
}`},(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source)})});const ce=["Primary","Checked","CustomCopy","Disabled","Loading","Small","ExampleDisabled","ExampleSizes","ExampleLoading","ExampleTextAndIcon"],he=Object.freeze(Object.defineProperty({__proto__:null,Checked:o,CustomCopy:l,Disabled:i,ExampleDisabled:h,ExampleLoading:C,ExampleSizes:p,ExampleTextAndIcon:g,Loading:u,Primary:d,Small:m,__namedExportsOrder:ce,default:ne},Symbol.toStringTag,{value:"Module"}));export{he as S,ne as m};
