import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as l,k as A,I as w,d as I,S as B}from"./UnauthorizedTooltip-DInzTCbR.js";import{E as r}from"./ExampleStory-D9NFb6Ax.js";import"./ErrorStateIcon-N5tZzBSe.js";import"./SuccessStateIcon-jdQomLYr.js";import"./WarningStateIcon-BOAINRnk.js";import{r as N}from"./iframe-DPsSDxI5.js";import{t as O}from"./index-kMS0x76F.js";import"./LightTheme-BtoaoHMG.js";import"./row-D3EgDzJn.js";import"./Context-BfWCYYV6.js";import"./useToken-D3WBQzQr.js";import"./presets-C7IxLGBr.js";import"./index-C_XAaiqg.js";import"./index-BkHrRISK.js";import"./AntdIcon-DQ0RjuI5.js";import"./style-C-7nCLOl.js";import"./client-Bm7MYF5w.js";import"./WarningFilled-DE1WQ37c.js";import"./preload-helper-PPVm8Dsz.js";const s=`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`,c=[{key:"1",label:"This is panel header 1",children:e.jsx("p",{children:s})},{key:"2",label:"This is panel header 2",children:e.jsx("p",{children:s})},{key:"3",label:"This is panel header 3",children:e.jsx("p",{children:s})}],le={title:"Components/Not Prod Ready/Data Display/Collapse",component:a=>e.jsx(l,{items:c,...a}),args:{accordion:!1,activeKey:void 0,bordered:!0,collapsible:void 0,defaultActiveKey:void 0,destroyInactivePanel:!1,expandIcon:void 0,expandIconPlacement:void 0,ghost:!1,size:"middle",items:c,onChange:a=>{console.log(a)}},argTypes:{size:{control:"select",options:["small","medium","large"]},expandIconPlacement:{control:"select",options:["start","end"]},collapsible:{control:"select",options:["header","icon","disabled"]}}},d={},p={args:{accordion:!0}},m={args:{activeKey:["1"]}},h={args:{bordered:!1}},x={args:{collapsible:"header"}},y={args:{defaultActiveKey:["2"]}},u={args:{destroyInactivePanel:!0}},g={render:()=>{const a=t=>{console.log(t)};return e.jsx(r,{title:"By default, any number of panels can be expanded at a time. The first panel is expanded in this example.",children:e.jsx(l,{items:c,defaultActiveKey:["1"],onChange:a})})}},b={render:()=>e.jsxs(r,{title:e.jsxs(e.Fragment,{children:["Supports a default collapse size as well as a large and small size.",e.jsx("br",{}),"If a large or small collapse is desired, set the size property to either large or small respectively. Omit the size property for a collapse with the default size."]}),children:[e.jsx(A,{titlePlacement:"left",children:"Default Size"}),e.jsx(l,{items:[{key:"1",label:"This is default size panel header",children:e.jsx("p",{children:s})}]}),e.jsx(A,{titlePlacement:"left",children:"Small Size"}),e.jsx(l,{size:"small",items:[{key:"1",label:"This is small size panel header",children:e.jsx("p",{children:s})}]}),e.jsx(A,{titlePlacement:"left",children:"Large Size"}),e.jsx(l,{size:"large",items:[{key:"1",label:"This is large size panel header",children:e.jsx("p",{children:s})}]})]})},f={render:()=>e.jsx(r,{title:"In accordion mode, only one panel can be expanded at a time.",children:e.jsx(l,{accordion:!0,items:c})})},k={render:()=>{const a=[{key:"1",label:"This is panel nest panel",children:e.jsx("p",{children:s})}],t=[{key:"1",label:"This is panel header 1",children:e.jsx(l,{defaultActiveKey:"1",items:a})},{key:"2",label:"This is panel header 2",children:e.jsx("p",{children:s})},{key:"3",label:"This is panel header 3",children:e.jsx("p",{children:s})}],o=n=>{console.log(n)};return e.jsx(r,{title:"Collapse is nested inside the Collapse.",children:e.jsx(l,{onChange:o,items:t})})}},C={render:()=>{const a=e.jsx("p",{style:{paddingLeft:24},children:"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."}),t=[{key:"1",label:"This is panel header 1",children:a},{key:"2",label:"This is panel header 2",children:a},{key:"3",label:"This is panel header 3",children:a}];return e.jsx(r,{title:"A borderless style of Collapse.",children:e.jsx(l,{items:t,bordered:!1,defaultActiveKey:["1"]})})}},S={render:()=>{const a=n=>[{key:"1",label:"This is panel header 1",children:e.jsx("p",{children:s}),style:n},{key:"2",label:"This is panel header 2",children:e.jsx("p",{children:s}),style:n},{key:"3",label:"This is panel header 3",children:e.jsx("p",{children:s}),style:n}],{token:t}=O.useToken(),o={marginBottom:24,background:t.colorFillAlter,borderRadius:t.borderRadiusLG,border:"none"};return e.jsx(r,{title:"Customize the background, border, margin styles and icon for each panel.",children:e.jsx(l,{bordered:!1,defaultActiveKey:["1"],expandIcon:({isActive:n})=>e.jsx(w,{name:n?"split":"add"}),style:{background:t.colorBgContainer},items:a(o)})})}},v={render:()=>{const a=[{key:"1",label:"This is panel header with arrow icon",children:e.jsx("p",{children:s})},{key:"2",label:"This is panel header with no arrow icon",children:e.jsx("p",{children:s}),showArrow:!1}],t=o=>{console.log(o)};return e.jsx(r,{title:"You can hide the arrow icon by passing showArrow={false} to CollapsePanel component.",children:e.jsx(l,{defaultActiveKey:["1"],onChange:t,items:a})})}},j={render:()=>{const{Option:a}=I,t=`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`,[o,n]=N.useState("start"),z=i=>{n(i)},K=i=>{console.log(i)},P=()=>e.jsx("span",{onClick:i=>{i.stopPropagation()},children:e.jsx(w,{name:"settings"})}),D=[{key:"1",label:"This is panel header 1",children:e.jsx("div",{children:t}),extra:P()},{key:"2",label:"This is panel header 2",children:e.jsx("div",{children:t}),extra:P()},{key:"3",label:"This is panel header 3",children:e.jsx("div",{children:t}),extra:P()}];return e.jsxs(r,{title:e.jsx(e.Fragment,{children:" "}),children:[e.jsx(l,{defaultActiveKey:["1"],onChange:K,expandIconPlacement:o,items:D}),e.jsx("br",{}),e.jsx("span",{children:"Expand Icon Placement: "}),e.jsxs(I,{value:o,style:{margin:"0 8px"},onChange:z,children:[e.jsx(a,{value:"start",children:"start"}),e.jsx(a,{value:"end",children:"end"})]})]})}},E={render:()=>e.jsx(r,{title:"Making collapse's background to transparent.",children:e.jsx(l,{defaultActiveKey:["1"],ghost:!0,items:c})})},T={render:()=>e.jsx(r,{title:"Specify the trigger area of collapsible by collapsible.",children:e.jsxs(B,{orientation:"vertical",children:[e.jsx(l,{collapsible:"header",defaultActiveKey:["1"],items:[{key:"1",label:"This panel can only be collapsed by clicking text",children:e.jsx("p",{children:s})}]}),e.jsx(l,{collapsible:"icon",defaultActiveKey:["1"],items:[{key:"1",label:"This panel can only be collapsed by clicking icon",children:e.jsx("p",{children:s})}]}),e.jsx(l,{collapsible:"disabled",items:[{key:"1",label:"This panel can't be collapsed",children:e.jsx("p",{children:s})}]})]})})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    accordion: true
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    activeKey: ['1']
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: false
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: 'header'
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultActiveKey: ['2']
  }
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    destroyInactivePanel: true
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const onChange = (key: string | string[]) => {
      console.log(key);
    };
    return <ExampleStory title="By default, any number of panels can be expanded at a time. The first panel is expanded in this example.">
        <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
      </ExampleStory>;
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title={<>
            Supports a default collapse size as well as a large and small size.
            <br />
            If a large or small collapse is desired, set the size property to either large or small respectively. Omit
            the size property for a collapse with the default size.
          </>}>
        <Divider titlePlacement="left">Default Size</Divider>
        <Collapse items={[{
        key: '1',
        label: 'This is default size panel header',
        children: <p>{text}</p>
      }]} />
        <Divider titlePlacement="left">Small Size</Divider>
        <Collapse size="small" items={[{
        key: '1',
        label: 'This is small size panel header',
        children: <p>{text}</p>
      }]} />
        <Divider titlePlacement="left">Large Size</Divider>
        <Collapse size="large" items={[{
        key: '1',
        label: 'This is large size panel header',
        children: <p>{text}</p>
      }]} />
      </ExampleStory>;
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="In accordion mode, only one panel can be expanded at a time.">
        <Collapse accordion items={items} />
      </ExampleStory>;
  }
}`,...f.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      Option
    } = Select;
    const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
\`;
    type ExpandIconPlacement = 'start' | 'end';
    const [expandIconPlacement, setExpandIconPlacement] = useState<ExpandIconPlacement>('start');
    const onPlacementChange = (newExpandIconPlacement: ExpandIconPlacement) => {
      setExpandIconPlacement(newExpandIconPlacement);
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
        <Collapse defaultActiveKey={['1']} onChange={onChange} expandIconPlacement={expandIconPlacement} items={items} />
        <br />
        <span>Expand Icon Placement: </span>
        <Select value={expandIconPlacement} style={{
        margin: '0 8px'
      }} onChange={onPlacementChange}>
          <Option value="start">start</Option>
          <Option value="end">end</Option>
        </Select>
      </ExampleStory>;
  }
}`,...j.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="Making collapse's background to transparent.">
        <Collapse defaultActiveKey={['1']} ghost items={items} />
      </ExampleStory>;
  }
}`,...E.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="Specify the trigger area of collapsible by collapsible.">
        <Space orientation="vertical">
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
}`,...T.parameters?.docs?.source}}};const te=["Primary","AccordionMode","WithActivePanel","BorderlessCollapse","WithCollapsibleHeaders","WithCustomActivePanel","DestroyInactivePanels","ExampleBasic","ExampleSize","ExampleAccordion","ExampleNestedPanel","ExampleBorderless","ExampleCustomPanel","ExampleNoArrow","ExampleExtraNode","ExampleGhostCollaps","ExampleCollapsible"];export{p as AccordionMode,h as BorderlessCollapse,u as DestroyInactivePanels,f as ExampleAccordion,g as ExampleBasic,C as ExampleBorderless,T as ExampleCollapsible,S as ExampleCustomPanel,j as ExampleExtraNode,E as ExampleGhostCollaps,k as ExampleNestedPanel,v as ExampleNoArrow,b as ExampleSize,d as Primary,m as WithActivePanel,x as WithCollapsibleHeaders,y as WithCustomActivePanel,te as __namedExportsOrder,le as default};
