import{E as l,j as e,y as u,a0 as x,x as y,p as S,S as E,o as C,a1 as j,aH as I,aI as f,aJ as D,L as T}from"./iframe-_QPLlW2H.js";import{E as b}from"./ExampleStory-z2QCavMP.js";import"./preload-helper-PPVm8Dsz.js";const v={title:"Components/Not Prod Ready/Data Display/Empty",component:l,args:{description:"Default Message",image:l.PRESENTED_IMAGE_DEFAULT,imageStyle:void 0}},t={args:{description:"Custom description for empty state"}},s={args:{imageStyle:{width:"60px",height:"60px"}}},r={args:{image:null}},a={args:{image:l.PRESENTED_IMAGE_SIMPLE,imageStyle:{width:"100px",height:"62px"}}},o={args:{description:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"This is a custom description for the empty state."}),e.jsxs("b",{children:["Feel free to add ",e.jsx("i",{children:"formatted"})," content here."]})]}),imageStyle:{width:"200px",height:"200px"}}},n={args:{description:""}},i={args:{description:"No data available",imageStyle:{borderRadius:"50%",boxShadow:"0 0 10px rgba(0, 0, 0, 0.2)"}}},c={args:{description:null,image:null}},d={render:()=>{const g=()=>e.jsxs("div",{style:{textAlign:"center"},children:["{Icon}",e.jsx("p",{children:"Data Not Found"})]}),m={width:200},[p,h]=u.useState(!0);return e.jsx(b,{title:"Set global Empty style.",children:e.jsxs(e.Fragment,{children:[e.jsx(x,{unCheckedChildren:"default",checkedChildren:"customize",checked:p,onChange:h}),e.jsx(y,{}),e.jsx(S,{renderEmpty:p?g:void 0,children:e.jsxs(E,{orientation:"vertical",style:{width:"100%"},children:[e.jsx("h4",{children:"Select"}),e.jsx(C,{style:m}),e.jsx("h4",{children:"TreeSelect"}),e.jsx(j,{style:m,treeData:[]}),e.jsx("h4",{children:"Cascader"}),e.jsx(I,{style:m,options:[],showSearch:!0}),e.jsx("h4",{children:"Transfer"}),e.jsx(f,{}),e.jsx("h4",{children:"Table"}),e.jsx(D,{style:{marginTop:8},columns:[{title:"Name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"}]}),e.jsx("h4",{children:"List"}),e.jsx(T,{})]})})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'Custom description for empty state'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    imageStyle: {
      width: '60px',
      height: '60px'
    }
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    image: null
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    description: ''
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'No data available',
    imageStyle: {
      borderRadius: '50%',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    description: null,
    image: null
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const z=["CustomDescription","CustomImageStyle","NoImage","AltImage","CustomDescriptionAndImage","NoDescription","CustomImageAndStyle","NoImageAndNoDescription","ExampleGlobalEmpty"];export{a as AltImage,t as CustomDescription,o as CustomDescriptionAndImage,i as CustomImageAndStyle,s as CustomImageStyle,d as ExampleGlobalEmpty,n as NoDescription,r as NoImage,c as NoImageAndNoDescription,z as __namedExportsOrder,v as default};
