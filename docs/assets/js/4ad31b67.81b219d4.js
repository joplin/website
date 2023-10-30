"use strict";(self.webpackChunk_joplin_doc_builder=self.webpackChunk_joplin_doc_builder||[]).push([[6951],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3491:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return d}});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"Read-only"},l="Read-only",i={unversionedId:"dev/spec/read_only",id:"dev/spec/read_only",title:"Read-only",description:"Donate using PayPal Sponsor on GitHub Become a patron Donate using IBAN",source:"@site/help/dev/spec/read_only.md",sourceDirName:"dev/spec",slug:"/dev/spec/read_only",permalink:"/help/dev/spec/read_only",draft:!1,editUrl:"https://github.com/laurent22/joplin/tree/dev/readme/dev/spec/read_only.md",tags:[],version:"current",frontMatter:{sidebar_label:"Read-only"},sidebar:"helpSidebar",previous:{title:"Plugin system architecture",permalink:"/help/dev/spec/plugins"},next:{title:"Search Engine",permalink:"/help/dev/spec/search_sorting"}},s={},d=[{value:"On Joplin Cloud",id:"on-joplin-cloud",level:2},{value:"On the applications",id:"on-the-applications",level:2},{value:"At the sync level",id:"at-the-sync-level",level:3},{value:"At the model level",id:"at-the-model-level",level:2},{value:"At the UI level",id:"at-the-ui-level",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"read-only"},"Read-only"),(0,a.kt)("div",{className:"donate-links"},(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.paypal.com/donate/?business=E8JMYD2LQ8MMA&no_recurring=0&item_name=I+rely+on+donations+to+maintain+and+improve+the+Joplin+open+source+project.+Thank+you+for+your+help+-+it+makes+a+difference%21&currency_code=EUR"},(0,a.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-PayPal-green.svg",alt:"Donate using PayPal"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sponsors/laurent22/"},(0,a.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/GitHub-Badge.svg",alt:"Sponsor on GitHub"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://www.patreon.com/joplin"},(0,a.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Patreon-Badge.svg",alt:"Become a patron"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://joplinapp.org/donate/#donations"},(0,a.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-IBAN.svg",alt:"Donate using IBAN"})))),(0,a.kt)("p",null,'Certain Joplin items can potentially be marked as read-only. The notes, folders and resources support this. Currently, it is used when a Joplin Cloud folder is shared with a disabled "write" permission.'),(0,a.kt)("p",null,"Support for read-only items is implemented at multiple levels:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"On Joplin Cloud"),(0,a.kt)("li",{parentName:"ul"},"On the apps: at the model level"),(0,a.kt)("li",{parentName:"ul"},"On the apps: at the UI level"),(0,a.kt)("li",{parentName:"ul"},"On the apps: at the sync level")),(0,a.kt)("h2",{id:"on-joplin-cloud"},"On Joplin Cloud"),(0,a.kt)("p",null,"Joplin Cloud ensures that it is not possible to write an item to a read-only share, except if you are the share owner. When it is attempted, a 403 Forbidden error is returned along with an error code ",(0,a.kt)("inlineCode",{parentName:"p"},'{ "code": "isReadOnly" }'),"."),(0,a.kt)("h2",{id:"on-the-applications"},"On the applications"),(0,a.kt)("p",null,"The desktop, mobile and CLI apps support read-only notes, resources or folders."),(0,a.kt)("h3",{id:"at-the-sync-level"},"At the sync level"),(0,a.kt)("p",null,"Because Joplin Cloud can return read-only-specific errors, the synchroniser needs to handle them."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If a local read-only item has been modified, and the synchroniser tries to upload it, Joplin Cloud responds with a read-only error. The synchroniser local item is copied to the conflict folder and the remote item overwrites the local one."),(0,a.kt)("li",{parentName:"ul"},"If a local read-only item has been deleted, and the synchroniser tries to delete the remote one, Joplin Cloud responds with a read-only error. The synchroniser downloads the remote item and restore the local one."),(0,a.kt)("li",{parentName:"ul"},"If a local item has been added as a child of a read-only folder, and the synchroniser tries to apply the change, Joplin Cloud responds with a read-only error. The local item is copied to the conflict folder and is deleted.")),(0,a.kt)("p",null,"In theory these errors should never happen since they are prevented at the model and UI level but they are handled anyway because sync would be permanently stuck if it cannot handle a read-only error. Moreover the user local items would be inconsistent with the shared folder, with no way of getting the current data."),(0,a.kt)("h2",{id:"at-the-model-level"},"At the model level"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"lib/models/utils/readOnly.ts")," provides a number of utility functions to decide if an item should be considered read-only or not."),(0,a.kt)("p",null,"Most of the read-only handling is done in ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseItem")," so the note, folder and resource handling is very similar."),(0,a.kt)("p",null,"Four cases are handled:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Modifying a read-only item"),(0,a.kt)("li",{parentName:"ul"},"Deleting a read-only item"),(0,a.kt)("li",{parentName:"ul"},"Adding an item as a child of a read-only item"),(0,a.kt)("li",{parentName:"ul"},"Modifying a read-only resource file content")),(0,a.kt)("h2",{id:"at-the-ui-level"},"At the UI level"),(0,a.kt)("p",null,"Likewise ",(0,a.kt)("inlineCode",{parentName:"p"},"readOnly.ts")," is used to find out if an item is read-only and to disable menu items, editors, commands, etc."))}c.isMDXComponent=!0}}]);