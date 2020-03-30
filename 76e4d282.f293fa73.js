(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{119:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(1),a=t(6),o=(t(0),t(149)),i={sidebar_label:"ScrollArea",title:"Scroll Area"},s=[{value:"Example",id:"example",children:[]}],l={id:"guides/scroll-view",title:"Scroll Area",description:"ScrollArea allows you to display a large content (image, list or even plain text) in an area of predefined size. A scroll area is used to display the contents of a child widget within a frame. If the widget exceeds the size of the frame, the view can provide scroll bars so that the entire area of the child widget can be viewed.",source:"@site/docs/guides/scroll-view.md",permalink:"/docs/guides/scroll-view",sidebar_label:"ScrollArea",sidebar:"guides",previous:{title:"Handle Events",permalink:"/docs/guides/handle-events"},next:{title:"Images",permalink:"/docs/guides/images"}},c={rightToc:s,metadata:l},d="wrapper";function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)(d,Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"ScrollArea allows you to display a large content (image, list or even plain text) in an area of predefined size. A scroll area is used to display the contents of a child widget within a frame. If the widget exceeds the size of the frame, the view can provide scroll bars so that the entire area of the child widget can be viewed."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import React from "react";\nimport { Renderer, Text, ScrollArea, Window } from "@nodegui/react-nodegui";\n\nconst App = () => {\n  return (\n    <Window>\n      <ScrollArea>\n        <Text>\n          {`\n            Contrary to popular belief, \n            Lorem Ipsum is not simply random text. \n            It has roots in a piece of classical Latin literature from 45 BC, \n            making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, \n            looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, \n            and going through the cites of the word in classical literature, \n            discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 \n            and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. \n            This book is a treatise on the theory of ethics, very popular during the Renaissance. \n            The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n\n            The standard chunk of Lorem Ipsum used since the 1500s\n            is reproduced below for those interested. \n            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also \n            reproduced in their exact original form, accompanied \n            by English versions from the 1914 translation by H. Rackham.\n\n\n            Why do we use it?\n\n            It is a long established \n            fact that a reader will be distracted by \n            the readable content of a page when looking at its layout. \n            The point of using Lorem Ipsum is that it has \n            a more-or-less normal distribution of letters, \n            as opposed to using \'Content here, content here\', \n            making it look like readable English. \n            Many desktop publishing packages and web page \n            editors now use Lorem Ipsum as their default model text, \n            and a search for \'lorem ipsum\' will uncover many web \n            sites still in their infancy. Various versions \n            have evolved over the years, sometimes by accident, \n            sometimes on purpose (injected humour and the like).\n\n        `}\n        </Text>\n      </ScrollArea>\n    </Window>\n  );\n};\n\nRenderer.render(<App />);\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"TLDR;")),Object(o.b)("p",null,"We create a ",Object(o.b)("inlineCode",{parentName:"p"},"<ScrollArea>")," instance and then set the target widget as its child."),Object(o.b)("p",null,"The result would look like this:"),Object(o.b)("img",{src:"https://github.com/nodegui/react-nodegui/releases/download/assets/scrollarea.gif",alt:"scroll area",style:{width:"100%",maxWidth:400}}))}u.isMDXComponent=!0},149:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return u}));var r=t(0),a=t.n(r),o=a.a.createContext({}),i=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},s=function(e){var n=i(e.components);return a.a.createElement(o.Provider,{value:n},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),d=i(t),u=r,p=d[s+"."+u]||d[u]||c[u]||o;return t?a.a.createElement(p,Object.assign({},{ref:n},l,{components:t})):a.a.createElement(p,Object.assign({},{ref:n},l))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[l]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);