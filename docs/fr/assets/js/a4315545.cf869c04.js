"use strict";(self.webpackChunk_joplin_doc_builder=self.webpackChunk_joplin_doc_builder||[]).push([[9378],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1617:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_label:"Extending Joplin",title:"Extending Joplin",description:"Joplin provides a number of extension points to allow third-party applications to access its data, or to develop plugins. The two main extension points are: Data API The data API provides access to..."},o="Extending Joplin",p={unversionedId:"api/index",id:"api/index",title:"Extending Joplin",description:"Joplin provides a number of extension points to allow third-party applications to access its data, or to develop plugins. The two main extension points are: Data API The data API provides access to...",source:"@site/help/api/index.md",sourceDirName:"api",slug:"/api/",permalink:"/fr/help/api/",draft:!1,editUrl:"https://github.com/laurent22/joplin/tree/dev/readme/api/index.md",tags:[],version:"current",frontMatter:{sidebar_label:"Extending Joplin",title:"Extending Joplin",description:"Joplin provides a number of extension points to allow third-party applications to access its data, or to develop plugins. The two main extension points are: Data API The data API provides access to..."},sidebar:"helpSidebar",previous:{title:"About the trash feature",permalink:"/fr/help/apps/trash"},next:{title:"Getting started with plugin development",permalink:"/fr/help/api/get_started/plugins"}},s={},l=[{value:"Data API",id:"data-api",level:2},{value:"Plugin API",id:"plugin-api",level:2}],u={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"extending-joplin"},"Extending Joplin"),(0,r.kt)("div",{className:"donate-links"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.paypal.com/donate/?business=E8JMYD2LQ8MMA&no_recurring=0&item_name=I+rely+on+donations+to+maintain+and+improve+the+Joplin+open+source+project.+Thank+you+for+your+help+-+it+makes+a+difference%21&currency_code=EUR"},(0,r.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-PayPal-green.svg",alt:"Donate using PayPal"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sponsors/laurent22/"},(0,r.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/GitHub-Badge.svg",alt:"Sponsor on GitHub"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://www.patreon.com/joplin"},(0,r.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Patreon-Badge.svg",alt:"Become a patron"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://joplinapp.org/donate/#donations"},(0,r.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-IBAN.svg",alt:"Donate using IBAN"})))),(0,r.kt)("p",null,"Joplin provides a number of extension points to allow third-party applications to access its data, or to develop plugins."),(0,r.kt)("p",null,"The two main extension points are:"),(0,r.kt)("h2",{id:"data-api"},"Data API"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/help/api/references/rest_api"},"data API")," provides access to Joplin data to external applications. It is possible, using standard HTTP calls, to create, modify or delete notes, notebooks, tags, etc. as well as attach files to notes and retrieve these files."),(0,r.kt)("p",null,"This is for example how the web clipper communicates with Joplin, and this is most likely what you will need if you have an external application that needs access to Joplin data."),(0,r.kt)("p",null,"To get started with the data API, ",(0,r.kt)("a",{parentName:"p",href:"/help/api/references/rest_api"},"check the documentation"),"."),(0,r.kt)("h2",{id:"plugin-api"},"Plugin API"),(0,r.kt)("p",null,"With plugins you can directly modify Joplin by adding new features to the application. Using this API, you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Access notes, folders, etc. via the data API"),(0,r.kt)("li",{parentName:"ul"},"Add a view to display custom data using HTML/CSS/JS"),(0,r.kt)("li",{parentName:"ul"},"Create a dialog to display information and get input from the user"),(0,r.kt)("li",{parentName:"ul"},"Create a new command and associate a toolbar button or menu item with it"),(0,r.kt)("li",{parentName:"ul"},"Get access to the note currently being edited and modify it"),(0,r.kt)("li",{parentName:"ul"},"Listen to various events and run code when they happen"),(0,r.kt)("li",{parentName:"ul"},"Hook into the application to set additional options and customise Joplin's behaviour"),(0,r.kt)("li",{parentName:"ul"},"Create a module to export or import data into Joplin"),(0,r.kt)("li",{parentName:"ul"},"Define new settings and setting sections, and get/set them from the plugin"),(0,r.kt)("li",{parentName:"ul"},"Create a new Markdown plugin to render custom markup."),(0,r.kt)("li",{parentName:"ul"},"Create an editor plugin to modify, at a low-level, the behaviour of the Markdown editor (CodeMirror)")),(0,r.kt)("p",null,"To get started with the plugin API, check the ",(0,r.kt)("a",{parentName:"p",href:"/help/api/get_started/plugins"},"Get Started")," page or have a look at the ",(0,r.kt)("a",{parentName:"p",href:"/help/api/tutorials/toc_plugin"},"TOC tutorial"),"."),(0,r.kt)("p",null,"Once you are familiar with the API, you can have a look at the ",(0,r.kt)("a",{parentName:"p",href:"https://joplinapp.org/api/references/plugin_api/classes/joplin.html"},"plugin API reference")," for a detailed documentation about each supported feature."))}d.isMDXComponent=!0}}]);