(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{238:function(e,a,t){"use strict";t.r(a);var n=t(353),c=t(0),r=t.n(c),l=t(254),i=t(251),s=t(252),o=(t(272),t(253)),m=t(354),u=t(355),d=t(356),p=t(357);a.default=function(){var e=n.data.projectsJson,a={row1:[{name:"List Screen",path:m},{name:"Details Screen",path:u}],row2:[{name:"Desktop Screen",path:d}]};return r.a.createElement(l.a,{project:e},r.a.createElement(i.a,{heading:"Context"},r.a.createElement("p",null,"A ‘Pokedex’ app was ideal for meeting the objective of producing a list of data points from an external API. The PokeAPI provides access to a complete list of Pokemon within an easily accessible RESTful API. The interface which would have to be built into the application occurs over two separate fetch operations. One to retrieve the list of Pokemon and one retrieve detailed information once a Pokemon is selected. This data is fed into the user interface (UI) to build the two main screens.")),r.a.createElement(o.a,{reverse:!0,video:p},r.a.createElement("h3",null,"Mockup & User Flow"),r.a.createElement("p",null,"A mockup was built prior to building the (UI) to ensure the desired features were achieved. On loading the app, the full list of Pokemon is displayed to the user. The scrollable list would provide a search facility to filter Pokemon by name. A Pokemon can be selected to show a detailed view of the selected Pokemon. On larger screens it was planned to show both views on one screen with placeholder information shown before a Pokemon is selected.")),r.a.createElement(i.a,{heading:"The Result"},r.a.createElement("p",null,"A clean, simple and responsive user interface providing the user with a filterable list of Pokemon. The detailed view is shown on the right hand side for larger screens and within a modal for smaller screens.")),r.a.createElement(s.a,{images:a}))}},242:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(70),l=t.n(r);t.d(a,"a",function(){return l.a}),t.d(a,"b",function(){return r.withPrefix});t(244),t(9).default.enqueue,c.a.createContext({})},244:function(e,a,t){var n;e.exports=(n=t(247))&&n.default||n},245:function(e,a,t){"use strict";var n=t(246),c=t(0),r=t.n(c),l=t(256),i=t.n(l);function s(e){var a=e.description,t=e.lang,c=e.meta,l=e.title,s=n.data.site,o=a||s.siteMetadata.description;return r.a.createElement(i.a,{htmlAttributes:{lang:t},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:l},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:o}].concat(c)})}s.defaultProps={lang:"en",meta:[],description:""},a.a=s},246:function(e){e.exports={data:{site:{siteMetadata:{title:"James Coates",description:"Full Stack Web Developer",author:"James Coates"}}}}},247:function(e,a,t){"use strict";t.r(a);t(23);var n=t(0),c=t.n(n),r=t(98);a.default=function(e){var a=e.location,t=e.pageResources;return t?c.a.createElement(r.a,Object.assign({location:a,pageResources:t},t.json)):null}},248:function(e,a,t){e.exports=t.p+"static/Coates-James-Resume-0bc2348e76c695d03c41101967352d8a.pdf"},250:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(245),l=t(242),i=t(241),s=t(243),o=t(257),m=t.n(o),u=(t(248),function(e){var a=e.menuActive,t=e.setMenuActive,n=e.contactActive,r=e.setContactActive;return c.a.createElement("header",{className:m.a.container+" "+(a?"fixed":null)},c.a.createElement(l.a,{to:"/"},c.a.createElement("h1",{className:m.a.logo},"James Coates")),c.a.createElement("div",{className:m.a.nav},c.a.createElement("div",{className:m.a.links},c.a.createElement(l.a,{to:"/#about"},"About"),c.a.createElement(l.a,{to:"/#portfolio"},"Portfolio"),c.a.createElement("button",{onClick:function(){return r(!n)},type:"button"},"Contact")),c.a.createElement("div",{className:m.a.social},c.a.createElement("a",{href:"https://twitter.com/_JamesCoates",target:"blank"},c.a.createElement(i.a,{icon:s.c})),c.a.createElement("a",{href:"https://github.com/James-Coates",target:"blank"},c.a.createElement(i.a,{icon:s.a})),c.a.createElement("a",{href:"https://medium.com/@jamescoates192",target:"blank"},c.a.createElement(i.a,{icon:s.b})),c.a.createElement("a",{href:Object(l.b)("/Coates-James-Resume.pdf"),className:"btn btn-secondary",target:"blank"},"Resume"))),c.a.createElement("div",{className:m.a.menu+" "+(a?m.a.active:null),onClick:function(){return t(!a)}},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null)))}),d=t(258),p=t.n(d),E=function(e){var a=e.menuActive,t=e.setMenuActive,n=e.contactActive,r=e.setContactActive;return c.a.createElement("div",{className:(a?"show":"")+" "+p.a.wrapper},c.a.createElement("div",{className:p.a.links},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(l.a,{to:"/",onClick:function(){return t(!a)}},"Home")),c.a.createElement("li",null,c.a.createElement(l.a,{to:"/#about",onClick:function(){return t(!a)}},"About")),c.a.createElement("li",null,c.a.createElement(l.a,{to:"/#portfolio",onClick:function(){return t(!a)}},"Portfolio")),c.a.createElement("li",null,c.a.createElement("button",{type:"button",onClick:function(){return r(!n)}},"Contact")))),c.a.createElement("div",{className:p.a.social},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"",target:"blank"},c.a.createElement(i.a,{icon:s.c}))),c.a.createElement("li",null,c.a.createElement("a",{href:"",target:"blank"},c.a.createElement(i.a,{icon:s.a}))),c.a.createElement("li",null,c.a.createElement("a",{href:"",target:"blank"},c.a.createElement(i.a,{icon:s.b}))))))},v=t(255),f=t(259),b=t.n(f),h=t(260),g=t.n(h),w=function(e){var a=Object(n.useState)(""),t=a[0],r=a[1],l=Object(n.useState)(""),i=l[0],s=l[1],o=Object(n.useState)(""),m=o[0],u=o[1],d=Object(n.useState)(!1),p=(d[0],d[1]);return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(t),console.log(m);var a={ses_address:"james.coates@me.com",send_to:"James Coates <james.coates@me.com>",subject:"Email from jamescoates.me",name:t,reply_to:i,message:m};b.a.post("https://mjxz0fdn8i.execute-api.us-east-1.amazonaws.com/dev/portfolio-mailer",a).then(function(e){r(""),s(""),u(""),p(!0),console.log(e)}).catch(function(e){return console.log(e)})}},c.a.createElement("div",{className:g.a.input},c.a.createElement("input",{className:"input-text",name:"name",id:"name",value:t,required:!0,onChange:function(e){return r(e.target.value)}}),c.a.createElement("label",{className:t?g.a.filled:"",htmlFor:"name"},"Name")),c.a.createElement("div",{className:g.a.input},c.a.createElement("input",{className:"input-text",name:"reply_to",id:"replyTo",value:i,required:!0,onChange:function(e){return s(e.target.value)}}),c.a.createElement("label",{className:i?g.a.filled:"",htmlFor:"replyTo"},"Email")),c.a.createElement("div",{className:g.a.input},c.a.createElement("textarea",{className:"input-text",name:"message",id:"message",value:m,required:!0,onChange:function(e){return u(e.target.value)}}),c.a.createElement("label",{className:m?g.a.filled:"",htmlFor:"message"},"Your message...")),c.a.createElement("button",{className:"btn",type:"submit"},"Submit"))},A=t(261),N=t.n(A),k=function(e){var a=e.contactActive,t=e.setContactActive;return c.a.createElement("div",{className:N.a.wrapper+" "+(a?N.a.active:""),id:"contact"},c.a.createElement("button",{className:N.a.nav,onClick:function(){t(!a)},type:"button"},c.a.createElement(i.a,{icon:v.b})),c.a.createElement("div",{className:N.a.greet},c.a.createElement("div",{className:N.a.content},c.a.createElement("h2",{className:N.a.heading},"Contact"),c.a.createElement("p",null,"Any questions, work inquiries or anything else really, please don’t hesitate to get in touch using this form."),c.a.createElement("p",null,"I’m currently open to new projects, freelance work and full time positions."))),c.a.createElement("div",{className:N.a.form},c.a.createElement(w,null)))},C=t(262),x=t.n(C),y=function(e){e.contactActive,e.setContactActive;return c.a.createElement("footer",{className:x.a.wrapper},c.a.createElement("div",{className:x.a.container},c.a.createElement("div",{className:x.a.tm},"© 2019 | Made with love by James"),c.a.createElement("div",{className:x.a.social},c.a.createElement("a",{className:x.a.twitter,href:"https://twitter.com/_JamesCoates",target:"blank"},c.a.createElement(i.a,{icon:s.c})),c.a.createElement("a",{className:x.a.github,href:"https://github.com/James-Coates",target:"blank"},c.a.createElement(i.a,{icon:s.a})),c.a.createElement("a",{className:x.a.medium,href:"https://medium.com/@jamescoates192",target:"blank"},c.a.createElement(i.a,{icon:s.b}))),c.a.createElement("div",{className:x.a.email},c.a.createElement("p",null,c.a.createElement("a",{href:"mailto:james.coates@me.com"},"james.coates@me.com")))))};a.a=function(e){var a=e.children,t=Object(n.useState)(!1),l=t[0],i=t[1],s=Object(n.useState)(!1),o=s[0],m=s[1];return c.a.createElement("main",{className:l||o?"fixed":""},c.a.createElement(r.a,{title:"Home"}),c.a.createElement(u,{menuActive:l,setMenuActive:i,contactActive:o,setContactActive:m}),c.a.createElement(E,{menuActive:l,setMenuActive:i,contactActive:o,setContactActive:m}),c.a.createElement(k,{contactActive:o,setContactActive:m}),a,c.a.createElement(y,{contactActive:o,setContactActive:m}))}},251:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(269),l=t.n(r);a.a=function(e){var a=e.heading,t=e.children;return c.a.createElement("div",{className:l.a.wrapper},c.a.createElement("div",{className:l.a.container},c.a.createElement("div",{className:l.a.content},c.a.createElement("h1",{className:l.a.heading},a),t)))}},252:function(e,a,t){"use strict";t(32);var n=t(0),c=t.n(n),r=t(270),l=t.n(r);a.a=function(e){var a=e.images;return c.a.createElement("div",{className:l.a.wrapper},c.a.createElement("div",{className:l.a.container},c.a.createElement("div",{className:l.a.row},a.row1.map(function(e){return c.a.createElement("div",{key:e.name},c.a.createElement("img",{src:e.path,alt:e.name}))})),a.row2?c.a.createElement("div",{className:l.a.row},a.row2.map(function(e){return c.a.createElement("div",{key:e.name},c.a.createElement("img",{src:e.path,alt:e.name}))})):null))}},253:function(e,a,t){"use strict";t(32);var n=t(0),c=t.n(n),r=t(271),l=t.n(r);a.a=function(e){var a=e.reverse,t=e.image,n=e.video,r=e.children;return c.a.createElement("div",{className:l.a.wrapper},c.a.createElement("div",{className:l.a.container+" "+(a?"reverse":"")},c.a.createElement("div",{className:l.a.text},c.a.createElement("div",null,r)),c.a.createElement("div",{className:l.a.image},n?c.a.createElement("video",{loop:!0,autoPlay:!0,muted:!0,src:n}):c.a.createElement("img",{src:t.path,alt:t.name}))))}},254:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(250),l=(t(263),t(265)),i=t.n(l),s=function(e){var a=e.project,t=a.title,n=a.rubric,r=a.overview,l=a.created,s=a.tags,o=a.link,m=a.repo;return c.a.createElement("div",{className:i.a.wrapper},c.a.createElement("div",{className:i.a.container},c.a.createElement("div",{className:i.a.content},c.a.createElement("h1",{className:"heading-xl "+i.a.heading},t),c.a.createElement("h2",{className:i.a.rubric},n),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}}),c.a.createElement("div",{className:i.a.details},c.a.createElement("div",{className:i.a.year},c.a.createElement("p",null,c.a.createElement("span",{className:i.a.label},"Developed"),c.a.createElement("span",{className:i.a.detail},l))),c.a.createElement("div",{className:i.a.tags},c.a.createElement("p",null,c.a.createElement("span",{className:i.a.label},"Tags"),s.map(function(e){return c.a.createElement("span",{className:i.a.detail,key:e},e)})))),c.a.createElement("div",{className:i.a.buttonContainer},o?c.a.createElement("a",{href:o,className:"btn btn-secondary",target:"blank"},"View Site"):null,c.a.createElement("a",{href:m,className:"btn btn-secondary",target:"blank"},"View Repo")))))},o=t(264),m=t.n(o),u=t(266),d=t.n(u),p=function(e){var a=e.project.banner;return c.a.createElement("div",{className:d.a.wrapper},c.a.createElement("div",{className:d.a.container},c.a.createElement(m.a,{fluid:a.childImageSharp.fluid})))},E=t(267),v=t.n(E),f=function(e){var a=e.project,t=(a.banner,a.objective),n=a.tech,r=a.scope;return c.a.createElement("div",{className:v.a.wrapper},c.a.createElement("div",{className:v.a.container},c.a.createElement("div",{className:v.a.content},c.a.createElement("div",{className:v.a.objective},c.a.createElement("h3",{className:v.a.heading},"Objective"),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})),c.a.createElement("div",{className:v.a.details},c.a.createElement("div",null,c.a.createElement("p",null,"Tech Stack"),c.a.createElement("ul",null,n.map(function(e){return c.a.createElement("li",{key:e},e)}))),c.a.createElement("div",null,c.a.createElement("p",null,"Scope"),c.a.createElement("ul",null,r.map(function(e){return c.a.createElement("li",{key:e},e)})))))))},b=t(268),h=t.n(b);a.a=function(e){var a=e.children,t=e.project;return c.a.createElement(r.a,null,c.a.createElement(s,{project:t}),c.a.createElement(p,{project:t}),c.a.createElement(f,{project:t}),c.a.createElement("div",{className:h.a.wrapper},a))}},272:function(e,a,t){"use strict";t(32);var n=t(0),c=t.n(n),r=t(274),l=t.n(r);a.a=function(e){var a=e.image,t=e.children;return c.a.createElement("div",{className:l.a.wrapper},c.a.createElement("div",{className:l.a.container},c.a.createElement("div",{className:l.a.text},t),c.a.createElement("div",{className:l.a.scrollImage},c.a.createElement("img",{src:a.path,alt:a.name}))))}},353:function(e){e.exports={data:{projectsJson:{id:"pokedex",title:"Pokedex",rubric:"Web App",overview:"<p>A Javascript web application showcasing the integration of an external API. Data sourced from the PokeAPI is displayed in a filterable list to enable detailed viewing of Pokemon.</p>",created:"Apr 2019",tags:["Javascript","HTML","SASS"],banner:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABDklEQVQoz42S6ZKCMBCEfYpw5CBAEgwiulr7/o/WO4kEI5S6P6Zyf9Xdk0NZK6QqKhkrzVkpXs9orGhUy7ys6e5yP9UhX+SPudSwzmPwE7Rqwfljv6tFhEbgCv4CDMrazmK+3gl4RtP00K0hWFAnwHLYJ4W53TAad4xA40ao1sLaI9gGEG1/UphgQaVsOoynGeN0hdIGundQpDZluxXwVWF42JOq+XKHHca4byhXIVs628PeZPgMmsUmSMznC6b5hlo0ENQgYz0q/g+FedCsUlAE0yUnuz1+br/QnXt02gwxjq31veUMGr6Gpo4Wi/XBn+ApzwAPX6rYNeeNwmiZ1MlKrvD04WverPNik3uqPxxvCjAKN3E7AAAAAElFTkSuQmCC",aspectRatio:2,src:"/static/65cd840b59c5a46f7237757572b8643a/b36f0/pokedex-banner.png",srcSet:"/static/65cd840b59c5a46f7237757572b8643a/5f3f7/pokedex-banner.png 300w,\n/static/65cd840b59c5a46f7237757572b8643a/5c74c/pokedex-banner.png 600w,\n/static/65cd840b59c5a46f7237757572b8643a/b36f0/pokedex-banner.png 1200w,\n/static/65cd840b59c5a46f7237757572b8643a/03059/pokedex-banner.png 1800w,\n/static/65cd840b59c5a46f7237757572b8643a/18ae4/pokedex-banner.png 2400w",sizes:"(max-width: 1200px) 100vw, 1200px"}}},scope:["Web Development","Front End Application","API Integration"],objective:"<p>A web application built using only HTML, CSS, and Vanilla JavaScript that interfaces with an external API to produce a responsive view of data points.</p>",solution:null,colorDark:"#161A1E",tech:["Javascript","HTML","SASS"],link:"https://james-coates.github.io/cf-pokedex/",repo:"https://github.com/James-Coates/cf-pokedex",mobileOnly:null}}}},354:function(e,a,t){e.exports=t.p+"static/mobile1-dbed6fe29da04d2254aa4f7edf16b5e9.png"},355:function(e,a,t){e.exports=t.p+"static/mobile2-8cf3ab50068df24de1757639c96dbbdd.png"},356:function(e,a,t){e.exports=t.p+"static/desktop-bfb42ce754d0110c66461c898696ba98.png"},357:function(e,a,t){e.exports=t.p+"static/mockup-2265cca1bc4bca600bd04e9e2ee8b88b.mp4"}}]);
//# sourceMappingURL=component---src-pages-projects-pokedex-index-js-0850bf632d3ef9f709d8.js.map