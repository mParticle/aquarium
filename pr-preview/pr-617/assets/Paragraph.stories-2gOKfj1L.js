var Z=Object.defineProperty,ee=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var S=(t,a,o)=>a in t?Z(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,i=(t,a)=>{for(var o in a||(a={}))ae.call(a,o)&&S(t,o,a[o]);if(x)for(var o of x(a))oe.call(a,o)&&S(t,o,a[o]);return t},s=(t,a)=>ee(t,te(a));import{j as e}from"./jsx-runtime-BcCOBRXo.js";import{f as r,ae as ie,I as l,R as c,z as re,af as ne}from"./NavigationItemsService-BdmCVfzw.js";import{E as f}from"./ExampleStory-CMRFQIwV.js";import{r as n}from"./index-CNk6hRaE.js";import"./_baseClone-DBzvlRjn.js";import"./LightTheme-BtoaoHMG.js";import"./row-GPgCuxPF.js";import"./useToken-BSaSgSTZ.js";import"./extends-CF3RwP-h.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";const xe={title:"Components/General/Typography/Paragraph",component:t=>e.jsx(r.Paragraph,s(i({},t),{children:"Paragraph text goes here"})),args:{children:"Example Text",type:void 0,color:void 0,size:"base",code:!1,copyable:!1,delete:!1,disabled:!1,editable:!1,ellipsis:!1,mark:!1,strong:!1,italic:!1,underline:!1},argTypes:{children:{control:"text",name:"text"},type:{control:"select",options:["secondary","success","warning","danger"]},size:{control:"select",options:["base","sm","lg","xl"]},color:{control:"select",options:ie},copyable:{control:"boolean"},delete:{control:"boolean"},disabled:{control:"boolean"},editable:{control:"boolean"},ellipsis:{control:"boolean"},mark:{control:"boolean"},strong:{control:"boolean"},italic:{control:"boolean"},code:{control:"boolean"}}},g={args:{code:!1,delete:!1}},d={render:()=>{const[t,a]=n.useState("This is an editable text."),[o,b]=n.useState("This is a loooooooooooooooooooooooooooooooong editable text with suffix."),[M,H]=n.useMemo(()=>[o.slice(0,-12),o.slice(-12)],[o]),[z,N]=n.useState("Custom Edit icon and replace tooltip text."),[G,O]=n.useState("Text or icon as trigger - click to start editing."),[p,q]=n.useState(["icon"]),[F,Y]=n.useState("Editable text with a custom enter icon in edit field."),[_,$]=n.useState("Editable text with no enter icon in edit field."),[B,J]=n.useState("Hide Edit tooltip."),[K,Q]=n.useState("This is an editable text with limited length."),V=y=>{switch(y){case"text":return["text"];case"both":return["icon","text"];case"icon":default:return["icon"]}},X=n.useMemo(()=>p.includes("text")?p.includes("icon")?"both":"text":"icon",[p]);return e.jsxs(f,{title:"Make Typography editable.",children:[e.jsx(r.Paragraph,{editable:{onChange:a},children:t}),e.jsx(r.Paragraph,{editable:{onChange:b,text:o},ellipsis:{suffix:H},children:M}),e.jsx(r.Paragraph,{editable:{icon:e.jsx(l,{name:"mpLogo"}),tooltip:"click to edit text",onChange:N},children:z}),"Trigger edit with:"," ",e.jsxs(c.Group,{onChange:y=>{q(V(y.target.value))},value:X,children:[e.jsx(c,{value:"icon",children:"icon"}),e.jsx(c,{value:"text",children:"text"}),e.jsx(c,{value:"both",children:"both"})]}),e.jsx(r.Paragraph,{editable:{tooltip:"click to edit text",onChange:O,triggerType:p},children:G}),e.jsx(r.Paragraph,{editable:{icon:e.jsx(l,{name:"mpLogo"}),tooltip:"click to edit text",onChange:Y,enterIcon:e.jsx(l,{name:"mpLogo"})},children:F}),e.jsx(r.Paragraph,{editable:{icon:e.jsx(l,{name:"mpLogo"}),tooltip:"click to edit text",onChange:$,enterIcon:null},children:_}),e.jsx(r.Paragraph,{editable:{tooltip:!1,onChange:J},children:B}),e.jsx(r.Paragraph,{editable:{onChange:Q,maxLength:50,autoSize:{maxRows:5,minRows:3}},children:K})]})}},h={render:()=>e.jsxs(f,{title:"Make Typography copyable.",children:[e.jsx(r.Paragraph,{copyable:!0,children:"This is a copyable text."}),e.jsx(r.Paragraph,{copyable:{text:"Hello, Ant Design!"},children:"Replace copy text."}),e.jsx(r.Paragraph,{copyable:{icon:[e.jsx(l,{name:"mpLogo"},1),e.jsx(l,{name:"mpLogo"},2)],tooltips:["click here","you clicked!!"]},children:"Custom Copy icon and replace tooltips text."}),e.jsx(r.Paragraph,{copyable:{tooltips:!1},children:"Hide Copy tooltips."})]})},u={render:()=>{const[t,a]=n.useState(!0);return e.jsxs(f,{title:"Multiple line ellipsis support. You can use tooltip to config ellipsis tooltip. Recommend expandable when have lots of content.",children:[e.jsx(re,{checked:t,onChange:()=>{a(!t)}}),e.jsx(r.Paragraph,{ellipsis:t,children:"Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team."}),e.jsx(r.Paragraph,{ellipsis:t?{rows:2,expandable:!0,symbol:"more"}:!1,children:"Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team."})]})}},m={render:()=>{const[t,a]=n.useState(1),o="To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The slings and arrows of outrageous fortune Or to take arms against a sea of troubles, And by opposing end them? To die: to sleep; No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to, 'tis a consummation Devoutly to be wish'd. To die, to sleep To sleep- perchance to dream: ay, there's the rub! For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause. There 's the respect That makes calamity of so long life";return e.jsxs(f,{title:"Add suffix ellipsis support.",children:[e.jsx(ne,{value:t,min:1,max:10,onChange:a}),e.jsx(r.Paragraph,{ellipsis:{rows:t,expandable:!0,suffix:"--William Shakespeare",onEllipsis:b=>{console.log("Ellipsis changed:",b)}},title:`${o}--William Shakespeare`,children:o})]})}};var T,E,k;g.parameters=s(i({},g.parameters),{docs:s(i({},(T=g.parameters)==null?void 0:T.docs),{source:i({originalSource:`{
  args: {
    code: false,
    delete: false
  }
}`},(k=(E=g.parameters)==null?void 0:E.docs)==null?void 0:k.source)})});var A,P,D;d.parameters=s(i({},d.parameters),{docs:s(i({},(A=d.parameters)==null?void 0:A.docs),{source:i({originalSource:`{
  render: () => {
    const [editableStr, setEditableStr] = useState('This is an editable text.');
    const [editableStrWithSuffix, setEditableStrWithSuffix] = useState('This is a loooooooooooooooooooooooooooooooong editable text with suffix.');
    const [editableStrWithSuffixStartPart, editableStrWithSuffixSuffixPart] = useMemo(() => [editableStrWithSuffix.slice(0, -12), editableStrWithSuffix.slice(-12)], [editableStrWithSuffix]);
    const [customIconStr, setCustomIconStr] = useState('Custom Edit icon and replace tooltip text.');
    const [clickTriggerStr, setClickTriggerStr] = useState('Text or icon as trigger - click to start editing.');
    const [chooseTrigger, setChooseTrigger] = useState<Array<'icon' | 'text'>>(['icon']);
    const [customEnterIconStr, setCustomEnterIconStr] = useState('Editable text with a custom enter icon in edit field.');
    const [noEnterIconStr, setNoEnterIconStr] = useState('Editable text with no enter icon in edit field.');
    const [hideTooltipStr, setHideTooltipStr] = useState('Hide Edit tooltip.');
    const [lengthLimitedStr, setLengthLimitedStr] = useState('This is an editable text with limited length.');
    const radioToState = (input: string): Array<'icon' | 'text'> => {
      switch (input) {
        case 'text':
          return ['text'];
        case 'both':
          return ['icon', 'text'];
        case 'icon':
        default:
          return ['icon'];
      }
    };
    const stateToRadio = useMemo<string>(() => {
      if (chooseTrigger.includes('text')) {
        return chooseTrigger.includes('icon') ? 'both' : 'text';
      }
      return 'icon';
    }, [chooseTrigger]);
    return <ExampleStory title="Make Typography editable.">
        <Typography.Paragraph editable={{
        onChange: setEditableStr
      }}>{editableStr}</Typography.Paragraph>
        <Typography.Paragraph editable={{
        onChange: setEditableStrWithSuffix,
        text: editableStrWithSuffix
      }} ellipsis={{
        suffix: editableStrWithSuffixSuffixPart
      }}>
          {editableStrWithSuffixStartPart}
        </Typography.Paragraph>
        <Typography.Paragraph editable={{
        icon: <Icon name="mpLogo" />,
        tooltip: 'click to edit text',
        onChange: setCustomIconStr
      }}>
          {customIconStr}
        </Typography.Paragraph>
        Trigger edit with:{' '}
        <Radio.Group onChange={e => {
        setChooseTrigger(radioToState(e.target.value as string));
      }} value={stateToRadio}>
          <Radio value="icon">icon</Radio>
          <Radio value="text">text</Radio>
          <Radio value="both">both</Radio>
        </Radio.Group>
        <Typography.Paragraph editable={{
        tooltip: 'click to edit text',
        onChange: setClickTriggerStr,
        triggerType: chooseTrigger
      }}>
          {clickTriggerStr}
        </Typography.Paragraph>
        <Typography.Paragraph editable={{
        icon: <Icon name="mpLogo" />,
        tooltip: 'click to edit text',
        onChange: setCustomEnterIconStr,
        enterIcon: <Icon name="mpLogo" />
      }}>
          {customEnterIconStr}
        </Typography.Paragraph>
        <Typography.Paragraph editable={{
        icon: <Icon name="mpLogo" />,
        tooltip: 'click to edit text',
        onChange: setNoEnterIconStr,
        enterIcon: null
      }}>
          {noEnterIconStr}
        </Typography.Paragraph>
        <Typography.Paragraph editable={{
        tooltip: false,
        onChange: setHideTooltipStr
      }}>
          {hideTooltipStr}
        </Typography.Paragraph>
        <Typography.Paragraph editable={{
        onChange: setLengthLimitedStr,
        maxLength: 50,
        autoSize: {
          maxRows: 5,
          minRows: 3
        }
      }}>
          {lengthLimitedStr}
        </Typography.Paragraph>
      </ExampleStory>;
  }
}`},(D=(P=d.parameters)==null?void 0:P.docs)==null?void 0:D.source)})});var C,w,j;h.parameters=s(i({},h.parameters),{docs:s(i({},(C=h.parameters)==null?void 0:C.docs),{source:i({originalSource:`{
  render: () => {
    return <ExampleStory title="Make Typography copyable.">
        <Typography.Paragraph copyable>This is a copyable text.</Typography.Paragraph>
        <Typography.Paragraph copyable={{
        text: 'Hello, Ant Design!'
      }}>Replace copy text.</Typography.Paragraph>
        <Typography.Paragraph copyable={{
        icon: [<Icon name="mpLogo" key={1} />, <Icon name="mpLogo" key={2} />],
        tooltips: ['click here', 'you clicked!!']
      }}>
          Custom Copy icon and replace tooltips text.
        </Typography.Paragraph>
        <Typography.Paragraph copyable={{
        tooltips: false
      }}>Hide Copy tooltips.</Typography.Paragraph>
      </ExampleStory>;
  }
}`},(j=(w=h.parameters)==null?void 0:w.docs)==null?void 0:j.source)})});var I,R,U;u.parameters=s(i({},u.parameters),{docs:s(i({},(I=u.parameters)==null?void 0:I.docs),{source:i({originalSource:`{
  render: () => {
    const [ellipsis, setEllipsis] = useState(true);
    return <ExampleStory title="Multiple line ellipsis support. You can use tooltip to config ellipsis tooltip. Recommend expandable when have lots of content.">
        <Switch checked={ellipsis} onChange={() => {
        setEllipsis(!ellipsis);
      }} />
        <Typography.Paragraph ellipsis={ellipsis}>
          Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design
          language for background applications, is refined by Ant UED Team. Ant Design, a design language for background
          applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is
          refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED
          Team. Ant Design, a design language for background applications, is refined by Ant UED Team.
        </Typography.Paragraph>

        <Typography.Paragraph ellipsis={ellipsis ? {
        rows: 2,
        expandable: true,
        symbol: 'more'
      } : false}>
          Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design
          language for background applications, is refined by Ant UED Team. Ant Design, a design language for background
          applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is
          refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED
          Team. Ant Design, a design language for background applications, is refined by Ant UED Team.
        </Typography.Paragraph>
      </ExampleStory>;
  }
}`},(U=(R=u.parameters)==null?void 0:R.docs)==null?void 0:U.source)})});var L,W,v;m.parameters=s(i({},m.parameters),{docs:s(i({},(L=m.parameters)==null?void 0:L.docs),{source:i({originalSource:`{
  render: () => {
    const [rows, setRows] = useState(1);
    const article = "To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The slings and arrows of outrageous fortune Or to take arms against a sea of troubles, And by opposing end them? To die: to sleep; No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to, 'tis a consummation Devoutly to be wish'd. To die, to sleep To sleep- perchance to dream: ay, there's the rub! For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause. There 's the respect That makes calamity of so long life";
    return <ExampleStory title="Add suffix ellipsis support.">
        <Slider value={rows} min={1} max={10} onChange={setRows} />
        <Typography.Paragraph ellipsis={{
        rows,
        expandable: true,
        suffix: '--William Shakespeare',
        onEllipsis: ellipsis => {
          console.log('Ellipsis changed:', ellipsis);
        }
      }} title={\`\${article}--William Shakespeare\`}>
          {article}
        </Typography.Paragraph>
      </ExampleStory>;
  }
}`},(v=(W=m.parameters)==null?void 0:W.docs)==null?void 0:v.source)})});const Se=["Primary","ExampleEditable","ExampleCopyable","ExampleEllipsis","ExampleSuffix"];export{h as ExampleCopyable,d as ExampleEditable,u as ExampleEllipsis,m as ExampleSuffix,g as Primary,Se as __namedExportsOrder,xe as default};
