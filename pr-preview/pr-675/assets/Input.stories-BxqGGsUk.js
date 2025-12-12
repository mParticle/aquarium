var ae=Object.defineProperty,se=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var f=(r,a,s)=>a in r?ae(r,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[a]=s,t=(r,a)=>{for(var s in a||(a={}))le.call(a,s)&&f(r,s,a[s]);if(T)for(var s of T(a))ie.call(a,s)&&f(r,s,a[s]);return r},n=(r,a)=>se(r,oe(a));import{j as e}from"./jsx-runtime-C9TrHvcC.js";import{r as S}from"./index-3OP4wdng.js";import{t as o,a as l,u as b,F as te,c as re,I as ce,f as i,h as ue,v as de,R as pe}from"./NavigationItemsService-CQo6kNap.js";import"./ErrorStateIcon-BS17_6tf.js";import"./SuccessStateIcon-HuPZrMr2.js";import"./WarningStateIcon-Duz4utQS.js";import"./_baseClone-DwBCp-Ss.js";const me={title:"Components/Data Entry/Input",component:o,args:{placeholder:"Enter text",disabled:!1,maxLength:void 0,status:void 0,size:"middle",type:"text",addonBefore:void 0,allowClear:!1,value:"",onChange:r=>{console.log("Input changed: "+r.target.value)},onPressEnter:r=>{console.log("Enter key pressed: "+String(r))}},argTypes:{maxLength:{control:"number"},status:{control:"select",options:["warning","error","default"]},size:{control:"select",options:["small","medium","large"]}}},he=({label:r,tooltipMessage:a})=>e.jsxs(te,{align:"center",gap:4,children:[e.jsx(re.Text,{children:r}),e.jsx(de,{title:a,children:e.jsx(pe,{})})]}),c={render:()=>e.jsx(l,{direction:"vertical",size:4,style:{maxWidth:320},children:e.jsx(o,{placeholder:"Enter text",type:"text",style:{width:320}})})},u={render:()=>{const r=a=>{console.log("InputNumber changed:",a)};return e.jsx(l,{direction:"vertical",size:4,style:{maxWidth:320},children:e.jsx(b,{min:0,max:100,placeholder:"Enter number",style:{width:320},controls:!0,onChange:r})})}},d={render:()=>{const[r,a]=S.useState(0),s=v=>{typeof v=="number"&&a(v)};return e.jsx(l,{direction:"vertical",size:4,style:{maxWidth:320},children:e.jsxs(te,{align:"center",gap:8,children:[e.jsx(b,{min:0,max:100,value:r,onChange:s,style:{width:140},controls:!0}),e.jsx(re.Text,{children:"%"})]})})}},p={render:()=>{const[r,a]=S.useState(30),[s,v]=S.useState("hours"),ne=e.jsx(ue,{value:s,onChange:v,options:[{label:"Minutes",value:"minutes"},{label:"Hours",value:"hours"},{label:"Days",value:"days"}],dropdownMatchSelectWidth:!1,style:{width:100}});return e.jsx(l,{direction:"vertical",size:4,style:{maxWidth:320},children:e.jsx(b,{min:0,value:r,onChange:w=>{typeof w=="number"&&a(w)},addonAfter:ne,placeholder:"Enter number",style:{width:200},controls:!0})})}},m={render:()=>e.jsx(l,{direction:"vertical",size:4,style:{maxWidth:320},children:e.jsx(o,{placeholder:"Search",allowClear:!0,autoFocus:!0,addonBefore:e.jsx(ce,{name:"search",size:"sm",color:"default"}),style:{width:320}})})},h={render:()=>e.jsx(i,{layout:"vertical",style:{maxWidth:320},children:e.jsx(i.Item,{label:"Required Text Input",name:"requiredTextInput",rules:[{required:!0,message:"Please enter a value."}],children:e.jsx(o,{placeholder:"Enter text",style:{width:320}})})})},x={render:()=>e.jsx(i,{layout:"vertical",style:{maxWidth:320},children:e.jsx(i.Item,{label:"Optional Text Input",name:"optionalTextInput",children:e.jsx(o,{placeholder:"Enter text",style:{width:320}})})})},y={render:()=>e.jsx(i,{layout:"vertical",style:{maxWidth:320},children:e.jsx(i.Item,{label:e.jsx(he,{label:"Text Input with Help",tooltipMessage:"Helpful description for this input"}),children:e.jsx(o,{placeholder:"Enter text",style:{width:320}})})})},I={render:()=>e.jsx(l,{direction:"vertical",size:4,style:{maxWidth:320},children:e.jsx(o.TextArea,{placeholder:"Share feedback...",maxLength:500,rows:4,style:{width:320}})})},g={render:()=>e.jsx(l,{direction:"vertical",size:4,style:{maxWidth:320},children:e.jsx(o.Password,{placeholder:"Enter password",style:{width:320}})})};var j,F,W;c.parameters=n(t({},c.parameters),{docs:n(t({},(j=c.parameters)==null?void 0:j.docs),{source:t({originalSource:`{
  render: () => {
    return <Space direction="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <Input placeholder="Enter text" type="text" style={{
        width: 320
      }} />
      </Space>;
  }
}`},(W=(F=c.parameters)==null?void 0:F.docs)==null?void 0:W.source)})});var C,E,z;u.parameters=n(t({},u.parameters),{docs:n(t({},(C=u.parameters)==null?void 0:C.docs),{source:t({originalSource:`{
  render: () => {
    const handleChange: InputNumberProps['onChange'] = value => {
      console.log('InputNumber changed:', value);
    };
    return <Space direction="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <InputNumber min={0} max={100} placeholder="Enter number" style={{
        width: 320
      }} controls onChange={handleChange} />
      </Space>;
  }
}`},(z=(E=u.parameters)==null?void 0:E.docs)==null?void 0:z.source)})});var P,N,V;d.parameters=n(t({},d.parameters),{docs:n(t({},(P=d.parameters)==null?void 0:P.docs),{source:t({originalSource:`{
  render: () => {
    const [value, setValue] = useState<number>(0);
    const handleChange: InputNumberProps['onChange'] = newValue => {
      if (typeof newValue === 'number') {
        setValue(newValue);
      }
    };
    return <Space direction="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <Flex align="center" gap={8}>
          <InputNumber min={0} max={100} value={value} onChange={handleChange} style={{
          width: 140
        }} controls />
          <Typography.Text>%</Typography.Text>
        </Flex>
      </Space>;
  }
}`},(V=(N=d.parameters)==null?void 0:N.docs)==null?void 0:V.source)})});var A,H,q;p.parameters=n(t({},p.parameters),{docs:n(t({},(A=p.parameters)==null?void 0:A.docs),{source:t({originalSource:`{
  render: () => {
    const [value, setValue] = useState<number>(30);
    const [unit, setUnit] = useState<string>('hours');
    const selectAfter = <Select value={unit} onChange={setUnit} options={[{
      label: 'Minutes',
      value: 'minutes'
    }, {
      label: 'Hours',
      value: 'hours'
    }, {
      label: 'Days',
      value: 'days'
    }]} dropdownMatchSelectWidth={false} style={{
      width: 100
    }} />;
    return <Space direction="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <InputNumber min={0} value={value} onChange={newValue => {
        if (typeof newValue === 'number') {
          setValue(newValue);
        }
      }} addonAfter={selectAfter} placeholder="Enter number" style={{
        width: 200
      }} controls />
      </Space>;
  }
}`},(q=(H=p.parameters)==null?void 0:H.docs)==null?void 0:q.source)})});var O,R,M;m.parameters=n(t({},m.parameters),{docs:n(t({},(O=m.parameters)==null?void 0:O.docs),{source:t({originalSource:`{
  render: () => {
    return <Space direction="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <Input placeholder="Search" allowClear autoFocus addonBefore={<Icon name="search" size="sm" color="default" />} style={{
        width: 320
      }} />
      </Space>;
  }
}`},(M=(R=m.parameters)==null?void 0:R.docs)==null?void 0:M.source)})});var D,L,_;h.parameters=n(t({},h.parameters),{docs:n(t({},(D=h.parameters)==null?void 0:D.docs),{source:t({originalSource:`{
  render: () => {
    return <Form<FieldType> layout="vertical" style={{
      maxWidth: 320
    }}>
        <Form.Item<FieldType> label="Required Text Input" name="requiredTextInput" rules={[{
        required: true,
        message: 'Please enter a value.'
      }]}>
          <Input placeholder="Enter text" style={{
          width: 320
        }} />
        </Form.Item>
      </Form>;
  }
}`},(_=(L=h.parameters)==null?void 0:L.docs)==null?void 0:_.source)})});var k,B,U;x.parameters=n(t({},x.parameters),{docs:n(t({},(k=x.parameters)==null?void 0:k.docs),{source:t({originalSource:`{
  render: () => {
    return <Form<FieldType> layout="vertical" style={{
      maxWidth: 320
    }}>
        <Form.Item<FieldType> label="Optional Text Input" name="optionalTextInput">
          <Input placeholder="Enter text" style={{
          width: 320
        }} />
        </Form.Item>
      </Form>;
  }
}`},(U=(B=x.parameters)==null?void 0:B.docs)==null?void 0:U.source)})});var G,J,K;y.parameters=n(t({},y.parameters),{docs:n(t({},(G=y.parameters)==null?void 0:G.docs),{source:t({originalSource:`{
  render: () => {
    return <Form<FieldType> layout="vertical" style={{
      maxWidth: 320
    }}>
        <Form.Item<FieldType> label={<LabelWithTooltip label="Text Input with Help" tooltipMessage="Helpful description for this input" />}>
          <Input placeholder="Enter text" style={{
          width: 320
        }} />
        </Form.Item>
      </Form>;
  }
}`},(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source)})});var Q,X,Y;I.parameters=n(t({},I.parameters),{docs:n(t({},(Q=I.parameters)==null?void 0:Q.docs),{source:t({originalSource:`{
  render: () => {
    return <Space direction="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <Input.TextArea placeholder="Share feedback..." maxLength={500} rows={4} style={{
        width: 320
      }} />
      </Space>;
  }
}`},(Y=(X=I.parameters)==null?void 0:X.docs)==null?void 0:Y.source)})});var Z,$,ee;g.parameters=n(t({},g.parameters),{docs:n(t({},(Z=g.parameters)==null?void 0:Z.docs),{source:t({originalSource:`{
  render: () => {
    return <Space direction="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <Input.Password placeholder="Enter password" style={{
        width: 320
      }} />
      </Space>;
  }
}`},(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source)})});const xe=["TextInput","NumberInput","PercentageInput","DurationInput","SearchInput","RequiredTextInput","OptionalInput","HelpTextInput","TextAreaInput","PasswordInput"],fe=Object.freeze(Object.defineProperty({__proto__:null,DurationInput:p,HelpTextInput:y,NumberInput:u,OptionalInput:x,PasswordInput:g,PercentageInput:d,RequiredTextInput:h,SearchInput:m,TextAreaInput:I,TextInput:c,__namedExportsOrder:xe,default:me},Symbol.toStringTag,{value:"Module"}));export{p as D,y as H,fe as I,u as N,x as O,d as P,h as R,m as S,c as T,I as a,g as b};
