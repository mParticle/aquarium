const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-CkQzTg6q.js","./index-3OP4wdng.js"])))=>i.map(i=>d[i]);
var d=Object.defineProperty;var h=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var E=(t,r,e)=>r in t?d(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,m=(t,r)=>{for(var e in r||(r={}))x.call(r,e)&&E(t,e,r[e]);if(h)for(var e of h(r))_.call(r,e)&&E(t,e,r[e]);return t};var u=(t,r,e)=>new Promise((a,i)=>{var p=n=>{try{o(e.next(n))}catch(l){i(l)}},c=n=>{try{o(e.throw(n))}catch(l){i(l)}},o=n=>n.done?a(n.value):Promise.resolve(n.value).then(p,c);o((e=e.apply(t,r)).next())});import{_ as D}from"./iframe-BIOeh-cI.js";import{R as s,r as f}from"./index-3OP4wdng.js";import{ah as v,ai as M,aj as w,ak as y}from"./index-YYr7bGDs.js";import{renderElement as C,unmountElement as R}from"./react-18-BhxKkCfj.js";import"../sb-preview/runtime.js";import"./jsx-runtime-CVnACwZl.js";import"./index-B-gr4m3q.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-D-r9sWlk.js";import"./_baseClone-B3DJrZ5i.js";import"./index-CZDRLeSo.js";import"./index-DrFu-skq.js";var g=m({code:v,a:M},w),k=class extends f.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:r}=this.props;r(t)}render(){let{hasError:t}=this.state,{children:r}=this.props;return t?null:s.createElement(s.Fragment,null,r)}},z=class{constructor(){this.render=(t,r,e)=>u(this,null,function*(){let a=m(m({},g),r==null?void 0:r.components),i=y;return new Promise((p,c)=>{D(()=>u(this,null,function*(){const{MDXProvider:o}=yield import("./index-CkQzTg6q.js");return{MDXProvider:o}}),__vite__mapDeps([0,1]),import.meta.url).then(({MDXProvider:o})=>C(s.createElement(k,{showException:c,key:Math.random()},s.createElement(o,{components:a},s.createElement(i,{context:t,docsParameter:r}))),e)).then(()=>p())})}),this.unmount=t=>{R(t)}}};export{z as DocsRenderer,g as defaultComponents};
