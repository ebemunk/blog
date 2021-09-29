var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c,a=!1;function l(t,e,n,r){for(;t<e;){const o=t+(e-t>>1);n(o)<=r?t=o+1:e=o}return t}function s(t,e){a?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let o=0;for(let t=0;t<e.length;t++){const i=l(1,o+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;r[t]=n[i]+1;const c=i+1;n[c]=t,o=Math.max(c,o)}const i=[],c=[];let a=e.length-1;for(let t=n[o]+1;0!=t;t=r[t-1]){for(i.push(e[t-1]);a>=t;a--)c.push(e[a]);a--}for(;a>=0;a--)c.push(e[a]);i.reverse(),c.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<c.length;e++){for(;n<i.length&&c[e].claim_order>=i[n].claim_order;)n++;const r=n<i.length?i[n]:null;t.insertBefore(c[e],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function u(t,e,n){a&&!n?s(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function p(){return h(" ")}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _(t){c=t}const g=[],b=[],$=[],y=[],v=Promise.resolve();let x=!1;function w(t){$.push(t)}let q=!1;const k=new Set;function E(){if(!q){q=!0;do{for(let t=0;t<g.length;t+=1){const e=g[t];_(e),j(e.$$)}for(_(null),g.length=0;b.length;)b.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];k.has(e)||(k.add(e),e())}$.length=0}while(g.length);for(;y.length;)y.pop()();x=!1,q=!1,k.clear()}}function j(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const N=new Set;function A(t,e){-1===t.$$.dirty[0]&&(g.push(t),x||(x=!0,v.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function S(i,l,s,u,f,h,p=[-1]){const m=c;_(i);const g=i.$$={fragment:null,ctx:null,props:h,update:t,not_equal:f,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:l.context||[]),callbacks:n(),dirty:p,skip_bound:!1};let b=!1;if(g.ctx=s?s(i,l.props||{},((t,e,...n)=>{const r=n.length?n[0]:e;return g.ctx&&f(g.ctx[t],g.ctx[t]=r)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](r),b&&A(i,t)),e})):[],g.update(),b=!0,r(g.before_update),g.fragment=!!u&&u(g.ctx),l.target){if(l.hydrate){a=!0;const t=function(t){return Array.from(t.childNodes)}(l.target);g.fragment&&g.fragment.l(t),t.forEach(d)}else g.fragment&&g.fragment.c();l.intro&&(($=i.$$.fragment)&&$.i&&(N.delete($),$.i(y))),function(t,n,i,c){const{fragment:a,on_mount:l,on_destroy:s,after_update:u}=t.$$;a&&a.m(n,i),c||w((()=>{const n=l.map(e).filter(o);s?s.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(w)}(i,l.target,l.anchor,l.customElement),a=!1,E()}var $,y;_(m)}function B(t){let e,n,r,o,i,c,a,l,_;return{c(){e=f("form"),n=f("input"),r=p(),o=f("input"),i=p(),c=f("button"),a=h("Subscribe"),m(n,"type","text"),m(n,"name","fields[first_name]"),m(n,"placeholder","First name"),n.required=!0,m(n,"aria-required","true"),m(n,"aria-label","First name"),n.disabled=t[0],m(n,"class","svelte-1fq0jf8"),m(o,"type","email"),m(o,"name","email_address"),m(o,"placeholder","Email address"),o.required=!0,m(o,"aria-required","true"),m(o,"aria-label","Email address"),o.disabled=t[0],m(o,"class","svelte-1fq0jf8"),m(c,"type","submit"),c.disabled=t[0],m(c,"class","svelte-1fq0jf8"),m(e,"class","svelte-1fq0jf8")},m(d,f){var h,p,m,g;u(d,e,f),s(e,n),s(e,r),s(e,o),s(e,i),s(e,c),s(c,a),l||(h=e,p="submit",m=t[2],h.addEventListener(p,m,g),_=()=>h.removeEventListener(p,m,g),l=!0)},p(t,e){1&e&&(n.disabled=t[0]),1&e&&(o.disabled=t[0]),1&e&&(c.disabled=t[0])},d(t){t&&d(e),l=!1,_()}}}function C(t){let e;return{c(){e=f("div"),e.innerHTML='<p class="check svelte-1fq0jf8">✅</p> \n    <p>Awesome! You&#39;ll get a confirmation mail to really make sure you want this.</p>',m(e,"class","svelte-1fq0jf8")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function F(e){let n,r,o=!e[1]&&B(e),i=e[1]&&C();return{c(){o&&o.c(),n=p(),i&&i.c(),r=h("")},m(t,e){o&&o.m(t,e),u(t,n,e),i&&i.m(t,e),u(t,r,e)},p(t,[e]){t[1]?o&&(o.d(1),o=null):o?o.p(t,e):(o=B(t),o.c(),o.m(n.parentNode,n)),t[1]?i||(i=C(),i.c(),i.m(r.parentNode,r)):i&&(i.d(1),i=null)},i:t,o:t,d(t){o&&o.d(t),t&&d(n),i&&i.d(t),t&&d(r)}}}function L(t,e,n){var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function c(t){try{l(r.next(t))}catch(t){i(t)}}function a(t){try{l(r.throw(t))}catch(t){i(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,a)}l((r=r.apply(t,e||[])).next())}))};let o=!1,i=!1;return[o,i,function(t){return r(this,void 0,void 0,(function*(){t.preventDefault(),n(0,o=!0);const e=new FormData(t.target);yield fetch("https://app.convertkit.com/forms/2435121/subscriptions",{method:"post",body:e}),n(0,o=!1),n(1,i=!0)}))}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),S(this,t,L,F,i,{})}}({target:document.querySelector("#newsletter-signup")})}();
//# sourceMappingURL=bundle.js.map
