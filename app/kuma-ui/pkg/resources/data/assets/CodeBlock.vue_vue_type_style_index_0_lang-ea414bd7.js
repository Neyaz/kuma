var ae=Object.defineProperty;var ne=(g,c,a)=>c in g?ae(g,c,{enumerable:!0,configurable:!0,writable:!0,value:a}):g[c]=a;var Y=(g,c,a)=>(ne(g,typeof c!="symbol"?c+"":c,a),a);import{ai as W,aj as re,d as ie,t as se,o as oe,g as le,w as ue,U as ce,ak as de,i as Z,al as ge}from"./index-0ab7ff60.js";class pe{constructor(c){Y(this,"storageAdapter");this.storageAdapter=c}get(c){let a;try{a=this.storageAdapter.getItem(c)}catch{return null}if(a===null||!(a.startsWith("[")||a.startsWith("{")))return a;try{return JSON.parse(a)}catch{return a}}set(c,a){try{const u=typeof a=="string"?a:JSON.stringify(a);this.storageAdapter.setItem(c,u)}catch{}}has(c){try{return this.storageAdapter.getItem(c)!==null}catch{return!1}}remove(c){try{this.storageAdapter.removeItem(c)}catch{}}}const U=new pe(window.localStorage);var J={exports:{}};(function(g){var c=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var a=function(u){var f=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,v=0,m={},s={manual:u.Prism&&u.Prism.manual,disableWorkerMessageHandler:u.Prism&&u.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof p?new p(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++v}),t.__id},clone:function t(e,n){n=n||{};var r,i;switch(s.util.type(e)){case"Object":if(i=s.util.objId(e),n[i])return n[i];r={},n[i]=r;for(var l in e)e.hasOwnProperty(l)&&(r[l]=t(e[l],n));return r;case"Array":return i=s.util.objId(e),n[i]?n[i]:(r=[],n[i]=r,e.forEach(function(d,o){r[o]=t(d,n)}),r);default:return e}},getLanguage:function(t){for(;t;){var e=f.exec(t.className);if(e)return e[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,e){t.className=t.className.replace(RegExp(f,"gi"),""),t.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(r){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var n in e)if(e[n].src==t)return e[n]}return null}},isActive:function(t,e,n){for(var r="no-"+e;t;){var i=t.classList;if(i.contains(e))return!0;if(i.contains(r))return!1;t=t.parentElement}return!!n}},languages:{plain:m,plaintext:m,text:m,txt:m,extend:function(t,e){var n=s.util.clone(s.languages[t]);for(var r in e)n[r]=e[r];return n},insertBefore:function(t,e,n,r){r=r||s.languages;var i=r[t],l={};for(var d in i)if(i.hasOwnProperty(d)){if(d==e)for(var o in n)n.hasOwnProperty(o)&&(l[o]=n[o]);n.hasOwnProperty(d)||(l[d]=i[d])}var b=r[t];return r[t]=l,s.languages.DFS(s.languages,function(A,F){F===b&&A!=t&&(this[A]=l)}),l},DFS:function t(e,n,r,i){i=i||{};var l=s.util.objId;for(var d in e)if(e.hasOwnProperty(d)){n.call(e,d,e[d],r||d);var o=e[d],b=s.util.type(o);b==="Object"&&!i[l(o)]?(i[l(o)]=!0,t(o,n,null,i)):b==="Array"&&!i[l(o)]&&(i[l(o)]=!0,t(o,n,d,i))}}},plugins:{},highlightAll:function(t,e){s.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,n){var r={callback:n,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),s.hooks.run("before-all-elements-highlight",r);for(var i=0,l;l=r.elements[i++];)s.highlightElement(l,e===!0,r.callback)},highlightElement:function(t,e,n){var r=s.util.getLanguage(t),i=s.languages[r];s.util.setLanguage(t,r);var l=t.parentElement;l&&l.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(l,r);var d=t.textContent,o={element:t,language:r,grammar:i,code:d};function b(F){o.highlightedCode=F,s.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,s.hooks.run("after-highlight",o),s.hooks.run("complete",o),n&&n.call(o.element)}if(s.hooks.run("before-sanity-check",o),l=o.element.parentElement,l&&l.nodeName.toLowerCase()==="pre"&&!l.hasAttribute("tabindex")&&l.setAttribute("tabindex","0"),!o.code){s.hooks.run("complete",o),n&&n.call(o.element);return}if(s.hooks.run("before-highlight",o),!o.grammar){b(s.util.encode(o.code));return}if(e&&u.Worker){var A=new Worker(s.filename);A.onmessage=function(F){b(F.data)},A.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else b(s.highlight(o.code,o.grammar,o.language))},highlight:function(t,e,n){var r={code:t,grammar:e,language:n};if(s.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=s.tokenize(r.code,r.grammar),s.hooks.run("after-tokenize",r),p.stringify(s.util.encode(r.tokens),r.language)},tokenize:function(t,e){var n=e.rest;if(n){for(var r in n)e[r]=n[r];delete e.rest}var i=new T;return $(i,i.head,t),I(t,i,e,i.head,0),R(i)},hooks:{all:{},add:function(t,e){var n=s.hooks.all;n[t]=n[t]||[],n[t].push(e)},run:function(t,e){var n=s.hooks.all[t];if(!(!n||!n.length))for(var r=0,i;i=n[r++];)i(e)}},Token:p};u.Prism=s;function p(t,e,n,r){this.type=t,this.content=e,this.alias=n,this.length=(r||"").length|0}p.stringify=function t(e,n){if(typeof e=="string")return e;if(Array.isArray(e)){var r="";return e.forEach(function(b){r+=t(b,n)}),r}var i={type:e.type,content:t(e.content,n),tag:"span",classes:["token",e.type],attributes:{},language:n},l=e.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(i.classes,l):i.classes.push(l)),s.hooks.run("wrap",i);var d="";for(var o in i.attributes)d+=" "+o+'="'+(i.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+d+">"+i.content+"</"+i.tag+">"};function x(t,e,n,r){t.lastIndex=e;var i=t.exec(n);if(i&&r&&i[1]){var l=i[1].length;i.index+=l,i[0]=i[0].slice(l)}return i}function I(t,e,n,r,i,l){for(var d in n)if(!(!n.hasOwnProperty(d)||!n[d])){var o=n[d];o=Array.isArray(o)?o:[o];for(var b=0;b<o.length;++b){if(l&&l.cause==d+","+b)return;var A=o[b],F=A.inside,z=!!A.lookbehind,j=!!A.greedy,Q=A.alias;if(j&&!A.pattern.global){var V=A.pattern.toString().match(/[imsuy]*$/)[0];A.pattern=RegExp(A.pattern.source,V+"g")}for(var X=A.pattern||A,E=r.next,w=i;E!==e.tail&&!(l&&w>=l.reach);w+=E.value.length,E=E.next){var O=E.value;if(e.length>t.length)return;if(!(O instanceof p)){var C=1,k;if(j){if(k=x(X,w,t,z),!k||k.index>=t.length)break;var D=k.index,ee=k.index+k[0].length,_=w;for(_+=E.value.length;D>=_;)E=E.next,_+=E.value.length;if(_-=E.value.length,w=_,E.value instanceof p)continue;for(var P=E;P!==e.tail&&(_<ee||typeof P.value=="string");P=P.next)C++,_+=P.value.length;C--,O=t.slice(w,_),k.index-=w}else if(k=x(X,0,O,z),!k)continue;var D=k.index,L=k[0],H=O.slice(0,D),K=O.slice(D+L.length),G=w+O.length;l&&G>l.reach&&(l.reach=G);var N=E.prev;H&&(N=$(e,N,H),w+=H.length),M(e,N,C);var te=new p(d,F?s.tokenize(L,F):L,Q,L);if(E=$(e,N,te),K&&$(e,E,K),C>1){var B={cause:d+","+b,reach:G};I(t,e,n,E.prev,w,B),l&&B.reach>l.reach&&(l.reach=B.reach)}}}}}}function T(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function $(t,e,n){var r=e.next,i={value:n,prev:e,next:r};return e.next=i,r.prev=i,t.length++,i}function M(t,e,n){for(var r=e.next,i=0;i<n&&r!==t.tail;i++)r=r.next;e.next=r,r.prev=e,t.length-=i}function R(t){for(var e=[],n=t.head.next;n!==t.tail;)e.push(n.value),n=n.next;return e}if(!u.document)return u.addEventListener&&(s.disableWorkerMessageHandler||u.addEventListener("message",function(t){var e=JSON.parse(t.data),n=e.language,r=e.code,i=e.immediateClose;u.postMessage(s.highlight(r,s.languages[n],n)),i&&u.close()},!1)),s;var y=s.util.currentScript();y&&(s.filename=y.src,y.hasAttribute("data-manual")&&(s.manual=!0));function h(){s.manual||s.highlightAll()}if(!s.manual){var S=document.readyState;S==="loading"||S==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",h):window.requestAnimationFrame?window.requestAnimationFrame(h):window.setTimeout(h,16)}return s}(c);g.exports&&(g.exports=a),typeof W<"u"&&(W.Prism=a),a.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.languages.markup.doctype.inside["internal-subset"].inside=a.languages.markup,a.hooks.add("wrap",function(u){u.type==="entity"&&(u.attributes.title=u.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(f,v){var m={};m["language-"+v]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[v]},m.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:m}};s["language-"+v]={pattern:/[\s\S]+/,inside:a.languages[v]};var p={};p[f]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return f}),"i"),lookbehind:!0,greedy:!0,inside:s},a.languages.insertBefore("markup","cdata",p)}}),Object.defineProperty(a.languages.markup.tag,"addAttribute",{value:function(u,f){a.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+u+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[f,"language-"+f],inside:a.languages[f]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.xml=a.languages.extend("markup",{}),a.languages.ssml=a.languages.xml,a.languages.atom=a.languages.xml,a.languages.rss=a.languages.xml,function(u){var f=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;u.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+f.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+f.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+f.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+f.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:f,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},u.languages.css.atrule.inside.rest=u.languages.css;var v=u.languages.markup;v&&(v.tag.addInlined("style","css"),v.tag.addAttribute("style","css"))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:a.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),a.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),a.languages.markup&&(a.languages.markup.tag.addInlined("script","javascript"),a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),a.languages.js=a.languages.javascript,function(){if(typeof a>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var u="Loading…",f=function(y,h){return"✖ Error "+y+" while fetching file: "+h},v="✖ Error: File does not exist or is empty",m={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",p="loading",x="loaded",I="failed",T="pre[data-src]:not(["+s+'="'+x+'"]):not(['+s+'="'+p+'"])';function $(y,h,S){var t=new XMLHttpRequest;t.open("GET",y,!0),t.onreadystatechange=function(){t.readyState==4&&(t.status<400&&t.responseText?h(t.responseText):t.status>=400?S(f(t.status,t.statusText)):S(v))},t.send(null)}function M(y){var h=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y||"");if(h){var S=Number(h[1]),t=h[2],e=h[3];return t?e?[S,Number(e)]:[S,void 0]:[S,S]}}a.hooks.add("before-highlightall",function(y){y.selector+=", "+T}),a.hooks.add("before-sanity-check",function(y){var h=y.element;if(h.matches(T)){y.code="",h.setAttribute(s,p);var S=h.appendChild(document.createElement("CODE"));S.textContent=u;var t=h.getAttribute("data-src"),e=y.language;if(e==="none"){var n=(/\.(\w+)$/.exec(t)||[,"none"])[1];e=m[n]||n}a.util.setLanguage(S,e),a.util.setLanguage(h,e);var r=a.plugins.autoloader;r&&r.loadLanguages(e),$(t,function(i){h.setAttribute(s,x);var l=M(h.getAttribute("data-range"));if(l){var d=i.split(/\r\n?|\n/g),o=l[0],b=l[1]==null?d.length:l[1];o<0&&(o+=d.length),o=Math.max(0,Math.min(o-1,d.length)),b<0&&(b+=d.length),b=Math.max(0,Math.min(b,d.length)),i=d.slice(o,b).join(`
`),h.hasAttribute("data-start")||h.setAttribute("data-start",String(o+1))}S.textContent=i,a.highlightElement(S)},function(i){h.setAttribute(s,I),S.textContent=i})}}),a.plugins.fileHighlight={highlight:function(h){for(var S=(h||document).querySelectorAll(T),t=0,e;e=S[t++];)a.highlightElement(e)}};var R=!1;a.fileHighlight=function(){R||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),R=!0),a.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(J);var fe=J.exports;const q=re(fe);(function(g){var c="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",a={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},u={bash:a,environment:{pattern:RegExp("\\$"+c),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+c),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};g.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+c),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:u},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:a}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:u},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:u.entity}}],environment:{pattern:RegExp("\\$?"+c),alias:"constant"},variable:u.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},a.inside=g.languages.bash;for(var f=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],v=u.variable[1].inside,m=0;m<f.length;m++)v[f[m]]=g.languages.bash[f[m]];g.languages.sh=g.languages.bash,g.languages.shell=g.languages.bash})(Prism);Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json;(function(g){var c=/[*&][^\s[\]{},]+/,a=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,u="(?:"+a.source+"(?:[ 	]+"+c.source+")?|"+c.source+"(?:[ 	]+"+a.source+")?)",f="(?:[^\\s\\x00-\\x08\\x0e-\\x1f!\"#%&'*,\\-:>?@[\\]`{|}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]|[?:-]<PLAIN>)(?:[ 	]*(?:(?![#:])<PLAIN>|:<PLAIN>))*".replace(/<PLAIN>/g,function(){return"[^\\s\\x00-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]"}),v=`"(?:[^"\\\\\r
]|\\\\.)*"|'(?:[^'\\\\\r
]|\\\\.)*'`;function m(s,p){p=(p||"").replace(/m/g,"")+"m";var x=`([:\\-,[{]\\s*(?:\\s<<prop>>[ 	]+)?)(?:<<value>>)(?=[ 	]*(?:$|,|\\]|\\}|(?:[\r
]\\s*)?#))`.replace(/<<prop>>/g,function(){return u}).replace(/<<value>>/g,function(){return s});return RegExp(x,p)}g.languages.yaml={scalar:{pattern:RegExp(`([\\-:]\\s*(?:\\s<<prop>>[ 	]+)?[|>])[ 	]*(?:((?:\r?
|\r)[ 	]+)\\S[^\r
]*(?:\\2[^\r
]+)*)`.replace(/<<prop>>/g,function(){return u})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(`((?:^|[:\\-,[{\r
?])[ 	]*(?:<<prop>>[ 	]+)?)<<key>>(?=\\s*:\\s)`.replace(/<<prop>>/g,function(){return u}).replace(/<<key>>/g,function(){return"(?:"+f+"|"+v+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:m("\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ 	]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?(?:[ 	]*(?:Z|[-+]\\d\\d?(?::\\d{2})?))?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?"),lookbehind:!0,alias:"number"},boolean:{pattern:m("false|true","i"),lookbehind:!0,alias:"important"},null:{pattern:m("null|~","i"),lookbehind:!0,alias:"important"},string:{pattern:m(v),lookbehind:!0,greedy:!0},number:{pattern:m("[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)","i"),lookbehind:!0},tag:a,important:c,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},g.languages.yml=g.languages.yaml})(Prism);q.manual=!0;function he(g,c,a,u){q.languages[u]||console.warn(`Prism: the language “${u}” isn’t enabled.`),g.classList.contains(`language-${u}`)||g.classList.add(`language-${u}`),c.innerHTML=a,q.highlightElement(c)}const ve=ie({__name:"CodeBlock",props:{id:{type:String,required:!0},code:{type:String,required:!0},language:{type:String,required:!0},isSearchable:{type:Boolean,required:!1,default:!1},showCopyButton:{type:Boolean,required:!1,default:!0},queryKey:{type:String,required:!1,default:null},codeMaxHeight:{type:String,required:!1,default:null}},setup(g){const c=g,a=v(),u=se(!1);async function f({preElement:s,codeElement:p,language:x,code:I}){u.value=!0;const T=I.replaceAll(/</g,"&lt;").replaceAll(/>/g,"&gt;");he(s,p,T,x),u.value=!1}function v(){const s=U.get("codeBlockQueries"),p=c.queryKey??c.id;return s!=null&&s[p]?s[p]:""}function m(s){const p=U.get("codeBlockQueries")??{},x=c.queryKey??c.id;s===""?delete p[x]:p[x]=s,U.set("codeBlockQueries",p)}return(s,p)=>(oe(),le(Z(ge),{id:g.id,class:"code-block",style:de(c.codeMaxHeight?`--KCodeBlockMaxHeight: ${c.codeMaxHeight}`:void 0),code:c.code,language:g.language,"is-processing":u.value,"is-searchable":g.isSearchable,"show-copy-button":g.showCopyButton,query:Z(a),onCodeBlockRender:f,onQueryChange:m},{"secondary-actions":ue(()=>[ce(s.$slots,"secondary-actions")]),_:3},8,["id","style","code","language","is-processing","is-searchable","show-copy-button","query"]))}});export{ve as _};
