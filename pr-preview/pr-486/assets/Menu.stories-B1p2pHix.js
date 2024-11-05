var xe=Object.defineProperty,Se=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var Ie=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var M=(l,a,t)=>a in l?xe(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,n=(l,a)=>{for(var t in a||(a={}))Ie.call(a,t)&&M(l,t,a[t]);if(E)for(var t of E(a))ve.call(a,t)&&M(l,t,a[t]);return l},o=(l,a)=>Se(l,Ce(a));import{j as e}from"./jsx-runtime-BcCOBRXo.js";import{r as K}from"./index-CNk6hRaE.js";import{ab as s,I as i,k as je}from"./GlobalNavigation-DteW8lcU.js";import{E as c}from"./ExampleStory--xj7BR01.js";import"./_baseClone-DBzvlRjn.js";import"./LightTheme-BtoaoHMG.js";import"./row-C8Fpq1AK.js";import"./useToken-BceXVVM_.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";const ge=[{label:"Navigation One",key:"mail"},{label:"Navigation Two",key:"app",disabled:!0},{label:"Navigation Three - Submenu",key:"SubMenu",children:[{type:"group",label:"Item 1",children:[{label:"Option 1",key:"setting:1"},{label:"Option 2",key:"setting:2"}]},{type:"group",label:"Item 2",children:[{label:"Option 3",key:"setting:3"},{label:"Option 4",key:"setting:4"}]}]},{label:"Navigation Four - Link",key:"alipay"}],$e={title:"Components/Navigation/Menu",component:l=>e.jsxs(e.Fragment,{children:[" ",e.jsxs(s,o(n({},l),{children:[" ",l.children," "]}))]}),args:{children:e.jsx(e.Fragment,{children:"Button"}),items:ge,defaultOpenKeys:[],defaultSelectedKeys:[],expandIcon:void 0,forceSubMenuRender:!1,inlineCollapsed:!1,inlineIndent:24,mode:"vertical",multiple:!1,overflowedIndicator:e.jsx(e.Fragment,{children:"..."}),selectable:!0,selectedKeys:["mail"],style:void 0,subMenuCloseDelay:.1,subMenuOpenDelay:0,theme:"light",triggerSubMenuAction:"hover",onClick:({item:l,key:a,keyPath:t,domEvent:r})=>{alert(`Clicked on ${String(l)}`)},onDeselect:({item:l,key:a,keyPath:t,selectedKeys:r,domEvent:j})=>{alert(`Deselected ${String(l)}`)},onOpenChange:l=>{console.log(`Opened or Closed Sub-menus: ${l.join(", ")}`)},onSelect:({item:l,key:a,keyPath:t,selectedKeys:r,domEvent:j})=>{alert(`Selected ${String(l)}`)}},argTypes:{mode:{control:"select",options:["vertical","horizontal","inline"]},theme:{control:"select",options:["light","dark"]},triggerSubMenuAction:{control:"select",options:["hover","click"]}}},u={},m={args:{mode:"inline"}},y={args:{mode:"horizontal"}},d={args:{multiple:!0}},b={args:{expandIcon:l=>e.jsx(i,{name:"alicorn"})}},k={args:{inlineCollapsed:!0}},O={args:{theme:"dark"}},g={args:{style:{backgroundColor:"#f0f0f0"}}},h={args:{subMenuOpenDelay:.2,subMenuCloseDelay:.2}},x={render:()=>{const[l,a]=K.useState("mail"),t=r=>{console.log("clicked: ",r),a(r.key)};return e.jsx(e.Fragment,{children:e.jsx(c,{title:"Horizontal top navigation menu",children:e.jsx(s,{onClick:t,selectedKeys:[l],mode:"horizontal",items:ge})})})}},S={render:()=>{const l=[{label:"Navigation One",key:"sub1",icon:e.jsx(i,{name:"alicorn"}),children:[{label:"Item 1",key:"g1",children:[{label:"Option 1",key:"1"},{label:"Option 2",key:"2"}],type:"group"},{label:"Item 2",key:"g2",children:[{label:"Option 3",key:"3"},{label:"Option 4",key:"4"}],type:"group"}]},{label:"Navigation Two",key:"sub2",icon:e.jsx(i,{name:"alicorn"}),children:[{label:"Option 5",key:"5"},{label:"Option 6",key:"6"},{label:"Submenu",key:"sub3",icon:null,children:[{label:"Option 7",key:"7"},{label:"Option 8",key:"8"}]}]},{type:"divider"},{label:"Navigation Three",key:"sub4",icon:e.jsx(i,{name:"alicorn"}),children:[{label:"Option 9",key:"9"},{label:"Option 10",key:"10"},{label:"Option 11",key:"11"},{label:"Option 12",key:"12"}]},{label:"Group",key:"grp",children:[{label:"Option 13",key:"13"},{label:"Option 14",key:"14"}],type:"group"}];return e.jsx(e.Fragment,{children:e.jsx(c,{title:"Vertical menu with inline submenus",children:e.jsx(s,{onClick:a=>{console.log("click ",a)},style:{width:256},defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],mode:"inline",items:l})})})}},C={render:()=>{const l=[{label:"Option 1",key:"1",icon:e.jsx(i,{name:"alicorn"})},{label:"Option 2",key:"2",icon:e.jsx(i,{name:"alicorn"})},{label:"Option 3",key:"3",icon:e.jsx(i,{name:"alicorn"})},{label:"Navigation One",key:"sub1",icon:e.jsx(i,{name:"alicorn"}),children:[{label:"Option 5",key:"5"},{label:"Option 6",key:"6"},{label:"Option 7",key:"7"},{label:"Option 8",key:"8"}]},{label:"Navigation Two",key:"sub2",icon:e.jsx(i,{name:"alicorn"}),children:[{label:"Option 9",key:"9"},{label:"Option 10",key:"10"},{label:"Submenu",key:"sub3",icon:null,children:[{label:"Option 11",key:"11"},{label:"Option 12",key:"12"}]}]}],[a,t]=K.useState(!1),r=()=>{t(!a)};return e.jsx(e.Fragment,{children:e.jsx(c,{title:e.jsxs(e.Fragment,{children:["Inline menu could be collapsed. Here is a"," ",e.jsx("a",{href:"https://ant.design/components/layout#components-layout-demo-side",target:"_blank",rel:"noreferrer",children:"complete demo"})," ","with sider layout"," "]}),children:e.jsxs("div",{style:{width:256},children:[e.jsx(je,{type:"primary",onClick:r,style:{marginBottom:16},children:a?"Expand":"Collapse"}),e.jsx(s,{defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],mode:"inline",inlineCollapsed:a,items:l})]})})})}},I={render:()=>{const l=[{label:"Navigation One",key:"sub1",icon:e.jsx(i,{name:"alicorn"}),children:[{label:"Option 1",key:"1"},{label:"Option 2",key:"2"},{label:"Option 3",key:"3"},{label:"Option 4",key:"4"}]},{label:"Navigation Two",key:"sub2",icon:e.jsx(i,{name:"alicorn"}),children:[{label:"Option 5",key:"5"},{label:"Option 6",key:"6"},{label:"Submenu",key:"sub3",icon:null,children:[{label:"Option 7",key:"7"},{label:"Option 8",key:"8"}]}]},{label:"Navigation Three",key:"sub4",icon:e.jsx(i,{name:"alicorn"}),children:[{label:"Option 9",key:"9"},{label:"Option 10",key:"10"},{label:"Option 11",key:"11"},{label:"Option 12",key:"12"}]}],a=["sub1","sub2","sub4"],[t,r]=K.useState(["sub1"]),j=f=>{const p=f.find(he=>!t.includes(he));p&&!a.includes(p)?r(f):r(p?[p]:[])};return e.jsx(e.Fragment,{children:e.jsx(c,{title:"Click the menu and you will see that all the other menus gets collapsed to keep the entire menu compact",children:e.jsx(s,{mode:"inline",openKeys:t,onOpenChange:j,style:{width:256},items:l})})})}},v={render:()=>{const l=[{label:"Navigation One",key:"sub1",icon:e.jsx(i,{name:"alicorn"}),children:[{label:"Item 1",key:"Item 1 Key",children:[{label:"Option 1",key:"1"},{label:"Option 2",key:"2"}],type:"group"},{label:"Item 2",key:"Item 2 Key",children:[{label:"Option 3",key:"3"},{label:"Option 4",key:"4"}],type:"group"}]},{label:"Navigation Two",key:"sub2",icon:e.jsx(i,{name:"alicorn"}),children:[{label:"Option 5",key:"5"},{label:"Option 6",key:"6"},{label:"Submenu",key:"sub3",children:[{label:"Option 7",key:"7"},{label:"Option 8",key:"8"}]}]},{label:"Navigation Three",key:"sub4",icon:e.jsx(i,{name:"alicorn"}),children:[{label:"Option 9",key:"9"},{label:"Option 10",key:"10"},{label:"Option 11",key:"11"},{label:"Option 12",key:"12"}]}];return e.jsx(e.Fragment,{children:e.jsx(c,{title:"Submenus open as pop-ups",children:e.jsx(s,{onClick:a=>{console.log("click",a)},style:{width:256},mode:"vertical",items:l})})})}};var N,w,T;u.parameters=o(n({},u.parameters),{docs:o(n({},(N=u.parameters)==null?void 0:N.docs),{source:n({originalSource:"{}"},(T=(w=u.parameters)==null?void 0:w.docs)==null?void 0:T.source)})});var D,z,P;m.parameters=o(n({},m.parameters),{docs:o(n({},(D=m.parameters)==null?void 0:D.docs),{source:n({originalSource:`{
  args: {
    mode: 'inline'
  }
}`},(P=(z=m.parameters)==null?void 0:z.docs)==null?void 0:P.source)})});var F,H,B;y.parameters=o(n({},y.parameters),{docs:o(n({},(F=y.parameters)==null?void 0:F.docs),{source:n({originalSource:`{
  args: {
    mode: 'horizontal'
  }
}`},(B=(H=y.parameters)==null?void 0:H.docs)==null?void 0:B.source)})});var V,_,$;d.parameters=o(n({},d.parameters),{docs:o(n({},(V=d.parameters)==null?void 0:V.docs),{source:n({originalSource:`{
  args: {
    multiple: true
  }
}`},($=(_=d.parameters)==null?void 0:_.docs)==null?void 0:$.source)})});var A,G,R;b.parameters=o(n({},b.parameters),{docs:o(n({},(A=b.parameters)==null?void 0:A.docs),{source:n({originalSource:`{
  args: {
    expandIcon: props => <Icon name="alicorn" />
  }
}`},(R=(G=b.parameters)==null?void 0:G.docs)==null?void 0:R.source)})});var W,L,q;k.parameters=o(n({},k.parameters),{docs:o(n({},(W=k.parameters)==null?void 0:W.docs),{source:n({originalSource:`{
  args: {
    inlineCollapsed: true
  }
}`},(q=(L=k.parameters)==null?void 0:L.docs)==null?void 0:q.source)})});var J,Q,U;O.parameters=o(n({},O.parameters),{docs:o(n({},(J=O.parameters)==null?void 0:J.docs),{source:n({originalSource:`{
  args: {
    theme: 'dark'
  }
}`},(U=(Q=O.parameters)==null?void 0:Q.docs)==null?void 0:U.source)})});var X,Y,Z;g.parameters=o(n({},g.parameters),{docs:o(n({},(X=g.parameters)==null?void 0:X.docs),{source:n({originalSource:`{
  args: {
    style: {
      backgroundColor: '#f0f0f0'
    }
  }
}`},(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source)})});var ee,ne,le;h.parameters=o(n({},h.parameters),{docs:o(n({},(ee=h.parameters)==null?void 0:ee.docs),{source:n({originalSource:`{
  args: {
    subMenuOpenDelay: 0.2,
    subMenuCloseDelay: 0.2
  }
}`},(le=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:le.source)})});var oe,ae,te;x.parameters=o(n({},x.parameters),{docs:o(n({},(oe=x.parameters)==null?void 0:oe.docs),{source:n({originalSource:`{
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
}`},(te=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:te.source)})});var ie,re,se;S.parameters=o(n({},S.parameters),{docs:o(n({},(ie=S.parameters)==null?void 0:ie.docs),{source:n({originalSource:`{
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
}`},(se=(re=S.parameters)==null?void 0:re.docs)==null?void 0:se.source)})});var ce,pe,ue;C.parameters=o(n({},C.parameters),{docs:o(n({},(ce=C.parameters)==null?void 0:ce.docs),{source:n({originalSource:`{
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
}`},(ue=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:ue.source)})});var me,ye,de;I.parameters=o(n({},I.parameters),{docs:o(n({},(me=I.parameters)==null?void 0:me.docs),{source:n({originalSource:`{
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
}`},(de=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:de.source)})});var be,ke,Oe;v.parameters=o(n({},v.parameters),{docs:o(n({},(be=v.parameters)==null?void 0:be.docs),{source:n({originalSource:`{
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
}`},(Oe=(ke=v.parameters)==null?void 0:ke.docs)==null?void 0:Oe.source)})});const Ae=["Primary","Inline","Horizontal","MultipleSelection","CustomExpandIcon","InlineCollapsedState","Dark","CustomStyle","WithSubMenuDelay","ExampleHorizontalTop","ExampleVerticalInline","ExampleCollapsable","ExampleOpenCurrentSubmenu","ExampleVerticalMenu"];export{b as CustomExpandIcon,g as CustomStyle,O as Dark,C as ExampleCollapsable,x as ExampleHorizontalTop,I as ExampleOpenCurrentSubmenu,S as ExampleVerticalInline,v as ExampleVerticalMenu,y as Horizontal,m as Inline,k as InlineCollapsedState,d as MultipleSelection,u as Primary,h as WithSubMenuDelay,Ae as __namedExportsOrder,$e as default};
