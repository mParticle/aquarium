import{_ as g,d as lt,g as _t,s as xt,b as vt,c as bt,r as wt,q as St,t as Lt,e as Et,p as At,j as H,aa as Tt}from"./Using existing ones-CiNbl8vj.js";import{o as Mt}from"./ordinal-Cboi1Yqb.js";import"./jsx-runtime-BcCOBRXo.js";import"./index-CNk6hRaE.js";import"./index-BI4Okn8T.js";import"./iframe-BVnhj4DA.js";import"../sb-preview/runtime.js";import"./dayjs.min-KGLNs1IR.js";import"./index-DrFu-skq.js";import"./Serializer-OW4gUFyn.js";import"./init-Gi6I4Gst.js";function Nt(t){for(var i=t.length/6|0,s=new Array(i),l=0;l<i;)s[l]="#"+t.slice(l*6,++l*6);return s}const It=Nt("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");function ct(t,i){let s;if(i===void 0)for(const l of t)l!=null&&(s<l||s===void 0&&l>=l)&&(s=l);else{let l=-1;for(let h of t)(h=i(h,++l,t))!=null&&(s<h||s===void 0&&h>=h)&&(s=h)}return s}function gt(t,i){let s;if(i===void 0)for(const l of t)l!=null&&(s>l||s===void 0&&l>=l)&&(s=l);else{let l=-1;for(let h of t)(h=i(h,++l,t))!=null&&(s>h||s===void 0&&h>=h)&&(s=h)}return s}function nt(t,i){let s=0;if(i===void 0)for(let l of t)(l=+l)&&(s+=l);else{let l=-1;for(let h of t)(h=+i(h,++l,t))&&(s+=h)}return s}function Pt(t){return t.target.depth}function Ct(t){return t.depth}function Ot(t,i){return i-1-t.height}function mt(t,i){return t.sourceLinks.length?t.depth:i-1}function Dt(t){return t.targetLinks.length?t.depth:t.sourceLinks.length?gt(t.sourceLinks,Pt)-1:0}function X(t){return function(){return t}}function ut(t,i){return Q(t.source,i.source)||t.index-i.index}function ht(t,i){return Q(t.target,i.target)||t.index-i.index}function Q(t,i){return t.y0-i.y0}function it(t){return t.value}function jt(t){return t.index}function zt(t){return t.nodes}function $t(t){return t.links}function ft(t,i){const s=t.get(i);if(!s)throw new Error("missing: "+i);return s}function yt({nodes:t}){for(const i of t){let s=i.y0,l=s;for(const h of i.sourceLinks)h.y0=s+h.width/2,s+=h.width;for(const h of i.targetLinks)h.y1=l+h.width/2,l+=h.width}}function Bt(){let t=0,i=0,s=1,l=1,h=24,d=8,p,k=jt,o=mt,a,c,_=zt,x=$t,y=6;function v(){const n={nodes:_.apply(null,arguments),links:x.apply(null,arguments)};return T(n),A(n),M(n),P(n),w(n),yt(n),n}v.update=function(n){return yt(n),n},v.nodeId=function(n){return arguments.length?(k=typeof n=="function"?n:X(n),v):k},v.nodeAlign=function(n){return arguments.length?(o=typeof n=="function"?n:X(n),v):o},v.nodeSort=function(n){return arguments.length?(a=n,v):a},v.nodeWidth=function(n){return arguments.length?(h=+n,v):h},v.nodePadding=function(n){return arguments.length?(d=p=+n,v):d},v.nodes=function(n){return arguments.length?(_=typeof n=="function"?n:X(n),v):_},v.links=function(n){return arguments.length?(x=typeof n=="function"?n:X(n),v):x},v.linkSort=function(n){return arguments.length?(c=n,v):c},v.size=function(n){return arguments.length?(t=i=0,s=+n[0],l=+n[1],v):[s-t,l-i]},v.extent=function(n){return arguments.length?(t=+n[0][0],s=+n[1][0],i=+n[0][1],l=+n[1][1],v):[[t,i],[s,l]]},v.iterations=function(n){return arguments.length?(y=+n,v):y};function T({nodes:n,links:f}){for(const[e,r]of n.entries())r.index=e,r.sourceLinks=[],r.targetLinks=[];const u=new Map(n.map((e,r)=>[k(e,r,n),e]));for(const[e,r]of f.entries()){r.index=e;let{source:m,target:b}=r;typeof m!="object"&&(m=r.source=ft(u,m)),typeof b!="object"&&(b=r.target=ft(u,b)),m.sourceLinks.push(r),b.targetLinks.push(r)}if(c!=null)for(const{sourceLinks:e,targetLinks:r}of n)e.sort(c),r.sort(c)}function A({nodes:n}){for(const f of n)f.value=f.fixedValue===void 0?Math.max(nt(f.sourceLinks,it),nt(f.targetLinks,it)):f.fixedValue}function M({nodes:n}){const f=n.length;let u=new Set(n),e=new Set,r=0;for(;u.size;){for(const m of u){m.depth=r;for(const{target:b}of m.sourceLinks)e.add(b)}if(++r>f)throw new Error("circular link");u=e,e=new Set}}function P({nodes:n}){const f=n.length;let u=new Set(n),e=new Set,r=0;for(;u.size;){for(const m of u){m.height=r;for(const{source:b}of m.targetLinks)e.add(b)}if(++r>f)throw new Error("circular link");u=e,e=new Set}}function D({nodes:n}){const f=ct(n,r=>r.depth)+1,u=(s-t-h)/(f-1),e=new Array(f);for(const r of n){const m=Math.max(0,Math.min(f-1,Math.floor(o.call(null,r,f))));r.layer=m,r.x0=t+m*u,r.x1=r.x0+h,e[m]?e[m].push(r):e[m]=[r]}if(a)for(const r of e)r.sort(a);return e}function B(n){const f=gt(n,u=>(l-i-(u.length-1)*p)/nt(u,it));for(const u of n){let e=i;for(const r of u){r.y0=e,r.y1=e+r.value*f,e=r.y1+p;for(const m of r.sourceLinks)m.width=m.value*f}e=(l-e+p)/(u.length+1);for(let r=0;r<u.length;++r){const m=u[r];m.y0+=e*(r+1),m.y1+=e*(r+1)}S(u)}}function w(n){const f=D(n);p=Math.min(d,(l-i)/(ct(f,u=>u.length)-1)),B(f);for(let u=0;u<y;++u){const e=Math.pow(.99,u),r=Math.max(1-e,(u+1)/y);j(f,e,r),I(f,e,r)}}function I(n,f,u){for(let e=1,r=n.length;e<r;++e){const m=n[e];for(const b of m){let L=0,V=0;for(const{source:U,value:et}of b.targetLinks){let G=et*(b.layer-U.layer);L+=N(U,b)*G,V+=G}if(!(V>0))continue;let W=(L/V-b.y0)*f;b.y0+=W,b.y1+=W,z(b)}a===void 0&&m.sort(Q),C(m,u)}}function j(n,f,u){for(let e=n.length,r=e-2;r>=0;--r){const m=n[r];for(const b of m){let L=0,V=0;for(const{target:U,value:et}of b.sourceLinks){let G=et*(U.layer-b.layer);L+=E(b,U)*G,V+=G}if(!(V>0))continue;let W=(L/V-b.y0)*f;b.y0+=W,b.y1+=W,z(b)}a===void 0&&m.sort(Q),C(m,u)}}function C(n,f){const u=n.length>>1,e=n[u];R(n,e.y0-p,u-1,f),O(n,e.y1+p,u+1,f),R(n,l,n.length-1,f),O(n,i,0,f)}function O(n,f,u,e){for(;u<n.length;++u){const r=n[u],m=(f-r.y0)*e;m>1e-6&&(r.y0+=m,r.y1+=m),f=r.y1+p}}function R(n,f,u,e){for(;u>=0;--u){const r=n[u],m=(r.y1-f)*e;m>1e-6&&(r.y0-=m,r.y1-=m),f=r.y0-p}}function z({sourceLinks:n,targetLinks:f}){if(c===void 0){for(const{source:{sourceLinks:u}}of f)u.sort(ht);for(const{target:{targetLinks:u}}of n)u.sort(ut)}}function S(n){if(c===void 0)for(const{sourceLinks:f,targetLinks:u}of n)f.sort(ht),u.sort(ut)}function N(n,f){let u=n.y0-(n.sourceLinks.length-1)*p/2;for(const{target:e,width:r}of n.sourceLinks){if(e===f)break;u+=r+p}for(const{source:e,width:r}of f.targetLinks){if(e===n)break;u-=r}return u}function E(n,f){let u=f.y0-(f.targetLinks.length-1)*p/2;for(const{source:e,width:r}of f.targetLinks){if(e===n)break;u+=r+p}for(const{target:e,width:r}of n.sourceLinks){if(e===f)break;u-=r}return u}return v}var rt=Math.PI,st=2*rt,F=1e-6,Rt=st-F;function ot(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function kt(){return new ot}ot.prototype=kt.prototype={constructor:ot,moveTo:function(t,i){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+i)},closePath:function(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,i){this._+="L"+(this._x1=+t)+","+(this._y1=+i)},quadraticCurveTo:function(t,i,s,l){this._+="Q"+ +t+","+ +i+","+(this._x1=+s)+","+(this._y1=+l)},bezierCurveTo:function(t,i,s,l,h,d){this._+="C"+ +t+","+ +i+","+ +s+","+ +l+","+(this._x1=+h)+","+(this._y1=+d)},arcTo:function(t,i,s,l,h){t=+t,i=+i,s=+s,l=+l,h=+h;var d=this._x1,p=this._y1,k=s-t,o=l-i,a=d-t,c=p-i,_=a*a+c*c;if(h<0)throw new Error("negative radius: "+h);if(this._x1===null)this._+="M"+(this._x1=t)+","+(this._y1=i);else if(_>F)if(!(Math.abs(c*k-o*a)>F)||!h)this._+="L"+(this._x1=t)+","+(this._y1=i);else{var x=s-d,y=l-p,v=k*k+o*o,T=x*x+y*y,A=Math.sqrt(v),M=Math.sqrt(_),P=h*Math.tan((rt-Math.acos((v+_-T)/(2*A*M)))/2),D=P/M,B=P/A;Math.abs(D-1)>F&&(this._+="L"+(t+D*a)+","+(i+D*c)),this._+="A"+h+","+h+",0,0,"+ +(c*x>a*y)+","+(this._x1=t+B*k)+","+(this._y1=i+B*o)}},arc:function(t,i,s,l,h,d){t=+t,i=+i,s=+s,d=!!d;var p=s*Math.cos(l),k=s*Math.sin(l),o=t+p,a=i+k,c=1^d,_=d?l-h:h-l;if(s<0)throw new Error("negative radius: "+s);this._x1===null?this._+="M"+o+","+a:(Math.abs(this._x1-o)>F||Math.abs(this._y1-a)>F)&&(this._+="L"+o+","+a),s&&(_<0&&(_=_%st+st),_>Rt?this._+="A"+s+","+s+",0,1,"+c+","+(t-p)+","+(i-k)+"A"+s+","+s+",0,1,"+c+","+(this._x1=o)+","+(this._y1=a):_>F&&(this._+="A"+s+","+s+",0,"+ +(_>=rt)+","+c+","+(this._x1=t+s*Math.cos(h))+","+(this._y1=i+s*Math.sin(h))))},rect:function(t,i,s,l){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+i)+"h"+ +s+"v"+ +l+"h"+-s+"Z"},toString:function(){return this._}};function dt(t){return function(){return t}}function Vt(t){return t[0]}function Ft(t){return t[1]}var Wt=Array.prototype.slice;function Ut(t){return t.source}function Gt(t){return t.target}function Yt(t){var i=Ut,s=Gt,l=Vt,h=Ft,d=null;function p(){var k,o=Wt.call(arguments),a=i.apply(this,o),c=s.apply(this,o);if(d||(d=k=kt()),t(d,+l.apply(this,(o[0]=a,o)),+h.apply(this,o),+l.apply(this,(o[0]=c,o)),+h.apply(this,o)),k)return d=null,k+""||null}return p.source=function(k){return arguments.length?(i=k,p):i},p.target=function(k){return arguments.length?(s=k,p):s},p.x=function(k){return arguments.length?(l=typeof k=="function"?k:dt(+k),p):l},p.y=function(k){return arguments.length?(h=typeof k=="function"?k:dt(+k),p):h},p.context=function(k){return arguments.length?(d=k==null?null:k,p):d},p}function qt(t,i,s,l,h){t.moveTo(i,s),t.bezierCurveTo(i=(i+l)/2,s,i,h,l,h)}function Ht(){return Yt(qt)}function Xt(t){return[t.source.x1,t.y0]}function Qt(t){return[t.target.x0,t.y1]}function Kt(){return Ht().source(Xt).target(Qt)}var at=function(){var t=g(function(k,o,a,c){for(a=a||{},c=k.length;c--;a[k[c]]=o);return a},"o"),i=[1,9],s=[1,10],l=[1,5,10,12],h={trace:g(function(){},"trace"),yy:{},symbols_:{error:2,start:3,SANKEY:4,NEWLINE:5,csv:6,opt_eof:7,record:8,csv_tail:9,EOF:10,"field[source]":11,COMMA:12,"field[target]":13,"field[value]":14,field:15,escaped:16,non_escaped:17,DQUOTE:18,ESCAPED_TEXT:19,NON_ESCAPED_TEXT:20,$accept:0,$end:1},terminals_:{2:"error",4:"SANKEY",5:"NEWLINE",10:"EOF",11:"field[source]",12:"COMMA",13:"field[target]",14:"field[value]",18:"DQUOTE",19:"ESCAPED_TEXT",20:"NON_ESCAPED_TEXT"},productions_:[0,[3,4],[6,2],[9,2],[9,0],[7,1],[7,0],[8,5],[15,1],[15,1],[16,3],[17,1]],performAction:g(function(o,a,c,_,x,y,v){var T=y.length-1;switch(x){case 7:const A=_.findOrCreateNode(y[T-4].trim().replaceAll('""','"')),M=_.findOrCreateNode(y[T-2].trim().replaceAll('""','"')),P=parseFloat(y[T].trim());_.addLink(A,M,P);break;case 8:case 9:case 11:this.$=y[T];break;case 10:this.$=y[T-1];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{6:4,8:5,15:6,16:7,17:8,18:i,20:s},{1:[2,6],7:11,10:[1,12]},t(s,[2,4],{9:13,5:[1,14]}),{12:[1,15]},t(l,[2,8]),t(l,[2,9]),{19:[1,16]},t(l,[2,11]),{1:[2,1]},{1:[2,5]},t(s,[2,2]),{6:17,8:5,15:6,16:7,17:8,18:i,20:s},{15:18,16:7,17:8,18:i,20:s},{18:[1,19]},t(s,[2,3]),{12:[1,20]},t(l,[2,10]),{15:21,16:7,17:8,18:i,20:s},t([1,5,10],[2,7])],defaultActions:{11:[2,1],12:[2,5]},parseError:g(function(o,a){if(a.recoverable)this.trace(o);else{var c=new Error(o);throw c.hash=a,c}},"parseError"),parse:g(function(o){var a=this,c=[0],_=[],x=[null],y=[],v=this.table,T="",A=0,M=0,P=2,D=1,B=y.slice.call(arguments,1),w=Object.create(this.lexer),I={yy:{}};for(var j in this.yy)Object.prototype.hasOwnProperty.call(this.yy,j)&&(I.yy[j]=this.yy[j]);w.setInput(o,I.yy),I.yy.lexer=w,I.yy.parser=this,typeof w.yylloc=="undefined"&&(w.yylloc={});var C=w.yylloc;y.push(C);var O=w.options&&w.options.ranges;typeof I.yy.parseError=="function"?this.parseError=I.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function R(L){c.length=c.length-2*L,x.length=x.length-L,y.length=y.length-L}g(R,"popStack");function z(){var L;return L=_.pop()||w.lex()||D,typeof L!="number"&&(L instanceof Array&&(_=L,L=_.pop()),L=a.symbols_[L]||L),L}g(z,"lex");for(var S,N,E,n,f={},u,e,r,m;;){if(N=c[c.length-1],this.defaultActions[N]?E=this.defaultActions[N]:((S===null||typeof S=="undefined")&&(S=z()),E=v[N]&&v[N][S]),typeof E=="undefined"||!E.length||!E[0]){var b="";m=[];for(u in v[N])this.terminals_[u]&&u>P&&m.push("'"+this.terminals_[u]+"'");w.showPosition?b="Parse error on line "+(A+1)+`:
`+w.showPosition()+`
Expecting `+m.join(", ")+", got '"+(this.terminals_[S]||S)+"'":b="Parse error on line "+(A+1)+": Unexpected "+(S==D?"end of input":"'"+(this.terminals_[S]||S)+"'"),this.parseError(b,{text:w.match,token:this.terminals_[S]||S,line:w.yylineno,loc:C,expected:m})}if(E[0]instanceof Array&&E.length>1)throw new Error("Parse Error: multiple actions possible at state: "+N+", token: "+S);switch(E[0]){case 1:c.push(S),x.push(w.yytext),y.push(w.yylloc),c.push(E[1]),S=null,M=w.yyleng,T=w.yytext,A=w.yylineno,C=w.yylloc;break;case 2:if(e=this.productions_[E[1]][1],f.$=x[x.length-e],f._$={first_line:y[y.length-(e||1)].first_line,last_line:y[y.length-1].last_line,first_column:y[y.length-(e||1)].first_column,last_column:y[y.length-1].last_column},O&&(f._$.range=[y[y.length-(e||1)].range[0],y[y.length-1].range[1]]),n=this.performAction.apply(f,[T,M,A,I.yy,E[1],x,y].concat(B)),typeof n!="undefined")return n;e&&(c=c.slice(0,-1*e*2),x=x.slice(0,-1*e),y=y.slice(0,-1*e)),c.push(this.productions_[E[1]][0]),x.push(f.$),y.push(f._$),r=v[c[c.length-2]][c[c.length-1]],c.push(r);break;case 3:return!0}}return!0},"parse")},d=function(){var k={EOF:1,parseError:g(function(a,c){if(this.yy.parser)this.yy.parser.parseError(a,c);else throw new Error(a)},"parseError"),setInput:g(function(o,a){return this.yy=a||this.yy||{},this._input=o,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:g(function(){var o=this._input[0];this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o;var a=o.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},"input"),unput:g(function(o){var a=o.length,c=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a),this.offset-=a;var _=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var x=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===_.length?this.yylloc.first_column:0)+_[_.length-c.length].length-c[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[x[0],x[0]+this.yyleng-a]),this.yyleng=this.yytext.length,this},"unput"),more:g(function(){return this._more=!0,this},"more"),reject:g(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:g(function(o){this.unput(this.match.slice(o))},"less"),pastInput:g(function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:g(function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:g(function(){var o=this.pastInput(),a=new Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+a+"^"},"showPosition"),test_match:g(function(o,a){var c,_,x;if(this.options.backtrack_lexer&&(x={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(x.yylloc.range=this.yylloc.range.slice(0))),_=o[0].match(/(?:\r\n?|\n).*/g),_&&(this.yylineno+=_.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:_?_[_.length-1].length-_[_.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+o[0].length},this.yytext+=o[0],this.match+=o[0],this.matches=o,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(o[0].length),this.matched+=o[0],c=this.performAction.call(this,this.yy,this,a,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),c)return c;if(this._backtrack){for(var y in x)this[y]=x[y];return!1}return!1},"test_match"),next:g(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var o,a,c,_;this._more||(this.yytext="",this.match="");for(var x=this._currentRules(),y=0;y<x.length;y++)if(c=this._input.match(this.rules[x[y]]),c&&(!a||c[0].length>a[0].length)){if(a=c,_=y,this.options.backtrack_lexer){if(o=this.test_match(c,x[y]),o!==!1)return o;if(this._backtrack){a=!1;continue}else return!1}else if(!this.options.flex)break}return a?(o=this.test_match(a,x[_]),o!==!1?o:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:g(function(){var a=this.next();return a||this.lex()},"lex"),begin:g(function(a){this.conditionStack.push(a)},"begin"),popState:g(function(){var a=this.conditionStack.length-1;return a>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:g(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:g(function(a){return a=this.conditionStack.length-1-Math.abs(a||0),a>=0?this.conditionStack[a]:"INITIAL"},"topState"),pushState:g(function(a){this.begin(a)},"pushState"),stateStackSize:g(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:g(function(a,c,_,x){switch(_){case 0:return this.pushState("csv"),4;case 1:return 10;case 2:return 5;case 3:return 12;case 4:return this.pushState("escaped_text"),18;case 5:return 20;case 6:return this.popState("escaped_text"),18;case 7:return 19}},"anonymous"),rules:[/^(?:sankey-beta\b)/i,/^(?:$)/i,/^(?:((\u000D\u000A)|(\u000A)))/i,/^(?:(\u002C))/i,/^(?:(\u0022))/i,/^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i,/^(?:(\u0022)(?!(\u0022)))/i,/^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i],conditions:{csv:{rules:[1,2,3,4,5,6,7],inclusive:!1},escaped_text:{rules:[6,7],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7],inclusive:!0}}};return k}();h.lexer=d;function p(){this.yy={}}return g(p,"Parser"),p.prototype=h,h.Parser=p,new p}();at.parser=at;var K=at,J=[],tt=[],Z=new Map,Zt=g(()=>{J=[],tt=[],Z=new Map,Lt()},"clear"),Y,Jt=(Y=class{constructor(i,s,l=0){this.source=i,this.target=s,this.value=l}},g(Y,"SankeyLink"),Y),te=g((t,i,s)=>{J.push(new Jt(t,i,s))},"addLink"),q,ee=(q=class{constructor(i){this.ID=i}},g(q,"SankeyNode"),q),ne=g(t=>{t=Et.sanitizeText(t,lt());let i=Z.get(t);return i===void 0&&(i=new ee(t),Z.set(t,i),tt.push(i)),i},"findOrCreateNode"),ie=g(()=>tt,"getNodes"),re=g(()=>J,"getLinks"),se=g(()=>({nodes:tt.map(t=>({id:t.ID})),links:J.map(t=>({source:t.source.ID,target:t.target.ID,value:t.value}))}),"getGraph"),oe={nodesMap:Z,getConfig:g(()=>lt().sankey,"getConfig"),getNodes:ie,getLinks:re,getGraph:se,addLink:te,findOrCreateNode:ne,getAccTitle:_t,setAccTitle:xt,getAccDescription:vt,setAccDescription:bt,getDiagramTitle:wt,setDiagramTitle:St,clear:Zt},$,pt=($=class{static next(i){return new $(i+ ++$.count)}constructor(i){this.id=i,this.href=`#${i}`}toString(){return"url("+this.href+")"}},g($,"Uid"),$.count=0,$),ae={left:Ct,right:Ot,center:Dt,justify:mt},le=g(function(t,i,s,l){var R,z,S,N,E,n,f,u;const{securityLevel:h,sankey:d}=lt(),p=At.sankey;let k;h==="sandbox"&&(k=H("#i"+i));const o=h==="sandbox"?H(k.nodes()[0].contentDocument.body):H("body"),a=h==="sandbox"?o.select(`[id="${i}"]`):H(`[id="${i}"]`),c=(R=d==null?void 0:d.width)!=null?R:p.width,_=(z=d==null?void 0:d.height)!=null?z:p.width,x=(S=d==null?void 0:d.useMaxWidth)!=null?S:p.useMaxWidth,y=(N=d==null?void 0:d.nodeAlignment)!=null?N:p.nodeAlignment,v=(E=d==null?void 0:d.prefix)!=null?E:p.prefix,T=(n=d==null?void 0:d.suffix)!=null?n:p.suffix,A=(f=d==null?void 0:d.showValues)!=null?f:p.showValues,M=l.db.getGraph(),P=ae[y];Bt().nodeId(e=>e.id).nodeWidth(10).nodePadding(10+(A?15:0)).nodeAlign(P).extent([[0,0],[c,_]])(M);const w=Mt(It);a.append("g").attr("class","nodes").selectAll(".node").data(M.nodes).join("g").attr("class","node").attr("id",e=>(e.uid=pt.next("node-")).id).attr("transform",function(e){return"translate("+e.x0+","+e.y0+")"}).attr("x",e=>e.x0).attr("y",e=>e.y0).append("rect").attr("height",e=>e.y1-e.y0).attr("width",e=>e.x1-e.x0).attr("fill",e=>w(e.id));const I=g(({id:e,value:r})=>A?`${e}
${v}${Math.round(r*100)/100}${T}`:e,"getText");a.append("g").attr("class","node-labels").attr("font-family","sans-serif").attr("font-size",14).selectAll("text").data(M.nodes).join("text").attr("x",e=>e.x0<c/2?e.x1+6:e.x0-6).attr("y",e=>(e.y1+e.y0)/2).attr("dy",`${A?"0":"0.35"}em`).attr("text-anchor",e=>e.x0<c/2?"start":"end").text(I);const j=a.append("g").attr("class","links").attr("fill","none").attr("stroke-opacity",.5).selectAll(".link").data(M.links).join("g").attr("class","link").style("mix-blend-mode","multiply"),C=(u=d==null?void 0:d.linkColor)!=null?u:"gradient";if(C==="gradient"){const e=j.append("linearGradient").attr("id",r=>(r.uid=pt.next("linearGradient-")).id).attr("gradientUnits","userSpaceOnUse").attr("x1",r=>r.source.x1).attr("x2",r=>r.target.x0);e.append("stop").attr("offset","0%").attr("stop-color",r=>w(r.source.id)),e.append("stop").attr("offset","100%").attr("stop-color",r=>w(r.target.id))}let O;switch(C){case"gradient":O=g(e=>e.uid,"coloring");break;case"source":O=g(e=>w(e.source.id),"coloring");break;case"target":O=g(e=>w(e.target.id),"coloring");break;default:O=C}j.append("path").attr("d",Kt()).attr("stroke",O).attr("stroke-width",e=>Math.max(1,e.width)),Tt(void 0,a,0,x)},"draw"),ce={draw:le},ue=g(t=>t.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g,"").replaceAll(/([\n\r])+/g,`
`).trim(),"prepareTextForParsing"),he=K.parse.bind(K);K.parse=t=>he(ue(t));var we={parser:K,db:oe,renderer:ce};export{we as diagram};
