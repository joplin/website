"use strict";(self.webpackChunk_joplin_doc_builder=self.webpackChunk_joplin_doc_builder||[]).push([[5674],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||r;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6023:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return p}});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_label:"Joplin architecture"},o="Joplin architecture",s={unversionedId:"dev/spec/architecture",id:"dev/spec/architecture",title:"Joplin architecture",description:"Donate using PayPal Sponsor on GitHub Become a patron Donate using IBAN",source:"@site/help/dev/spec/architecture.md",sourceDirName:"dev/spec",slug:"/dev/spec/architecture",permalink:"/help/dev/spec/architecture",draft:!1,editUrl:"https://github.com/laurent22/joplin/tree/dev/readme/dev/spec/architecture.md",tags:[],version:"current",frontMatter:{sidebar_label:"Joplin architecture"},sidebar:"helpSidebar",previous:{title:"Contributing to Joplin",permalink:"/help/dev/"},next:{title:"Clipper authorisation mechanism",permalink:"/help/dev/spec/clipper_auth"}},l={},p=[{value:"User applications",id:"user-applications",level:2},{value:"Desktop application",id:"desktop-application",level:3},{value:"Mobile application",id:"mobile-application",level:3},{value:"CLI application",id:"cli-application",level:3},{value:"Joplin Server",id:"joplin-server",level:2},{value:"Web Clipper",id:"web-clipper",level:2},{value:"More information",id:"more-information",level:2}],c={toc:p},u="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"joplin-architecture"},"Joplin architecture"),(0,i.kt)("div",{className:"donate-links"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.paypal.com/donate/?business=E8JMYD2LQ8MMA&no_recurring=0&item_name=I+rely+on+donations+to+maintain+and+improve+the+Joplin+open+source+project.+Thank+you+for+your+help+-+it+makes+a+difference%21&currency_code=EUR"},(0,i.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-PayPal-green.svg",alt:"Donate using PayPal"}))," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sponsors/laurent22/"},(0,i.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/GitHub-Badge.svg",alt:"Sponsor on GitHub"}))," ",(0,i.kt)("a",{parentName:"p",href:"https://www.patreon.com/joplin"},(0,i.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Patreon-Badge.svg",alt:"Become a patron"}))," ",(0,i.kt)("a",{parentName:"p",href:"https://joplinapp.org/donate/#donations"},(0,i.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-IBAN.svg",alt:"Donate using IBAN"})))),(0,i.kt)("p",null,"Joplin as a project is organised around three main components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The user applications: For ",(0,i.kt)("a",{parentName:"li",href:"/help/apps/desktop"},"desktop"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/laurent22/joplin/blob/dev/readme/apps/mobile.md"},"mobile")," and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/laurent22/joplin/blob/dev/readme/apps/terminal"},"CLI"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/laurent22/joplin/blob/dev/packages/server/README.md"},"Joplin Server")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/help/apps/clipper"},"Web Clipper"))),(0,i.kt)("h2",{id:"user-applications"},"User applications"),(0,i.kt)("p",null,"The desktop, mobile and CLI applications have the same architecture and mostly the same backend. The main difference is for the UI, where they each use a different framework, and for system integration (eg. notifications, importing or exporting files, etc.)."),(0,i.kt)("p",null,"The overall architecture for each application is as such:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Front end: The user facing part of the app. This is different for each applications (see below for the difference between applications)"),(0,i.kt)("li",{parentName:"ul"},"Back end: This is shared by all applications. It is made of:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Services: Provide high-level functionalities, such as the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/laurent22/joplin/tree/dev/packages/lib/services/searchengine"},"search engine"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/laurent22/joplin/tree/dev/packages/lib/services/plugins"},"plugin system")," or ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/laurent22/joplin/blob/dev/packages/lib/Synchronizer.ts"},"synchroniser"),"."),(0,i.kt)("li",{parentName:"ul"},"Models: The model layer sits between the services and database. They provide a higher level abstraction than SQL and utility functions to easily save data, such as notes, notebooks, etc."),(0,i.kt)("li",{parentName:"ul"},"Database: All applications use a local ",(0,i.kt)("a",{parentName:"li",href:"https://sqlite.org/index.html"},"SQLite database")," to store notes, settings, cache, etc. This is only a local database."))),(0,i.kt)("li",{parentName:"ul"},"Configuration: The application is configured using a ",(0,i.kt)("inlineCode",{parentName:"li"},"settings.json")," file. Its schema is available online: ",(0,i.kt)("a",{parentName:"li",href:"https://joplinapp.org/schema/settings.json"},"https://joplinapp.org/schema/settings.json"))),(0,i.kt)("img",{src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/architecture/Application.png",style:{maxWidth:"100%"}}),(0,i.kt)("h3",{id:"desktop-application"},"Desktop application"),(0,i.kt)("p",null,"The desktop application is developed using ",(0,i.kt)("a",{parentName:"p",href:"https://www.electronjs.org/"},"Electron"),", with a front end done in ",(0,i.kt)("a",{parentName:"p",href:"https://react.dev/"},"React"),". The backend runs on ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js"),"."),(0,i.kt)("h3",{id:"mobile-application"},"Mobile application"),(0,i.kt)("p",null,"The mobile application is developed using ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/"},"React Native"),". The backend runs on React Native's own ",(0,i.kt)("a",{parentName:"p",href:"https://hermesengine.dev/"},"Hermes JavaScript engine"),"."),(0,i.kt)("h3",{id:"cli-application"},"CLI application"),(0,i.kt)("p",null,"This application is to use Joplin from the terminal. It is developed using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cronvel/terminal-kit"},"terminal-kit"),". The backend runs on Node.js."),(0,i.kt)("h2",{id:"joplin-server"},"Joplin Server"),(0,i.kt)("p",null,"Joplin Server is used to synchronise the application data between multiple devices. Thus, a user can have their notes on their laptop, and on the go, on their phone. Joplin Server also allows user to share notebooks with others, and publish notes to the internet. Because it is designed specifically for Joplin, it also offers improved performance, compared to other synchronisation targets."),(0,i.kt)("p",null,"A typical Joplin Server installation will use the following elements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/laurent22/joplin/blob/dev/packages/server/README.md"},"Joplin Server application"),". This is a Node.js application. It exposes a REST API that is used by the Joplin clients to upload or download notes, notebooks, and other Joplin objects."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.postgresql.org/"},"PostgreSQL"),': it is used to save the "item" metadata. An "item" can be a note, a notebook, a tag, etc. It is also used to save other informations, such as user accounts, access logs, etc.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/s3/"},"AWS S3"),": it is used to save the item content. In other words, the note body, the file attachments, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.nginx.com/"},"Nginx"),": It is used as a reverse proxy and for TLS termination."),(0,i.kt)("li",{parentName:"ul"},"A configuration file: A ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," file, which contains environement variables used to configure the server.")),(0,i.kt)("p",null,"This is a typical Joplin Server installation, but many of its components can be configured - for example it is possible to use a different database engine, or to use the filesystem instead of AWS S3. Any reverse proxy would also work - using Nginx is not required."),(0,i.kt)("img",{src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/architecture/JoplinServer.png",style:{maxWidth:"100%"}}),(0,i.kt)("h2",{id:"web-clipper"},"Web Clipper"),(0,i.kt)("p",null,"The Web Clipper is a browser extension for Firefox and Chrome. It is used to capture a web page, a part of a page, or a screenshot from the browser, and save it to Joplin."),(0,i.kt)("p",null,"It is developed using the ",(0,i.kt)("a",{parentName:"p",href:"https://extensionworkshop.com/documentation/develop/about-the-webextensions-api/"},"WebExtensions API")," with the popup being done using React."),(0,i.kt)("h2",{id:"more-information"},"More information"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/help/dev/spec/plugins"},"Plugin Architecture spec")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/help/dev/spec/e2ee"},"E2EE: Technical spec")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/help/dev/spec/e2ee/workflow"},"E2EE: Workflow")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/laurent22/joplin/tree/dev/readme/dev/spec"},"All Joplin technical specifications"))))}h.isMDXComponent=!0}}]);