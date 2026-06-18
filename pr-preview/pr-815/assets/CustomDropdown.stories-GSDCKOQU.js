import{b0 as i,G as l,j as c}from"./iframe-C1l6F3-R.js";import"./preload-helper-PPVm8Dsz.js";const{expect:u,screen:d,userEvent:r,within:p}=__STORYBOOK_MODULE_TEST__,w=[{value:"wishlist",label:"Wishlist Users"},{value:"premium",label:"Premium Users"},{value:"inactive",label:"Inactive Users",disabled:!0}],h={title:"UX Patterns/CustomDropdown",component:i,parameters:{layout:"centered"},args:{label:"Dropdown",options:w,value:[],disabled:!1,showFooter:!1}},a={render:e=>{const[s,t]=l.useState(e.value??[]);return c.jsx(i,{...e,value:s,onChange:t})},play:async({canvasElement:e})=>{const s=p(e);await r.click(s.getByRole("button",{name:/Dropdown/i}));const t=await d.findByText("Wishlist Users");await u(t).toBeVisible(),await r.click(t)}},n={render:e=>{const[s,t]=l.useState(e.value??[]);return c.jsx(i,{...e,value:s,onChange:t})},args:{showFooter:!0,value:["wishlist"]},play:async({canvasElement:e})=>{const s=p(e);await r.click(s.getByRole("button",{name:/Dropdown/i}));const t=await d.findByRole("button",{name:"Show results"});await u(t).toBeVisible(),await r.click(t)}},o={args:{disabled:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(args.value ?? []);
    return <CustomDropdown {...args} value={value} onChange={setValue} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: /Dropdown/i
    }));
    const firstOption = await screen.findByText('Wishlist Users');
    await expect(firstOption).toBeVisible();
    await userEvent.click(firstOption);
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(args.value ?? []);
    return <CustomDropdown {...args} value={value} onChange={setValue} />;
  },
  args: {
    showFooter: true,
    value: ['wishlist']
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: /Dropdown/i
    }));
    const showResultsBtn = await screen.findByRole('button', {
      name: 'Show results'
    });
    await expect(showResultsBtn).toBeVisible();
    await userEvent.click(showResultsBtn);
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};const b=["Default","WithFooter","Disabled"];export{a as Default,o as Disabled,n as WithFooter,b as __namedExportsOrder,h as default};
