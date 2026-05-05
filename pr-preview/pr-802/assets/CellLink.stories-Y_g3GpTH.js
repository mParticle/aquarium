import{ar as t,j as r,T as c}from"./iframe-CJHsXdCQ.js";import"./preload-helper-PPVm8Dsz.js";const{expect:m,userEvent:p,within:d}=__STORYBOOK_MODULE_TEST__,i=[{key:"1",name:"Welcome Series",type:"Journey",href:"#/journeys/welcome-series"},{key:"2",name:"Black Friday",type:"Campaign",href:"#/campaigns/black-friday"},{key:"3",name:"Onboarding Quiz",type:"Form",href:"#/forms/onboarding-quiz"}],g={title:"UX Patterns/Data Exploration/Table/Cell Types/Link",component:t,parameters:{docs:{description:{component:"Use links for navigation to a record's detail view. When the row itself is also clickable, the link must call `stopPropagation` so a row click is not triggered alongside link navigation."}}}},l=[{title:"Name",dataIndex:"name",key:"name",render:(e,s)=>r.jsx(c.Link,{href:s.href,onClick:n=>n.stopPropagation(),children:e})},{title:"Type",dataIndex:"type",key:"type"}],a={render:()=>r.jsx(t,{columns:l,dataSource:i,pagination:!1}),play:async({canvasElement:e})=>{const n=d(e).getByRole("link",{name:"Welcome Series"});await m(n).toHaveAttribute("href","#/journeys/welcome-series"),await p.hover(n)}},o={name:"Clickable row + link cell",parameters:{docs:{description:{story:"When the row has an onClick handler, the link cell must `stopPropagation` so navigating does not also trigger row selection."}}},render:()=>r.jsx(t,{columns:l,dataSource:i,pagination:!1,onRow:e=>({onClick:()=>{console.log("Row clicked:",e.name)},style:{cursor:"pointer"}})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Table<Row> columns={linkColumns} dataSource={data} pagination={false} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', {
      name: 'Welcome Series'
    });
    await expect(link).toHaveAttribute('href', '#/journeys/welcome-series');
    await userEvent.hover(link);
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Clickable row + link cell',
  parameters: {
    docs: {
      description: {
        story: 'When the row has an onClick handler, the link cell must \`stopPropagation\` so navigating does not also trigger row selection.'
      }
    }
  },
  render: () => <Table<Row> columns={linkColumns} dataSource={data} pagination={false} onRow={record => ({
    onClick: () => {
      console.log('Row clicked:', record.name);
    },
    style: {
      cursor: 'pointer'
    }
  })} />
}`,...o.parameters?.docs?.source}}};const y=["Default","ClickableRow"];export{o as ClickableRow,a as Default,y as __namedExportsOrder,g as default};
