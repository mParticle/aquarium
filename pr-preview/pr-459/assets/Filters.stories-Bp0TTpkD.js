var D=Object.defineProperty,T=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var x=(e,n,r)=>n in e?D(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,o=(e,n)=>{for(var r in n||(n={}))C.call(n,r)&&x(e,r,n[r]);if(h)for(var r of h(n))F.call(n,r)&&x(e,r,n[r]);return e},s=(e,n)=>T(e,k(n));import{j as t}from"./jsx-runtime-BcCOBRXo.js";import{f as a}from"./index-Cn2ehl89.js";import{T as u,b as p,F as d,c as b,I as m,d as i,e as P,C as E,f as O,B,g as M}from"./GlobalNavigation-DT_tPK9g.js";import"./ConfigProvider-BRwLXval.js";import"./_baseClone-BjCwUuX-.js";import{D as W}from"./DatePicker.stories-BGsdcwIW.js";import{S as N}from"./SelectWithRangePicker-CdqsmbpZ.js";const L={production:"blue",development:"purple",unknown:"default"},_={production:"Prod",development:"Dev",unknown:"Unknown"},z=e=>L[e],R=e=>_[e],U={draft:"cyan",error:"red",ready:"green"},A={draft:"Draft",error:"Error",ready:"Ready"},H=e=>U[e],J=e=>A[e],v=[{title:"Name",dataIndex:"name",key:"name",render:e=>{const n=window.location.pathname.split("/");n.pop();const r=`${n.join("/")}/${e}`;return t.jsx(i.Link,{href:r,children:e})}},{title:()=>t.jsx(P,{title:t.jsxs(t.Fragment,{children:[t.jsx(i.Text,{style:{color:"white"},children:"Help lorem ipsum. "}),t.jsx(i.Link,{href:"/",style:{color:"white",textDecoration:"underline"},children:"Learn More"})]}),children:t.jsxs(d,{align:"center",gap:2,children:[t.jsx(i.Text,{children:"ID"}),t.jsx(m,{name:"help",size:"sm"})]})}),dataIndex:"id",key:"id"},{title:"Timestamp (UTC)",dataIndex:"timestamp",key:"timestamp",render:e=>new Date(e/(1e3*1e3)).toLocaleString(void 0,{month:"short",day:"2-digit",year:"numeric",hour:"numeric",minute:"2-digit",second:"2-digit",timeZone:"UTC",hour12:!1})},{title:"mPID",dataIndex:"mpId",key:"mpId",render:e=>t.jsx(i.Text,{copyable:{icon:t.jsx(E,{"aria-label":"Copy mPID"})},children:e})},{title:"Output",dataIndex:"output",key:"output"},{title:"Environment",key:"environment",dataIndex:"environment",render:e=>t.jsx(O,{color:z(e),children:R(e)})},{title:"Status",dataIndex:"status",key:"status",render:e=>t.jsx(B,{color:H(e),text:J(e)})},{title:"Actions",dataIndex:"actions",key:"actions",render:()=>t.jsx(M,{suffixIcon:t.jsx(m,{name:"moreActions"}),variant:"borderless",dropdownStyle:{width:"200px"},options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"}]})}];function $(){return{id:`JNBSK-${a.number.int({min:1e3,max:9999}).toString()}`,key:a.string.uuid(),name:a.helpers.arrayElement(["NBCU","Remarkable Foods","Lulo Bank","Shift","Marks and Spencer","Zaxby's"]),timestamp:a.date.recent().valueOf()*1e3*1e3,mpId:a.number.int({max:9999999999}).toString(),output:a.helpers.arrayElement(["Braze","mP Analytics","Cortex","Applytics","Google Analytics"]),environment:a.helpers.arrayElement(["unknown","development","production"]),status:a.helpers.arrayElement(["draft","error","ready"])}}const I=a.helpers.multiple($,{count:3}),Y={title:"UX Patterns/Table/Filters",component:u,args:{}},l={name:"Basic",render:()=>t.jsxs(p,{direction:"vertical",style:{width:"100%"},children:[t.jsx(p,{direction:"vertical",style:{width:"100%"},children:t.jsxs(d,{align:"center",justify:"space-between",children:[t.jsx(d,{gap:10,children:t.jsx(W,{})}),t.jsx(b,{allowClear:!0,prefix:t.jsx(m,{size:"sm",color:"brand",name:"search"}),placeholder:"Search",style:{width:"240px"}})]})}),t.jsx(u,{columns:v,dataSource:I,scroll:{x:"max-content"}})]})},Z=[{value:"last12hours",label:"Last 12 hours"},{value:"last7days",label:"Last 7 days"},{value:"last14days",label:"Last 14 days"}],c={name:"Complex",render:()=>t.jsxs(p,{direction:"vertical",style:{width:"100%"},children:[t.jsx(p,{direction:"vertical",style:{width:"100%"},children:t.jsxs(d,{align:"center",justify:"space-between",children:[t.jsx(d,{gap:10,children:t.jsx(N,{value:"last14days",placeholder:"Choose Time",options:Z,formatOptions:{dateStyle:"short",timeStyle:"short",hour12:!1},dropdownStyle:{minWidth:400},rangePickerProps:{showTime:!0,showHour:!0,showMinute:!0,showSecond:!1,disabledDate:e=>e.isBefore(new Date(Date.now()-12096e5))}})}),t.jsx(b,{allowClear:!0,prefix:t.jsx(m,{size:"sm",color:"brand",name:"search"}),placeholder:"Search",style:{width:"240px"}})]})}),t.jsx(u,{columns:v,dataSource:I,scroll:{x:"max-content"}})]})};var y,S,w;l.parameters=s(o({},l.parameters),{docs:s(o({},(y=l.parameters)==null?void 0:y.docs),{source:o({originalSource:`{
  name: 'Basic',
  render: () => <Space direction="vertical" style={{
    width: '100%'
  }}>
      <Space direction="vertical" style={{
      width: '100%'
    }}>
        <Flex align={'center'} justify={'space-between'}>
          <Flex gap={10}>
            <DatePickerWithDisabledYears />
          </Flex>
          <Input allowClear prefix={<Icon size="sm" color="brand" name="search" />} placeholder="Search" style={{
          width: '240px'
        }} />
        </Flex>
      </Space>
      <Table<DataType> columns={columns} dataSource={data} scroll={{
      x: 'max-content'
    }} />
    </Space>
}`},(w=(S=l.parameters)==null?void 0:S.docs)==null?void 0:w.source)})});var f,g,j;c.parameters=s(o({},c.parameters),{docs:s(o({},(f=c.parameters)==null?void 0:f.docs),{source:o({originalSource:`{
  name: 'Complex',
  render: () => <Space direction="vertical" style={{
    width: '100%'
  }}>
      <Space direction="vertical" style={{
      width: '100%'
    }}>
        <Flex align={'center'} justify={'space-between'}>
          <Flex gap={10}>
            <SelectWithRangePicker value={'last14days'} placeholder={'Choose Time'} options={TIME_OPTIONS} formatOptions={{
            dateStyle: 'short',
            timeStyle: 'short',
            hour12: false
          }} dropdownStyle={{
            minWidth: 400
          }}
          // eslint-disable-next-line @typescript-eslint/no-shadow
          // onChange={(time) => onUpdateFilters({ time })}
          rangePickerProps={{
            showTime: true,
            showHour: true,
            showMinute: true,
            showSecond: false,
            disabledDate: antdDayJS => {
              const fourteenDaysInMs = 14 * 24 * 60 * 60 * 1000;
              return antdDayJS.isBefore(new Date(Date.now() - fourteenDaysInMs));
            }
          }} />
          </Flex>
          <Input allowClear prefix={<Icon size="sm" color="brand" name="search" />} placeholder="Search" style={{
          width: '240px'
        }} />
        </Flex>
      </Space>
      <Table<DataType> columns={columns} dataSource={data} scroll={{
      x: 'max-content'
    }} />
    </Space>
}`},(j=(g=c.parameters)==null?void 0:g.docs)==null?void 0:j.source)})});const G=["WithBasicFilters","WithComplexFilters"],re=Object.freeze(Object.defineProperty({__proto__:null,WithBasicFilters:l,WithComplexFilters:c,__namedExportsOrder:G,default:Y},Symbol.toStringTag,{value:"Module"}));export{re as F,l as W,c as a};
