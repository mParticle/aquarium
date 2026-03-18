var I=Object.defineProperty,P=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var u=(o,r,a)=>r in o?I(o,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[r]=a,e=(o,r)=>{for(var a in r||(r={}))w.call(r,a)&&u(o,a,r[a]);if(p)for(var a of p(r))E.call(r,a)&&u(o,a,r[a]);return o},s=(o,r)=>P(o,B(r));import{j as t}from"./jsx-runtime-C9TrHvcC.js";import{C as c,b as F,c as _,F as H,e as M,Q}from"./UnauthorizedTooltip-qdsev0Zk.js";import"./ErrorStateIcon-CMdTSnhI.js";import"./SuccessStateIcon-BRWE1o3k.js";import"./WarningStateIcon-CCPM9hWQ.js";import"./_baseClone-DwBCp-Ss.js";import"./index-3OP4wdng.js";import{u as O,ar as R,as as m}from"./style-DXf4Rsq5.js";import{E as W}from"./ExampleStory-Cqa2kxiL.js";const X={title:"Components/Data Display/Card",component:c,args:{hoverable:!1,size:"default",title:"",children:t.jsx(F.Text,{children:"Card Content"})},argTypes:{size:{control:"select",options:["default","small"]}}},l={args:{title:"Card Title",bordered:!0,hoverable:!1,loading:!1,size:"default",children:t.jsx(F.Text,{children:"Card Content"})},argTypes:{bordered:{control:"select",options:[!1,!0]},hoverable:{control:"select",options:[!1,!0]},loading:{control:"select",options:[!1,!0]},size:{control:"select",options:["default","small"]},children:{table:{disable:!0}}}},n={args:{title:"Card Title",extra:t.jsx(_,{children:"Any React Component"}),style:{width:"400px"}}},i={args:{title:"Hoverable card",hoverable:!0}},d={render:()=>t.jsx(W,{title:"It can be placed inside the ordinary card to display the information of the multilevel structure.",children:t.jsx(c,{size:"small",style:{background:O},children:t.jsx(c,{size:"small",children:t.jsx(H,{gap:R,children:t.jsx("div",{style:{paddingTop:m,paddingBottom:m},children:t.jsx(M.Item,{name:"who",initialValue:"subset",noStyle:!0,children:t.jsx(Q.Qualifier,{options:[{label:"For users who",value:"subset"},{label:"For all users",value:"all"}]})})})})})})})};var g,h,y;l.parameters=s(e({},l.parameters),{docs:s(e({},(g=l.parameters)==null?void 0:g.docs),{source:e({originalSource:`{
  args: {
    title: 'Card Title',
    bordered: true,
    hoverable: false,
    loading: false,
    size: 'default',
    children: <Typography.Text>Card Content</Typography.Text>
  },
  argTypes: {
    bordered: {
      control: 'select',
      options: [false, true]
    },
    hoverable: {
      control: 'select',
      options: [false, true]
    },
    loading: {
      control: 'select',
      options: [false, true]
    },
    size: {
      control: 'select',
      options: ['default', 'small']
    },
    children: {
      table: {
        disable: true
      }
    }
  }
}`},(y=(h=l.parameters)==null?void 0:h.docs)==null?void 0:y.source)})});var b,f,x;n.parameters=s(e({},n.parameters),{docs:s(e({},(b=n.parameters)==null?void 0:b.docs),{source:e({originalSource:`{
  args: {
    title: 'Card Title',
    extra: <Button>Any React Component</Button>,
    style: {
      width: '400px'
    }
  }
}`},(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source)})});var C,v,T;i.parameters=s(e({},i.parameters),{docs:s(e({},(C=i.parameters)==null?void 0:C.docs),{source:e({originalSource:`{
  args: {
    title: 'Hoverable card',
    hoverable: true
  }
}`},(T=(v=i.parameters)==null?void 0:v.docs)==null?void 0:T.source)})});var S,j,z;d.parameters=s(e({},d.parameters),{docs:s(e({},(S=d.parameters)==null?void 0:S.docs),{source:e({originalSource:`{
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
}`},(z=(j=d.parameters)==null?void 0:j.docs)==null?void 0:z.source)})});const k=["Playground","Primary","Hoverable","WithInnerCard"],Y=Object.freeze(Object.defineProperty({__proto__:null,Hoverable:i,Playground:l,Primary:n,WithInnerCard:d,__namedExportsOrder:k,default:X},Symbol.toStringTag,{value:"Module"}));export{Y as C,i as H,n as P,d as W,l as a};
