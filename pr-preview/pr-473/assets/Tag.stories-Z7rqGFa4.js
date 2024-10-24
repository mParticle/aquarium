var ne=Object.defineProperty,ce=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable;var w=(c,a,s)=>a in c?ne(c,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):c[a]=s,r=(c,a)=>{for(var s in a||(a={}))te.call(a,s)&&w(c,s,a[s]);if(E)for(var s of E(a))le.call(a,s)&&w(c,s,a[s]);return c},n=(c,a)=>ce(c,se(a));var I=(c,a,s)=>new Promise((f,v)=>{var oe=t=>{try{k(s.next(t))}catch(S){v(S)}},ae=t=>{try{k(s.throw(t))}catch(S){v(S)}},k=t=>t.done?f(t.value):Promise.resolve(t.value).then(oe,ae);k((s=s.apply(c,a)).next())});import{j as e}from"./jsx-runtime-BcCOBRXo.js";import{f as o,I as l,F as ie,l as j,b}from"./GlobalNavigation-CgXhFj8z.js";import"./_baseClone-u1J3oOXU.js";import{E as y}from"./ExampleStory-BX8rZA0M.js";import{r as ge}from"./index-CNk6hRaE.js";import{e as C,u as de}from"./index-C7MMNn6a.js";const pe={title:"Components/Data Display/Tag",component:c=>e.jsx(o,n(r({},c),{children:"Tag"})),args:{closeIcon:!1,color:"",icon:null,bordered:!0,onClose:c=>{alert("Tag Closed")}}},i={},g={args:{closeIcon:!0}},d={args:{color:"#3498db"}},p={args:{icon:e.jsx(l,{name:"mpLogo"})}},m={args:{bordered:!1}},u={args:{closeIcon:!0,onClose:c=>{alert("Tag Closed")}}},h={render:()=>{const[c,a]=ge.useState(!0);return e.jsx(e.Fragment,{children:e.jsx(y,{title:"Basic checkable usage",children:e.jsx(ie,{justify:"center",children:e.jsx(o.CheckableTag,{checked:c,bordered:!0,onChange:s=>{alert(`Tag ${s?"Checked":"Unchecked"}`),a(f=>!f)},children:"Tag"})})})})},play:c=>I(void 0,null,function*(){const a=c.canvasElement.querySelector(".ant-tag.ant-tag-checkable");if(a)C(a).not.toBeNull(),C(a.classList.contains("ant-tag-checkable-checked")).toBeTruthy(),yield de.click(a),C(a.classList.contains("ant-tag-checkable-checked")).toBeFalsy();else throw new Error("Tag not found")})},T={render:()=>e.jsx(e.Fragment,{children:e.jsxs(y,{title:"Available colors",children:[e.jsx(j,{orientation:"left",children:"Presets"}),e.jsxs(b,{size:[0,8],wrap:!0,children:[e.jsx(o,{color:"magenta",children:"magenta"}),e.jsx(o,{color:"red",children:"red"}),e.jsx(o,{color:"volcano",children:"volcano"}),e.jsx(o,{color:"orange",children:"orange"}),e.jsx(o,{color:"gold",children:"gold"}),e.jsx(o,{color:"lime",children:"lime"}),e.jsx(o,{color:"green",children:"green"}),e.jsx(o,{color:"cyan",children:"cyan"}),e.jsx(o,{color:"blue",children:"blue"}),e.jsx(o,{color:"geekblue",children:"geekblue"}),e.jsx(o,{color:"purple",children:"purple"})]}),e.jsx(j,{orientation:"left",children:"Custom"}),e.jsxs(b,{size:[0,8],wrap:!0,children:[e.jsx(o,{color:"#f50",children:"#f50"}),e.jsx(o,{color:"#2db7f5",children:"#2db7f5"}),e.jsx(o,{color:"#87d068",children:"#87d068"}),e.jsx(o,{color:"#108ee9",children:"#108ee9"})]})]})})},x={render:()=>e.jsx(e.Fragment,{children:e.jsxs(y,{title:"Basic status tags",children:[e.jsx(j,{orientation:"left",children:"Without icon"}),e.jsxs(b,{size:[0,8],wrap:!0,children:[e.jsx(o,{color:"success",children:"success"}),e.jsx(o,{color:"processing",children:"processing"}),e.jsx(o,{color:"error",children:"error"}),e.jsx(o,{color:"warning",children:"warning"}),e.jsx(o,{color:"default",children:"default"})]}),e.jsx(j,{orientation:"left",children:"With icon"}),e.jsxs(b,{size:[0,8],wrap:!0,children:[e.jsx(o,{icon:e.jsx(l,{name:"mpLogo"}),color:"success",children:"success"}),e.jsx(o,{icon:e.jsx(l,{name:"mpLogo"}),color:"processing",children:"processing"}),e.jsx(o,{icon:e.jsx(l,{name:"mpLogo"}),color:"error",children:"error"}),e.jsx(o,{icon:e.jsx(l,{name:"mpLogo"}),color:"warning",children:"warning"})]})]})})};var L,W,B;i.parameters=n(r({},i.parameters),{docs:n(r({},(L=i.parameters)==null?void 0:L.docs),{source:r({originalSource:"{}"},(B=(W=i.parameters)==null?void 0:W.docs)==null?void 0:B.source)})});var D,z,F;g.parameters=n(r({},g.parameters),{docs:n(r({},(D=g.parameters)==null?void 0:D.docs),{source:r({originalSource:`{
  args: {
    closeIcon: true
  }
}`},(F=(z=g.parameters)==null?void 0:z.docs)==null?void 0:F.source)})});var P,_,O;d.parameters=n(r({},d.parameters),{docs:n(r({},(P=d.parameters)==null?void 0:P.docs),{source:r({originalSource:`{
  args: {
    color: '#3498db'
  }
}`},(O=(_=d.parameters)==null?void 0:_.docs)==null?void 0:O.source)})});var q,A,N;p.parameters=n(r({},p.parameters),{docs:n(r({},(q=p.parameters)==null?void 0:q.docs),{source:r({originalSource:`{
  args: {
    icon: <Icon name="mpLogo" />
  }
}`},(N=(A=p.parameters)==null?void 0:A.docs)==null?void 0:N.source)})});var U,$,M;m.parameters=n(r({},m.parameters),{docs:n(r({},(U=m.parameters)==null?void 0:U.docs),{source:r({originalSource:`{
  args: {
    bordered: false
  }
}`},(M=($=m.parameters)==null?void 0:$.docs)==null?void 0:M.source)})});var R,G,H;u.parameters=n(r({},u.parameters),{docs:n(r({},(R=u.parameters)==null?void 0:R.docs),{source:r({originalSource:`{
  args: {
    closeIcon: true,
    onClose: e => {
      alert('Tag Closed');
    }
  }
}`},(H=(G=u.parameters)==null?void 0:G.docs)==null?void 0:H.source)})});var J,K,Q;h.parameters=n(r({},h.parameters),{docs:n(r({},(J=h.parameters)==null?void 0:J.docs),{source:r({originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(true);
    return <>
        <ExampleStory title="Basic checkable usage">
          <Flex justify="center">
            <Tag.CheckableTag checked={checked} bordered onChange={checked => {
            alert(\`Tag \${checked ? 'Checked' : 'Unchecked'}\`);
            setChecked(curr => !curr);
          }}>
              Tag
            </Tag.CheckableTag>
          </Flex>
        </ExampleStory>
      </>;
  },
  play: async context => {
    const tag = context.canvasElement.querySelector('.ant-tag.ant-tag-checkable');
    if (tag) {
      void expect(tag).not.toBeNull();
      void expect(tag.classList.contains('ant-tag-checkable-checked')).toBeTruthy();
      await userEvent.click(tag);
      void expect(tag.classList.contains('ant-tag-checkable-checked')).toBeFalsy();
    } else {
      throw new Error('Tag not found');
    }
  }
}`},(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source)})});var V,X,Y;T.parameters=n(r({},T.parameters),{docs:n(r({},(V=T.parameters)==null?void 0:V.docs),{source:r({originalSource:`{
  render: () => {
    return <>
        <ExampleStory title="Available colors">
          <Divider orientation="left">Presets</Divider>
          <Space size={[0, 8]} wrap>
            <Tag color="magenta">magenta</Tag>
            <Tag color="red">red</Tag>
            <Tag color="volcano">volcano</Tag>
            <Tag color="orange">orange</Tag>
            <Tag color="gold">gold</Tag>
            <Tag color="lime">lime</Tag>
            <Tag color="green">green</Tag>
            <Tag color="cyan">cyan</Tag>
            <Tag color="blue">blue</Tag>
            <Tag color="geekblue">geekblue</Tag>
            <Tag color="purple">purple</Tag>
          </Space>
          <Divider orientation="left">Custom</Divider>
          <Space size={[0, 8]} wrap>
            <Tag color="#f50">#f50</Tag>
            <Tag color="#2db7f5">#2db7f5</Tag>
            <Tag color="#87d068">#87d068</Tag>
            <Tag color="#108ee9">#108ee9</Tag>
          </Space>
        </ExampleStory>
      </>;
  }
}`},(Y=(X=T.parameters)==null?void 0:X.docs)==null?void 0:Y.source)})});var Z,ee,re;x.parameters=n(r({},x.parameters),{docs:n(r({},(Z=x.parameters)==null?void 0:Z.docs),{source:r({originalSource:`{
  render: () => {
    return <>
        <ExampleStory title="Basic status tags">
          <Divider orientation="left">Without icon</Divider>
          <Space size={[0, 8]} wrap>
            <Tag color="success">success</Tag>
            <Tag color="processing">processing</Tag>
            <Tag color="error">error</Tag>
            <Tag color="warning">warning</Tag>
            <Tag color="default">default</Tag>
          </Space>
          <Divider orientation="left">With icon</Divider>
          <Space size={[0, 8]} wrap>
            <Tag icon={<Icon name="mpLogo" />} color="success">
              success
            </Tag>
            <Tag icon={<Icon name="mpLogo" />} color="processing">
              processing
            </Tag>
            <Tag icon={<Icon name="mpLogo" />} color="error">
              error
            </Tag>
            <Tag icon={<Icon name="mpLogo" />} color="warning">
              warning
            </Tag>
          </Space>
        </ExampleStory>
      </>;
  }
}`},(re=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:re.source)})});const me=["Primary","WithCloseIcon","WithColor","WithIcon","WithoutBorder","WithOnCloseCallback","ExampleCheckableTagPrimary","ExampleColors","ExampleStatusTags"],ke=Object.freeze(Object.defineProperty({__proto__:null,ExampleCheckableTagPrimary:h,ExampleColors:T,ExampleStatusTags:x,Primary:i,WithCloseIcon:g,WithColor:d,WithIcon:p,WithOnCloseCallback:u,WithoutBorder:m,__namedExportsOrder:me,default:pe},Symbol.toStringTag,{value:"Module"}));export{ke as T,pe as m};
