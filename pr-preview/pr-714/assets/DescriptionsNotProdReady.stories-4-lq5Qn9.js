import{D as t,j as e,i as r,y as S,Z as s,B as j}from"./iframe-B6Y2oegk.js";import{E as y}from"./ExampleStory-Dokjh494.js";import"./preload-helper-PPVm8Dsz.js";const E={title:"Components/Not Prod Ready/Data Display/Descriptions",component:t,args:{bordered:!1,colon:!0,column:3,contentStyle:void 0,extra:void 0,items:[{label:"Item 1",children:"Value 1"},{label:"Item 2",children:"Value 2"},{label:"Item 3",children:"Value 3"}],labelStyle:void 0,layout:"horizontal",size:"default",title:void 0},argTypes:{size:{control:"select",options:["default","middle","small"]},layout:{control:"select",options:["horizontal","vertical"]}}},l={args:{bordered:!0}},o={args:{layout:"vertical"}},i={args:{size:"small"}},n={args:{title:e.jsx(r,{children:"Custom React Component"})}},c={args:{extra:e.jsx(r,{type:"primary",children:"Extra React Components"})}},d={args:{title:e.jsx(r,{children:"Custom React Component"}),extra:e.jsx(r,{type:"primary",children:"Extra React Components"})}},m={args:{contentStyle:{color:"red"}}},p={args:{labelStyle:{fontWeight:"bold"}}},u={args:{column:{xs:8,sm:16,md:24}}},b={render:()=>{const a=[{key:"1",label:"Product",children:"Cloud Database"},{key:"2",label:"Billing Mode",children:"Prepaid"},{key:"3",label:"Automatic Renewal",children:"YES"},{key:"4",label:"Order time",children:"2018-04-24 18:00:00"},{key:"5",label:"Usage Time",children:"2019-04-24 18:00:00",span:2},{key:"6",label:"Status",children:e.jsx(j,{status:"processing",text:"Running"}),span:3},{key:"7",label:"Negotiated Amount",children:"$80.00"},{key:"8",label:"Discount",children:"$20.00"},{key:"9",label:"Official Receipts",children:"$60.00"},{key:"10",label:"Config Info",children:e.jsxs(e.Fragment,{children:["Data disk type: MongoDB",e.jsx("br",{}),"Database version: 3.4",e.jsx("br",{}),"Package: dds.mongo.mid",e.jsx("br",{}),"Storage space: 10 GB",e.jsx("br",{}),"Replication factor: 3",e.jsx("br",{}),"Region: East China 1",e.jsx("br",{})]})}];return e.jsx(y,{title:"Descriptions with border and background color.",children:e.jsx(t,{title:"User Info",bordered:!0,items:a})})}},x={render:()=>{const a=[{key:"1",label:"Product",children:"Cloud Database"},{key:"2",label:"Billing",children:"Prepaid"},{key:"3",label:"Time",children:"18:00:00"},{key:"4",label:"Amount",children:"$80.00"},{key:"5",label:"Discount",children:"$20.00"},{key:"6",label:"Official",children:"$60.00"},{key:"7",label:"Config Info",children:e.jsxs(e.Fragment,{children:["Data disk type: MongoDB",e.jsx("br",{}),"Database version: 3.4",e.jsx("br",{}),"Package: dds.mongo.mid",e.jsx("br",{}),"Storage space: 10 GB",e.jsx("br",{}),"Replication factor: 3",e.jsx("br",{}),"Region: East China 1",e.jsx("br",{})]})}],f=[{key:"1",label:"Product",children:"Cloud Database"},{key:"2",label:"Billing",children:"Prepaid"},{key:"3",label:"Time",children:"18:00:00"},{key:"4",label:"Amount",children:"$80.00"},{key:"5",label:"Discount",children:"$20.00"},{key:"6",label:"Official",children:"$60.00"}],[h,D]=S.useState("default"),C=k=>{console.log("size checked",k.target.value),D(k.target.value)};return e.jsx(y,{title:"Custom sizes to fit in a variety of containers.",children:e.jsxs("div",{children:[e.jsxs(s.Group,{onChange:C,value:h,children:[e.jsx(s,{value:"default",children:"default"}),e.jsx(s,{value:"middle",children:"middle"}),e.jsx(s,{value:"small",children:"small"})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(t,{bordered:!0,title:"Custom Size",size:h,extra:e.jsx(r,{type:"primary",children:"Edit"}),items:a}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(t,{title:"Custom Size",size:h,extra:e.jsx(r,{type:"primary",children:"Edit"}),items:f})]})})}},g={render:()=>{const a=[{label:"Product",children:"Cloud Database"},{label:"Billing",children:"Prepaid"},{label:"Time",children:"18:00:00"},{label:"Amount",children:"$80.00"},{label:"Discount",span:{xl:2,xxl:2},children:"$20.00"},{label:"Official",span:{xl:2,xxl:2},children:"$60.00"},{label:"Config Info",span:{xs:1,sm:2,md:3,lg:3,xl:2,xxl:2},children:e.jsxs(e.Fragment,{children:["Data disk type: MongoDB",e.jsx("br",{}),"Database version: 3.4",e.jsx("br",{}),"Package: dds.mongo.mid"]})},{label:"Hardware Info",span:{xs:1,sm:2,md:3,lg:3,xl:2,xxl:2},children:e.jsxs(e.Fragment,{children:["CPU: 6 Core 3.5 GHz",e.jsx("br",{}),"Storage space: 10 GB",e.jsx("br",{}),"Replication factor: 3",e.jsx("br",{}),"Region: East China 1"]})}];return e.jsx(y,{title:"Responsive configuration enables perfect presentation on small screen devices.",children:e.jsx(t,{title:"Responsive Descriptions",bordered:!0,column:{xs:1,sm:2,md:3,lg:3,xl:4,xxl:4},items:a})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: true
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'vertical'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: <Button>Custom React Component</Button>
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    extra: <Button type="primary">Extra React Components</Button>
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: <Button>Custom React Component</Button>,
    extra: <Button type="primary">Extra React Components</Button>
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    contentStyle: {
      color: 'red'
    }
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    labelStyle: {
      fontWeight: 'bold'
    }
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    column: {
      xs: 8,
      sm: 16,
      md: 24
    }
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items: IDescriptionsProps['items'] = [{
      key: '1',
      label: 'Product',
      children: 'Cloud Database'
    }, {
      key: '2',
      label: 'Billing Mode',
      children: 'Prepaid'
    }, {
      key: '3',
      label: 'Automatic Renewal',
      children: 'YES'
    }, {
      key: '4',
      label: 'Order time',
      children: '2018-04-24 18:00:00'
    }, {
      key: '5',
      label: 'Usage Time',
      children: '2019-04-24 18:00:00',
      span: 2
    }, {
      key: '6',
      label: 'Status',
      children: <Badge status="processing" text="Running" />,
      span: 3
    }, {
      key: '7',
      label: 'Negotiated Amount',
      children: '$80.00'
    }, {
      key: '8',
      label: 'Discount',
      children: '$20.00'
    }, {
      key: '9',
      label: 'Official Receipts',
      children: '$60.00'
    }, {
      key: '10',
      label: 'Config Info',
      children: <>
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1
            <br />
          </>
    }];
    return <ExampleStory title="Descriptions with border and background color.">
        <Descriptions title="User Info" bordered items={items} />
      </ExampleStory>;
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const borderedItems: IDescriptionsProps['items'] = [{
      key: '1',
      label: 'Product',
      children: 'Cloud Database'
    }, {
      key: '2',
      label: 'Billing',
      children: 'Prepaid'
    }, {
      key: '3',
      label: 'Time',
      children: '18:00:00'
    }, {
      key: '4',
      label: 'Amount',
      children: '$80.00'
    }, {
      key: '5',
      label: 'Discount',
      children: '$20.00'
    }, {
      key: '6',
      label: 'Official',
      children: '$60.00'
    }, {
      key: '7',
      label: 'Config Info',
      children: <>
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1
            <br />
          </>
    }];
    const items: IDescriptionsProps['items'] = [{
      key: '1',
      label: 'Product',
      children: 'Cloud Database'
    }, {
      key: '2',
      label: 'Billing',
      children: 'Prepaid'
    }, {
      key: '3',
      label: 'Time',
      children: '18:00:00'
    }, {
      key: '4',
      label: 'Amount',
      children: '$80.00'
    }, {
      key: '5',
      label: 'Discount',
      children: '$20.00'
    }, {
      key: '6',
      label: 'Official',
      children: '$60.00'
    }];
    const [size, setSize] = useState<IDescriptionsProps['size']>('default');
    const onChange = (e: RadioChangeEvent): void => {
      console.log('size checked', e.target.value);
      setSize(e.target.value as IDescriptionsProps['size']);
    };
    return <ExampleStory title="Custom sizes to fit in a variety of containers.">
        <div>
          <Radio.Group onChange={onChange} value={size}>
            <Radio value="default">default</Radio>
            <Radio value="middle">middle</Radio>
            <Radio value="small">small</Radio>
          </Radio.Group>
          <br />
          <br />
          <Descriptions bordered title="Custom Size" size={size} extra={<Button type="primary">Edit</Button>} items={borderedItems} />
          <br />
          <br />
          <Descriptions title="Custom Size" size={size} extra={<Button type="primary">Edit</Button>} items={items} />
        </div>
      </ExampleStory>;
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items: IDescriptionsProps['items'] = [{
      label: 'Product',
      children: 'Cloud Database'
    }, {
      label: 'Billing',
      children: 'Prepaid'
    }, {
      label: 'Time',
      children: '18:00:00'
    }, {
      label: 'Amount',
      children: '$80.00'
    }, {
      label: 'Discount',
      span: {
        xl: 2,
        xxl: 2
      },
      children: '$20.00'
    }, {
      label: 'Official',
      span: {
        xl: 2,
        xxl: 2
      },
      children: '$60.00'
    }, {
      label: 'Config Info',
      span: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 2,
        xxl: 2
      },
      children: <>
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
          </>
    }, {
      label: 'Hardware Info',
      span: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 2,
        xxl: 2
      },
      children: <>
            CPU: 6 Core 3.5 GHz
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1
          </>
    }];
    return <ExampleStory title="Responsive configuration enables perfect presentation on small screen devices.">
        <Descriptions title="Responsive Descriptions" bordered column={{
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 4
      }} items={items} />
      </ExampleStory>;
  }
}`,...g.parameters?.docs?.source}}};const P=["Bordered","Vertical","Small","CustomTitle","WithExtra","WithTitleAndExtra","WithContentStyle","WithLabelStyle","ResponsiveColumn","ExampleTableLook","ExampleSize","ExampleResponsiveDescriptions"];export{l as Bordered,n as CustomTitle,g as ExampleResponsiveDescriptions,x as ExampleSize,b as ExampleTableLook,u as ResponsiveColumn,i as Small,o as Vertical,m as WithContentStyle,c as WithExtra,p as WithLabelStyle,d as WithTitleAndExtra,P as __namedExportsOrder,E as default};
