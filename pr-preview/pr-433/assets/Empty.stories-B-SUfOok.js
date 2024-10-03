var X=Object.defineProperty,Y=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var S=(n,s,a)=>s in n?X(n,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[s]=a,e=(n,s)=>{for(var a in s||(s={}))$.call(s,a)&&S(n,a,s[a]);if(y)for(var a of y(s))ee.call(s,a)&&S(n,a,s[a]);return n},r=(n,s)=>Y(n,Z(s));import{j as t}from"./jsx-runtime-BcCOBRXo.js";import{E as x,c as te,D as re,a as se,g as ae,T as ne,i as oe,j as ie,k as ce,L as me}from"./GlobalNavigation-CjR4SrT2.js";import{C as de}from"./ConfigProvider-C77M1HMj.js";import"./_baseClone-BjCwUuX-.js";import{E as pe}from"./ExampleStory-RjLLyI9A.js";import{r as le}from"./index-CNk6hRaE.js";import"./index-z2stgOKB.js";import"./useToken-5RYkiW09.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CYew8PZR.js";import"./row-DegztUsn.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";import"./LightTheme-DxveuNKr.js";import"./_getPrototype-CAOE_2rY.js";const ze={title:"Components/Data Display/Empty",component:x,args:{description:"Default Message",image:x.PRESENTED_IMAGE_DEFAULT,imageStyle:void 0}},o={},i={args:{description:"Custom description for empty state"}},c={args:{imageStyle:{width:"60px",height:"60px"}}},m={args:{image:null}},d={args:{image:x.PRESENTED_IMAGE_SIMPLE,imageStyle:{width:"100px",height:"62px"}}},p={args:{description:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"This is a custom description for the empty state."}),t.jsxs("b",{children:["Feel free to add ",t.jsx("i",{children:"formatted"})," content here."]})]}),imageStyle:{width:"200px",height:"200px"}}},l={args:{description:""}},g={args:{description:"No data available",imageStyle:{borderRadius:"50%",boxShadow:"0 0 10px rgba(0, 0, 0, 0.2)"}}},h={args:{description:null,image:null}},u={render:()=>{const n=()=>t.jsxs("div",{style:{textAlign:"center"},children:["{Icon}",t.jsx("p",{children:"Data Not Found"})]}),s={width:200},[a,W]=le.useState(!0);return t.jsx(pe,{title:"Set global Empty style.",children:t.jsxs(t.Fragment,{children:[t.jsx(te,{unCheckedChildren:"default",checkedChildren:"customize",checked:a,onChange:W}),t.jsx(re,{}),t.jsx(de,{renderEmpty:a?n:void 0,children:t.jsxs(se,{direction:"vertical",style:{width:"100%"},children:[t.jsx("h4",{children:"Select"}),t.jsx(ae,{style:s}),t.jsx("h4",{children:"TreeSelect"}),t.jsx(ne,{style:s,treeData:[]}),t.jsx("h4",{children:"Cascader"}),t.jsx(oe,{style:s,options:[],showSearch:!0}),t.jsx("h4",{children:"Transfer"}),t.jsx(ie,{}),t.jsx("h4",{children:"Table"}),t.jsx(ce,{style:{marginTop:8},columns:[{title:"Name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"}]}),t.jsx("h4",{children:"List"}),t.jsx(me,{})]})})]})})}};var E,C,j;o.parameters=r(e({},o.parameters),{docs:r(e({},(E=o.parameters)==null?void 0:E.docs),{source:e({originalSource:"{}"},(j=(C=o.parameters)==null?void 0:C.docs)==null?void 0:j.source)})});var f,I,D;i.parameters=r(e({},i.parameters),{docs:r(e({},(f=i.parameters)==null?void 0:f.docs),{source:e({originalSource:`{
  args: {
    description: 'Custom description for empty state'
  }
}`},(D=(I=i.parameters)==null?void 0:I.docs)==null?void 0:D.source)})});var T,b,N;c.parameters=r(e({},c.parameters),{docs:r(e({},(T=c.parameters)==null?void 0:T.docs),{source:e({originalSource:`{
  args: {
    imageStyle: {
      width: '60px',
      height: '60px'
    }
  }
}`},(N=(b=c.parameters)==null?void 0:b.docs)==null?void 0:N.source)})});var w,A,v;m.parameters=r(e({},m.parameters),{docs:r(e({},(w=m.parameters)==null?void 0:w.docs),{source:e({originalSource:`{
  args: {
    image: null
  }
}`},(v=(A=m.parameters)==null?void 0:A.docs)==null?void 0:v.source)})});var z,k,P;d.parameters=r(e({},d.parameters),{docs:r(e({},(z=d.parameters)==null?void 0:z.docs),{source:e({originalSource:`{
  args: {
    image: Empty.PRESENTED_IMAGE_SIMPLE,
    imageStyle: {
      width: '100px',
      height: '62px'
    }
  }
}`},(P=(k=d.parameters)==null?void 0:k.docs)==null?void 0:P.source)})});var R,L,_;p.parameters=r(e({},p.parameters),{docs:r(e({},(R=p.parameters)==null?void 0:R.docs),{source:e({originalSource:`{
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
}`},(_=(L=p.parameters)==null?void 0:L.docs)==null?void 0:_.source)})});var F,M,G;l.parameters=r(e({},l.parameters),{docs:r(e({},(F=l.parameters)==null?void 0:F.docs),{source:e({originalSource:`{
  args: {
    description: ''
  }
}`},(G=(M=l.parameters)==null?void 0:M.docs)==null?void 0:G.source)})});var O,U,q;g.parameters=r(e({},g.parameters),{docs:r(e({},(O=g.parameters)==null?void 0:O.docs),{source:e({originalSource:`{
  args: {
    description: 'No data available',
    imageStyle: {
      borderRadius: '50%',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
    }
  }
}`},(q=(U=g.parameters)==null?void 0:U.docs)==null?void 0:q.source)})});var B,H,J;h.parameters=r(e({},h.parameters),{docs:r(e({},(B=h.parameters)==null?void 0:B.docs),{source:e({originalSource:`{
  args: {
    description: null,
    image: null
  }
}`},(J=(H=h.parameters)==null?void 0:H.docs)==null?void 0:J.source)})});var K,Q,V;u.parameters=r(e({},u.parameters),{docs:r(e({},(K=u.parameters)==null?void 0:K.docs),{source:e({originalSource:`{
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
}`},(V=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:V.source)})});const ke=["Primary","CustomDescription","CustomImageStyle","NoImage","AltImage","CustomDescriptionAndImage","NoDescription","CustomImageAndStyle","NoImageAndNoDescription","ExampleGlobalEmpty"];export{d as AltImage,i as CustomDescription,p as CustomDescriptionAndImage,g as CustomImageAndStyle,c as CustomImageStyle,u as ExampleGlobalEmpty,l as NoDescription,m as NoImage,h as NoImageAndNoDescription,o as Primary,ke as __namedExportsOrder,ze as default};
