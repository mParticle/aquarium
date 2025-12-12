var Ae=Object.defineProperty,fe=Object.defineProperties;var je=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var ve=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable;var z=(t,r,s)=>r in t?Ae(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s,o=(t,r)=>{for(var s in r||(r={}))ve.call(r,s)&&z(t,s,r[s]);if(F)for(var s of F(r))Pe.call(r,s)&&z(t,s,r[s]);return t},a=(t,r)=>fe(t,je(r));import{j as e}from"./jsx-runtime-C9TrHvcC.js";import{r as m}from"./index-3OP4wdng.js";import{q as u,t as V,a as Ee,I as ye,F as be}from"./NavigationItemsService-CQo6kNap.js";import"./ErrorStateIcon-BS17_6tf.js";import"./SuccessStateIcon-HuPZrMr2.js";import"./WarningStateIcon-Duz4utQS.js";import"./_baseClone-DwBCp-Ss.js";import{E as g}from"./ExampleStory-Bip48vHe.js";import"./LightTheme-BtoaoHMG.js";import"./row-DlEJUZa0.js";import"./Context-R5ee3nrF.js";import"./useToken-BIYN7ogo.js";import"./presets-CQzyf-6F.js";import"./extends-CF3RwP-h.js";import"./index-DA79H6I3.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./AntdIcon-DRQs8XP6.js";import"./style-BAkx2Mzk.js";import"./WarningFilled-D6ijQqgK.js";const I=[{label:"The quick brown fox jumps over the lazy dog",value:1},{label:"Waxy and quivering, jocks fumble the pizza",value:2},{label:"When zombies arrive, quickly fax judge Pat",value:3},{label:"Pack my red box with five dozen quality jugs",value:4},{label:"The quick onyx goblin jumps over the lazy dwarf",value:5}],Ye={title:"Components/Not Prod Ready/Data Entry/Auto Complete",component:t=>{const[r,s]=m.useState(""),[p,l]=m.useState([]),c=d=>d?I.filter(x=>x.label.toLowerCase().includes(d.toLowerCase())):[],n=d=>{l(c(d))},h=d=>{console.log("you selected value: "+d)};return e.jsx(e.Fragment,{children:e.jsx(u,a(o({},t),{value:r,options:p,onSelect:h,onSearch:n,onChange:s}))})},args:{allowClear:!1,autoFocus:!1,backfill:!1,bordered:!0,defaultActiveFirstOption:!0,options:I,defaultOpen:void 0,defaultValue:void 0,disabled:!1,popupClassName:void 0,open:void 0,placeholder:"Search AutoComplete",status:void 0,style:{width:200},value:void 0,onBlur:()=>{console.log("Blur Event")},onChange:t=>{alert(`Selected Value: ${t}`)},onDropdownVisibleChange:t=>{console.log(`Dropdown Open: ${t}`)},onFocus:()=>{console.log("Focus Event")},onSearch:t=>{alert(`Search Value: ${t}`)},onSelect:(t,r)=>{alert(`Selected Value: ${t}, Option: ${String(r.label)}`)},onClear:()=>{alert("Clear Event")}},argTypes:{status:{control:"select",options:["error","warning"]}}},S={args:{allowClear:!0}},C={args:{placeholder:"Custom Placeholder Text"}},y={args:{disabled:!0}},b={args:{notFoundContent:e.jsx(e.Fragment,{children:"Custom Not Found Component goes here"})}},w={args:{bordered:!1}},A={render:()=>{const[t,r]=m.useState(""),[s,p]=m.useState([]),[l,c]=m.useState([]),n=(i,we=1)=>({value:i.repeat(we)}),h=i=>i?[n(i),n(i,2),n(i,3)]:[],d=i=>{alert("onSelect:"+i)},x=i=>{r(i)};return e.jsx(e.Fragment,{children:e.jsxs(g,{title:"Basic Usage, set data source of autocomplete with options property.",children:[e.jsx(u,{options:s,style:{width:200},onSelect:d,onSearch:i=>{p(h(i))},placeholder:"input here"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(u,{value:t,options:l,style:{width:200},onSelect:d,onSearch:i=>{c(h(i))},onChange:x,placeholder:"control mode"})]})})}},f={render:()=>{const[t,r]=m.useState([]),s=p=>{let l;!p||p.includes("@")?l=[]:l=["gmail.com","163.com","qq.com"].map(c=>({value:p,label:`${p}@${c}`})),r(l)};return e.jsx(e.Fragment,{children:e.jsx(g,{title:"You could set custom Option label.",children:e.jsx(u,{style:{width:200},onSearch:s,placeholder:"input here",options:t})})})}},j={render:()=>{const[t,r]=m.useState([]),s=c=>{r(c?[{value:c},{value:c+c},{value:c+c+c}]:[])},p=c=>{console.log("handleKeyPress",c)},l=c=>{alert("selected: "+c)};return e.jsx(g,{title:"Customize Input Component",children:e.jsx(u,{options:t,style:{width:200},onSelect:l,onSearch:s,children:e.jsx(V.TextArea,{placeholder:"input here",className:"custom",style:{height:50},onKeyPress:p})})})}},v={render:()=>e.jsx(e.Fragment,{children:e.jsx(g,{title:"A non-case-sensitive AutoComplete.",children:e.jsx(u,{style:{width:200},options:I.map(t=>a(o({},t),{label:t.label.toUpperCase()})),placeholder:"try to type `b`",filterOption:(t,r)=>{var s,p;return(p=(s=r==null?void 0:r.label)==null?void 0:s.toString().toUpperCase().includes(t.toUpperCase()))!=null?p:!1}})})})},P={render:()=>{const t=p=>e.jsxs("span",{children:[p,e.jsx("a",{style:{float:"right"},href:"https://www.google.com/search?q=antd",target:"_blank",rel:"noopener noreferrer",children:"more"})]}),r=(p,l)=>({value:p,label:e.jsxs(be,{justify:"space-between",children:[p,e.jsxs("span",{children:[e.jsx(ye,{name:"mpLogo"}),l]})]})}),s=[{label:t("Libraries"),options:[r("AntDesign",1e4),r("AntDesign UI",10600)]},{label:t("Solutions"),options:[r("AntDesign UI FAQ",60100),r("AntDesign FAQ",30010)]},{label:t("Articles"),options:[r("AntDesign design language",1e5)]}];return e.jsx(e.Fragment,{children:e.jsx(g,{title:e.jsxs(e.Fragment,{children:["Demonstration of"," ",e.jsx("a",{href:"https://ant.design/docs/spec/reaction/#lookup-patterns",target:"_blank",rel:"noreferrer",children:"Lookup Patterns: Certain Category"}),"Basic Usage, set options of autocomplete with options property."]}),children:e.jsx(u,{popupClassName:"certain-category-search-dropdown",popupMatchSelectWidth:500,style:{width:250},options:s,size:"large",children:e.jsx(V.Search,{size:"large",placeholder:"input here"})})})})}},E={render:()=>{const t=(n,h=0)=>Math.floor(Math.random()*(n-h+1))+h,r=n=>new Array(t(5)).join(".").split(".").map((h,d)=>{const x=`${n}${d}`;return{value:x,label:e.jsxs(be,{justify:"space-between",children:[e.jsxs("span",{children:["Found ",n," on"," ",e.jsx("a",{href:`https://s.taobao.com/search?q=${n}`,target:"_blank",rel:"noopener noreferrer",children:x})]}),e.jsxs("span",{children:[t(200,100)," results"]})]})}}),[s,p]=m.useState([]),l=n=>{p(n!==""?r(n):[])},c=n=>{alert("selected: "+n)};return e.jsx(e.Fragment,{children:e.jsx(g,{title:e.jsxs(e.Fragment,{children:["Demonstration of"," ",e.jsx("a",{href:"https://ant.design/docs/spec/reaction#lookup-patterns",target:"_blank",rel:"noreferrer",children:"Lookup Patterns: Certain Category"}),"Basic Usage, set options of autocomplete with options property."]}),children:e.jsx(u,{popupMatchSelectWidth:252,style:{width:300},options:s,onSelect:c,onSearch:l,size:"large",children:e.jsx(V.Search,{size:"large",placeholder:"input here",enterButton:!0})})})})}},O={render:()=>{const t=(n,h=1)=>({value:n.repeat(h)}),[r,s]=m.useState([]),[p,l]=m.useState([]),c=n=>n?[t(n),t(n,2),t(n,3)]:[];return e.jsx(g,{title:"Add status to AutoComplete with status, which could be error or warning.",children:e.jsxs(Ee,{direction:"vertical",style:{width:"100%"},children:[e.jsx(u,{placeholder:"Error",options:r,onSearch:n=>{s(c(n))},status:"error",style:{width:200}}),e.jsx(u,{placeholder:"Warning",options:p,onSearch:n=>{l(c(n))},status:"warning",style:{width:200}})]})})}},k={render:()=>{const t=(l,c=1)=>({value:l.repeat(c)}),[r,s]=m.useState([]),p=l=>l?[t(l),t(l,2),t(l,3)]:[];return e.jsx(e.Fragment,{children:e.jsxs(g,{title:"Customize clear button",children:[e.jsx(u,{options:r,style:{width:200},onSearch:l=>{s(p(l))},placeholder:"No clear icon",allowClear:!1}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(u,{options:r,style:{width:200},onSearch:l=>{s(p(l))},placeholder:"Customized clear icon",allowClear:{clearIcon:e.jsx(ye,{name:"mpLogo"})}})]})})}};var D,T,B;S.parameters=a(o({},S.parameters),{docs:a(o({},(D=S.parameters)==null?void 0:D.docs),{source:o({originalSource:`{
  args: {
    allowClear: true
  }
}`},(B=(T=S.parameters)==null?void 0:T.docs)==null?void 0:B.source)})});var U,L,q;C.parameters=a(o({},C.parameters),{docs:a(o({},(U=C.parameters)==null?void 0:U.docs),{source:o({originalSource:`{
  args: {
    placeholder: 'Custom Placeholder Text'
  }
}`},(q=(L=C.parameters)==null?void 0:L.docs)==null?void 0:q.source)})});var $,N,_;y.parameters=a(o({},y.parameters),{docs:a(o({},($=y.parameters)==null?void 0:$.docs),{source:o({originalSource:`{
  args: {
    disabled: true
  }
}`},(_=(N=y.parameters)==null?void 0:N.docs)==null?void 0:_.source)})});var R,M,K;b.parameters=a(o({},b.parameters),{docs:a(o({},(R=b.parameters)==null?void 0:R.docs),{source:o({originalSource:`{
  args: {
    notFoundContent: <>Custom Not Found Component goes here</>
  }
}`},(K=(M=b.parameters)==null?void 0:M.docs)==null?void 0:K.source)})});var W,Q,Y;w.parameters=a(o({},w.parameters),{docs:a(o({},(W=w.parameters)==null?void 0:W.docs),{source:o({originalSource:`{
  args: {
    bordered: false
  }
}`},(Y=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:Y.source)})});var H,G,J;A.parameters=a(o({},A.parameters),{docs:a(o({},(H=A.parameters)==null?void 0:H.docs),{source:o({originalSource:`{
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
}`},(J=(G=A.parameters)==null?void 0:G.docs)==null?void 0:J.source)})});var X,Z,ee;f.parameters=a(o({},f.parameters),{docs:a(o({},(X=f.parameters)==null?void 0:X.docs),{source:o({originalSource:`{
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
}`},(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source)})});var te,oe,re;j.parameters=a(o({},j.parameters),{docs:a(o({},(te=j.parameters)==null?void 0:te.docs),{source:o({originalSource:`{
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
}`},(re=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:re.source)})});var se,ae,ne;v.parameters=a(o({},v.parameters),{docs:a(o({},(se=v.parameters)==null?void 0:se.docs),{source:o({originalSource:`{
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
}`},(ne=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:ne.source)})});var le,pe,ce;P.parameters=a(o({},P.parameters),{docs:a(o({},(le=P.parameters)==null?void 0:le.docs),{source:o({originalSource:`{
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
}`},(ce=(pe=P.parameters)==null?void 0:pe.docs)==null?void 0:ce.source)})});var ie,ue,de;E.parameters=a(o({},E.parameters),{docs:a(o({},(ie=E.parameters)==null?void 0:ie.docs),{source:o({originalSource:`{
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
}`},(de=(ue=E.parameters)==null?void 0:ue.docs)==null?void 0:de.source)})});var me,he,ge;O.parameters=a(o({},O.parameters),{docs:a(o({},(me=O.parameters)==null?void 0:me.docs),{source:o({originalSource:`{
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
}`},(ge=(he=O.parameters)==null?void 0:he.docs)==null?void 0:ge.source)})});var xe,Se,Ce;k.parameters=a(o({},k.parameters),{docs:a(o({},(xe=k.parameters)==null?void 0:xe.docs),{source:o({originalSource:`{
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
}`},(Ce=(Se=k.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source)})});const He=["ClearButton","Placeholder","Disabled","NotFound","Borderless","ExampleBasic","ExampleCustomized","ExampleCustomizeInput","ExampleNonCaseSensitive","ExampleLookupPatternsCertainCategory","ExampleLookupPatternsUnCertainCategory","ExampleStatus","ExampleClearButton"];export{w as Borderless,S as ClearButton,y as Disabled,A as ExampleBasic,k as ExampleClearButton,j as ExampleCustomizeInput,f as ExampleCustomized,P as ExampleLookupPatternsCertainCategory,E as ExampleLookupPatternsUnCertainCategory,v as ExampleNonCaseSensitive,O as ExampleStatus,b as NotFound,C as Placeholder,He as __namedExportsOrder,Ye as default};
