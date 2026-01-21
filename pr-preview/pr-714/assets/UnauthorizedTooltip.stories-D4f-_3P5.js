import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-ZAwtOOsv.js";import{ad as s,c as p,z as r,b as a}from"./UnauthorizedTooltip-C-uexwNG.js";import"./ErrorStateIcon-B6JkuEkJ.js";import"./SuccessStateIcon-BoEEKEoh.js";import"./WarningStateIcon-DvK-CXgy.js";import{w as c}from"./style-BLGxefMg.js";const h={title:"UX Patterns/PermissionsRestrictions",component:s,parameters:{layout:"centered"},argTypes:{isAuthorized:{control:"boolean",description:"Whether the user is authorized to perform the action",defaultValue:!1},unauthorizedMessage:{control:"text",description:"Custom message to display when unauthorized"}}},o={args:{isAuthorized:!1,children:e.jsx(p,{disabled:!0,children:"Delete"})}},t={render:()=>{const[i,n]=l.useState("option2"),d=e.jsxs(a.Text,{tooltip:!0,children:["You don't have permissions for this action."," ",e.jsx(a.Link,{href:"/",tooltip:!0,children:"Learn More"})]});return e.jsxs(r.Group,{value:i,onChange:u=>n(u.target.value),children:[e.jsx("div",{style:{marginBottom:c},children:e.jsx(s,{isAuthorized:!1,unauthorizedMessage:d,placement:"right",children:e.jsx(r,{value:"option1",disabled:!0,children:"Option 1"})})}),e.jsx(r,{value:"option2",children:"Option 2"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const m=["DisabledButton","ModalExample"],M=Object.freeze(Object.defineProperty({__proto__:null,DisabledButton:o,ModalExample:t,__namedExportsOrder:m,default:h},Symbol.toStringTag,{value:"Module"}));export{o as D,t as M,M as U};
