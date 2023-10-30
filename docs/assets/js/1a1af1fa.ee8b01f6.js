"use strict";(self.webpackChunk_joplin_doc_builder=self.webpackChunk_joplin_doc_builder||[]).push([[9475],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9239:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_label:"Structure of file URLs in Joplin Server"},o="Structure of file URLs in Joplin Server",l={unversionedId:"dev/spec/server_file_url_format",id:"dev/spec/server_file_url_format",title:"Structure of file URLs in Joplin Server",description:"Donate using PayPal Sponsor on GitHub Become a patron Donate using IBAN",source:"@site/help/dev/spec/server_file_url_format.md",sourceDirName:"dev/spec",slug:"/dev/spec/server_file_url_format",permalink:"/help/dev/spec/server_file_url_format",draft:!1,editUrl:"https://github.com/laurent22/joplin/tree/dev/readme/dev/spec/server_file_url_format.md",tags:[],version:"current",frontMatter:{sidebar_label:"Structure of file URLs in Joplin Server"},sidebar:"helpSidebar",previous:{title:"Joplin Server delta sync",permalink:"/help/dev/spec/server_delta_sync"},next:{title:"Joplin Server items",permalink:"/help/dev/spec/server_items"}},s={},p=[{value:"Access by ID",id:"access-by-id",level:2},{value:"Access by full path",id:"access-by-full-path",level:2},{value:"Difference between API and web app end points",id:"difference-between-api-and-web-app-end-points",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"structure-of-file-urls-in-joplin-server"},"Structure of file URLs in Joplin Server"),(0,a.kt)("div",{className:"donate-links"},(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.paypal.com/donate/?business=E8JMYD2LQ8MMA&no_recurring=0&item_name=I+rely+on+donations+to+maintain+and+improve+the+Joplin+open+source+project.+Thank+you+for+your+help+-+it+makes+a+difference%21&currency_code=EUR"},(0,a.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-PayPal-green.svg",alt:"Donate using PayPal"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sponsors/laurent22/"},(0,a.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/GitHub-Badge.svg",alt:"Sponsor on GitHub"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://www.patreon.com/joplin"},(0,a.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Patreon-Badge.svg",alt:"Become a patron"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://joplinapp.org/donate/#donations"},(0,a.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-IBAN.svg",alt:"Donate using IBAN"})))),(0,a.kt)("p",null,"To identify a file, Joplin Server supports two types of URLs:"),(0,a.kt)("h2",{id:"access-by-id"},"Access by ID"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Format:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"BASE_URL/files/FILE_ID")),(0,a.kt)("p",null,"This is the simplest way and it matches how other API items are accessed by ID."),(0,a.kt)("p",null,"For example: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://example.com/api/files/5c7e0f3f54434ba")),(0,a.kt)("h2",{id:"access-by-full-path"},"Access by full path"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Format:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"BASE_URL/files/SPECIAL_DIR:/path/to/file/:")),(0,a.kt)("p",null,"This is to access a file by its full path. In this case, the path must be prefixed by ",(0,a.kt)("inlineCode",{parentName:"p"},"SPECIAL_DIR"),", which can only be ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," at the moment. Then to differentiate the path from URL segments, it needs to be wrapped in colons ",(0,a.kt)("inlineCode",{parentName:"p"},":"),"."),(0,a.kt)("p",null,"For example, to access the metadata of file ",(0,a.kt)("inlineCode",{parentName:"p"},"/my/file.txt")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"https://example.com/api/files/root:/my/file.txt:")),(0,a.kt)("p",null,"To access its content:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"https://example.com/api/files/root:/my/file.txt:/content")),(0,a.kt)("p",null,"To access the root only (for example to list its content):"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"https://example.com/api/files/root:/:")),(0,a.kt)("p",null,"Which can also be written as:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"https://example.com/api/files/root")),(0,a.kt)("h2",{id:"difference-between-api-and-web-app-end-points"},"Difference between API and web app end points"),(0,a.kt)("p",null,"The API and web app end points are consistent in the way they access files, except that in one case the URLs will start with ",(0,a.kt)("inlineCode",{parentName:"p"},"/api")," and the other with just ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),". For example, this would access the same file:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"API: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://example.com/api/files/root:/my/file.txt:")),(0,a.kt)("li",{parentName:"ul"},"Web: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://example.com/files/root:/my/file.txt:"))))}m.isMDXComponent=!0}}]);