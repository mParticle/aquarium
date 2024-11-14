var Oe=Object.defineProperty,Ne=Object.defineProperties;var Re=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var Le=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable;var K=(l,r,t)=>r in l?Oe(l,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[r]=t,s=(l,r)=>{for(var t in r||(r={}))Le.call(r,t)&&K(l,t,r[t]);if(z)for(var t of z(r))We.call(r,t)&&K(l,t,r[t]);return l},a=(l,r)=>Ne(l,Re(r));import{j as e}from"./jsx-runtime-BcCOBRXo.js";import{f as n,d as w,I as ze,g as D,b as _e}from"./GlobalNavigation-C_Ic3est.js";import{E as i}from"./ExampleStory-BPMw4VOo.js";import"./_baseClone-DBzvlRjn.js";import{r as Me}from"./index-CNk6hRaE.js";import{t as Fe}from"./index-BkuCSTPk.js";const o=`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`,A=[{key:"1",label:"This is panel header 1",children:e.jsx("p",{children:o})},{key:"2",label:"This is panel header 2",children:e.jsx("p",{children:o})},{key:"3",label:"This is panel header 3",children:e.jsx("p",{children:o})}],Ge={title:"Components/Data Display/Collapse",component:l=>e.jsx(n,s({items:A},l)),args:{accordion:!1,activeKey:void 0,bordered:!0,collapsible:void 0,defaultActiveKey:void 0,destroyInactivePanel:!1,expandIcon:void 0,expandIconPosition:void 0,ghost:!1,size:"middle",items:A,onChange:l=>{console.log(l)}},argTypes:{size:{control:"select",options:["small","medium","large"]},expandIconPosition:{control:"select",options:["start","end"]},collapsible:{control:"select",options:["header","icon","disabled"]}}},p={},h={args:{accordion:!0}},m={args:{activeKey:["1"]}},y={args:{bordered:!1}},x={args:{collapsible:"header"}},u={args:{defaultActiveKey:["2"]}},g={args:{destroyInactivePanel:!0}},b={render:()=>{const l=r=>{console.log(r)};return e.jsx(i,{title:"By default, any number of panels can be expanded at a time. The first panel is expanded in this example.",children:e.jsx(n,{items:A,defaultActiveKey:["1"],onChange:l})})}},f={render:()=>e.jsxs(i,{title:e.jsxs(e.Fragment,{children:["Supports a default collapse size as well as a large and small size.",e.jsx("br",{}),"If a large or small collapse is desired, set the size property to either large or small respectively. Omit the size property for a collapse with the default size."]}),children:[e.jsx(w,{orientation:"left",children:"Default Size"}),e.jsx(n,{items:[{key:"1",label:"This is default size panel header",children:e.jsx("p",{children:o})}]}),e.jsx(w,{orientation:"left",children:"Small Size"}),e.jsx(n,{size:"small",items:[{key:"1",label:"This is small size panel header",children:e.jsx("p",{children:o})}]}),e.jsx(w,{orientation:"left",children:"Large Size"}),e.jsx(n,{size:"large",items:[{key:"1",label:"This is large size panel header",children:e.jsx("p",{children:o})}]})]})},k={render:()=>e.jsx(i,{title:"In accordion mode, only one panel can be expanded at a time.",children:e.jsx(n,{accordion:!0,items:A})})},C={render:()=>{const l=[{key:"1",label:"This is panel nest panel",children:e.jsx("p",{children:o})}],r=[{key:"1",label:"This is panel header 1",children:e.jsx(n,{defaultActiveKey:"1",items:l})},{key:"2",label:"This is panel header 2",children:e.jsx("p",{children:o})},{key:"3",label:"This is panel header 3",children:e.jsx("p",{children:o})}],t=c=>{console.log(c)};return e.jsx(i,{title:"Collapse is nested inside the Collapse.",children:e.jsx(n,{onChange:t,items:r})})}},S={render:()=>{const l=e.jsx("p",{style:{paddingLeft:24},children:"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."}),r=[{key:"1",label:"This is panel header 1",children:l},{key:"2",label:"This is panel header 2",children:l},{key:"3",label:"This is panel header 3",children:l}];return e.jsx(i,{title:"A borderless style of Collapse.",children:e.jsx(n,{items:r,bordered:!1,defaultActiveKey:["1"]})})}},v={render:()=>{const l=c=>[{key:"1",label:"This is panel header 1",children:e.jsx("p",{children:o}),style:c},{key:"2",label:"This is panel header 2",children:e.jsx("p",{children:o}),style:c},{key:"3",label:"This is panel header 3",children:e.jsx("p",{children:o}),style:c}],{token:r}=Fe.useToken(),t={marginBottom:24,background:r.colorFillAlter,borderRadius:r.borderRadiusLG,border:"none"};return e.jsx(i,{title:"Customize the background, border, margin styles and icon for each panel.",children:e.jsx(n,{bordered:!1,defaultActiveKey:["1"],expandIcon:({isActive:c})=>e.jsx(ze,{name:c?"split":"add"}),style:{background:r.colorBgContainer},items:l(t)})})}},j={render:()=>{const l=[{key:"1",label:"This is panel header with arrow icon",children:e.jsx("p",{children:o})},{key:"2",label:"This is panel header with no arrow icon",children:e.jsx("p",{children:o}),showArrow:!1}],r=t=>{console.log(t)};return e.jsx(i,{title:"You can hide the arrow icon by passing showArrow={false} to CollapsePanel component.",children:e.jsx(n,{defaultActiveKey:["1"],onChange:r,items:l})})}},E={render:()=>{const{Option:l}=D,r=`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`,[t,c]=Me.useState("start"),Ke=d=>{c(d)},De=d=>{console.log(d)},I=()=>e.jsx("span",{onClick:d=>{d.stopPropagation()},children:e.jsx(ze,{name:"settings"})}),Be=[{key:"1",label:"This is panel header 1",children:e.jsx("div",{children:r}),extra:I()},{key:"2",label:"This is panel header 2",children:e.jsx("div",{children:r}),extra:I()},{key:"3",label:"This is panel header 3",children:e.jsx("div",{children:r}),extra:I()}];return e.jsxs(i,{title:e.jsx(e.Fragment,{children:" "}),children:[e.jsx(n,{defaultActiveKey:["1"],onChange:De,expandIconPosition:t,items:Be}),e.jsx("br",{}),e.jsx("span",{children:"Expand Icon Position: "}),e.jsxs(D,{value:t,style:{margin:"0 8px"},onChange:Ke,children:[e.jsx(l,{value:"start",children:"start"}),e.jsx(l,{value:"end",children:"end"})]})]})}},T={render:()=>e.jsx(i,{title:"Making collapse's background to transparent.",children:e.jsx(n,{defaultActiveKey:["1"],ghost:!0,items:A})})},P={render:()=>e.jsx(i,{title:"Specify the trigger area of collapsible by collapsible.",children:e.jsxs(_e,{direction:"vertical",children:[e.jsx(n,{collapsible:"header",defaultActiveKey:["1"],items:[{key:"1",label:"This panel can only be collapsed by clicking text",children:e.jsx("p",{children:o})}]}),e.jsx(n,{collapsible:"icon",defaultActiveKey:["1"],items:[{key:"1",label:"This panel can only be collapsed by clicking icon",children:e.jsx("p",{children:o})}]}),e.jsx(n,{collapsible:"disabled",items:[{key:"1",label:"This panel can't be collapsed",children:e.jsx("p",{children:o})}]})]})})};var B,O,N;p.parameters=a(s({},p.parameters),{docs:a(s({},(B=p.parameters)==null?void 0:B.docs),{source:s({originalSource:"{}"},(N=(O=p.parameters)==null?void 0:O.docs)==null?void 0:N.source)})});var R,L,W;h.parameters=a(s({},h.parameters),{docs:a(s({},(R=h.parameters)==null?void 0:R.docs),{source:s({originalSource:`{
  args: {
    accordion: true
  }
}`},(W=(L=h.parameters)==null?void 0:L.docs)==null?void 0:W.source)})});var _,M,F;m.parameters=a(s({},m.parameters),{docs:a(s({},(_=m.parameters)==null?void 0:_.docs),{source:s({originalSource:`{
  args: {
    activeKey: ['1']
  }
}`},(F=(M=m.parameters)==null?void 0:M.docs)==null?void 0:F.source)})});var G,H,Y;y.parameters=a(s({},y.parameters),{docs:a(s({},(G=y.parameters)==null?void 0:G.docs),{source:s({originalSource:`{
  args: {
    bordered: false
  }
}`},(Y=(H=y.parameters)==null?void 0:H.docs)==null?void 0:Y.source)})});var q,J,Q;x.parameters=a(s({},x.parameters),{docs:a(s({},(q=x.parameters)==null?void 0:q.docs),{source:s({originalSource:`{
  args: {
    collapsible: 'header'
  }
}`},(Q=(J=x.parameters)==null?void 0:J.docs)==null?void 0:Q.source)})});var U,V,X;u.parameters=a(s({},u.parameters),{docs:a(s({},(U=u.parameters)==null?void 0:U.docs),{source:s({originalSource:`{
  args: {
    defaultActiveKey: ['2']
  }
}`},(X=(V=u.parameters)==null?void 0:V.docs)==null?void 0:X.source)})});var Z,$,ee;g.parameters=a(s({},g.parameters),{docs:a(s({},(Z=g.parameters)==null?void 0:Z.docs),{source:s({originalSource:`{
  args: {
    destroyInactivePanel: true
  }
}`},(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source)})});var se,ae,le;b.parameters=a(s({},b.parameters),{docs:a(s({},(se=b.parameters)==null?void 0:se.docs),{source:s({originalSource:`{
  render: () => {
    const onChange = (key: string | string[]) => {
      console.log(key);
    };
    return <ExampleStory title="By default, any number of panels can be expanded at a time. The first panel is expanded in this example.">
        <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
      </ExampleStory>;
  }
}`},(le=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:le.source)})});var re,te,oe;f.parameters=a(s({},f.parameters),{docs:a(s({},(re=f.parameters)==null?void 0:re.docs),{source:s({originalSource:`{
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
}`},(oe=(te=f.parameters)==null?void 0:te.docs)==null?void 0:oe.source)})});var ne,ie,ce;k.parameters=a(s({},k.parameters),{docs:a(s({},(ne=k.parameters)==null?void 0:ne.docs),{source:s({originalSource:`{
  render: () => {
    return <ExampleStory title="In accordion mode, only one panel can be expanded at a time.">
        <Collapse accordion items={items} />
      </ExampleStory>;
  }
}`},(ce=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:ce.source)})});var de,pe,he;C.parameters=a(s({},C.parameters),{docs:a(s({},(de=C.parameters)==null?void 0:de.docs),{source:s({originalSource:`{
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
}`},(he=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:he.source)})});var me,ye,xe;S.parameters=a(s({},S.parameters),{docs:a(s({},(me=S.parameters)==null?void 0:me.docs),{source:s({originalSource:`{
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
}`},(xe=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:xe.source)})});var ue,ge,be;v.parameters=a(s({},v.parameters),{docs:a(s({},(ue=v.parameters)==null?void 0:ue.docs),{source:s({originalSource:`{
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
}`},(be=(ge=v.parameters)==null?void 0:ge.docs)==null?void 0:be.source)})});var fe,ke,Ce;j.parameters=a(s({},j.parameters),{docs:a(s({},(fe=j.parameters)==null?void 0:fe.docs),{source:s({originalSource:`{
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
}`},(Ce=(ke=j.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source)})});var Se,ve,je;E.parameters=a(s({},E.parameters),{docs:a(s({},(Se=E.parameters)==null?void 0:Se.docs),{source:s({originalSource:`{
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
}`},(je=(ve=E.parameters)==null?void 0:ve.docs)==null?void 0:je.source)})});var Ee,Te,Pe;T.parameters=a(s({},T.parameters),{docs:a(s({},(Ee=T.parameters)==null?void 0:Ee.docs),{source:s({originalSource:`{
  render: () => {
    return <ExampleStory title="Making collapse's background to transparent.">
        <Collapse defaultActiveKey={['1']} ghost items={items} />
      </ExampleStory>;
  }
}`},(Pe=(Te=T.parameters)==null?void 0:Te.docs)==null?void 0:Pe.source)})});var Ae,Ie,we;P.parameters=a(s({},P.parameters),{docs:a(s({},(Ae=P.parameters)==null?void 0:Ae.docs),{source:s({originalSource:`{
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
}`},(we=(Ie=P.parameters)==null?void 0:Ie.docs)==null?void 0:we.source)})});const He=["Primary","AccordionMode","WithActivePanel","BorderlessCollapse","WithCollapsibleHeaders","WithCustomActivePanel","DestroyInactivePanels","ExampleBasic","ExampleSize","ExampleAccordion","ExampleNestedPanel","ExampleBorderless","ExampleCustomPanel","ExampleNoArrow","ExampleExtraNode","ExampleGhostCollaps","ExampleCollapsible"],Ze=Object.freeze(Object.defineProperty({__proto__:null,AccordionMode:h,BorderlessCollapse:y,DestroyInactivePanels:g,ExampleAccordion:k,ExampleBasic:b,ExampleBorderless:S,ExampleCollapsible:P,ExampleCustomPanel:v,ExampleExtraNode:E,ExampleGhostCollaps:T,ExampleNestedPanel:C,ExampleNoArrow:j,ExampleSize:f,Primary:p,WithActivePanel:m,WithCollapsibleHeaders:x,WithCustomActivePanel:u,__namedExportsOrder:He,default:Ge},Symbol.toStringTag,{value:"Module"}));export{Ze as C,Ge as m};
