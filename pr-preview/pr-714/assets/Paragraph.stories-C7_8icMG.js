import{j as e}from"./jsx-runtime-u17CrQMm.js";import{H as W,T as t,I as r,u as l,x as v,J as M}from"./UnauthorizedTooltip-DInzTCbR.js";import{E as u}from"./ExampleStory-D9NFb6Ax.js";import{r as a}from"./iframe-DPsSDxI5.js";import"./ErrorStateIcon-N5tZzBSe.js";import"./SuccessStateIcon-jdQomLYr.js";import"./WarningStateIcon-BOAINRnk.js";import"./LightTheme-BtoaoHMG.js";import"./row-D3EgDzJn.js";import"./Context-BfWCYYV6.js";import"./useToken-D3WBQzQr.js";import"./presets-C7IxLGBr.js";import"./index-C_XAaiqg.js";import"./index-BkHrRISK.js";import"./AntdIcon-DQ0RjuI5.js";import"./style-C-7nCLOl.js";import"./client-Bm7MYF5w.js";import"./WarningFilled-DE1WQ37c.js";import"./preload-helper-PPVm8Dsz.js";const ae={title:"Components/General/Typography/Paragraph",component:o=>e.jsx(t.Paragraph,{...o,children:"Paragraph text goes here"}),args:{children:"Example Text",type:void 0,color:void 0,size:"base",code:!1,copyable:!1,delete:!1,disabled:!1,editable:!1,ellipsis:!1,mark:!1,strong:!1,italic:!1,underline:!1},argTypes:{children:{control:"text",name:"text"},type:{control:"select",options:["secondary","success","warning","danger"]},size:{control:"select",options:["base","sm","lg","xl"]},color:{control:"select",options:W},copyable:{control:"boolean"},delete:{control:"boolean"},disabled:{control:"boolean"},editable:{control:"boolean"},ellipsis:{control:"boolean"},mark:{control:"boolean"},strong:{control:"boolean"},italic:{control:"boolean"},code:{control:"boolean"}}},p={args:{code:!1,delete:!1}},c={render:()=>{const[o,n]=a.useState("This is an editable text."),[i,m]=a.useState("This is a loooooooooooooooooooooooooooooooong editable text with suffix."),[b,y]=a.useMemo(()=>[i.slice(0,-12),i.slice(-12)],[i]),[x,S]=a.useState("Custom Edit icon and replace tooltip text."),[T,E]=a.useState("Text or icon as trigger - click to start editing."),[s,k]=a.useState(["icon"]),[A,P]=a.useState("Editable text with a custom enter icon in edit field."),[D,C]=a.useState("Editable text with no enter icon in edit field."),[w,j]=a.useState("Hide Edit tooltip."),[I,R]=a.useState("This is an editable text with limited length."),U=f=>{switch(f){case"text":return["text"];case"both":return["icon","text"];default:return["icon"]}},L=a.useMemo(()=>s.includes("text")?s.includes("icon")?"both":"text":"icon",[s]);return e.jsxs(u,{title:"Make Typography editable.",children:[e.jsx(t.Paragraph,{editable:{onChange:n},children:o}),e.jsx(t.Paragraph,{editable:{onChange:m,text:i},ellipsis:{suffix:y},children:b}),e.jsx(t.Paragraph,{editable:{icon:e.jsx(r,{name:"mpLogo"}),tooltip:"click to edit text",onChange:S},children:x}),"Trigger edit with:"," ",e.jsxs(l.Group,{onChange:f=>{k(U(f.target.value))},value:L,children:[e.jsx(l,{value:"icon",children:"icon"}),e.jsx(l,{value:"text",children:"text"}),e.jsx(l,{value:"both",children:"both"})]}),e.jsx(t.Paragraph,{editable:{tooltip:"click to edit text",onChange:E,triggerType:s},children:T}),e.jsx(t.Paragraph,{editable:{icon:e.jsx(r,{name:"mpLogo"}),tooltip:"click to edit text",onChange:P,enterIcon:e.jsx(r,{name:"mpLogo"})},children:A}),e.jsx(t.Paragraph,{editable:{icon:e.jsx(r,{name:"mpLogo"}),tooltip:"click to edit text",onChange:C,enterIcon:null},children:D}),e.jsx(t.Paragraph,{editable:{tooltip:!1,onChange:j},children:w}),e.jsx(t.Paragraph,{editable:{onChange:R,maxLength:50,autoSize:{maxRows:5,minRows:3}},children:I})]})}},g={render:()=>e.jsxs(u,{title:"Make Typography copyable.",children:[e.jsx(t.Paragraph,{copyable:!0,children:"This is a copyable text."}),e.jsx(t.Paragraph,{copyable:{text:"Hello, Ant Design!"},children:"Replace copy text."}),e.jsx(t.Paragraph,{copyable:{icon:[e.jsx(r,{name:"mpLogo"},1),e.jsx(r,{name:"mpLogo"},2)],tooltips:["click here","you clicked!!"]},children:"Custom Copy icon and replace tooltips text."}),e.jsx(t.Paragraph,{copyable:{tooltips:!1},children:"Hide Copy tooltips."})]})},d={render:()=>{const[o,n]=a.useState(!0);return e.jsxs(u,{title:"Multiple line ellipsis support. You can use tooltip to config ellipsis tooltip. Recommend expandable when have lots of content.",children:[e.jsx(v,{checked:o,onChange:()=>{n(!o)}}),e.jsx(t.Paragraph,{ellipsis:o,children:"Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team."}),e.jsx(t.Paragraph,{ellipsis:o?{rows:2,expandable:!0,symbol:"more"}:!1,children:"Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team."})]})}},h={render:()=>{const[o,n]=a.useState(1),i="To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The slings and arrows of outrageous fortune Or to take arms against a sea of troubles, And by opposing end them? To die: to sleep; No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to, 'tis a consummation Devoutly to be wish'd. To die, to sleep To sleep- perchance to dream: ay, there's the rub! For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause. There 's the respect That makes calamity of so long life";return e.jsxs(u,{title:"Add suffix ellipsis support.",children:[e.jsx(M,{value:o,min:1,max:10,onChange:n}),e.jsx(t.Paragraph,{ellipsis:{rows:o,expandable:!0,suffix:"--William Shakespeare",onEllipsis:m=>{console.log("Ellipsis changed:",m)}},title:`${i}--William Shakespeare`,children:i})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    code: false,
    delete: false
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const oe=["Primary","ExampleEditable","ExampleCopyable","ExampleEllipsis","ExampleSuffix"];export{g as ExampleCopyable,c as ExampleEditable,d as ExampleEllipsis,h as ExampleSuffix,p as Primary,oe as __namedExportsOrder,ae as default};
