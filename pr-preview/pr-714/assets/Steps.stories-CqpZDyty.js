import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as W}from"./iframe-DPsSDxI5.js";import{aq as r,I as k,a as w,ar as R,k as L,L as z,A as Y,P as _}from"./UnauthorizedTooltip-DInzTCbR.js";import"./ErrorStateIcon-N5tZzBSe.js";import"./SuccessStateIcon-jdQomLYr.js";import"./WarningStateIcon-BOAINRnk.js";import{E as o}from"./ExampleStory-D9NFb6Ax.js";import{t as M}from"./index-kMS0x76F.js";const $=[{title:"Finished",description:"description 1"},{title:"In Progress",description:"description 2",subTitle:"subTitle 2"},{title:"Waiting",description:"description 3"}],O={title:"Components/Not Prod Ready/Navigation/Steps",component:r,args:{items:$,current:0,initial:0,direction:"horizontal",labelPlacement:"horizontal",percent:void 0,progressDot:!1,responsive:!0,size:"default",status:"process",type:"default",onChange:e=>{alert("Step changed : "+e)}},argTypes:{direction:{control:"select",options:["horizontal","vertical"]},labelPlacement:{control:"select",options:["horizontal","vertical"]},type:{control:"select",options:["default","navigation","inline"]},status:{control:"select",options:["wait","process","finish","error"]},size:{control:"select",options:["default","small"]}}},c={},l={args:{direction:"vertical"}},p={args:{size:"small"}},d={args:{progressDot:!0}},m={args:{progressDot:(e,{index:s,status:i,title:n,description:a})=>t.jsx("span",{children:"Custom Dot: "+s})}},u={args:{items:[{status:"wait"},{status:"process"},{status:"finish"},{status:"error"}]}},g={args:{type:"navigation"}},h={args:{type:"inline"}},S={render:()=>{const e="This is a description.";return t.jsx(o,{title:"The most basic step bar.",children:t.jsx(r,{current:1,items:[{title:"Finished",description:e},{title:"In Progress",description:e,subTitle:"Left 00:00:08"},{title:"Waiting",description:e}]})})}},x={render:()=>t.jsx(o,{title:'By setting like this: <Steps size="small">, you can get a mini version.',children:t.jsx(r,{size:"small",current:1,items:[{title:"Finished"},{title:"In Progress"},{title:"Waiting"}]})})},y={render:()=>t.jsx(o,{title:"You can use your own custom icons by setting the property icon for items.",children:t.jsx(r,{items:[{title:"Login",status:"finish",icon:t.jsx(k,{name:"users"})},{title:"Verification",status:"finish",icon:t.jsx(k,{name:"settings"})},{title:"Pay",status:"process",icon:t.jsx(k,{name:"alicorn"})},{title:"Done",status:"wait",icon:t.jsx(k,{name:"selected",size:"sm"})}]})})},v={render:()=>{const e=[{title:"First",content:"First-content"},{title:"Second",content:"Second-content"},{title:"Last",content:"Last-content"}],{token:s}=M.useToken(),[i,n]=W.useState(0),a=()=>{n(i+1)},N=()=>{n(i-1)},B=e.map(A=>({key:A.title,title:A.title})),V={lineHeight:"260px",textAlign:"center",color:s.colorTextTertiary,backgroundColor:s.colorFillAlter,borderRadius:s.borderRadiusLG,border:`1px dashed ${s.colorBorder}`,marginTop:16};return t.jsxs(o,{title:"Cooperate with the content and buttons, to represent the progress of a process.",children:[t.jsx(r,{current:i,items:B}),t.jsx("div",{style:V,children:e[i].content}),t.jsxs("div",{style:{marginTop:24},children:[i<e.length-1&&t.jsx(w,{type:"primary",onClick:()=>{a()},children:"Next"}),i===e.length-1&&t.jsx(w,{type:"primary",onClick:()=>{R.success("Processing complete!")},children:"Done"}),i>0&&t.jsx(w,{style:{margin:"0 8px"},onClick:()=>{N()},children:"Previous"})]})]})}},T={render:()=>{const e="This is a description.";return t.jsx(o,{title:"A simple step bar in the vertical direction.",children:t.jsx(r,{direction:"vertical",current:1,items:[{title:"Finished",description:e},{title:"In Progress",description:e},{title:"Waiting",description:e}]})})}},b={render:()=>{const e="This is a description.";return t.jsx(o,{title:"A simple mini version step bar in the vertical direction.",children:t.jsx(r,{direction:"vertical",size:"small",current:1,items:[{title:"Finished",description:e},{title:"In Progress",description:e},{title:"Waiting",description:e}]})})}},f={render:()=>{const e="This is a description";return t.jsx(o,{title:"By using status of Steps, you can specify the state for current step.",children:t.jsx(r,{current:1,status:"error",items:[{title:"Finished",description:e},{title:"In Process",description:e},{title:"Waiting",description:e}]})})}},j={render:()=>t.jsx(o,{title:"Steps with progress dot style.",children:t.jsxs(t.Fragment,{children:[t.jsx(r,{progressDot:!0,current:1,items:[{title:"Finished",description:"This is a description."},{title:"In Progress",description:"This is a description."},{title:"Waiting",description:"This is a description."}]}),t.jsx(L,{}),t.jsx(r,{progressDot:!0,current:1,direction:"vertical",items:[{title:"Finished",description:"This is a description. This is a description."},{title:"Finished",description:"This is a description. This is a description."},{title:"In Progress",description:"This is a description. This is a description."},{title:"Waiting",description:"This is a description."},{title:"Waiting",description:"This is a description."}]})]})})},E={render:()=>{const e=(i,{status:n,index:a})=>t.jsx(_,{content:t.jsxs("span",{children:["step ",a," status: ",n]}),children:i}),s="You can hover on the dot.";return t.jsx(o,{title:"You can customize the display for Steps with progress dot style.",children:t.jsx(r,{current:1,progressDot:e,items:[{title:"Finished",description:s},{title:"In Progress",description:s},{title:"Waiting",description:s},{title:"Waiting",description:s}]})})}},P={render:()=>{const[e,s]=W.useState(0),i=a=>{console.log("onChange:",a),s(a)},n="This is a description.";return t.jsx(o,{title:"Setting onChange makes Steps clickable.",children:t.jsxs(t.Fragment,{children:[t.jsx(r,{current:e,onChange:i,items:[{title:"Step 1",description:n},{title:"Step 2",description:n},{title:"Step 3",description:n}]}),t.jsx(L,{}),t.jsx(r,{current:e,onChange:i,direction:"vertical",items:[{title:"Step 1",description:n},{title:"Step 2",description:n},{title:"Step 3",description:n}]})]})})}},C={render:()=>{const[e,s]=W.useState(0),i=n=>{console.log("onChange:",n),s(n)};return t.jsx(o,{title:"Navigation steps.",children:t.jsxs(t.Fragment,{children:[t.jsx(r,{type:"navigation",size:"small",current:e,onChange:i,className:"site-navigation-steps",items:[{title:"Step 1",subTitle:"00:00:05",status:"finish",description:"This is a description."},{title:"Step 2",subTitle:"00:01:02",status:"process",description:"This is a description."},{title:"Step 3",subTitle:"waiting for longlong time",status:"wait",description:"This is a description."}]}),t.jsx(r,{type:"navigation",current:e,onChange:i,className:"site-navigation-steps",items:[{status:"finish",title:"Step 1"},{status:"process",title:"Step 2"},{status:"wait",title:"Step 3"},{status:"wait",title:"Step 4"}]}),t.jsx(r,{type:"navigation",size:"small",current:e,onChange:i,className:"site-navigation-steps",items:[{status:"finish",title:"finish 1"},{status:"finish",title:"finish 2"},{status:"process",title:"current process"},{status:"wait",title:"wait",disabled:!0}]})]})})}},D={render:()=>{const e="This is a description.";return t.jsx(o,{title:"Steps with progress.",children:t.jsx(r,{current:1,percent:60,items:[{title:"Finished",description:e},{title:"In Progress",subTitle:"Left 00:00:08",description:e},{title:"Waiting",description:e}]})})}},I={render:()=>{const e="This is a description.",s=[{title:"Finished",description:e},{title:"In Progress",description:e},{title:"Waiting",description:e}];return t.jsxs(o,{title:"Set labelPlacement to vertical.",children:[t.jsx(r,{current:1,labelPlacement:"vertical",items:s}),t.jsx("br",{}),t.jsx(r,{current:1,percent:60,labelPlacement:"vertical",items:s}),t.jsx("br",{}),t.jsx(r,{current:1,size:"small",labelPlacement:"vertical",items:s})]})}},F={render:()=>{const e=[{title:"Ant Design Title 1",current:0},{title:"Ant Design Title 2",current:1,status:"error"},{title:"Ant Design Title 3",current:2},{title:"Ant Design Title 4",current:1}],s=[{title:"Step 1",description:"This is a Step 1."},{title:"Step 2",description:"This is a Step 2."},{title:"Step 3",description:"This is a Step 3."}];return t.jsx(o,{title:"Inline type steps, suitable for displaying the process and current state of the object in the list content scene.",children:t.jsx("div",{children:t.jsx(z,{itemLayout:"horizontal",dataSource:e,renderItem:(i,n)=>t.jsxs(z.Item,{children:[t.jsx(z.Item.Meta,{avatar:t.jsx(Y,{src:`https://api.dicebear.com/7.x/miniavs/svg?seed=${n}`}),title:t.jsx("a",{href:"https://ant.design",children:i.title}),description:"Ant Design, a design language for background applications, is refined by Ant UED Team"}),t.jsx(r,{style:{marginTop:8},type:"inline",current:i.current,status:i.status,items:s})]})})})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'vertical'
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    progressDot: true
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'navigation'
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'inline'
  }
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};const G=["Primary","VerticalDirection","SmallSize","ProgressDot","CustomProgressDot","DifferentStatuses","Navigation","Inline","ExampleBasic","ExampleSmall","ExampleIcon","ExampleSwitch","ExampleVertical","ExampleVerticalSmall","ExampleError","ExampleDot","ExampleCustomDot","ExampleClickable","ExampleNavigation","ExampleProgress","ExampleLabelPlacement","ExampleInline"],tt=Object.freeze(Object.defineProperty({__proto__:null,CustomProgressDot:m,DifferentStatuses:u,ExampleBasic:S,ExampleClickable:P,ExampleCustomDot:E,ExampleDot:j,ExampleError:f,ExampleIcon:y,ExampleInline:F,ExampleLabelPlacement:I,ExampleNavigation:C,ExampleProgress:D,ExampleSmall:x,ExampleSwitch:v,ExampleVertical:T,ExampleVerticalSmall:b,Inline:h,Navigation:g,Primary:c,ProgressDot:d,SmallSize:p,VerticalDirection:l,__namedExportsOrder:G,default:O},Symbol.toStringTag,{value:"Module"}));export{tt as S,O as m};
