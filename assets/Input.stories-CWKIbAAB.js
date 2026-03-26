import{aR as r,j as e,b as n,aS as S,aE as g,I as w,n as s,p as T,F as f,T as j,aT as W,aU as F}from"./iframe-DWl9IIxG.js";const E={title:"Components/Data Entry/Input",component:r,args:{placeholder:"Enter text",disabled:!1,maxLength:void 0,status:void 0,size:"middle",type:"text",addonBefore:void 0,allowClear:!1,value:"",onChange:t=>{console.log("Input changed: "+t.target.value)},onPressEnter:t=>{console.log("Enter key pressed: "+String(t))}},argTypes:{maxLength:{control:"number"},status:{control:"select",options:["warning","error","default"]},size:{control:"select",options:["small","medium","large"]}}},C=({label:t,tooltipMessage:a})=>e.jsxs(f,{align:"center",gap:4,children:[e.jsx(j.Text,{children:t}),e.jsx(W,{title:a,children:e.jsx(F,{})})]}),o={render:()=>e.jsx(n,{orientation:"vertical",size:4,style:{maxWidth:320},children:e.jsx(r,{placeholder:"Enter text",type:"text",style:{width:320}})})},l={render:()=>{const t=a=>{console.log("InputNumber changed:",a)};return e.jsx(n,{orientation:"vertical",size:4,style:{maxWidth:320},children:e.jsx(S,{min:0,max:100,placeholder:"Enter number",style:{width:320},controls:!0,onChange:t})})}},i={render:()=>{const[t,a]=g.useState(0),I=y=>{typeof y=="number"&&a(y)};return e.jsx(n,{orientation:"vertical",size:4,style:{maxWidth:320},children:e.jsx(S,{min:0,max:100,value:t,onChange:I,addonAfter:"%",style:{width:160},controls:!0})})}},u={render:()=>{const[t,a]=g.useState(30),[I,y]=g.useState("hours"),b=e.jsx(T,{value:I,onChange:y,options:[{label:"Minutes",value:"minutes"},{label:"Hours",value:"hours"},{label:"Days",value:"days"}],dropdownMatchSelectWidth:!1,style:{width:100}});return e.jsx(n,{orientation:"vertical",size:4,style:{maxWidth:320},children:e.jsx(S,{min:0,value:t,onChange:v=>{typeof v=="number"&&a(v)},addonAfter:b,placeholder:"Enter number",style:{width:200},controls:!0})})}},c={render:()=>e.jsx(n,{orientation:"vertical",size:4,style:{maxWidth:320},children:e.jsx(r,{placeholder:"Search",allowClear:!0,autoFocus:!0,addonBefore:e.jsx(w,{name:"search",size:"sm",color:"default"}),style:{width:320}})})},d={render:()=>e.jsx(s,{layout:"vertical",style:{maxWidth:320},children:e.jsx(s.Item,{label:"Required Text Input",name:"requiredTextInput",rules:[{required:!0,message:"Please enter a value."}],children:e.jsx(r,{placeholder:"Enter text",style:{width:320}})})})},p={render:()=>e.jsx(s,{layout:"vertical",style:{maxWidth:320},children:e.jsx(s.Item,{label:"Optional Text Input",name:"optionalTextInput",children:e.jsx(r,{placeholder:"Enter text",style:{width:320}})})})},m={render:()=>e.jsx(s,{layout:"vertical",style:{maxWidth:320},children:e.jsx(s.Item,{label:e.jsx(C,{label:"Text Input with Help",tooltipMessage:"Helpful description for this input"}),children:e.jsx(r,{placeholder:"Enter text",style:{width:320}})})})},h={render:()=>e.jsx(n,{orientation:"vertical",size:4,style:{maxWidth:320},children:e.jsx(r.TextArea,{placeholder:"Share feedback...",maxLength:500,rows:4,style:{width:320}})})},x={render:()=>e.jsx(n,{orientation:"vertical",size:4,style:{maxWidth:320},children:e.jsx(r.Password,{placeholder:"Enter password",style:{width:320}})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Space orientation="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <Input placeholder="Enter text" type="text" style={{
        width: 320
      }} />
      </Space>;
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleChange: InputNumberProps['onChange'] = value => {
      console.log('InputNumber changed:', value);
    };
    return <Space orientation="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <InputNumber min={0} max={100} placeholder="Enter number" style={{
        width: 320
      }} controls onChange={handleChange} />
      </Space>;
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number>(0);
    const handleChange: InputNumberProps['onChange'] = newValue => {
      if (typeof newValue === 'number') {
        setValue(newValue);
      }
    };
    return <Space orientation="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <InputNumber min={0} max={100} value={value} onChange={handleChange} addonAfter="%" style={{
        width: 160
      }} controls />
      </Space>;
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
    return <Space orientation="vertical" size={4} style={{
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
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Space orientation="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <Input placeholder="Search" allowClear autoFocus addonBefore={<Icon name="search" size="sm" color="default" />} style={{
        width: 320
      }} />
      </Space>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Space orientation="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <Input.TextArea placeholder="Share feedback..." maxLength={500} rows={4} style={{
        width: 320
      }} />
      </Space>;
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Space orientation="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <Input.Password placeholder="Enter password" style={{
        width: 320
      }} />
      </Space>;
  }
}`,...x.parameters?.docs?.source}}};const z=["TextInput","NumberInput","PercentageInput","DurationInput","SearchInput","RequiredTextInput","OptionalInput","HelpTextInput","TextAreaInput","PasswordInput"],A=Object.freeze(Object.defineProperty({__proto__:null,DurationInput:u,HelpTextInput:m,NumberInput:l,OptionalInput:p,PasswordInput:x,PercentageInput:i,RequiredTextInput:d,SearchInput:c,TextAreaInput:h,TextInput:o,__namedExportsOrder:z,default:E},Symbol.toStringTag,{value:"Module"}));export{u as D,m as H,A as I,l as N,p as O,i as P,d as R,c as S,o as T,h as a,x as b};
