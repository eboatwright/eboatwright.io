import{s as G,n as z}from"../chunks/scheduler.Dl1OXHgJ.js";import{S as L,i as O,e as x,q as j,s as P,a as $,b,r as k,d,c as C,f as v,j as y,k as g,u as B,v as Q,h as U,m as S,l as X,t as A,w as T,x as H,y as K,z as J,p as Y}from"../chunks/index.COK2idQs.js";import{H as Z}from"../chunks/HorizontalDivider.taCnI1nT.js";function D(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function N(i,t,l){const n=i.slice();return n[1]=t[l],n}function R(i){let t,l=i[1]+"",n;return{c(){t=x("p"),n=j(l),this.h()},l(s){t=$(s,"P",{class:!0});var e=b(t);n=k(e,l),e.forEach(d),this.h()},h(){v(t,"class","font-bookman text-gray-100 text-xs md:text-sm lg:text-base")},m(s,e){y(s,t,e),g(t,n)},p(s,e){e&1&&l!==(l=s[1]+"")&&B(n,l)},d(s){s&&d(t)}}}function ee(i){let t,l,n,s=i[0].name+"",e,p,a,r,o,u=i[0].timeframe+"",E,M,V,_=D(i[0].description),h=[];for(let f=0;f<_.length;f+=1)h[f]=R(N(i,_,f));return{c(){t=x("div"),l=x("div"),n=x("a"),e=j(s),a=P(),r=x("p"),o=j("("),E=j(u),M=j(")"),V=P();for(let f=0;f<h.length;f+=1)h[f].c();this.h()},l(f){t=$(f,"DIV",{class:!0});var m=b(t);l=$(m,"DIV",{});var c=b(l);n=$(c,"A",{class:!0,href:!0,target:!0});var w=b(n);e=k(w,s),w.forEach(d),a=C(c),r=$(c,"P",{class:!0});var I=b(r);o=k(I,"("),E=k(I,u),M=k(I,")"),I.forEach(d),c.forEach(d),V=C(m);for(let q=0;q<h.length;q+=1)h[q].l(m);m.forEach(d),this.h()},h(){v(n,"class","font-bookman text-blue-400 underline decoration-1 text-lg md:text-xl md:text-2xl lg:text-3xl"),v(n,"href",p=i[0].link),v(n,"target","_blank"),v(r,"class","font-bookman text-gray-400 text-[0.6rem] md:text-xs lg:text-md"),v(t,"class","space-y-2")},m(f,m){y(f,t,m),g(t,l),g(l,n),g(n,e),g(l,a),g(l,r),g(r,o),g(r,E),g(r,M),g(t,V);for(let c=0;c<h.length;c+=1)h[c]&&h[c].m(t,null)},p(f,[m]){if(m&1&&s!==(s=f[0].name+"")&&B(e,s),m&1&&p!==(p=f[0].link)&&v(n,"href",p),m&1&&u!==(u=f[0].timeframe+"")&&B(E,u),m&1){_=D(f[0].description);let c;for(c=0;c<_.length;c+=1){const w=N(f,_,c);h[c]?h[c].p(w,m):(h[c]=R(w),h[c].c(),h[c].m(t,null))}for(;c<h.length;c+=1)h[c].d(1);h.length=_.length}},i:z,o:z,d(f){f&&d(t),Q(h,f)}}}function te(i,t,l){let{project:n}=t;return i.$$set=s=>{"project"in s&&l(0,n=s.project)},[n]}class ne extends L{constructor(t){super(),O(this,t,te,ee,G,{project:0})}}function W(i,t,l){const n=i.slice();return n[1]=t[l],n}function F(i){let t,l,n,s;return t=new ne({props:{project:i[1]}}),n=new Z({}),{c(){T(t.$$.fragment),l=P(),T(n.$$.fragment)},l(e){H(t.$$.fragment,e),l=C(e),H(n.$$.fragment,e)},m(e,p){K(t,e,p),y(e,l,p),K(n,e,p),s=!0},p:z,i(e){s||(S(t.$$.fragment,e),S(n.$$.fragment,e),s=!0)},o(e){A(t.$$.fragment,e),A(n.$$.fragment,e),s=!1},d(e){e&&d(l),J(t,e),J(n,e)}}}function le(i){let t,l,n,s=D(i[0]),e=[];for(let a=0;a<s.length;a+=1)e[a]=F(W(i,s,a));const p=a=>A(e[a],1,1,()=>{e[a]=null});return{c(){t=P(),l=x("div");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){U("svelte-3123ig",document.head).forEach(d),t=C(a),l=$(a,"DIV",{class:!0});var o=b(l);for(let u=0;u<e.length;u+=1)e[u].l(o);o.forEach(d),this.h()},h(){document.title="Evan Boatwright / Projects",v(l,"class","space-y-8")},m(a,r){y(a,t,r),y(a,l,r);for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(l,null);n=!0},p(a,[r]){if(r&1){s=D(a[0]);let o;for(o=0;o<s.length;o+=1){const u=W(a,s,o);e[o]?(e[o].p(u,r),S(e[o],1)):(e[o]=F(u),e[o].c(),S(e[o],1),e[o].m(l,null))}for(Y(),o=s.length;o<e.length;o+=1)p(o);X()}},i(a){if(!n){for(let r=0;r<s.length;r+=1)S(e[r]);n=!0}},o(a){e=e.filter(Boolean);for(let r=0;r<e.length;r+=1)A(e[r]);n=!1},d(a){a&&(d(t),d(l)),Q(e,a)}}}function se(i){return[[{name:"This Website!",link:"https://github.com/eboatwright/personal_website",timeframe:"March 28th, 2024 - April 5th, 2024",description:["My first project in SvelteKit and TailwindCSS, and I really enjoyed creating it! SvelteKit is also the first JavaScript framework I've ever used, and it was so quick and easy to learn; I'll definitely be using it in the future.","TailwindCSS was also a joy to learn; it takes regular CSS and just makes it so fast and intuitive to work with."]},{name:"Maxwell",link:"https://github.com/eboatwright/maxwell",timeframe:"November 12th, 2023 - Present",description:["My Alpha-Beta Chess engine written from scratch in Rust. It's currently rated about 2000-2200, depending on the rating list, and is one of my biggest projects!","Version 3.2 is still in active development."]}]]}class re extends L{constructor(t){super(),O(this,t,se,le,G,{})}}export{re as component};
