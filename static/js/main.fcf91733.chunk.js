(this.webpackJsonpcoronatracker=this.webpackJsonpcoronatracker||[]).push([[0],{126:function(e,t,a){e.exports={container:"Charts_container__1mZfu"}},127:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9"}},128:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},133:function(e,t,a){e.exports=a(254)},254:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(117),o=a.n(c),u=a(25),s=a.n(u),i=a(39),l=a(118),d=a(119),m=a(130),p=a(129),f=a(87),v=a.n(f),h=a(271),b=a(276),g=a(272),E=a(273),y=a(76),x=a.n(y),C=a(77),_=a.n(C),j=a(48),w=a.n(j),O=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:w.a.container},r.a.createElement(h.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(h.a,{item:!0,component:b.a,xs:12,md:3,className:_()(w.a.card,w.a.infected)},r.a.createElement(g.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(E.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:a.value,duration:2.5,seperator:","})),r.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(E.a,{variant:"body2",gutterBottom:!0},"Number of active cases of COVID-19"))),r.a.createElement(h.a,{item:!0,component:b.a,xs:12,md:3,className:_()(w.a.card,w.a.recovered)},r.a.createElement(g.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(E.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:n.value,duration:2.5,seperator:","})),r.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(E.a,{variant:"body2",gutterBottom:!0},"Number of recoveries from COVID-19"))),r.a.createElement(h.a,{item:!0,component:b.a,xs:12,md:3,className:_()(w.a.card,w.a.deaths)},r.a.createElement(g.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(E.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:c.value,duration:2.5,seperator:","})),r.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(E.a,{variant:"body2",gutterBottom:!0},"Number of deaths caused by COVID-19"))))):"loading..."},k=a(75),D=a(89),S=a(78),N=a.n(S),I="https://covid19.mathdro.id/api",B=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=I,t&&(a="".concat(I,"/countries/").concat(t)),e.next=5,N.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:i});case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(I,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(I,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=a(126),z=a.n(A),F=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,l=Object(n.useState)([]),d=Object(k.a)(l,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,U();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=m&&m.length?r.a.createElement(D.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333FF",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null,v=a?r.a.createElement(D.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]},{}]},options:{legend:{display:!1},title:{display:!0,text:"Current sitution in ".concat(u)}}}):null;return r.a.createElement("div",{className:z.a.container},u?v:f)},G=a(275),J=a(274),M=a(127),P=a.n(M),Q=function(e){var t=e.handleCountryChange,a=Object(n.useState)(),c=Object(k.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,V();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),r.a.createElement(G.a,{className:P.a.formControl},r.a.createElement(J.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o&&o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},R=a(128),Z=a.n(R),q=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:v.a.container},r.a.createElement("img",{src:Z.a,alt:"Covid-19",className:v.a.image}),r.a.createElement(O,{data:t}),r.a.createElement(Q,{handleCountryChange:this.handleCountryChange}),r.a.createElement(F,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(q,null),document.getElementById("root"))},48:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},87:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}}},[[133,1,2]]]);
//# sourceMappingURL=main.fcf91733.chunk.js.map