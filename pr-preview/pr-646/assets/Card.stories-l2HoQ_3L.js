var S=Object.defineProperty,j=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var c=(e,r,t)=>r in e?S(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,a=(e,r)=>{for(var t in r||(r={}))I.call(r,t)&&c(e,t,r[t]);if(m)for(var t of m(r))P.call(r,t)&&c(e,t,r[t]);return e},o=(e,r)=>j(e,F(r));import{j as s}from"./jsx-runtime-CVnACwZl.js";import{C as d,e as z,f as B,F as E,g as M,Q as T}from"./NavigationItemsService-ChoF_JX4.js";import{M as _,a as Q,P as u}from"./ErrorStateIcon-BRZ77WZC.js";import"./_baseClone-CXAe4HsA.js";import{E as w}from"./ExampleStory-r_6NRazH.js";const H={title:"Components/Data Display/Card",component:e=>s.jsx(d,o(a({},e),{children:e.children})),args:{hoverable:!1,size:"default",title:"",children:s.jsx(z.Text,{children:"Card Content"})},argTypes:{size:{control:"select",options:["default","small"]}}},l={args:{title:s.jsx(B,{children:"Any React Component"})}},n={args:{title:"Hoverable card",hoverable:!0}},i={render:()=>s.jsx(w,{title:"It can be placed inside the ordinary card to display the information of the multilevel structure.",children:s.jsx(d,{size:"small",style:{background:_},children:s.jsx(d,{size:"small",children:s.jsx(E,{gap:Q,children:s.jsx("div",{style:{paddingTop:u,paddingBottom:u},children:s.jsx(M.Item,{name:"who",initialValue:"subset",noStyle:!0,children:s.jsx(T.Qualifier,{options:[{label:"For users who",value:"subset"},{label:"For all users",value:"all"}]})})})})})})})};var p,h,y;l.parameters=o(a({},l.parameters),{docs:o(a({},(p=l.parameters)==null?void 0:p.docs),{source:a({originalSource:`{
  args: {
    title: <Button>Any React Component</Button>
  }
}`},(y=(h=l.parameters)==null?void 0:h.docs)==null?void 0:y.source)})});var g,b,x;n.parameters=o(a({},n.parameters),{docs:o(a({},(g=n.parameters)==null?void 0:g.docs),{source:a({originalSource:`{
  args: {
    title: 'Hoverable card',
    hoverable: true
  }
}`},(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source)})});var f,v,C;i.parameters=o(a({},i.parameters),{docs:o(a({},(f=i.parameters)==null?void 0:f.docs),{source:a({originalSource:`{
  render: () => {
    return <ExampleStory title="It can be placed inside the ordinary card to display the information of the multilevel structure.">
        <Card size={'small'} style={{
        background: MpBrandSecondary2
      }}>
          <Card size={'small'}>
            <Flex gap={MarginSm}>
              <div style={{
              paddingTop: PaddingXs,
              paddingBottom: PaddingXs
            }}>
                <Form.Item name={'who'} initialValue={'subset'} noStyle>
                  <QueryItem.Qualifier options={[{
                  label: 'For users who',
                  value: 'subset'
                }, {
                  label: 'For all users',
                  value: 'all'
                }]} />
                </Form.Item>
              </div>
            </Flex>
          </Card>
        </Card>
      </ExampleStory>;
  }
}`},(C=(v=i.parameters)==null?void 0:v.docs)==null?void 0:C.source)})});const O=["Primary","Hoverable","WithInnerCard"],W=Object.freeze(Object.defineProperty({__proto__:null,Hoverable:n,Primary:l,WithInnerCard:i,__namedExportsOrder:O,default:H},Symbol.toStringTag,{value:"Module"}));export{W as C,l as P};
