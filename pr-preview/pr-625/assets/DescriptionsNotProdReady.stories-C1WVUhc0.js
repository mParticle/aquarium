var ce=Object.defineProperty,de=Object.defineProperties;var me=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var j=(t,s,o)=>s in t?ce(t,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[s]=o,r=(t,s)=>{for(var o in s||(s={}))pe.call(s,o)&&j(t,o,s[o]);if(S)for(var o of S(s))ue.call(s,o)&&j(t,o,s[o]);return t},a=(t,s)=>de(t,me(s));import{j as e}from"./jsx-runtime-C9TrHvcC.js";import{j as i,e as l,R as n,B as be}from"./NavigationItemsService-DJ8fo2xC.js";import"./ErrorStateIcon-DB4_bVGf.js";import"./SuccessStateIcon-C3QDfC-0.js";import"./WarningStateIcon-vZ0xXRsU.js";import"./_baseClone-DwBCp-Ss.js";import{E as C}from"./ExampleStory-BKA9FHZc.js";import{r as xe}from"./index-3OP4wdng.js";import"./LightTheme-BtoaoHMG.js";import"./row-DlEJUZa0.js";import"./Context-R5ee3nrF.js";import"./useToken-BIYN7ogo.js";import"./presets-CQzyf-6F.js";import"./extends-CF3RwP-h.js";import"./index-DA79H6I3.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./AntdIcon-DRQs8XP6.js";import"./style-BvWo89XW.js";import"./WarningFilled-D6ijQqgK.js";const Oe={title:"Components/Not Prod Ready/Data Display/Descriptions",component:i,args:{bordered:!1,colon:!0,column:3,contentStyle:void 0,extra:void 0,items:[{label:"Item 1",children:"Value 1"},{label:"Item 2",children:"Value 2"},{label:"Item 3",children:"Value 3"}],labelStyle:void 0,layout:"horizontal",size:"default",title:void 0},argTypes:{size:{control:"select",options:["default","middle","small"]},layout:{control:"select",options:["horizontal","vertical"]}}},c={args:{bordered:!0}},d={args:{layout:"vertical"}},m={args:{size:"small"}},p={args:{title:e.jsx(l,{children:"Custom React Component"})}},u={args:{extra:e.jsx(l,{type:"primary",children:"Extra React Components"})}},b={args:{title:e.jsx(l,{children:"Custom React Component"}),extra:e.jsx(l,{type:"primary",children:"Extra React Components"})}},x={args:{contentStyle:{color:"red"}}},g={args:{labelStyle:{fontWeight:"bold"}}},h={args:{column:{xs:8,sm:16,md:24}}},y={render:()=>{const t=[{key:"1",label:"Product",children:"Cloud Database"},{key:"2",label:"Billing Mode",children:"Prepaid"},{key:"3",label:"Automatic Renewal",children:"YES"},{key:"4",label:"Order time",children:"2018-04-24 18:00:00"},{key:"5",label:"Usage Time",children:"2019-04-24 18:00:00",span:2},{key:"6",label:"Status",children:e.jsx(be,{status:"processing",text:"Running"}),span:3},{key:"7",label:"Negotiated Amount",children:"$80.00"},{key:"8",label:"Discount",children:"$20.00"},{key:"9",label:"Official Receipts",children:"$60.00"},{key:"10",label:"Config Info",children:e.jsxs(e.Fragment,{children:["Data disk type: MongoDB",e.jsx("br",{}),"Database version: 3.4",e.jsx("br",{}),"Package: dds.mongo.mid",e.jsx("br",{}),"Storage space: 10 GB",e.jsx("br",{}),"Replication factor: 3",e.jsx("br",{}),"Region: East China 1",e.jsx("br",{})]})}];return e.jsx(C,{title:"Descriptions with border and background color.",children:e.jsx(i,{title:"User Info",bordered:!0,items:t})})}},k={render:()=>{const t=[{key:"1",label:"Product",children:"Cloud Database"},{key:"2",label:"Billing",children:"Prepaid"},{key:"3",label:"Time",children:"18:00:00"},{key:"4",label:"Amount",children:"$80.00"},{key:"5",label:"Discount",children:"$20.00"},{key:"6",label:"Official",children:"$60.00"},{key:"7",label:"Config Info",children:e.jsxs(e.Fragment,{children:["Data disk type: MongoDB",e.jsx("br",{}),"Database version: 3.4",e.jsx("br",{}),"Package: dds.mongo.mid",e.jsx("br",{}),"Storage space: 10 GB",e.jsx("br",{}),"Replication factor: 3",e.jsx("br",{}),"Region: East China 1",e.jsx("br",{})]})}],s=[{key:"1",label:"Product",children:"Cloud Database"},{key:"2",label:"Billing",children:"Prepaid"},{key:"3",label:"Time",children:"18:00:00"},{key:"4",label:"Amount",children:"$80.00"},{key:"5",label:"Discount",children:"$20.00"},{key:"6",label:"Official",children:"$60.00"}],[o,ie]=xe.useState("default"),ne=D=>{console.log("size checked",D.target.value),ie(D.target.value)};return e.jsx(C,{title:"Custom sizes to fit in a variety of containers.",children:e.jsxs("div",{children:[e.jsxs(n.Group,{onChange:ne,value:o,children:[e.jsx(n,{value:"default",children:"default"}),e.jsx(n,{value:"middle",children:"middle"}),e.jsx(n,{value:"small",children:"small"})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(i,{bordered:!0,title:"Custom Size",size:o,extra:e.jsx(l,{type:"primary",children:"Edit"}),items:t}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(i,{title:"Custom Size",size:o,extra:e.jsx(l,{type:"primary",children:"Edit"}),items:s})]})})}},f={render:()=>{const t=[{label:"Product",children:"Cloud Database"},{label:"Billing",children:"Prepaid"},{label:"Time",children:"18:00:00"},{label:"Amount",children:"$80.00"},{label:"Discount",span:{xl:2,xxl:2},children:"$20.00"},{label:"Official",span:{xl:2,xxl:2},children:"$60.00"},{label:"Config Info",span:{xs:1,sm:2,md:3,lg:3,xl:2,xxl:2},children:e.jsxs(e.Fragment,{children:["Data disk type: MongoDB",e.jsx("br",{}),"Database version: 3.4",e.jsx("br",{}),"Package: dds.mongo.mid"]})},{label:"Hardware Info",span:{xs:1,sm:2,md:3,lg:3,xl:2,xxl:2},children:e.jsxs(e.Fragment,{children:["CPU: 6 Core 3.5 GHz",e.jsx("br",{}),"Storage space: 10 GB",e.jsx("br",{}),"Replication factor: 3",e.jsx("br",{}),"Region: East China 1"]})}];return e.jsx(C,{title:"Responsive configuration enables perfect presentation on small screen devices.",children:e.jsx(i,{title:"Responsive Descriptions",bordered:!0,column:{xs:1,sm:2,md:3,lg:3,xl:4,xxl:4},items:t})})}};var R,v,B;c.parameters=a(r({},c.parameters),{docs:a(r({},(R=c.parameters)==null?void 0:R.docs),{source:r({originalSource:`{
  args: {
    bordered: true
  }
}`},(B=(v=c.parameters)==null?void 0:v.docs)==null?void 0:B.source)})});var E,P,z;d.parameters=a(r({},d.parameters),{docs:a(r({},(E=d.parameters)==null?void 0:E.docs),{source:r({originalSource:`{
  args: {
    layout: 'vertical'
  }
}`},(z=(P=d.parameters)==null?void 0:P.docs)==null?void 0:z.source)})});var $,I,T;m.parameters=a(r({},m.parameters),{docs:a(r({},($=m.parameters)==null?void 0:$.docs),{source:r({originalSource:`{
  args: {
    size: 'small'
  }
}`},(T=(I=m.parameters)==null?void 0:I.docs)==null?void 0:T.source)})});var A,G,O;p.parameters=a(r({},p.parameters),{docs:a(r({},(A=p.parameters)==null?void 0:A.docs),{source:r({originalSource:`{
  args: {
    title: <Button>Custom React Component</Button>
  }
}`},(O=(G=p.parameters)==null?void 0:G.docs)==null?void 0:O.source)})});var W,M,w;u.parameters=a(r({},u.parameters),{docs:a(r({},(W=u.parameters)==null?void 0:W.docs),{source:r({originalSource:`{
  args: {
    extra: <Button type="primary">Extra React Components</Button>
  }
}`},(w=(M=u.parameters)==null?void 0:M.docs)==null?void 0:w.source)})});var U,V,F;b.parameters=a(r({},b.parameters),{docs:a(r({},(U=b.parameters)==null?void 0:U.docs),{source:r({originalSource:`{
  args: {
    title: <Button>Custom React Component</Button>,
    extra: <Button type="primary">Extra React Components</Button>
  }
}`},(F=(V=b.parameters)==null?void 0:V.docs)==null?void 0:F.source)})});var H,L,N;x.parameters=a(r({},x.parameters),{docs:a(r({},(H=x.parameters)==null?void 0:H.docs),{source:r({originalSource:`{
  args: {
    contentStyle: {
      color: 'red'
    }
  }
}`},(N=(L=x.parameters)==null?void 0:L.docs)==null?void 0:N.source)})});var Y,_,q;g.parameters=a(r({},g.parameters),{docs:a(r({},(Y=g.parameters)==null?void 0:Y.docs),{source:r({originalSource:`{
  args: {
    labelStyle: {
      fontWeight: 'bold'
    }
  }
}`},(q=(_=g.parameters)==null?void 0:_.docs)==null?void 0:q.source)})});var J,K,Q;h.parameters=a(r({},h.parameters),{docs:a(r({},(J=h.parameters)==null?void 0:J.docs),{source:r({originalSource:`{
  args: {
    column: {
      xs: 8,
      sm: 16,
      md: 24
    }
  }
}`},(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source)})});var X,Z,ee;y.parameters=a(r({},y.parameters),{docs:a(r({},(X=y.parameters)==null?void 0:X.docs),{source:r({originalSource:`{
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
}`},(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source)})});var re,ae,te;k.parameters=a(r({},k.parameters),{docs:a(r({},(re=k.parameters)==null?void 0:re.docs),{source:r({originalSource:`{
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
}`},(te=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:te.source)})});var se,oe,le;f.parameters=a(r({},f.parameters),{docs:a(r({},(se=f.parameters)==null?void 0:se.docs),{source:r({originalSource:`{
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
}`},(le=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:le.source)})});const We=["Bordered","Vertical","Small","CustomTitle","WithExtra","WithTitleAndExtra","WithContentStyle","WithLabelStyle","ResponsiveColumn","ExampleTableLook","ExampleSize","ExampleResponsiveDescriptions"];export{c as Bordered,p as CustomTitle,f as ExampleResponsiveDescriptions,k as ExampleSize,y as ExampleTableLook,h as ResponsiveColumn,m as Small,d as Vertical,x as WithContentStyle,u as WithExtra,g as WithLabelStyle,b as WithTitleAndExtra,We as __namedExportsOrder,Oe as default};
