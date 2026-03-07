import{j as e,T as n,i as s,k as i,l as d,F as c,m,P as o,n as u,Q as p}from"./iframe-CK4V-iCp.js";import{E as h}from"./ExampleStory-BYwlp6-F.js";const y={title:"Components/Data Display/Card",component:l=>e.jsx(s,{...l,children:l.children}),args:{hoverable:!1,size:"default",title:"",children:e.jsx(n.Text,{children:"Card Content"})},argTypes:{size:{control:"select",options:["default","small"]}}},r={args:{title:"Card Title",extra:e.jsx(i,{children:"Any React Component"}),style:{width:"400px"}}},a={args:{title:"Hoverable card",hoverable:!0}},t={render:()=>e.jsx(h,{title:"It can be placed inside the ordinary card to display the information of the multilevel structure.",children:e.jsx(s,{size:"small",style:{background:d},children:e.jsx(s,{size:"small",children:e.jsx(c,{gap:m,children:e.jsx("div",{style:{paddingTop:o,paddingBottom:o},children:e.jsx(u.Item,{name:"who",initialValue:"subset",noStyle:!0,children:e.jsx(p.Qualifier,{options:[{label:"For users who",value:"subset"},{label:"For all users",value:"all"}]})})})})})})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    extra: <Button>Any React Component</Button>,
    style: {
      width: '400px'
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Hoverable card',
    hoverable: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const g=["Primary","Hoverable","WithInnerCard"],v=Object.freeze(Object.defineProperty({__proto__:null,Hoverable:a,Primary:r,WithInnerCard:t,__namedExportsOrder:g,default:y},Symbol.toStringTag,{value:"Module"}));export{v as C,a as H,r as P,t as W};
