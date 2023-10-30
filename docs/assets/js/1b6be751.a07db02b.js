"use strict";(self.webpackChunk_joplin_doc_builder=self.webpackChunk_joplin_doc_builder||[]).push([[5265],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4301:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"Debugging Server project with vscode"},i="Debugging Server project with vscode",s={unversionedId:"dev/spec/server_debug",id:"dev/spec/server_debug",title:"Debugging Server project with vscode",description:"Donate using PayPal Sponsor on GitHub Become a patron Donate using IBAN",source:"@site/help/dev/spec/server_debug.md",sourceDirName:"dev/spec",slug:"/dev/spec/server_debug",permalink:"/help/dev/spec/server_debug",draft:!1,editUrl:"https://github.com/laurent22/joplin/tree/dev/readme/dev/spec/server_debug.md",tags:[],version:"current",frontMatter:{sidebar_label:"Debugging Server project with vscode"},sidebar:"helpSidebar",previous:{title:"Search Engine",permalink:"/help/dev/spec/search_sorting"},next:{title:"Joplin Server delta sync",permalink:"/help/dev/spec/server_delta_sync"}},p={},c=[{value:"Modifying the configuration:",id:"modifying-the-configuration",level:3},{value:"References:",id:"references",level:3},{value:"More images:",id:"more-images",level:3}],l={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"debugging-server-project-with-vscode"},"Debugging Server project with vscode"),(0,a.kt)("div",{className:"donate-links"},(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.paypal.com/donate/?business=E8JMYD2LQ8MMA&no_recurring=0&item_name=I+rely+on+donations+to+maintain+and+improve+the+Joplin+open+source+project.+Thank+you+for+your+help+-+it+makes+a+difference%21&currency_code=EUR"},(0,a.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-PayPal-green.svg",alt:"Donate using PayPal"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sponsors/laurent22/"},(0,a.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/GitHub-Badge.svg",alt:"Sponsor on GitHub"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://www.patreon.com/joplin"},(0,a.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Patreon-Badge.svg",alt:"Become a patron"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://joplinapp.org/donate/#donations"},(0,a.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-IBAN.svg",alt:"Donate using IBAN"})))),(0,a.kt)("p",null,"Using a debugger sometimes is much easier than trying to just print things to understand a bug,for the server project we have a configuration that makes it easy for everyone to run in debug mode inside vscode."),(0,a.kt)("p",null,'In the debug screen you can select "Server" and hit the play button to start the process.'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/laurent22/joplin/assets/5051088/cda6e3d6-32f3-4997-bd16-8413a6c962c5",alt:"image"})),(0,a.kt)("p",null,"Before running the server there is a task called ",(0,a.kt)("inlineCode",{parentName:"p"},"transpile-server")," that runs ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn tsc")," to make sure that thelatest changes in the ",(0,a.kt)("inlineCode",{parentName:"p"},"package/server")," are being executed."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/laurent22/joplin/blob/4f37e6073ad549fe72206e2a125c27174b5d96a9/joplin.code-workspace#L360-L365"},"https://github.com/laurent22/joplin/blob/4f37e6073ad549fe72206e2a125c27174b5d96a9/joplin.code-workspace#L360-L365")),(0,a.kt)("p",null,"In a optimal solution we would be doing this ",(0,a.kt)("inlineCode",{parentName:"p"},"transpile-server")," task in the ",(0,a.kt)("inlineCode",{parentName:"p"},"tasks.json")," file(inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"tasks.json")," we can use a ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," for the task that is more ergonomic)"),(0,a.kt)("p",null,"If there are any new environment variables that need to be included before execution, there is a place where they can be added:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/laurent22/joplin/blob/4f37e6073ad549fe72206e2a125c27174b5d96a9/joplin.code-workspace#L387-L391"},"https://github.com/laurent22/joplin/blob/4f37e6073ad549fe72206e2a125c27174b5d96a9/joplin.code-workspace#L387-L391")),(0,a.kt)("p",null,"Something that we could do to improve the experience is adding a build process to other projects that are used by the server project,but this still can be done with other terminals open."),(0,a.kt)("h3",{id:"modifying-the-configuration"},"Modifying the configuration:"),(0,a.kt)("p",null,"To modify the configuration, for now, it is all in the ",(0,a.kt)("inlineCode",{parentName:"p"},"joplin.code-workspace")," file, but if needed we could also breakthe configuration into two files, one for the ",(0,a.kt)("inlineCode",{parentName:"p"},"launch.json")," and other for the ",(0,a.kt)("inlineCode",{parentName:"p"},"tasks.json"),"."),(0,a.kt)("h3",{id:"references"},"References:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/debugging"},"vscode debugger")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/multi-root-workspaces#_debugging"},"Launch option to vscode workspaces")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/tasks"},"vscode tasks")),(0,a.kt)("h3",{id:"more-images"},"More images:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/laurent22/joplin/assets/5051088/1346d938-c376-4cab-82a7-98deb4283fe8",alt:"image"}),(0,a.kt)("img",{parentName:"p",src:"https://github.com/laurent22/joplin/assets/5051088/b3a12b9f-704c-4dc8-b2bd-14ba7a1c4759",alt:"image"}),(0,a.kt)("img",{parentName:"p",src:"https://github.com/laurent22/joplin/assets/5051088/c45becc4-44b7-4f95-9d49-421517e29592",alt:"image"})))}d.isMDXComponent=!0}}]);