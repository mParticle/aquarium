var Se=Object.defineProperty,xe=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var Ie=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var M=(l,a,t)=>a in l?Se(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,n=(l,a)=>{for(var t in a||(a={}))Ie.call(a,t)&&M(l,t,a[t]);if(E)for(var t of E(a))ve.call(a,t)&&M(l,t,a[t]);return l},o=(l,a)=>xe(l,Ce(a));import{j as e}from"./jsx-runtime-C9TrHvcC.js";import{r as f}from"./index-3OP4wdng.js";import{aa as s,I as i,c as je}from"./UnauthorizedTooltip-ChZupM9C.js";import{E as I}from"./ExampleStory-DYuY8an7.js";import"./ErrorStateIcon-D40o0TZb.js";import"./SuccessStateIcon-B7X4NO4j.js";import"./WarningStateIcon-Cxg0SUL9.js";import"./_baseClone-DwBCp-Ss.js";const ge=[{label:"Navigation One",key:"mail"},{label:"Navigation Two",key:"app",disabled:!0},{label:"Navigation Three - Submenu",key:"SubMenu",children:[{type:"group",label:"Item 1",children:[{label:"Option 1",key:"setting:1"},{label:"Option 2",key:"setting:2"}]},{type:"group",label:"Item 2",children:[{label:"Option 3",key:"setting:3"},{label:"Option 4",key:"setting:4"}]}]},{label:"Navigation Four - Link",key:"alipay"}],fe={title:"Components/Not Prod Ready/Navigation/Menu",component:l=>e.jsxs(e.Fragment,{children:[" ",e.jsxs(s,o(n({},l),{children:[" ",l.children," "]}))]}),args:{children:e.jsx(e.Fragment,{children:"Button"}),items:ge,defaultOpenKeys:[],defaultSelectedKeys:[],expandIcon:void 0,forceSubMenuRender:!1,inlineCollapsed:!1,inlineIndent:24,mode:"vertical",multiple:!1,overflowedIndicator:e.jsx(e.Fragment,{children:"..."}),selectable:!0,selectedKeys:["mail"],style:void 0,subMenuCloseDelay:.1,subMenuOpenDelay:0,theme:"light",triggerSubMenuAction:"hover",onClick:({item:l,key:a,keyPath:t,domEvent:r})=>{alert(`Clicked on ${String(l)}`)},onDeselect:({item:l,key:a,keyPath:t,selectedKeys:r,domEvent:j})=>{alert(`Deselected ${String(l)}`)},onOpenChange:l=>{console.log(`Opened or Closed Sub-menus: ${l.join(", ")}`)},onSelect:({item:l,key:a,keyPath:t,selectedKeys:r,domEvent:j})=>{alert(`Selected ${String(l)}`)}},argTypes:{mode:{control:"select",options:["vertical","horizontal","inline"]},theme:{control:"select",options:["light","dark"]},triggerSubMenuAction:{control:"select",options:["hover","click"]}}},c={},p={args:{mode:"inline"}},u={args:{mode:"horizontal"}},m={args:{multiple:!0}},y={args:{expandIcon:l=>e.jsx(i,{name:"alicorn"})}},d={args:{inlineCollapsed:!0}},b={args:{theme:"dark"}},k={args:{style:{backgroundColor:"#f0f0f0"}}},O={args:{subMenuOpenDelay:.2,subMenuCloseDelay:.2}},g={render:()=>{const[l,a]=f.useState("mail"),t=r=>{console.log("clicked: ",r),a(r.key)};return e.jsx(e.Fragment,{children:e.jsx(I,{title:"Horizontal top navigation menu",children:e.jsx(s,{onClick:t,selectedKeys:[l],mode:"horizontal",items:ge})})})}},h={render:()=>{const l=[{label:"Navigation One",key:"sub1",icon:e.jsx(i,{name:"alicorn"}),children:[{label:"Item 1",key:"g1",children:[{label:"Option 1",key:"1"},{label:"Option 2",key:"2"}],type:"group"},{label:"Item 2",key:"g2",children:[{label:"Option 3",key:"3"},{label:"Option 4",key:"4"}],type:"group"}]},{label:"Navigation Two",key:"sub2",icon:e.jsx(i,{name:"alicorn"}),children:[{label:"Option 5",key:"5"},{label:"Option 6",key:"6"},{label:"Submenu",key:"sub3",icon:null,children:[{label:"Option 7",key:"7"},{label:"Option 8",key:"8"}]}]},{type:"divider"},{label:"Navigation Three",key:"sub4",icon:e.jsx(i,{name:"alicorn"}),children:[{label:"Option 9",key:"9"},{label:"Option 10",key:"10"},{label:"Option 11",key:"11"},{label:"Option 12",key:"12"}]},{label:"Group",key:"grp",children:[{label:"Option 13",key:"13"},{label:"Option 14",key:"14"}],type:"group"}];return e.jsx(e.Fragment,{children:e.jsx(I,{title:"Vertical menu with inline submenus",children:e.jsx(s,{onClick:a=>{console.log("click ",a)},style:{width:256},defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],mode:"inline",items:l})})})}},S={render:()=>{const l=[{label:"Option 1",key:"1",icon:e.jsx(i,{name:"alicorn"})},{label:"Option 2",key:"2",icon:e.jsx(i,{name:"alicorn"})},{label:"Option 3",key:"3",icon:e.jsx(i,{name:"alicorn"})},{label:"Navigation One",key:"sub1",icon:e.jsx(i,{name:"alicorn"}),children:[{label:"Option 5",key:"5"},{label:"Option 6",key:"6"},{label:"Option 7",key:"7"},{label:"Option 8",key:"8"}]},{label:"Navigation Two",key:"sub2",icon:e.jsx(i,{name:"alicorn"}),children:[{label:"Option 9",key:"9"},{label:"Option 10",key:"10"},{label:"Submenu",key:"sub3",icon:null,children:[{label:"Option 11",key:"11"},{label:"Option 12",key:"12"}]}]}],[a,t]=f.useState(!1),r=()=>{t(!a)};return e.jsx(e.Fragment,{children:e.jsx(I,{title:e.jsxs(e.Fragment,{children:["Inline menu could be collapsed. Here is a"," ",e.jsx("a",{href:"https://ant.design/components/layout#components-layout-demo-side",target:"_blank",rel:"noreferrer",children:"complete demo"})," ","with sider layout"," "]}),children:e.jsxs("div",{style:{width:256},children:[e.jsx(je,{type:"primary",onClick:r,style:{marginBottom:16},children:a?"Expand":"Collapse"}),e.jsx(s,{defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],mode:"inline",inlineCollapsed:a,items:l})]})})})}},x={render:()=>{const l=[{label:"Navigation One",key:"sub1",icon:e.jsx(i,{name:"alicorn"}),children:[{label:"Option 1",key:"1"},{label:"Option 2",key:"2"},{label:"Option 3",key:"3"},{label:"Option 4",key:"4"}]},{label:"Navigation Two",key:"sub2",icon:e.jsx(i,{name:"alicorn"}),children:[{label:"Option 5",key:"5"},{label:"Option 6",key:"6"},{label:"Submenu",key:"sub3",icon:null,children:[{label:"Option 7",key:"7"},{label:"Option 8",key:"8"}]}]},{label:"Navigation Three",key:"sub4",icon:e.jsx(i,{name:"alicorn"}),children:[{label:"Option 9",key:"9"},{label:"Option 10",key:"10"},{label:"Option 11",key:"11"},{label:"Option 12",key:"12"}]}],a=["sub1","sub2","sub4"],[t,r]=f.useState(["sub1"]),j=K=>{const v=K.find(he=>!t.includes(he));v&&!a.includes(v)?r(K):r(v?[v]:[])};return e.jsx(e.Fragment,{children:e.jsx(I,{title:"Click the menu and you will see that all the other menus gets collapsed to keep the entire menu compact",children:e.jsx(s,{mode:"inline",openKeys:t,onOpenChange:j,style:{width:256},items:l})})})}},C={render:()=>{const l=[{label:"Navigation One",key:"sub1",icon:e.jsx(i,{name:"alicorn"}),children:[{label:"Item 1",key:"Item 1 Key",children:[{label:"Option 1",key:"1"},{label:"Option 2",key:"2"}],type:"group"},{label:"Item 2",key:"Item 2 Key",children:[{label:"Option 3",key:"3"},{label:"Option 4",key:"4"}],type:"group"}]},{label:"Navigation Two",key:"sub2",icon:e.jsx(i,{name:"alicorn"}),children:[{label:"Option 5",key:"5"},{label:"Option 6",key:"6"},{label:"Submenu",key:"sub3",children:[{label:"Option 7",key:"7"},{label:"Option 8",key:"8"}]}]},{label:"Navigation Three",key:"sub4",icon:e.jsx(i,{name:"alicorn"}),children:[{label:"Option 9",key:"9"},{label:"Option 10",key:"10"},{label:"Option 11",key:"11"},{label:"Option 12",key:"12"}]}];return e.jsx(e.Fragment,{children:e.jsx(I,{title:"Submenus open as pop-ups",children:e.jsx(s,{onClick:a=>{console.log("click",a)},style:{width:256},mode:"vertical",items:l})})})}};var N,w,T;c.parameters=o(n({},c.parameters),{docs:o(n({},(N=c.parameters)==null?void 0:N.docs),{source:n({originalSource:"{}"},(T=(w=c.parameters)==null?void 0:w.docs)==null?void 0:T.source)})});var P,z,D;p.parameters=o(n({},p.parameters),{docs:o(n({},(P=p.parameters)==null?void 0:P.docs),{source:n({originalSource:`{
  args: {
    mode: 'inline'
  }
}`},(D=(z=p.parameters)==null?void 0:z.docs)==null?void 0:D.source)})});var F,H,_;u.parameters=o(n({},u.parameters),{docs:o(n({},(F=u.parameters)==null?void 0:F.docs),{source:n({originalSource:`{
  args: {
    mode: 'horizontal'
  }
}`},(_=(H=u.parameters)==null?void 0:H.docs)==null?void 0:_.source)})});var B,V,$;m.parameters=o(n({},m.parameters),{docs:o(n({},(B=m.parameters)==null?void 0:B.docs),{source:n({originalSource:`{
  args: {
    multiple: true
  }
}`},($=(V=m.parameters)==null?void 0:V.docs)==null?void 0:$.source)})});var R,A,G;y.parameters=o(n({},y.parameters),{docs:o(n({},(R=y.parameters)==null?void 0:R.docs),{source:n({originalSource:`{
  args: {
    expandIcon: props => <Icon name="alicorn" />
  }
}`},(G=(A=y.parameters)==null?void 0:A.docs)==null?void 0:G.source)})});var W,L,q;d.parameters=o(n({},d.parameters),{docs:o(n({},(W=d.parameters)==null?void 0:W.docs),{source:n({originalSource:`{
  args: {
    inlineCollapsed: true
  }
}`},(q=(L=d.parameters)==null?void 0:L.docs)==null?void 0:q.source)})});var J,Q,U;b.parameters=o(n({},b.parameters),{docs:o(n({},(J=b.parameters)==null?void 0:J.docs),{source:n({originalSource:`{
  args: {
    theme: 'dark'
  }
}`},(U=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:U.source)})});var X,Y,Z;k.parameters=o(n({},k.parameters),{docs:o(n({},(X=k.parameters)==null?void 0:X.docs),{source:n({originalSource:`{
  args: {
    style: {
      backgroundColor: '#f0f0f0'
    }
  }
}`},(Z=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:Z.source)})});var ee,ne,le;O.parameters=o(n({},O.parameters),{docs:o(n({},(ee=O.parameters)==null?void 0:ee.docs),{source:n({originalSource:`{
  args: {
    subMenuOpenDelay: 0.2,
    subMenuCloseDelay: 0.2
  }
}`},(le=(ne=O.parameters)==null?void 0:ne.docs)==null?void 0:le.source)})});var oe,ae,te;g.parameters=o(n({},g.parameters),{docs:o(n({},(oe=g.parameters)==null?void 0:oe.docs),{source:n({originalSource:`{
  render: () => {
    const [current, setCurrent] = useState('mail');
    const onClick: IMenuProps['onClick'] = e => {
      console.log('clicked: ', e);
      setCurrent(e.key);
    };
    return <>
        <ExampleStory title="Horizontal top navigation menu">
          <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </ExampleStory>
      </>;
  }
}`},(te=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:te.source)})});var ie,re,se;h.parameters=o(n({},h.parameters),{docs:o(n({},(ie=h.parameters)==null?void 0:ie.docs),{source:n({originalSource:`{
  render: () => {
    const items: IMenuProps['items'] = [{
      label: 'Navigation One',
      key: 'sub1',
      icon: <Icon name="alicorn" />,
      children: [{
        label: 'Item 1',
        key: 'g1',
        children: [{
          label: 'Option 1',
          key: '1'
        }, {
          label: 'Option 2',
          key: '2'
        }],
        type: 'group'
      }, {
        label: 'Item 2',
        key: 'g2',
        children: [{
          label: 'Option 3',
          key: '3'
        }, {
          label: 'Option 4',
          key: '4'
        }],
        type: 'group'
      }]
    }, {
      label: 'Navigation Two',
      key: 'sub2',
      icon: <Icon name="alicorn" />,
      children: [{
        label: 'Option 5',
        key: '5'
      }, {
        label: 'Option 6',
        key: '6'
      }, {
        label: 'Submenu',
        key: 'sub3',
        icon: null,
        children: [{
          label: 'Option 7',
          key: '7'
        }, {
          label: 'Option 8',
          key: '8'
        }]
      }]
    }, {
      type: 'divider'
    }, {
      label: 'Navigation Three',
      key: 'sub4',
      icon: <Icon name="alicorn" />,
      children: [{
        label: 'Option 9',
        key: '9'
      }, {
        label: 'Option 10',
        key: '10'
      }, {
        label: 'Option 11',
        key: '11'
      }, {
        label: 'Option 12',
        key: '12'
      }]
    }, {
      label: 'Group',
      key: 'grp',
      children: [{
        label: 'Option 13',
        key: '13'
      }, {
        label: 'Option 14',
        key: '14'
      }],
      type: 'group'
    }];
    return <>
        <ExampleStory title="Vertical menu with inline submenus">
          <Menu onClick={e => {
          console.log('click ', e);
        }} style={{
          width: 256
        }} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" items={items} />
        </ExampleStory>
      </>;
  }
}`},(se=(re=h.parameters)==null?void 0:re.docs)==null?void 0:se.source)})});var ce,pe,ue;S.parameters=o(n({},S.parameters),{docs:o(n({},(ce=S.parameters)==null?void 0:ce.docs),{source:n({originalSource:`{
  render: () => {
    const items: MenuProps['items'] = [{
      label: 'Option 1',
      key: '1',
      icon: <Icon name="alicorn" />
    }, {
      label: 'Option 2',
      key: '2',
      icon: <Icon name="alicorn" />
    }, {
      label: 'Option 3',
      key: '3',
      icon: <Icon name="alicorn" />
    }, {
      label: 'Navigation One',
      key: 'sub1',
      icon: <Icon name="alicorn" />,
      children: [{
        label: 'Option 5',
        key: '5'
      }, {
        label: 'Option 6',
        key: '6'
      }, {
        label: 'Option 7',
        key: '7'
      }, {
        label: 'Option 8',
        key: '8'
      }]
    }, {
      label: 'Navigation Two',
      key: 'sub2',
      icon: <Icon name="alicorn" />,
      children: [{
        label: 'Option 9',
        key: '9'
      }, {
        label: 'Option 10',
        key: '10'
      }, {
        label: 'Submenu',
        key: 'sub3',
        icon: null,
        children: [{
          label: 'Option 11',
          key: '11'
        }, {
          label: 'Option 12',
          key: '12'
        }]
      }]
    }];
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
    return <>
        <ExampleStory title={<>
              Inline menu could be collapsed. Here is a{' '}
              <a href="https://ant.design/components/layout#components-layout-demo-side" target="_blank" rel="noreferrer">
                complete demo
              </a>{' '}
              with sider layout{' '}
            </>}>
          <div style={{
          width: 256
        }}>
            <Button type="primary" onClick={toggleCollapsed} style={{
            marginBottom: 16
          }}>
              {collapsed ? 'Expand' : 'Collapse'}
            </Button>
            <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline"
          // theme="dark"
          inlineCollapsed={collapsed} items={items} />
          </div>
        </ExampleStory>
      </>;
  }
}`},(ue=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:ue.source)})});var me,ye,de;x.parameters=o(n({},x.parameters),{docs:o(n({},(me=x.parameters)==null?void 0:me.docs),{source:n({originalSource:`{
  render: () => {
    const items: IMenuProps['items'] = [{
      label: 'Navigation One',
      key: 'sub1',
      icon: <Icon name="alicorn" />,
      children: [{
        label: 'Option 1',
        key: '1'
      }, {
        label: 'Option 2',
        key: '2'
      }, {
        label: 'Option 3',
        key: '3'
      }, {
        label: 'Option 4',
        key: '4'
      }]
    }, {
      label: 'Navigation Two',
      key: 'sub2',
      icon: <Icon name="alicorn" />,
      children: [{
        label: 'Option 5',
        key: '5'
      }, {
        label: 'Option 6',
        key: '6'
      }, {
        label: 'Submenu',
        key: 'sub3',
        icon: null,
        children: [{
          label: 'Option 7',
          key: '7'
        }, {
          label: 'Option 8',
          key: '8'
        }]
      }]
    }, {
      label: 'Navigation Three',
      key: 'sub4',
      icon: <Icon name="alicorn" />,
      children: [{
        label: 'Option 9',
        key: '9'
      }, {
        label: 'Option 10',
        key: '10'
      }, {
        label: 'Option 11',
        key: '11'
      }, {
        label: 'Option 12',
        key: '12'
      }]
    }];
    const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    const [openKeys, setOpenKeys] = useState(['sub1']);
    const onOpenChange: MenuProps['onOpenChange'] = keys => {
      const latestOpenKey = keys.find(key => !openKeys.includes(key));
      if (latestOpenKey && !rootSubmenuKeys.includes(latestOpenKey)) {
        setOpenKeys(keys);
      } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
    };
    return <>
        <ExampleStory title="Click the menu and you will see that all the other menus gets collapsed to keep the entire menu compact">
          <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{
          width: 256
        }} items={items} />
        </ExampleStory>
      </>;
  }
}`},(de=(ye=x.parameters)==null?void 0:ye.docs)==null?void 0:de.source)})});var be,ke,Oe;C.parameters=o(n({},C.parameters),{docs:o(n({},(be=C.parameters)==null?void 0:be.docs),{source:n({originalSource:`{
  render: () => {
    const items: IMenuProps['items'] = [{
      label: 'Navigation One',
      key: 'sub1',
      icon: <Icon name="alicorn" />,
      children: [{
        label: 'Item 1',
        key: 'Item 1 Key',
        children: [{
          label: 'Option 1',
          key: '1'
        }, {
          label: 'Option 2',
          key: '2'
        }],
        type: 'group'
      }, {
        label: 'Item 2',
        key: 'Item 2 Key',
        children: [{
          label: 'Option 3',
          key: '3'
        }, {
          label: 'Option 4',
          key: '4'
        }],
        type: 'group'
      }]
    }, {
      label: 'Navigation Two',
      key: 'sub2',
      icon: <Icon name="alicorn" />,
      children: [{
        label: 'Option 5',
        key: '5'
      }, {
        label: 'Option 6',
        key: '6'
      }, {
        label: 'Submenu',
        key: 'sub3',
        children: [{
          label: 'Option 7',
          key: '7'
        }, {
          label: 'Option 8',
          key: '8'
        }]
      }]
    }, {
      label: 'Navigation Three',
      key: 'sub4',
      icon: <Icon name="alicorn" />,
      children: [{
        label: 'Option 9',
        key: '9'
      }, {
        label: 'Option 10',
        key: '10'
      }, {
        label: 'Option 11',
        key: '11'
      }, {
        label: 'Option 12',
        key: '12'
      }]
    }];
    return <>
        <ExampleStory title="Submenus open as pop-ups">
          <Menu onClick={e => {
          console.log('click', e);
        }} style={{
          width: 256
        }} mode="vertical" items={items} />
        </ExampleStory>
      </>;
  }
}`},(Oe=(ke=C.parameters)==null?void 0:ke.docs)==null?void 0:Oe.source)})});const Ke=["Primary","Inline","Horizontal","MultipleSelection","CustomExpandIcon","InlineCollapsedState","Dark","CustomStyle","WithSubMenuDelay","ExampleHorizontalTop","ExampleVerticalInline","ExampleCollapsable","ExampleOpenCurrentSubmenu","ExampleVerticalMenu"],He=Object.freeze(Object.defineProperty({__proto__:null,CustomExpandIcon:y,CustomStyle:k,Dark:b,ExampleCollapsable:S,ExampleHorizontalTop:g,ExampleOpenCurrentSubmenu:x,ExampleVerticalInline:h,ExampleVerticalMenu:C,Horizontal:u,Inline:p,InlineCollapsedState:d,MultipleSelection:m,Primary:c,WithSubMenuDelay:O,__namedExportsOrder:Ke,default:fe},Symbol.toStringTag,{value:"Module"}));export{He as M,fe as m};
