var d=Object.defineProperty;var u=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var h=(t,r,e)=>r in t?d(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,i=(t,r)=>{for(var e in r||(r={}))x.call(r,e)&&h(t,e,r[e]);if(u)for(var e of u(r))_.call(r,e)&&h(t,e,r[e]);return t};var E=(t,r,e)=>new Promise((p,m)=>{var a=o=>{try{n(e.next(o))}catch(l){m(l)}},c=o=>{try{n(e.throw(o))}catch(l){m(l)}},n=o=>o.done?p(o.value):Promise.resolve(o.value).then(a,c);n((e=e.apply(t,r)).next())});import{_ as D}from"./iframe-COr80JOR.js";import{R as s,r as f}from"./index-CNk6hRaE.js";import{r as v,u as C}from"./react-18-CptRw6kM.js";import{e as M,A as R,H as g,D as w}from"./index-5udAXhes.js";import"../sb-preview/runtime.js";import"./index-D-4E_f9W.js";import"./extends-CF3RwP-h.js";import"./index-DYADbu9O.js";import"./isNativeReflectConstruct-CYew8PZR.js";import"./_baseClone-BjCwUuX-.js";import"./_getPrototype-CAOE_2rY.js";import"./index-eS13M_ii.js";import"./index-DrFu-skq.js";var y=i({code:M,a:R},g),A=class extends f.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:r}=this.props;r(t)}render(){let{hasError:t}=this.state,{children:r}=this.props;return t?null:s.createElement(s.Fragment,null,r)}},G=class{constructor(){this.render=(t,r,e)=>E(this,null,function*(){let p=i(i({},y),r==null?void 0:r.components),m=w;return new Promise((a,c)=>{D(()=>import("./index-BI4Okn8T.js"),__vite__mapDeps([0,1]),import.meta.url).then(({MDXProvider:n})=>v(s.createElement(A,{showException:c,key:Math.random()},s.createElement(n,{components:p},s.createElement(m,{context:t,docsParameter:r}))),e)).then(()=>a())})}),this.unmount=t=>{C(t)}}};export{G as DocsRenderer,y as defaultComponents};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-BI4Okn8T.js","./index-CNk6hRaE.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
