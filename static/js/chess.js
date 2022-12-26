var Chess=function(r){var e="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",n=["1-0","0-1","1/2-1/2","*"],$={b:[16,32,17,15],w:[-16,-32,-17,-15]},t={n:[-18,-33,-31,-14,18,33,31,14],b:[-17,-15,17,15],r:[-16,1,16,-1],q:[-17,-16,-15,1,17,16,15,-1],k:[-17,-16,-15,1,17,16,15,-1]},o=[20,0,0,0,0,0,0,24,0,0,0,0,0,0,20,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,24,24,24,24,24,24,56,0,56,24,24,24,24,24,24,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,20,0,0,0,0,0,0,24,0,0,0,0,0,0,20],i=[17,0,0,0,0,0,0,16,0,0,0,0,0,0,15,0,0,17,0,0,0,0,0,16,0,0,0,0,0,15,0,0,0,0,17,0,0,0,0,16,0,0,0,0,15,0,0,0,0,0,0,17,0,0,0,16,0,0,0,15,0,0,0,0,0,0,0,0,17,0,0,16,0,0,15,0,0,0,0,0,0,0,0,0,0,17,0,16,0,15,0,0,0,0,0,0,0,0,0,0,0,0,17,16,15,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,-15,-16,-17,0,0,0,0,0,0,0,0,0,0,0,0,-15,0,-16,0,-17,0,0,0,0,0,0,0,0,0,0,-15,0,0,-16,0,0,-17,0,0,0,0,0,0,0,0,-15,0,0,0,-16,0,0,0,-17,0,0,0,0,0,0,-15,0,0,0,0,-16,0,0,0,0,-17,0,0,0,0,-15,0,0,0,0,0,-16,0,0,0,0,0,-17,0,0,-15,0,0,0,0,0,0,-16,0,0,0,0,0,0,-17],u={p:0,n:1,b:2,r:3,q:4,k:5},f={NORMAL:"n",CAPTURE:"c",BIG_PAWN:"b",EP_CAPTURE:"e",PROMOTION:"p",KSIDE_CASTLE:"k",QSIDE_CASTLE:"q"},l={NORMAL:1,CAPTURE:2,BIG_PAWN:4,EP_CAPTURE:8,PROMOTION:16,KSIDE_CASTLE:32,QSIDE_CASTLE:64},_={a8:0,b8:1,c8:2,d8:3,e8:4,f8:5,g8:6,h8:7,a7:16,b7:17,c7:18,d7:19,e7:20,f7:21,g7:22,h7:23,a6:32,b6:33,c6:34,d6:35,e6:36,f6:37,g6:38,h6:39,a5:48,b5:49,c5:50,d5:51,e5:52,f5:53,g5:54,h5:55,a4:64,b4:65,c4:66,d4:67,e4:68,f4:69,g4:70,h4:71,a3:80,b3:81,c3:82,d3:83,e3:84,f3:85,g3:86,h3:87,a2:96,b2:97,c2:98,d2:99,e2:100,f2:101,g2:102,h2:103,a1:112,b1:113,c1:114,d1:115,e1:116,f1:117,g1:118,h1:119},a={w:[{square:_.a1,flag:l.QSIDE_CASTLE},{square:_.h1,flag:l.KSIDE_CASTLE}],b:[{square:_.a8,flag:l.QSIDE_CASTLE},{square:_.h8,flag:l.KSIDE_CASTLE}]},c=Array(128),p={w:-1,b:-1},s="w",v={w:0,b:0},h=-1,g=0,d=1,b=[],E={},m={};function S(r){void 0===r&&(r=!1),c=Array(128),p={w:-1,b:-1},s="w",v={w:0,b:0},h=-1,g=0,d=1,b=[],r||(E={}),m={},I(w())}function A(){for(var r=[],e={},n=function(r){(r in m)&&(e[r]=m[r])};b.length>0;)r.push(W());for(n(w());r.length>0;)M(r.pop()),n(w());m=e}function C(){y(e)}function y(r,e){void 0===e&&(e=!1);var n=r.split(/\s+/),$=n[0],t=0;if(!T(r).valid)return!1;S(e);for(var o=0;o<$.length;o++){var i=$.charAt(o);if("/"===i)t+=8;else if(J(i))t+=parseInt(i,10);else{var u=i<"a"?"w":"b";k({type:i.toLowerCase(),color:u},Z(t)),t++}}return s=n[1],n[2].indexOf("K")>-1&&(v.w|=l.KSIDE_CASTLE),n[2].indexOf("Q")>-1&&(v.w|=l.QSIDE_CASTLE),n[2].indexOf("k")>-1&&(v.b|=l.KSIDE_CASTLE),n[2].indexOf("q")>-1&&(v.b|=l.QSIDE_CASTLE),h="-"===n[3]?-1:_[n[3]],g=parseInt(n[4],10),d=parseInt(n[5],10),I(w()),!0}function T(r){var e={0:"No errors.",1:"FEN string must contain six space-delimited fields.",2:"6th field (move number) must be a positive integer.",3:"5th field (half move counter) must be a non-negative integer.",4:"4th field (en-passant square) is invalid.",5:"3rd field (castling availability) is invalid.",6:"2nd field (side to move) is invalid.",7:"1st field (piece positions) does not contain 8 '/'-delimited rows.",8:"1st field (piece positions) is invalid [consecutive numbers].",9:"1st field (piece positions) is invalid [invalid piece].",10:"1st field (piece positions) is invalid [row too large].",11:"Illegal en-passant square"},n=r.split(/\s+/);if(6!==n.length)return{valid:!1,error_number:1,error:e[1]};if(isNaN(n[5])||0>=parseInt(n[5],10))return{valid:!1,error_number:2,error:e[2]};if(isNaN(n[4])||0>parseInt(n[4],10))return{valid:!1,error_number:3,error:e[3]};if(!/^(-|[abcdefgh][36])$/.test(n[3]))return{valid:!1,error_number:4,error:e[4]};if(!/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(n[2]))return{valid:!1,error_number:5,error:e[5]};if(!/^(w|b)$/.test(n[1]))return{valid:!1,error_number:6,error:e[6]};var $=n[0].split("/");if(8!==$.length)return{valid:!1,error_number:7,error:e[7]};for(var t=0;t<$.length;t++){for(var o=0,i=!1,u=0;u<$[t].length;u++)if(isNaN($[t][u])){if(!/^[prnbqkPRNBQK]$/.test($[t][u]))return{valid:!1,error_number:9,error:e[9]};o+=1,i=!1}else{if(i)return{valid:!1,error_number:8,error:e[8]};o+=parseInt($[t][u],10),i=!0}if(8!==o)return{valid:!1,error_number:10,error:e[10]}}return"3"==n[3][1]&&"w"==n[1]||"6"==n[3][1]&&"b"==n[1]?{valid:!1,error_number:11,error:e[11]}:{valid:!0,error_number:0,error:e[0]}}function w(){for(var r=0,e="",n=_.a8;n<=_.h1;n++){if(null==c[n])r++;else{r>0&&(e+=r,r=0);var $=c[n].color,t=c[n].type;e+="w"===$?t.toUpperCase():t.toLowerCase()}n+1&136&&(r>0&&(e+=r),n!==_.h1&&(e+="/"),r=0,n+=8)}var o="";return v.w&l.KSIDE_CASTLE&&(o+="K"),v.w&l.QSIDE_CASTLE&&(o+="Q"),v.b&l.KSIDE_CASTLE&&(o+="k"),v.b&l.QSIDE_CASTLE&&(o+="q"),[e,s,o=o||"-",-1===h?"-":Z(h),g,d].join(" ")}function P(r){for(var e=0;e<r.length;e+=2)"string"==typeof r[e]&&"string"==typeof r[e+1]&&(E[r[e]]=r[e+1]);return E}function I(r){b.length>0||(r!==e?(E.SetUp="1",E.FEN=r):(delete E.SetUp,delete E.FEN))}function L(r){var e=c[_[r]];return e?{type:e.type,color:e.color}:null}function k(r,e){if(!("type"in r&&"color"in r)||-1==="pnbrqkPNBRQK".indexOf(r.type.toLowerCase())||!(e in _))return!1;var n=_[e];return("k"!=r.type||-1==p[r.color]||p[r.color]==n)&&(c[n]={type:r.type,color:r.color},"k"===r.type&&(p[r.color]=n),I(w()),!0)}function R(r,e,n,$,t){var o={color:s,from:e,to:n,flags:$,piece:r[e].type};return t&&(o.flags|=l.PROMOTION,o.promotion=t),r[n]?o.captured=r[n].type:$&l.EP_CAPTURE&&(o.captured="p"),o}function O(r){function e(r,e,n,$,t){if("p"===r[n].type&&(0===F($)||7===F($)))for(var o=["q","r","b","n"],i=0,u=o.length;i<u;i++)e.push(R(r,n,$,t,o[i]));else e.push(R(r,n,$,t))}var n=[],o=s,i=z(o),u={b:1,w:6},f=_.a8,a=_.h1,g=!1,d=void 0===r||!("legal"in r)||r.legal;if(void 0!==r&&"square"in r){if(!(r.square in _))return[];f=a=_[r.square],g=!0}for(var b=f;b<=a;b++){if(136&b){b+=7;continue}var E=c[b];if(null!=E&&E.color===o){if("p"===E.type){var m=b+$[o][0];if(null==c[m]){e(c,n,b,m,l.NORMAL);var m=b+$[o][1];u[o]===F(b)&&null==c[m]&&e(c,n,b,m,l.BIG_PAWN)}for(S=2;S<4;S++){var m=b+$[o][S];136&m||(null!=c[m]&&c[m].color===i?e(c,n,b,m,l.CAPTURE):m===h&&e(c,n,b,h,l.EP_CAPTURE))}}else for(var S=0,A=t[E.type].length;S<A;S++)for(var C=t[E.type][S],m=b;!(136&(m+=C));){if(null==c[m])e(c,n,b,m,l.NORMAL);else{if(c[m].color===o)break;e(c,n,b,m,l.CAPTURE);break}if("n"===E.type||"k"===E.type)break}}}if(!g||a===p[o]){if(v[o]&l.KSIDE_CASTLE){var y=p[o],T=y+2;null!=c[y+1]||null!=c[T]||D(i,p[o])||D(i,y+1)||D(i,T)||e(c,n,p[o],T,l.KSIDE_CASTLE)}if(v[o]&l.QSIDE_CASTLE){var y=p[o],T=y-2;null!=c[y-1]||null!=c[y-2]||null!=c[y-3]||D(i,p[o])||D(i,y-1)||D(i,T)||e(c,n,p[o],T,l.QSIDE_CASTLE)}}if(!d)return n;for(var w=[],b=0,A=n.length;b<A;b++)M(n[b]),K(o)||w.push(n[b]),W();return w}function q(r,e){var n="";if(r.flags&l.KSIDE_CASTLE)n="O-O";else if(r.flags&l.QSIDE_CASTLE)n="O-O-O";else{var $=function r(e,n){for(var $=O({legal:!n}),t=e.from,o=e.to,i=e.piece,u=0,f=0,l=0,_=0,a=$.length;_<a;_++){var c=$[_].from,p=$[_].to;i===$[_].piece&&t!==c&&o===p&&(u++,F(t)===F(c)&&f++,H(t)===H(c)&&l++)}return u>0?f>0&&l>0?Z(t):l>0?Z(t).charAt(1):Z(t).charAt(0):""}(r,e);"p"!==r.piece&&(n+=r.piece.toUpperCase()+$),r.flags&(l.CAPTURE|l.EP_CAPTURE)&&("p"===r.piece&&(n+=Z(r.from)[0]),n+="x"),n+=Z(r.to),r.flags&l.PROMOTION&&(n+="="+r.promotion.toUpperCase())}return M(r),Q()&&(U()?n+="#":n+="+"),W(),n}function N(r){return r.replace(/=/,"").replace(/[+#]?[?!]*$/,"")}function D(r,e){for(var n=_.a8;n<=_.h1;n++){if(136&n){n+=7;continue}if(null!=c[n]&&c[n].color===r){var $=c[n],t=n-e,f=t+119;if(o[f]&1<<u[$.type]){if("p"===$.type){if(t>0){if("w"===$.color)return!0}else if("b"===$.color)return!0;continue}if("n"===$.type||"k"===$.type)return!0;for(var l=i[f],a=n+l,p=!1;a!==e;){if(null!=c[a]){p=!0;break}a+=l}if(!p)return!0}}}return!1}function K(r){return D(z(r),p[r])}function Q(){return K(s)}function U(){return Q()&&0===O().length}function x(){return!Q()&&0===O().length}function j(){for(var r={},e=[],n=0,$=0,t=_.a8;t<=_.h1;t++){if($=($+1)%2,136&t){t+=7;continue}var o=c[t];o&&(r[o.type]=o.type in r?r[o.type]+1:1,"b"===o.type&&e.push($),n++)}if(2===n||3===n&&(1===r.b||1===r.n))return!0;if(n===r.b+2){for(var i=0,u=e.length,t=0;t<u;t++)i+=e[t];if(0===i||i===u)return!0}return!1}function B(){for(var r=[],e={},n=!1;;){var $=W();if(!$)break;r.push($)}for(;;){var t=w().split(" ").slice(0,4).join(" ");if(e[t]=t in e?e[t]+1:1,e[t]>=3&&(n=!0),!r.length)break;M(r.pop())}return n}function M(r){var e,n=s,$=z(n);if(e=r,b.push({move:e,kings:{b:p.b,w:p.w},turn:s,castling:{b:v.b,w:v.w},ep_square:h,half_moves:g,move_number:d}),c[r.to]=c[r.from],c[r.from]=null,r.flags&l.EP_CAPTURE&&("b"===s?c[r.to-16]=null:c[r.to+16]=null),r.flags&l.PROMOTION&&(c[r.to]={type:r.promotion,color:n}),"k"===c[r.to].type){if(p[c[r.to].color]=r.to,r.flags&l.KSIDE_CASTLE){var t=r.to-1,o=r.to+1;c[t]=c[o],c[o]=null}else if(r.flags&l.QSIDE_CASTLE){var t=r.to+1,o=r.to-2;c[t]=c[o],c[o]=null}v[n]=""}if(v[n]){for(var i=0,u=a[n].length;i<u;i++)if(r.from===a[n][i].square&&v[n]&a[n][i].flag){v[n]^=a[n][i].flag;break}}if(v[$]){for(var i=0,u=a[$].length;i<u;i++)if(r.to===a[$][i].square&&v[$]&a[$][i].flag){v[$]^=a[$][i].flag;break}}h=r.flags&l.BIG_PAWN?"b"===s?r.to-16:r.to+16:-1,"p"===r.piece?g=0:r.flags&(l.CAPTURE|l.EP_CAPTURE)?g=0:g++,"b"===s&&d++,s=z(s)}function W(){var r,e,n,$=b.pop();if(null==$)return null;var t=$.move;p=$.kings,s=$.turn,v=$.castling,h=$.ep_square,g=$.half_moves,d=$.move_number;var o=s,i=z(s);return c[t.from]=c[t.to],c[t.from].type=t.piece,c[t.to]=null,t.flags&l.CAPTURE?c[t.to]={type:t.captured,color:i}:t.flags&l.EP_CAPTURE&&(c[r="b"===o?t.to-16:t.to+16]={type:"p",color:i}),t.flags&(l.KSIDE_CASTLE|l.QSIDE_CASTLE)&&(t.flags&l.KSIDE_CASTLE?(e=t.to+1,n=t.to-1):t.flags&l.QSIDE_CASTLE&&(e=t.to-2,n=t.to+1),c[e]=c[n],c[n]=null),t}function G(r,e){var n=N(r);if(e){var $=n.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/);if($)var t=$[1],o=$[2],i=$[3],u=$[4]}for(var f=O(),l=0,a=f.length;l<a;l++)if(n===N(q(f[l]))||e&&n===N(q(f[l],!0))||$&&(!t||t.toLowerCase()==f[l].piece)&&_[o]==f[l].from&&_[i]==f[l].to&&(!u||u.toLowerCase()==f[l].promotion))return f[l];return null}function F(r){return r>>4}function H(r){return 15&r}function Z(r){var e=H(r),n=F(r);return"abcdefgh".substring(e,e+1)+"87654321".substring(n,n+1)}function z(r){return"w"===r?"b":"w"}function J(r){return -1!=="0123456789".indexOf(r)}function V(r){var e=function r(e){var n=e instanceof Array?[]:{};for(var $ in e)"object"==typeof $?n[$]=r(e[$]):n[$]=e[$];return n}(r);e.san=q(e,!1),e.to=Z(e.to),e.from=Z(e.from);var n="";for(var $ in l)l[$]&e.flags&&(n+=f[$]);return e.flags=n,e}function X(r){return r.replace(/^\s+|\s+$/g,"")}return void 0===r?y(e):y(r),{WHITE:"w",BLACK:"b",PAWN:"p",KNIGHT:"n",BISHOP:"b",ROOK:"r",QUEEN:"q",KING:"k",SQUARES:function(){for(var r=[],e=_.a8;e<=_.h1;e++){if(136&e){e+=7;continue}r.push(Z(e))}return r}(),FLAGS:f,load:function(r){return y(r)},reset:function(){return C()},moves:function(r){for(var e=O(r),n=[],$=0,t=e.length;$<t;$++)void 0!==r&&"verbose"in r&&r.verbose?n.push(V(e[$])):n.push(q(e[$],!1));return n},in_check:function(){return Q()},in_checkmate:function(){return U()},in_stalemate:function(){return x()},in_draw:function(){return g>=100||x()||j()||B()},insufficient_material:function(){return j()},in_threefold_repetition:function(){return B()},game_over:function(){return g>=100||U()||x()||j()||B()},validate_fen:function(r){return T(r)},fen:function(){return w()},board:function(){for(var r=[],e=[],n=_.a8;n<=_.h1;n++)null==c[n]?e.push(null):e.push({type:c[n].type,color:c[n].color}),n+1&136&&(r.push(e),e=[],n+=8);return r},pgn:function(r){var e="object"==typeof r&&"string"==typeof r.newline_char?r.newline_char:"\n",n="object"==typeof r&&"number"==typeof r.max_width?r.max_width:0,$=[],t=!1;for(var o in E)$.push("["+o+' "'+E[o]+'"]'+e),t=!0;t&&b.length&&$.push(e);for(var i=function(r){var e=m[w()];return void 0!==e&&(r=`${r}${r.length>0?" ":""}{${e}}`),r},u=[];b.length>0;)u.push(W());var f=[],l="";for(0===u.length&&f.push(i(""));u.length>0;){l=i(l);var _=u.pop();b.length||"b"!==_.color?"w"===_.color&&(l.length&&f.push(l),l=d+"."):l=d+". ...",l=l+" "+q(_,!1),M(_)}if(l.length&&f.push(i(l)),void 0!==E.Result&&f.push(E.Result),0===n)return $.join("")+f.join(" ");for(var a=function(){return $.length>0&&" "===$[$.length-1]&&($.pop(),!0)},c=0,o=0;o<f.length;o++){if(c+f[o].length>n&&f[o].includes("{")){c=function(r,t){for(var o of t.split(" "))if(o){if(r+o.length>n){for(;a();)r--;$.push(e),r=0}$.push(o),r+=o.length,$.push(" "),r++}return a()&&r--,r}(c,f[o]);continue}c+f[o].length>n&&0!==o?(" "===$[$.length-1]&&$.pop(),$.push(e),c=0):0!==o&&($.push(" "),c++),$.push(f[o]),c+=f[o].length}return $.join("")},load_pgn:function(r,e){var $=void 0!==e&&"sloppy"in e&&e.sloppy;function t(r){return r.replace(/\\/g,"\\")}var o="object"==typeof e&&"string"==typeof e.newline_char?e.newline_char:"\r?\n",i=RegExp("^(\\[((?:"+t(o)+")|.)*\\])(?:"+t(o)+"){2}"),u=i.test(r)?i.exec(r)[1]:"";C();var f=function r(e,n){for(var $="object"==typeof n&&"string"==typeof n.newline_char?n.newline_char:"\r?\n",o={},i=e.split(RegExp(t($))),u="",f="",l=0;l<i.length;l++)u=i[l].replace(/^\[([A-Z][A-Za-z]*)\s.*\]$/,"$1"),f=i[l].replace(/^\[[A-Za-z]+\s"(.*)"\ *\]$/,"$1"),X(u).length>0&&(o[u]=f);return o}(u,e);for(var l in f)P([l,f[l]]);if("1"===f.SetUp&&!("FEN"in f&&y(f.FEN,!0)))return!1;for(var _=function(r){return Array.from(r).map(function(r){return 128>r.charCodeAt(0)?r.charCodeAt(0).toString(16):encodeURIComponent(r).replace(/\%/g,"").toLowerCase()}).join("")},a=function(r){return 0==r.length?"":decodeURIComponent("%"+r.match(/.{1,2}/g).join("%"))},c=function(r){return r=r.replace(RegExp(t(o),"g")," "),`{${_(r.slice(1,r.length-1))}}`},p=function(r){if(r.startsWith("{")&&r.endsWith("}"))return a(r.slice(1,r.length-1))},s=r.replace(u,"").replace(RegExp(`({[^}]*})+?|;([^${t(o)}]*)`,"g"),function(r,e,n){return void 0!==e?c(e):" "+c(`{${n.slice(1)}}`)}).replace(RegExp(t(o),"g")," "),v=/(\([^\(\)]+\))+?/g;v.test(s);)s=s.replace(v,"");s=(s=(s=s.replace(/\d+\.(\.\.)?/g,"")).replace(/\.\.\./g,"")).replace(/\$\d+/g,"");var h=X(s).split(RegExp(/\s+/));h=h.join(",").replace(/,,+/g,",").split(",");for(var g="",d=0;d<h.length-1;d++){var b=p(h[d]);if(void 0!==b){m[w()]=b;continue}if(null==(g=G(h[d],$)))return!1;M(g)}if(void 0!==(b=p(h[h.length-1]))&&(m[w()]=b,h.pop()),g=h[h.length-1],n.indexOf(g)>-1)(function r(e){for(var n in e)return!0;return!1})(E)&&void 0===E.Result&&P(["Result",g]);else{if(null==(g=G(g,$)))return!1;M(g)}return!0},header:function(){return P(arguments)},ascii:function(){return function r(){for(var e="   +------------------------+\n",n=_.a8;n<=_.h1;n++){if(0===H(n)&&(e+=" "+"87654321"[F(n)]+" |"),null==c[n])e+=" . ";else{var $=c[n].type;e+=" "+("w"===c[n].color?$.toUpperCase():$.toLowerCase())+" "}n+1&136&&(e+="|\n",n+=8)}return e+="   +------------------------+\n",e+="     a  b  c  d  e  f  g  h\n"}()},turn:function(){return s},move:function(r,e){var n=void 0!==e&&"sloppy"in e&&e.sloppy,$=null;if("string"==typeof r)$=G(r,n);else if("object"==typeof r){for(var t=O(),o=0,i=t.length;o<i;o++)if(r.from===Z(t[o].from)&&r.to===Z(t[o].to)&&(!("promotion"in t[o])||r.promotion===t[o].promotion)){$=t[o];break}}if(!$)return null;var u=V($);return M($),u},undo:function(){var r=W();return r?V(r):null},clear:function(){return S()},put:function(r,e){return k(r,e)},get:function(r){return L(r)},remove:function(r){var e,n;return n=L(e=r),c[_[e]]=null,n&&"k"===n.type&&(p[n.color]=-1),I(w()),n},perft:function(r){return function r(e){for(var n=O({legal:!1}),$=0,t=s,o=0,i=n.length;o<i;o++){if(M(n[o]),!K(t)){if(e-1>0){var u=r(e-1);$+=u}else $++}W()}return $}(r)},square_color:function(r){if(r in _){var e=_[r];return(F(e)+H(e))%2==0?"light":"dark"}return null},history:function(r){for(var e=[],n=[],$=void 0!==r&&("verbose"in r)&&r.verbose;b.length>0;)e.push(W());for(;e.length>0;){var t=e.pop();$?n.push(V(t)):n.push(q(t)),M(t)}return n},get_comment:function(){return m[w()]},set_comment:function(r){m[w()]=r.replace("{","[").replace("}","]")},delete_comment:function(){var r=m[w()];return delete m[w()],r},get_comments:function(){return A(),Object.keys(m).map(function(r){return{fen:r,comment:m[r]}})},delete_comments:function(){return A(),Object.keys(m).map(function(r){var e=m[r];return delete m[r],{fen:r,comment:e}})}}};"undefined"!=typeof exports&&(exports.Chess=Chess),"undefined"!=typeof define&&define(function(){return Chess});
