import{_ as a,aD as ui,l as Ft,a2 as Bt,a1 as gi,H as At,G as Xt,F as xi,i as di,r as Nt,s as pi,g as fi,q as mi,b as yi,c as bi,t as Ai,K as wi,k as Ci}from"./Using existing ones-BkW63LeF.js";import{i as Si}from"./init-Gi6I4Gst.js";import{o as _i}from"./ordinal-Cboi1Yqb.js";import{l as Wt}from"./linear-D8uX4L7D.js";import"./jsx-runtime-BcCOBRXo.js";import"./index-CNk6hRaE.js";import"./index-BI4Okn8T.js";import"./iframe-Cp3WHm4m.js";import"../sb-preview/runtime.js";import"./dayjs.min-KGLNs1IR.js";import"./index-DrFu-skq.js";import"./Serializer-OW4gUFyn.js";function ki(e,t,i){e=+e,t=+t,i=(n=arguments.length)<2?(t=e,e=0,1):n<3?1:+i;for(var s=-1,n=Math.max(0,Math.ceil((t-e)/i))|0,o=new Array(n);++s<n;)o[s]=e+s*i;return o}function pt(){var e=_i().unknown(void 0),t=e.domain,i=e.range,s=0,n=1,o,u,f=!1,p=0,k=0,R=.5;delete e.unknown;function w(){var y=t().length,D=n<s,S=D?n:s,v=D?s:n;o=(v-S)/Math.max(1,y-p+k*2),f&&(o=Math.floor(o)),S+=(v-S-o*(y-p))*R,u=o*(1-p),f&&(S=Math.round(S),u=Math.round(u));var m=ki(y).map(function(_){return S+o*_});return i(D?m.reverse():m)}return e.domain=function(y){return arguments.length?(t(y),w()):t()},e.range=function(y){return arguments.length?([s,n]=y,s=+s,n=+n,w()):[s,n]},e.rangeRound=function(y){return[s,n]=y,s=+s,n=+n,f=!0,w()},e.bandwidth=function(){return u},e.step=function(){return o},e.round=function(y){return arguments.length?(f=!!y,w()):f},e.padding=function(y){return arguments.length?(p=Math.min(1,k=+y),w()):p},e.paddingInner=function(y){return arguments.length?(p=Math.min(1,y),w()):p},e.paddingOuter=function(y){return arguments.length?(k=+y,w()):k},e.align=function(y){return arguments.length?(R=Math.max(0,Math.min(1,y)),w()):R},e.copy=function(){return pt(t(),[s,n]).round(f).paddingInner(p).paddingOuter(k).align(R)},Si.apply(w(),arguments)}var ft=function(){var e=a(function(B,h,c,g){for(c=c||{},g=B.length;g--;c[B[g]]=h);return c},"o"),t=[1,10,12,14,16,18,19,21,23],i=[2,6],s=[1,3],n=[1,5],o=[1,6],u=[1,7],f=[1,5,10,12,14,16,18,19,21,23,34,35,36],p=[1,25],k=[1,26],R=[1,28],w=[1,29],y=[1,30],D=[1,31],S=[1,32],v=[1,33],m=[1,34],_=[1,35],l=[1,36],E=[1,37],X=[1,43],vt=[1,42],Pt=[1,47],et=[1,50],C=[1,10,12,14,16,18,19,21,23,34,35,36],lt=[1,10,12,14,16,18,19,21,23,24,26,27,28,34,35,36],I=[1,10,12,14,16,18,19,21,23,24,26,27,28,34,35,36,41,42,43,44,45,46,47,48,49,50],Lt=[1,64],ct={trace:a(function(){},"trace"),yy:{},symbols_:{error:2,start:3,eol:4,XYCHART:5,chartConfig:6,document:7,CHART_ORIENTATION:8,statement:9,title:10,text:11,X_AXIS:12,parseXAxis:13,Y_AXIS:14,parseYAxis:15,LINE:16,plotData:17,BAR:18,acc_title:19,acc_title_value:20,acc_descr:21,acc_descr_value:22,acc_descr_multiline_value:23,SQUARE_BRACES_START:24,commaSeparatedNumbers:25,SQUARE_BRACES_END:26,NUMBER_WITH_DECIMAL:27,COMMA:28,xAxisData:29,bandData:30,ARROW_DELIMITER:31,commaSeparatedTexts:32,yAxisData:33,NEWLINE:34,SEMI:35,EOF:36,alphaNum:37,STR:38,MD_STR:39,alphaNumToken:40,AMP:41,NUM:42,ALPHA:43,PLUS:44,EQUALS:45,MULT:46,DOT:47,BRKT:48,MINUS:49,UNDERSCORE:50,$accept:0,$end:1},terminals_:{2:"error",5:"XYCHART",8:"CHART_ORIENTATION",10:"title",12:"X_AXIS",14:"Y_AXIS",16:"LINE",18:"BAR",19:"acc_title",20:"acc_title_value",21:"acc_descr",22:"acc_descr_value",23:"acc_descr_multiline_value",24:"SQUARE_BRACES_START",26:"SQUARE_BRACES_END",27:"NUMBER_WITH_DECIMAL",28:"COMMA",31:"ARROW_DELIMITER",34:"NEWLINE",35:"SEMI",36:"EOF",38:"STR",39:"MD_STR",41:"AMP",42:"NUM",43:"ALPHA",44:"PLUS",45:"EQUALS",46:"MULT",47:"DOT",48:"BRKT",49:"MINUS",50:"UNDERSCORE"},productions_:[0,[3,2],[3,3],[3,2],[3,1],[6,1],[7,0],[7,2],[9,2],[9,2],[9,2],[9,2],[9,2],[9,3],[9,2],[9,3],[9,2],[9,2],[9,1],[17,3],[25,3],[25,1],[13,1],[13,2],[13,1],[29,1],[29,3],[30,3],[32,3],[32,1],[15,1],[15,2],[15,1],[33,3],[4,1],[4,1],[4,1],[11,1],[11,1],[11,1],[37,1],[37,2],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1]],performAction:a(function(h,c,g,x,A,r,N){var d=r.length-1;switch(A){case 5:x.setOrientation(r[d]);break;case 9:x.setDiagramTitle(r[d].text.trim());break;case 12:x.setLineData({text:"",type:"text"},r[d]);break;case 13:x.setLineData(r[d-1],r[d]);break;case 14:x.setBarData({text:"",type:"text"},r[d]);break;case 15:x.setBarData(r[d-1],r[d]);break;case 16:this.$=r[d].trim(),x.setAccTitle(this.$);break;case 17:case 18:this.$=r[d].trim(),x.setAccDescription(this.$);break;case 19:this.$=r[d-1];break;case 20:this.$=[Number(r[d-2]),...r[d]];break;case 21:this.$=[Number(r[d])];break;case 22:x.setXAxisTitle(r[d]);break;case 23:x.setXAxisTitle(r[d-1]);break;case 24:x.setXAxisTitle({type:"text",text:""});break;case 25:x.setXAxisBand(r[d]);break;case 26:x.setXAxisRangeData(Number(r[d-2]),Number(r[d]));break;case 27:this.$=r[d-1];break;case 28:this.$=[r[d-2],...r[d]];break;case 29:this.$=[r[d]];break;case 30:x.setYAxisTitle(r[d]);break;case 31:x.setYAxisTitle(r[d-1]);break;case 32:x.setYAxisTitle({type:"text",text:""});break;case 33:x.setYAxisRangeData(Number(r[d-2]),Number(r[d]));break;case 37:this.$={text:r[d],type:"text"};break;case 38:this.$={text:r[d],type:"text"};break;case 39:this.$={text:r[d],type:"markdown"};break;case 40:this.$=r[d];break;case 41:this.$=r[d-1]+""+r[d];break}},"anonymous"),table:[e(t,i,{3:1,4:2,7:4,5:s,34:n,35:o,36:u}),{1:[3]},e(t,i,{4:2,7:4,3:8,5:s,34:n,35:o,36:u}),e(t,i,{4:2,7:4,6:9,3:10,5:s,8:[1,11],34:n,35:o,36:u}),{1:[2,4],9:12,10:[1,13],12:[1,14],14:[1,15],16:[1,16],18:[1,17],19:[1,18],21:[1,19],23:[1,20]},e(f,[2,34]),e(f,[2,35]),e(f,[2,36]),{1:[2,1]},e(t,i,{4:2,7:4,3:21,5:s,34:n,35:o,36:u}),{1:[2,3]},e(f,[2,5]),e(t,[2,7],{4:22,34:n,35:o,36:u}),{11:23,37:24,38:p,39:k,40:27,41:R,42:w,43:y,44:D,45:S,46:v,47:m,48:_,49:l,50:E},{11:39,13:38,24:X,27:vt,29:40,30:41,37:24,38:p,39:k,40:27,41:R,42:w,43:y,44:D,45:S,46:v,47:m,48:_,49:l,50:E},{11:45,15:44,27:Pt,33:46,37:24,38:p,39:k,40:27,41:R,42:w,43:y,44:D,45:S,46:v,47:m,48:_,49:l,50:E},{11:49,17:48,24:et,37:24,38:p,39:k,40:27,41:R,42:w,43:y,44:D,45:S,46:v,47:m,48:_,49:l,50:E},{11:52,17:51,24:et,37:24,38:p,39:k,40:27,41:R,42:w,43:y,44:D,45:S,46:v,47:m,48:_,49:l,50:E},{20:[1,53]},{22:[1,54]},e(C,[2,18]),{1:[2,2]},e(C,[2,8]),e(C,[2,9]),e(lt,[2,37],{40:55,41:R,42:w,43:y,44:D,45:S,46:v,47:m,48:_,49:l,50:E}),e(lt,[2,38]),e(lt,[2,39]),e(I,[2,40]),e(I,[2,42]),e(I,[2,43]),e(I,[2,44]),e(I,[2,45]),e(I,[2,46]),e(I,[2,47]),e(I,[2,48]),e(I,[2,49]),e(I,[2,50]),e(I,[2,51]),e(C,[2,10]),e(C,[2,22],{30:41,29:56,24:X,27:vt}),e(C,[2,24]),e(C,[2,25]),{31:[1,57]},{11:59,32:58,37:24,38:p,39:k,40:27,41:R,42:w,43:y,44:D,45:S,46:v,47:m,48:_,49:l,50:E},e(C,[2,11]),e(C,[2,30],{33:60,27:Pt}),e(C,[2,32]),{31:[1,61]},e(C,[2,12]),{17:62,24:et},{25:63,27:Lt},e(C,[2,14]),{17:65,24:et},e(C,[2,16]),e(C,[2,17]),e(I,[2,41]),e(C,[2,23]),{27:[1,66]},{26:[1,67]},{26:[2,29],28:[1,68]},e(C,[2,31]),{27:[1,69]},e(C,[2,13]),{26:[1,70]},{26:[2,21],28:[1,71]},e(C,[2,15]),e(C,[2,26]),e(C,[2,27]),{11:59,32:72,37:24,38:p,39:k,40:27,41:R,42:w,43:y,44:D,45:S,46:v,47:m,48:_,49:l,50:E},e(C,[2,33]),e(C,[2,19]),{25:73,27:Lt},{26:[2,28]},{26:[2,20]}],defaultActions:{8:[2,1],10:[2,3],21:[2,2],72:[2,28],73:[2,20]},parseError:a(function(h,c){if(c.recoverable)this.trace(h);else{var g=new Error(h);throw g.hash=c,g}},"parseError"),parse:a(function(h){var c=this,g=[0],x=[],A=[null],r=[],N=this.table,d="",nt=0,Et=0,oi=2,It=1,hi=r.slice.call(arguments,1),T=Object.create(this.lexer),W={yy:{}};for(var ut in this.yy)Object.prototype.hasOwnProperty.call(this.yy,ut)&&(W.yy[ut]=this.yy[ut]);T.setInput(h,W.yy),W.yy.lexer=T,W.yy.parser=this,typeof T.yylloc=="undefined"&&(T.yylloc={});var gt=T.yylloc;r.push(gt);var li=T.options&&T.options.ranges;typeof W.yy.parseError=="function"?this.parseError=W.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ci(L){g.length=g.length-2*L,A.length=A.length-L,r.length=r.length-L}a(ci,"popStack");function Mt(){var L;return L=x.pop()||T.lex()||It,typeof L!="number"&&(L instanceof Array&&(x=L,L=x.pop()),L=c.symbols_[L]||L),L}a(Mt,"lex");for(var P,O,M,xt,z={},at,V,Vt,rt;;){if(O=g[g.length-1],this.defaultActions[O]?M=this.defaultActions[O]:((P===null||typeof P=="undefined")&&(P=Mt()),M=N[O]&&N[O][P]),typeof M=="undefined"||!M.length||!M[0]){var dt="";rt=[];for(at in N[O])this.terminals_[at]&&at>oi&&rt.push("'"+this.terminals_[at]+"'");T.showPosition?dt="Parse error on line "+(nt+1)+`:
`+T.showPosition()+`
Expecting `+rt.join(", ")+", got '"+(this.terminals_[P]||P)+"'":dt="Parse error on line "+(nt+1)+": Unexpected "+(P==It?"end of input":"'"+(this.terminals_[P]||P)+"'"),this.parseError(dt,{text:T.match,token:this.terminals_[P]||P,line:T.yylineno,loc:gt,expected:rt})}if(M[0]instanceof Array&&M.length>1)throw new Error("Parse Error: multiple actions possible at state: "+O+", token: "+P);switch(M[0]){case 1:g.push(P),A.push(T.yytext),r.push(T.yylloc),g.push(M[1]),P=null,Et=T.yyleng,d=T.yytext,nt=T.yylineno,gt=T.yylloc;break;case 2:if(V=this.productions_[M[1]][1],z.$=A[A.length-V],z._$={first_line:r[r.length-(V||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(V||1)].first_column,last_column:r[r.length-1].last_column},li&&(z._$.range=[r[r.length-(V||1)].range[0],r[r.length-1].range[1]]),xt=this.performAction.apply(z,[d,Et,nt,W.yy,M[1],A,r].concat(hi)),typeof xt!="undefined")return xt;V&&(g=g.slice(0,-1*V*2),A=A.slice(0,-1*V),r=r.slice(0,-1*V)),g.push(this.productions_[M[1]][0]),A.push(z.$),r.push(z._$),Vt=N[g[g.length-2]][g[g.length-1]],g.push(Vt);break;case 3:return!0}}return!0},"parse")},ri=function(){var B={EOF:1,parseError:a(function(c,g){if(this.yy.parser)this.yy.parser.parseError(c,g);else throw new Error(c)},"parseError"),setInput:a(function(h,c){return this.yy=c||this.yy||{},this._input=h,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:a(function(){var h=this._input[0];this.yytext+=h,this.yyleng++,this.offset++,this.match+=h,this.matched+=h;var c=h.match(/(?:\r\n?|\n).*/g);return c?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),h},"input"),unput:a(function(h){var c=h.length,g=h.split(/(?:\r\n?|\n)/g);this._input=h+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-c),this.offset-=c;var x=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),g.length-1&&(this.yylineno-=g.length-1);var A=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:g?(g.length===x.length?this.yylloc.first_column:0)+x[x.length-g.length].length-g[0].length:this.yylloc.first_column-c},this.options.ranges&&(this.yylloc.range=[A[0],A[0]+this.yyleng-c]),this.yyleng=this.yytext.length,this},"unput"),more:a(function(){return this._more=!0,this},"more"),reject:a(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:a(function(h){this.unput(this.match.slice(h))},"less"),pastInput:a(function(){var h=this.matched.substr(0,this.matched.length-this.match.length);return(h.length>20?"...":"")+h.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:a(function(){var h=this.match;return h.length<20&&(h+=this._input.substr(0,20-h.length)),(h.substr(0,20)+(h.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:a(function(){var h=this.pastInput(),c=new Array(h.length+1).join("-");return h+this.upcomingInput()+`
`+c+"^"},"showPosition"),test_match:a(function(h,c){var g,x,A;if(this.options.backtrack_lexer&&(A={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(A.yylloc.range=this.yylloc.range.slice(0))),x=h[0].match(/(?:\r\n?|\n).*/g),x&&(this.yylineno+=x.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:x?x[x.length-1].length-x[x.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+h[0].length},this.yytext+=h[0],this.match+=h[0],this.matches=h,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(h[0].length),this.matched+=h[0],g=this.performAction.call(this,this.yy,this,c,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),g)return g;if(this._backtrack){for(var r in A)this[r]=A[r];return!1}return!1},"test_match"),next:a(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var h,c,g,x;this._more||(this.yytext="",this.match="");for(var A=this._currentRules(),r=0;r<A.length;r++)if(g=this._input.match(this.rules[A[r]]),g&&(!c||g[0].length>c[0].length)){if(c=g,x=r,this.options.backtrack_lexer){if(h=this.test_match(g,A[r]),h!==!1)return h;if(this._backtrack){c=!1;continue}else return!1}else if(!this.options.flex)break}return c?(h=this.test_match(c,A[x]),h!==!1?h:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:a(function(){var c=this.next();return c||this.lex()},"lex"),begin:a(function(c){this.conditionStack.push(c)},"begin"),popState:a(function(){var c=this.conditionStack.length-1;return c>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:a(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:a(function(c){return c=this.conditionStack.length-1-Math.abs(c||0),c>=0?this.conditionStack[c]:"INITIAL"},"topState"),pushState:a(function(c){this.begin(c)},"pushState"),stateStackSize:a(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:a(function(c,g,x,A){switch(x){case 0:break;case 1:break;case 2:return this.popState(),34;case 3:return this.popState(),34;case 4:return 34;case 5:break;case 6:return 10;case 7:return this.pushState("acc_title"),19;case 8:return this.popState(),"acc_title_value";case 9:return this.pushState("acc_descr"),21;case 10:return this.popState(),"acc_descr_value";case 11:this.pushState("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 5;case 15:return 8;case 16:return this.pushState("axis_data"),"X_AXIS";case 17:return this.pushState("axis_data"),"Y_AXIS";case 18:return this.pushState("axis_band_data"),24;case 19:return 31;case 20:return this.pushState("data"),16;case 21:return this.pushState("data"),18;case 22:return this.pushState("data_inner"),24;case 23:return 27;case 24:return this.popState(),26;case 25:this.popState();break;case 26:this.pushState("string");break;case 27:this.popState();break;case 28:return"STR";case 29:return 24;case 30:return 26;case 31:return 43;case 32:return"COLON";case 33:return 44;case 34:return 28;case 35:return 45;case 36:return 46;case 37:return 48;case 38:return 50;case 39:return 47;case 40:return 41;case 41:return 49;case 42:return 42;case 43:break;case 44:return 35;case 45:return 36}},"anonymous"),rules:[/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:(\r?\n))/i,/^(?:(\r?\n))/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:title\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:\{)/i,/^(?:[^\}]*)/i,/^(?:xychart-beta\b)/i,/^(?:(?:vertical|horizontal))/i,/^(?:x-axis\b)/i,/^(?:y-axis\b)/i,/^(?:\[)/i,/^(?:-->)/i,/^(?:line\b)/i,/^(?:bar\b)/i,/^(?:\[)/i,/^(?:[+-]?(?:\d+(?:\.\d+)?|\.\d+))/i,/^(?:\])/i,/^(?:(?:`\)                                    \{ this\.pushState\(md_string\); \}\n<md_string>\(\?:\(\?!`"\)\.\)\+                  \{ return MD_STR; \}\n<md_string>\(\?:`))/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:[A-Za-z]+)/i,/^(?::)/i,/^(?:\+)/i,/^(?:,)/i,/^(?:=)/i,/^(?:\*)/i,/^(?:#)/i,/^(?:[\_])/i,/^(?:\.)/i,/^(?:&)/i,/^(?:-)/i,/^(?:[0-9]+)/i,/^(?:\s+)/i,/^(?:;)/i,/^(?:$)/i],conditions:{data_inner:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,23,24,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},data:{rules:[0,1,3,4,5,6,7,9,11,14,15,16,17,20,21,22,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},axis_band_data:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,24,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},axis_data:{rules:[0,1,2,4,5,6,7,9,11,14,15,16,17,18,19,20,21,23,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},title:{rules:[],inclusive:!1},md_string:{rules:[],inclusive:!1},string:{rules:[27,28],inclusive:!1},INITIAL:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0}}};return B}();ct.lexer=ri;function st(){this.yy={}}return a(st,"Parser"),st.prototype=ct,ct.Parser=st,new st}();ft.parser=ft;var Ri=ft;function mt(e){return e.type==="bar"}a(mt,"isBarPlot");function wt(e){return e.type==="band"}a(wt,"isBandAxisData");function F(e){return e.type==="linear"}a(F,"isLinearAxisData");var $,Yt=($=class{constructor(t){this.parentGroup=t}getMaxDimension(t,i){if(!this.parentGroup)return{width:t.reduce((o,u)=>Math.max(u.length,o),0)*i,height:i};const s={width:0,height:0},n=this.parentGroup.append("g").attr("visibility","hidden").attr("font-size",i);for(const o of t){const u=ui(n,1,o),f=u?u.width:o.length*i,p=u?u.height:i;s.width=Math.max(s.width,f),s.height=Math.max(s.height,p)}return n.remove(),s}},a($,"TextDimensionCalculatorWithFont"),$),Ot=.7,zt=.2,q,Ht=(q=class{constructor(t,i,s,n){this.axisConfig=t,this.title=i,this.textDimensionCalculator=s,this.axisThemeConfig=n,this.boundingRect={x:0,y:0,width:0,height:0},this.axisPosition="left",this.showTitle=!1,this.showLabel=!1,this.showTick=!1,this.showAxisLine=!1,this.outerPadding=0,this.titleTextHeight=0,this.labelTextHeight=0,this.range=[0,10],this.boundingRect={x:0,y:0,width:0,height:0},this.axisPosition="left"}setRange(t){this.range=t,this.axisPosition==="left"||this.axisPosition==="right"?this.boundingRect.height=t[1]-t[0]:this.boundingRect.width=t[1]-t[0],this.recalculateScale()}getRange(){return[this.range[0]+this.outerPadding,this.range[1]-this.outerPadding]}setAxisPosition(t){this.axisPosition=t,this.setRange(this.range)}getTickDistance(){const t=this.getRange();return Math.abs(t[0]-t[1])/this.getTickValues().length}getAxisOuterPadding(){return this.outerPadding}getLabelDimension(){return this.textDimensionCalculator.getMaxDimension(this.getTickValues().map(t=>t.toString()),this.axisConfig.labelFontSize)}recalculateOuterPaddingToDrawBar(){Ot*this.getTickDistance()>this.outerPadding*2&&(this.outerPadding=Math.floor(Ot*this.getTickDistance()/2)),this.recalculateScale()}calculateSpaceIfDrawnHorizontally(t){let i=t.height;if(this.axisConfig.showAxisLine&&i>this.axisConfig.axisLineWidth&&(i-=this.axisConfig.axisLineWidth,this.showAxisLine=!0),this.axisConfig.showLabel){const s=this.getLabelDimension(),n=zt*t.width;this.outerPadding=Math.min(s.width/2,n);const o=s.height+this.axisConfig.labelPadding*2;this.labelTextHeight=s.height,o<=i&&(i-=o,this.showLabel=!0)}if(this.axisConfig.showTick&&i>=this.axisConfig.tickLength&&(this.showTick=!0,i-=this.axisConfig.tickLength),this.axisConfig.showTitle&&this.title){const s=this.textDimensionCalculator.getMaxDimension([this.title],this.axisConfig.titleFontSize),n=s.height+this.axisConfig.titlePadding*2;this.titleTextHeight=s.height,n<=i&&(i-=n,this.showTitle=!0)}this.boundingRect.width=t.width,this.boundingRect.height=t.height-i}calculateSpaceIfDrawnVertical(t){let i=t.width;if(this.axisConfig.showAxisLine&&i>this.axisConfig.axisLineWidth&&(i-=this.axisConfig.axisLineWidth,this.showAxisLine=!0),this.axisConfig.showLabel){const s=this.getLabelDimension(),n=zt*t.height;this.outerPadding=Math.min(s.height/2,n);const o=s.width+this.axisConfig.labelPadding*2;o<=i&&(i-=o,this.showLabel=!0)}if(this.axisConfig.showTick&&i>=this.axisConfig.tickLength&&(this.showTick=!0,i-=this.axisConfig.tickLength),this.axisConfig.showTitle&&this.title){const s=this.textDimensionCalculator.getMaxDimension([this.title],this.axisConfig.titleFontSize),n=s.height+this.axisConfig.titlePadding*2;this.titleTextHeight=s.height,n<=i&&(i-=n,this.showTitle=!0)}this.boundingRect.width=t.width-i,this.boundingRect.height=t.height}calculateSpace(t){return this.axisPosition==="left"||this.axisPosition==="right"?this.calculateSpaceIfDrawnVertical(t):this.calculateSpaceIfDrawnHorizontally(t),this.recalculateScale(),{width:this.boundingRect.width,height:this.boundingRect.height}}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}getDrawableElementsForLeftAxis(){const t=[];if(this.showAxisLine){const i=this.boundingRect.x+this.boundingRect.width-this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["left-axis","axisl-line"],data:[{path:`M ${i},${this.boundingRect.y} L ${i},${this.boundingRect.y+this.boundingRect.height} `,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["left-axis","label"],data:this.getTickValues().map(i=>({text:i.toString(),x:this.boundingRect.x+this.boundingRect.width-(this.showLabel?this.axisConfig.labelPadding:0)-(this.showTick?this.axisConfig.tickLength:0)-(this.showAxisLine?this.axisConfig.axisLineWidth:0),y:this.getScaleValue(i),fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"middle",horizontalPos:"right"}))}),this.showTick){const i=this.boundingRect.x+this.boundingRect.width-(this.showAxisLine?this.axisConfig.axisLineWidth:0);t.push({type:"path",groupTexts:["left-axis","ticks"],data:this.getTickValues().map(s=>({path:`M ${i},${this.getScaleValue(s)} L ${i-this.axisConfig.tickLength},${this.getScaleValue(s)}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth}))})}return this.showTitle&&t.push({type:"text",groupTexts:["left-axis","title"],data:[{text:this.title,x:this.boundingRect.x+this.axisConfig.titlePadding,y:this.boundingRect.y+this.boundingRect.height/2,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:270,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElementsForBottomAxis(){const t=[];if(this.showAxisLine){const i=this.boundingRect.y+this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["bottom-axis","axis-line"],data:[{path:`M ${this.boundingRect.x},${i} L ${this.boundingRect.x+this.boundingRect.width},${i}`,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["bottom-axis","label"],data:this.getTickValues().map(i=>({text:i.toString(),x:this.getScaleValue(i),y:this.boundingRect.y+this.axisConfig.labelPadding+(this.showTick?this.axisConfig.tickLength:0)+(this.showAxisLine?this.axisConfig.axisLineWidth:0),fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}))}),this.showTick){const i=this.boundingRect.y+(this.showAxisLine?this.axisConfig.axisLineWidth:0);t.push({type:"path",groupTexts:["bottom-axis","ticks"],data:this.getTickValues().map(s=>({path:`M ${this.getScaleValue(s)},${i} L ${this.getScaleValue(s)},${i+this.axisConfig.tickLength}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth}))})}return this.showTitle&&t.push({type:"text",groupTexts:["bottom-axis","title"],data:[{text:this.title,x:this.range[0]+(this.range[1]-this.range[0])/2,y:this.boundingRect.y+this.boundingRect.height-this.axisConfig.titlePadding-this.titleTextHeight,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElementsForTopAxis(){const t=[];if(this.showAxisLine){const i=this.boundingRect.y+this.boundingRect.height-this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["top-axis","axis-line"],data:[{path:`M ${this.boundingRect.x},${i} L ${this.boundingRect.x+this.boundingRect.width},${i}`,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["top-axis","label"],data:this.getTickValues().map(i=>({text:i.toString(),x:this.getScaleValue(i),y:this.boundingRect.y+(this.showTitle?this.titleTextHeight+this.axisConfig.titlePadding*2:0)+this.axisConfig.labelPadding,fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}))}),this.showTick){const i=this.boundingRect.y;t.push({type:"path",groupTexts:["top-axis","ticks"],data:this.getTickValues().map(s=>({path:`M ${this.getScaleValue(s)},${i+this.boundingRect.height-(this.showAxisLine?this.axisConfig.axisLineWidth:0)} L ${this.getScaleValue(s)},${i+this.boundingRect.height-this.axisConfig.tickLength-(this.showAxisLine?this.axisConfig.axisLineWidth:0)}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth}))})}return this.showTitle&&t.push({type:"text",groupTexts:["top-axis","title"],data:[{text:this.title,x:this.boundingRect.x+this.boundingRect.width/2,y:this.boundingRect.y+this.axisConfig.titlePadding,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElements(){if(this.axisPosition==="left")return this.getDrawableElementsForLeftAxis();if(this.axisPosition==="right")throw Error("Drawing of right axis is not implemented");return this.axisPosition==="bottom"?this.getDrawableElementsForBottomAxis():this.axisPosition==="top"?this.getDrawableElementsForTopAxis():[]}},a(q,"BaseAxis"),q),G,Ti=(G=class extends Ht{constructor(t,i,s,n,o){super(t,n,o,i),this.categories=s,this.scale=pt().domain(this.categories).range(this.getRange())}setRange(t){super.setRange(t)}recalculateScale(){this.scale=pt().domain(this.categories).range(this.getRange()).paddingInner(1).paddingOuter(0).align(.5),Ft.trace("BandAxis axis final categories, range: ",this.categories,this.getRange())}getTickValues(){return this.categories}getScaleValue(t){var i;return(i=this.scale(t))!=null?i:this.getRange()[0]}},a(G,"BandAxis"),G),j,Di=(j=class extends Ht{constructor(t,i,s,n,o){super(t,n,o,i),this.domain=s,this.scale=Wt().domain(this.domain).range(this.getRange())}getTickValues(){return this.scale.ticks()}recalculateScale(){const t=[...this.domain];this.axisPosition==="left"&&t.reverse(),this.scale=Wt().domain(t).range(this.getRange())}getScaleValue(t){return this.scale(t)}},a(j,"LinearAxis"),j);function yt(e,t,i,s){const n=new Yt(s);return wt(e)?new Ti(t,i,e.categories,e.title,n):new Di(t,i,[e.min,e.max],e.title,n)}a(yt,"getAxis");var Q,vi=(Q=class{constructor(t,i,s,n){this.textDimensionCalculator=t,this.chartConfig=i,this.chartData=s,this.chartThemeConfig=n,this.boundingRect={x:0,y:0,width:0,height:0},this.showChartTitle=!1}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}calculateSpace(t){const i=this.textDimensionCalculator.getMaxDimension([this.chartData.title],this.chartConfig.titleFontSize),s=Math.max(i.width,t.width),n=i.height+2*this.chartConfig.titlePadding;return i.width<=s&&i.height<=n&&this.chartConfig.showTitle&&this.chartData.title&&(this.boundingRect.width=s,this.boundingRect.height=n,this.showChartTitle=!0),{width:this.boundingRect.width,height:this.boundingRect.height}}getDrawableElements(){const t=[];return this.showChartTitle&&t.push({groupTexts:["chart-title"],type:"text",data:[{fontSize:this.chartConfig.titleFontSize,text:this.chartData.title,verticalPos:"middle",horizontalPos:"center",x:this.boundingRect.x+this.boundingRect.width/2,y:this.boundingRect.y+this.boundingRect.height/2,fill:this.chartThemeConfig.titleColor,rotation:0}]}),t}},a(Q,"ChartTitle"),Q);function Ut(e,t,i,s){const n=new Yt(s);return new vi(n,e,t,i)}a(Ut,"getChartTitleComponent");var K,Pi=(K=class{constructor(t,i,s,n,o){this.plotData=t,this.xAxis=i,this.yAxis=s,this.orientation=n,this.plotIndex=o}getDrawableElement(){const t=this.plotData.data.map(s=>[this.xAxis.getScaleValue(s[0]),this.yAxis.getScaleValue(s[1])]);let i;return this.orientation==="horizontal"?i=Bt().y(s=>s[0]).x(s=>s[1])(t):i=Bt().x(s=>s[0]).y(s=>s[1])(t),i?[{groupTexts:["plot",`line-plot-${this.plotIndex}`],type:"path",data:[{path:i,strokeFill:this.plotData.strokeFill,strokeWidth:this.plotData.strokeWidth}]}]:[]}},a(K,"LinePlot"),K),Z,Li=(Z=class{constructor(t,i,s,n,o,u){this.barData=t,this.boundingRect=i,this.xAxis=s,this.yAxis=n,this.orientation=o,this.plotIndex=u}getDrawableElement(){const t=this.barData.data.map(o=>[this.xAxis.getScaleValue(o[0]),this.yAxis.getScaleValue(o[1])]),s=Math.min(this.xAxis.getAxisOuterPadding()*2,this.xAxis.getTickDistance())*(1-.05),n=s/2;return this.orientation==="horizontal"?[{groupTexts:["plot",`bar-plot-${this.plotIndex}`],type:"rect",data:t.map(o=>({x:this.boundingRect.x,y:o[0]-n,height:s,width:o[1]-this.boundingRect.x,fill:this.barData.fill,strokeWidth:0,strokeFill:this.barData.fill}))}]:[{groupTexts:["plot",`bar-plot-${this.plotIndex}`],type:"rect",data:t.map(o=>({x:o[0]-n,y:o[1],width:s,height:this.boundingRect.y+this.boundingRect.height-o[1],fill:this.barData.fill,strokeWidth:0,strokeFill:this.barData.fill}))}]}},a(Z,"BarPlot"),Z),J,Ei=(J=class{constructor(t,i,s){this.chartConfig=t,this.chartData=i,this.chartThemeConfig=s,this.boundingRect={x:0,y:0,width:0,height:0}}setAxes(t,i){this.xAxis=t,this.yAxis=i}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}calculateSpace(t){return this.boundingRect.width=t.width,this.boundingRect.height=t.height,{width:this.boundingRect.width,height:this.boundingRect.height}}getDrawableElements(){if(!(this.xAxis&&this.yAxis))throw Error("Axes must be passed to render Plots");const t=[];for(const[i,s]of this.chartData.plots.entries())switch(s.type){case"line":{const n=new Pi(s,this.xAxis,this.yAxis,this.chartConfig.chartOrientation,i);t.push(...n.getDrawableElement())}break;case"bar":{const n=new Li(s,this.boundingRect,this.xAxis,this.yAxis,this.chartConfig.chartOrientation,i);t.push(...n.getDrawableElement())}break}return t}},a(J,"BasePlot"),J);function $t(e,t,i){return new Ei(e,t,i)}a($t,"getPlotComponent");var tt,Ii=(tt=class{constructor(t,i,s,n){this.chartConfig=t,this.chartData=i,this.componentStore={title:Ut(t,i,s,n),plot:$t(t,i,s),xAxis:yt(i.xAxis,t.xAxis,{titleColor:s.xAxisTitleColor,labelColor:s.xAxisLabelColor,tickColor:s.xAxisTickColor,axisLineColor:s.xAxisLineColor},n),yAxis:yt(i.yAxis,t.yAxis,{titleColor:s.yAxisTitleColor,labelColor:s.yAxisLabelColor,tickColor:s.yAxisTickColor,axisLineColor:s.yAxisLineColor},n)}}calculateVerticalSpace(){let t=this.chartConfig.width,i=this.chartConfig.height,s=0,n=0,o=Math.floor(t*this.chartConfig.plotReservedSpacePercent/100),u=Math.floor(i*this.chartConfig.plotReservedSpacePercent/100),f=this.componentStore.plot.calculateSpace({width:o,height:u});t-=f.width,i-=f.height,f=this.componentStore.title.calculateSpace({width:this.chartConfig.width,height:i}),n=f.height,i-=f.height,this.componentStore.xAxis.setAxisPosition("bottom"),f=this.componentStore.xAxis.calculateSpace({width:t,height:i}),i-=f.height,this.componentStore.yAxis.setAxisPosition("left"),f=this.componentStore.yAxis.calculateSpace({width:t,height:i}),s=f.width,t-=f.width,t>0&&(o+=t,t=0),i>0&&(u+=i,i=0),this.componentStore.plot.calculateSpace({width:o,height:u}),this.componentStore.plot.setBoundingBoxXY({x:s,y:n}),this.componentStore.xAxis.setRange([s,s+o]),this.componentStore.xAxis.setBoundingBoxXY({x:s,y:n+u}),this.componentStore.yAxis.setRange([n,n+u]),this.componentStore.yAxis.setBoundingBoxXY({x:0,y:n}),this.chartData.plots.some(p=>mt(p))&&this.componentStore.xAxis.recalculateOuterPaddingToDrawBar()}calculateHorizontalSpace(){let t=this.chartConfig.width,i=this.chartConfig.height,s=0,n=0,o=0,u=Math.floor(t*this.chartConfig.plotReservedSpacePercent/100),f=Math.floor(i*this.chartConfig.plotReservedSpacePercent/100),p=this.componentStore.plot.calculateSpace({width:u,height:f});t-=p.width,i-=p.height,p=this.componentStore.title.calculateSpace({width:this.chartConfig.width,height:i}),s=p.height,i-=p.height,this.componentStore.xAxis.setAxisPosition("left"),p=this.componentStore.xAxis.calculateSpace({width:t,height:i}),t-=p.width,n=p.width,this.componentStore.yAxis.setAxisPosition("top"),p=this.componentStore.yAxis.calculateSpace({width:t,height:i}),i-=p.height,o=s+p.height,t>0&&(u+=t,t=0),i>0&&(f+=i,i=0),this.componentStore.plot.calculateSpace({width:u,height:f}),this.componentStore.plot.setBoundingBoxXY({x:n,y:o}),this.componentStore.yAxis.setRange([n,n+u]),this.componentStore.yAxis.setBoundingBoxXY({x:n,y:s}),this.componentStore.xAxis.setRange([o,o+f]),this.componentStore.xAxis.setBoundingBoxXY({x:0,y:o}),this.chartData.plots.some(k=>mt(k))&&this.componentStore.xAxis.recalculateOuterPaddingToDrawBar()}calculateSpace(){this.chartConfig.chartOrientation==="horizontal"?this.calculateHorizontalSpace():this.calculateVerticalSpace()}getDrawableElement(){this.calculateSpace();const t=[];this.componentStore.plot.setAxes(this.componentStore.xAxis,this.componentStore.yAxis);for(const i of Object.values(this.componentStore))t.push(...i.getDrawableElements());return t}},a(tt,"Orchestrator"),tt),it,Mi=(it=class{static build(t,i,s,n){return new Ii(t,i,s,n).getDrawableElement()}},a(it,"XYChartBuilder"),it),Y=0,qt,H=_t(),U=St(),b=kt(),bt=U.plotColorPalette.split(",").map(e=>e.trim()),ot=!1,Ct=!1;function St(){const e=gi(),t=At();return Xt(e.xyChart,t.themeVariables.xyChart)}a(St,"getChartDefaultThemeConfig");function _t(){const e=At();return Xt(xi.xyChart,e.xyChart)}a(_t,"getChartDefaultConfig");function kt(){return{yAxis:{type:"linear",title:"",min:1/0,max:-1/0},xAxis:{type:"band",title:"",categories:[]},title:"",plots:[]}}a(kt,"getChartDefaultData");function ht(e){const t=At();return di(e.trim(),t)}a(ht,"textSanitizer");function Gt(e){qt=e}a(Gt,"setTmpSVGG");function jt(e){e==="horizontal"?H.chartOrientation="horizontal":H.chartOrientation="vertical"}a(jt,"setOrientation");function Qt(e){b.xAxis.title=ht(e.text)}a(Qt,"setXAxisTitle");function Rt(e,t){b.xAxis={type:"linear",title:b.xAxis.title,min:e,max:t},ot=!0}a(Rt,"setXAxisRangeData");function Kt(e){b.xAxis={type:"band",title:b.xAxis.title,categories:e.map(t=>ht(t.text))},ot=!0}a(Kt,"setXAxisBand");function Zt(e){b.yAxis.title=ht(e.text)}a(Zt,"setYAxisTitle");function Jt(e,t){b.yAxis={type:"linear",title:b.yAxis.title,min:e,max:t},Ct=!0}a(Jt,"setYAxisRangeData");function ti(e){const t=Math.min(...e),i=Math.max(...e),s=F(b.yAxis)?b.yAxis.min:1/0,n=F(b.yAxis)?b.yAxis.max:-1/0;b.yAxis={type:"linear",title:b.yAxis.title,min:Math.min(s,t),max:Math.max(n,i)}}a(ti,"setYAxisRangeFromPlotData");function Tt(e){let t=[];if(e.length===0)return t;if(!ot){const i=F(b.xAxis)?b.xAxis.min:1/0,s=F(b.xAxis)?b.xAxis.max:-1/0;Rt(Math.min(i,1),Math.max(s,e.length))}if(Ct||ti(e),wt(b.xAxis)&&(t=b.xAxis.categories.map((i,s)=>[i,e[s]])),F(b.xAxis)){const i=b.xAxis.min,s=b.xAxis.max,n=(s-i)/(e.length-1),o=[];for(let u=i;u<=s;u+=n)o.push(`${u}`);t=o.map((u,f)=>[u,e[f]])}return t}a(Tt,"transformDataWithoutCategory");function Dt(e){return bt[e===0?0:e%bt.length]}a(Dt,"getPlotColorFromPalette");function ii(e,t){const i=Tt(t);b.plots.push({type:"line",strokeFill:Dt(Y),strokeWidth:2,data:i}),Y++}a(ii,"setLineData");function ei(e,t){const i=Tt(t);b.plots.push({type:"bar",fill:Dt(Y),data:i}),Y++}a(ei,"setBarData");function si(){if(b.plots.length===0)throw Error("No Plot to render, please provide a plot with some data");return b.title=Nt(),Mi.build(H,b,U,qt)}a(si,"getDrawableElem");function ni(){return U}a(ni,"getChartThemeConfig");function ai(){return H}a(ai,"getChartConfig");var Vi=a(function(){Ai(),Y=0,H=_t(),b=kt(),U=St(),bt=U.plotColorPalette.split(",").map(e=>e.trim()),ot=!1,Ct=!1},"clear"),Bi={getDrawableElem:si,clear:Vi,setAccTitle:pi,getAccTitle:fi,setDiagramTitle:mi,getDiagramTitle:Nt,getAccDescription:yi,setAccDescription:bi,setOrientation:jt,setXAxisTitle:Qt,setXAxisRangeData:Rt,setXAxisBand:Kt,setYAxisTitle:Zt,setYAxisRangeData:Jt,setLineData:ii,setBarData:ei,setTmpSVGG:Gt,getChartThemeConfig:ni,getChartConfig:ai},Wi=a((e,t,i,s)=>{const n=s.db,o=n.getChartThemeConfig(),u=n.getChartConfig();function f(m){return m==="top"?"text-before-edge":"middle"}a(f,"getDominantBaseLine");function p(m){return m==="left"?"start":m==="right"?"end":"middle"}a(p,"getTextAnchor");function k(m){return`translate(${m.x}, ${m.y}) rotate(${m.rotation||0})`}a(k,"getTextTransformation"),Ft.debug(`Rendering xychart chart
`+e);const R=wi(t),w=R.append("g").attr("class","main"),y=w.append("rect").attr("width",u.width).attr("height",u.height).attr("class","background");Ci(R,u.height,u.width,!0),R.attr("viewBox",`0 0 ${u.width} ${u.height}`),y.attr("fill",o.backgroundColor),n.setTmpSVGG(R.append("g").attr("class","mermaid-tmp-group"));const D=n.getDrawableElem(),S={};function v(m){let _=w,l="";for(const[E]of m.entries()){let X=w;E>0&&S[l]&&(X=S[l]),l+=m[E],_=S[l],_||(_=S[l]=X.append("g").attr("class",m[E]))}return _}a(v,"getGroup");for(const m of D){if(m.data.length===0)continue;const _=v(m.groupTexts);switch(m.type){case"rect":_.selectAll("rect").data(m.data).enter().append("rect").attr("x",l=>l.x).attr("y",l=>l.y).attr("width",l=>l.width).attr("height",l=>l.height).attr("fill",l=>l.fill).attr("stroke",l=>l.strokeFill).attr("stroke-width",l=>l.strokeWidth);break;case"text":_.selectAll("text").data(m.data).enter().append("text").attr("x",0).attr("y",0).attr("fill",l=>l.fill).attr("font-size",l=>l.fontSize).attr("dominant-baseline",l=>f(l.verticalPos)).attr("text-anchor",l=>p(l.horizontalPos)).attr("transform",l=>k(l)).text(l=>l.text);break;case"path":_.selectAll("path").data(m.data).enter().append("path").attr("d",l=>l.path).attr("fill",l=>l.fill?l.fill:"none").attr("stroke",l=>l.strokeFill).attr("stroke-width",l=>l.strokeWidth);break}}},"draw"),Oi={draw:Wi},Ki={parser:Ri,db:Bi,renderer:Oi};export{Ki as diagram};
