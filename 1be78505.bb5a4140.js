(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{146:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(149),s=t(151),o=t(43),i=t(154),r=t(150),m=t.n(r),u=t(152),d=t(97),b=t.n(d);const p=24;function h({item:e,onItemClick:a,collapsible:t}){const{items:c,href:s,label:o,type:i}=e,[r,d]=Object(n.useState)(e.collapsed),[b,p]=Object(n.useState)(null);e.collapsed!==b&&(p(e.collapsed),d(e.collapsed));const f=Object(n.useCallback)(e=>{e.preventDefault(),d(e=>!e)});switch(i){case"category":return c.length>0&&l.a.createElement("li",{className:m()("menu__list-item",{"menu__list-item--collapsed":r}),key:o},l.a.createElement("a",{className:m()("menu__link",{"menu__link--sublist":t,"menu__link--active":t&&!e.collapsed}),href:"#!",onClick:t?f:void 0},o),l.a.createElement("ul",{className:"menu__list"},c.map(e=>l.a.createElement(h,{key:e.label,item:e,onItemClick:a,collapsible:t}))));case"link":default:return l.a.createElement("li",{className:"menu__list-item",key:o},l.a.createElement(u.a,{activeClassName:"menu__link--active",className:"menu__link",exact:!0,to:s,onClick:a},o))}}var f=function(e){const[a,t]=Object(n.useState)(!1),{docsSidebars:c,location:s,sidebar:o,sidebarCollapsible:i}=e;if(!o)return null;const r=c[o];if(!r)throw new Error(`Cannot find the sidebar "${o}" in the sidebar config!`);return i&&r.forEach(e=>(function e(a,t){const{items:n,href:l,type:c}=a;switch(c){case"category":{const l=n.map(a=>e(a,t)).filter(e=>e).length>0;return a.collapsed=!l,l}case"link":default:return l===t.pathname.replace(/\/$/,"")}})(e,s)),l.a.createElement("div",{className:b.a.sidebar},l.a.createElement("div",{className:m()("menu","menu--responsive",{"menu--show":a})},l.a.createElement("button",{"aria-label":a?"Close Menu":"Open Menu",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{t(!a)}},a?l.a.createElement("span",{className:m()(b.a.sidebarMenuIcon,b.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement("svg",{className:b.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:p,width:p,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement("ul",{className:"menu__list"},r.map(e=>l.a.createElement(h,{key:e.label,item:e,onItemClick:()=>{t(!1)},collapsible:i})))))},E=t(162),k=t(163),_=t(17),v=t(101),w=t.n(v);a.default=function(e){const{route:a,docsMetadata:t,location:n}=e,{permalinkToSidebar:r,docsSidebars:m,version:u}=t,d=r[n.pathname.replace(/\/$/,"")],{siteConfig:{themeConfig:b={}}={}}=Object(s.a)(),{sidebarCollapsible:p=!0}=b;return h=a.routes,v=n.pathname,h.some(e=>Object(_.c)(v,e))?l.a.createElement(i.a,{version:u},l.a.createElement("div",{className:w.a.docPage},d&&l.a.createElement("div",{className:w.a.docSidebarContainer},l.a.createElement(f,{docsSidebars:m,location:n,sidebar:d,sidebarCollapsible:p})),l.a.createElement("main",{className:w.a.docMainContainer},l.a.createElement(c.a,{components:E.a},Object(o.a)(a.routes))))):l.a.createElement(k.default,e);var h,v}},163:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(154);a.default=function(){return l.a.createElement(c.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);