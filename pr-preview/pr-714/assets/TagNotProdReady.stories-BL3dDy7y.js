import{j as e}from"./jsx-runtime-u17CrQMm.js";import{l as r,I as c,F as b,f as u,a as h}from"./UnauthorizedTooltip-C-uexwNG.js";import"./ErrorStateIcon-B6JkuEkJ.js";import"./SuccessStateIcon-BoEEKEoh.js";import"./WarningStateIcon-DvK-CXgy.js";import{E as x}from"./ExampleStory-B49bSB_-.js";import{r as f}from"./iframe-ZAwtOOsv.js";import"./LightTheme-BtoaoHMG.js";import"./row-_uEFDODe.js";import"./Context-D1vOXvMD.js";import"./useToken-xerQhSdt.js";import"./presets-C7IxLGBr.js";import"./index-BkWt5-fR.js";import"./index-CKTaITbW.js";import"./AntdIcon-CLyLtIX5.js";import"./style-BLGxefMg.js";import"./client-D5Z-HDZA.js";import"./WarningFilled-DrGq8YeO.js";import"./preload-helper-PPVm8Dsz.js";const{userEvent:S}=__STORYBOOK_MODULE_TEST__,{expect:T}=__STORYBOOK_MODULE_TEST__,A={title:"Components/Not Prod Ready/Data Display/Tag",component:o=>e.jsx(r,{...o,children:"Tag"}),args:{closeIcon:!1,color:"",icon:null,bordered:!0,onClose:o=>{alert("Tag Closed")}}},n={},s={args:{closeIcon:!0}},t={args:{color:"#3498db"}},l={args:{icon:e.jsx(c,{name:"mpLogo"})}},i={args:{bordered:!1}},g={args:{closeIcon:!0,onClose:o=>{alert("Tag Closed")}}},d={render:()=>{const[o,a]=f.useState(!0);return e.jsx(e.Fragment,{children:e.jsx(x,{title:"Basic checkable usage",children:e.jsx(b,{justify:"center",children:e.jsx(r.CheckableTag,{checked:o,bordered:!0,onChange:j=>{alert(`Tag ${j?"Checked":"Unchecked"}`),a(k=>!k)},children:"Tag"})})})})},play:async o=>{const a=o.canvasElement.querySelector(".ant-tag.ant-tag-checkable");if(a)T(a).not.toBeNull(),T(a.classList.contains("ant-tag-checkable-checked")).toBeTruthy(),await S.click(a),T(a.classList.contains("ant-tag-checkable-checked")).toBeFalsy();else throw new Error("Tag not found")}},m={render:()=>e.jsx(e.Fragment,{children:e.jsxs(x,{title:"Available colors",children:[e.jsx(u,{titlePlacement:"left",children:"Presets"}),e.jsxs(h,{size:[0,8],wrap:!0,children:[e.jsx(r,{color:"magenta",children:"magenta"}),e.jsx(r,{color:"red",children:"red"}),e.jsx(r,{color:"volcano",children:"volcano"}),e.jsx(r,{color:"orange",children:"orange"}),e.jsx(r,{color:"gold",children:"gold"}),e.jsx(r,{color:"lime",children:"lime"}),e.jsx(r,{color:"green",children:"green"}),e.jsx(r,{color:"cyan",children:"cyan"}),e.jsx(r,{color:"blue",children:"blue"}),e.jsx(r,{color:"geekblue",children:"geekblue"}),e.jsx(r,{color:"purple",children:"purple"})]}),e.jsx(u,{titlePlacement:"left",children:"Custom"}),e.jsxs(h,{size:[0,8],wrap:!0,children:[e.jsx(r,{color:"#f50",children:"#f50"}),e.jsx(r,{color:"#2db7f5",children:"#2db7f5"}),e.jsx(r,{color:"#87d068",children:"#87d068"}),e.jsx(r,{color:"#108ee9",children:"#108ee9"})]})]})})},p={render:()=>e.jsx(e.Fragment,{children:e.jsxs(x,{title:"Basic status tags",children:[e.jsx(u,{titlePlacement:"left",children:"Without icon"}),e.jsxs(h,{size:[0,8],wrap:!0,children:[e.jsx(r,{color:"success",children:"success"}),e.jsx(r,{color:"processing",children:"processing"}),e.jsx(r,{color:"error",children:"error"}),e.jsx(r,{color:"warning",children:"warning"}),e.jsx(r,{color:"default",children:"default"})]}),e.jsx(u,{titlePlacement:"left",children:"With icon"}),e.jsxs(h,{size:[0,8],wrap:!0,children:[e.jsx(r,{icon:e.jsx(c,{name:"mpLogo"}),color:"success",children:"success"}),e.jsx(r,{icon:e.jsx(c,{name:"mpLogo"}),color:"processing",children:"processing"}),e.jsx(r,{icon:e.jsx(c,{name:"mpLogo"}),color:"error",children:"error"}),e.jsx(r,{icon:e.jsx(c,{name:"mpLogo"}),color:"warning",children:"warning"})]})]})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    closeIcon: true
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    color: '#3498db'
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Icon name="mpLogo" />
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: false
  }
}`,...i.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    closeIcon: true,
    onClose: _e => {
      alert('Tag Closed');
    }
  }
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <ExampleStory title="Available colors">
          <Divider titlePlacement="left">Presets</Divider>
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
          <Divider titlePlacement="left">Custom</Divider>
          <Space size={[0, 8]} wrap>
            <Tag color="#f50">#f50</Tag>
            <Tag color="#2db7f5">#2db7f5</Tag>
            <Tag color="#87d068">#87d068</Tag>
            <Tag color="#108ee9">#108ee9</Tag>
          </Space>
        </ExampleStory>
      </>;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <ExampleStory title="Basic status tags">
          <Divider titlePlacement="left">Without icon</Divider>
          <Space size={[0, 8]} wrap>
            <Tag color="success">success</Tag>
            <Tag color="processing">processing</Tag>
            <Tag color="error">error</Tag>
            <Tag color="warning">warning</Tag>
            <Tag color="default">default</Tag>
          </Space>
          <Divider titlePlacement="left">With icon</Divider>
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
}`,...p.parameters?.docs?.source}}};const K=["Primary","WithCloseIcon","WithColor","WithIcon","WithoutBorder","WithOnCloseCallback","ExampleCheckableTagPrimary","ExampleColors","ExampleStatusTags"];export{d as ExampleCheckableTagPrimary,m as ExampleColors,p as ExampleStatusTags,n as Primary,s as WithCloseIcon,t as WithColor,l as WithIcon,g as WithOnCloseCallback,i as WithoutBorder,K as __namedExportsOrder,A as default};
