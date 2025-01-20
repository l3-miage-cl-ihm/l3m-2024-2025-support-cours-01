import{$ as Hr,$a as ii,A as Br,Aa as Ye,B as Ot,Ba as Z,C as te,Ca as he,D as dn,Da as Ut,E as Tr,Ea as mt,F as Mr,Fa as Zr,G as yr,Ga as pn,H as J,Ha as ie,I as _r,Ia as Qr,J as N,Ja as Xr,K as A,Ka as Kr,L as ft,La as g,M as f,Ma as U,N as ye,Na as ei,O as br,Oa as D,P,Pa as v,Q as Cn,Qa as Nt,R as S,Ra as Gt,S as d,Sa as Pn,T as _e,Ta as ti,U as wr,Ua as xe,V as pt,Va as ni,W as q,Wa as An,X as Pt,Xa as F,Y as Ie,Ya as se,Z as In,Za as ri,_ as Fr,_a as Re,a as l,aa as W,ab as oi,b as p,ba as ne,bb as H,ca as hn,cb as vt,d as mr,da as Yr,db as si,e as Nr,ea as be,eb as Ei,f as an,fa as At,fb as Sn,g as Ln,ga as xr,gb as ai,h as z,ha as Rn,i as y,ia as kr,j as ee,ja as we,k as B,ka as jr,l as C,la as On,m as Te,ma as Jr,n as Gr,na as Fe,o as vr,oa as He,p as O,pa as b,q as ln,qa as V,r as _,ra as fn,s as Vr,sa as St,t as un,ta as gt,u as Dr,ua as $r,v as ce,va as w,w as de,wa as zr,x as Me,xa as qr,y as cn,ya as Wr,z as Ce,za as re}from"./chunk-D6VEUJKD.js";var Un=class extends oi{supportsDOMEvents=!0},mn=class n extends Un{static makeCurrent(){ii(new n)}onAndCancel(t,e,r){return t.addEventListener(e,r),()=>{t.removeEventListener(e,r)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){t.remove()}createElement(t,e){return e=e||this.getDefaultDocument(),e.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return e==="window"?window:e==="document"?t:e==="body"?t.body:null}getBaseHref(t){let e=Vo();return e==null?null:Do(e)}resetBaseElement(){ke=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return si(document.cookie,t)}},ke=null;function Vo(){return ke=ke||document.querySelector("base"),ke?ke.getAttribute("href"):null}function Do(n){return new URL(n,document.baseURI).pathname}var Bo=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(r){return new(r||n)};static \u0275prov=f({token:n,factory:n.\u0275fac})}return n})(),Nn=new P(""),Ci=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,r){this._zone=r,e.forEach(i=>{i.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,r,i){return this._findPluginFor(r).addEventListener(e,r,i)}getZone(){return this._zone}_findPluginFor(e){let r=this._eventNameToPlugin.get(e);if(r)return r;if(r=this._plugins.find(o=>o.supports(e)),!r)throw new A(5101,!1);return this._eventNameToPlugin.set(e,r),r}static \u0275fac=function(r){return new(r||n)(S(Nn),S(ne))};static \u0275prov=f({token:n,factory:n.\u0275fac})}return n})(),Dt=class{_doc;constructor(t){this._doc=t}manager},Vt="ng-app-id";function Li(n){for(let t of n)t.remove()}function li(n,t){let e=t.createElement("style");return e.textContent=n,e}function To(n,t,e,r){let i=n.head?.querySelectorAll(`style[${Vt}="${t}"],link[${Vt}="${t}"]`);if(i)for(let o of i)o.removeAttribute(Vt),o instanceof HTMLLinkElement?r.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Gn(n,t){let e=t.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}var Ii=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(e,r,i,o={}){this.doc=e,this.appId=r,this.nonce=i,this.isServer=Sn(o),To(e,r,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,r){for(let i of e)this.addUsage(i,this.inline,li);r?.forEach(i=>this.addUsage(i,this.external,Gn))}removeStyles(e,r){for(let i of e)this.removeUsage(i,this.inline);r?.forEach(i=>this.removeUsage(i,this.external))}addUsage(e,r,i){let o=r.get(e);o?o.usage++:r.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,i(e,this.doc)))})}removeUsage(e,r){let i=r.get(e);i&&(i.usage--,i.usage<=0&&(Li(i.elements),r.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Li(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[r,{elements:i}]of this.inline)i.push(this.addElement(e,li(r,this.doc)));for(let[r,{elements:i}]of this.external)i.push(this.addElement(e,Gn(r,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,r){return this.nonce&&r.setAttribute("nonce",this.nonce),this.isServer&&r.setAttribute(Vt,this.appId),e.appendChild(r)}static \u0275fac=function(r){return new(r||n)(S(H),S(Rn),S(On,8),S(we))};static \u0275prov=f({token:n,factory:n.\u0275fac})}return n})(),gn={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Vn=/%COMP%/g,hi="%COMP%",Mo=`_nghost-${hi}`,yo=`_ngcontent-${hi}`,_o=!0,bo=new P("",{providedIn:"root",factory:()=>_o});function wo(n){return yo.replace(Vn,n)}function Fo(n){return Mo.replace(Vn,n)}function Ri(n,t){return t.map(e=>e.replace(Vn,n))}var Bt=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,r,i,o,s,a,E,L=null){this.eventManager=e,this.sharedStylesHost=r,this.appId=i,this.removeStylesOnCompDestroy=o,this.doc=s,this.platformId=a,this.ngZone=E,this.nonce=L,this.platformIsServer=Sn(a),this.defaultRenderer=new je(e,s,E,this.platformIsServer)}createRenderer(e,r){if(!e||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===Fe.ShadowDom&&(r=p(l({},r),{encapsulation:Fe.Emulated}));let i=this.getOrCreateRenderer(e,r);return i instanceof Tt?i.applyToHost(e):i instanceof Je&&i.applyStyles(),i}getOrCreateRenderer(e,r){let i=this.rendererByCompId,o=i.get(r.id);if(!o){let s=this.doc,a=this.ngZone,E=this.eventManager,L=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,c=this.platformIsServer;switch(r.encapsulation){case Fe.Emulated:o=new Tt(E,L,r,this.appId,u,s,a,c);break;case Fe.ShadowDom:return new vn(E,L,e,r,s,a,this.nonce,c);default:o=new Je(E,L,r,u,s,a,c);break}i.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}static \u0275fac=function(r){return new(r||n)(S(Ci),S(Ii),S(Rn),S(bo),S(H),S(we),S(ne),S(On))};static \u0275prov=f({token:n,factory:n.\u0275fac})}return n})(),je=class{eventManager;doc;ngZone;platformIsServer;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,e,r,i){this.eventManager=t,this.doc=e,this.ngZone=r,this.platformIsServer=i}destroy(){}destroyNode=null;createElement(t,e){return e?this.doc.createElementNS(gn[e]||e,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,e){(ui(t)?t.content:t).appendChild(e)}insertBefore(t,e,r){t&&(ui(t)?t.content:t).insertBefore(e,r)}removeChild(t,e){e.remove()}selectRootElement(t,e){let r=typeof t=="string"?this.doc.querySelector(t):t;if(!r)throw new A(-5104,!1);return e||(r.textContent=""),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,r,i){if(i){e=i+":"+e;let o=gn[i];o?t.setAttributeNS(o,e,r):t.setAttribute(e,r)}else t.setAttribute(e,r)}removeAttribute(t,e,r){if(r){let i=gn[r];i?t.removeAttributeNS(i,e):t.removeAttribute(`${r}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,r,i){i&(He.DashCase|He.Important)?t.style.setProperty(e,r,i&He.Important?"important":""):t.style[e]=r}removeStyle(t,e,r){r&He.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,r){t!=null&&(t[e]=r)}setValue(t,e){t.nodeValue=e}listen(t,e,r){if(typeof t=="string"&&(t=Re().getGlobalEventTarget(this.doc,t),!t))throw new Error(`Unsupported event target ${t} for event ${e}`);return this.eventManager.addEventListener(t,e,this.decoratePreventDefault(r))}decoratePreventDefault(t){return e=>{if(e==="__ngUnwrap__")return t;(this.platformIsServer?this.ngZone.runGuarded(()=>t(e)):t(e))===!1&&e.preventDefault()}}};function ui(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var vn=class extends je{sharedStylesHost;hostEl;shadowRoot;constructor(t,e,r,i,o,s,a,E){super(t,o,s,E),this.sharedStylesHost=e,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let L=Ri(i.id,i.styles);for(let c of L){let h=document.createElement("style");a&&h.setAttribute("nonce",a),h.textContent=c,this.shadowRoot.appendChild(h)}let u=i.getExternalStyles?.();if(u)for(let c of u){let h=Gn(c,o);a&&h.setAttribute("nonce",a),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,r){return super.insertBefore(this.nodeOrShadowRoot(t),e,r)}removeChild(t,e){return super.removeChild(null,e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Je=class extends je{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,e,r,i,o,s,a,E){super(t,o,s,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=i,this.styles=E?Ri(E,r.styles):r.styles,this.styleUrls=r.getExternalStyles?.(E)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Tt=class extends Je{contentAttr;hostAttr;constructor(t,e,r,i,o,s,a,E){let L=i+"-"+r.id;super(t,e,r,o,s,a,E,L),this.contentAttr=wo(L),this.hostAttr=Fo(L)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,e){let r=super.createElement(t,e);return super.setAttribute(r,this.contentAttr,""),r}},Ho=(()=>{class n extends Dt{constructor(e){super(e)}supports(e){return!0}addEventListener(e,r,i){return e.addEventListener(r,i,!1),()=>this.removeEventListener(e,r,i)}removeEventListener(e,r,i){return e.removeEventListener(r,i)}static \u0275fac=function(r){return new(r||n)(S(H))};static \u0275prov=f({token:n,factory:n.\u0275fac})}return n})(),ci=["alt","control","meta","shift"],Yo={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},xo={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},ko=(()=>{class n extends Dt{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,r,i){let o=n.parseEventName(r),s=n.eventCallback(o.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Re().onAndCancel(e,o.domEventName,s))}static parseEventName(e){let r=e.toLowerCase().split("."),i=r.shift();if(r.length===0||!(i==="keydown"||i==="keyup"))return null;let o=n._normalizeKey(r.pop()),s="",a=r.indexOf("code");if(a>-1&&(r.splice(a,1),s="code."),ci.forEach(L=>{let u=r.indexOf(L);u>-1&&(r.splice(u,1),s+=L+".")}),s+=o,r.length!=0||o.length===0)return null;let E={};return E.domEventName=i,E.fullKey=s,E}static matchEventFullKeyCode(e,r){let i=Yo[e.key]||e.key,o="";return r.indexOf("code.")>-1&&(i=e.code,o="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),ci.forEach(s=>{if(s!==i){let a=xo[s];a(e)&&(o+=s+".")}}),o+=i,o===r)}static eventCallback(e,r,i){return o=>{n.matchEventFullKeyCode(o,e)&&i.runGuarded(()=>r(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(r){return new(r||n)(S(H))};static \u0275prov=f({token:n,factory:n.\u0275fac})}return n})();function Oi(n,t){return ni(l({rootComponent:n},jo(t)))}function jo(n){return{appProviders:[...Wo,...n?.providers??[]],platformProviders:qo}}function Jo(){mn.makeCurrent()}function $o(){return new hn}function zo(){return xr(document),document}var qo=[{provide:we,useValue:Ei},{provide:kr,useValue:Jo,multi:!0},{provide:H,useFactory:zo,deps:[]}];var Wo=[{provide:wr,useValue:"root"},{provide:hn,useFactory:$o,deps:[]},{provide:Nn,useClass:Ho,multi:!0,deps:[H,ne,we]},{provide:Nn,useClass:ko,multi:!0,deps:[H]},Bt,Ii,Ci,{provide:St,useExisting:Bt},{provide:ai,useClass:Bo,deps:[]},[]];var fi=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(r){return new(r||n)(S(H))};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var I="primary",at=Symbol("RouteTitle"),yn=class{params;constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){let e=this.params[t];return Array.isArray(e)?e[0]:e}return null}getAll(t){if(this.has(t)){let e=this.params[t];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Se(n){return new yn(n)}function Xo(n,t,e){let r=e.path.split("/");if(r.length>n.length||e.pathMatch==="full"&&(t.hasChildren()||r.length<n.length))return null;let i={};for(let o=0;o<r.length;o++){let s=r[o],a=n[o];if(s[0]===":")i[s.substring(1)]=a;else if(s!==a.path)return null}return{consumed:n.slice(0,r.length),posParams:i}}function Ko(n,t){if(n.length!==t.length)return!1;for(let e=0;e<n.length;++e)if(!$(n[e],t[e]))return!1;return!0}function $(n,t){let e=n?_n(n):void 0,r=t?_n(t):void 0;if(!e||!r||e.length!=r.length)return!1;let i;for(let o=0;o<e.length;o++)if(i=e[o],!Ni(n[i],t[i]))return!1;return!0}function _n(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Ni(n,t){if(Array.isArray(n)&&Array.isArray(t)){if(n.length!==t.length)return!1;let e=[...n].sort(),r=[...t].sort();return e.every((i,o)=>r[o]===i)}else return n===t}function Gi(n){return n.length>0?n[n.length-1]:null}function oe(n){return Gr(n)?n:mt(n)?B(Promise.resolve(n)):C(n)}var es={exact:Vi,subset:Di},vi={exact:ts,subset:ns,ignored:()=>!0};function pi(n,t,e){return es[e.paths](n.root,t.root,e.matrixParams)&&vi[e.queryParams](n.queryParams,t.queryParams)&&!(e.fragment==="exact"&&n.fragment!==t.fragment)}function ts(n,t){return $(n,t)}function Vi(n,t,e){if(!Le(n.segments,t.segments)||!_t(n.segments,t.segments,e)||n.numberOfChildren!==t.numberOfChildren)return!1;for(let r in t.children)if(!n.children[r]||!Vi(n.children[r],t.children[r],e))return!1;return!0}function ns(n,t){return Object.keys(t).length<=Object.keys(n).length&&Object.keys(t).every(e=>Ni(n[e],t[e]))}function Di(n,t,e){return Bi(n,t,t.segments,e)}function Bi(n,t,e,r){if(n.segments.length>e.length){let i=n.segments.slice(0,e.length);return!(!Le(i,e)||t.hasChildren()||!_t(i,e,r))}else if(n.segments.length===e.length){if(!Le(n.segments,e)||!_t(n.segments,e,r))return!1;for(let i in t.children)if(!n.children[i]||!Di(n.children[i],t.children[i],r))return!1;return!0}else{let i=e.slice(0,n.segments.length),o=e.slice(n.segments.length);return!Le(n.segments,i)||!_t(n.segments,i,r)||!n.children[I]?!1:Bi(n.children[I],t,o,r)}}function _t(n,t,e){return t.every((r,i)=>vi[e](n[i].parameters,r.parameters))}var X=class{root;queryParams;fragment;_queryParamMap;constructor(t=new R([],{}),e={},r=null){this.root=t,this.queryParams=e,this.fragment=r}get queryParamMap(){return this._queryParamMap??=Se(this.queryParams),this._queryParamMap}toString(){return os.serialize(this)}},R=class{segments;children;parent=null;constructor(t,e){this.segments=t,this.children=e,Object.values(e).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return bt(this)}},ae=class{path;parameters;_parameterMap;constructor(t,e){this.path=t,this.parameters=e}get parameterMap(){return this._parameterMap??=Se(this.parameters),this._parameterMap}toString(){return Mi(this)}};function rs(n,t){return Le(n,t)&&n.every((e,r)=>$(e.parameters,t[r].parameters))}function Le(n,t){return n.length!==t.length?!1:n.every((e,r)=>e.path===t[r].path)}function is(n,t){let e=[];return Object.entries(n.children).forEach(([r,i])=>{r===I&&(e=e.concat(t(i,r)))}),Object.entries(n.children).forEach(([r,i])=>{r!==I&&(e=e.concat(t(i,r)))}),e}var ar=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275prov=f({token:n,factory:()=>new Xe,providedIn:"root"})}return n})(),Xe=class{parse(t){let e=new wn(t);return new X(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(t){let e=`/${$e(t.root,!0)}`,r=as(t.queryParams),i=typeof t.fragment=="string"?`#${ss(t.fragment)}`:"";return`${e}${r}${i}`}},os=new Xe;function bt(n){return n.segments.map(t=>Mi(t)).join("/")}function $e(n,t){if(!n.hasChildren())return bt(n);if(t){let e=n.children[I]?$e(n.children[I],!1):"",r=[];return Object.entries(n.children).forEach(([i,o])=>{i!==I&&r.push(`${i}:${$e(o,!1)}`)}),r.length>0?`${e}(${r.join("//")})`:e}else{let e=is(n,(r,i)=>i===I?[$e(n.children[I],!1)]:[`${i}:${$e(r,!1)}`]);return Object.keys(n.children).length===1&&n.children[I]!=null?`${bt(n)}/${e[0]}`:`${bt(n)}/(${e.join("//")})`}}function Ti(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Mt(n){return Ti(n).replace(/%3B/gi,";")}function ss(n){return encodeURI(n)}function bn(n){return Ti(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function wt(n){return decodeURIComponent(n)}function Pi(n){return wt(n.replace(/\+/g,"%20"))}function Mi(n){return`${bn(n.path)}${Es(n.parameters)}`}function Es(n){return Object.entries(n).map(([t,e])=>`;${bn(t)}=${bn(e)}`).join("")}function as(n){let t=Object.entries(n).map(([e,r])=>Array.isArray(r)?r.map(i=>`${Mt(e)}=${Mt(i)}`).join("&"):`${Mt(e)}=${Mt(r)}`).filter(e=>e);return t.length?`?${t.join("&")}`:""}var Ls=/^[^\/()?;#]+/;function Dn(n){let t=n.match(Ls);return t?t[0]:""}var ls=/^[^\/()?;=#]+/;function us(n){let t=n.match(ls);return t?t[0]:""}var cs=/^[^=?&#]+/;function ds(n){let t=n.match(cs);return t?t[0]:""}var Cs=/^[^&#]+/;function Is(n){let t=n.match(Cs);return t?t[0]:""}var wn=class{url;remaining;constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new R([],{}):new R([],this.parseChildren())}parseQueryParams(){let t={};if(this.consumeOptional("?"))do this.parseQueryParam(t);while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1)),(t.length>0||Object.keys(e).length>0)&&(r[I]=new R(t,e)),r}parseSegment(){let t=Dn(this.remaining);if(t===""&&this.peekStartsWith(";"))throw new A(4009,!1);return this.capture(t),new ae(wt(t),this.parseMatrixParams())}parseMatrixParams(){let t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){let e=us(this.remaining);if(!e)return;this.capture(e);let r="";if(this.consumeOptional("=")){let i=Dn(this.remaining);i&&(r=i,this.capture(r))}t[wt(e)]=wt(r)}parseQueryParam(t){let e=ds(this.remaining);if(!e)return;this.capture(e);let r="";if(this.consumeOptional("=")){let s=Is(this.remaining);s&&(r=s,this.capture(r))}let i=Pi(e),o=Pi(r);if(t.hasOwnProperty(i)){let s=t[i];Array.isArray(s)||(s=[s],t[i]=s),s.push(o)}else t[i]=o}parseParens(t){let e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Dn(this.remaining),i=this.remaining[r.length];if(i!=="/"&&i!==")"&&i!==";")throw new A(4010,!1);let o;r.indexOf(":")>-1?(o=r.slice(0,r.indexOf(":")),this.capture(o),this.capture(":")):t&&(o=I);let s=this.parseChildren();e[o]=Object.keys(s).length===1?s[I]:new R([],s),this.consumeOptional("//")}return e}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return this.peekStartsWith(t)?(this.remaining=this.remaining.substring(t.length),!0):!1}capture(t){if(!this.consumeOptional(t))throw new A(4011,!1)}};function yi(n){return n.segments.length>0?new R([],{[I]:n}):n}function _i(n){let t={};for(let[r,i]of Object.entries(n.children)){let o=_i(i);if(r===I&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))t[s]=a;else(o.segments.length>0||o.hasChildren())&&(t[r]=o)}let e=new R(n.segments,t);return hs(e)}function hs(n){if(n.numberOfChildren===1&&n.children[I]){let t=n.children[I];return new R(n.segments.concat(t.segments),t.children)}return n}function Ke(n){return n instanceof X}function Rs(n,t,e=null,r=null){let i=bi(n);return wi(i,t,e,r)}function bi(n){let t;function e(o){let s={};for(let E of o.children){let L=e(E);s[E.outlet]=L}let a=new R(o.url,s);return o===n&&(t=a),a}let r=e(n.root),i=yi(r);return t??i}function wi(n,t,e,r){let i=n;for(;i.parent;)i=i.parent;if(t.length===0)return Bn(i,i,i,e,r);let o=Os(t);if(o.toRoot())return Bn(i,i,new R([],{}),e,r);let s=fs(o,i,n),a=s.processChildren?We(s.segmentGroup,s.index,o.commands):Hi(s.segmentGroup,s.index,o.commands);return Bn(i,s.segmentGroup,a,e,r)}function Ft(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function et(n){return typeof n=="object"&&n!=null&&n.outlets}function Bn(n,t,e,r,i){let o={};r&&Object.entries(r).forEach(([E,L])=>{o[E]=Array.isArray(L)?L.map(u=>`${u}`):`${L}`});let s;n===t?s=e:s=Fi(n,t,e);let a=yi(_i(s));return new X(a,o,i)}function Fi(n,t,e){let r={};return Object.entries(n.children).forEach(([i,o])=>{o===t?r[i]=e:r[i]=Fi(o,t,e)}),new R(n.segments,r)}var Ht=class{isAbsolute;numberOfDoubleDots;commands;constructor(t,e,r){if(this.isAbsolute=t,this.numberOfDoubleDots=e,this.commands=r,t&&r.length>0&&Ft(r[0]))throw new A(4003,!1);let i=r.find(et);if(i&&i!==Gi(r))throw new A(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Os(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Ht(!0,0,n);let t=0,e=!1,r=n.reduce((i,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([E,L])=>{a[E]=typeof L=="string"?L.split("/"):L}),[...i,{outlets:a}]}if(o.segmentPath)return[...i,o.segmentPath]}return typeof o!="string"?[...i,o]:s===0?(o.split("/").forEach((a,E)=>{E==0&&a==="."||(E==0&&a===""?e=!0:a===".."?t++:a!=""&&i.push(a))}),i):[...i,o]},[]);return new Ht(e,t,r)}var pe=class{segmentGroup;processChildren;index;constructor(t,e,r){this.segmentGroup=t,this.processChildren=e,this.index=r}};function fs(n,t,e){if(n.isAbsolute)return new pe(t,!0,0);if(!e)return new pe(t,!1,NaN);if(e.parent===null)return new pe(e,!0,0);let r=Ft(n.commands[0])?0:1,i=e.segments.length-1+r;return ps(e,i,n.numberOfDoubleDots)}function ps(n,t,e){let r=n,i=t,o=e;for(;o>i;){if(o-=i,r=r.parent,!r)throw new A(4005,!1);i=r.segments.length}return new pe(r,!1,i-o)}function Ps(n){return et(n[0])?n[0].outlets:{[I]:n}}function Hi(n,t,e){if(n??=new R([],{}),n.segments.length===0&&n.hasChildren())return We(n,t,e);let r=As(n,t,e),i=e.slice(r.commandIndex);if(r.match&&r.pathIndex<n.segments.length){let o=new R(n.segments.slice(0,r.pathIndex),{});return o.children[I]=new R(n.segments.slice(r.pathIndex),n.children),We(o,0,i)}else return r.match&&i.length===0?new R(n.segments,{}):r.match&&!n.hasChildren()?Fn(n,t,e):r.match?We(n,0,i):Fn(n,t,e)}function We(n,t,e){if(e.length===0)return new R(n.segments,{});{let r=Ps(e),i={};if(Object.keys(r).some(o=>o!==I)&&n.children[I]&&n.numberOfChildren===1&&n.children[I].segments.length===0){let o=We(n.children[I],t,e);return new R(n.segments,o.children)}return Object.entries(r).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(i[o]=Hi(n.children[o],t,s))}),Object.entries(n.children).forEach(([o,s])=>{r[o]===void 0&&(i[o]=s)}),new R(n.segments,i)}}function As(n,t,e){let r=0,i=t,o={match:!1,pathIndex:0,commandIndex:0};for(;i<n.segments.length;){if(r>=e.length)return o;let s=n.segments[i],a=e[r];if(et(a))break;let E=`${a}`,L=r<e.length-1?e[r+1]:null;if(i>0&&E===void 0)break;if(E&&L&&typeof L=="object"&&L.outlets===void 0){if(!Si(E,L,s))return o;r+=2}else{if(!Si(E,{},s))return o;r++}i++}return{match:!0,pathIndex:i,commandIndex:r}}function Fn(n,t,e){let r=n.segments.slice(0,t),i=0;for(;i<e.length;){let o=e[i];if(et(o)){let E=Ss(o.outlets);return new R(r,E)}if(i===0&&Ft(e[0])){let E=n.segments[t];r.push(new ae(E.path,Ai(e[0]))),i++;continue}let s=et(o)?o.outlets[I]:`${o}`,a=i<e.length-1?e[i+1]:null;s&&a&&Ft(a)?(r.push(new ae(s,Ai(a))),i+=2):(r.push(new ae(s,{})),i++)}return new R(r,{})}function Ss(n){let t={};return Object.entries(n).forEach(([e,r])=>{typeof r=="string"&&(r=[r]),r!==null&&(t[e]=Fn(new R([],{}),0,r))}),t}function Ai(n){let t={};return Object.entries(n).forEach(([e,r])=>t[e]=`${r}`),t}function Si(n,t,e){return n==e.path&&$(t,e.parameters)}var Ze="imperative",m=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}(m||{}),Y=class{id;url;constructor(t,e){this.id=t,this.url=e}},tt=class extends Y{type=m.NavigationStart;navigationTrigger;restoredState;constructor(t,e,r="imperative",i=null){super(t,e),this.navigationTrigger=r,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},le=class extends Y{urlAfterRedirects;type=m.NavigationEnd;constructor(t,e,r){super(t,e),this.urlAfterRedirects=r}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},M=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(M||{}),Hn=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(Hn||{}),Q=class extends Y{reason;code;type=m.NavigationCancel;constructor(t,e,r,i){super(t,e),this.reason=r,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},ue=class extends Y{reason;code;type=m.NavigationSkipped;constructor(t,e,r,i){super(t,e),this.reason=r,this.code=i}},nt=class extends Y{error;target;type=m.NavigationError;constructor(t,e,r,i){super(t,e),this.error=r,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Yt=class extends Y{urlAfterRedirects;state;type=m.RoutesRecognized;constructor(t,e,r,i){super(t,e),this.urlAfterRedirects=r,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Yn=class extends Y{urlAfterRedirects;state;type=m.GuardsCheckStart;constructor(t,e,r,i){super(t,e),this.urlAfterRedirects=r,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},xn=class extends Y{urlAfterRedirects;state;shouldActivate;type=m.GuardsCheckEnd;constructor(t,e,r,i,o){super(t,e),this.urlAfterRedirects=r,this.state=i,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},kn=class extends Y{urlAfterRedirects;state;type=m.ResolveStart;constructor(t,e,r,i){super(t,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},jn=class extends Y{urlAfterRedirects;state;type=m.ResolveEnd;constructor(t,e,r,i){super(t,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Jn=class{route;type=m.RouteConfigLoadStart;constructor(t){this.route=t}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},$n=class{route;type=m.RouteConfigLoadEnd;constructor(t){this.route=t}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},zn=class{snapshot;type=m.ChildActivationStart;constructor(t){this.snapshot=t}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},qn=class{snapshot;type=m.ChildActivationEnd;constructor(t){this.snapshot=t}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Wn=class{snapshot;type=m.ActivationStart;constructor(t){this.snapshot=t}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Zn=class{snapshot;type=m.ActivationEnd;constructor(t){this.snapshot=t}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var rt=class{},ge=class{url;navigationBehaviorOptions;constructor(t,e){this.url=t,this.navigationBehaviorOptions=e}};function gs(n,t){return n.providers&&!n._injector&&(n._injector=Wr(n.providers,t,`Route: ${n.path}`)),n._injector??t}function k(n){return n.outlet||I}function Us(n,t){let e=n.filter(r=>k(r)===t);return e.push(...n.filter(r=>k(r)!==t)),e}function Lt(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let t=n.parent;t;t=t.parent){let e=t.routeConfig;if(e?._loadedInjector)return e._loadedInjector;if(e?._injector)return e._injector}return null}var Qn=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return Lt(this.route?.snapshot)??this.rootInjector}constructor(t){this.rootInjector=t,this.children=new qt(this.rootInjector)}},qt=(()=>{class n{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,r){let i=this.getOrCreateContext(e);i.outlet=r,this.contexts.set(e,i)}onChildOutletDestroyed(e){let r=this.getContext(e);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let r=this.getContext(e);return r||(r=new Qn(this.rootInjector),this.contexts.set(e,r)),r}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(r){return new(r||n)(S(pt))};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),xt=class{_root;constructor(t){this._root=t}get root(){return this._root.value}parent(t){let e=this.pathFromRoot(t);return e.length>1?e[e.length-2]:null}children(t){let e=Xn(t,this._root);return e?e.children.map(r=>r.value):[]}firstChild(t){let e=Xn(t,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(t){let e=Kn(t,this._root);return e.length<2?[]:e[e.length-2].children.map(i=>i.value).filter(i=>i!==t)}pathFromRoot(t){return Kn(t,this._root).map(e=>e.value)}};function Xn(n,t){if(n===t.value)return t;for(let e of t.children){let r=Xn(n,e);if(r)return r}return null}function Kn(n,t){if(n===t.value)return[t];for(let e of t.children){let r=Kn(n,e);if(r.length)return r.unshift(t),r}return[]}var T=class{value;children;constructor(t,e){this.value=t,this.children=e}toString(){return`TreeNode(${this.value})`}};function fe(n){let t={};return n&&n.children.forEach(e=>t[e.value.outlet]=e),t}var kt=class extends xt{snapshot;constructor(t,e){super(t),this.snapshot=e,Lr(this,t)}toString(){return this.snapshot.toString()}};function Yi(n){let t=ms(n),e=new y([new ae("",{})]),r=new y({}),i=new y({}),o=new y({}),s=new y(""),a=new Ue(e,r,o,s,i,I,n,t.root);return a.snapshot=t.root,new kt(new T(a,[]),t)}function ms(n){let t={},e={},r={},i="",o=new Pe([],t,r,i,e,I,n,null,{});return new Jt("",new T(o,[]))}var Ue=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(t,e,r,i,o,s,a,E){this.urlSubject=t,this.paramsSubject=e,this.queryParamsSubject=r,this.fragmentSubject=i,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=E,this.title=this.dataSubject?.pipe(O(L=>L[at]))??C(void 0),this.url=t,this.params=e,this.queryParams=r,this.fragment=i,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(O(t=>Se(t))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(O(t=>Se(t))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function jt(n,t,e="emptyOnly"){let r,{routeConfig:i}=n;return t!==null&&(e==="always"||i?.path===""||!t.component&&!t.routeConfig?.loadComponent)?r={params:l(l({},t.params),n.params),data:l(l({},t.data),n.data),resolve:l(l(l(l({},n.data),t.data),i?.data),n._resolvedData)}:r={params:l({},n.params),data:l({},n.data),resolve:l(l({},n.data),n._resolvedData??{})},i&&ki(i)&&(r.resolve[at]=i.title),r}var Pe=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[at]}constructor(t,e,r,i,o,s,a,E,L){this.url=t,this.params=e,this.queryParams=r,this.fragment=i,this.data=o,this.outlet=s,this.component=a,this.routeConfig=E,this._resolve=L}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Se(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Se(this.queryParams),this._queryParamMap}toString(){let t=this.url.map(r=>r.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${t}', path:'${e}')`}},Jt=class extends xt{url;constructor(t,e){super(e),this.url=t,Lr(this,e)}toString(){return xi(this._root)}};function Lr(n,t){t.value._routerState=n,t.children.forEach(e=>Lr(n,e))}function xi(n){let t=n.children.length>0?` { ${n.children.map(xi).join(", ")} } `:"";return`${n.value}${t}`}function Tn(n){if(n.snapshot){let t=n.snapshot,e=n._futureSnapshot;n.snapshot=e,$(t.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),t.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),$(t.params,e.params)||n.paramsSubject.next(e.params),Ko(t.url,e.url)||n.urlSubject.next(e.url),$(t.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function er(n,t){let e=$(n.params,t.params)&&rs(n.url,t.url),r=!n.parent!=!t.parent;return e&&!r&&(!n.parent||er(n.parent,t.parent))}function ki(n){return typeof n.title=="string"||n.title===null}var Ns=new P(""),Gs=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=I;activateEvents=new W;deactivateEvents=new W;attachEvents=new W;detachEvents=new W;routerOutletData=be(void 0);parentContexts=d(qt);location=d($r);changeDetector=d(xe);inputBinder=d(lr,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:r,previousValue:i}=e.name;if(r)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new A(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new A(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new A(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,r){this.activated=e,this._activatedRoute=r,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,r){if(this.isActivated)throw new A(4013,!1);this._activatedRoute=e;let i=this.location,s=e.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,E=new tr(e,a,i.injector,this.routerOutletData);this.activated=i.createComponent(s,{index:i.length,injector:E,environmentInjector:r}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(r){return new(r||n)};static \u0275dir=Z({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Pt]})}return n})(),tr=class n{route;childContexts;parent;outletData;__ngOutletInjector(t){return new n(this.route,this.childContexts,t,this.outletData)}constructor(t,e,r,i){this.route=t,this.childContexts=e,this.parent=r,this.outletData=i}get(t,e){return t===Ue?this.route:t===qt?this.childContexts:t===Ns?this.outletData:this.parent.get(t,e)}},lr=new P("");function vs(n,t,e){let r=it(n,t._root,e?e._root:void 0);return new kt(r,t)}function it(n,t,e){if(e&&n.shouldReuseRoute(t.value,e.value.snapshot)){let r=e.value;r._futureSnapshot=t.value;let i=Vs(n,t,e);return new T(r,i)}else{if(n.shouldAttach(t.value)){let o=n.retrieve(t.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=t.value,s.children=t.children.map(a=>it(n,a)),s}}let r=Ds(t.value),i=t.children.map(o=>it(n,o));return new T(r,i)}}function Vs(n,t,e){return t.children.map(r=>{for(let i of e.children)if(n.shouldReuseRoute(r.value,i.value.snapshot))return it(n,r,i);return it(n,r)})}function Ds(n){return new Ue(new y(n.url),new y(n.params),new y(n.queryParams),new y(n.fragment),new y(n.data),n.outlet,n.component,n)}var ot=class{redirectTo;navigationBehaviorOptions;constructor(t,e){this.redirectTo=t,this.navigationBehaviorOptions=e}},ji="ngNavigationCancelingError";function $t(n,t){let{redirectTo:e,navigationBehaviorOptions:r}=Ke(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,i=Ji(!1,M.Redirect);return i.url=e,i.navigationBehaviorOptions=r,i}function Ji(n,t){let e=new Error(`NavigationCancelingError: ${n||""}`);return e[ji]=!0,e.cancellationCode=t,e}function Bs(n){return $i(n)&&Ke(n.url)}function $i(n){return!!n&&n[ji]}var Ts=(n,t,e,r)=>O(i=>(new nr(t,i.targetRouterState,i.currentRouterState,e,r).activate(n),i)),nr=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(t,e,r,i,o){this.routeReuseStrategy=t,this.futureState=e,this.currState=r,this.forwardEvent=i,this.inputBindingEnabled=o}activate(t){let e=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,r,t),Tn(this.futureState.root),this.activateChildRoutes(e,r,t)}deactivateChildRoutes(t,e,r){let i=fe(e);t.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,i[s],r),delete i[s]}),Object.values(i).forEach(o=>{this.deactivateRouteAndItsChildren(o,r)})}deactivateRoutes(t,e,r){let i=t.value,o=e?e.value:null;if(i===o)if(i.component){let s=r.getContext(i.outlet);s&&this.deactivateChildRoutes(t,e,s.children)}else this.deactivateChildRoutes(t,e,r);else o&&this.deactivateRouteAndItsChildren(e,r)}deactivateRouteAndItsChildren(t,e){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,e):this.deactivateRouteAndOutlet(t,e)}detachAndStoreRouteSubtree(t,e){let r=e.getContext(t.value.outlet),i=r&&t.value.component?r.children:e,o=fe(t);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,i);if(r&&r.outlet){let s=r.outlet.detach(),a=r.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:s,route:t,contexts:a})}}deactivateRouteAndOutlet(t,e){let r=e.getContext(t.value.outlet),i=r&&t.value.component?r.children:e,o=fe(t);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,i);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null)}activateChildRoutes(t,e,r){let i=fe(e);t.children.forEach(o=>{this.activateRoutes(o,i[o.value.outlet],r),this.forwardEvent(new Zn(o.value.snapshot))}),t.children.length&&this.forwardEvent(new qn(t.value.snapshot))}activateRoutes(t,e,r){let i=t.value,o=e?e.value:null;if(Tn(i),i===o)if(i.component){let s=r.getOrCreateContext(i.outlet);this.activateChildRoutes(t,e,s.children)}else this.activateChildRoutes(t,e,r);else if(i.component){let s=r.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let a=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Tn(a.route.value),this.activateChildRoutes(t,null,s.children)}else s.attachRef=null,s.route=i,s.outlet&&s.outlet.activateWith(i,s.injector),this.activateChildRoutes(t,null,s.children)}else this.activateChildRoutes(t,null,r)}},zt=class{path;route;constructor(t){this.path=t,this.route=this.path[this.path.length-1]}},Ae=class{component;route;constructor(t,e){this.component=t,this.route=e}};function Ms(n,t,e){let r=n._root,i=t?t._root:null;return ze(r,i,e,[r.value])}function ys(n){let t=n.routeConfig?n.routeConfig.canActivateChild:null;return!t||t.length===0?null:{node:n,guards:t}}function Ne(n,t){let e=Symbol(),r=t.get(n,e);return r===e?typeof n=="function"&&!br(n)?n:t.get(n):r}function ze(n,t,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=fe(t);return n.children.forEach(s=>{_s(s,o[s.value.outlet],e,r.concat([s.value]),i),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>Qe(a,e.getContext(s),i)),i}function _s(n,t,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,s=t?t.value:null,a=e?e.getContext(n.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let E=bs(s,o,o.routeConfig.runGuardsAndResolvers);E?i.canActivateChecks.push(new zt(r)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?ze(n,t,a?a.children:null,r,i):ze(n,t,e,r,i),E&&a&&a.outlet&&a.outlet.isActivated&&i.canDeactivateChecks.push(new Ae(a.outlet.component,s))}else s&&Qe(t,a,i),i.canActivateChecks.push(new zt(r)),o.component?ze(n,null,a?a.children:null,r,i):ze(n,null,e,r,i);return i}function bs(n,t,e){if(typeof e=="function")return e(n,t);switch(e){case"pathParamsChange":return!Le(n.url,t.url);case"pathParamsOrQueryParamsChange":return!Le(n.url,t.url)||!$(n.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!er(n,t)||!$(n.queryParams,t.queryParams);case"paramsChange":default:return!er(n,t)}}function Qe(n,t,e){let r=fe(n),i=n.value;Object.entries(r).forEach(([o,s])=>{i.component?t?Qe(s,t.children.getContext(o),e):Qe(s,null,e):Qe(s,t,e)}),i.component?t&&t.outlet&&t.outlet.isActivated?e.canDeactivateChecks.push(new Ae(t.outlet.component,i)):e.canDeactivateChecks.push(new Ae(null,i)):e.canDeactivateChecks.push(new Ae(null,i))}function lt(n){return typeof n=="function"}function ws(n){return typeof n=="boolean"}function Fs(n){return n&&lt(n.canLoad)}function Hs(n){return n&&lt(n.canActivate)}function Ys(n){return n&&lt(n.canActivateChild)}function xs(n){return n&&lt(n.canDeactivate)}function ks(n){return n&&lt(n.canMatch)}function zi(n){return n instanceof vr||n?.name==="EmptyError"}var yt=Symbol("INITIAL_VALUE");function me(){return J(n=>ln(n.map(t=>t.pipe(Ce(1),yr(yt)))).pipe(O(t=>{for(let e of t)if(e!==!0){if(e===yt)return yt;if(e===!1||js(e))return e}return!0}),ce(t=>t!==yt),Ce(1)))}function js(n){return Ke(n)||n instanceof ot}function Js(n,t){return _(e=>{let{targetSnapshot:r,currentSnapshot:i,guards:{canActivateChecks:o,canDeactivateChecks:s}}=e;return s.length===0&&o.length===0?C(p(l({},e),{guardsResult:!0})):$s(s,r,i,n).pipe(_(a=>a&&ws(a)?zs(r,o,n,t):C(a)),O(a=>p(l({},e),{guardsResult:a})))})}function $s(n,t,e,r){return B(n).pipe(_(i=>Xs(i.component,i.route,e,t,r)),te(i=>i!==!0,!0))}function zs(n,t,e,r){return B(t).pipe(Me(i=>Vr(Ws(i.route.parent,r),qs(i.route,r),Qs(n,i.path,e),Zs(n,i.route,e))),te(i=>i!==!0,!0))}function qs(n,t){return n!==null&&t&&t(new Wn(n)),C(!0)}function Ws(n,t){return n!==null&&t&&t(new zn(n)),C(!0)}function Zs(n,t,e){let r=t.routeConfig?t.routeConfig.canActivate:null;if(!r||r.length===0)return C(!0);let i=r.map(o=>un(()=>{let s=Lt(t)??e,a=Ne(o,s),E=Hs(a)?a.canActivate(t,n):q(s,()=>a(t,n));return oe(E).pipe(te())}));return C(i).pipe(me())}function Qs(n,t,e){let r=t[t.length-1],o=t.slice(0,t.length-1).reverse().map(s=>ys(s)).filter(s=>s!==null).map(s=>un(()=>{let a=s.guards.map(E=>{let L=Lt(s.node)??e,u=Ne(E,L),c=Ys(u)?u.canActivateChild(r,n):q(L,()=>u(r,n));return oe(c).pipe(te())});return C(a).pipe(me())}));return C(o).pipe(me())}function Xs(n,t,e,r,i){let o=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!o||o.length===0)return C(!0);let s=o.map(a=>{let E=Lt(t)??i,L=Ne(a,E),u=xs(L)?L.canDeactivate(n,t,e,r):q(E,()=>L(n,t,e,r));return oe(u).pipe(te())});return C(s).pipe(me())}function Ks(n,t,e,r){let i=t.canLoad;if(i===void 0||i.length===0)return C(!0);let o=i.map(s=>{let a=Ne(s,n),E=Fs(a)?a.canLoad(t,e):q(n,()=>a(t,e));return oe(E)});return C(o).pipe(me(),qi(r))}function qi(n){return Nr(N(t=>{if(typeof t!="boolean")throw $t(n,t)}),O(t=>t===!0))}function eE(n,t,e,r){let i=t.canMatch;if(!i||i.length===0)return C(!0);let o=i.map(s=>{let a=Ne(s,n),E=ks(a)?a.canMatch(t,e):q(n,()=>a(t,e));return oe(E)});return C(o).pipe(me(),qi(r))}var st=class{segmentGroup;constructor(t){this.segmentGroup=t||null}},Et=class extends Error{urlTree;constructor(t){super(),this.urlTree=t}};function Oe(n){return Te(new st(n))}function tE(n){return Te(new A(4e3,!1))}function nE(n){return Te(Ji(!1,M.GuardRejected))}var rr=class{urlSerializer;urlTree;constructor(t,e){this.urlSerializer=t,this.urlTree=e}lineralizeSegments(t,e){let r=[],i=e.root;for(;;){if(r=r.concat(i.segments),i.numberOfChildren===0)return C(r);if(i.numberOfChildren>1||!i.children[I])return tE(`${t.redirectTo}`);i=i.children[I]}}applyRedirectCommands(t,e,r,i,o){if(typeof e!="string"){let a=e,{queryParams:E,fragment:L,routeConfig:u,url:c,outlet:h,params:j,data:G,title:K}=i,x=q(o,()=>a({params:j,data:G,queryParams:E,fragment:L,routeConfig:u,url:c,outlet:h,title:K}));if(x instanceof X)throw new Et(x);e=x}let s=this.applyRedirectCreateUrlTree(e,this.urlSerializer.parse(e),t,r);if(e[0]==="/")throw new Et(s);return s}applyRedirectCreateUrlTree(t,e,r,i){let o=this.createSegmentGroup(t,e.root,r,i);return new X(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(t,e){let r={};return Object.entries(t).forEach(([i,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);r[i]=e[a]}else r[i]=o}),r}createSegmentGroup(t,e,r,i){let o=this.createSegments(t,e.segments,r,i),s={};return Object.entries(e.children).forEach(([a,E])=>{s[a]=this.createSegmentGroup(t,E,r,i)}),new R(o,s)}createSegments(t,e,r,i){return e.map(o=>o.path[0]===":"?this.findPosParam(t,o,i):this.findOrReturn(o,r))}findPosParam(t,e,r){let i=r[e.path.substring(1)];if(!i)throw new A(4001,!1);return i}findOrReturn(t,e){let r=0;for(let i of e){if(i.path===t.path)return e.splice(r),i;r++}return t}},ir={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function rE(n,t,e,r,i){let o=Wi(n,t,e);return o.matched?(r=gs(t,r),eE(r,t,e,i).pipe(O(s=>s===!0?o:l({},ir)))):C(o)}function Wi(n,t,e){if(t.path==="**")return iE(e);if(t.path==="")return t.pathMatch==="full"&&(n.hasChildren()||e.length>0)?l({},ir):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let i=(t.matcher||Xo)(e,n,t);if(!i)return l({},ir);let o={};Object.entries(i.posParams??{}).forEach(([a,E])=>{o[a]=E.path});let s=i.consumed.length>0?l(l({},o),i.consumed[i.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:i.consumed,remainingSegments:e.slice(i.consumed.length),parameters:s,positionalParamSegments:i.posParams??{}}}function iE(n){return{matched:!0,parameters:n.length>0?Gi(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function gi(n,t,e,r){return e.length>0&&EE(n,e,r)?{segmentGroup:new R(t,sE(r,new R(e,n.children))),slicedSegments:[]}:e.length===0&&aE(n,e,r)?{segmentGroup:new R(n.segments,oE(n,e,r,n.children)),slicedSegments:e}:{segmentGroup:new R(n.segments,n.children),slicedSegments:e}}function oE(n,t,e,r){let i={};for(let o of e)if(Wt(n,t,o)&&!r[k(o)]){let s=new R([],{});i[k(o)]=s}return l(l({},r),i)}function sE(n,t){let e={};e[I]=t;for(let r of n)if(r.path===""&&k(r)!==I){let i=new R([],{});e[k(r)]=i}return e}function EE(n,t,e){return e.some(r=>Wt(n,t,r)&&k(r)!==I)}function aE(n,t,e){return e.some(r=>Wt(n,t,r))}function Wt(n,t,e){return(n.hasChildren()||t.length>0)&&e.pathMatch==="full"?!1:e.path===""}function LE(n,t,e){return t.length===0&&!n.children[e]}var or=class{};function lE(n,t,e,r,i,o,s="emptyOnly"){return new sr(n,t,e,r,i,s,o).recognize()}var uE=31,sr=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(t,e,r,i,o,s,a){this.injector=t,this.configLoader=e,this.rootComponentType=r,this.config=i,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.applyRedirects=new rr(this.urlSerializer,this.urlTree)}noMatchError(t){return new A(4002,`'${t.segmentGroup}'`)}recognize(){let t=gi(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(t).pipe(O(({children:e,rootSnapshot:r})=>{let i=new T(r,e),o=new Jt("",i),s=Rs(r,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}}))}match(t){let e=new Pe([],Object.freeze({}),Object.freeze(l({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),I,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,t,I,e).pipe(O(r=>({children:r,rootSnapshot:e})),de(r=>{if(r instanceof Et)return this.urlTree=r.urlTree,this.match(r.urlTree.root);throw r instanceof st?this.noMatchError(r):r}))}processSegmentGroup(t,e,r,i,o){return r.segments.length===0&&r.hasChildren()?this.processChildren(t,e,r,o):this.processSegment(t,e,r,r.segments,i,!0,o).pipe(O(s=>s instanceof T?[s]:[]))}processChildren(t,e,r,i){let o=[];for(let s of Object.keys(r.children))s==="primary"?o.unshift(s):o.push(s);return B(o).pipe(Me(s=>{let a=r.children[s],E=Us(e,s);return this.processSegmentGroup(t,E,a,s,i)}),Mr((s,a)=>(s.push(...a),s)),cn(null),Tr(),_(s=>{if(s===null)return Oe(r);let a=Zi(s);return cE(a),C(a)}))}processSegment(t,e,r,i,o,s,a){return B(e).pipe(Me(E=>this.processSegmentAgainstRoute(E._injector??t,e,E,r,i,o,s,a).pipe(de(L=>{if(L instanceof st)return C(null);throw L}))),te(E=>!!E),de(E=>{if(zi(E))return LE(r,i,o)?C(new or):Oe(r);throw E}))}processSegmentAgainstRoute(t,e,r,i,o,s,a,E){return k(r)!==s&&(s===I||!Wt(i,o,r))?Oe(i):r.redirectTo===void 0?this.matchSegmentAgainstRoute(t,i,r,o,s,E):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(t,i,e,r,o,s,E):Oe(i)}expandSegmentAgainstRouteUsingRedirect(t,e,r,i,o,s,a){let{matched:E,parameters:L,consumedSegments:u,positionalParamSegments:c,remainingSegments:h}=Wi(e,i,o);if(!E)return Oe(e);typeof i.redirectTo=="string"&&i.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>uE&&(this.allowRedirects=!1));let j=new Pe(o,L,Object.freeze(l({},this.urlTree.queryParams)),this.urlTree.fragment,Ui(i),k(i),i.component??i._loadedComponent??null,i,mi(i)),G=jt(j,a,this.paramsInheritanceStrategy);j.params=Object.freeze(G.params),j.data=Object.freeze(G.data);let K=this.applyRedirects.applyRedirectCommands(u,i.redirectTo,c,j,t);return this.applyRedirects.lineralizeSegments(i,K).pipe(_(x=>this.processSegment(t,r,e,x.concat(h),s,!1,a)))}matchSegmentAgainstRoute(t,e,r,i,o,s){let a=rE(e,r,i,t,this.urlSerializer);return r.path==="**"&&(e.children={}),a.pipe(J(E=>E.matched?(t=r._injector??t,this.getChildConfig(t,r,i).pipe(J(({routes:L})=>{let u=r._loadedInjector??t,{parameters:c,consumedSegments:h,remainingSegments:j}=E,G=new Pe(h,c,Object.freeze(l({},this.urlTree.queryParams)),this.urlTree.fragment,Ui(r),k(r),r.component??r._loadedComponent??null,r,mi(r)),K=jt(G,s,this.paramsInheritanceStrategy);G.params=Object.freeze(K.params),G.data=Object.freeze(K.data);let{segmentGroup:x,slicedSegments:Be}=gi(e,h,j,L);if(Be.length===0&&x.hasChildren())return this.processChildren(u,L,x,G).pipe(O(Rt=>new T(G,Rt)));if(L.length===0&&Be.length===0)return C(new T(G,[]));let No=k(r)===o;return this.processSegment(u,L,x,Be,No?I:o,!0,G).pipe(O(Rt=>new T(G,Rt instanceof T?[Rt]:[])))}))):Oe(e)))}getChildConfig(t,e,r){return e.children?C({routes:e.children,injector:t}):e.loadChildren?e._loadedRoutes!==void 0?C({routes:e._loadedRoutes,injector:e._loadedInjector}):Ks(t,e,r,this.urlSerializer).pipe(_(i=>i?this.configLoader.loadChildren(t,e).pipe(N(o=>{e._loadedRoutes=o.routes,e._loadedInjector=o.injector})):nE(e))):C({routes:[],injector:t})}};function cE(n){n.sort((t,e)=>t.value.outlet===I?-1:e.value.outlet===I?1:t.value.outlet.localeCompare(e.value.outlet))}function dE(n){let t=n.value.routeConfig;return t&&t.path===""}function Zi(n){let t=[],e=new Set;for(let r of n){if(!dE(r)){t.push(r);continue}let i=t.find(o=>r.value.routeConfig===o.value.routeConfig);i!==void 0?(i.children.push(...r.children),e.add(i)):t.push(r)}for(let r of e){let i=Zi(r.children);t.push(new T(r.value,i))}return t.filter(r=>!e.has(r))}function Ui(n){return n.data||{}}function mi(n){return n.resolve||{}}function CE(n,t,e,r,i,o){return _(s=>lE(n,t,e,r,s.extractedUrl,i,o).pipe(O(({state:a,tree:E})=>p(l({},s),{targetSnapshot:a,urlAfterRedirects:E}))))}function IE(n,t){return _(e=>{let{targetSnapshot:r,guards:{canActivateChecks:i}}=e;if(!i.length)return C(e);let o=new Set(i.map(E=>E.route)),s=new Set;for(let E of o)if(!s.has(E))for(let L of Qi(E))s.add(L);let a=0;return B(s).pipe(Me(E=>o.has(E)?hE(E,r,n,t):(E.data=jt(E,E.parent,n).resolve,C(void 0))),N(()=>a++),dn(1),_(E=>a===s.size?C(e):ee))})}function Qi(n){let t=n.children.map(e=>Qi(e)).flat();return[n,...t]}function hE(n,t,e,r){let i=n.routeConfig,o=n._resolve;return i?.title!==void 0&&!ki(i)&&(o[at]=i.title),RE(o,n,t,r).pipe(O(s=>(n._resolvedData=s,n.data=jt(n,n.parent,e).resolve,null)))}function RE(n,t,e,r){let i=_n(n);if(i.length===0)return C({});let o={};return B(i).pipe(_(s=>OE(n[s],t,e,r).pipe(te(),N(a=>{if(a instanceof ot)throw $t(new Xe,a);o[s]=a}))),dn(1),Br(o),de(s=>zi(s)?ee:Te(s)))}function OE(n,t,e,r){let i=Lt(t)??r,o=Ne(n,i),s=o.resolve?o.resolve(t,e):q(i,()=>o(t,e));return oe(s)}function Mn(n){return J(t=>{let e=n(t);return e?B(e).pipe(O(()=>t)):C(t)})}var Xi=(()=>{class n{buildTitle(e){let r,i=e.root;for(;i!==void 0;)r=this.getResolvedTitleForRoute(i)??r,i=i.children.find(o=>o.outlet===I);return r}getResolvedTitleForRoute(e){return e.data[at]}static \u0275fac=function(r){return new(r||n)};static \u0275prov=f({token:n,factory:()=>d(fE),providedIn:"root"})}return n})(),fE=(()=>{class n extends Xi{title;constructor(e){super(),this.title=e}updateTitle(e){let r=this.buildTitle(e);r!==void 0&&this.title.setTitle(r)}static \u0275fac=function(r){return new(r||n)(S(fi))};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ur=new P("",{providedIn:"root",factory:()=>({})}),pE=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275cmp=re({type:n,selectors:[["ng-component"]],decls:1,vars:0,template:function(r,i){r&1&&ei(0,"router-outlet")},dependencies:[Gs],encapsulation:2})}return n})();function cr(n){let t=n.children&&n.children.map(cr),e=t?p(l({},n),{children:t}):l({},n);return!e.component&&!e.loadComponent&&(t||e.loadChildren)&&e.outlet&&e.outlet!==I&&(e.component=pE),e}var dr=new P(""),PE=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=d(Pn);loadComponent(e){if(this.componentLoaders.get(e))return this.componentLoaders.get(e);if(e._loadedComponent)return C(e._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(e);let r=oe(e.loadComponent()).pipe(O(Ki),N(o=>{this.onLoadEndListener&&this.onLoadEndListener(e),e._loadedComponent=o}),Ot(()=>{this.componentLoaders.delete(e)})),i=new Ln(r,()=>new z).pipe(an());return this.componentLoaders.set(e,i),i}loadChildren(e,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return C({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let o=AE(r,this.compiler,e,this.onLoadEndListener).pipe(Ot(()=>{this.childrenLoaders.delete(r)})),s=new Ln(o,()=>new z).pipe(an());return this.childrenLoaders.set(r,s),s}static \u0275fac=function(r){return new(r||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function AE(n,t,e,r){return oe(n.loadChildren()).pipe(O(Ki),_(i=>i instanceof qr||Array.isArray(i)?C(i):B(t.compileModuleAsync(i))),O(i=>{r&&r(n);let o,s,a=!1;return Array.isArray(i)?(s=i,a=!0):(o=i.create(e).injector,s=o.get(dr,[],{optional:!0,self:!0}).flat()),{routes:s.map(cr),injector:o}}))}function SE(n){return n&&typeof n=="object"&&"default"in n}function Ki(n){return SE(n)?n.default:n}var Cr=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275prov=f({token:n,factory:()=>d(gE),providedIn:"root"})}return n})(),gE=(()=>{class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,r){return e}static \u0275fac=function(r){return new(r||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),UE=new P("");var mE=new P(""),NE=(()=>{class n{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new z;transitionAbortSubject=new z;configLoader=d(PE);environmentInjector=d(pt);urlSerializer=d(ar);rootContexts=d(qt);location=d(vt);inputBindingEnabled=d(lr,{optional:!0})!==null;titleStrategy=d(Xi);options=d(ur,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=d(Cr);createViewTransition=d(UE,{optional:!0});navigationErrorHandler=d(mE,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>C(void 0);rootComponentType=null;constructor(){let e=i=>this.events.next(new Jn(i)),r=i=>this.events.next(new $n(i));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=e}complete(){this.transitions?.complete()}handleNavigationRequest(e){let r=++this.navigationId;this.transitions?.next(p(l(l({},this.transitions.value),e),{id:r}))}setupNavigations(e,r,i){return this.transitions=new y({id:0,currentUrlTree:r,currentRawUrl:r,extractedUrl:this.urlHandlingStrategy.extract(r),urlAfterRedirects:this.urlHandlingStrategy.extract(r),rawUrl:r,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:Ze,restoredState:null,currentSnapshot:i.snapshot,targetSnapshot:null,currentRouterState:i,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(ce(o=>o.id!==0),O(o=>p(l({},o),{extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),J(o=>{let s=!1,a=!1;return C(o).pipe(J(E=>{if(this.navigationId>o.id)return this.cancelNavigationTransition(o,"",M.SupersededByNewNavigation),ee;this.currentTransition=o,this.currentNavigation={id:E.id,initialUrl:E.rawUrl,extractedUrl:E.extractedUrl,targetBrowserUrl:typeof E.extras.browserUrl=="string"?this.urlSerializer.parse(E.extras.browserUrl):E.extras.browserUrl,trigger:E.source,extras:E.extras,previousNavigation:this.lastSuccessfulNavigation?p(l({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let L=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=E.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!L&&u!=="reload"){let c="";return this.events.next(new ue(E.id,this.urlSerializer.serialize(E.rawUrl),c,Hn.IgnoredSameUrlNavigation)),E.resolve(!1),ee}if(this.urlHandlingStrategy.shouldProcessUrl(E.rawUrl))return C(E).pipe(J(c=>{let h=this.transitions?.getValue();return this.events.next(new tt(c.id,this.urlSerializer.serialize(c.extractedUrl),c.source,c.restoredState)),h!==this.transitions?.getValue()?ee:Promise.resolve(c)}),CE(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy),N(c=>{o.targetSnapshot=c.targetSnapshot,o.urlAfterRedirects=c.urlAfterRedirects,this.currentNavigation=p(l({},this.currentNavigation),{finalUrl:c.urlAfterRedirects});let h=new Yt(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(h)}));if(L&&this.urlHandlingStrategy.shouldProcessUrl(E.currentRawUrl)){let{id:c,extractedUrl:h,source:j,restoredState:G,extras:K}=E,x=new tt(c,this.urlSerializer.serialize(h),j,G);this.events.next(x);let Be=Yi(this.rootComponentType).snapshot;return this.currentTransition=o=p(l({},E),{targetSnapshot:Be,urlAfterRedirects:h,extras:p(l({},K),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=h,C(o)}else{let c="";return this.events.next(new ue(E.id,this.urlSerializer.serialize(E.extractedUrl),c,Hn.IgnoredByUrlHandlingStrategy)),E.resolve(!1),ee}}),N(E=>{let L=new Yn(E.id,this.urlSerializer.serialize(E.extractedUrl),this.urlSerializer.serialize(E.urlAfterRedirects),E.targetSnapshot);this.events.next(L)}),O(E=>(this.currentTransition=o=p(l({},E),{guards:Ms(E.targetSnapshot,E.currentSnapshot,this.rootContexts)}),o)),Js(this.environmentInjector,E=>this.events.next(E)),N(E=>{if(o.guardsResult=E.guardsResult,E.guardsResult&&typeof E.guardsResult!="boolean")throw $t(this.urlSerializer,E.guardsResult);let L=new xn(E.id,this.urlSerializer.serialize(E.extractedUrl),this.urlSerializer.serialize(E.urlAfterRedirects),E.targetSnapshot,!!E.guardsResult);this.events.next(L)}),ce(E=>E.guardsResult?!0:(this.cancelNavigationTransition(E,"",M.GuardRejected),!1)),Mn(E=>{if(E.guards.canActivateChecks.length)return C(E).pipe(N(L=>{let u=new kn(L.id,this.urlSerializer.serialize(L.extractedUrl),this.urlSerializer.serialize(L.urlAfterRedirects),L.targetSnapshot);this.events.next(u)}),J(L=>{let u=!1;return C(L).pipe(IE(this.paramsInheritanceStrategy,this.environmentInjector),N({next:()=>u=!0,complete:()=>{u||this.cancelNavigationTransition(L,"",M.NoDataFromResolver)}}))}),N(L=>{let u=new jn(L.id,this.urlSerializer.serialize(L.extractedUrl),this.urlSerializer.serialize(L.urlAfterRedirects),L.targetSnapshot);this.events.next(u)}))}),Mn(E=>{let L=u=>{let c=[];u.routeConfig?.loadComponent&&!u.routeConfig._loadedComponent&&c.push(this.configLoader.loadComponent(u.routeConfig).pipe(N(h=>{u.component=h}),O(()=>{})));for(let h of u.children)c.push(...L(h));return c};return ln(L(E.targetSnapshot.root)).pipe(cn(null),Ce(1))}),Mn(()=>this.afterPreactivation()),J(()=>{let{currentSnapshot:E,targetSnapshot:L}=o,u=this.createViewTransition?.(this.environmentInjector,E.root,L.root);return u?B(u).pipe(O(()=>o)):C(o)}),O(E=>{let L=vs(e.routeReuseStrategy,E.targetSnapshot,E.currentRouterState);return this.currentTransition=o=p(l({},E),{targetRouterState:L}),this.currentNavigation.targetRouterState=L,o}),N(()=>{this.events.next(new rt)}),Ts(this.rootContexts,e.routeReuseStrategy,E=>this.events.next(E),this.inputBindingEnabled),Ce(1),N({next:E=>{s=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new le(E.id,this.urlSerializer.serialize(E.extractedUrl),this.urlSerializer.serialize(E.urlAfterRedirects))),this.titleStrategy?.updateTitle(E.targetRouterState.snapshot),E.resolve(!0)},complete:()=>{s=!0}}),_r(this.transitionAbortSubject.pipe(N(E=>{throw E}))),Ot(()=>{!s&&!a&&this.cancelNavigationTransition(o,"",M.SupersededByNewNavigation),this.currentTransition?.id===o.id&&(this.currentNavigation=null,this.currentTransition=null)}),de(E=>{if(a=!0,$i(E))this.events.next(new Q(o.id,this.urlSerializer.serialize(o.extractedUrl),E.message,E.cancellationCode)),Bs(E)?this.events.next(new ge(E.url,E.navigationBehaviorOptions)):o.resolve(!1);else{let L=new nt(o.id,this.urlSerializer.serialize(o.extractedUrl),E,o.targetSnapshot??void 0);try{let u=q(this.environmentInjector,()=>this.navigationErrorHandler?.(L));if(u instanceof ot){let{message:c,cancellationCode:h}=$t(this.urlSerializer,u);this.events.next(new Q(o.id,this.urlSerializer.serialize(o.extractedUrl),c,h)),this.events.next(new ge(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(L),E}catch(u){this.options.resolveNavigationPromiseOnError?o.resolve(!1):o.reject(u)}}return ee}))}))}cancelNavigationTransition(e,r,i){let o=new Q(e.id,this.urlSerializer.serialize(e.extractedUrl),r,i);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),r=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return e.toString()!==r?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(r){return new(r||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function GE(n){return n!==Ze}var vE=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275prov=f({token:n,factory:()=>d(VE),providedIn:"root"})}return n})(),Er=class{shouldDetach(t){return!1}store(t,e){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,e){return t.routeConfig===e.routeConfig}},VE=(()=>{class n extends Er{static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ie(n)))(i||n)}})();static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),eo=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275prov=f({token:n,factory:()=>d(DE),providedIn:"root"})}return n})(),DE=(()=>{class n extends eo{location=d(vt);urlSerializer=d(ar);options=d(ur,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";urlHandlingStrategy=d(Cr);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new X;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}routerState=Yi(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(r=>{r.type==="popstate"&&e(r.url,r.state)})}handleRouterEvent(e,r){if(e instanceof tt)this.stateMemento=this.createStateMemento();else if(e instanceof ue)this.rawUrlTree=r.initialUrl;else if(e instanceof Yt){if(this.urlUpdateStrategy==="eager"&&!r.extras.skipLocationChange){let i=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl);this.setBrowserUrl(r.targetBrowserUrl??i,r)}}else e instanceof rt?(this.currentUrlTree=r.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl),this.routerState=r.targetRouterState,this.urlUpdateStrategy==="deferred"&&!r.extras.skipLocationChange&&this.setBrowserUrl(r.targetBrowserUrl??this.rawUrlTree,r)):e instanceof Q&&(e.code===M.GuardRejected||e.code===M.NoDataFromResolver)?this.restoreHistory(r):e instanceof nt?this.restoreHistory(r,!0):e instanceof le&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,r){let i=e instanceof X?this.urlSerializer.serialize(e):e;if(this.location.isCurrentPathEqualTo(i)||r.extras.replaceUrl){let o=this.browserPageId,s=l(l({},r.extras.state),this.generateNgRouterState(r.id,o));this.location.replaceState(i,"",s)}else{let o=l(l({},r.extras.state),this.generateNgRouterState(r.id,this.browserPageId+1));this.location.go(i,"",o)}}restoreHistory(e,r=!1){if(this.canceledNavigationResolution==="computed"){let i=this.browserPageId,o=this.currentPageId-i;o!==0?this.location.historyGo(o):this.currentUrlTree===e.finalUrl&&o===0&&(this.resetState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetState(e),this.resetUrlToCurrentUrlTree())}resetState(e){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,r){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:r}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ie(n)))(i||n)}})();static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),qe=function(n){return n[n.COMPLETE=0]="COMPLETE",n[n.FAILED=1]="FAILED",n[n.REDIRECTING=2]="REDIRECTING",n}(qe||{});function BE(n,t){n.events.pipe(ce(e=>e instanceof le||e instanceof Q||e instanceof nt||e instanceof ue),O(e=>e instanceof le||e instanceof ue?qe.COMPLETE:(e instanceof Q?e.code===M.Redirect||e.code===M.SupersededByNewNavigation:!1)?qe.REDIRECTING:qe.FAILED),ce(e=>e!==qe.REDIRECTING),Ce(1)).subscribe(()=>{t()})}var TE={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},ME={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},to=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=d(Ut);stateManager=d(eo);options=d(ur,{optional:!0})||{};pendingTasks=d(Hr);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=d(NE);urlSerializer=d(ar);location=d(vt);urlHandlingStrategy=d(Cr);_events=new z;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=d(vE);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=d(dr,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!d(lr,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:e=>{this.console.warn(e)}}),this.subscribeToNavigationEvents()}eventsSubscription=new mr;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(r=>{try{let i=this.navigationTransitions.currentTransition,o=this.navigationTransitions.currentNavigation;if(i!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof Q&&r.code!==M.Redirect&&r.code!==M.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof le)this.navigated=!0;else if(r instanceof ge){let s=r.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(r.url,i.currentRawUrl),E=l({browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy==="eager"||GE(i.source)},s);this.scheduleNavigation(a,Ze,null,E,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}_E(r)&&this._events.next(r)}catch(i){this.navigationTransitions.transitionAbortSubject.next(i)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ze,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,r)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(e,"popstate",r)},0)})}navigateToSyncWithBrowser(e,r,i){let o={replaceUrl:!0},s=i?.navigationId?i:null;if(i){let E=l({},i);delete E.navigationId,delete E.\u0275routerPageId,Object.keys(E).length!==0&&(o.state=E)}let a=this.parseUrl(e);this.scheduleNavigation(a,r,s,o)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(cr),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,r={}){let{relativeTo:i,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:E}=r,L=E?this.currentUrlTree.fragment:s,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=l(l({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let c;try{let h=i?i.snapshot:this.routerState.snapshot.root;c=bi(h)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),c=this.currentUrlTree.root}return wi(c,e,u,L??null)}navigateByUrl(e,r={skipLocationChange:!1}){let i=Ke(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(o,Ze,null,r)}navigate(e,r={skipLocationChange:!1}){return yE(e),this.navigateByUrl(this.createUrlTree(e,r),r)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.urlSerializer.parse("/")}}isActive(e,r){let i;if(r===!0?i=l({},TE):r===!1?i=l({},ME):i=r,Ke(e))return pi(this.currentUrlTree,e,i);let o=this.parseUrl(e);return pi(this.currentUrlTree,o,i)}removeEmptyProps(e){return Object.entries(e).reduce((r,[i,o])=>(o!=null&&(r[i]=o),r),{})}scheduleNavigation(e,r,i,o,s){if(this.disposed)return Promise.resolve(!1);let a,E,L;s?(a=s.resolve,E=s.reject,L=s.promise):L=new Promise((c,h)=>{a=c,E=h});let u=this.pendingTasks.add();return BE(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:a,reject:E,promise:L,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),L.catch(c=>Promise.reject(c))}static \u0275fac=function(r){return new(r||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function yE(n){for(let t=0;t<n.length;t++)if(n[t]==null)throw new A(4008,!1)}function _E(n){return!(n instanceof rt)&&!(n instanceof ge)}var bE=new P("");function no(n,...t){return _e([{provide:dr,multi:!0,useValue:n},[],{provide:Ue,useFactory:wE,deps:[to]},{provide:Zr,multi:!0,useFactory:FE},t.map(e=>e.\u0275providers)])}function wE(n){return n.routerState.root}function FE(){let n=d(In);return t=>{let e=n.get(pn);if(t!==e.components[0])return;let r=n.get(to),i=n.get(HE);n.get(YE)===1&&r.initialNavigation(),n.get(xE,null,Cn.Optional)?.setUpPreloading(),n.get(bE,null,Cn.Optional)?.init(),r.resetRootComponentType(e.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var HE=new P("",{factory:()=>new z}),YE=new P("",{providedIn:"root",factory:()=>1});var xE=new P("");var ro=[];var kE="@",jE=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=d(Fr,{optional:!0});loadingSchedulerFn=d(JE,{optional:!0});_engine;constructor(e,r,i,o,s){this.doc=e,this.delegate=r,this.zone=i,this.animationType=o,this.moduleImpl=s}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-GHXFRTG7.js").then(i=>i),r;return this.loadingSchedulerFn?r=this.loadingSchedulerFn(e):r=e(),r.catch(i=>{throw new A(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:o})=>{this._engine=i(this.animationType,this.doc);let s=new o(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(e,r){let i=this.delegate.createRenderer(e,r);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let o=new Ir(i);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let a=s.createRenderer(e,r);o.use(a),this.scheduler?.notify(11)}).catch(s=>{o.use(i)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static \u0275fac=function(r){fn()};static \u0275prov=f({token:n,factory:n.\u0275fac})}return n})(),Ir=class{delegate;replay=[];\u0275type=1;constructor(t){this.delegate=t}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,r,i){this.delegate.insertBefore(t,e,r,i)}removeChild(t,e,r){this.delegate.removeChild(t,e,r)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,r,i){this.delegate.setAttribute(t,e,r,i)}removeAttribute(t,e,r){this.delegate.removeAttribute(t,e,r)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,r,i){this.delegate.setStyle(t,e,r,i)}removeStyle(t,e,r){this.delegate.removeStyle(t,e,r)}setProperty(t,e,r){this.shouldReplay(e)&&this.replay.push(i=>i.setProperty(t,e,r)),this.delegate.setProperty(t,e,r)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,r){return this.shouldReplay(e)&&this.replay.push(i=>i.listen(t,e,r)),this.delegate.listen(t,e,r)}shouldReplay(t){return this.replay!==null&&t.startsWith(kE)}},JE=new P("");function io(n="animations"){return Jr("NgAsyncAnimations"),_e([{provide:St,useFactory:(t,e,r)=>new jE(t,e,r,n),deps:[H,Bt,ne]},{provide:jr,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var oo={providers:[ti({eventCoalescing:!0}),no(ro),io()]};var hr=`2020;COLLEGE PRIVE;SACRE COEUR;PRIVE;0;0;712;07100
2020;LYCEE PROFESSIONNEL;LEON PAVIN;PUBLIC;0;0;24;07210
2020;LP LYCEE DES METIERS;HOTELIER;PUBLIC;0;0;18;07110
2020;COLLEGE PRIVE;SAINT LOUIS LES MARISTES;PRIVE;0;0;140;07160
2020;LYCEE PROFESSIONNEL PRIVE;SAINT ANDRE;PRIVE;0;0;32;07400
2020;COLLEGE;LOUIS JOUVET;PUBLIC;0;0;120;07320
2020;COLLEGE PRIVE;SAINT LOUIS;PRIVE;0;0;570;07300
2020;COLLEGE PRIVE;LES MARISTES;PRIVE;0;0;796;26300
2020;COLLEGE PRIVE;FRANCOIS GONDIN;PRIVE;0;0;289;26120
2020;LYCEE POLYVALENT;FRANCOIS JEAN ARMORIN;PUBLIC;0;0;24;26402
2020;COLLEGE;FRANCOIS JEAN ARMORIN;PUBLIC;0;0;417;26402
2020;COLLEGE;MARGUERITE DURAS;PUBLIC;0;0;660;26200
2020;COLLEGE;GUSTAVE MONOD;PUBLIC;0;0;740;26205
2020;ETAB.REGIONAL ENSEIGNT ADAPTE;PORTES DU SOLEIL;PUBLIC;0;0;79;26200
2020;LYCEE POLYVALENT;DR. GUSTAVE JAUME;PUBLIC;0;0;24;26702
2020;COLLEGE;ANDRE MALRAUX;PUBLIC;0;0;689;26102
2020;COLLEGE;DENIS BRUNET;PUBLIC;0;0;495;26210
2020;COLLEGE;EMILE LOUBET;PUBLIC;0;0;426;26021
2020;COLLEGE;RENE LONG;PUBLIC;0;0;573;74540
2020;LYCEE PROFESSIONNEL;AMEDEE GORDINI;PUBLIC;0;0;24;74600
2020;COLLEGE PRIVE;LES TILLEULS;PRIVE;0;0;472;74000
2020;COLLEGE PRIVE;LA SALLE;PRIVE;0;0;692;74940
2020;COLLEGE;BEAUREGARD;PUBLIC;0;0;645;74960
2020;COLLEGE;JACQUES PREVERT;PUBLIC;0;0;656;74960
2020;LP LYCEE DES METIERS;TOM MOREL;PUBLIC;0;0;17;74960
2020;LYCEE POLYVALENT;JEAN MONNET;PUBLIC;0;0;27;74106
2020;COLLEGE PRIVE;SAINT BRUNO;PRIVE;0;0;246;74500
2020;COLLEGE;LE PARMELAN;PUBLIC;0;0;784;74570
2020;COLLEGE PRIVE;SAINTE MARIE;PRIVE;0;0;763;74805
2020;COLLEGE;THEODORE MONOD;PUBLIC;0;0;619;74200
2020;COLLEGE;GASPARD MONGE;PUBLIC;0;0;627;74490
2020;COLLEGE;ARTHUR RIMBAUD;PUBLIC;0;0;846;74161
2020;LYCEE PROFESSIONNEL PRIVE;MONT BLANC;PRIVE;0;0;17;74700
2020;COLLEGE;LA MANDALLAZ;PUBLIC;0;0;676;74330
2020;COLLEGE;LES ARAVIS;PUBLIC;0;0;620;74230
2020;COLLEGE;DE CHAMPIER;PUBLIC;0;0;291;38260
2020;COLLEGE;JEAN VILAR;PUBLIC;0;1;410;38130
2020;LYCEE PROFESSIONNEL;THOMAS EDISON;PUBLIC;0;0;24;38130
2020;LP LYCEE DES METIERS;GUYNEMER;PUBLIC;0;0;14;38001
2020;COLLEGE PRIVE;LA SALLE L'AIGLE GRENOBLE;PRIVE;0;0;1039;38000
2020;COLLEGE PRIVE;BAYARD;PRIVE;0;0;452;38000
2020;COLLEGE;CHAMPOLLION;PUBLIC;0;0;553;38000
2020;COLLEGE PRIVE;LES CHARMILLES;PRIVE;0;0;115;38100
2020;COLLEGE PRIVE;JEANNE D'ARC;PRIVE;0;0;546;38550
2020;COLLEGE;MARCEL CUYNAT;PUBLIC;0;0;340;38650
2020;COLLEGE;GEORGES BRASSENS;PUBLIC;0;0;437;38780
2020;COLLEGE;ROBERT DESNOS;PUBLIC;0;0;768;38146
2020;COLLEGE;GRESIVAUDAN;PUBLIC;0;0;679;38330
2020;COLLEGE;FERNAND LEGER;PUBLIC;0;0;553;38400
2020;COLLEGE;CHARTREUSE;PUBLIC;0;0;538;38950
2020;LPO LYCEE DES METIERS;ROGER DESCHAUX;PUBLIC;0;0;24;38360
2020;COLLEGE;MARC SANGNIER;PUBLIC;0;0;532;38180
2020;COLLEGE;PHILIPPE COUSTEAU;PUBLIC;0;0;582;38230
2020;COLLEGE;CONDORCET;PUBLIC;0;0;569;38210
2020;COLLEGE;DE L'ISLE;PUBLIC;0;0;626;38200
2020;COLLEGE;JEAN PREVOST;PUBLIC;0;0;746;38250
2020;COLLEGE;JOSEPH CHASSIGNEUX;PUBLIC;0;0;572;38470
2020;COLLEGE;LA GARENNE;PUBLIC;0;0;565;38503
2020;COLLEGE PRIVE;NOTRE DAME DES VICTOIRES;PRIVE;0;0;405;38500
2020;COLLEGE;JEAN MERMOZ;PUBLIC;0;0;567;73230
2020;COLLEGE;LE BONRIEU;PUBLIC;0;0;293;73350
2020;ETAB.REGIONAL ENSEIGNT ADAPTE;AMELIE GEX;PUBLIC;0;0;68;73001
2020;COLLEGE;BISSY;PUBLIC;0;0;340;73000
2020;LYCEE PROFESSIONNEL PRIVE;SAINTE ANNE - SAVOISIENNE;PRIVE;0;0;55;73290
2020;COLLEGE;EDMOND ROSTAND;PUBLIC;0;0;410;73490
2020;COLLEGE;DES BAUGES;PUBLIC;0;0;255;73630
2020;COLLEGE;LA VANOISE;PUBLIC;0;0;411;73500
2020;COLLEGE;JEAN ROSTAND;PUBLIC;0;0;781;73604
2020;LPO LYCEE DES METIERS;AMBROISE CROIZAT;PUBLIC;0;0;21;73601
2019;COLLEGE;DU VIVARAIS;PUBLIC;0;0;245;07270
2019;COLLEGE;DE L' EYRIEUX;PUBLIC;0;0;218;07190
2019;COLLEGE;HENRI AGERON;PUBLIC;0;0;406;07150
2019;COLLEGE;OLIVIER DE SERRES;PUBLIC;0;0;524;26450
2019;COLLEGE PRIVE;NOTRE DAME DES CHAMPS;PRIVE;0;0;428;26100
2019;COLLEGE;EMILE LOUBET;PUBLIC;0;0;419;26021
2019;COLLEGE;DU VAL D'ABONDANCE;PUBLIC;0;0;197;74360
2019;LYCEE POLYVALENT;LES BRESSIS;PRIVE;0;0;30;74600
2019;COLLEGE PRIVE;SAINT MICHEL;PRIVE;0;0;689;74007
2019;LYCEE PROFESSIONNEL PRIVE;ECA;PRIVE;0;0;31;74650
2019;COLLEGE;MICHEL SERVET;PUBLIC;1;0;1055;74102
2019;COLLEGE;ROGER FRISON ROCHE;PUBLIC;0;0;524;74401
2019;COLLEGE;LE PARMELAN;PUBLIC;0;0;747;74570
2019;COLLEGE PRIVE;SAINTE MARIE;PRIVE;0;0;771;74805
2019;COLLEGE;LE CLERGEON;PUBLIC;0;0;687;74152
2019;COLLEGE;JEAN JACQUES ROUSSEAU;PUBLIC;0;0;664;74164
2019;COLLEGE;DU MONT DES PRINCES;PUBLIC;0;0;527;74910
2019;COLLEGE;LES ARAVIS;PUBLIC;0;0;646;74230
2019;COLLEGE;JEAN JACQUES ROUSSEAU;PUBLIC;0;0;887;74200
2019;COLLEGE PRIVE;SAINT FRANCOIS;PRIVE;0;0;924;74100
2019;COLLEGE;PRE BENIT;PUBLIC;0;0;921;38300
2019;COLLEGE PRIVE;SAINT MICHEL;PRIVE;0;0;578;38300
2019;COLLEGE;JULES FLANDRIN;PUBLIC;0;0;412;38700
2019;COLLEGE PRIVE;RONDEAU MONTFLEURY EUROPE;PRIVE;0;0;594;38700
2019;COLLEGE;GERARD PHILIPE;PUBLIC;1;0;444;38602
2019;COLLEGE;VERCORS;PUBLIC;1;0;395;38100
2019;COLLEGE;OLYMPIQUE;PUBLIC;1;0;445;38035
2019;COLLEGE;STENDHAL;PUBLIC;0;0;585;38014
2019;COLLEGE PRIVE;EXTERNAT NOTRE DAME;PRIVE;0;0;640;38100
2019;COLLEGE;INTERNATIONAL EUROPOLE;PUBLIC;0;0;600;38000
2019;COLLEGE;LE CLOS JOUVIN;PUBLIC;0;0;605;38560
2019;COLLEGE PRIVE;SAINT JOSEPH;PRIVE;0;0;231;38350
2019;COLLEGE;DES SIX VALLEES;PUBLIC;0;0;446;38520
2019;COLLEGE;ARC EN CIERS;PUBLIC;0;0;619;38630
2019;COLLEGE;LA PIERRE AIGUILLE;PUBLIC;0;0;616;38660
2019;COLLEGE;LIONEL TERRAY;PUBLIC;0;0;551;38240
2019;COLLEGE;LES PIERRES PLANTES;PUBLIC;0;0;681;38390
2019;COLLEGE;BARNAVE;PUBLIC;0;0;656;38521
2019;COLLEGE;LE GRAND SOM;PUBLIC;0;0;318;38380
2019;LYCEE POLYVALENT;LA SAULAIE;PUBLIC;0;0;24;38162
2019;COLLEGE;ALEXANDRE FLEMING;PUBLIC;0;0;775;38360
2019;COLLEGE;CONDORCET;PUBLIC;0;0;566;38210
2019;COLLEGE;JULES VERNE;PUBLIC;0;0;499;38760
2019;COLLEGE;LOUIS ARAGON;PUBLIC;1;0;572;38090
2019;COLLEGE;RENE  CASSIN;PUBLIC;0;0;401;38090
2019;COLLEGE PRIVE;JEAN-PAUL II;PRIVE;0;0;451;38460
2019;COLLEGE;LA GARENNE;PUBLIC;0;0;589;38503
2019;LYCEE PROFESSIONNEL PRIVE;LES PRAIRIES;PRIVE;0;0;19;38500
2019;LYCEE PROFESSIONNEL PRIVE;LES PORTES DE CHARTREUSE;PRIVE;0;0;47;38340
2019;COLLEGE PRIVE;CATHOLIQUE LAMARTINE;PRIVE;0;0;448;73100
2019;COLLEGE;MARLIOZ;PUBLIC;0;0;535;73103
2019;COLLEGE;LA COMBE DE SAVOIE;PUBLIC;1;0;684;73200
2019;LYCEE D'ENSEIGNEMENT ADAPTE;LE MIRANTIN;PUBLIC;0;0;55;73208
2019;COLLEGE;BISSY;PUBLIC;0;0;333;73000
2019;COLLEGE;HENRY BORDEAUX;PUBLIC;0;0;465;73160
2019;COLLEGE;DES BAUGES;PUBLIC;0;0;261;73630
2019;COLLEGE;PIERRE ET MARIE CURIE;PUBLIC;0;0;783;73801
2019;COLLEGE;JOSEPH ET XAVIER DE MAISTRE;PUBLIC;0;0;550;73230
2019;COLLEGE;PAUL MOUGIN;PUBLIC;0;0;210;73140
2019;COLLEGE;LES FRONTAILLES;PUBLIC;0;0;506;73250
2019;COLLEGE;CHARLES DULLIN;PUBLIC;0;0;342;73170
2019;LPO LYCEE DES METIERS;BOISSY D'ANGLAS;PUBLIC;0;0;24;07101
2019;COLLEGE;DE CRUSSOL;PUBLIC;0;0;577;07130
2019;COLLEGE PRIVE;SAINT JOSEPH EN VAL D'AY;PRIVE;0;0;283;07290
2019;LP LYCEE DES METIERS;MARIUS BOUVIER;PUBLIC;0;0;19;07301
2019;COLLEGE PRIVE;SAINT BONNET;PRIVE;0;0;225;26330
2019;COLLEGE;REVESZ LONG;PUBLIC;0;0;643;26400
2019;COLLEGE PRIVE;LES GOELANDS;PRIVE;0;0;470;26140
2019;COLLEGE;CAMILLE VERNET;PUBLIC;0;0;506;26021
2019;COLLEGE PRIVE;JEANNE D'ARC;PRIVE;0;0;209;74400
2019;LPO LYCEE DES METIERS;CHARLES PONCET;PUBLIC;0;0;21;74302
2019;COLLEGE;LES ALLOBROGES;PUBLIC;0;0;798;74802
2019;COLLEGE;THEODORE MONOD;PUBLIC;0;0;618;74200
2019;COLLEGE PRIVE;LA PRESENTATION DE MARIE;PRIVE;0;0;605;74163
2019;COLLEGE;DU VERNEY;PUBLIC;0;0;565;74700
2019;COLLEGE;LA MANDALLAZ;PUBLIC;0;0;686;74330
2019;COLLEGE PRIVE;SACRE COEUR;PRIVE;0;0;600;74200
2019;COLLEGE;CHAMPAGNE;PUBLIC;0;0;935;74200
2019;LYCEE PROF PRIVE DES METIERS;LE BREDA;PRIVE;0;0;35;38580
2019;COLLEGE;SIMONE DE BEAUVOIR;PUBLIC;0;0;588;38920
2021;LYCEE PROFESSIONNEL PRIVE;MARC SEGUIN;PRIVE;0;0;52;07100
2021;COLLEGE PRIVE;ST FRANCOIS D'ASSISE;PRIVE;0;0;764;07203
2021;COLLEGE;ROQUA;PUBLIC;0;0;588;07204
2021;COLLEGE;LE LAOUL;PUBLIC;1;0;498;07700
2021;COLLEGE PRIVE;SAINT LOUIS LES MARISTES;PRIVE;0;0;147;07160
2021;LYCEE PROFESSIONNEL PRIVE;SAINT ANDRE;PRIVE;0;0;32;07400
2021;COLLEGE;MARCEL CHAMONTIN;PUBLIC;0;0;652;07401
2021;COLLEGE PRIVE;ENSEMBLE BIENHEUREUX GABRIEL L;PRIVE;0;0;196;07400
2021;COLLEGE;DE L' EYRIEUX;PUBLIC;0;0;213;07190
2021;LP LYCEE DES METIERS;MARIUS BOUVIER;PUBLIC;0;0;29;07301
2021;COLLEGE;DE L'EUROPE JEAN MONNET;PUBLIC;0;0;873;26303
2021;COLLEGE;OLIVIER DE SERRES;PUBLIC;0;0;501;26450
2021;COLLEGE;JOSEPH  BEDIER;PUBLIC;0;0;338;26530
2021;COLLEGE PRIVE;ANNE CARTIER;PRIVE;0;0;577;26250
2021;COLLEGE;GUSTAVE MONOD;PUBLIC;0;0;736;26205
2021;COLLEGE;RENE BARJAVEL;PUBLIC;0;0;631;26110
2021;LYCEE POLYVALENT;DR. GUSTAVE JAUME;PUBLIC;0;0;22;26702
2021;LYCEE PROFESSIONNEL PRIVE;NOTRE DAME DES CHAMPS;PRIVE;0;0;14;26106
2021;COLLEGE;ETIENNE-JEAN LAPASSAT;PUBLIC;1;0;705;26106
2021;COLLEGE PRIVE;LES GOELANDS;PRIVE;0;0;403;26140
2021;COLLEGE;DENIS BRUNET;PUBLIC;0;0;489;26210
2021;LYCEE PROFESSIONNEL PRIVE;LA PROVIDENCE;PRIVE;0;0;24;26000
2021;COLLEGE;PAUL VALERY;PUBLIC;1;0;446;26000
2021;COLLEGE PRIVE;NOTRE DAME;PRIVE;0;0;905;26008
2021;COLLEGE;DU VAL D'ABONDANCE;PUBLIC;0;0;183;74360
2021;LYCEE PROFESSIONNEL;AMEDEE GORDINI;PUBLIC;0;0;23;74600
2021;COLLEGE;RAOUL BLANCHARD;PUBLIC;0;0;774;74008
2021;COLLEGE;JACQUES PREVERT;PUBLIC;0;0;629;74960
2021;COLLEGE;MICHEL SERVET;PUBLIC;1;0;1111;74102
2021;COLLEGE;JEAN MARIE MOLLIET;PUBLIC;0;0;467;74420
2021;COLLEGE;FRANCOIS MUGNIER;PUBLIC;0;0;684;74890
2021;COLLEGE PRIVE;SAINT JEAN BOSCO;PRIVE;0;0;643;74303
2021;COLLEGE PRIVE;SAINT VINCENT;PRIVE;0;0;192;74160
2021;COLLEGE;LOUIS ARMAND;PUBLIC;0;0;736;74350
2021;COLLEGE;JACQUES PREVERT;PUBLIC;1;0;563;74240
2021;COLLEGE;LES ALLOBROGES;PUBLIC;0;0;832;74802
2021;COLLEGE;LA PIERRE AUX FEES;PUBLIC;0;0;851;74930
2021;LPO PR;DEMOTZ DE LA SALLE;PRIVE;0;0;17;74150
2021;COLLEGE;KARINE RUBY;PUBLIC;0;0;662;74800
2021;COLLEGE PRIVE;SACRE COEUR;PRIVE;0;0;613;74200
2021;LYCEE PROFESSIONNEL PRIVE;JEANNE D ARC;PRIVE;0;0;23;74207
2021;COLLEGE PRIVE;SAINT JOSEPH LA SALLE;PRIVE;0;0;621;74202
2021;COLLEGE;JULES FLANDRIN;PUBLIC;0;0;447;38700
2021;COLLEGE;SIMONE DE BEAUVOIR;PUBLIC;0;0;584;38920
2021;COLLEGE;PABLO PICASSO;PUBLIC;1;0;377;38130
2021;COLLEGE;LES SAULES;PUBLIC;0;0;485;38320
2021;COLLEGE PRIVE;LA SALLE L'AIGLE GRENOBLE;PRIVE;0;0;1032;38000
2021;COLLEGE PRIVE;BAYARD;PRIVE;0;0;449;38000
2021;COLLEGE PRIVE;EXTERNAT NOTRE DAME;PRIVE;0;0;636;38100
2021;COLLEGE PRIVE;LES CHARMILLES;PRIVE;0;0;114;38100
2021;COLLEGE PRIVE;SAINT BRUNO;PRIVE;0;0;627;38110
2021;LYCEE POLYVALENT;UNITE SOINS ETUDES GRESIVAUDAN;PUBLIC;0;0;17;38700
2021;COLLEGE;DES SIX VALLEES;PUBLIC;0;0;457;38520
2021;COLLEGE;NELSON MANDELA;PUBLIC;1;0;401;38800
2021;COLLEGE;ROBERT DESNOS;PUBLIC;0;0;781;38146
2021;COLLEGE;MARC SANGNIER;PUBLIC;0;0;553;38180
2021;COLLEGE;PHILIPPE COUSTEAU;PUBLIC;0;0;662;38230
2021;COLLEGE PRIVE;JEAN-PAUL II;PRIVE;0;0;482;38460
2021;COLLEGE;JOSEPH CHASSIGNEUX;PUBLIC;0;0;559;38470
2021;COLLEGE PRIVE;NOTRE DAME DES VICTOIRES;PRIVE;0;0;420;38500
2021;LYCEE PROFESSIONNEL PRIVE;LES PORTES DE CHARTREUSE;PRIVE;0;0;47;38340
2021;COLLEGE;ANDRE MALRAUX;PUBLIC;0;0;446;38340
2021;COLLEGE PRIVE;CATHOLIQUE LAMARTINE;PRIVE;0;0;458;73100
2021;LYCEE PROFESSIONNEL PRIVE;JEANNE D'ARC;PRIVE;0;0;19;#N/A
2021;COLLEGE;LA COMBE DE SAVOIE;PUBLIC;1;0;699;73200
2021;LYCEE D'ENSEIGNEMENT ADAPTE;LE MIRANTIN;PUBLIC;0;0;71;73208
2021;COLLEGE PRIVE;JEANNE D ARC;PRIVE;0;0;319;73203
2021;COLLEGE;LE BEAUFORTAIN;PUBLIC;0;0;198;73270
2021;COLLEGE PRIVE;NOTRE DAME DU ROCHER;PRIVE;0;0;418;73000
2021;COLLEGE;BISSY;PUBLIC;0;0;357;73000
2021;COLLEGE;LOUISE DE SAVOIE;PUBLIC;0;0;630;73000
2021;COLLEGE;DES BAUGES;PUBLIC;0;0;261;73630
2021;COLLEGE PRIVE;SAINTE THERESE;PRIVE;0;0;170;73600
2022;COLLEGE;LE LAOUL;PUBLIC;1;0;556;07700
2022;COLLEGE;ALEX MEZENC;PUBLIC;0;0;353;07250
2022;COLLEGE PRIVE;ENSEMBLE BIENHEUREUX GABRIEL L;PRIVE;0;0;194;07400
2022;COLLEGE;MARIE CURIE;PUBLIC;0;0;956;07301
2022;COLLEGE PRIVE;LES MARISTES;PRIVE;0;0;761;26300
2022;COLLEGE;FRANCOIS JEAN ARMORIN;PUBLIC;0;0;457;26402
2022;COLLEGE;DU DIOIS;PUBLIC;0;0;441;26150
2022;COLLEGE;GUSTAVE MONOD;PUBLIC;0;0;731;26205
2022;COLLEGE;ALAIN BORNE;PUBLIC;0;0;560;26216
2022;COLLEGE;CLAUDE DEBUSSY;PUBLIC;0;0;599;26105
2022;COLLEGE;ANDRE COTTE;PUBLIC;0;0;694;26240
2022;LPO LYCEE DES METIERS;HENRI LAURENS;PUBLIC;0;0;12;26241
2022;COLLEGE;JEAN ZAY;PUBLIC;1;0;515;26000
2022;COLLEGE PRIVE;SAINTE ANNE;PRIVE;0;0;524;26000
2022;LYCEE PROFESSIONNEL PRIVE;LA PROVIDENCE;PRIVE;0;0;22;26000
2022;COLLEGE;MARCEL PAGNOL;PUBLIC;1;0;679;26000
2022;LYCEE PROFESSIONNEL;AMEDEE GORDINI;PUBLIC;0;0;24;74600
2022;COLLEGE;JACQUES PREVERT;PUBLIC;0;0;620;74960
2022;COLLEGE;FRANCOIS MUGNIER;PUBLIC;0;0;710;74890
2022;LPO LYCEE DES METIERS;CHARLES PONCET;PUBLIC;0;0;24;74302
2022;COLLEGE PRIVE;ADVENTISTE MAURICE TIECHE;PRIVE;0;0;99;74160
2022;COLLEGE;PAUL EMILE VICTOR;PUBLIC;0;0;909;74380
2022;COLLEGE PRIVE;SAINT BRUNO;PRIVE;0;0;248;74500
2022;COLLEGE;LE PARMELAN;PUBLIC;0;0;816;74570
2022;COLLEGE PRIVE;SAINTE MARIE;PRIVE;0;0;766;74805
2022;COLLEGE PRIVE;SAINT JEAN-BAPTISTE;PRIVE;0;0;232;74120
2022;COLLEGE;LA PIERRE AUX FEES;PUBLIC;0;0;920;74930
2022;COLLEGE PRIVE;LA PRESENTATION DE MARIE;PRIVE;0;0;596;74163
2022;COLLEGE;JEAN JACQUES ROUSSEAU;PUBLIC;0;0;631;74164
2022;COLLEGE;KARINE RUBY;PUBLIC;0;0;644;74800
2022;COLLEGE;DU VERNEY;PUBLIC;0;0;517;74700
2022;COLLEGE;JEAN JACQUES GALLAY;PUBLIC;1;0;823;74954
2022;COLLEGE;FLAVIUS VAUSSENAT;PUBLIC;0;0;482;38580
2022;LYCEE PROF PRIVE DES METIERS;LE BREDA;PRIVE;0;0;36;38580
2022;COLLEGE PRIVE;SAINT JOSEPH;PRIVE;0;0;471;38300
2022;COLLEGE;OLYMPE DE GOUGES;PUBLIC;0;0;441;38160
2022;LYCEE D'ENSEIGNEMENT ADAPTE;PIERRE RABHI;PUBLIC;0;0;57;38640
2022;COLLEGE;GEORGES POMPIDOU;PUBLIC;0;0;456;38640
2022;COLLEGE;LAMARTINE;PUBLIC;0;0;790;38460
2022;COLLEGE;PABLO PICASSO;PUBLIC;1;0;391;38130
2022;LP LYCEE DES METIERS;GUYNEMER;PUBLIC;0;0;15;38001
2022;COLLEGE PRIVE;NOTRE DAME DE SION;PRIVE;0;0;588;38100
2022;COLLEGE;FANTIN- LATOUR;PUBLIC;0;0;605;38000
2022;COLLEGE;INTERNATIONAL EUROPOLE;PUBLIC;0;0;617;38000
2022;COLLEGE;JACQUES PREVERT;PUBLIC;0;0;532;38540
2022;LYCEE POLYVALENT;HECTOR BERLIOZ;PUBLIC;0;0;24;38260
2022;COLLEGE;DU VALLON DES MOTTES;PUBLIC;0;0;188;38770
2022;LPO LYCEE DES METIERS;ELIE CARTAN;PUBLIC;0;0;23;38354
2022;COLLEGE;ANNE FRANK;PUBLIC;0;0;602;38290
2022;COLLEGE;LIERS ET LEMPS;PUBLIC;0;0;609;38690
2022;LYCEE PROFESSIONNEL PRIVE;JEANNE D'ARC;PRIVE;0;0;24;38550
2022;COLLEGE PRIVE;JEANNE D'ARC;PRIVE;0;0;595;38550
2022;COLLEGE;MARCEL BOUVIER;PUBLIC;0;0;695;38490
2022;COLLEGE;ROBERT DOISNEAU;PUBLIC;0;0;481;38081
2022;COLLEGE;LES BUCLOS;PUBLIC;0;0;316;38240
2022;COLLEGE;MARCEL CHENE;PUBLIC;0;0;670;38530
2022;COLLEGE;GEORGES BRASSENS;PUBLIC;0;0;461;38780
2022;LYCEE POLYVALENT;DE L'EDIT;PUBLIC;0;0;31;38150
2022;COLLEGE;BARNAVE;PUBLIC;0;0;720;38521
2022;COLLEGE;GRESIVAUDAN;PUBLIC;0;0;706;38330
2022;COLLEGE;ALEXANDRE FLEMING;PUBLIC;0;0;776;38360
2022;COLLEGE;PIERRE DUBOIS;PUBLIC;0;0;447;38170
2022;COLLEGE;CLAUDE ET GERMAIN GRANGE;PUBLIC;0;0;858;38200
2022;COLLEGE PRIVE;ROBIN;PRIVE;0;0;1004;38204
2022;COLLEGE;JEAN PREVOST;PUBLIC;0;0;715;38250
2022;COLLEGE;LA GARENNE;PUBLIC;0;0;591;38503
2022;COLLEGE;MARLIOZ;PUBLIC;0;0;594;73103
2022;COLLEGE PRIVE;JEANNE D ARC;PRIVE;0;0;318;73203
2022;LYCEE PROF PRIVE DES METIERS;SAINTE GENEVIEVE;PRIVE;0;0;18;73000
2022;COLLEGE;LOUISE DE SAVOIE;PUBLIC;0;0;627;73000
2022;COLLEGE;BEATRICE DE SAVOIE;PUBLIC;0;0;362;73360
2022;COLLEGE PRIVE;SAINTE THERESE;PRIVE;0;0;161;73600
2022;COLLEGE;JOSEPH ET XAVIER DE MAISTRE;PUBLIC;0;0;567;73230
2022;COLLEGE;ERNEST PERRIER DE LA BATHIE;PUBLIC;0;0;372;73400
2022;COLLEGE;DU VAL GELON;PUBLIC;0;0;538;73110
2022;COLLEGE;CHARLES DULLIN;PUBLIC;0;0;348;73170
2022;LPO LYCEE DES METIERS;BOISSY D'ANGLAS;PUBLIC;0;0;23;07101
2022;COLLEGE;ALBERT MERCOYROL;PUBLIC;0;0;297;07350
2022;COLLEGE;DU VIVARAIS;PUBLIC;0;0;213;07270
2022;LP LYCEE DES METIERS;HOTELIER;PUBLIC;0;0;18;07110
2022;COLLEGE;LES TROIS VALLEES;PUBLIC;0;0;574;07800
2022;COLLEGE;DES DEUX VALLEES;PUBLIC;0;0;271;07160
2022;COLLEGE;MARCEL CHAMONTIN;PUBLIC;0;0;641;07401
2022;COLLEGE;JOSEPH DURAND;PUBLIC;0;0;239;07560
2022;COLLEGE;DE LA MONTAGNE ARDECHOISE;PUBLIC;0;0;87;07510
2022;COLLEGE;DE L' EYRIEUX;PUBLIC;0;0;191;07190
2022;COLLEGE PRIVE;NOTRE DAME;PRIVE;0;0;491;07300
2022;COLLEGE;GEORGES GOUY;PUBLIC;0;0;343;07600
2022;COLLEGE;DOCTEUR PIERRE DELARBRE;PUBLIC;0;0;232;07240
2022;COLLEGE;GERARD GAUD;PUBLIC;0;0;806;26500
2022;COLLEGE;HENRI BARBUSSE;PUBLIC;0;0;193;26170
2022;COLLEGE PRIVE;CHATEAUNEUF;PRIVE;0;0;200;26330
2022;COLLEGE;SPORT NATURE;PUBLIC;0;0;213;26420
2022;COLLEGE;DANIEL FAUCHER;PUBLIC;0;0;417;26270
2022;COLLEGE PRIVE;CHABRILLAN ST JEAN-BAPTISTE;PRIVE;0;0;476;26200
2022;COLLEGE;GUSTAVE JAUME;PUBLIC;0;1;387;26702
2022;COLLEGE;ETIENNE-JEAN LAPASSAT;PUBLIC;1;0;700;26106
2022;COLLEGE;ANDRE MALRAUX;PUBLIC;0;0;693;26102
2022;COLLEGE;JEAN PERRIN;PUBLIC;0;0;622;26130
2022;COLLEGE;DENIS BRUNET;PUBLIC;0;0;479;26210
2022;COLLEGE;CAMILLE VERNET;PUBLIC;0;0;529;26021
2022;COLLEGE PRIVE;SAINT VICTOR;PRIVE;0;0;653;26000
2022;COLLEGE;RENE LONG;PUBLIC;0;0;563;74540
2022;COLLEGE;EVIRE;PUBLIC;0;0;664;74940
2022;COLLEGE PRIVE;LA SALLE;PRIVE;0;0;691;74940
2022;COLLEGE PRIVE;SAINT JEAN BOSCO;PRIVE;0;0;654;74303
2022;COLLEGE;G ANTHONIOZ DE GAULLE;PUBLIC;1;0;951;74302
2022;LYCEE PROFESSIONNEL PRIVE;SAINT VINCENT;PRIVE;0;0;40;74160
2022;COLLEGE;DU BAS CHABLAIS;PUBLIC;0;0;654;74140
2022;COLLEGE PRIVE;DEMOTZ DE LA SALLE;PRIVE;0;0;726;74150
2022;COLLEGE;DU CHERAN;PUBLIC;0;0;576;74150
2022;COLLEGE;DU PAYS DE GAVOT;PUBLIC;0;0;496;74500
2022;COLLEGE;ANDRE CORBET;PUBLIC;0;0;189;74340
2022;COLLEGE;LES ARAVIS;PUBLIC;0;0;614;74230
2022;LYCEE PROFESSIONNEL;DU CHABLAIS;PUBLIC;0;0;24;74207
2022;COLLEGE PRIVE;SAINT FRANCOIS;PRIVE;0;0;919;74100
2022;LP LYCEE DES METIERS;JEAN CLAUDE AUBRY;PUBLIC;0;0;24;38303
2022;COLLEGE;JULES FLANDRIN;PUBLIC;0;0;471;38700
2022;COLLEGE PRIVE;RONDEAU MONTFLEURY EUROPE;PRIVE;0;0;625;38700
2022;COLLEGE;PLAN MENU;PUBLIC;0;0;792;38500
2022;LYCEE PROFESSIONNEL;THOMAS EDISON;PUBLIC;0;0;25;38130
2022;COLLEGE;JULES VALLES;PUBLIC;0;0;432;38602
2022;COLLEGE PRIVE;DON BOSCO;PRIVE;0;0;591;38610
2022;COLLEGE;ICARE;PUBLIC;0;0;538;38570
2022;COLLEGE;AIME CESAIRE;PUBLIC;0;0;560;38037
2022;COLLEGE;JONGKIND;PUBLIC;0;0;555;38260
2022;COLLEGE PRIVE;SAINT JOSEPH;PRIVE;0;0;259;38350
2022;COLLEGE;LE CALLOUD;PUBLIC;0;0;809;38110
2022;COLLEGE PRIVE;SAINT BRUNO;PRIVE;0;0;623;38110
2022;COLLEGE;LA PIERRE AIGUILLE;PUBLIC;0;0;641;38660
2022;COLLEGE;STEPHEN HAWKING;PUBLIC;0;0;622;38080
2022;COLLEGE;LIONEL TERRAY;PUBLIC;0;0;539;38240
2022;COLLEGE;LE VERGERON;PUBLIC;0;0;516;38430
2022;COLLEGE;DE PERANCHE;PUBLIC;0;0;428;38790
2022;COLLEGE PRIVE;SACRE COEUR;PRIVE;0;0;313;38430
2022;COLLEGE;LES DAUPHINS;PUBLIC;0;0;637;38110
2022;LYCEE POLYVALENT;LA SAULAIE;PUBLIC;0;0;24;38162
2022;COLLEGE;PHILIPPE COUSTEAU;PUBLIC;0;0;667;38230
2022;LPO LYCEE DES METIERS;GALILEE;PUBLIC;0;0;24;38209
2022;COLLEGE;LOUIS ARAGON;PUBLIC;1;0;559;38090
2022;COLLEGE;SONIA DELAUNAY;PUBLIC;0;0;496;38090
2022;COLLEGE PRIVE;JEAN-PAUL II;PRIVE;0;0;502;38460
2022;COLLEGE;LES MATTONS;PUBLIC;0;0;738;38220
2022;LYCEE PROFESSIONNEL PRIVE;LES PRAIRIES;PRIVE;0;0;20;38500
2022;COLLEGE PRIVE;NOTRE DAME DES VICTOIRES;PRIVE;0;0;408;38500
2022;COLLEGE;LA COMBE DE SAVOIE;PUBLIC;1;0;704;73200
2022;LYCEE D'ENSEIGNEMENT ADAPTE;LE MIRANTIN;PUBLIC;0;0;70;73208
2022;COLLEGE;SAINT EXUPERY;PUBLIC;0;0;623;73704
2022;COLLEGE;LE BONRIEU;PUBLIC;0;0;299;73350
2022;LPO LYCEE DES METIERS;MONGE;PUBLIC;0;0;24;73000
2022;COLLEGE PRIVE;NOTRE DAME DU ROCHER;PRIVE;0;0;358;73000
2022;COLLEGE;BISSY;PUBLIC;0;0;355;73000
2022;COLLEGE;DE BOIGNE;PUBLIC;0;0;345;73290
2022;COLLEGE;EDMOND ROSTAND;PUBLIC;0;0;405;73490
2022;COLLEGE;LA VANOISE;PUBLIC;0;0;399;73500
2022;LYCEE POLYVALENT;PAUL HEROULT;PUBLIC;0;0;24;73302
2022;COLLEGE;MAURIENNE;PUBLIC;0;0;642;73300
2022;COLLEGE;LES FRONTAILLES;PUBLIC;0;0;514;73250
2022;COLLEGE;LA LAUZIERE;PUBLIC;0;0;335;73220
2021;COLLEGE;ALBERT MERCOYROL;PUBLIC;0;0;276;07350
2021;LP LYCEE DES METIERS;HOTELIER;PUBLIC;0;0;21;07110
2021;COLLEGE;LES TROIS VALLEES;PUBLIC;0;0;538;07800
2021;COLLEGE;LEONCE VIELJEUX;PUBLIC;0;0;302;07140
2021;LYCEE PROF PRIVE DES METIERS;NOTRE DAME;PRIVE;0;0;34;07000
2021;COLLEGE PRIVE;SAINT JOSEPH;PRIVE;0;0;229;07120
2021;COLLEGE;LOUIS JOUVET;PUBLIC;0;0;105;07320
2021;COLLEGE;DE LA MONTAGNE ARDECHOISE;PUBLIC;0;0;100;07510
2021;COLLEGE;MARIE CURIE;PUBLIC;0;0;1032;07301
2021;COLLEGE;LABOISSIERE;PUBLIC;0;0;413;07170
2021;COLLEGE;FRANCOIS JEAN ARMORIN;PUBLIC;0;0;407;26402
2021;COLLEGE;EUROPA;PUBLIC;1;0;641;26200
2021;COLLEGE;ALAIN BORNE;PUBLIC;0;0;564;26216
2021;LYCEE PROFESSIONNEL;AUGUSTE BOUVET;PUBLIC;0;0;36;26102
2021;COLLEGE;ALBERT TRIBOULET;PUBLIC;1;0;218;26102
2021;COLLEGE;JOSEPHINE BAKER;PUBLIC;0;0;420;26260
2021;COLLEGE PRIVE;SAINT-PIERRE ET SAINT-PAUL LE;PRIVE;0;0;301;26260
2021;COLLEGE;ANDRE COTTE;PUBLIC;0;0;734;26240
2021;COLLEGE;DO MISTRAU;PUBLIC;0;0;277;26790
2021;COLLEGE PRIVE;SAINTE ANNE;PRIVE;0;0;525;26000
2021;COLLEGE PRIVE;SAINT VICTOR;PRIVE;0;0;641;26000
2021;COLLEGE PRIVE;LES TILLEULS;PRIVE;0;0;476;74000
2021;COLLEGE PRIVE;SAINT FRANCOIS LES CORDELIERS;PRIVE;0;0;456;74600
2021;LYCEE POLYVALENT;LES BRESSIS;PRIVE;0;0;30;74600
2021;LYCEE POLYVALENT PRIVE;ST JEAN BOSCO LES CORDELIERS;PRIVE;0;0;15;74301
2021;COLLEGE;DU BAS CHABLAIS;PUBLIC;0;0;640;74140
2021;COLLEGE PRIVE;SAINT FRANCOIS;PRIVE;0;0;345;74140
2021;COLLEGE;LES RIVES DU LEMAN;PUBLIC;0;0;755;74500
2021;COLLEGE PRIVE;SAINT BRUNO;PRIVE;0;0;251;74500
2021;COLLEGE PRIVE;SAINT JEAN-BAPTISTE;PRIVE;0;0;246;74120
2021;COLLEGE;JEAN JACQUES GALLAY;PUBLIC;1;0;856;74954
2021;LYCEE PROFESSIONNEL;DU CHABLAIS;PUBLIC;0;0;24;74207
2021;COLLEGE;CHAMPAGNE;PUBLIC;0;0;941;74200
2021;COLLEGE;PAUL LANGEVIN;PUBLIC;0;0;1075;74108
2021;COLLEGE;FLAVIUS VAUSSENAT;PUBLIC;0;0;494;38580
2021;COLLEGE;PRE BENIT;PUBLIC;0;0;842;38300
2021;COLLEGE PRIVE;SAINT MICHEL;PRIVE;0;0;566;38300
2021;COLLEGE PRIVE;SAINT JOSEPH;PRIVE;0;0;471;38300
2021;COLLEGE;OLYMPE DE GOUGES;PUBLIC;0;0;437;38160
2021;COLLEGE PRIVE;RONDEAU MONTFLEURY EUROPE;PRIVE;0;0;598;38700
2021;COLLEGE;JEAN VILAR;PUBLIC;0;1;407;38130
2021;LYCEE PROFESSIONNEL;THOMAS EDISON;PUBLIC;0;0;24;38130
2021;COLLEGE;ICARE;PUBLIC;0;0;539;38570
2021;LYCEE PROF PRIVE DES METIERS;DU TERTIAIRE LES CHARMILLES;PRIVE;0;0;55;38100
2021;COLLEGE;OLYMPIQUE;PUBLIC;1;0;501;38035
2021;COLLEGE;LUCIE AUBRAC;PUBLIC;0;1;389;38036
2021;COLLEGE;INTERNATIONAL EUROPOLE;PUBLIC;0;0;618;38000
2021;COLLEGE;AIME CESAIRE;PUBLIC;0;0;596;38037
2021;LYCEE POLYVALENT;HECTOR BERLIOZ;PUBLIC;0;0;24;38260
2021;COLLEGE PRIVE;SAINT JOSEPH;PRIVE;0;0;249;38350
2021;COLLEGE;LOUIS MAUBERRET;PUBLIC;0;0;543;38350
2021;COLLEGE;ANNE FRANK;PUBLIC;0;0;611;38290
2021;COLLEGE PRIVE;JEANNE D'ARC;PRIVE;0;0;575;38550
2021;LYCEE POLYVALENT;CHARLES GABRIEL PRAVAZ;PUBLIC;0;0;22;38480
2021;COLLEGE;MARCEL BOUVIER;PUBLIC;0;0;649;38490
2021;COLLEGE;STEPHEN HAWKING;PUBLIC;0;0;610;38080
2021;COLLEGE;DU TRIEVES;PUBLIC;0;0;206;38710
2021;COLLEGE;LIONEL TERRAY;PUBLIC;0;0;577;38240
2021;COLLEGE;MARCEL CUYNAT;PUBLIC;0;0;330;38650
2021;COLLEGE;FERNAND LEGER;PUBLIC;0;0;545;38400
2021;COLLEGE;FREDERIC MISTRAL;PUBLIC;0;0;668;38554
2021;COLLEGE;MARCEL MARIOTTE;PUBLIC;0;0;412;38870
2021;COLLEGE;DE L'ISLE;PUBLIC;0;0;629;38200
2021;COLLEGE PRIVE;ROBIN;PRIVE;0;0;1003;38204
2021;COLLEGE;JEAN PREVOST;PUBLIC;0;0;732;38250
2021;COLLEGE;LOUIS ARAGON;PUBLIC;1;0;563;38090
2021;LPO LYCEE DES METIERS;PORTES DE L'OISANS;PUBLIC;0;0;24;38220
2021;COLLEGE PRIVE;SAINT JOSEPH;PRIVE;0;0;710;38500
2021;COLLEGE PRIVE;TALMUDIQUE;PRIVE;0;0;38;73100
2021;LYCEE PROFESSIONNEL;LE GRAND ARC;PUBLIC;0;0;21;73204
2021;LYCEE PROFESSIONNEL PRIVE;LE MARGERIAZ;PRIVE;0;0;26;73000
2021;COLLEGE;JULES FERRY;PUBLIC;0;0;720;73000
2021;COLLEGE;DE BOIGNE;PUBLIC;0;0;343;73290
2021;LP LYCEE DES METIERS;LE NIVOLET;PUBLIC;0;0;18;73490
2021;COLLEGE;PIERRE ET MARIE CURIE;PUBLIC;0;0;829;73801
2021;COLLEGE;ST ETIENNE DE CUINES;PUBLIC;0;0;314;73130
2021;COLLEGE;LA LAUZIERE;PUBLIC;0;0;324;73220
2021;COLLEGE;DU VAL GELON;PUBLIC;0;0;542;73110
2020;COLLEGE;LE LAOUL;PUBLIC;1;0;523;07700
2020;COLLEGE;LES TROIS VALLEES;PUBLIC;0;0;524;07800
2020;LYCEE PROF PRIVE DES METIERS;NOTRE DAME;PRIVE;0;0;36;07000
2020;COLLEGE;DE CRUSSOL;PUBLIC;0;0;569;07130
2020;COLLEGE PRIVE;SAINT JOSEPH EN VAL D'AY;PRIVE;0;0;269;07290
2020;COLLEGE;MARIE CURIE;PUBLIC;0;0;1079;07301
2020;COLLEGE;DOCTEUR PIERRE DELARBRE;PUBLIC;0;0;247;07240
2020;COLLEGE;GERARD GAUD;PUBLIC;0;0;797;26500
2020;COLLEGE;MARC SEIGNOBOS;PUBLIC;0;0;615;26120
2020;COLLEGE PRIVE;CHATEAUNEUF;PRIVE;0;0;217;26330
2020;COLLEGE PRIVE;SAINT MICHEL;PRIVE;0;0;425;26702
2020;COLLEGE;ANDRE COTTE;PUBLIC;0;0;752;26240
2020;COLLEGE PRIVE;SAINTE ANNE;PRIVE;0;0;530;26000
2020;COLLEGE;PAUL VALERY;PUBLIC;1;0;469;26000
2020;LP LYCEE DES METIERS;AMBLARD;PUBLIC;0;0;22;26000
2020;COLLEGE;JEAN MARIE MOLLIET;PUBLIC;0;0;436;74420
2020;COLLEGE;SAMIVEL;PUBLIC;0;0;675;74130
2020;COLLEGE PRIVE;JEANNE D'ARC;PRIVE;0;0;213;74400
2020;LPO LYCEE DES METIERS;CHARLES PONCET;PUBLIC;0;0;23;74302
2020;LYCEE POLYVALENT PRIVE;ST JEAN BOSCO LES CORDELIERS;PRIVE;0;0;19;74301
2020;COLLEGE PRIVE;SAINT FRANCOIS;PRIVE;0;0;335;74140
2020;COLLEGE;CAMILLE CLAUDEL;PUBLIC;0;0;574;74970
2020;COLLEGE;DE VARENS;PUBLIC;0;0;774;74190
2020;COLLEGE;SIMONE VEIL;PUBLIC;0;0;533;74330
2020;COLLEGE;LA PIERRE AUX FEES;PUBLIC;0;0;837;74930
2020;COLLEGE;LE CLERGEON;PUBLIC;0;0;670;74152
2020;COLLEGE;DU CHERAN;PUBLIC;0;0;479;74150
2020;COLLEGE;JEAN JACQUES ROUSSEAU;PUBLIC;0;0;649;74164
2020;COLLEGE;DU MONT DES PRINCES;PUBLIC;0;0;544;74910
2020;COLLEGE;JACQUES BREL;PUBLIC;0;0;431;74440
2020;LYCEE PROFESSIONNEL;DU CHABLAIS;PUBLIC;0;0;24;74207
2020;COLLEGE PRIVE;SAINT MICHEL;PRIVE;0;0;573;38300
2020;COLLEGE PRIVE;SAINT JOSEPH;PRIVE;0;0;471;38300
2020;LP LYCEE DES METIERS;JEAN CLAUDE AUBRY;PUBLIC;0;0;22;38303
2020;COLLEGE;LOUIS LUMIERE;PUBLIC;0;0;584;38432
2020;COLLEGE;VERCORS;PUBLIC;1;0;368;38100
2020;COLLEGE;OLYMPIQUE;PUBLIC;1;0;468;38035
2020;COLLEGE;JACQUES PREVERT;PUBLIC;0;0;555;38540
2020;LYCEE POLYVALENT;UNITE SOINS ETUDES GRESIVAUDAN;PUBLIC;0;0;23;38700
2020;COLLEGE;ANNE FRANK;PUBLIC;0;0;584;38290
2020;COLLEGE;LIERS ET LEMPS;PUBLIC;0;0;618;38690
2020;COLLEGE;ROBERT DOISNEAU;PUBLIC;0;0;468;38081
2020;COLLEGE;LE VERGERON;PUBLIC;0;0;481;38430
2020;LYCEE PROFESSIONNEL;L'ODYSSEE;PUBLIC;0;0;24;38231
2020;COLLEGE;LE GRAND CHAMP;PUBLIC;1;0;731;38232
2020;COLLEGE;DE L'EDIT;PUBLIC;1;0;587;38150
2020;COLLEGE PRIVE;SACRE COEUR;PRIVE;0;0;313;38430
2020;COLLEGE;EDOUARD VAILLANT;PUBLIC;0;0;391;38400
2020;COLLEGE;LES ALLINGES;PUBLIC;0;0;453;38070
2020;COLLEGE;MARCEL MARIOTTE;PUBLIC;0;0;394;38870
2020;COLLEGE;LE MASSEGU;PUBLIC;0;0;639;38450
2020;COLLEGE;RENE  CASSIN;PUBLIC;0;0;383;38090
2020;COLLEGE PRIVE;SAINT JOSEPH;PRIVE;0;0;707;38500
2020;LYCEE PROFESSIONNEL PRIVE;LES PRAIRIES;PRIVE;0;0;15;38500
2020;COLLEGE PRIVE;TALMUDIQUE;PRIVE;0;0;67;73100
2020;LYCEE D'ENSEIGNEMENT ADAPTE;LE MIRANTIN;PUBLIC;0;0;56;73208
2020;COLLEGE;PIERRE GRANGE;PUBLIC;0;0;393;73200
2020;COLLEGE;JEAN MOULIN;PUBLIC;0;0;309;73202
2020;COLLEGE PRIVE;JEANNE D ARC;PRIVE;0;0;326;73203
2020;COLLEGE PRIVE;CATHOLIQUE ST F. DE SALES;PRIVE;0;0;992;73025
2020;COLLEGE;LOUISE DE SAVOIE;PUBLIC;0;0;659;73000
2020;LP LYCEE DES METIERS;LA CARDINIERE;PUBLIC;0;0;9;73000
2020;COLLEGE PRIVE;NOTRE DAME DE LA VILLETTE;PRIVE;0;0;454;73490
2020;COLLEGE;JOSEPH ET XAVIER DE MAISTRE;PUBLIC;0;0;551;73230
2020;COLLEGE;ST ETIENNE DE CUINES;PUBLIC;0;0;327;73130
2020;COLLEGE PRIVE;SAINT PAUL;PRIVE;0;0;165;73730
2020;COLLEGE;LES FRONTAILLES;PUBLIC;0;0;491;73250
2019;COLLEGE;LA LOMBARDIERE;PUBLIC;0;0;530;07100
2019;COLLEGE PRIVE;ST FRANCOIS D'ASSISE;PRIVE;0;0;761;07203
2019;COLLEGE;LE LAOUL;PUBLIC;1;0;549;07700
2019;LYCEE PROFESSIONNEL;LEON PAVIN;PUBLIC;0;0;23;07210
2019;COLLEGE;CHARLES DE GAULLE;PUBLIC;0;0;653;07500
2019;COLLEGE PRIVE;CHARLES DE FOUCAULD;PRIVE;0;0;81;07270
2019;COLLEGE PRIVE;LE PORTALET NOTRE DAME;PRIVE;0;0;205;07110
2019;COLLEGE;DES DEUX VALLEES;PUBLIC;0;0;300;07160
2019;COLLEGE;LEONCE VIELJEUX;PUBLIC;0;0;306;07140
2019;COLLEGE;JOSEPH DURAND;PUBLIC;0;0;245;07560
2019;COLLEGE;DU DIOIS;PUBLIC;0;0;435;26150
2019;COLLEGE;ERNEST CHALAMEL;PUBLIC;0;0;381;26220
2019;COLLEGE;JOSEPH  BEDIER;PUBLIC;0;0;332;26530
2019;COLLEGE;MARGUERITE DURAS;PUBLIC;0;0;618;26200
2019;ETAB.REGIONAL ENSEIGNT ADAPTE;PORTES DU SOLEIL;PUBLIC;0;0;74;26200
2019;COLLEGE;LIS ISCLO D'OR;PUBLIC;0;0;554;26702
2019;LYCEE PROFESSIONNEL PRIVE;NOTRE DAME DES CHAMPS;PRIVE;0;0;26;26106
2019;COLLEGE;ANDRE MALRAUX;PUBLIC;0;0;663;26102
2019;COLLEGE;ALBERT TRIBOULET;PUBLIC;1;0;250;26102
2019;COLLEGE;DO MISTRAU;PUBLIC;0;0;283;26790
2019;COLLEGE;MARCEL PAGNOL;PUBLIC;1;0;663;26000
2019;COLLEGE PRIVE;SAINT VICTOR;PRIVE;0;0;608;26000
2019;COLLEGE;RENE LONG;PUBLIC;0;0;598;74540
2019;COLLEGE PRIVE;LA SALLE;PRIVE;0;0;692;74940
2019;COLLEGE PRIVE;SAINT FRANCOIS LES CORDELIERS;PRIVE;0;0;427;74600
2019;COLLEGE PRIVE;LA SALLE ANNECY - PRINGY;PRIVE;0;0;889;74371
2019;LP LYCEE DES METIERS;TOM MOREL;PUBLIC;0;0;21;74960
2019;COLLEGE PRIVE;NOTRE DAME;PRIVE;0;0;286;74470
2019;COLLEGE;SAMIVEL;PUBLIC;0;0;636;74130
2019;COLLEGE;DU BAS CHABLAIS;PUBLIC;0;0;675;74140
2019;COLLEGE;LES RIVES DU LEMAN;PUBLIC;0;0;756;74500
2019;COLLEGE;JEAN LACHENAL;PUBLIC;0;0;636;74210
2019;COLLEGE;JACQUES PREVERT;PUBLIC;1;0;525;74240
2019;COLLEGE;LA PIERRE AUX FEES;PUBLIC;0;0;807;74930
2019;LPO PR;DEMOTZ DE LA SALLE;PRIVE;0;0;17;74150
2019;COLLEGE;GASPARD MONGE;PUBLIC;0;0;621;74490
2019;COLLEGE;ARTHUR RIMBAUD;PUBLIC;0;0;839;74161
2019;COLLEGE;DU PAYS DE GAVOT;PUBLIC;0;0;474;74500
2019;COLLEGE;KARINE RUBY;PUBLIC;0;0;624;74800
2019;LYCEE PROFESSIONNEL PRIVE;JEANNE D ARC;PRIVE;0;0;21;74207
2019;COLLEGE PRIVE;SAINT JOSEPH;PRIVE;0;0;473;38300
2019;LP LYCEE DES METIERS;JEAN CLAUDE AUBRY;PUBLIC;0;0;22;38303
2019;COLLEGE;LA MOULINIERE;PUBLIC;0;0;564;38420
2019;COLLEGE;LOUIS LUMIERE;PUBLIC;0;0;613;38432
2019;COLLEGE;JEAN VILAR;PUBLIC;0;1;420;38130
2019;COLLEGE;LE CHAMANDIER;PUBLIC;0;0;586;38610
2019;COLLEGE;CHAMPOLLION;PUBLIC;0;0;559;38000
2019;LYCEE POLYVALENT;HECTOR BERLIOZ;PUBLIC;0;0;24;38260
2019;LPO LYCEE DES METIERS;ELIE CARTAN;PUBLIC;0;0;21;38354
2019;COLLEGE;ANNE FRANK;PUBLIC;0;0;560;38290
2019;COLLEGE;MARCEL BOUVIER;PUBLIC;0;0;668;38490
2019;COLLEGE;FRANCOIS TRUFFAUT;PUBLIC;0;0;504;38080
2019;COLLEGE;LES BUCLOS;PUBLIC;0;0;319;38240
2019;COLLEGE;LE VERGERON;PUBLIC;0;0;451;38430
2019;COLLEGE;LE GRAND CHAMP;PUBLIC;1;0;703;38232
2019;COLLEGE;DE L'EDIT;PUBLIC;1;0;590;38150
2019;COLLEGE;ROSE VALLAND;PUBLIC;0;0;613;38590
2019;COLLEGE;CHARTREUSE;PUBLIC;0;0;513;38950
2019;COLLEGE;LES ALLINGES;PUBLIC;0;0;463;38070
2019;COLLEGE;PIERRE DUBOIS;PUBLIC;0;0;472;38170
2019;COLLEGE;CLAUDE ET GERMAIN GRANGE;PUBLIC;0;0;797;38200
2019;LYCEE PROFESSIONNEL PRIVE;ROBIN ST VINCENT DE PAUL;PRIVE;0;0;50;#N/A
2019;COLLEGE;DE L'ISLE;PUBLIC;0;0;665;38200
2019;COLLEGE;JOSEPH CHASSIGNEUX;PUBLIC;0;0;554;38470
2019;LPO LYCEE DES METIERS;PORTES DE L'OISANS;PUBLIC;0;0;24;38220
2019;COLLEGE;LES MATTONS;PUBLIC;0;0;793;38220
2019;COLLEGE;PIERRE GRANGE;PUBLIC;0;0;388;73200
2019;LYCEE PROFESSIONNEL PRIVE;LE MARGERIAZ;PRIVE;0;0;24;73000
2019;COLLEGE;JEAN MERMOZ;PUBLIC;0;0;542;73230
2019;COLLEGE;LE BEAUFORTAIN;PUBLIC;0;0;189;73270
2019;COLLEGE;JULES FERRY;PUBLIC;0;0;624;73000
2019;COLLEGE;JACQUES PREVERT;PUBLIC;0;0;458;73410
2019;COLLEGE;EDMOND ROSTAND;PUBLIC;0;0;425;73490
2019;COLLEGE;LA VANOISE;PUBLIC;0;0;391;73500
2019;COLLEGE;JEAN ROSTAND;PUBLIC;0;0;817;73604
2019;COLLEGE;LA FORET;PUBLIC;0;0;652;73240
2021;LPO LYCEE DES METIERS;BOISSY D'ANGLAS;PUBLIC;0;0;23;07101
2021;COLLEGE PRIVE;SACRE COEUR;PRIVE;0;0;699;07100
2021;LYCEE PROF PRIVE DES METIERS;JULES FROMENT;PRIVE;0;0;50;#N/A
2021;COLLEGE;VALLEE DE LA BEAUME;PUBLIC;0;0;245;07260
2021;COLLEGE;LA SEGALIERE;PUBLIC;0;0;201;07110
2021;COLLEGE PRIVE;SAINT JOSEPH EN VAL D'AY;PRIVE;0;0;250;07290
2021;COLLEGE PRIVE;NOTRE DAME;PRIVE;0;0;495;07300
2021;COLLEGE;GEORGES GOUY;PUBLIC;0;0;354;07600
2021;COLLEGE PRIVE;LES MARISTES;PRIVE;0;0;783;26300
2021;COLLEGE;REVESZ LONG;PUBLIC;0;0;630;26400
2021;COLLEGE;SPORT NATURE;PUBLIC;0;0;221;26420
2021;COLLEGE;DANIEL FAUCHER;PUBLIC;0;0;405;26270
2021;COLLEGE;GUSTAVE JAUME;PUBLIC;0;1;373;26702
2021;COLLEGE;ANDRE MALRAUX;PUBLIC;0;0;676;26102
2021;COLLEGE;JEAN PERRIN;PUBLIC;0;0;619;26130
2021;COLLEGE;FERNAND BERTHON;PUBLIC;1;0;477;26140
2021;COLLEGE;JEAN ZAY;PUBLIC;1;0;545;26000
2021;COLLEGE;CAMILLE VERNET;PUBLIC;0;0;493;26021
2021;LP LYCEE DES METIERS;AMBLARD;PUBLIC;0;0;27;26000
2021;COLLEGE;LES BALMETTES;PUBLIC;0;0;480;74006
2021;COLLEGE PRIVE;LA SALLE;PRIVE;0;0;691;74940
2021;COLLEGE PRIVE;NOTRE DAME;PRIVE;0;0;286;74470
2021;COLLEGE;ROGER FRISON ROCHE;PUBLIC;0;0;513;74401
2021;LPO LYCEE DES METIERS;CHARLES PONCET;PUBLIC;0;0;12;74302
2021;COLLEGE;G ANTHONIOZ DE GAULLE;PUBLIC;1;0;963;74302
2021;LYCEE PROFESSIONNEL PRIVE;SAINT VINCENT;PRIVE;0;0;31;74160
2021;COLLEGE PRIVE;ADVENTISTE MAURICE TIECHE;PRIVE;0;0;99;74160
2021;COLLEGE;PAUL EMILE VICTOR;PUBLIC;0;0;817;74380
2021;LYCEE PROF PRIVE DES METIERS;SAINTE FAMILLE;PRIVE;0;0;24;#N/A
2021;COLLEGE;EMILE ALLAIS;PUBLIC;0;0;272;74120
2021;COLLEGE;GASPARD MONGE;PUBLIC;0;0;666;74490
2021;COLLEGE PRIVE;LA PRESENTATION DE MARIE;PRIVE;0;0;608;74163
2021;COLLEGE;JEAN JACQUES ROUSSEAU;PUBLIC;0;0;610;74164
2021;COLLEGE;DU VERNEY;PUBLIC;0;0;525;74700
2021;COLLEGE PRIVE;SAINT JOSEPH;PRIVE;0;0;426;74703
2021;COLLEGE;ANDRE CORBET;PUBLIC;0;0;183;74340
2021;COLLEGE;DU MONT DES PRINCES;PUBLIC;0;0;529;74910
2021;COLLEGE;LES ARAVIS;PUBLIC;0;0;601;74230
2021;COLLEGE;MARTIN LUTHER KING;PUBLIC;0;0;518;38230
2021;COLLEGE;DES COLLINES;PUBLIC;0;0;687;38850
2021;COLLEGE;PLAN MENU;PUBLIC;0;0;784;38500
2021;COLLEGE;LAMARTINE;PUBLIC;0;0;807;38460
2021;COLLEGE;JULES VALLES;PUBLIC;0;0;409;38602
2021;COLLEGE;GERARD PHILIPE;PUBLIC;1;0;460;38602
2021;LYCEE POLYVALENT;EMMANUEL  MOUNIER;PUBLIC;0;0;28;38029
2021;COLLEGE;STENDHAL;PUBLIC;0;0;633;38014
2021;COLLEGE;LE CLOS JOUVIN;PUBLIC;0;0;544;38560
2021;COLLEGE PRIVE;SAINT FRANCOIS;PRIVE;0;0;661;38260
2021;COLLEGE;JONGKIND;PUBLIC;0;0;601;38260
2021;COLLEGE;LE CALLOUD;PUBLIC;0;0;815;38110
2021;COLLEGE;LIERS ET LEMPS;PUBLIC;0;0;596;38690
2021;LYCEE PROFESSIONNEL PRIVE;JEANNE D'ARC;PRIVE;0;0;21;38550
2021;COLLEGE;LA PIERRE AIGUILLE;PUBLIC;0;0;638;38660
2021;COLLEGE;LE VERGERON;PUBLIC;0;0;491;38430
2021;COLLEGE;FRANCOIS AUGUSTE RAVIER;PUBLIC;0;0;613;38510
2021;COLLEGE;LE GRAND CHAMP;PUBLIC;1;0;778;38232
2021;COLLEGE;FREDERIC DARD;PUBLIC;0;0;636;38890
2021;COLLEGE;BARNAVE;PUBLIC;0;0;720;38521
2021;COLLEGE;ROSE VALLAND;PUBLIC;0;0;569;38590
2021;COLLEGE;DE PERANCHE;PUBLIC;0;0;406;38790
2021;COLLEGE;FERNAND BOUVIER;PUBLIC;0;0;756;38440
2021;COLLEGE PRIVE;SACRE COEUR;PRIVE;0;0;323;38430
2021;COLLEGE;LE SAVOURET;PUBLIC;0;0;628;38160
2021;COLLEGE;HENRI WALLON;PUBLIC;1;0;431;38400
2021;COLLEGE;CHARTREUSE;PUBLIC;0;0;549;38950
2021;COLLEGE;LES ALLINGES;PUBLIC;0;0;481;38070
2021;COLLEGE;JEAN FERRAT;PUBLIC;0;0;714;38150
2021;LPO LYCEE DES METIERS;ROGER DESCHAUX;PUBLIC;0;0;47;38360
2021;COLLEGE;CLAUDE ET GERMAIN GRANGE;PUBLIC;0;0;848;38200
2021;LPO LYCEE DES METIERS;GALILEE;PUBLIC;0;0;22;38209
2021;COLLEGE PRIVE;SAINT CHARLES;PRIVE;0;0;801;38217
2021;COLLEGE;LE MASSEGU;PUBLIC;0;0;646;38450
2021;LYCEE PROF PRIVE DES METIERS;LES GORGES;PRIVE;0;0;21;38500
2021;COLLEGE;JOVET;PUBLIC;0;0;437;73212
2021;COLLEGE;MARLIOZ;PUBLIC;0;0;578;73103
2021;COLLEGE;GARIBALDI;PUBLIC;0;0;558;73100
2021;COLLEGE;PIERRE GRANGE;PUBLIC;0;0;368;73200
2021;COLLEGE;JEAN MERMOZ;PUBLIC;0;0;557;73230
2021;COLLEGE;SAINT EXUPERY;PUBLIC;0;0;654;73704
2021;LPO LYCEE DES METIERS;MONGE;PUBLIC;0;0;24;73000
2021;COLLEGE PRIVE;CATHOLIQUE ST F. DE SALES;PRIVE;0;0;992;73025
2021;LYCEE PROF PRIVE DES METIERS;SAINTE GENEVIEVE;PRIVE;0;0;12;73000
2021;COLLEGE;COTE ROUSSE;PUBLIC;0;1;542;73000
2021;LP LYCEE DES METIERS;LA CARDINIERE;PUBLIC;0;0;16;73000
2021;COLLEGE;LE REVARD;PUBLIC;0;0;559;73100
2021;COLLEGE;BEATRICE DE SAVOIE;PUBLIC;0;0;388;73360
2021;LPO LYCEE DES METIERS;RENE PERRIN;PUBLIC;0;0;18;73400
2021;COLLEGE;ERNEST PERRIER DE LA BATHIE;PUBLIC;0;0;379;73400
2021;COLLEGE;CHARLES DULLIN;PUBLIC;0;0;344;73170
2020;COLLEGE PRIVE;NOTRE DAME;PRIVE;0;0;604;07100
2020;LYCEE PROFESSIONNEL PRIVE;MARC SEGUIN;PRIVE;0;0;42;07100
2020;LYCEE PROF PRIVE DES METIERS;JULES FROMENT;PRIVE;0;0;33;#N/A
2020;COLLEGE;DE JASTRES;PUBLIC;0;0;328;07200
2020;COLLEGE PRIVE;MARIE RIVIER;PRIVE;0;0;524;07700
2020;COLLEGE;ALBERT MERCOYROL;PUBLIC;0;0;275;07350
2020;COLLEGE;DU VIVARAIS;PUBLIC;0;0;233;07270
2020;COLLEGE;LEONCE VIELJEUX;PUBLIC;0;0;286;07140
2020;COLLEGE;DE LA MONTAGNE ARDECHOISE;PUBLIC;0;0;80;07510
2020;COLLEGE PRIVE;NOTRE DAME;PRIVE;0;0;494;07300
2020;COLLEGE;HENRI AGERON;PUBLIC;0;0;376;07150
2020;COLLEGE;HENRI BARBUSSE;PUBLIC;0;0;210;26170
2020;COLLEGE PRIVE;SAINT BONNET;PRIVE;0;0;209;26330
2020;COLLEGE;ERNEST CHALAMEL;PUBLIC;0;0;384;26220
2020;COLLEGE;SPORT NATURE;PUBLIC;0;0;219;26420
2020;COLLEGE;JOSEPH  BEDIER;PUBLIC;0;0;346;26530
2020;COLLEGE;DANIEL FAUCHER;PUBLIC;0;0;439;26270
2020;COLLEGE;EUROPA;PUBLIC;1;0;676;26200
2020;COLLEGE PRIVE;CHABRILLAN ST JEAN-BAPTISTE;PRIVE;0;0;446;26200
2020;COLLEGE;LIS ISCLO D'OR;PUBLIC;0;0;521;26702
2020;LYCEE PROFESSIONNEL PRIVE;NOTRE DAME DES CHAMPS;PRIVE;0;0;24;26106
2020;COLLEGE;ETIENNE-JEAN LAPASSAT;PUBLIC;1;0;691;26106
2020;COLLEGE;BENJAMIN MALOSSANE;PUBLIC;0;0;293;26190
2020;COLLEGE;JEAN ZAY;PUBLIC;1;0;534;26000
2020;COLLEGE PRIVE;SAINT VICTOR;PRIVE;0;0;609;26000
2020;COLLEGE;DU VAL D'ABONDANCE;PUBLIC;0;0;186;74360
2020;COLLEGE PRIVE;SAINTE CROIX DES NEIGES;PRIVE;0;0;107;74360
2020;COLLEGE;LES BALMETTES;PUBLIC;0;0;519;74006
2020;LYCEE PROFESSIONNEL PRIVE;ECA;PRIVE;0;0;19;74650
2020;COLLEGE;G ANTHONIOZ DE GAULLE;PUBLIC;1;0;944;74302
2020;LYCEE PROFESSIONNEL PRIVE;SAINT VINCENT;PRIVE;0;0;32;74160
2020;COLLEGE;LOUIS ARMAND;PUBLIC;0;0;711;74350
2020;COLLEGE;JEAN LACHENAL;PUBLIC;0;0;611;74210
2020;COLLEGE;JACQUES PREVERT;PUBLIC;1;0;588;74240
2020;COLLEGE PRIVE;ASSOMPTION MONT BLANC;PRIVE;0;0;100;74170
2020;LYCEE PROFESSIONNEL PRIVE;CECAM;PRIVE;0;0;14;74490
2020;COLLEGE;JEAN MONNET;PUBLIC;0;0;514;74410
2020;COLLEGE;DU PAYS DE GAVOT;PUBLIC;0;0;485;74500
2020;COLLEGE PRIVE;SAINT JOSEPH;PRIVE;0;0;428;74703
2020;COLLEGE;ANDRE CORBET;PUBLIC;0;0;166;74340
2020;COLLEGE PRIVE;SAINT JOSEPH;PRIVE;0;0;485;74230
2020;LYCEE PROFESSIONNEL PRIVE;JEANNE D ARC;PRIVE;0;0;23;74207
2020;COLLEGE;CHAMPAGNE;PUBLIC;0;0;941;74200
2020;LYCEE PROF PRIVE DES METIERS;LE BREDA;PRIVE;0;0;35;38580
2020;COLLEGE PRIVE;SAINT BAPTISTE;PRIVE;0;0;221;38270
2020;COLLEGE;JACQUES BREL;PUBLIC;0;0;607;38270
2020;COLLEGE;MARTIN LUTHER KING;PUBLIC;0;0;498;38230
2020;COLLEGE;OLYMPE DE GOUGES;PUBLIC;0;0;475;38160
2020;COLLEGE PRIVE;RONDEAU MONTFLEURY EUROPE;PRIVE;0;0;601;38700
2020;COLLEGE;PLAN MENU;PUBLIC;0;0;722;38500
2020;COLLEGE;LAMARTINE;PUBLIC;0;0;767;38460
2020;COLLEGE;LA MOULINIERE;PUBLIC;0;0;584;38420
2020;COLLEGE;JULES VALLES;PUBLIC;0;0;417;38602
2020;COLLEGE PRIVE;DON BOSCO;PRIVE;0;0;597;38610
2020;COLLEGE;ICARE;PUBLIC;0;0;542;38570
2020;COLLEGE;STENDHAL;PUBLIC;0;0;589;38014
2020;COLLEGE;AIME CESAIRE;PUBLIC;0;0;604;38037
2020;COLLEGE PRIVE;SAINT FRANCOIS;PRIVE;0;0;665;38260
2020;COLLEGE;STEPHEN HAWKING;PUBLIC;0;0;630;38080
2020;COLLEGE;LIONEL TERRAY;PUBLIC;0;0;552;38240
2020;LYCEE POLYVALENT;DE L'EDIT;PUBLIC;0;0;24;38150
2020;COLLEGE;FREDERIC DARD;PUBLIC;0;0;620;38890
2020;COLLEGE;DE PERANCHE;PUBLIC;0;0;405;38790
2020;COLLEGE;JEAN FERRAT;PUBLIC;0;0;734;38150
2020;COLLEGE;ALEXANDRE FLEMING;PUBLIC;0;0;749;38360
2020;COLLEGE;JULES VERNE;PUBLIC;0;0;493;38760
2020;LYCEE POLYVALENT PRIVE;ROBIN;PRIVE;0;0;66;38204
2020;COLLEGE;FRANCOIS PONSARD;PUBLIC;1;0;726;38200
2020;COLLEGE;LOUIS ARAGON;PUBLIC;1;0;573;38090
2020;COLLEGE;SONIA DELAUNAY;PUBLIC;0;0;452;38090
2020;COLLEGE;LES MATTONS;PUBLIC;0;0;770;38220
2020;LYCEE POLYVALENT;FERDINAND BUISSON;PUBLIC;0;0;23;38501
2020;COLLEGE PRIVE;CATHOLIQUE LAMARTINE;PRIVE;0;0;455;73100
2020;COLLEGE;GARIBALDI;PUBLIC;0;0;537;73100
2020;COLLEGE;JEAN JACQUES PERRET;PUBLIC;0;0;454;73100
2020;LYCEE PROFESSIONNEL PRIVE;LE MARGERIAZ;PRIVE;0;0;11;73000
2020;COLLEGE PRIVE;NOTRE DAME DU ROCHER;PRIVE;0;0;447;73000
2020;COLLEGE;COTE ROUSSE;PUBLIC;0;1;501;73000
2020;COLLEGE;HENRY BORDEAUX;PUBLIC;0;0;462;73160
2020;COLLEGE;JACQUES PREVERT;PUBLIC;0;0;436;73410
2020;COLLEGE;JOSEPH FONTANET;PUBLIC;0;0;472;73460
2020;COLLEGE;LE REVARD;PUBLIC;0;0;549;73100
2020;COLLEGE;DE BOIGNE;PUBLIC;0;0;335;73290
2020;COLLEGE;GEORGE SAND;PUBLIC;0;0;599;73290
2020;LP LYCEE DES METIERS;LE NIVOLET;PUBLIC;0;0;18;73490
2020;COLLEGE;BEATRICE DE SAVOIE;PUBLIC;0;0;389;73360
2020;LYCEE POLYVALENT;PAUL HEROULT;PUBLIC;0;0;24;73302
2020;COLLEGE;ERNEST PERRIER DE LA BATHIE;PUBLIC;0;0;363;73400
2020;COLLEGE;DU VAL GELON;PUBLIC;0;0;505;73110
2022;COLLEGE PRIVE;ST FRANCOIS D'ASSISE;PRIVE;0;0;768;07203
2022;LYCEE PROF PRIVE DES METIERS;JULES FROMENT;PRIVE;0;0;43;#N/A
2022;COLLEGE;ROQUA;PUBLIC;0;0;593;07204
2022;COLLEGE;LEONCE VIELJEUX;PUBLIC;0;0;298;07140
2022;LYCEE PROFESSIONNEL PRIVE;SAINT ANDRE;PRIVE;0;0;35;07400
2022;COLLEGE PRIVE;SAINT JOSEPH;PRIVE;0;0;231;07120
2022;COLLEGE;HENRI AGERON;PUBLIC;0;0;393;07150
2022;COLLEGE;LABOISSIERE;PUBLIC;0;0;426;07170
2022;COLLEGE;MARCELLE RIVIER;PUBLIC;0;0;563;26760
2022;COLLEGE PRIVE;FRANCOIS GONDIN;PRIVE;0;0;288;26120
2022;LYCEE POLYVALENT PRIVE;SAINT LOUIS;PRIVE;0;0;24;26402
2022;ETAB.REGIONAL ENSEIGNT ADAPTE;PORTES DU SOLEIL;PUBLIC;0;0;77;26200
2022;LYCEE POLYVALENT;DR. GUSTAVE JAUME;PUBLIC;0;0;24;26702
2022;LYCEE PROFESSIONNEL;AUGUSTE BOUVET;PUBLIC;0;0;36;26102
2022;LYCEE PROFESSIONNEL PRIVE;NOTRE DAME DES CHAMPS;PRIVE;0;0;26;26106
2022;COLLEGE;FERNAND BERTHON;PUBLIC;1;0;457;26140
2022;LYCEE PROFESSIONNEL;MONTESQUIEU;PUBLIC;0;0;22;26000
2022;COLLEGE;EMILE LOUBET;PUBLIC;0;0;397;26021
2022;COLLEGE PRIVE;NOTRE DAME;PRIVE;0;0;908;26008
2022;COLLEGE PRIVE;SAINTE CROIX DES NEIGES;PRIVE;0;0;105;74360
2022;COLLEGE PRIVE;LA SALLE ANNECY - PRINGY;PRIVE;0;0;889;74371
2022;COLLEGE;RAOUL BLANCHARD;PUBLIC;0;0;746;74008
2022;COLLEGE;LE SEMNOZ;PUBLIC;0;0;797;74600
2022;COLLEGE PRIVE;NOTRE DAME;PRIVE;0;0;277;74470
2022;COLLEGE;JEAN MARIE MOLLIET;PUBLIC;0;0;484;74420
2022;COLLEGE;ROGER FRISON ROCHE;PUBLIC;0;0;504;74401
2022;COLLEGE;LOUIS ARMAND;PUBLIC;0;0;761;74350
2022;COLLEGE PRIVE;SAINT FRANCOIS;PRIVE;0;0;349;74140
2022;COLLEGE;DE VARENS;PUBLIC;0;0;759;74190
2022;LPO PR;DEMOTZ DE LA SALLE;PRIVE;0;0;20;74150
2022;COLLEGE;JEAN MONNET;PUBLIC;0;0;534;74410
2022;COLLEGE;LA MANDALLAZ;PUBLIC;0;0;667;74330
2022;COLLEGE PRIVE;SAINT JOSEPH;PRIVE;0;0;538;74230
2022;LYCEE PROFESSIONNEL PRIVE;JEANNE D ARC;PRIVE;0;0;23;74207
2022;COLLEGE PRIVE;SAINT JOSEPH LA SALLE;PRIVE;0;0;631;74202
2022;COLLEGE;PRE BENIT;PUBLIC;0;0;860;38300
2022;COLLEGE;DE CHAMPIER;PUBLIC;0;0;634;38260
2022;COLLEGE;DES COLLINES;PUBLIC;0;0;668;38850
2022;COLLEGE;LA MOULINIERE;PUBLIC;0;0;632;38420
2022;COLLEGE;LOUIS LUMIERE;PUBLIC;0;0;598;38432
2022;COLLEGE PRIVE;SAINT BRUNO;PRIVE;0;0;305;38380
2022;COLLEGE;VERCORS;PUBLIC;1;0;329;38100
2022;COLLEGE PRIVE;LA SALLE L'AIGLE GRENOBLE;PRIVE;0;0;1026;38000
2022;COLLEGE;LUCIE AUBRAC;PUBLIC;0;1;383;38036
2022;COLLEGE PRIVE;EXTERNAT NOTRE DAME;PRIVE;0;0;640;38100
2022;LYCEE POLYVALENT;CHARLES GABRIEL PRAVAZ;PUBLIC;0;0;36;38480
2022;COLLEGE;MARCEL CUYNAT;PUBLIC;0;0;338;38650
2022;COLLEGE;FRANCOIS AUGUSTE RAVIER;PUBLIC;0;0;593;38510
2022;COLLEGE;LE GRAND CHAMP;PUBLIC;1;0;785;38232
2022;COLLEGE;RAYMOND GUELEN;PUBLIC;0;0;284;38680
2022;COLLEGE;ROBERT DESNOS;PUBLIC;0;0;789;38146
2022;COLLEGE;DE L'EDIT;PUBLIC;1;0;599;38150
2022;COLLEGE;FERNAND BOUVIER;PUBLIC;0;0;722;38440
2022;COLLEGE;LE GRAND SOM;PUBLIC;0;0;305;38380
2022;COLLEGE;LE SAVOURET;PUBLIC;0;0;599;38160
2022;COLLEGE;FREDERIC MISTRAL;PUBLIC;0;0;646;38554
2022;LPO LYCEE DES METIERS;ROGER DESCHAUX;PUBLIC;0;0;46;38360
2022;COLLEGE;MARC SANGNIER;PUBLIC;0;0;533;38180
2022;LYCEE POLYVALENT PRIVE;ROBIN;PRIVE;0;0;63;38204
2022;COLLEGE PRIVE;SAINT CHARLES;PRIVE;0;0;799;38217
2022;COLLEGE;LE MASSEGU;PUBLIC;0;0;677;38450
2022;COLLEGE;BELLEDONNE;PUBLIC;0;0;756;38190
2022;LPO LYCEE DES METIERS;PORTES DE L'OISANS;PUBLIC;0;0;24;38220
2022;LYCEE PROFESSIONNEL;LE GRAND ARC;PUBLIC;0;0;23;73204
2022;COLLEGE;PIERRE GRANGE;PUBLIC;0;0;358;73200
2022;COLLEGE;JEAN MERMOZ;PUBLIC;0;0;564;73230
2022;COLLEGE;HENRY BORDEAUX;PUBLIC;0;0;494;73160
2022;COLLEGE;JOSEPH FONTANET;PUBLIC;0;0;502;73460
2022;COLLEGE;LE REVARD;PUBLIC;0;0;586;73100
2022;LYCEE PROFESSIONNEL PRIVE;SAINTE ANNE - SAVOISIENNE;PRIVE;0;0;64;73290
2022;COLLEGE;DES BAUGES;PUBLIC;0;0;273;73630
2022;COLLEGE;JEAN ROSTAND;PUBLIC;0;0;704;73604
2022;COLLEGE;ST ETIENNE DE CUINES;PUBLIC;0;0;320;73130
2022;COLLEGE;LA FORET;PUBLIC;0;0;613;73240
2022;COLLEGE PRIVE;SAINT PAUL;PRIVE;0;0;143;73730
2022;LPO LYCEE DES METIERS;RENE PERRIN;PUBLIC;0;0;22;73400
2019;LYCEE PROFESSIONNEL PRIVE;MARC SEGUIN;PRIVE;0;0;55;07100
2019;COLLEGE;LES PERRIERES;PUBLIC;1;0;819;07104
2019;COLLEGE;DE JASTRES;PUBLIC;0;0;340;07200
2019;COLLEGE PRIVE;MARIE RIVIER;PRIVE;0;0;549;07700
2019;COLLEGE;LA SEGALIERE;PUBLIC;0;0;199;07110
2019;COLLEGE;MARCEL CHAMONTIN;PUBLIC;0;0;714;07401
2019;LYCEE PROF PRIVE DES METIERS;NOTRE DAME;PRIVE;0;0;41;07000
2019;COLLEGE PRIVE;SAINT LOUIS;PRIVE;0;0;559;07300
2019;COLLEGE;MARCELLE RIVIER;PUBLIC;0;0;493;26760
2019;COLLEGE;DE L'EUROPE JEAN MONNET;PUBLIC;0;0;838;26303
2019;COLLEGE;MARC SEIGNOBOS;PUBLIC;0;0;634;26120
2019;LYCEE POLYVALENT;FRANCOIS JEAN ARMORIN;PUBLIC;0;0;24;26402
2019;COLLEGE;SPORT NATURE;PUBLIC;0;0;227;26420
2019;COLLEGE PRIVE;ANNE CARTIER;PRIVE;0;0;587;26250
2019;COLLEGE;GUSTAVE MONOD;PUBLIC;0;0;719;26205
2019;LYCEE POLYVALENT;DR. GUSTAVE JAUME;PUBLIC;0;0;24;26702
2019;COLLEGE;GUSTAVE JAUME;PUBLIC;0;1;376;26702
2019;COLLEGE;CLAUDE DEBUSSY;PUBLIC;0;0;631;26105
2019;COLLEGE;FERNAND BERTHON;PUBLIC;1;0;461;26140
2019;COLLEGE;DENIS BRUNET;PUBLIC;0;0;474;26210
2019;COLLEGE PRIVE;SAINTE ANNE;PRIVE;0;0;531;26000
2019;LYCEE PROFESSIONNEL;MONTESQUIEU;PUBLIC;0;0;20;26000
2019;LP LYCEE DES METIERS;AMBLARD;PUBLIC;0;0;24;26000
2019;COLLEGE PRIVE;LES TILLEULS;PRIVE;0;0;477;74000
2019;COLLEGE;RAOUL BLANCHARD;PUBLIC;0;0;837;74008
2019;COLLEGE;FRANCOIS MUGNIER;PUBLIC;0;0;590;74890
2019;COLLEGE PRIVE;SAINT JEAN BOSCO;PRIVE;0;0;667;74303
2019;COLLEGE PRIVE;SAINT BRUNO;PRIVE;0;0;245;74500
2019;COLLEGE;CAMILLE CLAUDEL;PUBLIC;0;0;569;74970
2019;COLLEGE PRIVE;SAINT JEAN-BAPTISTE;PRIVE;0;0;277;74120
2019;COLLEGE;SIMONE VEIL;PUBLIC;0;0;550;74330
2019;COLLEGE;ANDRE CORBET;PUBLIC;0;0;176;74340
2019;COLLEGE;JACQUES BREL;PUBLIC;0;0;420;74440
2019;COLLEGE PRIVE;SAINT JOSEPH;PRIVE;0;0;482;74230
2019;LYCEE PROFESSIONNEL;DU CHABLAIS;PUBLIC;0;0;24;74207
2019;COLLEGE;PAUL LANGEVIN;PUBLIC;0;0;990;74108
2019;COLLEGE;JACQUES BREL;PUBLIC;0;0;616;38270
2019;COLLEGE;DES COLLINES;PUBLIC;0;0;682;38850
2019;LYCEE D'ENSEIGNEMENT ADAPTE;PIERRE RABHI;PUBLIC;0;0;55;38640
2019;COLLEGE;GEORGES POMPIDOU;PUBLIC;0;0;480;38640
2019;LYCEE PROFESSIONNEL;THOMAS EDISON;PUBLIC;0;0;24;38130
2019;COLLEGE PRIVE;SAINT BRUNO;PRIVE;0;0;286;38380
2019;COLLEGE;LES SAULES;PUBLIC;0;0;496;38320
2019;COLLEGE PRIVE;DON BOSCO;PRIVE;0;0;593;38610
2019;COLLEGE;ICARE;PUBLIC;0;0;548;38570
2019;LYCEE POLYVALENT;EMMANUEL  MOUNIER;PUBLIC;0;0;29;38029
2019;COLLEGE PRIVE;NOTRE DAME DE SION;PRIVE;0;0;546;38100
2019;COLLEGE;LUCIE AUBRAC;PUBLIC;0;1;372;38036
2019;COLLEGE PRIVE;LES CHARMILLES;PRIVE;0;0;119;38100
2019;COLLEGE PRIVE;SAINT FRANCOIS;PRIVE;0;0;676;38260
2019;COLLEGE;JONGKIND;PUBLIC;0;0;716;38260
2019;LYCEE PROFESSIONNEL PRIVE;JEAN MARIE VIANNEY;PRIVE;0;0;4;38260
2019;COLLEGE PRIVE;SAINT BRUNO;PRIVE;0;0;628;38110
2019;COLLEGE PRIVE;JEANNE D'ARC;PRIVE;0;0;431;38480
2019;COLLEGE;LE GUILLON;PUBLIC;0;0;518;38480
2019;COLLEGE;NELSON MANDELA;PUBLIC;1;0;399;38800
2019;COLLEGE;FRANCOIS AUGUSTE RAVIER;PUBLIC;0;0;643;38510
2019;LYCEE PROFESSIONNEL;L'ODYSSEE;PUBLIC;0;0;23;38231
2019;COLLEGE;GRESIVAUDAN;PUBLIC;0;0;678;38330
2019;COLLEGE;FERNAND BOUVIER;PUBLIC;0;0;768;38440
2019;COLLEGE;LES DAUPHINS;PUBLIC;0;0;623;38110
2019;COLLEGE;EDOUARD VAILLANT;PUBLIC;0;0;385;38400
2019;COLLEGE;FERNAND LEGER;PUBLIC;0;0;538;38400
2019;LPO LYCEE DES METIERS;ROGER DESCHAUX;PUBLIC;0;0;24;38360
2019;COLLEGE;PHILIPPE COUSTEAU;PUBLIC;0;0;517;38230
2019;LPO LYCEE DES METIERS;GALILEE;PUBLIC;0;0;24;38209
2019;COLLEGE PRIVE;SAINT CHARLES;PRIVE;0;0;804;38217
2019;COLLEGE PRIVE;ROBIN;PRIVE;0;0;1004;38204
2019;COLLEGE;JEAN PREVOST;PUBLIC;0;0;700;38250
2019;COLLEGE;JEAN JACQUES PERRET;PUBLIC;0;0;444;73100
2019;LYCEE PROFESSIONNEL;LE GRAND ARC;PUBLIC;0;0;22;73204
2019;COLLEGE;JEAN MOULIN;PUBLIC;0;0;308;73202
2019;COLLEGE;SAINT EXUPERY;PUBLIC;0;0;650;73704
2019;LYCEE PROF PRIVE DES METIERS;SAINTE GENEVIEVE;PRIVE;0;0;10;73000
2019;LP LYCEE DES METIERS;LA CARDINIERE;PUBLIC;0;0;16;73000
2019;COLLEGE;JOSEPH FONTANET;PUBLIC;0;0;486;73460
2019;COLLEGE;DE BOIGNE;PUBLIC;0;0;380;73290
2019;COLLEGE PRIVE;SAINTE THERESE;PRIVE;0;0;185;73600
2019;COLLEGE;DE L'EPINE;PUBLIC;0;0;326;73470
2019;COLLEGE;ST ETIENNE DE CUINES;PUBLIC;0;0;340;73130
2019;COLLEGE PRIVE;SAINT PAUL;PRIVE;0;0;146;73730
2022;COLLEGE PRIVE;NOTRE DAME;PRIVE;0;0;601;07100
2022;COLLEGE PRIVE;SACRE COEUR;PRIVE;0;0;706;07100
2022;COLLEGE;LA LOMBARDIERE;PUBLIC;0;0;483;07100
2022;COLLEGE;DE JASTRES;PUBLIC;0;0;299;07200
2022;COLLEGE PRIVE;MARIE RIVIER;PRIVE;0;0;527;07700
2022;LYCEE PROFESSIONNEL;LEON PAVIN;PUBLIC;0;0;24;07210
2022;COLLEGE PRIVE;LE PORTALET NOTRE DAME;PRIVE;0;0;210;07110
2022;COLLEGE PRIVE;SAINT LOUIS LES MARISTES;PRIVE;0;0;131;07160
2022;LYCEE PROF PRIVE DES METIERS;NOTRE DAME;PRIVE;0;0;30;07000
2022;COLLEGE;BERNARD DE VENTADOUR;PUBLIC;0;0;966;07000
2022;COLLEGE PRIVE;SACRE COEUR;PRIVE;0;0;211;07000
2022;COLLEGE;LOUIS JOUVET;PUBLIC;0;0;104;07320
2022;LP LYCEE DES METIERS;MARIUS BOUVIER;PUBLIC;0;0;23;07301
2022;COLLEGE;MARC SEIGNOBOS;PUBLIC;0;0;609;26120
2022;COLLEGE PRIVE;SAINT BONNET;PRIVE;0;0;205;26330
2022;LYCEE POLYVALENT;FRANCOIS JEAN ARMORIN;PUBLIC;0;0;24;26402
2022;COLLEGE PRIVE;SAINT LOUIS;PRIVE;0;0;406;26402
2022;COLLEGE;REVESZ LONG;PUBLIC;0;0;663;26400
2022;COLLEGE;JOSEPH  BEDIER;PUBLIC;0;0;320;26530
2022;COLLEGE PRIVE;ANNE CARTIER;PRIVE;0;0;581;26250
2022;COLLEGE;RENE BARJAVEL;PUBLIC;0;0;596;26110
2022;COLLEGE PRIVE;SAINT MICHEL;PRIVE;0;0;447;26702
2022;COLLEGE;LIS ISCLO D'OR;PUBLIC;0;0;503;26702
2022;COLLEGE PRIVE;NOTRE DAME DES CHAMPS;PRIVE;0;0;402;26100
2022;COLLEGE PRIVE;SAINT-PIERRE ET SAINT-PAUL LE;PRIVE;0;0;328;26260
2022;COLLEGE;BENJAMIN MALOSSANE;PUBLIC;0;0;289;26190
2022;COLLEGE;PAUL VALERY;PUBLIC;1;0;431;26000
2022;COLLEGE;DU VAL D'ABONDANCE;PUBLIC;0;0;197;74360
2022;COLLEGE PRIVE;LES TILLEULS;PRIVE;0;0;484;74000
2022;COLLEGE;BEAUREGARD;PUBLIC;0;0;645;74960
2022;LYCEE POLYVALENT;LES BRESSIS;PRIVE;0;0;24;74600
2022;LP LYCEE DES METIERS;TOM MOREL;PUBLIC;0;0;25;74960
2022;LYCEE PROFESSIONNEL PRIVE;ECA;PRIVE;0;0;33;74650
2022;COLLEGE;MICHEL SERVET;PUBLIC;1;0;1121;74102
2022;COLLEGE;LES RIVES DU LEMAN;PUBLIC;0;0;794;74500
2022;COLLEGE;JEAN LACHENAL;PUBLIC;0;0;564;74210
2022;COLLEGE;CAMILLE CLAUDEL;PUBLIC;0;0;612;74970
2022;COLLEGE;HENRI CORBET;PUBLIC;0;0;431;74430
2022;LYCEE PROFESSIONNEL PRIVE;MONT BLANC;PRIVE;0;0;22;74700
2022;COLLEGE;DU MONT DES PRINCES;PUBLIC;0;0;551;74910
2022;COLLEGE;JACQUES BREL;PUBLIC;0;0;591;38270
2022;COLLEGE;SIMONE DE BEAUVOIR;PUBLIC;0;0;592;38920
2022;COLLEGE;LES SAULES;PUBLIC;0;0;503;38320
2022;COLLEGE PRIVE;BAYARD;PRIVE;0;0;456;38000
2022;COLLEGE;CHARLES MUNCH;PUBLIC;0;0;675;38100
2022;COLLEGE;CHAMPOLLION;PUBLIC;0;0;551;38000
2022;COLLEGE;LE CLOS JOUVIN;PUBLIC;0;0;542;38560
2022;COLLEGE PRIVE;SAINT FRANCOIS;PRIVE;0;0;670;38260
2022;COLLEGE;DES SIX VALLEES;PUBLIC;0;0;459;38520
2022;COLLEGE PRIVE;JEANNE D'ARC;PRIVE;0;0;452;38480
2022;COLLEGE;FRANCOIS TRUFFAUT;PUBLIC;0;0;500;38080
2022;COLLEGE;DU TRIEVES;PUBLIC;0;0;197;38710
2022;LYCEE PROFESSIONNEL;L'ODYSSEE;PUBLIC;0;0;24;38231
2022;COLLEGE;FREDERIC DARD;PUBLIC;0;0;646;38890
2022;COLLEGE;HENRI WALLON;PUBLIC;1;0;432;38400
2022;COLLEGE;FERNAND LEGER;PUBLIC;0;0;532;38400
2022;COLLEGE;LES ALLINGES;PUBLIC;0;0;495;38070
2022;COLLEGE;MARCEL MARIOTTE;PUBLIC;0;0;423;38870
2022;COLLEGE;CONDORCET;PUBLIC;0;0;542;38210
2022;COLLEGE;FRANCOIS PONSARD;PUBLIC;1;0;716;38200
2022;COLLEGE;RENE  CASSIN;PUBLIC;0;0;403;38090
2022;LYCEE POLYVALENT;FERDINAND BUISSON;PUBLIC;0;0;24;38501
2022;COLLEGE PRIVE;SAINT JOSEPH;PRIVE;0;0;697;38500
2022;LYCEE PROFESSIONNEL PRIVE;LES PORTES DE CHARTREUSE;PRIVE;0;0;46;38340
2022;COLLEGE;ANDRE MALRAUX;PUBLIC;0;0;442;38340
2022;COLLEGE;GARIBALDI;PUBLIC;0;0;538;73100
2022;COLLEGE PRIVE;TALMUDIQUE;PRIVE;0;0;43;73100
2022;COLLEGE;JEAN MOULIN;PUBLIC;0;0;335;73202
2022;COLLEGE PRIVE;CATHOLIQUE ST F. DE SALES;PRIVE;0;0;1005;73025
2022;COLLEGE;COTE ROUSSE;PUBLIC;0;1;603;73000
2022;COLLEGE;JULES FERRY;PUBLIC;0;0;686;73000
2022;COLLEGE;JACQUES PREVERT;PUBLIC;0;0;449;73410
2022;COLLEGE;GEORGE SAND;PUBLIC;0;0;624;73290
2022;LP LYCEE DES METIERS;LE NIVOLET;PUBLIC;0;0;27;73490
2022;COLLEGE PRIVE;NOTRE DAME DE LA VILLETTE;PRIVE;0;0;441;73490
2022;LPO LYCEE DES METIERS;AMBROISE CROIZAT;PUBLIC;0;0;24;73601
2022;COLLEGE;DE L'EPINE;PUBLIC;0;0;314;73470
2022;COLLEGE;PAUL MOUGIN;PUBLIC;0;0;228;73140
2021;COLLEGE;LA LOMBARDIERE;PUBLIC;0;0;476;07100
2021;LYCEE PROFESSIONNEL;LEON PAVIN;PUBLIC;0;0;21;07210
2021;COLLEGE;CHARLES DE GAULLE;PUBLIC;0;0;652;07500
2021;COLLEGE;JOSEPH DURAND;PUBLIC;0;0;234;07560
2021;COLLEGE;BERNARD DE VENTADOUR;PUBLIC;0;0;960;07000
2021;COLLEGE PRIVE;SACRE COEUR;PRIVE;0;0;202;07000
2021;COLLEGE PRIVE;SAINT LOUIS;PRIVE;0;0;566;07300
2021;COLLEGE;HENRI AGERON;PUBLIC;0;0;359;07150
2021;COLLEGE;MARC SEIGNOBOS;PUBLIC;0;0;618;26120
2021;COLLEGE PRIVE;FRANCOIS GONDIN;PRIVE;0;0;284;26120
2021;COLLEGE PRIVE;CHATEAUNEUF;PRIVE;0;0;207;26330
2021;COLLEGE;DU DIOIS;PUBLIC;0;0;428;26150
2021;COLLEGE;ERNEST CHALAMEL;PUBLIC;0;0;356;26220
2021;ETAB.REGIONAL ENSEIGNT ADAPTE;PORTES DU SOLEIL;PUBLIC;0;0;79;26200
2021;COLLEGE PRIVE;SAINT MICHEL;PRIVE;0;0;419;26702
2021;COLLEGE PRIVE;NOTRE DAME DES CHAMPS;PRIVE;0;0;412;26100
2021;COLLEGE;CLAUDE DEBUSSY;PUBLIC;0;0;619;26105
2021;COLLEGE;BENJAMIN MALOSSANE;PUBLIC;0;0;295;26190
2021;LPO LYCEE DES METIERS;HENRI LAURENS;PUBLIC;0;0;12;26241
2021;COLLEGE PRIVE;SAINTE CROIX DES NEIGES;PRIVE;0;0;108;74360
2021;COLLEGE;RENE LONG;PUBLIC;0;0;586;74540
2021;COLLEGE;LE SEMNOZ;PUBLIC;0;0;818;74600
2021;LP LYCEE DES METIERS;TOM MOREL;PUBLIC;0;0;24;74960
2021;LYCEE PROFESSIONNEL PRIVE;ECA;PRIVE;0;0;43;74650
2021;COLLEGE;JEAN LACHENAL;PUBLIC;0;0;595;74210
2021;COLLEGE;VAL DES USSES;PUBLIC;0;0;553;74270
2021;COLLEGE;LE PARMELAN;PUBLIC;0;0;831;74570
2021;COLLEGE PRIVE;SAINTE MARIE;PRIVE;0;0;755;74805
2021;COLLEGE;DE VARENS;PUBLIC;0;0;764;74190
2021;COLLEGE;LE CLERGEON;PUBLIC;0;0;658;74152
2021;COLLEGE PRIVE;DEMOTZ DE LA SALLE;PRIVE;0;0;757;74150
2021;COLLEGE;DU CHERAN;PUBLIC;0;0;533;74150
2021;LYCEE PROFESSIONNEL PRIVE;CECAM;PRIVE;0;0;14;74490
2021;COLLEGE;ARTHUR RIMBAUD;PUBLIC;0;0;868;74161
2021;COLLEGE;DU PAYS DE GAVOT;PUBLIC;0;0;496;74500
2021;LYCEE PROFESSIONNEL PRIVE;MONT BLANC;PRIVE;0;0;22;74700
2021;COLLEGE;JACQUES BREL;PUBLIC;0;0;420;74440
2021;COLLEGE PRIVE;SAINT JOSEPH;PRIVE;0;0;513;74230
2021;COLLEGE;JEAN JACQUES ROUSSEAU;PUBLIC;0;0;883;74200
2021;COLLEGE PRIVE;SAINT FRANCOIS;PRIVE;0;0;922;74100
2021;LYCEE PROF PRIVE DES METIERS;LE BREDA;PRIVE;0;0;36;38580
2021;COLLEGE;JACQUES BREL;PUBLIC;0;0;584;38270
2021;COLLEGE;DE CHAMPIER;PUBLIC;0;0;523;38260
2021;COLLEGE;GEORGES POMPIDOU;PUBLIC;0;0;488;38640
2021;COLLEGE;VERCORS;PUBLIC;1;0;341;38100
2021;COLLEGE PRIVE;NOTRE DAME DE SION;PRIVE;0;0;598;38100
2021;COLLEGE;FANTIN- LATOUR;PUBLIC;0;0;628;38000
2021;COLLEGE;CHARLES MUNCH;PUBLIC;0;0;710;38100
2021;LYCEE PROFESSIONNEL PRIVE;JEAN MARIE VIANNEY;PRIVE;0;0;8;38260
2021;LPO LYCEE DES METIERS;ELIE CARTAN;PUBLIC;0;0;23;38354
2021;COLLEGE PRIVE;JEANNE D'ARC;PRIVE;0;0;457;38480
2021;COLLEGE;LES PIERRES PLANTES;PUBLIC;0;0;611;38390
2021;LYCEE POLYVALENT;DE L'EDIT;PUBLIC;0;0;41;38150
2021;COLLEGE;ALEXANDRE FLEMING;PUBLIC;0;0;789;38360
2021;COLLEGE;PIERRE DUBOIS;PUBLIC;0;0;478;38170
2021;COLLEGE;JULES VERNE;PUBLIC;0;0;531;38760
2021;COLLEGE;RENE  CASSIN;PUBLIC;0;0;381;38090
2021;COLLEGE;LES MATTONS;PUBLIC;0;0;754;38220
2021;COLLEGE;JEAN MOULIN;PUBLIC;0;0;314;73202
2021;COLLEGE;LE BONRIEU;PUBLIC;0;0;303;73350
2021;ETAB.REGIONAL ENSEIGNT ADAPTE;AMELIE GEX;PUBLIC;0;0;66;73001
2021;COLLEGE;HENRY BORDEAUX;PUBLIC;0;0;465;73160
2021;COLLEGE;JACQUES PREVERT;PUBLIC;0;0;471;73410
2021;COLLEGE;JOSEPH FONTANET;PUBLIC;0;0;456;73460
2021;LYCEE PROFESSIONNEL PRIVE;SAINTE ANNE - SAVOISIENNE;PRIVE;0;0;66;73290
2021;COLLEGE;GEORGE SAND;PUBLIC;0;0;605;73290
2021;COLLEGE PRIVE;NOTRE DAME DE LA VILLETTE;PRIVE;0;0;440;73490
2021;COLLEGE;JEAN ROSTAND;PUBLIC;0;0;764;73604
2021;COLLEGE;DE L'EPINE;PUBLIC;0;0;316;73470
2021;COLLEGE;LA FORET;PUBLIC;0;0;619;73240
2020;LPO LYCEE DES METIERS;BOISSY D'ANGLAS;PUBLIC;0;0;19;07101
2020;COLLEGE;LA LOMBARDIERE;PUBLIC;0;0;506;07100
2020;COLLEGE PRIVE;ST FRANCOIS D'ASSISE;PRIVE;0;0;789;07203
2020;COLLEGE;CHARLES DE GAULLE;PUBLIC;0;0;651;07500
2020;COLLEGE PRIVE;CHARLES DE FOUCAULD;PRIVE;0;0;73;07270
2020;COLLEGE;LA SEGALIERE;PUBLIC;0;0;206;07110
2020;COLLEGE;DES DEUX VALLEES;PUBLIC;0;0;279;07160
2020;COLLEGE PRIVE;SACRE COEUR;PRIVE;0;0;210;07000
2020;COLLEGE;DE L' EYRIEUX;PUBLIC;0;0;215;07190
2020;COLLEGE;OLIVIER DE SERRES;PUBLIC;0;0;513;26450
2020;LYCEE PROFESSIONNEL PRIVE;SAINT LOUIS;PRIVE;0;0;24;#N/A
2020;COLLEGE PRIVE;ANNE CARTIER;PRIVE;0;0;586;26250
2020;COLLEGE;ALAIN BORNE;PUBLIC;0;0;577;26216
2020;COLLEGE;JEAN MACE;PUBLIC;0;0;711;26801
2020;COLLEGE PRIVE;NOTRE DAME DES CHAMPS;PRIVE;0;0;410;26100
2020;COLLEGE;CLAUDE DEBUSSY;PUBLIC;0;0;628;26105
2020;COLLEGE;JOSEPHINE BAKER;PUBLIC;0;0;394;26260
2020;COLLEGE PRIVE;SAINT-PIERRE ET SAINT-PAUL LE;PRIVE;0;0;272;26260
2020;COLLEGE;JEAN PERRIN;PUBLIC;0;0;636;26130
2020;COLLEGE;FERNAND BERTHON;PUBLIC;1;0;474;26140
2020;COLLEGE PRIVE;LES GOELANDS;PRIVE;0;0;437;26140
2020;COLLEGE;DO MISTRAU;PUBLIC;0;0;300;26790
2020;COLLEGE;MARCEL PAGNOL;PUBLIC;1;0;670;26000
2020;COLLEGE;CAMILLE VERNET;PUBLIC;0;0;510;26021
2020;COLLEGE;EVIRE;PUBLIC;0;0;645;74940
2020;COLLEGE PRIVE;LA SALLE ANNECY - PRINGY;PRIVE;0;0;884;74371
2020;COLLEGE;RAOUL BLANCHARD;PUBLIC;0;0;801;74008
2020;COLLEGE;LES BARATTES;PUBLIC;0;0;702;74940
2020;COLLEGE PRIVE;SAINT MICHEL;PRIVE;0;0;716;74007
2020;COLLEGE;ROGER FRISON ROCHE;PUBLIC;0;0;520;74401
2020;COLLEGE PRIVE;SAINT VINCENT;PRIVE;0;0;110;74160
2020;COLLEGE;VAL DES USSES;PUBLIC;0;0;537;74270
2020;LYCEE PROF PRIVE DES METIERS;SAINTE FAMILLE;PRIVE;0;0;24;#N/A
2020;COLLEGE;EMILE ALLAIS;PUBLIC;0;0;305;74120
2020;COLLEGE PRIVE;SAINT JEAN-BAPTISTE;PRIVE;0;0;266;74120
2020;COLLEGE PRIVE;DEMOTZ DE LA SALLE;PRIVE;0;0;778;74150
2020;COLLEGE;KARINE RUBY;PUBLIC;0;0;651;74800
2020;COLLEGE;DU VERNEY;PUBLIC;0;0;557;74700
2020;COLLEGE;JEAN JACQUES GALLAY;PUBLIC;1;0;823;74954
2020;COLLEGE PRIVE;SACRE COEUR;PRIVE;0;0;618;74200
2020;COLLEGE;PAUL LANGEVIN;PUBLIC;0;0;1053;74108
2020;COLLEGE PRIVE;SAINT FRANCOIS;PRIVE;0;0;925;74100
2020;COLLEGE;FLAVIUS VAUSSENAT;PUBLIC;0;0;494;38580
2020;COLLEGE;JULES FLANDRIN;PUBLIC;0;0;415;38700
2020;COLLEGE;LES SAULES;PUBLIC;0;0;486;38320
2020;LYCEE POLYVALENT;EMMANUEL  MOUNIER;PUBLIC;0;0;18;38029
2020;COLLEGE PRIVE;NOTRE DAME DE SION;PRIVE;0;0;574;38100
2020;LYCEE PROF PRIVE DES METIERS;DU TERTIAIRE LES CHARMILLES;PRIVE;0;0;55;38100
2020;COLLEGE;CHARLES MUNCH;PUBLIC;0;0;756;38100
2020;COLLEGE PRIVE;EXTERNAT NOTRE DAME;PRIVE;0;0;638;38100
2020;COLLEGE;INTERNATIONAL EUROPOLE;PUBLIC;0;0;605;38000
2020;COLLEGE;LE CLOS JOUVIN;PUBLIC;0;0;572;38560
2020;COLLEGE PRIVE;SAINT JOSEPH;PRIVE;0;0;241;38350
2020;COLLEGE;LOUIS MAUBERRET;PUBLIC;0;0;567;38350
2020;LPO LYCEE DES METIERS;ELIE CARTAN;PUBLIC;0;0;24;38354
2020;COLLEGE;LE CALLOUD;PUBLIC;0;0;838;38110
2020;COLLEGE;DES SIX VALLEES;PUBLIC;0;0;454;38520
2020;LYCEE POLYVALENT;CHARLES GABRIEL PRAVAZ;PUBLIC;0;0;19;38480
2020;COLLEGE;MARCEL BOUVIER;PUBLIC;0;0;638;38490
2020;COLLEGE;ARC EN CIERS;PUBLIC;0;0;588;38630
2020;COLLEGE;LA PIERRE AIGUILLE;PUBLIC;0;0;620;38660
2020;COLLEGE;LES PIERRES PLANTES;PUBLIC;0;0;627;38390
2020;COLLEGE;FRANCOIS AUGUSTE RAVIER;PUBLIC;0;0;642;38510
2020;COLLEGE;FERNAND BOUVIER;PUBLIC;0;0;822;38440
2020;LYCEE POLYVALENT;LA SAULAIE;PUBLIC;0;0;24;38162
2020;COLLEGE;HENRI WALLON;PUBLIC;1;0;411;38400
2020;COLLEGE;PIERRE DUBOIS;PUBLIC;0;0;484;38170
2020;COLLEGE PRIVE;SAINT CHARLES;PRIVE;0;0;792;38217
2020;COLLEGE;BELLEDONNE;PUBLIC;0;0;755;38190
2020;COLLEGE PRIVE;JEAN-PAUL II;PRIVE;0;0;478;38460
2020;COLLEGE;ANDRE MALRAUX;PUBLIC;0;0;437;38340
2020;COLLEGE;MARLIOZ;PUBLIC;0;0;574;73103
2020;COLLEGE;LA COMBE DE SAVOIE;PUBLIC;1;0;713;73200
2020;LYCEE PROF PRIVE DES METIERS;SAINTE GENEVIEVE;PRIVE;0;0;10;73000
2020;COLLEGE;LA FORET;PUBLIC;0;0;604;73240
2020;COLLEGE;MAURIENNE;PUBLIC;0;0;661;73300
2020;LPO LYCEE DES METIERS;RENE PERRIN;PUBLIC;0;0;18;73400
2020;COLLEGE;LA LAUZIERE;PUBLIC;0;0;307;73220
2019;COLLEGE PRIVE;SACRE COEUR;PRIVE;0;0;724;07100
2019;COLLEGE;ROQUA;PUBLIC;0;0;539;07204
2019;COLLEGE;VALLEE DE LA BEAUME;PUBLIC;0;0;234;07260
2019;LP LYCEE DES METIERS;HOTELIER;PUBLIC;0;0;19;07110
2019;COLLEGE;LES TROIS VALLEES;PUBLIC;0;0;506;07800
2019;COLLEGE;ALEX MEZENC;PUBLIC;0;0;374;07250
2019;LYCEE PROFESSIONNEL PRIVE;SAINT ANDRE;PRIVE;0;0;25;07400
2019;COLLEGE PRIVE;NOTRE DAME;PRIVE;0;0;500;07300
2019;COLLEGE;DOCTEUR PIERRE DELARBRE;PUBLIC;0;0;234;07240
2019;COLLEGE;LABOISSIERE;PUBLIC;0;0;417;07170
2019;COLLEGE PRIVE;LES MARISTES;PRIVE;0;0;785;26300
2019;COLLEGE PRIVE;SAINT LOUIS;PRIVE;0;0;365;26402
2019;COLLEGE;FRANCOIS JEAN ARMORIN;PUBLIC;0;0;417;26402
2019;COLLEGE;ALAIN BORNE;PUBLIC;0;0;599;26216
2019;COLLEGE PRIVE;CHABRILLAN ST JEAN-BAPTISTE;PRIVE;0;0;448;26200
2019;COLLEGE;RENE BARJAVEL;PUBLIC;0;0;657;26110
2019;COLLEGE PRIVE;SAINT MICHEL;PRIVE;0;0;415;26702
2019;COLLEGE;JEAN MACE;PUBLIC;0;0;729;26801
2019;COLLEGE;BENJAMIN MALOSSANE;PUBLIC;0;0;317;26190
2019;COLLEGE;JEAN PERRIN;PUBLIC;0;0;632;26130
2019;COLLEGE;ANDRE COTTE;PUBLIC;0;0;732;26240
2019;LYCEE PROFESSIONNEL PRIVE;LA PROVIDENCE;PRIVE;0;0;24;26000
2019;COLLEGE PRIVE;NOTRE DAME;PRIVE;0;0;886;26008
2019;COLLEGE;EVIRE;PUBLIC;0;0;620;74940
2019;COLLEGE;BEAUREGARD;PUBLIC;0;0;618;74960
2019;COLLEGE;LES BARATTES;PUBLIC;0;0;696;74940
2019;COLLEGE;JACQUES PREVERT;PUBLIC;0;0;643;74960
2019;COLLEGE;LE SEMNOZ;PUBLIC;0;0;823;74600
2019;COLLEGE PRIVE;SAINT VINCENT;PRIVE;0;0;52;74160
2019;LYCEE PROFESSIONNEL PRIVE;SAINT VINCENT;PRIVE;0;0;28;74160
2019;COLLEGE;VAL DES USSES;PUBLIC;0;0;531;74270
2019;COLLEGE;EMILE ALLAIS;PUBLIC;0;0;307;74120
2019;COLLEGE;DE VARENS;PUBLIC;0;0;756;74190
2019;COLLEGE PRIVE;ASSOMPTION MONT BLANC;PRIVE;0;0;91;74170
2019;LYCEE PROFESSIONNEL PRIVE;CECAM;PRIVE;0;0;17;74490
2019;COLLEGE;JEAN MONNET;PUBLIC;0;0;507;74410
2019;COLLEGE PRIVE;SAINT JOSEPH;PRIVE;0;0;425;74703
2019;COLLEGE;JEAN JACQUES GALLAY;PUBLIC;1;0;801;74954
2019;COLLEGE PRIVE;SAINT JOSEPH LA SALLE;PRIVE;0;0;612;74202
2019;COLLEGE;FLAVIUS VAUSSENAT;PUBLIC;0;0;478;38580
2019;COLLEGE;MARTIN LUTHER KING;PUBLIC;0;0;459;38230
2019;COLLEGE;PABLO PICASSO;PUBLIC;1;0;347;38130
2019;COLLEGE PRIVE;LA SALLE L'AIGLE GRENOBLE;PRIVE;0;0;1049;38000
2019;LYCEE PROF PRIVE DES METIERS;DU TERTIAIRE LES CHARMILLES;PRIVE;0;0;57;38100
2019;COLLEGE;FANTIN- LATOUR;PUBLIC;0;0;662;38000
2019;COLLEGE;CHARLES MUNCH;PUBLIC;0;0;734;38100
2019;COLLEGE;AIME CESAIRE;PUBLIC;0;0;586;38037
2019;COLLEGE;JACQUES PREVERT;PUBLIC;0;0;591;38540
2019;COLLEGE;DU VALLON DES MOTTES;PUBLIC;0;0;235;38770
2019;COLLEGE;LOUIS MAUBERRET;PUBLIC;0;0;550;38350
2019;COLLEGE;LE CALLOUD;PUBLIC;0;0;859;38110
2019;COLLEGE PRIVE;JEANNE D'ARC;PRIVE;0;0;536;38550
2019;COLLEGE;ROBERT DOISNEAU;PUBLIC;0;0;442;38081
2019;COLLEGE;DU TRIEVES;PUBLIC;0;0;225;38710
2019;COLLEGE;MARCEL CUYNAT;PUBLIC;0;0;330;38650
2019;COLLEGE;RAYMOND GUELEN;PUBLIC;0;0;258;38680
2019;COLLEGE;GEORGES BRASSENS;PUBLIC;0;0;422;38780
2019;COLLEGE;ROBERT DESNOS;PUBLIC;0;0;727;38146
2019;COLLEGE;FREDERIC DARD;PUBLIC;0;0;638;38890
2019;COLLEGE;DE PERANCHE;PUBLIC;0;0;427;38790
2019;COLLEGE;LE SAVOURET;PUBLIC;0;0;691;38160
2019;COLLEGE;FREDERIC MISTRAL;PUBLIC;0;0;703;38554
2019;COLLEGE;LE MASSEGU;PUBLIC;0;0;601;38450
2019;COLLEGE;SONIA DELAUNAY;PUBLIC;0;0;449;38090
2019;LYCEE POLYVALENT;FERDINAND BUISSON;PUBLIC;0;0;24;38501
2019;COLLEGE PRIVE;SAINT JOSEPH;PRIVE;0;0;682;38500
2019;COLLEGE;ANDRE MALRAUX;PUBLIC;0;0;425;38340
2019;COLLEGE;JOVET;PUBLIC;0;0;444;73212
2019;COLLEGE;GARIBALDI;PUBLIC;0;0;579;73100
2019;COLLEGE PRIVE;TALMUDIQUE;PRIVE;0;0;57;73100
2019;LYCEE PROFESSIONNEL PRIVE;JEANNE D'ARC;PRIVE;0;0;21;#N/A
2019;LPO LYCEE DES METIERS;MONGE;PUBLIC;0;0;24;73000
2019;COLLEGE PRIVE;NOTRE DAME DU ROCHER;PRIVE;0;0;462;73000
2019;COLLEGE PRIVE;CATHOLIQUE ST F. DE SALES;PRIVE;0;0;982;73025
2019;COLLEGE;GEORGE SAND;PUBLIC;0;0;603;73290
2019;LP LYCEE DES METIERS;LE NIVOLET;PUBLIC;0;0;14;73490
2019;COLLEGE PRIVE;NOTRE DAME DE LA VILLETTE;PRIVE;0;0;487;73490
2019;COLLEGE;ERNEST PERRIER DE LA BATHIE;PUBLIC;0;0;375;73400
2019;COLLEGE;LA LAUZIERE;PUBLIC;0;0;295;73220
2019;COLLEGE PRIVE;NOTRE DAME;PRIVE;0;0;621;07100
2019;LYCEE PROF PRIVE DES METIERS;JULES FROMENT;PRIVE;0;0;41;#N/A
2019;COLLEGE;ALBERT MERCOYROL;PUBLIC;0;0;283;07350
2019;COLLEGE PRIVE;SAINT LOUIS LES MARISTES;PRIVE;0;0;137;07160
2019;COLLEGE PRIVE;ENSEMBLE BIENHEUREUX GABRIEL L;PRIVE;0;0;191;07400
2019;COLLEGE;BERNARD DE VENTADOUR;PUBLIC;0;0;952;07000
2019;COLLEGE PRIVE;SACRE COEUR;PRIVE;0;0;206;07000
2019;COLLEGE PRIVE;SAINT JOSEPH;PRIVE;0;0;210;07120
2019;COLLEGE;LOUIS JOUVET;PUBLIC;0;0;132;07320
2019;COLLEGE;DE LA MONTAGNE ARDECHOISE;PUBLIC;0;0;87;07510
2019;COLLEGE;MARIE CURIE;PUBLIC;0;0;1102;07301
2019;COLLEGE;GEORGES GOUY;PUBLIC;0;0;361;07600
2019;COLLEGE;GERARD GAUD;PUBLIC;0;0;811;26500
2019;COLLEGE;HENRI BARBUSSE;PUBLIC;0;0;201;26170
2019;COLLEGE PRIVE;FRANCOIS GONDIN;PRIVE;0;0;259;26120
2019;COLLEGE PRIVE;CHATEAUNEUF;PRIVE;0;0;217;26330
2019;LYCEE PROFESSIONNEL PRIVE;SAINT LOUIS;PRIVE;0;0;14;#N/A
2019;COLLEGE;DANIEL FAUCHER;PUBLIC;0;0;478;26270
2019;COLLEGE;EUROPA;PUBLIC;1;0;651;26200
2019;LYCEE PROFESSIONNEL;AUGUSTE BOUVET;PUBLIC;0;0;35;26102
2019;COLLEGE;ETIENNE-JEAN LAPASSAT;PUBLIC;1;0;712;26106
2019;COLLEGE;JOSEPHINE BAKER;PUBLIC;0;0;405;26260
2019;COLLEGE PRIVE;SAINT-PIERRE ET SAINT-PAUL LE;PRIVE;0;0;261;26260
2019;LPO LYCEE DES METIERS;HENRI LAURENS;PUBLIC;0;0;12;26241
2019;COLLEGE;JEAN ZAY;PUBLIC;1;0;535;26000
2019;COLLEGE;PAUL VALERY;PUBLIC;1;0;447;26000
2019;COLLEGE PRIVE;SAINTE CROIX DES NEIGES;PRIVE;0;0;94;74360
2019;LYCEE PROFESSIONNEL;AMEDEE GORDINI;PUBLIC;0;0;32;74600
2019;COLLEGE;LES BALMETTES;PUBLIC;0;0;495;74006
2019;LYCEE POLYVALENT;JEAN MONNET;PUBLIC;0;0;62;74106
2019;COLLEGE;JEAN MARIE MOLLIET;PUBLIC;0;0;436;74420
2019;LYCEE POLYVALENT PRIVE;ST JEAN BOSCO LES CORDELIERS;PRIVE;0;0;13;74301
2019;COLLEGE;G ANTHONIOZ DE GAULLE;PUBLIC;1;0;946;74302
2019;COLLEGE PRIVE;ADVENTISTE MAURICE TIECHE;PRIVE;0;0;91;74160
2019;COLLEGE;PAUL EMILE VICTOR;PUBLIC;0;0;766;74380
2019;COLLEGE;LOUIS ARMAND;PUBLIC;0;0;676;74350
2019;COLLEGE PRIVE;SAINT FRANCOIS;PRIVE;0;0;317;74140
2019;LYCEE PROF PRIVE DES METIERS;SAINTE FAMILLE;PRIVE;0;0;19;#N/A
2019;COLLEGE PRIVE;DEMOTZ DE LA SALLE;PRIVE;0;0;797;74150
2019;COLLEGE;DU CHERAN;PUBLIC;0;0;376;74150
2019;COLLEGE;HENRI CORBET;PUBLIC;0;0;432;74430
2019;LYCEE PROFESSIONNEL PRIVE;MONT BLANC;PRIVE;0;0;23;74700
2019;COLLEGE PRIVE;SAINT BAPTISTE;PRIVE;0;0;221;38270
2019;COLLEGE;SALVADOR ALLENDE;PUBLIC;1;0;928;38307
2019;COLLEGE;OLYMPE DE GOUGES;PUBLIC;0;0;480;38160
2019;COLLEGE;PLAN MENU;PUBLIC;0;0;721;38500
2019;COLLEGE;LAMARTINE;PUBLIC;0;0;747;38460
2019;COLLEGE;JULES VALLES;PUBLIC;0;0;424;38602
2019;LP LYCEE DES METIERS;GUYNEMER;PUBLIC;0;0;13;38001
2019;COLLEGE PRIVE;BAYARD;PRIVE;0;0;454;38000
2019;LYCEE POLYVALENT;UNITE SOINS ETUDES GRESIVAUDAN;PUBLIC;0;0;26;38700
2019;COLLEGE;LIERS ET LEMPS;PUBLIC;0;0;673;38690
2019;LYCEE PROFESSIONNEL PRIVE;JEANNE D'ARC;PRIVE;0;0;21;38550
2019;LYCEE POLYVALENT;CHARLES GABRIEL PRAVAZ;PUBLIC;0;0;19;38480
2019;COLLEGE;STEPHEN HAWKING;PUBLIC;0;0;587;38080
2019;COLLEGE;MARCEL CHENE;PUBLIC;0;0;671;38530
2019;LYCEE POLYVALENT;DE L'EDIT;PUBLIC;0;0;24;38150
2019;COLLEGE PRIVE;SACRE COEUR;PRIVE;0;0;333;38430
2019;COLLEGE;HENRI WALLON;PUBLIC;1;0;401;38400
2019;COLLEGE;MARCEL MARIOTTE;PUBLIC;0;0;406;38870
2019;COLLEGE;JEAN FERRAT;PUBLIC;0;0;751;38150
2019;COLLEGE;MARC SANGNIER;PUBLIC;0;0;544;38180
2019;COLLEGE;FRANCOIS PONSARD;PUBLIC;1;0;740;38200
2019;COLLEGE;BELLEDONNE;PUBLIC;0;0;723;38190
2019;LYCEE PROF PRIVE DES METIERS;LES GORGES;PRIVE;0;0;16;38500
2019;COLLEGE PRIVE;NOTRE DAME DES VICTOIRES;PRIVE;0;0;403;38500
2019;COLLEGE PRIVE;JEANNE D ARC;PRIVE;0;0;321;73203
2019;COLLEGE;LE BONRIEU;PUBLIC;0;0;301;73350
2019;ETAB.REGIONAL ENSEIGNT ADAPTE;AMELIE GEX;PUBLIC;0;0;66;73001
2019;COLLEGE;COTE ROUSSE;PUBLIC;0;1;492;73000
2019;COLLEGE;LOUISE DE SAVOIE;PUBLIC;0;0;706;73000
2019;COLLEGE;LE REVARD;PUBLIC;0;0;526;73100
2019;LYCEE PROFESSIONNEL PRIVE;SAINTE ANNE - SAVOISIENNE;PRIVE;0;0;75;73290
2019;COLLEGE;BEATRICE DE SAVOIE;PUBLIC;0;0;382;73360
2019;LPO LYCEE DES METIERS;AMBROISE CROIZAT;PUBLIC;0;0;24;73601
2019;LYCEE POLYVALENT;PAUL HEROULT;PUBLIC;0;0;18;73302
2019;COLLEGE;MAURIENNE;PUBLIC;0;0;691;73300
2019;LPO LYCEE DES METIERS;RENE PERRIN;PUBLIC;0;0;18;73400
2019;COLLEGE;DU VAL GELON;PUBLIC;0;0;521;73110
2022;LYCEE PROFESSIONNEL PRIVE;MARC SEGUIN;PRIVE;0;0;57;07100
2022;COLLEGE;LES PERRIERES;PUBLIC;1;0;815;07104
2022;COLLEGE;CHARLES DE GAULLE;PUBLIC;0;0;617;07500
2022;COLLEGE;VALLEE DE LA BEAUME;PUBLIC;0;0;289;07260
2022;COLLEGE PRIVE;CHARLES DE FOUCAULD;PRIVE;0;0;104;07270
2022;COLLEGE;LA SEGALIERE;PUBLIC;0;0;185;07110
2022;COLLEGE;DE CRUSSOL;PUBLIC;0;0;571;07130
2022;COLLEGE PRIVE;SAINT JOSEPH EN VAL D'AY;PRIVE;0;0;242;07290
2022;COLLEGE PRIVE;SAINT LOUIS;PRIVE;0;0;548;07300
2022;COLLEGE;DE L'EUROPE JEAN MONNET;PUBLIC;0;0;893;26303
2022;COLLEGE;OLIVIER DE SERRES;PUBLIC;0;0;508;26450
2022;COLLEGE;ERNEST CHALAMEL;PUBLIC;0;0;339;26220
2022;COLLEGE;MARGUERITE DURAS;PUBLIC;0;0;683;26200
2022;COLLEGE;EUROPA;PUBLIC;1;0;622;26200
2022;COLLEGE;JEAN MACE;PUBLIC;0;0;698;26801
2022;COLLEGE;ALBERT TRIBOULET;PUBLIC;1;0;211;26102
2022;COLLEGE;JOSEPHINE BAKER;PUBLIC;0;0;507;26260
2022;COLLEGE PRIVE;LES GOELANDS;PRIVE;0;0;369;26140
2022;COLLEGE;DO MISTRAU;PUBLIC;0;0;268;26790
2022;LP LYCEE DES METIERS;AMBLARD;PUBLIC;0;0;27;26000
2022;COLLEGE;LES BALMETTES;PUBLIC;0;0;450;74006
2022;COLLEGE PRIVE;SAINT FRANCOIS LES CORDELIERS;PRIVE;0;0;477;74600
2022;COLLEGE;LES BARATTES;PUBLIC;0;0;657;74940
2022;COLLEGE PRIVE;SAINT MICHEL;PRIVE;0;0;721;74007
2022;LYCEE POLYVALENT;JEAN MONNET;PUBLIC;0;0;20;74106
2022;COLLEGE;SAMIVEL;PUBLIC;0;0;673;74130
2022;COLLEGE PRIVE;JEANNE D'ARC;PRIVE;0;0;217;74400
2022;LYCEE POLYVALENT PRIVE;ST JEAN BOSCO LES CORDELIERS;PRIVE;0;0;23;74301
2022;COLLEGE PRIVE;SAINT VINCENT;PRIVE;0;0;282;74160
2022;COLLEGE;VAL DES USSES;PUBLIC;0;0;557;74270
2022;COLLEGE;JACQUES PREVERT;PUBLIC;1;0;585;74240
2022;COLLEGE;LES ALLOBROGES;PUBLIC;0;0;825;74802
2022;LYCEE PROF PRIVE DES METIERS;SAINTE FAMILLE;PRIVE;0;0;24;#N/A
2022;COLLEGE;THEODORE MONOD;PUBLIC;0;0;627;74200
2022;COLLEGE;EMILE ALLAIS;PUBLIC;0;0;280;74120
2022;COLLEGE;SIMONE VEIL;PUBLIC;0;0;522;74330
2022;COLLEGE;LE CLERGEON;PUBLIC;0;0;727;74152
2022;COLLEGE PRIVE;ASSOMPTION MONT BLANC;PRIVE;0;0;105;74170
2022;COLLEGE;GASPARD MONGE;PUBLIC;0;0;694;74490
2022;LYCEE PROFESSIONNEL PRIVE;CECAM;PRIVE;0;0;23;74490
2022;COLLEGE;ARTHUR RIMBAUD;PUBLIC;0;0;886;74161
2022;COLLEGE PRIVE;SAINT JOSEPH;PRIVE;0;0;424;74703
2022;COLLEGE;JACQUES BREL;PUBLIC;0;0;427;74440
2022;COLLEGE PRIVE;SACRE COEUR;PRIVE;0;0;624;74200
2022;COLLEGE;JEAN JACQUES ROUSSEAU;PUBLIC;0;0;876;74200
2022;COLLEGE;CHAMPAGNE;PUBLIC;0;0;950;74200
2022;COLLEGE;PAUL LANGEVIN;PUBLIC;0;0;1077;74108
2022;COLLEGE PRIVE;SAINT BAPTISTE;PRIVE;0;0;187;38270
2022;COLLEGE PRIVE;SAINT MICHEL;PRIVE;0;0;560;38300
2022;COLLEGE;SALVADOR ALLENDE;PUBLIC;1;0;841;38307
2022;COLLEGE;MARTIN LUTHER KING;PUBLIC;0;0;544;38230
2022;COLLEGE;JEAN VILAR;PUBLIC;0;1;417;38130
2022;COLLEGE;GERARD PHILIPE;PUBLIC;1;0;486;38602
2022;COLLEGE;LE CHAMANDIER;PUBLIC;0;0;603;38610
2022;LYCEE POLYVALENT;EMMANUEL  MOUNIER;PUBLIC;0;0;15;38029
2022;LYCEE PROF PRIVE DES METIERS;DU TERTIAIRE LES CHARMILLES;PRIVE;0;0;59;38100
2022;COLLEGE;OLYMPIQUE;PUBLIC;1;0;489;38035
2022;COLLEGE;STENDHAL;PUBLIC;0;0;613;38014
2022;COLLEGE PRIVE;LES CHARMILLES;PRIVE;0;0;108;38100
2022;LYCEE PROFESSIONNEL PRIVE;JEAN MARIE VIANNEY;PRIVE;0;0;10;38260
2022;COLLEGE;LOUIS MAUBERRET;PUBLIC;0;0;550;38350
2022;LYCEE POLYVALENT;UNITE SOINS ETUDES GRESIVAUDAN;PUBLIC;0;0;15;38700
2022;COLLEGE;LE GUILLON;PUBLIC;0;0;486;38480
2022;COLLEGE;NELSON MANDELA;PUBLIC;1;0;430;38800
2022;COLLEGE;ARC EN CIERS;PUBLIC;0;0;520;38630
2022;COLLEGE;LES PIERRES PLANTES;PUBLIC;0;0;607;38390
2022;COLLEGE;ROSE VALLAND;PUBLIC;0;0;557;38590
2022;COLLEGE;EDOUARD VAILLANT;PUBLIC;0;0;439;38400
2022;COLLEGE;CHARTREUSE;PUBLIC;0;0;543;38950
2022;COLLEGE;JEAN FERRAT;PUBLIC;0;0;713;38150
2022;COLLEGE;JULES VERNE;PUBLIC;0;0;527;38760
2022;COLLEGE;DE L'ISLE;PUBLIC;0;0;645;38200
2022;COLLEGE;JOSEPH CHASSIGNEUX;PUBLIC;0;0;577;38470
2022;LYCEE PROF PRIVE DES METIERS;LES GORGES;PRIVE;0;0;21;38500
2022;COLLEGE;JOVET;PUBLIC;0;0;395;73212
2022;COLLEGE PRIVE;CATHOLIQUE LAMARTINE;PRIVE;0;0;458;73100
2022;COLLEGE;JEAN JACQUES PERRET;PUBLIC;0;0;468;73100
2022;LYCEE POLYVALENT PRIVE;JEANNE D'ARC;PRIVE;0;0;14;73203
2022;LYCEE PROFESSIONNEL PRIVE;LE MARGERIAZ;PRIVE;0;0;22;73000
2022;COLLEGE;LE BEAUFORTAIN;PUBLIC;0;0;210;73270
2022;ETAB.REGIONAL ENSEIGNT ADAPTE;AMELIE GEX;PUBLIC;0;0;65;73001
2022;COLLEGE;PIERRE ET MARIE CURIE;PUBLIC;0;0;872;73801
2021;COLLEGE PRIVE;NOTRE DAME;PRIVE;0;0;607;07100
2021;COLLEGE;LES PERRIERES;PUBLIC;1;0;825;07104
2021;COLLEGE;DE JASTRES;PUBLIC;0;0;300;07200
2021;COLLEGE PRIVE;MARIE RIVIER;PRIVE;0;0;533;07700
2021;COLLEGE;DU VIVARAIS;PUBLIC;0;0;221;07270
2021;COLLEGE PRIVE;CHARLES DE FOUCAULD;PRIVE;0;0;80;07270
2021;COLLEGE PRIVE;LE PORTALET NOTRE DAME;PRIVE;0;0;208;07110
2021;COLLEGE;DES DEUX VALLEES;PUBLIC;0;0;285;07160
2021;COLLEGE;ALEX MEZENC;PUBLIC;0;0;378;07250
2021;COLLEGE;DE CRUSSOL;PUBLIC;0;0;562;07130
2021;COLLEGE;DOCTEUR PIERRE DELARBRE;PUBLIC;0;0;250;07240
2021;COLLEGE;MARCELLE RIVIER;PUBLIC;0;0;574;26760
2021;COLLEGE;GERARD GAUD;PUBLIC;0;0;788;26500
2021;COLLEGE;HENRI BARBUSSE;PUBLIC;0;0;196;26170
2021;COLLEGE PRIVE;SAINT BONNET;PRIVE;0;0;215;26330
2021;LYCEE POLYVALENT;FRANCOIS JEAN ARMORIN;PUBLIC;0;0;24;26402
2021;COLLEGE PRIVE;SAINT LOUIS;PRIVE;0;0;421;26402
2021;LYCEE PROFESSIONNEL PRIVE;SAINT LOUIS;PRIVE;0;0;24;#N/A
2021;COLLEGE;MARGUERITE DURAS;PUBLIC;0;0;657;26200
2021;COLLEGE PRIVE;CHABRILLAN ST JEAN-BAPTISTE;PRIVE;0;0;464;26200
2021;COLLEGE;LIS ISCLO D'OR;PUBLIC;0;0;500;26702
2021;COLLEGE;JEAN MACE;PUBLIC;0;0;704;26801
2021;LYCEE PROFESSIONNEL;MONTESQUIEU;PUBLIC;0;0;21;26000
2021;COLLEGE;MARCEL PAGNOL;PUBLIC;1;0;686;26000
2021;COLLEGE;EMILE LOUBET;PUBLIC;0;0;414;26021
2021;COLLEGE;EVIRE;PUBLIC;0;0;615;74940
2021;COLLEGE PRIVE;LA SALLE ANNECY - PRINGY;PRIVE;0;0;885;74371
2021;COLLEGE;BEAUREGARD;PUBLIC;0;0;633;74960
2021;COLLEGE;LES BARATTES;PUBLIC;0;0;678;74940
2021;COLLEGE PRIVE;SAINT MICHEL;PRIVE;0;0;706;74007
2021;LYCEE POLYVALENT;JEAN MONNET;PUBLIC;0;0;29;74106
2021;COLLEGE;SAMIVEL;PUBLIC;0;0;684;74130
2021;COLLEGE PRIVE;JEANNE D'ARC;PRIVE;0;0;215;74400
2021;COLLEGE;THEODORE MONOD;PUBLIC;0;0;613;74200
2021;COLLEGE;CAMILLE CLAUDEL;PUBLIC;0;0;601;74970
2021;COLLEGE;SIMONE VEIL;PUBLIC;0;0;521;74330
2021;COLLEGE PRIVE;ASSOMPTION MONT BLANC;PRIVE;0;0;102;74170
2021;COLLEGE;HENRI CORBET;PUBLIC;0;0;409;74430
2021;COLLEGE;JEAN MONNET;PUBLIC;0;0;522;74410
2021;COLLEGE;LA MANDALLAZ;PUBLIC;0;0;681;74330
2021;COLLEGE PRIVE;SAINT BAPTISTE;PRIVE;0;0;206;38270
2021;COLLEGE;SALVADOR ALLENDE;PUBLIC;1;0;877;38307
2021;LP LYCEE DES METIERS;JEAN CLAUDE AUBRY;PUBLIC;0;0;24;38303
2021;LYCEE D'ENSEIGNEMENT ADAPTE;PIERRE RABHI;PUBLIC;0;0;57;38640
2021;COLLEGE;LA MOULINIERE;PUBLIC;0;0;633;38420
2021;COLLEGE;LOUIS LUMIERE;PUBLIC;0;0;587;38432
2021;COLLEGE PRIVE;SAINT BRUNO;PRIVE;0;0;302;38380
2021;COLLEGE;LE CHAMANDIER;PUBLIC;0;0;600;38610
2021;COLLEGE PRIVE;DON BOSCO;PRIVE;0;0;596;38610
2021;LP LYCEE DES METIERS;GUYNEMER;PUBLIC;0;0;14;38001
2021;COLLEGE;CHAMPOLLION;PUBLIC;0;0;542;38000
2021;COLLEGE;JACQUES PREVERT;PUBLIC;0;0;547;38540
2021;COLLEGE;DU VALLON DES MOTTES;PUBLIC;0;0;191;38770
2021;COLLEGE;LE GUILLON;PUBLIC;0;0;488;38480
2021;COLLEGE;ARC EN CIERS;PUBLIC;0;0;548;38630
2021;COLLEGE;FRANCOIS TRUFFAUT;PUBLIC;0;0;513;38080
2021;COLLEGE;ROBERT DOISNEAU;PUBLIC;0;0;461;38081
2021;COLLEGE;LES BUCLOS;PUBLIC;0;0;330;38240
2021;COLLEGE;MARCEL CHENE;PUBLIC;0;0;672;38530
2021;LYCEE PROFESSIONNEL;L'ODYSSEE;PUBLIC;0;0;24;38231
2021;COLLEGE;RAYMOND GUELEN;PUBLIC;0;0;260;38680
2021;COLLEGE;GEORGES BRASSENS;PUBLIC;0;0;443;38780
2021;COLLEGE;DE L'EDIT;PUBLIC;1;0;610;38150
2021;COLLEGE;GRESIVAUDAN;PUBLIC;0;0;716;38330
2021;COLLEGE;LES DAUPHINS;PUBLIC;0;0;608;38110
2021;COLLEGE;LE GRAND SOM;PUBLIC;0;0;296;38380
2021;LYCEE POLYVALENT;LA SAULAIE;PUBLIC;0;0;24;38162
2021;COLLEGE;EDOUARD VAILLANT;PUBLIC;0;0;399;38400
2021;COLLEGE;CONDORCET;PUBLIC;0;0;535;38210
2021;LYCEE POLYVALENT PRIVE;ROBIN;PRIVE;0;0;66;38204
2021;COLLEGE;FRANCOIS PONSARD;PUBLIC;1;0;747;38200
2021;COLLEGE;BELLEDONNE;PUBLIC;0;0;747;38190
2021;COLLEGE;SONIA DELAUNAY;PUBLIC;0;0;473;38090
2021;LYCEE POLYVALENT;FERDINAND BUISSON;PUBLIC;0;0;24;38501
2021;COLLEGE;LA GARENNE;PUBLIC;0;0;554;38503
2021;LYCEE PROFESSIONNEL PRIVE;LES PRAIRIES;PRIVE;0;0;18;38500
2021;COLLEGE;JEAN JACQUES PERRET;PUBLIC;0;0;490;73100
2021;COLLEGE;EDMOND ROSTAND;PUBLIC;0;0;401;73490
2021;COLLEGE;LA VANOISE;PUBLIC;0;0;409;73500
2021;LPO LYCEE DES METIERS;AMBROISE CROIZAT;PUBLIC;0;0;24;73601
2021;COLLEGE;JOSEPH ET XAVIER DE MAISTRE;PUBLIC;0;0;568;73230
2021;LYCEE POLYVALENT;PAUL HEROULT;PUBLIC;0;0;13;73302
2021;COLLEGE;MAURIENNE;PUBLIC;0;0;671;73300
2021;COLLEGE;PAUL MOUGIN;PUBLIC;0;0;195;73140
2021;COLLEGE PRIVE;SAINT PAUL;PRIVE;0;0;169;73730
2021;COLLEGE;LES FRONTAILLES;PUBLIC;0;0;480;73250
2020;COLLEGE;LES PERRIERES;PUBLIC;1;0;840;07104
2020;COLLEGE;ROQUA;PUBLIC;0;0;594;07204
2020;COLLEGE;VALLEE DE LA BEAUME;PUBLIC;0;0;247;07260
2020;COLLEGE PRIVE;LE PORTALET NOTRE DAME;PRIVE;0;0;207;07110
2020;COLLEGE;ALEX MEZENC;PUBLIC;0;0;357;07250
2020;COLLEGE;MARCEL CHAMONTIN;PUBLIC;0;0;689;07401
2020;COLLEGE PRIVE;ENSEMBLE BIENHEUREUX GABRIEL L;PRIVE;0;0;176;07400
2020;COLLEGE;JOSEPH DURAND;PUBLIC;0;0;237;07560
2020;COLLEGE;BERNARD DE VENTADOUR;PUBLIC;0;0;972;07000
2020;COLLEGE PRIVE;SAINT JOSEPH;PRIVE;0;0;208;07120
2020;LP LYCEE DES METIERS;MARIUS BOUVIER;PUBLIC;0;0;15;07301
2020;COLLEGE;GEORGES GOUY;PUBLIC;0;0;359;07600
2020;COLLEGE;LABOISSIERE;PUBLIC;0;0;402;07170
2020;COLLEGE;MARCELLE RIVIER;PUBLIC;0;0;578;26760
2020;COLLEGE;DE L'EUROPE JEAN MONNET;PUBLIC;0;0;857;26303
2020;COLLEGE PRIVE;SAINT LOUIS;PRIVE;0;0;385;26402
2020;COLLEGE;REVESZ LONG;PUBLIC;0;0;613;26400
2020;COLLEGE;DU DIOIS;PUBLIC;0;0;449;26150
2020;COLLEGE;RENE BARJAVEL;PUBLIC;0;0;657;26110
2020;COLLEGE;GUSTAVE JAUME;PUBLIC;0;1;372;26702
2020;LYCEE PROFESSIONNEL;AUGUSTE BOUVET;PUBLIC;0;0;36;26102
2020;COLLEGE;ALBERT TRIBOULET;PUBLIC;1;0;237;26102
2020;LPO LYCEE DES METIERS;HENRI LAURENS;PUBLIC;0;0;12;26241
2020;LYCEE PROFESSIONNEL PRIVE;LA PROVIDENCE;PRIVE;0;0;24;26000
2020;LYCEE PROFESSIONNEL;MONTESQUIEU;PUBLIC;0;0;22;26000
2020;COLLEGE PRIVE;NOTRE DAME;PRIVE;0;0;916;26008
2020;COLLEGE PRIVE;SAINT FRANCOIS LES CORDELIERS;PRIVE;0;0;447;74600
2020;LYCEE POLYVALENT;LES BRESSIS;PRIVE;0;0;29;74600
2020;COLLEGE;LE SEMNOZ;PUBLIC;0;0;830;74600
2020;COLLEGE;MICHEL SERVET;PUBLIC;1;0;1108;74102
2020;COLLEGE PRIVE;NOTRE DAME;PRIVE;0;0;268;74470
2020;COLLEGE;FRANCOIS MUGNIER;PUBLIC;0;0;611;74890
2020;COLLEGE PRIVE;SAINT JEAN BOSCO;PRIVE;0;0;646;74303
2020;COLLEGE PRIVE;ADVENTISTE MAURICE TIECHE;PRIVE;0;0;97;74160
2020;COLLEGE;PAUL EMILE VICTOR;PUBLIC;0;0;772;74380
2020;COLLEGE;DU BAS CHABLAIS;PUBLIC;0;0;655;74140
2020;COLLEGE;LES RIVES DU LEMAN;PUBLIC;0;0;726;74500
2020;COLLEGE;LES ALLOBROGES;PUBLIC;0;0;814;74802
2020;LPO PR;DEMOTZ DE LA SALLE;PRIVE;0;0;14;74150
2020;COLLEGE;HENRI CORBET;PUBLIC;0;0;422;74430
2020;COLLEGE PRIVE;LA PRESENTATION DE MARIE;PRIVE;0;0;615;74163
2020;COLLEGE PRIVE;SAINT JOSEPH LA SALLE;PRIVE;0;0;616;74202
2020;COLLEGE;JEAN JACQUES ROUSSEAU;PUBLIC;0;0;894;74200
2020;COLLEGE;PRE BENIT;PUBLIC;0;0;888;38300
2020;COLLEGE;SALVADOR ALLENDE;PUBLIC;1;0;923;38307
2020;COLLEGE;DES COLLINES;PUBLIC;0;0;704;38850
2020;LYCEE D'ENSEIGNEMENT ADAPTE;PIERRE RABHI;PUBLIC;0;0;63;38640
2020;COLLEGE;GEORGES POMPIDOU;PUBLIC;0;0;480;38640
2020;COLLEGE;SIMONE DE BEAUVOIR;PUBLIC;0;0;581;38920
2020;COLLEGE;PABLO PICASSO;PUBLIC;1;0;367;38130
2020;COLLEGE PRIVE;SAINT BRUNO;PRIVE;0;0;298;38380
2020;COLLEGE;GERARD PHILIPE;PUBLIC;1;0;457;38602
2020;COLLEGE;LE CHAMANDIER;PUBLIC;0;0;600;38610
2020;COLLEGE;FANTIN- LATOUR;PUBLIC;0;0;655;38000
2020;COLLEGE;LUCIE AUBRAC;PUBLIC;0;1;394;38036
2020;LYCEE POLYVALENT;HECTOR BERLIOZ;PUBLIC;0;0;24;38260
2020;COLLEGE;JONGKIND;PUBLIC;0;0;629;38260
2020;LYCEE PROFESSIONNEL PRIVE;JEAN MARIE VIANNEY;PRIVE;0;0;11;38260
2020;COLLEGE;DU VALLON DES MOTTES;PUBLIC;0;0;220;38770
2020;COLLEGE PRIVE;SAINT BRUNO;PRIVE;0;0;627;38110
2020;LYCEE PROFESSIONNEL PRIVE;JEANNE D'ARC;PRIVE;0;0;16;38550
2020;COLLEGE PRIVE;JEANNE D'ARC;PRIVE;0;0;454;38480
2020;COLLEGE;LE GUILLON;PUBLIC;0;0;506;38480
2020;COLLEGE;NELSON MANDELA;PUBLIC;1;0;392;38800
2020;COLLEGE;FRANCOIS TRUFFAUT;PUBLIC;0;0;526;38080
2020;COLLEGE;DU TRIEVES;PUBLIC;0;0;204;38710
2020;COLLEGE;LES BUCLOS;PUBLIC;0;0;333;38240
2020;COLLEGE;MARCEL CHENE;PUBLIC;0;0;670;38530
2020;COLLEGE;RAYMOND GUELEN;PUBLIC;0;0;274;38680
2020;COLLEGE;BARNAVE;PUBLIC;0;0;684;38521
2020;COLLEGE;ROSE VALLAND;PUBLIC;0;0;588;38590
2020;COLLEGE;LES DAUPHINS;PUBLIC;0;0;616;38110
2020;COLLEGE;LE GRAND SOM;PUBLIC;0;0;298;38380
2020;COLLEGE;LE SAVOURET;PUBLIC;0;0;662;38160
2020;COLLEGE;FREDERIC MISTRAL;PUBLIC;0;0;723;38554
2020;COLLEGE;CLAUDE ET GERMAIN GRANGE;PUBLIC;0;0;825;38200
2020;LPO LYCEE DES METIERS;GALILEE;PUBLIC;0;0;23;38209
2020;COLLEGE PRIVE;ROBIN;PRIVE;0;0;1005;38204
2020;LPO LYCEE DES METIERS;PORTES DE L'OISANS;PUBLIC;0;0;23;38220
2020;LYCEE PROF PRIVE DES METIERS;LES GORGES;PRIVE;0;0;24;38500
2020;LYCEE PROFESSIONNEL PRIVE;LES PORTES DE CHARTREUSE;PRIVE;0;0;39;38340
2020;COLLEGE;JOVET;PUBLIC;0;0;461;73212
2020;LYCEE PROFESSIONNEL;LE GRAND ARC;PUBLIC;0;0;23;73204
2020;LYCEE PROFESSIONNEL PRIVE;JEANNE D'ARC;PRIVE;0;0;20;#N/A
2020;COLLEGE;LE BEAUFORTAIN;PUBLIC;0;0;206;73270
2020;COLLEGE;SAINT EXUPERY;PUBLIC;0;0;667;73704
2020;LPO LYCEE DES METIERS;MONGE;PUBLIC;0;0;23;73000
2020;COLLEGE;JULES FERRY;PUBLIC;0;0;674;73000
2020;COLLEGE;PIERRE ET MARIE CURIE;PUBLIC;0;0;803;73801
2020;COLLEGE PRIVE;SAINTE THERESE;PRIVE;0;0;170;73600
2020;COLLEGE;DE L'EPINE;PUBLIC;0;0;323;73470
2020;COLLEGE;PAUL MOUGIN;PUBLIC;0;0;212;73140
2020;COLLEGE;CHARLES DULLIN;PUBLIC;0;0;340;73170`;function Rr(n){let t=n.split(";");return[parseInt(t[0]),t[1],t[2],t[3]==="PUBLIC"?"PUBLIC":"PRIVE",t[4]==="1",t[5]==="1",parseInt(t[6]),t[6]]}function Or(n){return{rentree_scolaire:n[0],denomination_principale:n[1],patronyme:n[2],secteur:n[3],rep:n[4],rep_plus:n[5],nombre_eleves_total:n[6],code_postal:n[7]}}var Zt=class n{_colleges=w([]);colleges=this._colleges.asReadonly();constructor(){let e=hr.split(`
`).map(Rr);this._colleges.set(e.map(Or));let r=hr.split(`
`).map(Rr).map(Or);console.log("liste des coll\xE8ges",r,"dont",r.filter(i=>i.secteur==="PUBLIC"&&(i.rep_plus||i.rep)).length,"\xE9tablissements publiques en REP+"),console.log("nb \xE9l\xE8ves",r.reduce((i,o)=>i+o.nombre_eleves_total,0),r.map(i=>i.nombre_eleves_total).reduce((i,o)=>i+o))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})};var $E=(n,t)=>t.denomination_principale;function zE(n,t){if(n&1&&(g(0,"tr")(1,"td"),v(2),U(),g(3,"td"),v(4),U()()),n&2){let e=t.$implicit;b(2),Nt(" ",e.denomination_principale," "),b(2),Nt(" ",e.nombre_eleves_total," ")}}var Qt=class n{data=be.required();nbParPage=be(10);page=zr(0);nbPages=F(()=>Math.ceil(this.data().length/this.nbParPage()));indiceDepartEtablissements=F(()=>this.page()*this.nbParPage());etablissements=F(()=>this.data().slice(this.indiceDepartEtablissements(),this.indiceDepartEtablissements()+this.nbParPage()));previousPage(){this.page.set(this.page()-1)}nextPage(){this.page.update(t=>t+1)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=re({type:n,selectors:[["app-table-etablissements"]],inputs:{data:[1,"data"],nbParPage:[1,"nbParPage"],page:[1,"page"]},outputs:{page:"pageChange"},decls:14,vars:2,consts:[[3,"click","disabled"],[3,"click"]],template:function(e,r){e&1&&(g(0,"table")(1,"thead")(2,"th"),v(3,"Nom"),U(),g(4,"th"),v(5,"Nombre d'\xE9l\xE8ves"),U()(),g(6,"tbody"),Xr(7,zE,5,2,"tr",null,$E),U()(),g(9,"button",0),D("click",function(){return r.previousPage()}),v(10,`Pr\xE9c\xE9dents
`),U(),v(11),g(12,"button",1),D("click",function(){return r.nextPage()}),v(13,"Suivants"),U()),e&2&&(b(7),Kr(r.etablissements()),b(2),ie("disabled",r.page()===0),b(2),Nt(`
Page courante `,r.page(),`
`))},styles:["table[_ngcontent-%COMP%]{border-collapse:collapse}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:solid black 1px}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#d3d3d3}"]})};var Io=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,r){this._renderer=e,this._elementRef=r}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(r){return new(r||n)(V(gt),V(At))};static \u0275dir=Z({type:n})}return n})(),ho=(()=>{class n extends Io{static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ie(n)))(i||n)}})();static \u0275dir=Z({type:n,features:[he]})}return n})(),Sr=new P("");var qE={provide:Sr,useExisting:ft(()=>De),multi:!0};function WE(){let n=Re()?Re().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var ZE=new P(""),De=(()=>{class n extends Io{_compositionMode;_composing=!1;constructor(e,r,i){super(e,r),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!WE())}writeValue(e){let r=e??"";this.setProperty("value",r)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(r){return new(r||n)(V(gt),V(At),V(ZE,8))};static \u0275dir=Z({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,i){r&1&&D("input",function(s){return i._handleInput(s.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(s){return i._compositionEnd(s.target.value)})},standalone:!1,features:[Gt([qE]),he]})}return n})();var QE=new P(""),XE=new P("");function Ro(n){return n!=null}function Oo(n){return mt(n)?B(n):n}function fo(n){let t={};return n.forEach(e=>{t=e!=null?l(l({},t),e):t}),Object.keys(t).length===0?null:t}function po(n,t){return t.map(e=>e(n))}function KE(n){return!n.validate}function Po(n){return n.map(t=>KE(t)?t:e=>t.validate(e))}function e0(n){if(!n)return null;let t=n.filter(Ro);return t.length==0?null:function(e){return fo(po(e,t))}}function Ao(n){return n!=null?e0(Po(n)):null}function t0(n){if(!n)return null;let t=n.filter(Ro);return t.length==0?null:function(e){let r=po(e,t).map(Oo);return Dr(r).pipe(O(fo))}}function So(n){return n!=null?t0(Po(n)):null}function Eo(n,t){return n===null?[t]:Array.isArray(n)?[...n,t]:[n,t]}function n0(n){return n._rawValidators}function r0(n){return n._rawAsyncValidators}function fr(n){return n?Array.isArray(n)?n:[n]:[]}function Kt(n,t){return Array.isArray(n)?n.includes(t):n===t}function ao(n,t){let e=fr(t);return fr(n).forEach(i=>{Kt(e,i)||e.push(i)}),e}function Lo(n,t){return fr(t).filter(e=>!Kt(n,e))}var en=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=Ao(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=So(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}},pr=class extends en{name;get formDirective(){return null}get path(){return null}},It=class extends en{_parent=null;name=null;valueAccessor=null},Pr=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},i0={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},mL=p(l({},i0),{"[class.ng-submitted]":"isSubmitted"}),nn=(()=>{class n extends Pr{constructor(e){super(e)}static \u0275fac=function(r){return new(r||n)(V(It,2))};static \u0275dir=Z({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,i){r&2&&Qr("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[he]})}return n})();var ut="VALID",Xt="INVALID",Ge="PENDING",ct="DISABLED",Ve=class{},tn=class extends Ve{value;source;constructor(t,e){super(),this.value=t,this.source=e}},dt=class extends Ve{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}},Ct=class extends Ve{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}},ve=class extends Ve{status;source;constructor(t,e){super(),this.status=t,this.source=e}};function o0(n){return(rn(n)?n.validators:n)||null}function s0(n){return Array.isArray(n)?Ao(n):n||null}function E0(n,t){return(rn(t)?t.asyncValidators:n)||null}function a0(n){return Array.isArray(n)?So(n):n||null}function rn(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}var Ar=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return se(this.statusReactive)}set status(t){se(()=>this.statusReactive.set(t))}_status=F(()=>this.statusReactive());statusReactive=w(void 0);get valid(){return this.status===ut}get invalid(){return this.status===Xt}get pending(){return this.status==Ge}get disabled(){return this.status===ct}get enabled(){return this.status!==ct}errors;get pristine(){return se(this.pristineReactive)}set pristine(t){se(()=>this.pristineReactive.set(t))}_pristine=F(()=>this.pristineReactive());pristineReactive=w(!0);get dirty(){return!this.pristine}get touched(){return se(this.touchedReactive)}set touched(t){se(()=>this.touchedReactive.set(t))}_touched=F(()=>this.touchedReactive());touchedReactive=w(!1);get untouched(){return!this.touched}_events=new z;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(ao(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(ao(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Lo(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Lo(t,this._rawAsyncValidators))}hasValidator(t){return Kt(this._rawValidators,t)}hasAsyncValidator(t){return Kt(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let r=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsTouched(p(l({},t),{sourceControl:r})),e&&t.emitEvent!==!1&&this._events.next(new Ct(!0,r))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let r=t.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:r})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,r),e&&t.emitEvent!==!1&&this._events.next(new Ct(!1,r))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let r=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsDirty(p(l({},t),{sourceControl:r})),e&&t.emitEvent!==!1&&this._events.next(new dt(!1,r))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let r=t.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t,r),e&&t.emitEvent!==!1&&this._events.next(new dt(!0,r))}markAsPending(t={}){this.status=Ge;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new ve(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.markAsPending(p(l({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=ct,this.errors=null,this._forEachChild(i=>{i.disable(p(l({},t),{onlySelf:!0}))}),this._updateValue();let r=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new tn(this.value,r)),this._events.next(new ve(this.status,r)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(p(l({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=ut,this._forEachChild(r=>{r.enable(p(l({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(p(l({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t,e){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let r=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ut||this.status===Ge)&&this._runAsyncValidator(r,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new tn(this.value,e)),this._events.next(new ve(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(p(l({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?ct:ut}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=Ge,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1};let r=Oo(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((r,i)=>r&&r._find(i),this)}getError(t,e){let r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,r){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||r)&&this._events.next(new ve(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,r)}_initObservables(){this.valueChanges=new W,this.statusChanges=new W}_calculateStatus(){return this._allControlsDisabled()?ct:this.errors?Xt:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Ge)?Ge:this._anyControlsHaveStatus(Xt)?Xt:ut}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let r=!this._anyControlsDirty(),i=this.pristine!==r;this.pristine=r,this._parent&&!t.onlySelf&&this._parent._updatePristine(t,e),i&&this._events.next(new dt(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new Ct(this.touched,e)),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){rn(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){let e=this._parent&&this._parent.dirty;return!t&&!!e&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=s0(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=a0(this._rawAsyncValidators)}};var go=new P("CallSetDisabledState",{providedIn:"root",factory:()=>gr}),gr="always";function L0(n,t){return[...t.path,n]}function l0(n,t,e=gr){c0(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&t.valueAccessor.setDisabledState?.(n.disabled),d0(n,t),I0(n,t),C0(n,t),u0(n,t)}function lo(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function u0(n,t){if(t.valueAccessor.setDisabledState){let e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function c0(n,t){let e=n0(n);t.validator!==null?n.setValidators(Eo(e,t.validator)):typeof e=="function"&&n.setValidators([e]);let r=r0(n);t.asyncValidator!==null?n.setAsyncValidators(Eo(r,t.asyncValidator)):typeof r=="function"&&n.setAsyncValidators([r]);let i=()=>n.updateValueAndValidity();lo(t._rawValidators,i),lo(t._rawAsyncValidators,i)}function d0(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&Uo(n,t)})}function C0(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&Uo(n,t),n.updateOn!=="submit"&&n.markAsTouched()})}function Uo(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function I0(n,t){let e=(r,i)=>{t.valueAccessor.writeValue(r),i&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function h0(n,t){if(!n.hasOwnProperty("model"))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(t,e.currentValue)}function R0(n){return Object.getPrototypeOf(n.constructor)===ho}function O0(n,t){if(!t)return null;Array.isArray(t);let e,r,i;return t.forEach(o=>{o.constructor===De?e=o:R0(o)?r=o:i=o}),i||r||e||null}function uo(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}function co(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var f0=class extends Ar{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,r){super(o0(e),E0(r,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),rn(e)&&(e.nonNullable||e.initialValueIsDefault)&&(co(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(r=>r(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){uo(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){uo(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){co(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var p0={provide:It,useExisting:ft(()=>ht)},Co=Promise.resolve(),ht=(()=>{class n extends It{_changeDetectorRef;callSetDisabledState;control=new f0;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new W;constructor(e,r,i,o,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=e,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=O0(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let r=e.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),h0(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){l0(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Co.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let r=e.isDisabled.currentValue,i=r!==0&&An(r);Co.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?L0(e,this._parent):[e]}static \u0275fac=function(r){return new(r||n)(V(pr,9),V(QE,10),V(XE,10),V(Sr,10),V(xe,8),V(go,8))};static \u0275dir=Z({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[Gt([p0]),he,Pt]})}return n})();var P0={provide:Sr,useExisting:ft(()=>Ur),multi:!0},Ur=(()=>{class n extends ho{writeValue(e){let r=e??"";this.setProperty("value",r)}registerOnChange(e){this.onChange=r=>{e(r==""?null:parseFloat(r))}}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ie(n)))(i||n)}})();static \u0275dir=Z({type:n,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(r,i){r&1&&D("input",function(s){return i.onChange(s.target.value)})("blur",function(){return i.onTouched()})},standalone:!1,features:[Gt([P0]),he]})}return n})();var A0=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=Ye({type:n});static \u0275inj=ye({})}return n})();var on=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:go,useValue:e.callSetDisabledState??gr}]}}static \u0275fac=function(r){return new(r||n)};static \u0275mod=Ye({type:n});static \u0275inj=ye({imports:[A0]})}return n})();var sn=class n{filtre=Yr();filtreNom=w("");_filtreNomMinuscule=F(()=>this.filtreNom().toLowerCase());_effFiltrage=ri(()=>{this.filtre.emit(t=>t.denomination_principale.toLowerCase().indexOf(this._filtreNomMinuscule())!==-1)});static \u0275fac=function(e){return new(e||n)};static \u0275cmp=re({type:n,selectors:[["app-filtre-etablissement"]],outputs:{filtre:"filtre"},decls:4,vars:1,consts:[["type","text",3,"ngModelChange","ngModel"]],template:function(e,r){e&1&&(g(0,"pre"),v(1,`    D\xE9finition du filtre
    `),g(2,"input",0),D("ngModelChange",function(o){return r.filtreNom.set(o)}),U(),v(3,`
`),U()),e&2&&(b(2),ie("ngModel",r.filtreNom()))},dependencies:[on,De,nn,ht],encapsulation:2})};var En=class n{dataProcessSrv=d(Zt);filtreCourant=w(t=>!0);colleges=F(()=>this.dataProcessSrv.colleges().filter(this.filtreCourant()));nbParPage=w(5);page=w(0);static \u0275fac=function(e){return new(e||n)};static \u0275cmp=re({type:n,selectors:[["app-root"]],decls:8,vars:5,consts:[["type","number",3,"ngModelChange","ngModel"],[3,"filtre"],[3,"pageChange","data","page","nbParPage"]],template:function(e,r){e&1&&(g(0,"pre"),v(1,"         page : "),g(2,"input",0),D("ngModelChange",function(o){return r.page.set(o)}),U(),v(3,`
    nbParPage : `),g(4,"input",0),D("ngModelChange",function(o){return r.nbParPage.set(o)}),U(),v(5,`
`),U(),g(6,"app-filtre-etablissement",1),D("filtre",function(o){return r.filtreCourant.set(o)}),U(),g(7,"app-table-etablissements",2),D("pageChange",function(o){return r.page.set(o)}),U()),e&2&&(b(2),ie("ngModel",r.page()),b(2),ie("ngModel",r.nbParPage()),b(3),ie("data",r.colleges())("page",r.page())("nbParPage",r.nbParPage()))},dependencies:[Qt,sn,on,De,Ur,nn,ht],encapsulation:2})};Oi(En,oo).catch(n=>console.error(n));
