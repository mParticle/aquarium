var ye=Object.defineProperty,De=Object.defineProperties;var Ee=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var Oe=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var L=(o,r,s)=>r in o?ye(o,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[r]=s,e=(o,r)=>{for(var s in r||(r={}))Oe.call(r,s)&&L(o,s,r[s]);if(w)for(var s of w(r))we.call(r,s)&&L(o,s,r[s]);return o},a=(o,r)=>De(o,Ee(r));import{j as n}from"./jsx-runtime-CVnACwZl.js";import{p as l,I as Le}from"./GlobalNavigation-Cm5mBd9v.js";import"./ConfigProvider-C4rPDA4Q.js";import"./_baseClone-B3DJrZ5i.js";import{E as Ce}from"./ExampleStory-DWIM4kpW.js";import{r as xe}from"./index-3OP4wdng.js";import"./index-vcA8fjEC.js";import"./useToken-CXWLUMEq.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-B-gr4m3q.js";import"./isNativeReflectConstruct-D-r9sWlk.js";import"./row-BwvytWES.js";import"./dayjs.min-FTgVsUrW.js";import"./customParseFormat-Dfkg1z51.js";import"./LightTheme-BtoaoHMG.js";const fe=[{value:"A",label:"A",children:[{value:"B",label:"B",children:[{value:"C",label:"C"}]}]},{value:"D",label:"D",children:[{value:"E",label:"E",children:[{value:"F",label:"F"}]}]}],Ue={title:"Components/Data Entry/Cascader",component:l,args:{allowClear:!0,autoClearSearchValue:!0,autoFocus:!1,bordered:!0,changeOnSelect:!1,className:"",defaultValue:[],disabled:!1,tagRender:void 0,popupClassName:"",dropdownRender:void 0,expandIcon:void 0,expandTrigger:"click",loadData:void 0,maxTagCount:void 0,maxTagPlaceholder:void 0,maxTagTextLength:void 0,notFoundContent:"Not Found",open:void 0,options:fe,placeholder:"Placeholder Text",placement:"bottomLeft",showSearch:!1,size:void 0,status:void 0,style:{},suffixIcon:void 0,value:void 0,multiple:!1,removeIcon:void 0,searchValue:void 0,dropdownMenuColumnStyle:void 0,loadingIcon:void 0,showCheckedStrategy:l.SHOW_PARENT,fieldNames:{label:"label",value:"value",children:"children"},displayRender:(o,r)=>o.join("/"),onSearch:o=>{console.log(`Search Value: ${o}`)},onDropdownVisibleChange:o=>{console.log(`Dropdown Visible: ${o}`)},onChange:(o,r)=>{alert(`Selected Value: ${String(o)}, Selected Options: ${JSON.stringify(r)}`)},getPopupContainer:o=>document.body},argTypes:{placement:{control:"select",options:["bottomLeft","bottomRight","topLeft","topRight"]},size:{control:"select",options:["small","middle","large"]},status:{control:"select",options:["error","warning"]},showCheckedStrategy:{control:"select",options:[l.SHOW_PARENT,l.SHOW_CHILD]}}},i={},d={args:{allowClear:!0}},p={args:{autoFocus:!0}},u={args:{expandTrigger:"hover"}},m={args:{bordered:!1}},g={args:{multiple:!0}},h={args:{showSearch:!0}},b={args:{dropdownMenuColumnStyle:{minWidth:"15px",color:"blueviolet"}}},v={args:{suffixIcon:n.jsx(Le,{name:"mpLogo"})}},S={args:{displayRender:(o,r)=>o.join(" -> ")}},C={args:{disabled:!0}},x={args:{options:[{value:"A",label:"A",children:[{value:"B",label:"B",children:[{value:"C",label:"C"}]}]},{value:"D",label:"D",children:[{value:"E",label:"E",disabled:!0,children:[{value:"F",label:"F"}]}]}]}},f={args:{defaultValue:["A","B","C"]}},y={render:()=>{const[o,r]=xe.useState("Unselect");return n.jsx(n.Fragment,{children:n.jsx(Ce,{title:"Separate trigger button and result.",children:n.jsxs("span",{children:[o," ",n.jsx(l,{options:fe,onChange:(s,E)=>{r(E.map(O=>O.label).join(", "))},children:n.jsx("a",{children:"Change city"})})]})})})}},D={render:()=>{const o=[{value:"A",label:"A",isLeaf:!1},{value:"B",label:"B",isLeaf:!1}],[r,s]=xe.useState(o),E=(t,c)=>{console.log(t,c)},O=t=>{const c=t==null?void 0:t[t.length-1];setTimeout(()=>{c.children=[{label:`${c.label} Dynamic 1`,value:"dynamic1"},{label:`${c.label} Dynamic 2`,value:"dynamic2"}],s([...r])},1e3)};return n.jsx(n.Fragment,{children:n.jsx(Ce,{title:"Load options lazily with loadData.",children:n.jsx(l,{options:r,loadData:O,onChange:E,changeOnSelect:!0})})})}};var A,I,T;i.parameters=a(e({},i.parameters),{docs:a(e({},(A=i.parameters)==null?void 0:A.docs),{source:e({originalSource:"{}"},(T=(I=i.parameters)==null?void 0:I.docs)==null?void 0:T.source)})});var j,F,B;d.parameters=a(e({},d.parameters),{docs:a(e({},(j=d.parameters)==null?void 0:j.docs),{source:e({originalSource:`{
  args: {
    allowClear: true
  }
}`},(B=(F=d.parameters)==null?void 0:F.docs)==null?void 0:B.source)})});var R,P,V;p.parameters=a(e({},p.parameters),{docs:a(e({},(R=p.parameters)==null?void 0:R.docs),{source:e({originalSource:`{
  args: {
    autoFocus: true
  }
}`},(V=(P=p.parameters)==null?void 0:P.docs)==null?void 0:V.source)})});var N,$,z;u.parameters=a(e({},u.parameters),{docs:a(e({},(N=u.parameters)==null?void 0:N.docs),{source:e({originalSource:`{
  args: {
    expandTrigger: 'hover'
  }
}`},(z=($=u.parameters)==null?void 0:$.docs)==null?void 0:z.source)})});var _,H,M;m.parameters=a(e({},m.parameters),{docs:a(e({},(_=m.parameters)==null?void 0:_.docs),{source:e({originalSource:`{
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
}`},(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source)})});var Y,Z,ee;v.parameters=a(e({},v.parameters),{docs:a(e({},(Y=v.parameters)==null?void 0:Y.docs),{source:e({originalSource:`{
  args: {
    suffixIcon: <Icon name="mpLogo" />
  }
}`},(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source)})});var ae,oe,re;S.parameters=a(e({},S.parameters),{docs:a(e({},(ae=S.parameters)==null?void 0:ae.docs),{source:e({originalSource:`{
  args: {
    displayRender: (label, selectedOptions) => label.join(' -> ')
  }
}`},(re=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:re.source)})});var se,ne,te;C.parameters=a(e({},C.parameters),{docs:a(e({},(se=C.parameters)==null?void 0:se.docs),{source:e({originalSource:`{
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
}`},(ie=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:ie.source)})});var de,pe,ue;f.parameters=a(e({},f.parameters),{docs:a(e({},(de=f.parameters)==null?void 0:de.docs),{source:e({originalSource:`{
  args: {
    defaultValue: ['A', 'B', 'C']
  }
}`},(ue=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:ue.source)})});var me,ge,he;y.parameters=a(e({},y.parameters),{docs:a(e({},(me=y.parameters)==null?void 0:me.docs),{source:e({originalSource:`{
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
}`},(he=(ge=y.parameters)==null?void 0:ge.docs)==null?void 0:he.source)})});var be,ve,Se;D.parameters=a(e({},D.parameters),{docs:a(e({},(be=D.parameters)==null?void 0:be.docs),{source:e({originalSource:`{
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
}`},(Se=(ve=D.parameters)==null?void 0:ve.docs)==null?void 0:Se.source)})});const Je=["Primary","AllowClear","AutoFocus","HoverExpand","NoBorder","MultipleCascader","SearchIcon","CustomDropdownStyle","SuffixIcon","DisplayRender","Disabled","DisabledOption","DefaultValue","ExampleCustomTrigger","ExampleLazyLoad"];export{d as AllowClear,p as AutoFocus,b as CustomDropdownStyle,f as DefaultValue,C as Disabled,x as DisabledOption,S as DisplayRender,y as ExampleCustomTrigger,D as ExampleLazyLoad,u as HoverExpand,g as MultipleCascader,m as NoBorder,i as Primary,h as SearchIcon,v as SuffixIcon,Je as __namedExportsOrder,Ue as default};