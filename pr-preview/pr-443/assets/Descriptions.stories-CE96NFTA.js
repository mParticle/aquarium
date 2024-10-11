var ue=Object.defineProperty,be=Object.defineProperties;var xe=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var R=(a,t,s)=>t in a?ue(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,n=(a,t)=>{for(var s in t||(t={}))ge.call(t,s)&&R(a,s,t[s]);if(j)for(var s of j(t))he.call(t,s)&&R(a,s,t[s]);return a},r=(a,t)=>be(a,xe(t));import{j as e}from"./jsx-runtime-BcCOBRXo.js";import{m as l,B as o,R as i,g as ye}from"./GlobalNavigation-CPwO3wRi.js";import"./ConfigProvider-CEh3sHE6.js";import"./_baseClone-BjCwUuX-.js";import{E as D}from"./ExampleStory-BZvqhEW3.js";import{r as ke}from"./index-CNk6hRaE.js";import"./index-CqBomLS8.js";import"./useToken-C-GAQQ-5.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CYew8PZR.js";import"./row-B98CqS5b.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";import"./LightTheme-DxveuNKr.js";import"./_getPrototype-CAOE_2rY.js";const Me={title:"Components/Data Display/Descriptions",component:l,args:{bordered:!1,colon:!0,column:3,contentStyle:void 0,extra:void 0,items:[{label:"Item 1",children:"Value 1"},{label:"Item 2",children:"Value 2"},{label:"Item 3",children:"Value 3"}],labelStyle:void 0,layout:"horizontal",size:"default",title:void 0},argTypes:{size:{control:"select",options:["default","middle","small"]},layout:{control:"select",options:["horizontal","vertical"]}}},c={},d={args:{bordered:!0}},m={args:{layout:"vertical"}},p={args:{size:"small"}},u={args:{title:e.jsx(o,{children:"Custom React Component"})}},b={args:{extra:e.jsx(o,{type:"primary",children:"Extra React Components"})}},x={args:{title:e.jsx(o,{children:"Custom React Component"}),extra:e.jsx(o,{type:"primary",children:"Extra React Components"})}},g={args:{contentStyle:{color:"red"}}},h={args:{labelStyle:{fontWeight:"bold"}}},y={args:{column:{xs:8,sm:16,md:24}}},k={render:()=>{const a=[{key:"1",label:"Product",children:"Cloud Database"},{key:"2",label:"Billing Mode",children:"Prepaid"},{key:"3",label:"Automatic Renewal",children:"YES"},{key:"4",label:"Order time",children:"2018-04-24 18:00:00"},{key:"5",label:"Usage Time",children:"2019-04-24 18:00:00",span:2},{key:"6",label:"Status",children:e.jsx(ye,{status:"processing",text:"Running"}),span:3},{key:"7",label:"Negotiated Amount",children:"$80.00"},{key:"8",label:"Discount",children:"$20.00"},{key:"9",label:"Official Receipts",children:"$60.00"},{key:"10",label:"Config Info",children:e.jsxs(e.Fragment,{children:["Data disk type: MongoDB",e.jsx("br",{}),"Database version: 3.4",e.jsx("br",{}),"Package: dds.mongo.mid",e.jsx("br",{}),"Storage space: 10 GB",e.jsx("br",{}),"Replication factor: 3",e.jsx("br",{}),"Region: East China 1",e.jsx("br",{})]})}];return e.jsx(D,{title:"Descriptions with border and background color.",children:e.jsx(l,{title:"User Info",bordered:!0,items:a})})}},f={render:()=>{const a=[{key:"1",label:"Product",children:"Cloud Database"},{key:"2",label:"Billing",children:"Prepaid"},{key:"3",label:"Time",children:"18:00:00"},{key:"4",label:"Amount",children:"$80.00"},{key:"5",label:"Discount",children:"$20.00"},{key:"6",label:"Official",children:"$60.00"},{key:"7",label:"Config Info",children:e.jsxs(e.Fragment,{children:["Data disk type: MongoDB",e.jsx("br",{}),"Database version: 3.4",e.jsx("br",{}),"Package: dds.mongo.mid",e.jsx("br",{}),"Storage space: 10 GB",e.jsx("br",{}),"Replication factor: 3",e.jsx("br",{}),"Region: East China 1",e.jsx("br",{})]})}],t=[{key:"1",label:"Product",children:"Cloud Database"},{key:"2",label:"Billing",children:"Prepaid"},{key:"3",label:"Time",children:"18:00:00"},{key:"4",label:"Amount",children:"$80.00"},{key:"5",label:"Discount",children:"$20.00"},{key:"6",label:"Official",children:"$60.00"}],[s,me]=ke.useState("default"),pe=S=>{console.log("size checked",S.target.value),me(S.target.value)};return e.jsx(D,{title:"Custom sizes to fit in a variety of containers.",children:e.jsxs("div",{children:[e.jsxs(i.Group,{onChange:pe,value:s,children:[e.jsx(i,{value:"default",children:"default"}),e.jsx(i,{value:"middle",children:"middle"}),e.jsx(i,{value:"small",children:"small"})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(l,{bordered:!0,title:"Custom Size",size:s,extra:e.jsx(o,{type:"primary",children:"Edit"}),items:a}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(l,{title:"Custom Size",size:s,extra:e.jsx(o,{type:"primary",children:"Edit"}),items:t})]})})}},C={render:()=>{const a=[{label:"Product",children:"Cloud Database"},{label:"Billing",children:"Prepaid"},{label:"Time",children:"18:00:00"},{label:"Amount",children:"$80.00"},{label:"Discount",span:{xl:2,xxl:2},children:"$20.00"},{label:"Official",span:{xl:2,xxl:2},children:"$60.00"},{label:"Config Info",span:{xs:1,sm:2,md:3,lg:3,xl:2,xxl:2},children:e.jsxs(e.Fragment,{children:["Data disk type: MongoDB",e.jsx("br",{}),"Database version: 3.4",e.jsx("br",{}),"Package: dds.mongo.mid"]})},{label:"Hardware Info",span:{xs:1,sm:2,md:3,lg:3,xl:2,xxl:2},children:e.jsxs(e.Fragment,{children:["CPU: 6 Core 3.5 GHz",e.jsx("br",{}),"Storage space: 10 GB",e.jsx("br",{}),"Replication factor: 3",e.jsx("br",{}),"Region: East China 1"]})}];return e.jsx(D,{title:"Responsive configuration enables perfect presentation on small screen devices.",children:e.jsx(l,{title:"Responsive Descriptions",bordered:!0,column:{xs:1,sm:2,md:3,lg:3,xl:4,xxl:4},items:a})})}};var v,B,E;c.parameters=r(n({},c.parameters),{docs:r(n({},(v=c.parameters)==null?void 0:v.docs),{source:n({originalSource:"{}"},(E=(B=c.parameters)==null?void 0:B.docs)==null?void 0:E.source)})});var P,z,$;d.parameters=r(n({},d.parameters),{docs:r(n({},(P=d.parameters)==null?void 0:P.docs),{source:n({originalSource:`{
  args: {
    bordered: true
  }
}`},($=(z=d.parameters)==null?void 0:z.docs)==null?void 0:$.source)})});var I,T,A;m.parameters=r(n({},m.parameters),{docs:r(n({},(I=m.parameters)==null?void 0:I.docs),{source:n({originalSource:`{
  args: {
    layout: 'vertical'
  }
}`},(A=(T=m.parameters)==null?void 0:T.docs)==null?void 0:A.source)})});var G,O,W;p.parameters=r(n({},p.parameters),{docs:r(n({},(G=p.parameters)==null?void 0:G.docs),{source:n({originalSource:`{
  args: {
    size: 'small'
  }
}`},(W=(O=p.parameters)==null?void 0:O.docs)==null?void 0:W.source)})});var M,w,U;u.parameters=r(n({},u.parameters),{docs:r(n({},(M=u.parameters)==null?void 0:M.docs),{source:n({originalSource:`{
  args: {
    title: <Button>Custom React Component</Button>
  }
}`},(U=(w=u.parameters)==null?void 0:w.docs)==null?void 0:U.source)})});var V,F,H;b.parameters=r(n({},b.parameters),{docs:r(n({},(V=b.parameters)==null?void 0:V.docs),{source:n({originalSource:`{
  args: {
    extra: <Button type="primary">Extra React Components</Button>
  }
}`},(H=(F=b.parameters)==null?void 0:F.docs)==null?void 0:H.source)})});var L,N,Y;x.parameters=r(n({},x.parameters),{docs:r(n({},(L=x.parameters)==null?void 0:L.docs),{source:n({originalSource:`{
  args: {
    title: <Button>Custom React Component</Button>,
    extra: <Button type="primary">Extra React Components</Button>
  }
}`},(Y=(N=x.parameters)==null?void 0:N.docs)==null?void 0:Y.source)})});var _,q,J;g.parameters=r(n({},g.parameters),{docs:r(n({},(_=g.parameters)==null?void 0:_.docs),{source:n({originalSource:`{
  args: {
    contentStyle: {
      color: 'red'
    }
  }
}`},(J=(q=g.parameters)==null?void 0:q.docs)==null?void 0:J.source)})});var K,Q,X;h.parameters=r(n({},h.parameters),{docs:r(n({},(K=h.parameters)==null?void 0:K.docs),{source:n({originalSource:`{
  args: {
    labelStyle: {
      fontWeight: 'bold'
    }
  }
}`},(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source)})});var Z,ee,ne;y.parameters=r(n({},y.parameters),{docs:r(n({},(Z=y.parameters)==null?void 0:Z.docs),{source:n({originalSource:`{
  args: {
    column: {
      xs: 8,
      sm: 16,
      md: 24
    }
  }
}`},(ne=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:ne.source)})});var re,ae,te;k.parameters=r(n({},k.parameters),{docs:r(n({},(re=k.parameters)==null?void 0:re.docs),{source:n({originalSource:`{
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
}`},(te=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:te.source)})});var se,oe,le;f.parameters=r(n({},f.parameters),{docs:r(n({},(se=f.parameters)==null?void 0:se.docs),{source:n({originalSource:`{
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
      setSize((e.target.value as IDescriptionsProps['size']));
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
}`},(le=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:le.source)})});var ie,ce,de;C.parameters=r(n({},C.parameters),{docs:r(n({},(ie=C.parameters)==null?void 0:ie.docs),{source:n({originalSource:`{
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
}`},(de=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:de.source)})});const we=["Primary","Bordered","Vertical","Small","CustomTitle","WithExtra","WithTitleAndExtra","WithContentStyle","WithLabelStyle","ResponsiveColumn","ExampleTableLook","ExampleSize","ExampleResponsiveDescriptions"];export{d as Bordered,u as CustomTitle,C as ExampleResponsiveDescriptions,f as ExampleSize,k as ExampleTableLook,c as Primary,y as ResponsiveColumn,p as Small,m as Vertical,g as WithContentStyle,b as WithExtra,h as WithLabelStyle,x as WithTitleAndExtra,we as __namedExportsOrder,Me as default};
