(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();var Ma={exports:{}},Gl={},za={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rr=Symbol.for("react.element"),md=Symbol.for("react.portal"),gd=Symbol.for("react.fragment"),yd=Symbol.for("react.strict_mode"),vd=Symbol.for("react.profiler"),wd=Symbol.for("react.provider"),_d=Symbol.for("react.context"),kd=Symbol.for("react.forward_ref"),Sd=Symbol.for("react.suspense"),Ed=Symbol.for("react.memo"),xd=Symbol.for("react.lazy"),bu=Symbol.iterator;function Cd(e){return e===null||typeof e!="object"?null:(e=bu&&e[bu]||e["@@iterator"],typeof e=="function"?e:null)}var Fa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Da=Object.assign,Wa={};function Bt(e,n,t){this.props=e,this.context=n,this.refs=Wa,this.updater=t||Fa}Bt.prototype.isReactComponent={};Bt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Bt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ua(){}Ua.prototype=Bt.prototype;function lu(e,n,t){this.props=e,this.context=n,this.refs=Wa,this.updater=t||Fa}var iu=lu.prototype=new Ua;iu.constructor=lu;Da(iu,Bt.prototype);iu.isPureReactComponent=!0;var es=Array.isArray,Ha=Object.prototype.hasOwnProperty,ou={current:null},Ba={key:!0,ref:!0,__self:!0,__source:!0};function $a(e,n,t){var r,l={},i=null,u=null;if(n!=null)for(r in n.ref!==void 0&&(u=n.ref),n.key!==void 0&&(i=""+n.key),n)Ha.call(n,r)&&!Ba.hasOwnProperty(r)&&(l[r]=n[r]);var s=arguments.length-2;if(s===1)l.children=t;else if(1<s){for(var c=Array(s),f=0;f<s;f++)c[f]=arguments[f+2];l.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Rr,type:e,key:i,ref:u,props:l,_owner:ou.current}}function Td(e,n){return{$$typeof:Rr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function uu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Rr}function Nd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ns=/\/+/g;function gi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Nd(""+e.key):n.toString(36)}function pl(e,n,t,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var u=!1;if(e===null)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case Rr:case md:u=!0}}if(u)return u=e,l=l(u),e=r===""?"."+gi(u,0):r,es(l)?(t="",e!=null&&(t=e.replace(ns,"$&/")+"/"),pl(l,n,t,"",function(f){return f})):l!=null&&(uu(l)&&(l=Td(l,t+(!l.key||u&&u.key===l.key?"":(""+l.key).replace(ns,"$&/")+"/")+e)),n.push(l)),1;if(u=0,r=r===""?".":r+":",es(e))for(var s=0;s<e.length;s++){i=e[s];var c=r+gi(i,s);u+=pl(i,n,t,c,l)}else if(c=Cd(e),typeof c=="function")for(e=c.call(e),s=0;!(i=e.next()).done;)i=i.value,c=r+gi(i,s++),u+=pl(i,n,t,c,l);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return u}function Gr(e,n,t){if(e==null)return e;var r=[],l=0;return pl(e,r,"","",function(i){return n.call(t,i,l++)}),r}function Ad(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Me={current:null},hl={transition:null},Ld={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:hl,ReactCurrentOwner:ou};function Ya(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:Gr,forEach:function(e,n,t){Gr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Gr(e,function(){n++}),n},toArray:function(e){return Gr(e,function(n){return n})||[]},only:function(e){if(!uu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Component=Bt;Z.Fragment=gd;Z.Profiler=vd;Z.PureComponent=lu;Z.StrictMode=yd;Z.Suspense=Sd;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ld;Z.act=Ya;Z.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Da({},e.props),l=e.key,i=e.ref,u=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,u=ou.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in n)Ha.call(n,c)&&!Ba.hasOwnProperty(c)&&(r[c]=n[c]===void 0&&s!==void 0?s[c]:n[c])}var c=arguments.length-2;if(c===1)r.children=t;else if(1<c){s=Array(c);for(var f=0;f<c;f++)s[f]=arguments[f+2];r.children=s}return{$$typeof:Rr,type:e.type,key:l,ref:i,props:r,_owner:u}};Z.createContext=function(e){return e={$$typeof:_d,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wd,_context:e},e.Consumer=e};Z.createElement=$a;Z.createFactory=function(e){var n=$a.bind(null,e);return n.type=e,n};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:kd,render:e}};Z.isValidElement=uu;Z.lazy=function(e){return{$$typeof:xd,_payload:{_status:-1,_result:e},_init:Ad}};Z.memo=function(e,n){return{$$typeof:Ed,type:e,compare:n===void 0?null:n}};Z.startTransition=function(e){var n=hl.transition;hl.transition={};try{e()}finally{hl.transition=n}};Z.unstable_act=Ya;Z.useCallback=function(e,n){return Me.current.useCallback(e,n)};Z.useContext=function(e){return Me.current.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e){return Me.current.useDeferredValue(e)};Z.useEffect=function(e,n){return Me.current.useEffect(e,n)};Z.useId=function(){return Me.current.useId()};Z.useImperativeHandle=function(e,n,t){return Me.current.useImperativeHandle(e,n,t)};Z.useInsertionEffect=function(e,n){return Me.current.useInsertionEffect(e,n)};Z.useLayoutEffect=function(e,n){return Me.current.useLayoutEffect(e,n)};Z.useMemo=function(e,n){return Me.current.useMemo(e,n)};Z.useReducer=function(e,n,t){return Me.current.useReducer(e,n,t)};Z.useRef=function(e){return Me.current.useRef(e)};Z.useState=function(e){return Me.current.useState(e)};Z.useSyncExternalStore=function(e,n,t){return Me.current.useSyncExternalStore(e,n,t)};Z.useTransition=function(){return Me.current.useTransition()};Z.version="18.3.1";za.exports=Z;var Se=za.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jd=Se,Pd=Symbol.for("react.element"),Od=Symbol.for("react.fragment"),Id=Object.prototype.hasOwnProperty,Rd=jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Md={key:!0,ref:!0,__self:!0,__source:!0};function Va(e,n,t){var r,l={},i=null,u=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(u=n.ref);for(r in n)Id.call(n,r)&&!Md.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:Pd,type:e,key:i,ref:u,props:l,_owner:Rd.current}}Gl.Fragment=Od;Gl.jsx=Va;Gl.jsxs=Va;Ma.exports=Gl;var R=Ma.exports,Qa={exports:{}},qe={},Ka={exports:{}},qa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(z,K){var Q=z.length;z.push(K);e:for(;0<Q;){var le=Q-1>>>1,ue=z[le];if(0<l(ue,K))z[le]=K,z[Q]=ue,Q=le;else break e}}function t(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var K=z[0],Q=z.pop();if(Q!==K){z[0]=Q;e:for(var le=0,ue=z.length,rn=ue>>>1;le<rn;){var Xe=2*(le+1)-1,ke=z[Xe],Ne=Xe+1,pn=z[Ne];if(0>l(ke,Q))Ne<ue&&0>l(pn,ke)?(z[le]=pn,z[Ne]=Q,le=Ne):(z[le]=ke,z[Xe]=Q,le=Xe);else if(Ne<ue&&0>l(pn,Q))z[le]=pn,z[Ne]=Q,le=Ne;else break e}}return K}function l(z,K){var Q=z.sortIndex-K.sortIndex;return Q!==0?Q:z.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var u=Date,s=u.now();e.unstable_now=function(){return u.now()-s}}var c=[],f=[],d=1,h=null,g=3,x=!1,O=!1,L=!1,G=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(z){for(var K=t(f);K!==null;){if(K.callback===null)r(f);else if(K.startTime<=z)r(f),K.sortIndex=K.expirationTime,n(c,K);else break;K=t(f)}}function T(z){if(L=!1,m(z),!O)if(t(c)!==null)O=!0,F(M);else{var K=t(f);K!==null&&dn(T,K.startTime-z)}}function M(z,K){O=!1,L&&(L=!1,y(B),B=-1),x=!0;var Q=g;try{for(m(K),h=t(c);h!==null&&(!(h.expirationTime>K)||z&&!ne());){var le=h.callback;if(typeof le=="function"){h.callback=null,g=h.priorityLevel;var ue=le(h.expirationTime<=K);K=e.unstable_now(),typeof ue=="function"?h.callback=ue:h===t(c)&&r(c),m(K)}else r(c);h=t(c)}if(h!==null)var rn=!0;else{var Xe=t(f);Xe!==null&&dn(T,Xe.startTime-K),rn=!1}return rn}finally{h=null,g=Q,x=!1}}var U=!1,W=null,B=-1,b=5,Y=-1;function ne(){return!(e.unstable_now()-Y<b)}function ve(){if(W!==null){var z=e.unstable_now();Y=z;var K=!0;try{K=W(!0,z)}finally{K?Te():(U=!1,W=null)}}else U=!1}var Te;if(typeof p=="function")Te=function(){p(ve)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,De=te.port2;te.port1.onmessage=ve,Te=function(){De.postMessage(null)}}else Te=function(){G(ve,0)};function F(z){W=z,U||(U=!0,Te())}function dn(z,K){B=G(function(){z(e.unstable_now())},K)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){O||x||(O=!0,F(M))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(c)},e.unstable_next=function(z){switch(g){case 1:case 2:case 3:var K=3;break;default:K=g}var Q=g;g=K;try{return z()}finally{g=Q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Q=g;g=z;try{return K()}finally{g=Q}},e.unstable_scheduleCallback=function(z,K,Q){var le=e.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?le+Q:le):Q=le,z){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=Q+ue,z={id:d++,callback:K,priorityLevel:z,startTime:Q,expirationTime:ue,sortIndex:-1},Q>le?(z.sortIndex=Q,n(f,z),t(c)===null&&z===t(f)&&(L?(y(B),B=-1):L=!0,dn(T,Q-le))):(z.sortIndex=ue,n(c,z),O||x||(O=!0,F(M))),z},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(z){var K=g;return function(){var Q=g;g=K;try{return z.apply(this,arguments)}finally{g=Q}}}})(qa);Ka.exports=qa;var zd=Ka.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fd=Se,Ke=zd;function P(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ga=new Set,yr={};function pt(e,n){Mt(e,n),Mt(e+"Capture",n)}function Mt(e,n){for(yr[e]=n,e=0;e<n.length;e++)Ga.add(n[e])}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),co=Object.prototype.hasOwnProperty,Dd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ts={},rs={};function Wd(e){return co.call(rs,e)?!0:co.call(ts,e)?!1:Dd.test(e)?rs[e]=!0:(ts[e]=!0,!1)}function Ud(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hd(e,n,t,r){if(n===null||typeof n>"u"||Ud(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ze(e,n,t,r,l,i,u){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=u}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Ce[n]=new ze(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var su=/[\-:]([a-z])/g;function au(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(su,au);Ce[n]=new ze(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(su,au);Ce[n]=new ze(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(su,au);Ce[n]=new ze(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new ze(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function cu(e,n,t,r){var l=Ce.hasOwnProperty(n)?Ce[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Hd(n,t,l,r)&&(t=null),r||l===null?Wd(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var jn=Fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xr=Symbol.for("react.element"),yt=Symbol.for("react.portal"),vt=Symbol.for("react.fragment"),fu=Symbol.for("react.strict_mode"),fo=Symbol.for("react.profiler"),Xa=Symbol.for("react.provider"),Za=Symbol.for("react.context"),du=Symbol.for("react.forward_ref"),po=Symbol.for("react.suspense"),ho=Symbol.for("react.suspense_list"),pu=Symbol.for("react.memo"),zn=Symbol.for("react.lazy"),Ja=Symbol.for("react.offscreen"),ls=Symbol.iterator;function Xt(e){return e===null||typeof e!="object"?null:(e=ls&&e[ls]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,yi;function lr(e){if(yi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);yi=n&&n[1]||""}return`
`+yi+e}var vi=!1;function wi(e,n){if(!e||vi)return"";vi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(f){var r=f}Reflect.construct(e,[],n)}else{try{n.call()}catch(f){r=f}e.call(n.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var l=f.stack.split(`
`),i=r.stack.split(`
`),u=l.length-1,s=i.length-1;1<=u&&0<=s&&l[u]!==i[s];)s--;for(;1<=u&&0<=s;u--,s--)if(l[u]!==i[s]){if(u!==1||s!==1)do if(u--,s--,0>s||l[u]!==i[s]){var c=`
`+l[u].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=u&&0<=s);break}}}finally{vi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?lr(e):""}function Bd(e){switch(e.tag){case 5:return lr(e.type);case 16:return lr("Lazy");case 13:return lr("Suspense");case 19:return lr("SuspenseList");case 0:case 2:case 15:return e=wi(e.type,!1),e;case 11:return e=wi(e.type.render,!1),e;case 1:return e=wi(e.type,!0),e;default:return""}}function mo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vt:return"Fragment";case yt:return"Portal";case fo:return"Profiler";case fu:return"StrictMode";case po:return"Suspense";case ho:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Za:return(e.displayName||"Context")+".Consumer";case Xa:return(e._context.displayName||"Context")+".Provider";case du:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pu:return n=e.displayName||null,n!==null?n:mo(e.type)||"Memo";case zn:n=e._payload,e=e._init;try{return mo(e(n))}catch{}}return null}function $d(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mo(n);case 8:return n===fu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Xn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ba(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Yd(e){var n=ba(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(u){r=""+u,i.call(this,u)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(u){r=""+u},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Zr(e){e._valueTracker||(e._valueTracker=Yd(e))}function ec(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ba(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Cl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function go(e,n){var t=n.checked;return fe({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function is(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Xn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function nc(e,n){n=n.checked,n!=null&&cu(e,"checked",n,!1)}function yo(e,n){nc(e,n);var t=Xn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?vo(e,n.type,t):n.hasOwnProperty("defaultValue")&&vo(e,n.type,Xn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function os(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function vo(e,n,t){(n!=="number"||Cl(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var ir=Array.isArray;function Lt(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Xn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function wo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(P(91));return fe({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function us(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(P(92));if(ir(t)){if(1<t.length)throw Error(P(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Xn(t)}}function tc(e,n){var t=Xn(n.value),r=Xn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function ss(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function rc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _o(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?rc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Jr,lc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Jr=Jr||document.createElement("div"),Jr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Jr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function vr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vd=["Webkit","ms","Moz","O"];Object.keys(sr).forEach(function(e){Vd.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),sr[n]=sr[e]})});function ic(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||sr.hasOwnProperty(e)&&sr[e]?(""+n).trim():n+"px"}function oc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=ic(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var Qd=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ko(e,n){if(n){if(Qd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(P(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(P(61))}if(n.style!=null&&typeof n.style!="object")throw Error(P(62))}}function So(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Eo=null;function hu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xo=null,jt=null,Pt=null;function as(e){if(e=Fr(e)){if(typeof xo!="function")throw Error(P(280));var n=e.stateNode;n&&(n=ei(n),xo(e.stateNode,e.type,n))}}function uc(e){jt?Pt?Pt.push(e):Pt=[e]:jt=e}function sc(){if(jt){var e=jt,n=Pt;if(Pt=jt=null,as(e),n)for(e=0;e<n.length;e++)as(n[e])}}function ac(e,n){return e(n)}function cc(){}var _i=!1;function fc(e,n,t){if(_i)return e(n,t);_i=!0;try{return ac(e,n,t)}finally{_i=!1,(jt!==null||Pt!==null)&&(cc(),sc())}}function wr(e,n){var t=e.stateNode;if(t===null)return null;var r=ei(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(P(231,n,typeof t));return t}var Co=!1;if(Tn)try{var Zt={};Object.defineProperty(Zt,"passive",{get:function(){Co=!0}}),window.addEventListener("test",Zt,Zt),window.removeEventListener("test",Zt,Zt)}catch{Co=!1}function Kd(e,n,t,r,l,i,u,s,c){var f=Array.prototype.slice.call(arguments,3);try{n.apply(t,f)}catch(d){this.onError(d)}}var ar=!1,Tl=null,Nl=!1,To=null,qd={onError:function(e){ar=!0,Tl=e}};function Gd(e,n,t,r,l,i,u,s,c){ar=!1,Tl=null,Kd.apply(qd,arguments)}function Xd(e,n,t,r,l,i,u,s,c){if(Gd.apply(this,arguments),ar){if(ar){var f=Tl;ar=!1,Tl=null}else throw Error(P(198));Nl||(Nl=!0,To=f)}}function ht(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function dc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function cs(e){if(ht(e)!==e)throw Error(P(188))}function Zd(e){var n=e.alternate;if(!n){if(n=ht(e),n===null)throw Error(P(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return cs(l),e;if(i===r)return cs(l),n;i=i.sibling}throw Error(P(188))}if(t.return!==r.return)t=l,r=i;else{for(var u=!1,s=l.child;s;){if(s===t){u=!0,t=l,r=i;break}if(s===r){u=!0,r=l,t=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===t){u=!0,t=i,r=l;break}if(s===r){u=!0,r=i,t=l;break}s=s.sibling}if(!u)throw Error(P(189))}}if(t.alternate!==r)throw Error(P(190))}if(t.tag!==3)throw Error(P(188));return t.stateNode.current===t?e:n}function pc(e){return e=Zd(e),e!==null?hc(e):null}function hc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=hc(e);if(n!==null)return n;e=e.sibling}return null}var mc=Ke.unstable_scheduleCallback,fs=Ke.unstable_cancelCallback,Jd=Ke.unstable_shouldYield,bd=Ke.unstable_requestPaint,he=Ke.unstable_now,ep=Ke.unstable_getCurrentPriorityLevel,mu=Ke.unstable_ImmediatePriority,gc=Ke.unstable_UserBlockingPriority,Al=Ke.unstable_NormalPriority,np=Ke.unstable_LowPriority,yc=Ke.unstable_IdlePriority,Xl=null,vn=null;function tp(e){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(Xl,e,void 0,(e.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:ip,rp=Math.log,lp=Math.LN2;function ip(e){return e>>>=0,e===0?32:31-(rp(e)/lp|0)|0}var br=64,el=4194304;function or(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ll(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,u=t&268435455;if(u!==0){var s=u&~l;s!==0?r=or(s):(i&=u,i!==0&&(r=or(i)))}else u=t&~l,u!==0?r=or(u):i!==0&&(r=or(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,i=n&-n,l>=i||l===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-an(n),l=1<<t,r|=e[t],n&=~l;return r}function op(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function up(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var u=31-an(i),s=1<<u,c=l[u];c===-1?(!(s&t)||s&r)&&(l[u]=op(s,n)):c<=n&&(e.expiredLanes|=s),i&=~s}}function No(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function vc(){var e=br;return br<<=1,!(br&4194240)&&(br=64),e}function ki(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Mr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-an(n),e[n]=t}function sp(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-an(t),i=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~i}}function gu(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-an(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var ee=0;function wc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _c,yu,kc,Sc,Ec,Ao=!1,nl=[],Bn=null,$n=null,Yn=null,_r=new Map,kr=new Map,Dn=[],ap="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ds(e,n){switch(e){case"focusin":case"focusout":Bn=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":Yn=null;break;case"pointerover":case"pointerout":_r.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":kr.delete(n.pointerId)}}function Jt(e,n,t,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},n!==null&&(n=Fr(n),n!==null&&yu(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function cp(e,n,t,r,l){switch(n){case"focusin":return Bn=Jt(Bn,e,n,t,r,l),!0;case"dragenter":return $n=Jt($n,e,n,t,r,l),!0;case"mouseover":return Yn=Jt(Yn,e,n,t,r,l),!0;case"pointerover":var i=l.pointerId;return _r.set(i,Jt(_r.get(i)||null,e,n,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,kr.set(i,Jt(kr.get(i)||null,e,n,t,r,l)),!0}return!1}function xc(e){var n=rt(e.target);if(n!==null){var t=ht(n);if(t!==null){if(n=t.tag,n===13){if(n=dc(t),n!==null){e.blockedOn=n,Ec(e.priority,function(){kc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ml(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Lo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Eo=r,t.target.dispatchEvent(r),Eo=null}else return n=Fr(t),n!==null&&yu(n),e.blockedOn=t,!1;n.shift()}return!0}function ps(e,n,t){ml(e)&&t.delete(n)}function fp(){Ao=!1,Bn!==null&&ml(Bn)&&(Bn=null),$n!==null&&ml($n)&&($n=null),Yn!==null&&ml(Yn)&&(Yn=null),_r.forEach(ps),kr.forEach(ps)}function bt(e,n){e.blockedOn===n&&(e.blockedOn=null,Ao||(Ao=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,fp)))}function Sr(e){function n(l){return bt(l,e)}if(0<nl.length){bt(nl[0],e);for(var t=1;t<nl.length;t++){var r=nl[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Bn!==null&&bt(Bn,e),$n!==null&&bt($n,e),Yn!==null&&bt(Yn,e),_r.forEach(n),kr.forEach(n),t=0;t<Dn.length;t++)r=Dn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Dn.length&&(t=Dn[0],t.blockedOn===null);)xc(t),t.blockedOn===null&&Dn.shift()}var Ot=jn.ReactCurrentBatchConfig,jl=!0;function dp(e,n,t,r){var l=ee,i=Ot.transition;Ot.transition=null;try{ee=1,vu(e,n,t,r)}finally{ee=l,Ot.transition=i}}function pp(e,n,t,r){var l=ee,i=Ot.transition;Ot.transition=null;try{ee=4,vu(e,n,t,r)}finally{ee=l,Ot.transition=i}}function vu(e,n,t,r){if(jl){var l=Lo(e,n,t,r);if(l===null)Pi(e,n,r,Pl,t),ds(e,r);else if(cp(l,e,n,t,r))r.stopPropagation();else if(ds(e,r),n&4&&-1<ap.indexOf(e)){for(;l!==null;){var i=Fr(l);if(i!==null&&_c(i),i=Lo(e,n,t,r),i===null&&Pi(e,n,r,Pl,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else Pi(e,n,r,null,t)}}var Pl=null;function Lo(e,n,t,r){if(Pl=null,e=hu(r),e=rt(e),e!==null)if(n=ht(e),n===null)e=null;else if(t=n.tag,t===13){if(e=dc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Pl=e,null}function Cc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ep()){case mu:return 1;case gc:return 4;case Al:case np:return 16;case yc:return 536870912;default:return 16}default:return 16}}var Un=null,wu=null,gl=null;function Tc(){if(gl)return gl;var e,n=wu,t=n.length,r,l="value"in Un?Un.value:Un.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var u=t-e;for(r=1;r<=u&&n[t-r]===l[i-r];r++);return gl=l.slice(e,1<r?1-r:void 0)}function yl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function tl(){return!0}function hs(){return!1}function Ge(e){function n(t,r,l,i,u){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?tl:hs,this.isPropagationStopped=hs,this}return fe(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),n}var $t={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_u=Ge($t),zr=fe({},$t,{view:0,detail:0}),hp=Ge(zr),Si,Ei,er,Zl=fe({},zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ku,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==er&&(er&&e.type==="mousemove"?(Si=e.screenX-er.screenX,Ei=e.screenY-er.screenY):Ei=Si=0,er=e),Si)},movementY:function(e){return"movementY"in e?e.movementY:Ei}}),ms=Ge(Zl),mp=fe({},Zl,{dataTransfer:0}),gp=Ge(mp),yp=fe({},zr,{relatedTarget:0}),xi=Ge(yp),vp=fe({},$t,{animationName:0,elapsedTime:0,pseudoElement:0}),wp=Ge(vp),_p=fe({},$t,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kp=Ge(_p),Sp=fe({},$t,{data:0}),gs=Ge(Sp),Ep={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Cp[e])?!!n[e]:!1}function ku(){return Tp}var Np=fe({},zr,{key:function(e){if(e.key){var n=Ep[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=yl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ku,charCode:function(e){return e.type==="keypress"?yl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ap=Ge(Np),Lp=fe({},Zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ys=Ge(Lp),jp=fe({},zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ku}),Pp=Ge(jp),Op=fe({},$t,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ip=Ge(Op),Rp=fe({},Zl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mp=Ge(Rp),zp=[9,13,27,32],Su=Tn&&"CompositionEvent"in window,cr=null;Tn&&"documentMode"in document&&(cr=document.documentMode);var Fp=Tn&&"TextEvent"in window&&!cr,Nc=Tn&&(!Su||cr&&8<cr&&11>=cr),vs=" ",ws=!1;function Ac(e,n){switch(e){case"keyup":return zp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wt=!1;function Dp(e,n){switch(e){case"compositionend":return Lc(n);case"keypress":return n.which!==32?null:(ws=!0,vs);case"textInput":return e=n.data,e===vs&&ws?null:e;default:return null}}function Wp(e,n){if(wt)return e==="compositionend"||!Su&&Ac(e,n)?(e=Tc(),gl=wu=Un=null,wt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Nc&&n.locale!=="ko"?null:n.data;default:return null}}var Up={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _s(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Up[e.type]:n==="textarea"}function jc(e,n,t,r){uc(r),n=Ol(n,"onChange"),0<n.length&&(t=new _u("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var fr=null,Er=null;function Hp(e){Hc(e,0)}function Jl(e){var n=St(e);if(ec(n))return e}function Bp(e,n){if(e==="change")return n}var Pc=!1;if(Tn){var Ci;if(Tn){var Ti="oninput"in document;if(!Ti){var ks=document.createElement("div");ks.setAttribute("oninput","return;"),Ti=typeof ks.oninput=="function"}Ci=Ti}else Ci=!1;Pc=Ci&&(!document.documentMode||9<document.documentMode)}function Ss(){fr&&(fr.detachEvent("onpropertychange",Oc),Er=fr=null)}function Oc(e){if(e.propertyName==="value"&&Jl(Er)){var n=[];jc(n,Er,e,hu(e)),fc(Hp,n)}}function $p(e,n,t){e==="focusin"?(Ss(),fr=n,Er=t,fr.attachEvent("onpropertychange",Oc)):e==="focusout"&&Ss()}function Yp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jl(Er)}function Vp(e,n){if(e==="click")return Jl(n)}function Qp(e,n){if(e==="input"||e==="change")return Jl(n)}function Kp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var fn=typeof Object.is=="function"?Object.is:Kp;function xr(e,n){if(fn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!co.call(n,l)||!fn(e[l],n[l]))return!1}return!0}function Es(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xs(e,n){var t=Es(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Es(t)}}function Ic(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ic(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Rc(){for(var e=window,n=Cl();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Cl(e.document)}return n}function Eu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function qp(e){var n=Rc(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ic(t.ownerDocument.documentElement,t)){if(r!==null&&Eu(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=xs(t,i);var u=xs(t,r);l&&u&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(u.node,u.offset)):(n.setEnd(u.node,u.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gp=Tn&&"documentMode"in document&&11>=document.documentMode,_t=null,jo=null,dr=null,Po=!1;function Cs(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Po||_t==null||_t!==Cl(r)||(r=_t,"selectionStart"in r&&Eu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),dr&&xr(dr,r)||(dr=r,r=Ol(jo,"onSelect"),0<r.length&&(n=new _u("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=_t)))}function rl(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var kt={animationend:rl("Animation","AnimationEnd"),animationiteration:rl("Animation","AnimationIteration"),animationstart:rl("Animation","AnimationStart"),transitionend:rl("Transition","TransitionEnd")},Ni={},Mc={};Tn&&(Mc=document.createElement("div").style,"AnimationEvent"in window||(delete kt.animationend.animation,delete kt.animationiteration.animation,delete kt.animationstart.animation),"TransitionEvent"in window||delete kt.transitionend.transition);function bl(e){if(Ni[e])return Ni[e];if(!kt[e])return e;var n=kt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Mc)return Ni[e]=n[t];return e}var zc=bl("animationend"),Fc=bl("animationiteration"),Dc=bl("animationstart"),Wc=bl("transitionend"),Uc=new Map,Ts="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jn(e,n){Uc.set(e,n),pt(n,[e])}for(var Ai=0;Ai<Ts.length;Ai++){var Li=Ts[Ai],Xp=Li.toLowerCase(),Zp=Li[0].toUpperCase()+Li.slice(1);Jn(Xp,"on"+Zp)}Jn(zc,"onAnimationEnd");Jn(Fc,"onAnimationIteration");Jn(Dc,"onAnimationStart");Jn("dblclick","onDoubleClick");Jn("focusin","onFocus");Jn("focusout","onBlur");Jn(Wc,"onTransitionEnd");Mt("onMouseEnter",["mouseout","mouseover"]);Mt("onMouseLeave",["mouseout","mouseover"]);Mt("onPointerEnter",["pointerout","pointerover"]);Mt("onPointerLeave",["pointerout","pointerover"]);pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pt("onBeforeInput",["compositionend","keypress","textInput","paste"]);pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jp=new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));function Ns(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Xd(r,n,void 0,e),e.currentTarget=null}function Hc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var u=r.length-1;0<=u;u--){var s=r[u],c=s.instance,f=s.currentTarget;if(s=s.listener,c!==i&&l.isPropagationStopped())break e;Ns(l,s,f),i=c}else for(u=0;u<r.length;u++){if(s=r[u],c=s.instance,f=s.currentTarget,s=s.listener,c!==i&&l.isPropagationStopped())break e;Ns(l,s,f),i=c}}}if(Nl)throw e=To,Nl=!1,To=null,e}function ie(e,n){var t=n[zo];t===void 0&&(t=n[zo]=new Set);var r=e+"__bubble";t.has(r)||(Bc(n,e,2,!1),t.add(r))}function ji(e,n,t){var r=0;n&&(r|=4),Bc(t,e,r,n)}var ll="_reactListening"+Math.random().toString(36).slice(2);function Cr(e){if(!e[ll]){e[ll]=!0,Ga.forEach(function(t){t!=="selectionchange"&&(Jp.has(t)||ji(t,!1,e),ji(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ll]||(n[ll]=!0,ji("selectionchange",!1,n))}}function Bc(e,n,t,r){switch(Cc(n)){case 1:var l=dp;break;case 4:l=pp;break;default:l=vu}t=l.bind(null,n,t,e),l=void 0,!Co||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Pi(e,n,t,r,l){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var u=r.tag;if(u===3||u===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(u===4)for(u=r.return;u!==null;){var c=u.tag;if((c===3||c===4)&&(c=u.stateNode.containerInfo,c===l||c.nodeType===8&&c.parentNode===l))return;u=u.return}for(;s!==null;){if(u=rt(s),u===null)return;if(c=u.tag,c===5||c===6){r=i=u;continue e}s=s.parentNode}}r=r.return}fc(function(){var f=i,d=hu(t),h=[];e:{var g=Uc.get(e);if(g!==void 0){var x=_u,O=e;switch(e){case"keypress":if(yl(t)===0)break e;case"keydown":case"keyup":x=Ap;break;case"focusin":O="focus",x=xi;break;case"focusout":O="blur",x=xi;break;case"beforeblur":case"afterblur":x=xi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=ms;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=gp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Pp;break;case zc:case Fc:case Dc:x=wp;break;case Wc:x=Ip;break;case"scroll":x=hp;break;case"wheel":x=Mp;break;case"copy":case"cut":case"paste":x=kp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=ys}var L=(n&4)!==0,G=!L&&e==="scroll",y=L?g!==null?g+"Capture":null:g;L=[];for(var p=f,m;p!==null;){m=p;var T=m.stateNode;if(m.tag===5&&T!==null&&(m=T,y!==null&&(T=wr(p,y),T!=null&&L.push(Tr(p,T,m)))),G)break;p=p.return}0<L.length&&(g=new x(g,O,null,t,d),h.push({event:g,listeners:L}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&t!==Eo&&(O=t.relatedTarget||t.fromElement)&&(rt(O)||O[Nn]))break e;if((x||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,x?(O=t.relatedTarget||t.toElement,x=f,O=O?rt(O):null,O!==null&&(G=ht(O),O!==G||O.tag!==5&&O.tag!==6)&&(O=null)):(x=null,O=f),x!==O)){if(L=ms,T="onMouseLeave",y="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(L=ys,T="onPointerLeave",y="onPointerEnter",p="pointer"),G=x==null?g:St(x),m=O==null?g:St(O),g=new L(T,p+"leave",x,t,d),g.target=G,g.relatedTarget=m,T=null,rt(d)===f&&(L=new L(y,p+"enter",O,t,d),L.target=m,L.relatedTarget=G,T=L),G=T,x&&O)n:{for(L=x,y=O,p=0,m=L;m;m=gt(m))p++;for(m=0,T=y;T;T=gt(T))m++;for(;0<p-m;)L=gt(L),p--;for(;0<m-p;)y=gt(y),m--;for(;p--;){if(L===y||y!==null&&L===y.alternate)break n;L=gt(L),y=gt(y)}L=null}else L=null;x!==null&&As(h,g,x,L,!1),O!==null&&G!==null&&As(h,G,O,L,!0)}}e:{if(g=f?St(f):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var M=Bp;else if(_s(g))if(Pc)M=Qp;else{M=Yp;var U=$p}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(M=Vp);if(M&&(M=M(e,f))){jc(h,M,t,d);break e}U&&U(e,g,f),e==="focusout"&&(U=g._wrapperState)&&U.controlled&&g.type==="number"&&vo(g,"number",g.value)}switch(U=f?St(f):window,e){case"focusin":(_s(U)||U.contentEditable==="true")&&(_t=U,jo=f,dr=null);break;case"focusout":dr=jo=_t=null;break;case"mousedown":Po=!0;break;case"contextmenu":case"mouseup":case"dragend":Po=!1,Cs(h,t,d);break;case"selectionchange":if(Gp)break;case"keydown":case"keyup":Cs(h,t,d)}var W;if(Su)e:{switch(e){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else wt?Ac(e,t)&&(B="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(B="onCompositionStart");B&&(Nc&&t.locale!=="ko"&&(wt||B!=="onCompositionStart"?B==="onCompositionEnd"&&wt&&(W=Tc()):(Un=d,wu="value"in Un?Un.value:Un.textContent,wt=!0)),U=Ol(f,B),0<U.length&&(B=new gs(B,e,null,t,d),h.push({event:B,listeners:U}),W?B.data=W:(W=Lc(t),W!==null&&(B.data=W)))),(W=Fp?Dp(e,t):Wp(e,t))&&(f=Ol(f,"onBeforeInput"),0<f.length&&(d=new gs("onBeforeInput","beforeinput",null,t,d),h.push({event:d,listeners:f}),d.data=W))}Hc(h,n)})}function Tr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ol(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=wr(e,t),i!=null&&r.unshift(Tr(e,i,l)),i=wr(e,n),i!=null&&r.push(Tr(e,i,l))),e=e.return}return r}function gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function As(e,n,t,r,l){for(var i=n._reactName,u=[];t!==null&&t!==r;){var s=t,c=s.alternate,f=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&f!==null&&(s=f,l?(c=wr(t,i),c!=null&&u.unshift(Tr(t,c,s))):l||(c=wr(t,i),c!=null&&u.push(Tr(t,c,s)))),t=t.return}u.length!==0&&e.push({event:n,listeners:u})}var bp=/\r\n?/g,eh=/\u0000|\uFFFD/g;function Ls(e){return(typeof e=="string"?e:""+e).replace(bp,`
`).replace(eh,"")}function il(e,n,t){if(n=Ls(n),Ls(e)!==n&&t)throw Error(P(425))}function Il(){}var Oo=null,Io=null;function Ro(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Mo=typeof setTimeout=="function"?setTimeout:void 0,nh=typeof clearTimeout=="function"?clearTimeout:void 0,js=typeof Promise=="function"?Promise:void 0,th=typeof queueMicrotask=="function"?queueMicrotask:typeof js<"u"?function(e){return js.resolve(null).then(e).catch(rh)}:Mo;function rh(e){setTimeout(function(){throw e})}function Oi(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),Sr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);Sr(n)}function Vn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ps(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Yt=Math.random().toString(36).slice(2),yn="__reactFiber$"+Yt,Nr="__reactProps$"+Yt,Nn="__reactContainer$"+Yt,zo="__reactEvents$"+Yt,lh="__reactListeners$"+Yt,ih="__reactHandles$"+Yt;function rt(e){var n=e[yn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Nn]||t[yn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ps(e);e!==null;){if(t=e[yn])return t;e=Ps(e)}return n}e=t,t=e.parentNode}return null}function Fr(e){return e=e[yn]||e[Nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function St(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function ei(e){return e[Nr]||null}var Fo=[],Et=-1;function bn(e){return{current:e}}function oe(e){0>Et||(e.current=Fo[Et],Fo[Et]=null,Et--)}function re(e,n){Et++,Fo[Et]=e.current,e.current=n}var Zn={},Oe=bn(Zn),He=bn(!1),st=Zn;function zt(e,n){var t=e.type.contextTypes;if(!t)return Zn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function Be(e){return e=e.childContextTypes,e!=null}function Rl(){oe(He),oe(Oe)}function Os(e,n,t){if(Oe.current!==Zn)throw Error(P(168));re(Oe,n),re(He,t)}function $c(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(P(108,$d(e)||"Unknown",l));return fe({},t,r)}function Ml(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zn,st=Oe.current,re(Oe,e),re(He,He.current),!0}function Is(e,n,t){var r=e.stateNode;if(!r)throw Error(P(169));t?(e=$c(e,n,st),r.__reactInternalMemoizedMergedChildContext=e,oe(He),oe(Oe),re(Oe,e)):oe(He),re(He,t)}var Sn=null,ni=!1,Ii=!1;function Yc(e){Sn===null?Sn=[e]:Sn.push(e)}function oh(e){ni=!0,Yc(e)}function et(){if(!Ii&&Sn!==null){Ii=!0;var e=0,n=ee;try{var t=Sn;for(ee=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Sn=null,ni=!1}catch(l){throw Sn!==null&&(Sn=Sn.slice(e+1)),mc(mu,et),l}finally{ee=n,Ii=!1}}return null}var xt=[],Ct=0,zl=null,Fl=0,Ze=[],Je=0,at=null,En=1,xn="";function nt(e,n){xt[Ct++]=Fl,xt[Ct++]=zl,zl=e,Fl=n}function Vc(e,n,t){Ze[Je++]=En,Ze[Je++]=xn,Ze[Je++]=at,at=e;var r=En;e=xn;var l=32-an(r)-1;r&=~(1<<l),t+=1;var i=32-an(n)+l;if(30<i){var u=l-l%5;i=(r&(1<<u)-1).toString(32),r>>=u,l-=u,En=1<<32-an(n)+l|t<<l|r,xn=i+e}else En=1<<i|t<<l|r,xn=e}function xu(e){e.return!==null&&(nt(e,1),Vc(e,1,0))}function Cu(e){for(;e===zl;)zl=xt[--Ct],xt[Ct]=null,Fl=xt[--Ct],xt[Ct]=null;for(;e===at;)at=Ze[--Je],Ze[Je]=null,xn=Ze[--Je],Ze[Je]=null,En=Ze[--Je],Ze[Je]=null}var Qe=null,Ve=null,se=!1,sn=null;function Qc(e,n){var t=be(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Rs(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Qe=e,Ve=Vn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Qe=e,Ve=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=at!==null?{id:En,overflow:xn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=be(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Qe=e,Ve=null,!0):!1;default:return!1}}function Do(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wo(e){if(se){var n=Ve;if(n){var t=n;if(!Rs(e,n)){if(Do(e))throw Error(P(418));n=Vn(t.nextSibling);var r=Qe;n&&Rs(e,n)?Qc(r,t):(e.flags=e.flags&-4097|2,se=!1,Qe=e)}}else{if(Do(e))throw Error(P(418));e.flags=e.flags&-4097|2,se=!1,Qe=e}}}function Ms(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function ol(e){if(e!==Qe)return!1;if(!se)return Ms(e),se=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ro(e.type,e.memoizedProps)),n&&(n=Ve)){if(Do(e))throw Kc(),Error(P(418));for(;n;)Qc(e,n),n=Vn(n.nextSibling)}if(Ms(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ve=Vn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ve=null}}else Ve=Qe?Vn(e.stateNode.nextSibling):null;return!0}function Kc(){for(var e=Ve;e;)e=Vn(e.nextSibling)}function Ft(){Ve=Qe=null,se=!1}function Tu(e){sn===null?sn=[e]:sn.push(e)}var uh=jn.ReactCurrentBatchConfig;function nr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(P(309));var r=t.stateNode}if(!r)throw Error(P(147,e));var l=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(u){var s=l.refs;u===null?delete s[i]:s[i]=u},n._stringRef=i,n)}if(typeof e!="string")throw Error(P(284));if(!t._owner)throw Error(P(290,e))}return e}function ul(e,n){throw e=Object.prototype.toString.call(n),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function zs(e){var n=e._init;return n(e._payload)}function qc(e){function n(y,p){if(e){var m=y.deletions;m===null?(y.deletions=[p],y.flags|=16):m.push(p)}}function t(y,p){if(!e)return null;for(;p!==null;)n(y,p),p=p.sibling;return null}function r(y,p){for(y=new Map;p!==null;)p.key!==null?y.set(p.key,p):y.set(p.index,p),p=p.sibling;return y}function l(y,p){return y=Gn(y,p),y.index=0,y.sibling=null,y}function i(y,p,m){return y.index=m,e?(m=y.alternate,m!==null?(m=m.index,m<p?(y.flags|=2,p):m):(y.flags|=2,p)):(y.flags|=1048576,p)}function u(y){return e&&y.alternate===null&&(y.flags|=2),y}function s(y,p,m,T){return p===null||p.tag!==6?(p=Ui(m,y.mode,T),p.return=y,p):(p=l(p,m),p.return=y,p)}function c(y,p,m,T){var M=m.type;return M===vt?d(y,p,m.props.children,T,m.key):p!==null&&(p.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===zn&&zs(M)===p.type)?(T=l(p,m.props),T.ref=nr(y,p,m),T.return=y,T):(T=xl(m.type,m.key,m.props,null,y.mode,T),T.ref=nr(y,p,m),T.return=y,T)}function f(y,p,m,T){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Hi(m,y.mode,T),p.return=y,p):(p=l(p,m.children||[]),p.return=y,p)}function d(y,p,m,T,M){return p===null||p.tag!==7?(p=ut(m,y.mode,T,M),p.return=y,p):(p=l(p,m),p.return=y,p)}function h(y,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ui(""+p,y.mode,m),p.return=y,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Xr:return m=xl(p.type,p.key,p.props,null,y.mode,m),m.ref=nr(y,null,p),m.return=y,m;case yt:return p=Hi(p,y.mode,m),p.return=y,p;case zn:var T=p._init;return h(y,T(p._payload),m)}if(ir(p)||Xt(p))return p=ut(p,y.mode,m,null),p.return=y,p;ul(y,p)}return null}function g(y,p,m,T){var M=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return M!==null?null:s(y,p,""+m,T);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Xr:return m.key===M?c(y,p,m,T):null;case yt:return m.key===M?f(y,p,m,T):null;case zn:return M=m._init,g(y,p,M(m._payload),T)}if(ir(m)||Xt(m))return M!==null?null:d(y,p,m,T,null);ul(y,m)}return null}function x(y,p,m,T,M){if(typeof T=="string"&&T!==""||typeof T=="number")return y=y.get(m)||null,s(p,y,""+T,M);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Xr:return y=y.get(T.key===null?m:T.key)||null,c(p,y,T,M);case yt:return y=y.get(T.key===null?m:T.key)||null,f(p,y,T,M);case zn:var U=T._init;return x(y,p,m,U(T._payload),M)}if(ir(T)||Xt(T))return y=y.get(m)||null,d(p,y,T,M,null);ul(p,T)}return null}function O(y,p,m,T){for(var M=null,U=null,W=p,B=p=0,b=null;W!==null&&B<m.length;B++){W.index>B?(b=W,W=null):b=W.sibling;var Y=g(y,W,m[B],T);if(Y===null){W===null&&(W=b);break}e&&W&&Y.alternate===null&&n(y,W),p=i(Y,p,B),U===null?M=Y:U.sibling=Y,U=Y,W=b}if(B===m.length)return t(y,W),se&&nt(y,B),M;if(W===null){for(;B<m.length;B++)W=h(y,m[B],T),W!==null&&(p=i(W,p,B),U===null?M=W:U.sibling=W,U=W);return se&&nt(y,B),M}for(W=r(y,W);B<m.length;B++)b=x(W,y,B,m[B],T),b!==null&&(e&&b.alternate!==null&&W.delete(b.key===null?B:b.key),p=i(b,p,B),U===null?M=b:U.sibling=b,U=b);return e&&W.forEach(function(ne){return n(y,ne)}),se&&nt(y,B),M}function L(y,p,m,T){var M=Xt(m);if(typeof M!="function")throw Error(P(150));if(m=M.call(m),m==null)throw Error(P(151));for(var U=M=null,W=p,B=p=0,b=null,Y=m.next();W!==null&&!Y.done;B++,Y=m.next()){W.index>B?(b=W,W=null):b=W.sibling;var ne=g(y,W,Y.value,T);if(ne===null){W===null&&(W=b);break}e&&W&&ne.alternate===null&&n(y,W),p=i(ne,p,B),U===null?M=ne:U.sibling=ne,U=ne,W=b}if(Y.done)return t(y,W),se&&nt(y,B),M;if(W===null){for(;!Y.done;B++,Y=m.next())Y=h(y,Y.value,T),Y!==null&&(p=i(Y,p,B),U===null?M=Y:U.sibling=Y,U=Y);return se&&nt(y,B),M}for(W=r(y,W);!Y.done;B++,Y=m.next())Y=x(W,y,B,Y.value,T),Y!==null&&(e&&Y.alternate!==null&&W.delete(Y.key===null?B:Y.key),p=i(Y,p,B),U===null?M=Y:U.sibling=Y,U=Y);return e&&W.forEach(function(ve){return n(y,ve)}),se&&nt(y,B),M}function G(y,p,m,T){if(typeof m=="object"&&m!==null&&m.type===vt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Xr:e:{for(var M=m.key,U=p;U!==null;){if(U.key===M){if(M=m.type,M===vt){if(U.tag===7){t(y,U.sibling),p=l(U,m.props.children),p.return=y,y=p;break e}}else if(U.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===zn&&zs(M)===U.type){t(y,U.sibling),p=l(U,m.props),p.ref=nr(y,U,m),p.return=y,y=p;break e}t(y,U);break}else n(y,U);U=U.sibling}m.type===vt?(p=ut(m.props.children,y.mode,T,m.key),p.return=y,y=p):(T=xl(m.type,m.key,m.props,null,y.mode,T),T.ref=nr(y,p,m),T.return=y,y=T)}return u(y);case yt:e:{for(U=m.key;p!==null;){if(p.key===U)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){t(y,p.sibling),p=l(p,m.children||[]),p.return=y,y=p;break e}else{t(y,p);break}else n(y,p);p=p.sibling}p=Hi(m,y.mode,T),p.return=y,y=p}return u(y);case zn:return U=m._init,G(y,p,U(m._payload),T)}if(ir(m))return O(y,p,m,T);if(Xt(m))return L(y,p,m,T);ul(y,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(t(y,p.sibling),p=l(p,m),p.return=y,y=p):(t(y,p),p=Ui(m,y.mode,T),p.return=y,y=p),u(y)):t(y,p)}return G}var Dt=qc(!0),Gc=qc(!1),Dl=bn(null),Wl=null,Tt=null,Nu=null;function Au(){Nu=Tt=Wl=null}function Lu(e){var n=Dl.current;oe(Dl),e._currentValue=n}function Uo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function It(e,n){Wl=e,Nu=Tt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ue=!0),e.firstContext=null)}function nn(e){var n=e._currentValue;if(Nu!==e)if(e={context:e,memoizedValue:n,next:null},Tt===null){if(Wl===null)throw Error(P(308));Tt=e,Wl.dependencies={lanes:0,firstContext:e}}else Tt=Tt.next=e;return n}var lt=null;function ju(e){lt===null?lt=[e]:lt.push(e)}function Xc(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,ju(n)):(t.next=l.next,l.next=t),n.interleaved=t,An(e,r)}function An(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Fn=!1;function Pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Cn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Qn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,An(e,t)}return l=r.interleaved,l===null?(n.next=n,ju(r)):(n.next=l.next,l.next=n),r.interleaved=n,An(e,t)}function vl(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,gu(e,t)}}function Fs(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var u={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=u:i=i.next=u,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ul(e,n,t,r){var l=e.updateQueue;Fn=!1;var i=l.firstBaseUpdate,u=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var c=s,f=c.next;c.next=null,u===null?i=f:u.next=f,u=c;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==u&&(s===null?d.firstBaseUpdate=f:s.next=f,d.lastBaseUpdate=c))}if(i!==null){var h=l.baseState;u=0,d=f=c=null,s=i;do{var g=s.lane,x=s.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var O=e,L=s;switch(g=n,x=t,L.tag){case 1:if(O=L.payload,typeof O=="function"){h=O.call(x,h,g);break e}h=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=L.payload,g=typeof O=="function"?O.call(x,h,g):O,g==null)break e;h=fe({},h,g);break e;case 2:Fn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[s]:g.push(s))}else x={eventTime:x,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(f=d=x,c=h):d=d.next=x,u|=g;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;g=s,s=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(d===null&&(c=h),l.baseState=c,l.firstBaseUpdate=f,l.lastBaseUpdate=d,n=l.shared.interleaved,n!==null){l=n;do u|=l.lane,l=l.next;while(l!==n)}else i===null&&(l.shared.lanes=0);ft|=u,e.lanes=u,e.memoizedState=h}}function Ds(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(P(191,l));l.call(r)}}}var Dr={},wn=bn(Dr),Ar=bn(Dr),Lr=bn(Dr);function it(e){if(e===Dr)throw Error(P(174));return e}function Ou(e,n){switch(re(Lr,n),re(Ar,e),re(wn,Dr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:_o(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=_o(n,e)}oe(wn),re(wn,n)}function Wt(){oe(wn),oe(Ar),oe(Lr)}function Jc(e){it(Lr.current);var n=it(wn.current),t=_o(n,e.type);n!==t&&(re(Ar,e),re(wn,t))}function Iu(e){Ar.current===e&&(oe(wn),oe(Ar))}var ae=bn(0);function Hl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ri=[];function Ru(){for(var e=0;e<Ri.length;e++)Ri[e]._workInProgressVersionPrimary=null;Ri.length=0}var wl=jn.ReactCurrentDispatcher,Mi=jn.ReactCurrentBatchConfig,ct=0,ce=null,ge=null,we=null,Bl=!1,pr=!1,jr=0,sh=0;function Ae(){throw Error(P(321))}function Mu(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!fn(e[t],n[t]))return!1;return!0}function zu(e,n,t,r,l,i){if(ct=i,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,wl.current=e===null||e.memoizedState===null?dh:ph,e=t(r,l),pr){i=0;do{if(pr=!1,jr=0,25<=i)throw Error(P(301));i+=1,we=ge=null,n.updateQueue=null,wl.current=hh,e=t(r,l)}while(pr)}if(wl.current=$l,n=ge!==null&&ge.next!==null,ct=0,we=ge=ce=null,Bl=!1,n)throw Error(P(300));return e}function Fu(){var e=jr!==0;return jr=0,e}function gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?ce.memoizedState=we=e:we=we.next=e,we}function tn(){if(ge===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var n=we===null?ce.memoizedState:we.next;if(n!==null)we=n,ge=e;else{if(e===null)throw Error(P(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},we===null?ce.memoizedState=we=e:we=we.next=e}return we}function Pr(e,n){return typeof n=="function"?n(e):n}function zi(e){var n=tn(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var r=ge,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var u=l.next;l.next=i.next,i.next=u}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=u=null,c=null,f=i;do{var d=f.lane;if((ct&d)===d)c!==null&&(c=c.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var h={lane:d,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};c===null?(s=c=h,u=r):c=c.next=h,ce.lanes|=d,ft|=d}f=f.next}while(f!==null&&f!==i);c===null?u=r:c.next=s,fn(r,n.memoizedState)||(Ue=!0),n.memoizedState=r,n.baseState=u,n.baseQueue=c,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do i=l.lane,ce.lanes|=i,ft|=i,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Fi(e){var n=tn(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var u=l=l.next;do i=e(i,u.action),u=u.next;while(u!==l);fn(i,n.memoizedState)||(Ue=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function bc(){}function ef(e,n){var t=ce,r=tn(),l=n(),i=!fn(r.memoizedState,l);if(i&&(r.memoizedState=l,Ue=!0),r=r.queue,Du(rf.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||we!==null&&we.memoizedState.tag&1){if(t.flags|=2048,Or(9,tf.bind(null,t,r,l,n),void 0,null),_e===null)throw Error(P(349));ct&30||nf(t,n,l)}return l}function nf(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ce.updateQueue,n===null?(n={lastEffect:null,stores:null},ce.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function tf(e,n,t,r){n.value=t,n.getSnapshot=r,lf(n)&&of(e)}function rf(e,n,t){return t(function(){lf(n)&&of(e)})}function lf(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!fn(e,t)}catch{return!0}}function of(e){var n=An(e,1);n!==null&&cn(n,e,1,-1)}function Ws(e){var n=gn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pr,lastRenderedState:e},n.queue=e,e=e.dispatch=fh.bind(null,ce,e),[n.memoizedState,e]}function Or(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=ce.updateQueue,n===null?(n={lastEffect:null,stores:null},ce.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function uf(){return tn().memoizedState}function _l(e,n,t,r){var l=gn();ce.flags|=e,l.memoizedState=Or(1|n,t,void 0,r===void 0?null:r)}function ti(e,n,t,r){var l=tn();r=r===void 0?null:r;var i=void 0;if(ge!==null){var u=ge.memoizedState;if(i=u.destroy,r!==null&&Mu(r,u.deps)){l.memoizedState=Or(n,t,i,r);return}}ce.flags|=e,l.memoizedState=Or(1|n,t,i,r)}function Us(e,n){return _l(8390656,8,e,n)}function Du(e,n){return ti(2048,8,e,n)}function sf(e,n){return ti(4,2,e,n)}function af(e,n){return ti(4,4,e,n)}function cf(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ff(e,n,t){return t=t!=null?t.concat([e]):null,ti(4,4,cf.bind(null,n,e),t)}function Wu(){}function df(e,n){var t=tn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Mu(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function pf(e,n){var t=tn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Mu(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function hf(e,n,t){return ct&21?(fn(t,n)||(t=vc(),ce.lanes|=t,ft|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=t)}function ah(e,n){var t=ee;ee=t!==0&&4>t?t:4,e(!0);var r=Mi.transition;Mi.transition={};try{e(!1),n()}finally{ee=t,Mi.transition=r}}function mf(){return tn().memoizedState}function ch(e,n,t){var r=qn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},gf(e))yf(n,t);else if(t=Xc(e,n,t,r),t!==null){var l=Re();cn(t,e,r,l),vf(t,n,r)}}function fh(e,n,t){var r=qn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(gf(e))yf(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var u=n.lastRenderedState,s=i(u,t);if(l.hasEagerState=!0,l.eagerState=s,fn(s,u)){var c=n.interleaved;c===null?(l.next=l,ju(n)):(l.next=c.next,c.next=l),n.interleaved=l;return}}catch{}finally{}t=Xc(e,n,l,r),t!==null&&(l=Re(),cn(t,e,r,l),vf(t,n,r))}}function gf(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function yf(e,n){pr=Bl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function vf(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,gu(e,t)}}var $l={readContext:nn,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},dh={readContext:nn,useCallback:function(e,n){return gn().memoizedState=[e,n===void 0?null:n],e},useContext:nn,useEffect:Us,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,_l(4194308,4,cf.bind(null,n,e),t)},useLayoutEffect:function(e,n){return _l(4194308,4,e,n)},useInsertionEffect:function(e,n){return _l(4,2,e,n)},useMemo:function(e,n){var t=gn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=gn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=ch.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var n=gn();return e={current:e},n.memoizedState=e},useState:Ws,useDebugValue:Wu,useDeferredValue:function(e){return gn().memoizedState=e},useTransition:function(){var e=Ws(!1),n=e[0];return e=ah.bind(null,e[1]),gn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=ce,l=gn();if(se){if(t===void 0)throw Error(P(407));t=t()}else{if(t=n(),_e===null)throw Error(P(349));ct&30||nf(r,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,Us(rf.bind(null,r,i,e),[e]),r.flags|=2048,Or(9,tf.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=gn(),n=_e.identifierPrefix;if(se){var t=xn,r=En;t=(r&~(1<<32-an(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=jr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=sh++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},ph={readContext:nn,useCallback:df,useContext:nn,useEffect:Du,useImperativeHandle:ff,useInsertionEffect:sf,useLayoutEffect:af,useMemo:pf,useReducer:zi,useRef:uf,useState:function(){return zi(Pr)},useDebugValue:Wu,useDeferredValue:function(e){var n=tn();return hf(n,ge.memoizedState,e)},useTransition:function(){var e=zi(Pr)[0],n=tn().memoizedState;return[e,n]},useMutableSource:bc,useSyncExternalStore:ef,useId:mf,unstable_isNewReconciler:!1},hh={readContext:nn,useCallback:df,useContext:nn,useEffect:Du,useImperativeHandle:ff,useInsertionEffect:sf,useLayoutEffect:af,useMemo:pf,useReducer:Fi,useRef:uf,useState:function(){return Fi(Pr)},useDebugValue:Wu,useDeferredValue:function(e){var n=tn();return ge===null?n.memoizedState=e:hf(n,ge.memoizedState,e)},useTransition:function(){var e=Fi(Pr)[0],n=tn().memoizedState;return[e,n]},useMutableSource:bc,useSyncExternalStore:ef,useId:mf,unstable_isNewReconciler:!1};function on(e,n){if(e&&e.defaultProps){n=fe({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ho(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:fe({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ri={isMounted:function(e){return(e=e._reactInternals)?ht(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Re(),l=qn(e),i=Cn(r,l);i.payload=n,t!=null&&(i.callback=t),n=Qn(e,i,l),n!==null&&(cn(n,e,l,r),vl(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Re(),l=qn(e),i=Cn(r,l);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Qn(e,i,l),n!==null&&(cn(n,e,l,r),vl(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Re(),r=qn(e),l=Cn(t,r);l.tag=2,n!=null&&(l.callback=n),n=Qn(e,l,r),n!==null&&(cn(n,e,r,t),vl(n,e,r))}};function Hs(e,n,t,r,l,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,u):n.prototype&&n.prototype.isPureReactComponent?!xr(t,r)||!xr(l,i):!0}function wf(e,n,t){var r=!1,l=Zn,i=n.contextType;return typeof i=="object"&&i!==null?i=nn(i):(l=Be(n)?st:Oe.current,r=n.contextTypes,i=(r=r!=null)?zt(e,l):Zn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ri,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),n}function Bs(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ri.enqueueReplaceState(n,n.state,null)}function Bo(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},Pu(e);var i=n.contextType;typeof i=="object"&&i!==null?l.context=nn(i):(i=Be(n)?st:Oe.current,l.context=zt(e,i)),l.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Ho(e,n,i,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&ri.enqueueReplaceState(l,l.state,null),Ul(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Ut(e,n){try{var t="",r=n;do t+=Bd(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:l,digest:null}}function Di(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function $o(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var mh=typeof WeakMap=="function"?WeakMap:Map;function _f(e,n,t){t=Cn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Vl||(Vl=!0,bo=r),$o(e,n)},t}function kf(e,n,t){t=Cn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){$o(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){$o(e,n),typeof r!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var u=n.stack;this.componentDidCatch(n.value,{componentStack:u!==null?u:""})}),t}function $s(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new mh;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=Lh.bind(null,e,n,t),n.then(e,e))}function Ys(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Vs(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Cn(-1,1),n.tag=2,Qn(t,n,1))),t.lanes|=1),e)}var gh=jn.ReactCurrentOwner,Ue=!1;function Ie(e,n,t,r){n.child=e===null?Gc(n,null,t,r):Dt(n,e.child,t,r)}function Qs(e,n,t,r,l){t=t.render;var i=n.ref;return It(n,l),r=zu(e,n,t,r,i,l),t=Fu(),e!==null&&!Ue?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Ln(e,n,l)):(se&&t&&xu(n),n.flags|=1,Ie(e,n,r,l),n.child)}function Ks(e,n,t,r,l){if(e===null){var i=t.type;return typeof i=="function"&&!Ku(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Sf(e,n,i,r,l)):(e=xl(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&l)){var u=i.memoizedProps;if(t=t.compare,t=t!==null?t:xr,t(u,r)&&e.ref===n.ref)return Ln(e,n,l)}return n.flags|=1,e=Gn(i,r),e.ref=n.ref,e.return=n,n.child=e}function Sf(e,n,t,r,l){if(e!==null){var i=e.memoizedProps;if(xr(i,r)&&e.ref===n.ref)if(Ue=!1,n.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(Ue=!0);else return n.lanes=e.lanes,Ln(e,n,l)}return Yo(e,n,t,r,l)}function Ef(e,n,t){var r=n.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(At,Ye),Ye|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,re(At,Ye),Ye|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,re(At,Ye),Ye|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,re(At,Ye),Ye|=r;return Ie(e,n,l,t),n.child}function xf(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Yo(e,n,t,r,l){var i=Be(t)?st:Oe.current;return i=zt(n,i),It(n,l),t=zu(e,n,t,r,i,l),r=Fu(),e!==null&&!Ue?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Ln(e,n,l)):(se&&r&&xu(n),n.flags|=1,Ie(e,n,t,l),n.child)}function qs(e,n,t,r,l){if(Be(t)){var i=!0;Ml(n)}else i=!1;if(It(n,l),n.stateNode===null)kl(e,n),wf(n,t,r),Bo(n,t,r,l),r=!0;else if(e===null){var u=n.stateNode,s=n.memoizedProps;u.props=s;var c=u.context,f=t.contextType;typeof f=="object"&&f!==null?f=nn(f):(f=Be(t)?st:Oe.current,f=zt(n,f));var d=t.getDerivedStateFromProps,h=typeof d=="function"||typeof u.getSnapshotBeforeUpdate=="function";h||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(s!==r||c!==f)&&Bs(n,u,r,f),Fn=!1;var g=n.memoizedState;u.state=g,Ul(n,r,u,l),c=n.memoizedState,s!==r||g!==c||He.current||Fn?(typeof d=="function"&&(Ho(n,t,d,r),c=n.memoizedState),(s=Fn||Hs(n,t,s,r,g,c,f))?(h||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=c),u.props=r,u.state=c,u.context=f,r=s):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{u=n.stateNode,Zc(e,n),s=n.memoizedProps,f=n.type===n.elementType?s:on(n.type,s),u.props=f,h=n.pendingProps,g=u.context,c=t.contextType,typeof c=="object"&&c!==null?c=nn(c):(c=Be(t)?st:Oe.current,c=zt(n,c));var x=t.getDerivedStateFromProps;(d=typeof x=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(s!==h||g!==c)&&Bs(n,u,r,c),Fn=!1,g=n.memoizedState,u.state=g,Ul(n,r,u,l);var O=n.memoizedState;s!==h||g!==O||He.current||Fn?(typeof x=="function"&&(Ho(n,t,x,r),O=n.memoizedState),(f=Fn||Hs(n,t,f,r,g,O,c)||!1)?(d||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,O,c),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,O,c)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=O),u.props=r,u.state=O,u.context=c,r=f):(typeof u.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),r=!1)}return Vo(e,n,t,r,i,l)}function Vo(e,n,t,r,l,i){xf(e,n);var u=(n.flags&128)!==0;if(!r&&!u)return l&&Is(n,t,!1),Ln(e,n,i);r=n.stateNode,gh.current=n;var s=u&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&u?(n.child=Dt(n,e.child,null,i),n.child=Dt(n,null,s,i)):Ie(e,n,s,i),n.memoizedState=r.state,l&&Is(n,t,!0),n.child}function Cf(e){var n=e.stateNode;n.pendingContext?Os(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Os(e,n.context,!1),Ou(e,n.containerInfo)}function Gs(e,n,t,r,l){return Ft(),Tu(l),n.flags|=256,Ie(e,n,t,r),n.child}var Qo={dehydrated:null,treeContext:null,retryLane:0};function Ko(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tf(e,n,t){var r=n.pendingProps,l=ae.current,i=!1,u=(n.flags&128)!==0,s;if((s=u)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),re(ae,l&1),e===null)return Wo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(u=r.children,e=r.fallback,i?(r=n.mode,i=n.child,u={mode:"hidden",children:u},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=u):i=oi(u,r,0,null),e=ut(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Ko(t),n.memoizedState=Qo,e):Uu(n,u));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return yh(e,n,u,r,s,l,t);if(i){i=r.fallback,u=n.mode,l=e.child,s=l.sibling;var c={mode:"hidden",children:r.children};return!(u&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=c,n.deletions=null):(r=Gn(l,c),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=Gn(s,i):(i=ut(i,u,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,u=e.child.memoizedState,u=u===null?Ko(t):{baseLanes:u.baseLanes|t,cachePool:null,transitions:u.transitions},i.memoizedState=u,i.childLanes=e.childLanes&~t,n.memoizedState=Qo,r}return i=e.child,e=i.sibling,r=Gn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Uu(e,n){return n=oi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function sl(e,n,t,r){return r!==null&&Tu(r),Dt(n,e.child,null,t),e=Uu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function yh(e,n,t,r,l,i,u){if(t)return n.flags&256?(n.flags&=-257,r=Di(Error(P(422))),sl(e,n,u,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,l=n.mode,r=oi({mode:"visible",children:r.children},l,0,null),i=ut(i,l,u,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&Dt(n,e.child,null,u),n.child.memoizedState=Ko(u),n.memoizedState=Qo,i);if(!(n.mode&1))return sl(e,n,u,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(P(419)),r=Di(i,r,void 0),sl(e,n,u,r)}if(s=(u&e.childLanes)!==0,Ue||s){if(r=_e,r!==null){switch(u&-u){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|u)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,An(e,l),cn(r,e,l,-1))}return Qu(),r=Di(Error(P(421))),sl(e,n,u,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=jh.bind(null,e),l._reactRetry=n,null):(e=i.treeContext,Ve=Vn(l.nextSibling),Qe=n,se=!0,sn=null,e!==null&&(Ze[Je++]=En,Ze[Je++]=xn,Ze[Je++]=at,En=e.id,xn=e.overflow,at=n),n=Uu(n,r.children),n.flags|=4096,n)}function Xs(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Uo(e.return,n,t)}function Wi(e,n,t,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function Nf(e,n,t){var r=n.pendingProps,l=r.revealOrder,i=r.tail;if(Ie(e,n,r.children,t),r=ae.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xs(e,t,n);else if(e.tag===19)Xs(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(re(ae,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Hl(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Wi(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Hl(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Wi(n,!0,t,null,i);break;case"together":Wi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function kl(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ln(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ft|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(P(153));if(n.child!==null){for(e=n.child,t=Gn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Gn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function vh(e,n,t){switch(n.tag){case 3:Cf(n),Ft();break;case 5:Jc(n);break;case 1:Be(n.type)&&Ml(n);break;case 4:Ou(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;re(Dl,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(re(ae,ae.current&1),n.flags|=128,null):t&n.child.childLanes?Tf(e,n,t):(re(ae,ae.current&1),e=Ln(e,n,t),e!==null?e.sibling:null);re(ae,ae.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Nf(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),re(ae,ae.current),r)break;return null;case 22:case 23:return n.lanes=0,Ef(e,n,t)}return Ln(e,n,t)}var Af,qo,Lf,jf;Af=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};qo=function(){};Lf=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,it(wn.current);var i=null;switch(t){case"input":l=go(e,l),r=go(e,r),i=[];break;case"select":l=fe({},l,{value:void 0}),r=fe({},r,{value:void 0}),i=[];break;case"textarea":l=wo(e,l),r=wo(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Il)}ko(t,r);var u;t=null;for(f in l)if(!r.hasOwnProperty(f)&&l.hasOwnProperty(f)&&l[f]!=null)if(f==="style"){var s=l[f];for(u in s)s.hasOwnProperty(u)&&(t||(t={}),t[u]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(yr.hasOwnProperty(f)?i||(i=[]):(i=i||[]).push(f,null));for(f in r){var c=r[f];if(s=l!=null?l[f]:void 0,r.hasOwnProperty(f)&&c!==s&&(c!=null||s!=null))if(f==="style")if(s){for(u in s)!s.hasOwnProperty(u)||c&&c.hasOwnProperty(u)||(t||(t={}),t[u]="");for(u in c)c.hasOwnProperty(u)&&s[u]!==c[u]&&(t||(t={}),t[u]=c[u])}else t||(i||(i=[]),i.push(f,t)),t=c;else f==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(i=i||[]).push(f,c)):f==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(f,""+c):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(yr.hasOwnProperty(f)?(c!=null&&f==="onScroll"&&ie("scroll",e),i||s===c||(i=[])):(i=i||[]).push(f,c))}t&&(i=i||[]).push("style",t);var f=i;(n.updateQueue=f)&&(n.flags|=4)}};jf=function(e,n,t,r){t!==r&&(n.flags|=4)};function tr(e,n){if(!se)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function wh(e,n,t){var r=n.pendingProps;switch(Cu(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(n),null;case 1:return Be(n.type)&&Rl(),Le(n),null;case 3:return r=n.stateNode,Wt(),oe(He),oe(Oe),Ru(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ol(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,sn!==null&&(tu(sn),sn=null))),qo(e,n),Le(n),null;case 5:Iu(n);var l=it(Lr.current);if(t=n.type,e!==null&&n.stateNode!=null)Lf(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(P(166));return Le(n),null}if(e=it(wn.current),ol(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[yn]=n,r[Nr]=i,e=(n.mode&1)!==0,t){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(l=0;l<ur.length;l++)ie(ur[l],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":is(r,i),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ie("invalid",r);break;case"textarea":us(r,i),ie("invalid",r)}ko(t,i),l=null;for(var u in i)if(i.hasOwnProperty(u)){var s=i[u];u==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&il(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&il(r.textContent,s,e),l=["children",""+s]):yr.hasOwnProperty(u)&&s!=null&&u==="onScroll"&&ie("scroll",r)}switch(t){case"input":Zr(r),os(r,i,!0);break;case"textarea":Zr(r),ss(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Il)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{u=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=rc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=u.createElement(t,{is:r.is}):(e=u.createElement(t),t==="select"&&(u=e,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):e=u.createElementNS(e,t),e[yn]=n,e[Nr]=r,Af(e,n,!1,!1),n.stateNode=e;e:{switch(u=So(t,r),t){case"dialog":ie("cancel",e),ie("close",e),l=r;break;case"iframe":case"object":case"embed":ie("load",e),l=r;break;case"video":case"audio":for(l=0;l<ur.length;l++)ie(ur[l],e);l=r;break;case"source":ie("error",e),l=r;break;case"img":case"image":case"link":ie("error",e),ie("load",e),l=r;break;case"details":ie("toggle",e),l=r;break;case"input":is(e,r),l=go(e,r),ie("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=fe({},r,{value:void 0}),ie("invalid",e);break;case"textarea":us(e,r),l=wo(e,r),ie("invalid",e);break;default:l=r}ko(t,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var c=s[i];i==="style"?oc(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&lc(e,c)):i==="children"?typeof c=="string"?(t!=="textarea"||c!=="")&&vr(e,c):typeof c=="number"&&vr(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(yr.hasOwnProperty(i)?c!=null&&i==="onScroll"&&ie("scroll",e):c!=null&&cu(e,i,c,u))}switch(t){case"input":Zr(e),os(e,r,!1);break;case"textarea":Zr(e),ss(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Xn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Lt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Lt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Il)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Le(n),null;case 6:if(e&&n.stateNode!=null)jf(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(P(166));if(t=it(Lr.current),it(wn.current),ol(n)){if(r=n.stateNode,t=n.memoizedProps,r[yn]=n,(i=r.nodeValue!==t)&&(e=Qe,e!==null))switch(e.tag){case 3:il(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&il(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[yn]=n,n.stateNode=r}return Le(n),null;case 13:if(oe(ae),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(se&&Ve!==null&&n.mode&1&&!(n.flags&128))Kc(),Ft(),n.flags|=98560,i=!1;else if(i=ol(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(P(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[yn]=n}else Ft(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Le(n),i=!1}else sn!==null&&(tu(sn),sn=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||ae.current&1?ye===0&&(ye=3):Qu())),n.updateQueue!==null&&(n.flags|=4),Le(n),null);case 4:return Wt(),qo(e,n),e===null&&Cr(n.stateNode.containerInfo),Le(n),null;case 10:return Lu(n.type._context),Le(n),null;case 17:return Be(n.type)&&Rl(),Le(n),null;case 19:if(oe(ae),i=n.memoizedState,i===null)return Le(n),null;if(r=(n.flags&128)!==0,u=i.rendering,u===null)if(r)tr(i,!1);else{if(ye!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(u=Hl(e),u!==null){for(n.flags|=128,tr(i,!1),r=u.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,u=i.alternate,u===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=u.childLanes,i.lanes=u.lanes,i.child=u.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=u.memoizedProps,i.memoizedState=u.memoizedState,i.updateQueue=u.updateQueue,i.type=u.type,e=u.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return re(ae,ae.current&1|2),n.child}e=e.sibling}i.tail!==null&&he()>Ht&&(n.flags|=128,r=!0,tr(i,!1),n.lanes=4194304)}else{if(!r)if(e=Hl(u),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),tr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!se)return Le(n),null}else 2*he()-i.renderingStartTime>Ht&&t!==1073741824&&(n.flags|=128,r=!0,tr(i,!1),n.lanes=4194304);i.isBackwards?(u.sibling=n.child,n.child=u):(t=i.last,t!==null?t.sibling=u:n.child=u,i.last=u)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=he(),n.sibling=null,t=ae.current,re(ae,r?t&1|2:t&1),n):(Le(n),null);case 22:case 23:return Vu(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Ye&1073741824&&(Le(n),n.subtreeFlags&6&&(n.flags|=8192)):Le(n),null;case 24:return null;case 25:return null}throw Error(P(156,n.tag))}function _h(e,n){switch(Cu(n),n.tag){case 1:return Be(n.type)&&Rl(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Wt(),oe(He),oe(Oe),Ru(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Iu(n),null;case 13:if(oe(ae),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(P(340));Ft()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return oe(ae),null;case 4:return Wt(),null;case 10:return Lu(n.type._context),null;case 22:case 23:return Vu(),null;case 24:return null;default:return null}}var al=!1,Pe=!1,kh=typeof WeakSet=="function"?WeakSet:Set,D=null;function Nt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){pe(e,n,r)}else t.current=null}function Go(e,n,t){try{t()}catch(r){pe(e,n,r)}}var Zs=!1;function Sh(e,n){if(Oo=jl,e=Rc(),Eu(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var u=0,s=-1,c=-1,f=0,d=0,h=e,g=null;n:for(;;){for(var x;h!==t||l!==0&&h.nodeType!==3||(s=u+l),h!==i||r!==0&&h.nodeType!==3||(c=u+r),h.nodeType===3&&(u+=h.nodeValue.length),(x=h.firstChild)!==null;)g=h,h=x;for(;;){if(h===e)break n;if(g===t&&++f===l&&(s=u),g===i&&++d===r&&(c=u),(x=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=x}t=s===-1||c===-1?null:{start:s,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(Io={focusedElem:e,selectionRange:t},jl=!1,D=n;D!==null;)if(n=D,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,D=e;else for(;D!==null;){n=D;try{var O=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(O!==null){var L=O.memoizedProps,G=O.memoizedState,y=n.stateNode,p=y.getSnapshotBeforeUpdate(n.elementType===n.type?L:on(n.type,L),G);y.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=n.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(T){pe(n,n.return,T)}if(e=n.sibling,e!==null){e.return=n.return,D=e;break}D=n.return}return O=Zs,Zs=!1,O}function hr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Go(n,t,i)}l=l.next}while(l!==r)}}function li(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Xo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Pf(e){var n=e.alternate;n!==null&&(e.alternate=null,Pf(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[yn],delete n[Nr],delete n[zo],delete n[lh],delete n[ih])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Of(e){return e.tag===5||e.tag===3||e.tag===4}function Js(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Of(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Il));else if(r!==4&&(e=e.child,e!==null))for(Zo(e,n,t),e=e.sibling;e!==null;)Zo(e,n,t),e=e.sibling}function Jo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Jo(e,n,t),e=e.sibling;e!==null;)Jo(e,n,t),e=e.sibling}var Ee=null,un=!1;function Rn(e,n,t){for(t=t.child;t!==null;)If(e,n,t),t=t.sibling}function If(e,n,t){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(Xl,t)}catch{}switch(t.tag){case 5:Pe||Nt(t,n);case 6:var r=Ee,l=un;Ee=null,Rn(e,n,t),Ee=r,un=l,Ee!==null&&(un?(e=Ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Ee.removeChild(t.stateNode));break;case 18:Ee!==null&&(un?(e=Ee,t=t.stateNode,e.nodeType===8?Oi(e.parentNode,t):e.nodeType===1&&Oi(e,t),Sr(e)):Oi(Ee,t.stateNode));break;case 4:r=Ee,l=un,Ee=t.stateNode.containerInfo,un=!0,Rn(e,n,t),Ee=r,un=l;break;case 0:case 11:case 14:case 15:if(!Pe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,u=i.destroy;i=i.tag,u!==void 0&&(i&2||i&4)&&Go(t,n,u),l=l.next}while(l!==r)}Rn(e,n,t);break;case 1:if(!Pe&&(Nt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){pe(t,n,s)}Rn(e,n,t);break;case 21:Rn(e,n,t);break;case 22:t.mode&1?(Pe=(r=Pe)||t.memoizedState!==null,Rn(e,n,t),Pe=r):Rn(e,n,t);break;default:Rn(e,n,t)}}function bs(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new kh),n.forEach(function(r){var l=Ph.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function ln(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=e,u=n,s=u;e:for(;s!==null;){switch(s.tag){case 5:Ee=s.stateNode,un=!1;break e;case 3:Ee=s.stateNode.containerInfo,un=!0;break e;case 4:Ee=s.stateNode.containerInfo,un=!0;break e}s=s.return}if(Ee===null)throw Error(P(160));If(i,u,l),Ee=null,un=!1;var c=l.alternate;c!==null&&(c.return=null),l.return=null}catch(f){pe(l,n,f)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Rf(n,e),n=n.sibling}function Rf(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ln(n,e),mn(e),r&4){try{hr(3,e,e.return),li(3,e)}catch(L){pe(e,e.return,L)}try{hr(5,e,e.return)}catch(L){pe(e,e.return,L)}}break;case 1:ln(n,e),mn(e),r&512&&t!==null&&Nt(t,t.return);break;case 5:if(ln(n,e),mn(e),r&512&&t!==null&&Nt(t,t.return),e.flags&32){var l=e.stateNode;try{vr(l,"")}catch(L){pe(e,e.return,L)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,u=t!==null?t.memoizedProps:i,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&nc(l,i),So(s,u);var f=So(s,i);for(u=0;u<c.length;u+=2){var d=c[u],h=c[u+1];d==="style"?oc(l,h):d==="dangerouslySetInnerHTML"?lc(l,h):d==="children"?vr(l,h):cu(l,d,h,f)}switch(s){case"input":yo(l,i);break;case"textarea":tc(l,i);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Lt(l,!!i.multiple,x,!1):g!==!!i.multiple&&(i.defaultValue!=null?Lt(l,!!i.multiple,i.defaultValue,!0):Lt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Nr]=i}catch(L){pe(e,e.return,L)}}break;case 6:if(ln(n,e),mn(e),r&4){if(e.stateNode===null)throw Error(P(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(L){pe(e,e.return,L)}}break;case 3:if(ln(n,e),mn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Sr(n.containerInfo)}catch(L){pe(e,e.return,L)}break;case 4:ln(n,e),mn(e);break;case 13:ln(n,e),mn(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||($u=he())),r&4&&bs(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(Pe=(f=Pe)||d,ln(n,e),Pe=f):ln(n,e),mn(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!d&&e.mode&1)for(D=e,d=e.child;d!==null;){for(h=D=d;D!==null;){switch(g=D,x=g.child,g.tag){case 0:case 11:case 14:case 15:hr(4,g,g.return);break;case 1:Nt(g,g.return);var O=g.stateNode;if(typeof O.componentWillUnmount=="function"){r=g,t=g.return;try{n=r,O.props=n.memoizedProps,O.state=n.memoizedState,O.componentWillUnmount()}catch(L){pe(r,t,L)}}break;case 5:Nt(g,g.return);break;case 22:if(g.memoizedState!==null){na(h);continue}}x!==null?(x.return=g,D=x):na(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{l=h.stateNode,f?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=h.stateNode,c=h.memoizedProps.style,u=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=ic("display",u))}catch(L){pe(e,e.return,L)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=f?"":h.memoizedProps}catch(L){pe(e,e.return,L)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ln(n,e),mn(e),r&4&&bs(e);break;case 21:break;default:ln(n,e),mn(e)}}function mn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Of(t)){var r=t;break e}t=t.return}throw Error(P(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(vr(l,""),r.flags&=-33);var i=Js(e);Jo(e,i,l);break;case 3:case 4:var u=r.stateNode.containerInfo,s=Js(e);Zo(e,s,u);break;default:throw Error(P(161))}}catch(c){pe(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Eh(e,n,t){D=e,Mf(e)}function Mf(e,n,t){for(var r=(e.mode&1)!==0;D!==null;){var l=D,i=l.child;if(l.tag===22&&r){var u=l.memoizedState!==null||al;if(!u){var s=l.alternate,c=s!==null&&s.memoizedState!==null||Pe;s=al;var f=Pe;if(al=u,(Pe=c)&&!f)for(D=l;D!==null;)u=D,c=u.child,u.tag===22&&u.memoizedState!==null?ta(l):c!==null?(c.return=u,D=c):ta(l);for(;i!==null;)D=i,Mf(i),i=i.sibling;D=l,al=s,Pe=f}ea(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,D=i):ea(e)}}function ea(e){for(;D!==null;){var n=D;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Pe||li(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Pe)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:on(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Ds(n,i,r);break;case 3:var u=n.updateQueue;if(u!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Ds(n,u,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&t.focus();break;case"img":c.src&&(t.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var f=n.alternate;if(f!==null){var d=f.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Sr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Pe||n.flags&512&&Xo(n)}catch(g){pe(n,n.return,g)}}if(n===e){D=null;break}if(t=n.sibling,t!==null){t.return=n.return,D=t;break}D=n.return}}function na(e){for(;D!==null;){var n=D;if(n===e){D=null;break}var t=n.sibling;if(t!==null){t.return=n.return,D=t;break}D=n.return}}function ta(e){for(;D!==null;){var n=D;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{li(4,n)}catch(c){pe(n,t,c)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(c){pe(n,l,c)}}var i=n.return;try{Xo(n)}catch(c){pe(n,i,c)}break;case 5:var u=n.return;try{Xo(n)}catch(c){pe(n,u,c)}}}catch(c){pe(n,n.return,c)}if(n===e){D=null;break}var s=n.sibling;if(s!==null){s.return=n.return,D=s;break}D=n.return}}var xh=Math.ceil,Yl=jn.ReactCurrentDispatcher,Hu=jn.ReactCurrentOwner,en=jn.ReactCurrentBatchConfig,J=0,_e=null,me=null,xe=0,Ye=0,At=bn(0),ye=0,Ir=null,ft=0,ii=0,Bu=0,mr=null,We=null,$u=0,Ht=1/0,kn=null,Vl=!1,bo=null,Kn=null,cl=!1,Hn=null,Ql=0,gr=0,eu=null,Sl=-1,El=0;function Re(){return J&6?he():Sl!==-1?Sl:Sl=he()}function qn(e){return e.mode&1?J&2&&xe!==0?xe&-xe:uh.transition!==null?(El===0&&(El=vc()),El):(e=ee,e!==0||(e=window.event,e=e===void 0?16:Cc(e.type)),e):1}function cn(e,n,t,r){if(50<gr)throw gr=0,eu=null,Error(P(185));Mr(e,t,r),(!(J&2)||e!==_e)&&(e===_e&&(!(J&2)&&(ii|=t),ye===4&&Wn(e,xe)),$e(e,r),t===1&&J===0&&!(n.mode&1)&&(Ht=he()+500,ni&&et()))}function $e(e,n){var t=e.callbackNode;up(e,n);var r=Ll(e,e===_e?xe:0);if(r===0)t!==null&&fs(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&fs(t),n===1)e.tag===0?oh(ra.bind(null,e)):Yc(ra.bind(null,e)),th(function(){!(J&6)&&et()}),t=null;else{switch(wc(r)){case 1:t=mu;break;case 4:t=gc;break;case 16:t=Al;break;case 536870912:t=yc;break;default:t=Al}t=$f(t,zf.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function zf(e,n){if(Sl=-1,El=0,J&6)throw Error(P(327));var t=e.callbackNode;if(Rt()&&e.callbackNode!==t)return null;var r=Ll(e,e===_e?xe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Kl(e,r);else{n=r;var l=J;J|=2;var i=Df();(_e!==e||xe!==n)&&(kn=null,Ht=he()+500,ot(e,n));do try{Nh();break}catch(s){Ff(e,s)}while(!0);Au(),Yl.current=i,J=l,me!==null?n=0:(_e=null,xe=0,n=ye)}if(n!==0){if(n===2&&(l=No(e),l!==0&&(r=l,n=nu(e,l))),n===1)throw t=Ir,ot(e,0),Wn(e,r),$e(e,he()),t;if(n===6)Wn(e,r);else{if(l=e.current.alternate,!(r&30)&&!Ch(l)&&(n=Kl(e,r),n===2&&(i=No(e),i!==0&&(r=i,n=nu(e,i))),n===1))throw t=Ir,ot(e,0),Wn(e,r),$e(e,he()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(P(345));case 2:tt(e,We,kn);break;case 3:if(Wn(e,r),(r&130023424)===r&&(n=$u+500-he(),10<n)){if(Ll(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Re(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Mo(tt.bind(null,e,We,kn),n);break}tt(e,We,kn);break;case 4:if(Wn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var u=31-an(r);i=1<<u,u=n[u],u>l&&(l=u),r&=~i}if(r=l,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xh(r/1960))-r,10<r){e.timeoutHandle=Mo(tt.bind(null,e,We,kn),r);break}tt(e,We,kn);break;case 5:tt(e,We,kn);break;default:throw Error(P(329))}}}return $e(e,he()),e.callbackNode===t?zf.bind(null,e):null}function nu(e,n){var t=mr;return e.current.memoizedState.isDehydrated&&(ot(e,n).flags|=256),e=Kl(e,n),e!==2&&(n=We,We=t,n!==null&&tu(n)),e}function tu(e){We===null?We=e:We.push.apply(We,e)}function Ch(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!fn(i(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Wn(e,n){for(n&=~Bu,n&=~ii,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-an(n),r=1<<t;e[t]=-1,n&=~r}}function ra(e){if(J&6)throw Error(P(327));Rt();var n=Ll(e,0);if(!(n&1))return $e(e,he()),null;var t=Kl(e,n);if(e.tag!==0&&t===2){var r=No(e);r!==0&&(n=r,t=nu(e,r))}if(t===1)throw t=Ir,ot(e,0),Wn(e,n),$e(e,he()),t;if(t===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,tt(e,We,kn),$e(e,he()),null}function Yu(e,n){var t=J;J|=1;try{return e(n)}finally{J=t,J===0&&(Ht=he()+500,ni&&et())}}function dt(e){Hn!==null&&Hn.tag===0&&!(J&6)&&Rt();var n=J;J|=1;var t=en.transition,r=ee;try{if(en.transition=null,ee=1,e)return e()}finally{ee=r,en.transition=t,J=n,!(J&6)&&et()}}function Vu(){Ye=At.current,oe(At)}function ot(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,nh(t)),me!==null)for(t=me.return;t!==null;){var r=t;switch(Cu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Rl();break;case 3:Wt(),oe(He),oe(Oe),Ru();break;case 5:Iu(r);break;case 4:Wt();break;case 13:oe(ae);break;case 19:oe(ae);break;case 10:Lu(r.type._context);break;case 22:case 23:Vu()}t=t.return}if(_e=e,me=e=Gn(e.current,null),xe=Ye=n,ye=0,Ir=null,Bu=ii=ft=0,We=mr=null,lt!==null){for(n=0;n<lt.length;n++)if(t=lt[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var u=i.next;i.next=l,r.next=u}t.pending=r}lt=null}return e}function Ff(e,n){do{var t=me;try{if(Au(),wl.current=$l,Bl){for(var r=ce.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Bl=!1}if(ct=0,we=ge=ce=null,pr=!1,jr=0,Hu.current=null,t===null||t.return===null){ye=1,Ir=n,me=null;break}e:{var i=e,u=t.return,s=t,c=n;if(n=xe,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var f=c,d=s,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=Ys(u);if(x!==null){x.flags&=-257,Vs(x,u,s,i,n),x.mode&1&&$s(i,f,n),n=x,c=f;var O=n.updateQueue;if(O===null){var L=new Set;L.add(c),n.updateQueue=L}else O.add(c);break e}else{if(!(n&1)){$s(i,f,n),Qu();break e}c=Error(P(426))}}else if(se&&s.mode&1){var G=Ys(u);if(G!==null){!(G.flags&65536)&&(G.flags|=256),Vs(G,u,s,i,n),Tu(Ut(c,s));break e}}i=c=Ut(c,s),ye!==4&&(ye=2),mr===null?mr=[i]:mr.push(i),i=u;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var y=_f(i,c,n);Fs(i,y);break e;case 1:s=c;var p=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Kn===null||!Kn.has(m)))){i.flags|=65536,n&=-n,i.lanes|=n;var T=kf(i,s,n);Fs(i,T);break e}}i=i.return}while(i!==null)}Uf(t)}catch(M){n=M,me===t&&t!==null&&(me=t=t.return);continue}break}while(!0)}function Df(){var e=Yl.current;return Yl.current=$l,e===null?$l:e}function Qu(){(ye===0||ye===3||ye===2)&&(ye=4),_e===null||!(ft&268435455)&&!(ii&268435455)||Wn(_e,xe)}function Kl(e,n){var t=J;J|=2;var r=Df();(_e!==e||xe!==n)&&(kn=null,ot(e,n));do try{Th();break}catch(l){Ff(e,l)}while(!0);if(Au(),J=t,Yl.current=r,me!==null)throw Error(P(261));return _e=null,xe=0,ye}function Th(){for(;me!==null;)Wf(me)}function Nh(){for(;me!==null&&!Jd();)Wf(me)}function Wf(e){var n=Bf(e.alternate,e,Ye);e.memoizedProps=e.pendingProps,n===null?Uf(e):me=n,Hu.current=null}function Uf(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=_h(t,n),t!==null){t.flags&=32767,me=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,me=null;return}}else if(t=wh(t,n,Ye),t!==null){me=t;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);ye===0&&(ye=5)}function tt(e,n,t){var r=ee,l=en.transition;try{en.transition=null,ee=1,Ah(e,n,t,r)}finally{en.transition=l,ee=r}return null}function Ah(e,n,t,r){do Rt();while(Hn!==null);if(J&6)throw Error(P(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(sp(e,i),e===_e&&(me=_e=null,xe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||cl||(cl=!0,$f(Al,function(){return Rt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=en.transition,en.transition=null;var u=ee;ee=1;var s=J;J|=4,Hu.current=null,Sh(e,t),Rf(t,e),qp(Io),jl=!!Oo,Io=Oo=null,e.current=t,Eh(t),bd(),J=s,ee=u,en.transition=i}else e.current=t;if(cl&&(cl=!1,Hn=e,Ql=l),i=e.pendingLanes,i===0&&(Kn=null),tp(t.stateNode),$e(e,he()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(Vl)throw Vl=!1,e=bo,bo=null,e;return Ql&1&&e.tag!==0&&Rt(),i=e.pendingLanes,i&1?e===eu?gr++:(gr=0,eu=e):gr=0,et(),null}function Rt(){if(Hn!==null){var e=wc(Ql),n=en.transition,t=ee;try{if(en.transition=null,ee=16>e?16:e,Hn===null)var r=!1;else{if(e=Hn,Hn=null,Ql=0,J&6)throw Error(P(331));var l=J;for(J|=4,D=e.current;D!==null;){var i=D,u=i.child;if(D.flags&16){var s=i.deletions;if(s!==null){for(var c=0;c<s.length;c++){var f=s[c];for(D=f;D!==null;){var d=D;switch(d.tag){case 0:case 11:case 15:hr(8,d,i)}var h=d.child;if(h!==null)h.return=d,D=h;else for(;D!==null;){d=D;var g=d.sibling,x=d.return;if(Pf(d),d===f){D=null;break}if(g!==null){g.return=x,D=g;break}D=x}}}var O=i.alternate;if(O!==null){var L=O.child;if(L!==null){O.child=null;do{var G=L.sibling;L.sibling=null,L=G}while(L!==null)}}D=i}}if(i.subtreeFlags&2064&&u!==null)u.return=i,D=u;else e:for(;D!==null;){if(i=D,i.flags&2048)switch(i.tag){case 0:case 11:case 15:hr(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,D=y;break e}D=i.return}}var p=e.current;for(D=p;D!==null;){u=D;var m=u.child;if(u.subtreeFlags&2064&&m!==null)m.return=u,D=m;else e:for(u=p;D!==null;){if(s=D,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:li(9,s)}}catch(M){pe(s,s.return,M)}if(s===u){D=null;break e}var T=s.sibling;if(T!==null){T.return=s.return,D=T;break e}D=s.return}}if(J=l,et(),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(Xl,e)}catch{}r=!0}return r}finally{ee=t,en.transition=n}}return!1}function la(e,n,t){n=Ut(t,n),n=_f(e,n,1),e=Qn(e,n,1),n=Re(),e!==null&&(Mr(e,1,n),$e(e,n))}function pe(e,n,t){if(e.tag===3)la(e,e,t);else for(;n!==null;){if(n.tag===3){la(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kn===null||!Kn.has(r))){e=Ut(t,e),e=kf(n,e,1),n=Qn(n,e,1),e=Re(),n!==null&&(Mr(n,1,e),$e(n,e));break}}n=n.return}}function Lh(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Re(),e.pingedLanes|=e.suspendedLanes&t,_e===e&&(xe&t)===t&&(ye===4||ye===3&&(xe&130023424)===xe&&500>he()-$u?ot(e,0):Bu|=t),$e(e,n)}function Hf(e,n){n===0&&(e.mode&1?(n=el,el<<=1,!(el&130023424)&&(el=4194304)):n=1);var t=Re();e=An(e,n),e!==null&&(Mr(e,n,t),$e(e,t))}function jh(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Hf(e,t)}function Ph(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(n),Hf(e,t)}var Bf;Bf=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||He.current)Ue=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ue=!1,vh(e,n,t);Ue=!!(e.flags&131072)}else Ue=!1,se&&n.flags&1048576&&Vc(n,Fl,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;kl(e,n),e=n.pendingProps;var l=zt(n,Oe.current);It(n,t),l=zu(null,n,r,e,l,t);var i=Fu();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Be(r)?(i=!0,Ml(n)):i=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Pu(n),l.updater=ri,n.stateNode=l,l._reactInternals=n,Bo(n,r,e,t),n=Vo(null,n,r,!0,i,t)):(n.tag=0,se&&i&&xu(n),Ie(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(kl(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=Ih(r),e=on(r,e),l){case 0:n=Yo(null,n,r,e,t);break e;case 1:n=qs(null,n,r,e,t);break e;case 11:n=Qs(null,n,r,e,t);break e;case 14:n=Ks(null,n,r,on(r.type,e),t);break e}throw Error(P(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:on(r,l),Yo(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:on(r,l),qs(e,n,r,l,t);case 3:e:{if(Cf(n),e===null)throw Error(P(387));r=n.pendingProps,i=n.memoizedState,l=i.element,Zc(e,n),Ul(n,r,null,t);var u=n.memoizedState;if(r=u.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){l=Ut(Error(P(423)),n),n=Gs(e,n,r,t,l);break e}else if(r!==l){l=Ut(Error(P(424)),n),n=Gs(e,n,r,t,l);break e}else for(Ve=Vn(n.stateNode.containerInfo.firstChild),Qe=n,se=!0,sn=null,t=Gc(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ft(),r===l){n=Ln(e,n,t);break e}Ie(e,n,r,t)}n=n.child}return n;case 5:return Jc(n),e===null&&Wo(n),r=n.type,l=n.pendingProps,i=e!==null?e.memoizedProps:null,u=l.children,Ro(r,l)?u=null:i!==null&&Ro(r,i)&&(n.flags|=32),xf(e,n),Ie(e,n,u,t),n.child;case 6:return e===null&&Wo(n),null;case 13:return Tf(e,n,t);case 4:return Ou(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Dt(n,null,r,t):Ie(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:on(r,l),Qs(e,n,r,l,t);case 7:return Ie(e,n,n.pendingProps,t),n.child;case 8:return Ie(e,n,n.pendingProps.children,t),n.child;case 12:return Ie(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,i=n.memoizedProps,u=l.value,re(Dl,r._currentValue),r._currentValue=u,i!==null)if(fn(i.value,u)){if(i.children===l.children&&!He.current){n=Ln(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var s=i.dependencies;if(s!==null){u=i.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Cn(-1,t&-t),c.tag=2;var f=i.updateQueue;if(f!==null){f=f.shared;var d=f.pending;d===null?c.next=c:(c.next=d.next,d.next=c),f.pending=c}}i.lanes|=t,c=i.alternate,c!==null&&(c.lanes|=t),Uo(i.return,t,n),s.lanes|=t;break}c=c.next}}else if(i.tag===10)u=i.type===n.type?null:i.child;else if(i.tag===18){if(u=i.return,u===null)throw Error(P(341));u.lanes|=t,s=u.alternate,s!==null&&(s.lanes|=t),Uo(u,t,n),u=i.sibling}else u=i.child;if(u!==null)u.return=i;else for(u=i;u!==null;){if(u===n){u=null;break}if(i=u.sibling,i!==null){i.return=u.return,u=i;break}u=u.return}i=u}Ie(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,It(n,t),l=nn(l),r=r(l),n.flags|=1,Ie(e,n,r,t),n.child;case 14:return r=n.type,l=on(r,n.pendingProps),l=on(r.type,l),Ks(e,n,r,l,t);case 15:return Sf(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:on(r,l),kl(e,n),n.tag=1,Be(r)?(e=!0,Ml(n)):e=!1,It(n,t),wf(n,r,l),Bo(n,r,l,t),Vo(null,n,r,!0,e,t);case 19:return Nf(e,n,t);case 22:return Ef(e,n,t)}throw Error(P(156,n.tag))};function $f(e,n){return mc(e,n)}function Oh(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(e,n,t,r){return new Oh(e,n,t,r)}function Ku(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ih(e){if(typeof e=="function")return Ku(e)?1:0;if(e!=null){if(e=e.$$typeof,e===du)return 11;if(e===pu)return 14}return 2}function Gn(e,n){var t=e.alternate;return t===null?(t=be(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function xl(e,n,t,r,l,i){var u=2;if(r=e,typeof e=="function")Ku(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case vt:return ut(t.children,l,i,n);case fu:u=8,l|=8;break;case fo:return e=be(12,t,n,l|2),e.elementType=fo,e.lanes=i,e;case po:return e=be(13,t,n,l),e.elementType=po,e.lanes=i,e;case ho:return e=be(19,t,n,l),e.elementType=ho,e.lanes=i,e;case Ja:return oi(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xa:u=10;break e;case Za:u=9;break e;case du:u=11;break e;case pu:u=14;break e;case zn:u=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return n=be(u,t,n,l),n.elementType=e,n.type=r,n.lanes=i,n}function ut(e,n,t,r){return e=be(7,e,r,n),e.lanes=t,e}function oi(e,n,t,r){return e=be(22,e,r,n),e.elementType=Ja,e.lanes=t,e.stateNode={isHidden:!1},e}function Ui(e,n,t){return e=be(6,e,null,n),e.lanes=t,e}function Hi(e,n,t){return n=be(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Rh(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ki(0),this.expirationTimes=ki(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ki(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function qu(e,n,t,r,l,i,u,s,c){return e=new Rh(e,n,t,s,c),n===1?(n=1,i===!0&&(n|=8)):n=0,i=be(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pu(i),e}function Mh(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Yf(e){if(!e)return Zn;e=e._reactInternals;e:{if(ht(e)!==e||e.tag!==1)throw Error(P(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Be(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(P(171))}if(e.tag===1){var t=e.type;if(Be(t))return $c(e,t,n)}return n}function Vf(e,n,t,r,l,i,u,s,c){return e=qu(t,r,!0,e,l,i,u,s,c),e.context=Yf(null),t=e.current,r=Re(),l=qn(t),i=Cn(r,l),i.callback=n??null,Qn(t,i,l),e.current.lanes=l,Mr(e,l,r),$e(e,r),e}function ui(e,n,t,r){var l=n.current,i=Re(),u=qn(l);return t=Yf(t),n.context===null?n.context=t:n.pendingContext=t,n=Cn(i,u),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Qn(l,n,u),e!==null&&(cn(e,l,u,i),vl(e,l,u)),u}function ql(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ia(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Gu(e,n){ia(e,n),(e=e.alternate)&&ia(e,n)}function zh(){return null}var Qf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xu(e){this._internalRoot=e}si.prototype.render=Xu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(P(409));ui(e,n,null,null)};si.prototype.unmount=Xu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;dt(function(){ui(null,e,null,null)}),n[Nn]=null}};function si(e){this._internalRoot=e}si.prototype.unstable_scheduleHydration=function(e){if(e){var n=Sc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Dn.length&&n!==0&&n<Dn[t].priority;t++);Dn.splice(t,0,e),t===0&&xc(e)}};function Zu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ai(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function oa(){}function Fh(e,n,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var f=ql(u);i.call(f)}}var u=Vf(n,r,e,0,null,!1,!1,"",oa);return e._reactRootContainer=u,e[Nn]=u.current,Cr(e.nodeType===8?e.parentNode:e),dt(),u}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var f=ql(c);s.call(f)}}var c=qu(e,0,!1,null,null,!1,!1,"",oa);return e._reactRootContainer=c,e[Nn]=c.current,Cr(e.nodeType===8?e.parentNode:e),dt(function(){ui(n,c,t,r)}),c}function ci(e,n,t,r,l){var i=t._reactRootContainer;if(i){var u=i;if(typeof l=="function"){var s=l;l=function(){var c=ql(u);s.call(c)}}ui(n,u,e,l)}else u=Fh(t,n,e,l,r);return ql(u)}_c=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=or(n.pendingLanes);t!==0&&(gu(n,t|1),$e(n,he()),!(J&6)&&(Ht=he()+500,et()))}break;case 13:dt(function(){var r=An(e,1);if(r!==null){var l=Re();cn(r,e,1,l)}}),Gu(e,1)}};yu=function(e){if(e.tag===13){var n=An(e,134217728);if(n!==null){var t=Re();cn(n,e,134217728,t)}Gu(e,134217728)}};kc=function(e){if(e.tag===13){var n=qn(e),t=An(e,n);if(t!==null){var r=Re();cn(t,e,n,r)}Gu(e,n)}};Sc=function(){return ee};Ec=function(e,n){var t=ee;try{return ee=e,n()}finally{ee=t}};xo=function(e,n,t){switch(n){case"input":if(yo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=ei(r);if(!l)throw Error(P(90));ec(r),yo(r,l)}}}break;case"textarea":tc(e,t);break;case"select":n=t.value,n!=null&&Lt(e,!!t.multiple,n,!1)}};ac=Yu;cc=dt;var Dh={usingClientEntryPoint:!1,Events:[Fr,St,ei,uc,sc,Yu]},rr={findFiberByHostInstance:rt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wh={bundleType:rr.bundleType,version:rr.version,rendererPackageName:rr.rendererPackageName,rendererConfig:rr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pc(e),e===null?null:e.stateNode},findFiberByHostInstance:rr.findFiberByHostInstance||zh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{Xl=fl.inject(Wh),vn=fl}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dh;qe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zu(n))throw Error(P(200));return Mh(e,n,null,t)};qe.createRoot=function(e,n){if(!Zu(e))throw Error(P(299));var t=!1,r="",l=Qf;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=qu(e,1,!1,null,null,t,!1,r,l),e[Nn]=n.current,Cr(e.nodeType===8?e.parentNode:e),new Xu(n)};qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=pc(n),e=e===null?null:e.stateNode,e};qe.flushSync=function(e){return dt(e)};qe.hydrate=function(e,n,t){if(!ai(n))throw Error(P(200));return ci(null,e,n,!0,t)};qe.hydrateRoot=function(e,n,t){if(!Zu(e))throw Error(P(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",u=Qf;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),n=Vf(n,null,e,1,t??null,l,!1,i,u),e[Nn]=n.current,Cr(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new si(n)};qe.render=function(e,n,t){if(!ai(n))throw Error(P(200));return ci(null,e,n,!1,t)};qe.unmountComponentAtNode=function(e){if(!ai(e))throw Error(P(40));return e._reactRootContainer?(dt(function(){ci(null,null,e,!1,function(){e._reactRootContainer=null,e[Nn]=null})}),!0):!1};qe.unstable_batchedUpdates=Yu;qe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ai(t))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return ci(e,n,t,!1,r)};qe.version="18.3.1-next-f1338f8080-20240426";function Kf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kf)}catch(e){console.error(e)}}Kf(),Qa.exports=qe;var Uh=Qa.exports,qf,ua=Uh;qf=ua.createRoot,ua.hydrateRoot;function Hh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var je={},dl={},Mn={},sa;function Wr(){if(sa)return Mn;sa=1;function e(u){return typeof u>"u"||u===null}function n(u){return typeof u=="object"&&u!==null}function t(u){return Array.isArray(u)?u:e(u)?[]:[u]}function r(u,s){if(s){const c=Object.keys(s);for(let f=0,d=c.length;f<d;f+=1){const h=c[f];u[h]=s[h]}}return u}function l(u,s){let c="";for(let f=0;f<s;f+=1)c+=u;return c}function i(u){return u===0&&Number.NEGATIVE_INFINITY===1/u}return Mn.isNothing=e,Mn.isObject=n,Mn.toArray=t,Mn.repeat=l,Mn.isNegativeZero=i,Mn.extend=r,Mn}var Bi,aa;function Ur(){if(aa)return Bi;aa=1;function e(t,r){let l="";const i=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(l+='in "'+t.mark.name+'" '),l+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!r&&t.mark.snippet&&(l+=`

`+t.mark.snippet),i+" "+l):i}function n(t,r){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=r,this.message=e(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n.prototype.toString=function(r){return this.name+": "+e(this,r)},Bi=n,Bi}var $i,ca;function Bh(){if(ca)return $i;ca=1;const e=Wr();function n(l,i,u,s,c){let f="",d="";const h=Math.floor(c/2)-1;return s-i>h&&(f=" ... ",i=s-h+f.length),u-s>h&&(d=" ...",u=s+h-d.length),{str:f+l.slice(i,u).replace(/\t/g,"→")+d,pos:s-i+f.length}}function t(l,i){return e.repeat(" ",i-l.length)+l}function r(l,i){if(i=Object.create(i||null),!l.buffer)return null;i.maxLength||(i.maxLength=79),typeof i.indent!="number"&&(i.indent=1),typeof i.linesBefore!="number"&&(i.linesBefore=3),typeof i.linesAfter!="number"&&(i.linesAfter=2);const u=/\r?\n|\r|\0/g,s=[0],c=[];let f,d=-1;for(;f=u.exec(l.buffer);)c.push(f.index),s.push(f.index+f[0].length),l.position<=f.index&&d<0&&(d=s.length-2);d<0&&(d=s.length-1);let h="";const g=Math.min(l.line+i.linesAfter,c.length).toString().length,x=i.maxLength-(i.indent+g+3);for(let L=1;L<=i.linesBefore&&!(d-L<0);L++){const G=n(l.buffer,s[d-L],c[d-L],l.position-(s[d]-s[d-L]),x);h=e.repeat(" ",i.indent)+t((l.line-L+1).toString(),g)+" | "+G.str+`
`+h}const O=n(l.buffer,s[d],c[d],l.position,x);h+=e.repeat(" ",i.indent)+t((l.line+1).toString(),g)+" | "+O.str+`
`,h+=e.repeat("-",i.indent+g+3+O.pos)+`^
`;for(let L=1;L<=i.linesAfter&&!(d+L>=c.length);L++){const G=n(l.buffer,s[d+L],c[d+L],l.position-(s[d]-s[d+L]),x);h+=e.repeat(" ",i.indent)+t((l.line+L+1).toString(),g)+" | "+G.str+`
`}return h.replace(/\n$/,"")}return $i=r,$i}var Yi,fa;function Fe(){if(fa)return Yi;fa=1;const e=Ur(),n=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],t=["scalar","sequence","mapping"];function r(i){const u={};return i!==null&&Object.keys(i).forEach(function(s){i[s].forEach(function(c){u[String(c)]=s})}),u}function l(i,u){if(u=u||{},Object.keys(u).forEach(function(s){if(n.indexOf(s)===-1)throw new e('Unknown option "'+s+'" is met in definition of "'+i+'" YAML type.')}),this.options=u,this.tag=i,this.kind=u.kind||null,this.resolve=u.resolve||function(){return!0},this.construct=u.construct||function(s){return s},this.instanceOf=u.instanceOf||null,this.predicate=u.predicate||null,this.represent=u.represent||null,this.representName=u.representName||null,this.defaultStyle=u.defaultStyle||null,this.multi=u.multi||!1,this.styleAliases=r(u.styleAliases||null),t.indexOf(this.kind)===-1)throw new e('Unknown kind "'+this.kind+'" is specified for "'+i+'" YAML type.')}return Yi=l,Yi}var Vi,da;function Gf(){if(da)return Vi;da=1;const e=Ur(),n=Fe();function t(i,u){const s=[];return i[u].forEach(function(c){let f=s.length;s.forEach(function(d,h){d.tag===c.tag&&d.kind===c.kind&&d.multi===c.multi&&(f=h)}),s[f]=c}),s}function r(){const i={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function u(s){s.multi?(i.multi[s.kind].push(s),i.multi.fallback.push(s)):i[s.kind][s.tag]=i.fallback[s.tag]=s}for(let s=0,c=arguments.length;s<c;s+=1)arguments[s].forEach(u);return i}function l(i){return this.extend(i)}return l.prototype.extend=function(u){let s=[],c=[];if(u instanceof n)c.push(u);else if(Array.isArray(u))c=c.concat(u);else if(u&&(Array.isArray(u.implicit)||Array.isArray(u.explicit)))u.implicit&&(s=s.concat(u.implicit)),u.explicit&&(c=c.concat(u.explicit));else throw new e("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(d){if(!(d instanceof n))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(d.loadKind&&d.loadKind!=="scalar")throw new e("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(d.multi)throw new e("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),c.forEach(function(d){if(!(d instanceof n))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.")});const f=Object.create(l.prototype);return f.implicit=(this.implicit||[]).concat(s),f.explicit=(this.explicit||[]).concat(c),f.compiledImplicit=t(f,"implicit"),f.compiledExplicit=t(f,"explicit"),f.compiledTypeMap=r(f.compiledImplicit,f.compiledExplicit),f},Vi=l,Vi}var Qi,pa;function Xf(){if(pa)return Qi;pa=1;const e=Fe();return Qi=new e("tag:yaml.org,2002:str",{kind:"scalar",construct:function(n){return n!==null?n:""}}),Qi}var Ki,ha;function Zf(){if(ha)return Ki;ha=1;const e=Fe();return Ki=new e("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(n){return n!==null?n:[]}}),Ki}var qi,ma;function Jf(){if(ma)return qi;ma=1;const e=Fe();return qi=new e("tag:yaml.org,2002:map",{kind:"mapping",construct:function(n){return n!==null?n:{}}}),qi}var Gi,ga;function bf(){if(ga)return Gi;ga=1;const e=Gf();return Gi=new e({explicit:[Xf(),Zf(),Jf()]}),Gi}var Xi,ya;function ed(){if(ya)return Xi;ya=1;const e=Fe();function n(l){if(l===null)return!0;const i=l.length;return i===1&&l==="~"||i===4&&(l==="null"||l==="Null"||l==="NULL")}function t(){return null}function r(l){return l===null}return Xi=new e("tag:yaml.org,2002:null",{kind:"scalar",resolve:n,construct:t,predicate:r,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),Xi}var Zi,va;function nd(){if(va)return Zi;va=1;const e=Fe();function n(l){if(l===null)return!1;const i=l.length;return i===4&&(l==="true"||l==="True"||l==="TRUE")||i===5&&(l==="false"||l==="False"||l==="FALSE")}function t(l){return l==="true"||l==="True"||l==="TRUE"}function r(l){return Object.prototype.toString.call(l)==="[object Boolean]"}return Zi=new e("tag:yaml.org,2002:bool",{kind:"scalar",resolve:n,construct:t,predicate:r,represent:{lowercase:function(l){return l?"true":"false"},uppercase:function(l){return l?"TRUE":"FALSE"},camelcase:function(l){return l?"True":"False"}},defaultStyle:"lowercase"}),Zi}var Ji,wa;function td(){if(wa)return Ji;wa=1;const e=Wr(),n=Fe();function t(f){return f>=48&&f<=57||f>=65&&f<=70||f>=97&&f<=102}function r(f){return f>=48&&f<=55}function l(f){return f>=48&&f<=57}function i(f){if(f===null)return!1;const d=f.length;let h=0,g=!1;if(!d)return!1;let x=f[h];if((x==="-"||x==="+")&&(x=f[++h]),x==="0"){if(h+1===d)return!0;if(x=f[++h],x==="b"){for(h++;h<d;h++){if(x=f[h],x!=="0"&&x!=="1")return!1;g=!0}return g&&isFinite(u(f))}if(x==="x"){for(h++;h<d;h++){if(!t(f.charCodeAt(h)))return!1;g=!0}return g&&isFinite(u(f))}if(x==="o"){for(h++;h<d;h++){if(!r(f.charCodeAt(h)))return!1;g=!0}return g&&isFinite(u(f))}}for(;h<d;h++){if(!l(f.charCodeAt(h)))return!1;g=!0}return g?isFinite(u(f)):!1}function u(f){let d=f,h=1,g=d[0];if((g==="-"||g==="+")&&(g==="-"&&(h=-1),d=d.slice(1),g=d[0]),d==="0")return 0;if(g==="0"){if(d[1]==="b")return h*parseInt(d.slice(2),2);if(d[1]==="x")return h*parseInt(d.slice(2),16);if(d[1]==="o")return h*parseInt(d.slice(2),8)}return h*parseInt(d,10)}function s(f){return u(f)}function c(f){return Object.prototype.toString.call(f)==="[object Number]"&&f%1===0&&!e.isNegativeZero(f)}return Ji=new n("tag:yaml.org,2002:int",{kind:"scalar",resolve:i,construct:s,predicate:c,represent:{binary:function(f){return f>=0?"0b"+f.toString(2):"-0b"+f.toString(2).slice(1)},octal:function(f){return f>=0?"0o"+f.toString(8):"-0o"+f.toString(8).slice(1)},decimal:function(f){return f.toString(10)},hexadecimal:function(f){return f>=0?"0x"+f.toString(16).toUpperCase():"-0x"+f.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Ji}var bi,_a;function rd(){if(_a)return bi;_a=1;const e=Wr(),n=Fe(),t=new RegExp("^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),r=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function l(f){return f===null||!t.test(f)?!1:isFinite(parseFloat(f,10))?!0:r.test(f)}function i(f){let d=f.toLowerCase();const h=d[0]==="-"?-1:1;return"+-".indexOf(d[0])>=0&&(d=d.slice(1)),d===".inf"?h===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:d===".nan"?NaN:h*parseFloat(d,10)}const u=/^[-+]?[0-9]+e/;function s(f,d){if(isNaN(f))switch(d){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===f)switch(d){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===f)switch(d){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(e.isNegativeZero(f))return"-0.0";const h=f.toString(10);return u.test(h)?h.replace("e",".e"):h}function c(f){return Object.prototype.toString.call(f)==="[object Number]"&&(f%1!==0||e.isNegativeZero(f))}return bi=new n("tag:yaml.org,2002:float",{kind:"scalar",resolve:l,construct:i,predicate:c,represent:s,defaultStyle:"lowercase"}),bi}var eo,ka;function ld(){return ka||(ka=1,eo=bf().extend({implicit:[ed(),nd(),td(),rd()]})),eo}var no,Sa;function id(){return Sa||(Sa=1,no=ld()),no}var to,Ea;function od(){if(Ea)return to;Ea=1;const e=Fe(),n=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),t=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function r(u){return u===null?!1:n.exec(u)!==null||t.exec(u)!==null}function l(u){let s=0,c=null,f=n.exec(u);if(f===null&&(f=t.exec(u)),f===null)throw new Error("Date resolve error");const d=+f[1],h=+f[2]-1,g=+f[3];if(!f[4])return new Date(Date.UTC(d,h,g));const x=+f[4],O=+f[5],L=+f[6];if(f[7]){for(s=f[7].slice(0,3);s.length<3;)s+="0";s=+s}if(f[9]){const y=+f[10],p=+(f[11]||0);c=(y*60+p)*6e4,f[9]==="-"&&(c=-c)}const G=new Date(Date.UTC(d,h,g,x,O,L,s));return c&&G.setTime(G.getTime()-c),G}function i(u){return u.toISOString()}return to=new e("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:r,construct:l,instanceOf:Date,represent:i}),to}var ro,xa;function ud(){if(xa)return ro;xa=1;const e=Fe();function n(t){return t==="<<"||t===null}return ro=new e("tag:yaml.org,2002:merge",{kind:"scalar",resolve:n}),ro}var lo,Ca;function sd(){if(Ca)return lo;Ca=1;const e=Fe(),n=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function t(u){if(u===null)return!1;let s=0;const c=u.length,f=n;for(let d=0;d<c;d++){const h=f.indexOf(u.charAt(d));if(!(h>64)){if(h<0)return!1;s+=6}}return s%8===0}function r(u){const s=u.replace(/[\r\n=]/g,""),c=s.length,f=n;let d=0;const h=[];for(let x=0;x<c;x++)x%4===0&&x&&(h.push(d>>16&255),h.push(d>>8&255),h.push(d&255)),d=d<<6|f.indexOf(s.charAt(x));const g=c%4*6;return g===0?(h.push(d>>16&255),h.push(d>>8&255),h.push(d&255)):g===18?(h.push(d>>10&255),h.push(d>>2&255)):g===12&&h.push(d>>4&255),new Uint8Array(h)}function l(u){let s="",c=0;const f=u.length,d=n;for(let g=0;g<f;g++)g%3===0&&g&&(s+=d[c>>18&63],s+=d[c>>12&63],s+=d[c>>6&63],s+=d[c&63]),c=(c<<8)+u[g];const h=f%3;return h===0?(s+=d[c>>18&63],s+=d[c>>12&63],s+=d[c>>6&63],s+=d[c&63]):h===2?(s+=d[c>>10&63],s+=d[c>>4&63],s+=d[c<<2&63],s+=d[64]):h===1&&(s+=d[c>>2&63],s+=d[c<<4&63],s+=d[64],s+=d[64]),s}function i(u){return Object.prototype.toString.call(u)==="[object Uint8Array]"}return lo=new e("tag:yaml.org,2002:binary",{kind:"scalar",resolve:t,construct:r,predicate:i,represent:l}),lo}var io,Ta;function ad(){if(Ta)return io;Ta=1;const e=Fe(),n=Object.prototype.hasOwnProperty,t=Object.prototype.toString;function r(i){if(i===null)return!0;const u={},s=i;for(let c=0,f=s.length;c<f;c+=1){const d=s[c];let h=!1;if(t.call(d)!=="[object Object]")return!1;let g;for(g in d)if(n.call(d,g))if(!h)h=!0;else return!1;if(!h||n.call(u,g))return!1;Object.defineProperty(u,g,{value:!0})}return!0}function l(i){return i!==null?i:[]}return io=new e("tag:yaml.org,2002:omap",{kind:"sequence",resolve:r,construct:l}),io}var oo,Na;function cd(){if(Na)return oo;Na=1;const e=Fe(),n=Object.prototype.toString;function t(l){if(l===null)return!0;const i=l,u=new Array(i.length);for(let s=0,c=i.length;s<c;s+=1){const f=i[s];if(n.call(f)!=="[object Object]")return!1;const d=Object.keys(f);if(d.length!==1)return!1;u[s]=[d[0],f[d[0]]]}return!0}function r(l){if(l===null)return[];const i=l,u=new Array(i.length);for(let s=0,c=i.length;s<c;s+=1){const f=i[s],d=Object.keys(f);u[s]=[d[0],f[d[0]]]}return u}return oo=new e("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:t,construct:r}),oo}var uo,Aa;function fd(){if(Aa)return uo;Aa=1;const e=Fe(),n=Object.prototype.hasOwnProperty;function t(l){if(l===null)return!0;const i=l;for(const u in i)if(n.call(i,u)&&i[u]!==null)return!1;return!0}function r(l){return l!==null?l:{}}return uo=new e("tag:yaml.org,2002:set",{kind:"mapping",resolve:t,construct:r}),uo}var so,La;function Ju(){return La||(La=1,so=id().extend({implicit:[od(),ud()],explicit:[sd(),ad(),cd(),fd()]})),so}var ja;function $h(){if(ja)return dl;ja=1;const e=Wr(),n=Ur(),t=Bh(),r=Ju(),l=Object.prototype.hasOwnProperty,i=1,u=2,s=3,c=4,f=1,d=2,h=3,g=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,x=/[\x85\u2028\u2029]/,O=/[,\[\]{}]/,L=/^(?:!|!!|![0-9A-Za-z-]+!)$/,G=/^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;function y(o){return Object.prototype.toString.call(o)}function p(o){return o===10||o===13}function m(o){return o===9||o===32}function T(o){return o===9||o===32||o===10||o===13}function M(o){return o===44||o===91||o===93||o===123||o===125}function U(o){if(o>=48&&o<=57)return o-48;const v=o|32;return v>=97&&v<=102?v-97+10:-1}function W(o){return o===120?2:o===117?4:o===85?8:0}function B(o){return o>=48&&o<=57?o-48:-1}function b(o){switch(o){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"";case 95:return" ";case 76:return"\u2028";case 80:return"\u2029";default:return""}}function Y(o){return o<=65535?String.fromCharCode(o):String.fromCharCode((o-65536>>10)+55296,(o-65536&1023)+56320)}function ne(o,v,E){v==="__proto__"?Object.defineProperty(o,v,{configurable:!0,enumerable:!0,writable:!0,value:E}):o[v]=E}const ve=new Array(256),Te=new Array(256);for(let o=0;o<256;o++)ve[o]=b(o)?1:0,Te[o]=b(o);function te(o,v){this.input=o,this.filename=v.filename||null,this.schema=v.schema||r,this.onWarning=v.onWarning||null,this.legacy=v.legacy||!1,this.json=v.json||!1,this.listener=v.listener||null,this.maxDepth=typeof v.maxDepth=="number"?v.maxDepth:100,this.maxTotalMergeKeys=typeof v.maxTotalMergeKeys=="number"?v.maxTotalMergeKeys:1e4,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=o.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.depth=0,this.totalMergeKeys=0,this.firstTabInLine=-1,this.documents=[],this.anchorMapTransactions=[]}function De(o,v){const E={name:o.filename,buffer:o.input.slice(0,-1),position:o.position,line:o.line,column:o.position-o.lineStart};return E.snippet=t(E),new n(v,E)}function F(o,v){throw De(o,v)}function dn(o,v){o.onWarning&&o.onWarning.call(null,De(o,v))}function z(o,v,E){const C=o.anchorMapTransactions;if(C.length!==0){const k=C[C.length-1];l.call(k,v)||(k[v]={existed:l.call(o.anchorMap,v),value:o.anchorMap[v]})}o.anchorMap[v]=E}function K(o){o.anchorMapTransactions.push(Object.create(null))}function Q(o){const v=o.anchorMapTransactions.pop(),E=o.anchorMapTransactions;if(E.length===0)return;const C=E[E.length-1],k=Object.keys(v);for(let a=0,w=k.length;a<w;a+=1){const _=k[a];l.call(C,_)||(C[_]=v[_])}}function le(o){const v=o.anchorMapTransactions.pop(),E=Object.keys(v);for(let C=E.length-1;C>=0;C-=1){const k=v[E[C]];k.existed?o.anchorMap[E[C]]=k.value:delete o.anchorMap[E[C]]}}function ue(o){return{position:o.position,line:o.line,lineStart:o.lineStart,lineIndent:o.lineIndent,firstTabInLine:o.firstTabInLine,tag:o.tag,anchor:o.anchor,kind:o.kind,result:o.result}}function rn(o,v){o.position=v.position,o.line=v.line,o.lineStart=v.lineStart,o.lineIndent=v.lineIndent,o.firstTabInLine=v.firstTabInLine,o.tag=v.tag,o.anchor=v.anchor,o.kind=v.kind,o.result=v.result}const Xe={YAML:function(v,E,C){v.version!==null&&F(v,"duplication of %YAML directive"),C.length!==1&&F(v,"YAML directive accepts exactly one argument");const k=/^([0-9]+)\.([0-9]+)$/.exec(C[0]);k===null&&F(v,"ill-formed argument of the YAML directive");const a=parseInt(k[1],10),w=parseInt(k[2],10);a!==1&&F(v,"unacceptable YAML version of the document"),v.version=C[0],v.checkLineBreaks=w<2,w!==1&&w!==2&&dn(v,"unsupported YAML version of the document")},TAG:function(v,E,C){let k;C.length!==2&&F(v,"TAG directive accepts exactly two arguments");const a=C[0];k=C[1],L.test(a)||F(v,"ill-formed tag handle (first argument) of the TAG directive"),l.call(v.tagMap,a)&&F(v,'there is a previously declared suffix for "'+a+'" tag handle'),G.test(k)||F(v,"ill-formed tag prefix (second argument) of the TAG directive");try{k=decodeURIComponent(k)}catch{F(v,"tag prefix is malformed: "+k)}v.tagMap[a]=k}};function ke(o,v,E,C){if(v<E){const k=o.input.slice(v,E);if(C)for(let a=0,w=k.length;a<w;a+=1){const _=k.charCodeAt(a);_===9||_>=32&&_<=1114111||F(o,"expected valid JSON character")}else g.test(k)&&F(o,"the stream contains non-printable characters");o.result+=k}}function Ne(o){o.totalMergeKeys++,o.maxTotalMergeKeys!==-1&&o.totalMergeKeys>o.maxTotalMergeKeys&&F(o,"merge keys exceeded maxTotalMergeKeys ("+o.maxTotalMergeKeys+")")}function pn(o,v,E,C){e.isObject(E)||F(o,"cannot merge mappings; the provided source object is unacceptable"),Ne(o);const k=Object.keys(E);for(let a=0,w=k.length;a<w;a+=1){const _=k[a];Ne(o),l.call(v,_)||(ne(v,_,E[_]),C[_]=!0)}}function _n(o,v,E,C,k,a,w,_,N){if(Array.isArray(k)){k=Array.prototype.slice.call(k);for(let A=0,j=k.length;A<j;A+=1)Array.isArray(k[A])&&F(o,"nested arrays are not supported inside keys"),typeof k=="object"&&y(k[A])==="[object Object]"&&(k[A]="[object Object]")}if(typeof k=="object"&&y(k)==="[object Object]"&&(k="[object Object]"),k=String(k),v===null&&(v={}),C==="tag:yaml.org,2002:merge")if(Array.isArray(a)){a.length>100&&F(o,"abnormal merge sequence size");for(let A=0,j=a.length;A<j;A+=1)pn(o,v,a[A],E)}else pn(o,v,a,E);else!o.json&&!l.call(E,k)&&l.call(v,k)&&(o.line=w||o.line,o.lineStart=_||o.lineStart,o.position=N||o.position,F(o,"duplicated mapping key")),ne(v,k,a),delete E[k];return v}function Vt(o){const v=o.input.charCodeAt(o.position);v===10?o.position++:v===13?(o.position++,o.input.charCodeAt(o.position)===10&&o.position++):F(o,"a line break is expected"),o.line+=1,o.lineStart=o.position,o.firstTabInLine=-1}function de(o,v,E){let C=0,k=o.input.charCodeAt(o.position);for(;k!==0;){for(;m(k);)k===9&&o.firstTabInLine===-1&&(o.firstTabInLine=o.position),k=o.input.charCodeAt(++o.position);if(v&&k===35)do k=o.input.charCodeAt(++o.position);while(k!==10&&k!==13&&k!==0);if(p(k))for(Vt(o),k=o.input.charCodeAt(o.position),C++,o.lineIndent=0;k===32;)o.lineIndent++,k=o.input.charCodeAt(++o.position);else break}return E!==-1&&C!==0&&o.lineIndent<E&&dn(o,"deficient indentation"),C}function hn(o){let v=o.position,E=o.input.charCodeAt(v);return!!((E===45||E===46)&&E===o.input.charCodeAt(v+1)&&E===o.input.charCodeAt(v+2)&&(v+=3,E=o.input.charCodeAt(v),E===0||T(E)))}function mt(o,v){v===1?o.result+=" ":v>1&&(o.result+=e.repeat(`
`,v-1))}function Hr(o,v,E){let C,k,a,w,_,N;const A=o.kind,j=o.result;let S=o.input.charCodeAt(o.position);if(T(S)||M(S)||S===35||S===38||S===42||S===33||S===124||S===62||S===39||S===34||S===37||S===64||S===96)return!1;if(S===63||S===45){const I=o.input.charCodeAt(o.position+1);if(T(I)||E&&M(I))return!1}for(o.kind="scalar",o.result="",C=k=o.position,a=!1;S!==0;){if(S===58){const I=o.input.charCodeAt(o.position+1);if(T(I)||E&&M(I))break}else if(S===35){const I=o.input.charCodeAt(o.position-1);if(T(I))break}else{if(o.position===o.lineStart&&hn(o)||E&&M(S))break;if(p(S))if(w=o.line,_=o.lineStart,N=o.lineIndent,de(o,!1,-1),o.lineIndent>=v){a=!0,S=o.input.charCodeAt(o.position);continue}else{o.position=k,o.line=w,o.lineStart=_,o.lineIndent=N;break}}a&&(ke(o,C,k,!1),mt(o,o.line-w),C=k=o.position,a=!1),m(S)||(k=o.position+1),S=o.input.charCodeAt(++o.position)}return ke(o,C,k,!1),o.result?!0:(o.kind=A,o.result=j,!1)}function Qt(o,v){let E,C,k=o.input.charCodeAt(o.position);if(k!==39)return!1;for(o.kind="scalar",o.result="",o.position++,E=C=o.position;(k=o.input.charCodeAt(o.position))!==0;)if(k===39)if(ke(o,E,o.position,!0),k=o.input.charCodeAt(++o.position),k===39)E=o.position,o.position++,C=o.position;else return!0;else p(k)?(ke(o,E,C,!0),mt(o,de(o,!1,v)),E=C=o.position):o.position===o.lineStart&&hn(o)?F(o,"unexpected end of the document within a single quoted scalar"):(o.position++,m(k)||(C=o.position));F(o,"unexpected end of the stream within a single quoted scalar")}function Br(o,v){let E,C,k,a=o.input.charCodeAt(o.position);if(a!==34)return!1;for(o.kind="scalar",o.result="",o.position++,E=C=o.position;(a=o.input.charCodeAt(o.position))!==0;){if(a===34)return ke(o,E,o.position,!0),o.position++,!0;if(a===92){if(ke(o,E,o.position,!0),a=o.input.charCodeAt(++o.position),p(a))de(o,!1,v);else if(a<256&&ve[a])o.result+=Te[a],o.position++;else if((k=W(a))>0){let w=k,_=0;for(;w>0;w--)a=o.input.charCodeAt(++o.position),(k=U(a))>=0?_=(_<<4)+k:F(o,"expected hexadecimal character");o.result+=Y(_),o.position++}else F(o,"unknown escape sequence");E=C=o.position}else p(a)?(ke(o,E,C,!0),mt(o,de(o,!1,v)),E=C=o.position):o.position===o.lineStart&&hn(o)?F(o,"unexpected end of the document within a double quoted scalar"):(o.position++,m(a)||(C=o.position))}F(o,"unexpected end of the stream within a double quoted scalar")}function $r(o,v){let E=!0,C,k,a;const w=o.tag;let _;const N=o.anchor;let A,j,S,I;const H=Object.create(null);let $,V,q,X=o.input.charCodeAt(o.position);if(X===91)A=93,I=!1,_=[];else if(X===123)A=125,I=!0,_={};else return!1;for(o.anchor!==null&&z(o,o.anchor,_),X=o.input.charCodeAt(++o.position);X!==0;){if(de(o,!0,v),X=o.input.charCodeAt(o.position),X===A)return o.position++,o.tag=w,o.anchor=N,o.kind=I?"mapping":"sequence",o.result=_,!0;if(E?X===44&&F(o,"expected the node content, but found ','"):F(o,"missed comma between flow collection entries"),V=$=q=null,j=S=!1,X===63){const In=o.input.charCodeAt(o.position+1);T(In)&&(j=S=!0,o.position++,de(o,!0,v))}C=o.line,k=o.lineStart,a=o.position,On(o,v,i,!1,!0),V=o.tag,$=o.result,de(o,!0,v),X=o.input.charCodeAt(o.position),(S||o.line===C)&&X===58&&(j=!0,X=o.input.charCodeAt(++o.position),de(o,!0,v),On(o,v,i,!1,!0),q=o.result),I?_n(o,_,H,V,$,q,C,k,a):j?_.push(_n(o,null,H,V,$,q,C,k,a)):_.push($),de(o,!0,v),X=o.input.charCodeAt(o.position),X===44?(E=!0,X=o.input.charCodeAt(++o.position)):E=!1}F(o,"unexpected end of the stream within a flow collection")}function Pn(o,v){let E,C=f,k=!1,a=!1,w=v,_=0,N=!1,A,j=o.input.charCodeAt(o.position);if(j===124)E=!1;else if(j===62)E=!0;else return!1;for(o.kind="scalar",o.result="";j!==0;)if(j=o.input.charCodeAt(++o.position),j===43||j===45)f===C?C=j===43?h:d:F(o,"repeat of a chomping mode identifier");else if((A=B(j))>=0)A===0?F(o,"bad explicit indentation width of a block scalar; it cannot be less than one"):a?F(o,"repeat of an indentation width identifier"):(w=v+A-1,a=!0);else break;if(m(j)){do j=o.input.charCodeAt(++o.position);while(m(j));if(j===35)do j=o.input.charCodeAt(++o.position);while(!p(j)&&j!==0)}for(;j!==0;){for(Vt(o),o.lineIndent=0,j=o.input.charCodeAt(o.position);(!a||o.lineIndent<w)&&j===32;)o.lineIndent++,j=o.input.charCodeAt(++o.position);if(!a&&o.lineIndent>w&&(w=o.lineIndent),p(j)){_++;continue}if(!a&&w===0&&F(o,"missing indentation for block scalar"),o.lineIndent<w){C===h?o.result+=e.repeat(`
`,k?1+_:_):C===f&&k&&(o.result+=`
`);break}E?m(j)?(N=!0,o.result+=e.repeat(`
`,k?1+_:_)):N?(N=!1,o.result+=e.repeat(`
`,_+1)):_===0?k&&(o.result+=" "):o.result+=e.repeat(`
`,_):o.result+=e.repeat(`
`,k?1+_:_),k=!0,a=!0,_=0;const S=o.position;for(;!p(j)&&j!==0;)j=o.input.charCodeAt(++o.position);ke(o,S,o.position,!1)}return!0}function Yr(o,v){const E=o.tag,C=o.anchor,k=[];let a=!1;if(o.firstTabInLine!==-1)return!1;o.anchor!==null&&z(o,o.anchor,k);let w=o.input.charCodeAt(o.position);for(;w!==0&&(o.firstTabInLine!==-1&&(o.position=o.firstTabInLine,F(o,"tab characters must not be used in indentation")),w===45);){const _=o.input.charCodeAt(o.position+1);if(!T(_))break;if(a=!0,o.position++,de(o,!0,-1)&&o.lineIndent<=v){k.push(null),w=o.input.charCodeAt(o.position);continue}const N=o.line;if(On(o,v,s,!1,!0),k.push(o.result),de(o,!0,-1),w=o.input.charCodeAt(o.position),(o.line===N||o.lineIndent>v)&&w!==0)F(o,"bad indentation of a sequence entry");else if(o.lineIndent<v)break}return a?(o.tag=E,o.anchor=C,o.kind="sequence",o.result=k,!0):!1}function Vr(o,v,E){let C,k,a,w;const _=o.tag,N=o.anchor,A={},j=Object.create(null);let S=null,I=null,H=null,$=!1,V=!1;if(o.firstTabInLine!==-1)return!1;o.anchor!==null&&z(o,o.anchor,A);let q=o.input.charCodeAt(o.position);for(;q!==0;){!$&&o.firstTabInLine!==-1&&(o.position=o.firstTabInLine,F(o,"tab characters must not be used in indentation"));const X=o.input.charCodeAt(o.position+1),In=o.line;if((q===63||q===58)&&T(X))q===63?($&&(_n(o,A,j,S,I,null,k,a,w),S=I=H=null),V=!0,$=!0,C=!0):$?($=!1,C=!0):F(o,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),o.position+=1,q=X;else{if(k=o.line,a=o.lineStart,w=o.position,!On(o,E,u,!1,!0))break;if(o.line===In){for(q=o.input.charCodeAt(o.position);m(q);)q=o.input.charCodeAt(++o.position);if(q===58)q=o.input.charCodeAt(++o.position),T(q)||F(o,"a whitespace character is expected after the key-value separator within a block mapping"),$&&(_n(o,A,j,S,I,null,k,a,w),S=I=H=null),V=!0,$=!1,C=!1,S=o.tag,I=o.result;else if(V)F(o,"can not read an implicit mapping pair; a colon is missed");else return o.tag=_,o.anchor=N,!0}else if(V)F(o,"can not read a block mapping entry; a multiline key may not be an implicit key");else return o.tag=_,o.anchor=N,!0}if((o.line===In||o.lineIndent>v)&&($&&(k=o.line,a=o.lineStart,w=o.position),On(o,v,c,!0,C)&&($?I=o.result:H=o.result),$||(_n(o,A,j,S,I,H,k,a,w),S=I=H=null),de(o,!0,-1),q=o.input.charCodeAt(o.position)),(o.line===In||o.lineIndent>v)&&q!==0)F(o,"bad indentation of a mapping entry");else if(o.lineIndent<v)break}return $&&_n(o,A,j,S,I,null,k,a,w),V&&(o.tag=_,o.anchor=N,o.kind="mapping",o.result=A),V}function Qr(o){let v=!1,E=!1,C,k,a=o.input.charCodeAt(o.position);if(a!==33)return!1;o.tag!==null&&F(o,"duplication of a tag property"),a=o.input.charCodeAt(++o.position),a===60?(v=!0,a=o.input.charCodeAt(++o.position)):a===33?(E=!0,C="!!",a=o.input.charCodeAt(++o.position)):C="!";let w=o.position;if(v){do a=o.input.charCodeAt(++o.position);while(a!==0&&a!==62);o.position<o.length?(k=o.input.slice(w,o.position),a=o.input.charCodeAt(++o.position)):F(o,"unexpected end of the stream within a verbatim tag")}else{for(;a!==0&&!T(a);)a===33&&(E?F(o,"tag suffix cannot contain exclamation marks"):(C=o.input.slice(w-1,o.position+1),L.test(C)||F(o,"named tag handle cannot contain such characters"),E=!0,w=o.position+1)),a=o.input.charCodeAt(++o.position);k=o.input.slice(w,o.position),O.test(k)&&F(o,"tag suffix cannot contain flow indicator characters")}k&&!G.test(k)&&F(o,"tag name cannot contain such characters: "+k);try{k=decodeURIComponent(k)}catch{F(o,"tag name is malformed: "+k)}return v?o.tag=k:l.call(o.tagMap,C)?o.tag=o.tagMap[C]+k:C==="!"?o.tag="!"+k:C==="!!"?o.tag="tag:yaml.org,2002:"+k:F(o,'undeclared tag handle "'+C+'"'),!0}function Kr(o){let v=o.input.charCodeAt(o.position);if(v!==38)return!1;o.anchor!==null&&F(o,"duplication of an anchor property"),v=o.input.charCodeAt(++o.position);const E=o.position;for(;v!==0&&!T(v)&&!M(v);)v=o.input.charCodeAt(++o.position);return o.position===E&&F(o,"name of an anchor node must contain at least one character"),o.anchor=o.input.slice(E,o.position),!0}function di(o){let v=o.input.charCodeAt(o.position);if(v!==42)return!1;v=o.input.charCodeAt(++o.position);const E=o.position;for(;v!==0&&!T(v)&&!M(v);)v=o.input.charCodeAt(++o.position);o.position===E&&F(o,"name of an alias node must contain at least one character");const C=o.input.slice(E,o.position);return l.call(o.anchorMap,C)||F(o,'unidentified alias "'+C+'"'),o.result=o.anchorMap[C],de(o,!0,-1),!0}function qr(o,v,E,C){const k=ue(o);return K(o),rn(o,v),o.tag=null,o.anchor=null,o.kind=null,o.result=null,Vr(o,E,C)&&o.kind==="mapping"?(Q(o),!0):(le(o),rn(o,k),!1)}function On(o,v,E,C,k){let a,w,_=1,N=!1,A=!1,j=null,S,I,H;o.depth>=o.maxDepth&&F(o,"nesting exceeded maxDepth ("+o.maxDepth+")"),o.depth+=1,o.listener!==null&&o.listener("open",o),o.tag=null,o.anchor=null,o.kind=null,o.result=null;const $=a=w=c===E||s===E;if(C&&de(o,!0,-1)&&(N=!0,o.lineIndent>v?_=1:o.lineIndent===v?_=0:o.lineIndent<v&&(_=-1)),_===1)for(;;){const V=o.input.charCodeAt(o.position),q=ue(o);if(N&&(V===33&&o.tag!==null||V===38&&o.anchor!==null)||!Qr(o)&&!Kr(o))break;j===null&&(j=q),de(o,!0,-1)?(N=!0,w=$,o.lineIndent>v?_=1:o.lineIndent===v?_=0:o.lineIndent<v&&(_=-1)):w=!1}if(w&&(w=N||k),_===1||c===E)if(i===E||u===E?I=v:I=v+1,H=o.position-o.lineStart,_===1)if(w&&(Yr(o,H)||Vr(o,H,I))||$r(o,I))A=!0;else{const V=o.input.charCodeAt(o.position);j!==null&&$&&!w&&V!==124&&V!==62&&qr(o,j,j.position-j.lineStart,I)||a&&Pn(o,I)||Qt(o,I)||Br(o,I)?A=!0:di(o)?(A=!0,(o.tag!==null||o.anchor!==null)&&F(o,"alias node should not have any properties")):Hr(o,I,i===E)&&(A=!0,o.tag===null&&(o.tag="?")),o.anchor!==null&&z(o,o.anchor,o.result)}else _===0&&(A=w&&Yr(o,H));if(o.tag===null)o.anchor!==null&&z(o,o.anchor,o.result);else if(o.tag==="?"){o.result!==null&&o.kind!=="scalar"&&F(o,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+o.kind+'"');for(let V=0,q=o.implicitTypes.length;V<q;V+=1)if(S=o.implicitTypes[V],S.resolve(o.result)){o.result=S.construct(o.result),o.tag=S.tag,o.anchor!==null&&z(o,o.anchor,o.result);break}}else if(o.tag!=="!"){if(l.call(o.typeMap[o.kind||"fallback"],o.tag))S=o.typeMap[o.kind||"fallback"][o.tag];else{S=null;const V=o.typeMap.multi[o.kind||"fallback"];for(let q=0,X=V.length;q<X;q+=1)if(o.tag.slice(0,V[q].tag.length)===V[q].tag){S=V[q];break}}S||F(o,"unknown tag !<"+o.tag+">"),o.result!==null&&S.kind!==o.kind&&F(o,"unacceptable node kind for !<"+o.tag+'> tag; it should be "'+S.kind+'", not "'+o.kind+'"'),S.resolve(o.result,o.tag)?(o.result=S.construct(o.result,o.tag),o.anchor!==null&&z(o,o.anchor,o.result)):F(o,"cannot resolve a node with !<"+o.tag+"> explicit tag")}return o.listener!==null&&o.listener("close",o),o.depth-=1,o.tag!==null||o.anchor!==null||A}function pi(o){const v=o.position;let E=!1,C;for(o.version=null,o.checkLineBreaks=o.legacy,o.tagMap=Object.create(null),o.anchorMap=Object.create(null);(C=o.input.charCodeAt(o.position))!==0&&(de(o,!0,-1),C=o.input.charCodeAt(o.position),!(o.lineIndent>0||C!==37));){E=!0,C=o.input.charCodeAt(++o.position);let k=o.position;for(;C!==0&&!T(C);)C=o.input.charCodeAt(++o.position);const a=o.input.slice(k,o.position),w=[];for(a.length<1&&F(o,"directive name must not be less than one character in length");C!==0;){for(;m(C);)C=o.input.charCodeAt(++o.position);if(C===35){do C=o.input.charCodeAt(++o.position);while(C!==0&&!p(C));break}if(p(C))break;for(k=o.position;C!==0&&!T(C);)C=o.input.charCodeAt(++o.position);w.push(o.input.slice(k,o.position))}C!==0&&Vt(o),l.call(Xe,a)?Xe[a](o,a,w):dn(o,'unknown document directive "'+a+'"')}if(de(o,!0,-1),o.lineIndent===0&&o.input.charCodeAt(o.position)===45&&o.input.charCodeAt(o.position+1)===45&&o.input.charCodeAt(o.position+2)===45?(o.position+=3,de(o,!0,-1)):E&&F(o,"directives end mark is expected"),On(o,o.lineIndent-1,c,!1,!0),de(o,!0,-1),o.checkLineBreaks&&x.test(o.input.slice(v,o.position))&&dn(o,"non-ASCII line breaks are interpreted as content"),o.documents.push(o.result),o.position===o.lineStart&&hn(o)){o.input.charCodeAt(o.position)===46&&(o.position+=3,de(o,!0,-1));return}o.position<o.length-1&&F(o,"end of the stream or a document separator is expected")}function Kt(o,v){o=String(o),v=v||{},o.length!==0&&(o.charCodeAt(o.length-1)!==10&&o.charCodeAt(o.length-1)!==13&&(o+=`
`),o.charCodeAt(0)===65279&&(o=o.slice(1)));const E=new te(o,v),C=o.indexOf("\0");for(C!==-1&&(E.position=C,F(E,"null byte is not allowed in input")),E.input+="\0";E.input.charCodeAt(E.position)===32;)E.lineIndent+=1,E.position+=1;for(;E.position<E.length-1;)pi(E);return E.documents}function hi(o,v,E){v!==null&&typeof v=="object"&&typeof E>"u"&&(E=v,v=null);const C=Kt(o,E);if(typeof v!="function")return C;for(let k=0,a=C.length;k<a;k+=1)v(C[k])}function mi(o,v){const E=Kt(o,v);if(E.length!==0){if(E.length===1)return E[0];throw new n("expected a single document in the stream, but found more")}}return dl.loadAll=hi,dl.load=mi,dl}var ao={},Pa;function Yh(){if(Pa)return ao;Pa=1;const e=Wr(),n=Ur(),t=Ju(),r=Object.prototype.toString,l=Object.prototype.hasOwnProperty,i=65279,u=9,s=10,c=13,f=32,d=33,h=34,g=35,x=37,O=38,L=39,G=42,y=44,p=45,m=58,T=61,M=62,U=63,W=64,B=91,b=93,Y=96,ne=123,ve=124,Te=125,te={};te[0]="\\0",te[7]="\\a",te[8]="\\b",te[9]="\\t",te[10]="\\n",te[11]="\\v",te[12]="\\f",te[13]="\\r",te[27]="\\e",te[34]='\\"',te[92]="\\\\",te[133]="\\N",te[160]="\\_",te[8232]="\\L",te[8233]="\\P";const De=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],F=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function dn(a,w){if(w===null)return{};const _={},N=Object.keys(w);for(let A=0,j=N.length;A<j;A+=1){let S=N[A],I=String(w[S]);S.slice(0,2)==="!!"&&(S="tag:yaml.org,2002:"+S.slice(2));const H=a.compiledTypeMap.fallback[S];H&&l.call(H.styleAliases,I)&&(I=H.styleAliases[I]),_[S]=I}return _}function z(a){let w,_;const N=a.toString(16).toUpperCase();if(a<=255)w="x",_=2;else if(a<=65535)w="u",_=4;else if(a<=4294967295)w="U",_=8;else throw new n("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+w+e.repeat("0",_-N.length)+N}const K=1,Q=2;function le(a){this.schema=a.schema||t,this.indent=Math.max(1,a.indent||2),this.noArrayIndent=a.noArrayIndent||!1,this.skipInvalid=a.skipInvalid||!1,this.flowLevel=e.isNothing(a.flowLevel)?-1:a.flowLevel,this.styleMap=dn(this.schema,a.styles||null),this.sortKeys=a.sortKeys||!1,this.lineWidth=a.lineWidth||80,this.noRefs=a.noRefs||!1,this.noCompatMode=a.noCompatMode||!1,this.condenseFlow=a.condenseFlow||!1,this.quotingType=a.quotingType==='"'?Q:K,this.forceQuotes=a.forceQuotes||!1,this.replacer=typeof a.replacer=="function"?a.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function ue(a,w){const _=e.repeat(" ",w);let N=0,A="";const j=a.length;for(;N<j;){let S;const I=a.indexOf(`
`,N);I===-1?(S=a.slice(N),N=j):(S=a.slice(N,I+1),N=I+1),S.length&&S!==`
`&&(A+=_),A+=S}return A}function rn(a,w){return`
`+e.repeat(" ",a.indent*w)}function Xe(a,w){for(let _=0,N=a.implicitTypes.length;_<N;_+=1)if(a.implicitTypes[_].resolve(w))return!0;return!1}function ke(a){return a===f||a===u}function Ne(a){return a>=32&&a<=126||a>=161&&a<=55295&&a!==8232&&a!==8233||a>=57344&&a<=65533&&a!==i||a>=65536&&a<=1114111}function pn(a){return Ne(a)&&a!==i&&a!==c&&a!==s}function _n(a,w,_){const N=pn(a),A=N&&!ke(a);return(_?N:N&&a!==y&&a!==B&&a!==b&&a!==ne&&a!==Te)&&a!==g&&!(w===m&&!A)||pn(w)&&!ke(w)&&a===g||w===m&&A}function Vt(a){return Ne(a)&&a!==i&&!ke(a)&&a!==p&&a!==U&&a!==m&&a!==y&&a!==B&&a!==b&&a!==ne&&a!==Te&&a!==g&&a!==O&&a!==G&&a!==d&&a!==ve&&a!==T&&a!==M&&a!==L&&a!==h&&a!==x&&a!==W&&a!==Y}function de(a){return!ke(a)&&a!==m}function hn(a,w){const _=a.charCodeAt(w);let N;return _>=55296&&_<=56319&&w+1<a.length&&(N=a.charCodeAt(w+1),N>=56320&&N<=57343)?(_-55296)*1024+N-56320+65536:_}function mt(a){return/^\n* /.test(a)}const Hr=1,Qt=2,Br=3,$r=4,Pn=5;function Yr(a,w,_,N,A,j,S,I){let H,$=0,V=null,q=!1,X=!1;const In=N!==-1;let qt=-1,Gt=Vt(hn(a,0))&&de(hn(a,a.length-1));if(w||S)for(H=0;H<a.length;$>=65536?H+=2:H++){if($=hn(a,H),!Ne($))return Pn;Gt=Gt&&_n($,V,I),V=$}else{for(H=0;H<a.length;$>=65536?H+=2:H++){if($=hn(a,H),$===s)q=!0,In&&(X=X||H-qt-1>N&&a[qt+1]!==" ",qt=H);else if(!Ne($))return Pn;Gt=Gt&&_n($,V,I),V=$}X=X||In&&H-qt-1>N&&a[qt+1]!==" "}return!q&&!X?Gt&&!S&&!A(a)?Hr:j===Q?Pn:Qt:_>9&&mt(a)?Pn:S?j===Q?Pn:Qt:X?$r:Br}function Vr(a,w,_,N,A){a.dump=function(){if(w.length===0)return a.quotingType===Q?'""':"''";if(!a.noCompatMode&&(De.indexOf(w)!==-1||F.test(w)))return a.quotingType===Q?'"'+w+'"':"'"+w+"'";const j=a.indent*Math.max(1,_),S=a.lineWidth===-1?-1:Math.max(Math.min(a.lineWidth,40),a.lineWidth-j),I=N||a.flowLevel>-1&&_>=a.flowLevel;function H($){return Xe(a,$)}switch(Yr(w,I,a.indent,S,H,a.quotingType,a.forceQuotes&&!N,A)){case Hr:return w;case Qt:return"'"+w.replace(/'/g,"''")+"'";case Br:return"|"+Qr(w,a.indent)+Kr(ue(w,j));case $r:return">"+Qr(w,a.indent)+Kr(ue(di(w,S),j));case Pn:return'"'+On(w)+'"';default:throw new n("impossible error: invalid scalar style")}}()}function Qr(a,w){const _=mt(a)?String(w):"",N=a[a.length-1]===`
`,j=N&&(a[a.length-2]===`
`||a===`
`)?"+":N?"":"-";return _+j+`
`}function Kr(a){return a[a.length-1]===`
`?a.slice(0,-1):a}function di(a,w){const _=/(\n+)([^\n]*)/g;let N=function(){let I=a.indexOf(`
`);return I=I!==-1?I:a.length,_.lastIndex=I,qr(a.slice(0,I),w)}(),A=a[0]===`
`||a[0]===" ",j,S;for(;S=_.exec(a);){const I=S[1],H=S[2];j=H[0]===" ",N+=I+(!A&&!j&&H!==""?`
`:"")+qr(H,w),A=j}return N}function qr(a,w){if(a===""||a[0]===" ")return a;const _=/ [^ ]/g;let N,A=0,j,S=0,I=0,H="";for(;N=_.exec(a);)I=N.index,I-A>w&&(j=S>A?S:I,H+=`
`+a.slice(A,j),A=j+1),S=I;return H+=`
`,a.length-A>w&&S>A?H+=a.slice(A,S)+`
`+a.slice(S+1):H+=a.slice(A),H.slice(1)}function On(a){let w="",_=0;for(let N=0;N<a.length;_>=65536?N+=2:N++){_=hn(a,N);const A=te[_];!A&&Ne(_)?(w+=a[N],_>=65536&&(w+=a[N+1])):w+=A||z(_)}return w}function pi(a,w,_){let N="";const A=a.tag;for(let j=0,S=_.length;j<S;j+=1){let I=_[j];a.replacer&&(I=a.replacer.call(_,String(j),I)),(v(a,w,I,!1,!1)||typeof I>"u"&&v(a,w,null,!1,!1))&&(N!==""&&(N+=","+(a.condenseFlow?"":" ")),N+=a.dump)}a.tag=A,a.dump="["+N+"]"}function Kt(a,w,_,N){let A="";const j=a.tag;for(let S=0,I=_.length;S<I;S+=1){let H=_[S];a.replacer&&(H=a.replacer.call(_,String(S),H)),(v(a,w+1,H,!0,!0,!1,!0)||typeof H>"u"&&v(a,w+1,null,!0,!0,!1,!0))&&((!N||A!=="")&&(A+=rn(a,w)),a.dump&&s===a.dump.charCodeAt(0)?A+="-":A+="- ",A+=a.dump)}a.tag=j,a.dump=A||"[]"}function hi(a,w,_){let N="";const A=a.tag,j=Object.keys(_);for(let S=0,I=j.length;S<I;S+=1){let H="";N!==""&&(H+=", "),a.condenseFlow&&(H+='"');const $=j[S];let V=_[$];a.replacer&&(V=a.replacer.call(_,$,V)),v(a,w,$,!1,!1)&&(a.dump.length>1024&&(H+="? "),H+=a.dump+(a.condenseFlow?'"':"")+":"+(a.condenseFlow?"":" "),v(a,w,V,!1,!1)&&(H+=a.dump,N+=H))}a.tag=A,a.dump="{"+N+"}"}function mi(a,w,_,N){let A="";const j=a.tag,S=Object.keys(_);if(a.sortKeys===!0)S.sort();else if(typeof a.sortKeys=="function")S.sort(a.sortKeys);else if(a.sortKeys)throw new n("sortKeys must be a boolean or a function");for(let I=0,H=S.length;I<H;I+=1){let $="";(!N||A!=="")&&($+=rn(a,w));const V=S[I];let q=_[V];if(a.replacer&&(q=a.replacer.call(_,V,q)),!v(a,w+1,V,!0,!0,!0))continue;const X=a.tag!==null&&a.tag!=="?"||a.dump&&a.dump.length>1024;X&&(a.dump&&s===a.dump.charCodeAt(0)?$+="?":$+="? "),$+=a.dump,X&&($+=rn(a,w)),v(a,w+1,q,!0,X)&&(a.dump&&s===a.dump.charCodeAt(0)?$+=":":$+=": ",$+=a.dump,A+=$)}a.tag=j,a.dump=A||"{}"}function o(a,w,_){const N=_?a.explicitTypes:a.implicitTypes;for(let A=0,j=N.length;A<j;A+=1){const S=N[A];if((S.instanceOf||S.predicate)&&(!S.instanceOf||typeof w=="object"&&w instanceof S.instanceOf)&&(!S.predicate||S.predicate(w))){if(_?S.multi&&S.representName?a.tag=S.representName(w):a.tag=S.tag:a.tag="?",S.represent){const I=a.styleMap[S.tag]||S.defaultStyle;let H;if(r.call(S.represent)==="[object Function]")H=S.represent(w,I);else if(l.call(S.represent,I))H=S.represent[I](w,I);else throw new n("!<"+S.tag+'> tag resolver accepts not "'+I+'" style');a.dump=H}return!0}}return!1}function v(a,w,_,N,A,j,S){a.tag=null,a.dump=_,o(a,_,!1)||o(a,_,!0);const I=r.call(a.dump),H=N;N&&(N=a.flowLevel<0||a.flowLevel>w);const $=I==="[object Object]"||I==="[object Array]";let V,q;if($&&(V=a.duplicates.indexOf(_),q=V!==-1),(a.tag!==null&&a.tag!=="?"||q||a.indent!==2&&w>0)&&(A=!1),q&&a.usedDuplicates[V])a.dump="*ref_"+V;else{if($&&q&&!a.usedDuplicates[V]&&(a.usedDuplicates[V]=!0),I==="[object Object]")N&&Object.keys(a.dump).length!==0?(mi(a,w,a.dump,A),q&&(a.dump="&ref_"+V+a.dump)):(hi(a,w,a.dump),q&&(a.dump="&ref_"+V+" "+a.dump));else if(I==="[object Array]")N&&a.dump.length!==0?(a.noArrayIndent&&!S&&w>0?Kt(a,w-1,a.dump,A):Kt(a,w,a.dump,A),q&&(a.dump="&ref_"+V+a.dump)):(pi(a,w,a.dump),q&&(a.dump="&ref_"+V+" "+a.dump));else if(I==="[object String]")a.tag!=="?"&&Vr(a,a.dump,w,j,H);else{if(I==="[object Undefined]")return!1;if(a.skipInvalid)return!1;throw new n("unacceptable kind of an object to dump "+I)}if(a.tag!==null&&a.tag!=="?"){let X=encodeURI(a.tag[0]==="!"?a.tag.slice(1):a.tag).replace(/!/g,"%21");a.tag[0]==="!"?X="!"+X:X.slice(0,18)==="tag:yaml.org,2002:"?X="!!"+X.slice(18):X="!<"+X+">",a.dump=X+" "+a.dump}}return!0}function E(a,w){const _=[],N=[];C(a,_,N);const A=N.length;for(let j=0;j<A;j+=1)w.duplicates.push(_[N[j]]);w.usedDuplicates=new Array(A)}function C(a,w,_){if(a!==null&&typeof a=="object"){const N=w.indexOf(a);if(N!==-1)_.indexOf(N)===-1&&_.push(N);else if(w.push(a),Array.isArray(a))for(let A=0,j=a.length;A<j;A+=1)C(a[A],w,_);else{const A=Object.keys(a);for(let j=0,S=A.length;j<S;j+=1)C(a[A[j]],w,_)}}}function k(a,w){w=w||{};const _=new le(w);_.noRefs||E(a,_);let N=a;return _.replacer&&(N=_.replacer.call({"":N},"",N)),v(_,0,N,!0,!0)?_.dump+`
`:""}return ao.dump=k,ao}var Oa;function Vh(){if(Oa)return je;Oa=1;const e=$h(),n=Yh();function t(r,l){return function(){throw new Error("Function yaml."+r+" is removed in js-yaml 4. Use yaml."+l+" instead, which is now safe by default.")}}return je.Type=Fe(),je.Schema=Gf(),je.FAILSAFE_SCHEMA=bf(),je.JSON_SCHEMA=ld(),je.CORE_SCHEMA=id(),je.DEFAULT_SCHEMA=Ju(),je.load=e.load,je.loadAll=e.loadAll,je.dump=n.dump,je.YAMLException=Ur(),je.types={binary:sd(),float:rd(),map:Jf(),null:ed(),pairs:cd(),set:fd(),timestamp:od(),bool:nd(),int:td(),merge:ud(),omap:ad(),seq:Zf(),str:Xf()},je.safeLoad=t("safeLoad","load"),je.safeLoadAll=t("safeLoadAll","loadAll"),je.safeDump=t("safeDump","dump"),je}var Qh=Vh();const dd=Hh(Qh),{Type:nm,Schema:tm,FAILSAFE_SCHEMA:rm,JSON_SCHEMA:lm,CORE_SCHEMA:im,DEFAULT_SCHEMA:om,load:um,loadAll:sm,dump:am,YAMLException:cm,types:fm,safeLoad:dm,safeLoadAll:pm,safeDump:hm}=dd,Kh={"be-verb-conjugation.yaml":`id: be-verb-conjugation
title: Be Verb Conjugation
description: Choose the correct form of the verb "to be".
repetitions: 10
penalty_seconds: 5
target_seconds: 20
reveal_correct_answer: true

questions:
  - id: i
    type: single_choice
    prompt: "I ___ happy."
    choices:
      1: "am"
      2: "are"
      3: "is"
    correct_answer: 1

  - id: you
    type: single_choice
    prompt: "You ___ my friend."
    choices:
      1: "am"
      2: "are"
      3: "is"
    correct_answer: 2

  - id: he
    type: single_choice
    prompt: "He ___ at school."
    choices:
      1: "am"
      2: "are"
      3: "is"
    correct_answer: 3

  - id: she
    type: single_choice
    prompt: "She ___ very kind."
    choices:
      1: "am"
      2: "are"
      3: "is"
    correct_answer: 3

  - id: it
    type: single_choice
    prompt: "It ___ cold today."
    choices:
      1: "am"
      2: "are"
      3: "is"
    correct_answer: 3

  - id: we
    type: single_choice
    prompt: "We ___ ready."
    choices:
      1: "am"
      2: "are"
      3: "is"
    correct_answer: 2

  - id: they
    type: single_choice
    prompt: "They ___ in the garden."
    choices:
      1: "am"
      2: "are"
      3: "is"
    correct_answer: 2

  - id: you-plural
    type: single_choice
    prompt: "You ___ all welcome here."
    choices:
      1: "am"
      2: "are"
      3: "is"
    correct_answer: 2
`,"body-parts-free-text-hungarian-to-english.yaml":`id: body-parts-free-text-hungarian-to-english
title: 'Body Parts: Type in English'
description: Read the Hungarian body-part word and type its English translation.
repetitions: 30
penalty_seconds: 5
target_seconds: 90
reveal_correct_answer: true
questions:
  - id: body-part-1
    type: free_text
    prompt: 'Write the English word for: arc'
    correct_answer: face
    accepted_answers:
      - face
  - id: body-part-2
    type: free_text
    prompt: 'Write the English word for: pofák'
    correct_answer: cheeks
    accepted_answers:
      - cheeks
  - id: body-part-3
    type: free_text
    prompt: 'Write the English word for: áll'
    correct_answer: chin
    accepted_answers:
      - chin
  - id: body-part-4
    type: free_text
    prompt: 'Write the English word for: nyak'
    correct_answer: neck
    accepted_answers:
      - neck
  - id: body-part-5
    type: free_text
    prompt: 'Write the English word for: vállak'
    correct_answer: shoulders
    accepted_answers:
      - shoulders
  - id: body-part-6
    type: free_text
    prompt: 'Write the English word for: karok'
    correct_answer: arms
    accepted_answers:
      - arms
  - id: body-part-7
    type: free_text
    prompt: 'Write the English word for: könyök'
    correct_answer: elbow
    accepted_answers:
      - elbow
  - id: body-part-8
    type: free_text
    prompt: 'Write the English word for: csukló'
    correct_answer: wrist
    accepted_answers:
      - wrist
  - id: body-part-9
    type: free_text
    prompt: 'Write the English word for: kéz'
    correct_answer: hand
    accepted_answers:
      - hand
  - id: body-part-10
    type: free_text
    prompt: 'Write the English word for: ujjak'
    correct_answer: fingers
    accepted_answers:
      - fingers
  - id: body-part-11
    type: free_text
    prompt: 'Write the English word for: hüvelyk ujj'
    correct_answer: thumb
    accepted_answers:
      - thumb
  - id: body-part-12
    type: free_text
    prompt: 'Write the English word for: test'
    correct_answer: body
    accepted_answers:
      - body
  - id: body-part-13
    type: free_text
    prompt: 'Write the English word for: mellkas'
    correct_answer: chest
    accepted_answers:
      - chest
  - id: body-part-14
    type: free_text
    prompt: 'Write the English word for: has'
    correct_answer: stomach
    accepted_answers:
      - stomach
  - id: body-part-15
    type: free_text
    prompt: 'Write the English word for: pocak'
    correct_answer: belly
    accepted_answers:
      - belly
  - id: body-part-16
    type: free_text
    prompt: 'Write the English word for: fenék'
    correct_answer: bottom
    accepted_answers:
      - bottom
  - id: body-part-17
    type: free_text
    prompt: 'Write the English word for: popsi'
    correct_answer: bum
    accepted_answers:
      - bum
  - id: body-part-18
    type: free_text
    prompt: 'Write the English word for: lábak'
    correct_answer: legs
    accepted_answers:
      - legs
  - id: body-part-19
    type: free_text
    prompt: 'Write the English word for: térdek'
    correct_answer: knees
    accepted_answers:
      - knees
  - id: body-part-20
    type: free_text
    prompt: 'Write the English word for: lábfej'
    correct_answer: foot
    accepted_answers:
      - foot
  - id: body-part-21
    type: free_text
    prompt: 'Write the English word for: lábfejek'
    correct_answer: feet
    accepted_answers:
      - feet
  - id: body-part-22
    type: free_text
    prompt: 'Write the English word for: boka'
    correct_answer: ankle
    accepted_answers:
      - ankle
  - id: body-part-23
    type: free_text
    prompt: 'Write the English word for: lábujjak'
    correct_answer: toes
    accepted_answers:
      - toes
  - id: body-part-24
    type: free_text
    prompt: 'Write the English word for: száj'
    correct_answer: mouth
    accepted_answers:
      - mouth
`,"body-parts-vocabulary.yaml":`id: body-parts-vocabulary
title: Body Parts Vocabulary
description: 'Choose the correct translation in both directions: Hungarian to English and English to Hungarian.'
repetitions: 30
penalty_seconds: 5
target_seconds: 90
reveal_correct_answer: true
questions:
  - id: hungarian_to_english-1
    type: single_choice
    prompt: 'What is the English word for: arc?'
    choices:
      '1': face
      '2': cheeks
      '3': shoulders
      '4': wrist
      '5': thumb
      '6': stomach
    correct_answer: 1
  - id: hungarian_to_english-2
    type: single_choice
    prompt: 'What is the English word for: pofák?'
    choices:
      '1': chin
      '2': cheeks
      '3': arms
      '4': hand
      '5': body
      '6': belly
    correct_answer: 2
  - id: hungarian_to_english-3
    type: single_choice
    prompt: 'What is the English word for: áll?'
    choices:
      '1': neck
      '2': elbow
      '3': chin
      '4': fingers
      '5': chest
      '6': bottom
    correct_answer: 3
  - id: hungarian_to_english-4
    type: single_choice
    prompt: 'What is the English word for: nyak?'
    choices:
      '1': shoulders
      '2': wrist
      '3': thumb
      '4': neck
      '5': stomach
      '6': bum
    correct_answer: 4
  - id: hungarian_to_english-5
    type: single_choice
    prompt: 'What is the English word for: vállak?'
    choices:
      '1': arms
      '2': hand
      '3': body
      '4': belly
      '5': shoulders
      '6': legs
    correct_answer: 5
  - id: hungarian_to_english-6
    type: single_choice
    prompt: 'What is the English word for: karok?'
    choices:
      '1': elbow
      '2': fingers
      '3': chest
      '4': bottom
      '5': knees
      '6': arms
    correct_answer: 6
  - id: hungarian_to_english-7
    type: single_choice
    prompt: 'What is the English word for: könyök?'
    choices:
      '1': elbow
      '2': wrist
      '3': thumb
      '4': stomach
      '5': bum
      '6': foot
    correct_answer: 1
  - id: hungarian_to_english-8
    type: single_choice
    prompt: 'What is the English word for: csukló?'
    choices:
      '1': hand
      '2': wrist
      '3': body
      '4': belly
      '5': legs
      '6': feet
    correct_answer: 2
  - id: hungarian_to_english-9
    type: single_choice
    prompt: 'What is the English word for: kéz?'
    choices:
      '1': fingers
      '2': chest
      '3': hand
      '4': bottom
      '5': knees
      '6': ankle
    correct_answer: 3
  - id: hungarian_to_english-10
    type: single_choice
    prompt: 'What is the English word for: ujjak?'
    choices:
      '1': thumb
      '2': stomach
      '3': bum
      '4': fingers
      '5': foot
      '6': toes
    correct_answer: 4
  - id: hungarian_to_english-11
    type: single_choice
    prompt: 'What is the English word for: hüvelyk ujj?'
    choices:
      '1': body
      '2': belly
      '3': legs
      '4': feet
      '5': thumb
      '6': mouth
    correct_answer: 5
  - id: hungarian_to_english-12
    type: single_choice
    prompt: 'What is the English word for: test?'
    choices:
      '1': chest
      '2': bottom
      '3': knees
      '4': ankle
      '5': face
      '6': body
    correct_answer: 6
  - id: hungarian_to_english-13
    type: single_choice
    prompt: 'What is the English word for: mellkas?'
    choices:
      '1': chest
      '2': stomach
      '3': bum
      '4': foot
      '5': toes
      '6': cheeks
    correct_answer: 1
  - id: hungarian_to_english-14
    type: single_choice
    prompt: 'What is the English word for: has?'
    choices:
      '1': belly
      '2': stomach
      '3': legs
      '4': feet
      '5': mouth
      '6': chin
    correct_answer: 2
  - id: hungarian_to_english-15
    type: single_choice
    prompt: 'What is the English word for: pocak?'
    choices:
      '1': bottom
      '2': knees
      '3': belly
      '4': ankle
      '5': face
      '6': neck
    correct_answer: 3
  - id: hungarian_to_english-16
    type: single_choice
    prompt: 'What is the English word for: fenék?'
    choices:
      '1': bum
      '2': foot
      '3': toes
      '4': bottom
      '5': cheeks
      '6': shoulders
    correct_answer: 4
  - id: hungarian_to_english-17
    type: single_choice
    prompt: 'What is the English word for: popsi?'
    choices:
      '1': legs
      '2': feet
      '3': mouth
      '4': chin
      '5': bum
      '6': arms
    correct_answer: 5
  - id: hungarian_to_english-18
    type: single_choice
    prompt: 'What is the English word for: lábak?'
    choices:
      '1': knees
      '2': ankle
      '3': face
      '4': neck
      '5': elbow
      '6': legs
    correct_answer: 6
  - id: hungarian_to_english-19
    type: single_choice
    prompt: 'What is the English word for: térdek?'
    choices:
      '1': knees
      '2': foot
      '3': toes
      '4': cheeks
      '5': shoulders
      '6': wrist
    correct_answer: 1
  - id: hungarian_to_english-20
    type: single_choice
    prompt: 'What is the English word for: lábfej?'
    choices:
      '1': feet
      '2': foot
      '3': mouth
      '4': chin
      '5': arms
      '6': hand
    correct_answer: 2
  - id: hungarian_to_english-21
    type: single_choice
    prompt: 'What is the English word for: lábfejek?'
    choices:
      '1': ankle
      '2': face
      '3': feet
      '4': neck
      '5': elbow
      '6': fingers
    correct_answer: 3
  - id: hungarian_to_english-22
    type: single_choice
    prompt: 'What is the English word for: boka?'
    choices:
      '1': toes
      '2': cheeks
      '3': shoulders
      '4': ankle
      '5': wrist
      '6': thumb
    correct_answer: 4
  - id: hungarian_to_english-23
    type: single_choice
    prompt: 'What is the English word for: lábujjak?'
    choices:
      '1': mouth
      '2': chin
      '3': arms
      '4': hand
      '5': toes
      '6': body
    correct_answer: 5
  - id: hungarian_to_english-24
    type: single_choice
    prompt: 'What is the English word for: száj?'
    choices:
      '1': face
      '2': neck
      '3': elbow
      '4': fingers
      '5': chest
      '6': mouth
    correct_answer: 6
  - id: english_to_hungarian-1
    type: single_choice
    prompt: 'What is the Hungarian word for: face?'
    choices:
      '1': arc
      '2': pofák
      '3': vállak
      '4': csukló
      '5': hüvelyk ujj
      '6': has
    correct_answer: 1
  - id: english_to_hungarian-2
    type: single_choice
    prompt: 'What is the Hungarian word for: cheeks?'
    choices:
      '1': áll
      '2': pofák
      '3': karok
      '4': kéz
      '5': test
      '6': pocak
    correct_answer: 2
  - id: english_to_hungarian-3
    type: single_choice
    prompt: 'What is the Hungarian word for: chin?'
    choices:
      '1': nyak
      '2': könyök
      '3': áll
      '4': ujjak
      '5': mellkas
      '6': fenék
    correct_answer: 3
  - id: english_to_hungarian-4
    type: single_choice
    prompt: 'What is the Hungarian word for: neck?'
    choices:
      '1': vállak
      '2': csukló
      '3': hüvelyk ujj
      '4': nyak
      '5': has
      '6': popsi
    correct_answer: 4
  - id: english_to_hungarian-5
    type: single_choice
    prompt: 'What is the Hungarian word for: shoulders?'
    choices:
      '1': karok
      '2': kéz
      '3': test
      '4': pocak
      '5': vállak
      '6': lábak
    correct_answer: 5
  - id: english_to_hungarian-6
    type: single_choice
    prompt: 'What is the Hungarian word for: arms?'
    choices:
      '1': könyök
      '2': ujjak
      '3': mellkas
      '4': fenék
      '5': térdek
      '6': karok
    correct_answer: 6
  - id: english_to_hungarian-7
    type: single_choice
    prompt: 'What is the Hungarian word for: elbow?'
    choices:
      '1': könyök
      '2': csukló
      '3': hüvelyk ujj
      '4': has
      '5': popsi
      '6': lábfej
    correct_answer: 1
  - id: english_to_hungarian-8
    type: single_choice
    prompt: 'What is the Hungarian word for: wrist?'
    choices:
      '1': kéz
      '2': csukló
      '3': test
      '4': pocak
      '5': lábak
      '6': lábfejek
    correct_answer: 2
  - id: english_to_hungarian-9
    type: single_choice
    prompt: 'What is the Hungarian word for: hand?'
    choices:
      '1': ujjak
      '2': mellkas
      '3': kéz
      '4': fenék
      '5': térdek
      '6': boka
    correct_answer: 3
  - id: english_to_hungarian-10
    type: single_choice
    prompt: 'What is the Hungarian word for: fingers?'
    choices:
      '1': hüvelyk ujj
      '2': has
      '3': popsi
      '4': ujjak
      '5': lábfej
      '6': lábujjak
    correct_answer: 4
  - id: english_to_hungarian-11
    type: single_choice
    prompt: 'What is the Hungarian word for: thumb?'
    choices:
      '1': test
      '2': pocak
      '3': lábak
      '4': lábfejek
      '5': hüvelyk ujj
      '6': száj
    correct_answer: 5
  - id: english_to_hungarian-12
    type: single_choice
    prompt: 'What is the Hungarian word for: body?'
    choices:
      '1': mellkas
      '2': fenék
      '3': térdek
      '4': boka
      '5': arc
      '6': test
    correct_answer: 6
  - id: english_to_hungarian-13
    type: single_choice
    prompt: 'What is the Hungarian word for: chest?'
    choices:
      '1': mellkas
      '2': has
      '3': popsi
      '4': lábfej
      '5': lábujjak
      '6': pofák
    correct_answer: 1
  - id: english_to_hungarian-14
    type: single_choice
    prompt: 'What is the Hungarian word for: stomach?'
    choices:
      '1': pocak
      '2': has
      '3': lábak
      '4': lábfejek
      '5': száj
      '6': áll
    correct_answer: 2
  - id: english_to_hungarian-15
    type: single_choice
    prompt: 'What is the Hungarian word for: belly?'
    choices:
      '1': fenék
      '2': térdek
      '3': pocak
      '4': boka
      '5': arc
      '6': nyak
    correct_answer: 3
  - id: english_to_hungarian-16
    type: single_choice
    prompt: 'What is the Hungarian word for: bottom?'
    choices:
      '1': popsi
      '2': lábfej
      '3': lábujjak
      '4': fenék
      '5': pofák
      '6': vállak
    correct_answer: 4
  - id: english_to_hungarian-17
    type: single_choice
    prompt: 'What is the Hungarian word for: bum?'
    choices:
      '1': lábak
      '2': lábfejek
      '3': száj
      '4': áll
      '5': popsi
      '6': karok
    correct_answer: 5
  - id: english_to_hungarian-18
    type: single_choice
    prompt: 'What is the Hungarian word for: legs?'
    choices:
      '1': térdek
      '2': boka
      '3': arc
      '4': nyak
      '5': könyök
      '6': lábak
    correct_answer: 6
  - id: english_to_hungarian-19
    type: single_choice
    prompt: 'What is the Hungarian word for: knees?'
    choices:
      '1': térdek
      '2': lábfej
      '3': lábujjak
      '4': pofák
      '5': vállak
      '6': csukló
    correct_answer: 1
  - id: english_to_hungarian-20
    type: single_choice
    prompt: 'What is the Hungarian word for: foot?'
    choices:
      '1': lábfejek
      '2': lábfej
      '3': száj
      '4': áll
      '5': karok
      '6': kéz
    correct_answer: 2
  - id: english_to_hungarian-21
    type: single_choice
    prompt: 'What is the Hungarian word for: feet?'
    choices:
      '1': boka
      '2': arc
      '3': lábfejek
      '4': nyak
      '5': könyök
      '6': ujjak
    correct_answer: 3
  - id: english_to_hungarian-22
    type: single_choice
    prompt: 'What is the Hungarian word for: ankle?'
    choices:
      '1': lábujjak
      '2': pofák
      '3': vállak
      '4': boka
      '5': csukló
      '6': hüvelyk ujj
    correct_answer: 4
  - id: english_to_hungarian-23
    type: single_choice
    prompt: 'What is the Hungarian word for: toes?'
    choices:
      '1': száj
      '2': áll
      '3': karok
      '4': kéz
      '5': lábujjak
      '6': test
    correct_answer: 5
  - id: english_to_hungarian-24
    type: single_choice
    prompt: 'What is the Hungarian word for: mouth?'
    choices:
      '1': arc
      '2': nyak
      '3': könyök
      '4': ujjak
      '5': mellkas
      '6': száj
    correct_answer: 6
`,"have-verb-conjugation.yaml":`id: have-verb-conjugation
title: Have Verb Conjugation
description: Choose the correct form of the verb "to have".
repetitions: 8
penalty_seconds: 5
target_seconds: 20
reveal_correct_answer: true

questions:
  - id: i
    type: single_choice
    prompt: "I ___ a new book."
    choices:
      1: "have"
      2: "has"
    correct_answer: 1

  - id: you
    type: single_choice
    prompt: "You ___ a great idea."
    choices:
      1: "have"
      2: "has"
    correct_answer: 1

  - id: he
    type: single_choice
    prompt: "He ___ a blue bicycle."
    choices:
      1: "have"
      2: "has"
    correct_answer: 2

  - id: she
    type: single_choice
    prompt: "She ___ a lovely dog."
    choices:
      1: "have"
      2: "has"
    correct_answer: 2

  - id: it
    type: single_choice
    prompt: "It ___ four legs."
    choices:
      1: "have"
      2: "has"
    correct_answer: 2

  - id: we
    type: single_choice
    prompt: "We ___ English class today."
    choices:
      1: "have"
      2: "has"
    correct_answer: 1

  - id: they
    type: single_choice
    prompt: "They ___ dinner at six o'clock."
    choices:
      1: "have"
      2: "has"
    correct_answer: 1

  - id: you-plural
    type: single_choice
    prompt: "You ___ many good questions."
    choices:
      1: "have"
      2: "has"
    correct_answer: 1
`,"personal-pronoun-person-and-number.yaml":`id: personal-pronoun-person-and-number
title: Personal Pronoun Person and Number
description: Identify the person and number of the subject in each sentence.
repetitions: 10
penalty_seconds: 5
target_seconds: 45
reveal_correct_answer: true

questions:
  - id: i
    type: single_choice
    prompt: "I am ready for school."
    choices:
      1: "E/1"
      2: "E/2"
      3: "E/3"
      4: "T/1"
      5: "T/2"
      6: "T/3"
    correct_answer: 1

  - id: you-singular
    type: single_choice
    prompt: "You, Peter, are my best friend."
    choices:
      1: "E/1"
      2: "E/2"
      3: "E/3"
      4: "T/1"
      5: "T/2"
      6: "T/3"
    correct_answer: 2

  - id: name-singular
    type: single_choice
    prompt: "Alice has a new book."
    choices:
      1: "E/1"
      2: "E/2"
      3: "E/3"
      4: "T/1"
      5: "T/2"
      6: "T/3"
    correct_answer: 3

  - id: he
    type: single_choice
    prompt: "He plays football after school."
    choices:
      1: "E/1"
      2: "E/2"
      3: "E/3"
      4: "T/1"
      5: "T/2"
      6: "T/3"
    correct_answer: 3

  - id: she
    type: single_choice
    prompt: "She likes drawing pictures."
    choices:
      1: "E/1"
      2: "E/2"
      3: "E/3"
      4: "T/1"
      5: "T/2"
      6: "T/3"
    correct_answer: 3

  - id: it
    type: single_choice
    prompt: "It is a small green bird."
    choices:
      1: "E/1"
      2: "E/2"
      3: "E/3"
      4: "T/1"
      5: "T/2"
      6: "T/3"
    correct_answer: 3

  - id: brother
    type: single_choice
    prompt: "My brother is ten years old."
    choices:
      1: "E/1"
      2: "E/2"
      3: "E/3"
      4: "T/1"
      5: "T/2"
      6: "T/3"
    correct_answer: 3

  - id: sister
    type: single_choice
    prompt: "My sister sings beautifully."
    choices:
      1: "E/1"
      2: "E/2"
      3: "E/3"
      4: "T/1"
      5: "T/2"
      6: "T/3"
    correct_answer: 3

  - id: we
    type: single_choice
    prompt: "We walk to the park together."
    choices:
      1: "E/1"
      2: "E/2"
      3: "E/3"
      4: "T/1"
      5: "T/2"
      6: "T/3"
    correct_answer: 4

  - id: name-and-i
    type: single_choice
    prompt: "Tom and I are in the same class."
    choices:
      1: "E/1"
      2: "E/2"
      3: "E/3"
      4: "T/1"
      5: "T/2"
      6: "T/3"
    correct_answer: 4

  - id: you-plural
    type: single_choice
    prompt: "You, Ben and Adam, are on my team."
    choices:
      1: "E/1"
      2: "E/2"
      3: "E/3"
      4: "T/1"
      5: "T/2"
      6: "T/3"
    correct_answer: 5

  - id: they
    type: single_choice
    prompt: "They live next door."
    choices:
      1: "E/1"
      2: "E/2"
      3: "E/3"
      4: "T/1"
      5: "T/2"
      6: "T/3"
    correct_answer: 6

  - id: brothers
    type: single_choice
    prompt: "My brothers ride their bikes every day."
    choices:
      1: "E/1"
      2: "E/2"
      3: "E/3"
      4: "T/1"
      5: "T/2"
      6: "T/3"
    correct_answer: 6

  - id: sisters
    type: single_choice
    prompt: "My sisters are in the garden."
    choices:
      1: "E/1"
      2: "E/2"
      3: "E/3"
      4: "T/1"
      5: "T/2"
      6: "T/3"
    correct_answer: 6


  - id: name-singular-2
    type: single_choice
    prompt: "Emma is my neighbour."
    choices:
      1: "E/1"
      2: "E/2"
      3: "E/3"
      4: "T/1"
      5: "T/2"
      6: "T/3"
    correct_answer: 3

  - id: name-and-i-2
    type: single_choice
    prompt: "Luca and I love reading."
    choices:
      1: "E/1"
      2: "E/2"
      3: "E/3"
      4: "T/1"
      5: "T/2"
      6: "T/3"
    correct_answer: 4

  - id: you-plural-2
    type: single_choice
    prompt: "You, Mia and Zoe, have new bags."
    choices:
      1: "E/1"
      2: "E/2"
      3: "E/3"
      4: "T/1"
      5: "T/2"
      6: "T/3"
    correct_answer: 5

  - id: names-plural
    type: single_choice
    prompt: "Noah and Ella are at the library."
    choices:
      1: "E/1"
      2: "E/2"
      3: "E/3"
      4: "T/1"
      5: "T/2"
      6: "T/3"
    correct_answer: 6

  - id: brother-and-sister
    type: single_choice
    prompt: "My brother and my sister are at home."
    choices:
      1: "E/1"
      2: "E/2"
      3: "E/3"
      4: "T/1"
      5: "T/2"
      6: "T/3"
    correct_answer: 6

  - id: we-2
    type: single_choice
    prompt: "My friends and I are excited."
    choices:
      1: "E/1"
      2: "E/2"
      3: "E/3"
      4: "T/1"
      5: "T/2"
      6: "T/3"
    correct_answer: 4
`},Ia=Object.entries(Kh).map(([e,n])=>({...dd.load(n),path:e})).filter(e=>(e==null?void 0:e.id)&&Array.isArray(e.questions)),fi=e=>{const n=Math.floor(e/60),t=Math.max(0,e-n*60);return`${n}:${t.toString().padStart(2,"0")}`},Ra=e=>String(e??"").trim().toLocaleLowerCase(),qh=e=>Array.from({length:e.repetitions},()=>e.questions[Math.floor(Math.random()*e.questions.length)]),pd=e=>`alice-english-leaderboard:${e}`,ru=e=>{try{return JSON.parse(localStorage.getItem(pd(e))||"[]")}catch{return[]}},Gh=(e,n)=>{const t=[...ru(e),n].sort((r,l)=>r.seconds-l.seconds).slice(0,5);return localStorage.setItem(pd(e),JSON.stringify(t)),t};function Xh(){const[e,n]=Se.useState(null),[t,r]=Se.useState([]),[l,i]=Se.useState(0),[u,s]=Se.useState(0),[c,f]=Se.useState(0),[d,h]=Se.useState(0),[g,x]=Se.useState(""),[O,L]=Se.useState(null),[G,y]=Se.useState(null),p=Se.useRef(null),m=t[l],T=c+d,M=Se.useMemo(()=>e?ru(e.id):[],[e,G]),U=Y=>{n(Y),r([]),i(0),s(0),f(0),h(0),x(""),L(null),y(null)};Se.useEffect(()=>{if(!u||G)return;const Y=window.setInterval(()=>f(Math.floor((Date.now()-u)/1e3)),250);return()=>window.clearInterval(Y)},[u,G]),Se.useEffect(()=>{var Y;(m==null?void 0:m.type)==="free_text"&&!O&&((Y=p.current)==null||Y.focus())},[m,O]);const W=()=>{r(qh(e)),i(0),h(0),f(0),x(""),L(null),y(null),s(Date.now())},B=Y=>{const ne=Math.floor((Date.now()-u)/1e3)+Y,ve=ru(e.id),Te=ve.length===0||ne<ve[0].seconds,te=ne<=e.target_seconds,De={seconds:ne,date:new Date().toISOString(),reachedGoal:te};Gh(e.id,De),y({seconds:ne,isPersonalBest:Te,reachedGoal:te})},b=Y=>{if(!m||O)return;const ne=Y??g,ve=m.type==="free_text"?[m.correct_answer,...m.accepted_answers||[]].some(De=>Ra(De)===Ra(ne)):m.type==="multi_choice"?JSON.stringify([...ne].sort())===JSON.stringify([...m.correct_answers||[]].sort()):Number(ne)===Number(m.correct_answer),Te=ve?d:d+(e.penalty_seconds??5);ve||h(Te);const te=m.type==="free_text"?m.correct_answer:m.type==="multi_choice"?m.correct_answers.map(De=>m.choices[De]).join(", "):m.choices[m.correct_answer];L({correct:ve,correctText:te}),window.setTimeout(()=>{l+1>=t.length?B(Te):(i(De=>De+1),x(""),L(null))},ve||!e.reveal_correct_answer?650:1500)};return e?G?R.jsx(em,{test:e,result:G,leaderboard:M,onAgain:W,onHome:()=>n(null)}):u?R.jsx(bh,{test:e,question:m,index:l,total:t.length,totalTime:T,answer:g,setAnswer:x,feedback:O,onSubmit:b}):R.jsx(Jh,{test:e,leaderboard:M,onStart:W,onBack:()=>n(null)}):R.jsx(Zh,{onSelect:U})}function Zh({onSelect:e}){return R.jsxs("main",{className:"shell home",children:[R.jsx("span",{className:"eyebrow",children:"ALICE'S LITTLE STUDIO"}),R.jsxs("h1",{children:["English",R.jsx("br",{}),R.jsx("em",{children:"practice"})]}),R.jsx("p",{className:"lead",children:"A small place to learn, answer quickly, and celebrate every win."}),R.jsx("div",{className:"test-grid",children:Ia.map(n=>R.jsxs("button",{className:"test-card",onClick:()=>e(n),children:[R.jsx("span",{className:"card-icon",children:"✦"}),R.jsxs("span",{children:[R.jsx("strong",{children:n.title}),R.jsx("small",{children:n.description})]}),R.jsx("span",{className:"arrow",children:"→"})]},n.id))}),R.jsxs("p",{className:"footer-note",children:[Ia.length," practice tests ready"]})]})}function Jh({test:e,leaderboard:n,onStart:t,onBack:r}){return R.jsxs("main",{className:"shell",children:[R.jsx("button",{className:"back",onClick:r,children:"← All tests"}),R.jsxs("section",{className:"hero-card",children:[R.jsx("span",{className:"card-icon big",children:"✦"}),R.jsx("h1",{children:e.title}),R.jsx("p",{children:e.description}),R.jsxs("div",{className:"stats",children:[R.jsxs("span",{children:[R.jsx("b",{children:e.repetitions})," questions"]}),R.jsxs("span",{children:[R.jsx("b",{children:fi(e.target_seconds)})," goal"]}),R.jsxs("span",{children:[R.jsxs("b",{children:["+",e.penalty_seconds,"s"]})," wrong answer"]})]}),R.jsxs("button",{className:"primary",onClick:t,children:["Start practice ",R.jsx("span",{children:"→"})]})]}),R.jsx(hd,{entries:n})]})}function bh({test:e,question:n,index:t,total:r,totalTime:l,answer:i,setAnswer:u,feedback:s,onSubmit:c}){const[f,d]=Se.useState([]);Se.useEffect(()=>d([]),[n]);const h=g=>d(x=>x.includes(g)?x.filter(O=>O!==g):[...x,g]);return R.jsxs("main",{className:"shell practice",children:[R.jsxs("div",{className:"practice-top",children:[R.jsxs("span",{children:["Question ",t+1," of ",r]}),R.jsxs("strong",{children:["⏱ ",fi(l)]})]}),R.jsx("div",{className:"progress",children:R.jsx("i",{style:{width:`${t/r*100}%`}})}),R.jsxs("section",{className:"question-card",children:[R.jsx("span",{className:"eyebrow",children:e.title}),R.jsx("h2",{children:n.prompt}),n.type==="free_text"?R.jsxs("form",{onSubmit:g=>{g.preventDefault(),c()},children:[R.jsx("input",{ref:inputRef,value:i,disabled:!!s,onChange:g=>u(g.target.value),placeholder:"Type your answer",autoComplete:"off"}),R.jsx("button",{className:"primary",disabled:!i.trim()||!!s,children:"Check answer"})]}):R.jsxs("div",{className:"choices",children:[Object.entries(n.choices).map(([g,x])=>{const O=Number(g),L=n.type==="multi_choice"?f.includes(O):!1;return R.jsxs("button",{className:`choice ${L?"selected":""}`,disabled:!!s,onClick:()=>n.type==="multi_choice"?h(O):c(O),children:[R.jsx("b",{children:g}),x]},g)}),n.type==="multi_choice"&&R.jsx("button",{className:"primary",disabled:!f.length||!!s,onClick:()=>c(f),children:"Check answer"})]}),s&&R.jsx("div",{className:`feedback ${s.correct?"good":"bad"}`,children:s.correct?"✓ Great job!":R.jsxs(R.Fragment,{children:["Not quite. ",e.reveal_correct_answer&&R.jsxs(R.Fragment,{children:["The answer is ",R.jsx("b",{children:s.correctText}),"."]})]})})]})]})}function em({test:e,result:n,leaderboard:t,onAgain:r,onHome:l}){return R.jsxs("main",{className:"shell results",children:[n.reachedGoal&&R.jsx("div",{className:"fireworks","aria-hidden":"true",children:"✦ ✧ ✦ ✧ ✦"}),R.jsxs("section",{className:"result-card",children:[R.jsx("div",{className:"celebration",children:n.isPersonalBest?"🏆":n.reachedGoal?"🎆":"🌷"}),R.jsx("span",{className:"eyebrow",children:"PRACTICE COMPLETE"}),R.jsx("h1",{children:n.isPersonalBest?"New best score!":"Well done!"}),R.jsx("p",{className:"time",children:fi(n.seconds)}),n.reachedGoal&&R.jsx("p",{className:"goal-message",children:"You reached your goal. You won 20 points!"}),R.jsxs("button",{className:"primary",onClick:r,children:["Practice again ",R.jsx("span",{children:"↻"})]}),R.jsx("button",{className:"text-button",onClick:l,children:"Choose another test"})]}),R.jsx(hd,{entries:t})]})}function hd({entries:e}){return R.jsxs("section",{className:"leaderboard",children:[R.jsxs("div",{children:[R.jsx("span",{className:"eyebrow",children:"YOUR BEST TIMES"}),R.jsx("h2",{children:"Top 5"})]}),e.length?R.jsx("ol",{children:e.map((n,t)=>R.jsxs("li",{children:[R.jsx("span",{className:"rank",children:t+1}),R.jsxs("span",{children:[fi(n.seconds)," ",n.reachedGoal&&R.jsx("b",{title:"Goal reached",children:"🔥"}),R.jsx("small",{children:new Date(n.date).toLocaleString([],{dateStyle:"medium",timeStyle:"short"})})]})]},`${n.date}-${t}`))}):R.jsx("p",{className:"empty",children:"Your first result will appear here."})]})}qf(document.getElementById("root")).render(R.jsx(Xh,{}));
