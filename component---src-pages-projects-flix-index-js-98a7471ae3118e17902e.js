(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{237:function(e,a,t){"use strict";t.r(a);var n=t(349),c=t(0),r=t.n(c),l=t(254),i=t(251),s=t(252),o=t(253),m=t(350),u=t(351),d=t(352),p=t(353);a.default=function(){var e=n.data.projectsJson,a={name:"Seperation of concerns",path:m},t={name:"Flix Mockup",path:u},c={row1:[{name:"List Screen",path:d}],row2:[{name:"Movie Screen",path:p}]};return r.a.createElement(l.a,{project:e},r.a.createElement(i.a,{heading:"Approach"},r.a.createElement("p",null,"The project was built across two milestones. The first of which was building the server-side REST API. This was built on NodeJS using Express to streamline the build process. Because this app is a prototybe requiring limited data retirval a MongoDb database was selected and easily integrated into the Express App through Mongoose.")),r.a.createElement(o.a,{image:a},r.a.createElement("h3",null,"Server Side"),r.a.createElement("p",null,"As this was the first server side application, to ensure a strong foundation and adherence to best practices I spent a significant amount of time researching best practices for structuring server side code such as Express routing, and the management of controllers and services. By dividing the application into individual elements that handled particular concerns such as the routes, controllers and services the application became much more scalable and easy to maintain. This clean structure resulted in an easy to use and highly scalable API.")),r.a.createElement(o.a,{image:t,reverse:!0},r.a.createElement("h3",null,"Client Side"),r.a.createElement("p",null,"The second part of the project was to build the client side user interface that interacts with the API. I initially jumped straight into the project but soon discovered that this led to a poor code structure which was very difficult to maintain. Early on in the project I decided to restructure the code off wireframes. The result was a much slicker user interface that was also much easier to maintain.")),r.a.createElement(i.a,{heading:"The Result"},r.a.createElement("p",null,"A full-stack web application with a clean dark UI. The application features user authentication, a movie list view, movie details view and a user page.")),r.a.createElement(s.a,{images:c}))}},242:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(70),l=t.n(r);t.d(a,"a",function(){return l.a}),t.d(a,"b",function(){return r.withPrefix});t(244),t(9).default.enqueue,c.a.createContext({})},244:function(e,a,t){var n;e.exports=(n=t(247))&&n.default||n},245:function(e,a,t){"use strict";var n=t(246),c=t(0),r=t.n(c),l=t(256),i=t.n(l);function s(e){var a=e.description,t=e.lang,c=e.meta,l=e.title,s=n.data.site,o=a||s.siteMetadata.description;return r.a.createElement(i.a,{htmlAttributes:{lang:t},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:l},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:o}].concat(c)})}s.defaultProps={lang:"en",meta:[],description:""},a.a=s},246:function(e){e.exports={data:{site:{siteMetadata:{title:"James Coates",description:"Full Stack Web Developer",author:"James Coates"}}}}},247:function(e,a,t){"use strict";t.r(a);t(23);var n=t(0),c=t.n(n),r=t(98);a.default=function(e){var a=e.location,t=e.pageResources;return t?c.a.createElement(r.a,Object.assign({location:a,pageResources:t},t.json)):null}},248:function(e,a,t){e.exports=t.p+"static/Coates-James-Resume-0bc2348e76c695d03c41101967352d8a.pdf"},250:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(245),l=t(242),i=t(241),s=t(243),o=t(257),m=t.n(o),u=(t(248),function(e){var a=e.menuActive,t=e.setMenuActive,n=e.contactActive,r=e.setContactActive;return c.a.createElement("header",{className:m.a.container+" "+(a?"fixed":null)},c.a.createElement(l.a,{to:"/"},c.a.createElement("h1",{className:m.a.logo},"James Coates")),c.a.createElement("div",{className:m.a.nav},c.a.createElement("div",{className:m.a.links},c.a.createElement(l.a,{to:"/#about"},"About"),c.a.createElement(l.a,{to:"/#portfolio"},"Portfolio"),c.a.createElement("button",{onClick:function(){return r(!n)},type:"button"},"Contact")),c.a.createElement("div",{className:m.a.social},c.a.createElement("a",{href:"https://twitter.com/_JamesCoates",target:"blank"},c.a.createElement(i.a,{icon:s.c})),c.a.createElement("a",{href:"https://github.com/James-Coates",target:"blank"},c.a.createElement(i.a,{icon:s.a})),c.a.createElement("a",{href:"https://medium.com/@jamescoates192",target:"blank"},c.a.createElement(i.a,{icon:s.b})),c.a.createElement("a",{href:Object(l.b)("/Coates-James-Resume.pdf"),className:"btn btn-secondary",target:"blank"},"Resume"))),c.a.createElement("div",{className:m.a.menu+" "+(a?m.a.active:null),onClick:function(){return t(!a)}},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null)))}),d=t(258),p=t.n(d),E=function(e){var a=e.menuActive,t=e.setMenuActive,n=e.contactActive,r=e.setContactActive;return c.a.createElement("div",{className:(a?"show":"")+" "+p.a.wrapper},c.a.createElement("div",{className:p.a.links},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(l.a,{to:"/",onClick:function(){return t(!a)}},"Home")),c.a.createElement("li",null,c.a.createElement(l.a,{to:"/#about",onClick:function(){return t(!a)}},"About")),c.a.createElement("li",null,c.a.createElement(l.a,{to:"/#portfolio",onClick:function(){return t(!a)}},"Portfolio")),c.a.createElement("li",null,c.a.createElement("button",{type:"button",onClick:function(){return r(!n)}},"Contact")))),c.a.createElement("div",{className:p.a.social},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"",target:"blank"},c.a.createElement(i.a,{icon:s.c}))),c.a.createElement("li",null,c.a.createElement("a",{href:"",target:"blank"},c.a.createElement(i.a,{icon:s.a}))),c.a.createElement("li",null,c.a.createElement("a",{href:"",target:"blank"},c.a.createElement(i.a,{icon:s.b}))))))},f=t(255),v=t(259),h=t.n(v),b=t(260),g=t.n(b),A=function(e){var a=Object(n.useState)(""),t=a[0],r=a[1],l=Object(n.useState)(""),i=l[0],s=l[1],o=Object(n.useState)(""),m=o[0],u=o[1],d=Object(n.useState)(!1),p=(d[0],d[1]);return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(t),console.log(m);var a={ses_address:"james.coates@me.com",send_to:"James Coates <james.coates@me.com>",subject:"Email from jamescoates.me",name:t,reply_to:i,message:m};h.a.post("https://mjxz0fdn8i.execute-api.us-east-1.amazonaws.com/dev/portfolio-mailer",a).then(function(e){r(""),s(""),u(""),p(!0),console.log(e)}).catch(function(e){return console.log(e)})}},c.a.createElement("div",{className:g.a.input},c.a.createElement("input",{className:"input-text",name:"name",id:"name",value:t,required:!0,onChange:function(e){return r(e.target.value)}}),c.a.createElement("label",{className:t?g.a.filled:"",htmlFor:"name"},"Name")),c.a.createElement("div",{className:g.a.input},c.a.createElement("input",{className:"input-text",name:"reply_to",id:"replyTo",value:i,required:!0,onChange:function(e){return s(e.target.value)}}),c.a.createElement("label",{className:i?g.a.filled:"",htmlFor:"replyTo"},"Email")),c.a.createElement("div",{className:g.a.input},c.a.createElement("textarea",{className:"input-text",name:"message",id:"message",value:m,required:!0,onChange:function(e){return u(e.target.value)}}),c.a.createElement("label",{className:m?g.a.filled:"",htmlFor:"message"},"Your message...")),c.a.createElement("button",{className:"btn",type:"submit"},"Submit"))},N=t(261),w=t.n(N),x=function(e){var a=e.contactActive,t=e.setContactActive;return c.a.createElement("div",{className:w.a.wrapper+" "+(a?w.a.active:""),id:"contact"},c.a.createElement("button",{className:w.a.nav,onClick:function(){t(!a)},type:"button"},c.a.createElement(i.a,{icon:f.b})),c.a.createElement("div",{className:w.a.greet},c.a.createElement("div",{className:w.a.content},c.a.createElement("h2",{className:w.a.heading},"Contact"),c.a.createElement("p",null,"Any questions, work inquiries or anything else really, please don’t hesitate to get in touch using this form."),c.a.createElement("p",null,"I’m currently open to new projects, freelance work and full time positions."))),c.a.createElement("div",{className:w.a.form},c.a.createElement(A,null)))},k=t(262),j=t.n(k),y=function(e){e.contactActive,e.setContactActive;return c.a.createElement("footer",{className:j.a.wrapper},c.a.createElement("div",{className:j.a.container},c.a.createElement("div",{className:j.a.tm},"© 2019 | Made with love by James"),c.a.createElement("div",{className:j.a.social},c.a.createElement("a",{className:j.a.twitter,href:"https://twitter.com/_JamesCoates",target:"blank"},c.a.createElement(i.a,{icon:s.c})),c.a.createElement("a",{className:j.a.github,href:"https://github.com/James-Coates",target:"blank"},c.a.createElement(i.a,{icon:s.a})),c.a.createElement("a",{className:j.a.medium,href:"https://medium.com/@jamescoates192",target:"blank"},c.a.createElement(i.a,{icon:s.b}))),c.a.createElement("div",{className:j.a.email},c.a.createElement("p",null,c.a.createElement("a",{href:"mailto:james.coates@me.com"},"james.coates@me.com")))))};t(263),a.a=function(e){var a=e.children,t=Object(n.useState)(!1),l=t[0],i=t[1],s=Object(n.useState)(!1),o=s[0],m=s[1];return c.a.createElement("main",{className:l||o?"fixed":""},c.a.createElement(r.a,{title:"Home"}),c.a.createElement(u,{menuActive:l,setMenuActive:i,contactActive:o,setContactActive:m}),c.a.createElement(E,{menuActive:l,setMenuActive:i,contactActive:o,setContactActive:m}),c.a.createElement(x,{contactActive:o,setContactActive:m}),a,c.a.createElement(y,{contactActive:o,setContactActive:m}))}},251:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(270),l=t.n(r);a.a=function(e){var a=e.heading,t=e.children;return c.a.createElement("div",{className:l.a.wrapper},c.a.createElement("div",{className:l.a.container},c.a.createElement("div",{className:l.a.content},c.a.createElement("h1",{className:l.a.heading},a),t)))}},252:function(e,a,t){"use strict";t(32);var n=t(0),c=t.n(n),r=t(271),l=t.n(r);a.a=function(e){var a=e.images;return c.a.createElement("div",{className:l.a.wrapper},c.a.createElement("div",{className:l.a.container},c.a.createElement("div",{className:l.a.row},a.row1.map(function(e){return c.a.createElement("div",{key:e.name},c.a.createElement("img",{src:e.path,alt:e.name}))})),a.row2?c.a.createElement("div",{className:l.a.row},a.row2.map(function(e){return c.a.createElement("div",{key:e.name},c.a.createElement("img",{src:e.path,alt:e.name}))})):null))}},253:function(e,a,t){"use strict";t(32);var n=t(0),c=t.n(n),r=t(272),l=t.n(r);a.a=function(e){var a=e.reverse,t=e.image,n=e.video,r=e.children;return c.a.createElement("div",{className:l.a.wrapper},c.a.createElement("div",{className:l.a.container+" "+(a?"reverse":"")},c.a.createElement("div",{className:l.a.text},c.a.createElement("div",null,r)),c.a.createElement("div",{className:l.a.image},n?c.a.createElement("video",{loop:!0,autoPlay:!0,muted:!0,src:n}):c.a.createElement("img",{src:t.path,alt:t.name}))))}},254:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(250),l=(t(264),t(266)),i=t.n(l),s=function(e){var a=e.project,t=a.title,n=a.rubric,r=a.overview,l=a.created,s=a.tags,o=a.link,m=a.repo;return c.a.createElement("div",{className:i.a.wrapper},c.a.createElement("div",{className:i.a.container},c.a.createElement("div",{className:i.a.content},c.a.createElement("h1",{className:"heading-xl "+i.a.heading},t),c.a.createElement("h2",{className:i.a.rubric},n),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}}),c.a.createElement("div",{className:i.a.details},c.a.createElement("div",{className:i.a.year},c.a.createElement("p",null,c.a.createElement("span",{className:i.a.label},"Developed"),c.a.createElement("span",{className:i.a.detail},l))),c.a.createElement("div",{className:i.a.tags},c.a.createElement("p",null,c.a.createElement("span",{className:i.a.label},"Tags"),s.map(function(e){return c.a.createElement("span",{className:i.a.detail,key:e},e)})))),c.a.createElement("div",{className:i.a.buttonContainer},o?c.a.createElement("a",{href:o,className:"btn btn-secondary",target:"blank"},"View Site"):null,c.a.createElement("a",{href:m,className:"btn btn-secondary",target:"blank"},"View Repo")))))},o=t(265),m=t.n(o),u=t(267),d=t.n(u),p=function(e){var a=e.project.banner;return c.a.createElement("div",{className:d.a.wrapper},c.a.createElement("div",{className:d.a.container},c.a.createElement(m.a,{fluid:a.childImageSharp.fluid})))},E=t(268),f=t.n(E),v=function(e){var a=e.project,t=(a.banner,a.objective),n=a.tech,r=a.scope;return c.a.createElement("div",{className:f.a.wrapper},c.a.createElement("div",{className:f.a.container},c.a.createElement("div",{className:f.a.content},c.a.createElement("div",{className:f.a.objective},c.a.createElement("h3",{className:f.a.heading},"Objective"),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})),c.a.createElement("div",{className:f.a.details},c.a.createElement("div",null,c.a.createElement("p",null,"Tech Stack"),c.a.createElement("ul",null,n.map(function(e){return c.a.createElement("li",{key:e},e)}))),c.a.createElement("div",null,c.a.createElement("p",null,"Scope"),c.a.createElement("ul",null,r.map(function(e){return c.a.createElement("li",{key:e},e)})))))))},h=t(269),b=t.n(h);a.a=function(e){var a=e.children,t=e.project;return c.a.createElement(r.a,null,c.a.createElement(s,{project:t}),c.a.createElement(p,{project:t}),c.a.createElement(v,{project:t}),c.a.createElement("div",{className:b.a.wrapper},a))}},349:function(e){e.exports={data:{projectsJson:{id:"flix",title:"Flix",rubric:"Web App",overview:"<p>A prototype for movie database application providing users with access to information about different movies, directors and genres. The application includes a REST API built on NodeJS and a user interface developed using the React javascript framework.</p>",created:"Jul 2019",tags:["Web App","React","API"],banner:{publicURL:"/static/flix-banner-5b8172f20063f64dd6e07b2cca1551f9.png",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAACgElEQVQoz0WTSU+TURSGG4TOc0tHW0sZ2kJp6UApnflahgYkOJRYMBgT3BghEQE1xAQjUIlRTNyYKAtdGGOikRAX4sqt/0bj/vE2INzknPesnnvPe86VfVEVOBDxWZHlmTJBQxlnUxWnZojhcSRRuQdRu1NCU6hdonYlT0PpSAhNofeNYPCX0XdIyI4UeY6URbZVScwmPwpLkDZLAJlrAIU9jMrWh9EawGTtQmfrReuMonVF0Dn6sXkHMDjDaD25M+B9U5GSW8LsTtNqcOPzhchY7FicMdLlMOH6OtsxKy+rPjamc7yo9rJTDLO7PMvrB3VyqTRyVxZjZ+UYqPRLyLtGRUtDWOxdjJbGqPTHsWi0rD1MELqxyXzFz5XxcRarEh9TMvbiRt7Vc8z6jMg1NnQXimcvNIpk8leET0OiLR+lWEqoh2DExvKdIPbJdWoTAe7NjLA0d42jlQpvF6vsF8Lc7TbRompH5zsGGprAZjKcANuFTy5vHLk5RLAnRO9gB4ZABbs9KrzsJRGfoHJ5mXRlgZ6eNJYeMTSH8FN4aBRAUxOoPwFqPcO0adwEQ0lma3W6Ajkmq9eJREpsNV6x/+EQafQSM8MtFFJuLnYGeOJVc7Wvn3OeIurOMq0iToF6bwaV2cfjpZtMjRSIRnO8eb7H0u01/v75TfM0Hq2ye2uQlYUyX+fLsFNnd7qEzJkj7pVYtJb+A8tovVkM9gBSpoDT3Y1VrMboxBw5qcbh9580tp4yNTaG1x/EE8mzWa/xq7HBdnGcVWWab+oCP8QKngKb2pyW3DmMxlsQF+RRukQt/GnWmvNZNBcKmEUt2fNs6DK8b0vxqU3AlHkORDQ/yT/rNEx0zVMxpAAAAABJRU5ErkJggg==",aspectRatio:2,src:"/static/5b8172f20063f64dd6e07b2cca1551f9/b36f0/flix-banner.png",srcSet:"/static/5b8172f20063f64dd6e07b2cca1551f9/5f3f7/flix-banner.png 300w,\n/static/5b8172f20063f64dd6e07b2cca1551f9/5c74c/flix-banner.png 600w,\n/static/5b8172f20063f64dd6e07b2cca1551f9/b36f0/flix-banner.png 1200w,\n/static/5b8172f20063f64dd6e07b2cca1551f9/03059/flix-banner.png 1800w,\n/static/5b8172f20063f64dd6e07b2cca1551f9/18ae4/flix-banner.png 2400w",sizes:"(max-width: 1200px) 100vw, 1200px"}}},scope:["Web Development","Front End Application","API Integration"],objective:"<p>A full-stack movie database application with the server side providing a RESTful API featuring access to movie data as well as user authentication. The client-side is to provide a user-interface for accessing movie information as well as sign up and login screens amongst other additional features.</p>",solution:null,colorDark:"#0A1C43",tech:["react","node-dot-js","mongodb"],link:"https://flix-db.herokuapp.com/",repo:"https://github.com/James-Coates/flix",mobileOnly:null}}}},350:function(e,a,t){e.exports=t.p+"static/flix-approach-3aeeb34efef41719281f1b0c5b203116.png"},351:function(e,a,t){e.exports=t.p+"static/flix-mockup-4ed43d85509beb34c958fe864939bde5.png"},352:function(e,a,t){e.exports=t.p+"static/list-view-11522c9b11ca2e78591a03834172b7ba.png"},353:function(e,a,t){e.exports=t.p+"static/movie-view-10f0daa340701508b3f02f3315602386.png"}}]);
//# sourceMappingURL=component---src-pages-projects-flix-index-js-98a7471ae3118e17902e.js.map