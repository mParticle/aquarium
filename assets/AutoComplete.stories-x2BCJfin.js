var C=Object.defineProperty,j=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var c=(e,t,o)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,l=(e,t)=>{for(var o in t||(t={}))w.call(t,o)&&c(e,o,t[o]);if(u)for(var o of u(t))z.call(t,o)&&c(e,o,t[o]);return e},s=(e,t)=>j(e,x(t));import{j as n}from"./jsx-runtime-BcCOBRXo.js";import{r as i}from"./index-CNk6hRaE.js";import{u as O}from"./ChartColors-BWTk1_ST.js";import"./_baseClone-DBzvlRjn.js";const p=[{label:"The quick brown fox jumps over the lazy dog",value:1},{label:"Waxy and quivering, jocks fumble the pizza",value:2},{label:"When zombies arrive, quickly fax judge Pat",value:3},{label:"Pack my red box with five dozen quality jugs",value:4},{label:"The quick onyx goblin jumps over the lazy dwarf",value:5}],k={title:"Components/Data Entry/Auto Complete",component:e=>{const[t,o]=i.useState(""),[f,v]=i.useState([]),b=a=>a?p.filter(y=>y.label.toLowerCase().includes(a.toLowerCase())):[],h=a=>{v(b(a))},S=a=>{console.log("you selected value: "+a)};return n.jsx(n.Fragment,{children:n.jsx(O,s(l({},e),{value:t,options:f,onSelect:S,onSearch:h,onChange:o}))})},args:{placeholder:"Search AutoComplete",allowClear:!1,autoFocus:!1,backfill:!1,defaultActiveFirstOption:!0,disabled:!1,options:p,status:void 0,value:void 0,onChange:e=>{alert(`Selected Value: ${e}`)},onFocus:()=>{console.log("Focus Event")},onSearch:e=>{alert(`Search Value: ${e}`)},onSelect:(e,t)=>{alert(`Selected Value: ${e}, Option: ${String(t.label)}`)},onClear:()=>{alert("Clear Event")}},argTypes:{status:{control:"select",options:["error","warning"]}}},r={args:{placeholder:"-Select-",style:{width:200}}};var m,d,g;r.parameters=s(l({},r.parameters),{docs:s(l({},(m=r.parameters)==null?void 0:m.docs),{source:l({originalSource:`{
  args: {
    placeholder: '-Select-',
    style: {
      width: 200
    }
  }
}`},(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source)})});const A=["Primary"],V=Object.freeze(Object.defineProperty({__proto__:null,Primary:r,__namedExportsOrder:A,default:k},Symbol.toStringTag,{value:"Module"}));export{V as A,k as m};
