var X=Object.defineProperty,Y=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var x=(o,s,a)=>s in o?X(o,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[s]=a,e=(o,s)=>{for(var a in s||(s={}))$.call(s,a)&&x(o,a,s[a]);if(S)for(var a of S(s))ee.call(s,a)&&x(o,a,s[a]);return o},r=(o,s)=>Y(o,Z(s));import{j as t}from"./jsx-runtime-BcCOBRXo.js";import{E as y,e as te,d as re,i as se,b as ae,g as oe,j as ne,k as ie,l as ce,m as me,L as de}from"./GlobalNavigation-CjKnC2DP.js";import"./_baseClone-DBzvlRjn.js";import{E as le}from"./ExampleStory-2FAsT2u6.js";import{r as pe}from"./index-CNk6hRaE.js";const ge={title:"Components/Data Display/Empty",component:y,args:{description:"Default Message",image:y.PRESENTED_IMAGE_DEFAULT,imageStyle:void 0}},n={},i={args:{description:"Custom description for empty state"}},c={args:{imageStyle:{width:"60px",height:"60px"}}},m={args:{image:null}},d={args:{image:y.PRESENTED_IMAGE_SIMPLE,imageStyle:{width:"100px",height:"62px"}}},l={args:{description:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"This is a custom description for the empty state."}),t.jsxs("b",{children:["Feel free to add ",t.jsx("i",{children:"formatted"})," content here."]})]}),imageStyle:{width:"200px",height:"200px"}}},p={args:{description:""}},g={args:{description:"No data available",imageStyle:{borderRadius:"50%",boxShadow:"0 0 10px rgba(0, 0, 0, 0.2)"}}},u={args:{description:null,image:null}},h={render:()=>{const o=()=>t.jsxs("div",{style:{textAlign:"center"},children:["{Icon}",t.jsx("p",{children:"Data Not Found"})]}),s={width:200},[a,W]=pe.useState(!0);return t.jsx(le,{title:"Set global Empty style.",children:t.jsxs(t.Fragment,{children:[t.jsx(te,{unCheckedChildren:"default",checkedChildren:"customize",checked:a,onChange:W}),t.jsx(re,{}),t.jsx(se,{renderEmpty:a?o:void 0,children:t.jsxs(ae,{direction:"vertical",style:{width:"100%"},children:[t.jsx("h4",{children:"Select"}),t.jsx(oe,{style:s}),t.jsx("h4",{children:"TreeSelect"}),t.jsx(ne,{style:s,treeData:[]}),t.jsx("h4",{children:"Cascader"}),t.jsx(ie,{style:s,options:[],showSearch:!0}),t.jsx("h4",{children:"Transfer"}),t.jsx(ce,{}),t.jsx("h4",{children:"Table"}),t.jsx(me,{style:{marginTop:8},columns:[{title:"Name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"}]}),t.jsx("h4",{children:"List"}),t.jsx(de,{})]})})]})})}};var E,C,j;n.parameters=r(e({},n.parameters),{docs:r(e({},(E=n.parameters)==null?void 0:E.docs),{source:e({originalSource:"{}"},(j=(C=n.parameters)==null?void 0:C.docs)==null?void 0:j.source)})});var f,b,I;i.parameters=r(e({},i.parameters),{docs:r(e({},(f=i.parameters)==null?void 0:f.docs),{source:e({originalSource:`{
  args: {
    description: 'Custom description for empty state'
  }
}`},(I=(b=i.parameters)==null?void 0:b.docs)==null?void 0:I.source)})});var D,T,N;c.parameters=r(e({},c.parameters),{docs:r(e({},(D=c.parameters)==null?void 0:D.docs),{source:e({originalSource:`{
  args: {
    imageStyle: {
      width: '60px',
      height: '60px'
    }
  }
}`},(N=(T=c.parameters)==null?void 0:T.docs)==null?void 0:N.source)})});var w,A,v;m.parameters=r(e({},m.parameters),{docs:r(e({},(w=m.parameters)==null?void 0:w.docs),{source:e({originalSource:`{
  args: {
    image: null
  }
}`},(v=(A=m.parameters)==null?void 0:A.docs)==null?void 0:v.source)})});var z,P,_;d.parameters=r(e({},d.parameters),{docs:r(e({},(z=d.parameters)==null?void 0:z.docs),{source:e({originalSource:`{
  args: {
    image: Empty.PRESENTED_IMAGE_SIMPLE,
    imageStyle: {
      width: '100px',
      height: '62px'
    }
  }
}`},(_=(P=d.parameters)==null?void 0:P.docs)==null?void 0:_.source)})});var k,R,L;l.parameters=r(e({},l.parameters),{docs:r(e({},(k=l.parameters)==null?void 0:k.docs),{source:e({originalSource:`{
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
}`},(L=(R=l.parameters)==null?void 0:R.docs)==null?void 0:L.source)})});var F,M,G;p.parameters=r(e({},p.parameters),{docs:r(e({},(F=p.parameters)==null?void 0:F.docs),{source:e({originalSource:`{
  args: {
    description: ''
  }
}`},(G=(M=p.parameters)==null?void 0:M.docs)==null?void 0:G.source)})});var O,U,q;g.parameters=r(e({},g.parameters),{docs:r(e({},(O=g.parameters)==null?void 0:O.docs),{source:e({originalSource:`{
  args: {
    description: 'No data available',
    imageStyle: {
      borderRadius: '50%',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
    }
  }
}`},(q=(U=g.parameters)==null?void 0:U.docs)==null?void 0:q.source)})});var B,H,J;u.parameters=r(e({},u.parameters),{docs:r(e({},(B=u.parameters)==null?void 0:B.docs),{source:e({originalSource:`{
  args: {
    description: null,
    image: null
  }
}`},(J=(H=u.parameters)==null?void 0:H.docs)==null?void 0:J.source)})});var K,Q,V;h.parameters=r(e({},h.parameters),{docs:r(e({},(K=h.parameters)==null?void 0:K.docs),{source:e({originalSource:`{
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
}`},(V=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:V.source)})});const ue=["Primary","CustomDescription","CustomImageStyle","NoImage","AltImage","CustomDescriptionAndImage","NoDescription","CustomImageAndStyle","NoImageAndNoDescription","ExampleGlobalEmpty"],je=Object.freeze(Object.defineProperty({__proto__:null,AltImage:d,CustomDescription:i,CustomDescriptionAndImage:l,CustomImageAndStyle:g,CustomImageStyle:c,ExampleGlobalEmpty:h,NoDescription:p,NoImage:m,NoImageAndNoDescription:u,Primary:n,__namedExportsOrder:ue,default:ge},Symbol.toStringTag,{value:"Module"}));export{je as E,ge as m};
