import{j as e}from"./jsx-runtime-u17CrQMm.js";import{a1 as r,a as t,c as E,I as k,T as v}from"./UnauthorizedTooltip-C-uexwNG.js";import"./ErrorStateIcon-B6JkuEkJ.js";import"./SuccessStateIcon-BoEEKEoh.js";import"./WarningStateIcon-DvK-CXgy.js";import{E as o}from"./ExampleStory-B49bSB_-.js";import{r as W}from"./iframe-ZAwtOOsv.js";import"./LightTheme-BtoaoHMG.js";import"./row-_uEFDODe.js";import"./Context-D1vOXvMD.js";import"./useToken-xerQhSdt.js";import"./presets-C7IxLGBr.js";import"./index-BkWt5-fR.js";import"./index-CKTaITbW.js";import"./AntdIcon-CLyLtIX5.js";import"./style-BLGxefMg.js";import"./client-D5Z-HDZA.js";import"./WarningFilled-DrGq8YeO.js";import"./preload-helper-PPVm8Dsz.js";const X={title:"Components/Not Prod Ready/Feedback/Progress",component:r,args:{percent:0,showInfo:!0,status:void 0,strokeColor:void 0,strokeLinecap:"round",success:void 0,trailColor:void 0,style:{width:"100px"},type:"line",size:"default",format:s=>`${s}%`}},a={},p={args:{percent:50}},i={args:{percent:50,status:"success"}},l={args:{percent:30,status:"exception"}},d={args:{percent:50,status:"active"}},m={args:{percent:70,strokeColor:"#1890ff",trailColor:"#f0f0f0"}},u={args:{percent:50,type:"circle"}},x={args:{percent:50,type:"dashboard"}},g={args:{percent:50,size:"small"}},y={args:{percent:50,format:(s,n)=>`Progress: ${s}% (Success: ${n}%)`}},j={render:()=>e.jsx(o,{title:"A standard progress bar.",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{percent:30}),e.jsx(r,{percent:50,status:"active"}),e.jsx(r,{percent:70,status:"exception"}),e.jsx(r,{percent:100}),e.jsx(r,{percent:50,showInfo:!1})]})})},S={render:()=>e.jsx(o,{title:"A circular progress bar.",children:e.jsxs(t,{wrap:!0,children:[e.jsx(r,{type:"circle",percent:75}),e.jsx(r,{type:"circle",percent:70,status:"exception"}),e.jsx(r,{type:"circle",percent:100})]})})},f={render:()=>e.jsx(o,{title:"Appropriate for a narrow area.",children:e.jsxs("div",{style:{width:170},children:[e.jsx(r,{percent:30,size:"small"}),e.jsx(r,{percent:50,size:"small",status:"active"}),e.jsx(r,{percent:70,size:"small",status:"exception"}),e.jsx(r,{percent:100,size:"small"})]})})},P={render:()=>e.jsx(o,{title:"Responsive circular progress bar. When width is smaller than 20, progress information will be displayed in Tooltip.",children:e.jsx(r,{type:"circle",trailColor:"#e6f4ff",percent:60,strokeWidth:20,size:14,format:s=>`Tooltip with percent info - ${s}%`})})},h={render:()=>{const[s,n]=W.useState(0),T=()=>{n(z=>{const c=z+10;return c>100?100:c})},A=()=>{n(z=>{const c=z-10;return c<0?0:c})};return e.jsxs(o,{title:"A dynamic progress bar is better.",children:[e.jsxs("div",{style:{marginBottom:10},children:[e.jsx(r,{percent:s}),e.jsx(r,{type:"circle",percent:s})]}),e.jsxs(E.Group,{children:[e.jsx(E,{onClick:A,icon:e.jsx(k,{name:"add"})}),e.jsx(E,{onClick:T,icon:e.jsx(k,{name:"mpLogo"})})]})]})}},C={render:()=>e.jsxs(o,{title:"Show several parts of progress with different status.",children:[e.jsx(v,{title:"3 done / 3 in progress / 4 to do",children:e.jsx(r,{percent:60,success:{percent:30}})}),e.jsxs(t,{wrap:!0,children:[e.jsx(v,{title:"3 done / 3 in progress / 4 to do",children:e.jsx(r,{percent:60,success:{percent:30},type:"circle"})}),e.jsx(v,{title:"3 done / 3 in progress / 4 to do",children:e.jsx(r,{percent:60,success:{percent:30},type:"dashboard"})})]})]})},b={render:()=>{const s={"0%":"#108ee9","100%":"#87d068"},n={"0%":"#87d068","50%":"#ffe58f","100%":"#ffccc7"};return e.jsx(o,{title:e.jsx(e.Fragment,{children:" "}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",rowGap:16},children:[e.jsx(r,{percent:99.9,strokeColor:s}),e.jsx(r,{percent:50,status:"active",strokeColor:{from:"#108ee9",to:"#87d068"}}),e.jsxs(t,{wrap:!0,children:[e.jsx(r,{type:"circle",percent:90,strokeColor:s}),e.jsx(r,{type:"circle",percent:100,strokeColor:s}),e.jsx(r,{type:"circle",percent:93,strokeColor:n})]}),e.jsxs(t,{wrap:!0,children:[e.jsx(r,{type:"dashboard",percent:90,strokeColor:s}),e.jsx(r,{type:"dashboard",percent:100,strokeColor:s}),e.jsx(r,{type:"dashboard",percent:93,strokeColor:n})]})]})})}},w={render:()=>e.jsxs(o,{title:"The size of progress.",children:[e.jsxs(t,{orientation:"vertical",children:[e.jsx(r,{percent:50}),e.jsx(r,{percent:50,size:"small"}),e.jsx(r,{percent:50,size:[300,20]})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(t,{size:30,children:[e.jsx(r,{type:"circle",percent:50}),e.jsx(r,{type:"circle",percent:50,size:"small"}),e.jsx(r,{type:"circle",percent:50,size:20})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(t,{size:30,children:[e.jsx(r,{type:"dashboard",percent:50}),e.jsx(r,{type:"dashboard",percent:50,size:"small"}),e.jsx(r,{type:"dashboard",percent:50,size:20})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(t,{size:30,wrap:!0,children:[e.jsx(r,{steps:3,percent:50}),e.jsx(r,{steps:3,percent:50,size:"small"}),e.jsx(r,{steps:3,percent:50,size:20}),e.jsx(r,{steps:3,percent:50,size:[20,30]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    percent: 50
  }
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    percent: 50,
    status: 'success'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    percent: 30,
    status: 'exception'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    percent: 50,
    status: 'active'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    percent: 70,
    strokeColor: '#1890ff',
    trailColor: '#f0f0f0'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    percent: 50,
    type: 'circle'
  }
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    percent: 50,
    type: 'dashboard'
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    percent: 50,
    size: 'small'
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    percent: 50,
    format: (percent, successPercent) => \`Progress: \${percent}% (Success: \${successPercent}%)\`
  }
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="A standard progress bar.">
        <>
          <Progress percent={30} />
          <Progress percent={50} status="active" />
          <Progress percent={70} status="exception" />
          <Progress percent={100} />
          <Progress percent={50} showInfo={false} />
        </>
      </ExampleStory>;
  }
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="A circular progress bar.">
        <Space wrap>
          <Progress type="circle" percent={75} />
          <Progress type="circle" percent={70} status="exception" />
          <Progress type="circle" percent={100} />
        </Space>
      </ExampleStory>;
  }
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="Appropriate for a narrow area.">
        <div style={{
        width: 170
      }}>
          <Progress percent={30} size="small" />
          <Progress percent={50} size="small" status="active" />
          <Progress percent={70} size="small" status="exception" />
          <Progress percent={100} size="small" />
        </div>
      </ExampleStory>;
  }
}`,...f.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="Responsive circular progress bar. When width is smaller than 20, progress information will be displayed in Tooltip.">
        <Progress type="circle" trailColor="#e6f4ff" percent={60} strokeWidth={20} size={14} format={number => \`Tooltip with percent info - \${number}%\`} />
      </ExampleStory>;
  }
}`,...P.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [percent, setPercent] = useState<number>(0);
    const increase = () => {
      setPercent(prevPercent => {
        const newPercent = prevPercent + 10;
        if (newPercent > 100) {
          return 100;
        }
        return newPercent;
      });
    };
    const decline = () => {
      setPercent(prevPercent => {
        const newPercent = prevPercent - 10;
        if (newPercent < 0) {
          return 0;
        }
        return newPercent;
      });
    };
    return <ExampleStory title="A dynamic progress bar is better.">
        <div style={{
        marginBottom: 10
      }}>
          <Progress percent={percent} />
          <Progress type="circle" percent={percent} />
        </div>
        <Button.Group>
          <Button onClick={decline} icon={<Icon name="add" />} />
          <Button onClick={increase} icon={<Icon name="mpLogo" />} />
        </Button.Group>
      </ExampleStory>;
  }
}`,...h.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="Show several parts of progress with different status.">
        <Tooltip title="3 done / 3 in progress / 4 to do">
          <Progress percent={60} success={{
          percent: 30
        }} />
        </Tooltip>
        <Space wrap>
          <Tooltip title="3 done / 3 in progress / 4 to do">
            <Progress percent={60} success={{
            percent: 30
          }} type="circle" />
          </Tooltip>
          <Tooltip title="3 done / 3 in progress / 4 to do">
            <Progress percent={60} success={{
            percent: 30
          }} type="dashboard" />
          </Tooltip>
        </Space>
      </ExampleStory>;
  }
}`,...C.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const twoColors = {
      '0%': '#108ee9',
      '100%': '#87d068'
    };
    const conicColors = {
      '0%': '#87d068',
      '50%': '#ffe58f',
      '100%': '#ffccc7'
    };
    return <ExampleStory title={<> </>}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: 16
      }}>
          <Progress percent={99.9} strokeColor={twoColors} />
          <Progress percent={50} status="active" strokeColor={{
          from: '#108ee9',
          to: '#87d068'
        }} />
          <Space wrap>
            <Progress type="circle" percent={90} strokeColor={twoColors} />
            <Progress type="circle" percent={100} strokeColor={twoColors} />
            <Progress type="circle" percent={93} strokeColor={conicColors} />
          </Space>
          <Space wrap>
            <Progress type="dashboard" percent={90} strokeColor={twoColors} />
            <Progress type="dashboard" percent={100} strokeColor={twoColors} />
            <Progress type="dashboard" percent={93} strokeColor={conicColors} />
          </Space>
        </div>
      </ExampleStory>;
  }
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="The size of progress.">
        <Space orientation="vertical">
          <Progress percent={50} />
          <Progress percent={50} size="small" />
          <Progress percent={50} size={[300, 20]} />
        </Space>
        <br />
        <br />
        <Space size={30}>
          <Progress type="circle" percent={50} />
          <Progress type="circle" percent={50} size="small" />
          <Progress type="circle" percent={50} size={20} />
        </Space>
        <br />
        <br />
        <Space size={30}>
          <Progress type="dashboard" percent={50} />
          <Progress type="dashboard" percent={50} size="small" />
          <Progress type="dashboard" percent={50} size={20} />
        </Space>
        <br />
        <br />
        <Space size={30} wrap>
          <Progress steps={3} percent={50} />
          <Progress steps={3} percent={50} size="small" />
          <Progress steps={3} percent={50} size={20} />
          <Progress steps={3} percent={50} size={[20, 30]} />
        </Space>
      </ExampleStory>;
  }
}`,...w.parameters?.docs?.source}}};const Y=["Primary","HalfWay","Success","Exception","Active","WithCustomColors","CircleType","DashboardType","SmallSize","CustomFormat","ExampleProgress","ExampleCircle","ExampleSmall","ExampleResponsive","ExampleDynamic","ExampleSegments","ExampleGradient","ExampleProgressSize"];export{d as Active,u as CircleType,y as CustomFormat,x as DashboardType,S as ExampleCircle,h as ExampleDynamic,b as ExampleGradient,j as ExampleProgress,w as ExampleProgressSize,P as ExampleResponsive,C as ExampleSegments,f as ExampleSmall,l as Exception,p as HalfWay,a as Primary,g as SmallSize,i as Success,m as WithCustomColors,Y as __namedExportsOrder,X as default};
