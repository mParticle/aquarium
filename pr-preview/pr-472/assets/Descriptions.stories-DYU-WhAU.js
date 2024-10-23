var ue=Object.defineProperty,be=Object.defineProperties;var xe=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var R=(a,t,s)=>t in a?ue(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,n=(a,t)=>{for(var s in t||(t={}))ge.call(t,s)&&R(a,s,t[s]);if(j)for(var s of j(t))he.call(t,s)&&R(a,s,t[s]);return a},r=(a,t)=>be(a,xe(t));import{j as e}from"./jsx-runtime-BcCOBRXo.js";import{p as f,k as l,R as D,B as ye}from"./GlobalNavigation-DgsMOKTE.js";import"./_baseClone-u1J3oOXU.js";import{E as S}from"./ExampleStory-9o0ONgm-.js";import{r as ke}from"./index-CNk6hRaE.js";const fe={title:"Components/Data Display/Descriptions",component:f,args:{bordered:!1,colon:!0,column:3,contentStyle:void 0,extra:void 0,items:[{label:"Item 1",children:"Value 1"},{label:"Item 2",children:"Value 2"},{label:"Item 3",children:"Value 3"}],labelStyle:void 0,layout:"horizontal",size:"default",title:void 0},argTypes:{size:{control:"select",options:["default","middle","small"]},layout:{control:"select",options:["horizontal","vertical"]}}},o={},i={args:{bordered:!0}},c={args:{layout:"vertical"}},d={args:{size:"small"}},m={args:{title:e.jsx(l,{children:"Custom React Component"})}},p={args:{extra:e.jsx(l,{type:"primary",children:"Extra React Components"})}},u={args:{title:e.jsx(l,{children:"Custom React Component"}),extra:e.jsx(l,{type:"primary",children:"Extra React Components"})}},b={args:{contentStyle:{color:"red"}}},x={args:{labelStyle:{fontWeight:"bold"}}},g={args:{column:{xs:8,sm:16,md:24}}},h={render:()=>{const a=[{key:"1",label:"Product",children:"Cloud Database"},{key:"2",label:"Billing Mode",children:"Prepaid"},{key:"3",label:"Automatic Renewal",children:"YES"},{key:"4",label:"Order time",children:"2018-04-24 18:00:00"},{key:"5",label:"Usage Time",children:"2019-04-24 18:00:00",span:2},{key:"6",label:"Status",children:e.jsx(ye,{status:"processing",text:"Running"}),span:3},{key:"7",label:"Negotiated Amount",children:"$80.00"},{key:"8",label:"Discount",children:"$20.00"},{key:"9",label:"Official Receipts",children:"$60.00"},{key:"10",label:"Config Info",children:e.jsxs(e.Fragment,{children:["Data disk type: MongoDB",e.jsx("br",{}),"Database version: 3.4",e.jsx("br",{}),"Package: dds.mongo.mid",e.jsx("br",{}),"Storage space: 10 GB",e.jsx("br",{}),"Replication factor: 3",e.jsx("br",{}),"Region: East China 1",e.jsx("br",{})]})}];return e.jsx(S,{title:"Descriptions with border and background color.",children:e.jsx(f,{title:"User Info",bordered:!0,items:a})})}},y={render:()=>{const a=[{key:"1",label:"Product",children:"Cloud Database"},{key:"2",label:"Billing",children:"Prepaid"},{key:"3",label:"Time",children:"18:00:00"},{key:"4",label:"Amount",children:"$80.00"},{key:"5",label:"Discount",children:"$20.00"},{key:"6",label:"Official",children:"$60.00"},{key:"7",label:"Config Info",children:e.jsxs(e.Fragment,{children:["Data disk type: MongoDB",e.jsx("br",{}),"Database version: 3.4",e.jsx("br",{}),"Package: dds.mongo.mid",e.jsx("br",{}),"Storage space: 10 GB",e.jsx("br",{}),"Replication factor: 3",e.jsx("br",{}),"Region: East China 1",e.jsx("br",{})]})}],t=[{key:"1",label:"Product",children:"Cloud Database"},{key:"2",label:"Billing",children:"Prepaid"},{key:"3",label:"Time",children:"18:00:00"},{key:"4",label:"Amount",children:"$80.00"},{key:"5",label:"Discount",children:"$20.00"},{key:"6",label:"Official",children:"$60.00"}],[s,me]=ke.useState("default"),pe=C=>{console.log("size checked",C.target.value),me(C.target.value)};return e.jsx(S,{title:"Custom sizes to fit in a variety of containers.",children:e.jsxs("div",{children:[e.jsxs(D.Group,{onChange:pe,value:s,children:[e.jsx(D,{value:"default",children:"default"}),e.jsx(D,{value:"middle",children:"middle"}),e.jsx(D,{value:"small",children:"small"})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(f,{bordered:!0,title:"Custom Size",size:s,extra:e.jsx(l,{type:"primary",children:"Edit"}),items:a}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(f,{title:"Custom Size",size:s,extra:e.jsx(l,{type:"primary",children:"Edit"}),items:t})]})})}},k={render:()=>{const a=[{label:"Product",children:"Cloud Database"},{label:"Billing",children:"Prepaid"},{label:"Time",children:"18:00:00"},{label:"Amount",children:"$80.00"},{label:"Discount",span:{xl:2,xxl:2},children:"$20.00"},{label:"Official",span:{xl:2,xxl:2},children:"$60.00"},{label:"Config Info",span:{xs:1,sm:2,md:3,lg:3,xl:2,xxl:2},children:e.jsxs(e.Fragment,{children:["Data disk type: MongoDB",e.jsx("br",{}),"Database version: 3.4",e.jsx("br",{}),"Package: dds.mongo.mid"]})},{label:"Hardware Info",span:{xs:1,sm:2,md:3,lg:3,xl:2,xxl:2},children:e.jsxs(e.Fragment,{children:["CPU: 6 Core 3.5 GHz",e.jsx("br",{}),"Storage space: 10 GB",e.jsx("br",{}),"Replication factor: 3",e.jsx("br",{}),"Region: East China 1"]})}];return e.jsx(S,{title:"Responsive configuration enables perfect presentation on small screen devices.",children:e.jsx(f,{title:"Responsive Descriptions",bordered:!0,column:{xs:1,sm:2,md:3,lg:3,xl:4,xxl:4},items:a})})}};var v,B,E;o.parameters=r(n({},o.parameters),{docs:r(n({},(v=o.parameters)==null?void 0:v.docs),{source:n({originalSource:"{}"},(E=(B=o.parameters)==null?void 0:B.docs)==null?void 0:E.source)})});var P,z,$;i.parameters=r(n({},i.parameters),{docs:r(n({},(P=i.parameters)==null?void 0:P.docs),{source:n({originalSource:`{
  args: {
    bordered: true
  }
}`},($=(z=i.parameters)==null?void 0:z.docs)==null?void 0:$.source)})});var I,T,O;c.parameters=r(n({},c.parameters),{docs:r(n({},(I=c.parameters)==null?void 0:I.docs),{source:n({originalSource:`{
  args: {
    layout: 'vertical'
  }
}`},(O=(T=c.parameters)==null?void 0:T.docs)==null?void 0:O.source)})});var A,G,W;d.parameters=r(n({},d.parameters),{docs:r(n({},(A=d.parameters)==null?void 0:A.docs),{source:n({originalSource:`{
  args: {
    size: 'small'
  }
}`},(W=(G=d.parameters)==null?void 0:G.docs)==null?void 0:W.source)})});var M,w,U;m.parameters=r(n({},m.parameters),{docs:r(n({},(M=m.parameters)==null?void 0:M.docs),{source:n({originalSource:`{
  args: {
    title: <Button>Custom React Component</Button>
  }
}`},(U=(w=m.parameters)==null?void 0:w.docs)==null?void 0:U.source)})});var _,V,F;p.parameters=r(n({},p.parameters),{docs:r(n({},(_=p.parameters)==null?void 0:_.docs),{source:n({originalSource:`{
  args: {
    extra: <Button type="primary">Extra React Components</Button>
  }
}`},(F=(V=p.parameters)==null?void 0:V.docs)==null?void 0:F.source)})});var H,L,N;u.parameters=r(n({},u.parameters),{docs:r(n({},(H=u.parameters)==null?void 0:H.docs),{source:n({originalSource:`{
  args: {
    title: <Button>Custom React Component</Button>,
    extra: <Button type="primary">Extra React Components</Button>
  }
}`},(N=(L=u.parameters)==null?void 0:L.docs)==null?void 0:N.source)})});var Y,q,J;b.parameters=r(n({},b.parameters),{docs:r(n({},(Y=b.parameters)==null?void 0:Y.docs),{source:n({originalSource:`{
  args: {
    contentStyle: {
      color: 'red'
    }
  }
}`},(J=(q=b.parameters)==null?void 0:q.docs)==null?void 0:J.source)})});var K,Q,X;x.parameters=r(n({},x.parameters),{docs:r(n({},(K=x.parameters)==null?void 0:K.docs),{source:n({originalSource:`{
  args: {
    labelStyle: {
      fontWeight: 'bold'
    }
  }
}`},(X=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:X.source)})});var Z,ee,ne;g.parameters=r(n({},g.parameters),{docs:r(n({},(Z=g.parameters)==null?void 0:Z.docs),{source:n({originalSource:`{
  args: {
    column: {
      xs: 8,
      sm: 16,
      md: 24
    }
  }
}`},(ne=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ne.source)})});var re,ae,te;h.parameters=r(n({},h.parameters),{docs:r(n({},(re=h.parameters)==null?void 0:re.docs),{source:n({originalSource:`{
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
}`},(te=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:te.source)})});var se,le,oe;y.parameters=r(n({},y.parameters),{docs:r(n({},(se=y.parameters)==null?void 0:se.docs),{source:n({originalSource:`{
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
}`},(oe=(le=y.parameters)==null?void 0:le.docs)==null?void 0:oe.source)})});var ie,ce,de;k.parameters=r(n({},k.parameters),{docs:r(n({},(ie=k.parameters)==null?void 0:ie.docs),{source:n({originalSource:`{
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
}`},(de=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:de.source)})});const De=["Primary","Bordered","Vertical","Small","CustomTitle","WithExtra","WithTitleAndExtra","WithContentStyle","WithLabelStyle","ResponsiveColumn","ExampleTableLook","ExampleSize","ExampleResponsiveDescriptions"],Ee=Object.freeze(Object.defineProperty({__proto__:null,Bordered:i,CustomTitle:m,ExampleResponsiveDescriptions:k,ExampleSize:y,ExampleTableLook:h,Primary:o,ResponsiveColumn:g,Small:d,Vertical:c,WithContentStyle:b,WithExtra:p,WithLabelStyle:x,WithTitleAndExtra:u,__namedExportsOrder:De,default:fe},Symbol.toStringTag,{value:"Module"}));export{Ee as D,fe as m};
