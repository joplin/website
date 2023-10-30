"use strict";(self.webpackChunk_joplin_doc_builder=self.webpackChunk_joplin_doc_builder||[]).push([[2706],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},313:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_label:"Desktop application styling"},o="Desktop application styling",l={unversionedId:"dev/spec/desktop_styling",id:"dev/spec/desktop_styling",title:"Desktop application styling",description:"Donate using PayPal Sponsor on GitHub Become a patron Donate using IBAN",source:"@site/help/dev/spec/desktop_styling.md",sourceDirName:"dev/spec",slug:"/dev/spec/desktop_styling",permalink:"/help/dev/spec/desktop_styling",draft:!1,editUrl:"https://github.com/laurent22/joplin/tree/dev/readme/dev/spec/desktop_styling.md",tags:[],version:"current",frontMatter:{sidebar_label:"Desktop application styling"},sidebar:"helpSidebar",previous:{title:"How to add a new default plugin",permalink:"/help/dev/spec/default_plugins"},next:{title:"Encryption",permalink:"/help/dev/spec/e2ee/"}},i={},p=[{value:"SCSS support",id:"scss-support",level:2},{value:"CSS class framework",id:"css-class-framework",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"desktop-application-styling"},"Desktop application styling"),(0,r.kt)("div",{className:"donate-links"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.paypal.com/donate/?business=E8JMYD2LQ8MMA&no_recurring=0&item_name=I+rely+on+donations+to+maintain+and+improve+the+Joplin+open+source+project.+Thank+you+for+your+help+-+it+makes+a+difference%21&currency_code=EUR"},(0,r.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-PayPal-green.svg",alt:"Donate using PayPal"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sponsors/laurent22/"},(0,r.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/GitHub-Badge.svg",alt:"Sponsor on GitHub"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://www.patreon.com/joplin"},(0,r.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Patreon-Badge.svg",alt:"Become a patron"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://joplinapp.org/donate/#donations"},(0,r.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/badges/Donate-IBAN.svg",alt:"Donate using IBAN"})))),(0,r.kt)("p",null,"The desktop application went through three styling methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Directly setting the style on the element - eg. ",(0,r.kt)("inlineCode",{parentName:"li"},"<div style={{ fontWeight: 'bold' }}/>"),". We no longer use this method as it lacks flexibility, and it makes it hard to change the style via a custom stylesheet."),(0,r.kt)("li",{parentName:"ul"},"Using the styled-components package. This makes the style cleaner and more reusable. However, creating special components for each style is a bit of an overhead, and styled-components has a few glitches that can make styling fail."),(0,r.kt)("li",{parentName:"ul"},"The third and current method is simply using SCSS and plain CSS classes. This method is described below, and in general that's what should be used for new components. It makes customisation easier and has less overhead than styled-components")),(0,r.kt)("h2",{id:"scss-support"},"SCSS support"),(0,r.kt)("p",null,"The application stylesheet is generated by building ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/app-desktop/style.scss")),(0,r.kt)("p",null,"When creating a new component, create a new stylesheet file too, for example in ",(0,r.kt)("inlineCode",{parentName:"p"},"MyComponent/style.scss"),", then add this file to the root style.scss file."),(0,r.kt)("p",null,"Additionally global styles can go in the root ",(0,r.kt)("inlineCode",{parentName:"p"},"main.scss")," file."),(0,r.kt)("p",null,"Whenever the app is built, this root style.scss file is compiled and a style.css file is generated. It's this final style.css file that's included into the app."),(0,r.kt)("h2",{id:"css-class-framework"},"CSS class framework"),(0,r.kt)("p",null,"We use ",(0,r.kt)("a",{parentName:"p",href:"https://ricostacruz.com/rscss/index.html"},"rscss")," to structure the components and classes. The main things to remember are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Components should be named with ",(0,r.kt)("strong",{parentName:"li"},"at least two words"),". eg ",(0,r.kt)("inlineCode",{parentName:"li"},".search-form")),(0,r.kt)("li",{parentName:"ul"},"Component element classes should have only ",(0,r.kt)("strong",{parentName:"li"},"one word"),". eg ",(0,r.kt)("inlineCode",{parentName:"li"},".field"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"textinput")),(0,r.kt)("li",{parentName:"ul"},"Always use the ",(0,r.kt)("inlineCode",{parentName:"li"},">")," child selector. This prevents bleeding through nested components.")),(0,r.kt)("p",null,"For example, in the code below there are two components (",(0,r.kt)("inlineCode",{parentName:"p"},"order-form")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"slider-box"),"), and each has one or more elements."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<form class="order-form">\n    <input class="firstname" type="text"/>\n    <input class="lastname" type="text"/>\n    <div class="slider-box">\n        Select quantity: <div class="knob">\n    </div>\n</form>\n')),(0,r.kt)("p",null,"The components and their elements would be styled this way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".order-form > firstname,\n.order-form > lastname {\n    padding: 10px;\n}\n\n.slider-box > knob {\n    border-width: 1px;\n}\n")),(0,r.kt)("p",null,"What if you want to apply a style to ",(0,r.kt)("inlineCode",{parentName:"p"},"slider-box")," when it is inside ",(0,r.kt)("inlineCode",{parentName:"p"},"order-form"),"?"),(0,r.kt)("p",null,"Do ",(0,r.kt)("strong",{parentName:"p"},"NOT")," do this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".order-form > .slider-box { } /* WRONG */\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"slider-box")," is a component but also an element of ",(0,r.kt)("inlineCode",{parentName:"p"},"order-form"),". So in that case, name the element, for example as ",(0,r.kt)("inlineCode",{parentName:"p"},"quantityslider"),", then you can style it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div class="slider-box quantityslider">\n    Select quantity: <div class="knob">\n</div>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".order-form > .quantityslider {\n    margin-left: 10px;\n}\n")),(0,r.kt)("p",null,"The goal of this approach is to specifically target the elements that you need and nothing else. Over the long term is makes managing the CSS easier."),(0,r.kt)("p",null,"For more details, see the ",(0,r.kt)("a",{parentName:"p",href:"https://ricostacruz.com/rscss/index.html"},"RSCSS documentation"),"."))}u.isMDXComponent=!0}}]);