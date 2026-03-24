import{j as e,L as t,T as n,F as l}from"./iframe-DgAe5qX2.js";import{E as c}from"./ExampleStory-f5tg4yU7.js";const m={title:"Components/Data Display/List",component:t,args:{bordered:!1,split:!1,size:"default",dataSource:["item1","item2","item3"],renderItem:r=>e.jsx(t.Item,{children:r})},argTypes:{bordered:{control:"boolean",description:"Toggle whether the list is bordered"},split:{control:"boolean",description:"Toggle whether list items are split by a divider"},size:{control:"select",options:["default","large","small"]}}},i={args:{bordered:!0,split:!0,size:"default",dataSource:["Item 1","Item 2","Item 3"],renderItem:r=>e.jsx(t.Item,{children:r})},argTypes:{bordered:{control:"select",options:[!1,!0]},split:{control:"select",options:[!1,!0]},size:{control:"select",options:["default","large","small"]},dataSource:{table:{disable:!0}},renderItem:{table:{disable:!0}}}},a={args:{header:e.jsx(n.Text,{strong:!0,children:"List Header"}),bordered:!1,split:!0,size:"default"},render:r=>{const s=["Racing car sprays burning fuel into crowd.","Japanese princess to wed commoner.","Australian walks 100km after outback crash.","Man charged over missing wedding girl.","Los Angeles battles huge wildfires."];return e.jsx(t,{...r,header:e.jsx("div",{children:"List Header"}),footer:e.jsx("div",{children:"List Footer"}),dataSource:s,renderItem:d=>e.jsx(t.Item,{children:d})})}},o={render:()=>{const r=[{title:"item1",description:"description1"},{title:"item2",description:"description2"},{title:"item3",description:"description3"}];return e.jsx(c,{title:"A List that supports title and description.",children:e.jsx(t,{dataSource:r,itemLayout:"vertical",renderItem:s=>e.jsx(t.Item,{children:e.jsx(l,{gap:"middle",children:e.jsx(t.Item.Meta,{title:e.jsx(n.Text,{strong:!0,children:s.title}),description:s.description,className:"u-margin-bottom-none"})})},s.title)})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const p=["Playground","Primary","WithMetaItems"],h=Object.freeze(Object.defineProperty({__proto__:null,Playground:i,Primary:a,WithMetaItems:o,__namedExportsOrder:p,default:m},Symbol.toStringTag,{value:"Module"}));export{h as L,a as P,o as W,i as a};
