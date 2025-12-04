var z=Object.defineProperty,v=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var p=(t,e,o)=>e in t?z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,a=(t,e)=>{for(var o in e||(e={}))j.call(e,o)&&p(t,o,e[o]);if(l)for(var o of l(e))M.call(e,o)&&p(t,o,e[o]);return t},s=(t,e)=>v(t,T(e));import{j as r}from"./jsx-runtime-C9TrHvcC.js";import{r as b}from"./index-3OP4wdng.js";import{a6 as y,e as R,R as d}from"./NavigationItemsService-CWn9hk53.js";import"./ErrorStateIcon-Clx5lk_q.js";import"./SuccessStateIcon-CrBP74im.js";import"./WarningStateIcon-irkX5OVh.js";import"./_baseClone-DwBCp-Ss.js";import{s as B}from"./style-BvWo89XW.js";const O={title:"UX Patterns/PermissionsRestrictions",component:y,parameters:{layout:"centered"},argTypes:{isAuthorized:{control:"boolean",description:"Whether the user is authorized to perform the action",defaultValue:!1},unauthorizedMessage:{control:"text",description:"Custom message to display when unauthorized"}}},i={args:{isAuthorized:!1,children:r.jsx(R,{disabled:!0,children:"Delete"})}},n={render:()=>{const[t,e]=b.useState("option2"),o=r.jsx(r.Fragment,{children:r.jsxs(Typography.Text,{tooltip:!0,children:["You don't have permissions for this action."," ",r.jsx(Typography.Link,{href:"/",tooltip:!0,children:"Learn More"})]})});return r.jsxs(d.Group,{value:t,onChange:f=>e(f.target.value),children:[r.jsx("div",{style:{marginBottom:B},children:r.jsx(y,{isAuthorized:!1,unauthorizedMessage:o,placement:"right",children:r.jsx(d,{value:"option1",disabled:!0,children:"Option 1"})})}),r.jsx(d,{value:"option2",children:"Option 2"})]})}};var u,h,c;i.parameters=s(a({},i.parameters),{docs:s(a({},(u=i.parameters)==null?void 0:u.docs),{source:a({originalSource:`{
  args: {
    isAuthorized: false,
    children: <Button disabled>Delete</Button>
  }
}`},(c=(h=i.parameters)==null?void 0:h.docs)==null?void 0:c.source)})});var m,g,x;n.parameters=s(a({},n.parameters),{docs:s(a({},(m=n.parameters)==null?void 0:m.docs),{source:a({originalSource:`{
  render: () => {
    const [value, setValue] = useState('option2');
    const unauthorizedMessage = <>
              <Typography.Text tooltip>
                You don&apos;t have permissions for this action.{' '}
                <Typography.Link href="/" tooltip>
                  Learn More
                </Typography.Link>
              </Typography.Text>
            </>;
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
}`},(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source)})});const S=["DisabledButton","ModalExample"],G=Object.freeze(Object.defineProperty({__proto__:null,DisabledButton:i,ModalExample:n,__namedExportsOrder:S,default:O},Symbol.toStringTag,{value:"Module"}));export{i as D,n as M,G as U};
