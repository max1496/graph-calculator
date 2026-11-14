/* On-this-page navigation and site search. Included with <script defer src="/toc.js"></script> */
(function(){
var SITE=[
['Graphing calculator','/','graph plot equation function calculator desmos'],
['What is a function?','/what-is-a-function.html','function input output rule vertical line test relation'],
['Equations and functions','/what-is-a-function.html#equations','equation solve f(x)=g(x) intersection zeros roots relationship'],
['Floor function (Gauss bracket)','/what-is-a-function.html#floor','floor ceiling greatest integer gauss bracket step round down'],
['Algebra 1','/algebra-1.html','algebra 1 hub linear systems books'],
['Algebra 2','/algebra-2.html','algebra 2 hub polynomials books'],
['Precalculus','/precalculus.html','precalculus hub'],
['All topics: pre-algebra to precalculus','/curriculum.html','curriculum contents table of contents list levels pre-algebra algebra 1 algebra 2 precalculus'],
['Math basics (slope, intercept, fractions, percent)','/basics.html','basics pre-algebra middle school elementary slope intercept fraction percent ratio order of operations integers'],
['Practice problems and mistake notebook','/practice.html','practice problems word problems answers mistake notebook wrong answers review quiz'],
['Limit calculator','/limits.html','limit lim x->0 one-sided left right infinity infinite approaches'],
['Normal distribution and z-scores','/normal-distribution.html','statistics normal distribution bell curve z-score z value standard deviation mean median percentile probability empirical rule'],
['Parent functions','/parent-functions.html','parent function basic graphs cube root circle floor even odd'],
['Function transformations','/function-transformations.html','shift stretch compress reflect rotate translation horizontal vertical'],
['Functions and inverses','/functions-and-inverses.html','inverse one-to-one onto domain range symmetry horizontal line test'],
['Continuity and derivatives','/continuity-and-derivatives.html','continuous differentiable derivative tangent slope corner cusp discontinuity'],
['Polynomials by degree','/polynomial-degrees.html','polynomial degree roots turning points end behavior multiplicity cubic quartic'],
['Linear function','/linear-function.html','linear slope intercept line word problems taxi'],
['Quadratic function','/quadratic-function.html','quadratic parabola vertex roots discriminant word problems projectile'],
['Regression','/regression.html','regression best fit line data scatter'],
['Trigonometry','/trigonometry.html','sine cosine tangent unit circle radians identities'],
['Ellipses and hyperbolas (conic sections)','/conic-sections.html','conic circle ellipse hyperbola parabola foci asymptotes'],
['Rational functions','/rational-functions.html','rational asymptote hole vertical horizontal slant'],
['Polynomial from roots','/polynomial-from-roots.html','roots multiplicity factored expanded'],
['Rational Root Theorem','/rational-root-theorem.html','rational root p/q'],
['Descartes\' Rule of Signs','/descartes-rule-of-signs.html','sign changes positive negative roots'],
['Intermediate Value Theorem','/intermediate-value-theorem.html','ivt root exists continuous'],
['Geometry transformations','/geometry-transformations.html','translation reflection rotation dilation'],
['Feature: Details of graph','/','details intercept maximum minimum inflection asymptote domain range properties'],
['Feature: Pin points and tangent lines','/','pin point tangent line mark slope'],
['Feature: Move and reshape, make tangent, inverse','/','move shift stretch flip inverse make tangent'],
['Feature: Intersections of graphs','/','intersection meet cross solve'],
['Feature: Polar curves and Fun shapes (flower, butterfly)','/','polar flower rose spiral butterfly heart cardioid r=cos fun'],
['Feature: Share link and Save image','/','share link save image download png'],
['Feature: Piecewise functions and inequalities','/','piecewise inequality shade condition braces'],
['About this site','/about.html','about contact']
];
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
'#tocp{position:fixed;left:12px;bottom:56px;z-index:60;width:min(340px,calc(100vw - 24px));max-height:65vh;overflow:auto;border:1px solid var(--line);background:var(--bg);color:var(--ink);border-radius:12px;padding:10px 12px;box-shadow:0 4px 16px rgba(0,0,0,.22)}'+
'#tocp h4{margin:10px 0 4px;font-size:13px;color:var(--sub);font-weight:600}#tocp .toc a{display:block;padding:5px 4px;color:var(--ink);text-decoration:none;font-size:14px;border-radius:6px}#tocp .toc a.cur{background:var(--panel);font-weight:700;color:#2f6fed}';
document.head.appendChild(st);
function init(){
var inl=document.getElementById('sitesearch');
if(inl){box(inl,'Search topics and features (e.g. floor, inverse, flower)');return}
var hs=[].slice.call(document.querySelectorAll('h2')).filter(function(h){return h.offsetParent!==null});
hs.forEach(function(h,i){if(!h.id)h.id='sec-'+(i+1)});
var b=document.createElement('button');b.id='tocb';b.type='button';b.setAttribute('aria-expanded','false');
var p=document.createElement('div');p.id='tocp';p.hidden=true;
p.innerHTML='<div id="tsb"></div>'+(hs.length>=3?'<h4>On this page</h4><div class="toc">'+hs.map(function(h){return'<a href="#'+h.id+'">'+esc(h.textContent)+'</a>'}).join('')+'</div>':'');
document.body.appendChild(p);document.body.appendChild(b);
var inp=box(p.querySelector('#tsb'),'Search the site');
var links=[].slice.call(p.querySelectorAll('.toc a'));
function label(){var cur=-1;for(var i=0;i<hs.length;i++){if(hs[i].getBoundingClientRect().top<140)cur=i}
b.textContent=hs.length>=3?'☰ '+(cur<0?'Top':(cur+1)+'/'+hs.length+' · '+hs[cur].textContent):'🔍 Search';
links.forEach(function(a,i){a.className=i===cur?'cur':''})}
b.onclick=function(){p.hidden=!p.hidden;b.setAttribute('aria-expanded',!p.hidden);if(!p.hidden)inp.focus()};
p.addEventListener('click',function(e){if(e.target.closest('.toc a'))p.hidden=true});
document.addEventListener('keydown',function(e){if(e.key==='Escape')p.hidden=true});
addEventListener('scroll',label,{passive:true});addEventListener('resize',label);label();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
