var O=(s,t,e)=>{if(!t.has(s))throw TypeError("Cannot "+e)};var l=(s,t,e)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,e)};var c=(s,t,e)=>(O(s,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();var k,R,g,S,v,Y,u,j,b,A;class T{constructor(){l(this,k);l(this,g);l(this,v);l(this,u);l(this,b);this.size=80,this.margin=5,this.color="hsla(0, 70%, 70%, 0.5)",this.joystick=c(this,k,R).call(this),this.stick=c(this,g,S).call(this),this.mouseDown=!1,this.x=0,this.y=0,c(this,v,Y).call(this)}}k=new WeakSet,R=function(){const t=document.createElement("div");return t.style.backgroundColor=this.color,t.style.position="absolute",t.style.left=`${this.margin}px`,t.style.top=`${innerHeight-this.size-this.margin}px`,t.style.width=`${this.size}px`,t.style.height=`${this.size}px`,t.style.borderRadius="100%",document.body.appendChild(t),t},g=new WeakSet,S=function(){const t=document.createElement("div");return t.style.backgroundColor=this.color,t.style.position="absolute",t.style.left=`${this.size/4}px`,t.style.top=`${this.size/4}px`,t.style.width=`${this.size/2}px`,t.style.height=`${this.size/2}px`,t.style.borderRadius="100%",this.joystick.appendChild(t),t},v=new WeakSet,Y=function(){this.joystick.addEventListener("mousedown",t=>{this.mouseDown=!0,c(this,u,j).call(this,t)}),window.addEventListener("mouseup",t=>{this.mouseDown=!1,c(this,b,A).call(this)}),addEventListener("mousemove",t=>{this.mouseDown!=!1&&c(this,u,j).call(this,t)})},u=new WeakSet,j=function(t){let e=t.y-this.joystick.offsetTop,r=t.y;if(e<0){e=0;let o=this.margin;r<o&&(r=o),this.joystick.style.top=`${r}px`}if(e>this.size){e=this.size;let o=innerHeight-this.margin;r>o&&(r=o),this.joystick.style.top=`${r-this.size}px`}this.stick.style.top=`${e/2}px`;let i=t.x-this.joystick.offsetLeft;i<0&&(i=0),i>this.size&&(i=this.size),this.stick.style.left=`${i/2}px`,this.y=e*2/this.size-1,this.x=i*2/this.size-1},b=new WeakSet,A=function(){this.stick.style.left=`${this.size/4}px`,this.stick.style.top=`${this.size/4}px`,this.x=0,this.y=0};const D=new T,V=Math.sqrt(2);class W{constructor(){this.canvas=document.querySelector("canvas"),this.w=this.canvas.width=innerWidth,this.h=this.canvas.height=innerHeight,this.ctx=this.canvas.getContext("2d")}}class F{constructor(){this.x=0,this.y=0,this.w=h.w,this.h=h.h}calc(){const t=K.x-h.w/2,e=f.w-h.w;this.x=t<0?0:t<e?t:e;const r=K.y-h.h/2,i=f.h-h.h;this.y=r<0?0:r<i?r:i}}var d,M;class C{constructor(){l(this,d);this.w=Math.round(w(3,5))*15,this.h=Math.round(w(3,5))*15,this.color=L(),c(this,d,M).call(this)}draw(){h.ctx.beginPath(),h.ctx.rect(this.x-y.x,this.y-y.y,this.w,this.h),h.ctx.closePath(),h.ctx.fillStyle=this.color,h.ctx.fill()}}d=new WeakSet,M=function(){this.x=Math.round(w(-75,f.w)),this.y=Math.round(w(0,f.h-this.h));for(let t of E)if(q(this,t))return c(this,d,M).call(this)};class U{constructor(){this.w=!1,this.s=!1,this.a=!1,this.d=!1,window.addEventListener("keydown",t=>this.keyDownHandler(t)),window.addEventListener("keyup",t=>this.keyUpHandler(t))}keyDownHandler({code:t}){t==="KeyW"&&(this.w=!0),t==="KeyS"&&(this.s=!0),t==="KeyA"&&(this.a=!0),t==="KeyD"&&(this.d=!0)}keyUpHandler({code:t}){t==="KeyW"&&(this.w=!1),t==="KeyS"&&(this.s=!1),t==="KeyA"&&(this.a=!1),t==="KeyD"&&(this.d=!1)}}var $,N,z,X;class G{constructor(){l(this,$);l(this,z);this.w=this.h=15,this.x=20,this.y=20,this.color=L(),this.direction={x:0,y:0},this.speed=2}move(){const t=D.x,e=D.y,r=t&&e?this.speed/V:this.speed;this.x+=t*r;let i=c(this,$,N).call(this);for(let a of m){const n=H(this,a);n&&(t>0&&-n.left<i&&(i=-n.left),t<0&&n.right>i&&(i=n.right))}this.x+=i,this.y+=e*r;let o=c(this,z,X).call(this);for(let a of m){const n=H(this,a);n&&(e>0&&-n.top<o&&(o=-n.top),e<0&&n.bottom>o&&(o=n.bottom))}this.y+=o}draw(){this.move(),h.ctx.beginPath(),h.ctx.rect(this.x-y.x,this.y-y.y,this.w,this.h),h.ctx.closePath(),h.ctx.fillStyle=this.color,h.ctx.fill()}}$=new WeakSet,N=function(){const t=0-this.x;if(t>0)return t;const e=f.w-this.x-this.w;return e<0?e:0},z=new WeakSet,X=function(){const t=0-this.y;if(t>0)return t;const e=f.h-this.y-this.h;return e<0?e:0};class I{constructor(){this.w=2e3,this.h=2e3}}function H(s,t){const e=s.x+s.w-t.x,r=t.x+t.w-s.x,i=s.y+s.h-t.y,o=t.y+t.h-s.y;return e>0&&r>0&&i>0&&o>0?{left:e,right:r,top:i,bottom:o}:!1}function q(s,t){let e=s.x>=t.x+t.w||s.x+s.w<=t.x,r=s.y>=t.y+t.h||s.y+s.h<=t.y;return!(e||r)}function J(){let s=[];for(let t of E)q(t,y)&&s.push(t);return s}function w(s,t){return Math.random()*(t-s)+s}function L(s=80,t=50,e=1){return`hsla(${Math.round(Math.random()*4)*360/5},${s}%,${t}%,${e})`}function B(s=0){s>P+Q&&(P=s,h.ctx.clearRect(0,0,h.w,h.h),y.calc(),m=J(),K.draw(),m.map(t=>t.draw())),window.requestAnimationFrame(B)}const h=new W,f=new I,E=[];for(let s=0;s<500;s++)E.push(new C);const K=new G,y=new F;new U;let m=[],P=0,Q=1e3/65,x=new C;x.x=40;x.y=40;x.w=50;x.h=15;x.color=L();let p=new C;p.x=90;p.y=41;p.w=15;p.h=15;p.color=L();B();
