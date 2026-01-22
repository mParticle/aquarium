import{j as r}from"./jsx-runtime-u17CrQMm.js";import{l as E,S as v,a as S}from"./UnauthorizedTooltip-DInzTCbR.js";import"./ErrorStateIcon-N5tZzBSe.js";import"./SuccessStateIcon-jdQomLYr.js";import"./WarningStateIcon-BOAINRnk.js";import{E as w}from"./ExampleStory-D9NFb6Ax.js";import{r as C}from"./iframe-DPsSDxI5.js";import"./LightTheme-BtoaoHMG.js";import"./row-D3EgDzJn.js";import"./Context-BfWCYYV6.js";import"./useToken-D3WBQzQr.js";import"./presets-C7IxLGBr.js";import"./index-C_XAaiqg.js";import"./index-BkHrRISK.js";import"./AntdIcon-DQ0RjuI5.js";import"./style-C-7nCLOl.js";import"./client-Bm7MYF5w.js";import"./WarningFilled-DE1WQ37c.js";import"./preload-helper-PPVm8Dsz.js";const{expect:y,userEvent:B}=__STORYBOOK_MODULE_TEST__,N={title:"Components/Not Prod Ready/Data Entry/Input",component:E,args:{placeholder:"Input Placeholder",addonAfter:void 0,addonBefore:void 0,allowClear:!1,bordered:!0,classNames:{},count:void 0,defaultValue:"",disabled:!1,id:void 0,maxLength:void 0,prefix:void 0,showCount:!1,status:void 0,styles:{},size:"middle",suffix:void 0,type:"text",value:"",onChange:e=>{console.log("Input changed: "+e.target.value)},onPressEnter:e=>{console.log("Enter key pressed: "+String(e))}},argTypes:{status:{control:"select",options:["warning","error"]},size:{control:"select",options:["small","medium","large"]}}},s={args:{status:"error"}},n={args:{type:"textarea"}},c={args:{size:"large"}},l={args:{size:"middle"}},i={args:{size:"small"}},u={},p={args:{addonBefore:"https://",placeholder:"Enter URL"}},m={args:{addonAfter:".com",placeholder:"Domain"}},d={args:{allowClear:!0,placeholder:"Clearable Input"}},g={args:{disabled:!0}},f={args:{maxLength:10,placeholder:"Max 10 characters"}},h={args:{prefix:"@",suffix:".com",placeholder:"Email"}},x={args:{value:"Test value"},render:(e,t)=>{const a=C.useRef(null),o=(b="start")=>{a.current?.focus({cursor:b})};return r.jsx(w,{title:t.name,children:r.jsxs(v,{orientation:"vertical",style:{width:"100%"},children:[r.jsxs(v,{wrap:!0,children:[r.jsx(S,{onClick:()=>{o("start")},children:"Focus at start"}),r.jsx(S,{onClick:()=>{o("end")},children:"Focus at last"}),r.jsx(S,{onClick:()=>{o("all")},children:"Focus to select all"})]}),r.jsx("br",{}),r.jsx(E,{...e,defaultValue:"Welcome to the Aquarium",ref:a})]})})},play:async e=>{const t=e.canvasElement.querySelector("input");await y(t).toBeInTheDocument();const a=e.canvasElement.querySelectorAll("button");await y(a.length).toBe(3);for(const o of a)t?.blur(),await B.click(o),await y(t).toHaveFocus(),t?.blur()}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    addonBefore: 'https://',
    placeholder: 'Enter URL'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    addonAfter: '.com',
    placeholder: 'Domain'
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    allowClear: true,
    placeholder: 'Clearable Input'
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const K=["Error","TextArea","Large","Middle","Small","Primary","WithHttpsBefore","WithDotComAfter","AllowClear","Disabled","WithMaxLength","WithPrefixAndSuffix","WithFocusManagement"];export{d as AllowClear,g as Disabled,s as Error,c as Large,l as Middle,u as Primary,i as Small,n as TextArea,m as WithDotComAfter,x as WithFocusManagement,p as WithHttpsBefore,f as WithMaxLength,h as WithPrefixAndSuffix,K as __namedExportsOrder,N as default};
