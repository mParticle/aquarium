var b=Object.defineProperty;var E=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var _=(e,r,t)=>r in e?b(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,c=(e,r)=>{for(var t in r||(r={}))D.call(r,t)&&_(e,t,r[t]);if(E)for(var t of E(r))M.call(r,t)&&_(e,t,r[t]);return e};var f=(e,r,t)=>new Promise((o,p)=>{var a=n=>{try{m(t.next(n))}catch(s){p(s)}},w=n=>{try{m(t.throw(n))}catch(s){p(s)}},m=n=>n.done?o(n.value):Promise.resolve(n.value).then(a,w);m((t=t.apply(e,r)).next())});import{R as i,r as l}from"./index-CNk6hRaE.js";import{u as v,r as O}from"./react-18-CptRw6kM.js";import"./index-D-4E_f9W.js";var B=Object.defineProperty,L=(e,r)=>{for(var t in r)B(e,t,{get:r[t],enumerable:!0})};const{global:x}=__STORYBOOK_MODULE_GLOBAL__;var S={};L(S,{parameters:()=>F,render:()=>T,renderToCanvas:()=>j});var T=(e,r)=>{let{id:t,component:o}=r;if(!o)throw new Error(`Unable to render story ${t} as the component annotation is missing from the default export`);return i.createElement(o,c({},e))},{FRAMEWORK_OPTIONS:d}=x,U=class extends l.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidMount(){let{hasError:e}=this.state,{showMain:r}=this.props;e||r()}componentDidCatch(e){let{showException:r}=this.props;r(e)}render(){let{hasError:e}=this.state,{children:r}=this.props;return e?null:r}},g=d!=null&&d.strictMode?l.StrictMode:l.Fragment;function j(w,m){return f(this,arguments,function*({storyContext:e,unboundStoryFn:r,showMain:t,showException:o,forceRemount:p},a){var h,u;let n=i.createElement(U,{showMain:t,showException:o},i.createElement(r,c({},e))),s=g?i.createElement(g,null,n):n;return p&&v(a),yield O(s,a,(u=(h=e==null?void 0:e.parameters)==null?void 0:h.react)==null?void 0:u.rootOptions),()=>v(a)})}var F={renderer:"react"};export{F as parameters,T as render,j as renderToCanvas};
