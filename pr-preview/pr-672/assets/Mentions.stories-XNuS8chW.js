var ze=Object.defineProperty,Je=Object.defineProperties;var Be=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var Ie=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable;var V=(a,r,t)=>r in a?ze(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t,e=(a,r)=>{for(var t in r||(r={}))Ie.call(r,t)&&V(a,t,r[t]);if(O)for(var t of O(r))Te.call(r,t)&&V(a,t,r[t]);return a},n=(a,r)=>Je(a,Be(r));var f=(a,r,t)=>new Promise((u,i)=>{var d=s=>{try{p(t.next(s))}catch(c){i(c)}},b=s=>{try{p(t.throw(s))}catch(c){i(c)}},p=s=>s.done?u(s.value):Promise.resolve(s.value).then(d,b);p((t=t.apply(a,r)).next())});import{j as o}from"./jsx-runtime-C9TrHvcC.js";import{ak as l,F as Oe,f as h,al as Me,e as $,I as Ve}from"./NavigationItemsService-C3iTtC8K.js";import{E as m}from"./ExampleStory-DkEwMo4y.js";import"./ErrorStateIcon-BEuADFVm.js";import"./SuccessStateIcon--D9CT8eu.js";import"./WarningStateIcon-BCrS_vH5.js";import"./_baseClone-DwBCp-Ss.js";import{r as g}from"./index-3OP4wdng.js";import"./LightTheme-BtoaoHMG.js";import"./row-DlEJUZa0.js";import"./Context-R5ee3nrF.js";import"./useToken-BIYN7ogo.js";import"./presets-CQzyf-6F.js";import"./extends-CF3RwP-h.js";import"./index-DA79H6I3.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./AntdIcon-DRQs8XP6.js";import"./style-B_XLJ90u.js";import"./WarningFilled-D6ijQqgK.js";const ao={title:"Components/Not Prod Ready/Mentions",component:l,args:{}},x={args:{allowClear:!1,autoFocus:!1,autoSize:!1,defaultValue:"",filterOption:!1,notFoundContent:"Not Found",placement:"bottom",prefix:"@",split:" ",status:void 0,validateSearch:void 0,value:"",variant:"outlined",options:[{value:"JohnDoe",label:"John Doe"},{value:"JaneDoe",label:"Jane Doe"},{value:"BobSmith",label:"Bob Smith"}],getPopupContainer:()=>document.body,onBlur:()=>{},onChange:a=>{console.log(`Text Changed: ${a}`)},onFocus:()=>{},onResize:({width:a,height:r})=>{console.log(`Textarea Resized: Width - ${a}, Height - ${r}`)},onSearch:(a,r)=>{alert(`Search Triggered: Text - ${a}, Prefix - ${r}`)},onSelect:(a,r)=>{alert(`Option Selected: ${a.value}, Prefix - ${r}`)}},argTypes:{variant:{control:"select",options:["outlined","borderless","filled"]},status:{control:"select",options:["error","warning"]},placement:{control:"select",options:["top","bottom"]}}},y={args:{allowClear:!0}},v={args:{autoFocus:!0}},S={args:{autoSize:!0}},C={args:{notFoundContent:"No Matches Found"}},w={args:{variant:"borderless"}},F={args:{status:"warning"}},j={args:{placeholder:"Custom Placeholder..."}},E={render:()=>o.jsx(m,{title:"Basic Usage",children:o.jsx(l,{style:{width:"100%"},onChange:a=>{console.log("Change:",a)},onSelect:console.log,defaultValue:"@afc163",options:[{value:"afc163",label:"afc163"},{value:"zombieJ",label:"zombieJ"},{value:"yesmeck",label:"yesmeck"}]})})},k={render:()=>o.jsx(m,{title:"Variants of Mentions",children:o.jsxs(Oe,{vertical:!0,gap:12,children:[o.jsx(l,{placeholder:"Outlined"}),o.jsx(l,{placeholder:"Filled",variant:"filled"}),o.jsx(l,{placeholder:"Borderless",variant:"borderless"})]})})},M={render:()=>{const[a,r]=g.useState(!1),[t,u]=g.useState([]),i=g.useRef(),d=s=>{if(!s){u([]);return}fetch(`https://api.github.com/search/users?q=${s}`).then(c=>f(void 0,null,function*(){return yield c.json()})).then(({items:c=[]})=>{var T;i.current===s&&(r(!1),u((T=c.slice(0,10))!=null?T:[]))})},b=g.useCallback(d,[]),p=s=>{console.log("Search:",s),i.current=s,r(!!s),u([]),b(s)};return o.jsx(m,{title:"Async loading from github [begin with @] ",children:o.jsx(l,{style:{width:"100%"},loading:a,onSearch:p,options:t.map(({login:s,avatar_url:c})=>({key:s,value:s,className:"antd-demo-dynamic-option",label:o.jsxs(o.Fragment,{children:[o.jsx("img",{src:c,alt:s}),o.jsx("span",{children:s})]})}))})})}},z={render:()=>{const[a]=h.useForm(),r=()=>{a.resetFields()},t=()=>f(void 0,null,function*(){try{const i=yield a.validateFields();console.log("Submit:",i)}catch(i){console.log("Error:",i)}}),u=(i,d)=>f(void 0,null,function*(){if(l.getMentions(d).length<2)throw new Error("More than one must be selected!")});return o.jsx(m,{title:"Controlled mode, for example, to work with Form.",children:o.jsxs(h,{form:a,layout:"horizontal",onFinish:()=>{t()},children:[o.jsx(h.Item,{name:"coders",label:"Top coders",labelCol:{span:6},wrapperCol:{span:16},rules:[{validator:u}],children:o.jsx(l,{rows:1,options:[{value:"afc163",label:"afc163"},{value:"zombieJ",label:"zombieJ"},{value:"yesmeck",label:"yesmeck"}]})}),o.jsx(h.Item,{name:"bio",label:"Bio",labelCol:{span:6},wrapperCol:{span:16},rules:[{required:!0}],children:o.jsx(l,{rows:3,placeholder:"You can use @ to ref user here",options:[{value:"afc163",label:"afc163"},{value:"zombieJ",label:"zombieJ"},{value:"yesmeck",label:"yesmeck"}]})}),o.jsx(h.Item,{wrapperCol:{span:14,offset:6},children:o.jsxs(Me,{wrap:!0,children:[o.jsx($,{htmlType:"submit",type:"primary",children:"Submit"}),o.jsx($,{htmlType:"button",onClick:r,children:"Reset"})]})})]})})}},J={render:()=>{const a=["afc163","zombiej","yesmeck"].map(r=>({value:r,key:r,label:r}));return o.jsx(m,{title:"Configure disabled and readOnly.",children:o.jsxs(o.Fragment,{children:[o.jsx("div",{style:{marginBottom:10},children:o.jsx(l,{style:{width:"100%"},placeholder:"this is disabled Mentions",disabled:!0,options:a})}),o.jsx(l,{style:{width:"100%"},placeholder:"this is readOnly Mentions",readOnly:!0,options:a})]})})}},B={render:()=>{const[a,r]=g.useState("hello world");return o.jsx(m,{title:"Customize clear button.",children:o.jsxs(o.Fragment,{children:[o.jsx(l,{value:a,onChange:r,allowClear:!0}),o.jsx("br",{}),o.jsx("br",{}),o.jsx(l,{value:a,onChange:r,allowClear:{clearIcon:o.jsx(Ve,{name:"mpLogo"})}}),o.jsx("br",{}),o.jsx("br",{}),o.jsx(l,{value:a,onChange:r,allowClear:!0,rows:3})]})})}},I={render:()=>{const a=t=>{console.log("Change:",t)},r=[{value:"afc163",label:"afc163"},{value:"zombieJ",label:"zombieJ"},{value:"yesmeck",label:"yesmeck"}];return o.jsx(m,{title:"Add status to Mentions with status, which could be error or warning。",children:o.jsxs(Me,{direction:"vertical",children:[o.jsx(l,{onChange:a,onSelect:console.log,defaultValue:"@afc163",status:"error",options:r}),o.jsx(l,{onChange:a,onSelect:console.log,defaultValue:"@afc163",status:"warning",options:r})]})})}};var R,P,U;x.parameters=n(e({},x.parameters),{docs:n(e({},(R=x.parameters)==null?void 0:R.docs),{source:e({originalSource:`{
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
}`},(U=(P=x.parameters)==null?void 0:P.docs)==null?void 0:U.source)})});var A,D,L;y.parameters=n(e({},y.parameters),{docs:n(e({},(A=y.parameters)==null?void 0:A.docs),{source:e({originalSource:`{
  args: {
    allowClear: true
  }
}`},(L=(D=y.parameters)==null?void 0:D.docs)==null?void 0:L.source)})});var N,G,_;v.parameters=n(e({},v.parameters),{docs:n(e({},(N=v.parameters)==null?void 0:N.docs),{source:e({originalSource:`{
  args: {
    autoFocus: true
  }
}`},(_=(G=v.parameters)==null?void 0:G.docs)==null?void 0:_.source)})});var q,W,H;S.parameters=n(e({},S.parameters),{docs:n(e({},(q=S.parameters)==null?void 0:q.docs),{source:e({originalSource:`{
  args: {
    autoSize: true
  }
}`},(H=(W=S.parameters)==null?void 0:W.docs)==null?void 0:H.source)})});var Y,K,Q;C.parameters=n(e({},C.parameters),{docs:n(e({},(Y=C.parameters)==null?void 0:Y.docs),{source:e({originalSource:`{
  args: {
    notFoundContent: 'No Matches Found'
  }
}`},(Q=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Q.source)})});var X,Z,ee;w.parameters=n(e({},w.parameters),{docs:n(e({},(X=w.parameters)==null?void 0:X.docs),{source:e({originalSource:`{
  args: {
    variant: 'borderless'
  }
}`},(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.source)})});var oe,ae,re;F.parameters=n(e({},F.parameters),{docs:n(e({},(oe=F.parameters)==null?void 0:oe.docs),{source:e({originalSource:`{
  args: {
    status: 'warning'
  }
}`},(re=(ae=F.parameters)==null?void 0:ae.docs)==null?void 0:re.source)})});var ne,te,se;j.parameters=n(e({},j.parameters),{docs:n(e({},(ne=j.parameters)==null?void 0:ne.docs),{source:e({originalSource:`{
  args: {
    placeholder: 'Custom Placeholder...'
  }
}`},(se=(te=j.parameters)==null?void 0:te.docs)==null?void 0:se.source)})});var le,ie,ce;E.parameters=n(e({},E.parameters),{docs:n(e({},(le=E.parameters)==null?void 0:le.docs),{source:e({originalSource:`{
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
}`},(ce=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:ce.source)})});var ue,me,de;k.parameters=n(e({},k.parameters),{docs:n(e({},(ue=k.parameters)==null?void 0:ue.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title="Variants of Mentions">
        <Flex vertical gap={12}>
          <Mentions placeholder="Outlined" />
          <Mentions placeholder="Filled" variant="filled" />
          <Mentions placeholder="Borderless" variant="borderless" />
        </Flex>
      </ExampleStory>;
  }
}`},(de=(me=k.parameters)==null?void 0:me.docs)==null?void 0:de.source)})});var pe,he,ge;M.parameters=n(e({},M.parameters),{docs:n(e({},(pe=M.parameters)==null?void 0:pe.docs),{source:e({originalSource:`{
  render: () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState<ItemType[]>([]);
    const ref = useRef<string>();
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
}`},(ge=(he=M.parameters)==null?void 0:he.docs)==null?void 0:ge.source)})});var be,fe,xe;z.parameters=n(e({},z.parameters),{docs:n(e({},(be=z.parameters)==null?void 0:be.docs),{source:e({originalSource:`{
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
    const checkMention = async (_: any, value: string) => {
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
}`},(xe=(fe=z.parameters)==null?void 0:fe.docs)==null?void 0:xe.source)})});var ye,ve,Se;J.parameters=n(e({},J.parameters),{docs:n(e({},(ye=J.parameters)==null?void 0:ye.docs),{source:e({originalSource:`{
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
}`},(Se=(ve=J.parameters)==null?void 0:ve.docs)==null?void 0:Se.source)})});var Ce,we,Fe;B.parameters=n(e({},B.parameters),{docs:n(e({},(Ce=B.parameters)==null?void 0:Ce.docs),{source:e({originalSource:`{
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
}`},(Fe=(we=B.parameters)==null?void 0:we.docs)==null?void 0:Fe.source)})});var je,Ee,ke;I.parameters=n(e({},I.parameters),{docs:n(e({},(je=I.parameters)==null?void 0:je.docs),{source:e({originalSource:`{
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
        <Space direction="vertical">
          <Mentions onChange={onChange} onSelect={console.log} defaultValue="@afc163" status="error" options={options} />
          <Mentions onChange={onChange} onSelect={console.log} defaultValue="@afc163" status="warning" options={options} />
        </Space>
      </ExampleStory>;
  }
}`},(ke=(Ee=I.parameters)==null?void 0:Ee.docs)==null?void 0:ke.source)})});const ro=["Primary","Clearable","AutoFocus","AutoSize","CustomNotFoundContent","Borderless","Warning","CustomPlaceholder","ExampleBasic","ExampleVariants","ExampleAsync","ExampleForm","ExampleDisabledOrReadOnly","ExampleClearIcon","ExampleStatus"];export{v as AutoFocus,S as AutoSize,w as Borderless,y as Clearable,C as CustomNotFoundContent,j as CustomPlaceholder,M as ExampleAsync,E as ExampleBasic,B as ExampleClearIcon,J as ExampleDisabledOrReadOnly,z as ExampleForm,I as ExampleStatus,k as ExampleVariants,x as Primary,F as Warning,ro as __namedExportsOrder,ao as default};
