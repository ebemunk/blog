var Ra = { exports: {} }, Hr = {}, La = { exports: {} }, fe = {};
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
function Xp() {
  if (hd) return fe;
  hd = 1;
  var r = Symbol.for("react.element"), i = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), h = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), k = Symbol.iterator;
  function w(S) {
    return S === null || typeof S != "object" ? null : (S = k && S[k] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var C = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, G = Object.assign, F = {};
  function H(S, E, ie) {
    this.props = S, this.context = E, this.refs = F, this.updater = ie || C;
  }
  H.prototype.isReactComponent = {}, H.prototype.setState = function(S, E) {
    if (typeof S != "object" && typeof S != "function" && S != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, S, E, "setState");
  }, H.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function q() {
  }
  q.prototype = H.prototype;
  function oe(S, E, ie) {
    this.props = S, this.context = E, this.refs = F, this.updater = ie || C;
  }
  var K = oe.prototype = new q();
  K.constructor = oe, G(K, H.prototype), K.isPureReactComponent = !0;
  var J = Array.isArray, ue = Object.prototype.hasOwnProperty, ae = { current: null }, I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Z(S, E, ie) {
    var le, te = {}, de = null, ye = null;
    if (E != null) for (le in E.ref !== void 0 && (ye = E.ref), E.key !== void 0 && (de = "" + E.key), E) ue.call(E, le) && !I.hasOwnProperty(le) && (te[le] = E[le]);
    var me = arguments.length - 2;
    if (me === 1) te.children = ie;
    else if (1 < me) {
      for (var we = Array(me), Fe = 0; Fe < me; Fe++) we[Fe] = arguments[Fe + 2];
      te.children = we;
    }
    if (S && S.defaultProps) for (le in me = S.defaultProps, me) te[le] === void 0 && (te[le] = me[le]);
    return { $$typeof: r, type: S, key: de, ref: ye, props: te, _owner: ae.current };
  }
  function ce(S, E) {
    return { $$typeof: r, type: S.type, key: E, ref: S.ref, props: S.props, _owner: S._owner };
  }
  function pe(S) {
    return typeof S == "object" && S !== null && S.$$typeof === r;
  }
  function A(S) {
    var E = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(ie) {
      return E[ie];
    });
  }
  var M = /\/+/g;
  function P(S, E) {
    return typeof S == "object" && S !== null && S.key != null ? A("" + S.key) : E.toString(36);
  }
  function $(S, E, ie, le, te) {
    var de = typeof S;
    (de === "undefined" || de === "boolean") && (S = null);
    var ye = !1;
    if (S === null) ye = !0;
    else switch (de) {
      case "string":
      case "number":
        ye = !0;
        break;
      case "object":
        switch (S.$$typeof) {
          case r:
          case i:
            ye = !0;
        }
    }
    if (ye) return ye = S, te = te(ye), S = le === "" ? "." + P(ye, 0) : le, J(te) ? (ie = "", S != null && (ie = S.replace(M, "$&/") + "/"), $(te, E, ie, "", function(Fe) {
      return Fe;
    })) : te != null && (pe(te) && (te = ce(te, ie + (!te.key || ye && ye.key === te.key ? "" : ("" + te.key).replace(M, "$&/") + "/") + S)), E.push(te)), 1;
    if (ye = 0, le = le === "" ? "." : le + ":", J(S)) for (var me = 0; me < S.length; me++) {
      de = S[me];
      var we = le + P(de, me);
      ye += $(de, E, ie, we, te);
    }
    else if (we = w(S), typeof we == "function") for (S = we.call(S), me = 0; !(de = S.next()).done; ) de = de.value, we = le + P(de, me++), ye += $(de, E, ie, we, te);
    else if (de === "object") throw E = String(S), Error("Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead.");
    return ye;
  }
  function he(S, E, ie) {
    if (S == null) return S;
    var le = [], te = 0;
    return $(S, le, "", "", function(de) {
      return E.call(ie, de, te++);
    }), le;
  }
  function ge(S) {
    if (S._status === -1) {
      var E = S._result;
      E = E(), E.then(function(ie) {
        (S._status === 0 || S._status === -1) && (S._status = 1, S._result = ie);
      }, function(ie) {
        (S._status === 0 || S._status === -1) && (S._status = 2, S._result = ie);
      }), S._status === -1 && (S._status = 0, S._result = E);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var se = { current: null }, T = { transition: null }, j = { ReactCurrentDispatcher: se, ReactCurrentBatchConfig: T, ReactCurrentOwner: ae };
  function R() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return fe.Children = { map: he, forEach: function(S, E, ie) {
    he(S, function() {
      E.apply(this, arguments);
    }, ie);
  }, count: function(S) {
    var E = 0;
    return he(S, function() {
      E++;
    }), E;
  }, toArray: function(S) {
    return he(S, function(E) {
      return E;
    }) || [];
  }, only: function(S) {
    if (!pe(S)) throw Error("React.Children.only expected to receive a single React element child.");
    return S;
  } }, fe.Component = H, fe.Fragment = o, fe.Profiler = u, fe.PureComponent = oe, fe.StrictMode = s, fe.Suspense = m, fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j, fe.act = R, fe.cloneElement = function(S, E, ie) {
    if (S == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
    var le = G({}, S.props), te = S.key, de = S.ref, ye = S._owner;
    if (E != null) {
      if (E.ref !== void 0 && (de = E.ref, ye = ae.current), E.key !== void 0 && (te = "" + E.key), S.type && S.type.defaultProps) var me = S.type.defaultProps;
      for (we in E) ue.call(E, we) && !I.hasOwnProperty(we) && (le[we] = E[we] === void 0 && me !== void 0 ? me[we] : E[we]);
    }
    var we = arguments.length - 2;
    if (we === 1) le.children = ie;
    else if (1 < we) {
      me = Array(we);
      for (var Fe = 0; Fe < we; Fe++) me[Fe] = arguments[Fe + 2];
      le.children = me;
    }
    return { $$typeof: r, type: S.type, key: te, ref: de, props: le, _owner: ye };
  }, fe.createContext = function(S) {
    return S = { $$typeof: h, _currentValue: S, _currentValue2: S, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, S.Provider = { $$typeof: f, _context: S }, S.Consumer = S;
  }, fe.createElement = Z, fe.createFactory = function(S) {
    var E = Z.bind(null, S);
    return E.type = S, E;
  }, fe.createRef = function() {
    return { current: null };
  }, fe.forwardRef = function(S) {
    return { $$typeof: p, render: S };
  }, fe.isValidElement = pe, fe.lazy = function(S) {
    return { $$typeof: v, _payload: { _status: -1, _result: S }, _init: ge };
  }, fe.memo = function(S, E) {
    return { $$typeof: g, type: S, compare: E === void 0 ? null : E };
  }, fe.startTransition = function(S) {
    var E = T.transition;
    T.transition = {};
    try {
      S();
    } finally {
      T.transition = E;
    }
  }, fe.unstable_act = R, fe.useCallback = function(S, E) {
    return se.current.useCallback(S, E);
  }, fe.useContext = function(S) {
    return se.current.useContext(S);
  }, fe.useDebugValue = function() {
  }, fe.useDeferredValue = function(S) {
    return se.current.useDeferredValue(S);
  }, fe.useEffect = function(S, E) {
    return se.current.useEffect(S, E);
  }, fe.useId = function() {
    return se.current.useId();
  }, fe.useImperativeHandle = function(S, E, ie) {
    return se.current.useImperativeHandle(S, E, ie);
  }, fe.useInsertionEffect = function(S, E) {
    return se.current.useInsertionEffect(S, E);
  }, fe.useLayoutEffect = function(S, E) {
    return se.current.useLayoutEffect(S, E);
  }, fe.useMemo = function(S, E) {
    return se.current.useMemo(S, E);
  }, fe.useReducer = function(S, E, ie) {
    return se.current.useReducer(S, E, ie);
  }, fe.useRef = function(S) {
    return se.current.useRef(S);
  }, fe.useState = function(S) {
    return se.current.useState(S);
  }, fe.useSyncExternalStore = function(S, E, ie) {
    return se.current.useSyncExternalStore(S, E, ie);
  }, fe.useTransition = function() {
    return se.current.useTransition();
  }, fe.version = "18.3.1", fe;
}
var pd;
function ls() {
  return pd || (pd = 1, La.exports = Xp()), La.exports;
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
function Yp() {
  if (gd) return Hr;
  gd = 1;
  var r = ls(), i = Symbol.for("react.element"), o = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, u = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(p, m, g) {
    var v, k = {}, w = null, C = null;
    g !== void 0 && (w = "" + g), m.key !== void 0 && (w = "" + m.key), m.ref !== void 0 && (C = m.ref);
    for (v in m) s.call(m, v) && !f.hasOwnProperty(v) && (k[v] = m[v]);
    if (p && p.defaultProps) for (v in m = p.defaultProps, m) k[v] === void 0 && (k[v] = m[v]);
    return { $$typeof: i, type: p, key: w, ref: C, props: k, _owner: u.current };
  }
  return Hr.Fragment = o, Hr.jsx = h, Hr.jsxs = h, Hr;
}
var md;
function qp() {
  return md || (md = 1, Ra.exports = Yp()), Ra.exports;
}
var b = qp(), hl = {}, Fa = { exports: {} }, Je = {}, $a = { exports: {} }, Ga = {};
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
function Zp() {
  return Nd || (Nd = 1, (function(r) {
    function i(T, j) {
      var R = T.length;
      T.push(j);
      e: for (; 0 < R; ) {
        var S = R - 1 >>> 1, E = T[S];
        if (0 < u(E, j)) T[S] = j, T[R] = E, R = S;
        else break e;
      }
    }
    function o(T) {
      return T.length === 0 ? null : T[0];
    }
    function s(T) {
      if (T.length === 0) return null;
      var j = T[0], R = T.pop();
      if (R !== j) {
        T[0] = R;
        e: for (var S = 0, E = T.length, ie = E >>> 1; S < ie; ) {
          var le = 2 * (S + 1) - 1, te = T[le], de = le + 1, ye = T[de];
          if (0 > u(te, R)) de < E && 0 > u(ye, te) ? (T[S] = ye, T[de] = R, S = de) : (T[S] = te, T[le] = R, S = le);
          else if (de < E && 0 > u(ye, R)) T[S] = ye, T[de] = R, S = de;
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
    var m = [], g = [], v = 1, k = null, w = 3, C = !1, G = !1, F = !1, H = typeof setTimeout == "function" ? setTimeout : null, q = typeof clearTimeout == "function" ? clearTimeout : null, oe = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function K(T) {
      for (var j = o(g); j !== null; ) {
        if (j.callback === null) s(g);
        else if (j.startTime <= T) s(g), j.sortIndex = j.expirationTime, i(m, j);
        else break;
        j = o(g);
      }
    }
    function J(T) {
      if (F = !1, K(T), !G) if (o(m) !== null) G = !0, ge(ue);
      else {
        var j = o(g);
        j !== null && se(J, j.startTime - T);
      }
    }
    function ue(T, j) {
      G = !1, F && (F = !1, q(Z), Z = -1), C = !0;
      var R = w;
      try {
        for (K(j), k = o(m); k !== null && (!(k.expirationTime > j) || T && !A()); ) {
          var S = k.callback;
          if (typeof S == "function") {
            k.callback = null, w = k.priorityLevel;
            var E = S(k.expirationTime <= j);
            j = r.unstable_now(), typeof E == "function" ? k.callback = E : k === o(m) && s(m), K(j);
          } else s(m);
          k = o(m);
        }
        if (k !== null) var ie = !0;
        else {
          var le = o(g);
          le !== null && se(J, le.startTime - j), ie = !1;
        }
        return ie;
      } finally {
        k = null, w = R, C = !1;
      }
    }
    var ae = !1, I = null, Z = -1, ce = 5, pe = -1;
    function A() {
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
      var $ = new MessageChannel(), he = $.port2;
      $.port1.onmessage = M, P = function() {
        he.postMessage(null);
      };
    } else P = function() {
      H(M, 0);
    };
    function ge(T) {
      I = T, ae || (ae = !0, P());
    }
    function se(T, j) {
      Z = H(function() {
        T(r.unstable_now());
      }, j);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(T) {
      T.callback = null;
    }, r.unstable_continueExecution = function() {
      G || C || (G = !0, ge(ue));
    }, r.unstable_forceFrameRate = function(T) {
      0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ce = 0 < T ? Math.floor(1e3 / T) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, r.unstable_getFirstCallbackNode = function() {
      return o(m);
    }, r.unstable_next = function(T) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = w;
      }
      var R = w;
      w = j;
      try {
        return T();
      } finally {
        w = R;
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
      var R = w;
      w = T;
      try {
        return j();
      } finally {
        w = R;
      }
    }, r.unstable_scheduleCallback = function(T, j, R) {
      var S = r.unstable_now();
      switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? S + R : S) : R = S, T) {
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
      return E = R + E, T = { id: v++, callback: j, priorityLevel: T, startTime: R, expirationTime: E, sortIndex: -1 }, R > S ? (T.sortIndex = R, i(g, T), o(m) === null && T === o(g) && (F ? (q(Z), Z = -1) : F = !0, se(J, R - S))) : (T.sortIndex = E, i(m, T), G || C || (G = !0, ge(ue))), T;
    }, r.unstable_shouldYield = A, r.unstable_wrapCallback = function(T) {
      var j = w;
      return function() {
        var R = w;
        w = j;
        try {
          return T.apply(this, arguments);
        } finally {
          w = R;
        }
      };
    };
  })(Ga)), Ga;
}
var vd;
function Jp() {
  return vd || (vd = 1, $a.exports = Zp()), $a.exports;
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
function bp() {
  if (yd) return Je;
  yd = 1;
  var r = ls(), i = Jp();
  function o(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var s = /* @__PURE__ */ new Set(), u = {};
  function f(e, n) {
    h(e, n), h(e + "Capture", n);
  }
  function h(e, n) {
    for (u[e] = n, e = 0; e < n.length; e++) s.add(n[e]);
  }
  var p = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), m = Object.prototype.hasOwnProperty, g = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, k = {};
  function w(e) {
    return m.call(k, e) ? !0 : m.call(v, e) ? !1 : g.test(e) ? k[e] = !0 : (v[e] = !0, !1);
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
  function G(e, n, t, l) {
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
  function F(e, n, t, l, a, c, d) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = l, this.attributeNamespace = a, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = c, this.removeEmptyString = d;
  }
  var H = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    H[e] = new F(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    H[n] = new F(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    H[e] = new F(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    H[e] = new F(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    H[e] = new F(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    H[e] = new F(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    H[e] = new F(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    H[e] = new F(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    H[e] = new F(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
    H[n] = new F(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(q, oe);
    H[n] = new F(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(q, oe);
    H[n] = new F(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    H[e] = new F(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), H.xlinkHref = new F("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    H[e] = new F(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function K(e, n, t, l) {
    var a = H.hasOwnProperty(n) ? H[n] : null;
    (a !== null ? a.type !== 0 : l || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (G(n, t, a, l) && (t = null), l || a === null ? w(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : a.mustUseProperty ? e[a.propertyName] = t === null ? a.type === 3 ? !1 : "" : t : (n = a.attributeName, l = a.attributeNamespace, t === null ? e.removeAttribute(n) : (a = a.type, t = a === 3 || a === 4 && t === !0 ? "" : "" + t, l ? e.setAttributeNS(l, n, t) : e.setAttribute(n, t))));
  }
  var J = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ue = Symbol.for("react.element"), ae = Symbol.for("react.portal"), I = Symbol.for("react.fragment"), Z = Symbol.for("react.strict_mode"), ce = Symbol.for("react.profiler"), pe = Symbol.for("react.provider"), A = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), he = Symbol.for("react.memo"), ge = Symbol.for("react.lazy"), se = Symbol.for("react.offscreen"), T = Symbol.iterator;
  function j(e) {
    return e === null || typeof e != "object" ? null : (e = T && e[T] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var R = Object.assign, S;
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
`), c = l.stack.split(`
`), d = a.length - 1, N = c.length - 1; 1 <= d && 0 <= N && a[d] !== c[N]; ) N--;
        for (; 1 <= d && 0 <= N; d--, N--) if (a[d] !== c[N]) {
          if (d !== 1 || N !== 1)
            do
              if (d--, N--, 0 > N || a[d] !== c[N]) {
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
    return (e = e ? e.displayName || e.name : "") ? E(e) : "";
  }
  function te(e) {
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
        return e = le(e.type, !1), e;
      case 11:
        return e = le(e.type.render, !1), e;
      case 1:
        return e = le(e.type, !0), e;
      default:
        return "";
    }
  }
  function de(e) {
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
      case Z:
        return "StrictMode";
      case P:
        return "Suspense";
      case $:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case A:
        return (e.displayName || "Context") + ".Consumer";
      case pe:
        return (e._context.displayName || "Context") + ".Provider";
      case M:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case he:
        return n = e.displayName || null, n !== null ? n : de(e.type) || "Memo";
      case ge:
        n = e._payload, e = e._init;
        try {
          return de(e(n));
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
        return de(n);
      case 8:
        return n === Z ? "StrictMode" : "Mode";
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
      var a = t.get, c = t.set;
      return Object.defineProperty(e, n, { configurable: !0, get: function() {
        return a.call(this);
      }, set: function(d) {
        l = "" + d, c.call(this, d);
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
  function ys(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(), l = "";
    return e && (l = we(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== t ? (n.setValue(e), !0) : !1;
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
    return R({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
  }
  function xs(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue, l = n.checked != null ? n.checked : n.defaultChecked;
    t = me(n.value != null ? n.value : t), e._wrapperState = { initialChecked: l, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
  }
  function ws(e, n) {
    n = n.checked, n != null && K(e, "checked", n, !1);
  }
  function jl(e, n) {
    ws(e, n);
    var t = me(n.value), l = n.type;
    if (t != null) l === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (l === "submit" || l === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value") ? Ul(e, n.type, t) : n.hasOwnProperty("defaultValue") && Ul(e, n.type, me(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
  }
  function Ss(e, n, t) {
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
  function Hl(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(o(91));
    return R({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function ks(e, n) {
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
  function _s(e, n) {
    var t = me(n.value), l = me(n.defaultValue);
    t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), l != null && (e.defaultValue = "" + l);
  }
  function Ds(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
  }
  function Bs(e) {
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
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Bs(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var li, Cs = (function(e) {
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
  }, Jf = ["Webkit", "ms", "Moz", "O"];
  Object.keys(cr).forEach(function(e) {
    Jf.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), cr[n] = cr[e];
    });
  });
  function Es(e, n, t) {
    return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || cr.hasOwnProperty(e) && cr[e] ? ("" + n).trim() : n + "px";
  }
  function As(e, n) {
    e = e.style;
    for (var t in n) if (n.hasOwnProperty(t)) {
      var l = t.indexOf("--") === 0, a = Es(t, n[t], l);
      t === "float" && (t = "cssFloat"), l ? e.setProperty(t, a) : e[t] = a;
    }
  }
  var bf = R({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Xl(e, n) {
    if (n) {
      if (bf[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(o(137, e));
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
  var Jl = null, Pt = null, zt = null;
  function Ms(e) {
    if (e = Vr(e)) {
      if (typeof Jl != "function") throw Error(o(280));
      var n = e.stateNode;
      n && (n = Ei(n), Jl(e.stateNode, e.type, n));
    }
  }
  function Vs(e) {
    Pt ? zt ? zt.push(e) : zt = [e] : Pt = e;
  }
  function Ps() {
    if (Pt) {
      var e = Pt, n = zt;
      if (zt = Pt = null, Ms(e), n) for (e = 0; e < n.length; e++) Ms(n[e]);
    }
  }
  function zs(e, n) {
    return e(n);
  }
  function Os() {
  }
  var bl = !1;
  function Ts(e, n, t) {
    if (bl) return e(n, t);
    bl = !0;
    try {
      return zs(e, n, t);
    } finally {
      bl = !1, (Pt !== null || zt !== null) && (Os(), Ps());
    }
  }
  function ur(e, n) {
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
    var dr = {};
    Object.defineProperty(dr, "passive", { get: function() {
      eo = !0;
    } }), window.addEventListener("test", dr, dr), window.removeEventListener("test", dr, dr);
  } catch {
    eo = !1;
  }
  function eh(e, n, t, l, a, c, d, N, y) {
    var B = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, B);
    } catch (z) {
      this.onError(z);
    }
  }
  var fr = !1, oi = null, ai = !1, no = null, nh = { onError: function(e) {
    fr = !0, oi = e;
  } };
  function th(e, n, t, l, a, c, d, N, y) {
    fr = !1, oi = null, eh.apply(nh, arguments);
  }
  function rh(e, n, t, l, a, c, d, N, y) {
    if (th.apply(this, arguments), fr) {
      if (fr) {
        var B = oi;
        fr = !1, oi = null;
      } else throw Error(o(198));
      ai || (ai = !0, no = B);
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
  function Is(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function Rs(e) {
    if (dt(e) !== e) throw Error(o(188));
  }
  function ih(e) {
    var n = e.alternate;
    if (!n) {
      if (n = dt(e), n === null) throw Error(o(188));
      return n !== e ? null : e;
    }
    for (var t = e, l = n; ; ) {
      var a = t.return;
      if (a === null) break;
      var c = a.alternate;
      if (c === null) {
        if (l = a.return, l !== null) {
          t = l;
          continue;
        }
        break;
      }
      if (a.child === c.child) {
        for (c = a.child; c; ) {
          if (c === t) return Rs(a), e;
          if (c === l) return Rs(a), n;
          c = c.sibling;
        }
        throw Error(o(188));
      }
      if (t.return !== l.return) t = a, l = c;
      else {
        for (var d = !1, N = a.child; N; ) {
          if (N === t) {
            d = !0, t = a, l = c;
            break;
          }
          if (N === l) {
            d = !0, l = a, t = c;
            break;
          }
          N = N.sibling;
        }
        if (!d) {
          for (N = c.child; N; ) {
            if (N === t) {
              d = !0, t = c, l = a;
              break;
            }
            if (N === l) {
              d = !0, l = c, t = a;
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
  function Ls(e) {
    return e = ih(e), e !== null ? Fs(e) : null;
  }
  function Fs(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var n = Fs(e);
      if (n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var $s = i.unstable_scheduleCallback, Gs = i.unstable_cancelCallback, lh = i.unstable_shouldYield, oh = i.unstable_requestPaint, Ae = i.unstable_now, ah = i.unstable_getCurrentPriorityLevel, to = i.unstable_ImmediatePriority, Ks = i.unstable_UserBlockingPriority, si = i.unstable_NormalPriority, sh = i.unstable_LowPriority, Qs = i.unstable_IdlePriority, ci = null, kn = null;
  function ch(e) {
    if (kn && typeof kn.onCommitFiberRoot == "function") try {
      kn.onCommitFiberRoot(ci, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var fn = Math.clz32 ? Math.clz32 : fh, uh = Math.log, dh = Math.LN2;
  function fh(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (uh(e) / dh | 0) | 0;
  }
  var ui = 64, di = 4194304;
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
  function fi(e, n) {
    var t = e.pendingLanes;
    if (t === 0) return 0;
    var l = 0, a = e.suspendedLanes, c = e.pingedLanes, d = t & 268435455;
    if (d !== 0) {
      var N = d & ~a;
      N !== 0 ? l = hr(N) : (c &= d, c !== 0 && (l = hr(c)));
    } else d = t & ~a, d !== 0 ? l = hr(d) : c !== 0 && (l = hr(c));
    if (l === 0) return 0;
    if (n !== 0 && n !== l && (n & a) === 0 && (a = l & -l, c = n & -n, a >= c || a === 16 && (c & 4194240) !== 0)) return n;
    if ((l & 4) !== 0 && (l |= t & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= l; 0 < n; ) t = 31 - fn(n), a = 1 << t, l |= e[t], n &= ~a;
    return l;
  }
  function hh(e, n) {
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
  function ph(e, n) {
    for (var t = e.suspendedLanes, l = e.pingedLanes, a = e.expirationTimes, c = e.pendingLanes; 0 < c; ) {
      var d = 31 - fn(c), N = 1 << d, y = a[d];
      y === -1 ? ((N & t) === 0 || (N & l) !== 0) && (a[d] = hh(N, n)) : y <= n && (e.expiredLanes |= N), c &= ~N;
    }
  }
  function ro(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function js() {
    var e = ui;
    return ui <<= 1, (ui & 4194240) === 0 && (ui = 64), e;
  }
  function io(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n;
  }
  function pr(e, n, t) {
    e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - fn(n), e[n] = t;
  }
  function gh(e, n) {
    var t = e.pendingLanes & ~n;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
    var l = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var a = 31 - fn(t), c = 1 << a;
      n[a] = 0, l[a] = -1, e[a] = -1, t &= ~c;
    }
  }
  function lo(e, n) {
    var t = e.entangledLanes |= n;
    for (e = e.entanglements; t; ) {
      var l = 31 - fn(t), a = 1 << l;
      a & n | e[l] & n && (e[l] |= n), t &= ~a;
    }
  }
  var xe = 0;
  function Us(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Hs, oo, Ws, Xs, Ys, ao = !1, hi = [], jn = null, Un = null, Hn = null, gr = /* @__PURE__ */ new Map(), mr = /* @__PURE__ */ new Map(), Wn = [], mh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function qs(e, n) {
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
  function Nr(e, n, t, l, a, c) {
    return e === null || e.nativeEvent !== c ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: l, nativeEvent: c, targetContainers: [a] }, n !== null && (n = Vr(n), n !== null && oo(n)), e) : (e.eventSystemFlags |= l, n = e.targetContainers, a !== null && n.indexOf(a) === -1 && n.push(a), e);
  }
  function Nh(e, n, t, l, a) {
    switch (n) {
      case "focusin":
        return jn = Nr(jn, e, n, t, l, a), !0;
      case "dragenter":
        return Un = Nr(Un, e, n, t, l, a), !0;
      case "mouseover":
        return Hn = Nr(Hn, e, n, t, l, a), !0;
      case "pointerover":
        var c = a.pointerId;
        return gr.set(c, Nr(gr.get(c) || null, e, n, t, l, a)), !0;
      case "gotpointercapture":
        return c = a.pointerId, mr.set(c, Nr(mr.get(c) || null, e, n, t, l, a)), !0;
    }
    return !1;
  }
  function Zs(e) {
    var n = ft(e.target);
    if (n !== null) {
      var t = dt(n);
      if (t !== null) {
        if (n = t.tag, n === 13) {
          if (n = Is(t), n !== null) {
            e.blockedOn = n, Ys(e.priority, function() {
              Ws(t);
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
      var t = co(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var l = new t.constructor(t.type, t);
        ql = l, t.target.dispatchEvent(l), ql = null;
      } else return n = Vr(t), n !== null && oo(n), e.blockedOn = t, !1;
      n.shift();
    }
    return !0;
  }
  function Js(e, n, t) {
    pi(e) && t.delete(n);
  }
  function vh() {
    ao = !1, jn !== null && pi(jn) && (jn = null), Un !== null && pi(Un) && (Un = null), Hn !== null && pi(Hn) && (Hn = null), gr.forEach(Js), mr.forEach(Js);
  }
  function vr(e, n) {
    e.blockedOn === n && (e.blockedOn = null, ao || (ao = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, vh)));
  }
  function yr(e) {
    function n(a) {
      return vr(a, e);
    }
    if (0 < hi.length) {
      vr(hi[0], e);
      for (var t = 1; t < hi.length; t++) {
        var l = hi[t];
        l.blockedOn === e && (l.blockedOn = null);
      }
    }
    for (jn !== null && vr(jn, e), Un !== null && vr(Un, e), Hn !== null && vr(Hn, e), gr.forEach(n), mr.forEach(n), t = 0; t < Wn.length; t++) l = Wn[t], l.blockedOn === e && (l.blockedOn = null);
    for (; 0 < Wn.length && (t = Wn[0], t.blockedOn === null); ) Zs(t), t.blockedOn === null && Wn.shift();
  }
  var Ot = J.ReactCurrentBatchConfig, gi = !0;
  function yh(e, n, t, l) {
    var a = xe, c = Ot.transition;
    Ot.transition = null;
    try {
      xe = 1, so(e, n, t, l);
    } finally {
      xe = a, Ot.transition = c;
    }
  }
  function xh(e, n, t, l) {
    var a = xe, c = Ot.transition;
    Ot.transition = null;
    try {
      xe = 4, so(e, n, t, l);
    } finally {
      xe = a, Ot.transition = c;
    }
  }
  function so(e, n, t, l) {
    if (gi) {
      var a = co(e, n, t, l);
      if (a === null) Co(e, n, l, mi, t), qs(e, l);
      else if (Nh(a, e, n, t, l)) l.stopPropagation();
      else if (qs(e, l), n & 4 && -1 < mh.indexOf(e)) {
        for (; a !== null; ) {
          var c = Vr(a);
          if (c !== null && Hs(c), c = co(e, n, t, l), c === null && Co(e, n, l, mi, t), c === a) break;
          a = c;
        }
        a !== null && l.stopPropagation();
      } else Co(e, n, l, null, t);
    }
  }
  var mi = null;
  function co(e, n, t, l) {
    if (mi = null, e = Zl(l), e = ft(e), e !== null) if (n = dt(e), n === null) e = null;
    else if (t = n.tag, t === 13) {
      if (e = Is(n), e !== null) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
    return mi = e, null;
  }
  function bs(e) {
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
        switch (ah()) {
          case to:
            return 1;
          case Ks:
            return 4;
          case si:
          case sh:
            return 16;
          case Qs:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Xn = null, uo = null, Ni = null;
  function ec() {
    if (Ni) return Ni;
    var e, n = uo, t = n.length, l, a = "value" in Xn ? Xn.value : Xn.textContent, c = a.length;
    for (e = 0; e < t && n[e] === a[e]; e++) ;
    var d = t - e;
    for (l = 1; l <= d && n[t - l] === a[c - l]; l++) ;
    return Ni = a.slice(e, 1 < l ? 1 - l : void 0);
  }
  function vi(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function yi() {
    return !0;
  }
  function nc() {
    return !1;
  }
  function nn(e) {
    function n(t, l, a, c, d) {
      this._reactName = t, this._targetInst = a, this.type = l, this.nativeEvent = c, this.target = d, this.currentTarget = null;
      for (var N in e) e.hasOwnProperty(N) && (t = e[N], this[N] = t ? t(c) : c[N]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? yi : nc, this.isPropagationStopped = nc, this;
    }
    return R(n.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var t = this.nativeEvent;
      t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = yi);
    }, stopPropagation: function() {
      var t = this.nativeEvent;
      t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = yi);
    }, persist: function() {
    }, isPersistent: yi }), n;
  }
  var Tt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, fo = nn(Tt), xr = R({}, Tt, { view: 0, detail: 0 }), wh = nn(xr), ho, po, wr, xi = R({}, xr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: mo, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== wr && (wr && e.type === "mousemove" ? (ho = e.screenX - wr.screenX, po = e.screenY - wr.screenY) : po = ho = 0, wr = e), ho);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : po;
  } }), tc = nn(xi), Sh = R({}, xi, { dataTransfer: 0 }), kh = nn(Sh), _h = R({}, xr, { relatedTarget: 0 }), go = nn(_h), Dh = R({}, Tt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Bh = nn(Dh), Ch = R({}, Tt, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Eh = nn(Ch), Ah = R({}, Tt, { data: 0 }), rc = nn(Ah), Mh = {
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
  }, Vh = {
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
  }, Ph = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function zh(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = Ph[e]) ? !!n[e] : !1;
  }
  function mo() {
    return zh;
  }
  var Oh = R({}, xr, { key: function(e) {
    if (e.key) {
      var n = Mh[e.key] || e.key;
      if (n !== "Unidentified") return n;
    }
    return e.type === "keypress" ? (e = vi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Vh[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: mo, charCode: function(e) {
    return e.type === "keypress" ? vi(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? vi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Th = nn(Oh), Ih = R({}, xi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ic = nn(Ih), Rh = R({}, xr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: mo }), Lh = nn(Rh), Fh = R({}, Tt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), $h = nn(Fh), Gh = R({}, xi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Kh = nn(Gh), Qh = [9, 13, 27, 32], No = p && "CompositionEvent" in window, Sr = null;
  p && "documentMode" in document && (Sr = document.documentMode);
  var jh = p && "TextEvent" in window && !Sr, lc = p && (!No || Sr && 8 < Sr && 11 >= Sr), oc = " ", ac = !1;
  function sc(e, n) {
    switch (e) {
      case "keyup":
        return Qh.indexOf(n.keyCode) !== -1;
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
  function cc(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var It = !1;
  function Uh(e, n) {
    switch (e) {
      case "compositionend":
        return cc(n);
      case "keypress":
        return n.which !== 32 ? null : (ac = !0, oc);
      case "textInput":
        return e = n.data, e === oc && ac ? null : e;
      default:
        return null;
    }
  }
  function Hh(e, n) {
    if (It) return e === "compositionend" || !No && sc(e, n) ? (e = ec(), Ni = uo = Xn = null, It = !1, e) : null;
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
        return lc && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Wh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function uc(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Wh[e.type] : n === "textarea";
  }
  function dc(e, n, t, l) {
    Vs(l), n = Di(n, "onChange"), 0 < n.length && (t = new fo("onChange", "change", null, t, l), e.push({ event: t, listeners: n }));
  }
  var kr = null, _r = null;
  function Xh(e) {
    Ac(e, 0);
  }
  function wi(e) {
    var n = Gt(e);
    if (ys(n)) return e;
  }
  function Yh(e, n) {
    if (e === "change") return n;
  }
  var fc = !1;
  if (p) {
    var vo;
    if (p) {
      var yo = "oninput" in document;
      if (!yo) {
        var hc = document.createElement("div");
        hc.setAttribute("oninput", "return;"), yo = typeof hc.oninput == "function";
      }
      vo = yo;
    } else vo = !1;
    fc = vo && (!document.documentMode || 9 < document.documentMode);
  }
  function pc() {
    kr && (kr.detachEvent("onpropertychange", gc), _r = kr = null);
  }
  function gc(e) {
    if (e.propertyName === "value" && wi(_r)) {
      var n = [];
      dc(n, _r, e, Zl(e)), Ts(Xh, n);
    }
  }
  function qh(e, n, t) {
    e === "focusin" ? (pc(), kr = n, _r = t, kr.attachEvent("onpropertychange", gc)) : e === "focusout" && pc();
  }
  function Zh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return wi(_r);
  }
  function Jh(e, n) {
    if (e === "click") return wi(n);
  }
  function bh(e, n) {
    if (e === "input" || e === "change") return wi(n);
  }
  function ep(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var hn = typeof Object.is == "function" ? Object.is : ep;
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
  function mc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Nc(e, n) {
    var t = mc(e);
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
      t = mc(t);
    }
  }
  function vc(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? vc(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function yc() {
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
  function np(e) {
    var n = yc(), t = e.focusedElem, l = e.selectionRange;
    if (n !== t && t && t.ownerDocument && vc(t.ownerDocument.documentElement, t)) {
      if (l !== null && xo(t)) {
        if (n = l.start, e = l.end, e === void 0 && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
        else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var a = t.textContent.length, c = Math.min(l.start, a);
          l = l.end === void 0 ? c : Math.min(l.end, a), !e.extend && c > l && (a = l, l = c, c = a), a = Nc(t, c);
          var d = Nc(
            t,
            l
          );
          a && d && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== d.node || e.focusOffset !== d.offset) && (n = n.createRange(), n.setStart(a.node, a.offset), e.removeAllRanges(), c > l ? (e.addRange(n), e.extend(d.node, d.offset)) : (n.setEnd(d.node, d.offset), e.addRange(n)));
        }
      }
      for (n = [], e = t; e = e.parentNode; ) e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++) e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var tp = p && "documentMode" in document && 11 >= document.documentMode, Rt = null, wo = null, Br = null, So = !1;
  function xc(e, n, t) {
    var l = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    So || Rt == null || Rt !== ii(l) || (l = Rt, "selectionStart" in l && xo(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), Br && Dr(Br, l) || (Br = l, l = Di(wo, "onSelect"), 0 < l.length && (n = new fo("onSelect", "select", null, n, t), e.push({ event: n, listeners: l }), n.target = Rt)));
  }
  function Si(e, n) {
    var t = {};
    return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
  }
  var Lt = { animationend: Si("Animation", "AnimationEnd"), animationiteration: Si("Animation", "AnimationIteration"), animationstart: Si("Animation", "AnimationStart"), transitionend: Si("Transition", "TransitionEnd") }, ko = {}, wc = {};
  p && (wc = document.createElement("div").style, "AnimationEvent" in window || (delete Lt.animationend.animation, delete Lt.animationiteration.animation, delete Lt.animationstart.animation), "TransitionEvent" in window || delete Lt.transitionend.transition);
  function ki(e) {
    if (ko[e]) return ko[e];
    if (!Lt[e]) return e;
    var n = Lt[e], t;
    for (t in n) if (n.hasOwnProperty(t) && t in wc) return ko[e] = n[t];
    return e;
  }
  var Sc = ki("animationend"), kc = ki("animationiteration"), _c = ki("animationstart"), Dc = ki("transitionend"), Bc = /* @__PURE__ */ new Map(), Cc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Yn(e, n) {
    Bc.set(e, n), f(n, [e]);
  }
  for (var _o = 0; _o < Cc.length; _o++) {
    var Do = Cc[_o], rp = Do.toLowerCase(), ip = Do[0].toUpperCase() + Do.slice(1);
    Yn(rp, "on" + ip);
  }
  Yn(Sc, "onAnimationEnd"), Yn(kc, "onAnimationIteration"), Yn(_c, "onAnimationStart"), Yn("dblclick", "onDoubleClick"), Yn("focusin", "onFocus"), Yn("focusout", "onBlur"), Yn(Dc, "onTransitionEnd"), h("onMouseEnter", ["mouseout", "mouseover"]), h("onMouseLeave", ["mouseout", "mouseover"]), h("onPointerEnter", ["pointerout", "pointerover"]), h("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Cr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), lp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));
  function Ec(e, n, t) {
    var l = e.type || "unknown-event";
    e.currentTarget = t, rh(l, n, void 0, e), e.currentTarget = null;
  }
  function Ac(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var l = e[t], a = l.event;
      l = l.listeners;
      e: {
        var c = void 0;
        if (n) for (var d = l.length - 1; 0 <= d; d--) {
          var N = l[d], y = N.instance, B = N.currentTarget;
          if (N = N.listener, y !== c && a.isPropagationStopped()) break e;
          Ec(a, N, B), c = y;
        }
        else for (d = 0; d < l.length; d++) {
          if (N = l[d], y = N.instance, B = N.currentTarget, N = N.listener, y !== c && a.isPropagationStopped()) break e;
          Ec(a, N, B), c = y;
        }
      }
    }
    if (ai) throw e = no, ai = !1, no = null, e;
  }
  function ke(e, n) {
    var t = n[zo];
    t === void 0 && (t = n[zo] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    t.has(l) || (Mc(n, e, 2, !1), t.add(l));
  }
  function Bo(e, n, t) {
    var l = 0;
    n && (l |= 4), Mc(t, e, l, n);
  }
  var _i = "_reactListening" + Math.random().toString(36).slice(2);
  function Er(e) {
    if (!e[_i]) {
      e[_i] = !0, s.forEach(function(t) {
        t !== "selectionchange" && (lp.has(t) || Bo(t, !1, e), Bo(t, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[_i] || (n[_i] = !0, Bo("selectionchange", !1, n));
    }
  }
  function Mc(e, n, t, l) {
    switch (bs(n)) {
      case 1:
        var a = yh;
        break;
      case 4:
        a = xh;
        break;
      default:
        a = so;
    }
    t = a.bind(null, n, t, e), a = void 0, !eo || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (a = !0), l ? a !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: a }) : e.addEventListener(n, t, !0) : a !== void 0 ? e.addEventListener(n, t, { passive: a }) : e.addEventListener(n, t, !1);
  }
  function Co(e, n, t, l, a) {
    var c = l;
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
            l = c = d;
            continue e;
          }
          N = N.parentNode;
        }
      }
      l = l.return;
    }
    Ts(function() {
      var B = c, z = Zl(t), O = [];
      e: {
        var V = Bc.get(e);
        if (V !== void 0) {
          var Q = fo, W = e;
          switch (e) {
            case "keypress":
              if (vi(t) === 0) break e;
            case "keydown":
            case "keyup":
              Q = Th;
              break;
            case "focusin":
              W = "focus", Q = go;
              break;
            case "focusout":
              W = "blur", Q = go;
              break;
            case "beforeblur":
            case "afterblur":
              Q = go;
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
              Q = tc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = kh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = Lh;
              break;
            case Sc:
            case kc:
            case _c:
              Q = Bh;
              break;
            case Dc:
              Q = $h;
              break;
            case "scroll":
              Q = wh;
              break;
            case "wheel":
              Q = Kh;
              break;
            case "copy":
            case "cut":
            case "paste":
              Q = Eh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Q = ic;
          }
          var X = (n & 4) !== 0, Me = !X && e === "scroll", _ = X ? V !== null ? V + "Capture" : null : V;
          X = [];
          for (var x = B, D; x !== null; ) {
            D = x;
            var L = D.stateNode;
            if (D.tag === 5 && L !== null && (D = L, _ !== null && (L = ur(x, _), L != null && X.push(Ar(x, L, D)))), Me) break;
            x = x.return;
          }
          0 < X.length && (V = new Q(V, W, null, t, z), O.push({ event: V, listeners: X }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (V = e === "mouseover" || e === "pointerover", Q = e === "mouseout" || e === "pointerout", V && t !== ql && (W = t.relatedTarget || t.fromElement) && (ft(W) || W[Pn])) break e;
          if ((Q || V) && (V = z.window === z ? z : (V = z.ownerDocument) ? V.defaultView || V.parentWindow : window, Q ? (W = t.relatedTarget || t.toElement, Q = B, W = W ? ft(W) : null, W !== null && (Me = dt(W), W !== Me || W.tag !== 5 && W.tag !== 6) && (W = null)) : (Q = null, W = B), Q !== W)) {
            if (X = tc, L = "onMouseLeave", _ = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (X = ic, L = "onPointerLeave", _ = "onPointerEnter", x = "pointer"), Me = Q == null ? V : Gt(Q), D = W == null ? V : Gt(W), V = new X(L, x + "leave", Q, t, z), V.target = Me, V.relatedTarget = D, L = null, ft(z) === B && (X = new X(_, x + "enter", W, t, z), X.target = D, X.relatedTarget = Me, L = X), Me = L, Q && W) n: {
              for (X = Q, _ = W, x = 0, D = X; D; D = Ft(D)) x++;
              for (D = 0, L = _; L; L = Ft(L)) D++;
              for (; 0 < x - D; ) X = Ft(X), x--;
              for (; 0 < D - x; ) _ = Ft(_), D--;
              for (; x--; ) {
                if (X === _ || _ !== null && X === _.alternate) break n;
                X = Ft(X), _ = Ft(_);
              }
              X = null;
            }
            else X = null;
            Q !== null && Vc(O, V, Q, X, !1), W !== null && Me !== null && Vc(O, Me, W, X, !0);
          }
        }
        e: {
          if (V = B ? Gt(B) : window, Q = V.nodeName && V.nodeName.toLowerCase(), Q === "select" || Q === "input" && V.type === "file") var Y = Yh;
          else if (uc(V)) if (fc) Y = bh;
          else {
            Y = Zh;
            var ee = qh;
          }
          else (Q = V.nodeName) && Q.toLowerCase() === "input" && (V.type === "checkbox" || V.type === "radio") && (Y = Jh);
          if (Y && (Y = Y(e, B))) {
            dc(O, Y, t, z);
            break e;
          }
          ee && ee(e, V, B), e === "focusout" && (ee = V._wrapperState) && ee.controlled && V.type === "number" && Ul(V, "number", V.value);
        }
        switch (ee = B ? Gt(B) : window, e) {
          case "focusin":
            (uc(ee) || ee.contentEditable === "true") && (Rt = ee, wo = B, Br = null);
            break;
          case "focusout":
            Br = wo = Rt = null;
            break;
          case "mousedown":
            So = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            So = !1, xc(O, t, z);
            break;
          case "selectionchange":
            if (tp) break;
          case "keydown":
          case "keyup":
            xc(O, t, z);
        }
        var ne;
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
        else It ? sc(e, t) && (re = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (re = "onCompositionStart");
        re && (lc && t.locale !== "ko" && (It || re !== "onCompositionStart" ? re === "onCompositionEnd" && It && (ne = ec()) : (Xn = z, uo = "value" in Xn ? Xn.value : Xn.textContent, It = !0)), ee = Di(B, re), 0 < ee.length && (re = new rc(re, e, null, t, z), O.push({ event: re, listeners: ee }), ne ? re.data = ne : (ne = cc(t), ne !== null && (re.data = ne)))), (ne = jh ? Uh(e, t) : Hh(e, t)) && (B = Di(B, "onBeforeInput"), 0 < B.length && (z = new rc("onBeforeInput", "beforeinput", null, t, z), O.push({ event: z, listeners: B }), z.data = ne));
      }
      Ac(O, n);
    });
  }
  function Ar(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function Di(e, n) {
    for (var t = n + "Capture", l = []; e !== null; ) {
      var a = e, c = a.stateNode;
      a.tag === 5 && c !== null && (a = c, c = ur(e, t), c != null && l.unshift(Ar(e, c, a)), c = ur(e, n), c != null && l.push(Ar(e, c, a))), e = e.return;
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
  function Vc(e, n, t, l, a) {
    for (var c = n._reactName, d = []; t !== null && t !== l; ) {
      var N = t, y = N.alternate, B = N.stateNode;
      if (y !== null && y === l) break;
      N.tag === 5 && B !== null && (N = B, a ? (y = ur(t, c), y != null && d.unshift(Ar(t, y, N))) : a || (y = ur(t, c), y != null && d.push(Ar(t, y, N)))), t = t.return;
    }
    d.length !== 0 && e.push({ event: n, listeners: d });
  }
  var op = /\r\n?/g, ap = /\u0000|\uFFFD/g;
  function Pc(e) {
    return (typeof e == "string" ? e : "" + e).replace(op, `
`).replace(ap, "");
  }
  function Bi(e, n, t) {
    if (n = Pc(n), Pc(e) !== n && t) throw Error(o(425));
  }
  function Ci() {
  }
  var Eo = null, Ao = null;
  function Mo(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Vo = typeof setTimeout == "function" ? setTimeout : void 0, sp = typeof clearTimeout == "function" ? clearTimeout : void 0, zc = typeof Promise == "function" ? Promise : void 0, cp = typeof queueMicrotask == "function" ? queueMicrotask : typeof zc < "u" ? function(e) {
    return zc.resolve(null).then(e).catch(up);
  } : Vo;
  function up(e) {
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
  function Oc(e) {
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
  var $t = Math.random().toString(36).slice(2), _n = "__reactFiber$" + $t, Mr = "__reactProps$" + $t, Pn = "__reactContainer$" + $t, zo = "__reactEvents$" + $t, dp = "__reactListeners$" + $t, fp = "__reactHandles$" + $t;
  function ft(e) {
    var n = e[_n];
    if (n) return n;
    for (var t = e.parentNode; t; ) {
      if (n = t[Pn] || t[_n]) {
        if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for (e = Oc(e); e !== null; ) {
          if (t = e[_n]) return t;
          e = Oc(e);
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
  function Ei(e) {
    return e[Mr] || null;
  }
  var Oo = [], Kt = -1;
  function Zn(e) {
    return { current: e };
  }
  function _e(e) {
    0 > Kt || (e.current = Oo[Kt], Oo[Kt] = null, Kt--);
  }
  function Se(e, n) {
    Kt++, Oo[Kt] = e.current, e.current = n;
  }
  var Jn = {}, $e = Zn(Jn), We = Zn(!1), ht = Jn;
  function Qt(e, n) {
    var t = e.type.contextTypes;
    if (!t) return Jn;
    var l = e.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === n) return l.__reactInternalMemoizedMaskedChildContext;
    var a = {}, c;
    for (c in t) a[c] = n[c];
    return l && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = a), a;
  }
  function Xe(e) {
    return e = e.childContextTypes, e != null;
  }
  function Ai() {
    _e(We), _e($e);
  }
  function Tc(e, n, t) {
    if ($e.current !== Jn) throw Error(o(168));
    Se($e, n), Se(We, t);
  }
  function Ic(e, n, t) {
    var l = e.stateNode;
    if (n = n.childContextTypes, typeof l.getChildContext != "function") return t;
    l = l.getChildContext();
    for (var a in l) if (!(a in n)) throw Error(o(108, ye(e) || "Unknown", a));
    return R({}, t, l);
  }
  function Mi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Jn, ht = $e.current, Se($e, e), Se(We, We.current), !0;
  }
  function Rc(e, n, t) {
    var l = e.stateNode;
    if (!l) throw Error(o(169));
    t ? (e = Ic(e, n, ht), l.__reactInternalMemoizedMergedChildContext = e, _e(We), _e($e), Se($e, e)) : _e(We), Se(We, t);
  }
  var zn = null, Vi = !1, To = !1;
  function Lc(e) {
    zn === null ? zn = [e] : zn.push(e);
  }
  function hp(e) {
    Vi = !0, Lc(e);
  }
  function bn() {
    if (!To && zn !== null) {
      To = !0;
      var e = 0, n = xe;
      try {
        var t = zn;
        for (xe = 1; e < t.length; e++) {
          var l = t[e];
          do
            l = l(!0);
          while (l !== null);
        }
        zn = null, Vi = !1;
      } catch (a) {
        throw zn !== null && (zn = zn.slice(e + 1)), $s(to, bn), a;
      } finally {
        xe = n, To = !1;
      }
    }
    return null;
  }
  var jt = [], Ut = 0, Pi = null, zi = 0, on = [], an = 0, pt = null, On = 1, Tn = "";
  function gt(e, n) {
    jt[Ut++] = zi, jt[Ut++] = Pi, Pi = e, zi = n;
  }
  function Fc(e, n, t) {
    on[an++] = On, on[an++] = Tn, on[an++] = pt, pt = e;
    var l = On;
    e = Tn;
    var a = 32 - fn(l) - 1;
    l &= ~(1 << a), t += 1;
    var c = 32 - fn(n) + a;
    if (30 < c) {
      var d = a - a % 5;
      c = (l & (1 << d) - 1).toString(32), l >>= d, a -= d, On = 1 << 32 - fn(n) + a | t << a | l, Tn = c + e;
    } else On = 1 << c | t << a | l, Tn = e;
  }
  function Io(e) {
    e.return !== null && (gt(e, 1), Fc(e, 1, 0));
  }
  function Ro(e) {
    for (; e === Pi; ) Pi = jt[--Ut], jt[Ut] = null, zi = jt[--Ut], jt[Ut] = null;
    for (; e === pt; ) pt = on[--an], on[an] = null, Tn = on[--an], on[an] = null, On = on[--an], on[an] = null;
  }
  var tn = null, rn = null, De = !1, pn = null;
  function $c(e, n) {
    var t = dn(5, null, null, 0);
    t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
  }
  function Gc(e, n) {
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
  function Lo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Fo(e) {
    if (De) {
      var n = rn;
      if (n) {
        var t = n;
        if (!Gc(e, n)) {
          if (Lo(e)) throw Error(o(418));
          n = qn(t.nextSibling);
          var l = tn;
          n && Gc(e, n) ? $c(l, t) : (e.flags = e.flags & -4097 | 2, De = !1, tn = e);
        }
      } else {
        if (Lo(e)) throw Error(o(418));
        e.flags = e.flags & -4097 | 2, De = !1, tn = e;
      }
    }
  }
  function Kc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    tn = e;
  }
  function Oi(e) {
    if (e !== tn) return !1;
    if (!De) return Kc(e), De = !0, !1;
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !Mo(e.type, e.memoizedProps)), n && (n = rn)) {
      if (Lo(e)) throw Qc(), Error(o(418));
      for (; n; ) $c(e, n), n = qn(n.nextSibling);
    }
    if (Kc(e), e.tag === 13) {
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
  function Qc() {
    for (var e = rn; e; ) e = qn(e.nextSibling);
  }
  function Ht() {
    rn = tn = null, De = !1;
  }
  function $o(e) {
    pn === null ? pn = [e] : pn.push(e);
  }
  var pp = J.ReactCurrentBatchConfig;
  function Pr(e, n, t) {
    if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (t._owner) {
        if (t = t._owner, t) {
          if (t.tag !== 1) throw Error(o(309));
          var l = t.stateNode;
        }
        if (!l) throw Error(o(147, e));
        var a = l, c = "" + e;
        return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === c ? n.ref : (n = function(d) {
          var N = a.refs;
          d === null ? delete N[c] : N[c] = d;
        }, n._stringRef = c, n);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!t._owner) throw Error(o(290, e));
    }
    return e;
  }
  function Ti(e, n) {
    throw e = Object.prototype.toString.call(n), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  function jc(e) {
    var n = e._init;
    return n(e._payload);
  }
  function Uc(e) {
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
    function c(_, x, D) {
      return _.index = D, e ? (D = _.alternate, D !== null ? (D = D.index, D < x ? (_.flags |= 2, x) : D) : (_.flags |= 2, x)) : (_.flags |= 1048576, x);
    }
    function d(_) {
      return e && _.alternate === null && (_.flags |= 2), _;
    }
    function N(_, x, D, L) {
      return x === null || x.tag !== 6 ? (x = Va(D, _.mode, L), x.return = _, x) : (x = a(x, D), x.return = _, x);
    }
    function y(_, x, D, L) {
      var Y = D.type;
      return Y === I ? z(_, x, D.props.children, L, D.key) : x !== null && (x.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === ge && jc(Y) === x.type) ? (L = a(x, D.props), L.ref = Pr(_, x, D), L.return = _, L) : (L = ll(D.type, D.key, D.props, null, _.mode, L), L.ref = Pr(_, x, D), L.return = _, L);
    }
    function B(_, x, D, L) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== D.containerInfo || x.stateNode.implementation !== D.implementation ? (x = Pa(D, _.mode, L), x.return = _, x) : (x = a(x, D.children || []), x.return = _, x);
    }
    function z(_, x, D, L, Y) {
      return x === null || x.tag !== 7 ? (x = kt(D, _.mode, L, Y), x.return = _, x) : (x = a(x, D), x.return = _, x);
    }
    function O(_, x, D) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = Va("" + x, _.mode, D), x.return = _, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case ue:
            return D = ll(x.type, x.key, x.props, null, _.mode, D), D.ref = Pr(_, null, x), D.return = _, D;
          case ae:
            return x = Pa(x, _.mode, D), x.return = _, x;
          case ge:
            var L = x._init;
            return O(_, L(x._payload), D);
        }
        if (ar(x) || j(x)) return x = kt(x, _.mode, D, null), x.return = _, x;
        Ti(_, x);
      }
      return null;
    }
    function V(_, x, D, L) {
      var Y = x !== null ? x.key : null;
      if (typeof D == "string" && D !== "" || typeof D == "number") return Y !== null ? null : N(_, x, "" + D, L);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case ue:
            return D.key === Y ? y(_, x, D, L) : null;
          case ae:
            return D.key === Y ? B(_, x, D, L) : null;
          case ge:
            return Y = D._init, V(
              _,
              x,
              Y(D._payload),
              L
            );
        }
        if (ar(D) || j(D)) return Y !== null ? null : z(_, x, D, L, null);
        Ti(_, D);
      }
      return null;
    }
    function Q(_, x, D, L, Y) {
      if (typeof L == "string" && L !== "" || typeof L == "number") return _ = _.get(D) || null, N(x, _, "" + L, Y);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case ue:
            return _ = _.get(L.key === null ? D : L.key) || null, y(x, _, L, Y);
          case ae:
            return _ = _.get(L.key === null ? D : L.key) || null, B(x, _, L, Y);
          case ge:
            var ee = L._init;
            return Q(_, x, D, ee(L._payload), Y);
        }
        if (ar(L) || j(L)) return _ = _.get(D) || null, z(x, _, L, Y, null);
        Ti(x, L);
      }
      return null;
    }
    function W(_, x, D, L) {
      for (var Y = null, ee = null, ne = x, re = x = 0, Ie = null; ne !== null && re < D.length; re++) {
        ne.index > re ? (Ie = ne, ne = null) : Ie = ne.sibling;
        var ve = V(_, ne, D[re], L);
        if (ve === null) {
          ne === null && (ne = Ie);
          break;
        }
        e && ne && ve.alternate === null && n(_, ne), x = c(ve, x, re), ee === null ? Y = ve : ee.sibling = ve, ee = ve, ne = Ie;
      }
      if (re === D.length) return t(_, ne), De && gt(_, re), Y;
      if (ne === null) {
        for (; re < D.length; re++) ne = O(_, D[re], L), ne !== null && (x = c(ne, x, re), ee === null ? Y = ne : ee.sibling = ne, ee = ne);
        return De && gt(_, re), Y;
      }
      for (ne = l(_, ne); re < D.length; re++) Ie = Q(ne, _, re, D[re], L), Ie !== null && (e && Ie.alternate !== null && ne.delete(Ie.key === null ? re : Ie.key), x = c(Ie, x, re), ee === null ? Y = Ie : ee.sibling = Ie, ee = Ie);
      return e && ne.forEach(function(st) {
        return n(_, st);
      }), De && gt(_, re), Y;
    }
    function X(_, x, D, L) {
      var Y = j(D);
      if (typeof Y != "function") throw Error(o(150));
      if (D = Y.call(D), D == null) throw Error(o(151));
      for (var ee = Y = null, ne = x, re = x = 0, Ie = null, ve = D.next(); ne !== null && !ve.done; re++, ve = D.next()) {
        ne.index > re ? (Ie = ne, ne = null) : Ie = ne.sibling;
        var st = V(_, ne, ve.value, L);
        if (st === null) {
          ne === null && (ne = Ie);
          break;
        }
        e && ne && st.alternate === null && n(_, ne), x = c(st, x, re), ee === null ? Y = st : ee.sibling = st, ee = st, ne = Ie;
      }
      if (ve.done) return t(
        _,
        ne
      ), De && gt(_, re), Y;
      if (ne === null) {
        for (; !ve.done; re++, ve = D.next()) ve = O(_, ve.value, L), ve !== null && (x = c(ve, x, re), ee === null ? Y = ve : ee.sibling = ve, ee = ve);
        return De && gt(_, re), Y;
      }
      for (ne = l(_, ne); !ve.done; re++, ve = D.next()) ve = Q(ne, _, re, ve.value, L), ve !== null && (e && ve.alternate !== null && ne.delete(ve.key === null ? re : ve.key), x = c(ve, x, re), ee === null ? Y = ve : ee.sibling = ve, ee = ve);
      return e && ne.forEach(function(Wp) {
        return n(_, Wp);
      }), De && gt(_, re), Y;
    }
    function Me(_, x, D, L) {
      if (typeof D == "object" && D !== null && D.type === I && D.key === null && (D = D.props.children), typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case ue:
            e: {
              for (var Y = D.key, ee = x; ee !== null; ) {
                if (ee.key === Y) {
                  if (Y = D.type, Y === I) {
                    if (ee.tag === 7) {
                      t(_, ee.sibling), x = a(ee, D.props.children), x.return = _, _ = x;
                      break e;
                    }
                  } else if (ee.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === ge && jc(Y) === ee.type) {
                    t(_, ee.sibling), x = a(ee, D.props), x.ref = Pr(_, ee, D), x.return = _, _ = x;
                    break e;
                  }
                  t(_, ee);
                  break;
                } else n(_, ee);
                ee = ee.sibling;
              }
              D.type === I ? (x = kt(D.props.children, _.mode, L, D.key), x.return = _, _ = x) : (L = ll(D.type, D.key, D.props, null, _.mode, L), L.ref = Pr(_, x, D), L.return = _, _ = L);
            }
            return d(_);
          case ae:
            e: {
              for (ee = D.key; x !== null; ) {
                if (x.key === ee) if (x.tag === 4 && x.stateNode.containerInfo === D.containerInfo && x.stateNode.implementation === D.implementation) {
                  t(_, x.sibling), x = a(x, D.children || []), x.return = _, _ = x;
                  break e;
                } else {
                  t(_, x);
                  break;
                }
                else n(_, x);
                x = x.sibling;
              }
              x = Pa(D, _.mode, L), x.return = _, _ = x;
            }
            return d(_);
          case ge:
            return ee = D._init, Me(_, x, ee(D._payload), L);
        }
        if (ar(D)) return W(_, x, D, L);
        if (j(D)) return X(_, x, D, L);
        Ti(_, D);
      }
      return typeof D == "string" && D !== "" || typeof D == "number" ? (D = "" + D, x !== null && x.tag === 6 ? (t(_, x.sibling), x = a(x, D), x.return = _, _ = x) : (t(_, x), x = Va(D, _.mode, L), x.return = _, _ = x), d(_)) : t(_, x);
    }
    return Me;
  }
  var Wt = Uc(!0), Hc = Uc(!1), Ii = Zn(null), Ri = null, Xt = null, Go = null;
  function Ko() {
    Go = Xt = Ri = null;
  }
  function Qo(e) {
    var n = Ii.current;
    _e(Ii), e._currentValue = n;
  }
  function jo(e, n, t) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, l !== null && (l.childLanes |= n)) : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n), e === t) break;
      e = e.return;
    }
  }
  function Yt(e, n) {
    Ri = e, Go = Xt = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & n) !== 0 && (Ye = !0), e.firstContext = null);
  }
  function sn(e) {
    var n = e._currentValue;
    if (Go !== e) if (e = { context: e, memoizedValue: n, next: null }, Xt === null) {
      if (Ri === null) throw Error(o(308));
      Xt = e, Ri.dependencies = { lanes: 0, firstContext: e };
    } else Xt = Xt.next = e;
    return n;
  }
  var mt = null;
  function Uo(e) {
    mt === null ? mt = [e] : mt.push(e);
  }
  function Wc(e, n, t, l) {
    var a = n.interleaved;
    return a === null ? (t.next = t, Uo(n)) : (t.next = a.next, a.next = t), n.interleaved = t, In(e, l);
  }
  function In(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; ) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var et = !1;
  function Ho(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Xc(e, n) {
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
    return a = l.interleaved, a === null ? (n.next = n, Uo(l)) : (n.next = a.next, a.next = n), l.interleaved = n, In(e, t);
  }
  function Li(e, n, t) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
      var l = n.lanes;
      l &= e.pendingLanes, t |= l, n.lanes = t, lo(e, t);
    }
  }
  function Yc(e, n) {
    var t = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, t === l)) {
      var a = null, c = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var d = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
          c === null ? a = c = d : c = c.next = d, t = t.next;
        } while (t !== null);
        c === null ? a = c = n : c = c.next = n;
      } else a = c = n;
      t = { baseState: l.baseState, firstBaseUpdate: a, lastBaseUpdate: c, shared: l.shared, effects: l.effects }, e.updateQueue = t;
      return;
    }
    e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
  }
  function Fi(e, n, t, l) {
    var a = e.updateQueue;
    et = !1;
    var c = a.firstBaseUpdate, d = a.lastBaseUpdate, N = a.shared.pending;
    if (N !== null) {
      a.shared.pending = null;
      var y = N, B = y.next;
      y.next = null, d === null ? c = B : d.next = B, d = y;
      var z = e.alternate;
      z !== null && (z = z.updateQueue, N = z.lastBaseUpdate, N !== d && (N === null ? z.firstBaseUpdate = B : N.next = B, z.lastBaseUpdate = y));
    }
    if (c !== null) {
      var O = a.baseState;
      d = 0, z = B = y = null, N = c;
      do {
        var V = N.lane, Q = N.eventTime;
        if ((l & V) === V) {
          z !== null && (z = z.next = {
            eventTime: Q,
            lane: 0,
            tag: N.tag,
            payload: N.payload,
            callback: N.callback,
            next: null
          });
          e: {
            var W = e, X = N;
            switch (V = n, Q = t, X.tag) {
              case 1:
                if (W = X.payload, typeof W == "function") {
                  O = W.call(Q, O, V);
                  break e;
                }
                O = W;
                break e;
              case 3:
                W.flags = W.flags & -65537 | 128;
              case 0:
                if (W = X.payload, V = typeof W == "function" ? W.call(Q, O, V) : W, V == null) break e;
                O = R({}, O, V);
                break e;
              case 2:
                et = !0;
            }
          }
          N.callback !== null && N.lane !== 0 && (e.flags |= 64, V = a.effects, V === null ? a.effects = [N] : V.push(N));
        } else Q = { eventTime: Q, lane: V, tag: N.tag, payload: N.payload, callback: N.callback, next: null }, z === null ? (B = z = Q, y = O) : z = z.next = Q, d |= V;
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
      } else c === null && (a.shared.lanes = 0);
      yt |= d, e.lanes = d, e.memoizedState = O;
    }
  }
  function qc(e, n, t) {
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
  function Wo(e, n) {
    switch (Se(Tr, n), Se(Or, e), Se(Dn, zr), e = n.nodeType, e) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Wl(null, "");
        break;
      default:
        e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = Wl(n, e);
    }
    _e(Dn), Se(Dn, n);
  }
  function qt() {
    _e(Dn), _e(Or), _e(Tr);
  }
  function Zc(e) {
    Nt(Tr.current);
    var n = Nt(Dn.current), t = Wl(n, e.type);
    n !== t && (Se(Or, e), Se(Dn, t));
  }
  function Xo(e) {
    Or.current === e && (_e(Dn), _e(Or));
  }
  var Be = Zn(0);
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
  var Gi = J.ReactCurrentDispatcher, Zo = J.ReactCurrentBatchConfig, vt = 0, Ce = null, Pe = null, Oe = null, Ki = !1, Ir = !1, Rr = 0, gp = 0;
  function Ge() {
    throw Error(o(321));
  }
  function Jo(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++) if (!hn(e[t], n[t])) return !1;
    return !0;
  }
  function bo(e, n, t, l, a, c) {
    if (vt = c, Ce = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Gi.current = e === null || e.memoizedState === null ? yp : xp, e = t(l, a), Ir) {
      c = 0;
      do {
        if (Ir = !1, Rr = 0, 25 <= c) throw Error(o(301));
        c += 1, Oe = Pe = null, n.updateQueue = null, Gi.current = wp, e = t(l, a);
      } while (Ir);
    }
    if (Gi.current = Ui, n = Pe !== null && Pe.next !== null, vt = 0, Oe = Pe = Ce = null, Ki = !1, n) throw Error(o(300));
    return e;
  }
  function ea() {
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
  function na(e) {
    var n = cn(), t = n.queue;
    if (t === null) throw Error(o(311));
    t.lastRenderedReducer = e;
    var l = Pe, a = l.baseQueue, c = t.pending;
    if (c !== null) {
      if (a !== null) {
        var d = a.next;
        a.next = c.next, c.next = d;
      }
      l.baseQueue = a = c, t.pending = null;
    }
    if (a !== null) {
      c = a.next, l = l.baseState;
      var N = d = null, y = null, B = c;
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
      } while (B !== null && B !== c);
      y === null ? d = l : y.next = N, hn(l, n.memoizedState) || (Ye = !0), n.memoizedState = l, n.baseState = d, n.baseQueue = y, t.lastRenderedState = l;
    }
    if (e = t.interleaved, e !== null) {
      a = e;
      do
        c = a.lane, Ce.lanes |= c, yt |= c, a = a.next;
      while (a !== e);
    } else a === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function ta(e) {
    var n = cn(), t = n.queue;
    if (t === null) throw Error(o(311));
    t.lastRenderedReducer = e;
    var l = t.dispatch, a = t.pending, c = n.memoizedState;
    if (a !== null) {
      t.pending = null;
      var d = a = a.next;
      do
        c = e(c, d.action), d = d.next;
      while (d !== a);
      hn(c, n.memoizedState) || (Ye = !0), n.memoizedState = c, n.baseQueue === null && (n.baseState = c), t.lastRenderedState = c;
    }
    return [c, l];
  }
  function Jc() {
  }
  function bc(e, n) {
    var t = Ce, l = cn(), a = n(), c = !hn(l.memoizedState, a);
    if (c && (l.memoizedState = a, Ye = !0), l = l.queue, ra(tu.bind(null, t, l, e), [e]), l.getSnapshot !== n || c || Oe !== null && Oe.memoizedState.tag & 1) {
      if (t.flags |= 2048, Fr(9, nu.bind(null, t, l, a, n), void 0, null), Te === null) throw Error(o(349));
      (vt & 30) !== 0 || eu(t, n, a);
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
    var n = In(e, 1);
    n !== null && vn(n, e, 1, -1);
  }
  function lu(e) {
    var n = Bn();
    return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Lr, lastRenderedState: e }, n.queue = e, e = e.dispatch = vp.bind(null, Ce, e), [n.memoizedState, e];
  }
  function Fr(e, n, t, l) {
    return e = { tag: e, create: n, destroy: t, deps: l, next: null }, n = Ce.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, Ce.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (l = t.next, t.next = e, e.next = l, n.lastEffect = e)), e;
  }
  function ou() {
    return cn().memoizedState;
  }
  function Qi(e, n, t, l) {
    var a = Bn();
    Ce.flags |= e, a.memoizedState = Fr(1 | n, t, void 0, l === void 0 ? null : l);
  }
  function ji(e, n, t, l) {
    var a = cn();
    l = l === void 0 ? null : l;
    var c = void 0;
    if (Pe !== null) {
      var d = Pe.memoizedState;
      if (c = d.destroy, l !== null && Jo(l, d.deps)) {
        a.memoizedState = Fr(n, t, c, l);
        return;
      }
    }
    Ce.flags |= e, a.memoizedState = Fr(1 | n, t, c, l);
  }
  function au(e, n) {
    return Qi(8390656, 8, e, n);
  }
  function ra(e, n) {
    return ji(2048, 8, e, n);
  }
  function su(e, n) {
    return ji(4, 2, e, n);
  }
  function cu(e, n) {
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
    var t = cn();
    n = n === void 0 ? null : n;
    var l = t.memoizedState;
    return l !== null && n !== null && Jo(n, l[1]) ? l[0] : (t.memoizedState = [e, n], e);
  }
  function hu(e, n) {
    var t = cn();
    n = n === void 0 ? null : n;
    var l = t.memoizedState;
    return l !== null && n !== null && Jo(n, l[1]) ? l[0] : (e = e(), t.memoizedState = [e, n], e);
  }
  function pu(e, n, t) {
    return (vt & 21) === 0 ? (e.baseState && (e.baseState = !1, Ye = !0), e.memoizedState = t) : (hn(t, n) || (t = js(), Ce.lanes |= t, yt |= t, e.baseState = !0), n);
  }
  function mp(e, n) {
    var t = xe;
    xe = t !== 0 && 4 > t ? t : 4, e(!0);
    var l = Zo.transition;
    Zo.transition = {};
    try {
      e(!1), n();
    } finally {
      xe = t, Zo.transition = l;
    }
  }
  function gu() {
    return cn().memoizedState;
  }
  function Np(e, n, t) {
    var l = lt(e);
    if (t = { lane: l, action: t, hasEagerState: !1, eagerState: null, next: null }, mu(e)) Nu(n, t);
    else if (t = Wc(e, n, t, l), t !== null) {
      var a = He();
      vn(t, e, l, a), vu(t, n, l);
    }
  }
  function vp(e, n, t) {
    var l = lt(e), a = { lane: l, action: t, hasEagerState: !1, eagerState: null, next: null };
    if (mu(e)) Nu(n, a);
    else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = n.lastRenderedReducer, c !== null)) try {
        var d = n.lastRenderedState, N = c(d, t);
        if (a.hasEagerState = !0, a.eagerState = N, hn(N, d)) {
          var y = n.interleaved;
          y === null ? (a.next = a, Uo(n)) : (a.next = y.next, y.next = a), n.interleaved = a;
          return;
        }
      } catch {
      } finally {
      }
      t = Wc(e, n, a, l), t !== null && (a = He(), vn(t, e, l, a), vu(t, n, l));
    }
  }
  function mu(e) {
    var n = e.alternate;
    return e === Ce || n !== null && n === Ce;
  }
  function Nu(e, n) {
    Ir = Ki = !0;
    var t = e.pending;
    t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
  }
  function vu(e, n, t) {
    if ((t & 4194240) !== 0) {
      var l = n.lanes;
      l &= e.pendingLanes, t |= l, n.lanes = t, lo(e, t);
    }
  }
  var Ui = { readContext: sn, useCallback: Ge, useContext: Ge, useEffect: Ge, useImperativeHandle: Ge, useInsertionEffect: Ge, useLayoutEffect: Ge, useMemo: Ge, useReducer: Ge, useRef: Ge, useState: Ge, useDebugValue: Ge, useDeferredValue: Ge, useTransition: Ge, useMutableSource: Ge, useSyncExternalStore: Ge, useId: Ge, unstable_isNewReconciler: !1 }, yp = { readContext: sn, useCallback: function(e, n) {
    return Bn().memoizedState = [e, n === void 0 ? null : n], e;
  }, useContext: sn, useEffect: au, useImperativeHandle: function(e, n, t) {
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
    return n = t !== void 0 ? t(n) : n, l.memoizedState = l.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, l.queue = e, e = e.dispatch = Np.bind(null, Ce, e), [l.memoizedState, e];
  }, useRef: function(e) {
    var n = Bn();
    return e = { current: e }, n.memoizedState = e;
  }, useState: lu, useDebugValue: ia, useDeferredValue: function(e) {
    return Bn().memoizedState = e;
  }, useTransition: function() {
    var e = lu(!1), n = e[0];
    return e = mp.bind(null, e[1]), Bn().memoizedState = e, [n, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, n, t) {
    var l = Ce, a = Bn();
    if (De) {
      if (t === void 0) throw Error(o(407));
      t = t();
    } else {
      if (t = n(), Te === null) throw Error(o(349));
      (vt & 30) !== 0 || eu(l, n, t);
    }
    a.memoizedState = t;
    var c = { value: t, getSnapshot: n };
    return a.queue = c, au(tu.bind(
      null,
      l,
      c,
      e
    ), [e]), l.flags |= 2048, Fr(9, nu.bind(null, l, c, t, n), void 0, null), t;
  }, useId: function() {
    var e = Bn(), n = Te.identifierPrefix;
    if (De) {
      var t = Tn, l = On;
      t = (l & ~(1 << 32 - fn(l) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = Rr++, 0 < t && (n += "H" + t.toString(32)), n += ":";
    } else t = gp++, n = ":" + n + "r" + t.toString(32) + ":";
    return e.memoizedState = n;
  }, unstable_isNewReconciler: !1 }, xp = {
    readContext: sn,
    useCallback: fu,
    useContext: sn,
    useEffect: ra,
    useImperativeHandle: du,
    useInsertionEffect: su,
    useLayoutEffect: cu,
    useMemo: hu,
    useReducer: na,
    useRef: ou,
    useState: function() {
      return na(Lr);
    },
    useDebugValue: ia,
    useDeferredValue: function(e) {
      var n = cn();
      return pu(n, Pe.memoizedState, e);
    },
    useTransition: function() {
      var e = na(Lr)[0], n = cn().memoizedState;
      return [e, n];
    },
    useMutableSource: Jc,
    useSyncExternalStore: bc,
    useId: gu,
    unstable_isNewReconciler: !1
  }, wp = { readContext: sn, useCallback: fu, useContext: sn, useEffect: ra, useImperativeHandle: du, useInsertionEffect: su, useLayoutEffect: cu, useMemo: hu, useReducer: ta, useRef: ou, useState: function() {
    return ta(Lr);
  }, useDebugValue: ia, useDeferredValue: function(e) {
    var n = cn();
    return Pe === null ? n.memoizedState = e : pu(n, Pe.memoizedState, e);
  }, useTransition: function() {
    var e = ta(Lr)[0], n = cn().memoizedState;
    return [e, n];
  }, useMutableSource: Jc, useSyncExternalStore: bc, useId: gu, unstable_isNewReconciler: !1 };
  function gn(e, n) {
    if (e && e.defaultProps) {
      n = R({}, n), e = e.defaultProps;
      for (var t in e) n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  function la(e, n, t, l) {
    n = e.memoizedState, t = t(l, n), t = t == null ? n : R({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var Hi = { isMounted: function(e) {
    return (e = e._reactInternals) ? dt(e) === e : !1;
  }, enqueueSetState: function(e, n, t) {
    e = e._reactInternals;
    var l = He(), a = lt(e), c = Rn(l, a);
    c.payload = n, t != null && (c.callback = t), n = nt(e, c, a), n !== null && (vn(n, e, a, l), Li(n, e, a));
  }, enqueueReplaceState: function(e, n, t) {
    e = e._reactInternals;
    var l = He(), a = lt(e), c = Rn(l, a);
    c.tag = 1, c.payload = n, t != null && (c.callback = t), n = nt(e, c, a), n !== null && (vn(n, e, a, l), Li(n, e, a));
  }, enqueueForceUpdate: function(e, n) {
    e = e._reactInternals;
    var t = He(), l = lt(e), a = Rn(t, l);
    a.tag = 2, n != null && (a.callback = n), n = nt(e, a, l), n !== null && (vn(n, e, l, t), Li(n, e, l));
  } };
  function yu(e, n, t, l, a, c, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, c, d) : n.prototype && n.prototype.isPureReactComponent ? !Dr(t, l) || !Dr(a, c) : !0;
  }
  function xu(e, n, t) {
    var l = !1, a = Jn, c = n.contextType;
    return typeof c == "object" && c !== null ? c = sn(c) : (a = Xe(n) ? ht : $e.current, l = n.contextTypes, c = (l = l != null) ? Qt(e, a) : Jn), n = new n(t, c), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Hi, e.stateNode = n, n._reactInternals = e, l && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = c), n;
  }
  function wu(e, n, t, l) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, l), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, l), n.state !== e && Hi.enqueueReplaceState(n, n.state, null);
  }
  function oa(e, n, t, l) {
    var a = e.stateNode;
    a.props = t, a.state = e.memoizedState, a.refs = {}, Ho(e);
    var c = n.contextType;
    typeof c == "object" && c !== null ? a.context = sn(c) : (c = Xe(n) ? ht : $e.current, a.context = Qt(e, c)), a.state = e.memoizedState, c = n.getDerivedStateFromProps, typeof c == "function" && (la(e, n, c, t), a.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (n = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), n !== a.state && Hi.enqueueReplaceState(a, a.state, null), Fi(e, t, a, l), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Zt(e, n) {
    try {
      var t = "", l = n;
      do
        t += te(l), l = l.return;
      while (l);
      var a = t;
    } catch (c) {
      a = `
Error generating stack: ` + c.message + `
` + c.stack;
    }
    return { value: e, source: n, stack: a, digest: null };
  }
  function aa(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
  }
  function sa(e, n) {
    try {
      console.error(n.value);
    } catch (t) {
      setTimeout(function() {
        throw t;
      });
    }
  }
  var Sp = typeof WeakMap == "function" ? WeakMap : Map;
  function Su(e, n, t) {
    t = Rn(-1, t), t.tag = 3, t.payload = { element: null };
    var l = n.value;
    return t.callback = function() {
      bi || (bi = !0, ka = l), sa(e, n);
    }, t;
  }
  function ku(e, n, t) {
    t = Rn(-1, t), t.tag = 3;
    var l = e.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var a = n.value;
      t.payload = function() {
        return l(a);
      }, t.callback = function() {
        sa(e, n);
      };
    }
    var c = e.stateNode;
    return c !== null && typeof c.componentDidCatch == "function" && (t.callback = function() {
      sa(e, n), typeof l != "function" && (rt === null ? rt = /* @__PURE__ */ new Set([this]) : rt.add(this));
      var d = n.stack;
      this.componentDidCatch(n.value, { componentStack: d !== null ? d : "" });
    }), t;
  }
  function _u(e, n, t) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Sp();
      var a = /* @__PURE__ */ new Set();
      l.set(n, a);
    } else a = l.get(n), a === void 0 && (a = /* @__PURE__ */ new Set(), l.set(n, a));
    a.has(t) || (a.add(t), e = Ip.bind(null, e, n, t), n.then(e, e));
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
    return (e.mode & 1) === 0 ? (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = Rn(-1, 1), n.tag = 2, nt(t, n, 1))), t.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e);
  }
  var kp = J.ReactCurrentOwner, Ye = !1;
  function Ue(e, n, t, l) {
    n.child = e === null ? Hc(n, null, t, l) : Wt(n, e.child, t, l);
  }
  function Cu(e, n, t, l, a) {
    t = t.render;
    var c = n.ref;
    return Yt(n, a), l = bo(e, n, t, l, c, a), t = ea(), e !== null && !Ye ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~a, Ln(e, n, a)) : (De && t && Io(n), n.flags |= 1, Ue(e, n, l, a), n.child);
  }
  function Eu(e, n, t, l, a) {
    if (e === null) {
      var c = t.type;
      return typeof c == "function" && !Ma(c) && c.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = c, Au(e, n, c, l, a)) : (e = ll(t.type, null, l, n, n.mode, a), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (c = e.child, (e.lanes & a) === 0) {
      var d = c.memoizedProps;
      if (t = t.compare, t = t !== null ? t : Dr, t(d, l) && e.ref === n.ref) return Ln(e, n, a);
    }
    return n.flags |= 1, e = at(c, l), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Au(e, n, t, l, a) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Dr(c, l) && e.ref === n.ref) if (Ye = !1, n.pendingProps = l = c, (e.lanes & a) !== 0) (e.flags & 131072) !== 0 && (Ye = !0);
      else return n.lanes = e.lanes, Ln(e, n, a);
    }
    return ca(e, n, t, l, a);
  }
  function Mu(e, n, t) {
    var l = n.pendingProps, a = l.children, c = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") if ((n.mode & 1) === 0) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Se(bt, ln), ln |= t;
    else {
      if ((t & 1073741824) === 0) return e = c !== null ? c.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, Se(bt, ln), ln |= e, null;
      n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, l = c !== null ? c.baseLanes : t, Se(bt, ln), ln |= l;
    }
    else c !== null ? (l = c.baseLanes | t, n.memoizedState = null) : l = t, Se(bt, ln), ln |= l;
    return Ue(e, n, a, t), n.child;
  }
  function Vu(e, n) {
    var t = n.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
  }
  function ca(e, n, t, l, a) {
    var c = Xe(t) ? ht : $e.current;
    return c = Qt(n, c), Yt(n, a), t = bo(e, n, t, l, c, a), l = ea(), e !== null && !Ye ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~a, Ln(e, n, a)) : (De && l && Io(n), n.flags |= 1, Ue(e, n, t, a), n.child);
  }
  function Pu(e, n, t, l, a) {
    if (Xe(t)) {
      var c = !0;
      Mi(n);
    } else c = !1;
    if (Yt(n, a), n.stateNode === null) Xi(e, n), xu(n, t, l), oa(n, t, l, a), l = !0;
    else if (e === null) {
      var d = n.stateNode, N = n.memoizedProps;
      d.props = N;
      var y = d.context, B = t.contextType;
      typeof B == "object" && B !== null ? B = sn(B) : (B = Xe(t) ? ht : $e.current, B = Qt(n, B));
      var z = t.getDerivedStateFromProps, O = typeof z == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      O || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (N !== l || y !== B) && wu(n, d, l, B), et = !1;
      var V = n.memoizedState;
      d.state = V, Fi(n, l, d, a), y = n.memoizedState, N !== l || V !== y || We.current || et ? (typeof z == "function" && (la(n, t, z, l), y = n.memoizedState), (N = et || yu(n, t, N, l, V, y, B)) ? (O || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = l, n.memoizedState = y), d.props = l, d.state = y, d.context = B, l = N) : (typeof d.componentDidMount == "function" && (n.flags |= 4194308), l = !1);
    } else {
      d = n.stateNode, Xc(e, n), N = n.memoizedProps, B = n.type === n.elementType ? N : gn(n.type, N), d.props = B, O = n.pendingProps, V = d.context, y = t.contextType, typeof y == "object" && y !== null ? y = sn(y) : (y = Xe(t) ? ht : $e.current, y = Qt(n, y));
      var Q = t.getDerivedStateFromProps;
      (z = typeof Q == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (N !== O || V !== y) && wu(n, d, l, y), et = !1, V = n.memoizedState, d.state = V, Fi(n, l, d, a);
      var W = n.memoizedState;
      N !== O || V !== W || We.current || et ? (typeof Q == "function" && (la(n, t, Q, l), W = n.memoizedState), (B = et || yu(n, t, B, l, V, W, y) || !1) ? (z || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(l, W, y), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(l, W, y)), typeof d.componentDidUpdate == "function" && (n.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || N === e.memoizedProps && V === e.memoizedState || (n.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || N === e.memoizedProps && V === e.memoizedState || (n.flags |= 1024), n.memoizedProps = l, n.memoizedState = W), d.props = l, d.state = W, d.context = y, l = B) : (typeof d.componentDidUpdate != "function" || N === e.memoizedProps && V === e.memoizedState || (n.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || N === e.memoizedProps && V === e.memoizedState || (n.flags |= 1024), l = !1);
    }
    return ua(e, n, t, l, c, a);
  }
  function ua(e, n, t, l, a, c) {
    Vu(e, n);
    var d = (n.flags & 128) !== 0;
    if (!l && !d) return a && Rc(n, t, !1), Ln(e, n, c);
    l = n.stateNode, kp.current = n;
    var N = d && typeof t.getDerivedStateFromError != "function" ? null : l.render();
    return n.flags |= 1, e !== null && d ? (n.child = Wt(n, e.child, null, c), n.child = Wt(n, null, N, c)) : Ue(e, n, N, c), n.memoizedState = l.state, a && Rc(n, t, !0), n.child;
  }
  function zu(e) {
    var n = e.stateNode;
    n.pendingContext ? Tc(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Tc(e, n.context, !1), Wo(e, n.containerInfo);
  }
  function Ou(e, n, t, l, a) {
    return Ht(), $o(a), n.flags |= 256, Ue(e, n, t, l), n.child;
  }
  var da = { dehydrated: null, treeContext: null, retryLane: 0 };
  function fa(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Tu(e, n, t) {
    var l = n.pendingProps, a = Be.current, c = !1, d = (n.flags & 128) !== 0, N;
    if ((N = d) || (N = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), N ? (c = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), Se(Be, a & 1), e === null)
      return Fo(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((n.mode & 1) === 0 ? n.lanes = 1 : e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824, null) : (d = l.children, e = l.fallback, c ? (l = n.mode, c = n.child, d = { mode: "hidden", children: d }, (l & 1) === 0 && c !== null ? (c.childLanes = 0, c.pendingProps = d) : c = ol(d, l, 0, null), e = kt(e, l, t, null), c.return = n, e.return = n, c.sibling = e, n.child = c, n.child.memoizedState = fa(t), n.memoizedState = da, e) : ha(n, d));
    if (a = e.memoizedState, a !== null && (N = a.dehydrated, N !== null)) return _p(e, n, d, l, N, a, t);
    if (c) {
      c = l.fallback, d = n.mode, a = e.child, N = a.sibling;
      var y = { mode: "hidden", children: l.children };
      return (d & 1) === 0 && n.child !== a ? (l = n.child, l.childLanes = 0, l.pendingProps = y, n.deletions = null) : (l = at(a, y), l.subtreeFlags = a.subtreeFlags & 14680064), N !== null ? c = at(N, c) : (c = kt(c, d, t, null), c.flags |= 2), c.return = n, l.return = n, l.sibling = c, n.child = l, l = c, c = n.child, d = e.child.memoizedState, d = d === null ? fa(t) : { baseLanes: d.baseLanes | t, cachePool: null, transitions: d.transitions }, c.memoizedState = d, c.childLanes = e.childLanes & ~t, n.memoizedState = da, l;
    }
    return c = e.child, e = c.sibling, l = at(c, { mode: "visible", children: l.children }), (n.mode & 1) === 0 && (l.lanes = t), l.return = n, l.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = l, n.memoizedState = null, l;
  }
  function ha(e, n) {
    return n = ol({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
  }
  function Wi(e, n, t, l) {
    return l !== null && $o(l), Wt(n, e.child, null, t), e = ha(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
  }
  function _p(e, n, t, l, a, c, d) {
    if (t)
      return n.flags & 256 ? (n.flags &= -257, l = aa(Error(o(422))), Wi(e, n, d, l)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (c = l.fallback, a = n.mode, l = ol({ mode: "visible", children: l.children }, a, 0, null), c = kt(c, a, d, null), c.flags |= 2, l.return = n, c.return = n, l.sibling = c, n.child = l, (n.mode & 1) !== 0 && Wt(n, e.child, null, d), n.child.memoizedState = fa(d), n.memoizedState = da, c);
    if ((n.mode & 1) === 0) return Wi(e, n, d, null);
    if (a.data === "$!") {
      if (l = a.nextSibling && a.nextSibling.dataset, l) var N = l.dgst;
      return l = N, c = Error(o(419)), l = aa(c, l, void 0), Wi(e, n, d, l);
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
        a = (a & (l.suspendedLanes | d)) !== 0 ? 0 : a, a !== 0 && a !== c.retryLane && (c.retryLane = a, In(e, a), vn(l, e, a, -1));
      }
      return Aa(), l = aa(Error(o(421))), Wi(e, n, d, l);
    }
    return a.data === "$?" ? (n.flags |= 128, n.child = e.child, n = Rp.bind(null, e), a._reactRetry = n, null) : (e = c.treeContext, rn = qn(a.nextSibling), tn = n, De = !0, pn = null, e !== null && (on[an++] = On, on[an++] = Tn, on[an++] = pt, On = e.id, Tn = e.overflow, pt = n), n = ha(n, l.children), n.flags |= 4096, n);
  }
  function Iu(e, n, t) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n), jo(e.return, n, t);
  }
  function pa(e, n, t, l, a) {
    var c = e.memoizedState;
    c === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: l, tail: t, tailMode: a } : (c.isBackwards = n, c.rendering = null, c.renderingStartTime = 0, c.last = l, c.tail = t, c.tailMode = a);
  }
  function Ru(e, n, t) {
    var l = n.pendingProps, a = l.revealOrder, c = l.tail;
    if (Ue(e, n, l.children, t), l = Be.current, (l & 2) !== 0) l = l & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Iu(e, t, n);
        else if (e.tag === 19) Iu(e, t, n);
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
        for (t = n.child, a = null; t !== null; ) e = t.alternate, e !== null && $i(e) === null && (a = t), t = t.sibling;
        t = a, t === null ? (a = n.child, n.child = null) : (a = t.sibling, t.sibling = null), pa(n, !1, a, t, c);
        break;
      case "backwards":
        for (t = null, a = n.child, n.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && $i(e) === null) {
            n.child = a;
            break;
          }
          e = a.sibling, a.sibling = t, t = a, a = e;
        }
        pa(n, !0, t, null, c);
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
    if (e !== null && (n.dependencies = e.dependencies), yt |= n.lanes, (t & n.childLanes) === 0) return null;
    if (e !== null && n.child !== e.child) throw Error(o(153));
    if (n.child !== null) {
      for (e = n.child, t = at(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) e = e.sibling, t = t.sibling = at(e, e.pendingProps), t.return = n;
      t.sibling = null;
    }
    return n.child;
  }
  function Dp(e, n, t) {
    switch (n.tag) {
      case 3:
        zu(n), Ht();
        break;
      case 5:
        Zc(n);
        break;
      case 1:
        Xe(n.type) && Mi(n);
        break;
      case 4:
        Wo(n, n.stateNode.containerInfo);
        break;
      case 10:
        var l = n.type._context, a = n.memoizedProps.value;
        Se(Ii, l._currentValue), l._currentValue = a;
        break;
      case 13:
        if (l = n.memoizedState, l !== null)
          return l.dehydrated !== null ? (Se(Be, Be.current & 1), n.flags |= 128, null) : (t & n.child.childLanes) !== 0 ? Tu(e, n, t) : (Se(Be, Be.current & 1), e = Ln(e, n, t), e !== null ? e.sibling : null);
        Se(Be, Be.current & 1);
        break;
      case 19:
        if (l = (t & n.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (l) return Ru(e, n, t);
          n.flags |= 128;
        }
        if (a = n.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Se(Be, Be.current), l) break;
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
      e = n.stateNode, Nt(Dn.current);
      var c = null;
      switch (t) {
        case "input":
          a = Ql(e, a), l = Ql(e, l), c = [];
          break;
        case "select":
          a = R({}, a, { value: void 0 }), l = R({}, l, { value: void 0 }), c = [];
          break;
        case "textarea":
          a = Hl(e, a), l = Hl(e, l), c = [];
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
      } else B !== "dangerouslySetInnerHTML" && B !== "children" && B !== "suppressContentEditableWarning" && B !== "suppressHydrationWarning" && B !== "autoFocus" && (u.hasOwnProperty(B) ? c || (c = []) : (c = c || []).push(B, null));
      for (B in l) {
        var y = l[B];
        if (N = a != null ? a[B] : void 0, l.hasOwnProperty(B) && y !== N && (y != null || N != null)) if (B === "style") if (N) {
          for (d in N) !N.hasOwnProperty(d) || y && y.hasOwnProperty(d) || (t || (t = {}), t[d] = "");
          for (d in y) y.hasOwnProperty(d) && N[d] !== y[d] && (t || (t = {}), t[d] = y[d]);
        } else t || (c || (c = []), c.push(
          B,
          t
        )), t = y;
        else B === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, N = N ? N.__html : void 0, y != null && N !== y && (c = c || []).push(B, y)) : B === "children" ? typeof y != "string" && typeof y != "number" || (c = c || []).push(B, "" + y) : B !== "suppressContentEditableWarning" && B !== "suppressHydrationWarning" && (u.hasOwnProperty(B) ? (y != null && B === "onScroll" && ke("scroll", e), c || N === y || (c = [])) : (c = c || []).push(B, y));
      }
      t && (c = c || []).push("style", t);
      var B = c;
      (n.updateQueue = B) && (n.flags |= 4);
    }
  }, $u = function(e, n, t, l) {
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
  function Bp(e, n, t) {
    var l = n.pendingProps;
    switch (Ro(n), n.tag) {
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
        return l = n.stateNode, qt(), _e(We), _e($e), qo(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Oi(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, pn !== null && (Ba(pn), pn = null))), ga(e, n), Ke(n), null;
      case 5:
        Xo(n);
        var a = Nt(Tr.current);
        if (t = n.type, e !== null && n.stateNode != null) Fu(e, n, t, l, a), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
        else {
          if (!l) {
            if (n.stateNode === null) throw Error(o(166));
            return Ke(n), null;
          }
          if (e = Nt(Dn.current), Oi(n)) {
            l = n.stateNode, t = n.type;
            var c = n.memoizedProps;
            switch (l[_n] = n, l[Mr] = c, e = (n.mode & 1) !== 0, t) {
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
                xs(l, c), ke("invalid", l);
                break;
              case "select":
                l._wrapperState = { wasMultiple: !!c.multiple }, ke("invalid", l);
                break;
              case "textarea":
                ks(l, c), ke("invalid", l);
            }
            Xl(t, c), a = null;
            for (var d in c) if (c.hasOwnProperty(d)) {
              var N = c[d];
              d === "children" ? typeof N == "string" ? l.textContent !== N && (c.suppressHydrationWarning !== !0 && Bi(l.textContent, N, e), a = ["children", N]) : typeof N == "number" && l.textContent !== "" + N && (c.suppressHydrationWarning !== !0 && Bi(
                l.textContent,
                N,
                e
              ), a = ["children", "" + N]) : u.hasOwnProperty(d) && N != null && d === "onScroll" && ke("scroll", l);
            }
            switch (t) {
              case "input":
                ut(l), Ss(l, c, !0);
                break;
              case "textarea":
                ut(l), Ds(l);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof c.onClick == "function" && (l.onclick = Ci);
            }
            l = a, n.updateQueue = l, l !== null && (n.flags |= 4);
          } else {
            d = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Bs(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = d.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof l.is == "string" ? e = d.createElement(t, { is: l.is }) : (e = d.createElement(t), t === "select" && (d = e, l.multiple ? d.multiple = !0 : l.size && (d.size = l.size))) : e = d.createElementNS(e, t), e[_n] = n, e[Mr] = l, Lu(e, n, !1, !1), n.stateNode = e;
            e: {
              switch (d = Yl(t, l), t) {
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
                  xs(e, l), a = Ql(e, l), ke("invalid", e);
                  break;
                case "option":
                  a = l;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!l.multiple }, a = R({}, l, { value: void 0 }), ke("invalid", e);
                  break;
                case "textarea":
                  ks(e, l), a = Hl(e, l), ke("invalid", e);
                  break;
                default:
                  a = l;
              }
              Xl(t, a), N = a;
              for (c in N) if (N.hasOwnProperty(c)) {
                var y = N[c];
                c === "style" ? As(e, y) : c === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, y != null && Cs(e, y)) : c === "children" ? typeof y == "string" ? (t !== "textarea" || y !== "") && sr(e, y) : typeof y == "number" && sr(e, "" + y) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (u.hasOwnProperty(c) ? y != null && c === "onScroll" && ke("scroll", e) : y != null && K(e, c, y, d));
              }
              switch (t) {
                case "input":
                  ut(e), Ss(e, l, !1);
                  break;
                case "textarea":
                  ut(e), Ds(e);
                  break;
                case "option":
                  l.value != null && e.setAttribute("value", "" + me(l.value));
                  break;
                case "select":
                  e.multiple = !!l.multiple, c = l.value, c != null ? Vt(e, !!l.multiple, c, !1) : l.defaultValue != null && Vt(
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
          if (t = Nt(Tr.current), Nt(Dn.current), Oi(n)) {
            if (l = n.stateNode, t = n.memoizedProps, l[_n] = n, (c = l.nodeValue !== t) && (e = tn, e !== null)) switch (e.tag) {
              case 3:
                Bi(l.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Bi(l.nodeValue, t, (e.mode & 1) !== 0);
            }
            c && (n.flags |= 4);
          } else l = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(l), l[_n] = n, n.stateNode = l;
        }
        return Ke(n), null;
      case 13:
        if (_e(Be), l = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (De && rn !== null && (n.mode & 1) !== 0 && (n.flags & 128) === 0) Qc(), Ht(), n.flags |= 98560, c = !1;
          else if (c = Oi(n), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(o(318));
              if (c = n.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(o(317));
              c[_n] = n;
            } else Ht(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Ke(n), c = !1;
          } else pn !== null && (Ba(pn), pn = null), c = !0;
          if (!c) return n.flags & 65536 ? n : null;
        }
        return (n.flags & 128) !== 0 ? (n.lanes = t, n) : (l = l !== null, l !== (e !== null && e.memoizedState !== null) && l && (n.child.flags |= 8192, (n.mode & 1) !== 0 && (e === null || (Be.current & 1) !== 0 ? ze === 0 && (ze = 3) : Aa())), n.updateQueue !== null && (n.flags |= 4), Ke(n), null);
      case 4:
        return qt(), ga(e, n), e === null && Er(n.stateNode.containerInfo), Ke(n), null;
      case 10:
        return Qo(n.type._context), Ke(n), null;
      case 17:
        return Xe(n.type) && Ai(), Ke(n), null;
      case 19:
        if (_e(Be), c = n.memoizedState, c === null) return Ke(n), null;
        if (l = (n.flags & 128) !== 0, d = c.rendering, d === null) if (l) $r(c, !1);
        else {
          if (ze !== 0 || e !== null && (e.flags & 128) !== 0) for (e = n.child; e !== null; ) {
            if (d = $i(e), d !== null) {
              for (n.flags |= 128, $r(c, !1), l = d.updateQueue, l !== null && (n.updateQueue = l, n.flags |= 4), n.subtreeFlags = 0, l = t, t = n.child; t !== null; ) c = t, e = l, c.flags &= 14680066, d = c.alternate, d === null ? (c.childLanes = 0, c.lanes = e, c.child = null, c.subtreeFlags = 0, c.memoizedProps = null, c.memoizedState = null, c.updateQueue = null, c.dependencies = null, c.stateNode = null) : (c.childLanes = d.childLanes, c.lanes = d.lanes, c.child = d.child, c.subtreeFlags = 0, c.deletions = null, c.memoizedProps = d.memoizedProps, c.memoizedState = d.memoizedState, c.updateQueue = d.updateQueue, c.type = d.type, e = d.dependencies, c.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
              return Se(Be, Be.current & 1 | 2), n.child;
            }
            e = e.sibling;
          }
          c.tail !== null && Ae() > er && (n.flags |= 128, l = !0, $r(c, !1), n.lanes = 4194304);
        }
        else {
          if (!l) if (e = $i(d), e !== null) {
            if (n.flags |= 128, l = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), $r(c, !0), c.tail === null && c.tailMode === "hidden" && !d.alternate && !De) return Ke(n), null;
          } else 2 * Ae() - c.renderingStartTime > er && t !== 1073741824 && (n.flags |= 128, l = !0, $r(c, !1), n.lanes = 4194304);
          c.isBackwards ? (d.sibling = n.child, n.child = d) : (t = c.last, t !== null ? t.sibling = d : n.child = d, c.last = d);
        }
        return c.tail !== null ? (n = c.tail, c.rendering = n, c.tail = n.sibling, c.renderingStartTime = Ae(), n.sibling = null, t = Be.current, Se(Be, l ? t & 1 | 2 : t & 1), n) : (Ke(n), null);
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
  function Cp(e, n) {
    switch (Ro(n), n.tag) {
      case 1:
        return Xe(n.type) && Ai(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return qt(), _e(We), _e($e), qo(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 5:
        return Xo(n), null;
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
  var Yi = !1, Qe = !1, Ep = typeof WeakSet == "function" ? WeakSet : Set, U = null;
  function Jt(e, n) {
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
  function Ap(e, n) {
    if (Eo = gi, e = yc(), xo(e)) {
      if ("selectionStart" in e) var t = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        t = (t = e.ownerDocument) && t.defaultView || window;
        var l = t.getSelection && t.getSelection();
        if (l && l.rangeCount !== 0) {
          t = l.anchorNode;
          var a = l.anchorOffset, c = l.focusNode;
          l = l.focusOffset;
          try {
            t.nodeType, c.nodeType;
          } catch {
            t = null;
            break e;
          }
          var d = 0, N = -1, y = -1, B = 0, z = 0, O = e, V = null;
          n: for (; ; ) {
            for (var Q; O !== t || a !== 0 && O.nodeType !== 3 || (N = d + a), O !== c || l !== 0 && O.nodeType !== 3 || (y = d + l), O.nodeType === 3 && (d += O.nodeValue.length), (Q = O.firstChild) !== null; )
              V = O, O = Q;
            for (; ; ) {
              if (O === e) break n;
              if (V === t && ++B === a && (N = d), V === c && ++z === l && (y = d), (Q = O.nextSibling) !== null) break;
              O = V, V = O.parentNode;
            }
            O = Q;
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
        var W = n.alternate;
        if ((n.flags & 1024) !== 0) switch (n.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (W !== null) {
              var X = W.memoizedProps, Me = W.memoizedState, _ = n.stateNode, x = _.getSnapshotBeforeUpdate(n.elementType === n.type ? X : gn(n.type, X), Me);
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
    return W = Gu, Gu = !1, W;
  }
  function Gr(e, n, t) {
    var l = n.updateQueue;
    if (l = l !== null ? l.lastEffect : null, l !== null) {
      var a = l = l.next;
      do {
        if ((a.tag & e) === e) {
          var c = a.destroy;
          a.destroy = void 0, c !== void 0 && ma(n, t, c);
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
    n !== null && (e.alternate = null, Ku(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[_n], delete n[Mr], delete n[zo], delete n[dp], delete n[fp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
  var Re = null, mn = !1;
  function tt(e, n, t) {
    for (t = t.child; t !== null; ) Uu(e, n, t), t = t.sibling;
  }
  function Uu(e, n, t) {
    if (kn && typeof kn.onCommitFiberUnmount == "function") try {
      kn.onCommitFiberUnmount(ci, t);
    } catch {
    }
    switch (t.tag) {
      case 5:
        Qe || Jt(t, n);
      case 6:
        var l = Re, a = mn;
        Re = null, tt(e, n, t), Re = l, mn = a, Re !== null && (mn ? (e = Re, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : Re.removeChild(t.stateNode));
        break;
      case 18:
        Re !== null && (mn ? (e = Re, t = t.stateNode, e.nodeType === 8 ? Po(e.parentNode, t) : e.nodeType === 1 && Po(e, t), yr(e)) : Po(Re, t.stateNode));
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
            var c = a, d = c.destroy;
            c = c.tag, d !== void 0 && ((c & 2) !== 0 || (c & 4) !== 0) && ma(t, n, d), a = a.next;
          } while (a !== l);
        }
        tt(e, n, t);
        break;
      case 1:
        if (!Qe && (Jt(t, n), l = t.stateNode, typeof l.componentWillUnmount == "function")) try {
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
  function Hu(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new Ep()), n.forEach(function(l) {
        var a = Lp.bind(null, e, l);
        t.has(l) || (t.add(l), l.then(a, a));
      });
    }
  }
  function Nn(e, n) {
    var t = n.deletions;
    if (t !== null) for (var l = 0; l < t.length; l++) {
      var a = t[l];
      try {
        var c = e, d = n, N = d;
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
        Uu(c, d, a), Re = null, mn = !1;
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
            Gr(3, e, e.return), qi(3, e);
          } catch (X) {
            Ee(e, e.return, X);
          }
          try {
            Gr(5, e, e.return);
          } catch (X) {
            Ee(e, e.return, X);
          }
        }
        break;
      case 1:
        Nn(n, e), Cn(e), l & 512 && t !== null && Jt(t, t.return);
        break;
      case 5:
        if (Nn(n, e), Cn(e), l & 512 && t !== null && Jt(t, t.return), e.flags & 32) {
          var a = e.stateNode;
          try {
            sr(a, "");
          } catch (X) {
            Ee(e, e.return, X);
          }
        }
        if (l & 4 && (a = e.stateNode, a != null)) {
          var c = e.memoizedProps, d = t !== null ? t.memoizedProps : c, N = e.type, y = e.updateQueue;
          if (e.updateQueue = null, y !== null) try {
            N === "input" && c.type === "radio" && c.name != null && ws(a, c), Yl(N, d);
            var B = Yl(N, c);
            for (d = 0; d < y.length; d += 2) {
              var z = y[d], O = y[d + 1];
              z === "style" ? As(a, O) : z === "dangerouslySetInnerHTML" ? Cs(a, O) : z === "children" ? sr(a, O) : K(a, z, O, B);
            }
            switch (N) {
              case "input":
                jl(a, c);
                break;
              case "textarea":
                _s(a, c);
                break;
              case "select":
                var V = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!c.multiple;
                var Q = c.value;
                Q != null ? Vt(a, !!c.multiple, Q, !1) : V !== !!c.multiple && (c.defaultValue != null ? Vt(
                  a,
                  !!c.multiple,
                  c.defaultValue,
                  !0
                ) : Vt(a, !!c.multiple, c.multiple ? [] : "", !1));
            }
            a[Mr] = c;
          } catch (X) {
            Ee(e, e.return, X);
          }
        }
        break;
      case 6:
        if (Nn(n, e), Cn(e), l & 4) {
          if (e.stateNode === null) throw Error(o(162));
          a = e.stateNode, c = e.memoizedProps;
          try {
            a.nodeValue = c;
          } catch (X) {
            Ee(e, e.return, X);
          }
        }
        break;
      case 3:
        if (Nn(n, e), Cn(e), l & 4 && t !== null && t.memoizedState.isDehydrated) try {
          yr(n.containerInfo);
        } catch (X) {
          Ee(e, e.return, X);
        }
        break;
      case 4:
        Nn(n, e), Cn(e);
        break;
      case 13:
        Nn(n, e), Cn(e), a = e.child, a.flags & 8192 && (c = a.memoizedState !== null, a.stateNode.isHidden = c, !c || a.alternate !== null && a.alternate.memoizedState !== null || (Sa = Ae())), l & 4 && Hu(e);
        break;
      case 22:
        if (z = t !== null && t.memoizedState !== null, e.mode & 1 ? (Qe = (B = Qe) || z, Nn(n, e), Qe = B) : Nn(n, e), Cn(e), l & 8192) {
          if (B = e.memoizedState !== null, (e.stateNode.isHidden = B) && !z && (e.mode & 1) !== 0) for (U = e, z = e.child; z !== null; ) {
            for (O = U = z; U !== null; ) {
              switch (V = U, Q = V.child, V.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Gr(4, V, V.return);
                  break;
                case 1:
                  Jt(V, V.return);
                  var W = V.stateNode;
                  if (typeof W.componentWillUnmount == "function") {
                    l = V, t = V.return;
                    try {
                      n = l, W.props = n.memoizedProps, W.state = n.memoizedState, W.componentWillUnmount();
                    } catch (X) {
                      Ee(l, t, X);
                    }
                  }
                  break;
                case 5:
                  Jt(V, V.return);
                  break;
                case 22:
                  if (V.memoizedState !== null) {
                    qu(O);
                    continue;
                  }
              }
              Q !== null ? (Q.return = V, U = Q) : qu(O);
            }
            z = z.sibling;
          }
          e: for (z = null, O = e; ; ) {
            if (O.tag === 5) {
              if (z === null) {
                z = O;
                try {
                  a = O.stateNode, B ? (c = a.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none") : (N = O.stateNode, y = O.memoizedProps.style, d = y != null && y.hasOwnProperty("display") ? y.display : null, N.style.display = Es("display", d));
                } catch (X) {
                  Ee(e, e.return, X);
                }
              }
            } else if (O.tag === 6) {
              if (z === null) try {
                O.stateNode.nodeValue = B ? "" : O.memoizedProps;
              } catch (X) {
                Ee(e, e.return, X);
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
            l.flags & 32 && (sr(a, ""), l.flags &= -33);
            var c = ju(e);
            ya(e, c, a);
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
  function Mp(e, n, t) {
    U = e, Xu(e);
  }
  function Xu(e, n, t) {
    for (var l = (e.mode & 1) !== 0; U !== null; ) {
      var a = U, c = a.child;
      if (a.tag === 22 && l) {
        var d = a.memoizedState !== null || Yi;
        if (!d) {
          var N = a.alternate, y = N !== null && N.memoizedState !== null || Qe;
          N = Yi;
          var B = Qe;
          if (Yi = d, (Qe = y) && !B) for (U = a; U !== null; ) d = U, y = d.child, d.tag === 22 && d.memoizedState !== null ? Zu(a) : y !== null ? (y.return = d, U = y) : Zu(a);
          for (; c !== null; ) U = c, Xu(c), c = c.sibling;
          U = a, Yi = N, Qe = B;
        }
        Yu(e);
      } else (a.subtreeFlags & 8772) !== 0 && c !== null ? (c.return = a, U = c) : Yu(e);
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
              var c = n.updateQueue;
              c !== null && qc(n, c, l);
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
                qc(n, d, t);
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
          Qe || n.flags & 512 && Na(n);
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
            var c = n.return;
            try {
              Na(n);
            } catch (y) {
              Ee(n, c, y);
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
  var Vp = Math.ceil, Zi = J.ReactCurrentDispatcher, xa = J.ReactCurrentOwner, un = J.ReactCurrentBatchConfig, Ne = 0, Te = null, Ve = null, Le = 0, ln = 0, bt = Zn(0), ze = 0, Kr = null, yt = 0, Ji = 0, wa = 0, Qr = null, qe = null, Sa = 0, er = 1 / 0, Fn = null, bi = !1, ka = null, rt = null, el = !1, it = null, nl = 0, jr = 0, _a = null, tl = -1, rl = 0;
  function He() {
    return (Ne & 6) !== 0 ? Ae() : tl !== -1 ? tl : tl = Ae();
  }
  function lt(e) {
    return (e.mode & 1) === 0 ? 1 : (Ne & 2) !== 0 && Le !== 0 ? Le & -Le : pp.transition !== null ? (rl === 0 && (rl = js()), rl) : (e = xe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : bs(e.type)), e);
  }
  function vn(e, n, t, l) {
    if (50 < jr) throw jr = 0, _a = null, Error(o(185));
    pr(e, t, l), ((Ne & 2) === 0 || e !== Te) && (e === Te && ((Ne & 2) === 0 && (Ji |= t), ze === 4 && ot(e, Le)), Ze(e, l), t === 1 && Ne === 0 && (n.mode & 1) === 0 && (er = Ae() + 500, Vi && bn()));
  }
  function Ze(e, n) {
    var t = e.callbackNode;
    ph(e, n);
    var l = fi(e, e === Te ? Le : 0);
    if (l === 0) t !== null && Gs(t), e.callbackNode = null, e.callbackPriority = 0;
    else if (n = l & -l, e.callbackPriority !== n) {
      if (t != null && Gs(t), n === 1) e.tag === 0 ? hp(bu.bind(null, e)) : Lc(bu.bind(null, e)), cp(function() {
        (Ne & 6) === 0 && bn();
      }), t = null;
      else {
        switch (Us(l)) {
          case 1:
            t = to;
            break;
          case 4:
            t = Ks;
            break;
          case 16:
            t = si;
            break;
          case 536870912:
            t = Qs;
            break;
          default:
            t = si;
        }
        t = ad(t, Ju.bind(null, e));
      }
      e.callbackPriority = n, e.callbackNode = t;
    }
  }
  function Ju(e, n) {
    if (tl = -1, rl = 0, (Ne & 6) !== 0) throw Error(o(327));
    var t = e.callbackNode;
    if (nr() && e.callbackNode !== t) return null;
    var l = fi(e, e === Te ? Le : 0);
    if (l === 0) return null;
    if ((l & 30) !== 0 || (l & e.expiredLanes) !== 0 || n) n = il(e, l);
    else {
      n = l;
      var a = Ne;
      Ne |= 2;
      var c = nd();
      (Te !== e || Le !== n) && (Fn = null, er = Ae() + 500, wt(e, n));
      do
        try {
          Op();
          break;
        } catch (N) {
          ed(e, N);
        }
      while (!0);
      Ko(), Zi.current = c, Ne = a, Ve !== null ? n = 0 : (Te = null, Le = 0, n = ze);
    }
    if (n !== 0) {
      if (n === 2 && (a = ro(e), a !== 0 && (l = a, n = Da(e, a))), n === 1) throw t = Kr, wt(e, 0), ot(e, l), Ze(e, Ae()), t;
      if (n === 6) ot(e, l);
      else {
        if (a = e.current.alternate, (l & 30) === 0 && !Pp(a) && (n = il(e, l), n === 2 && (c = ro(e), c !== 0 && (l = c, n = Da(e, c))), n === 1)) throw t = Kr, wt(e, 0), ot(e, l), Ze(e, Ae()), t;
        switch (e.finishedWork = a, e.finishedLanes = l, n) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            St(e, qe, Fn);
            break;
          case 3:
            if (ot(e, l), (l & 130023424) === l && (n = Sa + 500 - Ae(), 10 < n)) {
              if (fi(e, 0) !== 0) break;
              if (a = e.suspendedLanes, (a & l) !== l) {
                He(), e.pingedLanes |= e.suspendedLanes & a;
                break;
              }
              e.timeoutHandle = Vo(St.bind(null, e, qe, Fn), n);
              break;
            }
            St(e, qe, Fn);
            break;
          case 4:
            if (ot(e, l), (l & 4194240) === l) break;
            for (n = e.eventTimes, a = -1; 0 < l; ) {
              var d = 31 - fn(l);
              c = 1 << d, d = n[d], d > a && (a = d), l &= ~c;
            }
            if (l = a, l = Ae() - l, l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * Vp(l / 1960)) - l, 10 < l) {
              e.timeoutHandle = Vo(St.bind(null, e, qe, Fn), l);
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
    return Ze(e, Ae()), e.callbackNode === t ? Ju.bind(null, e) : null;
  }
  function Da(e, n) {
    var t = Qr;
    return e.current.memoizedState.isDehydrated && (wt(e, n).flags |= 256), e = il(e, n), e !== 2 && (n = qe, qe = t, n !== null && Ba(n)), e;
  }
  function Ba(e) {
    qe === null ? qe = e : qe.push.apply(qe, e);
  }
  function Pp(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue;
        if (t !== null && (t = t.stores, t !== null)) for (var l = 0; l < t.length; l++) {
          var a = t[l], c = a.getSnapshot;
          a = a.value;
          try {
            if (!hn(c(), a)) return !1;
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
    for (n &= ~wa, n &= ~Ji, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
      var t = 31 - fn(n), l = 1 << t;
      e[t] = -1, n &= ~l;
    }
  }
  function bu(e) {
    if ((Ne & 6) !== 0) throw Error(o(327));
    nr();
    var n = fi(e, 0);
    if ((n & 1) === 0) return Ze(e, Ae()), null;
    var t = il(e, n);
    if (e.tag !== 0 && t === 2) {
      var l = ro(e);
      l !== 0 && (n = l, t = Da(e, l));
    }
    if (t === 1) throw t = Kr, wt(e, 0), ot(e, n), Ze(e, Ae()), t;
    if (t === 6) throw Error(o(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n, St(e, qe, Fn), Ze(e, Ae()), null;
  }
  function Ca(e, n) {
    var t = Ne;
    Ne |= 1;
    try {
      return e(n);
    } finally {
      Ne = t, Ne === 0 && (er = Ae() + 500, Vi && bn());
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
      xe = l, un.transition = t, Ne = n, (Ne & 6) === 0 && bn();
    }
  }
  function Ea() {
    ln = bt.current, _e(bt);
  }
  function wt(e, n) {
    e.finishedWork = null, e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1, sp(t)), Ve !== null) for (t = Ve.return; t !== null; ) {
      var l = t;
      switch (Ro(l), l.tag) {
        case 1:
          l = l.type.childContextTypes, l != null && Ai();
          break;
        case 3:
          qt(), _e(We), _e($e), qo();
          break;
        case 5:
          Xo(l);
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
          Qo(l.type._context);
          break;
        case 22:
        case 23:
          Ea();
      }
      t = t.return;
    }
    if (Te = e, Ve = e = at(e.current, null), Le = ln = n, ze = 0, Kr = null, wa = Ji = yt = 0, qe = Qr = null, mt !== null) {
      for (n = 0; n < mt.length; n++) if (t = mt[n], l = t.interleaved, l !== null) {
        t.interleaved = null;
        var a = l.next, c = t.pending;
        if (c !== null) {
          var d = c.next;
          c.next = a, l.next = d;
        }
        t.pending = l;
      }
      mt = null;
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
        if (vt = 0, Oe = Pe = Ce = null, Ir = !1, Rr = 0, xa.current = null, t === null || t.return === null) {
          ze = 1, Kr = n, Ve = null;
          break;
        }
        e: {
          var c = e, d = t.return, N = t, y = n;
          if (n = Le, N.flags |= 32768, y !== null && typeof y == "object" && typeof y.then == "function") {
            var B = y, z = N, O = z.tag;
            if ((z.mode & 1) === 0 && (O === 0 || O === 11 || O === 15)) {
              var V = z.alternate;
              V ? (z.updateQueue = V.updateQueue, z.memoizedState = V.memoizedState, z.lanes = V.lanes) : (z.updateQueue = null, z.memoizedState = null);
            }
            var Q = Du(d);
            if (Q !== null) {
              Q.flags &= -257, Bu(Q, d, N, c, n), Q.mode & 1 && _u(c, B, n), n = Q, y = B;
              var W = n.updateQueue;
              if (W === null) {
                var X = /* @__PURE__ */ new Set();
                X.add(y), n.updateQueue = X;
              } else W.add(y);
              break e;
            } else {
              if ((n & 1) === 0) {
                _u(c, B, n), Aa();
                break e;
              }
              y = Error(o(426));
            }
          } else if (De && N.mode & 1) {
            var Me = Du(d);
            if (Me !== null) {
              (Me.flags & 65536) === 0 && (Me.flags |= 256), Bu(Me, d, N, c, n), $o(Zt(y, N));
              break e;
            }
          }
          c = y = Zt(y, N), ze !== 4 && (ze = 2), Qr === null ? Qr = [c] : Qr.push(c), c = d;
          do {
            switch (c.tag) {
              case 3:
                c.flags |= 65536, n &= -n, c.lanes |= n;
                var _ = Su(c, y, n);
                Yc(c, _);
                break e;
              case 1:
                N = y;
                var x = c.type, D = c.stateNode;
                if ((c.flags & 128) === 0 && (typeof x.getDerivedStateFromError == "function" || D !== null && typeof D.componentDidCatch == "function" && (rt === null || !rt.has(D)))) {
                  c.flags |= 65536, n &= -n, c.lanes |= n;
                  var L = ku(c, N, n);
                  Yc(c, L);
                  break e;
                }
            }
            c = c.return;
          } while (c !== null);
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
    (ze === 0 || ze === 3 || ze === 2) && (ze = 4), Te === null || (yt & 268435455) === 0 && (Ji & 268435455) === 0 || ot(Te, Le);
  }
  function il(e, n) {
    var t = Ne;
    Ne |= 2;
    var l = nd();
    (Te !== e || Le !== n) && (Fn = null, wt(e, n));
    do
      try {
        zp();
        break;
      } catch (a) {
        ed(e, a);
      }
    while (!0);
    if (Ko(), Ne = t, Zi.current = l, Ve !== null) throw Error(o(261));
    return Te = null, Le = 0, ze;
  }
  function zp() {
    for (; Ve !== null; ) td(Ve);
  }
  function Op() {
    for (; Ve !== null && !lh(); ) td(Ve);
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
        if (t = Bp(t, n, ln), t !== null) {
          Ve = t;
          return;
        }
      } else {
        if (t = Cp(t, n), t !== null) {
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
      un.transition = null, xe = 1, Tp(e, n, t, l);
    } finally {
      un.transition = a, xe = l;
    }
    return null;
  }
  function Tp(e, n, t, l) {
    do
      nr();
    while (it !== null);
    if ((Ne & 6) !== 0) throw Error(o(327));
    t = e.finishedWork;
    var a = e.finishedLanes;
    if (t === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(o(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var c = t.lanes | t.childLanes;
    if (gh(e, c), e === Te && (Ve = Te = null, Le = 0), (t.subtreeFlags & 2064) === 0 && (t.flags & 2064) === 0 || el || (el = !0, ad(si, function() {
      return nr(), null;
    })), c = (t.flags & 15990) !== 0, (t.subtreeFlags & 15990) !== 0 || c) {
      c = un.transition, un.transition = null;
      var d = xe;
      xe = 1;
      var N = Ne;
      Ne |= 4, xa.current = null, Ap(e, t), Wu(t, e), np(Ao), gi = !!Eo, Ao = Eo = null, e.current = t, Mp(t), oh(), Ne = N, xe = d, un.transition = c;
    } else e.current = t;
    if (el && (el = !1, it = e, nl = a), c = e.pendingLanes, c === 0 && (rt = null), ch(t.stateNode), Ze(e, Ae()), n !== null) for (l = e.onRecoverableError, t = 0; t < n.length; t++) a = n[t], l(a.value, { componentStack: a.stack, digest: a.digest });
    if (bi) throw bi = !1, e = ka, ka = null, e;
    return (nl & 1) !== 0 && e.tag !== 0 && nr(), c = e.pendingLanes, (c & 1) !== 0 ? e === _a ? jr++ : (jr = 0, _a = e) : jr = 0, bn(), null;
  }
  function nr() {
    if (it !== null) {
      var e = Us(nl), n = un.transition, t = xe;
      try {
        if (un.transition = null, xe = 16 > e ? 16 : e, it === null) var l = !1;
        else {
          if (e = it, it = null, nl = 0, (Ne & 6) !== 0) throw Error(o(331));
          var a = Ne;
          for (Ne |= 4, U = e.current; U !== null; ) {
            var c = U, d = c.child;
            if ((U.flags & 16) !== 0) {
              var N = c.deletions;
              if (N !== null) {
                for (var y = 0; y < N.length; y++) {
                  var B = N[y];
                  for (U = B; U !== null; ) {
                    var z = U;
                    switch (z.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Gr(8, z, c);
                    }
                    var O = z.child;
                    if (O !== null) O.return = z, U = O;
                    else for (; U !== null; ) {
                      z = U;
                      var V = z.sibling, Q = z.return;
                      if (Ku(z), z === B) {
                        U = null;
                        break;
                      }
                      if (V !== null) {
                        V.return = Q, U = V;
                        break;
                      }
                      U = Q;
                    }
                  }
                }
                var W = c.alternate;
                if (W !== null) {
                  var X = W.child;
                  if (X !== null) {
                    W.child = null;
                    do {
                      var Me = X.sibling;
                      X.sibling = null, X = Me;
                    } while (X !== null);
                  }
                }
                U = c;
              }
            }
            if ((c.subtreeFlags & 2064) !== 0 && d !== null) d.return = c, U = d;
            else e: for (; U !== null; ) {
              if (c = U, (c.flags & 2048) !== 0) switch (c.tag) {
                case 0:
                case 11:
                case 15:
                  Gr(9, c, c.return);
              }
              var _ = c.sibling;
              if (_ !== null) {
                _.return = c.return, U = _;
                break e;
              }
              U = c.return;
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
              var L = N.sibling;
              if (L !== null) {
                L.return = N.return, U = L;
                break e;
              }
              U = N.return;
            }
          }
          if (Ne = a, bn(), kn && typeof kn.onPostCommitFiberRoot == "function") try {
            kn.onPostCommitFiberRoot(ci, e);
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
  function id(e, n, t) {
    n = Zt(t, n), n = Su(e, n, 1), e = nt(e, n, 1), n = He(), e !== null && (pr(e, 1, n), Ze(e, n));
  }
  function Ee(e, n, t) {
    if (e.tag === 3) id(e, e, t);
    else for (; n !== null; ) {
      if (n.tag === 3) {
        id(n, e, t);
        break;
      } else if (n.tag === 1) {
        var l = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (rt === null || !rt.has(l))) {
          e = Zt(t, e), e = ku(n, e, 1), n = nt(n, e, 1), e = He(), n !== null && (pr(n, 1, e), Ze(n, e));
          break;
        }
      }
      n = n.return;
    }
  }
  function Ip(e, n, t) {
    var l = e.pingCache;
    l !== null && l.delete(n), n = He(), e.pingedLanes |= e.suspendedLanes & t, Te === e && (Le & t) === t && (ze === 4 || ze === 3 && (Le & 130023424) === Le && 500 > Ae() - Sa ? wt(e, 0) : wa |= t), Ze(e, n);
  }
  function ld(e, n) {
    n === 0 && ((e.mode & 1) === 0 ? n = 1 : (n = di, di <<= 1, (di & 130023424) === 0 && (di = 4194304)));
    var t = He();
    e = In(e, n), e !== null && (pr(e, n, t), Ze(e, t));
  }
  function Rp(e) {
    var n = e.memoizedState, t = 0;
    n !== null && (t = n.retryLane), ld(e, t);
  }
  function Lp(e, n) {
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
      if ((e.lanes & t) === 0 && (n.flags & 128) === 0) return Ye = !1, Dp(e, n, t);
      Ye = (e.flags & 131072) !== 0;
    }
    else Ye = !1, De && (n.flags & 1048576) !== 0 && Fc(n, zi, n.index);
    switch (n.lanes = 0, n.tag) {
      case 2:
        var l = n.type;
        Xi(e, n), e = n.pendingProps;
        var a = Qt(n, $e.current);
        Yt(n, t), a = bo(null, n, l, e, a, t);
        var c = ea();
        return n.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, Xe(l) ? (c = !0, Mi(n)) : c = !1, n.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, Ho(n), a.updater = Hi, n.stateNode = a, a._reactInternals = n, oa(n, l, e, t), n = ua(null, n, l, !0, c, t)) : (n.tag = 0, De && c && Io(n), Ue(null, n, a, t), n = n.child), n;
      case 16:
        l = n.elementType;
        e: {
          switch (Xi(e, n), e = n.pendingProps, a = l._init, l = a(l._payload), n.type = l, a = n.tag = $p(l), e = gn(l, e), a) {
            case 0:
              n = ca(null, n, l, e, t);
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
        return l = n.type, a = n.pendingProps, a = n.elementType === l ? a : gn(l, a), ca(e, n, l, a, t);
      case 1:
        return l = n.type, a = n.pendingProps, a = n.elementType === l ? a : gn(l, a), Pu(e, n, l, a, t);
      case 3:
        e: {
          if (zu(n), e === null) throw Error(o(387));
          l = n.pendingProps, c = n.memoizedState, a = c.element, Xc(e, n), Fi(n, l, null, t);
          var d = n.memoizedState;
          if (l = d.element, c.isDehydrated) if (c = { element: l, isDehydrated: !1, cache: d.cache, pendingSuspenseBoundaries: d.pendingSuspenseBoundaries, transitions: d.transitions }, n.updateQueue.baseState = c, n.memoizedState = c, n.flags & 256) {
            a = Zt(Error(o(423)), n), n = Ou(e, n, l, t, a);
            break e;
          } else if (l !== a) {
            a = Zt(Error(o(424)), n), n = Ou(e, n, l, t, a);
            break e;
          } else for (rn = qn(n.stateNode.containerInfo.firstChild), tn = n, De = !0, pn = null, t = Hc(n, null, l, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
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
        return Zc(n), e === null && Fo(n), l = n.type, a = n.pendingProps, c = e !== null ? e.memoizedProps : null, d = a.children, Mo(l, a) ? d = null : c !== null && Mo(l, c) && (n.flags |= 32), Vu(e, n), Ue(e, n, d, t), n.child;
      case 6:
        return e === null && Fo(n), null;
      case 13:
        return Tu(e, n, t);
      case 4:
        return Wo(n, n.stateNode.containerInfo), l = n.pendingProps, e === null ? n.child = Wt(n, null, l, t) : Ue(e, n, l, t), n.child;
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
          if (l = n.type._context, a = n.pendingProps, c = n.memoizedProps, d = a.value, Se(Ii, l._currentValue), l._currentValue = d, c !== null) if (hn(c.value, d)) {
            if (c.children === a.children && !We.current) {
              n = Ln(e, n, t);
              break e;
            }
          } else for (c = n.child, c !== null && (c.return = n); c !== null; ) {
            var N = c.dependencies;
            if (N !== null) {
              d = c.child;
              for (var y = N.firstContext; y !== null; ) {
                if (y.context === l) {
                  if (c.tag === 1) {
                    y = Rn(-1, t & -t), y.tag = 2;
                    var B = c.updateQueue;
                    if (B !== null) {
                      B = B.shared;
                      var z = B.pending;
                      z === null ? y.next = y : (y.next = z.next, z.next = y), B.pending = y;
                    }
                  }
                  c.lanes |= t, y = c.alternate, y !== null && (y.lanes |= t), jo(
                    c.return,
                    t,
                    n
                  ), N.lanes |= t;
                  break;
                }
                y = y.next;
              }
            } else if (c.tag === 10) d = c.type === n.type ? null : c.child;
            else if (c.tag === 18) {
              if (d = c.return, d === null) throw Error(o(341));
              d.lanes |= t, N = d.alternate, N !== null && (N.lanes |= t), jo(d, t, n), d = c.sibling;
            } else d = c.child;
            if (d !== null) d.return = c;
            else for (d = c; d !== null; ) {
              if (d === n) {
                d = null;
                break;
              }
              if (c = d.sibling, c !== null) {
                c.return = d.return, d = c;
                break;
              }
              d = d.return;
            }
            c = d;
          }
          Ue(e, n, a.children, t), n = n.child;
        }
        return n;
      case 9:
        return a = n.type, l = n.pendingProps.children, Yt(n, t), a = sn(a), l = l(a), n.flags |= 1, Ue(e, n, l, t), n.child;
      case 14:
        return l = n.type, a = gn(l, n.pendingProps), a = gn(l.type, a), Eu(e, n, l, a, t);
      case 15:
        return Au(e, n, n.type, n.pendingProps, t);
      case 17:
        return l = n.type, a = n.pendingProps, a = n.elementType === l ? a : gn(l, a), Xi(e, n), n.tag = 1, Xe(l) ? (e = !0, Mi(n)) : e = !1, Yt(n, t), xu(n, l, a), oa(n, l, a, t), ua(null, n, l, !0, e, t);
      case 19:
        return Ru(e, n, t);
      case 22:
        return Mu(e, n, t);
    }
    throw Error(o(156, n.tag));
  };
  function ad(e, n) {
    return $s(e, n);
  }
  function Fp(e, n, t, l) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function dn(e, n, t, l) {
    return new Fp(e, n, t, l);
  }
  function Ma(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function $p(e) {
    if (typeof e == "function") return Ma(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === M) return 11;
      if (e === he) return 14;
    }
    return 2;
  }
  function at(e, n) {
    var t = e.alternate;
    return t === null ? (t = dn(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
  }
  function ll(e, n, t, l, a, c) {
    var d = 2;
    if (l = e, typeof e == "function") Ma(e) && (d = 1);
    else if (typeof e == "string") d = 5;
    else e: switch (e) {
      case I:
        return kt(t.children, a, c, n);
      case Z:
        d = 8, a |= 8;
        break;
      case ce:
        return e = dn(12, t, n, a | 2), e.elementType = ce, e.lanes = c, e;
      case P:
        return e = dn(13, t, n, a), e.elementType = P, e.lanes = c, e;
      case $:
        return e = dn(19, t, n, a), e.elementType = $, e.lanes = c, e;
      case se:
        return ol(t, a, c, n);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case pe:
            d = 10;
            break e;
          case A:
            d = 9;
            break e;
          case M:
            d = 11;
            break e;
          case he:
            d = 14;
            break e;
          case ge:
            d = 16, l = null;
            break e;
        }
        throw Error(o(130, e == null ? e : typeof e, ""));
    }
    return n = dn(d, t, n, a), n.elementType = e, n.type = l, n.lanes = c, n;
  }
  function kt(e, n, t, l) {
    return e = dn(7, e, l, n), e.lanes = t, e;
  }
  function ol(e, n, t, l) {
    return e = dn(22, e, l, n), e.elementType = se, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
  }
  function Va(e, n, t) {
    return e = dn(6, e, null, n), e.lanes = t, e;
  }
  function Pa(e, n, t) {
    return n = dn(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
  }
  function Gp(e, n, t, l, a) {
    this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = io(0), this.expirationTimes = io(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = io(0), this.identifierPrefix = l, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
  }
  function za(e, n, t, l, a, c, d, N, y) {
    return e = new Gp(e, n, t, N, y), n === 1 ? (n = 1, c === !0 && (n |= 8)) : n = 0, c = dn(3, null, null, n), e.current = c, c.stateNode = e, c.memoizedState = { element: l, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ho(c), e;
  }
  function Kp(e, n, t) {
    var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ae, key: l == null ? null : "" + l, children: e, containerInfo: n, implementation: t };
  }
  function sd(e) {
    if (!e) return Jn;
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
      if (Xe(t)) return Ic(e, t, n);
    }
    return n;
  }
  function cd(e, n, t, l, a, c, d, N, y) {
    return e = za(t, l, !0, e, a, c, d, N, y), e.context = sd(null), t = e.current, l = He(), a = lt(t), c = Rn(l, a), c.callback = n ?? null, nt(t, c, a), e.current.lanes = a, pr(e, a, l), Ze(e, l), e;
  }
  function al(e, n, t, l) {
    var a = n.current, c = He(), d = lt(a);
    return t = sd(t), n.context === null ? n.context = t : n.pendingContext = t, n = Rn(c, d), n.payload = { element: e }, l = l === void 0 ? null : l, l !== null && (n.callback = l), e = nt(a, n, d), e !== null && (vn(e, a, d, c), Li(e, a, d)), d;
  }
  function sl(e) {
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
  function Oa(e, n) {
    ud(e, n), (e = e.alternate) && ud(e, n);
  }
  function Qp() {
    return null;
  }
  var dd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Ta(e) {
    this._internalRoot = e;
  }
  cl.prototype.render = Ta.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(o(409));
    al(e, n, null, null);
  }, cl.prototype.unmount = Ta.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      xt(function() {
        al(null, e, null, null);
      }), n[Pn] = null;
    }
  };
  function cl(e) {
    this._internalRoot = e;
  }
  cl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = Xs();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < Wn.length && n !== 0 && n < Wn[t].priority; t++) ;
      Wn.splice(t, 0, e), t === 0 && Zs(e);
    }
  };
  function Ia(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function ul(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function fd() {
  }
  function jp(e, n, t, l, a) {
    if (a) {
      if (typeof l == "function") {
        var c = l;
        l = function() {
          var B = sl(d);
          c.call(B);
        };
      }
      var d = cd(n, l, e, 0, null, !1, !1, "", fd);
      return e._reactRootContainer = d, e[Pn] = d.current, Er(e.nodeType === 8 ? e.parentNode : e), xt(), d;
    }
    for (; a = e.lastChild; ) e.removeChild(a);
    if (typeof l == "function") {
      var N = l;
      l = function() {
        var B = sl(y);
        N.call(B);
      };
    }
    var y = za(e, 0, !1, null, null, !1, !1, "", fd);
    return e._reactRootContainer = y, e[Pn] = y.current, Er(e.nodeType === 8 ? e.parentNode : e), xt(function() {
      al(n, y, t, l);
    }), y;
  }
  function dl(e, n, t, l, a) {
    var c = t._reactRootContainer;
    if (c) {
      var d = c;
      if (typeof a == "function") {
        var N = a;
        a = function() {
          var y = sl(d);
          N.call(y);
        };
      }
      al(n, d, e, a);
    } else d = jp(t, n, e, a, l);
    return sl(d);
  }
  Hs = function(e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var t = hr(n.pendingLanes);
          t !== 0 && (lo(n, t | 1), Ze(n, Ae()), (Ne & 6) === 0 && (er = Ae() + 500, bn()));
        }
        break;
      case 13:
        xt(function() {
          var l = In(e, 1);
          if (l !== null) {
            var a = He();
            vn(l, e, 1, a);
          }
        }), Oa(e, 1);
    }
  }, oo = function(e) {
    if (e.tag === 13) {
      var n = In(e, 134217728);
      if (n !== null) {
        var t = He();
        vn(n, e, 134217728, t);
      }
      Oa(e, 134217728);
    }
  }, Ws = function(e) {
    if (e.tag === 13) {
      var n = lt(e), t = In(e, n);
      if (t !== null) {
        var l = He();
        vn(t, e, n, l);
      }
      Oa(e, n);
    }
  }, Xs = function() {
    return xe;
  }, Ys = function(e, n) {
    var t = xe;
    try {
      return xe = e, n();
    } finally {
      xe = t;
    }
  }, Jl = function(e, n, t) {
    switch (n) {
      case "input":
        if (jl(e, t), n = t.name, t.type === "radio" && n != null) {
          for (t = e; t.parentNode; ) t = t.parentNode;
          for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
            var l = t[n];
            if (l !== e && l.form === e.form) {
              var a = Ei(l);
              if (!a) throw Error(o(90));
              ys(l), jl(l, a);
            }
          }
        }
        break;
      case "textarea":
        _s(e, t);
        break;
      case "select":
        n = t.value, n != null && Vt(e, !!t.multiple, n, !1);
    }
  }, zs = Ca, Os = xt;
  var Up = { usingClientEntryPoint: !1, Events: [Vr, Gt, Ei, Vs, Ps, Ca] }, Ur = { findFiberByHostInstance: ft, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Hp = { bundleType: Ur.bundleType, version: Ur.version, rendererPackageName: Ur.rendererPackageName, rendererConfig: Ur.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: J.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Ls(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Ur.findFiberByHostInstance || Qp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var fl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!fl.isDisabled && fl.supportsFiber) try {
      ci = fl.inject(Hp), kn = fl;
    } catch {
    }
  }
  return Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Up, Je.createPortal = function(e, n) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ia(n)) throw Error(o(200));
    return Kp(e, n, null, t);
  }, Je.createRoot = function(e, n) {
    if (!Ia(e)) throw Error(o(299));
    var t = !1, l = "", a = dd;
    return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), n = za(e, 1, !1, null, null, t, !1, l, a), e[Pn] = n.current, Er(e.nodeType === 8 ? e.parentNode : e), new Ta(n);
  }, Je.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = Ls(n), e = e === null ? null : e.stateNode, e;
  }, Je.flushSync = function(e) {
    return xt(e);
  }, Je.hydrate = function(e, n, t) {
    if (!ul(n)) throw Error(o(200));
    return dl(null, e, n, !0, t);
  }, Je.hydrateRoot = function(e, n, t) {
    if (!Ia(e)) throw Error(o(405));
    var l = t != null && t.hydratedSources || null, a = !1, c = "", d = dd;
    if (t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (c = t.identifierPrefix), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), n = cd(n, null, e, 1, t ?? null, a, !1, c, d), e[Pn] = n.current, Er(e), l) for (e = 0; e < l.length; e++) t = l[e], a = t._getVersion, a = a(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, a] : n.mutableSourceEagerHydrationData.push(
      t,
      a
    );
    return new cl(n);
  }, Je.render = function(e, n, t) {
    if (!ul(n)) throw Error(o(200));
    return dl(null, e, n, !1, t);
  }, Je.unmountComponentAtNode = function(e) {
    if (!ul(e)) throw Error(o(40));
    return e._reactRootContainer ? (xt(function() {
      dl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Pn] = null;
      });
    }), !0) : !1;
  }, Je.unstable_batchedUpdates = Ca, Je.unstable_renderSubtreeIntoContainer = function(e, n, t, l) {
    if (!ul(t)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return dl(e, n, t, !1, l);
  }, Je.version = "18.3.1-next-f1338f8080-20240426", Je;
}
var xd;
function e0() {
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
  return r(), Fa.exports = bp(), Fa.exports;
}
var wd;
function n0() {
  if (wd) return hl;
  wd = 1;
  var r = e0();
  return hl.createRoot = r.createRoot, hl.hydrateRoot = r.hydrateRoot, hl;
}
var Sd = n0(), Kn = ls();
function xl(r, i) {
  return r == null || i == null ? NaN : r < i ? -1 : r > i ? 1 : r >= i ? 0 : NaN;
}
function t0(r, i) {
  return r == null || i == null ? NaN : i < r ? -1 : i > r ? 1 : i >= r ? 0 : NaN;
}
function cf(r) {
  let i, o, s;
  r.length !== 2 ? (i = xl, o = (p, m) => xl(r(p), m), s = (p, m) => r(p) - m) : (i = r === xl || r === t0 ? r : r0, o = r, s = r);
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
    return k > g && s(p[k - 1], m) > -s(p[k], m) ? k - 1 : k;
  }
  return { left: u, center: h, right: f };
}
function r0() {
  return 0;
}
function i0(r) {
  return r === null ? NaN : +r;
}
const l0 = cf(xl), o0 = l0.right;
cf(i0).center;
class kd extends Map {
  constructor(i, o = c0) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: o } }), i != null) for (const [s, u] of i) this.set(s, u);
  }
  get(i) {
    return super.get(_d(this, i));
  }
  has(i) {
    return super.has(_d(this, i));
  }
  set(i, o) {
    return super.set(a0(this, i), o);
  }
  delete(i) {
    return super.delete(s0(this, i));
  }
}
function _d({ _intern: r, _key: i }, o) {
  const s = i(o);
  return r.has(s) ? r.get(s) : o;
}
function a0({ _intern: r, _key: i }, o) {
  const s = i(o);
  return r.has(s) ? r.get(s) : (r.set(s, o), o);
}
function s0({ _intern: r, _key: i }, o) {
  const s = i(o);
  return r.has(s) && (o = r.get(s), r.delete(s)), o;
}
function c0(r) {
  return r !== null && typeof r == "object" ? r.valueOf() : r;
}
const u0 = Math.sqrt(50), d0 = Math.sqrt(10), f0 = Math.sqrt(2);
function Dl(r, i, o) {
  const s = (i - r) / Math.max(0, o), u = Math.floor(Math.log10(s)), f = s / Math.pow(10, u), h = f >= u0 ? 10 : f >= d0 ? 5 : f >= f0 ? 2 : 1;
  let p, m, g;
  return u < 0 ? (g = Math.pow(10, -u) / h, p = Math.round(r * g), m = Math.round(i * g), p / g < r && ++p, m / g > i && --m, g = -g) : (g = Math.pow(10, u) * h, p = Math.round(r / g), m = Math.round(i / g), p * g < r && ++p, m * g > i && --m), m < p && 0.5 <= o && o < 2 ? Dl(r, i, o * 2) : [p, m, g];
}
function Wa(r, i, o) {
  if (i = +i, r = +r, o = +o, !(o > 0)) return [];
  if (r === i) return [r];
  const s = i < r, [u, f, h] = s ? Dl(i, r, o) : Dl(r, i, o);
  if (!(f >= u)) return [];
  const p = f - u + 1, m = new Array(p);
  if (s)
    if (h < 0) for (let g = 0; g < p; ++g) m[g] = (f - g) / -h;
    else for (let g = 0; g < p; ++g) m[g] = (f - g) * h;
  else if (h < 0) for (let g = 0; g < p; ++g) m[g] = (u + g) / -h;
  else for (let g = 0; g < p; ++g) m[g] = (u + g) * h;
  return m;
}
function Xa(r, i, o) {
  return i = +i, r = +r, o = +o, Dl(r, i, o)[2];
}
function h0(r, i, o) {
  i = +i, r = +r, o = +o;
  const s = i < r, u = s ? Xa(i, r, o) : Xa(r, i, o);
  return (s ? -1 : 1) * (u < 0 ? 1 / -u : u);
}
var p0 = { value: () => {
} };
function uf() {
  for (var r = 0, i = arguments.length, o = {}, s; r < i; ++r) {
    if (!(s = arguments[r] + "") || s in o || /[\s.]/.test(s)) throw new Error("illegal type: " + s);
    o[s] = [];
  }
  return new wl(o);
}
function wl(r) {
  this._ = r;
}
function g0(r, i) {
  return r.trim().split(/^|\s+/).map(function(o) {
    var s = "", u = o.indexOf(".");
    if (u >= 0 && (s = o.slice(u + 1), o = o.slice(0, u)), o && !i.hasOwnProperty(o)) throw new Error("unknown type: " + o);
    return { type: o, name: s };
  });
}
wl.prototype = uf.prototype = {
  constructor: wl,
  on: function(r, i) {
    var o = this._, s = g0(r + "", o), u, f = -1, h = s.length;
    if (arguments.length < 2) {
      for (; ++f < h; ) if ((u = (r = s[f]).type) && (u = m0(o[u], r.name))) return u;
      return;
    }
    if (i != null && typeof i != "function") throw new Error("invalid callback: " + i);
    for (; ++f < h; )
      if (u = (r = s[f]).type) o[u] = Dd(o[u], r.name, i);
      else if (i == null) for (u in o) o[u] = Dd(o[u], r.name, null);
    return this;
  },
  copy: function() {
    var r = {}, i = this._;
    for (var o in i) r[o] = i[o].slice();
    return new wl(r);
  },
  call: function(r, i) {
    if ((u = arguments.length - 2) > 0) for (var o = new Array(u), s = 0, u, f; s < u; ++s) o[s] = arguments[s + 2];
    if (!this._.hasOwnProperty(r)) throw new Error("unknown type: " + r);
    for (f = this._[r], s = 0, u = f.length; s < u; ++s) f[s].value.apply(i, o);
  },
  apply: function(r, i, o) {
    if (!this._.hasOwnProperty(r)) throw new Error("unknown type: " + r);
    for (var s = this._[r], u = 0, f = s.length; u < f; ++u) s[u].value.apply(i, o);
  }
};
function m0(r, i) {
  for (var o = 0, s = r.length, u; o < s; ++o)
    if ((u = r[o]).name === i)
      return u.value;
}
function Dd(r, i, o) {
  for (var s = 0, u = r.length; s < u; ++s)
    if (r[s].name === i) {
      r[s] = p0, r = r.slice(0, s).concat(r.slice(s + 1));
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
function N0(r) {
  return function() {
    var i = this.ownerDocument, o = this.namespaceURI;
    return o === Ya && i.documentElement.namespaceURI === Ya ? i.createElement(r) : i.createElementNS(o, r);
  };
}
function v0(r) {
  return function() {
    return this.ownerDocument.createElementNS(r.space, r.local);
  };
}
function df(r) {
  var i = Fl(r);
  return (i.local ? v0 : N0)(i);
}
function y0() {
}
function os(r) {
  return r == null ? y0 : function() {
    return this.querySelector(r);
  };
}
function x0(r) {
  typeof r != "function" && (r = os(r));
  for (var i = this._groups, o = i.length, s = new Array(o), u = 0; u < o; ++u)
    for (var f = i[u], h = f.length, p = s[u] = new Array(h), m, g, v = 0; v < h; ++v)
      (m = f[v]) && (g = r.call(m, m.__data__, v, f)) && ("__data__" in m && (g.__data__ = m.__data__), p[v] = g);
  return new wn(s, this._parents);
}
function w0(r) {
  return r == null ? [] : Array.isArray(r) ? r : Array.from(r);
}
function S0() {
  return [];
}
function ff(r) {
  return r == null ? S0 : function() {
    return this.querySelectorAll(r);
  };
}
function k0(r) {
  return function() {
    return w0(r.apply(this, arguments));
  };
}
function _0(r) {
  typeof r == "function" ? r = k0(r) : r = ff(r);
  for (var i = this._groups, o = i.length, s = [], u = [], f = 0; f < o; ++f)
    for (var h = i[f], p = h.length, m, g = 0; g < p; ++g)
      (m = h[g]) && (s.push(r.call(m, m.__data__, g, h)), u.push(m));
  return new wn(s, u);
}
function hf(r) {
  return function() {
    return this.matches(r);
  };
}
function pf(r) {
  return function(i) {
    return i.matches(r);
  };
}
var D0 = Array.prototype.find;
function B0(r) {
  return function() {
    return D0.call(this.children, r);
  };
}
function C0() {
  return this.firstElementChild;
}
function E0(r) {
  return this.select(r == null ? C0 : B0(typeof r == "function" ? r : pf(r)));
}
var A0 = Array.prototype.filter;
function M0() {
  return Array.from(this.children);
}
function V0(r) {
  return function() {
    return A0.call(this.children, r);
  };
}
function P0(r) {
  return this.selectAll(r == null ? M0 : V0(typeof r == "function" ? r : pf(r)));
}
function z0(r) {
  typeof r != "function" && (r = hf(r));
  for (var i = this._groups, o = i.length, s = new Array(o), u = 0; u < o; ++u)
    for (var f = i[u], h = f.length, p = s[u] = [], m, g = 0; g < h; ++g)
      (m = f[g]) && r.call(m, m.__data__, g, f) && p.push(m);
  return new wn(s, this._parents);
}
function gf(r) {
  return new Array(r.length);
}
function O0() {
  return new wn(this._enter || this._groups.map(gf), this._parents);
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
function T0(r) {
  return function() {
    return r;
  };
}
function I0(r, i, o, s, u, f) {
  for (var h = 0, p, m = i.length, g = f.length; h < g; ++h)
    (p = i[h]) ? (p.__data__ = f[h], s[h] = p) : o[h] = new Bl(r, f[h]);
  for (; h < m; ++h)
    (p = i[h]) && (u[h] = p);
}
function R0(r, i, o, s, u, f, h) {
  var p, m, g = /* @__PURE__ */ new Map(), v = i.length, k = f.length, w = new Array(v), C;
  for (p = 0; p < v; ++p)
    (m = i[p]) && (w[p] = C = h.call(m, m.__data__, p, i) + "", g.has(C) ? u[p] = m : g.set(C, m));
  for (p = 0; p < k; ++p)
    C = h.call(r, f[p], p, f) + "", (m = g.get(C)) ? (s[p] = m, m.__data__ = f[p], g.delete(C)) : o[p] = new Bl(r, f[p]);
  for (p = 0; p < v; ++p)
    (m = i[p]) && g.get(w[p]) === m && (u[p] = m);
}
function L0(r) {
  return r.__data__;
}
function F0(r, i) {
  if (!arguments.length) return Array.from(this, L0);
  var o = i ? R0 : I0, s = this._parents, u = this._groups;
  typeof r != "function" && (r = T0(r));
  for (var f = u.length, h = new Array(f), p = new Array(f), m = new Array(f), g = 0; g < f; ++g) {
    var v = s[g], k = u[g], w = k.length, C = $0(r.call(v, v && v.__data__, g, s)), G = C.length, F = p[g] = new Array(G), H = h[g] = new Array(G), q = m[g] = new Array(w);
    o(v, k, F, H, q, C, i);
    for (var oe = 0, K = 0, J, ue; oe < G; ++oe)
      if (J = F[oe]) {
        for (oe >= K && (K = oe + 1); !(ue = H[K]) && ++K < G; ) ;
        J._next = ue || null;
      }
  }
  return h = new wn(h, s), h._enter = p, h._exit = m, h;
}
function $0(r) {
  return typeof r == "object" && "length" in r ? r : Array.from(r);
}
function G0() {
  return new wn(this._exit || this._groups.map(gf), this._parents);
}
function K0(r, i, o) {
  var s = this.enter(), u = this, f = this.exit();
  return typeof r == "function" ? (s = r(s), s && (s = s.selection())) : s = s.append(r + ""), i != null && (u = i(u), u && (u = u.selection())), o == null ? f.remove() : o(f), s && u ? s.merge(u).order() : u;
}
function Q0(r) {
  for (var i = r.selection ? r.selection() : r, o = this._groups, s = i._groups, u = o.length, f = s.length, h = Math.min(u, f), p = new Array(u), m = 0; m < h; ++m)
    for (var g = o[m], v = s[m], k = g.length, w = p[m] = new Array(k), C, G = 0; G < k; ++G)
      (C = g[G] || v[G]) && (w[G] = C);
  for (; m < u; ++m)
    p[m] = o[m];
  return new wn(p, this._parents);
}
function j0() {
  for (var r = this._groups, i = -1, o = r.length; ++i < o; )
    for (var s = r[i], u = s.length - 1, f = s[u], h; --u >= 0; )
      (h = s[u]) && (f && h.compareDocumentPosition(f) ^ 4 && f.parentNode.insertBefore(h, f), f = h);
  return this;
}
function U0(r) {
  r || (r = H0);
  function i(k, w) {
    return k && w ? r(k.__data__, w.__data__) : !k - !w;
  }
  for (var o = this._groups, s = o.length, u = new Array(s), f = 0; f < s; ++f) {
    for (var h = o[f], p = h.length, m = u[f] = new Array(p), g, v = 0; v < p; ++v)
      (g = h[v]) && (m[v] = g);
    m.sort(i);
  }
  return new wn(u, this._parents).order();
}
function H0(r, i) {
  return r < i ? -1 : r > i ? 1 : r >= i ? 0 : NaN;
}
function W0() {
  var r = arguments[0];
  return arguments[0] = this, r.apply(null, arguments), this;
}
function X0() {
  return Array.from(this);
}
function Y0() {
  for (var r = this._groups, i = 0, o = r.length; i < o; ++i)
    for (var s = r[i], u = 0, f = s.length; u < f; ++u) {
      var h = s[u];
      if (h) return h;
    }
  return null;
}
function q0() {
  let r = 0;
  for (const i of this) ++r;
  return r;
}
function Z0() {
  return !this.node();
}
function J0(r) {
  for (var i = this._groups, o = 0, s = i.length; o < s; ++o)
    for (var u = i[o], f = 0, h = u.length, p; f < h; ++f)
      (p = u[f]) && r.call(p, p.__data__, f, u);
  return this;
}
function b0(r) {
  return function() {
    this.removeAttribute(r);
  };
}
function eg(r) {
  return function() {
    this.removeAttributeNS(r.space, r.local);
  };
}
function ng(r, i) {
  return function() {
    this.setAttribute(r, i);
  };
}
function tg(r, i) {
  return function() {
    this.setAttributeNS(r.space, r.local, i);
  };
}
function rg(r, i) {
  return function() {
    var o = i.apply(this, arguments);
    o == null ? this.removeAttribute(r) : this.setAttribute(r, o);
  };
}
function ig(r, i) {
  return function() {
    var o = i.apply(this, arguments);
    o == null ? this.removeAttributeNS(r.space, r.local) : this.setAttributeNS(r.space, r.local, o);
  };
}
function lg(r, i) {
  var o = Fl(r);
  if (arguments.length < 2) {
    var s = this.node();
    return o.local ? s.getAttributeNS(o.space, o.local) : s.getAttribute(o);
  }
  return this.each((i == null ? o.local ? eg : b0 : typeof i == "function" ? o.local ? ig : rg : o.local ? tg : ng)(o, i));
}
function mf(r) {
  return r.ownerDocument && r.ownerDocument.defaultView || r.document && r || r.defaultView;
}
function og(r) {
  return function() {
    this.style.removeProperty(r);
  };
}
function ag(r, i, o) {
  return function() {
    this.style.setProperty(r, i, o);
  };
}
function sg(r, i, o) {
  return function() {
    var s = i.apply(this, arguments);
    s == null ? this.style.removeProperty(r) : this.style.setProperty(r, s, o);
  };
}
function cg(r, i, o) {
  return arguments.length > 1 ? this.each((i == null ? og : typeof i == "function" ? sg : ag)(r, i, o ?? "")) : ir(this.node(), r);
}
function ir(r, i) {
  return r.style.getPropertyValue(i) || mf(r).getComputedStyle(r, null).getPropertyValue(i);
}
function ug(r) {
  return function() {
    delete this[r];
  };
}
function dg(r, i) {
  return function() {
    this[r] = i;
  };
}
function fg(r, i) {
  return function() {
    var o = i.apply(this, arguments);
    o == null ? delete this[r] : this[r] = o;
  };
}
function hg(r, i) {
  return arguments.length > 1 ? this.each((i == null ? ug : typeof i == "function" ? fg : dg)(r, i)) : this.node()[r];
}
function Nf(r) {
  return r.trim().split(/^|\s+/);
}
function as(r) {
  return r.classList || new vf(r);
}
function vf(r) {
  this._node = r, this._names = Nf(r.getAttribute("class") || "");
}
vf.prototype = {
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
function yf(r, i) {
  for (var o = as(r), s = -1, u = i.length; ++s < u; ) o.add(i[s]);
}
function xf(r, i) {
  for (var o = as(r), s = -1, u = i.length; ++s < u; ) o.remove(i[s]);
}
function pg(r) {
  return function() {
    yf(this, r);
  };
}
function gg(r) {
  return function() {
    xf(this, r);
  };
}
function mg(r, i) {
  return function() {
    (i.apply(this, arguments) ? yf : xf)(this, r);
  };
}
function Ng(r, i) {
  var o = Nf(r + "");
  if (arguments.length < 2) {
    for (var s = as(this.node()), u = -1, f = o.length; ++u < f; ) if (!s.contains(o[u])) return !1;
    return !0;
  }
  return this.each((typeof i == "function" ? mg : i ? pg : gg)(o, i));
}
function vg() {
  this.textContent = "";
}
function yg(r) {
  return function() {
    this.textContent = r;
  };
}
function xg(r) {
  return function() {
    var i = r.apply(this, arguments);
    this.textContent = i ?? "";
  };
}
function wg(r) {
  return arguments.length ? this.each(r == null ? vg : (typeof r == "function" ? xg : yg)(r)) : this.node().textContent;
}
function Sg() {
  this.innerHTML = "";
}
function kg(r) {
  return function() {
    this.innerHTML = r;
  };
}
function _g(r) {
  return function() {
    var i = r.apply(this, arguments);
    this.innerHTML = i ?? "";
  };
}
function Dg(r) {
  return arguments.length ? this.each(r == null ? Sg : (typeof r == "function" ? _g : kg)(r)) : this.node().innerHTML;
}
function Bg() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Cg() {
  return this.each(Bg);
}
function Eg() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Ag() {
  return this.each(Eg);
}
function Mg(r) {
  var i = typeof r == "function" ? r : df(r);
  return this.select(function() {
    return this.appendChild(i.apply(this, arguments));
  });
}
function Vg() {
  return null;
}
function Pg(r, i) {
  var o = typeof r == "function" ? r : df(r), s = i == null ? Vg : typeof i == "function" ? i : os(i);
  return this.select(function() {
    return this.insertBefore(o.apply(this, arguments), s.apply(this, arguments) || null);
  });
}
function zg() {
  var r = this.parentNode;
  r && r.removeChild(this);
}
function Og() {
  return this.each(zg);
}
function Tg() {
  var r = this.cloneNode(!1), i = this.parentNode;
  return i ? i.insertBefore(r, this.nextSibling) : r;
}
function Ig() {
  var r = this.cloneNode(!0), i = this.parentNode;
  return i ? i.insertBefore(r, this.nextSibling) : r;
}
function Rg(r) {
  return this.select(r ? Ig : Tg);
}
function Lg(r) {
  return arguments.length ? this.property("__data__", r) : this.node().__data__;
}
function Fg(r) {
  return function(i) {
    r.call(this, i, this.__data__);
  };
}
function $g(r) {
  return r.trim().split(/^|\s+/).map(function(i) {
    var o = "", s = i.indexOf(".");
    return s >= 0 && (o = i.slice(s + 1), i = i.slice(0, s)), { type: i, name: o };
  });
}
function Gg(r) {
  return function() {
    var i = this.__on;
    if (i) {
      for (var o = 0, s = -1, u = i.length, f; o < u; ++o)
        f = i[o], (!r.type || f.type === r.type) && f.name === r.name ? this.removeEventListener(f.type, f.listener, f.options) : i[++s] = f;
      ++s ? i.length = s : delete this.__on;
    }
  };
}
function Kg(r, i, o) {
  return function() {
    var s = this.__on, u, f = Fg(i);
    if (s) {
      for (var h = 0, p = s.length; h < p; ++h)
        if ((u = s[h]).type === r.type && u.name === r.name) {
          this.removeEventListener(u.type, u.listener, u.options), this.addEventListener(u.type, u.listener = f, u.options = o), u.value = i;
          return;
        }
    }
    this.addEventListener(r.type, f, o), u = { type: r.type, name: r.name, value: i, listener: f, options: o }, s ? s.push(u) : this.__on = [u];
  };
}
function Qg(r, i, o) {
  var s = $g(r + ""), u, f = s.length, h;
  if (arguments.length < 2) {
    var p = this.node().__on;
    if (p) {
      for (var m = 0, g = p.length, v; m < g; ++m)
        for (u = 0, v = p[m]; u < f; ++u)
          if ((h = s[u]).type === v.type && h.name === v.name)
            return v.value;
    }
    return;
  }
  for (p = i ? Kg : Gg, u = 0; u < f; ++u) this.each(p(s[u], i, o));
  return this;
}
function wf(r, i, o) {
  var s = mf(r), u = s.CustomEvent;
  typeof u == "function" ? u = new u(i, o) : (u = s.document.createEvent("Event"), o ? (u.initEvent(i, o.bubbles, o.cancelable), u.detail = o.detail) : u.initEvent(i, !1, !1)), r.dispatchEvent(u);
}
function jg(r, i) {
  return function() {
    return wf(this, r, i);
  };
}
function Ug(r, i) {
  return function() {
    return wf(this, r, i.apply(this, arguments));
  };
}
function Hg(r, i) {
  return this.each((typeof i == "function" ? Ug : jg)(r, i));
}
function* Wg() {
  for (var r = this._groups, i = 0, o = r.length; i < o; ++i)
    for (var s = r[i], u = 0, f = s.length, h; u < f; ++u)
      (h = s[u]) && (yield h);
}
var Xg = [null];
function wn(r, i) {
  this._groups = r, this._parents = i;
}
function ti() {
  return new wn([[document.documentElement]], Xg);
}
function Yg() {
  return this;
}
wn.prototype = ti.prototype = {
  constructor: wn,
  select: x0,
  selectAll: _0,
  selectChild: E0,
  selectChildren: P0,
  filter: z0,
  data: F0,
  enter: O0,
  exit: G0,
  join: K0,
  merge: Q0,
  selection: Yg,
  order: j0,
  sort: U0,
  call: W0,
  nodes: X0,
  node: Y0,
  size: q0,
  empty: Z0,
  each: J0,
  attr: lg,
  style: cg,
  property: hg,
  classed: Ng,
  text: wg,
  html: Dg,
  raise: Cg,
  lower: Ag,
  append: Mg,
  insert: Pg,
  remove: Og,
  clone: Rg,
  datum: Lg,
  on: Qg,
  dispatch: Hg,
  [Symbol.iterator]: Wg
};
function ss(r, i, o) {
  r.prototype = i.prototype = o, o.constructor = r;
}
function Sf(r, i) {
  var o = Object.create(r.prototype);
  for (var s in i) o[s] = i[s];
  return o;
}
function ri() {
}
var Zr = 0.7, Cl = 1 / Zr, rr = "\\s*([+-]?\\d+)\\s*", Jr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Mn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", qg = /^#([0-9a-f]{3,8})$/, Zg = new RegExp(`^rgb\\(${rr},${rr},${rr}\\)$`), Jg = new RegExp(`^rgb\\(${Mn},${Mn},${Mn}\\)$`), bg = new RegExp(`^rgba\\(${rr},${rr},${rr},${Jr}\\)$`), e4 = new RegExp(`^rgba\\(${Mn},${Mn},${Mn},${Jr}\\)$`), n4 = new RegExp(`^hsl\\(${Jr},${Mn},${Mn}\\)$`), t4 = new RegExp(`^hsla\\(${Jr},${Mn},${Mn},${Jr}\\)$`), Cd = {
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
ss(ri, At, {
  copy(r) {
    return Object.assign(new this.constructor(), this, r);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ed,
  // Deprecated! Use color.formatHex.
  formatHex: Ed,
  formatHex8: r4,
  formatHsl: i4,
  formatRgb: Ad,
  toString: Ad
});
function Ed() {
  return this.rgb().formatHex();
}
function r4() {
  return this.rgb().formatHex8();
}
function i4() {
  return kf(this).formatHsl();
}
function Ad() {
  return this.rgb().formatRgb();
}
function At(r) {
  var i, o;
  return r = (r + "").trim().toLowerCase(), (i = qg.exec(r)) ? (o = i[1].length, i = parseInt(i[1], 16), o === 6 ? Md(i) : o === 3 ? new en(i >> 8 & 15 | i >> 4 & 240, i >> 4 & 15 | i & 240, (i & 15) << 4 | i & 15, 1) : o === 8 ? pl(i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, (i & 255) / 255) : o === 4 ? pl(i >> 12 & 15 | i >> 8 & 240, i >> 8 & 15 | i >> 4 & 240, i >> 4 & 15 | i & 240, ((i & 15) << 4 | i & 15) / 255) : null) : (i = Zg.exec(r)) ? new en(i[1], i[2], i[3], 1) : (i = Jg.exec(r)) ? new en(i[1] * 255 / 100, i[2] * 255 / 100, i[3] * 255 / 100, 1) : (i = bg.exec(r)) ? pl(i[1], i[2], i[3], i[4]) : (i = e4.exec(r)) ? pl(i[1] * 255 / 100, i[2] * 255 / 100, i[3] * 255 / 100, i[4]) : (i = n4.exec(r)) ? zd(i[1], i[2] / 100, i[3] / 100, 1) : (i = t4.exec(r)) ? zd(i[1], i[2] / 100, i[3] / 100, i[4]) : Cd.hasOwnProperty(r) ? Md(Cd[r]) : r === "transparent" ? new en(NaN, NaN, NaN, 0) : null;
}
function Md(r) {
  return new en(r >> 16 & 255, r >> 8 & 255, r & 255, 1);
}
function pl(r, i, o, s) {
  return s <= 0 && (r = i = o = NaN), new en(r, i, o, s);
}
function l4(r) {
  return r instanceof ri || (r = At(r)), r ? (r = r.rgb(), new en(r.r, r.g, r.b, r.opacity)) : new en();
}
function qa(r, i, o, s) {
  return arguments.length === 1 ? l4(r) : new en(r, i, o, s ?? 1);
}
function en(r, i, o, s) {
  this.r = +r, this.g = +i, this.b = +o, this.opacity = +s;
}
ss(en, qa, Sf(ri, {
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
    return new en(Et(this.r), Et(this.g), Et(this.b), El(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Vd,
  // Deprecated! Use color.formatHex.
  formatHex: Vd,
  formatHex8: o4,
  formatRgb: Pd,
  toString: Pd
}));
function Vd() {
  return `#${Ct(this.r)}${Ct(this.g)}${Ct(this.b)}`;
}
function o4() {
  return `#${Ct(this.r)}${Ct(this.g)}${Ct(this.b)}${Ct((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Pd() {
  const r = El(this.opacity);
  return `${r === 1 ? "rgb(" : "rgba("}${Et(this.r)}, ${Et(this.g)}, ${Et(this.b)}${r === 1 ? ")" : `, ${r})`}`;
}
function El(r) {
  return isNaN(r) ? 1 : Math.max(0, Math.min(1, r));
}
function Et(r) {
  return Math.max(0, Math.min(255, Math.round(r) || 0));
}
function Ct(r) {
  return r = Et(r), (r < 16 ? "0" : "") + r.toString(16);
}
function zd(r, i, o, s) {
  return s <= 0 ? r = i = o = NaN : o <= 0 || o >= 1 ? r = i = NaN : i <= 0 && (r = NaN), new xn(r, i, o, s);
}
function kf(r) {
  if (r instanceof xn) return new xn(r.h, r.s, r.l, r.opacity);
  if (r instanceof ri || (r = At(r)), !r) return new xn();
  if (r instanceof xn) return r;
  r = r.rgb();
  var i = r.r / 255, o = r.g / 255, s = r.b / 255, u = Math.min(i, o, s), f = Math.max(i, o, s), h = NaN, p = f - u, m = (f + u) / 2;
  return p ? (i === f ? h = (o - s) / p + (o < s) * 6 : o === f ? h = (s - i) / p + 2 : h = (i - o) / p + 4, p /= m < 0.5 ? f + u : 2 - f - u, h *= 60) : p = m > 0 && m < 1 ? 0 : h, new xn(h, p, m, r.opacity);
}
function Al(r, i, o, s) {
  return arguments.length === 1 ? kf(r) : new xn(r, i, o, s ?? 1);
}
function xn(r, i, o, s) {
  this.h = +r, this.s = +i, this.l = +o, this.opacity = +s;
}
ss(xn, Al, Sf(ri, {
  brighter(r) {
    return r = r == null ? Cl : Math.pow(Cl, r), new xn(this.h, this.s, this.l * r, this.opacity);
  },
  darker(r) {
    return r = r == null ? Zr : Math.pow(Zr, r), new xn(this.h, this.s, this.l * r, this.opacity);
  },
  rgb() {
    var r = this.h % 360 + (this.h < 0) * 360, i = isNaN(r) || isNaN(this.s) ? 0 : this.s, o = this.l, s = o + (o < 0.5 ? o : 1 - o) * i, u = 2 * o - s;
    return new en(
      Ka(r >= 240 ? r - 240 : r + 120, u, s),
      Ka(r, u, s),
      Ka(r < 120 ? r + 240 : r - 120, u, s),
      this.opacity
    );
  },
  clamp() {
    return new xn(Od(this.h), gl(this.s), gl(this.l), El(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const r = El(this.opacity);
    return `${r === 1 ? "hsl(" : "hsla("}${Od(this.h)}, ${gl(this.s) * 100}%, ${gl(this.l) * 100}%${r === 1 ? ")" : `, ${r})`}`;
  }
}));
function Od(r) {
  return r = (r || 0) % 360, r < 0 ? r + 360 : r;
}
function gl(r) {
  return Math.max(0, Math.min(1, r || 0));
}
function Ka(r, i, o) {
  return (r < 60 ? i + (o - i) * r / 60 : r < 180 ? o : r < 240 ? i + (o - i) * (240 - r) / 60 : i) * 255;
}
const cs = (r) => () => r;
function a4(r, i) {
  return function(o) {
    return r + o * i;
  };
}
function s4(r, i, o) {
  return r = Math.pow(r, o), i = Math.pow(i, o) - r, o = 1 / o, function(s) {
    return Math.pow(r + s * i, o);
  };
}
function c4(r) {
  return (r = +r) == 1 ? _f : function(i, o) {
    return o - i ? s4(i, o, r) : cs(isNaN(i) ? o : i);
  };
}
function _f(r, i) {
  var o = i - r;
  return o ? a4(r, o) : cs(isNaN(r) ? i : r);
}
const Ml = (function r(i) {
  var o = c4(i);
  function s(u, f) {
    var h = o((u = qa(u)).r, (f = qa(f)).r), p = o(u.g, f.g), m = o(u.b, f.b), g = _f(u.opacity, f.opacity);
    return function(v) {
      return u.r = h(v), u.g = p(v), u.b = m(v), u.opacity = g(v), u + "";
    };
  }
  return s.gamma = r, s;
})(1);
function u4(r, i) {
  i || (i = []);
  var o = r ? Math.min(i.length, r.length) : 0, s = i.slice(), u;
  return function(f) {
    for (u = 0; u < o; ++u) s[u] = r[u] * (1 - f) + i[u] * f;
    return s;
  };
}
function d4(r) {
  return ArrayBuffer.isView(r) && !(r instanceof DataView);
}
function f4(r, i) {
  var o = i ? i.length : 0, s = r ? Math.min(o, r.length) : 0, u = new Array(s), f = new Array(o), h;
  for (h = 0; h < s; ++h) u[h] = us(r[h], i[h]);
  for (; h < o; ++h) f[h] = i[h];
  return function(p) {
    for (h = 0; h < s; ++h) f[h] = u[h](p);
    return f;
  };
}
function h4(r, i) {
  var o = /* @__PURE__ */ new Date();
  return r = +r, i = +i, function(s) {
    return o.setTime(r * (1 - s) + i * s), o;
  };
}
function yn(r, i) {
  return r = +r, i = +i, function(o) {
    return r * (1 - o) + i * o;
  };
}
function p4(r, i) {
  var o = {}, s = {}, u;
  (r === null || typeof r != "object") && (r = {}), (i === null || typeof i != "object") && (i = {});
  for (u in i)
    u in r ? o[u] = us(r[u], i[u]) : s[u] = i[u];
  return function(f) {
    for (u in o) s[u] = o[u](f);
    return s;
  };
}
var Za = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Qa = new RegExp(Za.source, "g");
function g4(r) {
  return function() {
    return r;
  };
}
function m4(r) {
  return function(i) {
    return r(i) + "";
  };
}
function Df(r, i) {
  var o = Za.lastIndex = Qa.lastIndex = 0, s, u, f, h = -1, p = [], m = [];
  for (r = r + "", i = i + ""; (s = Za.exec(r)) && (u = Qa.exec(i)); )
    (f = u.index) > o && (f = i.slice(o, f), p[h] ? p[h] += f : p[++h] = f), (s = s[0]) === (u = u[0]) ? p[h] ? p[h] += u : p[++h] = u : (p[++h] = null, m.push({ i: h, x: yn(s, u) })), o = Qa.lastIndex;
  return o < i.length && (f = i.slice(o), p[h] ? p[h] += f : p[++h] = f), p.length < 2 ? m[0] ? m4(m[0].x) : g4(i) : (i = m.length, function(g) {
    for (var v = 0, k; v < i; ++v) p[(k = m[v]).i] = k.x(g);
    return p.join("");
  });
}
function us(r, i) {
  var o = typeof i, s;
  return i == null || o === "boolean" ? cs(i) : (o === "number" ? yn : o === "string" ? (s = At(i)) ? (i = s, Ml) : Df : i instanceof At ? Ml : i instanceof Date ? h4 : d4(i) ? u4 : Array.isArray(i) ? f4 : typeof i.valueOf != "function" && typeof i.toString != "function" || isNaN(i) ? p4 : yn)(r, i);
}
function N4(r, i) {
  return r = +r, i = +i, function(o) {
    return Math.round(r * (1 - o) + i * o);
  };
}
var Td = 180 / Math.PI, Ja = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Bf(r, i, o, s, u, f) {
  var h, p, m;
  return (h = Math.sqrt(r * r + i * i)) && (r /= h, i /= h), (m = r * o + i * s) && (o -= r * m, s -= i * m), (p = Math.sqrt(o * o + s * s)) && (o /= p, s /= p, m /= p), r * s < i * o && (r = -r, i = -i, m = -m, h = -h), {
    translateX: u,
    translateY: f,
    rotate: Math.atan2(i, r) * Td,
    skewX: Math.atan(m) * Td,
    scaleX: h,
    scaleY: p
  };
}
var ml;
function v4(r) {
  const i = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(r + "");
  return i.isIdentity ? Ja : Bf(i.a, i.b, i.c, i.d, i.e, i.f);
}
function y4(r) {
  return r == null || (ml || (ml = document.createElementNS("http://www.w3.org/2000/svg", "g")), ml.setAttribute("transform", r), !(r = ml.transform.baseVal.consolidate())) ? Ja : (r = r.matrix, Bf(r.a, r.b, r.c, r.d, r.e, r.f));
}
function Cf(r, i, o, s) {
  function u(g) {
    return g.length ? g.pop() + " " : "";
  }
  function f(g, v, k, w, C, G) {
    if (g !== k || v !== w) {
      var F = C.push("translate(", null, i, null, o);
      G.push({ i: F - 4, x: yn(g, k) }, { i: F - 2, x: yn(v, w) });
    } else (k || w) && C.push("translate(" + k + i + w + o);
  }
  function h(g, v, k, w) {
    g !== v ? (g - v > 180 ? v += 360 : v - g > 180 && (g += 360), w.push({ i: k.push(u(k) + "rotate(", null, s) - 2, x: yn(g, v) })) : v && k.push(u(k) + "rotate(" + v + s);
  }
  function p(g, v, k, w) {
    g !== v ? w.push({ i: k.push(u(k) + "skewX(", null, s) - 2, x: yn(g, v) }) : v && k.push(u(k) + "skewX(" + v + s);
  }
  function m(g, v, k, w, C, G) {
    if (g !== k || v !== w) {
      var F = C.push(u(C) + "scale(", null, ",", null, ")");
      G.push({ i: F - 4, x: yn(g, k) }, { i: F - 2, x: yn(v, w) });
    } else (k !== 1 || w !== 1) && C.push(u(C) + "scale(" + k + "," + w + ")");
  }
  return function(g, v) {
    var k = [], w = [];
    return g = r(g), v = r(v), f(g.translateX, g.translateY, v.translateX, v.translateY, k, w), h(g.rotate, v.rotate, k, w), p(g.skewX, v.skewX, k, w), m(g.scaleX, g.scaleY, v.scaleX, v.scaleY, k, w), g = v = null, function(C) {
      for (var G = -1, F = w.length, H; ++G < F; ) k[(H = w[G]).i] = H.x(C);
      return k.join("");
    };
  };
}
var x4 = Cf(v4, "px, ", "px)", "deg)"), w4 = Cf(y4, ", ", ")", ")"), lr = 0, Xr = 0, Wr = 0, Ef = 1e3, Vl, Yr, Pl = 0, Mt = 0, $l = 0, br = typeof performance == "object" && performance.now ? performance : Date, Af = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(r) {
  setTimeout(r, 17);
};
function ds() {
  return Mt || (Af(S4), Mt = br.now() + $l);
}
function S4() {
  Mt = 0;
}
function zl() {
  this._call = this._time = this._next = null;
}
zl.prototype = Mf.prototype = {
  constructor: zl,
  restart: function(r, i, o) {
    if (typeof r != "function") throw new TypeError("callback is not a function");
    o = (o == null ? ds() : +o) + (i == null ? 0 : +i), !this._next && Yr !== this && (Yr ? Yr._next = this : Vl = this, Yr = this), this._call = r, this._time = o, ba();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ba());
  }
};
function Mf(r, i, o) {
  var s = new zl();
  return s.restart(r, i, o), s;
}
function k4() {
  ds(), ++lr;
  for (var r = Vl, i; r; )
    (i = Mt - r._time) >= 0 && r._call.call(void 0, i), r = r._next;
  --lr;
}
function Id() {
  Mt = (Pl = br.now()) + $l, lr = Xr = 0;
  try {
    k4();
  } finally {
    lr = 0, D4(), Mt = 0;
  }
}
function _4() {
  var r = br.now(), i = r - Pl;
  i > Ef && ($l -= i, Pl = r);
}
function D4() {
  for (var r, i = Vl, o, s = 1 / 0; i; )
    i._call ? (s > i._time && (s = i._time), r = i, i = i._next) : (o = i._next, i._next = null, i = r ? r._next = o : Vl = o);
  Yr = r, ba(s);
}
function ba(r) {
  if (!lr) {
    Xr && (Xr = clearTimeout(Xr));
    var i = r - Mt;
    i > 24 ? (r < 1 / 0 && (Xr = setTimeout(Id, r - br.now() - $l)), Wr && (Wr = clearInterval(Wr))) : (Wr || (Pl = br.now(), Wr = setInterval(_4, Ef)), lr = 1, Af(Id));
  }
}
function Rd(r, i, o) {
  var s = new zl();
  return i = i == null ? 0 : +i, s.restart((u) => {
    s.stop(), r(u + i);
  }, i, o), s;
}
var B4 = uf("start", "end", "cancel", "interrupt"), C4 = [], Vf = 0, Ld = 1, es = 2, Sl = 3, Fd = 4, ns = 5, kl = 6;
function Gl(r, i, o, s, u, f) {
  var h = r.__transition;
  if (!h) r.__transition = {};
  else if (o in h) return;
  E4(r, o, {
    name: i,
    index: s,
    // For context during callback.
    group: u,
    // For context during callback.
    on: B4,
    tween: C4,
    time: f.time,
    delay: f.delay,
    duration: f.duration,
    ease: f.ease,
    timer: null,
    state: Vf
  });
}
function fs(r, i) {
  var o = Sn(r, i);
  if (o.state > Vf) throw new Error("too late; already scheduled");
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
function E4(r, i, o) {
  var s = r.__transition, u;
  s[i] = o, o.timer = Mf(f, 0, o.time);
  function f(g) {
    o.state = Ld, o.timer.restart(h, o.delay, o.time), o.delay <= g && h(g - o.delay);
  }
  function h(g) {
    var v, k, w, C;
    if (o.state !== Ld) return m();
    for (v in s)
      if (C = s[v], C.name === o.name) {
        if (C.state === Sl) return Rd(h);
        C.state === Fd ? (C.state = kl, C.timer.stop(), C.on.call("interrupt", r, r.__data__, C.index, C.group), delete s[v]) : +v < i && (C.state = kl, C.timer.stop(), C.on.call("cancel", r, r.__data__, C.index, C.group), delete s[v]);
      }
    if (Rd(function() {
      o.state === Sl && (o.state = Fd, o.timer.restart(p, o.delay, o.time), p(g));
    }), o.state = es, o.on.call("start", r, r.__data__, o.index, o.group), o.state === es) {
      for (o.state = Sl, u = new Array(w = o.tween.length), v = 0, k = -1; v < w; ++v)
        (C = o.tween[v].value.call(r, r.__data__, o.index, o.group)) && (u[++k] = C);
      u.length = k + 1;
    }
  }
  function p(g) {
    for (var v = g < o.duration ? o.ease.call(null, g / o.duration) : (o.timer.restart(m), o.state = ns, 1), k = -1, w = u.length; ++k < w; )
      u[k].call(r, v);
    o.state === ns && (o.on.call("end", r, r.__data__, o.index, o.group), m());
  }
  function m() {
    o.state = kl, o.timer.stop(), delete s[i];
    for (var g in s) return;
    delete r.__transition;
  }
}
function A4(r, i) {
  var o = r.__transition, s, u, f = !0, h;
  if (o) {
    i = i == null ? null : i + "";
    for (h in o) {
      if ((s = o[h]).name !== i) {
        f = !1;
        continue;
      }
      u = s.state > es && s.state < ns, s.state = kl, s.timer.stop(), s.on.call(u ? "interrupt" : "cancel", r, r.__data__, s.index, s.group), delete o[h];
    }
    f && delete r.__transition;
  }
}
function M4(r) {
  return this.each(function() {
    A4(this, r);
  });
}
function V4(r, i) {
  var o, s;
  return function() {
    var u = Vn(this, r), f = u.tween;
    if (f !== o) {
      s = o = f;
      for (var h = 0, p = s.length; h < p; ++h)
        if (s[h].name === i) {
          s = s.slice(), s.splice(h, 1);
          break;
        }
    }
    u.tween = s;
  };
}
function P4(r, i, o) {
  var s, u;
  if (typeof o != "function") throw new Error();
  return function() {
    var f = Vn(this, r), h = f.tween;
    if (h !== s) {
      u = (s = h).slice();
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
function z4(r, i) {
  var o = this._id;
  if (r += "", arguments.length < 2) {
    for (var s = Sn(this.node(), o).tween, u = 0, f = s.length, h; u < f; ++u)
      if ((h = s[u]).name === r)
        return h.value;
    return null;
  }
  return this.each((i == null ? V4 : P4)(o, r, i));
}
function hs(r, i, o) {
  var s = r._id;
  return r.each(function() {
    var u = Vn(this, s);
    (u.value || (u.value = {}))[i] = o.apply(this, arguments);
  }), function(u) {
    return Sn(u, s).value[i];
  };
}
function Pf(r, i) {
  var o;
  return (typeof i == "number" ? yn : i instanceof At ? Ml : (o = At(i)) ? (i = o, Ml) : Df)(r, i);
}
function O4(r) {
  return function() {
    this.removeAttribute(r);
  };
}
function T4(r) {
  return function() {
    this.removeAttributeNS(r.space, r.local);
  };
}
function I4(r, i, o) {
  var s, u = o + "", f;
  return function() {
    var h = this.getAttribute(r);
    return h === u ? null : h === s ? f : f = i(s = h, o);
  };
}
function R4(r, i, o) {
  var s, u = o + "", f;
  return function() {
    var h = this.getAttributeNS(r.space, r.local);
    return h === u ? null : h === s ? f : f = i(s = h, o);
  };
}
function L4(r, i, o) {
  var s, u, f;
  return function() {
    var h, p = o(this), m;
    return p == null ? void this.removeAttribute(r) : (h = this.getAttribute(r), m = p + "", h === m ? null : h === s && m === u ? f : (u = m, f = i(s = h, p)));
  };
}
function F4(r, i, o) {
  var s, u, f;
  return function() {
    var h, p = o(this), m;
    return p == null ? void this.removeAttributeNS(r.space, r.local) : (h = this.getAttributeNS(r.space, r.local), m = p + "", h === m ? null : h === s && m === u ? f : (u = m, f = i(s = h, p)));
  };
}
function $4(r, i) {
  var o = Fl(r), s = o === "transform" ? w4 : Pf;
  return this.attrTween(r, typeof i == "function" ? (o.local ? F4 : L4)(o, s, hs(this, "attr." + r, i)) : i == null ? (o.local ? T4 : O4)(o) : (o.local ? R4 : I4)(o, s, i));
}
function G4(r, i) {
  return function(o) {
    this.setAttribute(r, i.call(this, o));
  };
}
function K4(r, i) {
  return function(o) {
    this.setAttributeNS(r.space, r.local, i.call(this, o));
  };
}
function Q4(r, i) {
  var o, s;
  function u() {
    var f = i.apply(this, arguments);
    return f !== s && (o = (s = f) && K4(r, f)), o;
  }
  return u._value = i, u;
}
function j4(r, i) {
  var o, s;
  function u() {
    var f = i.apply(this, arguments);
    return f !== s && (o = (s = f) && G4(r, f)), o;
  }
  return u._value = i, u;
}
function U4(r, i) {
  var o = "attr." + r;
  if (arguments.length < 2) return (o = this.tween(o)) && o._value;
  if (i == null) return this.tween(o, null);
  if (typeof i != "function") throw new Error();
  var s = Fl(r);
  return this.tween(o, (s.local ? Q4 : j4)(s, i));
}
function H4(r, i) {
  return function() {
    fs(this, r).delay = +i.apply(this, arguments);
  };
}
function W4(r, i) {
  return i = +i, function() {
    fs(this, r).delay = i;
  };
}
function X4(r) {
  var i = this._id;
  return arguments.length ? this.each((typeof r == "function" ? H4 : W4)(i, r)) : Sn(this.node(), i).delay;
}
function Y4(r, i) {
  return function() {
    Vn(this, r).duration = +i.apply(this, arguments);
  };
}
function q4(r, i) {
  return i = +i, function() {
    Vn(this, r).duration = i;
  };
}
function Z4(r) {
  var i = this._id;
  return arguments.length ? this.each((typeof r == "function" ? Y4 : q4)(i, r)) : Sn(this.node(), i).duration;
}
function J4(r, i) {
  if (typeof i != "function") throw new Error();
  return function() {
    Vn(this, r).ease = i;
  };
}
function b4(r) {
  var i = this._id;
  return arguments.length ? this.each(J4(i, r)) : Sn(this.node(), i).ease;
}
function em(r, i) {
  return function() {
    var o = i.apply(this, arguments);
    if (typeof o != "function") throw new Error();
    Vn(this, r).ease = o;
  };
}
function nm(r) {
  if (typeof r != "function") throw new Error();
  return this.each(em(this._id, r));
}
function tm(r) {
  typeof r != "function" && (r = hf(r));
  for (var i = this._groups, o = i.length, s = new Array(o), u = 0; u < o; ++u)
    for (var f = i[u], h = f.length, p = s[u] = [], m, g = 0; g < h; ++g)
      (m = f[g]) && r.call(m, m.__data__, g, f) && p.push(m);
  return new Qn(s, this._parents, this._name, this._id);
}
function rm(r) {
  if (r._id !== this._id) throw new Error();
  for (var i = this._groups, o = r._groups, s = i.length, u = o.length, f = Math.min(s, u), h = new Array(s), p = 0; p < f; ++p)
    for (var m = i[p], g = o[p], v = m.length, k = h[p] = new Array(v), w, C = 0; C < v; ++C)
      (w = m[C] || g[C]) && (k[C] = w);
  for (; p < s; ++p)
    h[p] = i[p];
  return new Qn(h, this._parents, this._name, this._id);
}
function im(r) {
  return (r + "").trim().split(/^|\s+/).every(function(i) {
    var o = i.indexOf(".");
    return o >= 0 && (i = i.slice(0, o)), !i || i === "start";
  });
}
function lm(r, i, o) {
  var s, u, f = im(i) ? fs : Vn;
  return function() {
    var h = f(this, r), p = h.on;
    p !== s && (u = (s = p).copy()).on(i, o), h.on = u;
  };
}
function om(r, i) {
  var o = this._id;
  return arguments.length < 2 ? Sn(this.node(), o).on.on(r) : this.each(lm(o, r, i));
}
function am(r) {
  return function() {
    var i = this.parentNode;
    for (var o in this.__transition) if (+o !== r) return;
    i && i.removeChild(this);
  };
}
function sm() {
  return this.on("end.remove", am(this._id));
}
function cm(r) {
  var i = this._name, o = this._id;
  typeof r != "function" && (r = os(r));
  for (var s = this._groups, u = s.length, f = new Array(u), h = 0; h < u; ++h)
    for (var p = s[h], m = p.length, g = f[h] = new Array(m), v, k, w = 0; w < m; ++w)
      (v = p[w]) && (k = r.call(v, v.__data__, w, p)) && ("__data__" in v && (k.__data__ = v.__data__), g[w] = k, Gl(g[w], i, o, w, g, Sn(v, o)));
  return new Qn(f, this._parents, i, o);
}
function um(r) {
  var i = this._name, o = this._id;
  typeof r != "function" && (r = ff(r));
  for (var s = this._groups, u = s.length, f = [], h = [], p = 0; p < u; ++p)
    for (var m = s[p], g = m.length, v, k = 0; k < g; ++k)
      if (v = m[k]) {
        for (var w = r.call(v, v.__data__, k, m), C, G = Sn(v, o), F = 0, H = w.length; F < H; ++F)
          (C = w[F]) && Gl(C, i, o, F, w, G);
        f.push(w), h.push(v);
      }
  return new Qn(f, h, i, o);
}
var dm = ti.prototype.constructor;
function fm() {
  return new dm(this._groups, this._parents);
}
function hm(r, i) {
  var o, s, u;
  return function() {
    var f = ir(this, r), h = (this.style.removeProperty(r), ir(this, r));
    return f === h ? null : f === o && h === s ? u : u = i(o = f, s = h);
  };
}
function zf(r) {
  return function() {
    this.style.removeProperty(r);
  };
}
function pm(r, i, o) {
  var s, u = o + "", f;
  return function() {
    var h = ir(this, r);
    return h === u ? null : h === s ? f : f = i(s = h, o);
  };
}
function gm(r, i, o) {
  var s, u, f;
  return function() {
    var h = ir(this, r), p = o(this), m = p + "";
    return p == null && (m = p = (this.style.removeProperty(r), ir(this, r))), h === m ? null : h === s && m === u ? f : (u = m, f = i(s = h, p));
  };
}
function mm(r, i) {
  var o, s, u, f = "style." + i, h = "end." + f, p;
  return function() {
    var m = Vn(this, r), g = m.on, v = m.value[f] == null ? p || (p = zf(i)) : void 0;
    (g !== o || u !== v) && (s = (o = g).copy()).on(h, u = v), m.on = s;
  };
}
function Nm(r, i, o) {
  var s = (r += "") == "transform" ? x4 : Pf;
  return i == null ? this.styleTween(r, hm(r, s)).on("end.style." + r, zf(r)) : typeof i == "function" ? this.styleTween(r, gm(r, s, hs(this, "style." + r, i))).each(mm(this._id, r)) : this.styleTween(r, pm(r, s, i), o).on("end.style." + r, null);
}
function vm(r, i, o) {
  return function(s) {
    this.style.setProperty(r, i.call(this, s), o);
  };
}
function ym(r, i, o) {
  var s, u;
  function f() {
    var h = i.apply(this, arguments);
    return h !== u && (s = (u = h) && vm(r, h, o)), s;
  }
  return f._value = i, f;
}
function xm(r, i, o) {
  var s = "style." + (r += "");
  if (arguments.length < 2) return (s = this.tween(s)) && s._value;
  if (i == null) return this.tween(s, null);
  if (typeof i != "function") throw new Error();
  return this.tween(s, ym(r, i, o ?? ""));
}
function wm(r) {
  return function() {
    this.textContent = r;
  };
}
function Sm(r) {
  return function() {
    var i = r(this);
    this.textContent = i ?? "";
  };
}
function km(r) {
  return this.tween("text", typeof r == "function" ? Sm(hs(this, "text", r)) : wm(r == null ? "" : r + ""));
}
function _m(r) {
  return function(i) {
    this.textContent = r.call(this, i);
  };
}
function Dm(r) {
  var i, o;
  function s() {
    var u = r.apply(this, arguments);
    return u !== o && (i = (o = u) && _m(u)), i;
  }
  return s._value = r, s;
}
function Bm(r) {
  var i = "text";
  if (arguments.length < 1) return (i = this.tween(i)) && i._value;
  if (r == null) return this.tween(i, null);
  if (typeof r != "function") throw new Error();
  return this.tween(i, Dm(r));
}
function Cm() {
  for (var r = this._name, i = this._id, o = Of(), s = this._groups, u = s.length, f = 0; f < u; ++f)
    for (var h = s[f], p = h.length, m, g = 0; g < p; ++g)
      if (m = h[g]) {
        var v = Sn(m, i);
        Gl(m, r, o, g, h, {
          time: v.time + v.delay + v.duration,
          delay: 0,
          duration: v.duration,
          ease: v.ease
        });
      }
  return new Qn(s, this._parents, r, o);
}
function Em() {
  var r, i, o = this, s = o._id, u = o.size();
  return new Promise(function(f, h) {
    var p = { value: h }, m = { value: function() {
      --u === 0 && f();
    } };
    o.each(function() {
      var g = Vn(this, s), v = g.on;
      v !== r && (i = (r = v).copy(), i._.cancel.push(p), i._.interrupt.push(p), i._.end.push(m)), g.on = i;
    }), u === 0 && f();
  });
}
var Am = 0;
function Qn(r, i, o, s) {
  this._groups = r, this._parents = i, this._name = o, this._id = s;
}
function Of() {
  return ++Am;
}
var $n = ti.prototype;
Qn.prototype = {
  constructor: Qn,
  select: cm,
  selectAll: um,
  selectChild: $n.selectChild,
  selectChildren: $n.selectChildren,
  filter: tm,
  merge: rm,
  selection: fm,
  transition: Cm,
  call: $n.call,
  nodes: $n.nodes,
  node: $n.node,
  size: $n.size,
  empty: $n.empty,
  each: $n.each,
  on: om,
  attr: $4,
  attrTween: U4,
  style: Nm,
  styleTween: xm,
  text: km,
  textTween: Bm,
  remove: sm,
  tween: z4,
  delay: X4,
  duration: Z4,
  ease: b4,
  easeVarying: nm,
  end: Em,
  [Symbol.iterator]: $n[Symbol.iterator]
};
function Mm(r) {
  return ((r *= 2) <= 1 ? r * r * r : (r -= 2) * r * r + 2) / 2;
}
var Vm = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Mm
};
function Pm(r, i) {
  for (var o; !(o = r.__transition) || !(o = o[i]); )
    if (!(r = r.parentNode))
      throw new Error(`transition ${i} not found`);
  return o;
}
function zm(r) {
  var i, o;
  r instanceof Qn ? (i = r._id, r = r._name) : (i = Of(), (o = Vm).time = ds(), r = r == null ? null : r + "");
  for (var s = this._groups, u = s.length, f = 0; f < u; ++f)
    for (var h = s[f], p = h.length, m, g = 0; g < p; ++g)
      (m = h[g]) && Gl(m, r, i, g, h, o || Pm(m, i));
  return new Qn(s, this._parents, r, i);
}
ti.prototype.interrupt = M4;
ti.prototype.transition = zm;
const ts = Math.PI, rs = 2 * ts, Bt = 1e-6, Om = rs - Bt;
function Tf(r) {
  this._ += r[0];
  for (let i = 1, o = r.length; i < o; ++i)
    this._ += arguments[i] + r[i];
}
function Tm(r) {
  let i = Math.floor(r);
  if (!(i >= 0)) throw new Error(`invalid digits: ${r}`);
  if (i > 15) return Tf;
  const o = 10 ** i;
  return function(s) {
    this._ += s[0];
    for (let u = 1, f = s.length; u < f; ++u)
      this._ += Math.round(arguments[u] * o) / o + s[u];
  };
}
class Im {
  constructor(i) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = i == null ? Tf : Tm(i);
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
  quadraticCurveTo(i, o, s, u) {
    this._append`Q${+i},${+o},${this._x1 = +s},${this._y1 = +u}`;
  }
  bezierCurveTo(i, o, s, u, f, h) {
    this._append`C${+i},${+o},${+s},${+u},${this._x1 = +f},${this._y1 = +h}`;
  }
  arcTo(i, o, s, u, f) {
    if (i = +i, o = +o, s = +s, u = +u, f = +f, f < 0) throw new Error(`negative radius: ${f}`);
    let h = this._x1, p = this._y1, m = s - i, g = u - o, v = h - i, k = p - o, w = v * v + k * k;
    if (this._x1 === null)
      this._append`M${this._x1 = i},${this._y1 = o}`;
    else if (w > Bt) if (!(Math.abs(k * m - g * v) > Bt) || !f)
      this._append`L${this._x1 = i},${this._y1 = o}`;
    else {
      let C = s - h, G = u - p, F = m * m + g * g, H = C * C + G * G, q = Math.sqrt(F), oe = Math.sqrt(w), K = f * Math.tan((ts - Math.acos((F + w - H) / (2 * q * oe))) / 2), J = K / oe, ue = K / q;
      Math.abs(J - 1) > Bt && this._append`L${i + J * v},${o + J * k}`, this._append`A${f},${f},0,0,${+(k * C > v * G)},${this._x1 = i + ue * m},${this._y1 = o + ue * g}`;
    }
  }
  arc(i, o, s, u, f, h) {
    if (i = +i, o = +o, s = +s, h = !!h, s < 0) throw new Error(`negative radius: ${s}`);
    let p = s * Math.cos(u), m = s * Math.sin(u), g = i + p, v = o + m, k = 1 ^ h, w = h ? u - f : f - u;
    this._x1 === null ? this._append`M${g},${v}` : (Math.abs(this._x1 - g) > Bt || Math.abs(this._y1 - v) > Bt) && this._append`L${g},${v}`, s && (w < 0 && (w = w % rs + rs), w > Om ? this._append`A${s},${s},0,1,${k},${i - p},${o - m}A${s},${s},0,1,${k},${this._x1 = g},${this._y1 = v}` : w > Bt && this._append`A${s},${s},0,${+(w >= ts)},${k},${this._x1 = i + s * Math.cos(f)},${this._y1 = o + s * Math.sin(f)}`);
  }
  rect(i, o, s, u) {
    this._append`M${this._x0 = this._x1 = +i},${this._y0 = this._y1 = +o}h${s = +s}v${+u}h${-s}Z`;
  }
  toString() {
    return this._;
  }
}
function Rm(r) {
  return Math.abs(r = Math.round(r)) >= 1e21 ? r.toLocaleString("en").replace(/,/g, "") : r.toString(10);
}
function Ol(r, i) {
  if (!isFinite(r) || r === 0) return null;
  var o = (r = i ? r.toExponential(i - 1) : r.toExponential()).indexOf("e"), s = r.slice(0, o);
  return [
    s.length > 1 ? s[0] + s.slice(2) : s,
    +r.slice(o + 1)
  ];
}
function or(r) {
  return r = Ol(Math.abs(r)), r ? r[1] : NaN;
}
function Lm(r, i) {
  return function(o, s) {
    for (var u = o.length, f = [], h = 0, p = r[0], m = 0; u > 0 && p > 0 && (m + p + 1 > s && (p = Math.max(1, s - m)), f.push(o.substring(u -= p, u + p)), !((m += p + 1) > s)); )
      p = r[h = (h + 1) % r.length];
    return f.reverse().join(i);
  };
}
function Fm(r) {
  return function(i) {
    return i.replace(/[0-9]/g, function(o) {
      return r[+o];
    });
  };
}
var $m = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ei(r) {
  if (!(i = $m.exec(r))) throw new Error("invalid format: " + r);
  var i;
  return new ps({
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
ei.prototype = ps.prototype;
function ps(r) {
  this.fill = r.fill === void 0 ? " " : r.fill + "", this.align = r.align === void 0 ? ">" : r.align + "", this.sign = r.sign === void 0 ? "-" : r.sign + "", this.symbol = r.symbol === void 0 ? "" : r.symbol + "", this.zero = !!r.zero, this.width = r.width === void 0 ? void 0 : +r.width, this.comma = !!r.comma, this.precision = r.precision === void 0 ? void 0 : +r.precision, this.trim = !!r.trim, this.type = r.type === void 0 ? "" : r.type + "";
}
ps.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Gm(r) {
  e: for (var i = r.length, o = 1, s = -1, u; o < i; ++o)
    switch (r[o]) {
      case ".":
        s = u = o;
        break;
      case "0":
        s === 0 && (s = o), u = o;
        break;
      default:
        if (!+r[o]) break e;
        s > 0 && (s = 0);
        break;
    }
  return s > 0 ? r.slice(0, s) + r.slice(u + 1) : r;
}
var Tl;
function Km(r, i) {
  var o = Ol(r, i);
  if (!o) return Tl = void 0, r.toPrecision(i);
  var s = o[0], u = o[1], f = u - (Tl = Math.max(-8, Math.min(8, Math.floor(u / 3))) * 3) + 1, h = s.length;
  return f === h ? s : f > h ? s + new Array(f - h + 1).join("0") : f > 0 ? s.slice(0, f) + "." + s.slice(f) : "0." + new Array(1 - f).join("0") + Ol(r, Math.max(0, i + f - 1))[0];
}
function $d(r, i) {
  var o = Ol(r, i);
  if (!o) return r + "";
  var s = o[0], u = o[1];
  return u < 0 ? "0." + new Array(-u).join("0") + s : s.length > u + 1 ? s.slice(0, u + 1) + "." + s.slice(u + 1) : s + new Array(u - s.length + 2).join("0");
}
const Gd = {
  "%": (r, i) => (r * 100).toFixed(i),
  b: (r) => Math.round(r).toString(2),
  c: (r) => r + "",
  d: Rm,
  e: (r, i) => r.toExponential(i),
  f: (r, i) => r.toFixed(i),
  g: (r, i) => r.toPrecision(i),
  o: (r) => Math.round(r).toString(8),
  p: (r, i) => $d(r * 100, i),
  r: $d,
  s: Km,
  X: (r) => Math.round(r).toString(16).toUpperCase(),
  x: (r) => Math.round(r).toString(16)
};
function Kd(r) {
  return r;
}
var Qd = Array.prototype.map, jd = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Qm(r) {
  var i = r.grouping === void 0 || r.thousands === void 0 ? Kd : Lm(Qd.call(r.grouping, Number), r.thousands + ""), o = r.currency === void 0 ? "" : r.currency[0] + "", s = r.currency === void 0 ? "" : r.currency[1] + "", u = r.decimal === void 0 ? "." : r.decimal + "", f = r.numerals === void 0 ? Kd : Fm(Qd.call(r.numerals, String)), h = r.percent === void 0 ? "%" : r.percent + "", p = r.minus === void 0 ? "−" : r.minus + "", m = r.nan === void 0 ? "NaN" : r.nan + "";
  function g(k, w) {
    k = ei(k);
    var C = k.fill, G = k.align, F = k.sign, H = k.symbol, q = k.zero, oe = k.width, K = k.comma, J = k.precision, ue = k.trim, ae = k.type;
    ae === "n" ? (K = !0, ae = "g") : Gd[ae] || (J === void 0 && (J = 12), ue = !0, ae = "g"), (q || C === "0" && G === "=") && (q = !0, C = "0", G = "=");
    var I = (w && w.prefix !== void 0 ? w.prefix : "") + (H === "$" ? o : H === "#" && /[boxX]/.test(ae) ? "0" + ae.toLowerCase() : ""), Z = (H === "$" ? s : /[%p]/.test(ae) ? h : "") + (w && w.suffix !== void 0 ? w.suffix : ""), ce = Gd[ae], pe = /[defgprs%]/.test(ae);
    J = J === void 0 ? 6 : /[gprs]/.test(ae) ? Math.max(1, Math.min(21, J)) : Math.max(0, Math.min(20, J));
    function A(M) {
      var P = I, $ = Z, he, ge, se;
      if (ae === "c")
        $ = ce(M) + $, M = "";
      else {
        M = +M;
        var T = M < 0 || 1 / M < 0;
        if (M = isNaN(M) ? m : ce(Math.abs(M), J), ue && (M = Gm(M)), T && +M == 0 && F !== "+" && (T = !1), P = (T ? F === "(" ? F : p : F === "-" || F === "(" ? "" : F) + P, $ = (ae === "s" && !isNaN(M) && Tl !== void 0 ? jd[8 + Tl / 3] : "") + $ + (T && F === "(" ? ")" : ""), pe) {
          for (he = -1, ge = M.length; ++he < ge; )
            if (se = M.charCodeAt(he), 48 > se || se > 57) {
              $ = (se === 46 ? u + M.slice(he + 1) : M.slice(he)) + $, M = M.slice(0, he);
              break;
            }
        }
      }
      K && !q && (M = i(M, 1 / 0));
      var j = P.length + M.length + $.length, R = j < oe ? new Array(oe - j + 1).join(C) : "";
      switch (K && q && (M = i(R + M, R.length ? oe - $.length : 1 / 0), R = ""), G) {
        case "<":
          M = P + M + $ + R;
          break;
        case "=":
          M = P + R + M + $;
          break;
        case "^":
          M = R.slice(0, j = R.length >> 1) + P + M + $ + R.slice(j);
          break;
        default:
          M = R + P + M + $;
          break;
      }
      return f(M);
    }
    return A.toString = function() {
      return k + "";
    }, A;
  }
  function v(k, w) {
    var C = Math.max(-8, Math.min(8, Math.floor(or(w) / 3))) * 3, G = Math.pow(10, -C), F = g((k = ei(k), k.type = "f", k), { suffix: jd[8 + C / 3] });
    return function(H) {
      return F(G * H);
    };
  }
  return {
    format: g,
    formatPrefix: v
  };
}
var Nl, gs, If;
jm({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function jm(r) {
  return Nl = Qm(r), gs = Nl.format, If = Nl.formatPrefix, Nl;
}
function Um(r) {
  return Math.max(0, -or(Math.abs(r)));
}
function Hm(r, i) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(or(i) / 3))) * 3 - or(Math.abs(r)));
}
function Wm(r, i) {
  return r = Math.abs(r), i = Math.abs(i) - r, Math.max(0, or(i) - or(r)) + 1;
}
function Xm(r) {
  var i = 0, o = r.children, s = o && o.length;
  if (!s) i = 1;
  else for (; --s >= 0; ) i += o[s].value;
  r.value = i;
}
function Ym() {
  return this.eachAfter(Xm);
}
function qm(r, i) {
  let o = -1;
  for (const s of this)
    r.call(i, s, ++o, this);
  return this;
}
function Zm(r, i) {
  for (var o = this, s = [o], u, f, h = -1; o = s.pop(); )
    if (r.call(i, o, ++h, this), u = o.children)
      for (f = u.length - 1; f >= 0; --f)
        s.push(u[f]);
  return this;
}
function Jm(r, i) {
  for (var o = this, s = [o], u = [], f, h, p, m = -1; o = s.pop(); )
    if (u.push(o), f = o.children)
      for (h = 0, p = f.length; h < p; ++h)
        s.push(f[h]);
  for (; o = u.pop(); )
    r.call(i, o, ++m, this);
  return this;
}
function bm(r, i) {
  let o = -1;
  for (const s of this)
    if (r.call(i, s, ++o, this))
      return s;
}
function e1(r) {
  return this.eachAfter(function(i) {
    for (var o = +r(i.data) || 0, s = i.children, u = s && s.length; --u >= 0; ) o += s[u].value;
    i.value = o;
  });
}
function n1(r) {
  return this.eachBefore(function(i) {
    i.children && i.children.sort(r);
  });
}
function t1(r) {
  for (var i = this, o = r1(i, r), s = [i]; i !== o; )
    i = i.parent, s.push(i);
  for (var u = s.length; r !== o; )
    s.splice(u, 0, r), r = r.parent;
  return s;
}
function r1(r, i) {
  if (r === i) return r;
  var o = r.ancestors(), s = i.ancestors(), u = null;
  for (r = o.pop(), i = s.pop(); r === i; )
    u = r, r = o.pop(), i = s.pop();
  return u;
}
function i1() {
  for (var r = this, i = [r]; r = r.parent; )
    i.push(r);
  return i;
}
function l1() {
  return Array.from(this);
}
function o1() {
  var r = [];
  return this.eachBefore(function(i) {
    i.children || r.push(i);
  }), r;
}
function a1() {
  var r = this, i = [];
  return r.each(function(o) {
    o !== r && i.push({ source: o.parent, target: o });
  }), i;
}
function* s1() {
  var r = this, i, o = [r], s, u, f;
  do
    for (i = o.reverse(), o = []; r = i.pop(); )
      if (yield r, s = r.children)
        for (u = 0, f = s.length; u < f; ++u)
          o.push(s[u]);
  while (o.length);
}
function ms(r, i) {
  r instanceof Map ? (r = [void 0, r], i === void 0 && (i = d1)) : i === void 0 && (i = u1);
  for (var o = new Il(r), s, u = [o], f, h, p, m; s = u.pop(); )
    if ((h = i(s.data)) && (m = (h = Array.from(h)).length))
      for (s.children = h, p = m - 1; p >= 0; --p)
        u.push(f = h[p] = new Il(h[p])), f.parent = s, f.depth = s.depth + 1;
  return o.eachBefore(h1);
}
function c1() {
  return ms(this).eachBefore(f1);
}
function u1(r) {
  return r.children;
}
function d1(r) {
  return Array.isArray(r) ? r[1] : null;
}
function f1(r) {
  r.data.value !== void 0 && (r.value = r.data.value), r.data = r.data.data;
}
function h1(r) {
  var i = 0;
  do
    r.height = i;
  while ((r = r.parent) && r.height < ++i);
}
function Il(r) {
  this.data = r, this.depth = this.height = 0, this.parent = null;
}
Il.prototype = ms.prototype = {
  constructor: Il,
  count: Ym,
  each: qm,
  eachAfter: Jm,
  eachBefore: Zm,
  find: bm,
  sum: e1,
  sort: n1,
  path: t1,
  ancestors: i1,
  descendants: l1,
  leaves: o1,
  links: a1,
  copy: c1,
  [Symbol.iterator]: s1
};
function p1(r) {
  r.x0 = Math.round(r.x0), r.y0 = Math.round(r.y0), r.x1 = Math.round(r.x1), r.y1 = Math.round(r.y1);
}
function g1(r, i, o, s, u) {
  for (var f = r.children, h, p = -1, m = f.length, g = r.value && (s - i) / r.value; ++p < m; )
    h = f[p], h.y0 = o, h.y1 = u, h.x0 = i, h.x1 = i += h.value * g;
}
function m1() {
  var r = 1, i = 1, o = 0, s = !1;
  function u(h) {
    var p = h.height + 1;
    return h.x0 = h.y0 = o, h.x1 = r, h.y1 = i / p, h.eachBefore(f(i, p)), s && h.eachBefore(p1), h;
  }
  function f(h, p) {
    return function(m) {
      m.children && g1(m, m.x0, h * (m.depth + 1) / p, m.x1, h * (m.depth + 2) / p);
      var g = m.x0, v = m.y0, k = m.x1 - o, w = m.y1 - o;
      k < g && (g = k = (g + k) / 2), w < v && (v = w = (v + w) / 2), m.x0 = g, m.y0 = v, m.x1 = k, m.y1 = w;
    };
  }
  return u.round = function(h) {
    return arguments.length ? (s = !!h, u) : s;
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
  var r = new kd(), i = [], o = [], s = Ud;
  function u(f) {
    let h = r.get(f);
    if (h === void 0) {
      if (s !== Ud) return s;
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
    return arguments.length ? (s = f, u) : s;
  }, u.copy = function() {
    return Rf(i, o).unknown(s);
  }, Kl.apply(u, arguments), u;
}
function N1(r) {
  return function() {
    return r;
  };
}
function v1(r) {
  return +r;
}
var Hd = [0, 1];
function An(r) {
  return r;
}
function is(r, i) {
  return (i -= r = +r) ? function(o) {
    return (o - r) / i;
  } : N1(isNaN(i) ? NaN : 0.5);
}
function y1(r, i) {
  var o;
  return r > i && (o = r, r = i, i = o), function(s) {
    return Math.max(r, Math.min(i, s));
  };
}
function x1(r, i, o) {
  var s = r[0], u = r[1], f = i[0], h = i[1];
  return u < s ? (s = is(u, s), f = o(h, f)) : (s = is(s, u), f = o(f, h)), function(p) {
    return f(s(p));
  };
}
function w1(r, i, o) {
  var s = Math.min(r.length, i.length) - 1, u = new Array(s), f = new Array(s), h = -1;
  for (r[s] < r[0] && (r = r.slice().reverse(), i = i.slice().reverse()); ++h < s; )
    u[h] = is(r[h], r[h + 1]), f[h] = o(i[h], i[h + 1]);
  return function(p) {
    var m = o0(r, p, 1, s) - 1;
    return f[m](u[m](p));
  };
}
function Ns(r, i) {
  return i.domain(r.domain()).range(r.range()).interpolate(r.interpolate()).clamp(r.clamp()).unknown(r.unknown());
}
function vs() {
  var r = Hd, i = Hd, o = us, s, u, f, h = An, p, m, g;
  function v() {
    var w = Math.min(r.length, i.length);
    return h !== An && (h = y1(r[0], r[w - 1])), p = w > 2 ? w1 : x1, m = g = null, k;
  }
  function k(w) {
    return w == null || isNaN(w = +w) ? f : (m || (m = p(r.map(s), i, o)))(s(h(w)));
  }
  return k.invert = function(w) {
    return h(u((g || (g = p(i, r.map(s), yn)))(w)));
  }, k.domain = function(w) {
    return arguments.length ? (r = Array.from(w, v1), v()) : r.slice();
  }, k.range = function(w) {
    return arguments.length ? (i = Array.from(w), v()) : i.slice();
  }, k.rangeRound = function(w) {
    return i = Array.from(w), o = N4, v();
  }, k.clamp = function(w) {
    return arguments.length ? (h = w ? !0 : An, v()) : h !== An;
  }, k.interpolate = function(w) {
    return arguments.length ? (o = w, v()) : o;
  }, k.unknown = function(w) {
    return arguments.length ? (f = w, k) : f;
  }, function(w, C) {
    return s = w, u = C, v();
  };
}
function S1() {
  return vs()(An, An);
}
function k1(r, i, o, s) {
  var u = h0(r, i, o), f;
  switch (s = ei(s ?? ",f"), s.type) {
    case "s": {
      var h = Math.max(Math.abs(r), Math.abs(i));
      return s.precision == null && !isNaN(f = Hm(u, h)) && (s.precision = f), If(s, h);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      s.precision == null && !isNaN(f = Wm(u, Math.max(Math.abs(r), Math.abs(i)))) && (s.precision = f - (s.type === "e"));
      break;
    }
    case "f":
    case "%": {
      s.precision == null && !isNaN(f = Um(u)) && (s.precision = f - (s.type === "%") * 2);
      break;
    }
  }
  return gs(s);
}
function Lf(r) {
  var i = r.domain;
  return r.ticks = function(o) {
    var s = i();
    return Wa(s[0], s[s.length - 1], o ?? 10);
  }, r.tickFormat = function(o, s) {
    var u = i();
    return k1(u[0], u[u.length - 1], o ?? 10, s);
  }, r.nice = function(o) {
    o == null && (o = 10);
    var s = i(), u = 0, f = s.length - 1, h = s[u], p = s[f], m, g, v = 10;
    for (p < h && (g = h, h = p, p = g, g = u, u = f, f = g); v-- > 0; ) {
      if (g = Xa(h, p, o), g === m)
        return s[u] = h, s[f] = p, i(s);
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
function Ff() {
  var r = S1();
  return r.copy = function() {
    return Ns(r, Ff());
  }, Kl.apply(r, arguments), Lf(r);
}
function _1(r, i) {
  r = r.slice();
  var o = 0, s = r.length - 1, u = r[o], f = r[s], h;
  return f < u && (h = o, o = s, s = h, h = u, u = f, f = h), r[o] = i.floor(u), r[s] = i.ceil(f), r;
}
function Wd(r) {
  return Math.log(r);
}
function Xd(r) {
  return Math.exp(r);
}
function D1(r) {
  return -Math.log(-r);
}
function B1(r) {
  return -Math.exp(-r);
}
function C1(r) {
  return isFinite(r) ? +("1e" + r) : r < 0 ? 0 : r;
}
function E1(r) {
  return r === 10 ? C1 : r === Math.E ? Math.exp : (i) => Math.pow(r, i);
}
function A1(r) {
  return r === Math.E ? Math.log : r === 10 && Math.log10 || r === 2 && Math.log2 || (r = Math.log(r), (i) => Math.log(i) / r);
}
function Yd(r) {
  return (i, o) => -r(-i, o);
}
function M1(r) {
  const i = r(Wd, Xd), o = i.domain;
  let s = 10, u, f;
  function h() {
    return u = A1(s), f = E1(s), o()[0] < 0 ? (u = Yd(u), f = Yd(f), r(D1, B1)) : r(Wd, Xd), i;
  }
  return i.base = function(p) {
    return arguments.length ? (s = +p, h()) : s;
  }, i.domain = function(p) {
    return arguments.length ? (o(p), h()) : o();
  }, i.ticks = (p) => {
    const m = o();
    let g = m[0], v = m[m.length - 1];
    const k = v < g;
    k && ([g, v] = [v, g]);
    let w = u(g), C = u(v), G, F;
    const H = p == null ? 10 : +p;
    let q = [];
    if (!(s % 1) && C - w < H) {
      if (w = Math.floor(w), C = Math.ceil(C), g > 0) {
        for (; w <= C; ++w)
          for (G = 1; G < s; ++G)
            if (F = w < 0 ? G / f(-w) : G * f(w), !(F < g)) {
              if (F > v) break;
              q.push(F);
            }
      } else for (; w <= C; ++w)
        for (G = s - 1; G >= 1; --G)
          if (F = w > 0 ? G / f(-w) : G * f(w), !(F < g)) {
            if (F > v) break;
            q.push(F);
          }
      q.length * 2 < H && (q = Wa(g, v, H));
    } else
      q = Wa(w, C, Math.min(C - w, H)).map(f);
    return k ? q.reverse() : q;
  }, i.tickFormat = (p, m) => {
    if (p == null && (p = 10), m == null && (m = s === 10 ? "s" : ","), typeof m != "function" && (!(s % 1) && (m = ei(m)).precision == null && (m.trim = !0), m = gs(m)), p === 1 / 0) return m;
    const g = Math.max(1, s * p / i.ticks().length);
    return (v) => {
      let k = v / f(Math.round(u(v)));
      return k * s < s - 0.5 && (k *= s), k <= g ? m(v) : "";
    };
  }, i.nice = () => o(_1(o(), {
    floor: (p) => f(Math.floor(u(p))),
    ceil: (p) => f(Math.ceil(u(p)))
  })), i;
}
function $f() {
  const r = M1(vs()).domain([1, 10]);
  return r.copy = () => Ns(r, $f()).base(r.base()), Kl.apply(r, arguments), r;
}
function qd(r) {
  return function(i) {
    return i < 0 ? -Math.pow(-i, r) : Math.pow(i, r);
  };
}
function V1(r) {
  return r < 0 ? -Math.sqrt(-r) : Math.sqrt(r);
}
function P1(r) {
  return r < 0 ? -r * r : r * r;
}
function z1(r) {
  var i = r(An, An), o = 1;
  function s() {
    return o === 1 ? r(An, An) : o === 0.5 ? r(V1, P1) : r(qd(o), qd(1 / o));
  }
  return i.exponent = function(u) {
    return arguments.length ? (o = +u, s()) : o;
  }, Lf(i);
}
function Gf() {
  var r = z1(vs());
  return r.copy = function() {
    return Ns(r, Gf()).exponent(r.exponent());
  }, Kl.apply(r, arguments), r;
}
function O1() {
  return Gf.apply(null, arguments).exponent(0.5);
}
function Kf(r) {
  for (var i = r.length / 6 | 0, o = new Array(i), s = 0; s < i; ) o[s] = "#" + r.slice(s * 6, ++s * 6);
  return o;
}
const T1 = Kf("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), I1 = Kf("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function ct(r) {
  return function() {
    return r;
  };
}
const Zd = Math.abs, je = Math.atan2, _t = Math.cos, R1 = Math.max, ja = Math.min, En = Math.sin, tr = Math.sqrt, be = 1e-12, ni = Math.PI, Rl = ni / 2, L1 = 2 * ni;
function F1(r) {
  return r > 1 ? 0 : r < -1 ? ni : Math.acos(r);
}
function Jd(r) {
  return r >= 1 ? Rl : r <= -1 ? -Rl : Math.asin(r);
}
function $1(r) {
  let i = 3;
  return r.digits = function(o) {
    if (!arguments.length) return i;
    if (o == null)
      i = null;
    else {
      const s = Math.floor(o);
      if (!(s >= 0)) throw new RangeError(`invalid digits: ${o}`);
      i = s;
    }
    return r;
  }, () => new Im(i);
}
function G1(r) {
  return r.innerRadius;
}
function K1(r) {
  return r.outerRadius;
}
function Q1(r) {
  return r.startAngle;
}
function j1(r) {
  return r.endAngle;
}
function U1(r) {
  return r && r.padAngle;
}
function H1(r, i, o, s, u, f, h, p) {
  var m = o - r, g = s - i, v = h - u, k = p - f, w = k * m - v * g;
  if (!(w * w < be))
    return w = (v * (i - f) - k * (r - u)) / w, [r + w * m, i + w * g];
}
function vl(r, i, o, s, u, f, h) {
  var p = r - o, m = i - s, g = (h ? f : -f) / tr(p * p + m * m), v = g * m, k = -g * p, w = r + v, C = i + k, G = o + v, F = s + k, H = (w + G) / 2, q = (C + F) / 2, oe = G - w, K = F - C, J = oe * oe + K * K, ue = u - f, ae = w * F - G * C, I = (K < 0 ? -1 : 1) * tr(R1(0, ue * ue * J - ae * ae)), Z = (ae * K - oe * I) / J, ce = (-ae * oe - K * I) / J, pe = (ae * K + oe * I) / J, A = (-ae * oe + K * I) / J, M = Z - H, P = ce - q, $ = pe - H, he = A - q;
  return M * M + P * P > $ * $ + he * he && (Z = pe, ce = A), {
    cx: Z,
    cy: ce,
    x01: -v,
    y01: -k,
    x11: Z * (u / ue - 1),
    y11: ce * (u / ue - 1)
  };
}
function W1() {
  var r = G1, i = K1, o = ct(0), s = null, u = Q1, f = j1, h = U1, p = null, m = $1(g);
  function g() {
    var v, k, w = +r.apply(this, arguments), C = +i.apply(this, arguments), G = u.apply(this, arguments) - Rl, F = f.apply(this, arguments) - Rl, H = Zd(F - G), q = F > G;
    if (p || (p = v = m()), C < w && (k = C, C = w, w = k), !(C > be)) p.moveTo(0, 0);
    else if (H > L1 - be)
      p.moveTo(C * _t(G), C * En(G)), p.arc(0, 0, C, G, F, !q), w > be && (p.moveTo(w * _t(F), w * En(F)), p.arc(0, 0, w, F, G, q));
    else {
      var oe = G, K = F, J = G, ue = F, ae = H, I = H, Z = h.apply(this, arguments) / 2, ce = Z > be && (s ? +s.apply(this, arguments) : tr(w * w + C * C)), pe = ja(Zd(C - w) / 2, +o.apply(this, arguments)), A = pe, M = pe, P, $;
      if (ce > be) {
        var he = Jd(ce / w * En(Z)), ge = Jd(ce / C * En(Z));
        (ae -= he * 2) > be ? (he *= q ? 1 : -1, J += he, ue -= he) : (ae = 0, J = ue = (G + F) / 2), (I -= ge * 2) > be ? (ge *= q ? 1 : -1, oe += ge, K -= ge) : (I = 0, oe = K = (G + F) / 2);
      }
      var se = C * _t(oe), T = C * En(oe), j = w * _t(ue), R = w * En(ue);
      if (pe > be) {
        var S = C * _t(K), E = C * En(K), ie = w * _t(J), le = w * En(J), te;
        if (H < ni)
          if (te = H1(se, T, ie, le, S, E, j, R)) {
            var de = se - te[0], ye = T - te[1], me = S - te[0], we = E - te[1], Fe = 1 / En(F1((de * me + ye * we) / (tr(de * de + ye * ye) * tr(me * me + we * we))) / 2), ut = tr(te[0] * te[0] + te[1] * te[1]);
            A = ja(pe, (w - ut) / (Fe - 1)), M = ja(pe, (C - ut) / (Fe + 1));
          } else
            A = M = 0;
      }
      I > be ? M > be ? (P = vl(ie, le, se, T, C, M, q), $ = vl(S, E, j, R, C, M, q), p.moveTo(P.cx + P.x01, P.cy + P.y01), M < pe ? p.arc(P.cx, P.cy, M, je(P.y01, P.x01), je($.y01, $.x01), !q) : (p.arc(P.cx, P.cy, M, je(P.y01, P.x01), je(P.y11, P.x11), !q), p.arc(0, 0, C, je(P.cy + P.y11, P.cx + P.x11), je($.cy + $.y11, $.cx + $.x11), !q), p.arc($.cx, $.cy, M, je($.y11, $.x11), je($.y01, $.x01), !q))) : (p.moveTo(se, T), p.arc(0, 0, C, oe, K, !q)) : p.moveTo(se, T), !(w > be) || !(ae > be) ? p.lineTo(j, R) : A > be ? (P = vl(j, R, S, E, w, -A, q), $ = vl(se, T, ie, le, w, -A, q), p.lineTo(P.cx + P.x01, P.cy + P.y01), A < pe ? p.arc(P.cx, P.cy, A, je(P.y01, P.x01), je($.y01, $.x01), !q) : (p.arc(P.cx, P.cy, A, je(P.y01, P.x01), je(P.y11, P.x11), !q), p.arc(0, 0, w, je(P.cy + P.y11, P.cx + P.x11), je($.cy + $.y11, $.cx + $.x11), q), p.arc($.cx, $.cy, A, je($.y11, $.x11), je($.y01, $.x01), !q))) : p.arc(0, 0, w, ue, J, q);
    }
    if (p.closePath(), v) return p = null, v + "" || null;
  }
  return g.centroid = function() {
    var v = (+r.apply(this, arguments) + +i.apply(this, arguments)) / 2, k = (+u.apply(this, arguments) + +f.apply(this, arguments)) / 2 - ni / 2;
    return [_t(k) * v, En(k) * v];
  }, g.innerRadius = function(v) {
    return arguments.length ? (r = typeof v == "function" ? v : ct(+v), g) : r;
  }, g.outerRadius = function(v) {
    return arguments.length ? (i = typeof v == "function" ? v : ct(+v), g) : i;
  }, g.cornerRadius = function(v) {
    return arguments.length ? (o = typeof v == "function" ? v : ct(+v), g) : o;
  }, g.padRadius = function(v) {
    return arguments.length ? (s = v == null ? null : typeof v == "function" ? v : ct(+v), g) : s;
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
const bd = 0.68, ef = 0.6, Gn = 11, X1 = 5.5, _l = 13, Qf = 14, Y1 = 20, q1 = 2e-3, Z1 = Qf + _l * 1.6, jf = (r) => r * 180 / Math.PI;
function nf(r, i, o) {
  const s = (i + o) / 2, u = s > Math.PI / 2 && s < 3 * Math.PI / 2, [f, h] = u ? [o, i] : [i, o], p = o - i > Math.PI ? 1 : 0, m = (g) => `${r * Math.sin(g)},${-r * Math.cos(g)}`;
  return `M${m(f)}A${r},${r} 0 ${p} ${u ? 0 : 1} ${m(h)}`;
}
function J1(r, i) {
  const o = r > Math.PI;
  return `rotate(${jf(r) - 90}) translate(${i},0)${o ? " rotate(180)" : ""}`;
}
function b1(r, i) {
  const o = r > Math.PI / 2 && r < 3 * Math.PI / 2, s = i * Math.sin(r), u = -i * Math.cos(r);
  return `translate(${s},${u}) rotate(${jf(r) - (o ? 180 : 0)})`;
}
function e3(r) {
  const i = r.map((o) => o.want);
  for (let o = 0; o < 300; o++) {
    let s = !1;
    for (let f = 0; f + 1 < i.length; f++) {
      const h = r[f].half + r[f + 1].half, p = i[f + 1] - i[f];
      if (p < h) {
        const m = (h - p) / 2;
        i[f] -= m, i[f + 1] += m, s = !0;
      }
    }
    const u = i.length;
    if (u > 1) {
      const f = r[u - 1].half + r[0].half, h = i[0] + 2 * Math.PI - i[u - 1];
      if (h < f) {
        const p = (f - h) / 2;
        i[u - 1] -= p, i[0] += p, s = !0;
      }
    }
    for (let f = 0; f < i.length; f++) i[f] += (r[f].want - i[f]) * 0.02;
    if (!s) break;
  }
  return i;
}
function n3({
  nodes: r,
  width: i,
  labels: o,
  r: s,
  ringGap: u,
  colorOf: f,
  tintOf: h,
  nameOf: p,
  idPrefix: m
}) {
  const g = (I) => {
    const Z = s(I.y0), ce = s(Math.max(I.y0, I.y1 - u));
    return { r0: Z, r1: ce, rMid: (Z + ce) / 2 };
  }, v = o !== "san", k = o !== "names", w = i / 75, C = r.filter((I) => p(I) && !I.ancestors().slice(1).some((Z) => p(Z) === p(I))), G = v ? C.flatMap((I) => {
    const Z = rf(p(I)), { r0: ce, r1: pe, rMid: A } = g(I), M = pe - ce, P = I.x1 - I.x0, $ = (j) => 0.9 * j * P / (Z.length * bd), he = Math.min(18, 0.5 * M, $(A));
    if (he < w) return [];
    let ge = he, se = A, T;
    if (k) {
      const j = (I.x0 + I.x1) / 2, R = j > Math.PI / 2 && j < 3 * Math.PI / 2 ? -1 : 1, S = 0.45 * (M - Gn), E = Math.min(18, S, $(A));
      if (E >= X1) {
        const ie = (E + Gn) / 4 + 1, le = A - R * ie, te = A + R * ie, de = I.data.san.length * ef * Gn;
        le - E / 2 >= ce && le + E / 2 <= pe && te - Gn / 2 >= ce && te + Gn / 2 <= pe && de <= 0.9 * te * P && (ge = E, se = le, T = nf(te, I.x0, I.x1));
      }
    }
    return [{ d: I, text: Z, fontSize: ge, path: nf(se, I.x0, I.x1), sanPath: T }];
  }) : [], F = new Set(G.map((I) => I.d)), H = new Set(G.map((I) => I.text)), q = k ? r.flatMap((I) => {
    if (F.has(I)) return [];
    const Z = g(I), ce = Z.rMid * (I.x1 - I.x0), pe = Z.r1 - Z.r0;
    return ce < Gn * 1.15 ? [] : pe < I.data.san.length * ef * Gn + 6 ? [] : [{ d: I, a: (I.x0 + I.x1) / 2, rMid: Z.rMid }];
  }) : [], oe = r.length ? r[0].ancestors().pop().value ?? 0 : 0, K = new Set(H), J = i / 2 + Qf, ue = v ? [...C].filter((I) => !F.has(I) && (I.value ?? 0) >= oe * q1).sort((I, Z) => (Z.value ?? 0) - (I.value ?? 0) || I.x0 - Z.x0).flatMap((I) => {
    const Z = rf(p(I));
    return K.has(Z) ? [] : (K.add(Z), [{ d: I, text: Z }]);
  }).slice(0, Y1).map(({ d: I, text: Z }) => ({
    d: I,
    text: Z,
    want: (I.x0 + I.x1) / 2,
    half: Z.length * bd * _l / 2 / J + 0.012
  })).sort((I, Z) => I.want - Z.want) : [], ae = e3(ue);
  return /* @__PURE__ */ b.jsxs("g", { pointerEvents: "none", children: [
    G.map(({ d: I, text: Z, fontSize: ce, path: pe, sanPath: A }, M) => {
      const P = `${m}-pname-${M}`, $ = `${m}-psan-${M}`;
      return /* @__PURE__ */ b.jsxs("g", { children: [
        /* @__PURE__ */ b.jsx("path", { id: P, d: pe, fill: "none" }),
        A && /* @__PURE__ */ b.jsx("path", { id: $, d: A, fill: "none" }),
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
            children: /* @__PURE__ */ b.jsx("textPath", { href: `#${P}`, startOffset: "50%", children: Z })
          }
        ),
        A && /* @__PURE__ */ b.jsx(
          "text",
          {
            fontSize: Gn,
            fontFamily: "'Gill Sans', 'Avenir Next', sans-serif",
            fill: "#f6f3ee",
            opacity: 0.85,
            dominantBaseline: "central",
            textAnchor: "middle",
            children: /* @__PURE__ */ b.jsx("textPath", { href: `#${$}`, startOffset: "50%", children: I.data.san })
          }
        )
      ] }, P);
    }),
    q.map(({ d: I, a: Z, rMid: ce }) => /* @__PURE__ */ b.jsx(
      "text",
      {
        transform: J1(Z, ce),
        fontSize: Gn,
        fontFamily: "'Gill Sans', 'Avenir Next', sans-serif",
        fill: "#f6f3ee",
        opacity: 0.85,
        textAnchor: "middle",
        dominantBaseline: "central",
        children: I.data.san
      },
      `san-${tf(I)}`
    )),
    ue.map(({ d: I, text: Z }, ce) => {
      const pe = ae[ce], { rMid: A } = g(I), M = (I.x0 + I.x1) / 2, P = [A * Math.sin(M), -A * Math.cos(M)], $ = [(J - 3) * Math.sin(pe), -(J - 3) * Math.cos(pe)];
      return /* @__PURE__ */ b.jsxs("g", { children: [
        /* @__PURE__ */ b.jsx(
          "line",
          {
            x1: P[0],
            y1: P[1],
            x2: $[0],
            y2: $[1],
            stroke: "#888",
            strokeOpacity: 0.6,
            strokeWidth: 0.6
          }
        ),
        /* @__PURE__ */ b.jsx("circle", { cx: P[0], cy: P[1], r: 1.6, fill: h(I) }),
        /* @__PURE__ */ b.jsx(
          "text",
          {
            transform: b1(pe, J + _l * 0.6),
            fontSize: _l,
            fontFamily: "'Avenir Next Condensed', 'Arial Narrow', sans-serif",
            letterSpacing: "0.04em",
            fill: h(I),
            opacity: 0.9,
            textAnchor: "middle",
            dominantBaseline: "central",
            children: Z
          }
        )
      ] }, `callout-${tf(I)}`);
    })
  ] });
}
function tf(r) {
  return r.ancestors().map((i) => i.data.san).join(" ");
}
function rf(r) {
  let i = r.replace("Opening", "").trim();
  const o = i.indexOf(": ");
  return o >= 0 && (i = i.slice(o + 2)), i.toUpperCase();
}
const t3 = "B00 - King's Pawn", r3 = "A40 - Queen's Pawn Game", i3 = "A10 - English Opening", l3 = "A04 - Zukertort Opening", o3 = "A01 - Nimzo-Larsen Attack", a3 = "A02 - Bird Opening", s3 = "A00 - Van Geet Opening", c3 = "A00 - Polish Opening", u3 = "A00 - Hungarian Opening", d3 = {
  e4: t3,
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
  d4: r3,
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
  c4: i3,
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
  Nf3: l3,
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
  b3: o3,
  "b3 e5": "A01 - Nimzo-Larsen Attack: Modern Variation",
  "b3 e5 Bb2": "A01 - Nimzo-Larsen Attack: Modern Variation",
  "b3 e5 Bb2 Nc6": "A01 - Nimzo-Larsen Attack: Modern Variation",
  f4: a3,
  "f4 d5": "A03 - Bird Opening: Dutch Variation",
  Nc3: s3,
  b4: c3,
  g3: u3,
  "g3 g6": "A00 - Hungarian Opening: Symmetrical Variation",
  "g3 Nf6": "A00 - Hungarian Opening: Indian Defense"
}, Uf = {
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
function f3(r, i, o, s, u) {
  let f = Uf[r];
  if (f || (s.has(r) || s.set(r, s.size), f = Ll[s.get(r) % Ll.length]), u) return Al(f[1]);
  const h = i % 2 === 1 ? f[0] : f[1];
  return Al(h).darker(Math.floor((i - 1) / 2) * o);
}
const h3 = [
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
function p3(r, i) {
  return (Uf[r] ?? Ll[(i.get(r) ?? 0) % Ll.length])[0];
}
const g3 = d3;
function Ua(r) {
  const i = r.ancestors().reverse().slice(1).map((s) => s.data.san).join(" "), o = g3[i];
  return o ? o.replace(/^[A-E]\d\d - /, "") : void 0;
}
function m3(r) {
  let i = r.replace("Opening", "").trim();
  const o = i.indexOf(": ");
  return o >= 0 && (i = i.slice(o + 2)), i.toUpperCase();
}
function N3(r, i, o) {
  const s = (i + o) / 2, u = s > Math.PI / 2 && s < 3 * Math.PI / 2, [f, h] = u ? [o, i] : [i, o], p = o - i > Math.PI ? 1 : 0, m = (g) => `${r * Math.sin(g)},${-r * Math.cos(g)}`;
  return `M${m(f)}A${r},${r} 0 ${p} ${u ? 0 : 1} ${m(h)}`;
}
const v3 = 0.68, y3 = "0.06em";
function x3(r) {
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
function yl({ data: r, knobs: i, crop: o, highlight: s, className: u, dataset: f }) {
  const { width: h, hole: p } = i, m = Kn.useMemo(() => {
    const A = ms(r, (M) => M.children);
    return i.sum === "leaves" ? A.sum((M) => M.children.length ? 0 : M.count) : A.eachAfter((M) => {
      M.value = M.data.count;
    }), i.sort && i.sortHeight === !1 ? A.sort((M, P) => (P.value ?? 0) - (M.value ?? 0)) : i.sort ? A.sort((M, P) => P.height - M.height || (P.value ?? 0) - (M.value ?? 0)) : A.sort(() => 0), m1().size([2 * Math.PI, h / 2 - p])(A);
  }, [r, i.sum, i.sort, i.sortHeight, h, p]), g = Kn.useMemo(() => {
    const A = [0, h / 2], M = [0, h / 2];
    if (i.radius === "log") {
      const $ = $f([1, h / 2 + 1], M);
      return (he) => $(he + 1);
    }
    const P = i.radius === "sqrt" ? O1(A, M) : Ff(A, M);
    return ($) => P($);
  }, [i.radius, h]), v = /* @__PURE__ */ new Map(), k = Kn.useMemo(() => {
    const A = Rf(
      i.palette === "tableau10" ? I1 : i.palette === "category20-move" ? h3 : T1
    );
    if (f === "sample-2015") {
      const M = i.thresholdUnit === "fraction" ? i.nodeThreshold * 2 * Math.PI : i.nodeThreshold, P = [];
      for (const $ of m.descendants())
        $.x1 - $.x0 <= M || P.includes($.data.san) || P.push($.data.san);
      A.domain(P);
    }
    return A;
  }, [i.palette, i.thresholdUnit, i.nodeThreshold, f, m]), w = Kn.useMemo(
    () => W1().startAngle((A) => A.x0).endAngle((A) => A.x1).padAngle(
      (A) => i.padAngle ? Math.min((A.x1 - A.x0) / 2, i.padAngle) : 0
    ).padRadius(h / 4).innerRadius((A) => g(A.y0)).outerRadius((A) => g(Math.max(A.y0, A.y1 - i.ringGap))),
    [i.padAngle, i.ringGap, g, h]
  );
  function C(A) {
    const M = i.shading === "flat", P = i.palette === "category20-move" ? A.data.san : Ha(A).data.san;
    if (i.palette === "poster")
      return f3(P, A.depth, i.depthFade, v, M);
    let $ = Al(k(P)).brighter(i.brighten ?? 0.2);
    return M || ($ = A.depth % 2 === 0 ? $.darker(0.5) : $.brighter(0.5)), $.darker(A.depth * i.depthFade);
  }
  const G = m.descendants().filter((A) => {
    if (!A.depth) return !1;
    const M = A.x1 - A.x0, P = i.thresholdUnit === "fraction" ? i.nodeThreshold * 2 * Math.PI : i.nodeThreshold;
    return M > P;
  }), F = i.labels ?? "san", H = Kn.useId(), q = i.posterLabels === !0, oe = q || F === "san" ? [] : G.flatMap((A) => {
    const M = Ua(A);
    if (!M) return [];
    if (A.ancestors().slice(1).some((S) => Ua(S) === M)) return [];
    const $ = m3(M), he = g(A.y0), ge = g(Math.max(A.y0, A.y1 - i.ringGap)), se = (he + ge) / 2, j = 0.85 * (se * (A.x1 - A.x0)) / ($.length * v3), R = Math.min(16, 0.55 * (ge - he), j);
    return R < h / 75 ? [] : [{ d: A, text: $, fontSize: R, path: N3(se, A.x0, A.x1) }];
  }), K = new Set(oe.map((A) => A.d)), J = f === "sample-2015", ue = !q && i.showSan && F !== "names" ? G.filter((A) => {
    if (K.has(A)) return !1;
    const M = A.x1 - A.x0;
    if (J) return M * 90 / Math.PI >= 10;
    const P = i.thresholdUnit === "fraction" ? i.sanThreshold * 2 * Math.PI : i.sanThreshold;
    return M > P;
  }) : [], ae = g(m.y1), I = x3(i), Z = q && F !== "san" ? Z1 : 0, ce = h / 2 + Z, pe = o ? `${o.x} ${o.y} ${o.size} ${o.size}` : `${-ce} ${-ce} ${2 * ce} ${2 * ce}`;
  return /* @__PURE__ */ b.jsxs(
    "svg",
    {
      viewBox: pe,
      role: "img",
      className: u ?? "openings-sunburst",
      children: [
        /* @__PURE__ */ b.jsxs("g", { children: [
          G.map((A) => {
            const M = C(A), P = A.ancestors().map(($) => $.data.san).join(" ");
            return /* @__PURE__ */ b.jsx(
              "path",
              {
                d: w(A) ?? void 0,
                fill: M.toString(),
                stroke: I.stroke,
                strokeWidth: I.width,
                paintOrder: I.paintOrder
              },
              P
            );
          }),
          oe.map(({ d: A, text: M, fontSize: P, path: $ }, he) => {
            const ge = `${H}-name-${he}`;
            return /* @__PURE__ */ b.jsxs("g", { children: [
              /* @__PURE__ */ b.jsx("path", { id: ge, d: $, fill: "none" }),
              /* @__PURE__ */ b.jsx(
                "text",
                {
                  fontSize: P,
                  fontFamily: "sans-serif",
                  letterSpacing: y3,
                  fill: C(A).darker(0.7).toString(),
                  opacity: 0.7,
                  dominantBaseline: "central",
                  textAnchor: "middle",
                  children: /* @__PURE__ */ b.jsx("textPath", { href: `#${ge}`, startOffset: "50%", children: M })
                }
              )
            ] }, ge);
          }),
          ue.map((A) => {
            const M = A.ancestors().map((T) => T.data.san).join(" "), P = i.sanSize ?? (i.width < 600 ? 10 : 12), $ = i.sanColor ?? "white";
            if (J) {
              const T = g(A.y0), j = g(Math.max(A.y0, A.y1 - i.ringGap)), R = (T + j) / 2, S = (A.x0 + A.x1) / 2 - Math.PI / 2;
              return /* @__PURE__ */ b.jsx(
                "text",
                {
                  textAnchor: "middle",
                  fontSize: P,
                  fontFamily: "sans-serif",
                  fill: $,
                  transform: `translate(${Math.cos(S) * R},${Math.sin(S) * R})`,
                  children: A.data.san
                },
                M
              );
            }
            const he = (A.x0 + A.x1) / 2 * 180 / Math.PI, ge = g((A.y0 + A.y1) / 2), se = he - 90;
            return /* @__PURE__ */ b.jsx(
              "text",
              {
                textAnchor: "middle",
                fontSize: P,
                fontFamily: "sans-serif",
                fill: $,
                transform: `rotate(${se}) translate(${ge},0) rotate(${-se})`,
                dy: "0.35em",
                children: A.data.san
              },
              M
            );
          })
        ] }),
        q && /* @__PURE__ */ b.jsx(
          n3,
          {
            nodes: G,
            width: h,
            labels: F,
            r: g,
            ringGap: i.ringGap,
            colorOf: C,
            tintOf: (A) => i.palette === "poster" ? p3(Ha(A).data.san, v) : C(Ha(A)).brighter(0.5).toString(),
            nameOf: Ua,
            idPrefix: H
          }
        ),
        i.center === "board-disk" && ae > 0 && /* @__PURE__ */ b.jsx(w3, { size: ae * 1.6 }),
        s && /* @__PURE__ */ b.jsx(
          "rect",
          {
            x: s.x,
            y: s.y,
            width: s.size,
            height: s.size,
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
function w3({ size: r }) {
  const i = r / 8;
  return /* @__PURE__ */ b.jsx("g", { transform: `translate(${-r / 2},${-r / 2})`, pointerEvents: "none", children: Array.from({ length: 64 }, (o, s) => {
    const u = Math.floor(s / 8), f = s % 8;
    return /* @__PURE__ */ b.jsx(
      "rect",
      {
        x: f * i,
        y: u * i,
        width: i,
        height: i,
        fill: (u + f) % 2 ? "#b58863" : "#f0d9b5"
      },
      s
    );
  }) });
}
const S3 = 2197113, k3 = "start", _3 = /* @__PURE__ */ JSON.parse('[{"count":1051522,"san":"e4","children":[{"count":76139,"san":"c6","children":[{"count":61565,"san":"d4","children":[{"count":59388,"san":"d5","children":[{"count":18428,"san":"Nc3","children":[{"count":17125,"san":"dxe4","children":[{"count":16947,"san":"Nxe4","children":[{"count":4655,"san":"Nd7","children":[]},{"count":8734,"san":"Bf5","children":[{"count":8288,"san":"Ng3","children":[{"count":8258,"san":"Bg6","children":[]}]}]},{"count":3439,"san":"Nf6","children":[{"count":2926,"san":"Nxf6+","children":[]}]}]}]}]},{"count":15596,"san":"exd5","children":[{"count":15489,"san":"cxd5","children":[{"count":9801,"san":"c4","children":[{"count":9213,"san":"Nf6","children":[{"count":8908,"san":"Nc3","children":[{"count":4807,"san":"e6","children":[]},{"count":2347,"san":"Nc6","children":[]}]}]}]},{"count":4527,"san":"Bd3","children":[{"count":3578,"san":"Nc6","children":[{"count":3427,"san":"c3","children":[]}]}]}]}]},{"count":14661,"san":"e5","children":[{"count":12384,"san":"Bf5","children":[{"count":2831,"san":"Nc3","children":[]},{"count":4227,"san":"Nf3","children":[{"count":4174,"san":"e6","children":[{"count":3614,"san":"Be2","children":[]}]}]}]}]},{"count":8683,"san":"Nd2","children":[{"count":8068,"san":"dxe4","children":[{"count":8068,"san":"Nxe4","children":[{"count":3901,"san":"Bf5","children":[{"count":3653,"san":"Ng3","children":[{"count":3645,"san":"Bg6","children":[]}]}]},{"count":2568,"san":"Nd7","children":[]}]}]}]}]}]},{"count":5057,"san":"Nc3","children":[{"count":4851,"san":"d5","children":[{"count":3437,"san":"Nf3","children":[]}]}]},{"count":2679,"san":"d3","children":[{"count":2342,"san":"d5","children":[{"count":2235,"san":"Nd2","children":[]}]}]},{"count":4019,"san":"c4","children":[{"count":3112,"san":"d5","children":[]}]}]},{"count":26044,"san":"Nf6","children":[{"count":20284,"san":"e5","children":[{"count":20075,"san":"Nd5","children":[{"count":2846,"san":"c4","children":[{"count":2833,"san":"Nb6","children":[]}]},{"count":15585,"san":"d4","children":[{"count":15304,"san":"d6","children":[{"count":9446,"san":"Nf3","children":[{"count":4140,"san":"Bg4","children":[{"count":3800,"san":"Be2","children":[]}]},{"count":2308,"san":"g6","children":[]}]},{"count":4660,"san":"c4","children":[{"count":4655,"san":"Nb6","children":[{"count":2906,"san":"exd6","children":[]}]}]}]}]}]}]},{"count":4895,"san":"Nc3","children":[{"count":3452,"san":"d5","children":[]}]}]},{"count":32751,"san":"g6","children":[{"count":30215,"san":"d4","children":[{"count":26550,"san":"Bg7","children":[{"count":16645,"san":"Nc3","children":[{"count":10447,"san":"d6","children":[{"count":3607,"san":"Be3","children":[]},{"count":3208,"san":"f4","children":[]}]},{"count":4892,"san":"c6","children":[]}]},{"count":5031,"san":"Nf3","children":[{"count":3971,"san":"d6","children":[]}]}]}]}]},{"count":141803,"san":"e6","children":[{"count":121855,"san":"d4","children":[{"count":119291,"san":"d5","children":[{"count":16546,"san":"e5","children":[{"count":15692,"san":"c5","children":[{"count":13956,"san":"c3","children":[{"count":2927,"san":"Qb6","children":[{"count":2687,"san":"Nf3","children":[]}]},{"count":10267,"san":"Nc6","children":[{"count":9667,"san":"Nf3","children":[{"count":5009,"san":"Qb6","children":[]},{"count":3301,"san":"Bd7","children":[]}]}]}]}]}]},{"count":36966,"san":"Nd2","children":[{"count":10841,"san":"c5","children":[{"count":6523,"san":"exd5","children":[{"count":2996,"san":"Qxd5","children":[{"count":2656,"san":"Ngf3","children":[{"count":2520,"san":"cxd4","children":[]}]}]},{"count":3507,"san":"exd5","children":[{"count":2225,"san":"Ngf3","children":[]}]}]},{"count":3750,"san":"Ngf3","children":[]}]},{"count":14529,"san":"Nf6","children":[{"count":13602,"san":"e5","children":[{"count":13096,"san":"Nfd7","children":[{"count":2760,"san":"c3","children":[{"count":2714,"san":"c5","children":[]}]},{"count":2558,"san":"f4","children":[{"count":2525,"san":"c5","children":[]}]},{"count":7170,"san":"Bd3","children":[{"count":7002,"san":"c5","children":[]}]}]}]}]},{"count":3637,"san":"dxe4","children":[{"count":3636,"san":"Nxe4","children":[]}]},{"count":2717,"san":"Be7","children":[]},{"count":2785,"san":"Nc6","children":[{"count":2348,"san":"Ngf3","children":[{"count":2205,"san":"Nf6","children":[]}]}]}]},{"count":55239,"san":"Nc3","children":[{"count":28980,"san":"Bb4","children":[{"count":21760,"san":"e5","children":[{"count":15003,"san":"c5","children":[{"count":12468,"san":"a3","children":[{"count":10522,"san":"Bxc3+","children":[]}]}]},{"count":3857,"san":"Ne7","children":[{"count":2874,"san":"a3","children":[{"count":2844,"san":"Bxc3+","children":[]}]}]}]},{"count":2414,"san":"Ne2","children":[]}]},{"count":4799,"san":"dxe4","children":[{"count":4778,"san":"Nxe4","children":[{"count":2682,"san":"Nd7","children":[{"count":2239,"san":"Nf3","children":[]}]}]}]},{"count":19501,"san":"Nf6","children":[{"count":11416,"san":"Bg5","children":[{"count":4634,"san":"Be7","children":[{"count":4245,"san":"e5","children":[{"count":3941,"san":"Nfd7","children":[]}]}]},{"count":3110,"san":"Bb4","children":[{"count":2587,"san":"e5","children":[{"count":2575,"san":"h6","children":[]}]}]},{"count":3645,"san":"dxe4","children":[{"count":3555,"san":"Nxe4","children":[{"count":2389,"san":"Be7","children":[]}]}]}]},{"count":7366,"san":"e5","children":[{"count":7171,"san":"Nfd7","children":[{"count":5804,"san":"f4","children":[{"count":5715,"san":"c5","children":[]}]}]}]}]}]},{"count":9814,"san":"exd5","children":[{"count":9704,"san":"exd5","children":[{"count":3812,"san":"Nf3","children":[]},{"count":3927,"san":"Bd3","children":[]}]}]}]}]},{"count":9956,"san":"d3","children":[{"count":7838,"san":"d5","children":[{"count":6733,"san":"Nd2","children":[{"count":3780,"san":"Nf6","children":[{"count":3011,"san":"Ngf3","children":[]}]},{"count":2351,"san":"c5","children":[]}]}]}]},{"count":3976,"san":"Nf3","children":[{"count":3555,"san":"d5","children":[]}]}]},{"count":232240,"san":"e5","children":[{"count":196510,"san":"Nf3","children":[{"count":21653,"san":"Nf6","children":[{"count":3961,"san":"d4","children":[{"count":3083,"san":"Nxe4","children":[{"count":2611,"san":"Bd3","children":[{"count":2379,"san":"d5","children":[]}]}]}]},{"count":12396,"san":"Nxe5","children":[{"count":11916,"san":"d6","children":[{"count":11152,"san":"Nf3","children":[{"count":11141,"san":"Nxe4","children":[{"count":5954,"san":"d4","children":[{"count":5607,"san":"d5","children":[]}]},{"count":2372,"san":"Nc3","children":[]}]}]}]}]},{"count":4099,"san":"Nc3","children":[{"count":2454,"san":"Nc6","children":[]}]}]},{"count":161359,"san":"Nc6","children":[{"count":96748,"san":"Bb5","children":[{"count":69150,"san":"a6","children":[{"count":59965,"san":"Ba4","children":[{"count":51609,"san":"Nf6","children":[{"count":42751,"san":"O-O","children":[{"count":27842,"san":"Be7","children":[]},{"count":5553,"san":"Nxe4","children":[]},{"count":7592,"san":"b5","children":[]}]},{"count":3392,"san":"d3","children":[]},{"count":2272,"san":"Qe2","children":[]}]},{"count":5726,"san":"d6","children":[]}]},{"count":9108,"san":"Bxc6","children":[{"count":8892,"san":"dxc6","children":[{"count":6607,"san":"O-O","children":[{"count":2424,"san":"f6","children":[]}]}]}]}]},{"count":11935,"san":"Nf6","children":[{"count":8040,"san":"O-O","children":[{"count":5646,"san":"Nxe4","children":[{"count":4604,"san":"d4","children":[{"count":3534,"san":"Nd6","children":[]}]}]}]},{"count":2403,"san":"d3","children":[]}]},{"count":4754,"san":"f5","children":[{"count":2484,"san":"Nc3","children":[]}]},{"count":3274,"san":"Bc5","children":[]}]},{"count":30899,"san":"Bc4","children":[{"count":14179,"san":"Bc5","children":[{"count":2469,"san":"b4","children":[]},{"count":7221,"san":"c3","children":[{"count":6022,"san":"Nf6","children":[{"count":3433,"san":"d3","children":[]}]}]}]},{"count":13752,"san":"Nf6","children":[{"count":3692,"san":"Ng5","children":[{"count":3002,"san":"d5","children":[{"count":2995,"san":"exd5","children":[]}]}]},{"count":6725,"san":"d3","children":[{"count":3346,"san":"Be7","children":[{"count":2261,"san":"O-O","children":[]}]},{"count":2267,"san":"Bc5","children":[]}]}]}]},{"count":20255,"san":"d4","children":[{"count":19655,"san":"exd4","children":[{"count":14078,"san":"Nxd4","children":[{"count":6240,"san":"Bc5","children":[{"count":3089,"san":"Be3","children":[{"count":2704,"san":"Qf6","children":[]}]}]},{"count":5020,"san":"Nf6","children":[{"count":3879,"san":"Nxc6","children":[{"count":3859,"san":"bxc6","children":[]}]}]}]},{"count":4121,"san":"Bc4","children":[]}]}]},{"count":10555,"san":"Nc3","children":[{"count":8868,"san":"Nf6","children":[{"count":3205,"san":"d4","children":[{"count":2804,"san":"exd4","children":[{"count":2333,"san":"Nxd4","children":[]}]}]},{"count":3805,"san":"Bb5","children":[]}]}]}]},{"count":8457,"san":"d6","children":[{"count":6617,"san":"d4","children":[{"count":3375,"san":"exd4","children":[{"count":2746,"san":"Nxd4","children":[]}]}]}]},{"count":3261,"san":"f5","children":[]}]},{"count":11606,"san":"f4","children":[{"count":7144,"san":"exf4","children":[{"count":5477,"san":"Nf3","children":[]}]}]},{"count":3733,"san":"d4","children":[{"count":3474,"san":"exd4","children":[]}]},{"count":10391,"san":"Nc3","children":[{"count":2491,"san":"Nc6","children":[]},{"count":6670,"san":"Nf6","children":[{"count":2240,"san":"f4","children":[]}]}]},{"count":9145,"san":"Bc4","children":[{"count":6776,"san":"Nf6","children":[{"count":4990,"san":"d3","children":[]}]}]}]},{"count":454574,"san":"c5","children":[{"count":347334,"san":"Nf3","children":[{"count":86338,"san":"e6","children":[{"count":5707,"san":"c3","children":[{"count":2408,"san":"Nf6","children":[]},{"count":2831,"san":"d5","children":[]}]},{"count":63801,"san":"d4","children":[{"count":63631,"san":"cxd4","children":[{"count":63332,"san":"Nxd4","children":[{"count":17799,"san":"Nc6","children":[{"count":13811,"san":"Nc3","children":[{"count":8433,"san":"Qc7","children":[]},{"count":3174,"san":"a6","children":[]}]},{"count":2314,"san":"Nb5","children":[]}]},{"count":27159,"san":"a6","children":[{"count":12137,"san":"Bd3","children":[{"count":3505,"san":"Bc5","children":[]},{"count":4050,"san":"Nf6","children":[]}]},{"count":10329,"san":"Nc3","children":[{"count":6954,"san":"Qc7","children":[]},{"count":2318,"san":"b5","children":[]}]},{"count":2690,"san":"c4","children":[]}]},{"count":16965,"san":"Nf6","children":[{"count":15267,"san":"Nc3","children":[{"count":3869,"san":"Nc6","children":[]},{"count":10089,"san":"d6","children":[]}]}]}]}]}]},{"count":5983,"san":"Nc3","children":[{"count":2969,"san":"a6","children":[]}]},{"count":5197,"san":"d3","children":[{"count":3651,"san":"Nc6","children":[{"count":3268,"san":"g3","children":[]}]}]},{"count":2412,"san":"b3","children":[]}]},{"count":5084,"san":"a6","children":[]},{"count":101269,"san":"Nc6","children":[{"count":66796,"san":"d4","children":[{"count":66650,"san":"cxd4","children":[{"count":66252,"san":"Nxd4","children":[{"count":2966,"san":"Qc7","children":[{"count":2393,"san":"Nc3","children":[{"count":2345,"san":"e6","children":[]}]}]},{"count":34744,"san":"Nf6","children":[{"count":34505,"san":"Nc3","children":[{"count":15607,"san":"d6","children":[]},{"count":15141,"san":"e5","children":[]},{"count":2259,"san":"e6","children":[]}]}]},{"count":12770,"san":"g6","children":[{"count":5519,"san":"Nc3","children":[{"count":5493,"san":"Bg7","children":[]}]},{"count":5372,"san":"c4","children":[{"count":3276,"san":"Bg7","children":[]}]}]},{"count":2655,"san":"Qb6","children":[{"count":2387,"san":"Nb3","children":[{"count":2243,"san":"Nf6","children":[]}]}]},{"count":4375,"san":"e6","children":[{"count":3241,"san":"Nc3","children":[]}]},{"count":7286,"san":"e5","children":[{"count":6530,"san":"Nb5","children":[{"count":4937,"san":"d6","children":[]}]}]}]}]}]},{"count":19959,"san":"Bb5","children":[{"count":9813,"san":"g6","children":[{"count":3183,"san":"Bxc6","children":[{"count":2311,"san":"dxc6","children":[]}]},{"count":5984,"san":"O-O","children":[{"count":5898,"san":"Bg7","children":[{"count":2387,"san":"Re1","children":[]},{"count":2773,"san":"c3","children":[]}]}]}]},{"count":4363,"san":"e6","children":[{"count":2724,"san":"O-O","children":[{"count":2589,"san":"Nge7","children":[]}]}]},{"count":2844,"san":"d6","children":[]}]},{"count":3333,"san":"c3","children":[]},{"count":7777,"san":"Nc3","children":[]}]},{"count":143298,"san":"d6","children":[{"count":115393,"san":"d4","children":[{"count":110566,"san":"cxd4","children":[{"count":105461,"san":"Nxd4","children":[{"count":103951,"san":"Nf6","children":[{"count":101346,"san":"Nc3","children":[{"count":19599,"san":"g6","children":[]},{"count":58355,"san":"a6","children":[]},{"count":5860,"san":"e6","children":[]},{"count":16384,"san":"Nc6","children":[]}]}]}]},{"count":4815,"san":"Qxd4","children":[{"count":2718,"san":"Nc6","children":[{"count":2687,"san":"Bb5","children":[{"count":2349,"san":"Bd7","children":[]}]}]}]}]},{"count":4793,"san":"Nf6","children":[{"count":4510,"san":"Nc3","children":[{"count":4492,"san":"cxd4","children":[{"count":4299,"san":"Nxd4","children":[{"count":2303,"san":"a6","children":[]}]}]}]}]}]},{"count":13939,"san":"Bb5+","children":[{"count":8159,"san":"Bd7","children":[{"count":7599,"san":"Bxd7+","children":[{"count":5906,"san":"Qxd7","children":[{"count":3561,"san":"O-O","children":[{"count":2241,"san":"Nc6","children":[]}]},{"count":2213,"san":"c4","children":[]}]}]}]},{"count":3420,"san":"Nd7","children":[]},{"count":2357,"san":"Nc6","children":[]}]},{"count":6561,"san":"c3","children":[{"count":6135,"san":"Nf6","children":[{"count":2719,"san":"Be2","children":[]}]}]},{"count":2686,"san":"Nc3","children":[]}]},{"count":3192,"san":"Nf6","children":[]},{"count":7443,"san":"g6","children":[{"count":5272,"san":"d4","children":[{"count":3238,"san":"cxd4","children":[{"count":2555,"san":"Nxd4","children":[]}]}]}]}]},{"count":34855,"san":"c3","children":[{"count":12389,"san":"Nf6","children":[{"count":12095,"san":"e5","children":[{"count":12083,"san":"Nd5","children":[{"count":8765,"san":"d4","children":[{"count":8313,"san":"cxd4","children":[{"count":5153,"san":"Nf3","children":[{"count":2567,"san":"Nc6","children":[]}]}]}]},{"count":2674,"san":"Nf3","children":[]}]}]}]},{"count":12281,"san":"d5","children":[{"count":12053,"san":"exd5","children":[{"count":11889,"san":"Qxd5","children":[{"count":11376,"san":"d4","children":[{"count":5501,"san":"Nf6","children":[{"count":5205,"san":"Nf3","children":[{"count":2371,"san":"Bg4","children":[]}]}]},{"count":2250,"san":"Nc6","children":[]}]}]}]}]},{"count":3405,"san":"e6","children":[{"count":3033,"san":"d4","children":[{"count":2614,"san":"d5","children":[]}]}]},{"count":3198,"san":"d6","children":[{"count":3015,"san":"d4","children":[{"count":2304,"san":"Nf6","children":[]}]}]}]},{"count":45251,"san":"Nc3","children":[{"count":28009,"san":"Nc6","children":[{"count":6624,"san":"f4","children":[{"count":3959,"san":"g6","children":[{"count":3772,"san":"Nf3","children":[{"count":3748,"san":"Bg7","children":[]}]}]}]},{"count":12327,"san":"g3","children":[{"count":10949,"san":"g6","children":[{"count":10455,"san":"Bg2","children":[{"count":10370,"san":"Bg7","children":[{"count":8892,"san":"d3","children":[{"count":6087,"san":"d6","children":[]}]}]}]}]}]},{"count":2352,"san":"Nge2","children":[]},{"count":2776,"san":"Nf3","children":[]},{"count":3164,"san":"Bb5","children":[]}]},{"count":7137,"san":"e6","children":[{"count":2332,"san":"g3","children":[]}]},{"count":6425,"san":"d6","children":[{"count":2518,"san":"f4","children":[]}]}]},{"count":7297,"san":"d4","children":[{"count":7052,"san":"cxd4","children":[{"count":6170,"san":"c3","children":[{"count":3415,"san":"dxc3","children":[{"count":3375,"san":"Nxc3","children":[{"count":2291,"san":"Nc6","children":[]}]}]}]}]}]},{"count":4423,"san":"f4","children":[]},{"count":2696,"san":"b3","children":[]},{"count":3235,"san":"d3","children":[{"count":2275,"san":"Nc6","children":[]}]},{"count":2327,"san":"Ne2","children":[]}]},{"count":7501,"san":"Nc6","children":[{"count":3688,"san":"Nf3","children":[]},{"count":2782,"san":"d4","children":[]}]},{"count":45929,"san":"d6","children":[{"count":42382,"san":"d4","children":[{"count":35083,"san":"Nf6","children":[{"count":32169,"san":"Nc3","children":[{"count":20601,"san":"g6","children":[{"count":5823,"san":"f4","children":[{"count":5689,"san":"Bg7","children":[{"count":5311,"san":"Nf3","children":[{"count":3608,"san":"O-O","children":[]}]}]}]},{"count":4570,"san":"Nf3","children":[{"count":4457,"san":"Bg7","children":[{"count":2556,"san":"Be2","children":[{"count":2330,"san":"O-O","children":[]}]}]}]},{"count":2988,"san":"Be3","children":[]}]},{"count":3777,"san":"c6","children":[]},{"count":5688,"san":"e5","children":[{"count":3766,"san":"Nf3","children":[{"count":3512,"san":"Nbd7","children":[{"count":2988,"san":"Bc4","children":[{"count":2950,"san":"Be7","children":[]}]}]}]}]}]}]},{"count":5949,"san":"g6","children":[{"count":3718,"san":"Nc3","children":[{"count":3183,"san":"Bg7","children":[]}]}]}]}]},{"count":31014,"san":"d5","children":[{"count":29345,"san":"exd5","children":[{"count":11382,"san":"Nf6","children":[{"count":5806,"san":"d4","children":[{"count":4272,"san":"Nxd5","children":[]}]}]},{"count":17835,"san":"Qxd5","children":[{"count":16184,"san":"Nc3","children":[{"count":10268,"san":"Qa5","children":[{"count":7621,"san":"d4","children":[{"count":5214,"san":"Nf6","children":[{"count":3350,"san":"Nf3","children":[]}]}]}]},{"count":4590,"san":"Qd6","children":[{"count":3780,"san":"d4","children":[{"count":3300,"san":"Nf6","children":[{"count":2347,"san":"Nf3","children":[]}]}]}]}]}]}]}]},{"count":2620,"san":"b6","children":[{"count":2244,"san":"d4","children":[]}]}]},{"count":750505,"san":"d4","children":[{"count":435756,"san":"Nf6","children":[{"count":299965,"san":"c4","children":[{"count":130778,"san":"e6","children":[{"count":54321,"san":"Nf3","children":[{"count":5834,"san":"c5","children":[{"count":4201,"san":"d5","children":[{"count":2656,"san":"exd5","children":[{"count":2656,"san":"cxd5","children":[{"count":2282,"san":"d6","children":[]}]}]}]}]},{"count":24442,"san":"b6","children":[{"count":12844,"san":"g3","children":[{"count":7100,"san":"Ba6","children":[{"count":3762,"san":"b3","children":[{"count":2289,"san":"Bb4+","children":[]}]}]},{"count":5021,"san":"Bb7","children":[{"count":5004,"san":"Bg2","children":[{"count":3514,"san":"Be7","children":[]}]}]}]},{"count":5196,"san":"a3","children":[{"count":3049,"san":"Bb7","children":[{"count":3024,"san":"Nc3","children":[{"count":2316,"san":"d5","children":[]}]}]}]},{"count":3981,"san":"Nc3","children":[{"count":2329,"san":"Bb7","children":[]}]}]},{"count":9661,"san":"Bb4+","children":[{"count":3345,"san":"Nbd2","children":[]},{"count":5937,"san":"Bd2","children":[{"count":2880,"san":"Qe7","children":[]}]}]},{"count":13852,"san":"d5","children":[{"count":9858,"san":"Nc3","children":[{"count":3339,"san":"Be7","children":[]}]}]}]},{"count":63631,"san":"Nc3","children":[{"count":51365,"san":"Bb4","children":[{"count":20312,"san":"e3","children":[{"count":6122,"san":"c5","children":[{"count":3396,"san":"Bd3","children":[]}]},{"count":3736,"san":"b6","children":[]},{"count":9149,"san":"O-O","children":[{"count":6050,"san":"Bd3","children":[{"count":3946,"san":"d5","children":[]}]},{"count":2290,"san":"Ne2","children":[]}]}]},{"count":2384,"san":"Bg5","children":[]},{"count":3169,"san":"f3","children":[]},{"count":2205,"san":"a3","children":[]},{"count":16755,"san":"Qc2","children":[{"count":7563,"san":"O-O","children":[{"count":5399,"san":"a3","children":[{"count":5375,"san":"Bxc3+","children":[]}]}]},{"count":4435,"san":"c5","children":[{"count":3980,"san":"dxc5","children":[]}]},{"count":2825,"san":"d5","children":[]}]},{"count":4147,"san":"Nf3","children":[]}]},{"count":2580,"san":"c5","children":[{"count":2241,"san":"d5","children":[]}]},{"count":9058,"san":"d5","children":[{"count":3763,"san":"Bg5","children":[{"count":2305,"san":"Be7","children":[]}]},{"count":2943,"san":"cxd5","children":[{"count":2740,"san":"exd5","children":[{"count":2641,"san":"Bg5","children":[]}]}]}]}]},{"count":11808,"san":"g3","children":[{"count":6210,"san":"d5","children":[{"count":3753,"san":"Bg2","children":[]},{"count":2429,"san":"Nf3","children":[]}]},{"count":2623,"san":"c5","children":[]},{"count":2727,"san":"Bb4+","children":[{"count":2304,"san":"Bd2","children":[]}]}]}]},{"count":109513,"san":"g6","children":[{"count":92209,"san":"Nc3","children":[{"count":27973,"san":"d5","children":[{"count":2586,"san":"Bf4","children":[{"count":2497,"san":"Bg7","children":[]}]},{"count":12877,"san":"cxd5","children":[{"count":12873,"san":"Nxd5","children":[{"count":10877,"san":"e4","children":[{"count":10767,"san":"Nxc3","children":[]}]}]}]},{"count":9073,"san":"Nf3","children":[{"count":9033,"san":"Bg7","children":[{"count":2614,"san":"Qb3","children":[{"count":2448,"san":"dxc4","children":[]}]}]}]}]},{"count":63592,"san":"Bg7","children":[{"count":56984,"san":"e4","children":[{"count":52063,"san":"d6","children":[{"count":11209,"san":"Be2","children":[{"count":10846,"san":"O-O","children":[]}]},{"count":16826,"san":"Nf3","children":[{"count":16561,"san":"O-O","children":[]}]},{"count":13350,"san":"f3","children":[{"count":11608,"san":"O-O","children":[]}]},{"count":4226,"san":"f4","children":[{"count":3463,"san":"O-O","children":[]}]},{"count":2332,"san":"h3","children":[]}]},{"count":4893,"san":"O-O","children":[]}]},{"count":4144,"san":"Nf3","children":[{"count":2898,"san":"O-O","children":[]}]}]}]},{"count":7584,"san":"Nf3","children":[{"count":7429,"san":"Bg7","children":[{"count":5868,"san":"g3","children":[{"count":4236,"san":"O-O","children":[{"count":4216,"san":"Bg2","children":[{"count":2962,"san":"d6","children":[]}]}]}]}]}]},{"count":7945,"san":"g3","children":[{"count":6616,"san":"Bg7","children":[{"count":6559,"san":"Bg2","children":[{"count":4174,"san":"O-O","children":[{"count":2722,"san":"Nc3","children":[{"count":2443,"san":"d6","children":[]}]}]}]}]}]}]},{"count":37895,"san":"c5","children":[{"count":32464,"san":"d5","children":[{"count":3030,"san":"e5","children":[{"count":2962,"san":"Nc3","children":[{"count":2954,"san":"d6","children":[{"count":2778,"san":"e4","children":[]}]}]}]},{"count":15641,"san":"b5","children":[{"count":11611,"san":"cxb5","children":[{"count":11458,"san":"a6","children":[{"count":5485,"san":"bxa6","children":[{"count":2731,"san":"g6","children":[]},{"count":2566,"san":"Bxa6","children":[]}]},{"count":2309,"san":"b6","children":[]}]}]}]},{"count":8554,"san":"e6","children":[{"count":8315,"san":"Nc3","children":[{"count":8225,"san":"exd5","children":[{"count":8150,"san":"cxd5","children":[{"count":7575,"san":"d6","children":[]}]}]}]}]},{"count":2606,"san":"g6","children":[{"count":2524,"san":"Nc3","children":[]}]}]},{"count":3609,"san":"Nf3","children":[{"count":2529,"san":"cxd4","children":[{"count":2515,"san":"Nxd4","children":[]}]}]}]},{"count":6523,"san":"e5","children":[{"count":5966,"san":"dxe5","children":[{"count":4903,"san":"Ng4","children":[]}]}]},{"count":9514,"san":"d6","children":[{"count":6933,"san":"Nc3","children":[{"count":3177,"san":"Nbd7","children":[]}]},{"count":2402,"san":"Nf3","children":[]}]},{"count":2570,"san":"c6","children":[]}]},{"count":103612,"san":"Nf3","children":[{"count":34154,"san":"e6","children":[{"count":5558,"san":"Bg5","children":[{"count":2234,"san":"c5","children":[]}]},{"count":5218,"san":"e3","children":[{"count":2753,"san":"b6","children":[{"count":2433,"san":"Bd3","children":[{"count":2342,"san":"Bb7","children":[]}]}]}]},{"count":15354,"san":"c4","children":[{"count":3298,"san":"Bb4+","children":[]},{"count":2391,"san":"c5","children":[]},{"count":6608,"san":"b6","children":[{"count":3233,"san":"g3","children":[]}]},{"count":2743,"san":"d5","children":[]}]},{"count":2390,"san":"Bf4","children":[]},{"count":4742,"san":"g3","children":[]}]},{"count":9822,"san":"c5","children":[{"count":4817,"san":"d5","children":[]}]},{"count":9645,"san":"d5","children":[{"count":6111,"san":"c4","children":[{"count":3547,"san":"e6","children":[{"count":2229,"san":"Nc3","children":[]}]}]}]},{"count":42686,"san":"g6","children":[{"count":18449,"san":"c4","children":[{"count":16916,"san":"Bg7","children":[{"count":12824,"san":"Nc3","children":[{"count":7466,"san":"O-O","children":[{"count":5694,"san":"e4","children":[{"count":5577,"san":"d6","children":[]}]}]},{"count":3271,"san":"d5","children":[]}]},{"count":3978,"san":"g3","children":[{"count":3018,"san":"O-O","children":[{"count":2999,"san":"Bg2","children":[]}]}]}]}]},{"count":6483,"san":"Bg5","children":[{"count":6058,"san":"Bg7","children":[{"count":4837,"san":"Nbd2","children":[]}]}]},{"count":7651,"san":"g3","children":[{"count":7178,"san":"Bg7","children":[{"count":6981,"san":"Bg2","children":[{"count":5748,"san":"O-O","children":[{"count":4821,"san":"O-O","children":[{"count":3402,"san":"d6","children":[]}]}]}]}]}]},{"count":4485,"san":"Bf4","children":[{"count":4063,"san":"Bg7","children":[{"count":3058,"san":"e3","children":[]}]}]},{"count":2405,"san":"Nc3","children":[]}]},{"count":2757,"san":"b6","children":[]},{"count":3725,"san":"d6","children":[]}]},{"count":16403,"san":"Bg5","children":[{"count":5311,"san":"Ne4","children":[{"count":3784,"san":"Bf4","children":[]}]},{"count":2819,"san":"d5","children":[]},{"count":4207,"san":"e6","children":[{"count":2345,"san":"e4","children":[]}]}]},{"count":2767,"san":"g3","children":[]},{"count":7347,"san":"Nc3","children":[{"count":5307,"san":"d5","children":[{"count":3746,"san":"Bg5","children":[]}]}]}]},{"count":34034,"san":"e6","children":[{"count":8596,"san":"Nf3","children":[{"count":3125,"san":"Nf6","children":[]},{"count":2298,"san":"f5","children":[]}]},{"count":20268,"san":"c4","children":[{"count":5256,"san":"f5","children":[{"count":2810,"san":"g3","children":[{"count":2723,"san":"Nf6","children":[{"count":2683,"san":"Bg2","children":[]}]}]}]},{"count":2288,"san":"Bb4+","children":[]},{"count":2497,"san":"b6","children":[]},{"count":2854,"san":"d5","children":[]},{"count":6390,"san":"Nf6","children":[{"count":2623,"san":"Nf3","children":[]},{"count":3180,"san":"Nc3","children":[{"count":2456,"san":"Bb4","children":[]}]}]}]},{"count":3664,"san":"e4","children":[{"count":3157,"san":"d5","children":[]}]}]},{"count":198775,"san":"d5","children":[{"count":44581,"san":"Nf3","children":[{"count":29537,"san":"Nf6","children":[{"count":17005,"san":"c4","children":[{"count":6194,"san":"e6","children":[{"count":3869,"san":"Nc3","children":[]}]},{"count":7895,"san":"c6","children":[{"count":4032,"san":"Nc3","children":[]}]},{"count":2787,"san":"dxc4","children":[]}]},{"count":3552,"san":"Bf4","children":[]},{"count":4169,"san":"e3","children":[]}]},{"count":4563,"san":"e6","children":[{"count":2292,"san":"c4","children":[]}]},{"count":4656,"san":"c6","children":[{"count":2367,"san":"c4","children":[]}]}]},{"count":138986,"san":"c4","children":[{"count":17114,"san":"dxc4","children":[{"count":9525,"san":"Nf3","children":[{"count":6393,"san":"Nf6","children":[{"count":4917,"san":"e3","children":[{"count":3334,"san":"e6","children":[{"count":3321,"san":"Bxc4","children":[{"count":2526,"san":"c5","children":[]}]}]}]}]}]},{"count":3054,"san":"e3","children":[]},{"count":3445,"san":"e4","children":[]}]},{"count":53549,"san":"e6","children":[{"count":36353,"san":"Nc3","children":[{"count":7384,"san":"c6","children":[{"count":2759,"san":"e3","children":[]},{"count":2668,"san":"Nf3","children":[]}]},{"count":4430,"san":"c5","children":[{"count":3478,"san":"cxd5","children":[{"count":2663,"san":"exd5","children":[{"count":2458,"san":"Nf3","children":[{"count":2368,"san":"Nc6","children":[]}]}]}]}]},{"count":17309,"san":"Nf6","children":[{"count":3581,"san":"Nf3","children":[]},{"count":8169,"san":"Bg5","children":[{"count":4944,"san":"Be7","children":[{"count":3487,"san":"e3","children":[]}]},{"count":2327,"san":"Nbd7","children":[]}]},{"count":5108,"san":"cxd5","children":[{"count":4893,"san":"exd5","children":[{"count":4729,"san":"Bg5","children":[{"count":2766,"san":"Be7","children":[]}]}]}]}]},{"count":5275,"san":"Be7","children":[{"count":3602,"san":"Nf3","children":[{"count":3550,"san":"Nf6","children":[]}]}]}]},{"count":15394,"san":"Nf3","children":[{"count":9682,"san":"Nf6","children":[{"count":3282,"san":"g3","children":[]},{"count":4506,"san":"Nc3","children":[]}]},{"count":3028,"san":"c6","children":[]}]}]},{"count":59268,"san":"c6","children":[{"count":18056,"san":"Nc3","children":[{"count":15458,"san":"Nf6","children":[{"count":6995,"san":"e3","children":[{"count":3830,"san":"e6","children":[{"count":3625,"san":"Nf3","children":[{"count":3129,"san":"Nbd7","children":[]}]}]}]},{"count":6549,"san":"Nf3","children":[{"count":2840,"san":"e6","children":[]}]}]}]},{"count":33445,"san":"Nf3","children":[{"count":30861,"san":"Nf6","children":[{"count":18950,"san":"Nc3","children":[{"count":7707,"san":"e6","children":[{"count":3258,"san":"e3","children":[{"count":2850,"san":"Nbd7","children":[]}]},{"count":3373,"san":"Bg5","children":[]}]},{"count":3264,"san":"a6","children":[]},{"count":7097,"san":"dxc4","children":[{"count":6280,"san":"a4","children":[{"count":5083,"san":"Bf5","children":[]}]}]}]},{"count":7720,"san":"e3","children":[{"count":2550,"san":"Bf5","children":[]}]}]}]},{"count":2782,"san":"e3","children":[{"count":2279,"san":"Nf6","children":[]}]},{"count":4708,"san":"cxd5","children":[{"count":4691,"san":"cxd5","children":[{"count":3142,"san":"Nc3","children":[{"count":2200,"san":"Nf6","children":[]}]}]}]}]},{"count":2565,"san":"e5","children":[{"count":2291,"san":"dxe5","children":[{"count":2245,"san":"d4","children":[]}]}]},{"count":3375,"san":"Nc6","children":[]}]},{"count":4079,"san":"e4","children":[{"count":3649,"san":"dxe4","children":[{"count":3540,"san":"Nc3","children":[{"count":2891,"san":"Nf6","children":[{"count":2649,"san":"f3","children":[{"count":2238,"san":"exf3","children":[]}]}]}]}]}]},{"count":2757,"san":"Bg5","children":[]},{"count":2733,"san":"Bf4","children":[]},{"count":2465,"san":"Nc3","children":[]}]},{"count":19906,"san":"d6","children":[{"count":5714,"san":"c4","children":[{"count":3198,"san":"e5","children":[]}]},{"count":7290,"san":"Nf3","children":[{"count":2708,"san":"g6","children":[]}]},{"count":5603,"san":"e4","children":[{"count":3855,"san":"Nf6","children":[{"count":3028,"san":"Nc3","children":[]}]}]}]},{"count":20795,"san":"g6","children":[{"count":10082,"san":"c4","children":[{"count":8927,"san":"Bg7","children":[{"count":5382,"san":"Nc3","children":[{"count":3551,"san":"d6","children":[{"count":2735,"san":"e4","children":[]}]}]}]}]},{"count":6044,"san":"e4","children":[{"count":5101,"san":"Bg7","children":[]}]},{"count":3586,"san":"Nf3","children":[{"count":3244,"san":"Bg7","children":[]}]}]},{"count":24866,"san":"f5","children":[{"count":4891,"san":"c4","children":[{"count":3892,"san":"Nf6","children":[{"count":2205,"san":"Nc3","children":[]}]}]},{"count":8312,"san":"g3","children":[{"count":7218,"san":"Nf6","children":[{"count":7028,"san":"Bg2","children":[{"count":4592,"san":"g6","children":[]}]}]}]},{"count":2726,"san":"Nc3","children":[]},{"count":4302,"san":"Nf3","children":[{"count":3662,"san":"Nf6","children":[{"count":2296,"san":"g3","children":[]}]}]}]},{"count":9911,"san":"c5","children":[{"count":6968,"san":"d5","children":[{"count":2605,"san":"e5","children":[]}]}]}]},{"count":154519,"san":"c4","children":[{"count":49816,"san":"Nf6","children":[{"count":31962,"san":"Nc3","children":[{"count":4607,"san":"c5","children":[{"count":2265,"san":"Nf3","children":[]}]},{"count":7257,"san":"e6","children":[{"count":2522,"san":"Nf3","children":[]},{"count":2804,"san":"e4","children":[]}]},{"count":10976,"san":"g6","children":[{"count":4753,"san":"g3","children":[{"count":4438,"san":"Bg7","children":[{"count":4395,"san":"Bg2","children":[{"count":3507,"san":"O-O","children":[]}]}]}]},{"count":3885,"san":"e4","children":[{"count":3639,"san":"d6","children":[{"count":3152,"san":"d4","children":[{"count":3123,"san":"Bg7","children":[]}]}]}]}]},{"count":2986,"san":"d5","children":[{"count":2631,"san":"cxd5","children":[{"count":2629,"san":"Nxd5","children":[]}]}]},{"count":4229,"san":"e5","children":[{"count":2409,"san":"Nf3","children":[]}]}]},{"count":7573,"san":"Nf3","children":[{"count":2370,"san":"e6","children":[]},{"count":2831,"san":"g6","children":[]}]},{"count":7531,"san":"g3","children":[{"count":3124,"san":"g6","children":[{"count":2938,"san":"Bg2","children":[{"count":2575,"san":"Bg7","children":[]}]}]}]},{"count":2489,"san":"d4","children":[]}]},{"count":10705,"san":"c6","children":[{"count":2273,"san":"d4","children":[]},{"count":2752,"san":"e4","children":[{"count":2216,"san":"d5","children":[]}]},{"count":3497,"san":"Nf3","children":[{"count":2824,"san":"d5","children":[]}]}]},{"count":20027,"san":"e6","children":[{"count":6427,"san":"Nc3","children":[{"count":4626,"san":"d5","children":[{"count":3675,"san":"d4","children":[]}]}]},{"count":6776,"san":"Nf3","children":[{"count":4061,"san":"d5","children":[]},{"count":2199,"san":"Nf6","children":[]}]},{"count":3941,"san":"g3","children":[{"count":2799,"san":"d5","children":[{"count":2293,"san":"Bg2","children":[]}]}]}]},{"count":33538,"san":"e5","children":[{"count":23844,"san":"Nc3","children":[{"count":11404,"san":"Nf6","children":[{"count":6011,"san":"Nf3","children":[{"count":5461,"san":"Nc6","children":[{"count":2444,"san":"g3","children":[]}]}]},{"count":4548,"san":"g3","children":[]}]},{"count":2322,"san":"d6","children":[]},{"count":7070,"san":"Nc6","children":[{"count":4376,"san":"g3","children":[{"count":2648,"san":"g6","children":[{"count":2616,"san":"Bg2","children":[{"count":2545,"san":"Bg7","children":[]}]}]}]},{"count":2303,"san":"Nf3","children":[]}]}]},{"count":8441,"san":"g3","children":[{"count":2533,"san":"Nc6","children":[{"count":2265,"san":"Bg2","children":[]}]},{"count":3844,"san":"Nf6","children":[{"count":3749,"san":"Bg2","children":[]}]}]}]},{"count":17435,"san":"c5","children":[{"count":6995,"san":"Nc3","children":[{"count":3577,"san":"Nc6","children":[{"count":2320,"san":"g3","children":[]}]}]},{"count":6976,"san":"Nf3","children":[{"count":3188,"san":"Nf6","children":[]},{"count":2469,"san":"Nc6","children":[]}]},{"count":3180,"san":"g3","children":[]}]},{"count":13217,"san":"g6","children":[{"count":3171,"san":"g3","children":[{"count":3025,"san":"Bg7","children":[{"count":2963,"san":"Bg2","children":[]}]}]},{"count":6187,"san":"Nc3","children":[{"count":5527,"san":"Bg7","children":[{"count":3316,"san":"g3","children":[]}]}]}]},{"count":5255,"san":"f5","children":[]},{"count":2211,"san":"b6","children":[]}]},{"count":186872,"san":"Nf3","children":[{"count":88966,"san":"Nf6","children":[{"count":50459,"san":"c4","children":[{"count":15026,"san":"e6","children":[{"count":5444,"san":"Nc3","children":[{"count":2461,"san":"d5","children":[{"count":2241,"san":"d4","children":[]}]}]},{"count":7210,"san":"g3","children":[{"count":4198,"san":"d5","children":[{"count":2613,"san":"Bg2","children":[]}]}]}]},{"count":3230,"san":"b6","children":[{"count":2328,"san":"g3","children":[]}]},{"count":19489,"san":"g6","children":[{"count":10977,"san":"Nc3","children":[{"count":7905,"san":"Bg7","children":[{"count":5486,"san":"e4","children":[{"count":4761,"san":"d6","children":[{"count":4711,"san":"d4","children":[{"count":4618,"san":"O-O","children":[]}]}]}]}]},{"count":2755,"san":"d5","children":[]}]},{"count":5250,"san":"g3","children":[{"count":5066,"san":"Bg7","children":[{"count":4943,"san":"Bg2","children":[{"count":4173,"san":"O-O","children":[{"count":3048,"san":"O-O","children":[]}]}]}]}]}]},{"count":7908,"san":"c5","children":[{"count":2215,"san":"g3","children":[]},{"count":5044,"san":"Nc3","children":[]}]},{"count":2849,"san":"c6","children":[]}]},{"count":9287,"san":"d4","children":[{"count":3713,"san":"g6","children":[]},{"count":2640,"san":"e6","children":[]}]},{"count":24760,"san":"g3","children":[{"count":11804,"san":"g6","children":[{"count":8577,"san":"Bg2","children":[{"count":8425,"san":"Bg7","children":[{"count":6563,"san":"O-O","children":[{"count":5960,"san":"O-O","children":[]}]}]}]},{"count":2211,"san":"b3","children":[]}]},{"count":6594,"san":"d5","children":[{"count":5967,"san":"Bg2","children":[{"count":2737,"san":"c6","children":[]}]}]},{"count":2562,"san":"b6","children":[{"count":2464,"san":"Bg2","children":[{"count":2461,"san":"Bb7","children":[]}]}]}]},{"count":3190,"san":"b3","children":[]}]},{"count":47261,"san":"d5","children":[{"count":15277,"san":"d4","children":[{"count":9898,"san":"Nf6","children":[{"count":8222,"san":"c4","children":[{"count":3529,"san":"e6","children":[{"count":2211,"san":"Nc3","children":[]}]},{"count":3520,"san":"c6","children":[]}]}]}]},{"count":16200,"san":"g3","children":[{"count":3950,"san":"c6","children":[{"count":3759,"san":"Bg2","children":[{"count":2409,"san":"Bg4","children":[]}]}]},{"count":6208,"san":"Nf6","children":[{"count":6062,"san":"Bg2","children":[]}]}]},{"count":11985,"san":"c4","children":[{"count":4799,"san":"c6","children":[]},{"count":4162,"san":"e6","children":[]}]},{"count":2325,"san":"b3","children":[]}]},{"count":6105,"san":"f5","children":[{"count":2227,"san":"g3","children":[]}]},{"count":21472,"san":"c5","children":[{"count":12249,"san":"c4","children":[{"count":2404,"san":"g6","children":[]},{"count":4995,"san":"Nc6","children":[{"count":2363,"san":"Nc3","children":[]}]},{"count":4071,"san":"Nf6","children":[{"count":2657,"san":"Nc3","children":[]}]}]},{"count":5145,"san":"g3","children":[{"count":2607,"san":"Nc6","children":[]}]}]},{"count":10258,"san":"g6","children":[{"count":3151,"san":"d4","children":[{"count":2274,"san":"Bg7","children":[]}]},{"count":2433,"san":"g3","children":[{"count":2324,"san":"Bg7","children":[]}]},{"count":2708,"san":"c4","children":[{"count":2458,"san":"Bg7","children":[]}]}]},{"count":3629,"san":"e6","children":[]},{"count":5360,"san":"d6","children":[{"count":3706,"san":"d4","children":[]}]}]},{"count":8279,"san":"b3","children":[{"count":3630,"san":"e5","children":[{"count":3542,"san":"Bb2","children":[{"count":2594,"san":"Nc6","children":[]}]}]}]},{"count":11957,"san":"f4","children":[{"count":5540,"san":"d5","children":[{"count":4098,"san":"Nf3","children":[]}]}]},{"count":5130,"san":"Nc3","children":[]},{"count":6852,"san":"b4","children":[{"count":3117,"san":"e5","children":[{"count":2814,"san":"Bb2","children":[]}]}]},{"count":16412,"san":"g3","children":[{"count":3014,"san":"g6","children":[{"count":2847,"san":"Bg2","children":[{"count":2782,"san":"Bg7","children":[]}]}]},{"count":3069,"san":"Nf6","children":[{"count":2863,"san":"Bg2","children":[]}]},{"count":5509,"san":"d5","children":[{"count":3631,"san":"Bg2","children":[]}]},{"count":2519,"san":"e5","children":[]}]}]'), D3 = {
  count: S3,
  san: k3,
  children: _3
}, B3 = "ref", C3 = [{ name: "june11", children: [{ name: "atts", children: [{ name: "early", size: 11 }, { name: "jcp", size: 40 }, { name: "jcpaft", size: 50 }, { name: "stillon", size: 195 }, { name: "jo", children: [{ name: "early", size: 100 }, { name: "jcp", size: 67 }, { name: "jcpaft", size: 110 }, { name: "stillon", size: 154 }, { name: "sus1", children: [{ name: "early", size: 11 }, { name: "jcp", size: 118 }, { name: "jcpaft", size: 39 }, { name: "stillon", size: 2779 }] }, { name: "sus5", children: [{ name: "early", size: 0 }, { name: "jcp", size: 64 }, { name: "jcpaft", size: 410 }, { name: "stillon", size: 82 }] }, { name: "sus9", children: [{ name: "early", size: 1018 }, { name: "jcp", size: 3458 }, { name: "jcpaft", size: 106 }, { name: "stillon", size: 243 }] }, { name: "sus13", children: [{ name: "early", size: 110 }, { name: "jcp", size: 190 }, { name: "jcpaft", size: 80 }, { name: "stillon", size: 9190 }, { name: "allsus", size: 3970 }] }] }] }, { name: "noatt", size: 30 }] }], E3 = {
  name: B3,
  children: C3
};
function Hf(r) {
  const i = r;
  return {
    san: i.san ?? i.San ?? "start",
    count: i.count ?? i.Count ?? 0,
    children: (i.children ?? i.Children ?? []).map(Hf)
  };
}
function Wf(r, i, o = 0) {
  return o >= i ? { ...r, children: [] } : {
    ...r,
    children: r.children.map((s) => Wf(s, i, o + 1))
  };
}
function Xf(r, i) {
  return {
    ...r,
    children: r.children.filter((o) => o.count >= i).map((o) => Xf(o, i))
  };
}
function A3(r, i) {
  const o = Wf(r, i.maxPly), s = i.pruneFraction > 0 ? r.count * i.pruneFraction : 0;
  return s > 0 ? Xf(o, s) : o;
}
function Yf(r, i = 0) {
  return r.children.length ? r.children.reduce(
    (o, s) => {
      const u = Yf(s, i + 1);
      return {
        nodes: o.nodes + u.nodes,
        leaves: o.leaves + u.leaves,
        maxDepth: Math.max(o.maxDepth, u.maxDepth)
      };
    },
    { nodes: 1, leaves: 0, maxDepth: i }
  ) : { nodes: 1, leaves: 1, maxDepth: i };
}
const M3 = Hf(D3);
function qf(r) {
  const i = (r.children ?? []).map(qf);
  return {
    san: r.name,
    count: r.size ?? i.reduce((o, s) => o + s.count, 0),
    children: i
  };
}
const V3 = qf(E3), lf = [
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
], of = {
  stroke: "none",
  strokeWidth: void 0,
  padAngle: 5e-3,
  ringGap: 1,
  depthFade: 0.15,
  background: "light"
}, P3 = [
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
], z3 = [
  {
    id: "category10",
    label: "category10 · 2015",
    note: "d3 category10 by first move, as in chess-dataviz.",
    knobs: { ...of, palette: "category10" }
  },
  {
    id: "tableau10",
    label: "tableau10 · later",
    note: "Tableau10 by first move, as in later versions.",
    knobs: { ...of, palette: "tableau10" }
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
], af = [
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
], O3 = [
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
}, Zf = [
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
    modes: af
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
        knobs: { ...af[2].knobs, hole: 0, padAngle: 0, ringGap: 0 },
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
    knobs: { ...Dt, ...lf[0].knobs },
    modes: lf,
    inset: { angle: 1.4, radius: 0.72, size: 80 }
  },
  {
    id: "palette",
    label: "4c · palette",
    year: "knob",
    caption: "Color",
    blurb: "Same 2m tree. Color carries the first move; rings alternate light and dark so the steps stay visible.",
    knobs: { ...Dt },
    modes: z3
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
    panels: O3
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
    modes: P3,
    defaultMode: "both"
  }
];
function T3(r, i) {
  const o = r.radius * i / 2, s = o * Math.sin(r.angle), u = -o * Math.cos(r.angle);
  return { x: s - r.size / 2, y: u - r.size / 2, size: r.size };
}
function I3({ stageId: r }) {
  var F, H, q, oe;
  const i = Zf.find((K) => K.id === r), [o, s] = Kn.useState(i == null ? void 0 : i.knobs), [u, f] = Kn.useState((i == null ? void 0 : i.defaultMode) ?? ((H = (F = i == null ? void 0 : i.modes) == null ? void 0 : F[0]) == null ? void 0 : H.id)), h = (oe = (q = i == null ? void 0 : i.modes) == null ? void 0 : q.find((K) => K.id === u)) == null ? void 0 : oe.data, p = Kn.useMemo(() => {
    const K = h === "sample-2015" ? V3 : M3;
    return o ? A3(K, o) : K;
  }, [o, h]), m = Kn.useMemo(() => Yf(p), [p]);
  if (!i || !o) return null;
  const g = o.background === "dark", v = i.controls ?? [], k = i.inset ? T3(i.inset, o.width) : void 0, w = i.modes ?? [], C = w.find((K) => K.id === u);
  function G(K) {
    const J = w.find((ue) => ue.id === K);
    !J || !o || (f(K), s({ ...o, ...J.knobs }));
  }
  return /* @__PURE__ */ b.jsxs(
    "div",
    {
      className: `openings-stage${g ? " openings-stage-dark" : ""}${i.panels ? " openings-stage-wide" : ""}`,
      children: [
        /* @__PURE__ */ b.jsx("div", { className: "viz-title", children: i.caption }),
        /* @__PURE__ */ b.jsx("div", { className: "viz-subtitle", children: i.blurb }),
        w.length > 0 && /* @__PURE__ */ b.jsx("div", { className: "openings-segmented", role: "group", "aria-label": i.caption, children: w.map((K) => /* @__PURE__ */ b.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": K.id === u,
            className: K.id === u ? "active" : "",
            onClick: () => G(K.id),
            children: K.label
          },
          K.id
        )) }),
        i.panels ? /* @__PURE__ */ b.jsx("div", { className: "openings-panels", children: i.panels.map((K) => /* @__PURE__ */ b.jsxs("figure", { className: "openings-panel", children: [
          /* @__PURE__ */ b.jsx("figcaption", { className: "openings-panel-label", children: K.label }),
          /* @__PURE__ */ b.jsx(
            yl,
            {
              data: p,
              knobs: { ...o, ...K.knobs },
              crop: K.crop,
              dataset: h
            }
          ),
          /* @__PURE__ */ b.jsx("figcaption", { className: "openings-panel-note", children: K.note })
        ] }, K.id)) }) : k ? /* @__PURE__ */ b.jsxs("div", { className: "openings-with-inset", children: [
          /* @__PURE__ */ b.jsx(yl, { data: p, knobs: o, highlight: k, dataset: h }),
          /* @__PURE__ */ b.jsxs("figure", { className: "openings-inset", children: [
            /* @__PURE__ */ b.jsx(
              yl,
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
        ] }) : /* @__PURE__ */ b.jsx(yl, { data: p, knobs: o, dataset: h }),
        C && /* @__PURE__ */ b.jsx("div", { className: "openings-mode-note", children: C.note }),
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
                onChange: (K) => s({ ...o, maxPly: Number(K.target.value) })
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
                onChange: (K) => s({
                  ...o,
                  pruneFraction: Number(K.target.value) / 1e3
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
                onChange: (K) => s({ ...o, hole: Number(K.target.value) })
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
const R3 = new Set(Zf.map((r) => r.id));
function sf() {
  document.querySelectorAll("[data-openings-stage]").forEach((r) => {
    const i = r.dataset.openingsStage;
    if (!R3.has(i)) return;
    const o = /* @__PURE__ */ b.jsx(I3, { stageId: i });
    r.firstElementChild ? Sd.hydrateRoot(r, o) : Sd.createRoot(r).render(o);
  });
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", sf) : sf();
