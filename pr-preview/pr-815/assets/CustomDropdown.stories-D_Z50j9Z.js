import{b0 as l,G as i,j as c}from"./iframe-VQDOOxeS.js";import"./preload-helper-PPVm8Dsz.js";const{expect:u,screen:d,userEvent:r,within:p}=__STORYBOOK_MODULE_TEST__,m=[{value:"wishlist",label:"Wishlist Users"},{value:"premium",label:"Premium Users"},{value:"inactive",label:"Inactive Users",disabled:!0}],h={title:"UX Patterns/CustomDropdown",component:l,parameters:{layout:"centered"},args:{label:"Dropdown",options:m,value:[],disabled:!1,showFooter:!1}},s={render:e=>{const[n,t]=i.useState(e.value??[]);return c.jsx(l,{...e,value:n,onChange:t})},play:async({canvasElement:e})=>{const n=p(e);await r.click(n.getByRole("button",{name:/Dropdown/i}));const t=await d.findByText("Wishlist Users");await u(t).toBeInTheDocument(),await r.click(t)}},a={render:e=>{const[n,t]=i.useState(e.value??[]);return c.jsx(l,{...e,value:n,onChange:t})},args:{showFooter:!0,value:["wishlist"]},play:async({canvasElement:e})=>{const n=p(e);await r.click(n.getByRole("button",{name:/Dropdown/i}));const t=await d.findByRole("button",{name:"Show results"});await u(t).toBeInTheDocument(),await r.click(t)}},o={args:{disabled:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    await expect(firstOption).toBeInTheDocument();
    await userEvent.click(firstOption);
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    await expect(showResultsBtn).toBeInTheDocument();
    await userEvent.click(showResultsBtn);
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};const g=["Default","WithFooter","Disabled"];export{s as Default,o as Disabled,a as WithFooter,g as __namedExportsOrder,h as default};
