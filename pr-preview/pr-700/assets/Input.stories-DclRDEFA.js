var re=Object.defineProperty,ne=Object.defineProperties;var ae=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var T=(r,a,s)=>a in r?re(r,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[a]=s,e=(r,a)=>{for(var s in a||(a={}))se.call(a,s)&&T(r,s,a[s]);if(f)for(var s of f(a))oe.call(a,s)&&T(r,s,a[s]);return r},n=(r,a)=>ne(r,ae(a));import{j as t}from"./jsx-runtime-C9TrHvcC.js";import{r as S}from"./index-3OP4wdng.js";import{t as o,a as l,u as b,I as le,f as i,h as ie,F as ce,c as ue,v as de,w as pe}from"./NavigationItemsService-D2YcL_vY.js";import"./ErrorStateIcon-De0UsA35.js";import"./SuccessStateIcon-HUSReTb6.js";import"./WarningStateIcon-CoXOx-pH.js";import"./_baseClone-DwBCp-Ss.js";const me={title:"Components/Data Entry/Input",component:o,args:{placeholder:"Enter text",disabled:!1,maxLength:void 0,status:void 0,size:"middle",type:"text",addonBefore:void 0,allowClear:!1,value:"",onChange:r=>{console.log("Input changed: "+r.target.value)},onPressEnter:r=>{console.log("Enter key pressed: "+String(r))}},argTypes:{maxLength:{control:"number"},status:{control:"select",options:["warning","error","default"]},size:{control:"select",options:["small","medium","large"]}}},he=({label:r,tooltipMessage:a})=>t.jsxs(ce,{align:"center",gap:4,children:[t.jsx(ue.Text,{children:r}),t.jsx(de,{title:a,children:t.jsx(pe,{})})]}),c={render:()=>t.jsx(l,{direction:"vertical",size:4,style:{maxWidth:320},children:t.jsx(o,{placeholder:"Enter text",type:"text",style:{width:320}})})},u={render:()=>{const r=a=>{console.log("InputNumber changed:",a)};return t.jsx(l,{direction:"vertical",size:4,style:{maxWidth:320},children:t.jsx(b,{min:0,max:100,placeholder:"Enter number",style:{width:320},controls:!0,onChange:r})})}},d={render:()=>{const[r,a]=S.useState(0),s=v=>{typeof v=="number"&&a(v)};return t.jsx(l,{direction:"vertical",size:4,style:{maxWidth:320},children:t.jsx(b,{min:0,max:100,value:r,onChange:s,addonAfter:"%",style:{width:160},controls:!0})})}},p={render:()=>{const[r,a]=S.useState(30),[s,v]=S.useState("hours"),te=t.jsx(ie,{value:s,onChange:v,options:[{label:"Minutes",value:"minutes"},{label:"Hours",value:"hours"},{label:"Days",value:"days"}],dropdownMatchSelectWidth:!1,style:{width:100}});return t.jsx(l,{direction:"vertical",size:4,style:{maxWidth:320},children:t.jsx(b,{min:0,value:r,onChange:w=>{typeof w=="number"&&a(w)},addonAfter:te,placeholder:"Enter number",style:{width:200},controls:!0})})}},m={render:()=>t.jsx(l,{direction:"vertical",size:4,style:{maxWidth:320},children:t.jsx(o,{placeholder:"Search",allowClear:!0,autoFocus:!0,addonBefore:t.jsx(le,{name:"search",size:"sm",color:"default"}),style:{width:320}})})},h={render:()=>t.jsx(i,{layout:"vertical",style:{maxWidth:320},children:t.jsx(i.Item,{label:"Required Text Input",name:"requiredTextInput",rules:[{required:!0,message:"Please enter a value."}],children:t.jsx(o,{placeholder:"Enter text",style:{width:320}})})})},x={render:()=>t.jsx(i,{layout:"vertical",style:{maxWidth:320},children:t.jsx(i.Item,{label:"Optional Text Input",name:"optionalTextInput",children:t.jsx(o,{placeholder:"Enter text",style:{width:320}})})})},y={render:()=>t.jsx(i,{layout:"vertical",style:{maxWidth:320},children:t.jsx(i.Item,{label:t.jsx(he,{label:"Text Input with Help",tooltipMessage:"Helpful description for this input"}),children:t.jsx(o,{placeholder:"Enter text",style:{width:320}})})})},I={render:()=>t.jsx(l,{direction:"vertical",size:4,style:{maxWidth:320},children:t.jsx(o.TextArea,{placeholder:"Share feedback...",maxLength:500,rows:4,style:{width:320}})})},g={render:()=>t.jsx(l,{direction:"vertical",size:4,style:{maxWidth:320},children:t.jsx(o.Password,{placeholder:"Enter password",style:{width:320}})})};var j,W,F;c.parameters=n(e({},c.parameters),{docs:n(e({},(j=c.parameters)==null?void 0:j.docs),{source:e({originalSource:`{
  render: () => {
    return <Space direction="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <Input placeholder="Enter text" type="text" style={{
        width: 320
      }} />
      </Space>;
  }
}`},(F=(W=c.parameters)==null?void 0:W.docs)==null?void 0:F.source)})});var C,E,z;u.parameters=n(e({},u.parameters),{docs:n(e({},(C=u.parameters)==null?void 0:C.docs),{source:e({originalSource:`{
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
}`},(z=(E=u.parameters)==null?void 0:E.docs)==null?void 0:z.source)})});var P,A,N;d.parameters=n(e({},d.parameters),{docs:n(e({},(P=d.parameters)==null?void 0:P.docs),{source:e({originalSource:`{
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
        <InputNumber min={0} max={100} value={value} onChange={handleChange} addonAfter="%" style={{
        width: 160
      }} controls />
      </Space>;
  }
}`},(N=(A=d.parameters)==null?void 0:A.docs)==null?void 0:N.source)})});var V,H,q;p.parameters=n(e({},p.parameters),{docs:n(e({},(V=p.parameters)==null?void 0:V.docs),{source:e({originalSource:`{
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
}`},(q=(H=p.parameters)==null?void 0:H.docs)==null?void 0:q.source)})});var O,M,R;m.parameters=n(e({},m.parameters),{docs:n(e({},(O=m.parameters)==null?void 0:O.docs),{source:e({originalSource:`{
  render: () => {
    return <Space direction="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <Input placeholder="Search" allowClear autoFocus addonBefore={<Icon name="search" size="sm" color="default" />} style={{
        width: 320
      }} />
      </Space>;
  }
}`},(R=(M=m.parameters)==null?void 0:M.docs)==null?void 0:R.source)})});var D,L,_;h.parameters=n(e({},h.parameters),{docs:n(e({},(D=h.parameters)==null?void 0:D.docs),{source:e({originalSource:`{
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
}`},(_=(L=h.parameters)==null?void 0:L.docs)==null?void 0:_.source)})});var k,B,U;x.parameters=n(e({},x.parameters),{docs:n(e({},(k=x.parameters)==null?void 0:k.docs),{source:e({originalSource:`{
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
}`},(U=(B=x.parameters)==null?void 0:B.docs)==null?void 0:U.source)})});var G,J,K;y.parameters=n(e({},y.parameters),{docs:n(e({},(G=y.parameters)==null?void 0:G.docs),{source:e({originalSource:`{
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
}`},(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source)})});var Q,X,Y;I.parameters=n(e({},I.parameters),{docs:n(e({},(Q=I.parameters)==null?void 0:Q.docs),{source:e({originalSource:`{
  render: () => {
    return <Space direction="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <Input.TextArea placeholder="Share feedback..." maxLength={500} rows={4} style={{
        width: 320
      }} />
      </Space>;
  }
}`},(Y=(X=I.parameters)==null?void 0:X.docs)==null?void 0:Y.source)})});var Z,$,ee;g.parameters=n(e({},g.parameters),{docs:n(e({},(Z=g.parameters)==null?void 0:Z.docs),{source:e({originalSource:`{
  render: () => {
    return <Space direction="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <Input.Password placeholder="Enter password" style={{
        width: 320
      }} />
      </Space>;
  }
}`},(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source)})});const xe=["TextInput","NumberInput","PercentageInput","DurationInput","SearchInput","RequiredTextInput","OptionalInput","HelpTextInput","TextAreaInput","PasswordInput"],Te=Object.freeze(Object.defineProperty({__proto__:null,DurationInput:p,HelpTextInput:y,NumberInput:u,OptionalInput:x,PasswordInput:g,PercentageInput:d,RequiredTextInput:h,SearchInput:m,TextAreaInput:I,TextInput:c,__namedExportsOrder:xe,default:me},Symbol.toStringTag,{value:"Module"}));export{p as D,y as H,Te as I,u as N,x as O,d as P,h as R,m as S,c as T,I as a,g as b};
