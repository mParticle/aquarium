import{e as v,c as l,g as x,k as N,j as P,l as A,m as M,n as b,t as p,o as w}from"./_baseUniq-hdII6bw-.js";import{aI as g,ay as E,aJ as F,aK as _,aL as B,aM as O,aN as T,aO as L,aP as S,aQ as $}from"./Using existing ones-CQc1yoQl.js";var G=/\s/;function K(n){for(var r=n.length;r--&&G.test(n.charAt(r)););return r}var R=/^\s+/;function c(n){return n&&n.slice(0,K(n)+1).replace(R,"")}var I=NaN,q=/^[-+]0x[0-9a-f]+$/i,C=/^0b[01]+$/i,H=/^0o[0-7]+$/i,J=parseInt;function Q(n){if(typeof n=="number")return n;if(v(n))return I;if(g(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=g(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=c(n);var t=C.test(n);return t||H.test(n)?J(n.slice(2),t?2:8):q.test(n)?I:+n}var m=1/0,W=17976931348623157e292;function X(n){if(!n)return n===0?n:0;if(n=Q(n),n===m||n===-m){var r=n<0?-1:1;return r*W}return n===n?n:0}function Y(n){var r=X(n),t=r%1;return r===r?t?r-t:r:0}function tn(n){var r=n==null?0:n.length;return r?l(n,1):[]}var o=Object.prototype,y=o.hasOwnProperty,an=E(function(n,r){n=Object(n);var t=-1,e=r.length,i=e>2?r[2]:void 0;for(i&&F(r[0],r[1],i)&&(e=1);++t<e;)for(var f=r[t],a=_(f),s=-1,d=a.length;++s<d;){var u=a[s],h=n[u];(h===void 0||B(h,o[u])&&!y.call(n,u))&&(n[u]=f[u])}return n});function en(n){var r=n==null?0:n.length;return r?n[r-1]:void 0}function D(n){return function(r,t,e){var i=Object(r);if(!O(r)){var f=x(t);r=N(r),t=function(s){return f(i[s],s,i)}}var a=n(r,t,e);return a>-1?i[f?r[a]:a]:void 0}}var U=Math.max;function Z(n,r,t){var e=n==null?0:n.length;if(!e)return-1;var i=t==null?0:Y(t);return i<0&&(i=U(e+i,0)),P(n,x(r),i)}var sn=D(Z);function z(n,r){var t=-1,e=O(n)?Array(n.length):[];return A(n,function(i,f,a){e[++t]=r(i,f,a)}),e}function fn(n,r){var t=T(n)?M:z;return t(n,x(r))}function V(n,r){return n<r}function k(n,r,t){for(var e=-1,i=n.length;++e<i;){var f=n[e],a=r(f);if(a!=null&&(s===void 0?a===a&&!v(a):t(a,s)))var s=a,d=f}return d}function dn(n){return n&&n.length?k(n,L,V):void 0}function j(n,r,t,e){if(!g(n))return n;r=b(r,n);for(var i=-1,f=r.length,a=f-1,s=n;s!=null&&++i<f;){var d=p(r[i]),u=t;if(d==="__proto__"||d==="constructor"||d==="prototype")return n;if(i!=a){var h=s[d];u=e?e(h,d,s):void 0,u===void 0&&(u=g(h)?h:S(r[i+1])?[]:{})}$(s,d,u),s=s[d]}return n}function un(n,r,t){for(var e=-1,i=r.length,f={};++e<i;){var a=r[e],s=w(n,a);t(s,a)&&j(f,b(a,n),s)}return f}export{V as a,k as b,z as c,un as d,dn as e,tn as f,sn as g,an as h,Y as i,en as l,fn as m,X as t};
