(this.webpackJsonpresforkids=this.webpackJsonpresforkids||[]).push([[0],{34:function(e,a,t){e.exports=t.p+"static/media/whatever.0cb7cf3f.mp3"},41:function(e,a,t){e.exports=t(90)},46:function(e,a,t){},47:function(e,a,t){},65:function(e){e.exports=JSON.parse("{}")},85:function(e,a,t){},86:function(e,a,t){},90:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(32),c=t.n(r),o=(t(46),t(37)),i=t(2),m=t(15),u=(t(47),t(10)),s=t(14),E=t.n(s),d=(E.a.create({baseURL:",https://resbackimagens.herokuapp.com/"}),t(95)),p=t(92),b=t(93),h=t(94),f=(t(65),t(33)),g=t(34),v=t.n(g),k=t(35),w=t.n(k),j=(t(85),function(e){var a=e.url;return l.a.createElement("div",{className:"player-wrapper"},l.a.createElement(w.a,{className:"react-player",url:a,width:"100%",height:"100%",controls:!0}))}),y=(t(86),function(e){e.quizId;var a=Object(n.useState)([]),t=Object(m.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)([]),i=Object(m.a)(o,2),s=i[0],d=i[1],f=Object(n.useState)([]),g=Object(m.a)(f,2),v=g[0],k=g[1];return Object(n.useEffect)((function(){E()({url:"https://resbackimagens.herokuapp.com/perguntas-quiz?quizId=".concat(2),method:"GET",responseType:"json"}).then((function(e){var a=e.data,t=a.map((function(e){return e.pergunta})),n=a.map((function(e){return e.imgPergunta})),l=a.map((function(e){return e.audioPergunta}));c(t),d(n),k(l)}))}),[]),console.log(s),l.a.createElement("div",null,l.a.createElement("div",{className:"containerPergunta"},l.a.createElement("div",{id:"item1"},l.a.createElement("img",{src:s[0],alt:"imagem da pergunta"})),l.a.createElement("div",{id:"item2"},l.a.createElement("p",null,r[1]),l.a.createElement("button",{id:"audioPergunta"},l.a.createElement(u.d,{onClick:v})))),l.a.createElement(p.a,{bsPrefix:"containerResposta"},l.a.createElement(b.a,null,l.a.createElement("label",{htmlFor:"01"},l.a.createElement("input",{type:"radio",name:"opcao",id:"01",value:"01"}),l.a.createElement("img",{src:s[0],alt:"Masculino"}),l.a.createElement("div",null,l.a.createElement("button",{id:"audioResposta",onClick:v},l.a.createElement(u.d,null)))),l.a.createElement("label",{htmlFor:"02"},l.a.createElement("input",{type:"radio",name:"opcao",id:"02",value:"02"}),l.a.createElement("img",{src:s[0],alt:"Feminino"}),l.a.createElement("div",null,l.a.createElement("button",{id:"audioResposta",onClick:v},l.a.createElement(u.d,null))))),l.a.createElement(b.a,null,l.a.createElement("label",{htmlFor:"03"},l.a.createElement("input",{type:"radio",name:"opcao",id:"03",value:"03"}),l.a.createElement("img",{src:s[0],alt:"Masculino"}),l.a.createElement("div",null,l.a.createElement("button",{id:"audioResposta",onClick:v},l.a.createElement(u.d,null)))),l.a.createElement("label",{htmlFor:"04"},l.a.createElement("input",{type:"radio",name:"opcao",id:"04",value:"04"}),l.a.createElement("img",{src:s[0],alt:"Feminino"}),l.a.createElement("div",null,l.a.createElement("button",{id:"audioResposta",onClick:v},l.a.createElement(u.d,null)))))),l.a.createElement(p.a,{bsPrefix:"acoes"},l.a.createElement(b.a,null,l.a.createElement(h.a,null,l.a.createElement("button",{id:"anterior",onClick:function(){}},l.a.createElement(u.b,null),l.a.createElement("strong",null,"Anterior"))),l.a.createElement(h.a,null,l.a.createElement("button",{id:"proxima",onClick:function(){}},l.a.createElement("strong",null,"Pr\xf3xima"),l.a.createElement(u.c,null))))))}),O=function(){var e=Object(f.a)(v.a);Object(m.a)(e,1)[0];function a(){E()({url:"https://resbackend.herokuapp.com/download",method:"GET",responseType:"blob"}).then((function(e){var a=window.URL.createObjectURL(new Blob([e.data])),t=document.createElement("a");t.href=a,t.setAttribute("download","desenho.jpg"),document.body.appendChild(t),t.click()}))}return l.a.createElement(d.a,{id:"container"},l.a.createElement("header",null,l.a.createElement("h1",null,"Res for kids")),l.a.createElement(d.a,{id:"conteudo"},l.a.createElement(p.a,{bsPrefix:"container"},l.a.createElement(b.a,null,l.a.createElement(h.a,{className:"item1"},l.a.createElement("button",{id:"Beolica"}),l.a.createElement("a",{href:"#eolica",id:"Teolica"},"Energia E\xf3lica")),l.a.createElement(h.a,{className:"item2"},l.a.createElement("button",{id:"Bsolar"}),l.a.createElement("a",{href:"#solar",id:"Tsolar"},"Energia Solar")))),l.a.createElement("h1",{id:"eolica"},"Energia E\xf3lica"),l.a.createElement(j,{url:"https://www.youtube.com/watch?v=4NRXx6U8ABQ"}),l.a.createElement("h1",{id:"quiz"},"Quiz"),l.a.createElement(y,{quizId:2}),l.a.createElement(p.a,null,l.a.createElement(b.a,null,l.a.createElement(h.a,null," ",l.a.createElement("button",{id:"download",onClick:a},l.a.createElement("strong",null,"Desenho_01"),l.a.createElement(u.a,null)))),l.a.createElement(b.a,null,l.a.createElement(h.a,null,l.a.createElement("button",{id:"download",onClick:a},l.a.createElement("strong",null,"Desenho_01"),l.a.createElement(u.a,null)))))))},x=function(){return l.a.createElement(o.a,null,l.a.createElement(i.a,{component:O,path:"/",exact:!0}))};var C=function(){return l.a.createElement(x,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(89);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.05f9e39f.chunk.js.map