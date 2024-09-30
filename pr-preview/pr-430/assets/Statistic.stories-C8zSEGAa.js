var we=Object.defineProperty,Ee=Object.defineProperties;var Te=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var De=Object.prototype.hasOwnProperty,Ue=Object.prototype.propertyIsEnumerable;var b=(o,a,i)=>a in o?we(o,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[a]=i,e=(o,a)=>{for(var i in a||(a={}))De.call(a,i)&&b(o,i,a[i]);if(R)for(var i of R(a))Ue.call(a,i)&&b(o,i,a[i]);return o},t=(o,a)=>Ee(o,Te(a));import{j as r}from"./jsx-runtime-BcCOBRXo.js";import{n as s,o as E,I as c,p as je,q as Re,r as be,s as Ae,C as A,t as Be}from"./GlobalNavigation-CjryKqRY.js";import"./ConfigProvider-CEh3sHE6.js";import"./_baseClone-BjCwUuX-.js";import{E as T}from"./ExampleStory-DhsBhCkR.js";import{R as D,C as n}from"./row-B98CqS5b.js";import"./index-CNk6hRaE.js";import"./index-CqBomLS8.js";import"./useToken-C-GAQQ-5.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CYew8PZR.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";import"./LightTheme-DxveuNKr.js";import"./_getPrototype-CAOE_2rY.js";const rr={title:"Components/Data Display/Statistic",component:s,args:{decimalSeparator:".",formatter:o=>`${o}`,groupSeparator:",",loading:!1,precision:0,prefix:void 0,suffix:void 0,title:"Statistic",value:0,valueStyle:void 0},argTypes:{formatter:{control:"select",options:["default","code","error"],mapping:{default:o=>`${o}`,code:o=>r.jsx(E.Text,{code:!0,children:o}),error:o=>r.jsx(E.Text,{type:"danger",children:o})}},prefix:{control:"select",options:["check","alicorn","wrench"],mapping:{check:r.jsx(c,{name:"selected"}),alicorn:r.jsx(c,{name:"alicorn"}),wrench:r.jsx(c,{name:"setup"})}},suffix:{control:"text"},valueStyle:{control:"object"}}},l={},p={args:{value:1128.93,decimalSeparator:","}},d={args:{value:112893,formatter:o=>r.jsx(E.Text,{code:!0,copyable:!0,children:o})}},u={args:{value:112893,groupSeparator:"."}},m={args:{loading:!0}},x={args:{precision:3}},g={args:{prefix:r.jsx(c,{name:"selected"})}},C={args:{suffix:"元"}},S={args:{title:"Custom title"}},f={args:{value:112893}},h={args:{value:112893,valueStyle:{color:je}}},y={render:()=>r.jsx(T,{title:"Basic Usage",description:"Simplest Usage",children:r.jsxs(D,{gutter:16,children:[r.jsx(n,{span:12,children:r.jsx(s,{title:"Active Users",value:112893})}),r.jsxs(n,{span:12,children:[r.jsx(s,{title:"Account Balance (CNY)",value:112893,precision:2}),r.jsx(Re,{style:{marginTop:16},type:"primary",children:"Recharge"})]}),r.jsx(n,{span:12,children:r.jsx(s,{title:"Active Users",value:112893,loading:!0})})]})})},v={render:()=>r.jsx(T,{title:"Add unit through prefix and suffix.",description:r.jsxs(E.Paragraph,{children:["Add unit through ",r.jsx("code",{children:"prefix"})," and ",r.jsx("code",{children:"suffix"})]}),children:r.jsxs(D,{gutter:16,children:[r.jsx(n,{children:r.jsx(s,{title:"Feedback",value:1128,prefix:r.jsx(c,{name:"alicorn"})})}),r.jsx(n,{children:r.jsx(s,{title:"Unmerged",value:93,suffix:"/ 100"})})]})})},j={render:()=>r.jsx(T,{title:"Card Usage",description:"Display statistic data in Card.",children:r.jsxs(D,{gutter:16,style:{backgroundColor:be,width:"500px",padding:Ae},children:[r.jsx(n,{span:12,children:r.jsx(A,{bordered:!1,children:r.jsx(s,{title:"Active",value:11.28,precision:2,valueStyle:{color:je},prefix:r.jsx(c,{name:"add"}),suffix:"%"})})}),r.jsx(n,{span:12,children:r.jsx(A,{bordered:!1,children:r.jsx(s,{title:"Idle",value:9.3,precision:2,valueStyle:{color:Be},prefix:r.jsx(c,{name:"setup"}),suffix:"%"})})})]})})},Pe=1e3*60*60*24*2,Ie=1e3*30,Fe=Date.now()+Pe,U=Fe+Ie,ke=()=>{console.log("finished!")},He=o=>{typeof o=="number"&&4.95*1e3<o&&o<5*1e3&&console.log("changed!")},w={render:()=>r.jsx(T,{title:"Countdown",description:"Countdown component",children:r.jsxs(D,{gutter:16,style:{width:"500px"},children:[r.jsx(n,{span:12,children:r.jsx(s.Countdown,{title:"Countdown",value:U,onFinish:ke})}),r.jsx(n,{span:12,children:r.jsx(s.Countdown,{title:"Million Seconds",value:U,format:"HH:mm:ss:SSS"})}),r.jsx(n,{span:24,style:{marginTop:32},children:r.jsx(s.Countdown,{title:"Day Level",value:U,format:"D 天 H 时 m 分 s 秒"})}),r.jsx(n,{span:12,children:r.jsx(s.Countdown,{title:"Countdown",value:Date.now()+10*1e3,onChange:He})})]})})};var B,P,I;l.parameters=t(e({},l.parameters),{docs:t(e({},(B=l.parameters)==null?void 0:B.docs),{source:e({originalSource:"{}"},(I=(P=l.parameters)==null?void 0:P.docs)==null?void 0:I.source)})});var F,k,H;p.parameters=t(e({},p.parameters),{docs:t(e({},(F=p.parameters)==null?void 0:F.docs),{source:e({originalSource:`{
  args: {
    value: 1128.93,
    decimalSeparator: ','
  }
}`},(H=(k=p.parameters)==null?void 0:k.docs)==null?void 0:H.source)})});var W,L,V;d.parameters=t(e({},d.parameters),{docs:t(e({},(W=d.parameters)==null?void 0:W.docs),{source:e({originalSource:`{
  args: {
    value: 112893,
    formatter: (value: valueType) => <Typography.Text code copyable>
        {value}
      </Typography.Text>
  }
}`},(V=(L=d.parameters)==null?void 0:L.docs)==null?void 0:V.source)})});var N,G,M;u.parameters=t(e({},u.parameters),{docs:t(e({},(N=u.parameters)==null?void 0:N.docs),{source:e({originalSource:`{
  args: {
    value: 112893,
    groupSeparator: '.'
  }
}`},(M=(G=u.parameters)==null?void 0:G.docs)==null?void 0:M.source)})});var X,Y,_;m.parameters=t(e({},m.parameters),{docs:t(e({},(X=m.parameters)==null?void 0:X.docs),{source:e({originalSource:`{
  args: {
    loading: true
  }
}`},(_=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:_.source)})});var $,q,O;x.parameters=t(e({},x.parameters),{docs:t(e({},($=x.parameters)==null?void 0:$.docs),{source:e({originalSource:`{
  args: {
    // value: 1128.93402,
    precision: 3
  }
}`},(O=(q=x.parameters)==null?void 0:q.docs)==null?void 0:O.source)})});var z,J,K;g.parameters=t(e({},g.parameters),{docs:t(e({},(z=g.parameters)==null?void 0:z.docs),{source:e({originalSource:`{
  args: {
    prefix: <Icon name="selected" />
  }
}`},(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source)})});var Q,Z,ee;C.parameters=t(e({},C.parameters),{docs:t(e({},(Q=C.parameters)==null?void 0:Q.docs),{source:e({originalSource:`{
  args: {
    suffix: '元'
  }
}`},(ee=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:ee.source)})});var re,te,oe;S.parameters=t(e({},S.parameters),{docs:t(e({},(re=S.parameters)==null?void 0:re.docs),{source:e({originalSource:`{
  args: {
    title: 'Custom title'
  }
}`},(oe=(te=S.parameters)==null?void 0:te.docs)==null?void 0:oe.source)})});var ae,se,ne;f.parameters=t(e({},f.parameters),{docs:t(e({},(ae=f.parameters)==null?void 0:ae.docs),{source:e({originalSource:`{
  args: {
    value: 112893
  }
}`},(ne=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ne.source)})});var ie,ce,le;h.parameters=t(e({},h.parameters),{docs:t(e({},(ie=h.parameters)==null?void 0:ie.docs),{source:e({originalSource:`{
  args: {
    value: 112893,
    valueStyle: {
      color: ColorSuccess
    }
  }
}`},(le=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:le.source)})});var pe,de,ue;y.parameters=t(e({},y.parameters),{docs:t(e({},(pe=y.parameters)==null?void 0:pe.docs),{source:e({originalSource:`{
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
}`},(ue=(de=y.parameters)==null?void 0:de.docs)==null?void 0:ue.source)})});var me,xe,ge;v.parameters=t(e({},v.parameters),{docs:t(e({},(me=v.parameters)==null?void 0:me.docs),{source:e({originalSource:`{
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
}`},(ge=(xe=v.parameters)==null?void 0:xe.docs)==null?void 0:ge.source)})});var Ce,Se,fe;j.parameters=t(e({},j.parameters),{docs:t(e({},(Ce=j.parameters)==null?void 0:Ce.docs),{source:e({originalSource:`{
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
}`},(fe=(Se=j.parameters)==null?void 0:Se.docs)==null?void 0:fe.source)})});var he,ye,ve;w.parameters=t(e({},w.parameters),{docs:t(e({},(he=w.parameters)==null?void 0:he.docs),{source:e({originalSource:`{
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
}`},(ve=(ye=w.parameters)==null?void 0:ye.docs)==null?void 0:ve.source)})});const tr=["Primary","CustomDecimalSeparator","CustomFormatter","CustomGroupSeparator","CustomLoading","CustomPrecision","CustomPrefix","CustomSuffix","CustomTitle","CustomValue","CustomValueStyle","ExampleBasic","ExampleWithUnit","ExampleWithCard","ExampleWithCountdown"];export{p as CustomDecimalSeparator,d as CustomFormatter,u as CustomGroupSeparator,m as CustomLoading,x as CustomPrecision,g as CustomPrefix,C as CustomSuffix,S as CustomTitle,f as CustomValue,h as CustomValueStyle,y as ExampleBasic,j as ExampleWithCard,w as ExampleWithCountdown,v as ExampleWithUnit,l as Primary,tr as __namedExportsOrder,rr as default};
