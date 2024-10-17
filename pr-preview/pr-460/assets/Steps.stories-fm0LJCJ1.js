var ee=Object.defineProperty,ne=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var ie=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var V=(n,i,r)=>i in n?ee(n,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[i]=r,t=(n,i)=>{for(var r in i||(i={}))ie.call(i,r)&&V(n,r,i[r]);if(N)for(var r of N(i))re.call(i,r)&&V(n,r,i[r]);return n},s=(n,i)=>ne(n,se(i));import{j as e}from"./jsx-runtime-BcCOBRXo.js";import{r as L}from"./index-CNk6hRaE.js";import{ap as o,I as p,B as W,aq as oe,D as Qt,L as A,A as ae,P as ce}from"./GlobalNavigation-C6Bb3_ZV.js";import"./ConfigProvider-BRwLXval.js";import"./_baseClone-BjCwUuX-.js";import{E as c}from"./ExampleStory-cAdS_tcZ.js";import{t as le}from"./index-C9GZCUSR.js";import"./index-z2stgOKB.js";import"./useToken-5RYkiW09.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CYew8PZR.js";import"./row-DegztUsn.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";import"./LightTheme-BtoaoHMG.js";import"./_getPrototype-CAOE_2rY.js";const pe=[{title:"Finished",description:"description 1"},{title:"In Progress",description:"description 2",subTitle:"subTitle 2"},{title:"Waiting",description:"description 3"}],we={title:"Components/Navigation/Steps",component:o,args:{items:pe,current:0,initial:0,direction:"horizontal",labelPlacement:"horizontal",percent:void 0,progressDot:!1,responsive:!0,size:"default",status:"process",type:"default",onChange:n=>{alert("Step changed : "+n)}},argTypes:{direction:{control:"select",options:["horizontal","vertical"]},labelPlacement:{control:"select",options:["horizontal","vertical"]},type:{control:"select",options:["default","navigation","inline"]},status:{control:"select",options:["wait","process","finish","error"]},size:{control:"select",options:["default","small"]}}},d={},m={args:{direction:"vertical"}},u={args:{size:"small"}},g={args:{progressDot:!0}},h={args:{progressDot:(n,{index:i,status:r,title:a,description:l})=>e.jsx("span",{children:"Custom Dot: "+i})}},S={args:{items:[{status:"wait"},{status:"process"},{status:"finish"},{status:"error"}]}},x={args:{type:"navigation"}},y={args:{type:"inline"}},v={render:()=>{const n="This is a description.";return e.jsx(c,{title:"The most basic step bar.",children:e.jsx(o,{current:1,items:[{title:"Finished",description:n},{title:"In Progress",description:n,subTitle:"Left 00:00:08"},{title:"Waiting",description:n}]})})}},T={render:()=>e.jsx(c,{title:'By setting like this: <Steps size="small">, you can get a mini version.',children:e.jsx(o,{size:"small",current:1,items:[{title:"Finished"},{title:"In Progress"},{title:"Waiting"}]})})},b={render:()=>e.jsx(c,{title:"You can use your own custom icons by setting the property icon for items.",children:e.jsx(o,{items:[{title:"Login",status:"finish",icon:e.jsx(p,{name:"users"})},{title:"Verification",status:"finish",icon:e.jsx(p,{name:"settings"})},{title:"Pay",status:"process",icon:e.jsx(p,{name:"alicorn"})},{title:"Done",status:"wait",icon:e.jsx(p,{name:"selected",size:"sm"})}]})})},E={render:()=>{const n=[{title:"First",content:"First-content"},{title:"Second",content:"Second-content"},{title:"Last",content:"Last-content"}],{token:i}=le.useToken(),[r,a]=L.useState(0),l=()=>{a(r+1)},Xt=()=>{a(r-1)},Zt=n.map(B=>({key:B.title,title:B.title})),te={lineHeight:"260px",textAlign:"center",color:i.colorTextTertiary,backgroundColor:i.colorFillAlter,borderRadius:i.borderRadiusLG,border:`1px dashed ${i.colorBorder}`,marginTop:16};return e.jsxs(c,{title:"Cooperate with the content and buttons, to represent the progress of a process.",children:[e.jsx(o,{current:r,items:Zt}),e.jsx("div",{style:te,children:n[r].content}),e.jsxs("div",{style:{marginTop:24},children:[r<n.length-1&&e.jsx(W,{type:"primary",onClick:()=>{l()},children:"Next"}),r===n.length-1&&e.jsx(W,{type:"primary",onClick:()=>{oe.success("Processing complete!")},children:"Done"}),r>0&&e.jsx(W,{style:{margin:"0 8px"},onClick:()=>{Xt()},children:"Previous"})]})]})}},f={render:()=>{const n="This is a description.";return e.jsx(c,{title:"A simple step bar in the vertical direction.",children:e.jsx(o,{direction:"vertical",current:1,items:[{title:"Finished",description:n},{title:"In Progress",description:n},{title:"Waiting",description:n}]})})}},j={render:()=>{const n="This is a description.";return e.jsx(c,{title:"A simple mini version step bar in the vertical direction.",children:e.jsx(o,{direction:"vertical",size:"small",current:1,items:[{title:"Finished",description:n},{title:"In Progress",description:n},{title:"Waiting",description:n}]})})}},P={render:()=>{const n="This is a description";return e.jsx(c,{title:"By using status of Steps, you can specify the state for current step.",children:e.jsx(o,{current:1,status:"error",items:[{title:"Finished",description:n},{title:"In Process",description:n},{title:"Waiting",description:n}]})})}},C={render:()=>e.jsx(c,{title:"Steps with progress dot style.",children:e.jsxs(e.Fragment,{children:[e.jsx(o,{progressDot:!0,current:1,items:[{title:"Finished",description:"This is a description."},{title:"In Progress",description:"This is a description."},{title:"Waiting",description:"This is a description."}]}),e.jsx(Qt,{}),e.jsx(o,{progressDot:!0,current:1,direction:"vertical",items:[{title:"Finished",description:"This is a description. This is a description."},{title:"Finished",description:"This is a description. This is a description."},{title:"In Progress",description:"This is a description. This is a description."},{title:"Waiting",description:"This is a description."},{title:"Waiting",description:"This is a description."}]})]})})},D={render:()=>{const n=(r,{status:a,index:l})=>e.jsx(ce,{content:e.jsxs("span",{children:["step ",l," status: ",a]}),children:r}),i="You can hover on the dot.";return e.jsx(c,{title:"You can customize the display for Steps with progress dot style.",children:e.jsx(o,{current:1,progressDot:n,items:[{title:"Finished",description:i},{title:"In Progress",description:i},{title:"Waiting",description:i},{title:"Waiting",description:i}]})})}},I={render:()=>{const[n,i]=L.useState(0),r=l=>{console.log("onChange:",l),i(l)},a="This is a description.";return e.jsx(c,{title:"Setting onChange makes Steps clickable.",children:e.jsxs(e.Fragment,{children:[e.jsx(o,{current:n,onChange:r,items:[{title:"Step 1",description:a},{title:"Step 2",description:a},{title:"Step 3",description:a}]}),e.jsx(Qt,{}),e.jsx(o,{current:n,onChange:r,direction:"vertical",items:[{title:"Step 1",description:a},{title:"Step 2",description:a},{title:"Step 3",description:a}]})]})})}},F={render:()=>{const[n,i]=L.useState(0),r=a=>{console.log("onChange:",a),i(a)};return e.jsx(c,{title:"Navigation steps.",children:e.jsxs(e.Fragment,{children:[e.jsx(o,{type:"navigation",size:"small",current:n,onChange:r,className:"site-navigation-steps",items:[{title:"Step 1",subTitle:"00:00:05",status:"finish",description:"This is a description."},{title:"Step 2",subTitle:"00:01:02",status:"process",description:"This is a description."},{title:"Step 3",subTitle:"waiting for longlong time",status:"wait",description:"This is a description."}]}),e.jsx(o,{type:"navigation",current:n,onChange:r,className:"site-navigation-steps",items:[{status:"finish",title:"Step 1"},{status:"process",title:"Step 2"},{status:"wait",title:"Step 3"},{status:"wait",title:"Step 4"}]}),e.jsx(o,{type:"navigation",size:"small",current:n,onChange:r,className:"site-navigation-steps",items:[{status:"finish",title:"finish 1"},{status:"finish",title:"finish 2"},{status:"process",title:"current process"},{status:"wait",title:"wait",disabled:!0}]})]})})}},w={render:()=>{const n="This is a description.";return e.jsx(c,{title:"Steps with progress.",children:e.jsx(o,{current:1,percent:60,items:[{title:"Finished",description:n},{title:"In Progress",subTitle:"Left 00:00:08",description:n},{title:"Waiting",description:n}]})})}},k={render:()=>{const n="This is a description.",i=[{title:"Finished",description:n},{title:"In Progress",description:n},{title:"Waiting",description:n}];return e.jsxs(c,{title:"Set labelPlacement to vertical.",children:[e.jsx(o,{current:1,labelPlacement:"vertical",items:i}),e.jsx("br",{}),e.jsx(o,{current:1,percent:60,labelPlacement:"vertical",items:i}),e.jsx("br",{}),e.jsx(o,{current:1,size:"small",labelPlacement:"vertical",items:i})]})}},z={render:()=>{const n=[{title:"Ant Design Title 1",current:0},{title:"Ant Design Title 2",current:1,status:"error"},{title:"Ant Design Title 3",current:2},{title:"Ant Design Title 4",current:1}],i=[{title:"Step 1",description:"This is a Step 1."},{title:"Step 2",description:"This is a Step 2."},{title:"Step 3",description:"This is a Step 3."}];return e.jsx(c,{title:"Inline type steps, suitable for displaying the process and current state of the object in the list content scene.",children:e.jsx("div",{children:e.jsx(A,{itemLayout:"horizontal",dataSource:n,renderItem:(r,a)=>e.jsxs(A.Item,{children:[e.jsx(A.Item.Meta,{avatar:e.jsx(ae,{src:`https://api.dicebear.com/7.x/miniavs/svg?seed=${a}`}),title:e.jsx("a",{href:"https://ant.design",children:r.title}),description:"Ant Design, a design language for background applications, is refined by Ant UED Team"}),e.jsx(o,{style:{marginTop:8},type:"inline",current:r.current,status:r.status,items:i})]})})})})}};var R,Y,$;d.parameters=s(t({},d.parameters),{docs:s(t({},(R=d.parameters)==null?void 0:R.docs),{source:t({originalSource:"{}"},($=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:$.source)})});var M,G,H;m.parameters=s(t({},m.parameters),{docs:s(t({},(M=m.parameters)==null?void 0:M.docs),{source:t({originalSource:`{
  args: {
    direction: 'vertical'
  }
}`},(H=(G=m.parameters)==null?void 0:G.docs)==null?void 0:H.source)})});var U,_,q;u.parameters=s(t({},u.parameters),{docs:s(t({},(U=u.parameters)==null?void 0:U.docs),{source:t({originalSource:`{
  args: {
    size: 'small'
  }
}`},(q=(_=u.parameters)==null?void 0:_.docs)==null?void 0:q.source)})});var O,J,K;g.parameters=s(t({},g.parameters),{docs:s(t({},(O=g.parameters)==null?void 0:O.docs),{source:t({originalSource:`{
  args: {
    progressDot: true
  }
}`},(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source)})});var Q,X,Z;h.parameters=s(t({},h.parameters),{docs:s(t({},(Q=h.parameters)==null?void 0:Q.docs),{source:t({originalSource:`{
  args: {
    progressDot: (iconDot, {
      index,
      status,
      title,
      description
    }) => {
      return <span>{'Custom Dot: ' + index}</span>;
    }
  }
}`},(Z=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Z.source)})});var tt,et,nt;S.parameters=s(t({},S.parameters),{docs:s(t({},(tt=S.parameters)==null?void 0:tt.docs),{source:t({originalSource:`{
  args: {
    items: [{
      status: 'wait'
    }, {
      status: 'process'
    }, {
      status: 'finish'
    }, {
      status: 'error'
    }]
  }
}`},(nt=(et=S.parameters)==null?void 0:et.docs)==null?void 0:nt.source)})});var st,it,rt;x.parameters=s(t({},x.parameters),{docs:s(t({},(st=x.parameters)==null?void 0:st.docs),{source:t({originalSource:`{
  args: {
    type: 'navigation'
  }
}`},(rt=(it=x.parameters)==null?void 0:it.docs)==null?void 0:rt.source)})});var ot,at,ct;y.parameters=s(t({},y.parameters),{docs:s(t({},(ot=y.parameters)==null?void 0:ot.docs),{source:t({originalSource:`{
  args: {
    type: 'inline'
  }
}`},(ct=(at=y.parameters)==null?void 0:at.docs)==null?void 0:ct.source)})});var lt,pt,dt;v.parameters=s(t({},v.parameters),{docs:s(t({},(lt=v.parameters)==null?void 0:lt.docs),{source:t({originalSource:`{
  render: () => {
    const description = 'This is a description.';
    return <ExampleStory title="The most basic step bar.">
        <Steps current={1} items={[{
        title: 'Finished',
        description
      }, {
        title: 'In Progress',
        description,
        subTitle: 'Left 00:00:08'
      }, {
        title: 'Waiting',
        description
      }]} />
      </ExampleStory>;
  }
}`},(dt=(pt=v.parameters)==null?void 0:pt.docs)==null?void 0:dt.source)})});var mt,ut,gt;T.parameters=s(t({},T.parameters),{docs:s(t({},(mt=T.parameters)==null?void 0:mt.docs),{source:t({originalSource:`{
  render: () => {
    return <ExampleStory title='By setting like this: <Steps size="small">, you can get a mini version.'>
        <Steps size="small" current={1} items={[{
        title: 'Finished'
      }, {
        title: 'In Progress'
      }, {
        title: 'Waiting'
      }]} />
      </ExampleStory>;
  }
}`},(gt=(ut=T.parameters)==null?void 0:ut.docs)==null?void 0:gt.source)})});var ht,St,xt;b.parameters=s(t({},b.parameters),{docs:s(t({},(ht=b.parameters)==null?void 0:ht.docs),{source:t({originalSource:`{
  render: () => {
    return <ExampleStory title="You can use your own custom icons by setting the property icon for items.">
        <Steps items={[{
        title: 'Login',
        status: 'finish',
        icon: <Icon name="users" />
      }, {
        title: 'Verification',
        status: 'finish',
        icon: <Icon name="settings" />
      }, {
        title: 'Pay',
        status: 'process',
        icon: <Icon name="alicorn" />
      }, {
        title: 'Done',
        status: 'wait',
        icon: <Icon name="selected" size="sm" />
      }]} />
      </ExampleStory>;
  }
}`},(xt=(St=b.parameters)==null?void 0:St.docs)==null?void 0:xt.source)})});var yt,vt,Tt;E.parameters=s(t({},E.parameters),{docs:s(t({},(yt=E.parameters)==null?void 0:yt.docs),{source:t({originalSource:`{
  render: () => {
    const steps = [{
      title: 'First',
      content: 'First-content'
    }, {
      title: 'Second',
      content: 'Second-content'
    }, {
      title: 'Last',
      content: 'Last-content'
    }];
    const {
      token
    } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const next = () => {
      setCurrent(current + 1);
    };
    const prev = () => {
      setCurrent(current - 1);
    };
    const items = steps.map(item => ({
      key: item.title,
      title: item.title
    }));
    const contentStyle: React.CSSProperties = {
      lineHeight: '260px',
      textAlign: 'center',
      color: token.colorTextTertiary,
      backgroundColor: token.colorFillAlter,
      borderRadius: token.borderRadiusLG,
      border: \`1px dashed \${token.colorBorder}\`,
      marginTop: 16
    };
    return <ExampleStory title="Cooperate with the content and buttons, to represent the progress of a process.">
        <Steps current={current} items={items} />
        <div style={contentStyle}>{steps[current].content}</div>
        <div style={{
        marginTop: 24
      }}>
          {current < steps.length - 1 && <Button type="primary" onClick={() => {
          next();
        }}>
              Next
            </Button>}
          {current === steps.length - 1 && <Button type="primary" onClick={() => {
          void message.success('Processing complete!');
        }}>
              Done
            </Button>}
          {current > 0 && <Button style={{
          margin: '0 8px'
        }} onClick={() => {
          prev();
        }}>
              Previous
            </Button>}
        </div>
      </ExampleStory>;
  }
}`},(Tt=(vt=E.parameters)==null?void 0:vt.docs)==null?void 0:Tt.source)})});var bt,Et,ft;f.parameters=s(t({},f.parameters),{docs:s(t({},(bt=f.parameters)==null?void 0:bt.docs),{source:t({originalSource:`{
  render: () => {
    const description = 'This is a description.';
    return <ExampleStory title="A simple step bar in the vertical direction.">
        <Steps direction="vertical" current={1} items={[{
        title: 'Finished',
        description
      }, {
        title: 'In Progress',
        description
      }, {
        title: 'Waiting',
        description
      }]} />
      </ExampleStory>;
  }
}`},(ft=(Et=f.parameters)==null?void 0:Et.docs)==null?void 0:ft.source)})});var jt,Pt,Ct;j.parameters=s(t({},j.parameters),{docs:s(t({},(jt=j.parameters)==null?void 0:jt.docs),{source:t({originalSource:`{
  render: () => {
    const description = 'This is a description.';
    return <ExampleStory title="A simple mini version step bar in the vertical direction.">
        <Steps direction="vertical" size="small" current={1} items={[{
        title: 'Finished',
        description
      }, {
        title: 'In Progress',
        description
      }, {
        title: 'Waiting',
        description
      }]} />
      </ExampleStory>;
  }
}`},(Ct=(Pt=j.parameters)==null?void 0:Pt.docs)==null?void 0:Ct.source)})});var Dt,It,Ft;P.parameters=s(t({},P.parameters),{docs:s(t({},(Dt=P.parameters)==null?void 0:Dt.docs),{source:t({originalSource:`{
  render: () => {
    const description = 'This is a description';
    return <ExampleStory title="By using status of Steps, you can specify the state for current step.">
        <Steps current={1} status="error" items={[{
        title: 'Finished',
        description
      }, {
        title: 'In Process',
        description
      }, {
        title: 'Waiting',
        description
      }]} />
      </ExampleStory>;
  }
}`},(Ft=(It=P.parameters)==null?void 0:It.docs)==null?void 0:Ft.source)})});var wt,kt,zt;C.parameters=s(t({},C.parameters),{docs:s(t({},(wt=C.parameters)==null?void 0:wt.docs),{source:t({originalSource:`{
  render: () => {
    return <ExampleStory title="Steps with progress dot style.">
        <>
          <Steps progressDot current={1} items={[{
          title: 'Finished',
          description: 'This is a description.'
        }, {
          title: 'In Progress',
          description: 'This is a description.'
        }, {
          title: 'Waiting',
          description: 'This is a description.'
        }]} />
          <Divider />
          <Steps progressDot current={1} direction="vertical" items={[{
          title: 'Finished',
          description: 'This is a description. This is a description.'
        }, {
          title: 'Finished',
          description: 'This is a description. This is a description.'
        }, {
          title: 'In Progress',
          description: 'This is a description. This is a description.'
        }, {
          title: 'Waiting',
          description: 'This is a description.'
        }, {
          title: 'Waiting',
          description: 'This is a description.'
        }]} />
        </>
      </ExampleStory>;
  }
}`},(zt=(kt=C.parameters)==null?void 0:kt.docs)==null?void 0:zt.source)})});var Wt,At,Lt;D.parameters=s(t({},D.parameters),{docs:s(t({},(Wt=D.parameters)==null?void 0:Wt.docs),{source:t({originalSource:`{
  render: () => {
    const customDot: IStepsProps['progressDot'] = (dot, {
      status,
      index
    }) => <Popover content={<span>
            step {index} status: {status}
          </span>}>
        {dot}
      </Popover>;
    const description = 'You can hover on the dot.';
    return <ExampleStory title="You can customize the display for Steps with progress dot style.">
        <Steps current={1} progressDot={customDot} items={[{
        title: 'Finished',
        description
      }, {
        title: 'In Progress',
        description
      }, {
        title: 'Waiting',
        description
      }, {
        title: 'Waiting',
        description
      }]} />
      </ExampleStory>;
  }
}`},(Lt=(At=D.parameters)==null?void 0:At.docs)==null?void 0:Lt.source)})});var Bt,Nt,Vt;I.parameters=s(t({},I.parameters),{docs:s(t({},(Bt=I.parameters)==null?void 0:Bt.docs),{source:t({originalSource:`{
  render: () => {
    const [current, setCurrent] = useState(0);
    const onChange = (value: number) => {
      console.log('onChange:', value);
      setCurrent(value);
    };
    const description = 'This is a description.';
    return <ExampleStory title="Setting onChange makes Steps clickable.">
        <>
          <Steps current={current} onChange={onChange} items={[{
          title: 'Step 1',
          description
        }, {
          title: 'Step 2',
          description
        }, {
          title: 'Step 3',
          description
        }]} />

          <Divider />

          <Steps current={current} onChange={onChange} direction="vertical" items={[{
          title: 'Step 1',
          description
        }, {
          title: 'Step 2',
          description
        }, {
          title: 'Step 3',
          description
        }]} />
        </>
      </ExampleStory>;
  }
}`},(Vt=(Nt=I.parameters)==null?void 0:Nt.docs)==null?void 0:Vt.source)})});var Rt,Yt,$t;F.parameters=s(t({},F.parameters),{docs:s(t({},(Rt=F.parameters)==null?void 0:Rt.docs),{source:t({originalSource:`{
  render: () => {
    const [current, setCurrent] = useState(0);
    const onChange = (value: number) => {
      console.log('onChange:', value);
      setCurrent(value);
    };
    return <ExampleStory title="Navigation steps.">
        <>
          <Steps type="navigation" size="small" current={current} onChange={onChange} className="site-navigation-steps" items={[{
          title: 'Step 1',
          subTitle: '00:00:05',
          status: 'finish',
          description: 'This is a description.'
        }, {
          title: 'Step 2',
          subTitle: '00:01:02',
          status: 'process',
          description: 'This is a description.'
        }, {
          title: 'Step 3',
          subTitle: 'waiting for longlong time',
          status: 'wait',
          description: 'This is a description.'
        }]} />
          <Steps type="navigation" current={current} onChange={onChange} className="site-navigation-steps" items={[{
          status: 'finish',
          title: 'Step 1'
        }, {
          status: 'process',
          title: 'Step 2'
        }, {
          status: 'wait',
          title: 'Step 3'
        }, {
          status: 'wait',
          title: 'Step 4'
        }]} />
          <Steps type="navigation" size="small" current={current} onChange={onChange} className="site-navigation-steps" items={[{
          status: 'finish',
          title: 'finish 1'
        }, {
          status: 'finish',
          title: 'finish 2'
        }, {
          status: 'process',
          title: 'current process'
        }, {
          status: 'wait',
          title: 'wait',
          disabled: true
        }]} />
        </>
      </ExampleStory>;
  }
}`},($t=(Yt=F.parameters)==null?void 0:Yt.docs)==null?void 0:$t.source)})});var Mt,Gt,Ht;w.parameters=s(t({},w.parameters),{docs:s(t({},(Mt=w.parameters)==null?void 0:Mt.docs),{source:t({originalSource:`{
  render: () => {
    const description = 'This is a description.';
    return <ExampleStory title="Steps with progress.">
        <Steps current={1} percent={60} items={[{
        title: 'Finished',
        description
      }, {
        title: 'In Progress',
        subTitle: 'Left 00:00:08',
        description
      }, {
        title: 'Waiting',
        description
      }]} />
      </ExampleStory>;
  }
}`},(Ht=(Gt=w.parameters)==null?void 0:Gt.docs)==null?void 0:Ht.source)})});var Ut,_t,qt;k.parameters=s(t({},k.parameters),{docs:s(t({},(Ut=k.parameters)==null?void 0:Ut.docs),{source:t({originalSource:`{
  render: () => {
    const description = 'This is a description.';
    const items = [{
      title: 'Finished',
      description
    }, {
      title: 'In Progress',
      description
    }, {
      title: 'Waiting',
      description
    }];
    return <ExampleStory title="Set labelPlacement to vertical.">
        <Steps current={1} labelPlacement="vertical" items={items} />
        <br />
        <Steps current={1} percent={60} labelPlacement="vertical" items={items} />
        <br />
        <Steps current={1} size="small" labelPlacement="vertical" items={items} />
      </ExampleStory>;
  }
}`},(qt=(_t=k.parameters)==null?void 0:_t.docs)==null?void 0:qt.source)})});var Ot,Jt,Kt;z.parameters=s(t({},z.parameters),{docs:s(t({},(Ot=z.parameters)==null?void 0:Ot.docs),{source:t({originalSource:`{
  render: () => {
    const data = [{
      title: 'Ant Design Title 1',
      current: 0
    }, {
      title: 'Ant Design Title 2',
      current: 1,
      status: 'error'
    }, {
      title: 'Ant Design Title 3',
      current: 2
    }, {
      title: 'Ant Design Title 4',
      current: 1
    }];
    const items = [{
      title: 'Step 1',
      description: 'This is a Step 1.'
    }, {
      title: 'Step 2',
      description: 'This is a Step 2.'
    }, {
      title: 'Step 3',
      description: 'This is a Step 3.'
    }];
    return <ExampleStory title="Inline type steps, suitable for displaying the process and current state of the object in the list content scene.">
        <div>
          <List itemLayout="horizontal" dataSource={data} renderItem={(item, index) => <List.Item>
                <List.Item.Meta avatar={<Avatar src={\`https://api.dicebear.com/7.x/miniavs/svg?seed=\${index}\`} />} title={<a href="https://ant.design">{item.title}</a>} description="Ant Design, a design language for background applications, is refined by Ant UED Team" />
                <Steps style={{
            marginTop: 8
          }} type="inline" current={item.current} status={(item.status as IStepsProps['status'])} items={items} />
              </List.Item>} />
        </div>
      </ExampleStory>;
  }
}`},(Kt=(Jt=z.parameters)==null?void 0:Jt.docs)==null?void 0:Kt.source)})});const ke=["Primary","VerticalDirection","SmallSize","ProgressDot","CustomProgressDot","DifferentStatuses","Navigation","Inline","ExampleBasic","ExampleSmall","ExampleIcon","ExampleSwitch","ExampleVertical","ExampleVerticalSmall","ExampleError","ExampleDot","ExampleCustomDot","ExampleClickable","ExampleNavigation","ExampleProgress","ExampleLabelPlacement","ExampleInline"];export{h as CustomProgressDot,S as DifferentStatuses,v as ExampleBasic,I as ExampleClickable,D as ExampleCustomDot,C as ExampleDot,P as ExampleError,b as ExampleIcon,z as ExampleInline,k as ExampleLabelPlacement,F as ExampleNavigation,w as ExampleProgress,T as ExampleSmall,E as ExampleSwitch,f as ExampleVertical,j as ExampleVerticalSmall,y as Inline,x as Navigation,d as Primary,g as ProgressDot,u as SmallSize,m as VerticalDirection,ke as __namedExportsOrder,we as default};
