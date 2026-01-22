import{r as s,R as y}from"./iframe-DPsSDxI5.js";import{I as w,c as k}from"./Context-BfWCYYV6.js";import{g as O,u as z,w as A,b as P}from"./presets-C7IxLGBr.js";function T(n){return n?.getRootNode?.()}function B(n){return T(n)instanceof ShadowRoot}function D(n){return B(n)?T(n):null}function L(n){return n.replace(/-(.)/g,(e,o)=>o.toUpperCase())}function U(n,e){A(n,`[@ant-design/icons] ${e}`)}function b(n){return typeof n=="object"&&typeof n.name=="string"&&typeof n.theme=="string"&&(typeof n.icon=="object"||typeof n.icon=="function")}function h(n={}){return Object.keys(n).reduce((e,o)=>{const t=n[o];return o==="class"?(e.className=t,delete e.class):(delete e[o],e[L(o)]=t),e},{})}function p(n,e,o){return o?y.createElement(n.tag,{key:e,...h(n.attrs),...o},(n.children||[]).map((t,r)=>p(t,`${e}-${n.tag}-${r}`))):y.createElement(n.tag,{key:e,...h(n.attrs)},(n.children||[]).map((t,r)=>p(t,`${e}-${n.tag}-${r}`)))}function x(n){return O(n)[0]}function $(n){return n?Array.isArray(n)?n:[n]:[]}const _=`
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
  vertical-align: inherit;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,q=n=>{const{csp:e,prefixCls:o,layer:t}=s.useContext(w);let r=_;o&&(r=r.replace(/anticon/g,o)),t&&(r=`@layer ${t} {
${r}
}`),s.useEffect(()=>{const i=n.current,c=D(i);z(r,"@ant-design-icons",{prepend:!t,csp:e,attachTo:c})},[])},m={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function F({primaryColor:n,secondaryColor:e}){m.primaryColor=n,m.secondaryColor=e||x(n),m.calculated=!!e}function G(){return{...m}}const l=n=>{const{icon:e,className:o,onClick:t,style:r,primaryColor:i,secondaryColor:c,...u}=n,g=s.useRef(null);let f=m;if(i&&(f={primaryColor:i,secondaryColor:c||x(i)}),q(g),U(b(e),`icon should be icon definiton, but got ${e}`),!b(e))return null;let a=e;return a&&typeof a.icon=="function"&&(a={...a,icon:a.icon(f.primaryColor,f.secondaryColor)}),p(a.icon,`svg-${a.name}`,{className:o,onClick:t,style:r,"data-icon":a.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",...u,ref:g})};l.displayName="IconReact";l.getTwoToneColors=G;l.setTwoToneColors=F;function v(n){const[e,o]=$(n);return l.setTwoToneColors({primaryColor:e,secondaryColor:o})}function H(){const n=l.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor}function C(){return C=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},C.apply(this,arguments)}v(P.primary);const S=s.forwardRef((n,e)=>{const{className:o,icon:t,spin:r,rotate:i,tabIndex:c,onClick:u,twoToneColor:g,...f}=n,{prefixCls:a="anticon",rootClassName:I}=s.useContext(w),R=k(I,a,{[`${a}-${t.name}`]:!!t.name,[`${a}-spin`]:!!r||t.name==="loading"},o);let d=c;d===void 0&&u&&(d=-1);const E=i?{msTransform:`rotate(${i}deg)`,transform:`rotate(${i}deg)`}:void 0,[N,j]=$(g);return s.createElement("span",C({role:"img","aria-label":t.name},f,{ref:e,tabIndex:d,onClick:u,className:R}),s.createElement(l,{icon:t,primaryColor:N,secondaryColor:j,style:E}))});S.getTwoToneColor=H;S.setTwoToneColor=v;export{S as I,D as g};
