import{_ as f,d as W,s as gt,g as kt,c as xt,b as Rt,q as Ot,r as bt,l as V,t as Nt,j as rt,u as Tt,k as At,a2 as Mt,a8 as vt,a9 as St}from"./Using existing ones-BXDRbIhK.js";import{G as wt}from"./graph-B1qoUvdO.js";import{l as It}from"./layout-gGmsoxuB.js";import{u as Dt}from"./stringify-DnirLPRY.js";import"./jsx-runtime-BcCOBRXo.js";import"./index-CNk6hRaE.js";import"./index-BI4Okn8T.js";import"./iframe-BpEomAFm.js";import"../sb-preview/runtime.js";import"./dayjs.min-KGLNs1IR.js";import"./index-DrFu-skq.js";import"./Serializer-OW4gUFyn.js";import"./_baseUniq-BNgr85Sf.js";import"./_basePickBy-BZR4Cj1a.js";const Lt=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Bt(t){return typeof t=="string"&&Lt.test(t)}function Ct(t){if(!Bt(t))throw TypeError("Invalid UUID");let r;const e=new Uint8Array(16);return e[0]=(r=parseInt(t.slice(0,8),16))>>>24,e[1]=r>>>16&255,e[2]=r>>>8&255,e[3]=r&255,e[4]=(r=parseInt(t.slice(9,13),16))>>>8,e[5]=r&255,e[6]=(r=parseInt(t.slice(14,18),16))>>>8,e[7]=r&255,e[8]=(r=parseInt(t.slice(19,23),16))>>>8,e[9]=r&255,e[10]=(r=parseInt(t.slice(24,36),16))/1099511627776&255,e[11]=r/4294967296&255,e[12]=r>>>24&255,e[13]=r>>>16&255,e[14]=r>>>8&255,e[15]=r&255,e}function Pt(t){t=unescape(encodeURIComponent(t));const r=[];for(let e=0;e<t.length;++e)r.push(t.charCodeAt(e));return r}const Yt="6ba7b810-9dad-11d1-80b4-00c04fd430c8",Zt="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function Ft(t,r,e){function u(c,_,p,o){var h;if(typeof c=="string"&&(c=Pt(c)),typeof _=="string"&&(_=Ct(_)),((h=_)===null||h===void 0?void 0:h.length)!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let m=new Uint8Array(16+c.length);if(m.set(_),m.set(c,_.length),m=e(m),m[6]=m[6]&15|r,m[8]=m[8]&63|128,p){o=o||0;for(let g=0;g<16;++g)p[o+g]=m[g];return p}return Dt(m)}try{u.name=t}catch(c){}return u.DNS=Yt,u.URL=Zt,u}function Wt(t,r,e,u){switch(t){case 0:return r&e^~r&u;case 1:return r^e^u;case 2:return r&e^r&u^e&u;case 3:return r^e^u}}function at(t,r){return t<<r|t>>>32-r}function Ut(t){const r=[1518500249,1859775393,2400959708,3395469782],e=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof t=="string"){const p=unescape(encodeURIComponent(t));t=[];for(let o=0;o<p.length;++o)t.push(p.charCodeAt(o))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);const u=t.length/4+2,c=Math.ceil(u/16),_=new Array(c);for(let p=0;p<c;++p){const o=new Uint32Array(16);for(let h=0;h<16;++h)o[h]=t[p*64+h*4]<<24|t[p*64+h*4+1]<<16|t[p*64+h*4+2]<<8|t[p*64+h*4+3];_[p]=o}_[c-1][14]=(t.length-1)*8/Math.pow(2,32),_[c-1][14]=Math.floor(_[c-1][14]),_[c-1][15]=(t.length-1)*8&4294967295;for(let p=0;p<c;++p){const o=new Uint32Array(80);for(let y=0;y<16;++y)o[y]=_[p][y];for(let y=16;y<80;++y)o[y]=at(o[y-3]^o[y-8]^o[y-14]^o[y-16],1);let h=e[0],m=e[1],g=e[2],k=e[3],x=e[4];for(let y=0;y<80;++y){const R=Math.floor(y/20),b=at(h,5)+Wt(R,m,g,k)+x+r[R]+o[y]>>>0;x=k,k=g,g=at(m,30)>>>0,m=h,h=b}e[0]=e[0]+h>>>0,e[1]=e[1]+m>>>0,e[2]=e[2]+g>>>0,e[3]=e[3]+k>>>0,e[4]=e[4]+x>>>0}return[e[0]>>24&255,e[0]>>16&255,e[0]>>8&255,e[0]&255,e[1]>>24&255,e[1]>>16&255,e[1]>>8&255,e[1]&255,e[2]>>24&255,e[2]>>16&255,e[2]>>8&255,e[2]&255,e[3]>>24&255,e[3]>>16&255,e[3]>>8&255,e[3]&255,e[4]>>24&255,e[4]>>16&255,e[4]>>8&255,e[4]&255]}const zt=Ft("v5",80,Ut);var it=function(){var t=f(function(S,i,n,l){for(n=n||{},l=S.length;l--;n[S[l]]=i);return n},"o"),r=[6,8,10,20,22,24,26,27,28],e=[1,10],u=[1,11],c=[1,12],_=[1,13],p=[1,14],o=[1,15],h=[1,21],m=[1,22],g=[1,23],k=[1,24],x=[1,25],y=[6,8,10,13,15,18,19,20,22,24,26,27,28,41,42,43,44,45],R=[1,34],b=[27,28,46,47],P=[41,42,43,44,45],Y=[17,34],Z=[1,54],M=[1,53],v=[17,34,36,38],N={trace:f(function(){},"trace"),yy:{},symbols_:{error:2,start:3,ER_DIAGRAM:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,entityName:11,relSpec:12,":":13,role:14,BLOCK_START:15,attributes:16,BLOCK_STOP:17,SQS:18,SQE:19,title:20,title_value:21,acc_title:22,acc_title_value:23,acc_descr:24,acc_descr_value:25,acc_descr_multiline_value:26,ALPHANUM:27,ENTITY_NAME:28,attribute:29,attributeType:30,attributeName:31,attributeKeyTypeList:32,attributeComment:33,ATTRIBUTE_WORD:34,attributeKeyType:35,COMMA:36,ATTRIBUTE_KEY:37,COMMENT:38,cardinality:39,relType:40,ZERO_OR_ONE:41,ZERO_OR_MORE:42,ONE_OR_MORE:43,ONLY_ONE:44,MD_PARENT:45,NON_IDENTIFYING:46,IDENTIFYING:47,WORD:48,$accept:0,$end:1},terminals_:{2:"error",4:"ER_DIAGRAM",6:"EOF",8:"SPACE",10:"NEWLINE",13:":",15:"BLOCK_START",17:"BLOCK_STOP",18:"SQS",19:"SQE",20:"title",21:"title_value",22:"acc_title",23:"acc_title_value",24:"acc_descr",25:"acc_descr_value",26:"acc_descr_multiline_value",27:"ALPHANUM",28:"ENTITY_NAME",34:"ATTRIBUTE_WORD",36:"COMMA",37:"ATTRIBUTE_KEY",38:"COMMENT",41:"ZERO_OR_ONE",42:"ZERO_OR_MORE",43:"ONE_OR_MORE",44:"ONLY_ONE",45:"MD_PARENT",46:"NON_IDENTIFYING",47:"IDENTIFYING",48:"WORD"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,5],[9,4],[9,3],[9,1],[9,7],[9,6],[9,4],[9,2],[9,2],[9,2],[9,1],[11,1],[11,1],[16,1],[16,2],[29,2],[29,3],[29,3],[29,4],[30,1],[31,1],[32,1],[32,3],[35,1],[33,1],[12,3],[39,1],[39,1],[39,1],[39,1],[39,1],[40,1],[40,1],[14,1],[14,1],[14,1]],performAction:f(function(i,n,l,d,E,a,K){var s=a.length-1;switch(E){case 1:break;case 2:this.$=[];break;case 3:a[s-1].push(a[s]),this.$=a[s-1];break;case 4:case 5:this.$=a[s];break;case 6:case 7:this.$=[];break;case 8:d.addEntity(a[s-4]),d.addEntity(a[s-2]),d.addRelationship(a[s-4],a[s],a[s-2],a[s-3]);break;case 9:d.addEntity(a[s-3]),d.addAttributes(a[s-3],a[s-1]);break;case 10:d.addEntity(a[s-2]);break;case 11:d.addEntity(a[s]);break;case 12:d.addEntity(a[s-6],a[s-4]),d.addAttributes(a[s-6],a[s-1]);break;case 13:d.addEntity(a[s-5],a[s-3]);break;case 14:d.addEntity(a[s-3],a[s-1]);break;case 15:case 16:this.$=a[s].trim(),d.setAccTitle(this.$);break;case 17:case 18:this.$=a[s].trim(),d.setAccDescription(this.$);break;case 19:case 43:this.$=a[s];break;case 20:case 41:case 42:this.$=a[s].replace(/"/g,"");break;case 21:case 29:this.$=[a[s]];break;case 22:a[s].push(a[s-1]),this.$=a[s];break;case 23:this.$={attributeType:a[s-1],attributeName:a[s]};break;case 24:this.$={attributeType:a[s-2],attributeName:a[s-1],attributeKeyTypeList:a[s]};break;case 25:this.$={attributeType:a[s-2],attributeName:a[s-1],attributeComment:a[s]};break;case 26:this.$={attributeType:a[s-3],attributeName:a[s-2],attributeKeyTypeList:a[s-1],attributeComment:a[s]};break;case 27:case 28:case 31:this.$=a[s];break;case 30:a[s-2].push(a[s]),this.$=a[s-2];break;case 32:this.$=a[s].replace(/"/g,"");break;case 33:this.$={cardA:a[s],relType:a[s-1],cardB:a[s-2]};break;case 34:this.$=d.Cardinality.ZERO_OR_ONE;break;case 35:this.$=d.Cardinality.ZERO_OR_MORE;break;case 36:this.$=d.Cardinality.ONE_OR_MORE;break;case 37:this.$=d.Cardinality.ONLY_ONE;break;case 38:this.$=d.Cardinality.MD_PARENT;break;case 39:this.$=d.Identification.NON_IDENTIFYING;break;case 40:this.$=d.Identification.IDENTIFYING;break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(r,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:9,20:e,22:u,24:c,26:_,27:p,28:o},t(r,[2,7],{1:[2,1]}),t(r,[2,3]),{9:16,11:9,20:e,22:u,24:c,26:_,27:p,28:o},t(r,[2,5]),t(r,[2,6]),t(r,[2,11],{12:17,39:20,15:[1,18],18:[1,19],41:h,42:m,43:g,44:k,45:x}),{21:[1,26]},{23:[1,27]},{25:[1,28]},t(r,[2,18]),t(y,[2,19]),t(y,[2,20]),t(r,[2,4]),{11:29,27:p,28:o},{16:30,17:[1,31],29:32,30:33,34:R},{11:35,27:p,28:o},{40:36,46:[1,37],47:[1,38]},t(b,[2,34]),t(b,[2,35]),t(b,[2,36]),t(b,[2,37]),t(b,[2,38]),t(r,[2,15]),t(r,[2,16]),t(r,[2,17]),{13:[1,39]},{17:[1,40]},t(r,[2,10]),{16:41,17:[2,21],29:32,30:33,34:R},{31:42,34:[1,43]},{34:[2,27]},{19:[1,44]},{39:45,41:h,42:m,43:g,44:k,45:x},t(P,[2,39]),t(P,[2,40]),{14:46,27:[1,49],28:[1,48],48:[1,47]},t(r,[2,9]),{17:[2,22]},t(Y,[2,23],{32:50,33:51,35:52,37:Z,38:M}),t([17,34,37,38],[2,28]),t(r,[2,14],{15:[1,55]}),t([27,28],[2,33]),t(r,[2,8]),t(r,[2,41]),t(r,[2,42]),t(r,[2,43]),t(Y,[2,24],{33:56,36:[1,57],38:M}),t(Y,[2,25]),t(v,[2,29]),t(Y,[2,32]),t(v,[2,31]),{16:58,17:[1,59],29:32,30:33,34:R},t(Y,[2,26]),{35:60,37:Z},{17:[1,61]},t(r,[2,13]),t(v,[2,30]),t(r,[2,12])],defaultActions:{34:[2,27],41:[2,22]},parseError:f(function(i,n){if(n.recoverable)this.trace(i);else{var l=new Error(i);throw l.hash=n,l}},"parseError"),parse:f(function(i){var n=this,l=[0],d=[],E=[null],a=[],K=this.table,s="",Q=0,ot=0,yt=2,lt=1,_t=a.slice.call(arguments,1),A=Object.create(this.lexer),U={yy:{}};for(var J in this.yy)Object.prototype.hasOwnProperty.call(this.yy,J)&&(U.yy[J]=this.yy[J]);A.setInput(i,U.yy),U.yy.lexer=A,U.yy.parser=this,typeof A.yylloc=="undefined"&&(A.yylloc={});var $=A.yylloc;a.push($);var Et=A.options&&A.options.ranges;typeof U.yy.parseError=="function"?this.parseError=U.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function mt(I){l.length=l.length-2*I,E.length=E.length-I,a.length=a.length-I}f(mt,"popStack");function ct(){var I;return I=d.pop()||A.lex()||lt,typeof I!="number"&&(I instanceof Array&&(d=I,I=d.pop()),I=n.symbols_[I]||I),I}f(ct,"lex");for(var w,z,L,tt,G={},j,F,ht,q;;){if(z=l[l.length-1],this.defaultActions[z]?L=this.defaultActions[z]:((w===null||typeof w=="undefined")&&(w=ct()),L=K[z]&&K[z][w]),typeof L=="undefined"||!L.length||!L[0]){var et="";q=[];for(j in K[z])this.terminals_[j]&&j>yt&&q.push("'"+this.terminals_[j]+"'");A.showPosition?et="Parse error on line "+(Q+1)+`:
`+A.showPosition()+`
Expecting `+q.join(", ")+", got '"+(this.terminals_[w]||w)+"'":et="Parse error on line "+(Q+1)+": Unexpected "+(w==lt?"end of input":"'"+(this.terminals_[w]||w)+"'"),this.parseError(et,{text:A.match,token:this.terminals_[w]||w,line:A.yylineno,loc:$,expected:q})}if(L[0]instanceof Array&&L.length>1)throw new Error("Parse Error: multiple actions possible at state: "+z+", token: "+w);switch(L[0]){case 1:l.push(w),E.push(A.yytext),a.push(A.yylloc),l.push(L[1]),w=null,ot=A.yyleng,s=A.yytext,Q=A.yylineno,$=A.yylloc;break;case 2:if(F=this.productions_[L[1]][1],G.$=E[E.length-F],G._$={first_line:a[a.length-(F||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(F||1)].first_column,last_column:a[a.length-1].last_column},Et&&(G._$.range=[a[a.length-(F||1)].range[0],a[a.length-1].range[1]]),tt=this.performAction.apply(G,[s,ot,Q,U.yy,L[1],E,a].concat(_t)),typeof tt!="undefined")return tt;F&&(l=l.slice(0,-1*F*2),E=E.slice(0,-1*F),a=a.slice(0,-1*F)),l.push(this.productions_[L[1]][0]),E.push(G.$),a.push(G._$),ht=K[l[l.length-2]][l[l.length-1]],l.push(ht);break;case 3:return!0}}return!0},"parse")},T=function(){var S={EOF:1,parseError:f(function(n,l){if(this.yy.parser)this.yy.parser.parseError(n,l);else throw new Error(n)},"parseError"),setInput:f(function(i,n){return this.yy=n||this.yy||{},this._input=i,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:f(function(){var i=this._input[0];this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i;var n=i.match(/(?:\r\n?|\n).*/g);return n?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},"input"),unput:f(function(i){var n=i.length,l=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-n),this.offset-=n;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),l.length-1&&(this.yylineno-=l.length-1);var E=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:l?(l.length===d.length?this.yylloc.first_column:0)+d[d.length-l.length].length-l[0].length:this.yylloc.first_column-n},this.options.ranges&&(this.yylloc.range=[E[0],E[0]+this.yyleng-n]),this.yyleng=this.yytext.length,this},"unput"),more:f(function(){return this._more=!0,this},"more"),reject:f(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:f(function(i){this.unput(this.match.slice(i))},"less"),pastInput:f(function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:f(function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:f(function(){var i=this.pastInput(),n=new Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+n+"^"},"showPosition"),test_match:f(function(i,n){var l,d,E;if(this.options.backtrack_lexer&&(E={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(E.yylloc.range=this.yylloc.range.slice(0))),d=i[0].match(/(?:\r\n?|\n).*/g),d&&(this.yylineno+=d.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+i[0].length},this.yytext+=i[0],this.match+=i[0],this.matches=i,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(i[0].length),this.matched+=i[0],l=this.performAction.call(this,this.yy,this,n,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),l)return l;if(this._backtrack){for(var a in E)this[a]=E[a];return!1}return!1},"test_match"),next:f(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var i,n,l,d;this._more||(this.yytext="",this.match="");for(var E=this._currentRules(),a=0;a<E.length;a++)if(l=this._input.match(this.rules[E[a]]),l&&(!n||l[0].length>n[0].length)){if(n=l,d=a,this.options.backtrack_lexer){if(i=this.test_match(l,E[a]),i!==!1)return i;if(this._backtrack){n=!1;continue}else return!1}else if(!this.options.flex)break}return n?(i=this.test_match(n,E[d]),i!==!1?i:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:f(function(){var n=this.next();return n||this.lex()},"lex"),begin:f(function(n){this.conditionStack.push(n)},"begin"),popState:f(function(){var n=this.conditionStack.length-1;return n>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:f(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:f(function(n){return n=this.conditionStack.length-1-Math.abs(n||0),n>=0?this.conditionStack[n]:"INITIAL"},"topState"),pushState:f(function(n){this.begin(n)},"pushState"),stateStackSize:f(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:f(function(n,l,d,E){switch(d){case 0:return this.begin("acc_title"),22;case 1:return this.popState(),"acc_title_value";case 2:return this.begin("acc_descr"),24;case 3:return this.popState(),"acc_descr_value";case 4:this.begin("acc_descr_multiline");break;case 5:this.popState();break;case 6:return"acc_descr_multiline_value";case 7:return 10;case 8:break;case 9:return 8;case 10:return 28;case 11:return 48;case 12:return 4;case 13:return this.begin("block"),15;case 14:return 36;case 15:break;case 16:return 37;case 17:return 34;case 18:return 34;case 19:return 38;case 20:break;case 21:return this.popState(),17;case 22:return l.yytext[0];case 23:return 18;case 24:return 19;case 25:return 41;case 26:return 43;case 27:return 43;case 28:return 43;case 29:return 41;case 30:return 41;case 31:return 42;case 32:return 42;case 33:return 42;case 34:return 42;case 35:return 42;case 36:return 43;case 37:return 42;case 38:return 43;case 39:return 44;case 40:return 44;case 41:return 44;case 42:return 44;case 43:return 41;case 44:return 42;case 45:return 43;case 46:return 45;case 47:return 46;case 48:return 47;case 49:return 47;case 50:return 46;case 51:return 46;case 52:return 46;case 53:return 27;case 54:return l.yytext[0];case 55:return 6}},"anonymous"),rules:[/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:[\s]+)/i,/^(?:"[^"%\r\n\v\b\\]+")/i,/^(?:"[^"]*")/i,/^(?:erDiagram\b)/i,/^(?:\{)/i,/^(?:,)/i,/^(?:\s+)/i,/^(?:\b((?:PK)|(?:FK)|(?:UK))\b)/i,/^(?:(.*?)[~](.*?)*[~])/i,/^(?:[\*A-Za-z_][A-Za-z0-9\-_\[\]\(\)]*)/i,/^(?:"[^"]*")/i,/^(?:[\n]+)/i,/^(?:\})/i,/^(?:.)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:one or zero\b)/i,/^(?:one or more\b)/i,/^(?:one or many\b)/i,/^(?:1\+)/i,/^(?:\|o\b)/i,/^(?:zero or one\b)/i,/^(?:zero or more\b)/i,/^(?:zero or many\b)/i,/^(?:0\+)/i,/^(?:\}o\b)/i,/^(?:many\(0\))/i,/^(?:many\(1\))/i,/^(?:many\b)/i,/^(?:\}\|)/i,/^(?:one\b)/i,/^(?:only one\b)/i,/^(?:1\b)/i,/^(?:\|\|)/i,/^(?:o\|)/i,/^(?:o\{)/i,/^(?:\|\{)/i,/^(?:\s*u\b)/i,/^(?:\.\.)/i,/^(?:--)/i,/^(?:to\b)/i,/^(?:optionally to\b)/i,/^(?:\.-)/i,/^(?:-\.)/i,/^(?:[A-Za-z_][A-Za-z0-9\-_]*)/i,/^(?:.)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[5,6],inclusive:!1},acc_descr:{rules:[3],inclusive:!1},acc_title:{rules:[1],inclusive:!1},block:{rules:[14,15,16,17,18,19,20,21,22],inclusive:!1},INITIAL:{rules:[0,2,4,7,8,9,10,11,12,13,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55],inclusive:!0}}};return S}();N.lexer=T;function D(){this.yy={}}return f(D,"Parser"),D.prototype=N,N.Parser=D,new D}();it.parser=it;var Ht=it,H=new Map,st=[],Gt={ZERO_OR_ONE:"ZERO_OR_ONE",ZERO_OR_MORE:"ZERO_OR_MORE",ONE_OR_MORE:"ONE_OR_MORE",ONLY_ONE:"ONLY_ONE",MD_PARENT:"MD_PARENT"},Kt={NON_IDENTIFYING:"NON_IDENTIFYING",IDENTIFYING:"IDENTIFYING"},ft=f(function(t,r=void 0){return H.has(t)?!H.get(t).alias&&r&&(H.get(t).alias=r,V.info(`Add alias '${r}' to entity '${t}'`)):(H.set(t,{attributes:[],alias:r}),V.info("Added new entity :",t)),H.get(t)},"addEntity"),Vt=f(()=>H,"getEntities"),Xt=f(function(t,r){let e=ft(t),u;for(u=r.length-1;u>=0;u--)e.attributes.push(r[u]),V.debug("Added attribute ",r[u].attributeName)},"addAttributes"),Qt=f(function(t,r,e,u){let c={entityA:t,roleA:r,entityB:e,relSpec:u};st.push(c),V.debug("Added new relationship :",c)},"addRelationship"),jt=f(()=>st,"getRelationships"),qt=f(function(){H=new Map,st=[],Nt()},"clear"),Jt={Cardinality:Gt,Identification:Kt,getConfig:f(()=>W().er,"getConfig"),addEntity:ft,addAttributes:Xt,getEntities:Vt,addRelationship:Qt,getRelationships:jt,clear:qt,setAccTitle:gt,getAccTitle:kt,setAccDescription:xt,getAccDescription:Rt,setDiagramTitle:Ot,getDiagramTitle:bt},B={ONLY_ONE_START:"ONLY_ONE_START",ONLY_ONE_END:"ONLY_ONE_END",ZERO_OR_ONE_START:"ZERO_OR_ONE_START",ZERO_OR_ONE_END:"ZERO_OR_ONE_END",ONE_OR_MORE_START:"ONE_OR_MORE_START",ONE_OR_MORE_END:"ONE_OR_MORE_END",ZERO_OR_MORE_START:"ZERO_OR_MORE_START",ZERO_OR_MORE_END:"ZERO_OR_MORE_END",MD_PARENT_END:"MD_PARENT_END",MD_PARENT_START:"MD_PARENT_START"},$t=f(function(t,r){let e;t.append("defs").append("marker").attr("id",B.MD_PARENT_START).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",B.MD_PARENT_END).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",B.ONLY_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M9,0 L9,18 M15,0 L15,18"),t.append("defs").append("marker").attr("id",B.ONLY_ONE_END).attr("refX",18).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M3,0 L3,18 M9,0 L9,18"),e=t.append("defs").append("marker").attr("id",B.ZERO_OR_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),e.append("circle").attr("stroke",r.stroke).attr("fill","white").attr("cx",21).attr("cy",9).attr("r",6),e.append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M9,0 L9,18"),e=t.append("defs").append("marker").attr("id",B.ZERO_OR_ONE_END).attr("refX",30).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),e.append("circle").attr("stroke",r.stroke).attr("fill","white").attr("cx",9).attr("cy",9).attr("r",6),e.append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M21,0 L21,18"),t.append("defs").append("marker").attr("id",B.ONE_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"),t.append("defs").append("marker").attr("id",B.ONE_OR_MORE_END).attr("refX",27).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18"),e=t.append("defs").append("marker").attr("id",B.ZERO_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),e.append("circle").attr("stroke",r.stroke).attr("fill","white").attr("cx",48).attr("cy",18).attr("r",6),e.append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M0,18 Q18,0 36,18 Q18,36 0,18"),e=t.append("defs").append("marker").attr("id",B.ZERO_OR_MORE_END).attr("refX",39).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),e.append("circle").attr("stroke",r.stroke).attr("fill","white").attr("cx",9).attr("cy",18).attr("r",6),e.append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M21,18 Q39,0 57,18 Q39,36 21,18")},"insertMarkers"),C={ERMarkers:B,insertMarkers:$t},te=/[^\dA-Za-z](\W)*/g,O={},X=new Map,ee=f(function(t){const r=Object.keys(t);for(const e of r)O[e]=t[e]},"setConf"),re=f((t,r,e)=>{const u=O.entityPadding/3,c=O.entityPadding/3,_=O.fontSize*.85,p=r.node().getBBox(),o=[];let h=!1,m=!1,g=0,k=0,x=0,y=0,R=p.height+u*2,b=1;e.forEach(M=>{M.attributeKeyTypeList!==void 0&&M.attributeKeyTypeList.length>0&&(h=!0),M.attributeComment!==void 0&&(m=!0)}),e.forEach(M=>{const v=`${r.node().id}-attr-${b}`;let N=0;const T=St(M.attributeType),D=t.append("text").classed("er entityLabel",!0).attr("id",`${v}-type`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",W().fontFamily).style("font-size",_+"px").text(T),S=t.append("text").classed("er entityLabel",!0).attr("id",`${v}-name`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",W().fontFamily).style("font-size",_+"px").text(M.attributeName),i={};i.tn=D,i.nn=S;const n=D.node().getBBox(),l=S.node().getBBox();if(g=Math.max(g,n.width),k=Math.max(k,l.width),N=Math.max(n.height,l.height),h){const d=M.attributeKeyTypeList!==void 0?M.attributeKeyTypeList.join(","):"",E=t.append("text").classed("er entityLabel",!0).attr("id",`${v}-key`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",W().fontFamily).style("font-size",_+"px").text(d);i.kn=E;const a=E.node().getBBox();x=Math.max(x,a.width),N=Math.max(N,a.height)}if(m){const d=t.append("text").classed("er entityLabel",!0).attr("id",`${v}-comment`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",W().fontFamily).style("font-size",_+"px").text(M.attributeComment||"");i.cn=d;const E=d.node().getBBox();y=Math.max(y,E.width),N=Math.max(N,E.height)}i.height=N,o.push(i),R+=N+u*2,b+=1});let P=4;h&&(P+=2),m&&(P+=2);const Y=g+k+x+y,Z={width:Math.max(O.minEntityWidth,Math.max(p.width+O.entityPadding*2,Y+c*P)),height:e.length>0?R:Math.max(O.minEntityHeight,p.height+O.entityPadding*2)};if(e.length>0){const M=Math.max(0,(Z.width-Y-c*P)/(P/2));r.attr("transform","translate("+Z.width/2+","+(u+p.height/2)+")");let v=p.height+u*2,N="attributeBoxOdd";o.forEach(T=>{const D=v+u+T.height/2;T.tn.attr("transform","translate("+c+","+D+")");const S=t.insert("rect","#"+T.tn.node().id).classed(`er ${N}`,!0).attr("x",0).attr("y",v).attr("width",g+c*2+M).attr("height",T.height+u*2),i=parseFloat(S.attr("x"))+parseFloat(S.attr("width"));T.nn.attr("transform","translate("+(i+c)+","+D+")");const n=t.insert("rect","#"+T.nn.node().id).classed(`er ${N}`,!0).attr("x",i).attr("y",v).attr("width",k+c*2+M).attr("height",T.height+u*2);let l=parseFloat(n.attr("x"))+parseFloat(n.attr("width"));if(h){T.kn.attr("transform","translate("+(l+c)+","+D+")");const d=t.insert("rect","#"+T.kn.node().id).classed(`er ${N}`,!0).attr("x",l).attr("y",v).attr("width",x+c*2+M).attr("height",T.height+u*2);l=parseFloat(d.attr("x"))+parseFloat(d.attr("width"))}m&&(T.cn.attr("transform","translate("+(l+c)+","+D+")"),t.insert("rect","#"+T.cn.node().id).classed(`er ${N}`,"true").attr("x",l).attr("y",v).attr("width",y+c*2+M).attr("height",T.height+u*2)),v+=T.height+u*2,N=N==="attributeBoxOdd"?"attributeBoxEven":"attributeBoxOdd"})}else Z.height=Math.max(O.minEntityHeight,R),r.attr("transform","translate("+Z.width/2+","+Z.height/2+")");return Z},"drawAttributes"),ae=f(function(t,r,e){const u=[...r.keys()];let c;return u.forEach(function(_){var R;const p=pt(_,"entity");X.set(_,p);const o=t.append("g").attr("id",p);c=c===void 0?p:c;const h="text-"+p,m=o.append("text").classed("er entityLabel",!0).attr("id",h).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","middle").style("font-family",W().fontFamily).style("font-size",O.fontSize+"px").text((R=r.get(_).alias)!=null?R:_),{width:g,height:k}=re(o,m,r.get(_).attributes),y=o.insert("rect","#"+h).classed("er entityBox",!0).attr("x",0).attr("y",0).attr("width",g).attr("height",k).node().getBBox();e.setNode(p,{width:y.width,height:y.height,shape:"rect",id:p})}),c},"drawEntities"),ie=f(function(t,r){r.nodes().forEach(function(e){e!==void 0&&r.node(e)!==void 0&&t.select("#"+e).attr("transform","translate("+(r.node(e).x-r.node(e).width/2)+","+(r.node(e).y-r.node(e).height/2)+" )")})},"adjustEntities"),ut=f(function(t){return(t.entityA+t.roleA+t.entityB).replace(/\s/g,"")},"getEdgeName"),ne=f(function(t,r){return t.forEach(function(e){r.setEdge(X.get(e.entityA),X.get(e.entityB),{relationship:e},ut(e))}),t},"addRelationships"),dt=0,se=f(function(t,r,e,u,c){dt++;const _=e.edge(X.get(r.entityA),X.get(r.entityB),ut(r)),p=Mt().x(function(b){return b.x}).y(function(b){return b.y}).curve(vt),o=t.insert("path","#"+u).classed("er relationshipLine",!0).attr("d",p(_.points)).style("stroke",O.stroke).style("fill","none");r.relSpec.relType===c.db.Identification.NON_IDENTIFYING&&o.attr("stroke-dasharray","8,8");let h="";switch(O.arrowMarkerAbsolute&&(h=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,h=h.replace(/\(/g,"\\("),h=h.replace(/\)/g,"\\)")),r.relSpec.cardA){case c.db.Cardinality.ZERO_OR_ONE:o.attr("marker-end","url("+h+"#"+C.ERMarkers.ZERO_OR_ONE_END+")");break;case c.db.Cardinality.ZERO_OR_MORE:o.attr("marker-end","url("+h+"#"+C.ERMarkers.ZERO_OR_MORE_END+")");break;case c.db.Cardinality.ONE_OR_MORE:o.attr("marker-end","url("+h+"#"+C.ERMarkers.ONE_OR_MORE_END+")");break;case c.db.Cardinality.ONLY_ONE:o.attr("marker-end","url("+h+"#"+C.ERMarkers.ONLY_ONE_END+")");break;case c.db.Cardinality.MD_PARENT:o.attr("marker-end","url("+h+"#"+C.ERMarkers.MD_PARENT_END+")");break}switch(r.relSpec.cardB){case c.db.Cardinality.ZERO_OR_ONE:o.attr("marker-start","url("+h+"#"+C.ERMarkers.ZERO_OR_ONE_START+")");break;case c.db.Cardinality.ZERO_OR_MORE:o.attr("marker-start","url("+h+"#"+C.ERMarkers.ZERO_OR_MORE_START+")");break;case c.db.Cardinality.ONE_OR_MORE:o.attr("marker-start","url("+h+"#"+C.ERMarkers.ONE_OR_MORE_START+")");break;case c.db.Cardinality.ONLY_ONE:o.attr("marker-start","url("+h+"#"+C.ERMarkers.ONLY_ONE_START+")");break;case c.db.Cardinality.MD_PARENT:o.attr("marker-start","url("+h+"#"+C.ERMarkers.MD_PARENT_START+")");break}const m=o.node().getTotalLength(),g=o.node().getPointAtLength(m*.5),k="rel"+dt,x=r.roleA.split(/<br ?\/>/g),y=t.append("text").classed("er relationshipLabel",!0).attr("id",k).attr("x",g.x).attr("y",g.y).style("text-anchor","middle").style("dominant-baseline","middle").style("font-family",W().fontFamily).style("font-size",O.fontSize+"px");if(x.length==1)y.text(r.roleA);else{const b=-(x.length-1)*.5;x.forEach((P,Y)=>{y.append("tspan").attr("x",g.x).attr("dy",`${Y===0?b:1}em`).text(P)})}const R=y.node().getBBox();t.insert("rect","#"+k).classed("er relationshipLabelBox",!0).attr("x",g.x-R.width/2).attr("y",g.y-R.height/2).attr("width",R.width).attr("height",R.height)},"drawRelationshipFromLayout"),oe=f(function(t,r,e,u){O=W().er,V.info("Drawing ER diagram");const c=W().securityLevel;let _;c==="sandbox"&&(_=rt("#i"+r));const o=(c==="sandbox"?rt(_.nodes()[0].contentDocument.body):rt("body")).select(`[id='${r}']`);C.insertMarkers(o,O);let h;h=new wt({multigraph:!0,directed:!0,compound:!1}).setGraph({rankdir:O.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel(function(){return{}});const m=ae(o,u.db.getEntities(),h),g=ne(u.db.getRelationships(),h);It(h),ie(o,h),g.forEach(function(b){se(o,b,h,m,u)});const k=O.diagramPadding;Tt.insertTitle(o,"entityTitleText",O.titleTopMargin,u.db.getDiagramTitle());const x=o.node().getBBox(),y=x.width+k*2,R=x.height+k*2;At(o,R,y,O.useMaxWidth),o.attr("viewBox",`${x.x-k} ${x.y-k} ${y} ${R}`)},"draw"),le="28e9f9db-3c8d-5aa5-9faf-44286ae5937c";function pt(t="",r=""){const e=t.replace(te,"");return`${nt(r)}${nt(e)}${zt(t,le)}`}f(pt,"generateId");function nt(t=""){return t.length>0?`${t}-`:""}f(nt,"strWithHyphen");var ce={setConf:ee,draw:oe},he=f(t=>`
  .entityBox {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
  }

  .attributeBoxOdd {
    fill: ${t.attributeBackgroundColorOdd};
    stroke: ${t.nodeBorder};
  }

  .attributeBoxEven {
    fill:  ${t.attributeBackgroundColorEven};
    stroke: ${t.nodeBorder};
  }

  .relationshipLabelBox {
    fill: ${t.tertiaryColor};
    opacity: 0.7;
    background-color: ${t.tertiaryColor};
      rect {
        opacity: 0.5;
      }
  }

    .relationshipLine {
      stroke: ${t.lineColor};
    }

  .entityTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }    
  #MD_PARENT_START {
    fill: #f5f5f5 !important;
    stroke: ${t.lineColor} !important;
    stroke-width: 1;
  }
  #MD_PARENT_END {
    fill: #f5f5f5 !important;
    stroke: ${t.lineColor} !important;
    stroke-width: 1;
  }
  
`,"getStyles"),de=he,Te={parser:Ht,db:Jt,renderer:ce,styles:de};export{Te as diagram};
