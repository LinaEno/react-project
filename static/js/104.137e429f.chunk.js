"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[104],{7653:function(n,e,t){t.d(e,{Z:function(){return Z}});t(2791);var i,r,a,c,s,d=t(9230),p=t(9434),o=t(4289),x=t(168),h=t(7691),l=h.ZP.div(i||(i=(0,x.Z)(["\n  min-width: 280px;\n  height: 80px;\n  padding: 8px 32px;\n  background-color: #fff;\n  border-radius: 30px;\n\n  @media screen and (min-width: 480px) {\n    max-width: 480px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 336px;\n    padding: 8px 40px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    max-width: 395px;\n  }\n"]))),f=h.ZP.p(r||(r=(0,x.Z)(["\n  margin-bottom: 4px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: calc(18 / 12);\n  text-transform: uppercase;\n  color: #a6a6a6;\n"]))),u=h.ZP.p(a||(a=(0,x.Z)(["\n  font-weight: 400;\n  font-size: 30px;\n  line-height: calc(45 / 30);\n  color: #000;\n"]))),m=h.ZP.span(c||(c=(0,x.Z)(["\n  margin-right: 4px;\n"]))),g=h.ZP.span(s||(s=(0,x.Z)(["\n  font-family: 'Poppins';\n  font-weight: 700;\n"]))),w=t(184),Z=function(){var n=(0,d.$G)().t,e=(0,p.v9)(o.rM);return(0,w.jsxs)(l,{children:[(0,w.jsx)(f,{children:n("balance.balance")}),(0,w.jsxs)(u,{children:[(0,w.jsx)(m,{children:"\u20b4"}),(0,w.jsx)(g,{children:e.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")})]})]})}},3459:function(n,e,t){t.d(e,{i:function(){return s},x:function(){return d}});var i,r,a=t(168),c=t(7691),s=c.ZP.div(i||(i=(0,a.Z)(["\n  @media screen and (min-width: 768px) {\n    display: flex;\n  }\n\n  @media screen and (min-width: 1280px) {\n    flex-direction: column;\n    width: 480px;\n    border-right: 1px solid #e7e5f2;\n    box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.05),\n      1px 0px 0px rgba(255, 255, 255, 0.6);\n  }\n"]))),d=c.ZP.div(r||(r=(0,a.Z)(["\n  @media screen and (min-width: 768px) {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n\n  /* @media screen and (min-width: 1280px) {\n    max-width: 395px;\n  } */\n"])))},8104:function(n,e,t){t.r(e),t.d(e,{default:function(){return $}});var i,r,a,c,s,d,p,o=t(7653),x=t(2421),h=t(3459),l=t(2450),f=t(9837),u=t(3106),m=t(9439),g=t(5861),w=t(4687),Z=t.n(w),j=t(1243),b=t(9649),v=t(2791),P=t(9085),k=t(168),y=t(7691),z=y.ZP.li(i||(i=(0,k.Z)(["\n  padding: 15px;\n  border-bottom: 1px solid rgb(220, 220, 223);\n\n  @media screen and (min-width: 768px) {\n    padding: 10px;\n  }\n"]))),F=y.ZP.ul(r||(r=(0,k.Z)(["\n  @media screen and (min-width: 1280px) {\n    max-width: 800px;\n    height: 600px;\n    padding-left: 69px;\n    padding-right: 16px;\n  }\n"]))),S=y.ZP.h2(a||(a=(0,k.Z)(["\n  font-family: 'Poppins', sans-serif;\n  font-weight: 400;\n  font-size: 30px;\n  line-height: 45px;\n  text-align: left;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 0;\n    margin-top: 20px;\n    margin-left: 10px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    /* margin-bottom: 20px; */\n    margin-top: 32px;\n    margin-left: 80px;\n  }\n"]))),_=y.ZP.div(c||(c=(0,k.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  margin-bottom: 10px;\n"]))),A=y.ZP.p(s||(s=(0,k.Z)(["\n  font-weight: 700;\n  font-size: 18px;\n  line-height: calc(27 / 18);\n"]))),C=y.ZP.a(d||(d=(0,k.Z)(["\n  text-decoration: none;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: calc(24 / 14);\n  background-color: #24cca7;\n  color: #fff;\n  border-radius: 10px;\n  padding: 2px 10px;\n"]))),E=y.ZP.p(p||(p=(0,k.Z)(["\n  font-weight: 400;\n  font-size: 16px;\n  line-height: calc(24 / 16);\n"]))),B=t(184),G=j.Z.create({baseURL:"https://api.worldnewsapi.com/search-news"}),L=function(){var n=(0,g.Z)(Z().mark((function n(){var e;return Z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,G.get("?api-key=".concat("1ea1dfcd65a843c58fc95d0f9ae2dab9","&text=finance&number=100"));case 2:return e=n.sent,console.log(e.data),n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),M=function(){var n=(0,v.useState)([]),e=(0,m.Z)(n,2),t=e[0],i=e[1],r=(0,v.useState)(!1),a=(0,m.Z)(r,2),c=a[0],s=a[1],d=(0,v.useState)(""),p=(0,m.Z)(d,2),o=p[0],x=p[1];return(0,v.useEffect)((function(){var n=function(){var n=(0,g.Z)(Z().mark((function n(){var e,t;return Z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s(!0),n.next=4,L();case 4:e=n.sent,t=e.news,i(t),x(""),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),x("Oops. Something went wrong \ud83d\ude2d");case 13:return n.prev=13,s(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,v.useEffect)((function(){o&&P.Am.error(o)}),[o]),(0,B.jsxs)(B.Fragment,{children:[c&&(0,B.jsx)(b.a,{}),!c&&(0,B.jsxs)("div",{children:[(0,B.jsx)(S,{children:"News"}),(0,B.jsx)(F,{children:t.map((function(n){var e=n.id,t=n.title,i=n.url,r=n.author;return(0,B.jsxs)(z,{children:[(0,B.jsxs)(_,{children:[(0,B.jsx)(A,{children:r}),(0,B.jsx)(C,{href:i,target:"_blank",rel:"noopener noreferrer nofollow",children:"Follow"})]}),(0,B.jsx)(E,{children:t})]},e)}))})]})]})},N=t(7655),O=t(9434),R=t(7380),U=t(6657),X=t(325),$=function(){var n=(0,O.v9)(R.ax);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(N.h,{}),(0,B.jsx)("main",{children:(0,B.jsxs)(x.xX,{children:[n&&(0,B.jsx)(X.F,{children:(0,B.jsx)(U.Z,{})}),(0,B.jsxs)(h.i,{children:[(0,B.jsxs)(h.x,{children:[(0,B.jsx)(f.Z,{}),(0,B.jsx)(l.gA,{children:(0,B.jsx)(o.Z,{})})]}),(0,B.jsx)(l.gA,{children:(0,B.jsx)(u.F,{})})]}),(0,B.jsx)(M,{})]})})]})}}}]);
//# sourceMappingURL=104.137e429f.chunk.js.map