var J=Object.defineProperty,K=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var y=(a,o,n)=>o in a?J(a,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[o]=n,e=(a,o)=>{for(var n in o||(o={}))U.call(o,n)&&y(a,n,o[n]);if(f)for(var n of f(o))Y.call(o,n)&&y(a,n,o[n]);return a},r=(a,o)=>K(a,Q(o));import{j as t}from"./jsx-runtime-C9TrHvcC.js";import{a1 as i,I as b,a2 as Z}from"./NavigationItemsService-DGzmtuAI.js";import"./ErrorStateIcon-Buo3EmSk.js";import"./SuccessStateIcon-BdNLwogQ.js";import"./WarningStateIcon-Bo78RuPd.js";import"./_baseClone-DwBCp-Ss.js";import{P as $}from"./style-CTFkSbyR.js";import{E as x}from"./ExampleStory-D8wuAzCv.js";const ee={title:"Components/Not Prod Ready/Navigation/Breadcrumb",component:i,args:{separator:"/",items:[{title:"Home"},{title:"Category"},{title:"Subcategory"},{title:"Current Page"}]}},s={},l={args:{separator:">"}},p={args:{items:[{title:"Very Long Label 1"},{title:"Very Long Label 2"},{title:"Current Page with a Very Long Label"}]}},m={args:{separator:">",items:[{title:"Page 1"},{title:"Page 2"},{title:"Current Page"}],itemRender:(a,o,n)=>t.jsx("span",{style:{color:a.title===n[1].title?"red":"black"},children:a.title})}},c={render:()=>t.jsx(x,{title:"The simplest use.",children:t.jsx(i,{items:[{title:"Home"},{title:t.jsx("a",{href:"",children:"Application Center"})},{title:t.jsx("a",{href:"",children:"Application List"})},{title:"An Application"}]})})},d={render:()=>t.jsx(x,{title:"The icon should be placed in front of the text.",children:t.jsx(i,{items:[{href:"",title:t.jsx(b,{name:"alicorn"})},{href:"",title:t.jsxs(Z,{children:[t.jsx(b,{name:"mpLogo",size:"sm"}),t.jsx("span",{style:{paddingLeft:$},children:"Application List"})]})},{title:"Application"}]})})},u={render:()=>t.jsx(x,{title:"The separator can be customized",children:t.jsx(i,{separator:">",items:[{title:"Home"},{title:"Application Center",href:""},{title:"Application List",href:""},{title:"An Application"}]})})},h={render:()=>{const a=[{key:"1",label:t.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.alipay.com/",children:"General"})},{key:"2",label:t.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.taobao.com/",children:"Layout"})},{key:"3",label:t.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.tmall.com/",children:"Navigation"})}];return t.jsx(x,{title:"Breadcrumbs support drop down menu.",children:t.jsx(i,{items:[{title:"Ant Design"},{title:t.jsx("a",{href:"",children:"Component"})},{title:t.jsx("a",{href:"",children:"General"}),menu:{items:a}},{title:"Button"}]})})}},g={render:()=>t.jsx(x,{title:"Customize separator for each item.",children:t.jsx(i,{separator:"",items:[{title:"Location"},{type:"separator",separator:":"},{href:"",title:"Application Center"},{type:"separator"},{href:"",title:"Application List"},{type:"separator"},{title:"An Application"}]})})};var L,A,S;s.parameters=r(e({},s.parameters),{docs:r(e({},(L=s.parameters)==null?void 0:L.docs),{source:e({originalSource:"{}"},(S=(A=s.parameters)==null?void 0:A.docs)==null?void 0:S.source)})});var j,w,C;l.parameters=r(e({},l.parameters),{docs:r(e({},(j=l.parameters)==null?void 0:j.docs),{source:e({originalSource:`{
  args: {
    separator: '>'
  }
}`},(C=(w=l.parameters)==null?void 0:w.docs)==null?void 0:C.source)})});var E,P,B;p.parameters=r(e({},p.parameters),{docs:r(e({},(E=p.parameters)==null?void 0:E.docs),{source:e({originalSource:`{
  args: {
    items: [{
      title: 'Very Long Label 1'
    }, {
      title: 'Very Long Label 2'
    }, {
      title: 'Current Page with a Very Long Label'
    }]
  }
}`},(B=(P=p.parameters)==null?void 0:P.docs)==null?void 0:B.source)})});var I,k,_;m.parameters=r(e({},m.parameters),{docs:r(e({},(I=m.parameters)==null?void 0:I.docs),{source:e({originalSource:`{
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
}`},(_=(k=m.parameters)==null?void 0:k.docs)==null?void 0:_.source)})});var z,T,R;c.parameters=r(e({},c.parameters),{docs:r(e({},(z=c.parameters)==null?void 0:z.docs),{source:e({originalSource:`{
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
}`},(R=(T=c.parameters)==null?void 0:T.docs)==null?void 0:R.source)})});var V,W,H;d.parameters=r(e({},d.parameters),{docs:r(e({},(V=d.parameters)==null?void 0:V.docs),{source:e({originalSource:`{
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
}`},(H=(W=d.parameters)==null?void 0:W.docs)==null?void 0:H.source)})});var v,D,G;u.parameters=r(e({},u.parameters),{docs:r(e({},(v=u.parameters)==null?void 0:v.docs),{source:e({originalSource:`{
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
}`},(G=(D=u.parameters)==null?void 0:D.docs)==null?void 0:G.source)})});var N,O,X;h.parameters=r(e({},h.parameters),{docs:r(e({},(N=h.parameters)==null?void 0:N.docs),{source:e({originalSource:`{
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
}`},(X=(O=h.parameters)==null?void 0:O.docs)==null?void 0:X.source)})});var M,q,F;g.parameters=r(e({},g.parameters),{docs:r(e({},(M=g.parameters)==null?void 0:M.docs),{source:e({originalSource:`{
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
}`},(F=(q=g.parameters)==null?void 0:q.docs)==null?void 0:F.source)})});const te=["Primary","WithCustomSeparator","WithLongItemLabels","WithCustomItemRender","ExampleBasic","ExampleIcon","ExampleSeperator","ExampleDropdown","ExampleIndependentSeparators"],ce=Object.freeze(Object.defineProperty({__proto__:null,ExampleBasic:c,ExampleDropdown:h,ExampleIcon:d,ExampleIndependentSeparators:g,ExampleSeperator:u,Primary:s,WithCustomItemRender:m,WithCustomSeparator:l,WithLongItemLabels:p,__namedExportsOrder:te,default:ee},Symbol.toStringTag,{value:"Module"}));export{ce as B,ee as m};
