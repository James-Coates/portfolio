(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{194:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(204),s=(t(305),t(306)),l=t.n(s),r=function(){return c.a.createElement("div",{className:l.a.container},c.a.createElement("h1",{className:l.a.heading},"Work"),c.a.createElement("p",{className:l.a.sub},"Some things I’ve built."))},m=t(307),A=(t(205),t(195)),o=t(206),d=t.n(o),u=t(308),g=t.n(u),b=function(e){var a=e.project,t=a.title,n=a.tags,i=a.colorDark,s=a.image,l=a.slug;return c.a.createElement("div",{className:g.a.container,style:{backgroundColor:i}},c.a.createElement(A.a,{className:g.a.link,to:"/projects/"+l},c.a.createElement("div",{className:g.a.imageContainer},c.a.createElement(d.a,{fluid:s.childImageSharp.fluid,alt:t,className:g.a.image})),c.a.createElement("div",{className:g.a.body},c.a.createElement("div",{className:g.a.tags},n.map(function(e){return c.a.createElement("p",{key:e},e)})),c.a.createElement("h1",{className:g.a.title},t),c.a.createElement("button",{className:"btn btn-primary-dark "+g.a.btn},"Find Out More"))))},p=t(309),f=t.n(p),E=function(){var e=m.data.allProjectsJson.edges.map(function(e){return e.node});return c.a.createElement("div",{className:f.a.container},e.map(function(e){return c.a.createElement(b,{project:e,key:e.id})}))};a.default=function(){return c.a.createElement(i.a,null,c.a.createElement(r,null),c.a.createElement(E,null))}},195:function(e,a,t){"use strict";var n=t(0),c=t.n(n),i=t(66),s=t.n(i);t.d(a,"a",function(){return s.a});t(197),t(9).default.enqueue,c.a.createContext({})},197:function(e,a,t){var n;e.exports=(n=t(203))&&n.default||n},199:function(e,a,t){"use strict";var n=t(200),c=t(0),i=t.n(c),s=t(198),l=t.n(s);function r(e){var a=e.description,t=e.lang,c=e.meta,s=e.title,r=n.data.site,m=a||r.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:t},title:s,titleTemplate:"%s | "+r.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:s},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:r.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:m}].concat(c)})}r.defaultProps={lang:"en",meta:[],description:""},a.a=r},200:function(e){e.exports={data:{site:{siteMetadata:{title:"James Coates",description:"Full Stack Web Developer",author:"James Coates"}}}}},203:function(e,a,t){"use strict";t.r(a);t(23);var n=t(0),c=t.n(n),i=t(95);a.default=function(e){var a=e.location,t=e.pageResources;return t?c.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json)):null}},204:function(e,a,t){"use strict";var n=t(0),c=t.n(n),i=t(198),s=t.n(i),l=t(199),r=t(195),m=t(209),A=t.n(m),o=function(e){var a=e.menuActive,t=e.setMenuActive;return c.a.createElement("header",{className:A.a.container},c.a.createElement(r.a,{to:"/"},c.a.createElement("h1",{className:A.a.logo},"JAMES COATES")),c.a.createElement("div",{className:A.a.menu+" "+(a?A.a.active:null),onClick:function(){return t(!a)}},c.a.createElement("div",null),c.a.createElement("div",null)))},d=(t(39),t(201)),u=t(202),g=t(210),b=t.n(g),p=function(e){var a=e.menuActive,t=e.setMenuActive;return c.a.createElement("div",{className:b.a.wrapper+" "+(a?b.a.menuActive:null)},c.a.createElement("div",{className:b.a.col1},c.a.createElement("div",{className:b.a.nav},c.a.createElement(r.a,{to:"/projects",onClick:function(){return t()}},c.a.createElement("p",{className:b.a.menuItem+" "+(a?b.a.itemActive:null)},"About")),c.a.createElement(r.a,{to:"/projects",onClick:function(){return t()}},c.a.createElement("p",{className:b.a.menuItem+" "+(a?b.a.itemActive:null)},"Work")),c.a.createElement(r.a,{to:"/#contact"},c.a.createElement("p",{className:b.a.menuItem+" "+(a?b.a.itemActive:null)},"Contact"))),c.a.createElement("div",{className:b.a.social},c.a.createElement("a",{href:"https://twitter.com/_JamesCoates",target:"blank"},c.a.createElement(d.a,{icon:u.c})),c.a.createElement("a",{href:"https://github.com/James-Coates",target:"blank"},c.a.createElement(d.a,{icon:u.a})),c.a.createElement("a",{href:"https://medium.com/@jamescoates192",target:"blank"},c.a.createElement(d.a,{icon:u.b})))),c.a.createElement("div",{className:b.a.col2},c.a.createElement("h1",{className:b.a.name},"James Coates")))},f=t(211),E=t.n(f),h=t(212),w=t.n(h),v=function(){var e=Object(n.useState)(""),a=e[0],t=e[1],i=Object(n.useState)(""),s=i[0],l=i[1],r=Object(n.useState)(""),m=r[0],A=r[1],o=Object(n.useState)(!1),d=(o[0],o[1]);return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(a),console.log(m);var n={ses_address:"james.coates@me.com",send_to:"James Coates <james.coates@me.com>",subject:"Email from jamescoates.me",name:a,reply_to:s,message:m};E.a.post("https://mjxz0fdn8i.execute-api.us-east-1.amazonaws.com/dev/portfolio-mailer",n).then(function(e){t(""),l(""),A(""),d(!0),console.log(e)}).catch(function(e){return console.log(e)})}},c.a.createElement("label",{htmlFor:"name",className:"input-container"},c.a.createElement("input",{className:"input-text",name:"name",id:"name",value:a,required:!0,onChange:function(e){return t(e.target.value)}}),c.a.createElement("div",{className:"input-label "+(a?"input-filled":"")},"Name")),c.a.createElement("label",{htmlFor:"replyTo",className:"input-container"},c.a.createElement("input",{className:"input-text",name:"reply_to",id:"replyTo",value:s,required:!0,onChange:function(e){return l(e.target.value)}}),c.a.createElement("div",{className:"input-label "+(s?"input-filled":"")},"Email")),c.a.createElement("label",{htmlFor:"message",className:"input-container"},c.a.createElement("div",{className:"message-container"},c.a.createElement("textarea",{className:"input-text",name:"message",id:"email",value:m,required:!0,onChange:function(e){return A(e.target.value)}}),c.a.createElement("div",{className:"input-label "+(m?"input-filled":"")},"Your message..."))),c.a.createElement("button",{className:"btn btn-primary-light "+w.a.btn,type:"submit"},"Submit"))},N=t(213),C=t.n(N),S=function(){return c.a.createElement("footer",{className:C.a.wrapper},c.a.createElement("div",{className:C.a.container},c.a.createElement("div",{className:C.a.col1},c.a.createElement("div",{className:C.a.head},c.a.createElement("h1",{className:C.a.header},"Get in touch"),c.a.createElement("a",{href:"mailto:james.coates@me.com"},c.a.createElement("p",{className:C.a.email},"james.coates@me.com"))),c.a.createElement("div",{className:C.a.formContainer,id:"contact"},c.a.createElement(v,null))),c.a.createElement("div",{className:C.a.col2},c.a.createElement("div",{className:C.a.social},c.a.createElement("a",{href:"https://twitter.com/_JamesCoates"},c.a.createElement(d.a,{icon:u.c})),c.a.createElement("a",{href:"https://github.com/James-Coates"},c.a.createElement(d.a,{icon:u.a})),c.a.createElement("a",{href:"https://medium.com/@jamescoates192"},c.a.createElement(d.a,{icon:u.b}))))))};a.a=function(e){var a=e.children,t=Object(n.useState)(!1),i=t[0],r=t[1];return c.a.createElement("main",null,c.a.createElement(l.a,{title:"Home"}),c.a.createElement(s.a,null,c.a.createElement("link",{href:"https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css",rel:"stylesheet"})),c.a.createElement(o,{menuActive:i,setMenuActive:r}),c.a.createElement(p,{menuActive:i,setMenuActive:r}),a,c.a.createElement(S,null))}},305:function(e,a,t){"use strict";t(214)("sub",function(e){return function(){return e(this,"sub","","")}})},307:function(e){e.exports={data:{allProjectsJson:{edges:[{node:{id:"convo",title:"CONVO",slug:"convo",tags:["Android/iOS","React Native"],colorDark:"#6B26CA",image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAEfUlEQVQ4y21US2wbVRSdJEgFgWCBECsEQkIsWABSFywQCzZs6AY2SIDUXalUVBAUUIFuEKFFqlICrtJ8iJPGjoNjR2liO3biJI7jfB1/kjjj7/j/GY/j78z4MzPvMjNuG5xwpad79WbOeee+e+/DMNEAEFY4pruwU7btdj4pOnmfiMewdDbTFYlG5W/xRBwjxHXGEAiP40SGeDpJZt7JFwtXS9XKRLlSSVEFygAAHYd5Dg5knyEp7H9NVPhMpUYrawyTYxt1BKcsk8u+K/23urH1wktvvNUtxdF4RMYe+vGzhFW6+jLTAmhyCFrNJhIEgaNphstTFCcgBGyzsck2mBmWpblypTQhYY6pUpd4Fub0HJxWB7IXkGAVmk0IBoNcMplEJJkDhqUhlU4JRzgOeCgKRIoCD07Apmv/bQnj9gW6z6irNetPSJ5pNb4vgwCRSISjKApVagwiYmm0uLIBStUMrxjVcSMaY2tIbQTVtLFfwvzap+yx2lax/SPfCWGoSMqnHFGZN90lUmi2WiDwPNrx4Eils4B2fgXmFh1gtG6gYdUDofePcRhVz5IA/PNygXyBzu6AVkv24Tu/dYGAXA/rwMfTOZgxrYHeaINZsx0W7U6kM9qQQjnDiWrhb83MZQmnGFH1EOUahgcDbcIIlZbusUdOu1HvfUjIMSyLFla3QTu3Ave1BhgcVcPAmA7G9VZeoVDCYP+fO49EbW1tYrMmy4lKmqW72772nlRVXkwZCTza9eJocOIBfHL5Gly8dAVu31GgK9dvoqlhpWCfmgCnbel9eQCs5pPilKolrEbX5LhYI8/RDB1i2AakMqTg9QXRrbsT8OFnX8CNb74F6z9j6PrPP6F7/UPcuk4L6vtquYWuXfqy27axhXl9YnHIAomVq2XsyE/IaSfSWUWWLEIgFOViiST67pfbcOHjT2Hgh69hWz8J4YAPRaIpxHMcGCzLdN+9kVcknHnV1lmcXJ6UCcWpuJCnjiFH5oVsNofGNHqk1uiBCPqh2WyIdQNpkqTFFY7LMKSc+FHC/TUw2lNv0I8nBUukMnKczuefi8WT2Vy+AGS+IOD+IIrHk/I48rwgk9VqNNQbrFCuFcGwYA30jQ+dk7Am60qbsFAsyGlr9Rb5csNETGVz7IH3MFAPhcKCfckM5XIJhcMRsJiWkVPs0VA0hnhg+UqVhuVV+0cSbsfp6ulI2x+MyBshIv655zAEeDAGe94jcDtWkEY1DmrNJCLCCVFdA1UrNNre8DTsa7tgWbbLPXP+/MUTMrJQwEqV4qP5fjYYIabxQEiHE7EP9uyW30sZAsoVhnO7fLx+2swN3lXB2PAULJhWYXbBuiViOuf6uHTcfiSgdWbeUzH89eDeGkyO62F8WA3m2TkwzRsajnX7ksfrumpdd7wo/aebN3ZWOpnJtsnFO73Rq8H2fdFum0ErPx4h76YucrADof1Nq3t37Svrsvm1/2JvKYbPvovZXBpz7XvbqtJJ8U79WKlebzc9B0/5fO5XT2N2d3d7lh2bsrK5hUXsX7wXdoNBhscbAAAAAElFTkSuQmCC",aspectRatio:1,src:"/static/d2411a5b028d2782f2ea23895a827657/af144/main.png",srcSet:"/static/d2411a5b028d2782f2ea23895a827657/7c0ed/main.png 200w,\n/static/d2411a5b028d2782f2ea23895a827657/647de/main.png 400w,\n/static/d2411a5b028d2782f2ea23895a827657/af144/main.png 800w,\n/static/d2411a5b028d2782f2ea23895a827657/e9c7b/main.png 1000w",sizes:"(max-width: 800px) 100vw, 800px"}}}}},{node:{id:"ello",title:"ello*",slug:"ello",tags:["Web App","React","PWA","TDD"],colorDark:"#0B132B",image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAADj0lEQVQ4y11UW28bRRTeuH2tRJAgSKXwkqptUFNwwfGu1944dryOvVfvelPn0iRrE+9lbG9i10nBMigCBUQrUfEAqhBF/QGIH1AekKpKIASPfeINgVT1AQkJSGzPYXZjW8BIZ49m5nzffHPOnKVo2aF88wejeRPUvwYtVilGcc+Q/YvE02ypdYH633j2zEzgFyOLQ5DsBj6mNUK+j6+99RxTqLcJyZdk7xGjOE9YxT2OSs4gwpd7UdH6jtVqGRJK4mdO+Zizk6/99xRGdgJlbGnvhWh263FcQRAv7gKr1YFWa/CqiCClI/ji3S7om20I5+1jnS/8JsX5Wz5uPSeHEuHUSCG5suIG6iIF715O3gIpq/0VVes9oqrP687AXLUwpzfxh4d3cH6t1Ztdqva72x7cLZsdH3ffRaFKvjgmDNRx8vZURK3/LqUUkLmlAa3W8azg4gMH4V8/a0NGrOCXkwhfTLsQVlDvK2sXHjqNr30sUBL1+M7Nk1qQz4m60n5uPmlAYXIS61NTeH7BwEyuAsL1Jnx6+x6YlRa8yDkQF2wQtCo+tNvQtPf+PJ2sTPv4hF6bGCkMEhtZblf5hArK9KX+tZfOYSVrgHe9DLH1fWi/9z2slzuQ5C0oqSY25BLOdD/uSQefAClSN8j/sndqpPC0v0DyZXPGDhQWxN7i9AxuLSN4sFmD5Wt14LfawOQtWJUdYKIqXJmTQHzndl94+xbQov1Dp//LuB5jhTHVVWmlBqnVnUH6zRsY6S7+cRVBVShD+OoSJCULdNGGCCG78koKL9o3MX/jA5jLbR+xRuP8uB6josQK6CwtOX9k1nchsdHEqIjwXa+DpY0WHDb3gdMQiLILXHoNZi+nyNzCgtMd0KIDBKuN0+fLjOu1oDCM6n6+tLkP9Ir3957h4m/MHXBXGvijg/dxkrzDeRXBgmBChM5CPLeJ80atx+oekC5yh4RB+qi4eqIyrVefT2juz1ypCdlspdcIq31JqA7IGo7JDqYVhKPZDUxzKqbzFTwno2NWawAhsseEoz6OFb1AZTRTPhdV0beJnAXpyypEyTXJw/dVAEO6hsmZwGQ3gJEsHCNz3wjH60PCUEDIbXVOSI2d0KgdM7xpKtzKT6SXnxKyI9KeR/TQExv4B5A5JviDIF2KOzESR7HpEjVXbA6v745JAcAPfIYEnqcVZ4YQXSAkl4i9QdbmiU2P/0xDsn8ADoScVJnLA60AAAAASUVORK5CYII=",aspectRatio:1.3300492610837438,src:"/static/5813f21e3bb65645c8cad0b94511be1c/af144/main.png",srcSet:"/static/5813f21e3bb65645c8cad0b94511be1c/7c0ed/main.png 200w,\n/static/5813f21e3bb65645c8cad0b94511be1c/647de/main.png 400w,\n/static/5813f21e3bb65645c8cad0b94511be1c/af144/main.png 800w,\n/static/5813f21e3bb65645c8cad0b94511be1c/728bb/main.png 1080w",sizes:"(max-width: 800px) 100vw, 800px"}}}}},{node:{id:"flix",title:"FLIX",slug:"flix",tags:["Web App","React","API"],colorDark:"#0A1C43",image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACkklEQVQ4y62VTWxMURTHX3y1qLZTIiGxQSJiISGE0o+ZznSeagjio4kNG0pMtEVoFyQikWhDsUAsSoQFEkl9hkREKiGNhRVj3pvpvOm8mWnfmGlZ6czfuefNV6mhySxO7n33nvM7H/fc+6T+RY3zP1c4H7stzgRJMkfwD8nVTQiGYEliEi/dDHWOY4wkSYJJirAZEwzBkgRdLCil9UkSpMb0PJ/k6jFUsARQfGQ3aJyMpKGCIVhpYF6YIvZFehOsq9kI8Sew3JkfWJazXubMjEqq9mkghUtGJQ54plZBmVFryuw6KDNtPGbAxVbSs9OanXV4bVo1Uinz6ZtAginkPXzuNozePhhP3kFrOAa95TK0xuOmEcFD7deh1bdAb7sK3XUJHqkSQzd7ocmtUCgY91yZgBUyVPLsXbILo0YcgR0d0Gwu+JbuRvT5e+hHLrKhiCj64gOCh7rgrzyA+BcNke77iH10Q53XAJWiFqxxwLhXR6TzHoLNnRyV8egtggcvsHel2AbjwWuO2i0tR/hsD34AGFi1D54pVRD1N1NmoA3exTsRV4PsVUSlzKrj1AebzjDAI62H8fAN732VVmL41jN8/5nA4J7TtLeOgHIOsMgK37ImjES+ca080lo+oOG7LxF91Y/QyWvwb2xmB8HDXZxB7JOCwLZTGI3EMLB6P5fETFkcCkXjXbgVoY4b8C7YwuELsG/FXoTP38FQz1M6nBMcjd/qgn60G5qzlR3rbVcQ2N5OZalOHUqmbexm8Usc49qEo5XWUE1r2EgpqqXvDVCm10C1yKaNmJO+u9xsm2xjk8L4RiZnlk1syHPR+DzKZhZCx9z7y035/UpNcN3+9+oV9HEo7PNVqAd2JP3AFvoX8Asdepy/EmQMXAAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/8747ddc233b7765979cf0a664d434db7/af144/main.png",srcSet:"/static/8747ddc233b7765979cf0a664d434db7/7c0ed/main.png 200w,\n/static/8747ddc233b7765979cf0a664d434db7/647de/main.png 400w,\n/static/8747ddc233b7765979cf0a664d434db7/af144/main.png 800w,\n/static/8747ddc233b7765979cf0a664d434db7/728bb/main.png 1080w",sizes:"(max-width: 800px) 100vw, 800px"}}}}},{node:{id:"todo",title:"Todo App",slug:"to-do",tags:["Web App","Vue"],colorDark:"#252525",image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAADAklEQVQ4y2NgwAJmpdgy4AMxvk4MRIHwqikMEWGhjCB2cEJmWF5p1QZFDd0VsipaK7WNzFfkFFeu9Y5KcQHJe/oFMQbl1OE3MDSvAc5u7uw/++LZ0/+rVq78v3jxov+7du38/+f37/+ltS2bQfL/f31kcgqKx29gcHYtjMnaNWHqyR/fv/8Hgp9//vz5DaR//Pv3739NS9c6sIH//zPa+YTjNzAktx5uYHvv5DM/f3z///37jz8/fvz49+vXrz8/f/78X9nUuR1moGNQHAEvIxvYN+XML6AB3759AzrwD8ilf74DXVzR2AE30CUgCrdhHnoaDIEFrTAuW0ff5OPfv38DuvD7H6Dr/v/9+/fPly9fgC7sgHmZiUHJgSHZywG3oZERsYwwNjAMj4LC8MuXr2CX/f79G+zlirpmsAuvnDzCBKINleUYSiK9MQ3zNtAC049XTmZXEeKfnZ2T9w3kT6Bh/75+/Qry+j+ggf9CQ0L/qwhxB4DUmqgpMoPoghB3TAPtVBUYoF5hFmZhXhSfkAQy7x8Uw8AfDw+v/1L8PC87c+JkQOp9LQzAvqpNDEY10ElHDc6W4GRfHh+fCDLg75lTp/9VlZb9b66v/zd36uT/Tk4uv3jZOf67GeusBanlZGJmSgv2YsgLckU10FxJFuZCBlZg7srIyn0NMvH82XN/LQwN/wED7B87ECtJiP8V5OH7r6cg83ZlXYY4SE9hiBujnaYCprd1FBRYQLQAM3NqTnYOyLwfQAxK1P9Onjz9X11V7R8rI8M/LVmp34ZKMv9jnM3BCTHAQp9ZWlgA1TBrDWUGcSERJijXKjQi5sadew/+X7l24//FS5f/P3/x8l9+Xv5/kCekhAR++5vr/o92NFsJUmyvpcSEM+nw8wuDJflUzaREFLT8xKQV09nY2H+BDOLi4PjHyMj4n4mR8a+yhMh/czX5u4ZKUtwg9cbKMqgG2etrMYhxsIHZYgiXggEnK/MGZpBBDAy/gdx/IAyM2r9cbKz/eTjY7UBqeDjYwHoAKHB0buD3oHAAAAAASUVORK5CYII=",aspectRatio:1.25,src:"/static/60bb0cab49d3d8cae1b06bc85b40e0c9/af144/main.png",srcSet:"/static/60bb0cab49d3d8cae1b06bc85b40e0c9/7c0ed/main.png 200w,\n/static/60bb0cab49d3d8cae1b06bc85b40e0c9/647de/main.png 400w,\n/static/60bb0cab49d3d8cae1b06bc85b40e0c9/af144/main.png 800w,\n/static/60bb0cab49d3d8cae1b06bc85b40e0c9/ba299/main.png 1200w,\n/static/60bb0cab49d3d8cae1b06bc85b40e0c9/a4fe2/main.png 1500w",sizes:"(max-width: 800px) 100vw, 800px"}}}}},{node:{id:"btcquiz",title:"The Bitcoin Quiz App",slug:"btc-quiz",tags:["Web App","Angular"],colorDark:"#F18F18",image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADTklEQVQ4y31UTUhUURR+aEEbzbTSdObN+BMF/VFJmRG1ahfUIoKgRQRFLVy2qG0RtImEcPybccbxZxSFSg3JrKBaiJQhRZmpuVIXpZa9+/7u6dxz73szE9GFx3v3nXO/e853vnM0DZc9fk8zWstyxTfrqV3HYqHLLKpPWrEgGK0BzqLBzAfwsdD+kMXCxzW1WDSUQx9m/0nNaNkmwWLlNej4Hrp0gAQd5Kw1gG8d8DAoMAKFTh14Qhe2BEvsyJegei5GVqrAwufJMamLqDCCoCsBdI4XciOyEf+XyQtk1Db6uZASoMFPrK0ypPnhxsKnoV0HlaItgMRho6WUwFiqBqxX14HFt1OEigaPDlNEi+9ptBdqAhk3K06c0nF8x1iIs+QuMOpzwHpzEzj7Dix1GNzFcTAfnQKjaTMX0SsaTEET7gdE3v3qBouMCGRECrj1/Bpw7oAz1QN8ZQac+RGwnl4EsVjHPgTcIn3T0boiKM1MV1JxQ5wB6zkCzoco/L24uQrWizpBCZCf8KfCSVAtLYuAx4+4GYyGfGDJPcCtNQKyx++CPRkBbhu0d+aeoF85AWfIiWuZG/WWgI2FYI1elVGtzMqI7mtgDp1DKlz6b41cAiOyify9s5oPkvmg5oyGPEw5RgfdpbfAug5SRNboFT99c/gCXvwfQI8LpT8EeicjxDS5awFfW6RCUcqfu2UmWWcyANMGFHakgCTi8SVSN4fOYqWf+dFZL+v86DJBtX8VhMWrqJKSvzlVpDwwHmwA52Nc/mc/gHXuB6O5RLZmNqDYoKaairg5cAa4Y2KKtuJvAlh3NbC2CorE+dKnAJcxi0MIuDUb0PQrjKk2F3Oz7wTKownchTEflJs/wV3+Shx6y5kdlOKW3ZIlm99mui/lIKjPBdZ7jADtsduUNrd+kXz46jw4M49VusUKMAAedTgYQreg22s9wWGYowa59foGRrSAcjlAuhOtSHwld4s+9rhT482vg6uxrur1aJjI7GccaZx17OWs9yi2YC0434ap6kZjkbApztJgYtxBSmhRvyPHV1tlFRqWoINmoZw4LSVEuOhXAeRJyi9AGsxVYH2aP2UJtGInOky5cdnkXqGUAv4hfAnGabLr7fb0IOH9Ae2ZVrBz1xSLAAAAAElFTkSuQmCC",aspectRatio:1,src:"/static/43600cd87d79b15b9fb50081149f8f45/af144/main.png",srcSet:"/static/43600cd87d79b15b9fb50081149f8f45/7c0ed/main.png 200w,\n/static/43600cd87d79b15b9fb50081149f8f45/647de/main.png 400w,\n/static/43600cd87d79b15b9fb50081149f8f45/af144/main.png 800w,\n/static/43600cd87d79b15b9fb50081149f8f45/cb30f/main.png 900w",sizes:"(max-width: 800px) 100vw, 800px"}}}}},{node:{id:"pokedex",title:"Pokedex",slug:"pokedex",tags:["Javascript"],colorDark:"#161A1E",image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADwUlEQVQ4y4VUa0xTZxg+bfcLNcZwKdByKG3pBVqaKjAVJ1MxqBubd40xccYwQ6YyYa4zzDFvAzXEhYkat7jJxR/iD12YV0yw/OA2pVzSAkILQ3+0MFv/aK/n3ft99Bg6QL/k5D39zvs+3/M879uPYXABAHP33n3B7dt/ikbs9g+YWVb5ydNCEg8VlzDvXe3t7TP28BCxx+MpOPdztanN0qMge9XVFyjoo6amucHGxsZ4gIWDg0MFXq+3EvdaOjo6X5UeMYFSpoDtm7aM4fdYktfa0iKcXjfrwmS2ovLs87X5G+DEqZ9g4+ZtoNLoIEYsCclixF42QQqFhfubpuXT6Ha75wQUX7tW+69Gqwe5UuOTyVVBBOTU+MQlshwrVwUyl2TD+YpKE8lflrWU+lxS+u1MsIGBARGJb9683vdD+XGIjk0IaNIyQK3Vcdp0A8fKlJAolXFsihJyV+VBc/Ojj0g+KqJ1TX/diQTssVjevj/t7m5et74ApKycghJAAhwXLwW5Qh1UpGqJHXbiN8l/8uSpgESn0xkJOjo6KgxLT6+rb/Any1WUIYJyOr2RS0pWcMiSHOAnB+HoNIZLBbyfk5OTUzt9fX00Wq02KmFiwvW96bsyiE9kA+l6I+Az5WW8lMjnlKq0QGb2Mqj+peYgyd/wyWfUzx+Pn4wERC/5BglwLv9enZePMjVBXYYRdBmLKctYsQQwhlIUaliTlx/q6enNJDUXL12mZB4/NkeConRRGHT51d//AOw2law3LOFS1emcOCFpyk/llJ+7du+xYW5UmJAgwker1UqjxWKhoC9ePK/6uuQIYeQ3GDOpdOIjAUU7iMd+YsnRsmO1YQgh72cEy2dDQ4Iwy3lms3l4xcpVoNbogwZjFqBU6qUYZ1OSJONwZoPLc3Khtq7+S1Kz54t9ogiWvb29NDocDvrB7/N9euXX34j0EALSrhN2+FDpeEAIQeHzTVt8LpfLMOu/xmazMY2NNxmzuZWO0sjISN3+ogMgU6gDhCXOKPUyQZLMkXcE9EbHJcLB4sMdEZL51d/fT+Pw8DAvXfzgwcOJrA9zSLdDODaU4aKY+EDUgkX0d9FXh6C+4fotMiGzsuT9tIfvRo/HvfdCzSWQsHJfckpqYP7CaMhamgOl35gA71Cz++XLnQgmfOcdSeayra2NOXOuShA+5E7ZsXLYvHUHnDpd4Te3tt5AkI//d8nMDcizdDjsFHB8/J843LuKjavCQu303K6uLhHmvf8m57vucjpneFN8uFSIBwhJE3lFnZ2dzH/aJf1/eLQILwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/f50b406430e9ec34b6f6a21ba4fcfcec/af144/main2.png",srcSet:"/static/f50b406430e9ec34b6f6a21ba4fcfcec/7c0ed/main2.png 200w,\n/static/f50b406430e9ec34b6f6a21ba4fcfcec/647de/main2.png 400w,\n/static/f50b406430e9ec34b6f6a21ba4fcfcec/af144/main2.png 800w,\n/static/f50b406430e9ec34b6f6a21ba4fcfcec/cb30f/main2.png 900w",sizes:"(max-width: 800px) 100vw, 800px"}}}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-projects-js-6c789ab60f250353d476.js.map