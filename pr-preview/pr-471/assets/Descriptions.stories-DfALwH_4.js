var ue=Object.defineProperty,be=Object.defineProperties;var xe=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var R=(t,s,o)=>s in t?ue(t,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[s]=o,r=(t,s)=>{for(var o in s||(s={}))ge.call(s,o)&&R(t,o,s[o]);if(j)for(var o of j(s))he.call(s,o)&&R(t,o,s[o]);return t},a=(t,s)=>be(t,xe(s));import{j as e}from"./jsx-runtime-CVnACwZl.js";import{n as i,B as l,R as n,j as ye}from"./GlobalNavigation-DxJ0bpmA.js";import"./ConfigProvider-CLSyxc9v.js";import"./_baseClone-B3DJrZ5i.js";import{E as D}from"./ExampleStory-BF1_nuwN.js";import{r as ke}from"./index-3OP4wdng.js";import"./index-DWDMsSA9.js";import"./useToken-CXWLUMEq.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-B-gr4m3q.js";import"./isNativeReflectConstruct-D-r9sWlk.js";import"./row-BmOE1Szh.js";import"./dayjs.min-FTgVsUrW.js";import"./customParseFormat-Dfkg1z51.js";import"./LightTheme-BtoaoHMG.js";const We={title:"Components/Data Display/Descriptions",component:i,args:{bordered:!1,colon:!0,column:3,contentStyle:void 0,extra:void 0,items:[{label:"Item 1",children:"Value 1"},{label:"Item 2",children:"Value 2"},{label:"Item 3",children:"Value 3"}],labelStyle:void 0,layout:"horizontal",size:"default",title:void 0},argTypes:{size:{control:"select",options:["default","middle","small"]},layout:{control:"select",options:["horizontal","vertical"]}}},c={},d={args:{bordered:!0}},m={args:{layout:"vertical"}},p={args:{size:"small"}},u={args:{title:e.jsx(l,{children:"Custom React Component"})}},b={args:{extra:e.jsx(l,{type:"primary",children:"Extra React Components"})}},x={args:{title:e.jsx(l,{children:"Custom React Component"}),extra:e.jsx(l,{type:"primary",children:"Extra React Components"})}},g={args:{contentStyle:{color:"red"}}},h={args:{labelStyle:{fontWeight:"bold"}}},y={args:{column:{xs:8,sm:16,md:24}}},k={render:()=>{const t=[{key:"1",label:"Product",children:"Cloud Database"},{key:"2",label:"Billing Mode",children:"Prepaid"},{key:"3",label:"Automatic Renewal",children:"YES"},{key:"4",label:"Order time",children:"2018-04-24 18:00:00"},{key:"5",label:"Usage Time",children:"2019-04-24 18:00:00",span:2},{key:"6",label:"Status",children:e.jsx(ye,{status:"processing",text:"Running"}),span:3},{key:"7",label:"Negotiated Amount",children:"$80.00"},{key:"8",label:"Discount",children:"$20.00"},{key:"9",label:"Official Receipts",children:"$60.00"},{key:"10",label:"Config Info",children:e.jsxs(e.Fragment,{children:["Data disk type: MongoDB",e.jsx("br",{}),"Database version: 3.4",e.jsx("br",{}),"Package: dds.mongo.mid",e.jsx("br",{}),"Storage space: 10 GB",e.jsx("br",{}),"Replication factor: 3",e.jsx("br",{}),"Region: East China 1",e.jsx("br",{})]})}];return e.jsx(D,{title:"Descriptions with border and background color.",children:e.jsx(i,{title:"User Info",bordered:!0,items:t})})}},f={render:()=>{const t=[{key:"1",label:"Product",children:"Cloud Database"},{key:"2",label:"Billing",children:"Prepaid"},{key:"3",label:"Time",children:"18:00:00"},{key:"4",label:"Amount",children:"$80.00"},{key:"5",label:"Discount",children:"$20.00"},{key:"6",label:"Official",children:"$60.00"},{key:"7",label:"Config Info",children:e.jsxs(e.Fragment,{children:["Data disk type: MongoDB",e.jsx("br",{}),"Database version: 3.4",e.jsx("br",{}),"Package: dds.mongo.mid",e.jsx("br",{}),"Storage space: 10 GB",e.jsx("br",{}),"Replication factor: 3",e.jsx("br",{}),"Region: East China 1",e.jsx("br",{})]})}],s=[{key:"1",label:"Product",children:"Cloud Database"},{key:"2",label:"Billing",children:"Prepaid"},{key:"3",label:"Time",children:"18:00:00"},{key:"4",label:"Amount",children:"$80.00"},{key:"5",label:"Discount",children:"$20.00"},{key:"6",label:"Official",children:"$60.00"}],[o,me]=ke.useState("default"),pe=S=>{console.log("size checked",S.target.value),me(S.target.value)};return e.jsx(D,{title:"Custom sizes to fit in a variety of containers.",children:e.jsxs("div",{children:[e.jsxs(n.Group,{onChange:pe,value:o,children:[e.jsx(n,{value:"default",children:"default"}),e.jsx(n,{value:"middle",children:"middle"}),e.jsx(n,{value:"small",children:"small"})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(i,{bordered:!0,title:"Custom Size",size:o,extra:e.jsx(l,{type:"primary",children:"Edit"}),items:t}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(i,{title:"Custom Size",size:o,extra:e.jsx(l,{type:"primary",children:"Edit"}),items:s})]})})}},C={render:()=>{const t=[{label:"Product",children:"Cloud Database"},{label:"Billing",children:"Prepaid"},{label:"Time",children:"18:00:00"},{label:"Amount",children:"$80.00"},{label:"Discount",span:{xl:2,xxl:2},children:"$20.00"},{label:"Official",span:{xl:2,xxl:2},children:"$60.00"},{label:"Config Info",span:{xs:1,sm:2,md:3,lg:3,xl:2,xxl:2},children:e.jsxs(e.Fragment,{children:["Data disk type: MongoDB",e.jsx("br",{}),"Database version: 3.4",e.jsx("br",{}),"Package: dds.mongo.mid"]})},{label:"Hardware Info",span:{xs:1,sm:2,md:3,lg:3,xl:2,xxl:2},children:e.jsxs(e.Fragment,{children:["CPU: 6 Core 3.5 GHz",e.jsx("br",{}),"Storage space: 10 GB",e.jsx("br",{}),"Replication factor: 3",e.jsx("br",{}),"Region: East China 1"]})}];return e.jsx(D,{title:"Responsive configuration enables perfect presentation on small screen devices.",children:e.jsx(i,{title:"Responsive Descriptions",bordered:!0,column:{xs:1,sm:2,md:3,lg:3,xl:4,xxl:4},items:t})})}};var v,B,E;c.parameters=a(r({},c.parameters),{docs:a(r({},(v=c.parameters)==null?void 0:v.docs),{source:r({originalSource:"{}"},(E=(B=c.parameters)==null?void 0:B.docs)==null?void 0:E.source)})});var P,z,$;d.parameters=a(r({},d.parameters),{docs:a(r({},(P=d.parameters)==null?void 0:P.docs),{source:r({originalSource:`{
  args: {
    bordered: true
  }
}`},($=(z=d.parameters)==null?void 0:z.docs)==null?void 0:$.source)})});var I,T,A;m.parameters=a(r({},m.parameters),{docs:a(r({},(I=m.parameters)==null?void 0:I.docs),{source:r({originalSource:`{
  args: {
    layout: 'vertical'
  }
}`},(A=(T=m.parameters)==null?void 0:T.docs)==null?void 0:A.source)})});var G,O,W;p.parameters=a(r({},p.parameters),{docs:a(r({},(G=p.parameters)==null?void 0:G.docs),{source:r({originalSource:`{
  args: {
    size: 'small'
  }
}`},(W=(O=p.parameters)==null?void 0:O.docs)==null?void 0:W.source)})});var M,w,U;u.parameters=a(r({},u.parameters),{docs:a(r({},(M=u.parameters)==null?void 0:M.docs),{source:r({originalSource:`{
  args: {
    title: <Button>Custom React Component</Button>
  }
}`},(U=(w=u.parameters)==null?void 0:w.docs)==null?void 0:U.source)})});var V,F,H;b.parameters=a(r({},b.parameters),{docs:a(r({},(V=b.parameters)==null?void 0:V.docs),{source:r({originalSource:`{
  args: {
    extra: <Button type="primary">Extra React Components</Button>
  }
}`},(H=(F=b.parameters)==null?void 0:F.docs)==null?void 0:H.source)})});var L,N,Y;x.parameters=a(r({},x.parameters),{docs:a(r({},(L=x.parameters)==null?void 0:L.docs),{source:r({originalSource:`{
  args: {
    title: <Button>Custom React Component</Button>,
    extra: <Button type="primary">Extra React Components</Button>
  }
}`},(Y=(N=x.parameters)==null?void 0:N.docs)==null?void 0:Y.source)})});var _,q,J;g.parameters=a(r({},g.parameters),{docs:a(r({},(_=g.parameters)==null?void 0:_.docs),{source:r({originalSource:`{
  args: {
    contentStyle: {
      color: 'red'
    }
  }
}`},(J=(q=g.parameters)==null?void 0:q.docs)==null?void 0:J.source)})});var K,Q,X;h.parameters=a(r({},h.parameters),{docs:a(r({},(K=h.parameters)==null?void 0:K.docs),{source:r({originalSource:`{
  args: {
    labelStyle: {
      fontWeight: 'bold'
    }
  }
}`},(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source)})});var Z,ee,re;y.parameters=a(r({},y.parameters),{docs:a(r({},(Z=y.parameters)==null?void 0:Z.docs),{source:r({originalSource:`{
  args: {
    column: {
      xs: 8,
      sm: 16,
      md: 24
    }
  }
}`},(re=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:re.source)})});var ae,te,se;k.parameters=a(r({},k.parameters),{docs:a(r({},(ae=k.parameters)==null?void 0:ae.docs),{source:r({originalSource:`{
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
}`},(se=(te=k.parameters)==null?void 0:te.docs)==null?void 0:se.source)})});var oe,le,ie;f.parameters=a(r({},f.parameters),{docs:a(r({},(oe=f.parameters)==null?void 0:oe.docs),{source:r({originalSource:`{
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
}`},(ie=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ie.source)})});var ne,ce,de;C.parameters=a(r({},C.parameters),{docs:a(r({},(ne=C.parameters)==null?void 0:ne.docs),{source:r({originalSource:`{
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
}`},(de=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:de.source)})});const Me=["Primary","Bordered","Vertical","Small","CustomTitle","WithExtra","WithTitleAndExtra","WithContentStyle","WithLabelStyle","ResponsiveColumn","ExampleTableLook","ExampleSize","ExampleResponsiveDescriptions"];export{d as Bordered,u as CustomTitle,C as ExampleResponsiveDescriptions,f as ExampleSize,k as ExampleTableLook,c as Primary,y as ResponsiveColumn,p as Small,m as Vertical,g as WithContentStyle,b as WithExtra,h as WithLabelStyle,x as WithTitleAndExtra,Me as __namedExportsOrder,We as default};
