var Ne=Object.defineProperty,Oe=Object.defineProperties;var Re=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var Le=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable;var K=(r,t,l)=>t in r?Ne(r,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):r[t]=l,s=(r,t)=>{for(var l in t||(t={}))Le.call(t,l)&&K(r,l,t[l]);if(z)for(var l of z(t))We.call(t,l)&&K(r,l,t[l]);return r},a=(r,t)=>Oe(r,Re(t));import{j as e}from"./jsx-runtime-CVnACwZl.js";import{m as n,D as w,I as ze,i as D,e as Fe}from"./GlobalNavigation-DxJ0bpmA.js";import{E as i}from"./ExampleStory-BF1_nuwN.js";import"./ConfigProvider-CLSyxc9v.js";import"./_baseClone-B3DJrZ5i.js";import{r as Ge}from"./index-3OP4wdng.js";import{t as Me}from"./index-DwaHP3hw.js";import"./index-DWDMsSA9.js";import"./useToken-CXWLUMEq.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-B-gr4m3q.js";import"./isNativeReflectConstruct-D-r9sWlk.js";import"./row-BmOE1Szh.js";import"./dayjs.min-FTgVsUrW.js";import"./customParseFormat-Dfkg1z51.js";import"./LightTheme-BtoaoHMG.js";const o=`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`,p=[{key:"1",label:"This is panel header 1",children:e.jsx("p",{children:o})},{key:"2",label:"This is panel header 2",children:e.jsx("p",{children:o})},{key:"3",label:"This is panel header 3",children:e.jsx("p",{children:o})}],ns={title:"Components/Data Display/Collapse",component:r=>e.jsx(n,s({items:p},r)),args:{accordion:!1,activeKey:void 0,bordered:!0,collapsible:void 0,defaultActiveKey:void 0,destroyInactivePanel:!1,expandIcon:void 0,expandIconPosition:void 0,ghost:!1,size:"middle",items:p,onChange:r=>{console.log(r)}},argTypes:{size:{control:"select",options:["small","medium","large"]},expandIconPosition:{control:"select",options:["start","end"]},collapsible:{control:"select",options:["header","icon","disabled"]}}},m={},h={args:{accordion:!0}},x={args:{activeKey:["1"]}},y={args:{bordered:!1}},u={args:{collapsible:"header"}},g={args:{defaultActiveKey:["2"]}},b={args:{destroyInactivePanel:!0}},f={render:()=>{const r=t=>{console.log(t)};return e.jsx(i,{title:"By default, any number of panels can be expanded at a time. The first panel is expanded in this example.",children:e.jsx(n,{items:p,defaultActiveKey:["1"],onChange:r})})}},k={render:()=>e.jsxs(i,{title:e.jsxs(e.Fragment,{children:["Supports a default collapse size as well as a large and small size.",e.jsx("br",{}),"If a large or small collapse is desired, set the size property to either large or small respectively. Omit the size property for a collapse with the default size."]}),children:[e.jsx(w,{orientation:"left",children:"Default Size"}),e.jsx(n,{items:[{key:"1",label:"This is default size panel header",children:e.jsx("p",{children:o})}]}),e.jsx(w,{orientation:"left",children:"Small Size"}),e.jsx(n,{size:"small",items:[{key:"1",label:"This is small size panel header",children:e.jsx("p",{children:o})}]}),e.jsx(w,{orientation:"left",children:"Large Size"}),e.jsx(n,{size:"large",items:[{key:"1",label:"This is large size panel header",children:e.jsx("p",{children:o})}]})]})},C={render:()=>e.jsx(i,{title:"In accordion mode, only one panel can be expanded at a time.",children:e.jsx(n,{accordion:!0,items:p})})},S={render:()=>{const r=[{key:"1",label:"This is panel nest panel",children:e.jsx("p",{children:o})}],t=[{key:"1",label:"This is panel header 1",children:e.jsx(n,{defaultActiveKey:"1",items:r})},{key:"2",label:"This is panel header 2",children:e.jsx("p",{children:o})},{key:"3",label:"This is panel header 3",children:e.jsx("p",{children:o})}],l=c=>{console.log(c)};return e.jsx(i,{title:"Collapse is nested inside the Collapse.",children:e.jsx(n,{onChange:l,items:t})})}},v={render:()=>{const r=e.jsx("p",{style:{paddingLeft:24},children:"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."}),t=[{key:"1",label:"This is panel header 1",children:r},{key:"2",label:"This is panel header 2",children:r},{key:"3",label:"This is panel header 3",children:r}];return e.jsx(i,{title:"A borderless style of Collapse.",children:e.jsx(n,{items:t,bordered:!1,defaultActiveKey:["1"]})})}},j={render:()=>{const r=c=>[{key:"1",label:"This is panel header 1",children:e.jsx("p",{children:o}),style:c},{key:"2",label:"This is panel header 2",children:e.jsx("p",{children:o}),style:c},{key:"3",label:"This is panel header 3",children:e.jsx("p",{children:o}),style:c}],{token:t}=Me.useToken(),l={marginBottom:24,background:t.colorFillAlter,borderRadius:t.borderRadiusLG,border:"none"};return e.jsx(i,{title:"Customize the background, border, margin styles and icon for each panel.",children:e.jsx(n,{bordered:!1,defaultActiveKey:["1"],expandIcon:({isActive:c})=>e.jsx(ze,{name:c?"split":"add"}),style:{background:t.colorBgContainer},items:r(l)})})}},E={render:()=>{const r=[{key:"1",label:"This is panel header with arrow icon",children:e.jsx("p",{children:o})},{key:"2",label:"This is panel header with no arrow icon",children:e.jsx("p",{children:o}),showArrow:!1}],t=l=>{console.log(l)};return e.jsx(i,{title:"You can hide the arrow icon by passing showArrow={false} to CollapsePanel component.",children:e.jsx(n,{defaultActiveKey:["1"],onChange:t,items:r})})}},T={render:()=>{const{Option:r}=D,t=`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`,[l,c]=Ge.useState("start"),Ke=d=>{c(d)},De=d=>{console.log(d)},I=()=>e.jsx("span",{onClick:d=>{d.stopPropagation()},children:e.jsx(ze,{name:"settings"})}),Be=[{key:"1",label:"This is panel header 1",children:e.jsx("div",{children:t}),extra:I()},{key:"2",label:"This is panel header 2",children:e.jsx("div",{children:t}),extra:I()},{key:"3",label:"This is panel header 3",children:e.jsx("div",{children:t}),extra:I()}];return e.jsxs(i,{title:e.jsx(e.Fragment,{children:" "}),children:[e.jsx(n,{defaultActiveKey:["1"],onChange:De,expandIconPosition:l,items:Be}),e.jsx("br",{}),e.jsx("span",{children:"Expand Icon Position: "}),e.jsxs(D,{value:l,style:{margin:"0 8px"},onChange:Ke,children:[e.jsx(r,{value:"start",children:"start"}),e.jsx(r,{value:"end",children:"end"})]})]})}},P={render:()=>e.jsx(i,{title:"Making collapse's background to transparent.",children:e.jsx(n,{defaultActiveKey:["1"],ghost:!0,items:p})})},A={render:()=>e.jsx(i,{title:"Specify the trigger area of collapsible by collapsible.",children:e.jsxs(Fe,{direction:"vertical",children:[e.jsx(n,{collapsible:"header",defaultActiveKey:["1"],items:[{key:"1",label:"This panel can only be collapsed by clicking text",children:e.jsx("p",{children:o})}]}),e.jsx(n,{collapsible:"icon",defaultActiveKey:["1"],items:[{key:"1",label:"This panel can only be collapsed by clicking icon",children:e.jsx("p",{children:o})}]}),e.jsx(n,{collapsible:"disabled",items:[{key:"1",label:"This panel can't be collapsed",children:e.jsx("p",{children:o})}]})]})})};var B,N,O;m.parameters=a(s({},m.parameters),{docs:a(s({},(B=m.parameters)==null?void 0:B.docs),{source:s({originalSource:"{}"},(O=(N=m.parameters)==null?void 0:N.docs)==null?void 0:O.source)})});var R,L,W;h.parameters=a(s({},h.parameters),{docs:a(s({},(R=h.parameters)==null?void 0:R.docs),{source:s({originalSource:`{
  args: {
    accordion: true
  }
}`},(W=(L=h.parameters)==null?void 0:L.docs)==null?void 0:W.source)})});var F,G,M;x.parameters=a(s({},x.parameters),{docs:a(s({},(F=x.parameters)==null?void 0:F.docs),{source:s({originalSource:`{
  args: {
    activeKey: ['1']
  }
}`},(M=(G=x.parameters)==null?void 0:G.docs)==null?void 0:M.source)})});var H,Y,_;y.parameters=a(s({},y.parameters),{docs:a(s({},(H=y.parameters)==null?void 0:H.docs),{source:s({originalSource:`{
  args: {
    bordered: false
  }
}`},(_=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:_.source)})});var q,J,Q;u.parameters=a(s({},u.parameters),{docs:a(s({},(q=u.parameters)==null?void 0:q.docs),{source:s({originalSource:`{
  args: {
    collapsible: 'header'
  }
}`},(Q=(J=u.parameters)==null?void 0:J.docs)==null?void 0:Q.source)})});var U,V,X;g.parameters=a(s({},g.parameters),{docs:a(s({},(U=g.parameters)==null?void 0:U.docs),{source:s({originalSource:`{
  args: {
    defaultActiveKey: ['2']
  }
}`},(X=(V=g.parameters)==null?void 0:V.docs)==null?void 0:X.source)})});var Z,$,ee;b.parameters=a(s({},b.parameters),{docs:a(s({},(Z=b.parameters)==null?void 0:Z.docs),{source:s({originalSource:`{
  args: {
    destroyInactivePanel: true
  }
}`},(ee=($=b.parameters)==null?void 0:$.docs)==null?void 0:ee.source)})});var se,ae,re;f.parameters=a(s({},f.parameters),{docs:a(s({},(se=f.parameters)==null?void 0:se.docs),{source:s({originalSource:`{
  render: () => {
    const onChange = (key: string | string[]) => {
      console.log(key);
    };
    return <ExampleStory title="By default, any number of panels can be expanded at a time. The first panel is expanded in this example.">
        <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
      </ExampleStory>;
  }
}`},(re=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:re.source)})});var te,le,oe;k.parameters=a(s({},k.parameters),{docs:a(s({},(te=k.parameters)==null?void 0:te.docs),{source:s({originalSource:`{
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
}`},(oe=(le=k.parameters)==null?void 0:le.docs)==null?void 0:oe.source)})});var ne,ie,ce;C.parameters=a(s({},C.parameters),{docs:a(s({},(ne=C.parameters)==null?void 0:ne.docs),{source:s({originalSource:`{
  render: () => {
    return <ExampleStory title="In accordion mode, only one panel can be expanded at a time.">
        <Collapse accordion items={items} />
      </ExampleStory>;
  }
}`},(ce=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:ce.source)})});var de,pe,me;S.parameters=a(s({},S.parameters),{docs:a(s({},(de=S.parameters)==null?void 0:de.docs),{source:s({originalSource:`{
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
}`},(me=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:me.source)})});var he,xe,ye;v.parameters=a(s({},v.parameters),{docs:a(s({},(he=v.parameters)==null?void 0:he.docs),{source:s({originalSource:`{
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
}`},(ye=(xe=v.parameters)==null?void 0:xe.docs)==null?void 0:ye.source)})});var ue,ge,be;j.parameters=a(s({},j.parameters),{docs:a(s({},(ue=j.parameters)==null?void 0:ue.docs),{source:s({originalSource:`{
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
}`},(be=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:be.source)})});var fe,ke,Ce;E.parameters=a(s({},E.parameters),{docs:a(s({},(fe=E.parameters)==null?void 0:fe.docs),{source:s({originalSource:`{
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
}`},(Ce=(ke=E.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source)})});var Se,ve,je;T.parameters=a(s({},T.parameters),{docs:a(s({},(Se=T.parameters)==null?void 0:Se.docs),{source:s({originalSource:`{
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
}`},(je=(ve=T.parameters)==null?void 0:ve.docs)==null?void 0:je.source)})});var Ee,Te,Pe;P.parameters=a(s({},P.parameters),{docs:a(s({},(Ee=P.parameters)==null?void 0:Ee.docs),{source:s({originalSource:`{
  render: () => {
    return <ExampleStory title="Making collapse's background to transparent.">
        <Collapse defaultActiveKey={['1']} ghost items={items} />
      </ExampleStory>;
  }
}`},(Pe=(Te=P.parameters)==null?void 0:Te.docs)==null?void 0:Pe.source)})});var Ae,Ie,we;A.parameters=a(s({},A.parameters),{docs:a(s({},(Ae=A.parameters)==null?void 0:Ae.docs),{source:s({originalSource:`{
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
}`},(we=(Ie=A.parameters)==null?void 0:Ie.docs)==null?void 0:we.source)})});const is=["Primary","AccordionMode","WithActivePanel","BorderlessCollapse","WithCollapsibleHeaders","WithCustomActivePanel","DestroyInactivePanels","ExampleBasic","ExampleSize","ExampleAccordion","ExampleNestedPanel","ExampleBorderless","ExampleCustomPanel","ExampleNoArrow","ExampleExtraNode","ExampleGhostCollaps","ExampleCollapsible"];export{h as AccordionMode,y as BorderlessCollapse,b as DestroyInactivePanels,C as ExampleAccordion,f as ExampleBasic,v as ExampleBorderless,A as ExampleCollapsible,j as ExampleCustomPanel,T as ExampleExtraNode,P as ExampleGhostCollaps,S as ExampleNestedPanel,E as ExampleNoArrow,k as ExampleSize,m as Primary,x as WithActivePanel,u as WithCollapsibleHeaders,g as WithCustomActivePanel,is as __namedExportsOrder,ns as default};
