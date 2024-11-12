var sa=Object.defineProperty,ia=Object.defineProperties;var na=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var la=Object.prototype.hasOwnProperty,ca=Object.prototype.propertyIsEnumerable;var v=(r,o,s)=>o in r?sa(r,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[o]=s,e=(r,o)=>{for(var s in o||(o={}))la.call(o,s)&&v(r,s,o[s]);if(W)for(var s of W(o))ca.call(o,s)&&v(r,s,o[s]);return r},a=(r,o)=>ia(r,na(o));import{j as t}from"./jsx-runtime-BcCOBRXo.js";import{z as i,I as l,R as p,g as pa,$ as ga}from"./GlobalNavigation-DUjkUjGz.js";import{E as U}from"./ExampleStory-BRhYbvTc.js";import{r as n}from"./index-CNk6hRaE.js";import"./_baseClone-DBzvlRjn.js";import"./LightTheme-BtoaoHMG.js";import"./row-CFp2rMPW.js";import"./useToken-BCf-mxgj.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";const Aa={title:"Components/General/Typography.Paragraph",component:r=>t.jsx(i.Paragraph,a(e({},r),{children:"Paragraph text goes here"})),args:{code:!1,copyable:!1,delete:!1,disabled:!1,editable:!1,ellipsis:!1,mark:!1,strong:!1,italic:!1,type:void 0,underline:!1,onClick:r=>{console.log("Paragraph Clicked")}},argTypes:{type:{control:"select",options:["secondary","success","warning","danger"]}}},g={},d={args:{code:!0}},u={args:{copyable:!0}},h={args:{delete:!0}},m={args:{disabled:!0}},y={args:{editable:!0}},f={args:{ellipsis:!0}},b={args:{mark:!0}},S={args:{strong:!0}},x={args:{italic:!0}},T={args:{type:"success"}},E={args:{type:"secondary"}},k={args:{type:"warning"}},C={args:{type:"danger"}},D={args:{underline:!0}},P={args:{onClick:r=>{alert("Custom Click Handler")}}},A={render:()=>{const[r,o]=n.useState("This is an editable text."),[s,L]=n.useState("This is a loooooooooooooooooooooooooooooooong editable text with suffix."),[$e,qe]=n.useMemo(()=>[s.slice(0,-12),s.slice(-12)],[s]),[Fe,Ye]=n.useState("Custom Edit icon and replace tooltip text."),[_e,Be]=n.useState("Text or icon as trigger - click to start editing."),[c,Je]=n.useState(["icon"]),[Ke,Qe]=n.useState("Editable text with a custom enter icon in edit field."),[Ve,Xe]=n.useState("Editable text with no enter icon in edit field."),[Ze,ea]=n.useState("Hide Edit tooltip."),[aa,ta]=n.useState("This is an editable text with limited length."),ra=R=>{switch(R){case"text":return["text"];case"both":return["icon","text"];case"icon":default:return["icon"]}},oa=n.useMemo(()=>c.includes("text")?c.includes("icon")?"both":"text":"icon",[c]);return t.jsxs(U,{title:"Make Typography editable.",children:[t.jsx(i.Paragraph,{editable:{onChange:o},children:r}),t.jsx(i.Paragraph,{editable:{onChange:L,text:s},ellipsis:{suffix:qe},children:$e}),t.jsx(i.Paragraph,{editable:{icon:t.jsx(l,{name:"mpLogo"}),tooltip:"click to edit text",onChange:Ye},children:Fe}),"Trigger edit with:"," ",t.jsxs(p.Group,{onChange:R=>{Je(ra(R.target.value))},value:oa,children:[t.jsx(p,{value:"icon",children:"icon"}),t.jsx(p,{value:"text",children:"text"}),t.jsx(p,{value:"both",children:"both"})]}),t.jsx(i.Paragraph,{editable:{tooltip:"click to edit text",onChange:Be,triggerType:c},children:_e}),t.jsx(i.Paragraph,{editable:{icon:t.jsx(l,{name:"mpLogo"}),tooltip:"click to edit text",onChange:Qe,enterIcon:t.jsx(l,{name:"mpLogo"})},children:Ke}),t.jsx(i.Paragraph,{editable:{icon:t.jsx(l,{name:"mpLogo"}),tooltip:"click to edit text",onChange:Xe,enterIcon:null},children:Ve}),t.jsx(i.Paragraph,{editable:{tooltip:!1,onChange:ea},children:Ze}),t.jsx(i.Paragraph,{editable:{onChange:ta,maxLength:50,autoSize:{maxRows:5,minRows:3}},children:aa})]})}},w={render:()=>t.jsxs(U,{title:"Make Typography copyable.",children:[t.jsx(i.Paragraph,{copyable:!0,children:"This is a copyable text."}),t.jsx(i.Paragraph,{copyable:{text:"Hello, Ant Design!"},children:"Replace copy text."}),t.jsx(i.Paragraph,{copyable:{icon:[t.jsx(l,{name:"mpLogo"},1),t.jsx(l,{name:"mpLogo"},2)],tooltips:["click here","you clicked!!"]},children:"Custom Copy icon and replace tooltips text."}),t.jsx(i.Paragraph,{copyable:{tooltips:!1},children:"Hide Copy tooltips."})]})},j={render:()=>{const[r,o]=n.useState(!0);return t.jsxs(U,{title:"Multiple line ellipsis support. You can use tooltip to config ellipsis tooltip. Recommend expandable when have lots of content.",children:[t.jsx(pa,{checked:r,onChange:()=>{o(!r)}}),t.jsx(i.Paragraph,{ellipsis:r,children:"Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team."}),t.jsx(i.Paragraph,{ellipsis:r?{rows:2,expandable:!0,symbol:"more"}:!1,children:"Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team."})]})}},I={render:()=>{const[r,o]=n.useState(1),s="To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The slings and arrows of outrageous fortune Or to take arms against a sea of troubles, And by opposing end them? To die: to sleep; No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to, 'tis a consummation Devoutly to be wish'd. To die, to sleep To sleep- perchance to dream: ay, there's the rub! For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause. There 's the respect That makes calamity of so long life";return t.jsxs(U,{title:"Add suffix ellipsis support.",children:[t.jsx(ga,{value:r,min:1,max:10,onChange:o}),t.jsx(i.Paragraph,{ellipsis:{rows:r,expandable:!0,suffix:"--William Shakespeare",onEllipsis:L=>{console.log("Ellipsis changed:",L)}},title:`${s}--William Shakespeare`,children:s})]})}};var M,H,N;g.parameters=a(e({},g.parameters),{docs:a(e({},(M=g.parameters)==null?void 0:M.docs),{source:e({originalSource:"{}"},(N=(H=g.parameters)==null?void 0:H.docs)==null?void 0:N.source)})});var O,G,z;d.parameters=a(e({},d.parameters),{docs:a(e({},(O=d.parameters)==null?void 0:O.docs),{source:e({originalSource:`{
  args: {
    code: true
  }
}`},(z=(G=d.parameters)==null?void 0:G.docs)==null?void 0:z.source)})});var $,q,F;u.parameters=a(e({},u.parameters),{docs:a(e({},($=u.parameters)==null?void 0:$.docs),{source:e({originalSource:`{
  args: {
    copyable: true
  }
}`},(F=(q=u.parameters)==null?void 0:q.docs)==null?void 0:F.source)})});var Y,_,B;h.parameters=a(e({},h.parameters),{docs:a(e({},(Y=h.parameters)==null?void 0:Y.docs),{source:e({originalSource:`{
  args: {
    delete: true
  }
}`},(B=(_=h.parameters)==null?void 0:_.docs)==null?void 0:B.source)})});var J,K,Q;m.parameters=a(e({},m.parameters),{docs:a(e({},(J=m.parameters)==null?void 0:J.docs),{source:e({originalSource:`{
  args: {
    disabled: true
  }
}`},(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source)})});var V,X,Z;y.parameters=a(e({},y.parameters),{docs:a(e({},(V=y.parameters)==null?void 0:V.docs),{source:e({originalSource:`{
  args: {
    editable: true
  }
}`},(Z=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Z.source)})});var ee,ae,te;f.parameters=a(e({},f.parameters),{docs:a(e({},(ee=f.parameters)==null?void 0:ee.docs),{source:e({originalSource:`{
  args: {
    ellipsis: true
  }
}`},(te=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:te.source)})});var re,oe,se;b.parameters=a(e({},b.parameters),{docs:a(e({},(re=b.parameters)==null?void 0:re.docs),{source:e({originalSource:`{
  args: {
    mark: true
  }
}`},(se=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:se.source)})});var ie,ne,le;S.parameters=a(e({},S.parameters),{docs:a(e({},(ie=S.parameters)==null?void 0:ie.docs),{source:e({originalSource:`{
  args: {
    strong: true
  }
}`},(le=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:le.source)})});var ce,pe,ge;x.parameters=a(e({},x.parameters),{docs:a(e({},(ce=x.parameters)==null?void 0:ce.docs),{source:e({originalSource:`{
  args: {
    italic: true
  }
}`},(ge=(pe=x.parameters)==null?void 0:pe.docs)==null?void 0:ge.source)})});var de,ue,he;T.parameters=a(e({},T.parameters),{docs:a(e({},(de=T.parameters)==null?void 0:de.docs),{source:e({originalSource:`{
  args: {
    type: 'success'
  }
}`},(he=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:he.source)})});var me,ye,fe;E.parameters=a(e({},E.parameters),{docs:a(e({},(me=E.parameters)==null?void 0:me.docs),{source:e({originalSource:`{
  args: {
    type: 'secondary'
  }
}`},(fe=(ye=E.parameters)==null?void 0:ye.docs)==null?void 0:fe.source)})});var be,Se,xe;k.parameters=a(e({},k.parameters),{docs:a(e({},(be=k.parameters)==null?void 0:be.docs),{source:e({originalSource:`{
  args: {
    type: 'warning'
  }
}`},(xe=(Se=k.parameters)==null?void 0:Se.docs)==null?void 0:xe.source)})});var Te,Ee,ke;C.parameters=a(e({},C.parameters),{docs:a(e({},(Te=C.parameters)==null?void 0:Te.docs),{source:e({originalSource:`{
  args: {
    type: 'danger'
  }
}`},(ke=(Ee=C.parameters)==null?void 0:Ee.docs)==null?void 0:ke.source)})});var Ce,De,Pe;D.parameters=a(e({},D.parameters),{docs:a(e({},(Ce=D.parameters)==null?void 0:Ce.docs),{source:e({originalSource:`{
  args: {
    underline: true
  }
}`},(Pe=(De=D.parameters)==null?void 0:De.docs)==null?void 0:Pe.source)})});var Ae,we,je;P.parameters=a(e({},P.parameters),{docs:a(e({},(Ae=P.parameters)==null?void 0:Ae.docs),{source:e({originalSource:`{
  args: {
    onClick: event => {
      alert('Custom Click Handler');
    }
  }
}`},(je=(we=P.parameters)==null?void 0:we.docs)==null?void 0:je.source)})});var Ie,Ue,Le;A.parameters=a(e({},A.parameters),{docs:a(e({},(Ie=A.parameters)==null?void 0:Ie.docs),{source:e({originalSource:`{
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
}`},(Le=(Ue=A.parameters)==null?void 0:Ue.docs)==null?void 0:Le.source)})});var Re,We,ve;w.parameters=a(e({},w.parameters),{docs:a(e({},(Re=w.parameters)==null?void 0:Re.docs),{source:e({originalSource:`{
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
}`},(ve=(We=w.parameters)==null?void 0:We.docs)==null?void 0:ve.source)})});var Me,He,Ne;j.parameters=a(e({},j.parameters),{docs:a(e({},(Me=j.parameters)==null?void 0:Me.docs),{source:e({originalSource:`{
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
}`},(Ne=(He=j.parameters)==null?void 0:He.docs)==null?void 0:Ne.source)})});var Oe,Ge,ze;I.parameters=a(e({},I.parameters),{docs:a(e({},(Oe=I.parameters)==null?void 0:Oe.docs),{source:e({originalSource:`{
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
}`},(ze=(Ge=I.parameters)==null?void 0:Ge.docs)==null?void 0:ze.source)})});const wa=["Primary","Code","Copyable","DeletedLine","Disabled","Editable","Ellipsis","Marked","Strong","Italic","Success","Secondary","Warning","Danger","Underline","CustomOnClick","ExampleEditable","ExampleCopyable","ExampleEllipsis","ExampleSuffix"];export{d as Code,u as Copyable,P as CustomOnClick,C as Danger,h as DeletedLine,m as Disabled,y as Editable,f as Ellipsis,w as ExampleCopyable,A as ExampleEditable,j as ExampleEllipsis,I as ExampleSuffix,x as Italic,b as Marked,g as Primary,E as Secondary,S as Strong,T as Success,D as Underline,k as Warning,wa as __namedExportsOrder,Aa as default};
