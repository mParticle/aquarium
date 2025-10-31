import{_ as U}from"./extends-CF3RwP-h.js";import{w as W,_ as x,a as l,g as q,u as F,b as N,c as G,d as h}from"./presets-BrZHayqo.js";import{I as R,_ as S,c as H}from"./Context-R5ee3nrF.js";import{R as _,r as s}from"./index-3OP4wdng.js";function E(n){var o;return n==null||(o=n.getRootNode)===null||o===void 0?void 0:o.call(n)}function J(n){return E(n)instanceof ShadowRoot}function K(n){return J(n)?E(n):null}function M(n){return n.replace(/-(.)/g,function(o,e){return e.toUpperCase()})}function Q(n,o){W(n,"[@ant-design/icons] ".concat(o))}function I(n){return x(n)==="object"&&typeof n.name=="string"&&typeof n.theme=="string"&&(x(n.icon)==="object"||typeof n.icon=="function")}function k(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(n).reduce(function(o,e){var r=n[e];switch(e){case"class":o.className=r,delete o.class;break;default:delete o[e],o[M(e)]=r}return o},{})}function T(n,o,e){return e?_.createElement(n.tag,l(l({key:o},k(n.attrs)),e),(n.children||[]).map(function(r,t){return T(r,"".concat(o,"-").concat(n.tag,"-").concat(t))})):_.createElement(n.tag,l({key:o},k(n.attrs)),(n.children||[]).map(function(r,t){return T(r,"".concat(o,"-").concat(n.tag,"-").concat(t))}))}function z(n){return q(n)[0]}function A(n){return n?Array.isArray(n)?n:[n]:[]}var V=`
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
`,X=function(o){var e=s.useContext(R),r=e.csp,t=e.prefixCls,c=e.layer,a=V;t&&(a=a.replace(/anticon/g,t)),c&&(a="@layer ".concat(c,` {
`).concat(a,`
}`)),s.useEffect(function(){var m=o.current,u=K(m);F(a,"@ant-design-icons",{prepend:!c,csp:r,attachTo:u})},[])},Y=["icon","className","onClick","style","primaryColor","secondaryColor"],f={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function Z(n){var o=n.primaryColor,e=n.secondaryColor;f.primaryColor=o,f.secondaryColor=e||z(o),f.calculated=!!e}function nn(){return l({},f)}var y=function(o){var e=o.icon,r=o.className,t=o.onClick,c=o.style,a=o.primaryColor,m=o.secondaryColor,u=S(o,Y),C=s.useRef(),d=f;if(a&&(d={primaryColor:a,secondaryColor:m||z(a)}),X(C),Q(I(e),"icon should be icon definiton, but got ".concat(e)),!I(e))return null;var i=e;return i&&typeof i.icon=="function"&&(i=l(l({},i),{},{icon:i.icon(d.primaryColor,d.secondaryColor)})),T(i.icon,"svg-".concat(i.name),l(l({className:r,onClick:t,style:c,"data-icon":i.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},u),{},{ref:C}))};y.displayName="IconReact";y.getTwoToneColors=nn;y.setTwoToneColors=Z;const w=y;function $(n){var o=A(n),e=N(o,2),r=e[0],t=e[1];return w.setTwoToneColors({primaryColor:r,secondaryColor:t})}function on(){var n=w.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor}var en=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];$(G.primary);var g=s.forwardRef(function(n,o){var e=n.className,r=n.icon,t=n.spin,c=n.rotate,a=n.tabIndex,m=n.onClick,u=n.twoToneColor,C=S(n,en),d=s.useContext(R),i=d.prefixCls,p=i===void 0?"anticon":i,j=d.rootClassName,P=H(j,p,h(h({},"".concat(p,"-").concat(r.name),!!r.name),"".concat(p,"-spin"),!!t||r.name==="loading"),e),v=a;v===void 0&&m&&(v=-1);var B=c?{msTransform:"rotate(".concat(c,"deg)"),transform:"rotate(".concat(c,"deg)")}:void 0,O=A(u),b=N(O,2),D=b[0],L=b[1];return s.createElement("span",U({role:"img","aria-label":r.name},C,{ref:o,tabIndex:v,onClick:m,className:P}),s.createElement(w,{icon:r,primaryColor:D,secondaryColor:L,style:B}))});g.displayName="AntdIcon";g.getTwoToneColor=on;g.setTwoToneColor=$;const ln=g;export{ln as A,K as g};
