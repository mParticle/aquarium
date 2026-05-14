import{aZ as s,j as e,i as d,G as p,_ as a,ah as h,T as r}from"./iframe-D96v7dCn.js";const c={title:"UX Patterns/Inline Controls/Permissions Restrictions",component:s,parameters:{layout:"centered"},argTypes:{isAuthorized:{control:"boolean",description:"Whether the user is authorized to perform the action",defaultValue:!1},unauthorizedMessage:{control:"text",description:"Custom message to display when unauthorized"}}},o={args:{isAuthorized:!1,children:e.jsx(d,{disabled:!0,children:"Delete"})}},t={render:()=>{const[i,n]=p.useState("option2"),l=e.jsxs(r.Text,{tooltip:!0,children:["You don't have permissions for this action."," ",e.jsx(r.Link,{href:"/",tooltip:!0,children:"Learn More"})]});return e.jsxs(a.Group,{value:i,onChange:u=>n(u.target.value),children:[e.jsx("div",{style:{marginBottom:h},children:e.jsx(s,{isAuthorized:!1,unauthorizedMessage:l,placement:"right",children:e.jsx(a,{value:"option1",disabled:!0,children:"Option 1"})})}),e.jsx(a,{value:"option2",children:"Option 2"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isAuthorized: false,
    children: <Button disabled>Delete</Button>
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('option2');
    const unauthorizedMessage = <Typography.Text tooltip>
        You don&apos;t have permissions for this action.{' '}
        <Typography.Link href="/" tooltip>
          Learn More
        </Typography.Link>
      </Typography.Text>;
    return <Radio.Group value={value} onChange={e => setValue(e.target.value as string)}>
        <div style={{
        marginBottom: Margin
      }}>
          <UnauthorizedTooltip isAuthorized={false} unauthorizedMessage={unauthorizedMessage} placement="right">
            <Radio value="option1" disabled>
              Option 1
            </Radio>
          </UnauthorizedTooltip>
        </div>
        <Radio value="option2">Option 2</Radio>
      </Radio.Group>;
  }
}`,...t.parameters?.docs?.source}}};const m=["DisabledButton","ModalExample"],x=Object.freeze(Object.defineProperty({__proto__:null,DisabledButton:o,ModalExample:t,__namedExportsOrder:m,default:c},Symbol.toStringTag,{value:"Module"}));export{o as D,t as M,x as U};
