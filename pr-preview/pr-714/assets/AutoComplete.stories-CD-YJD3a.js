import{y as r,j as s,K as w}from"./iframe-B6Y2oegk.js";const{expect:c,screen:h,userEvent:i,within:g}=__STORYBOOK_MODULE_TEST__,u=[{label:"The quick brown fox jumps over the lazy dog",value:1},{label:"Waxy and quivering, jocks fumble the pizza",value:2},{label:"When zombies arrive, quickly fax judge Pat",value:3},{label:"Pack my red box with five dozen quality jugs",value:4},{label:"The quick onyx goblin jumps over the lazy dwarf",value:5}],b={title:"Components/Data Entry/Auto Complete",tags:["play-test-validation"],component:e=>{const[o,n]=r.useState(""),[l,p]=r.useState([]),d=t=>t?u.filter(y=>y.label.toLowerCase().includes(t.toLowerCase())):[],m=t=>{p(d(t))},v=t=>{console.log("you selected value: "+t)};return s.jsx(s.Fragment,{children:s.jsx(w,{...e,value:o,options:l,onSelect:v,onSearch:m,onChange:n})})},args:{placeholder:"Search AutoComplete",allowClear:!1,autoFocus:!1,backfill:!1,defaultActiveFirstOption:!0,disabled:!1,options:u,status:void 0,value:void 0,onChange:e=>{alert(`Selected Value: ${e}`)},onFocus:()=>{console.log("Focus Event")},onSearch:e=>{alert(`Search Value: ${e}`)},onSelect:(e,o)=>{alert(`Selected Value: ${e}, Option: ${String(o.label)}`)},onClear:()=>{alert("Clear Event")}},argTypes:{status:{control:"select",options:["error","warning"]}}},a={args:{placeholder:"-Select-",style:{width:200}},play:async({canvasElement:e})=>{const n=g(e).getByRole("combobox");await i.type(n,"quick");const l=await h.findByText("The quick brown fox jumps over the lazy dog");await c(l).toBeInTheDocument(),await i.click(l),await c(n).toHaveValue("1")}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: '-Select-',
    style: {
      width: 200
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');
    await userEvent.type(input, 'quick');
    const dropdown = await screen.findByText('The quick brown fox jumps over the lazy dog');
    await expect(dropdown).toBeInTheDocument();
    await userEvent.click(dropdown);
    await expect(input).toHaveValue('1');
  }
}`,...a.parameters?.docs?.source}}};const f=["Primary"],S=Object.freeze(Object.defineProperty({__proto__:null,Primary:a,__namedExportsOrder:f,default:b},Symbol.toStringTag,{value:"Module"}));export{S as A,b as m};
