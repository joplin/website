(()=>{"use strict";var e={1103:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function c(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((o=o.apply(e,t||[])).next())}))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(2558)),a=r(n(2622)),c=r(n(2508)),l=r(n(8185)),s=r(n(3022));window.addEventListener("DOMContentLoaded",(()=>o(void 0,void 0,void 0,(function*(){(0,s.default)(),(0,i.default)(),(0,l.default)(),(0,a.default)();for(const e of document.querySelectorAll("div[data--is-rendered-markdown]"))(0,c.default)(e)}))))},2558:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function c(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((o=o.apply(e,t||[])).next())}))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(6012)),a=r(n(1820));t.default=()=>o(void 0,void 0,void 0,(function*(){var e;const t=(0,a.default)(location.href),n=document.querySelector("a#current-category-nav-link");if(n&&t.fromTab){n.innerText=t.fromTab.replace(/-/g," ");const o=`#tab-${t.fromTab.replace(/[^a-zA-Z0-9]/g,"-")}`;n.href+=o,"#tab-home"===o&&(null===(e=n.parentElement)||void 0===e?void 0:e.matches("li.breadcrumb-item"))&&(n.parentElement.style.display="none")}const o=document.querySelector("a#current-plugin-nav-link");if(o&&t.pluginId){const e=yield(0,i.default)(),n=e.pluginFromId(t.pluginId);if(n){o.innerText=n.name;const r=t.fromTab?`?from-tab=${t.fromTab}`:"";o.href=e.getLinkToPlugin(n)+r}else o.classList.add("invalid"),o.innerText="Unknown"}if(t.fromTab){const e=document.querySelectorAll("a.process--append-parent-tab-to-href");for(const n of e)n.href+="?from-tab="+t.fromTab}}))},2622:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});const{Tooltip:n}=window.bootstrap;t.default=()=>{const e=document.querySelectorAll('[data-bs-toggle="tooltip"]');for(const t of e)new n(t)}},2508:function(e,t){var n=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function c(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});let o=0;t.default=e=>{(e=>{const t=e.querySelectorAll("h1, h2, h3, h4, h5, h6");for(const e of t)if(e.textContent){const t=encodeURIComponent(e.textContent.toLocaleLowerCase());e.setAttribute("id",t.replace(/%20/g,"-"))}})(e),(e=>{const t=e.querySelectorAll("h1, h2, h3, h4, h5, h6");for(const e of t){const t=document.createElement("button");t.innerHTML='<i class="fas fa-link"></i>',t.classList.add("btn","link-to-header-button","fade-in-on-hover"),t.title="Link to header",t.setAttribute("aria-label","Jump to header"),t.onclick=()=>{location.hash=e.id},e.insertAdjacentElement("beforeend",t)}})(e),(e=>{const t=e.querySelectorAll("table");for(const e of t){const t=document.createElement("div");t.classList.add("table-wrapper"),e.replaceWith(t),t.appendChild(e)}})(e),(e=>{const t=e.querySelectorAll("pre");for(const e of t){const t=e.querySelectorAll("code");if(1!==t.length)continue;const r=document.createElement("div");r.classList.add("copy-button-container");const i=document.createElement("button");i.classList.add("btn","copy-button","fade-in-on-hover");const a=e=>{i.setAttribute("aria-label",e),i.setAttribute("title",e)},c=(e,t)=>{const n=document.createElement("i");n.classList.add("fas",e),i.replaceChildren(n),a(t)},l=()=>c("fa-copy","Copy code block"),s=()=>c("fa-check","Copied");l(),i.setAttribute("aria-live","polite");const u=t[0];u.id="readme-code-block-"+o++,i.setAttribute("aria-controls",u.id),i.onclick=()=>n(void 0,void 0,void 0,(function*(){yield navigator.clipboard.writeText(u.innerText),s(),setTimeout(l,1e3)})),r.appendChild(i),e.insertAdjacentElement("beforeend",r),e.classList.add("has-copy-button")}})(e)}},8185:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=()=>{const e=document.querySelectorAll(".process--format-as-local-time");for(const t of e)if("N/A"!==t.innerText)try{const e=new Date(t.innerText),n={year:"numeric",month:"short",day:"numeric"};t.innerText=e.toLocaleDateString(void 0,n)}catch(e){console.warn(`Error: ${e}. Possibly invalid timestamp element: ${t.outerHTML}`)}}},3022:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function c(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((o=o.apply(e,t||[])).next())}))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(6012));t.default=()=>o(void 0,void 0,void 0,(function*(){const e=yield(0,i.default)(),t=document.querySelector("#search-input"),n=document.querySelector("#search-results-container"),o=t.parentElement,r=()=>{const o=t.value;if(""===o)return void n.replaceChildren();const r=e.search(o,5),i=document.createElement("ul");for(const t of r){const n=document.createElement("li"),o=document.createElement("span");o.classList.add("fa-regular","fa-window-maximize"),o.classList.add("icon");const r=document.createElement("a");r.href=e.getLinkToPlugin(t);const a=document.createElement("span");a.classList.add("title"),a.innerText=t.name,r.replaceChildren(o,a),n.appendChild(r),i.appendChild(n)}n.replaceChildren(i)};t.oninput=r,t.onclick=r,o.addEventListener("focusin",(()=>{n.style.display="block"}));let a=null;o.addEventListener("focusout",(()=>{a&&clearTimeout(a),a=setTimeout((()=>{o.contains(document.activeElement)||(n.style.display="none")}),250)}));const c=/\?search=([^;#]+).*$/.exec(location.href);if(c){const e=c[1];t.value=decodeURIComponent(e);const n=document.querySelector("#navbarSupportedContent");n?n.classList.add("show"):console.warn("Unable to find the content of the navbar!"),t.focus(),r()}}))},2366:function(e,t){var n=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function c(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});class o{constructor(e,t){this.rawPlugins=e,this.siteRoot=t,this.allPlugins=Object.values(e)}isRecommended(e){var t;return e in this.rawPlugins&&null!==(t=this.rawPlugins[e]._recommended)&&void 0!==t&&t}pluginFromId(e){return e in this.rawPlugins?this.rawPlugins[e]:null}getLinkToPlugin(e){return this.siteRoot+"/plugin/"+e.id}getCorsDownloadLink(e){return`https://raw.githubusercontent.com/joplin/plugins/master/plugins/${e.id}/plugin.jpl`}getReleaseDownloadLink(e){var t;return`https://github.com/joplin/plugins/releases/download/plugins/${e.id}@${null!==(t=e.version)&&void 0!==t?t:0}.jpl`}getNPMLink(e){return`https://www.npmjs.com/package/${e._npm_package_name}`}getWeeksSinceUpdated(e){return((new Date).getTime()-new Date(e.timeModified).getTime())/1e3/60/60/24/7}search(e,t){const n=(()=>{var n,o;let r=e;const i=(e,t)=>{const n=new RegExp(`^(.*\\s+|)${e}[=:]\\s*(${t})(.*)$`),o=r.match(n);let i=null;if(o){const e=o[1];i=o[2];const t=o[3];r=e+t}return i},a=e=>{let t=i(e,'"[^"]+"|[^" \\t;,]+');return t&&t.match(/^["].*["]$/)&&(t=t.replace(/^"/g,"").replace(/"$/g,"").replace(/[&]quo;/g,'"')),t},c=null!==(n=(e=>{const t=i("max-results","\\d+");return t?parseInt(t):null})())&&void 0!==n?n:t;return{onlyShowFromAuthor:a("author"),onlyShowForMaintainers:null===(o=a("maintainer"))||void 0===o?void 0:o.split(/\sOR\s/),maxResults:c,newQuery:r}})(),o=n.maxResults;e=n.newQuery.toLowerCase().trim();const r=(e,t)=>t.includes(e),i=t=>r(e,t)||((e,t)=>{const n=e.split(/\s+/);let o=0;for(const e of n)o+=r(e,t)?1:0;return o})(e,t)>0,a=t=>{const n=i(t.name.toLowerCase()),o=i(t.description.toLowerCase()),r=i(t.author.toLowerCase()),a=e===t.id;if(!(n||o||a||r))return 0;let c=0;(n||a)&&(c+=10),t.name.toLowerCase()===e&&(c+=5),r&&(c++,t.author.toLowerCase()===e&&(c+=20)),o&&c++,this.isRecommended(t.id)&&(c*=2);const l=this.getWeeksSinceUpdated(t);return l<=12?c*=1.1:isNaN(l)||(c+=1/l),c},c=this.allPlugins.filter((e=>!n.onlyShowFromAuthor||e.author===n.onlyShowFromAuthor)).filter((e=>{if(!n.onlyShowForMaintainers)return!0;for(const t of n.onlyShowForMaintainers)if(e._npm_package_maintainers.includes(t))return!0;return!1})).filter((e=>a(e)>0));return c.sort(((e,t)=>a(t)-a(e))),c.slice(0,Math.min(o,c.length))}static fromURL(e,t){return n(this,void 0,void 0,(function*(){const n=yield fetch(e),r=yield n.json();return new o(r,t)}))}static fromData(e){return new o(e.plugins.raw,e.config.site)}}t.default=o},6012:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function c(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((o=o.apply(e,t||[])).next())}))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(2366)),a=document.querySelector("#site-root").innerText;t.default=()=>o(void 0,void 0,void 0,(function*(){var e;const t=window;return null!==(e=t.pluginDataManager)&&void 0!==e||(t.pluginDataManager=yield i.default.fromURL(`${a}/pluginData.json`,a)),t.pluginDataManager}))},1820:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>{const t=e.match(/\?(?:plugin|id)=([^,?#/]+)[^/]*$/),n=e.match(/\?from-tab=([^,?#/]+)[^/]*$/);return{fromTab:n?n[1].replace(/\W/g,"-"):null,pluginId:t?t[1]:null}}}},t={};!function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}(1103)})();