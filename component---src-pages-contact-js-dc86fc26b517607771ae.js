(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{199:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),M=a(209),r=a(207),u=a(239),s=a.n(u),l=function(){var e=Object(n.useState)("james.coates@me.com")[0],t=Object(n.useState)("James Coates <james.coates@me.com>")[0],a=Object(n.useState)("Email from jamescoates.me")[0],M=Object(n.useState)(""),r=M[0],u=M[1],l=Object(n.useState)(""),i=l[0],o=l[1],N=Object(n.useState)(""),j=N[0],m=N[1],L=Object(n.useState)(!1),g=L[0],y=L[1];return c.a.createElement("form",{className:"contact-form",onSubmit:function(n){n.preventDefault(),console.log(r),console.log(j);var c={ses_address:e,send_to:t,subject:a,name:r,reply_to:i,message:j};s.a.post("https://mjxz0fdn8i.execute-api.us-east-1.amazonaws.com/dev/portfolio-mailer",c).then(function(e){return u(""),o(""),m(""),void y(!0)}).catch(function(e){return console.log(e)})}},c.a.createElement("input",{type:"text",name:"name",onChange:function(e){return u(e.target.value)},placeholder:"Name",value:r,required:!0}),c.a.createElement("input",{type:"email",name:"reply_to",onChange:function(e){return o(e.target.value)},placeholder:"Email",value:i,required:!0}),c.a.createElement("textarea",{name:"message",placeholder:"Your message",onChange:function(e){return m(e.target.value)},value:j,required:!0}),c.a.createElement("button",{className:"btn",type:"submit"},"Send Message"),g?c.a.createElement("div",{className:"alert success"},"Success! Message sent"):"")};t.default=function(){return c.a.createElement(M.a,{wrapper:"wrapper wrapper-fluid"},c.a.createElement(r.a,{title:"Contact"}),c.a.createElement("div",{className:"container text-center"},c.a.createElement("div",{className:"head"},c.a.createElement("h1",{className:"page-title"},"Contact"),c.a.createElement("p",{className:"page-lead"},"Hey there! Please use the form below to get in touch."),c.a.createElement(l,null))))}},200:function(e,t,a){"use strict";var n=a(0),c=a.n(n),M=a(66),r=a.n(M);a.d(t,"a",function(){return r.a});a(201),a(9).default.enqueue,c.a.createContext({})},201:function(e,t,a){var n;e.exports=(n=a(204))&&n.default||n},202:function(e){e.exports={data:{site:{siteMetadata:{title:"James Coates"}}}}},203:function(e,t){},204:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),c=a.n(n),M=a(91);t.default=function(e){var t=e.location,a=e.pageResources;return a?c.a.createElement(M.a,Object.assign({location:t,pageResources:a},a.json)):null}},205:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+R2l0SHViIGljb248L3RpdGxlPjxwYXRoIGQ9Ik0xMiAuMjk3Yy02LjYzIDAtMTIgNS4zNzMtMTIgMTIgMCA1LjMwMyAzLjQzOCA5LjggOC4yMDUgMTEuMzg1LjYuMTEzLjgyLS4yNTguODItLjU3NyAwLS4yODUtLjAxLTEuMDQtLjAxNS0yLjA0LTMuMzM4LjcyNC00LjA0Mi0xLjYxLTQuMDQyLTEuNjFDNC40MjIgMTguMDcgMy42MzMgMTcuNyAzLjYzMyAxNy43Yy0xLjA4Ny0uNzQ0LjA4NC0uNzI5LjA4NC0uNzI5IDEuMjA1LjA4NCAxLjgzOCAxLjIzNiAxLjgzOCAxLjIzNiAxLjA3IDEuODM1IDIuODA5IDEuMzA1IDMuNDk1Ljk5OC4xMDgtLjc3Ni40MTctMS4zMDUuNzYtMS42MDUtMi42NjUtLjMtNS40NjYtMS4zMzItNS40NjYtNS45MyAwLTEuMzEuNDY1LTIuMzggMS4yMzUtMy4yMi0uMTM1LS4zMDMtLjU0LTEuNTIzLjEwNS0zLjE3NiAwIDAgMS4wMDUtLjMyMiAzLjMgMS4yMy45Ni0uMjY3IDEuOTgtLjM5OSAzLS40MDUgMS4wMi4wMDYgMi4wNC4xMzggMyAuNDA1IDIuMjgtMS41NTIgMy4yODUtMS4yMyAzLjI4NS0xLjIzLjY0NSAxLjY1My4yNCAyLjg3My4xMiAzLjE3Ni43NjUuODQgMS4yMyAxLjkxIDEuMjMgMy4yMiAwIDQuNjEtMi44MDUgNS42MjUtNS40NzUgNS45Mi40Mi4zNi44MSAxLjA5Ni44MSAyLjIyIDAgMS42MDYtLjAxNSAyLjg5Ni0uMDE1IDMuMjg2IDAgLjMxNS4yMS42OS44MjUuNTdDMjAuNTY1IDIyLjA5MiAyNCAxNy41OTIgMjQgMTIuMjk3YzAtNi42MjctNS4zNzMtMTItMTItMTIiLz48L3N2Zz4="},206:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+VHdpdHRlciBpY29uPC90aXRsZT48cGF0aCBkPSJNMjMuOTU0IDQuNTY5Yy0uODg1LjM4OS0xLjgzLjY1NC0yLjgyNS43NzUgMS4wMTQtLjYxMSAxLjc5NC0xLjU3NCAyLjE2My0yLjcyMy0uOTUxLjU1NS0yLjAwNS45NTktMy4xMjcgMS4xODQtLjg5Ni0uOTU5LTIuMTczLTEuNTU5LTMuNTkxLTEuNTU5LTIuNzE3IDAtNC45MiAyLjIwMy00LjkyIDQuOTE3IDAgLjM5LjA0NS43NjUuMTI3IDEuMTI0QzcuNjkxIDguMDk0IDQuMDY2IDYuMTMgMS42NCAzLjE2MWMtLjQyNy43MjItLjY2NiAxLjU2MS0uNjY2IDIuNDc1IDAgMS43MS44NyAzLjIxMyAyLjE4OCA0LjA5Ni0uODA3LS4wMjYtMS41NjYtLjI0OC0yLjIyOC0uNjE2di4wNjFjMCAyLjM4NSAxLjY5MyA0LjM3NCAzLjk0NiA0LjgyNy0uNDEzLjExMS0uODQ5LjE3MS0xLjI5Ni4xNzEtLjMxNCAwLS42MTUtLjAzLS45MTYtLjA4Ni42MzEgMS45NTMgMi40NDUgMy4zNzcgNC42MDQgMy40MTctMS42OCAxLjMxOS0zLjgwOSAyLjEwNS02LjEwMiAyLjEwNS0uMzkgMC0uNzc5LS4wMjMtMS4xNy0uMDY3IDIuMTg5IDEuMzk0IDQuNzY4IDIuMjA5IDcuNTU3IDIuMjA5IDkuMDU0IDAgMTMuOTk5LTcuNDk2IDEzLjk5OS0xMy45ODYgMC0uMjA5IDAtLjQyLS4wMTUtLjYzLjk2MS0uNjg5IDEuOC0xLjU2IDIuNDYtMi41NDhsLS4wNDctLjAyeiIvPjwvc3ZnPg=="},207:function(e,t,a){"use strict";var n=a(208),c=a(0),M=a.n(c),r=a(218),u=a.n(r);function s(e){var t=e.description,a=e.lang,c=e.meta,r=e.title,s=n.data.site,l=t||s.siteMetadata.description;return M.a.createElement(u.a,{htmlAttributes:{lang:a},title:r,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:r},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:l}].concat(c)})}s.defaultProps={lang:"en",meta:[],description:""},t.a=s},208:function(e){e.exports={data:{site:{siteMetadata:{title:"James Coates",description:"Full Stack Web Developer",author:"James Coates"}}}}},209:function(e,t,a){"use strict";var n=a(202),c=a(0),M=a.n(c),r=(a(203),a(200)),u=a(211),s=a.n(u),l=(a(212),a(213)),i=a.n(l),o=function(){return M.a.createElement("div",{className:i.a.wrapper},M.a.createElement("input",{type:"checkbox",className:i.a.toggler}),M.a.createElement("div",{className:i.a.hamburger},M.a.createElement("div",null)),M.a.createElement("div",{className:i.a.menu},M.a.createElement("div",null,M.a.createElement("div",null,M.a.createElement("ul",null,M.a.createElement("li",{className:i.a.item},M.a.createElement(r.a,{to:"/work",className:i.a.link},"Work")),M.a.createElement("li",{className:i.a.item},M.a.createElement(r.a,{to:"/about",className:i.a.link},"About")),M.a.createElement("li",{className:i.a.item},M.a.createElement(r.a,{to:"/contact",className:i.a.link},"Contact")))))))},N=function(e){e.siteTitle;return M.a.createElement("header",{className:s.a.header+" container"},M.a.createElement("nav",{className:s.a.nav},M.a.createElement("div",{className:s.a.nav__logo},M.a.createElement(r.a,{to:"/"},"James Coates")),M.a.createElement("div",{className:s.a.nav__links},M.a.createElement(r.a,{to:"/work",className:s.a.nav__link},"Work"),M.a.createElement(r.a,{to:"/about",className:s.a.nav__link},"About"),M.a.createElement(r.a,{to:"/contact",className:s.a.nav__link},"Contact")),M.a.createElement(o,null)))};N.defaultProps={siteTitle:""};var j=N,m=(a(214),a(215)),L=a.n(m),g=a(205),y=a.n(g),A=a(206),I=a.n(A),E=function(){return M.a.createElement("footer",{className:L.a.footer+" container"},M.a.createElement("div",{className:L.a.tm},"© 2019 James Coates"),M.a.createElement("div",{className:L.a.social},M.a.createElement("a",{href:"https://github.com/James-Coates",target:"blank"},M.a.createElement("img",{src:y.a,alt:""})),M.a.createElement("a",{href:"https://twitter.com/_JamesCoates",target:"blank"},M.a.createElement("img",{src:I.a,alt:""}))))};a(216),a(217),t.a=function(e){var t=e.children,a=n.data;return M.a.createElement("div",{className:"wrapper"},M.a.createElement("div",{className:"content"},M.a.createElement(j,{siteTitle:a.site.siteMetadata.title}),M.a.createElement("main",{className:"main"},t)),M.a.createElement(E,null))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-dc86fc26b517607771ae.js.map