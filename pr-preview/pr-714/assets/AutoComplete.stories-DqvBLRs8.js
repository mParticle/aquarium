import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as s}from"./iframe-ZAwtOOsv.js";import{r as w}from"./UnauthorizedTooltip-C-uexwNG.js";import"./ErrorStateIcon-B6JkuEkJ.js";import"./SuccessStateIcon-BoEEKEoh.js";import"./WarningStateIcon-DvK-CXgy.js";const{expect:c,screen:h,userEvent:i,within:g}=__STORYBOOK_MODULE_TEST__,u=[{label:"The quick brown fox jumps over the lazy dog",value:1},{label:"Waxy and quivering, jocks fumble the pizza",value:2},{label:"When zombies arrive, quickly fax judge Pat",value:3},{label:"Pack my red box with five dozen quality jugs",value:4},{label:"The quick onyx goblin jumps over the lazy dwarf",value:5}],b={title:"Components/Data Entry/Auto Complete",tags:["play-test-validation"],component:e=>{const[a,n]=s.useState(""),[l,p]=s.useState([]),d=t=>t?u.filter(y=>y.label.toLowerCase().includes(t.toLowerCase())):[],m=t=>{p(d(t))},v=t=>{console.log("you selected value: "+t)};return r.jsx(r.Fragment,{children:r.jsx(w,{...e,value:a,options:l,onSelect:v,onSearch:m,onChange:n})})},args:{placeholder:"Search AutoComplete",allowClear:!1,autoFocus:!1,backfill:!1,defaultActiveFirstOption:!0,disabled:!1,options:u,status:void 0,value:void 0,onChange:e=>{alert(`Selected Value: ${e}`)},onFocus:()=>{console.log("Focus Event")},onSearch:e=>{alert(`Search Value: ${e}`)},onSelect:(e,a)=>{alert(`Selected Value: ${e}, Option: ${String(a.label)}`)},onClear:()=>{alert("Clear Event")}},argTypes:{status:{control:"select",options:["error","warning"]}}},o={args:{placeholder:"-Select-",style:{width:200}},play:async({canvasElement:e})=>{const n=g(e).getByRole("combobox");await i.type(n,"quick");const l=await h.findByText("The quick brown fox jumps over the lazy dog");await c(l).toBeInTheDocument(),await i.click(l),await c(n).toHaveValue("1")}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const f=["Primary"],T=Object.freeze(Object.defineProperty({__proto__:null,Primary:o,__namedExportsOrder:f,default:b},Symbol.toStringTag,{value:"Module"}));export{T as A,b as m};
