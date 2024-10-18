var Pe=Object.defineProperty,Ee=Object.defineProperties;var Oe=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var ke=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable;var D=(t,r,a)=>r in t?Pe(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,o=(t,r)=>{for(var a in r||(r={}))ke.call(r,a)&&D(t,a,r[a]);if(z)for(var a of z(r))Ie.call(r,a)&&D(t,a,r[a]);return t},s=(t,r)=>Ee(t,Oe(r));import{j as e}from"./jsx-runtime-CVnACwZl.js";import{r as m}from"./index-3OP4wdng.js";import{N as u,O as F,e as Ve,I as fe,F as je}from"./GlobalNavigation-Cm5mBd9v.js";import"./ConfigProvider-C4rPDA4Q.js";import"./_baseClone-B3DJrZ5i.js";import{E as g}from"./ExampleStory-DWIM4kpW.js";import"./index-vcA8fjEC.js";import"./useToken-CXWLUMEq.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-B-gr4m3q.js";import"./isNativeReflectConstruct-D-r9sWlk.js";import"./row-BwvytWES.js";import"./dayjs.min-FTgVsUrW.js";import"./customParseFormat-Dfkg1z51.js";import"./LightTheme-BtoaoHMG.js";const V=[{label:"The quick brown fox jumps over the lazy dog",value:1},{label:"Waxy and quivering, jocks fumble the pizza",value:2},{label:"When zombies arrive, quickly fax judge Pat",value:3},{label:"Pack my red box with five dozen quality jugs",value:4},{label:"The quick onyx goblin jumps over the lazy dwarf",value:5}],He={title:"Components/Data Entry/AutoComplete",component:t=>{const[r,a]=m.useState(""),[p,l]=m.useState([]),c=d=>d?V.filter(x=>x.label.toLowerCase().includes(d.toLowerCase())):[],n=d=>{l(c(d))},h=d=>{console.log("you selected value: "+d)};return e.jsx(e.Fragment,{children:e.jsx(u,s(o({},t),{value:r,options:p,onSelect:h,onSearch:n,onChange:a}))})},args:{allowClear:!1,autoFocus:!1,backfill:!1,bordered:!0,defaultActiveFirstOption:!0,options:V,defaultOpen:void 0,defaultValue:void 0,disabled:!1,popupClassName:void 0,open:void 0,placeholder:"Search AutoComplete",status:void 0,style:{width:200},value:void 0,onBlur:()=>{console.log("Blur Event")},onChange:t=>{alert(`Selected Value: ${t}`)},onDropdownVisibleChange:t=>{console.log(`Dropdown Open: ${t}`)},onFocus:()=>{console.log("Focus Event")},onSearch:t=>{alert(`Search Value: ${t}`)},onSelect:(t,r)=>{alert(`Selected Value: ${t}, Option: ${String(r.label)}`)},onClear:()=>{alert("Clear Event")}},argTypes:{status:{control:"select",options:["error","warning"]}}},S={},C={args:{allowClear:!0}},y={args:{placeholder:"Custom Placeholder Text"}},b={args:{disabled:!0}},w={args:{notFoundContent:e.jsx(e.Fragment,{children:"Custom Not Found Component goes here"})}},A={args:{bordered:!1}},f={render:()=>{const[t,r]=m.useState(""),[a,p]=m.useState([]),[l,c]=m.useState([]),n=(i,ve=1)=>({value:i.repeat(ve)}),h=i=>i?[n(i),n(i,2),n(i,3)]:[],d=i=>{alert("onSelect:"+i)},x=i=>{r(i)};return e.jsx(e.Fragment,{children:e.jsxs(g,{title:"Basic Usage, set data source of autocomplete with options property.",children:[e.jsx(u,{options:a,style:{width:200},onSelect:d,onSearch:i=>{p(h(i))},placeholder:"input here"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(u,{value:t,options:l,style:{width:200},onSelect:d,onSearch:i=>{c(h(i))},onChange:x,placeholder:"control mode"})]})})}},j={render:()=>{const[t,r]=m.useState([]),a=p=>{let l;!p||p.includes("@")?l=[]:l=["gmail.com","163.com","qq.com"].map(c=>({value:p,label:`${p}@${c}`})),r(l)};return e.jsx(e.Fragment,{children:e.jsx(g,{title:"You could set custom Option label.",children:e.jsx(u,{style:{width:200},onSearch:a,placeholder:"input here",options:t})})})}},v={render:()=>{const[t,r]=m.useState([]),a=c=>{r(c?[{value:c},{value:c+c},{value:c+c+c}]:[])},p=c=>{console.log("handleKeyPress",c)},l=c=>{alert("selected: "+c)};return e.jsx(g,{title:"Customize Input Component",children:e.jsx(u,{options:t,style:{width:200},onSelect:l,onSearch:a,children:e.jsx(F.TextArea,{placeholder:"input here",className:"custom",style:{height:50},onKeyPress:p})})})}},P={render:()=>e.jsx(e.Fragment,{children:e.jsx(g,{title:"A non-case-sensitive AutoComplete.",children:e.jsx(u,{style:{width:200},options:V.map(t=>s(o({},t),{label:t.label.toUpperCase()})),placeholder:"try to type `b`",filterOption:(t,r)=>{var a,p;return(p=(a=r==null?void 0:r.label)==null?void 0:a.toString().toUpperCase().includes(t.toUpperCase()))!=null?p:!1}})})})},E={render:()=>{const t=p=>e.jsxs("span",{children:[p,e.jsx("a",{style:{float:"right"},href:"https://www.google.com/search?q=antd",target:"_blank",rel:"noopener noreferrer",children:"more"})]}),r=(p,l)=>({value:p,label:e.jsxs(je,{justify:"space-between",children:[p,e.jsxs("span",{children:[e.jsx(fe,{name:"mpLogo"}),l]})]})}),a=[{label:t("Libraries"),options:[r("AntDesign",1e4),r("AntDesign UI",10600)]},{label:t("Solutions"),options:[r("AntDesign UI FAQ",60100),r("AntDesign FAQ",30010)]},{label:t("Articles"),options:[r("AntDesign design language",1e5)]}];return e.jsx(e.Fragment,{children:e.jsx(g,{title:e.jsxs(e.Fragment,{children:["Demonstration of"," ",e.jsx("a",{href:"https://ant.design/docs/spec/reaction/#lookup-patterns",target:"_blank",rel:"noreferrer",children:"Lookup Patterns: Certain Category"}),"Basic Usage, set options of autocomplete with options property."]}),children:e.jsx(u,{popupClassName:"certain-category-search-dropdown",popupMatchSelectWidth:500,style:{width:250},options:a,size:"large",children:e.jsx(F.Search,{size:"large",placeholder:"input here"})})})})}},O={render:()=>{const t=(n,h=0)=>Math.floor(Math.random()*(n-h+1))+h,r=n=>new Array(t(5)).join(".").split(".").map((h,d)=>{const x=`${n}${d}`;return{value:x,label:e.jsxs(je,{justify:"space-between",children:[e.jsxs("span",{children:["Found ",n," on"," ",e.jsx("a",{href:`https://s.taobao.com/search?q=${n}`,target:"_blank",rel:"noopener noreferrer",children:x})]}),e.jsxs("span",{children:[t(200,100)," results"]})]})}}),[a,p]=m.useState([]),l=n=>{p(n!==""?r(n):[])},c=n=>{alert("selected: "+n)};return e.jsx(e.Fragment,{children:e.jsx(g,{title:e.jsxs(e.Fragment,{children:["Demonstration of"," ",e.jsx("a",{href:"https://ant.design/docs/spec/reaction#lookup-patterns",target:"_blank",rel:"noreferrer",children:"Lookup Patterns: Certain Category"}),"Basic Usage, set options of autocomplete with options property."]}),children:e.jsx(u,{popupMatchSelectWidth:252,style:{width:300},options:a,onSelect:c,onSearch:l,size:"large",children:e.jsx(F.Search,{size:"large",placeholder:"input here",enterButton:!0})})})})}},k={render:()=>{const t=(n,h=1)=>({value:n.repeat(h)}),[r,a]=m.useState([]),[p,l]=m.useState([]),c=n=>n?[t(n),t(n,2),t(n,3)]:[];return e.jsx(g,{title:"Add status to AutoComplete with status, which could be error or warning.",children:e.jsxs(Ve,{direction:"vertical",style:{width:"100%"},children:[e.jsx(u,{placeholder:"Error",options:r,onSearch:n=>{a(c(n))},status:"error",style:{width:200}}),e.jsx(u,{placeholder:"Warning",options:p,onSearch:n=>{l(c(n))},status:"warning",style:{width:200}})]})})}},I={render:()=>{const t=(l,c=1)=>({value:l.repeat(c)}),[r,a]=m.useState([]),p=l=>l?[t(l),t(l,2),t(l,3)]:[];return e.jsx(e.Fragment,{children:e.jsxs(g,{title:"Customize clear button",children:[e.jsx(u,{options:r,style:{width:200},onSearch:l=>{a(p(l))},placeholder:"No clear icon",allowClear:!1}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(u,{options:r,style:{width:200},onSearch:l=>{a(p(l))},placeholder:"Customized clear icon",allowClear:{clearIcon:e.jsx(fe,{name:"mpLogo"})}})]})})}};var T,B,U;S.parameters=s(o({},S.parameters),{docs:s(o({},(T=S.parameters)==null?void 0:T.docs),{source:o({originalSource:"{}"},(U=(B=S.parameters)==null?void 0:B.docs)==null?void 0:U.source)})});var L,q,$;C.parameters=s(o({},C.parameters),{docs:s(o({},(L=C.parameters)==null?void 0:L.docs),{source:o({originalSource:`{
  args: {
    allowClear: true
  }
}`},($=(q=C.parameters)==null?void 0:q.docs)==null?void 0:$.source)})});var N,_,M;y.parameters=s(o({},y.parameters),{docs:s(o({},(N=y.parameters)==null?void 0:N.docs),{source:o({originalSource:`{
  args: {
    placeholder: 'Custom Placeholder Text'
  }
}`},(M=(_=y.parameters)==null?void 0:_.docs)==null?void 0:M.source)})});var R,K,W;b.parameters=s(o({},b.parameters),{docs:s(o({},(R=b.parameters)==null?void 0:R.docs),{source:o({originalSource:`{
  args: {
    disabled: true
  }
}`},(W=(K=b.parameters)==null?void 0:K.docs)==null?void 0:W.source)})});var Q,Y,H;w.parameters=s(o({},w.parameters),{docs:s(o({},(Q=w.parameters)==null?void 0:Q.docs),{source:o({originalSource:`{
  args: {
    notFoundContent: <>Custom Not Found Component goes here</>
  }
}`},(H=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:H.source)})});var G,J,X;A.parameters=s(o({},A.parameters),{docs:s(o({},(G=A.parameters)==null?void 0:G.docs),{source:o({originalSource:`{
  args: {
    bordered: false
  }
}`},(X=(J=A.parameters)==null?void 0:J.docs)==null?void 0:X.source)})});var Z,ee,te;f.parameters=s(o({},f.parameters),{docs:s(o({},(Z=f.parameters)==null?void 0:Z.docs),{source:o({originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const [options, setOptions] = useState<IAutoCompleteProps['options']>([]);
    const [anotherOptions, setAnotherOptions] = useState<IAutoCompleteProps['options']>([]);
    const mockVal = (str: string, repeat = 1) => ({
      value: str.repeat(repeat)
    });
    const getPanelValue = (searchText: string) => !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)] as IAutoCompleteProps['options'];
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
}`},(te=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:te.source)})});var oe,re,se;j.parameters=s(o({},j.parameters),{docs:s(o({},(oe=j.parameters)==null?void 0:oe.docs),{source:o({originalSource:`{
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
}`},(se=(re=j.parameters)==null?void 0:re.docs)==null?void 0:se.source)})});var ae,ne,le;v.parameters=s(o({},v.parameters),{docs:s(o({},(ae=v.parameters)==null?void 0:ae.docs),{source:o({originalSource:`{
  render: () => {
    const [options, setOptions] = useState<IAutoCompleteProps['options']>([]);
    const handleSearch = (value: string) => {
      setOptions(!value ? [] : [{
        value
      }, {
        value: value + value
      }, {
        value: value + value + value
      }] as IAutoCompleteProps['options']);
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
}`},(le=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:le.source)})});var pe,ce,ie;P.parameters=s(o({},P.parameters),{docs:s(o({},(pe=P.parameters)==null?void 0:pe.docs),{source:o({originalSource:`{
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
}`},(ie=(ce=P.parameters)==null?void 0:ce.docs)==null?void 0:ie.source)})});var ue,de,me;E.parameters=s(o({},E.parameters),{docs:s(o({},(ue=E.parameters)==null?void 0:ue.docs),{source:o({originalSource:`{
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
}`},(me=(de=E.parameters)==null?void 0:de.docs)==null?void 0:me.source)})});var he,ge,xe;O.parameters=s(o({},O.parameters),{docs:s(o({},(he=O.parameters)==null?void 0:he.docs),{source:o({originalSource:`{
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
}`},(xe=(ge=O.parameters)==null?void 0:ge.docs)==null?void 0:xe.source)})});var Se,Ce,ye;k.parameters=s(o({},k.parameters),{docs:s(o({},(Se=k.parameters)==null?void 0:Se.docs),{source:o({originalSource:`{
  render: () => {
    const mockVal = (str: string, repeat = 1) => ({
      value: str.repeat(repeat)
    });
    const [options, setOptions] = useState<IAutoCompleteProps['options']>([]);
    const [anotherOptions, setAnotherOptions] = useState<IAutoCompleteProps['options']>([]);
    const getPanelValue = (searchText: string) => !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)] as IAutoCompleteProps['options'];
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
}`},(ye=(Ce=k.parameters)==null?void 0:Ce.docs)==null?void 0:ye.source)})});var be,we,Ae;I.parameters=s(o({},I.parameters),{docs:s(o({},(be=I.parameters)==null?void 0:be.docs),{source:o({originalSource:`{
  render: () => {
    const mockVal = (str: string, repeat = 1) => ({
      value: str.repeat(repeat)
    });
    const [options, setOptions] = useState<IAutoCompleteProps['options']>([]);
    const getPanelValue = (searchText: string) => !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)] as IAutoCompleteProps['options'];
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
}`},(Ae=(we=I.parameters)==null?void 0:we.docs)==null?void 0:Ae.source)})});const Ge=["Primary","ClearButton","Placeholder","Disabled","NotFound","Borderless","ExampleBasic","ExampleCustomized","ExampleCustomizeInput","ExampleNonCaseSensitive","ExampleLookupPatternsCertainCategory","ExampleLookupPatternsUnCertainCategory","ExampleStatus","ExampleClearButton"];export{A as Borderless,C as ClearButton,b as Disabled,f as ExampleBasic,I as ExampleClearButton,v as ExampleCustomizeInput,j as ExampleCustomized,E as ExampleLookupPatternsCertainCategory,O as ExampleLookupPatternsUnCertainCategory,P as ExampleNonCaseSensitive,k as ExampleStatus,w as NotFound,y as Placeholder,S as Primary,Ge as __namedExportsOrder,He as default};
