(function(l,r){if(!l||l.getElementById('livereloadscript'))return;r=l.createElement('script');r.async=1;r.src='//'+(self.location.host||'localhost').split(':')[0]+':35729/livereload.js?snipver=1';r.id='livereloadscript';l.getElementsByTagName('head')[0].appendChild(r)})(self.document);var app=(function(){'use strict';function noop(){}
function add_location(element,file,line,column,char){element.__svelte_meta={loc:{file,line,column,char}};}
function run(fn){return fn();}
function blank_object(){return Object.create(null);}
function run_all(fns){fns.forEach(run);}
function is_function(thing){return typeof thing==='function';}
function safe_not_equal(a,b){return a!=a?b==b:a!==b||((a&&typeof a==='object')||typeof a==='function');}
function is_empty(obj){return Object.keys(obj).length===0;}
let is_hydrating=false;function start_hydrating(){is_hydrating=true;}
function end_hydrating(){is_hydrating=false;}
function upper_bound(low,high,key,value){while(low<high){const mid=low+((high-low)>>1);if(key(mid)<=value){low=mid+1;}
else{high=mid;}}
return low;}
function init_hydrate(target){if(target.hydrate_init)
return;target.hydrate_init=true;const children=target.childNodes;const m=new Int32Array(children.length+1);const p=new Int32Array(children.length);m[0]=-1;let longest=0;for(let i=0;i<children.length;i++){const current=children[i].claim_order;const seqLen=upper_bound(1,longest+1,idx=>children[m[idx]].claim_order,current)-1;p[i]=m[seqLen]+1;const newLen=seqLen+1;m[newLen]=i;longest=Math.max(newLen,longest);}
const lis=[];const toMove=[];let last=children.length-1;for(let cur=m[longest]+1;cur!=0;cur=p[cur-1]){lis.push(children[cur-1]);for(;last>=cur;last--){toMove.push(children[last]);}
last--;}
for(;last>=0;last--){toMove.push(children[last]);}
lis.reverse();toMove.sort((a,b)=>a.claim_order-b.claim_order);for(let i=0,j=0;i<toMove.length;i++){while(j<lis.length&&toMove[i].claim_order>=lis[j].claim_order){j++;}
const anchor=j<lis.length?lis[j]:null;target.insertBefore(toMove[i],anchor);}}
function append(target,node){if(is_hydrating){init_hydrate(target);if((target.actual_end_child===undefined)||((target.actual_end_child!==null)&&(target.actual_end_child.parentElement!==target))){target.actual_end_child=target.firstChild;}
if(node!==target.actual_end_child){target.insertBefore(node,target.actual_end_child);}
else{target.actual_end_child=node.nextSibling;}}
else if(node.parentNode!==target){target.appendChild(node);}}
function insert(target,node,anchor){if(is_hydrating&&!anchor){append(target,node);}
else if(node.parentNode!==target||(anchor&&node.nextSibling!==anchor)){target.insertBefore(node,anchor||null);}}
function detach(node){node.parentNode.removeChild(node);}
function element(name){return document.createElement(name);}
function text(data){return document.createTextNode(data);}
function space(){return text(' ');}
function empty(){return text('');}
function listen(node,event,handler,options){node.addEventListener(event,handler,options);return()=>node.removeEventListener(event,handler,options);}
function attr(node,attribute,value){if(value==null)
node.removeAttribute(attribute);else if(node.getAttribute(attribute)!==value)
node.setAttribute(attribute,value);}
function children(element){return Array.from(element.childNodes);}
function custom_event(type,detail){const e=document.createEvent('CustomEvent');e.initCustomEvent(type,false,false,detail);return e;}
let current_component;function set_current_component(component){current_component=component;}
const dirty_components=[];const binding_callbacks=[];const render_callbacks=[];const flush_callbacks=[];const resolved_promise=Promise.resolve();let update_scheduled=false;function schedule_update(){if(!update_scheduled){update_scheduled=true;resolved_promise.then(flush);}}
function add_render_callback(fn){render_callbacks.push(fn);}
let flushing=false;const seen_callbacks=new Set();function flush(){if(flushing)
return;flushing=true;do{for(let i=0;i<dirty_components.length;i+=1){const component=dirty_components[i];set_current_component(component);update(component.$$);}
set_current_component(null);dirty_components.length=0;while(binding_callbacks.length)
binding_callbacks.pop()();for(let i=0;i<render_callbacks.length;i+=1){const callback=render_callbacks[i];if(!seen_callbacks.has(callback)){seen_callbacks.add(callback);callback();}}
render_callbacks.length=0;}while(dirty_components.length);while(flush_callbacks.length){flush_callbacks.pop()();}
update_scheduled=false;flushing=false;seen_callbacks.clear();}
function update($$){if($$.fragment!==null){$$.update();run_all($$.before_update);const dirty=$$.dirty;$$.dirty=[-1];$$.fragment&&$$.fragment.p($$.ctx,dirty);$$.after_update.forEach(add_render_callback);}}
const outroing=new Set();function transition_in(block,local){if(block&&block.i){outroing.delete(block);block.i(local);}}
function mount_component(component,target,anchor,customElement){const{fragment,on_mount,on_destroy,after_update}=component.$$;fragment&&fragment.m(target,anchor);if(!customElement){add_render_callback(()=>{const new_on_destroy=on_mount.map(run).filter(is_function);if(on_destroy){on_destroy.push(...new_on_destroy);}
else{run_all(new_on_destroy);}
component.$$.on_mount=[];});}
after_update.forEach(add_render_callback);}
function destroy_component(component,detaching){const $$=component.$$;if($$.fragment!==null){run_all($$.on_destroy);$$.fragment&&$$.fragment.d(detaching);$$.on_destroy=$$.fragment=null;$$.ctx=[];}}
function make_dirty(component,i){if(component.$$.dirty[0]===-1){dirty_components.push(component);schedule_update();component.$$.dirty.fill(0);}
component.$$.dirty[(i/31)|0]|=(1<<(i%31));}
function init(component,options,instance,create_fragment,not_equal,props,dirty=[-1]){const parent_component=current_component;set_current_component(component);const $$=component.$$={fragment:null,ctx:null,props,update:noop,not_equal,bound:blank_object(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(parent_component?parent_component.$$.context:options.context||[]),callbacks:blank_object(),dirty,skip_bound:false};let ready=false;$$.ctx=instance?instance(component,options.props||{},(i,ret,...rest)=>{const value=rest.length?rest[0]:ret;if($$.ctx&&not_equal($$.ctx[i],$$.ctx[i]=value)){if(!$$.skip_bound&&$$.bound[i])
$$.bound[i](value);if(ready)
make_dirty(component,i);}
return ret;}):[];$$.update();ready=true;run_all($$.before_update);$$.fragment=create_fragment?create_fragment($$.ctx):false;if(options.target){if(options.hydrate){start_hydrating();const nodes=children(options.target);$$.fragment&&$$.fragment.l(nodes);nodes.forEach(detach);}
else{$$.fragment&&$$.fragment.c();}
if(options.intro)
transition_in(component.$$.fragment);mount_component(component,options.target,options.anchor,options.customElement);end_hydrating();flush();}
set_current_component(parent_component);}
class SvelteComponent{$destroy(){destroy_component(this,1);this.$destroy=noop;}
$on(type,callback){const callbacks=(this.$$.callbacks[type]||(this.$$.callbacks[type]=[]));callbacks.push(callback);return()=>{const index=callbacks.indexOf(callback);if(index!==-1)
callbacks.splice(index,1);};}
$set($$props){if(this.$$set&&!is_empty($$props)){this.$$.skip_bound=true;this.$$set($$props);this.$$.skip_bound=false;}}}
function dispatch_dev(type,detail){document.dispatchEvent(custom_event(type,Object.assign({version:'3.38.3'},detail)));}
function append_dev(target,node){dispatch_dev('SvelteDOMInsert',{target,node});append(target,node);}
function insert_dev(target,node,anchor){dispatch_dev('SvelteDOMInsert',{target,node,anchor});insert(target,node,anchor);}
function detach_dev(node){dispatch_dev('SvelteDOMRemove',{node});detach(node);}
function listen_dev(node,event,handler,options,has_prevent_default,has_stop_propagation){const modifiers=options===true?['capture']:options?Array.from(Object.keys(options)):[];if(has_prevent_default)
modifiers.push('preventDefault');if(has_stop_propagation)
modifiers.push('stopPropagation');dispatch_dev('SvelteDOMAddEventListener',{node,event,handler,modifiers});const dispose=listen(node,event,handler,options);return()=>{dispatch_dev('SvelteDOMRemoveEventListener',{node,event,handler,modifiers});dispose();};}
function attr_dev(node,attribute,value){attr(node,attribute,value);if(value==null)
dispatch_dev('SvelteDOMRemoveAttribute',{node,attribute});else
dispatch_dev('SvelteDOMSetAttribute',{node,attribute,value});}
function prop_dev(node,property,value){node[property]=value;dispatch_dev('SvelteDOMSetProperty',{node,property,value});}
function validate_slots(name,slot,keys){for(const slot_key of Object.keys(slot)){if(!~keys.indexOf(slot_key)){console.warn(`<${name}> received an unexpected slot "${slot_key}".`);}}}
class SvelteComponentDev extends SvelteComponent{constructor(options){if(!options||(!options.target&&!options.$$inline)){throw new Error("'target' is a required option");}
super();}
$destroy(){super.$destroy();this.$destroy=()=>{console.warn('Component was already destroyed');};}
$capture_state(){}
$inject_state(){}}
const file="src/App.svelte";function create_if_block_1(ctx){let form;let input0;let t0;let input1;let t1;let button;let t2;let mounted;let dispose;const block={c:function create(){form=element("form");input0=element("input");t0=space();input1=element("input");t1=space();button=element("button");t2=text("Subscribe");attr_dev(input0,"type","text");attr_dev(input0,"name","fields[first_name]");attr_dev(input0,"placeholder","First name");input0.required=true;attr_dev(input0,"aria-required","true");attr_dev(input0,"aria-label","First name");input0.disabled=ctx[0];attr_dev(input0,"class","svelte-1fq0jf8");add_location(input0,file,28,4,1226);attr_dev(input1,"type","email");attr_dev(input1,"name","email_address");attr_dev(input1,"placeholder","Email address");input1.required=true;attr_dev(input1,"aria-required","true");attr_dev(input1,"aria-label","Email address");input1.disabled=ctx[0];attr_dev(input1,"class","svelte-1fq0jf8");add_location(input1,file,37,4,1425);attr_dev(button,"type","submit");button.disabled=ctx[0];attr_dev(button,"class","svelte-1fq0jf8");add_location(button,file,46,4,1626);attr_dev(form,"class","svelte-1fq0jf8");add_location(form,file,27,2,1190);},m:function mount(target,anchor){insert_dev(target,form,anchor);append_dev(form,input0);append_dev(form,t0);append_dev(form,input1);append_dev(form,t1);append_dev(form,button);append_dev(button,t2);if(!mounted){dispose=listen_dev(form,"submit",ctx[2],false,false,false);mounted=true;}},p:function update(ctx,dirty){if(dirty&1){prop_dev(input0,"disabled",ctx[0]);}
if(dirty&1){prop_dev(input1,"disabled",ctx[0]);}
if(dirty&1){prop_dev(button,"disabled",ctx[0]);}},d:function destroy(detaching){if(detaching)detach_dev(form);mounted=false;dispose();}};dispatch_dev("SvelteRegisterBlock",{block,id:create_if_block_1.name,type:"if",source:"(27:0) {#if !success}",ctx});return block;}
function create_if_block(ctx){let div;let p0;let t1;let p1;const block={c:function create(){div=element("div");p0=element("p");p0.textContent="✅";t1=space();p1=element("p");p1.textContent="Awesome! You'll get a confirmation mail to really make sure you want this.";attr_dev(p0,"class","check svelte-1fq0jf8");add_location(p0,file,51,4,1731);add_location(p1,file,52,4,1758);attr_dev(div,"class","svelte-1fq0jf8");add_location(div,file,50,2,1721);},m:function mount(target,anchor){insert_dev(target,div,anchor);append_dev(div,p0);append_dev(div,t1);append_dev(div,p1);},d:function destroy(detaching){if(detaching)detach_dev(div);}};dispatch_dev("SvelteRegisterBlock",{block,id:create_if_block.name,type:"if",source:"(50:0) {#if success}",ctx});return block;}
function create_fragment(ctx){let t;let if_block1_anchor;let if_block0=!ctx[1]&&create_if_block_1(ctx);let if_block1=ctx[1]&&create_if_block(ctx);const block={c:function create(){if(if_block0)if_block0.c();t=space();if(if_block1)if_block1.c();if_block1_anchor=empty();},l:function claim(nodes){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");},m:function mount(target,anchor){if(if_block0)if_block0.m(target,anchor);insert_dev(target,t,anchor);if(if_block1)if_block1.m(target,anchor);insert_dev(target,if_block1_anchor,anchor);},p:function update(ctx,[dirty]){if(!ctx[1]){if(if_block0){if_block0.p(ctx,dirty);}else{if_block0=create_if_block_1(ctx);if_block0.c();if_block0.m(t.parentNode,t);}}else if(if_block0){if_block0.d(1);if_block0=null;}
if(ctx[1]){if(if_block1);else{if_block1=create_if_block(ctx);if_block1.c();if_block1.m(if_block1_anchor.parentNode,if_block1_anchor);}}else if(if_block1){if_block1.d(1);if_block1=null;}},i:noop,o:noop,d:function destroy(detaching){if(if_block0)if_block0.d(detaching);if(detaching)detach_dev(t);if(if_block1)if_block1.d(detaching);if(detaching)detach_dev(if_block1_anchor);}};dispatch_dev("SvelteRegisterBlock",{block,id:create_fragment.name,type:"component",source:"",ctx});return block;}
function instance($$self,$$props,$$invalidate){let{$$slots:slots={},$$scope}=$$props;validate_slots("App",slots,[]);var __awaiter=this&&this.__awaiter||function(thisArg,_arguments,P,generator){function adopt(value){return value instanceof P?value:new P(function(resolve){resolve(value);});}
return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}
function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}
function step(result){result.done?resolve(result.value):adopt(result.value).then(fulfilled,rejected);}
step((generator=generator.apply(thisArg,_arguments||[])).next());});};let submitting=false;let success=false;function handleSubmit(event){return __awaiter(this,void 0,void 0,function*(){event.preventDefault();$$invalidate(0,submitting=true);const data=new FormData(event.target);yield fetch("https://app.convertkit.com/forms/2435121/subscriptions",{method:"post",body:data});$$invalidate(0,submitting=false);$$invalidate(1,success=true);});}
const writable_props=[];Object.keys($$props).forEach(key=>{if(!~writable_props.indexOf(key)&&key.slice(0,2)!=="$$")console.warn(`<App> was created with unknown prop '${key}'`);});$$self.$capture_state=()=>({__awaiter,submitting,success,handleSubmit});$$self.$inject_state=$$props=>{if("__awaiter"in $$props)__awaiter=$$props.__awaiter;if("submitting"in $$props)$$invalidate(0,submitting=$$props.submitting);if("success"in $$props)$$invalidate(1,success=$$props.success);};if($$props&&"$$inject"in $$props){$$self.$inject_state($$props.$$inject);}
return[submitting,success,handleSubmit];}
class App extends SvelteComponentDev{constructor(options){super(options);init(this,options,instance,create_fragment,safe_not_equal,{});dispatch_dev("SvelteRegisterComponent",{component:this,tagName:"App",options,id:create_fragment.name});}}
const app=new App({target:document.querySelector('#newsletter-signup'),props:{name:'world'}});return app;}());