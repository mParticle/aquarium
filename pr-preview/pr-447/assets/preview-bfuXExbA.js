var D=Object.defineProperty,I=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var h=(t,e,r)=>e in t?D(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,d=(t,e)=>{for(var r in e||(e={}))w.call(e,r)&&h(t,r,e[r]);if(R)for(var r of R(e))U.call(e,r)&&h(t,r,e[r]);return t},u=(t,e)=>I(t,v(e));import{u as j}from"./stringify-DnirLPRY.js";let l;const V=new Uint8Array(16);function C(){if(!l&&(l=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!l))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return l(V)}const K=typeof crypto!="undefined"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),E={randomUUID:K};function L(t,e,r){if(E.randomUUID&&!e&&!t)return E.randomUUID();t=t||{};const n=t.random||(t.rng||C)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,e){r=r||0;for(let o=0;o<16;++o)e[r+o]=n[o];return e}return j(n)}const{addons:B}=__STORYBOOK_MODULE_PREVIEW_API__,{global:p}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:M}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var P="storybook/actions",Y=`${P}/action-event`,N={depth:10,clearOnStoryChange:!0,limit:50},A=(t,e)=>{let r=Object.getPrototypeOf(t);return!r||e(r)?r:A(r,e)},W=t=>!!(typeof t=="object"&&t&&A(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),k=t=>{if(W(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let r=Object.getOwnPropertyDescriptor(e,"view"),n=r==null?void 0:r.value;return typeof n=="object"&&(n==null?void 0:n.constructor.name)==="Window"&&Object.defineProperty(e,"view",u(d({},r),{value:Object.create(n.constructor.prototype)})),e}return t},F=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?L():Date.now().toString(36)+Math.random().toString(36).substring(2);function O(t,e={}){let r=d(d({},N),e),n=function(...o){var g,y;if(e.implicit){let f=(g="__STORYBOOK_PREVIEW__"in p?p.__STORYBOOK_PREVIEW__:void 0)==null?void 0:g.storyRenders.find(c=>c.phase==="playing"||c.phase==="rendering");if(f){let c=!((y=window==null?void 0:window.FEATURES)!=null&&y.disallowImplicitActionsInRenderV8),m=new M({phase:f.phase,name:t,deprecated:c});if(c)console.warn(m);else throw m}}let i=B.getChannel(),a=F(),s=5,_=o.map(k),x=o.length>1?_:_[0],b={id:a,count:0,data:{name:t,args:x},options:u(d({},r),{maxDepth:s+(r.depth||3),allowFunction:r.allowFunction||!1})};i.emit(Y,b)};return n.isAction=!0,n.implicit=e.implicit,n}var S=(t,e)=>typeof e[t]>"u"&&!(t in e),z=t=>{let{initialArgs:e,argTypes:r,id:n,parameters:{actions:o}}=t;if(!o||o.disable||!o.argTypesRegex||!r)return{};let i=new RegExp(o.argTypesRegex);return Object.entries(r).filter(([a])=>!!i.test(a)).reduce((a,[s,_])=>(S(s,e)&&(a[s]=O(s,{implicit:!0,id:n})),a),{})},$=t=>{let{initialArgs:e,argTypes:r,parameters:{actions:n}}=t;return n!=null&&n.disable||!r?{}:Object.entries(r).filter(([o,i])=>!!i.action).reduce((o,[i,a])=>(S(i,e)&&(o[i]=O(typeof a.action=="string"?a.action:i)),o),{})},J=[$,z],T=!1,G=t=>{let{parameters:{actions:e}}=t;if(!(e!=null&&e.disable)&&!T&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in p&&typeof p.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let r=p.__STORYBOOK_TEST_ON_MOCK_CALL__;r((n,o)=>{let i=n.getMockName();i!=="spy"&&(!/^next\/.*::/.test(i)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(a=>i.startsWith(a)))&&O(i)(o)}),T=!0}},Q=[G];export{J as argsEnhancers,Q as loaders};
