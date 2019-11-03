(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{192:function(e,M,t){"use strict";t.r(M);var a=t(0),i=t.n(a),j=t(204),u=t(275),L=t.n(u),o=function(){return i.a.createElement("section",{className:L.a.section,id:"about"},i.a.createElement("div",{className:L.a.container},i.a.createElement("img",{className:L.a.image,src:t(276)}),i.a.createElement("h3",null,"Hey,"),i.a.createElement("p",null,"My name is James and I'm a developer and engineer based in the UK. I love to tinker, design and build things."),i.a.createElement("p",null,"I'm passionate about Bitcoin and public blockchain tech, with a keen interest in global macroeconomics.")))},c=t(195),N=t(277),n=t.n(N),s=function(){return i.a.createElement("section",{className:n.a.section},i.a.createElement("h2",{className:n.a.display},"James"),i.a.createElement("p",{className:n.a.subDisplay},"DEVELOPER & ENGINEER"),i.a.createElement(c.a,{to:"#about"},i.a.createElement("div",{className:n.a.scroll},i.a.createElement("p",null,"Scroll"),i.a.createElement("i",{className:"icon ion-ios-arrow-round-down "+n.a.icon}))))},D=t(278),g=(t(206),t(279)),A=t.n(g),r=function(e){var M=e.project,a=(M.id,M.title),j=M.slug,u=M.tags,L=M.descShort,o=M.colorDark,N=M.image;return i.a.createElement("div",{className:A.a.wrapper,style:{backgroundColor:o}},i.a.createElement("div",{className:A.a.container},i.a.createElement("div",{className:A.a.details},i.a.createElement("div",{className:A.a.tags},u.map(function(e){return i.a.createElement("p",{key:e},e)})),i.a.createElement("h3",{className:A.a.title},a),i.a.createElement("div",{className:A.a.description,dangerouslySetInnerHTML:{__html:L}}),i.a.createElement(c.a,{className:"btn btn-primary-dark",to:"/projects/"+j},"Find out more")),i.a.createElement("div",{className:A.a.imageContainer},i.a.createElement("img",{className:A.a.image,src:t(280)("./"+N.relativePath),alt:"test"}))))},l=(t(205),t(302)),w=t.n(l),I=function(){return i.a.createElement("section",{className:w.a.section,id:"about"},i.a.createElement(c.a,{to:"projects",className:w.a.link},i.a.createElement("p",null,"More Projects"),i.a.createElement("div",null)))},m=t(303),S=t.n(m),p=function(){var e=D.data.allProjectsJson.edges.map(function(e){return e.node});return console.log(e),i.a.createElement("section",{className:S.a.section,id:"featured-work"},e.map(function(e){return i.a.createElement(r,{key:e.id,project:e})}),i.a.createElement(I,null))};t(304),M.default=function(){return i.a.createElement(j.a,null,i.a.createElement(s,null),i.a.createElement(o,null),i.a.createElement(p,null))}},195:function(e,M,t){"use strict";var a=t(0),i=t.n(a),j=t(66),u=t.n(j);t.d(M,"a",function(){return u.a});t(197),t(9).default.enqueue,i.a.createContext({})},197:function(e,M,t){var a;e.exports=(a=t(203))&&a.default||a},199:function(e,M,t){"use strict";var a=t(200),i=t(0),j=t.n(i),u=t(198),L=t.n(u);function o(e){var M=e.description,t=e.lang,i=e.meta,u=e.title,o=a.data.site,c=M||o.siteMetadata.description;return j.a.createElement(L.a,{htmlAttributes:{lang:t},title:u,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:u},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:c}].concat(i)})}o.defaultProps={lang:"en",meta:[],description:""},M.a=o},200:function(e){e.exports={data:{site:{siteMetadata:{title:"James Coates",description:"Full Stack Web Developer",author:"James Coates"}}}}},203:function(e,M,t){"use strict";t.r(M);t(23);var a=t(0),i=t.n(a),j=t(95);M.default=function(e){var M=e.location,t=e.pageResources;return t?i.a.createElement(j.a,Object.assign({location:M,pageResources:t},t.json)):null}},204:function(e,M,t){"use strict";var a=t(0),i=t.n(a),j=t(198),u=t.n(j),L=t(199),o=t(195),c=t(209),N=t.n(c),n=function(e){var M=e.menuActive,t=e.setMenuActive;return i.a.createElement("header",{className:N.a.container},i.a.createElement(o.a,{to:"/"},i.a.createElement("h1",{className:N.a.logo},"JAMES COATES")),i.a.createElement("div",{className:N.a.menu+" "+(M?N.a.active:null),onClick:function(){return t(!M)}},i.a.createElement("div",null),i.a.createElement("div",null)))},s=(t(39),t(201)),D=t(202),g=t(210),A=t.n(g),r=function(e){var M=e.menuActive,t=e.setMenuActive;return i.a.createElement("div",{className:A.a.wrapper+" "+(M?A.a.menuActive:null)},i.a.createElement("div",{className:A.a.col1},i.a.createElement("div",{className:A.a.nav},i.a.createElement(o.a,{to:"/#about",onClick:function(){return t()}},i.a.createElement("p",{className:A.a.menuItem+" "+(M?A.a.itemActive:null)},"About")),i.a.createElement(o.a,{to:"/projects",onClick:function(){return t()}},i.a.createElement("p",{className:A.a.menuItem+" "+(M?A.a.itemActive:null)},"Work")),i.a.createElement(o.a,{to:"/#contact",onClick:function(){return t()}},i.a.createElement("p",{className:A.a.menuItem+" "+(M?A.a.itemActive:null)},"Contact"))),i.a.createElement("div",{className:A.a.social},i.a.createElement("a",{href:"https://twitter.com/_JamesCoates",target:"blank"},i.a.createElement(s.a,{icon:D.c})),i.a.createElement("a",{href:"https://github.com/James-Coates",target:"blank"},i.a.createElement(s.a,{icon:D.a})),i.a.createElement("a",{href:"https://medium.com/@jamescoates192",target:"blank"},i.a.createElement(s.a,{icon:D.b})))),i.a.createElement("div",{className:A.a.col2},i.a.createElement("h1",{className:A.a.name},"James Coates")))},l=t(211),w=t.n(l),I=t(212),m=t.n(I),S=function(){var e=Object(a.useState)(""),M=e[0],t=e[1],j=Object(a.useState)(""),u=j[0],L=j[1],o=Object(a.useState)(""),c=o[0],N=o[1],n=Object(a.useState)(!1),s=(n[0],n[1]);return i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(M),console.log(c);var a={ses_address:"james.coates@me.com",send_to:"James Coates <james.coates@me.com>",subject:"Email from jamescoates.me",name:M,reply_to:u,message:c};w.a.post("https://mjxz0fdn8i.execute-api.us-east-1.amazonaws.com/dev/portfolio-mailer",a).then(function(e){t(""),L(""),N(""),s(!0),console.log(e)}).catch(function(e){return console.log(e)})}},i.a.createElement("label",{htmlFor:"name",className:"input-container"},i.a.createElement("input",{className:"input-text",name:"name",id:"name",value:M,required:!0,onChange:function(e){return t(e.target.value)}}),i.a.createElement("div",{className:"input-label "+(M?"input-filled":"")},"Name")),i.a.createElement("label",{htmlFor:"replyTo",className:"input-container"},i.a.createElement("input",{className:"input-text",name:"reply_to",id:"replyTo",value:u,required:!0,onChange:function(e){return L(e.target.value)}}),i.a.createElement("div",{className:"input-label "+(u?"input-filled":"")},"Email")),i.a.createElement("label",{htmlFor:"message",className:"input-container"},i.a.createElement("div",{className:"message-container"},i.a.createElement("textarea",{className:"input-text",name:"message",id:"email",value:c,required:!0,onChange:function(e){return N(e.target.value)}}),i.a.createElement("div",{className:"input-label "+(c?"input-filled":"")},"Your message..."))),i.a.createElement("button",{className:"btn btn-primary-light "+m.a.btn,type:"submit"},"Submit"))},p=t(213),y=t.n(p),d=function(){return i.a.createElement("footer",{className:y.a.wrapper},i.a.createElement("div",{className:y.a.container},i.a.createElement("div",{className:y.a.col1},i.a.createElement("div",{className:y.a.head},i.a.createElement("h1",{className:y.a.header},"Get in touch"),i.a.createElement("a",{href:"mailto:james.coates@me.com"},i.a.createElement("p",{className:y.a.email},"james.coates@me.com"))),i.a.createElement("div",{className:y.a.formContainer,id:"contact"},i.a.createElement(S,null))),i.a.createElement("div",{className:y.a.col2},i.a.createElement("div",{className:y.a.social},i.a.createElement("a",{href:"https://twitter.com/_JamesCoates"},i.a.createElement(s.a,{icon:D.c})),i.a.createElement("a",{href:"https://github.com/James-Coates"},i.a.createElement(s.a,{icon:D.a})),i.a.createElement("a",{href:"https://medium.com/@jamescoates192"},i.a.createElement(s.a,{icon:D.b}))))))};M.a=function(e){var M=e.children,t=Object(a.useState)(!1),j=t[0],o=t[1];return i.a.createElement("main",null,i.a.createElement(L.a,{title:"Home"}),i.a.createElement(u.a,null,i.a.createElement("link",{href:"https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css",rel:"stylesheet"})),i.a.createElement(n,{menuActive:j,setMenuActive:o}),i.a.createElement(r,{menuActive:j,setMenuActive:o}),M,i.a.createElement(d,null))}},207:function(e,M){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+UmVhY3QgaWNvbjwvdGl0bGU+PHBhdGggZD0iTTEyIDkuODYxQTIuMTM5IDIuMTM5IDAgMSAwIDEyIDE0LjEzOSAyLjEzOSAyLjEzOSAwIDEgMCAxMiA5Ljg2MXpNNi4wMDggMTYuMjU1bC0uNDcyLS4xMkMyLjAxOCAxNS4yNDYgMCAxMy43MzcgMCAxMS45OTZzMi4wMTgtMy4yNSA1LjUzNi00LjEzOWwuNDcyLS4xMTkuMTMzLjQ2OGEyMy41MyAyMy41MyAwIDAgMCAxLjM2MyAzLjU3OGwuMTAxLjIxMy0uMTAxLjIxM2EyMy4zMDcgMjMuMzA3IDAgMCAwLTEuMzYzIDMuNTc4bC0uMTMzLjQ2N3pNNS4zMTcgOC45NWMtMi42NzQuNzUxLTQuMzE1IDEuOS00LjMxNSAzLjA0NiAwIDEuMTQ1IDEuNjQxIDIuMjk0IDQuMzE1IDMuMDQ2YTI0Ljk1IDI0Ljk1IDAgMCAxIDEuMTgyLTMuMDQ2QTI0Ljc1MiAyNC43NTIgMCAwIDEgNS4zMTcgOC45NXpNMTcuOTkyIDE2LjI1NWwtLjEzMy0uNDY5YTIzLjM1NyAyMy4zNTcgMCAwIDAtMS4zNjQtMy41NzdsLS4xMDEtLjIxMy4xMDEtLjIxM2EyMy40MiAyMy40MiAwIDAgMCAxLjM2NC0zLjU3OGwuMTMzLS40NjguNDczLjExOWMzLjUxNy44ODkgNS41MzUgMi4zOTggNS41MzUgNC4xNHMtMi4wMTggMy4yNS01LjUzNSA0LjEzOWwtLjQ3My4xMnptLS40OTEtNC4yNTljLjQ4IDEuMDM5Ljg3NyAyLjA2IDEuMTgyIDMuMDQ2IDIuNjc1LS43NTIgNC4zMTUtMS45MDEgNC4zMTUtMy4wNDYgMC0xLjE0Ni0xLjY0MS0yLjI5NC00LjMxNS0zLjA0NmEyNC43ODggMjQuNzg4IDAgMCAxLTEuMTgyIDMuMDQ2ek01LjMxIDguOTQ1bC0uMTMzLS40NjdDNC4xODggNC45OTIgNC40ODggMi40OTQgNiAxLjYyMmMxLjQ4My0uODU2IDMuODY0LjE1NSA2LjM1OSAyLjcxNmwuMzQuMzQ5LS4zNC4zNDlhMjMuNTUyIDIzLjU1MiAwIDAgMC0yLjQyMiAyLjk2N2wtLjEzNS4xOTMtLjIzNS4wMmEyMy42NTcgMjMuNjU3IDAgMCAwLTMuNzg1LjYxbC0uNDcyLjExOXptMS44OTYtNi42M2MtLjI2OCAwLS41MDUuMDU4LS43MDUuMTczLS45OTQuNTczLTEuMTcgMi41NjUtLjQ4NSA1LjI1M2EyNS4xMjIgMjUuMTIyIDAgMCAxIDMuMjMzLS41MDEgMjQuODQ3IDI0Ljg0NyAwIDAgMSAyLjA1Mi0yLjU0NGMtMS41Ni0xLjUxOS0zLjAzNy0yLjM4MS00LjA5NS0yLjM4MXpNMTYuNzk1IDIyLjY3N2MtLjAwMSAwLS4wMDEgMCAwIDAtMS40MjUgMC0zLjI1NS0xLjA3My01LjE1NC0zLjAyM2wtLjM0LS4zNDkuMzQtLjM0OWEyMy41MyAyMy41MyAwIDAgMCAyLjQyMS0yLjk2OGwuMTM1LS4xOTMuMjM0LS4wMmEyMy42MyAyMy42MyAwIDAgMCAzLjc4Ny0uNjA5bC40NzItLjExOS4xMzQuNDY4Yy45ODcgMy40ODQuNjg4IDUuOTgzLS44MjQgNi44NTRhMi4zOCAyLjM4IDAgMCAxLTEuMjA1LjMwOHptLTQuMDk2LTMuMzgxYzEuNTYgMS41MTkgMy4wMzcgMi4zODEgNC4wOTUgMi4zODFoLjAwMWMuMjY3IDAgLjUwNS0uMDU4LjcwNC0uMTczLjk5NC0uNTczIDEuMTcxLTIuNTY2LjQ4NS01LjI1NGEyNS4wMiAyNS4wMiAwIDAgMS0zLjIzNC41MDEgMjQuNjc0IDI0LjY3NCAwIDAgMS0yLjA1MSAyLjU0NXpNMTguNjkgOC45NDVsLS40NzItLjExOWEyMy40NzkgMjMuNDc5IDAgMCAwLTMuNzg3LS42MWwtLjIzNC0uMDItLjEzNS0uMTkzYTIzLjQxNCAyMy40MTQgMCAwIDAtMi40MjEtMi45NjdsLS4zNC0uMzQ5LjM0LS4zNDlDMTQuMTM1IDEuNzc4IDE2LjUxNS43NjcgMTggMS42MjJjMS41MTIuODcyIDEuODEyIDMuMzcuODI0IDYuODU1bC0uMTM0LjQ2OHpNMTQuNzUgNy4yNGMxLjE0Mi4xMDQgMi4yMjcuMjczIDMuMjM0LjUwMS42ODYtMi42ODguNTA5LTQuNjgtLjQ4NS01LjI1My0uOTg4LS41NzEtMi44NDUuMzA0LTQuOCAyLjIwOEEyNC44NDkgMjQuODQ5IDAgMCAxIDE0Ljc1IDcuMjR6TTcuMjA2IDIyLjY3N0EyLjM4IDIuMzggMCAwIDEgNiAyMi4zNjljLTEuNTEyLS44NzEtMS44MTItMy4zNjktLjgyMy02Ljg1NGwuMTMyLS40NjguNDcyLjExOWMxLjE1NS4yOTEgMi40MjkuNDk2IDMuNzg1LjYwOWwuMjM1LjAyLjEzNC4xOTNhMjMuNTk2IDIzLjU5NiAwIDAgMCAyLjQyMiAyLjk2OGwuMzQuMzQ5LS4zNC4zNDljLTEuODk4IDEuOTUtMy43MjggMy4wMjMtNS4xNTEgMy4wMjN6bS0xLjE5LTYuNDI3Yy0uNjg2IDIuNjg4LS41MDkgNC42ODEuNDg1IDUuMjU0Ljk4Ny41NjMgMi44NDMtLjMwNSA0LjgtMi4yMDhhMjQuOTk4IDI0Ljk5OCAwIDAgMS0yLjA1Mi0yLjU0NSAyNC45NzYgMjQuOTc2IDAgMCAxLTMuMjMzLS41MDF6TTEyIDE2Ljg3OGMtLjgyMyAwLTEuNjY5LS4wMzYtMi41MTYtLjEwNmwtLjIzNS0uMDItLjEzNS0uMTkzYTMwLjM4OCAzMC4zODggMCAwIDEtMS4zNS0yLjEyMiAzMC4zNTQgMzAuMzU0IDAgMCAxLTEuMTY2LTIuMjI4bC0uMS0uMjEzLjEtLjIxM2EzMC4zIDMwLjMgMCAwIDEgMS4xNjYtMi4yMjhjLjQxNC0uNzE2Ljg2OS0xLjQzIDEuMzUtMi4xMjJsLjEzNS0uMTkzLjIzNS0uMDJhMjkuNzg1IDI5Ljc4NSAwIDAgMSA1LjAzMyAwbC4yMzQuMDIuMTM0LjE5M2EzMC4wMDYgMzAuMDA2IDAgMCAxIDIuNTE3IDQuMzVsLjEwMS4yMTMtLjEwMS4yMTNhMjkuNiAyOS42IDAgMCAxLTIuNTE3IDQuMzVsLS4xMzQuMTkzLS4yMzQuMDJjLS44NDcuMDctMS42OTQuMTA2LTIuNTE3LjEwNnptLTIuMTk3LTEuMDg0YzEuNDguMTExIDIuOTE0LjExMSA0LjM5NSAwYTI5LjAwNiAyOS4wMDYgMCAwIDAgMi4xOTYtMy43OTggMjguNTg1IDI4LjU4NSAwIDAgMC0yLjE5Ny0zLjc5OCAyOS4wMzEgMjkuMDMxIDAgMCAwLTQuMzk0IDAgMjguNDc3IDI4LjQ3NyAwIDAgMC0yLjE5NyAzLjc5OCAyOS4xMTQgMjkuMTE0IDAgMCAwIDIuMTk3IDMuNzk4eiIvPjwvc3ZnPg=="},215:function(e,M){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHJvbGU9ImltZyIgdmlld0JveD0iMCAwIDI0IDI0Ij48dGl0bGU+QW1hem9uIEFXUyBpY29uPC90aXRsZT48cGF0aCBkPSJNNi43NjMgMTAuMDM2YzAgLjI5Ni4wMzIuNTM1LjA4OC43MS4wNjQuMTc2LjE0NC4zNjguMjU2LjU3Ni4wNC4wNjMuMDU2LjEyNy4wNTYuMTgzIDAgLjA4LS4wNDguMTYtLjE1Mi4yNGwtLjUwMy4zMzVhLjM4My4zODMgMCAwIDEtLjIwOC4wNzJjLS4wOCAwLS4xNi0uMDQtLjIzOS0uMTEyYTIuNDcgMi40NyAwIDAgMS0uMjg3LS4zNzUgNi4xOCA2LjE4IDAgMCAxLS4yNDgtLjQ3MWMtLjYyMi43MzQtMS40MDUgMS4xMDEtMi4zNDcgMS4xMDEtLjY3IDAtMS4yMDUtLjE5MS0xLjU5Ni0uNTc0LS4zOTEtLjM4NC0uNTktLjg5NC0uNTktMS41MzMgMC0uNjc4LjIzOS0xLjIzLjcyNi0xLjY0NC40ODctLjQxNSAxLjEzMy0uNjIzIDEuOTU1LS42MjMuMjcyIDAgLjU1MS4wMjQuODQ2LjA2NC4yOTYuMDQuNi4xMDQuOTE4LjE3NnYtLjU4M2MwLS42MDctLjEyNy0xLjAzLS4zNzUtMS4yNzctLjI1NS0uMjQ4LS42ODYtLjM2Ny0xLjMtLjM2Ny0uMjggMC0uNTY4LjAzMS0uODYzLjEwMy0uMjk1LjA3Mi0uNTgzLjE2LS44NjIuMjcyYTIuMjg3IDIuMjg3IDAgMCAxLS4yOC4xMDQuNDg4LjQ4OCAwIDAgMS0uMTI3LjAyM2MtLjExMiAwLS4xNjgtLjA4LS4xNjgtLjI0N3YtLjM5MWMwLS4xMjguMDE2LS4yMjQuMDU2LS4yOGEuNTk3LjU5NyAwIDAgMSAuMjI0LS4xNjdjLjI3OS0uMTQ0LjYxNC0uMjY0IDEuMDA1LS4zNmE0Ljg0IDQuODQgMCAwIDEgMS4yNDYtLjE1MWMuOTUgMCAxLjY0NC4yMTYgMi4wOTEuNjQ3LjQzOS40My42NjIgMS4wODUuNjYyIDEuOTYzdjIuNTg2em0tMy4yNCAxLjIxNGMuMjYzIDAgLjUzNC0uMDQ4LjgyMi0uMTQ0LjI4Ny0uMDk2LjU0My0uMjcxLjc1OC0uNTEuMTI4LS4xNTIuMjI0LS4zMi4yNzItLjUxMi4wNDctLjE5MS4wOC0uNDIzLjA4LS42OTR2LS4zMzVhNi42NiA2LjY2IDAgMCAwLS43MzUtLjEzNiA2LjAyIDYuMDIgMCAwIDAtLjc1LS4wNDhjLS41MzUgMC0uOTI2LjEwNC0xLjE5LjMyLS4yNjMuMjE1LS4zOS41MTgtLjM5LjkxNyAwIC4zNzUuMDk1LjY1NS4yOTUuODQ2LjE5MS4yLjQ3LjI5Ni44MzguMjk2em02LjQxLjg2MmMtLjE0NCAwLS4yNC0uMDI0LS4zMDQtLjA4LS4wNjQtLjA0OC0uMTItLjE2LS4xNjgtLjMxMUw3LjU4NiA1LjU1YTEuMzk4IDEuMzk4IDAgMCAxLS4wNzItLjMyYzAtLjEyOC4wNjQtLjIuMTkxLS4yaC43ODNjLjE1MSAwIC4yNTUuMDI1LjMxLjA4LjA2NS4wNDguMTEzLjE2LjE2LjMxMmwxLjM0MiA1LjI4NCAxLjI0NS01LjI4NGMuMDQtLjE2LjA4OC0uMjY0LjE1MS0uMzEyYS41NDkuNTQ5IDAgMCAxIC4zMi0uMDhoLjYzOGMuMTUyIDAgLjI1Ni4wMjUuMzIuMDguMDYzLjA0OC4xMi4xNi4xNTEuMzEybDEuMjYxIDUuMzQ4IDEuMzgxLTUuMzQ4Yy4wNDgtLjE2LjEwNC0uMjY0LjE2LS4zMTJhLjUyLjUyIDAgMCAxIC4zMTEtLjA4aC43NDNjLjEyNyAwIC4yLjA2NS4yLjIgMCAuMDQtLjAwOS4wOC0uMDE3LjEyOGExLjEzNyAxLjEzNyAwIDAgMS0uMDU2LjJsLTEuOTIzIDYuMTdjLS4wNDguMTYtLjEwNC4yNjMtLjE2OC4zMTFhLjUxLjUxIDAgMCAxLS4zMDMuMDhoLS42ODdjLS4xNTEgMC0uMjU1LS4wMjQtLjMyLS4wOC0uMDYzLS4wNTYtLjExOS0uMTYtLjE1LS4zMmwtMS4yMzgtNS4xNDgtMS4yMyA1LjE0Yy0uMDQuMTYtLjA4Ny4yNjQtLjE1LjMyLS4wNjUuMDU2LS4xNzcuMDgtLjMyLjA4em0xMC4yNTYuMjE1Yy0uNDE1IDAtLjgzLS4wNDgtMS4yMjktLjE0My0uMzk5LS4wOTYtLjcxLS4yLS45MTgtLjMyLS4xMjgtLjA3MS0uMjE1LS4xNTEtLjI0Ny0uMjIzYS41NjMuNTYzIDAgMCAxLS4wNDgtLjIyNHYtLjQwN2MwLS4xNjcuMDY0LS4yNDcuMTgzLS4yNDcuMDQ4IDAgLjA5Ni4wMDguMTQ0LjAyNC4wNDguMDE2LjEyLjA0OC4yLjA4LjI3MS4xMi41NjYuMjE1Ljg3OC4yNzkuMzE5LjA2NC42My4wOTYuOTUuMDk2LjUwMiAwIC44OTQtLjA4OCAxLjE2NS0uMjY0YS44Ni44NiAwIDAgMCAuNDE1LS43NTguNzc3Ljc3NyAwIDAgMC0uMjE1LS41NTljLS4xNDQtLjE1MS0uNDE2LS4yODctLjgwNy0uNDE1bC0xLjE1Ny0uMzZjLS41ODMtLjE4My0xLjAxNC0uNDU0LTEuMjc3LS44MTNhMS45MDIgMS45MDIgMCAwIDEtLjQtMS4xNThjMC0uMzM1LjA3My0uNjMuMjE2LS44ODYuMTQ0LS4yNTUuMzM1LS40NzkuNTc1LS42NTQuMjQtLjE4NC41MS0uMzIuODMtLjQxNS4zMi0uMDk2LjY1NS0uMTM2IDEuMDA2LS4xMzYuMTc1IDAgLjM1OS4wMDguNTM1LjAzMi4xODMuMDI0LjM1LjA1Ni41MTguMDg4LjE2LjA0LjMxMi4wOC40NTUuMTI3LjE0NC4wNDguMjU2LjA5Ni4zMzYuMTQ0YS42OS42OSAwIDAgMSAuMjQuMi40My40MyAwIDAgMSAuMDcxLjI2M3YuMzc1YzAgLjE2OC0uMDY0LjI1Ni0uMTg0LjI1NmEuODMuODMgMCAwIDEtLjMwMy0uMDk2IDMuNjUyIDMuNjUyIDAgMCAwLTEuNTMyLS4zMTFjLS40NTUgMC0uODE1LjA3MS0xLjA2Mi4yMjMtLjI0OC4xNTItLjM3NS4zODMtLjM3NS43MSAwIC4yMjQuMDguNDE2LjI0LjU2Ny4xNTkuMTUyLjQ1NC4zMDQuODc3LjQ0bDEuMTM0LjM1OGMuNTc0LjE4NC45OS40NCAxLjIzNy43NjcuMjQ3LjMyNy4zNjcuNzAyLjM2NyAxLjExNyAwIC4zNDMtLjA3Mi42NTUtLjIwNy45MjYtLjE0NC4yNzItLjMzNi41MTEtLjU4My43MDMtLjI0OC4yLS41NDMuMzQzLS44ODYuNDQ3LS4zNi4xMTEtLjczNC4xNjctMS4xNDIuMTY3ek0yMS42OTggMTYuMjA3Yy0yLjYyNiAxLjk0LTYuNDQyIDIuOTY5LTkuNzIyIDIuOTY5LTQuNTk4IDAtOC43NC0xLjctMTEuODctNC41MjYtLjI0Ny0uMjIzLS4wMjQtLjUyNy4yNzItLjM1MSAzLjM4NCAxLjk2MyA3LjU1OSAzLjE1MyAxMS44NzcgMy4xNTMgMi45MTQgMCA2LjExNC0uNjA3IDkuMDYtMS44NTIuNDM5LS4yLjgxNC4yODcuMzgzLjYwN3pNMjIuNzkyIDE0Ljk2MWMtLjMzNi0uNDMtMi4yMi0uMjA3LTMuMDc0LS4xMDMtLjI1NS4wMzItLjI5NS0uMTkyLS4wNjMtLjM2IDEuNS0xLjA1MyAzLjk2Ny0uNzUgNC4yNTQtLjM5OS4yODcuMzYtLjA4IDIuODI2LTEuNDg1IDQuMDA3LS4yMTUuMTg0LS40MjMuMDg4LS4zMjctLjE1MS4zMi0uNzkgMS4wMy0yLjU3LjY5NS0yLjk5NHoiLz48L3N2Zz4="},216:function(e,M){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+QW5ndWxhciBpY29uPC90aXRsZT48cGF0aCBkPSJNOS45MyAxMi42NDVoNC4xMzRMMTEuOTk2IDcuNzRNMTEuOTk2LjAwOUwuNjg2IDMuOTg4bDEuNzI1IDE0Ljc2IDkuNTg1IDUuMjQzIDkuNTg4LTUuMjM4TDIzLjMwOCAzLjk5IDExLjk5Ni4wMXptNy4wNTggMTguMjk3aC0yLjYzNmwtMS40Mi0zLjUwMUg4Ljk5NWwtMS40MiAzLjUwMUg0LjkzN2w3LjA2LTE1LjY0OCA3LjA1NyAxNS42NDh6Ii8+PC9zdmc+"},217:function(e,M){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+Qm9vdHN0cmFwIGljb248L3RpdGxlPjxwYXRoIGQ9Ik0yMCAwSDRDMS43OTMuMDA2LjAwNiAxLjc5MyAwIDR2MTZjMCAyLjIgMS44IDQgNCA0aDE2YzIuMiAwIDQtMS44IDQtNFY0YzAtMi4yLTEuOC00LTQtNHptLTIuMTg3IDE2Ljg1NWMtLjIuNDgyLS41MTcuOTA3LS45MjMgMS4yMzQtLjQyLjM0LS45NTIuNjItMS42MDcuODItLjY1NC4yMDMtMS40MzIuMzA1LTIuMzMzLjMwNUg2LjUxOHYtMTRoNi44MDJjMS4yNTggMCAyLjI2Ni4yODMgMy4wMi44Ni43Ni41OCAxLjEzOCAxLjQ0NCAxLjEzOCAyLjYxIDAgLjcwNS0uMTcyIDEuMzEtLjUxOCAxLjgxLS4zNDQuNDk3LS44NC44ODYtMS40OCAxLjE1NnYuMDQ2Yy44NTQuMTggMS41MTUuNTg1IDEuOTUgMS4yMTVzLjY1OCAxLjQyNi42NTggMi4zODdjMCAuNTM4LS4xMDQgMS4wNS0uMyAxLjUyOGwuMDI1LjAyN3ptLTIuNzc2LTMuNDVjLS40MS0uMzc1LS45ODYtLjU1OC0xLjczLS41NThIOC45ODV2NC4zNjhoNC4zMzRjLjc0IDAgMS4zMi0uMTkyIDEuNzMtLjU4LjQxLS4zODUuNjItLjkzNC42Mi0xLjY0LS4wMDctLjY5LS4yMS0xLjIyNC0uNjItMS41OWgtLjAxN3ptLS42LTIuODIzYy4zOTYtLjMzNi41OS0uODE3LjU5LTEuNDQ0IDAtLjcwNC0uMTc1LTEuMjA0LS41My0xLjQ5LS4zNTItLjI4NS0uODYtLjQzMy0xLjUyOC0uNDMzaC00djMuODYzaDRjLjU4MyAwIDEuMDgtLjE3IDEuNDY0LS40OTZ6Ii8+PC9zdmc+"},218:function(e,M){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+Q1NTMyBpY29uPC90aXRsZT48cGF0aCBkPSJNMS41IDBoMjFsLTEuOTEgMjEuNTYzTDExLjk3NyAyNGwtOC41NjUtMi40MzhMMS41IDB6bTE3LjA5IDQuNDEzTDUuNDEgNC40MWwuMjEzIDIuNjIyIDEwLjEyNS4wMDItLjI1NSAyLjcxNmgtNi42NGwuMjQgMi41NzNoNi4xODJsLS4zNjYgMy41MjMtMi45MS44MDQtMi45NTYtLjgxLS4xODgtMi4xMWgtMi42MWwuMjkgMy44NTVMMTIgMTkuMjg4bDUuMzczLTEuNTNMMTguNTkgNC40MTR6Ii8+PC9zdmc+"},219:function(e,M){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RXhwbyBpY29uPC90aXRsZT48cGF0aCBkPSJNMTguMjIgMTEuNjZhMi45NDQgMi45NDQgMCAwIDAgMy4wODUtMi4zNjEgMS45MyAxLjkzIDAgMCAwLTEuNjIxLS44ODEgMS45MzIgMS45MzIgMCAwIDAtMS40NjQgMy4yNDF6bS02Ljg4Ni04LjEzOGw0LjAyMS0yLjMyNy0xLjI4LS43MjItNS41NDMgMy4yMS40NDEuMjQ4Ljg0LjQ3IDEuNTIxLS44OHpNMTUuODcuOThhLjIxNy4yMTcgMCAwIDEgLjE0Mi4xNDFsMS44NjMgNS42OTVhLjIxOC4yMTggMCAwIDEtLjA5NC4yNTggMy43OTggMy43OTggMCAwIDAtMS43MzggNC4yNyAzLjggMy44IDAgMCAwIDQuMDUgMi43NzdjLjEwMi0uMDA4LjIuMDU1LjIzMS4xNTJsMS45MjIgNS44NTJhLjIyNC4yMjQgMCAwIDEtLjA5NC4yNThsLTUuODk0IDMuNTc4YS4yMjQuMjI0IDAgMCAxLS4wOTYuMDI5LjIxOS4yMTkgMCAwIDEtLjE1NC0uMDMzbC0yLjA3NC0xLjM0OGEuMjIyLjIyMiAwIDAgMS0uMDgyLS4wOTdMOS44MDYgMTIuODRsLTYuMTY1IDMuNjU3YS4yMi4yMiAwIDAgMS0uMDQuMDIxLjIwOS4yMDkgMCAwIDEtLjE5Ni0uMDE0bC0xLjM5NC0uODJhLjIxNi4yMTYgMCAwIDEtLjA4Ni0uMjg2TDcuODkgMy41ODZhLjIxNi4yMTYgMCAwIDEgLjEwMi0uMDk5TDEzLjk2LjAzMWEuMjE5LjIxOSAwIDAgMSAuMjE5LS4wMDRMMTUuODcuOTh6TTkuNjMgNC44MDVsLTEuMTY1LS42NTctLjI4NS0uMTZMMi40MSAxNS40MWwxLjA0Ny42MTcgNC45NzItNi43NjFhLjIxNi4yMTYgMCAwIDEgLjIwNC0uMDljLjA3OS4wMDguMTQ2LjA2LjE3Ni4xMzNMMTQuMjMgMjIuMjhsMS40NS45MzktNS44MDMtMTcuNjctLjI0Ni0uNzQ0em0xMC4wNTQgNy45MThhMi4zNzMgMi4zNzMgMCAxIDEgMS42NzYtNC4wNTIgMi4zNyAyLjM3IDAgMCAxIC42OTQgMS42NzYgMi4zNyAyLjM3IDAgMCAxLTIuMzcgMi4zNzZ6Ii8+PC9zdmc+"},220:function(e,M){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RmlyZWJhc2UgaWNvbjwvdGl0bGU+PHBhdGggZD0iTTMuODkgMTUuNjczTDYuMjU1LjQ2MUEuNTQyLjU0MiAwIDAgMSA3LjI3LjI4OUw5LjgxMyA1LjA2IDMuODkgMTUuNjczem0xNi43OTUgMy42OTFMMTguNDMzIDUuMzY1YS41NDMuNTQzIDAgMCAwLS45MTgtLjI5NWwtMTQuMiAxNC4yOTQgNy44NTcgNC40MjhhMS42MiAxLjYyIDAgMCAwIDEuNTg3IDBsNy45MjYtNC40Mjh6TTE0LjMgNy4xNDhsLTEuODItMy40ODJhLjU0Mi41NDIgMCAwIDAtLjk2IDBMMy41MyAxNy45ODQgMTQuMyA3LjE0OHoiLz48L3N2Zz4="},221:function(e,M){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+SFRNTDUgaWNvbjwvdGl0bGU+PHBhdGggZD0iTTEuNSAwaDIxbC0xLjkxIDIxLjU2M0wxMS45NzcgMjRsLTguNTY0LTIuNDM4TDEuNSAwem03LjAzMSA5Ljc1bC0uMjMyLTIuNzE4IDEwLjA1OS4wMDMuMjMtMi42MjJMNS40MTIgNC40MWwuNjk4IDguMDFoOS4xMjZsLS4zMjYgMy40MjYtMi45MS44MDQtMi45NTUtLjgxLS4xODgtMi4xMUg2LjI0OGwuMzMgNC4xNzFMMTIgMTkuMzUxbDUuMzc5LTEuNDQzLjc0NC04LjE1N0g4LjUzMXoiLz48L3N2Zz4="},222:function(e,M){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+SmF2YVNjcmlwdCBpY29uPC90aXRsZT48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHptMjIuMDM0IDE4LjI3NmMtLjE3NS0xLjA5NS0uODg4LTIuMDE1LTMuMDAzLTIuODczLS43MzYtLjM0NS0xLjU1NC0uNTg1LTEuNzk3LTEuMTQtLjA5MS0uMzMtLjEwNS0uNTEtLjA0Ni0uNzA1LjE1LS42NDYuOTE1LS44NCAxLjUxNS0uNjYuMzkuMTIuNzUuNDIuOTc2LjkgMS4wMzQtLjY3NiAxLjAzNC0uNjc2IDEuNzU1LTEuMTI1LS4yNy0uNDItLjQwNC0uNjAxLS41ODYtLjc4LS42My0uNzA1LTEuNDY5LTEuMDY1LTIuODM0LTEuMDM0bC0uNzA1LjA4OWMtLjY3Ni4xNjUtMS4zMi41MjUtMS43MSAxLjAwNS0xLjE0IDEuMjkxLS44MTEgMy41NDEuNTY5IDQuNDcxIDEuMzY1IDEuMDIgMy4zNjEgMS4yNDQgMy42MTYgMi4yMDUuMjQgMS4xNy0uODcgMS41NDUtMS45NjYgMS40MS0uODExLS4xOC0xLjI2LS41ODYtMS43NTUtMS4zMzZsLTEuODMgMS4wNTFjLjIxLjQ4LjQ1LjY4OS44MSAxLjEwOSAxLjc0IDEuNzU2IDYuMDkgMS42NjYgNi44NzEtMS4wMDQuMDI5LS4wOS4yNC0uNzA1LjA3NC0xLjY1bC4wNDYuMDY3em0tOC45ODMtNy4yNDVoLTIuMjQ4YzAgMS45MzgtLjAwOSAzLjg2NC0uMDA5IDUuODA1IDAgMS4yMzIuMDYzIDIuMzYzLS4xMzggMi43MTEtLjMzLjY4OS0xLjE4LjYwMS0xLjU2Ni40OC0uMzk2LS4xOTYtLjU5Ny0uNDY2LS44My0uODU1LS4wNjMtLjEwNS0uMTEtLjE5Ni0uMTI3LS4xOTZsLTEuODI1IDEuMTI1Yy4zMDUuNjMuNzUgMS4xNzIgMS4zMjQgMS41MTcuODU1LjUxIDIuMDA0LjY3NSAzLjIwNy40MDUuNzgzLS4yMjYgMS40NTgtLjY5MSAxLjgxMS0xLjQxMS41MS0uOTMuNDAyLTIuMDcuMzk3LTMuMzQ2LjAxMi0yLjA1NCAwLTQuMTA5IDAtNi4xNzlsLjAwNC0uMDU2eiIvPjwvc3ZnPg=="},223:function(e,M){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+TW9uZ29EQiBpY29uPC90aXRsZT48cGF0aCBkPSJNMTcuMTggOS41MThjLTEuMjYzLTUuNTYtNC4yNDItNy4zODctNC41NjItOC4wODZDMTIuMjY2LjkzOSAxMS44ODUgMCAxMS44ODUgMGMtLjAwMi4wMTktLjAwNC4wMzEtLjAwNS4wNDl2LjAxM2gtLjAwMWMtLjAwMi4wMTUtLjAwMy4wMjUtLjAwNC4wMzl2LjAxNWgtLjAwMmMwIC4wMS0uMDAyLjAxOC0uMDAyLjAyNnYuMDI2aC0uMDAzYy0uMDAxLjAwOC0uMDAxLjAxOC0uMDAzLjAyNXYuMDIxaC0uMDAyYzAgLjAwNyAwIC4wMTUtLjAwMi4wMjF2LjAyaC0uMDAyYzAgLjAxLS4wMDEuMDIyLS4wMDIuMDMydi4wMDJjLS4wMDMuMDE3LS4wMDYuMDM0LS4wMDkuMDV2LjAwOGgtLjAwMmMtLjAwMS4wMDQtLjAwMy4wMDgtLjAwMy4wMTJ2LjAxN2gtLjAwM3YuMDIyaC0uMDA1di4wMThoLS4wMDV2LjAyMWgtLjAwNHYuMDE5aC0uMDA0di4wMTdoLS4wMDZ2LjAxNGgtLjAwNHYuMDE4aC0uMDA0di4wMTRoLS4wMDV2LjAxM0gxMS44di4wMTVoLS4wMDRjLS4wMDEuMDAxLS4wMDEuMDAzLS4wMDEuMDA0di4wMWgtLjAwM2MtLjAwMS4wMDItLjAwMS4wMDQtLjAwMS4wMDZ2LjAwNmgtLjAwMmMtLjAwMS4wMDMtLjAwMi4wMDgtLjAwMi4wMS0uMDAzLjAwNy0uMDA3LjAxNC0uMDEuMDIxdi4wMDJjLS4wMDIuMDAyLS4wMDQuMDA1LS4wMDUuMDA3di4wMDhoLS4wMDR2LjAwOGgtLjAwNXYuMDA4aC0uMDAzdi4wMWgtLjAwNnYuMDE0aC0uMDA0di4wMDRoLS4wMDR2LjAwOGgtLjAwNHYuMDExaC0uMDA0di4wMDhoLS4wMDZ2LjAxMWgtLjAwNHYuMDA4aC0uMDA1di4wMDhoLS4wMDN2LjAxaC0uMDA1di4wMDhoLS4wMDR2LjAwNmgtLjAwNHYuMDA4aC0uMDA2Vi43NmgtLjAwNHYuMDA2aC0uMDA1di4wMDhoLS4wMDR2LjAxMWgtLjAwNXYuMDA0aC0uMDAzdi4wMDhoLS4wMDZ2LjAwNGgtLjAwNHYuMDFoLS4wMDR2LjAwNGgtLjAwNHYuMDA4aC0uMDA1di4wMDZoLS4wMDNsLS4wMDIuMDA0di4wMDRoLS4wMDJjLS4wMDEuMDAyLS4wMDIuMDAyLS4wMDIuMDA0di4wMDFoLS4wMDFjLS4wMDEuMDAzLS4wMDIuMDA1LS4wMDQuMDA3di4wMDNoLS4wMDFjLS4wMDUuMDA2LS4wMDguMDEyLS4wMTIuMDE4di4wMDFjLS4wMDIuMDAyLS4wMDcuMDA2LS4wMDkuMDF2LjAwMmgtLjAwMWMtLjAwMS4wMDEtLjAwMy4wMDItLjAwMy4wMDN2LjAwM2gtLjAwMmwtLjAwMy4wMDN2LjAwMWgtLjAwMWMwIC4wMDEtLjAwMi4wMDItLjAwMy4wMDR2LjAwNGgtLjAwM2wtLjAwMi4wMDJ2LjAwMmgtLjAwMmMwIC4wMDItLjAwMi4wMDItLjAwMi4wMDN2LjAwM2gtLjAwNGMwIC4wMDEtLjAwMS4wMDItLjAwMi4wMDNWLjkyaC0uMDAzdi4wMDRoLS4wMDRWLjkzaC0uMDA0di4wMDhoLS4wMDVWLjkzaC0uMDA1di4wMDRoLS4wMDRWLjk0aC0uMDA1di4wMDhoLS4wMDV2LjAwNGgtLjAwNHYuMDA2aC0uMDA0di4wMDRoLS4wMDRWLjk3aC0uMDA2di4wMDRoLS4wMDRWLjk4aC0uMDA1di4wMDRoLS4wMDR2LjAwNWgtLjAwNXYuMDFoLS4wMDJ2LjAwNGgtLjAwNnYuMDA1aC0uMDA0di4wMDJoLS4wMDR2LjAwNGgtLjAwNXYuMDFoLS4wMDR2LjAwNGgtLjAwNXYuMDA0aC0uMDA0di4wMDZoLS4wMDV2LjAwNGgtLjAwNXYuMDA0aC0uMDA0di4wMDRoLS4wMDR2LjAxaC0uMDA0di4wMDVoLS4wMDZ2LjAwNGgtLjAwNHYuMDA0aC0uMDA1di4wMDZoLS4wMDR2LjAwNGgtLjAwNXYuMDA3aC0uMDA0di4wMDRoLS4wMDZWMS4xaC0uMDAydi4wMDRoLS4wMDR2LjAwNGgtLjAwNXYuMDA0aC0uMDA0di4wMDZoLS4wMDV2LjAwNGgtLjAwM2MtLjAwMS4wMDEtLjAwMS4wMDItLjAwMS4wMDJ2LjAwMmgtLjAwMmwtLjAwNC4wMDRzLS4wMDIuMDAyLS4wMDQuMDAzdi4wMDZoLS4wMDR2LjAwNWgtLjAwNHYuMDA0aC0uMDA0di4wMDRoLS4wMDNsLS4wMDMuMDAzdi4wMDNoLS4wMDJsLS4wMDIuMDAydi4wMDNoLS4wMDJjLS4wMDUuMDA2LS4wMDcuMDEtLjAxNC4wMTYtLjAwMi4wMDItLjAwOC4wMDctLjAxMi4wMS0uMDEyLjAwOC0uMDI3LjAyMS0uMDM5LjAzMi0uMDA4LjAwNS0uMDE2LjAxMi0uMDIyLjAxN3YuMDAxaC0uMDAxYy0uMDE2LjAxMy0uMDMxLjAyNS0uMDQ5LjAzOXYuMDAxYy0uMDI0LjAyLS4wNDcuMDM5LS4wNzQuMDYyVjEuMzRoLS4wMDJjLS4wNTcuMDQ3LS4xMTcuMS0uMTg2LjE1OVYxLjVoLS4wMDFjLS4xNjkuMTQ4LS4zNy4zMzgtLjU5NS41NjhsLS4wMTUuMDE1LS4wMDQuMDA0QzkgMy40OTQgNi44NTcgNi40MjYgNi42MzEgMTEuMTY0Yy0uMDIuMzkyLS4wMTYuNzczLjAwNiAxLjE0NHYuMDA5Yy4xMDkgMS44NjcuNjk1IDMuNDYxIDEuNDI4IDQuNzU2di4wMDFjLjI5Mi41MTYuNjA3Ljk4NS45MjYgMS40MDV2LjAwMWMxLjEwMiAxLjQ1NSAyLjIyNyAyLjMxNyAyLjUxNCAyLjUyNi40NDEgMS4wMjMuNCAyLjc3OS40IDIuNzc5bC42NDQuMjE1cy0uMTMxLTEuNzAxLjA1My0yLjUyMmMuMDU3LS4yNTcuMTkyLS40NzYuMzQ5LS42NjIuMTA2LS4wNzUuNDItLjMwMS43OTctLjY0NS4wMTgtLjAxOS4wMjgtLjAzNi4wNDQtLjA1NCAxLjUyMS0xLjQxOCA0LjM2Mi00LjkxIDMuMzg4LTEwLjU5OXoiLz48L3N2Zz4="},224:function(e,M){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+Tm9kZS5qcyBpY29uPC90aXRsZT48cGF0aCBkPSJNMTEuNDM1LjE1M2wtOS4zNyA1LjQzYy0uMzUuMjAzLS41NjQuNTc4LS41NjMuOTgzVjE3LjQzYzAgLjQwNC4yMTUuNzguNTY0Ljk4Mmw5LjM3IDUuNDM1Yy4zNS4yMDMuNzguMjAzIDEuMTMgMGw5LjM2Ni01LjQzM2MuMzUtLjIwNS41NjQtLjU3OC41NjUtLjk4MlY2LjU2NmMwLS40MDQtLjIxNi0uNzgtLjU2Ni0uOTg0TDEyLjU2Ny4xNTJjLS4zNS0uMjAzLS43ODItLjIwMy0xLjEzIDAiLz48L3N2Zz4="},225:function(e,M){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+VnVlLmpzIGljb248L3RpdGxlPjxwYXRoIGQ9Ik0xOS4xOTcgMS42MDhsLjAwMy0uMDA2aC00LjQyNUwxMiA2LjR2LjAwMmwtMi43NzItNC44SDQuODAzdi4wMDVIMGwxMiAyMC43ODZMMjQgMS42MDgiLz48L3N2Zz4="},236:function(e){e.exports=[{id:"convo",title:"CONVO",slug:"convo",tags:["Android/iOS","React Native"],descShort:"<p>A native mobile chat app running on iOS and Android. Built with React Native the application provides an interface for users to send messages, images and their location.</p>",objective:"<p>CONVO is a cross compatible mobile device chat application that allows users to send and receive messages in real time. In addition to simple text based messages, the app is to provide an interface to share images and current location.</p>",solution:"<p>CONVO is built using the React Native framework leveraging the Expo development platform for cross platform mobile app development. Facilities for permissions, image and location sharing are achieved using the Expo API library.</p><p>Google’s firebase is used for user authentication, storing messages, images and other required data fields.</p><p>That chat application interface is built with the ‘Gifted Chat’ library to provide a complete and familiar feel to the application</p>",image:"./images/projects/convo/main.png",tech:["react","expo","firebase"],mobileScreen:"./images/projects/convo/mobile2.png",desktopScreen:"./images/projects/ello/desktop.jpg",link:null,repo:"https://github.com/James-Coates/convo",colorDark:"#6B26CA",featured:!0,mobileOnly:!0},{id:"ello",title:"ello*",slug:"ello",tags:["Web App","React","PWA","TDD"],image:"./images/projects/ello/main.png",descShort:"<p>ello* is a progressive web application integrating with the Meetup API to provides users with access to all the Meetup events. Browse through events in your area or search events in any city across the globe.</p>",objective:"<p>Ello is designed to offer Meetup event search related features in the form of a progressive web application (a site that offering advanced features such as offering a native application feel)</p>",solution:"<p>A test driven development approach was followed to build this prototype which interacts with the Meetup API using a serverless framework.</p><p>The web app provides a filterable list of events that can be selected for further details.</p>",tech:["react","amazonaws"],mobileScreen:"./images/projects/ello/mobile.jpg",desktopScreen:"./images/projects/ello/desktop.jpg",link:"https://james-coates.github.io/meetup/",repo:"https://github.com/James-Coates/meetup",colorDark:"#0B132B",featured:!1},{id:"flix",title:"FLIX",slug:"flix",tags:["Web App","React","API"],image:"./images/projects/flix/main.png",descShort:"<p>A movie database web app providing details on a range of titles, genres and directors. The app retrieves a select collection of movie information from a self built API. Users can also sign up to the platform and store a collection of their favourite movies.</p>",objective:"<p>FLIX is a prototype for a web application offering information on movies. This build is limited to movies, genres and directors on a select view movie records.</p><p>The application includes a back-end for handling user requests and serving data from a Mongodb database. It also includes a client facing front-end which displays information from the API to the user.</p>",solution:"<p>This prototype build is limited to information on movies, genres and directors for a small collection of movie records.</p>The application includes a back-end for handling user requests and serving data from a Mongodb database.</p><p>FLIX also includes a client facing front-end which displays information from the API to the user and provides user authentication features to store custom user data such as a list of favourite movies</p>",tech:["react","node-dot-js","mongodb"],mobileScreen:"./images/projects/flix/mobile.jpg",desktopScreen:"./images/projects/flix/desktop.jpg",link:"https://flix-db.herokuapp.com/",repo:"https://github.com/James-Coates/flix",colorDark:"#0A1C43",featured:!0},{id:"todo",title:"Todo App",slug:"to-do",tags:["Web App","Vue"],image:"./images/projects/todo/main.png",descShort:"<p>A simple ‘To-Do’ web application built using the Vue.js framework and UI based on Google’s Material design system.</p>",objective:"<p>To familiarise myself with the Vue.js framework by building a simple application to allow users to type, store and delete a list of to-do items.</p>",solution:"<p>The outcome is a simple application for storing user ‘To-Dos’. The web app, built with Vue.js is based off of Google’s material design framework to provide a clean and intuitive feel.</p>",tech:["vue-dot-js"],mobileScreen:"./images/projects/todo/mobile.jpg",desktopScreen:"./images/projects/todo/desktop.jpg",link:"https://to-do-vue.herokuapp.com/",repo:"https://github.com/James-Coates/to-do-vue",colorDark:"#252525"},{id:"btcquiz",title:"The Bitcoin Quiz App",slug:"btc-quiz",tags:["Web App","Angular"],image:"./images/projects/btc-quiz/main.png",descShort:"<p>A web app offering a selection of Bitcoin related quizzes. The application was built using the Angular framework leveraging the Bootstrap library for the user interface.</p>",objective:"<p>This project served as my introduction to the Angular framework and my primary objective was to provide a simple and clean user interface for a simple web app.</p><p>The application would offer a selection of multiple choice quizzes. Once a quiz is complete the user will be shown the results and offered to pick another quiz.</p>",solution:"<p>A clean and simple UI offering Bitcoin quizzes at three difficulty levels.</p>",tech:["angular","bootstrap"],mobileScreen:"./images/projects/btc-quiz/mobile.jpg",desktopScreen:"./images/projects/btc-quiz/desktop.jpg",link:"https://bitcoin-quiz-app.herokuapp.com/welcome",repo:"https://github.com/James-Coates/bitcoin-quiz-app",colorDark:"#F18F18",featured:!0},{id:"pokedex",title:"Pokedex",slug:"pokedex",tags:["Javascript"],image:"./images/projects/pokedex/main2.png",descShort:"<p>A simple web app built in HTML, CSS and Javascript that uses the Pokemon API to simulate the effect of a pokedex by providing information on a list of Pokemon.</p>",objective:"<p>To build a small web application with HTML, CSS, and JavaScript that loads data from an external API and enables the viewing of data points in detail.</p>",solution:"<p>Data is fed from the pokemon API and displayed within a simple but modern user interface.</p><p>The logic behind the API and the front-end is written in pure Vanilla Javascript. A call is made to the pokemon API once the page loads to display the full list of pokemon. On selecting a Pokemon to view a separate API call is made to retrieve and display its details screen.</p>",tech:["javascript","html5","css3"],mobileScreen:"./images/projects/pokedex/mobile.jpg",desktopScreen:"./images/projects/pokedex/desktop.jpg",link:"https://james-coates.github.io/cf-pokedex/",repo:"https://github.com/James-Coates/cf-pokedex",colorDark:"#161A1E",featured:!0}]},237:function(e){e.exports=[{id:"react",title:"React",icon:"./images/tech/react.svg",color:"#000"},{id:"reactNative",title:"React Native",icon:"./images/tech/react.svg",color:"#000"},{id:"angular",title:"Angular",icon:"./images/tech/angular.svg",color:"#000"},{id:"css",title:"CSS",icon:"./images/tech/css3.svg",color:"#000"},{id:"html",title:"HTML",icon:"./images/tech/html5.svg",color:"#000"},{id:"javascript",title:"Javascript",icon:"./images/tech/javascript.svg",color:"#000"},{id:"vue",title:"VUE",icon:"./images/tech/vue-dot-js.svg",color:"#000"},{id:"firebase",title:"Firebase",icon:"./images/tech/firebase.svg",color:"#000"},{id:"aws",title:"AWS",icon:"./images/tech/amazonaws.svg",color:"#000"},{id:"mongodb",title:"Mongodb",icon:"./images/tech/mongodb.svg",color:"#000"}]},276:function(e,M,t){e.exports=t.p+"static/james-f0bc5bcf86b339a56f86ba530241a0fd.png"},278:function(e){e.exports={data:{allProjectsJson:{edges:[{node:{id:"convo",title:"CONVO",descShort:"<p>A native mobile chat app running on iOS and Android. Built with React Native the application provides an interface for users to send messages, images and their location.</p>",slug:"convo",tags:["Android/iOS","React Native"],colorDark:"#6B26CA",image:{relativePath:"images/projects/convo/main.png"}}},{node:{id:"flix",title:"FLIX",descShort:"<p>A movie database web app providing details on a range of titles, genres and directors. The app retrieves a select collection of movie information from a self built API. Users can also sign up to the platform and store a collection of their favourite movies.</p>",slug:"flix",tags:["Web App","React","API"],colorDark:"#0A1C43",image:{relativePath:"images/projects/flix/main.png"}}},{node:{id:"btcquiz",title:"The Bitcoin Quiz App",descShort:"<p>A web app offering a selection of Bitcoin related quizzes. The application was built using the Angular framework leveraging the Bootstrap library for the user interface.</p>",slug:"btc-quiz",tags:["Web App","Angular"],colorDark:"#F18F18",image:{relativePath:"images/projects/btc-quiz/main.png"}}},{node:{id:"pokedex",title:"Pokedex",descShort:"<p>A simple web app built in HTML, CSS and Javascript that uses the Pokemon API to simulate the effect of a pokedex by providing information on a list of Pokemon.</p>",slug:"pokedex",tags:["Javascript"],colorDark:"#161A1E",image:{relativePath:"images/projects/pokedex/main2.png"}}}]}}}},280:function(e,M,t){var a={"./images/mobile.png":281,"./images/mockup.png":282,"./images/projects/btc-quiz/desktop.jpg":283,"./images/projects/btc-quiz/main.png":284,"./images/projects/btc-quiz/mobile.jpg":285,"./images/projects/convo/main.png":286,"./images/projects/convo/mobile.png":287,"./images/projects/convo/mobile2.png":288,"./images/projects/ello/desktop.jpg":289,"./images/projects/ello/main.png":290,"./images/projects/ello/mobile.jpg":291,"./images/projects/flix/desktop.jpg":292,"./images/projects/flix/main.png":293,"./images/projects/flix/main2.jpg":294,"./images/projects/flix/mobile.jpg":295,"./images/projects/pokedex/desktop.jpg":296,"./images/projects/pokedex/main2.png":297,"./images/projects/pokedex/mobile.jpg":298,"./images/projects/todo/desktop.jpg":299,"./images/projects/todo/main.png":300,"./images/projects/todo/mobile.jpg":301,"./images/tech/amazonaws.svg":215,"./images/tech/angular.svg":216,"./images/tech/bootstrap.svg":217,"./images/tech/css3.svg":218,"./images/tech/expo.svg":219,"./images/tech/firebase.svg":220,"./images/tech/html5.svg":221,"./images/tech/javascript.svg":222,"./images/tech/mongodb.svg":223,"./images/tech/node-dot-js.svg":224,"./images/tech/react.svg":207,"./images/tech/vue-dot-js.svg":225,"./projects":236,"./projects.json":236,"./tech":237,"./tech.json":237};function i(e){var M=j(e);return t(M)}function j(e){var M=a[e];if(!(M+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return M}i.keys=function(){return Object.keys(a)},i.resolve=j,e.exports=i,i.id=280},281:function(e,M,t){e.exports=t.p+"static/mobile-f89c3537cb19b884472e6f314dba5bbf.png"},282:function(e,M,t){e.exports=t.p+"static/mockup-2f95c5f8645728a7bec6100a7951979d.png"},283:function(e,M,t){e.exports=t.p+"static/desktop-6183a449d65f38acebf3c89cc2bd8579.jpg"},284:function(e,M,t){e.exports=t.p+"static/main-43600cd87d79b15b9fb50081149f8f45.png"},285:function(e,M,t){e.exports=t.p+"static/mobile-64f67104f601c86b8f2c301da9576668.jpg"},286:function(e,M,t){e.exports=t.p+"static/main-d2411a5b028d2782f2ea23895a827657.png"},287:function(e,M,t){e.exports=t.p+"static/mobile-016ef0b603ff2bb9f8b8e3ddedba447d.png"},288:function(e,M,t){e.exports=t.p+"static/mobile2-680a4c3fdc83f9849eb15abad872a70a.png"},289:function(e,M,t){e.exports=t.p+"static/desktop-995cb7a256e5f068a003bd1bd2edae8a.jpg"},290:function(e,M,t){e.exports=t.p+"static/main-5813f21e3bb65645c8cad0b94511be1c.png"},291:function(e,M,t){e.exports=t.p+"static/mobile-64a09b0a0064012ab9f8b3443f82ebb0.jpg"},292:function(e,M,t){e.exports=t.p+"static/desktop-adb3e05ce09a5fb88fb6801ccfaf6e33.jpg"},293:function(e,M,t){e.exports=t.p+"static/main-8747ddc233b7765979cf0a664d434db7.png"},294:function(e,M,t){e.exports=t.p+"static/main2-7709f6c00b3e1951e98db48d371abfe4.jpg"},295:function(e,M,t){e.exports=t.p+"static/mobile-30239124286dc710d2e9a57bc1699c26.jpg"},296:function(e,M,t){e.exports=t.p+"static/desktop-30559706c97b83bb145fa911dacdd4b6.jpg"},297:function(e,M,t){e.exports=t.p+"static/main2-f50b406430e9ec34b6f6a21ba4fcfcec.png"},298:function(e,M,t){e.exports=t.p+"static/mobile-79671b842384b4e4cf001974e8fad4e5.jpg"},299:function(e,M,t){e.exports=t.p+"static/desktop-8090add7c8447c0be3f026ab35b705e5.jpg"},300:function(e,M,t){e.exports=t.p+"static/main-60bb0cab49d3d8cae1b06bc85b40e0c9.png"},301:function(e,M,t){e.exports=t.p+"static/mobile-51f83a967496574ccb0c134efffa1aff.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-78dd26f68bc1548a4803.js.map