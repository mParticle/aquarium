import{j as e}from"./jsx-runtime-u17CrQMm.js";import{E as p,G as u,f as x,i as y,a as S,h as E,J as C,s as f,af as j,Y as I,L as D}from"./UnauthorizedTooltip-C-uexwNG.js";import"./ErrorStateIcon-B6JkuEkJ.js";import"./SuccessStateIcon-BoEEKEoh.js";import"./WarningStateIcon-DvK-CXgy.js";import{E as T}from"./ExampleStory-B49bSB_-.js";import{r as b}from"./iframe-ZAwtOOsv.js";import"./LightTheme-BtoaoHMG.js";import"./row-_uEFDODe.js";import"./Context-D1vOXvMD.js";import"./useToken-xerQhSdt.js";import"./presets-C7IxLGBr.js";import"./index-BkWt5-fR.js";import"./index-CKTaITbW.js";import"./AntdIcon-CLyLtIX5.js";import"./style-BLGxefMg.js";import"./client-D5Z-HDZA.js";import"./WarningFilled-DrGq8YeO.js";import"./preload-helper-PPVm8Dsz.js";const H={title:"Components/Not Prod Ready/Data Display/Empty",component:p,args:{description:"Default Message",image:p.PRESENTED_IMAGE_DEFAULT,imageStyle:void 0}},t={args:{description:"Custom description for empty state"}},r={args:{imageStyle:{width:"60px",height:"60px"}}},s={args:{image:null}},a={args:{image:p.PRESENTED_IMAGE_SIMPLE,imageStyle:{width:"100px",height:"62px"}}},o={args:{description:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"This is a custom description for the empty state."}),e.jsxs("b",{children:["Feel free to add ",e.jsx("i",{children:"formatted"})," content here."]})]}),imageStyle:{width:"200px",height:"200px"}}},i={args:{description:""}},n={args:{description:"No data available",imageStyle:{borderRadius:"50%",boxShadow:"0 0 10px rgba(0, 0, 0, 0.2)"}}},c={args:{description:null,image:null}},m={render:()=>{const h=()=>e.jsxs("div",{style:{textAlign:"center"},children:["{Icon}",e.jsx("p",{children:"Data Not Found"})]}),d={width:200},[l,g]=b.useState(!0);return e.jsx(T,{title:"Set global Empty style.",children:e.jsxs(e.Fragment,{children:[e.jsx(u,{unCheckedChildren:"default",checkedChildren:"customize",checked:l,onChange:g}),e.jsx(x,{}),e.jsx(y,{renderEmpty:l?h:void 0,children:e.jsxs(S,{orientation:"vertical",style:{width:"100%"},children:[e.jsx("h4",{children:"Select"}),e.jsx(E,{style:d}),e.jsx("h4",{children:"TreeSelect"}),e.jsx(C,{style:d,treeData:[]}),e.jsx("h4",{children:"Cascader"}),e.jsx(f,{style:d,options:[],showSearch:!0}),e.jsx("h4",{children:"Transfer"}),e.jsx(j,{}),e.jsx("h4",{children:"Table"}),e.jsx(I,{style:{marginTop:8},columns:[{title:"Name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"}]}),e.jsx("h4",{children:"List"}),e.jsx(D,{})]})})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'Custom description for empty state'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    imageStyle: {
      width: '60px',
      height: '60px'
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    image: null
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    image: Empty.PRESENTED_IMAGE_SIMPLE,
    imageStyle: {
      width: '100px',
      height: '62px'
    }
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    description: ''
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'No data available',
    imageStyle: {
      borderRadius: '50%',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
    }
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    description: null,
    image: null
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
            <Space orientation="vertical" style={{
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
}`,...m.parameters?.docs?.source}}};const K=["CustomDescription","CustomImageStyle","NoImage","AltImage","CustomDescriptionAndImage","NoDescription","CustomImageAndStyle","NoImageAndNoDescription","ExampleGlobalEmpty"];export{a as AltImage,t as CustomDescription,o as CustomDescriptionAndImage,n as CustomImageAndStyle,r as CustomImageStyle,m as ExampleGlobalEmpty,i as NoDescription,s as NoImage,c as NoImageAndNoDescription,K as __namedExportsOrder,H as default};
