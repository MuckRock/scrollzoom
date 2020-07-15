'use strict';var q=this;
function r(){function y(a){let b=!0;return()=>{b?b=!1:a()}}function t(a){let b=null;return(...c)=>{null!=b&&(cancelAnimationFrame(b),b=null);b=requestAnimationFrame(()=>{b=null;a(...c)})}}function z(a,b){let c=["resize",t(b)];window.addEventListener(...c);return()=>window.removeEventListener(...c)}function A(a,b){let c=new ResizeObserver(y(t(b)));c.observe(a);return()=>c.disconnect()}function B(a,b){return null!=window.ResizeObserver?A(a,b):z(a,b)}function u(){var a=new p(6);p!=Float32Array&&(a[1]=
0,a[2]=0,a[4]=0,a[5]=0);a[0]=1;a[3]=1;return a}function v(a,b,c){var d=b[1],e=b[2],f=b[3],g=b[4],h=b[5],k=c[0];c=c[1];a[0]=b[0]*k;a[1]=d*k;a[2]=e*c;a[3]=f*c;a[4]=g;a[5]=h;return a}function n(a,b,c){var d=b[0],e=b[1],f=b[2],g=b[3],h=b[4];b=b[5];var k=c[0];c=c[1];a[0]=d;a[1]=e;a[2]=f;a[3]=g;a[4]=d*k+f*c+h;a[5]=e*k+g*c+b;return a}function C(){var a=new p(2);p!=Float32Array&&(a[0]=0,a[1]=0);return a}function w(a,b,c){var d=b[0];b=b[1];a[0]=c[0]*d+c[2]*b+c[4];a[1]=c[1]*d+c[3]*b+c[5];return a}function m(a,
b,c=1E-6){return Math.abs(a-b)<c}function x(a,b){var c=a.pageX;a=a.pageY;var d=b.offsetLeft,e=b.offsetTop;for(b=b.offsetParent;b;)d+=b.offsetLeft,e+=b.offsetTop,b=b.offsetParent;return{x:c-d,y:a-e}}class D{constructor(a,b,c=B){this.element=a;this.C=b;this.I(!0);c(a,()=>this.I())}I(a=!1){this.width=this.element.offsetWidth;this.height=this.element.offsetHeight;a||null==this.C||this.C(this.width,this.height)}}var p="undefined"!==typeof Float32Array?Float32Array:Array;Math.hypot||(Math.hypot=function(){for(var a=
0,b=arguments.length;b--;)a+=arguments[b]*arguments[b];return Math.sqrt(a)});(function(){var a=C();return function(b,c,d,e,f,g){c||(c=2);d||(d=0);for(e=e?Math.min(e*c+d,b.length):b.length;d<e;d+=c)a[0]=b[d],a[1]=b[d+1],f(a,a,g),b[d]=a[0],b[d+1]=a[1];return b}})();class E{constructor(a,b){this.b=u();this.A=null;this.j=b;this.viewport=[a.width,a.height];this.D=!0;this.a=null}v(a){this.viewport=a}N(){if(null!=this.a){var a=0,b=0,[c,d]=this.o([0,0]),[e,f]=this.o(this.a[0]),g=this.a[1][0],h=this.a[1][1];
e-c<g?0>c?a=c:e>g&&(a=e-g):a=c+(e-c)/2-g/2;f-d<h?0>d?b=d:f>h&&(b=f-h):b=d;m(a,0)&&m(b,0)||n(this.b,this.b,[a,b])}}F(a){this.b=a;this.N();null!=this.A&&this.D&&this.A();null!=this.j&&this.j()}i(a){let b=[0,0];w(b,a,this.b);return b}o(a){let b=[0,0],c=u();var d=this.b,e=d[0],f=d[1],g=d[2],h=d[3],k=d[4];d=d[5];var l=e*h-f*g;l&&(l=1/l,c[0]=h*l,c[1]=-f*l,c[2]=-g*l,c[3]=e*l,c[4]=(g*d-h*k)*l,c[5]=(f*k-e*d)*l);w(b,a,c);return b}scale(a,b,c){.2>this.b[0]*c?c=.2/this.b[0]:8<this.b[0]*c&&(c=8/this.b[0]);let [d,
e]=this.o([a,b]);n(this.b,this.b,[d,e]);v(this.b,this.b,[c,c]);n(this.b,this.b,[-d,-e]);this.F(this.b)}P(a,b,c){let d=this.viewport[0],e=this.viewport[1];b=Math.min(d/b,e/c);c=u();n(c,c,[d/2,e/2]);v(c,c,[b,b]);n(c,c,[-a[0],-a[1]]);return c}O(a,b,c,d,e,f){c*=e;d*=f;this.F(this.P([a*e+c/2,b*f+d/2],c,d))}}class F{constructor(a,b,c,d,e){this.element=a;this.c=b;this.a=d;this.transform=e;this.B=1;this.J();this.h=c[0];this.g=c[1];this.v();this.l=!1;this.u=[[["scroll"],()=>this.scroll()],[["wheel"],f=>this.$(f)],
[["gesturestart"],()=>this.S()],[["gesturechange"],f=>this.R(f)],[["touchstart"],f=>this.X(f)],[["touchmove"],f=>this.W(f)],[["touchend"],f=>this.V(f)]];this.U=t((f,g,h,k)=>{this.f={left:h,top:k,width:f,height:g};m(f,this.c.offsetWidth)&&m(g,this.c.offsetHeight)||(this.c.style.width=`${f}px`,this.c.style.height=`${g}px`);m(h,this.element.scrollLeft)||(this.l=!0,this.element.scrollLeft=h);m(k,this.f.scrollTop)||(this.l=!0,this.element.scrollTop=k)});this.transform.A=()=>this.Y();this.u.forEach(f=>
{f[0].forEach(g=>{this.element.addEventListener(g,f[1],{passive:!1})})});this.K()}v(){this.transform.a=[[this.a.width,this.a.height],[this.h,this.g]]}Y(){let a=this.transform.i([0,0]),b=this.transform.i([this.h,this.g]);this.U(b[0]-a[0],b[1]-a[1],-a[0],-a[1])}scroll(){this.l?this.l=!1:(this.J(),this.K())}scrollTo(a){this.l=!1;this.element.scrollTop=a}K(){let a=this.f.top/this.f.height,b=this.a.height/this.f.height,c=this.f.left/this.f.width,d=this.a.width/this.f.width;1<d&&(c-=(d-1)/2);this.transform.D=
!1;this.transform.O(c,a,d,b,this.h,this.g);this.transform.D=!0}$(a){if(a.ctrlKey&&!this.w()){a.preventDefault();let {x:d,y:e}=x(a,this.element);var b=a.detail;a=15*-a.deltaY||a.wheelDelta||a.wheelDeltaY;var c;b=b?a&&(c=a/b)?b/c:-b/1.35:a/120;b=1>b?-1>b?(-Math.pow(b,2)-224)/225:b:(Math.pow(b,2)+224)/225;b=Math.min(Math.max(b/2,-1),1);0!=b&&this.transform.scale(d,e,Math.exp(.15*b))}}S(){this.B=1}R(a){if(!this.w()){var b=a.scale/this.B,{x:c,y:d}=x(a,this.element);this.transform.scale(c,d,b);this.B=a.scale}}w(){return null!=
window.visualViewport&&1<window.visualViewport.scale}X(a){2<=a.touches.length&&!this.w()&&(a.stopImmediatePropagation(),a.preventDefault())}W(a){2<=a.touches.length&&!this.w()&&(a.stopImmediatePropagation(),a.preventDefault())}V(a){0==a.touches.length&&1==a.changedTouches.length&&a.preventDefault()}J(){this.f={left:this.element.scrollLeft,top:this.element.scrollTop,width:this.c.scrollWidth,height:this.c.scrollHeight}}}class G{constructor(a,b){this.element=a;this.options=b;this.a=new D(this.element);
this.L=0;this.s=(this.options.components||[]).map(c=>({...c,id:this.L++}));this.m={};this.H={};this.h=this.options.width||500;this.g=this.options.height||500;this.G=this.options.changeCallback;this.c=document.createElement("div");this.c.style.width=`${this.h}px`;this.c.style.height=`${this.g}px`;this.c.style.position="relative";this.c.style.margin="0 auto";this.element.appendChild(this.c);this.transform=new E(this.a,()=>this.j());this.j();this.u=new F(this.element,this.c,[this.h,this.g],this.a,this.transform);
this.a.C=(c,d)=>this.T(c,d)}T(a,b){this.transform.v([a,b]);this.u.v();this.transform.F(this.transform.b)}M(a){let b=a.id,c=this.m[b];return null!=c?(a=a.component.destroy,null!=a&&a(c),c.remove(),delete this.m[b],delete this.H[b],!0):!1}Z(){null!=this.G&&this.G()}j(){var a=!1;for(var b=0;b<this.s.length;b++){var c=this.s[b],d=this.transform.i([0,0]),e=this.transform.i([c.x,c.y]);let f=this.transform.i([c.x+c.width,c.y+c.height]),g=this.transform.i([this.h,this.g]);d={x:e[0]-d[0],y:e[1]-d[1],width:f[0]-
e[0],height:f[1]-e[1],ca:g[0]-d[0],ba:g[1]-d[1]};0>f[0]||e[0]>this.a.width||0>f[1]||e[1]>this.a.height?this.M(c)&&(a=!0):null==this.m[c.id]?(a=c.component.render(d),this.m[c.id]=a,this.H[c.id]=c,this.element.children[0].appendChild(a),a=!0):c.component.update(this.m[c.id],d)}a&&this.Z();b=this.options.debugCanvas;c=this.options.width;a=this.options.height;if(null!=b)for(b=b.getContext("2d"),b.clearRect(-c/.5,-a/.5,c/.5*2,a/.5*2),b.restore(),b.save(),b.scale(.5,.5),b.translate(.5*c,.5*a),c=this.transform.o([0,
0]),a=this.transform.o([this.a.width,this.a.height]),b.strokeRect(c[0],c[1],a[0]-c[0],a[1]-c[1]),b.fillStyle="rgba(0, 0, 0, 0.02)",b.strokeRect(c[0],c[1],a[0]-c[0],a[1]-c[1]),c=0;c<this.s.length;c++)e=this.s[c],a=[e.x,e.y],e=[e.x+e.width,e.y+e.height],b.fillStyle="rgba(0, 0, 0, 0.08)",b.fillRect(a[0],a[1],e[0]-a[0],e[1]-a[1])}scrollTo(a){this.u.scrollTo(a)}}return G}
"object"===typeof exports&&"undefined"!==typeof module?module.exports=r():"function"===typeof define&&define.aa?define(r):(q=q||self,q.ScrollZoom=r())
