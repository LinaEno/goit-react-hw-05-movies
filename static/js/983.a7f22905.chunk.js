"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[983],{3309:function(t,e,n){n.d(e,{Cp:function(){return s},Yc:function(){return h},fI:function(){return g},gW:function(){return f},s9:function(){return d}});var r=n(5861),a=n(7757),i=n.n(a),u=n(1912),c=n(3114);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="2963fc82afd3cb57f64d050a1ba5935c";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function t(){var e,n,r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={api_key:o,language:"en-US",include_adult:!1},t.next=3,u.Z.get("/trending/movie/day",{params:e});case 3:return n=t.sent,r=n.data,a=r.results.map((function(t){return{id:t.id,original_title:t.original_title}})),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function t(e){var n,r,a,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={query:e,api_key:o,language:"en-US",include_adult:!1},t.next=3,u.Z.get("/search/movie",{params:n});case 3:return r=t.sent,a=r.data,c=a.results.map((function(t){return{id:t.id,original_title:t.original_title}})),t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function t(e){var n,r,a,c,s,p,f,l,d;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={api_key:o,language:"en-US",include_adult:!1},t.next=3,u.Z.get("/movie/".concat(e),{params:n});case 3:return r=t.sent,a=r.data,c=a.poster_path,s=a.original_title,p=a.release_date,f=a.vote_average,l=a.overview,d=a.genres,t.abrupt("return",{poster_path:_(c),original_title:s,release_date:p.slice(0,4),vote_average:f.toFixed(1),overview:l,genres:d.map((function(t){return t.name})).join(", ")});case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function t(e){var n,r,a,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={api_key:o,language:"en-US",include_adult:!1},t.next=3,u.Z.get("/movie/".concat(e,"/credits"),{params:n});case 3:return r=t.sent,a=r.data,c=a.cast.map((function(t){var e=t.id,n=t.name,r=t.profile_path;return{id:e,name:n,profile_path:_(r)}})),t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function t(e){var n,r,a,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={api_key:o,language:"en-US",include_adult:!1},t.next=3,u.Z.get("/movie/".concat(e,"/reviews"),{params:n});case 3:return r=t.sent,a=r.data,c=a.results.map((function(t){return{id:t.id,author:t.author,content:t.content}})),t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var _=function(t){return t?"https://image.tmdb.org/t/p/w500"+t:c}},6671:function(t,e,n){n.d(e,{D:function(){return o},H:function(){return s}});var r,a,i=n(168),u=n(1087),c=n(6444),o=c.ZP.h1(r||(r=(0,i.Z)(["\n  color: #000;\n  text-decoration: underline;\n  font-weight: 700;\n  font-size: 48px;\n"]))),s=(0,c.ZP)(u.OL)(a||(a=(0,i.Z)(["\n  font-size: 20px;\n  margin-bottom: 20px;\n  display: block;\n  font-style: italic;\n"])))},9348:function(t,e,n){n.d(e,{O:function(){return o}});n(2791);var r=n(1087),a=n(7689),i=n(6671),u=n(184),c=function(t){var e=t.name,n=t.id,c=(0,a.TH)();return(0,u.jsx)(i.H,{children:(0,u.jsx)(r.OL,{to:"/movies/".concat(n),state:{from:c},children:e})})},o=function(t){var e=t.movies;return(0,u.jsx)("ul",{children:e.map((function(t){var e=t.id,n=t.original_title;return(0,u.jsx)(c,{name:n,id:e},e)}))})}},3983:function(t,e,n){n.r(e);var r=n(5861),a=n(9439),i=n(7757),u=n.n(i),c=n(2791),o=n(8402),s=n(3309),p=n(9348),f=n(6671),l=n(7596),d=(n(5462),n(184));e.default=function(){var t=(0,c.useState)([]),e=(0,a.Z)(t,2),n=e[0],i=e[1],v=(0,c.useState)(!1),h=(0,a.Z)(v,2),m=h[0],g=h[1],x=(0,c.useState)(""),_=(0,a.Z)(x,2),w=_[0],k=_[1];return(0,c.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,g(!0),t.next=4,(0,s.Cp)();case 4:e=t.sent,i(e),k(""),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),k("Oops. Something went wrong \ud83d\ude2d");case 12:return t.prev=12,g(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,c.useEffect)((function(){w&&l.Am.error(w)}),[w]),(0,d.jsxs)(d.Fragment,{children:[!m&&!w&&n&&(0,d.jsxs)("div",{children:[(0,d.jsx)(f.D,{children:"Trending today"}),(0,d.jsx)(p.O,{movies:n})]}),m&&!w&&(0,d.jsx)(o.Nx,{width:"200",color:"#4fa94d"}),(0,d.jsx)(l.Ix,{position:"top-center",autoClose:5e3,closeOnClick:!0,theme:"colored"})]})}},3114:function(t,e,n){t.exports=n.p+"static/media/zaglushka.b18d01b007a2aed2c005.jpg"}}]);
//# sourceMappingURL=983.a7f22905.chunk.js.map