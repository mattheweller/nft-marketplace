(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6124:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(266),s=n(809),a=n.n(s),i=n(3226),c=n(387),l=n(7616),u=n(241),o=n(7294),d=n(9669),p=n.n(d),x=n(5675),f=n(2484),h=n.n(f),m=n(2025),w=n(1615),v=n(6067),g=n(5893),N=null;function k(){var e=(0,o.useState)([]),t=e[0],n=e[1],s=(0,o.useState)("not-loaded"),d=s[0],f=s[1];function k(){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(a().mark((function e(){var t,s,u,o,d;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new i.r(N),s=new c.CH(m.k,w.Mt,t),u=new c.CH(m.A,v.Mt,t),e.next=5,u.fetchMarketItems();case 5:return o=e.sent,e.next=8,Promise.all(o.map(function(){var e=(0,r.Z)(a().mark((function e(t){var n,r,i,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.tokenURI(t.tokenId);case 2:return n=e.sent,e.next=5,p().get(n);case 5:return r=e.sent,i=l.bM(t.price.toString(),"ether"),c={price:i,itemId:t.itemId.toNumber(),seller:t.seller,owner:t.owner,image:r.data.image,name:r.data.name,description:r.data.description},e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 8:d=e.sent,n(d),f("loaded");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=(0,r.Z)(a().mark((function e(t){var n,r,s,i,o,d,p;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new(h()),e.next=3,n.connect();case 3:return r=e.sent,s=new u.Q(r),i=s.getSigner(),o=new c.CH(m.A,v.Mt,i),d=l.vz(t.price.toString(),"ether"),e.next=10,o.createMarketSale(m.k,t.itemId,{value:d});case 10:return p=e.sent,e.next=13,p.wait();case 13:k();case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,o.useEffect)((function(){k()}),[]),"loaded"!==d||t.length?(0,g.jsx)("div",{className:"flex justify-center",children:(0,g.jsx)("div",{className:"px-4",style:{maxWidth:"1600px"},children:(0,g.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4",children:t.map((function(e,t){return(0,g.jsxs)("div",{className:"border shadow rounded-xl overflow-hidden",children:[(0,g.jsx)(x.default,{alt:"NFT image",src:e.image}),(0,g.jsxs)("div",{className:"p-4",children:[(0,g.jsx)("p",{style:{height:"64px"},className:"text-2xl font-semibold",children:e.name}),(0,g.jsx)("div",{style:{height:"70px",overflow:"hidden"},children:(0,g.jsx)("p",{className:"text-gray-400",children:e.description})})]}),(0,g.jsxs)("div",{className:"p-4 bg-black",children:[(0,g.jsxs)("p",{className:"text-2xl mb-4 font-bold text-white",children:[e.price," ETH"]}),(0,g.jsx)("button",{className:"w-full bg-pink-500 text-white font-bold py-2 px-12 rounded",onClick:function(){return function(e){return j.apply(this,arguments)}(e)},children:"Buy"})]})]},t)}))})})}):(0,g.jsx)("h1",{className:"px-20 py-10 text-3xl",children:"No items in marketplace"})}N="https://rpc-mumbai.maticvigil.com"},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6124)}])}},function(e){e.O(0,[277,365,669,419,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);