var K=Object.defineProperty,Q=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var y=(o,s,a)=>s in o?K(o,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[s]=a,e=(o,s)=>{for(var a in s||(s={}))W.call(s,a)&&y(o,a,s[a]);if(x)for(var a of x(s))X.call(s,a)&&y(o,a,s[a]);return o},r=(o,s)=>Q(o,V(s));import{j as t}from"./jsx-runtime-C9TrHvcC.js";import{E as u,v as Y,b as Z,i as $,a as ee,h as te,x as re,r as se,a7 as ae,N as oe,L as ie}from"./NavigationItemsService-78lwjilB.js";import"./ErrorStateIcon-DZ6wp4Tw.js";import"./SuccessStateIcon-CBwx1vqN.js";import"./WarningStateIcon-Dz0o7HU1.js";import"./_baseClone-DwBCp-Ss.js";import{E as ne}from"./ExampleStory-x67pKrYt.js";import{r as ce}from"./index-3OP4wdng.js";import"./LightTheme-BtoaoHMG.js";import"./row-DlEJUZa0.js";import"./Context-R5ee3nrF.js";import"./useToken-BIYN7ogo.js";import"./presets-CQzyf-6F.js";import"./extends-CF3RwP-h.js";import"./index-DA79H6I3.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./AntdIcon-DRQs8XP6.js";import"./style-BEITWmqT.js";import"./WarningFilled-D6ijQqgK.js";const Ae={title:"Components/Not Prod Ready/Data Display/Empty",component:u,args:{description:"Default Message",image:u.PRESENTED_IMAGE_DEFAULT,imageStyle:void 0}},i={args:{description:"Custom description for empty state"}},n={args:{imageStyle:{width:"60px",height:"60px"}}},c={args:{image:null}},m={args:{image:u.PRESENTED_IMAGE_SIMPLE,imageStyle:{width:"100px",height:"62px"}}},d={args:{description:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"This is a custom description for the empty state."}),t.jsxs("b",{children:["Feel free to add ",t.jsx("i",{children:"formatted"})," content here."]})]}),imageStyle:{width:"200px",height:"200px"}}},p={args:{description:""}},l={args:{description:"No data available",imageStyle:{borderRadius:"50%",boxShadow:"0 0 10px rgba(0, 0, 0, 0.2)"}}},h={args:{description:null,image:null}},g={render:()=>{const o=()=>t.jsxs("div",{style:{textAlign:"center"},children:["{Icon}",t.jsx("p",{children:"Data Not Found"})]}),s={width:200},[a,J]=ce.useState(!0);return t.jsx(ne,{title:"Set global Empty style.",children:t.jsxs(t.Fragment,{children:[t.jsx(Y,{unCheckedChildren:"default",checkedChildren:"customize",checked:a,onChange:J}),t.jsx(Z,{}),t.jsx($,{renderEmpty:a?o:void 0,children:t.jsxs(ee,{direction:"vertical",style:{width:"100%"},children:[t.jsx("h4",{children:"Select"}),t.jsx(te,{style:s}),t.jsx("h4",{children:"TreeSelect"}),t.jsx(re,{style:s,treeData:[]}),t.jsx("h4",{children:"Cascader"}),t.jsx(se,{style:s,options:[],showSearch:!0}),t.jsx("h4",{children:"Transfer"}),t.jsx(ae,{}),t.jsx("h4",{children:"Table"}),t.jsx(oe,{style:{marginTop:8},columns:[{title:"Name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"}]}),t.jsx("h4",{children:"List"}),t.jsx(ie,{})]})})]})})}};var S,E,C;i.parameters=r(e({},i.parameters),{docs:r(e({},(S=i.parameters)==null?void 0:S.docs),{source:e({originalSource:`{
  args: {
    description: 'Custom description for empty state'
  }
}`},(C=(E=i.parameters)==null?void 0:E.docs)==null?void 0:C.source)})});var j,f,I;n.parameters=r(e({},n.parameters),{docs:r(e({},(j=n.parameters)==null?void 0:j.docs),{source:e({originalSource:`{
  args: {
    imageStyle: {
      width: '60px',
      height: '60px'
    }
  }
}`},(I=(f=n.parameters)==null?void 0:f.docs)==null?void 0:I.source)})});var D,b,T;c.parameters=r(e({},c.parameters),{docs:r(e({},(D=c.parameters)==null?void 0:D.docs),{source:e({originalSource:`{
  args: {
    image: null
  }
}`},(T=(b=c.parameters)==null?void 0:b.docs)==null?void 0:T.source)})});var N,w,A;m.parameters=r(e({},m.parameters),{docs:r(e({},(N=m.parameters)==null?void 0:N.docs),{source:e({originalSource:`{
  args: {
    image: Empty.PRESENTED_IMAGE_SIMPLE,
    imageStyle: {
      width: '100px',
      height: '62px'
    }
  }
}`},(A=(w=m.parameters)==null?void 0:w.docs)==null?void 0:A.source)})});var v,z,R;d.parameters=r(e({},d.parameters),{docs:r(e({},(v=d.parameters)==null?void 0:v.docs),{source:e({originalSource:`{
  args: {
    description: <>
        <p>This is a custom description for the empty state.</p>
        <b>
          Feel free to add <i>formatted</i> content here.
        </b>
      </>,
    imageStyle: {
      width: '200px',
      height: '200px'
    }
  }
}`},(R=(z=d.parameters)==null?void 0:z.docs)==null?void 0:R.source)})});var k,P,L;p.parameters=r(e({},p.parameters),{docs:r(e({},(k=p.parameters)==null?void 0:k.docs),{source:e({originalSource:`{
  args: {
    description: ''
  }
}`},(L=(P=p.parameters)==null?void 0:P.docs)==null?void 0:L.source)})});var _,F,M;l.parameters=r(e({},l.parameters),{docs:r(e({},(_=l.parameters)==null?void 0:_.docs),{source:e({originalSource:`{
  args: {
    description: 'No data available',
    imageStyle: {
      borderRadius: '50%',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
    }
  }
}`},(M=(F=l.parameters)==null?void 0:F.docs)==null?void 0:M.source)})});var G,O,U;h.parameters=r(e({},h.parameters),{docs:r(e({},(G=h.parameters)==null?void 0:G.docs),{source:e({originalSource:`{
  args: {
    description: null,
    image: null
  }
}`},(U=(O=h.parameters)==null?void 0:O.docs)==null?void 0:U.source)})});var q,B,H;g.parameters=r(e({},g.parameters),{docs:r(e({},(q=g.parameters)==null?void 0:q.docs),{source:e({originalSource:`{
  render: () => {
    const customizeRenderEmpty = () => <div style={{
      textAlign: 'center'
    }}>
        {'{Icon}'}
        <p>Data Not Found</p>
      </div>;
    const style: React.CSSProperties = {
      width: 200
    };
    const [customize, setCustomize] = useState(true);
    return <ExampleStory title="Set global Empty style.">
        <>
          <Switch unCheckedChildren="default" checkedChildren="customize" checked={customize} onChange={setCustomize} />
          <Divider />
          <ConfigProvider renderEmpty={customize ? customizeRenderEmpty : undefined}>
            <Space direction="vertical" style={{
            width: '100%'
          }}>
              <h4>Select</h4>
              <Select style={style} />
              <h4>TreeSelect</h4>
              <TreeSelect style={style} treeData={[]} />
              <h4>Cascader</h4>
              <Cascader style={style} options={[]} showSearch />
              <h4>Transfer</h4>
              <Transfer />
              <h4>Table</h4>
              <Table style={{
              marginTop: 8
            }} columns={[{
              title: 'Name',
              dataIndex: 'name',
              key: 'name'
            }, {
              title: 'Age',
              dataIndex: 'age',
              key: 'age'
            }]} />
              <h4>List</h4>
              <List />
            </Space>
          </ConfigProvider>
        </>
      </ExampleStory>;
  }
}`},(H=(B=g.parameters)==null?void 0:B.docs)==null?void 0:H.source)})});const ve=["CustomDescription","CustomImageStyle","NoImage","AltImage","CustomDescriptionAndImage","NoDescription","CustomImageAndStyle","NoImageAndNoDescription","ExampleGlobalEmpty"];export{m as AltImage,i as CustomDescription,d as CustomDescriptionAndImage,l as CustomImageAndStyle,n as CustomImageStyle,g as ExampleGlobalEmpty,p as NoDescription,c as NoImage,h as NoImageAndNoDescription,ve as __namedExportsOrder,Ae as default};
