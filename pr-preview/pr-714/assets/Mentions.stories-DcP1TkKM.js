import{aS as n,j as e,F as I,y as d,m as u,aT as J,i as z,I as T}from"./iframe-B6Y2oegk.js";import{E as s}from"./ExampleStory-Dokjh494.js";import"./preload-helper-PPVm8Dsz.js";const R={title:"Components/Not Prod Ready/Mentions",component:n,args:{}},m={args:{allowClear:!1,autoFocus:!1,autoSize:!1,defaultValue:"",filterOption:!1,notFoundContent:"Not Found",placement:"bottom",prefix:"@",split:" ",status:void 0,validateSearch:void 0,value:"",variant:"outlined",options:[{value:"JohnDoe",label:"John Doe"},{value:"JaneDoe",label:"Jane Doe"},{value:"BobSmith",label:"Bob Smith"}],getPopupContainer:()=>document.body,onBlur:()=>{},onChange:o=>{console.log(`Text Changed: ${o}`)},onFocus:()=>{},onResize:({width:o,height:a})=>{console.log(`Textarea Resized: Width - ${o}, Height - ${a}`)},onSearch:(o,a)=>{alert(`Search Triggered: Text - ${o}, Prefix - ${a}`)},onSelect:(o,a)=>{alert(`Option Selected: ${o.value}, Prefix - ${a}`)}},argTypes:{variant:{control:"select",options:["outlined","borderless","filled"]},status:{control:"select",options:["error","warning"]},placement:{control:"select",options:["top","bottom"]}}},p={args:{allowClear:!0}},h={args:{autoFocus:!0}},g={args:{autoSize:!0}},b={args:{notFoundContent:"No Matches Found"}},f={args:{variant:"borderless"}},x={args:{status:"warning"}},y={args:{placeholder:"Custom Placeholder..."}},v={render:()=>e.jsx(s,{title:"Basic Usage",children:e.jsx(n,{style:{width:"100%"},onChange:o=>{console.log("Change:",o)},onSelect:console.log,defaultValue:"@afc163",options:[{value:"afc163",label:"afc163"},{value:"zombieJ",label:"zombieJ"},{value:"yesmeck",label:"yesmeck"}]})})},S={render:()=>e.jsx(s,{title:"Variants of Mentions",children:e.jsxs(I,{vertical:!0,gap:12,children:[e.jsx(n,{placeholder:"Outlined"}),e.jsx(n,{placeholder:"Filled",variant:"filled"}),e.jsx(n,{placeholder:"Borderless",variant:"borderless"})]})})},C={render:()=>{const[o,a]=d.useState(!1),[l,i]=d.useState([]),t=d.useRef(void 0),k=r=>{if(!r){i([]);return}fetch(`https://api.github.com/search/users?q=${r}`).then(async c=>await c.json()).then(({items:c=[]})=>{t.current===r&&(a(!1),i(c.slice(0,10)??[]))})},M=d.useCallback(k,[]),B=r=>{console.log("Search:",r),t.current=r,a(!!r),i([]),M(r)};return e.jsx(s,{title:"Async loading from github [begin with @] ",children:e.jsx(n,{style:{width:"100%"},loading:o,onSearch:B,options:l.map(({login:r,avatar_url:c})=>({key:r,value:r,className:"antd-demo-dynamic-option",label:e.jsxs(e.Fragment,{children:[e.jsx("img",{src:c,alt:r}),e.jsx("span",{children:r})]})}))})})}},w={render:()=>{const[o]=u.useForm(),a=()=>{o.resetFields()},l=async()=>{try{const t=await o.validateFields();console.log("Submit:",t)}catch(t){console.log("Error:",t)}},i=async(t,k)=>{if(n.getMentions(k).length<2)throw new Error("More than one must be selected!")};return e.jsx(s,{title:"Controlled mode, for example, to work with Form.",children:e.jsxs(u,{form:o,layout:"horizontal",onFinish:()=>{l()},children:[e.jsx(u.Item,{name:"coders",label:"Top coders",labelCol:{span:6},wrapperCol:{span:16},rules:[{validator:i}],children:e.jsx(n,{rows:1,options:[{value:"afc163",label:"afc163"},{value:"zombieJ",label:"zombieJ"},{value:"yesmeck",label:"yesmeck"}]})}),e.jsx(u.Item,{name:"bio",label:"Bio",labelCol:{span:6},wrapperCol:{span:16},rules:[{required:!0}],children:e.jsx(n,{rows:3,placeholder:"You can use @ to ref user here",options:[{value:"afc163",label:"afc163"},{value:"zombieJ",label:"zombieJ"},{value:"yesmeck",label:"yesmeck"}]})}),e.jsx(u.Item,{wrapperCol:{span:14,offset:6},children:e.jsxs(J,{wrap:!0,children:[e.jsx(z,{htmlType:"submit",type:"primary",children:"Submit"}),e.jsx(z,{htmlType:"button",onClick:a,children:"Reset"})]})})]})})}},F={render:()=>{const o=["afc163","zombiej","yesmeck"].map(a=>({value:a,key:a,label:a}));return e.jsx(s,{title:"Configure disabled and readOnly.",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginBottom:10},children:e.jsx(n,{style:{width:"100%"},placeholder:"this is disabled Mentions",disabled:!0,options:o})}),e.jsx(n,{style:{width:"100%"},placeholder:"this is readOnly Mentions",readOnly:!0,options:o})]})})}},j={render:()=>{const[o,a]=d.useState("hello world");return e.jsx(s,{title:"Customize clear button.",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{value:o,onChange:a,allowClear:!0}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(n,{value:o,onChange:a,allowClear:{clearIcon:e.jsx(T,{name:"mpLogo"})}}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(n,{value:o,onChange:a,allowClear:!0,rows:3})]})})}},E={render:()=>{const o=l=>{console.log("Change:",l)},a=[{value:"afc163",label:"afc163"},{value:"zombieJ",label:"zombieJ"},{value:"yesmeck",label:"yesmeck"}];return e.jsx(s,{title:"Add status to Mentions with status, which could be error or warning。",children:e.jsxs(J,{orientation:"vertical",children:[e.jsx(n,{onChange:o,onSelect:console.log,defaultValue:"@afc163",status:"error",options:a}),e.jsx(n,{onChange:o,onSelect:console.log,defaultValue:"@afc163",status:"warning",options:a})]})})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    allowClear: false,
    autoFocus: false,
    autoSize: false,
    defaultValue: '',
    filterOption: false,
    notFoundContent: 'Not Found',
    placement: 'bottom',
    prefix: '@',
    split: ' ',
    status: undefined,
    validateSearch: undefined,
    value: '',
    variant: 'outlined',
    options: [{
      value: 'JohnDoe',
      label: 'John Doe'
    }, {
      value: 'JaneDoe',
      label: 'Jane Doe'
    }, {
      value: 'BobSmith',
      label: 'Bob Smith'
    }],
    getPopupContainer: () => document.body,
    onBlur: () => {},
    onChange: text => {
      console.log(\`Text Changed: \${text}\`);
    },
    onFocus: () => {},
    onResize: ({
      width,
      height
    }) => {
      console.log(\`Textarea Resized: Width - \${width}, Height - \${height}\`);
    },
    onSearch: (text, prefix) => {
      alert(\`Search Triggered: Text - \${text}, Prefix - \${prefix}\`);
    },
    onSelect: (option, prefix) => {
      alert(\`Option Selected: \${option.value}, Prefix - \${prefix}\`);
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'borderless', 'filled']
    },
    status: {
      control: 'select',
      options: ['error', 'warning']
    },
    placement: {
      control: 'select',
      options: ['top', 'bottom']
    }
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    allowClear: true
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    autoFocus: true
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    autoSize: true
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    notFoundContent: 'No Matches Found'
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'borderless'
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'warning'
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Custom Placeholder...'
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="Basic Usage">
        <Mentions style={{
        width: '100%'
      }} onChange={value => {
        console.log('Change:', value);
      }} onSelect={console.log} defaultValue="@afc163" options={[{
        value: 'afc163',
        label: 'afc163'
      }, {
        value: 'zombieJ',
        label: 'zombieJ'
      }, {
        value: 'yesmeck',
        label: 'yesmeck'
      }]} />
      </ExampleStory>;
  }
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="Variants of Mentions">
        <Flex vertical gap={12}>
          <Mentions placeholder="Outlined" />
          <Mentions placeholder="Filled" variant="filled" />
          <Mentions placeholder="Borderless" variant="borderless" />
        </Flex>
      </ExampleStory>;
  }
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState<ItemType[]>([]);
    const ref = useRef<string>(undefined);
    const loadGithubUsers = (key: string) => {
      if (!key) {
        setUsers([]);
        return;
      }
      void fetch(\`https://api.github.com/search/users?q=\${key}\`).then(async res => await res.json()).then(({
        items = []
      }: {
        items: ItemType[];
      }) => {
        if (ref.current !== key) return;
        setLoading(false);
        setUsers(items.slice(0, 10) ?? []);
      });
    };
    const debounceLoadGithubUsers = useCallback(loadGithubUsers, []);
    const onSearch = (search: string) => {
      console.log('Search:', search);
      ref.current = search;
      setLoading(!!search);
      setUsers([]);
      debounceLoadGithubUsers(search);
    };
    return <ExampleStory title="Async loading from github [begin with @] ">
        <Mentions style={{
        width: '100%'
      }} loading={loading} onSearch={onSearch} options={users.map(({
        login,
        avatar_url: avatar
      }) => ({
        key: login,
        value: login,
        className: 'antd-demo-dynamic-option',
        label: <>
                <img src={avatar} alt={login} />
                <span>{login}</span>
              </>
      }))} />
      </ExampleStory>;
  }
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [form] = Form.useForm();
    const onReset = () => {
      form.resetFields();
    };
    const onFinish = async () => {
      try {
        const values = await form.validateFields();
        console.log('Submit:', values);
      } catch (errInfo) {
        console.log('Error:', errInfo);
      }
    };
    const checkMention = async (_: unknown, value: string) => {
      const mentions = Mentions.getMentions(value);
      if (mentions.length < 2) {
        throw new Error('More than one must be selected!');
      }
    };
    return <ExampleStory title="Controlled mode, for example, to work with Form.">
        <Form form={form} layout="horizontal" onFinish={() => {
        void onFinish();
      }}>
          <Form.Item name="coders" label="Top coders" labelCol={{
          span: 6
        }} wrapperCol={{
          span: 16
        }} rules={[{
          validator: checkMention
        }]}>
            <Mentions rows={1} options={[{
            value: 'afc163',
            label: 'afc163'
          }, {
            value: 'zombieJ',
            label: 'zombieJ'
          }, {
            value: 'yesmeck',
            label: 'yesmeck'
          }]} />
          </Form.Item>
          <Form.Item name="bio" label="Bio" labelCol={{
          span: 6
        }} wrapperCol={{
          span: 16
        }} rules={[{
          required: true
        }]}>
            <Mentions rows={3} placeholder="You can use @ to ref user here" options={[{
            value: 'afc163',
            label: 'afc163'
          }, {
            value: 'zombieJ',
            label: 'zombieJ'
          }, {
            value: 'yesmeck',
            label: 'yesmeck'
          }]} />
          </Form.Item>
          <Form.Item wrapperCol={{
          span: 14,
          offset: 6
        }}>
            <Space wrap>
              <Button htmlType="submit" type="primary">
                Submit
              </Button>
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </ExampleStory>;
  }
}`,...w.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const options = ['afc163', 'zombiej', 'yesmeck'].map(value => ({
      value,
      key: value,
      label: value
    }));
    return <ExampleStory title="Configure disabled and readOnly.">
        <>
          <div style={{
          marginBottom: 10
        }}>
            <Mentions style={{
            width: '100%'
          }} placeholder="this is disabled Mentions" disabled options={options} />
          </div>
          <Mentions style={{
          width: '100%'
        }} placeholder="this is readOnly Mentions" readOnly options={options} />
        </>
      </ExampleStory>;
  }
}`,...F.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('hello world');
    return <ExampleStory title="Customize clear button.">
        <>
          <Mentions value={value} onChange={setValue} allowClear />
          <br />
          <br />
          <Mentions value={value} onChange={setValue} allowClear={{
          clearIcon: <Icon name="mpLogo" />
        }} />
          <br />
          <br />
          <Mentions value={value} onChange={setValue} allowClear rows={3} />
        </>
      </ExampleStory>;
  }
}`,...j.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const onChange = (value: string) => {
      console.log('Change:', value);
    };
    const options = [{
      value: 'afc163',
      label: 'afc163'
    }, {
      value: 'zombieJ',
      label: 'zombieJ'
    }, {
      value: 'yesmeck',
      label: 'yesmeck'
    }];
    return <ExampleStory title="Add status to Mentions with status, which could be error or warning。">
        <Space orientation="vertical">
          <Mentions onChange={onChange} onSelect={console.log} defaultValue="@afc163" status="error" options={options} />
          <Mentions onChange={onChange} onSelect={console.log} defaultValue="@afc163" status="warning" options={options} />
        </Space>
      </ExampleStory>;
  }
}`,...E.parameters?.docs?.source}}};const P=["Primary","Clearable","AutoFocus","AutoSize","CustomNotFoundContent","Borderless","Warning","CustomPlaceholder","ExampleBasic","ExampleVariants","ExampleAsync","ExampleForm","ExampleDisabledOrReadOnly","ExampleClearIcon","ExampleStatus"];export{h as AutoFocus,g as AutoSize,f as Borderless,p as Clearable,b as CustomNotFoundContent,y as CustomPlaceholder,C as ExampleAsync,v as ExampleBasic,j as ExampleClearIcon,F as ExampleDisabledOrReadOnly,w as ExampleForm,E as ExampleStatus,S as ExampleVariants,m as Primary,x as Warning,P as __namedExportsOrder,R as default};
