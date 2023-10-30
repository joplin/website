"use strict";(self.webpackChunk_joplin_doc_builder=self.webpackChunk_joplin_doc_builder||[]).push([[3230],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?o.createElement(g,s(s({ref:t},p),{},{components:n})):o.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6655:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return u}});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_label:"Pull request guidelines"},s="Pull request guidelines",i={unversionedId:"dev/gsoc/gsoc2021/pull_request_guidelines",id:"dev/gsoc/gsoc2021/pull_request_guidelines",title:"Pull request guidelines",description:"Donate using PayPal Sponsor on GitHub Become a patron Donate using IBAN",source:"@site/help/dev/gsoc/gsoc2021/pull_request_guidelines.md",sourceDirName:"dev/gsoc/gsoc2021",slug:"/dev/gsoc/gsoc2021/pull_request_guidelines",permalink:"/help/dev/gsoc/gsoc2021/pull_request_guidelines",draft:!1,editUrl:"https://github.com/laurent22/joplin/tree/dev/readme/dev/gsoc/gsoc2021/pull_request_guidelines.md",tags:[],version:"current",frontMatter:{sidebar_label:"Pull request guidelines"},sidebar:"helpSidebar",previous:{title:"GSoC 2021 Ideas",permalink:"/help/dev/gsoc/gsoc2021/ideas"},next:{title:"Google Summer of Code 2022",permalink:"/help/dev/gsoc/gsoc2022/"}},l={},u=[],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pull-request-guidelines"},"Pull request guidelines"),(0,r.kt)("div",{className:"donate-links"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.paypal.com/donate/?business=E8JMYD2LQ8MMA&no_recurring=0&item_name=I+rely+on+donations+to+maintain+and+improve+the+Joplin+open+source+project.+Thank+you+for+your+help+-+it+makes+a+difference%21&currency_code=EUR"},(0,r.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-PayPal-green.svg",alt:"Donate using PayPal"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sponsors/laurent22/"},(0,r.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/GitHub-Badge.svg",alt:"Sponsor on GitHub"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://www.patreon.com/joplin"},(0,r.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Patreon-Badge.svg",alt:"Become a patron"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://joplinapp.org/donate/#donations"},(0,r.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-IBAN.svg",alt:"Donate using IBAN"})))),(0,r.kt)("p",null,"Due to our limited resources and in order to give everyone a chance to submit a pull request, we have put restrictions in place this year. If you want to submit a pull request, please take into account the following rules:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Pull requests must be based on an issue that existed ",(0,r.kt)("strong",{parentName:"li"},"before GSoC was started"),", or based on an issue created by a moderator."),(0,r.kt)("li",{parentName:"ol"},"Each contributor ",(0,r.kt)("strong",{parentName:"li"},"may only create one pull request at a time"),". Once your pull request has been merged, you can post a second one. We have this rule in place due to our limited resources - if everyone was allowed to post multiple pull requests we will not be able to review them properly. It is also better for you because you only need to care about one PR - so spend time making sure it is as good as it can be - make sure it works well, has test units, documentation and screenshots (if relevant)."),(0,r.kt)("li",{parentName:"ol"},"If the pull request has serious issues, or would require a significant rewrite to be acceptable, we might closed it and you will not be allowed to open a new one. So ",(0,r.kt)("strong",{parentName:"li"},"please be careful when posting a PR"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"If you are borrowing code, please disclose it"),". It is fine and sometimes even recommended to borrow code, but we need to know about it to assess your work. If we find out that your pull request contains a lot of code copied from elsewhere, we will close the pull request."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"All pull request must have test units"),". If for some reason it is not possible to add tests, please let us know and explain why. In that case, you'll need to tell us ",(0,r.kt)("strong",{parentName:"li"},"what steps you followed to manually test your changes"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"No Work In Progress"),". ONLY completed and working pull requests, and with test units, will be accepted. A WIP would fall under rule 3 and be closed immediately."),(0,r.kt)("li",{parentName:"ol"},"Please ",(0,r.kt)("strong",{parentName:"li"},"do not ",(0,r.kt)("inlineCode",{parentName:"strong"},"@mention")," contributors and mentor and do not ask for pull request reviews"),". Sometimes it takes time before we can review your pull request or answer your questions but we'll get to it sooner or later. ",(0,r.kt)("inlineCode",{parentName:"li"},"@mentioning")," someone just adds to the pile of notifications we get and it won't make us look at your issue faster."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Do not force push"),". If you make changes to your pull request, please simply add a new commit as that makes it easy for us to review your new changes. If you force push, we'll have to review everything from the beginning.")),(0,r.kt)("p",null,"These rules we hope are fair to everyone, to contributors and maintainers, however if something is unclear or you have any question about them, please let us know!"))}d.isMDXComponent=!0}}]);