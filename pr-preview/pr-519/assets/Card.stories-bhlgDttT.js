var I=Object.defineProperty,z=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var u=(r,a,t)=>a in r?I(r,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[a]=t,e=(r,a)=>{for(var t in a||(a={}))E.call(a,t)&&u(r,t,a[t]);if(m)for(var t of m(a))M.call(a,t)&&u(r,t,a[t]);return r},s=(r,a)=>z(r,P(a));import{j as o}from"./jsx-runtime-BcCOBRXo.js";import{e as c,f as _,M as Q,F as w,g as B,P as p,h as H,Q as W}from"./GlobalNavigation-ByoW-fgh.js";import"./_baseClone-DBzvlRjn.js";import{E as O}from"./ExampleStory-Bj2tg3wU.js";const X={title:"Components/Data Display/Card",component:r=>o.jsx(c,s(e({},r),{children:r.children})),args:{hoverable:!1,size:"default",title:"",children:o.jsx(_.Text,{children:"Card Content"})},argTypes:{size:{control:"select",options:["default","small"]}}},l={},i={args:{title:"Card Title"}},n={args:{title:"Hoverable card",hoverable:!0}},d={render:()=>o.jsx(O,{title:"It can be placed inside the ordinary card to display the information of the multilevel structure.",children:o.jsx(c,{size:"small",style:{background:Q},children:o.jsx(c,{size:"small",children:o.jsx(w,{gap:B,children:o.jsx("div",{style:{paddingTop:p,paddingBottom:p},children:o.jsx(H.Item,{name:"who",initialValue:"subset",noStyle:!0,children:o.jsx(W.Qualifier,{options:[{label:"For users who",value:"subset"},{label:"For all users",value:"all"}]})})})})})})})};var h,g,y;l.parameters=s(e({},l.parameters),{docs:s(e({},(h=l.parameters)==null?void 0:h.docs),{source:e({originalSource:"{}"},(y=(g=l.parameters)==null?void 0:g.docs)==null?void 0:y.source)})});var b,x,v;i.parameters=s(e({},i.parameters),{docs:s(e({},(b=i.parameters)==null?void 0:b.docs),{source:e({originalSource:`{
  args: {
    title: 'Card Title'
  }
}`},(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source)})});var f,S,C;n.parameters=s(e({},n.parameters),{docs:s(e({},(f=n.parameters)==null?void 0:f.docs),{source:e({originalSource:`{
  args: {
    title: 'Hoverable card',
    hoverable: true
  }
}`},(C=(S=n.parameters)==null?void 0:S.docs)==null?void 0:C.source)})});var j,F,T;d.parameters=s(e({},d.parameters),{docs:s(e({},(j=d.parameters)==null?void 0:j.docs),{source:e({originalSource:`{
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
}`},(T=(F=d.parameters)==null?void 0:F.docs)==null?void 0:T.source)})});const k=["Primary","WithTitle","Hoverable","WithInnerCard"],G=Object.freeze(Object.defineProperty({__proto__:null,Hoverable:n,Primary:l,WithInnerCard:d,WithTitle:i,__namedExportsOrder:k,default:X},Symbol.toStringTag,{value:"Module"}));export{G as C,X as m};
