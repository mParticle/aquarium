import{j as e,cr as i,I as n,G as I,i as M}from"./iframe-CLx-ETHJ.js";import{E as x}from"./ExampleStory-B6BzQEKb.js";const j=[{label:"Navigation One",key:"mail"},{label:"Navigation Two",key:"app",disabled:!0},{label:"Navigation Three - Submenu",key:"SubMenu",children:[{type:"group",label:"Item 1",children:[{label:"Option 1",key:"setting:1"},{label:"Option 2",key:"setting:2"}]},{type:"group",label:"Item 2",children:[{label:"Option 3",key:"setting:3"},{label:"Option 4",key:"setting:4"}]}]},{label:"Navigation Four - Link",key:"alipay"}],E={title:"Experimental/Navigation/Menu",component:l=>e.jsxs(e.Fragment,{children:[" ",e.jsxs(i,{...l,children:[" ",l.children," "]})]}),args:{children:e.jsx(e.Fragment,{children:"Button"}),items:j,defaultOpenKeys:[],defaultSelectedKeys:[],expandIcon:void 0,forceSubMenuRender:!1,inlineCollapsed:!1,inlineIndent:24,mode:"vertical",multiple:!1,overflowedIndicator:e.jsx(e.Fragment,{children:"..."}),selectable:!0,selectedKeys:["mail"],style:void 0,subMenuCloseDelay:.1,subMenuOpenDelay:0,theme:"light",triggerSubMenuAction:"hover",onClick:({item:l})=>{alert(`Clicked on ${String(l)}`)},onDeselect:({item:l})=>{alert(`Deselected ${String(l)}`)},onOpenChange:l=>{console.log(`Opened or Closed Sub-menus: ${l.join(", ")}`)},onSelect:({item:l})=>{alert(`Selected ${String(l)}`)}},argTypes:{mode:{control:"select",options:["vertical","horizontal","inline"]},theme:{control:"select",options:["light","dark"]},triggerSubMenuAction:{control:"select",options:["hover","click"]}}},r={},s={args:{mode:"inline"}},c={args:{mode:"horizontal"}},p={args:{multiple:!0}},u={args:{expandIcon:l=>e.jsx(n,{name:"alicorn"})}},y={args:{inlineCollapsed:!0}},m={args:{theme:"dark"}},d={args:{style:{backgroundColor:"#f0f0f0"}}},b={args:{subMenuOpenDelay:.2,subMenuCloseDelay:.2}},k={render:()=>{const[l,o]=I.useState("mail"),t=a=>{console.log("clicked: ",a),o(a.key)};return e.jsx(e.Fragment,{children:e.jsx(x,{title:"Horizontal top navigation menu",children:e.jsx(i,{onClick:t,selectedKeys:[l],mode:"horizontal",items:j})})})}},O={render:()=>{const l=[{label:"Navigation One",key:"sub1",icon:e.jsx(n,{name:"alicorn"}),children:[{label:"Item 1",key:"g1",children:[{label:"Option 1",key:"1"},{label:"Option 2",key:"2"}],type:"group"},{label:"Item 2",key:"g2",children:[{label:"Option 3",key:"3"},{label:"Option 4",key:"4"}],type:"group"}]},{label:"Navigation Two",key:"sub2",icon:e.jsx(n,{name:"alicorn"}),children:[{label:"Option 5",key:"5"},{label:"Option 6",key:"6"},{label:"Submenu",key:"sub3",icon:null,children:[{label:"Option 7",key:"7"},{label:"Option 8",key:"8"}]}]},{type:"divider"},{label:"Navigation Three",key:"sub4",icon:e.jsx(n,{name:"alicorn"}),children:[{label:"Option 9",key:"9"},{label:"Option 10",key:"10"},{label:"Option 11",key:"11"},{label:"Option 12",key:"12"}]},{label:"Group",key:"grp",children:[{label:"Option 13",key:"13"},{label:"Option 14",key:"14"}],type:"group"}];return e.jsx(e.Fragment,{children:e.jsx(x,{title:"Vertical menu with inline submenus",children:e.jsx(i,{onClick:o=>{console.log("click ",o)},style:{width:256},defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],mode:"inline",items:l})})})}},g={render:()=>{const l=[{label:"Option 1",key:"1",icon:e.jsx(n,{name:"alicorn"})},{label:"Option 2",key:"2",icon:e.jsx(n,{name:"alicorn"})},{label:"Option 3",key:"3",icon:e.jsx(n,{name:"alicorn"})},{label:"Navigation One",key:"sub1",icon:e.jsx(n,{name:"alicorn"}),children:[{label:"Option 5",key:"5"},{label:"Option 6",key:"6"},{label:"Option 7",key:"7"},{label:"Option 8",key:"8"}]},{label:"Navigation Two",key:"sub2",icon:e.jsx(n,{name:"alicorn"}),children:[{label:"Option 9",key:"9"},{label:"Option 10",key:"10"},{label:"Submenu",key:"sub3",icon:null,children:[{label:"Option 11",key:"11"},{label:"Option 12",key:"12"}]}]}],[o,t]=I.useState(!1),a=()=>{t(!o)};return e.jsx(e.Fragment,{children:e.jsx(x,{title:e.jsxs(e.Fragment,{children:["Inline menu could be collapsed. Here is a"," ",e.jsx("a",{href:"https://ant.design/components/layout#components-layout-demo-side",target:"_blank",rel:"noreferrer",children:"complete demo"})," ","with sider layout"," "]}),children:e.jsxs("div",{style:{width:256},children:[e.jsx(M,{type:"primary",onClick:a,style:{marginBottom:16},children:o?"Expand":"Collapse"}),e.jsx(i,{defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],mode:"inline",inlineCollapsed:o,items:l})]})})})}},h={render:()=>{const l=[{label:"Navigation One",key:"sub1",icon:e.jsx(n,{name:"alicorn"}),children:[{label:"Option 1",key:"1"},{label:"Option 2",key:"2"},{label:"Option 3",key:"3"},{label:"Option 4",key:"4"}]},{label:"Navigation Two",key:"sub2",icon:e.jsx(n,{name:"alicorn"}),children:[{label:"Option 5",key:"5"},{label:"Option 6",key:"6"},{label:"Submenu",key:"sub3",icon:null,children:[{label:"Option 7",key:"7"},{label:"Option 8",key:"8"}]}]},{label:"Navigation Three",key:"sub4",icon:e.jsx(n,{name:"alicorn"}),children:[{label:"Option 9",key:"9"},{label:"Option 10",key:"10"},{label:"Option 11",key:"11"},{label:"Option 12",key:"12"}]}],o=["sub1","sub2","sub4"],[t,a]=I.useState(["sub1"]),f=v=>{const C=v.find(K=>!t.includes(K));C&&!o.includes(C)?a(v):a(C?[C]:[])};return e.jsx(e.Fragment,{children:e.jsx(x,{title:"Click the menu and you will see that all the other menus gets collapsed to keep the entire menu compact",children:e.jsx(i,{mode:"inline",openKeys:t,onOpenChange:f,style:{width:256},items:l})})})}},S={render:()=>{const l=[{label:"Navigation One",key:"sub1",icon:e.jsx(n,{name:"alicorn"}),children:[{label:"Item 1",key:"Item 1 Key",children:[{label:"Option 1",key:"1"},{label:"Option 2",key:"2"}],type:"group"},{label:"Item 2",key:"Item 2 Key",children:[{label:"Option 3",key:"3"},{label:"Option 4",key:"4"}],type:"group"}]},{label:"Navigation Two",key:"sub2",icon:e.jsx(n,{name:"alicorn"}),children:[{label:"Option 5",key:"5"},{label:"Option 6",key:"6"},{label:"Submenu",key:"sub3",children:[{label:"Option 7",key:"7"},{label:"Option 8",key:"8"}]}]},{label:"Navigation Three",key:"sub4",icon:e.jsx(n,{name:"alicorn"}),children:[{label:"Option 9",key:"9"},{label:"Option 10",key:"10"},{label:"Option 11",key:"11"},{label:"Option 12",key:"12"}]}];return e.jsx(e.Fragment,{children:e.jsx(x,{title:"Submenus open as pop-ups",children:e.jsx(i,{onClick:o=>{console.log("click",o)},style:{width:256},mode:"vertical",items:l})})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'inline'
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'horizontal'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: true
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    expandIcon: _props => <Icon name="alicorn" />
  }
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    inlineCollapsed: true
  }
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'dark'
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    style: {
      backgroundColor: '#f0f0f0'
    }
  }
}`,...d.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    subMenuOpenDelay: 0.2,
    subMenuCloseDelay: 0.2
  }
}`,...b.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};const N=["Primary","Inline","Horizontal","MultipleSelection","CustomExpandIcon","InlineCollapsedState","Dark","CustomStyle","WithSubMenuDelay","ExampleHorizontalTop","ExampleVerticalInline","ExampleCollapsable","ExampleOpenCurrentSubmenu","ExampleVerticalMenu"],z=Object.freeze(Object.defineProperty({__proto__:null,CustomExpandIcon:u,CustomStyle:d,Dark:m,ExampleCollapsable:g,ExampleHorizontalTop:k,ExampleOpenCurrentSubmenu:h,ExampleVerticalInline:O,ExampleVerticalMenu:S,Horizontal:c,Inline:s,InlineCollapsedState:y,MultipleSelection:p,Primary:r,WithSubMenuDelay:b,__namedExportsOrder:N,default:E},Symbol.toStringTag,{value:"Module"}));export{z as M,E as m};
