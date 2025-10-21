var $e=Object.defineProperty,De=Object.defineProperties;var Re=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var Fe=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable;var B=(o,n,c)=>n in o?$e(o,n,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[n]=c,r=(o,n)=>{for(var c in n||(n={}))Fe.call(n,c)&&B(o,c,n[c]);if(W)for(var c of W(n))Le.call(n,c)&&B(o,c,n[c]);return o},t=(o,n)=>De(o,Re(n));import{j as e}from"./jsx-runtime-CVnACwZl.js";import{Y as s,a,e as T,I as G,T as A}from"./NavigationItemsService-BIsnHLlX.js";import"./ErrorStateIcon-kjHStgbV.js";import"./SuccessStateIcon-709Tdv_u.js";import"./WarningStateIcon-ZHXkKKYB.js";import"./_baseClone-CXAe4HsA.js";import{E as p}from"./ExampleStory-mKWbDhto.js";import{r as He}from"./index-3OP4wdng.js";import"./LightTheme-BtoaoHMG.js";import"./row-Bsm_WxsR.js";import"./Context-R5ee3nrF.js";import"./useToken-C_i1q6Gz.js";import"./presets-BrZHayqo.js";import"./extends-CF3RwP-h.js";import"./index-B-gr4m3q.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./style-Bcqy26BW.js";import"./WarningFilled-CeF8OMKd.js";const cr={title:"Components/Not Prod Ready/Feedback/Progress",component:s,args:{percent:0,showInfo:!0,status:void 0,strokeColor:void 0,strokeLinecap:"round",success:void 0,trailColor:void 0,style:{width:"100px"},type:"line",size:"default",format:o=>`${o}%`}},l={},d={args:{percent:50}},m={args:{percent:50,status:"success"}},u={args:{percent:30,status:"exception"}},x={args:{percent:50,status:"active"}},g={args:{percent:70,strokeColor:"#1890ff",trailColor:"#f0f0f0"}},y={args:{percent:50,type:"circle"}},j={args:{percent:50,type:"dashboard"}},S={args:{percent:50,size:"small"}},f={args:{percent:50,format:(o,n)=>`Progress: ${o}% (Success: ${n}%)`}},P={render:()=>e.jsx(p,{title:"A standard progress bar.",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{percent:30}),e.jsx(s,{percent:50,status:"active"}),e.jsx(s,{percent:70,status:"exception"}),e.jsx(s,{percent:100}),e.jsx(s,{percent:50,showInfo:!1})]})})},h={render:()=>e.jsx(p,{title:"A circular progress bar.",children:e.jsxs(a,{wrap:!0,children:[e.jsx(s,{type:"circle",percent:75}),e.jsx(s,{type:"circle",percent:70,status:"exception"}),e.jsx(s,{type:"circle",percent:100})]})})},C={render:()=>e.jsx(p,{title:"Appropriate for a narrow area.",children:e.jsxs("div",{style:{width:170},children:[e.jsx(s,{percent:30,size:"small"}),e.jsx(s,{percent:50,size:"small",status:"active"}),e.jsx(s,{percent:70,size:"small",status:"exception"}),e.jsx(s,{percent:100,size:"small"})]})})},b={render:()=>e.jsx(p,{title:"Responsive circular progress bar. When width is smaller than 20, progress information will be displayed in Tooltip.",children:e.jsx(s,{type:"circle",trailColor:"#e6f4ff",percent:60,strokeWidth:20,size:14,format:o=>`Tooltip with percent info - ${o}%`})})},w={render:()=>{const[o,n]=He.useState(0),c=()=>{n(k=>{const i=k+10;return i>100?100:i})},Ie=()=>{n(k=>{const i=k-10;return i<0?0:i})};return e.jsxs(p,{title:"A dynamic progress bar is better.",children:[e.jsxs("div",{style:{marginBottom:10},children:[e.jsx(s,{percent:o}),e.jsx(s,{type:"circle",percent:o})]}),e.jsxs(T.Group,{children:[e.jsx(T,{onClick:Ie,icon:e.jsx(G,{name:"add"})}),e.jsx(T,{onClick:c,icon:e.jsx(G,{name:"mpLogo"})})]})]})}},z={render:()=>e.jsxs(p,{title:"Show several parts of progress with different status.",children:[e.jsx(A,{title:"3 done / 3 in progress / 4 to do",children:e.jsx(s,{percent:60,success:{percent:30}})}),e.jsxs(a,{wrap:!0,children:[e.jsx(A,{title:"3 done / 3 in progress / 4 to do",children:e.jsx(s,{percent:60,success:{percent:30},type:"circle"})}),e.jsx(A,{title:"3 done / 3 in progress / 4 to do",children:e.jsx(s,{percent:60,success:{percent:30},type:"dashboard"})})]})]})},E={render:()=>{const o={"0%":"#108ee9","100%":"#87d068"},n={"0%":"#87d068","50%":"#ffe58f","100%":"#ffccc7"};return e.jsx(p,{title:e.jsx(e.Fragment,{children:" "}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",rowGap:16},children:[e.jsx(s,{percent:99.9,strokeColor:o}),e.jsx(s,{percent:50,status:"active",strokeColor:{from:"#108ee9",to:"#87d068"}}),e.jsxs(a,{wrap:!0,children:[e.jsx(s,{type:"circle",percent:90,strokeColor:o}),e.jsx(s,{type:"circle",percent:100,strokeColor:o}),e.jsx(s,{type:"circle",percent:93,strokeColor:n})]}),e.jsxs(a,{wrap:!0,children:[e.jsx(s,{type:"dashboard",percent:90,strokeColor:o}),e.jsx(s,{type:"dashboard",percent:100,strokeColor:o}),e.jsx(s,{type:"dashboard",percent:93,strokeColor:n})]})]})})}},v={render:()=>e.jsxs(p,{title:"The size of progress.",children:[e.jsxs(a,{direction:"vertical",children:[e.jsx(s,{percent:50}),e.jsx(s,{percent:50,size:"small"}),e.jsx(s,{percent:50,size:[300,20]})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(a,{size:30,children:[e.jsx(s,{type:"circle",percent:50}),e.jsx(s,{type:"circle",percent:50,size:"small"}),e.jsx(s,{type:"circle",percent:50,size:20})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(a,{size:30,children:[e.jsx(s,{type:"dashboard",percent:50}),e.jsx(s,{type:"dashboard",percent:50,size:"small"}),e.jsx(s,{type:"dashboard",percent:50,size:20})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(a,{size:30,wrap:!0,children:[e.jsx(s,{steps:3,percent:50}),e.jsx(s,{steps:3,percent:50,size:"small"}),e.jsx(s,{steps:3,percent:50,size:20}),e.jsx(s,{steps:3,percent:50,size:[20,30]})]})]})};var I,$,D;l.parameters=t(r({},l.parameters),{docs:t(r({},(I=l.parameters)==null?void 0:I.docs),{source:r({originalSource:"{}"},(D=($=l.parameters)==null?void 0:$.docs)==null?void 0:D.source)})});var R,F,L;d.parameters=t(r({},d.parameters),{docs:t(r({},(R=d.parameters)==null?void 0:R.docs),{source:r({originalSource:`{
  args: {
    percent: 50
  }
}`},(L=(F=d.parameters)==null?void 0:F.docs)==null?void 0:L.source)})});var H,_,N;m.parameters=t(r({},m.parameters),{docs:t(r({},(H=m.parameters)==null?void 0:H.docs),{source:r({originalSource:`{
  args: {
    percent: 50,
    status: 'success'
  }
}`},(N=(_=m.parameters)==null?void 0:_.docs)==null?void 0:N.source)})});var O,Y,q;u.parameters=t(r({},u.parameters),{docs:t(r({},(O=u.parameters)==null?void 0:O.docs),{source:r({originalSource:`{
  args: {
    percent: 30,
    status: 'exception'
  }
}`},(q=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:q.source)})});var J,K,M;x.parameters=t(r({},x.parameters),{docs:t(r({},(J=x.parameters)==null?void 0:J.docs),{source:r({originalSource:`{
  args: {
    percent: 50,
    status: 'active'
  }
}`},(M=(K=x.parameters)==null?void 0:K.docs)==null?void 0:M.source)})});var Q,U,V;g.parameters=t(r({},g.parameters),{docs:t(r({},(Q=g.parameters)==null?void 0:Q.docs),{source:r({originalSource:`{
  args: {
    percent: 70,
    strokeColor: '#1890ff',
    trailColor: '#f0f0f0'
  }
}`},(V=(U=g.parameters)==null?void 0:U.docs)==null?void 0:V.source)})});var X,Z,ee;y.parameters=t(r({},y.parameters),{docs:t(r({},(X=y.parameters)==null?void 0:X.docs),{source:r({originalSource:`{
  args: {
    percent: 50,
    type: 'circle'
  }
}`},(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source)})});var re,se,te;j.parameters=t(r({},j.parameters),{docs:t(r({},(re=j.parameters)==null?void 0:re.docs),{source:r({originalSource:`{
  args: {
    percent: 50,
    type: 'dashboard'
  }
}`},(te=(se=j.parameters)==null?void 0:se.docs)==null?void 0:te.source)})});var oe,ne,ce;S.parameters=t(r({},S.parameters),{docs:t(r({},(oe=S.parameters)==null?void 0:oe.docs),{source:r({originalSource:`{
  args: {
    percent: 50,
    size: 'small'
  }
}`},(ce=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:ce.source)})});var ae,pe,ie;f.parameters=t(r({},f.parameters),{docs:t(r({},(ae=f.parameters)==null?void 0:ae.docs),{source:r({originalSource:`{
  args: {
    percent: 50,
    format: (percent, successPercent) => \`Progress: \${percent}% (Success: \${successPercent}%)\`
  }
}`},(ie=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:ie.source)})});var le,de,me;P.parameters=t(r({},P.parameters),{docs:t(r({},(le=P.parameters)==null?void 0:le.docs),{source:r({originalSource:`{
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
}`},(me=(de=P.parameters)==null?void 0:de.docs)==null?void 0:me.source)})});var ue,xe,ge;h.parameters=t(r({},h.parameters),{docs:t(r({},(ue=h.parameters)==null?void 0:ue.docs),{source:r({originalSource:`{
  render: () => {
    return <ExampleStory title="A circular progress bar.">
        <Space wrap>
          <Progress type="circle" percent={75} />
          <Progress type="circle" percent={70} status="exception" />
          <Progress type="circle" percent={100} />
        </Space>
      </ExampleStory>;
  }
}`},(ge=(xe=h.parameters)==null?void 0:xe.docs)==null?void 0:ge.source)})});var ye,je,Se;C.parameters=t(r({},C.parameters),{docs:t(r({},(ye=C.parameters)==null?void 0:ye.docs),{source:r({originalSource:`{
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
}`},(Se=(je=C.parameters)==null?void 0:je.docs)==null?void 0:Se.source)})});var fe,Pe,he;b.parameters=t(r({},b.parameters),{docs:t(r({},(fe=b.parameters)==null?void 0:fe.docs),{source:r({originalSource:`{
  render: () => {
    return <ExampleStory title="Responsive circular progress bar. When width is smaller than 20, progress information will be displayed in Tooltip.">
        <Progress type="circle" trailColor="#e6f4ff" percent={60} strokeWidth={20} size={14} format={number => \`Tooltip with percent info - \${number}%\`} />
      </ExampleStory>;
  }
}`},(he=(Pe=b.parameters)==null?void 0:Pe.docs)==null?void 0:he.source)})});var Ce,be,we;w.parameters=t(r({},w.parameters),{docs:t(r({},(Ce=w.parameters)==null?void 0:Ce.docs),{source:r({originalSource:`{
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
}`},(we=(be=w.parameters)==null?void 0:be.docs)==null?void 0:we.source)})});var ze,Ee,ve;z.parameters=t(r({},z.parameters),{docs:t(r({},(ze=z.parameters)==null?void 0:ze.docs),{source:r({originalSource:`{
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
}`},(ve=(Ee=z.parameters)==null?void 0:Ee.docs)==null?void 0:ve.source)})});var ke,Te,Ae;E.parameters=t(r({},E.parameters),{docs:t(r({},(ke=E.parameters)==null?void 0:ke.docs),{source:r({originalSource:`{
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
}`},(Ae=(Te=E.parameters)==null?void 0:Te.docs)==null?void 0:Ae.source)})});var We,Be,Ge;v.parameters=t(r({},v.parameters),{docs:t(r({},(We=v.parameters)==null?void 0:We.docs),{source:r({originalSource:`{
  render: () => {
    return <ExampleStory title="The size of progress.">
        <Space direction="vertical">
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
}`},(Ge=(Be=v.parameters)==null?void 0:Be.docs)==null?void 0:Ge.source)})});const ar=["Primary","HalfWay","Success","Exception","Active","WithCustomColors","CircleType","DashboardType","SmallSize","CustomFormat","ExampleProgress","ExampleCircle","ExampleSmall","ExampleResponsive","ExampleDynamic","ExampleSegments","ExampleGradient","ExampleProgressSize"];export{x as Active,y as CircleType,f as CustomFormat,j as DashboardType,h as ExampleCircle,w as ExampleDynamic,E as ExampleGradient,P as ExampleProgress,v as ExampleProgressSize,b as ExampleResponsive,z as ExampleSegments,C as ExampleSmall,u as Exception,d as HalfWay,l as Primary,S as SmallSize,m as Success,g as WithCustomColors,ar as __namedExportsOrder,cr as default};
