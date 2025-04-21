var L=Object.defineProperty,f=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var c=(t,e,i)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,s=(t,e)=>{for(var i in e||(e={}))j.call(e,i)&&c(t,i,e[i]);if(l)for(var i of l(e))S.call(e,i)&&c(t,i,e[i]);return t},a=(t,e)=>f(t,b(e));import{j as r}from"./jsx-runtime-BcCOBRXo.js";import{L as o,f as y,F as I}from"./NavigationItemsService-D07KrxCy.js";import"./_baseClone-DBzvlRjn.js";import{E as T}from"./ExampleStory-ByniDHPF.js";const v={title:"Components/Data Display/List",component:t=>r.jsx(o,s({},t)),args:{bordered:!1,split:!1,size:"default",dataSource:["item1","item2","item3"],renderItem:t=>r.jsx(o.Item,{children:t})},argTypes:{bordered:{control:"boolean",description:"Toggle whether the list is bordered"},split:{control:"boolean",description:"Toggle whether list items are split by a divider"},size:{control:"select",options:["default","large","small"]}}},n={args:{header:r.jsx(y.Text,{strong:!0,children:"List Header"}),bordered:!1,split:!0,size:"default"},render:t=>{const e=["Racing car sprays burning fuel into crowd.","Japanese princess to wed commoner.","Australian walks 100km after outback crash.","Man charged over missing wedding girl.","Los Angeles battles huge wildfires."];return r.jsx(o,a(s({},t),{header:r.jsx("div",{children:"List Header"}),footer:r.jsx("div",{children:"List Footer"}),dataSource:e,renderItem:i=>r.jsx(o.Item,{children:i})}))}},d={render:()=>{const t=[{title:"item1",description:"description1"},{title:"item2",description:"description2"},{title:"item3",description:"description3"}];return r.jsx(T,{title:"A List that supports title and description.",children:r.jsx(o,{dataSource:t,itemLayout:"vertical",renderItem:e=>r.jsx(o.Item,{children:r.jsx(I,{gap:"middle",children:r.jsx(o.Item.Meta,{title:r.jsx(y.Text,{strong:!0,children:e.title}),description:e.description,className:"u-margin-bottom-none"})})},e.title)})})}};var m,p,u;n.parameters=a(s({},n.parameters),{docs:a(s({},(m=n.parameters)==null?void 0:m.docs),{source:s({originalSource:`{
  args: {
    header: <Typography.Text strong>List Header</Typography.Text>,
    bordered: false,
    split: true,
    size: 'default'
  },
  render: args => {
    const dataSource = ['Racing car sprays burning fuel into crowd.', 'Japanese princess to wed commoner.', 'Australian walks 100km after outback crash.', 'Man charged over missing wedding girl.', 'Los Angeles battles huge wildfires.'];
    return <List {...args} header={<div>List Header</div>} footer={<div>List Footer</div>} dataSource={dataSource} renderItem={item => <List.Item>{item}</List.Item>} />;
  }
}`},(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source)})});var g,h,x;d.parameters=a(s({},d.parameters),{docs:a(s({},(g=d.parameters)==null?void 0:g.docs),{source:s({originalSource:`{
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
}`},(x=(h=d.parameters)==null?void 0:h.docs)==null?void 0:x.source)})});const w=["Primary","WithMetaItems"],_=Object.freeze(Object.defineProperty({__proto__:null,Primary:n,WithMetaItems:d,__namedExportsOrder:w,default:v},Symbol.toStringTag,{value:"Module"}));export{_ as L,v as m};
