import{j as e}from"./jsx-runtime-u17CrQMm.js";import{a4 as c,b as r,a as p,G as d}from"./UnauthorizedTooltip-C-uexwNG.js";import"./ErrorStateIcon-B6JkuEkJ.js";import"./SuccessStateIcon-BoEEKEoh.js";import"./WarningStateIcon-DvK-CXgy.js";import{aQ as y}from"./style-BLGxefMg.js";import{E as l}from"./ExampleStory-B49bSB_-.js";import{r as m}from"./iframe-ZAwtOOsv.js";import"./LightTheme-BtoaoHMG.js";import"./row-_uEFDODe.js";import"./Context-D1vOXvMD.js";import"./useToken-xerQhSdt.js";import"./presets-C7IxLGBr.js";import"./index-BkWt5-fR.js";import"./index-CKTaITbW.js";import"./AntdIcon-CLyLtIX5.js";import"./client-D5Z-HDZA.js";import"./WarningFilled-DrGq8YeO.js";import"./preload-helper-PPVm8Dsz.js";const{expect:u}=__STORYBOOK_MODULE_TEST__,O={title:"Components/General/Typography/Text",component:t=>e.jsx(r.Text,{...t,children:t.children}),args:{children:"Example Text",type:void 0,color:void 0,size:"base",code:!1,copyable:!1,delete:!1,disabled:!1,editable:!1,ellipsis:!1,mark:!1,strong:!1,italic:!1,underline:!1},argTypes:{children:{control:"text",name:"text"},type:{control:"select",options:["secondary","success","warning","danger"]},size:{control:"select",options:["base","sm","lg","xl"]},color:{control:"select",options:c},copyable:{control:"boolean"},delete:{control:"boolean"},disabled:{control:"boolean"},editable:{control:"boolean"},ellipsis:{control:"boolean"},mark:{control:"boolean"},strong:{control:"boolean"},italic:{control:"boolean"},code:{control:"boolean"}}},a={play:async t=>{const n=t.canvasElement.querySelector("span");u(n?.textContent).toEqual("Example Text")}},o={render:()=>e.jsx(l,{title:e.jsx(e.Fragment,{children:" "}),children:e.jsxs(p,{orientation:"vertical",children:[e.jsx(r.Text,{children:"Aquarium (default)"}),e.jsx(r.Text,{type:"secondary",children:"Aquarium (secondary)"}),e.jsx(r.Text,{type:"success",children:"Aquarium (success)"}),e.jsx(r.Text,{type:"warning",children:"Aquarium (warning)"}),e.jsx(r.Text,{type:"danger",children:"Aquarium (danger)"}),e.jsx(r.Text,{disabled:!0,children:"Aquarium (disabled)"}),e.jsx(r.Text,{mark:!0,children:"Aquarium (mark)"}),e.jsx(r.Text,{code:!0,children:"Aquarium (code)"}),e.jsx(r.Text,{keyboard:!0,children:"Aquarium (keyboard)"}),e.jsx(r.Text,{underline:!0,children:"Aquarium (underline)"}),e.jsx(r.Text,{delete:!0,children:"Aquarium (delete)"}),e.jsx(r.Text,{strong:!0,children:"Aquarium (strong)"}),e.jsx(r.Text,{italic:!0,children:"Aquarium (italic)"})]})})},s={render:()=>e.jsx(l,{title:e.jsx(e.Fragment,{children:" "}),children:e.jsx(p,{orientation:"vertical",children:e.jsx(r.Text,{size:"sm",color:"ColorPrimaryText",style:{paddingLeft:y},children:"Aquarium props test"})})})},i={render:()=>{const[t,n]=m.useState(!0);return e.jsxs(l,{title:"Toggle ellipsis on and off.",children:[e.jsx(d,{checked:t,onChange:()=>{n(!t)}}),e.jsx(r.Text,{style:t?{width:200}:void 0,ellipsis:t?{tooltip:"I am ellipsis now!"}:!1,children:"Ant Design, a design language for background applications, is refined by Ant UED Team."}),e.jsx(r.Text,{code:!0,style:t?{width:200}:void 0,ellipsis:t?{tooltip:"I am ellipsis now!"}:!1,children:"Ant Design, a design language for background applications, is refined by Ant UED Team."})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  play: async context => {
    const text = context.canvasElement.querySelector('span');
    void expect(text?.textContent).toEqual('Example Text');
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title={<> </>}>
        <Space orientation="vertical">
          <Typography.Text>Aquarium (default)</Typography.Text>
          <Typography.Text type="secondary">Aquarium (secondary)</Typography.Text>
          <Typography.Text type="success">Aquarium (success)</Typography.Text>
          <Typography.Text type="warning">Aquarium (warning)</Typography.Text>
          <Typography.Text type="danger">Aquarium (danger)</Typography.Text>
          <Typography.Text disabled>Aquarium (disabled)</Typography.Text>
          <Typography.Text mark>Aquarium (mark)</Typography.Text>
          <Typography.Text code>Aquarium (code)</Typography.Text>
          <Typography.Text keyboard>Aquarium (keyboard)</Typography.Text>
          <Typography.Text underline>Aquarium (underline)</Typography.Text>
          <Typography.Text delete>Aquarium (delete)</Typography.Text>
          <Typography.Text strong>Aquarium (strong)</Typography.Text>
          <Typography.Text italic>Aquarium (italic)</Typography.Text>
        </Space>
      </ExampleStory>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title={<> </>}>
        <Space orientation="vertical">
          <Typography.Text size="sm" color="ColorPrimaryText" style={{
          paddingLeft: PaddingLg
        }}>
            Aquarium props test
          </Typography.Text>
        </Space>
      </ExampleStory>;
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [ellipsis, setEllipsis] = useState(true);
    return <ExampleStory title="Toggle ellipsis on and off.">
        <Switch checked={ellipsis} onChange={() => {
        setEllipsis(!ellipsis);
      }} />
        <Typography.Text style={ellipsis ? {
        width: 200
      } : undefined} ellipsis={ellipsis ? {
        tooltip: 'I am ellipsis now!'
      } : false}>
          Ant Design, a design language for background applications, is refined by Ant UED Team.
        </Typography.Text>
        <Typography.Text code style={ellipsis ? {
        width: 200
      } : undefined} ellipsis={ellipsis ? {
        tooltip: 'I am ellipsis now!'
      } : false}>
          Ant Design, a design language for background applications, is refined by Ant UED Team.
        </Typography.Text>
      </ExampleStory>;
  }
}`,...i.parameters?.docs?.source}}};const U=["Primary","ExampleTexts","ExampleProps","ExampleEllipsis"];export{i as ExampleEllipsis,s as ExampleProps,o as ExampleTexts,a as Primary,U as __namedExportsOrder,O as default};
