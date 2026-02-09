var S=Object.defineProperty,j=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var c=(e,r,t)=>r in e?S(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,a=(e,r)=>{for(var t in r||(r={}))I.call(r,t)&&c(e,t,r[t]);if(m)for(var t of m(r))P.call(r,t)&&c(e,t,r[t]);return e},o=(e,r)=>j(e,F(r));import{j as s}from"./jsx-runtime-C9TrHvcC.js";import{b as T,C as d,c as z,F as B,e as w,Q as E}from"./UnauthorizedTooltip-B4jUYR_Y.js";import"./ErrorStateIcon-DkRO_jVf.js";import"./SuccessStateIcon-BsHb_NtW.js";import"./WarningStateIcon-UE2i1S7-.js";import"./_baseClone-DwBCp-Ss.js";import"./index-3OP4wdng.js";import{o as _,p as H,P as p}from"./style-BbwCNso5.js";import{E as M}from"./ExampleStory-CY2ObX-w.js";const Q={title:"Components/Data Display/Card",component:e=>s.jsx(d,o(a({},e),{children:e.children})),args:{hoverable:!1,size:"default",title:"",children:s.jsx(T.Text,{children:"Card Content"})},argTypes:{size:{control:"select",options:["default","small"]}}},l={args:{title:"Card Title",extra:s.jsx(z,{children:"Any React Component"}),style:{width:"400px"}}},n={args:{title:"Hoverable card",hoverable:!0}},i={render:()=>s.jsx(M,{title:"It can be placed inside the ordinary card to display the information of the multilevel structure.",children:s.jsx(d,{size:"small",style:{background:_},children:s.jsx(d,{size:"small",children:s.jsx(B,{gap:H,children:s.jsx("div",{style:{paddingTop:p,paddingBottom:p},children:s.jsx(w.Item,{name:"who",initialValue:"subset",noStyle:!0,children:s.jsx(E.Qualifier,{options:[{label:"For users who",value:"subset"},{label:"For all users",value:"all"}]})})})})})})})};var u,h,y;l.parameters=o(a({},l.parameters),{docs:o(a({},(u=l.parameters)==null?void 0:u.docs),{source:a({originalSource:`{
  args: {
    title: 'Card Title',
    extra: <Button>Any React Component</Button>,
    style: {
      width: '400px'
    }
  }
}`},(y=(h=l.parameters)==null?void 0:h.docs)==null?void 0:y.source)})});var g,x,b;n.parameters=o(a({},n.parameters),{docs:o(a({},(g=n.parameters)==null?void 0:g.docs),{source:a({originalSource:`{
  args: {
    title: 'Hoverable card',
    hoverable: true
  }
}`},(b=(x=n.parameters)==null?void 0:x.docs)==null?void 0:b.source)})});var C,v,f;i.parameters=o(a({},i.parameters),{docs:o(a({},(C=i.parameters)==null?void 0:C.docs),{source:a({originalSource:`{
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
}`},(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source)})});const O=["Primary","Hoverable","WithInnerCard"],K=Object.freeze(Object.defineProperty({__proto__:null,Hoverable:n,Primary:l,WithInnerCard:i,__namedExportsOrder:O,default:Q},Symbol.toStringTag,{value:"Module"}));export{K as C,n as H,l as P,i as W};
