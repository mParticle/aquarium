import{y as k,j as n,N as d,x as g}from"./iframe-D7Ys59RG.js";import{E as x}from"./ExampleStory-KHWp24Wn.js";import"./preload-helper-PPVm8Dsz.js";const{userEvent:f}=__STORYBOOK_MODULE_TEST__,{expect:i}=__STORYBOOK_MODULE_TEST__,y={title:"Components/Not Prod Ready/Data Entry/Checkbox",component:e=>{const[t,c]=k.useState(e.checked??e.defaultChecked??!1);return n.jsx(d,{...e,checked:t,onChange:h=>{c(!t)}})},args:{autoFocus:!1,checked:!1,defaultChecked:!1,disabled:!1,indeterminate:!1,onChange:e=>{alert(`checked = ${e.target.checked}`)}}},a={args:{autoFocus:!0}},r={args:{defaultChecked:!0}},o={args:{disabled:!0}},s={args:{indeterminate:!0}},l={render:()=>{const e=["A","B","C"],t=["A","C"],[c,h]=k.useState(t),u=e.length===c.length,m=c.length>0&&c.length<e.length,p=C=>{h(C.target.checked?e:[])};return n.jsx(n.Fragment,{children:n.jsxs(x,{title:"The `indeterminate` property can help achieve a 'check all' effect.",children:[n.jsx(d,{indeterminate:m,checked:u,onChange:p,children:"Check all"}),n.jsx(g,{}),n.jsx(d.Group,{options:e,value:c,onChange:h})]})})},play:async e=>{i(e.canvasElement.querySelectorAll(".ant-checkbox-checked").length).toBe(2);const t=e.canvasElement.querySelector(".ant-checkbox-indeterminate");if(t)await f.click(t);else throw new Error("Checkbox Indeterminate not found");i(e.canvasElement.querySelectorAll(".ant-checkbox-checked").length).toBe(4)}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    autoFocus: true
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const v=["WithAutoFocus","DefaultChecked","Disabled","Indeterminate","ExampleCheckAll"];export{r as DefaultChecked,o as Disabled,l as ExampleCheckAll,s as Indeterminate,a as WithAutoFocus,v as __namedExportsOrder,y as default};
