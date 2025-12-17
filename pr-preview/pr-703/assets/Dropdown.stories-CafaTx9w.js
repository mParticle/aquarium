var st=Object.defineProperty,it=Object.defineProperties;var mt=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var ct=Object.prototype.hasOwnProperty,dt=Object.prototype.propertyIsEnumerable;var N=(n,a,l)=>a in n?st(n,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[a]=l,t=(n,a)=>{for(var l in a||(a={}))ct.call(a,l)&&N(n,l,a[l]);if(G)for(var l of G(a))dt.call(a,l)&&N(n,l,a[l]);return n},r=(n,a)=>it(n,mt(a));import{j as e}from"./jsx-runtime-C9TrHvcC.js";import{r as z}from"./index-3OP4wdng.js";import{Z as o,e as s,I as m,a as c,b as ut,c as pt,T as ht}from"./NavigationItemsService-BvMxDu-c.js";import{E as u}from"./ExampleStory-D9pAGBp8.js";import"./ErrorStateIcon-pFfO2vlM.js";import"./SuccessStateIcon-T2etWKpW.js";import"./WarningStateIcon-CxJtg587.js";import"./_baseClone-DwBCp-Ss.js";import{t as lt}from"./index-Srd-ygVU.js";const wt={items:[{key:"1",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com",children:"1st menu item"})},{key:"2",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com",children:"2nd menu item (disabled)"}),icon:e.jsx(m,{name:"alicorn"}),disabled:!0},{key:"3",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com",children:"3rd menu item (disabled)"}),disabled:!0},{key:"4",danger:!0,label:"a danger item"}]},bt={title:"Components/Not Prod Ready/Navigation/Dropdown",component:o,args:{children:"normal",menu:wt,arrow:!1,autoAdjustOverflow:!0,autoFocus:!1,disabled:!1,destroyPopupOnHide:!1,dropdownRender:void 0,overlayClassName:void 0,overlayStyle:void 0,placement:"bottomLeft",trigger:["hover"]},argTypes:{children:{options:["normal"],mapping:{normal:e.jsx(s,{children:"Dropdown Copy"})}},placement:{control:"select",options:["bottom","bottomLeft","bottomRight","top","topLeft","topRight"]}}},w={},b={args:{arrow:!0}},g={args:{disabled:!0}},y={args:{dropdownRender:n=>e.jsx("div",{children:" Custom Components Go Here"})}},k={args:{autoAdjustOverflow:!1}},x={args:{destroyPopupOnHide:!0}},f={args:{overlayStyle:{color:"red"}}},j={args:{placement:"topRight"}},S={args:{trigger:["click"]}},C={args:{open:!0}},D={args:{onOpenChange:(n,a)=>{alert("Dropdown Open: "+n)}}},B={render:()=>{const n=[{key:"1",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com",children:"1st menu item"})},{key:"2",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com",children:"2nd menu item (disabled)"}),icon:e.jsx(m,{name:"alicorn"}),disabled:!0},{key:"3",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com",children:"3rd menu item (disabled)"}),disabled:!0},{key:"4",danger:!0,label:"a danger item"}];return e.jsx(u,{title:"The most basic dropdown menu.",children:e.jsx(o,{menu:{items:n},children:e.jsx("a",{onClick:a=>{a.preventDefault()},children:e.jsxs(c,{children:["Hover me",e.jsx(m,{name:"alicorn"})]})})})})}},v={render:()=>{const n=[{key:"1",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com",children:"1st menu item"})},{key:"2",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com",children:"2nd menu item"})},{key:"3",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com",children:"3rd menu item"})}];return e.jsx(u,{title:"Support 6 placements.",children:e.jsxs(c,{direction:"vertical",children:[e.jsxs(c,{wrap:!0,children:[e.jsx(o,{menu:{items:n},placement:"bottomLeft",children:e.jsx(s,{children:"bottomLeft"})}),e.jsx(o,{menu:{items:n},placement:"bottom",children:e.jsx(s,{children:"bottom"})}),e.jsx(o,{menu:{items:n},placement:"bottomRight",children:e.jsx(s,{children:"bottomRight"})})]}),e.jsxs(c,{wrap:!0,children:[e.jsx(o,{menu:{items:n},placement:"topLeft",children:e.jsx(s,{children:"topLeft"})}),e.jsx(o,{menu:{items:n},placement:"top",children:e.jsx(s,{children:"top"})}),e.jsx(o,{menu:{items:n},placement:"topRight",children:e.jsx(s,{children:"topRight"})})]})]})})}},E={render:()=>{const n=[{key:"1",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com",children:"1st menu item"})},{key:"2",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com",children:"2nd menu item"})},{key:"3",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com",children:"3rd menu item"})}];return e.jsxs(u,{title:"You could display an arrow.",children:[e.jsx(o,{menu:{items:n},placement:"bottomLeft",arrow:!0,children:e.jsx(s,{children:"bottomLeft"})}),e.jsx(o,{menu:{items:n},placement:"bottom",arrow:!0,children:e.jsx(s,{children:"bottom"})}),e.jsx(o,{menu:{items:n},placement:"bottomRight",arrow:!0,children:e.jsx(s,{children:"bottomRight"})}),e.jsx("br",{}),e.jsx(o,{menu:{items:n},placement:"topLeft",arrow:!0,children:e.jsx(s,{children:"topLeft"})}),e.jsx(o,{menu:{items:n},placement:"top",arrow:!0,children:e.jsx(s,{children:"top"})}),e.jsx(o,{menu:{items:n},placement:"topRight",arrow:!0,children:e.jsx(s,{children:"topRight"})})]})}},R={render:()=>{const n=[{key:"1",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com",children:"1st menu item"})},{key:"2",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com",children:"2nd menu item"})},{key:"3",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com",children:"3rd menu item"})}];return e.jsxs(u,{title:"By specifying arrow prop with { pointAtCenter: true }, the arrow will point to the center of the target element.",children:[e.jsx(o,{menu:{items:n},placement:"bottomLeft",arrow:{pointAtCenter:!0},children:e.jsx(s,{children:"bottomLeft"})}),e.jsx(o,{menu:{items:n},placement:"bottom",arrow:{pointAtCenter:!0},children:e.jsx(s,{children:"bottom"})}),e.jsx(o,{menu:{items:n},placement:"bottomRight",arrow:{pointAtCenter:!0},children:e.jsx(s,{children:"bottomRight"})}),e.jsx("br",{}),e.jsx(o,{menu:{items:n},placement:"topLeft",arrow:{pointAtCenter:!0},children:e.jsx(s,{children:"topLeft"})}),e.jsx(o,{menu:{items:n},placement:"top",arrow:{pointAtCenter:!0},children:e.jsx(s,{children:"top"})}),e.jsx(o,{menu:{items:n},placement:"topRight",arrow:{pointAtCenter:!0},children:e.jsx(s,{children:"topRight"})})]})}},L={render:()=>{const n=({key:l})=>{alert(`Click on item ${l}`)},a=[{label:"1st menu item",key:"1"},{label:"2nd menu item",key:"2"},{label:"3rd menu item",key:"3"}];return e.jsx(u,{title:"An event will be triggered when you click menu items, in which you can make different operations according to item's key.",children:e.jsx(o,{menu:{items:a,onClick:n},children:e.jsx("a",{onClick:l=>{l.preventDefault()},children:e.jsxs(c,{children:["Hover me, Click menu item",e.jsx(m,{name:"alicorn"})]})})})})}},_={render:()=>{const{useToken:n}=lt,a=[{key:"1",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com",children:"1st menu item"})},{key:"2",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com",children:"2nd menu item (disabled)"}),disabled:!0},{key:"3",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com",children:"3rd menu item (disabled)"}),disabled:!0}],{token:l}=n(),d={backgroundColor:l.colorBgElevated,borderRadius:l.borderRadiusLG,boxShadow:l.boxShadowSecondary},p={boxShadow:"none"};return e.jsx(u,{title:"Customize the dropdown menu via dropdownRender. If you don't need the Menu content, use the Popover component directly.",children:e.jsx(o,{menu:{items:a},dropdownRender:i=>e.jsxs("div",{style:d,children:[z.cloneElement(i,{style:p}),e.jsx(ut,{style:{margin:0}}),e.jsx(c,{style:{padding:8},children:e.jsx(s,{type:"primary",children:"Click me!"})})]}),children:e.jsx("a",{onClick:i=>{i.preventDefault()},children:e.jsxs(c,{children:["Hover me",e.jsx(m,{name:"alicorn"})]})})})})}},P={render:()=>{const[n,a]=z.useState(!1),l=i=>{i.key==="3"&&a(!1)},d=(i,h)=>{(h.source==="trigger"||i)&&a(i)},p=[{label:"Clicking me will not close the menu.",key:"1"},{label:"Clicking me will not close the menu also.",key:"2"},{label:"Clicking me will close the menu.",key:"3"}];return e.jsx(u,{title:"The default is to close the menu when you click on menu items, this feature can be turned off.",children:e.jsx(o,{menu:{items:p,onClick:l},onOpenChange:d,open:n,children:e.jsx("a",{onClick:i=>{i.preventDefault()},children:e.jsxs(c,{children:["Hover me",e.jsx(m,{name:"alicorn"})]})})})})}},O={render:()=>{const n=[{label:"Submit and continue",key:"1"}],[a,l]=z.useState([]),d=p=>{l(i=>{const h=[...i];return h[p]=!0,h}),setTimeout(()=>{l(i=>{const h=[...i];return h[p]=!1,h})},2e3)};return e.jsx(u,{title:"A loading indicator can be added to a button by setting the loading property on the Dropdown.Button.",children:e.jsxs(c,{direction:"vertical",children:[e.jsx(o.Button,{type:"primary",loading:!0,menu:{items:n},children:"Submit"}),e.jsx(o.Button,{type:"primary",size:"small",loading:!0,menu:{items:n},children:"Submit"}),e.jsx(o.Button,{type:"primary",loading:a[0],menu:{items:n},onClick:()=>{d(0)},children:"Submit"}),e.jsx(o.Button,{icon:e.jsx(m,{name:"alicorn"}),loading:a[1],menu:{items:n},onClick:()=>{d(1)},children:"Submit"})]})})}},T={render:()=>{const n=[{key:"1",label:"Item 1"},{key:"2",label:"Item 2"},{key:"3",label:"Item 3"}];return e.jsx(u,{title:"Configure the selectable property in menu to enable selectability.",children:e.jsx(o,{menu:{items:n,selectable:!0,defaultSelectedKeys:["3"]},children:e.jsx(pt.Link,{children:e.jsxs(c,{children:["Selectable",e.jsx(m,{name:"alicorn"})]})})})})}},A={render:()=>{const n=[{label:"1st menu item",key:"1"},{label:"2nd menu item",key:"2"},{label:"3rd menu item",key:"3"}],{token:{colorBgLayout:a,colorTextTertiary:l}}=lt.useToken();return e.jsx(u,{title:"The default trigger mode is hover, you can change it to contextMenu. The pop-up menu position will follow the right-click position.",children:e.jsx(o,{menu:{items:n},trigger:["contextMenu"],children:e.jsx("div",{style:{color:l,background:a,height:200,textAlign:"center",lineHeight:"200px"},children:"Right Click on here"})})})}},M={render:()=>{const n=[{key:"1",type:"group",label:"Group title",children:[{key:"1-1",label:"1st menu item"},{key:"1-2",label:"2nd menu item"}]},{key:"2",label:"sub menu",children:[{key:"2-1",label:"3rd menu item"},{key:"2-2",label:"4th menu item"}]},{key:"3",label:"disabled sub menu",disabled:!0,children:[{key:"3-1",label:"5d menu item"},{key:"3-2",label:"6th menu item"}]}];return e.jsx(u,{title:"The menu has multiple levels.",children:e.jsx(o,{menu:{items:n},children:e.jsx("a",{onClick:a=>{a.preventDefault()},children:e.jsxs(c,{children:["Cascading menu",e.jsx(m,{name:"alicorn"})]})})})})}},I={render:()=>{const n=p=>{alert("Click on left button."),console.log("click left button",p)},a=p=>{alert("Click on menu item."),console.log("click",p)},d={items:[{label:"1st menu item",key:"1",icon:e.jsx(m,{name:"users"})},{label:"2nd menu item",key:"2",icon:e.jsx(m,{name:"users"})},{label:"3rd menu item",key:"3",icon:e.jsx(m,{name:"users"}),danger:!0},{label:"4rd menu item",key:"4",icon:e.jsx(m,{name:"users"}),danger:!0,disabled:!0}],onClick:a};return e.jsx(u,{title:"A button is on the left, and a related functional menu is on the right. You can set the icon property to modify the icon of right.",children:e.jsxs(c,{wrap:!0,children:[e.jsx(o.Button,{menu:d,onClick:n,children:"Dropdown"}),e.jsx(o.Button,{menu:d,placement:"bottom",icon:e.jsx(m,{name:"users"}),children:"Dropdown"}),e.jsx(o.Button,{menu:d,onClick:n,disabled:!0,children:"Dropdown"}),e.jsx(o.Button,{menu:d,buttonsRender:([p,i])=>[e.jsx(ht,{title:"tooltip",children:p},"leftButton"),z.cloneElement(i,{loading:!0})],children:"With Tooltip"}),e.jsx(o,{menu:d,children:e.jsx(s,{children:e.jsxs(c,{children:["Button",e.jsx(m,{name:"alicorn"})]})})}),e.jsx(o.Button,{menu:d,onClick:n,danger:!0,children:"Danger"})]})})}},H={render:()=>{const n=[{label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com",children:"1st menu item"}),key:"0"},{label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com",children:"2nd menu item"}),key:"1"},{type:"divider"},{label:"3rd menu item（disabled）",key:"3",disabled:!0}];return e.jsx(u,{title:"Divider and disabled menu item.",children:e.jsx(o,{menu:{items:n},children:e.jsx("a",{onClick:a=>{a.preventDefault()},children:e.jsxs(c,{children:["Hover me",e.jsx(m,{name:"alicorn"})]})})})})}};var W,Y,K;w.parameters=r(t({},w.parameters),{docs:r(t({},(W=w.parameters)==null?void 0:W.docs),{source:t({originalSource:`{
  // tags: ['deprecated'],
}`},(K=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:K.source)})});var $,F,Z;b.parameters=r(t({},b.parameters),{docs:r(t({},($=b.parameters)==null?void 0:$.docs),{source:t({originalSource:`{
  args: {
    arrow: true
  }
}`},(Z=(F=b.parameters)==null?void 0:F.docs)==null?void 0:Z.source)})});var q,J,Q;g.parameters=r(t({},g.parameters),{docs:r(t({},(q=g.parameters)==null?void 0:q.docs),{source:t({originalSource:`{
  args: {
    disabled: true
  }
}`},(Q=(J=g.parameters)==null?void 0:J.docs)==null?void 0:Q.source)})});var U,V,X;y.parameters=r(t({},y.parameters),{docs:r(t({},(U=y.parameters)==null?void 0:U.docs),{source:t({originalSource:`{
  args: {
    dropdownRender: (menus: ReactNode) => {
      // Customize dropdown content as needed
      return <div> Custom Components Go Here</div>;
    }
  }
}`},(X=(V=y.parameters)==null?void 0:V.docs)==null?void 0:X.source)})});var ee,te,ne;k.parameters=r(t({},k.parameters),{docs:r(t({},(ee=k.parameters)==null?void 0:ee.docs),{source:t({originalSource:`{
  args: {
    autoAdjustOverflow: false
  }
}`},(ne=(te=k.parameters)==null?void 0:te.docs)==null?void 0:ne.source)})});var re,oe,ae;x.parameters=r(t({},x.parameters),{docs:r(t({},(re=x.parameters)==null?void 0:re.docs),{source:t({originalSource:`{
  args: {
    destroyPopupOnHide: true
  }
}`},(ae=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ae.source)})});var le,se,ie;f.parameters=r(t({},f.parameters),{docs:r(t({},(le=f.parameters)==null?void 0:le.docs),{source:t({originalSource:`{
  args: {
    overlayStyle: {
      color: 'red'
    }
  }
}`},(ie=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ie.source)})});var me,ce,de;j.parameters=r(t({},j.parameters),{docs:r(t({},(me=j.parameters)==null?void 0:me.docs),{source:t({originalSource:`{
  args: {
    placement: 'topRight'
  }
}`},(de=(ce=j.parameters)==null?void 0:ce.docs)==null?void 0:de.source)})});var ue,pe,he;S.parameters=r(t({},S.parameters),{docs:r(t({},(ue=S.parameters)==null?void 0:ue.docs),{source:t({originalSource:`{
  args: {
    trigger: ['click']
  }
}`},(he=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:he.source)})});var we,be,ge;C.parameters=r(t({},C.parameters),{docs:r(t({},(we=C.parameters)==null?void 0:we.docs),{source:t({originalSource:`{
  args: {
    open: true
  }
}`},(ge=(be=C.parameters)==null?void 0:be.docs)==null?void 0:ge.source)})});var ye,ke,xe;D.parameters=r(t({},D.parameters),{docs:r(t({},(ye=D.parameters)==null?void 0:ye.docs),{source:t({originalSource:`{
  args: {
    onOpenChange: (open: boolean, info: {
      source: 'trigger' | 'menu';
    }) => {
      alert('Dropdown Open: ' + open);
    }
  }
}`},(xe=(ke=D.parameters)==null?void 0:ke.docs)==null?void 0:xe.source)})});var fe,je,Se;B.parameters=r(t({},B.parameters),{docs:r(t({},(fe=B.parameters)==null?void 0:fe.docs),{source:t({originalSource:`{
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
}`},(Se=(je=B.parameters)==null?void 0:je.docs)==null?void 0:Se.source)})});var Ce,De,Be;v.parameters=r(t({},v.parameters),{docs:r(t({},(Ce=v.parameters)==null?void 0:Ce.docs),{source:t({originalSource:`{
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
        <Space direction="vertical">
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
}`},(Be=(De=v.parameters)==null?void 0:De.docs)==null?void 0:Be.source)})});var ve,Ee,Re;E.parameters=r(t({},E.parameters),{docs:r(t({},(ve=E.parameters)==null?void 0:ve.docs),{source:t({originalSource:`{
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
}`},(Re=(Ee=E.parameters)==null?void 0:Ee.docs)==null?void 0:Re.source)})});var Le,_e,Pe;R.parameters=r(t({},R.parameters),{docs:r(t({},(Le=R.parameters)==null?void 0:Le.docs),{source:t({originalSource:`{
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
}`},(Pe=(_e=R.parameters)==null?void 0:_e.docs)==null?void 0:Pe.source)})});var Oe,Te,Ae;L.parameters=r(t({},L.parameters),{docs:r(t({},(Oe=L.parameters)==null?void 0:Oe.docs),{source:t({originalSource:`{
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
}`},(Ae=(Te=L.parameters)==null?void 0:Te.docs)==null?void 0:Ae.source)})});var Me,Ie,He;_.parameters=r(t({},_.parameters),{docs:r(t({},(Me=_.parameters)==null?void 0:Me.docs),{source:t({originalSource:`{
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
              {cloneElement(menu as React.ReactElement, {
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
}`},(He=(Ie=_.parameters)==null?void 0:Ie.docs)==null?void 0:He.source)})});var ze,Ge,Ne;P.parameters=r(t({},P.parameters),{docs:r(t({},(ze=P.parameters)==null?void 0:ze.docs),{source:t({originalSource:`{
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
}`},(Ne=(Ge=P.parameters)==null?void 0:Ge.docs)==null?void 0:Ne.source)})});var We,Ye,Ke;O.parameters=r(t({},O.parameters),{docs:r(t({},(We=O.parameters)==null?void 0:We.docs),{source:t({originalSource:`{
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
        <Space direction="vertical">
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
}`},(Ke=(Ye=O.parameters)==null?void 0:Ye.docs)==null?void 0:Ke.source)})});var $e,Fe,Ze;T.parameters=r(t({},T.parameters),{docs:r(t({},($e=T.parameters)==null?void 0:$e.docs),{source:t({originalSource:`{
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
}`},(Ze=(Fe=T.parameters)==null?void 0:Fe.docs)==null?void 0:Ze.source)})});var qe,Je,Qe;A.parameters=r(t({},A.parameters),{docs:r(t({},(qe=A.parameters)==null?void 0:qe.docs),{source:t({originalSource:`{
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
}`},(Qe=(Je=A.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source)})});var Ue,Ve,Xe;M.parameters=r(t({},M.parameters),{docs:r(t({},(Ue=M.parameters)==null?void 0:Ue.docs),{source:t({originalSource:`{
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
}`},(Xe=(Ve=M.parameters)==null?void 0:Ve.docs)==null?void 0:Xe.source)})});var et,tt,nt;I.parameters=r(t({},I.parameters),{docs:r(t({},(et=I.parameters)==null?void 0:et.docs),{source:t({originalSource:`{
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
              </Tooltip>, cloneElement(rightButton as React.ReactElement<any, string>, {
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
}`},(nt=(tt=I.parameters)==null?void 0:tt.docs)==null?void 0:nt.source)})});var rt,ot,at;H.parameters=r(t({},H.parameters),{docs:r(t({},(rt=H.parameters)==null?void 0:rt.docs),{source:t({originalSource:`{
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
}`},(at=(ot=H.parameters)==null?void 0:ot.docs)==null?void 0:at.source)})});const gt=["Primary","WithArrow","Disabled","CustomDropdownRender","AutoAdjustOverflow","DestroyPopupOnHide","WithOverlayStyle","CustomPlacement","TriggerClick","OpenDropdown","OnOpenChangeCallback","ExampleBasic","ExamplePlacement","ExampleArrow","ExampleArrowCenter","ExampleClickEvent","ExampleCustomDropdown","ExampleClosingMenu","ExampleLoading","ExampleSelectable","ExampleContextMenu","ExampleNested","ExampleButtons","ExampleContainerDivider"],Et=Object.freeze(Object.defineProperty({__proto__:null,AutoAdjustOverflow:k,CustomDropdownRender:y,CustomPlacement:j,DestroyPopupOnHide:x,Disabled:g,ExampleArrow:E,ExampleArrowCenter:R,ExampleBasic:B,ExampleButtons:I,ExampleClickEvent:L,ExampleClosingMenu:P,ExampleContainerDivider:H,ExampleContextMenu:A,ExampleCustomDropdown:_,ExampleLoading:O,ExampleNested:M,ExamplePlacement:v,ExampleSelectable:T,OnOpenChangeCallback:D,OpenDropdown:C,Primary:w,TriggerClick:S,WithArrow:b,WithOverlayStyle:f,__namedExportsOrder:gt,default:bt},Symbol.toStringTag,{value:"Module"}));export{Et as D,bt as m};
