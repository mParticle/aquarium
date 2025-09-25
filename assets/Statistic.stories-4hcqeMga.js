var we=Object.defineProperty,Ee=Object.defineProperties;var Te=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var Re=Object.prototype.hasOwnProperty,Ue=Object.prototype.propertyIsEnumerable;var b=(t,a,i)=>a in t?we(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i,e=(t,a)=>{for(var i in a||(a={}))Re.call(a,i)&&b(t,i,a[i]);if(D)for(var i of D(a))Ue.call(a,i)&&b(t,i,a[i]);return t},o=(t,a)=>Ee(t,Te(a));import{j as r}from"./jsx-runtime-CVnACwZl.js";import{al as s,c as E,I as c,am as De,C as A}from"./NavigationItemsService-Dt1o6dqe.js";import{f as je,g as be,h as Ae,i as Pe}from"./ErrorStateIcon-DUz035cB.js";import"./_baseClone-CXAe4HsA.js";import{E as T}from"./ExampleStory-3w--mppx.js";import{R,C as n}from"./row-Bsm_WxsR.js";import"./index-3OP4wdng.js";import"./LightTheme-BtoaoHMG.js";import"./Context-R5ee3nrF.js";import"./useToken-C_i1q6Gz.js";import"./presets-BrZHayqo.js";import"./extends-CF3RwP-h.js";import"./index-B-gr4m3q.js";import"./isNativeReflectConstruct-CWIsGhkf.js";const Qe={title:"Components/Not Prod Ready/Statistic",component:s,args:{decimalSeparator:".",formatter:t=>`${t}`,groupSeparator:",",loading:!1,precision:0,prefix:void 0,suffix:void 0,title:"Statistic",value:0,valueStyle:void 0},argTypes:{formatter:{control:"select",options:["default","code","error"],mapping:{default:t=>`${t}`,code:t=>r.jsx(E.Text,{code:!0,children:t}),error:t=>r.jsx(E.Text,{type:"danger",children:t})}},prefix:{control:"select",options:["check","alicorn","wrench"],mapping:{check:r.jsx(c,{name:"selected"}),alicorn:r.jsx(c,{name:"alicorn"}),wrench:r.jsx(c,{name:"setup"})}},suffix:{control:"text"},valueStyle:{control:"object"}}},l={},d={args:{value:1128.93,decimalSeparator:","}},p={args:{value:112893,formatter:t=>r.jsx(E.Text,{code:!0,copyable:!0,children:t})}},u={args:{value:112893,groupSeparator:"."}},m={args:{loading:!0}},x={args:{precision:3}},g={args:{prefix:r.jsx(c,{name:"selected"})}},C={args:{suffix:"元"}},f={args:{title:"Custom title"}},S={args:{value:112893}},h={args:{value:112893,valueStyle:{color:je}}},y={render:()=>r.jsx(T,{title:"Basic Usage",description:"Simplest Usage",children:r.jsxs(R,{gutter:16,children:[r.jsx(n,{span:12,children:r.jsx(s,{title:"Active Users",value:112893})}),r.jsxs(n,{span:12,children:[r.jsx(s,{title:"Account Balance (CNY)",value:112893,precision:2}),r.jsx(De,{style:{marginTop:16},type:"primary",children:"Recharge"})]}),r.jsx(n,{span:12,children:r.jsx(s,{title:"Active Users",value:112893,loading:!0})})]})})},v={render:()=>r.jsx(T,{title:"Add unit through prefix and suffix.",description:r.jsxs(E.Paragraph,{children:["Add unit through ",r.jsx("code",{children:"prefix"})," and ",r.jsx("code",{children:"suffix"})]}),children:r.jsxs(R,{gutter:16,children:[r.jsx(n,{children:r.jsx(s,{title:"Feedback",value:1128,prefix:r.jsx(c,{name:"alicorn"})})}),r.jsx(n,{children:r.jsx(s,{title:"Unmerged",value:93,suffix:"/ 100"})})]})})},j={render:()=>r.jsx(T,{title:"Card Usage",description:"Display statistic data in Card.",children:r.jsxs(R,{gutter:16,style:{backgroundColor:be,width:"500px",padding:Ae},children:[r.jsx(n,{span:12,children:r.jsx(A,{bordered:!1,children:r.jsx(s,{title:"Active",value:11.28,precision:2,valueStyle:{color:je},prefix:r.jsx(c,{name:"add"}),suffix:"%"})})}),r.jsx(n,{span:12,children:r.jsx(A,{bordered:!1,children:r.jsx(s,{title:"Idle",value:9.3,precision:2,valueStyle:{color:Pe},prefix:r.jsx(c,{name:"setup"}),suffix:"%"})})})]})})},Be=1e3*60*60*24*2,Ie=1e3*30,Fe=Date.now()+Be,U=Fe+Ie,ke=()=>{console.log("finished!")},He=t=>{typeof t=="number"&&4.95*1e3<t&&t<5*1e3&&console.log("changed!")},w={render:()=>r.jsx(T,{title:"Countdown",description:"Countdown component",children:r.jsxs(R,{gutter:16,style:{width:"500px"},children:[r.jsx(n,{span:12,children:r.jsx(s.Countdown,{title:"Countdown",value:U,onFinish:ke})}),r.jsx(n,{span:12,children:r.jsx(s.Countdown,{title:"Million Seconds",value:U,format:"HH:mm:ss:SSS"})}),r.jsx(n,{span:24,style:{marginTop:32},children:r.jsx(s.Countdown,{title:"Day Level",value:U,format:"D 天 H 时 m 分 s 秒"})}),r.jsx(n,{span:12,children:r.jsx(s.Countdown,{title:"Countdown",value:Date.now()+10*1e3,onChange:He})})]})})};var P,B,I;l.parameters=o(e({},l.parameters),{docs:o(e({},(P=l.parameters)==null?void 0:P.docs),{source:e({originalSource:"{}"},(I=(B=l.parameters)==null?void 0:B.docs)==null?void 0:I.source)})});var F,k,H;d.parameters=o(e({},d.parameters),{docs:o(e({},(F=d.parameters)==null?void 0:F.docs),{source:e({originalSource:`{
  args: {
    value: 1128.93,
    decimalSeparator: ','
  }
}`},(H=(k=d.parameters)==null?void 0:k.docs)==null?void 0:H.source)})});var W,L,N;p.parameters=o(e({},p.parameters),{docs:o(e({},(W=p.parameters)==null?void 0:W.docs),{source:e({originalSource:`{
  args: {
    value: 112893,
    formatter: (value: valueType) => <Typography.Text code copyable>
        {value}
      </Typography.Text>
  }
}`},(N=(L=p.parameters)==null?void 0:L.docs)==null?void 0:N.source)})});var V,G,M;u.parameters=o(e({},u.parameters),{docs:o(e({},(V=u.parameters)==null?void 0:V.docs),{source:e({originalSource:`{
  args: {
    value: 112893,
    groupSeparator: '.'
  }
}`},(M=(G=u.parameters)==null?void 0:G.docs)==null?void 0:M.source)})});var X,Y,_;m.parameters=o(e({},m.parameters),{docs:o(e({},(X=m.parameters)==null?void 0:X.docs),{source:e({originalSource:`{
  args: {
    loading: true
  }
}`},(_=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:_.source)})});var $,O,q;x.parameters=o(e({},x.parameters),{docs:o(e({},($=x.parameters)==null?void 0:$.docs),{source:e({originalSource:`{
  args: {
    // value: 1128.93402,
    precision: 3
  }
}`},(q=(O=x.parameters)==null?void 0:O.docs)==null?void 0:q.source)})});var z,J,K;g.parameters=o(e({},g.parameters),{docs:o(e({},(z=g.parameters)==null?void 0:z.docs),{source:e({originalSource:`{
  args: {
    prefix: <Icon name="selected" />
  }
}`},(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source)})});var Q,Z,ee;C.parameters=o(e({},C.parameters),{docs:o(e({},(Q=C.parameters)==null?void 0:Q.docs),{source:e({originalSource:`{
  args: {
    suffix: '元'
  }
}`},(ee=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:ee.source)})});var re,oe,te;f.parameters=o(e({},f.parameters),{docs:o(e({},(re=f.parameters)==null?void 0:re.docs),{source:e({originalSource:`{
  args: {
    title: 'Custom title'
  }
}`},(te=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:te.source)})});var ae,se,ne;S.parameters=o(e({},S.parameters),{docs:o(e({},(ae=S.parameters)==null?void 0:ae.docs),{source:e({originalSource:`{
  args: {
    value: 112893
  }
}`},(ne=(se=S.parameters)==null?void 0:se.docs)==null?void 0:ne.source)})});var ie,ce,le;h.parameters=o(e({},h.parameters),{docs:o(e({},(ie=h.parameters)==null?void 0:ie.docs),{source:e({originalSource:`{
  args: {
    value: 112893,
    valueStyle: {
      color: ColorSuccess
    }
  }
}`},(le=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:le.source)})});var de,pe,ue;y.parameters=o(e({},y.parameters),{docs:o(e({},(de=y.parameters)==null?void 0:de.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title="Basic Usage" description="Simplest Usage">
        <Row gutter={16}>
          <Col span={12}>
            <Statistic title="Active Users" value={112893} />
          </Col>
          <Col span={12}>
            <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
            <Button style={{
            marginTop: 16
          }} type="primary">
              Recharge
            </Button>
          </Col>
          <Col span={12}>
            <Statistic title="Active Users" value={112893} loading />
          </Col>
        </Row>
      </ExampleStory>;
  }
}`},(ue=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:ue.source)})});var me,xe,ge;v.parameters=o(e({},v.parameters),{docs:o(e({},(me=v.parameters)==null?void 0:me.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title="Add unit through prefix and suffix." description={<Typography.Paragraph>
            Add unit through <code>prefix</code> and <code>suffix</code>
          </Typography.Paragraph>}>
        <Row gutter={16}>
          <Col>
            <Statistic title="Feedback" value={1128} prefix={<Icon name="alicorn" />} />
          </Col>
          <Col>
            <Statistic title="Unmerged" value={93} suffix="/ 100" />
          </Col>
        </Row>
      </ExampleStory>;
  }
}`},(ge=(xe=v.parameters)==null?void 0:xe.docs)==null?void 0:ge.source)})});var Ce,fe,Se;j.parameters=o(e({},j.parameters),{docs:o(e({},(Ce=j.parameters)==null?void 0:Ce.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title="Card Usage" description="Display statistic data in Card.">
        <Row gutter={16} style={{
        backgroundColor: ColorInfoBg,
        width: '500px',
        padding: PaddingXl
      }}>
          <Col span={12}>
            <Card bordered={false}>
              <Statistic title="Active" value={11.28} precision={2} valueStyle={{
              color: ColorSuccess
            }} prefix={<Icon name="add" />} suffix="%" />
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false}>
              <Statistic title="Idle" value={9.3} precision={2} valueStyle={{
              color: ColorError
            }} prefix={<Icon name="setup" />} suffix="%" />
            </Card>
          </Col>
        </Row>
      </ExampleStory>;
  }
}`},(Se=(fe=j.parameters)==null?void 0:fe.docs)==null?void 0:Se.source)})});var he,ye,ve;w.parameters=o(e({},w.parameters),{docs:o(e({},(he=w.parameters)==null?void 0:he.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title="Countdown" description="Countdown component">
        <Row gutter={16} style={{
        width: '500px'
      }}>
          <Col span={12}>
            <Statistic.Countdown title="Countdown" value={deadline} onFinish={onFinish} />
          </Col>
          <Col span={12}>
            <Statistic.Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
          </Col>
          <Col span={24} style={{
          marginTop: 32
        }}>
            <Statistic.Countdown title="Day Level" value={deadline} format="D 天 H 时 m 分 s 秒" />
          </Col>
          <Col span={12}>
            <Statistic.Countdown title="Countdown" value={Date.now() + 10 * 1000} onChange={onChange} />
          </Col>
        </Row>
      </ExampleStory>;
  }
}`},(ve=(ye=w.parameters)==null?void 0:ye.docs)==null?void 0:ve.source)})});const Ze=["Primary","CustomDecimalSeparator","CustomFormatter","CustomGroupSeparator","CustomLoading","CustomPrecision","CustomPrefix","CustomSuffix","CustomTitle","CustomValue","CustomValueStyle","ExampleBasic","ExampleWithUnit","ExampleWithCard","ExampleWithCountdown"];export{d as CustomDecimalSeparator,p as CustomFormatter,u as CustomGroupSeparator,m as CustomLoading,x as CustomPrecision,g as CustomPrefix,C as CustomSuffix,f as CustomTitle,S as CustomValue,h as CustomValueStyle,y as ExampleBasic,j as ExampleWithCard,w as ExampleWithCountdown,v as ExampleWithUnit,l as Primary,Ze as __namedExportsOrder,Qe as default};
