var Ne=Object.defineProperty,Oe=Object.defineProperties;var Re=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var Le=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable;var K=(s,r,t)=>r in s?Ne(s,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[r]=t,n=(s,r)=>{for(var t in r||(r={}))Le.call(r,t)&&K(s,t,r[t]);if(z)for(var t of z(r))We.call(r,t)&&K(s,t,r[t]);return s},a=(s,r)=>Oe(s,Re(r));import{j as e}from"./jsx-runtime-BcCOBRXo.js";import{f as o,D as w,I as ze,g as D,a as Fe}from"./GlobalNavigation-BzrbL3iQ.js";import{E as i}from"./ExampleStory-DmV_yAaD.js";import"./ConfigProvider-CEh3sHE6.js";import"./_baseClone-BjCwUuX-.js";import{r as Ge}from"./index-CNk6hRaE.js";import{t as Me}from"./index-DtqCdmwu.js";import"./index-CqBomLS8.js";import"./useToken-C-GAQQ-5.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CYew8PZR.js";import"./row-B98CqS5b.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";import"./LightTheme-DxveuNKr.js";import"./_getPrototype-CAOE_2rY.js";const l=`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`,p=[{key:"1",label:"This is panel header 1",children:e.jsx("p",{children:l})},{key:"2",label:"This is panel header 2",children:e.jsx("p",{children:l})},{key:"3",label:"This is panel header 3",children:e.jsx("p",{children:l})}],cn={title:"Components/Data Display/Collapse",component:s=>e.jsx(o,n({items:p},s)),args:{accordion:!1,activeKey:void 0,bordered:!0,collapsible:void 0,defaultActiveKey:void 0,destroyInactivePanel:!1,expandIcon:void 0,expandIconPosition:void 0,ghost:!1,size:"middle",items:p,onChange:s=>{console.log(s)}},argTypes:{size:{control:"select",options:["small","medium","large"]},expandIconPosition:{control:"select",options:["start","end"]},collapsible:{control:"select",options:["header","icon","disabled"]}}},m={},h={args:{accordion:!0}},x={args:{activeKey:["1"]}},y={args:{bordered:!1}},u={args:{collapsible:"header"}},g={args:{defaultActiveKey:["2"]}},b={args:{destroyInactivePanel:!0}},f={render:()=>{const s=r=>{console.log(r)};return e.jsx(i,{title:"By default, any number of panels can be expanded at a time. The first panel is expanded in this example.",children:e.jsx(o,{items:p,defaultActiveKey:["1"],onChange:s})})}},k={render:()=>e.jsxs(i,{title:e.jsxs(e.Fragment,{children:["Supports a default collapse size as well as a large and small size.",e.jsx("br",{}),"If a large or small collapse is desired, set the size property to either large or small respectively. Omit the size property for a collapse with the default size."]}),children:[e.jsx(w,{orientation:"left",children:"Default Size"}),e.jsx(o,{items:[{key:"1",label:"This is default size panel header",children:e.jsx("p",{children:l})}]}),e.jsx(w,{orientation:"left",children:"Small Size"}),e.jsx(o,{size:"small",items:[{key:"1",label:"This is small size panel header",children:e.jsx("p",{children:l})}]}),e.jsx(w,{orientation:"left",children:"Large Size"}),e.jsx(o,{size:"large",items:[{key:"1",label:"This is large size panel header",children:e.jsx("p",{children:l})}]})]})},C={render:()=>e.jsx(i,{title:"In accordion mode, only one panel can be expanded at a time.",children:e.jsx(o,{accordion:!0,items:p})})},S={render:()=>{const s=[{key:"1",label:"This is panel nest panel",children:e.jsx("p",{children:l})}],r=[{key:"1",label:"This is panel header 1",children:e.jsx(o,{defaultActiveKey:"1",items:s})},{key:"2",label:"This is panel header 2",children:e.jsx("p",{children:l})},{key:"3",label:"This is panel header 3",children:e.jsx("p",{children:l})}],t=c=>{console.log(c)};return e.jsx(i,{title:"Collapse is nested inside the Collapse.",children:e.jsx(o,{onChange:t,items:r})})}},v={render:()=>{const s=e.jsx("p",{style:{paddingLeft:24},children:"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."}),r=[{key:"1",label:"This is panel header 1",children:s},{key:"2",label:"This is panel header 2",children:s},{key:"3",label:"This is panel header 3",children:s}];return e.jsx(i,{title:"A borderless style of Collapse.",children:e.jsx(o,{items:r,bordered:!1,defaultActiveKey:["1"]})})}},j={render:()=>{const s=c=>[{key:"1",label:"This is panel header 1",children:e.jsx("p",{children:l}),style:c},{key:"2",label:"This is panel header 2",children:e.jsx("p",{children:l}),style:c},{key:"3",label:"This is panel header 3",children:e.jsx("p",{children:l}),style:c}],{token:r}=Me.useToken(),t={marginBottom:24,background:r.colorFillAlter,borderRadius:r.borderRadiusLG,border:"none"};return e.jsx(i,{title:"Customize the background, border, margin styles and icon for each panel.",children:e.jsx(o,{bordered:!1,defaultActiveKey:["1"],expandIcon:({isActive:c})=>e.jsx(ze,{name:c?"split":"add"}),style:{background:r.colorBgContainer},items:s(t)})})}},E={render:()=>{const s=[{key:"1",label:"This is panel header with arrow icon",children:e.jsx("p",{children:l})},{key:"2",label:"This is panel header with no arrow icon",children:e.jsx("p",{children:l}),showArrow:!1}],r=t=>{console.log(t)};return e.jsx(i,{title:"You can hide the arrow icon by passing showArrow={false} to CollapsePanel component.",children:e.jsx(o,{defaultActiveKey:["1"],onChange:r,items:s})})}},T={render:()=>{const{Option:s}=D,r=`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`,[t,c]=Ge.useState("start"),Ke=d=>{c(d)},De=d=>{console.log(d)},I=()=>e.jsx("span",{onClick:d=>{d.stopPropagation()},children:e.jsx(ze,{name:"settings"})}),Be=[{key:"1",label:"This is panel header 1",children:e.jsx("div",{children:r}),extra:I()},{key:"2",label:"This is panel header 2",children:e.jsx("div",{children:r}),extra:I()},{key:"3",label:"This is panel header 3",children:e.jsx("div",{children:r}),extra:I()}];return e.jsxs(i,{title:e.jsx(e.Fragment,{children:" "}),children:[e.jsx(o,{defaultActiveKey:["1"],onChange:De,expandIconPosition:t,items:Be}),e.jsx("br",{}),e.jsx("span",{children:"Expand Icon Position: "}),e.jsxs(D,{value:t,style:{margin:"0 8px"},onChange:Ke,children:[e.jsx(s,{value:"start",children:"start"}),e.jsx(s,{value:"end",children:"end"})]})]})}},P={render:()=>e.jsx(i,{title:"Making collapse's background to transparent.",children:e.jsx(o,{defaultActiveKey:["1"],ghost:!0,items:p})})},A={render:()=>e.jsx(i,{title:"Specify the trigger area of collapsible by collapsible.",children:e.jsxs(Fe,{direction:"vertical",children:[e.jsx(o,{collapsible:"header",defaultActiveKey:["1"],items:[{key:"1",label:"This panel can only be collapsed by clicking text",children:e.jsx("p",{children:l})}]}),e.jsx(o,{collapsible:"icon",defaultActiveKey:["1"],items:[{key:"1",label:"This panel can only be collapsed by clicking icon",children:e.jsx("p",{children:l})}]}),e.jsx(o,{collapsible:"disabled",items:[{key:"1",label:"This panel can't be collapsed",children:e.jsx("p",{children:l})}]})]})})};var B,N,O;m.parameters=a(n({},m.parameters),{docs:a(n({},(B=m.parameters)==null?void 0:B.docs),{source:n({originalSource:"{}"},(O=(N=m.parameters)==null?void 0:N.docs)==null?void 0:O.source)})});var R,L,W;h.parameters=a(n({},h.parameters),{docs:a(n({},(R=h.parameters)==null?void 0:R.docs),{source:n({originalSource:`{
  args: {
    accordion: true
  }
}`},(W=(L=h.parameters)==null?void 0:L.docs)==null?void 0:W.source)})});var F,G,M;x.parameters=a(n({},x.parameters),{docs:a(n({},(F=x.parameters)==null?void 0:F.docs),{source:n({originalSource:`{
  args: {
    activeKey: ['1']
  }
}`},(M=(G=x.parameters)==null?void 0:G.docs)==null?void 0:M.source)})});var H,Y,_;y.parameters=a(n({},y.parameters),{docs:a(n({},(H=y.parameters)==null?void 0:H.docs),{source:n({originalSource:`{
  args: {
    bordered: false
  }
}`},(_=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:_.source)})});var q,J,Q;u.parameters=a(n({},u.parameters),{docs:a(n({},(q=u.parameters)==null?void 0:q.docs),{source:n({originalSource:`{
  args: {
    collapsible: 'header'
  }
}`},(Q=(J=u.parameters)==null?void 0:J.docs)==null?void 0:Q.source)})});var U,V,X;g.parameters=a(n({},g.parameters),{docs:a(n({},(U=g.parameters)==null?void 0:U.docs),{source:n({originalSource:`{
  args: {
    defaultActiveKey: ['2']
  }
}`},(X=(V=g.parameters)==null?void 0:V.docs)==null?void 0:X.source)})});var Z,$,ee;b.parameters=a(n({},b.parameters),{docs:a(n({},(Z=b.parameters)==null?void 0:Z.docs),{source:n({originalSource:`{
  args: {
    destroyInactivePanel: true
  }
}`},(ee=($=b.parameters)==null?void 0:$.docs)==null?void 0:ee.source)})});var ne,ae,se;f.parameters=a(n({},f.parameters),{docs:a(n({},(ne=f.parameters)==null?void 0:ne.docs),{source:n({originalSource:`{
  render: () => {
    const onChange = (key: string | string[]) => {
      console.log(key);
    };
    return <ExampleStory title="By default, any number of panels can be expanded at a time. The first panel is expanded in this example.">
        <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
      </ExampleStory>;
  }
}`},(se=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:se.source)})});var re,te,le;k.parameters=a(n({},k.parameters),{docs:a(n({},(re=k.parameters)==null?void 0:re.docs),{source:n({originalSource:`{
  render: () => {
    return <ExampleStory title={<>
            Supports a default collapse size as well as a large and small size.
            <br />
            If a large or small collapse is desired, set the size property to either large or small respectively. Omit
            the size property for a collapse with the default size.
          </>}>
        <Divider orientation="left">Default Size</Divider>
        <Collapse items={[{
        key: '1',
        label: 'This is default size panel header',
        children: <p>{text}</p>
      }]} />
        <Divider orientation="left">Small Size</Divider>
        <Collapse size="small" items={[{
        key: '1',
        label: 'This is small size panel header',
        children: <p>{text}</p>
      }]} />
        <Divider orientation="left">Large Size</Divider>
        <Collapse size="large" items={[{
        key: '1',
        label: 'This is large size panel header',
        children: <p>{text}</p>
      }]} />
      </ExampleStory>;
  }
}`},(le=(te=k.parameters)==null?void 0:te.docs)==null?void 0:le.source)})});var oe,ie,ce;C.parameters=a(n({},C.parameters),{docs:a(n({},(oe=C.parameters)==null?void 0:oe.docs),{source:n({originalSource:`{
  render: () => {
    return <ExampleStory title="In accordion mode, only one panel can be expanded at a time.">
        <Collapse accordion items={items} />
      </ExampleStory>;
  }
}`},(ce=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:ce.source)})});var de,pe,me;S.parameters=a(n({},S.parameters),{docs:a(n({},(de=S.parameters)==null?void 0:de.docs),{source:n({originalSource:`{
  render: () => {
    const itemsNest: ICollapseProps['items'] = [{
      key: '1',
      label: 'This is panel nest panel',
      children: <p>{text}</p>
    }];
    const items: ICollapseProps['items'] = [{
      key: '1',
      label: 'This is panel header 1',
      children: <Collapse defaultActiveKey="1" items={itemsNest} />
    }, {
      key: '2',
      label: 'This is panel header 2',
      children: <p>{text}</p>
    }, {
      key: '3',
      label: 'This is panel header 3',
      children: <p>{text}</p>
    }];
    const onChange = (key: string | string[]) => {
      console.log(key);
    };
    return <ExampleStory title="Collapse is nested inside the Collapse.">
        <Collapse onChange={onChange} items={items} />
      </ExampleStory>;
  }
}`},(me=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:me.source)})});var he,xe,ye;v.parameters=a(n({},v.parameters),{docs:a(n({},(he=v.parameters)==null?void 0:he.docs),{source:n({originalSource:`{
  render: () => {
    const collapseText = <p style={{
      paddingLeft: 24
    }}>
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome
        guest in many households across the world.
      </p>;
    const items: ICollapseProps['items'] = [{
      key: '1',
      label: 'This is panel header 1',
      children: collapseText
    }, {
      key: '2',
      label: 'This is panel header 2',
      children: collapseText
    }, {
      key: '3',
      label: 'This is panel header 3',
      children: collapseText
    }];
    return <ExampleStory title="A borderless style of Collapse.">
        <Collapse items={items} bordered={false} defaultActiveKey={['1']} />
      </ExampleStory>;
  }
}`},(ye=(xe=v.parameters)==null?void 0:xe.docs)==null?void 0:ye.source)})});var ue,ge,be;j.parameters=a(n({},j.parameters),{docs:a(n({},(ue=j.parameters)==null?void 0:ue.docs),{source:n({originalSource:`{
  render: () => {
    const getItems: (panelStyle: React.CSSProperties) => ICollapseProps['items'] = panelStyle => [{
      key: '1',
      label: 'This is panel header 1',
      children: <p>{text}</p>,
      style: panelStyle
    }, {
      key: '2',
      label: 'This is panel header 2',
      children: <p>{text}</p>,
      style: panelStyle
    }, {
      key: '3',
      label: 'This is panel header 3',
      children: <p>{text}</p>,
      style: panelStyle
    }];
    const {
      token
    } = theme.useToken();
    const panelStyle: React.CSSProperties = {
      marginBottom: 24,
      background: token.colorFillAlter,
      borderRadius: token.borderRadiusLG,
      border: 'none'
    };
    return <ExampleStory title="Customize the background, border, margin styles and icon for each panel.">
        <Collapse bordered={false} defaultActiveKey={['1']} expandIcon={({
        isActive
      }) => <Icon name={isActive ? 'split' : 'add'} />} style={{
        background: token.colorBgContainer
      }} items={getItems(panelStyle)} />
      </ExampleStory>;
  }
}`},(be=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:be.source)})});var fe,ke,Ce;E.parameters=a(n({},E.parameters),{docs:a(n({},(fe=E.parameters)==null?void 0:fe.docs),{source:n({originalSource:`{
  render: () => {
    const items: ICollapseProps['items'] = [{
      key: '1',
      label: 'This is panel header with arrow icon',
      children: <p>{text}</p>
    }, {
      key: '2',
      label: 'This is panel header with no arrow icon',
      children: <p>{text}</p>,
      showArrow: false
    }];
    const onChange = (key: string | string[]) => {
      console.log(key);
    };
    return <ExampleStory title="You can hide the arrow icon by passing showArrow={false} to CollapsePanel component.">
        <Collapse defaultActiveKey={['1']} onChange={onChange} items={items} />
      </ExampleStory>;
  }
}`},(Ce=(ke=E.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source)})});var Se,ve,je;T.parameters=a(n({},T.parameters),{docs:a(n({},(Se=T.parameters)==null?void 0:Se.docs),{source:n({originalSource:`{
  render: () => {
    const {
      Option
    } = Select;
    const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
\`;
    type ExpandIconPosition = 'start' | 'end';
    const [expandIconPosition, setExpandIconPosition] = useState<ExpandIconPosition>('start');
    const onPositionChange = (newExpandIconPosition: ExpandIconPosition) => {
      setExpandIconPosition(newExpandIconPosition);
    };
    const onChange = (key: string | string[]) => {
      console.log(key);
    };
    const genExtra = () => <span onClick={event => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    }}>
        <Icon name="settings" />
      </span>;
    const items: ICollapseProps['items'] = [{
      key: '1',
      label: 'This is panel header 1',
      children: <div>{text}</div>,
      extra: genExtra()
    }, {
      key: '2',
      label: 'This is panel header 2',
      children: <div>{text}</div>,
      extra: genExtra()
    }, {
      key: '3',
      label: 'This is panel header 3',
      children: <div>{text}</div>,
      extra: genExtra()
    }];
    return <ExampleStory title={<> </>}>
        <Collapse defaultActiveKey={['1']} onChange={onChange} expandIconPosition={expandIconPosition} items={items} />
        <br />
        <span>Expand Icon Position: </span>
        <Select value={expandIconPosition} style={{
        margin: '0 8px'
      }} onChange={onPositionChange}>
          <Option value="start">start</Option>
          <Option value="end">end</Option>
        </Select>
      </ExampleStory>;
  }
}`},(je=(ve=T.parameters)==null?void 0:ve.docs)==null?void 0:je.source)})});var Ee,Te,Pe;P.parameters=a(n({},P.parameters),{docs:a(n({},(Ee=P.parameters)==null?void 0:Ee.docs),{source:n({originalSource:`{
  render: () => {
    return <ExampleStory title="Making collapse's background to transparent.">
        <Collapse defaultActiveKey={['1']} ghost items={items} />
      </ExampleStory>;
  }
}`},(Pe=(Te=P.parameters)==null?void 0:Te.docs)==null?void 0:Pe.source)})});var Ae,Ie,we;A.parameters=a(n({},A.parameters),{docs:a(n({},(Ae=A.parameters)==null?void 0:Ae.docs),{source:n({originalSource:`{
  render: () => {
    return <ExampleStory title="Specify the trigger area of collapsible by collapsible.">
        <Space direction="vertical">
          <Collapse collapsible="header" defaultActiveKey={['1']} items={[{
          key: '1',
          label: 'This panel can only be collapsed by clicking text',
          children: <p>{text}</p>
        }]} />
          <Collapse collapsible="icon" defaultActiveKey={['1']} items={[{
          key: '1',
          label: 'This panel can only be collapsed by clicking icon',
          children: <p>{text}</p>
        }]} />
          <Collapse collapsible="disabled" items={[{
          key: '1',
          label: "This panel can't be collapsed",
          children: <p>{text}</p>
        }]} />
        </Space>
      </ExampleStory>;
  }
}`},(we=(Ie=A.parameters)==null?void 0:Ie.docs)==null?void 0:we.source)})});const dn=["Primary","AccordionMode","WithActivePanel","BorderlessCollapse","WithCollapsibleHeaders","WithCustomActivePanel","DestroyInactivePanels","ExampleBasic","ExampleSize","ExampleAccordion","ExampleNestedPanel","ExampleBorderless","ExampleCustomPanel","ExampleNoArrow","ExampleExtraNode","ExampleGhostCollaps","ExampleCollapsible"];export{h as AccordionMode,y as BorderlessCollapse,b as DestroyInactivePanels,C as ExampleAccordion,f as ExampleBasic,v as ExampleBorderless,A as ExampleCollapsible,j as ExampleCustomPanel,T as ExampleExtraNode,P as ExampleGhostCollaps,S as ExampleNestedPanel,E as ExampleNoArrow,k as ExampleSize,m as Primary,x as WithActivePanel,u as WithCollapsibleHeaders,g as WithCustomActivePanel,dn as __namedExportsOrder,cn as default};
