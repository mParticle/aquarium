var Pe=Object.defineProperty,Ee=Object.defineProperties;var Oe=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var ke=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable;var T=(t,o,s)=>o in t?Pe(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s,n=(t,o)=>{for(var s in o||(o={}))ke.call(o,s)&&T(t,s,o[s]);if(z)for(var s of z(o))Ie.call(o,s)&&T(t,s,o[s]);return t},r=(t,o)=>Ee(t,Oe(o));import{j as e}from"./jsx-runtime-BcCOBRXo.js";import{r as m}from"./index-CNk6hRaE.js";import{z as u,c as F,b as Ve,I as fe,F as je}from"./GlobalNavigation-DgsMOKTE.js";import"./_baseClone-u1J3oOXU.js";import{E as g}from"./ExampleStory-9o0ONgm-.js";const V=[{label:"The quick brown fox jumps over the lazy dog",value:1},{label:"Waxy and quivering, jocks fumble the pizza",value:2},{label:"When zombies arrive, quickly fax judge Pat",value:3},{label:"Pack my red box with five dozen quality jugs",value:4},{label:"The quick onyx goblin jumps over the lazy dwarf",value:5}],Fe={title:"Components/Data Entry/Auto Complete",component:t=>{const[o,s]=m.useState(""),[c,l]=m.useState([]),p=d=>d?V.filter(S=>S.label.toLowerCase().includes(d.toLowerCase())):[],a=d=>{l(p(d))},h=d=>{console.log("you selected value: "+d)};return e.jsx(e.Fragment,{children:e.jsx(u,r(n({},t),{value:o,options:c,onSelect:h,onSearch:a,onChange:s}))})},args:{allowClear:!1,autoFocus:!1,backfill:!1,bordered:!0,defaultActiveFirstOption:!0,options:V,defaultOpen:void 0,defaultValue:void 0,disabled:!1,popupClassName:void 0,open:void 0,placeholder:"Search AutoComplete",status:void 0,style:{width:200},value:void 0,onBlur:()=>{console.log("Blur Event")},onChange:t=>{alert(`Selected Value: ${t}`)},onDropdownVisibleChange:t=>{console.log(`Dropdown Open: ${t}`)},onFocus:()=>{console.log("Focus Event")},onSearch:t=>{alert(`Search Value: ${t}`)},onSelect:(t,o)=>{alert(`Selected Value: ${t}, Option: ${String(o.label)}`)},onClear:()=>{alert("Clear Event")}},argTypes:{status:{control:"select",options:["error","warning"]}}},x={},y={args:{allowClear:!0}},C={args:{placeholder:"Custom Placeholder Text"}},b={args:{disabled:!0}},w={args:{notFoundContent:e.jsx(e.Fragment,{children:"Custom Not Found Component goes here"})}},A={args:{bordered:!1}},f={render:()=>{const[t,o]=m.useState(""),[s,c]=m.useState([]),[l,p]=m.useState([]),a=(i,ve=1)=>({value:i.repeat(ve)}),h=i=>i?[a(i),a(i,2),a(i,3)]:[],d=i=>{alert("onSelect:"+i)},S=i=>{o(i)};return e.jsx(e.Fragment,{children:e.jsxs(g,{title:"Basic Usage, set data source of autocomplete with options property.",children:[e.jsx(u,{options:s,style:{width:200},onSelect:d,onSearch:i=>{c(h(i))},placeholder:"input here"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(u,{value:t,options:l,style:{width:200},onSelect:d,onSearch:i=>{p(h(i))},onChange:S,placeholder:"control mode"})]})})}},j={render:()=>{const[t,o]=m.useState([]),s=c=>{let l;!c||c.includes("@")?l=[]:l=["gmail.com","163.com","qq.com"].map(p=>({value:c,label:`${c}@${p}`})),o(l)};return e.jsx(e.Fragment,{children:e.jsx(g,{title:"You could set custom Option label.",children:e.jsx(u,{style:{width:200},onSearch:s,placeholder:"input here",options:t})})})}},v={render:()=>{const[t,o]=m.useState([]),s=p=>{o(p?[{value:p},{value:p+p},{value:p+p+p}]:[])},c=p=>{console.log("handleKeyPress",p)},l=p=>{alert("selected: "+p)};return e.jsx(g,{title:"Customize Input Component",children:e.jsx(u,{options:t,style:{width:200},onSelect:l,onSearch:s,children:e.jsx(F.TextArea,{placeholder:"input here",className:"custom",style:{height:50},onKeyPress:c})})})}},P={render:()=>e.jsx(e.Fragment,{children:e.jsx(g,{title:"A non-case-sensitive AutoComplete.",children:e.jsx(u,{style:{width:200},options:V.map(t=>r(n({},t),{label:t.label.toUpperCase()})),placeholder:"try to type `b`",filterOption:(t,o)=>{var s,c;return(c=(s=o==null?void 0:o.label)==null?void 0:s.toString().toUpperCase().includes(t.toUpperCase()))!=null?c:!1}})})})},E={render:()=>{const t=c=>e.jsxs("span",{children:[c,e.jsx("a",{style:{float:"right"},href:"https://www.google.com/search?q=antd",target:"_blank",rel:"noopener noreferrer",children:"more"})]}),o=(c,l)=>({value:c,label:e.jsxs(je,{justify:"space-between",children:[c,e.jsxs("span",{children:[e.jsx(fe,{name:"mpLogo"}),l]})]})}),s=[{label:t("Libraries"),options:[o("AntDesign",1e4),o("AntDesign UI",10600)]},{label:t("Solutions"),options:[o("AntDesign UI FAQ",60100),o("AntDesign FAQ",30010)]},{label:t("Articles"),options:[o("AntDesign design language",1e5)]}];return e.jsx(e.Fragment,{children:e.jsx(g,{title:e.jsxs(e.Fragment,{children:["Demonstration of"," ",e.jsx("a",{href:"https://ant.design/docs/spec/reaction/#lookup-patterns",target:"_blank",rel:"noreferrer",children:"Lookup Patterns: Certain Category"}),"Basic Usage, set options of autocomplete with options property."]}),children:e.jsx(u,{popupClassName:"certain-category-search-dropdown",popupMatchSelectWidth:500,style:{width:250},options:s,size:"large",children:e.jsx(F.Search,{size:"large",placeholder:"input here"})})})})}},O={render:()=>{const t=(a,h=0)=>Math.floor(Math.random()*(a-h+1))+h,o=a=>new Array(t(5)).join(".").split(".").map((h,d)=>{const S=`${a}${d}`;return{value:S,label:e.jsxs(je,{justify:"space-between",children:[e.jsxs("span",{children:["Found ",a," on"," ",e.jsx("a",{href:`https://s.taobao.com/search?q=${a}`,target:"_blank",rel:"noopener noreferrer",children:S})]}),e.jsxs("span",{children:[t(200,100)," results"]})]})}}),[s,c]=m.useState([]),l=a=>{c(a!==""?o(a):[])},p=a=>{alert("selected: "+a)};return e.jsx(e.Fragment,{children:e.jsx(g,{title:e.jsxs(e.Fragment,{children:["Demonstration of"," ",e.jsx("a",{href:"https://ant.design/docs/spec/reaction#lookup-patterns",target:"_blank",rel:"noreferrer",children:"Lookup Patterns: Certain Category"}),"Basic Usage, set options of autocomplete with options property."]}),children:e.jsx(u,{popupMatchSelectWidth:252,style:{width:300},options:s,onSelect:p,onSearch:l,size:"large",children:e.jsx(F.Search,{size:"large",placeholder:"input here",enterButton:!0})})})})}},k={render:()=>{const t=(a,h=1)=>({value:a.repeat(h)}),[o,s]=m.useState([]),[c,l]=m.useState([]),p=a=>a?[t(a),t(a,2),t(a,3)]:[];return e.jsx(g,{title:"Add status to AutoComplete with status, which could be error or warning.",children:e.jsxs(Ve,{direction:"vertical",style:{width:"100%"},children:[e.jsx(u,{placeholder:"Error",options:o,onSearch:a=>{s(p(a))},status:"error",style:{width:200}}),e.jsx(u,{placeholder:"Warning",options:c,onSearch:a=>{l(p(a))},status:"warning",style:{width:200}})]})})}},I={render:()=>{const t=(l,p=1)=>({value:l.repeat(p)}),[o,s]=m.useState([]),c=l=>l?[t(l),t(l,2),t(l,3)]:[];return e.jsx(e.Fragment,{children:e.jsxs(g,{title:"Customize clear button",children:[e.jsx(u,{options:o,style:{width:200},onSearch:l=>{s(c(l))},placeholder:"No clear icon",allowClear:!1}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(u,{options:o,style:{width:200},onSearch:l=>{s(c(l))},placeholder:"Customized clear icon",allowClear:{clearIcon:e.jsx(fe,{name:"mpLogo"})}})]})})}};var D,B,U;x.parameters=r(n({},x.parameters),{docs:r(n({},(D=x.parameters)==null?void 0:D.docs),{source:n({originalSource:"{}"},(U=(B=x.parameters)==null?void 0:B.docs)==null?void 0:U.source)})});var L,_,q;y.parameters=r(n({},y.parameters),{docs:r(n({},(L=y.parameters)==null?void 0:L.docs),{source:n({originalSource:`{
  args: {
    allowClear: true
  }
}`},(q=(_=y.parameters)==null?void 0:_.docs)==null?void 0:q.source)})});var $,N,M;C.parameters=r(n({},C.parameters),{docs:r(n({},($=C.parameters)==null?void 0:$.docs),{source:n({originalSource:`{
  args: {
    placeholder: 'Custom Placeholder Text'
  }
}`},(M=(N=C.parameters)==null?void 0:N.docs)==null?void 0:M.source)})});var R,K,W;b.parameters=r(n({},b.parameters),{docs:r(n({},(R=b.parameters)==null?void 0:R.docs),{source:n({originalSource:`{
  args: {
    disabled: true
  }
}`},(W=(K=b.parameters)==null?void 0:K.docs)==null?void 0:W.source)})});var Q,Y,H;w.parameters=r(n({},w.parameters),{docs:r(n({},(Q=w.parameters)==null?void 0:Q.docs),{source:n({originalSource:`{
  args: {
    notFoundContent: <>Custom Not Found Component goes here</>
  }
}`},(H=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:H.source)})});var G,J,X;A.parameters=r(n({},A.parameters),{docs:r(n({},(G=A.parameters)==null?void 0:G.docs),{source:n({originalSource:`{
  args: {
    bordered: false
  }
}`},(X=(J=A.parameters)==null?void 0:J.docs)==null?void 0:X.source)})});var Z,ee,te;f.parameters=r(n({},f.parameters),{docs:r(n({},(Z=f.parameters)==null?void 0:Z.docs),{source:n({originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const [options, setOptions] = useState<IAutoCompleteProps['options']>([]);
    const [anotherOptions, setAnotherOptions] = useState<IAutoCompleteProps['options']>([]);
    const mockVal = (str: string, repeat = 1) => ({
      value: str.repeat(repeat)
    });
    const getPanelValue = (searchText: string) => !searchText ? [] : ([mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)] as IAutoCompleteProps['options']);
    const onSelect = (data: string) => {
      alert('onSelect:' + data);
    };
    const onChange = (data: string) => {
      setValue(data);
    };
    return <>
        <ExampleStory title="Basic Usage, set data source of autocomplete with options property.">
          <AutoComplete options={options} style={{
          width: 200
        }} onSelect={onSelect} onSearch={text => {
          setOptions(getPanelValue(text));
        }} placeholder="input here" />
          <br />
          <br />
          <AutoComplete value={value} options={anotherOptions} style={{
          width: 200
        }} onSelect={onSelect} onSearch={text => {
          setAnotherOptions(getPanelValue(text));
        }} onChange={onChange} placeholder="control mode" />
        </ExampleStory>
      </>;
  }
}`},(te=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:te.source)})});var ne,oe,re;j.parameters=r(n({},j.parameters),{docs:r(n({},(ne=j.parameters)==null?void 0:ne.docs),{source:n({originalSource:`{
  render: () => {
    const [options, setOptions] = useState<Array<{
      value: string;
      label: string;
    }>>([]);
    const handleSearch = (value: string) => {
      let res: Array<{
        value: string;
        label: string;
      }>;
      if (!value || value.includes('@')) {
        res = [];
      } else {
        res = ['gmail.com', '163.com', 'qq.com'].map(domain => ({
          value,
          label: \`\${value}@\${domain}\`
        }));
      }
      setOptions(res);
    };
    return <>
        <ExampleStory title="You could set custom Option label.">
          <AutoComplete style={{
          width: 200
        }} onSearch={handleSearch} placeholder="input here" options={options} />
        </ExampleStory>
      </>;
  }
}`},(re=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:re.source)})});var se,ae,le;v.parameters=r(n({},v.parameters),{docs:r(n({},(se=v.parameters)==null?void 0:se.docs),{source:n({originalSource:`{
  render: () => {
    const [options, setOptions] = useState<IAutoCompleteProps['options']>([]);
    const handleSearch = (value: string) => {
      setOptions(!value ? [] : ([{
        value
      }, {
        value: value + value
      }, {
        value: value + value + value
      }] as IAutoCompleteProps['options']));
    };
    const handleKeyPress = (ev: React.KeyboardEvent<HTMLTextAreaElement>) => {
      console.log('handleKeyPress', ev);
    };
    const onSelect = (value: string) => {
      alert('selected: ' + value);
    };
    return <ExampleStory title="Customize Input Component">
        <AutoComplete options={options} style={{
        width: 200
      }} onSelect={onSelect} onSearch={handleSearch}>
          <Input.TextArea placeholder="input here" className="custom" style={{
          height: 50
        }} onKeyPress={handleKeyPress} />
        </AutoComplete>
      </ExampleStory>;
  }
}`},(le=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:le.source)})});var ce,pe,ie;P.parameters=r(n({},P.parameters),{docs:r(n({},(ce=P.parameters)==null?void 0:ce.docs),{source:n({originalSource:`{
  render: () => {
    return <>
        <ExampleStory title="A non-case-sensitive AutoComplete.">
          <AutoComplete style={{
          width: 200
        }} options={baseOptions.map(o => ({
          ...o,
          label: o.label.toUpperCase()
        }))} placeholder="try to type \`b\`" filterOption={(inputValue, option) => option?.label?.toString().toUpperCase().includes(inputValue.toUpperCase()) ?? false} />
        </ExampleStory>
      </>;
  }
}`},(ie=(pe=P.parameters)==null?void 0:pe.docs)==null?void 0:ie.source)})});var ue,de,me;E.parameters=r(n({},E.parameters),{docs:r(n({},(ue=E.parameters)==null?void 0:ue.docs),{source:n({originalSource:`{
  render: () => {
    const renderTitle = (title: string) => <span>
        {title}
        <a style={{
        float: 'right'
      }} href="https://www.google.com/search?q=antd" target="_blank" rel="noopener noreferrer">
          more
        </a>
      </span>;
    const renderItem = (title: string, count: number) => ({
      value: title,
      label: <Flex justify="space-between">
          {title}
          <span>
            <Icon name="mpLogo" />
            {count}
          </span>
        </Flex>
    });
    const options = [{
      label: renderTitle('Libraries'),
      options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)]
    }, {
      label: renderTitle('Solutions'),
      options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)]
    }, {
      label: renderTitle('Articles'),
      options: [renderItem('AntDesign design language', 100000)]
    }];
    return <>
        <ExampleStory title={<>
              Demonstration of{' '}
              <a href="https://ant.design/docs/spec/reaction/#lookup-patterns" target="_blank" rel="noreferrer">
                Lookup Patterns: Certain Category
              </a>
              Basic Usage, set options of autocomplete with options property.
            </>}>
          <AutoComplete popupClassName="certain-category-search-dropdown" popupMatchSelectWidth={500} style={{
          width: 250
        }} options={options} size="large">
            <Input.Search size="large" placeholder="input here" />
          </AutoComplete>
        </ExampleStory>
      </>;
  }
}`},(me=(de=E.parameters)==null?void 0:de.docs)==null?void 0:me.source)})});var he,ge,Se;O.parameters=r(n({},O.parameters),{docs:r(n({},(he=O.parameters)==null?void 0:he.docs),{source:n({originalSource:`{
  render: () => {
    const getRandomInt = (max: number, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;
    const searchResult = (query: string) => new Array(getRandomInt(5)).join('.').split('.').map((_, idx) => {
      const category = \`\${query}\${idx}\`;
      return {
        value: category,
        label: <Flex justify="space-between">
                <span>
                  Found {query} on{' '}
                  <a href={\`https://s.taobao.com/search?q=\${query}\`} target="_blank" rel="noopener noreferrer">
                    {category}
                  </a>
                </span>
                <span>{getRandomInt(200, 100)} results</span>
              </Flex>
      };
    });
    const [options, setOptions] = useState<ISelectProps<object>['options']>([]);
    const handleSearch = (value: string) => {
      setOptions(value !== '' ? searchResult(value) : []);
    };
    const onSelect = (value: string) => {
      alert('selected: ' + value);
    };
    return <>
        <ExampleStory title={<>
              Demonstration of{' '}
              <a href="https://ant.design/docs/spec/reaction#lookup-patterns" target="_blank" rel="noreferrer">
                Lookup Patterns: Certain Category
              </a>
              Basic Usage, set options of autocomplete with options property.
            </>}>
          <AutoComplete popupMatchSelectWidth={252} style={{
          width: 300
        }} options={options} onSelect={onSelect} onSearch={handleSearch} size="large">
            <Input.Search size="large" placeholder="input here" enterButton />
          </AutoComplete>
        </ExampleStory>
      </>;
  }
}`},(Se=(ge=O.parameters)==null?void 0:ge.docs)==null?void 0:Se.source)})});var xe,ye,Ce;k.parameters=r(n({},k.parameters),{docs:r(n({},(xe=k.parameters)==null?void 0:xe.docs),{source:n({originalSource:`{
  render: () => {
    const mockVal = (str: string, repeat = 1) => ({
      value: str.repeat(repeat)
    });
    const [options, setOptions] = useState<IAutoCompleteProps['options']>([]);
    const [anotherOptions, setAnotherOptions] = useState<IAutoCompleteProps['options']>([]);
    const getPanelValue = (searchText: string) => !searchText ? [] : ([mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)] as IAutoCompleteProps['options']);
    return <ExampleStory title="Add status to AutoComplete with status, which could be error or warning.">
        <Space direction="vertical" style={{
        width: '100%'
      }}>
          <AutoComplete placeholder="Error" options={options} onSearch={text => {
          setOptions(getPanelValue(text));
        }} status="error" style={{
          width: 200
        }} />
          <AutoComplete placeholder="Warning" options={anotherOptions} onSearch={text => {
          setAnotherOptions(getPanelValue(text));
        }} status="warning" style={{
          width: 200
        }} />
        </Space>
      </ExampleStory>;
  }
}`},(Ce=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:Ce.source)})});var be,we,Ae;I.parameters=r(n({},I.parameters),{docs:r(n({},(be=I.parameters)==null?void 0:be.docs),{source:n({originalSource:`{
  render: () => {
    const mockVal = (str: string, repeat = 1) => ({
      value: str.repeat(repeat)
    });
    const [options, setOptions] = useState<IAutoCompleteProps['options']>([]);
    const getPanelValue = (searchText: string) => !searchText ? [] : ([mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)] as IAutoCompleteProps['options']);
    return <>
        <ExampleStory title="Customize clear button">
          <AutoComplete options={options} style={{
          width: 200
        }} onSearch={text => {
          setOptions(getPanelValue(text));
        }} placeholder="No clear icon" allowClear={false} />
          <br />
          <br />
          <AutoComplete options={options} style={{
          width: 200
        }} onSearch={text => {
          setOptions(getPanelValue(text));
        }} placeholder="Customized clear icon" allowClear={{
          clearIcon: <Icon name="mpLogo" />
        }} />
        </ExampleStory>
      </>;
  }
}`},(Ae=(we=I.parameters)==null?void 0:we.docs)==null?void 0:Ae.source)})});const ze=["Primary","ClearButton","Placeholder","Disabled","NotFound","Borderless","ExampleBasic","ExampleCustomized","ExampleCustomizeInput","ExampleNonCaseSensitive","ExampleLookupPatternsCertainCategory","ExampleLookupPatternsUnCertainCategory","ExampleStatus","ExampleClearButton"],qe=Object.freeze(Object.defineProperty({__proto__:null,Borderless:A,ClearButton:y,Disabled:b,ExampleBasic:f,ExampleClearButton:I,ExampleCustomizeInput:v,ExampleCustomized:j,ExampleLookupPatternsCertainCategory:E,ExampleLookupPatternsUnCertainCategory:O,ExampleNonCaseSensitive:P,ExampleStatus:k,NotFound:w,Placeholder:C,Primary:x,__namedExportsOrder:ze,default:Fe},Symbol.toStringTag,{value:"Module"}));export{qe as A,Fe as m};
