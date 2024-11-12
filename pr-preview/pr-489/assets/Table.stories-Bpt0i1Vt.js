var u=Object.defineProperty,h=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var i=(t,e,a)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,l=(t,e)=>{for(var a in e||(e={}))T.call(e,a)&&i(t,a,e[a]);if(o)for(var a of o(e))S.call(e,a)&&i(t,a,e[a]);return t},c=(t,e)=>h(t,j(e));import{j as r}from"./jsx-runtime-BcCOBRXo.js";import{T as b,b as n,F as p,c as f,I as y}from"./GlobalNavigation-DUjkUjGz.js";import"./_baseClone-DBzvlRjn.js";import{D as w}from"./DatePicker.stories-56LQHkdI.js";import{t as g,a as D}from"./TableStoryUtils-BVOjHeCT.js";const F={title:"UX Patterns/Table/Table",component:b,args:{}},s={name:"Basic Table",render:()=>r.jsxs(n,{direction:"vertical",style:{width:"100%"},children:[r.jsx(n,{direction:"vertical",style:{width:"100%"},children:r.jsxs(p,{align:"center",justify:"space-between",children:[r.jsx(p,{gap:10,children:r.jsx(w,{})}),r.jsx(f,{allowClear:!0,prefix:r.jsx(y,{size:"sm",color:"brand",name:"search"}),placeholder:"Search",style:{width:"240px"}})]})}),r.jsx(b,{columns:g,dataSource:D,scroll:{x:"max-content"}})]})};var d,m,x;s.parameters=c(l({},s.parameters),{docs:c(l({},(d=s.parameters)==null?void 0:d.docs),{source:l({originalSource:`{
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
      <Table<TableDataType> columns={tableColumns} dataSource={tableData} scroll={{
      x: 'max-content'
    }} />
    </Space>
}`},(x=(m=s.parameters)==null?void 0:m.docs)==null?void 0:x.source)})});const _=["BasicTable"],O=Object.freeze(Object.defineProperty({__proto__:null,BasicTable:s,__namedExportsOrder:_,default:F},Symbol.toStringTag,{value:"Module"}));export{s as B,O as T};
