import{j as e,a$ as a,d as T,I as o,T as y,au as v,av as t,b0 as b,b1 as U,b2 as D,h as E,f as R}from"./iframe-_QPLlW2H.js";import{E as j}from"./ExampleStory-z2QCavMP.js";import"./preload-helper-PPVm8Dsz.js";const L={title:"Components/Not Prod Ready/Statistic",component:a,args:{decimalSeparator:".",formatter:r=>`${r}`,groupSeparator:",",loading:!1,precision:0,prefix:void 0,suffix:void 0,title:"Statistic",value:0,valueStyle:void 0},argTypes:{formatter:{control:"select",options:["default","code","error"],mapping:{default:r=>`${r}`,code:r=>e.jsx(y.Text,{code:!0,children:r}),error:r=>e.jsx(y.Text,{type:"danger",children:r})}},prefix:{control:"select",options:["check","alicorn","wrench"],mapping:{check:e.jsx(o,{name:"selected"}),alicorn:e.jsx(o,{name:"alicorn"}),wrench:e.jsx(o,{name:"setup"})}},suffix:{control:"text"},valueStyle:{control:"object"}}},s={},n={args:{value:1128.93,decimalSeparator:","}},i={args:{value:112893,formatter:r=>e.jsx(y.Text,{code:!0,copyable:!0,children:r})}},c={args:{value:112893,groupSeparator:"."}},l={args:{loading:!0}},d={args:{precision:3}},u={args:{prefix:e.jsx(o,{name:"selected"})}},p={args:{suffix:"元"}},m={args:{title:"Custom title"}},x={args:{value:112893}},g={args:{value:112893,valueStyle:{color:T}}},C={render:()=>e.jsx(j,{title:"Basic Usage",description:"Simplest Usage",children:e.jsxs(v,{gutter:16,children:[e.jsx(t,{span:12,children:e.jsx(a,{title:"Active Users",value:112893})}),e.jsxs(t,{span:12,children:[e.jsx(a,{title:"Account Balance (CNY)",value:112893,precision:2}),e.jsx(b,{style:{marginTop:16},type:"primary",children:"Recharge"})]}),e.jsx(t,{span:12,children:e.jsx(a,{title:"Active Users",value:112893,loading:!0})})]})})},S={render:()=>e.jsx(j,{title:"Add unit through prefix and suffix.",description:e.jsxs(y.Paragraph,{children:["Add unit through ",e.jsx("code",{children:"prefix"})," and ",e.jsx("code",{children:"suffix"})]}),children:e.jsxs(v,{gutter:16,children:[e.jsx(t,{children:e.jsx(a,{title:"Feedback",value:1128,prefix:e.jsx(o,{name:"alicorn"})})}),e.jsx(t,{children:e.jsx(a,{title:"Unmerged",value:93,suffix:"/ 100"})})]})})},f={render:()=>e.jsx(j,{title:"Card Usage",description:"Display statistic data in Card.",children:e.jsxs(v,{gutter:16,style:{backgroundColor:D,width:"500px",padding:U},children:[e.jsx(t,{span:12,children:e.jsx(E,{bordered:!1,children:e.jsx(a,{title:"Active",value:11.28,precision:2,valueStyle:{color:T},prefix:e.jsx(o,{name:"add"}),suffix:"%"})})}),e.jsx(t,{span:12,children:e.jsx(E,{bordered:!1,children:e.jsx(a,{title:"Idle",value:9.3,precision:2,valueStyle:{color:R},prefix:e.jsx(o,{name:"setup"}),suffix:"%"})})})]})})},A=1e3*60*60*24*2,P=1e3*30,B=Date.now()+A,w=B+P,I=()=>{console.log("finished!")},F=r=>{typeof r=="number"&&4.95*1e3<r&&r<5*1e3&&console.log("changed!")},h={render:()=>e.jsx(j,{title:"Countdown",description:"Countdown component",children:e.jsxs(v,{gutter:16,style:{width:"500px"},children:[e.jsx(t,{span:12,children:e.jsx(a.Countdown,{title:"Countdown",value:w,onFinish:I})}),e.jsx(t,{span:12,children:e.jsx(a.Countdown,{title:"Million Seconds",value:w,format:"HH:mm:ss:SSS"})}),e.jsx(t,{span:24,style:{marginTop:32},children:e.jsx(a.Countdown,{title:"Day Level",value:w,format:"D 天 H 时 m 分 s 秒"})}),e.jsx(t,{span:12,children:e.jsx(a.Countdown,{title:"Countdown",value:Date.now()+10*1e3,onChange:F})})]})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    value: 1128.93,
    decimalSeparator: ','
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    value: 112893,
    formatter: (value: valueType) => <Typography.Text code copyable>
        {value}
      </Typography.Text>
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: 112893,
    groupSeparator: '.'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    // value: 1128.93402,
    precision: 3
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    prefix: <Icon name="selected" />
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    suffix: '元'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Custom title'
  }
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    value: 112893
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    value: 112893,
    valueStyle: {
      color: ColorSuccess
    }
  }
}`,...g.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const N=["Primary","CustomDecimalSeparator","CustomFormatter","CustomGroupSeparator","CustomLoading","CustomPrecision","CustomPrefix","CustomSuffix","CustomTitle","CustomValue","CustomValueStyle","ExampleBasic","ExampleWithUnit","ExampleWithCard","ExampleWithCountdown"];export{n as CustomDecimalSeparator,i as CustomFormatter,c as CustomGroupSeparator,l as CustomLoading,d as CustomPrecision,u as CustomPrefix,p as CustomSuffix,m as CustomTitle,x as CustomValue,g as CustomValueStyle,C as ExampleBasic,f as ExampleWithCard,h as ExampleWithCountdown,S as ExampleWithUnit,s as Primary,N as __namedExportsOrder,L as default};
