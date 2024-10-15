var sn=Object.defineProperty,mn=Object.defineProperties;var cn=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var dn=Object.prototype.hasOwnProperty,pn=Object.prototype.propertyIsEnumerable;var z=(t,a,l)=>a in t?sn(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,n=(t,a)=>{for(var l in a||(a={}))dn.call(a,l)&&z(t,l,a[l]);if(W)for(var l of W(a))pn.call(a,l)&&z(t,l,a[l]);return t},r=(t,a)=>mn(t,cn(a));import{j as e}from"./jsx-runtime-BcCOBRXo.js";import{r as G}from"./index-CNk6hRaE.js";import{al as o,B as s,a as c,I as m,D as un,s as hn,b as wn}from"./GlobalNavigation-_szhAR6f.js";import{E as p}from"./ExampleStory-DFi012Mo.js";import"./ConfigProvider-C77M1HMj.js";import"./_baseClone-BjCwUuX-.js";import{t as ln}from"./index-C9GZCUSR.js";import"./index-z2stgOKB.js";import"./useToken-5RYkiW09.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CYew8PZR.js";import"./row-DegztUsn.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";import"./LightTheme-DxveuNKr.js";import"./_getPrototype-CAOE_2rY.js";const bn={items:[{key:"1",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com",children:"1st menu item"})},{key:"2",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com",children:"2nd menu item (disabled)"}),icon:e.jsx(m,{name:"alicorn"}),disabled:!0},{key:"3",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com",children:"3rd menu item (disabled)"}),disabled:!0},{key:"4",danger:!0,label:"a danger item"}]},Mn={title:"Components/Navigation/Dropdown",component:o,args:{children:"normal",menu:bn,arrow:!1,autoAdjustOverflow:!0,autoFocus:!1,disabled:!1,destroyPopupOnHide:!1,dropdownRender:void 0,overlayClassName:void 0,overlayStyle:void 0,placement:"bottomLeft",trigger:["hover"]},argTypes:{children:{options:["normal"],mapping:{normal:e.jsx(s,{children:"Dropdown Copy"})}},placement:{control:"select",options:["bottom","bottomLeft","bottomRight","top","topLeft","topRight"]}}},w={},b={args:{arrow:!0}},g={args:{disabled:!0}},y={args:{dropdownRender:t=>e.jsx("div",{children:" Custom Components Go Here"})}},k={args:{autoAdjustOverflow:!1}},x={args:{destroyPopupOnHide:!0}},f={args:{overlayStyle:{color:"red"}}},j={args:{placement:"topRight"}},S={args:{trigger:["click"]}},C={args:{open:!0}},D={args:{onOpenChange:(t,a)=>{alert("Dropdown Open: "+t)}}},B={render:()=>{const t=[{key:"1",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com",children:"1st menu item"})},{key:"2",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com",children:"2nd menu item (disabled)"}),icon:e.jsx(m,{name:"alicorn"}),disabled:!0},{key:"3",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com",children:"3rd menu item (disabled)"}),disabled:!0},{key:"4",danger:!0,label:"a danger item"}];return e.jsx(p,{title:"The most basic dropdown menu.",children:e.jsx(o,{menu:{items:t},children:e.jsx("a",{onClick:a=>{a.preventDefault()},children:e.jsxs(c,{children:["Hover me",e.jsx(m,{name:"alicorn"})]})})})})}},v={render:()=>{const t=[{key:"1",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com",children:"1st menu item"})},{key:"2",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com",children:"2nd menu item"})},{key:"3",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com",children:"3rd menu item"})}];return e.jsx(p,{title:"Support 6 placements.",children:e.jsxs(c,{direction:"vertical",children:[e.jsxs(c,{wrap:!0,children:[e.jsx(o,{menu:{items:t},placement:"bottomLeft",children:e.jsx(s,{children:"bottomLeft"})}),e.jsx(o,{menu:{items:t},placement:"bottom",children:e.jsx(s,{children:"bottom"})}),e.jsx(o,{menu:{items:t},placement:"bottomRight",children:e.jsx(s,{children:"bottomRight"})})]}),e.jsxs(c,{wrap:!0,children:[e.jsx(o,{menu:{items:t},placement:"topLeft",children:e.jsx(s,{children:"topLeft"})}),e.jsx(o,{menu:{items:t},placement:"top",children:e.jsx(s,{children:"top"})}),e.jsx(o,{menu:{items:t},placement:"topRight",children:e.jsx(s,{children:"topRight"})})]})]})})}},E={render:()=>{const t=[{key:"1",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com",children:"1st menu item"})},{key:"2",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com",children:"2nd menu item"})},{key:"3",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com",children:"3rd menu item"})}];return e.jsxs(p,{title:"You could display an arrow.",children:[e.jsx(o,{menu:{items:t},placement:"bottomLeft",arrow:!0,children:e.jsx(s,{children:"bottomLeft"})}),e.jsx(o,{menu:{items:t},placement:"bottom",arrow:!0,children:e.jsx(s,{children:"bottom"})}),e.jsx(o,{menu:{items:t},placement:"bottomRight",arrow:!0,children:e.jsx(s,{children:"bottomRight"})}),e.jsx("br",{}),e.jsx(o,{menu:{items:t},placement:"topLeft",arrow:!0,children:e.jsx(s,{children:"topLeft"})}),e.jsx(o,{menu:{items:t},placement:"top",arrow:!0,children:e.jsx(s,{children:"top"})}),e.jsx(o,{menu:{items:t},placement:"topRight",arrow:!0,children:e.jsx(s,{children:"topRight"})})]})}},L={render:()=>{const t=[{key:"1",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com",children:"1st menu item"})},{key:"2",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com",children:"2nd menu item"})},{key:"3",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com",children:"3rd menu item"})}];return e.jsxs(p,{title:"By specifying arrow prop with { pointAtCenter: true }, the arrow will point to the center of the target element.",children:[e.jsx(o,{menu:{items:t},placement:"bottomLeft",arrow:{pointAtCenter:!0},children:e.jsx(s,{children:"bottomLeft"})}),e.jsx(o,{menu:{items:t},placement:"bottom",arrow:{pointAtCenter:!0},children:e.jsx(s,{children:"bottom"})}),e.jsx(o,{menu:{items:t},placement:"bottomRight",arrow:{pointAtCenter:!0},children:e.jsx(s,{children:"bottomRight"})}),e.jsx("br",{}),e.jsx(o,{menu:{items:t},placement:"topLeft",arrow:{pointAtCenter:!0},children:e.jsx(s,{children:"topLeft"})}),e.jsx(o,{menu:{items:t},placement:"top",arrow:{pointAtCenter:!0},children:e.jsx(s,{children:"top"})}),e.jsx(o,{menu:{items:t},placement:"topRight",arrow:{pointAtCenter:!0},children:e.jsx(s,{children:"topRight"})})]})}},R={render:()=>{const t=({key:l})=>{alert(`Click on item ${l}`)},a=[{label:"1st menu item",key:"1"},{label:"2nd menu item",key:"2"},{label:"3rd menu item",key:"3"}];return e.jsx(p,{title:"An event will be triggered when you click menu items, in which you can make different operations according to item's key.",children:e.jsx(o,{menu:{items:a,onClick:t},children:e.jsx("a",{onClick:l=>{l.preventDefault()},children:e.jsxs(c,{children:["Hover me, Click menu item",e.jsx(m,{name:"alicorn"})]})})})})}},P={render:()=>{const{useToken:t}=ln,a=[{key:"1",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com",children:"1st menu item"})},{key:"2",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com",children:"2nd menu item (disabled)"}),disabled:!0},{key:"3",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com",children:"3rd menu item (disabled)"}),disabled:!0}],{token:l}=t(),d={backgroundColor:l.colorBgElevated,borderRadius:l.borderRadiusLG,boxShadow:l.boxShadowSecondary},u={boxShadow:"none"};return e.jsx(p,{title:"Customize the dropdown menu via dropdownRender. If you don't need the Menu content, use the Popover component directly.",children:e.jsx(o,{menu:{items:a},dropdownRender:i=>e.jsxs("div",{style:d,children:[G.cloneElement(i,{style:u}),e.jsx(un,{style:{margin:0}}),e.jsx(c,{style:{padding:8},children:e.jsx(s,{type:"primary",children:"Click me!"})})]}),children:e.jsx("a",{onClick:i=>{i.preventDefault()},children:e.jsxs(c,{children:["Hover me",e.jsx(m,{name:"alicorn"})]})})})})}},_={render:()=>{const[t,a]=G.useState(!1),l=i=>{i.key==="3"&&a(!1)},d=(i,h)=>{(h.source==="trigger"||i)&&a(i)},u=[{label:"Clicking me will not close the menu.",key:"1"},{label:"Clicking me will not close the menu also.",key:"2"},{label:"Clicking me will close the menu.",key:"3"}];return e.jsx(p,{title:"The default is to close the menu when you click on menu items, this feature can be turned off.",children:e.jsx(o,{menu:{items:u,onClick:l},onOpenChange:d,open:t,children:e.jsx("a",{onClick:i=>{i.preventDefault()},children:e.jsxs(c,{children:["Hover me",e.jsx(m,{name:"alicorn"})]})})})})}},A={render:()=>{const t=[{label:"Submit and continue",key:"1"}],[a,l]=G.useState([]),d=u=>{l(i=>{const h=[...i];return h[u]=!0,h}),setTimeout(()=>{l(i=>{const h=[...i];return h[u]=!1,h})},2e3)};return e.jsx(p,{title:"A loading indicator can be added to a button by setting the loading property on the Dropdown.Button.",children:e.jsxs(c,{direction:"vertical",children:[e.jsx(o.Button,{type:"primary",loading:!0,menu:{items:t},children:"Submit"}),e.jsx(o.Button,{type:"primary",size:"small",loading:!0,menu:{items:t},children:"Submit"}),e.jsx(o.Button,{type:"primary",loading:a[0],menu:{items:t},onClick:()=>{d(0)},children:"Submit"}),e.jsx(o.Button,{icon:e.jsx(m,{name:"alicorn"}),loading:a[1],menu:{items:t},onClick:()=>{d(1)},children:"Submit"})]})})}},O={render:()=>{const t=[{key:"1",label:"Item 1"},{key:"2",label:"Item 2"},{key:"3",label:"Item 3"}];return e.jsx(p,{title:"Configure the selectable property in menu to enable selectability.",children:e.jsx(o,{menu:{items:t,selectable:!0,defaultSelectedKeys:["3"]},children:e.jsx(hn.Link,{children:e.jsxs(c,{children:["Selectable",e.jsx(m,{name:"alicorn"})]})})})})}},T={render:()=>{const t=[{label:"1st menu item",key:"1"},{label:"2nd menu item",key:"2"},{label:"3rd menu item",key:"3"}],{token:{colorBgLayout:a,colorTextTertiary:l}}=ln.useToken();return e.jsx(p,{title:"The default trigger mode is hover, you can change it to contextMenu. The pop-up menu position will follow the right-click position.",children:e.jsx(o,{menu:{items:t},trigger:["contextMenu"],children:e.jsx("div",{style:{color:l,background:a,height:200,textAlign:"center",lineHeight:"200px"},children:"Right Click on here"})})})}},M={render:()=>{const t=[{key:"1",type:"group",label:"Group title",children:[{key:"1-1",label:"1st menu item"},{key:"1-2",label:"2nd menu item"}]},{key:"2",label:"sub menu",children:[{key:"2-1",label:"3rd menu item"},{key:"2-2",label:"4th menu item"}]},{key:"3",label:"disabled sub menu",disabled:!0,children:[{key:"3-1",label:"5d menu item"},{key:"3-2",label:"6th menu item"}]}];return e.jsx(p,{title:"The menu has multiple levels.",children:e.jsx(o,{menu:{items:t},children:e.jsx("a",{onClick:a=>{a.preventDefault()},children:e.jsxs(c,{children:["Cascading menu",e.jsx(m,{name:"alicorn"})]})})})})}},I={render:()=>{const t=u=>{alert("Click on left button."),console.log("click left button",u)},a=u=>{alert("Click on menu item."),console.log("click",u)},d={items:[{label:"1st menu item",key:"1",icon:e.jsx(m,{name:"users"})},{label:"2nd menu item",key:"2",icon:e.jsx(m,{name:"users"})},{label:"3rd menu item",key:"3",icon:e.jsx(m,{name:"users"}),danger:!0},{label:"4rd menu item",key:"4",icon:e.jsx(m,{name:"users"}),danger:!0,disabled:!0}],onClick:a};return e.jsx(p,{title:"A button is on the left, and a related functional menu is on the right. You can set the icon property to modify the icon of right.",children:e.jsxs(c,{wrap:!0,children:[e.jsx(o.Button,{menu:d,onClick:t,children:"Dropdown"}),e.jsx(o.Button,{menu:d,placement:"bottom",icon:e.jsx(m,{name:"users"}),children:"Dropdown"}),e.jsx(o.Button,{menu:d,onClick:t,disabled:!0,children:"Dropdown"}),e.jsx(o.Button,{menu:d,buttonsRender:([u,i])=>[e.jsx(wn,{title:"tooltip",children:u},"leftButton"),G.cloneElement(i,{loading:!0})],children:"With Tooltip"}),e.jsx(o,{menu:d,children:e.jsx(s,{children:e.jsxs(c,{children:["Button",e.jsx(m,{name:"alicorn"})]})})}),e.jsx(o.Button,{menu:d,onClick:t,danger:!0,children:"Danger"})]})})}},H={render:()=>{const t=[{label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com",children:"1st menu item"}),key:"0"},{label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com",children:"2nd menu item"}),key:"1"},{type:"divider"},{label:"3rd menu item（disabled）",key:"3",disabled:!0}];return e.jsx(p,{title:"Divider and disabled menu item.",children:e.jsx(o,{menu:{items:t},children:e.jsx("a",{onClick:a=>{a.preventDefault()},children:e.jsxs(c,{children:["Hover me",e.jsx(m,{name:"alicorn"})]})})})})}};var F,N,Y;w.parameters=r(n({},w.parameters),{docs:r(n({},(F=w.parameters)==null?void 0:F.docs),{source:n({originalSource:"{}"},(Y=(N=w.parameters)==null?void 0:N.docs)==null?void 0:Y.source)})});var K,$,q;b.parameters=r(n({},b.parameters),{docs:r(n({},(K=b.parameters)==null?void 0:K.docs),{source:n({originalSource:`{
  args: {
    arrow: true
  }
}`},(q=($=b.parameters)==null?void 0:$.docs)==null?void 0:q.source)})});var J,Q,U;g.parameters=r(n({},g.parameters),{docs:r(n({},(J=g.parameters)==null?void 0:J.docs),{source:n({originalSource:`{
  args: {
    disabled: true
  }
}`},(U=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:U.source)})});var V,X,Z;y.parameters=r(n({},y.parameters),{docs:r(n({},(V=y.parameters)==null?void 0:V.docs),{source:n({originalSource:`{
  args: {
    dropdownRender: (menus: ReactNode) => {
      // Customize dropdown content as needed
      return <div> Custom Components Go Here</div>;
    }
  }
}`},(Z=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Z.source)})});var ee,ne,te;k.parameters=r(n({},k.parameters),{docs:r(n({},(ee=k.parameters)==null?void 0:ee.docs),{source:n({originalSource:`{
  args: {
    autoAdjustOverflow: false
  }
}`},(te=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:te.source)})});var re,oe,ae;x.parameters=r(n({},x.parameters),{docs:r(n({},(re=x.parameters)==null?void 0:re.docs),{source:n({originalSource:`{
  args: {
    destroyPopupOnHide: true
  }
}`},(ae=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ae.source)})});var le,se,ie;f.parameters=r(n({},f.parameters),{docs:r(n({},(le=f.parameters)==null?void 0:le.docs),{source:n({originalSource:`{
  args: {
    overlayStyle: {
      color: 'red'
    }
  }
}`},(ie=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ie.source)})});var me,ce,de;j.parameters=r(n({},j.parameters),{docs:r(n({},(me=j.parameters)==null?void 0:me.docs),{source:n({originalSource:`{
  args: {
    placement: 'topRight'
  }
}`},(de=(ce=j.parameters)==null?void 0:ce.docs)==null?void 0:de.source)})});var pe,ue,he;S.parameters=r(n({},S.parameters),{docs:r(n({},(pe=S.parameters)==null?void 0:pe.docs),{source:n({originalSource:`{
  args: {
    trigger: ['click']
  }
}`},(he=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:he.source)})});var we,be,ge;C.parameters=r(n({},C.parameters),{docs:r(n({},(we=C.parameters)==null?void 0:we.docs),{source:n({originalSource:`{
  args: {
    open: true
  }
}`},(ge=(be=C.parameters)==null?void 0:be.docs)==null?void 0:ge.source)})});var ye,ke,xe;D.parameters=r(n({},D.parameters),{docs:r(n({},(ye=D.parameters)==null?void 0:ye.docs),{source:n({originalSource:`{
  args: {
    onOpenChange: (open: boolean, info: {
      source: 'trigger' | 'menu';
    }) => {
      alert('Dropdown Open: ' + open);
    }
  }
}`},(xe=(ke=D.parameters)==null?void 0:ke.docs)==null?void 0:xe.source)})});var fe,je,Se;B.parameters=r(n({},B.parameters),{docs:r(n({},(fe=B.parameters)==null?void 0:fe.docs),{source:n({originalSource:`{
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
}`},(Se=(je=B.parameters)==null?void 0:je.docs)==null?void 0:Se.source)})});var Ce,De,Be;v.parameters=r(n({},v.parameters),{docs:r(n({},(Ce=v.parameters)==null?void 0:Ce.docs),{source:n({originalSource:`{
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
}`},(Be=(De=v.parameters)==null?void 0:De.docs)==null?void 0:Be.source)})});var ve,Ee,Le;E.parameters=r(n({},E.parameters),{docs:r(n({},(ve=E.parameters)==null?void 0:ve.docs),{source:n({originalSource:`{
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
}`},(Le=(Ee=E.parameters)==null?void 0:Ee.docs)==null?void 0:Le.source)})});var Re,Pe,_e;L.parameters=r(n({},L.parameters),{docs:r(n({},(Re=L.parameters)==null?void 0:Re.docs),{source:n({originalSource:`{
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
}`},(_e=(Pe=L.parameters)==null?void 0:Pe.docs)==null?void 0:_e.source)})});var Ae,Oe,Te;R.parameters=r(n({},R.parameters),{docs:r(n({},(Ae=R.parameters)==null?void 0:Ae.docs),{source:n({originalSource:`{
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
}`},(Te=(Oe=R.parameters)==null?void 0:Oe.docs)==null?void 0:Te.source)})});var Me,Ie,He;P.parameters=r(n({},P.parameters),{docs:r(n({},(Me=P.parameters)==null?void 0:Me.docs),{source:n({originalSource:`{
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
              {cloneElement((menu as React.ReactElement), {
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
}`},(He=(Ie=P.parameters)==null?void 0:Ie.docs)==null?void 0:He.source)})});var Ge,We,ze;_.parameters=r(n({},_.parameters),{docs:r(n({},(Ge=_.parameters)==null?void 0:Ge.docs),{source:n({originalSource:`{
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
}`},(ze=(We=_.parameters)==null?void 0:We.docs)==null?void 0:ze.source)})});var Fe,Ne,Ye;A.parameters=r(n({},A.parameters),{docs:r(n({},(Fe=A.parameters)==null?void 0:Fe.docs),{source:n({originalSource:`{
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
}`},(Ye=(Ne=A.parameters)==null?void 0:Ne.docs)==null?void 0:Ye.source)})});var Ke,$e,qe;O.parameters=r(n({},O.parameters),{docs:r(n({},(Ke=O.parameters)==null?void 0:Ke.docs),{source:n({originalSource:`{
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
}`},(qe=($e=O.parameters)==null?void 0:$e.docs)==null?void 0:qe.source)})});var Je,Qe,Ue;T.parameters=r(n({},T.parameters),{docs:r(n({},(Je=T.parameters)==null?void 0:Je.docs),{source:n({originalSource:`{
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
}`},(Ue=(Qe=T.parameters)==null?void 0:Qe.docs)==null?void 0:Ue.source)})});var Ve,Xe,Ze;M.parameters=r(n({},M.parameters),{docs:r(n({},(Ve=M.parameters)==null?void 0:Ve.docs),{source:n({originalSource:`{
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
}`},(Ze=(Xe=M.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source)})});var en,nn,tn;I.parameters=r(n({},I.parameters),{docs:r(n({},(en=I.parameters)==null?void 0:en.docs),{source:n({originalSource:`{
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
              </Tooltip>, cloneElement((rightButton as React.ReactElement<any, string>), {
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
}`},(tn=(nn=I.parameters)==null?void 0:nn.docs)==null?void 0:tn.source)})});var rn,on,an;H.parameters=r(n({},H.parameters),{docs:r(n({},(rn=H.parameters)==null?void 0:rn.docs),{source:n({originalSource:`{
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
}`},(an=(on=H.parameters)==null?void 0:on.docs)==null?void 0:an.source)})});const In=["Primary","WithArrow","Disabled","CustomDropdownRender","AutoAdjustOverflow","DestroyPopupOnHide","WithOverlayStyle","CustomPlacement","TriggerClick","OpenDropdown","OnOpenChangeCallback","ExampleBasic","ExamplePlacement","ExampleArrow","ExampleArrowCenter","ExampleClickEvent","ExampleCustomDropdown","ExampleClosingMenu","ExampleLoading","ExampleSelectable","ExampleContextMenu","ExampleNested","ExampleButtons","ExampleContainerDivider"];export{k as AutoAdjustOverflow,y as CustomDropdownRender,j as CustomPlacement,x as DestroyPopupOnHide,g as Disabled,E as ExampleArrow,L as ExampleArrowCenter,B as ExampleBasic,I as ExampleButtons,R as ExampleClickEvent,_ as ExampleClosingMenu,H as ExampleContainerDivider,T as ExampleContextMenu,P as ExampleCustomDropdown,A as ExampleLoading,M as ExampleNested,v as ExamplePlacement,O as ExampleSelectable,D as OnOpenChangeCallback,C as OpenDropdown,w as Primary,S as TriggerClick,b as WithArrow,f as WithOverlayStyle,In as __namedExportsOrder,Mn as default};
