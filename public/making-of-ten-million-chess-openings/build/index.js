var Ia = { exports: {} }, Hr = {}, Ra = { exports: {} }, he = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cd;
function Qp() {
  if (cd) return he;
  cd = 1;
  var r = Symbol.for("react.element"), i = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), h = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), k = Symbol.iterator;
  function S(w) {
    return w === null || typeof w != "object" ? null : (w = k && w[k] || w["@@iterator"], typeof w == "function" ? w : null);
  }
  var A = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Q = Object.assign, $ = {};
  function Y(w, C, ie) {
    this.props = w, this.context = C, this.refs = $, this.updater = ie || A;
  }
  Y.prototype.isReactComponent = {}, Y.prototype.setState = function(w, C) {
    if (typeof w != "object" && typeof w != "function" && w != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, w, C, "setState");
  }, Y.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function ne() {
  }
  ne.prototype = Y.prototype;
  function oe(w, C, ie) {
    this.props = w, this.context = C, this.refs = $, this.updater = ie || A;
  }
  var G = oe.prototype = new ne();
  G.constructor = oe, Q(G, Y.prototype), G.isPureReactComponent = !0;
  var Z = Array.isArray, ue = Object.prototype.hasOwnProperty, ae = { current: null }, I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function q(w, C, ie) {
    var le, te = {}, fe = null, ye = null;
    if (C != null) for (le in C.ref !== void 0 && (ye = C.ref), C.key !== void 0 && (fe = "" + C.key), C) ue.call(C, le) && !I.hasOwnProperty(le) && (te[le] = C[le]);
    var me = arguments.length - 2;
    if (me === 1) te.children = ie;
    else if (1 < me) {
      for (var we = Array(me), Fe = 0; Fe < me; Fe++) we[Fe] = arguments[Fe + 2];
      te.children = we;
    }
    if (w && w.defaultProps) for (le in me = w.defaultProps, me) te[le] === void 0 && (te[le] = me[le]);
    return { $$typeof: r, type: w, key: fe, ref: ye, props: te, _owner: ae.current };
  }
  function ce(w, C) {
    return { $$typeof: r, type: w.type, key: C, ref: w.ref, props: w.props, _owner: w._owner };
  }
  function pe(w) {
    return typeof w == "object" && w !== null && w.$$typeof === r;
  }
  function E(w) {
    var C = { "=": "=0", ":": "=2" };
    return "$" + w.replace(/[=:]/g, function(ie) {
      return C[ie];
    });
  }
  var M = /\/+/g;
  function P(w, C) {
    return typeof w == "object" && w !== null && w.key != null ? E("" + w.key) : C.toString(36);
  }
  function F(w, C, ie, le, te) {
    var fe = typeof w;
    (fe === "undefined" || fe === "boolean") && (w = null);
    var ye = !1;
    if (w === null) ye = !0;
    else switch (fe) {
      case "string":
      case "number":
        ye = !0;
        break;
      case "object":
        switch (w.$$typeof) {
          case r:
          case i:
            ye = !0;
        }
    }
    if (ye) return ye = w, te = te(ye), w = le === "" ? "." + P(ye, 0) : le, Z(te) ? (ie = "", w != null && (ie = w.replace(M, "$&/") + "/"), F(te, C, ie, "", function(Fe) {
      return Fe;
    })) : te != null && (pe(te) && (te = ce(te, ie + (!te.key || ye && ye.key === te.key ? "" : ("" + te.key).replace(M, "$&/") + "/") + w)), C.push(te)), 1;
    if (ye = 0, le = le === "" ? "." : le + ":", Z(w)) for (var me = 0; me < w.length; me++) {
      fe = w[me];
      var we = le + P(fe, me);
      ye += F(fe, C, ie, we, te);
    }
    else if (we = S(w), typeof we == "function") for (w = we.call(w), me = 0; !(fe = w.next()).done; ) fe = fe.value, we = le + P(fe, me++), ye += F(fe, C, ie, we, te);
    else if (fe === "object") throw C = String(w), Error("Objects are not valid as a React child (found: " + (C === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : C) + "). If you meant to render a collection of children, use an array instead.");
    return ye;
  }
  function de(w, C, ie) {
    if (w == null) return w;
    var le = [], te = 0;
    return F(w, le, "", "", function(fe) {
      return C.call(ie, fe, te++);
    }), le;
  }
  function ge(w) {
    if (w._status === -1) {
      var C = w._result;
      C = C(), C.then(function(ie) {
        (w._status === 0 || w._status === -1) && (w._status = 1, w._result = ie);
      }, function(ie) {
        (w._status === 0 || w._status === -1) && (w._status = 2, w._result = ie);
      }), w._status === -1 && (w._status = 0, w._result = C);
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var se = { current: null }, T = { transition: null }, j = { ReactCurrentDispatcher: se, ReactCurrentBatchConfig: T, ReactCurrentOwner: ae };
  function R() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return he.Children = { map: de, forEach: function(w, C, ie) {
    de(w, function() {
      C.apply(this, arguments);
    }, ie);
  }, count: function(w) {
    var C = 0;
    return de(w, function() {
      C++;
    }), C;
  }, toArray: function(w) {
    return de(w, function(C) {
      return C;
    }) || [];
  }, only: function(w) {
    if (!pe(w)) throw Error("React.Children.only expected to receive a single React element child.");
    return w;
  } }, he.Component = Y, he.Fragment = o, he.Profiler = u, he.PureComponent = oe, he.StrictMode = c, he.Suspense = m, he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j, he.act = R, he.cloneElement = function(w, C, ie) {
    if (w == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + w + ".");
    var le = Q({}, w.props), te = w.key, fe = w.ref, ye = w._owner;
    if (C != null) {
      if (C.ref !== void 0 && (fe = C.ref, ye = ae.current), C.key !== void 0 && (te = "" + C.key), w.type && w.type.defaultProps) var me = w.type.defaultProps;
      for (we in C) ue.call(C, we) && !I.hasOwnProperty(we) && (le[we] = C[we] === void 0 && me !== void 0 ? me[we] : C[we]);
    }
    var we = arguments.length - 2;
    if (we === 1) le.children = ie;
    else if (1 < we) {
      me = Array(we);
      for (var Fe = 0; Fe < we; Fe++) me[Fe] = arguments[Fe + 2];
      le.children = me;
    }
    return { $$typeof: r, type: w.type, key: te, ref: fe, props: le, _owner: ye };
  }, he.createContext = function(w) {
    return w = { $$typeof: h, _currentValue: w, _currentValue2: w, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, w.Provider = { $$typeof: f, _context: w }, w.Consumer = w;
  }, he.createElement = q, he.createFactory = function(w) {
    var C = q.bind(null, w);
    return C.type = w, C;
  }, he.createRef = function() {
    return { current: null };
  }, he.forwardRef = function(w) {
    return { $$typeof: p, render: w };
  }, he.isValidElement = pe, he.lazy = function(w) {
    return { $$typeof: v, _payload: { _status: -1, _result: w }, _init: ge };
  }, he.memo = function(w, C) {
    return { $$typeof: g, type: w, compare: C === void 0 ? null : C };
  }, he.startTransition = function(w) {
    var C = T.transition;
    T.transition = {};
    try {
      w();
    } finally {
      T.transition = C;
    }
  }, he.unstable_act = R, he.useCallback = function(w, C) {
    return se.current.useCallback(w, C);
  }, he.useContext = function(w) {
    return se.current.useContext(w);
  }, he.useDebugValue = function() {
  }, he.useDeferredValue = function(w) {
    return se.current.useDeferredValue(w);
  }, he.useEffect = function(w, C) {
    return se.current.useEffect(w, C);
  }, he.useId = function() {
    return se.current.useId();
  }, he.useImperativeHandle = function(w, C, ie) {
    return se.current.useImperativeHandle(w, C, ie);
  }, he.useInsertionEffect = function(w, C) {
    return se.current.useInsertionEffect(w, C);
  }, he.useLayoutEffect = function(w, C) {
    return se.current.useLayoutEffect(w, C);
  }, he.useMemo = function(w, C) {
    return se.current.useMemo(w, C);
  }, he.useReducer = function(w, C, ie) {
    return se.current.useReducer(w, C, ie);
  }, he.useRef = function(w) {
    return se.current.useRef(w);
  }, he.useState = function(w) {
    return se.current.useState(w);
  }, he.useSyncExternalStore = function(w, C, ie) {
    return se.current.useSyncExternalStore(w, C, ie);
  }, he.useTransition = function() {
    return se.current.useTransition();
  }, he.version = "18.3.1", he;
}
var ud;
function rs() {
  return ud || (ud = 1, Ra.exports = Qp()), Ra.exports;
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
var dd;
function jp() {
  if (dd) return Hr;
  dd = 1;
  var r = rs(), i = Symbol.for("react.element"), o = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, u = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(p, m, g) {
    var v, k = {}, S = null, A = null;
    g !== void 0 && (S = "" + g), m.key !== void 0 && (S = "" + m.key), m.ref !== void 0 && (A = m.ref);
    for (v in m) c.call(m, v) && !f.hasOwnProperty(v) && (k[v] = m[v]);
    if (p && p.defaultProps) for (v in m = p.defaultProps, m) k[v] === void 0 && (k[v] = m[v]);
    return { $$typeof: i, type: p, key: S, ref: A, props: k, _owner: u.current };
  }
  return Hr.Fragment = o, Hr.jsx = h, Hr.jsxs = h, Hr;
}
var fd;
function Up() {
  return fd || (fd = 1, Ia.exports = jp()), Ia.exports;
}
var b = Up(), fl = {}, La = { exports: {} }, be = {}, Fa = { exports: {} }, $a = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hd;
function Hp() {
  return hd || (hd = 1, (function(r) {
    function i(T, j) {
      var R = T.length;
      T.push(j);
      e: for (; 0 < R; ) {
        var w = R - 1 >>> 1, C = T[w];
        if (0 < u(C, j)) T[w] = j, T[R] = C, R = w;
        else break e;
      }
    }
    function o(T) {
      return T.length === 0 ? null : T[0];
    }
    function c(T) {
      if (T.length === 0) return null;
      var j = T[0], R = T.pop();
      if (R !== j) {
        T[0] = R;
        e: for (var w = 0, C = T.length, ie = C >>> 1; w < ie; ) {
          var le = 2 * (w + 1) - 1, te = T[le], fe = le + 1, ye = T[fe];
          if (0 > u(te, R)) fe < C && 0 > u(ye, te) ? (T[w] = ye, T[fe] = R, w = fe) : (T[w] = te, T[le] = R, w = le);
          else if (fe < C && 0 > u(ye, R)) T[w] = ye, T[fe] = R, w = fe;
          else break e;
        }
      }
      return j;
    }
    function u(T, j) {
      var R = T.sortIndex - j.sortIndex;
      return R !== 0 ? R : T.id - j.id;
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
    var m = [], g = [], v = 1, k = null, S = 3, A = !1, Q = !1, $ = !1, Y = typeof setTimeout == "function" ? setTimeout : null, ne = typeof clearTimeout == "function" ? clearTimeout : null, oe = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function G(T) {
      for (var j = o(g); j !== null; ) {
        if (j.callback === null) c(g);
        else if (j.startTime <= T) c(g), j.sortIndex = j.expirationTime, i(m, j);
        else break;
        j = o(g);
      }
    }
    function Z(T) {
      if ($ = !1, G(T), !Q) if (o(m) !== null) Q = !0, ge(ue);
      else {
        var j = o(g);
        j !== null && se(Z, j.startTime - T);
      }
    }
    function ue(T, j) {
      Q = !1, $ && ($ = !1, ne(q), q = -1), A = !0;
      var R = S;
      try {
        for (G(j), k = o(m); k !== null && (!(k.expirationTime > j) || T && !E()); ) {
          var w = k.callback;
          if (typeof w == "function") {
            k.callback = null, S = k.priorityLevel;
            var C = w(k.expirationTime <= j);
            j = r.unstable_now(), typeof C == "function" ? k.callback = C : k === o(m) && c(m), G(j);
          } else c(m);
          k = o(m);
        }
        if (k !== null) var ie = !0;
        else {
          var le = o(g);
          le !== null && se(Z, le.startTime - j), ie = !1;
        }
        return ie;
      } finally {
        k = null, S = R, A = !1;
      }
    }
    var ae = !1, I = null, q = -1, ce = 5, pe = -1;
    function E() {
      return !(r.unstable_now() - pe < ce);
    }
    function M() {
      if (I !== null) {
        var T = r.unstable_now();
        pe = T;
        var j = !0;
        try {
          j = I(!0, T);
        } finally {
          j ? P() : (ae = !1, I = null);
        }
      } else ae = !1;
    }
    var P;
    if (typeof oe == "function") P = function() {
      oe(M);
    };
    else if (typeof MessageChannel < "u") {
      var F = new MessageChannel(), de = F.port2;
      F.port1.onmessage = M, P = function() {
        de.postMessage(null);
      };
    } else P = function() {
      Y(M, 0);
    };
    function ge(T) {
      I = T, ae || (ae = !0, P());
    }
    function se(T, j) {
      q = Y(function() {
        T(r.unstable_now());
      }, j);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(T) {
      T.callback = null;
    }, r.unstable_continueExecution = function() {
      Q || A || (Q = !0, ge(ue));
    }, r.unstable_forceFrameRate = function(T) {
      0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ce = 0 < T ? Math.floor(1e3 / T) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return S;
    }, r.unstable_getFirstCallbackNode = function() {
      return o(m);
    }, r.unstable_next = function(T) {
      switch (S) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = S;
      }
      var R = S;
      S = j;
      try {
        return T();
      } finally {
        S = R;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function(T, j) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var R = S;
      S = T;
      try {
        return j();
      } finally {
        S = R;
      }
    }, r.unstable_scheduleCallback = function(T, j, R) {
      var w = r.unstable_now();
      switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? w + R : w) : R = w, T) {
        case 1:
          var C = -1;
          break;
        case 2:
          C = 250;
          break;
        case 5:
          C = 1073741823;
          break;
        case 4:
          C = 1e4;
          break;
        default:
          C = 5e3;
      }
      return C = R + C, T = { id: v++, callback: j, priorityLevel: T, startTime: R, expirationTime: C, sortIndex: -1 }, R > w ? (T.sortIndex = R, i(g, T), o(m) === null && T === o(g) && ($ ? (ne(q), q = -1) : $ = !0, se(Z, R - w))) : (T.sortIndex = C, i(m, T), Q || A || (Q = !0, ge(ue))), T;
    }, r.unstable_shouldYield = E, r.unstable_wrapCallback = function(T) {
      var j = S;
      return function() {
        var R = S;
        S = j;
        try {
          return T.apply(this, arguments);
        } finally {
          S = R;
        }
      };
    };
  })($a)), $a;
}
var pd;
function Wp() {
  return pd || (pd = 1, Fa.exports = Hp()), Fa.exports;
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
var gd;
function Xp() {
  if (gd) return be;
  gd = 1;
  var r = rs(), i = Wp();
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
  var p = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), m = Object.prototype.hasOwnProperty, g = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, k = {};
  function S(e) {
    return m.call(k, e) ? !0 : m.call(v, e) ? !1 : g.test(e) ? k[e] = !0 : (v[e] = !0, !1);
  }
  function A(e, n, t, l) {
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
  function Q(e, n, t, l) {
    if (n === null || typeof n > "u" || A(e, n, t, l)) return !0;
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
  function $(e, n, t, l, a, s, d) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = l, this.attributeNamespace = a, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = s, this.removeEmptyString = d;
  }
  var Y = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Y[e] = new $(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    Y[n] = new $(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Y[e] = new $(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Y[e] = new $(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Y[e] = new $(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Y[e] = new $(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    Y[e] = new $(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    Y[e] = new $(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    Y[e] = new $(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var ne = /[\-:]([a-z])/g;
  function oe(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      ne,
      oe
    );
    Y[n] = new $(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(ne, oe);
    Y[n] = new $(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(ne, oe);
    Y[n] = new $(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    Y[e] = new $(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), Y.xlinkHref = new $("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    Y[e] = new $(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function G(e, n, t, l) {
    var a = Y.hasOwnProperty(n) ? Y[n] : null;
    (a !== null ? a.type !== 0 : l || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (Q(n, t, a, l) && (t = null), l || a === null ? S(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : a.mustUseProperty ? e[a.propertyName] = t === null ? a.type === 3 ? !1 : "" : t : (n = a.attributeName, l = a.attributeNamespace, t === null ? e.removeAttribute(n) : (a = a.type, t = a === 3 || a === 4 && t === !0 ? "" : "" + t, l ? e.setAttributeNS(l, n, t) : e.setAttribute(n, t))));
  }
  var Z = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ue = Symbol.for("react.element"), ae = Symbol.for("react.portal"), I = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), ce = Symbol.for("react.profiler"), pe = Symbol.for("react.provider"), E = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), de = Symbol.for("react.memo"), ge = Symbol.for("react.lazy"), se = Symbol.for("react.offscreen"), T = Symbol.iterator;
  function j(e) {
    return e === null || typeof e != "object" ? null : (e = T && e[T] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var R = Object.assign, w;
  function C(e) {
    if (w === void 0) try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      w = n && n[1] || "";
    }
    return `
` + w + e;
  }
  var ie = !1;
  function le(e, n) {
    if (!e || ie) return "";
    ie = !0;
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
      ie = !1, Error.prepareStackTrace = t;
    }
    return (e = e ? e.displayName || e.name : "") ? C(e) : "";
  }
  function te(e) {
    switch (e.tag) {
      case 5:
        return C(e.type);
      case 16:
        return C("Lazy");
      case 13:
        return C("Suspense");
      case 19:
        return C("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = le(e.type, !1), e;
      case 11:
        return e = le(e.type.render, !1), e;
      case 1:
        return e = le(e.type, !0), e;
      default:
        return "";
    }
  }
  function fe(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case I:
        return "Fragment";
      case ae:
        return "Portal";
      case ce:
        return "Profiler";
      case q:
        return "StrictMode";
      case P:
        return "Suspense";
      case F:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case E:
        return (e.displayName || "Context") + ".Consumer";
      case pe:
        return (e._context.displayName || "Context") + ".Provider";
      case M:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case de:
        return n = e.displayName || null, n !== null ? n : fe(e.type) || "Memo";
      case ge:
        n = e._payload, e = e._init;
        try {
          return fe(e(n));
        } catch {
        }
    }
    return null;
  }
  function ye(e) {
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
        return fe(n);
      case 8:
        return n === q ? "StrictMode" : "Mode";
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
  function me(e) {
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
  function we(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Fe(e) {
    var n = we(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), l = "" + e[n];
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
  function ut(e) {
    e._valueTracker || (e._valueTracker = Fe(e));
  }
  function gs(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(), l = "";
    return e && (l = we(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== t ? (n.setValue(e), !0) : !1;
  }
  function ri(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Kl(e, n) {
    var t = n.checked;
    return R({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
  }
  function ms(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue, l = n.checked != null ? n.checked : n.defaultChecked;
    t = me(n.value != null ? n.value : t), e._wrapperState = { initialChecked: l, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
  }
  function Ns(e, n) {
    n = n.checked, n != null && G(e, "checked", n, !1);
  }
  function Ql(e, n) {
    Ns(e, n);
    var t = me(n.value), l = n.type;
    if (t != null) l === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (l === "submit" || l === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value") ? jl(e, n.type, t) : n.hasOwnProperty("defaultValue") && jl(e, n.type, me(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
  }
  function vs(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var l = n.type;
      if (!(l !== "submit" && l !== "reset" || n.value !== void 0 && n.value !== null)) return;
      n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
    }
    t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
  }
  function jl(e, n, t) {
    (n !== "number" || ri(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }
  var ar = Array.isArray;
  function Vt(e, n, t, l) {
    if (e = e.options, n) {
      n = {};
      for (var a = 0; a < t.length; a++) n["$" + t[a]] = !0;
      for (t = 0; t < e.length; t++) a = n.hasOwnProperty("$" + e[t].value), e[t].selected !== a && (e[t].selected = a), a && l && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + me(t), n = null, a = 0; a < e.length; a++) {
        if (e[a].value === t) {
          e[a].selected = !0, l && (e[a].defaultSelected = !0);
          return;
        }
        n !== null || e[a].disabled || (n = e[a]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Ul(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(o(91));
    return R({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function ys(e, n) {
    var t = n.value;
    if (t == null) {
      if (t = n.children, n = n.defaultValue, t != null) {
        if (n != null) throw Error(o(92));
        if (ar(t)) {
          if (1 < t.length) throw Error(o(93));
          t = t[0];
        }
        n = t;
      }
      n == null && (n = ""), t = n;
    }
    e._wrapperState = { initialValue: me(t) };
  }
  function xs(e, n) {
    var t = me(n.value), l = me(n.defaultValue);
    t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), l != null && (e.defaultValue = "" + l);
  }
  function ws(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
  }
  function Ss(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Hl(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Ss(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var ii, ks = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, l, a) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(n, t, l, a);
      });
    } : e;
  })(function(e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
    else {
      for (ii = ii || document.createElement("div"), ii.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = ii.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
  function sr(e, n) {
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
  }, Wf = ["Webkit", "ms", "Moz", "O"];
  Object.keys(cr).forEach(function(e) {
    Wf.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), cr[n] = cr[e];
    });
  });
  function _s(e, n, t) {
    return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || cr.hasOwnProperty(e) && cr[e] ? ("" + n).trim() : n + "px";
  }
  function Ds(e, n) {
    e = e.style;
    for (var t in n) if (n.hasOwnProperty(t)) {
      var l = t.indexOf("--") === 0, a = _s(t, n[t], l);
      t === "float" && (t = "cssFloat"), l ? e.setProperty(t, a) : e[t] = a;
    }
  }
  var Xf = R({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Wl(e, n) {
    if (n) {
      if (Xf[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(o(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(o(60));
        if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(o(61));
      }
      if (n.style != null && typeof n.style != "object") throw Error(o(62));
    }
  }
  function Xl(e, n) {
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
  var Yl = null;
  function ql(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Zl = null, Pt = null, zt = null;
  function Bs(e) {
    if (e = Vr(e)) {
      if (typeof Zl != "function") throw Error(o(280));
      var n = e.stateNode;
      n && (n = Ci(n), Zl(e.stateNode, e.type, n));
    }
  }
  function Cs(e) {
    Pt ? zt ? zt.push(e) : zt = [e] : Pt = e;
  }
  function Es() {
    if (Pt) {
      var e = Pt, n = zt;
      if (zt = Pt = null, Bs(e), n) for (e = 0; e < n.length; e++) Bs(n[e]);
    }
  }
  function As(e, n) {
    return e(n);
  }
  function Ms() {
  }
  var bl = !1;
  function Vs(e, n, t) {
    if (bl) return e(n, t);
    bl = !0;
    try {
      return As(e, n, t);
    } finally {
      bl = !1, (Pt !== null || zt !== null) && (Ms(), Es());
    }
  }
  function ur(e, n) {
    var t = e.stateNode;
    if (t === null) return null;
    var l = Ci(t);
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
  var Jl = !1;
  if (p) try {
    var dr = {};
    Object.defineProperty(dr, "passive", { get: function() {
      Jl = !0;
    } }), window.addEventListener("test", dr, dr), window.removeEventListener("test", dr, dr);
  } catch {
    Jl = !1;
  }
  function Yf(e, n, t, l, a, s, d, N, y) {
    var B = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, B);
    } catch (z) {
      this.onError(z);
    }
  }
  var fr = !1, li = null, oi = !1, eo = null, qf = { onError: function(e) {
    fr = !0, li = e;
  } };
  function Zf(e, n, t, l, a, s, d, N, y) {
    fr = !1, li = null, Yf.apply(qf, arguments);
  }
  function bf(e, n, t, l, a, s, d, N, y) {
    if (Zf.apply(this, arguments), fr) {
      if (fr) {
        var B = li;
        fr = !1, li = null;
      } else throw Error(o(198));
      oi || (oi = !0, eo = B);
    }
  }
  function dt(e) {
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
  function Ps(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function zs(e) {
    if (dt(e) !== e) throw Error(o(188));
  }
  function Jf(e) {
    var n = e.alternate;
    if (!n) {
      if (n = dt(e), n === null) throw Error(o(188));
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
          if (s === t) return zs(a), e;
          if (s === l) return zs(a), n;
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
  function Os(e) {
    return e = Jf(e), e !== null ? Ts(e) : null;
  }
  function Ts(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var n = Ts(e);
      if (n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var Is = i.unstable_scheduleCallback, Rs = i.unstable_cancelCallback, eh = i.unstable_shouldYield, nh = i.unstable_requestPaint, Ae = i.unstable_now, th = i.unstable_getCurrentPriorityLevel, no = i.unstable_ImmediatePriority, Ls = i.unstable_UserBlockingPriority, ai = i.unstable_NormalPriority, rh = i.unstable_LowPriority, Fs = i.unstable_IdlePriority, si = null, kn = null;
  function ih(e) {
    if (kn && typeof kn.onCommitFiberRoot == "function") try {
      kn.onCommitFiberRoot(si, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var fn = Math.clz32 ? Math.clz32 : ah, lh = Math.log, oh = Math.LN2;
  function ah(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (lh(e) / oh | 0) | 0;
  }
  var ci = 64, ui = 4194304;
  function hr(e) {
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
  function di(e, n) {
    var t = e.pendingLanes;
    if (t === 0) return 0;
    var l = 0, a = e.suspendedLanes, s = e.pingedLanes, d = t & 268435455;
    if (d !== 0) {
      var N = d & ~a;
      N !== 0 ? l = hr(N) : (s &= d, s !== 0 && (l = hr(s)));
    } else d = t & ~a, d !== 0 ? l = hr(d) : s !== 0 && (l = hr(s));
    if (l === 0) return 0;
    if (n !== 0 && n !== l && (n & a) === 0 && (a = l & -l, s = n & -n, a >= s || a === 16 && (s & 4194240) !== 0)) return n;
    if ((l & 4) !== 0 && (l |= t & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= l; 0 < n; ) t = 31 - fn(n), a = 1 << t, l |= e[t], n &= ~a;
    return l;
  }
  function sh(e, n) {
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
  function ch(e, n) {
    for (var t = e.suspendedLanes, l = e.pingedLanes, a = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
      var d = 31 - fn(s), N = 1 << d, y = a[d];
      y === -1 ? ((N & t) === 0 || (N & l) !== 0) && (a[d] = sh(N, n)) : y <= n && (e.expiredLanes |= N), s &= ~N;
    }
  }
  function to(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function $s() {
    var e = ci;
    return ci <<= 1, (ci & 4194240) === 0 && (ci = 64), e;
  }
  function ro(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n;
  }
  function pr(e, n, t) {
    e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - fn(n), e[n] = t;
  }
  function uh(e, n) {
    var t = e.pendingLanes & ~n;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
    var l = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var a = 31 - fn(t), s = 1 << a;
      n[a] = 0, l[a] = -1, e[a] = -1, t &= ~s;
    }
  }
  function io(e, n) {
    var t = e.entangledLanes |= n;
    for (e = e.entanglements; t; ) {
      var l = 31 - fn(t), a = 1 << l;
      a & n | e[l] & n && (e[l] |= n), t &= ~a;
    }
  }
  var xe = 0;
  function Gs(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Ks, lo, Qs, js, Us, oo = !1, fi = [], jn = null, Un = null, Hn = null, gr = /* @__PURE__ */ new Map(), mr = /* @__PURE__ */ new Map(), Wn = [], dh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Hs(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        jn = null;
        break;
      case "dragenter":
      case "dragleave":
        Un = null;
        break;
      case "mouseover":
      case "mouseout":
        Hn = null;
        break;
      case "pointerover":
      case "pointerout":
        gr.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        mr.delete(n.pointerId);
    }
  }
  function Nr(e, n, t, l, a, s) {
    return e === null || e.nativeEvent !== s ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: l, nativeEvent: s, targetContainers: [a] }, n !== null && (n = Vr(n), n !== null && lo(n)), e) : (e.eventSystemFlags |= l, n = e.targetContainers, a !== null && n.indexOf(a) === -1 && n.push(a), e);
  }
  function fh(e, n, t, l, a) {
    switch (n) {
      case "focusin":
        return jn = Nr(jn, e, n, t, l, a), !0;
      case "dragenter":
        return Un = Nr(Un, e, n, t, l, a), !0;
      case "mouseover":
        return Hn = Nr(Hn, e, n, t, l, a), !0;
      case "pointerover":
        var s = a.pointerId;
        return gr.set(s, Nr(gr.get(s) || null, e, n, t, l, a)), !0;
      case "gotpointercapture":
        return s = a.pointerId, mr.set(s, Nr(mr.get(s) || null, e, n, t, l, a)), !0;
    }
    return !1;
  }
  function Ws(e) {
    var n = ft(e.target);
    if (n !== null) {
      var t = dt(n);
      if (t !== null) {
        if (n = t.tag, n === 13) {
          if (n = Ps(t), n !== null) {
            e.blockedOn = n, Us(e.priority, function() {
              Qs(t);
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
  function hi(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = so(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var l = new t.constructor(t.type, t);
        Yl = l, t.target.dispatchEvent(l), Yl = null;
      } else return n = Vr(t), n !== null && lo(n), e.blockedOn = t, !1;
      n.shift();
    }
    return !0;
  }
  function Xs(e, n, t) {
    hi(e) && t.delete(n);
  }
  function hh() {
    oo = !1, jn !== null && hi(jn) && (jn = null), Un !== null && hi(Un) && (Un = null), Hn !== null && hi(Hn) && (Hn = null), gr.forEach(Xs), mr.forEach(Xs);
  }
  function vr(e, n) {
    e.blockedOn === n && (e.blockedOn = null, oo || (oo = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, hh)));
  }
  function yr(e) {
    function n(a) {
      return vr(a, e);
    }
    if (0 < fi.length) {
      vr(fi[0], e);
      for (var t = 1; t < fi.length; t++) {
        var l = fi[t];
        l.blockedOn === e && (l.blockedOn = null);
      }
    }
    for (jn !== null && vr(jn, e), Un !== null && vr(Un, e), Hn !== null && vr(Hn, e), gr.forEach(n), mr.forEach(n), t = 0; t < Wn.length; t++) l = Wn[t], l.blockedOn === e && (l.blockedOn = null);
    for (; 0 < Wn.length && (t = Wn[0], t.blockedOn === null); ) Ws(t), t.blockedOn === null && Wn.shift();
  }
  var Ot = Z.ReactCurrentBatchConfig, pi = !0;
  function ph(e, n, t, l) {
    var a = xe, s = Ot.transition;
    Ot.transition = null;
    try {
      xe = 1, ao(e, n, t, l);
    } finally {
      xe = a, Ot.transition = s;
    }
  }
  function gh(e, n, t, l) {
    var a = xe, s = Ot.transition;
    Ot.transition = null;
    try {
      xe = 4, ao(e, n, t, l);
    } finally {
      xe = a, Ot.transition = s;
    }
  }
  function ao(e, n, t, l) {
    if (pi) {
      var a = so(e, n, t, l);
      if (a === null) Bo(e, n, l, gi, t), Hs(e, l);
      else if (fh(a, e, n, t, l)) l.stopPropagation();
      else if (Hs(e, l), n & 4 && -1 < dh.indexOf(e)) {
        for (; a !== null; ) {
          var s = Vr(a);
          if (s !== null && Ks(s), s = so(e, n, t, l), s === null && Bo(e, n, l, gi, t), s === a) break;
          a = s;
        }
        a !== null && l.stopPropagation();
      } else Bo(e, n, l, null, t);
    }
  }
  var gi = null;
  function so(e, n, t, l) {
    if (gi = null, e = ql(l), e = ft(e), e !== null) if (n = dt(e), n === null) e = null;
    else if (t = n.tag, t === 13) {
      if (e = Ps(n), e !== null) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
    return gi = e, null;
  }
  function Ys(e) {
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
        switch (th()) {
          case no:
            return 1;
          case Ls:
            return 4;
          case ai:
          case rh:
            return 16;
          case Fs:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Xn = null, co = null, mi = null;
  function qs() {
    if (mi) return mi;
    var e, n = co, t = n.length, l, a = "value" in Xn ? Xn.value : Xn.textContent, s = a.length;
    for (e = 0; e < t && n[e] === a[e]; e++) ;
    var d = t - e;
    for (l = 1; l <= d && n[t - l] === a[s - l]; l++) ;
    return mi = a.slice(e, 1 < l ? 1 - l : void 0);
  }
  function Ni(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function vi() {
    return !0;
  }
  function Zs() {
    return !1;
  }
  function nn(e) {
    function n(t, l, a, s, d) {
      this._reactName = t, this._targetInst = a, this.type = l, this.nativeEvent = s, this.target = d, this.currentTarget = null;
      for (var N in e) e.hasOwnProperty(N) && (t = e[N], this[N] = t ? t(s) : s[N]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? vi : Zs, this.isPropagationStopped = Zs, this;
    }
    return R(n.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var t = this.nativeEvent;
      t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = vi);
    }, stopPropagation: function() {
      var t = this.nativeEvent;
      t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = vi);
    }, persist: function() {
    }, isPersistent: vi }), n;
  }
  var Tt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, uo = nn(Tt), xr = R({}, Tt, { view: 0, detail: 0 }), mh = nn(xr), fo, ho, wr, yi = R({}, xr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: go, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== wr && (wr && e.type === "mousemove" ? (fo = e.screenX - wr.screenX, ho = e.screenY - wr.screenY) : ho = fo = 0, wr = e), fo);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ho;
  } }), bs = nn(yi), Nh = R({}, yi, { dataTransfer: 0 }), vh = nn(Nh), yh = R({}, xr, { relatedTarget: 0 }), po = nn(yh), xh = R({}, Tt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), wh = nn(xh), Sh = R({}, Tt, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), kh = nn(Sh), _h = R({}, Tt, { data: 0 }), Js = nn(_h), Dh = {
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
  }, Bh = {
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
  }, Ch = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Eh(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = Ch[e]) ? !!n[e] : !1;
  }
  function go() {
    return Eh;
  }
  var Ah = R({}, xr, { key: function(e) {
    if (e.key) {
      var n = Dh[e.key] || e.key;
      if (n !== "Unidentified") return n;
    }
    return e.type === "keypress" ? (e = Ni(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Bh[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: go, charCode: function(e) {
    return e.type === "keypress" ? Ni(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ni(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Mh = nn(Ah), Vh = R({}, yi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ec = nn(Vh), Ph = R({}, xr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: go }), zh = nn(Ph), Oh = R({}, Tt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Th = nn(Oh), Ih = R({}, yi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Rh = nn(Ih), Lh = [9, 13, 27, 32], mo = p && "CompositionEvent" in window, Sr = null;
  p && "documentMode" in document && (Sr = document.documentMode);
  var Fh = p && "TextEvent" in window && !Sr, nc = p && (!mo || Sr && 8 < Sr && 11 >= Sr), tc = " ", rc = !1;
  function ic(e, n) {
    switch (e) {
      case "keyup":
        return Lh.indexOf(n.keyCode) !== -1;
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
  function lc(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var It = !1;
  function $h(e, n) {
    switch (e) {
      case "compositionend":
        return lc(n);
      case "keypress":
        return n.which !== 32 ? null : (rc = !0, tc);
      case "textInput":
        return e = n.data, e === tc && rc ? null : e;
      default:
        return null;
    }
  }
  function Gh(e, n) {
    if (It) return e === "compositionend" || !mo && ic(e, n) ? (e = qs(), mi = co = Xn = null, It = !1, e) : null;
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
        return nc && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Kh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function oc(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Kh[e.type] : n === "textarea";
  }
  function ac(e, n, t, l) {
    Cs(l), n = _i(n, "onChange"), 0 < n.length && (t = new uo("onChange", "change", null, t, l), e.push({ event: t, listeners: n }));
  }
  var kr = null, _r = null;
  function Qh(e) {
    Dc(e, 0);
  }
  function xi(e) {
    var n = Gt(e);
    if (gs(n)) return e;
  }
  function jh(e, n) {
    if (e === "change") return n;
  }
  var sc = !1;
  if (p) {
    var No;
    if (p) {
      var vo = "oninput" in document;
      if (!vo) {
        var cc = document.createElement("div");
        cc.setAttribute("oninput", "return;"), vo = typeof cc.oninput == "function";
      }
      No = vo;
    } else No = !1;
    sc = No && (!document.documentMode || 9 < document.documentMode);
  }
  function uc() {
    kr && (kr.detachEvent("onpropertychange", dc), _r = kr = null);
  }
  function dc(e) {
    if (e.propertyName === "value" && xi(_r)) {
      var n = [];
      ac(n, _r, e, ql(e)), Vs(Qh, n);
    }
  }
  function Uh(e, n, t) {
    e === "focusin" ? (uc(), kr = n, _r = t, kr.attachEvent("onpropertychange", dc)) : e === "focusout" && uc();
  }
  function Hh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return xi(_r);
  }
  function Wh(e, n) {
    if (e === "click") return xi(n);
  }
  function Xh(e, n) {
    if (e === "input" || e === "change") return xi(n);
  }
  function Yh(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var hn = typeof Object.is == "function" ? Object.is : Yh;
  function Dr(e, n) {
    if (hn(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
    var t = Object.keys(e), l = Object.keys(n);
    if (t.length !== l.length) return !1;
    for (l = 0; l < t.length; l++) {
      var a = t[l];
      if (!m.call(n, a) || !hn(e[a], n[a])) return !1;
    }
    return !0;
  }
  function fc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function hc(e, n) {
    var t = fc(e);
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
      t = fc(t);
    }
  }
  function pc(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? pc(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function gc() {
    for (var e = window, n = ri(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) e = n.contentWindow;
      else break;
      n = ri(e.document);
    }
    return n;
  }
  function yo(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  function qh(e) {
    var n = gc(), t = e.focusedElem, l = e.selectionRange;
    if (n !== t && t && t.ownerDocument && pc(t.ownerDocument.documentElement, t)) {
      if (l !== null && yo(t)) {
        if (n = l.start, e = l.end, e === void 0 && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
        else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var a = t.textContent.length, s = Math.min(l.start, a);
          l = l.end === void 0 ? s : Math.min(l.end, a), !e.extend && s > l && (a = l, l = s, s = a), a = hc(t, s);
          var d = hc(
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
  var Zh = p && "documentMode" in document && 11 >= document.documentMode, Rt = null, xo = null, Br = null, wo = !1;
  function mc(e, n, t) {
    var l = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    wo || Rt == null || Rt !== ri(l) || (l = Rt, "selectionStart" in l && yo(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), Br && Dr(Br, l) || (Br = l, l = _i(xo, "onSelect"), 0 < l.length && (n = new uo("onSelect", "select", null, n, t), e.push({ event: n, listeners: l }), n.target = Rt)));
  }
  function wi(e, n) {
    var t = {};
    return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
  }
  var Lt = { animationend: wi("Animation", "AnimationEnd"), animationiteration: wi("Animation", "AnimationIteration"), animationstart: wi("Animation", "AnimationStart"), transitionend: wi("Transition", "TransitionEnd") }, So = {}, Nc = {};
  p && (Nc = document.createElement("div").style, "AnimationEvent" in window || (delete Lt.animationend.animation, delete Lt.animationiteration.animation, delete Lt.animationstart.animation), "TransitionEvent" in window || delete Lt.transitionend.transition);
  function Si(e) {
    if (So[e]) return So[e];
    if (!Lt[e]) return e;
    var n = Lt[e], t;
    for (t in n) if (n.hasOwnProperty(t) && t in Nc) return So[e] = n[t];
    return e;
  }
  var vc = Si("animationend"), yc = Si("animationiteration"), xc = Si("animationstart"), wc = Si("transitionend"), Sc = /* @__PURE__ */ new Map(), kc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Yn(e, n) {
    Sc.set(e, n), f(n, [e]);
  }
  for (var ko = 0; ko < kc.length; ko++) {
    var _o = kc[ko], bh = _o.toLowerCase(), Jh = _o[0].toUpperCase() + _o.slice(1);
    Yn(bh, "on" + Jh);
  }
  Yn(vc, "onAnimationEnd"), Yn(yc, "onAnimationIteration"), Yn(xc, "onAnimationStart"), Yn("dblclick", "onDoubleClick"), Yn("focusin", "onFocus"), Yn("focusout", "onBlur"), Yn(wc, "onTransitionEnd"), h("onMouseEnter", ["mouseout", "mouseover"]), h("onMouseLeave", ["mouseout", "mouseover"]), h("onPointerEnter", ["pointerout", "pointerover"]), h("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Cr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ep = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));
  function _c(e, n, t) {
    var l = e.type || "unknown-event";
    e.currentTarget = t, bf(l, n, void 0, e), e.currentTarget = null;
  }
  function Dc(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var l = e[t], a = l.event;
      l = l.listeners;
      e: {
        var s = void 0;
        if (n) for (var d = l.length - 1; 0 <= d; d--) {
          var N = l[d], y = N.instance, B = N.currentTarget;
          if (N = N.listener, y !== s && a.isPropagationStopped()) break e;
          _c(a, N, B), s = y;
        }
        else for (d = 0; d < l.length; d++) {
          if (N = l[d], y = N.instance, B = N.currentTarget, N = N.listener, y !== s && a.isPropagationStopped()) break e;
          _c(a, N, B), s = y;
        }
      }
    }
    if (oi) throw e = eo, oi = !1, eo = null, e;
  }
  function ke(e, n) {
    var t = n[Po];
    t === void 0 && (t = n[Po] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    t.has(l) || (Bc(n, e, 2, !1), t.add(l));
  }
  function Do(e, n, t) {
    var l = 0;
    n && (l |= 4), Bc(t, e, l, n);
  }
  var ki = "_reactListening" + Math.random().toString(36).slice(2);
  function Er(e) {
    if (!e[ki]) {
      e[ki] = !0, c.forEach(function(t) {
        t !== "selectionchange" && (ep.has(t) || Do(t, !1, e), Do(t, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[ki] || (n[ki] = !0, Do("selectionchange", !1, n));
    }
  }
  function Bc(e, n, t, l) {
    switch (Ys(n)) {
      case 1:
        var a = ph;
        break;
      case 4:
        a = gh;
        break;
      default:
        a = ao;
    }
    t = a.bind(null, n, t, e), a = void 0, !Jl || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (a = !0), l ? a !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: a }) : e.addEventListener(n, t, !0) : a !== void 0 ? e.addEventListener(n, t, { passive: a }) : e.addEventListener(n, t, !1);
  }
  function Bo(e, n, t, l, a) {
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
          if (d = ft(N), d === null) return;
          if (y = d.tag, y === 5 || y === 6) {
            l = s = d;
            continue e;
          }
          N = N.parentNode;
        }
      }
      l = l.return;
    }
    Vs(function() {
      var B = s, z = ql(t), O = [];
      e: {
        var V = Sc.get(e);
        if (V !== void 0) {
          var K = uo, H = e;
          switch (e) {
            case "keypress":
              if (Ni(t) === 0) break e;
            case "keydown":
            case "keyup":
              K = Mh;
              break;
            case "focusin":
              H = "focus", K = po;
              break;
            case "focusout":
              H = "blur", K = po;
              break;
            case "beforeblur":
            case "afterblur":
              K = po;
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
              K = bs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              K = vh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              K = zh;
              break;
            case vc:
            case yc:
            case xc:
              K = wh;
              break;
            case wc:
              K = Th;
              break;
            case "scroll":
              K = mh;
              break;
            case "wheel":
              K = Rh;
              break;
            case "copy":
            case "cut":
            case "paste":
              K = kh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              K = ec;
          }
          var W = (n & 4) !== 0, Me = !W && e === "scroll", _ = W ? V !== null ? V + "Capture" : null : V;
          W = [];
          for (var x = B, D; x !== null; ) {
            D = x;
            var L = D.stateNode;
            if (D.tag === 5 && L !== null && (D = L, _ !== null && (L = ur(x, _), L != null && W.push(Ar(x, L, D)))), Me) break;
            x = x.return;
          }
          0 < W.length && (V = new K(V, H, null, t, z), O.push({ event: V, listeners: W }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (V = e === "mouseover" || e === "pointerover", K = e === "mouseout" || e === "pointerout", V && t !== Yl && (H = t.relatedTarget || t.fromElement) && (ft(H) || H[Pn])) break e;
          if ((K || V) && (V = z.window === z ? z : (V = z.ownerDocument) ? V.defaultView || V.parentWindow : window, K ? (H = t.relatedTarget || t.toElement, K = B, H = H ? ft(H) : null, H !== null && (Me = dt(H), H !== Me || H.tag !== 5 && H.tag !== 6) && (H = null)) : (K = null, H = B), K !== H)) {
            if (W = bs, L = "onMouseLeave", _ = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (W = ec, L = "onPointerLeave", _ = "onPointerEnter", x = "pointer"), Me = K == null ? V : Gt(K), D = H == null ? V : Gt(H), V = new W(L, x + "leave", K, t, z), V.target = Me, V.relatedTarget = D, L = null, ft(z) === B && (W = new W(_, x + "enter", H, t, z), W.target = D, W.relatedTarget = Me, L = W), Me = L, K && H) n: {
              for (W = K, _ = H, x = 0, D = W; D; D = Ft(D)) x++;
              for (D = 0, L = _; L; L = Ft(L)) D++;
              for (; 0 < x - D; ) W = Ft(W), x--;
              for (; 0 < D - x; ) _ = Ft(_), D--;
              for (; x--; ) {
                if (W === _ || _ !== null && W === _.alternate) break n;
                W = Ft(W), _ = Ft(_);
              }
              W = null;
            }
            else W = null;
            K !== null && Cc(O, V, K, W, !1), H !== null && Me !== null && Cc(O, Me, H, W, !0);
          }
        }
        e: {
          if (V = B ? Gt(B) : window, K = V.nodeName && V.nodeName.toLowerCase(), K === "select" || K === "input" && V.type === "file") var X = jh;
          else if (oc(V)) if (sc) X = Xh;
          else {
            X = Hh;
            var J = Uh;
          }
          else (K = V.nodeName) && K.toLowerCase() === "input" && (V.type === "checkbox" || V.type === "radio") && (X = Wh);
          if (X && (X = X(e, B))) {
            ac(O, X, t, z);
            break e;
          }
          J && J(e, V, B), e === "focusout" && (J = V._wrapperState) && J.controlled && V.type === "number" && jl(V, "number", V.value);
        }
        switch (J = B ? Gt(B) : window, e) {
          case "focusin":
            (oc(J) || J.contentEditable === "true") && (Rt = J, xo = B, Br = null);
            break;
          case "focusout":
            Br = xo = Rt = null;
            break;
          case "mousedown":
            wo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            wo = !1, mc(O, t, z);
            break;
          case "selectionchange":
            if (Zh) break;
          case "keydown":
          case "keyup":
            mc(O, t, z);
        }
        var ee;
        if (mo) e: {
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
        else It ? ic(e, t) && (re = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (re = "onCompositionStart");
        re && (nc && t.locale !== "ko" && (It || re !== "onCompositionStart" ? re === "onCompositionEnd" && It && (ee = qs()) : (Xn = z, co = "value" in Xn ? Xn.value : Xn.textContent, It = !0)), J = _i(B, re), 0 < J.length && (re = new Js(re, e, null, t, z), O.push({ event: re, listeners: J }), ee ? re.data = ee : (ee = lc(t), ee !== null && (re.data = ee)))), (ee = Fh ? $h(e, t) : Gh(e, t)) && (B = _i(B, "onBeforeInput"), 0 < B.length && (z = new Js("onBeforeInput", "beforeinput", null, t, z), O.push({ event: z, listeners: B }), z.data = ee));
      }
      Dc(O, n);
    });
  }
  function Ar(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function _i(e, n) {
    for (var t = n + "Capture", l = []; e !== null; ) {
      var a = e, s = a.stateNode;
      a.tag === 5 && s !== null && (a = s, s = ur(e, t), s != null && l.unshift(Ar(e, s, a)), s = ur(e, n), s != null && l.push(Ar(e, s, a))), e = e.return;
    }
    return l;
  }
  function Ft(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Cc(e, n, t, l, a) {
    for (var s = n._reactName, d = []; t !== null && t !== l; ) {
      var N = t, y = N.alternate, B = N.stateNode;
      if (y !== null && y === l) break;
      N.tag === 5 && B !== null && (N = B, a ? (y = ur(t, s), y != null && d.unshift(Ar(t, y, N))) : a || (y = ur(t, s), y != null && d.push(Ar(t, y, N)))), t = t.return;
    }
    d.length !== 0 && e.push({ event: n, listeners: d });
  }
  var np = /\r\n?/g, tp = /\u0000|\uFFFD/g;
  function Ec(e) {
    return (typeof e == "string" ? e : "" + e).replace(np, `
`).replace(tp, "");
  }
  function Di(e, n, t) {
    if (n = Ec(n), Ec(e) !== n && t) throw Error(o(425));
  }
  function Bi() {
  }
  var Co = null, Eo = null;
  function Ao(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Mo = typeof setTimeout == "function" ? setTimeout : void 0, rp = typeof clearTimeout == "function" ? clearTimeout : void 0, Ac = typeof Promise == "function" ? Promise : void 0, ip = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ac < "u" ? function(e) {
    return Ac.resolve(null).then(e).catch(lp);
  } : Mo;
  function lp(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Vo(e, n) {
    var t = n, l = 0;
    do {
      var a = t.nextSibling;
      if (e.removeChild(t), a && a.nodeType === 8) if (t = a.data, t === "/$") {
        if (l === 0) {
          e.removeChild(a), yr(n);
          return;
        }
        l--;
      } else t !== "$" && t !== "$?" && t !== "$!" || l++;
      t = a;
    } while (t);
    yr(n);
  }
  function qn(e) {
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
  function Mc(e) {
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
  var $t = Math.random().toString(36).slice(2), _n = "__reactFiber$" + $t, Mr = "__reactProps$" + $t, Pn = "__reactContainer$" + $t, Po = "__reactEvents$" + $t, op = "__reactListeners$" + $t, ap = "__reactHandles$" + $t;
  function ft(e) {
    var n = e[_n];
    if (n) return n;
    for (var t = e.parentNode; t; ) {
      if (n = t[Pn] || t[_n]) {
        if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for (e = Mc(e); e !== null; ) {
          if (t = e[_n]) return t;
          e = Mc(e);
        }
        return n;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function Vr(e) {
    return e = e[_n] || e[Pn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Gt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Ci(e) {
    return e[Mr] || null;
  }
  var zo = [], Kt = -1;
  function Zn(e) {
    return { current: e };
  }
  function _e(e) {
    0 > Kt || (e.current = zo[Kt], zo[Kt] = null, Kt--);
  }
  function Se(e, n) {
    Kt++, zo[Kt] = e.current, e.current = n;
  }
  var bn = {}, $e = Zn(bn), We = Zn(!1), ht = bn;
  function Qt(e, n) {
    var t = e.type.contextTypes;
    if (!t) return bn;
    var l = e.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === n) return l.__reactInternalMemoizedMaskedChildContext;
    var a = {}, s;
    for (s in t) a[s] = n[s];
    return l && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = a), a;
  }
  function Xe(e) {
    return e = e.childContextTypes, e != null;
  }
  function Ei() {
    _e(We), _e($e);
  }
  function Vc(e, n, t) {
    if ($e.current !== bn) throw Error(o(168));
    Se($e, n), Se(We, t);
  }
  function Pc(e, n, t) {
    var l = e.stateNode;
    if (n = n.childContextTypes, typeof l.getChildContext != "function") return t;
    l = l.getChildContext();
    for (var a in l) if (!(a in n)) throw Error(o(108, ye(e) || "Unknown", a));
    return R({}, t, l);
  }
  function Ai(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || bn, ht = $e.current, Se($e, e), Se(We, We.current), !0;
  }
  function zc(e, n, t) {
    var l = e.stateNode;
    if (!l) throw Error(o(169));
    t ? (e = Pc(e, n, ht), l.__reactInternalMemoizedMergedChildContext = e, _e(We), _e($e), Se($e, e)) : _e(We), Se(We, t);
  }
  var zn = null, Mi = !1, Oo = !1;
  function Oc(e) {
    zn === null ? zn = [e] : zn.push(e);
  }
  function sp(e) {
    Mi = !0, Oc(e);
  }
  function Jn() {
    if (!Oo && zn !== null) {
      Oo = !0;
      var e = 0, n = xe;
      try {
        var t = zn;
        for (xe = 1; e < t.length; e++) {
          var l = t[e];
          do
            l = l(!0);
          while (l !== null);
        }
        zn = null, Mi = !1;
      } catch (a) {
        throw zn !== null && (zn = zn.slice(e + 1)), Is(no, Jn), a;
      } finally {
        xe = n, Oo = !1;
      }
    }
    return null;
  }
  var jt = [], Ut = 0, Vi = null, Pi = 0, on = [], an = 0, pt = null, On = 1, Tn = "";
  function gt(e, n) {
    jt[Ut++] = Pi, jt[Ut++] = Vi, Vi = e, Pi = n;
  }
  function Tc(e, n, t) {
    on[an++] = On, on[an++] = Tn, on[an++] = pt, pt = e;
    var l = On;
    e = Tn;
    var a = 32 - fn(l) - 1;
    l &= ~(1 << a), t += 1;
    var s = 32 - fn(n) + a;
    if (30 < s) {
      var d = a - a % 5;
      s = (l & (1 << d) - 1).toString(32), l >>= d, a -= d, On = 1 << 32 - fn(n) + a | t << a | l, Tn = s + e;
    } else On = 1 << s | t << a | l, Tn = e;
  }
  function To(e) {
    e.return !== null && (gt(e, 1), Tc(e, 1, 0));
  }
  function Io(e) {
    for (; e === Vi; ) Vi = jt[--Ut], jt[Ut] = null, Pi = jt[--Ut], jt[Ut] = null;
    for (; e === pt; ) pt = on[--an], on[an] = null, Tn = on[--an], on[an] = null, On = on[--an], on[an] = null;
  }
  var tn = null, rn = null, De = !1, pn = null;
  function Ic(e, n) {
    var t = dn(5, null, null, 0);
    t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
  }
  function Rc(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, tn = e, rn = qn(n.firstChild), !0) : !1;
      case 6:
        return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, tn = e, rn = null, !0) : !1;
      case 13:
        return n = n.nodeType !== 8 ? null : n, n !== null ? (t = pt !== null ? { id: On, overflow: Tn } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = dn(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, tn = e, rn = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ro(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Lo(e) {
    if (De) {
      var n = rn;
      if (n) {
        var t = n;
        if (!Rc(e, n)) {
          if (Ro(e)) throw Error(o(418));
          n = qn(t.nextSibling);
          var l = tn;
          n && Rc(e, n) ? Ic(l, t) : (e.flags = e.flags & -4097 | 2, De = !1, tn = e);
        }
      } else {
        if (Ro(e)) throw Error(o(418));
        e.flags = e.flags & -4097 | 2, De = !1, tn = e;
      }
    }
  }
  function Lc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    tn = e;
  }
  function zi(e) {
    if (e !== tn) return !1;
    if (!De) return Lc(e), De = !0, !1;
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !Ao(e.type, e.memoizedProps)), n && (n = rn)) {
      if (Ro(e)) throw Fc(), Error(o(418));
      for (; n; ) Ic(e, n), n = qn(n.nextSibling);
    }
    if (Lc(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n === 0) {
                rn = qn(e.nextSibling);
                break e;
              }
              n--;
            } else t !== "$" && t !== "$!" && t !== "$?" || n++;
          }
          e = e.nextSibling;
        }
        rn = null;
      }
    } else rn = tn ? qn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Fc() {
    for (var e = rn; e; ) e = qn(e.nextSibling);
  }
  function Ht() {
    rn = tn = null, De = !1;
  }
  function Fo(e) {
    pn === null ? pn = [e] : pn.push(e);
  }
  var cp = Z.ReactCurrentBatchConfig;
  function Pr(e, n, t) {
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
  function Oi(e, n) {
    throw e = Object.prototype.toString.call(n), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  function $c(e) {
    var n = e._init;
    return n(e._payload);
  }
  function Gc(e) {
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
      return _ = at(_, x), _.index = 0, _.sibling = null, _;
    }
    function s(_, x, D) {
      return _.index = D, e ? (D = _.alternate, D !== null ? (D = D.index, D < x ? (_.flags |= 2, x) : D) : (_.flags |= 2, x)) : (_.flags |= 1048576, x);
    }
    function d(_) {
      return e && _.alternate === null && (_.flags |= 2), _;
    }
    function N(_, x, D, L) {
      return x === null || x.tag !== 6 ? (x = Ma(D, _.mode, L), x.return = _, x) : (x = a(x, D), x.return = _, x);
    }
    function y(_, x, D, L) {
      var X = D.type;
      return X === I ? z(_, x, D.props.children, L, D.key) : x !== null && (x.elementType === X || typeof X == "object" && X !== null && X.$$typeof === ge && $c(X) === x.type) ? (L = a(x, D.props), L.ref = Pr(_, x, D), L.return = _, L) : (L = il(D.type, D.key, D.props, null, _.mode, L), L.ref = Pr(_, x, D), L.return = _, L);
    }
    function B(_, x, D, L) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== D.containerInfo || x.stateNode.implementation !== D.implementation ? (x = Va(D, _.mode, L), x.return = _, x) : (x = a(x, D.children || []), x.return = _, x);
    }
    function z(_, x, D, L, X) {
      return x === null || x.tag !== 7 ? (x = kt(D, _.mode, L, X), x.return = _, x) : (x = a(x, D), x.return = _, x);
    }
    function O(_, x, D) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = Ma("" + x, _.mode, D), x.return = _, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case ue:
            return D = il(x.type, x.key, x.props, null, _.mode, D), D.ref = Pr(_, null, x), D.return = _, D;
          case ae:
            return x = Va(x, _.mode, D), x.return = _, x;
          case ge:
            var L = x._init;
            return O(_, L(x._payload), D);
        }
        if (ar(x) || j(x)) return x = kt(x, _.mode, D, null), x.return = _, x;
        Oi(_, x);
      }
      return null;
    }
    function V(_, x, D, L) {
      var X = x !== null ? x.key : null;
      if (typeof D == "string" && D !== "" || typeof D == "number") return X !== null ? null : N(_, x, "" + D, L);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case ue:
            return D.key === X ? y(_, x, D, L) : null;
          case ae:
            return D.key === X ? B(_, x, D, L) : null;
          case ge:
            return X = D._init, V(
              _,
              x,
              X(D._payload),
              L
            );
        }
        if (ar(D) || j(D)) return X !== null ? null : z(_, x, D, L, null);
        Oi(_, D);
      }
      return null;
    }
    function K(_, x, D, L, X) {
      if (typeof L == "string" && L !== "" || typeof L == "number") return _ = _.get(D) || null, N(x, _, "" + L, X);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case ue:
            return _ = _.get(L.key === null ? D : L.key) || null, y(x, _, L, X);
          case ae:
            return _ = _.get(L.key === null ? D : L.key) || null, B(x, _, L, X);
          case ge:
            var J = L._init;
            return K(_, x, D, J(L._payload), X);
        }
        if (ar(L) || j(L)) return _ = _.get(D) || null, z(x, _, L, X, null);
        Oi(x, L);
      }
      return null;
    }
    function H(_, x, D, L) {
      for (var X = null, J = null, ee = x, re = x = 0, Ie = null; ee !== null && re < D.length; re++) {
        ee.index > re ? (Ie = ee, ee = null) : Ie = ee.sibling;
        var ve = V(_, ee, D[re], L);
        if (ve === null) {
          ee === null && (ee = Ie);
          break;
        }
        e && ee && ve.alternate === null && n(_, ee), x = s(ve, x, re), J === null ? X = ve : J.sibling = ve, J = ve, ee = Ie;
      }
      if (re === D.length) return t(_, ee), De && gt(_, re), X;
      if (ee === null) {
        for (; re < D.length; re++) ee = O(_, D[re], L), ee !== null && (x = s(ee, x, re), J === null ? X = ee : J.sibling = ee, J = ee);
        return De && gt(_, re), X;
      }
      for (ee = l(_, ee); re < D.length; re++) Ie = K(ee, _, re, D[re], L), Ie !== null && (e && Ie.alternate !== null && ee.delete(Ie.key === null ? re : Ie.key), x = s(Ie, x, re), J === null ? X = Ie : J.sibling = Ie, J = Ie);
      return e && ee.forEach(function(st) {
        return n(_, st);
      }), De && gt(_, re), X;
    }
    function W(_, x, D, L) {
      var X = j(D);
      if (typeof X != "function") throw Error(o(150));
      if (D = X.call(D), D == null) throw Error(o(151));
      for (var J = X = null, ee = x, re = x = 0, Ie = null, ve = D.next(); ee !== null && !ve.done; re++, ve = D.next()) {
        ee.index > re ? (Ie = ee, ee = null) : Ie = ee.sibling;
        var st = V(_, ee, ve.value, L);
        if (st === null) {
          ee === null && (ee = Ie);
          break;
        }
        e && ee && st.alternate === null && n(_, ee), x = s(st, x, re), J === null ? X = st : J.sibling = st, J = st, ee = Ie;
      }
      if (ve.done) return t(
        _,
        ee
      ), De && gt(_, re), X;
      if (ee === null) {
        for (; !ve.done; re++, ve = D.next()) ve = O(_, ve.value, L), ve !== null && (x = s(ve, x, re), J === null ? X = ve : J.sibling = ve, J = ve);
        return De && gt(_, re), X;
      }
      for (ee = l(_, ee); !ve.done; re++, ve = D.next()) ve = K(ee, _, re, ve.value, L), ve !== null && (e && ve.alternate !== null && ee.delete(ve.key === null ? re : ve.key), x = s(ve, x, re), J === null ? X = ve : J.sibling = ve, J = ve);
      return e && ee.forEach(function(Kp) {
        return n(_, Kp);
      }), De && gt(_, re), X;
    }
    function Me(_, x, D, L) {
      if (typeof D == "object" && D !== null && D.type === I && D.key === null && (D = D.props.children), typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case ue:
            e: {
              for (var X = D.key, J = x; J !== null; ) {
                if (J.key === X) {
                  if (X = D.type, X === I) {
                    if (J.tag === 7) {
                      t(_, J.sibling), x = a(J, D.props.children), x.return = _, _ = x;
                      break e;
                    }
                  } else if (J.elementType === X || typeof X == "object" && X !== null && X.$$typeof === ge && $c(X) === J.type) {
                    t(_, J.sibling), x = a(J, D.props), x.ref = Pr(_, J, D), x.return = _, _ = x;
                    break e;
                  }
                  t(_, J);
                  break;
                } else n(_, J);
                J = J.sibling;
              }
              D.type === I ? (x = kt(D.props.children, _.mode, L, D.key), x.return = _, _ = x) : (L = il(D.type, D.key, D.props, null, _.mode, L), L.ref = Pr(_, x, D), L.return = _, _ = L);
            }
            return d(_);
          case ae:
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
              x = Va(D, _.mode, L), x.return = _, _ = x;
            }
            return d(_);
          case ge:
            return J = D._init, Me(_, x, J(D._payload), L);
        }
        if (ar(D)) return H(_, x, D, L);
        if (j(D)) return W(_, x, D, L);
        Oi(_, D);
      }
      return typeof D == "string" && D !== "" || typeof D == "number" ? (D = "" + D, x !== null && x.tag === 6 ? (t(_, x.sibling), x = a(x, D), x.return = _, _ = x) : (t(_, x), x = Ma(D, _.mode, L), x.return = _, _ = x), d(_)) : t(_, x);
    }
    return Me;
  }
  var Wt = Gc(!0), Kc = Gc(!1), Ti = Zn(null), Ii = null, Xt = null, $o = null;
  function Go() {
    $o = Xt = Ii = null;
  }
  function Ko(e) {
    var n = Ti.current;
    _e(Ti), e._currentValue = n;
  }
  function Qo(e, n, t) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, l !== null && (l.childLanes |= n)) : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n), e === t) break;
      e = e.return;
    }
  }
  function Yt(e, n) {
    Ii = e, $o = Xt = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & n) !== 0 && (Ye = !0), e.firstContext = null);
  }
  function sn(e) {
    var n = e._currentValue;
    if ($o !== e) if (e = { context: e, memoizedValue: n, next: null }, Xt === null) {
      if (Ii === null) throw Error(o(308));
      Xt = e, Ii.dependencies = { lanes: 0, firstContext: e };
    } else Xt = Xt.next = e;
    return n;
  }
  var mt = null;
  function jo(e) {
    mt === null ? mt = [e] : mt.push(e);
  }
  function Qc(e, n, t, l) {
    var a = n.interleaved;
    return a === null ? (t.next = t, jo(n)) : (t.next = a.next, a.next = t), n.interleaved = t, In(e, l);
  }
  function In(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; ) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var et = !1;
  function Uo(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function jc(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Rn(e, n) {
    return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function nt(e, n, t) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Ne & 2) !== 0) {
      var a = l.pending;
      return a === null ? n.next = n : (n.next = a.next, a.next = n), l.pending = n, In(e, t);
    }
    return a = l.interleaved, a === null ? (n.next = n, jo(l)) : (n.next = a.next, a.next = n), l.interleaved = n, In(e, t);
  }
  function Ri(e, n, t) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
      var l = n.lanes;
      l &= e.pendingLanes, t |= l, n.lanes = t, io(e, t);
    }
  }
  function Uc(e, n) {
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
  function Li(e, n, t, l) {
    var a = e.updateQueue;
    et = !1;
    var s = a.firstBaseUpdate, d = a.lastBaseUpdate, N = a.shared.pending;
    if (N !== null) {
      a.shared.pending = null;
      var y = N, B = y.next;
      y.next = null, d === null ? s = B : d.next = B, d = y;
      var z = e.alternate;
      z !== null && (z = z.updateQueue, N = z.lastBaseUpdate, N !== d && (N === null ? z.firstBaseUpdate = B : N.next = B, z.lastBaseUpdate = y));
    }
    if (s !== null) {
      var O = a.baseState;
      d = 0, z = B = y = null, N = s;
      do {
        var V = N.lane, K = N.eventTime;
        if ((l & V) === V) {
          z !== null && (z = z.next = {
            eventTime: K,
            lane: 0,
            tag: N.tag,
            payload: N.payload,
            callback: N.callback,
            next: null
          });
          e: {
            var H = e, W = N;
            switch (V = n, K = t, W.tag) {
              case 1:
                if (H = W.payload, typeof H == "function") {
                  O = H.call(K, O, V);
                  break e;
                }
                O = H;
                break e;
              case 3:
                H.flags = H.flags & -65537 | 128;
              case 0:
                if (H = W.payload, V = typeof H == "function" ? H.call(K, O, V) : H, V == null) break e;
                O = R({}, O, V);
                break e;
              case 2:
                et = !0;
            }
          }
          N.callback !== null && N.lane !== 0 && (e.flags |= 64, V = a.effects, V === null ? a.effects = [N] : V.push(N));
        } else K = { eventTime: K, lane: V, tag: N.tag, payload: N.payload, callback: N.callback, next: null }, z === null ? (B = z = K, y = O) : z = z.next = K, d |= V;
        if (N = N.next, N === null) {
          if (N = a.shared.pending, N === null) break;
          V = N, N = V.next, V.next = null, a.lastBaseUpdate = V, a.shared.pending = null;
        }
      } while (!0);
      if (z === null && (y = O), a.baseState = y, a.firstBaseUpdate = B, a.lastBaseUpdate = z, n = a.shared.interleaved, n !== null) {
        a = n;
        do
          d |= a.lane, a = a.next;
        while (a !== n);
      } else s === null && (a.shared.lanes = 0);
      yt |= d, e.lanes = d, e.memoizedState = O;
    }
  }
  function Hc(e, n, t) {
    if (e = n.effects, n.effects = null, e !== null) for (n = 0; n < e.length; n++) {
      var l = e[n], a = l.callback;
      if (a !== null) {
        if (l.callback = null, l = t, typeof a != "function") throw Error(o(191, a));
        a.call(l);
      }
    }
  }
  var zr = {}, Dn = Zn(zr), Or = Zn(zr), Tr = Zn(zr);
  function Nt(e) {
    if (e === zr) throw Error(o(174));
    return e;
  }
  function Ho(e, n) {
    switch (Se(Tr, n), Se(Or, e), Se(Dn, zr), e = n.nodeType, e) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Hl(null, "");
        break;
      default:
        e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = Hl(n, e);
    }
    _e(Dn), Se(Dn, n);
  }
  function qt() {
    _e(Dn), _e(Or), _e(Tr);
  }
  function Wc(e) {
    Nt(Tr.current);
    var n = Nt(Dn.current), t = Hl(n, e.type);
    n !== t && (Se(Or, e), Se(Dn, t));
  }
  function Wo(e) {
    Or.current === e && (_e(Dn), _e(Or));
  }
  var Be = Zn(0);
  function Fi(e) {
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
  var Xo = [];
  function Yo() {
    for (var e = 0; e < Xo.length; e++) Xo[e]._workInProgressVersionPrimary = null;
    Xo.length = 0;
  }
  var $i = Z.ReactCurrentDispatcher, qo = Z.ReactCurrentBatchConfig, vt = 0, Ce = null, Pe = null, Oe = null, Gi = !1, Ir = !1, Rr = 0, up = 0;
  function Ge() {
    throw Error(o(321));
  }
  function Zo(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++) if (!hn(e[t], n[t])) return !1;
    return !0;
  }
  function bo(e, n, t, l, a, s) {
    if (vt = s, Ce = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, $i.current = e === null || e.memoizedState === null ? pp : gp, e = t(l, a), Ir) {
      s = 0;
      do {
        if (Ir = !1, Rr = 0, 25 <= s) throw Error(o(301));
        s += 1, Oe = Pe = null, n.updateQueue = null, $i.current = mp, e = t(l, a);
      } while (Ir);
    }
    if ($i.current = ji, n = Pe !== null && Pe.next !== null, vt = 0, Oe = Pe = Ce = null, Gi = !1, n) throw Error(o(300));
    return e;
  }
  function Jo() {
    var e = Rr !== 0;
    return Rr = 0, e;
  }
  function Bn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Oe === null ? Ce.memoizedState = Oe = e : Oe = Oe.next = e, Oe;
  }
  function cn() {
    if (Pe === null) {
      var e = Ce.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Pe.next;
    var n = Oe === null ? Ce.memoizedState : Oe.next;
    if (n !== null) Oe = n, Pe = e;
    else {
      if (e === null) throw Error(o(310));
      Pe = e, e = { memoizedState: Pe.memoizedState, baseState: Pe.baseState, baseQueue: Pe.baseQueue, queue: Pe.queue, next: null }, Oe === null ? Ce.memoizedState = Oe = e : Oe = Oe.next = e;
    }
    return Oe;
  }
  function Lr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function ea(e) {
    var n = cn(), t = n.queue;
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
        var z = B.lane;
        if ((vt & z) === z) y !== null && (y = y.next = { lane: 0, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }), l = B.hasEagerState ? B.eagerState : e(l, B.action);
        else {
          var O = {
            lane: z,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null
          };
          y === null ? (N = y = O, d = l) : y = y.next = O, Ce.lanes |= z, yt |= z;
        }
        B = B.next;
      } while (B !== null && B !== s);
      y === null ? d = l : y.next = N, hn(l, n.memoizedState) || (Ye = !0), n.memoizedState = l, n.baseState = d, n.baseQueue = y, t.lastRenderedState = l;
    }
    if (e = t.interleaved, e !== null) {
      a = e;
      do
        s = a.lane, Ce.lanes |= s, yt |= s, a = a.next;
      while (a !== e);
    } else a === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function na(e) {
    var n = cn(), t = n.queue;
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
  function Xc() {
  }
  function Yc(e, n) {
    var t = Ce, l = cn(), a = n(), s = !hn(l.memoizedState, a);
    if (s && (l.memoizedState = a, Ye = !0), l = l.queue, ta(bc.bind(null, t, l, e), [e]), l.getSnapshot !== n || s || Oe !== null && Oe.memoizedState.tag & 1) {
      if (t.flags |= 2048, Fr(9, Zc.bind(null, t, l, a, n), void 0, null), Te === null) throw Error(o(349));
      (vt & 30) !== 0 || qc(t, n, a);
    }
    return a;
  }
  function qc(e, n, t) {
    e.flags |= 16384, e = { getSnapshot: n, value: t }, n = Ce.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, Ce.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
  }
  function Zc(e, n, t, l) {
    n.value = t, n.getSnapshot = l, Jc(n) && eu(e);
  }
  function bc(e, n, t) {
    return t(function() {
      Jc(n) && eu(e);
    });
  }
  function Jc(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !hn(e, t);
    } catch {
      return !0;
    }
  }
  function eu(e) {
    var n = In(e, 1);
    n !== null && vn(n, e, 1, -1);
  }
  function nu(e) {
    var n = Bn();
    return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Lr, lastRenderedState: e }, n.queue = e, e = e.dispatch = hp.bind(null, Ce, e), [n.memoizedState, e];
  }
  function Fr(e, n, t, l) {
    return e = { tag: e, create: n, destroy: t, deps: l, next: null }, n = Ce.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, Ce.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (l = t.next, t.next = e, e.next = l, n.lastEffect = e)), e;
  }
  function tu() {
    return cn().memoizedState;
  }
  function Ki(e, n, t, l) {
    var a = Bn();
    Ce.flags |= e, a.memoizedState = Fr(1 | n, t, void 0, l === void 0 ? null : l);
  }
  function Qi(e, n, t, l) {
    var a = cn();
    l = l === void 0 ? null : l;
    var s = void 0;
    if (Pe !== null) {
      var d = Pe.memoizedState;
      if (s = d.destroy, l !== null && Zo(l, d.deps)) {
        a.memoizedState = Fr(n, t, s, l);
        return;
      }
    }
    Ce.flags |= e, a.memoizedState = Fr(1 | n, t, s, l);
  }
  function ru(e, n) {
    return Ki(8390656, 8, e, n);
  }
  function ta(e, n) {
    return Qi(2048, 8, e, n);
  }
  function iu(e, n) {
    return Qi(4, 2, e, n);
  }
  function lu(e, n) {
    return Qi(4, 4, e, n);
  }
  function ou(e, n) {
    if (typeof n == "function") return e = e(), n(e), function() {
      n(null);
    };
    if (n != null) return e = e(), n.current = e, function() {
      n.current = null;
    };
  }
  function au(e, n, t) {
    return t = t != null ? t.concat([e]) : null, Qi(4, 4, ou.bind(null, n, e), t);
  }
  function ra() {
  }
  function su(e, n) {
    var t = cn();
    n = n === void 0 ? null : n;
    var l = t.memoizedState;
    return l !== null && n !== null && Zo(n, l[1]) ? l[0] : (t.memoizedState = [e, n], e);
  }
  function cu(e, n) {
    var t = cn();
    n = n === void 0 ? null : n;
    var l = t.memoizedState;
    return l !== null && n !== null && Zo(n, l[1]) ? l[0] : (e = e(), t.memoizedState = [e, n], e);
  }
  function uu(e, n, t) {
    return (vt & 21) === 0 ? (e.baseState && (e.baseState = !1, Ye = !0), e.memoizedState = t) : (hn(t, n) || (t = $s(), Ce.lanes |= t, yt |= t, e.baseState = !0), n);
  }
  function dp(e, n) {
    var t = xe;
    xe = t !== 0 && 4 > t ? t : 4, e(!0);
    var l = qo.transition;
    qo.transition = {};
    try {
      e(!1), n();
    } finally {
      xe = t, qo.transition = l;
    }
  }
  function du() {
    return cn().memoizedState;
  }
  function fp(e, n, t) {
    var l = lt(e);
    if (t = { lane: l, action: t, hasEagerState: !1, eagerState: null, next: null }, fu(e)) hu(n, t);
    else if (t = Qc(e, n, t, l), t !== null) {
      var a = He();
      vn(t, e, l, a), pu(t, n, l);
    }
  }
  function hp(e, n, t) {
    var l = lt(e), a = { lane: l, action: t, hasEagerState: !1, eagerState: null, next: null };
    if (fu(e)) hu(n, a);
    else {
      var s = e.alternate;
      if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = n.lastRenderedReducer, s !== null)) try {
        var d = n.lastRenderedState, N = s(d, t);
        if (a.hasEagerState = !0, a.eagerState = N, hn(N, d)) {
          var y = n.interleaved;
          y === null ? (a.next = a, jo(n)) : (a.next = y.next, y.next = a), n.interleaved = a;
          return;
        }
      } catch {
      } finally {
      }
      t = Qc(e, n, a, l), t !== null && (a = He(), vn(t, e, l, a), pu(t, n, l));
    }
  }
  function fu(e) {
    var n = e.alternate;
    return e === Ce || n !== null && n === Ce;
  }
  function hu(e, n) {
    Ir = Gi = !0;
    var t = e.pending;
    t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
  }
  function pu(e, n, t) {
    if ((t & 4194240) !== 0) {
      var l = n.lanes;
      l &= e.pendingLanes, t |= l, n.lanes = t, io(e, t);
    }
  }
  var ji = { readContext: sn, useCallback: Ge, useContext: Ge, useEffect: Ge, useImperativeHandle: Ge, useInsertionEffect: Ge, useLayoutEffect: Ge, useMemo: Ge, useReducer: Ge, useRef: Ge, useState: Ge, useDebugValue: Ge, useDeferredValue: Ge, useTransition: Ge, useMutableSource: Ge, useSyncExternalStore: Ge, useId: Ge, unstable_isNewReconciler: !1 }, pp = { readContext: sn, useCallback: function(e, n) {
    return Bn().memoizedState = [e, n === void 0 ? null : n], e;
  }, useContext: sn, useEffect: ru, useImperativeHandle: function(e, n, t) {
    return t = t != null ? t.concat([e]) : null, Ki(
      4194308,
      4,
      ou.bind(null, n, e),
      t
    );
  }, useLayoutEffect: function(e, n) {
    return Ki(4194308, 4, e, n);
  }, useInsertionEffect: function(e, n) {
    return Ki(4, 2, e, n);
  }, useMemo: function(e, n) {
    var t = Bn();
    return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
  }, useReducer: function(e, n, t) {
    var l = Bn();
    return n = t !== void 0 ? t(n) : n, l.memoizedState = l.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, l.queue = e, e = e.dispatch = fp.bind(null, Ce, e), [l.memoizedState, e];
  }, useRef: function(e) {
    var n = Bn();
    return e = { current: e }, n.memoizedState = e;
  }, useState: nu, useDebugValue: ra, useDeferredValue: function(e) {
    return Bn().memoizedState = e;
  }, useTransition: function() {
    var e = nu(!1), n = e[0];
    return e = dp.bind(null, e[1]), Bn().memoizedState = e, [n, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, n, t) {
    var l = Ce, a = Bn();
    if (De) {
      if (t === void 0) throw Error(o(407));
      t = t();
    } else {
      if (t = n(), Te === null) throw Error(o(349));
      (vt & 30) !== 0 || qc(l, n, t);
    }
    a.memoizedState = t;
    var s = { value: t, getSnapshot: n };
    return a.queue = s, ru(bc.bind(
      null,
      l,
      s,
      e
    ), [e]), l.flags |= 2048, Fr(9, Zc.bind(null, l, s, t, n), void 0, null), t;
  }, useId: function() {
    var e = Bn(), n = Te.identifierPrefix;
    if (De) {
      var t = Tn, l = On;
      t = (l & ~(1 << 32 - fn(l) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = Rr++, 0 < t && (n += "H" + t.toString(32)), n += ":";
    } else t = up++, n = ":" + n + "r" + t.toString(32) + ":";
    return e.memoizedState = n;
  }, unstable_isNewReconciler: !1 }, gp = {
    readContext: sn,
    useCallback: su,
    useContext: sn,
    useEffect: ta,
    useImperativeHandle: au,
    useInsertionEffect: iu,
    useLayoutEffect: lu,
    useMemo: cu,
    useReducer: ea,
    useRef: tu,
    useState: function() {
      return ea(Lr);
    },
    useDebugValue: ra,
    useDeferredValue: function(e) {
      var n = cn();
      return uu(n, Pe.memoizedState, e);
    },
    useTransition: function() {
      var e = ea(Lr)[0], n = cn().memoizedState;
      return [e, n];
    },
    useMutableSource: Xc,
    useSyncExternalStore: Yc,
    useId: du,
    unstable_isNewReconciler: !1
  }, mp = { readContext: sn, useCallback: su, useContext: sn, useEffect: ta, useImperativeHandle: au, useInsertionEffect: iu, useLayoutEffect: lu, useMemo: cu, useReducer: na, useRef: tu, useState: function() {
    return na(Lr);
  }, useDebugValue: ra, useDeferredValue: function(e) {
    var n = cn();
    return Pe === null ? n.memoizedState = e : uu(n, Pe.memoizedState, e);
  }, useTransition: function() {
    var e = na(Lr)[0], n = cn().memoizedState;
    return [e, n];
  }, useMutableSource: Xc, useSyncExternalStore: Yc, useId: du, unstable_isNewReconciler: !1 };
  function gn(e, n) {
    if (e && e.defaultProps) {
      n = R({}, n), e = e.defaultProps;
      for (var t in e) n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  function ia(e, n, t, l) {
    n = e.memoizedState, t = t(l, n), t = t == null ? n : R({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var Ui = { isMounted: function(e) {
    return (e = e._reactInternals) ? dt(e) === e : !1;
  }, enqueueSetState: function(e, n, t) {
    e = e._reactInternals;
    var l = He(), a = lt(e), s = Rn(l, a);
    s.payload = n, t != null && (s.callback = t), n = nt(e, s, a), n !== null && (vn(n, e, a, l), Ri(n, e, a));
  }, enqueueReplaceState: function(e, n, t) {
    e = e._reactInternals;
    var l = He(), a = lt(e), s = Rn(l, a);
    s.tag = 1, s.payload = n, t != null && (s.callback = t), n = nt(e, s, a), n !== null && (vn(n, e, a, l), Ri(n, e, a));
  }, enqueueForceUpdate: function(e, n) {
    e = e._reactInternals;
    var t = He(), l = lt(e), a = Rn(t, l);
    a.tag = 2, n != null && (a.callback = n), n = nt(e, a, l), n !== null && (vn(n, e, l, t), Ri(n, e, l));
  } };
  function gu(e, n, t, l, a, s, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, s, d) : n.prototype && n.prototype.isPureReactComponent ? !Dr(t, l) || !Dr(a, s) : !0;
  }
  function mu(e, n, t) {
    var l = !1, a = bn, s = n.contextType;
    return typeof s == "object" && s !== null ? s = sn(s) : (a = Xe(n) ? ht : $e.current, l = n.contextTypes, s = (l = l != null) ? Qt(e, a) : bn), n = new n(t, s), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Ui, e.stateNode = n, n._reactInternals = e, l && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = s), n;
  }
  function Nu(e, n, t, l) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, l), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, l), n.state !== e && Ui.enqueueReplaceState(n, n.state, null);
  }
  function la(e, n, t, l) {
    var a = e.stateNode;
    a.props = t, a.state = e.memoizedState, a.refs = {}, Uo(e);
    var s = n.contextType;
    typeof s == "object" && s !== null ? a.context = sn(s) : (s = Xe(n) ? ht : $e.current, a.context = Qt(e, s)), a.state = e.memoizedState, s = n.getDerivedStateFromProps, typeof s == "function" && (ia(e, n, s, t), a.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (n = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), n !== a.state && Ui.enqueueReplaceState(a, a.state, null), Li(e, t, a, l), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Zt(e, n) {
    try {
      var t = "", l = n;
      do
        t += te(l), l = l.return;
      while (l);
      var a = t;
    } catch (s) {
      a = `
Error generating stack: ` + s.message + `
` + s.stack;
    }
    return { value: e, source: n, stack: a, digest: null };
  }
  function oa(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
  }
  function aa(e, n) {
    try {
      console.error(n.value);
    } catch (t) {
      setTimeout(function() {
        throw t;
      });
    }
  }
  var Np = typeof WeakMap == "function" ? WeakMap : Map;
  function vu(e, n, t) {
    t = Rn(-1, t), t.tag = 3, t.payload = { element: null };
    var l = n.value;
    return t.callback = function() {
      bi || (bi = !0, Sa = l), aa(e, n);
    }, t;
  }
  function yu(e, n, t) {
    t = Rn(-1, t), t.tag = 3;
    var l = e.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var a = n.value;
      t.payload = function() {
        return l(a);
      }, t.callback = function() {
        aa(e, n);
      };
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (t.callback = function() {
      aa(e, n), typeof l != "function" && (rt === null ? rt = /* @__PURE__ */ new Set([this]) : rt.add(this));
      var d = n.stack;
      this.componentDidCatch(n.value, { componentStack: d !== null ? d : "" });
    }), t;
  }
  function xu(e, n, t) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Np();
      var a = /* @__PURE__ */ new Set();
      l.set(n, a);
    } else a = l.get(n), a === void 0 && (a = /* @__PURE__ */ new Set(), l.set(n, a));
    a.has(t) || (a.add(t), e = Vp.bind(null, e, n, t), n.then(e, e));
  }
  function wu(e) {
    do {
      var n;
      if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Su(e, n, t, l, a) {
    return (e.mode & 1) === 0 ? (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = Rn(-1, 1), n.tag = 2, nt(t, n, 1))), t.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e);
  }
  var vp = Z.ReactCurrentOwner, Ye = !1;
  function Ue(e, n, t, l) {
    n.child = e === null ? Kc(n, null, t, l) : Wt(n, e.child, t, l);
  }
  function ku(e, n, t, l, a) {
    t = t.render;
    var s = n.ref;
    return Yt(n, a), l = bo(e, n, t, l, s, a), t = Jo(), e !== null && !Ye ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~a, Ln(e, n, a)) : (De && t && To(n), n.flags |= 1, Ue(e, n, l, a), n.child);
  }
  function _u(e, n, t, l, a) {
    if (e === null) {
      var s = t.type;
      return typeof s == "function" && !Aa(s) && s.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = s, Du(e, n, s, l, a)) : (e = il(t.type, null, l, n, n.mode, a), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (s = e.child, (e.lanes & a) === 0) {
      var d = s.memoizedProps;
      if (t = t.compare, t = t !== null ? t : Dr, t(d, l) && e.ref === n.ref) return Ln(e, n, a);
    }
    return n.flags |= 1, e = at(s, l), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Du(e, n, t, l, a) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (Dr(s, l) && e.ref === n.ref) if (Ye = !1, n.pendingProps = l = s, (e.lanes & a) !== 0) (e.flags & 131072) !== 0 && (Ye = !0);
      else return n.lanes = e.lanes, Ln(e, n, a);
    }
    return sa(e, n, t, l, a);
  }
  function Bu(e, n, t) {
    var l = n.pendingProps, a = l.children, s = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") if ((n.mode & 1) === 0) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Se(Jt, ln), ln |= t;
    else {
      if ((t & 1073741824) === 0) return e = s !== null ? s.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, Se(Jt, ln), ln |= e, null;
      n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, l = s !== null ? s.baseLanes : t, Se(Jt, ln), ln |= l;
    }
    else s !== null ? (l = s.baseLanes | t, n.memoizedState = null) : l = t, Se(Jt, ln), ln |= l;
    return Ue(e, n, a, t), n.child;
  }
  function Cu(e, n) {
    var t = n.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
  }
  function sa(e, n, t, l, a) {
    var s = Xe(t) ? ht : $e.current;
    return s = Qt(n, s), Yt(n, a), t = bo(e, n, t, l, s, a), l = Jo(), e !== null && !Ye ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~a, Ln(e, n, a)) : (De && l && To(n), n.flags |= 1, Ue(e, n, t, a), n.child);
  }
  function Eu(e, n, t, l, a) {
    if (Xe(t)) {
      var s = !0;
      Ai(n);
    } else s = !1;
    if (Yt(n, a), n.stateNode === null) Wi(e, n), mu(n, t, l), la(n, t, l, a), l = !0;
    else if (e === null) {
      var d = n.stateNode, N = n.memoizedProps;
      d.props = N;
      var y = d.context, B = t.contextType;
      typeof B == "object" && B !== null ? B = sn(B) : (B = Xe(t) ? ht : $e.current, B = Qt(n, B));
      var z = t.getDerivedStateFromProps, O = typeof z == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      O || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (N !== l || y !== B) && Nu(n, d, l, B), et = !1;
      var V = n.memoizedState;
      d.state = V, Li(n, l, d, a), y = n.memoizedState, N !== l || V !== y || We.current || et ? (typeof z == "function" && (ia(n, t, z, l), y = n.memoizedState), (N = et || gu(n, t, N, l, V, y, B)) ? (O || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = l, n.memoizedState = y), d.props = l, d.state = y, d.context = B, l = N) : (typeof d.componentDidMount == "function" && (n.flags |= 4194308), l = !1);
    } else {
      d = n.stateNode, jc(e, n), N = n.memoizedProps, B = n.type === n.elementType ? N : gn(n.type, N), d.props = B, O = n.pendingProps, V = d.context, y = t.contextType, typeof y == "object" && y !== null ? y = sn(y) : (y = Xe(t) ? ht : $e.current, y = Qt(n, y));
      var K = t.getDerivedStateFromProps;
      (z = typeof K == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (N !== O || V !== y) && Nu(n, d, l, y), et = !1, V = n.memoizedState, d.state = V, Li(n, l, d, a);
      var H = n.memoizedState;
      N !== O || V !== H || We.current || et ? (typeof K == "function" && (ia(n, t, K, l), H = n.memoizedState), (B = et || gu(n, t, B, l, V, H, y) || !1) ? (z || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(l, H, y), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(l, H, y)), typeof d.componentDidUpdate == "function" && (n.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || N === e.memoizedProps && V === e.memoizedState || (n.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || N === e.memoizedProps && V === e.memoizedState || (n.flags |= 1024), n.memoizedProps = l, n.memoizedState = H), d.props = l, d.state = H, d.context = y, l = B) : (typeof d.componentDidUpdate != "function" || N === e.memoizedProps && V === e.memoizedState || (n.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || N === e.memoizedProps && V === e.memoizedState || (n.flags |= 1024), l = !1);
    }
    return ca(e, n, t, l, s, a);
  }
  function ca(e, n, t, l, a, s) {
    Cu(e, n);
    var d = (n.flags & 128) !== 0;
    if (!l && !d) return a && zc(n, t, !1), Ln(e, n, s);
    l = n.stateNode, vp.current = n;
    var N = d && typeof t.getDerivedStateFromError != "function" ? null : l.render();
    return n.flags |= 1, e !== null && d ? (n.child = Wt(n, e.child, null, s), n.child = Wt(n, null, N, s)) : Ue(e, n, N, s), n.memoizedState = l.state, a && zc(n, t, !0), n.child;
  }
  function Au(e) {
    var n = e.stateNode;
    n.pendingContext ? Vc(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Vc(e, n.context, !1), Ho(e, n.containerInfo);
  }
  function Mu(e, n, t, l, a) {
    return Ht(), Fo(a), n.flags |= 256, Ue(e, n, t, l), n.child;
  }
  var ua = { dehydrated: null, treeContext: null, retryLane: 0 };
  function da(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Vu(e, n, t) {
    var l = n.pendingProps, a = Be.current, s = !1, d = (n.flags & 128) !== 0, N;
    if ((N = d) || (N = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), N ? (s = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), Se(Be, a & 1), e === null)
      return Lo(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((n.mode & 1) === 0 ? n.lanes = 1 : e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824, null) : (d = l.children, e = l.fallback, s ? (l = n.mode, s = n.child, d = { mode: "hidden", children: d }, (l & 1) === 0 && s !== null ? (s.childLanes = 0, s.pendingProps = d) : s = ll(d, l, 0, null), e = kt(e, l, t, null), s.return = n, e.return = n, s.sibling = e, n.child = s, n.child.memoizedState = da(t), n.memoizedState = ua, e) : fa(n, d));
    if (a = e.memoizedState, a !== null && (N = a.dehydrated, N !== null)) return yp(e, n, d, l, N, a, t);
    if (s) {
      s = l.fallback, d = n.mode, a = e.child, N = a.sibling;
      var y = { mode: "hidden", children: l.children };
      return (d & 1) === 0 && n.child !== a ? (l = n.child, l.childLanes = 0, l.pendingProps = y, n.deletions = null) : (l = at(a, y), l.subtreeFlags = a.subtreeFlags & 14680064), N !== null ? s = at(N, s) : (s = kt(s, d, t, null), s.flags |= 2), s.return = n, l.return = n, l.sibling = s, n.child = l, l = s, s = n.child, d = e.child.memoizedState, d = d === null ? da(t) : { baseLanes: d.baseLanes | t, cachePool: null, transitions: d.transitions }, s.memoizedState = d, s.childLanes = e.childLanes & ~t, n.memoizedState = ua, l;
    }
    return s = e.child, e = s.sibling, l = at(s, { mode: "visible", children: l.children }), (n.mode & 1) === 0 && (l.lanes = t), l.return = n, l.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = l, n.memoizedState = null, l;
  }
  function fa(e, n) {
    return n = ll({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
  }
  function Hi(e, n, t, l) {
    return l !== null && Fo(l), Wt(n, e.child, null, t), e = fa(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
  }
  function yp(e, n, t, l, a, s, d) {
    if (t)
      return n.flags & 256 ? (n.flags &= -257, l = oa(Error(o(422))), Hi(e, n, d, l)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (s = l.fallback, a = n.mode, l = ll({ mode: "visible", children: l.children }, a, 0, null), s = kt(s, a, d, null), s.flags |= 2, l.return = n, s.return = n, l.sibling = s, n.child = l, (n.mode & 1) !== 0 && Wt(n, e.child, null, d), n.child.memoizedState = da(d), n.memoizedState = ua, s);
    if ((n.mode & 1) === 0) return Hi(e, n, d, null);
    if (a.data === "$!") {
      if (l = a.nextSibling && a.nextSibling.dataset, l) var N = l.dgst;
      return l = N, s = Error(o(419)), l = oa(s, l, void 0), Hi(e, n, d, l);
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
        a = (a & (l.suspendedLanes | d)) !== 0 ? 0 : a, a !== 0 && a !== s.retryLane && (s.retryLane = a, In(e, a), vn(l, e, a, -1));
      }
      return Ea(), l = oa(Error(o(421))), Hi(e, n, d, l);
    }
    return a.data === "$?" ? (n.flags |= 128, n.child = e.child, n = Pp.bind(null, e), a._reactRetry = n, null) : (e = s.treeContext, rn = qn(a.nextSibling), tn = n, De = !0, pn = null, e !== null && (on[an++] = On, on[an++] = Tn, on[an++] = pt, On = e.id, Tn = e.overflow, pt = n), n = fa(n, l.children), n.flags |= 4096, n);
  }
  function Pu(e, n, t) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n), Qo(e.return, n, t);
  }
  function ha(e, n, t, l, a) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: l, tail: t, tailMode: a } : (s.isBackwards = n, s.rendering = null, s.renderingStartTime = 0, s.last = l, s.tail = t, s.tailMode = a);
  }
  function zu(e, n, t) {
    var l = n.pendingProps, a = l.revealOrder, s = l.tail;
    if (Ue(e, n, l.children, t), l = Be.current, (l & 2) !== 0) l = l & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Pu(e, t, n);
        else if (e.tag === 19) Pu(e, t, n);
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
    if (Se(Be, l), (n.mode & 1) === 0) n.memoizedState = null;
    else switch (a) {
      case "forwards":
        for (t = n.child, a = null; t !== null; ) e = t.alternate, e !== null && Fi(e) === null && (a = t), t = t.sibling;
        t = a, t === null ? (a = n.child, n.child = null) : (a = t.sibling, t.sibling = null), ha(n, !1, a, t, s);
        break;
      case "backwards":
        for (t = null, a = n.child, n.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && Fi(e) === null) {
            n.child = a;
            break;
          }
          e = a.sibling, a.sibling = t, t = a, a = e;
        }
        ha(n, !0, t, null, s);
        break;
      case "together":
        ha(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Wi(e, n) {
    (n.mode & 1) === 0 && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
  }
  function Ln(e, n, t) {
    if (e !== null && (n.dependencies = e.dependencies), yt |= n.lanes, (t & n.childLanes) === 0) return null;
    if (e !== null && n.child !== e.child) throw Error(o(153));
    if (n.child !== null) {
      for (e = n.child, t = at(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) e = e.sibling, t = t.sibling = at(e, e.pendingProps), t.return = n;
      t.sibling = null;
    }
    return n.child;
  }
  function xp(e, n, t) {
    switch (n.tag) {
      case 3:
        Au(n), Ht();
        break;
      case 5:
        Wc(n);
        break;
      case 1:
        Xe(n.type) && Ai(n);
        break;
      case 4:
        Ho(n, n.stateNode.containerInfo);
        break;
      case 10:
        var l = n.type._context, a = n.memoizedProps.value;
        Se(Ti, l._currentValue), l._currentValue = a;
        break;
      case 13:
        if (l = n.memoizedState, l !== null)
          return l.dehydrated !== null ? (Se(Be, Be.current & 1), n.flags |= 128, null) : (t & n.child.childLanes) !== 0 ? Vu(e, n, t) : (Se(Be, Be.current & 1), e = Ln(e, n, t), e !== null ? e.sibling : null);
        Se(Be, Be.current & 1);
        break;
      case 19:
        if (l = (t & n.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (l) return zu(e, n, t);
          n.flags |= 128;
        }
        if (a = n.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Se(Be, Be.current), l) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Bu(e, n, t);
    }
    return Ln(e, n, t);
  }
  var Ou, pa, Tu, Iu;
  Ou = function(e, n) {
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
  }, pa = function() {
  }, Tu = function(e, n, t, l) {
    var a = e.memoizedProps;
    if (a !== l) {
      e = n.stateNode, Nt(Dn.current);
      var s = null;
      switch (t) {
        case "input":
          a = Kl(e, a), l = Kl(e, l), s = [];
          break;
        case "select":
          a = R({}, a, { value: void 0 }), l = R({}, l, { value: void 0 }), s = [];
          break;
        case "textarea":
          a = Ul(e, a), l = Ul(e, l), s = [];
          break;
        default:
          typeof a.onClick != "function" && typeof l.onClick == "function" && (e.onclick = Bi);
      }
      Wl(t, l);
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
        else B === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, N = N ? N.__html : void 0, y != null && N !== y && (s = s || []).push(B, y)) : B === "children" ? typeof y != "string" && typeof y != "number" || (s = s || []).push(B, "" + y) : B !== "suppressContentEditableWarning" && B !== "suppressHydrationWarning" && (u.hasOwnProperty(B) ? (y != null && B === "onScroll" && ke("scroll", e), s || N === y || (s = [])) : (s = s || []).push(B, y));
      }
      t && (s = s || []).push("style", t);
      var B = s;
      (n.updateQueue = B) && (n.flags |= 4);
    }
  }, Iu = function(e, n, t, l) {
    t !== l && (n.flags |= 4);
  };
  function $r(e, n) {
    if (!De) switch (e.tailMode) {
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
  function wp(e, n, t) {
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
        return Xe(n.type) && Ei(), Ke(n), null;
      case 3:
        return l = n.stateNode, qt(), _e(We), _e($e), Yo(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (zi(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, pn !== null && (Da(pn), pn = null))), pa(e, n), Ke(n), null;
      case 5:
        Wo(n);
        var a = Nt(Tr.current);
        if (t = n.type, e !== null && n.stateNode != null) Tu(e, n, t, l, a), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
        else {
          if (!l) {
            if (n.stateNode === null) throw Error(o(166));
            return Ke(n), null;
          }
          if (e = Nt(Dn.current), zi(n)) {
            l = n.stateNode, t = n.type;
            var s = n.memoizedProps;
            switch (l[_n] = n, l[Mr] = s, e = (n.mode & 1) !== 0, t) {
              case "dialog":
                ke("cancel", l), ke("close", l);
                break;
              case "iframe":
              case "object":
              case "embed":
                ke("load", l);
                break;
              case "video":
              case "audio":
                for (a = 0; a < Cr.length; a++) ke(Cr[a], l);
                break;
              case "source":
                ke("error", l);
                break;
              case "img":
              case "image":
              case "link":
                ke(
                  "error",
                  l
                ), ke("load", l);
                break;
              case "details":
                ke("toggle", l);
                break;
              case "input":
                ms(l, s), ke("invalid", l);
                break;
              case "select":
                l._wrapperState = { wasMultiple: !!s.multiple }, ke("invalid", l);
                break;
              case "textarea":
                ys(l, s), ke("invalid", l);
            }
            Wl(t, s), a = null;
            for (var d in s) if (s.hasOwnProperty(d)) {
              var N = s[d];
              d === "children" ? typeof N == "string" ? l.textContent !== N && (s.suppressHydrationWarning !== !0 && Di(l.textContent, N, e), a = ["children", N]) : typeof N == "number" && l.textContent !== "" + N && (s.suppressHydrationWarning !== !0 && Di(
                l.textContent,
                N,
                e
              ), a = ["children", "" + N]) : u.hasOwnProperty(d) && N != null && d === "onScroll" && ke("scroll", l);
            }
            switch (t) {
              case "input":
                ut(l), vs(l, s, !0);
                break;
              case "textarea":
                ut(l), ws(l);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof s.onClick == "function" && (l.onclick = Bi);
            }
            l = a, n.updateQueue = l, l !== null && (n.flags |= 4);
          } else {
            d = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ss(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = d.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof l.is == "string" ? e = d.createElement(t, { is: l.is }) : (e = d.createElement(t), t === "select" && (d = e, l.multiple ? d.multiple = !0 : l.size && (d.size = l.size))) : e = d.createElementNS(e, t), e[_n] = n, e[Mr] = l, Ou(e, n, !1, !1), n.stateNode = e;
            e: {
              switch (d = Xl(t, l), t) {
                case "dialog":
                  ke("cancel", e), ke("close", e), a = l;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ke("load", e), a = l;
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < Cr.length; a++) ke(Cr[a], e);
                  a = l;
                  break;
                case "source":
                  ke("error", e), a = l;
                  break;
                case "img":
                case "image":
                case "link":
                  ke(
                    "error",
                    e
                  ), ke("load", e), a = l;
                  break;
                case "details":
                  ke("toggle", e), a = l;
                  break;
                case "input":
                  ms(e, l), a = Kl(e, l), ke("invalid", e);
                  break;
                case "option":
                  a = l;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!l.multiple }, a = R({}, l, { value: void 0 }), ke("invalid", e);
                  break;
                case "textarea":
                  ys(e, l), a = Ul(e, l), ke("invalid", e);
                  break;
                default:
                  a = l;
              }
              Wl(t, a), N = a;
              for (s in N) if (N.hasOwnProperty(s)) {
                var y = N[s];
                s === "style" ? Ds(e, y) : s === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, y != null && ks(e, y)) : s === "children" ? typeof y == "string" ? (t !== "textarea" || y !== "") && sr(e, y) : typeof y == "number" && sr(e, "" + y) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (u.hasOwnProperty(s) ? y != null && s === "onScroll" && ke("scroll", e) : y != null && G(e, s, y, d));
              }
              switch (t) {
                case "input":
                  ut(e), vs(e, l, !1);
                  break;
                case "textarea":
                  ut(e), ws(e);
                  break;
                case "option":
                  l.value != null && e.setAttribute("value", "" + me(l.value));
                  break;
                case "select":
                  e.multiple = !!l.multiple, s = l.value, s != null ? Vt(e, !!l.multiple, s, !1) : l.defaultValue != null && Vt(
                    e,
                    !!l.multiple,
                    l.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof a.onClick == "function" && (e.onclick = Bi);
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
        if (e && n.stateNode != null) Iu(e, n, e.memoizedProps, l);
        else {
          if (typeof l != "string" && n.stateNode === null) throw Error(o(166));
          if (t = Nt(Tr.current), Nt(Dn.current), zi(n)) {
            if (l = n.stateNode, t = n.memoizedProps, l[_n] = n, (s = l.nodeValue !== t) && (e = tn, e !== null)) switch (e.tag) {
              case 3:
                Di(l.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Di(l.nodeValue, t, (e.mode & 1) !== 0);
            }
            s && (n.flags |= 4);
          } else l = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(l), l[_n] = n, n.stateNode = l;
        }
        return Ke(n), null;
      case 13:
        if (_e(Be), l = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (De && rn !== null && (n.mode & 1) !== 0 && (n.flags & 128) === 0) Fc(), Ht(), n.flags |= 98560, s = !1;
          else if (s = zi(n), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!s) throw Error(o(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(o(317));
              s[_n] = n;
            } else Ht(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Ke(n), s = !1;
          } else pn !== null && (Da(pn), pn = null), s = !0;
          if (!s) return n.flags & 65536 ? n : null;
        }
        return (n.flags & 128) !== 0 ? (n.lanes = t, n) : (l = l !== null, l !== (e !== null && e.memoizedState !== null) && l && (n.child.flags |= 8192, (n.mode & 1) !== 0 && (e === null || (Be.current & 1) !== 0 ? ze === 0 && (ze = 3) : Ea())), n.updateQueue !== null && (n.flags |= 4), Ke(n), null);
      case 4:
        return qt(), pa(e, n), e === null && Er(n.stateNode.containerInfo), Ke(n), null;
      case 10:
        return Ko(n.type._context), Ke(n), null;
      case 17:
        return Xe(n.type) && Ei(), Ke(n), null;
      case 19:
        if (_e(Be), s = n.memoizedState, s === null) return Ke(n), null;
        if (l = (n.flags & 128) !== 0, d = s.rendering, d === null) if (l) $r(s, !1);
        else {
          if (ze !== 0 || e !== null && (e.flags & 128) !== 0) for (e = n.child; e !== null; ) {
            if (d = Fi(e), d !== null) {
              for (n.flags |= 128, $r(s, !1), l = d.updateQueue, l !== null && (n.updateQueue = l, n.flags |= 4), n.subtreeFlags = 0, l = t, t = n.child; t !== null; ) s = t, e = l, s.flags &= 14680066, d = s.alternate, d === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = d.childLanes, s.lanes = d.lanes, s.child = d.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = d.memoizedProps, s.memoizedState = d.memoizedState, s.updateQueue = d.updateQueue, s.type = d.type, e = d.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
              return Se(Be, Be.current & 1 | 2), n.child;
            }
            e = e.sibling;
          }
          s.tail !== null && Ae() > er && (n.flags |= 128, l = !0, $r(s, !1), n.lanes = 4194304);
        }
        else {
          if (!l) if (e = Fi(d), e !== null) {
            if (n.flags |= 128, l = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), $r(s, !0), s.tail === null && s.tailMode === "hidden" && !d.alternate && !De) return Ke(n), null;
          } else 2 * Ae() - s.renderingStartTime > er && t !== 1073741824 && (n.flags |= 128, l = !0, $r(s, !1), n.lanes = 4194304);
          s.isBackwards ? (d.sibling = n.child, n.child = d) : (t = s.last, t !== null ? t.sibling = d : n.child = d, s.last = d);
        }
        return s.tail !== null ? (n = s.tail, s.rendering = n, s.tail = n.sibling, s.renderingStartTime = Ae(), n.sibling = null, t = Be.current, Se(Be, l ? t & 1 | 2 : t & 1), n) : (Ke(n), null);
      case 22:
      case 23:
        return Ca(), l = n.memoizedState !== null, e !== null && e.memoizedState !== null !== l && (n.flags |= 8192), l && (n.mode & 1) !== 0 ? (ln & 1073741824) !== 0 && (Ke(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Ke(n), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, n.tag));
  }
  function Sp(e, n) {
    switch (Io(n), n.tag) {
      case 1:
        return Xe(n.type) && Ei(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return qt(), _e(We), _e($e), Yo(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 5:
        return Wo(n), null;
      case 13:
        if (_e(Be), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null) throw Error(o(340));
          Ht();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return _e(Be), null;
      case 4:
        return qt(), null;
      case 10:
        return Ko(n.type._context), null;
      case 22:
      case 23:
        return Ca(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Xi = !1, Qe = !1, kp = typeof WeakSet == "function" ? WeakSet : Set, U = null;
  function bt(e, n) {
    var t = e.ref;
    if (t !== null) if (typeof t == "function") try {
      t(null);
    } catch (l) {
      Ee(e, n, l);
    }
    else t.current = null;
  }
  function ga(e, n, t) {
    try {
      t();
    } catch (l) {
      Ee(e, n, l);
    }
  }
  var Ru = !1;
  function _p(e, n) {
    if (Co = pi, e = gc(), yo(e)) {
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
          var d = 0, N = -1, y = -1, B = 0, z = 0, O = e, V = null;
          n: for (; ; ) {
            for (var K; O !== t || a !== 0 && O.nodeType !== 3 || (N = d + a), O !== s || l !== 0 && O.nodeType !== 3 || (y = d + l), O.nodeType === 3 && (d += O.nodeValue.length), (K = O.firstChild) !== null; )
              V = O, O = K;
            for (; ; ) {
              if (O === e) break n;
              if (V === t && ++B === a && (N = d), V === s && ++z === l && (y = d), (K = O.nextSibling) !== null) break;
              O = V, V = O.parentNode;
            }
            O = K;
          }
          t = N === -1 || y === -1 ? null : { start: N, end: y };
        } else t = null;
      }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (Eo = { focusedElem: e, selectionRange: t }, pi = !1, U = n; U !== null; ) if (n = U, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, U = e;
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
      } catch (L) {
        Ee(n, n.return, L);
      }
      if (e = n.sibling, e !== null) {
        e.return = n.return, U = e;
        break;
      }
      U = n.return;
    }
    return H = Ru, Ru = !1, H;
  }
  function Gr(e, n, t) {
    var l = n.updateQueue;
    if (l = l !== null ? l.lastEffect : null, l !== null) {
      var a = l = l.next;
      do {
        if ((a.tag & e) === e) {
          var s = a.destroy;
          a.destroy = void 0, s !== void 0 && ga(n, t, s);
        }
        a = a.next;
      } while (a !== l);
    }
  }
  function Yi(e, n) {
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
  function ma(e) {
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
  function Lu(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Lu(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[_n], delete n[Mr], delete n[Po], delete n[op], delete n[ap])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Fu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function $u(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Fu(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Na(e, n, t) {
    var l = e.tag;
    if (l === 5 || l === 6) e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Bi));
    else if (l !== 4 && (e = e.child, e !== null)) for (Na(e, n, t), e = e.sibling; e !== null; ) Na(e, n, t), e = e.sibling;
  }
  function va(e, n, t) {
    var l = e.tag;
    if (l === 5 || l === 6) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (l !== 4 && (e = e.child, e !== null)) for (va(e, n, t), e = e.sibling; e !== null; ) va(e, n, t), e = e.sibling;
  }
  var Re = null, mn = !1;
  function tt(e, n, t) {
    for (t = t.child; t !== null; ) Gu(e, n, t), t = t.sibling;
  }
  function Gu(e, n, t) {
    if (kn && typeof kn.onCommitFiberUnmount == "function") try {
      kn.onCommitFiberUnmount(si, t);
    } catch {
    }
    switch (t.tag) {
      case 5:
        Qe || bt(t, n);
      case 6:
        var l = Re, a = mn;
        Re = null, tt(e, n, t), Re = l, mn = a, Re !== null && (mn ? (e = Re, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : Re.removeChild(t.stateNode));
        break;
      case 18:
        Re !== null && (mn ? (e = Re, t = t.stateNode, e.nodeType === 8 ? Vo(e.parentNode, t) : e.nodeType === 1 && Vo(e, t), yr(e)) : Vo(Re, t.stateNode));
        break;
      case 4:
        l = Re, a = mn, Re = t.stateNode.containerInfo, mn = !0, tt(e, n, t), Re = l, mn = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Qe && (l = t.updateQueue, l !== null && (l = l.lastEffect, l !== null))) {
          a = l = l.next;
          do {
            var s = a, d = s.destroy;
            s = s.tag, d !== void 0 && ((s & 2) !== 0 || (s & 4) !== 0) && ga(t, n, d), a = a.next;
          } while (a !== l);
        }
        tt(e, n, t);
        break;
      case 1:
        if (!Qe && (bt(t, n), l = t.stateNode, typeof l.componentWillUnmount == "function")) try {
          l.props = t.memoizedProps, l.state = t.memoizedState, l.componentWillUnmount();
        } catch (N) {
          Ee(t, n, N);
        }
        tt(e, n, t);
        break;
      case 21:
        tt(e, n, t);
        break;
      case 22:
        t.mode & 1 ? (Qe = (l = Qe) || t.memoizedState !== null, tt(e, n, t), Qe = l) : tt(e, n, t);
        break;
      default:
        tt(e, n, t);
    }
  }
  function Ku(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new kp()), n.forEach(function(l) {
        var a = zp.bind(null, e, l);
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
              Re = N.stateNode, mn = !1;
              break e;
            case 3:
              Re = N.stateNode.containerInfo, mn = !0;
              break e;
            case 4:
              Re = N.stateNode.containerInfo, mn = !0;
              break e;
          }
          N = N.return;
        }
        if (Re === null) throw Error(o(160));
        Gu(s, d, a), Re = null, mn = !1;
        var y = a.alternate;
        y !== null && (y.return = null), a.return = null;
      } catch (B) {
        Ee(a, n, B);
      }
    }
    if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) Qu(n, e), n = n.sibling;
  }
  function Qu(e, n) {
    var t = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Nn(n, e), Cn(e), l & 4) {
          try {
            Gr(3, e, e.return), Yi(3, e);
          } catch (W) {
            Ee(e, e.return, W);
          }
          try {
            Gr(5, e, e.return);
          } catch (W) {
            Ee(e, e.return, W);
          }
        }
        break;
      case 1:
        Nn(n, e), Cn(e), l & 512 && t !== null && bt(t, t.return);
        break;
      case 5:
        if (Nn(n, e), Cn(e), l & 512 && t !== null && bt(t, t.return), e.flags & 32) {
          var a = e.stateNode;
          try {
            sr(a, "");
          } catch (W) {
            Ee(e, e.return, W);
          }
        }
        if (l & 4 && (a = e.stateNode, a != null)) {
          var s = e.memoizedProps, d = t !== null ? t.memoizedProps : s, N = e.type, y = e.updateQueue;
          if (e.updateQueue = null, y !== null) try {
            N === "input" && s.type === "radio" && s.name != null && Ns(a, s), Xl(N, d);
            var B = Xl(N, s);
            for (d = 0; d < y.length; d += 2) {
              var z = y[d], O = y[d + 1];
              z === "style" ? Ds(a, O) : z === "dangerouslySetInnerHTML" ? ks(a, O) : z === "children" ? sr(a, O) : G(a, z, O, B);
            }
            switch (N) {
              case "input":
                Ql(a, s);
                break;
              case "textarea":
                xs(a, s);
                break;
              case "select":
                var V = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!s.multiple;
                var K = s.value;
                K != null ? Vt(a, !!s.multiple, K, !1) : V !== !!s.multiple && (s.defaultValue != null ? Vt(
                  a,
                  !!s.multiple,
                  s.defaultValue,
                  !0
                ) : Vt(a, !!s.multiple, s.multiple ? [] : "", !1));
            }
            a[Mr] = s;
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
          yr(n.containerInfo);
        } catch (W) {
          Ee(e, e.return, W);
        }
        break;
      case 4:
        Nn(n, e), Cn(e);
        break;
      case 13:
        Nn(n, e), Cn(e), a = e.child, a.flags & 8192 && (s = a.memoizedState !== null, a.stateNode.isHidden = s, !s || a.alternate !== null && a.alternate.memoizedState !== null || (wa = Ae())), l & 4 && Ku(e);
        break;
      case 22:
        if (z = t !== null && t.memoizedState !== null, e.mode & 1 ? (Qe = (B = Qe) || z, Nn(n, e), Qe = B) : Nn(n, e), Cn(e), l & 8192) {
          if (B = e.memoizedState !== null, (e.stateNode.isHidden = B) && !z && (e.mode & 1) !== 0) for (U = e, z = e.child; z !== null; ) {
            for (O = U = z; U !== null; ) {
              switch (V = U, K = V.child, V.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Gr(4, V, V.return);
                  break;
                case 1:
                  bt(V, V.return);
                  var H = V.stateNode;
                  if (typeof H.componentWillUnmount == "function") {
                    l = V, t = V.return;
                    try {
                      n = l, H.props = n.memoizedProps, H.state = n.memoizedState, H.componentWillUnmount();
                    } catch (W) {
                      Ee(l, t, W);
                    }
                  }
                  break;
                case 5:
                  bt(V, V.return);
                  break;
                case 22:
                  if (V.memoizedState !== null) {
                    Hu(O);
                    continue;
                  }
              }
              K !== null ? (K.return = V, U = K) : Hu(O);
            }
            z = z.sibling;
          }
          e: for (z = null, O = e; ; ) {
            if (O.tag === 5) {
              if (z === null) {
                z = O;
                try {
                  a = O.stateNode, B ? (s = a.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (N = O.stateNode, y = O.memoizedProps.style, d = y != null && y.hasOwnProperty("display") ? y.display : null, N.style.display = _s("display", d));
                } catch (W) {
                  Ee(e, e.return, W);
                }
              }
            } else if (O.tag === 6) {
              if (z === null) try {
                O.stateNode.nodeValue = B ? "" : O.memoizedProps;
              } catch (W) {
                Ee(e, e.return, W);
              }
            } else if ((O.tag !== 22 && O.tag !== 23 || O.memoizedState === null || O === e) && O.child !== null) {
              O.child.return = O, O = O.child;
              continue;
            }
            if (O === e) break e;
            for (; O.sibling === null; ) {
              if (O.return === null || O.return === e) break e;
              z === O && (z = null), O = O.return;
            }
            z === O && (z = null), O.sibling.return = O.return, O = O.sibling;
          }
        }
        break;
      case 19:
        Nn(n, e), Cn(e), l & 4 && Ku(e);
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
            if (Fu(t)) {
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
            l.flags & 32 && (sr(a, ""), l.flags &= -33);
            var s = $u(e);
            va(e, s, a);
            break;
          case 3:
          case 4:
            var d = l.stateNode.containerInfo, N = $u(e);
            Na(e, N, d);
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
  function Dp(e, n, t) {
    U = e, ju(e);
  }
  function ju(e, n, t) {
    for (var l = (e.mode & 1) !== 0; U !== null; ) {
      var a = U, s = a.child;
      if (a.tag === 22 && l) {
        var d = a.memoizedState !== null || Xi;
        if (!d) {
          var N = a.alternate, y = N !== null && N.memoizedState !== null || Qe;
          N = Xi;
          var B = Qe;
          if (Xi = d, (Qe = y) && !B) for (U = a; U !== null; ) d = U, y = d.child, d.tag === 22 && d.memoizedState !== null ? Wu(a) : y !== null ? (y.return = d, U = y) : Wu(a);
          for (; s !== null; ) U = s, ju(s), s = s.sibling;
          U = a, Xi = N, Qe = B;
        }
        Uu(e);
      } else (a.subtreeFlags & 8772) !== 0 && s !== null ? (s.return = a, U = s) : Uu(e);
    }
  }
  function Uu(e) {
    for (; U !== null; ) {
      var n = U;
      if ((n.flags & 8772) !== 0) {
        var t = n.alternate;
        try {
          if ((n.flags & 8772) !== 0) switch (n.tag) {
            case 0:
            case 11:
            case 15:
              Qe || Yi(5, n);
              break;
            case 1:
              var l = n.stateNode;
              if (n.flags & 4 && !Qe) if (t === null) l.componentDidMount();
              else {
                var a = n.elementType === n.type ? t.memoizedProps : gn(n.type, t.memoizedProps);
                l.componentDidUpdate(a, t.memoizedState, l.__reactInternalSnapshotBeforeUpdate);
              }
              var s = n.updateQueue;
              s !== null && Hc(n, s, l);
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
                Hc(n, d, t);
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
                  var z = B.memoizedState;
                  if (z !== null) {
                    var O = z.dehydrated;
                    O !== null && yr(O);
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
          Qe || n.flags & 512 && ma(n);
        } catch (V) {
          Ee(n, n.return, V);
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
  function Hu(e) {
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
  function Wu(e) {
    for (; U !== null; ) {
      var n = U;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var t = n.return;
            try {
              Yi(4, n);
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
              ma(n);
            } catch (y) {
              Ee(n, s, y);
            }
            break;
          case 5:
            var d = n.return;
            try {
              ma(n);
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
  var Bp = Math.ceil, qi = Z.ReactCurrentDispatcher, ya = Z.ReactCurrentOwner, un = Z.ReactCurrentBatchConfig, Ne = 0, Te = null, Ve = null, Le = 0, ln = 0, Jt = Zn(0), ze = 0, Kr = null, yt = 0, Zi = 0, xa = 0, Qr = null, qe = null, wa = 0, er = 1 / 0, Fn = null, bi = !1, Sa = null, rt = null, Ji = !1, it = null, el = 0, jr = 0, ka = null, nl = -1, tl = 0;
  function He() {
    return (Ne & 6) !== 0 ? Ae() : nl !== -1 ? nl : nl = Ae();
  }
  function lt(e) {
    return (e.mode & 1) === 0 ? 1 : (Ne & 2) !== 0 && Le !== 0 ? Le & -Le : cp.transition !== null ? (tl === 0 && (tl = $s()), tl) : (e = xe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ys(e.type)), e);
  }
  function vn(e, n, t, l) {
    if (50 < jr) throw jr = 0, ka = null, Error(o(185));
    pr(e, t, l), ((Ne & 2) === 0 || e !== Te) && (e === Te && ((Ne & 2) === 0 && (Zi |= t), ze === 4 && ot(e, Le)), Ze(e, l), t === 1 && Ne === 0 && (n.mode & 1) === 0 && (er = Ae() + 500, Mi && Jn()));
  }
  function Ze(e, n) {
    var t = e.callbackNode;
    ch(e, n);
    var l = di(e, e === Te ? Le : 0);
    if (l === 0) t !== null && Rs(t), e.callbackNode = null, e.callbackPriority = 0;
    else if (n = l & -l, e.callbackPriority !== n) {
      if (t != null && Rs(t), n === 1) e.tag === 0 ? sp(Yu.bind(null, e)) : Oc(Yu.bind(null, e)), ip(function() {
        (Ne & 6) === 0 && Jn();
      }), t = null;
      else {
        switch (Gs(l)) {
          case 1:
            t = no;
            break;
          case 4:
            t = Ls;
            break;
          case 16:
            t = ai;
            break;
          case 536870912:
            t = Fs;
            break;
          default:
            t = ai;
        }
        t = rd(t, Xu.bind(null, e));
      }
      e.callbackPriority = n, e.callbackNode = t;
    }
  }
  function Xu(e, n) {
    if (nl = -1, tl = 0, (Ne & 6) !== 0) throw Error(o(327));
    var t = e.callbackNode;
    if (nr() && e.callbackNode !== t) return null;
    var l = di(e, e === Te ? Le : 0);
    if (l === 0) return null;
    if ((l & 30) !== 0 || (l & e.expiredLanes) !== 0 || n) n = rl(e, l);
    else {
      n = l;
      var a = Ne;
      Ne |= 2;
      var s = Zu();
      (Te !== e || Le !== n) && (Fn = null, er = Ae() + 500, wt(e, n));
      do
        try {
          Ap();
          break;
        } catch (N) {
          qu(e, N);
        }
      while (!0);
      Go(), qi.current = s, Ne = a, Ve !== null ? n = 0 : (Te = null, Le = 0, n = ze);
    }
    if (n !== 0) {
      if (n === 2 && (a = to(e), a !== 0 && (l = a, n = _a(e, a))), n === 1) throw t = Kr, wt(e, 0), ot(e, l), Ze(e, Ae()), t;
      if (n === 6) ot(e, l);
      else {
        if (a = e.current.alternate, (l & 30) === 0 && !Cp(a) && (n = rl(e, l), n === 2 && (s = to(e), s !== 0 && (l = s, n = _a(e, s))), n === 1)) throw t = Kr, wt(e, 0), ot(e, l), Ze(e, Ae()), t;
        switch (e.finishedWork = a, e.finishedLanes = l, n) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            St(e, qe, Fn);
            break;
          case 3:
            if (ot(e, l), (l & 130023424) === l && (n = wa + 500 - Ae(), 10 < n)) {
              if (di(e, 0) !== 0) break;
              if (a = e.suspendedLanes, (a & l) !== l) {
                He(), e.pingedLanes |= e.suspendedLanes & a;
                break;
              }
              e.timeoutHandle = Mo(St.bind(null, e, qe, Fn), n);
              break;
            }
            St(e, qe, Fn);
            break;
          case 4:
            if (ot(e, l), (l & 4194240) === l) break;
            for (n = e.eventTimes, a = -1; 0 < l; ) {
              var d = 31 - fn(l);
              s = 1 << d, d = n[d], d > a && (a = d), l &= ~s;
            }
            if (l = a, l = Ae() - l, l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * Bp(l / 1960)) - l, 10 < l) {
              e.timeoutHandle = Mo(St.bind(null, e, qe, Fn), l);
              break;
            }
            St(e, qe, Fn);
            break;
          case 5:
            St(e, qe, Fn);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return Ze(e, Ae()), e.callbackNode === t ? Xu.bind(null, e) : null;
  }
  function _a(e, n) {
    var t = Qr;
    return e.current.memoizedState.isDehydrated && (wt(e, n).flags |= 256), e = rl(e, n), e !== 2 && (n = qe, qe = t, n !== null && Da(n)), e;
  }
  function Da(e) {
    qe === null ? qe = e : qe.push.apply(qe, e);
  }
  function Cp(e) {
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
  function ot(e, n) {
    for (n &= ~xa, n &= ~Zi, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
      var t = 31 - fn(n), l = 1 << t;
      e[t] = -1, n &= ~l;
    }
  }
  function Yu(e) {
    if ((Ne & 6) !== 0) throw Error(o(327));
    nr();
    var n = di(e, 0);
    if ((n & 1) === 0) return Ze(e, Ae()), null;
    var t = rl(e, n);
    if (e.tag !== 0 && t === 2) {
      var l = to(e);
      l !== 0 && (n = l, t = _a(e, l));
    }
    if (t === 1) throw t = Kr, wt(e, 0), ot(e, n), Ze(e, Ae()), t;
    if (t === 6) throw Error(o(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n, St(e, qe, Fn), Ze(e, Ae()), null;
  }
  function Ba(e, n) {
    var t = Ne;
    Ne |= 1;
    try {
      return e(n);
    } finally {
      Ne = t, Ne === 0 && (er = Ae() + 500, Mi && Jn());
    }
  }
  function xt(e) {
    it !== null && it.tag === 0 && (Ne & 6) === 0 && nr();
    var n = Ne;
    Ne |= 1;
    var t = un.transition, l = xe;
    try {
      if (un.transition = null, xe = 1, e) return e();
    } finally {
      xe = l, un.transition = t, Ne = n, (Ne & 6) === 0 && Jn();
    }
  }
  function Ca() {
    ln = Jt.current, _e(Jt);
  }
  function wt(e, n) {
    e.finishedWork = null, e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1, rp(t)), Ve !== null) for (t = Ve.return; t !== null; ) {
      var l = t;
      switch (Io(l), l.tag) {
        case 1:
          l = l.type.childContextTypes, l != null && Ei();
          break;
        case 3:
          qt(), _e(We), _e($e), Yo();
          break;
        case 5:
          Wo(l);
          break;
        case 4:
          qt();
          break;
        case 13:
          _e(Be);
          break;
        case 19:
          _e(Be);
          break;
        case 10:
          Ko(l.type._context);
          break;
        case 22:
        case 23:
          Ca();
      }
      t = t.return;
    }
    if (Te = e, Ve = e = at(e.current, null), Le = ln = n, ze = 0, Kr = null, xa = Zi = yt = 0, qe = Qr = null, mt !== null) {
      for (n = 0; n < mt.length; n++) if (t = mt[n], l = t.interleaved, l !== null) {
        t.interleaved = null;
        var a = l.next, s = t.pending;
        if (s !== null) {
          var d = s.next;
          s.next = a, l.next = d;
        }
        t.pending = l;
      }
      mt = null;
    }
    return e;
  }
  function qu(e, n) {
    do {
      var t = Ve;
      try {
        if (Go(), $i.current = ji, Gi) {
          for (var l = Ce.memoizedState; l !== null; ) {
            var a = l.queue;
            a !== null && (a.pending = null), l = l.next;
          }
          Gi = !1;
        }
        if (vt = 0, Oe = Pe = Ce = null, Ir = !1, Rr = 0, ya.current = null, t === null || t.return === null) {
          ze = 1, Kr = n, Ve = null;
          break;
        }
        e: {
          var s = e, d = t.return, N = t, y = n;
          if (n = Le, N.flags |= 32768, y !== null && typeof y == "object" && typeof y.then == "function") {
            var B = y, z = N, O = z.tag;
            if ((z.mode & 1) === 0 && (O === 0 || O === 11 || O === 15)) {
              var V = z.alternate;
              V ? (z.updateQueue = V.updateQueue, z.memoizedState = V.memoizedState, z.lanes = V.lanes) : (z.updateQueue = null, z.memoizedState = null);
            }
            var K = wu(d);
            if (K !== null) {
              K.flags &= -257, Su(K, d, N, s, n), K.mode & 1 && xu(s, B, n), n = K, y = B;
              var H = n.updateQueue;
              if (H === null) {
                var W = /* @__PURE__ */ new Set();
                W.add(y), n.updateQueue = W;
              } else H.add(y);
              break e;
            } else {
              if ((n & 1) === 0) {
                xu(s, B, n), Ea();
                break e;
              }
              y = Error(o(426));
            }
          } else if (De && N.mode & 1) {
            var Me = wu(d);
            if (Me !== null) {
              (Me.flags & 65536) === 0 && (Me.flags |= 256), Su(Me, d, N, s, n), Fo(Zt(y, N));
              break e;
            }
          }
          s = y = Zt(y, N), ze !== 4 && (ze = 2), Qr === null ? Qr = [s] : Qr.push(s), s = d;
          do {
            switch (s.tag) {
              case 3:
                s.flags |= 65536, n &= -n, s.lanes |= n;
                var _ = vu(s, y, n);
                Uc(s, _);
                break e;
              case 1:
                N = y;
                var x = s.type, D = s.stateNode;
                if ((s.flags & 128) === 0 && (typeof x.getDerivedStateFromError == "function" || D !== null && typeof D.componentDidCatch == "function" && (rt === null || !rt.has(D)))) {
                  s.flags |= 65536, n &= -n, s.lanes |= n;
                  var L = yu(s, N, n);
                  Uc(s, L);
                  break e;
                }
            }
            s = s.return;
          } while (s !== null);
        }
        Ju(t);
      } catch (X) {
        n = X, Ve === t && t !== null && (Ve = t = t.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Zu() {
    var e = qi.current;
    return qi.current = ji, e === null ? ji : e;
  }
  function Ea() {
    (ze === 0 || ze === 3 || ze === 2) && (ze = 4), Te === null || (yt & 268435455) === 0 && (Zi & 268435455) === 0 || ot(Te, Le);
  }
  function rl(e, n) {
    var t = Ne;
    Ne |= 2;
    var l = Zu();
    (Te !== e || Le !== n) && (Fn = null, wt(e, n));
    do
      try {
        Ep();
        break;
      } catch (a) {
        qu(e, a);
      }
    while (!0);
    if (Go(), Ne = t, qi.current = l, Ve !== null) throw Error(o(261));
    return Te = null, Le = 0, ze;
  }
  function Ep() {
    for (; Ve !== null; ) bu(Ve);
  }
  function Ap() {
    for (; Ve !== null && !eh(); ) bu(Ve);
  }
  function bu(e) {
    var n = td(e.alternate, e, ln);
    e.memoizedProps = e.pendingProps, n === null ? Ju(e) : Ve = n, ya.current = null;
  }
  function Ju(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (e = n.return, (n.flags & 32768) === 0) {
        if (t = wp(t, n, ln), t !== null) {
          Ve = t;
          return;
        }
      } else {
        if (t = Sp(t, n), t !== null) {
          t.flags &= 32767, Ve = t;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          ze = 6, Ve = null;
          return;
        }
      }
      if (n = n.sibling, n !== null) {
        Ve = n;
        return;
      }
      Ve = n = e;
    } while (n !== null);
    ze === 0 && (ze = 5);
  }
  function St(e, n, t) {
    var l = xe, a = un.transition;
    try {
      un.transition = null, xe = 1, Mp(e, n, t, l);
    } finally {
      un.transition = a, xe = l;
    }
    return null;
  }
  function Mp(e, n, t, l) {
    do
      nr();
    while (it !== null);
    if ((Ne & 6) !== 0) throw Error(o(327));
    t = e.finishedWork;
    var a = e.finishedLanes;
    if (t === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(o(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var s = t.lanes | t.childLanes;
    if (uh(e, s), e === Te && (Ve = Te = null, Le = 0), (t.subtreeFlags & 2064) === 0 && (t.flags & 2064) === 0 || Ji || (Ji = !0, rd(ai, function() {
      return nr(), null;
    })), s = (t.flags & 15990) !== 0, (t.subtreeFlags & 15990) !== 0 || s) {
      s = un.transition, un.transition = null;
      var d = xe;
      xe = 1;
      var N = Ne;
      Ne |= 4, ya.current = null, _p(e, t), Qu(t, e), qh(Eo), pi = !!Co, Eo = Co = null, e.current = t, Dp(t), nh(), Ne = N, xe = d, un.transition = s;
    } else e.current = t;
    if (Ji && (Ji = !1, it = e, el = a), s = e.pendingLanes, s === 0 && (rt = null), ih(t.stateNode), Ze(e, Ae()), n !== null) for (l = e.onRecoverableError, t = 0; t < n.length; t++) a = n[t], l(a.value, { componentStack: a.stack, digest: a.digest });
    if (bi) throw bi = !1, e = Sa, Sa = null, e;
    return (el & 1) !== 0 && e.tag !== 0 && nr(), s = e.pendingLanes, (s & 1) !== 0 ? e === ka ? jr++ : (jr = 0, ka = e) : jr = 0, Jn(), null;
  }
  function nr() {
    if (it !== null) {
      var e = Gs(el), n = un.transition, t = xe;
      try {
        if (un.transition = null, xe = 16 > e ? 16 : e, it === null) var l = !1;
        else {
          if (e = it, it = null, el = 0, (Ne & 6) !== 0) throw Error(o(331));
          var a = Ne;
          for (Ne |= 4, U = e.current; U !== null; ) {
            var s = U, d = s.child;
            if ((U.flags & 16) !== 0) {
              var N = s.deletions;
              if (N !== null) {
                for (var y = 0; y < N.length; y++) {
                  var B = N[y];
                  for (U = B; U !== null; ) {
                    var z = U;
                    switch (z.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Gr(8, z, s);
                    }
                    var O = z.child;
                    if (O !== null) O.return = z, U = O;
                    else for (; U !== null; ) {
                      z = U;
                      var V = z.sibling, K = z.return;
                      if (Lu(z), z === B) {
                        U = null;
                        break;
                      }
                      if (V !== null) {
                        V.return = K, U = V;
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
                  Gr(9, s, s.return);
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
                    Yi(9, N);
                }
              } catch (X) {
                Ee(N, N.return, X);
              }
              if (N === d) {
                U = null;
                break e;
              }
              var L = N.sibling;
              if (L !== null) {
                L.return = N.return, U = L;
                break e;
              }
              U = N.return;
            }
          }
          if (Ne = a, Jn(), kn && typeof kn.onPostCommitFiberRoot == "function") try {
            kn.onPostCommitFiberRoot(si, e);
          } catch {
          }
          l = !0;
        }
        return l;
      } finally {
        xe = t, un.transition = n;
      }
    }
    return !1;
  }
  function ed(e, n, t) {
    n = Zt(t, n), n = vu(e, n, 1), e = nt(e, n, 1), n = He(), e !== null && (pr(e, 1, n), Ze(e, n));
  }
  function Ee(e, n, t) {
    if (e.tag === 3) ed(e, e, t);
    else for (; n !== null; ) {
      if (n.tag === 3) {
        ed(n, e, t);
        break;
      } else if (n.tag === 1) {
        var l = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (rt === null || !rt.has(l))) {
          e = Zt(t, e), e = yu(n, e, 1), n = nt(n, e, 1), e = He(), n !== null && (pr(n, 1, e), Ze(n, e));
          break;
        }
      }
      n = n.return;
    }
  }
  function Vp(e, n, t) {
    var l = e.pingCache;
    l !== null && l.delete(n), n = He(), e.pingedLanes |= e.suspendedLanes & t, Te === e && (Le & t) === t && (ze === 4 || ze === 3 && (Le & 130023424) === Le && 500 > Ae() - wa ? wt(e, 0) : xa |= t), Ze(e, n);
  }
  function nd(e, n) {
    n === 0 && ((e.mode & 1) === 0 ? n = 1 : (n = ui, ui <<= 1, (ui & 130023424) === 0 && (ui = 4194304)));
    var t = He();
    e = In(e, n), e !== null && (pr(e, n, t), Ze(e, t));
  }
  function Pp(e) {
    var n = e.memoizedState, t = 0;
    n !== null && (t = n.retryLane), nd(e, t);
  }
  function zp(e, n) {
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
    l !== null && l.delete(n), nd(e, t);
  }
  var td;
  td = function(e, n, t) {
    if (e !== null) if (e.memoizedProps !== n.pendingProps || We.current) Ye = !0;
    else {
      if ((e.lanes & t) === 0 && (n.flags & 128) === 0) return Ye = !1, xp(e, n, t);
      Ye = (e.flags & 131072) !== 0;
    }
    else Ye = !1, De && (n.flags & 1048576) !== 0 && Tc(n, Pi, n.index);
    switch (n.lanes = 0, n.tag) {
      case 2:
        var l = n.type;
        Wi(e, n), e = n.pendingProps;
        var a = Qt(n, $e.current);
        Yt(n, t), a = bo(null, n, l, e, a, t);
        var s = Jo();
        return n.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, Xe(l) ? (s = !0, Ai(n)) : s = !1, n.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, Uo(n), a.updater = Ui, n.stateNode = a, a._reactInternals = n, la(n, l, e, t), n = ca(null, n, l, !0, s, t)) : (n.tag = 0, De && s && To(n), Ue(null, n, a, t), n = n.child), n;
      case 16:
        l = n.elementType;
        e: {
          switch (Wi(e, n), e = n.pendingProps, a = l._init, l = a(l._payload), n.type = l, a = n.tag = Tp(l), e = gn(l, e), a) {
            case 0:
              n = sa(null, n, l, e, t);
              break e;
            case 1:
              n = Eu(null, n, l, e, t);
              break e;
            case 11:
              n = ku(null, n, l, e, t);
              break e;
            case 14:
              n = _u(null, n, l, gn(l.type, e), t);
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
        return l = n.type, a = n.pendingProps, a = n.elementType === l ? a : gn(l, a), Eu(e, n, l, a, t);
      case 3:
        e: {
          if (Au(n), e === null) throw Error(o(387));
          l = n.pendingProps, s = n.memoizedState, a = s.element, jc(e, n), Li(n, l, null, t);
          var d = n.memoizedState;
          if (l = d.element, s.isDehydrated) if (s = { element: l, isDehydrated: !1, cache: d.cache, pendingSuspenseBoundaries: d.pendingSuspenseBoundaries, transitions: d.transitions }, n.updateQueue.baseState = s, n.memoizedState = s, n.flags & 256) {
            a = Zt(Error(o(423)), n), n = Mu(e, n, l, t, a);
            break e;
          } else if (l !== a) {
            a = Zt(Error(o(424)), n), n = Mu(e, n, l, t, a);
            break e;
          } else for (rn = qn(n.stateNode.containerInfo.firstChild), tn = n, De = !0, pn = null, t = Kc(n, null, l, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (Ht(), l === a) {
              n = Ln(e, n, t);
              break e;
            }
            Ue(e, n, l, t);
          }
          n = n.child;
        }
        return n;
      case 5:
        return Wc(n), e === null && Lo(n), l = n.type, a = n.pendingProps, s = e !== null ? e.memoizedProps : null, d = a.children, Ao(l, a) ? d = null : s !== null && Ao(l, s) && (n.flags |= 32), Cu(e, n), Ue(e, n, d, t), n.child;
      case 6:
        return e === null && Lo(n), null;
      case 13:
        return Vu(e, n, t);
      case 4:
        return Ho(n, n.stateNode.containerInfo), l = n.pendingProps, e === null ? n.child = Wt(n, null, l, t) : Ue(e, n, l, t), n.child;
      case 11:
        return l = n.type, a = n.pendingProps, a = n.elementType === l ? a : gn(l, a), ku(e, n, l, a, t);
      case 7:
        return Ue(e, n, n.pendingProps, t), n.child;
      case 8:
        return Ue(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return Ue(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          if (l = n.type._context, a = n.pendingProps, s = n.memoizedProps, d = a.value, Se(Ti, l._currentValue), l._currentValue = d, s !== null) if (hn(s.value, d)) {
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
                    y = Rn(-1, t & -t), y.tag = 2;
                    var B = s.updateQueue;
                    if (B !== null) {
                      B = B.shared;
                      var z = B.pending;
                      z === null ? y.next = y : (y.next = z.next, z.next = y), B.pending = y;
                    }
                  }
                  s.lanes |= t, y = s.alternate, y !== null && (y.lanes |= t), Qo(
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
              d.lanes |= t, N = d.alternate, N !== null && (N.lanes |= t), Qo(d, t, n), d = s.sibling;
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
        return a = n.type, l = n.pendingProps.children, Yt(n, t), a = sn(a), l = l(a), n.flags |= 1, Ue(e, n, l, t), n.child;
      case 14:
        return l = n.type, a = gn(l, n.pendingProps), a = gn(l.type, a), _u(e, n, l, a, t);
      case 15:
        return Du(e, n, n.type, n.pendingProps, t);
      case 17:
        return l = n.type, a = n.pendingProps, a = n.elementType === l ? a : gn(l, a), Wi(e, n), n.tag = 1, Xe(l) ? (e = !0, Ai(n)) : e = !1, Yt(n, t), mu(n, l, a), la(n, l, a, t), ca(null, n, l, !0, e, t);
      case 19:
        return zu(e, n, t);
      case 22:
        return Bu(e, n, t);
    }
    throw Error(o(156, n.tag));
  };
  function rd(e, n) {
    return Is(e, n);
  }
  function Op(e, n, t, l) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function dn(e, n, t, l) {
    return new Op(e, n, t, l);
  }
  function Aa(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Tp(e) {
    if (typeof e == "function") return Aa(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === M) return 11;
      if (e === de) return 14;
    }
    return 2;
  }
  function at(e, n) {
    var t = e.alternate;
    return t === null ? (t = dn(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
  }
  function il(e, n, t, l, a, s) {
    var d = 2;
    if (l = e, typeof e == "function") Aa(e) && (d = 1);
    else if (typeof e == "string") d = 5;
    else e: switch (e) {
      case I:
        return kt(t.children, a, s, n);
      case q:
        d = 8, a |= 8;
        break;
      case ce:
        return e = dn(12, t, n, a | 2), e.elementType = ce, e.lanes = s, e;
      case P:
        return e = dn(13, t, n, a), e.elementType = P, e.lanes = s, e;
      case F:
        return e = dn(19, t, n, a), e.elementType = F, e.lanes = s, e;
      case se:
        return ll(t, a, s, n);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case pe:
            d = 10;
            break e;
          case E:
            d = 9;
            break e;
          case M:
            d = 11;
            break e;
          case de:
            d = 14;
            break e;
          case ge:
            d = 16, l = null;
            break e;
        }
        throw Error(o(130, e == null ? e : typeof e, ""));
    }
    return n = dn(d, t, n, a), n.elementType = e, n.type = l, n.lanes = s, n;
  }
  function kt(e, n, t, l) {
    return e = dn(7, e, l, n), e.lanes = t, e;
  }
  function ll(e, n, t, l) {
    return e = dn(22, e, l, n), e.elementType = se, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
  }
  function Ma(e, n, t) {
    return e = dn(6, e, null, n), e.lanes = t, e;
  }
  function Va(e, n, t) {
    return n = dn(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
  }
  function Ip(e, n, t, l, a) {
    this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ro(0), this.expirationTimes = ro(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ro(0), this.identifierPrefix = l, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
  }
  function Pa(e, n, t, l, a, s, d, N, y) {
    return e = new Ip(e, n, t, N, y), n === 1 ? (n = 1, s === !0 && (n |= 8)) : n = 0, s = dn(3, null, null, n), e.current = s, s.stateNode = e, s.memoizedState = { element: l, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Uo(s), e;
  }
  function Rp(e, n, t) {
    var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ae, key: l == null ? null : "" + l, children: e, containerInfo: n, implementation: t };
  }
  function id(e) {
    if (!e) return bn;
    e = e._reactInternals;
    e: {
      if (dt(e) !== e || e.tag !== 1) throw Error(o(170));
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
      if (Xe(t)) return Pc(e, t, n);
    }
    return n;
  }
  function ld(e, n, t, l, a, s, d, N, y) {
    return e = Pa(t, l, !0, e, a, s, d, N, y), e.context = id(null), t = e.current, l = He(), a = lt(t), s = Rn(l, a), s.callback = n ?? null, nt(t, s, a), e.current.lanes = a, pr(e, a, l), Ze(e, l), e;
  }
  function ol(e, n, t, l) {
    var a = n.current, s = He(), d = lt(a);
    return t = id(t), n.context === null ? n.context = t : n.pendingContext = t, n = Rn(s, d), n.payload = { element: e }, l = l === void 0 ? null : l, l !== null && (n.callback = l), e = nt(a, n, d), e !== null && (vn(e, a, d, s), Ri(e, a, d)), d;
  }
  function al(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function od(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function za(e, n) {
    od(e, n), (e = e.alternate) && od(e, n);
  }
  function Lp() {
    return null;
  }
  var ad = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Oa(e) {
    this._internalRoot = e;
  }
  sl.prototype.render = Oa.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(o(409));
    ol(e, n, null, null);
  }, sl.prototype.unmount = Oa.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      xt(function() {
        ol(null, e, null, null);
      }), n[Pn] = null;
    }
  };
  function sl(e) {
    this._internalRoot = e;
  }
  sl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = js();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < Wn.length && n !== 0 && n < Wn[t].priority; t++) ;
      Wn.splice(t, 0, e), t === 0 && Ws(e);
    }
  };
  function Ta(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function cl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function sd() {
  }
  function Fp(e, n, t, l, a) {
    if (a) {
      if (typeof l == "function") {
        var s = l;
        l = function() {
          var B = al(d);
          s.call(B);
        };
      }
      var d = ld(n, l, e, 0, null, !1, !1, "", sd);
      return e._reactRootContainer = d, e[Pn] = d.current, Er(e.nodeType === 8 ? e.parentNode : e), xt(), d;
    }
    for (; a = e.lastChild; ) e.removeChild(a);
    if (typeof l == "function") {
      var N = l;
      l = function() {
        var B = al(y);
        N.call(B);
      };
    }
    var y = Pa(e, 0, !1, null, null, !1, !1, "", sd);
    return e._reactRootContainer = y, e[Pn] = y.current, Er(e.nodeType === 8 ? e.parentNode : e), xt(function() {
      ol(n, y, t, l);
    }), y;
  }
  function ul(e, n, t, l, a) {
    var s = t._reactRootContainer;
    if (s) {
      var d = s;
      if (typeof a == "function") {
        var N = a;
        a = function() {
          var y = al(d);
          N.call(y);
        };
      }
      ol(n, d, e, a);
    } else d = Fp(t, n, e, a, l);
    return al(d);
  }
  Ks = function(e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var t = hr(n.pendingLanes);
          t !== 0 && (io(n, t | 1), Ze(n, Ae()), (Ne & 6) === 0 && (er = Ae() + 500, Jn()));
        }
        break;
      case 13:
        xt(function() {
          var l = In(e, 1);
          if (l !== null) {
            var a = He();
            vn(l, e, 1, a);
          }
        }), za(e, 1);
    }
  }, lo = function(e) {
    if (e.tag === 13) {
      var n = In(e, 134217728);
      if (n !== null) {
        var t = He();
        vn(n, e, 134217728, t);
      }
      za(e, 134217728);
    }
  }, Qs = function(e) {
    if (e.tag === 13) {
      var n = lt(e), t = In(e, n);
      if (t !== null) {
        var l = He();
        vn(t, e, n, l);
      }
      za(e, n);
    }
  }, js = function() {
    return xe;
  }, Us = function(e, n) {
    var t = xe;
    try {
      return xe = e, n();
    } finally {
      xe = t;
    }
  }, Zl = function(e, n, t) {
    switch (n) {
      case "input":
        if (Ql(e, t), n = t.name, t.type === "radio" && n != null) {
          for (t = e; t.parentNode; ) t = t.parentNode;
          for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
            var l = t[n];
            if (l !== e && l.form === e.form) {
              var a = Ci(l);
              if (!a) throw Error(o(90));
              gs(l), Ql(l, a);
            }
          }
        }
        break;
      case "textarea":
        xs(e, t);
        break;
      case "select":
        n = t.value, n != null && Vt(e, !!t.multiple, n, !1);
    }
  }, As = Ba, Ms = xt;
  var $p = { usingClientEntryPoint: !1, Events: [Vr, Gt, Ci, Cs, Es, Ba] }, Ur = { findFiberByHostInstance: ft, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Gp = { bundleType: Ur.bundleType, version: Ur.version, rendererPackageName: Ur.rendererPackageName, rendererConfig: Ur.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Z.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Os(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Ur.findFiberByHostInstance || Lp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var dl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!dl.isDisabled && dl.supportsFiber) try {
      si = dl.inject(Gp), kn = dl;
    } catch {
    }
  }
  return be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $p, be.createPortal = function(e, n) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ta(n)) throw Error(o(200));
    return Rp(e, n, null, t);
  }, be.createRoot = function(e, n) {
    if (!Ta(e)) throw Error(o(299));
    var t = !1, l = "", a = ad;
    return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), n = Pa(e, 1, !1, null, null, t, !1, l, a), e[Pn] = n.current, Er(e.nodeType === 8 ? e.parentNode : e), new Oa(n);
  }, be.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = Os(n), e = e === null ? null : e.stateNode, e;
  }, be.flushSync = function(e) {
    return xt(e);
  }, be.hydrate = function(e, n, t) {
    if (!cl(n)) throw Error(o(200));
    return ul(null, e, n, !0, t);
  }, be.hydrateRoot = function(e, n, t) {
    if (!Ta(e)) throw Error(o(405));
    var l = t != null && t.hydratedSources || null, a = !1, s = "", d = ad;
    if (t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), n = ld(n, null, e, 1, t ?? null, a, !1, s, d), e[Pn] = n.current, Er(e), l) for (e = 0; e < l.length; e++) t = l[e], a = t._getVersion, a = a(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, a] : n.mutableSourceEagerHydrationData.push(
      t,
      a
    );
    return new sl(n);
  }, be.render = function(e, n, t) {
    if (!cl(n)) throw Error(o(200));
    return ul(null, e, n, !1, t);
  }, be.unmountComponentAtNode = function(e) {
    if (!cl(e)) throw Error(o(40));
    return e._reactRootContainer ? (xt(function() {
      ul(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Pn] = null;
      });
    }), !0) : !1;
  }, be.unstable_batchedUpdates = Ba, be.unstable_renderSubtreeIntoContainer = function(e, n, t, l) {
    if (!cl(t)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return ul(e, n, t, !1, l);
  }, be.version = "18.3.1-next-f1338f8080-20240426", be;
}
var md;
function Yp() {
  if (md) return La.exports;
  md = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (i) {
        console.error(i);
      }
  }
  return r(), La.exports = Xp(), La.exports;
}
var Nd;
function qp() {
  if (Nd) return fl;
  Nd = 1;
  var r = Yp();
  return fl.createRoot = r.createRoot, fl.hydrateRoot = r.hydrateRoot, fl;
}
var vd = qp(), Kn = rs();
function yl(r, i) {
  return r == null || i == null ? NaN : r < i ? -1 : r > i ? 1 : r >= i ? 0 : NaN;
}
function Zp(r, i) {
  return r == null || i == null ? NaN : i < r ? -1 : i > r ? 1 : i >= r ? 0 : NaN;
}
function nf(r) {
  let i, o, c;
  r.length !== 2 ? (i = yl, o = (p, m) => yl(r(p), m), c = (p, m) => r(p) - m) : (i = r === yl || r === Zp ? r : bp, o = r, c = r);
  function u(p, m, g = 0, v = p.length) {
    if (g < v) {
      if (i(m, m) !== 0) return v;
      do {
        const k = g + v >>> 1;
        o(p[k], m) < 0 ? g = k + 1 : v = k;
      } while (g < v);
    }
    return g;
  }
  function f(p, m, g = 0, v = p.length) {
    if (g < v) {
      if (i(m, m) !== 0) return v;
      do {
        const k = g + v >>> 1;
        o(p[k], m) <= 0 ? g = k + 1 : v = k;
      } while (g < v);
    }
    return g;
  }
  function h(p, m, g = 0, v = p.length) {
    const k = u(p, m, g, v - 1);
    return k > g && c(p[k - 1], m) > -c(p[k], m) ? k - 1 : k;
  }
  return { left: u, center: h, right: f };
}
function bp() {
  return 0;
}
function Jp(r) {
  return r === null ? NaN : +r;
}
const e0 = nf(yl), n0 = e0.right;
nf(Jp).center;
class yd extends Map {
  constructor(i, o = i0) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: o } }), i != null) for (const [c, u] of i) this.set(c, u);
  }
  get(i) {
    return super.get(xd(this, i));
  }
  has(i) {
    return super.has(xd(this, i));
  }
  set(i, o) {
    return super.set(t0(this, i), o);
  }
  delete(i) {
    return super.delete(r0(this, i));
  }
}
function xd({ _intern: r, _key: i }, o) {
  const c = i(o);
  return r.has(c) ? r.get(c) : o;
}
function t0({ _intern: r, _key: i }, o) {
  const c = i(o);
  return r.has(c) ? r.get(c) : (r.set(c, o), o);
}
function r0({ _intern: r, _key: i }, o) {
  const c = i(o);
  return r.has(c) && (o = r.get(c), r.delete(c)), o;
}
function i0(r) {
  return r !== null && typeof r == "object" ? r.valueOf() : r;
}
const l0 = Math.sqrt(50), o0 = Math.sqrt(10), a0 = Math.sqrt(2);
function _l(r, i, o) {
  const c = (i - r) / Math.max(0, o), u = Math.floor(Math.log10(c)), f = c / Math.pow(10, u), h = f >= l0 ? 10 : f >= o0 ? 5 : f >= a0 ? 2 : 1;
  let p, m, g;
  return u < 0 ? (g = Math.pow(10, -u) / h, p = Math.round(r * g), m = Math.round(i * g), p / g < r && ++p, m / g > i && --m, g = -g) : (g = Math.pow(10, u) * h, p = Math.round(r / g), m = Math.round(i / g), p * g < r && ++p, m * g > i && --m), m < p && 0.5 <= o && o < 2 ? _l(r, i, o * 2) : [p, m, g];
}
function s0(r, i, o) {
  if (i = +i, r = +r, o = +o, !(o > 0)) return [];
  if (r === i) return [r];
  const c = i < r, [u, f, h] = c ? _l(i, r, o) : _l(r, i, o);
  if (!(f >= u)) return [];
  const p = f - u + 1, m = new Array(p);
  if (c)
    if (h < 0) for (let g = 0; g < p; ++g) m[g] = (f - g) / -h;
    else for (let g = 0; g < p; ++g) m[g] = (f - g) * h;
  else if (h < 0) for (let g = 0; g < p; ++g) m[g] = (u + g) / -h;
  else for (let g = 0; g < p; ++g) m[g] = (u + g) * h;
  return m;
}
function Ha(r, i, o) {
  return i = +i, r = +r, o = +o, _l(r, i, o)[2];
}
function c0(r, i, o) {
  i = +i, r = +r, o = +o;
  const c = i < r, u = c ? Ha(i, r, o) : Ha(r, i, o);
  return (c ? -1 : 1) * (u < 0 ? 1 / -u : u);
}
var u0 = { value: () => {
} };
function tf() {
  for (var r = 0, i = arguments.length, o = {}, c; r < i; ++r) {
    if (!(c = arguments[r] + "") || c in o || /[\s.]/.test(c)) throw new Error("illegal type: " + c);
    o[c] = [];
  }
  return new xl(o);
}
function xl(r) {
  this._ = r;
}
function d0(r, i) {
  return r.trim().split(/^|\s+/).map(function(o) {
    var c = "", u = o.indexOf(".");
    if (u >= 0 && (c = o.slice(u + 1), o = o.slice(0, u)), o && !i.hasOwnProperty(o)) throw new Error("unknown type: " + o);
    return { type: o, name: c };
  });
}
xl.prototype = tf.prototype = {
  constructor: xl,
  on: function(r, i) {
    var o = this._, c = d0(r + "", o), u, f = -1, h = c.length;
    if (arguments.length < 2) {
      for (; ++f < h; ) if ((u = (r = c[f]).type) && (u = f0(o[u], r.name))) return u;
      return;
    }
    if (i != null && typeof i != "function") throw new Error("invalid callback: " + i);
    for (; ++f < h; )
      if (u = (r = c[f]).type) o[u] = wd(o[u], r.name, i);
      else if (i == null) for (u in o) o[u] = wd(o[u], r.name, null);
    return this;
  },
  copy: function() {
    var r = {}, i = this._;
    for (var o in i) r[o] = i[o].slice();
    return new xl(r);
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
function f0(r, i) {
  for (var o = 0, c = r.length, u; o < c; ++o)
    if ((u = r[o]).name === i)
      return u.value;
}
function wd(r, i, o) {
  for (var c = 0, u = r.length; c < u; ++c)
    if (r[c].name === i) {
      r[c] = u0, r = r.slice(0, c).concat(r.slice(c + 1));
      break;
    }
  return o != null && r.push({ name: i, value: o }), r;
}
var Wa = "http://www.w3.org/1999/xhtml";
const Sd = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Wa,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Fl(r) {
  var i = r += "", o = i.indexOf(":");
  return o >= 0 && (i = r.slice(0, o)) !== "xmlns" && (r = r.slice(o + 1)), Sd.hasOwnProperty(i) ? { space: Sd[i], local: r } : r;
}
function h0(r) {
  return function() {
    var i = this.ownerDocument, o = this.namespaceURI;
    return o === Wa && i.documentElement.namespaceURI === Wa ? i.createElement(r) : i.createElementNS(o, r);
  };
}
function p0(r) {
  return function() {
    return this.ownerDocument.createElementNS(r.space, r.local);
  };
}
function rf(r) {
  var i = Fl(r);
  return (i.local ? p0 : h0)(i);
}
function g0() {
}
function is(r) {
  return r == null ? g0 : function() {
    return this.querySelector(r);
  };
}
function m0(r) {
  typeof r != "function" && (r = is(r));
  for (var i = this._groups, o = i.length, c = new Array(o), u = 0; u < o; ++u)
    for (var f = i[u], h = f.length, p = c[u] = new Array(h), m, g, v = 0; v < h; ++v)
      (m = f[v]) && (g = r.call(m, m.__data__, v, f)) && ("__data__" in m && (g.__data__ = m.__data__), p[v] = g);
  return new wn(c, this._parents);
}
function N0(r) {
  return r == null ? [] : Array.isArray(r) ? r : Array.from(r);
}
function v0() {
  return [];
}
function lf(r) {
  return r == null ? v0 : function() {
    return this.querySelectorAll(r);
  };
}
function y0(r) {
  return function() {
    return N0(r.apply(this, arguments));
  };
}
function x0(r) {
  typeof r == "function" ? r = y0(r) : r = lf(r);
  for (var i = this._groups, o = i.length, c = [], u = [], f = 0; f < o; ++f)
    for (var h = i[f], p = h.length, m, g = 0; g < p; ++g)
      (m = h[g]) && (c.push(r.call(m, m.__data__, g, h)), u.push(m));
  return new wn(c, u);
}
function of(r) {
  return function() {
    return this.matches(r);
  };
}
function af(r) {
  return function(i) {
    return i.matches(r);
  };
}
var w0 = Array.prototype.find;
function S0(r) {
  return function() {
    return w0.call(this.children, r);
  };
}
function k0() {
  return this.firstElementChild;
}
function _0(r) {
  return this.select(r == null ? k0 : S0(typeof r == "function" ? r : af(r)));
}
var D0 = Array.prototype.filter;
function B0() {
  return Array.from(this.children);
}
function C0(r) {
  return function() {
    return D0.call(this.children, r);
  };
}
function E0(r) {
  return this.selectAll(r == null ? B0 : C0(typeof r == "function" ? r : af(r)));
}
function A0(r) {
  typeof r != "function" && (r = of(r));
  for (var i = this._groups, o = i.length, c = new Array(o), u = 0; u < o; ++u)
    for (var f = i[u], h = f.length, p = c[u] = [], m, g = 0; g < h; ++g)
      (m = f[g]) && r.call(m, m.__data__, g, f) && p.push(m);
  return new wn(c, this._parents);
}
function sf(r) {
  return new Array(r.length);
}
function M0() {
  return new wn(this._enter || this._groups.map(sf), this._parents);
}
function Dl(r, i) {
  this.ownerDocument = r.ownerDocument, this.namespaceURI = r.namespaceURI, this._next = null, this._parent = r, this.__data__ = i;
}
Dl.prototype = {
  constructor: Dl,
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
function V0(r) {
  return function() {
    return r;
  };
}
function P0(r, i, o, c, u, f) {
  for (var h = 0, p, m = i.length, g = f.length; h < g; ++h)
    (p = i[h]) ? (p.__data__ = f[h], c[h] = p) : o[h] = new Dl(r, f[h]);
  for (; h < m; ++h)
    (p = i[h]) && (u[h] = p);
}
function z0(r, i, o, c, u, f, h) {
  var p, m, g = /* @__PURE__ */ new Map(), v = i.length, k = f.length, S = new Array(v), A;
  for (p = 0; p < v; ++p)
    (m = i[p]) && (S[p] = A = h.call(m, m.__data__, p, i) + "", g.has(A) ? u[p] = m : g.set(A, m));
  for (p = 0; p < k; ++p)
    A = h.call(r, f[p], p, f) + "", (m = g.get(A)) ? (c[p] = m, m.__data__ = f[p], g.delete(A)) : o[p] = new Dl(r, f[p]);
  for (p = 0; p < v; ++p)
    (m = i[p]) && g.get(S[p]) === m && (u[p] = m);
}
function O0(r) {
  return r.__data__;
}
function T0(r, i) {
  if (!arguments.length) return Array.from(this, O0);
  var o = i ? z0 : P0, c = this._parents, u = this._groups;
  typeof r != "function" && (r = V0(r));
  for (var f = u.length, h = new Array(f), p = new Array(f), m = new Array(f), g = 0; g < f; ++g) {
    var v = c[g], k = u[g], S = k.length, A = I0(r.call(v, v && v.__data__, g, c)), Q = A.length, $ = p[g] = new Array(Q), Y = h[g] = new Array(Q), ne = m[g] = new Array(S);
    o(v, k, $, Y, ne, A, i);
    for (var oe = 0, G = 0, Z, ue; oe < Q; ++oe)
      if (Z = $[oe]) {
        for (oe >= G && (G = oe + 1); !(ue = Y[G]) && ++G < Q; ) ;
        Z._next = ue || null;
      }
  }
  return h = new wn(h, c), h._enter = p, h._exit = m, h;
}
function I0(r) {
  return typeof r == "object" && "length" in r ? r : Array.from(r);
}
function R0() {
  return new wn(this._exit || this._groups.map(sf), this._parents);
}
function L0(r, i, o) {
  var c = this.enter(), u = this, f = this.exit();
  return typeof r == "function" ? (c = r(c), c && (c = c.selection())) : c = c.append(r + ""), i != null && (u = i(u), u && (u = u.selection())), o == null ? f.remove() : o(f), c && u ? c.merge(u).order() : u;
}
function F0(r) {
  for (var i = r.selection ? r.selection() : r, o = this._groups, c = i._groups, u = o.length, f = c.length, h = Math.min(u, f), p = new Array(u), m = 0; m < h; ++m)
    for (var g = o[m], v = c[m], k = g.length, S = p[m] = new Array(k), A, Q = 0; Q < k; ++Q)
      (A = g[Q] || v[Q]) && (S[Q] = A);
  for (; m < u; ++m)
    p[m] = o[m];
  return new wn(p, this._parents);
}
function $0() {
  for (var r = this._groups, i = -1, o = r.length; ++i < o; )
    for (var c = r[i], u = c.length - 1, f = c[u], h; --u >= 0; )
      (h = c[u]) && (f && h.compareDocumentPosition(f) ^ 4 && f.parentNode.insertBefore(h, f), f = h);
  return this;
}
function G0(r) {
  r || (r = K0);
  function i(k, S) {
    return k && S ? r(k.__data__, S.__data__) : !k - !S;
  }
  for (var o = this._groups, c = o.length, u = new Array(c), f = 0; f < c; ++f) {
    for (var h = o[f], p = h.length, m = u[f] = new Array(p), g, v = 0; v < p; ++v)
      (g = h[v]) && (m[v] = g);
    m.sort(i);
  }
  return new wn(u, this._parents).order();
}
function K0(r, i) {
  return r < i ? -1 : r > i ? 1 : r >= i ? 0 : NaN;
}
function Q0() {
  var r = arguments[0];
  return arguments[0] = this, r.apply(null, arguments), this;
}
function j0() {
  return Array.from(this);
}
function U0() {
  for (var r = this._groups, i = 0, o = r.length; i < o; ++i)
    for (var c = r[i], u = 0, f = c.length; u < f; ++u) {
      var h = c[u];
      if (h) return h;
    }
  return null;
}
function H0() {
  let r = 0;
  for (const i of this) ++r;
  return r;
}
function W0() {
  return !this.node();
}
function X0(r) {
  for (var i = this._groups, o = 0, c = i.length; o < c; ++o)
    for (var u = i[o], f = 0, h = u.length, p; f < h; ++f)
      (p = u[f]) && r.call(p, p.__data__, f, u);
  return this;
}
function Y0(r) {
  return function() {
    this.removeAttribute(r);
  };
}
function q0(r) {
  return function() {
    this.removeAttributeNS(r.space, r.local);
  };
}
function Z0(r, i) {
  return function() {
    this.setAttribute(r, i);
  };
}
function b0(r, i) {
  return function() {
    this.setAttributeNS(r.space, r.local, i);
  };
}
function J0(r, i) {
  return function() {
    var o = i.apply(this, arguments);
    o == null ? this.removeAttribute(r) : this.setAttribute(r, o);
  };
}
function eg(r, i) {
  return function() {
    var o = i.apply(this, arguments);
    o == null ? this.removeAttributeNS(r.space, r.local) : this.setAttributeNS(r.space, r.local, o);
  };
}
function ng(r, i) {
  var o = Fl(r);
  if (arguments.length < 2) {
    var c = this.node();
    return o.local ? c.getAttributeNS(o.space, o.local) : c.getAttribute(o);
  }
  return this.each((i == null ? o.local ? q0 : Y0 : typeof i == "function" ? o.local ? eg : J0 : o.local ? b0 : Z0)(o, i));
}
function cf(r) {
  return r.ownerDocument && r.ownerDocument.defaultView || r.document && r || r.defaultView;
}
function tg(r) {
  return function() {
    this.style.removeProperty(r);
  };
}
function rg(r, i, o) {
  return function() {
    this.style.setProperty(r, i, o);
  };
}
function ig(r, i, o) {
  return function() {
    var c = i.apply(this, arguments);
    c == null ? this.style.removeProperty(r) : this.style.setProperty(r, c, o);
  };
}
function lg(r, i, o) {
  return arguments.length > 1 ? this.each((i == null ? tg : typeof i == "function" ? ig : rg)(r, i, o ?? "")) : ir(this.node(), r);
}
function ir(r, i) {
  return r.style.getPropertyValue(i) || cf(r).getComputedStyle(r, null).getPropertyValue(i);
}
function og(r) {
  return function() {
    delete this[r];
  };
}
function ag(r, i) {
  return function() {
    this[r] = i;
  };
}
function sg(r, i) {
  return function() {
    var o = i.apply(this, arguments);
    o == null ? delete this[r] : this[r] = o;
  };
}
function cg(r, i) {
  return arguments.length > 1 ? this.each((i == null ? og : typeof i == "function" ? sg : ag)(r, i)) : this.node()[r];
}
function uf(r) {
  return r.trim().split(/^|\s+/);
}
function ls(r) {
  return r.classList || new df(r);
}
function df(r) {
  this._node = r, this._names = uf(r.getAttribute("class") || "");
}
df.prototype = {
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
function ff(r, i) {
  for (var o = ls(r), c = -1, u = i.length; ++c < u; ) o.add(i[c]);
}
function hf(r, i) {
  for (var o = ls(r), c = -1, u = i.length; ++c < u; ) o.remove(i[c]);
}
function ug(r) {
  return function() {
    ff(this, r);
  };
}
function dg(r) {
  return function() {
    hf(this, r);
  };
}
function fg(r, i) {
  return function() {
    (i.apply(this, arguments) ? ff : hf)(this, r);
  };
}
function hg(r, i) {
  var o = uf(r + "");
  if (arguments.length < 2) {
    for (var c = ls(this.node()), u = -1, f = o.length; ++u < f; ) if (!c.contains(o[u])) return !1;
    return !0;
  }
  return this.each((typeof i == "function" ? fg : i ? ug : dg)(o, i));
}
function pg() {
  this.textContent = "";
}
function gg(r) {
  return function() {
    this.textContent = r;
  };
}
function mg(r) {
  return function() {
    var i = r.apply(this, arguments);
    this.textContent = i ?? "";
  };
}
function Ng(r) {
  return arguments.length ? this.each(r == null ? pg : (typeof r == "function" ? mg : gg)(r)) : this.node().textContent;
}
function vg() {
  this.innerHTML = "";
}
function yg(r) {
  return function() {
    this.innerHTML = r;
  };
}
function xg(r) {
  return function() {
    var i = r.apply(this, arguments);
    this.innerHTML = i ?? "";
  };
}
function wg(r) {
  return arguments.length ? this.each(r == null ? vg : (typeof r == "function" ? xg : yg)(r)) : this.node().innerHTML;
}
function Sg() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function kg() {
  return this.each(Sg);
}
function _g() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Dg() {
  return this.each(_g);
}
function Bg(r) {
  var i = typeof r == "function" ? r : rf(r);
  return this.select(function() {
    return this.appendChild(i.apply(this, arguments));
  });
}
function Cg() {
  return null;
}
function Eg(r, i) {
  var o = typeof r == "function" ? r : rf(r), c = i == null ? Cg : typeof i == "function" ? i : is(i);
  return this.select(function() {
    return this.insertBefore(o.apply(this, arguments), c.apply(this, arguments) || null);
  });
}
function Ag() {
  var r = this.parentNode;
  r && r.removeChild(this);
}
function Mg() {
  return this.each(Ag);
}
function Vg() {
  var r = this.cloneNode(!1), i = this.parentNode;
  return i ? i.insertBefore(r, this.nextSibling) : r;
}
function Pg() {
  var r = this.cloneNode(!0), i = this.parentNode;
  return i ? i.insertBefore(r, this.nextSibling) : r;
}
function zg(r) {
  return this.select(r ? Pg : Vg);
}
function Og(r) {
  return arguments.length ? this.property("__data__", r) : this.node().__data__;
}
function Tg(r) {
  return function(i) {
    r.call(this, i, this.__data__);
  };
}
function Ig(r) {
  return r.trim().split(/^|\s+/).map(function(i) {
    var o = "", c = i.indexOf(".");
    return c >= 0 && (o = i.slice(c + 1), i = i.slice(0, c)), { type: i, name: o };
  });
}
function Rg(r) {
  return function() {
    var i = this.__on;
    if (i) {
      for (var o = 0, c = -1, u = i.length, f; o < u; ++o)
        f = i[o], (!r.type || f.type === r.type) && f.name === r.name ? this.removeEventListener(f.type, f.listener, f.options) : i[++c] = f;
      ++c ? i.length = c : delete this.__on;
    }
  };
}
function Lg(r, i, o) {
  return function() {
    var c = this.__on, u, f = Tg(i);
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
function Fg(r, i, o) {
  var c = Ig(r + ""), u, f = c.length, h;
  if (arguments.length < 2) {
    var p = this.node().__on;
    if (p) {
      for (var m = 0, g = p.length, v; m < g; ++m)
        for (u = 0, v = p[m]; u < f; ++u)
          if ((h = c[u]).type === v.type && h.name === v.name)
            return v.value;
    }
    return;
  }
  for (p = i ? Lg : Rg, u = 0; u < f; ++u) this.each(p(c[u], i, o));
  return this;
}
function pf(r, i, o) {
  var c = cf(r), u = c.CustomEvent;
  typeof u == "function" ? u = new u(i, o) : (u = c.document.createEvent("Event"), o ? (u.initEvent(i, o.bubbles, o.cancelable), u.detail = o.detail) : u.initEvent(i, !1, !1)), r.dispatchEvent(u);
}
function $g(r, i) {
  return function() {
    return pf(this, r, i);
  };
}
function Gg(r, i) {
  return function() {
    return pf(this, r, i.apply(this, arguments));
  };
}
function Kg(r, i) {
  return this.each((typeof i == "function" ? Gg : $g)(r, i));
}
function* Qg() {
  for (var r = this._groups, i = 0, o = r.length; i < o; ++i)
    for (var c = r[i], u = 0, f = c.length, h; u < f; ++u)
      (h = c[u]) && (yield h);
}
var jg = [null];
function wn(r, i) {
  this._groups = r, this._parents = i;
}
function ni() {
  return new wn([[document.documentElement]], jg);
}
function Ug() {
  return this;
}
wn.prototype = ni.prototype = {
  constructor: wn,
  select: m0,
  selectAll: x0,
  selectChild: _0,
  selectChildren: E0,
  filter: A0,
  data: T0,
  enter: M0,
  exit: R0,
  join: L0,
  merge: F0,
  selection: Ug,
  order: $0,
  sort: G0,
  call: Q0,
  nodes: j0,
  node: U0,
  size: H0,
  empty: W0,
  each: X0,
  attr: ng,
  style: lg,
  property: cg,
  classed: hg,
  text: Ng,
  html: wg,
  raise: kg,
  lower: Dg,
  append: Bg,
  insert: Eg,
  remove: Mg,
  clone: zg,
  datum: Og,
  on: Fg,
  dispatch: Kg,
  [Symbol.iterator]: Qg
};
function os(r, i, o) {
  r.prototype = i.prototype = o, o.constructor = r;
}
function gf(r, i) {
  var o = Object.create(r.prototype);
  for (var c in i) o[c] = i[c];
  return o;
}
function ti() {
}
var Zr = 0.7, Bl = 1 / Zr, rr = "\\s*([+-]?\\d+)\\s*", br = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Mn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Hg = /^#([0-9a-f]{3,8})$/, Wg = new RegExp(`^rgb\\(${rr},${rr},${rr}\\)$`), Xg = new RegExp(`^rgb\\(${Mn},${Mn},${Mn}\\)$`), Yg = new RegExp(`^rgba\\(${rr},${rr},${rr},${br}\\)$`), qg = new RegExp(`^rgba\\(${Mn},${Mn},${Mn},${br}\\)$`), Zg = new RegExp(`^hsl\\(${br},${Mn},${Mn}\\)$`), bg = new RegExp(`^hsla\\(${br},${Mn},${Mn},${br}\\)$`), kd = {
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
os(ti, At, {
  copy(r) {
    return Object.assign(new this.constructor(), this, r);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: _d,
  // Deprecated! Use color.formatHex.
  formatHex: _d,
  formatHex8: Jg,
  formatHsl: e4,
  formatRgb: Dd,
  toString: Dd
});
function _d() {
  return this.rgb().formatHex();
}
function Jg() {
  return this.rgb().formatHex8();
}
function e4() {
  return mf(this).formatHsl();
}
function Dd() {
  return this.rgb().formatRgb();
}
function At(r) {
  var i, o;
  return r = (r + "").trim().toLowerCase(), (i = Hg.exec(r)) ? (o = i[1].length, i = parseInt(i[1], 16), o === 6 ? Bd(i) : o === 3 ? new en(i >> 8 & 15 | i >> 4 & 240, i >> 4 & 15 | i & 240, (i & 15) << 4 | i & 15, 1) : o === 8 ? hl(i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, (i & 255) / 255) : o === 4 ? hl(i >> 12 & 15 | i >> 8 & 240, i >> 8 & 15 | i >> 4 & 240, i >> 4 & 15 | i & 240, ((i & 15) << 4 | i & 15) / 255) : null) : (i = Wg.exec(r)) ? new en(i[1], i[2], i[3], 1) : (i = Xg.exec(r)) ? new en(i[1] * 255 / 100, i[2] * 255 / 100, i[3] * 255 / 100, 1) : (i = Yg.exec(r)) ? hl(i[1], i[2], i[3], i[4]) : (i = qg.exec(r)) ? hl(i[1] * 255 / 100, i[2] * 255 / 100, i[3] * 255 / 100, i[4]) : (i = Zg.exec(r)) ? Ad(i[1], i[2] / 100, i[3] / 100, 1) : (i = bg.exec(r)) ? Ad(i[1], i[2] / 100, i[3] / 100, i[4]) : kd.hasOwnProperty(r) ? Bd(kd[r]) : r === "transparent" ? new en(NaN, NaN, NaN, 0) : null;
}
function Bd(r) {
  return new en(r >> 16 & 255, r >> 8 & 255, r & 255, 1);
}
function hl(r, i, o, c) {
  return c <= 0 && (r = i = o = NaN), new en(r, i, o, c);
}
function n4(r) {
  return r instanceof ti || (r = At(r)), r ? (r = r.rgb(), new en(r.r, r.g, r.b, r.opacity)) : new en();
}
function Xa(r, i, o, c) {
  return arguments.length === 1 ? n4(r) : new en(r, i, o, c ?? 1);
}
function en(r, i, o, c) {
  this.r = +r, this.g = +i, this.b = +o, this.opacity = +c;
}
os(en, Xa, gf(ti, {
  brighter(r) {
    return r = r == null ? Bl : Math.pow(Bl, r), new en(this.r * r, this.g * r, this.b * r, this.opacity);
  },
  darker(r) {
    return r = r == null ? Zr : Math.pow(Zr, r), new en(this.r * r, this.g * r, this.b * r, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new en(Et(this.r), Et(this.g), Et(this.b), Cl(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Cd,
  // Deprecated! Use color.formatHex.
  formatHex: Cd,
  formatHex8: t4,
  formatRgb: Ed,
  toString: Ed
}));
function Cd() {
  return `#${Ct(this.r)}${Ct(this.g)}${Ct(this.b)}`;
}
function t4() {
  return `#${Ct(this.r)}${Ct(this.g)}${Ct(this.b)}${Ct((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ed() {
  const r = Cl(this.opacity);
  return `${r === 1 ? "rgb(" : "rgba("}${Et(this.r)}, ${Et(this.g)}, ${Et(this.b)}${r === 1 ? ")" : `, ${r})`}`;
}
function Cl(r) {
  return isNaN(r) ? 1 : Math.max(0, Math.min(1, r));
}
function Et(r) {
  return Math.max(0, Math.min(255, Math.round(r) || 0));
}
function Ct(r) {
  return r = Et(r), (r < 16 ? "0" : "") + r.toString(16);
}
function Ad(r, i, o, c) {
  return c <= 0 ? r = i = o = NaN : o <= 0 || o >= 1 ? r = i = NaN : i <= 0 && (r = NaN), new xn(r, i, o, c);
}
function mf(r) {
  if (r instanceof xn) return new xn(r.h, r.s, r.l, r.opacity);
  if (r instanceof ti || (r = At(r)), !r) return new xn();
  if (r instanceof xn) return r;
  r = r.rgb();
  var i = r.r / 255, o = r.g / 255, c = r.b / 255, u = Math.min(i, o, c), f = Math.max(i, o, c), h = NaN, p = f - u, m = (f + u) / 2;
  return p ? (i === f ? h = (o - c) / p + (o < c) * 6 : o === f ? h = (c - i) / p + 2 : h = (i - o) / p + 4, p /= m < 0.5 ? f + u : 2 - f - u, h *= 60) : p = m > 0 && m < 1 ? 0 : h, new xn(h, p, m, r.opacity);
}
function El(r, i, o, c) {
  return arguments.length === 1 ? mf(r) : new xn(r, i, o, c ?? 1);
}
function xn(r, i, o, c) {
  this.h = +r, this.s = +i, this.l = +o, this.opacity = +c;
}
os(xn, El, gf(ti, {
  brighter(r) {
    return r = r == null ? Bl : Math.pow(Bl, r), new xn(this.h, this.s, this.l * r, this.opacity);
  },
  darker(r) {
    return r = r == null ? Zr : Math.pow(Zr, r), new xn(this.h, this.s, this.l * r, this.opacity);
  },
  rgb() {
    var r = this.h % 360 + (this.h < 0) * 360, i = isNaN(r) || isNaN(this.s) ? 0 : this.s, o = this.l, c = o + (o < 0.5 ? o : 1 - o) * i, u = 2 * o - c;
    return new en(
      Ga(r >= 240 ? r - 240 : r + 120, u, c),
      Ga(r, u, c),
      Ga(r < 120 ? r + 240 : r - 120, u, c),
      this.opacity
    );
  },
  clamp() {
    return new xn(Md(this.h), pl(this.s), pl(this.l), Cl(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const r = Cl(this.opacity);
    return `${r === 1 ? "hsl(" : "hsla("}${Md(this.h)}, ${pl(this.s) * 100}%, ${pl(this.l) * 100}%${r === 1 ? ")" : `, ${r})`}`;
  }
}));
function Md(r) {
  return r = (r || 0) % 360, r < 0 ? r + 360 : r;
}
function pl(r) {
  return Math.max(0, Math.min(1, r || 0));
}
function Ga(r, i, o) {
  return (r < 60 ? i + (o - i) * r / 60 : r < 180 ? o : r < 240 ? i + (o - i) * (240 - r) / 60 : i) * 255;
}
const as = (r) => () => r;
function r4(r, i) {
  return function(o) {
    return r + o * i;
  };
}
function i4(r, i, o) {
  return r = Math.pow(r, o), i = Math.pow(i, o) - r, o = 1 / o, function(c) {
    return Math.pow(r + c * i, o);
  };
}
function l4(r) {
  return (r = +r) == 1 ? Nf : function(i, o) {
    return o - i ? i4(i, o, r) : as(isNaN(i) ? o : i);
  };
}
function Nf(r, i) {
  var o = i - r;
  return o ? r4(r, o) : as(isNaN(r) ? i : r);
}
const Al = (function r(i) {
  var o = l4(i);
  function c(u, f) {
    var h = o((u = Xa(u)).r, (f = Xa(f)).r), p = o(u.g, f.g), m = o(u.b, f.b), g = Nf(u.opacity, f.opacity);
    return function(v) {
      return u.r = h(v), u.g = p(v), u.b = m(v), u.opacity = g(v), u + "";
    };
  }
  return c.gamma = r, c;
})(1);
function o4(r, i) {
  i || (i = []);
  var o = r ? Math.min(i.length, r.length) : 0, c = i.slice(), u;
  return function(f) {
    for (u = 0; u < o; ++u) c[u] = r[u] * (1 - f) + i[u] * f;
    return c;
  };
}
function a4(r) {
  return ArrayBuffer.isView(r) && !(r instanceof DataView);
}
function s4(r, i) {
  var o = i ? i.length : 0, c = r ? Math.min(o, r.length) : 0, u = new Array(c), f = new Array(o), h;
  for (h = 0; h < c; ++h) u[h] = ss(r[h], i[h]);
  for (; h < o; ++h) f[h] = i[h];
  return function(p) {
    for (h = 0; h < c; ++h) f[h] = u[h](p);
    return f;
  };
}
function c4(r, i) {
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
function u4(r, i) {
  var o = {}, c = {}, u;
  (r === null || typeof r != "object") && (r = {}), (i === null || typeof i != "object") && (i = {});
  for (u in i)
    u in r ? o[u] = ss(r[u], i[u]) : c[u] = i[u];
  return function(f) {
    for (u in o) c[u] = o[u](f);
    return c;
  };
}
var Ya = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ka = new RegExp(Ya.source, "g");
function d4(r) {
  return function() {
    return r;
  };
}
function f4(r) {
  return function(i) {
    return r(i) + "";
  };
}
function vf(r, i) {
  var o = Ya.lastIndex = Ka.lastIndex = 0, c, u, f, h = -1, p = [], m = [];
  for (r = r + "", i = i + ""; (c = Ya.exec(r)) && (u = Ka.exec(i)); )
    (f = u.index) > o && (f = i.slice(o, f), p[h] ? p[h] += f : p[++h] = f), (c = c[0]) === (u = u[0]) ? p[h] ? p[h] += u : p[++h] = u : (p[++h] = null, m.push({ i: h, x: yn(c, u) })), o = Ka.lastIndex;
  return o < i.length && (f = i.slice(o), p[h] ? p[h] += f : p[++h] = f), p.length < 2 ? m[0] ? f4(m[0].x) : d4(i) : (i = m.length, function(g) {
    for (var v = 0, k; v < i; ++v) p[(k = m[v]).i] = k.x(g);
    return p.join("");
  });
}
function ss(r, i) {
  var o = typeof i, c;
  return i == null || o === "boolean" ? as(i) : (o === "number" ? yn : o === "string" ? (c = At(i)) ? (i = c, Al) : vf : i instanceof At ? Al : i instanceof Date ? c4 : a4(i) ? o4 : Array.isArray(i) ? s4 : typeof i.valueOf != "function" && typeof i.toString != "function" || isNaN(i) ? u4 : yn)(r, i);
}
function h4(r, i) {
  return r = +r, i = +i, function(o) {
    return Math.round(r * (1 - o) + i * o);
  };
}
var Vd = 180 / Math.PI, qa = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function yf(r, i, o, c, u, f) {
  var h, p, m;
  return (h = Math.sqrt(r * r + i * i)) && (r /= h, i /= h), (m = r * o + i * c) && (o -= r * m, c -= i * m), (p = Math.sqrt(o * o + c * c)) && (o /= p, c /= p, m /= p), r * c < i * o && (r = -r, i = -i, m = -m, h = -h), {
    translateX: u,
    translateY: f,
    rotate: Math.atan2(i, r) * Vd,
    skewX: Math.atan(m) * Vd,
    scaleX: h,
    scaleY: p
  };
}
var gl;
function p4(r) {
  const i = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(r + "");
  return i.isIdentity ? qa : yf(i.a, i.b, i.c, i.d, i.e, i.f);
}
function g4(r) {
  return r == null || (gl || (gl = document.createElementNS("http://www.w3.org/2000/svg", "g")), gl.setAttribute("transform", r), !(r = gl.transform.baseVal.consolidate())) ? qa : (r = r.matrix, yf(r.a, r.b, r.c, r.d, r.e, r.f));
}
function xf(r, i, o, c) {
  function u(g) {
    return g.length ? g.pop() + " " : "";
  }
  function f(g, v, k, S, A, Q) {
    if (g !== k || v !== S) {
      var $ = A.push("translate(", null, i, null, o);
      Q.push({ i: $ - 4, x: yn(g, k) }, { i: $ - 2, x: yn(v, S) });
    } else (k || S) && A.push("translate(" + k + i + S + o);
  }
  function h(g, v, k, S) {
    g !== v ? (g - v > 180 ? v += 360 : v - g > 180 && (g += 360), S.push({ i: k.push(u(k) + "rotate(", null, c) - 2, x: yn(g, v) })) : v && k.push(u(k) + "rotate(" + v + c);
  }
  function p(g, v, k, S) {
    g !== v ? S.push({ i: k.push(u(k) + "skewX(", null, c) - 2, x: yn(g, v) }) : v && k.push(u(k) + "skewX(" + v + c);
  }
  function m(g, v, k, S, A, Q) {
    if (g !== k || v !== S) {
      var $ = A.push(u(A) + "scale(", null, ",", null, ")");
      Q.push({ i: $ - 4, x: yn(g, k) }, { i: $ - 2, x: yn(v, S) });
    } else (k !== 1 || S !== 1) && A.push(u(A) + "scale(" + k + "," + S + ")");
  }
  return function(g, v) {
    var k = [], S = [];
    return g = r(g), v = r(v), f(g.translateX, g.translateY, v.translateX, v.translateY, k, S), h(g.rotate, v.rotate, k, S), p(g.skewX, v.skewX, k, S), m(g.scaleX, g.scaleY, v.scaleX, v.scaleY, k, S), g = v = null, function(A) {
      for (var Q = -1, $ = S.length, Y; ++Q < $; ) k[(Y = S[Q]).i] = Y.x(A);
      return k.join("");
    };
  };
}
var m4 = xf(p4, "px, ", "px)", "deg)"), N4 = xf(g4, ", ", ")", ")"), lr = 0, Xr = 0, Wr = 0, wf = 1e3, Ml, Yr, Vl = 0, Mt = 0, $l = 0, Jr = typeof performance == "object" && performance.now ? performance : Date, Sf = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(r) {
  setTimeout(r, 17);
};
function cs() {
  return Mt || (Sf(v4), Mt = Jr.now() + $l);
}
function v4() {
  Mt = 0;
}
function Pl() {
  this._call = this._time = this._next = null;
}
Pl.prototype = kf.prototype = {
  constructor: Pl,
  restart: function(r, i, o) {
    if (typeof r != "function") throw new TypeError("callback is not a function");
    o = (o == null ? cs() : +o) + (i == null ? 0 : +i), !this._next && Yr !== this && (Yr ? Yr._next = this : Ml = this, Yr = this), this._call = r, this._time = o, Za();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Za());
  }
};
function kf(r, i, o) {
  var c = new Pl();
  return c.restart(r, i, o), c;
}
function y4() {
  cs(), ++lr;
  for (var r = Ml, i; r; )
    (i = Mt - r._time) >= 0 && r._call.call(void 0, i), r = r._next;
  --lr;
}
function Pd() {
  Mt = (Vl = Jr.now()) + $l, lr = Xr = 0;
  try {
    y4();
  } finally {
    lr = 0, w4(), Mt = 0;
  }
}
function x4() {
  var r = Jr.now(), i = r - Vl;
  i > wf && ($l -= i, Vl = r);
}
function w4() {
  for (var r, i = Ml, o, c = 1 / 0; i; )
    i._call ? (c > i._time && (c = i._time), r = i, i = i._next) : (o = i._next, i._next = null, i = r ? r._next = o : Ml = o);
  Yr = r, Za(c);
}
function Za(r) {
  if (!lr) {
    Xr && (Xr = clearTimeout(Xr));
    var i = r - Mt;
    i > 24 ? (r < 1 / 0 && (Xr = setTimeout(Pd, r - Jr.now() - $l)), Wr && (Wr = clearInterval(Wr))) : (Wr || (Vl = Jr.now(), Wr = setInterval(x4, wf)), lr = 1, Sf(Pd));
  }
}
function zd(r, i, o) {
  var c = new Pl();
  return i = i == null ? 0 : +i, c.restart((u) => {
    c.stop(), r(u + i);
  }, i, o), c;
}
var S4 = tf("start", "end", "cancel", "interrupt"), k4 = [], _f = 0, Od = 1, ba = 2, wl = 3, Td = 4, Ja = 5, Sl = 6;
function Gl(r, i, o, c, u, f) {
  var h = r.__transition;
  if (!h) r.__transition = {};
  else if (o in h) return;
  _4(r, o, {
    name: i,
    index: c,
    // For context during callback.
    group: u,
    // For context during callback.
    on: S4,
    tween: k4,
    time: f.time,
    delay: f.delay,
    duration: f.duration,
    ease: f.ease,
    timer: null,
    state: _f
  });
}
function us(r, i) {
  var o = Sn(r, i);
  if (o.state > _f) throw new Error("too late; already scheduled");
  return o;
}
function Vn(r, i) {
  var o = Sn(r, i);
  if (o.state > wl) throw new Error("too late; already running");
  return o;
}
function Sn(r, i) {
  var o = r.__transition;
  if (!o || !(o = o[i])) throw new Error("transition not found");
  return o;
}
function _4(r, i, o) {
  var c = r.__transition, u;
  c[i] = o, o.timer = kf(f, 0, o.time);
  function f(g) {
    o.state = Od, o.timer.restart(h, o.delay, o.time), o.delay <= g && h(g - o.delay);
  }
  function h(g) {
    var v, k, S, A;
    if (o.state !== Od) return m();
    for (v in c)
      if (A = c[v], A.name === o.name) {
        if (A.state === wl) return zd(h);
        A.state === Td ? (A.state = Sl, A.timer.stop(), A.on.call("interrupt", r, r.__data__, A.index, A.group), delete c[v]) : +v < i && (A.state = Sl, A.timer.stop(), A.on.call("cancel", r, r.__data__, A.index, A.group), delete c[v]);
      }
    if (zd(function() {
      o.state === wl && (o.state = Td, o.timer.restart(p, o.delay, o.time), p(g));
    }), o.state = ba, o.on.call("start", r, r.__data__, o.index, o.group), o.state === ba) {
      for (o.state = wl, u = new Array(S = o.tween.length), v = 0, k = -1; v < S; ++v)
        (A = o.tween[v].value.call(r, r.__data__, o.index, o.group)) && (u[++k] = A);
      u.length = k + 1;
    }
  }
  function p(g) {
    for (var v = g < o.duration ? o.ease.call(null, g / o.duration) : (o.timer.restart(m), o.state = Ja, 1), k = -1, S = u.length; ++k < S; )
      u[k].call(r, v);
    o.state === Ja && (o.on.call("end", r, r.__data__, o.index, o.group), m());
  }
  function m() {
    o.state = Sl, o.timer.stop(), delete c[i];
    for (var g in c) return;
    delete r.__transition;
  }
}
function D4(r, i) {
  var o = r.__transition, c, u, f = !0, h;
  if (o) {
    i = i == null ? null : i + "";
    for (h in o) {
      if ((c = o[h]).name !== i) {
        f = !1;
        continue;
      }
      u = c.state > ba && c.state < Ja, c.state = Sl, c.timer.stop(), c.on.call(u ? "interrupt" : "cancel", r, r.__data__, c.index, c.group), delete o[h];
    }
    f && delete r.__transition;
  }
}
function B4(r) {
  return this.each(function() {
    D4(this, r);
  });
}
function C4(r, i) {
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
function E4(r, i, o) {
  var c, u;
  if (typeof o != "function") throw new Error();
  return function() {
    var f = Vn(this, r), h = f.tween;
    if (h !== c) {
      u = (c = h).slice();
      for (var p = { name: i, value: o }, m = 0, g = u.length; m < g; ++m)
        if (u[m].name === i) {
          u[m] = p;
          break;
        }
      m === g && u.push(p);
    }
    f.tween = u;
  };
}
function A4(r, i) {
  var o = this._id;
  if (r += "", arguments.length < 2) {
    for (var c = Sn(this.node(), o).tween, u = 0, f = c.length, h; u < f; ++u)
      if ((h = c[u]).name === r)
        return h.value;
    return null;
  }
  return this.each((i == null ? C4 : E4)(o, r, i));
}
function ds(r, i, o) {
  var c = r._id;
  return r.each(function() {
    var u = Vn(this, c);
    (u.value || (u.value = {}))[i] = o.apply(this, arguments);
  }), function(u) {
    return Sn(u, c).value[i];
  };
}
function Df(r, i) {
  var o;
  return (typeof i == "number" ? yn : i instanceof At ? Al : (o = At(i)) ? (i = o, Al) : vf)(r, i);
}
function M4(r) {
  return function() {
    this.removeAttribute(r);
  };
}
function V4(r) {
  return function() {
    this.removeAttributeNS(r.space, r.local);
  };
}
function P4(r, i, o) {
  var c, u = o + "", f;
  return function() {
    var h = this.getAttribute(r);
    return h === u ? null : h === c ? f : f = i(c = h, o);
  };
}
function z4(r, i, o) {
  var c, u = o + "", f;
  return function() {
    var h = this.getAttributeNS(r.space, r.local);
    return h === u ? null : h === c ? f : f = i(c = h, o);
  };
}
function O4(r, i, o) {
  var c, u, f;
  return function() {
    var h, p = o(this), m;
    return p == null ? void this.removeAttribute(r) : (h = this.getAttribute(r), m = p + "", h === m ? null : h === c && m === u ? f : (u = m, f = i(c = h, p)));
  };
}
function T4(r, i, o) {
  var c, u, f;
  return function() {
    var h, p = o(this), m;
    return p == null ? void this.removeAttributeNS(r.space, r.local) : (h = this.getAttributeNS(r.space, r.local), m = p + "", h === m ? null : h === c && m === u ? f : (u = m, f = i(c = h, p)));
  };
}
function I4(r, i) {
  var o = Fl(r), c = o === "transform" ? N4 : Df;
  return this.attrTween(r, typeof i == "function" ? (o.local ? T4 : O4)(o, c, ds(this, "attr." + r, i)) : i == null ? (o.local ? V4 : M4)(o) : (o.local ? z4 : P4)(o, c, i));
}
function R4(r, i) {
  return function(o) {
    this.setAttribute(r, i.call(this, o));
  };
}
function L4(r, i) {
  return function(o) {
    this.setAttributeNS(r.space, r.local, i.call(this, o));
  };
}
function F4(r, i) {
  var o, c;
  function u() {
    var f = i.apply(this, arguments);
    return f !== c && (o = (c = f) && L4(r, f)), o;
  }
  return u._value = i, u;
}
function $4(r, i) {
  var o, c;
  function u() {
    var f = i.apply(this, arguments);
    return f !== c && (o = (c = f) && R4(r, f)), o;
  }
  return u._value = i, u;
}
function G4(r, i) {
  var o = "attr." + r;
  if (arguments.length < 2) return (o = this.tween(o)) && o._value;
  if (i == null) return this.tween(o, null);
  if (typeof i != "function") throw new Error();
  var c = Fl(r);
  return this.tween(o, (c.local ? F4 : $4)(c, i));
}
function K4(r, i) {
  return function() {
    us(this, r).delay = +i.apply(this, arguments);
  };
}
function Q4(r, i) {
  return i = +i, function() {
    us(this, r).delay = i;
  };
}
function j4(r) {
  var i = this._id;
  return arguments.length ? this.each((typeof r == "function" ? K4 : Q4)(i, r)) : Sn(this.node(), i).delay;
}
function U4(r, i) {
  return function() {
    Vn(this, r).duration = +i.apply(this, arguments);
  };
}
function H4(r, i) {
  return i = +i, function() {
    Vn(this, r).duration = i;
  };
}
function W4(r) {
  var i = this._id;
  return arguments.length ? this.each((typeof r == "function" ? U4 : H4)(i, r)) : Sn(this.node(), i).duration;
}
function X4(r, i) {
  if (typeof i != "function") throw new Error();
  return function() {
    Vn(this, r).ease = i;
  };
}
function Y4(r) {
  var i = this._id;
  return arguments.length ? this.each(X4(i, r)) : Sn(this.node(), i).ease;
}
function q4(r, i) {
  return function() {
    var o = i.apply(this, arguments);
    if (typeof o != "function") throw new Error();
    Vn(this, r).ease = o;
  };
}
function Z4(r) {
  if (typeof r != "function") throw new Error();
  return this.each(q4(this._id, r));
}
function b4(r) {
  typeof r != "function" && (r = of(r));
  for (var i = this._groups, o = i.length, c = new Array(o), u = 0; u < o; ++u)
    for (var f = i[u], h = f.length, p = c[u] = [], m, g = 0; g < h; ++g)
      (m = f[g]) && r.call(m, m.__data__, g, f) && p.push(m);
  return new Qn(c, this._parents, this._name, this._id);
}
function J4(r) {
  if (r._id !== this._id) throw new Error();
  for (var i = this._groups, o = r._groups, c = i.length, u = o.length, f = Math.min(c, u), h = new Array(c), p = 0; p < f; ++p)
    for (var m = i[p], g = o[p], v = m.length, k = h[p] = new Array(v), S, A = 0; A < v; ++A)
      (S = m[A] || g[A]) && (k[A] = S);
  for (; p < c; ++p)
    h[p] = i[p];
  return new Qn(h, this._parents, this._name, this._id);
}
function em(r) {
  return (r + "").trim().split(/^|\s+/).every(function(i) {
    var o = i.indexOf(".");
    return o >= 0 && (i = i.slice(0, o)), !i || i === "start";
  });
}
function nm(r, i, o) {
  var c, u, f = em(i) ? us : Vn;
  return function() {
    var h = f(this, r), p = h.on;
    p !== c && (u = (c = p).copy()).on(i, o), h.on = u;
  };
}
function tm(r, i) {
  var o = this._id;
  return arguments.length < 2 ? Sn(this.node(), o).on.on(r) : this.each(nm(o, r, i));
}
function rm(r) {
  return function() {
    var i = this.parentNode;
    for (var o in this.__transition) if (+o !== r) return;
    i && i.removeChild(this);
  };
}
function im() {
  return this.on("end.remove", rm(this._id));
}
function lm(r) {
  var i = this._name, o = this._id;
  typeof r != "function" && (r = is(r));
  for (var c = this._groups, u = c.length, f = new Array(u), h = 0; h < u; ++h)
    for (var p = c[h], m = p.length, g = f[h] = new Array(m), v, k, S = 0; S < m; ++S)
      (v = p[S]) && (k = r.call(v, v.__data__, S, p)) && ("__data__" in v && (k.__data__ = v.__data__), g[S] = k, Gl(g[S], i, o, S, g, Sn(v, o)));
  return new Qn(f, this._parents, i, o);
}
function om(r) {
  var i = this._name, o = this._id;
  typeof r != "function" && (r = lf(r));
  for (var c = this._groups, u = c.length, f = [], h = [], p = 0; p < u; ++p)
    for (var m = c[p], g = m.length, v, k = 0; k < g; ++k)
      if (v = m[k]) {
        for (var S = r.call(v, v.__data__, k, m), A, Q = Sn(v, o), $ = 0, Y = S.length; $ < Y; ++$)
          (A = S[$]) && Gl(A, i, o, $, S, Q);
        f.push(S), h.push(v);
      }
  return new Qn(f, h, i, o);
}
var am = ni.prototype.constructor;
function sm() {
  return new am(this._groups, this._parents);
}
function cm(r, i) {
  var o, c, u;
  return function() {
    var f = ir(this, r), h = (this.style.removeProperty(r), ir(this, r));
    return f === h ? null : f === o && h === c ? u : u = i(o = f, c = h);
  };
}
function Bf(r) {
  return function() {
    this.style.removeProperty(r);
  };
}
function um(r, i, o) {
  var c, u = o + "", f;
  return function() {
    var h = ir(this, r);
    return h === u ? null : h === c ? f : f = i(c = h, o);
  };
}
function dm(r, i, o) {
  var c, u, f;
  return function() {
    var h = ir(this, r), p = o(this), m = p + "";
    return p == null && (m = p = (this.style.removeProperty(r), ir(this, r))), h === m ? null : h === c && m === u ? f : (u = m, f = i(c = h, p));
  };
}
function fm(r, i) {
  var o, c, u, f = "style." + i, h = "end." + f, p;
  return function() {
    var m = Vn(this, r), g = m.on, v = m.value[f] == null ? p || (p = Bf(i)) : void 0;
    (g !== o || u !== v) && (c = (o = g).copy()).on(h, u = v), m.on = c;
  };
}
function hm(r, i, o) {
  var c = (r += "") == "transform" ? m4 : Df;
  return i == null ? this.styleTween(r, cm(r, c)).on("end.style." + r, Bf(r)) : typeof i == "function" ? this.styleTween(r, dm(r, c, ds(this, "style." + r, i))).each(fm(this._id, r)) : this.styleTween(r, um(r, c, i), o).on("end.style." + r, null);
}
function pm(r, i, o) {
  return function(c) {
    this.style.setProperty(r, i.call(this, c), o);
  };
}
function gm(r, i, o) {
  var c, u;
  function f() {
    var h = i.apply(this, arguments);
    return h !== u && (c = (u = h) && pm(r, h, o)), c;
  }
  return f._value = i, f;
}
function mm(r, i, o) {
  var c = "style." + (r += "");
  if (arguments.length < 2) return (c = this.tween(c)) && c._value;
  if (i == null) return this.tween(c, null);
  if (typeof i != "function") throw new Error();
  return this.tween(c, gm(r, i, o ?? ""));
}
function Nm(r) {
  return function() {
    this.textContent = r;
  };
}
function vm(r) {
  return function() {
    var i = r(this);
    this.textContent = i ?? "";
  };
}
function ym(r) {
  return this.tween("text", typeof r == "function" ? vm(ds(this, "text", r)) : Nm(r == null ? "" : r + ""));
}
function xm(r) {
  return function(i) {
    this.textContent = r.call(this, i);
  };
}
function wm(r) {
  var i, o;
  function c() {
    var u = r.apply(this, arguments);
    return u !== o && (i = (o = u) && xm(u)), i;
  }
  return c._value = r, c;
}
function Sm(r) {
  var i = "text";
  if (arguments.length < 1) return (i = this.tween(i)) && i._value;
  if (r == null) return this.tween(i, null);
  if (typeof r != "function") throw new Error();
  return this.tween(i, wm(r));
}
function km() {
  for (var r = this._name, i = this._id, o = Cf(), c = this._groups, u = c.length, f = 0; f < u; ++f)
    for (var h = c[f], p = h.length, m, g = 0; g < p; ++g)
      if (m = h[g]) {
        var v = Sn(m, i);
        Gl(m, r, o, g, h, {
          time: v.time + v.delay + v.duration,
          delay: 0,
          duration: v.duration,
          ease: v.ease
        });
      }
  return new Qn(c, this._parents, r, o);
}
function _m() {
  var r, i, o = this, c = o._id, u = o.size();
  return new Promise(function(f, h) {
    var p = { value: h }, m = { value: function() {
      --u === 0 && f();
    } };
    o.each(function() {
      var g = Vn(this, c), v = g.on;
      v !== r && (i = (r = v).copy(), i._.cancel.push(p), i._.interrupt.push(p), i._.end.push(m)), g.on = i;
    }), u === 0 && f();
  });
}
var Dm = 0;
function Qn(r, i, o, c) {
  this._groups = r, this._parents = i, this._name = o, this._id = c;
}
function Cf() {
  return ++Dm;
}
var $n = ni.prototype;
Qn.prototype = {
  constructor: Qn,
  select: lm,
  selectAll: om,
  selectChild: $n.selectChild,
  selectChildren: $n.selectChildren,
  filter: b4,
  merge: J4,
  selection: sm,
  transition: km,
  call: $n.call,
  nodes: $n.nodes,
  node: $n.node,
  size: $n.size,
  empty: $n.empty,
  each: $n.each,
  on: tm,
  attr: I4,
  attrTween: G4,
  style: hm,
  styleTween: mm,
  text: ym,
  textTween: Sm,
  remove: im,
  tween: A4,
  delay: j4,
  duration: W4,
  ease: Y4,
  easeVarying: Z4,
  end: _m,
  [Symbol.iterator]: $n[Symbol.iterator]
};
function Bm(r) {
  return ((r *= 2) <= 1 ? r * r * r : (r -= 2) * r * r + 2) / 2;
}
var Cm = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Bm
};
function Em(r, i) {
  for (var o; !(o = r.__transition) || !(o = o[i]); )
    if (!(r = r.parentNode))
      throw new Error(`transition ${i} not found`);
  return o;
}
function Am(r) {
  var i, o;
  r instanceof Qn ? (i = r._id, r = r._name) : (i = Cf(), (o = Cm).time = cs(), r = r == null ? null : r + "");
  for (var c = this._groups, u = c.length, f = 0; f < u; ++f)
    for (var h = c[f], p = h.length, m, g = 0; g < p; ++g)
      (m = h[g]) && Gl(m, r, i, g, h, o || Em(m, i));
  return new Qn(c, this._parents, r, i);
}
ni.prototype.interrupt = B4;
ni.prototype.transition = Am;
const es = Math.PI, ns = 2 * es, Bt = 1e-6, Mm = ns - Bt;
function Ef(r) {
  this._ += r[0];
  for (let i = 1, o = r.length; i < o; ++i)
    this._ += arguments[i] + r[i];
}
function Vm(r) {
  let i = Math.floor(r);
  if (!(i >= 0)) throw new Error(`invalid digits: ${r}`);
  if (i > 15) return Ef;
  const o = 10 ** i;
  return function(c) {
    this._ += c[0];
    for (let u = 1, f = c.length; u < f; ++u)
      this._ += Math.round(arguments[u] * o) / o + c[u];
  };
}
class Pm {
  constructor(i) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = i == null ? Ef : Vm(i);
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
    let h = this._x1, p = this._y1, m = c - i, g = u - o, v = h - i, k = p - o, S = v * v + k * k;
    if (this._x1 === null)
      this._append`M${this._x1 = i},${this._y1 = o}`;
    else if (S > Bt) if (!(Math.abs(k * m - g * v) > Bt) || !f)
      this._append`L${this._x1 = i},${this._y1 = o}`;
    else {
      let A = c - h, Q = u - p, $ = m * m + g * g, Y = A * A + Q * Q, ne = Math.sqrt($), oe = Math.sqrt(S), G = f * Math.tan((es - Math.acos(($ + S - Y) / (2 * ne * oe))) / 2), Z = G / oe, ue = G / ne;
      Math.abs(Z - 1) > Bt && this._append`L${i + Z * v},${o + Z * k}`, this._append`A${f},${f},0,0,${+(k * A > v * Q)},${this._x1 = i + ue * m},${this._y1 = o + ue * g}`;
    }
  }
  arc(i, o, c, u, f, h) {
    if (i = +i, o = +o, c = +c, h = !!h, c < 0) throw new Error(`negative radius: ${c}`);
    let p = c * Math.cos(u), m = c * Math.sin(u), g = i + p, v = o + m, k = 1 ^ h, S = h ? u - f : f - u;
    this._x1 === null ? this._append`M${g},${v}` : (Math.abs(this._x1 - g) > Bt || Math.abs(this._y1 - v) > Bt) && this._append`L${g},${v}`, c && (S < 0 && (S = S % ns + ns), S > Mm ? this._append`A${c},${c},0,1,${k},${i - p},${o - m}A${c},${c},0,1,${k},${this._x1 = g},${this._y1 = v}` : S > Bt && this._append`A${c},${c},0,${+(S >= es)},${k},${this._x1 = i + c * Math.cos(f)},${this._y1 = o + c * Math.sin(f)}`);
  }
  rect(i, o, c, u) {
    this._append`M${this._x0 = this._x1 = +i},${this._y0 = this._y1 = +o}h${c = +c}v${+u}h${-c}Z`;
  }
  toString() {
    return this._;
  }
}
function zm(r) {
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
function or(r) {
  return r = zl(Math.abs(r)), r ? r[1] : NaN;
}
function Om(r, i) {
  return function(o, c) {
    for (var u = o.length, f = [], h = 0, p = r[0], m = 0; u > 0 && p > 0 && (m + p + 1 > c && (p = Math.max(1, c - m)), f.push(o.substring(u -= p, u + p)), !((m += p + 1) > c)); )
      p = r[h = (h + 1) % r.length];
    return f.reverse().join(i);
  };
}
function Tm(r) {
  return function(i) {
    return i.replace(/[0-9]/g, function(o) {
      return r[+o];
    });
  };
}
var Im = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ol(r) {
  if (!(i = Im.exec(r))) throw new Error("invalid format: " + r);
  var i;
  return new fs({
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
Ol.prototype = fs.prototype;
function fs(r) {
  this.fill = r.fill === void 0 ? " " : r.fill + "", this.align = r.align === void 0 ? ">" : r.align + "", this.sign = r.sign === void 0 ? "-" : r.sign + "", this.symbol = r.symbol === void 0 ? "" : r.symbol + "", this.zero = !!r.zero, this.width = r.width === void 0 ? void 0 : +r.width, this.comma = !!r.comma, this.precision = r.precision === void 0 ? void 0 : +r.precision, this.trim = !!r.trim, this.type = r.type === void 0 ? "" : r.type + "";
}
fs.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Rm(r) {
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
function Lm(r, i) {
  var o = zl(r, i);
  if (!o) return Tl = void 0, r.toPrecision(i);
  var c = o[0], u = o[1], f = u - (Tl = Math.max(-8, Math.min(8, Math.floor(u / 3))) * 3) + 1, h = c.length;
  return f === h ? c : f > h ? c + new Array(f - h + 1).join("0") : f > 0 ? c.slice(0, f) + "." + c.slice(f) : "0." + new Array(1 - f).join("0") + zl(r, Math.max(0, i + f - 1))[0];
}
function Id(r, i) {
  var o = zl(r, i);
  if (!o) return r + "";
  var c = o[0], u = o[1];
  return u < 0 ? "0." + new Array(-u).join("0") + c : c.length > u + 1 ? c.slice(0, u + 1) + "." + c.slice(u + 1) : c + new Array(u - c.length + 2).join("0");
}
const Rd = {
  "%": (r, i) => (r * 100).toFixed(i),
  b: (r) => Math.round(r).toString(2),
  c: (r) => r + "",
  d: zm,
  e: (r, i) => r.toExponential(i),
  f: (r, i) => r.toFixed(i),
  g: (r, i) => r.toPrecision(i),
  o: (r) => Math.round(r).toString(8),
  p: (r, i) => Id(r * 100, i),
  r: Id,
  s: Lm,
  X: (r) => Math.round(r).toString(16).toUpperCase(),
  x: (r) => Math.round(r).toString(16)
};
function Ld(r) {
  return r;
}
var Fd = Array.prototype.map, $d = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Fm(r) {
  var i = r.grouping === void 0 || r.thousands === void 0 ? Ld : Om(Fd.call(r.grouping, Number), r.thousands + ""), o = r.currency === void 0 ? "" : r.currency[0] + "", c = r.currency === void 0 ? "" : r.currency[1] + "", u = r.decimal === void 0 ? "." : r.decimal + "", f = r.numerals === void 0 ? Ld : Tm(Fd.call(r.numerals, String)), h = r.percent === void 0 ? "%" : r.percent + "", p = r.minus === void 0 ? "−" : r.minus + "", m = r.nan === void 0 ? "NaN" : r.nan + "";
  function g(k, S) {
    k = Ol(k);
    var A = k.fill, Q = k.align, $ = k.sign, Y = k.symbol, ne = k.zero, oe = k.width, G = k.comma, Z = k.precision, ue = k.trim, ae = k.type;
    ae === "n" ? (G = !0, ae = "g") : Rd[ae] || (Z === void 0 && (Z = 12), ue = !0, ae = "g"), (ne || A === "0" && Q === "=") && (ne = !0, A = "0", Q = "=");
    var I = (S && S.prefix !== void 0 ? S.prefix : "") + (Y === "$" ? o : Y === "#" && /[boxX]/.test(ae) ? "0" + ae.toLowerCase() : ""), q = (Y === "$" ? c : /[%p]/.test(ae) ? h : "") + (S && S.suffix !== void 0 ? S.suffix : ""), ce = Rd[ae], pe = /[defgprs%]/.test(ae);
    Z = Z === void 0 ? 6 : /[gprs]/.test(ae) ? Math.max(1, Math.min(21, Z)) : Math.max(0, Math.min(20, Z));
    function E(M) {
      var P = I, F = q, de, ge, se;
      if (ae === "c")
        F = ce(M) + F, M = "";
      else {
        M = +M;
        var T = M < 0 || 1 / M < 0;
        if (M = isNaN(M) ? m : ce(Math.abs(M), Z), ue && (M = Rm(M)), T && +M == 0 && $ !== "+" && (T = !1), P = (T ? $ === "(" ? $ : p : $ === "-" || $ === "(" ? "" : $) + P, F = (ae === "s" && !isNaN(M) && Tl !== void 0 ? $d[8 + Tl / 3] : "") + F + (T && $ === "(" ? ")" : ""), pe) {
          for (de = -1, ge = M.length; ++de < ge; )
            if (se = M.charCodeAt(de), 48 > se || se > 57) {
              F = (se === 46 ? u + M.slice(de + 1) : M.slice(de)) + F, M = M.slice(0, de);
              break;
            }
        }
      }
      G && !ne && (M = i(M, 1 / 0));
      var j = P.length + M.length + F.length, R = j < oe ? new Array(oe - j + 1).join(A) : "";
      switch (G && ne && (M = i(R + M, R.length ? oe - F.length : 1 / 0), R = ""), Q) {
        case "<":
          M = P + M + F + R;
          break;
        case "=":
          M = P + R + M + F;
          break;
        case "^":
          M = R.slice(0, j = R.length >> 1) + P + M + F + R.slice(j);
          break;
        default:
          M = R + P + M + F;
          break;
      }
      return f(M);
    }
    return E.toString = function() {
      return k + "";
    }, E;
  }
  function v(k, S) {
    var A = Math.max(-8, Math.min(8, Math.floor(or(S) / 3))) * 3, Q = Math.pow(10, -A), $ = g((k = Ol(k), k.type = "f", k), { suffix: $d[8 + A / 3] });
    return function(Y) {
      return $(Q * Y);
    };
  }
  return {
    format: g,
    formatPrefix: v
  };
}
var ml, Af, Mf;
$m({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function $m(r) {
  return ml = Fm(r), Af = ml.format, Mf = ml.formatPrefix, ml;
}
function Gm(r) {
  return Math.max(0, -or(Math.abs(r)));
}
function Km(r, i) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(or(i) / 3))) * 3 - or(Math.abs(r)));
}
function Qm(r, i) {
  return r = Math.abs(r), i = Math.abs(i) - r, Math.max(0, or(i) - or(r)) + 1;
}
function jm(r) {
  var i = 0, o = r.children, c = o && o.length;
  if (!c) i = 1;
  else for (; --c >= 0; ) i += o[c].value;
  r.value = i;
}
function Um() {
  return this.eachAfter(jm);
}
function Hm(r, i) {
  let o = -1;
  for (const c of this)
    r.call(i, c, ++o, this);
  return this;
}
function Wm(r, i) {
  for (var o = this, c = [o], u, f, h = -1; o = c.pop(); )
    if (r.call(i, o, ++h, this), u = o.children)
      for (f = u.length - 1; f >= 0; --f)
        c.push(u[f]);
  return this;
}
function Xm(r, i) {
  for (var o = this, c = [o], u = [], f, h, p, m = -1; o = c.pop(); )
    if (u.push(o), f = o.children)
      for (h = 0, p = f.length; h < p; ++h)
        c.push(f[h]);
  for (; o = u.pop(); )
    r.call(i, o, ++m, this);
  return this;
}
function Ym(r, i) {
  let o = -1;
  for (const c of this)
    if (r.call(i, c, ++o, this))
      return c;
}
function qm(r) {
  return this.eachAfter(function(i) {
    for (var o = +r(i.data) || 0, c = i.children, u = c && c.length; --u >= 0; ) o += c[u].value;
    i.value = o;
  });
}
function Zm(r) {
  return this.eachBefore(function(i) {
    i.children && i.children.sort(r);
  });
}
function bm(r) {
  for (var i = this, o = Jm(i, r), c = [i]; i !== o; )
    i = i.parent, c.push(i);
  for (var u = c.length; r !== o; )
    c.splice(u, 0, r), r = r.parent;
  return c;
}
function Jm(r, i) {
  if (r === i) return r;
  var o = r.ancestors(), c = i.ancestors(), u = null;
  for (r = o.pop(), i = c.pop(); r === i; )
    u = r, r = o.pop(), i = c.pop();
  return u;
}
function e1() {
  for (var r = this, i = [r]; r = r.parent; )
    i.push(r);
  return i;
}
function n1() {
  return Array.from(this);
}
function t1() {
  var r = [];
  return this.eachBefore(function(i) {
    i.children || r.push(i);
  }), r;
}
function r1() {
  var r = this, i = [];
  return r.each(function(o) {
    o !== r && i.push({ source: o.parent, target: o });
  }), i;
}
function* i1() {
  var r = this, i, o = [r], c, u, f;
  do
    for (i = o.reverse(), o = []; r = i.pop(); )
      if (yield r, c = r.children)
        for (u = 0, f = c.length; u < f; ++u)
          o.push(c[u]);
  while (o.length);
}
function hs(r, i) {
  r instanceof Map ? (r = [void 0, r], i === void 0 && (i = a1)) : i === void 0 && (i = o1);
  for (var o = new Il(r), c, u = [o], f, h, p, m; c = u.pop(); )
    if ((h = i(c.data)) && (m = (h = Array.from(h)).length))
      for (c.children = h, p = m - 1; p >= 0; --p)
        u.push(f = h[p] = new Il(h[p])), f.parent = c, f.depth = c.depth + 1;
  return o.eachBefore(c1);
}
function l1() {
  return hs(this).eachBefore(s1);
}
function o1(r) {
  return r.children;
}
function a1(r) {
  return Array.isArray(r) ? r[1] : null;
}
function s1(r) {
  r.data.value !== void 0 && (r.value = r.data.value), r.data = r.data.data;
}
function c1(r) {
  var i = 0;
  do
    r.height = i;
  while ((r = r.parent) && r.height < ++i);
}
function Il(r) {
  this.data = r, this.depth = this.height = 0, this.parent = null;
}
Il.prototype = hs.prototype = {
  constructor: Il,
  count: Um,
  each: Hm,
  eachAfter: Xm,
  eachBefore: Wm,
  find: Ym,
  sum: qm,
  sort: Zm,
  path: bm,
  ancestors: e1,
  descendants: n1,
  leaves: t1,
  links: r1,
  copy: l1,
  [Symbol.iterator]: i1
};
function u1(r) {
  r.x0 = Math.round(r.x0), r.y0 = Math.round(r.y0), r.x1 = Math.round(r.x1), r.y1 = Math.round(r.y1);
}
function d1(r, i, o, c, u) {
  for (var f = r.children, h, p = -1, m = f.length, g = r.value && (c - i) / r.value; ++p < m; )
    h = f[p], h.y0 = o, h.y1 = u, h.x0 = i, h.x1 = i += h.value * g;
}
function f1() {
  var r = 1, i = 1, o = 0, c = !1;
  function u(h) {
    var p = h.height + 1;
    return h.x0 = h.y0 = o, h.x1 = r, h.y1 = i / p, h.eachBefore(f(i, p)), c && h.eachBefore(u1), h;
  }
  function f(h, p) {
    return function(m) {
      m.children && d1(m, m.x0, h * (m.depth + 1) / p, m.x1, h * (m.depth + 2) / p);
      var g = m.x0, v = m.y0, k = m.x1 - o, S = m.y1 - o;
      k < g && (g = k = (g + k) / 2), S < v && (v = S = (v + S) / 2), m.x0 = g, m.y0 = v, m.x1 = k, m.y1 = S;
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
function ps(r, i) {
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
const Gd = Symbol("implicit");
function Vf() {
  var r = new yd(), i = [], o = [], c = Gd;
  function u(f) {
    let h = r.get(f);
    if (h === void 0) {
      if (c !== Gd) return c;
      r.set(f, h = i.push(f) - 1);
    }
    return o[h % o.length];
  }
  return u.domain = function(f) {
    if (!arguments.length) return i.slice();
    i = [], r = new yd();
    for (const h of f)
      r.has(h) || r.set(h, i.push(h) - 1);
    return u;
  }, u.range = function(f) {
    return arguments.length ? (o = Array.from(f), u) : o.slice();
  }, u.unknown = function(f) {
    return arguments.length ? (c = f, u) : c;
  }, u.copy = function() {
    return Vf(i, o).unknown(c);
  }, ps.apply(u, arguments), u;
}
function h1(r) {
  return function() {
    return r;
  };
}
function p1(r) {
  return +r;
}
var Kd = [0, 1];
function An(r) {
  return r;
}
function ts(r, i) {
  return (i -= r = +r) ? function(o) {
    return (o - r) / i;
  } : h1(isNaN(i) ? NaN : 0.5);
}
function g1(r, i) {
  var o;
  return r > i && (o = r, r = i, i = o), function(c) {
    return Math.max(r, Math.min(i, c));
  };
}
function m1(r, i, o) {
  var c = r[0], u = r[1], f = i[0], h = i[1];
  return u < c ? (c = ts(u, c), f = o(h, f)) : (c = ts(c, u), f = o(f, h)), function(p) {
    return f(c(p));
  };
}
function N1(r, i, o) {
  var c = Math.min(r.length, i.length) - 1, u = new Array(c), f = new Array(c), h = -1;
  for (r[c] < r[0] && (r = r.slice().reverse(), i = i.slice().reverse()); ++h < c; )
    u[h] = ts(r[h], r[h + 1]), f[h] = o(i[h], i[h + 1]);
  return function(p) {
    var m = n0(r, p, 1, c) - 1;
    return f[m](u[m](p));
  };
}
function Pf(r, i) {
  return i.domain(r.domain()).range(r.range()).interpolate(r.interpolate()).clamp(r.clamp()).unknown(r.unknown());
}
function zf() {
  var r = Kd, i = Kd, o = ss, c, u, f, h = An, p, m, g;
  function v() {
    var S = Math.min(r.length, i.length);
    return h !== An && (h = g1(r[0], r[S - 1])), p = S > 2 ? N1 : m1, m = g = null, k;
  }
  function k(S) {
    return S == null || isNaN(S = +S) ? f : (m || (m = p(r.map(c), i, o)))(c(h(S)));
  }
  return k.invert = function(S) {
    return h(u((g || (g = p(i, r.map(c), yn)))(S)));
  }, k.domain = function(S) {
    return arguments.length ? (r = Array.from(S, p1), v()) : r.slice();
  }, k.range = function(S) {
    return arguments.length ? (i = Array.from(S), v()) : i.slice();
  }, k.rangeRound = function(S) {
    return i = Array.from(S), o = h4, v();
  }, k.clamp = function(S) {
    return arguments.length ? (h = S ? !0 : An, v()) : h !== An;
  }, k.interpolate = function(S) {
    return arguments.length ? (o = S, v()) : o;
  }, k.unknown = function(S) {
    return arguments.length ? (f = S, k) : f;
  }, function(S, A) {
    return c = S, u = A, v();
  };
}
function v1() {
  return zf()(An, An);
}
function y1(r, i, o, c) {
  var u = c0(r, i, o), f;
  switch (c = Ol(c ?? ",f"), c.type) {
    case "s": {
      var h = Math.max(Math.abs(r), Math.abs(i));
      return c.precision == null && !isNaN(f = Km(u, h)) && (c.precision = f), Mf(c, h);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      c.precision == null && !isNaN(f = Qm(u, Math.max(Math.abs(r), Math.abs(i)))) && (c.precision = f - (c.type === "e"));
      break;
    }
    case "f":
    case "%": {
      c.precision == null && !isNaN(f = Gm(u)) && (c.precision = f - (c.type === "%") * 2);
      break;
    }
  }
  return Af(c);
}
function Of(r) {
  var i = r.domain;
  return r.ticks = function(o) {
    var c = i();
    return s0(c[0], c[c.length - 1], o ?? 10);
  }, r.tickFormat = function(o, c) {
    var u = i();
    return y1(u[0], u[u.length - 1], o ?? 10, c);
  }, r.nice = function(o) {
    o == null && (o = 10);
    var c = i(), u = 0, f = c.length - 1, h = c[u], p = c[f], m, g, v = 10;
    for (p < h && (g = h, h = p, p = g, g = u, u = f, f = g); v-- > 0; ) {
      if (g = Ha(h, p, o), g === m)
        return c[u] = h, c[f] = p, i(c);
      if (g > 0)
        h = Math.floor(h / g) * g, p = Math.ceil(p / g) * g;
      else if (g < 0)
        h = Math.ceil(h * g) / g, p = Math.floor(p * g) / g;
      else
        break;
      m = g;
    }
    return r;
  }, r;
}
function Tf() {
  var r = v1();
  return r.copy = function() {
    return Pf(r, Tf());
  }, ps.apply(r, arguments), Of(r);
}
function Qd(r) {
  return function(i) {
    return i < 0 ? -Math.pow(-i, r) : Math.pow(i, r);
  };
}
function x1(r) {
  return r < 0 ? -Math.sqrt(-r) : Math.sqrt(r);
}
function w1(r) {
  return r < 0 ? -r * r : r * r;
}
function S1(r) {
  var i = r(An, An), o = 1;
  function c() {
    return o === 1 ? r(An, An) : o === 0.5 ? r(x1, w1) : r(Qd(o), Qd(1 / o));
  }
  return i.exponent = function(u) {
    return arguments.length ? (o = +u, c()) : o;
  }, Of(i);
}
function If() {
  var r = S1(zf());
  return r.copy = function() {
    return Pf(r, If()).exponent(r.exponent());
  }, ps.apply(r, arguments), r;
}
function k1() {
  return If.apply(null, arguments).exponent(0.5);
}
function Rf(r) {
  for (var i = r.length / 6 | 0, o = new Array(i), c = 0; c < i; ) o[c] = "#" + r.slice(c * 6, ++c * 6);
  return o;
}
const _1 = Rf("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), D1 = Rf("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function ct(r) {
  return function() {
    return r;
  };
}
const jd = Math.abs, je = Math.atan2, _t = Math.cos, B1 = Math.max, Qa = Math.min, En = Math.sin, tr = Math.sqrt, Je = 1e-12, ei = Math.PI, Rl = ei / 2, C1 = 2 * ei;
function E1(r) {
  return r > 1 ? 0 : r < -1 ? ei : Math.acos(r);
}
function Ud(r) {
  return r >= 1 ? Rl : r <= -1 ? -Rl : Math.asin(r);
}
function A1(r) {
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
  }, () => new Pm(i);
}
function M1(r) {
  return r.innerRadius;
}
function V1(r) {
  return r.outerRadius;
}
function P1(r) {
  return r.startAngle;
}
function z1(r) {
  return r.endAngle;
}
function O1(r) {
  return r && r.padAngle;
}
function T1(r, i, o, c, u, f, h, p) {
  var m = o - r, g = c - i, v = h - u, k = p - f, S = k * m - v * g;
  if (!(S * S < Je))
    return S = (v * (i - f) - k * (r - u)) / S, [r + S * m, i + S * g];
}
function Nl(r, i, o, c, u, f, h) {
  var p = r - o, m = i - c, g = (h ? f : -f) / tr(p * p + m * m), v = g * m, k = -g * p, S = r + v, A = i + k, Q = o + v, $ = c + k, Y = (S + Q) / 2, ne = (A + $) / 2, oe = Q - S, G = $ - A, Z = oe * oe + G * G, ue = u - f, ae = S * $ - Q * A, I = (G < 0 ? -1 : 1) * tr(B1(0, ue * ue * Z - ae * ae)), q = (ae * G - oe * I) / Z, ce = (-ae * oe - G * I) / Z, pe = (ae * G + oe * I) / Z, E = (-ae * oe + G * I) / Z, M = q - Y, P = ce - ne, F = pe - Y, de = E - ne;
  return M * M + P * P > F * F + de * de && (q = pe, ce = E), {
    cx: q,
    cy: ce,
    x01: -v,
    y01: -k,
    x11: q * (u / ue - 1),
    y11: ce * (u / ue - 1)
  };
}
function I1() {
  var r = M1, i = V1, o = ct(0), c = null, u = P1, f = z1, h = O1, p = null, m = A1(g);
  function g() {
    var v, k, S = +r.apply(this, arguments), A = +i.apply(this, arguments), Q = u.apply(this, arguments) - Rl, $ = f.apply(this, arguments) - Rl, Y = jd($ - Q), ne = $ > Q;
    if (p || (p = v = m()), A < S && (k = A, A = S, S = k), !(A > Je)) p.moveTo(0, 0);
    else if (Y > C1 - Je)
      p.moveTo(A * _t(Q), A * En(Q)), p.arc(0, 0, A, Q, $, !ne), S > Je && (p.moveTo(S * _t($), S * En($)), p.arc(0, 0, S, $, Q, ne));
    else {
      var oe = Q, G = $, Z = Q, ue = $, ae = Y, I = Y, q = h.apply(this, arguments) / 2, ce = q > Je && (c ? +c.apply(this, arguments) : tr(S * S + A * A)), pe = Qa(jd(A - S) / 2, +o.apply(this, arguments)), E = pe, M = pe, P, F;
      if (ce > Je) {
        var de = Ud(ce / S * En(q)), ge = Ud(ce / A * En(q));
        (ae -= de * 2) > Je ? (de *= ne ? 1 : -1, Z += de, ue -= de) : (ae = 0, Z = ue = (Q + $) / 2), (I -= ge * 2) > Je ? (ge *= ne ? 1 : -1, oe += ge, G -= ge) : (I = 0, oe = G = (Q + $) / 2);
      }
      var se = A * _t(oe), T = A * En(oe), j = S * _t(ue), R = S * En(ue);
      if (pe > Je) {
        var w = A * _t(G), C = A * En(G), ie = S * _t(Z), le = S * En(Z), te;
        if (Y < ei)
          if (te = T1(se, T, ie, le, w, C, j, R)) {
            var fe = se - te[0], ye = T - te[1], me = w - te[0], we = C - te[1], Fe = 1 / En(E1((fe * me + ye * we) / (tr(fe * fe + ye * ye) * tr(me * me + we * we))) / 2), ut = tr(te[0] * te[0] + te[1] * te[1]);
            E = Qa(pe, (S - ut) / (Fe - 1)), M = Qa(pe, (A - ut) / (Fe + 1));
          } else
            E = M = 0;
      }
      I > Je ? M > Je ? (P = Nl(ie, le, se, T, A, M, ne), F = Nl(w, C, j, R, A, M, ne), p.moveTo(P.cx + P.x01, P.cy + P.y01), M < pe ? p.arc(P.cx, P.cy, M, je(P.y01, P.x01), je(F.y01, F.x01), !ne) : (p.arc(P.cx, P.cy, M, je(P.y01, P.x01), je(P.y11, P.x11), !ne), p.arc(0, 0, A, je(P.cy + P.y11, P.cx + P.x11), je(F.cy + F.y11, F.cx + F.x11), !ne), p.arc(F.cx, F.cy, M, je(F.y11, F.x11), je(F.y01, F.x01), !ne))) : (p.moveTo(se, T), p.arc(0, 0, A, oe, G, !ne)) : p.moveTo(se, T), !(S > Je) || !(ae > Je) ? p.lineTo(j, R) : E > Je ? (P = Nl(j, R, w, C, S, -E, ne), F = Nl(se, T, ie, le, S, -E, ne), p.lineTo(P.cx + P.x01, P.cy + P.y01), E < pe ? p.arc(P.cx, P.cy, E, je(P.y01, P.x01), je(F.y01, F.x01), !ne) : (p.arc(P.cx, P.cy, E, je(P.y01, P.x01), je(P.y11, P.x11), !ne), p.arc(0, 0, S, je(P.cy + P.y11, P.cx + P.x11), je(F.cy + F.y11, F.cx + F.x11), ne), p.arc(F.cx, F.cy, E, je(F.y11, F.x11), je(F.y01, F.x01), !ne))) : p.arc(0, 0, S, ue, Z, ne);
    }
    if (p.closePath(), v) return p = null, v + "" || null;
  }
  return g.centroid = function() {
    var v = (+r.apply(this, arguments) + +i.apply(this, arguments)) / 2, k = (+u.apply(this, arguments) + +f.apply(this, arguments)) / 2 - ei / 2;
    return [_t(k) * v, En(k) * v];
  }, g.innerRadius = function(v) {
    return arguments.length ? (r = typeof v == "function" ? v : ct(+v), g) : r;
  }, g.outerRadius = function(v) {
    return arguments.length ? (i = typeof v == "function" ? v : ct(+v), g) : i;
  }, g.cornerRadius = function(v) {
    return arguments.length ? (o = typeof v == "function" ? v : ct(+v), g) : o;
  }, g.padRadius = function(v) {
    return arguments.length ? (c = v == null ? null : typeof v == "function" ? v : ct(+v), g) : c;
  }, g.startAngle = function(v) {
    return arguments.length ? (u = typeof v == "function" ? v : ct(+v), g) : u;
  }, g.endAngle = function(v) {
    return arguments.length ? (f = typeof v == "function" ? v : ct(+v), g) : f;
  }, g.padAngle = function(v) {
    return arguments.length ? (h = typeof v == "function" ? v : ct(+v), g) : h;
  }, g.context = function(v) {
    return arguments.length ? (p = v ?? null, g) : p;
  }, g;
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
const Hd = 0.68, Wd = 0.6, Gn = 11, R1 = 5.5, kl = 13, Lf = 14, L1 = 20, F1 = 2e-3, $1 = Lf + kl * 1.6, Ff = (r) => r * 180 / Math.PI;
function Xd(r, i, o) {
  const c = (i + o) / 2, u = c > Math.PI / 2 && c < 3 * Math.PI / 2, [f, h] = u ? [o, i] : [i, o], p = o - i > Math.PI ? 1 : 0, m = (g) => `${r * Math.sin(g)},${-r * Math.cos(g)}`;
  return `M${m(f)}A${r},${r} 0 ${p} ${u ? 0 : 1} ${m(h)}`;
}
function G1(r, i) {
  const o = r > Math.PI;
  return `rotate(${Ff(r) - 90}) translate(${i},0)${o ? " rotate(180)" : ""}`;
}
function K1(r, i) {
  const o = r > Math.PI / 2 && r < 3 * Math.PI / 2, c = i * Math.sin(r), u = -i * Math.cos(r);
  return `translate(${c},${u}) rotate(${Ff(r) - (o ? 180 : 0)})`;
}
function Q1(r) {
  const i = r.map((o) => o.want);
  for (let o = 0; o < 300; o++) {
    let c = !1;
    for (let f = 0; f + 1 < i.length; f++) {
      const h = r[f].half + r[f + 1].half, p = i[f + 1] - i[f];
      if (p < h) {
        const m = (h - p) / 2;
        i[f] -= m, i[f + 1] += m, c = !0;
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
function j1({
  nodes: r,
  width: i,
  labels: o,
  r: c,
  ringGap: u,
  colorOf: f,
  tintOf: h,
  nameOf: p,
  idPrefix: m
}) {
  const g = (I) => {
    const q = c(I.y0), ce = c(Math.max(I.y0, I.y1 - u));
    return { r0: q, r1: ce, rMid: (q + ce) / 2 };
  }, v = o !== "san", k = o !== "names", S = i / 75, A = r.filter((I) => p(I) && !I.ancestors().slice(1).some((q) => p(q) === p(I))), Q = v ? A.flatMap((I) => {
    const q = qd(p(I)), { r0: ce, r1: pe, rMid: E } = g(I), M = pe - ce, P = I.x1 - I.x0, F = (j) => 0.9 * j * P / (q.length * Hd), de = Math.min(18, 0.5 * M, F(E));
    if (de < S) return [];
    let ge = de, se = E, T;
    if (k) {
      const j = (I.x0 + I.x1) / 2, R = j > Math.PI / 2 && j < 3 * Math.PI / 2 ? -1 : 1, w = 0.45 * (M - Gn), C = Math.min(18, w, F(E));
      if (C >= R1) {
        const ie = (C + Gn) / 4 + 1, le = E - R * ie, te = E + R * ie, fe = I.data.san.length * Wd * Gn;
        le - C / 2 >= ce && le + C / 2 <= pe && te - Gn / 2 >= ce && te + Gn / 2 <= pe && fe <= 0.9 * te * P && (ge = C, se = le, T = Xd(te, I.x0, I.x1));
      }
    }
    return [{ d: I, text: q, fontSize: ge, path: Xd(se, I.x0, I.x1), sanPath: T }];
  }) : [], $ = new Set(Q.map((I) => I.d)), Y = new Set(Q.map((I) => I.text)), ne = k ? r.flatMap((I) => {
    if ($.has(I)) return [];
    const q = g(I), ce = q.rMid * (I.x1 - I.x0), pe = q.r1 - q.r0;
    return ce < Gn * 1.15 ? [] : pe < I.data.san.length * Wd * Gn + 6 ? [] : [{ d: I, a: (I.x0 + I.x1) / 2, rMid: q.rMid }];
  }) : [], oe = r.length ? r[0].ancestors().pop().value ?? 0 : 0, G = new Set(Y), Z = i / 2 + Lf, ue = v ? [...A].filter((I) => !$.has(I) && (I.value ?? 0) >= oe * F1).sort((I, q) => (q.value ?? 0) - (I.value ?? 0) || I.x0 - q.x0).flatMap((I) => {
    const q = qd(p(I));
    return G.has(q) ? [] : (G.add(q), [{ d: I, text: q }]);
  }).slice(0, L1).map(({ d: I, text: q }) => ({
    d: I,
    text: q,
    want: (I.x0 + I.x1) / 2,
    half: q.length * Hd * kl / 2 / Z + 0.012
  })).sort((I, q) => I.want - q.want) : [], ae = Q1(ue);
  return /* @__PURE__ */ b.jsxs("g", { pointerEvents: "none", children: [
    Q.map(({ d: I, text: q, fontSize: ce, path: pe, sanPath: E }, M) => {
      const P = `${m}-pname-${M}`, F = `${m}-psan-${M}`;
      return /* @__PURE__ */ b.jsxs("g", { children: [
        /* @__PURE__ */ b.jsx("path", { id: P, d: pe, fill: "none" }),
        E && /* @__PURE__ */ b.jsx("path", { id: F, d: E, fill: "none" }),
        /* @__PURE__ */ b.jsx(
          "text",
          {
            fontSize: ce,
            fontFamily: "'Avenir Next Condensed', 'Arial Narrow', sans-serif",
            fontWeight: 500,
            letterSpacing: "0.06em",
            fill: f(I).darker(0.55).toString(),
            opacity: 0.85,
            dominantBaseline: "central",
            textAnchor: "middle",
            children: /* @__PURE__ */ b.jsx("textPath", { href: `#${P}`, startOffset: "50%", children: q })
          }
        ),
        E && /* @__PURE__ */ b.jsx(
          "text",
          {
            fontSize: Gn,
            fontFamily: "'Gill Sans', 'Avenir Next', sans-serif",
            fill: "#f6f3ee",
            opacity: 0.85,
            dominantBaseline: "central",
            textAnchor: "middle",
            children: /* @__PURE__ */ b.jsx("textPath", { href: `#${F}`, startOffset: "50%", children: I.data.san })
          }
        )
      ] }, P);
    }),
    ne.map(({ d: I, a: q, rMid: ce }) => /* @__PURE__ */ b.jsx(
      "text",
      {
        transform: G1(q, ce),
        fontSize: Gn,
        fontFamily: "'Gill Sans', 'Avenir Next', sans-serif",
        fill: "#f6f3ee",
        opacity: 0.85,
        textAnchor: "middle",
        dominantBaseline: "central",
        children: I.data.san
      },
      `san-${Yd(I)}`
    )),
    ue.map(({ d: I, text: q }, ce) => {
      const pe = ae[ce], { rMid: E } = g(I), M = (I.x0 + I.x1) / 2, P = [E * Math.sin(M), -E * Math.cos(M)], F = [(Z - 3) * Math.sin(pe), -(Z - 3) * Math.cos(pe)];
      return /* @__PURE__ */ b.jsxs("g", { children: [
        /* @__PURE__ */ b.jsx(
          "line",
          {
            x1: P[0],
            y1: P[1],
            x2: F[0],
            y2: F[1],
            stroke: "#888",
            strokeOpacity: 0.6,
            strokeWidth: 0.6
          }
        ),
        /* @__PURE__ */ b.jsx("circle", { cx: P[0], cy: P[1], r: 1.6, fill: h(I) }),
        /* @__PURE__ */ b.jsx(
          "text",
          {
            transform: K1(pe, Z + kl * 0.6),
            fontSize: kl,
            fontFamily: "'Avenir Next Condensed', 'Arial Narrow', sans-serif",
            letterSpacing: "0.04em",
            fill: h(I),
            opacity: 0.9,
            textAnchor: "middle",
            dominantBaseline: "central",
            children: q
          }
        )
      ] }, `callout-${Yd(I)}`);
    })
  ] });
}
function Yd(r) {
  return r.ancestors().map((i) => i.data.san).join(" ");
}
function qd(r) {
  let i = r.replace("Opening", "").trim();
  const o = i.indexOf(": ");
  return o >= 0 && (i = i.slice(o + 2)), i.toUpperCase();
}
const U1 = "B00 - King's Pawn", H1 = "A40 - Queen's Pawn Game", W1 = "A10 - English Opening", X1 = "A04 - Zukertort Opening", Y1 = "A01 - Nimzo-Larsen Attack", q1 = "A02 - Bird Opening", Z1 = "A00 - Van Geet Opening", b1 = "A00 - Polish Opening", J1 = "A00 - Hungarian Opening", e3 = {
  e4: U1,
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
  d4: H1,
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
  c4: W1,
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
  Nf3: X1,
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
  b3: Y1,
  "b3 e5": "A01 - Nimzo-Larsen Attack: Modern Variation",
  "b3 e5 Bb2": "A01 - Nimzo-Larsen Attack: Modern Variation",
  "b3 e5 Bb2 Nc6": "A01 - Nimzo-Larsen Attack: Modern Variation",
  f4: q1,
  "f4 d5": "A03 - Bird Opening: Dutch Variation",
  Nc3: Z1,
  b4: b1,
  g3: J1,
  "g3 g6": "A00 - Hungarian Opening: Symmetrical Variation",
  "g3 Nf6": "A00 - Hungarian Opening: Indian Defense"
}, $f = {
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
function n3(r, i, o, c, u) {
  let f = $f[r];
  if (f || (c.has(r) || c.set(r, c.size), f = Ll[c.get(r) % Ll.length]), u) return El(f[1]);
  const h = i % 2 === 1 ? f[0] : f[1];
  return El(h).darker(Math.floor((i - 1) / 2) * o);
}
const t3 = [
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
function r3(r, i) {
  return ($f[r] ?? Ll[(i.get(r) ?? 0) % Ll.length])[0];
}
const i3 = e3;
function ja(r) {
  const i = r.ancestors().reverse().slice(1).map((c) => c.data.san).join(" "), o = i3[i];
  return o ? o.replace(/^[A-E]\d\d - /, "") : void 0;
}
function l3(r) {
  let i = r.replace("Opening", "").trim();
  const o = i.indexOf(": ");
  return o >= 0 && (i = i.slice(o + 2)), i.toUpperCase();
}
function o3(r, i, o) {
  const c = (i + o) / 2, u = c > Math.PI / 2 && c < 3 * Math.PI / 2, [f, h] = u ? [o, i] : [i, o], p = o - i > Math.PI ? 1 : 0, m = (g) => `${r * Math.sin(g)},${-r * Math.cos(g)}`;
  return `M${m(f)}A${r},${r} 0 ${p} ${u ? 0 : 1} ${m(h)}`;
}
const a3 = 0.68, s3 = "0.06em";
function c3(r) {
  switch (r.stroke) {
    case "white":
      return { stroke: "#fff", width: r.strokeWidth ?? 0.5, paintOrder: "normal" };
    case "black-hairline":
      return { stroke: "#000", width: r.strokeWidth ?? 0.1, paintOrder: "stroke" };
    default:
      return { stroke: "none", width: 0, paintOrder: "stroke" };
  }
}
function Ua(r) {
  let i = r;
  for (; i.depth > 1 && i.parent; ) i = i.parent;
  return i;
}
function vl({ data: r, knobs: i, crop: o, highlight: c, className: u, dataset: f }) {
  const { width: h, hole: p } = i, m = Kn.useMemo(() => {
    const E = hs(r, (M) => M.children);
    return i.sum === "leaves" ? E.sum((M) => M.children.length ? 0 : M.count) : E.eachAfter((M) => {
      M.value = M.data.count;
    }), i.sort && i.sortHeight === !1 ? E.sort((M, P) => (P.value ?? 0) - (M.value ?? 0)) : i.sort ? E.sort((M, P) => P.height - M.height || (P.value ?? 0) - (M.value ?? 0)) : E.sort(() => 0), f1().size([2 * Math.PI, h / 2 - p])(E);
  }, [r, i.sum, i.sort, i.sortHeight, h, p]), g = Kn.useMemo(() => {
    const E = [0, h / 2], M = [0, h / 2];
    if (i.radius === "square") {
      const F = h / 2;
      return (de) => de * de / F;
    }
    const P = i.radius === "sqrt" ? k1(E, M) : Tf(E, M);
    return (F) => P(F);
  }, [i.radius, h]), v = /* @__PURE__ */ new Map(), k = Kn.useMemo(() => {
    const E = Vf(
      i.palette === "tableau10" ? D1 : i.palette === "category20-move" ? t3 : _1
    );
    if (f === "sample-2015") {
      const M = i.thresholdUnit === "fraction" ? i.nodeThreshold * 2 * Math.PI : i.nodeThreshold, P = [];
      for (const F of m.descendants())
        F.x1 - F.x0 <= M || P.includes(F.data.san) || P.push(F.data.san);
      E.domain(P);
    }
    return E;
  }, [i.palette, i.thresholdUnit, i.nodeThreshold, f, m]), S = Kn.useMemo(
    () => I1().startAngle((E) => E.x0).endAngle((E) => E.x1).padAngle(
      (E) => i.padAngle ? Math.min((E.x1 - E.x0) / 2, i.padAngle) : 0
    ).padRadius(h / 4).innerRadius((E) => g(E.y0)).outerRadius((E) => g(Math.max(E.y0, E.y1 - i.ringGap))),
    [i.padAngle, i.ringGap, g, h]
  );
  function A(E) {
    const M = i.shading === "flat", P = i.palette === "category20-move" ? E.data.san : Ua(E).data.san;
    if (i.palette === "poster")
      return n3(P, E.depth, i.depthFade, v, M);
    let F = El(k(P)).brighter(i.brighten ?? 0.2);
    return M || (F = E.depth % 2 === 0 ? F.darker(0.5) : F.brighter(0.5)), F.darker(E.depth * i.depthFade);
  }
  const Q = m.descendants().filter((E) => {
    if (!E.depth) return !1;
    const M = E.x1 - E.x0, P = i.thresholdUnit === "fraction" ? i.nodeThreshold * 2 * Math.PI : i.nodeThreshold;
    return M > P;
  }), $ = i.labels ?? "san", Y = Kn.useId(), ne = i.posterLabels === !0, oe = ne || $ === "san" ? [] : Q.flatMap((E) => {
    const M = ja(E);
    if (!M) return [];
    if (E.ancestors().slice(1).some((w) => ja(w) === M)) return [];
    const F = l3(M), de = g(E.y0), ge = g(Math.max(E.y0, E.y1 - i.ringGap)), se = (de + ge) / 2, j = 0.85 * (se * (E.x1 - E.x0)) / (F.length * a3), R = Math.min(16, 0.55 * (ge - de), j);
    return R < h / 75 ? [] : [{ d: E, text: F, fontSize: R, path: o3(se, E.x0, E.x1) }];
  }), G = new Set(oe.map((E) => E.d)), Z = f === "sample-2015", ue = !ne && i.showSan && $ !== "names" ? Q.filter((E) => {
    if (G.has(E)) return !1;
    const M = E.x1 - E.x0;
    if (Z) return M * 90 / Math.PI >= 10;
    const P = i.thresholdUnit === "fraction" ? i.sanThreshold * 2 * Math.PI : i.sanThreshold;
    return M > P;
  }) : [], ae = g(m.y1), I = c3(i), q = ne && $ !== "san" ? $1 : 0, ce = h / 2 + q, pe = o ? `${o.x} ${o.y} ${o.size} ${o.size}` : `${-ce} ${-ce} ${2 * ce} ${2 * ce}`;
  return /* @__PURE__ */ b.jsxs(
    "svg",
    {
      viewBox: pe,
      role: "img",
      className: u ?? "openings-sunburst",
      children: [
        /* @__PURE__ */ b.jsxs("g", { children: [
          Q.map((E) => {
            const M = A(E), P = E.ancestors().map((F) => F.data.san).join(" ");
            return /* @__PURE__ */ b.jsx(
              "path",
              {
                d: S(E) ?? void 0,
                fill: M.toString(),
                stroke: I.stroke,
                strokeWidth: I.width,
                paintOrder: I.paintOrder
              },
              P
            );
          }),
          oe.map(({ d: E, text: M, fontSize: P, path: F }, de) => {
            const ge = `${Y}-name-${de}`;
            return /* @__PURE__ */ b.jsxs("g", { children: [
              /* @__PURE__ */ b.jsx("path", { id: ge, d: F, fill: "none" }),
              /* @__PURE__ */ b.jsx(
                "text",
                {
                  fontSize: P,
                  fontFamily: "sans-serif",
                  letterSpacing: s3,
                  fill: A(E).darker(0.7).toString(),
                  opacity: 0.7,
                  dominantBaseline: "central",
                  textAnchor: "middle",
                  children: /* @__PURE__ */ b.jsx("textPath", { href: `#${ge}`, startOffset: "50%", children: M })
                }
              )
            ] }, ge);
          }),
          ue.map((E) => {
            const M = E.ancestors().map((T) => T.data.san).join(" "), P = i.sanSize ?? (i.width < 600 ? 10 : 12), F = i.sanColor ?? "white";
            if (Z) {
              const T = g(E.y0), j = g(Math.max(E.y0, E.y1 - i.ringGap)), R = (T + j) / 2, w = (E.x0 + E.x1) / 2 - Math.PI / 2;
              return /* @__PURE__ */ b.jsx(
                "text",
                {
                  textAnchor: "middle",
                  fontSize: P,
                  fontFamily: "sans-serif",
                  fill: F,
                  transform: `translate(${Math.cos(w) * R},${Math.sin(w) * R})`,
                  children: E.data.san
                },
                M
              );
            }
            const de = (E.x0 + E.x1) / 2 * 180 / Math.PI, ge = g((E.y0 + E.y1) / 2), se = de - 90;
            return /* @__PURE__ */ b.jsx(
              "text",
              {
                textAnchor: "middle",
                fontSize: P,
                fontFamily: "sans-serif",
                fill: F,
                transform: `rotate(${se}) translate(${ge},0) rotate(${-se})`,
                dy: "0.35em",
                children: E.data.san
              },
              M
            );
          })
        ] }),
        ne && /* @__PURE__ */ b.jsx(
          j1,
          {
            nodes: Q,
            width: h,
            labels: $,
            r: g,
            ringGap: i.ringGap,
            colorOf: A,
            tintOf: (E) => i.palette === "poster" ? r3(Ua(E).data.san, v) : A(Ua(E)).brighter(0.5).toString(),
            nameOf: ja,
            idPrefix: Y
          }
        ),
        i.center === "board-disk" && ae > 0 && /* @__PURE__ */ b.jsx(u3, { size: ae * 1.6 }),
        c && /* @__PURE__ */ b.jsx(
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
function u3({ size: r }) {
  const i = r / 8;
  return /* @__PURE__ */ b.jsx("g", { transform: `translate(${-r / 2},${-r / 2})`, pointerEvents: "none", children: Array.from({ length: 64 }, (o, c) => {
    const u = Math.floor(c / 8), f = c % 8;
    return /* @__PURE__ */ b.jsx(
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
const d3 = 2197113, f3 = "start", h3 = /* @__PURE__ */ JSON.parse('[{"count":1051522,"san":"e4","children":[{"count":76139,"san":"c6","children":[{"count":61565,"san":"d4","children":[{"count":59388,"san":"d5","children":[{"count":18428,"san":"Nc3","children":[{"count":17125,"san":"dxe4","children":[{"count":16947,"san":"Nxe4","children":[{"count":4655,"san":"Nd7","children":[]},{"count":8734,"san":"Bf5","children":[{"count":8288,"san":"Ng3","children":[{"count":8258,"san":"Bg6","children":[]}]}]},{"count":3439,"san":"Nf6","children":[{"count":2926,"san":"Nxf6+","children":[]}]}]}]}]},{"count":15596,"san":"exd5","children":[{"count":15489,"san":"cxd5","children":[{"count":9801,"san":"c4","children":[{"count":9213,"san":"Nf6","children":[{"count":8908,"san":"Nc3","children":[{"count":4807,"san":"e6","children":[]},{"count":2347,"san":"Nc6","children":[]}]}]}]},{"count":4527,"san":"Bd3","children":[{"count":3578,"san":"Nc6","children":[{"count":3427,"san":"c3","children":[]}]}]}]}]},{"count":14661,"san":"e5","children":[{"count":12384,"san":"Bf5","children":[{"count":2831,"san":"Nc3","children":[]},{"count":4227,"san":"Nf3","children":[{"count":4174,"san":"e6","children":[{"count":3614,"san":"Be2","children":[]}]}]}]}]},{"count":8683,"san":"Nd2","children":[{"count":8068,"san":"dxe4","children":[{"count":8068,"san":"Nxe4","children":[{"count":3901,"san":"Bf5","children":[{"count":3653,"san":"Ng3","children":[{"count":3645,"san":"Bg6","children":[]}]}]},{"count":2568,"san":"Nd7","children":[]}]}]}]}]}]},{"count":5057,"san":"Nc3","children":[{"count":4851,"san":"d5","children":[{"count":3437,"san":"Nf3","children":[]}]}]},{"count":2679,"san":"d3","children":[{"count":2342,"san":"d5","children":[{"count":2235,"san":"Nd2","children":[]}]}]},{"count":4019,"san":"c4","children":[{"count":3112,"san":"d5","children":[]}]}]},{"count":26044,"san":"Nf6","children":[{"count":20284,"san":"e5","children":[{"count":20075,"san":"Nd5","children":[{"count":2846,"san":"c4","children":[{"count":2833,"san":"Nb6","children":[]}]},{"count":15585,"san":"d4","children":[{"count":15304,"san":"d6","children":[{"count":9446,"san":"Nf3","children":[{"count":4140,"san":"Bg4","children":[{"count":3800,"san":"Be2","children":[]}]},{"count":2308,"san":"g6","children":[]}]},{"count":4660,"san":"c4","children":[{"count":4655,"san":"Nb6","children":[{"count":2906,"san":"exd6","children":[]}]}]}]}]}]}]},{"count":4895,"san":"Nc3","children":[{"count":3452,"san":"d5","children":[]}]}]},{"count":32751,"san":"g6","children":[{"count":30215,"san":"d4","children":[{"count":26550,"san":"Bg7","children":[{"count":16645,"san":"Nc3","children":[{"count":10447,"san":"d6","children":[{"count":3607,"san":"Be3","children":[]},{"count":3208,"san":"f4","children":[]}]},{"count":4892,"san":"c6","children":[]}]},{"count":5031,"san":"Nf3","children":[{"count":3971,"san":"d6","children":[]}]}]}]}]},{"count":141803,"san":"e6","children":[{"count":121855,"san":"d4","children":[{"count":119291,"san":"d5","children":[{"count":16546,"san":"e5","children":[{"count":15692,"san":"c5","children":[{"count":13956,"san":"c3","children":[{"count":2927,"san":"Qb6","children":[{"count":2687,"san":"Nf3","children":[]}]},{"count":10267,"san":"Nc6","children":[{"count":9667,"san":"Nf3","children":[{"count":5009,"san":"Qb6","children":[]},{"count":3301,"san":"Bd7","children":[]}]}]}]}]}]},{"count":36966,"san":"Nd2","children":[{"count":10841,"san":"c5","children":[{"count":6523,"san":"exd5","children":[{"count":2996,"san":"Qxd5","children":[{"count":2656,"san":"Ngf3","children":[{"count":2520,"san":"cxd4","children":[]}]}]},{"count":3507,"san":"exd5","children":[{"count":2225,"san":"Ngf3","children":[]}]}]},{"count":3750,"san":"Ngf3","children":[]}]},{"count":14529,"san":"Nf6","children":[{"count":13602,"san":"e5","children":[{"count":13096,"san":"Nfd7","children":[{"count":2760,"san":"c3","children":[{"count":2714,"san":"c5","children":[]}]},{"count":2558,"san":"f4","children":[{"count":2525,"san":"c5","children":[]}]},{"count":7170,"san":"Bd3","children":[{"count":7002,"san":"c5","children":[]}]}]}]}]},{"count":3637,"san":"dxe4","children":[{"count":3636,"san":"Nxe4","children":[]}]},{"count":2717,"san":"Be7","children":[]},{"count":2785,"san":"Nc6","children":[{"count":2348,"san":"Ngf3","children":[{"count":2205,"san":"Nf6","children":[]}]}]}]},{"count":55239,"san":"Nc3","children":[{"count":28980,"san":"Bb4","children":[{"count":21760,"san":"e5","children":[{"count":15003,"san":"c5","children":[{"count":12468,"san":"a3","children":[{"count":10522,"san":"Bxc3+","children":[]}]}]},{"count":3857,"san":"Ne7","children":[{"count":2874,"san":"a3","children":[{"count":2844,"san":"Bxc3+","children":[]}]}]}]},{"count":2414,"san":"Ne2","children":[]}]},{"count":4799,"san":"dxe4","children":[{"count":4778,"san":"Nxe4","children":[{"count":2682,"san":"Nd7","children":[{"count":2239,"san":"Nf3","children":[]}]}]}]},{"count":19501,"san":"Nf6","children":[{"count":11416,"san":"Bg5","children":[{"count":4634,"san":"Be7","children":[{"count":4245,"san":"e5","children":[{"count":3941,"san":"Nfd7","children":[]}]}]},{"count":3110,"san":"Bb4","children":[{"count":2587,"san":"e5","children":[{"count":2575,"san":"h6","children":[]}]}]},{"count":3645,"san":"dxe4","children":[{"count":3555,"san":"Nxe4","children":[{"count":2389,"san":"Be7","children":[]}]}]}]},{"count":7366,"san":"e5","children":[{"count":7171,"san":"Nfd7","children":[{"count":5804,"san":"f4","children":[{"count":5715,"san":"c5","children":[]}]}]}]}]}]},{"count":9814,"san":"exd5","children":[{"count":9704,"san":"exd5","children":[{"count":3812,"san":"Nf3","children":[]},{"count":3927,"san":"Bd3","children":[]}]}]}]}]},{"count":9956,"san":"d3","children":[{"count":7838,"san":"d5","children":[{"count":6733,"san":"Nd2","children":[{"count":3780,"san":"Nf6","children":[{"count":3011,"san":"Ngf3","children":[]}]},{"count":2351,"san":"c5","children":[]}]}]}]},{"count":3976,"san":"Nf3","children":[{"count":3555,"san":"d5","children":[]}]}]},{"count":232240,"san":"e5","children":[{"count":196510,"san":"Nf3","children":[{"count":21653,"san":"Nf6","children":[{"count":3961,"san":"d4","children":[{"count":3083,"san":"Nxe4","children":[{"count":2611,"san":"Bd3","children":[{"count":2379,"san":"d5","children":[]}]}]}]},{"count":12396,"san":"Nxe5","children":[{"count":11916,"san":"d6","children":[{"count":11152,"san":"Nf3","children":[{"count":11141,"san":"Nxe4","children":[{"count":5954,"san":"d4","children":[{"count":5607,"san":"d5","children":[]}]},{"count":2372,"san":"Nc3","children":[]}]}]}]}]},{"count":4099,"san":"Nc3","children":[{"count":2454,"san":"Nc6","children":[]}]}]},{"count":161359,"san":"Nc6","children":[{"count":96748,"san":"Bb5","children":[{"count":69150,"san":"a6","children":[{"count":59965,"san":"Ba4","children":[{"count":51609,"san":"Nf6","children":[{"count":42751,"san":"O-O","children":[{"count":27842,"san":"Be7","children":[]},{"count":5553,"san":"Nxe4","children":[]},{"count":7592,"san":"b5","children":[]}]},{"count":3392,"san":"d3","children":[]},{"count":2272,"san":"Qe2","children":[]}]},{"count":5726,"san":"d6","children":[]}]},{"count":9108,"san":"Bxc6","children":[{"count":8892,"san":"dxc6","children":[{"count":6607,"san":"O-O","children":[{"count":2424,"san":"f6","children":[]}]}]}]}]},{"count":11935,"san":"Nf6","children":[{"count":8040,"san":"O-O","children":[{"count":5646,"san":"Nxe4","children":[{"count":4604,"san":"d4","children":[{"count":3534,"san":"Nd6","children":[]}]}]}]},{"count":2403,"san":"d3","children":[]}]},{"count":4754,"san":"f5","children":[{"count":2484,"san":"Nc3","children":[]}]},{"count":3274,"san":"Bc5","children":[]}]},{"count":30899,"san":"Bc4","children":[{"count":14179,"san":"Bc5","children":[{"count":2469,"san":"b4","children":[]},{"count":7221,"san":"c3","children":[{"count":6022,"san":"Nf6","children":[{"count":3433,"san":"d3","children":[]}]}]}]},{"count":13752,"san":"Nf6","children":[{"count":3692,"san":"Ng5","children":[{"count":3002,"san":"d5","children":[{"count":2995,"san":"exd5","children":[]}]}]},{"count":6725,"san":"d3","children":[{"count":3346,"san":"Be7","children":[{"count":2261,"san":"O-O","children":[]}]},{"count":2267,"san":"Bc5","children":[]}]}]}]},{"count":20255,"san":"d4","children":[{"count":19655,"san":"exd4","children":[{"count":14078,"san":"Nxd4","children":[{"count":6240,"san":"Bc5","children":[{"count":3089,"san":"Be3","children":[{"count":2704,"san":"Qf6","children":[]}]}]},{"count":5020,"san":"Nf6","children":[{"count":3879,"san":"Nxc6","children":[{"count":3859,"san":"bxc6","children":[]}]}]}]},{"count":4121,"san":"Bc4","children":[]}]}]},{"count":10555,"san":"Nc3","children":[{"count":8868,"san":"Nf6","children":[{"count":3205,"san":"d4","children":[{"count":2804,"san":"exd4","children":[{"count":2333,"san":"Nxd4","children":[]}]}]},{"count":3805,"san":"Bb5","children":[]}]}]}]},{"count":8457,"san":"d6","children":[{"count":6617,"san":"d4","children":[{"count":3375,"san":"exd4","children":[{"count":2746,"san":"Nxd4","children":[]}]}]}]},{"count":3261,"san":"f5","children":[]}]},{"count":11606,"san":"f4","children":[{"count":7144,"san":"exf4","children":[{"count":5477,"san":"Nf3","children":[]}]}]},{"count":3733,"san":"d4","children":[{"count":3474,"san":"exd4","children":[]}]},{"count":10391,"san":"Nc3","children":[{"count":2491,"san":"Nc6","children":[]},{"count":6670,"san":"Nf6","children":[{"count":2240,"san":"f4","children":[]}]}]},{"count":9145,"san":"Bc4","children":[{"count":6776,"san":"Nf6","children":[{"count":4990,"san":"d3","children":[]}]}]}]},{"count":454574,"san":"c5","children":[{"count":347334,"san":"Nf3","children":[{"count":86338,"san":"e6","children":[{"count":5707,"san":"c3","children":[{"count":2408,"san":"Nf6","children":[]},{"count":2831,"san":"d5","children":[]}]},{"count":63801,"san":"d4","children":[{"count":63631,"san":"cxd4","children":[{"count":63332,"san":"Nxd4","children":[{"count":17799,"san":"Nc6","children":[{"count":13811,"san":"Nc3","children":[{"count":8433,"san":"Qc7","children":[]},{"count":3174,"san":"a6","children":[]}]},{"count":2314,"san":"Nb5","children":[]}]},{"count":27159,"san":"a6","children":[{"count":12137,"san":"Bd3","children":[{"count":3505,"san":"Bc5","children":[]},{"count":4050,"san":"Nf6","children":[]}]},{"count":10329,"san":"Nc3","children":[{"count":6954,"san":"Qc7","children":[]},{"count":2318,"san":"b5","children":[]}]},{"count":2690,"san":"c4","children":[]}]},{"count":16965,"san":"Nf6","children":[{"count":15267,"san":"Nc3","children":[{"count":3869,"san":"Nc6","children":[]},{"count":10089,"san":"d6","children":[]}]}]}]}]}]},{"count":5983,"san":"Nc3","children":[{"count":2969,"san":"a6","children":[]}]},{"count":5197,"san":"d3","children":[{"count":3651,"san":"Nc6","children":[{"count":3268,"san":"g3","children":[]}]}]},{"count":2412,"san":"b3","children":[]}]},{"count":5084,"san":"a6","children":[]},{"count":101269,"san":"Nc6","children":[{"count":66796,"san":"d4","children":[{"count":66650,"san":"cxd4","children":[{"count":66252,"san":"Nxd4","children":[{"count":2966,"san":"Qc7","children":[{"count":2393,"san":"Nc3","children":[{"count":2345,"san":"e6","children":[]}]}]},{"count":34744,"san":"Nf6","children":[{"count":34505,"san":"Nc3","children":[{"count":15607,"san":"d6","children":[]},{"count":15141,"san":"e5","children":[]},{"count":2259,"san":"e6","children":[]}]}]},{"count":12770,"san":"g6","children":[{"count":5519,"san":"Nc3","children":[{"count":5493,"san":"Bg7","children":[]}]},{"count":5372,"san":"c4","children":[{"count":3276,"san":"Bg7","children":[]}]}]},{"count":2655,"san":"Qb6","children":[{"count":2387,"san":"Nb3","children":[{"count":2243,"san":"Nf6","children":[]}]}]},{"count":4375,"san":"e6","children":[{"count":3241,"san":"Nc3","children":[]}]},{"count":7286,"san":"e5","children":[{"count":6530,"san":"Nb5","children":[{"count":4937,"san":"d6","children":[]}]}]}]}]}]},{"count":19959,"san":"Bb5","children":[{"count":9813,"san":"g6","children":[{"count":3183,"san":"Bxc6","children":[{"count":2311,"san":"dxc6","children":[]}]},{"count":5984,"san":"O-O","children":[{"count":5898,"san":"Bg7","children":[{"count":2387,"san":"Re1","children":[]},{"count":2773,"san":"c3","children":[]}]}]}]},{"count":4363,"san":"e6","children":[{"count":2724,"san":"O-O","children":[{"count":2589,"san":"Nge7","children":[]}]}]},{"count":2844,"san":"d6","children":[]}]},{"count":3333,"san":"c3","children":[]},{"count":7777,"san":"Nc3","children":[]}]},{"count":143298,"san":"d6","children":[{"count":115393,"san":"d4","children":[{"count":110566,"san":"cxd4","children":[{"count":105461,"san":"Nxd4","children":[{"count":103951,"san":"Nf6","children":[{"count":101346,"san":"Nc3","children":[{"count":19599,"san":"g6","children":[]},{"count":58355,"san":"a6","children":[]},{"count":5860,"san":"e6","children":[]},{"count":16384,"san":"Nc6","children":[]}]}]}]},{"count":4815,"san":"Qxd4","children":[{"count":2718,"san":"Nc6","children":[{"count":2687,"san":"Bb5","children":[{"count":2349,"san":"Bd7","children":[]}]}]}]}]},{"count":4793,"san":"Nf6","children":[{"count":4510,"san":"Nc3","children":[{"count":4492,"san":"cxd4","children":[{"count":4299,"san":"Nxd4","children":[{"count":2303,"san":"a6","children":[]}]}]}]}]}]},{"count":13939,"san":"Bb5+","children":[{"count":8159,"san":"Bd7","children":[{"count":7599,"san":"Bxd7+","children":[{"count":5906,"san":"Qxd7","children":[{"count":3561,"san":"O-O","children":[{"count":2241,"san":"Nc6","children":[]}]},{"count":2213,"san":"c4","children":[]}]}]}]},{"count":3420,"san":"Nd7","children":[]},{"count":2357,"san":"Nc6","children":[]}]},{"count":6561,"san":"c3","children":[{"count":6135,"san":"Nf6","children":[{"count":2719,"san":"Be2","children":[]}]}]},{"count":2686,"san":"Nc3","children":[]}]},{"count":3192,"san":"Nf6","children":[]},{"count":7443,"san":"g6","children":[{"count":5272,"san":"d4","children":[{"count":3238,"san":"cxd4","children":[{"count":2555,"san":"Nxd4","children":[]}]}]}]}]},{"count":34855,"san":"c3","children":[{"count":12389,"san":"Nf6","children":[{"count":12095,"san":"e5","children":[{"count":12083,"san":"Nd5","children":[{"count":8765,"san":"d4","children":[{"count":8313,"san":"cxd4","children":[{"count":5153,"san":"Nf3","children":[{"count":2567,"san":"Nc6","children":[]}]}]}]},{"count":2674,"san":"Nf3","children":[]}]}]}]},{"count":12281,"san":"d5","children":[{"count":12053,"san":"exd5","children":[{"count":11889,"san":"Qxd5","children":[{"count":11376,"san":"d4","children":[{"count":5501,"san":"Nf6","children":[{"count":5205,"san":"Nf3","children":[{"count":2371,"san":"Bg4","children":[]}]}]},{"count":2250,"san":"Nc6","children":[]}]}]}]}]},{"count":3405,"san":"e6","children":[{"count":3033,"san":"d4","children":[{"count":2614,"san":"d5","children":[]}]}]},{"count":3198,"san":"d6","children":[{"count":3015,"san":"d4","children":[{"count":2304,"san":"Nf6","children":[]}]}]}]},{"count":45251,"san":"Nc3","children":[{"count":28009,"san":"Nc6","children":[{"count":6624,"san":"f4","children":[{"count":3959,"san":"g6","children":[{"count":3772,"san":"Nf3","children":[{"count":3748,"san":"Bg7","children":[]}]}]}]},{"count":12327,"san":"g3","children":[{"count":10949,"san":"g6","children":[{"count":10455,"san":"Bg2","children":[{"count":10370,"san":"Bg7","children":[{"count":8892,"san":"d3","children":[{"count":6087,"san":"d6","children":[]}]}]}]}]}]},{"count":2352,"san":"Nge2","children":[]},{"count":2776,"san":"Nf3","children":[]},{"count":3164,"san":"Bb5","children":[]}]},{"count":7137,"san":"e6","children":[{"count":2332,"san":"g3","children":[]}]},{"count":6425,"san":"d6","children":[{"count":2518,"san":"f4","children":[]}]}]},{"count":7297,"san":"d4","children":[{"count":7052,"san":"cxd4","children":[{"count":6170,"san":"c3","children":[{"count":3415,"san":"dxc3","children":[{"count":3375,"san":"Nxc3","children":[{"count":2291,"san":"Nc6","children":[]}]}]}]}]}]},{"count":4423,"san":"f4","children":[]},{"count":2696,"san":"b3","children":[]},{"count":3235,"san":"d3","children":[{"count":2275,"san":"Nc6","children":[]}]},{"count":2327,"san":"Ne2","children":[]}]},{"count":7501,"san":"Nc6","children":[{"count":3688,"san":"Nf3","children":[]},{"count":2782,"san":"d4","children":[]}]},{"count":45929,"san":"d6","children":[{"count":42382,"san":"d4","children":[{"count":35083,"san":"Nf6","children":[{"count":32169,"san":"Nc3","children":[{"count":20601,"san":"g6","children":[{"count":5823,"san":"f4","children":[{"count":5689,"san":"Bg7","children":[{"count":5311,"san":"Nf3","children":[{"count":3608,"san":"O-O","children":[]}]}]}]},{"count":4570,"san":"Nf3","children":[{"count":4457,"san":"Bg7","children":[{"count":2556,"san":"Be2","children":[{"count":2330,"san":"O-O","children":[]}]}]}]},{"count":2988,"san":"Be3","children":[]}]},{"count":3777,"san":"c6","children":[]},{"count":5688,"san":"e5","children":[{"count":3766,"san":"Nf3","children":[{"count":3512,"san":"Nbd7","children":[{"count":2988,"san":"Bc4","children":[{"count":2950,"san":"Be7","children":[]}]}]}]}]}]}]},{"count":5949,"san":"g6","children":[{"count":3718,"san":"Nc3","children":[{"count":3183,"san":"Bg7","children":[]}]}]}]}]},{"count":31014,"san":"d5","children":[{"count":29345,"san":"exd5","children":[{"count":11382,"san":"Nf6","children":[{"count":5806,"san":"d4","children":[{"count":4272,"san":"Nxd5","children":[]}]}]},{"count":17835,"san":"Qxd5","children":[{"count":16184,"san":"Nc3","children":[{"count":10268,"san":"Qa5","children":[{"count":7621,"san":"d4","children":[{"count":5214,"san":"Nf6","children":[{"count":3350,"san":"Nf3","children":[]}]}]}]},{"count":4590,"san":"Qd6","children":[{"count":3780,"san":"d4","children":[{"count":3300,"san":"Nf6","children":[{"count":2347,"san":"Nf3","children":[]}]}]}]}]}]}]}]},{"count":2620,"san":"b6","children":[{"count":2244,"san":"d4","children":[]}]}]},{"count":750505,"san":"d4","children":[{"count":435756,"san":"Nf6","children":[{"count":299965,"san":"c4","children":[{"count":130778,"san":"e6","children":[{"count":54321,"san":"Nf3","children":[{"count":5834,"san":"c5","children":[{"count":4201,"san":"d5","children":[{"count":2656,"san":"exd5","children":[{"count":2656,"san":"cxd5","children":[{"count":2282,"san":"d6","children":[]}]}]}]}]},{"count":24442,"san":"b6","children":[{"count":12844,"san":"g3","children":[{"count":7100,"san":"Ba6","children":[{"count":3762,"san":"b3","children":[{"count":2289,"san":"Bb4+","children":[]}]}]},{"count":5021,"san":"Bb7","children":[{"count":5004,"san":"Bg2","children":[{"count":3514,"san":"Be7","children":[]}]}]}]},{"count":5196,"san":"a3","children":[{"count":3049,"san":"Bb7","children":[{"count":3024,"san":"Nc3","children":[{"count":2316,"san":"d5","children":[]}]}]}]},{"count":3981,"san":"Nc3","children":[{"count":2329,"san":"Bb7","children":[]}]}]},{"count":9661,"san":"Bb4+","children":[{"count":3345,"san":"Nbd2","children":[]},{"count":5937,"san":"Bd2","children":[{"count":2880,"san":"Qe7","children":[]}]}]},{"count":13852,"san":"d5","children":[{"count":9858,"san":"Nc3","children":[{"count":3339,"san":"Be7","children":[]}]}]}]},{"count":63631,"san":"Nc3","children":[{"count":51365,"san":"Bb4","children":[{"count":20312,"san":"e3","children":[{"count":6122,"san":"c5","children":[{"count":3396,"san":"Bd3","children":[]}]},{"count":3736,"san":"b6","children":[]},{"count":9149,"san":"O-O","children":[{"count":6050,"san":"Bd3","children":[{"count":3946,"san":"d5","children":[]}]},{"count":2290,"san":"Ne2","children":[]}]}]},{"count":2384,"san":"Bg5","children":[]},{"count":3169,"san":"f3","children":[]},{"count":2205,"san":"a3","children":[]},{"count":16755,"san":"Qc2","children":[{"count":7563,"san":"O-O","children":[{"count":5399,"san":"a3","children":[{"count":5375,"san":"Bxc3+","children":[]}]}]},{"count":4435,"san":"c5","children":[{"count":3980,"san":"dxc5","children":[]}]},{"count":2825,"san":"d5","children":[]}]},{"count":4147,"san":"Nf3","children":[]}]},{"count":2580,"san":"c5","children":[{"count":2241,"san":"d5","children":[]}]},{"count":9058,"san":"d5","children":[{"count":3763,"san":"Bg5","children":[{"count":2305,"san":"Be7","children":[]}]},{"count":2943,"san":"cxd5","children":[{"count":2740,"san":"exd5","children":[{"count":2641,"san":"Bg5","children":[]}]}]}]}]},{"count":11808,"san":"g3","children":[{"count":6210,"san":"d5","children":[{"count":3753,"san":"Bg2","children":[]},{"count":2429,"san":"Nf3","children":[]}]},{"count":2623,"san":"c5","children":[]},{"count":2727,"san":"Bb4+","children":[{"count":2304,"san":"Bd2","children":[]}]}]}]},{"count":109513,"san":"g6","children":[{"count":92209,"san":"Nc3","children":[{"count":27973,"san":"d5","children":[{"count":2586,"san":"Bf4","children":[{"count":2497,"san":"Bg7","children":[]}]},{"count":12877,"san":"cxd5","children":[{"count":12873,"san":"Nxd5","children":[{"count":10877,"san":"e4","children":[{"count":10767,"san":"Nxc3","children":[]}]}]}]},{"count":9073,"san":"Nf3","children":[{"count":9033,"san":"Bg7","children":[{"count":2614,"san":"Qb3","children":[{"count":2448,"san":"dxc4","children":[]}]}]}]}]},{"count":63592,"san":"Bg7","children":[{"count":56984,"san":"e4","children":[{"count":52063,"san":"d6","children":[{"count":11209,"san":"Be2","children":[{"count":10846,"san":"O-O","children":[]}]},{"count":16826,"san":"Nf3","children":[{"count":16561,"san":"O-O","children":[]}]},{"count":13350,"san":"f3","children":[{"count":11608,"san":"O-O","children":[]}]},{"count":4226,"san":"f4","children":[{"count":3463,"san":"O-O","children":[]}]},{"count":2332,"san":"h3","children":[]}]},{"count":4893,"san":"O-O","children":[]}]},{"count":4144,"san":"Nf3","children":[{"count":2898,"san":"O-O","children":[]}]}]}]},{"count":7584,"san":"Nf3","children":[{"count":7429,"san":"Bg7","children":[{"count":5868,"san":"g3","children":[{"count":4236,"san":"O-O","children":[{"count":4216,"san":"Bg2","children":[{"count":2962,"san":"d6","children":[]}]}]}]}]}]},{"count":7945,"san":"g3","children":[{"count":6616,"san":"Bg7","children":[{"count":6559,"san":"Bg2","children":[{"count":4174,"san":"O-O","children":[{"count":2722,"san":"Nc3","children":[{"count":2443,"san":"d6","children":[]}]}]}]}]}]}]},{"count":37895,"san":"c5","children":[{"count":32464,"san":"d5","children":[{"count":3030,"san":"e5","children":[{"count":2962,"san":"Nc3","children":[{"count":2954,"san":"d6","children":[{"count":2778,"san":"e4","children":[]}]}]}]},{"count":15641,"san":"b5","children":[{"count":11611,"san":"cxb5","children":[{"count":11458,"san":"a6","children":[{"count":5485,"san":"bxa6","children":[{"count":2731,"san":"g6","children":[]},{"count":2566,"san":"Bxa6","children":[]}]},{"count":2309,"san":"b6","children":[]}]}]}]},{"count":8554,"san":"e6","children":[{"count":8315,"san":"Nc3","children":[{"count":8225,"san":"exd5","children":[{"count":8150,"san":"cxd5","children":[{"count":7575,"san":"d6","children":[]}]}]}]}]},{"count":2606,"san":"g6","children":[{"count":2524,"san":"Nc3","children":[]}]}]},{"count":3609,"san":"Nf3","children":[{"count":2529,"san":"cxd4","children":[{"count":2515,"san":"Nxd4","children":[]}]}]}]},{"count":6523,"san":"e5","children":[{"count":5966,"san":"dxe5","children":[{"count":4903,"san":"Ng4","children":[]}]}]},{"count":9514,"san":"d6","children":[{"count":6933,"san":"Nc3","children":[{"count":3177,"san":"Nbd7","children":[]}]},{"count":2402,"san":"Nf3","children":[]}]},{"count":2570,"san":"c6","children":[]}]},{"count":103612,"san":"Nf3","children":[{"count":34154,"san":"e6","children":[{"count":5558,"san":"Bg5","children":[{"count":2234,"san":"c5","children":[]}]},{"count":5218,"san":"e3","children":[{"count":2753,"san":"b6","children":[{"count":2433,"san":"Bd3","children":[{"count":2342,"san":"Bb7","children":[]}]}]}]},{"count":15354,"san":"c4","children":[{"count":3298,"san":"Bb4+","children":[]},{"count":2391,"san":"c5","children":[]},{"count":6608,"san":"b6","children":[{"count":3233,"san":"g3","children":[]}]},{"count":2743,"san":"d5","children":[]}]},{"count":2390,"san":"Bf4","children":[]},{"count":4742,"san":"g3","children":[]}]},{"count":9822,"san":"c5","children":[{"count":4817,"san":"d5","children":[]}]},{"count":9645,"san":"d5","children":[{"count":6111,"san":"c4","children":[{"count":3547,"san":"e6","children":[{"count":2229,"san":"Nc3","children":[]}]}]}]},{"count":42686,"san":"g6","children":[{"count":18449,"san":"c4","children":[{"count":16916,"san":"Bg7","children":[{"count":12824,"san":"Nc3","children":[{"count":7466,"san":"O-O","children":[{"count":5694,"san":"e4","children":[{"count":5577,"san":"d6","children":[]}]}]},{"count":3271,"san":"d5","children":[]}]},{"count":3978,"san":"g3","children":[{"count":3018,"san":"O-O","children":[{"count":2999,"san":"Bg2","children":[]}]}]}]}]},{"count":6483,"san":"Bg5","children":[{"count":6058,"san":"Bg7","children":[{"count":4837,"san":"Nbd2","children":[]}]}]},{"count":7651,"san":"g3","children":[{"count":7178,"san":"Bg7","children":[{"count":6981,"san":"Bg2","children":[{"count":5748,"san":"O-O","children":[{"count":4821,"san":"O-O","children":[{"count":3402,"san":"d6","children":[]}]}]}]}]}]},{"count":4485,"san":"Bf4","children":[{"count":4063,"san":"Bg7","children":[{"count":3058,"san":"e3","children":[]}]}]},{"count":2405,"san":"Nc3","children":[]}]},{"count":2757,"san":"b6","children":[]},{"count":3725,"san":"d6","children":[]}]},{"count":16403,"san":"Bg5","children":[{"count":5311,"san":"Ne4","children":[{"count":3784,"san":"Bf4","children":[]}]},{"count":2819,"san":"d5","children":[]},{"count":4207,"san":"e6","children":[{"count":2345,"san":"e4","children":[]}]}]},{"count":2767,"san":"g3","children":[]},{"count":7347,"san":"Nc3","children":[{"count":5307,"san":"d5","children":[{"count":3746,"san":"Bg5","children":[]}]}]}]},{"count":34034,"san":"e6","children":[{"count":8596,"san":"Nf3","children":[{"count":3125,"san":"Nf6","children":[]},{"count":2298,"san":"f5","children":[]}]},{"count":20268,"san":"c4","children":[{"count":5256,"san":"f5","children":[{"count":2810,"san":"g3","children":[{"count":2723,"san":"Nf6","children":[{"count":2683,"san":"Bg2","children":[]}]}]}]},{"count":2288,"san":"Bb4+","children":[]},{"count":2497,"san":"b6","children":[]},{"count":2854,"san":"d5","children":[]},{"count":6390,"san":"Nf6","children":[{"count":2623,"san":"Nf3","children":[]},{"count":3180,"san":"Nc3","children":[{"count":2456,"san":"Bb4","children":[]}]}]}]},{"count":3664,"san":"e4","children":[{"count":3157,"san":"d5","children":[]}]}]},{"count":198775,"san":"d5","children":[{"count":44581,"san":"Nf3","children":[{"count":29537,"san":"Nf6","children":[{"count":17005,"san":"c4","children":[{"count":6194,"san":"e6","children":[{"count":3869,"san":"Nc3","children":[]}]},{"count":7895,"san":"c6","children":[{"count":4032,"san":"Nc3","children":[]}]},{"count":2787,"san":"dxc4","children":[]}]},{"count":3552,"san":"Bf4","children":[]},{"count":4169,"san":"e3","children":[]}]},{"count":4563,"san":"e6","children":[{"count":2292,"san":"c4","children":[]}]},{"count":4656,"san":"c6","children":[{"count":2367,"san":"c4","children":[]}]}]},{"count":138986,"san":"c4","children":[{"count":17114,"san":"dxc4","children":[{"count":9525,"san":"Nf3","children":[{"count":6393,"san":"Nf6","children":[{"count":4917,"san":"e3","children":[{"count":3334,"san":"e6","children":[{"count":3321,"san":"Bxc4","children":[{"count":2526,"san":"c5","children":[]}]}]}]}]}]},{"count":3054,"san":"e3","children":[]},{"count":3445,"san":"e4","children":[]}]},{"count":53549,"san":"e6","children":[{"count":36353,"san":"Nc3","children":[{"count":7384,"san":"c6","children":[{"count":2759,"san":"e3","children":[]},{"count":2668,"san":"Nf3","children":[]}]},{"count":4430,"san":"c5","children":[{"count":3478,"san":"cxd5","children":[{"count":2663,"san":"exd5","children":[{"count":2458,"san":"Nf3","children":[{"count":2368,"san":"Nc6","children":[]}]}]}]}]},{"count":17309,"san":"Nf6","children":[{"count":3581,"san":"Nf3","children":[]},{"count":8169,"san":"Bg5","children":[{"count":4944,"san":"Be7","children":[{"count":3487,"san":"e3","children":[]}]},{"count":2327,"san":"Nbd7","children":[]}]},{"count":5108,"san":"cxd5","children":[{"count":4893,"san":"exd5","children":[{"count":4729,"san":"Bg5","children":[{"count":2766,"san":"Be7","children":[]}]}]}]}]},{"count":5275,"san":"Be7","children":[{"count":3602,"san":"Nf3","children":[{"count":3550,"san":"Nf6","children":[]}]}]}]},{"count":15394,"san":"Nf3","children":[{"count":9682,"san":"Nf6","children":[{"count":3282,"san":"g3","children":[]},{"count":4506,"san":"Nc3","children":[]}]},{"count":3028,"san":"c6","children":[]}]}]},{"count":59268,"san":"c6","children":[{"count":18056,"san":"Nc3","children":[{"count":15458,"san":"Nf6","children":[{"count":6995,"san":"e3","children":[{"count":3830,"san":"e6","children":[{"count":3625,"san":"Nf3","children":[{"count":3129,"san":"Nbd7","children":[]}]}]}]},{"count":6549,"san":"Nf3","children":[{"count":2840,"san":"e6","children":[]}]}]}]},{"count":33445,"san":"Nf3","children":[{"count":30861,"san":"Nf6","children":[{"count":18950,"san":"Nc3","children":[{"count":7707,"san":"e6","children":[{"count":3258,"san":"e3","children":[{"count":2850,"san":"Nbd7","children":[]}]},{"count":3373,"san":"Bg5","children":[]}]},{"count":3264,"san":"a6","children":[]},{"count":7097,"san":"dxc4","children":[{"count":6280,"san":"a4","children":[{"count":5083,"san":"Bf5","children":[]}]}]}]},{"count":7720,"san":"e3","children":[{"count":2550,"san":"Bf5","children":[]}]}]}]},{"count":2782,"san":"e3","children":[{"count":2279,"san":"Nf6","children":[]}]},{"count":4708,"san":"cxd5","children":[{"count":4691,"san":"cxd5","children":[{"count":3142,"san":"Nc3","children":[{"count":2200,"san":"Nf6","children":[]}]}]}]}]},{"count":2565,"san":"e5","children":[{"count":2291,"san":"dxe5","children":[{"count":2245,"san":"d4","children":[]}]}]},{"count":3375,"san":"Nc6","children":[]}]},{"count":4079,"san":"e4","children":[{"count":3649,"san":"dxe4","children":[{"count":3540,"san":"Nc3","children":[{"count":2891,"san":"Nf6","children":[{"count":2649,"san":"f3","children":[{"count":2238,"san":"exf3","children":[]}]}]}]}]}]},{"count":2757,"san":"Bg5","children":[]},{"count":2733,"san":"Bf4","children":[]},{"count":2465,"san":"Nc3","children":[]}]},{"count":19906,"san":"d6","children":[{"count":5714,"san":"c4","children":[{"count":3198,"san":"e5","children":[]}]},{"count":7290,"san":"Nf3","children":[{"count":2708,"san":"g6","children":[]}]},{"count":5603,"san":"e4","children":[{"count":3855,"san":"Nf6","children":[{"count":3028,"san":"Nc3","children":[]}]}]}]},{"count":20795,"san":"g6","children":[{"count":10082,"san":"c4","children":[{"count":8927,"san":"Bg7","children":[{"count":5382,"san":"Nc3","children":[{"count":3551,"san":"d6","children":[{"count":2735,"san":"e4","children":[]}]}]}]}]},{"count":6044,"san":"e4","children":[{"count":5101,"san":"Bg7","children":[]}]},{"count":3586,"san":"Nf3","children":[{"count":3244,"san":"Bg7","children":[]}]}]},{"count":24866,"san":"f5","children":[{"count":4891,"san":"c4","children":[{"count":3892,"san":"Nf6","children":[{"count":2205,"san":"Nc3","children":[]}]}]},{"count":8312,"san":"g3","children":[{"count":7218,"san":"Nf6","children":[{"count":7028,"san":"Bg2","children":[{"count":4592,"san":"g6","children":[]}]}]}]},{"count":2726,"san":"Nc3","children":[]},{"count":4302,"san":"Nf3","children":[{"count":3662,"san":"Nf6","children":[{"count":2296,"san":"g3","children":[]}]}]}]},{"count":9911,"san":"c5","children":[{"count":6968,"san":"d5","children":[{"count":2605,"san":"e5","children":[]}]}]}]},{"count":154519,"san":"c4","children":[{"count":49816,"san":"Nf6","children":[{"count":31962,"san":"Nc3","children":[{"count":4607,"san":"c5","children":[{"count":2265,"san":"Nf3","children":[]}]},{"count":7257,"san":"e6","children":[{"count":2522,"san":"Nf3","children":[]},{"count":2804,"san":"e4","children":[]}]},{"count":10976,"san":"g6","children":[{"count":4753,"san":"g3","children":[{"count":4438,"san":"Bg7","children":[{"count":4395,"san":"Bg2","children":[{"count":3507,"san":"O-O","children":[]}]}]}]},{"count":3885,"san":"e4","children":[{"count":3639,"san":"d6","children":[{"count":3152,"san":"d4","children":[{"count":3123,"san":"Bg7","children":[]}]}]}]}]},{"count":2986,"san":"d5","children":[{"count":2631,"san":"cxd5","children":[{"count":2629,"san":"Nxd5","children":[]}]}]},{"count":4229,"san":"e5","children":[{"count":2409,"san":"Nf3","children":[]}]}]},{"count":7573,"san":"Nf3","children":[{"count":2370,"san":"e6","children":[]},{"count":2831,"san":"g6","children":[]}]},{"count":7531,"san":"g3","children":[{"count":3124,"san":"g6","children":[{"count":2938,"san":"Bg2","children":[{"count":2575,"san":"Bg7","children":[]}]}]}]},{"count":2489,"san":"d4","children":[]}]},{"count":10705,"san":"c6","children":[{"count":2273,"san":"d4","children":[]},{"count":2752,"san":"e4","children":[{"count":2216,"san":"d5","children":[]}]},{"count":3497,"san":"Nf3","children":[{"count":2824,"san":"d5","children":[]}]}]},{"count":20027,"san":"e6","children":[{"count":6427,"san":"Nc3","children":[{"count":4626,"san":"d5","children":[{"count":3675,"san":"d4","children":[]}]}]},{"count":6776,"san":"Nf3","children":[{"count":4061,"san":"d5","children":[]},{"count":2199,"san":"Nf6","children":[]}]},{"count":3941,"san":"g3","children":[{"count":2799,"san":"d5","children":[{"count":2293,"san":"Bg2","children":[]}]}]}]},{"count":33538,"san":"e5","children":[{"count":23844,"san":"Nc3","children":[{"count":11404,"san":"Nf6","children":[{"count":6011,"san":"Nf3","children":[{"count":5461,"san":"Nc6","children":[{"count":2444,"san":"g3","children":[]}]}]},{"count":4548,"san":"g3","children":[]}]},{"count":2322,"san":"d6","children":[]},{"count":7070,"san":"Nc6","children":[{"count":4376,"san":"g3","children":[{"count":2648,"san":"g6","children":[{"count":2616,"san":"Bg2","children":[{"count":2545,"san":"Bg7","children":[]}]}]}]},{"count":2303,"san":"Nf3","children":[]}]}]},{"count":8441,"san":"g3","children":[{"count":2533,"san":"Nc6","children":[{"count":2265,"san":"Bg2","children":[]}]},{"count":3844,"san":"Nf6","children":[{"count":3749,"san":"Bg2","children":[]}]}]}]},{"count":17435,"san":"c5","children":[{"count":6995,"san":"Nc3","children":[{"count":3577,"san":"Nc6","children":[{"count":2320,"san":"g3","children":[]}]}]},{"count":6976,"san":"Nf3","children":[{"count":3188,"san":"Nf6","children":[]},{"count":2469,"san":"Nc6","children":[]}]},{"count":3180,"san":"g3","children":[]}]},{"count":13217,"san":"g6","children":[{"count":3171,"san":"g3","children":[{"count":3025,"san":"Bg7","children":[{"count":2963,"san":"Bg2","children":[]}]}]},{"count":6187,"san":"Nc3","children":[{"count":5527,"san":"Bg7","children":[{"count":3316,"san":"g3","children":[]}]}]}]},{"count":5255,"san":"f5","children":[]},{"count":2211,"san":"b6","children":[]}]},{"count":186872,"san":"Nf3","children":[{"count":88966,"san":"Nf6","children":[{"count":50459,"san":"c4","children":[{"count":15026,"san":"e6","children":[{"count":5444,"san":"Nc3","children":[{"count":2461,"san":"d5","children":[{"count":2241,"san":"d4","children":[]}]}]},{"count":7210,"san":"g3","children":[{"count":4198,"san":"d5","children":[{"count":2613,"san":"Bg2","children":[]}]}]}]},{"count":3230,"san":"b6","children":[{"count":2328,"san":"g3","children":[]}]},{"count":19489,"san":"g6","children":[{"count":10977,"san":"Nc3","children":[{"count":7905,"san":"Bg7","children":[{"count":5486,"san":"e4","children":[{"count":4761,"san":"d6","children":[{"count":4711,"san":"d4","children":[{"count":4618,"san":"O-O","children":[]}]}]}]}]},{"count":2755,"san":"d5","children":[]}]},{"count":5250,"san":"g3","children":[{"count":5066,"san":"Bg7","children":[{"count":4943,"san":"Bg2","children":[{"count":4173,"san":"O-O","children":[{"count":3048,"san":"O-O","children":[]}]}]}]}]}]},{"count":7908,"san":"c5","children":[{"count":2215,"san":"g3","children":[]},{"count":5044,"san":"Nc3","children":[]}]},{"count":2849,"san":"c6","children":[]}]},{"count":9287,"san":"d4","children":[{"count":3713,"san":"g6","children":[]},{"count":2640,"san":"e6","children":[]}]},{"count":24760,"san":"g3","children":[{"count":11804,"san":"g6","children":[{"count":8577,"san":"Bg2","children":[{"count":8425,"san":"Bg7","children":[{"count":6563,"san":"O-O","children":[{"count":5960,"san":"O-O","children":[]}]}]}]},{"count":2211,"san":"b3","children":[]}]},{"count":6594,"san":"d5","children":[{"count":5967,"san":"Bg2","children":[{"count":2737,"san":"c6","children":[]}]}]},{"count":2562,"san":"b6","children":[{"count":2464,"san":"Bg2","children":[{"count":2461,"san":"Bb7","children":[]}]}]}]},{"count":3190,"san":"b3","children":[]}]},{"count":47261,"san":"d5","children":[{"count":15277,"san":"d4","children":[{"count":9898,"san":"Nf6","children":[{"count":8222,"san":"c4","children":[{"count":3529,"san":"e6","children":[{"count":2211,"san":"Nc3","children":[]}]},{"count":3520,"san":"c6","children":[]}]}]}]},{"count":16200,"san":"g3","children":[{"count":3950,"san":"c6","children":[{"count":3759,"san":"Bg2","children":[{"count":2409,"san":"Bg4","children":[]}]}]},{"count":6208,"san":"Nf6","children":[{"count":6062,"san":"Bg2","children":[]}]}]},{"count":11985,"san":"c4","children":[{"count":4799,"san":"c6","children":[]},{"count":4162,"san":"e6","children":[]}]},{"count":2325,"san":"b3","children":[]}]},{"count":6105,"san":"f5","children":[{"count":2227,"san":"g3","children":[]}]},{"count":21472,"san":"c5","children":[{"count":12249,"san":"c4","children":[{"count":2404,"san":"g6","children":[]},{"count":4995,"san":"Nc6","children":[{"count":2363,"san":"Nc3","children":[]}]},{"count":4071,"san":"Nf6","children":[{"count":2657,"san":"Nc3","children":[]}]}]},{"count":5145,"san":"g3","children":[{"count":2607,"san":"Nc6","children":[]}]}]},{"count":10258,"san":"g6","children":[{"count":3151,"san":"d4","children":[{"count":2274,"san":"Bg7","children":[]}]},{"count":2433,"san":"g3","children":[{"count":2324,"san":"Bg7","children":[]}]},{"count":2708,"san":"c4","children":[{"count":2458,"san":"Bg7","children":[]}]}]},{"count":3629,"san":"e6","children":[]},{"count":5360,"san":"d6","children":[{"count":3706,"san":"d4","children":[]}]}]},{"count":8279,"san":"b3","children":[{"count":3630,"san":"e5","children":[{"count":3542,"san":"Bb2","children":[{"count":2594,"san":"Nc6","children":[]}]}]}]},{"count":11957,"san":"f4","children":[{"count":5540,"san":"d5","children":[{"count":4098,"san":"Nf3","children":[]}]}]},{"count":5130,"san":"Nc3","children":[]},{"count":6852,"san":"b4","children":[{"count":3117,"san":"e5","children":[{"count":2814,"san":"Bb2","children":[]}]}]},{"count":16412,"san":"g3","children":[{"count":3014,"san":"g6","children":[{"count":2847,"san":"Bg2","children":[{"count":2782,"san":"Bg7","children":[]}]}]},{"count":3069,"san":"Nf6","children":[{"count":2863,"san":"Bg2","children":[]}]},{"count":5509,"san":"d5","children":[{"count":3631,"san":"Bg2","children":[]}]},{"count":2519,"san":"e5","children":[]}]}]'), p3 = {
  count: d3,
  san: f3,
  children: h3
}, g3 = "ref", m3 = [{ name: "june11", children: [{ name: "atts", children: [{ name: "early", size: 11 }, { name: "jcp", size: 40 }, { name: "jcpaft", size: 50 }, { name: "stillon", size: 195 }, { name: "jo", children: [{ name: "early", size: 100 }, { name: "jcp", size: 67 }, { name: "jcpaft", size: 110 }, { name: "stillon", size: 154 }, { name: "sus1", children: [{ name: "early", size: 11 }, { name: "jcp", size: 118 }, { name: "jcpaft", size: 39 }, { name: "stillon", size: 2779 }] }, { name: "sus5", children: [{ name: "early", size: 0 }, { name: "jcp", size: 64 }, { name: "jcpaft", size: 410 }, { name: "stillon", size: 82 }] }, { name: "sus9", children: [{ name: "early", size: 1018 }, { name: "jcp", size: 3458 }, { name: "jcpaft", size: 106 }, { name: "stillon", size: 243 }] }, { name: "sus13", children: [{ name: "early", size: 110 }, { name: "jcp", size: 190 }, { name: "jcpaft", size: 80 }, { name: "stillon", size: 9190 }, { name: "allsus", size: 3970 }] }] }] }, { name: "noatt", size: 30 }] }], N3 = {
  name: g3,
  children: m3
};
function Gf(r) {
  const i = r;
  return {
    san: i.san ?? i.San ?? "start",
    count: i.count ?? i.Count ?? 0,
    children: (i.children ?? i.Children ?? []).map(Gf)
  };
}
function Kf(r, i, o = 0) {
  return o >= i ? { ...r, children: [] } : {
    ...r,
    children: r.children.map((c) => Kf(c, i, o + 1))
  };
}
function Qf(r, i) {
  return {
    ...r,
    children: r.children.filter((o) => o.count >= i).map((o) => Qf(o, i))
  };
}
function v3(r, i) {
  const o = Kf(r, i.maxPly), c = i.pruneFraction > 0 ? r.count * i.pruneFraction : 0;
  return c > 0 ? Qf(o, c) : o;
}
function jf(r, i = 0) {
  return r.children.length ? r.children.reduce(
    (o, c) => {
      const u = jf(c, i + 1);
      return {
        nodes: o.nodes + u.nodes,
        leaves: o.leaves + u.leaves,
        maxDepth: Math.max(o.maxDepth, u.maxDepth)
      };
    },
    { nodes: 1, leaves: 0, maxDepth: i }
  ) : { nodes: 1, leaves: 1, maxDepth: i };
}
const y3 = Gf(p3);
function Uf(r) {
  const i = (r.children ?? []).map(Uf);
  return {
    san: r.name,
    count: r.size ?? i.reduce((o, c) => o + c.count, 0),
    children: i
  };
}
const x3 = Uf(N3), Zd = [
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
], bd = {
  stroke: "none",
  strokeWidth: void 0,
  padAngle: 5e-3,
  ringGap: 1,
  depthFade: 0.15,
  background: "light"
}, w3 = [
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
], S3 = [
  {
    id: "category10",
    label: "category10 · 2015",
    note: "d3 category10 by first move, as in chess-dataviz.",
    knobs: { ...bd, palette: "category10" }
  },
  {
    id: "tableau10",
    label: "tableau10 · later",
    note: "Tableau10 by first move, as in later versions.",
    knobs: { ...bd, palette: "tableau10" }
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
], Jd = [
  {
    id: "2015-10",
    label: "Oct 2015",
    note: `Oct 17, 2015. first commit: copy-pasted d3 "sequences sunburst" example. It still drew the example's sample data, so that's what you see here. A color per move (d3.category20), no shading, biggest arcs first, 1px white lines. Ugly as sin.`,
    data: "sample-2015",
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
    note: "Nov 1, 2015. First chess version: color by first move (d3.category10), rings alternate lighter and darker and fade outward, 0.5px white lines, move labels on more arcs.",
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
    label: "Dec 2015 · 1.0",
    note: "Dec 21, 2015. Version 1.0, used by the 2016 post: no sorting, so moves keep the tree's order; cut-offs as fractions of the circle, so many more slivers survive. Chessboard over the hole.",
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
], k3 = [
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
], Dt = {
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
}, Hf = [
  {
    id: "library-2015",
    label: "0 · library",
    year: "2015",
    caption: "2015 — chess-dataviz, three commits",
    blurb: "The library's openings chart at three points in its history, each drawn with that commit's settings. The first one still had the example's sample data; the other two draw the same chess dataset.",
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
    modes: Jd
  },
  {
    id: "blog-2016",
    label: "1 · blog",
    year: "2016",
    caption: "2016 post as published / 2021 rewrite",
    blurb: "The same quarter of the circle, top right, from the same 2m tree.",
    knobs: { ...Dt },
    panels: [
      {
        id: "published",
        label: "2016, as published",
        note: "chess-dataviz 1.0.0: 0.5px white lines, moves in tree order, a chessboard over the hole.",
        knobs: { ...Jd[2].knobs, hole: 0, padAngle: 0, ringGap: 0 },
        crop: { x: -30, y: -350, size: 380 }
      },
      {
        id: "rewrite",
        label: "2021 rewrite",
        note: "Small gaps instead of lines, deepest lines first, a softer fade, slightly better colors.",
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
    knobs: { ...Dt, maxPly: 4 },
    controls: ["ply"]
  },
  {
    id: "prune",
    label: "3 · prune",
    year: "knob",
    caption: "Prune threshold",
    blurb: "Further prune on the already-cut 2m tree. 0.5% is the later default.",
    knobs: { ...Dt, pruneFraction: 5e-3 },
    controls: ["prune"]
  },
  {
    id: "radius-linear",
    label: "4 · linear r",
    year: "knob",
    caption: "Radius scale",
    blurb: "Same tree, same angles. Only the mapping from ring to radius changes.",
    knobs: { ...Dt, showSan: !1, center: "none" },
    panels: [
      {
        id: "linear",
        label: "linear",
        note: "Every ring equally thick, so the outer rings take most of the ink.",
        knobs: { radius: "linear" }
      },
      {
        id: "sqrt",
        label: "square root",
        note: "Every ring the same area; rings thin out toward the edge.",
        knobs: { radius: "sqrt" }
      },
      {
        id: "square",
        label: "square",
        note: "The mirror of square root: every ring thicker than the one inside it. If we wanted to highlight the leaves, this could be a better option.",
        knobs: { radius: "square" }
      }
    ]
  },
  {
    id: "separation",
    label: "4b · separation",
    year: "knob",
    caption: "Gaps and lines between slices",
    blurb: "Same 2m tree and 2016 knobs. Only the separation changes. The inset is the outer edge, magnified.",
    knobs: { ...Dt, ...Zd[0].knobs },
    modes: Zd,
    inset: { angle: 1.4, radius: 0.72, size: 80 }
  },
  {
    id: "palette",
    label: "4c · palette",
    year: "knob",
    caption: "Color",
    blurb: "Same 2m tree. Color carries the first move; rings alternate light and dark so the steps stay visible.",
    knobs: { ...Dt },
    modes: S3
  },
  {
    id: "shading",
    label: "4d · shading",
    year: "knob",
    caption: "Shading the rings",
    blurb: "Poster palette on the 2m tree. Odd rings are White's moves, even rings are Black's.",
    knobs: {
      ...Dt,
      palette: "poster",
      stroke: "black-hairline",
      strokeWidth: 0.1,
      padAngle: 0,
      ringGap: 1,
      depthFade: 0.3,
      showSan: !1,
      center: "none"
    },
    panels: k3
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
    modes: w3,
    defaultMode: "both"
  }
];
function _3(r, i) {
  const o = r.radius * i / 2, c = o * Math.sin(r.angle), u = -o * Math.cos(r.angle);
  return { x: c - r.size / 2, y: u - r.size / 2, size: r.size };
}
function D3({ stageId: r }) {
  var $, Y, ne, oe;
  const i = Hf.find((G) => G.id === r), [o, c] = Kn.useState(i == null ? void 0 : i.knobs), [u, f] = Kn.useState((i == null ? void 0 : i.defaultMode) ?? ((Y = ($ = i == null ? void 0 : i.modes) == null ? void 0 : $[0]) == null ? void 0 : Y.id)), h = (oe = (ne = i == null ? void 0 : i.modes) == null ? void 0 : ne.find((G) => G.id === u)) == null ? void 0 : oe.data, p = Kn.useMemo(() => {
    const G = h === "sample-2015" ? x3 : y3;
    return o ? v3(G, o) : G;
  }, [o, h]), m = Kn.useMemo(() => jf(p), [p]);
  if (!i || !o) return null;
  const g = o.background === "dark", v = i.controls ?? [], k = i.inset ? _3(i.inset, o.width) : void 0, S = i.modes ?? [], A = S.find((G) => G.id === u);
  function Q(G) {
    const Z = S.find((ue) => ue.id === G);
    !Z || !o || (f(G), c({ ...o, ...Z.knobs }));
  }
  return /* @__PURE__ */ b.jsxs(
    "div",
    {
      className: `openings-stage${g ? " openings-stage-dark" : ""}${i.panels ? " openings-stage-wide" : ""}`,
      children: [
        /* @__PURE__ */ b.jsx("div", { className: "viz-title", children: i.caption }),
        /* @__PURE__ */ b.jsx("div", { className: "viz-subtitle", children: i.blurb }),
        S.length > 0 && /* @__PURE__ */ b.jsx("div", { className: "openings-segmented", role: "group", "aria-label": i.caption, children: S.map((G) => /* @__PURE__ */ b.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": G.id === u,
            className: G.id === u ? "active" : "",
            onClick: () => Q(G.id),
            children: G.label
          },
          G.id
        )) }),
        i.panels ? /* @__PURE__ */ b.jsx("div", { className: "openings-panels", children: i.panels.map((G) => /* @__PURE__ */ b.jsxs("figure", { className: "openings-panel", children: [
          /* @__PURE__ */ b.jsx("figcaption", { className: "openings-panel-label", children: G.label }),
          /* @__PURE__ */ b.jsx(
            vl,
            {
              data: p,
              knobs: { ...o, ...G.knobs },
              crop: G.crop,
              dataset: h
            }
          ),
          /* @__PURE__ */ b.jsx("figcaption", { className: "openings-panel-note", children: G.note })
        ] }, G.id)) }) : k ? /* @__PURE__ */ b.jsxs("div", { className: "openings-with-inset", children: [
          /* @__PURE__ */ b.jsx(vl, { data: p, knobs: o, highlight: k, dataset: h }),
          /* @__PURE__ */ b.jsxs("figure", { className: "openings-inset", children: [
            /* @__PURE__ */ b.jsx(
              vl,
              {
                data: p,
                knobs: o,
                crop: k,
                dataset: h,
                className: "openings-sunburst openings-sunburst-inset"
              }
            ),
            /* @__PURE__ */ b.jsxs("figcaption", { children: [
              "outer edge, ×",
              Math.round(o.width / k.size)
            ] })
          ] })
        ] }) : /* @__PURE__ */ b.jsx(vl, { data: p, knobs: o, dataset: h }),
        A && /* @__PURE__ */ b.jsx("div", { className: "openings-mode-note", children: A.note }),
        v.length > 0 && /* @__PURE__ */ b.jsxs("div", { className: "openings-controls", children: [
          v.includes("ply") && /* @__PURE__ */ b.jsxs("label", { children: [
            "ply ",
            o.maxPly,
            /* @__PURE__ */ b.jsx(
              "input",
              {
                type: "range",
                min: 1,
                max: 10,
                value: o.maxPly,
                onChange: (G) => c({ ...o, maxPly: Number(G.target.value) })
              }
            )
          ] }),
          v.includes("prune") && /* @__PURE__ */ b.jsxs("label", { children: [
            "extra prune ",
            (o.pruneFraction * 100).toFixed(2),
            "%",
            /* @__PURE__ */ b.jsx(
              "input",
              {
                type: "range",
                min: 0,
                max: 50,
                value: Math.round(o.pruneFraction * 1e3),
                onChange: (G) => c({
                  ...o,
                  pruneFraction: Number(G.target.value) / 1e3
                })
              }
            )
          ] }),
          v.includes("hole") && /* @__PURE__ */ b.jsxs("label", { children: [
            "hole ",
            o.hole,
            /* @__PURE__ */ b.jsx(
              "input",
              {
                type: "range",
                min: 0,
                max: 160,
                value: o.hole,
                onChange: (G) => c({ ...o, hole: Number(G.target.value) })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ b.jsxs("div", { className: "viz-meta", children: [
          m.nodes,
          " nodes · ",
          m.leaves,
          " leaves · depth ",
          m.maxDepth,
          h === "sample-2015" ? "" : " · 2,197,113-game tree"
        ] })
      ]
    }
  );
}
const B3 = new Set(Hf.map((r) => r.id));
function ef() {
  document.querySelectorAll("[data-openings-stage]").forEach((r) => {
    const i = r.dataset.openingsStage;
    if (!B3.has(i)) return;
    const o = /* @__PURE__ */ b.jsx(D3, { stageId: i });
    r.firstElementChild ? vd.hydrateRoot(r, o) : vd.createRoot(r).render(o);
  });
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", ef) : ef();
