import{c as d,s as b,g as j,d as c,f as T,a as m,b as z,T as h,e as S,h as O,i as v,j as u,D as C,u as k}from"./useToken-CXWLUMEq.js";import"./index-3OP4wdng.js";const B=t=>{const e=t!=null&&t.algorithm?d(t.algorithm):d(c),r=Object.assign(Object.assign({},b),t==null?void 0:t.token);return j(r,{override:t==null?void 0:t.token},e,T)};function x(t){const{sizeUnit:e,sizeStep:r}=t,o=r-2;return{sizeXXL:e*(o+10),sizeXL:e*(o+6),sizeLG:e*(o+2),sizeMD:e*(o+2),sizeMS:e*(o+1),size:e*o,sizeSM:e*o,sizeXS:e*(o-1),sizeXXS:e*(o-1)}}const y=(t,e)=>{const r=e!=null?e:c(t),o=r.fontSizeSM,s=r.controlHeight-4;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},r),x(e!=null?e:t)),m(o)),{controlHeight:s}),z(Object.assign(Object.assign({},r),{controlHeight:s})))},n=(t,e)=>new h(t).setAlpha(e).toRgbString(),a=(t,e)=>new h(t).lighten(e).toHexString(),M=t=>{const e=S(t,{theme:"dark"});return{1:e[0],2:e[1],3:e[2],4:e[3],5:e[6],6:e[5],7:e[4],8:e[6],9:e[5],10:e[4]}},f=(t,e)=>{const r=t||"#000",o=e||"#fff";return{colorBgBase:r,colorTextBase:o,colorText:n(o,.85),colorTextSecondary:n(o,.65),colorTextTertiary:n(o,.45),colorTextQuaternary:n(o,.25),colorFill:n(o,.18),colorFillSecondary:n(o,.12),colorFillTertiary:n(o,.08),colorFillQuaternary:n(o,.04),colorBgElevated:a(r,12),colorBgContainer:a(r,8),colorBgLayout:a(r,0),colorBgSpotlight:a(r,26),colorBgBlur:n(o,.04),colorBorder:a(r,26),colorBorderSecondary:a(r,19)}},$=(t,e)=>{const r=Object.keys(O).map(s=>{const l=S(t[s],{theme:"dark"});return new Array(10).fill(1).reduce((g,A,i)=>(g[`${s}-${i+1}`]=l[i],g[`${s}${i+1}`]=l[i],g),{})}).reduce((s,l)=>(s=Object.assign(Object.assign({},s),l),s),{}),o=e!=null?e:c(t);return Object.assign(Object.assign(Object.assign({},o),r),v(t,{generateColorPalettes:M,generateNeutralColorPalettes:f}))};function p(){const[t,e,r]=k();return{theme:t,token:e,hashId:r}}const D={defaultSeed:u.token,useToken:p,defaultAlgorithm:c,darkAlgorithm:$,compactAlgorithm:y,getDesignToken:B,defaultConfig:u,_internalContext:C};export{D as t};
