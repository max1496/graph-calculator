/* Site navigator: breadcrumb, reading progress, page sections, site map, previous/next, search.
   Include with <script defer src="/toc.js"></script> */
(function(){
var PATH=[
['Pre-algebra',[['basics','Math basics'],['what-is-a-function','What is a function?'],['practice','Practice and mistake notebook']]],
['Algebra 1',[['algebra-1','Algebra 1 home'],['linear-function','Linear functions'],['quadratic-function','Quadratic functions'],['parent-functions','Parent functions'],['regression','Regression'],['geometry-transformations','Geometry transformations']]],
['Algebra 2',[['algebra-2','Algebra 2 home'],['function-transformations','Function transformations'],['polynomial-from-roots','Polynomial from roots'],['rational-root-theorem','Rational Root Theorem'],['descartes-rule-of-signs','Descartes\' Rule of Signs'],['rational-functions','Rational functions'],['conic-sections','Ellipses and hyperbolas']]],
['Precalculus',[['precalculus','Precalculus home'],['functions-and-inverses','Functions and inverses'],['polynomial-degrees','Polynomials by degree'],['trigonometry','Trigonometry'],['intermediate-value-theorem','Intermediate Value Theorem'],['limits','Limits'],['continuity-and-derivatives','Continuity and derivatives'],['normal-distribution','Normal distribution and z-scores']]]
];
var SITE=[
['Graphing calculator','/','graph plot equation function calculator desmos'],
['All topics: pre-algebra to precalculus','/curriculum.html','curriculum contents table of contents site map list levels'],
['Math basics (slope, intercept, fractions, percent)','/basics.html','basics pre-algebra middle school elementary slope intercept fraction percent ratio order of operations integers'],
['Practice problems and mistake notebook','/practice.html','practice problems word problems answers mistake notebook wrong answers review quiz'],
['What is a function?','/what-is-a-function.html','function input output rule vertical line test relation'],
['Intervals: interval notation, brackets, union','/what-is-a-function.html#intervals','interval notation bracket parenthesis open closed union infinity inequality number line'],
['Domain and range (with a picture)','/what-is-a-function.html#domain-range','domain range interval notation bracket shadow'],
['Equations and functions','/what-is-a-function.html#equations','equation solve f(x)=g(x) intersection zeros roots relationship'],
['Floor function (Gauss bracket)','/what-is-a-function.html#floor','floor ceiling greatest integer gauss bracket step round down'],
['Limit calculator','/limits.html','limit lim x->0 one-sided left right infinity infinite approaches'],
['Normal distribution and z-scores','/normal-distribution.html','statistics normal distribution bell curve z-score z value standard deviation mean median percentile probability empirical rule'],
['About this site','/about.html','about contact privacy'],
['Feature: Details of graph','/','details intercept maximum minimum inflection asymptote domain range properties'],
['Feature: Pin points and tangent lines','/','pin point tangent line mark slope'],
['Feature: Move and reshape, make tangent, inverse','/','move shift stretch flip inverse make tangent'],
['Feature: Intersections of graphs','/','intersection meet cross solve'],
['Feature: Polar curves and Fun shapes (flower, butterfly)','/','polar flower rose spiral butterfly heart cardioid r=cos fun'],
['Feature: Share link and Save image','/','share link save image download png'],
['Feature: Piecewise functions and inequalities','/','piecewise inequality shade condition braces']
];
var KW={'algebra-1':'algebra 1 hub linear systems books','algebra-2':'algebra 2 hub polynomials books','precalculus':'precalculus hub','parent-functions':'parent function basic graphs cube root circle floor even odd','function-transformations':'shift stretch compress reflect rotate translation horizontal vertical','functions-and-inverses':'inverse one-to-one onto domain range symmetry horizontal line test','continuity-and-derivatives':'continuous differentiable derivative tangent slope corner cusp discontinuity','polynomial-degrees':'polynomial degree roots turning points end behavior multiplicity cubic quartic','linear-function':'linear slope intercept line word problems taxi','quadratic-function':'quadratic parabola vertex roots discriminant word problems projectile','regression':'regression best fit line data scatter','trigonometry':'sine cosine tangent unit circle radians identities','conic-sections':'conic circle ellipse hyperbola parabola foci asymptotes','rational-functions':'rational asymptote hole vertical horizontal slant','polynomial-from-roots':'roots multiplicity factored expanded','rational-root-theorem':'rational root p/q','descartes-rule-of-signs':'sign changes positive negative roots','intermediate-value-theorem':'ivt root exists continuous','geometry-transformations':'translation reflection rotation dilation'};
var urlOf={},nameOf={},lvlOf={},idxOf={};
PATH.forEach(function(L){L[1].forEach(function(p,i){urlOf[p[0]]='/'+p[0]+'.html';nameOf[p[0]]=p[1];lvlOf[p[0]]=L[0];idxOf[p[0]]=i;if(!/^(basics|what-is-a-function|practice|limits|normal-distribution)$/.test(p[0]))SITE.push([p[1],'/'+p[0]+'.html',(KW[p[0]]||'')])})});
var slug=location.pathname.replace(/^\//,'').replace(/\.html$/,'').replace(/\/$/,'')||'index';
function esc(s){return s.replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function search(q){q=q.toLowerCase().split(/\s+/).filter(Boolean);if(!q.length)return[];
return SITE.filter(function(s){var h=(s[0]+' '+s[2]).toLowerCase();return q.every(function(w){return h.indexOf(w)>-1})}).slice(0,8)}
function box(host,placeholder){
host.innerHTML='<input type="search" class="ss-in" placeholder="'+placeholder+'" aria-label="Search topics and features" autocomplete="off"><div class="ss-out"></div>';
var inp=host.querySelector('input'),out=host.querySelector('.ss-out');
inp.addEventListener('input',function(){var r=search(inp.value);
out.innerHTML=inp.value.trim()?(r.length?r.map(function(s){return'<a href="'+s[1]+'">'+esc(s[0])+'</a>'}).join(''):'<span class="ss-no">No match. Try another word.</span>'):''});
return inp}
var st=document.createElement('style');
st.textContent='.ss-in{width:100%;font:inherit;font-size:16px;padding:8px 10px;border:1px solid var(--line);background:var(--panel);color:var(--ink);border-radius:8px}.ss-out a{display:block;padding:6px 4px;color:#2f6fed;text-decoration:none;font-size:15px;border-bottom:1px solid var(--line)}.ss-no{display:block;padding:6px 4px;color:var(--sub);font-size:14px}'+
'#tocb{position:fixed;left:12px;bottom:12px;z-index:60;max-width:calc(100vw - 24px);border:1px solid var(--line);background:var(--bg);color:var(--ink);border-radius:999px;padding:8px 14px;font:inherit;font-size:14px;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.18);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}'+
'#tocp{position:fixed;left:12px;bottom:56px;z-index:60;width:min(360px,calc(100vw - 24px));max-height:70vh;overflow:auto;border:1px solid var(--line);background:var(--bg);color:var(--ink);border-radius:12px;padding:10px 12px;box-shadow:0 4px 16px rgba(0,0,0,.22)}'+
'#tocp h4{margin:12px 0 4px;font-size:13px;color:var(--sub);font-weight:600}#tocp .toc a,#tocp .map a{display:block;padding:5px 6px;color:var(--ink);text-decoration:none;font-size:14px;border-radius:6px}#tocp .toc a.cur,#tocp .map a.cur{background:var(--panel);font-weight:700;color:#2f6fed}#tocp .map b{display:block;margin-top:8px;font-size:13px;color:var(--sub)}#tocp .here{background:var(--panel);border-radius:8px;padding:8px 10px;font-size:14px;margin-bottom:8px}'+
'#crumb{width:min(100%,640px);font-size:13px;color:var(--sub);display:flex;flex-wrap:wrap;gap:2px 6px;align-items:center}#crumb a{color:var(--sub)}#crumb b{color:var(--ink)!important}#crumb .mp{margin-left:auto;border:1px solid var(--line);border-radius:12px;padding:1px 9px;text-decoration:none;color:#2f6fed;background:var(--panel);cursor:pointer;font:inherit;font-size:12px}'+
'#rbar{position:fixed;top:0;left:0;height:3px;width:0;background:#2f6fed;z-index:70;transition:width .1s}'+
'#pn{width:min(100%,640px);display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:6px}#pn a{display:block;border:1px solid var(--line);background:var(--panel);border-radius:10px;padding:10px 12px;text-decoration:none;color:var(--ink);font-size:14px}#pn a small{display:block;color:var(--sub);font-size:12px}#pn a b{color:#2f6fed;font-size:15px}#pn a:last-child{text-align:right}#pn a:only-child{grid-column:1/-1}@media print{#tocb,#tocp,#crumb,#rbar,#pn{display:none!important}}';
document.head.appendChild(st);
function init(){
var inl=document.getElementById('sitesearch');
if(inl){box(inl,'Search topics and features (e.g. floor, inverse, flower)');return}
var lvl=lvlOf[slug],name=nameOf[slug];
/* breadcrumb */
var cr=document.createElement('nav');cr.id='crumb';cr.setAttribute('aria-label','Breadcrumb');
cr.innerHTML='<a href="/">Calculator</a> › <a href="/curriculum.html">All topics</a>'+(lvl?' › <span>'+esc(lvl)+'</span> › <b>'+esc(name)+'</b>':' › <b>'+esc((document.querySelector('h1')||{textContent:document.title}).textContent)+'</b>')+'<button type="button" class="mp" id="mpb">🗺 Map</button>';
document.body.insertBefore(cr,document.body.firstChild);
var bar=document.createElement('div');bar.id='rbar';document.body.appendChild(bar);
/* previous / next */
if(lvl){var flat=[];PATH.forEach(function(L){L[1].forEach(function(p){flat.push(p[0])})});var i=flat.indexOf(slug),pr=flat[i-1],nx=flat[i+1];var ft=document.querySelector('.ft');
 if(ft&&(pr||nx)){var d=document.createElement('div');d.id='pn';d.innerHTML=(pr?'<a href="'+urlOf[pr]+'"><small>← Previous lesson · '+esc(lvlOf[pr])+'</small><b>'+esc(nameOf[pr])+'</b></a>':'')+(nx?'<a href="'+urlOf[nx]+'"><small>Next lesson → '+(lvlOf[nx]!==lvl?'(new level: '+esc(lvlOf[nx])+')':esc(lvlOf[nx]))+'</small><b>'+esc(nameOf[nx])+'</b></a>':'');ft.parentNode.insertBefore(d,ft)}}
/* panel */
var hs=[].slice.call(document.querySelectorAll('h2')).filter(function(h){return h.offsetParent!==null});
hs.forEach(function(h,i){if(!h.id)h.id='sec-'+(i+1)});
var b=document.createElement('button');b.id='tocb';b.type='button';b.setAttribute('aria-expanded','false');
var p=document.createElement('div');p.id='tocp';p.hidden=true;
var map=PATH.map(function(L){return'<b>'+esc(L[0])+'</b>'+L[1].map(function(q){return'<a href="/'+q[0]+'.html"'+(q[0]===slug?' class="cur"':'')+'>'+(q[0]===slug?'📍 ':'')+esc(q[1])+'</a>'}).join('')}).join('');
p.innerHTML='<div id="tsb"></div>'+(lvl?'<div class="here" style="margin-top:8px">📍 You are here: <b>'+esc(lvl)+' › '+esc(name)+'</b></div>':'')+(hs.length>=3?'<h4>On this page</h4><div class="toc">'+hs.map(function(h){return'<a href="#'+h.id+'">'+esc(h.textContent)+'</a>'}).join('')+'</div>':'')+'<h4>Site map</h4><div class="map" id="smap">'+map+'<b>Tools</b><a href="/">Graphing calculator</a><a href="/curriculum.html">All topics (full list)</a></div>';
document.body.appendChild(p);document.body.appendChild(b);
var inp=box(p.querySelector('#tsb'),'Search the site');
var links=[].slice.call(p.querySelectorAll('.toc a'));
function label(){var cur=-1;for(var i=0;i<hs.length;i++){if(hs[i].getBoundingClientRect().top<140)cur=i}
var sc=document.documentElement.scrollHeight-innerHeight;bar.style.width=(sc>0?Math.min(100,scrollY/sc*100):0)+'%';
b.textContent=hs.length>=3?'☰ '+(cur<0?'Top':(cur+1)+'/'+hs.length+' · '+hs[cur].textContent):'☰ Menu';
links.forEach(function(a,i){a.className=i===cur?'cur':''})}
function toggle(){p.hidden=!p.hidden;b.setAttribute('aria-expanded',!p.hidden);if(!p.hidden)p.scrollTop=0;}
b.onclick=toggle;document.getElementById('mpb').onclick=function(){toggle()};
p.addEventListener('click',function(e){if(e.target.closest('.toc a'))p.hidden=true});
document.addEventListener('keydown',function(e){if(e.key==='Escape')p.hidden=true});
addEventListener('scroll',label,{passive:true});addEventListener('resize',label);label();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
