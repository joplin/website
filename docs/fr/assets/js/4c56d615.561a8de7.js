"use strict";(self.webpackChunk_joplin_doc_builder=self.webpackChunk_joplin_doc_builder||[]).push([[9914],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=l(t),m=s,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,i=new Array(o);i[0]=m;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a[c]="string"==typeof e?e:s,i[1]=a;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3860:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return a},toc:function(){return l}});var r=t(7462),s=(t(7294),t(3905));const o={sidebar_label:"S3 synchronisation",title:"S3 synchronisation",description:"Depuis Joplin 2.x.x, Joplin prend en charge plusieurs fournisseurs S3. Nous exposons certaines options qui devront \xeatre configur\xe9es selon le fournisseur de votre choix. Nous avons test\xe9 avec UpClou..."},i="S3 synchronisation",a={unversionedId:"apps/sync/s3",id:"apps/sync/s3",title:"S3 synchronisation",description:"Depuis Joplin 2.x.x, Joplin prend en charge plusieurs fournisseurs S3. Nous exposons certaines options qui devront \xeatre configur\xe9es selon le fournisseur de votre choix. Nous avons test\xe9 avec UpClou...",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/apps/sync/s3.md",sourceDirName:"apps/sync",slug:"/apps/sync/s3",permalink:"/fr/help/apps/sync/s3",draft:!1,editUrl:"https://github.com/laurent22/joplin/tree/dev/readme/apps/sync/s3.md",tags:[],version:"current",frontMatter:{sidebar_label:"S3 synchronisation",title:"S3 synchronisation",description:"Depuis Joplin 2.x.x, Joplin prend en charge plusieurs fournisseurs S3. Nous exposons certaines options qui devront \xeatre configur\xe9es selon le fournisseur de votre choix. Nous avons test\xe9 avec UpClou..."},sidebar:"helpSidebar",previous:{title:"OneDrive synchronisation",permalink:"/fr/help/apps/sync/onedrive"},next:{title:"WebDAV synchronisation",permalink:"/fr/help/apps/sync/webdav"}},u={},l=[{value:"Param\xe8tres de configuration pour les fournisseurs test\xe9s",id:"param\xe8tres-de-configuration-pour-les-fournisseurs-test\xe9s",level:2},{value:"AWS",id:"aws",level:2},{value:"Linode",id:"linode",level:2},{value:"UpCloud",id:"upcloud",level:2}],p={toc:l},c="wrapper";function d(e){let{components:n,...t}=e;return(0,s.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"s3-synchronisation"},"S3 synchronisation"),(0,s.kt)("div",{className:"donate-links"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.paypal.com/donate/?business=E8JMYD2LQ8MMA&no_recurring=0&item_name=I+rely+on+donations+to+maintain+and+improve+the+Joplin+open+source+project.+Thank+you+for+your+help+-+it+makes+a+difference%21&currency_code=EUR"},(0,s.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-PayPal-green.svg",alt:"Donate using PayPal"}))," ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/sponsors/laurent22/"},(0,s.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/GitHub-Badge.svg",alt:"Sponsor on GitHub"}))," ",(0,s.kt)("a",{parentName:"p",href:"https://www.patreon.com/joplin"},(0,s.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Patreon-Badge.svg",alt:"Become a patron"}))," ",(0,s.kt)("a",{parentName:"p",href:"https://joplinapp.org/donate/#donations"},(0,s.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-IBAN.svg",alt:"Donate using IBAN"})))),(0,s.kt)("p",null,"Depuis Joplin 2.x.x, Joplin prend en charge plusieurs fournisseurs S3. Nous exposons certaines options qui devront \xeatre configur\xe9es selon le fournisseur de votre choix. Nous avons test\xe9 avec UpCloud, AWS et Linode. les autres devraient \xe9galement fonctionner."),(0,s.kt)("p",null,"Dans l'application ",(0,s.kt)("strong",{parentName:"p"},"de bureau"),' ou ****, s\xe9lectionnez "S3 (Beta)" comme cible de synchronisation dans l\'\xe9cran ',(0,s.kt)("a",{parentName:"p",href:"/help/apps/config_screen"},"Configuration"),"."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"S3 Bucket:")," The name of your Bucket, such as ",(0,s.kt)("inlineCode",{parentName:"li"},"joplin-bucket")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"URL S3 :")," URL enti\xe8rement qualifi\xe9e; Pour AWS, cela devrait \xeatre ",(0,s.kt)("inlineCode",{parentName:"li"},"https://s3.<regionName>.<unk> s.com/")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Cl\xe9 d'acc\xe8s S3 & Cl\xe9 Secr\xe8te S3 :"),"  La cl\xe9 d'acc\xe8s programmatique de l'utilisateur.  Pour cr\xe9er une nouvelle cl\xe9 & secr\xe8te sur AWS, visitez ",(0,s.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/iam/home#/security_credentials"},"Identifiants de s\xe9curit\xe9 IAM"),". Pour les autres fournisseurs, suivez leur documentation."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"R\xe9gion S3 :")," Certains fournisseurs vous demandent de fournir la r\xe9gion de votre seau. Ceci est g\xe9n\xe9ralement sous la forme \"eu-west1\" ou quelque chose de similaire selon votre r\xe9gion. Pour les fournisseurs qui n'ont pas besoin d'une r\xe9gion, vous pouvez la laisser vide."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Force Path Style"),": Ce param\xe8tre permet \xe0 Joplin de parler aux fournisseurs S3 en utilisant un chemin de style S3 plus ancien. Selon votre fournisseur, vous devrez peut-\xeatre essayer avec cette option.")),(0,s.kt)("p",null,"While creating a new Bucket for Joplin, disable ",(0,s.kt)("strong",{parentName:"p"},"Bucket Versioning"),", enable ",(0,s.kt)("strong",{parentName:"p"},"Block all public access")," and enable ",(0,s.kt)("strong",{parentName:"p"},"Default encryption")," with ",(0,s.kt)("inlineCode",{parentName:"p"},"Amazon S3 key (SSE-S3)"),". Certains fournisseurs ne exposent pas ces options, et cela pourrait cr\xe9er un probl\xe8me de synchronisation. Faites une tentative et faites un rapport pour que nous puissions mettre \xe0 jour la documentation de mani\xe8re appropri\xe9e."),(0,s.kt)("p",null,"Pour ajouter une politique ",(0,s.kt)("strong",{parentName:"p"},"Bucket Policy")," de la console Web AWS S3, acc\xe9dez \xe0 l'onglet ",(0,s.kt)("strong",{parentName:"p"},"Permissions"),". D\xe9sactivez temporairement ",(0,s.kt)("strong",{parentName:"p"},"Bloquez tous les acc\xe8s publics"),"  pour modifier la politique de Bucket, quelque chose suivant les lignes de :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "VisualEditor0",\n            "Effet": "Autorisation",\n            "Action": [\n                  "s3:ListBucket",\n                  "s3:GetBucketLocation",\n                  "s3:GetObject",\n                  "s3:DeleteObject",\n                  "s3:DeleteObjectVersion",\n                  "s3:PutObject"\n            ],\n            "Ressource": [\n                "arn:aws:s3:::joplin-bucket",\n                "arn:aws:s3:::joplin-bucket/*"\n            ]\n        }\n    ]\n}\n')),(0,s.kt)("h2",{id:"param\xe8tres-de-configuration-pour-les-fournisseurs-test\xe9s"},"Param\xe8tres de configuration pour les fournisseurs test\xe9s"),(0,s.kt)("p",null,"Tous les fournisseurs ont besoin d'un compartiment, d'une cl\xe9 d'acc\xe8s et d'une cl\xe9 secr\xe8te."),(0,s.kt)("p",null,'Si vous fournissez une configuration et que vous recevez "succ\xe8s" sur la "v\xe9rification de la configuration", alors votre synchronisation S3 devrait fonctionner pour votre fournisseur. Si vous ne recevez pas de succ\xe8s, vous devrez peut-\xeatre ajuster vos param\xe8tres, ou les sauvegarder, red\xe9marrer l\'application et tenter une synchronisation. Cela peut r\xe9v\xe9ler un message d\'erreur plus clair qui vous aidera \xe0 d\xe9duire le probl\xe8me.'),(0,s.kt)("h2",{id:"aws"},"AWS"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"URL : ",(0,s.kt)("inlineCode",{parentName:"li"},"https://s3.<region>.<unk> s.com/")," (remplissez votre r\xe9gion, vous trouverez une liste compl\xe8te d'adresses de terminaux ",(0,s.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/general/latest/gr/s3.html"},"ici"),")"),(0,s.kt)("li",{parentName:"ul"},"R\xe9gion : requis"),(0,s.kt)("li",{parentName:"ul"},"Forcer le style du chemin : d\xe9coch\xe9")),(0,s.kt)("h2",{id:"linode"},"Linode"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"URL: ",(0,s.kt)("inlineCode",{parentName:"li"},"https://<region>.linodeobjects. om")," (la r\xe9gion est dans l'URL fournie par Linode; cette URL est \xe9galement la m\xeame que l'URL fournie par Linode avec le nom du bucket supprim\xe9)"),(0,s.kt)("li",{parentName:"ul"},"R\xe9gion: Tout ce que vous voulez saisir, ne peut pas \xeatre laiss\xe9 vide"),(0,s.kt)("li",{parentName:"ul"},"Forcer le style du chemin : d\xe9coch\xe9")),(0,s.kt)("h2",{id:"upcloud"},"UpCloud"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"URL: ",(0,s.kt)("inlineCode",{parentName:"li"},"https://<account>.<region>.upcloudobjects.com")," (Ils vous fourniront plusieurs URLs, celle qui suit ce patron devrait fonctionner.)"),(0,s.kt)("li",{parentName:"ul"},"R\xe9gion : requis"),(0,s.kt)("li",{parentName:"ul"},"Forcer le style du chemin : d\xe9coch\xe9")))}d.isMDXComponent=!0}}]);