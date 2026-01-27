import{ab as c,j as e,T as r,S as p,ad as d,y,a0 as u}from"./iframe-D7Ys59RG.js";import{E as l}from"./ExampleStory-KHWp24Wn.js";import"./preload-helper-PPVm8Dsz.js";const{expect:x}=__STORYBOOK_MODULE_TEST__,h={title:"Components/General/Typography/Text",component:a=>e.jsx(r.Text,{...a,children:a.children}),args:{children:"Example Text",type:void 0,color:void 0,size:"base",code:!1,copyable:!1,delete:!1,disabled:!1,editable:!1,ellipsis:!1,mark:!1,strong:!1,italic:!1,underline:!1},argTypes:{children:{control:"text",name:"text"},type:{control:"select",options:["secondary","success","warning","danger"]},size:{control:"select",options:["base","sm","lg","xl"]},color:{control:"select",options:c},copyable:{control:"boolean"},delete:{control:"boolean"},disabled:{control:"boolean"},editable:{control:"boolean"},ellipsis:{control:"boolean"},mark:{control:"boolean"},strong:{control:"boolean"},italic:{control:"boolean"},code:{control:"boolean"}}},t={play:async a=>{const i=a.canvasElement.querySelector("span");x(i?.textContent).toEqual("Example Text")}},s={render:()=>e.jsx(l,{title:e.jsx(e.Fragment,{children:" "}),children:e.jsxs(p,{orientation:"vertical",children:[e.jsx(r.Text,{children:"Aquarium (default)"}),e.jsx(r.Text,{type:"secondary",children:"Aquarium (secondary)"}),e.jsx(r.Text,{type:"success",children:"Aquarium (success)"}),e.jsx(r.Text,{type:"warning",children:"Aquarium (warning)"}),e.jsx(r.Text,{type:"danger",children:"Aquarium (danger)"}),e.jsx(r.Text,{disabled:!0,children:"Aquarium (disabled)"}),e.jsx(r.Text,{mark:!0,children:"Aquarium (mark)"}),e.jsx(r.Text,{code:!0,children:"Aquarium (code)"}),e.jsx(r.Text,{keyboard:!0,children:"Aquarium (keyboard)"}),e.jsx(r.Text,{underline:!0,children:"Aquarium (underline)"}),e.jsx(r.Text,{delete:!0,children:"Aquarium (delete)"}),e.jsx(r.Text,{strong:!0,children:"Aquarium (strong)"}),e.jsx(r.Text,{italic:!0,children:"Aquarium (italic)"})]})})},o={render:()=>e.jsx(l,{title:e.jsx(e.Fragment,{children:" "}),children:e.jsx(p,{orientation:"vertical",children:e.jsx(r.Text,{size:"sm",color:"ColorPrimaryText",style:{paddingLeft:d},children:"Aquarium props test"})})})},n={render:()=>{const[a,i]=y.useState(!0);return e.jsxs(l,{title:"Toggle ellipsis on and off.",children:[e.jsx(u,{checked:a,onChange:()=>{i(!a)}}),e.jsx(r.Text,{style:a?{width:200}:void 0,ellipsis:a?{tooltip:"I am ellipsis now!"}:!1,children:"Ant Design, a design language for background applications, is refined by Ant UED Team."}),e.jsx(r.Text,{code:!0,style:a?{width:200}:void 0,ellipsis:a?{tooltip:"I am ellipsis now!"}:!1,children:"Ant Design, a design language for background applications, is refined by Ant UED Team."})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  play: async context => {
    const text = context.canvasElement.querySelector('span');
    void expect(text?.textContent).toEqual('Example Text');
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const A=["Primary","ExampleTexts","ExampleProps","ExampleEllipsis"];export{n as ExampleEllipsis,o as ExampleProps,s as ExampleTexts,t as Primary,A as __namedExportsOrder,h as default};
