var fe=Object.defineProperty,De=Object.defineProperties;var Oe=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var Ee=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var L=(o,r,s)=>r in o?fe(o,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[r]=s,e=(o,r)=>{for(var s in r||(r={}))Ee.call(r,s)&&L(o,s,r[s]);if(w)for(var s of w(r))we.call(r,s)&&L(o,s,r[s]);return o},a=(o,r)=>De(o,Oe(r));import{j as n}from"./jsx-runtime-C9TrHvcC.js";import{s as l,I as Le}from"./UnauthorizedTooltip-B9POMJD1.js";import"./ErrorStateIcon-DkRO_jVf.js";import"./SuccessStateIcon-BsHb_NtW.js";import"./WarningStateIcon-UE2i1S7-.js";import"./_baseClone-DwBCp-Ss.js";import{E as Ce}from"./ExampleStory-DlMQibgI.js";import{r as xe}from"./index-3OP4wdng.js";const ye=[{value:"A",label:"A",children:[{value:"B",label:"B",children:[{value:"C",label:"C"}]}]},{value:"D",label:"D",children:[{value:"E",label:"E",children:[{value:"F",label:"F"}]}]}],Ae={title:"Components/Not Prod Ready/Data Entry/Cascader",component:l,args:{allowClear:!0,autoClearSearchValue:!0,autoFocus:!1,bordered:!0,changeOnSelect:!1,className:"",defaultValue:[],disabled:!1,tagRender:void 0,popupClassName:"",dropdownRender:void 0,expandIcon:void 0,expandTrigger:"click",loadData:void 0,maxTagCount:void 0,maxTagPlaceholder:void 0,maxTagTextLength:void 0,notFoundContent:"Not Found",open:void 0,options:ye,placeholder:"Placeholder Text",placement:"bottomLeft",showSearch:!1,size:void 0,status:void 0,style:{},suffixIcon:void 0,value:void 0,multiple:!1,removeIcon:void 0,searchValue:void 0,dropdownMenuColumnStyle:void 0,loadingIcon:void 0,showCheckedStrategy:l.SHOW_PARENT,fieldNames:{label:"label",value:"value",children:"children"},displayRender:(o,r)=>o.join("/"),onSearch:o=>{console.log(`Search Value: ${o}`)},onDropdownVisibleChange:o=>{console.log(`Dropdown Visible: ${o}`)},onChange:(o,r)=>{alert(`Selected Value: ${String(o)}, Selected Options: ${JSON.stringify(r)}`)},getPopupContainer:o=>document.body},argTypes:{placement:{control:"select",options:["bottomLeft","bottomRight","topLeft","topRight"]},size:{control:"select",options:["small","middle","large"]},status:{control:"select",options:["error","warning"]},showCheckedStrategy:{control:"select",options:[l.SHOW_PARENT,l.SHOW_CHILD]}}},i={},d={args:{allowClear:!0}},p={args:{autoFocus:!0}},u={args:{expandTrigger:"hover"}},m={args:{bordered:!1}},g={args:{multiple:!0}},h={args:{showSearch:!0}},b={args:{dropdownMenuColumnStyle:{minWidth:"15px",color:"blueviolet"}}},S={args:{suffixIcon:n.jsx(Le,{name:"mpLogo"})}},v={args:{displayRender:(o,r)=>o.join(" -> ")}},C={args:{disabled:!0}},x={args:{options:[{value:"A",label:"A",children:[{value:"B",label:"B",children:[{value:"C",label:"C"}]}]},{value:"D",label:"D",children:[{value:"E",label:"E",disabled:!0,children:[{value:"F",label:"F"}]}]}]}},y={args:{defaultValue:["A","B","C"]}},f={render:()=>{const[o,r]=xe.useState("Unselect");return n.jsx(n.Fragment,{children:n.jsx(Ce,{title:"Separate trigger button and result.",children:n.jsxs("span",{children:[o," ",n.jsx(l,{options:ye,onChange:(s,O)=>{r(O.map(E=>E.label).join(", "))},children:n.jsx("a",{children:"Change city"})})]})})})}},D={render:()=>{const o=[{value:"A",label:"A",isLeaf:!1},{value:"B",label:"B",isLeaf:!1}],[r,s]=xe.useState(o),O=(t,c)=>{console.log(t,c)},E=t=>{const c=t==null?void 0:t[t.length-1];setTimeout(()=>{c.children=[{label:`${c.label} Dynamic 1`,value:"dynamic1"},{label:`${c.label} Dynamic 2`,value:"dynamic2"}],s([...r])},1e3)};return n.jsx(n.Fragment,{children:n.jsx(Ce,{title:"Load options lazily with loadData.",children:n.jsx(l,{options:r,loadData:E,onChange:O,changeOnSelect:!0})})})}};var A,T,j;i.parameters=a(e({},i.parameters),{docs:a(e({},(A=i.parameters)==null?void 0:A.docs),{source:e({originalSource:"{}"},(j=(T=i.parameters)==null?void 0:T.docs)==null?void 0:j.source)})});var I,F,B;d.parameters=a(e({},d.parameters),{docs:a(e({},(I=d.parameters)==null?void 0:I.docs),{source:e({originalSource:`{
  args: {
    allowClear: true
  }
}`},(B=(F=d.parameters)==null?void 0:F.docs)==null?void 0:B.source)})});var P,R,N;p.parameters=a(e({},p.parameters),{docs:a(e({},(P=p.parameters)==null?void 0:P.docs),{source:e({originalSource:`{
  args: {
    autoFocus: true
  }
}`},(N=(R=p.parameters)==null?void 0:R.docs)==null?void 0:N.source)})});var V,_,z;u.parameters=a(e({},u.parameters),{docs:a(e({},(V=u.parameters)==null?void 0:V.docs),{source:e({originalSource:`{
  args: {
    expandTrigger: 'hover'
  }
}`},(z=(_=u.parameters)==null?void 0:_.docs)==null?void 0:z.source)})});var $,H,M;m.parameters=a(e({},m.parameters),{docs:a(e({},($=m.parameters)==null?void 0:$.docs),{source:e({originalSource:`{
  args: {
    bordered: false
  }
}`},(M=(H=m.parameters)==null?void 0:H.docs)==null?void 0:M.source)})});var W,k,U;g.parameters=a(e({},g.parameters),{docs:a(e({},(W=g.parameters)==null?void 0:W.docs),{source:e({originalSource:`{
  args: {
    multiple: true
  }
}`},(U=(k=g.parameters)==null?void 0:k.docs)==null?void 0:U.source)})});var J,q,G;h.parameters=a(e({},h.parameters),{docs:a(e({},(J=h.parameters)==null?void 0:J.docs),{source:e({originalSource:`{
  args: {
    showSearch: true
  }
}`},(G=(q=h.parameters)==null?void 0:q.docs)==null?void 0:G.source)})});var K,Q,X;b.parameters=a(e({},b.parameters),{docs:a(e({},(K=b.parameters)==null?void 0:K.docs),{source:e({originalSource:`{
  args: {
    dropdownMenuColumnStyle: {
      minWidth: '15px',
      color: 'blueviolet'
    }
  }
}`},(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source)})});var Y,Z,ee;S.parameters=a(e({},S.parameters),{docs:a(e({},(Y=S.parameters)==null?void 0:Y.docs),{source:e({originalSource:`{
  args: {
    suffixIcon: <Icon name="mpLogo" />
  }
}`},(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source)})});var ae,oe,re;v.parameters=a(e({},v.parameters),{docs:a(e({},(ae=v.parameters)==null?void 0:ae.docs),{source:e({originalSource:`{
  args: {
    displayRender: (label, selectedOptions) => label.join(' -> ')
  }
}`},(re=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:re.source)})});var se,ne,te;C.parameters=a(e({},C.parameters),{docs:a(e({},(se=C.parameters)==null?void 0:se.docs),{source:e({originalSource:`{
  args: {
    disabled: true
  }
}`},(te=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:te.source)})});var le,ce,ie;x.parameters=a(e({},x.parameters),{docs:a(e({},(le=x.parameters)==null?void 0:le.docs),{source:e({originalSource:`{
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
}`},(ie=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:ie.source)})});var de,pe,ue;y.parameters=a(e({},y.parameters),{docs:a(e({},(de=y.parameters)==null?void 0:de.docs),{source:e({originalSource:`{
  args: {
    defaultValue: ['A', 'B', 'C']
  }
}`},(ue=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:ue.source)})});var me,ge,he;f.parameters=a(e({},f.parameters),{docs:a(e({},(me=f.parameters)==null?void 0:me.docs),{source:e({originalSource:`{
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
}`},(he=(ge=f.parameters)==null?void 0:ge.docs)==null?void 0:he.source)})});var be,Se,ve;D.parameters=a(e({},D.parameters),{docs:a(e({},(be=D.parameters)==null?void 0:be.docs),{source:e({originalSource:`{
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
}`},(ve=(Se=D.parameters)==null?void 0:Se.docs)==null?void 0:ve.source)})});const Te=["Primary","AllowClear","AutoFocus","HoverExpand","NoBorder","MultipleCascader","SearchIcon","CustomDropdownStyle","SuffixIcon","DisplayRender","Disabled","DisabledOption","DefaultValue","ExampleCustomTrigger","ExampleLazyLoad"],ze=Object.freeze(Object.defineProperty({__proto__:null,AllowClear:d,AutoFocus:p,CustomDropdownStyle:b,DefaultValue:y,Disabled:C,DisabledOption:x,DisplayRender:v,ExampleCustomTrigger:f,ExampleLazyLoad:D,HoverExpand:u,MultipleCascader:g,NoBorder:m,Primary:i,SearchIcon:h,SuffixIcon:S,__namedExportsOrder:Te,default:Ae},Symbol.toStringTag,{value:"Module"}));export{ze as C,Ae as m};
