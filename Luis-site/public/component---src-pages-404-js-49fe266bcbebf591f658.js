(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(152),o=a(163),c=a(4),l=a.n(c),u=a(164),s=a.n(u),d=a(143);function m(e){var t=e.description,a=e.lang,n=e.meta,i=e.keywords,c=e.title;return r.a.createElement(d.StaticQuery,{query:f,render:function(e){var o=t||e.site.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:c},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:o}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(n)})},data:o})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired};var p=m,f="1025518380";t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(p,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},143:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(142),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var u=a(144),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var d=a(33);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(e,t,a){var n;e.exports=(n=a(147))&&n.default||n},146:function(e){e.exports={data:{site:{siteMetadata:{title:"Luis Diaz Herrera"}}}}},147:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(54),l=a(2),u=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},148:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){"use strict";var n=a(146),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(143),u=(a(148),a(149),a(153),a(150),function(e){var t=e.siteTitle;return i.a.createElement("div",{className:"header"},i.a.createElement("div",{id:"intro"},i.a.createElement("h1",{style:{margin:0}},t),i.a.createElement("p",null,"Full-Stack Software Engineer.")))});u.propTypes={siteTitle:c.a.string},u.defaultProps={siteTitle:""};var s=u,d=(a(151),function(){return i.a.createElement("div",{className:"bar"},i.a.createElement("ul",{className:"nav"},i.a.createElement("a",{className:"nav-i",href:"#about"},i.a.createElement("li",null,"About")),i.a.createElement("a",{className:"nav-i",href:"#projects"},i.a.createElement("li",null,"Portfolio")),i.a.createElement("a",{className:"nav-i",href:"#contact"},i.a.createElement("li",null,"Contact")),i.a.createElement("a",{href:"https://drive.google.com/file/d/16mi33wSsc5jXUacRGlzmY2P437cFwgKb/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",className:"nav-i"},i.a.createElement("li",null,"Resume"))))}),m=function(e){var t=e.children;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s,{siteTitle:e.site.siteMetadata.title}),i.a.createElement(d,null),i.a.createElement("div",null,t))},data:n})};m.propTypes={children:c.a.node.isRequired};t.a=m},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Luis Diaz Herrera",description:"Software Engineer portfolio site built with gatsby.",author:"Luis Diaz Herrera"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-49fe266bcbebf591f658.js.map