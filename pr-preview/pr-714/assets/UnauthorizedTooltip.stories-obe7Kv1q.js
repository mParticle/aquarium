import{ba as s,j as e,i as l,y as p,Z as a,ag as c,T as r}from"./iframe-D7Ys59RG.js";const h={title:"UX Patterns/PermissionsRestrictions",component:s,parameters:{layout:"centered"},argTypes:{isAuthorized:{control:"boolean",description:"Whether the user is authorized to perform the action",defaultValue:!1},unauthorizedMessage:{control:"text",description:"Custom message to display when unauthorized"}}},t={args:{isAuthorized:!1,children:e.jsx(l,{disabled:!0,children:"Delete"})}},o={render:()=>{const[i,n]=p.useState("option2"),u=e.jsxs(r.Text,{tooltip:!0,children:["You don't have permissions for this action."," ",e.jsx(r.Link,{href:"/",tooltip:!0,children:"Learn More"})]});return e.jsxs(a.Group,{value:i,onChange:d=>n(d.target.value),children:[e.jsx("div",{style:{marginBottom:c},children:e.jsx(s,{isAuthorized:!1,unauthorizedMessage:u,placement:"right",children:e.jsx(a,{value:"option1",disabled:!0,children:"Option 1"})})}),e.jsx(a,{value:"option2",children:"Option 2"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isAuthorized: false,
    children: <Button disabled>Delete</Button>
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const g=["DisabledButton","ModalExample"],x=Object.freeze(Object.defineProperty({__proto__:null,DisabledButton:t,ModalExample:o,__namedExportsOrder:g,default:h},Symbol.toStringTag,{value:"Module"}));export{t as D,o as M,x as U};
