var I=Object.defineProperty,f=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var p=(t,e,i)=>e in t?I(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,r=(t,e)=>{for(var i in e||(e={}))_.call(e,i)&&p(t,i,e[i]);if(d)for(var i of d(e))b.call(e,i)&&p(t,i,e[i]);return t},o=(t,e)=>f(t,E(e));import{j as s}from"./jsx-runtime-BcCOBRXo.js";import{L as c,f as T,F as M}from"./GlobalNavigation-ByoW-fgh.js";import"./_baseClone-DBzvlRjn.js";import{E as F}from"./ExampleStory-Bj2tg3wU.js";const H={title:"Components/Data Display/List",component:t=>s.jsx(c,r({},t)),args:{dataSource:["item1","item2","item3"],renderItem:t=>s.jsx(c.Item,{children:t})}},a={},m={args:{header:s.jsx(T.Text,{strong:!0,children:"List Header"}),dataSource:["item1","item2","item3"]}},n={render:()=>{const t=[{title:"item1",description:"description1"},{title:"item2",description:"description2"},{title:"item3",description:"description3"}];return s.jsx(F,{title:"A List that supports title and description.",children:s.jsx(c,{dataSource:t,itemLayout:"vertical",renderItem:e=>s.jsx(c.Item,{children:s.jsx(M,{gap:"middle",children:s.jsx(c.Item.Meta,{title:s.jsx(T.Text,{strong:!0,children:e.title}),description:e.description,className:"u-margin-bottom-none"})})},e.title)})})}};var l,u,x;a.parameters=o(r({},a.parameters),{docs:o(r({},(l=a.parameters)==null?void 0:l.docs),{source:r({originalSource:"{}"},(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source)})});var g,y,h;m.parameters=o(r({},m.parameters),{docs:o(r({},(g=m.parameters)==null?void 0:g.docs),{source:r({originalSource:`{
  args: {
    header: <Typography.Text strong>List Header</Typography.Text>,
    dataSource: ['item1', 'item2', 'item3']
  }
}`},(h=(y=m.parameters)==null?void 0:y.docs)==null?void 0:h.source)})});var S,L,j;n.parameters=o(r({},n.parameters),{docs:o(r({},(S=n.parameters)==null?void 0:S.docs),{source:r({originalSource:`{
  render: () => {
    const dataSource = [{
      title: 'item1',
      description: 'description1'
    }, {
      title: 'item2',
      description: 'description2'
    }, {
      title: 'item3',
      description: 'description3'
    }];
    return <ExampleStory title="A List that supports title and description.">
        <List dataSource={dataSource} itemLayout="vertical" renderItem={item => <List.Item key={item.title}>
              <Flex gap="middle">
                <List.Item.Meta title={<Typography.Text strong>{item.title}</Typography.Text>} description={item.description} className="u-margin-bottom-none" />
              </Flex>
            </List.Item>} />
      </ExampleStory>;
  }
}`},(j=(L=n.parameters)==null?void 0:L.docs)==null?void 0:j.source)})});const v=["Primary","CustomHeader","WithMetaItems"],N=Object.freeze(Object.defineProperty({__proto__:null,CustomHeader:m,Primary:a,WithMetaItems:n,__namedExportsOrder:v,default:H},Symbol.toStringTag,{value:"Module"}));export{N as L,H as m};
