var te=Object.defineProperty,re=Object.defineProperties;var ae=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var v=(a,n,s)=>n in a?te(a,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[n]=s,e=(a,n)=>{for(var s in n||(n={}))ne.call(n,s)&&v(a,s,n[s]);if(S)for(var s of S(n))se.call(n,s)&&v(a,s,n[s]);return a},r=(a,n)=>re(a,ae(n));import{j as t}from"./jsx-runtime-C9TrHvcC.js";import{r as b}from"./index-3OP4wdng.js";import{t as l,a as o,I as le,f as i,h as oe,F as ie,c as de,u as ce,R as ue}from"./NavigationItemsService-CwwzU2Wk.js";import"./ErrorStateIcon-tcH5z2Kq.js";import"./SuccessStateIcon--57R4X2e.js";import"./WarningStateIcon-BxWKhc6z.js";import"./_baseClone-DwBCp-Ss.js";const pe={title:"Components/Data Entry/Input",component:l,args:{placeholder:"Enter text",disabled:!1,maxLength:void 0,status:void 0,size:"middle",type:"text",addonBefore:void 0,allowClear:!1,value:"",onChange:a=>{console.log("Input changed: "+a.target.value)},onPressEnter:a=>{console.log("Enter key pressed: "+String(a))}},argTypes:{maxLength:{control:"number"},status:{control:"select",options:["warning","error","default"]},size:{control:"select",options:["small","medium","large"]}}},me=({label:a,tooltipMessage:n})=>t.jsxs(ie,{align:"center",gap:4,children:[t.jsx(de.Text,{children:a}),t.jsx(ce,{title:n,children:t.jsx(ue,{})})]}),d={render:()=>t.jsx(o,{direction:"vertical",size:4,style:{maxWidth:320},children:t.jsx(l,{placeholder:"Enter text",type:"text",style:{width:320}})})},c={render:()=>t.jsx(o,{direction:"vertical",size:4,style:{maxWidth:320},children:t.jsx(l,{id:"required-field",placeholder:"Enter number",type:"number",min:0,max:100,required:!0,"aria-required":!0,style:{width:320}})})},u={render:()=>t.jsx(o,{direction:"vertical",size:4,style:{maxWidth:320},children:t.jsx(l,{id:"percentage-field",placeholder:"0",type:"number",min:0,max:100,addonAfter:"%",style:{width:160}})})},p={render:()=>{const[a,n]=b.useState(30),[s,Z]=b.useState("hours"),$=t.jsx(oe,{value:s,onChange:Z,options:[{label:"Minutes",value:"minutes"},{label:"Hours",value:"hours"},{label:"Days",value:"days"}],dropdownMatchSelectWidth:!1,style:{width:100}});return t.jsx(o,{direction:"vertical",size:4,style:{maxWidth:320},children:t.jsx(l,{type:"number",min:0,value:a,onChange:ee=>n(Number(ee.target.value)),addonAfter:$,placeholder:"Enter number",style:{width:200}})})}},m={render:()=>t.jsx(o,{direction:"vertical",size:4,style:{maxWidth:320},children:t.jsx(l,{placeholder:"Search",allowClear:!0,autoFocus:!0,addonBefore:t.jsx(le,{name:"search",size:"sm",color:"default"}),style:{width:320}})})},h={render:()=>t.jsx(i,{layout:"vertical",style:{maxWidth:320},children:t.jsx(i.Item,{label:"Required Text Input",name:"requiredTextInput",rules:[{required:!0,message:"Please enter a value."}],children:t.jsx(l,{placeholder:"Enter text",style:{width:320}})})})},x={render:()=>t.jsx(i,{layout:"vertical",style:{maxWidth:320},children:t.jsx(i.Item,{label:"Optional Text Input",name:"optionalTextInput",children:t.jsx(l,{placeholder:"Enter text",style:{width:320}})})})},y={render:()=>t.jsx(i,{layout:"vertical",style:{maxWidth:320},children:t.jsx(i.Item,{label:t.jsx(me,{label:"Text Input with Help",tooltipMessage:"Helpful description for this input"}),children:t.jsx(l,{placeholder:"Enter text",style:{width:320}})})})},I={render:()=>t.jsx(o,{direction:"vertical",size:4,style:{maxWidth:320},children:t.jsx(l.TextArea,{placeholder:"Share feedback...",maxLength:500,rows:4,style:{width:320}})})},g={render:()=>t.jsx(o,{direction:"vertical",size:4,style:{maxWidth:320},children:t.jsx(l.Password,{placeholder:"Enter password",style:{width:320}})})};var w,f,j;d.parameters=r(e({},d.parameters),{docs:r(e({},(w=d.parameters)==null?void 0:w.docs),{source:e({originalSource:`{
  render: () => {
    return <Space direction="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <Input placeholder="Enter text" type="text" style={{
        width: 320
      }} />
      </Space>;
  }
}`},(j=(f=d.parameters)==null?void 0:f.docs)==null?void 0:j.source)})});var T,W,F;c.parameters=r(e({},c.parameters),{docs:r(e({},(T=c.parameters)==null?void 0:T.docs),{source:e({originalSource:`{
  render: () => {
    return <Space direction="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <Input id="required-field" placeholder="Enter number" type="number" min={0} max={100} required aria-required style={{
        width: 320
      }} />
      </Space>;
  }
}`},(F=(W=c.parameters)==null?void 0:W.docs)==null?void 0:F.source)})});var E,z,q;u.parameters=r(e({},u.parameters),{docs:r(e({},(E=u.parameters)==null?void 0:E.docs),{source:e({originalSource:`{
  render: () => {
    return <Space direction="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <Input id="percentage-field" placeholder="0" type="number" min={0} max={100} addonAfter="%" style={{
        width: 160
      }} />
      </Space>;
  }
}`},(q=(z=u.parameters)==null?void 0:z.docs)==null?void 0:q.source)})});var A,P,C;p.parameters=r(e({},p.parameters),{docs:r(e({},(A=p.parameters)==null?void 0:A.docs),{source:e({originalSource:`{
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
}`},(C=(P=p.parameters)==null?void 0:P.docs)==null?void 0:C.source)})});var H,O,R;m.parameters=r(e({},m.parameters),{docs:r(e({},(H=m.parameters)==null?void 0:H.docs),{source:e({originalSource:`{
  render: () => {
    return <Space direction="vertical" size={4} style={{
      maxWidth: 320
    }}>
        <Input placeholder="Search" allowClear autoFocus addonBefore={<Icon name="search" size="sm" color="default" />} style={{
        width: 320
      }} />
      </Space>;
  }
}`},(R=(O=m.parameters)==null?void 0:O.docs)==null?void 0:R.source)})});var M,D,L;h.parameters=r(e({},h.parameters),{docs:r(e({},(M=h.parameters)==null?void 0:M.docs),{source:e({originalSource:`{
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
}`},(L=(D=h.parameters)==null?void 0:D.docs)==null?void 0:L.source)})});var _,N,k;x.parameters=r(e({},x.parameters),{docs:r(e({},(_=x.parameters)==null?void 0:_.docs),{source:e({originalSource:`{
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
}`},(k=(N=x.parameters)==null?void 0:N.docs)==null?void 0:k.source)})});var B,U,V;y.parameters=r(e({},y.parameters),{docs:r(e({},(B=y.parameters)==null?void 0:B.docs),{source:e({originalSource:`{
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
}`},(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source)})});const he=["TextInput","NumberInput","PercentageInput","DurationInput","SearchInput","RequiredTextInput","OptionalInput","HelpTextInput","TextAreaInput","PasswordInput"],fe=Object.freeze(Object.defineProperty({__proto__:null,DurationInput:p,HelpTextInput:y,NumberInput:c,OptionalInput:x,PasswordInput:g,PercentageInput:u,RequiredTextInput:h,SearchInput:m,TextAreaInput:I,TextInput:d,__namedExportsOrder:he,default:pe},Symbol.toStringTag,{value:"Module"}));export{p as D,y as H,fe as I,c as N,x as O,u as P,h as R,m as S,d as T,I as a,g as b};
