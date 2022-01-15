/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function e(e,t,i,n){var s,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(a=(o<3?s(a):o>3?s(t,i,a):s(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},n=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${n}--\x3e`,o=new RegExp(`${n}|${s}`);class a{constructor(e,t){this.parts=[],this.element=t;const i=[],s=[],a=document.createTreeWalker(t.content,133,null,!1);let c=0,h=-1,u=0;const{strings:p,values:{length:g}}=e;for(;u<g;){const e=a.nextNode();if(null!==e){if(h++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let n=0;for(let e=0;e<i;e++)r(t[e].name,"$lit$")&&n++;for(;n-- >0;){const t=p[u],i=d.exec(t)[2],n=i.toLowerCase()+"$lit$",s=e.getAttribute(n);e.removeAttribute(n);const a=s.split(o);this.parts.push({type:"attribute",index:h,name:i,strings:a}),u+=a.length-1}}"TEMPLATE"===e.tagName&&(s.push(e),a.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(n)>=0){const n=e.parentNode,s=t.split(o),a=s.length-1;for(let t=0;t<a;t++){let i,o=s[t];if(""===o)i=l();else{const e=d.exec(o);null!==e&&r(e[2],"$lit$")&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(o)}n.insertBefore(i,e),this.parts.push({type:"node",index:++h})}""===s[a]?(n.insertBefore(l(),e),i.push(e)):e.data=s[a],u+=a}}else if(8===e.nodeType)if(e.data===n){const t=e.parentNode;null!==e.previousSibling&&h!==c||(h++,t.insertBefore(l(),e)),c=h,this.parts.push({type:"node",index:h}),null===e.nextSibling?e.data="":(i.push(e),h--),u++}else{let t=-1;for(;-1!==(t=e.data.indexOf(n,t+1));)this.parts.push({type:"node",index:-1}),u++}}else a.currentNode=s.pop()}for(const e of i)e.parentNode.removeChild(e)}}const r=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},c=e=>-1!==e.index,l=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(e,t){const{element:{content:i},parts:n}=e,s=document.createTreeWalker(i,133,null,!1);let o=p(n),a=n[o],r=-1,c=0;const l=[];let d=null;for(;s.nextNode();){r++;const e=s.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(l.push(e),null===d&&(d=e)),null!==d&&c++;void 0!==a&&a.index===r;)a.index=null!==d?-1:a.index-c,o=p(n,o),a=n[o]}l.forEach(e=>e.parentNode.removeChild(e))}const u=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},p=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(c(t))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const g=new WeakMap,m=e=>"function"==typeof e&&g.has(e),f={},v={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class b{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],n=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let o,a=0,r=0,l=s.nextNode();for(;a<n.length;)if(o=n[a],c(o)){for(;r<o.index;)r++,"TEMPLATE"===l.nodeName&&(i.push(l),s.currentNode=l.content),null===(l=s.nextNode())&&(s.currentNode=i.pop(),l=s.nextNode());if("node"===o.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));a++}else this.__parts.push(void 0),a++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),_=` ${n} `;class w{constructor(e,t,i,n){this.strings=e,this.values=t,this.type=i,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let o=0;o<e;o++){const e=this.strings[o],a=e.lastIndexOf("\x3c!--");i=(a>-1||i)&&-1===e.indexOf("--\x3e",a+1);const r=d.exec(e);t+=null===r?e+(i?_:s):e.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+n}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==y&&(t=y.createHTML(t)),e.innerHTML=t,e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const x=e=>null===e||!("object"==typeof e||"function"==typeof e),$=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class S{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new k(this)}_getValue(){const e=this.strings,t=e.length-1,i=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=i[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!$(e))return e}let n="";for(let s=0;s<t;s++){n+=e[s];const t=i[s];if(void 0!==t){const e=t.value;if(x(e)||!$(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class k{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===f||x(e)&&e===this.value||(this.value=e,m(e)||(this.committer.dirty=!0))}commit(){for(;m(this.value);){const e=this.value;this.value=f,e(this)}this.value!==f&&this.committer.commit()}}class C{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(l()),this.endNode=e.appendChild(l())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=l()),e.__insert(this.endNode=l())}insertAfterPart(e){e.__insert(this.startNode=l()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=f,e(this)}const e=this.__pendingValue;e!==f&&(x(e)?e!==this.value&&this.__commitText(e):e instanceof w?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):$(e)?this.__commitIterable(e):e===v?(this.value=v,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof b&&this.value.template===t)this.value.update(e.values);else{const i=new b(t,e.processor,this.options),n=i._clone();i.update(e.values),this.__commitNode(n),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,n=0;for(const s of e)i=t[n],void 0===i&&(i=new C(this.options),t.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(t[n-1])),i.setValue(s),i.commit(),n++;n<t.length&&(t.length=n,this.clear(i&&i.endNode))}clear(e=this.startNode){i(this.startNode.parentNode,e.nextSibling,this.endNode)}}class A{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=f,e(this)}if(this.__pendingValue===f)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=f}}class N extends S{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends k{}let E=!1;(()=>{try{const e={get capture(){return E=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class P{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=f,e(this)}if(this.__pendingValue===f)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=O(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=f}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const O=e=>e&&(E?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function M(e){let t=j.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},j.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const s=e.strings.join(n);return i=t.keyString.get(s),void 0===i&&(i=new a(e,e.getTemplateElement()),t.keyString.set(s,i)),t.stringsArray.set(e.strings,i),i}const j=new Map,D=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const V=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,i,n){const s=t[0];if("."===s){return new N(e,t.slice(1),i).parts}if("@"===s)return[new P(e,t.slice(1),n.eventContext)];if("?"===s)return[new A(e,t.slice(1),i)];return new S(e,t,i).parts}handleTextExpression(e){return new C(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const U=(e,...t)=>new w(e,t,"html",V)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,H=(e,t)=>`${e}--${t}`;let Y=!0;void 0===window.ShadyCSS?Y=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Y=!1);const I=e=>t=>{const i=H(t.type,e);let s=j.get(i);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},j.set(i,s));let o=s.stringsArray.get(t.strings);if(void 0!==o)return o;const r=t.strings.join(n);if(o=s.keyString.get(r),void 0===o){const i=t.getTemplateElement();Y&&window.ShadyCSS.prepareTemplateDom(i,e),o=new a(t,i),s.keyString.set(r,o)}return s.stringsArray.set(t.strings,o),o},R=["html","svg"],z=new Set,L=(e,t,i)=>{z.add(e);const n=i?i.element:document.createElement("template"),s=t.querySelectorAll("style"),{length:o}=s;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(n,e);const a=document.createElement("style");for(let e=0;e<o;e++){const t=s[e];t.parentNode.removeChild(t),a.textContent+=t.textContent}(e=>{R.forEach(t=>{const i=j.get(H(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),h(e,i)})})})(e);const r=n.content;i?function(e,t,i=null){const{element:{content:n},parts:s}=e;if(null==i)return void n.appendChild(t);const o=document.createTreeWalker(n,133,null,!1);let a=p(s),r=0,c=-1;for(;o.nextNode();){c++;for(o.currentNode===i&&(r=u(t),i.parentNode.insertBefore(t,i));-1!==a&&s[a].index===c;){if(r>0){for(;-1!==a;)s[a].index+=r,a=p(s,a);return}a=p(s,a)}}}(i,a,r.firstChild):r.insertBefore(a,r.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const c=r.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(i){r.insertBefore(a,r.firstChild);const e=new Set;e.add(a),h(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const B={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},F=(e,t)=>t!==e&&(t==t||e==e),q={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:F};class W extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const n=this._attributeNameForProperty(i,t);void 0!==n&&(this._attributeToPropertyMap.set(n,i),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=q){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){const s=this[e];this[t]=n,this.requestUpdateInternal(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||q}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=F){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,n=t.converter||B,s="function"==typeof n?n:n.fromAttribute;return s?s(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,n=t.converter;return(n&&n.toAttribute||B.toAttribute)(e,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=q){const n=this.constructor,s=n._attributeNameForProperty(e,i);if(void 0!==s){const e=n._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(s):this.setAttribute(s,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,n=i._attributeToPropertyMap.get(e);if(void 0!==n){const e=i.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,i){let n=!0;if(void 0!==e){const s=this.constructor;i=i||s.getPropertyOptions(e),s._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}W.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const J=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:n}=t;return{kind:i,elements:n,finisher(t){window.customElements.define(e,t)}}})(e,t),Z=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function X(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):Z(e,t)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const G=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol();class Q{constructor(e,t){if(t!==K)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(G?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ee=(e,...t)=>{const i=t.reduce((t,i,n)=>t+(e=>{if(e instanceof Q)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[n+1],e[0]);return new Q(i,K)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const te={};class ie extends W{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,i)=>e.reduceRight((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e),i),i=t(e,new Set),n=[];i.forEach(e=>n.unshift(e)),this._styles=n}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!G){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new Q(String(t),K)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?G?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==te&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return te}}ie.finalized=!0,ie.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const s=n.scopeName,o=D.has(t),a=Y&&11===t.nodeType&&!!t.host,r=a&&!z.has(s),c=r?document.createDocumentFragment():t;if(((e,t,n)=>{let s=D.get(t);void 0===s&&(i(t,t.firstChild),D.set(t,s=new C(Object.assign({templateFactory:M},n))),s.appendInto(t)),s.setValue(e),s.commit()})(e,c,Object.assign({templateFactory:I(s)},n)),r){const e=D.get(c);D.delete(c);const n=e.value instanceof b?e.value.template:void 0;L(s,c,n),i(t,t.firstChild),t.appendChild(c),D.set(t,e)}!o&&a&&window.ShadyCSS.styleElement(t.host)};var ne=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,se="[^\\s]+",oe=/\[([^]*?)\]/gm;function ae(e,t){for(var i=[],n=0,s=e.length;n<s;n++)i.push(e[n].substr(0,t));return i}var re=function(e){return function(t,i){var n=i[e].map((function(e){return e.toLowerCase()})).indexOf(t.toLowerCase());return n>-1?n:null}};function ce(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];for(var n=0,s=t;n<s.length;n++){var o=s[n];for(var a in o)e[a]=o[a]}return e}var le=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],de=["January","February","March","April","May","June","July","August","September","October","November","December"],he=ae(de,3),ue={dayNamesShort:ae(le,3),dayNames:le,monthNamesShort:he,monthNames:de,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10?1:0)*e%10]}},pe=ce({},ue),ge=function(e,t){for(void 0===t&&(t=2),e=String(e);e.length<t;)e="0"+e;return e},me={D:function(e){return String(e.getDate())},DD:function(e){return ge(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return String(e.getDay())},dd:function(e){return ge(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return String(e.getMonth()+1)},MM:function(e){return ge(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return ge(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return ge(e.getFullYear(),4)},h:function(e){return String(e.getHours()%12||12)},hh:function(e){return ge(e.getHours()%12||12)},H:function(e){return String(e.getHours())},HH:function(e){return ge(e.getHours())},m:function(e){return String(e.getMinutes())},mm:function(e){return ge(e.getMinutes())},s:function(e){return String(e.getSeconds())},ss:function(e){return ge(e.getSeconds())},S:function(e){return String(Math.round(e.getMilliseconds()/100))},SS:function(e){return ge(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return ge(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+ge(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)},Z:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+ge(Math.floor(Math.abs(t)/60),2)+":"+ge(Math.abs(t)%60,2)}},fe=function(e){return+e-1},ve=[null,"[1-9]\\d?"],be=[null,se],ye=["isPm",se,function(e,t){var i=e.toLowerCase();return i===t.amPm[0]?0:i===t.amPm[1]?1:null}],_e=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(e){var t=(e+"").match(/([+-]|\d\d)/gi);if(t){var i=60*+t[1]+parseInt(t[2],10);return"+"===t[0]?i:-i}return 0}],we=(re("monthNamesShort"),re("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var xe=function(e,t,i){if(void 0===t&&(t=we.default),void 0===i&&(i={}),"number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date pass to format");var n=[];t=(t=we[t]||t).replace(oe,(function(e,t){return n.push(t),"@@@"}));var s=ce(ce({},pe),i);return(t=t.replace(ne,(function(t){return me[t](e,s)}))).replace(/@@@/g,(function(){return n.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}})(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}();function $e(e){return e.substr(0,e.indexOf("."))}var Se=["closed","locked","off"],ke=function(e,t,i,n){n=n||{},i=null==i?{}:i;var s=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return s.detail=i,e.dispatchEvent(s),s},Ce={alert:"hass:alert",automation:"hass:playlist-play",calendar:"hass:calendar",camera:"hass:video",climate:"hass:thermostat",configurator:"hass:settings",conversation:"hass:text-to-speech",device_tracker:"hass:account",fan:"hass:fan",group:"hass:google-circles-communities",history_graph:"hass:chart-line",homeassistant:"hass:home-assistant",homekit:"hass:home-automation",image_processing:"hass:image-filter-frames",input_boolean:"hass:drawing",input_datetime:"hass:calendar-clock",input_number:"hass:ray-vertex",input_select:"hass:format-list-bulleted",input_text:"hass:textbox",light:"hass:lightbulb",mailbox:"hass:mailbox",notify:"hass:comment-alert",person:"hass:account",plant:"hass:flower",proximity:"hass:apple-safari",remote:"hass:remote",scene:"hass:google-pages",script:"hass:file-document",sensor:"hass:eye",simple_alarm:"hass:bell",sun:"hass:white-balance-sunny",switch:"hass:flash",timer:"hass:timer",updater:"hass:cloud-upload",vacuum:"hass:robot-vacuum",water_heater:"hass:thermometer",weblink:"hass:open-in-new"};var Ae=function(e){ke(window,"haptic",e)},Ne=function(e,t){return function(e,t,i){void 0===i&&(i=!0);var n,s=$e(t),o="group"===s?"homeassistant":s;switch(s){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}return e.callService(o,n,{entity_id:t})}(e,t,Se.includes(e.states[t].state))},Te=function(e,t,i,n){var s;if("double_tap"===n&&i.double_tap_action?s=i.double_tap_action:"hold"===n&&i.hold_action?s=i.hold_action:"tap"===n&&i.tap_action&&(s=i.tap_action),s||(s={action:"more-info"}),!s.confirmation||s.confirmation.exemptions&&s.confirmation.exemptions.some((function(e){return e.user===t.user.id}))||(Ae("warning"),confirm(s.confirmation.text||"Are you sure you want to "+s.action+"?")))switch(s.action){case"more-info":(i.entity||i.camera_image)&&ke(e,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":s.navigation_path&&function(e,t,i){void 0===i&&(i=!1),i?history.replaceState(null,"",t):history.pushState(null,"",t),ke(window,"location-changed",{replace:i})}(0,s.navigation_path);break;case"url":s.url_path&&window.open(s.url_path);break;case"toggle":i.entity&&(Ne(t,i.entity),Ae("success"));break;case"call-service":if(!s.service)return void Ae("failure");var o=s.service.split(".",2);t.callService(o[0],o[1],s.service_data),Ae("success")}};function Ee(e,t,i){const n=e[t],s=e.slice();return s.splice(t,1),s.splice(i,0,n),s}let Pe=class extends ie{setConfig(e){this._config=Object.assign({},e),e.entity||(this._config.entity=""),ke(this,"config-changed",{config:this._config});const t={icon:"format-list-numbered",name:"Bar",secondary:"Bar settings.",show:!1},i={icon:"numeric",name:"Value",secondary:"Value settings.",show:!1},n={icon:"card-bulleted",name:"Card",secondary:"Card settings.",show:!1},s={icon:"tooltip-check-outline",name:"Display",secondary:"Display or not informations.",show:!1},o={icon:"exclamation-thick",name:"Severity",secondary:"Define bar colors based on value.",show:!1},a={icon:"animation",name:"Entity",secondary:"Define entity settings.",show:!1};this._options||(this._options={entity:{icon:"tune",name:"Entity",secondary:"Manage card entity.",show:!0,options:{entity:a}},appearance:{icon:"palette",name:"Appearance",secondary:"Customize the global name, icon, etc.",show:!1,options:{positions:s,bar:t,value:i,card:n,severity:o}}})}render(){return U`
      ${this._createEntityElement()} ${this._createAppearanceElement()}
    `}_createActionsElement(){const e=this._options.entity.options.actions;return U`
      <div class="sub-category" style="opacity: 0.5;">
        <div>
          <div class="row">
            <ha-icon .icon=${"mdi:"+e.icon}></ha-icon>
            <div class="title">${e.name}</div>
          </div>
          <div class="secondary">${e.secondary}</div>
        </div>
      </div>
    `}_createEntityElement(){if(!this.hass||!this._config)return U`
        <div class="card-config"></div>
      `;const e=this._options.entity;return U`
      <div class="card-config">
        <div class="option" @click=${this._toggleThing} .options=${e} .optionsTarget=${this._options}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+e.icon}></ha-icon>
            <div class="title">${e.name}</div>
            <ha-icon .icon=${e.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${e.secondary}</div>
        </div>
        ${e.show?U`
              <div class="card-background" style="max-height: 400px; overflow: auto;">
                <div class="sub-category" style="display: flex; flex-direction: row; align-items: center;">
                  <div style="display: flex; align-items: center; flex-direction: column;">
                    <div
                      style="font-size: 10px; margin-bottom: -8px; opacity: 0.5;"
                      @click=${this._toggleThing}
                      .options=${e.options.entity}
                      .optionsTarget=${e.entity}
                      .index=${0}
                    ></div>
                  </div>
                  <div class="value" style="flex-grow: 1;">
                    <ha-entity-picker
                      label="Entity"
                      allow-custom-entity
                      .hass=${this.hass}
                      @value-changed=${this._valueChanged}
                      .value=${this._config.entity}
                      editable
                      .configAttribute=${"entity"}
                      .configObject=${this._config}
                    >
                    </ha-entity-picker>
                    <paper-input
                      label="Attribute"
                      @value-changed=${this._valueChanged}
                      .value="${this._config.attribute?this._config.attribute:""}"
                      editable
                      .configAttribute=${"attribute"}
                      .configObject=${this._config}
                    ></paper-input>
                    <paper-input
                      label="Object key"
                      @value-changed=${this._valueChanged}
                      .value="${this._config.object_key?this._config.object_key:""}"
                      editable
                      .configAttribute=${"object_key"}
                      .configObject=${this._config}
                    ></paper-input>
                    <paper-input
                      label="Object value"
                      @value-changed=${this._valueChanged}
                      .value="${this._config.object_value?this._config.object_value:""}"
                      editable
                      .configAttribute=${"object_value"}
                      .configObject=${this._config}
                    ></paper-input>
                    <paper-input
                      class="value-number"
                      type="number"
                      label="From index"
                      .value="${this._config.index_from?this._config.index_from:""}"
                      editable
                      .configAttribute=${"index_from"}
                      .configObject=${this._config}
                      @value-changed=${this._valueChanged}
                    ></paper-input>
                    <paper-input
                      class="value-number"
                      type="number"
                      label="To index"
                      .value="${this._config.index_to?this._config.index_to:""}"
                      editable
                      .configAttribute=${"index_to"}
                      .configObject=${this._config}
                      @value-changed=${this._valueChanged}
                    ></paper-input>
                  </div>
                </div>
              </div>
            `:""}
      </div>
    `}_createAppearanceElement(){if(!this.hass)return U``;const e=this._options.appearance;return U`
        <div class="option" @click=${this._toggleThing} .options=${e} .optionsTarget=${this._options}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+e.icon}></ha-icon>
            <div class="title">${e.name}</div>
            <ha-icon
              .icon=${e.show?"mdi:chevron-up":"mdi:chevron-down"}
              style="margin-left: auto;"
            ></ha-icon>
          </div>
          <div class="secondary">${e.secondary}</div>
        </div>
        ${e.show?U`
                <div class="card-background">
                  ${this._createCardElement()} ${this._createBarElement()} ${this._createValueElement()}
                  ${this._createDisplayElement()} ${this._createSeverityElement()}
                </div>
              `:""}
      </div>`}_createBarElement(){const e=this._options.appearance.options.bar,t=this._config;return U`
      <div class="category" id="bar">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${e}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${"mdi:"+e.icon}></ha-icon>
            <div class="title">${e.name}</div>
            <ha-icon .icon=${e.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${e.secondary}</div>
        </div>
        ${e.show?U`
              <div class="value">
                <div>
                  <paper-dropdown-menu
                    label="Direction"
                    @selected-item-changed=${this._valueChanged}
                    .configObject=${t}
                    .configAttribute=${"direction"}
                    .ignoreNull=${!0}
                  >
                    <paper-listbox
                      slot="dropdown-content"
                      attr-for-selected="item-name"
                      selected="${t.direction?t.direction:null}"
                    >
                      <paper-item item-name="right">right</paper-item>
                      <paper-item item-name="up">up</paper-item>
                    </paper-listbox>
                  </paper-dropdown-menu>
                  ${t.direction?U`
                        <ha-icon
                          class="ha-icon-large"
                          icon="mdi:close"
                          @click=${this._valueChanged}
                          .value=${""}
                          .configAttribute=${"direction"}
                          .configObject=${t}
                        ></ha-icon>
                      `:""}
                </div>
                <ha-icon-picker
                  label="Icon"
                  .value="${t.icon?t.icon:""}"
                  editable
                  .configAttribute=${"icon"}
                  .configObject=${t}
                  @value-changed=${this._valueChanged}
                ></ha-icon-picker>
                <paper-input
                  label="Height"
                  .value="${t.height?t.height:""}"
                  editable
                  .configAttribute=${"height"}
                  .configObject=${t}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  label="Color"
                  .value="${t.color?t.color:""}"
                  editable
                  .configAttribute=${"color"}
                  .configObject=${t}
                  @value-changed=${this._valueChanged}
                ></paper-input>
              </div>
            `:""}
      </div>
    `}_createSeverityElement(){const e=this._options.appearance.options.severity;this._config;return U`
      <div class="category" id="bar">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${e}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${"mdi:"+e.icon}></ha-icon>
            <div class="title">${e.name}</div>
            <ha-icon .icon=${e.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${e.secondary}</div>
        </div>
        ${e.show?U`
              <div class="card-background" style="overflow: auto; max-height: 420px;">
                ${this._createSeverityValues()}
                <div class="sub-category" style="display: flex; flex-direction: column; align-items: flex-end;">
                  <ha-icon icon="mdi:plus" @click=${this._addSeverity}></ha-icon>
                </div>
              </div>
            `:""}
      </div>
    `}_createSeverityValues(){const e=this._config,t=[];if(!e.severity)return t;for(const i of e.severity){const n=e.severity.indexOf(i);t.push(U`
        <div class="sub-category" style="display: flex; flex-direction: row; align-items: center;">
          <div class="value">
            <div style="display:flex;">
              <paper-input
                label="From"
                type="number"
                .value="${i.from||0===i.from?i.from:""}"
                editable
                .severityAttribute=${"from"}
                .severityIndex=${n}
                @value-changed=${this._updateSeverity}
              ></paper-input>
              <paper-input
                label="To"
                type="number"
                .value="${i.to?i.to:""}"
                editable
                .severityAttribute=${"to"}
                .severityIndex=${n}
                @value-changed=${this._updateSeverity}
              ></paper-input>
            </div>
            <div style="display:flex;">
              <paper-input
                label="Color"
                .value="${i.color?i.color:""}"
                editable
                .severityAttribute=${"color"}
                .severityIndex=${n}
                @value-changed=${this._updateSeverity}
              ></paper-input>
            </div>
            Hide bar if conditions are met&nbsp;
            ${i.hide?U`
                  <ha-switch
                    checked
                    .severityAttribute=${"hide"}
                    .severityIndex=${n}
                    .value=${!i.hide}
                    @change=${this._updateSeverity}
                  ></ha-switch>
                `:U`
                  <ha-switch
                    unchecked
                    .severityAttribute=${"hide"}
                    .severityIndex=${n}
                    .value=${!i.hide}
                    @change=${this._updateSeverity}
                  ></ha-switch>
                `}
          </div>
          <div style="display: flex;">
            ${0!==n?U`
                  <ha-icon
                    class="ha-icon-large"
                    icon="mdi:arrow-up"
                    @click=${this._moveSeverity}
                    .configDirection=${"up"}
                    .severityIndex=${n}
                  ></ha-icon>
                `:U`
                  <ha-icon icon="mdi:arrow-up" style="opacity: 25%;" class="ha-icon-large"></ha-icon>
                `}
            ${n!==e.severity.length-1?U`
                  <ha-icon
                    class="ha-icon-large"
                    icon="mdi:arrow-down"
                    @click=${this._moveSeverity}
                    .configDirection=${"down"}
                    .severityIndex=${n}
                  ></ha-icon>
                `:U`
                  <ha-icon icon="mdi:arrow-down" style="opacity: 25%;" class="ha-icon-large"></ha-icon>
                `}
            <ha-icon
              class="ha-icon-large"
              icon="mdi:close"
              @click=${this._removeSeverity}
              .severityIndex=${n}
            ></ha-icon>
          </div>
        </div>
      `)}return t}_createCardElement(){if(!this.hass)return U``;const e=this._config,t=this._options.appearance.options.card;return U`
      <div class="category" id="card">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${t}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${"mdi:"+t.icon}></ha-icon>
            <div class="title">${t.name}</div>
            <ha-icon .icon=${t.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${t.secondary}</div>
        </div>
        ${t.show?U`
              <div class="value-container">
                <paper-input
                  editable
                  label="Header Title"
                  .value="${e.title?e.title:""}"
                  .configObject=${e}
                  .configAttribute=${"title"}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <div>
                  Card Background&nbsp;
                  ${U`
                    <ha-switch
                      .checked=${!(!1===e.background)}
                      .configAttribute=${"background"}
                      .configObject=${e}
                      .value=${!1===e.background}
                      .ignoreNull=${!1}
                      @change=${this._valueChanged}
                    ></ha-switch>
                  `}
                </div>
                <div>
                  Color Bar Background&nbsp;
                  ${U`
                    <ha-switch
                      .checked=${!(!1===e.color_background)}
                      .configAttribute=${"color_background"}
                      .configObject=${e}
                      .value=${!1===e.color_background}
                      .ignoreNull=${!1}
                      @change=${this._valueChanged}
                    ></ha-switch>
                  `}
                </div>
              </div>
            `:""}
      </div>
    `}_createDisplayValues(){const e=this._config;e.positions=Object.assign({},e.positions);const t=[],i=Object.keys({icon:"on",name:"on",value:"on"});for(const n of i)t.push(U`
        <div class="value">
          <paper-dropdown-menu
            label="${n}"
            @value-changed=${this._valueChanged}
            .configAttribute=${n}
            .configObject=${e.positions}
            .ignoreNull=${!0}
          >
            <paper-listbox
              slot="dropdown-content"
              attr-for-selected="item-name"
              .selected=${e.positions[n]}
            >
              <paper-item item-name="on">on</paper-item>
              <paper-item item-name="off">off</paper-item>
            </paper-listbox>
          </paper-dropdown-menu>
          <ha-icon
            class="ha-icon-large"
            icon="mdi:close"
            @click=${this._valueChanged}
            .value=${""}
            .configAttribute=${n}
            .configObject=${e.positions}
          ></ha-icon>
        </div>
      `);return t}_createDisplayElement(){if(!this.hass)return U``;const e=this._options.appearance.options.positions;return U`
      <div class="category">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${e}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${"mdi:"+e.icon}></ha-icon>
            <div class="title">${e.name}</div>
            <ha-icon .icon=${e.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${e.secondary}</div>
        </div>
        ${e.show?U`
              ${this._createDisplayValues()}
            `:""}
      </div>
    `}_createValueElement(){if(!this.hass)return U``;const e=this._options.appearance.options.value,t=this._config;return U`
      <div class="category" id="value">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${e}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${"mdi:"+e.icon}></ha-icon>
            <div class="title">${e.name}</div>
            <ha-icon .icon=${e.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${e.secondary}</div>
        </div>
        ${e.show?U`
              <div class="value">
                Limit Values to min/max&nbsp;
                ${t.limit_value?U`
                      <ha-switch
                        checked
                        .configAttribute=${"limit_value"}
                        .configObject=${t}
                        .value=${!t.limit_value}
                        @change=${this._valueChanged}
                      ></ha-switch>
                    `:U`
                      <ha-switch
                        unchecked
                        .configObject=${t}
                        .configAttribute=${"limit_value"}
                        .value=${!t.limit_value}
                        @change=${this._valueChanged}
                      ></ha-switch>
                    `}
              </div>
              <div class="value">
                Display Complementary (max - state)&nbsp;
                ${t.complementary?U`
                      <ha-switch
                        checked
                        .configAttribute=${"complementary"}
                        .configObject=${t}
                        .value=${!t.complementary}
                        @change=${this._valueChanged}
                      ></ha-switch>
                    `:U`
                      <ha-switch
                        unchecked
                        .configObject=${t}
                        .configAttribute=${"complementary"}
                        .value=${!t.complementary}
                        @change=${this._valueChanged}
                      ></ha-switch>
                    `}
                <paper-input
                  class="value-number"
                  label="Decimal"
                  type="number"
                  .value="${t.decimal?t.decimal:""}"
                  editable
                  .configAttribute=${"decimal"}
                  .configObject=${t}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  class="value-number"
                  type="number"
                  label="Min"
                  .value="${t.min?t.min:""}"
                  editable
                  .configAttribute=${"min"}
                  .configObject=${t}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  class="value-number"
                  type="number"
                  label="Max"
                  .value="${t.max?t.max:""}"
                  editable
                  .configAttribute=${"max"}
                  .configObject=${t}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  label="Unit of Measurement"
                  .value="${t.unit_of_measurement?t.unit_of_measurement:""}"
                  editable
                  .configAttribute=${"unit_of_measurement"}
                  .configObject=${t}
                  @value-changed=${this._valueChanged}
                ></paper-input>
              </div>
            `:""}
      </div>
    `}_toggleThing(e){const t=e.target.options,i=!t.show;if(e.target.optionsTarget)if(Array.isArray(e.target.optionsTarget))for(const t of e.target.optionsTarget)t.show=!1;else for(const[t]of Object.entries(e.target.optionsTarget))e.target.optionsTarget[t].show=!1;t.show=i,this._toggle=!this._toggle}_addSeverity(e){if(!this._config||!this.hass)return;e.target;let t=this._config.severity;t||(t=[]);const i=t.slice();i.push({from:"",to:"",color:""}),this._config.severity=i,ke(this,"config-changed",{config:this._config})}_moveSeverity(e){if(!this._config||!this.hass)return;const t=e.target;let i=this._config.severity.slice();"up"==t.configDirection?i=Ee(i,t.severityIndex,t.severityIndex-1):"down"==t.configDirection&&(i=Ee(i,t.severityIndex,t.severityIndex+1)),this._config.severity=i,ke(this,"config-changed",{config:this._config})}_removeSeverity(e){if(!this._config||!this.hass)return;const t=e.target,i=this._config.severity.slice(),n=[];let s=0;for(const e of i)t.severityIndex!==s&&n.push(i[s]),s++;0===n.length?delete this._config.severity:this._config.severity=n,ke(this,"config-changed",{config:this._config})}_updateSeverity(e){const t=e.target,i=this._config.severity,n=[];for(const e in i)if(t.severityIndex==e){const s=Object.assign({},i[e]),o={[t.severityAttribute]:t.value},a=Object.assign(s,o);""==t.value&&delete a[t.severityAttribute],n.push(a)}else n.push(i[e]);this._config.severity=n,ke(this,"config-changed",{config:this._config})}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.target;if(t.configObject[t.configAttribute]!=t.value){if(t.configAdd&&""!==t.value&&(t.configObject=Object.assign(t.configObject,{[t.configAdd]:{[t.configAttribute]:t.value}})),t.configAttribute&&t.configObject&&!t.configAdd)if(!1===t.value)1==t.ignoreNull?delete t.configObject[t.configAttribute]:t.configObject[t.configAttribute]=t.value;else if(""==t.value){if(1==t.ignoreNull)return;delete t.configObject[t.configAttribute]}else console.log(t.configObject),t.configObject[t.configAttribute]=t.value;ke(this,"config-changed",{config:this._config})}}static get styles(){return ee`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .options {
        background: var(--primary-background-color);
        border-radius: var(--ha-card-border-radius);
        cursor: pointer;
        padding: 8px;
      }
      .sub-category {
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
        margin-top: 14px;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .value {
        padding: 0px 8px;
      }
      .value-container {
        padding: 0px 8px;
        transition: all 0.5s ease-in-out;
      }
      .value-container:target {
        height: 50px;
      }
      .value-number {
        width: 100px;
      }
      ha-fab {
        margin: 8px;
      }
      ha-switch {
        padding: 16px 0;
      }
      .card-background {
        background: var(--paper-card-background-color);
        border-radius: var(--ha-card-border-radius);
        padding: 8px;
      }
      .category {
        background: #0000;
      }
      .ha-icon-large {
        cursor: pointer;
        margin: 0px 4px;
      }
    `}};e([X()],Pe.prototype,"hass",void 0),e([X()],Pe.prototype,"_config",void 0),e([X()],Pe.prototype,"_toggle",void 0),Pe=e([J("list2bars-card-editor")],Pe),window.customCards=window.customCards||[],window.customCards.push({type:"list2bars-card",name:"List2Bars Card",preview:!1,description:"A customizable list to bars card."});const Oe="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;class Me extends HTMLElement{constructor(){super(),this.holdTime=500,this.ripple=document.createElement("mwc-ripple"),this.timer=void 0,this.held=!1,this.cooldownStart=!1,this.cooldownEnd=!1}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Oe?"100px":"50px",height:Oe?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(e=>{document.addEventListener(e,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(e,t){if(e.actionHandler)return;e.actionHandler=!0,e.addEventListener("contextmenu",e=>{const t=e||window.event;t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0,t.returnValue=!1});const i=e=>{if(this.cooldownStart)return;let t,i;this.held=!1,e.touches?(t=e.touches[0].pageX,i=e.touches[0].pageY):(t=e.pageX,i=e.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(t,i),this.held=!0},this.holdTime),this.cooldownStart=!0,window.setTimeout(()=>this.cooldownStart=!1,100)},n=i=>{this.cooldownEnd||["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?ke(e,"action",{action:"hold"}):t.hasDoubleTap?1===i.detail||"keyup"===i.type?this.dblClickTimeout=window.setTimeout(()=>{ke(e,"action",{action:"tap"})},250):(clearTimeout(this.dblClickTimeout),ke(e,"action",{action:"double_tap"})):ke(e,"action",{action:"tap"}),this.cooldownEnd=!0,window.setTimeout(()=>this.cooldownEnd=!1,100))};e.addEventListener("touchstart",i,{passive:!0}),e.addEventListener("touchend",n),e.addEventListener("touchcancel",n),e.addEventListener("keyup",e=>{if(13===e.keyCode)return n(e)});/iPhone OS 13_/.test(window.navigator.userAgent)||(e.addEventListener("mousedown",i,{passive:!0}),e.addEventListener("click",n))}startAnimation(e,t){Object.assign(this.style,{left:e+"px",top:t+"px",display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-list2bars",Me);const je=(e,t)=>{const i=(()=>{const e=document.body;if(e.querySelector("action-handler-list2bars"))return e.querySelector("action-handler-list2bars");const t=document.createElement("action-handler-list2bars");return e.appendChild(t),t})();i&&i.bind(e,t)},De=(Ve=(e={})=>t=>{je(t.committer.element,e)},(...e)=>{const t=Ve(...e);return g.set(t,!0),t});var Ve;var Ue={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",entity_not_available:"Entity not available"},He={common:Ue},Ye={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},Ie={common:Ye},Re={en:Object.freeze({__proto__:null,common:Ue,default:He}),nb:Object.freeze({__proto__:null,common:Ye,default:Ie})};function ze(e,t="",i=""){const n=e.split(".")[0],s=e.split(".")[1],o=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");var a;try{a=Re[o][n][s]}catch(e){a=Re.en[n][s]}return void 0===a&&(a=Re.en[n][s]),""!==t&&""!==i&&(a=a.replace(t,i)),a}const Le=U`
  <style>
    :host {
      display: flex;
      flex-direction: column;
    }
    ha-card {
      flex-direction: column;
      flex: 1;
      padding: 16px 0;
      position: relative;
      overflow: hidden;
    }
    ha-card > div {
      padding: 0px 16px 8px 16px;
    }
    ha-card > div:last-child {
      padding-bottom: 0;
    }
    ha-card[group] {
      box-shadow: none;
      padding: 0;
    }
    ha-card[group] > div {
      padding-left: 0;
      padding-right: 0;
    }
    ha-card[hover] {
      cursor: pointer;
    }
    .flex {
      display: flex;
      display: -webkit-flex;
      min-width: 0;
    }
    .header {
      justify-content: space-between;
    }
    .name {
      align-items: center;
      min-width: 0;
      letter-spacing: var(--mcg-title-letter-spacing, normal);
    }
    .name > span {
      font-size: 1.4em;
      font-weight: var(--mcg-title-font-weight, 500);
      max-height: 1.6em;
      min-height: 1.6em;
      opacity: 0.85;
    }
    .ellipsis {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .states {
      align-items: flex-start;
      font-weight: 300;
      justify-content: space-between;
      flex-wrap: nowrap;
    }
    .state {
      position: relative;
      display: flex;
      flex-wrap: nowrap;
      max-width: 100%;
      min-width: 0;
    }
    .state__value {
      display: inline-block;
      font-size: 2.4em;
      margin-right: 0.25rem;
      line-height: 1.2em;
    }
    .state__uom {
      flex: 1;
      align-self: flex-end;
      display: inline-block;
      font-size: 1.4em;
      font-weight: 400;
      line-height: 1.6em;
      margin-top: 0.1em;
      opacity: 0.6;
      vertical-align: bottom;
    }
    .state__name {
      font-size: 0.95rem;
      font-weight: 500;
      bottom: -1.1rem;
      left: 0;
      opacity: 0.75;
      position: absolute;
      white-space: nowrap;
      animation: fade 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    .warning {
      display: block;
      color: black;
      background-color: #fce588;
      padding: 8px;
    }
    #states {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      margin-top: 8px;
    }
    #states > * {
      margin-bottom: 4px;
    }
    list2bars-card-card {
      display: flex;
      flex-basis: 100%;
      flex-direction: row;
      margin-right: 2px;
    }
    list2bars-card-card:hover {
      opacity: 0.5;
      cursor: pointer;
    }
    list2bars-card-background {
      cursor: pointer;
      flex-grow: 1;
      position: relative;
    }
    list2bars-card-currentbar,
    list2bars-card-backgroundbar,
    list2bars-card-contentbar {
      position: absolute;
      height: 100%;
      width: 100%;
    }
    list2bars-card-contentbar {
      align-items: center;
      color: var(--primary-text-color);
      display: flex;
      justify-content: flex-start;
      margin-left: 1px;
      margin-right: 1px;
    }
    .contentbar-direction-right {
      flex-direction: row;
    }
    .contentbar-direction-up {
      flex-direction: column;
    }
    list2bars-card-backgroundbar {
      background: var(--bar-color);
      filter: brightness(0.5);
      opacity: 0.25;
    }
    list2bars-card-currentbar {
      background: linear-gradient(
        to var(--bar-direction),
        var(--bar-color) var(--bar-percent),
        #0000 var(--bar-percent),
        #0000 var(--bar-percent)
      );
    }
    list2bars-card-name {
      align-items: center;
      align-self: center;
      justify-content: center;
      margin: 4px;
      overflow: hidden;
      position: relative;
      text-align: left;
      text-overflow: ellipsis;
    }
    list2bars-card-value {
      align-self: center;
      position: relative;
    }
    list2bars-card-value {
      white-space: nowrap;
      margin: 4px;
    }
    .value-direction-right {
      margin-left: auto;
    }
  </style>
`;console.info(`%c  LIST2BARS-CARD \n%c  ${ze("common.version")} 1.0.0    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");let Be=class extends ie{static async getConfigElement(){return document.createElement("list2bars-card-editor")}static getStubConfig(){return{}}setConfig(e){if(!e)throw new Error(ze("common.invalid_configuration"));this._config=function e(...t){const i=e=>e&&"object"==typeof e;return t.reduce((t,n)=>(Object.keys(n).forEach(s=>{const o=t[s],a=n[s];Array.isArray(o)&&Array.isArray(a)?t[s]=o.concat(...a):i(o)&&i(a)?t[s]=e(o,a):t[s]=a}),t),{})}({background:!0,color:"var(--list2bars-card-color, var(--primary-color))",color_background:!0,direction:"right",max:100,min:0,positions:{icon:"on",name:"on",value:"on"}},e),this._tooltip={}}getUnitOfMeasurement(){const e=this._config,t=this.hass.states[e.entity];let i;return i=isNaN(Number(t.state))?"":e.unit_of_measurement?e.unit_of_measurement:t.attributes.unit_of_measurement,i}render(){if(!this._config||!this.hass)return U``;let e;const t=this._config,i=this.hass.states[t.entity];if(!i)return U`
        <ha-card>
          <div
            style="display: block;
      color: black;
      background-color: #fce588;
      padding: 8px;"
          >
            ${ze("common.entity_not_available")}: ${t.entity}
          </div>
        </ha-card>
      `;"off"!=t.positions.icon&&(e=t.icon?t.icon:i.attributes.icon?i.attributes.icon:function(e,t){if(e in Ce)return Ce[e];switch(e){case"alarm_control_panel":switch(t){case"armed_home":return"hass:bell-plus";case"armed_night":return"hass:bell-sleep";case"disarmed":return"hass:bell-outline";case"triggered":return"hass:bell-ring";default:return"hass:bell"}case"binary_sensor":return t&&"off"===t?"hass:radiobox-blank":"hass:checkbox-marked-circle";case"cover":return"closed"===t?"hass:window-closed":"hass:window-open";case"lock":return t&&"unlocked"===t?"hass:lock-open":"hass:lock";case"media_player":return t&&"off"!==t&&"idle"!==t?"hass:cast-connected":"hass:cast";case"zwave":switch(t){case"dead":return"hass:emoticon-dead";case"sleeping":return"hass:sleep";case"initializing":return"hass:timer-sand";default:return"hass:z-wave"}default:return console.warn("Unable to find icon for domain "+e+" ("+t+")"),"hass:bookmark"}}($e(t.entity)));const n="up"==t.direction?U`
            <div class="states flex">
              <div class="state">
                ${"on"==t.positions.value?U`
                      <span class="state__value ellipsis"
                        >${this._tooltip.state?this._tooltip.state:i.state}</span
                      >
                      <span class="state__uom ellipsis">${this.getUnitOfMeasurement()}</span>
                    `:null}
                <div class="state__name">
                  <span>${"on"!=t.positions.name?null:this._tooltip.name?this._tooltip.name:null}</span>
                </div>
              </div>
            </div>
          `:"";return U`
      <ha-card style="${!1===t.background?"background: #0000; box-shadow: none;":""}">
        <div
          class="header flex"
          loc="undefined"
          style="font-size: 14px;"
          @action=${this._handleAction}
          .config=${t}
          .actionHandler=${De({})}
        >
          <div class="name flex">
            <span class="ellipsis">${t.title?t.title:null}</span>
          </div>
          <div class="icon">
            <ha-icon icon="${e}"></ha-icon>
          </div>
        </div>

        ${n}

        <div
          id="states"
          class="card-content"
          style="${!1===t.background?"padding: 0px;":""} ${"up"==t.direction?"flex-direction: row":"flex-grow: 0;"}"
        >
          ${this._createBarArray()}
        </div>
      </ha-card>
      ${Le}
    `}_createBarArray(){const e=this._config,t=this.hass.states[e.entity],i=[],n=e.name?e.name:t.attributes.friendly_name;if(e.attribute)if("number"==typeof t.attributes[e.attribute])i.push({name:n,state:t.attributes[e.attribute]});else if(e.object_key&&e.object_key.length>0)for(const n of t.attributes[e.attribute]){const t=n[e.object_value];i.push({name:n[e.object_key],state:t}),isNaN(Number(t))||(e.max=Math.max(t,e.max))}else for(const n in t.attributes[e.attribute]){const s=t.attributes[e.attribute][n];i.push({name:n,state:s}),isNaN(Number(s))||(e.max=Math.max(s,e.max))}else i.push({name:n,state:t.state});let s=e.index_to?Number(e.index_to):i.length;s<0?s+=i.length:s>i.length?s=i.length:0==s&&(s=1);let o=e.index_from?Number(e.index_from)-1:0;if(o<0?o+=i.length+1:o>=s&&(o=s-1),o>=s)return[U`
          <div class="warning" style="margin-bottom: 8px;">
            Nothing to display, check From and To indexes
          </div>
        `];const a=[];for(let t=o;t<s;t++){let n=i[t].state;if(e.severity&&this._computeSeverityVisibility(n))continue;e.limit_value&&(n=Math.min(n,e.max),n=Math.max(n,e.min)),isNaN(Number(n))||(0==e.decimal?n=Number(n).toFixed(0):e.decimal&&(n=Number(n).toFixed(e.decimal)));let s=40;e.height&&(s=Number(e.height));let o="0px 0px 0px 13px",r="right",c="row";"up"==e.direction&&(o="0px",r="top",c="column-reverse");const l=i[t].name,d="right"==e.direction&&"on"==e.positions.name?U`
                <list2bars-card-name>${l}</list2bars-card-name>
              `:null,h="right"==e.direction&&"on"==e.positions.value?U`
                <list2bars-card-value class="value-direction-right"
                  >${e.complementary?e.max-n:n}
                  ${this.getUnitOfMeasurement()}</list2bars-card-value
                >
              `:null,u=this._computeBarColor(n),p=this._computePercent(n);let g;e.color_background&&(g=U`
          <list2bars-card-backgroundbar style="--bar-color: ${u}"></list2bars-card-backgroundbar>
        `),a.push(U`
        <list2bars-card-card
          style="flex-direction: ${c}; align-items: stretch"
          @mouseover=${()=>this.setTooltip(l,n)}
          @mouseout=${()=>this._tooltip={}}
        >
          <list2bars-card-background
            style="margin: ${o}; height: ${s}${"number"==typeof s?"px":""};"
          >
            ${g}
            <list2bars-card-currentbar
              style="--bar-color: ${u}; --bar-percent: ${p}%; --bar-direction: ${r}"
            ></list2bars-card-currentbar>

            <list2bars-card-contentbar
              class="${"up"==e.direction?"contentbar-direction-up":"contentbar-direction-right"}"
            >
              ${d} ${h}
            </list2bars-card-contentbar>
          </list2bars-card-background>
        </list2bars-card-card>
      `)}return a}_computeBarColor(e){const t=this._config;let i;return i=t.severity?this._computeSeverityColor(e):"unavailable"==e?`var(--list2bars-card-disabled-color, ${t.color})`:t.color,i}_computeSeverityColor(e){const t=this._config,i=Number(e),n=t.severity;let s;return isNaN(i)?n.forEach(t=>{e==t.text&&(s=t.color)}):n.forEach(e=>{i>=e.from&&i<=e.to&&(s=e.color)}),null==s&&(s=t.color),s}_computeSeverityVisibility(e){const t=this._config,i=Number(e),n=t.severity;let s=!1;return isNaN(i)?n.forEach(t=>{e==t.text&&(s=t.hide)}):n.forEach(e=>{i>=e.from&&i<=e.to&&(s=e.hide)}),s}_computePercent(e){const t=this._config,i=Number(e);return"unavailable"==e?0:isNaN(i)?100:100*(i-t.min)/(t.max-t.min)}_handleAction(e){this.hass&&e.target.config&&e.detail.action&&Te(this,this.hass,e.target.config,e.detail.action)}setTooltip(e,t){this._tooltip={name:e,state:t}}getCardSize(){if(this._config.height){const e=this._config.height.toString();return Math.trunc(Number(e.replace("px",""))/50)+1}return 2}};e([X()],Be.prototype,"hass",void 0),e([X()],Be.prototype,"_config",void 0),e([X()],Be.prototype,"_tooltip",void 0),Be=e([J("list2bars-card")],Be);export{Be as List2BarsCard};
