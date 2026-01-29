var S=Object.defineProperty,j=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var c=(e,r,t)=>r in e?S(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,a=(e,r)=>{for(var t in r||(r={}))I.call(r,t)&&c(e,t,r[t]);if(m)for(var t of m(r))P.call(r,t)&&c(e,t,r[t]);return e},s=(e,r)=>j(e,F(r));import{j as o}from"./jsx-runtime-C9TrHvcC.js";import{b as z,C as d,c as B,F as E,e as T,Q as _}from"./UnauthorizedTooltip-17oSOJ8h.js";import"./ErrorStateIcon-BrhJa12N.js";import"./SuccessStateIcon-CCHCsPZV.js";import"./WarningStateIcon-B-qP6Sc3.js";import"./_baseClone-DwBCp-Ss.js";import"./index-3OP4wdng.js";import{o as M,p as Q,P as p}from"./style-B4MsPVPe.js";import{E as w}from"./ExampleStory-CJ2mQ7E0.js";const H={title:"Components/Data Display/Card",component:e=>o.jsx(d,s(a({},e),{children:e.children})),args:{hoverable:!1,size:"default",title:"",children:o.jsx(z.Text,{children:"Card Content"})},argTypes:{size:{control:"select",options:["default","small"]}}},l={args:{title:o.jsx(B,{children:"Any React Component"})}},n={args:{title:"Hoverable card",hoverable:!0}},i={render:()=>o.jsx(w,{title:"It can be placed inside the ordinary card to display the information of the multilevel structure.",children:o.jsx(d,{size:"small",style:{background:M},children:o.jsx(d,{size:"small",children:o.jsx(E,{gap:Q,children:o.jsx("div",{style:{paddingTop:p,paddingBottom:p},children:o.jsx(T.Item,{name:"who",initialValue:"subset",noStyle:!0,children:o.jsx(_.Qualifier,{options:[{label:"For users who",value:"subset"},{label:"For all users",value:"all"}]})})})})})})})};var u,h,y;l.parameters=s(a({},l.parameters),{docs:s(a({},(u=l.parameters)==null?void 0:u.docs),{source:a({originalSource:`{
  args: {
    title: <Button>Any React Component</Button>
  }
}`},(y=(h=l.parameters)==null?void 0:h.docs)==null?void 0:y.source)})});var g,b,x;n.parameters=s(a({},n.parameters),{docs:s(a({},(g=n.parameters)==null?void 0:g.docs),{source:a({originalSource:`{
  args: {
    title: 'Hoverable card',
    hoverable: true
  }
}`},(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source)})});var v,f,C;i.parameters=s(a({},i.parameters),{docs:s(a({},(v=i.parameters)==null?void 0:v.docs),{source:a({originalSource:`{
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
}`},(C=(f=i.parameters)==null?void 0:f.docs)==null?void 0:C.source)})});const O=["Primary","Hoverable","WithInnerCard"],K=Object.freeze(Object.defineProperty({__proto__:null,Hoverable:n,Primary:l,WithInnerCard:i,__namedExportsOrder:O,default:H},Symbol.toStringTag,{value:"Module"}));export{K as C,l as P};
