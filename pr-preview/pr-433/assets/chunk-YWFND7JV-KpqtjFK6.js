var m=(l,t,c)=>new Promise((e,s)=>{var r=n=>{try{i(c.next(n))}catch(o){s(o)}},a=n=>{try{i(c.throw(n))}catch(o){s(o)}},i=n=>n.done?e(n.value):Promise.resolve(n.value).then(r,a);i((c=c.apply(l,t)).next())});import{_ as y,j as k,l as _,d as D,A as P,B as lt,C as K,D as nt,i as V}from"./Using existing ones-BRfI6yma.js";function U(l,t){t&&l.attr("style",t)}y(U,"applyStyle");function tt(l){const t=k(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),c=t.append("xhtml:div"),e=l.label,s=l.isNode?"nodeLabel":"edgeLabel",r=c.append("span");return r.html(e),U(r,l.labelStyle),r.attr("class",s),U(c,l.labelStyle),c.style("display","inline-block"),c.style("white-space","nowrap"),c.attr("xmlns","http://www.w3.org/1999/xhtml"),t.node()}y(tt,"addHtmlLabel");var ht=y((l,t,c,e)=>{let s=l||"";if(typeof s=="object"&&(s=s[0]),P(D().flowchart.htmlLabels)){s=s.replace(/\\n|\n/g,"<br />"),_.debug("vertexText"+s);const r={isNode:e,label:lt(K(s)),labelStyle:t.replace("fill:","color:")};return tt(r)}else{const r=document.createElementNS("http://www.w3.org/2000/svg","text");r.setAttribute("style",t.replace("color:","fill:"));let a=[];typeof s=="string"?a=s.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(s)?a=s:a=[];for(const i of a){const n=document.createElementNS("http://www.w3.org/2000/svg","tspan");n.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),n.setAttribute("dy","1em"),n.setAttribute("x","0"),c?n.setAttribute("class","title-row"):n.setAttribute("class","row"),n.textContent=i.trim(),r.appendChild(n)}return r}},"createLabel"),H=ht,B=y((l,t,c,e)=>m(void 0,null,function*(){const s=D();let r;const a=t.useHtmlLabels||P(s.flowchart.htmlLabels);c?r=c:r="node default";const i=l.insert("g").attr("class",r).attr("id",t.domId||t.id),n=i.insert("g").attr("class","label").attr("style",t.labelStyle);let o;t.labelText===void 0?o="":o=typeof t.labelText=="string"?t.labelText:t.labelText[0];const h=n.node();let x;t.labelType==="markdown"?x=nt(n,V(K(o),s),{useHtmlLabels:a,width:t.width||s.flowchart.wrappingWidth,classes:"markdown-node-label"},s):x=h.appendChild(H(V(K(o),s),t.labelStyle,!1,e));let f=x.getBBox();const g=t.padding/2;if(P(s.flowchart.htmlLabels)){const d=x.children[0],S=k(x),p=d.getElementsByTagName("img");if(p){const T=o.replace(/<img[^>]*>/g,"").trim()==="";yield Promise.all([...p].map(L=>new Promise(A=>{function C(){if(L.style.display="flex",L.style.flexDirection="column",T){const R=s.fontSize?s.fontSize:window.getComputedStyle(document.body).fontSize,O=parseInt(R,10)*5+"px";L.style.minWidth=O,L.style.maxWidth=O}else L.style.width="100%";A(L)}y(C,"setupImage"),setTimeout(()=>{L.complete&&C()}),L.addEventListener("error",C),L.addEventListener("load",C)})))}f=d.getBoundingClientRect(),S.attr("width",f.width),S.attr("height",f.height)}return a?n.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"):n.attr("transform","translate(0, "+-f.height/2+")"),t.centerLabel&&n.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"),n.insert("rect",":first-child"),{shapeSvg:i,bbox:f,halfPadding:g,label:n}}),"labelHelper"),w=y((l,t)=>{const c=t.node().getBBox();l.width=c.width,l.height=c.height},"updateNodeBounds");function M(l,t,c,e){return l.insert("polygon",":first-child").attr("points",e.map(function(s){return s.x+","+s.y}).join(" ")).attr("class","label-container").attr("transform","translate("+-t/2+","+c/2+")")}y(M,"insertPolygonShape");var ot=y(l=>{const t=new Set;for(const c of l)switch(c){case"x":t.add("right"),t.add("left");break;case"y":t.add("up"),t.add("down");break;default:t.add(c);break}return t},"expandAndDeduplicateDirections"),yt=y((l,t,c)=>{const e=ot(l),s=2,r=t.height+2*c.padding,a=r/s,i=t.width+2*a+c.padding,n=c.padding/2;return e.has("right")&&e.has("left")&&e.has("up")&&e.has("down")?[{x:0,y:0},{x:a,y:0},{x:i/2,y:2*n},{x:i-a,y:0},{x:i,y:0},{x:i,y:-r/3},{x:i+2*n,y:-r/2},{x:i,y:-2*r/3},{x:i,y:-r},{x:i-a,y:-r},{x:i/2,y:-r-2*n},{x:a,y:-r},{x:0,y:-r},{x:0,y:-2*r/3},{x:-2*n,y:-r/2},{x:0,y:-r/3}]:e.has("right")&&e.has("left")&&e.has("up")?[{x:a,y:0},{x:i-a,y:0},{x:i,y:-r/2},{x:i-a,y:-r},{x:a,y:-r},{x:0,y:-r/2}]:e.has("right")&&e.has("left")&&e.has("down")?[{x:0,y:0},{x:a,y:-r},{x:i-a,y:-r},{x:i,y:0}]:e.has("right")&&e.has("up")&&e.has("down")?[{x:0,y:0},{x:i,y:-a},{x:i,y:-r+a},{x:0,y:-r}]:e.has("left")&&e.has("up")&&e.has("down")?[{x:i,y:0},{x:0,y:-a},{x:0,y:-r+a},{x:i,y:-r}]:e.has("right")&&e.has("left")?[{x:a,y:0},{x:a,y:-n},{x:i-a,y:-n},{x:i-a,y:0},{x:i,y:-r/2},{x:i-a,y:-r},{x:i-a,y:-r+n},{x:a,y:-r+n},{x:a,y:-r},{x:0,y:-r/2}]:e.has("up")&&e.has("down")?[{x:i/2,y:0},{x:0,y:-n},{x:a,y:-n},{x:a,y:-r+n},{x:0,y:-r+n},{x:i/2,y:-r},{x:i,y:-r+n},{x:i-a,y:-r+n},{x:i-a,y:-n},{x:i,y:-n}]:e.has("right")&&e.has("up")?[{x:0,y:0},{x:i,y:-a},{x:0,y:-r}]:e.has("right")&&e.has("down")?[{x:0,y:0},{x:i,y:0},{x:0,y:-r}]:e.has("left")&&e.has("up")?[{x:i,y:0},{x:0,y:-a},{x:i,y:-r}]:e.has("left")&&e.has("down")?[{x:i,y:0},{x:0,y:0},{x:i,y:-r}]:e.has("right")?[{x:a,y:-n},{x:a,y:-n},{x:i-a,y:-n},{x:i-a,y:0},{x:i,y:-r/2},{x:i-a,y:-r},{x:i-a,y:-r+n},{x:a,y:-r+n},{x:a,y:-r+n}]:e.has("left")?[{x:a,y:0},{x:a,y:-n},{x:i-a,y:-n},{x:i-a,y:-r+n},{x:a,y:-r+n},{x:a,y:-r},{x:0,y:-r/2}]:e.has("up")?[{x:a,y:-n},{x:a,y:-r+n},{x:0,y:-r+n},{x:i/2,y:-r},{x:i,y:-r+n},{x:i-a,y:-r+n},{x:i-a,y:-n}]:e.has("down")?[{x:i/2,y:0},{x:0,y:-n},{x:a,y:-n},{x:a,y:-r+n},{x:i-a,y:-r+n},{x:i-a,y:-n},{x:i,y:-n}]:[{x:0,y:0}]},"getArrowPoints");function rt(l,t){return l.intersect(t)}y(rt,"intersectNode");var xt=rt;function at(l,t,c,e){var s=l.x,r=l.y,a=s-e.x,i=r-e.y,n=Math.sqrt(t*t*i*i+c*c*a*a),o=Math.abs(t*c*a/n);e.x<s&&(o=-o);var h=Math.abs(t*c*i/n);return e.y<r&&(h=-h),{x:s+o,y:r+h}}y(at,"intersectEllipse");var et=at;function st(l,t,c){return et(l,t,t,c)}y(st,"intersectCircle");var gt=st;function it(l,t,c,e){var s,r,a,i,n,o,h,x,f,g,d,S,p,T,L;if(s=t.y-l.y,a=l.x-t.x,n=t.x*l.y-l.x*t.y,f=s*c.x+a*c.y+n,g=s*e.x+a*e.y+n,!(f!==0&&g!==0&&Y(f,g))&&(r=e.y-c.y,i=c.x-e.x,o=e.x*c.y-c.x*e.y,h=r*l.x+i*l.y+o,x=r*t.x+i*t.y+o,!(h!==0&&x!==0&&Y(h,x))&&(d=s*i-r*a,d!==0)))return S=Math.abs(d/2),p=a*o-i*n,T=p<0?(p-S)/d:(p+S)/d,p=r*n-s*o,L=p<0?(p-S)/d:(p+S)/d,{x:T,y:L}}y(it,"intersectLine");function Y(l,t){return l*t>0}y(Y,"sameSign");var ft=it,dt=ct;function ct(l,t,c){var e=l.x,s=l.y,r=[],a=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY;typeof t.forEach=="function"?t.forEach(function(d){a=Math.min(a,d.x),i=Math.min(i,d.y)}):(a=Math.min(a,t.x),i=Math.min(i,t.y));for(var n=e-l.width/2-a,o=s-l.height/2-i,h=0;h<t.length;h++){var x=t[h],f=t[h<t.length-1?h+1:0],g=ft(l,c,{x:n+x.x,y:o+x.y},{x:n+f.x,y:o+f.y});g&&r.push(g)}return r.length?(r.length>1&&r.sort(function(d,S){var p=d.x-c.x,T=d.y-c.y,L=Math.sqrt(p*p+T*T),A=S.x-c.x,C=S.y-c.y,R=Math.sqrt(A*A+C*C);return L<R?-1:L===R?0:1}),r[0]):l}y(ct,"intersectPolygon");var pt=y((l,t)=>{var c=l.x,e=l.y,s=t.x-c,r=t.y-e,a=l.width/2,i=l.height/2,n,o;return Math.abs(r)*a>Math.abs(s)*i?(r<0&&(i=-i),n=r===0?0:i*s/r,o=i):(s<0&&(a=-a),n=a,o=s===0?0:a*r/s),{x:c+n,y:e+o}},"intersectRect"),ut=pt,u={node:xt,circle:gt,ellipse:et,polygon:dt,rect:ut},wt=y((l,t)=>m(void 0,null,function*(){t.useHtmlLabels||D().flowchart.htmlLabels||(t.centerLabel=!0);const{shapeSvg:e,bbox:s,halfPadding:r}=yield B(l,t,"node "+t.classes,!0);_.info("Classes = ",t.classes);const a=e.insert("rect",":first-child");return a.attr("rx",t.rx).attr("ry",t.ry).attr("x",-s.width/2-r).attr("y",-s.height/2-r).attr("width",s.width+t.padding).attr("height",s.height+t.padding),w(t,a),t.intersect=function(i){return u.rect(t,i)},e}),"note"),bt=wt,G=y(l=>l?" "+l:"","formatClass"),E=y((l,t)=>`${t||"node default"}${G(l.classes)} ${G(l.class)}`,"getClassesFromNode"),Q=y((l,t)=>m(void 0,null,function*(){const{shapeSvg:c,bbox:e}=yield B(l,t,E(t,void 0),!0),s=e.width+t.padding,r=e.height+t.padding,a=s+r,i=[{x:a/2,y:0},{x:a,y:-a/2},{x:a/2,y:-a},{x:0,y:-a/2}];_.info("Question main (Circle)");const n=M(c,a,a,i);return n.attr("style",t.style),w(t,n),t.intersect=function(o){return _.warn("Intersect called"),u.polygon(t,i,o)},c}),"question"),vt=y((l,t)=>{const c=l.insert("g").attr("class","node default").attr("id",t.domId||t.id),e=28,s=[{x:0,y:e/2},{x:e/2,y:0},{x:0,y:-e/2},{x:-e/2,y:0}];return c.insert("polygon",":first-child").attr("points",s.map(function(a){return a.x+","+a.y}).join(" ")).attr("class","state-start").attr("r",7).attr("width",28).attr("height",28),t.width=28,t.height=28,t.intersect=function(a){return u.circle(t,14,a)},c},"choice"),mt=y((l,t)=>m(void 0,null,function*(){const{shapeSvg:c,bbox:e}=yield B(l,t,E(t,void 0),!0),s=4,r=e.height+t.padding,a=r/s,i=e.width+2*a+t.padding,n=[{x:a,y:0},{x:i-a,y:0},{x:i,y:-r/2},{x:i-a,y:-r},{x:a,y:-r},{x:0,y:-r/2}],o=M(c,i,r,n);return o.attr("style",t.style),w(t,o),t.intersect=function(h){return u.polygon(t,n,h)},c}),"hexagon"),St=y((l,t)=>m(void 0,null,function*(){const{shapeSvg:c,bbox:e}=yield B(l,t,void 0,!0),s=2,r=e.height+2*t.padding,a=r/s,i=e.width+2*a+t.padding,n=yt(t.directions,e,t),o=M(c,i,r,n);return o.attr("style",t.style),w(t,o),t.intersect=function(h){return u.polygon(t,n,h)},c}),"block_arrow"),Lt=y((l,t)=>m(void 0,null,function*(){const{shapeSvg:c,bbox:e}=yield B(l,t,E(t,void 0),!0),s=e.width+t.padding,r=e.height+t.padding,a=[{x:-r/2,y:0},{x:s,y:0},{x:s,y:-r},{x:-r/2,y:-r},{x:0,y:-r/2}];return M(c,s,r,a).attr("style",t.style),t.width=s+r,t.height=r,t.intersect=function(n){return u.polygon(t,a,n)},c}),"rect_left_inv_arrow"),_t=y((l,t)=>m(void 0,null,function*(){const{shapeSvg:c,bbox:e}=yield B(l,t,E(t),!0),s=e.width+t.padding,r=e.height+t.padding,a=[{x:-2*r/6,y:0},{x:s-r/6,y:0},{x:s+2*r/6,y:-r},{x:r/6,y:-r}],i=M(c,s,r,a);return i.attr("style",t.style),w(t,i),t.intersect=function(n){return u.polygon(t,a,n)},c}),"lean_right"),Bt=y((l,t)=>m(void 0,null,function*(){const{shapeSvg:c,bbox:e}=yield B(l,t,E(t,void 0),!0),s=e.width+t.padding,r=e.height+t.padding,a=[{x:2*r/6,y:0},{x:s+r/6,y:0},{x:s-2*r/6,y:-r},{x:-r/6,y:-r}],i=M(c,s,r,a);return i.attr("style",t.style),w(t,i),t.intersect=function(n){return u.polygon(t,a,n)},c}),"lean_left"),Ct=y((l,t)=>m(void 0,null,function*(){const{shapeSvg:c,bbox:e}=yield B(l,t,E(t,void 0),!0),s=e.width+t.padding,r=e.height+t.padding,a=[{x:-2*r/6,y:0},{x:s+2*r/6,y:0},{x:s-r/6,y:-r},{x:r/6,y:-r}],i=M(c,s,r,a);return i.attr("style",t.style),w(t,i),t.intersect=function(n){return u.polygon(t,a,n)},c}),"trapezoid"),Tt=y((l,t)=>m(void 0,null,function*(){const{shapeSvg:c,bbox:e}=yield B(l,t,E(t,void 0),!0),s=e.width+t.padding,r=e.height+t.padding,a=[{x:r/6,y:0},{x:s-r/6,y:0},{x:s+2*r/6,y:-r},{x:-2*r/6,y:-r}],i=M(c,s,r,a);return i.attr("style",t.style),w(t,i),t.intersect=function(n){return u.polygon(t,a,n)},c}),"inv_trapezoid"),kt=y((l,t)=>m(void 0,null,function*(){const{shapeSvg:c,bbox:e}=yield B(l,t,E(t,void 0),!0),s=e.width+t.padding,r=e.height+t.padding,a=[{x:0,y:0},{x:s+r/2,y:0},{x:s,y:-r/2},{x:s+r/2,y:-r},{x:0,y:-r}],i=M(c,s,r,a);return i.attr("style",t.style),w(t,i),t.intersect=function(n){return u.polygon(t,a,n)},c}),"rect_right_inv_arrow"),Nt=y((l,t)=>m(void 0,null,function*(){const{shapeSvg:c,bbox:e}=yield B(l,t,E(t,void 0),!0),s=e.width+t.padding,r=s/2,a=r/(2.5+s/50),i=e.height+a+t.padding,n="M 0,"+a+" a "+r+","+a+" 0,0,0 "+s+" 0 a "+r+","+a+" 0,0,0 "+-s+" 0 l 0,"+i+" a "+r+","+a+" 0,0,0 "+s+" 0 l 0,"+-i,o=c.attr("label-offset-y",a).insert("path",":first-child").attr("style",t.style).attr("d",n).attr("transform","translate("+-s/2+","+-(i/2+a)+")");return w(t,o),t.intersect=function(h){const x=u.rect(t,h),f=x.x-t.x;if(r!=0&&(Math.abs(f)<t.width/2||Math.abs(f)==t.width/2&&Math.abs(x.y-t.y)>t.height/2-a)){let g=a*a*(1-f*f/(r*r));g!=0&&(g=Math.sqrt(g)),g=a-g,h.y-t.y>0&&(g=-g),x.y+=g}return x},c}),"cylinder"),It=y((l,t)=>m(void 0,null,function*(){const{shapeSvg:c,bbox:e,halfPadding:s}=yield B(l,t,"node "+t.classes+" "+t.class,!0),r=c.insert("rect",":first-child"),a=t.positioned?t.width:e.width+t.padding,i=t.positioned?t.height:e.height+t.padding,n=t.positioned?-a/2:-e.width/2-s,o=t.positioned?-i/2:-e.height/2-s;if(r.attr("class","basic label-container").attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",n).attr("y",o).attr("width",a).attr("height",i),t.props){const h=new Set(Object.keys(t.props));t.props.borders&&(W(r,t.props.borders,a,i),h.delete("borders")),h.forEach(x=>{_.warn(`Unknown node property ${x}`)})}return w(t,r),t.intersect=function(h){return u.rect(t,h)},c}),"rect"),Dt=y((l,t)=>m(void 0,null,function*(){const{shapeSvg:c,bbox:e,halfPadding:s}=yield B(l,t,"node "+t.classes,!0),r=c.insert("rect",":first-child"),a=t.positioned?t.width:e.width+t.padding,i=t.positioned?t.height:e.height+t.padding,n=t.positioned?-a/2:-e.width/2-s,o=t.positioned?-i/2:-e.height/2-s;if(r.attr("class","basic cluster composite label-container").attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",n).attr("y",o).attr("width",a).attr("height",i),t.props){const h=new Set(Object.keys(t.props));t.props.borders&&(W(r,t.props.borders,a,i),h.delete("borders")),h.forEach(x=>{_.warn(`Unknown node property ${x}`)})}return w(t,r),t.intersect=function(h){return u.rect(t,h)},c}),"composite"),Et=y((l,t)=>m(void 0,null,function*(){const{shapeSvg:c}=yield B(l,t,"label",!0);_.trace("Classes = ",t.class);const e=c.insert("rect",":first-child"),s=0,r=0;if(e.attr("width",s).attr("height",r),c.attr("class","label edgeLabel"),t.props){const a=new Set(Object.keys(t.props));t.props.borders&&(W(e,t.props.borders,s,r),a.delete("borders")),a.forEach(i=>{_.warn(`Unknown node property ${i}`)})}return w(t,e),t.intersect=function(a){return u.rect(t,a)},c}),"labelRect");function W(l,t,c,e){const s=[],r=y(i=>{s.push(i,0)},"addBorder"),a=y(i=>{s.push(0,i)},"skipBorder");t.includes("t")?(_.debug("add top border"),r(c)):a(c),t.includes("r")?(_.debug("add right border"),r(e)):a(e),t.includes("b")?(_.debug("add bottom border"),r(c)):a(c),t.includes("l")?(_.debug("add left border"),r(e)):a(e),l.attr("stroke-dasharray",s.join(" "))}y(W,"applyNodePropertyBorders");var Mt=y((l,t)=>{let c;t.classes?c="node "+t.classes:c="node default";const e=l.insert("g").attr("class",c).attr("id",t.domId||t.id),s=e.insert("rect",":first-child"),r=e.insert("line"),a=e.insert("g").attr("class","label"),i=t.labelText.flat?t.labelText.flat():t.labelText;let n="";typeof i=="object"?n=i[0]:n=i,_.info("Label text abc79",n,i,typeof i=="object");const o=a.node().appendChild(H(n,t.labelStyle,!0,!0));let h={width:0,height:0};if(P(D().flowchart.htmlLabels)){const S=o.children[0],p=k(o);h=S.getBoundingClientRect(),p.attr("width",h.width),p.attr("height",h.height)}_.info("Text 2",i);const x=i.slice(1,i.length);let f=o.getBBox();const g=a.node().appendChild(H(x.join?x.join("<br/>"):x,t.labelStyle,!0,!0));if(P(D().flowchart.htmlLabels)){const S=g.children[0],p=k(g);h=S.getBoundingClientRect(),p.attr("width",h.width),p.attr("height",h.height)}const d=t.padding/2;return k(g).attr("transform","translate( "+(h.width>f.width?0:(f.width-h.width)/2)+", "+(f.height+d+5)+")"),k(o).attr("transform","translate( "+(h.width<f.width?0:-(f.width-h.width)/2)+", 0)"),h=a.node().getBBox(),a.attr("transform","translate("+-h.width/2+", "+(-h.height/2-d+3)+")"),s.attr("class","outer title-state").attr("x",-h.width/2-d).attr("y",-h.height/2-d).attr("width",h.width+t.padding).attr("height",h.height+t.padding),r.attr("class","divider").attr("x1",-h.width/2-d).attr("x2",h.width/2+d).attr("y1",-h.height/2-d+f.height+d).attr("y2",-h.height/2-d+f.height+d),w(t,s),t.intersect=function(S){return u.rect(t,S)},e},"rectWithTitle"),At=y((l,t)=>m(void 0,null,function*(){const{shapeSvg:c,bbox:e}=yield B(l,t,E(t,void 0),!0),s=e.height+t.padding,r=e.width+s/4+t.padding,a=c.insert("rect",":first-child").attr("style",t.style).attr("rx",s/2).attr("ry",s/2).attr("x",-r/2).attr("y",-s/2).attr("width",r).attr("height",s);return w(t,a),t.intersect=function(i){return u.rect(t,i)},c}),"stadium"),jt=y((l,t)=>m(void 0,null,function*(){const{shapeSvg:c,bbox:e,halfPadding:s}=yield B(l,t,E(t,void 0),!0),r=c.insert("circle",":first-child");return r.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",e.width/2+s).attr("width",e.width+t.padding).attr("height",e.height+t.padding),_.info("Circle main"),w(t,r),t.intersect=function(a){return _.info("Circle intersect",t,e.width/2+s,a),u.circle(t,e.width/2+s,a)},c}),"circle"),Pt=y((l,t)=>m(void 0,null,function*(){const{shapeSvg:c,bbox:e,halfPadding:s}=yield B(l,t,E(t,void 0),!0),r=5,a=c.insert("g",":first-child"),i=a.insert("circle"),n=a.insert("circle");return a.attr("class",t.class),i.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",e.width/2+s+r).attr("width",e.width+t.padding+r*2).attr("height",e.height+t.padding+r*2),n.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",e.width/2+s).attr("width",e.width+t.padding).attr("height",e.height+t.padding),_.info("DoubleCircle main"),w(t,i),t.intersect=function(o){return _.info("DoubleCircle intersect",t,e.width/2+s+r,o),u.circle(t,e.width/2+s+r,o)},c}),"doublecircle"),Rt=y((l,t)=>m(void 0,null,function*(){const{shapeSvg:c,bbox:e}=yield B(l,t,E(t,void 0),!0),s=e.width+t.padding,r=e.height+t.padding,a=[{x:0,y:0},{x:s,y:0},{x:s,y:-r},{x:0,y:-r},{x:0,y:0},{x:-8,y:0},{x:s+8,y:0},{x:s+8,y:-r},{x:-8,y:-r},{x:-8,y:0}],i=M(c,s,r,a);return i.attr("style",t.style),w(t,i),t.intersect=function(n){return u.polygon(t,a,n)},c}),"subroutine"),Ht=y((l,t)=>{const c=l.insert("g").attr("class","node default").attr("id",t.domId||t.id),e=c.insert("circle",":first-child");return e.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),w(t,e),t.intersect=function(s){return u.circle(t,7,s)},c},"start"),q=y((l,t,c)=>{const e=l.insert("g").attr("class","node default").attr("id",t.domId||t.id);let s=70,r=10;c==="LR"&&(s=10,r=70);const a=e.append("rect").attr("x",-1*s/2).attr("y",-1*r/2).attr("width",s).attr("height",r).attr("class","fork-join");return w(t,a),t.height=t.height+t.padding/2,t.width=t.width+t.padding/2,t.intersect=function(i){return u.rect(t,i)},e},"forkJoin"),zt=y((l,t)=>{const c=l.insert("g").attr("class","node default").attr("id",t.domId||t.id),e=c.insert("circle",":first-child"),s=c.insert("circle",":first-child");return s.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),e.attr("class","state-end").attr("r",5).attr("width",10).attr("height",10),w(t,s),t.intersect=function(r){return u.circle(t,7,r)},c},"end"),Ft=y((l,t)=>{var J;const c=t.padding/2,e=4,s=8;let r;t.classes?r="node "+t.classes:r="node default";const a=l.insert("g").attr("class",r).attr("id",t.domId||t.id),i=a.insert("rect",":first-child"),n=a.insert("line"),o=a.insert("line");let h=0,x=e;const f=a.insert("g").attr("class","label");let g=0;const d=(J=t.classData.annotations)==null?void 0:J[0],S=t.classData.annotations[0]?"«"+t.classData.annotations[0]+"»":"",p=f.node().appendChild(H(S,t.labelStyle,!0,!0));let T=p.getBBox();if(P(D().flowchart.htmlLabels)){const b=p.children[0],v=k(p);T=b.getBoundingClientRect(),v.attr("width",T.width),v.attr("height",T.height)}t.classData.annotations[0]&&(x+=T.height+e,h+=T.width);let L=t.classData.label;t.classData.type!==void 0&&t.classData.type!==""&&(D().flowchart.htmlLabels?L+="&lt;"+t.classData.type+"&gt;":L+="<"+t.classData.type+">");const A=f.node().appendChild(H(L,t.labelStyle,!0,!0));k(A).attr("class","classTitle");let C=A.getBBox();if(P(D().flowchart.htmlLabels)){const b=A.children[0],v=k(A);C=b.getBoundingClientRect(),v.attr("width",C.width),v.attr("height",C.height)}x+=C.height+e,C.width>h&&(h=C.width);const R=[];t.classData.members.forEach(b=>{const v=b.getDisplayDetails();let N=v.displayText;D().flowchart.htmlLabels&&(N=N.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const j=f.node().appendChild(H(N,v.cssStyle?v.cssStyle:t.labelStyle,!0,!0));let I=j.getBBox();if(P(D().flowchart.htmlLabels)){const X=j.children[0],F=k(j);I=X.getBoundingClientRect(),F.attr("width",I.width),F.attr("height",I.height)}I.width>h&&(h=I.width),x+=I.height+e,R.push(j)}),x+=s;const $=[];if(t.classData.methods.forEach(b=>{const v=b.getDisplayDetails();let N=v.displayText;D().flowchart.htmlLabels&&(N=N.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const j=f.node().appendChild(H(N,v.cssStyle?v.cssStyle:t.labelStyle,!0,!0));let I=j.getBBox();if(P(D().flowchart.htmlLabels)){const X=j.children[0],F=k(j);I=X.getBoundingClientRect(),F.attr("width",I.width),F.attr("height",I.height)}I.width>h&&(h=I.width),x+=I.height+e,$.push(j)}),x+=s,d){let b=(h-T.width)/2;k(p).attr("transform","translate( "+(-1*h/2+b)+", "+-1*x/2+")"),g=T.height+e}let O=(h-C.width)/2;return k(A).attr("transform","translate( "+(-1*h/2+O)+", "+(-1*x/2+g)+")"),g+=C.height+e,n.attr("class","divider").attr("x1",-h/2-c).attr("x2",h/2+c).attr("y1",-x/2-c+s+g).attr("y2",-x/2-c+s+g),g+=s,R.forEach(b=>{var N;k(b).attr("transform","translate( "+-h/2+", "+(-1*x/2+g+s/2)+")");const v=b==null?void 0:b.getBBox();g+=((N=v==null?void 0:v.height)!=null?N:0)+e}),g+=s,o.attr("class","divider").attr("x1",-h/2-c).attr("x2",h/2+c).attr("y1",-x/2-c+s+g).attr("y2",-x/2-c+s+g),g+=s,$.forEach(b=>{var N;k(b).attr("transform","translate( "+-h/2+", "+(-1*x/2+g)+")");const v=b==null?void 0:b.getBBox();g+=((N=v==null?void 0:v.height)!=null?N:0)+e}),i.attr("style",t.style).attr("class","outer title-state").attr("x",-h/2-c).attr("y",-(x/2)-c).attr("width",h+t.padding).attr("height",x+t.padding),w(t,i),t.intersect=function(b){return u.rect(t,b)},a},"class_box"),Z={rhombus:Q,composite:Dt,question:Q,rect:It,labelRect:Et,rectWithTitle:Mt,choice:vt,circle:jt,doublecircle:Pt,stadium:At,hexagon:mt,block_arrow:St,rect_left_inv_arrow:Lt,lean_right:_t,lean_left:Bt,trapezoid:Ct,inv_trapezoid:Tt,rect_right_inv_arrow:kt,cylinder:Nt,start:Ht,end:zt,note:bt,subroutine:Rt,fork:q,join:q,class_box:Ft},z={},$t=y((l,t,c)=>m(void 0,null,function*(){let e,s;if(t.link){let r;D().securityLevel==="sandbox"?r="_top":t.linkTarget&&(r=t.linkTarget||"_blank"),e=l.insert("svg:a").attr("xlink:href",t.link).attr("target",r),s=yield Z[t.shape](e,t,c)}else s=yield Z[t.shape](l,t,c),e=s;return t.tooltip&&s.attr("title",t.tooltip),t.class&&s.attr("class","node default "+t.class),z[t.id]=e,t.haveCallback&&z[t.id].attr("class",z[t.id].attr("class")+" clickable"),e}),"insertNode"),Xt=y((l,t)=>{z[t.id]=l},"setNodeElem"),Kt=y(()=>{z={}},"clear"),Ut=y(l=>{const t=z[l.id];_.trace("Transforming node",l.diff,l,"translate("+(l.x-l.width/2-5)+", "+l.width/2+")");const c=8,e=l.diff||0;return l.clusterNode?t.attr("transform","translate("+(l.x+e-l.width/2)+", "+(l.y-l.height/2-c)+")"):t.attr("transform","translate("+l.x+", "+l.y+")"),e},"positionNode");export{H as a,ut as b,Kt as c,$t as i,Ut as p,Xt as s,w as u};
