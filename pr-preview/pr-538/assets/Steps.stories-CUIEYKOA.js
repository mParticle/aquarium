var ee=Object.defineProperty,se=Object.defineProperties;var ie=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var V=(s,r,n)=>r in s?ee(s,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[r]=n,t=(s,r)=>{for(var n in r||(r={}))re.call(r,n)&&V(s,n,r[n]);if(N)for(var n of N(r))ne.call(r,n)&&V(s,n,r[n]);return s},i=(s,r)=>se(s,ie(r));import{j as e}from"./jsx-runtime-BcCOBRXo.js";import{r as L}from"./index-CNk6hRaE.js";import{a3 as o,I as k,g as W,a4 as oe,c as Qt,L as A,A as ae,o as ce}from"./ChartColors-B94s4zHg.js";import"./_baseClone-DBzvlRjn.js";import{E as c}from"./ExampleStory-BW8VeSkf.js";import{t as le}from"./index-BQrUXFq1.js";const pe=[{title:"Finished",description:"description 1"},{title:"In Progress",description:"description 2",subTitle:"subTitle 2"},{title:"Waiting",description:"description 3"}],de={title:"Components/Navigation/Steps",component:o,args:{items:pe,current:0,initial:0,direction:"horizontal",labelPlacement:"horizontal",percent:void 0,progressDot:!1,responsive:!0,size:"default",status:"process",type:"default",onChange:s=>{alert("Step changed : "+s)}},argTypes:{direction:{control:"select",options:["horizontal","vertical"]},labelPlacement:{control:"select",options:["horizontal","vertical"]},type:{control:"select",options:["default","navigation","inline"]},status:{control:"select",options:["wait","process","finish","error"]},size:{control:"select",options:["default","small"]}}},p={},d={args:{direction:"vertical"}},m={args:{size:"small"}},u={args:{progressDot:!0}},g={args:{progressDot:(s,{index:r,status:n,title:a,description:l})=>e.jsx("span",{children:"Custom Dot: "+r})}},h={args:{items:[{status:"wait"},{status:"process"},{status:"finish"},{status:"error"}]}},S={args:{type:"navigation"}},x={args:{type:"inline"}},y={render:()=>{const s="This is a description.";return e.jsx(c,{title:"The most basic step bar.",children:e.jsx(o,{current:1,items:[{title:"Finished",description:s},{title:"In Progress",description:s,subTitle:"Left 00:00:08"},{title:"Waiting",description:s}]})})}},v={render:()=>e.jsx(c,{title:'By setting like this: <Steps size="small">, you can get a mini version.',children:e.jsx(o,{size:"small",current:1,items:[{title:"Finished"},{title:"In Progress"},{title:"Waiting"}]})})},T={render:()=>e.jsx(c,{title:"You can use your own custom icons by setting the property icon for items.",children:e.jsx(o,{items:[{title:"Login",status:"finish",icon:e.jsx(k,{name:"users"})},{title:"Verification",status:"finish",icon:e.jsx(k,{name:"settings"})},{title:"Pay",status:"process",icon:e.jsx(k,{name:"alicorn"})},{title:"Done",status:"wait",icon:e.jsx(k,{name:"selected",size:"sm"})}]})})},b={render:()=>{const s=[{title:"First",content:"First-content"},{title:"Second",content:"Second-content"},{title:"Last",content:"Last-content"}],{token:r}=le.useToken(),[n,a]=L.useState(0),l=()=>{a(n+1)},Xt=()=>{a(n-1)},Zt=s.map(B=>({key:B.title,title:B.title})),te={lineHeight:"260px",textAlign:"center",color:r.colorTextTertiary,backgroundColor:r.colorFillAlter,borderRadius:r.borderRadiusLG,border:`1px dashed ${r.colorBorder}`,marginTop:16};return e.jsxs(c,{title:"Cooperate with the content and buttons, to represent the progress of a process.",children:[e.jsx(o,{current:n,items:Zt}),e.jsx("div",{style:te,children:s[n].content}),e.jsxs("div",{style:{marginTop:24},children:[n<s.length-1&&e.jsx(W,{type:"primary",onClick:()=>{l()},children:"Next"}),n===s.length-1&&e.jsx(W,{type:"primary",onClick:()=>{oe.success("Processing complete!")},children:"Done"}),n>0&&e.jsx(W,{style:{margin:"0 8px"},onClick:()=>{Xt()},children:"Previous"})]})]})}},f={render:()=>{const s="This is a description.";return e.jsx(c,{title:"A simple step bar in the vertical direction.",children:e.jsx(o,{direction:"vertical",current:1,items:[{title:"Finished",description:s},{title:"In Progress",description:s},{title:"Waiting",description:s}]})})}},j={render:()=>{const s="This is a description.";return e.jsx(c,{title:"A simple mini version step bar in the vertical direction.",children:e.jsx(o,{direction:"vertical",size:"small",current:1,items:[{title:"Finished",description:s},{title:"In Progress",description:s},{title:"Waiting",description:s}]})})}},E={render:()=>{const s="This is a description";return e.jsx(c,{title:"By using status of Steps, you can specify the state for current step.",children:e.jsx(o,{current:1,status:"error",items:[{title:"Finished",description:s},{title:"In Process",description:s},{title:"Waiting",description:s}]})})}},P={render:()=>e.jsx(c,{title:"Steps with progress dot style.",children:e.jsxs(e.Fragment,{children:[e.jsx(o,{progressDot:!0,current:1,items:[{title:"Finished",description:"This is a description."},{title:"In Progress",description:"This is a description."},{title:"Waiting",description:"This is a description."}]}),e.jsx(Qt,{}),e.jsx(o,{progressDot:!0,current:1,direction:"vertical",items:[{title:"Finished",description:"This is a description. This is a description."},{title:"Finished",description:"This is a description. This is a description."},{title:"In Progress",description:"This is a description. This is a description."},{title:"Waiting",description:"This is a description."},{title:"Waiting",description:"This is a description."}]})]})})},C={render:()=>{const s=(n,{status:a,index:l})=>e.jsx(ce,{content:e.jsxs("span",{children:["step ",l," status: ",a]}),children:n}),r="You can hover on the dot.";return e.jsx(c,{title:"You can customize the display for Steps with progress dot style.",children:e.jsx(o,{current:1,progressDot:s,items:[{title:"Finished",description:r},{title:"In Progress",description:r},{title:"Waiting",description:r},{title:"Waiting",description:r}]})})}},D={render:()=>{const[s,r]=L.useState(0),n=l=>{console.log("onChange:",l),r(l)},a="This is a description.";return e.jsx(c,{title:"Setting onChange makes Steps clickable.",children:e.jsxs(e.Fragment,{children:[e.jsx(o,{current:s,onChange:n,items:[{title:"Step 1",description:a},{title:"Step 2",description:a},{title:"Step 3",description:a}]}),e.jsx(Qt,{}),e.jsx(o,{current:s,onChange:n,direction:"vertical",items:[{title:"Step 1",description:a},{title:"Step 2",description:a},{title:"Step 3",description:a}]})]})})}},I={render:()=>{const[s,r]=L.useState(0),n=a=>{console.log("onChange:",a),r(a)};return e.jsx(c,{title:"Navigation steps.",children:e.jsxs(e.Fragment,{children:[e.jsx(o,{type:"navigation",size:"small",current:s,onChange:n,className:"site-navigation-steps",items:[{title:"Step 1",subTitle:"00:00:05",status:"finish",description:"This is a description."},{title:"Step 2",subTitle:"00:01:02",status:"process",description:"This is a description."},{title:"Step 3",subTitle:"waiting for longlong time",status:"wait",description:"This is a description."}]}),e.jsx(o,{type:"navigation",current:s,onChange:n,className:"site-navigation-steps",items:[{status:"finish",title:"Step 1"},{status:"process",title:"Step 2"},{status:"wait",title:"Step 3"},{status:"wait",title:"Step 4"}]}),e.jsx(o,{type:"navigation",size:"small",current:s,onChange:n,className:"site-navigation-steps",items:[{status:"finish",title:"finish 1"},{status:"finish",title:"finish 2"},{status:"process",title:"current process"},{status:"wait",title:"wait",disabled:!0}]})]})})}},F={render:()=>{const s="This is a description.";return e.jsx(c,{title:"Steps with progress.",children:e.jsx(o,{current:1,percent:60,items:[{title:"Finished",description:s},{title:"In Progress",subTitle:"Left 00:00:08",description:s},{title:"Waiting",description:s}]})})}},w={render:()=>{const s="This is a description.",r=[{title:"Finished",description:s},{title:"In Progress",description:s},{title:"Waiting",description:s}];return e.jsxs(c,{title:"Set labelPlacement to vertical.",children:[e.jsx(o,{current:1,labelPlacement:"vertical",items:r}),e.jsx("br",{}),e.jsx(o,{current:1,percent:60,labelPlacement:"vertical",items:r}),e.jsx("br",{}),e.jsx(o,{current:1,size:"small",labelPlacement:"vertical",items:r})]})}},z={render:()=>{const s=[{title:"Ant Design Title 1",current:0},{title:"Ant Design Title 2",current:1,status:"error"},{title:"Ant Design Title 3",current:2},{title:"Ant Design Title 4",current:1}],r=[{title:"Step 1",description:"This is a Step 1."},{title:"Step 2",description:"This is a Step 2."},{title:"Step 3",description:"This is a Step 3."}];return e.jsx(c,{title:"Inline type steps, suitable for displaying the process and current state of the object in the list content scene.",children:e.jsx("div",{children:e.jsx(A,{itemLayout:"horizontal",dataSource:s,renderItem:(n,a)=>e.jsxs(A.Item,{children:[e.jsx(A.Item.Meta,{avatar:e.jsx(ae,{src:`https://api.dicebear.com/7.x/miniavs/svg?seed=${a}`}),title:e.jsx("a",{href:"https://ant.design",children:n.title}),description:"Ant Design, a design language for background applications, is refined by Ant UED Team"}),e.jsx(o,{style:{marginTop:8},type:"inline",current:n.current,status:n.status,items:r})]})})})})}};var R,Y,_;p.parameters=i(t({},p.parameters),{docs:i(t({},(R=p.parameters)==null?void 0:R.docs),{source:t({originalSource:"{}"},(_=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:_.source)})});var M,$,O;d.parameters=i(t({},d.parameters),{docs:i(t({},(M=d.parameters)==null?void 0:M.docs),{source:t({originalSource:`{
  args: {
    direction: 'vertical'
  }
}`},(O=($=d.parameters)==null?void 0:$.docs)==null?void 0:O.source)})});var G,H,U;m.parameters=i(t({},m.parameters),{docs:i(t({},(G=m.parameters)==null?void 0:G.docs),{source:t({originalSource:`{
  args: {
    size: 'small'
  }
}`},(U=(H=m.parameters)==null?void 0:H.docs)==null?void 0:U.source)})});var q,J,K;u.parameters=i(t({},u.parameters),{docs:i(t({},(q=u.parameters)==null?void 0:q.docs),{source:t({originalSource:`{
  args: {
    progressDot: true
  }
}`},(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source)})});var Q,X,Z;g.parameters=i(t({},g.parameters),{docs:i(t({},(Q=g.parameters)==null?void 0:Q.docs),{source:t({originalSource:`{
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
}`},(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.source)})});var tt,et,st;h.parameters=i(t({},h.parameters),{docs:i(t({},(tt=h.parameters)==null?void 0:tt.docs),{source:t({originalSource:`{
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
}`},(st=(et=h.parameters)==null?void 0:et.docs)==null?void 0:st.source)})});var it,rt,nt;S.parameters=i(t({},S.parameters),{docs:i(t({},(it=S.parameters)==null?void 0:it.docs),{source:t({originalSource:`{
  args: {
    type: 'navigation'
  }
}`},(nt=(rt=S.parameters)==null?void 0:rt.docs)==null?void 0:nt.source)})});var ot,at,ct;x.parameters=i(t({},x.parameters),{docs:i(t({},(ot=x.parameters)==null?void 0:ot.docs),{source:t({originalSource:`{
  args: {
    type: 'inline'
  }
}`},(ct=(at=x.parameters)==null?void 0:at.docs)==null?void 0:ct.source)})});var lt,pt,dt;y.parameters=i(t({},y.parameters),{docs:i(t({},(lt=y.parameters)==null?void 0:lt.docs),{source:t({originalSource:`{
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
}`},(dt=(pt=y.parameters)==null?void 0:pt.docs)==null?void 0:dt.source)})});var mt,ut,gt;v.parameters=i(t({},v.parameters),{docs:i(t({},(mt=v.parameters)==null?void 0:mt.docs),{source:t({originalSource:`{
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
}`},(gt=(ut=v.parameters)==null?void 0:ut.docs)==null?void 0:gt.source)})});var ht,St,xt;T.parameters=i(t({},T.parameters),{docs:i(t({},(ht=T.parameters)==null?void 0:ht.docs),{source:t({originalSource:`{
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
}`},(xt=(St=T.parameters)==null?void 0:St.docs)==null?void 0:xt.source)})});var yt,vt,Tt;b.parameters=i(t({},b.parameters),{docs:i(t({},(yt=b.parameters)==null?void 0:yt.docs),{source:t({originalSource:`{
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
}`},(Tt=(vt=b.parameters)==null?void 0:vt.docs)==null?void 0:Tt.source)})});var bt,ft,jt;f.parameters=i(t({},f.parameters),{docs:i(t({},(bt=f.parameters)==null?void 0:bt.docs),{source:t({originalSource:`{
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
}`},(jt=(ft=f.parameters)==null?void 0:ft.docs)==null?void 0:jt.source)})});var Et,Pt,Ct;j.parameters=i(t({},j.parameters),{docs:i(t({},(Et=j.parameters)==null?void 0:Et.docs),{source:t({originalSource:`{
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
}`},(Ct=(Pt=j.parameters)==null?void 0:Pt.docs)==null?void 0:Ct.source)})});var Dt,It,Ft;E.parameters=i(t({},E.parameters),{docs:i(t({},(Dt=E.parameters)==null?void 0:Dt.docs),{source:t({originalSource:`{
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
}`},(Ft=(It=E.parameters)==null?void 0:It.docs)==null?void 0:Ft.source)})});var wt,zt,kt;P.parameters=i(t({},P.parameters),{docs:i(t({},(wt=P.parameters)==null?void 0:wt.docs),{source:t({originalSource:`{
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
}`},(kt=(zt=P.parameters)==null?void 0:zt.docs)==null?void 0:kt.source)})});var Wt,At,Lt;C.parameters=i(t({},C.parameters),{docs:i(t({},(Wt=C.parameters)==null?void 0:Wt.docs),{source:t({originalSource:`{
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
}`},(Lt=(At=C.parameters)==null?void 0:At.docs)==null?void 0:Lt.source)})});var Bt,Nt,Vt;D.parameters=i(t({},D.parameters),{docs:i(t({},(Bt=D.parameters)==null?void 0:Bt.docs),{source:t({originalSource:`{
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
}`},(Vt=(Nt=D.parameters)==null?void 0:Nt.docs)==null?void 0:Vt.source)})});var Rt,Yt,_t;I.parameters=i(t({},I.parameters),{docs:i(t({},(Rt=I.parameters)==null?void 0:Rt.docs),{source:t({originalSource:`{
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
}`},(_t=(Yt=I.parameters)==null?void 0:Yt.docs)==null?void 0:_t.source)})});var Mt,$t,Ot;F.parameters=i(t({},F.parameters),{docs:i(t({},(Mt=F.parameters)==null?void 0:Mt.docs),{source:t({originalSource:`{
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
}`},(Ot=($t=F.parameters)==null?void 0:$t.docs)==null?void 0:Ot.source)})});var Gt,Ht,Ut;w.parameters=i(t({},w.parameters),{docs:i(t({},(Gt=w.parameters)==null?void 0:Gt.docs),{source:t({originalSource:`{
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
}`},(Ut=(Ht=w.parameters)==null?void 0:Ht.docs)==null?void 0:Ut.source)})});var qt,Jt,Kt;z.parameters=i(t({},z.parameters),{docs:i(t({},(qt=z.parameters)==null?void 0:qt.docs),{source:t({originalSource:`{
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
          }} type="inline" current={item.current} status={item.status as IStepsProps['status']} items={items} />
              </List.Item>} />
        </div>
      </ExampleStory>;
  }
}`},(Kt=(Jt=z.parameters)==null?void 0:Jt.docs)==null?void 0:Kt.source)})});const me=["Primary","VerticalDirection","SmallSize","ProgressDot","CustomProgressDot","DifferentStatuses","Navigation","Inline","ExampleBasic","ExampleSmall","ExampleIcon","ExampleSwitch","ExampleVertical","ExampleVerticalSmall","ExampleError","ExampleDot","ExampleCustomDot","ExampleClickable","ExampleNavigation","ExampleProgress","ExampleLabelPlacement","ExampleInline"],Te=Object.freeze(Object.defineProperty({__proto__:null,CustomProgressDot:g,DifferentStatuses:h,ExampleBasic:y,ExampleClickable:D,ExampleCustomDot:C,ExampleDot:P,ExampleError:E,ExampleIcon:T,ExampleInline:z,ExampleLabelPlacement:w,ExampleNavigation:I,ExampleProgress:F,ExampleSmall:v,ExampleSwitch:b,ExampleVertical:f,ExampleVerticalSmall:j,Inline:x,Navigation:S,Primary:p,ProgressDot:u,SmallSize:m,VerticalDirection:d,__namedExportsOrder:me,default:de},Symbol.toStringTag,{value:"Module"}));export{Te as S,de as m};
