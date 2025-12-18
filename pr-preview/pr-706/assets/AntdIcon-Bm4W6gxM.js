var U=Object.defineProperty,_=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var $=(n,o,t)=>o in n?U(n,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[o]=t,s=(n,o)=>{for(var t in o||(o={}))v.call(o,t)&&$(n,t,o[t]);if(C)for(var t of C(o))S.call(o,t)&&$(n,t,o[t]);return n},b=(n,o)=>_(n,q(o));var h=(n,o)=>{var t={};for(var e in n)v.call(n,e)&&o.indexOf(e)<0&&(t[e]=n[e]);if(n!=null&&C)for(var e of C(n))o.indexOf(e)<0&&S.call(n,e)&&(t[e]=n[e]);return t};import{r as c,R as I}from"./index-CNk6hRaE.js";import{I as N,c as F}from"./Context-BUSkoOJ1.js";import{g as G,u as H,w as J,b as K}from"./presets-vy2ytAcW.js";function j(n){var o;return(o=n==null?void 0:n.getRootNode)==null?void 0:o.call(n)}function M(n){return j(n)instanceof ShadowRoot}function Q(n){return M(n)?j(n):null}function V(n){return n.replace(/-(.)/g,(o,t)=>t.toUpperCase())}function W(n,o){J(n,`[@ant-design/icons] ${o}`)}function R(n){return typeof n=="object"&&typeof n.name=="string"&&typeof n.theme=="string"&&(typeof n.icon=="object"||typeof n.icon=="function")}function E(n={}){return Object.keys(n).reduce((o,t)=>{const e=n[t];switch(t){case"class":o.className=e,delete o.class;break;default:delete o[t],o[V(t)]=e}return o},{})}function w(n,o,t){return t?I.createElement(n.tag,s(s({key:o},E(n.attrs)),t),(n.children||[]).map((e,r)=>w(e,`${o}-${n.tag}-${r}`))):I.createElement(n.tag,s({key:o},E(n.attrs)),(n.children||[]).map((e,r)=>w(e,`${o}-${n.tag}-${r}`)))}function k(n){return G(n)[0]}function O(n){return n?Array.isArray(n)?n:[n]:[]}const X=`
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
`,Y=n=>{const{csp:o,prefixCls:t,layer:e}=c.useContext(N);let r=X;t&&(r=r.replace(/anticon/g,t)),e&&(r=`@layer ${e} {
${r}
}`),c.useEffect(()=>{const i=n.current,f=Q(i);H(r,"@ant-design-icons",{prepend:!e,csp:o,attachTo:f})},[])},u={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function Z({primaryColor:n,secondaryColor:o}){u.primaryColor=n,u.secondaryColor=o||k(n),u.calculated=!!o}function nn(){return s({},u)}const l=n=>{const p=n,{icon:o,className:t,onClick:e,style:r,primaryColor:i,secondaryColor:f}=p,g=h(p,["icon","className","onClick","style","primaryColor","secondaryColor"]),d=c.useRef(null);let m=u;if(i&&(m={primaryColor:i,secondaryColor:f||k(i)}),Y(d),W(R(o),`icon should be icon definiton, but got ${o}`),!R(o))return null;let a=o;return a&&typeof a.icon=="function"&&(a=b(s({},a),{icon:a.icon(m.primaryColor,m.secondaryColor)})),w(a.icon,`svg-${a.name}`,b(s({className:t,onClick:e,style:r,"data-icon":a.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},g),{ref:d}))};l.displayName="IconReact";l.getTwoToneColors=nn;l.setTwoToneColors=Z;function z(n){const[o,t]=O(n);return l.setTwoToneColors({primaryColor:o,secondaryColor:t})}function on(){const n=l.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor}function T(){return T=Object.assign?Object.assign.bind():function(n){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])}return n},T.apply(this,arguments)}z(K.primary);const A=c.forwardRef((n,o)=>{const x=n,{className:t,icon:e,spin:r,rotate:i,tabIndex:f,onClick:g,twoToneColor:d}=x,m=h(x,["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"]),{prefixCls:a="anticon",rootClassName:p}=c.useContext(N),P=F(p,a,{[`${a}-${e.name}`]:!!e.name,[`${a}-spin`]:!!r||e.name==="loading"},t);let y=f;y===void 0&&g&&(y=-1);const B=i?{msTransform:`rotate(${i}deg)`,transform:`rotate(${i}deg)`}:void 0,[D,L]=O(d);return c.createElement("span",T({role:"img","aria-label":e.name},m,{ref:o,tabIndex:y,onClick:g,className:P}),c.createElement(l,{icon:e,primaryColor:D,secondaryColor:L,style:B}))});A.getTwoToneColor=on;A.setTwoToneColor=z;export{A as I,Q as g};
