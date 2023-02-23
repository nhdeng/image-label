import './style.css';
import Ve, { useState as Le, useRef as Ye, useEffect as hr } from "react";
var he = {}, gr = {
  get exports() {
    return he;
  },
  set exports(P) {
    he = P;
  }
}, X = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function mr() {
  if ($e)
    return X;
  $e = 1;
  var P = Ve, S = Symbol.for("react.element"), D = Symbol.for("react.fragment"), x = Object.prototype.hasOwnProperty, $ = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, H = { key: !0, ref: !0, __self: !0, __source: !0 };
  function F(L, m, W) {
    var n, O = {}, A = null, M = null;
    W !== void 0 && (A = "" + W), m.key !== void 0 && (A = "" + m.key), m.ref !== void 0 && (M = m.ref);
    for (n in m)
      x.call(m, n) && !H.hasOwnProperty(n) && (O[n] = m[n]);
    if (L && L.defaultProps)
      for (n in m = L.defaultProps, m)
        O[n] === void 0 && (O[n] = m[n]);
    return { $$typeof: S, type: L, key: A, ref: M, props: O, _owner: $.current };
  }
  return X.Fragment = D, X.jsx = F, X.jsxs = F, X;
}
var q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function pr() {
  return Ne || (Ne = 1, process.env.NODE_ENV !== "production" && function() {
    var P = Ve, S = Symbol.for("react.element"), D = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), F = Symbol.for("react.provider"), L = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), n = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), o = Symbol.iterator, re = "@@iterator";
    function te(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = o && e[o] || e[re];
      return typeof r == "function" ? r : null;
    }
    var Y = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        c("error", e, t);
      }
    }
    function c(e, r, t) {
      {
        var a = Y.ReactDebugCurrentFrame, s = a.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var f = t.map(function(u) {
          return String(u);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var d = !1, p = !1, y = !1, E = !1, T = !1, N;
    N = Symbol.for("react.module.reference");
    function ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === x || e === H || T || e === $ || e === W || e === n || E || e === M || d || p || y || typeof e == "object" && e !== null && (e.$$typeof === A || e.$$typeof === O || e.$$typeof === F || e.$$typeof === L || e.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === N || e.getModuleId !== void 0));
    }
    function ae(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function k(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case x:
          return "Fragment";
        case D:
          return "Portal";
        case H:
          return "Profiler";
        case $:
          return "StrictMode";
        case W:
          return "Suspense";
        case n:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case L:
            var r = e;
            return k(r) + ".Consumer";
          case F:
            var t = e;
            return k(t._context) + ".Provider";
          case m:
            return ae(e, e.render, "ForwardRef");
          case O:
            var a = e.displayName || null;
            return a !== null ? a : w(e.type) || "Memo";
          case A: {
            var s = e, f = s._payload, u = s._init;
            try {
              return w(u(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, V = 0, ge, me, pe, ye, be, Ee, _e;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function Ue() {
      {
        if (V === 0) {
          ge = console.log, me = console.info, pe = console.warn, ye = console.error, be = console.group, Ee = console.groupCollapsed, _e = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        V++;
      }
    }
    function Be() {
      {
        if (V--, V === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, e, {
              value: ge
            }),
            info: C({}, e, {
              value: me
            }),
            warn: C({}, e, {
              value: pe
            }),
            error: C({}, e, {
              value: ye
            }),
            group: C({}, e, {
              value: be
            }),
            groupCollapsed: C({}, e, {
              value: Ee
            }),
            groupEnd: C({}, e, {
              value: _e
            })
          });
        }
        V < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = Y.ReactCurrentDispatcher, oe;
    function G(e, r, t) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (s) {
            var a = s.stack.trim().match(/\n( *(at )?)/);
            oe = a && a[1] || "";
          }
        return `
` + oe + e;
      }
    }
    var ue = !1, K;
    {
      var He = typeof WeakMap == "function" ? WeakMap : Map;
      K = new He();
    }
    function xe(e, r) {
      if (!e || ue)
        return "";
      {
        var t = K.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      ue = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = ie.current, ie.current = null, Ue();
      try {
        if (r) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (I) {
              a = I;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (I) {
              a = I;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            a = I;
          }
          e();
        }
      } catch (I) {
        if (I && a && typeof I.stack == "string") {
          for (var i = I.stack.split(`
`), _ = a.stack.split(`
`), v = i.length - 1, h = _.length - 1; v >= 1 && h >= 0 && i[v] !== _[h]; )
            h--;
          for (; v >= 1 && h >= 0; v--, h--)
            if (i[v] !== _[h]) {
              if (v !== 1 || h !== 1)
                do
                  if (v--, h--, h < 0 || i[v] !== _[h]) {
                    var j = `
` + i[v].replace(" at new ", " at ");
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, j), j;
                  }
                while (v >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        ue = !1, ie.current = f, Be(), Error.prepareStackTrace = s;
      }
      var B = e ? e.displayName || e.name : "", Ie = B ? G(B) : "";
      return typeof e == "function" && K.set(e, Ie), Ie;
    }
    function Je(e, r, t) {
      return xe(e, !1);
    }
    function Xe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Z(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return xe(e, Xe(e));
      if (typeof e == "string")
        return G(e);
      switch (e) {
        case W:
          return G("Suspense");
        case n:
          return G("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return Je(e.render);
          case O:
            return Z(e.type, r, t);
          case A: {
            var a = e, s = a._payload, f = a._init;
            try {
              return Z(f(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, Te = {}, we = Y.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var r = e._owner, t = Z(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    function qe(e, r, t, a, s) {
      {
        var f = Function.call.bind(Q);
        for (var u in e)
          if (f(e, u)) {
            var i = void 0;
            try {
              if (typeof e[u] != "function") {
                var _ = Error((a || "React class") + ": " + t + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              i = e[u](r, u, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              i = v;
            }
            i && !(i instanceof Error) && (ee(s), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, u, typeof i), ee(null)), i instanceof Error && !(i.message in Te) && (Te[i.message] = !0, ee(s), g("Failed %s type: %s", t, i.message), ee(null));
          }
      }
    }
    var ze = Array.isArray;
    function le(e) {
      return ze(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return Se(e), !1;
      } catch {
        return !0;
      }
    }
    function Se(e) {
      return "" + e;
    }
    function Oe(e) {
      if (Ke(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), Se(e);
    }
    var J = Y.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, je, se;
    se = {};
    function Qe(e) {
      if (Q.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function er(e) {
      if (Q.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function rr(e, r) {
      if (typeof e.ref == "string" && J.current && r && J.current.stateNode !== r) {
        var t = w(J.current.type);
        se[t] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(J.current.type), e.ref), se[t] = !0);
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          Ce || (Ce = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function nr(e, r) {
      {
        var t = function() {
          je || (je = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ar = function(e, r, t, a, s, f, u) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: S,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: u,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function ir(e, r, t, a, s) {
      {
        var f, u = {}, i = null, _ = null;
        t !== void 0 && (Oe(t), i = "" + t), er(r) && (Oe(r.key), i = "" + r.key), Qe(r) && (_ = r.ref, rr(r, s));
        for (f in r)
          Q.call(r, f) && !Ze.hasOwnProperty(f) && (u[f] = r[f]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (f in v)
            u[f] === void 0 && (u[f] = v[f]);
        }
        if (i || _) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && tr(u, h), _ && nr(u, h);
        }
        return ar(e, i, _, s, a, J.current, u);
      }
    }
    var ce = Y.ReactCurrentOwner, ke = Y.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = Z(e.type, e._source, r ? r.type : null);
        ke.setExtraStackFrame(t);
      } else
        ke.setExtraStackFrame(null);
    }
    var fe;
    fe = !1;
    function de(e) {
      return typeof e == "object" && e !== null && e.$$typeof === S;
    }
    function Pe() {
      {
        if (ce.current) {
          var e = w(ce.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var De = {};
    function ur(e) {
      {
        var r = Pe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ae(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ur(r);
        if (De[t])
          return;
        De[t] = !0;
        var a = "";
        e && e._owner && e._owner !== ce.current && (a = " It was passed a child from " + w(e._owner.type) + "."), U(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), U(null);
      }
    }
    function Fe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (le(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            de(a) && Ae(a, r);
          }
        else if (de(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = te(e);
          if (typeof s == "function" && s !== e.entries)
            for (var f = s.call(e), u; !(u = f.next()).done; )
              de(u.value) && Ae(u.value, r);
        }
      }
    }
    function lr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === O))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = w(r);
          qe(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !fe) {
          fe = !0;
          var s = w(r);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            U(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), U(null);
            break;
          }
        }
        e.ref !== null && (U(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), U(null));
      }
    }
    function We(e, r, t, a, s, f) {
      {
        var u = ne(e);
        if (!u) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = or(s);
          _ ? i += _ : i += Pe();
          var v;
          e === null ? v = "null" : le(e) ? v = "array" : e !== void 0 && e.$$typeof === S ? (v = "<" + (w(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, i);
        }
        var h = ir(e, r, t, s, f);
        if (h == null)
          return h;
        if (u) {
          var j = r.children;
          if (j !== void 0)
            if (a)
              if (le(j)) {
                for (var B = 0; B < j.length; B++)
                  Fe(j[B], e);
                Object.freeze && Object.freeze(j);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(j, e);
        }
        return e === x ? sr(h) : lr(h), h;
      }
    }
    function cr(e, r, t) {
      return We(e, r, t, !0);
    }
    function fr(e, r, t) {
      return We(e, r, t, !1);
    }
    var dr = fr, vr = cr;
    q.Fragment = x, q.jsx = dr, q.jsxs = vr;
  }()), q;
}
(function(P) {
  process.env.NODE_ENV === "production" ? P.exports = mr() : P.exports = pr();
})(gr);
const Me = he.jsx;
const yr = 1e3, br = 800, R = [];
let ve = 1, b = {}, l = {}, z = -1;
const _r = ({
  url: P,
  lineProps: S,
  containerProps: D,
  pointProps: x,
  getPoints: $
}) => {
  const [H, F] = Le(!1), [L, m] = Le(!1), W = Ye(null), n = Ye(null);
  hr(() => {
    var c, d;
    return re(), (c = n.current) == null || c.addEventListener("wheel", A), (d = n.current) == null || d.addEventListener("mousedown", O), () => {
      var p, y;
      (p = n.current) == null || p.removeEventListener("wheel", A), (y = n.current) == null || y.removeEventListener("mousedown", O);
    };
  }, []);
  const O = (c) => {
    if (!n.current)
      return;
    const { clientX: d, clientY: p, x: y, y: E, offsetX: T, offsetY: N } = c, ne = d - n.current.offsetLeft || 0, ae = p - n.current.offsetTop || 0;
    R.forEach((k, w) => {
      const C = { x: k.x * o(), y: k.y * o() };
      Math.abs(T - C.x) <= 20 && Math.abs(N - C.y) <= 20 && (z = w);
    }), z >= 0 ? n.current.onmousemove = function(k) {
      R[z].x = k.offsetX / o(), R[z].y = k.offsetY / o(), b.clearRect(
        0,
        0,
        l.clientWidth * o(),
        l.clientHeight * o()
      ), b.drawImage(
        l,
        0,
        0,
        l.clientWidth * o(),
        l.clientHeight * o()
      ), g(o());
    } : document.onmousemove = function(k) {
      if (!n.current)
        return;
      const w = k.clientX - ne, C = k.clientY - ae;
      n.current.style.left = w + "px", n.current.style.top = C + "px";
    }, document.onmouseup = function() {
      n.current && (document.onmousemove = null, n.current.onmousemove = null, document.onmouseup = null, z = -1);
    };
  }, A = (c) => {
    c.preventDefault(), M(c), g(o());
  }, M = (c) => {
    var N;
    let d = 0, p = 0;
    const { deltaY: y, offsetX: E, offsetY: T } = c;
    y < 0 && o() < 5 && (n != null && n.current) && (l.style.scale = JSON.stringify(o() + 0.1), p = ((N = n.current) == null ? void 0 : N.offsetLeft) - (E * o() / (o() - 0.1) - E), d = n.current.offsetTop - (T * o() / (o() - 0.1) - T), n.current.style.left = p + "px", n.current.style.top = d + "px", n.current.style.width = l.clientWidth * o() + "px", n.current.style.height = l.clientHeight * o() + "px", n.current.width = l.clientWidth * o(), n.current.height = l.clientHeight * o()), y >= 0 && o() - 0.1 >= 0.1 && (n != null && n.current) && (l.style.scale = JSON.stringify(o() - 0.1), p = n.current.offsetLeft - E * o() / (o() + 0.1) + E, d = n.current.offsetTop - T * o() / (o() + 0.1) + T, n.current.style.left = p + "px", n.current.style.top = d + "px", n.current.style.width = l.clientWidth * o() + "px", n.current.style.height = l.clientHeight * o() + "px", n.current.width = l.clientWidth * o(), n.current.height = l.clientHeight * o()), b.drawImage(
      l,
      0,
      0,
      l.clientWidth * o(),
      l.clientHeight * o()
    );
  }, o = () => Number(l.style.scale), re = () => {
    var c;
    b = (c = n == null ? void 0 : n.current) == null ? void 0 : c.getContext("2d"), F(!0), l = document.createElement("img"), l.setAttribute("alt", "trace img"), l.setAttribute("id", "img"), l.setAttribute("src", P), l.onload = function() {
      var T;
      F(!1), (T = W.current) == null || T.append(l);
      const { width: d, height: p } = l;
      d > p ? l.style.width = "80%" : l.style.height = "80%";
      const { clientWidth: y, clientHeight: E } = l;
      ve = y / d, n.current && (n.current.style.width = y + "px", n.current.style.height = E + "px", n.current.width = y, n.current.height = E, n.current.style.left = `calc(50% - ${y / 2}px)`, n.current.style.top = `calc(50% - ${E / 2}px)`), b.drawImage(l, 0, 0, y, E), l.style.scale = "1", te(y, E), g(1);
    }, l.onerror = function() {
      F(!1), m(!0);
    };
  }, te = (c, d) => {
    if (R.length > 0)
      return;
    const p = { x: c * 0.2, y: d * 0.2 }, y = { x: c * 0.8, y: d * 0.2 }, E = { x: c * 0.8, y: d * 0.8 }, T = { x: c * 0.2, y: d * 0.8 };
    R.push(p), R.push(y), R.push(E), R.push(T);
  }, Y = () => R.length ? R.map(({ x: c, y: d }) => ({
    x: Number((c / ve).toFixed(2)),
    y: Number((d / ve).toFixed(2))
  })) : (console.error("画布暂时没有初始化"), []), g = (c) => {
    R.length && (R.forEach((d) => {
      b.beginPath(), b.arc(
        d.x * c,
        d.y * c,
        (x == null ? void 0 : x.size) || 10,
        0,
        2 * Math.PI
      ), b.fillStyle = (x == null ? void 0 : x.color) || "red", b.fill(), b.closePath();
    }), b.beginPath(), b.lineWidth = (S == null ? void 0 : S.width) || 2, b.strokeStyle = (S == null ? void 0 : S.color) || "red", R.forEach(({ x: d, y: p }) => {
      b.lineTo(d * c, p * c);
    }), b.lineTo(R[0].x * c, R[0].y * c), b.stroke(), $ && $(Y()));
  };
  return /* @__PURE__ */ Me(
    "div",
    {
      ref: W,
      className: "label-image__container",
      style: {
        width: `${(D == null ? void 0 : D.width) || yr}px`,
        height: `${(D == null ? void 0 : D.height) || br}px`
      },
      children: /* @__PURE__ */ Me("canvas", { ref: n, className: "label-image__canvas" })
    }
  );
};
export {
  _r as default
};
