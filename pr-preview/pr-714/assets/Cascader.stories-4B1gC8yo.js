import{aH as s,j as a,I as L,y as D}from"./iframe-D7Ys59RG.js";import{E}from"./ExampleStory-KHWp24Wn.js";const w=[{value:"A",label:"A",children:[{value:"B",label:"B",children:[{value:"C",label:"C"}]}]},{value:"D",label:"D",children:[{value:"E",label:"E",children:[{value:"F",label:"F"}]}]}],A={title:"Components/Not Prod Ready/Data Entry/Cascader",component:s,args:{allowClear:!0,autoClearSearchValue:!0,autoFocus:!1,bordered:!0,changeOnSelect:!1,className:"",defaultValue:[],disabled:!1,tagRender:void 0,popupClassName:"",dropdownRender:void 0,expandIcon:void 0,expandTrigger:"click",loadData:void 0,maxTagCount:void 0,maxTagPlaceholder:void 0,maxTagTextLength:void 0,notFoundContent:"Not Found",open:void 0,options:w,placeholder:"Placeholder Text",placement:"bottomLeft",showSearch:!1,size:void 0,status:void 0,style:{},suffixIcon:void 0,value:void 0,multiple:!1,removeIcon:void 0,searchValue:void 0,dropdownMenuColumnStyle:void 0,loadingIcon:void 0,showCheckedStrategy:s.SHOW_PARENT,fieldNames:{label:"label",value:"value",children:"children"},displayRender:(e,o)=>e.join("/"),onSearch:e=>{console.log(`Search Value: ${e}`)},onOpenChange:e=>{console.log(`Dropdown Visible: ${e}`)},onChange:(e,o)=>{alert(`Selected Value: ${String(e)}, Selected Options: ${JSON.stringify(o)}`)},getPopupContainer:e=>document.body},argTypes:{placement:{control:"select",options:["bottomLeft","bottomRight","topLeft","topRight"]},size:{control:"select",options:["small","middle","large"]},status:{control:"select",options:["error","warning"]},showCheckedStrategy:{control:"select",options:[s.SHOW_PARENT,s.SHOW_CHILD]}}},n={},t={args:{allowClear:!0}},l={args:{autoFocus:!0}},c={args:{expandTrigger:"hover"}},i={args:{bordered:!1}},d={args:{multiple:!0}},p={args:{showSearch:!0}},u={args:{dropdownMenuColumnStyle:{minWidth:"15px",color:"blueviolet"}}},m={args:{suffixIcon:a.jsx(L,{name:"mpLogo"})}},g={args:{displayRender:(e,o)=>e.join(" -> ")}},h={args:{disabled:!0}},b={args:{options:[{value:"A",label:"A",children:[{value:"B",label:"B",children:[{value:"C",label:"C"}]}]},{value:"D",label:"D",children:[{value:"E",label:"E",disabled:!0,children:[{value:"F",label:"F"}]}]}]}},S={args:{defaultValue:["A","B","C"]}},v={render:()=>{const[e,o]=D.useState("Unselect");return a.jsx(a.Fragment,{children:a.jsx(E,{title:"Separate trigger button and result.",children:a.jsxs("span",{children:[e," ",a.jsx(s,{options:w,onChange:(O,y)=>{o(y.map(f=>f.label).join(", "))},children:a.jsx("a",{children:"Change city"})})]})})})}},C={render:()=>{const e=[{value:"A",label:"A",isLeaf:!1},{value:"B",label:"B",isLeaf:!1}],[o,O]=D.useState(e),y=(x,r)=>{console.log(x,r)},f=x=>{const r=x?.[x.length-1];r&&setTimeout(()=>{r.children=[{label:`${r.label} Dynamic 1`,value:"dynamic1"},{label:`${r.label} Dynamic 2`,value:"dynamic2"}],O([...o])},1e3)};return a.jsx(a.Fragment,{children:a.jsx(E,{title:"Load options lazily with loadData.",children:a.jsx(s,{options:o,loadData:f,onChange:y,changeOnSelect:!0})})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    allowClear: true
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    autoFocus: true
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    expandTrigger: 'hover'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: false
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: true
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    showSearch: true
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    dropdownMenuColumnStyle: {
      minWidth: '15px',
      color: 'blueviolet'
    }
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    suffixIcon: <Icon name="mpLogo" />
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    displayRender: (label, _selectedOptions) => label.join(' -> ')
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      value: 'A',
      label: 'A',
      children: [{
        value: 'B',
        label: 'B',
        children: [{
          value: 'C',
          label: 'C'
        }]
      }]
    }, {
      value: 'D',
      label: 'D',
      children: [{
        value: 'E',
        label: 'E',
        disabled: true,
        children: [{
          value: 'F',
          label: 'F'
        }]
      }]
    }]
  }
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ['A', 'B', 'C']
  }
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [text, setText] = useState('Unselect');
    return <>
        <ExampleStory title="Separate trigger button and result.">
          <span>
            {text}
            &nbsp;
            <Cascader options={options} onChange={(_, selectedOptions) => {
            setText(selectedOptions.map(o => o.label).join(', '));
          }}>
              <a>Change city</a>
            </Cascader>
          </span>
        </ExampleStory>
      </>;
  }
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const optionLists: ICascaderProps['options'] = [{
      value: 'A',
      label: 'A',
      isLeaf: false
    }, {
      value: 'B',
      label: 'B',
      isLeaf: false
    }];
    const [options, setOptions] = useState<ICascaderProps['options']>(optionLists);
    const onChange = (value: Array<string | number>, selectedOptions: ICascaderProps['options']) => {
      console.log(value, selectedOptions);
    };
    const loadData = (selectedOptions: ICascaderProps['options']) => {
      const targetOption = selectedOptions?.[selectedOptions.length - 1];
      if (!targetOption) return;

      // load options lazily
      setTimeout(() => {
        targetOption.children = [{
          label: \`\${targetOption.label} Dynamic 1\`,
          value: 'dynamic1'
        }, {
          label: \`\${targetOption.label} Dynamic 2\`,
          value: 'dynamic2'
        }];
        setOptions([...(options as [])]);
      }, 1000);
    };
    return <>
        <ExampleStory title="Load options lazily with loadData.">
          <Cascader options={options} loadData={loadData} onChange={onChange} changeOnSelect />
        </ExampleStory>
      </>;
  }
}`,...C.parameters?.docs?.source}}};const T=["Primary","AllowClear","AutoFocus","HoverExpand","NoBorder","MultipleCascader","SearchIcon","CustomDropdownStyle","SuffixIcon","DisplayRender","Disabled","DisabledOption","DefaultValue","ExampleCustomTrigger","ExampleLazyLoad"],F=Object.freeze(Object.defineProperty({__proto__:null,AllowClear:t,AutoFocus:l,CustomDropdownStyle:u,DefaultValue:S,Disabled:h,DisabledOption:b,DisplayRender:g,ExampleCustomTrigger:v,ExampleLazyLoad:C,HoverExpand:c,MultipleCascader:d,NoBorder:i,Primary:n,SearchIcon:p,SuffixIcon:m,__namedExportsOrder:T,default:A},Symbol.toStringTag,{value:"Module"}));export{F as C,A as m};
