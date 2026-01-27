import{j as e,L as r,T as o,F as d}from"./iframe-B6Y2oegk.js";import{E as l}from"./ExampleStory-Dokjh494.js";const c={title:"Components/Data Display/List",component:t=>e.jsx(r,{...t}),args:{bordered:!1,split:!1,size:"default",dataSource:["item1","item2","item3"],renderItem:t=>e.jsx(r.Item,{children:t})},argTypes:{bordered:{control:"boolean",description:"Toggle whether the list is bordered"},split:{control:"boolean",description:"Toggle whether list items are split by a divider"},size:{control:"select",options:["default","large","small"]}}},s={args:{header:e.jsx(o.Text,{strong:!0,children:"List Header"}),bordered:!1,split:!0,size:"default"},render:t=>{const i=["Racing car sprays burning fuel into crowd.","Japanese princess to wed commoner.","Australian walks 100km after outback crash.","Man charged over missing wedding girl.","Los Angeles battles huge wildfires."];return e.jsx(r,{...t,header:e.jsx("div",{children:"List Header"}),footer:e.jsx("div",{children:"List Footer"}),dataSource:i,renderItem:n=>e.jsx(r.Item,{children:n})})}},a={render:()=>{const t=[{title:"item1",description:"description1"},{title:"item2",description:"description2"},{title:"item3",description:"description3"}];return e.jsx(l,{title:"A List that supports title and description.",children:e.jsx(r,{dataSource:t,itemLayout:"vertical",renderItem:i=>e.jsx(r.Item,{children:e.jsx(d,{gap:"middle",children:e.jsx(r.Item.Meta,{title:e.jsx(o.Text,{strong:!0,children:i.title}),description:i.description,className:"u-margin-bottom-none"})})},i.title)})})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const m=["Primary","WithMetaItems"],g=Object.freeze(Object.defineProperty({__proto__:null,Primary:s,WithMetaItems:a,__namedExportsOrder:m,default:c},Symbol.toStringTag,{value:"Module"}));export{g as L,c as m};
