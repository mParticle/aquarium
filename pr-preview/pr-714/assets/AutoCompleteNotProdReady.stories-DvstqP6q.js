import{j as e,y as u,K as p,z as k,S as z,I,F as V}from"./iframe-B6Y2oegk.js";import{E as m}from"./ExampleStory-Dokjh494.js";import"./preload-helper-PPVm8Dsz.js";const O=[{label:"The quick brown fox jumps over the lazy dog",value:1},{label:"Waxy and quivering, jocks fumble the pizza",value:2},{label:"When zombies arrive, quickly fax judge Pat",value:3},{label:"Pack my red box with five dozen quality jugs",value:4},{label:"The quick onyx goblin jumps over the lazy dwarf",value:5}],U={title:"Components/Not Prod Ready/Data Entry/Auto Complete",component:t=>{const[s,l]=u.useState(""),[n,r]=u.useState([]),a=i=>i?O.filter(h=>h.label.toLowerCase().includes(i.toLowerCase())):[],o=i=>{r(a(i))},d=i=>{console.log("you selected value: "+i)};return e.jsx(e.Fragment,{children:e.jsx(p,{...t,value:s,options:n,onSelect:d,onSearch:o,onChange:l})})},args:{allowClear:!1,autoFocus:!1,backfill:!1,bordered:!0,defaultActiveFirstOption:!0,options:O,defaultOpen:void 0,defaultValue:void 0,disabled:!1,popupClassName:void 0,open:void 0,placeholder:"Search AutoComplete",status:void 0,style:{width:200},value:void 0,onBlur:()=>{console.log("Blur Event")},onChange:t=>{alert(`Selected Value: ${t}`)},onOpenChange:t=>{console.log(`Dropdown Open: ${t}`)},onFocus:()=>{console.log("Focus Event")},onSearch:t=>{alert(`Search Value: ${t}`)},onSelect:(t,s)=>{alert(`Selected Value: ${t}, Option: ${String(s.label)}`)},onClear:()=>{alert("Clear Event")}},argTypes:{status:{control:"select",options:["error","warning"]}}},g={args:{allowClear:!0}},x={args:{placeholder:"Custom Placeholder Text"}},S={args:{disabled:!0}},C={args:{notFoundContent:e.jsx(e.Fragment,{children:"Custom Not Found Component goes here"})}},y={args:{bordered:!1}},b={render:()=>{const[t,s]=u.useState(""),[l,n]=u.useState([]),[r,a]=u.useState([]),o=(c,F=1)=>({value:c.repeat(F)}),d=c=>c?[o(c),o(c,2),o(c,3)]:[],i=c=>{alert("onSelect:"+c)},h=c=>{s(c)};return e.jsx(e.Fragment,{children:e.jsxs(m,{title:"Basic Usage, set data source of autocomplete with options property.",children:[e.jsx(p,{options:l,style:{width:200},onSelect:i,onSearch:c=>{n(d(c))},placeholder:"input here"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(p,{value:t,options:r,style:{width:200},onSelect:i,onSearch:c=>{a(d(c))},onChange:h,placeholder:"control mode"})]})})}},w={render:()=>{const[t,s]=u.useState([]),l=n=>{let r;!n||n.includes("@")?r=[]:r=["gmail.com","163.com","qq.com"].map(a=>({value:n,label:`${n}@${a}`})),s(r)};return e.jsx(e.Fragment,{children:e.jsx(m,{title:"You could set custom Option label.",children:e.jsx(p,{style:{width:200},onSearch:l,placeholder:"input here",options:t})})})}},A={render:()=>{const[t,s]=u.useState([]),l=a=>{s(a?[{value:a},{value:a+a},{value:a+a+a}]:[])},n=a=>{console.log("handleKeyPress",a)},r=a=>{alert("selected: "+a)};return e.jsx(m,{title:"Customize Input Component",children:e.jsx(p,{options:t,style:{width:200},onSelect:r,onSearch:l,children:e.jsx(k.TextArea,{placeholder:"input here",className:"custom",style:{height:50},onKeyPress:n})})})}},j={render:()=>e.jsx(e.Fragment,{children:e.jsx(m,{title:"A non-case-sensitive AutoComplete.",children:e.jsx(p,{style:{width:200},options:O.map(t=>({...t,label:t.label.toUpperCase()})),placeholder:"try to type `b`",filterOption:(t,s)=>s?.label?.toString().toUpperCase().includes(t.toUpperCase())??!1})})})},f={render:()=>{const t=n=>e.jsxs("span",{children:[n,e.jsx("a",{style:{float:"right"},href:"https://www.google.com/search?q=antd",target:"_blank",rel:"noopener noreferrer",children:"more"})]}),s=(n,r)=>({value:n,label:e.jsxs(V,{justify:"space-between",children:[n,e.jsxs("span",{children:[e.jsx(I,{name:"mpLogo"}),r]})]})}),l=[{label:t("Libraries"),options:[s("AntDesign",1e4),s("AntDesign UI",10600)]},{label:t("Solutions"),options:[s("AntDesign UI FAQ",60100),s("AntDesign FAQ",30010)]},{label:t("Articles"),options:[s("AntDesign design language",1e5)]}];return e.jsx(e.Fragment,{children:e.jsx(m,{title:e.jsxs(e.Fragment,{children:["Demonstration of"," ",e.jsx("a",{href:"https://ant.design/docs/spec/reaction/#lookup-patterns",target:"_blank",rel:"noreferrer",children:"Lookup Patterns: Certain Category"}),"Basic Usage, set options of autocomplete with options property."]}),children:e.jsx(p,{popupClassName:"certain-category-search-dropdown",popupMatchSelectWidth:500,style:{width:250},options:l,size:"large",children:e.jsx(k.Search,{size:"large",placeholder:"input here"})})})})}},v={render:()=>{const t=(o,d=0)=>Math.floor(Math.random()*(o-d+1))+d,s=o=>new Array(t(5)).join(".").split(".").map((d,i)=>{const h=`${o}${i}`;return{value:h,label:e.jsxs(V,{justify:"space-between",children:[e.jsxs("span",{children:["Found ",o," on"," ",e.jsx("a",{href:`https://s.taobao.com/search?q=${o}`,target:"_blank",rel:"noopener noreferrer",children:h})]}),e.jsxs("span",{children:[t(200,100)," results"]})]})}}),[l,n]=u.useState([]),r=o=>{n(o!==""?s(o):[])},a=o=>{alert("selected: "+o)};return e.jsx(e.Fragment,{children:e.jsx(m,{title:e.jsxs(e.Fragment,{children:["Demonstration of"," ",e.jsx("a",{href:"https://ant.design/docs/spec/reaction#lookup-patterns",target:"_blank",rel:"noreferrer",children:"Lookup Patterns: Certain Category"}),"Basic Usage, set options of autocomplete with options property."]}),children:e.jsx(p,{popupMatchSelectWidth:252,style:{width:300},options:l,onSelect:a,onSearch:r,size:"large",children:e.jsx(k.Search,{size:"large",placeholder:"input here",enterButton:!0})})})})}},P={render:()=>{const t=(o,d=1)=>({value:o.repeat(d)}),[s,l]=u.useState([]),[n,r]=u.useState([]),a=o=>o?[t(o),t(o,2),t(o,3)]:[];return e.jsx(m,{title:"Add status to AutoComplete with status, which could be error or warning.",children:e.jsxs(z,{orientation:"vertical",style:{width:"100%"},children:[e.jsx(p,{placeholder:"Error",options:s,onSearch:o=>{l(a(o))},status:"error",style:{width:200}}),e.jsx(p,{placeholder:"Warning",options:n,onSearch:o=>{r(a(o))},status:"warning",style:{width:200}})]})})}},E={render:()=>{const t=(r,a=1)=>({value:r.repeat(a)}),[s,l]=u.useState([]),n=r=>r?[t(r),t(r,2),t(r,3)]:[];return e.jsx(e.Fragment,{children:e.jsxs(m,{title:"Customize clear button",children:[e.jsx(p,{options:s,style:{width:200},onSearch:r=>{l(n(r))},placeholder:"No clear icon",allowClear:!1}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(p,{options:s,style:{width:200},onSearch:r=>{l(n(r))},placeholder:"Customized clear icon",allowClear:{clearIcon:e.jsx(I,{name:"mpLogo"})}})]})})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    allowClear: true
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Custom Placeholder Text'
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    notFoundContent: <>Custom Not Found Component goes here</>
  }
}`,...C.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: false
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mockVal = (str: string, repeat = 1) => ({
      value: str.repeat(repeat)
    });
    const [options, setOptions] = useState<IAutoCompleteProps['options']>([]);
    const [anotherOptions, setAnotherOptions] = useState<IAutoCompleteProps['options']>([]);
    const getPanelValue = (searchText: string) => !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)] as IAutoCompleteProps['options'];
    return <ExampleStory title="Add status to AutoComplete with status, which could be error or warning.">
        <Space orientation="vertical" style={{
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
}`,...P.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};const L=["ClearButton","Placeholder","Disabled","NotFound","Borderless","ExampleBasic","ExampleCustomized","ExampleCustomizeInput","ExampleNonCaseSensitive","ExampleLookupPatternsCertainCategory","ExampleLookupPatternsUnCertainCategory","ExampleStatus","ExampleClearButton"];export{y as Borderless,g as ClearButton,S as Disabled,b as ExampleBasic,E as ExampleClearButton,A as ExampleCustomizeInput,w as ExampleCustomized,f as ExampleLookupPatternsCertainCategory,v as ExampleLookupPatternsUnCertainCategory,j as ExampleNonCaseSensitive,P as ExampleStatus,C as NotFound,x as Placeholder,L as __namedExportsOrder,U as default};
