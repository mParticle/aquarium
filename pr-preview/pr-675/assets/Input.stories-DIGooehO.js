var ae=Object.defineProperty,se=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var f=(r,a,s)=>a in r?ae(r,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[a]=s,t=(r,a)=>{for(var s in a||(a={}))oe.call(a,s)&&f(r,s,a[s]);if(j)for(var s of j(a))ie.call(a,s)&&f(r,s,a[s]);return r},n=(r,a)=>se(r,le(a));import{j as e}from"./jsx-runtime-C9TrHvcC.js";import{r as S}from"./index-3OP4wdng.js";import{t as l,a as o,u as b,F as w,c as re,I as ce,f as i,h as ue,v as de,R as pe}from"./NavigationItemsService-DcHKRUgw.js";import"./ErrorStateIcon-tcH5z2Kq.js";import"./SuccessStateIcon--57R4X2e.js";import"./WarningStateIcon-BxWKhc6z.js";import"./_baseClone-DwBCp-Ss.js";const me={title:"Components/Data Entry/Input",component:l,args:{placeholder:"Enter text",disabled:!1,maxLength:void 0,status:void 0,size:"middle",type:"text",addonBefore:void 0,allowClear:!1,value:"",onChange:r=>{console.log("Input changed: "+r.target.value)},onPressEnter:r=>{console.log("Enter key pressed: "+String(r))}},argTypes:{maxLength:{control:"number"},status:{control:"select",options:["warning","error","default"]},size:{control:"select",options:["small","medium","large"]}}},he=({label:r,tooltipMessage:a})=>e.jsxs(w,{align:"center",gap:4,children:[e.jsx(re.Text,{children:r}),e.jsx(de,{title:a,children:e.jsx(pe,{})})]}),c={render:()=>e.jsx(o,{direction:"vertical",size:4,style:{maxWidth:320},children:e.jsx(l,{placeholder:"Enter text",type:"text",style:{width:320}})})},u={render:()=>{const r=a=>{console.log("InputNumber changed:",a)};return e.jsx(o,{direction:"vertical",size:4,style:{maxWidth:320},children:e.jsx(b,{min:0,max:100,placeholder:"Enter number",style:{width:320},controls:!0,onChange:r})})}},d={render:()=>{const[r,a]=S.useState(0),s=v=>{typeof v=="number"&&a(v)};return e.jsx(o,{direction:"vertical",size:4,style:{maxWidth:320},children:e.jsxs(w,{align:"center",gap:8,children:[e.jsx(b,{min:0,max:100,value:r,onChange:s,style:{width:140},controls:!0}),e.jsx(re.Text,{children:"%"})]})})}},p={render:()=>{const[r,a]=S.useState(30),[s,v]=S.useState("hours"),ne=e.jsx(ue,{value:s,onChange:v,options:[{label:"Minutes",value:"minutes"},{label:"Hours",value:"hours"},{label:"Days",value:"days"}],dropdownMatchSelectWidth:!1,style:{width:100}});return e.jsx(o,{direction:"vertical",size:4,style:{maxWidth:320},children:e.jsxs(w,{align:"center",gap:8,children:[e.jsx(b,{min:0,value:r,onChange:T=>{typeof T=="number"&&a(T)},placeholder:"Enter number",style:{width:140},controls:!0}),ne]})})}},m={render:()=>e.jsx(o,{direction:"vertical",size:4,style:{maxWidth:320},children:e.jsx(l,{placeholder:"Search",allowClear:!0,autoFocus:!0,addonBefore:e.jsx(ce,{name:"search",size:"sm",color:"default"}),style:{width:320}})})},h={render:()=>e.jsx(i,{layout:"vertical",style:{maxWidth:320},children:e.jsx(i.Item,{label:"Required Text Input",name:"requiredTextInput",rules:[{required:!0,message:"Please enter a value."}],children:e.jsx(l,{placeholder:"Enter text",style:{width:320}})})})},x={render:()=>e.jsx(i,{layout:"vertical",style:{maxWidth:320},children:e.jsx(i.Item,{label:"Optional Text Input",name:"optionalTextInput",children:e.jsx(l,{placeholder:"Enter text",style:{width:320}})})})},y={render:()=>e.jsx(i,{layout:"vertical",style:{maxWidth:320},children:e.jsx(i.Item,{label:e.jsx(he,{label:"Text Input with Help",tooltipMessage:"Helpful description for this input"}),children:e.jsx(l,{placeholder:"Enter text",style:{width:320}})})})},g={render:()=>e.jsx(o,{direction:"vertical",size:4,style:{maxWidth:320},children:e.jsx(l.TextArea,{placeholder:"Share feedback...",maxLength:500,rows:4,style:{width:320}})})},I={render:()=>e.jsx(o,{direction:"vertical",size:4,style:{maxWidth:320},children:e.jsx(l.Password,{placeholder:"Enter password",style:{width:320}})})};var F,W,C;c.parameters=n(t({},c.parameters),{docs:n(t({},(F=c.parameters)==null?void 0:F.docs),{source:t({originalSource:`{
  render: () => {
    return <Space direction="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <Input placeholder="Enter text" type="text" style={{
        width: 320
      }} />
      </Space>;
  }
}`},(C=(W=c.parameters)==null?void 0:W.docs)==null?void 0:C.source)})});var E,z,P;u.parameters=n(t({},u.parameters),{docs:n(t({},(E=u.parameters)==null?void 0:E.docs),{source:t({originalSource:`{
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
}`},(P=(z=u.parameters)==null?void 0:z.docs)==null?void 0:P.source)})});var N,V,H;d.parameters=n(t({},d.parameters),{docs:n(t({},(N=d.parameters)==null?void 0:N.docs),{source:t({originalSource:`{
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
}`},(H=(V=d.parameters)==null?void 0:V.docs)==null?void 0:H.source)})});var q,O,R;p.parameters=n(t({},p.parameters),{docs:n(t({},(q=p.parameters)==null?void 0:q.docs),{source:t({originalSource:`{
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
        <Flex align="center" gap={8}>
          <InputNumber min={0} value={value} onChange={newValue => {
          if (typeof newValue === 'number') {
            setValue(newValue);
          }
        }} placeholder="Enter number" style={{
          width: 140
        }} controls />
          {selectAfter}
        </Flex>
      </Space>;
  }
}`},(R=(O=p.parameters)==null?void 0:O.docs)==null?void 0:R.source)})});var A,M,D;m.parameters=n(t({},m.parameters),{docs:n(t({},(A=m.parameters)==null?void 0:A.docs),{source:t({originalSource:`{
  render: () => {
    return <Space direction="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <Input placeholder="Search" allowClear autoFocus addonBefore={<Icon name="search" size="sm" color="default" />} style={{
        width: 320
      }} />
      </Space>;
  }
}`},(D=(M=m.parameters)==null?void 0:M.docs)==null?void 0:D.source)})});var L,_,k;h.parameters=n(t({},h.parameters),{docs:n(t({},(L=h.parameters)==null?void 0:L.docs),{source:t({originalSource:`{
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
}`},(k=(_=h.parameters)==null?void 0:_.docs)==null?void 0:k.source)})});var B,U,G;x.parameters=n(t({},x.parameters),{docs:n(t({},(B=x.parameters)==null?void 0:B.docs),{source:t({originalSource:`{
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
}`},(G=(U=x.parameters)==null?void 0:U.docs)==null?void 0:G.source)})});var J,K,Q;y.parameters=n(t({},y.parameters),{docs:n(t({},(J=y.parameters)==null?void 0:J.docs),{source:t({originalSource:`{
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
}`},(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source)})});var X,Y,Z;g.parameters=n(t({},g.parameters),{docs:n(t({},(X=g.parameters)==null?void 0:X.docs),{source:t({originalSource:`{
  render: () => {
    return <Space direction="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <Input.TextArea placeholder="Share feedback..." maxLength={500} rows={4} style={{
        width: 320
      }} />
      </Space>;
  }
}`},(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source)})});var $,ee,te;I.parameters=n(t({},I.parameters),{docs:n(t({},($=I.parameters)==null?void 0:$.docs),{source:t({originalSource:`{
  render: () => {
    return <Space direction="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <Input.Password placeholder="Enter password" style={{
        width: 320
      }} />
      </Space>;
  }
}`},(te=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:te.source)})});const xe=["TextInput","NumberInput","PercentageInput","DurationInput","SearchInput","RequiredTextInput","OptionalInput","HelpTextInput","TextAreaInput","PasswordInput"],je=Object.freeze(Object.defineProperty({__proto__:null,DurationInput:p,HelpTextInput:y,NumberInput:u,OptionalInput:x,PasswordInput:I,PercentageInput:d,RequiredTextInput:h,SearchInput:m,TextAreaInput:g,TextInput:c,__namedExportsOrder:xe,default:me},Symbol.toStringTag,{value:"Module"}));export{p as D,y as H,je as I,u as N,x as O,d as P,h as R,m as S,c as T,g as a,I as b};
