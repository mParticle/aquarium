import{z as E,y as w,j as r,S as v,i as S}from"./iframe-_QPLlW2H.js";import{E as C}from"./ExampleStory-z2QCavMP.js";import"./preload-helper-PPVm8Dsz.js";const{expect:y,userEvent:B}=__STORYBOOK_MODULE_TEST__,j={title:"Components/Not Prod Ready/Data Entry/Input",component:E,args:{placeholder:"Input Placeholder",addonAfter:void 0,addonBefore:void 0,allowClear:!1,bordered:!0,classNames:{},count:void 0,defaultValue:"",disabled:!1,id:void 0,maxLength:void 0,prefix:void 0,showCount:!1,status:void 0,styles:{},size:"middle",suffix:void 0,type:"text",value:"",onChange:e=>{console.log("Input changed: "+e.target.value)},onPressEnter:e=>{console.log("Enter key pressed: "+String(e))}},argTypes:{status:{control:"select",options:["warning","error"]},size:{control:"select",options:["small","medium","large"]}}},o={args:{status:"error"}},n={args:{type:"textarea"}},c={args:{size:"large"}},l={args:{size:"middle"}},u={args:{size:"small"}},i={},p={args:{addonBefore:"https://",placeholder:"Enter URL"}},d={args:{addonAfter:".com",placeholder:"Domain"}},m={args:{allowClear:!0,placeholder:"Clearable Input"}},g={args:{disabled:!0}},f={args:{maxLength:10,placeholder:"Max 10 characters"}},h={args:{prefix:"@",suffix:".com",placeholder:"Email"}},x={args:{value:"Test value"},render:(e,a)=>{const t=w.useRef(null),s=(b="start")=>{t.current?.focus({cursor:b})};return r.jsx(C,{title:a.name,children:r.jsxs(v,{orientation:"vertical",style:{width:"100%"},children:[r.jsxs(v,{wrap:!0,children:[r.jsx(S,{onClick:()=>{s("start")},children:"Focus at start"}),r.jsx(S,{onClick:()=>{s("end")},children:"Focus at last"}),r.jsx(S,{onClick:()=>{s("all")},children:"Focus to select all"})]}),r.jsx("br",{}),r.jsx(E,{...e,defaultValue:"Welcome to the Aquarium",ref:t})]})})},play:async e=>{const a=e.canvasElement.querySelector("input");await y(a).toBeInTheDocument();const t=e.canvasElement.querySelectorAll("button");await y(t.length).toBe(3);for(const s of t)a?.blur(),await B.click(s),await y(a).toHaveFocus(),a?.blur()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'textarea'
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'middle'
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    addonBefore: 'https://',
    placeholder: 'Enter URL'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    addonAfter: '.com',
    placeholder: 'Domain'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    allowClear: true,
    placeholder: 'Clearable Input'
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    maxLength: 10,
    placeholder: 'Max 10 characters'
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    prefix: '@',
    suffix: '.com',
    placeholder: 'Email'
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Test value'
  },
  render: (props, meta) => {
    const inputRef = useRef<InputRef>(null);
    const focus = (cursor: 'start' | 'end' | 'all' = 'start') => {
      inputRef.current?.focus({
        cursor
      });
    };
    return <ExampleStory title={meta.name}>
        <Space orientation="vertical" style={{
        width: '100%'
      }}>
          <Space wrap>
            <Button onClick={() => {
            focus('start');
          }}>
              Focus at start
            </Button>
            <Button onClick={() => {
            focus('end');
          }}>
              Focus at last
            </Button>
            <Button onClick={() => {
            focus('all');
          }}>
              Focus to select all
            </Button>
          </Space>
          <br />
          <Input {...props} defaultValue="Welcome to the Aquarium" ref={inputRef} />
        </Space>
      </ExampleStory>;
  },
  play: async story => {
    const input = story.canvasElement.querySelector('input');
    await expect(input).toBeInTheDocument();
    const buttons = story.canvasElement.querySelectorAll('button');
    await expect(buttons.length).toBe(3);
    for (const button of buttons) {
      input?.blur();
      await userEvent.click(button);
      await expect(input).toHaveFocus();
      input?.blur();
    }
  }
}`,...x.parameters?.docs?.source}}};const D=["Error","TextArea","Large","Middle","Small","Primary","WithHttpsBefore","WithDotComAfter","AllowClear","Disabled","WithMaxLength","WithPrefixAndSuffix","WithFocusManagement"];export{m as AllowClear,g as Disabled,o as Error,c as Large,l as Middle,i as Primary,u as Small,n as TextArea,d as WithDotComAfter,x as WithFocusManagement,p as WithHttpsBefore,f as WithMaxLength,h as WithPrefixAndSuffix,D as __namedExportsOrder,j as default};
