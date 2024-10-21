var jt=(t,e,l)=>new Promise((n,h)=>{var s=a=>{try{y(l.next(a))}catch(_){h(_)}},f=a=>{try{y(l.throw(a))}catch(_){h(_)}},y=a=>a.done?n(a.value):Promise.resolve(a.value).then(s,f);y((l=l.apply(t,e)).next())});import{g as Ce,s as xe}from"./chunk-DUMQOTYW-0xJyfB2B.js";import{_ as r,e as H,d as A,g as Ae,s as Le,b as Ie,c as Re,q as Oe,r as Ne,l as b,y as we,u as $e,t as Pe,ag as Ge}from"./Using existing ones-B8pwVpRB.js";var Ot=function(){var t=r(function($,c,u,o){for(u=u||{},o=$.length;o--;u[$[o]]=c);return u},"o"),e=[1,2],l=[1,3],n=[1,4],h=[2,4],s=[1,9],f=[1,11],y=[1,16],a=[1,17],_=[1,18],E=[1,19],m=[1,32],B=[1,20],Y=[1,21],I=[1,22],p=[1,23],L=[1,24],R=[1,26],F=[1,27],V=[1,28],N=[1,29],w=[1,30],rt=[1,31],at=[1,34],nt=[1,35],lt=[1,36],ot=[1,37],J=[1,33],S=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],ct=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],Vt=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],kt={trace:r(function(){},"trace"),yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,SD:6,document:7,line:8,statement:9,classDefStatement:10,styleStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"-->":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,classDef:38,CLASSDEF_ID:39,CLASSDEF_STYLEOPTS:40,DEFAULT:41,style:42,STYLE_IDS:43,STYLEDEF_STYLEOPTS:44,class:45,CLASSENTITY_IDS:46,STYLECLASS:47,direction_tb:48,direction_bt:49,direction_rl:50,direction_lr:51,eol:52,";":53,EDGE_STATE:54,STYLE_SEPARATOR:55,left_of:56,right_of:57,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",6:"SD",14:"DESCR",15:"-->",16:"HIDE_EMPTY",17:"scale",18:"WIDTH",19:"COMPOSIT_STATE",20:"STRUCT_START",21:"STRUCT_STOP",22:"STATE_DESCR",23:"AS",24:"ID",25:"FORK",26:"JOIN",27:"CHOICE",28:"CONCURRENT",29:"note",31:"NOTE_TEXT",33:"acc_title",34:"acc_title_value",35:"acc_descr",36:"acc_descr_value",37:"acc_descr_multiline_value",38:"classDef",39:"CLASSDEF_ID",40:"CLASSDEF_STYLEOPTS",41:"DEFAULT",42:"style",43:"STYLE_IDS",44:"STYLEDEF_STYLEOPTS",45:"class",46:"CLASSENTITY_IDS",47:"STYLECLASS",48:"direction_tb",49:"direction_bt",50:"direction_rl",51:"direction_lr",53:";",54:"EDGE_STATE",55:"STYLE_SEPARATOR",56:"left_of",57:"right_of"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[8,1],[8,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,3],[9,4],[9,1],[9,2],[9,1],[9,4],[9,3],[9,6],[9,1],[9,1],[9,1],[9,1],[9,4],[9,4],[9,1],[9,2],[9,2],[9,1],[10,3],[10,3],[11,3],[12,3],[32,1],[32,1],[32,1],[32,1],[52,1],[52,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1]],performAction:r(function(c,u,o,g,T,i,q){var d=i.length-1;switch(T){case 3:return g.setRootDoc(i[d]),i[d];case 4:this.$=[];break;case 5:i[d]!="nl"&&(i[d-1].push(i[d]),this.$=i[d-1]);break;case 6:case 7:this.$=i[d];break;case 8:this.$="nl";break;case 12:this.$=i[d];break;case 13:const Q=i[d-1];Q.description=g.trimColon(i[d]),this.$=Q;break;case 14:this.$={stmt:"relation",state1:i[d-2],state2:i[d]};break;case 15:const Dt=g.trimColon(i[d]);this.$={stmt:"relation",state1:i[d-3],state2:i[d-1],description:Dt};break;case 19:this.$={stmt:"state",id:i[d-3],type:"default",description:"",doc:i[d-1]};break;case 20:var M=i[d],W=i[d-2].trim();if(i[d].match(":")){var ht=i[d].split(":");M=ht[0],W=[W,ht[1]]}this.$={stmt:"state",id:M,type:"default",description:W};break;case 21:this.$={stmt:"state",id:i[d-3],type:"default",description:i[d-5],doc:i[d-1]};break;case 22:this.$={stmt:"state",id:i[d],type:"fork"};break;case 23:this.$={stmt:"state",id:i[d],type:"join"};break;case 24:this.$={stmt:"state",id:i[d],type:"choice"};break;case 25:this.$={stmt:"state",id:g.getDividerId(),type:"divider"};break;case 26:this.$={stmt:"state",id:i[d-1].trim(),note:{position:i[d-2].trim(),text:i[d].trim()}};break;case 29:this.$=i[d].trim(),g.setAccTitle(this.$);break;case 30:case 31:this.$=i[d].trim(),g.setAccDescription(this.$);break;case 32:case 33:this.$={stmt:"classDef",id:i[d-1].trim(),classes:i[d].trim()};break;case 34:this.$={stmt:"style",id:i[d-1].trim(),styleClass:i[d].trim()};break;case 35:this.$={stmt:"applyClass",id:i[d-1].trim(),styleClass:i[d].trim()};break;case 36:g.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 37:g.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 38:g.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 39:g.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 42:case 43:this.$={stmt:"state",id:i[d].trim(),type:"default",description:""};break;case 44:this.$={stmt:"state",id:i[d-2].trim(),classes:[i[d].trim()],type:"default",description:""};break;case 45:this.$={stmt:"state",id:i[d-2].trim(),classes:[i[d].trim()],type:"default",description:""};break}},"anonymous"),table:[{3:1,4:e,5:l,6:n},{1:[3]},{3:5,4:e,5:l,6:n},{3:6,4:e,5:l,6:n},t([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],h,{7:7}),{1:[2,1]},{1:[2,2]},{1:[2,3],4:s,5:f,8:8,9:10,10:12,11:13,12:14,13:15,16:y,17:a,19:_,22:E,24:m,25:B,26:Y,27:I,28:p,29:L,32:25,33:R,35:F,37:V,38:N,42:w,45:rt,48:at,49:nt,50:lt,51:ot,54:J},t(S,[2,5]),{9:38,10:12,11:13,12:14,13:15,16:y,17:a,19:_,22:E,24:m,25:B,26:Y,27:I,28:p,29:L,32:25,33:R,35:F,37:V,38:N,42:w,45:rt,48:at,49:nt,50:lt,51:ot,54:J},t(S,[2,7]),t(S,[2,8]),t(S,[2,9]),t(S,[2,10]),t(S,[2,11]),t(S,[2,12],{14:[1,39],15:[1,40]}),t(S,[2,16]),{18:[1,41]},t(S,[2,18],{20:[1,42]}),{23:[1,43]},t(S,[2,22]),t(S,[2,23]),t(S,[2,24]),t(S,[2,25]),{30:44,31:[1,45],56:[1,46],57:[1,47]},t(S,[2,28]),{34:[1,48]},{36:[1,49]},t(S,[2,31]),{39:[1,50],41:[1,51]},{43:[1,52]},{46:[1,53]},t(ct,[2,42],{55:[1,54]}),t(ct,[2,43],{55:[1,55]}),t(S,[2,36]),t(S,[2,37]),t(S,[2,38]),t(S,[2,39]),t(S,[2,6]),t(S,[2,13]),{13:56,24:m,54:J},t(S,[2,17]),t(Vt,h,{7:57}),{24:[1,58]},{24:[1,59]},{23:[1,60]},{24:[2,46]},{24:[2,47]},t(S,[2,29]),t(S,[2,30]),{40:[1,61]},{40:[1,62]},{44:[1,63]},{47:[1,64]},{24:[1,65]},{24:[1,66]},t(S,[2,14],{14:[1,67]}),{4:s,5:f,8:8,9:10,10:12,11:13,12:14,13:15,16:y,17:a,19:_,21:[1,68],22:E,24:m,25:B,26:Y,27:I,28:p,29:L,32:25,33:R,35:F,37:V,38:N,42:w,45:rt,48:at,49:nt,50:lt,51:ot,54:J},t(S,[2,20],{20:[1,69]}),{31:[1,70]},{24:[1,71]},t(S,[2,32]),t(S,[2,33]),t(S,[2,34]),t(S,[2,35]),t(ct,[2,44]),t(ct,[2,45]),t(S,[2,15]),t(S,[2,19]),t(Vt,h,{7:72}),t(S,[2,26]),t(S,[2,27]),{4:s,5:f,8:8,9:10,10:12,11:13,12:14,13:15,16:y,17:a,19:_,21:[1,73],22:E,24:m,25:B,26:Y,27:I,28:p,29:L,32:25,33:R,35:F,37:V,38:N,42:w,45:rt,48:at,49:nt,50:lt,51:ot,54:J},t(S,[2,21])],defaultActions:{5:[2,1],6:[2,2],46:[2,46],47:[2,47]},parseError:r(function(c,u){if(u.recoverable)this.trace(c);else{var o=new Error(c);throw o.hash=u,o}},"parseError"),parse:r(function(c){var u=this,o=[0],g=[],T=[null],i=[],q=this.table,d="",M=0,W=0,ht=2,Q=1,Dt=i.slice.call(arguments,1),v=Object.create(this.lexer),U={yy:{}};for(var Ct in this.yy)Object.prototype.hasOwnProperty.call(this.yy,Ct)&&(U.yy[Ct]=this.yy[Ct]);v.setInput(c,U.yy),U.yy.lexer=v,U.yy.parser=this,typeof v.yylloc=="undefined"&&(v.yylloc={});var xt=v.yylloc;i.push(xt);var ke=v.options&&v.options.ranges;typeof U.yy.parseError=="function"?this.parseError=U.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function De(C){o.length=o.length-2*C,T.length=T.length-C,i.length=i.length-C}r(De,"popStack");function Mt(){var C;return C=g.pop()||v.lex()||Q,typeof C!="number"&&(C instanceof Array&&(g=C,C=g.pop()),C=u.symbols_[C]||C),C}r(Mt,"lex");for(var k,j,x,At,X={},dt,O,Ut,ft;;){if(j=o[o.length-1],this.defaultActions[j]?x=this.defaultActions[j]:((k===null||typeof k=="undefined")&&(k=Mt()),x=q[j]&&q[j][k]),typeof x=="undefined"||!x.length||!x[0]){var Lt="";ft=[];for(dt in q[j])this.terminals_[dt]&&dt>ht&&ft.push("'"+this.terminals_[dt]+"'");v.showPosition?Lt="Parse error on line "+(M+1)+`:
`+v.showPosition()+`
Expecting `+ft.join(", ")+", got '"+(this.terminals_[k]||k)+"'":Lt="Parse error on line "+(M+1)+": Unexpected "+(k==Q?"end of input":"'"+(this.terminals_[k]||k)+"'"),this.parseError(Lt,{text:v.match,token:this.terminals_[k]||k,line:v.yylineno,loc:xt,expected:ft})}if(x[0]instanceof Array&&x.length>1)throw new Error("Parse Error: multiple actions possible at state: "+j+", token: "+k);switch(x[0]){case 1:o.push(k),T.push(v.yytext),i.push(v.yylloc),o.push(x[1]),k=null,W=v.yyleng,d=v.yytext,M=v.yylineno,xt=v.yylloc;break;case 2:if(O=this.productions_[x[1]][1],X.$=T[T.length-O],X._$={first_line:i[i.length-(O||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(O||1)].first_column,last_column:i[i.length-1].last_column},ke&&(X._$.range=[i[i.length-(O||1)].range[0],i[i.length-1].range[1]]),At=this.performAction.apply(X,[d,W,M,U.yy,x[1],T,i].concat(Dt)),typeof At!="undefined")return At;O&&(o=o.slice(0,-1*O*2),T=T.slice(0,-1*O),i=i.slice(0,-1*O)),o.push(this.productions_[x[1]][0]),T.push(X.$),i.push(X._$),Ut=q[o[o.length-2]][o[o.length-1]],o.push(Ut);break;case 3:return!0}}return!0},"parse")},me=function(){var $={EOF:1,parseError:r(function(u,o){if(this.yy.parser)this.yy.parser.parseError(u,o);else throw new Error(u)},"parseError"),setInput:r(function(c,u){return this.yy=u||this.yy||{},this._input=c,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:r(function(){var c=this._input[0];this.yytext+=c,this.yyleng++,this.offset++,this.match+=c,this.matched+=c;var u=c.match(/(?:\r\n?|\n).*/g);return u?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),c},"input"),unput:r(function(c){var u=c.length,o=c.split(/(?:\r\n?|\n)/g);this._input=c+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-u),this.offset-=u;var g=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),o.length-1&&(this.yylineno-=o.length-1);var T=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:o?(o.length===g.length?this.yylloc.first_column:0)+g[g.length-o.length].length-o[0].length:this.yylloc.first_column-u},this.options.ranges&&(this.yylloc.range=[T[0],T[0]+this.yyleng-u]),this.yyleng=this.yytext.length,this},"unput"),more:r(function(){return this._more=!0,this},"more"),reject:r(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:r(function(c){this.unput(this.match.slice(c))},"less"),pastInput:r(function(){var c=this.matched.substr(0,this.matched.length-this.match.length);return(c.length>20?"...":"")+c.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:r(function(){var c=this.match;return c.length<20&&(c+=this._input.substr(0,20-c.length)),(c.substr(0,20)+(c.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:r(function(){var c=this.pastInput(),u=new Array(c.length+1).join("-");return c+this.upcomingInput()+`
`+u+"^"},"showPosition"),test_match:r(function(c,u){var o,g,T;if(this.options.backtrack_lexer&&(T={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(T.yylloc.range=this.yylloc.range.slice(0))),g=c[0].match(/(?:\r\n?|\n).*/g),g&&(this.yylineno+=g.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:g?g[g.length-1].length-g[g.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+c[0].length},this.yytext+=c[0],this.match+=c[0],this.matches=c,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(c[0].length),this.matched+=c[0],o=this.performAction.call(this,this.yy,this,u,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),o)return o;if(this._backtrack){for(var i in T)this[i]=T[i];return!1}return!1},"test_match"),next:r(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var c,u,o,g;this._more||(this.yytext="",this.match="");for(var T=this._currentRules(),i=0;i<T.length;i++)if(o=this._input.match(this.rules[T[i]]),o&&(!u||o[0].length>u[0].length)){if(u=o,g=i,this.options.backtrack_lexer){if(c=this.test_match(o,T[i]),c!==!1)return c;if(this._backtrack){u=!1;continue}else return!1}else if(!this.options.flex)break}return u?(c=this.test_match(u,T[g]),c!==!1?c:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:r(function(){var u=this.next();return u||this.lex()},"lex"),begin:r(function(u){this.conditionStack.push(u)},"begin"),popState:r(function(){var u=this.conditionStack.length-1;return u>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:r(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:r(function(u){return u=this.conditionStack.length-1-Math.abs(u||0),u>=0?this.conditionStack[u]:"INITIAL"},"topState"),pushState:r(function(u){this.begin(u)},"pushState"),stateStackSize:r(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:r(function(u,o,g,T){switch(g){case 0:return 41;case 1:return 48;case 2:return 49;case 3:return 50;case 4:return 51;case 5:break;case 6:break;case 7:return 5;case 8:break;case 9:break;case 10:break;case 11:break;case 12:return this.pushState("SCALE"),17;case 13:return 18;case 14:this.popState();break;case 15:return this.begin("acc_title"),33;case 16:return this.popState(),"acc_title_value";case 17:return this.begin("acc_descr"),35;case 18:return this.popState(),"acc_descr_value";case 19:this.begin("acc_descr_multiline");break;case 20:this.popState();break;case 21:return"acc_descr_multiline_value";case 22:return this.pushState("CLASSDEF"),38;case 23:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 24:return this.popState(),this.pushState("CLASSDEFID"),39;case 25:return this.popState(),40;case 26:return this.pushState("CLASS"),45;case 27:return this.popState(),this.pushState("CLASS_STYLE"),46;case 28:return this.popState(),47;case 29:return this.pushState("STYLE"),42;case 30:return this.popState(),this.pushState("STYLEDEF_STYLES"),43;case 31:return this.popState(),44;case 32:return this.pushState("SCALE"),17;case 33:return 18;case 34:this.popState();break;case 35:this.pushState("STATE");break;case 36:return this.popState(),o.yytext=o.yytext.slice(0,-8).trim(),25;case 37:return this.popState(),o.yytext=o.yytext.slice(0,-8).trim(),26;case 38:return this.popState(),o.yytext=o.yytext.slice(0,-10).trim(),27;case 39:return this.popState(),o.yytext=o.yytext.slice(0,-8).trim(),25;case 40:return this.popState(),o.yytext=o.yytext.slice(0,-8).trim(),26;case 41:return this.popState(),o.yytext=o.yytext.slice(0,-10).trim(),27;case 42:return 48;case 43:return 49;case 44:return 50;case 45:return 51;case 46:this.pushState("STATE_STRING");break;case 47:return this.pushState("STATE_ID"),"AS";case 48:return this.popState(),"ID";case 49:this.popState();break;case 50:return"STATE_DESCR";case 51:return 19;case 52:this.popState();break;case 53:return this.popState(),this.pushState("struct"),20;case 54:break;case 55:return this.popState(),21;case 56:break;case 57:return this.begin("NOTE"),29;case 58:return this.popState(),this.pushState("NOTE_ID"),56;case 59:return this.popState(),this.pushState("NOTE_ID"),57;case 60:this.popState(),this.pushState("FLOATING_NOTE");break;case 61:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";case 62:break;case 63:return"NOTE_TEXT";case 64:return this.popState(),"ID";case 65:return this.popState(),this.pushState("NOTE_TEXT"),24;case 66:return this.popState(),o.yytext=o.yytext.substr(2).trim(),31;case 67:return this.popState(),o.yytext=o.yytext.slice(0,-8).trim(),31;case 68:return 6;case 69:return 6;case 70:return 16;case 71:return 54;case 72:return 24;case 73:return o.yytext=o.yytext.trim(),14;case 74:return 15;case 75:return 28;case 76:return 55;case 77:return 5;case 78:return"INVALID"}},"anonymous"),rules:[/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:style\s+)/i,/^(?:[\w,]+\s+)/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[9,10],inclusive:!1},struct:{rules:[9,10,22,26,29,35,42,43,44,45,54,55,56,57,71,72,73,74,75],inclusive:!1},FLOATING_NOTE_ID:{rules:[64],inclusive:!1},FLOATING_NOTE:{rules:[61,62,63],inclusive:!1},NOTE_TEXT:{rules:[66,67],inclusive:!1},NOTE_ID:{rules:[65],inclusive:!1},NOTE:{rules:[58,59,60],inclusive:!1},STYLEDEF_STYLEOPTS:{rules:[],inclusive:!1},STYLEDEF_STYLES:{rules:[31],inclusive:!1},STYLE_IDS:{rules:[],inclusive:!1},STYLE:{rules:[30],inclusive:!1},CLASS_STYLE:{rules:[28],inclusive:!1},CLASS:{rules:[27],inclusive:!1},CLASSDEFID:{rules:[25],inclusive:!1},CLASSDEF:{rules:[23,24],inclusive:!1},acc_descr_multiline:{rules:[20,21],inclusive:!1},acc_descr:{rules:[18],inclusive:!1},acc_title:{rules:[16],inclusive:!1},SCALE:{rules:[13,14,33,34],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[48],inclusive:!1},STATE_STRING:{rules:[49,50],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[9,10,36,37,38,39,40,41,46,47,51,52,53],inclusive:!1},ID:{rules:[9,10],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,10,11,12,15,17,19,22,26,29,32,35,53,57,68,69,70,71,72,73,74,76,77,78],inclusive:!0}}};return $}();kt.lexer=me;function ut(){this.yy={}}return r(ut,"Parser"),ut.prototype=kt,kt.Parser=ut,new ut}();Ot.parser=Ot;var Is=Ot,Be="LR",Qt="TB",_t="state",wt="relation",Ye="classDef",Fe="style",Ve="applyClass",st="default",Zt="divider",te="fill:none",ee="fill: #333",se="c",ie="text",re="normal",It="rect",Rt="rectWithTitle",Me="stateStart",Ue="stateEnd",Ht="divider",zt="roundedWithTitle",je="note",He="noteGroup",it="statediagram",ze="state",We=`${it}-${ze}`,ae="transition",Xe="note",Ke="note-edge",Je=`${ae} ${Ke}`,qe=`${it}-${Xe}`,Qe="cluster",Ze=`${it}-${Qe}`,ts="cluster-alt",es=`${it}-${ts}`,ne="parent",le="note",ss="state",$t="----",is=`${$t}${le}`,Wt=`${$t}${ne}`,oe=r((t,e=Qt)=>{if(!t.doc)return e;let l=e;for(const n of t.doc)n.stmt==="dir"&&(l=n.value);return l},"getDir"),rs=r(function(t,e){return e.db.extract(e.db.getRootDocV2()),e.db.getClasses()},"getClasses"),as=r(function(t,e,l,n){return jt(this,null,function*(){var E,m;b.info("REF0:"),b.info("Drawing state diagram (v2)",e);const{securityLevel:h,state:s,layout:f}=A();n.db.extract(n.db.getRootDocV2());const y=n.db.getData(),a=Ce(e,h);y.type=n.type,y.layoutAlgorithm=f,y.nodeSpacing=(s==null?void 0:s.nodeSpacing)||50,y.rankSpacing=(s==null?void 0:s.rankSpacing)||50,y.markers=["barb"],y.diagramId=e,yield we(y,a);const _=8;$e.insertTitle(a,"statediagramTitleText",(E=s==null?void 0:s.titleTopMargin)!=null?E:25,n.db.getDiagramTitle()),xe(a,_,it,(m=s==null?void 0:s.useMaxWidth)!=null?m:!0)})},"draw"),Rs={getClasses:rs,draw:as,getDir:oe},St=new Map,P=0;function yt(t="",e=0,l="",n=$t){const h=l!==null&&l.length>0?`${n}${l}`:"";return`${ss}-${t}${h}-${e}`}r(yt,"stateDomId");var ns=r((t,e,l,n,h,s,f,y)=>{b.trace("items",e),e.forEach(a=>{switch(a.stmt){case _t:tt(t,a,l,n,h,s,f,y);break;case st:tt(t,a,l,n,h,s,f,y);break;case wt:{tt(t,a.state1,l,n,h,s,f,y),tt(t,a.state2,l,n,h,s,f,y);const _={id:"edge"+P,start:a.state1.id,end:a.state2.id,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:te,labelStyle:"",label:H.sanitizeText(a.description,A()),arrowheadStyle:ee,labelpos:se,labelType:ie,thickness:re,classes:ae,look:f};h.push(_),P++}break}})},"setupDoc"),Xt=r((t,e=Qt)=>{let l=e;if(t.doc)for(const n of t.doc)n.stmt==="dir"&&(l=n.value);return l},"getDir");function Z(t,e,l){if(!e.id||e.id==="</join></fork>"||e.id==="</choice>")return;e.cssClasses&&(Array.isArray(e.cssCompiledStyles)||(e.cssCompiledStyles=[]),e.cssClasses.split(" ").forEach(h=>{if(l.get(h)){const s=l.get(h);e.cssCompiledStyles=[...e.cssCompiledStyles,...s.styles]}}));const n=t.find(h=>h.id===e.id);n?Object.assign(n,e):t.push(e)}r(Z,"insertOrUpdateNode");function ce(t){var e,l;return(l=(e=t==null?void 0:t.classes)==null?void 0:e.join(" "))!=null?l:""}r(ce,"getClassesFromDbInfo");function ue(t){var e;return(e=t==null?void 0:t.styles)!=null?e:[]}r(ue,"getStylesFromDbInfo");var tt=r((t,e,l,n,h,s,f,y)=>{var B,Y;const a=e.id,_=l.get(a),E=ce(_),m=ue(_);if(b.info("dataFetcher parsedItem",e,_,m),a!=="root"){let I=It;e.start===!0?I=Me:e.start===!1&&(I=Ue),e.type!==st&&(I=e.type),St.get(a)||St.set(a,{id:a,shape:I,description:H.sanitizeText(a,A()),cssClasses:`${E} ${We}`,cssStyles:m});const p=St.get(a);e.description&&(Array.isArray(p.description)?(p.shape=Rt,p.description.push(e.description)):((B=p.description)==null?void 0:B.length)>0?(p.shape=Rt,p.description===a?p.description=[e.description]:p.description=[p.description,e.description]):(p.shape=It,p.description=e.description),p.description=H.sanitizeTextOrArray(p.description,A())),((Y=p.description)==null?void 0:Y.length)===1&&p.shape===Rt&&(p.type==="group"?p.shape=zt:p.shape=It),!p.type&&e.doc&&(b.info("Setting cluster for XCX",a,Xt(e)),p.type="group",p.isGroup=!0,p.dir=Xt(e),p.shape=e.type===Zt?Ht:zt,p.cssClasses=`${p.cssClasses} ${Ze} ${s?es:""}`);const L={labelStyle:"",shape:p.shape,label:p.description,cssClasses:p.cssClasses,cssCompiledStyles:[],cssStyles:p.cssStyles,id:a,dir:p.dir,domId:yt(a,P),type:p.type,isGroup:p.type==="group",padding:8,rx:10,ry:10,look:f};if(L.shape===Ht&&(L.label=""),t&&t.id!=="root"&&(b.trace("Setting node ",a," to be child of its parent ",t.id),L.parentId=t.id),L.centerLabel=!0,e.note){const R={labelStyle:"",shape:je,label:e.note.text,cssClasses:qe,cssStyles:[],cssCompilesStyles:[],id:a+is+"-"+P,domId:yt(a,P,le),type:p.type,isGroup:p.type==="group",padding:A().flowchart.padding,look:f,position:e.note.position},F=a+Wt,V={labelStyle:"",shape:He,label:e.note.text,cssClasses:p.cssClasses,cssStyles:[],id:a+Wt,domId:yt(a,P,ne),type:"group",isGroup:!0,padding:16,look:f,position:e.note.position};P++,V.id=F,R.parentId=F,Z(n,V,y),Z(n,R,y),Z(n,L,y);let N=a,w=R.id;e.note.position==="left of"&&(N=R.id,w=a),h.push({id:N+"-"+w,start:N,end:w,arrowhead:"none",arrowTypeEnd:"",style:te,labelStyle:"",classes:Je,arrowheadStyle:ee,labelpos:se,labelType:ie,thickness:re,look:f})}else Z(n,L,y)}e.doc&&(b.trace("Adding nodes children "),ns(e,e.doc,l,n,h,!s,f,y))},"dataFetcher"),ls=r(()=>{St.clear(),P=0},"reset"),Pt="[*]",he="start",de=Pt,fe="end",Kt="color",Jt="fill",os="bgFill",cs=",";function Gt(){return new Map}r(Gt,"newClassesList");var Tt=[],Bt=[],pe=Be,Et=[],K=Gt(),Se=r(()=>({relations:[],states:new Map,documents:{}}),"newDoc"),vt={root:Se()},D=vt.root,et=0,qt=0,us={LINE:0,DOTTED_LINE:1},hs={AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3},pt=r(t=>JSON.parse(JSON.stringify(t)),"clone"),ds=r(t=>{b.info("Setting root doc",t),Et=t},"setRootDoc"),fs=r(()=>Et,"getRootDoc"),gt=r((t,e,l)=>{if(e.stmt===wt)gt(t,e.state1,!0),gt(t,e.state2,!1);else if(e.stmt===_t&&(e.id==="[*]"?(e.id=l?t.id+"_start":t.id+"_end",e.start=l):e.id=e.id.trim()),e.doc){const n=[];let h=[],s;for(s=0;s<e.doc.length;s++)if(e.doc[s].type===Zt){const f=pt(e.doc[s]);f.doc=pt(h),n.push(f),h=[]}else h.push(e.doc[s]);if(n.length>0&&h.length>0){const f={stmt:_t,id:Ge(),type:"divider",doc:pt(h)};n.push(pt(f)),e.doc=n}e.doc.forEach(f=>gt(e,f,!0))}},"docTranslator"),Yt=r(()=>(gt({id:"root"},{id:"root",doc:Et},!0),{id:"root",doc:Et}),"getRootDocV2"),ps=r(t=>{let e;t.doc?e=t.doc:e=t,b.info(e),ye(!0),b.info("Extract initial document:",e),e.forEach(s=>{switch(b.warn("Statement",s.stmt),s.stmt){case _t:G(s.id.trim(),s.type,s.doc,s.description,s.note,s.classes,s.styles,s.textStyles);break;case wt:ve(s.state1,s.state2,s.description);break;case Ye:be(s.id.trim(),s.classes);break;case Fe:{const f=s.id.trim().split(","),y=s.styleClass.split(",");f.forEach(a=>{let _=z(a);if(_===void 0){const E=a.trim();G(E),_=z(E)}_.styles=y.map(E=>{var m;return(m=E.replace(/;/g,""))==null?void 0:m.trim()})})}break;case Ve:Ft(s.id.trim(),s.styleClass);break}});const l=ge(),h=A().look;ls(),tt(void 0,Yt(),l,Tt,Bt,!0,h,K),Tt.forEach(s=>{if(Array.isArray(s.label)){if(s.description=s.label.slice(1),s.isGroup&&s.description.length>0)throw new Error("Group nodes can only have label. Remove the additional description for node ["+s.id+"]");s.label=s.label[0]}})},"extract"),G=r(function(t,e=st,l=null,n=null,h=null,s=null,f=null,y=null){const a=t==null?void 0:t.trim();if(D.states.has(a)?(D.states.get(a).doc||(D.states.get(a).doc=l),D.states.get(a).type||(D.states.get(a).type=e)):(b.info("Adding state ",a,n),D.states.set(a,{id:a,descriptions:[],type:e,doc:l,note:h,classes:[],styles:[],textStyles:[]})),n&&(b.info("Setting state description",a,n),typeof n=="string"&&Nt(a,n.trim()),typeof n=="object"&&n.forEach(_=>Nt(a,_.trim()))),h){const _=D.states.get(a);_.note=h,_.note.text=H.sanitizeText(_.note.text,A())}s&&(b.info("Setting state classes",a,s),(typeof s=="string"?[s]:s).forEach(E=>Ft(a,E.trim()))),f&&(b.info("Setting state styles",a,f),(typeof f=="string"?[f]:f).forEach(E=>Es(a,E.trim()))),y&&(b.info("Setting state styles",a,f),(typeof y=="string"?[y]:y).forEach(E=>vs(a,E.trim())))},"addState"),ye=r(function(t){Tt=[],Bt=[],vt={root:Se()},D=vt.root,et=0,K=Gt(),t||Pe()},"clear"),z=r(function(t){return D.states.get(t)},"getState"),ge=r(function(){return D.states},"getStates"),Ss=r(function(){b.info("Documents = ",vt)},"logDocuments"),ys=r(function(){return D.relations},"getRelations");function bt(t=""){let e=t;return t===Pt&&(et++,e=`${he}${et}`),e}r(bt,"startIdIfNeeded");function mt(t="",e=st){return t===Pt?he:e}r(mt,"startTypeIfNeeded");function _e(t=""){let e=t;return t===de&&(et++,e=`${fe}${et}`),e}r(_e,"endIdIfNeeded");function Te(t="",e=st){return t===de?fe:e}r(Te,"endTypeIfNeeded");function Ee(t,e,l){let n=bt(t.id.trim()),h=mt(t.id.trim(),t.type),s=bt(e.id.trim()),f=mt(e.id.trim(),e.type);G(n,h,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles),G(s,f,e.doc,e.description,e.note,e.classes,e.styles,e.textStyles),D.relations.push({id1:n,id2:s,relationTitle:H.sanitizeText(l,A())})}r(Ee,"addRelationObjs");var ve=r(function(t,e,l){if(typeof t=="object")Ee(t,e,l);else{const n=bt(t.trim()),h=mt(t),s=_e(e.trim()),f=Te(e);G(n,h),G(s,f),D.relations.push({id1:n,id2:s,title:H.sanitizeText(l,A())})}},"addRelation"),Nt=r(function(t,e){const l=D.states.get(t),n=e.startsWith(":")?e.replace(":","").trim():e;l.descriptions.push(H.sanitizeText(n,A()))},"addDescription"),gs=r(function(t){return t.substring(0,1)===":"?t.substr(2).trim():t.trim()},"cleanupLabel"),_s=r(()=>(qt++,"divider-id-"+qt),"getDividerId"),be=r(function(t,e=""){K.has(t)||K.set(t,{id:t,styles:[],textStyles:[]});const l=K.get(t);e!=null&&e.split(cs).forEach(n=>{const h=n.replace(/([^;]*);/,"$1").trim();if(RegExp(Kt).exec(n)){const f=h.replace(Jt,os).replace(Kt,Jt);l.textStyles.push(f)}l.styles.push(h)})},"addStyleClass"),Ts=r(function(){return K},"getClasses"),Ft=r(function(t,e){t.split(",").forEach(function(l){let n=z(l);if(n===void 0){const h=l.trim();G(h),n=z(h)}n.classes.push(e)})},"setCssClass"),Es=r(function(t,e){const l=z(t);l!==void 0&&l.styles.push(e)},"setStyle"),vs=r(function(t,e){const l=z(t);l!==void 0&&l.textStyles.push(e)},"setTextStyle"),bs=r(()=>pe,"getDirection"),ms=r(t=>{pe=t},"setDirection"),ks=r(t=>t&&t[0]===":"?t.substr(1).trim():t.trim(),"trimColon"),Ds=r(()=>{const t=A();return{nodes:Tt,edges:Bt,other:{},config:t,direction:oe(Yt())}},"getData"),Os={getConfig:r(()=>A().state,"getConfig"),getData:Ds,addState:G,clear:ye,getState:z,getStates:ge,getRelations:ys,getClasses:Ts,getDirection:bs,addRelation:ve,getDividerId:_s,setDirection:ms,cleanupLabel:gs,lineType:us,relationType:hs,logDocuments:Ss,getRootDoc:fs,setRootDoc:ds,getRootDocV2:Yt,extract:ps,trimColon:ks,getAccTitle:Ae,setAccTitle:Le,getAccDescription:Ie,setAccDescription:Re,addStyleClass:be,setCssClass:Ft,addDescription:Nt,setDiagramTitle:Oe,getDiagramTitle:Ne},Cs=r(t=>`
defs #statediagram-barbEnd {
    fill: ${t.transitionColor};
    stroke: ${t.transitionColor};
  }
g.stateGroup text {
  fill: ${t.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${t.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${t.stateLabelColor};
}

g.stateGroup rect {
  fill: ${t.mainBkg};
  stroke: ${t.nodeBorder};
}

g.stateGroup line {
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${t.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${t.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${t.noteBorderColor};
  fill: ${t.noteBkgColor};

  text {
    fill: ${t.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${t.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${t.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${t.edgeLabelBackground};
  p {
    background-color: ${t.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${t.edgeLabelBackground};
    fill: ${t.edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${t.transitionLabelColor||t.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${t.transitionLabelColor||t.tertiaryTextColor};
}

.stateLabel text {
  fill: ${t.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node .fork-join {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node circle.state-end {
  fill: ${t.innerEndBackground};
  stroke: ${t.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${t.compositeBackground||t.background};
  // stroke: ${t.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${t.stateBkg||t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${t.lineColor};
}

.statediagram-cluster rect {
  fill: ${t.compositeTitleBackground};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${t.stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${t.stateBorder||t.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${t.compositeBackground||t.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${t.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${t.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${t.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${t.lineColor};
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${t.textColor};
}
`,"getStyles"),Ns=Cs;export{Os as a,Ns as b,Rs as c,Is as s};
