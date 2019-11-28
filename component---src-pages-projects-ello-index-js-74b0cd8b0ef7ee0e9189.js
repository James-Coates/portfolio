(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{236:function(e,t,a){"use strict";a.r(t);var n=a(345),c=a(0),r=a.n(c),l=a(254),s=a(251),i=(a(252),a(273)),o=a(253),m=a(346),u=a(347),p=a(348);t.default=function(){var e=n.data.projectsJson,t={name:"Test Scenario",path:m},a={name:"Jest & React",path:u},c={name:"Ello Screen Preview",path:p};return r.a.createElement(l.a,{project:e},r.a.createElement(s.a,{heading:"Approach"},r.a.createElement("p",null,"A test-driven development approach was used throughout the project. Before putting any functionality to code user stories were collated and several test scenarios were created.")),r.a.createElement(o.a,{reverse:!0,image:t},r.a.createElement("h3",null,"Behaviour Driven Development"),r.a.createElement("p",null,"By focusing on the behaviour of a wider range of stakeholders test scenarios can be created making it easy for both developers and non-developers to understand product requirements."),r.a.createElement("p",null,"Scenarios were written as succinct as possible using the ‘Gherkin’ syntax.")),r.a.createElement(o.a,{image:a},r.a.createElement("h3",null,"Unit, Integration & End-to-end Testing"),r.a.createElement("p",null,"Testing during development was mainly carried out using Jest. This included unit and integration testing. Once the majority of features were completed end-to-end testing was carried out using cucumber.")),r.a.createElement(s.a,{heading:"The Result"},r.a.createElement("p",null,"The app requires authorisation through Meetup to access events. Once this has been granted the application fetches upcoming events to display to the user.")),r.a.createElement(i.a,{image:c},r.a.createElement("h3",null,"Upcoming Events Display"),r.a.createElement("p",null,"At the top of the screen, below the landing section the user can search for events by city. Once a city is selected a list of events is displayed. Additionally at the top of the screen the user can view the number of upcoming events over the next seven days.")))}},242:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(70),l=a.n(r);a.d(t,"a",function(){return l.a}),a.d(t,"b",function(){return r.withPrefix});a(244),a(9).default.enqueue,c.a.createContext({})},244:function(e,t,a){var n;e.exports=(n=a(247))&&n.default||n},245:function(e,t,a){"use strict";var n=a(246),c=a(0),r=a.n(c),l=a(256),s=a.n(l);function i(e){var t=e.description,a=e.lang,c=e.meta,l=e.title,i=n.data.site,o=t||i.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:l},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:o}].concat(c)})}i.defaultProps={lang:"en",meta:[],description:""},t.a=i},246:function(e){e.exports={data:{site:{siteMetadata:{title:"James Coates",description:"Full Stack Web Developer",author:"James Coates"}}}}},247:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),c=a.n(n),r=a(98);t.default=function(e){var t=e.location,a=e.pageResources;return a?c.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null}},248:function(e,t,a){e.exports=a.p+"static/Coates-James-Resume-0bc2348e76c695d03c41101967352d8a.pdf"},250:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(245),l=a(242),s=a(241),i=a(243),o=a(257),m=a.n(o),u=(a(248),function(e){var t=e.menuActive,a=e.setMenuActive,n=e.contactActive,r=e.setContactActive;return c.a.createElement("header",{className:m.a.container+" "+(t?"fixed":null)},c.a.createElement(l.a,{to:"/"},c.a.createElement("h1",{className:m.a.logo},"James Coates")),c.a.createElement("div",{className:m.a.nav},c.a.createElement("div",{className:m.a.links},c.a.createElement(l.a,{to:"/#about"},"About"),c.a.createElement(l.a,{to:"/#portfolio"},"Portfolio"),c.a.createElement("button",{onClick:function(){return r(!n)},type:"button"},"Contact")),c.a.createElement("div",{className:m.a.social},c.a.createElement("a",{href:"https://twitter.com/_JamesCoates",target:"blank"},c.a.createElement(s.a,{icon:i.c})),c.a.createElement("a",{href:"https://github.com/James-Coates",target:"blank"},c.a.createElement(s.a,{icon:i.a})),c.a.createElement("a",{href:"https://medium.com/@jamescoates192",target:"blank"},c.a.createElement(s.a,{icon:i.b})),c.a.createElement("a",{href:Object(l.b)("/Coates-James-Resume.pdf"),className:"btn btn-secondary",target:"blank"},"Resume"))),c.a.createElement("div",{className:m.a.menu+" "+(t?m.a.active:null),onClick:function(){return a(!t)}},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null)))}),p=a(258),d=a.n(p),v=function(e){var t=e.menuActive,a=e.setMenuActive,n=e.contactActive,r=e.setContactActive;return c.a.createElement("div",{className:(t?"show":"")+" "+d.a.wrapper},c.a.createElement("div",{className:d.a.links},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(l.a,{to:"/",onClick:function(){return a(!t)}},"Home")),c.a.createElement("li",null,c.a.createElement(l.a,{to:"/#about",onClick:function(){return a(!t)}},"About")),c.a.createElement("li",null,c.a.createElement(l.a,{to:"/#portfolio",onClick:function(){return a(!t)}},"Portfolio")),c.a.createElement("li",null,c.a.createElement("button",{type:"button",onClick:function(){return r(!n)}},"Contact")))),c.a.createElement("div",{className:d.a.social},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"",target:"blank"},c.a.createElement(s.a,{icon:i.c}))),c.a.createElement("li",null,c.a.createElement("a",{href:"",target:"blank"},c.a.createElement(s.a,{icon:i.a}))),c.a.createElement("li",null,c.a.createElement("a",{href:"",target:"blank"},c.a.createElement(s.a,{icon:i.b}))))))},E=a(255),f=a(259),h=a.n(f),b=a(260),g=a.n(b),N=function(e){var t=Object(n.useState)(""),a=t[0],r=t[1],l=Object(n.useState)(""),s=l[0],i=l[1],o=Object(n.useState)(""),m=o[0],u=o[1],p=Object(n.useState)(!1),d=(p[0],p[1]);return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(a),console.log(m);var t={ses_address:"james.coates@me.com",send_to:"James Coates <james.coates@me.com>",subject:"Email from jamescoates.me",name:a,reply_to:s,message:m};h.a.post("https://mjxz0fdn8i.execute-api.us-east-1.amazonaws.com/dev/portfolio-mailer",t).then(function(e){r(""),i(""),u(""),d(!0),console.log(e)}).catch(function(e){return console.log(e)})}},c.a.createElement("div",{className:g.a.input},c.a.createElement("input",{className:"input-text",name:"name",id:"name",value:a,required:!0,onChange:function(e){return r(e.target.value)}}),c.a.createElement("label",{className:a?g.a.filled:"",htmlFor:"name"},"Name")),c.a.createElement("div",{className:g.a.input},c.a.createElement("input",{className:"input-text",name:"reply_to",id:"replyTo",value:s,required:!0,onChange:function(e){return i(e.target.value)}}),c.a.createElement("label",{className:s?g.a.filled:"",htmlFor:"replyTo"},"Email")),c.a.createElement("div",{className:g.a.input},c.a.createElement("textarea",{className:"input-text",name:"message",id:"message",value:m,required:!0,onChange:function(e){return u(e.target.value)}}),c.a.createElement("label",{className:m?g.a.filled:"",htmlFor:"message"},"Your message...")),c.a.createElement("button",{className:"btn",type:"submit"},"Submit"))},A=a(261),w=a.n(A),C=function(e){var t=e.contactActive,a=e.setContactActive;return c.a.createElement("div",{className:w.a.wrapper+" "+(t?w.a.active:""),id:"contact"},c.a.createElement("button",{className:w.a.nav,onClick:function(){a(!t)},type:"button"},c.a.createElement(s.a,{icon:E.b})),c.a.createElement("div",{className:w.a.greet},c.a.createElement("div",{className:w.a.content},c.a.createElement("h2",{className:w.a.heading},"Contact"),c.a.createElement("p",null,"Any questions, work inquiries or anything else really, please don’t hesitate to get in touch using this form."),c.a.createElement("p",null,"I’m currently open to new projects, freelance work and full time positions."))),c.a.createElement("div",{className:w.a.form},c.a.createElement(N,null)))},y=a(262),j=a.n(y),k=function(e){e.contactActive,e.setContactActive;return c.a.createElement("footer",{className:j.a.wrapper},c.a.createElement("div",{className:j.a.container},c.a.createElement("div",{className:j.a.tm},"© 2019 | Made with love by James"),c.a.createElement("div",{className:j.a.social},c.a.createElement("a",{className:j.a.twitter,href:"https://twitter.com/_JamesCoates",target:"blank"},c.a.createElement(s.a,{icon:i.c})),c.a.createElement("a",{className:j.a.github,href:"https://github.com/James-Coates",target:"blank"},c.a.createElement(s.a,{icon:i.a})),c.a.createElement("a",{className:j.a.medium,href:"https://medium.com/@jamescoates192",target:"blank"},c.a.createElement(s.a,{icon:i.b}))),c.a.createElement("div",{className:j.a.email},c.a.createElement("p",null,c.a.createElement("a",{href:"mailto:james.coates@me.com"},"james.coates@me.com")))))};a(263),t.a=function(e){var t=e.children,a=Object(n.useState)(!1),l=a[0],s=a[1],i=Object(n.useState)(!1),o=i[0],m=i[1];return c.a.createElement("main",{className:l||o?"fixed":""},c.a.createElement(r.a,{title:"Home"}),c.a.createElement(u,{menuActive:l,setMenuActive:s,contactActive:o,setContactActive:m}),c.a.createElement(v,{menuActive:l,setMenuActive:s,contactActive:o,setContactActive:m}),c.a.createElement(C,{contactActive:o,setContactActive:m}),t,c.a.createElement(k,{contactActive:o,setContactActive:m}))}},251:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(270),l=a.n(r);t.a=function(e){var t=e.heading,a=e.children;return c.a.createElement("div",{className:l.a.wrapper},c.a.createElement("div",{className:l.a.container},c.a.createElement("div",{className:l.a.content},c.a.createElement("h1",{className:l.a.heading},t),a)))}},252:function(e,t,a){"use strict";a(32);var n=a(0),c=a.n(n),r=a(271),l=a.n(r);t.a=function(e){var t=e.images;return c.a.createElement("div",{className:l.a.wrapper},c.a.createElement("div",{className:l.a.container},c.a.createElement("div",{className:l.a.row},t.row1.map(function(e){return c.a.createElement("div",{key:e.name},c.a.createElement("img",{src:e.path,alt:e.name}))})),t.row2?c.a.createElement("div",{className:l.a.row},t.row2.map(function(e){return c.a.createElement("div",{key:e.name},c.a.createElement("img",{src:e.path,alt:e.name}))})):null))}},253:function(e,t,a){"use strict";a(32);var n=a(0),c=a.n(n),r=a(272),l=a.n(r);t.a=function(e){var t=e.reverse,a=e.image,n=e.video,r=e.children;return c.a.createElement("div",{className:l.a.wrapper},c.a.createElement("div",{className:l.a.container+" "+(t?"reverse":"")},c.a.createElement("div",{className:l.a.text},c.a.createElement("div",null,r)),c.a.createElement("div",{className:l.a.image},n?c.a.createElement("video",{loop:!0,autoPlay:!0,muted:!0,src:n}):c.a.createElement("img",{src:a.path,alt:a.name}))))}},254:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(250),l=(a(264),a(266)),s=a.n(l),i=function(e){var t=e.project,a=t.title,n=t.rubric,r=t.overview,l=t.created,i=t.tags,o=t.link,m=t.repo;return c.a.createElement("div",{className:s.a.wrapper},c.a.createElement("div",{className:s.a.container},c.a.createElement("div",{className:s.a.content},c.a.createElement("h1",{className:"heading-xl "+s.a.heading},a),c.a.createElement("h2",{className:s.a.rubric},n),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}}),c.a.createElement("div",{className:s.a.details},c.a.createElement("div",{className:s.a.year},c.a.createElement("p",null,c.a.createElement("span",{className:s.a.label},"Developed"),c.a.createElement("span",{className:s.a.detail},l))),c.a.createElement("div",{className:s.a.tags},c.a.createElement("p",null,c.a.createElement("span",{className:s.a.label},"Tags"),i.map(function(e){return c.a.createElement("span",{className:s.a.detail,key:e},e)})))),c.a.createElement("div",{className:s.a.buttonContainer},o?c.a.createElement("a",{href:o,className:"btn btn-secondary",target:"blank"},"View Site"):null,c.a.createElement("a",{href:m,className:"btn btn-secondary",target:"blank"},"View Repo")))))},o=a(265),m=a.n(o),u=a(267),p=a.n(u),d=function(e){var t=e.project.banner;return c.a.createElement("div",{className:p.a.wrapper},c.a.createElement("div",{className:p.a.container},c.a.createElement(m.a,{fluid:t.childImageSharp.fluid})))},v=a(268),E=a.n(v),f=function(e){var t=e.project,a=(t.banner,t.objective),n=t.tech,r=t.scope;return c.a.createElement("div",{className:E.a.wrapper},c.a.createElement("div",{className:E.a.container},c.a.createElement("div",{className:E.a.content},c.a.createElement("div",{className:E.a.objective},c.a.createElement("h3",{className:E.a.heading},"Objective"),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})),c.a.createElement("div",{className:E.a.details},c.a.createElement("div",null,c.a.createElement("p",null,"Tech Stack"),c.a.createElement("ul",null,n.map(function(e){return c.a.createElement("li",{key:e},e)}))),c.a.createElement("div",null,c.a.createElement("p",null,"Scope"),c.a.createElement("ul",null,r.map(function(e){return c.a.createElement("li",{key:e},e)})))))))},h=a(269),b=a.n(h);t.a=function(e){var t=e.children,a=e.project;return c.a.createElement(r.a,null,c.a.createElement(i,{project:a}),c.a.createElement(d,{project:a}),c.a.createElement(f,{project:a}),c.a.createElement("div",{className:b.a.wrapper},t))}},273:function(e,t,a){"use strict";a(32);var n=a(0),c=a.n(n),r=a(275),l=a.n(r);t.a=function(e){var t=e.image,a=e.children;return c.a.createElement("div",{className:l.a.wrapper},c.a.createElement("div",{className:l.a.container},c.a.createElement("div",{className:l.a.text},a),c.a.createElement("div",{className:l.a.scrollImage},c.a.createElement("img",{src:t.path,alt:t.name}))))}},345:function(e){e.exports={data:{projectsJson:{id:"ello",title:"ello*",rubric:"Web App",overview:"<p>A serverless, progressive web application (PWA) that fetches upcoming events for a selected city from the Meetup API.</p>",created:"Aug 2019",tags:["Web App","React","PWA","TDD"],banner:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAACAklEQVQoz22Q228SURDGN2kXWC67hfQmVojFhYWK1WCp0AdNiMYmbRrdB6GxS2LERuNLn4z/lYK+CK3FhssSaky8tD5bEdD/4XPOHqha+/Cdycz55nfmjCB5o3D6YpC8GhxjYTgU9Y8ot1OUJ+fgGY9ZNckbgcR8Qy9F1ssZUQhOOiRKhhf8AS4X1e1KGAF1Cf7zixA9F2CXVdg8quXj4oP8A2SJQwkPDDHYlAjsYxrBImTm0SaHocws4Gw0g4B2w3qMeVnP6cDBhO7xiwjMXoM/mMRMKIWpwIJldE/Ekbx6C/eMLWQfPEcquYwRmtTlOwV4/GWaRp6ex3XjKWbTq5AJokxdsuru6StYu53Fs40tZNY2kb5TsCZ0ngS6aCImyadZjQw+OZ+BT03TvujLgx+wFcTTOu7rT5BaeYjETYP64gSL0L2GIUcYtQUxKgYxIp6jJr470RmC6Fb5Hv8S26PnTAIToSUo/sTxnlkvYzCWMJd7hChp0XiM3bc1mM19NOptNBv7ME+o2Whjr1rHTrmK2p6JVvM9ypV3uJwrILa+CcYS8mYdG606CtUdfOgc4aDXxaduBx873/H1V9/SQb9n5Yc/+6QevpDnc+8HDvtdtI++Ib+7DaPVQN6sQVjfroApW3kD/VUJd0svuYovoFPU/8uL5CsOapS/LiFXKWPI+Q07KXCOPwBoNgAAAABJRU5ErkJggg==",aspectRatio:2,src:"/static/53cccf6a5f6ceab3581e0c17940ef584/b36f0/ello-banner.png",srcSet:"/static/53cccf6a5f6ceab3581e0c17940ef584/5f3f7/ello-banner.png 300w,\n/static/53cccf6a5f6ceab3581e0c17940ef584/5c74c/ello-banner.png 600w,\n/static/53cccf6a5f6ceab3581e0c17940ef584/b36f0/ello-banner.png 1200w,\n/static/53cccf6a5f6ceab3581e0c17940ef584/03059/ello-banner.png 1800w,\n/static/53cccf6a5f6ceab3581e0c17940ef584/18ae4/ello-banner.png 2400w",sizes:"(max-width: 1200px) 100vw, 1200px"}}},scope:["Web Development","Front-End"],objective:"<p>To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Meetup API to fetch upcoming events for a selected city.</p>",solution:"<p>A test driven development approach was followed to build this prototype which interacts with the Meetup API using a serverless framework.</p><p>The web app provides a filterable list of events that can be selected for further details.</p>",colorDark:"#0B132B",tech:["react","amazonaws"],link:"https://james-coates.github.io/meetup/",repo:"https://github.com/James-Coates/meetup",mobileOnly:null}}}},346:function(e,t,a){e.exports=a.p+"static/testscenario-b84be8122c21523f30538ea3d55f1abd.png"},347:function(e,t,a){e.exports=a.p+"static/jest-ff9f8fd7edbf55eb9e7b0c1c72be66d4.png"},348:function(e,t,a){e.exports=a.p+"static/screen-46d22ab38a4270b02b18847634dafa5c.png"}}]);
//# sourceMappingURL=component---src-pages-projects-ello-index-js-74b0cd8b0ef7ee0e9189.js.map