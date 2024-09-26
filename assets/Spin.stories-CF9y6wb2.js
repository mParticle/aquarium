var he=Object.defineProperty,fe=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable;var v=(a,r,t)=>r in a?he(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t,e=(a,r)=>{for(var t in r||(r={}))je.call(r,t)&&v(a,t,r[t]);if(b)for(var t of b(r))Ee.call(r,t)&&v(a,t,r[t]);return a},n=(a,r)=>fe(a,ye(r));import{j as s}from"./jsx-runtime-CS-_a2eV.js";import{aa as i,I as Le,F as L,a0 as F,ab as Se,c as xe,b as Fe}from"./GlobalNavigation-Be6idjSk.js";import{E as o}from"./ExampleStory-CVE-sUMV.js";import"./ConfigProvider-aHzMMMgW.js";import"./_baseClone-BwI25-yt.js";import{r as z}from"./index-Ca44TZ0D.js";import"./index-BxrKW6hI.js";import"./useToken-Dnjd_Rha.js";import"./extends-CCbyfPlC.js";import"./Serializer-DsJDcYJc.js";import"./index-DFiuTWKW.js";import"./isNativeReflectConstruct-DQQXTUsj.js";import"./row-BOpWxek0.js";import"./dayjs.min-kn1EBQqj.js";import"./customParseFormat-CECOPgIS.js";import"./LightTheme-BZ07JyGW.js";import"./_getPrototype-fDUIJvdn.js";const qe={title:"Components/Feedback/Spin",component:i,args:{delay:void 0,indicator:void 0,size:"default",spinning:!0,tip:void 0,wrapperClassName:void 0,fullscreen:!1}},l={},d={args:{size:"small"}},p={args:{size:"large"}},c={args:{delay:500}},m={args:{indicator:s.jsx(Le,{name:"mpLogo"})}},g={args:{spinning:!1}},u={args:{tip:"Loading...",children:s.jsx(s.Fragment,{})}},S={args:{wrapperClassName:"custom-wrapper"}},x={args:{fullscreen:!0}},h={render:()=>s.jsx(o,{title:"A small Spin is used for loading text, default sized Spin for loading a card-level block, and large Spin used for loading a page.",children:s.jsxs(L,{align:"center",gap:"middle",children:[s.jsx(i,{size:"small"}),s.jsx(i,{}),s.jsx(i,{size:"large"})]})})},f={render:()=>{const[a,r]=z.useState(!1);return s.jsxs(o,{title:"Embedding content into Spin will set it into loading state.",children:[s.jsx(i,{spinning:a,children:s.jsx(F,{type:"info",message:"Alert message title",description:"Further details about the context of this alert."})}),s.jsxs("div",{style:{marginTop:Se},children:["Loading state：",s.jsx(xe,{checked:a,onChange:r})]})]})}},y={render:()=>s.jsx(o,{title:"Adds subtext",children:s.jsxs(L,{gap:50,vertical:!0,children:[s.jsxs(L,{gap:100,children:[s.jsx(i,{tip:"Loading",size:"small",children:s.jsx("div",{className:"content"})}),s.jsx(i,{tip:"Loading",children:s.jsx("div",{className:"content"})}),s.jsx(i,{tip:"Loading",size:"large",children:s.jsx("div",{className:"content"})})]}),s.jsx(i,{tip:"Loading...",children:s.jsx(F,{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"})})]})})},j={render:()=>{const[a,r]=z.useState(!1);return s.jsxs(o,{title:"Specifies a delay for loading state. If spinning ends during delay, loading status won't appear.",children:[s.jsx(i,{spinning:a,delay:500,children:s.jsx(F,{type:"info",message:"Alert message title",description:"Further details about the context of this alert."})}),s.jsxs("div",{style:{marginTop:Se},children:["Loading state：",s.jsx(xe,{checked:a,onChange:r})]})]})}},E={render:()=>{const[a,r]=z.useState(!1),t=()=>{r(!0),setTimeout(()=>{r(!1)},3e3)};return s.jsxs(o,{title:"The fullscreen mode is perfect for creating page loaders. It adds a dimmed overlay with a centered spinner.",children:[s.jsx(Fe,{onClick:t,children:"Show fullscreen for 3s"}),s.jsx(i,{spinning:a,fullscreen:!0})]})}};var C,w,A;l.parameters=n(e({},l.parameters),{docs:n(e({},(C=l.parameters)==null?void 0:C.docs),{source:e({originalSource:"{}"},(A=(w=l.parameters)==null?void 0:w.docs)==null?void 0:A.source)})});var N,T,W;d.parameters=n(e({},d.parameters),{docs:n(e({},(N=d.parameters)==null?void 0:N.docs),{source:e({originalSource:`{
  args: {
    size: 'small'
  }
}`},(W=(T=d.parameters)==null?void 0:T.docs)==null?void 0:W.source)})});var k,I,D;p.parameters=n(e({},p.parameters),{docs:n(e({},(k=p.parameters)==null?void 0:k.docs),{source:e({originalSource:`{
  args: {
    size: 'large'
  }
}`},(D=(I=p.parameters)==null?void 0:I.docs)==null?void 0:D.source)})});var M,B,P;c.parameters=n(e({},c.parameters),{docs:n(e({},(M=c.parameters)==null?void 0:M.docs),{source:e({originalSource:`{
  args: {
    delay: 500
  }
}`},(P=(B=c.parameters)==null?void 0:B.docs)==null?void 0:P.source)})});var _,O,R;m.parameters=n(e({},m.parameters),{docs:n(e({},(_=m.parameters)==null?void 0:_.docs),{source:e({originalSource:`{
  args: {
    indicator: <Icon name="mpLogo" />
  }
}`},(R=(O=m.parameters)==null?void 0:O.docs)==null?void 0:R.source)})});var q,G,H;g.parameters=n(e({},g.parameters),{docs:n(e({},(q=g.parameters)==null?void 0:q.docs),{source:e({originalSource:`{
  args: {
    spinning: false
  }
}`},(H=(G=g.parameters)==null?void 0:G.docs)==null?void 0:H.source)})});var J,K,Q;u.parameters=n(e({},u.parameters),{docs:n(e({},(J=u.parameters)==null?void 0:J.docs),{source:e({originalSource:`{
  args: {
    tip: 'Loading...',
    children: <></>
  }
}`},(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source)})});var U,V,X;S.parameters=n(e({},S.parameters),{docs:n(e({},(U=S.parameters)==null?void 0:U.docs),{source:e({originalSource:`{
  args: {
    wrapperClassName: 'custom-wrapper'
  }
}`},(X=(V=S.parameters)==null?void 0:V.docs)==null?void 0:X.source)})});var Y,Z,$;x.parameters=n(e({},x.parameters),{docs:n(e({},(Y=x.parameters)==null?void 0:Y.docs),{source:e({originalSource:`{
  args: {
    fullscreen: true
  }
}`},($=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:$.source)})});var ee,se,ne;h.parameters=n(e({},h.parameters),{docs:n(e({},(ee=h.parameters)==null?void 0:ee.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title="A small Spin is used for loading text, default sized Spin for loading a card-level block, and large Spin used for loading a page.">
        <Flex align="center" gap="middle">
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
        </Flex>
      </ExampleStory>;
  }
}`},(ne=(se=h.parameters)==null?void 0:se.docs)==null?void 0:ne.source)})});var re,ae,te;f.parameters=n(e({},f.parameters),{docs:n(e({},(re=f.parameters)==null?void 0:re.docs),{source:e({originalSource:`{
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
}`},(te=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:te.source)})});var ie,oe,le;y.parameters=n(e({},y.parameters),{docs:n(e({},(ie=y.parameters)==null?void 0:ie.docs),{source:e({originalSource:`{
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
}`},(le=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:le.source)})});var de,pe,ce;j.parameters=n(e({},j.parameters),{docs:n(e({},(de=j.parameters)==null?void 0:de.docs),{source:e({originalSource:`{
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
}`},(ce=(pe=j.parameters)==null?void 0:pe.docs)==null?void 0:ce.source)})});var me,ge,ue;E.parameters=n(e({},E.parameters),{docs:n(e({},(me=E.parameters)==null?void 0:me.docs),{source:e({originalSource:`{
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
}`},(ue=(ge=E.parameters)==null?void 0:ge.docs)==null?void 0:ue.source)})});const Ge=["Primary","SmallSize","LargeSize","WithCustomDelay","WithCustomIndicator","SpinningDisabled","WithCustomTip","WithWrapperClassName","FullscreenMode","ExampleSize","ExampleEmbedded","ExampleCustomizedDescription","ExampleDelay","ExampleFullscreen"];export{y as ExampleCustomizedDescription,j as ExampleDelay,f as ExampleEmbedded,E as ExampleFullscreen,h as ExampleSize,x as FullscreenMode,p as LargeSize,l as Primary,d as SmallSize,g as SpinningDisabled,c as WithCustomDelay,m as WithCustomIndicator,u as WithCustomTip,S as WithWrapperClassName,Ge as __namedExportsOrder,qe as default};