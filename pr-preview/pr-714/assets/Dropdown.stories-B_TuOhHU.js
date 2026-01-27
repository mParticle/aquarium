import{j as e,a7 as n,i as r,I as l,S as i,y as I,x as z,T as G,u as N}from"./iframe-D7Ys59RG.js";import{E as c}from"./ExampleStory-KHWp24Wn.js";import{t as H}from"./index-SIBQya2I.js";const W={items:[{key:"1",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com",children:"1st menu item"})},{key:"2",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com",children:"2nd menu item (disabled)"}),icon:e.jsx(l,{name:"alicorn"}),disabled:!0},{key:"3",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com",children:"3rd menu item (disabled)"}),disabled:!0},{key:"4",danger:!0,label:"a danger item"}]},Y={title:"Components/Not Prod Ready/Navigation/Dropdown",component:n,args:{children:"normal",menu:W,arrow:!1,autoAdjustOverflow:!0,autoFocus:!1,disabled:!1,destroyPopupOnHide:!1,dropdownRender:void 0,overlayClassName:void 0,overlayStyle:void 0,placement:"bottomLeft",trigger:["hover"]},argTypes:{children:{options:["normal"],mapping:{normal:e.jsx(r,{children:"Dropdown Copy"})}},placement:{control:"select",options:["bottom","bottomLeft","bottomRight","top","topLeft","topRight"]}}},p={},h={args:{arrow:!0}},w={args:{disabled:!0}},b={args:{dropdownRender:t=>e.jsx("div",{children:" Custom Components Go Here"})}},g={args:{autoAdjustOverflow:!1}},y={args:{destroyPopupOnHide:!0}},k={args:{overlayStyle:{color:"red"}}},x={args:{placement:"topRight"}},f={args:{trigger:["click"]}},j={args:{open:!0}},S={args:{onOpenChange:(t,o)=>{alert("Dropdown Open: "+t)}}},C={render:()=>{const t=[{key:"1",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com",children:"1st menu item"})},{key:"2",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com",children:"2nd menu item (disabled)"}),icon:e.jsx(l,{name:"alicorn"}),disabled:!0},{key:"3",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com",children:"3rd menu item (disabled)"}),disabled:!0},{key:"4",danger:!0,label:"a danger item"}];return e.jsx(c,{title:"The most basic dropdown menu.",children:e.jsx(n,{menu:{items:t},children:e.jsx("a",{onClick:o=>{o.preventDefault()},children:e.jsxs(i,{children:["Hover me",e.jsx(l,{name:"alicorn"})]})})})})}},D={render:()=>{const t=[{key:"1",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com",children:"1st menu item"})},{key:"2",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com",children:"2nd menu item"})},{key:"3",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com",children:"3rd menu item"})}];return e.jsx(c,{title:"Support 6 placements.",children:e.jsxs(i,{orientation:"vertical",children:[e.jsxs(i,{wrap:!0,children:[e.jsx(n,{menu:{items:t},placement:"bottomLeft",children:e.jsx(r,{children:"bottomLeft"})}),e.jsx(n,{menu:{items:t},placement:"bottom",children:e.jsx(r,{children:"bottom"})}),e.jsx(n,{menu:{items:t},placement:"bottomRight",children:e.jsx(r,{children:"bottomRight"})})]}),e.jsxs(i,{wrap:!0,children:[e.jsx(n,{menu:{items:t},placement:"topLeft",children:e.jsx(r,{children:"topLeft"})}),e.jsx(n,{menu:{items:t},placement:"top",children:e.jsx(r,{children:"top"})}),e.jsx(n,{menu:{items:t},placement:"topRight",children:e.jsx(r,{children:"topRight"})})]})]})})}},B={render:()=>{const t=[{key:"1",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com",children:"1st menu item"})},{key:"2",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com",children:"2nd menu item"})},{key:"3",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com",children:"3rd menu item"})}];return e.jsxs(c,{title:"You could display an arrow.",children:[e.jsx(n,{menu:{items:t},placement:"bottomLeft",arrow:!0,children:e.jsx(r,{children:"bottomLeft"})}),e.jsx(n,{menu:{items:t},placement:"bottom",arrow:!0,children:e.jsx(r,{children:"bottom"})}),e.jsx(n,{menu:{items:t},placement:"bottomRight",arrow:!0,children:e.jsx(r,{children:"bottomRight"})}),e.jsx("br",{}),e.jsx(n,{menu:{items:t},placement:"topLeft",arrow:!0,children:e.jsx(r,{children:"topLeft"})}),e.jsx(n,{menu:{items:t},placement:"top",arrow:!0,children:e.jsx(r,{children:"top"})}),e.jsx(n,{menu:{items:t},placement:"topRight",arrow:!0,children:e.jsx(r,{children:"topRight"})})]})}},v={render:()=>{const t=[{key:"1",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com",children:"1st menu item"})},{key:"2",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com",children:"2nd menu item"})},{key:"3",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com",children:"3rd menu item"})}];return e.jsxs(c,{title:"By specifying arrow prop with { pointAtCenter: true }, the arrow will point to the center of the target element.",children:[e.jsx(n,{menu:{items:t},placement:"bottomLeft",arrow:{pointAtCenter:!0},children:e.jsx(r,{children:"bottomLeft"})}),e.jsx(n,{menu:{items:t},placement:"bottom",arrow:{pointAtCenter:!0},children:e.jsx(r,{children:"bottom"})}),e.jsx(n,{menu:{items:t},placement:"bottomRight",arrow:{pointAtCenter:!0},children:e.jsx(r,{children:"bottomRight"})}),e.jsx("br",{}),e.jsx(n,{menu:{items:t},placement:"topLeft",arrow:{pointAtCenter:!0},children:e.jsx(r,{children:"topLeft"})}),e.jsx(n,{menu:{items:t},placement:"top",arrow:{pointAtCenter:!0},children:e.jsx(r,{children:"top"})}),e.jsx(n,{menu:{items:t},placement:"topRight",arrow:{pointAtCenter:!0},children:e.jsx(r,{children:"topRight"})})]})}},E={render:()=>{const t=({key:s})=>{alert(`Click on item ${s}`)},o=[{label:"1st menu item",key:"1"},{label:"2nd menu item",key:"2"},{label:"3rd menu item",key:"3"}];return e.jsx(c,{title:"An event will be triggered when you click menu items, in which you can make different operations according to item's key.",children:e.jsx(n,{menu:{items:o,onClick:t},children:e.jsx("a",{onClick:s=>{s.preventDefault()},children:e.jsxs(i,{children:["Hover me, Click menu item",e.jsx(l,{name:"alicorn"})]})})})})}},R={render:()=>{const{useToken:t}=H,o=[{key:"1",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com",children:"1st menu item"})},{key:"2",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com",children:"2nd menu item (disabled)"}),disabled:!0},{key:"3",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com",children:"3rd menu item (disabled)"}),disabled:!0}],{token:s}=t(),m={backgroundColor:s.colorBgElevated,borderRadius:s.borderRadiusLG,boxShadow:s.boxShadowSecondary},d={boxShadow:"none"};return e.jsx(c,{title:"Customize the dropdown menu via dropdownRender. If you don't need the Menu content, use the Popover component directly.",children:e.jsx(n,{menu:{items:o},dropdownRender:a=>e.jsxs("div",{style:m,children:[I.cloneElement(a,{style:d}),e.jsx(z,{style:{margin:0}}),e.jsx(i,{style:{padding:8},children:e.jsx(r,{type:"primary",children:"Click me!"})})]}),children:e.jsx("a",{onClick:a=>{a.preventDefault()},children:e.jsxs(i,{children:["Hover me",e.jsx(l,{name:"alicorn"})]})})})})}},L={render:()=>{const[t,o]=I.useState(!1),s=a=>{a.key==="3"&&o(!1)},m=(a,u)=>{(u.source==="trigger"||a)&&o(a)},d=[{label:"Clicking me will not close the menu.",key:"1"},{label:"Clicking me will not close the menu also.",key:"2"},{label:"Clicking me will close the menu.",key:"3"}];return e.jsx(c,{title:"The default is to close the menu when you click on menu items, this feature can be turned off.",children:e.jsx(n,{menu:{items:d,onClick:s},onOpenChange:m,open:t,children:e.jsx("a",{onClick:a=>{a.preventDefault()},children:e.jsxs(i,{children:["Hover me",e.jsx(l,{name:"alicorn"})]})})})})}},_={render:()=>{const t=[{label:"Submit and continue",key:"1"}],[o,s]=I.useState([]),m=d=>{s(a=>{const u=[...a];return u[d]=!0,u}),setTimeout(()=>{s(a=>{const u=[...a];return u[d]=!1,u})},2e3)};return e.jsx(c,{title:"A loading indicator can be added to a button by setting the loading property on the Dropdown.Button.",children:e.jsxs(i,{orientation:"vertical",children:[e.jsx(n.Button,{type:"primary",loading:!0,menu:{items:t},children:"Submit"}),e.jsx(n.Button,{type:"primary",size:"small",loading:!0,menu:{items:t},children:"Submit"}),e.jsx(n.Button,{type:"primary",loading:o[0],menu:{items:t},onClick:()=>{m(0)},children:"Submit"}),e.jsx(n.Button,{icon:e.jsx(l,{name:"alicorn"}),loading:o[1],menu:{items:t},onClick:()=>{m(1)},children:"Submit"})]})})}},P={render:()=>{const t=[{key:"1",label:"Item 1"},{key:"2",label:"Item 2"},{key:"3",label:"Item 3"}];return e.jsx(c,{title:"Configure the selectable property in menu to enable selectability.",children:e.jsx(n,{menu:{items:t,selectable:!0,defaultSelectedKeys:["3"]},children:e.jsx(G.Link,{children:e.jsxs(i,{children:["Selectable",e.jsx(l,{name:"alicorn"})]})})})})}},O={render:()=>{const t=[{label:"1st menu item",key:"1"},{label:"2nd menu item",key:"2"},{label:"3rd menu item",key:"3"}],{token:{colorBgLayout:o,colorTextTertiary:s}}=H.useToken();return e.jsx(c,{title:"The default trigger mode is hover, you can change it to contextMenu. The pop-up menu position will follow the right-click position.",children:e.jsx(n,{menu:{items:t},trigger:["contextMenu"],children:e.jsx("div",{style:{color:s,background:o,height:200,textAlign:"center",lineHeight:"200px"},children:"Right Click on here"})})})}},T={render:()=>{const t=[{key:"1",type:"group",label:"Group title",children:[{key:"1-1",label:"1st menu item"},{key:"1-2",label:"2nd menu item"}]},{key:"2",label:"sub menu",children:[{key:"2-1",label:"3rd menu item"},{key:"2-2",label:"4th menu item"}]},{key:"3",label:"disabled sub menu",disabled:!0,children:[{key:"3-1",label:"5d menu item"},{key:"3-2",label:"6th menu item"}]}];return e.jsx(c,{title:"The menu has multiple levels.",children:e.jsx(n,{menu:{items:t},children:e.jsx("a",{onClick:o=>{o.preventDefault()},children:e.jsxs(i,{children:["Cascading menu",e.jsx(l,{name:"alicorn"})]})})})})}},A={render:()=>{const t=d=>{alert("Click on left button."),console.log("click left button",d)},o=d=>{alert("Click on menu item."),console.log("click",d)},m={items:[{label:"1st menu item",key:"1",icon:e.jsx(l,{name:"users"})},{label:"2nd menu item",key:"2",icon:e.jsx(l,{name:"users"})},{label:"3rd menu item",key:"3",icon:e.jsx(l,{name:"users"}),danger:!0},{label:"4rd menu item",key:"4",icon:e.jsx(l,{name:"users"}),danger:!0,disabled:!0}],onClick:o};return e.jsx(c,{title:"A button is on the left, and a related functional menu is on the right. You can set the icon property to modify the icon of right.",children:e.jsxs(i,{wrap:!0,children:[e.jsx(n.Button,{menu:m,onClick:t,children:"Dropdown"}),e.jsx(n.Button,{menu:m,placement:"bottom",icon:e.jsx(l,{name:"users"}),children:"Dropdown"}),e.jsx(n.Button,{menu:m,onClick:t,disabled:!0,children:"Dropdown"}),e.jsx(n.Button,{menu:m,buttonsRender:([d,a])=>[e.jsx(N,{title:"tooltip",children:d},"leftButton"),I.cloneElement(a,{loading:!0})],children:"With Tooltip"}),e.jsx(n,{menu:m,children:e.jsx(r,{children:e.jsxs(i,{children:["Button",e.jsx(l,{name:"alicorn"})]})})}),e.jsx(n.Button,{menu:m,onClick:t,danger:!0,children:"Danger"})]})})}},M={render:()=>{const t=[{label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com",children:"1st menu item"}),key:"0"},{label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com",children:"2nd menu item"}),key:"1"},{type:"divider"},{label:"3rd menu item（disabled）",key:"3",disabled:!0}];return e.jsx(c,{title:"Divider and disabled menu item.",children:e.jsx(n,{menu:{items:t},children:e.jsx("a",{onClick:o=>{o.preventDefault()},children:e.jsxs(i,{children:["Hover me",e.jsx(l,{name:"alicorn"})]})})})})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  // tags: ['deprecated'],
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    arrow: true
  }
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    dropdownRender: (_menus: ReactNode) => {
      // Customize dropdown content as needed
      return <div> Custom Components Go Here</div>;
    }
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    autoAdjustOverflow: false
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    destroyPopupOnHide: true
  }
}`,...y.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    overlayStyle: {
      color: 'red'
    }
  }
}`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'topRight'
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: ['click']
  }
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    open: true
  }
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    onOpenChange: (open: boolean, _info: {
      source: 'trigger' | 'menu';
    }) => {
      alert('Dropdown Open: ' + open);
    }
  }
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items: IMenuProps['items'] = [{
      key: '1',
      label: <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
    }, {
      key: '2',
      label: <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item (disabled)
          </a>,
      icon: <Icon name="alicorn" />,
      disabled: true
    }, {
      key: '3',
      label: <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item (disabled)
          </a>,
      disabled: true
    }, {
      key: '4',
      danger: true,
      label: 'a danger item'
    }];
    return <ExampleStory title="The most basic dropdown menu.">
        <Dropdown menu={{
        items
      }}>
          <a onClick={e => {
          e.preventDefault();
        }}>
            <Space>
              Hover me
              <Icon name="alicorn" />
            </Space>
          </a>
        </Dropdown>
      </ExampleStory>;
  }
}`,...C.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items: IMenuProps['items'] = [{
      key: '1',
      label: <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
    }, {
      key: '2',
      label: <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item
          </a>
    }, {
      key: '3',
      label: <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item
          </a>
    }];
    return <ExampleStory title="Support 6 placements.">
        <Space orientation="vertical">
          <Space wrap>
            <Dropdown menu={{
            items
          }} placement="bottomLeft">
              <Button>bottomLeft</Button>
            </Dropdown>
            <Dropdown menu={{
            items
          }} placement="bottom">
              <Button>bottom</Button>
            </Dropdown>
            <Dropdown menu={{
            items
          }} placement="bottomRight">
              <Button>bottomRight</Button>
            </Dropdown>
          </Space>
          <Space wrap>
            <Dropdown menu={{
            items
          }} placement="topLeft">
              <Button>topLeft</Button>
            </Dropdown>
            <Dropdown menu={{
            items
          }} placement="top">
              <Button>top</Button>
            </Dropdown>
            <Dropdown menu={{
            items
          }} placement="topRight">
              <Button>topRight</Button>
            </Dropdown>
          </Space>
        </Space>
      </ExampleStory>;
  }
}`,...D.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items: IMenuProps['items'] = [{
      key: '1',
      label: <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
    }, {
      key: '2',
      label: <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item
          </a>
    }, {
      key: '3',
      label: <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item
          </a>
    }];
    return <ExampleStory title="You could display an arrow.">
        <Dropdown menu={{
        items
      }} placement="bottomLeft" arrow>
          <Button>bottomLeft</Button>
        </Dropdown>
        <Dropdown menu={{
        items
      }} placement="bottom" arrow>
          <Button>bottom</Button>
        </Dropdown>
        <Dropdown menu={{
        items
      }} placement="bottomRight" arrow>
          <Button>bottomRight</Button>
        </Dropdown>
        <br />
        <Dropdown menu={{
        items
      }} placement="topLeft" arrow>
          <Button>topLeft</Button>
        </Dropdown>
        <Dropdown menu={{
        items
      }} placement="top" arrow>
          <Button>top</Button>
        </Dropdown>
        <Dropdown menu={{
        items
      }} placement="topRight" arrow>
          <Button>topRight</Button>
        </Dropdown>
      </ExampleStory>;
  }
}`,...B.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items: IMenuProps['items'] = [{
      key: '1',
      label: <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
    }, {
      key: '2',
      label: <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item
          </a>
    }, {
      key: '3',
      label: <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item
          </a>
    }];
    return <ExampleStory title="By specifying arrow prop with { pointAtCenter: true }, the arrow will point to the center of the target element.">
        <Dropdown menu={{
        items
      }} placement="bottomLeft" arrow={{
        pointAtCenter: true
      }}>
          <Button>bottomLeft</Button>
        </Dropdown>
        <Dropdown menu={{
        items
      }} placement="bottom" arrow={{
        pointAtCenter: true
      }}>
          <Button>bottom</Button>
        </Dropdown>
        <Dropdown menu={{
        items
      }} placement="bottomRight" arrow={{
        pointAtCenter: true
      }}>
          <Button>bottomRight</Button>
        </Dropdown>
        <br />
        <Dropdown menu={{
        items
      }} placement="topLeft" arrow={{
        pointAtCenter: true
      }}>
          <Button>topLeft</Button>
        </Dropdown>
        <Dropdown menu={{
        items
      }} placement="top" arrow={{
        pointAtCenter: true
      }}>
          <Button>top</Button>
        </Dropdown>
        <Dropdown menu={{
        items
      }} placement="topRight" arrow={{
        pointAtCenter: true
      }}>
          <Button>topRight</Button>
        </Dropdown>
      </ExampleStory>;
  }
}`,...v.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const onClick: IMenuProps['onClick'] = ({
      key
    }) => {
      alert(\`Click on item \${key}\`);
    };
    const items: IMenuProps['items'] = [{
      label: '1st menu item',
      key: '1'
    }, {
      label: '2nd menu item',
      key: '2'
    }, {
      label: '3rd menu item',
      key: '3'
    }];
    return <ExampleStory title="An event will be triggered when you click menu items, in which you can make different operations according to item's key.">
        <Dropdown menu={{
        items,
        onClick
      }}>
          <a onClick={e => {
          e.preventDefault();
        }}>
            <Space>
              Hover me, Click menu item
              <Icon name="alicorn" />
            </Space>
          </a>
        </Dropdown>
      </ExampleStory>;
  }
}`,...E.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      useToken
    } = theme;
    const items: MenuProps['items'] = [{
      key: '1',
      label: <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
    }, {
      key: '2',
      label: <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item (disabled)
          </a>,
      disabled: true
    }, {
      key: '3',
      label: <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item (disabled)
          </a>,
      disabled: true
    }];
    const {
      token
    } = useToken();
    const contentStyle: React.CSSProperties = {
      backgroundColor: token.colorBgElevated,
      borderRadius: token.borderRadiusLG,
      boxShadow: token.boxShadowSecondary
    };
    const menuStyle: React.CSSProperties = {
      boxShadow: 'none'
    };
    return <ExampleStory title="Customize the dropdown menu via dropdownRender. If you don't need the Menu content, use the Popover component directly.">
        <Dropdown menu={{
        items
      }} dropdownRender={menu => <div style={contentStyle}>
              {cloneElement(menu as React.ReactElement<{
          style?: React.CSSProperties;
        }>, {
          style: menuStyle
        })}
              <Divider style={{
          margin: 0
        }} />
              <Space style={{
          padding: 8
        }}>
                <Button type="primary">Click me!</Button>
              </Space>
            </div>}>
          <a onClick={e => {
          e.preventDefault();
        }}>
            <Space>
              Hover me
              <Icon name="alicorn" />
            </Space>
          </a>
        </Dropdown>
      </ExampleStory>;
  }
}`,...R.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const handleMenuClick: MenuProps['onClick'] = e => {
      if (e.key === '3') {
        setOpen(false);
      }
    };
    const handleOpenChange: IDropdownProps['onOpenChange'] = (nextOpen, info) => {
      if (info.source === 'trigger' || nextOpen) {
        setOpen(nextOpen);
      }
    };
    const items: MenuProps['items'] = [{
      label: 'Clicking me will not close the menu.',
      key: '1'
    }, {
      label: 'Clicking me will not close the menu also.',
      key: '2'
    }, {
      label: 'Clicking me will close the menu.',
      key: '3'
    }];
    return <ExampleStory title="The default is to close the menu when you click on menu items, this feature can be turned off.">
        <Dropdown menu={{
        items,
        onClick: handleMenuClick
      }} onOpenChange={handleOpenChange} open={open}>
          <a onClick={e => {
          e.preventDefault();
        }}>
            <Space>
              Hover me
              <Icon name="alicorn" />
            </Space>
          </a>
        </Dropdown>
      </ExampleStory>;
  }
}`,...L.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items: MenuProps['items'] = [{
      label: 'Submit and continue',
      key: '1'
    }];
    const [loadings, setLoadings] = useState<boolean[]>([]);
    const enterLoading = (index: number) => {
      setLoadings(state => {
        const newLoadings = [...state];
        newLoadings[index] = true;
        return newLoadings;
      });
      setTimeout(() => {
        setLoadings(state => {
          const newLoadings = [...state];
          newLoadings[index] = false;
          return newLoadings;
        });
      }, 2000);
    };
    return <ExampleStory title="A loading indicator can be added to a button by setting the loading property on the Dropdown.Button.">
        <Space orientation="vertical">
          <Dropdown.Button type="primary" loading menu={{
          items
        }}>
            Submit
          </Dropdown.Button>
          <Dropdown.Button type="primary" size="small" loading menu={{
          items
        }}>
            Submit
          </Dropdown.Button>
          <Dropdown.Button type="primary" loading={loadings[0]} menu={{
          items
        }} onClick={() => {
          enterLoading(0);
        }}>
            Submit
          </Dropdown.Button>
          <Dropdown.Button icon={<Icon name="alicorn" />} loading={loadings[1]} menu={{
          items
        }} onClick={() => {
          enterLoading(1);
        }}>
            Submit
          </Dropdown.Button>
        </Space>
      </ExampleStory>;
  }
}`,..._.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items: MenuProps['items'] = [{
      key: '1',
      label: 'Item 1'
    }, {
      key: '2',
      label: 'Item 2'
    }, {
      key: '3',
      label: 'Item 3'
    }];
    return <ExampleStory title="Configure the selectable property in menu to enable selectability.">
        <Dropdown menu={{
        items,
        selectable: true,
        defaultSelectedKeys: ['3']
      }}>
          <Typography.Link>
            <Space>
              Selectable
              <Icon name="alicorn" />
            </Space>
          </Typography.Link>
        </Dropdown>
      </ExampleStory>;
  }
}`,...P.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items: MenuProps['items'] = [{
      label: '1st menu item',
      key: '1'
    }, {
      label: '2nd menu item',
      key: '2'
    }, {
      label: '3rd menu item',
      key: '3'
    }];
    const {
      token: {
        colorBgLayout,
        colorTextTertiary
      }
    } = theme.useToken();
    return <ExampleStory title="The default trigger mode is hover, you can change it to contextMenu. The pop-up menu position will follow the right-click position.">
        <Dropdown menu={{
        items
      }} trigger={['contextMenu']}>
          <div style={{
          color: colorTextTertiary,
          background: colorBgLayout,
          height: 200,
          textAlign: 'center',
          lineHeight: '200px'
        }}>
            Right Click on here
          </div>
        </Dropdown>
      </ExampleStory>;
  }
}`,...O.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items: MenuProps['items'] = [{
      key: '1',
      type: 'group',
      label: 'Group title',
      children: [{
        key: '1-1',
        label: '1st menu item'
      }, {
        key: '1-2',
        label: '2nd menu item'
      }]
    }, {
      key: '2',
      label: 'sub menu',
      children: [{
        key: '2-1',
        label: '3rd menu item'
      }, {
        key: '2-2',
        label: '4th menu item'
      }]
    }, {
      key: '3',
      label: 'disabled sub menu',
      disabled: true,
      children: [{
        key: '3-1',
        label: '5d menu item'
      }, {
        key: '3-2',
        label: '6th menu item'
      }]
    }];
    return <ExampleStory title="The menu has multiple levels.">
        <Dropdown menu={{
        items
      }}>
          <a onClick={e => {
          e.preventDefault();
        }}>
            <Space>
              Cascading menu
              <Icon name="alicorn" />
            </Space>
          </a>
        </Dropdown>
      </ExampleStory>;
  }
}`,...T.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      alert('Click on left button.');
      console.log('click left button', e);
    };
    const handleMenuClick: MenuProps['onClick'] = e => {
      alert('Click on menu item.');
      console.log('click', e);
    };
    const items: MenuProps['items'] = [{
      label: '1st menu item',
      key: '1',
      icon: <Icon name="users" />
    }, {
      label: '2nd menu item',
      key: '2',
      icon: <Icon name="users" />
    }, {
      label: '3rd menu item',
      key: '3',
      icon: <Icon name="users" />,
      danger: true
    }, {
      label: '4rd menu item',
      key: '4',
      icon: <Icon name="users" />,
      danger: true,
      disabled: true
    }];
    const menuProps = {
      items,
      onClick: handleMenuClick
    };
    return <ExampleStory title="A button is on the left, and a related functional menu is on the right. You can set the icon property to modify the icon of right.">
        <Space wrap>
          <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
            Dropdown
          </Dropdown.Button>
          <Dropdown.Button menu={menuProps} placement="bottom" icon={<Icon name="users" />}>
            Dropdown
          </Dropdown.Button>
          <Dropdown.Button menu={menuProps} onClick={handleButtonClick} disabled>
            Dropdown
          </Dropdown.Button>
          <Dropdown.Button menu={menuProps} buttonsRender={([leftButton, rightButton]) => [<Tooltip title="tooltip" key="leftButton">
                {leftButton}
              </Tooltip>, cloneElement(rightButton as React.ReactElement<{
          loading?: boolean;
        }>, {
          loading: true
        })]}>
            With Tooltip
          </Dropdown.Button>
          <Dropdown menu={menuProps}>
            <Button>
              <Space>
                Button
                <Icon name="alicorn" />
              </Space>
            </Button>
          </Dropdown>
          <Dropdown.Button menu={menuProps} onClick={handleButtonClick} danger>
            Danger
          </Dropdown.Button>
        </Space>
      </ExampleStory>;
  }
}`,...A.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items: MenuProps['items'] = [{
      label: <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>,
      key: '0'
    }, {
      label: <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item
          </a>,
      key: '1'
    }, {
      type: 'divider'
    }, {
      label: '3rd menu item（disabled）',
      key: '3',
      disabled: true
    }];
    return <ExampleStory title="Divider and disabled menu item.">
        <Dropdown menu={{
        items
      }}>
          <a onClick={e => {
          e.preventDefault();
        }}>
            <Space>
              Hover me
              <Icon name="alicorn" />
            </Space>
          </a>
        </Dropdown>
      </ExampleStory>;
  }
}`,...M.parameters?.docs?.source}}};const K=["Primary","WithArrow","Disabled","CustomDropdownRender","AutoAdjustOverflow","DestroyPopupOnHide","WithOverlayStyle","CustomPlacement","TriggerClick","OpenDropdown","OnOpenChangeCallback","ExampleBasic","ExamplePlacement","ExampleArrow","ExampleArrowCenter","ExampleClickEvent","ExampleCustomDropdown","ExampleClosingMenu","ExampleLoading","ExampleSelectable","ExampleContextMenu","ExampleNested","ExampleButtons","ExampleContainerDivider"],J=Object.freeze(Object.defineProperty({__proto__:null,AutoAdjustOverflow:g,CustomDropdownRender:b,CustomPlacement:x,DestroyPopupOnHide:y,Disabled:w,ExampleArrow:B,ExampleArrowCenter:v,ExampleBasic:C,ExampleButtons:A,ExampleClickEvent:E,ExampleClosingMenu:L,ExampleContainerDivider:M,ExampleContextMenu:O,ExampleCustomDropdown:R,ExampleLoading:_,ExampleNested:T,ExamplePlacement:D,ExampleSelectable:P,OnOpenChangeCallback:S,OpenDropdown:j,Primary:p,TriggerClick:f,WithArrow:h,WithOverlayStyle:k,__namedExportsOrder:K,default:Y},Symbol.toStringTag,{value:"Module"}));export{J as D,Y as m};
