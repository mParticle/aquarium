var ze=Object.defineProperty,Je=Object.defineProperties;var Be=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var Ie=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable;var V=(o,a,t)=>a in o?ze(o,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[a]=t,e=(o,a)=>{for(var t in a||(a={}))Ie.call(a,t)&&V(o,t,a[t]);if(T)for(var t of T(a))Oe.call(a,t)&&V(o,t,a[t]);return o},r=(o,a)=>Je(o,Be(a));var f=(o,a,t)=>new Promise((u,i)=>{var d=s=>{try{p(t.next(s))}catch(c){i(c)}},b=s=>{try{p(t.throw(s))}catch(c){i(c)}},p=s=>s.done?u(s.value):Promise.resolve(s.value).then(d,b);p((t=t.apply(o,a)).next())});import{j as n}from"./jsx-runtime-CS-_a2eV.js";import{V as l,F as Te,O as h,W as ke,b as $,I as Ve}from"./GlobalNavigation-5Ze4QgXZ.js";import{E as m}from"./ExampleStory-BjUjgIql.js";import"./ConfigProvider-aHzMMMgW.js";import"./_baseClone-BwI25-yt.js";import{r as g}from"./index-Ca44TZ0D.js";import"./index-BxrKW6hI.js";import"./useToken-Dnjd_Rha.js";import"./extends-CCbyfPlC.js";import"./Serializer-DsJDcYJc.js";import"./index-DFiuTWKW.js";import"./isNativeReflectConstruct-DQQXTUsj.js";import"./row-BOpWxek0.js";import"./dayjs.min-kn1EBQqj.js";import"./customParseFormat-CECOPgIS.js";import"./LightTheme-BZ07JyGW.js";import"./_getPrototype-fDUIJvdn.js";const en={title:"Components/Data Entry/Mentions",component:l,args:{}},x={args:{allowClear:!1,autoFocus:!1,autoSize:!1,defaultValue:"",filterOption:!1,notFoundContent:"Not Found",placement:"bottom",prefix:"@",split:" ",status:void 0,validateSearch:void 0,value:"",variant:"outlined",options:[{value:"JohnDoe",label:"John Doe"},{value:"JaneDoe",label:"Jane Doe"},{value:"BobSmith",label:"Bob Smith"}],getPopupContainer:()=>document.body,onBlur:()=>{},onChange:o=>{console.log(`Text Changed: ${o}`)},onFocus:()=>{},onResize:({width:o,height:a})=>{console.log(`Textarea Resized: Width - ${o}, Height - ${a}`)},onSearch:(o,a)=>{alert(`Search Triggered: Text - ${o}, Prefix - ${a}`)},onSelect:(o,a)=>{alert(`Option Selected: ${o.value}, Prefix - ${a}`)}},argTypes:{variant:{control:"select",options:["outlined","borderless","filled"]},status:{control:"select",options:["error","warning"]},placement:{control:"select",options:["top","bottom"]}}},y={args:{allowClear:!0}},v={args:{autoFocus:!0}},S={args:{autoSize:!0}},C={args:{notFoundContent:"No Matches Found"}},w={args:{variant:"borderless"}},F={args:{status:"warning"}},j={args:{placeholder:"Custom Placeholder..."}},E={render:()=>n.jsx(m,{title:"Basic Usage",children:n.jsx(l,{style:{width:"100%"},onChange:o=>{console.log("Change:",o)},onSelect:console.log,defaultValue:"@afc163",options:[{value:"afc163",label:"afc163"},{value:"zombieJ",label:"zombieJ"},{value:"yesmeck",label:"yesmeck"}]})})},M={render:()=>n.jsx(m,{title:"Variants of Mentions",children:n.jsxs(Te,{vertical:!0,gap:12,children:[n.jsx(l,{placeholder:"Outlined"}),n.jsx(l,{placeholder:"Filled",variant:"filled"}),n.jsx(l,{placeholder:"Borderless",variant:"borderless"})]})})},k={render:()=>{const[o,a]=g.useState(!1),[t,u]=g.useState([]),i=g.useRef(),d=s=>{if(!s){u([]);return}fetch(`https://api.github.com/search/users?q=${s}`).then(c=>f(void 0,null,function*(){return yield c.json()})).then(({items:c=[]})=>{var O;i.current===s&&(a(!1),u((O=c.slice(0,10))!=null?O:[]))})},b=g.useCallback(d,[]),p=s=>{console.log("Search:",s),i.current=s,a(!!s),u([]),b(s)};return n.jsx(m,{title:"Async loading from github [begin with @] ",children:n.jsx(l,{style:{width:"100%"},loading:o,onSearch:p,options:t.map(({login:s,avatar_url:c})=>({key:s,value:s,className:"antd-demo-dynamic-option",label:n.jsxs(n.Fragment,{children:[n.jsx("img",{src:c,alt:s}),n.jsx("span",{children:s})]})}))})})}},z={render:()=>{const[o]=h.useForm(),a=()=>{o.resetFields()},t=()=>f(void 0,null,function*(){try{const i=yield o.validateFields();console.log("Submit:",i)}catch(i){console.log("Error:",i)}}),u=(i,d)=>f(void 0,null,function*(){if(l.getMentions(d).length<2)throw new Error("More than one must be selected!")});return n.jsx(m,{title:"Controlled mode, for example, to work with Form.",children:n.jsxs(h,{form:o,layout:"horizontal",onFinish:()=>{t()},children:[n.jsx(h.Item,{name:"coders",label:"Top coders",labelCol:{span:6},wrapperCol:{span:16},rules:[{validator:u}],children:n.jsx(l,{rows:1,options:[{value:"afc163",label:"afc163"},{value:"zombieJ",label:"zombieJ"},{value:"yesmeck",label:"yesmeck"}]})}),n.jsx(h.Item,{name:"bio",label:"Bio",labelCol:{span:6},wrapperCol:{span:16},rules:[{required:!0}],children:n.jsx(l,{rows:3,placeholder:"You can use @ to ref user here",options:[{value:"afc163",label:"afc163"},{value:"zombieJ",label:"zombieJ"},{value:"yesmeck",label:"yesmeck"}]})}),n.jsx(h.Item,{wrapperCol:{span:14,offset:6},children:n.jsxs(ke,{wrap:!0,children:[n.jsx($,{htmlType:"submit",type:"primary",children:"Submit"}),n.jsx($,{htmlType:"button",onClick:a,children:"Reset"})]})})]})})}},J={render:()=>{const o=["afc163","zombiej","yesmeck"].map(a=>({value:a,key:a,label:a}));return n.jsx(m,{title:"Configure disabled and readOnly.",children:n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{marginBottom:10},children:n.jsx(l,{style:{width:"100%"},placeholder:"this is disabled Mentions",disabled:!0,options:o})}),n.jsx(l,{style:{width:"100%"},placeholder:"this is readOnly Mentions",readOnly:!0,options:o})]})})}},B={render:()=>{const[o,a]=g.useState("hello world");return n.jsx(m,{title:"Customize clear button.",children:n.jsxs(n.Fragment,{children:[n.jsx(l,{value:o,onChange:a,allowClear:!0}),n.jsx("br",{}),n.jsx("br",{}),n.jsx(l,{value:o,onChange:a,allowClear:{clearIcon:n.jsx(Ve,{name:"mpLogo"})}}),n.jsx("br",{}),n.jsx("br",{}),n.jsx(l,{value:o,onChange:a,allowClear:!0,rows:3})]})})}},I={render:()=>{const o=t=>{console.log("Change:",t)},a=[{value:"afc163",label:"afc163"},{value:"zombieJ",label:"zombieJ"},{value:"yesmeck",label:"yesmeck"}];return n.jsx(m,{title:"Add status to Mentions with status, which could be error or warning。",children:n.jsxs(ke,{direction:"vertical",children:[n.jsx(l,{onChange:o,onSelect:console.log,defaultValue:"@afc163",status:"error",options:a}),n.jsx(l,{onChange:o,onSelect:console.log,defaultValue:"@afc163",status:"warning",options:a})]})})}};var R,U,P;x.parameters=r(e({},x.parameters),{docs:r(e({},(R=x.parameters)==null?void 0:R.docs),{source:e({originalSource:`{
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
}`},(P=(U=x.parameters)==null?void 0:U.docs)==null?void 0:P.source)})});var D,A,L;y.parameters=r(e({},y.parameters),{docs:r(e({},(D=y.parameters)==null?void 0:D.docs),{source:e({originalSource:`{
  args: {
    allowClear: true
  }
}`},(L=(A=y.parameters)==null?void 0:A.docs)==null?void 0:L.source)})});var N,G,_;v.parameters=r(e({},v.parameters),{docs:r(e({},(N=v.parameters)==null?void 0:N.docs),{source:e({originalSource:`{
  args: {
    autoFocus: true
  }
}`},(_=(G=v.parameters)==null?void 0:G.docs)==null?void 0:_.source)})});var W,q,H;S.parameters=r(e({},S.parameters),{docs:r(e({},(W=S.parameters)==null?void 0:W.docs),{source:e({originalSource:`{
  args: {
    autoSize: true
  }
}`},(H=(q=S.parameters)==null?void 0:q.docs)==null?void 0:H.source)})});var Y,K,Q;C.parameters=r(e({},C.parameters),{docs:r(e({},(Y=C.parameters)==null?void 0:Y.docs),{source:e({originalSource:`{
  args: {
    notFoundContent: 'No Matches Found'
  }
}`},(Q=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Q.source)})});var X,Z,ee;w.parameters=r(e({},w.parameters),{docs:r(e({},(X=w.parameters)==null?void 0:X.docs),{source:e({originalSource:`{
  args: {
    variant: 'borderless'
  }
}`},(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.source)})});var ne,oe,ae;F.parameters=r(e({},F.parameters),{docs:r(e({},(ne=F.parameters)==null?void 0:ne.docs),{source:e({originalSource:`{
  args: {
    status: 'warning'
  }
}`},(ae=(oe=F.parameters)==null?void 0:oe.docs)==null?void 0:ae.source)})});var re,te,se;j.parameters=r(e({},j.parameters),{docs:r(e({},(re=j.parameters)==null?void 0:re.docs),{source:e({originalSource:`{
  args: {
    placeholder: 'Custom Placeholder...'
  }
}`},(se=(te=j.parameters)==null?void 0:te.docs)==null?void 0:se.source)})});var le,ie,ce;E.parameters=r(e({},E.parameters),{docs:r(e({},(le=E.parameters)==null?void 0:le.docs),{source:e({originalSource:`{
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
}`},(ce=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:ce.source)})});var ue,me,de;M.parameters=r(e({},M.parameters),{docs:r(e({},(ue=M.parameters)==null?void 0:ue.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title="Variants of Mentions">
        <Flex vertical gap={12}>
          <Mentions placeholder="Outlined" />
          <Mentions placeholder="Filled" variant="filled" />
          <Mentions placeholder="Borderless" variant="borderless" />
        </Flex>
      </ExampleStory>;
  }
}`},(de=(me=M.parameters)==null?void 0:me.docs)==null?void 0:de.source)})});var pe,he,ge;k.parameters=r(e({},k.parameters),{docs:r(e({},(pe=k.parameters)==null?void 0:pe.docs),{source:e({originalSource:`{
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
}`},(ge=(he=k.parameters)==null?void 0:he.docs)==null?void 0:ge.source)})});var be,fe,xe;z.parameters=r(e({},z.parameters),{docs:r(e({},(be=z.parameters)==null?void 0:be.docs),{source:e({originalSource:`{
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
}`},(xe=(fe=z.parameters)==null?void 0:fe.docs)==null?void 0:xe.source)})});var ye,ve,Se;J.parameters=r(e({},J.parameters),{docs:r(e({},(ye=J.parameters)==null?void 0:ye.docs),{source:e({originalSource:`{
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
}`},(Se=(ve=J.parameters)==null?void 0:ve.docs)==null?void 0:Se.source)})});var Ce,we,Fe;B.parameters=r(e({},B.parameters),{docs:r(e({},(Ce=B.parameters)==null?void 0:Ce.docs),{source:e({originalSource:`{
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
}`},(Fe=(we=B.parameters)==null?void 0:we.docs)==null?void 0:Fe.source)})});var je,Ee,Me;I.parameters=r(e({},I.parameters),{docs:r(e({},(je=I.parameters)==null?void 0:je.docs),{source:e({originalSource:`{
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
}`},(Me=(Ee=I.parameters)==null?void 0:Ee.docs)==null?void 0:Me.source)})});const nn=["Primary","Clearable","AutoFocus","AutoSize","CustomNotFoundContent","Borderless","Warning","CustomPlaceholder","ExampleBasic","ExampleVariants","ExampleAsync","ExampleForm","ExampleDisabledOrReadOnly","ExampleClearIcon","ExampleStatus"];export{v as AutoFocus,S as AutoSize,w as Borderless,y as Clearable,C as CustomNotFoundContent,j as CustomPlaceholder,k as ExampleAsync,E as ExampleBasic,B as ExampleClearIcon,J as ExampleDisabledOrReadOnly,z as ExampleForm,I as ExampleStatus,M as ExampleVariants,x as Primary,F as Warning,nn as __namedExportsOrder,en as default};
