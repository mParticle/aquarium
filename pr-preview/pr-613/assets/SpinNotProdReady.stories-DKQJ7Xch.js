var he=Object.defineProperty,fe=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable;var C=(n,r,t)=>r in n?he(n,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[r]=t,e=(n,r)=>{for(var t in r||(r={}))je.call(r,t)&&C(n,t,r[t]);if(b)for(var t of b(r))Ee.call(r,t)&&C(n,t,r[t]);return n},a=(n,r)=>fe(n,ye(r));import{j as s}from"./jsx-runtime-BcCOBRXo.js";import{Z as i,I as Le,F as L,J as z,ab as Se,z as xe,g as ze}from"./NavigationItemsService-DmcOhL52.js";import{E as o}from"./ExampleStory-Czv9HDiX.js";import"./_baseClone-DBzvlRjn.js";import{r as v}from"./index-CNk6hRaE.js";import"./LightTheme-BtoaoHMG.js";import"./row-GPgCuxPF.js";import"./useToken-BSaSgSTZ.js";import"./extends-CF3RwP-h.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";const Me={title:"Components/Not Prod Ready/Feedback/Spin",component:i,args:{delay:void 0,indicator:void 0,size:"default",spinning:!0,tip:void 0,wrapperClassName:void 0,fullscreen:!1}},l={},d={args:{size:"small"}},c={args:{size:"large"}},p={args:{delay:500}},m={args:{indicator:s.jsx(Le,{name:"mpLogo"})}},g={args:{spinning:!1}},u={args:{tip:"Loading...",children:s.jsx(s.Fragment,{})}},S={args:{wrapperClassName:"custom-wrapper"}},x={args:{fullscreen:!0}},h={render:()=>s.jsx(o,{title:"A small Spin is used for loading text, default sized Spin for loading a card-level block, and large Spin used for loading a page.",children:s.jsxs(L,{align:"center",gap:"middle",children:[s.jsx(i,{size:"small"}),s.jsx(i,{}),s.jsx(i,{size:"large"})]})})},f={render:()=>{const[n,r]=v.useState(!1);return s.jsxs(o,{title:"Embedding content into Spin will set it into loading state.",children:[s.jsx(i,{spinning:n,children:s.jsx(z,{type:"info",message:"Alert message title",description:"Further details about the context of this alert."})}),s.jsxs("div",{style:{marginTop:Se},children:["Loading state：",s.jsx(xe,{checked:n,onChange:r})]})]})}},y={render:()=>s.jsx(o,{title:"Adds subtext",children:s.jsxs(L,{gap:50,vertical:!0,children:[s.jsxs(L,{gap:100,children:[s.jsx(i,{tip:"Loading",size:"small",children:s.jsx("div",{className:"content"})}),s.jsx(i,{tip:"Loading",children:s.jsx("div",{className:"content"})}),s.jsx(i,{tip:"Loading",size:"large",children:s.jsx("div",{className:"content"})})]}),s.jsx(i,{tip:"Loading...",children:s.jsx(z,{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"})})]})})},j={render:()=>{const[n,r]=v.useState(!1);return s.jsxs(o,{title:"Specifies a delay for loading state. If spinning ends during delay, loading status won't appear.",children:[s.jsx(i,{spinning:n,delay:500,children:s.jsx(z,{type:"info",message:"Alert message title",description:"Further details about the context of this alert."})}),s.jsxs("div",{style:{marginTop:Se},children:["Loading state：",s.jsx(xe,{checked:n,onChange:r})]})]})}},E={render:()=>{const[n,r]=v.useState(!1),t=()=>{r(!0),setTimeout(()=>{r(!1)},3e3)};return s.jsxs(o,{title:"The fullscreen mode is perfect for creating page loaders. It adds a dimmed overlay with a centered spinner.",children:[s.jsx(ze,{onClick:t,children:"Show fullscreen for 3s"}),s.jsx(i,{spinning:n,fullscreen:!0})]})}};var F,w,A;l.parameters=a(e({},l.parameters),{docs:a(e({},(F=l.parameters)==null?void 0:F.docs),{source:e({originalSource:"{}"},(A=(w=l.parameters)==null?void 0:w.docs)==null?void 0:A.source)})});var N,T,W;d.parameters=a(e({},d.parameters),{docs:a(e({},(N=d.parameters)==null?void 0:N.docs),{source:e({originalSource:`{
  args: {
    size: 'small'
  }
}`},(W=(T=d.parameters)==null?void 0:T.docs)==null?void 0:W.source)})});var k,I,D;c.parameters=a(e({},c.parameters),{docs:a(e({},(k=c.parameters)==null?void 0:k.docs),{source:e({originalSource:`{
  args: {
    size: 'large'
  }
}`},(D=(I=c.parameters)==null?void 0:I.docs)==null?void 0:D.source)})});var M,B,P;p.parameters=a(e({},p.parameters),{docs:a(e({},(M=p.parameters)==null?void 0:M.docs),{source:e({originalSource:`{
  args: {
    delay: 500
  }
}`},(P=(B=p.parameters)==null?void 0:B.docs)==null?void 0:P.source)})});var R,_,J;m.parameters=a(e({},m.parameters),{docs:a(e({},(R=m.parameters)==null?void 0:R.docs),{source:e({originalSource:`{
  args: {
    indicator: <Icon name="mpLogo" />
  }
}`},(J=(_=m.parameters)==null?void 0:_.docs)==null?void 0:J.source)})});var O,Z,q;g.parameters=a(e({},g.parameters),{docs:a(e({},(O=g.parameters)==null?void 0:O.docs),{source:e({originalSource:`{
  args: {
    spinning: false
  }
}`},(q=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:q.source)})});var G,H,K;u.parameters=a(e({},u.parameters),{docs:a(e({},(G=u.parameters)==null?void 0:G.docs),{source:e({originalSource:`{
  args: {
    tip: 'Loading...',
    children: <></>
  }
}`},(K=(H=u.parameters)==null?void 0:H.docs)==null?void 0:K.source)})});var Q,U,V;S.parameters=a(e({},S.parameters),{docs:a(e({},(Q=S.parameters)==null?void 0:Q.docs),{source:e({originalSource:`{
  args: {
    wrapperClassName: 'custom-wrapper'
  }
}`},(V=(U=S.parameters)==null?void 0:U.docs)==null?void 0:V.source)})});var X,Y,$;x.parameters=a(e({},x.parameters),{docs:a(e({},(X=x.parameters)==null?void 0:X.docs),{source:e({originalSource:`{
  args: {
    fullscreen: true
  }
}`},($=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:$.source)})});var ee,se,ae;h.parameters=a(e({},h.parameters),{docs:a(e({},(ee=h.parameters)==null?void 0:ee.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title="A small Spin is used for loading text, default sized Spin for loading a card-level block, and large Spin used for loading a page.">
        <Flex align="center" gap="middle">
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
        </Flex>
      </ExampleStory>;
  }
}`},(ae=(se=h.parameters)==null?void 0:se.docs)==null?void 0:ae.source)})});var re,ne,te;f.parameters=a(e({},f.parameters),{docs:a(e({},(re=f.parameters)==null?void 0:re.docs),{source:e({originalSource:`{
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
}`},(te=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:te.source)})});var ie,oe,le;y.parameters=a(e({},y.parameters),{docs:a(e({},(ie=y.parameters)==null?void 0:ie.docs),{source:e({originalSource:`{
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
}`},(le=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:le.source)})});var de,ce,pe;j.parameters=a(e({},j.parameters),{docs:a(e({},(de=j.parameters)==null?void 0:de.docs),{source:e({originalSource:`{
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
}`},(pe=(ce=j.parameters)==null?void 0:ce.docs)==null?void 0:pe.source)})});var me,ge,ue;E.parameters=a(e({},E.parameters),{docs:a(e({},(me=E.parameters)==null?void 0:me.docs),{source:e({originalSource:`{
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
}`},(ue=(ge=E.parameters)==null?void 0:ge.docs)==null?void 0:ue.source)})});const Be=["Primary","SmallSize","LargeSize","WithCustomDelay","WithCustomIndicator","SpinningDisabled","WithCustomTip","WithWrapperClassName","FullscreenMode","ExampleSize","ExampleEmbedded","ExampleCustomizedDescription","ExampleDelay","ExampleFullscreen"];export{y as ExampleCustomizedDescription,j as ExampleDelay,f as ExampleEmbedded,E as ExampleFullscreen,h as ExampleSize,x as FullscreenMode,c as LargeSize,l as Primary,d as SmallSize,g as SpinningDisabled,p as WithCustomDelay,m as WithCustomIndicator,u as WithCustomTip,S as WithWrapperClassName,Be as __namedExportsOrder,Me as default};
