var te=Object.defineProperty,re=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var S=(n,a,s)=>a in n?te(n,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[a]=s,e=(n,a)=>{for(var s in a||(a={}))ae.call(a,s)&&S(n,s,a[s]);if(v)for(var s of v(a))se.call(a,s)&&S(n,s,a[s]);return n},r=(n,a)=>re(n,ne(a));import{j as t}from"./jsx-runtime-C9TrHvcC.js";import{r as b}from"./index-3OP4wdng.js";import{t as o,a as l,u as oe,I as le,f as i,h as ie,F as ce,c as de,v as ue,R as pe}from"./NavigationItemsService-DPY2uE-K.js";import"./ErrorStateIcon-BS17_6tf.js";import"./SuccessStateIcon-HuPZrMr2.js";import"./WarningStateIcon-Duz4utQS.js";import"./_baseClone-DwBCp-Ss.js";const me={title:"Components/Data Entry/Input",component:o,args:{placeholder:"Enter text",disabled:!1,maxLength:void 0,status:void 0,size:"middle",type:"text",addonBefore:void 0,allowClear:!1,value:"",onChange:n=>{console.log("Input changed: "+n.target.value)},onPressEnter:n=>{console.log("Enter key pressed: "+String(n))}},argTypes:{maxLength:{control:"number"},status:{control:"select",options:["warning","error","default"]},size:{control:"select",options:["small","medium","large"]}}},he=({label:n,tooltipMessage:a})=>t.jsxs(ce,{align:"center",gap:4,children:[t.jsx(de.Text,{children:n}),t.jsx(ue,{title:a,children:t.jsx(pe,{})})]}),c={render:()=>t.jsx(l,{direction:"vertical",size:4,style:{maxWidth:320},children:t.jsx(o,{placeholder:"Enter text",type:"text",style:{width:320}})})},d={render:()=>{const n=a=>{console.log("InputNumber changed:",a)};return t.jsx(l,{direction:"vertical",size:4,style:{maxWidth:320},children:t.jsx(oe,{min:0,max:100,placeholder:"Enter number",style:{width:320},controls:!0,onChange:n})})}},u={render:()=>t.jsx(l,{direction:"vertical",size:4,style:{maxWidth:320},children:t.jsx(o,{id:"percentage-field",placeholder:"0",type:"number",min:0,max:100,addonAfter:"%",style:{width:160}})})},p={render:()=>{const[n,a]=b.useState(30),[s,Z]=b.useState("hours"),$=t.jsx(ie,{value:s,onChange:Z,options:[{label:"Minutes",value:"minutes"},{label:"Hours",value:"hours"},{label:"Days",value:"days"}],dropdownMatchSelectWidth:!1,style:{width:100}});return t.jsx(l,{direction:"vertical",size:4,style:{maxWidth:320},children:t.jsx(o,{type:"number",min:0,value:n,onChange:ee=>a(Number(ee.target.value)),addonAfter:$,placeholder:"Enter number",style:{width:200}})})}},m={render:()=>t.jsx(l,{direction:"vertical",size:4,style:{maxWidth:320},children:t.jsx(o,{placeholder:"Search",allowClear:!0,autoFocus:!0,addonBefore:t.jsx(le,{name:"search",size:"sm",color:"default"}),style:{width:320}})})},h={render:()=>t.jsx(i,{layout:"vertical",style:{maxWidth:320},children:t.jsx(i.Item,{label:"Required Text Input",name:"requiredTextInput",rules:[{required:!0,message:"Please enter a value."}],children:t.jsx(o,{placeholder:"Enter text",style:{width:320}})})})},x={render:()=>t.jsx(i,{layout:"vertical",style:{maxWidth:320},children:t.jsx(i.Item,{label:"Optional Text Input",name:"optionalTextInput",children:t.jsx(o,{placeholder:"Enter text",style:{width:320}})})})},y={render:()=>t.jsx(i,{layout:"vertical",style:{maxWidth:320},children:t.jsx(i.Item,{label:t.jsx(he,{label:"Text Input with Help",tooltipMessage:"Helpful description for this input"}),children:t.jsx(o,{placeholder:"Enter text",style:{width:320}})})})},I={render:()=>t.jsx(l,{direction:"vertical",size:4,style:{maxWidth:320},children:t.jsx(o.TextArea,{placeholder:"Share feedback...",maxLength:500,rows:4,style:{width:320}})})},g={render:()=>t.jsx(l,{direction:"vertical",size:4,style:{maxWidth:320},children:t.jsx(o.Password,{placeholder:"Enter password",style:{width:320}})})};var w,T,j;c.parameters=r(e({},c.parameters),{docs:r(e({},(w=c.parameters)==null?void 0:w.docs),{source:e({originalSource:`{
  render: () => {
    return <Space direction="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <Input placeholder="Enter text" type="text" style={{
        width: 320
      }} />
      </Space>;
  }
}`},(j=(T=c.parameters)==null?void 0:T.docs)==null?void 0:j.source)})});var f,W,F;d.parameters=r(e({},d.parameters),{docs:r(e({},(f=d.parameters)==null?void 0:f.docs),{source:e({originalSource:`{
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
}`},(F=(W=d.parameters)==null?void 0:W.docs)==null?void 0:F.source)})});var E,z,C;u.parameters=r(e({},u.parameters),{docs:r(e({},(E=u.parameters)==null?void 0:E.docs),{source:e({originalSource:`{
  render: () => {
    return <Space direction="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <Input id="percentage-field" placeholder="0" type="number" min={0} max={100} addonAfter="%" style={{
        width: 160
      }} />
      </Space>;
  }
}`},(C=(z=u.parameters)==null?void 0:z.docs)==null?void 0:C.source)})});var P,A,N;p.parameters=r(e({},p.parameters),{docs:r(e({},(P=p.parameters)==null?void 0:P.docs),{source:e({originalSource:`{
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
        <Input type="number" min={0} value={value} onChange={e => setValue(Number(e.target.value))} addonAfter={selectAfter} placeholder="Enter number" style={{
        width: 200
      }} />
      </Space>;
  }
}`},(N=(A=p.parameters)==null?void 0:A.docs)==null?void 0:N.source)})});var H,q,O;m.parameters=r(e({},m.parameters),{docs:r(e({},(H=m.parameters)==null?void 0:H.docs),{source:e({originalSource:`{
  render: () => {
    return <Space direction="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <Input placeholder="Search" allowClear autoFocus addonBefore={<Icon name="search" size="sm" color="default" />} style={{
        width: 320
      }} />
      </Space>;
  }
}`},(O=(q=m.parameters)==null?void 0:q.docs)==null?void 0:O.source)})});var R,M,D;h.parameters=r(e({},h.parameters),{docs:r(e({},(R=h.parameters)==null?void 0:R.docs),{source:e({originalSource:`{
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
}`},(D=(M=h.parameters)==null?void 0:M.docs)==null?void 0:D.source)})});var L,_,k;x.parameters=r(e({},x.parameters),{docs:r(e({},(L=x.parameters)==null?void 0:L.docs),{source:e({originalSource:`{
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
}`},(k=(_=x.parameters)==null?void 0:_.docs)==null?void 0:k.source)})});var B,U,V;y.parameters=r(e({},y.parameters),{docs:r(e({},(B=y.parameters)==null?void 0:B.docs),{source:e({originalSource:`{
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
}`},(V=(U=y.parameters)==null?void 0:U.docs)==null?void 0:V.source)})});var G,J,K;I.parameters=r(e({},I.parameters),{docs:r(e({},(G=I.parameters)==null?void 0:G.docs),{source:e({originalSource:`{
  render: () => {
    return <Space direction="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <Input.TextArea placeholder="Share feedback..." maxLength={500} rows={4} style={{
        width: 320
      }} />
      </Space>;
  }
}`},(K=(J=I.parameters)==null?void 0:J.docs)==null?void 0:K.source)})});var Q,X,Y;g.parameters=r(e({},g.parameters),{docs:r(e({},(Q=g.parameters)==null?void 0:Q.docs),{source:e({originalSource:`{
  render: () => {
    return <Space direction="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <Input.Password placeholder="Enter password" style={{
        width: 320
      }} />
      </Space>;
  }
}`},(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source)})});const xe=["TextInput","NumberInput","PercentageInput","DurationInput","SearchInput","RequiredTextInput","OptionalInput","HelpTextInput","TextAreaInput","PasswordInput"],je=Object.freeze(Object.defineProperty({__proto__:null,DurationInput:p,HelpTextInput:y,NumberInput:d,OptionalInput:x,PasswordInput:g,PercentageInput:u,RequiredTextInput:h,SearchInput:m,TextAreaInput:I,TextInput:c,__namedExportsOrder:xe,default:me},Symbol.toStringTag,{value:"Module"}));export{p as D,y as H,je as I,d as N,x as O,u as P,h as R,m as S,c as T,I as a,g as b};
