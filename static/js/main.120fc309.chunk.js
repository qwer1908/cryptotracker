(this.webpackJsonpcryptotracker=this.webpackJsonpcryptotracker||[]).push([[0],{70:function(n,e,t){"use strict";t.r(e);var c=t(0),r=t.n(c),i=t(28),o=t.n(i),a=t(13),s=t(50),l=t(9),d=t(17),j=t(7),b=t(29),h=t(8),u="https://api.coinpaprika.com/v1";function p(){return fetch("".concat(u,"/coins")).then((function(n){return n.json()}))}function x(n){var e=Math.floor(Date.now()/1e3),t=e-1209600;return fetch("".concat(u,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}var f=t(30),O=t.n(f),m=t(1);var g=function(n){var e=n.coinId,t=Object(a.useQuery)(["ohlcv",e],(function(){return x(e)}),{refetchInterval:1e3}),c=t.isLoading,r=t.data;return Object(m.jsx)("div",{children:c?"Loading chart...":Object(m.jsx)(O.a,{type:"candlestick",series:[{data:null===r||void 0===r?void 0:r.map((function(n){return[Date.parse(n.time_open),[n.open,n.high,n.low,n.close]]}))}],options:{theme:{mode:"dark"},chart:{height:300,width:500,toolbar:{show:!1},background:"transparent"},grid:{show:!1},xaxis:{type:"datetime"},tooltip:{y:{formatter:function(n){return"$".concat(n.toFixed(2))}}}}})})};var v,y,k,w,C,I,L,q,S,Q=function(n){var e=n.coinId,t=Object(a.useQuery)(["ohlcv",e],(function(){return x(e)}),{refetchInterval:1e3}),c=t.isLoading,r=t.data;return Object(m.jsx)("div",{children:c?"Loading chart...":Object(m.jsx)(O.a,{type:"heatmap",series:[{name:"bla",data:null===r||void 0===r?void 0:r.map((function(n){return n.close}))}],options:{theme:{mode:"dark"},chart:{height:300,width:500,toolbar:{show:!1},background:"transparent"},grid:{show:!1},xaxis:{type:"datetime"},tooltip:{y:{formatter:function(n){return"$".concat(n.toFixed(2))}}}}})})},z=h.c.h1(v||(v=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),M=h.c.span(y||(y=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),F=h.c.div(k||(k=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),P=h.c.header(w||(w=Object(l.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),D=h.c.div(C||(C=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 10px;\n"]))),T=h.c.div(I||(I=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 33%;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),$=h.c.p(L||(L=Object(l.a)(["\n  margin: 20px 0px;\n"]))),A=h.c.div(q||(q=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),_=h.c.span(S||(S=Object(l.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  color: ",";\n  a {\n    padding: 7px 0px;\n    display: block;\n  }\n"])),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor}));var B,H,J,R,E,U,G,K=function(){var n=Object(j.g)().coinId,e=Object(j.f)().state,t=Object(j.h)("/:coinId/price"),c=Object(j.h)("/:coinId/chart"),r=Object(a.useQuery)(["info",n],(function(){return function(n){return fetch("".concat(u,"/coins/").concat(n)).then((function(n){return n.json()}))}(n)})),i=r.isLoading,o=r.data,s=Object(a.useQuery)(["tickers",n],(function(){return function(n){return fetch("".concat(u,"/tickers/").concat(n)).then((function(n){return n.json()}))}(n)}),{refetchInterval:5e3}),l=s.isLoading,h=s.data,p=i||l;return Object(m.jsxs)(F,{children:[Object(m.jsx)(b.a,{children:Object(m.jsx)("title",{children:(null===e||void 0===e?void 0:e.name)?e.name:p?"Loading...":null===o||void 0===o?void 0:o.name})}),Object(m.jsx)(d.b,{to:"/cryptotracker",children:"Back"}),Object(m.jsx)(P,{children:Object(m.jsx)(z,{children:(null===e||void 0===e?void 0:e.name)?e.name:p?"Loading...":null===o||void 0===o?void 0:o.name})}),p?Object(m.jsx)(M,{children:"Loading..."}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(D,{children:[Object(m.jsxs)(T,{children:[Object(m.jsx)("span",{children:"Rank:"}),Object(m.jsx)("span",{children:null===o||void 0===o?void 0:o.rank})]}),Object(m.jsxs)(T,{children:[Object(m.jsx)("span",{children:"Symbol:"}),Object(m.jsxs)("span",{children:["$",null===o||void 0===o?void 0:o.symbol]})]}),Object(m.jsxs)(T,{children:[Object(m.jsx)("span",{children:"Price:"}),Object(m.jsxs)("span",{children:["$",null===h||void 0===h?void 0:h.quotes.USD.price.toFixed(3)]})]})]}),Object(m.jsx)($,{children:null===o||void 0===o?void 0:o.description}),Object(m.jsxs)(D,{children:[Object(m.jsxs)(T,{children:[Object(m.jsx)("span",{children:"Total Suply:"}),Object(m.jsx)("span",{children:null===h||void 0===h?void 0:h.total_supply})]}),Object(m.jsxs)(T,{children:[Object(m.jsx)("span",{children:"Max Supply:"}),Object(m.jsx)("span",{children:null===h||void 0===h?void 0:h.max_supply})]})]}),Object(m.jsxs)(A,{children:[Object(m.jsx)(_,{isActive:null!==c,children:Object(m.jsx)(d.b,{to:"/".concat(n,"/chart"),children:"Chart"})}),Object(m.jsx)(_,{isActive:null!==t,children:Object(m.jsx)(d.b,{to:"/".concat(n,"/price"),children:"Price"})})]}),Object(m.jsxs)(j.c,{children:[Object(m.jsx)(j.a,{path:"/:coinId/price",children:Object(m.jsx)(Q,{coinId:n})}),Object(m.jsx)(j.a,{path:"/:coinId/chart",children:Object(m.jsx)(g,{coinId:n})})]})]})]})},N=h.c.div(B||(B=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),V=h.c.header(H||(H=Object(l.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),W=h.c.ul(J||(J=Object(l.a)([""]))),X=h.c.li(R||(R=Object(l.a)(["\n  background-color: orange;\n  color: ",";\n  border-radius: 15px;\n  margin-bottom: 10px;\n  a {\n    display: flex;\n    align-items: center;\n    padding: 20px;\n    transition: color 0.2s ease-in;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.accentColor})),Y=h.c.h1(E||(E=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),Z=h.c.span(U||(U=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),nn=h.c.img(G||(G=Object(l.a)(["\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n"])));var en=function(){var n=Object(a.useQuery)("allCoins",p),e=n.isLoading,t=n.data;return Object(m.jsxs)(N,{children:[Object(m.jsx)(b.a,{children:Object(m.jsx)("title",{children:"\ucf54\uc778"})}),Object(m.jsx)(V,{children:Object(m.jsx)(Y,{children:"\ucf54\uc778"})}),e?Object(m.jsx)(Z,{children:"Loading..."}):Object(m.jsx)(W,{children:null===t||void 0===t?void 0:t.slice(0,100).map((function(n){return Object(m.jsx)(X,{children:Object(m.jsxs)(d.b,{to:{pathname:"/".concat(n.id),state:{name:n.name}},children:[Object(m.jsx)(nn,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase())}),n.name," \u2192"]})},n.id)}))})]})};var tn,cn=function(){return Object(m.jsx)(d.a,{children:Object(m.jsxs)(j.c,{children:[Object(m.jsx)(j.a,{path:"/cryptotracker",children:Object(m.jsx)(en,{})}),Object(m.jsx)(j.a,{path:"/:coinId",children:Object(m.jsx)(K,{})})]})})},rn=t(49),on={bgColor:"#2f3640",textColor:"black",accentColor:"#9c88ff"},an={bgColor:"whitesmoke",textColor:"black",accentColor:"#9c88ff"},sn=Object(h.b)(tn||(tn=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var ln=function(){var n=Object(c.useState)(!1),e=Object(s.a)(n,2),t=e[0],r=e[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(h.a,{theme:t?on:an,children:[Object(m.jsx)("button",{onClick:function(){return r((function(n){return!n}))},children:"Toggle Mode"}),Object(m.jsx)(sn,{}),Object(m.jsx)(cn,{}),Object(m.jsx)(rn.ReactQueryDevtools,{initialIsOpen:!0})]})})},dn=new a.QueryClient;o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(a.QueryClientProvider,{client:dn,children:Object(m.jsx)(ln,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.120fc309.chunk.js.map