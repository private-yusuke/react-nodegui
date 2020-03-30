(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{120:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"rightToc",(function(){return r})),a.d(t,"metadata",(function(){return b})),a.d(t,"default",(function(){return s}));var i=a(1),n=a(6),o=(a(0),a(149)),p={id:"viewprops",title:"ViewProps",sidebar_label:"ViewProps"},r=[{value:"Example",id:"example",children:[]},{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>Optional</code> attributes",id:"optional-attributes",children:[]},{value:"<code>Optional</code> cursor",id:"optional-cursor",children:[]},{value:"<code>Optional</code> enabled",id:"optional-enabled",children:[]},{value:"<code>Optional</code> geometry",id:"optional-geometry",children:[]},{value:"<code>Optional</code> id",id:"optional-id",children:[]},{value:"<code>Optional</code> maxSize",id:"optional-maxsize",children:[]},{value:"<code>Optional</code> minSize",id:"optional-minsize",children:[]},{value:"<code>Optional</code> mouseTracking",id:"optional-mousetracking",children:[]},{value:"<code>Optional</code> on",id:"optional-on",children:[]},{value:"<code>Optional</code> pos",id:"optional-pos",children:[]},{value:"<code>Optional</code> ref",id:"optional-ref",children:[]},{value:"<code>Optional</code> size",id:"optional-size",children:[]},{value:"<code>Optional</code> style",id:"optional-style",children:[]},{value:"<code>Optional</code> styleSheet",id:"optional-stylesheet",children:[]},{value:"<code>Optional</code> visible",id:"optional-visible",children:[]},{value:"<code>Optional</code> windowFlags",id:"optional-windowflags",children:[]},{value:"<code>Optional</code> windowIcon",id:"optional-windowicon",children:[]},{value:"<code>Optional</code> windowOpacity",id:"optional-windowopacity",children:[]},{value:"<code>Optional</code> windowState",id:"optional-windowstate",children:[]},{value:"<code>Optional</code> windowTitle",id:"optional-windowtitle",children:[]}]}],b={id:"api/interfaces/viewprops",title:"ViewProps",description:"The View component can be used to encapsulate other components and provide structure.",source:"@site/docs/api/interfaces/viewprops.md",permalink:"/docs/api/interfaces/viewprops",sidebar_label:"ViewProps",sidebar:"api",previous:{title:"TextProps",permalink:"/docs/api/interfaces/textprops"},next:{title:"WindowProps",permalink:"/docs/api/interfaces/windowprops"}},c={rightToc:r,metadata:b},l="wrapper";function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)(l,Object(i.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The View component can be used to encapsulate other components and provide structure.\nIt functions similar to a div in the web world. It is based on\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.nodegui.org/docs/api/QWidget"}),"NodeGui's QWidget"),"."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { Renderer, Button, Window, View } from "./index";\nconst App = () => {\n return (\n   <Window>\n     <View>\n       <Button style={buttonStyle} text={"Hello"} />\n       <Button style={buttonStyle} text={"World"} />\n     </View>\n   </Window>\n );\n};\nconst buttonStyle = `\n color: white;\n`;\nRenderer.render(<App />);\n')),Object(o.b)("h2",{id:"type-parameters"},"Type parameters"),Object(o.b)("p",null,"\u25aa ",Object(o.b)("strong",{parentName:"p"},"Signals"),": ",Object(o.b)("em",{parentName:"p"},"object")),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"RNProps"),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("strong",{parentName:"p"},"ViewProps")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/interfaces/sliderprops"}),"SliderProps")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/interfaces/windowprops"}),"WindowProps")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/interfaces/textprops"}),"TextProps")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/interfaces/abstractbuttonprops"}),"AbstractButtonProps")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/interfaces/lineeditprops"}),"LineEditProps")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/interfaces/plaintexteditprops"}),"PlainTextEditProps")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/interfaces/progressbarprops"}),"ProgressBarProps")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/interfaces/dialprops"}),"DialProps")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/interfaces/spinboxprops"}),"SpinBoxProps")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/interfaces/scrollareaprops"}),"ScrollAreaProps")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/interfaces/comboboxprops"}),"ComboBoxProps")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/interfaces/tabprops"}),"TabProps")))),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("h3",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/api/interfaces/viewprops#optional-attributes"}),"attributes")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/api/interfaces/viewprops#optional-cursor"}),"cursor")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/api/interfaces/viewprops#optional-enabled"}),"enabled")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/api/interfaces/viewprops#optional-geometry"}),"geometry")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/api/interfaces/viewprops#optional-id"}),"id")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/api/interfaces/viewprops#optional-maxsize"}),"maxSize")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/api/interfaces/viewprops#optional-minsize"}),"minSize")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/api/interfaces/viewprops#optional-mousetracking"}),"mouseTracking")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/api/interfaces/viewprops#optional-on"}),"on")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/api/interfaces/viewprops#optional-pos"}),"pos")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/api/interfaces/viewprops#optional-ref"}),"ref")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/api/interfaces/viewprops#optional-size"}),"size")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/api/interfaces/viewprops#optional-style"}),"style")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/api/interfaces/viewprops#optional-stylesheet"}),"styleSheet")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/api/interfaces/viewprops#optional-visible"}),"visible")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/api/interfaces/viewprops#optional-windowflags"}),"windowFlags")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/api/interfaces/viewprops#optional-windowicon"}),"windowIcon")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/api/interfaces/viewprops#optional-windowopacity"}),"windowOpacity")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/api/interfaces/viewprops#optional-windowstate"}),"windowState")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/api/interfaces/viewprops#optional-windowtitle"}),"windowTitle"))),Object(o.b)("h2",{id:"properties-1"},"Properties"),Object(o.b)("h3",{id:"optional-attributes"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," attributes"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"attributes"),"? : ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(i.a)({parentName:"em"},{href:"/docs/api/globals#widgetattributesmap"}),"WidgetAttributesMap"))),Object(o.b)("p",null,"Prop to set the Widget Attributes. example:\n",Object(o.b)("inlineCode",{parentName:"p"},"<View attributes={{[WidgetAttributes.WA_Disabled]: true}} />")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-cursor"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," cursor"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"cursor"),"? : ",Object(o.b)("em",{parentName:"p"},"CursorShape | QCursor")),Object(o.b)("p",null,"Sets the window mouse cursor. ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.nodegui.org/docs/api/NodeWidget#widgetsetcursorcursor"}),"QWidget: setCursor")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-enabled"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," enabled"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"enabled"),"? : ",Object(o.b)("em",{parentName:"p"},"undefined | false | true")),Object(o.b)("p",null,"Sets the property that tells whether the widget is enabled. In general an enabled widget handles keyboard and mouse events; a disabled widget does not. ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.nodegui.org/docs/api/NodeWidget#widgetsetenabledenabled"}),"QWidget: setEnabled")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-geometry"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," geometry"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"geometry"),"? : ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(i.a)({parentName:"em"},{href:"/docs/api/globals#geometry"}),"Geometry"))),Object(o.b)("p",null,"Sets the screen position as well as size of the widget. ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.nodegui.org/docs/api/NodeWidget#widgetsetgeometryx-y-width-height"}),"QWidget: setGeometry")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-id"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," id"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"id"),"? : ",Object(o.b)("em",{parentName:"p"},"undefined | string")),Object(o.b)("p",null,"Sets the object name (id) of the widget in Qt. Object name can be analogous to id of an element in the web world. Using the objectName of the widget one can reference it in the Qt's stylesheet much like what we do with id in the web world. ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.nodegui.org/docs/api/NodeWidget#widgetsetobjectnameobjectname"}),"QWidget: setObjectName")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-maxsize"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," maxSize"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"maxSize"),"? : ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(i.a)({parentName:"em"},{href:"/docs/api/globals#size"}),"Size"))),Object(o.b)("p",null,"Sets the maximum size of the widget. ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.nodegui.org/docs/api/NodeWidget#widgetsetmaximumsizewidth-height"}),"QWidget: setMaximumSize")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-minsize"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," minSize"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"minSize"),"? : ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(i.a)({parentName:"em"},{href:"/docs/api/globals#size"}),"Size"))),Object(o.b)("p",null,"Sets the minimum size of the widget. ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.nodegui.org/docs/api/NodeWidget#widgetsetminimumsizewidth-height"}),"QWidget: setMinimumSize")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-mousetracking"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," mouseTracking"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"mouseTracking"),"? : ",Object(o.b)("em",{parentName:"p"},"undefined | false | true")),Object(o.b)("p",null,"Sets the property that tells whether mouseTracking is enabled for the widget. ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.nodegui.org/docs/api/NodeWidget#widgetsetmousetrackingismousetracked"}),"QWidget: setMouseTracking")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-on"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," on"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"on"),"? : ",Object(o.b)("em",{parentName:"p"},"Partial\u2039",Object(o.b)("a",Object(i.a)({parentName:"em"},{href:"/docs/api/globals#widgeteventlisteners"}),"WidgetEventListeners")," | Signals\u203a")),Object(o.b)("p",null,"Prop to set the event listener map. See ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/guides/handle-events"}),"Handlong Events")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-pos"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," pos"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"pos"),"? : ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(i.a)({parentName:"em"},{href:"/docs/api/globals#position"}),"Position"))),Object(o.b)("p",null,"Sets the screen position of the widget. ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.nodegui.org/docs/api/NodeWidget#widgetmovex-y"}),"QWidget: move")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-ref"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," ref"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"ref"),"? : ",Object(o.b)("em",{parentName:"p"},"any")),Object(o.b)("p",null,"Prop to set the ref. The ref will return the underlying nodegui widget."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-size"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," size"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"size"),"? : ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(i.a)({parentName:"em"},{href:"/docs/api/globals#viewsize"}),"ViewSize"))),Object(o.b)("p",null,"Sets both the minimum and maximum sizes of the widget. ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.nodegui.org/docs/api/NodeWidget#widgetsetfixedsizewidth-height"}),"QWidget: setFixedSize")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-style"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," style"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"style"),"? : ",Object(o.b)("em",{parentName:"p"},"undefined | string")),Object(o.b)("p",null,"Sets the inline stylesheet property. ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.nodegui.org/docs/api/NodeWidget#widgetsetinlinestylestyle"}),"QWidget: setInlineStyle")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-stylesheet"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," styleSheet"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"styleSheet"),"? : ",Object(o.b)("em",{parentName:"p"},"undefined | string")),Object(o.b)("p",null,"Sets the property that holds the widget's style sheet. ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.nodegui.org/docs/api/NodeWidget#widgetsetstylesheetstylesheet"}),"QWidget: setStyleSheet")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-visible"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," visible"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"visible"),"? : ",Object(o.b)("em",{parentName:"p"},"undefined | false | true")),Object(o.b)("p",null,"Shows or hides the widget and its children. ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.nodegui.org/docs/api/NodeWidget#widgetshow"}),"QWidget: show")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-windowflags"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," windowFlags"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"windowFlags"),"? : ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(i.a)({parentName:"em"},{href:"/docs/api/globals#windowflagsmap"}),"WindowFlagsMap"))),Object(o.b)("p",null,"Prop to set the Widget flags. example:\n",Object(o.b)("inlineCode",{parentName:"p"},"<View windowFlags={{[WindowType.SplashScreen]: true}} />")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-windowicon"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," windowIcon"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"windowIcon"),"? : ",Object(o.b)("em",{parentName:"p"},"QIcon")),Object(o.b)("p",null,"Sets the window icon. ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.nodegui.org/docs/api/NodeWidget#widgetsetwindowiconicon"}),"QWidget: setWindowIcon")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-windowopacity"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," windowOpacity"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"windowOpacity"),"? : ",Object(o.b)("em",{parentName:"p"},"undefined | number")),Object(o.b)("p",null,"This property holds the level of opacity for the window. ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.nodegui.org/docs/api/NodeWidget#widgetsetwindowopacityopacity"}),"QWidget: setWindowOpacity")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-windowstate"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," windowState"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"windowState"),"? : ",Object(o.b)("em",{parentName:"p"},"WindowState")),Object(o.b)("p",null,"Sets the window state. ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.nodegui.org/docs/api/NodeWidget#widgetsetwindowstatestate"}),"QWidget: setWindowState")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-windowtitle"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," windowTitle"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"windowTitle"),"? : ",Object(o.b)("em",{parentName:"p"},"undefined | string")),Object(o.b)("p",null,"Sets the window title property. ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.nodegui.org/docs/api/NodeWidget#widgetsetwindowtitletitle"}),"QWidget: setWindowTitle")))}s.isMDXComponent=!0},149:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return s}));var i=a(0),n=a.n(i),o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},r=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)};var b="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},l=Object(i.forwardRef)((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,b=function(e,t){var a={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&-1===t.indexOf(i)&&(a[i]=e[i]);return a}(e,["components","mdxType","originalType","parentName"]),l=p(a),s=i,d=l[r+"."+s]||l[s]||c[s]||o;return a?n.a.createElement(d,Object.assign({},{ref:t},b,{components:a})):n.a.createElement(d,Object.assign({},{ref:t},b))}));function s(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,p=new Array(o);p[0]=l;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[b]="string"==typeof e?e:i,p[1]=r;for(var s=2;s<o;s++)p[s]=a[s];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,a)}l.displayName="MDXCreateElement"}}]);