var d=Object.defineProperty;var h=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var u=(t,r,e)=>r in t?d(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,i=(t,r)=>{for(var e in r||(r={}))x.call(r,e)&&u(t,e,r[e]);if(h)for(var e of h(r))_.call(r,e)&&u(t,e,r[e]);return t};var E=(t,r,e)=>new Promise((a,m)=>{var p=o=>{try{n(e.next(o))}catch(l){m(l)}},c=o=>{try{n(e.throw(o))}catch(l){m(l)}},n=o=>o.done?a(o.value):Promise.resolve(o.value).then(p,c);n((e=e.apply(t,r)).next())});import{_ as D}from"./iframe-BJhbaB-r.js";import{R as s,r as f}from"./index-CNk6hRaE.js";import{ah as v,ai as C,aj as M,ak as R}from"./index-BsVhw6Ks.js";import{renderElement as g,unmountElement as w}from"./react-18-CrJMbcCu.js";import"../sb-preview/runtime.js";import"./jsx-runtime-BcCOBRXo.js";import"./index-D-4E_f9W.js";import"./index-J1TP6alb.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-CWIsGhkf.js";import"./_baseClone-DBzvlRjn.js";import"./index-P2MZap72.js";import"./index-DrFu-skq.js";var y=i({code:v,a:C},M),k=class extends f.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:r}=this.props;r(t)}render(){let{hasError:t}=this.state,{children:r}=this.props;return t?null:s.createElement(s.Fragment,null,r)}},G=class{constructor(){this.render=(t,r,e)=>E(this,null,function*(){let a=i(i({},y),r==null?void 0:r.components),m=R;return new Promise((p,c)=>{D(()=>import("./index-BI4Okn8T.js"),__vite__mapDeps([0,1]),import.meta.url).then(({MDXProvider:n})=>g(s.createElement(k,{showException:c,key:Math.random()},s.createElement(n,{components:a},s.createElement(m,{context:t,docsParameter:r}))),e)).then(()=>p())})}),this.unmount=t=>{w(t)}}};export{G as DocsRenderer,y as defaultComponents};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-BI4Okn8T.js","./index-CNk6hRaE.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
