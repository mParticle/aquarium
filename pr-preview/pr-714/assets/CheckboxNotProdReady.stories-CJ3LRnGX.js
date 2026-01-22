import{j as n}from"./jsx-runtime-u17CrQMm.js";import{q as h,k as g}from"./UnauthorizedTooltip-DInzTCbR.js";import"./ErrorStateIcon-N5tZzBSe.js";import"./SuccessStateIcon-jdQomLYr.js";import"./WarningStateIcon-BOAINRnk.js";import{r as m}from"./iframe-DPsSDxI5.js";import{E as x}from"./ExampleStory-D9NFb6Ax.js";import"./LightTheme-BtoaoHMG.js";import"./row-D3EgDzJn.js";import"./Context-BfWCYYV6.js";import"./useToken-D3WBQzQr.js";import"./presets-C7IxLGBr.js";import"./index-C_XAaiqg.js";import"./index-BkHrRISK.js";import"./AntdIcon-DQ0RjuI5.js";import"./style-C-7nCLOl.js";import"./client-Bm7MYF5w.js";import"./WarningFilled-DE1WQ37c.js";import"./preload-helper-PPVm8Dsz.js";const{userEvent:f}=__STORYBOOK_MODULE_TEST__,{expect:d}=__STORYBOOK_MODULE_TEST__,K={title:"Components/Not Prod Ready/Data Entry/Checkbox",component:e=>{const[t,c]=m.useState(e.checked??e.defaultChecked??!1);return n.jsx(h,{...e,checked:t,onChange:l=>{c(!t)}})},args:{autoFocus:!1,checked:!1,defaultChecked:!1,disabled:!1,indeterminate:!1,onChange:e=>{alert(`checked = ${e.target.checked}`)}}},r={args:{autoFocus:!0}},a={args:{defaultChecked:!0}},o={args:{disabled:!0}},s={args:{indeterminate:!0}},i={render:()=>{const e=["A","B","C"],t=["A","C"],[c,l]=m.useState(t),p=e.length===c.length,k=c.length>0&&c.length<e.length,u=C=>{l(C.target.checked?e:[])};return n.jsx(n.Fragment,{children:n.jsxs(x,{title:"The `indeterminate` property can help achieve a 'check all' effect.",children:[n.jsx(h,{indeterminate:k,checked:p,onChange:u,children:"Check all"}),n.jsx(g,{}),n.jsx(h.Group,{options:e,value:c,onChange:l})]})})},play:async e=>{d(e.canvasElement.querySelectorAll(".ant-checkbox-checked").length).toBe(2);const t=e.canvasElement.querySelector(".ant-checkbox-indeterminate");if(t)await f.click(t);else throw new Error("Checkbox Indeterminate not found");d(e.canvasElement.querySelectorAll(".ant-checkbox-checked").length).toBe(4)}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    autoFocus: true
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const plainOptions = ['A', 'B', 'C'];
    const defaultCheckedList = ['A', 'C'];
    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList);
    const checkAll = plainOptions.length === checkedList.length;
    const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;
    const onCheckAllChange: ICheckboxProps['onChange'] = e => {
      setCheckedList(e.target.checked ? plainOptions : []);
    };
    return <>
        <ExampleStory title="The \`indeterminate\` property can help achieve a 'check all' effect.">
          <Checkbox indeterminate={indeterminate} checked={checkAll} onChange={onCheckAllChange}>
            Check all
          </Checkbox>
          <Divider />
          <Checkbox.Group options={plainOptions} value={checkedList} onChange={setCheckedList} />
        </ExampleStory>
      </>;
  },
  play: async context => {
    void expect(context.canvasElement.querySelectorAll('.ant-checkbox-checked').length).toBe(2);
    const checkboxIndeterminate = context.canvasElement.querySelector('.ant-checkbox-indeterminate');
    if (checkboxIndeterminate) {
      await userEvent.click(checkboxIndeterminate);
    } else {
      throw new Error('Checkbox Indeterminate not found');
    }
    void expect(context.canvasElement.querySelectorAll('.ant-checkbox-checked').length).toBe(4);
  }
}`,...i.parameters?.docs?.source}}};const M=["WithAutoFocus","DefaultChecked","Disabled","Indeterminate","ExampleCheckAll"];export{a as DefaultChecked,o as Disabled,i as ExampleCheckAll,s as Indeterminate,r as WithAutoFocus,M as __namedExportsOrder,K as default};
