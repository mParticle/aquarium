var S=Object.defineProperty,f=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var m=(e,r,a)=>r in e?S(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,i=(e,r)=>{for(var a in r||(r={}))v.call(r,a)&&m(e,a,r[a]);if(p)for(var a of p(r))I.call(r,a)&&m(e,a,r[a]);return e},l=(e,r)=>f(e,T(r));import{j as t}from"./jsx-runtime-BcCOBRXo.js";import{f as n}from"./index-Cn2ehl89.js";import{T as b,b as u,F as c,c as w,I as d,d as o,e as x,C as k,f as C,B as D,g as E,h as g,i as B,j as F}from"./GlobalNavigation-RXbPi_nH.js";import"./_baseClone-DBzvlRjn.js";import{D as P}from"./DatePicker.stories-Bzqr8kdH.js";const O={production:"blue",development:"purple"},N={production:"Prod",development:"Dev"},_=e=>O[e],z=e=>N[e],A={draft:B,error:g,ready:F},L={draft:"Draft",error:"Error",ready:"Ready"},M=e=>A[e],R=e=>L[e],U=[{title:"Name",dataIndex:"name",key:"name",render:e=>{const r=window.location.pathname.split("/");r.pop();const a=`${r.join("/")}/${e}`;return t.jsx(o.Link,{href:a,children:e})}},{title:()=>t.jsxs(c,{align:"center",gap:2,children:[t.jsx(o.Text,{children:"ID"}),t.jsx(x,{title:t.jsxs(t.Fragment,{children:[t.jsx(o.Text,{style:{color:"white"},children:"Help lorem ipsum. "}),t.jsx(o.Link,{href:"/",style:{color:"white",textDecoration:"underline"},children:"Learn More"})]}),children:t.jsx(d,{name:"help",size:"sm"})})]}),dataIndex:"id",key:"id"},{title:"Timestamp (UTC)",dataIndex:"timestamp",key:"timestamp",render:e=>new Date(e/(1e3*1e3)).toLocaleString(void 0,{month:"short",day:"2-digit",year:"numeric",hour:"numeric",minute:"2-digit",second:"2-digit",timeZone:"UTC",hour12:!1})},{title:"mPID",dataIndex:"mpId",key:"mpId",render:e=>t.jsx(o.Text,{copyable:{icon:t.jsx(k,{"aria-label":"Copy mPID"})},children:e})},{title:"Output",dataIndex:"output",key:"output"},{title:"Environment",key:"environment",dataIndex:"environment",render:e=>t.jsx(C,{color:_(e),children:z(e)})},{title:"Status",dataIndex:"status",key:"status",render:e=>t.jsx(D,{color:M(e),text:R(e)})},{title:"Actions",dataIndex:"actions",key:"actions",render:()=>t.jsx(E,{suffixIcon:t.jsx(d,{name:"moreActions"}),variant:"borderless",dropdownStyle:{width:"200px"},value:null,options:[{label:"Option 1",value:"option1"},{label:t.jsx(x,{title:"Explaining of why this is disabled",placement:"right",children:t.jsx("span",{children:"Option 2"})}),value:"option2",disabled:!0},{label:t.jsx("span",{style:{color:g},children:"Delete"}),value:"option2"}]})}];function $(){return{id:`JNBSK-${n.number.int({min:1e3,max:9999}).toString()}`,key:n.string.uuid(),name:n.helpers.arrayElement(["NBCU","Remarkable Foods","Lulo Bank","Shift","Marks and Spencer","Zaxby's"]),timestamp:n.date.recent().valueOf()*1e3*1e3,mpId:n.number.int({max:9999999999}).toString(),output:n.helpers.arrayElement(["Braze","mP Analytics","Cortex","Applytics","Google Analytics"]),environment:n.helpers.arrayElement(["development","production"]),status:n.helpers.arrayElement(["draft","error","ready"])}}const W=n.helpers.multiple($,{count:45}),Y={title:"UX Patterns/Table/Table",component:b,args:{}},s={name:"Basic Table",render:()=>t.jsxs(u,{direction:"vertical",style:{width:"100%"},children:[t.jsx(u,{direction:"vertical",style:{width:"100%"},children:t.jsxs(c,{align:"center",justify:"space-between",children:[t.jsx(c,{gap:10,children:t.jsx(P,{})}),t.jsx(w,{allowClear:!0,prefix:t.jsx(d,{size:"sm",color:"brand",name:"search"}),placeholder:"Search",style:{width:"240px"}})]})}),t.jsx(b,{columns:U,dataSource:W,scroll:{x:"max-content"}})]})};var h,y,j;s.parameters=l(i({},s.parameters),{docs:l(i({},(h=s.parameters)==null?void 0:h.docs),{source:i({originalSource:`{
  name: 'Basic Table',
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
}`},(j=(y=s.parameters)==null?void 0:y.docs)==null?void 0:j.source)})});const Z=["BasicTable"],Q=Object.freeze(Object.defineProperty({__proto__:null,BasicTable:s,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{s as B,Q as T};