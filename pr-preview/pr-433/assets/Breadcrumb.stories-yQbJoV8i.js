var K=Object.defineProperty,M=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var y=(n,a,o)=>a in n?K(n,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[a]=o,e=(n,a)=>{for(var o in a||(a={}))U.call(a,o)&&y(n,o,a[o]);if(f)for(var o of f(a))Y.call(a,o)&&y(n,o,a[o]);return n},r=(n,a)=>M(n,Q(a));import{j as t}from"./jsx-runtime-BcCOBRXo.js";import{ai as i,I as b,af as Z,aj as $}from"./GlobalNavigation-CjR4SrT2.js";import"./ConfigProvider-C77M1HMj.js";import"./_baseClone-BjCwUuX-.js";import{E as s}from"./ExampleStory-RjLLyI9A.js";import"./index-CNk6hRaE.js";import"./index-z2stgOKB.js";import"./useToken-5RYkiW09.js";import"./extends-CF3RwP-h.js";import"./Serializer-OW4gUFyn.js";import"./index-D-4E_f9W.js";import"./isNativeReflectConstruct-CYew8PZR.js";import"./row-DegztUsn.js";import"./dayjs.min-KGLNs1IR.js";import"./customParseFormat-oYt9ov06.js";import"./LightTheme-DxveuNKr.js";import"./_getPrototype-CAOE_2rY.js";const ye={title:"Components/Navigation/Breadcrumb",component:i,args:{separator:"/",items:[{title:"Home"},{title:"Category"},{title:"Subcategory"},{title:"Current Page"}]}},l={},p={args:{separator:">"}},m={args:{items:[{title:"Very Long Label 1"},{title:"Very Long Label 2"},{title:"Current Page with a Very Long Label"}]}},c={args:{separator:">",items:[{title:"Page 1"},{title:"Page 2"},{title:"Current Page"}],itemRender:(n,a,o)=>t.jsx("span",{style:{color:n.title===o[1].title?"red":"black"},children:n.title})}},d={render:()=>t.jsx(s,{title:"The simplest use.",children:t.jsx(i,{items:[{title:"Home"},{title:t.jsx("a",{href:"",children:"Application Center"})},{title:t.jsx("a",{href:"",children:"Application List"})},{title:"An Application"}]})})},u={render:()=>t.jsx(s,{title:"The icon should be placed in front of the text.",children:t.jsx(i,{items:[{href:"",title:t.jsx(b,{name:"alicorn"})},{href:"",title:t.jsxs(Z,{children:[t.jsx(b,{name:"mpLogo",size:"sm"}),t.jsx("span",{style:{paddingLeft:$},children:"Application List"})]})},{title:"Application"}]})})},h={render:()=>t.jsx(s,{title:"The separator can be customized",children:t.jsx(i,{separator:">",items:[{title:"Home"},{title:"Application Center",href:""},{title:"Application List",href:""},{title:"An Application"}]})})},g={render:()=>{const n=[{key:"1",label:t.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.alipay.com/",children:"General"})},{key:"2",label:t.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.taobao.com/",children:"Layout"})},{key:"3",label:t.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.tmall.com/",children:"Navigation"})}];return t.jsx(s,{title:"Breadcrumbs support drop down menu.",children:t.jsx(i,{items:[{title:"Ant Design"},{title:t.jsx("a",{href:"",children:"Component"})},{title:t.jsx("a",{href:"",children:"General"}),menu:{items:n}},{title:"Button"}]})})}},x={render:()=>t.jsx(s,{title:"Customize separator for each item.",children:t.jsx(i,{separator:"",items:[{title:"Location"},{type:"separator",separator:":"},{href:"",title:"Application Center"},{type:"separator"},{href:"",title:"Application List"},{type:"separator"},{title:"An Application"}]})})};var L,A,S;l.parameters=r(e({},l.parameters),{docs:r(e({},(L=l.parameters)==null?void 0:L.docs),{source:e({originalSource:"{}"},(S=(A=l.parameters)==null?void 0:A.docs)==null?void 0:S.source)})});var j,w,C;p.parameters=r(e({},p.parameters),{docs:r(e({},(j=p.parameters)==null?void 0:j.docs),{source:e({originalSource:`{
  args: {
    separator: '>'
  }
}`},(C=(w=p.parameters)==null?void 0:w.docs)==null?void 0:C.source)})});var E,I,k;m.parameters=r(e({},m.parameters),{docs:r(e({},(E=m.parameters)==null?void 0:E.docs),{source:e({originalSource:`{
  args: {
    items: [{
      title: 'Very Long Label 1'
    }, {
      title: 'Very Long Label 2'
    }, {
      title: 'Current Page with a Very Long Label'
    }]
  }
}`},(k=(I=m.parameters)==null?void 0:I.docs)==null?void 0:k.source)})});var B,P,_;c.parameters=r(e({},c.parameters),{docs:r(e({},(B=c.parameters)==null?void 0:B.docs),{source:e({originalSource:`{
  args: {
    separator: '>',
    items: [{
      title: 'Page 1'
    }, {
      title: 'Page 2'
    }, {
      title: 'Current Page'
    }],
    itemRender: (item, index, items) => <span style={{
      color: item.title === items[1].title ? 'red' : 'black'
    }}>{item.title}</span>
  }
}`},(_=(P=c.parameters)==null?void 0:P.docs)==null?void 0:_.source)})});var z,T,V;d.parameters=r(e({},d.parameters),{docs:r(e({},(z=d.parameters)==null?void 0:z.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title="The simplest use.">
        <Breadcrumb items={[{
        title: 'Home'
      }, {
        title: <a href="">Application Center</a>
      }, {
        title: <a href="">Application List</a>
      }, {
        title: 'An Application'
      }]} />
      </ExampleStory>;
  }
}`},(V=(T=d.parameters)==null?void 0:T.docs)==null?void 0:V.source)})});var W,H,R;u.parameters=r(e({},u.parameters),{docs:r(e({},(W=u.parameters)==null?void 0:W.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title="The icon should be placed in front of the text.">
        <Breadcrumb items={[{
        href: '',
        title: <Icon name="alicorn" />
      }, {
        href: '',
        title: <Center>
                  <Icon name="mpLogo" size="sm" />
                  <span style={{
            paddingLeft: PaddingXs
          }}>Application List</span>
                </Center>
      }, {
        title: 'Application'
      }]} />
      </ExampleStory>;
  }
}`},(R=(H=u.parameters)==null?void 0:H.docs)==null?void 0:R.source)})});var D,G,v;h.parameters=r(e({},h.parameters),{docs:r(e({},(D=h.parameters)==null?void 0:D.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title="The separator can be customized">
        <Breadcrumb separator=">" items={[{
        title: 'Home'
      }, {
        title: 'Application Center',
        href: ''
      }, {
        title: 'Application List',
        href: ''
      }, {
        title: 'An Application'
      }]} />
      </ExampleStory>;
  }
}`},(v=(G=h.parameters)==null?void 0:G.docs)==null?void 0:v.source)})});var N,X,O;g.parameters=r(e({},g.parameters),{docs:r(e({},(N=g.parameters)==null?void 0:N.docs),{source:e({originalSource:`{
  render: () => {
    const menuItems = [{
      key: '1',
      label: <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            General
          </a>
    }, {
      key: '2',
      label: <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            Layout
          </a>
    }, {
      key: '3',
      label: <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            Navigation
          </a>
    }];
    return <ExampleStory title="Breadcrumbs support drop down menu.">
        <Breadcrumb items={[{
        title: 'Ant Design'
      }, {
        title: <a href="">Component</a>
      }, {
        title: <a href="">General</a>,
        menu: {
          items: menuItems
        }
      }, {
        title: 'Button'
      }]} />
      </ExampleStory>;
  }
}`},(O=(X=g.parameters)==null?void 0:X.docs)==null?void 0:O.source)})});var q,F,J;x.parameters=r(e({},x.parameters),{docs:r(e({},(q=x.parameters)==null?void 0:q.docs),{source:e({originalSource:`{
  render: () => {
    return <ExampleStory title="Customize separator for each item.">
        <Breadcrumb separator="" items={[{
        title: 'Location'
      }, {
        type: 'separator',
        separator: ':'
      }, {
        href: '',
        title: 'Application Center'
      }, {
        type: 'separator'
      }, {
        href: '',
        title: 'Application List'
      }, {
        type: 'separator'
      }, {
        title: 'An Application'
      }]} />
      </ExampleStory>;
  }
}`},(J=(F=x.parameters)==null?void 0:F.docs)==null?void 0:J.source)})});const be=["Primary","WithCustomSeparator","WithLongItemLabels","WithCustomItemRender","ExampleBasic","ExampleIcon","ExampleSeperator","ExampleDropdown","ExampleIndependentSeparators"];export{d as ExampleBasic,g as ExampleDropdown,u as ExampleIcon,x as ExampleIndependentSeparators,h as ExampleSeperator,l as Primary,c as WithCustomItemRender,p as WithCustomSeparator,m as WithLongItemLabels,be as __namedExportsOrder,ye as default};