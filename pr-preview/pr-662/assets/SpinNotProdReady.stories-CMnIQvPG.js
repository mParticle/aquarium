var he=Object.defineProperty,fe=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable;var C=(n,a,t)=>a in n?he(n,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[a]=t,e=(n,a)=>{for(var t in a||(a={}))je.call(a,t)&&C(n,t,a[t]);if(b)for(var t of b(a))Ee.call(a,t)&&C(n,t,a[t]);return n},s=(n,a)=>fe(n,ye(a));import{j as r}from"./jsx-runtime-CVnACwZl.js";import{_ as i,I as Le,F as L,y as v,v as Se,e as ve}from"./NavigationItemsService-CuFEGhBb.js";import{E as o}from"./ExampleStory-Bdgev_34.js";import"./ErrorStateIcon-BRWp4BlJ.js";import"./SuccessStateIcon-BsBXOH8a.js";import"./WarningStateIcon-BfLYqkbJ.js";import"./_baseClone-CXAe4HsA.js";import{r as xe}from"./style-BXI2X-Z8.js";import{r as z}from"./index-3OP4wdng.js";import"./LightTheme-BtoaoHMG.js";import"./row-Bsm_WxsR.js";import"./Context-R5ee3nrF.js";import"./useToken-C_i1q6Gz.js";import"./presets-BrZHayqo.js";import"./extends-CF3RwP-h.js";import"./index-B-gr4m3q.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./AntdIcon-Dzuf-ABm.js";import"./WarningFilled-BnDVOXXO.js";const He={title:"Components/Not Prod Ready/Feedback/Spin",component:i,args:{delay:void 0,indicator:void 0,size:"default",spinning:!0,tip:void 0,wrapperClassName:void 0,fullscreen:!1}},l={},d={args:{size:"small"}},p={args:{size:"large"}},c={args:{delay:500}},m={args:{indicator:r.jsx(Le,{name:"mpLogo"})}},g={args:{spinning:!1}},u={args:{tip:"Loading...",children:r.jsx(r.Fragment,{})}},S={args:{wrapperClassName:"custom-wrapper"}},x={args:{fullscreen:!0}},h={render:()=>r.jsx(o,{title:"A small Spin is used for loading text, default sized Spin for loading a card-level block, and large Spin used for loading a page.",children:r.jsxs(L,{align:"center",gap:"middle",children:[r.jsx(i,{size:"small"}),r.jsx(i,{}),r.jsx(i,{size:"large"})]})})},f={render:()=>{const[n,a]=z.useState(!1);return r.jsxs(o,{title:"Embedding content into Spin will set it into loading state.",children:[r.jsx(i,{spinning:n,children:r.jsx(v,{type:"info",message:"Alert message title",description:"Further details about the context of this alert."})}),r.jsxs("div",{style:{marginTop:xe},children:["Loading state：",r.jsx(Se,{checked:n,onChange:a})]})]})}},y={render:()=>r.jsx(o,{title:"Adds subtext",children:r.jsxs(L,{gap:50,vertical:!0,children:[r.jsxs(L,{gap:100,children:[r.jsx(i,{tip:"Loading",size:"small",children:r.jsx("div",{className:"content"})}),r.jsx(i,{tip:"Loading",children:r.jsx("div",{className:"content"})}),r.jsx(i,{tip:"Loading",size:"large",children:r.jsx("div",{className:"content"})})]}),r.jsx(i,{tip:"Loading...",children:r.jsx(v,{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"})})]})})},j={render:()=>{const[n,a]=z.useState(!1);return r.jsxs(o,{title:"Specifies a delay for loading state. If spinning ends during delay, loading status won't appear.",children:[r.jsx(i,{spinning:n,delay:500,children:r.jsx(v,{type:"info",message:"Alert message title",description:"Further details about the context of this alert."})}),r.jsxs("div",{style:{marginTop:xe},children:["Loading state：",r.jsx(Se,{checked:n,onChange:a})]})]})}},E={render:()=>{const[n,a]=z.useState(!1),t=()=>{a(!0),setTimeout(()=>{a(!1)},3e3)};return r.jsxs(o,{title:"The fullscreen mode is perfect for creating page loaders. It adds a dimmed overlay with a centered spinner.",children:[r.jsx(ve,{onClick:t,children:"Show fullscreen for 3s"}),r.jsx(i,{spinning:n,fullscreen:!0})]})}};var F,w,A;l.parameters=s(e({},l.parameters),{docs:s(e({},(F=l.parameters)==null?void 0:F.docs),{source:e({originalSource:"{}"},(A=(w=l.parameters)==null?void 0:w.docs)==null?void 0:A.source)})});var N,T,W;d.parameters=s(e({},d.parameters),{docs:s(e({},(N=d.parameters)==null?void 0:N.docs),{source:e({originalSource:`{
  args: {
    size: 'small'
  }
}`},(W=(T=d.parameters)==null?void 0:T.docs)==null?void 0:W.source)})});var k,I,D;p.parameters=s(e({},p.parameters),{docs:s(e({},(k=p.parameters)==null?void 0:k.docs),{source:e({originalSource:`{
  args: {
    size: 'large'
  }
}`},(D=(I=p.parameters)==null?void 0:I.docs)==null?void 0:D.source)})});var M,B,P;c.parameters=s(e({},c.parameters),{docs:s(e({},(M=c.parameters)==null?void 0:M.docs),{source:e({originalSource:`{
  args: {
    delay: 500
  }
}`},(P=(B=c.parameters)==null?void 0:B.docs)==null?void 0:P.source)})});var _,R,O;m.parameters=s(e({},m.parameters),{docs:s(e({},(_=m.parameters)==null?void 0:_.docs),{source:e({originalSource:`{
  args: {
    indicator: <Icon name="mpLogo" />
  }
}`},(O=(R=m.parameters)==null?void 0:R.docs)==null?void 0:O.source)})});var q,G,H;g.parameters=s(e({},g.parameters),{docs:s(e({},(q=g.parameters)==null?void 0:q.docs),{source:e({originalSource:`{
  args: {
    spinning: false
  }
}`},(H=(G=g.parameters)==null?void 0:G.docs)==null?void 0:H.source)})});var J,K,Q;u.parameters=s(e({},u.parameters),{docs:s(e({},(J=u.parameters)==null?void 0:J.docs),{source:e({originalSource:`{
  args: {
    tip: 'Loading...',
    children: <></>
  }
}`},(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source)})});var U,V,X;S.parameters=s(e({},S.parameters),{docs:s(e({},(U=S.parameters)==null?void 0:U.docs),{source:e({originalSource:`{
  args: {
    wrapperClassName: 'custom-wrapper'
  }
}`},(X=(V=S.parameters)==null?void 0:V.docs)==null?void 0:X.source)})});var Y,Z,$;x.parameters=s(e({},x.parameters),{docs:s(e({},(Y=x.parameters)==null?void 0:Y.docs),{source:e({originalSource:`{
  args: {
    fullscreen: true
  }
}`},($=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:$.source)})});var ee,re,se;h.parameters=s(e({},h.parameters),{docs:s(e({},(ee=h.parameters)==null?void 0:ee.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title="A small Spin is used for loading text, default sized Spin for loading a card-level block, and large Spin used for loading a page.">
        <Flex align="center" gap="middle">
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
        </Flex>
      </ExampleStory>;
  }
}`},(se=(re=h.parameters)==null?void 0:re.docs)==null?void 0:se.source)})});var ae,ne,te;f.parameters=s(e({},f.parameters),{docs:s(e({},(ae=f.parameters)==null?void 0:ae.docs),{source:e({originalSource:`{
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
}`},(te=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:te.source)})});var ie,oe,le;y.parameters=s(e({},y.parameters),{docs:s(e({},(ie=y.parameters)==null?void 0:ie.docs),{source:e({originalSource:`{
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
}`},(le=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:le.source)})});var de,pe,ce;j.parameters=s(e({},j.parameters),{docs:s(e({},(de=j.parameters)==null?void 0:de.docs),{source:e({originalSource:`{
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
}`},(ce=(pe=j.parameters)==null?void 0:pe.docs)==null?void 0:ce.source)})});var me,ge,ue;E.parameters=s(e({},E.parameters),{docs:s(e({},(me=E.parameters)==null?void 0:me.docs),{source:e({originalSource:`{
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
}`},(ue=(ge=E.parameters)==null?void 0:ge.docs)==null?void 0:ue.source)})});const Je=["Primary","SmallSize","LargeSize","WithCustomDelay","WithCustomIndicator","SpinningDisabled","WithCustomTip","WithWrapperClassName","FullscreenMode","ExampleSize","ExampleEmbedded","ExampleCustomizedDescription","ExampleDelay","ExampleFullscreen"];export{y as ExampleCustomizedDescription,j as ExampleDelay,f as ExampleEmbedded,E as ExampleFullscreen,h as ExampleSize,x as FullscreenMode,p as LargeSize,l as Primary,d as SmallSize,g as SpinningDisabled,c as WithCustomDelay,m as WithCustomIndicator,u as WithCustomTip,S as WithWrapperClassName,Je as __namedExportsOrder,He as default};
