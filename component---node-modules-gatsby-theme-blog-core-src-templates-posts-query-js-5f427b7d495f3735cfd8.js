(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Pa3m:function(e,t,n){"use strict";n.r(t);var c=n("q1tI"),r=n.n(c),o=(n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("TJpk")),a=n.n(o),i=n("Wbzz"),l=n("txSG"),s=n("PqFP"),u=n("dlzO"),b=(n("f3/d"),n("qKvR")),O=function(e){var t=e.socialLinks;return Object(b.c)("footer",{css:Object(l.f)({mt:4,pt:3})},t.map((function(e,t,n){return Object(b.c)(c.Fragment,{key:e.url},Object(b.c)(l.c.a,{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.name),n.length-1!==t&&Object(b.c)(c.Fragment,null," ","•"," "))})))},j=function(e){var t=e.location,n=e.posts,r=e.siteTitle,o=e.socialLinks;return Object(b.c)(s.a,{location:t,title:r},Object(b.c)("main",null,n.map((function(e){var t=e.node,n=t.title||t.slug,r=t.keywords||[];return Object(b.c)(c.Fragment,{key:t.slug},Object(b.c)(u.a,{title:"Home",keywords:r}),Object(b.c)("div",null,Object(b.c)(l.c.h2,{css:Object(l.f)({mb:1})},Object(b.c)(l.c.a,{as:i.Link,css:Object(l.f)({textDecoration:"none"}),to:t.slug},n)),Object(b.c)("small",null,t.date),Object(b.c)(l.c.p,null,t.excerpt)))}))),Object(b.c)(O,{socialLinks:o}))};function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){var t=e.location,n=e.posts,c=e.siteTitle,o=e.socialLinks;console.log(c);var i={weekday:"long",year:"numeric",month:"long",day:"numeric"},l={location:t,posts:n.map((function(e){return p({},e,{node:p({},e.node,{date:new Date(e.node.date).toLocaleDateString("vi-VN",i)})})})),siteTitle:c,socialLinks:o};return Object(b.c)(r.a.Fragment,null,Object(b.c)(j,l),Object(b.c)(a.a,null,Object(b.c)("title",null," Abscodes")))};n.d(t,"query",(function(){return m}));t.default=function(e){var t=e.location,n=e.data,c=n.site,r=n.allBlogPost;return Object(b.c)(g,{location:t,posts:r.edges,siteTitle:c.siteMetadata.title,socialLinks:c.siteMetadata.social})};var m="936562190"}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-blog-core-src-templates-posts-query-js-5f427b7d495f3735cfd8.js.map