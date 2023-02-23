(function(S,M){typeof exports=="object"&&typeof module<"u"?module.exports=M(require("react")):typeof define=="function"&&define.amd?define(["react"],M):(S=typeof globalThis<"u"?globalThis:S||self,S.ImageLabel=M(S.React))})(this,function(S){"use strict";var M={},Ve={get exports(){return M},set exports(D){M=D}},X={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pe;function Ue(){if(pe)return X;pe=1;var D=S,O=Symbol.for("react.element"),A=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,V=D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,K={key:!0,ref:!0,__self:!0,__source:!0};function I(Y,p,W){var n,C={},F=null,$=null;W!==void 0&&(F=""+W),p.key!==void 0&&(F=""+p.key),p.ref!==void 0&&($=p.ref);for(n in p)x.call(p,n)&&!K.hasOwnProperty(n)&&(C[n]=p[n]);if(Y&&Y.defaultProps)for(n in p=Y.defaultProps,p)C[n]===void 0&&(C[n]=p[n]);return{$$typeof:O,type:Y,key:F,ref:$,props:C,_owner:V.current}}return X.Fragment=A,X.jsx=I,X.jsxs=I,X}var z={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var me;function $e(){return me||(me=1,process.env.NODE_ENV!=="production"&&function(){var D=S,O=Symbol.for("react.element"),A=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),I=Symbol.for("react.provider"),Y=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),o=Symbol.iterator,ae="@@iterator";function ie(e){if(e===null||typeof e!="object")return null;var r=o&&e[o]||e[ae];return typeof r=="function"?r:null}var N=D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function g(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),a=1;a<r;a++)t[a-1]=arguments[a];c("error",e,t)}}function c(e,r,t){{var a=N.ReactDebugCurrentFrame,l=a.getStackAddendum();l!==""&&(r+="%s",t=t.concat([l]));var f=t.map(function(u){return String(u)});f.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,f)}}var d=!1,m=!1,y=!1,_=!1,T=!1,U;U=Symbol.for("react.module.reference");function oe(e){return!!(typeof e=="string"||typeof e=="function"||e===x||e===K||T||e===V||e===W||e===n||_||e===$||d||m||y||typeof e=="object"&&e!==null&&(e.$$typeof===F||e.$$typeof===C||e.$$typeof===I||e.$$typeof===Y||e.$$typeof===p||e.$$typeof===U||e.getModuleId!==void 0))}function ue(e,r,t){var a=e.displayName;if(a)return a;var l=r.displayName||r.name||"";return l!==""?t+"("+l+")":t}function P(e){return e.displayName||"Context"}function w(e){if(e==null)return null;if(typeof e.tag=="number"&&g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case x:return"Fragment";case A:return"Portal";case K:return"Profiler";case V:return"StrictMode";case W:return"Suspense";case n:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Y:var r=e;return P(r)+".Consumer";case I:var t=e;return P(t._context)+".Provider";case p:return ue(e,e.render,"ForwardRef");case C:var a=e.displayName||null;return a!==null?a:w(e.type)||"Memo";case F:{var l=e,f=l._payload,u=l._init;try{return w(u(f))}catch{return null}}}return null}var j=Object.assign,B=0,be,Ee,_e,Re,xe,Te,we;function Se(){}Se.__reactDisabledLog=!0;function Je(){{if(B===0){be=console.log,Ee=console.info,_e=console.warn,Re=console.error,xe=console.group,Te=console.groupCollapsed,we=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Se,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}B++}}function Xe(){{if(B--,B===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:j({},e,{value:be}),info:j({},e,{value:Ee}),warn:j({},e,{value:_e}),error:j({},e,{value:Re}),group:j({},e,{value:xe}),groupCollapsed:j({},e,{value:Te}),groupEnd:j({},e,{value:we})})}B<0&&g("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var se=N.ReactCurrentDispatcher,le;function Z(e,r,t){{if(le===void 0)try{throw Error()}catch(l){var a=l.stack.trim().match(/\n( *(at )?)/);le=a&&a[1]||""}return`
`+le+e}}var ce=!1,Q;{var ze=typeof WeakMap=="function"?WeakMap:Map;Q=new ze}function Oe(e,r){if(!e||ce)return"";{var t=Q.get(e);if(t!==void 0)return t}var a;ce=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var f;f=se.current,se.current=null,Je();try{if(r){var u=function(){throw Error()};if(Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(u,[])}catch(L){a=L}Reflect.construct(e,[],u)}else{try{u.call()}catch(L){a=L}e.call(u.prototype)}}else{try{throw Error()}catch(L){a=L}e()}}catch(L){if(L&&a&&typeof L.stack=="string"){for(var i=L.stack.split(`
`),R=a.stack.split(`
`),v=i.length-1,h=R.length-1;v>=1&&h>=0&&i[v]!==R[h];)h--;for(;v>=1&&h>=0;v--,h--)if(i[v]!==R[h]){if(v!==1||h!==1)do if(v--,h--,h<0||i[v]!==R[h]){var k=`
`+i[v].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),typeof e=="function"&&Q.set(e,k),k}while(v>=1&&h>=0);break}}}finally{ce=!1,se.current=f,Xe(),Error.prepareStackTrace=l}var J=e?e.displayName||e.name:"",Me=J?Z(J):"";return typeof e=="function"&&Q.set(e,Me),Me}function Ge(e,r,t){return Oe(e,!1)}function Ke(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function ee(e,r,t){if(e==null)return"";if(typeof e=="function")return Oe(e,Ke(e));if(typeof e=="string")return Z(e);switch(e){case W:return Z("Suspense");case n:return Z("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case p:return Ge(e.render);case C:return ee(e.type,r,t);case F:{var a=e,l=a._payload,f=a._init;try{return ee(f(l),r,t)}catch{}}}return""}var re=Object.prototype.hasOwnProperty,Ce={},je=N.ReactDebugCurrentFrame;function te(e){if(e){var r=e._owner,t=ee(e.type,e._source,r?r.type:null);je.setExtraStackFrame(t)}else je.setExtraStackFrame(null)}function qe(e,r,t,a,l){{var f=Function.call.bind(re);for(var u in e)if(f(e,u)){var i=void 0;try{if(typeof e[u]!="function"){var R=Error((a||"React class")+": "+t+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw R.name="Invariant Violation",R}i=e[u](r,u,a,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(v){i=v}i&&!(i instanceof Error)&&(te(l),g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",a||"React class",t,u,typeof i),te(null)),i instanceof Error&&!(i.message in Ce)&&(Ce[i.message]=!0,te(l),g("Failed %s type: %s",t,i.message),te(null))}}}var Ze=Array.isArray;function fe(e){return Ze(e)}function Qe(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function er(e){try{return ke(e),!1}catch{return!0}}function ke(e){return""+e}function Pe(e){if(er(e))return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Qe(e)),ke(e)}var q=N.ReactCurrentOwner,rr={key:!0,ref:!0,__self:!0,__source:!0},De,Ae,de;de={};function tr(e){if(re.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function nr(e){if(re.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function ar(e,r){if(typeof e.ref=="string"&&q.current&&r&&q.current.stateNode!==r){var t=w(q.current.type);de[t]||(g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',w(q.current.type),e.ref),de[t]=!0)}}function ir(e,r){{var t=function(){De||(De=!0,g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function or(e,r){{var t=function(){Ae||(Ae=!0,g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var ur=function(e,r,t,a,l,f,u){var i={$$typeof:O,type:e,key:r,ref:t,props:u,_owner:f};return i._store={},Object.defineProperty(i._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(i,"_self",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.defineProperty(i,"_source",{configurable:!1,enumerable:!1,writable:!1,value:l}),Object.freeze&&(Object.freeze(i.props),Object.freeze(i)),i};function sr(e,r,t,a,l){{var f,u={},i=null,R=null;t!==void 0&&(Pe(t),i=""+t),nr(r)&&(Pe(r.key),i=""+r.key),tr(r)&&(R=r.ref,ar(r,l));for(f in r)re.call(r,f)&&!rr.hasOwnProperty(f)&&(u[f]=r[f]);if(e&&e.defaultProps){var v=e.defaultProps;for(f in v)u[f]===void 0&&(u[f]=v[f])}if(i||R){var h=typeof e=="function"?e.displayName||e.name||"Unknown":e;i&&ir(u,h),R&&or(u,h)}return ur(e,i,R,l,a,q.current,u)}}var ve=N.ReactCurrentOwner,Fe=N.ReactDebugCurrentFrame;function H(e){if(e){var r=e._owner,t=ee(e.type,e._source,r?r.type:null);Fe.setExtraStackFrame(t)}else Fe.setExtraStackFrame(null)}var he;he=!1;function ge(e){return typeof e=="object"&&e!==null&&e.$$typeof===O}function Ie(){{if(ve.current){var e=w(ve.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function lr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var We={};function cr(e){{var r=Ie();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Le(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=cr(r);if(We[t])return;We[t]=!0;var a="";e&&e._owner&&e._owner!==ve.current&&(a=" It was passed a child from "+w(e._owner.type)+"."),H(e),g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,a),H(null)}}function Ye(e,r){{if(typeof e!="object")return;if(fe(e))for(var t=0;t<e.length;t++){var a=e[t];ge(a)&&Le(a,r)}else if(ge(e))e._store&&(e._store.validated=!0);else if(e){var l=ie(e);if(typeof l=="function"&&l!==e.entries)for(var f=l.call(e),u;!(u=f.next()).done;)ge(u.value)&&Le(u.value,r)}}}function fr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===p||r.$$typeof===C))t=r.propTypes;else return;if(t){var a=w(r);qe(t,e.props,"prop",a,e)}else if(r.PropTypes!==void 0&&!he){he=!0;var l=w(r);g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",l||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function dr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var a=r[t];if(a!=="children"&&a!=="key"){H(e),g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",a),H(null);break}}e.ref!==null&&(H(e),g("Invalid attribute `ref` supplied to `React.Fragment`."),H(null))}}function Ne(e,r,t,a,l,f){{var u=oe(e);if(!u){var i="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(i+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var R=lr(l);R?i+=R:i+=Ie();var v;e===null?v="null":fe(e)?v="array":e!==void 0&&e.$$typeof===O?(v="<"+(w(e.type)||"Unknown")+" />",i=" Did you accidentally export a JSX literal instead of a component?"):v=typeof e,g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",v,i)}var h=sr(e,r,t,l,f);if(h==null)return h;if(u){var k=r.children;if(k!==void 0)if(a)if(fe(k)){for(var J=0;J<k.length;J++)Ye(k[J],e);Object.freeze&&Object.freeze(k)}else g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ye(k,e)}return e===x?dr(h):fr(h),h}}function vr(e,r,t){return Ne(e,r,t,!0)}function hr(e,r,t){return Ne(e,r,t,!1)}var gr=hr,pr=vr;z.Fragment=x,z.jsx=gr,z.jsxs=pr}()),z}(function(D){process.env.NODE_ENV==="production"?D.exports=Ue():D.exports=$e()})(Ve);const ye=M.jsx,mr="",Be=1e3,He=800,E=[];let ne=1,b={},s={},G=-1;return({url:D,lineProps:O,containerProps:A,pointProps:x,getPoints:V})=>{const[K,I]=S.useState(!1),[Y,p]=S.useState(!1),W=S.useRef(null),n=S.useRef(null);S.useEffect(()=>{var c,d;return ae(),(c=n.current)==null||c.addEventListener("wheel",F),(d=n.current)==null||d.addEventListener("mousedown",C),()=>{var m,y;(m=n.current)==null||m.removeEventListener("wheel",F),(y=n.current)==null||y.removeEventListener("mousedown",C)}},[]);const C=c=>{if(!n.current)return;const{clientX:d,clientY:m,x:y,y:_,offsetX:T,offsetY:U}=c,oe=d-n.current.offsetLeft||0,ue=m-n.current.offsetTop||0;E.forEach((P,w)=>{const j={x:P.x*o(),y:P.y*o()};Math.abs(T-j.x)<=20&&Math.abs(U-j.y)<=20&&(G=w)}),G>=0?n.current.onmousemove=function(P){E[G].x=P.offsetX/o(),E[G].y=P.offsetY/o(),b.clearRect(0,0,s.clientWidth*o(),s.clientHeight*o()),b.drawImage(s,0,0,s.clientWidth*o(),s.clientHeight*o()),g(o())}:document.onmousemove=function(P){if(!n.current)return;const w=P.clientX-oe,j=P.clientY-ue;n.current.style.left=w+"px",n.current.style.top=j+"px"},document.onmouseup=function(){n.current&&(document.onmousemove=null,n.current.onmousemove=null,document.onmouseup=null,G=-1)}},F=c=>{c.preventDefault(),$(c),g(o())},$=c=>{var U;let d=0,m=0;const{deltaY:y,offsetX:_,offsetY:T}=c;y<0&&o()<5&&(n!=null&&n.current)&&(s.style.scale=JSON.stringify(o()+.1),m=((U=n.current)==null?void 0:U.offsetLeft)-(_*o()/(o()-.1)-_),d=n.current.offsetTop-(T*o()/(o()-.1)-T),n.current.style.left=m+"px",n.current.style.top=d+"px",n.current.style.width=s.clientWidth*o()+"px",n.current.style.height=s.clientHeight*o()+"px",n.current.width=s.clientWidth*o(),n.current.height=s.clientHeight*o()),y>=0&&o()-.1>=.1&&(n!=null&&n.current)&&(s.style.scale=JSON.stringify(o()-.1),m=n.current.offsetLeft-_*o()/(o()+.1)+_,d=n.current.offsetTop-T*o()/(o()+.1)+T,n.current.style.left=m+"px",n.current.style.top=d+"px",n.current.style.width=s.clientWidth*o()+"px",n.current.style.height=s.clientHeight*o()+"px",n.current.width=s.clientWidth*o(),n.current.height=s.clientHeight*o()),b.drawImage(s,0,0,s.clientWidth*o(),s.clientHeight*o())},o=()=>Number(s.style.scale),ae=()=>{var c;b=(c=n==null?void 0:n.current)==null?void 0:c.getContext("2d"),I(!0),s=document.createElement("img"),s.setAttribute("alt","trace img"),s.setAttribute("id","img"),s.setAttribute("src",D),s.onload=function(){var T;I(!1),(T=W.current)==null||T.append(s);const{width:d,height:m}=s;d>m?s.style.width="80%":s.style.height="80%";const{clientWidth:y,clientHeight:_}=s;ne=y/d,n.current&&(n.current.style.width=y+"px",n.current.style.height=_+"px",n.current.width=y,n.current.height=_,n.current.style.left=`calc(50% - ${y/2}px)`,n.current.style.top=`calc(50% - ${_/2}px)`),b.drawImage(s,0,0,y,_),s.style.scale="1",ie(y,_),g(1)},s.onerror=function(){I(!1),p(!0)}},ie=(c,d)=>{if(E.length>0)return;const m={x:c*.2,y:d*.2},y={x:c*.8,y:d*.2},_={x:c*.8,y:d*.8},T={x:c*.2,y:d*.8};E.push(m),E.push(y),E.push(_),E.push(T)},N=()=>E.length?E.map(({x:c,y:d})=>({x:Number((c/ne).toFixed(2)),y:Number((d/ne).toFixed(2))})):(console.error("画布暂时没有初始化"),[]),g=c=>{E.length&&(E.forEach(d=>{b.beginPath(),b.arc(d.x*c,d.y*c,(x==null?void 0:x.size)||10,0,2*Math.PI),b.fillStyle=(x==null?void 0:x.color)||"red",b.fill(),b.closePath()}),b.beginPath(),b.lineWidth=(O==null?void 0:O.width)||2,b.strokeStyle=(O==null?void 0:O.color)||"red",E.forEach(({x:d,y:m})=>{b.lineTo(d*c,m*c)}),b.lineTo(E[0].x*c,E[0].y*c),b.stroke(),V&&V(N()))};return ye("div",{ref:W,className:"label-image__container",style:{width:`${(A==null?void 0:A.width)||Be}px`,height:`${(A==null?void 0:A.height)||He}px`},children:ye("canvas",{ref:n,className:"label-image__canvas"})})}});
