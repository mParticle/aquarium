import{j as e}from"./jsx-runtime-u17CrQMm.js";import{b as n,C as o,c as i,F as d,e as m,Q as c}from"./UnauthorizedTooltip-C-uexwNG.js";import"./ErrorStateIcon-B6JkuEkJ.js";import"./SuccessStateIcon-BoEEKEoh.js";import"./WarningStateIcon-DvK-CXgy.js";import{o as p,p as u,P as l}from"./style-BLGxefMg.js";import{E as h}from"./ExampleStory-B49bSB_-.js";const y={title:"Components/Data Display/Card",component:s=>e.jsx(o,{...s,children:s.children}),args:{hoverable:!1,size:"default",title:"",children:e.jsx(n.Text,{children:"Card Content"})},argTypes:{size:{control:"select",options:["default","small"]}}},r={args:{title:e.jsx(i,{children:"Any React Component"})}},a={args:{title:"Hoverable card",hoverable:!0}},t={render:()=>e.jsx(h,{title:"It can be placed inside the ordinary card to display the information of the multilevel structure.",children:e.jsx(o,{size:"small",style:{background:p},children:e.jsx(o,{size:"small",children:e.jsx(d,{gap:u,children:e.jsx("div",{style:{paddingTop:l,paddingBottom:l},children:e.jsx(m.Item,{name:"who",initialValue:"subset",noStyle:!0,children:e.jsx(c.Qualifier,{options:[{label:"For users who",value:"subset"},{label:"For all users",value:"all"}]})})})})})})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: <Button>Any React Component</Button>
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
}`,...t.parameters?.docs?.source}}};const g=["Primary","Hoverable","WithInnerCard"],F=Object.freeze(Object.defineProperty({__proto__:null,Hoverable:a,Primary:r,WithInnerCard:t,__namedExportsOrder:g,default:y},Symbol.toStringTag,{value:"Module"}));export{F as C,r as P};
