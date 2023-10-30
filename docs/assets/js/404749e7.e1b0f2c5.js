"use strict";(self.webpackChunk_joplin_doc_builder=self.webpackChunk_joplin_doc_builder||[]).push([[6420],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),c=s(n),m=r,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,o(o({ref:e},u),{},{components:n})):a.createElement(h,o({ref:e},u))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[c]="string"==typeof t?t:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3212:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:.5,sidebar_label:"Installation"},o="Installation",l={unversionedId:"install",id:"install",title:"Installation",description:"Donate using PayPal Sponsor on GitHub Become a patron Donate using IBAN",source:"@site/help/install.md",sourceDirName:".",slug:"/install",permalink:"/help/install",draft:!1,editUrl:"https://github.com/laurent22/joplin/tree/dev/readme/install.md",tags:[],version:"current",sidebarPosition:.5,frontMatter:{sidebar_position:.5,sidebar_label:"Installation"},sidebar:"helpSidebar",previous:{title:"What is Joplin?",permalink:"/help/"},next:{title:"Synchronisation",permalink:"/help/apps/sync/"}},p={},s=[{value:"Desktop applications",id:"desktop-applications",level:2},{value:"Mobile applications",id:"mobile-applications",level:2},{value:"Terminal application",id:"terminal-application",level:2},{value:"Web Clipper",id:"web-clipper",level:2},{value:"Unofficial Alternative Distributions",id:"unofficial-alternative-distributions",level:2}],u={toc:s},c="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("div",{className:"donate-links"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.paypal.com/donate/?business=E8JMYD2LQ8MMA&no_recurring=0&item_name=I+rely+on+donations+to+maintain+and+improve+the+Joplin+open+source+project.+Thank+you+for+your+help+-+it+makes+a+difference%21&currency_code=EUR"},(0,r.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-PayPal-green.svg",alt:"Donate using PayPal"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sponsors/laurent22/"},(0,r.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/GitHub-Badge.svg",alt:"Sponsor on GitHub"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://www.patreon.com/joplin"},(0,r.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Patreon-Badge.svg",alt:"Become a patron"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://joplinapp.org/donate/#donations"},(0,r.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-IBAN.svg",alt:"Donate using IBAN"})))),(0,r.kt)("p",null,"Three types of applications are available: for ",(0,r.kt)("strong",{parentName:"p"},"desktop")," (Windows, macOS and Linux), for ",(0,r.kt)("strong",{parentName:"p"},"mobile")," (Android and iOS) and for ",(0,r.kt)("strong",{parentName:"p"},"terminal")," (Windows, macOS, Linux and FreeBSD). All the applications have similar user interfaces and can synchronise with each other."),(0,r.kt)("h2",{id:"desktop-applications"},"Desktop applications"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operating System"),(0,r.kt)("th",{parentName:"tr",align:null},"Download"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Windows (32 and 64-bit)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"https://objects.joplinusercontent.com/v2.12.19/Joplin-Setup-2.12.19.exe?source=JoplinWebsite&type=New"},(0,r.kt)("img",{alt:"Get it on Windows",width:"134px",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/BadgeWindows.png"})))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"macOS"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"https://objects.joplinusercontent.com/v2.12.19/Joplin-2.12.19.dmg?source=JoplinWebsite&type=New"},(0,r.kt)("img",{alt:"Get it on macOS",width:"134px",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/BadgeMacOS.png"})))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Linux"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"https://objects.joplinusercontent.com/v2.12.19/Joplin-2.12.19.AppImage?source=JoplinWebsite&type=New"},(0,r.kt)("img",{alt:"Get it on Linux",width:"134px",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/BadgeLinux.png"})))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"On Windows"),", you may also use the ",(0,r.kt)("a",{href:"https://objects.joplinusercontent.com/v2.12.19/JoplinPortable.exe?source=JoplinWebsite&type=New"},"Portable version"),". The ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Portable_application"},"portable application"),' allows installing the software on a portable device such as a USB key. Simply copy the file JoplinPortable.exe in any directory on that USB key ; the application will then create a directory called "JoplinProfile" next to the executable file.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"On Linux"),", the recommended way is to use the following installation script as it will handle the desktop icon too:"),(0,r.kt)("pre",null,(0,r.kt)("code",{style:{wordBreak:"break-all"}},"wget -O - https://raw.githubusercontent.com/laurent22/joplin/dev/Joplin_install_and_update.sh | bash")),(0,r.kt)("p",null,"The install and update script supports the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/laurent22/joplin/blob/dev/Joplin_install_and_update.sh#L50"},"following flags")," (around line 50 at the time of this writing)."),(0,r.kt)("h2",{id:"mobile-applications"},"Mobile applications"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operating System"),(0,r.kt)("th",{parentName:"tr",align:null},"Download"),(0,r.kt)("th",{parentName:"tr",align:null},"Alt. Download"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Android"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"https://play.google.com/store/apps/details?id=net.cozic.joplin&utm_source=GitHub&utm_campaign=README&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"},(0,r.kt)("img",{alt:"Get it on Google Play",style:{maxHeight:"40px"},src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/BadgeAndroid.png"}))),(0,r.kt)("td",{parentName:"tr",align:null},"or download the ",(0,r.kt)("a",{parentName:"td",href:"https://objects.joplinusercontent.com/v2.12.3/joplin-v2.12.3.apk?source=JoplinWebsite&type=New"},"APK file"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"iOS"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"https://itunes.apple.com/us/app/joplin/id1315599797"},(0,r.kt)("img",{alt:"Get it on the App Store",style:{maxHeight:"40px"},src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/BadgeIOS.png"}))),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h2",{id:"terminal-application"},"Terminal application"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operating system"),(0,r.kt)("th",{parentName:"tr",align:null},"Method"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"macOS, Linux, or Windows (via ",(0,r.kt)("a",{parentName:"td",href:"https://msdn.microsoft.com/en-us/commandline/wsl/faq?f=255&MSPPError=-2147217396"},"WSL"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Important:")," First, ",(0,r.kt)("a",{parentName:"td",href:"https://nodejs.org/en/download/package-manager/"},"install Node 12+"),".",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"NPM_CONFIG_PREFIX=~/.joplin-bin npm install -g joplin"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"sudo ln -s ~/.joplin-bin/bin/joplin /usr/bin/joplin"),(0,r.kt)("br",null),(0,r.kt)("br",null),"By default, the application binary will be installed under ",(0,r.kt)("inlineCode",{parentName:"td"},"~/.joplin-bin"),". You may change this directory if needed. Alternatively, if your npm permissions are setup as described ",(0,r.kt)("a",{parentName:"td",href:"https://docs.npmjs.com/getting-started/fixing-npm-permissions#option-2-change-npms-default-directory-to-another-directory"},"here")," (Option 2) then simply running ",(0,r.kt)("inlineCode",{parentName:"td"},"npm -g install joplin")," would work.")))),(0,r.kt)("p",null,"To start it, type ",(0,r.kt)("inlineCode",{parentName:"p"},"joplin"),"."),(0,r.kt)("p",null,"For usage information, please refer to the full ",(0,r.kt)("a",{parentName:"p",href:"https://joplinapp.org/help/apps/terminal/"},"Joplin Terminal Application Documentation"),"."),(0,r.kt)("h2",{id:"web-clipper"},"Web Clipper"),(0,r.kt)("p",null,"The Web Clipper is a browser extension that allows you to save web pages and screenshots from your browser. For more information on how to install and use it, see the ",(0,r.kt)("a",{parentName:"p",href:"/help/apps/clipper"},"Web Clipper Help Page"),"."),(0,r.kt)("h2",{id:"unofficial-alternative-distributions"},"Unofficial Alternative Distributions"),(0,r.kt)("p",null,"There are a number of unofficial alternative Joplin distributions. If you do not want to or cannot use appimages or any of the other officially supported releases then you may wish to consider these."),(0,r.kt)("p",null,"However these come with a caveat in that they are not officially supported so certain issues may not be supportable by the main project. Rather support requests, bug reports and general advice would need to go to the maintainers of these distributions."),(0,r.kt)("p",null,"A community maintained list of these distributions can be found here: ",(0,r.kt)("a",{parentName:"p",href:"https://discourse.joplinapp.org/t/unofficial-alternative-joplin-distributions/23703"},"Unofficial Joplin distributions")))}d.isMDXComponent=!0}}]);