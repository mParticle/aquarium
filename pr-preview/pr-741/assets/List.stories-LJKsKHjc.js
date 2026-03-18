var S=Object.defineProperty,j=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var m=(t,e,s)=>e in t?S(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,i=(t,e)=>{for(var s in e||(e={}))w.call(e,s)&&m(t,s,e[s]);if(c)for(var s of c(e))v.call(e,s)&&m(t,s,e[s]);return t},o=(t,e)=>j(t,T(e));import{j as r}from"./jsx-runtime-C9TrHvcC.js";import{L as a,b as L,F as z}from"./UnauthorizedTooltip-CEYl6V1S.js";import"./ErrorStateIcon-CMdTSnhI.js";import"./SuccessStateIcon-BRWE1o3k.js";import"./WarningStateIcon-CCPM9hWQ.js";import"./_baseClone-DwBCp-Ss.js";import"./index-3OP4wdng.js";import{E as k}from"./ExampleStory-BE6BAVCY.js";const M={title:"Components/Data Display/List",component:a,args:{bordered:!1,split:!1,size:"default",dataSource:["item1","item2","item3"],renderItem:t=>r.jsx(a.Item,{children:t})},argTypes:{bordered:{control:"boolean",description:"Toggle whether the list is bordered"},split:{control:"boolean",description:"Toggle whether list items are split by a divider"},size:{control:"select",options:["default","large","small"]}}},n={args:{bordered:!0,split:!0,size:"default",dataSource:["Item 1","Item 2","Item 3"],renderItem:t=>r.jsx(a.Item,{children:t})},argTypes:{bordered:{control:"select",options:[!1,!0]},split:{control:"select",options:[!1,!0]},size:{control:"select",options:["default","large","small"]},dataSource:{table:{disable:!0}},renderItem:{table:{disable:!0}}}},d={args:{header:r.jsx(L.Text,{strong:!0,children:"List Header"}),bordered:!1,split:!0,size:"default"},render:t=>{const e=["Racing car sprays burning fuel into crowd.","Japanese princess to wed commoner.","Australian walks 100km after outback crash.","Man charged over missing wedding girl.","Los Angeles battles huge wildfires."];return r.jsx(a,o(i({},t),{header:r.jsx("div",{children:"List Header"}),footer:r.jsx("div",{children:"List Footer"}),dataSource:e,renderItem:s=>r.jsx(a.Item,{children:s})}))}},l={render:()=>{const t=[{title:"item1",description:"description1"},{title:"item2",description:"description2"},{title:"item3",description:"description3"}];return r.jsx(k,{title:"A List that supports title and description.",children:r.jsx(a,{dataSource:t,itemLayout:"vertical",renderItem:e=>r.jsx(a.Item,{children:r.jsx(z,{gap:"middle",children:r.jsx(a.Item.Meta,{title:r.jsx(L.Text,{strong:!0,children:e.title}),description:e.description,className:"u-margin-bottom-none"})})},e.title)})})}};var p,u,g;n.parameters=o(i({},n.parameters),{docs:o(i({},(p=n.parameters)==null?void 0:p.docs),{source:i({originalSource:`{
  args: {
    bordered: true,
    split: true,
    size: 'default',
    dataSource: ['Item 1', 'Item 2', 'Item 3'],
    renderItem: (item: unknown) => <List.Item>{item as string}</List.Item>
  },
  argTypes: {
    bordered: {
      control: 'select',
      options: [false, true]
    },
    split: {
      control: 'select',
      options: [false, true]
    },
    size: {
      control: 'select',
      options: ['default', 'large', 'small']
    },
    dataSource: {
      table: {
        disable: true
      }
    },
    renderItem: {
      table: {
        disable: true
      }
    }
  }
}`},(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source)})});var h,b,f;d.parameters=o(i({},d.parameters),{docs:o(i({},(h=d.parameters)==null?void 0:h.docs),{source:i({originalSource:`{
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
}`},(f=(b=d.parameters)==null?void 0:b.docs)==null?void 0:f.source)})});var x,y,I;l.parameters=o(i({},l.parameters),{docs:o(i({},(x=l.parameters)==null?void 0:x.docs),{source:i({originalSource:`{
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
}`},(I=(y=l.parameters)==null?void 0:y.docs)==null?void 0:I.source)})});const A=["Playground","Primary","WithMetaItems"],J=Object.freeze(Object.defineProperty({__proto__:null,Playground:n,Primary:d,WithMetaItems:l,__namedExportsOrder:A,default:M},Symbol.toStringTag,{value:"Module"}));export{J as L,d as P,l as W,n as a};
