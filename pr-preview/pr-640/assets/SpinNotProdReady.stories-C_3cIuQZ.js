var he=Object.defineProperty,fe=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable;var w=(n,a,t)=>a in n?he(n,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[a]=t,e=(n,a)=>{for(var t in a||(a={}))je.call(a,t)&&w(n,t,a[t]);if(b)for(var t of b(a))Ee.call(a,t)&&w(n,t,a[t]);return n},r=(n,a)=>fe(n,ye(a));import{j as s}from"./jsx-runtime-CVnACwZl.js";import{Y as i,I as Le,F as L,z,w as Se,f as ze}from"./NavigationItemsService-ZN6c2Guk.js";import{E as o}from"./ExampleStory-Dq5ZWxby.js";import{c as xe}from"./ErrorStateIcon-BEU0OB1a.js";import"./_baseClone-CXAe4HsA.js";import{r as v}from"./index-3OP4wdng.js";import"./LightTheme-BtoaoHMG.js";import"./row-Bsm_WxsR.js";import"./Context-R5ee3nrF.js";import"./useToken-C_i1q6Gz.js";import"./presets-BrZHayqo.js";import"./extends-CF3RwP-h.js";import"./index-B-gr4m3q.js";import"./isNativeReflectConstruct-CWIsGhkf.js";const Re={title:"Components/Not Prod Ready/Feedback/Spin",component:i,args:{delay:void 0,indicator:void 0,size:"default",spinning:!0,tip:void 0,wrapperClassName:void 0,fullscreen:!1}},l={},d={args:{size:"small"}},c={args:{size:"large"}},p={args:{delay:500}},m={args:{indicator:s.jsx(Le,{name:"mpLogo"})}},g={args:{spinning:!1}},u={args:{tip:"Loading...",children:s.jsx(s.Fragment,{})}},S={args:{wrapperClassName:"custom-wrapper"}},x={args:{fullscreen:!0}},h={render:()=>s.jsx(o,{title:"A small Spin is used for loading text, default sized Spin for loading a card-level block, and large Spin used for loading a page.",children:s.jsxs(L,{align:"center",gap:"middle",children:[s.jsx(i,{size:"small"}),s.jsx(i,{}),s.jsx(i,{size:"large"})]})})},f={render:()=>{const[n,a]=v.useState(!1);return s.jsxs(o,{title:"Embedding content into Spin will set it into loading state.",children:[s.jsx(i,{spinning:n,children:s.jsx(z,{type:"info",message:"Alert message title",description:"Further details about the context of this alert."})}),s.jsxs("div",{style:{marginTop:xe},children:["Loading state：",s.jsx(Se,{checked:n,onChange:a})]})]})}},y={render:()=>s.jsx(o,{title:"Adds subtext",children:s.jsxs(L,{gap:50,vertical:!0,children:[s.jsxs(L,{gap:100,children:[s.jsx(i,{tip:"Loading",size:"small",children:s.jsx("div",{className:"content"})}),s.jsx(i,{tip:"Loading",children:s.jsx("div",{className:"content"})}),s.jsx(i,{tip:"Loading",size:"large",children:s.jsx("div",{className:"content"})})]}),s.jsx(i,{tip:"Loading...",children:s.jsx(z,{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"})})]})})},j={render:()=>{const[n,a]=v.useState(!1);return s.jsxs(o,{title:"Specifies a delay for loading state. If spinning ends during delay, loading status won't appear.",children:[s.jsx(i,{spinning:n,delay:500,children:s.jsx(z,{type:"info",message:"Alert message title",description:"Further details about the context of this alert."})}),s.jsxs("div",{style:{marginTop:xe},children:["Loading state：",s.jsx(Se,{checked:n,onChange:a})]})]})}},E={render:()=>{const[n,a]=v.useState(!1),t=()=>{a(!0),setTimeout(()=>{a(!1)},3e3)};return s.jsxs(o,{title:"The fullscreen mode is perfect for creating page loaders. It adds a dimmed overlay with a centered spinner.",children:[s.jsx(ze,{onClick:t,children:"Show fullscreen for 3s"}),s.jsx(i,{spinning:n,fullscreen:!0})]})}};var C,F,A;l.parameters=r(e({},l.parameters),{docs:r(e({},(C=l.parameters)==null?void 0:C.docs),{source:e({originalSource:"{}"},(A=(F=l.parameters)==null?void 0:F.docs)==null?void 0:A.source)})});var N,T,W;d.parameters=r(e({},d.parameters),{docs:r(e({},(N=d.parameters)==null?void 0:N.docs),{source:e({originalSource:`{
  args: {
    size: 'small'
  }
}`},(W=(T=d.parameters)==null?void 0:T.docs)==null?void 0:W.source)})});var k,I,D;c.parameters=r(e({},c.parameters),{docs:r(e({},(k=c.parameters)==null?void 0:k.docs),{source:e({originalSource:`{
  args: {
    size: 'large'
  }
}`},(D=(I=c.parameters)==null?void 0:I.docs)==null?void 0:D.source)})});var M,B,P;p.parameters=r(e({},p.parameters),{docs:r(e({},(M=p.parameters)==null?void 0:M.docs),{source:e({originalSource:`{
  args: {
    delay: 500
  }
}`},(P=(B=p.parameters)==null?void 0:B.docs)==null?void 0:P.source)})});var R,_,O;m.parameters=r(e({},m.parameters),{docs:r(e({},(R=m.parameters)==null?void 0:R.docs),{source:e({originalSource:`{
  args: {
    indicator: <Icon name="mpLogo" />
  }
}`},(O=(_=m.parameters)==null?void 0:_.docs)==null?void 0:O.source)})});var Y,q,G;g.parameters=r(e({},g.parameters),{docs:r(e({},(Y=g.parameters)==null?void 0:Y.docs),{source:e({originalSource:`{
  args: {
    spinning: false
  }
}`},(G=(q=g.parameters)==null?void 0:q.docs)==null?void 0:G.source)})});var H,J,K;u.parameters=r(e({},u.parameters),{docs:r(e({},(H=u.parameters)==null?void 0:H.docs),{source:e({originalSource:`{
  args: {
    tip: 'Loading...',
    children: <></>
  }
}`},(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source)})});var Q,U,V;S.parameters=r(e({},S.parameters),{docs:r(e({},(Q=S.parameters)==null?void 0:Q.docs),{source:e({originalSource:`{
  args: {
    wrapperClassName: 'custom-wrapper'
  }
}`},(V=(U=S.parameters)==null?void 0:U.docs)==null?void 0:V.source)})});var X,Z,$;x.parameters=r(e({},x.parameters),{docs:r(e({},(X=x.parameters)==null?void 0:X.docs),{source:e({originalSource:`{
  args: {
    fullscreen: true
  }
}`},($=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:$.source)})});var ee,se,re;h.parameters=r(e({},h.parameters),{docs:r(e({},(ee=h.parameters)==null?void 0:ee.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title="A small Spin is used for loading text, default sized Spin for loading a card-level block, and large Spin used for loading a page.">
        <Flex align="center" gap="middle">
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
        </Flex>
      </ExampleStory>;
  }
}`},(re=(se=h.parameters)==null?void 0:se.docs)==null?void 0:re.source)})});var ae,ne,te;f.parameters=r(e({},f.parameters),{docs:r(e({},(ae=f.parameters)==null?void 0:ae.docs),{source:e({originalSource:`{
  render: () => {
    const [loading, setLoading] = useState<boolean>(false);
    return <ExampleStory title="Embedding content into Spin will set it into loading state.">
        <Spin spinning={loading}>
          <Alert type="info" message="Alert message title" description="Further details about the context of this alert." />
        </Spin>
        <div style={{
        marginTop: Margin
      }}>
          Loading state：
          <Switch checked={loading} onChange={setLoading} />
        </div>
      </ExampleStory>;
  }
}`},(te=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:te.source)})});var ie,oe,le;y.parameters=r(e({},y.parameters),{docs:r(e({},(ie=y.parameters)==null?void 0:ie.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title="Adds subtext">
        <Flex gap={50} vertical>
          <Flex gap={100}>
            <Spin tip="Loading" size="small">
              <div className="content" />
            </Spin>
            <Spin tip="Loading">
              <div className="content" />
            </Spin>
            <Spin tip="Loading" size="large">
              <div className="content" />
            </Spin>
          </Flex>
          <Spin tip="Loading...">
            <Alert message="Alert message title" description="Further details about the context of this alert." type="info" />
          </Spin>
        </Flex>
      </ExampleStory>;
  }
}`},(le=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:le.source)})});var de,ce,pe;j.parameters=r(e({},j.parameters),{docs:r(e({},(de=j.parameters)==null?void 0:de.docs),{source:e({originalSource:`{
  render: () => {
    const [loading, setLoading] = useState<boolean>(false);
    return <ExampleStory title="Specifies a delay for loading state. If spinning ends during delay, loading status won't appear.">
        <Spin spinning={loading} delay={500}>
          <Alert type="info" message="Alert message title" description="Further details about the context of this alert." />
        </Spin>
        <div style={{
        marginTop: Margin
      }}>
          Loading state：
          <Switch checked={loading} onChange={setLoading} />
        </div>
      </ExampleStory>;
  }
}`},(pe=(ce=j.parameters)==null?void 0:ce.docs)==null?void 0:pe.source)})});var me,ge,ue;E.parameters=r(e({},E.parameters),{docs:r(e({},(me=E.parameters)==null?void 0:me.docs),{source:e({originalSource:`{
  render: () => {
    const [spinning, setSpinning] = useState<boolean>(false);
    const showLoader = () => {
      setSpinning(true);
      setTimeout(() => {
        setSpinning(false);
      }, 3000);
    };
    return <ExampleStory title="The fullscreen mode is perfect for creating page loaders. It adds a dimmed overlay with a centered spinner.">
        <Button onClick={showLoader}>Show fullscreen for 3s</Button>
        <Spin spinning={spinning} fullscreen />
      </ExampleStory>;
  }
}`},(ue=(ge=E.parameters)==null?void 0:ge.docs)==null?void 0:ue.source)})});const _e=["Primary","SmallSize","LargeSize","WithCustomDelay","WithCustomIndicator","SpinningDisabled","WithCustomTip","WithWrapperClassName","FullscreenMode","ExampleSize","ExampleEmbedded","ExampleCustomizedDescription","ExampleDelay","ExampleFullscreen"];export{y as ExampleCustomizedDescription,j as ExampleDelay,f as ExampleEmbedded,E as ExampleFullscreen,h as ExampleSize,x as FullscreenMode,c as LargeSize,l as Primary,d as SmallSize,g as SpinningDisabled,p as WithCustomDelay,m as WithCustomIndicator,u as WithCustomTip,S as WithWrapperClassName,_e as __namedExportsOrder,Re as default};
