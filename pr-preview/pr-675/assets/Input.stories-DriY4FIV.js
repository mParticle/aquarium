var re=Object.defineProperty,ne=Object.defineProperties;var ae=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var j=(r,a,s)=>a in r?re(r,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[a]=s,e=(r,a)=>{for(var s in a||(a={}))se.call(a,s)&&j(r,s,a[s]);if(T)for(var s of T(a))oe.call(a,s)&&j(r,s,a[s]);return r},n=(r,a)=>ne(r,ae(a));import{j as t}from"./jsx-runtime-C9TrHvcC.js";import{r as S}from"./index-3OP4wdng.js";import{t as l,a as i,u as w,I as le,f as u,h as ie,F as ue,c as ce,v as de,R as pe}from"./NavigationItemsService-Dp0aLuvH.js";import"./ErrorStateIcon-BS17_6tf.js";import"./SuccessStateIcon-HuPZrMr2.js";import"./WarningStateIcon-Duz4utQS.js";import"./_baseClone-DwBCp-Ss.js";const me={title:"Components/Data Entry/Input",component:l,args:{placeholder:"Enter text",disabled:!1,maxLength:void 0,status:void 0,size:"middle",type:"text",addonBefore:void 0,allowClear:!1,value:"",onChange:r=>{console.log("Input changed: "+r.target.value)},onPressEnter:r=>{console.log("Enter key pressed: "+String(r))}},argTypes:{maxLength:{control:"number"},status:{control:"select",options:["warning","error","default"]},size:{control:"select",options:["small","medium","large"]}}},he=({label:r,tooltipMessage:a})=>t.jsxs(ue,{align:"center",gap:4,children:[t.jsx(ce.Text,{children:r}),t.jsx(de,{title:a,children:t.jsx(pe,{})})]}),c={render:()=>t.jsx(i,{direction:"vertical",size:4,style:{maxWidth:320},children:t.jsx(l,{placeholder:"Enter text",type:"text",style:{width:320}})})},d={render:()=>{const r=a=>{console.log("InputNumber changed:",a)};return t.jsx(i,{direction:"vertical",size:4,style:{maxWidth:320},children:t.jsx(w,{min:0,max:100,placeholder:"Enter number",style:{width:320},controls:!0,onChange:r})})}},p={render:()=>{const[r,a]=S.useState(0),s=o=>{typeof o=="number"&&a(o)},v=o=>o==null||o===""?"":`${o}%`,f=o=>o?o.replace("%",""):"";return t.jsx(i,{direction:"vertical",size:4,style:{maxWidth:320},children:t.jsx(w,{min:0,max:100,value:r,onChange:s,formatter:v,parser:f,style:{width:140},controls:!0})})}},m={render:()=>{const[r,a]=S.useState(30),[s,v]=S.useState("hours"),f=t.jsx(ie,{value:s,onChange:v,options:[{label:"Minutes",value:"minutes"},{label:"Hours",value:"hours"},{label:"Days",value:"days"}],dropdownMatchSelectWidth:!1,style:{width:100}});return t.jsx(i,{direction:"vertical",size:4,style:{maxWidth:320},children:t.jsx(w,{min:0,value:r,onChange:o=>{typeof o=="number"&&a(o)},addonAfter:f,placeholder:"Enter number",style:{width:200},controls:!0})})}},h={render:()=>t.jsx(i,{direction:"vertical",size:4,style:{maxWidth:320},children:t.jsx(l,{placeholder:"Search",allowClear:!0,autoFocus:!0,addonBefore:t.jsx(le,{name:"search",size:"sm",color:"default"}),style:{width:320}})})},x={render:()=>t.jsx(u,{layout:"vertical",style:{maxWidth:320},children:t.jsx(u.Item,{label:"Required Text Input",name:"requiredTextInput",rules:[{required:!0,message:"Please enter a value."}],children:t.jsx(l,{placeholder:"Enter text",style:{width:320}})})})},y={render:()=>t.jsx(u,{layout:"vertical",style:{maxWidth:320},children:t.jsx(u.Item,{label:"Optional Text Input",name:"optionalTextInput",children:t.jsx(l,{placeholder:"Enter text",style:{width:320}})})})},I={render:()=>t.jsx(u,{layout:"vertical",style:{maxWidth:320},children:t.jsx(u.Item,{label:t.jsx(he,{label:"Text Input with Help",tooltipMessage:"Helpful description for this input"}),children:t.jsx(l,{placeholder:"Enter text",style:{width:320}})})})},g={render:()=>t.jsx(i,{direction:"vertical",size:4,style:{maxWidth:320},children:t.jsx(l.TextArea,{placeholder:"Share feedback...",maxLength:500,rows:4,style:{width:320}})})},b={render:()=>t.jsx(i,{direction:"vertical",size:4,style:{maxWidth:320},children:t.jsx(l.Password,{placeholder:"Enter password",style:{width:320}})})};var W,F,C;c.parameters=n(e({},c.parameters),{docs:n(e({},(W=c.parameters)==null?void 0:W.docs),{source:e({originalSource:`{
  render: () => {
    return <Space direction="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <Input placeholder="Enter text" type="text" style={{
        width: 320
      }} />
      </Space>;
  }
}`},(C=(F=c.parameters)==null?void 0:F.docs)==null?void 0:C.source)})});var E,P,z;d.parameters=n(e({},d.parameters),{docs:n(e({},(E=d.parameters)==null?void 0:E.docs),{source:e({originalSource:`{
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
}`},(z=(P=d.parameters)==null?void 0:P.docs)==null?void 0:z.source)})});var N,V,A;p.parameters=n(e({},p.parameters),{docs:n(e({},(N=p.parameters)==null?void 0:N.docs),{source:e({originalSource:`{
  render: () => {
    const [value, setValue] = useState<number>(0);
    const handleChange: InputNumberProps['onChange'] = newValue => {
      if (typeof newValue === 'number') {
        setValue(newValue);
      }
    };
    const formatPercentage: NonNullable<InputNumberProps['formatter']> = inputValue => {
      if (inputValue === undefined || inputValue === null || inputValue === '') {
        return '';
      }
      return \`\${inputValue}%\`;
    };
    const parsePercentage: NonNullable<InputNumberProps['parser']> = inputValue => {
      return inputValue ? inputValue.replace('%', '') : '';
    };
    return <Space direction="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <InputNumber min={0} max={100} value={value} onChange={handleChange} formatter={formatPercentage} parser={parsePercentage} style={{
        width: 140
      }} controls />
      </Space>;
  }
}`},(A=(V=p.parameters)==null?void 0:V.docs)==null?void 0:A.source)})});var H,q,O;m.parameters=n(e({},m.parameters),{docs:n(e({},(H=m.parameters)==null?void 0:H.docs),{source:e({originalSource:`{
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
}`},(O=(q=m.parameters)==null?void 0:q.docs)==null?void 0:O.source)})});var R,M,D;h.parameters=n(e({},h.parameters),{docs:n(e({},(R=h.parameters)==null?void 0:R.docs),{source:e({originalSource:`{
  render: () => {
    return <Space direction="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <Input placeholder="Search" allowClear autoFocus addonBefore={<Icon name="search" size="sm" color="default" />} style={{
        width: 320
      }} />
      </Space>;
  }
}`},(D=(M=h.parameters)==null?void 0:M.docs)==null?void 0:D.source)})});var L,_,k;x.parameters=n(e({},x.parameters),{docs:n(e({},(L=x.parameters)==null?void 0:L.docs),{source:e({originalSource:`{
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
}`},(k=(_=x.parameters)==null?void 0:_.docs)==null?void 0:k.source)})});var B,U,$;y.parameters=n(e({},y.parameters),{docs:n(e({},(B=y.parameters)==null?void 0:B.docs),{source:e({originalSource:`{
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
}`},($=(U=y.parameters)==null?void 0:U.docs)==null?void 0:$.source)})});var G,J,K;I.parameters=n(e({},I.parameters),{docs:n(e({},(G=I.parameters)==null?void 0:G.docs),{source:e({originalSource:`{
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
}`},(K=(J=I.parameters)==null?void 0:J.docs)==null?void 0:K.source)})});var Q,X,Y;g.parameters=n(e({},g.parameters),{docs:n(e({},(Q=g.parameters)==null?void 0:Q.docs),{source:e({originalSource:`{
  render: () => {
    return <Space direction="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <Input.TextArea placeholder="Share feedback..." maxLength={500} rows={4} style={{
        width: 320
      }} />
      </Space>;
  }
}`},(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source)})});var Z,ee,te;b.parameters=n(e({},b.parameters),{docs:n(e({},(Z=b.parameters)==null?void 0:Z.docs),{source:e({originalSource:`{
  render: () => {
    return <Space direction="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <Input.Password placeholder="Enter password" style={{
        width: 320
      }} />
      </Space>;
  }
}`},(te=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:te.source)})});const xe=["TextInput","NumberInput","PercentageInput","DurationInput","SearchInput","RequiredTextInput","OptionalInput","HelpTextInput","TextAreaInput","PasswordInput"],Te=Object.freeze(Object.defineProperty({__proto__:null,DurationInput:m,HelpTextInput:I,NumberInput:d,OptionalInput:y,PasswordInput:b,PercentageInput:p,RequiredTextInput:x,SearchInput:h,TextAreaInput:g,TextInput:c,__namedExportsOrder:xe,default:me},Symbol.toStringTag,{value:"Module"}));export{m as D,I as H,Te as I,d as N,y as O,p as P,x as R,h as S,c as T,g as a,b};
