var Ia = { exports: {} }, Ur = {}, La = { exports: {} }, de = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hd;
function Hp() {
  if (hd) return de;
  hd = 1;
  var r = Symbol.for("react.element"), i = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), h = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), k = Symbol.iterator;
  function w(S) {
    return S === null || typeof S != "object" ? null : (S = k && S[k] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var C = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, $ = Object.assign, L = {};
  function z(S, E, le) {
    this.props = S, this.context = E, this.refs = L, this.updater = le || C;
  }
  z.prototype.isReactComponent = {}, z.prototype.setState = function(S, E) {
    if (typeof S != "object" && typeof S != "function" && S != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, S, E, "setState");
  }, z.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function q() {
  }
  q.prototype = z.prototype;
  function oe(S, E, le) {
    this.props = S, this.context = E, this.refs = L, this.updater = le || C;
  }
  var ae = oe.prototype = new q();
  ae.constructor = oe, $(ae, z.prototype), ae.isPureReactComponent = !0;
  var ne = Array.isArray, ue = Object.prototype.hasOwnProperty, ie = { current: null }, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(S, E, le) {
    var se, ce = {}, he = null, Ne = null;
    if (E != null) for (se in E.ref !== void 0 && (Ne = E.ref), E.key !== void 0 && (he = "" + E.key), E) ue.call(E, se) && !T.hasOwnProperty(se) && (ce[se] = E[se]);
    var pe = arguments.length - 2;
    if (pe === 1) ce.children = le;
    else if (1 < pe) {
      for (var xe = Array(pe), Fe = 0; Fe < pe; Fe++) xe[Fe] = arguments[Fe + 2];
      ce.children = xe;
    }
    if (S && S.defaultProps) for (se in pe = S.defaultProps, pe) ce[se] === void 0 && (ce[se] = pe[se]);
    return { $$typeof: r, type: S, key: he, ref: Ne, props: ce, _owner: ie.current };
  }
  function V(S, E) {
    return { $$typeof: r, type: S.type, key: E, ref: S.ref, props: S.props, _owner: S._owner };
  }
  function j(S) {
    return typeof S == "object" && S !== null && S.$$typeof === r;
  }
  function Z(S) {
    var E = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(le) {
      return E[le];
    });
  }
  var R = /\/+/g;
  function F(S, E) {
    return typeof S == "object" && S !== null && S.key != null ? Z("" + S.key) : E.toString(36);
  }
  function Q(S, E, le, se, ce) {
    var he = typeof S;
    (he === "undefined" || he === "boolean") && (S = null);
    var Ne = !1;
    if (S === null) Ne = !0;
    else switch (he) {
      case "string":
      case "number":
        Ne = !0;
        break;
      case "object":
        switch (S.$$typeof) {
          case r:
          case i:
            Ne = !0;
        }
    }
    if (Ne) return Ne = S, ce = ce(Ne), S = se === "" ? "." + F(Ne, 0) : se, ne(ce) ? (le = "", S != null && (le = S.replace(R, "$&/") + "/"), Q(ce, E, le, "", function(Fe) {
      return Fe;
    })) : ce != null && (j(ce) && (ce = V(ce, le + (!ce.key || Ne && Ne.key === ce.key ? "" : ("" + ce.key).replace(R, "$&/") + "/") + S)), E.push(ce)), 1;
    if (Ne = 0, se = se === "" ? "." : se + ":", ne(S)) for (var pe = 0; pe < S.length; pe++) {
      he = S[pe];
      var xe = se + F(he, pe);
      Ne += Q(he, E, le, xe, ce);
    }
    else if (xe = w(S), typeof xe == "function") for (S = xe.call(S), pe = 0; !(he = S.next()).done; ) he = he.value, xe = se + F(he, pe++), Ne += Q(he, E, le, xe, ce);
    else if (he === "object") throw E = String(S), Error("Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead.");
    return Ne;
  }
  function ye(S, E, le) {
    if (S == null) return S;
    var se = [], ce = 0;
    return Q(S, se, "", "", function(he) {
      return E.call(le, he, ce++);
    }), se;
  }
  function De(S) {
    if (S._status === -1) {
      var E = S._result;
      E = E(), E.then(function(le) {
        (S._status === 0 || S._status === -1) && (S._status = 1, S._result = le);
      }, function(le) {
        (S._status === 0 || S._status === -1) && (S._status = 2, S._result = le);
      }), S._status === -1 && (S._status = 0, S._result = E);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var fe = { current: null }, I = { transition: null }, X = { ReactCurrentDispatcher: fe, ReactCurrentBatchConfig: I, ReactCurrentOwner: ie };
  function G() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return de.Children = { map: ye, forEach: function(S, E, le) {
    ye(S, function() {
      E.apply(this, arguments);
    }, le);
  }, count: function(S) {
    var E = 0;
    return ye(S, function() {
      E++;
    }), E;
  }, toArray: function(S) {
    return ye(S, function(E) {
      return E;
    }) || [];
  }, only: function(S) {
    if (!j(S)) throw Error("React.Children.only expected to receive a single React element child.");
    return S;
  } }, de.Component = z, de.Fragment = o, de.Profiler = u, de.PureComponent = oe, de.StrictMode = c, de.Suspense = g, de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X, de.act = G, de.cloneElement = function(S, E, le) {
    if (S == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
    var se = $({}, S.props), ce = S.key, he = S.ref, Ne = S._owner;
    if (E != null) {
      if (E.ref !== void 0 && (he = E.ref, Ne = ie.current), E.key !== void 0 && (ce = "" + E.key), S.type && S.type.defaultProps) var pe = S.type.defaultProps;
      for (xe in E) ue.call(E, xe) && !T.hasOwnProperty(xe) && (se[xe] = E[xe] === void 0 && pe !== void 0 ? pe[xe] : E[xe]);
    }
    var xe = arguments.length - 2;
    if (xe === 1) se.children = le;
    else if (1 < xe) {
      pe = Array(xe);
      for (var Fe = 0; Fe < xe; Fe++) pe[Fe] = arguments[Fe + 2];
      se.children = pe;
    }
    return { $$typeof: r, type: S.type, key: ce, ref: he, props: se, _owner: Ne };
  }, de.createContext = function(S) {
    return S = { $$typeof: h, _currentValue: S, _currentValue2: S, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, S.Provider = { $$typeof: f, _context: S }, S.Consumer = S;
  }, de.createElement = b, de.createFactory = function(S) {
    var E = b.bind(null, S);
    return E.type = S, E;
  }, de.createRef = function() {
    return { current: null };
  }, de.forwardRef = function(S) {
    return { $$typeof: p, render: S };
  }, de.isValidElement = j, de.lazy = function(S) {
    return { $$typeof: v, _payload: { _status: -1, _result: S }, _init: De };
  }, de.memo = function(S, E) {
    return { $$typeof: m, type: S, compare: E === void 0 ? null : E };
  }, de.startTransition = function(S) {
    var E = I.transition;
    I.transition = {};
    try {
      S();
    } finally {
      I.transition = E;
    }
  }, de.unstable_act = G, de.useCallback = function(S, E) {
    return fe.current.useCallback(S, E);
  }, de.useContext = function(S) {
    return fe.current.useContext(S);
  }, de.useDebugValue = function() {
  }, de.useDeferredValue = function(S) {
    return fe.current.useDeferredValue(S);
  }, de.useEffect = function(S, E) {
    return fe.current.useEffect(S, E);
  }, de.useId = function() {
    return fe.current.useId();
  }, de.useImperativeHandle = function(S, E, le) {
    return fe.current.useImperativeHandle(S, E, le);
  }, de.useInsertionEffect = function(S, E) {
    return fe.current.useInsertionEffect(S, E);
  }, de.useLayoutEffect = function(S, E) {
    return fe.current.useLayoutEffect(S, E);
  }, de.useMemo = function(S, E) {
    return fe.current.useMemo(S, E);
  }, de.useReducer = function(S, E, le) {
    return fe.current.useReducer(S, E, le);
  }, de.useRef = function(S) {
    return fe.current.useRef(S);
  }, de.useState = function(S) {
    return fe.current.useState(S);
  }, de.useSyncExternalStore = function(S, E, le) {
    return fe.current.useSyncExternalStore(S, E, le);
  }, de.useTransition = function() {
    return fe.current.useTransition();
  }, de.version = "18.3.1", de;
}
var pd;
function lc() {
  return pd || (pd = 1, La.exports = Hp()), La.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gd;
function Wp() {
  if (gd) return Ur;
  gd = 1;
  var r = lc(), i = Symbol.for("react.element"), o = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, u = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(p, g, m) {
    var v, k = {}, w = null, C = null;
    m !== void 0 && (w = "" + m), g.key !== void 0 && (w = "" + g.key), g.ref !== void 0 && (C = g.ref);
    for (v in g) c.call(g, v) && !f.hasOwnProperty(v) && (k[v] = g[v]);
    if (p && p.defaultProps) for (v in g = p.defaultProps, g) k[v] === void 0 && (k[v] = g[v]);
    return { $$typeof: i, type: p, key: w, ref: C, props: k, _owner: u.current };
  }
  return Ur.Fragment = o, Ur.jsx = h, Ur.jsxs = h, Ur;
}
var md;
function Xp() {
  return md || (md = 1, Ia.exports = Wp()), Ia.exports;
}
var te = Xp(), hl = {}, Fa = { exports: {} }, be = {}, $a = { exports: {} }, Ga = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nd;
function Yp() {
  return Nd || (Nd = 1, (function(r) {
    function i(I, X) {
      var G = I.length;
      I.push(X);
      e: for (; 0 < G; ) {
        var S = G - 1 >>> 1, E = I[S];
        if (0 < u(E, X)) I[S] = X, I[G] = E, G = S;
        else break e;
      }
    }
    function o(I) {
      return I.length === 0 ? null : I[0];
    }
    function c(I) {
      if (I.length === 0) return null;
      var X = I[0], G = I.pop();
      if (G !== X) {
        I[0] = G;
        e: for (var S = 0, E = I.length, le = E >>> 1; S < le; ) {
          var se = 2 * (S + 1) - 1, ce = I[se], he = se + 1, Ne = I[he];
          if (0 > u(ce, G)) he < E && 0 > u(Ne, ce) ? (I[S] = Ne, I[he] = G, S = he) : (I[S] = ce, I[se] = G, S = se);
          else if (he < E && 0 > u(Ne, G)) I[S] = Ne, I[he] = G, S = he;
          else break e;
        }
      }
      return X;
    }
    function u(I, X) {
      var G = I.sortIndex - X.sortIndex;
      return G !== 0 ? G : I.id - X.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      r.unstable_now = function() {
        return f.now();
      };
    } else {
      var h = Date, p = h.now();
      r.unstable_now = function() {
        return h.now() - p;
      };
    }
    var g = [], m = [], v = 1, k = null, w = 3, C = !1, $ = !1, L = !1, z = typeof setTimeout == "function" ? setTimeout : null, q = typeof clearTimeout == "function" ? clearTimeout : null, oe = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ae(I) {
      for (var X = o(m); X !== null; ) {
        if (X.callback === null) c(m);
        else if (X.startTime <= I) c(m), X.sortIndex = X.expirationTime, i(g, X);
        else break;
        X = o(m);
      }
    }
    function ne(I) {
      if (L = !1, ae(I), !$) if (o(g) !== null) $ = !0, De(ue);
      else {
        var X = o(m);
        X !== null && fe(ne, X.startTime - I);
      }
    }
    function ue(I, X) {
      $ = !1, L && (L = !1, q(b), b = -1), C = !0;
      var G = w;
      try {
        for (ae(X), k = o(g); k !== null && (!(k.expirationTime > X) || I && !Z()); ) {
          var S = k.callback;
          if (typeof S == "function") {
            k.callback = null, w = k.priorityLevel;
            var E = S(k.expirationTime <= X);
            X = r.unstable_now(), typeof E == "function" ? k.callback = E : k === o(g) && c(g), ae(X);
          } else c(g);
          k = o(g);
        }
        if (k !== null) var le = !0;
        else {
          var se = o(m);
          se !== null && fe(ne, se.startTime - X), le = !1;
        }
        return le;
      } finally {
        k = null, w = G, C = !1;
      }
    }
    var ie = !1, T = null, b = -1, V = 5, j = -1;
    function Z() {
      return !(r.unstable_now() - j < V);
    }
    function R() {
      if (T !== null) {
        var I = r.unstable_now();
        j = I;
        var X = !0;
        try {
          X = T(!0, I);
        } finally {
          X ? F() : (ie = !1, T = null);
        }
      } else ie = !1;
    }
    var F;
    if (typeof oe == "function") F = function() {
      oe(R);
    };
    else if (typeof MessageChannel < "u") {
      var Q = new MessageChannel(), ye = Q.port2;
      Q.port1.onmessage = R, F = function() {
        ye.postMessage(null);
      };
    } else F = function() {
      z(R, 0);
    };
    function De(I) {
      T = I, ie || (ie = !0, F());
    }
    function fe(I, X) {
      b = z(function() {
        I(r.unstable_now());
      }, X);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(I) {
      I.callback = null;
    }, r.unstable_continueExecution = function() {
      $ || C || ($ = !0, De(ue));
    }, r.unstable_forceFrameRate = function(I) {
      0 > I || 125 < I ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < I ? Math.floor(1e3 / I) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, r.unstable_getFirstCallbackNode = function() {
      return o(g);
    }, r.unstable_next = function(I) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = w;
      }
      var G = w;
      w = X;
      try {
        return I();
      } finally {
        w = G;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function(I, X) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var G = w;
      w = I;
      try {
        return X();
      } finally {
        w = G;
      }
    }, r.unstable_scheduleCallback = function(I, X, G) {
      var S = r.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? S + G : S) : G = S, I) {
        case 1:
          var E = -1;
          break;
        case 2:
          E = 250;
          break;
        case 5:
          E = 1073741823;
          break;
        case 4:
          E = 1e4;
          break;
        default:
          E = 5e3;
      }
      return E = G + E, I = { id: v++, callback: X, priorityLevel: I, startTime: G, expirationTime: E, sortIndex: -1 }, G > S ? (I.sortIndex = G, i(m, I), o(g) === null && I === o(m) && (L ? (q(b), b = -1) : L = !0, fe(ne, G - S))) : (I.sortIndex = E, i(g, I), $ || C || ($ = !0, De(ue))), I;
    }, r.unstable_shouldYield = Z, r.unstable_wrapCallback = function(I) {
      var X = w;
      return function() {
        var G = w;
        w = X;
        try {
          return I.apply(this, arguments);
        } finally {
          w = G;
        }
      };
    };
  })(Ga)), Ga;
}
var vd;
function qp() {
  return vd || (vd = 1, $a.exports = Yp()), $a.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yd;
function Zp() {
  if (yd) return be;
  yd = 1;
  var r = lc(), i = qp();
  function o(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var c = /* @__PURE__ */ new Set(), u = {};
  function f(e, n) {
    h(e, n), h(e + "Capture", n);
  }
  function h(e, n) {
    for (u[e] = n, e = 0; e < n.length; e++) c.add(n[e]);
  }
  var p = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), g = Object.prototype.hasOwnProperty, m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, k = {};
  function w(e) {
    return g.call(k, e) ? !0 : g.call(v, e) ? !1 : m.test(e) ? k[e] = !0 : (v[e] = !0, !1);
  }
  function C(e, n, t, l) {
    if (t !== null && t.type === 0) return !1;
    switch (typeof n) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return l ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function $(e, n, t, l) {
    if (n === null || typeof n > "u" || C(e, n, t, l)) return !0;
    if (l) return !1;
    if (t !== null) switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
    return !1;
  }
  function L(e, n, t, l, a, s, d) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = l, this.attributeNamespace = a, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = s, this.removeEmptyString = d;
  }
  var z = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    z[e] = new L(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    z[n] = new L(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    z[e] = new L(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    z[e] = new L(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    z[e] = new L(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    z[e] = new L(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    z[e] = new L(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    z[e] = new L(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    z[e] = new L(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var q = /[\-:]([a-z])/g;
  function oe(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      q,
      oe
    );
    z[n] = new L(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(q, oe);
    z[n] = new L(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(q, oe);
    z[n] = new L(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    z[e] = new L(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), z.xlinkHref = new L("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    z[e] = new L(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function ae(e, n, t, l) {
    var a = z.hasOwnProperty(n) ? z[n] : null;
    (a !== null ? a.type !== 0 : l || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && ($(n, t, a, l) && (t = null), l || a === null ? w(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : a.mustUseProperty ? e[a.propertyName] = t === null ? a.type === 3 ? !1 : "" : t : (n = a.attributeName, l = a.attributeNamespace, t === null ? e.removeAttribute(n) : (a = a.type, t = a === 3 || a === 4 && t === !0 ? "" : "" + t, l ? e.setAttributeNS(l, n, t) : e.setAttribute(n, t))));
  }
  var ne = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ue = Symbol.for("react.element"), ie = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), Z = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), ye = Symbol.for("react.memo"), De = Symbol.for("react.lazy"), fe = Symbol.for("react.offscreen"), I = Symbol.iterator;
  function X(e) {
    return e === null || typeof e != "object" ? null : (e = I && e[I] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var G = Object.assign, S;
  function E(e) {
    if (S === void 0) try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      S = n && n[1] || "";
    }
    return `
` + S + e;
  }
  var le = !1;
  function se(e, n) {
    if (!e || le) return "";
    le = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n) if (n = function() {
        throw Error();
      }, Object.defineProperty(n.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(n, []);
        } catch (B) {
          var l = B;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (B) {
          l = B;
        }
        e.call(n.prototype);
      }
      else {
        try {
          throw Error();
        } catch (B) {
          l = B;
        }
        e();
      }
    } catch (B) {
      if (B && l && typeof B.stack == "string") {
        for (var a = B.stack.split(`
`), s = l.stack.split(`
`), d = a.length - 1, N = s.length - 1; 1 <= d && 0 <= N && a[d] !== s[N]; ) N--;
        for (; 1 <= d && 0 <= N; d--, N--) if (a[d] !== s[N]) {
          if (d !== 1 || N !== 1)
            do
              if (d--, N--, 0 > N || a[d] !== s[N]) {
                var y = `
` + a[d].replace(" at new ", " at ");
                return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), y;
              }
            while (1 <= d && 0 <= N);
          break;
        }
      }
    } finally {
      le = !1, Error.prepareStackTrace = t;
    }
    return (e = e ? e.displayName || e.name : "") ? E(e) : "";
  }
  function ce(e) {
    switch (e.tag) {
      case 5:
        return E(e.type);
      case 16:
        return E("Lazy");
      case 13:
        return E("Suspense");
      case 19:
        return E("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = se(e.type, !1), e;
      case 11:
        return e = se(e.type.render, !1), e;
      case 1:
        return e = se(e.type, !0), e;
      default:
        return "";
    }
  }
  function he(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case T:
        return "Fragment";
      case ie:
        return "Portal";
      case V:
        return "Profiler";
      case b:
        return "StrictMode";
      case F:
        return "Suspense";
      case Q:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Z:
        return (e.displayName || "Context") + ".Consumer";
      case j:
        return (e._context.displayName || "Context") + ".Provider";
      case R:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ye:
        return n = e.displayName || null, n !== null ? n : he(e.type) || "Memo";
      case De:
        n = e._payload, e = e._init;
        try {
          return he(e(n));
        } catch {
        }
    }
    return null;
  }
  function Ne(e) {
    var n = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return he(n);
      case 8:
        return n === b ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof n == "function") return n.displayName || n.name || null;
        if (typeof n == "string") return n;
    }
    return null;
  }
  function pe(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function xe(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Fe(e) {
    var n = xe(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), l = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
      var a = t.get, s = t.set;
      return Object.defineProperty(e, n, { configurable: !0, get: function() {
        return a.call(this);
      }, set: function(d) {
        l = "" + d, s.call(this, d);
      } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
        return l;
      }, setValue: function(d) {
        l = "" + d;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[n];
      } };
    }
  }
  function st(e) {
    e._valueTracker || (e._valueTracker = Fe(e));
  }
  function yc(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(), l = "";
    return e && (l = xe(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== t ? (n.setValue(e), !0) : !1;
  }
  function ii(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ql(e, n) {
    var t = n.checked;
    return G({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
  }
  function xc(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue, l = n.checked != null ? n.checked : n.defaultChecked;
    t = pe(n.value != null ? n.value : t), e._wrapperState = { initialChecked: l, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
  }
  function wc(e, n) {
    n = n.checked, n != null && ae(e, "checked", n, !1);
  }
  function jl(e, n) {
    wc(e, n);
    var t = pe(n.value), l = n.type;
    if (t != null) l === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (l === "submit" || l === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value") ? Ul(e, n.type, t) : n.hasOwnProperty("defaultValue") && Ul(e, n.type, pe(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
  }
  function Sc(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var l = n.type;
      if (!(l !== "submit" && l !== "reset" || n.value !== void 0 && n.value !== null)) return;
      n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
    }
    t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
  }
  function Ul(e, n, t) {
    (n !== "number" || ii(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }
  var or = Array.isArray;
  function Mt(e, n, t, l) {
    if (e = e.options, n) {
      n = {};
      for (var a = 0; a < t.length; a++) n["$" + t[a]] = !0;
      for (t = 0; t < e.length; t++) a = n.hasOwnProperty("$" + e[t].value), e[t].selected !== a && (e[t].selected = a), a && l && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + pe(t), n = null, a = 0; a < e.length; a++) {
        if (e[a].value === t) {
          e[a].selected = !0, l && (e[a].defaultSelected = !0);
          return;
        }
        n !== null || e[a].disabled || (n = e[a]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Hl(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(o(91));
    return G({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function kc(e, n) {
    var t = n.value;
    if (t == null) {
      if (t = n.children, n = n.defaultValue, t != null) {
        if (n != null) throw Error(o(92));
        if (or(t)) {
          if (1 < t.length) throw Error(o(93));
          t = t[0];
        }
        n = t;
      }
      n == null && (n = ""), t = n;
    }
    e._wrapperState = { initialValue: pe(t) };
  }
  function _c(e, n) {
    var t = pe(n.value), l = pe(n.defaultValue);
    t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), l != null && (e.defaultValue = "" + l);
  }
  function Dc(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
  }
  function Bc(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Wl(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Bc(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var li, Cc = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, l, a) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(n, t, l, a);
      });
    } : e;
  })(function(e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
    else {
      for (li = li || document.createElement("div"), li.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = li.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
  function ar(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var cr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, qf = ["Webkit", "ms", "Moz", "O"];
  Object.keys(cr).forEach(function(e) {
    qf.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), cr[n] = cr[e];
    });
  });
  function Ec(e, n, t) {
    return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || cr.hasOwnProperty(e) && cr[e] ? ("" + n).trim() : n + "px";
  }
  function Ac(e, n) {
    e = e.style;
    for (var t in n) if (n.hasOwnProperty(t)) {
      var l = t.indexOf("--") === 0, a = Ec(t, n[t], l);
      t === "float" && (t = "cssFloat"), l ? e.setProperty(t, a) : e[t] = a;
    }
  }
  var Zf = G({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Xl(e, n) {
    if (n) {
      if (Zf[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(o(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(o(60));
        if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(o(61));
      }
      if (n.style != null && typeof n.style != "object") throw Error(o(62));
    }
  }
  function Yl(e, n) {
    if (e.indexOf("-") === -1) return typeof n.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ql = null;
  function Zl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var bl = null, Vt = null, Pt = null;
  function Mc(e) {
    if (e = Mr(e)) {
      if (typeof bl != "function") throw Error(o(280));
      var n = e.stateNode;
      n && (n = Ei(n), bl(e.stateNode, e.type, n));
    }
  }
  function Vc(e) {
    Vt ? Pt ? Pt.push(e) : Pt = [e] : Vt = e;
  }
  function Pc() {
    if (Vt) {
      var e = Vt, n = Pt;
      if (Pt = Vt = null, Mc(e), n) for (e = 0; e < n.length; e++) Mc(n[e]);
    }
  }
  function Oc(e, n) {
    return e(n);
  }
  function zc() {
  }
  var Jl = !1;
  function Tc(e, n, t) {
    if (Jl) return e(n, t);
    Jl = !0;
    try {
      return Oc(e, n, t);
    } finally {
      Jl = !1, (Vt !== null || Pt !== null) && (zc(), Pc());
    }
  }
  function sr(e, n) {
    var t = e.stateNode;
    if (t === null) return null;
    var l = Ei(t);
    if (l === null) return null;
    t = l[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (t && typeof t != "function") throw Error(o(231, n, typeof t));
    return t;
  }
  var eo = !1;
  if (p) try {
    var ur = {};
    Object.defineProperty(ur, "passive", { get: function() {
      eo = !0;
    } }), window.addEventListener("test", ur, ur), window.removeEventListener("test", ur, ur);
  } catch {
    eo = !1;
  }
  function bf(e, n, t, l, a, s, d, N, y) {
    var B = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, B);
    } catch (M) {
      this.onError(M);
    }
  }
  var dr = !1, oi = null, ai = !1, no = null, Jf = { onError: function(e) {
    dr = !0, oi = e;
  } };
  function eh(e, n, t, l, a, s, d, N, y) {
    dr = !1, oi = null, bf.apply(Jf, arguments);
  }
  function nh(e, n, t, l, a, s, d, N, y) {
    if (eh.apply(this, arguments), dr) {
      if (dr) {
        var B = oi;
        dr = !1, oi = null;
      } else throw Error(o(198));
      ai || (ai = !0, no = B);
    }
  }
  function ut(e) {
    var n = e, t = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do
        n = e, (n.flags & 4098) !== 0 && (t = n.return), e = n.return;
      while (e);
    }
    return n.tag === 3 ? t : null;
  }
  function Rc(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function Ic(e) {
    if (ut(e) !== e) throw Error(o(188));
  }
  function th(e) {
    var n = e.alternate;
    if (!n) {
      if (n = ut(e), n === null) throw Error(o(188));
      return n !== e ? null : e;
    }
    for (var t = e, l = n; ; ) {
      var a = t.return;
      if (a === null) break;
      var s = a.alternate;
      if (s === null) {
        if (l = a.return, l !== null) {
          t = l;
          continue;
        }
        break;
      }
      if (a.child === s.child) {
        for (s = a.child; s; ) {
          if (s === t) return Ic(a), e;
          if (s === l) return Ic(a), n;
          s = s.sibling;
        }
        throw Error(o(188));
      }
      if (t.return !== l.return) t = a, l = s;
      else {
        for (var d = !1, N = a.child; N; ) {
          if (N === t) {
            d = !0, t = a, l = s;
            break;
          }
          if (N === l) {
            d = !0, l = a, t = s;
            break;
          }
          N = N.sibling;
        }
        if (!d) {
          for (N = s.child; N; ) {
            if (N === t) {
              d = !0, t = s, l = a;
              break;
            }
            if (N === l) {
              d = !0, l = s, t = a;
              break;
            }
            N = N.sibling;
          }
          if (!d) throw Error(o(189));
        }
      }
      if (t.alternate !== l) throw Error(o(190));
    }
    if (t.tag !== 3) throw Error(o(188));
    return t.stateNode.current === t ? e : n;
  }
  function Lc(e) {
    return e = th(e), e !== null ? Fc(e) : null;
  }
  function Fc(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var n = Fc(e);
      if (n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var $c = i.unstable_scheduleCallback, Gc = i.unstable_cancelCallback, rh = i.unstable_shouldYield, ih = i.unstable_requestPaint, Ae = i.unstable_now, lh = i.unstable_getCurrentPriorityLevel, to = i.unstable_ImmediatePriority, Kc = i.unstable_UserBlockingPriority, ci = i.unstable_NormalPriority, oh = i.unstable_LowPriority, Qc = i.unstable_IdlePriority, si = null, kn = null;
  function ah(e) {
    if (kn && typeof kn.onCommitFiberRoot == "function") try {
      kn.onCommitFiberRoot(si, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var fn = Math.clz32 ? Math.clz32 : uh, ch = Math.log, sh = Math.LN2;
  function uh(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ch(e) / sh | 0) | 0;
  }
  var ui = 64, di = 4194304;
  function fr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function fi(e, n) {
    var t = e.pendingLanes;
    if (t === 0) return 0;
    var l = 0, a = e.suspendedLanes, s = e.pingedLanes, d = t & 268435455;
    if (d !== 0) {
      var N = d & ~a;
      N !== 0 ? l = fr(N) : (s &= d, s !== 0 && (l = fr(s)));
    } else d = t & ~a, d !== 0 ? l = fr(d) : s !== 0 && (l = fr(s));
    if (l === 0) return 0;
    if (n !== 0 && n !== l && (n & a) === 0 && (a = l & -l, s = n & -n, a >= s || a === 16 && (s & 4194240) !== 0)) return n;
    if ((l & 4) !== 0 && (l |= t & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= l; 0 < n; ) t = 31 - fn(n), a = 1 << t, l |= e[t], n &= ~a;
    return l;
  }
  function dh(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function fh(e, n) {
    for (var t = e.suspendedLanes, l = e.pingedLanes, a = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
      var d = 31 - fn(s), N = 1 << d, y = a[d];
      y === -1 ? ((N & t) === 0 || (N & l) !== 0) && (a[d] = dh(N, n)) : y <= n && (e.expiredLanes |= N), s &= ~N;
    }
  }
  function ro(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function jc() {
    var e = ui;
    return ui <<= 1, (ui & 4194240) === 0 && (ui = 64), e;
  }
  function io(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n;
  }
  function hr(e, n, t) {
    e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - fn(n), e[n] = t;
  }
  function hh(e, n) {
    var t = e.pendingLanes & ~n;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
    var l = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var a = 31 - fn(t), s = 1 << a;
      n[a] = 0, l[a] = -1, e[a] = -1, t &= ~s;
    }
  }
  function lo(e, n) {
    var t = e.entangledLanes |= n;
    for (e = e.entanglements; t; ) {
      var l = 31 - fn(t), a = 1 << l;
      a & n | e[l] & n && (e[l] |= n), t &= ~a;
    }
  }
  var ve = 0;
  function Uc(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Hc, oo, Wc, Xc, Yc, ao = !1, hi = [], Qn = null, jn = null, Un = null, pr = /* @__PURE__ */ new Map(), gr = /* @__PURE__ */ new Map(), Hn = [], ph = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function qc(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Qn = null;
        break;
      case "dragenter":
      case "dragleave":
        jn = null;
        break;
      case "mouseover":
      case "mouseout":
        Un = null;
        break;
      case "pointerover":
      case "pointerout":
        pr.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        gr.delete(n.pointerId);
    }
  }
  function mr(e, n, t, l, a, s) {
    return e === null || e.nativeEvent !== s ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: l, nativeEvent: s, targetContainers: [a] }, n !== null && (n = Mr(n), n !== null && oo(n)), e) : (e.eventSystemFlags |= l, n = e.targetContainers, a !== null && n.indexOf(a) === -1 && n.push(a), e);
  }
  function gh(e, n, t, l, a) {
    switch (n) {
      case "focusin":
        return Qn = mr(Qn, e, n, t, l, a), !0;
      case "dragenter":
        return jn = mr(jn, e, n, t, l, a), !0;
      case "mouseover":
        return Un = mr(Un, e, n, t, l, a), !0;
      case "pointerover":
        var s = a.pointerId;
        return pr.set(s, mr(pr.get(s) || null, e, n, t, l, a)), !0;
      case "gotpointercapture":
        return s = a.pointerId, gr.set(s, mr(gr.get(s) || null, e, n, t, l, a)), !0;
    }
    return !1;
  }
  function Zc(e) {
    var n = dt(e.target);
    if (n !== null) {
      var t = ut(n);
      if (t !== null) {
        if (n = t.tag, n === 13) {
          if (n = Rc(t), n !== null) {
            e.blockedOn = n, Yc(e.priority, function() {
              Wc(t);
            });
            return;
          }
        } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function pi(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = so(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var l = new t.constructor(t.type, t);
        ql = l, t.target.dispatchEvent(l), ql = null;
      } else return n = Mr(t), n !== null && oo(n), e.blockedOn = t, !1;
      n.shift();
    }
    return !0;
  }
  function bc(e, n, t) {
    pi(e) && t.delete(n);
  }
  function mh() {
    ao = !1, Qn !== null && pi(Qn) && (Qn = null), jn !== null && pi(jn) && (jn = null), Un !== null && pi(Un) && (Un = null), pr.forEach(bc), gr.forEach(bc);
  }
  function Nr(e, n) {
    e.blockedOn === n && (e.blockedOn = null, ao || (ao = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, mh)));
  }
  function vr(e) {
    function n(a) {
      return Nr(a, e);
    }
    if (0 < hi.length) {
      Nr(hi[0], e);
      for (var t = 1; t < hi.length; t++) {
        var l = hi[t];
        l.blockedOn === e && (l.blockedOn = null);
      }
    }
    for (Qn !== null && Nr(Qn, e), jn !== null && Nr(jn, e), Un !== null && Nr(Un, e), pr.forEach(n), gr.forEach(n), t = 0; t < Hn.length; t++) l = Hn[t], l.blockedOn === e && (l.blockedOn = null);
    for (; 0 < Hn.length && (t = Hn[0], t.blockedOn === null); ) Zc(t), t.blockedOn === null && Hn.shift();
  }
  var Ot = ne.ReactCurrentBatchConfig, gi = !0;
  function Nh(e, n, t, l) {
    var a = ve, s = Ot.transition;
    Ot.transition = null;
    try {
      ve = 1, co(e, n, t, l);
    } finally {
      ve = a, Ot.transition = s;
    }
  }
  function vh(e, n, t, l) {
    var a = ve, s = Ot.transition;
    Ot.transition = null;
    try {
      ve = 4, co(e, n, t, l);
    } finally {
      ve = a, Ot.transition = s;
    }
  }
  function co(e, n, t, l) {
    if (gi) {
      var a = so(e, n, t, l);
      if (a === null) Co(e, n, l, mi, t), qc(e, l);
      else if (gh(a, e, n, t, l)) l.stopPropagation();
      else if (qc(e, l), n & 4 && -1 < ph.indexOf(e)) {
        for (; a !== null; ) {
          var s = Mr(a);
          if (s !== null && Hc(s), s = so(e, n, t, l), s === null && Co(e, n, l, mi, t), s === a) break;
          a = s;
        }
        a !== null && l.stopPropagation();
      } else Co(e, n, l, null, t);
    }
  }
  var mi = null;
  function so(e, n, t, l) {
    if (mi = null, e = Zl(l), e = dt(e), e !== null) if (n = ut(e), n === null) e = null;
    else if (t = n.tag, t === 13) {
      if (e = Rc(n), e !== null) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
    return mi = e, null;
  }
  function Jc(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (lh()) {
          case to:
            return 1;
          case Kc:
            return 4;
          case ci:
          case oh:
            return 16;
          case Qc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Wn = null, uo = null, Ni = null;
  function es() {
    if (Ni) return Ni;
    var e, n = uo, t = n.length, l, a = "value" in Wn ? Wn.value : Wn.textContent, s = a.length;
    for (e = 0; e < t && n[e] === a[e]; e++) ;
    var d = t - e;
    for (l = 1; l <= d && n[t - l] === a[s - l]; l++) ;
    return Ni = a.slice(e, 1 < l ? 1 - l : void 0);
  }
  function vi(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function yi() {
    return !0;
  }
  function ns() {
    return !1;
  }
  function nn(e) {
    function n(t, l, a, s, d) {
      this._reactName = t, this._targetInst = a, this.type = l, this.nativeEvent = s, this.target = d, this.currentTarget = null;
      for (var N in e) e.hasOwnProperty(N) && (t = e[N], this[N] = t ? t(s) : s[N]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? yi : ns, this.isPropagationStopped = ns, this;
    }
    return G(n.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var t = this.nativeEvent;
      t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = yi);
    }, stopPropagation: function() {
      var t = this.nativeEvent;
      t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = yi);
    }, persist: function() {
    }, isPersistent: yi }), n;
  }
  var zt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, fo = nn(zt), yr = G({}, zt, { view: 0, detail: 0 }), yh = nn(yr), ho, po, xr, xi = G({}, yr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: mo, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== xr && (xr && e.type === "mousemove" ? (ho = e.screenX - xr.screenX, po = e.screenY - xr.screenY) : po = ho = 0, xr = e), ho);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : po;
  } }), ts = nn(xi), xh = G({}, xi, { dataTransfer: 0 }), wh = nn(xh), Sh = G({}, yr, { relatedTarget: 0 }), go = nn(Sh), kh = G({}, zt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), _h = nn(kh), Dh = G({}, zt, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Bh = nn(Dh), Ch = G({}, zt, { data: 0 }), rs = nn(Ch), Eh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Ah = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Mh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Vh(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = Mh[e]) ? !!n[e] : !1;
  }
  function mo() {
    return Vh;
  }
  var Ph = G({}, yr, { key: function(e) {
    if (e.key) {
      var n = Eh[e.key] || e.key;
      if (n !== "Unidentified") return n;
    }
    return e.type === "keypress" ? (e = vi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ah[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: mo, charCode: function(e) {
    return e.type === "keypress" ? vi(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? vi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Oh = nn(Ph), zh = G({}, xi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), is = nn(zh), Th = G({}, yr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: mo }), Rh = nn(Th), Ih = G({}, zt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Lh = nn(Ih), Fh = G({}, xi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), $h = nn(Fh), Gh = [9, 13, 27, 32], No = p && "CompositionEvent" in window, wr = null;
  p && "documentMode" in document && (wr = document.documentMode);
  var Kh = p && "TextEvent" in window && !wr, ls = p && (!No || wr && 8 < wr && 11 >= wr), os = " ", as = !1;
  function cs(e, n) {
    switch (e) {
      case "keyup":
        return Gh.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ss(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Tt = !1;
  function Qh(e, n) {
    switch (e) {
      case "compositionend":
        return ss(n);
      case "keypress":
        return n.which !== 32 ? null : (as = !0, os);
      case "textInput":
        return e = n.data, e === os && as ? null : e;
      default:
        return null;
    }
  }
  function jh(e, n) {
    if (Tt) return e === "compositionend" || !No && cs(e, n) ? (e = es(), Ni = uo = Wn = null, Tt = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return ls && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Uh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function us(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Uh[e.type] : n === "textarea";
  }
  function ds(e, n, t, l) {
    Vc(l), n = Di(n, "onChange"), 0 < n.length && (t = new fo("onChange", "change", null, t, l), e.push({ event: t, listeners: n }));
  }
  var Sr = null, kr = null;
  function Hh(e) {
    As(e, 0);
  }
  function wi(e) {
    var n = $t(e);
    if (yc(n)) return e;
  }
  function Wh(e, n) {
    if (e === "change") return n;
  }
  var fs = !1;
  if (p) {
    var vo;
    if (p) {
      var yo = "oninput" in document;
      if (!yo) {
        var hs = document.createElement("div");
        hs.setAttribute("oninput", "return;"), yo = typeof hs.oninput == "function";
      }
      vo = yo;
    } else vo = !1;
    fs = vo && (!document.documentMode || 9 < document.documentMode);
  }
  function ps() {
    Sr && (Sr.detachEvent("onpropertychange", gs), kr = Sr = null);
  }
  function gs(e) {
    if (e.propertyName === "value" && wi(kr)) {
      var n = [];
      ds(n, kr, e, Zl(e)), Tc(Hh, n);
    }
  }
  function Xh(e, n, t) {
    e === "focusin" ? (ps(), Sr = n, kr = t, Sr.attachEvent("onpropertychange", gs)) : e === "focusout" && ps();
  }
  function Yh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return wi(kr);
  }
  function qh(e, n) {
    if (e === "click") return wi(n);
  }
  function Zh(e, n) {
    if (e === "input" || e === "change") return wi(n);
  }
  function bh(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var hn = typeof Object.is == "function" ? Object.is : bh;
  function _r(e, n) {
    if (hn(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
    var t = Object.keys(e), l = Object.keys(n);
    if (t.length !== l.length) return !1;
    for (l = 0; l < t.length; l++) {
      var a = t[l];
      if (!g.call(n, a) || !hn(e[a], n[a])) return !1;
    }
    return !0;
  }
  function ms(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ns(e, n) {
    var t = ms(e);
    e = 0;
    for (var l; t; ) {
      if (t.nodeType === 3) {
        if (l = e + t.textContent.length, e <= n && l >= n) return { node: t, offset: n - e };
        e = l;
      }
      e: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break e;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = ms(t);
    }
  }
  function vs(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? vs(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function ys() {
    for (var e = window, n = ii(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) e = n.contentWindow;
      else break;
      n = ii(e.document);
    }
    return n;
  }
  function xo(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  function Jh(e) {
    var n = ys(), t = e.focusedElem, l = e.selectionRange;
    if (n !== t && t && t.ownerDocument && vs(t.ownerDocument.documentElement, t)) {
      if (l !== null && xo(t)) {
        if (n = l.start, e = l.end, e === void 0 && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
        else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var a = t.textContent.length, s = Math.min(l.start, a);
          l = l.end === void 0 ? s : Math.min(l.end, a), !e.extend && s > l && (a = l, l = s, s = a), a = Ns(t, s);
          var d = Ns(
            t,
            l
          );
          a && d && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== d.node || e.focusOffset !== d.offset) && (n = n.createRange(), n.setStart(a.node, a.offset), e.removeAllRanges(), s > l ? (e.addRange(n), e.extend(d.node, d.offset)) : (n.setEnd(d.node, d.offset), e.addRange(n)));
        }
      }
      for (n = [], e = t; e = e.parentNode; ) e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++) e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var ep = p && "documentMode" in document && 11 >= document.documentMode, Rt = null, wo = null, Dr = null, So = !1;
  function xs(e, n, t) {
    var l = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    So || Rt == null || Rt !== ii(l) || (l = Rt, "selectionStart" in l && xo(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), Dr && _r(Dr, l) || (Dr = l, l = Di(wo, "onSelect"), 0 < l.length && (n = new fo("onSelect", "select", null, n, t), e.push({ event: n, listeners: l }), n.target = Rt)));
  }
  function Si(e, n) {
    var t = {};
    return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
  }
  var It = { animationend: Si("Animation", "AnimationEnd"), animationiteration: Si("Animation", "AnimationIteration"), animationstart: Si("Animation", "AnimationStart"), transitionend: Si("Transition", "TransitionEnd") }, ko = {}, ws = {};
  p && (ws = document.createElement("div").style, "AnimationEvent" in window || (delete It.animationend.animation, delete It.animationiteration.animation, delete It.animationstart.animation), "TransitionEvent" in window || delete It.transitionend.transition);
  function ki(e) {
    if (ko[e]) return ko[e];
    if (!It[e]) return e;
    var n = It[e], t;
    for (t in n) if (n.hasOwnProperty(t) && t in ws) return ko[e] = n[t];
    return e;
  }
  var Ss = ki("animationend"), ks = ki("animationiteration"), _s = ki("animationstart"), Ds = ki("transitionend"), Bs = /* @__PURE__ */ new Map(), Cs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Xn(e, n) {
    Bs.set(e, n), f(n, [e]);
  }
  for (var _o = 0; _o < Cs.length; _o++) {
    var Do = Cs[_o], np = Do.toLowerCase(), tp = Do[0].toUpperCase() + Do.slice(1);
    Xn(np, "on" + tp);
  }
  Xn(Ss, "onAnimationEnd"), Xn(ks, "onAnimationIteration"), Xn(_s, "onAnimationStart"), Xn("dblclick", "onDoubleClick"), Xn("focusin", "onFocus"), Xn("focusout", "onBlur"), Xn(Ds, "onTransitionEnd"), h("onMouseEnter", ["mouseout", "mouseover"]), h("onMouseLeave", ["mouseout", "mouseover"]), h("onPointerEnter", ["pointerout", "pointerover"]), h("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Br = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), rp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));
  function Es(e, n, t) {
    var l = e.type || "unknown-event";
    e.currentTarget = t, nh(l, n, void 0, e), e.currentTarget = null;
  }
  function As(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var l = e[t], a = l.event;
      l = l.listeners;
      e: {
        var s = void 0;
        if (n) for (var d = l.length - 1; 0 <= d; d--) {
          var N = l[d], y = N.instance, B = N.currentTarget;
          if (N = N.listener, y !== s && a.isPropagationStopped()) break e;
          Es(a, N, B), s = y;
        }
        else for (d = 0; d < l.length; d++) {
          if (N = l[d], y = N.instance, B = N.currentTarget, N = N.listener, y !== s && a.isPropagationStopped()) break e;
          Es(a, N, B), s = y;
        }
      }
    }
    if (ai) throw e = no, ai = !1, no = null, e;
  }
  function Se(e, n) {
    var t = n[Oo];
    t === void 0 && (t = n[Oo] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    t.has(l) || (Ms(n, e, 2, !1), t.add(l));
  }
  function Bo(e, n, t) {
    var l = 0;
    n && (l |= 4), Ms(t, e, l, n);
  }
  var _i = "_reactListening" + Math.random().toString(36).slice(2);
  function Cr(e) {
    if (!e[_i]) {
      e[_i] = !0, c.forEach(function(t) {
        t !== "selectionchange" && (rp.has(t) || Bo(t, !1, e), Bo(t, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[_i] || (n[_i] = !0, Bo("selectionchange", !1, n));
    }
  }
  function Ms(e, n, t, l) {
    switch (Jc(n)) {
      case 1:
        var a = Nh;
        break;
      case 4:
        a = vh;
        break;
      default:
        a = co;
    }
    t = a.bind(null, n, t, e), a = void 0, !eo || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (a = !0), l ? a !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: a }) : e.addEventListener(n, t, !0) : a !== void 0 ? e.addEventListener(n, t, { passive: a }) : e.addEventListener(n, t, !1);
  }
  function Co(e, n, t, l, a) {
    var s = l;
    if ((n & 1) === 0 && (n & 2) === 0 && l !== null) e: for (; ; ) {
      if (l === null) return;
      var d = l.tag;
      if (d === 3 || d === 4) {
        var N = l.stateNode.containerInfo;
        if (N === a || N.nodeType === 8 && N.parentNode === a) break;
        if (d === 4) for (d = l.return; d !== null; ) {
          var y = d.tag;
          if ((y === 3 || y === 4) && (y = d.stateNode.containerInfo, y === a || y.nodeType === 8 && y.parentNode === a)) return;
          d = d.return;
        }
        for (; N !== null; ) {
          if (d = dt(N), d === null) return;
          if (y = d.tag, y === 5 || y === 6) {
            l = s = d;
            continue e;
          }
          N = N.parentNode;
        }
      }
      l = l.return;
    }
    Tc(function() {
      var B = s, M = Zl(t), P = [];
      e: {
        var A = Bs.get(e);
        if (A !== void 0) {
          var K = fo, H = e;
          switch (e) {
            case "keypress":
              if (vi(t) === 0) break e;
            case "keydown":
            case "keyup":
              K = Oh;
              break;
            case "focusin":
              H = "focus", K = go;
              break;
            case "focusout":
              H = "blur", K = go;
              break;
            case "beforeblur":
            case "afterblur":
              K = go;
              break;
            case "click":
              if (t.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              K = ts;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              K = wh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              K = Rh;
              break;
            case Ss:
            case ks:
            case _s:
              K = _h;
              break;
            case Ds:
              K = Lh;
              break;
            case "scroll":
              K = yh;
              break;
            case "wheel":
              K = $h;
              break;
            case "copy":
            case "cut":
            case "paste":
              K = Bh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              K = is;
          }
          var W = (n & 4) !== 0, Me = !W && e === "scroll", _ = W ? A !== null ? A + "Capture" : null : A;
          W = [];
          for (var x = B, D; x !== null; ) {
            D = x;
            var O = D.stateNode;
            if (D.tag === 5 && O !== null && (D = O, _ !== null && (O = sr(x, _), O != null && W.push(Er(x, O, D)))), Me) break;
            x = x.return;
          }
          0 < W.length && (A = new K(A, H, null, t, M), P.push({ event: A, listeners: W }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (A = e === "mouseover" || e === "pointerover", K = e === "mouseout" || e === "pointerout", A && t !== ql && (H = t.relatedTarget || t.fromElement) && (dt(H) || H[Pn])) break e;
          if ((K || A) && (A = M.window === M ? M : (A = M.ownerDocument) ? A.defaultView || A.parentWindow : window, K ? (H = t.relatedTarget || t.toElement, K = B, H = H ? dt(H) : null, H !== null && (Me = ut(H), H !== Me || H.tag !== 5 && H.tag !== 6) && (H = null)) : (K = null, H = B), K !== H)) {
            if (W = ts, O = "onMouseLeave", _ = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (W = is, O = "onPointerLeave", _ = "onPointerEnter", x = "pointer"), Me = K == null ? A : $t(K), D = H == null ? A : $t(H), A = new W(O, x + "leave", K, t, M), A.target = Me, A.relatedTarget = D, O = null, dt(M) === B && (W = new W(_, x + "enter", H, t, M), W.target = D, W.relatedTarget = Me, O = W), Me = O, K && H) n: {
              for (W = K, _ = H, x = 0, D = W; D; D = Lt(D)) x++;
              for (D = 0, O = _; O; O = Lt(O)) D++;
              for (; 0 < x - D; ) W = Lt(W), x--;
              for (; 0 < D - x; ) _ = Lt(_), D--;
              for (; x--; ) {
                if (W === _ || _ !== null && W === _.alternate) break n;
                W = Lt(W), _ = Lt(_);
              }
              W = null;
            }
            else W = null;
            K !== null && Vs(P, A, K, W, !1), H !== null && Me !== null && Vs(P, Me, H, W, !0);
          }
        }
        e: {
          if (A = B ? $t(B) : window, K = A.nodeName && A.nodeName.toLowerCase(), K === "select" || K === "input" && A.type === "file") var Y = Wh;
          else if (us(A)) if (fs) Y = Zh;
          else {
            Y = Yh;
            var J = Xh;
          }
          else (K = A.nodeName) && K.toLowerCase() === "input" && (A.type === "checkbox" || A.type === "radio") && (Y = qh);
          if (Y && (Y = Y(e, B))) {
            ds(P, Y, t, M);
            break e;
          }
          J && J(e, A, B), e === "focusout" && (J = A._wrapperState) && J.controlled && A.type === "number" && Ul(A, "number", A.value);
        }
        switch (J = B ? $t(B) : window, e) {
          case "focusin":
            (us(J) || J.contentEditable === "true") && (Rt = J, wo = B, Dr = null);
            break;
          case "focusout":
            Dr = wo = Rt = null;
            break;
          case "mousedown":
            So = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            So = !1, xs(P, t, M);
            break;
          case "selectionchange":
            if (ep) break;
          case "keydown":
          case "keyup":
            xs(P, t, M);
        }
        var ee;
        if (No) e: {
          switch (e) {
            case "compositionstart":
              var re = "onCompositionStart";
              break e;
            case "compositionend":
              re = "onCompositionEnd";
              break e;
            case "compositionupdate":
              re = "onCompositionUpdate";
              break e;
          }
          re = void 0;
        }
        else Tt ? cs(e, t) && (re = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (re = "onCompositionStart");
        re && (ls && t.locale !== "ko" && (Tt || re !== "onCompositionStart" ? re === "onCompositionEnd" && Tt && (ee = es()) : (Wn = M, uo = "value" in Wn ? Wn.value : Wn.textContent, Tt = !0)), J = Di(B, re), 0 < J.length && (re = new rs(re, e, null, t, M), P.push({ event: re, listeners: J }), ee ? re.data = ee : (ee = ss(t), ee !== null && (re.data = ee)))), (ee = Kh ? Qh(e, t) : jh(e, t)) && (B = Di(B, "onBeforeInput"), 0 < B.length && (M = new rs("onBeforeInput", "beforeinput", null, t, M), P.push({ event: M, listeners: B }), M.data = ee));
      }
      As(P, n);
    });
  }
  function Er(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function Di(e, n) {
    for (var t = n + "Capture", l = []; e !== null; ) {
      var a = e, s = a.stateNode;
      a.tag === 5 && s !== null && (a = s, s = sr(e, t), s != null && l.unshift(Er(e, s, a)), s = sr(e, n), s != null && l.push(Er(e, s, a))), e = e.return;
    }
    return l;
  }
  function Lt(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Vs(e, n, t, l, a) {
    for (var s = n._reactName, d = []; t !== null && t !== l; ) {
      var N = t, y = N.alternate, B = N.stateNode;
      if (y !== null && y === l) break;
      N.tag === 5 && B !== null && (N = B, a ? (y = sr(t, s), y != null && d.unshift(Er(t, y, N))) : a || (y = sr(t, s), y != null && d.push(Er(t, y, N)))), t = t.return;
    }
    d.length !== 0 && e.push({ event: n, listeners: d });
  }
  var ip = /\r\n?/g, lp = /\u0000|\uFFFD/g;
  function Ps(e) {
    return (typeof e == "string" ? e : "" + e).replace(ip, `
`).replace(lp, "");
  }
  function Bi(e, n, t) {
    if (n = Ps(n), Ps(e) !== n && t) throw Error(o(425));
  }
  function Ci() {
  }
  var Eo = null, Ao = null;
  function Mo(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Vo = typeof setTimeout == "function" ? setTimeout : void 0, op = typeof clearTimeout == "function" ? clearTimeout : void 0, Os = typeof Promise == "function" ? Promise : void 0, ap = typeof queueMicrotask == "function" ? queueMicrotask : typeof Os < "u" ? function(e) {
    return Os.resolve(null).then(e).catch(cp);
  } : Vo;
  function cp(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Po(e, n) {
    var t = n, l = 0;
    do {
      var a = t.nextSibling;
      if (e.removeChild(t), a && a.nodeType === 8) if (t = a.data, t === "/$") {
        if (l === 0) {
          e.removeChild(a), vr(n);
          return;
        }
        l--;
      } else t !== "$" && t !== "$?" && t !== "$!" || l++;
      t = a;
    } while (t);
    vr(n);
  }
  function Yn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = e.data, n === "$" || n === "$!" || n === "$?") break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  function zs(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "$" || t === "$!" || t === "$?") {
          if (n === 0) return e;
          n--;
        } else t === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Ft = Math.random().toString(36).slice(2), _n = "__reactFiber$" + Ft, Ar = "__reactProps$" + Ft, Pn = "__reactContainer$" + Ft, Oo = "__reactEvents$" + Ft, sp = "__reactListeners$" + Ft, up = "__reactHandles$" + Ft;
  function dt(e) {
    var n = e[_n];
    if (n) return n;
    for (var t = e.parentNode; t; ) {
      if (n = t[Pn] || t[_n]) {
        if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for (e = zs(e); e !== null; ) {
          if (t = e[_n]) return t;
          e = zs(e);
        }
        return n;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function Mr(e) {
    return e = e[_n] || e[Pn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function $t(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Ei(e) {
    return e[Ar] || null;
  }
  var zo = [], Gt = -1;
  function qn(e) {
    return { current: e };
  }
  function ke(e) {
    0 > Gt || (e.current = zo[Gt], zo[Gt] = null, Gt--);
  }
  function we(e, n) {
    Gt++, zo[Gt] = e.current, e.current = n;
  }
  var Zn = {}, $e = qn(Zn), We = qn(!1), ft = Zn;
  function Kt(e, n) {
    var t = e.type.contextTypes;
    if (!t) return Zn;
    var l = e.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === n) return l.__reactInternalMemoizedMaskedChildContext;
    var a = {}, s;
    for (s in t) a[s] = n[s];
    return l && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = a), a;
  }
  function Xe(e) {
    return e = e.childContextTypes, e != null;
  }
  function Ai() {
    ke(We), ke($e);
  }
  function Ts(e, n, t) {
    if ($e.current !== Zn) throw Error(o(168));
    we($e, n), we(We, t);
  }
  function Rs(e, n, t) {
    var l = e.stateNode;
    if (n = n.childContextTypes, typeof l.getChildContext != "function") return t;
    l = l.getChildContext();
    for (var a in l) if (!(a in n)) throw Error(o(108, Ne(e) || "Unknown", a));
    return G({}, t, l);
  }
  function Mi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Zn, ft = $e.current, we($e, e), we(We, We.current), !0;
  }
  function Is(e, n, t) {
    var l = e.stateNode;
    if (!l) throw Error(o(169));
    t ? (e = Rs(e, n, ft), l.__reactInternalMemoizedMergedChildContext = e, ke(We), ke($e), we($e, e)) : ke(We), we(We, t);
  }
  var On = null, Vi = !1, To = !1;
  function Ls(e) {
    On === null ? On = [e] : On.push(e);
  }
  function dp(e) {
    Vi = !0, Ls(e);
  }
  function bn() {
    if (!To && On !== null) {
      To = !0;
      var e = 0, n = ve;
      try {
        var t = On;
        for (ve = 1; e < t.length; e++) {
          var l = t[e];
          do
            l = l(!0);
          while (l !== null);
        }
        On = null, Vi = !1;
      } catch (a) {
        throw On !== null && (On = On.slice(e + 1)), $c(to, bn), a;
      } finally {
        ve = n, To = !1;
      }
    }
    return null;
  }
  var Qt = [], jt = 0, Pi = null, Oi = 0, on = [], an = 0, ht = null, zn = 1, Tn = "";
  function pt(e, n) {
    Qt[jt++] = Oi, Qt[jt++] = Pi, Pi = e, Oi = n;
  }
  function Fs(e, n, t) {
    on[an++] = zn, on[an++] = Tn, on[an++] = ht, ht = e;
    var l = zn;
    e = Tn;
    var a = 32 - fn(l) - 1;
    l &= ~(1 << a), t += 1;
    var s = 32 - fn(n) + a;
    if (30 < s) {
      var d = a - a % 5;
      s = (l & (1 << d) - 1).toString(32), l >>= d, a -= d, zn = 1 << 32 - fn(n) + a | t << a | l, Tn = s + e;
    } else zn = 1 << s | t << a | l, Tn = e;
  }
  function Ro(e) {
    e.return !== null && (pt(e, 1), Fs(e, 1, 0));
  }
  function Io(e) {
    for (; e === Pi; ) Pi = Qt[--jt], Qt[jt] = null, Oi = Qt[--jt], Qt[jt] = null;
    for (; e === ht; ) ht = on[--an], on[an] = null, Tn = on[--an], on[an] = null, zn = on[--an], on[an] = null;
  }
  var tn = null, rn = null, _e = !1, pn = null;
  function $s(e, n) {
    var t = dn(5, null, null, 0);
    t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
  }
  function Gs(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, tn = e, rn = Yn(n.firstChild), !0) : !1;
      case 6:
        return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, tn = e, rn = null, !0) : !1;
      case 13:
        return n = n.nodeType !== 8 ? null : n, n !== null ? (t = ht !== null ? { id: zn, overflow: Tn } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = dn(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, tn = e, rn = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Lo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Fo(e) {
    if (_e) {
      var n = rn;
      if (n) {
        var t = n;
        if (!Gs(e, n)) {
          if (Lo(e)) throw Error(o(418));
          n = Yn(t.nextSibling);
          var l = tn;
          n && Gs(e, n) ? $s(l, t) : (e.flags = e.flags & -4097 | 2, _e = !1, tn = e);
        }
      } else {
        if (Lo(e)) throw Error(o(418));
        e.flags = e.flags & -4097 | 2, _e = !1, tn = e;
      }
    }
  }
  function Ks(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    tn = e;
  }
  function zi(e) {
    if (e !== tn) return !1;
    if (!_e) return Ks(e), _e = !0, !1;
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !Mo(e.type, e.memoizedProps)), n && (n = rn)) {
      if (Lo(e)) throw Qs(), Error(o(418));
      for (; n; ) $s(e, n), n = Yn(n.nextSibling);
    }
    if (Ks(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n === 0) {
                rn = Yn(e.nextSibling);
                break e;
              }
              n--;
            } else t !== "$" && t !== "$!" && t !== "$?" || n++;
          }
          e = e.nextSibling;
        }
        rn = null;
      }
    } else rn = tn ? Yn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Qs() {
    for (var e = rn; e; ) e = Yn(e.nextSibling);
  }
  function Ut() {
    rn = tn = null, _e = !1;
  }
  function $o(e) {
    pn === null ? pn = [e] : pn.push(e);
  }
  var fp = ne.ReactCurrentBatchConfig;
  function Vr(e, n, t) {
    if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (t._owner) {
        if (t = t._owner, t) {
          if (t.tag !== 1) throw Error(o(309));
          var l = t.stateNode;
        }
        if (!l) throw Error(o(147, e));
        var a = l, s = "" + e;
        return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === s ? n.ref : (n = function(d) {
          var N = a.refs;
          d === null ? delete N[s] : N[s] = d;
        }, n._stringRef = s, n);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!t._owner) throw Error(o(290, e));
    }
    return e;
  }
  function Ti(e, n) {
    throw e = Object.prototype.toString.call(n), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  function js(e) {
    var n = e._init;
    return n(e._payload);
  }
  function Us(e) {
    function n(_, x) {
      if (e) {
        var D = _.deletions;
        D === null ? (_.deletions = [x], _.flags |= 16) : D.push(x);
      }
    }
    function t(_, x) {
      if (!e) return null;
      for (; x !== null; ) n(_, x), x = x.sibling;
      return null;
    }
    function l(_, x) {
      for (_ = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? _.set(x.key, x) : _.set(x.index, x), x = x.sibling;
      return _;
    }
    function a(_, x) {
      return _ = ot(_, x), _.index = 0, _.sibling = null, _;
    }
    function s(_, x, D) {
      return _.index = D, e ? (D = _.alternate, D !== null ? (D = D.index, D < x ? (_.flags |= 2, x) : D) : (_.flags |= 2, x)) : (_.flags |= 1048576, x);
    }
    function d(_) {
      return e && _.alternate === null && (_.flags |= 2), _;
    }
    function N(_, x, D, O) {
      return x === null || x.tag !== 6 ? (x = Va(D, _.mode, O), x.return = _, x) : (x = a(x, D), x.return = _, x);
    }
    function y(_, x, D, O) {
      var Y = D.type;
      return Y === T ? M(_, x, D.props.children, O, D.key) : x !== null && (x.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === De && js(Y) === x.type) ? (O = a(x, D.props), O.ref = Vr(_, x, D), O.return = _, O) : (O = ll(D.type, D.key, D.props, null, _.mode, O), O.ref = Vr(_, x, D), O.return = _, O);
    }
    function B(_, x, D, O) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== D.containerInfo || x.stateNode.implementation !== D.implementation ? (x = Pa(D, _.mode, O), x.return = _, x) : (x = a(x, D.children || []), x.return = _, x);
    }
    function M(_, x, D, O, Y) {
      return x === null || x.tag !== 7 ? (x = St(D, _.mode, O, Y), x.return = _, x) : (x = a(x, D), x.return = _, x);
    }
    function P(_, x, D) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = Va("" + x, _.mode, D), x.return = _, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case ue:
            return D = ll(x.type, x.key, x.props, null, _.mode, D), D.ref = Vr(_, null, x), D.return = _, D;
          case ie:
            return x = Pa(x, _.mode, D), x.return = _, x;
          case De:
            var O = x._init;
            return P(_, O(x._payload), D);
        }
        if (or(x) || X(x)) return x = St(x, _.mode, D, null), x.return = _, x;
        Ti(_, x);
      }
      return null;
    }
    function A(_, x, D, O) {
      var Y = x !== null ? x.key : null;
      if (typeof D == "string" && D !== "" || typeof D == "number") return Y !== null ? null : N(_, x, "" + D, O);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case ue:
            return D.key === Y ? y(_, x, D, O) : null;
          case ie:
            return D.key === Y ? B(_, x, D, O) : null;
          case De:
            return Y = D._init, A(
              _,
              x,
              Y(D._payload),
              O
            );
        }
        if (or(D) || X(D)) return Y !== null ? null : M(_, x, D, O, null);
        Ti(_, D);
      }
      return null;
    }
    function K(_, x, D, O, Y) {
      if (typeof O == "string" && O !== "" || typeof O == "number") return _ = _.get(D) || null, N(x, _, "" + O, Y);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case ue:
            return _ = _.get(O.key === null ? D : O.key) || null, y(x, _, O, Y);
          case ie:
            return _ = _.get(O.key === null ? D : O.key) || null, B(x, _, O, Y);
          case De:
            var J = O._init;
            return K(_, x, D, J(O._payload), Y);
        }
        if (or(O) || X(O)) return _ = _.get(D) || null, M(x, _, O, Y, null);
        Ti(x, O);
      }
      return null;
    }
    function H(_, x, D, O) {
      for (var Y = null, J = null, ee = x, re = x = 0, Re = null; ee !== null && re < D.length; re++) {
        ee.index > re ? (Re = ee, ee = null) : Re = ee.sibling;
        var me = A(_, ee, D[re], O);
        if (me === null) {
          ee === null && (ee = Re);
          break;
        }
        e && ee && me.alternate === null && n(_, ee), x = s(me, x, re), J === null ? Y = me : J.sibling = me, J = me, ee = Re;
      }
      if (re === D.length) return t(_, ee), _e && pt(_, re), Y;
      if (ee === null) {
        for (; re < D.length; re++) ee = P(_, D[re], O), ee !== null && (x = s(ee, x, re), J === null ? Y = ee : J.sibling = ee, J = ee);
        return _e && pt(_, re), Y;
      }
      for (ee = l(_, ee); re < D.length; re++) Re = K(ee, _, re, D[re], O), Re !== null && (e && Re.alternate !== null && ee.delete(Re.key === null ? re : Re.key), x = s(Re, x, re), J === null ? Y = Re : J.sibling = Re, J = Re);
      return e && ee.forEach(function(at) {
        return n(_, at);
      }), _e && pt(_, re), Y;
    }
    function W(_, x, D, O) {
      var Y = X(D);
      if (typeof Y != "function") throw Error(o(150));
      if (D = Y.call(D), D == null) throw Error(o(151));
      for (var J = Y = null, ee = x, re = x = 0, Re = null, me = D.next(); ee !== null && !me.done; re++, me = D.next()) {
        ee.index > re ? (Re = ee, ee = null) : Re = ee.sibling;
        var at = A(_, ee, me.value, O);
        if (at === null) {
          ee === null && (ee = Re);
          break;
        }
        e && ee && at.alternate === null && n(_, ee), x = s(at, x, re), J === null ? Y = at : J.sibling = at, J = at, ee = Re;
      }
      if (me.done) return t(
        _,
        ee
      ), _e && pt(_, re), Y;
      if (ee === null) {
        for (; !me.done; re++, me = D.next()) me = P(_, me.value, O), me !== null && (x = s(me, x, re), J === null ? Y = me : J.sibling = me, J = me);
        return _e && pt(_, re), Y;
      }
      for (ee = l(_, ee); !me.done; re++, me = D.next()) me = K(ee, _, re, me.value, O), me !== null && (e && me.alternate !== null && ee.delete(me.key === null ? re : me.key), x = s(me, x, re), J === null ? Y = me : J.sibling = me, J = me);
      return e && ee.forEach(function(Up) {
        return n(_, Up);
      }), _e && pt(_, re), Y;
    }
    function Me(_, x, D, O) {
      if (typeof D == "object" && D !== null && D.type === T && D.key === null && (D = D.props.children), typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case ue:
            e: {
              for (var Y = D.key, J = x; J !== null; ) {
                if (J.key === Y) {
                  if (Y = D.type, Y === T) {
                    if (J.tag === 7) {
                      t(_, J.sibling), x = a(J, D.props.children), x.return = _, _ = x;
                      break e;
                    }
                  } else if (J.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === De && js(Y) === J.type) {
                    t(_, J.sibling), x = a(J, D.props), x.ref = Vr(_, J, D), x.return = _, _ = x;
                    break e;
                  }
                  t(_, J);
                  break;
                } else n(_, J);
                J = J.sibling;
              }
              D.type === T ? (x = St(D.props.children, _.mode, O, D.key), x.return = _, _ = x) : (O = ll(D.type, D.key, D.props, null, _.mode, O), O.ref = Vr(_, x, D), O.return = _, _ = O);
            }
            return d(_);
          case ie:
            e: {
              for (J = D.key; x !== null; ) {
                if (x.key === J) if (x.tag === 4 && x.stateNode.containerInfo === D.containerInfo && x.stateNode.implementation === D.implementation) {
                  t(_, x.sibling), x = a(x, D.children || []), x.return = _, _ = x;
                  break e;
                } else {
                  t(_, x);
                  break;
                }
                else n(_, x);
                x = x.sibling;
              }
              x = Pa(D, _.mode, O), x.return = _, _ = x;
            }
            return d(_);
          case De:
            return J = D._init, Me(_, x, J(D._payload), O);
        }
        if (or(D)) return H(_, x, D, O);
        if (X(D)) return W(_, x, D, O);
        Ti(_, D);
      }
      return typeof D == "string" && D !== "" || typeof D == "number" ? (D = "" + D, x !== null && x.tag === 6 ? (t(_, x.sibling), x = a(x, D), x.return = _, _ = x) : (t(_, x), x = Va(D, _.mode, O), x.return = _, _ = x), d(_)) : t(_, x);
    }
    return Me;
  }
  var Ht = Us(!0), Hs = Us(!1), Ri = qn(null), Ii = null, Wt = null, Go = null;
  function Ko() {
    Go = Wt = Ii = null;
  }
  function Qo(e) {
    var n = Ri.current;
    ke(Ri), e._currentValue = n;
  }
  function jo(e, n, t) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, l !== null && (l.childLanes |= n)) : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n), e === t) break;
      e = e.return;
    }
  }
  function Xt(e, n) {
    Ii = e, Go = Wt = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & n) !== 0 && (Ye = !0), e.firstContext = null);
  }
  function cn(e) {
    var n = e._currentValue;
    if (Go !== e) if (e = { context: e, memoizedValue: n, next: null }, Wt === null) {
      if (Ii === null) throw Error(o(308));
      Wt = e, Ii.dependencies = { lanes: 0, firstContext: e };
    } else Wt = Wt.next = e;
    return n;
  }
  var gt = null;
  function Uo(e) {
    gt === null ? gt = [e] : gt.push(e);
  }
  function Ws(e, n, t, l) {
    var a = n.interleaved;
    return a === null ? (t.next = t, Uo(n)) : (t.next = a.next, a.next = t), n.interleaved = t, Rn(e, l);
  }
  function Rn(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; ) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Jn = !1;
  function Ho(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Xs(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function In(e, n) {
    return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function et(e, n, t) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (ge & 2) !== 0) {
      var a = l.pending;
      return a === null ? n.next = n : (n.next = a.next, a.next = n), l.pending = n, Rn(e, t);
    }
    return a = l.interleaved, a === null ? (n.next = n, Uo(l)) : (n.next = a.next, a.next = n), l.interleaved = n, Rn(e, t);
  }
  function Li(e, n, t) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
      var l = n.lanes;
      l &= e.pendingLanes, t |= l, n.lanes = t, lo(e, t);
    }
  }
  function Ys(e, n) {
    var t = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, t === l)) {
      var a = null, s = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var d = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
          s === null ? a = s = d : s = s.next = d, t = t.next;
        } while (t !== null);
        s === null ? a = s = n : s = s.next = n;
      } else a = s = n;
      t = { baseState: l.baseState, firstBaseUpdate: a, lastBaseUpdate: s, shared: l.shared, effects: l.effects }, e.updateQueue = t;
      return;
    }
    e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
  }
  function Fi(e, n, t, l) {
    var a = e.updateQueue;
    Jn = !1;
    var s = a.firstBaseUpdate, d = a.lastBaseUpdate, N = a.shared.pending;
    if (N !== null) {
      a.shared.pending = null;
      var y = N, B = y.next;
      y.next = null, d === null ? s = B : d.next = B, d = y;
      var M = e.alternate;
      M !== null && (M = M.updateQueue, N = M.lastBaseUpdate, N !== d && (N === null ? M.firstBaseUpdate = B : N.next = B, M.lastBaseUpdate = y));
    }
    if (s !== null) {
      var P = a.baseState;
      d = 0, M = B = y = null, N = s;
      do {
        var A = N.lane, K = N.eventTime;
        if ((l & A) === A) {
          M !== null && (M = M.next = {
            eventTime: K,
            lane: 0,
            tag: N.tag,
            payload: N.payload,
            callback: N.callback,
            next: null
          });
          e: {
            var H = e, W = N;
            switch (A = n, K = t, W.tag) {
              case 1:
                if (H = W.payload, typeof H == "function") {
                  P = H.call(K, P, A);
                  break e;
                }
                P = H;
                break e;
              case 3:
                H.flags = H.flags & -65537 | 128;
              case 0:
                if (H = W.payload, A = typeof H == "function" ? H.call(K, P, A) : H, A == null) break e;
                P = G({}, P, A);
                break e;
              case 2:
                Jn = !0;
            }
          }
          N.callback !== null && N.lane !== 0 && (e.flags |= 64, A = a.effects, A === null ? a.effects = [N] : A.push(N));
        } else K = { eventTime: K, lane: A, tag: N.tag, payload: N.payload, callback: N.callback, next: null }, M === null ? (B = M = K, y = P) : M = M.next = K, d |= A;
        if (N = N.next, N === null) {
          if (N = a.shared.pending, N === null) break;
          A = N, N = A.next, A.next = null, a.lastBaseUpdate = A, a.shared.pending = null;
        }
      } while (!0);
      if (M === null && (y = P), a.baseState = y, a.firstBaseUpdate = B, a.lastBaseUpdate = M, n = a.shared.interleaved, n !== null) {
        a = n;
        do
          d |= a.lane, a = a.next;
        while (a !== n);
      } else s === null && (a.shared.lanes = 0);
      vt |= d, e.lanes = d, e.memoizedState = P;
    }
  }
  function qs(e, n, t) {
    if (e = n.effects, n.effects = null, e !== null) for (n = 0; n < e.length; n++) {
      var l = e[n], a = l.callback;
      if (a !== null) {
        if (l.callback = null, l = t, typeof a != "function") throw Error(o(191, a));
        a.call(l);
      }
    }
  }
  var Pr = {}, Dn = qn(Pr), Or = qn(Pr), zr = qn(Pr);
  function mt(e) {
    if (e === Pr) throw Error(o(174));
    return e;
  }
  function Wo(e, n) {
    switch (we(zr, n), we(Or, e), we(Dn, Pr), e = n.nodeType, e) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Wl(null, "");
        break;
      default:
        e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = Wl(n, e);
    }
    ke(Dn), we(Dn, n);
  }
  function Yt() {
    ke(Dn), ke(Or), ke(zr);
  }
  function Zs(e) {
    mt(zr.current);
    var n = mt(Dn.current), t = Wl(n, e.type);
    n !== t && (we(Or, e), we(Dn, t));
  }
  function Xo(e) {
    Or.current === e && (ke(Dn), ke(Or));
  }
  var Be = qn(0);
  function $i(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var t = n.memoizedState;
        if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!")) return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var Yo = [];
  function qo() {
    for (var e = 0; e < Yo.length; e++) Yo[e]._workInProgressVersionPrimary = null;
    Yo.length = 0;
  }
  var Gi = ne.ReactCurrentDispatcher, Zo = ne.ReactCurrentBatchConfig, Nt = 0, Ce = null, Pe = null, ze = null, Ki = !1, Tr = !1, Rr = 0, hp = 0;
  function Ge() {
    throw Error(o(321));
  }
  function bo(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++) if (!hn(e[t], n[t])) return !1;
    return !0;
  }
  function Jo(e, n, t, l, a, s) {
    if (Nt = s, Ce = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Gi.current = e === null || e.memoizedState === null ? Np : vp, e = t(l, a), Tr) {
      s = 0;
      do {
        if (Tr = !1, Rr = 0, 25 <= s) throw Error(o(301));
        s += 1, ze = Pe = null, n.updateQueue = null, Gi.current = yp, e = t(l, a);
      } while (Tr);
    }
    if (Gi.current = Ui, n = Pe !== null && Pe.next !== null, Nt = 0, ze = Pe = Ce = null, Ki = !1, n) throw Error(o(300));
    return e;
  }
  function ea() {
    var e = Rr !== 0;
    return Rr = 0, e;
  }
  function Bn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ze === null ? Ce.memoizedState = ze = e : ze = ze.next = e, ze;
  }
  function sn() {
    if (Pe === null) {
      var e = Ce.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Pe.next;
    var n = ze === null ? Ce.memoizedState : ze.next;
    if (n !== null) ze = n, Pe = e;
    else {
      if (e === null) throw Error(o(310));
      Pe = e, e = { memoizedState: Pe.memoizedState, baseState: Pe.baseState, baseQueue: Pe.baseQueue, queue: Pe.queue, next: null }, ze === null ? Ce.memoizedState = ze = e : ze = ze.next = e;
    }
    return ze;
  }
  function Ir(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function na(e) {
    var n = sn(), t = n.queue;
    if (t === null) throw Error(o(311));
    t.lastRenderedReducer = e;
    var l = Pe, a = l.baseQueue, s = t.pending;
    if (s !== null) {
      if (a !== null) {
        var d = a.next;
        a.next = s.next, s.next = d;
      }
      l.baseQueue = a = s, t.pending = null;
    }
    if (a !== null) {
      s = a.next, l = l.baseState;
      var N = d = null, y = null, B = s;
      do {
        var M = B.lane;
        if ((Nt & M) === M) y !== null && (y = y.next = { lane: 0, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }), l = B.hasEagerState ? B.eagerState : e(l, B.action);
        else {
          var P = {
            lane: M,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null
          };
          y === null ? (N = y = P, d = l) : y = y.next = P, Ce.lanes |= M, vt |= M;
        }
        B = B.next;
      } while (B !== null && B !== s);
      y === null ? d = l : y.next = N, hn(l, n.memoizedState) || (Ye = !0), n.memoizedState = l, n.baseState = d, n.baseQueue = y, t.lastRenderedState = l;
    }
    if (e = t.interleaved, e !== null) {
      a = e;
      do
        s = a.lane, Ce.lanes |= s, vt |= s, a = a.next;
      while (a !== e);
    } else a === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function ta(e) {
    var n = sn(), t = n.queue;
    if (t === null) throw Error(o(311));
    t.lastRenderedReducer = e;
    var l = t.dispatch, a = t.pending, s = n.memoizedState;
    if (a !== null) {
      t.pending = null;
      var d = a = a.next;
      do
        s = e(s, d.action), d = d.next;
      while (d !== a);
      hn(s, n.memoizedState) || (Ye = !0), n.memoizedState = s, n.baseQueue === null && (n.baseState = s), t.lastRenderedState = s;
    }
    return [s, l];
  }
  function bs() {
  }
  function Js(e, n) {
    var t = Ce, l = sn(), a = n(), s = !hn(l.memoizedState, a);
    if (s && (l.memoizedState = a, Ye = !0), l = l.queue, ra(tu.bind(null, t, l, e), [e]), l.getSnapshot !== n || s || ze !== null && ze.memoizedState.tag & 1) {
      if (t.flags |= 2048, Lr(9, nu.bind(null, t, l, a, n), void 0, null), Te === null) throw Error(o(349));
      (Nt & 30) !== 0 || eu(t, n, a);
    }
    return a;
  }
  function eu(e, n, t) {
    e.flags |= 16384, e = { getSnapshot: n, value: t }, n = Ce.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, Ce.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
  }
  function nu(e, n, t, l) {
    n.value = t, n.getSnapshot = l, ru(n) && iu(e);
  }
  function tu(e, n, t) {
    return t(function() {
      ru(n) && iu(e);
    });
  }
  function ru(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !hn(e, t);
    } catch {
      return !0;
    }
  }
  function iu(e) {
    var n = Rn(e, 1);
    n !== null && vn(n, e, 1, -1);
  }
  function lu(e) {
    var n = Bn();
    return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ir, lastRenderedState: e }, n.queue = e, e = e.dispatch = mp.bind(null, Ce, e), [n.memoizedState, e];
  }
  function Lr(e, n, t, l) {
    return e = { tag: e, create: n, destroy: t, deps: l, next: null }, n = Ce.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, Ce.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (l = t.next, t.next = e, e.next = l, n.lastEffect = e)), e;
  }
  function ou() {
    return sn().memoizedState;
  }
  function Qi(e, n, t, l) {
    var a = Bn();
    Ce.flags |= e, a.memoizedState = Lr(1 | n, t, void 0, l === void 0 ? null : l);
  }
  function ji(e, n, t, l) {
    var a = sn();
    l = l === void 0 ? null : l;
    var s = void 0;
    if (Pe !== null) {
      var d = Pe.memoizedState;
      if (s = d.destroy, l !== null && bo(l, d.deps)) {
        a.memoizedState = Lr(n, t, s, l);
        return;
      }
    }
    Ce.flags |= e, a.memoizedState = Lr(1 | n, t, s, l);
  }
  function au(e, n) {
    return Qi(8390656, 8, e, n);
  }
  function ra(e, n) {
    return ji(2048, 8, e, n);
  }
  function cu(e, n) {
    return ji(4, 2, e, n);
  }
  function su(e, n) {
    return ji(4, 4, e, n);
  }
  function uu(e, n) {
    if (typeof n == "function") return e = e(), n(e), function() {
      n(null);
    };
    if (n != null) return e = e(), n.current = e, function() {
      n.current = null;
    };
  }
  function du(e, n, t) {
    return t = t != null ? t.concat([e]) : null, ji(4, 4, uu.bind(null, n, e), t);
  }
  function ia() {
  }
  function fu(e, n) {
    var t = sn();
    n = n === void 0 ? null : n;
    var l = t.memoizedState;
    return l !== null && n !== null && bo(n, l[1]) ? l[0] : (t.memoizedState = [e, n], e);
  }
  function hu(e, n) {
    var t = sn();
    n = n === void 0 ? null : n;
    var l = t.memoizedState;
    return l !== null && n !== null && bo(n, l[1]) ? l[0] : (e = e(), t.memoizedState = [e, n], e);
  }
  function pu(e, n, t) {
    return (Nt & 21) === 0 ? (e.baseState && (e.baseState = !1, Ye = !0), e.memoizedState = t) : (hn(t, n) || (t = jc(), Ce.lanes |= t, vt |= t, e.baseState = !0), n);
  }
  function pp(e, n) {
    var t = ve;
    ve = t !== 0 && 4 > t ? t : 4, e(!0);
    var l = Zo.transition;
    Zo.transition = {};
    try {
      e(!1), n();
    } finally {
      ve = t, Zo.transition = l;
    }
  }
  function gu() {
    return sn().memoizedState;
  }
  function gp(e, n, t) {
    var l = it(e);
    if (t = { lane: l, action: t, hasEagerState: !1, eagerState: null, next: null }, mu(e)) Nu(n, t);
    else if (t = Ws(e, n, t, l), t !== null) {
      var a = He();
      vn(t, e, l, a), vu(t, n, l);
    }
  }
  function mp(e, n, t) {
    var l = it(e), a = { lane: l, action: t, hasEagerState: !1, eagerState: null, next: null };
    if (mu(e)) Nu(n, a);
    else {
      var s = e.alternate;
      if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = n.lastRenderedReducer, s !== null)) try {
        var d = n.lastRenderedState, N = s(d, t);
        if (a.hasEagerState = !0, a.eagerState = N, hn(N, d)) {
          var y = n.interleaved;
          y === null ? (a.next = a, Uo(n)) : (a.next = y.next, y.next = a), n.interleaved = a;
          return;
        }
      } catch {
      } finally {
      }
      t = Ws(e, n, a, l), t !== null && (a = He(), vn(t, e, l, a), vu(t, n, l));
    }
  }
  function mu(e) {
    var n = e.alternate;
    return e === Ce || n !== null && n === Ce;
  }
  function Nu(e, n) {
    Tr = Ki = !0;
    var t = e.pending;
    t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
  }
  function vu(e, n, t) {
    if ((t & 4194240) !== 0) {
      var l = n.lanes;
      l &= e.pendingLanes, t |= l, n.lanes = t, lo(e, t);
    }
  }
  var Ui = { readContext: cn, useCallback: Ge, useContext: Ge, useEffect: Ge, useImperativeHandle: Ge, useInsertionEffect: Ge, useLayoutEffect: Ge, useMemo: Ge, useReducer: Ge, useRef: Ge, useState: Ge, useDebugValue: Ge, useDeferredValue: Ge, useTransition: Ge, useMutableSource: Ge, useSyncExternalStore: Ge, useId: Ge, unstable_isNewReconciler: !1 }, Np = { readContext: cn, useCallback: function(e, n) {
    return Bn().memoizedState = [e, n === void 0 ? null : n], e;
  }, useContext: cn, useEffect: au, useImperativeHandle: function(e, n, t) {
    return t = t != null ? t.concat([e]) : null, Qi(
      4194308,
      4,
      uu.bind(null, n, e),
      t
    );
  }, useLayoutEffect: function(e, n) {
    return Qi(4194308, 4, e, n);
  }, useInsertionEffect: function(e, n) {
    return Qi(4, 2, e, n);
  }, useMemo: function(e, n) {
    var t = Bn();
    return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
  }, useReducer: function(e, n, t) {
    var l = Bn();
    return n = t !== void 0 ? t(n) : n, l.memoizedState = l.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, l.queue = e, e = e.dispatch = gp.bind(null, Ce, e), [l.memoizedState, e];
  }, useRef: function(e) {
    var n = Bn();
    return e = { current: e }, n.memoizedState = e;
  }, useState: lu, useDebugValue: ia, useDeferredValue: function(e) {
    return Bn().memoizedState = e;
  }, useTransition: function() {
    var e = lu(!1), n = e[0];
    return e = pp.bind(null, e[1]), Bn().memoizedState = e, [n, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, n, t) {
    var l = Ce, a = Bn();
    if (_e) {
      if (t === void 0) throw Error(o(407));
      t = t();
    } else {
      if (t = n(), Te === null) throw Error(o(349));
      (Nt & 30) !== 0 || eu(l, n, t);
    }
    a.memoizedState = t;
    var s = { value: t, getSnapshot: n };
    return a.queue = s, au(tu.bind(
      null,
      l,
      s,
      e
    ), [e]), l.flags |= 2048, Lr(9, nu.bind(null, l, s, t, n), void 0, null), t;
  }, useId: function() {
    var e = Bn(), n = Te.identifierPrefix;
    if (_e) {
      var t = Tn, l = zn;
      t = (l & ~(1 << 32 - fn(l) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = Rr++, 0 < t && (n += "H" + t.toString(32)), n += ":";
    } else t = hp++, n = ":" + n + "r" + t.toString(32) + ":";
    return e.memoizedState = n;
  }, unstable_isNewReconciler: !1 }, vp = {
    readContext: cn,
    useCallback: fu,
    useContext: cn,
    useEffect: ra,
    useImperativeHandle: du,
    useInsertionEffect: cu,
    useLayoutEffect: su,
    useMemo: hu,
    useReducer: na,
    useRef: ou,
    useState: function() {
      return na(Ir);
    },
    useDebugValue: ia,
    useDeferredValue: function(e) {
      var n = sn();
      return pu(n, Pe.memoizedState, e);
    },
    useTransition: function() {
      var e = na(Ir)[0], n = sn().memoizedState;
      return [e, n];
    },
    useMutableSource: bs,
    useSyncExternalStore: Js,
    useId: gu,
    unstable_isNewReconciler: !1
  }, yp = { readContext: cn, useCallback: fu, useContext: cn, useEffect: ra, useImperativeHandle: du, useInsertionEffect: cu, useLayoutEffect: su, useMemo: hu, useReducer: ta, useRef: ou, useState: function() {
    return ta(Ir);
  }, useDebugValue: ia, useDeferredValue: function(e) {
    var n = sn();
    return Pe === null ? n.memoizedState = e : pu(n, Pe.memoizedState, e);
  }, useTransition: function() {
    var e = ta(Ir)[0], n = sn().memoizedState;
    return [e, n];
  }, useMutableSource: bs, useSyncExternalStore: Js, useId: gu, unstable_isNewReconciler: !1 };
  function gn(e, n) {
    if (e && e.defaultProps) {
      n = G({}, n), e = e.defaultProps;
      for (var t in e) n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  function la(e, n, t, l) {
    n = e.memoizedState, t = t(l, n), t = t == null ? n : G({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var Hi = { isMounted: function(e) {
    return (e = e._reactInternals) ? ut(e) === e : !1;
  }, enqueueSetState: function(e, n, t) {
    e = e._reactInternals;
    var l = He(), a = it(e), s = In(l, a);
    s.payload = n, t != null && (s.callback = t), n = et(e, s, a), n !== null && (vn(n, e, a, l), Li(n, e, a));
  }, enqueueReplaceState: function(e, n, t) {
    e = e._reactInternals;
    var l = He(), a = it(e), s = In(l, a);
    s.tag = 1, s.payload = n, t != null && (s.callback = t), n = et(e, s, a), n !== null && (vn(n, e, a, l), Li(n, e, a));
  }, enqueueForceUpdate: function(e, n) {
    e = e._reactInternals;
    var t = He(), l = it(e), a = In(t, l);
    a.tag = 2, n != null && (a.callback = n), n = et(e, a, l), n !== null && (vn(n, e, l, t), Li(n, e, l));
  } };
  function yu(e, n, t, l, a, s, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, s, d) : n.prototype && n.prototype.isPureReactComponent ? !_r(t, l) || !_r(a, s) : !0;
  }
  function xu(e, n, t) {
    var l = !1, a = Zn, s = n.contextType;
    return typeof s == "object" && s !== null ? s = cn(s) : (a = Xe(n) ? ft : $e.current, l = n.contextTypes, s = (l = l != null) ? Kt(e, a) : Zn), n = new n(t, s), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Hi, e.stateNode = n, n._reactInternals = e, l && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = s), n;
  }
  function wu(e, n, t, l) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, l), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, l), n.state !== e && Hi.enqueueReplaceState(n, n.state, null);
  }
  function oa(e, n, t, l) {
    var a = e.stateNode;
    a.props = t, a.state = e.memoizedState, a.refs = {}, Ho(e);
    var s = n.contextType;
    typeof s == "object" && s !== null ? a.context = cn(s) : (s = Xe(n) ? ft : $e.current, a.context = Kt(e, s)), a.state = e.memoizedState, s = n.getDerivedStateFromProps, typeof s == "function" && (la(e, n, s, t), a.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (n = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), n !== a.state && Hi.enqueueReplaceState(a, a.state, null), Fi(e, t, a, l), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function qt(e, n) {
    try {
      var t = "", l = n;
      do
        t += ce(l), l = l.return;
      while (l);
      var a = t;
    } catch (s) {
      a = `
Error generating stack: ` + s.message + `
` + s.stack;
    }
    return { value: e, source: n, stack: a, digest: null };
  }
  function aa(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
  }
  function ca(e, n) {
    try {
      console.error(n.value);
    } catch (t) {
      setTimeout(function() {
        throw t;
      });
    }
  }
  var xp = typeof WeakMap == "function" ? WeakMap : Map;
  function Su(e, n, t) {
    t = In(-1, t), t.tag = 3, t.payload = { element: null };
    var l = n.value;
    return t.callback = function() {
      Ji || (Ji = !0, ka = l), ca(e, n);
    }, t;
  }
  function ku(e, n, t) {
    t = In(-1, t), t.tag = 3;
    var l = e.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var a = n.value;
      t.payload = function() {
        return l(a);
      }, t.callback = function() {
        ca(e, n);
      };
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (t.callback = function() {
      ca(e, n), typeof l != "function" && (tt === null ? tt = /* @__PURE__ */ new Set([this]) : tt.add(this));
      var d = n.stack;
      this.componentDidCatch(n.value, { componentStack: d !== null ? d : "" });
    }), t;
  }
  function _u(e, n, t) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new xp();
      var a = /* @__PURE__ */ new Set();
      l.set(n, a);
    } else a = l.get(n), a === void 0 && (a = /* @__PURE__ */ new Set(), l.set(n, a));
    a.has(t) || (a.add(t), e = zp.bind(null, e, n, t), n.then(e, e));
  }
  function Du(e) {
    do {
      var n;
      if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Bu(e, n, t, l, a) {
    return (e.mode & 1) === 0 ? (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = In(-1, 1), n.tag = 2, et(t, n, 1))), t.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e);
  }
  var wp = ne.ReactCurrentOwner, Ye = !1;
  function Ue(e, n, t, l) {
    n.child = e === null ? Hs(n, null, t, l) : Ht(n, e.child, t, l);
  }
  function Cu(e, n, t, l, a) {
    t = t.render;
    var s = n.ref;
    return Xt(n, a), l = Jo(e, n, t, l, s, a), t = ea(), e !== null && !Ye ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~a, Ln(e, n, a)) : (_e && t && Ro(n), n.flags |= 1, Ue(e, n, l, a), n.child);
  }
  function Eu(e, n, t, l, a) {
    if (e === null) {
      var s = t.type;
      return typeof s == "function" && !Ma(s) && s.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = s, Au(e, n, s, l, a)) : (e = ll(t.type, null, l, n, n.mode, a), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (s = e.child, (e.lanes & a) === 0) {
      var d = s.memoizedProps;
      if (t = t.compare, t = t !== null ? t : _r, t(d, l) && e.ref === n.ref) return Ln(e, n, a);
    }
    return n.flags |= 1, e = ot(s, l), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Au(e, n, t, l, a) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (_r(s, l) && e.ref === n.ref) if (Ye = !1, n.pendingProps = l = s, (e.lanes & a) !== 0) (e.flags & 131072) !== 0 && (Ye = !0);
      else return n.lanes = e.lanes, Ln(e, n, a);
    }
    return sa(e, n, t, l, a);
  }
  function Mu(e, n, t) {
    var l = n.pendingProps, a = l.children, s = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") if ((n.mode & 1) === 0) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, we(bt, ln), ln |= t;
    else {
      if ((t & 1073741824) === 0) return e = s !== null ? s.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, we(bt, ln), ln |= e, null;
      n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, l = s !== null ? s.baseLanes : t, we(bt, ln), ln |= l;
    }
    else s !== null ? (l = s.baseLanes | t, n.memoizedState = null) : l = t, we(bt, ln), ln |= l;
    return Ue(e, n, a, t), n.child;
  }
  function Vu(e, n) {
    var t = n.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
  }
  function sa(e, n, t, l, a) {
    var s = Xe(t) ? ft : $e.current;
    return s = Kt(n, s), Xt(n, a), t = Jo(e, n, t, l, s, a), l = ea(), e !== null && !Ye ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~a, Ln(e, n, a)) : (_e && l && Ro(n), n.flags |= 1, Ue(e, n, t, a), n.child);
  }
  function Pu(e, n, t, l, a) {
    if (Xe(t)) {
      var s = !0;
      Mi(n);
    } else s = !1;
    if (Xt(n, a), n.stateNode === null) Xi(e, n), xu(n, t, l), oa(n, t, l, a), l = !0;
    else if (e === null) {
      var d = n.stateNode, N = n.memoizedProps;
      d.props = N;
      var y = d.context, B = t.contextType;
      typeof B == "object" && B !== null ? B = cn(B) : (B = Xe(t) ? ft : $e.current, B = Kt(n, B));
      var M = t.getDerivedStateFromProps, P = typeof M == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      P || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (N !== l || y !== B) && wu(n, d, l, B), Jn = !1;
      var A = n.memoizedState;
      d.state = A, Fi(n, l, d, a), y = n.memoizedState, N !== l || A !== y || We.current || Jn ? (typeof M == "function" && (la(n, t, M, l), y = n.memoizedState), (N = Jn || yu(n, t, N, l, A, y, B)) ? (P || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = l, n.memoizedState = y), d.props = l, d.state = y, d.context = B, l = N) : (typeof d.componentDidMount == "function" && (n.flags |= 4194308), l = !1);
    } else {
      d = n.stateNode, Xs(e, n), N = n.memoizedProps, B = n.type === n.elementType ? N : gn(n.type, N), d.props = B, P = n.pendingProps, A = d.context, y = t.contextType, typeof y == "object" && y !== null ? y = cn(y) : (y = Xe(t) ? ft : $e.current, y = Kt(n, y));
      var K = t.getDerivedStateFromProps;
      (M = typeof K == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (N !== P || A !== y) && wu(n, d, l, y), Jn = !1, A = n.memoizedState, d.state = A, Fi(n, l, d, a);
      var H = n.memoizedState;
      N !== P || A !== H || We.current || Jn ? (typeof K == "function" && (la(n, t, K, l), H = n.memoizedState), (B = Jn || yu(n, t, B, l, A, H, y) || !1) ? (M || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(l, H, y), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(l, H, y)), typeof d.componentDidUpdate == "function" && (n.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || N === e.memoizedProps && A === e.memoizedState || (n.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || N === e.memoizedProps && A === e.memoizedState || (n.flags |= 1024), n.memoizedProps = l, n.memoizedState = H), d.props = l, d.state = H, d.context = y, l = B) : (typeof d.componentDidUpdate != "function" || N === e.memoizedProps && A === e.memoizedState || (n.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || N === e.memoizedProps && A === e.memoizedState || (n.flags |= 1024), l = !1);
    }
    return ua(e, n, t, l, s, a);
  }
  function ua(e, n, t, l, a, s) {
    Vu(e, n);
    var d = (n.flags & 128) !== 0;
    if (!l && !d) return a && Is(n, t, !1), Ln(e, n, s);
    l = n.stateNode, wp.current = n;
    var N = d && typeof t.getDerivedStateFromError != "function" ? null : l.render();
    return n.flags |= 1, e !== null && d ? (n.child = Ht(n, e.child, null, s), n.child = Ht(n, null, N, s)) : Ue(e, n, N, s), n.memoizedState = l.state, a && Is(n, t, !0), n.child;
  }
  function Ou(e) {
    var n = e.stateNode;
    n.pendingContext ? Ts(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Ts(e, n.context, !1), Wo(e, n.containerInfo);
  }
  function zu(e, n, t, l, a) {
    return Ut(), $o(a), n.flags |= 256, Ue(e, n, t, l), n.child;
  }
  var da = { dehydrated: null, treeContext: null, retryLane: 0 };
  function fa(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Tu(e, n, t) {
    var l = n.pendingProps, a = Be.current, s = !1, d = (n.flags & 128) !== 0, N;
    if ((N = d) || (N = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), N ? (s = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), we(Be, a & 1), e === null)
      return Fo(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((n.mode & 1) === 0 ? n.lanes = 1 : e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824, null) : (d = l.children, e = l.fallback, s ? (l = n.mode, s = n.child, d = { mode: "hidden", children: d }, (l & 1) === 0 && s !== null ? (s.childLanes = 0, s.pendingProps = d) : s = ol(d, l, 0, null), e = St(e, l, t, null), s.return = n, e.return = n, s.sibling = e, n.child = s, n.child.memoizedState = fa(t), n.memoizedState = da, e) : ha(n, d));
    if (a = e.memoizedState, a !== null && (N = a.dehydrated, N !== null)) return Sp(e, n, d, l, N, a, t);
    if (s) {
      s = l.fallback, d = n.mode, a = e.child, N = a.sibling;
      var y = { mode: "hidden", children: l.children };
      return (d & 1) === 0 && n.child !== a ? (l = n.child, l.childLanes = 0, l.pendingProps = y, n.deletions = null) : (l = ot(a, y), l.subtreeFlags = a.subtreeFlags & 14680064), N !== null ? s = ot(N, s) : (s = St(s, d, t, null), s.flags |= 2), s.return = n, l.return = n, l.sibling = s, n.child = l, l = s, s = n.child, d = e.child.memoizedState, d = d === null ? fa(t) : { baseLanes: d.baseLanes | t, cachePool: null, transitions: d.transitions }, s.memoizedState = d, s.childLanes = e.childLanes & ~t, n.memoizedState = da, l;
    }
    return s = e.child, e = s.sibling, l = ot(s, { mode: "visible", children: l.children }), (n.mode & 1) === 0 && (l.lanes = t), l.return = n, l.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = l, n.memoizedState = null, l;
  }
  function ha(e, n) {
    return n = ol({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
  }
  function Wi(e, n, t, l) {
    return l !== null && $o(l), Ht(n, e.child, null, t), e = ha(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
  }
  function Sp(e, n, t, l, a, s, d) {
    if (t)
      return n.flags & 256 ? (n.flags &= -257, l = aa(Error(o(422))), Wi(e, n, d, l)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (s = l.fallback, a = n.mode, l = ol({ mode: "visible", children: l.children }, a, 0, null), s = St(s, a, d, null), s.flags |= 2, l.return = n, s.return = n, l.sibling = s, n.child = l, (n.mode & 1) !== 0 && Ht(n, e.child, null, d), n.child.memoizedState = fa(d), n.memoizedState = da, s);
    if ((n.mode & 1) === 0) return Wi(e, n, d, null);
    if (a.data === "$!") {
      if (l = a.nextSibling && a.nextSibling.dataset, l) var N = l.dgst;
      return l = N, s = Error(o(419)), l = aa(s, l, void 0), Wi(e, n, d, l);
    }
    if (N = (d & e.childLanes) !== 0, Ye || N) {
      if (l = Te, l !== null) {
        switch (d & -d) {
          case 4:
            a = 2;
            break;
          case 16:
            a = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            a = 32;
            break;
          case 536870912:
            a = 268435456;
            break;
          default:
            a = 0;
        }
        a = (a & (l.suspendedLanes | d)) !== 0 ? 0 : a, a !== 0 && a !== s.retryLane && (s.retryLane = a, Rn(e, a), vn(l, e, a, -1));
      }
      return Aa(), l = aa(Error(o(421))), Wi(e, n, d, l);
    }
    return a.data === "$?" ? (n.flags |= 128, n.child = e.child, n = Tp.bind(null, e), a._reactRetry = n, null) : (e = s.treeContext, rn = Yn(a.nextSibling), tn = n, _e = !0, pn = null, e !== null && (on[an++] = zn, on[an++] = Tn, on[an++] = ht, zn = e.id, Tn = e.overflow, ht = n), n = ha(n, l.children), n.flags |= 4096, n);
  }
  function Ru(e, n, t) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n), jo(e.return, n, t);
  }
  function pa(e, n, t, l, a) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: l, tail: t, tailMode: a } : (s.isBackwards = n, s.rendering = null, s.renderingStartTime = 0, s.last = l, s.tail = t, s.tailMode = a);
  }
  function Iu(e, n, t) {
    var l = n.pendingProps, a = l.revealOrder, s = l.tail;
    if (Ue(e, n, l.children, t), l = Be.current, (l & 2) !== 0) l = l & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ru(e, t, n);
        else if (e.tag === 19) Ru(e, t, n);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      l &= 1;
    }
    if (we(Be, l), (n.mode & 1) === 0) n.memoizedState = null;
    else switch (a) {
      case "forwards":
        for (t = n.child, a = null; t !== null; ) e = t.alternate, e !== null && $i(e) === null && (a = t), t = t.sibling;
        t = a, t === null ? (a = n.child, n.child = null) : (a = t.sibling, t.sibling = null), pa(n, !1, a, t, s);
        break;
      case "backwards":
        for (t = null, a = n.child, n.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && $i(e) === null) {
            n.child = a;
            break;
          }
          e = a.sibling, a.sibling = t, t = a, a = e;
        }
        pa(n, !0, t, null, s);
        break;
      case "together":
        pa(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Xi(e, n) {
    (n.mode & 1) === 0 && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
  }
  function Ln(e, n, t) {
    if (e !== null && (n.dependencies = e.dependencies), vt |= n.lanes, (t & n.childLanes) === 0) return null;
    if (e !== null && n.child !== e.child) throw Error(o(153));
    if (n.child !== null) {
      for (e = n.child, t = ot(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) e = e.sibling, t = t.sibling = ot(e, e.pendingProps), t.return = n;
      t.sibling = null;
    }
    return n.child;
  }
  function kp(e, n, t) {
    switch (n.tag) {
      case 3:
        Ou(n), Ut();
        break;
      case 5:
        Zs(n);
        break;
      case 1:
        Xe(n.type) && Mi(n);
        break;
      case 4:
        Wo(n, n.stateNode.containerInfo);
        break;
      case 10:
        var l = n.type._context, a = n.memoizedProps.value;
        we(Ri, l._currentValue), l._currentValue = a;
        break;
      case 13:
        if (l = n.memoizedState, l !== null)
          return l.dehydrated !== null ? (we(Be, Be.current & 1), n.flags |= 128, null) : (t & n.child.childLanes) !== 0 ? Tu(e, n, t) : (we(Be, Be.current & 1), e = Ln(e, n, t), e !== null ? e.sibling : null);
        we(Be, Be.current & 1);
        break;
      case 19:
        if (l = (t & n.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (l) return Iu(e, n, t);
          n.flags |= 128;
        }
        if (a = n.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), we(Be, Be.current), l) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Mu(e, n, t);
    }
    return Ln(e, n, t);
  }
  var Lu, ga, Fu, $u;
  Lu = function(e, n) {
    for (var t = n.child; t !== null; ) {
      if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
      else if (t.tag !== 4 && t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === n) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === n) return;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }, ga = function() {
  }, Fu = function(e, n, t, l) {
    var a = e.memoizedProps;
    if (a !== l) {
      e = n.stateNode, mt(Dn.current);
      var s = null;
      switch (t) {
        case "input":
          a = Ql(e, a), l = Ql(e, l), s = [];
          break;
        case "select":
          a = G({}, a, { value: void 0 }), l = G({}, l, { value: void 0 }), s = [];
          break;
        case "textarea":
          a = Hl(e, a), l = Hl(e, l), s = [];
          break;
        default:
          typeof a.onClick != "function" && typeof l.onClick == "function" && (e.onclick = Ci);
      }
      Xl(t, l);
      var d;
      t = null;
      for (B in a) if (!l.hasOwnProperty(B) && a.hasOwnProperty(B) && a[B] != null) if (B === "style") {
        var N = a[B];
        for (d in N) N.hasOwnProperty(d) && (t || (t = {}), t[d] = "");
      } else B !== "dangerouslySetInnerHTML" && B !== "children" && B !== "suppressContentEditableWarning" && B !== "suppressHydrationWarning" && B !== "autoFocus" && (u.hasOwnProperty(B) ? s || (s = []) : (s = s || []).push(B, null));
      for (B in l) {
        var y = l[B];
        if (N = a != null ? a[B] : void 0, l.hasOwnProperty(B) && y !== N && (y != null || N != null)) if (B === "style") if (N) {
          for (d in N) !N.hasOwnProperty(d) || y && y.hasOwnProperty(d) || (t || (t = {}), t[d] = "");
          for (d in y) y.hasOwnProperty(d) && N[d] !== y[d] && (t || (t = {}), t[d] = y[d]);
        } else t || (s || (s = []), s.push(
          B,
          t
        )), t = y;
        else B === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, N = N ? N.__html : void 0, y != null && N !== y && (s = s || []).push(B, y)) : B === "children" ? typeof y != "string" && typeof y != "number" || (s = s || []).push(B, "" + y) : B !== "suppressContentEditableWarning" && B !== "suppressHydrationWarning" && (u.hasOwnProperty(B) ? (y != null && B === "onScroll" && Se("scroll", e), s || N === y || (s = [])) : (s = s || []).push(B, y));
      }
      t && (s = s || []).push("style", t);
      var B = s;
      (n.updateQueue = B) && (n.flags |= 4);
    }
  }, $u = function(e, n, t, l) {
    t !== l && (n.flags |= 4);
  };
  function Fr(e, n) {
    if (!_e) switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; ) n.alternate !== null && (t = n), n = n.sibling;
        t === null ? e.tail = null : t.sibling = null;
        break;
      case "collapsed":
        t = e.tail;
        for (var l = null; t !== null; ) t.alternate !== null && (l = t), t = t.sibling;
        l === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
    }
  }
  function Ke(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, t = 0, l = 0;
    if (n) for (var a = e.child; a !== null; ) t |= a.lanes | a.childLanes, l |= a.subtreeFlags & 14680064, l |= a.flags & 14680064, a.return = e, a = a.sibling;
    else for (a = e.child; a !== null; ) t |= a.lanes | a.childLanes, l |= a.subtreeFlags, l |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= l, e.childLanes = t, n;
  }
  function _p(e, n, t) {
    var l = n.pendingProps;
    switch (Io(n), n.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ke(n), null;
      case 1:
        return Xe(n.type) && Ai(), Ke(n), null;
      case 3:
        return l = n.stateNode, Yt(), ke(We), ke($e), qo(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (zi(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, pn !== null && (Ba(pn), pn = null))), ga(e, n), Ke(n), null;
      case 5:
        Xo(n);
        var a = mt(zr.current);
        if (t = n.type, e !== null && n.stateNode != null) Fu(e, n, t, l, a), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
        else {
          if (!l) {
            if (n.stateNode === null) throw Error(o(166));
            return Ke(n), null;
          }
          if (e = mt(Dn.current), zi(n)) {
            l = n.stateNode, t = n.type;
            var s = n.memoizedProps;
            switch (l[_n] = n, l[Ar] = s, e = (n.mode & 1) !== 0, t) {
              case "dialog":
                Se("cancel", l), Se("close", l);
                break;
              case "iframe":
              case "object":
              case "embed":
                Se("load", l);
                break;
              case "video":
              case "audio":
                for (a = 0; a < Br.length; a++) Se(Br[a], l);
                break;
              case "source":
                Se("error", l);
                break;
              case "img":
              case "image":
              case "link":
                Se(
                  "error",
                  l
                ), Se("load", l);
                break;
              case "details":
                Se("toggle", l);
                break;
              case "input":
                xc(l, s), Se("invalid", l);
                break;
              case "select":
                l._wrapperState = { wasMultiple: !!s.multiple }, Se("invalid", l);
                break;
              case "textarea":
                kc(l, s), Se("invalid", l);
            }
            Xl(t, s), a = null;
            for (var d in s) if (s.hasOwnProperty(d)) {
              var N = s[d];
              d === "children" ? typeof N == "string" ? l.textContent !== N && (s.suppressHydrationWarning !== !0 && Bi(l.textContent, N, e), a = ["children", N]) : typeof N == "number" && l.textContent !== "" + N && (s.suppressHydrationWarning !== !0 && Bi(
                l.textContent,
                N,
                e
              ), a = ["children", "" + N]) : u.hasOwnProperty(d) && N != null && d === "onScroll" && Se("scroll", l);
            }
            switch (t) {
              case "input":
                st(l), Sc(l, s, !0);
                break;
              case "textarea":
                st(l), Dc(l);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof s.onClick == "function" && (l.onclick = Ci);
            }
            l = a, n.updateQueue = l, l !== null && (n.flags |= 4);
          } else {
            d = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Bc(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = d.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof l.is == "string" ? e = d.createElement(t, { is: l.is }) : (e = d.createElement(t), t === "select" && (d = e, l.multiple ? d.multiple = !0 : l.size && (d.size = l.size))) : e = d.createElementNS(e, t), e[_n] = n, e[Ar] = l, Lu(e, n, !1, !1), n.stateNode = e;
            e: {
              switch (d = Yl(t, l), t) {
                case "dialog":
                  Se("cancel", e), Se("close", e), a = l;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Se("load", e), a = l;
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < Br.length; a++) Se(Br[a], e);
                  a = l;
                  break;
                case "source":
                  Se("error", e), a = l;
                  break;
                case "img":
                case "image":
                case "link":
                  Se(
                    "error",
                    e
                  ), Se("load", e), a = l;
                  break;
                case "details":
                  Se("toggle", e), a = l;
                  break;
                case "input":
                  xc(e, l), a = Ql(e, l), Se("invalid", e);
                  break;
                case "option":
                  a = l;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!l.multiple }, a = G({}, l, { value: void 0 }), Se("invalid", e);
                  break;
                case "textarea":
                  kc(e, l), a = Hl(e, l), Se("invalid", e);
                  break;
                default:
                  a = l;
              }
              Xl(t, a), N = a;
              for (s in N) if (N.hasOwnProperty(s)) {
                var y = N[s];
                s === "style" ? Ac(e, y) : s === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, y != null && Cc(e, y)) : s === "children" ? typeof y == "string" ? (t !== "textarea" || y !== "") && ar(e, y) : typeof y == "number" && ar(e, "" + y) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (u.hasOwnProperty(s) ? y != null && s === "onScroll" && Se("scroll", e) : y != null && ae(e, s, y, d));
              }
              switch (t) {
                case "input":
                  st(e), Sc(e, l, !1);
                  break;
                case "textarea":
                  st(e), Dc(e);
                  break;
                case "option":
                  l.value != null && e.setAttribute("value", "" + pe(l.value));
                  break;
                case "select":
                  e.multiple = !!l.multiple, s = l.value, s != null ? Mt(e, !!l.multiple, s, !1) : l.defaultValue != null && Mt(
                    e,
                    !!l.multiple,
                    l.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof a.onClick == "function" && (e.onclick = Ci);
              }
              switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break e;
                case "img":
                  l = !0;
                  break e;
                default:
                  l = !1;
              }
            }
            l && (n.flags |= 4);
          }
          n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
        }
        return Ke(n), null;
      case 6:
        if (e && n.stateNode != null) $u(e, n, e.memoizedProps, l);
        else {
          if (typeof l != "string" && n.stateNode === null) throw Error(o(166));
          if (t = mt(zr.current), mt(Dn.current), zi(n)) {
            if (l = n.stateNode, t = n.memoizedProps, l[_n] = n, (s = l.nodeValue !== t) && (e = tn, e !== null)) switch (e.tag) {
              case 3:
                Bi(l.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Bi(l.nodeValue, t, (e.mode & 1) !== 0);
            }
            s && (n.flags |= 4);
          } else l = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(l), l[_n] = n, n.stateNode = l;
        }
        return Ke(n), null;
      case 13:
        if (ke(Be), l = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (_e && rn !== null && (n.mode & 1) !== 0 && (n.flags & 128) === 0) Qs(), Ut(), n.flags |= 98560, s = !1;
          else if (s = zi(n), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!s) throw Error(o(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(o(317));
              s[_n] = n;
            } else Ut(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Ke(n), s = !1;
          } else pn !== null && (Ba(pn), pn = null), s = !0;
          if (!s) return n.flags & 65536 ? n : null;
        }
        return (n.flags & 128) !== 0 ? (n.lanes = t, n) : (l = l !== null, l !== (e !== null && e.memoizedState !== null) && l && (n.child.flags |= 8192, (n.mode & 1) !== 0 && (e === null || (Be.current & 1) !== 0 ? Oe === 0 && (Oe = 3) : Aa())), n.updateQueue !== null && (n.flags |= 4), Ke(n), null);
      case 4:
        return Yt(), ga(e, n), e === null && Cr(n.stateNode.containerInfo), Ke(n), null;
      case 10:
        return Qo(n.type._context), Ke(n), null;
      case 17:
        return Xe(n.type) && Ai(), Ke(n), null;
      case 19:
        if (ke(Be), s = n.memoizedState, s === null) return Ke(n), null;
        if (l = (n.flags & 128) !== 0, d = s.rendering, d === null) if (l) Fr(s, !1);
        else {
          if (Oe !== 0 || e !== null && (e.flags & 128) !== 0) for (e = n.child; e !== null; ) {
            if (d = $i(e), d !== null) {
              for (n.flags |= 128, Fr(s, !1), l = d.updateQueue, l !== null && (n.updateQueue = l, n.flags |= 4), n.subtreeFlags = 0, l = t, t = n.child; t !== null; ) s = t, e = l, s.flags &= 14680066, d = s.alternate, d === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = d.childLanes, s.lanes = d.lanes, s.child = d.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = d.memoizedProps, s.memoizedState = d.memoizedState, s.updateQueue = d.updateQueue, s.type = d.type, e = d.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
              return we(Be, Be.current & 1 | 2), n.child;
            }
            e = e.sibling;
          }
          s.tail !== null && Ae() > Jt && (n.flags |= 128, l = !0, Fr(s, !1), n.lanes = 4194304);
        }
        else {
          if (!l) if (e = $i(d), e !== null) {
            if (n.flags |= 128, l = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), Fr(s, !0), s.tail === null && s.tailMode === "hidden" && !d.alternate && !_e) return Ke(n), null;
          } else 2 * Ae() - s.renderingStartTime > Jt && t !== 1073741824 && (n.flags |= 128, l = !0, Fr(s, !1), n.lanes = 4194304);
          s.isBackwards ? (d.sibling = n.child, n.child = d) : (t = s.last, t !== null ? t.sibling = d : n.child = d, s.last = d);
        }
        return s.tail !== null ? (n = s.tail, s.rendering = n, s.tail = n.sibling, s.renderingStartTime = Ae(), n.sibling = null, t = Be.current, we(Be, l ? t & 1 | 2 : t & 1), n) : (Ke(n), null);
      case 22:
      case 23:
        return Ea(), l = n.memoizedState !== null, e !== null && e.memoizedState !== null !== l && (n.flags |= 8192), l && (n.mode & 1) !== 0 ? (ln & 1073741824) !== 0 && (Ke(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Ke(n), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, n.tag));
  }
  function Dp(e, n) {
    switch (Io(n), n.tag) {
      case 1:
        return Xe(n.type) && Ai(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Yt(), ke(We), ke($e), qo(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 5:
        return Xo(n), null;
      case 13:
        if (ke(Be), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null) throw Error(o(340));
          Ut();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return ke(Be), null;
      case 4:
        return Yt(), null;
      case 10:
        return Qo(n.type._context), null;
      case 22:
      case 23:
        return Ea(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Yi = !1, Qe = !1, Bp = typeof WeakSet == "function" ? WeakSet : Set, U = null;
  function Zt(e, n) {
    var t = e.ref;
    if (t !== null) if (typeof t == "function") try {
      t(null);
    } catch (l) {
      Ee(e, n, l);
    }
    else t.current = null;
  }
  function ma(e, n, t) {
    try {
      t();
    } catch (l) {
      Ee(e, n, l);
    }
  }
  var Gu = !1;
  function Cp(e, n) {
    if (Eo = gi, e = ys(), xo(e)) {
      if ("selectionStart" in e) var t = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        t = (t = e.ownerDocument) && t.defaultView || window;
        var l = t.getSelection && t.getSelection();
        if (l && l.rangeCount !== 0) {
          t = l.anchorNode;
          var a = l.anchorOffset, s = l.focusNode;
          l = l.focusOffset;
          try {
            t.nodeType, s.nodeType;
          } catch {
            t = null;
            break e;
          }
          var d = 0, N = -1, y = -1, B = 0, M = 0, P = e, A = null;
          n: for (; ; ) {
            for (var K; P !== t || a !== 0 && P.nodeType !== 3 || (N = d + a), P !== s || l !== 0 && P.nodeType !== 3 || (y = d + l), P.nodeType === 3 && (d += P.nodeValue.length), (K = P.firstChild) !== null; )
              A = P, P = K;
            for (; ; ) {
              if (P === e) break n;
              if (A === t && ++B === a && (N = d), A === s && ++M === l && (y = d), (K = P.nextSibling) !== null) break;
              P = A, A = P.parentNode;
            }
            P = K;
          }
          t = N === -1 || y === -1 ? null : { start: N, end: y };
        } else t = null;
      }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (Ao = { focusedElem: e, selectionRange: t }, gi = !1, U = n; U !== null; ) if (n = U, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, U = e;
    else for (; U !== null; ) {
      n = U;
      try {
        var H = n.alternate;
        if ((n.flags & 1024) !== 0) switch (n.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (H !== null) {
              var W = H.memoizedProps, Me = H.memoizedState, _ = n.stateNode, x = _.getSnapshotBeforeUpdate(n.elementType === n.type ? W : gn(n.type, W), Me);
              _.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var D = n.stateNode.containerInfo;
            D.nodeType === 1 ? D.textContent = "" : D.nodeType === 9 && D.documentElement && D.removeChild(D.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(o(163));
        }
      } catch (O) {
        Ee(n, n.return, O);
      }
      if (e = n.sibling, e !== null) {
        e.return = n.return, U = e;
        break;
      }
      U = n.return;
    }
    return H = Gu, Gu = !1, H;
  }
  function $r(e, n, t) {
    var l = n.updateQueue;
    if (l = l !== null ? l.lastEffect : null, l !== null) {
      var a = l = l.next;
      do {
        if ((a.tag & e) === e) {
          var s = a.destroy;
          a.destroy = void 0, s !== void 0 && ma(n, t, s);
        }
        a = a.next;
      } while (a !== l);
    }
  }
  function qi(e, n) {
    if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
      var t = n = n.next;
      do {
        if ((t.tag & e) === e) {
          var l = t.create;
          t.destroy = l();
        }
        t = t.next;
      } while (t !== n);
    }
  }
  function Na(e) {
    var n = e.ref;
    if (n !== null) {
      var t = e.stateNode;
      switch (e.tag) {
        case 5:
          e = t;
          break;
        default:
          e = t;
      }
      typeof n == "function" ? n(e) : n.current = e;
    }
  }
  function Ku(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Ku(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[_n], delete n[Ar], delete n[Oo], delete n[sp], delete n[up])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Qu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ju(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Qu(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function va(e, n, t) {
    var l = e.tag;
    if (l === 5 || l === 6) e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Ci));
    else if (l !== 4 && (e = e.child, e !== null)) for (va(e, n, t), e = e.sibling; e !== null; ) va(e, n, t), e = e.sibling;
  }
  function ya(e, n, t) {
    var l = e.tag;
    if (l === 5 || l === 6) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (l !== 4 && (e = e.child, e !== null)) for (ya(e, n, t), e = e.sibling; e !== null; ) ya(e, n, t), e = e.sibling;
  }
  var Ie = null, mn = !1;
  function nt(e, n, t) {
    for (t = t.child; t !== null; ) Uu(e, n, t), t = t.sibling;
  }
  function Uu(e, n, t) {
    if (kn && typeof kn.onCommitFiberUnmount == "function") try {
      kn.onCommitFiberUnmount(si, t);
    } catch {
    }
    switch (t.tag) {
      case 5:
        Qe || Zt(t, n);
      case 6:
        var l = Ie, a = mn;
        Ie = null, nt(e, n, t), Ie = l, mn = a, Ie !== null && (mn ? (e = Ie, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : Ie.removeChild(t.stateNode));
        break;
      case 18:
        Ie !== null && (mn ? (e = Ie, t = t.stateNode, e.nodeType === 8 ? Po(e.parentNode, t) : e.nodeType === 1 && Po(e, t), vr(e)) : Po(Ie, t.stateNode));
        break;
      case 4:
        l = Ie, a = mn, Ie = t.stateNode.containerInfo, mn = !0, nt(e, n, t), Ie = l, mn = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Qe && (l = t.updateQueue, l !== null && (l = l.lastEffect, l !== null))) {
          a = l = l.next;
          do {
            var s = a, d = s.destroy;
            s = s.tag, d !== void 0 && ((s & 2) !== 0 || (s & 4) !== 0) && ma(t, n, d), a = a.next;
          } while (a !== l);
        }
        nt(e, n, t);
        break;
      case 1:
        if (!Qe && (Zt(t, n), l = t.stateNode, typeof l.componentWillUnmount == "function")) try {
          l.props = t.memoizedProps, l.state = t.memoizedState, l.componentWillUnmount();
        } catch (N) {
          Ee(t, n, N);
        }
        nt(e, n, t);
        break;
      case 21:
        nt(e, n, t);
        break;
      case 22:
        t.mode & 1 ? (Qe = (l = Qe) || t.memoizedState !== null, nt(e, n, t), Qe = l) : nt(e, n, t);
        break;
      default:
        nt(e, n, t);
    }
  }
  function Hu(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new Bp()), n.forEach(function(l) {
        var a = Rp.bind(null, e, l);
        t.has(l) || (t.add(l), l.then(a, a));
      });
    }
  }
  function Nn(e, n) {
    var t = n.deletions;
    if (t !== null) for (var l = 0; l < t.length; l++) {
      var a = t[l];
      try {
        var s = e, d = n, N = d;
        e: for (; N !== null; ) {
          switch (N.tag) {
            case 5:
              Ie = N.stateNode, mn = !1;
              break e;
            case 3:
              Ie = N.stateNode.containerInfo, mn = !0;
              break e;
            case 4:
              Ie = N.stateNode.containerInfo, mn = !0;
              break e;
          }
          N = N.return;
        }
        if (Ie === null) throw Error(o(160));
        Uu(s, d, a), Ie = null, mn = !1;
        var y = a.alternate;
        y !== null && (y.return = null), a.return = null;
      } catch (B) {
        Ee(a, n, B);
      }
    }
    if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) Wu(n, e), n = n.sibling;
  }
  function Wu(e, n) {
    var t = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Nn(n, e), Cn(e), l & 4) {
          try {
            $r(3, e, e.return), qi(3, e);
          } catch (W) {
            Ee(e, e.return, W);
          }
          try {
            $r(5, e, e.return);
          } catch (W) {
            Ee(e, e.return, W);
          }
        }
        break;
      case 1:
        Nn(n, e), Cn(e), l & 512 && t !== null && Zt(t, t.return);
        break;
      case 5:
        if (Nn(n, e), Cn(e), l & 512 && t !== null && Zt(t, t.return), e.flags & 32) {
          var a = e.stateNode;
          try {
            ar(a, "");
          } catch (W) {
            Ee(e, e.return, W);
          }
        }
        if (l & 4 && (a = e.stateNode, a != null)) {
          var s = e.memoizedProps, d = t !== null ? t.memoizedProps : s, N = e.type, y = e.updateQueue;
          if (e.updateQueue = null, y !== null) try {
            N === "input" && s.type === "radio" && s.name != null && wc(a, s), Yl(N, d);
            var B = Yl(N, s);
            for (d = 0; d < y.length; d += 2) {
              var M = y[d], P = y[d + 1];
              M === "style" ? Ac(a, P) : M === "dangerouslySetInnerHTML" ? Cc(a, P) : M === "children" ? ar(a, P) : ae(a, M, P, B);
            }
            switch (N) {
              case "input":
                jl(a, s);
                break;
              case "textarea":
                _c(a, s);
                break;
              case "select":
                var A = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!s.multiple;
                var K = s.value;
                K != null ? Mt(a, !!s.multiple, K, !1) : A !== !!s.multiple && (s.defaultValue != null ? Mt(
                  a,
                  !!s.multiple,
                  s.defaultValue,
                  !0
                ) : Mt(a, !!s.multiple, s.multiple ? [] : "", !1));
            }
            a[Ar] = s;
          } catch (W) {
            Ee(e, e.return, W);
          }
        }
        break;
      case 6:
        if (Nn(n, e), Cn(e), l & 4) {
          if (e.stateNode === null) throw Error(o(162));
          a = e.stateNode, s = e.memoizedProps;
          try {
            a.nodeValue = s;
          } catch (W) {
            Ee(e, e.return, W);
          }
        }
        break;
      case 3:
        if (Nn(n, e), Cn(e), l & 4 && t !== null && t.memoizedState.isDehydrated) try {
          vr(n.containerInfo);
        } catch (W) {
          Ee(e, e.return, W);
        }
        break;
      case 4:
        Nn(n, e), Cn(e);
        break;
      case 13:
        Nn(n, e), Cn(e), a = e.child, a.flags & 8192 && (s = a.memoizedState !== null, a.stateNode.isHidden = s, !s || a.alternate !== null && a.alternate.memoizedState !== null || (Sa = Ae())), l & 4 && Hu(e);
        break;
      case 22:
        if (M = t !== null && t.memoizedState !== null, e.mode & 1 ? (Qe = (B = Qe) || M, Nn(n, e), Qe = B) : Nn(n, e), Cn(e), l & 8192) {
          if (B = e.memoizedState !== null, (e.stateNode.isHidden = B) && !M && (e.mode & 1) !== 0) for (U = e, M = e.child; M !== null; ) {
            for (P = U = M; U !== null; ) {
              switch (A = U, K = A.child, A.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  $r(4, A, A.return);
                  break;
                case 1:
                  Zt(A, A.return);
                  var H = A.stateNode;
                  if (typeof H.componentWillUnmount == "function") {
                    l = A, t = A.return;
                    try {
                      n = l, H.props = n.memoizedProps, H.state = n.memoizedState, H.componentWillUnmount();
                    } catch (W) {
                      Ee(l, t, W);
                    }
                  }
                  break;
                case 5:
                  Zt(A, A.return);
                  break;
                case 22:
                  if (A.memoizedState !== null) {
                    qu(P);
                    continue;
                  }
              }
              K !== null ? (K.return = A, U = K) : qu(P);
            }
            M = M.sibling;
          }
          e: for (M = null, P = e; ; ) {
            if (P.tag === 5) {
              if (M === null) {
                M = P;
                try {
                  a = P.stateNode, B ? (s = a.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (N = P.stateNode, y = P.memoizedProps.style, d = y != null && y.hasOwnProperty("display") ? y.display : null, N.style.display = Ec("display", d));
                } catch (W) {
                  Ee(e, e.return, W);
                }
              }
            } else if (P.tag === 6) {
              if (M === null) try {
                P.stateNode.nodeValue = B ? "" : P.memoizedProps;
              } catch (W) {
                Ee(e, e.return, W);
              }
            } else if ((P.tag !== 22 && P.tag !== 23 || P.memoizedState === null || P === e) && P.child !== null) {
              P.child.return = P, P = P.child;
              continue;
            }
            if (P === e) break e;
            for (; P.sibling === null; ) {
              if (P.return === null || P.return === e) break e;
              M === P && (M = null), P = P.return;
            }
            M === P && (M = null), P.sibling.return = P.return, P = P.sibling;
          }
        }
        break;
      case 19:
        Nn(n, e), Cn(e), l & 4 && Hu(e);
        break;
      case 21:
        break;
      default:
        Nn(
          n,
          e
        ), Cn(e);
    }
  }
  function Cn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var t = e.return; t !== null; ) {
            if (Qu(t)) {
              var l = t;
              break e;
            }
            t = t.return;
          }
          throw Error(o(160));
        }
        switch (l.tag) {
          case 5:
            var a = l.stateNode;
            l.flags & 32 && (ar(a, ""), l.flags &= -33);
            var s = ju(e);
            ya(e, s, a);
            break;
          case 3:
          case 4:
            var d = l.stateNode.containerInfo, N = ju(e);
            va(e, N, d);
            break;
          default:
            throw Error(o(161));
        }
      } catch (y) {
        Ee(e, e.return, y);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Ep(e, n, t) {
    U = e, Xu(e);
  }
  function Xu(e, n, t) {
    for (var l = (e.mode & 1) !== 0; U !== null; ) {
      var a = U, s = a.child;
      if (a.tag === 22 && l) {
        var d = a.memoizedState !== null || Yi;
        if (!d) {
          var N = a.alternate, y = N !== null && N.memoizedState !== null || Qe;
          N = Yi;
          var B = Qe;
          if (Yi = d, (Qe = y) && !B) for (U = a; U !== null; ) d = U, y = d.child, d.tag === 22 && d.memoizedState !== null ? Zu(a) : y !== null ? (y.return = d, U = y) : Zu(a);
          for (; s !== null; ) U = s, Xu(s), s = s.sibling;
          U = a, Yi = N, Qe = B;
        }
        Yu(e);
      } else (a.subtreeFlags & 8772) !== 0 && s !== null ? (s.return = a, U = s) : Yu(e);
    }
  }
  function Yu(e) {
    for (; U !== null; ) {
      var n = U;
      if ((n.flags & 8772) !== 0) {
        var t = n.alternate;
        try {
          if ((n.flags & 8772) !== 0) switch (n.tag) {
            case 0:
            case 11:
            case 15:
              Qe || qi(5, n);
              break;
            case 1:
              var l = n.stateNode;
              if (n.flags & 4 && !Qe) if (t === null) l.componentDidMount();
              else {
                var a = n.elementType === n.type ? t.memoizedProps : gn(n.type, t.memoizedProps);
                l.componentDidUpdate(a, t.memoizedState, l.__reactInternalSnapshotBeforeUpdate);
              }
              var s = n.updateQueue;
              s !== null && qs(n, s, l);
              break;
            case 3:
              var d = n.updateQueue;
              if (d !== null) {
                if (t = null, n.child !== null) switch (n.child.tag) {
                  case 5:
                    t = n.child.stateNode;
                    break;
                  case 1:
                    t = n.child.stateNode;
                }
                qs(n, d, t);
              }
              break;
            case 5:
              var N = n.stateNode;
              if (t === null && n.flags & 4) {
                t = N;
                var y = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    y.autoFocus && t.focus();
                    break;
                  case "img":
                    y.src && (t.src = y.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var B = n.alternate;
                if (B !== null) {
                  var M = B.memoizedState;
                  if (M !== null) {
                    var P = M.dehydrated;
                    P !== null && vr(P);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(o(163));
          }
          Qe || n.flags & 512 && Na(n);
        } catch (A) {
          Ee(n, n.return, A);
        }
      }
      if (n === e) {
        U = null;
        break;
      }
      if (t = n.sibling, t !== null) {
        t.return = n.return, U = t;
        break;
      }
      U = n.return;
    }
  }
  function qu(e) {
    for (; U !== null; ) {
      var n = U;
      if (n === e) {
        U = null;
        break;
      }
      var t = n.sibling;
      if (t !== null) {
        t.return = n.return, U = t;
        break;
      }
      U = n.return;
    }
  }
  function Zu(e) {
    for (; U !== null; ) {
      var n = U;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var t = n.return;
            try {
              qi(4, n);
            } catch (y) {
              Ee(n, t, y);
            }
            break;
          case 1:
            var l = n.stateNode;
            if (typeof l.componentDidMount == "function") {
              var a = n.return;
              try {
                l.componentDidMount();
              } catch (y) {
                Ee(n, a, y);
              }
            }
            var s = n.return;
            try {
              Na(n);
            } catch (y) {
              Ee(n, s, y);
            }
            break;
          case 5:
            var d = n.return;
            try {
              Na(n);
            } catch (y) {
              Ee(n, d, y);
            }
        }
      } catch (y) {
        Ee(n, n.return, y);
      }
      if (n === e) {
        U = null;
        break;
      }
      var N = n.sibling;
      if (N !== null) {
        N.return = n.return, U = N;
        break;
      }
      U = n.return;
    }
  }
  var Ap = Math.ceil, Zi = ne.ReactCurrentDispatcher, xa = ne.ReactCurrentOwner, un = ne.ReactCurrentBatchConfig, ge = 0, Te = null, Ve = null, Le = 0, ln = 0, bt = qn(0), Oe = 0, Gr = null, vt = 0, bi = 0, wa = 0, Kr = null, qe = null, Sa = 0, Jt = 1 / 0, Fn = null, Ji = !1, ka = null, tt = null, el = !1, rt = null, nl = 0, Qr = 0, _a = null, tl = -1, rl = 0;
  function He() {
    return (ge & 6) !== 0 ? Ae() : tl !== -1 ? tl : tl = Ae();
  }
  function it(e) {
    return (e.mode & 1) === 0 ? 1 : (ge & 2) !== 0 && Le !== 0 ? Le & -Le : fp.transition !== null ? (rl === 0 && (rl = jc()), rl) : (e = ve, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Jc(e.type)), e);
  }
  function vn(e, n, t, l) {
    if (50 < Qr) throw Qr = 0, _a = null, Error(o(185));
    hr(e, t, l), ((ge & 2) === 0 || e !== Te) && (e === Te && ((ge & 2) === 0 && (bi |= t), Oe === 4 && lt(e, Le)), Ze(e, l), t === 1 && ge === 0 && (n.mode & 1) === 0 && (Jt = Ae() + 500, Vi && bn()));
  }
  function Ze(e, n) {
    var t = e.callbackNode;
    fh(e, n);
    var l = fi(e, e === Te ? Le : 0);
    if (l === 0) t !== null && Gc(t), e.callbackNode = null, e.callbackPriority = 0;
    else if (n = l & -l, e.callbackPriority !== n) {
      if (t != null && Gc(t), n === 1) e.tag === 0 ? dp(Ju.bind(null, e)) : Ls(Ju.bind(null, e)), ap(function() {
        (ge & 6) === 0 && bn();
      }), t = null;
      else {
        switch (Uc(l)) {
          case 1:
            t = to;
            break;
          case 4:
            t = Kc;
            break;
          case 16:
            t = ci;
            break;
          case 536870912:
            t = Qc;
            break;
          default:
            t = ci;
        }
        t = ad(t, bu.bind(null, e));
      }
      e.callbackPriority = n, e.callbackNode = t;
    }
  }
  function bu(e, n) {
    if (tl = -1, rl = 0, (ge & 6) !== 0) throw Error(o(327));
    var t = e.callbackNode;
    if (er() && e.callbackNode !== t) return null;
    var l = fi(e, e === Te ? Le : 0);
    if (l === 0) return null;
    if ((l & 30) !== 0 || (l & e.expiredLanes) !== 0 || n) n = il(e, l);
    else {
      n = l;
      var a = ge;
      ge |= 2;
      var s = nd();
      (Te !== e || Le !== n) && (Fn = null, Jt = Ae() + 500, xt(e, n));
      do
        try {
          Pp();
          break;
        } catch (N) {
          ed(e, N);
        }
      while (!0);
      Ko(), Zi.current = s, ge = a, Ve !== null ? n = 0 : (Te = null, Le = 0, n = Oe);
    }
    if (n !== 0) {
      if (n === 2 && (a = ro(e), a !== 0 && (l = a, n = Da(e, a))), n === 1) throw t = Gr, xt(e, 0), lt(e, l), Ze(e, Ae()), t;
      if (n === 6) lt(e, l);
      else {
        if (a = e.current.alternate, (l & 30) === 0 && !Mp(a) && (n = il(e, l), n === 2 && (s = ro(e), s !== 0 && (l = s, n = Da(e, s))), n === 1)) throw t = Gr, xt(e, 0), lt(e, l), Ze(e, Ae()), t;
        switch (e.finishedWork = a, e.finishedLanes = l, n) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            wt(e, qe, Fn);
            break;
          case 3:
            if (lt(e, l), (l & 130023424) === l && (n = Sa + 500 - Ae(), 10 < n)) {
              if (fi(e, 0) !== 0) break;
              if (a = e.suspendedLanes, (a & l) !== l) {
                He(), e.pingedLanes |= e.suspendedLanes & a;
                break;
              }
              e.timeoutHandle = Vo(wt.bind(null, e, qe, Fn), n);
              break;
            }
            wt(e, qe, Fn);
            break;
          case 4:
            if (lt(e, l), (l & 4194240) === l) break;
            for (n = e.eventTimes, a = -1; 0 < l; ) {
              var d = 31 - fn(l);
              s = 1 << d, d = n[d], d > a && (a = d), l &= ~s;
            }
            if (l = a, l = Ae() - l, l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * Ap(l / 1960)) - l, 10 < l) {
              e.timeoutHandle = Vo(wt.bind(null, e, qe, Fn), l);
              break;
            }
            wt(e, qe, Fn);
            break;
          case 5:
            wt(e, qe, Fn);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return Ze(e, Ae()), e.callbackNode === t ? bu.bind(null, e) : null;
  }
  function Da(e, n) {
    var t = Kr;
    return e.current.memoizedState.isDehydrated && (xt(e, n).flags |= 256), e = il(e, n), e !== 2 && (n = qe, qe = t, n !== null && Ba(n)), e;
  }
  function Ba(e) {
    qe === null ? qe = e : qe.push.apply(qe, e);
  }
  function Mp(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue;
        if (t !== null && (t = t.stores, t !== null)) for (var l = 0; l < t.length; l++) {
          var a = t[l], s = a.getSnapshot;
          a = a.value;
          try {
            if (!hn(s(), a)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (t = n.child, n.subtreeFlags & 16384 && t !== null) t.return = n, n = t;
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function lt(e, n) {
    for (n &= ~wa, n &= ~bi, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
      var t = 31 - fn(n), l = 1 << t;
      e[t] = -1, n &= ~l;
    }
  }
  function Ju(e) {
    if ((ge & 6) !== 0) throw Error(o(327));
    er();
    var n = fi(e, 0);
    if ((n & 1) === 0) return Ze(e, Ae()), null;
    var t = il(e, n);
    if (e.tag !== 0 && t === 2) {
      var l = ro(e);
      l !== 0 && (n = l, t = Da(e, l));
    }
    if (t === 1) throw t = Gr, xt(e, 0), lt(e, n), Ze(e, Ae()), t;
    if (t === 6) throw Error(o(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n, wt(e, qe, Fn), Ze(e, Ae()), null;
  }
  function Ca(e, n) {
    var t = ge;
    ge |= 1;
    try {
      return e(n);
    } finally {
      ge = t, ge === 0 && (Jt = Ae() + 500, Vi && bn());
    }
  }
  function yt(e) {
    rt !== null && rt.tag === 0 && (ge & 6) === 0 && er();
    var n = ge;
    ge |= 1;
    var t = un.transition, l = ve;
    try {
      if (un.transition = null, ve = 1, e) return e();
    } finally {
      ve = l, un.transition = t, ge = n, (ge & 6) === 0 && bn();
    }
  }
  function Ea() {
    ln = bt.current, ke(bt);
  }
  function xt(e, n) {
    e.finishedWork = null, e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1, op(t)), Ve !== null) for (t = Ve.return; t !== null; ) {
      var l = t;
      switch (Io(l), l.tag) {
        case 1:
          l = l.type.childContextTypes, l != null && Ai();
          break;
        case 3:
          Yt(), ke(We), ke($e), qo();
          break;
        case 5:
          Xo(l);
          break;
        case 4:
          Yt();
          break;
        case 13:
          ke(Be);
          break;
        case 19:
          ke(Be);
          break;
        case 10:
          Qo(l.type._context);
          break;
        case 22:
        case 23:
          Ea();
      }
      t = t.return;
    }
    if (Te = e, Ve = e = ot(e.current, null), Le = ln = n, Oe = 0, Gr = null, wa = bi = vt = 0, qe = Kr = null, gt !== null) {
      for (n = 0; n < gt.length; n++) if (t = gt[n], l = t.interleaved, l !== null) {
        t.interleaved = null;
        var a = l.next, s = t.pending;
        if (s !== null) {
          var d = s.next;
          s.next = a, l.next = d;
        }
        t.pending = l;
      }
      gt = null;
    }
    return e;
  }
  function ed(e, n) {
    do {
      var t = Ve;
      try {
        if (Ko(), Gi.current = Ui, Ki) {
          for (var l = Ce.memoizedState; l !== null; ) {
            var a = l.queue;
            a !== null && (a.pending = null), l = l.next;
          }
          Ki = !1;
        }
        if (Nt = 0, ze = Pe = Ce = null, Tr = !1, Rr = 0, xa.current = null, t === null || t.return === null) {
          Oe = 1, Gr = n, Ve = null;
          break;
        }
        e: {
          var s = e, d = t.return, N = t, y = n;
          if (n = Le, N.flags |= 32768, y !== null && typeof y == "object" && typeof y.then == "function") {
            var B = y, M = N, P = M.tag;
            if ((M.mode & 1) === 0 && (P === 0 || P === 11 || P === 15)) {
              var A = M.alternate;
              A ? (M.updateQueue = A.updateQueue, M.memoizedState = A.memoizedState, M.lanes = A.lanes) : (M.updateQueue = null, M.memoizedState = null);
            }
            var K = Du(d);
            if (K !== null) {
              K.flags &= -257, Bu(K, d, N, s, n), K.mode & 1 && _u(s, B, n), n = K, y = B;
              var H = n.updateQueue;
              if (H === null) {
                var W = /* @__PURE__ */ new Set();
                W.add(y), n.updateQueue = W;
              } else H.add(y);
              break e;
            } else {
              if ((n & 1) === 0) {
                _u(s, B, n), Aa();
                break e;
              }
              y = Error(o(426));
            }
          } else if (_e && N.mode & 1) {
            var Me = Du(d);
            if (Me !== null) {
              (Me.flags & 65536) === 0 && (Me.flags |= 256), Bu(Me, d, N, s, n), $o(qt(y, N));
              break e;
            }
          }
          s = y = qt(y, N), Oe !== 4 && (Oe = 2), Kr === null ? Kr = [s] : Kr.push(s), s = d;
          do {
            switch (s.tag) {
              case 3:
                s.flags |= 65536, n &= -n, s.lanes |= n;
                var _ = Su(s, y, n);
                Ys(s, _);
                break e;
              case 1:
                N = y;
                var x = s.type, D = s.stateNode;
                if ((s.flags & 128) === 0 && (typeof x.getDerivedStateFromError == "function" || D !== null && typeof D.componentDidCatch == "function" && (tt === null || !tt.has(D)))) {
                  s.flags |= 65536, n &= -n, s.lanes |= n;
                  var O = ku(s, N, n);
                  Ys(s, O);
                  break e;
                }
            }
            s = s.return;
          } while (s !== null);
        }
        rd(t);
      } catch (Y) {
        n = Y, Ve === t && t !== null && (Ve = t = t.return);
        continue;
      }
      break;
    } while (!0);
  }
  function nd() {
    var e = Zi.current;
    return Zi.current = Ui, e === null ? Ui : e;
  }
  function Aa() {
    (Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4), Te === null || (vt & 268435455) === 0 && (bi & 268435455) === 0 || lt(Te, Le);
  }
  function il(e, n) {
    var t = ge;
    ge |= 2;
    var l = nd();
    (Te !== e || Le !== n) && (Fn = null, xt(e, n));
    do
      try {
        Vp();
        break;
      } catch (a) {
        ed(e, a);
      }
    while (!0);
    if (Ko(), ge = t, Zi.current = l, Ve !== null) throw Error(o(261));
    return Te = null, Le = 0, Oe;
  }
  function Vp() {
    for (; Ve !== null; ) td(Ve);
  }
  function Pp() {
    for (; Ve !== null && !rh(); ) td(Ve);
  }
  function td(e) {
    var n = od(e.alternate, e, ln);
    e.memoizedProps = e.pendingProps, n === null ? rd(e) : Ve = n, xa.current = null;
  }
  function rd(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (e = n.return, (n.flags & 32768) === 0) {
        if (t = _p(t, n, ln), t !== null) {
          Ve = t;
          return;
        }
      } else {
        if (t = Dp(t, n), t !== null) {
          t.flags &= 32767, Ve = t;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Oe = 6, Ve = null;
          return;
        }
      }
      if (n = n.sibling, n !== null) {
        Ve = n;
        return;
      }
      Ve = n = e;
    } while (n !== null);
    Oe === 0 && (Oe = 5);
  }
  function wt(e, n, t) {
    var l = ve, a = un.transition;
    try {
      un.transition = null, ve = 1, Op(e, n, t, l);
    } finally {
      un.transition = a, ve = l;
    }
    return null;
  }
  function Op(e, n, t, l) {
    do
      er();
    while (rt !== null);
    if ((ge & 6) !== 0) throw Error(o(327));
    t = e.finishedWork;
    var a = e.finishedLanes;
    if (t === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(o(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var s = t.lanes | t.childLanes;
    if (hh(e, s), e === Te && (Ve = Te = null, Le = 0), (t.subtreeFlags & 2064) === 0 && (t.flags & 2064) === 0 || el || (el = !0, ad(ci, function() {
      return er(), null;
    })), s = (t.flags & 15990) !== 0, (t.subtreeFlags & 15990) !== 0 || s) {
      s = un.transition, un.transition = null;
      var d = ve;
      ve = 1;
      var N = ge;
      ge |= 4, xa.current = null, Cp(e, t), Wu(t, e), Jh(Ao), gi = !!Eo, Ao = Eo = null, e.current = t, Ep(t), ih(), ge = N, ve = d, un.transition = s;
    } else e.current = t;
    if (el && (el = !1, rt = e, nl = a), s = e.pendingLanes, s === 0 && (tt = null), ah(t.stateNode), Ze(e, Ae()), n !== null) for (l = e.onRecoverableError, t = 0; t < n.length; t++) a = n[t], l(a.value, { componentStack: a.stack, digest: a.digest });
    if (Ji) throw Ji = !1, e = ka, ka = null, e;
    return (nl & 1) !== 0 && e.tag !== 0 && er(), s = e.pendingLanes, (s & 1) !== 0 ? e === _a ? Qr++ : (Qr = 0, _a = e) : Qr = 0, bn(), null;
  }
  function er() {
    if (rt !== null) {
      var e = Uc(nl), n = un.transition, t = ve;
      try {
        if (un.transition = null, ve = 16 > e ? 16 : e, rt === null) var l = !1;
        else {
          if (e = rt, rt = null, nl = 0, (ge & 6) !== 0) throw Error(o(331));
          var a = ge;
          for (ge |= 4, U = e.current; U !== null; ) {
            var s = U, d = s.child;
            if ((U.flags & 16) !== 0) {
              var N = s.deletions;
              if (N !== null) {
                for (var y = 0; y < N.length; y++) {
                  var B = N[y];
                  for (U = B; U !== null; ) {
                    var M = U;
                    switch (M.tag) {
                      case 0:
                      case 11:
                      case 15:
                        $r(8, M, s);
                    }
                    var P = M.child;
                    if (P !== null) P.return = M, U = P;
                    else for (; U !== null; ) {
                      M = U;
                      var A = M.sibling, K = M.return;
                      if (Ku(M), M === B) {
                        U = null;
                        break;
                      }
                      if (A !== null) {
                        A.return = K, U = A;
                        break;
                      }
                      U = K;
                    }
                  }
                }
                var H = s.alternate;
                if (H !== null) {
                  var W = H.child;
                  if (W !== null) {
                    H.child = null;
                    do {
                      var Me = W.sibling;
                      W.sibling = null, W = Me;
                    } while (W !== null);
                  }
                }
                U = s;
              }
            }
            if ((s.subtreeFlags & 2064) !== 0 && d !== null) d.return = s, U = d;
            else e: for (; U !== null; ) {
              if (s = U, (s.flags & 2048) !== 0) switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  $r(9, s, s.return);
              }
              var _ = s.sibling;
              if (_ !== null) {
                _.return = s.return, U = _;
                break e;
              }
              U = s.return;
            }
          }
          var x = e.current;
          for (U = x; U !== null; ) {
            d = U;
            var D = d.child;
            if ((d.subtreeFlags & 2064) !== 0 && D !== null) D.return = d, U = D;
            else e: for (d = x; U !== null; ) {
              if (N = U, (N.flags & 2048) !== 0) try {
                switch (N.tag) {
                  case 0:
                  case 11:
                  case 15:
                    qi(9, N);
                }
              } catch (Y) {
                Ee(N, N.return, Y);
              }
              if (N === d) {
                U = null;
                break e;
              }
              var O = N.sibling;
              if (O !== null) {
                O.return = N.return, U = O;
                break e;
              }
              U = N.return;
            }
          }
          if (ge = a, bn(), kn && typeof kn.onPostCommitFiberRoot == "function") try {
            kn.onPostCommitFiberRoot(si, e);
          } catch {
          }
          l = !0;
        }
        return l;
      } finally {
        ve = t, un.transition = n;
      }
    }
    return !1;
  }
  function id(e, n, t) {
    n = qt(t, n), n = Su(e, n, 1), e = et(e, n, 1), n = He(), e !== null && (hr(e, 1, n), Ze(e, n));
  }
  function Ee(e, n, t) {
    if (e.tag === 3) id(e, e, t);
    else for (; n !== null; ) {
      if (n.tag === 3) {
        id(n, e, t);
        break;
      } else if (n.tag === 1) {
        var l = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (tt === null || !tt.has(l))) {
          e = qt(t, e), e = ku(n, e, 1), n = et(n, e, 1), e = He(), n !== null && (hr(n, 1, e), Ze(n, e));
          break;
        }
      }
      n = n.return;
    }
  }
  function zp(e, n, t) {
    var l = e.pingCache;
    l !== null && l.delete(n), n = He(), e.pingedLanes |= e.suspendedLanes & t, Te === e && (Le & t) === t && (Oe === 4 || Oe === 3 && (Le & 130023424) === Le && 500 > Ae() - Sa ? xt(e, 0) : wa |= t), Ze(e, n);
  }
  function ld(e, n) {
    n === 0 && ((e.mode & 1) === 0 ? n = 1 : (n = di, di <<= 1, (di & 130023424) === 0 && (di = 4194304)));
    var t = He();
    e = Rn(e, n), e !== null && (hr(e, n, t), Ze(e, t));
  }
  function Tp(e) {
    var n = e.memoizedState, t = 0;
    n !== null && (t = n.retryLane), ld(e, t);
  }
  function Rp(e, n) {
    var t = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode, a = e.memoizedState;
        a !== null && (t = a.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    l !== null && l.delete(n), ld(e, t);
  }
  var od;
  od = function(e, n, t) {
    if (e !== null) if (e.memoizedProps !== n.pendingProps || We.current) Ye = !0;
    else {
      if ((e.lanes & t) === 0 && (n.flags & 128) === 0) return Ye = !1, kp(e, n, t);
      Ye = (e.flags & 131072) !== 0;
    }
    else Ye = !1, _e && (n.flags & 1048576) !== 0 && Fs(n, Oi, n.index);
    switch (n.lanes = 0, n.tag) {
      case 2:
        var l = n.type;
        Xi(e, n), e = n.pendingProps;
        var a = Kt(n, $e.current);
        Xt(n, t), a = Jo(null, n, l, e, a, t);
        var s = ea();
        return n.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, Xe(l) ? (s = !0, Mi(n)) : s = !1, n.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, Ho(n), a.updater = Hi, n.stateNode = a, a._reactInternals = n, oa(n, l, e, t), n = ua(null, n, l, !0, s, t)) : (n.tag = 0, _e && s && Ro(n), Ue(null, n, a, t), n = n.child), n;
      case 16:
        l = n.elementType;
        e: {
          switch (Xi(e, n), e = n.pendingProps, a = l._init, l = a(l._payload), n.type = l, a = n.tag = Lp(l), e = gn(l, e), a) {
            case 0:
              n = sa(null, n, l, e, t);
              break e;
            case 1:
              n = Pu(null, n, l, e, t);
              break e;
            case 11:
              n = Cu(null, n, l, e, t);
              break e;
            case 14:
              n = Eu(null, n, l, gn(l.type, e), t);
              break e;
          }
          throw Error(o(
            306,
            l,
            ""
          ));
        }
        return n;
      case 0:
        return l = n.type, a = n.pendingProps, a = n.elementType === l ? a : gn(l, a), sa(e, n, l, a, t);
      case 1:
        return l = n.type, a = n.pendingProps, a = n.elementType === l ? a : gn(l, a), Pu(e, n, l, a, t);
      case 3:
        e: {
          if (Ou(n), e === null) throw Error(o(387));
          l = n.pendingProps, s = n.memoizedState, a = s.element, Xs(e, n), Fi(n, l, null, t);
          var d = n.memoizedState;
          if (l = d.element, s.isDehydrated) if (s = { element: l, isDehydrated: !1, cache: d.cache, pendingSuspenseBoundaries: d.pendingSuspenseBoundaries, transitions: d.transitions }, n.updateQueue.baseState = s, n.memoizedState = s, n.flags & 256) {
            a = qt(Error(o(423)), n), n = zu(e, n, l, t, a);
            break e;
          } else if (l !== a) {
            a = qt(Error(o(424)), n), n = zu(e, n, l, t, a);
            break e;
          } else for (rn = Yn(n.stateNode.containerInfo.firstChild), tn = n, _e = !0, pn = null, t = Hs(n, null, l, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (Ut(), l === a) {
              n = Ln(e, n, t);
              break e;
            }
            Ue(e, n, l, t);
          }
          n = n.child;
        }
        return n;
      case 5:
        return Zs(n), e === null && Fo(n), l = n.type, a = n.pendingProps, s = e !== null ? e.memoizedProps : null, d = a.children, Mo(l, a) ? d = null : s !== null && Mo(l, s) && (n.flags |= 32), Vu(e, n), Ue(e, n, d, t), n.child;
      case 6:
        return e === null && Fo(n), null;
      case 13:
        return Tu(e, n, t);
      case 4:
        return Wo(n, n.stateNode.containerInfo), l = n.pendingProps, e === null ? n.child = Ht(n, null, l, t) : Ue(e, n, l, t), n.child;
      case 11:
        return l = n.type, a = n.pendingProps, a = n.elementType === l ? a : gn(l, a), Cu(e, n, l, a, t);
      case 7:
        return Ue(e, n, n.pendingProps, t), n.child;
      case 8:
        return Ue(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return Ue(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          if (l = n.type._context, a = n.pendingProps, s = n.memoizedProps, d = a.value, we(Ri, l._currentValue), l._currentValue = d, s !== null) if (hn(s.value, d)) {
            if (s.children === a.children && !We.current) {
              n = Ln(e, n, t);
              break e;
            }
          } else for (s = n.child, s !== null && (s.return = n); s !== null; ) {
            var N = s.dependencies;
            if (N !== null) {
              d = s.child;
              for (var y = N.firstContext; y !== null; ) {
                if (y.context === l) {
                  if (s.tag === 1) {
                    y = In(-1, t & -t), y.tag = 2;
                    var B = s.updateQueue;
                    if (B !== null) {
                      B = B.shared;
                      var M = B.pending;
                      M === null ? y.next = y : (y.next = M.next, M.next = y), B.pending = y;
                    }
                  }
                  s.lanes |= t, y = s.alternate, y !== null && (y.lanes |= t), jo(
                    s.return,
                    t,
                    n
                  ), N.lanes |= t;
                  break;
                }
                y = y.next;
              }
            } else if (s.tag === 10) d = s.type === n.type ? null : s.child;
            else if (s.tag === 18) {
              if (d = s.return, d === null) throw Error(o(341));
              d.lanes |= t, N = d.alternate, N !== null && (N.lanes |= t), jo(d, t, n), d = s.sibling;
            } else d = s.child;
            if (d !== null) d.return = s;
            else for (d = s; d !== null; ) {
              if (d === n) {
                d = null;
                break;
              }
              if (s = d.sibling, s !== null) {
                s.return = d.return, d = s;
                break;
              }
              d = d.return;
            }
            s = d;
          }
          Ue(e, n, a.children, t), n = n.child;
        }
        return n;
      case 9:
        return a = n.type, l = n.pendingProps.children, Xt(n, t), a = cn(a), l = l(a), n.flags |= 1, Ue(e, n, l, t), n.child;
      case 14:
        return l = n.type, a = gn(l, n.pendingProps), a = gn(l.type, a), Eu(e, n, l, a, t);
      case 15:
        return Au(e, n, n.type, n.pendingProps, t);
      case 17:
        return l = n.type, a = n.pendingProps, a = n.elementType === l ? a : gn(l, a), Xi(e, n), n.tag = 1, Xe(l) ? (e = !0, Mi(n)) : e = !1, Xt(n, t), xu(n, l, a), oa(n, l, a, t), ua(null, n, l, !0, e, t);
      case 19:
        return Iu(e, n, t);
      case 22:
        return Mu(e, n, t);
    }
    throw Error(o(156, n.tag));
  };
  function ad(e, n) {
    return $c(e, n);
  }
  function Ip(e, n, t, l) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function dn(e, n, t, l) {
    return new Ip(e, n, t, l);
  }
  function Ma(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Lp(e) {
    if (typeof e == "function") return Ma(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === R) return 11;
      if (e === ye) return 14;
    }
    return 2;
  }
  function ot(e, n) {
    var t = e.alternate;
    return t === null ? (t = dn(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
  }
  function ll(e, n, t, l, a, s) {
    var d = 2;
    if (l = e, typeof e == "function") Ma(e) && (d = 1);
    else if (typeof e == "string") d = 5;
    else e: switch (e) {
      case T:
        return St(t.children, a, s, n);
      case b:
        d = 8, a |= 8;
        break;
      case V:
        return e = dn(12, t, n, a | 2), e.elementType = V, e.lanes = s, e;
      case F:
        return e = dn(13, t, n, a), e.elementType = F, e.lanes = s, e;
      case Q:
        return e = dn(19, t, n, a), e.elementType = Q, e.lanes = s, e;
      case fe:
        return ol(t, a, s, n);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case j:
            d = 10;
            break e;
          case Z:
            d = 9;
            break e;
          case R:
            d = 11;
            break e;
          case ye:
            d = 14;
            break e;
          case De:
            d = 16, l = null;
            break e;
        }
        throw Error(o(130, e == null ? e : typeof e, ""));
    }
    return n = dn(d, t, n, a), n.elementType = e, n.type = l, n.lanes = s, n;
  }
  function St(e, n, t, l) {
    return e = dn(7, e, l, n), e.lanes = t, e;
  }
  function ol(e, n, t, l) {
    return e = dn(22, e, l, n), e.elementType = fe, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
  }
  function Va(e, n, t) {
    return e = dn(6, e, null, n), e.lanes = t, e;
  }
  function Pa(e, n, t) {
    return n = dn(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
  }
  function Fp(e, n, t, l, a) {
    this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = io(0), this.expirationTimes = io(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = io(0), this.identifierPrefix = l, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
  }
  function Oa(e, n, t, l, a, s, d, N, y) {
    return e = new Fp(e, n, t, N, y), n === 1 ? (n = 1, s === !0 && (n |= 8)) : n = 0, s = dn(3, null, null, n), e.current = s, s.stateNode = e, s.memoizedState = { element: l, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ho(s), e;
  }
  function $p(e, n, t) {
    var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ie, key: l == null ? null : "" + l, children: e, containerInfo: n, implementation: t };
  }
  function cd(e) {
    if (!e) return Zn;
    e = e._reactInternals;
    e: {
      if (ut(e) !== e || e.tag !== 1) throw Error(o(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (Xe(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var t = e.type;
      if (Xe(t)) return Rs(e, t, n);
    }
    return n;
  }
  function sd(e, n, t, l, a, s, d, N, y) {
    return e = Oa(t, l, !0, e, a, s, d, N, y), e.context = cd(null), t = e.current, l = He(), a = it(t), s = In(l, a), s.callback = n ?? null, et(t, s, a), e.current.lanes = a, hr(e, a, l), Ze(e, l), e;
  }
  function al(e, n, t, l) {
    var a = n.current, s = He(), d = it(a);
    return t = cd(t), n.context === null ? n.context = t : n.pendingContext = t, n = In(s, d), n.payload = { element: e }, l = l === void 0 ? null : l, l !== null && (n.callback = l), e = et(a, n, d), e !== null && (vn(e, a, d, s), Li(e, a, d)), d;
  }
  function cl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function ud(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function za(e, n) {
    ud(e, n), (e = e.alternate) && ud(e, n);
  }
  function Gp() {
    return null;
  }
  var dd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Ta(e) {
    this._internalRoot = e;
  }
  sl.prototype.render = Ta.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(o(409));
    al(e, n, null, null);
  }, sl.prototype.unmount = Ta.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      yt(function() {
        al(null, e, null, null);
      }), n[Pn] = null;
    }
  };
  function sl(e) {
    this._internalRoot = e;
  }
  sl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = Xc();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < Hn.length && n !== 0 && n < Hn[t].priority; t++) ;
      Hn.splice(t, 0, e), t === 0 && Zc(e);
    }
  };
  function Ra(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function ul(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function fd() {
  }
  function Kp(e, n, t, l, a) {
    if (a) {
      if (typeof l == "function") {
        var s = l;
        l = function() {
          var B = cl(d);
          s.call(B);
        };
      }
      var d = sd(n, l, e, 0, null, !1, !1, "", fd);
      return e._reactRootContainer = d, e[Pn] = d.current, Cr(e.nodeType === 8 ? e.parentNode : e), yt(), d;
    }
    for (; a = e.lastChild; ) e.removeChild(a);
    if (typeof l == "function") {
      var N = l;
      l = function() {
        var B = cl(y);
        N.call(B);
      };
    }
    var y = Oa(e, 0, !1, null, null, !1, !1, "", fd);
    return e._reactRootContainer = y, e[Pn] = y.current, Cr(e.nodeType === 8 ? e.parentNode : e), yt(function() {
      al(n, y, t, l);
    }), y;
  }
  function dl(e, n, t, l, a) {
    var s = t._reactRootContainer;
    if (s) {
      var d = s;
      if (typeof a == "function") {
        var N = a;
        a = function() {
          var y = cl(d);
          N.call(y);
        };
      }
      al(n, d, e, a);
    } else d = Kp(t, n, e, a, l);
    return cl(d);
  }
  Hc = function(e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var t = fr(n.pendingLanes);
          t !== 0 && (lo(n, t | 1), Ze(n, Ae()), (ge & 6) === 0 && (Jt = Ae() + 500, bn()));
        }
        break;
      case 13:
        yt(function() {
          var l = Rn(e, 1);
          if (l !== null) {
            var a = He();
            vn(l, e, 1, a);
          }
        }), za(e, 1);
    }
  }, oo = function(e) {
    if (e.tag === 13) {
      var n = Rn(e, 134217728);
      if (n !== null) {
        var t = He();
        vn(n, e, 134217728, t);
      }
      za(e, 134217728);
    }
  }, Wc = function(e) {
    if (e.tag === 13) {
      var n = it(e), t = Rn(e, n);
      if (t !== null) {
        var l = He();
        vn(t, e, n, l);
      }
      za(e, n);
    }
  }, Xc = function() {
    return ve;
  }, Yc = function(e, n) {
    var t = ve;
    try {
      return ve = e, n();
    } finally {
      ve = t;
    }
  }, bl = function(e, n, t) {
    switch (n) {
      case "input":
        if (jl(e, t), n = t.name, t.type === "radio" && n != null) {
          for (t = e; t.parentNode; ) t = t.parentNode;
          for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
            var l = t[n];
            if (l !== e && l.form === e.form) {
              var a = Ei(l);
              if (!a) throw Error(o(90));
              yc(l), jl(l, a);
            }
          }
        }
        break;
      case "textarea":
        _c(e, t);
        break;
      case "select":
        n = t.value, n != null && Mt(e, !!t.multiple, n, !1);
    }
  }, Oc = Ca, zc = yt;
  var Qp = { usingClientEntryPoint: !1, Events: [Mr, $t, Ei, Vc, Pc, Ca] }, jr = { findFiberByHostInstance: dt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, jp = { bundleType: jr.bundleType, version: jr.version, rendererPackageName: jr.rendererPackageName, rendererConfig: jr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ne.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Lc(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: jr.findFiberByHostInstance || Gp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var fl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!fl.isDisabled && fl.supportsFiber) try {
      si = fl.inject(jp), kn = fl;
    } catch {
    }
  }
  return be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qp, be.createPortal = function(e, n) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ra(n)) throw Error(o(200));
    return $p(e, n, null, t);
  }, be.createRoot = function(e, n) {
    if (!Ra(e)) throw Error(o(299));
    var t = !1, l = "", a = dd;
    return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), n = Oa(e, 1, !1, null, null, t, !1, l, a), e[Pn] = n.current, Cr(e.nodeType === 8 ? e.parentNode : e), new Ta(n);
  }, be.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = Lc(n), e = e === null ? null : e.stateNode, e;
  }, be.flushSync = function(e) {
    return yt(e);
  }, be.hydrate = function(e, n, t) {
    if (!ul(n)) throw Error(o(200));
    return dl(null, e, n, !0, t);
  }, be.hydrateRoot = function(e, n, t) {
    if (!Ra(e)) throw Error(o(405));
    var l = t != null && t.hydratedSources || null, a = !1, s = "", d = dd;
    if (t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), n = sd(n, null, e, 1, t ?? null, a, !1, s, d), e[Pn] = n.current, Cr(e), l) for (e = 0; e < l.length; e++) t = l[e], a = t._getVersion, a = a(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, a] : n.mutableSourceEagerHydrationData.push(
      t,
      a
    );
    return new sl(n);
  }, be.render = function(e, n, t) {
    if (!ul(n)) throw Error(o(200));
    return dl(null, e, n, !1, t);
  }, be.unmountComponentAtNode = function(e) {
    if (!ul(e)) throw Error(o(40));
    return e._reactRootContainer ? (yt(function() {
      dl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Pn] = null;
      });
    }), !0) : !1;
  }, be.unstable_batchedUpdates = Ca, be.unstable_renderSubtreeIntoContainer = function(e, n, t, l) {
    if (!ul(t)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return dl(e, n, t, !1, l);
  }, be.version = "18.3.1-next-f1338f8080-20240426", be;
}
var xd;
function bp() {
  if (xd) return Fa.exports;
  xd = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (i) {
        console.error(i);
      }
  }
  return r(), Fa.exports = Zp(), Fa.exports;
}
var wd;
function Jp() {
  if (wd) return hl;
  wd = 1;
  var r = bp();
  return hl.createRoot = r.createRoot, hl.hydrateRoot = r.hydrateRoot, hl;
}
var Sd = Jp(), Gn = lc();
function xl(r, i) {
  return r == null || i == null ? NaN : r < i ? -1 : r > i ? 1 : r >= i ? 0 : NaN;
}
function e0(r, i) {
  return r == null || i == null ? NaN : i < r ? -1 : i > r ? 1 : i >= r ? 0 : NaN;
}
function cf(r) {
  let i, o, c;
  r.length !== 2 ? (i = xl, o = (p, g) => xl(r(p), g), c = (p, g) => r(p) - g) : (i = r === xl || r === e0 ? r : n0, o = r, c = r);
  function u(p, g, m = 0, v = p.length) {
    if (m < v) {
      if (i(g, g) !== 0) return v;
      do {
        const k = m + v >>> 1;
        o(p[k], g) < 0 ? m = k + 1 : v = k;
      } while (m < v);
    }
    return m;
  }
  function f(p, g, m = 0, v = p.length) {
    if (m < v) {
      if (i(g, g) !== 0) return v;
      do {
        const k = m + v >>> 1;
        o(p[k], g) <= 0 ? m = k + 1 : v = k;
      } while (m < v);
    }
    return m;
  }
  function h(p, g, m = 0, v = p.length) {
    const k = u(p, g, m, v - 1);
    return k > m && c(p[k - 1], g) > -c(p[k], g) ? k - 1 : k;
  }
  return { left: u, center: h, right: f };
}
function n0() {
  return 0;
}
function t0(r) {
  return r === null ? NaN : +r;
}
const r0 = cf(xl), i0 = r0.right;
cf(t0).center;
class kd extends Map {
  constructor(i, o = a0) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: o } }), i != null) for (const [c, u] of i) this.set(c, u);
  }
  get(i) {
    return super.get(_d(this, i));
  }
  has(i) {
    return super.has(_d(this, i));
  }
  set(i, o) {
    return super.set(l0(this, i), o);
  }
  delete(i) {
    return super.delete(o0(this, i));
  }
}
function _d({ _intern: r, _key: i }, o) {
  const c = i(o);
  return r.has(c) ? r.get(c) : o;
}
function l0({ _intern: r, _key: i }, o) {
  const c = i(o);
  return r.has(c) ? r.get(c) : (r.set(c, o), o);
}
function o0({ _intern: r, _key: i }, o) {
  const c = i(o);
  return r.has(c) && (o = r.get(c), r.delete(c)), o;
}
function a0(r) {
  return r !== null && typeof r == "object" ? r.valueOf() : r;
}
const c0 = Math.sqrt(50), s0 = Math.sqrt(10), u0 = Math.sqrt(2);
function Dl(r, i, o) {
  const c = (i - r) / Math.max(0, o), u = Math.floor(Math.log10(c)), f = c / Math.pow(10, u), h = f >= c0 ? 10 : f >= s0 ? 5 : f >= u0 ? 2 : 1;
  let p, g, m;
  return u < 0 ? (m = Math.pow(10, -u) / h, p = Math.round(r * m), g = Math.round(i * m), p / m < r && ++p, g / m > i && --g, m = -m) : (m = Math.pow(10, u) * h, p = Math.round(r / m), g = Math.round(i / m), p * m < r && ++p, g * m > i && --g), g < p && 0.5 <= o && o < 2 ? Dl(r, i, o * 2) : [p, g, m];
}
function Wa(r, i, o) {
  if (i = +i, r = +r, o = +o, !(o > 0)) return [];
  if (r === i) return [r];
  const c = i < r, [u, f, h] = c ? Dl(i, r, o) : Dl(r, i, o);
  if (!(f >= u)) return [];
  const p = f - u + 1, g = new Array(p);
  if (c)
    if (h < 0) for (let m = 0; m < p; ++m) g[m] = (f - m) / -h;
    else for (let m = 0; m < p; ++m) g[m] = (f - m) * h;
  else if (h < 0) for (let m = 0; m < p; ++m) g[m] = (u + m) / -h;
  else for (let m = 0; m < p; ++m) g[m] = (u + m) * h;
  return g;
}
function Xa(r, i, o) {
  return i = +i, r = +r, o = +o, Dl(r, i, o)[2];
}
function d0(r, i, o) {
  i = +i, r = +r, o = +o;
  const c = i < r, u = c ? Xa(i, r, o) : Xa(r, i, o);
  return (c ? -1 : 1) * (u < 0 ? 1 / -u : u);
}
var f0 = { value: () => {
} };
function sf() {
  for (var r = 0, i = arguments.length, o = {}, c; r < i; ++r) {
    if (!(c = arguments[r] + "") || c in o || /[\s.]/.test(c)) throw new Error("illegal type: " + c);
    o[c] = [];
  }
  return new wl(o);
}
function wl(r) {
  this._ = r;
}
function h0(r, i) {
  return r.trim().split(/^|\s+/).map(function(o) {
    var c = "", u = o.indexOf(".");
    if (u >= 0 && (c = o.slice(u + 1), o = o.slice(0, u)), o && !i.hasOwnProperty(o)) throw new Error("unknown type: " + o);
    return { type: o, name: c };
  });
}
wl.prototype = sf.prototype = {
  constructor: wl,
  on: function(r, i) {
    var o = this._, c = h0(r + "", o), u, f = -1, h = c.length;
    if (arguments.length < 2) {
      for (; ++f < h; ) if ((u = (r = c[f]).type) && (u = p0(o[u], r.name))) return u;
      return;
    }
    if (i != null && typeof i != "function") throw new Error("invalid callback: " + i);
    for (; ++f < h; )
      if (u = (r = c[f]).type) o[u] = Dd(o[u], r.name, i);
      else if (i == null) for (u in o) o[u] = Dd(o[u], r.name, null);
    return this;
  },
  copy: function() {
    var r = {}, i = this._;
    for (var o in i) r[o] = i[o].slice();
    return new wl(r);
  },
  call: function(r, i) {
    if ((u = arguments.length - 2) > 0) for (var o = new Array(u), c = 0, u, f; c < u; ++c) o[c] = arguments[c + 2];
    if (!this._.hasOwnProperty(r)) throw new Error("unknown type: " + r);
    for (f = this._[r], c = 0, u = f.length; c < u; ++c) f[c].value.apply(i, o);
  },
  apply: function(r, i, o) {
    if (!this._.hasOwnProperty(r)) throw new Error("unknown type: " + r);
    for (var c = this._[r], u = 0, f = c.length; u < f; ++u) c[u].value.apply(i, o);
  }
};
function p0(r, i) {
  for (var o = 0, c = r.length, u; o < c; ++o)
    if ((u = r[o]).name === i)
      return u.value;
}
function Dd(r, i, o) {
  for (var c = 0, u = r.length; c < u; ++c)
    if (r[c].name === i) {
      r[c] = f0, r = r.slice(0, c).concat(r.slice(c + 1));
      break;
    }
  return o != null && r.push({ name: i, value: o }), r;
}
var Ya = "http://www.w3.org/1999/xhtml";
const Bd = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ya,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Fl(r) {
  var i = r += "", o = i.indexOf(":");
  return o >= 0 && (i = r.slice(0, o)) !== "xmlns" && (r = r.slice(o + 1)), Bd.hasOwnProperty(i) ? { space: Bd[i], local: r } : r;
}
function g0(r) {
  return function() {
    var i = this.ownerDocument, o = this.namespaceURI;
    return o === Ya && i.documentElement.namespaceURI === Ya ? i.createElement(r) : i.createElementNS(o, r);
  };
}
function m0(r) {
  return function() {
    return this.ownerDocument.createElementNS(r.space, r.local);
  };
}
function uf(r) {
  var i = Fl(r);
  return (i.local ? m0 : g0)(i);
}
function N0() {
}
function oc(r) {
  return r == null ? N0 : function() {
    return this.querySelector(r);
  };
}
function v0(r) {
  typeof r != "function" && (r = oc(r));
  for (var i = this._groups, o = i.length, c = new Array(o), u = 0; u < o; ++u)
    for (var f = i[u], h = f.length, p = c[u] = new Array(h), g, m, v = 0; v < h; ++v)
      (g = f[v]) && (m = r.call(g, g.__data__, v, f)) && ("__data__" in g && (m.__data__ = g.__data__), p[v] = m);
  return new wn(c, this._parents);
}
function y0(r) {
  return r == null ? [] : Array.isArray(r) ? r : Array.from(r);
}
function x0() {
  return [];
}
function df(r) {
  return r == null ? x0 : function() {
    return this.querySelectorAll(r);
  };
}
function w0(r) {
  return function() {
    return y0(r.apply(this, arguments));
  };
}
function S0(r) {
  typeof r == "function" ? r = w0(r) : r = df(r);
  for (var i = this._groups, o = i.length, c = [], u = [], f = 0; f < o; ++f)
    for (var h = i[f], p = h.length, g, m = 0; m < p; ++m)
      (g = h[m]) && (c.push(r.call(g, g.__data__, m, h)), u.push(g));
  return new wn(c, u);
}
function ff(r) {
  return function() {
    return this.matches(r);
  };
}
function hf(r) {
  return function(i) {
    return i.matches(r);
  };
}
var k0 = Array.prototype.find;
function _0(r) {
  return function() {
    return k0.call(this.children, r);
  };
}
function D0() {
  return this.firstElementChild;
}
function B0(r) {
  return this.select(r == null ? D0 : _0(typeof r == "function" ? r : hf(r)));
}
var C0 = Array.prototype.filter;
function E0() {
  return Array.from(this.children);
}
function A0(r) {
  return function() {
    return C0.call(this.children, r);
  };
}
function M0(r) {
  return this.selectAll(r == null ? E0 : A0(typeof r == "function" ? r : hf(r)));
}
function V0(r) {
  typeof r != "function" && (r = ff(r));
  for (var i = this._groups, o = i.length, c = new Array(o), u = 0; u < o; ++u)
    for (var f = i[u], h = f.length, p = c[u] = [], g, m = 0; m < h; ++m)
      (g = f[m]) && r.call(g, g.__data__, m, f) && p.push(g);
  return new wn(c, this._parents);
}
function pf(r) {
  return new Array(r.length);
}
function P0() {
  return new wn(this._enter || this._groups.map(pf), this._parents);
}
function Bl(r, i) {
  this.ownerDocument = r.ownerDocument, this.namespaceURI = r.namespaceURI, this._next = null, this._parent = r, this.__data__ = i;
}
Bl.prototype = {
  constructor: Bl,
  appendChild: function(r) {
    return this._parent.insertBefore(r, this._next);
  },
  insertBefore: function(r, i) {
    return this._parent.insertBefore(r, i);
  },
  querySelector: function(r) {
    return this._parent.querySelector(r);
  },
  querySelectorAll: function(r) {
    return this._parent.querySelectorAll(r);
  }
};
function O0(r) {
  return function() {
    return r;
  };
}
function z0(r, i, o, c, u, f) {
  for (var h = 0, p, g = i.length, m = f.length; h < m; ++h)
    (p = i[h]) ? (p.__data__ = f[h], c[h] = p) : o[h] = new Bl(r, f[h]);
  for (; h < g; ++h)
    (p = i[h]) && (u[h] = p);
}
function T0(r, i, o, c, u, f, h) {
  var p, g, m = /* @__PURE__ */ new Map(), v = i.length, k = f.length, w = new Array(v), C;
  for (p = 0; p < v; ++p)
    (g = i[p]) && (w[p] = C = h.call(g, g.__data__, p, i) + "", m.has(C) ? u[p] = g : m.set(C, g));
  for (p = 0; p < k; ++p)
    C = h.call(r, f[p], p, f) + "", (g = m.get(C)) ? (c[p] = g, g.__data__ = f[p], m.delete(C)) : o[p] = new Bl(r, f[p]);
  for (p = 0; p < v; ++p)
    (g = i[p]) && m.get(w[p]) === g && (u[p] = g);
}
function R0(r) {
  return r.__data__;
}
function I0(r, i) {
  if (!arguments.length) return Array.from(this, R0);
  var o = i ? T0 : z0, c = this._parents, u = this._groups;
  typeof r != "function" && (r = O0(r));
  for (var f = u.length, h = new Array(f), p = new Array(f), g = new Array(f), m = 0; m < f; ++m) {
    var v = c[m], k = u[m], w = k.length, C = L0(r.call(v, v && v.__data__, m, c)), $ = C.length, L = p[m] = new Array($), z = h[m] = new Array($), q = g[m] = new Array(w);
    o(v, k, L, z, q, C, i);
    for (var oe = 0, ae = 0, ne, ue; oe < $; ++oe)
      if (ne = L[oe]) {
        for (oe >= ae && (ae = oe + 1); !(ue = z[ae]) && ++ae < $; ) ;
        ne._next = ue || null;
      }
  }
  return h = new wn(h, c), h._enter = p, h._exit = g, h;
}
function L0(r) {
  return typeof r == "object" && "length" in r ? r : Array.from(r);
}
function F0() {
  return new wn(this._exit || this._groups.map(pf), this._parents);
}
function $0(r, i, o) {
  var c = this.enter(), u = this, f = this.exit();
  return typeof r == "function" ? (c = r(c), c && (c = c.selection())) : c = c.append(r + ""), i != null && (u = i(u), u && (u = u.selection())), o == null ? f.remove() : o(f), c && u ? c.merge(u).order() : u;
}
function G0(r) {
  for (var i = r.selection ? r.selection() : r, o = this._groups, c = i._groups, u = o.length, f = c.length, h = Math.min(u, f), p = new Array(u), g = 0; g < h; ++g)
    for (var m = o[g], v = c[g], k = m.length, w = p[g] = new Array(k), C, $ = 0; $ < k; ++$)
      (C = m[$] || v[$]) && (w[$] = C);
  for (; g < u; ++g)
    p[g] = o[g];
  return new wn(p, this._parents);
}
function K0() {
  for (var r = this._groups, i = -1, o = r.length; ++i < o; )
    for (var c = r[i], u = c.length - 1, f = c[u], h; --u >= 0; )
      (h = c[u]) && (f && h.compareDocumentPosition(f) ^ 4 && f.parentNode.insertBefore(h, f), f = h);
  return this;
}
function Q0(r) {
  r || (r = j0);
  function i(k, w) {
    return k && w ? r(k.__data__, w.__data__) : !k - !w;
  }
  for (var o = this._groups, c = o.length, u = new Array(c), f = 0; f < c; ++f) {
    for (var h = o[f], p = h.length, g = u[f] = new Array(p), m, v = 0; v < p; ++v)
      (m = h[v]) && (g[v] = m);
    g.sort(i);
  }
  return new wn(u, this._parents).order();
}
function j0(r, i) {
  return r < i ? -1 : r > i ? 1 : r >= i ? 0 : NaN;
}
function U0() {
  var r = arguments[0];
  return arguments[0] = this, r.apply(null, arguments), this;
}
function H0() {
  return Array.from(this);
}
function W0() {
  for (var r = this._groups, i = 0, o = r.length; i < o; ++i)
    for (var c = r[i], u = 0, f = c.length; u < f; ++u) {
      var h = c[u];
      if (h) return h;
    }
  return null;
}
function X0() {
  let r = 0;
  for (const i of this) ++r;
  return r;
}
function Y0() {
  return !this.node();
}
function q0(r) {
  for (var i = this._groups, o = 0, c = i.length; o < c; ++o)
    for (var u = i[o], f = 0, h = u.length, p; f < h; ++f)
      (p = u[f]) && r.call(p, p.__data__, f, u);
  return this;
}
function Z0(r) {
  return function() {
    this.removeAttribute(r);
  };
}
function b0(r) {
  return function() {
    this.removeAttributeNS(r.space, r.local);
  };
}
function J0(r, i) {
  return function() {
    this.setAttribute(r, i);
  };
}
function eg(r, i) {
  return function() {
    this.setAttributeNS(r.space, r.local, i);
  };
}
function ng(r, i) {
  return function() {
    var o = i.apply(this, arguments);
    o == null ? this.removeAttribute(r) : this.setAttribute(r, o);
  };
}
function tg(r, i) {
  return function() {
    var o = i.apply(this, arguments);
    o == null ? this.removeAttributeNS(r.space, r.local) : this.setAttributeNS(r.space, r.local, o);
  };
}
function rg(r, i) {
  var o = Fl(r);
  if (arguments.length < 2) {
    var c = this.node();
    return o.local ? c.getAttributeNS(o.space, o.local) : c.getAttribute(o);
  }
  return this.each((i == null ? o.local ? b0 : Z0 : typeof i == "function" ? o.local ? tg : ng : o.local ? eg : J0)(o, i));
}
function gf(r) {
  return r.ownerDocument && r.ownerDocument.defaultView || r.document && r || r.defaultView;
}
function ig(r) {
  return function() {
    this.style.removeProperty(r);
  };
}
function lg(r, i, o) {
  return function() {
    this.style.setProperty(r, i, o);
  };
}
function og(r, i, o) {
  return function() {
    var c = i.apply(this, arguments);
    c == null ? this.style.removeProperty(r) : this.style.setProperty(r, c, o);
  };
}
function ag(r, i, o) {
  return arguments.length > 1 ? this.each((i == null ? ig : typeof i == "function" ? og : lg)(r, i, o ?? "")) : rr(this.node(), r);
}
function rr(r, i) {
  return r.style.getPropertyValue(i) || gf(r).getComputedStyle(r, null).getPropertyValue(i);
}
function cg(r) {
  return function() {
    delete this[r];
  };
}
function sg(r, i) {
  return function() {
    this[r] = i;
  };
}
function ug(r, i) {
  return function() {
    var o = i.apply(this, arguments);
    o == null ? delete this[r] : this[r] = o;
  };
}
function dg(r, i) {
  return arguments.length > 1 ? this.each((i == null ? cg : typeof i == "function" ? ug : sg)(r, i)) : this.node()[r];
}
function mf(r) {
  return r.trim().split(/^|\s+/);
}
function ac(r) {
  return r.classList || new Nf(r);
}
function Nf(r) {
  this._node = r, this._names = mf(r.getAttribute("class") || "");
}
Nf.prototype = {
  add: function(r) {
    var i = this._names.indexOf(r);
    i < 0 && (this._names.push(r), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(r) {
    var i = this._names.indexOf(r);
    i >= 0 && (this._names.splice(i, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(r) {
    return this._names.indexOf(r) >= 0;
  }
};
function vf(r, i) {
  for (var o = ac(r), c = -1, u = i.length; ++c < u; ) o.add(i[c]);
}
function yf(r, i) {
  for (var o = ac(r), c = -1, u = i.length; ++c < u; ) o.remove(i[c]);
}
function fg(r) {
  return function() {
    vf(this, r);
  };
}
function hg(r) {
  return function() {
    yf(this, r);
  };
}
function pg(r, i) {
  return function() {
    (i.apply(this, arguments) ? vf : yf)(this, r);
  };
}
function gg(r, i) {
  var o = mf(r + "");
  if (arguments.length < 2) {
    for (var c = ac(this.node()), u = -1, f = o.length; ++u < f; ) if (!c.contains(o[u])) return !1;
    return !0;
  }
  return this.each((typeof i == "function" ? pg : i ? fg : hg)(o, i));
}
function mg() {
  this.textContent = "";
}
function Ng(r) {
  return function() {
    this.textContent = r;
  };
}
function vg(r) {
  return function() {
    var i = r.apply(this, arguments);
    this.textContent = i ?? "";
  };
}
function yg(r) {
  return arguments.length ? this.each(r == null ? mg : (typeof r == "function" ? vg : Ng)(r)) : this.node().textContent;
}
function xg() {
  this.innerHTML = "";
}
function wg(r) {
  return function() {
    this.innerHTML = r;
  };
}
function Sg(r) {
  return function() {
    var i = r.apply(this, arguments);
    this.innerHTML = i ?? "";
  };
}
function kg(r) {
  return arguments.length ? this.each(r == null ? xg : (typeof r == "function" ? Sg : wg)(r)) : this.node().innerHTML;
}
function _g() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Dg() {
  return this.each(_g);
}
function Bg() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Cg() {
  return this.each(Bg);
}
function Eg(r) {
  var i = typeof r == "function" ? r : uf(r);
  return this.select(function() {
    return this.appendChild(i.apply(this, arguments));
  });
}
function Ag() {
  return null;
}
function Mg(r, i) {
  var o = typeof r == "function" ? r : uf(r), c = i == null ? Ag : typeof i == "function" ? i : oc(i);
  return this.select(function() {
    return this.insertBefore(o.apply(this, arguments), c.apply(this, arguments) || null);
  });
}
function Vg() {
  var r = this.parentNode;
  r && r.removeChild(this);
}
function Pg() {
  return this.each(Vg);
}
function Og() {
  var r = this.cloneNode(!1), i = this.parentNode;
  return i ? i.insertBefore(r, this.nextSibling) : r;
}
function zg() {
  var r = this.cloneNode(!0), i = this.parentNode;
  return i ? i.insertBefore(r, this.nextSibling) : r;
}
function Tg(r) {
  return this.select(r ? zg : Og);
}
function Rg(r) {
  return arguments.length ? this.property("__data__", r) : this.node().__data__;
}
function Ig(r) {
  return function(i) {
    r.call(this, i, this.__data__);
  };
}
function Lg(r) {
  return r.trim().split(/^|\s+/).map(function(i) {
    var o = "", c = i.indexOf(".");
    return c >= 0 && (o = i.slice(c + 1), i = i.slice(0, c)), { type: i, name: o };
  });
}
function Fg(r) {
  return function() {
    var i = this.__on;
    if (i) {
      for (var o = 0, c = -1, u = i.length, f; o < u; ++o)
        f = i[o], (!r.type || f.type === r.type) && f.name === r.name ? this.removeEventListener(f.type, f.listener, f.options) : i[++c] = f;
      ++c ? i.length = c : delete this.__on;
    }
  };
}
function $g(r, i, o) {
  return function() {
    var c = this.__on, u, f = Ig(i);
    if (c) {
      for (var h = 0, p = c.length; h < p; ++h)
        if ((u = c[h]).type === r.type && u.name === r.name) {
          this.removeEventListener(u.type, u.listener, u.options), this.addEventListener(u.type, u.listener = f, u.options = o), u.value = i;
          return;
        }
    }
    this.addEventListener(r.type, f, o), u = { type: r.type, name: r.name, value: i, listener: f, options: o }, c ? c.push(u) : this.__on = [u];
  };
}
function Gg(r, i, o) {
  var c = Lg(r + ""), u, f = c.length, h;
  if (arguments.length < 2) {
    var p = this.node().__on;
    if (p) {
      for (var g = 0, m = p.length, v; g < m; ++g)
        for (u = 0, v = p[g]; u < f; ++u)
          if ((h = c[u]).type === v.type && h.name === v.name)
            return v.value;
    }
    return;
  }
  for (p = i ? $g : Fg, u = 0; u < f; ++u) this.each(p(c[u], i, o));
  return this;
}
function xf(r, i, o) {
  var c = gf(r), u = c.CustomEvent;
  typeof u == "function" ? u = new u(i, o) : (u = c.document.createEvent("Event"), o ? (u.initEvent(i, o.bubbles, o.cancelable), u.detail = o.detail) : u.initEvent(i, !1, !1)), r.dispatchEvent(u);
}
function Kg(r, i) {
  return function() {
    return xf(this, r, i);
  };
}
function Qg(r, i) {
  return function() {
    return xf(this, r, i.apply(this, arguments));
  };
}
function jg(r, i) {
  return this.each((typeof i == "function" ? Qg : Kg)(r, i));
}
function* Ug() {
  for (var r = this._groups, i = 0, o = r.length; i < o; ++i)
    for (var c = r[i], u = 0, f = c.length, h; u < f; ++u)
      (h = c[u]) && (yield h);
}
var Hg = [null];
function wn(r, i) {
  this._groups = r, this._parents = i;
}
function ti() {
  return new wn([[document.documentElement]], Hg);
}
function Wg() {
  return this;
}
wn.prototype = ti.prototype = {
  constructor: wn,
  select: v0,
  selectAll: S0,
  selectChild: B0,
  selectChildren: M0,
  filter: V0,
  data: I0,
  enter: P0,
  exit: F0,
  join: $0,
  merge: G0,
  selection: Wg,
  order: K0,
  sort: Q0,
  call: U0,
  nodes: H0,
  node: W0,
  size: X0,
  empty: Y0,
  each: q0,
  attr: rg,
  style: ag,
  property: dg,
  classed: gg,
  text: yg,
  html: kg,
  raise: Dg,
  lower: Cg,
  append: Eg,
  insert: Mg,
  remove: Pg,
  clone: Tg,
  datum: Rg,
  on: Gg,
  dispatch: jg,
  [Symbol.iterator]: Ug
};
function cc(r, i, o) {
  r.prototype = i.prototype = o, o.constructor = r;
}
function wf(r, i) {
  var o = Object.create(r.prototype);
  for (var c in i) o[c] = i[c];
  return o;
}
function ri() {
}
var Zr = 0.7, Cl = 1 / Zr, tr = "\\s*([+-]?\\d+)\\s*", br = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Mn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Xg = /^#([0-9a-f]{3,8})$/, Yg = new RegExp(`^rgb\\(${tr},${tr},${tr}\\)$`), qg = new RegExp(`^rgb\\(${Mn},${Mn},${Mn}\\)$`), Zg = new RegExp(`^rgba\\(${tr},${tr},${tr},${br}\\)$`), bg = new RegExp(`^rgba\\(${Mn},${Mn},${Mn},${br}\\)$`), Jg = new RegExp(`^hsl\\(${br},${Mn},${Mn}\\)$`), e4 = new RegExp(`^hsla\\(${br},${Mn},${Mn},${br}\\)$`), Cd = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
cc(ri, Et, {
  copy(r) {
    return Object.assign(new this.constructor(), this, r);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ed,
  // Deprecated! Use color.formatHex.
  formatHex: Ed,
  formatHex8: n4,
  formatHsl: t4,
  formatRgb: Ad,
  toString: Ad
});
function Ed() {
  return this.rgb().formatHex();
}
function n4() {
  return this.rgb().formatHex8();
}
function t4() {
  return Sf(this).formatHsl();
}
function Ad() {
  return this.rgb().formatRgb();
}
function Et(r) {
  var i, o;
  return r = (r + "").trim().toLowerCase(), (i = Xg.exec(r)) ? (o = i[1].length, i = parseInt(i[1], 16), o === 6 ? Md(i) : o === 3 ? new en(i >> 8 & 15 | i >> 4 & 240, i >> 4 & 15 | i & 240, (i & 15) << 4 | i & 15, 1) : o === 8 ? pl(i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, (i & 255) / 255) : o === 4 ? pl(i >> 12 & 15 | i >> 8 & 240, i >> 8 & 15 | i >> 4 & 240, i >> 4 & 15 | i & 240, ((i & 15) << 4 | i & 15) / 255) : null) : (i = Yg.exec(r)) ? new en(i[1], i[2], i[3], 1) : (i = qg.exec(r)) ? new en(i[1] * 255 / 100, i[2] * 255 / 100, i[3] * 255 / 100, 1) : (i = Zg.exec(r)) ? pl(i[1], i[2], i[3], i[4]) : (i = bg.exec(r)) ? pl(i[1] * 255 / 100, i[2] * 255 / 100, i[3] * 255 / 100, i[4]) : (i = Jg.exec(r)) ? Od(i[1], i[2] / 100, i[3] / 100, 1) : (i = e4.exec(r)) ? Od(i[1], i[2] / 100, i[3] / 100, i[4]) : Cd.hasOwnProperty(r) ? Md(Cd[r]) : r === "transparent" ? new en(NaN, NaN, NaN, 0) : null;
}
function Md(r) {
  return new en(r >> 16 & 255, r >> 8 & 255, r & 255, 1);
}
function pl(r, i, o, c) {
  return c <= 0 && (r = i = o = NaN), new en(r, i, o, c);
}
function r4(r) {
  return r instanceof ri || (r = Et(r)), r ? (r = r.rgb(), new en(r.r, r.g, r.b, r.opacity)) : new en();
}
function qa(r, i, o, c) {
  return arguments.length === 1 ? r4(r) : new en(r, i, o, c ?? 1);
}
function en(r, i, o, c) {
  this.r = +r, this.g = +i, this.b = +o, this.opacity = +c;
}
cc(en, qa, wf(ri, {
  brighter(r) {
    return r = r == null ? Cl : Math.pow(Cl, r), new en(this.r * r, this.g * r, this.b * r, this.opacity);
  },
  darker(r) {
    return r = r == null ? Zr : Math.pow(Zr, r), new en(this.r * r, this.g * r, this.b * r, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new en(Ct(this.r), Ct(this.g), Ct(this.b), El(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Vd,
  // Deprecated! Use color.formatHex.
  formatHex: Vd,
  formatHex8: i4,
  formatRgb: Pd,
  toString: Pd
}));
function Vd() {
  return `#${Bt(this.r)}${Bt(this.g)}${Bt(this.b)}`;
}
function i4() {
  return `#${Bt(this.r)}${Bt(this.g)}${Bt(this.b)}${Bt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Pd() {
  const r = El(this.opacity);
  return `${r === 1 ? "rgb(" : "rgba("}${Ct(this.r)}, ${Ct(this.g)}, ${Ct(this.b)}${r === 1 ? ")" : `, ${r})`}`;
}
function El(r) {
  return isNaN(r) ? 1 : Math.max(0, Math.min(1, r));
}
function Ct(r) {
  return Math.max(0, Math.min(255, Math.round(r) || 0));
}
function Bt(r) {
  return r = Ct(r), (r < 16 ? "0" : "") + r.toString(16);
}
function Od(r, i, o, c) {
  return c <= 0 ? r = i = o = NaN : o <= 0 || o >= 1 ? r = i = NaN : i <= 0 && (r = NaN), new xn(r, i, o, c);
}
function Sf(r) {
  if (r instanceof xn) return new xn(r.h, r.s, r.l, r.opacity);
  if (r instanceof ri || (r = Et(r)), !r) return new xn();
  if (r instanceof xn) return r;
  r = r.rgb();
  var i = r.r / 255, o = r.g / 255, c = r.b / 255, u = Math.min(i, o, c), f = Math.max(i, o, c), h = NaN, p = f - u, g = (f + u) / 2;
  return p ? (i === f ? h = (o - c) / p + (o < c) * 6 : o === f ? h = (c - i) / p + 2 : h = (i - o) / p + 4, p /= g < 0.5 ? f + u : 2 - f - u, h *= 60) : p = g > 0 && g < 1 ? 0 : h, new xn(h, p, g, r.opacity);
}
function Al(r, i, o, c) {
  return arguments.length === 1 ? Sf(r) : new xn(r, i, o, c ?? 1);
}
function xn(r, i, o, c) {
  this.h = +r, this.s = +i, this.l = +o, this.opacity = +c;
}
cc(xn, Al, wf(ri, {
  brighter(r) {
    return r = r == null ? Cl : Math.pow(Cl, r), new xn(this.h, this.s, this.l * r, this.opacity);
  },
  darker(r) {
    return r = r == null ? Zr : Math.pow(Zr, r), new xn(this.h, this.s, this.l * r, this.opacity);
  },
  rgb() {
    var r = this.h % 360 + (this.h < 0) * 360, i = isNaN(r) || isNaN(this.s) ? 0 : this.s, o = this.l, c = o + (o < 0.5 ? o : 1 - o) * i, u = 2 * o - c;
    return new en(
      Ka(r >= 240 ? r - 240 : r + 120, u, c),
      Ka(r, u, c),
      Ka(r < 120 ? r + 240 : r - 120, u, c),
      this.opacity
    );
  },
  clamp() {
    return new xn(zd(this.h), gl(this.s), gl(this.l), El(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const r = El(this.opacity);
    return `${r === 1 ? "hsl(" : "hsla("}${zd(this.h)}, ${gl(this.s) * 100}%, ${gl(this.l) * 100}%${r === 1 ? ")" : `, ${r})`}`;
  }
}));
function zd(r) {
  return r = (r || 0) % 360, r < 0 ? r + 360 : r;
}
function gl(r) {
  return Math.max(0, Math.min(1, r || 0));
}
function Ka(r, i, o) {
  return (r < 60 ? i + (o - i) * r / 60 : r < 180 ? o : r < 240 ? i + (o - i) * (240 - r) / 60 : i) * 255;
}
const sc = (r) => () => r;
function l4(r, i) {
  return function(o) {
    return r + o * i;
  };
}
function o4(r, i, o) {
  return r = Math.pow(r, o), i = Math.pow(i, o) - r, o = 1 / o, function(c) {
    return Math.pow(r + c * i, o);
  };
}
function a4(r) {
  return (r = +r) == 1 ? kf : function(i, o) {
    return o - i ? o4(i, o, r) : sc(isNaN(i) ? o : i);
  };
}
function kf(r, i) {
  var o = i - r;
  return o ? l4(r, o) : sc(isNaN(r) ? i : r);
}
const Ml = (function r(i) {
  var o = a4(i);
  function c(u, f) {
    var h = o((u = qa(u)).r, (f = qa(f)).r), p = o(u.g, f.g), g = o(u.b, f.b), m = kf(u.opacity, f.opacity);
    return function(v) {
      return u.r = h(v), u.g = p(v), u.b = g(v), u.opacity = m(v), u + "";
    };
  }
  return c.gamma = r, c;
})(1);
function c4(r, i) {
  i || (i = []);
  var o = r ? Math.min(i.length, r.length) : 0, c = i.slice(), u;
  return function(f) {
    for (u = 0; u < o; ++u) c[u] = r[u] * (1 - f) + i[u] * f;
    return c;
  };
}
function s4(r) {
  return ArrayBuffer.isView(r) && !(r instanceof DataView);
}
function u4(r, i) {
  var o = i ? i.length : 0, c = r ? Math.min(o, r.length) : 0, u = new Array(c), f = new Array(o), h;
  for (h = 0; h < c; ++h) u[h] = uc(r[h], i[h]);
  for (; h < o; ++h) f[h] = i[h];
  return function(p) {
    for (h = 0; h < c; ++h) f[h] = u[h](p);
    return f;
  };
}
function d4(r, i) {
  var o = /* @__PURE__ */ new Date();
  return r = +r, i = +i, function(c) {
    return o.setTime(r * (1 - c) + i * c), o;
  };
}
function yn(r, i) {
  return r = +r, i = +i, function(o) {
    return r * (1 - o) + i * o;
  };
}
function f4(r, i) {
  var o = {}, c = {}, u;
  (r === null || typeof r != "object") && (r = {}), (i === null || typeof i != "object") && (i = {});
  for (u in i)
    u in r ? o[u] = uc(r[u], i[u]) : c[u] = i[u];
  return function(f) {
    for (u in o) c[u] = o[u](f);
    return c;
  };
}
var Za = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Qa = new RegExp(Za.source, "g");
function h4(r) {
  return function() {
    return r;
  };
}
function p4(r) {
  return function(i) {
    return r(i) + "";
  };
}
function _f(r, i) {
  var o = Za.lastIndex = Qa.lastIndex = 0, c, u, f, h = -1, p = [], g = [];
  for (r = r + "", i = i + ""; (c = Za.exec(r)) && (u = Qa.exec(i)); )
    (f = u.index) > o && (f = i.slice(o, f), p[h] ? p[h] += f : p[++h] = f), (c = c[0]) === (u = u[0]) ? p[h] ? p[h] += u : p[++h] = u : (p[++h] = null, g.push({ i: h, x: yn(c, u) })), o = Qa.lastIndex;
  return o < i.length && (f = i.slice(o), p[h] ? p[h] += f : p[++h] = f), p.length < 2 ? g[0] ? p4(g[0].x) : h4(i) : (i = g.length, function(m) {
    for (var v = 0, k; v < i; ++v) p[(k = g[v]).i] = k.x(m);
    return p.join("");
  });
}
function uc(r, i) {
  var o = typeof i, c;
  return i == null || o === "boolean" ? sc(i) : (o === "number" ? yn : o === "string" ? (c = Et(i)) ? (i = c, Ml) : _f : i instanceof Et ? Ml : i instanceof Date ? d4 : s4(i) ? c4 : Array.isArray(i) ? u4 : typeof i.valueOf != "function" && typeof i.toString != "function" || isNaN(i) ? f4 : yn)(r, i);
}
function g4(r, i) {
  return r = +r, i = +i, function(o) {
    return Math.round(r * (1 - o) + i * o);
  };
}
var Td = 180 / Math.PI, ba = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Df(r, i, o, c, u, f) {
  var h, p, g;
  return (h = Math.sqrt(r * r + i * i)) && (r /= h, i /= h), (g = r * o + i * c) && (o -= r * g, c -= i * g), (p = Math.sqrt(o * o + c * c)) && (o /= p, c /= p, g /= p), r * c < i * o && (r = -r, i = -i, g = -g, h = -h), {
    translateX: u,
    translateY: f,
    rotate: Math.atan2(i, r) * Td,
    skewX: Math.atan(g) * Td,
    scaleX: h,
    scaleY: p
  };
}
var ml;
function m4(r) {
  const i = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(r + "");
  return i.isIdentity ? ba : Df(i.a, i.b, i.c, i.d, i.e, i.f);
}
function N4(r) {
  return r == null || (ml || (ml = document.createElementNS("http://www.w3.org/2000/svg", "g")), ml.setAttribute("transform", r), !(r = ml.transform.baseVal.consolidate())) ? ba : (r = r.matrix, Df(r.a, r.b, r.c, r.d, r.e, r.f));
}
function Bf(r, i, o, c) {
  function u(m) {
    return m.length ? m.pop() + " " : "";
  }
  function f(m, v, k, w, C, $) {
    if (m !== k || v !== w) {
      var L = C.push("translate(", null, i, null, o);
      $.push({ i: L - 4, x: yn(m, k) }, { i: L - 2, x: yn(v, w) });
    } else (k || w) && C.push("translate(" + k + i + w + o);
  }
  function h(m, v, k, w) {
    m !== v ? (m - v > 180 ? v += 360 : v - m > 180 && (m += 360), w.push({ i: k.push(u(k) + "rotate(", null, c) - 2, x: yn(m, v) })) : v && k.push(u(k) + "rotate(" + v + c);
  }
  function p(m, v, k, w) {
    m !== v ? w.push({ i: k.push(u(k) + "skewX(", null, c) - 2, x: yn(m, v) }) : v && k.push(u(k) + "skewX(" + v + c);
  }
  function g(m, v, k, w, C, $) {
    if (m !== k || v !== w) {
      var L = C.push(u(C) + "scale(", null, ",", null, ")");
      $.push({ i: L - 4, x: yn(m, k) }, { i: L - 2, x: yn(v, w) });
    } else (k !== 1 || w !== 1) && C.push(u(C) + "scale(" + k + "," + w + ")");
  }
  return function(m, v) {
    var k = [], w = [];
    return m = r(m), v = r(v), f(m.translateX, m.translateY, v.translateX, v.translateY, k, w), h(m.rotate, v.rotate, k, w), p(m.skewX, v.skewX, k, w), g(m.scaleX, m.scaleY, v.scaleX, v.scaleY, k, w), m = v = null, function(C) {
      for (var $ = -1, L = w.length, z; ++$ < L; ) k[(z = w[$]).i] = z.x(C);
      return k.join("");
    };
  };
}
var v4 = Bf(m4, "px, ", "px)", "deg)"), y4 = Bf(N4, ", ", ")", ")"), ir = 0, Xr = 0, Hr = 0, Cf = 1e3, Vl, Yr, Pl = 0, At = 0, $l = 0, Jr = typeof performance == "object" && performance.now ? performance : Date, Ef = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(r) {
  setTimeout(r, 17);
};
function dc() {
  return At || (Ef(x4), At = Jr.now() + $l);
}
function x4() {
  At = 0;
}
function Ol() {
  this._call = this._time = this._next = null;
}
Ol.prototype = Af.prototype = {
  constructor: Ol,
  restart: function(r, i, o) {
    if (typeof r != "function") throw new TypeError("callback is not a function");
    o = (o == null ? dc() : +o) + (i == null ? 0 : +i), !this._next && Yr !== this && (Yr ? Yr._next = this : Vl = this, Yr = this), this._call = r, this._time = o, Ja();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ja());
  }
};
function Af(r, i, o) {
  var c = new Ol();
  return c.restart(r, i, o), c;
}
function w4() {
  dc(), ++ir;
  for (var r = Vl, i; r; )
    (i = At - r._time) >= 0 && r._call.call(void 0, i), r = r._next;
  --ir;
}
function Rd() {
  At = (Pl = Jr.now()) + $l, ir = Xr = 0;
  try {
    w4();
  } finally {
    ir = 0, k4(), At = 0;
  }
}
function S4() {
  var r = Jr.now(), i = r - Pl;
  i > Cf && ($l -= i, Pl = r);
}
function k4() {
  for (var r, i = Vl, o, c = 1 / 0; i; )
    i._call ? (c > i._time && (c = i._time), r = i, i = i._next) : (o = i._next, i._next = null, i = r ? r._next = o : Vl = o);
  Yr = r, Ja(c);
}
function Ja(r) {
  if (!ir) {
    Xr && (Xr = clearTimeout(Xr));
    var i = r - At;
    i > 24 ? (r < 1 / 0 && (Xr = setTimeout(Rd, r - Jr.now() - $l)), Hr && (Hr = clearInterval(Hr))) : (Hr || (Pl = Jr.now(), Hr = setInterval(S4, Cf)), ir = 1, Ef(Rd));
  }
}
function Id(r, i, o) {
  var c = new Ol();
  return i = i == null ? 0 : +i, c.restart((u) => {
    c.stop(), r(u + i);
  }, i, o), c;
}
var _4 = sf("start", "end", "cancel", "interrupt"), D4 = [], Mf = 0, Ld = 1, ec = 2, Sl = 3, Fd = 4, nc = 5, kl = 6;
function Gl(r, i, o, c, u, f) {
  var h = r.__transition;
  if (!h) r.__transition = {};
  else if (o in h) return;
  B4(r, o, {
    name: i,
    index: c,
    // For context during callback.
    group: u,
    // For context during callback.
    on: _4,
    tween: D4,
    time: f.time,
    delay: f.delay,
    duration: f.duration,
    ease: f.ease,
    timer: null,
    state: Mf
  });
}
function fc(r, i) {
  var o = Sn(r, i);
  if (o.state > Mf) throw new Error("too late; already scheduled");
  return o;
}
function Vn(r, i) {
  var o = Sn(r, i);
  if (o.state > Sl) throw new Error("too late; already running");
  return o;
}
function Sn(r, i) {
  var o = r.__transition;
  if (!o || !(o = o[i])) throw new Error("transition not found");
  return o;
}
function B4(r, i, o) {
  var c = r.__transition, u;
  c[i] = o, o.timer = Af(f, 0, o.time);
  function f(m) {
    o.state = Ld, o.timer.restart(h, o.delay, o.time), o.delay <= m && h(m - o.delay);
  }
  function h(m) {
    var v, k, w, C;
    if (o.state !== Ld) return g();
    for (v in c)
      if (C = c[v], C.name === o.name) {
        if (C.state === Sl) return Id(h);
        C.state === Fd ? (C.state = kl, C.timer.stop(), C.on.call("interrupt", r, r.__data__, C.index, C.group), delete c[v]) : +v < i && (C.state = kl, C.timer.stop(), C.on.call("cancel", r, r.__data__, C.index, C.group), delete c[v]);
      }
    if (Id(function() {
      o.state === Sl && (o.state = Fd, o.timer.restart(p, o.delay, o.time), p(m));
    }), o.state = ec, o.on.call("start", r, r.__data__, o.index, o.group), o.state === ec) {
      for (o.state = Sl, u = new Array(w = o.tween.length), v = 0, k = -1; v < w; ++v)
        (C = o.tween[v].value.call(r, r.__data__, o.index, o.group)) && (u[++k] = C);
      u.length = k + 1;
    }
  }
  function p(m) {
    for (var v = m < o.duration ? o.ease.call(null, m / o.duration) : (o.timer.restart(g), o.state = nc, 1), k = -1, w = u.length; ++k < w; )
      u[k].call(r, v);
    o.state === nc && (o.on.call("end", r, r.__data__, o.index, o.group), g());
  }
  function g() {
    o.state = kl, o.timer.stop(), delete c[i];
    for (var m in c) return;
    delete r.__transition;
  }
}
function C4(r, i) {
  var o = r.__transition, c, u, f = !0, h;
  if (o) {
    i = i == null ? null : i + "";
    for (h in o) {
      if ((c = o[h]).name !== i) {
        f = !1;
        continue;
      }
      u = c.state > ec && c.state < nc, c.state = kl, c.timer.stop(), c.on.call(u ? "interrupt" : "cancel", r, r.__data__, c.index, c.group), delete o[h];
    }
    f && delete r.__transition;
  }
}
function E4(r) {
  return this.each(function() {
    C4(this, r);
  });
}
function A4(r, i) {
  var o, c;
  return function() {
    var u = Vn(this, r), f = u.tween;
    if (f !== o) {
      c = o = f;
      for (var h = 0, p = c.length; h < p; ++h)
        if (c[h].name === i) {
          c = c.slice(), c.splice(h, 1);
          break;
        }
    }
    u.tween = c;
  };
}
function M4(r, i, o) {
  var c, u;
  if (typeof o != "function") throw new Error();
  return function() {
    var f = Vn(this, r), h = f.tween;
    if (h !== c) {
      u = (c = h).slice();
      for (var p = { name: i, value: o }, g = 0, m = u.length; g < m; ++g)
        if (u[g].name === i) {
          u[g] = p;
          break;
        }
      g === m && u.push(p);
    }
    f.tween = u;
  };
}
function V4(r, i) {
  var o = this._id;
  if (r += "", arguments.length < 2) {
    for (var c = Sn(this.node(), o).tween, u = 0, f = c.length, h; u < f; ++u)
      if ((h = c[u]).name === r)
        return h.value;
    return null;
  }
  return this.each((i == null ? A4 : M4)(o, r, i));
}
function hc(r, i, o) {
  var c = r._id;
  return r.each(function() {
    var u = Vn(this, c);
    (u.value || (u.value = {}))[i] = o.apply(this, arguments);
  }), function(u) {
    return Sn(u, c).value[i];
  };
}
function Vf(r, i) {
  var o;
  return (typeof i == "number" ? yn : i instanceof Et ? Ml : (o = Et(i)) ? (i = o, Ml) : _f)(r, i);
}
function P4(r) {
  return function() {
    this.removeAttribute(r);
  };
}
function O4(r) {
  return function() {
    this.removeAttributeNS(r.space, r.local);
  };
}
function z4(r, i, o) {
  var c, u = o + "", f;
  return function() {
    var h = this.getAttribute(r);
    return h === u ? null : h === c ? f : f = i(c = h, o);
  };
}
function T4(r, i, o) {
  var c, u = o + "", f;
  return function() {
    var h = this.getAttributeNS(r.space, r.local);
    return h === u ? null : h === c ? f : f = i(c = h, o);
  };
}
function R4(r, i, o) {
  var c, u, f;
  return function() {
    var h, p = o(this), g;
    return p == null ? void this.removeAttribute(r) : (h = this.getAttribute(r), g = p + "", h === g ? null : h === c && g === u ? f : (u = g, f = i(c = h, p)));
  };
}
function I4(r, i, o) {
  var c, u, f;
  return function() {
    var h, p = o(this), g;
    return p == null ? void this.removeAttributeNS(r.space, r.local) : (h = this.getAttributeNS(r.space, r.local), g = p + "", h === g ? null : h === c && g === u ? f : (u = g, f = i(c = h, p)));
  };
}
function L4(r, i) {
  var o = Fl(r), c = o === "transform" ? y4 : Vf;
  return this.attrTween(r, typeof i == "function" ? (o.local ? I4 : R4)(o, c, hc(this, "attr." + r, i)) : i == null ? (o.local ? O4 : P4)(o) : (o.local ? T4 : z4)(o, c, i));
}
function F4(r, i) {
  return function(o) {
    this.setAttribute(r, i.call(this, o));
  };
}
function $4(r, i) {
  return function(o) {
    this.setAttributeNS(r.space, r.local, i.call(this, o));
  };
}
function G4(r, i) {
  var o, c;
  function u() {
    var f = i.apply(this, arguments);
    return f !== c && (o = (c = f) && $4(r, f)), o;
  }
  return u._value = i, u;
}
function K4(r, i) {
  var o, c;
  function u() {
    var f = i.apply(this, arguments);
    return f !== c && (o = (c = f) && F4(r, f)), o;
  }
  return u._value = i, u;
}
function Q4(r, i) {
  var o = "attr." + r;
  if (arguments.length < 2) return (o = this.tween(o)) && o._value;
  if (i == null) return this.tween(o, null);
  if (typeof i != "function") throw new Error();
  var c = Fl(r);
  return this.tween(o, (c.local ? G4 : K4)(c, i));
}
function j4(r, i) {
  return function() {
    fc(this, r).delay = +i.apply(this, arguments);
  };
}
function U4(r, i) {
  return i = +i, function() {
    fc(this, r).delay = i;
  };
}
function H4(r) {
  var i = this._id;
  return arguments.length ? this.each((typeof r == "function" ? j4 : U4)(i, r)) : Sn(this.node(), i).delay;
}
function W4(r, i) {
  return function() {
    Vn(this, r).duration = +i.apply(this, arguments);
  };
}
function X4(r, i) {
  return i = +i, function() {
    Vn(this, r).duration = i;
  };
}
function Y4(r) {
  var i = this._id;
  return arguments.length ? this.each((typeof r == "function" ? W4 : X4)(i, r)) : Sn(this.node(), i).duration;
}
function q4(r, i) {
  if (typeof i != "function") throw new Error();
  return function() {
    Vn(this, r).ease = i;
  };
}
function Z4(r) {
  var i = this._id;
  return arguments.length ? this.each(q4(i, r)) : Sn(this.node(), i).ease;
}
function b4(r, i) {
  return function() {
    var o = i.apply(this, arguments);
    if (typeof o != "function") throw new Error();
    Vn(this, r).ease = o;
  };
}
function J4(r) {
  if (typeof r != "function") throw new Error();
  return this.each(b4(this._id, r));
}
function em(r) {
  typeof r != "function" && (r = ff(r));
  for (var i = this._groups, o = i.length, c = new Array(o), u = 0; u < o; ++u)
    for (var f = i[u], h = f.length, p = c[u] = [], g, m = 0; m < h; ++m)
      (g = f[m]) && r.call(g, g.__data__, m, f) && p.push(g);
  return new Kn(c, this._parents, this._name, this._id);
}
function nm(r) {
  if (r._id !== this._id) throw new Error();
  for (var i = this._groups, o = r._groups, c = i.length, u = o.length, f = Math.min(c, u), h = new Array(c), p = 0; p < f; ++p)
    for (var g = i[p], m = o[p], v = g.length, k = h[p] = new Array(v), w, C = 0; C < v; ++C)
      (w = g[C] || m[C]) && (k[C] = w);
  for (; p < c; ++p)
    h[p] = i[p];
  return new Kn(h, this._parents, this._name, this._id);
}
function tm(r) {
  return (r + "").trim().split(/^|\s+/).every(function(i) {
    var o = i.indexOf(".");
    return o >= 0 && (i = i.slice(0, o)), !i || i === "start";
  });
}
function rm(r, i, o) {
  var c, u, f = tm(i) ? fc : Vn;
  return function() {
    var h = f(this, r), p = h.on;
    p !== c && (u = (c = p).copy()).on(i, o), h.on = u;
  };
}
function im(r, i) {
  var o = this._id;
  return arguments.length < 2 ? Sn(this.node(), o).on.on(r) : this.each(rm(o, r, i));
}
function lm(r) {
  return function() {
    var i = this.parentNode;
    for (var o in this.__transition) if (+o !== r) return;
    i && i.removeChild(this);
  };
}
function om() {
  return this.on("end.remove", lm(this._id));
}
function am(r) {
  var i = this._name, o = this._id;
  typeof r != "function" && (r = oc(r));
  for (var c = this._groups, u = c.length, f = new Array(u), h = 0; h < u; ++h)
    for (var p = c[h], g = p.length, m = f[h] = new Array(g), v, k, w = 0; w < g; ++w)
      (v = p[w]) && (k = r.call(v, v.__data__, w, p)) && ("__data__" in v && (k.__data__ = v.__data__), m[w] = k, Gl(m[w], i, o, w, m, Sn(v, o)));
  return new Kn(f, this._parents, i, o);
}
function cm(r) {
  var i = this._name, o = this._id;
  typeof r != "function" && (r = df(r));
  for (var c = this._groups, u = c.length, f = [], h = [], p = 0; p < u; ++p)
    for (var g = c[p], m = g.length, v, k = 0; k < m; ++k)
      if (v = g[k]) {
        for (var w = r.call(v, v.__data__, k, g), C, $ = Sn(v, o), L = 0, z = w.length; L < z; ++L)
          (C = w[L]) && Gl(C, i, o, L, w, $);
        f.push(w), h.push(v);
      }
  return new Kn(f, h, i, o);
}
var sm = ti.prototype.constructor;
function um() {
  return new sm(this._groups, this._parents);
}
function dm(r, i) {
  var o, c, u;
  return function() {
    var f = rr(this, r), h = (this.style.removeProperty(r), rr(this, r));
    return f === h ? null : f === o && h === c ? u : u = i(o = f, c = h);
  };
}
function Pf(r) {
  return function() {
    this.style.removeProperty(r);
  };
}
function fm(r, i, o) {
  var c, u = o + "", f;
  return function() {
    var h = rr(this, r);
    return h === u ? null : h === c ? f : f = i(c = h, o);
  };
}
function hm(r, i, o) {
  var c, u, f;
  return function() {
    var h = rr(this, r), p = o(this), g = p + "";
    return p == null && (g = p = (this.style.removeProperty(r), rr(this, r))), h === g ? null : h === c && g === u ? f : (u = g, f = i(c = h, p));
  };
}
function pm(r, i) {
  var o, c, u, f = "style." + i, h = "end." + f, p;
  return function() {
    var g = Vn(this, r), m = g.on, v = g.value[f] == null ? p || (p = Pf(i)) : void 0;
    (m !== o || u !== v) && (c = (o = m).copy()).on(h, u = v), g.on = c;
  };
}
function gm(r, i, o) {
  var c = (r += "") == "transform" ? v4 : Vf;
  return i == null ? this.styleTween(r, dm(r, c)).on("end.style." + r, Pf(r)) : typeof i == "function" ? this.styleTween(r, hm(r, c, hc(this, "style." + r, i))).each(pm(this._id, r)) : this.styleTween(r, fm(r, c, i), o).on("end.style." + r, null);
}
function mm(r, i, o) {
  return function(c) {
    this.style.setProperty(r, i.call(this, c), o);
  };
}
function Nm(r, i, o) {
  var c, u;
  function f() {
    var h = i.apply(this, arguments);
    return h !== u && (c = (u = h) && mm(r, h, o)), c;
  }
  return f._value = i, f;
}
function vm(r, i, o) {
  var c = "style." + (r += "");
  if (arguments.length < 2) return (c = this.tween(c)) && c._value;
  if (i == null) return this.tween(c, null);
  if (typeof i != "function") throw new Error();
  return this.tween(c, Nm(r, i, o ?? ""));
}
function ym(r) {
  return function() {
    this.textContent = r;
  };
}
function xm(r) {
  return function() {
    var i = r(this);
    this.textContent = i ?? "";
  };
}
function wm(r) {
  return this.tween("text", typeof r == "function" ? xm(hc(this, "text", r)) : ym(r == null ? "" : r + ""));
}
function Sm(r) {
  return function(i) {
    this.textContent = r.call(this, i);
  };
}
function km(r) {
  var i, o;
  function c() {
    var u = r.apply(this, arguments);
    return u !== o && (i = (o = u) && Sm(u)), i;
  }
  return c._value = r, c;
}
function _m(r) {
  var i = "text";
  if (arguments.length < 1) return (i = this.tween(i)) && i._value;
  if (r == null) return this.tween(i, null);
  if (typeof r != "function") throw new Error();
  return this.tween(i, km(r));
}
function Dm() {
  for (var r = this._name, i = this._id, o = Of(), c = this._groups, u = c.length, f = 0; f < u; ++f)
    for (var h = c[f], p = h.length, g, m = 0; m < p; ++m)
      if (g = h[m]) {
        var v = Sn(g, i);
        Gl(g, r, o, m, h, {
          time: v.time + v.delay + v.duration,
          delay: 0,
          duration: v.duration,
          ease: v.ease
        });
      }
  return new Kn(c, this._parents, r, o);
}
function Bm() {
  var r, i, o = this, c = o._id, u = o.size();
  return new Promise(function(f, h) {
    var p = { value: h }, g = { value: function() {
      --u === 0 && f();
    } };
    o.each(function() {
      var m = Vn(this, c), v = m.on;
      v !== r && (i = (r = v).copy(), i._.cancel.push(p), i._.interrupt.push(p), i._.end.push(g)), m.on = i;
    }), u === 0 && f();
  });
}
var Cm = 0;
function Kn(r, i, o, c) {
  this._groups = r, this._parents = i, this._name = o, this._id = c;
}
function Of() {
  return ++Cm;
}
var $n = ti.prototype;
Kn.prototype = {
  constructor: Kn,
  select: am,
  selectAll: cm,
  selectChild: $n.selectChild,
  selectChildren: $n.selectChildren,
  filter: em,
  merge: nm,
  selection: um,
  transition: Dm,
  call: $n.call,
  nodes: $n.nodes,
  node: $n.node,
  size: $n.size,
  empty: $n.empty,
  each: $n.each,
  on: im,
  attr: L4,
  attrTween: Q4,
  style: gm,
  styleTween: vm,
  text: wm,
  textTween: _m,
  remove: om,
  tween: V4,
  delay: H4,
  duration: Y4,
  ease: Z4,
  easeVarying: J4,
  end: Bm,
  [Symbol.iterator]: $n[Symbol.iterator]
};
function Em(r) {
  return ((r *= 2) <= 1 ? r * r * r : (r -= 2) * r * r + 2) / 2;
}
var Am = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Em
};
function Mm(r, i) {
  for (var o; !(o = r.__transition) || !(o = o[i]); )
    if (!(r = r.parentNode))
      throw new Error(`transition ${i} not found`);
  return o;
}
function Vm(r) {
  var i, o;
  r instanceof Kn ? (i = r._id, r = r._name) : (i = Of(), (o = Am).time = dc(), r = r == null ? null : r + "");
  for (var c = this._groups, u = c.length, f = 0; f < u; ++f)
    for (var h = c[f], p = h.length, g, m = 0; m < p; ++m)
      (g = h[m]) && Gl(g, r, i, m, h, o || Mm(g, i));
  return new Kn(c, this._parents, r, i);
}
ti.prototype.interrupt = E4;
ti.prototype.transition = Vm;
const tc = Math.PI, rc = 2 * tc, Dt = 1e-6, Pm = rc - Dt;
function zf(r) {
  this._ += r[0];
  for (let i = 1, o = r.length; i < o; ++i)
    this._ += arguments[i] + r[i];
}
function Om(r) {
  let i = Math.floor(r);
  if (!(i >= 0)) throw new Error(`invalid digits: ${r}`);
  if (i > 15) return zf;
  const o = 10 ** i;
  return function(c) {
    this._ += c[0];
    for (let u = 1, f = c.length; u < f; ++u)
      this._ += Math.round(arguments[u] * o) / o + c[u];
  };
}
class zm {
  constructor(i) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = i == null ? zf : Om(i);
  }
  moveTo(i, o) {
    this._append`M${this._x0 = this._x1 = +i},${this._y0 = this._y1 = +o}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(i, o) {
    this._append`L${this._x1 = +i},${this._y1 = +o}`;
  }
  quadraticCurveTo(i, o, c, u) {
    this._append`Q${+i},${+o},${this._x1 = +c},${this._y1 = +u}`;
  }
  bezierCurveTo(i, o, c, u, f, h) {
    this._append`C${+i},${+o},${+c},${+u},${this._x1 = +f},${this._y1 = +h}`;
  }
  arcTo(i, o, c, u, f) {
    if (i = +i, o = +o, c = +c, u = +u, f = +f, f < 0) throw new Error(`negative radius: ${f}`);
    let h = this._x1, p = this._y1, g = c - i, m = u - o, v = h - i, k = p - o, w = v * v + k * k;
    if (this._x1 === null)
      this._append`M${this._x1 = i},${this._y1 = o}`;
    else if (w > Dt) if (!(Math.abs(k * g - m * v) > Dt) || !f)
      this._append`L${this._x1 = i},${this._y1 = o}`;
    else {
      let C = c - h, $ = u - p, L = g * g + m * m, z = C * C + $ * $, q = Math.sqrt(L), oe = Math.sqrt(w), ae = f * Math.tan((tc - Math.acos((L + w - z) / (2 * q * oe))) / 2), ne = ae / oe, ue = ae / q;
      Math.abs(ne - 1) > Dt && this._append`L${i + ne * v},${o + ne * k}`, this._append`A${f},${f},0,0,${+(k * C > v * $)},${this._x1 = i + ue * g},${this._y1 = o + ue * m}`;
    }
  }
  arc(i, o, c, u, f, h) {
    if (i = +i, o = +o, c = +c, h = !!h, c < 0) throw new Error(`negative radius: ${c}`);
    let p = c * Math.cos(u), g = c * Math.sin(u), m = i + p, v = o + g, k = 1 ^ h, w = h ? u - f : f - u;
    this._x1 === null ? this._append`M${m},${v}` : (Math.abs(this._x1 - m) > Dt || Math.abs(this._y1 - v) > Dt) && this._append`L${m},${v}`, c && (w < 0 && (w = w % rc + rc), w > Pm ? this._append`A${c},${c},0,1,${k},${i - p},${o - g}A${c},${c},0,1,${k},${this._x1 = m},${this._y1 = v}` : w > Dt && this._append`A${c},${c},0,${+(w >= tc)},${k},${this._x1 = i + c * Math.cos(f)},${this._y1 = o + c * Math.sin(f)}`);
  }
  rect(i, o, c, u) {
    this._append`M${this._x0 = this._x1 = +i},${this._y0 = this._y1 = +o}h${c = +c}v${+u}h${-c}Z`;
  }
  toString() {
    return this._;
  }
}
function Tm(r) {
  return Math.abs(r = Math.round(r)) >= 1e21 ? r.toLocaleString("en").replace(/,/g, "") : r.toString(10);
}
function zl(r, i) {
  if (!isFinite(r) || r === 0) return null;
  var o = (r = i ? r.toExponential(i - 1) : r.toExponential()).indexOf("e"), c = r.slice(0, o);
  return [
    c.length > 1 ? c[0] + c.slice(2) : c,
    +r.slice(o + 1)
  ];
}
function lr(r) {
  return r = zl(Math.abs(r)), r ? r[1] : NaN;
}
function Rm(r, i) {
  return function(o, c) {
    for (var u = o.length, f = [], h = 0, p = r[0], g = 0; u > 0 && p > 0 && (g + p + 1 > c && (p = Math.max(1, c - g)), f.push(o.substring(u -= p, u + p)), !((g += p + 1) > c)); )
      p = r[h = (h + 1) % r.length];
    return f.reverse().join(i);
  };
}
function Im(r) {
  return function(i) {
    return i.replace(/[0-9]/g, function(o) {
      return r[+o];
    });
  };
}
var Lm = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ei(r) {
  if (!(i = Lm.exec(r))) throw new Error("invalid format: " + r);
  var i;
  return new pc({
    fill: i[1],
    align: i[2],
    sign: i[3],
    symbol: i[4],
    zero: i[5],
    width: i[6],
    comma: i[7],
    precision: i[8] && i[8].slice(1),
    trim: i[9],
    type: i[10]
  });
}
ei.prototype = pc.prototype;
function pc(r) {
  this.fill = r.fill === void 0 ? " " : r.fill + "", this.align = r.align === void 0 ? ">" : r.align + "", this.sign = r.sign === void 0 ? "-" : r.sign + "", this.symbol = r.symbol === void 0 ? "" : r.symbol + "", this.zero = !!r.zero, this.width = r.width === void 0 ? void 0 : +r.width, this.comma = !!r.comma, this.precision = r.precision === void 0 ? void 0 : +r.precision, this.trim = !!r.trim, this.type = r.type === void 0 ? "" : r.type + "";
}
pc.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Fm(r) {
  e: for (var i = r.length, o = 1, c = -1, u; o < i; ++o)
    switch (r[o]) {
      case ".":
        c = u = o;
        break;
      case "0":
        c === 0 && (c = o), u = o;
        break;
      default:
        if (!+r[o]) break e;
        c > 0 && (c = 0);
        break;
    }
  return c > 0 ? r.slice(0, c) + r.slice(u + 1) : r;
}
var Tl;
function $m(r, i) {
  var o = zl(r, i);
  if (!o) return Tl = void 0, r.toPrecision(i);
  var c = o[0], u = o[1], f = u - (Tl = Math.max(-8, Math.min(8, Math.floor(u / 3))) * 3) + 1, h = c.length;
  return f === h ? c : f > h ? c + new Array(f - h + 1).join("0") : f > 0 ? c.slice(0, f) + "." + c.slice(f) : "0." + new Array(1 - f).join("0") + zl(r, Math.max(0, i + f - 1))[0];
}
function $d(r, i) {
  var o = zl(r, i);
  if (!o) return r + "";
  var c = o[0], u = o[1];
  return u < 0 ? "0." + new Array(-u).join("0") + c : c.length > u + 1 ? c.slice(0, u + 1) + "." + c.slice(u + 1) : c + new Array(u - c.length + 2).join("0");
}
const Gd = {
  "%": (r, i) => (r * 100).toFixed(i),
  b: (r) => Math.round(r).toString(2),
  c: (r) => r + "",
  d: Tm,
  e: (r, i) => r.toExponential(i),
  f: (r, i) => r.toFixed(i),
  g: (r, i) => r.toPrecision(i),
  o: (r) => Math.round(r).toString(8),
  p: (r, i) => $d(r * 100, i),
  r: $d,
  s: $m,
  X: (r) => Math.round(r).toString(16).toUpperCase(),
  x: (r) => Math.round(r).toString(16)
};
function Kd(r) {
  return r;
}
var Qd = Array.prototype.map, jd = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Gm(r) {
  var i = r.grouping === void 0 || r.thousands === void 0 ? Kd : Rm(Qd.call(r.grouping, Number), r.thousands + ""), o = r.currency === void 0 ? "" : r.currency[0] + "", c = r.currency === void 0 ? "" : r.currency[1] + "", u = r.decimal === void 0 ? "." : r.decimal + "", f = r.numerals === void 0 ? Kd : Im(Qd.call(r.numerals, String)), h = r.percent === void 0 ? "%" : r.percent + "", p = r.minus === void 0 ? "−" : r.minus + "", g = r.nan === void 0 ? "NaN" : r.nan + "";
  function m(k, w) {
    k = ei(k);
    var C = k.fill, $ = k.align, L = k.sign, z = k.symbol, q = k.zero, oe = k.width, ae = k.comma, ne = k.precision, ue = k.trim, ie = k.type;
    ie === "n" ? (ae = !0, ie = "g") : Gd[ie] || (ne === void 0 && (ne = 12), ue = !0, ie = "g"), (q || C === "0" && $ === "=") && (q = !0, C = "0", $ = "=");
    var T = (w && w.prefix !== void 0 ? w.prefix : "") + (z === "$" ? o : z === "#" && /[boxX]/.test(ie) ? "0" + ie.toLowerCase() : ""), b = (z === "$" ? c : /[%p]/.test(ie) ? h : "") + (w && w.suffix !== void 0 ? w.suffix : ""), V = Gd[ie], j = /[defgprs%]/.test(ie);
    ne = ne === void 0 ? 6 : /[gprs]/.test(ie) ? Math.max(1, Math.min(21, ne)) : Math.max(0, Math.min(20, ne));
    function Z(R) {
      var F = T, Q = b, ye, De, fe;
      if (ie === "c")
        Q = V(R) + Q, R = "";
      else {
        R = +R;
        var I = R < 0 || 1 / R < 0;
        if (R = isNaN(R) ? g : V(Math.abs(R), ne), ue && (R = Fm(R)), I && +R == 0 && L !== "+" && (I = !1), F = (I ? L === "(" ? L : p : L === "-" || L === "(" ? "" : L) + F, Q = (ie === "s" && !isNaN(R) && Tl !== void 0 ? jd[8 + Tl / 3] : "") + Q + (I && L === "(" ? ")" : ""), j) {
          for (ye = -1, De = R.length; ++ye < De; )
            if (fe = R.charCodeAt(ye), 48 > fe || fe > 57) {
              Q = (fe === 46 ? u + R.slice(ye + 1) : R.slice(ye)) + Q, R = R.slice(0, ye);
              break;
            }
        }
      }
      ae && !q && (R = i(R, 1 / 0));
      var X = F.length + R.length + Q.length, G = X < oe ? new Array(oe - X + 1).join(C) : "";
      switch (ae && q && (R = i(G + R, G.length ? oe - Q.length : 1 / 0), G = ""), $) {
        case "<":
          R = F + R + Q + G;
          break;
        case "=":
          R = F + G + R + Q;
          break;
        case "^":
          R = G.slice(0, X = G.length >> 1) + F + R + Q + G.slice(X);
          break;
        default:
          R = G + F + R + Q;
          break;
      }
      return f(R);
    }
    return Z.toString = function() {
      return k + "";
    }, Z;
  }
  function v(k, w) {
    var C = Math.max(-8, Math.min(8, Math.floor(lr(w) / 3))) * 3, $ = Math.pow(10, -C), L = m((k = ei(k), k.type = "f", k), { suffix: jd[8 + C / 3] });
    return function(z) {
      return L($ * z);
    };
  }
  return {
    format: m,
    formatPrefix: v
  };
}
var Nl, gc, Tf;
Km({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Km(r) {
  return Nl = Gm(r), gc = Nl.format, Tf = Nl.formatPrefix, Nl;
}
function Qm(r) {
  return Math.max(0, -lr(Math.abs(r)));
}
function jm(r, i) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(lr(i) / 3))) * 3 - lr(Math.abs(r)));
}
function Um(r, i) {
  return r = Math.abs(r), i = Math.abs(i) - r, Math.max(0, lr(i) - lr(r)) + 1;
}
function Hm(r) {
  var i = 0, o = r.children, c = o && o.length;
  if (!c) i = 1;
  else for (; --c >= 0; ) i += o[c].value;
  r.value = i;
}
function Wm() {
  return this.eachAfter(Hm);
}
function Xm(r, i) {
  let o = -1;
  for (const c of this)
    r.call(i, c, ++o, this);
  return this;
}
function Ym(r, i) {
  for (var o = this, c = [o], u, f, h = -1; o = c.pop(); )
    if (r.call(i, o, ++h, this), u = o.children)
      for (f = u.length - 1; f >= 0; --f)
        c.push(u[f]);
  return this;
}
function qm(r, i) {
  for (var o = this, c = [o], u = [], f, h, p, g = -1; o = c.pop(); )
    if (u.push(o), f = o.children)
      for (h = 0, p = f.length; h < p; ++h)
        c.push(f[h]);
  for (; o = u.pop(); )
    r.call(i, o, ++g, this);
  return this;
}
function Zm(r, i) {
  let o = -1;
  for (const c of this)
    if (r.call(i, c, ++o, this))
      return c;
}
function bm(r) {
  return this.eachAfter(function(i) {
    for (var o = +r(i.data) || 0, c = i.children, u = c && c.length; --u >= 0; ) o += c[u].value;
    i.value = o;
  });
}
function Jm(r) {
  return this.eachBefore(function(i) {
    i.children && i.children.sort(r);
  });
}
function e1(r) {
  for (var i = this, o = n1(i, r), c = [i]; i !== o; )
    i = i.parent, c.push(i);
  for (var u = c.length; r !== o; )
    c.splice(u, 0, r), r = r.parent;
  return c;
}
function n1(r, i) {
  if (r === i) return r;
  var o = r.ancestors(), c = i.ancestors(), u = null;
  for (r = o.pop(), i = c.pop(); r === i; )
    u = r, r = o.pop(), i = c.pop();
  return u;
}
function t1() {
  for (var r = this, i = [r]; r = r.parent; )
    i.push(r);
  return i;
}
function r1() {
  return Array.from(this);
}
function i1() {
  var r = [];
  return this.eachBefore(function(i) {
    i.children || r.push(i);
  }), r;
}
function l1() {
  var r = this, i = [];
  return r.each(function(o) {
    o !== r && i.push({ source: o.parent, target: o });
  }), i;
}
function* o1() {
  var r = this, i, o = [r], c, u, f;
  do
    for (i = o.reverse(), o = []; r = i.pop(); )
      if (yield r, c = r.children)
        for (u = 0, f = c.length; u < f; ++u)
          o.push(c[u]);
  while (o.length);
}
function mc(r, i) {
  r instanceof Map ? (r = [void 0, r], i === void 0 && (i = s1)) : i === void 0 && (i = c1);
  for (var o = new Rl(r), c, u = [o], f, h, p, g; c = u.pop(); )
    if ((h = i(c.data)) && (g = (h = Array.from(h)).length))
      for (c.children = h, p = g - 1; p >= 0; --p)
        u.push(f = h[p] = new Rl(h[p])), f.parent = c, f.depth = c.depth + 1;
  return o.eachBefore(d1);
}
function a1() {
  return mc(this).eachBefore(u1);
}
function c1(r) {
  return r.children;
}
function s1(r) {
  return Array.isArray(r) ? r[1] : null;
}
function u1(r) {
  r.data.value !== void 0 && (r.value = r.data.value), r.data = r.data.data;
}
function d1(r) {
  var i = 0;
  do
    r.height = i;
  while ((r = r.parent) && r.height < ++i);
}
function Rl(r) {
  this.data = r, this.depth = this.height = 0, this.parent = null;
}
Rl.prototype = mc.prototype = {
  constructor: Rl,
  count: Wm,
  each: Xm,
  eachAfter: qm,
  eachBefore: Ym,
  find: Zm,
  sum: bm,
  sort: Jm,
  path: e1,
  ancestors: t1,
  descendants: r1,
  leaves: i1,
  links: l1,
  copy: a1,
  [Symbol.iterator]: o1
};
function f1(r) {
  r.x0 = Math.round(r.x0), r.y0 = Math.round(r.y0), r.x1 = Math.round(r.x1), r.y1 = Math.round(r.y1);
}
function h1(r, i, o, c, u) {
  for (var f = r.children, h, p = -1, g = f.length, m = r.value && (c - i) / r.value; ++p < g; )
    h = f[p], h.y0 = o, h.y1 = u, h.x0 = i, h.x1 = i += h.value * m;
}
function p1() {
  var r = 1, i = 1, o = 0, c = !1;
  function u(h) {
    var p = h.height + 1;
    return h.x0 = h.y0 = o, h.x1 = r, h.y1 = i / p, h.eachBefore(f(i, p)), c && h.eachBefore(f1), h;
  }
  function f(h, p) {
    return function(g) {
      g.children && h1(g, g.x0, h * (g.depth + 1) / p, g.x1, h * (g.depth + 2) / p);
      var m = g.x0, v = g.y0, k = g.x1 - o, w = g.y1 - o;
      k < m && (m = k = (m + k) / 2), w < v && (v = w = (v + w) / 2), g.x0 = m, g.y0 = v, g.x1 = k, g.y1 = w;
    };
  }
  return u.round = function(h) {
    return arguments.length ? (c = !!h, u) : c;
  }, u.size = function(h) {
    return arguments.length ? (r = +h[0], i = +h[1], u) : [r, i];
  }, u.padding = function(h) {
    return arguments.length ? (o = +h, u) : o;
  }, u;
}
function Kl(r, i) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(r);
      break;
    default:
      this.range(i).domain(r);
      break;
  }
  return this;
}
const Ud = Symbol("implicit");
function Rf() {
  var r = new kd(), i = [], o = [], c = Ud;
  function u(f) {
    let h = r.get(f);
    if (h === void 0) {
      if (c !== Ud) return c;
      r.set(f, h = i.push(f) - 1);
    }
    return o[h % o.length];
  }
  return u.domain = function(f) {
    if (!arguments.length) return i.slice();
    i = [], r = new kd();
    for (const h of f)
      r.has(h) || r.set(h, i.push(h) - 1);
    return u;
  }, u.range = function(f) {
    return arguments.length ? (o = Array.from(f), u) : o.slice();
  }, u.unknown = function(f) {
    return arguments.length ? (c = f, u) : c;
  }, u.copy = function() {
    return Rf(i, o).unknown(c);
  }, Kl.apply(u, arguments), u;
}
function g1(r) {
  return function() {
    return r;
  };
}
function m1(r) {
  return +r;
}
var Hd = [0, 1];
function An(r) {
  return r;
}
function ic(r, i) {
  return (i -= r = +r) ? function(o) {
    return (o - r) / i;
  } : g1(isNaN(i) ? NaN : 0.5);
}
function N1(r, i) {
  var o;
  return r > i && (o = r, r = i, i = o), function(c) {
    return Math.max(r, Math.min(i, c));
  };
}
function v1(r, i, o) {
  var c = r[0], u = r[1], f = i[0], h = i[1];
  return u < c ? (c = ic(u, c), f = o(h, f)) : (c = ic(c, u), f = o(f, h)), function(p) {
    return f(c(p));
  };
}
function y1(r, i, o) {
  var c = Math.min(r.length, i.length) - 1, u = new Array(c), f = new Array(c), h = -1;
  for (r[c] < r[0] && (r = r.slice().reverse(), i = i.slice().reverse()); ++h < c; )
    u[h] = ic(r[h], r[h + 1]), f[h] = o(i[h], i[h + 1]);
  return function(p) {
    var g = i0(r, p, 1, c) - 1;
    return f[g](u[g](p));
  };
}
function Nc(r, i) {
  return i.domain(r.domain()).range(r.range()).interpolate(r.interpolate()).clamp(r.clamp()).unknown(r.unknown());
}
function vc() {
  var r = Hd, i = Hd, o = uc, c, u, f, h = An, p, g, m;
  function v() {
    var w = Math.min(r.length, i.length);
    return h !== An && (h = N1(r[0], r[w - 1])), p = w > 2 ? y1 : v1, g = m = null, k;
  }
  function k(w) {
    return w == null || isNaN(w = +w) ? f : (g || (g = p(r.map(c), i, o)))(c(h(w)));
  }
  return k.invert = function(w) {
    return h(u((m || (m = p(i, r.map(c), yn)))(w)));
  }, k.domain = function(w) {
    return arguments.length ? (r = Array.from(w, m1), v()) : r.slice();
  }, k.range = function(w) {
    return arguments.length ? (i = Array.from(w), v()) : i.slice();
  }, k.rangeRound = function(w) {
    return i = Array.from(w), o = g4, v();
  }, k.clamp = function(w) {
    return arguments.length ? (h = w ? !0 : An, v()) : h !== An;
  }, k.interpolate = function(w) {
    return arguments.length ? (o = w, v()) : o;
  }, k.unknown = function(w) {
    return arguments.length ? (f = w, k) : f;
  }, function(w, C) {
    return c = w, u = C, v();
  };
}
function x1() {
  return vc()(An, An);
}
function w1(r, i, o, c) {
  var u = d0(r, i, o), f;
  switch (c = ei(c ?? ",f"), c.type) {
    case "s": {
      var h = Math.max(Math.abs(r), Math.abs(i));
      return c.precision == null && !isNaN(f = jm(u, h)) && (c.precision = f), Tf(c, h);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      c.precision == null && !isNaN(f = Um(u, Math.max(Math.abs(r), Math.abs(i)))) && (c.precision = f - (c.type === "e"));
      break;
    }
    case "f":
    case "%": {
      c.precision == null && !isNaN(f = Qm(u)) && (c.precision = f - (c.type === "%") * 2);
      break;
    }
  }
  return gc(c);
}
function If(r) {
  var i = r.domain;
  return r.ticks = function(o) {
    var c = i();
    return Wa(c[0], c[c.length - 1], o ?? 10);
  }, r.tickFormat = function(o, c) {
    var u = i();
    return w1(u[0], u[u.length - 1], o ?? 10, c);
  }, r.nice = function(o) {
    o == null && (o = 10);
    var c = i(), u = 0, f = c.length - 1, h = c[u], p = c[f], g, m, v = 10;
    for (p < h && (m = h, h = p, p = m, m = u, u = f, f = m); v-- > 0; ) {
      if (m = Xa(h, p, o), m === g)
        return c[u] = h, c[f] = p, i(c);
      if (m > 0)
        h = Math.floor(h / m) * m, p = Math.ceil(p / m) * m;
      else if (m < 0)
        h = Math.ceil(h * m) / m, p = Math.floor(p * m) / m;
      else
        break;
      g = m;
    }
    return r;
  }, r;
}
function Lf() {
  var r = x1();
  return r.copy = function() {
    return Nc(r, Lf());
  }, Kl.apply(r, arguments), If(r);
}
function S1(r, i) {
  r = r.slice();
  var o = 0, c = r.length - 1, u = r[o], f = r[c], h;
  return f < u && (h = o, o = c, c = h, h = u, u = f, f = h), r[o] = i.floor(u), r[c] = i.ceil(f), r;
}
function Wd(r) {
  return Math.log(r);
}
function Xd(r) {
  return Math.exp(r);
}
function k1(r) {
  return -Math.log(-r);
}
function _1(r) {
  return -Math.exp(-r);
}
function D1(r) {
  return isFinite(r) ? +("1e" + r) : r < 0 ? 0 : r;
}
function B1(r) {
  return r === 10 ? D1 : r === Math.E ? Math.exp : (i) => Math.pow(r, i);
}
function C1(r) {
  return r === Math.E ? Math.log : r === 10 && Math.log10 || r === 2 && Math.log2 || (r = Math.log(r), (i) => Math.log(i) / r);
}
function Yd(r) {
  return (i, o) => -r(-i, o);
}
function E1(r) {
  const i = r(Wd, Xd), o = i.domain;
  let c = 10, u, f;
  function h() {
    return u = C1(c), f = B1(c), o()[0] < 0 ? (u = Yd(u), f = Yd(f), r(k1, _1)) : r(Wd, Xd), i;
  }
  return i.base = function(p) {
    return arguments.length ? (c = +p, h()) : c;
  }, i.domain = function(p) {
    return arguments.length ? (o(p), h()) : o();
  }, i.ticks = (p) => {
    const g = o();
    let m = g[0], v = g[g.length - 1];
    const k = v < m;
    k && ([m, v] = [v, m]);
    let w = u(m), C = u(v), $, L;
    const z = p == null ? 10 : +p;
    let q = [];
    if (!(c % 1) && C - w < z) {
      if (w = Math.floor(w), C = Math.ceil(C), m > 0) {
        for (; w <= C; ++w)
          for ($ = 1; $ < c; ++$)
            if (L = w < 0 ? $ / f(-w) : $ * f(w), !(L < m)) {
              if (L > v) break;
              q.push(L);
            }
      } else for (; w <= C; ++w)
        for ($ = c - 1; $ >= 1; --$)
          if (L = w > 0 ? $ / f(-w) : $ * f(w), !(L < m)) {
            if (L > v) break;
            q.push(L);
          }
      q.length * 2 < z && (q = Wa(m, v, z));
    } else
      q = Wa(w, C, Math.min(C - w, z)).map(f);
    return k ? q.reverse() : q;
  }, i.tickFormat = (p, g) => {
    if (p == null && (p = 10), g == null && (g = c === 10 ? "s" : ","), typeof g != "function" && (!(c % 1) && (g = ei(g)).precision == null && (g.trim = !0), g = gc(g)), p === 1 / 0) return g;
    const m = Math.max(1, c * p / i.ticks().length);
    return (v) => {
      let k = v / f(Math.round(u(v)));
      return k * c < c - 0.5 && (k *= c), k <= m ? g(v) : "";
    };
  }, i.nice = () => o(S1(o(), {
    floor: (p) => f(Math.floor(u(p))),
    ceil: (p) => f(Math.ceil(u(p)))
  })), i;
}
function Ff() {
  const r = E1(vc()).domain([1, 10]);
  return r.copy = () => Nc(r, Ff()).base(r.base()), Kl.apply(r, arguments), r;
}
function qd(r) {
  return function(i) {
    return i < 0 ? -Math.pow(-i, r) : Math.pow(i, r);
  };
}
function A1(r) {
  return r < 0 ? -Math.sqrt(-r) : Math.sqrt(r);
}
function M1(r) {
  return r < 0 ? -r * r : r * r;
}
function V1(r) {
  var i = r(An, An), o = 1;
  function c() {
    return o === 1 ? r(An, An) : o === 0.5 ? r(A1, M1) : r(qd(o), qd(1 / o));
  }
  return i.exponent = function(u) {
    return arguments.length ? (o = +u, c()) : o;
  }, If(i);
}
function $f() {
  var r = V1(vc());
  return r.copy = function() {
    return Nc(r, $f()).exponent(r.exponent());
  }, Kl.apply(r, arguments), r;
}
function P1() {
  return $f.apply(null, arguments).exponent(0.5);
}
function Gf(r) {
  for (var i = r.length / 6 | 0, o = new Array(i), c = 0; c < i; ) o[c] = "#" + r.slice(c * 6, ++c * 6);
  return o;
}
const O1 = Gf("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), z1 = Gf("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function ct(r) {
  return function() {
    return r;
  };
}
const Zd = Math.abs, je = Math.atan2, kt = Math.cos, T1 = Math.max, ja = Math.min, En = Math.sin, nr = Math.sqrt, Je = 1e-12, ni = Math.PI, Il = ni / 2, R1 = 2 * ni;
function I1(r) {
  return r > 1 ? 0 : r < -1 ? ni : Math.acos(r);
}
function bd(r) {
  return r >= 1 ? Il : r <= -1 ? -Il : Math.asin(r);
}
function L1(r) {
  let i = 3;
  return r.digits = function(o) {
    if (!arguments.length) return i;
    if (o == null)
      i = null;
    else {
      const c = Math.floor(o);
      if (!(c >= 0)) throw new RangeError(`invalid digits: ${o}`);
      i = c;
    }
    return r;
  }, () => new zm(i);
}
function F1(r) {
  return r.innerRadius;
}
function $1(r) {
  return r.outerRadius;
}
function G1(r) {
  return r.startAngle;
}
function K1(r) {
  return r.endAngle;
}
function Q1(r) {
  return r && r.padAngle;
}
function j1(r, i, o, c, u, f, h, p) {
  var g = o - r, m = c - i, v = h - u, k = p - f, w = k * g - v * m;
  if (!(w * w < Je))
    return w = (v * (i - f) - k * (r - u)) / w, [r + w * g, i + w * m];
}
function vl(r, i, o, c, u, f, h) {
  var p = r - o, g = i - c, m = (h ? f : -f) / nr(p * p + g * g), v = m * g, k = -m * p, w = r + v, C = i + k, $ = o + v, L = c + k, z = (w + $) / 2, q = (C + L) / 2, oe = $ - w, ae = L - C, ne = oe * oe + ae * ae, ue = u - f, ie = w * L - $ * C, T = (ae < 0 ? -1 : 1) * nr(T1(0, ue * ue * ne - ie * ie)), b = (ie * ae - oe * T) / ne, V = (-ie * oe - ae * T) / ne, j = (ie * ae + oe * T) / ne, Z = (-ie * oe + ae * T) / ne, R = b - z, F = V - q, Q = j - z, ye = Z - q;
  return R * R + F * F > Q * Q + ye * ye && (b = j, V = Z), {
    cx: b,
    cy: V,
    x01: -v,
    y01: -k,
    x11: b * (u / ue - 1),
    y11: V * (u / ue - 1)
  };
}
function U1() {
  var r = F1, i = $1, o = ct(0), c = null, u = G1, f = K1, h = Q1, p = null, g = L1(m);
  function m() {
    var v, k, w = +r.apply(this, arguments), C = +i.apply(this, arguments), $ = u.apply(this, arguments) - Il, L = f.apply(this, arguments) - Il, z = Zd(L - $), q = L > $;
    if (p || (p = v = g()), C < w && (k = C, C = w, w = k), !(C > Je)) p.moveTo(0, 0);
    else if (z > R1 - Je)
      p.moveTo(C * kt($), C * En($)), p.arc(0, 0, C, $, L, !q), w > Je && (p.moveTo(w * kt(L), w * En(L)), p.arc(0, 0, w, L, $, q));
    else {
      var oe = $, ae = L, ne = $, ue = L, ie = z, T = z, b = h.apply(this, arguments) / 2, V = b > Je && (c ? +c.apply(this, arguments) : nr(w * w + C * C)), j = ja(Zd(C - w) / 2, +o.apply(this, arguments)), Z = j, R = j, F, Q;
      if (V > Je) {
        var ye = bd(V / w * En(b)), De = bd(V / C * En(b));
        (ie -= ye * 2) > Je ? (ye *= q ? 1 : -1, ne += ye, ue -= ye) : (ie = 0, ne = ue = ($ + L) / 2), (T -= De * 2) > Je ? (De *= q ? 1 : -1, oe += De, ae -= De) : (T = 0, oe = ae = ($ + L) / 2);
      }
      var fe = C * kt(oe), I = C * En(oe), X = w * kt(ue), G = w * En(ue);
      if (j > Je) {
        var S = C * kt(ae), E = C * En(ae), le = w * kt(ne), se = w * En(ne), ce;
        if (z < ni)
          if (ce = j1(fe, I, le, se, S, E, X, G)) {
            var he = fe - ce[0], Ne = I - ce[1], pe = S - ce[0], xe = E - ce[1], Fe = 1 / En(I1((he * pe + Ne * xe) / (nr(he * he + Ne * Ne) * nr(pe * pe + xe * xe))) / 2), st = nr(ce[0] * ce[0] + ce[1] * ce[1]);
            Z = ja(j, (w - st) / (Fe - 1)), R = ja(j, (C - st) / (Fe + 1));
          } else
            Z = R = 0;
      }
      T > Je ? R > Je ? (F = vl(le, se, fe, I, C, R, q), Q = vl(S, E, X, G, C, R, q), p.moveTo(F.cx + F.x01, F.cy + F.y01), R < j ? p.arc(F.cx, F.cy, R, je(F.y01, F.x01), je(Q.y01, Q.x01), !q) : (p.arc(F.cx, F.cy, R, je(F.y01, F.x01), je(F.y11, F.x11), !q), p.arc(0, 0, C, je(F.cy + F.y11, F.cx + F.x11), je(Q.cy + Q.y11, Q.cx + Q.x11), !q), p.arc(Q.cx, Q.cy, R, je(Q.y11, Q.x11), je(Q.y01, Q.x01), !q))) : (p.moveTo(fe, I), p.arc(0, 0, C, oe, ae, !q)) : p.moveTo(fe, I), !(w > Je) || !(ie > Je) ? p.lineTo(X, G) : Z > Je ? (F = vl(X, G, S, E, w, -Z, q), Q = vl(fe, I, le, se, w, -Z, q), p.lineTo(F.cx + F.x01, F.cy + F.y01), Z < j ? p.arc(F.cx, F.cy, Z, je(F.y01, F.x01), je(Q.y01, Q.x01), !q) : (p.arc(F.cx, F.cy, Z, je(F.y01, F.x01), je(F.y11, F.x11), !q), p.arc(0, 0, w, je(F.cy + F.y11, F.cx + F.x11), je(Q.cy + Q.y11, Q.cx + Q.x11), q), p.arc(Q.cx, Q.cy, Z, je(Q.y11, Q.x11), je(Q.y01, Q.x01), !q))) : p.arc(0, 0, w, ue, ne, q);
    }
    if (p.closePath(), v) return p = null, v + "" || null;
  }
  return m.centroid = function() {
    var v = (+r.apply(this, arguments) + +i.apply(this, arguments)) / 2, k = (+u.apply(this, arguments) + +f.apply(this, arguments)) / 2 - ni / 2;
    return [kt(k) * v, En(k) * v];
  }, m.innerRadius = function(v) {
    return arguments.length ? (r = typeof v == "function" ? v : ct(+v), m) : r;
  }, m.outerRadius = function(v) {
    return arguments.length ? (i = typeof v == "function" ? v : ct(+v), m) : i;
  }, m.cornerRadius = function(v) {
    return arguments.length ? (o = typeof v == "function" ? v : ct(+v), m) : o;
  }, m.padRadius = function(v) {
    return arguments.length ? (c = v == null ? null : typeof v == "function" ? v : ct(+v), m) : c;
  }, m.startAngle = function(v) {
    return arguments.length ? (u = typeof v == "function" ? v : ct(+v), m) : u;
  }, m.endAngle = function(v) {
    return arguments.length ? (f = typeof v == "function" ? v : ct(+v), m) : f;
  }, m.padAngle = function(v) {
    return arguments.length ? (h = typeof v == "function" ? v : ct(+v), m) : h;
  }, m.context = function(v) {
    return arguments.length ? (p = v ?? null, m) : p;
  }, m;
}
function qr(r, i, o) {
  this.k = r, this.x = i, this.y = o;
}
qr.prototype = {
  constructor: qr,
  scale: function(r) {
    return r === 1 ? this : new qr(this.k * r, this.x, this.y);
  },
  translate: function(r, i) {
    return r === 0 & i === 0 ? this : new qr(this.k, this.x + this.k * r, this.y + this.k * i);
  },
  apply: function(r) {
    return [r[0] * this.k + this.x, r[1] * this.k + this.y];
  },
  applyX: function(r) {
    return r * this.k + this.x;
  },
  applyY: function(r) {
    return r * this.k + this.y;
  },
  invert: function(r) {
    return [(r[0] - this.x) / this.k, (r[1] - this.y) / this.k];
  },
  invertX: function(r) {
    return (r - this.x) / this.k;
  },
  invertY: function(r) {
    return (r - this.y) / this.k;
  },
  rescaleX: function(r) {
    return r.copy().domain(r.range().map(this.invertX, this).map(r.invert, r));
  },
  rescaleY: function(r) {
    return r.copy().domain(r.range().map(this.invertY, this).map(r.invert, r));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
qr.prototype;
const Jd = 0.68, H1 = 0.6, Wr = 11, _l = 13, Kf = 14, W1 = 20, X1 = 2e-3, Y1 = Kf + _l * 1.6, Qf = (r) => r * 180 / Math.PI;
function q1(r, i, o) {
  const c = (i + o) / 2, u = c > Math.PI / 2 && c < 3 * Math.PI / 2, [f, h] = u ? [o, i] : [i, o], p = o - i > Math.PI ? 1 : 0, g = (m) => `${r * Math.sin(m)},${-r * Math.cos(m)}`;
  return `M${g(f)}A${r},${r} 0 ${p} ${u ? 0 : 1} ${g(h)}`;
}
function Z1(r, i) {
  const o = r > Math.PI;
  return `rotate(${Qf(r) - 90}) translate(${i},0)${o ? " rotate(180)" : ""}`;
}
function b1(r, i) {
  const o = r > Math.PI / 2 && r < 3 * Math.PI / 2, c = i * Math.sin(r), u = -i * Math.cos(r);
  return `translate(${c},${u}) rotate(${Qf(r) - (o ? 180 : 0)})`;
}
function J1(r) {
  const i = r.map((o) => o.want);
  for (let o = 0; o < 300; o++) {
    let c = !1;
    for (let f = 0; f + 1 < i.length; f++) {
      const h = r[f].half + r[f + 1].half, p = i[f + 1] - i[f];
      if (p < h) {
        const g = (h - p) / 2;
        i[f] -= g, i[f + 1] += g, c = !0;
      }
    }
    const u = i.length;
    if (u > 1) {
      const f = r[u - 1].half + r[0].half, h = i[0] + 2 * Math.PI - i[u - 1];
      if (h < f) {
        const p = (f - h) / 2;
        i[u - 1] -= p, i[0] += p, c = !0;
      }
    }
    for (let f = 0; f < i.length; f++) i[f] += (r[f].want - i[f]) * 0.02;
    if (!c) break;
  }
  return i;
}
function e3({
  nodes: r,
  width: i,
  labels: o,
  r: c,
  ringGap: u,
  colorOf: f,
  tintOf: h,
  nameOf: p,
  idPrefix: g
}) {
  const m = (T) => {
    const b = c(T.y0), V = c(Math.max(T.y0, T.y1 - u));
    return { r0: b, r1: V, rMid: (b + V) / 2 };
  }, v = o !== "san", k = o !== "names", w = k ? Wr * 1.8 : 0, C = r.filter((T) => p(T) && !T.ancestors().slice(1).some((b) => p(b) === p(T))), $ = v ? C.flatMap((T) => {
    const b = nf(p(T)), { r0: V, r1: j, rMid: Z } = m(T), F = 0.9 * (Z * (T.x1 - T.x0) - 2 * w) / (b.length * Jd), Q = Math.min(18, 0.5 * (j - V), F);
    return Q < i / 75 ? [] : [{ d: T, text: b, fontSize: Q, path: q1(Z, T.x0, T.x1) }];
  }) : [], L = new Set($.map((T) => T.d)), z = new Set($.map((T) => T.text)), q = k ? r.flatMap((T) => {
    const { r0: b, r1: V, rMid: j } = m(T), Z = j * (T.x1 - T.x0), R = V - b;
    if (Z < Wr * 1.15) return [];
    if (R < T.data.san.length * H1 * Wr + 6) return [];
    const F = L.has(T) ? T.x0 + Wr * 0.9 / j : (T.x0 + T.x1) / 2;
    return [{ d: T, a: F, rMid: j }];
  }) : [], oe = r.length ? r[0].ancestors().pop().value ?? 0 : 0, ae = new Set(z), ne = i / 2 + Kf, ue = v ? [...C].filter((T) => !L.has(T) && (T.value ?? 0) >= oe * X1).sort((T, b) => (b.value ?? 0) - (T.value ?? 0) || T.x0 - b.x0).flatMap((T) => {
    const b = nf(p(T));
    return ae.has(b) ? [] : (ae.add(b), [{ d: T, text: b }]);
  }).slice(0, W1).map(({ d: T, text: b }) => ({
    d: T,
    text: b,
    want: (T.x0 + T.x1) / 2,
    half: b.length * Jd * _l / 2 / ne + 0.012
  })).sort((T, b) => T.want - b.want) : [], ie = J1(ue);
  return /* @__PURE__ */ te.jsxs("g", { pointerEvents: "none", children: [
    $.map(({ d: T, text: b, fontSize: V, path: j }, Z) => {
      const R = `${g}-pname-${Z}`;
      return /* @__PURE__ */ te.jsxs("g", { children: [
        /* @__PURE__ */ te.jsx("path", { id: R, d: j, fill: "none" }),
        /* @__PURE__ */ te.jsx(
          "text",
          {
            fontSize: V,
            fontFamily: "'Avenir Next Condensed', 'Arial Narrow', sans-serif",
            fontWeight: 500,
            letterSpacing: "0.06em",
            fill: f(T).darker(0.55).toString(),
            opacity: 0.85,
            dominantBaseline: "central",
            textAnchor: "middle",
            children: /* @__PURE__ */ te.jsx("textPath", { href: `#${R}`, startOffset: "50%", children: b })
          }
        )
      ] }, R);
    }),
    q.map(({ d: T, a: b, rMid: V }) => /* @__PURE__ */ te.jsx(
      "text",
      {
        transform: Z1(b, V),
        fontSize: Wr,
        fontFamily: "'Gill Sans', 'Avenir Next', sans-serif",
        fill: "#f6f3ee",
        opacity: 0.85,
        textAnchor: "middle",
        dominantBaseline: "central",
        children: T.data.san
      },
      `san-${ef(T)}`
    )),
    ue.map(({ d: T, text: b }, V) => {
      const j = ie[V], { rMid: Z } = m(T), R = (T.x0 + T.x1) / 2, F = [Z * Math.sin(R), -Z * Math.cos(R)], Q = [(ne - 3) * Math.sin(j), -(ne - 3) * Math.cos(j)];
      return /* @__PURE__ */ te.jsxs("g", { children: [
        /* @__PURE__ */ te.jsx(
          "line",
          {
            x1: F[0],
            y1: F[1],
            x2: Q[0],
            y2: Q[1],
            stroke: "#888",
            strokeOpacity: 0.6,
            strokeWidth: 0.6
          }
        ),
        /* @__PURE__ */ te.jsx("circle", { cx: F[0], cy: F[1], r: 1.6, fill: h(T) }),
        /* @__PURE__ */ te.jsx(
          "text",
          {
            transform: b1(j, ne + _l * 0.6),
            fontSize: _l,
            fontFamily: "'Avenir Next Condensed', 'Arial Narrow', sans-serif",
            letterSpacing: "0.04em",
            fill: h(T),
            opacity: 0.9,
            textAnchor: "middle",
            dominantBaseline: "central",
            children: b
          }
        )
      ] }, `callout-${ef(T)}`);
    })
  ] });
}
function ef(r) {
  return r.ancestors().map((i) => i.data.san).join(" ");
}
function nf(r) {
  let i = r.replace("Opening", "").trim();
  const o = i.indexOf(": ");
  return o >= 0 && (i = i.slice(o + 2)), i.toUpperCase();
}
const n3 = "B00 - King's Pawn", t3 = "A40 - Queen's Pawn Game", r3 = "A10 - English Opening", i3 = "A04 - Zukertort Opening", l3 = "A01 - Nimzo-Larsen Attack", o3 = "A02 - Bird Opening", a3 = "A00 - Van Geet Opening", c3 = "A00 - Polish Opening", s3 = "A00 - Hungarian Opening", u3 = {
  e4: n3,
  "e4 c6": "B10 - Caro-Kann Defense",
  "e4 c6 d4": "B12 - Caro-Kann Defense",
  "e4 c6 d4 d5": "B12 - Caro-Kann Defense",
  "e4 c6 d4 d5 Nc3": "B15 - Caro-Kann Defense",
  "e4 c6 d4 d5 Nc3 dxe4 Nxe4": "B15 - Caro-Kann Defense: Main Line",
  "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nd7": "B17 - Caro-Kann Defense: Karpov Variation",
  "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5": "B18 - Caro-Kann Defense: Classical Variation",
  "e4 c6 d4 d5 exd5": "B13 - Caro-Kann Defense: Exchange Variation",
  "e4 c6 d4 d5 exd5 cxd5 c4": "B13 - Caro-Kann Defense: Panov Attack",
  "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3": "B13 - Caro-Kann Defense: Panov Attack",
  "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 e6": "B14 - Caro-Kann Defense: Panov Attack",
  "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 Nc6": "B13 - Caro-Kann Defense: Panov Attack, Modern Defense",
  "e4 c6 d4 d5 e5": "B12 - Caro-Kann Defense: Advance Variation",
  "e4 c6 d4 d5 e5 Bf5 Nc3": "B12 - Caro-Kann Defense: Advance Variation, Van der Wiel Attack",
  "e4 c6 d4 d5 e5 Bf5 Nf3": "B12 - Caro-Kann Defense: Advance Variation, Short Variation",
  "e4 c6 d4 d5 Nd2": "B12 - Caro-Kann Defense: Modern Variation",
  "e4 c6 d4 d5 Nd2 dxe4 Nxe4": "B15 - Caro-Kann Defense: Main Line",
  "e4 c6 d4 d5 Nd2 dxe4 Nxe4 Bf5": "B18 - Caro-Kann Defense: Classical Variation",
  "e4 c6 d4 d5 Nd2 dxe4 Nxe4 Nd7": "B17 - Caro-Kann Defense: Karpov Variation",
  "e4 c6 Nc3": "B10 - Caro-Kann Defense",
  "e4 c6 Nc3 d5": "B10 - Caro-Kann Defense",
  "e4 c6 Nc3 d5 Nf3": "B10 - Caro-Kann Defense: Two Knights Attack",
  "e4 c6 d3": "B10 - Caro-Kann Defense: Breyer Variation",
  "e4 c6 c4": "B10 - Caro-Kann Defense: Accelerated Panov Attack",
  "e4 c6 c4 d5": "B10 - Caro-Kann Defense: Accelerated Panov Attack",
  "e4 Nf6": "B02 - Alekhine Defense",
  "e4 Nf6 e5 Nd5": "B02 - Alekhine Defense: Normal Variation",
  "e4 Nf6 e5 Nd5 c4": "B02 - Alekhine Defense: Two Pawn Attack",
  "e4 Nf6 e5 Nd5 d4": "B03 - Alekhine Defense",
  "e4 Nf6 e5 Nd5 d4 d6": "B03 - Alekhine Defense",
  "e4 Nf6 e5 Nd5 d4 d6 Nf3": "B04 - Alekhine Defense: Modern Variation",
  "e4 Nf6 e5 Nd5 d4 d6 Nf3 Bg4": "B05 - Alekhine Defense: Modern Variation, Main Line",
  "e4 Nf6 e5 Nd5 d4 d6 Nf3 g6": "B04 - Alekhine Defense: Modern Variation, Alburt Variation",
  "e4 Nf6 e5 Nd5 d4 d6 c4": "B03 - Alekhine Defense",
  "e4 Nf6 e5 Nd5 d4 d6 c4 Nb6 exd6": "B03 - Alekhine Defense: Exchange Variation",
  "e4 Nf6 Nc3 d5": "B02 - Alekhine Defense: Scandinavian Variation",
  "e4 g6": "B06 - Modern Defense",
  "e4 g6 d4 Bg7": "B06 - Modern Defense",
  "e4 g6 d4 Bg7 Nc3": "B06 - Modern Defense: Standard Line",
  "e4 g6 d4 Bg7 Nc3 d6": "B06 - Modern Defense: Standard Defense",
  "e4 g6 d4 Bg7 Nc3 d6 f4": "B06 - Modern Defense: Pseudo-Austrian Attack",
  "e4 e6": "C00 - French Defense",
  "e4 e6 d4": "C00 - French Defense: Normal Variation",
  "e4 e6 d4 d5": "C00 - French Defense",
  "e4 e6 d4 d5 e5": "C02 - French Defense: Advance Variation",
  "e4 e6 d4 d5 e5 c5": "C02 - French Defense: Advance Variation",
  "e4 e6 d4 d5 e5 c5 c3": "C02 - French Defense: Advance Variation",
  "e4 e6 d4 d5 e5 c5 c3 Nc6": "C02 - French Defense: Advance Variation",
  "e4 e6 d4 d5 e5 c5 c3 Nc6 Nf3": "C02 - French Defense: Advance Variation, Paulsen Attack",
  "e4 e6 d4 d5 e5 c5 c3 Nc6 Nf3 Bd7": "C02 - French Defense: Advance Variation, Euwe Variation",
  "e4 e6 d4 d5 Nd2": "C03 - French Defense: Tarrasch Variation",
  "e4 e6 d4 d5 Nd2 c5": "C07 - French Defense: Tarrasch Variation, Open System",
  "e4 e6 d4 d5 Nd2 c5 exd5 Qxd5": "C07 - French Defense: Tarrasch Variation, Chistyakov Defense",
  "e4 e6 d4 d5 Nd2 c5 exd5 exd5": "C08 - French Defense: Tarrasch Variation, Open System",
  "e4 e6 d4 d5 Nd2 c5 Ngf3": "C07 - French Defense: Tarrasch Variation, Open System, Euwe-Keres Line",
  "e4 e6 d4 d5 Nd2 Nf6": "C05 - French Defense: Tarrasch Variation, Closed Variation",
  "e4 e6 d4 d5 Nd2 Nf6 e5 Nfd7 f4": "C05 - French Defense: Tarrasch Variation, Pawn Center Variation",
  "e4 e6 d4 d5 Nd2 Be7": "C03 - French Defense: Tarrasch Variation, Morozevich Variation",
  "e4 e6 d4 d5 Nd2 Nc6": "C03 - French Defense: Tarrasch Variation, Guimard Defense",
  "e4 e6 d4 d5 Nd2 Nc6 Ngf3 Nf6": "C04 - French Defense: Tarrasch Variation, Guimard Defense, Main Line",
  "e4 e6 d4 d5 Nc3": "C10 - French Defense: Paulsen Variation",
  "e4 e6 d4 d5 Nc3 Bb4": "C15 - French Defense: Winawer Variation",
  "e4 e6 d4 d5 Nc3 Bb4 e5": "C16 - French Defense: Winawer Variation, Advance Variation",
  "e4 e6 d4 d5 Nc3 Bb4 e5 c5": "C17 - French Defense: Winawer Variation, Advance Variation",
  "e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3": "C17 - French Defense: Winawer Variation, Advance Variation",
  "e4 e6 d4 d5 Nc3 Bb4 Ne2": "C15 - French Defense: Winawer Variation, Alekhine-Maróczy Gambit",
  "e4 e6 d4 d5 Nc3 dxe4": "C10 - French Defense: Rubinstein Variation",
  "e4 e6 d4 d5 Nc3 dxe4 Nxe4 Nd7": "C10 - French Defense: Rubinstein Variation, Blackburne Defense",
  "e4 e6 d4 d5 Nc3 Nf6": "C11 - French Defense: Classical Variation",
  "e4 e6 d4 d5 Nc3 Nf6 Bg5": "C11 - French Defense: Burn Variation",
  "e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7": "C13 - French Defense: Classical Variation, Normal Variation",
  "e4 e6 d4 d5 Nc3 Nf6 Bg5 Bb4": "C12 - French Defense: MacCutcheon Variation",
  "e4 e6 d4 d5 Nc3 Nf6 Bg5 Bb4 e5": "C12 - French Defense: MacCutcheon Variation, Advance Variation",
  "e4 e6 d4 d5 Nc3 Nf6 e5": "C11 - French Defense: Classical Variation, Steinitz Variation",
  "e4 e6 d4 d5 exd5": "C01 - French Defense: Exchange Variation",
  "e4 e6 d3": "C00 - French Defense: King's Indian Attack",
  "e4 e6 Nf3": "C00 - French Defense: Knight Variation",
  "e4 e5": "C20 - King's Pawn Game",
  "e4 e5 Nf3": "C40 - King's Knight Opening",
  "e4 e5 Nf3 Nf6": "C42 - Russian Game",
  "e4 e5 Nf3 Nf6 d4": "C43 - Russian Game: Modern Attack",
  "e4 e5 Nf3 Nf6 d4 Nxe4": "C43 - Russian Game: Modern Attack, Symmetrical Variation",
  "e4 e5 Nf3 Nf6 d4 Nxe4 Bd3": "C43 - Russian Game: Modern Attack, Center Variation",
  "e4 e5 Nf3 Nf6 Nxe5": "C42 - Russian Game",
  "e4 e5 Nf3 Nf6 Nxe5 d6": "C42 - Russian Game",
  "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3": "C42 - Russian Game",
  "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4": "C42 - Russian Game",
  "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4": "C42 - Russian Game: Classical Attack",
  "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 Nc3": "C42 - Russian Game: Nimzowitsch Attack",
  "e4 e5 Nf3 Nf6 Nc3": "C42 - Russian Game: Three Knights Game",
  "e4 e5 Nf3 Nf6 Nc3 Nc6": "C46 - Four Knights Game",
  "e4 e5 Nf3 Nc6": "C44 - King's Knight Opening: Normal Variation",
  "e4 e5 Nf3 Nc6 Bb5": "C60 - Ruy Lopez",
  "e4 e5 Nf3 Nc6 Bb5 a6": "C70 - Ruy Lopez: Morphy Defense",
  "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O": "C78 - Ruy Lopez: Morphy Defense",
  "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7": "C84 - Ruy Lopez: Closed",
  "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4": "C80 - Ruy Lopez: Open",
  "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 d3": "C77 - Ruy Lopez: Morphy Defense, Anderssen Variation",
  "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 Qe2": "C77 - Ruy Lopez: Morphy Defense, Wormald Attack",
  "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6": "C71 - Ruy Lopez: Morphy Defense, Modern Steinitz Defense",
  "e4 e5 Nf3 Nc6 Bb5 a6 Bxc6": "C68 - Ruy Lopez: Exchange Variation",
  "e4 e5 Nf3 Nc6 Bb5 a6 Bxc6 dxc6 O-O": "C69 - Ruy Lopez: Exchange Variation, Normal Variation",
  "e4 e5 Nf3 Nc6 Bb5 a6 Bxc6 dxc6 O-O f6": "C69 - Ruy Lopez: Exchange Variation, Gligoric Variation",
  "e4 e5 Nf3 Nc6 Bb5 Nf6": "C65 - Ruy Lopez: Berlin Defense",
  "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O": "C65 - Ruy Lopez: Berlin Defense",
  "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4": "C67 - Ruy Lopez: Berlin Defense, Rio Gambit Accepted",
  "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Nd6": "C67 - Ruy Lopez: Berlin Defense, l'Hermet Variation",
  "e4 e5 Nf3 Nc6 Bb5 f5": "C63 - Ruy Lopez: Schliemann Defense",
  "e4 e5 Nf3 Nc6 Bb5 f5 Nc3": "C63 - Ruy Lopez: Schliemann Defense, Dyckhoff Variation",
  "e4 e5 Nf3 Nc6 Bb5 Bc5": "C64 - Ruy Lopez: Classical Variation",
  "e4 e5 Nf3 Nc6 Bc4": "C50 - Italian Game",
  "e4 e5 Nf3 Nc6 Bc4 Bc5": "C50 - Giuoco Piano",
  "e4 e5 Nf3 Nc6 Bc4 Bc5 b4": "C51 - Italian Game: Evans Gambit",
  "e4 e5 Nf3 Nc6 Bc4 Bc5 c3": "C53 - Italian Game: Classical Variation",
  "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6": "C53 - Italian Game: Classical Variation",
  "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3": "C53 - Italian Game: Classical Variation, Giuoco Pianissimo",
  "e4 e5 Nf3 Nc6 Bc4 Nf6": "C55 - Italian Game: Two Knights Defense",
  "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5": "C57 - Italian Game: Two Knights Defense, Knight Attack",
  "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5": "C57 - Italian Game: Two Knights Defense, Knight Attack, Normal Variation",
  "e4 e5 Nf3 Nc6 Bc4 Nf6 d3": "C55 - Italian Game: Two Knights Defense, Modern Bishop's Opening",
  "e4 e5 Nf3 Nc6 Bc4 Nf6 d3 Bc5": "C50 - Italian Game: Giuoco Pianissimo, Normal",
  "e4 e5 Nf3 Nc6 d4": "C44 - Scotch Game",
  "e4 e5 Nf3 Nc6 d4 exd4": "C44 - Scotch Game",
  "e4 e5 Nf3 Nc6 d4 exd4 Nxd4": "C45 - Scotch Game",
  "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5": "C45 - Scotch Game: Classical Variation",
  "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Nf6": "C45 - Scotch Game: Schmidt Variation",
  "e4 e5 Nf3 Nc6 d4 exd4 Bc4": "C44 - Scotch Game: Scotch Gambit",
  "e4 e5 Nf3 Nc6 Nc3": "C46 - Three Knights Opening",
  "e4 e5 Nf3 Nc6 Nc3 Nf6": "C46 - Four Knights Game",
  "e4 e5 Nf3 Nc6 Nc3 Nf6 d4": "C47 - Four Knights Game: Scotch Variation",
  "e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4": "C47 - Four Knights Game: Scotch Variation Accepted",
  "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5": "C48 - Four Knights Game: Spanish Variation",
  "e4 e5 Nf3 d6": "C41 - Philidor Defense",
  "e4 e5 Nf3 d6 d4": "C41 - Philidor Defense",
  "e4 e5 Nf3 d6 d4 exd4": "C41 - Philidor Defense: Exchange Variation",
  "e4 e5 Nf3 d6 d4 exd4 Nxd4": "C41 - Philidor Defense: Exchange Variation",
  "e4 e5 Nf3 f5": "C40 - Latvian Gambit",
  "e4 e5 f4": "C30 - King's Gambit",
  "e4 e5 f4 exf4": "C33 - King's Gambit Accepted",
  "e4 e5 f4 exf4 Nf3": "C34 - King's Gambit Accepted: King's Knight Gambit",
  "e4 e5 d4": "C20 - Center Game",
  "e4 e5 d4 exd4": "C21 - Center Game Accepted",
  "e4 e5 Nc3": "C25 - Vienna Game",
  "e4 e5 Nc3 Nc6": "C25 - Vienna Game: Max Lange Defense",
  "e4 e5 Nc3 Nf6": "C26 - Vienna Game: Falkbeer Variation",
  "e4 e5 Nc3 Nf6 f4": "C26 - Vienna Game: Vienna Gambit",
  "e4 e5 Bc4": "C23 - Bishop's Opening",
  "e4 e5 Bc4 Nf6": "C24 - Bishop's Opening: Berlin Defense",
  "e4 c5": "B20 - Sicilian Defense",
  "e4 c5 Nf3": "B27 - Sicilian Defense",
  "e4 c5 Nf3 e6": "B40 - Sicilian Defense: French Variation",
  "e4 c5 Nf3 e6 c3": "B40 - Sicilian Defense: Delayed Alapin Variation",
  "e4 c5 Nf3 e6 d4 cxd4": "B40 - Sicilian Defense: French Variation, Open",
  "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6": "B44 - Sicilian Defense: Paulsen Variation",
  "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nc3": "B45 - Sicilian Defense: Paulsen Variation, Normal Variation",
  "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nc3 Qc7": "B47 - Sicilian Defense: Paulsen Variation, Bastrikov Variation",
  "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nc3 a6": "B46 - Sicilian Defense: Paulsen Variation",
  "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nb5": "B44 - Sicilian Defense: Paulsen Variation, Szén Variation",
  "e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6": "B41 - Sicilian Defense: Kan Variation",
  "e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 Bd3": "B42 - Sicilian Defense: Kan Variation, Modern Variation",
  "e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 Bd3 Bc5": "B42 - Sicilian Defense: Kan Variation, Polugaevsky Variation",
  "e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 Nc3": "B43 - Sicilian Defense: Kan Variation, Knight Variation",
  "e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 Nc3 b5": "B43 - Sicilian Defense: Kan Variation, Wing Attack",
  "e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 c4": "B41 - Sicilian Defense: Kan Variation, Maróczy Bind, Réti Variation",
  "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nf6": "B40 - Sicilian Defense: French Variation, Normal",
  "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6": "B40 - Sicilian Defense: Four Knights Variation",
  "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nf6 Nc3 d6": "B80 - Sicilian Defense: Scheveningen Variation",
  "e4 c5 Nf3 e6 b3": "B40 - Sicilian Defense: French Variation, Westerinen Attack",
  "e4 c5 Nf3 a6": "B28 - Sicilian Defense: O'Kelly Variation",
  "e4 c5 Nf3 Nc6": "B30 - Sicilian Defense: Old Sicilian",
  "e4 c5 Nf3 Nc6 d4": "B32 - Sicilian Defense: Open",
  "e4 c5 Nf3 Nc6 d4 cxd4": "B32 - Sicilian Defense: Open",
  "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4": "B32 - Sicilian Defense: Open",
  "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Qc7": "B32 - Sicilian Defense: Flohr Variation",
  "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Qc7 Nc3 e6": "B47 - Sicilian Defense: Paulsen Variation, Bastrikov Variation",
  "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6": "B33 - Sicilian Defense: Open",
  "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 d6": "B56 - Sicilian Defense: Classical Variation",
  "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5": "B33 - Sicilian Defense: Lasker-Pelikan Variation",
  "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e6": "B40 - Sicilian Defense: Four Knights Variation",
  "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6": "B32 - Sicilian Defense: Accelerated Dragon",
  "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 Nc3": "B34 - Sicilian Defense: Accelerated Dragon, Modern Variation",
  "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 c4": "B36 - Sicilian Defense: Accelerated Dragon, Maróczy Bind",
  "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 c4 Bg7": "B37 - Sicilian Defense: Accelerated Fianchetto, Maróczy Bind",
  "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Qb6": "B32 - Sicilian Defense: Godiva Variation",
  "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 e6": "B44 - Sicilian Defense: Paulsen Variation",
  "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 e6 Nc3": "B45 - Sicilian Defense: Paulsen Variation, Normal Variation",
  "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 e5": "B32 - Sicilian Defense: Löwenthal Variation",
  "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 e5 Nb5 d6": "B32 - Sicilian Defense: Kalashnikov Variation",
  "e4 c5 Nf3 Nc6 Bb5": "B30 - Sicilian Defense: Nyezhmetdinov-Rossolimo Attack",
  "e4 c5 Nf3 Nc6 Bb5 g6": "B31 - Sicilian Defense: Nyezhmetdinov-Rossolimo Attack, Fianchetto Variation",
  "e4 c5 Nf3 d6": "B50 - Sicilian Defense",
  "e4 c5 Nf3 d6 d4": "B50 - Sicilian Defense",
  "e4 c5 Nf3 d6 d4 cxd4": "B50 - Sicilian Defense",
  "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6": "B54 - Sicilian Defense: Modern Variations, Main Line",
  "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3": "B56 - Sicilian Defense: Modern Variations",
  "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6": "B70 - Sicilian Defense: Dragon Variation",
  "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6": "B90 - Sicilian Defense: Najdorf Variation",
  "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6": "B80 - Sicilian Defense: Scheveningen Variation",
  "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6": "B56 - Sicilian Defense: Classical Variation",
  "e4 c5 Nf3 d6 d4 cxd4 Qxd4": "B53 - Sicilian Defense: Chekhover Variation",
  "e4 c5 Nf3 d6 d4 Nf6": "B50 - Sicilian Defense: Modern Variations, Anti-Qxd4 Move Order",
  "e4 c5 Nf3 d6 d4 Nf6 Nc3 cxd4 Nxd4": "B56 - Sicilian Defense: Modern Variations",
  "e4 c5 Nf3 d6 d4 Nf6 Nc3 cxd4 Nxd4 a6": "B90 - Sicilian Defense: Najdorf Variation",
  "e4 c5 Nf3 d6 Bb5+": "B51 - Sicilian Defense: Moscow Variation",
  "e4 c5 Nf3 d6 Bb5+ Bd7": "B52 - Sicilian Defense: Canal Attack, Main Line",
  "e4 c5 Nf3 d6 Bb5+ Bd7 Bxd7+ Qxd7 c4": "B52 - Sicilian Defense: Moscow Variation, Sokolsky Variation",
  "e4 c5 Nf3 d6 c3": "B50 - Sicilian Defense: Delayed Alapin",
  "e4 c5 Nf3 Nf6": "B29 - Sicilian Defense: Nimzowitsch Variation",
  "e4 c5 Nf3 g6": "B27 - Sicilian Defense: Hyperaccelerated Dragon",
  "e4 c5 Nf3 g6 d4": "B27 - Sicilian Defense: Hyperaccelerated Fianchetto",
  "e4 c5 c3": "B22 - Sicilian Defense: Alapin Variation",
  "e4 c5 c3 Nf6 e5 Nd5 d4 cxd4": "B22 - Sicilian Defense: Alapin Variation, Smith-Morra Declined",
  "e4 c5 c3 d5 exd5 Qxd5": "B22 - Sicilian Defense: Alapin Variation, Barmen Defense",
  "e4 c5 c3 d5 exd5 Qxd5 d4 Nf6 Nf3 Bg4": "B22 - Sicilian Defense: Alapin Variation, Barmen Defense, Modern Line",
  "e4 c5 Nc3": "B23 - Sicilian Defense: Closed",
  "e4 c5 Nc3 Nc6": "B23 - Sicilian Defense: Closed, Traditional",
  "e4 c5 Nc3 Nc6 f4": "B23 - Sicilian Defense: Grand Prix Attack",
  "e4 c5 Nc3 Nc6 g3": "B24 - Sicilian Defense: Closed, Fianchetto Variation",
  "e4 c5 Nc3 Nc6 g3 g6": "B24 - Sicilian Defense: Closed",
  "e4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7": "B24 - Sicilian Defense: Closed",
  "e4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 d3 d6": "B25 - Sicilian Defense: Closed",
  "e4 c5 Nc3 Nc6 Nge2": "B23 - Sicilian Defense: Closed, Chameleon Variation",
  "e4 c5 Nc3 e6": "B23 - Sicilian Defense: Closed",
  "e4 c5 Nc3 e6 g3": "B23 - Sicilian Defense: Closed",
  "e4 c5 d4": "B21 - Sicilian Defense: Smith-Morra Gambit",
  "e4 c5 d4 cxd4 c3": "B21 - Sicilian Defense: Smith-Morra Gambit",
  "e4 c5 f4": "B21 - Sicilian Defense: McDonnell Attack",
  "e4 c5 b3": "B20 - Sicilian Defense: Snyder Variation",
  "e4 c5 Ne2": "B20 - Sicilian Defense: Keres Variation",
  "e4 Nc6": "B00 - Nimzowitsch Defense",
  "e4 Nc6 Nf3": "B00 - Nimzowitsch Defense, Declined Variation",
  "e4 Nc6 d4": "B00 - King's Pawn Game: Nimzowitsch Defense",
  "e4 d6": "B00 - Pirc Defense",
  "e4 d6 d4": "B00 - Pirc Defense",
  "e4 d6 d4 Nf6": "B00 - Pirc Defense",
  "e4 d6 d4 Nf6 Nc3": "B07 - Pirc Defense",
  "e4 d6 d4 Nf6 Nc3 g6": "B07 - Pirc Defense",
  "e4 d6 d4 Nf6 Nc3 g6 f4": "B09 - Pirc Defense: Austrian Attack",
  "e4 d6 d4 Nf6 Nc3 g6 f4 Bg7 Nf3 O-O": "B09 - Pirc Defense: Austrian Attack",
  "e4 d6 d4 Nf6 Nc3 g6 Nf3": "B08 - Pirc Defense: Classical Variation",
  "e4 d6 d4 Nf6 Nc3 g6 Nf3 Bg7": "B08 - Pirc Defense: Classical Variation",
  "e4 d6 d4 Nf6 Nc3 g6 Nf3 Bg7 Be2": "B08 - Pirc Defense: Classical Variation, Quiet System",
  "e4 d6 d4 Nf6 Nc3 c6": "B07 - Czech Defense",
  "e4 d6 d4 Nf6 Nc3 e5 Nf3 Nbd7": "C41 - Philidor Defense: Lion Variation",
  "e4 d6 d4 g6 Nc3 Bg7": "B06 - Modern Defense: Standard Defense",
  "e4 d5": "B01 - Scandinavian Defense",
  "e4 d5 exd5 Nf6": "B01 - Scandinavian Defense: Modern Variation",
  "e4 d5 exd5 Nf6 d4": "B01 - Scandinavian Defense: Modern Variation",
  "e4 d5 exd5 Nf6 d4 Nxd5": "B01 - Scandinavian Defense: Marshall Variation",
  "e4 d5 exd5 Qxd5": "B01 - Scandinavian Defense: Mieses-Kotroc Variation",
  "e4 d5 exd5 Qxd5 Nc3 Qa5": "B01 - Scandinavian Defense: Main Line",
  "e4 d5 exd5 Qxd5 Nc3 Qa5 d4 Nf6": "B01 - Scandinavian Defense: Main Line, Mieses Variation",
  "e4 d5 exd5 Qxd5 Nc3 Qd6": "B01 - Scandinavian Defense: Gubinsky-Melts Defense",
  "e4 b6": "B00 - Owen Defense",
  d4: t3,
  "d4 Nf6": "A45 - Indian Game",
  "d4 Nf6 c4": "A50 - Indian Game: Normal Variation",
  "d4 Nf6 c4 e6 Nf3": "E10 - Indian Game: Anti-Nimzo-Indian",
  "d4 Nf6 c4 e6 Nf3 c5": "E10 - Blumenfeld Countergambit",
  "d4 Nf6 c4 e6 Nf3 b6": "E12 - Queen's Indian Defense",
  "d4 Nf6 c4 e6 Nf3 b6 g3": "E15 - Queen's Indian Defense: Fianchetto Variation",
  "d4 Nf6 c4 e6 Nf3 b6 g3 Ba6": "E15 - Queen's Indian Defense: Fianchetto Variation, Nimzowitsch Variation",
  "d4 Nf6 c4 e6 Nf3 b6 g3 Ba6 b3": "E15 - Queen's Indian Defense: Fianchetto Variation, Nimzowitsch Variation, Quiet Line",
  "d4 Nf6 c4 e6 Nf3 b6 g3 Ba6 b3 Bb4+": "E15 - Queen's Indian Defense: Fianchetto Variation, Check Variation",
  "d4 Nf6 c4 e6 Nf3 b6 g3 Bb7": "E15 - Queen's Indian Defense: Fianchetto Traditional",
  "d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 Be7": "E17 - Queen's Indian Defense: Traditional Variation",
  "d4 Nf6 c4 e6 Nf3 b6 a3": "E12 - Queen's Indian Defense: Petrosian Variation",
  "d4 Nf6 c4 e6 Nf3 b6 a3 Bb7 Nc3": "E12 - Queen's Indian Defense: Kasparov-Petrosian Variation",
  "d4 Nf6 c4 e6 Nf3 b6 a3 Bb7 Nc3 d5": "E12 - Queen's Indian Defense: Kasparov-Petrosian Variation, Main Line",
  "d4 Nf6 c4 e6 Nf3 b6 Nc3": "E12 - Queen's Indian Defense: Kasparov Variation",
  "d4 Nf6 c4 e6 Nf3 Bb4+": "E11 - Bogo-Indian Defense",
  "d4 Nf6 c4 e6 Nf3 Bb4+ Nbd2": "E11 - Bogo-Indian Defense: Grünfeld Variation",
  "d4 Nf6 c4 e6 Nf3 Bb4+ Bd2 Qe7": "E11 - Bogo-Indian Defense: Nimzowitsch Variation",
  "d4 Nf6 c4 e6 Nf3 d5 Nc3": "D37 - Queen's Gambit Declined: Three Knights Variation",
  "d4 Nf6 c4 e6 Nc3 Bb4": "E20 - Nimzo-Indian Defense",
  "d4 Nf6 c4 e6 Nc3 Bb4 e3": "E40 - Nimzo-Indian Defense: Normal Line",
  "d4 Nf6 c4 e6 Nc3 Bb4 e3 c5": "E41 - Nimzo-Indian Defense: Hübner Variation",
  "d4 Nf6 c4 e6 Nc3 Bb4 e3 b6": "E43 - Nimzo-Indian Defense: St. Petersburg Variation",
  "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O": "E46 - Nimzo-Indian Defense: Normal Variation",
  "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Bd3": "E47 - Nimzo-Indian Defense: Normal Variation, Bishop Attack",
  "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Bd3 d5": "E48 - Nimzo-Indian Defense: Normal Variation, Bishop Attack, Classical Defense",
  "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Ne2": "E46 - Nimzo-Indian Defense: Reshevsky Variation",
  "d4 Nf6 c4 e6 Nc3 Bb4 Bg5": "E30 - Nimzo-Indian Defense: Leningrad Variation",
  "d4 Nf6 c4 e6 Nc3 Bb4 f3": "E20 - Nimzo-Indian Defense: Kmoch Variation",
  "d4 Nf6 c4 e6 Nc3 Bb4 Qc2": "E32 - Nimzo-Indian Defense: Classical Variation",
  "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 c5": "E38 - Nimzo-Indian Defense: Classical Variation, Berlin Variation",
  "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 d5": "E34 - Nimzo-Indian Defense: Classical Variation, Noa Variation",
  "d4 Nf6 c4 e6 Nc3 Bb4 Nf3": "E21 - Nimzo-Indian Defense: Three Knights Variation",
  "d4 Nf6 c4 e6 Nc3 d5": "D35 - Queen's Gambit Declined: Normal Defense",
  "d4 Nf6 c4 e6 Nc3 d5 Bg5": "D50 - Queen's Gambit Declined: Modern Variation",
  "d4 Nf6 c4 e6 Nc3 d5 Bg5 Be7": "D53 - Queen's Gambit Declined",
  "d4 Nf6 c4 e6 Nc3 d5 cxd5": "D35 - Queen's Gambit Declined: Exchange Variation",
  "d4 Nf6 c4 e6 Nc3 d5 cxd5 exd5 Bg5": "D35 - Queen's Gambit Declined: Exchange Variation, Positional Variation",
  "d4 Nf6 c4 e6 g3": "E00 - Catalan Opening",
  "d4 Nf6 c4 e6 g3 d5": "E00 - Catalan Opening",
  "d4 Nf6 c4 e6 g3 d5 Bg2": "E01 - Catalan Opening: Closed",
  "d4 Nf6 c4 g6": "E60 - Indian Game: West Indian Defense",
  "d4 Nf6 c4 g6 Nc3": "E61 - King's Indian Defense",
  "d4 Nf6 c4 g6 Nc3 d5": "D80 - Grünfeld Defense",
  "d4 Nf6 c4 g6 Nc3 d5 Bf4": "D82 - Grünfeld Defense: Brinckmann Attack",
  "d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5": "D85 - Grünfeld Defense: Exchange Variation",
  "d4 Nf6 c4 g6 Nc3 d5 Nf3": "D90 - Grünfeld Defense: Three Knights Variation",
  "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7": "D90 - Grünfeld Defense: Three Knights Variation",
  "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Qb3": "D96 - Grünfeld Defense: Russian Variation",
  "d4 Nf6 c4 g6 Nc3 Bg7 e4": "E70 - King's Indian Defense: Normal Variation",
  "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6": "E70 - King's Indian Defense: Normal Variation",
  "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2": "E73 - King's Indian Defense: Normal Variation, Standard Development",
  "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3": "E90 - King's Indian Defense: Normal Variation, Rare Defenses",
  "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3": "E80 - King's Indian Defense: Sämisch Variation",
  "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O": "E81 - King's Indian Defense: Sämisch Variation, Normal Defense",
  "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4": "E76 - King's Indian Defense: Four Pawns Attack",
  "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 h3": "E71 - King's Indian Defense: Makogonov Variation",
  "d4 Nf6 c4 g6 Nf3": "E60 - King's Indian Defense: Normal Variation, King's Knight Variation",
  "d4 Nf6 c4 g6 g3": "E60 - King's Indian Defense: Fianchetto Variation, Immediate Fianchetto",
  "d4 Nf6 c4 g6 g3 Bg7 Bg2": "E60 - Indian Game: King's Indian Variation, Fianchetto Variation",
  "d4 Nf6 c4 c5": "A56 - Benoni Defense",
  "d4 Nf6 c4 c5 d5 e5": "A56 - Benoni Defense: Czech Benoni Defense",
  "d4 Nf6 c4 c5 d5 b5": "A57 - Benko Gambit",
  "d4 Nf6 c4 c5 d5 b5 cxb5 a6": "A57 - Benko Gambit Accepted",
  "d4 Nf6 c4 c5 d5 b5 cxb5 a6 bxa6": "A58 - Benko Gambit Accepted: Fully Accepted Variation",
  "d4 Nf6 c4 c5 d5 b5 cxb5 a6 b6": "A57 - Benko Gambit Accepted: Pawn Return Variation",
  "d4 Nf6 c4 c5 d5 e6": "A60 - Benoni Defense: Modern Variation",
  "d4 Nf6 c4 c5 Nf3": "A31 - English Opening: Symmetrical Variation, Anti-Benoni Variation",
  "d4 Nf6 c4 e5": "A51 - Indian Game: Budapest Defense",
  "d4 Nf6 c4 e5 dxe5 Ng4": "A52 - Indian Game: Budapest Defense",
  "d4 Nf6 c4 d6": "A53 - Old Indian Defense",
  "d4 Nf6 c4 c6": "A50 - Slav Indian",
  "d4 Nf6 Nf3": "A46 - Indian Game: Knights Variation",
  "d4 Nf6 Nf3 e6 Bg5": "A46 - Torre Attack",
  "d4 Nf6 Nf3 e6 e3": "A46 - Yusupov-Rubinstein System",
  "d4 Nf6 Nf3 e6 c4": "E10 - Indian Game: Anti-Nimzo-Indian",
  "d4 Nf6 Nf3 e6 c4 Bb4+": "E11 - Bogo-Indian Defense",
  "d4 Nf6 Nf3 e6 c4 c5": "E10 - Blumenfeld Countergambit",
  "d4 Nf6 Nf3 e6 c4 b6": "E12 - Queen's Indian Defense",
  "d4 Nf6 Nf3 e6 c4 b6 g3": "E15 - Queen's Indian Defense: Fianchetto Variation",
  "d4 Nf6 Nf3 e6 Bf4": "A46 - Indian Game: London System",
  "d4 Nf6 Nf3 c5": "A46 - Indian Game: Spielmann-Indian",
  "d4 Nf6 Nf3 c5 d5": "A43 - Benoni Defense: Benoni-Indian Defense, Kingside Move Order",
  "d4 Nf6 Nf3 d5": "D02 - Queen's Pawn Game: Symmetrical Variation",
  "d4 Nf6 Nf3 d5 c4 e6 Nc3": "D37 - Queen's Gambit Declined: Three Knights Variation",
  "d4 Nf6 Nf3 g6": "A48 - East Indian Defense",
  "d4 Nf6 Nf3 g6 c4": "E60 - King's Indian Defense: Normal Variation, King's Knight Variation",
  "d4 Nf6 Nf3 g6 c4 Bg7 Nc3 d5": "D90 - Grünfeld Defense: Three Knights Variation",
  "d4 Nf6 Nf3 g6 Bg5": "A48 - Torre Attack",
  "d4 Nf6 Nf3 g6 g3": "A49 - Indian Game: Przepiorka Variation",
  "d4 Nf6 Nf3 g6 Bf4": "A48 - London System",
  "d4 Nf6 Nf3 b6": "A47 - Queen's Indian Defense",
  "d4 Nf6 Nf3 d6": "A46 - Indian Game: Wade-Tartakower Defense",
  "d4 Nf6 Bg5": "A45 - Trompowsky Attack",
  "d4 Nf6 Bg5 e6": "A45 - Trompowsky Attack: Classical Defense",
  "d4 Nf6 Bg5 e6 e4": "A45 - Trompowsky Attack: Classical Defense, Big Center Variation",
  "d4 Nf6 g3": "A45 - Indian Game: Tartakower Attack",
  "d4 Nf6 Nc3 d5": "A45 - Queen's Pawn Game: Chigorin Variation",
  "d4 Nf6 Nc3 d5 Bg5": "D01 - Richter-Veresov Attack",
  "d4 e6": "A40 - Horwitz Defense",
  "d4 e6 c4 f5": "A84 - Dutch Defense: Classical Variation",
  "d4 e6 c4 f5 g3 Nf6 Bg2": "A90 - Dutch Defense: Classical Variation",
  "d4 e6 c4 Bb4+": "A40 - Kangaroo Defense",
  "d4 e6 c4 b6": "A40 - English Defense",
  "d4 e6 c4 d5": "D30 - Queen's Gambit Declined",
  "d4 e6 c4 Nf6 Nf3": "E10 - Indian Game: Anti-Nimzo-Indian",
  "d4 e6 c4 Nf6 Nc3 Bb4": "E20 - Nimzo-Indian Defense",
  "d4 e6 e4": "C00 - French Defense: Normal Variation",
  "d4 e6 e4 d5": "C00 - French Defense",
  "d4 d5": "D00 - Queen's Pawn Game",
  "d4 d5 Nf3": "D02 - Queen's Pawn Game: Zukertort Variation",
  "d4 d5 Nf3 Nf6": "D02 - Queen's Pawn Game: Symmetrical Variation",
  "d4 d5 Nf3 Nf6 c4 e6 Nc3": "D37 - Queen's Gambit Declined: Three Knights Variation",
  "d4 d5 Nf3 Nf6 c4 c6": "D11 - Slav Defense: Modern",
  "d4 d5 Nf3 Nf6 c4 c6 Nc3": "D15 - Slav Defense: Three Knights Variation",
  "d4 d5 Nf3 Nf6 c4 dxc4": "D23 - Queen's Gambit Accepted",
  "d4 d5 Nf3 Nf6 Bf4": "D02 - Queen's Pawn Game: London System",
  "d4 d5 Nf3 Nf6 e3": "D04 - Queen's Pawn Game: Colle System",
  "d4 d5 Nf3 c6 c4": "D11 - Slav Defense: Modern Line",
  "d4 d5 c4": "D06 - Queen's Gambit",
  "d4 d5 c4 dxc4": "D20 - Queen's Gambit Accepted",
  "d4 d5 c4 dxc4 Nf3": "D21 - Queen's Gambit Accepted: Normal Variation",
  "d4 d5 c4 dxc4 Nf3 Nf6": "D23 - Queen's Gambit Accepted",
  "d4 d5 c4 dxc4 Nf3 Nf6 e3": "D25 - Queen's Gambit Accepted: Normal Variation",
  "d4 d5 c4 dxc4 Nf3 Nf6 e3 e6": "D26 - Queen's Gambit Accepted: Normal Variation, Traditional System",
  "d4 d5 c4 dxc4 Nf3 Nf6 e3 e6 Bxc4 c5": "D26 - Queen's Gambit Accepted: Classical Defense",
  "d4 d5 c4 dxc4 e3": "D20 - Queen's Gambit Accepted: Old Variation",
  "d4 d5 c4 dxc4 e4": "D20 - Queen's Gambit Accepted: Saduleto Variation",
  "d4 d5 c4 e6": "D30 - Queen's Gambit Declined",
  "d4 d5 c4 e6 Nc3": "D31 - Queen's Gambit Declined: Queen's Knight Variation",
  "d4 d5 c4 e6 Nc3 c6": "D31 - Semi-Slav Defense: Accelerated Move Order",
  "d4 d5 c4 e6 Nc3 c5": "D32 - Tarrasch Defense",
  "d4 d5 c4 e6 Nc3 c5 cxd5 exd5": "D32 - Queen's Gambit Declined: Tarrasch Defense",
  "d4 d5 c4 e6 Nc3 c5 cxd5 exd5 Nf3": "D32 - Tarrasch Defense: Two Knights Variation",
  "d4 d5 c4 e6 Nc3 Nf6": "D35 - Queen's Gambit Declined: Normal Defense",
  "d4 d5 c4 e6 Nc3 Nf6 Nf3": "D37 - Queen's Gambit Declined: Three Knights Variation",
  "d4 d5 c4 e6 Nc3 Nf6 Bg5": "D50 - Queen's Gambit Declined: Modern Variation",
  "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7": "D53 - Queen's Gambit Declined",
  "d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7": "D51 - Queen's Gambit Declined: Modern Variation, Knight Defense",
  "d4 d5 c4 e6 Nc3 Nf6 cxd5": "D35 - Queen's Gambit Declined: Exchange Variation",
  "d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5 Bg5": "D35 - Queen's Gambit Declined: Exchange Variation, Positional Variation",
  "d4 d5 c4 e6 Nc3 Be7": "D31 - Queen's Gambit Declined: Charousek (Petrosian) Variation",
  "d4 d5 c4 e6 Nf3 Nf6 Nc3": "D37 - Queen's Gambit Declined: Three Knights Variation",
  "d4 d5 c4 c6": "D10 - Slav Defense",
  "d4 d5 c4 c6 Nc3": "D10 - Slav Defense",
  "d4 d5 c4 c6 Nc3 Nf6 e3 e6 Nf3": "D45 - Semi-Slav Defense: Main Line",
  "d4 d5 c4 c6 Nc3 Nf6 e3 e6 Nf3 Nbd7": "D45 - Semi-Slav Defense: Normal Variation",
  "d4 d5 c4 c6 Nc3 Nf6 Nf3": "D15 - Slav Defense: Three Knights Variation",
  "d4 d5 c4 c6 Nc3 Nf6 Nf3 e6": "D43 - Semi-Slav Defense",
  "d4 d5 c4 c6 Nf3": "D11 - Slav Defense: Modern Line",
  "d4 d5 c4 c6 Nf3 Nf6": "D11 - Slav Defense: Modern",
  "d4 d5 c4 c6 Nf3 Nf6 Nc3": "D15 - Slav Defense: Three Knights Variation",
  "d4 d5 c4 c6 Nf3 Nf6 Nc3 e6": "D43 - Semi-Slav Defense",
  "d4 d5 c4 c6 Nf3 Nf6 Nc3 e6 e3": "D45 - Semi-Slav Defense: Main Line",
  "d4 d5 c4 c6 Nf3 Nf6 Nc3 e6 e3 Nbd7": "D45 - Semi-Slav Defense: Normal Variation",
  "d4 d5 c4 c6 Nf3 Nf6 Nc3 a6": "D15 - Slav Defense: Chameleon Variation",
  "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4": "D15 - Slav Defense: Two Knights Attack",
  "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4": "D16 - Slav Defense: Alapin Variation",
  "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5": "D17 - Slav Defense: Czech Variation",
  "d4 d5 c4 c6 Nf3 Nf6 e3": "D11 - Slav Defense: Quiet Variation",
  "d4 d5 c4 c6 Nf3 Nf6 e3 Bf5": "D12 - Slav Defense: Quiet Variation, Schallopp Defense",
  "d4 d5 c4 c6 cxd5": "D10 - Slav Defense: Exchange Variation",
  "d4 d5 c4 e5": "D08 - Queen's Gambit Declined: Albin Countergambit",
  "d4 d5 c4 Nc6": "D07 - Queen's Gambit Declined: Chigorin Defense",
  "d4 d5 e4": "D00 - Blackmar Gambit",
  "d4 d5 e4 dxe4 Nc3": "D00 - Blackmar-Diemer Gambit",
  "d4 d5 Bg5": "D00 - Queen's Pawn Game: Levitsky Attack",
  "d4 d5 Bf4": "D00 - Queen's Pawn Game: Mason Variation",
  "d4 d5 Nc3": "D00 - Queen's Pawn Game: Chigorin Variation",
  "d4 d6": "A41 - Queen's Pawn Game",
  "d4 d6 c4": "A41 - Old Indian Defense",
  "d4 d6 c4 e5": "A41 - Rat Defense: English Rat",
  "d4 d6 e4": "B00 - Pirc Defense",
  "d4 d6 e4 Nf6": "B00 - Pirc Defense",
  "d4 d6 e4 Nf6 Nc3": "B07 - Pirc Defense",
  "d4 g6": "A40 - Modern Defense",
  "d4 g6 c4 Bg7 Nc3 d6": "A41 - Modern Defense",
  "d4 g6 c4 Bg7 Nc3 d6 e4": "A42 - Modern Defense: Averbakh System",
  "d4 g6 e4 Bg7": "B06 - Modern Defense",
  "d4 f5": "A80 - Dutch Defense",
  "d4 f5 c4": "A84 - Dutch Defense",
  "d4 f5 c4 Nf6": "A84 - Dutch Defense: Normal Variation",
  "d4 f5 c4 Nf6 Nc3": "A85 - Dutch Defense: Queen's Knight Variation",
  "d4 f5 g3": "A81 - Dutch Defense: Fianchetto Attack",
  "d4 f5 g3 Nf6 Bg2 g6": "A81 - Dutch Defense: Semi-Leningrad Variation",
  "d4 f5 Nc3": "A80 - Dutch Defense: Raphael Variation",
  "d4 c5": "A43 - Benoni Defense: Old Benoni",
  "d4 c5 d5": "A43 - Benoni Defense: Old Benoni",
  "d4 c5 d5 e5": "A44 - Benoni Defense: Old Benoni",
  c4: r3,
  "c4 Nf6": "A15 - English Opening: Anglo-Indian Defense",
  "c4 Nf6 Nc3": "A16 - English Opening: Anglo-Indian Defense, Queen's Knight Variation",
  "c4 Nf6 Nc3 e6": "A17 - English Opening: Anglo-Indian Defense, Hedgehog System",
  "c4 Nf6 Nc3 e6 e4": "A18 - English Opening: Mikenas-Carls Variation",
  "c4 Nf6 Nc3 g6 e4 d6 d4 Bg7": "E70 - King's Indian Defense: Normal Variation",
  "c4 Nf6 Nc3 d5": "A16 - English Opening: Anglo-Grünfeld Defense",
  "c4 Nf6 Nc3 e5": "A22 - English Opening: King's English Variation, Two Knights Variation",
  "c4 Nf6 Nf3": "A15 - English Opening: Anglo-Indian Defense, King's Knight Variation",
  "c4 Nf6 Nf3 g6": "A15 - English Opening: Anglo-Indian Defense, King's Indian Formation",
  "c4 Nf6 d4": "A50 - Indian Game: Normal Variation",
  "c4 c6": "A11 - English Opening: Caro-Kann Defensive System",
  "c4 c6 e4": "B10 - Caro-Kann Defense: Accelerated Panov Attack",
  "c4 c6 e4 d5": "B10 - Caro-Kann Defense: Accelerated Panov Attack",
  "c4 e6": "A13 - English Opening: Agincourt Defense",
  "c4 e6 Nc3 d5 d4": "D31 - Queen's Gambit Declined: Queen's Knight Variation",
  "c4 e6 Nf3": "A13 - English Opening: Agincourt Defense",
  "c4 e6 Nf3 d5": "A13 - English Opening: Agincourt Defense",
  "c4 e5": "A20 - English Opening: King's English Variation",
  "c4 e5 Nc3": "A21 - English Opening: King's English Variation, Reversed Sicilian",
  "c4 e5 Nc3 Nf6": "A22 - English Opening: King's English Variation, Two Knights Variation",
  "c4 e5 Nc3 Nf6 Nf3 Nc6": "A28 - English Opening: King's English Variation, Four Knights Variation",
  "c4 e5 Nc3 Nf6 Nf3 Nc6 g3": "A29 - English Opening: King's English Variation, Four Knights Variation, Fianchetto Line",
  "c4 e5 Nc3 Nf6 g3": "A22 - English Opening: Carls-Bremen System",
  "c4 e5 Nc3 Nc6": "A25 - English Opening: King's English Variation, Reversed Closed Sicilian",
  "c4 e5 Nc3 Nc6 g3 g6 Bg2 Bg7": "A25 - English Opening: King's English Variation, Taimanov Variation",
  "c4 e5 Nc3 Nc6 Nf3": "A27 - English Opening: King's English Variation, Three Knights System",
  "c4 c5": "A30 - English Opening: Symmetrical Variation",
  "c4 c5 Nc3": "A34 - English Opening: Symmetrical Variation, Normal Variation",
  "c4 c5 Nc3 Nc6": "A35 - English Opening: Symmetrical Variation, Two Knights Variation",
  "c4 c5 Nc3 Nc6 g3": "A36 - English Opening: Symmetrical Variation, Fianchetto Variation",
  "c4 g6": "A10 - English Opening: Great Snake Variation",
  "c4 f5": "A10 - English Opening: Anglo-Dutch Defense",
  Nf3: i3,
  "Nf3 Nf6": "A05 - Zukertort Opening",
  "Nf3 Nf6 c4": "A15 - English Opening: Anglo-Indian Defense, King's Knight Variation",
  "Nf3 Nf6 c4 e6 Nc3 d5 d4": "D37 - Queen's Gambit Declined: Three Knights Variation",
  "Nf3 Nf6 c4 e6 g3 d5": "A13 - English Opening: Neo-Catalan",
  "Nf3 Nf6 c4 b6": "A15 - English Opening: Anglo-Indian Defense, Queen's Indian Formation",
  "Nf3 Nf6 c4 g6": "A15 - English Opening: Anglo-Indian Defense, King's Indian Formation",
  "Nf3 Nf6 c4 g6 Nc3 Bg7 e4": "A15 - English Opening: Anglo-Indian Defense, Anti-Anti-Grünfeld",
  "Nf3 Nf6 c4 g6 Nc3 Bg7 e4 d6 d4": "E90 - King's Indian Defense: Normal Variation, Rare Defenses",
  "Nf3 Nf6 d4": "A46 - Indian Game: Knights Variation",
  "Nf3 Nf6 d4 g6": "A48 - East Indian Defense",
  "Nf3 Nf6 g3 g6": "A05 - King's Indian Attack: Symmetrical Defense",
  "Nf3 Nf6 g3 d5": "A05 - King's Indian Attack",
  "Nf3 Nf6 b3": "A05 - Zukertort Opening: Nimzo-Larsen Variation",
  "Nf3 d5": "A06 - Zukertort Opening",
  "Nf3 d5 d4": "D02 - Queen's Pawn Game: Zukertort Variation",
  "Nf3 d5 d4 Nf6": "D02 - Queen's Pawn Game: Symmetrical Variation",
  "Nf3 d5 d4 Nf6 c4 e6 Nc3": "D37 - Queen's Gambit Declined: Three Knights Variation",
  "Nf3 d5 d4 Nf6 c4 c6": "D11 - Slav Defense: Modern",
  "Nf3 d5 g3": "A07 - King's Indian Attack",
  "Nf3 d5 g3 Nf6": "A05 - King's Indian Attack",
  "Nf3 d5 c4": "A09 - Réti Opening",
  "Nf3 d5 c4 e6": "A13 - English Opening: Agincourt Defense",
  "Nf3 d5 b3": "A06 - Nimzo-Larsen Attack: Classical Variation",
  "Nf3 f5": "A04 - Zukertort Opening: Dutch Variation",
  "Nf3 c5": "A04 - Zukertort Opening: Sicilian Invitation",
  "Nf3 g6": "A04 - Zukertort Opening: Kingside Fianchetto",
  "Nf3 e6": "A04 - Zukertort Opening: Queen's Gambit Invitation",
  "Nf3 d6": "A04 - Zukertort Opening: Pirc Invitation",
  b3: l3,
  "b3 e5": "A01 - Nimzo-Larsen Attack: Modern Variation",
  "b3 e5 Bb2": "A01 - Nimzo-Larsen Attack: Modern Variation",
  "b3 e5 Bb2 Nc6": "A01 - Nimzo-Larsen Attack: Modern Variation",
  f4: o3,
  "f4 d5": "A03 - Bird Opening: Dutch Variation",
  Nc3: a3,
  b4: c3,
  g3: s3,
  "g3 g6": "A00 - Hungarian Opening: Symmetrical Variation",
  "g3 Nf6": "A00 - Hungarian Opening: Indian Defense"
}, jf = {
  e4: ["#ab95b8", "#735882"],
  // violet
  d4: ["#7eadd9", "#3376b1"],
  // sky blue
  Nf3: ["#d6a5b8", "#aa5375"],
  // pink
  c4: ["#88b7b1", "#518279"]
  // mint
}, Ll = [
  ["#70bebb", "#246e67"],
  // teal
  ["#b3bbfb", "#2e2ed8"],
  // indigo
  ["#ccb7f0", "#7942d4"]
  // bright violet
];
function d3(r, i, o, c, u) {
  let f = jf[r];
  if (f || (c.has(r) || c.set(r, c.size), f = Ll[c.get(r) % Ll.length]), u) return Al(f[1]);
  const h = i % 2 === 1 ? f[0] : f[1];
  return Al(h).darker(Math.floor((i - 1) / 2) * o);
}
const f3 = [
  "#1f77b4",
  "#aec7e8",
  "#ff7f0e",
  "#ffbb78",
  "#2ca02c",
  "#98df8a",
  "#d62728",
  "#ff9896",
  "#9467bd",
  "#c5b0d5",
  "#8c564b",
  "#c49c94",
  "#e377c2",
  "#f7b6d2",
  "#7f7f7f",
  "#c7c7c7",
  "#bcbd22",
  "#dbdb8d",
  "#17becf",
  "#9edae5"
];
function h3(r, i) {
  return (jf[r] ?? Ll[(i.get(r) ?? 0) % Ll.length])[0];
}
const p3 = u3;
function Ua(r) {
  const i = r.ancestors().reverse().slice(1).map((c) => c.data.san).join(" "), o = p3[i];
  return o ? o.replace(/^[A-E]\d\d - /, "") : void 0;
}
function g3(r) {
  let i = r.replace("Opening", "").trim();
  const o = i.indexOf(": ");
  return o >= 0 && (i = i.slice(o + 2)), i.toUpperCase();
}
function m3(r, i, o) {
  const c = (i + o) / 2, u = c > Math.PI / 2 && c < 3 * Math.PI / 2, [f, h] = u ? [o, i] : [i, o], p = o - i > Math.PI ? 1 : 0, g = (m) => `${r * Math.sin(m)},${-r * Math.cos(m)}`;
  return `M${g(f)}A${r},${r} 0 ${p} ${u ? 0 : 1} ${g(h)}`;
}
const N3 = 0.68, v3 = "0.06em";
function y3(r) {
  switch (r.stroke) {
    case "white":
      return { stroke: "#fff", width: r.strokeWidth ?? 0.5, paintOrder: "normal" };
    case "black-hairline":
      return { stroke: "#000", width: r.strokeWidth ?? 0.1, paintOrder: "stroke" };
    default:
      return { stroke: "none", width: 0, paintOrder: "stroke" };
  }
}
function Ha(r) {
  let i = r;
  for (; i.depth > 1 && i.parent; ) i = i.parent;
  return i;
}
function yl({ data: r, knobs: i, crop: o, highlight: c, className: u }) {
  const { width: f, hole: h } = i, p = Gn.useMemo(() => {
    const V = mc(r, (j) => j.children);
    return i.sum === "leaves" ? V.sum((j) => j.children.length ? 0 : j.count) : V.eachAfter((j) => {
      j.value = j.data.count;
    }), i.sort && i.sortHeight === !1 ? V.sort((j, Z) => (Z.value ?? 0) - (j.value ?? 0)) : i.sort ? V.sort((j, Z) => Z.height - j.height || (Z.value ?? 0) - (j.value ?? 0)) : V.sort(() => 0), p1().size([2 * Math.PI, f / 2 - h])(V);
  }, [r, i.sum, i.sort, i.sortHeight, f, h]), g = Gn.useMemo(() => {
    const V = [0, f / 2], j = [0, f / 2];
    if (i.radius === "log") {
      const R = Ff([1, f / 2 + 1], j);
      return (F) => R(F + 1);
    }
    const Z = i.radius === "sqrt" ? P1(V, j) : Lf(V, j);
    return (R) => Z(R);
  }, [i.radius, f]), m = /* @__PURE__ */ new Map(), v = Gn.useMemo(
    () => Rf(
      i.palette === "tableau10" ? z1 : i.palette === "category20-move" ? f3 : O1
    ),
    [i.palette]
  ), k = Gn.useMemo(
    () => U1().startAngle((V) => V.x0).endAngle((V) => V.x1).padAngle(
      (V) => i.padAngle ? Math.min((V.x1 - V.x0) / 2, i.padAngle) : 0
    ).padRadius(f / 4).innerRadius((V) => g(V.y0)).outerRadius((V) => g(Math.max(V.y0, V.y1 - i.ringGap))),
    [i.padAngle, i.ringGap, g, f]
  );
  function w(V) {
    const j = i.shading === "flat", Z = i.palette === "category20-move" ? V.data.san : Ha(V).data.san;
    if (i.palette === "poster")
      return d3(Z, V.depth, i.depthFade, m, j);
    let R = Al(v(Z)).brighter(i.brighten ?? 0.2);
    return j || (R = V.depth % 2 === 0 ? R.darker(0.5) : R.brighter(0.5)), R.darker(V.depth * i.depthFade);
  }
  const C = p.descendants().filter((V) => {
    if (!V.depth) return !1;
    const j = V.x1 - V.x0, Z = i.thresholdUnit === "fraction" ? i.nodeThreshold * 2 * Math.PI : i.nodeThreshold;
    return j > Z;
  }), $ = i.labels ?? "san", L = Gn.useId(), z = i.posterLabels === !0, q = z || $ === "san" ? [] : C.flatMap((V) => {
    const j = Ua(V);
    if (!j) return [];
    if (V.ancestors().slice(1).some((X) => Ua(X) === j)) return [];
    const R = g3(j), F = g(V.y0), Q = g(Math.max(V.y0, V.y1 - i.ringGap)), ye = (F + Q) / 2, fe = 0.85 * (ye * (V.x1 - V.x0)) / (R.length * N3), I = Math.min(16, 0.55 * (Q - F), fe);
    return I < f / 75 ? [] : [{ d: V, text: R, fontSize: I, path: m3(ye, V.x0, V.x1) }];
  }), oe = new Set(q.map((V) => V.d)), ae = !z && i.showSan && $ !== "names" ? C.filter((V) => {
    if (oe.has(V)) return !1;
    const j = V.x1 - V.x0, Z = i.thresholdUnit === "fraction" ? i.sanThreshold * 2 * Math.PI : i.sanThreshold;
    return j > Z;
  }) : [], ne = g(p.y1), ue = y3(i), ie = z && $ !== "san" ? Y1 : 0, T = f / 2 + ie, b = o ? `${o.x} ${o.y} ${o.size} ${o.size}` : `${-T} ${-T} ${2 * T} ${2 * T}`;
  return /* @__PURE__ */ te.jsxs(
    "svg",
    {
      viewBox: b,
      role: "img",
      className: u ?? "openings-sunburst",
      children: [
        /* @__PURE__ */ te.jsxs("g", { children: [
          C.map((V) => {
            const j = w(V), Z = V.ancestors().map((R) => R.data.san).join(" ");
            return /* @__PURE__ */ te.jsx(
              "path",
              {
                d: k(V) ?? void 0,
                fill: j.toString(),
                stroke: ue.stroke,
                strokeWidth: ue.width,
                paintOrder: ue.paintOrder
              },
              Z
            );
          }),
          q.map(({ d: V, text: j, fontSize: Z, path: R }, F) => {
            const Q = `${L}-name-${F}`;
            return /* @__PURE__ */ te.jsxs("g", { children: [
              /* @__PURE__ */ te.jsx("path", { id: Q, d: R, fill: "none" }),
              /* @__PURE__ */ te.jsx(
                "text",
                {
                  fontSize: Z,
                  fontFamily: "sans-serif",
                  letterSpacing: v3,
                  fill: w(V).darker(0.7).toString(),
                  opacity: 0.7,
                  dominantBaseline: "central",
                  textAnchor: "middle",
                  children: /* @__PURE__ */ te.jsx("textPath", { href: `#${Q}`, startOffset: "50%", children: j })
                }
              )
            ] }, Q);
          }),
          ae.map((V) => {
            const j = (V.x0 + V.x1) / 2 * 180 / Math.PI, Z = g((V.y0 + V.y1) / 2), R = j - 90, F = V.ancestors().map((Q) => Q.data.san).join(" ");
            return /* @__PURE__ */ te.jsx(
              "text",
              {
                textAnchor: "middle",
                fontSize: i.sanSize ?? (i.width < 600 ? 10 : 12),
                fontFamily: "sans-serif",
                fill: i.sanColor ?? "white",
                transform: `rotate(${R}) translate(${Z},0) rotate(${-R})`,
                dy: "0.35em",
                children: V.data.san
              },
              F
            );
          })
        ] }),
        z && /* @__PURE__ */ te.jsx(
          e3,
          {
            nodes: C,
            width: f,
            labels: $,
            r: g,
            ringGap: i.ringGap,
            colorOf: w,
            tintOf: (V) => i.palette === "poster" ? h3(Ha(V).data.san, m) : w(Ha(V)).brighter(0.5).toString(),
            nameOf: Ua,
            idPrefix: L
          }
        ),
        i.center === "board-disk" && ne > 0 && /* @__PURE__ */ te.jsx(x3, { size: ne * 1.6 }),
        c && /* @__PURE__ */ te.jsx(
          "rect",
          {
            x: c.x,
            y: c.y,
            width: c.size,
            height: c.size,
            fill: "none",
            stroke: "#fff",
            strokeWidth: 1.5,
            strokeDasharray: "4 3",
            pointerEvents: "none"
          }
        )
      ]
    }
  );
}
function x3({ size: r }) {
  const i = r / 8;
  return /* @__PURE__ */ te.jsx("g", { transform: `translate(${-r / 2},${-r / 2})`, pointerEvents: "none", children: Array.from({ length: 64 }, (o, c) => {
    const u = Math.floor(c / 8), f = c % 8;
    return /* @__PURE__ */ te.jsx(
      "rect",
      {
        x: f * i,
        y: u * i,
        width: i,
        height: i,
        fill: (u + f) % 2 ? "#b58863" : "#f0d9b5"
      },
      c
    );
  }) });
}
const w3 = 2197113, S3 = "start", k3 = /* @__PURE__ */ JSON.parse('[{"count":1051522,"san":"e4","children":[{"count":76139,"san":"c6","children":[{"count":61565,"san":"d4","children":[{"count":59388,"san":"d5","children":[{"count":18428,"san":"Nc3","children":[{"count":17125,"san":"dxe4","children":[{"count":16947,"san":"Nxe4","children":[{"count":4655,"san":"Nd7","children":[]},{"count":8734,"san":"Bf5","children":[{"count":8288,"san":"Ng3","children":[{"count":8258,"san":"Bg6","children":[]}]}]},{"count":3439,"san":"Nf6","children":[{"count":2926,"san":"Nxf6+","children":[]}]}]}]}]},{"count":15596,"san":"exd5","children":[{"count":15489,"san":"cxd5","children":[{"count":9801,"san":"c4","children":[{"count":9213,"san":"Nf6","children":[{"count":8908,"san":"Nc3","children":[{"count":4807,"san":"e6","children":[]},{"count":2347,"san":"Nc6","children":[]}]}]}]},{"count":4527,"san":"Bd3","children":[{"count":3578,"san":"Nc6","children":[{"count":3427,"san":"c3","children":[]}]}]}]}]},{"count":14661,"san":"e5","children":[{"count":12384,"san":"Bf5","children":[{"count":2831,"san":"Nc3","children":[]},{"count":4227,"san":"Nf3","children":[{"count":4174,"san":"e6","children":[{"count":3614,"san":"Be2","children":[]}]}]}]}]},{"count":8683,"san":"Nd2","children":[{"count":8068,"san":"dxe4","children":[{"count":8068,"san":"Nxe4","children":[{"count":3901,"san":"Bf5","children":[{"count":3653,"san":"Ng3","children":[{"count":3645,"san":"Bg6","children":[]}]}]},{"count":2568,"san":"Nd7","children":[]}]}]}]}]}]},{"count":5057,"san":"Nc3","children":[{"count":4851,"san":"d5","children":[{"count":3437,"san":"Nf3","children":[]}]}]},{"count":2679,"san":"d3","children":[{"count":2342,"san":"d5","children":[{"count":2235,"san":"Nd2","children":[]}]}]},{"count":4019,"san":"c4","children":[{"count":3112,"san":"d5","children":[]}]}]},{"count":26044,"san":"Nf6","children":[{"count":20284,"san":"e5","children":[{"count":20075,"san":"Nd5","children":[{"count":2846,"san":"c4","children":[{"count":2833,"san":"Nb6","children":[]}]},{"count":15585,"san":"d4","children":[{"count":15304,"san":"d6","children":[{"count":9446,"san":"Nf3","children":[{"count":4140,"san":"Bg4","children":[{"count":3800,"san":"Be2","children":[]}]},{"count":2308,"san":"g6","children":[]}]},{"count":4660,"san":"c4","children":[{"count":4655,"san":"Nb6","children":[{"count":2906,"san":"exd6","children":[]}]}]}]}]}]}]},{"count":4895,"san":"Nc3","children":[{"count":3452,"san":"d5","children":[]}]}]},{"count":32751,"san":"g6","children":[{"count":30215,"san":"d4","children":[{"count":26550,"san":"Bg7","children":[{"count":16645,"san":"Nc3","children":[{"count":10447,"san":"d6","children":[{"count":3607,"san":"Be3","children":[]},{"count":3208,"san":"f4","children":[]}]},{"count":4892,"san":"c6","children":[]}]},{"count":5031,"san":"Nf3","children":[{"count":3971,"san":"d6","children":[]}]}]}]}]},{"count":141803,"san":"e6","children":[{"count":121855,"san":"d4","children":[{"count":119291,"san":"d5","children":[{"count":16546,"san":"e5","children":[{"count":15692,"san":"c5","children":[{"count":13956,"san":"c3","children":[{"count":2927,"san":"Qb6","children":[{"count":2687,"san":"Nf3","children":[]}]},{"count":10267,"san":"Nc6","children":[{"count":9667,"san":"Nf3","children":[{"count":5009,"san":"Qb6","children":[]},{"count":3301,"san":"Bd7","children":[]}]}]}]}]}]},{"count":36966,"san":"Nd2","children":[{"count":10841,"san":"c5","children":[{"count":6523,"san":"exd5","children":[{"count":2996,"san":"Qxd5","children":[{"count":2656,"san":"Ngf3","children":[{"count":2520,"san":"cxd4","children":[]}]}]},{"count":3507,"san":"exd5","children":[{"count":2225,"san":"Ngf3","children":[]}]}]},{"count":3750,"san":"Ngf3","children":[]}]},{"count":14529,"san":"Nf6","children":[{"count":13602,"san":"e5","children":[{"count":13096,"san":"Nfd7","children":[{"count":2760,"san":"c3","children":[{"count":2714,"san":"c5","children":[]}]},{"count":2558,"san":"f4","children":[{"count":2525,"san":"c5","children":[]}]},{"count":7170,"san":"Bd3","children":[{"count":7002,"san":"c5","children":[]}]}]}]}]},{"count":3637,"san":"dxe4","children":[{"count":3636,"san":"Nxe4","children":[]}]},{"count":2717,"san":"Be7","children":[]},{"count":2785,"san":"Nc6","children":[{"count":2348,"san":"Ngf3","children":[{"count":2205,"san":"Nf6","children":[]}]}]}]},{"count":55239,"san":"Nc3","children":[{"count":28980,"san":"Bb4","children":[{"count":21760,"san":"e5","children":[{"count":15003,"san":"c5","children":[{"count":12468,"san":"a3","children":[{"count":10522,"san":"Bxc3+","children":[]}]}]},{"count":3857,"san":"Ne7","children":[{"count":2874,"san":"a3","children":[{"count":2844,"san":"Bxc3+","children":[]}]}]}]},{"count":2414,"san":"Ne2","children":[]}]},{"count":4799,"san":"dxe4","children":[{"count":4778,"san":"Nxe4","children":[{"count":2682,"san":"Nd7","children":[{"count":2239,"san":"Nf3","children":[]}]}]}]},{"count":19501,"san":"Nf6","children":[{"count":11416,"san":"Bg5","children":[{"count":4634,"san":"Be7","children":[{"count":4245,"san":"e5","children":[{"count":3941,"san":"Nfd7","children":[]}]}]},{"count":3110,"san":"Bb4","children":[{"count":2587,"san":"e5","children":[{"count":2575,"san":"h6","children":[]}]}]},{"count":3645,"san":"dxe4","children":[{"count":3555,"san":"Nxe4","children":[{"count":2389,"san":"Be7","children":[]}]}]}]},{"count":7366,"san":"e5","children":[{"count":7171,"san":"Nfd7","children":[{"count":5804,"san":"f4","children":[{"count":5715,"san":"c5","children":[]}]}]}]}]}]},{"count":9814,"san":"exd5","children":[{"count":9704,"san":"exd5","children":[{"count":3812,"san":"Nf3","children":[]},{"count":3927,"san":"Bd3","children":[]}]}]}]}]},{"count":9956,"san":"d3","children":[{"count":7838,"san":"d5","children":[{"count":6733,"san":"Nd2","children":[{"count":3780,"san":"Nf6","children":[{"count":3011,"san":"Ngf3","children":[]}]},{"count":2351,"san":"c5","children":[]}]}]}]},{"count":3976,"san":"Nf3","children":[{"count":3555,"san":"d5","children":[]}]}]},{"count":232240,"san":"e5","children":[{"count":196510,"san":"Nf3","children":[{"count":21653,"san":"Nf6","children":[{"count":3961,"san":"d4","children":[{"count":3083,"san":"Nxe4","children":[{"count":2611,"san":"Bd3","children":[{"count":2379,"san":"d5","children":[]}]}]}]},{"count":12396,"san":"Nxe5","children":[{"count":11916,"san":"d6","children":[{"count":11152,"san":"Nf3","children":[{"count":11141,"san":"Nxe4","children":[{"count":5954,"san":"d4","children":[{"count":5607,"san":"d5","children":[]}]},{"count":2372,"san":"Nc3","children":[]}]}]}]}]},{"count":4099,"san":"Nc3","children":[{"count":2454,"san":"Nc6","children":[]}]}]},{"count":161359,"san":"Nc6","children":[{"count":96748,"san":"Bb5","children":[{"count":69150,"san":"a6","children":[{"count":59965,"san":"Ba4","children":[{"count":51609,"san":"Nf6","children":[{"count":42751,"san":"O-O","children":[{"count":27842,"san":"Be7","children":[]},{"count":5553,"san":"Nxe4","children":[]},{"count":7592,"san":"b5","children":[]}]},{"count":3392,"san":"d3","children":[]},{"count":2272,"san":"Qe2","children":[]}]},{"count":5726,"san":"d6","children":[]}]},{"count":9108,"san":"Bxc6","children":[{"count":8892,"san":"dxc6","children":[{"count":6607,"san":"O-O","children":[{"count":2424,"san":"f6","children":[]}]}]}]}]},{"count":11935,"san":"Nf6","children":[{"count":8040,"san":"O-O","children":[{"count":5646,"san":"Nxe4","children":[{"count":4604,"san":"d4","children":[{"count":3534,"san":"Nd6","children":[]}]}]}]},{"count":2403,"san":"d3","children":[]}]},{"count":4754,"san":"f5","children":[{"count":2484,"san":"Nc3","children":[]}]},{"count":3274,"san":"Bc5","children":[]}]},{"count":30899,"san":"Bc4","children":[{"count":14179,"san":"Bc5","children":[{"count":2469,"san":"b4","children":[]},{"count":7221,"san":"c3","children":[{"count":6022,"san":"Nf6","children":[{"count":3433,"san":"d3","children":[]}]}]}]},{"count":13752,"san":"Nf6","children":[{"count":3692,"san":"Ng5","children":[{"count":3002,"san":"d5","children":[{"count":2995,"san":"exd5","children":[]}]}]},{"count":6725,"san":"d3","children":[{"count":3346,"san":"Be7","children":[{"count":2261,"san":"O-O","children":[]}]},{"count":2267,"san":"Bc5","children":[]}]}]}]},{"count":20255,"san":"d4","children":[{"count":19655,"san":"exd4","children":[{"count":14078,"san":"Nxd4","children":[{"count":6240,"san":"Bc5","children":[{"count":3089,"san":"Be3","children":[{"count":2704,"san":"Qf6","children":[]}]}]},{"count":5020,"san":"Nf6","children":[{"count":3879,"san":"Nxc6","children":[{"count":3859,"san":"bxc6","children":[]}]}]}]},{"count":4121,"san":"Bc4","children":[]}]}]},{"count":10555,"san":"Nc3","children":[{"count":8868,"san":"Nf6","children":[{"count":3205,"san":"d4","children":[{"count":2804,"san":"exd4","children":[{"count":2333,"san":"Nxd4","children":[]}]}]},{"count":3805,"san":"Bb5","children":[]}]}]}]},{"count":8457,"san":"d6","children":[{"count":6617,"san":"d4","children":[{"count":3375,"san":"exd4","children":[{"count":2746,"san":"Nxd4","children":[]}]}]}]},{"count":3261,"san":"f5","children":[]}]},{"count":11606,"san":"f4","children":[{"count":7144,"san":"exf4","children":[{"count":5477,"san":"Nf3","children":[]}]}]},{"count":3733,"san":"d4","children":[{"count":3474,"san":"exd4","children":[]}]},{"count":10391,"san":"Nc3","children":[{"count":2491,"san":"Nc6","children":[]},{"count":6670,"san":"Nf6","children":[{"count":2240,"san":"f4","children":[]}]}]},{"count":9145,"san":"Bc4","children":[{"count":6776,"san":"Nf6","children":[{"count":4990,"san":"d3","children":[]}]}]}]},{"count":454574,"san":"c5","children":[{"count":347334,"san":"Nf3","children":[{"count":86338,"san":"e6","children":[{"count":5707,"san":"c3","children":[{"count":2408,"san":"Nf6","children":[]},{"count":2831,"san":"d5","children":[]}]},{"count":63801,"san":"d4","children":[{"count":63631,"san":"cxd4","children":[{"count":63332,"san":"Nxd4","children":[{"count":17799,"san":"Nc6","children":[{"count":13811,"san":"Nc3","children":[{"count":8433,"san":"Qc7","children":[]},{"count":3174,"san":"a6","children":[]}]},{"count":2314,"san":"Nb5","children":[]}]},{"count":27159,"san":"a6","children":[{"count":12137,"san":"Bd3","children":[{"count":3505,"san":"Bc5","children":[]},{"count":4050,"san":"Nf6","children":[]}]},{"count":10329,"san":"Nc3","children":[{"count":6954,"san":"Qc7","children":[]},{"count":2318,"san":"b5","children":[]}]},{"count":2690,"san":"c4","children":[]}]},{"count":16965,"san":"Nf6","children":[{"count":15267,"san":"Nc3","children":[{"count":3869,"san":"Nc6","children":[]},{"count":10089,"san":"d6","children":[]}]}]}]}]}]},{"count":5983,"san":"Nc3","children":[{"count":2969,"san":"a6","children":[]}]},{"count":5197,"san":"d3","children":[{"count":3651,"san":"Nc6","children":[{"count":3268,"san":"g3","children":[]}]}]},{"count":2412,"san":"b3","children":[]}]},{"count":5084,"san":"a6","children":[]},{"count":101269,"san":"Nc6","children":[{"count":66796,"san":"d4","children":[{"count":66650,"san":"cxd4","children":[{"count":66252,"san":"Nxd4","children":[{"count":2966,"san":"Qc7","children":[{"count":2393,"san":"Nc3","children":[{"count":2345,"san":"e6","children":[]}]}]},{"count":34744,"san":"Nf6","children":[{"count":34505,"san":"Nc3","children":[{"count":15607,"san":"d6","children":[]},{"count":15141,"san":"e5","children":[]},{"count":2259,"san":"e6","children":[]}]}]},{"count":12770,"san":"g6","children":[{"count":5519,"san":"Nc3","children":[{"count":5493,"san":"Bg7","children":[]}]},{"count":5372,"san":"c4","children":[{"count":3276,"san":"Bg7","children":[]}]}]},{"count":2655,"san":"Qb6","children":[{"count":2387,"san":"Nb3","children":[{"count":2243,"san":"Nf6","children":[]}]}]},{"count":4375,"san":"e6","children":[{"count":3241,"san":"Nc3","children":[]}]},{"count":7286,"san":"e5","children":[{"count":6530,"san":"Nb5","children":[{"count":4937,"san":"d6","children":[]}]}]}]}]}]},{"count":19959,"san":"Bb5","children":[{"count":9813,"san":"g6","children":[{"count":3183,"san":"Bxc6","children":[{"count":2311,"san":"dxc6","children":[]}]},{"count":5984,"san":"O-O","children":[{"count":5898,"san":"Bg7","children":[{"count":2387,"san":"Re1","children":[]},{"count":2773,"san":"c3","children":[]}]}]}]},{"count":4363,"san":"e6","children":[{"count":2724,"san":"O-O","children":[{"count":2589,"san":"Nge7","children":[]}]}]},{"count":2844,"san":"d6","children":[]}]},{"count":3333,"san":"c3","children":[]},{"count":7777,"san":"Nc3","children":[]}]},{"count":143298,"san":"d6","children":[{"count":115393,"san":"d4","children":[{"count":110566,"san":"cxd4","children":[{"count":105461,"san":"Nxd4","children":[{"count":103951,"san":"Nf6","children":[{"count":101346,"san":"Nc3","children":[{"count":19599,"san":"g6","children":[]},{"count":58355,"san":"a6","children":[]},{"count":5860,"san":"e6","children":[]},{"count":16384,"san":"Nc6","children":[]}]}]}]},{"count":4815,"san":"Qxd4","children":[{"count":2718,"san":"Nc6","children":[{"count":2687,"san":"Bb5","children":[{"count":2349,"san":"Bd7","children":[]}]}]}]}]},{"count":4793,"san":"Nf6","children":[{"count":4510,"san":"Nc3","children":[{"count":4492,"san":"cxd4","children":[{"count":4299,"san":"Nxd4","children":[{"count":2303,"san":"a6","children":[]}]}]}]}]}]},{"count":13939,"san":"Bb5+","children":[{"count":8159,"san":"Bd7","children":[{"count":7599,"san":"Bxd7+","children":[{"count":5906,"san":"Qxd7","children":[{"count":3561,"san":"O-O","children":[{"count":2241,"san":"Nc6","children":[]}]},{"count":2213,"san":"c4","children":[]}]}]}]},{"count":3420,"san":"Nd7","children":[]},{"count":2357,"san":"Nc6","children":[]}]},{"count":6561,"san":"c3","children":[{"count":6135,"san":"Nf6","children":[{"count":2719,"san":"Be2","children":[]}]}]},{"count":2686,"san":"Nc3","children":[]}]},{"count":3192,"san":"Nf6","children":[]},{"count":7443,"san":"g6","children":[{"count":5272,"san":"d4","children":[{"count":3238,"san":"cxd4","children":[{"count":2555,"san":"Nxd4","children":[]}]}]}]}]},{"count":34855,"san":"c3","children":[{"count":12389,"san":"Nf6","children":[{"count":12095,"san":"e5","children":[{"count":12083,"san":"Nd5","children":[{"count":8765,"san":"d4","children":[{"count":8313,"san":"cxd4","children":[{"count":5153,"san":"Nf3","children":[{"count":2567,"san":"Nc6","children":[]}]}]}]},{"count":2674,"san":"Nf3","children":[]}]}]}]},{"count":12281,"san":"d5","children":[{"count":12053,"san":"exd5","children":[{"count":11889,"san":"Qxd5","children":[{"count":11376,"san":"d4","children":[{"count":5501,"san":"Nf6","children":[{"count":5205,"san":"Nf3","children":[{"count":2371,"san":"Bg4","children":[]}]}]},{"count":2250,"san":"Nc6","children":[]}]}]}]}]},{"count":3405,"san":"e6","children":[{"count":3033,"san":"d4","children":[{"count":2614,"san":"d5","children":[]}]}]},{"count":3198,"san":"d6","children":[{"count":3015,"san":"d4","children":[{"count":2304,"san":"Nf6","children":[]}]}]}]},{"count":45251,"san":"Nc3","children":[{"count":28009,"san":"Nc6","children":[{"count":6624,"san":"f4","children":[{"count":3959,"san":"g6","children":[{"count":3772,"san":"Nf3","children":[{"count":3748,"san":"Bg7","children":[]}]}]}]},{"count":12327,"san":"g3","children":[{"count":10949,"san":"g6","children":[{"count":10455,"san":"Bg2","children":[{"count":10370,"san":"Bg7","children":[{"count":8892,"san":"d3","children":[{"count":6087,"san":"d6","children":[]}]}]}]}]}]},{"count":2352,"san":"Nge2","children":[]},{"count":2776,"san":"Nf3","children":[]},{"count":3164,"san":"Bb5","children":[]}]},{"count":7137,"san":"e6","children":[{"count":2332,"san":"g3","children":[]}]},{"count":6425,"san":"d6","children":[{"count":2518,"san":"f4","children":[]}]}]},{"count":7297,"san":"d4","children":[{"count":7052,"san":"cxd4","children":[{"count":6170,"san":"c3","children":[{"count":3415,"san":"dxc3","children":[{"count":3375,"san":"Nxc3","children":[{"count":2291,"san":"Nc6","children":[]}]}]}]}]}]},{"count":4423,"san":"f4","children":[]},{"count":2696,"san":"b3","children":[]},{"count":3235,"san":"d3","children":[{"count":2275,"san":"Nc6","children":[]}]},{"count":2327,"san":"Ne2","children":[]}]},{"count":7501,"san":"Nc6","children":[{"count":3688,"san":"Nf3","children":[]},{"count":2782,"san":"d4","children":[]}]},{"count":45929,"san":"d6","children":[{"count":42382,"san":"d4","children":[{"count":35083,"san":"Nf6","children":[{"count":32169,"san":"Nc3","children":[{"count":20601,"san":"g6","children":[{"count":5823,"san":"f4","children":[{"count":5689,"san":"Bg7","children":[{"count":5311,"san":"Nf3","children":[{"count":3608,"san":"O-O","children":[]}]}]}]},{"count":4570,"san":"Nf3","children":[{"count":4457,"san":"Bg7","children":[{"count":2556,"san":"Be2","children":[{"count":2330,"san":"O-O","children":[]}]}]}]},{"count":2988,"san":"Be3","children":[]}]},{"count":3777,"san":"c6","children":[]},{"count":5688,"san":"e5","children":[{"count":3766,"san":"Nf3","children":[{"count":3512,"san":"Nbd7","children":[{"count":2988,"san":"Bc4","children":[{"count":2950,"san":"Be7","children":[]}]}]}]}]}]}]},{"count":5949,"san":"g6","children":[{"count":3718,"san":"Nc3","children":[{"count":3183,"san":"Bg7","children":[]}]}]}]}]},{"count":31014,"san":"d5","children":[{"count":29345,"san":"exd5","children":[{"count":11382,"san":"Nf6","children":[{"count":5806,"san":"d4","children":[{"count":4272,"san":"Nxd5","children":[]}]}]},{"count":17835,"san":"Qxd5","children":[{"count":16184,"san":"Nc3","children":[{"count":10268,"san":"Qa5","children":[{"count":7621,"san":"d4","children":[{"count":5214,"san":"Nf6","children":[{"count":3350,"san":"Nf3","children":[]}]}]}]},{"count":4590,"san":"Qd6","children":[{"count":3780,"san":"d4","children":[{"count":3300,"san":"Nf6","children":[{"count":2347,"san":"Nf3","children":[]}]}]}]}]}]}]}]},{"count":2620,"san":"b6","children":[{"count":2244,"san":"d4","children":[]}]}]},{"count":750505,"san":"d4","children":[{"count":435756,"san":"Nf6","children":[{"count":299965,"san":"c4","children":[{"count":130778,"san":"e6","children":[{"count":54321,"san":"Nf3","children":[{"count":5834,"san":"c5","children":[{"count":4201,"san":"d5","children":[{"count":2656,"san":"exd5","children":[{"count":2656,"san":"cxd5","children":[{"count":2282,"san":"d6","children":[]}]}]}]}]},{"count":24442,"san":"b6","children":[{"count":12844,"san":"g3","children":[{"count":7100,"san":"Ba6","children":[{"count":3762,"san":"b3","children":[{"count":2289,"san":"Bb4+","children":[]}]}]},{"count":5021,"san":"Bb7","children":[{"count":5004,"san":"Bg2","children":[{"count":3514,"san":"Be7","children":[]}]}]}]},{"count":5196,"san":"a3","children":[{"count":3049,"san":"Bb7","children":[{"count":3024,"san":"Nc3","children":[{"count":2316,"san":"d5","children":[]}]}]}]},{"count":3981,"san":"Nc3","children":[{"count":2329,"san":"Bb7","children":[]}]}]},{"count":9661,"san":"Bb4+","children":[{"count":3345,"san":"Nbd2","children":[]},{"count":5937,"san":"Bd2","children":[{"count":2880,"san":"Qe7","children":[]}]}]},{"count":13852,"san":"d5","children":[{"count":9858,"san":"Nc3","children":[{"count":3339,"san":"Be7","children":[]}]}]}]},{"count":63631,"san":"Nc3","children":[{"count":51365,"san":"Bb4","children":[{"count":20312,"san":"e3","children":[{"count":6122,"san":"c5","children":[{"count":3396,"san":"Bd3","children":[]}]},{"count":3736,"san":"b6","children":[]},{"count":9149,"san":"O-O","children":[{"count":6050,"san":"Bd3","children":[{"count":3946,"san":"d5","children":[]}]},{"count":2290,"san":"Ne2","children":[]}]}]},{"count":2384,"san":"Bg5","children":[]},{"count":3169,"san":"f3","children":[]},{"count":2205,"san":"a3","children":[]},{"count":16755,"san":"Qc2","children":[{"count":7563,"san":"O-O","children":[{"count":5399,"san":"a3","children":[{"count":5375,"san":"Bxc3+","children":[]}]}]},{"count":4435,"san":"c5","children":[{"count":3980,"san":"dxc5","children":[]}]},{"count":2825,"san":"d5","children":[]}]},{"count":4147,"san":"Nf3","children":[]}]},{"count":2580,"san":"c5","children":[{"count":2241,"san":"d5","children":[]}]},{"count":9058,"san":"d5","children":[{"count":3763,"san":"Bg5","children":[{"count":2305,"san":"Be7","children":[]}]},{"count":2943,"san":"cxd5","children":[{"count":2740,"san":"exd5","children":[{"count":2641,"san":"Bg5","children":[]}]}]}]}]},{"count":11808,"san":"g3","children":[{"count":6210,"san":"d5","children":[{"count":3753,"san":"Bg2","children":[]},{"count":2429,"san":"Nf3","children":[]}]},{"count":2623,"san":"c5","children":[]},{"count":2727,"san":"Bb4+","children":[{"count":2304,"san":"Bd2","children":[]}]}]}]},{"count":109513,"san":"g6","children":[{"count":92209,"san":"Nc3","children":[{"count":27973,"san":"d5","children":[{"count":2586,"san":"Bf4","children":[{"count":2497,"san":"Bg7","children":[]}]},{"count":12877,"san":"cxd5","children":[{"count":12873,"san":"Nxd5","children":[{"count":10877,"san":"e4","children":[{"count":10767,"san":"Nxc3","children":[]}]}]}]},{"count":9073,"san":"Nf3","children":[{"count":9033,"san":"Bg7","children":[{"count":2614,"san":"Qb3","children":[{"count":2448,"san":"dxc4","children":[]}]}]}]}]},{"count":63592,"san":"Bg7","children":[{"count":56984,"san":"e4","children":[{"count":52063,"san":"d6","children":[{"count":11209,"san":"Be2","children":[{"count":10846,"san":"O-O","children":[]}]},{"count":16826,"san":"Nf3","children":[{"count":16561,"san":"O-O","children":[]}]},{"count":13350,"san":"f3","children":[{"count":11608,"san":"O-O","children":[]}]},{"count":4226,"san":"f4","children":[{"count":3463,"san":"O-O","children":[]}]},{"count":2332,"san":"h3","children":[]}]},{"count":4893,"san":"O-O","children":[]}]},{"count":4144,"san":"Nf3","children":[{"count":2898,"san":"O-O","children":[]}]}]}]},{"count":7584,"san":"Nf3","children":[{"count":7429,"san":"Bg7","children":[{"count":5868,"san":"g3","children":[{"count":4236,"san":"O-O","children":[{"count":4216,"san":"Bg2","children":[{"count":2962,"san":"d6","children":[]}]}]}]}]}]},{"count":7945,"san":"g3","children":[{"count":6616,"san":"Bg7","children":[{"count":6559,"san":"Bg2","children":[{"count":4174,"san":"O-O","children":[{"count":2722,"san":"Nc3","children":[{"count":2443,"san":"d6","children":[]}]}]}]}]}]}]},{"count":37895,"san":"c5","children":[{"count":32464,"san":"d5","children":[{"count":3030,"san":"e5","children":[{"count":2962,"san":"Nc3","children":[{"count":2954,"san":"d6","children":[{"count":2778,"san":"e4","children":[]}]}]}]},{"count":15641,"san":"b5","children":[{"count":11611,"san":"cxb5","children":[{"count":11458,"san":"a6","children":[{"count":5485,"san":"bxa6","children":[{"count":2731,"san":"g6","children":[]},{"count":2566,"san":"Bxa6","children":[]}]},{"count":2309,"san":"b6","children":[]}]}]}]},{"count":8554,"san":"e6","children":[{"count":8315,"san":"Nc3","children":[{"count":8225,"san":"exd5","children":[{"count":8150,"san":"cxd5","children":[{"count":7575,"san":"d6","children":[]}]}]}]}]},{"count":2606,"san":"g6","children":[{"count":2524,"san":"Nc3","children":[]}]}]},{"count":3609,"san":"Nf3","children":[{"count":2529,"san":"cxd4","children":[{"count":2515,"san":"Nxd4","children":[]}]}]}]},{"count":6523,"san":"e5","children":[{"count":5966,"san":"dxe5","children":[{"count":4903,"san":"Ng4","children":[]}]}]},{"count":9514,"san":"d6","children":[{"count":6933,"san":"Nc3","children":[{"count":3177,"san":"Nbd7","children":[]}]},{"count":2402,"san":"Nf3","children":[]}]},{"count":2570,"san":"c6","children":[]}]},{"count":103612,"san":"Nf3","children":[{"count":34154,"san":"e6","children":[{"count":5558,"san":"Bg5","children":[{"count":2234,"san":"c5","children":[]}]},{"count":5218,"san":"e3","children":[{"count":2753,"san":"b6","children":[{"count":2433,"san":"Bd3","children":[{"count":2342,"san":"Bb7","children":[]}]}]}]},{"count":15354,"san":"c4","children":[{"count":3298,"san":"Bb4+","children":[]},{"count":2391,"san":"c5","children":[]},{"count":6608,"san":"b6","children":[{"count":3233,"san":"g3","children":[]}]},{"count":2743,"san":"d5","children":[]}]},{"count":2390,"san":"Bf4","children":[]},{"count":4742,"san":"g3","children":[]}]},{"count":9822,"san":"c5","children":[{"count":4817,"san":"d5","children":[]}]},{"count":9645,"san":"d5","children":[{"count":6111,"san":"c4","children":[{"count":3547,"san":"e6","children":[{"count":2229,"san":"Nc3","children":[]}]}]}]},{"count":42686,"san":"g6","children":[{"count":18449,"san":"c4","children":[{"count":16916,"san":"Bg7","children":[{"count":12824,"san":"Nc3","children":[{"count":7466,"san":"O-O","children":[{"count":5694,"san":"e4","children":[{"count":5577,"san":"d6","children":[]}]}]},{"count":3271,"san":"d5","children":[]}]},{"count":3978,"san":"g3","children":[{"count":3018,"san":"O-O","children":[{"count":2999,"san":"Bg2","children":[]}]}]}]}]},{"count":6483,"san":"Bg5","children":[{"count":6058,"san":"Bg7","children":[{"count":4837,"san":"Nbd2","children":[]}]}]},{"count":7651,"san":"g3","children":[{"count":7178,"san":"Bg7","children":[{"count":6981,"san":"Bg2","children":[{"count":5748,"san":"O-O","children":[{"count":4821,"san":"O-O","children":[{"count":3402,"san":"d6","children":[]}]}]}]}]}]},{"count":4485,"san":"Bf4","children":[{"count":4063,"san":"Bg7","children":[{"count":3058,"san":"e3","children":[]}]}]},{"count":2405,"san":"Nc3","children":[]}]},{"count":2757,"san":"b6","children":[]},{"count":3725,"san":"d6","children":[]}]},{"count":16403,"san":"Bg5","children":[{"count":5311,"san":"Ne4","children":[{"count":3784,"san":"Bf4","children":[]}]},{"count":2819,"san":"d5","children":[]},{"count":4207,"san":"e6","children":[{"count":2345,"san":"e4","children":[]}]}]},{"count":2767,"san":"g3","children":[]},{"count":7347,"san":"Nc3","children":[{"count":5307,"san":"d5","children":[{"count":3746,"san":"Bg5","children":[]}]}]}]},{"count":34034,"san":"e6","children":[{"count":8596,"san":"Nf3","children":[{"count":3125,"san":"Nf6","children":[]},{"count":2298,"san":"f5","children":[]}]},{"count":20268,"san":"c4","children":[{"count":5256,"san":"f5","children":[{"count":2810,"san":"g3","children":[{"count":2723,"san":"Nf6","children":[{"count":2683,"san":"Bg2","children":[]}]}]}]},{"count":2288,"san":"Bb4+","children":[]},{"count":2497,"san":"b6","children":[]},{"count":2854,"san":"d5","children":[]},{"count":6390,"san":"Nf6","children":[{"count":2623,"san":"Nf3","children":[]},{"count":3180,"san":"Nc3","children":[{"count":2456,"san":"Bb4","children":[]}]}]}]},{"count":3664,"san":"e4","children":[{"count":3157,"san":"d5","children":[]}]}]},{"count":198775,"san":"d5","children":[{"count":44581,"san":"Nf3","children":[{"count":29537,"san":"Nf6","children":[{"count":17005,"san":"c4","children":[{"count":6194,"san":"e6","children":[{"count":3869,"san":"Nc3","children":[]}]},{"count":7895,"san":"c6","children":[{"count":4032,"san":"Nc3","children":[]}]},{"count":2787,"san":"dxc4","children":[]}]},{"count":3552,"san":"Bf4","children":[]},{"count":4169,"san":"e3","children":[]}]},{"count":4563,"san":"e6","children":[{"count":2292,"san":"c4","children":[]}]},{"count":4656,"san":"c6","children":[{"count":2367,"san":"c4","children":[]}]}]},{"count":138986,"san":"c4","children":[{"count":17114,"san":"dxc4","children":[{"count":9525,"san":"Nf3","children":[{"count":6393,"san":"Nf6","children":[{"count":4917,"san":"e3","children":[{"count":3334,"san":"e6","children":[{"count":3321,"san":"Bxc4","children":[{"count":2526,"san":"c5","children":[]}]}]}]}]}]},{"count":3054,"san":"e3","children":[]},{"count":3445,"san":"e4","children":[]}]},{"count":53549,"san":"e6","children":[{"count":36353,"san":"Nc3","children":[{"count":7384,"san":"c6","children":[{"count":2759,"san":"e3","children":[]},{"count":2668,"san":"Nf3","children":[]}]},{"count":4430,"san":"c5","children":[{"count":3478,"san":"cxd5","children":[{"count":2663,"san":"exd5","children":[{"count":2458,"san":"Nf3","children":[{"count":2368,"san":"Nc6","children":[]}]}]}]}]},{"count":17309,"san":"Nf6","children":[{"count":3581,"san":"Nf3","children":[]},{"count":8169,"san":"Bg5","children":[{"count":4944,"san":"Be7","children":[{"count":3487,"san":"e3","children":[]}]},{"count":2327,"san":"Nbd7","children":[]}]},{"count":5108,"san":"cxd5","children":[{"count":4893,"san":"exd5","children":[{"count":4729,"san":"Bg5","children":[{"count":2766,"san":"Be7","children":[]}]}]}]}]},{"count":5275,"san":"Be7","children":[{"count":3602,"san":"Nf3","children":[{"count":3550,"san":"Nf6","children":[]}]}]}]},{"count":15394,"san":"Nf3","children":[{"count":9682,"san":"Nf6","children":[{"count":3282,"san":"g3","children":[]},{"count":4506,"san":"Nc3","children":[]}]},{"count":3028,"san":"c6","children":[]}]}]},{"count":59268,"san":"c6","children":[{"count":18056,"san":"Nc3","children":[{"count":15458,"san":"Nf6","children":[{"count":6995,"san":"e3","children":[{"count":3830,"san":"e6","children":[{"count":3625,"san":"Nf3","children":[{"count":3129,"san":"Nbd7","children":[]}]}]}]},{"count":6549,"san":"Nf3","children":[{"count":2840,"san":"e6","children":[]}]}]}]},{"count":33445,"san":"Nf3","children":[{"count":30861,"san":"Nf6","children":[{"count":18950,"san":"Nc3","children":[{"count":7707,"san":"e6","children":[{"count":3258,"san":"e3","children":[{"count":2850,"san":"Nbd7","children":[]}]},{"count":3373,"san":"Bg5","children":[]}]},{"count":3264,"san":"a6","children":[]},{"count":7097,"san":"dxc4","children":[{"count":6280,"san":"a4","children":[{"count":5083,"san":"Bf5","children":[]}]}]}]},{"count":7720,"san":"e3","children":[{"count":2550,"san":"Bf5","children":[]}]}]}]},{"count":2782,"san":"e3","children":[{"count":2279,"san":"Nf6","children":[]}]},{"count":4708,"san":"cxd5","children":[{"count":4691,"san":"cxd5","children":[{"count":3142,"san":"Nc3","children":[{"count":2200,"san":"Nf6","children":[]}]}]}]}]},{"count":2565,"san":"e5","children":[{"count":2291,"san":"dxe5","children":[{"count":2245,"san":"d4","children":[]}]}]},{"count":3375,"san":"Nc6","children":[]}]},{"count":4079,"san":"e4","children":[{"count":3649,"san":"dxe4","children":[{"count":3540,"san":"Nc3","children":[{"count":2891,"san":"Nf6","children":[{"count":2649,"san":"f3","children":[{"count":2238,"san":"exf3","children":[]}]}]}]}]}]},{"count":2757,"san":"Bg5","children":[]},{"count":2733,"san":"Bf4","children":[]},{"count":2465,"san":"Nc3","children":[]}]},{"count":19906,"san":"d6","children":[{"count":5714,"san":"c4","children":[{"count":3198,"san":"e5","children":[]}]},{"count":7290,"san":"Nf3","children":[{"count":2708,"san":"g6","children":[]}]},{"count":5603,"san":"e4","children":[{"count":3855,"san":"Nf6","children":[{"count":3028,"san":"Nc3","children":[]}]}]}]},{"count":20795,"san":"g6","children":[{"count":10082,"san":"c4","children":[{"count":8927,"san":"Bg7","children":[{"count":5382,"san":"Nc3","children":[{"count":3551,"san":"d6","children":[{"count":2735,"san":"e4","children":[]}]}]}]}]},{"count":6044,"san":"e4","children":[{"count":5101,"san":"Bg7","children":[]}]},{"count":3586,"san":"Nf3","children":[{"count":3244,"san":"Bg7","children":[]}]}]},{"count":24866,"san":"f5","children":[{"count":4891,"san":"c4","children":[{"count":3892,"san":"Nf6","children":[{"count":2205,"san":"Nc3","children":[]}]}]},{"count":8312,"san":"g3","children":[{"count":7218,"san":"Nf6","children":[{"count":7028,"san":"Bg2","children":[{"count":4592,"san":"g6","children":[]}]}]}]},{"count":2726,"san":"Nc3","children":[]},{"count":4302,"san":"Nf3","children":[{"count":3662,"san":"Nf6","children":[{"count":2296,"san":"g3","children":[]}]}]}]},{"count":9911,"san":"c5","children":[{"count":6968,"san":"d5","children":[{"count":2605,"san":"e5","children":[]}]}]}]},{"count":154519,"san":"c4","children":[{"count":49816,"san":"Nf6","children":[{"count":31962,"san":"Nc3","children":[{"count":4607,"san":"c5","children":[{"count":2265,"san":"Nf3","children":[]}]},{"count":7257,"san":"e6","children":[{"count":2522,"san":"Nf3","children":[]},{"count":2804,"san":"e4","children":[]}]},{"count":10976,"san":"g6","children":[{"count":4753,"san":"g3","children":[{"count":4438,"san":"Bg7","children":[{"count":4395,"san":"Bg2","children":[{"count":3507,"san":"O-O","children":[]}]}]}]},{"count":3885,"san":"e4","children":[{"count":3639,"san":"d6","children":[{"count":3152,"san":"d4","children":[{"count":3123,"san":"Bg7","children":[]}]}]}]}]},{"count":2986,"san":"d5","children":[{"count":2631,"san":"cxd5","children":[{"count":2629,"san":"Nxd5","children":[]}]}]},{"count":4229,"san":"e5","children":[{"count":2409,"san":"Nf3","children":[]}]}]},{"count":7573,"san":"Nf3","children":[{"count":2370,"san":"e6","children":[]},{"count":2831,"san":"g6","children":[]}]},{"count":7531,"san":"g3","children":[{"count":3124,"san":"g6","children":[{"count":2938,"san":"Bg2","children":[{"count":2575,"san":"Bg7","children":[]}]}]}]},{"count":2489,"san":"d4","children":[]}]},{"count":10705,"san":"c6","children":[{"count":2273,"san":"d4","children":[]},{"count":2752,"san":"e4","children":[{"count":2216,"san":"d5","children":[]}]},{"count":3497,"san":"Nf3","children":[{"count":2824,"san":"d5","children":[]}]}]},{"count":20027,"san":"e6","children":[{"count":6427,"san":"Nc3","children":[{"count":4626,"san":"d5","children":[{"count":3675,"san":"d4","children":[]}]}]},{"count":6776,"san":"Nf3","children":[{"count":4061,"san":"d5","children":[]},{"count":2199,"san":"Nf6","children":[]}]},{"count":3941,"san":"g3","children":[{"count":2799,"san":"d5","children":[{"count":2293,"san":"Bg2","children":[]}]}]}]},{"count":33538,"san":"e5","children":[{"count":23844,"san":"Nc3","children":[{"count":11404,"san":"Nf6","children":[{"count":6011,"san":"Nf3","children":[{"count":5461,"san":"Nc6","children":[{"count":2444,"san":"g3","children":[]}]}]},{"count":4548,"san":"g3","children":[]}]},{"count":2322,"san":"d6","children":[]},{"count":7070,"san":"Nc6","children":[{"count":4376,"san":"g3","children":[{"count":2648,"san":"g6","children":[{"count":2616,"san":"Bg2","children":[{"count":2545,"san":"Bg7","children":[]}]}]}]},{"count":2303,"san":"Nf3","children":[]}]}]},{"count":8441,"san":"g3","children":[{"count":2533,"san":"Nc6","children":[{"count":2265,"san":"Bg2","children":[]}]},{"count":3844,"san":"Nf6","children":[{"count":3749,"san":"Bg2","children":[]}]}]}]},{"count":17435,"san":"c5","children":[{"count":6995,"san":"Nc3","children":[{"count":3577,"san":"Nc6","children":[{"count":2320,"san":"g3","children":[]}]}]},{"count":6976,"san":"Nf3","children":[{"count":3188,"san":"Nf6","children":[]},{"count":2469,"san":"Nc6","children":[]}]},{"count":3180,"san":"g3","children":[]}]},{"count":13217,"san":"g6","children":[{"count":3171,"san":"g3","children":[{"count":3025,"san":"Bg7","children":[{"count":2963,"san":"Bg2","children":[]}]}]},{"count":6187,"san":"Nc3","children":[{"count":5527,"san":"Bg7","children":[{"count":3316,"san":"g3","children":[]}]}]}]},{"count":5255,"san":"f5","children":[]},{"count":2211,"san":"b6","children":[]}]},{"count":186872,"san":"Nf3","children":[{"count":88966,"san":"Nf6","children":[{"count":50459,"san":"c4","children":[{"count":15026,"san":"e6","children":[{"count":5444,"san":"Nc3","children":[{"count":2461,"san":"d5","children":[{"count":2241,"san":"d4","children":[]}]}]},{"count":7210,"san":"g3","children":[{"count":4198,"san":"d5","children":[{"count":2613,"san":"Bg2","children":[]}]}]}]},{"count":3230,"san":"b6","children":[{"count":2328,"san":"g3","children":[]}]},{"count":19489,"san":"g6","children":[{"count":10977,"san":"Nc3","children":[{"count":7905,"san":"Bg7","children":[{"count":5486,"san":"e4","children":[{"count":4761,"san":"d6","children":[{"count":4711,"san":"d4","children":[{"count":4618,"san":"O-O","children":[]}]}]}]}]},{"count":2755,"san":"d5","children":[]}]},{"count":5250,"san":"g3","children":[{"count":5066,"san":"Bg7","children":[{"count":4943,"san":"Bg2","children":[{"count":4173,"san":"O-O","children":[{"count":3048,"san":"O-O","children":[]}]}]}]}]}]},{"count":7908,"san":"c5","children":[{"count":2215,"san":"g3","children":[]},{"count":5044,"san":"Nc3","children":[]}]},{"count":2849,"san":"c6","children":[]}]},{"count":9287,"san":"d4","children":[{"count":3713,"san":"g6","children":[]},{"count":2640,"san":"e6","children":[]}]},{"count":24760,"san":"g3","children":[{"count":11804,"san":"g6","children":[{"count":8577,"san":"Bg2","children":[{"count":8425,"san":"Bg7","children":[{"count":6563,"san":"O-O","children":[{"count":5960,"san":"O-O","children":[]}]}]}]},{"count":2211,"san":"b3","children":[]}]},{"count":6594,"san":"d5","children":[{"count":5967,"san":"Bg2","children":[{"count":2737,"san":"c6","children":[]}]}]},{"count":2562,"san":"b6","children":[{"count":2464,"san":"Bg2","children":[{"count":2461,"san":"Bb7","children":[]}]}]}]},{"count":3190,"san":"b3","children":[]}]},{"count":47261,"san":"d5","children":[{"count":15277,"san":"d4","children":[{"count":9898,"san":"Nf6","children":[{"count":8222,"san":"c4","children":[{"count":3529,"san":"e6","children":[{"count":2211,"san":"Nc3","children":[]}]},{"count":3520,"san":"c6","children":[]}]}]}]},{"count":16200,"san":"g3","children":[{"count":3950,"san":"c6","children":[{"count":3759,"san":"Bg2","children":[{"count":2409,"san":"Bg4","children":[]}]}]},{"count":6208,"san":"Nf6","children":[{"count":6062,"san":"Bg2","children":[]}]}]},{"count":11985,"san":"c4","children":[{"count":4799,"san":"c6","children":[]},{"count":4162,"san":"e6","children":[]}]},{"count":2325,"san":"b3","children":[]}]},{"count":6105,"san":"f5","children":[{"count":2227,"san":"g3","children":[]}]},{"count":21472,"san":"c5","children":[{"count":12249,"san":"c4","children":[{"count":2404,"san":"g6","children":[]},{"count":4995,"san":"Nc6","children":[{"count":2363,"san":"Nc3","children":[]}]},{"count":4071,"san":"Nf6","children":[{"count":2657,"san":"Nc3","children":[]}]}]},{"count":5145,"san":"g3","children":[{"count":2607,"san":"Nc6","children":[]}]}]},{"count":10258,"san":"g6","children":[{"count":3151,"san":"d4","children":[{"count":2274,"san":"Bg7","children":[]}]},{"count":2433,"san":"g3","children":[{"count":2324,"san":"Bg7","children":[]}]},{"count":2708,"san":"c4","children":[{"count":2458,"san":"Bg7","children":[]}]}]},{"count":3629,"san":"e6","children":[]},{"count":5360,"san":"d6","children":[{"count":3706,"san":"d4","children":[]}]}]},{"count":8279,"san":"b3","children":[{"count":3630,"san":"e5","children":[{"count":3542,"san":"Bb2","children":[{"count":2594,"san":"Nc6","children":[]}]}]}]},{"count":11957,"san":"f4","children":[{"count":5540,"san":"d5","children":[{"count":4098,"san":"Nf3","children":[]}]}]},{"count":5130,"san":"Nc3","children":[]},{"count":6852,"san":"b4","children":[{"count":3117,"san":"e5","children":[{"count":2814,"san":"Bb2","children":[]}]}]},{"count":16412,"san":"g3","children":[{"count":3014,"san":"g6","children":[{"count":2847,"san":"Bg2","children":[{"count":2782,"san":"Bg7","children":[]}]}]},{"count":3069,"san":"Nf6","children":[{"count":2863,"san":"Bg2","children":[]}]},{"count":5509,"san":"d5","children":[{"count":3631,"san":"Bg2","children":[]}]},{"count":2519,"san":"e5","children":[]}]}]'), _3 = {
  count: w3,
  san: S3,
  children: k3
};
function Uf(r) {
  const i = r;
  return {
    san: i.san ?? i.San ?? "start",
    count: i.count ?? i.Count ?? 0,
    children: (i.children ?? i.Children ?? []).map(Uf)
  };
}
function Hf(r, i, o = 0) {
  return o >= i ? { ...r, children: [] } : {
    ...r,
    children: r.children.map((c) => Hf(c, i, o + 1))
  };
}
function Wf(r, i) {
  return {
    ...r,
    children: r.children.filter((o) => o.count >= i).map((o) => Wf(o, i))
  };
}
function D3(r, i) {
  const o = Hf(r, i.maxPly), c = i.pruneFraction > 0 ? r.count * i.pruneFraction : 0;
  return c > 0 ? Wf(o, c) : o;
}
function Xf(r, i = 0) {
  return r.children.length ? r.children.reduce(
    (o, c) => {
      const u = Xf(c, i + 1);
      return {
        nodes: o.nodes + u.nodes,
        leaves: o.leaves + u.leaves,
        maxDepth: Math.max(o.maxDepth, u.maxDepth)
      };
    },
    { nodes: 1, leaves: 0, maxDepth: i }
  ) : { nodes: 1, leaves: 1, maxDepth: i };
}
const tf = Uf(_3), rf = [
  {
    id: "white",
    label: "white lines · 2016",
    note: "chess-dataviz v3 as published: 0.5px white stroke, no padAngle, rings touch.",
    knobs: { stroke: "white", strokeWidth: 0.5, padAngle: 0, ringGap: 0 }
  },
  {
    id: "gaps",
    label: "gaps · 2021",
    note: "Feb 2021 rewrite: padAngle 0.005 and a 1px ring gap, no stroke.",
    knobs: { stroke: "none", strokeWidth: void 0, padAngle: 5e-3, ringGap: 1 }
  },
  {
    id: "hairline",
    label: "dark hairline · poster",
    note: "Later versions and the poster: 0.1px black stroke painted under the fill, no padAngle.",
    knobs: { stroke: "black-hairline", strokeWidth: 0.1, padAngle: 0, ringGap: 1 }
  }
], lf = {
  stroke: "none",
  strokeWidth: void 0,
  padAngle: 5e-3,
  ringGap: 1,
  depthFade: 0.15,
  background: "light"
}, B3 = [
  {
    id: "san",
    label: "moves",
    note: "Moves only, set along the radius.",
    knobs: { labels: "san" }
  },
  {
    id: "names",
    label: "names + callouts",
    note: "Opening names along the arcs where a named line begins; smaller named lines are called out around the edge.",
    knobs: { labels: "names" }
  },
  {
    id: "both",
    label: "both",
    note: "Names, callouts and moves together, as on the poster.",
    knobs: { labels: "both" }
  }
], C3 = [
  {
    id: "category10",
    label: "category10 · 2015",
    note: "d3 category10 by first move, as in chess-dataviz.",
    knobs: { ...lf, palette: "category10" }
  },
  {
    id: "tableau10",
    label: "tableau10 · later",
    note: "Tableau10 by first move, as in later versions.",
    knobs: { ...lf, palette: "tableau10" }
  },
  {
    id: "poster",
    label: "poster",
    note: "Cool families sampled from the poster, with its dark hairlines.",
    knobs: {
      palette: "poster",
      stroke: "black-hairline",
      strokeWidth: 0.1,
      padAngle: 0,
      ringGap: 1,
      depthFade: 0.3
    }
  }
], of = [
  {
    id: "2015-10",
    label: "Oct 2015",
    note: `2015-10-17, first commit: the d3 "sequences sunburst" example pasted in. It still drew the example's sample data; here it gets the chess tree. A color per move (category20), no shading, biggest arcs first, 1px white lines.`,
    knobs: {
      width: 550,
      palette: "category20-move",
      shading: "flat",
      brighten: 0,
      depthFade: 0,
      stroke: "white",
      strokeWidth: 1,
      sort: !0,
      sortHeight: !1,
      nodeThreshold: 5e-3,
      thresholdUnit: "radian",
      sanThreshold: 0.349,
      sanColor: "#000",
      sanSize: 10,
      center: "none"
    }
  },
  {
    id: "2015-11",
    label: "Nov 2015",
    note: "2015-11-01, first chess version: color by first move (category10), rings alternate lighter and darker and fade outward, 0.5px white lines, move labels on more arcs.",
    knobs: {
      width: 550,
      palette: "category10",
      shading: "alternate",
      brighten: 0,
      depthFade: 0.2,
      stroke: "white",
      strokeWidth: 0.5,
      sort: !0,
      sortHeight: !1,
      nodeThreshold: 0.01,
      thresholdUnit: "radian",
      sanThreshold: 0.1,
      sanColor: "#fff",
      sanSize: 10,
      center: "none"
    }
  },
  {
    id: "2015-12",
    label: "Dec 2015 · 1.0.0",
    note: "2015-12-21, version 1.0.0, used by the 2016 post: no sorting, so moves keep the tree's order; cut-offs as fractions of the circle, so many more slivers survive; 700 wide, with the post's chessboard over the hole.",
    knobs: {
      width: 700,
      palette: "category10",
      shading: "alternate",
      brighten: 0,
      depthFade: 0.2,
      stroke: "white",
      strokeWidth: 0.5,
      sort: !1,
      sortHeight: !1,
      nodeThreshold: 1e-4,
      thresholdUnit: "fraction",
      sanThreshold: 0.04,
      sanColor: "#fff",
      sanSize: 12,
      center: "board-disk"
    }
  }
], E3 = [
  {
    id: "flat",
    label: "flat",
    note: "One color per first move. Rings only show at the hairlines.",
    knobs: { shading: "flat", depthFade: 0 }
  },
  {
    id: "alternate",
    label: "alternating",
    note: "Odd rings (White's moves) lighter, even rings (Black's) darker.",
    knobs: { shading: "alternate", depthFade: 0 }
  },
  {
    id: "poster",
    label: "alternating, darker outward",
    note: "Same, and each full move a step darker: the poster.",
    knobs: { shading: "alternate", depthFade: 0.3 }
  }
], _t = {
  width: 700,
  hole: 20,
  radius: "sqrt",
  palette: "category10",
  sum: "leaves",
  sort: !0,
  padAngle: 5e-3,
  ringGap: 1,
  stroke: "none",
  depthFade: 0.15,
  nodeThreshold: 0,
  thresholdUnit: "radian",
  showSan: !0,
  sanThreshold: 0.1,
  center: "board-disk",
  background: "light",
  maxPly: 10,
  pruneFraction: 0
}, Yf = [
  {
    id: "library-2015",
    label: "0 · library",
    year: "2015",
    caption: "2015 — chess-dataviz, three commits",
    blurb: "The library's openings chart at three points in its history, each drawn with that commit's settings on the same 2m tree. The hole is the starting position: the root arc is never drawn.",
    knobs: {
      width: 550,
      hole: 0,
      radius: "sqrt",
      palette: "category20-move",
      sum: "leaves",
      sort: !0,
      sortHeight: !1,
      padAngle: 0,
      ringGap: 0,
      stroke: "white",
      strokeWidth: 1,
      depthFade: 0,
      shading: "flat",
      brighten: 0,
      nodeThreshold: 5e-3,
      thresholdUnit: "radian",
      showSan: !0,
      sanThreshold: 0.349,
      sanColor: "#000",
      sanSize: 10,
      center: "none",
      background: "light",
      maxPly: 10,
      pruneFraction: 0
    },
    modes: of
  },
  {
    id: "blog-2016",
    label: "1 · blog",
    year: "2016",
    caption: "2016 post as published / 2021 rewrite",
    blurb: "The same quarter of the circle, top right, from the same 2m tree. Illustration only: the real chart played the hovered line on the board and highlighted its path.",
    knobs: { ..._t },
    panels: [
      {
        id: "published",
        label: "2016, as published",
        note: "chess-dataviz 1.0.0: 0.5px white lines, moves in tree order, a chessboard over the hole.",
        knobs: { ...of[2].knobs, hole: 0, padAngle: 0, ringGap: 0 },
        crop: { x: -30, y: -350, size: 380 }
      },
      {
        id: "rewrite",
        label: "2021 rewrite",
        note: "Small gaps instead of lines, deepest lines first, a softer fade, slightly brighter colors.",
        knobs: {},
        crop: { x: -30, y: -350, size: 380 }
      }
    ]
  },
  {
    id: "ply",
    label: "2 · ply",
    year: "knob",
    caption: "Ply depth",
    blurb: "Same drawing as 2016. 4 half-moves is a pie. 10 is a city.",
    knobs: { ..._t, maxPly: 4 },
    controls: ["ply"]
  },
  {
    id: "prune",
    label: "3 · prune",
    year: "knob",
    caption: "Prune threshold",
    blurb: "Further prune on the already-cut 2m tree. 0.5% is the later default.",
    knobs: { ..._t, pruneFraction: 5e-3 },
    controls: ["prune"]
  },
  {
    id: "radius-linear",
    label: "4 · linear r",
    year: "knob",
    caption: "Radius scale",
    blurb: "Same tree, same angles. Only the mapping from ring to radius changes.",
    knobs: { ..._t, showSan: !1, center: "none" },
    panels: [
      {
        id: "linear",
        label: "linear",
        note: "Every ring equally thick, so the outer rings take most of the ink.",
        knobs: { radius: "linear" }
      },
      {
        id: "sqrt",
        label: "square root · 2016",
        note: "Every ring the same area; rings thin out toward the edge.",
        knobs: { radius: "sqrt" }
      },
      {
        id: "log",
        label: "log",
        note: "The first moves swell and the deep theory squeezes into a rim.",
        knobs: { radius: "log" }
      }
    ]
  },
  {
    id: "separation",
    label: "4b · separation",
    year: "knob",
    caption: "Gaps and lines between slices",
    blurb: "Same 2m tree and 2016 knobs. Only the separation changes. The inset is the outer edge, magnified.",
    knobs: { ..._t, ...rf[0].knobs },
    modes: rf,
    inset: { angle: 1.4, radius: 0.72, size: 80 }
  },
  {
    id: "palette",
    label: "4c · palette",
    year: "knob",
    caption: "Color",
    blurb: "Same 2m tree. Color carries the first move; rings alternate light and dark so the steps stay visible.",
    knobs: { ..._t },
    modes: C3
  },
  {
    id: "shading",
    label: "4d · shading",
    year: "knob",
    caption: "Shading the rings",
    blurb: "Poster palette on the 2m tree. Odd rings are White's moves, even rings are Black's.",
    knobs: {
      ..._t,
      palette: "poster",
      stroke: "black-hairline",
      strokeWidth: 0.1,
      padAngle: 0,
      ringGap: 1,
      depthFade: 0.3,
      showSan: !1,
      center: "none"
    },
    panels: E3
  },
  {
    id: "chessviz-tools",
    label: "5 · labels",
    year: "poster",
    caption: "Labels, poster style",
    blurb: "Labels in the style of the poster, drawn on the 2m tree. The poster's callouts were placed by hand; these are placed by a simple rule.",
    knobs: {
      width: 900,
      hole: 20,
      radius: "sqrt",
      palette: "poster",
      sum: "leaves",
      sort: !0,
      padAngle: 0,
      ringGap: 1,
      stroke: "black-hairline",
      strokeWidth: 0.4,
      depthFade: 0.3,
      nodeThreshold: 2e-3,
      thresholdUnit: "radian",
      showSan: !0,
      posterLabels: !0,
      labels: "both",
      sanThreshold: 0,
      center: "none",
      background: "light",
      maxPly: 10,
      pruneFraction: 0
    },
    modes: B3,
    defaultMode: "both"
  }
];
function A3(r, i) {
  const o = r.radius * i / 2, c = o * Math.sin(r.angle), u = -o * Math.cos(r.angle);
  return { x: c - r.size / 2, y: u - r.size / 2, size: r.size };
}
function M3({ stageId: r }) {
  var $, L;
  const i = Yf.find((z) => z.id === r), [o, c] = Gn.useState(i == null ? void 0 : i.knobs), [u, f] = Gn.useState((i == null ? void 0 : i.defaultMode) ?? ((L = ($ = i == null ? void 0 : i.modes) == null ? void 0 : $[0]) == null ? void 0 : L.id)), h = Gn.useMemo(() => o ? D3(tf, o) : tf, [o]), p = Gn.useMemo(() => Xf(h), [h]);
  if (!i || !o) return null;
  const g = o.background === "dark", m = i.controls ?? [], v = i.inset ? A3(i.inset, o.width) : void 0, k = i.modes ?? [], w = k.find((z) => z.id === u);
  function C(z) {
    const q = k.find((oe) => oe.id === z);
    !q || !o || (f(z), c({ ...o, ...q.knobs }));
  }
  return /* @__PURE__ */ te.jsxs(
    "div",
    {
      className: `openings-stage${g ? " openings-stage-dark" : ""}${i.panels ? " openings-stage-wide" : ""}`,
      children: [
        /* @__PURE__ */ te.jsx("div", { className: "viz-title", children: i.caption }),
        /* @__PURE__ */ te.jsx("div", { className: "viz-subtitle", children: i.blurb }),
        k.length > 0 && /* @__PURE__ */ te.jsx("div", { className: "openings-segmented", role: "group", "aria-label": i.caption, children: k.map((z) => /* @__PURE__ */ te.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": z.id === u,
            className: z.id === u ? "active" : "",
            onClick: () => C(z.id),
            children: z.label
          },
          z.id
        )) }),
        i.panels ? /* @__PURE__ */ te.jsx("div", { className: "openings-panels", children: i.panels.map((z) => /* @__PURE__ */ te.jsxs("figure", { className: "openings-panel", children: [
          /* @__PURE__ */ te.jsx("figcaption", { className: "openings-panel-label", children: z.label }),
          /* @__PURE__ */ te.jsx(yl, { data: h, knobs: { ...o, ...z.knobs }, crop: z.crop }),
          /* @__PURE__ */ te.jsx("figcaption", { className: "openings-panel-note", children: z.note })
        ] }, z.id)) }) : v ? /* @__PURE__ */ te.jsxs("div", { className: "openings-with-inset", children: [
          /* @__PURE__ */ te.jsx(yl, { data: h, knobs: o, highlight: v }),
          /* @__PURE__ */ te.jsxs("figure", { className: "openings-inset", children: [
            /* @__PURE__ */ te.jsx(
              yl,
              {
                data: h,
                knobs: o,
                crop: v,
                className: "openings-sunburst openings-sunburst-inset"
              }
            ),
            /* @__PURE__ */ te.jsxs("figcaption", { children: [
              "outer edge, ×",
              Math.round(o.width / v.size)
            ] })
          ] })
        ] }) : /* @__PURE__ */ te.jsx(yl, { data: h, knobs: o }),
        w && /* @__PURE__ */ te.jsx("div", { className: "openings-mode-note", children: w.note }),
        m.length > 0 && /* @__PURE__ */ te.jsxs("div", { className: "openings-controls", children: [
          m.includes("ply") && /* @__PURE__ */ te.jsxs("label", { children: [
            "ply ",
            o.maxPly,
            /* @__PURE__ */ te.jsx(
              "input",
              {
                type: "range",
                min: 1,
                max: 10,
                value: o.maxPly,
                onChange: (z) => c({ ...o, maxPly: Number(z.target.value) })
              }
            )
          ] }),
          m.includes("prune") && /* @__PURE__ */ te.jsxs("label", { children: [
            "extra prune ",
            (o.pruneFraction * 100).toFixed(2),
            "%",
            /* @__PURE__ */ te.jsx(
              "input",
              {
                type: "range",
                min: 0,
                max: 50,
                value: Math.round(o.pruneFraction * 1e3),
                onChange: (z) => c({
                  ...o,
                  pruneFraction: Number(z.target.value) / 1e3
                })
              }
            )
          ] }),
          m.includes("hole") && /* @__PURE__ */ te.jsxs("label", { children: [
            "hole ",
            o.hole,
            /* @__PURE__ */ te.jsx(
              "input",
              {
                type: "range",
                min: 0,
                max: 160,
                value: o.hole,
                onChange: (z) => c({ ...o, hole: Number(z.target.value) })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ te.jsxs("div", { className: "viz-meta", children: [
          p.nodes,
          " nodes · ",
          p.leaves,
          " leaves · depth ",
          p.maxDepth,
          " · 2,197,113-game tree"
        ] })
      ]
    }
  );
}
const V3 = new Set(Yf.map((r) => r.id));
function af() {
  document.querySelectorAll("[data-openings-stage]").forEach((r) => {
    const i = r.dataset.openingsStage;
    if (!V3.has(i)) return;
    const o = /* @__PURE__ */ te.jsx(M3, { stageId: i });
    r.firstElementChild ? Sd.hydrateRoot(r, o) : Sd.createRoot(r).render(o);
  });
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", af) : af();
