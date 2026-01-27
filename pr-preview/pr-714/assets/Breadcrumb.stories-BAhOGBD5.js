import{aV as t,j as e,I as u,$ as g,P as x}from"./iframe-_QPLlW2H.js";import{E as c}from"./ExampleStory-z2QCavMP.js";const f={title:"Components/Not Prod Ready/Navigation/Breadcrumb",component:t,args:{separator:"/",items:[{title:"Home"},{title:"Category"},{title:"Subcategory"},{title:"Current Page"}]}},r={},a={args:{separator:">"}},o={args:{items:[{title:"Very Long Label 1"},{title:"Very Long Label 2"},{title:"Current Page with a Very Long Label"}]}},n={args:{separator:">",items:[{title:"Page 1"},{title:"Page 2"},{title:"Current Page"}],itemRender:(d,b,h)=>e.jsx("span",{style:{color:d.title===h[1].title?"red":"black"},children:d.title})}},s={render:()=>e.jsx(c,{title:"The simplest use.",children:e.jsx(t,{items:[{title:"Home"},{title:e.jsx("a",{href:"",children:"Application Center"})},{title:e.jsx("a",{href:"",children:"Application List"})},{title:"An Application"}]})})},i={render:()=>e.jsx(c,{title:"The icon should be placed in front of the text.",children:e.jsx(t,{items:[{href:"",title:e.jsx(u,{name:"alicorn"})},{href:"",title:e.jsxs(g,{children:[e.jsx(u,{name:"mpLogo",size:"sm"}),e.jsx("span",{style:{paddingLeft:x},children:"Application List"})]})},{title:"Application"}]})})},l={render:()=>e.jsx(c,{title:"The separator can be customized",children:e.jsx(t,{separator:">",items:[{title:"Home"},{title:"Application Center",href:""},{title:"Application List",href:""},{title:"An Application"}]})})},p={render:()=>{const d=[{key:"1",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.alipay.com/",children:"General"})},{key:"2",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.taobao.com/",children:"Layout"})},{key:"3",label:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.tmall.com/",children:"Navigation"})}];return e.jsx(c,{title:"Breadcrumbs support drop down menu.",children:e.jsx(t,{items:[{title:"Ant Design"},{title:e.jsx("a",{href:"",children:"Component"})},{title:e.jsx("a",{href:"",children:"General"}),menu:{items:d}},{title:"Button"}]})})}},m={render:()=>e.jsx(c,{title:"Customize separator for each item.",children:e.jsx(t,{separator:"",items:[{title:"Location"},{type:"separator",separator:":"},{href:"",title:"Application Center"},{type:"separator"},{href:"",title:"Application List"},{type:"separator"},{title:"An Application"}]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    separator: '>'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      title: 'Very Long Label 1'
    }, {
      title: 'Very Long Label 2'
    }, {
      title: 'Current Page with a Very Long Label'
    }]
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const y=["Primary","WithCustomSeparator","WithLongItemLabels","WithCustomItemRender","ExampleBasic","ExampleIcon","ExampleSeperator","ExampleDropdown","ExampleIndependentSeparators"],S=Object.freeze(Object.defineProperty({__proto__:null,ExampleBasic:s,ExampleDropdown:p,ExampleIcon:i,ExampleIndependentSeparators:m,ExampleSeperator:l,Primary:r,WithCustomItemRender:n,WithCustomSeparator:a,WithLongItemLabels:o,__namedExportsOrder:y,default:f},Symbol.toStringTag,{value:"Module"}));export{S as B,f as m};
