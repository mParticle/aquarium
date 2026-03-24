import{j as e,i as o,T as n,k as i,l as d,F as c,m as u,P as l,n as p,Q as m}from"./iframe-CW9QCQxL.js";import{E as g}from"./ExampleStory-CrUJ6hvr.js";const h={title:"Components/Data Display/Card",component:o,args:{hoverable:!1,size:"default",title:"",children:e.jsx(n.Text,{children:"Card Content"})},argTypes:{size:{control:"select",options:["default","small"]}}},r={args:{title:"Card Title",bordered:!0,hoverable:!1,loading:!1,size:"default",children:e.jsx(n.Text,{children:"Card Content"})},argTypes:{bordered:{control:"select",options:[!1,!0]},hoverable:{control:"select",options:[!1,!0]},loading:{control:"select",options:[!1,!0]},size:{control:"select",options:["default","small"]},children:{table:{disable:!0}}}},a={args:{title:"Card Title",extra:e.jsx(i,{children:"Any React Component"}),style:{width:"400px"}}},t={args:{title:"Hoverable card",hoverable:!0}},s={render:()=>e.jsx(g,{title:"It can be placed inside the ordinary card to display the information of the multilevel structure.",children:e.jsx(o,{size:"small",style:{background:d},children:e.jsx(o,{size:"small",children:e.jsx(c,{gap:u,children:e.jsx("div",{style:{paddingTop:l,paddingBottom:l},children:e.jsx(p.Item,{name:"who",initialValue:"subset",noStyle:!0,children:e.jsx(m.Qualifier,{options:[{label:"For users who",value:"subset"},{label:"For all users",value:"all"}]})})})})})})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    bordered: true,
    hoverable: false,
    loading: false,
    size: 'default',
    children: <Typography.Text>Card Content</Typography.Text>
  },
  argTypes: {
    bordered: {
      control: 'select',
      options: [false, true]
    },
    hoverable: {
      control: 'select',
      options: [false, true]
    },
    loading: {
      control: 'select',
      options: [false, true]
    },
    size: {
      control: 'select',
      options: ['default', 'small']
    },
    children: {
      table: {
        disable: true
      }
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    extra: <Button>Any React Component</Button>,
    style: {
      width: '400px'
    }
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Hoverable card',
    hoverable: true
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ExampleStory title="It can be placed inside the ordinary card to display the information of the multilevel structure.">
        <Card size={'small'} style={{
        background: MpBrandSecondary2
      }}>
          <Card size={'small'}>
            <Flex gap={MarginSm}>
              <div style={{
              paddingTop: PaddingXs,
              paddingBottom: PaddingXs
            }}>
                <Form.Item name={'who'} initialValue={'subset'} noStyle>
                  <QueryItem.Qualifier options={[{
                  label: 'For users who',
                  value: 'subset'
                }, {
                  label: 'For all users',
                  value: 'all'
                }]} />
                </Form.Item>
              </div>
            </Flex>
          </Card>
        </Card>
      </ExampleStory>;
  }
}`,...s.parameters?.docs?.source}}};const y=["Playground","Primary","Hoverable","WithInnerCard"],x=Object.freeze(Object.defineProperty({__proto__:null,Hoverable:t,Playground:r,Primary:a,WithInnerCard:s,__namedExportsOrder:y,default:h},Symbol.toStringTag,{value:"Module"}));export{x as C,t as H,a as P,s as W,r as a};
