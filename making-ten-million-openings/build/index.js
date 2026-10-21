var Bo = { exports: {} }, Qr = {}, Oo = { exports: {} }, ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lf;
function Mp() {
  if (lf) return ie;
  lf = 1;
  var r = Symbol.for("react.element"), l = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), h = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), S = Symbol.iterator;
  function k(_) {
    return _ === null || typeof _ != "object" ? null : (_ = S && _[S] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var M = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, I = Object.assign, $ = {};
  function B(_, P, b) {
    this.props = _, this.context = P, this.refs = $, this.updater = b || M;
  }
  B.prototype.isReactComponent = {}, B.prototype.setState = function(_, P) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, P, "setState");
  }, B.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function j() {
  }
  j.prototype = B.prototype;
  function K(_, P, b) {
    this.props = _, this.context = P, this.refs = $, this.updater = b || M;
  }
  var ee = K.prototype = new j();
  ee.constructor = K, I(ee, B.prototype), ee.isPureReactComponent = !0;
  var Z = Array.isArray, oe = Object.prototype.hasOwnProperty, re = { current: null }, ge = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _e(_, P, b) {
    var te, ne = {}, le = null, fe = null;
    if (P != null) for (te in P.ref !== void 0 && (fe = P.ref), P.key !== void 0 && (le = "" + P.key), P) oe.call(P, te) && !ge.hasOwnProperty(te) && (ne[te] = P[te]);
    var se = arguments.length - 2;
    if (se === 1) ne.children = b;
    else if (1 < se) {
      for (var he = Array(se), Ie = 0; Ie < se; Ie++) he[Ie] = arguments[Ie + 2];
      ne.children = he;
    }
    if (_ && _.defaultProps) for (te in se = _.defaultProps, se) ne[te] === void 0 && (ne[te] = se[te]);
    return { $$typeof: r, type: _, key: le, ref: fe, props: ne, _owner: re.current };
  }
  function ze(_, P) {
    return { $$typeof: r, type: _.type, key: P, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function Ee(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === r;
  }
  function Ne(_) {
    var P = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(b) {
      return P[b];
    });
  }
  var X = /\/+/g;
  function V(_, P) {
    return typeof _ == "object" && _ !== null && _.key != null ? Ne("" + _.key) : P.toString(36);
  }
  function Y(_, P, b, te, ne) {
    var le = typeof _;
    (le === "undefined" || le === "boolean") && (_ = null);
    var fe = !1;
    if (_ === null) fe = !0;
    else switch (le) {
      case "string":
      case "number":
        fe = !0;
        break;
      case "object":
        switch (_.$$typeof) {
          case r:
          case l:
            fe = !0;
        }
    }
    if (fe) return fe = _, ne = ne(fe), _ = te === "" ? "." + V(fe, 0) : te, Z(ne) ? (b = "", _ != null && (b = _.replace(X, "$&/") + "/"), Y(ne, P, b, "", function(Ie) {
      return Ie;
    })) : ne != null && (Ee(ne) && (ne = ze(ne, b + (!ne.key || fe && fe.key === ne.key ? "" : ("" + ne.key).replace(X, "$&/") + "/") + _)), P.push(ne)), 1;
    if (fe = 0, te = te === "" ? "." : te + ":", Z(_)) for (var se = 0; se < _.length; se++) {
      le = _[se];
      var he = te + V(le, se);
      fe += Y(le, P, b, he, ne);
    }
    else if (he = k(_), typeof he == "function") for (_ = he.call(_), se = 0; !(le = _.next()).done; ) le = le.value, he = te + V(le, se++), fe += Y(le, P, b, he, ne);
    else if (le === "object") throw P = String(_), Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.");
    return fe;
  }
  function ve(_, P, b) {
    if (_ == null) return _;
    var te = [], ne = 0;
    return Y(_, te, "", "", function(le) {
      return P.call(b, le, ne++);
    }), te;
  }
  function Ce(_) {
    if (_._status === -1) {
      var P = _._result;
      P = P(), P.then(function(b) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = b);
      }, function(b) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = b);
      }), _._status === -1 && (_._status = 0, _._result = P);
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var ue = { current: null }, L = { transition: null }, W = { ReactCurrentDispatcher: ue, ReactCurrentBatchConfig: L, ReactCurrentOwner: re };
  function A() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return ie.Children = { map: ve, forEach: function(_, P, b) {
    ve(_, function() {
      P.apply(this, arguments);
    }, b);
  }, count: function(_) {
    var P = 0;
    return ve(_, function() {
      P++;
    }), P;
  }, toArray: function(_) {
    return ve(_, function(P) {
      return P;
    }) || [];
  }, only: function(_) {
    if (!Ee(_)) throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, ie.Component = B, ie.Fragment = u, ie.Profiler = c, ie.PureComponent = K, ie.StrictMode = a, ie.Suspense = g, ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W, ie.act = A, ie.cloneElement = function(_, P, b) {
    if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var te = I({}, _.props), ne = _.key, le = _.ref, fe = _._owner;
    if (P != null) {
      if (P.ref !== void 0 && (le = P.ref, fe = re.current), P.key !== void 0 && (ne = "" + P.key), _.type && _.type.defaultProps) var se = _.type.defaultProps;
      for (he in P) oe.call(P, he) && !ge.hasOwnProperty(he) && (te[he] = P[he] === void 0 && se !== void 0 ? se[he] : P[he]);
    }
    var he = arguments.length - 2;
    if (he === 1) te.children = b;
    else if (1 < he) {
      se = Array(he);
      for (var Ie = 0; Ie < he; Ie++) se[Ie] = arguments[Ie + 2];
      te.children = se;
    }
    return { $$typeof: r, type: _.type, key: ne, ref: le, props: te, _owner: fe };
  }, ie.createContext = function(_) {
    return _ = { $$typeof: h, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: d, _context: _ }, _.Consumer = _;
  }, ie.createElement = _e, ie.createFactory = function(_) {
    var P = _e.bind(null, _);
    return P.type = _, P;
  }, ie.createRef = function() {
    return { current: null };
  }, ie.forwardRef = function(_) {
    return { $$typeof: p, render: _ };
  }, ie.isValidElement = Ee, ie.lazy = function(_) {
    return { $$typeof: y, _payload: { _status: -1, _result: _ }, _init: Ce };
  }, ie.memo = function(_, P) {
    return { $$typeof: m, type: _, compare: P === void 0 ? null : P };
  }, ie.startTransition = function(_) {
    var P = L.transition;
    L.transition = {};
    try {
      _();
    } finally {
      L.transition = P;
    }
  }, ie.unstable_act = A, ie.useCallback = function(_, P) {
    return ue.current.useCallback(_, P);
  }, ie.useContext = function(_) {
    return ue.current.useContext(_);
  }, ie.useDebugValue = function() {
  }, ie.useDeferredValue = function(_) {
    return ue.current.useDeferredValue(_);
  }, ie.useEffect = function(_, P) {
    return ue.current.useEffect(_, P);
  }, ie.useId = function() {
    return ue.current.useId();
  }, ie.useImperativeHandle = function(_, P, b) {
    return ue.current.useImperativeHandle(_, P, b);
  }, ie.useInsertionEffect = function(_, P) {
    return ue.current.useInsertionEffect(_, P);
  }, ie.useLayoutEffect = function(_, P) {
    return ue.current.useLayoutEffect(_, P);
  }, ie.useMemo = function(_, P) {
    return ue.current.useMemo(_, P);
  }, ie.useReducer = function(_, P, b) {
    return ue.current.useReducer(_, P, b);
  }, ie.useRef = function(_) {
    return ue.current.useRef(_);
  }, ie.useState = function(_) {
    return ue.current.useState(_);
  }, ie.useSyncExternalStore = function(_, P, b) {
    return ue.current.useSyncExternalStore(_, P, b);
  }, ie.useTransition = function() {
    return ue.current.useTransition();
  }, ie.version = "18.3.1", ie;
}
var uf;
function Jo() {
  return uf || (uf = 1, Oo.exports = Mp()), Oo.exports;
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
var of;
function Pp() {
  if (of) return Qr;
  of = 1;
  var r = Jo(), l = Symbol.for("react.element"), u = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(p, g, m) {
    var y, S = {}, k = null, M = null;
    m !== void 0 && (k = "" + m), g.key !== void 0 && (k = "" + g.key), g.ref !== void 0 && (M = g.ref);
    for (y in g) a.call(g, y) && !d.hasOwnProperty(y) && (S[y] = g[y]);
    if (p && p.defaultProps) for (y in g = p.defaultProps, g) S[y] === void 0 && (S[y] = g[y]);
    return { $$typeof: l, type: p, key: k, ref: M, props: S, _owner: c.current };
  }
  return Qr.Fragment = u, Qr.jsx = h, Qr.jsxs = h, Qr;
}
var sf;
function Tp() {
  return sf || (sf = 1, Bo.exports = Pp()), Bo.exports;
}
var pe = Tp(), dl = {}, Lo = { exports: {} }, Je = {}, Ao = { exports: {} }, $o = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var af;
function zp() {
  return af || (af = 1, (function(r) {
    function l(L, W) {
      var A = L.length;
      L.push(W);
      e: for (; 0 < A; ) {
        var _ = A - 1 >>> 1, P = L[_];
        if (0 < c(P, W)) L[_] = W, L[A] = P, A = _;
        else break e;
      }
    }
    function u(L) {
      return L.length === 0 ? null : L[0];
    }
    function a(L) {
      if (L.length === 0) return null;
      var W = L[0], A = L.pop();
      if (A !== W) {
        L[0] = A;
        e: for (var _ = 0, P = L.length, b = P >>> 1; _ < b; ) {
          var te = 2 * (_ + 1) - 1, ne = L[te], le = te + 1, fe = L[le];
          if (0 > c(ne, A)) le < P && 0 > c(fe, ne) ? (L[_] = fe, L[le] = A, _ = le) : (L[_] = ne, L[te] = A, _ = te);
          else if (le < P && 0 > c(fe, A)) L[_] = fe, L[le] = A, _ = le;
          else break e;
        }
      }
      return W;
    }
    function c(L, W) {
      var A = L.sortIndex - W.sortIndex;
      return A !== 0 ? A : L.id - W.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      r.unstable_now = function() {
        return d.now();
      };
    } else {
      var h = Date, p = h.now();
      r.unstable_now = function() {
        return h.now() - p;
      };
    }
    var g = [], m = [], y = 1, S = null, k = 3, M = !1, I = !1, $ = !1, B = typeof setTimeout == "function" ? setTimeout : null, j = typeof clearTimeout == "function" ? clearTimeout : null, K = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ee(L) {
      for (var W = u(m); W !== null; ) {
        if (W.callback === null) a(m);
        else if (W.startTime <= L) a(m), W.sortIndex = W.expirationTime, l(g, W);
        else break;
        W = u(m);
      }
    }
    function Z(L) {
      if ($ = !1, ee(L), !I) if (u(g) !== null) I = !0, Ce(oe);
      else {
        var W = u(m);
        W !== null && ue(Z, W.startTime - L);
      }
    }
    function oe(L, W) {
      I = !1, $ && ($ = !1, j(_e), _e = -1), M = !0;
      var A = k;
      try {
        for (ee(W), S = u(g); S !== null && (!(S.expirationTime > W) || L && !Ne()); ) {
          var _ = S.callback;
          if (typeof _ == "function") {
            S.callback = null, k = S.priorityLevel;
            var P = _(S.expirationTime <= W);
            W = r.unstable_now(), typeof P == "function" ? S.callback = P : S === u(g) && a(g), ee(W);
          } else a(g);
          S = u(g);
        }
        if (S !== null) var b = !0;
        else {
          var te = u(m);
          te !== null && ue(Z, te.startTime - W), b = !1;
        }
        return b;
      } finally {
        S = null, k = A, M = !1;
      }
    }
    var re = !1, ge = null, _e = -1, ze = 5, Ee = -1;
    function Ne() {
      return !(r.unstable_now() - Ee < ze);
    }
    function X() {
      if (ge !== null) {
        var L = r.unstable_now();
        Ee = L;
        var W = !0;
        try {
          W = ge(!0, L);
        } finally {
          W ? V() : (re = !1, ge = null);
        }
      } else re = !1;
    }
    var V;
    if (typeof K == "function") V = function() {
      K(X);
    };
    else if (typeof MessageChannel < "u") {
      var Y = new MessageChannel(), ve = Y.port2;
      Y.port1.onmessage = X, V = function() {
        ve.postMessage(null);
      };
    } else V = function() {
      B(X, 0);
    };
    function Ce(L) {
      ge = L, re || (re = !0, V());
    }
    function ue(L, W) {
      _e = B(function() {
        L(r.unstable_now());
      }, W);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(L) {
      L.callback = null;
    }, r.unstable_continueExecution = function() {
      I || M || (I = !0, Ce(oe));
    }, r.unstable_forceFrameRate = function(L) {
      0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ze = 0 < L ? Math.floor(1e3 / L) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return k;
    }, r.unstable_getFirstCallbackNode = function() {
      return u(g);
    }, r.unstable_next = function(L) {
      switch (k) {
        case 1:
        case 2:
        case 3:
          var W = 3;
          break;
        default:
          W = k;
      }
      var A = k;
      k = W;
      try {
        return L();
      } finally {
        k = A;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function(L, W) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var A = k;
      k = L;
      try {
        return W();
      } finally {
        k = A;
      }
    }, r.unstable_scheduleCallback = function(L, W, A) {
      var _ = r.unstable_now();
      switch (typeof A == "object" && A !== null ? (A = A.delay, A = typeof A == "number" && 0 < A ? _ + A : _) : A = _, L) {
        case 1:
          var P = -1;
          break;
        case 2:
          P = 250;
          break;
        case 5:
          P = 1073741823;
          break;
        case 4:
          P = 1e4;
          break;
        default:
          P = 5e3;
      }
      return P = A + P, L = { id: y++, callback: W, priorityLevel: L, startTime: A, expirationTime: P, sortIndex: -1 }, A > _ ? (L.sortIndex = A, l(m, L), u(g) === null && L === u(m) && ($ ? (j(_e), _e = -1) : $ = !0, ue(Z, A - _))) : (L.sortIndex = P, l(g, L), I || M || (I = !0, Ce(oe))), L;
    }, r.unstable_shouldYield = Ne, r.unstable_wrapCallback = function(L) {
      var W = k;
      return function() {
        var A = k;
        k = W;
        try {
          return L.apply(this, arguments);
        } finally {
          k = A;
        }
      };
    };
  })($o)), $o;
}
var cf;
function Rp() {
  return cf || (cf = 1, Ao.exports = zp()), Ao.exports;
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
var ff;
function Bp() {
  if (ff) return Je;
  ff = 1;
  var r = Jo(), l = Rp();
  function u(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var a = /* @__PURE__ */ new Set(), c = {};
  function d(e, n) {
    h(e, n), h(e + "Capture", n);
  }
  function h(e, n) {
    for (c[e] = n, e = 0; e < n.length; e++) a.add(n[e]);
  }
  var p = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), g = Object.prototype.hasOwnProperty, m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, y = {}, S = {};
  function k(e) {
    return g.call(S, e) ? !0 : g.call(y, e) ? !1 : m.test(e) ? S[e] = !0 : (y[e] = !0, !1);
  }
  function M(e, n, t, i) {
    if (t !== null && t.type === 0) return !1;
    switch (typeof n) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return i ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function I(e, n, t, i) {
    if (n === null || typeof n > "u" || M(e, n, t, i)) return !0;
    if (i) return !1;
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
  function $(e, n, t, i, o, s, f) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = i, this.attributeNamespace = o, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = s, this.removeEmptyString = f;
  }
  var B = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    B[e] = new $(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    B[n] = new $(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    B[e] = new $(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    B[e] = new $(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    B[e] = new $(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    B[e] = new $(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    B[e] = new $(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    B[e] = new $(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    B[e] = new $(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var j = /[\-:]([a-z])/g;
  function K(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      j,
      K
    );
    B[n] = new $(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(j, K);
    B[n] = new $(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(j, K);
    B[n] = new $(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    B[e] = new $(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), B.xlinkHref = new $("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    B[e] = new $(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function ee(e, n, t, i) {
    var o = B.hasOwnProperty(n) ? B[n] : null;
    (o !== null ? o.type !== 0 : i || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (I(n, t, o, i) && (t = null), i || o === null ? k(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : o.mustUseProperty ? e[o.propertyName] = t === null ? o.type === 3 ? !1 : "" : t : (n = o.attributeName, i = o.attributeNamespace, t === null ? e.removeAttribute(n) : (o = o.type, t = o === 3 || o === 4 && t === !0 ? "" : "" + t, i ? e.setAttributeNS(i, n, t) : e.setAttribute(n, t))));
  }
  var Z = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, oe = Symbol.for("react.element"), re = Symbol.for("react.portal"), ge = Symbol.for("react.fragment"), _e = Symbol.for("react.strict_mode"), ze = Symbol.for("react.profiler"), Ee = Symbol.for("react.provider"), Ne = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), V = Symbol.for("react.suspense"), Y = Symbol.for("react.suspense_list"), ve = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), ue = Symbol.for("react.offscreen"), L = Symbol.iterator;
  function W(e) {
    return e === null || typeof e != "object" ? null : (e = L && e[L] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var A = Object.assign, _;
  function P(e) {
    if (_ === void 0) try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      _ = n && n[1] || "";
    }
    return `
` + _ + e;
  }
  var b = !1;
  function te(e, n) {
    if (!e || b) return "";
    b = !0;
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
        } catch (C) {
          var i = C;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (C) {
          i = C;
        }
        e.call(n.prototype);
      }
      else {
        try {
          throw Error();
        } catch (C) {
          i = C;
        }
        e();
      }
    } catch (C) {
      if (C && i && typeof C.stack == "string") {
        for (var o = C.stack.split(`
`), s = i.stack.split(`
`), f = o.length - 1, v = s.length - 1; 1 <= f && 0 <= v && o[f] !== s[v]; ) v--;
        for (; 1 <= f && 0 <= v; f--, v--) if (o[f] !== s[v]) {
          if (f !== 1 || v !== 1)
            do
              if (f--, v--, 0 > v || o[f] !== s[v]) {
                var w = `
` + o[f].replace(" at new ", " at ");
                return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), w;
              }
            while (1 <= f && 0 <= v);
          break;
        }
      }
    } finally {
      b = !1, Error.prepareStackTrace = t;
    }
    return (e = e ? e.displayName || e.name : "") ? P(e) : "";
  }
  function ne(e) {
    switch (e.tag) {
      case 5:
        return P(e.type);
      case 16:
        return P("Lazy");
      case 13:
        return P("Suspense");
      case 19:
        return P("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = te(e.type, !1), e;
      case 11:
        return e = te(e.type.render, !1), e;
      case 1:
        return e = te(e.type, !0), e;
      default:
        return "";
    }
  }
  function le(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ge:
        return "Fragment";
      case re:
        return "Portal";
      case ze:
        return "Profiler";
      case _e:
        return "StrictMode";
      case V:
        return "Suspense";
      case Y:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Ne:
        return (e.displayName || "Context") + ".Consumer";
      case Ee:
        return (e._context.displayName || "Context") + ".Provider";
      case X:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ve:
        return n = e.displayName || null, n !== null ? n : le(e.type) || "Memo";
      case Ce:
        n = e._payload, e = e._init;
        try {
          return le(e(n));
        } catch {
        }
    }
    return null;
  }
  function fe(e) {
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
        return le(n);
      case 8:
        return n === _e ? "StrictMode" : "Mode";
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
  function se(e) {
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
  function he(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Ie(e) {
    var n = he(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), i = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
      var o = t.get, s = t.set;
      return Object.defineProperty(e, n, { configurable: !0, get: function() {
        return o.call(this);
      }, set: function(f) {
        i = "" + f, s.call(this, f);
      } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
        return i;
      }, setValue: function(f) {
        i = "" + f;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[n];
      } };
    }
  }
  function at(e) {
    e._valueTracker || (e._valueTracker = Ie(e));
  }
  function cs(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(), i = "";
    return e && (i = he(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== t ? (n.setValue(e), !0) : !1;
  }
  function ri(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Dl(e, n) {
    var t = n.checked;
    return A({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
  }
  function fs(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue, i = n.checked != null ? n.checked : n.defaultChecked;
    t = se(n.value != null ? n.value : t), e._wrapperState = { initialChecked: i, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
  }
  function ds(e, n) {
    n = n.checked, n != null && ee(e, "checked", n, !1);
  }
  function Il(e, n) {
    ds(e, n);
    var t = se(n.value), i = n.type;
    if (t != null) i === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value") ? Ul(e, n.type, t) : n.hasOwnProperty("defaultValue") && Ul(e, n.type, se(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
  }
  function hs(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var i = n.type;
      if (!(i !== "submit" && i !== "reset" || n.value !== void 0 && n.value !== null)) return;
      n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
    }
    t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
  }
  function Ul(e, n, t) {
    (n !== "number" || ri(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }
  var lr = Array.isArray;
  function Tt(e, n, t, i) {
    if (e = e.options, n) {
      n = {};
      for (var o = 0; o < t.length; o++) n["$" + t[o]] = !0;
      for (t = 0; t < e.length; t++) o = n.hasOwnProperty("$" + e[t].value), e[t].selected !== o && (e[t].selected = o), o && i && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + se(t), n = null, o = 0; o < e.length; o++) {
        if (e[o].value === t) {
          e[o].selected = !0, i && (e[o].defaultSelected = !0);
          return;
        }
        n !== null || e[o].disabled || (n = e[o]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function jl(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(u(91));
    return A({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function ps(e, n) {
    var t = n.value;
    if (t == null) {
      if (t = n.children, n = n.defaultValue, t != null) {
        if (n != null) throw Error(u(92));
        if (lr(t)) {
          if (1 < t.length) throw Error(u(93));
          t = t[0];
        }
        n = t;
      }
      n == null && (n = ""), t = n;
    }
    e._wrapperState = { initialValue: se(t) };
  }
  function ms(e, n) {
    var t = se(n.value), i = se(n.defaultValue);
    t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), i != null && (e.defaultValue = "" + i);
  }
  function gs(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
  }
  function vs(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Vl(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? vs(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var ii, ys = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, i, o) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(n, t, i, o);
      });
    } : e;
  })(function(e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
    else {
      for (ii = ii || document.createElement("div"), ii.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = ii.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
  function ur(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var or = {
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
  }, Rd = ["Webkit", "ms", "Moz", "O"];
  Object.keys(or).forEach(function(e) {
    Rd.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), or[n] = or[e];
    });
  });
  function ws(e, n, t) {
    return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || or.hasOwnProperty(e) && or[e] ? ("" + n).trim() : n + "px";
  }
  function xs(e, n) {
    e = e.style;
    for (var t in n) if (n.hasOwnProperty(t)) {
      var i = t.indexOf("--") === 0, o = ws(t, n[t], i);
      t === "float" && (t = "cssFloat"), i ? e.setProperty(t, o) : e[t] = o;
    }
  }
  var Bd = A({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Hl(e, n) {
    if (n) {
      if (Bd[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(u(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(u(60));
        if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(u(61));
      }
      if (n.style != null && typeof n.style != "object") throw Error(u(62));
    }
  }
  function Ql(e, n) {
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
  var Wl = null;
  function Xl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Yl = null, zt = null, Rt = null;
  function _s(e) {
    if (e = Tr(e)) {
      if (typeof Yl != "function") throw Error(u(280));
      var n = e.stateNode;
      n && (n = Mi(n), Yl(e.stateNode, e.type, n));
    }
  }
  function Ns(e) {
    zt ? Rt ? Rt.push(e) : Rt = [e] : zt = e;
  }
  function ks() {
    if (zt) {
      var e = zt, n = Rt;
      if (Rt = zt = null, _s(e), n) for (e = 0; e < n.length; e++) _s(n[e]);
    }
  }
  function Ss(e, n) {
    return e(n);
  }
  function Es() {
  }
  var Kl = !1;
  function Cs(e, n, t) {
    if (Kl) return e(n, t);
    Kl = !0;
    try {
      return Ss(e, n, t);
    } finally {
      Kl = !1, (zt !== null || Rt !== null) && (Es(), ks());
    }
  }
  function sr(e, n) {
    var t = e.stateNode;
    if (t === null) return null;
    var i = Mi(t);
    if (i === null) return null;
    t = i[n];
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
        (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (t && typeof t != "function") throw Error(u(231, n, typeof t));
    return t;
  }
  var Gl = !1;
  if (p) try {
    var ar = {};
    Object.defineProperty(ar, "passive", { get: function() {
      Gl = !0;
    } }), window.addEventListener("test", ar, ar), window.removeEventListener("test", ar, ar);
  } catch {
    Gl = !1;
  }
  function Od(e, n, t, i, o, s, f, v, w) {
    var C = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, C);
    } catch (z) {
      this.onError(z);
    }
  }
  var cr = !1, li = null, ui = !1, ql = null, Ld = { onError: function(e) {
    cr = !0, li = e;
  } };
  function Ad(e, n, t, i, o, s, f, v, w) {
    cr = !1, li = null, Od.apply(Ld, arguments);
  }
  function $d(e, n, t, i, o, s, f, v, w) {
    if (Ad.apply(this, arguments), cr) {
      if (cr) {
        var C = li;
        cr = !1, li = null;
      } else throw Error(u(198));
      ui || (ui = !0, ql = C);
    }
  }
  function ct(e) {
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
  function Ms(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function Ps(e) {
    if (ct(e) !== e) throw Error(u(188));
  }
  function Fd(e) {
    var n = e.alternate;
    if (!n) {
      if (n = ct(e), n === null) throw Error(u(188));
      return n !== e ? null : e;
    }
    for (var t = e, i = n; ; ) {
      var o = t.return;
      if (o === null) break;
      var s = o.alternate;
      if (s === null) {
        if (i = o.return, i !== null) {
          t = i;
          continue;
        }
        break;
      }
      if (o.child === s.child) {
        for (s = o.child; s; ) {
          if (s === t) return Ps(o), e;
          if (s === i) return Ps(o), n;
          s = s.sibling;
        }
        throw Error(u(188));
      }
      if (t.return !== i.return) t = o, i = s;
      else {
        for (var f = !1, v = o.child; v; ) {
          if (v === t) {
            f = !0, t = o, i = s;
            break;
          }
          if (v === i) {
            f = !0, i = o, t = s;
            break;
          }
          v = v.sibling;
        }
        if (!f) {
          for (v = s.child; v; ) {
            if (v === t) {
              f = !0, t = s, i = o;
              break;
            }
            if (v === i) {
              f = !0, i = s, t = o;
              break;
            }
            v = v.sibling;
          }
          if (!f) throw Error(u(189));
        }
      }
      if (t.alternate !== i) throw Error(u(190));
    }
    if (t.tag !== 3) throw Error(u(188));
    return t.stateNode.current === t ? e : n;
  }
  function Ts(e) {
    return e = Fd(e), e !== null ? zs(e) : null;
  }
  function zs(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var n = zs(e);
      if (n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var Rs = l.unstable_scheduleCallback, Bs = l.unstable_cancelCallback, Dd = l.unstable_shouldYield, Id = l.unstable_requestPaint, Pe = l.unstable_now, Ud = l.unstable_getCurrentPriorityLevel, Zl = l.unstable_ImmediatePriority, Os = l.unstable_UserBlockingPriority, oi = l.unstable_NormalPriority, jd = l.unstable_LowPriority, Ls = l.unstable_IdlePriority, si = null, kn = null;
  function Vd(e) {
    if (kn && typeof kn.onCommitFiberRoot == "function") try {
      kn.onCommitFiberRoot(si, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var dn = Math.clz32 ? Math.clz32 : Wd, Hd = Math.log, Qd = Math.LN2;
  function Wd(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Hd(e) / Qd | 0) | 0;
  }
  var ai = 64, ci = 4194304;
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
    var i = 0, o = e.suspendedLanes, s = e.pingedLanes, f = t & 268435455;
    if (f !== 0) {
      var v = f & ~o;
      v !== 0 ? i = fr(v) : (s &= f, s !== 0 && (i = fr(s)));
    } else f = t & ~o, f !== 0 ? i = fr(f) : s !== 0 && (i = fr(s));
    if (i === 0) return 0;
    if (n !== 0 && n !== i && (n & o) === 0 && (o = i & -i, s = n & -n, o >= s || o === 16 && (s & 4194240) !== 0)) return n;
    if ((i & 4) !== 0 && (i |= t & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= i; 0 < n; ) t = 31 - dn(n), o = 1 << t, i |= e[t], n &= ~o;
    return i;
  }
  function Xd(e, n) {
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
  function Yd(e, n) {
    for (var t = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
      var f = 31 - dn(s), v = 1 << f, w = o[f];
      w === -1 ? ((v & t) === 0 || (v & i) !== 0) && (o[f] = Xd(v, n)) : w <= n && (e.expiredLanes |= v), s &= ~v;
    }
  }
  function Jl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function As() {
    var e = ai;
    return ai <<= 1, (ai & 4194240) === 0 && (ai = 64), e;
  }
  function bl(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n;
  }
  function dr(e, n, t) {
    e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - dn(n), e[n] = t;
  }
  function Kd(e, n) {
    var t = e.pendingLanes & ~n;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var o = 31 - dn(t), s = 1 << o;
      n[o] = 0, i[o] = -1, e[o] = -1, t &= ~s;
    }
  }
  function eu(e, n) {
    var t = e.entangledLanes |= n;
    for (e = e.entanglements; t; ) {
      var i = 31 - dn(t), o = 1 << i;
      o & n | e[i] & n && (e[i] |= n), t &= ~o;
    }
  }
  var de = 0;
  function $s(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Fs, nu, Ds, Is, Us, tu = !1, di = [], Vn = null, Hn = null, Qn = null, hr = /* @__PURE__ */ new Map(), pr = /* @__PURE__ */ new Map(), Wn = [], Gd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function js(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Vn = null;
        break;
      case "dragenter":
      case "dragleave":
        Hn = null;
        break;
      case "mouseover":
      case "mouseout":
        Qn = null;
        break;
      case "pointerover":
      case "pointerout":
        hr.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        pr.delete(n.pointerId);
    }
  }
  function mr(e, n, t, i, o, s) {
    return e === null || e.nativeEvent !== s ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: i, nativeEvent: s, targetContainers: [o] }, n !== null && (n = Tr(n), n !== null && nu(n)), e) : (e.eventSystemFlags |= i, n = e.targetContainers, o !== null && n.indexOf(o) === -1 && n.push(o), e);
  }
  function qd(e, n, t, i, o) {
    switch (n) {
      case "focusin":
        return Vn = mr(Vn, e, n, t, i, o), !0;
      case "dragenter":
        return Hn = mr(Hn, e, n, t, i, o), !0;
      case "mouseover":
        return Qn = mr(Qn, e, n, t, i, o), !0;
      case "pointerover":
        var s = o.pointerId;
        return hr.set(s, mr(hr.get(s) || null, e, n, t, i, o)), !0;
      case "gotpointercapture":
        return s = o.pointerId, pr.set(s, mr(pr.get(s) || null, e, n, t, i, o)), !0;
    }
    return !1;
  }
  function Vs(e) {
    var n = ft(e.target);
    if (n !== null) {
      var t = ct(n);
      if (t !== null) {
        if (n = t.tag, n === 13) {
          if (n = Ms(t), n !== null) {
            e.blockedOn = n, Us(e.priority, function() {
              Ds(t);
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
      var t = iu(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var i = new t.constructor(t.type, t);
        Wl = i, t.target.dispatchEvent(i), Wl = null;
      } else return n = Tr(t), n !== null && nu(n), e.blockedOn = t, !1;
      n.shift();
    }
    return !0;
  }
  function Hs(e, n, t) {
    hi(e) && t.delete(n);
  }
  function Zd() {
    tu = !1, Vn !== null && hi(Vn) && (Vn = null), Hn !== null && hi(Hn) && (Hn = null), Qn !== null && hi(Qn) && (Qn = null), hr.forEach(Hs), pr.forEach(Hs);
  }
  function gr(e, n) {
    e.blockedOn === n && (e.blockedOn = null, tu || (tu = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, Zd)));
  }
  function vr(e) {
    function n(o) {
      return gr(o, e);
    }
    if (0 < di.length) {
      gr(di[0], e);
      for (var t = 1; t < di.length; t++) {
        var i = di[t];
        i.blockedOn === e && (i.blockedOn = null);
      }
    }
    for (Vn !== null && gr(Vn, e), Hn !== null && gr(Hn, e), Qn !== null && gr(Qn, e), hr.forEach(n), pr.forEach(n), t = 0; t < Wn.length; t++) i = Wn[t], i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < Wn.length && (t = Wn[0], t.blockedOn === null); ) Vs(t), t.blockedOn === null && Wn.shift();
  }
  var Bt = Z.ReactCurrentBatchConfig, pi = !0;
  function Jd(e, n, t, i) {
    var o = de, s = Bt.transition;
    Bt.transition = null;
    try {
      de = 1, ru(e, n, t, i);
    } finally {
      de = o, Bt.transition = s;
    }
  }
  function bd(e, n, t, i) {
    var o = de, s = Bt.transition;
    Bt.transition = null;
    try {
      de = 4, ru(e, n, t, i);
    } finally {
      de = o, Bt.transition = s;
    }
  }
  function ru(e, n, t, i) {
    if (pi) {
      var o = iu(e, n, t, i);
      if (o === null) _u(e, n, i, mi, t), js(e, i);
      else if (qd(o, e, n, t, i)) i.stopPropagation();
      else if (js(e, i), n & 4 && -1 < Gd.indexOf(e)) {
        for (; o !== null; ) {
          var s = Tr(o);
          if (s !== null && Fs(s), s = iu(e, n, t, i), s === null && _u(e, n, i, mi, t), s === o) break;
          o = s;
        }
        o !== null && i.stopPropagation();
      } else _u(e, n, i, null, t);
    }
  }
  var mi = null;
  function iu(e, n, t, i) {
    if (mi = null, e = Xl(i), e = ft(e), e !== null) if (n = ct(e), n === null) e = null;
    else if (t = n.tag, t === 13) {
      if (e = Ms(n), e !== null) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
    return mi = e, null;
  }
  function Qs(e) {
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
        switch (Ud()) {
          case Zl:
            return 1;
          case Os:
            return 4;
          case oi:
          case jd:
            return 16;
          case Ls:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Xn = null, lu = null, gi = null;
  function Ws() {
    if (gi) return gi;
    var e, n = lu, t = n.length, i, o = "value" in Xn ? Xn.value : Xn.textContent, s = o.length;
    for (e = 0; e < t && n[e] === o[e]; e++) ;
    var f = t - e;
    for (i = 1; i <= f && n[t - i] === o[s - i]; i++) ;
    return gi = o.slice(e, 1 < i ? 1 - i : void 0);
  }
  function vi(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function yi() {
    return !0;
  }
  function Xs() {
    return !1;
  }
  function nn(e) {
    function n(t, i, o, s, f) {
      this._reactName = t, this._targetInst = o, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
      for (var v in e) e.hasOwnProperty(v) && (t = e[v], this[v] = t ? t(s) : s[v]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? yi : Xs, this.isPropagationStopped = Xs, this;
    }
    return A(n.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var t = this.nativeEvent;
      t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = yi);
    }, stopPropagation: function() {
      var t = this.nativeEvent;
      t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = yi);
    }, persist: function() {
    }, isPersistent: yi }), n;
  }
  var Ot = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, uu = nn(Ot), yr = A({}, Ot, { view: 0, detail: 0 }), eh = nn(yr), ou, su, wr, wi = A({}, yr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: cu, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== wr && (wr && e.type === "mousemove" ? (ou = e.screenX - wr.screenX, su = e.screenY - wr.screenY) : su = ou = 0, wr = e), ou);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : su;
  } }), Ys = nn(wi), nh = A({}, wi, { dataTransfer: 0 }), th = nn(nh), rh = A({}, yr, { relatedTarget: 0 }), au = nn(rh), ih = A({}, Ot, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), lh = nn(ih), uh = A({}, Ot, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), oh = nn(uh), sh = A({}, Ot, { data: 0 }), Ks = nn(sh), ah = {
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
  }, ch = {
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
  }, fh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function dh(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = fh[e]) ? !!n[e] : !1;
  }
  function cu() {
    return dh;
  }
  var hh = A({}, yr, { key: function(e) {
    if (e.key) {
      var n = ah[e.key] || e.key;
      if (n !== "Unidentified") return n;
    }
    return e.type === "keypress" ? (e = vi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ch[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: cu, charCode: function(e) {
    return e.type === "keypress" ? vi(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? vi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), ph = nn(hh), mh = A({}, wi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Gs = nn(mh), gh = A({}, yr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: cu }), vh = nn(gh), yh = A({}, Ot, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), wh = nn(yh), xh = A({}, wi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), _h = nn(xh), Nh = [9, 13, 27, 32], fu = p && "CompositionEvent" in window, xr = null;
  p && "documentMode" in document && (xr = document.documentMode);
  var kh = p && "TextEvent" in window && !xr, qs = p && (!fu || xr && 8 < xr && 11 >= xr), Zs = " ", Js = !1;
  function bs(e, n) {
    switch (e) {
      case "keyup":
        return Nh.indexOf(n.keyCode) !== -1;
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
  function ea(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Lt = !1;
  function Sh(e, n) {
    switch (e) {
      case "compositionend":
        return ea(n);
      case "keypress":
        return n.which !== 32 ? null : (Js = !0, Zs);
      case "textInput":
        return e = n.data, e === Zs && Js ? null : e;
      default:
        return null;
    }
  }
  function Eh(e, n) {
    if (Lt) return e === "compositionend" || !fu && bs(e, n) ? (e = Ws(), gi = lu = Xn = null, Lt = !1, e) : null;
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
        return qs && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Ch = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function na(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Ch[e.type] : n === "textarea";
  }
  function ta(e, n, t, i) {
    Ns(i), n = Si(n, "onChange"), 0 < n.length && (t = new uu("onChange", "change", null, t, i), e.push({ event: t, listeners: n }));
  }
  var _r = null, Nr = null;
  function Mh(e) {
    xa(e, 0);
  }
  function xi(e) {
    var n = It(e);
    if (cs(n)) return e;
  }
  function Ph(e, n) {
    if (e === "change") return n;
  }
  var ra = !1;
  if (p) {
    var du;
    if (p) {
      var hu = "oninput" in document;
      if (!hu) {
        var ia = document.createElement("div");
        ia.setAttribute("oninput", "return;"), hu = typeof ia.oninput == "function";
      }
      du = hu;
    } else du = !1;
    ra = du && (!document.documentMode || 9 < document.documentMode);
  }
  function la() {
    _r && (_r.detachEvent("onpropertychange", ua), Nr = _r = null);
  }
  function ua(e) {
    if (e.propertyName === "value" && xi(Nr)) {
      var n = [];
      ta(n, Nr, e, Xl(e)), Cs(Mh, n);
    }
  }
  function Th(e, n, t) {
    e === "focusin" ? (la(), _r = n, Nr = t, _r.attachEvent("onpropertychange", ua)) : e === "focusout" && la();
  }
  function zh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return xi(Nr);
  }
  function Rh(e, n) {
    if (e === "click") return xi(n);
  }
  function Bh(e, n) {
    if (e === "input" || e === "change") return xi(n);
  }
  function Oh(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var hn = typeof Object.is == "function" ? Object.is : Oh;
  function kr(e, n) {
    if (hn(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
    var t = Object.keys(e), i = Object.keys(n);
    if (t.length !== i.length) return !1;
    for (i = 0; i < t.length; i++) {
      var o = t[i];
      if (!g.call(n, o) || !hn(e[o], n[o])) return !1;
    }
    return !0;
  }
  function oa(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function sa(e, n) {
    var t = oa(e);
    e = 0;
    for (var i; t; ) {
      if (t.nodeType === 3) {
        if (i = e + t.textContent.length, e <= n && i >= n) return { node: t, offset: n - e };
        e = i;
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
      t = oa(t);
    }
  }
  function aa(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? aa(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function ca() {
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
  function pu(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  function Lh(e) {
    var n = ca(), t = e.focusedElem, i = e.selectionRange;
    if (n !== t && t && t.ownerDocument && aa(t.ownerDocument.documentElement, t)) {
      if (i !== null && pu(t)) {
        if (n = i.start, e = i.end, e === void 0 && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
        else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var o = t.textContent.length, s = Math.min(i.start, o);
          i = i.end === void 0 ? s : Math.min(i.end, o), !e.extend && s > i && (o = i, i = s, s = o), o = sa(t, s);
          var f = sa(
            t,
            i
          );
          o && f && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== f.node || e.focusOffset !== f.offset) && (n = n.createRange(), n.setStart(o.node, o.offset), e.removeAllRanges(), s > i ? (e.addRange(n), e.extend(f.node, f.offset)) : (n.setEnd(f.node, f.offset), e.addRange(n)));
        }
      }
      for (n = [], e = t; e = e.parentNode; ) e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++) e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Ah = p && "documentMode" in document && 11 >= document.documentMode, At = null, mu = null, Sr = null, gu = !1;
  function fa(e, n, t) {
    var i = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    gu || At == null || At !== ri(i) || (i = At, "selectionStart" in i && pu(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = { anchorNode: i.anchorNode, anchorOffset: i.anchorOffset, focusNode: i.focusNode, focusOffset: i.focusOffset }), Sr && kr(Sr, i) || (Sr = i, i = Si(mu, "onSelect"), 0 < i.length && (n = new uu("onSelect", "select", null, n, t), e.push({ event: n, listeners: i }), n.target = At)));
  }
  function _i(e, n) {
    var t = {};
    return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
  }
  var $t = { animationend: _i("Animation", "AnimationEnd"), animationiteration: _i("Animation", "AnimationIteration"), animationstart: _i("Animation", "AnimationStart"), transitionend: _i("Transition", "TransitionEnd") }, vu = {}, da = {};
  p && (da = document.createElement("div").style, "AnimationEvent" in window || (delete $t.animationend.animation, delete $t.animationiteration.animation, delete $t.animationstart.animation), "TransitionEvent" in window || delete $t.transitionend.transition);
  function Ni(e) {
    if (vu[e]) return vu[e];
    if (!$t[e]) return e;
    var n = $t[e], t;
    for (t in n) if (n.hasOwnProperty(t) && t in da) return vu[e] = n[t];
    return e;
  }
  var ha = Ni("animationend"), pa = Ni("animationiteration"), ma = Ni("animationstart"), ga = Ni("transitionend"), va = /* @__PURE__ */ new Map(), ya = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Yn(e, n) {
    va.set(e, n), d(n, [e]);
  }
  for (var yu = 0; yu < ya.length; yu++) {
    var wu = ya[yu], $h = wu.toLowerCase(), Fh = wu[0].toUpperCase() + wu.slice(1);
    Yn($h, "on" + Fh);
  }
  Yn(ha, "onAnimationEnd"), Yn(pa, "onAnimationIteration"), Yn(ma, "onAnimationStart"), Yn("dblclick", "onDoubleClick"), Yn("focusin", "onFocus"), Yn("focusout", "onBlur"), Yn(ga, "onTransitionEnd"), h("onMouseEnter", ["mouseout", "mouseover"]), h("onMouseLeave", ["mouseout", "mouseover"]), h("onPointerEnter", ["pointerout", "pointerover"]), h("onPointerLeave", ["pointerout", "pointerover"]), d("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), d("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), d("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), d("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), d("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), d("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Er = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Dh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));
  function wa(e, n, t) {
    var i = e.type || "unknown-event";
    e.currentTarget = t, $d(i, n, void 0, e), e.currentTarget = null;
  }
  function xa(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var i = e[t], o = i.event;
      i = i.listeners;
      e: {
        var s = void 0;
        if (n) for (var f = i.length - 1; 0 <= f; f--) {
          var v = i[f], w = v.instance, C = v.currentTarget;
          if (v = v.listener, w !== s && o.isPropagationStopped()) break e;
          wa(o, v, C), s = w;
        }
        else for (f = 0; f < i.length; f++) {
          if (v = i[f], w = v.instance, C = v.currentTarget, v = v.listener, w !== s && o.isPropagationStopped()) break e;
          wa(o, v, C), s = w;
        }
      }
    }
    if (ui) throw e = ql, ui = !1, ql = null, e;
  }
  function ye(e, n) {
    var t = n[Mu];
    t === void 0 && (t = n[Mu] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    t.has(i) || (_a(n, e, 2, !1), t.add(i));
  }
  function xu(e, n, t) {
    var i = 0;
    n && (i |= 4), _a(t, e, i, n);
  }
  var ki = "_reactListening" + Math.random().toString(36).slice(2);
  function Cr(e) {
    if (!e[ki]) {
      e[ki] = !0, a.forEach(function(t) {
        t !== "selectionchange" && (Dh.has(t) || xu(t, !1, e), xu(t, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[ki] || (n[ki] = !0, xu("selectionchange", !1, n));
    }
  }
  function _a(e, n, t, i) {
    switch (Qs(n)) {
      case 1:
        var o = Jd;
        break;
      case 4:
        o = bd;
        break;
      default:
        o = ru;
    }
    t = o.bind(null, n, t, e), o = void 0, !Gl || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: o }) : e.addEventListener(n, t, !0) : o !== void 0 ? e.addEventListener(n, t, { passive: o }) : e.addEventListener(n, t, !1);
  }
  function _u(e, n, t, i, o) {
    var s = i;
    if ((n & 1) === 0 && (n & 2) === 0 && i !== null) e: for (; ; ) {
      if (i === null) return;
      var f = i.tag;
      if (f === 3 || f === 4) {
        var v = i.stateNode.containerInfo;
        if (v === o || v.nodeType === 8 && v.parentNode === o) break;
        if (f === 4) for (f = i.return; f !== null; ) {
          var w = f.tag;
          if ((w === 3 || w === 4) && (w = f.stateNode.containerInfo, w === o || w.nodeType === 8 && w.parentNode === o)) return;
          f = f.return;
        }
        for (; v !== null; ) {
          if (f = ft(v), f === null) return;
          if (w = f.tag, w === 5 || w === 6) {
            i = s = f;
            continue e;
          }
          v = v.parentNode;
        }
      }
      i = i.return;
    }
    Cs(function() {
      var C = s, z = Xl(t), R = [];
      e: {
        var T = va.get(e);
        if (T !== void 0) {
          var F = uu, U = e;
          switch (e) {
            case "keypress":
              if (vi(t) === 0) break e;
            case "keydown":
            case "keyup":
              F = ph;
              break;
            case "focusin":
              U = "focus", F = au;
              break;
            case "focusout":
              U = "blur", F = au;
              break;
            case "beforeblur":
            case "afterblur":
              F = au;
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
              F = Ys;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              F = th;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              F = vh;
              break;
            case ha:
            case pa:
            case ma:
              F = lh;
              break;
            case ga:
              F = wh;
              break;
            case "scroll":
              F = eh;
              break;
            case "wheel":
              F = _h;
              break;
            case "copy":
            case "cut":
            case "paste":
              F = oh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              F = Gs;
          }
          var H = (n & 4) !== 0, Te = !H && e === "scroll", N = H ? T !== null ? T + "Capture" : null : T;
          H = [];
          for (var x = C, E; x !== null; ) {
            E = x;
            var O = E.stateNode;
            if (E.tag === 5 && O !== null && (E = O, N !== null && (O = sr(x, N), O != null && H.push(Mr(x, O, E)))), Te) break;
            x = x.return;
          }
          0 < H.length && (T = new F(T, U, null, t, z), R.push({ event: T, listeners: H }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (T = e === "mouseover" || e === "pointerover", F = e === "mouseout" || e === "pointerout", T && t !== Wl && (U = t.relatedTarget || t.fromElement) && (ft(U) || U[Bn])) break e;
          if ((F || T) && (T = z.window === z ? z : (T = z.ownerDocument) ? T.defaultView || T.parentWindow : window, F ? (U = t.relatedTarget || t.toElement, F = C, U = U ? ft(U) : null, U !== null && (Te = ct(U), U !== Te || U.tag !== 5 && U.tag !== 6) && (U = null)) : (F = null, U = C), F !== U)) {
            if (H = Ys, O = "onMouseLeave", N = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (H = Gs, O = "onPointerLeave", N = "onPointerEnter", x = "pointer"), Te = F == null ? T : It(F), E = U == null ? T : It(U), T = new H(O, x + "leave", F, t, z), T.target = Te, T.relatedTarget = E, O = null, ft(z) === C && (H = new H(N, x + "enter", U, t, z), H.target = E, H.relatedTarget = Te, O = H), Te = O, F && U) n: {
              for (H = F, N = U, x = 0, E = H; E; E = Ft(E)) x++;
              for (E = 0, O = N; O; O = Ft(O)) E++;
              for (; 0 < x - E; ) H = Ft(H), x--;
              for (; 0 < E - x; ) N = Ft(N), E--;
              for (; x--; ) {
                if (H === N || N !== null && H === N.alternate) break n;
                H = Ft(H), N = Ft(N);
              }
              H = null;
            }
            else H = null;
            F !== null && Na(R, T, F, H, !1), U !== null && Te !== null && Na(R, Te, U, H, !0);
          }
        }
        e: {
          if (T = C ? It(C) : window, F = T.nodeName && T.nodeName.toLowerCase(), F === "select" || F === "input" && T.type === "file") var Q = Ph;
          else if (na(T)) if (ra) Q = Bh;
          else {
            Q = zh;
            var G = Th;
          }
          else (F = T.nodeName) && F.toLowerCase() === "input" && (T.type === "checkbox" || T.type === "radio") && (Q = Rh);
          if (Q && (Q = Q(e, C))) {
            ta(R, Q, t, z);
            break e;
          }
          G && G(e, T, C), e === "focusout" && (G = T._wrapperState) && G.controlled && T.type === "number" && Ul(T, "number", T.value);
        }
        switch (G = C ? It(C) : window, e) {
          case "focusin":
            (na(G) || G.contentEditable === "true") && (At = G, mu = C, Sr = null);
            break;
          case "focusout":
            Sr = mu = At = null;
            break;
          case "mousedown":
            gu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            gu = !1, fa(R, t, z);
            break;
          case "selectionchange":
            if (Ah) break;
          case "keydown":
          case "keyup":
            fa(R, t, z);
        }
        var q;
        if (fu) e: {
          switch (e) {
            case "compositionstart":
              var J = "onCompositionStart";
              break e;
            case "compositionend":
              J = "onCompositionEnd";
              break e;
            case "compositionupdate":
              J = "onCompositionUpdate";
              break e;
          }
          J = void 0;
        }
        else Lt ? bs(e, t) && (J = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (J = "onCompositionStart");
        J && (qs && t.locale !== "ko" && (Lt || J !== "onCompositionStart" ? J === "onCompositionEnd" && Lt && (q = Ws()) : (Xn = z, lu = "value" in Xn ? Xn.value : Xn.textContent, Lt = !0)), G = Si(C, J), 0 < G.length && (J = new Ks(J, e, null, t, z), R.push({ event: J, listeners: G }), q ? J.data = q : (q = ea(t), q !== null && (J.data = q)))), (q = kh ? Sh(e, t) : Eh(e, t)) && (C = Si(C, "onBeforeInput"), 0 < C.length && (z = new Ks("onBeforeInput", "beforeinput", null, t, z), R.push({ event: z, listeners: C }), z.data = q));
      }
      xa(R, n);
    });
  }
  function Mr(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function Si(e, n) {
    for (var t = n + "Capture", i = []; e !== null; ) {
      var o = e, s = o.stateNode;
      o.tag === 5 && s !== null && (o = s, s = sr(e, t), s != null && i.unshift(Mr(e, s, o)), s = sr(e, n), s != null && i.push(Mr(e, s, o))), e = e.return;
    }
    return i;
  }
  function Ft(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Na(e, n, t, i, o) {
    for (var s = n._reactName, f = []; t !== null && t !== i; ) {
      var v = t, w = v.alternate, C = v.stateNode;
      if (w !== null && w === i) break;
      v.tag === 5 && C !== null && (v = C, o ? (w = sr(t, s), w != null && f.unshift(Mr(t, w, v))) : o || (w = sr(t, s), w != null && f.push(Mr(t, w, v)))), t = t.return;
    }
    f.length !== 0 && e.push({ event: n, listeners: f });
  }
  var Ih = /\r\n?/g, Uh = /\u0000|\uFFFD/g;
  function ka(e) {
    return (typeof e == "string" ? e : "" + e).replace(Ih, `
`).replace(Uh, "");
  }
  function Ei(e, n, t) {
    if (n = ka(n), ka(e) !== n && t) throw Error(u(425));
  }
  function Ci() {
  }
  var Nu = null, ku = null;
  function Su(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Eu = typeof setTimeout == "function" ? setTimeout : void 0, jh = typeof clearTimeout == "function" ? clearTimeout : void 0, Sa = typeof Promise == "function" ? Promise : void 0, Vh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Sa < "u" ? function(e) {
    return Sa.resolve(null).then(e).catch(Hh);
  } : Eu;
  function Hh(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Cu(e, n) {
    var t = n, i = 0;
    do {
      var o = t.nextSibling;
      if (e.removeChild(t), o && o.nodeType === 8) if (t = o.data, t === "/$") {
        if (i === 0) {
          e.removeChild(o), vr(n);
          return;
        }
        i--;
      } else t !== "$" && t !== "$?" && t !== "$!" || i++;
      t = o;
    } while (t);
    vr(n);
  }
  function Kn(e) {
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
  function Ea(e) {
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
  var Dt = Math.random().toString(36).slice(2), Sn = "__reactFiber$" + Dt, Pr = "__reactProps$" + Dt, Bn = "__reactContainer$" + Dt, Mu = "__reactEvents$" + Dt, Qh = "__reactListeners$" + Dt, Wh = "__reactHandles$" + Dt;
  function ft(e) {
    var n = e[Sn];
    if (n) return n;
    for (var t = e.parentNode; t; ) {
      if (n = t[Bn] || t[Sn]) {
        if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for (e = Ea(e); e !== null; ) {
          if (t = e[Sn]) return t;
          e = Ea(e);
        }
        return n;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function Tr(e) {
    return e = e[Sn] || e[Bn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function It(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(u(33));
  }
  function Mi(e) {
    return e[Pr] || null;
  }
  var Pu = [], Ut = -1;
  function Gn(e) {
    return { current: e };
  }
  function we(e) {
    0 > Ut || (e.current = Pu[Ut], Pu[Ut] = null, Ut--);
  }
  function me(e, n) {
    Ut++, Pu[Ut] = e.current, e.current = n;
  }
  var qn = {}, Ue = Gn(qn), Ye = Gn(!1), dt = qn;
  function jt(e, n) {
    var t = e.type.contextTypes;
    if (!t) return qn;
    var i = e.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === n) return i.__reactInternalMemoizedMaskedChildContext;
    var o = {}, s;
    for (s in t) o[s] = n[s];
    return i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = o), o;
  }
  function Ke(e) {
    return e = e.childContextTypes, e != null;
  }
  function Pi() {
    we(Ye), we(Ue);
  }
  function Ca(e, n, t) {
    if (Ue.current !== qn) throw Error(u(168));
    me(Ue, n), me(Ye, t);
  }
  function Ma(e, n, t) {
    var i = e.stateNode;
    if (n = n.childContextTypes, typeof i.getChildContext != "function") return t;
    i = i.getChildContext();
    for (var o in i) if (!(o in n)) throw Error(u(108, fe(e) || "Unknown", o));
    return A({}, t, i);
  }
  function Ti(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || qn, dt = Ue.current, me(Ue, e), me(Ye, Ye.current), !0;
  }
  function Pa(e, n, t) {
    var i = e.stateNode;
    if (!i) throw Error(u(169));
    t ? (e = Ma(e, n, dt), i.__reactInternalMemoizedMergedChildContext = e, we(Ye), we(Ue), me(Ue, e)) : we(Ye), me(Ye, t);
  }
  var On = null, zi = !1, Tu = !1;
  function Ta(e) {
    On === null ? On = [e] : On.push(e);
  }
  function Xh(e) {
    zi = !0, Ta(e);
  }
  function Zn() {
    if (!Tu && On !== null) {
      Tu = !0;
      var e = 0, n = de;
      try {
        var t = On;
        for (de = 1; e < t.length; e++) {
          var i = t[e];
          do
            i = i(!0);
          while (i !== null);
        }
        On = null, zi = !1;
      } catch (o) {
        throw On !== null && (On = On.slice(e + 1)), Rs(Zl, Zn), o;
      } finally {
        de = n, Tu = !1;
      }
    }
    return null;
  }
  var Vt = [], Ht = 0, Ri = null, Bi = 0, un = [], on = 0, ht = null, Ln = 1, An = "";
  function pt(e, n) {
    Vt[Ht++] = Bi, Vt[Ht++] = Ri, Ri = e, Bi = n;
  }
  function za(e, n, t) {
    un[on++] = Ln, un[on++] = An, un[on++] = ht, ht = e;
    var i = Ln;
    e = An;
    var o = 32 - dn(i) - 1;
    i &= ~(1 << o), t += 1;
    var s = 32 - dn(n) + o;
    if (30 < s) {
      var f = o - o % 5;
      s = (i & (1 << f) - 1).toString(32), i >>= f, o -= f, Ln = 1 << 32 - dn(n) + o | t << o | i, An = s + e;
    } else Ln = 1 << s | t << o | i, An = e;
  }
  function zu(e) {
    e.return !== null && (pt(e, 1), za(e, 1, 0));
  }
  function Ru(e) {
    for (; e === Ri; ) Ri = Vt[--Ht], Vt[Ht] = null, Bi = Vt[--Ht], Vt[Ht] = null;
    for (; e === ht; ) ht = un[--on], un[on] = null, An = un[--on], un[on] = null, Ln = un[--on], un[on] = null;
  }
  var tn = null, rn = null, xe = !1, pn = null;
  function Ra(e, n) {
    var t = fn(5, null, null, 0);
    t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
  }
  function Ba(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, tn = e, rn = Kn(n.firstChild), !0) : !1;
      case 6:
        return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, tn = e, rn = null, !0) : !1;
      case 13:
        return n = n.nodeType !== 8 ? null : n, n !== null ? (t = ht !== null ? { id: Ln, overflow: An } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = fn(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, tn = e, rn = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Bu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ou(e) {
    if (xe) {
      var n = rn;
      if (n) {
        var t = n;
        if (!Ba(e, n)) {
          if (Bu(e)) throw Error(u(418));
          n = Kn(t.nextSibling);
          var i = tn;
          n && Ba(e, n) ? Ra(i, t) : (e.flags = e.flags & -4097 | 2, xe = !1, tn = e);
        }
      } else {
        if (Bu(e)) throw Error(u(418));
        e.flags = e.flags & -4097 | 2, xe = !1, tn = e;
      }
    }
  }
  function Oa(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    tn = e;
  }
  function Oi(e) {
    if (e !== tn) return !1;
    if (!xe) return Oa(e), xe = !0, !1;
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !Su(e.type, e.memoizedProps)), n && (n = rn)) {
      if (Bu(e)) throw La(), Error(u(418));
      for (; n; ) Ra(e, n), n = Kn(n.nextSibling);
    }
    if (Oa(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n === 0) {
                rn = Kn(e.nextSibling);
                break e;
              }
              n--;
            } else t !== "$" && t !== "$!" && t !== "$?" || n++;
          }
          e = e.nextSibling;
        }
        rn = null;
      }
    } else rn = tn ? Kn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function La() {
    for (var e = rn; e; ) e = Kn(e.nextSibling);
  }
  function Qt() {
    rn = tn = null, xe = !1;
  }
  function Lu(e) {
    pn === null ? pn = [e] : pn.push(e);
  }
  var Yh = Z.ReactCurrentBatchConfig;
  function zr(e, n, t) {
    if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (t._owner) {
        if (t = t._owner, t) {
          if (t.tag !== 1) throw Error(u(309));
          var i = t.stateNode;
        }
        if (!i) throw Error(u(147, e));
        var o = i, s = "" + e;
        return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === s ? n.ref : (n = function(f) {
          var v = o.refs;
          f === null ? delete v[s] : v[s] = f;
        }, n._stringRef = s, n);
      }
      if (typeof e != "string") throw Error(u(284));
      if (!t._owner) throw Error(u(290, e));
    }
    return e;
  }
  function Li(e, n) {
    throw e = Object.prototype.toString.call(n), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  function Aa(e) {
    var n = e._init;
    return n(e._payload);
  }
  function $a(e) {
    function n(N, x) {
      if (e) {
        var E = N.deletions;
        E === null ? (N.deletions = [x], N.flags |= 16) : E.push(x);
      }
    }
    function t(N, x) {
      if (!e) return null;
      for (; x !== null; ) n(N, x), x = x.sibling;
      return null;
    }
    function i(N, x) {
      for (N = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? N.set(x.key, x) : N.set(x.index, x), x = x.sibling;
      return N;
    }
    function o(N, x) {
      return N = lt(N, x), N.index = 0, N.sibling = null, N;
    }
    function s(N, x, E) {
      return N.index = E, e ? (E = N.alternate, E !== null ? (E = E.index, E < x ? (N.flags |= 2, x) : E) : (N.flags |= 2, x)) : (N.flags |= 1048576, x);
    }
    function f(N) {
      return e && N.alternate === null && (N.flags |= 2), N;
    }
    function v(N, x, E, O) {
      return x === null || x.tag !== 6 ? (x = Co(E, N.mode, O), x.return = N, x) : (x = o(x, E), x.return = N, x);
    }
    function w(N, x, E, O) {
      var Q = E.type;
      return Q === ge ? z(N, x, E.props.children, O, E.key) : x !== null && (x.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === Ce && Aa(Q) === x.type) ? (O = o(x, E.props), O.ref = zr(N, x, E), O.return = N, O) : (O = il(E.type, E.key, E.props, null, N.mode, O), O.ref = zr(N, x, E), O.return = N, O);
    }
    function C(N, x, E, O) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== E.containerInfo || x.stateNode.implementation !== E.implementation ? (x = Mo(E, N.mode, O), x.return = N, x) : (x = o(x, E.children || []), x.return = N, x);
    }
    function z(N, x, E, O, Q) {
      return x === null || x.tag !== 7 ? (x = Nt(E, N.mode, O, Q), x.return = N, x) : (x = o(x, E), x.return = N, x);
    }
    function R(N, x, E) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = Co("" + x, N.mode, E), x.return = N, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case oe:
            return E = il(x.type, x.key, x.props, null, N.mode, E), E.ref = zr(N, null, x), E.return = N, E;
          case re:
            return x = Mo(x, N.mode, E), x.return = N, x;
          case Ce:
            var O = x._init;
            return R(N, O(x._payload), E);
        }
        if (lr(x) || W(x)) return x = Nt(x, N.mode, E, null), x.return = N, x;
        Li(N, x);
      }
      return null;
    }
    function T(N, x, E, O) {
      var Q = x !== null ? x.key : null;
      if (typeof E == "string" && E !== "" || typeof E == "number") return Q !== null ? null : v(N, x, "" + E, O);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case oe:
            return E.key === Q ? w(N, x, E, O) : null;
          case re:
            return E.key === Q ? C(N, x, E, O) : null;
          case Ce:
            return Q = E._init, T(
              N,
              x,
              Q(E._payload),
              O
            );
        }
        if (lr(E) || W(E)) return Q !== null ? null : z(N, x, E, O, null);
        Li(N, E);
      }
      return null;
    }
    function F(N, x, E, O, Q) {
      if (typeof O == "string" && O !== "" || typeof O == "number") return N = N.get(E) || null, v(x, N, "" + O, Q);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case oe:
            return N = N.get(O.key === null ? E : O.key) || null, w(x, N, O, Q);
          case re:
            return N = N.get(O.key === null ? E : O.key) || null, C(x, N, O, Q);
          case Ce:
            var G = O._init;
            return F(N, x, E, G(O._payload), Q);
        }
        if (lr(O) || W(O)) return N = N.get(E) || null, z(x, N, O, Q, null);
        Li(x, O);
      }
      return null;
    }
    function U(N, x, E, O) {
      for (var Q = null, G = null, q = x, J = x = 0, $e = null; q !== null && J < E.length; J++) {
        q.index > J ? ($e = q, q = null) : $e = q.sibling;
        var ce = T(N, q, E[J], O);
        if (ce === null) {
          q === null && (q = $e);
          break;
        }
        e && q && ce.alternate === null && n(N, q), x = s(ce, x, J), G === null ? Q = ce : G.sibling = ce, G = ce, q = $e;
      }
      if (J === E.length) return t(N, q), xe && pt(N, J), Q;
      if (q === null) {
        for (; J < E.length; J++) q = R(N, E[J], O), q !== null && (x = s(q, x, J), G === null ? Q = q : G.sibling = q, G = q);
        return xe && pt(N, J), Q;
      }
      for (q = i(N, q); J < E.length; J++) $e = F(q, N, J, E[J], O), $e !== null && (e && $e.alternate !== null && q.delete($e.key === null ? J : $e.key), x = s($e, x, J), G === null ? Q = $e : G.sibling = $e, G = $e);
      return e && q.forEach(function(ut) {
        return n(N, ut);
      }), xe && pt(N, J), Q;
    }
    function H(N, x, E, O) {
      var Q = W(E);
      if (typeof Q != "function") throw Error(u(150));
      if (E = Q.call(E), E == null) throw Error(u(151));
      for (var G = Q = null, q = x, J = x = 0, $e = null, ce = E.next(); q !== null && !ce.done; J++, ce = E.next()) {
        q.index > J ? ($e = q, q = null) : $e = q.sibling;
        var ut = T(N, q, ce.value, O);
        if (ut === null) {
          q === null && (q = $e);
          break;
        }
        e && q && ut.alternate === null && n(N, q), x = s(ut, x, J), G === null ? Q = ut : G.sibling = ut, G = ut, q = $e;
      }
      if (ce.done) return t(
        N,
        q
      ), xe && pt(N, J), Q;
      if (q === null) {
        for (; !ce.done; J++, ce = E.next()) ce = R(N, ce.value, O), ce !== null && (x = s(ce, x, J), G === null ? Q = ce : G.sibling = ce, G = ce);
        return xe && pt(N, J), Q;
      }
      for (q = i(N, q); !ce.done; J++, ce = E.next()) ce = F(q, N, J, ce.value, O), ce !== null && (e && ce.alternate !== null && q.delete(ce.key === null ? J : ce.key), x = s(ce, x, J), G === null ? Q = ce : G.sibling = ce, G = ce);
      return e && q.forEach(function(Cp) {
        return n(N, Cp);
      }), xe && pt(N, J), Q;
    }
    function Te(N, x, E, O) {
      if (typeof E == "object" && E !== null && E.type === ge && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case oe:
            e: {
              for (var Q = E.key, G = x; G !== null; ) {
                if (G.key === Q) {
                  if (Q = E.type, Q === ge) {
                    if (G.tag === 7) {
                      t(N, G.sibling), x = o(G, E.props.children), x.return = N, N = x;
                      break e;
                    }
                  } else if (G.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === Ce && Aa(Q) === G.type) {
                    t(N, G.sibling), x = o(G, E.props), x.ref = zr(N, G, E), x.return = N, N = x;
                    break e;
                  }
                  t(N, G);
                  break;
                } else n(N, G);
                G = G.sibling;
              }
              E.type === ge ? (x = Nt(E.props.children, N.mode, O, E.key), x.return = N, N = x) : (O = il(E.type, E.key, E.props, null, N.mode, O), O.ref = zr(N, x, E), O.return = N, N = O);
            }
            return f(N);
          case re:
            e: {
              for (G = E.key; x !== null; ) {
                if (x.key === G) if (x.tag === 4 && x.stateNode.containerInfo === E.containerInfo && x.stateNode.implementation === E.implementation) {
                  t(N, x.sibling), x = o(x, E.children || []), x.return = N, N = x;
                  break e;
                } else {
                  t(N, x);
                  break;
                }
                else n(N, x);
                x = x.sibling;
              }
              x = Mo(E, N.mode, O), x.return = N, N = x;
            }
            return f(N);
          case Ce:
            return G = E._init, Te(N, x, G(E._payload), O);
        }
        if (lr(E)) return U(N, x, E, O);
        if (W(E)) return H(N, x, E, O);
        Li(N, E);
      }
      return typeof E == "string" && E !== "" || typeof E == "number" ? (E = "" + E, x !== null && x.tag === 6 ? (t(N, x.sibling), x = o(x, E), x.return = N, N = x) : (t(N, x), x = Co(E, N.mode, O), x.return = N, N = x), f(N)) : t(N, x);
    }
    return Te;
  }
  var Wt = $a(!0), Fa = $a(!1), Ai = Gn(null), $i = null, Xt = null, Au = null;
  function $u() {
    Au = Xt = $i = null;
  }
  function Fu(e) {
    var n = Ai.current;
    we(Ai), e._currentValue = n;
  }
  function Du(e, n, t) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, i !== null && (i.childLanes |= n)) : i !== null && (i.childLanes & n) !== n && (i.childLanes |= n), e === t) break;
      e = e.return;
    }
  }
  function Yt(e, n) {
    $i = e, Au = Xt = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & n) !== 0 && (Ge = !0), e.firstContext = null);
  }
  function sn(e) {
    var n = e._currentValue;
    if (Au !== e) if (e = { context: e, memoizedValue: n, next: null }, Xt === null) {
      if ($i === null) throw Error(u(308));
      Xt = e, $i.dependencies = { lanes: 0, firstContext: e };
    } else Xt = Xt.next = e;
    return n;
  }
  var mt = null;
  function Iu(e) {
    mt === null ? mt = [e] : mt.push(e);
  }
  function Da(e, n, t, i) {
    var o = n.interleaved;
    return o === null ? (t.next = t, Iu(n)) : (t.next = o.next, o.next = t), n.interleaved = t, $n(e, i);
  }
  function $n(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; ) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Jn = !1;
  function Uu(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Ia(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Fn(e, n) {
    return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function bn(e, n, t) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (ae & 2) !== 0) {
      var o = i.pending;
      return o === null ? n.next = n : (n.next = o.next, o.next = n), i.pending = n, $n(e, t);
    }
    return o = i.interleaved, o === null ? (n.next = n, Iu(i)) : (n.next = o.next, o.next = n), i.interleaved = n, $n(e, t);
  }
  function Fi(e, n, t) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
      var i = n.lanes;
      i &= e.pendingLanes, t |= i, n.lanes = t, eu(e, t);
    }
  }
  function Ua(e, n) {
    var t = e.updateQueue, i = e.alternate;
    if (i !== null && (i = i.updateQueue, t === i)) {
      var o = null, s = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var f = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
          s === null ? o = s = f : s = s.next = f, t = t.next;
        } while (t !== null);
        s === null ? o = s = n : s = s.next = n;
      } else o = s = n;
      t = { baseState: i.baseState, firstBaseUpdate: o, lastBaseUpdate: s, shared: i.shared, effects: i.effects }, e.updateQueue = t;
      return;
    }
    e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
  }
  function Di(e, n, t, i) {
    var o = e.updateQueue;
    Jn = !1;
    var s = o.firstBaseUpdate, f = o.lastBaseUpdate, v = o.shared.pending;
    if (v !== null) {
      o.shared.pending = null;
      var w = v, C = w.next;
      w.next = null, f === null ? s = C : f.next = C, f = w;
      var z = e.alternate;
      z !== null && (z = z.updateQueue, v = z.lastBaseUpdate, v !== f && (v === null ? z.firstBaseUpdate = C : v.next = C, z.lastBaseUpdate = w));
    }
    if (s !== null) {
      var R = o.baseState;
      f = 0, z = C = w = null, v = s;
      do {
        var T = v.lane, F = v.eventTime;
        if ((i & T) === T) {
          z !== null && (z = z.next = {
            eventTime: F,
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          });
          e: {
            var U = e, H = v;
            switch (T = n, F = t, H.tag) {
              case 1:
                if (U = H.payload, typeof U == "function") {
                  R = U.call(F, R, T);
                  break e;
                }
                R = U;
                break e;
              case 3:
                U.flags = U.flags & -65537 | 128;
              case 0:
                if (U = H.payload, T = typeof U == "function" ? U.call(F, R, T) : U, T == null) break e;
                R = A({}, R, T);
                break e;
              case 2:
                Jn = !0;
            }
          }
          v.callback !== null && v.lane !== 0 && (e.flags |= 64, T = o.effects, T === null ? o.effects = [v] : T.push(v));
        } else F = { eventTime: F, lane: T, tag: v.tag, payload: v.payload, callback: v.callback, next: null }, z === null ? (C = z = F, w = R) : z = z.next = F, f |= T;
        if (v = v.next, v === null) {
          if (v = o.shared.pending, v === null) break;
          T = v, v = T.next, T.next = null, o.lastBaseUpdate = T, o.shared.pending = null;
        }
      } while (!0);
      if (z === null && (w = R), o.baseState = w, o.firstBaseUpdate = C, o.lastBaseUpdate = z, n = o.shared.interleaved, n !== null) {
        o = n;
        do
          f |= o.lane, o = o.next;
        while (o !== n);
      } else s === null && (o.shared.lanes = 0);
      yt |= f, e.lanes = f, e.memoizedState = R;
    }
  }
  function ja(e, n, t) {
    if (e = n.effects, n.effects = null, e !== null) for (n = 0; n < e.length; n++) {
      var i = e[n], o = i.callback;
      if (o !== null) {
        if (i.callback = null, i = t, typeof o != "function") throw Error(u(191, o));
        o.call(i);
      }
    }
  }
  var Rr = {}, En = Gn(Rr), Br = Gn(Rr), Or = Gn(Rr);
  function gt(e) {
    if (e === Rr) throw Error(u(174));
    return e;
  }
  function ju(e, n) {
    switch (me(Or, n), me(Br, e), me(En, Rr), e = n.nodeType, e) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Vl(null, "");
        break;
      default:
        e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = Vl(n, e);
    }
    we(En), me(En, n);
  }
  function Kt() {
    we(En), we(Br), we(Or);
  }
  function Va(e) {
    gt(Or.current);
    var n = gt(En.current), t = Vl(n, e.type);
    n !== t && (me(Br, e), me(En, t));
  }
  function Vu(e) {
    Br.current === e && (we(En), we(Br));
  }
  var ke = Gn(0);
  function Ii(e) {
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
  var Hu = [];
  function Qu() {
    for (var e = 0; e < Hu.length; e++) Hu[e]._workInProgressVersionPrimary = null;
    Hu.length = 0;
  }
  var Ui = Z.ReactCurrentDispatcher, Wu = Z.ReactCurrentBatchConfig, vt = 0, Se = null, Be = null, Le = null, ji = !1, Lr = !1, Ar = 0, Kh = 0;
  function je() {
    throw Error(u(321));
  }
  function Xu(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++) if (!hn(e[t], n[t])) return !1;
    return !0;
  }
  function Yu(e, n, t, i, o, s) {
    if (vt = s, Se = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Ui.current = e === null || e.memoizedState === null ? Jh : bh, e = t(i, o), Lr) {
      s = 0;
      do {
        if (Lr = !1, Ar = 0, 25 <= s) throw Error(u(301));
        s += 1, Le = Be = null, n.updateQueue = null, Ui.current = ep, e = t(i, o);
      } while (Lr);
    }
    if (Ui.current = Qi, n = Be !== null && Be.next !== null, vt = 0, Le = Be = Se = null, ji = !1, n) throw Error(u(300));
    return e;
  }
  function Ku() {
    var e = Ar !== 0;
    return Ar = 0, e;
  }
  function Cn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Le === null ? Se.memoizedState = Le = e : Le = Le.next = e, Le;
  }
  function an() {
    if (Be === null) {
      var e = Se.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Be.next;
    var n = Le === null ? Se.memoizedState : Le.next;
    if (n !== null) Le = n, Be = e;
    else {
      if (e === null) throw Error(u(310));
      Be = e, e = { memoizedState: Be.memoizedState, baseState: Be.baseState, baseQueue: Be.baseQueue, queue: Be.queue, next: null }, Le === null ? Se.memoizedState = Le = e : Le = Le.next = e;
    }
    return Le;
  }
  function $r(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Gu(e) {
    var n = an(), t = n.queue;
    if (t === null) throw Error(u(311));
    t.lastRenderedReducer = e;
    var i = Be, o = i.baseQueue, s = t.pending;
    if (s !== null) {
      if (o !== null) {
        var f = o.next;
        o.next = s.next, s.next = f;
      }
      i.baseQueue = o = s, t.pending = null;
    }
    if (o !== null) {
      s = o.next, i = i.baseState;
      var v = f = null, w = null, C = s;
      do {
        var z = C.lane;
        if ((vt & z) === z) w !== null && (w = w.next = { lane: 0, action: C.action, hasEagerState: C.hasEagerState, eagerState: C.eagerState, next: null }), i = C.hasEagerState ? C.eagerState : e(i, C.action);
        else {
          var R = {
            lane: z,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null
          };
          w === null ? (v = w = R, f = i) : w = w.next = R, Se.lanes |= z, yt |= z;
        }
        C = C.next;
      } while (C !== null && C !== s);
      w === null ? f = i : w.next = v, hn(i, n.memoizedState) || (Ge = !0), n.memoizedState = i, n.baseState = f, n.baseQueue = w, t.lastRenderedState = i;
    }
    if (e = t.interleaved, e !== null) {
      o = e;
      do
        s = o.lane, Se.lanes |= s, yt |= s, o = o.next;
      while (o !== e);
    } else o === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function qu(e) {
    var n = an(), t = n.queue;
    if (t === null) throw Error(u(311));
    t.lastRenderedReducer = e;
    var i = t.dispatch, o = t.pending, s = n.memoizedState;
    if (o !== null) {
      t.pending = null;
      var f = o = o.next;
      do
        s = e(s, f.action), f = f.next;
      while (f !== o);
      hn(s, n.memoizedState) || (Ge = !0), n.memoizedState = s, n.baseQueue === null && (n.baseState = s), t.lastRenderedState = s;
    }
    return [s, i];
  }
  function Ha() {
  }
  function Qa(e, n) {
    var t = Se, i = an(), o = n(), s = !hn(i.memoizedState, o);
    if (s && (i.memoizedState = o, Ge = !0), i = i.queue, Zu(Ya.bind(null, t, i, e), [e]), i.getSnapshot !== n || s || Le !== null && Le.memoizedState.tag & 1) {
      if (t.flags |= 2048, Fr(9, Xa.bind(null, t, i, o, n), void 0, null), Ae === null) throw Error(u(349));
      (vt & 30) !== 0 || Wa(t, n, o);
    }
    return o;
  }
  function Wa(e, n, t) {
    e.flags |= 16384, e = { getSnapshot: n, value: t }, n = Se.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, Se.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
  }
  function Xa(e, n, t, i) {
    n.value = t, n.getSnapshot = i, Ka(n) && Ga(e);
  }
  function Ya(e, n, t) {
    return t(function() {
      Ka(n) && Ga(e);
    });
  }
  function Ka(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !hn(e, t);
    } catch {
      return !0;
    }
  }
  function Ga(e) {
    var n = $n(e, 1);
    n !== null && yn(n, e, 1, -1);
  }
  function qa(e) {
    var n = Cn();
    return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: $r, lastRenderedState: e }, n.queue = e, e = e.dispatch = Zh.bind(null, Se, e), [n.memoizedState, e];
  }
  function Fr(e, n, t, i) {
    return e = { tag: e, create: n, destroy: t, deps: i, next: null }, n = Se.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, Se.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (i = t.next, t.next = e, e.next = i, n.lastEffect = e)), e;
  }
  function Za() {
    return an().memoizedState;
  }
  function Vi(e, n, t, i) {
    var o = Cn();
    Se.flags |= e, o.memoizedState = Fr(1 | n, t, void 0, i === void 0 ? null : i);
  }
  function Hi(e, n, t, i) {
    var o = an();
    i = i === void 0 ? null : i;
    var s = void 0;
    if (Be !== null) {
      var f = Be.memoizedState;
      if (s = f.destroy, i !== null && Xu(i, f.deps)) {
        o.memoizedState = Fr(n, t, s, i);
        return;
      }
    }
    Se.flags |= e, o.memoizedState = Fr(1 | n, t, s, i);
  }
  function Ja(e, n) {
    return Vi(8390656, 8, e, n);
  }
  function Zu(e, n) {
    return Hi(2048, 8, e, n);
  }
  function ba(e, n) {
    return Hi(4, 2, e, n);
  }
  function ec(e, n) {
    return Hi(4, 4, e, n);
  }
  function nc(e, n) {
    if (typeof n == "function") return e = e(), n(e), function() {
      n(null);
    };
    if (n != null) return e = e(), n.current = e, function() {
      n.current = null;
    };
  }
  function tc(e, n, t) {
    return t = t != null ? t.concat([e]) : null, Hi(4, 4, nc.bind(null, n, e), t);
  }
  function Ju() {
  }
  function rc(e, n) {
    var t = an();
    n = n === void 0 ? null : n;
    var i = t.memoizedState;
    return i !== null && n !== null && Xu(n, i[1]) ? i[0] : (t.memoizedState = [e, n], e);
  }
  function ic(e, n) {
    var t = an();
    n = n === void 0 ? null : n;
    var i = t.memoizedState;
    return i !== null && n !== null && Xu(n, i[1]) ? i[0] : (e = e(), t.memoizedState = [e, n], e);
  }
  function lc(e, n, t) {
    return (vt & 21) === 0 ? (e.baseState && (e.baseState = !1, Ge = !0), e.memoizedState = t) : (hn(t, n) || (t = As(), Se.lanes |= t, yt |= t, e.baseState = !0), n);
  }
  function Gh(e, n) {
    var t = de;
    de = t !== 0 && 4 > t ? t : 4, e(!0);
    var i = Wu.transition;
    Wu.transition = {};
    try {
      e(!1), n();
    } finally {
      de = t, Wu.transition = i;
    }
  }
  function uc() {
    return an().memoizedState;
  }
  function qh(e, n, t) {
    var i = rt(e);
    if (t = { lane: i, action: t, hasEagerState: !1, eagerState: null, next: null }, oc(e)) sc(n, t);
    else if (t = Da(e, n, t, i), t !== null) {
      var o = Xe();
      yn(t, e, i, o), ac(t, n, i);
    }
  }
  function Zh(e, n, t) {
    var i = rt(e), o = { lane: i, action: t, hasEagerState: !1, eagerState: null, next: null };
    if (oc(e)) sc(n, o);
    else {
      var s = e.alternate;
      if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = n.lastRenderedReducer, s !== null)) try {
        var f = n.lastRenderedState, v = s(f, t);
        if (o.hasEagerState = !0, o.eagerState = v, hn(v, f)) {
          var w = n.interleaved;
          w === null ? (o.next = o, Iu(n)) : (o.next = w.next, w.next = o), n.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
      t = Da(e, n, o, i), t !== null && (o = Xe(), yn(t, e, i, o), ac(t, n, i));
    }
  }
  function oc(e) {
    var n = e.alternate;
    return e === Se || n !== null && n === Se;
  }
  function sc(e, n) {
    Lr = ji = !0;
    var t = e.pending;
    t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
  }
  function ac(e, n, t) {
    if ((t & 4194240) !== 0) {
      var i = n.lanes;
      i &= e.pendingLanes, t |= i, n.lanes = t, eu(e, t);
    }
  }
  var Qi = { readContext: sn, useCallback: je, useContext: je, useEffect: je, useImperativeHandle: je, useInsertionEffect: je, useLayoutEffect: je, useMemo: je, useReducer: je, useRef: je, useState: je, useDebugValue: je, useDeferredValue: je, useTransition: je, useMutableSource: je, useSyncExternalStore: je, useId: je, unstable_isNewReconciler: !1 }, Jh = { readContext: sn, useCallback: function(e, n) {
    return Cn().memoizedState = [e, n === void 0 ? null : n], e;
  }, useContext: sn, useEffect: Ja, useImperativeHandle: function(e, n, t) {
    return t = t != null ? t.concat([e]) : null, Vi(
      4194308,
      4,
      nc.bind(null, n, e),
      t
    );
  }, useLayoutEffect: function(e, n) {
    return Vi(4194308, 4, e, n);
  }, useInsertionEffect: function(e, n) {
    return Vi(4, 2, e, n);
  }, useMemo: function(e, n) {
    var t = Cn();
    return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
  }, useReducer: function(e, n, t) {
    var i = Cn();
    return n = t !== void 0 ? t(n) : n, i.memoizedState = i.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, i.queue = e, e = e.dispatch = qh.bind(null, Se, e), [i.memoizedState, e];
  }, useRef: function(e) {
    var n = Cn();
    return e = { current: e }, n.memoizedState = e;
  }, useState: qa, useDebugValue: Ju, useDeferredValue: function(e) {
    return Cn().memoizedState = e;
  }, useTransition: function() {
    var e = qa(!1), n = e[0];
    return e = Gh.bind(null, e[1]), Cn().memoizedState = e, [n, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, n, t) {
    var i = Se, o = Cn();
    if (xe) {
      if (t === void 0) throw Error(u(407));
      t = t();
    } else {
      if (t = n(), Ae === null) throw Error(u(349));
      (vt & 30) !== 0 || Wa(i, n, t);
    }
    o.memoizedState = t;
    var s = { value: t, getSnapshot: n };
    return o.queue = s, Ja(Ya.bind(
      null,
      i,
      s,
      e
    ), [e]), i.flags |= 2048, Fr(9, Xa.bind(null, i, s, t, n), void 0, null), t;
  }, useId: function() {
    var e = Cn(), n = Ae.identifierPrefix;
    if (xe) {
      var t = An, i = Ln;
      t = (i & ~(1 << 32 - dn(i) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = Ar++, 0 < t && (n += "H" + t.toString(32)), n += ":";
    } else t = Kh++, n = ":" + n + "r" + t.toString(32) + ":";
    return e.memoizedState = n;
  }, unstable_isNewReconciler: !1 }, bh = {
    readContext: sn,
    useCallback: rc,
    useContext: sn,
    useEffect: Zu,
    useImperativeHandle: tc,
    useInsertionEffect: ba,
    useLayoutEffect: ec,
    useMemo: ic,
    useReducer: Gu,
    useRef: Za,
    useState: function() {
      return Gu($r);
    },
    useDebugValue: Ju,
    useDeferredValue: function(e) {
      var n = an();
      return lc(n, Be.memoizedState, e);
    },
    useTransition: function() {
      var e = Gu($r)[0], n = an().memoizedState;
      return [e, n];
    },
    useMutableSource: Ha,
    useSyncExternalStore: Qa,
    useId: uc,
    unstable_isNewReconciler: !1
  }, ep = { readContext: sn, useCallback: rc, useContext: sn, useEffect: Zu, useImperativeHandle: tc, useInsertionEffect: ba, useLayoutEffect: ec, useMemo: ic, useReducer: qu, useRef: Za, useState: function() {
    return qu($r);
  }, useDebugValue: Ju, useDeferredValue: function(e) {
    var n = an();
    return Be === null ? n.memoizedState = e : lc(n, Be.memoizedState, e);
  }, useTransition: function() {
    var e = qu($r)[0], n = an().memoizedState;
    return [e, n];
  }, useMutableSource: Ha, useSyncExternalStore: Qa, useId: uc, unstable_isNewReconciler: !1 };
  function mn(e, n) {
    if (e && e.defaultProps) {
      n = A({}, n), e = e.defaultProps;
      for (var t in e) n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  function bu(e, n, t, i) {
    n = e.memoizedState, t = t(i, n), t = t == null ? n : A({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var Wi = { isMounted: function(e) {
    return (e = e._reactInternals) ? ct(e) === e : !1;
  }, enqueueSetState: function(e, n, t) {
    e = e._reactInternals;
    var i = Xe(), o = rt(e), s = Fn(i, o);
    s.payload = n, t != null && (s.callback = t), n = bn(e, s, o), n !== null && (yn(n, e, o, i), Fi(n, e, o));
  }, enqueueReplaceState: function(e, n, t) {
    e = e._reactInternals;
    var i = Xe(), o = rt(e), s = Fn(i, o);
    s.tag = 1, s.payload = n, t != null && (s.callback = t), n = bn(e, s, o), n !== null && (yn(n, e, o, i), Fi(n, e, o));
  }, enqueueForceUpdate: function(e, n) {
    e = e._reactInternals;
    var t = Xe(), i = rt(e), o = Fn(t, i);
    o.tag = 2, n != null && (o.callback = n), n = bn(e, o, i), n !== null && (yn(n, e, i, t), Fi(n, e, i));
  } };
  function cc(e, n, t, i, o, s, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, s, f) : n.prototype && n.prototype.isPureReactComponent ? !kr(t, i) || !kr(o, s) : !0;
  }
  function fc(e, n, t) {
    var i = !1, o = qn, s = n.contextType;
    return typeof s == "object" && s !== null ? s = sn(s) : (o = Ke(n) ? dt : Ue.current, i = n.contextTypes, s = (i = i != null) ? jt(e, o) : qn), n = new n(t, s), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Wi, e.stateNode = n, n._reactInternals = e, i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = s), n;
  }
  function dc(e, n, t, i) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, i), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, i), n.state !== e && Wi.enqueueReplaceState(n, n.state, null);
  }
  function eo(e, n, t, i) {
    var o = e.stateNode;
    o.props = t, o.state = e.memoizedState, o.refs = {}, Uu(e);
    var s = n.contextType;
    typeof s == "object" && s !== null ? o.context = sn(s) : (s = Ke(n) ? dt : Ue.current, o.context = jt(e, s)), o.state = e.memoizedState, s = n.getDerivedStateFromProps, typeof s == "function" && (bu(e, n, s, t), o.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (n = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), n !== o.state && Wi.enqueueReplaceState(o, o.state, null), Di(e, t, o, i), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Gt(e, n) {
    try {
      var t = "", i = n;
      do
        t += ne(i), i = i.return;
      while (i);
      var o = t;
    } catch (s) {
      o = `
Error generating stack: ` + s.message + `
` + s.stack;
    }
    return { value: e, source: n, stack: o, digest: null };
  }
  function no(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
  }
  function to(e, n) {
    try {
      console.error(n.value);
    } catch (t) {
      setTimeout(function() {
        throw t;
      });
    }
  }
  var np = typeof WeakMap == "function" ? WeakMap : Map;
  function hc(e, n, t) {
    t = Fn(-1, t), t.tag = 3, t.payload = { element: null };
    var i = n.value;
    return t.callback = function() {
      Ji || (Ji = !0, yo = i), to(e, n);
    }, t;
  }
  function pc(e, n, t) {
    t = Fn(-1, t), t.tag = 3;
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var o = n.value;
      t.payload = function() {
        return i(o);
      }, t.callback = function() {
        to(e, n);
      };
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (t.callback = function() {
      to(e, n), typeof i != "function" && (nt === null ? nt = /* @__PURE__ */ new Set([this]) : nt.add(this));
      var f = n.stack;
      this.componentDidCatch(n.value, { componentStack: f !== null ? f : "" });
    }), t;
  }
  function mc(e, n, t) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new np();
      var o = /* @__PURE__ */ new Set();
      i.set(n, o);
    } else o = i.get(n), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(n, o));
    o.has(t) || (o.add(t), e = mp.bind(null, e, n, t), n.then(e, e));
  }
  function gc(e) {
    do {
      var n;
      if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function vc(e, n, t, i, o) {
    return (e.mode & 1) === 0 ? (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = Fn(-1, 1), n.tag = 2, bn(t, n, 1))), t.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e);
  }
  var tp = Z.ReactCurrentOwner, Ge = !1;
  function We(e, n, t, i) {
    n.child = e === null ? Fa(n, null, t, i) : Wt(n, e.child, t, i);
  }
  function yc(e, n, t, i, o) {
    t = t.render;
    var s = n.ref;
    return Yt(n, o), i = Yu(e, n, t, i, s, o), t = Ku(), e !== null && !Ge ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~o, Dn(e, n, o)) : (xe && t && zu(n), n.flags |= 1, We(e, n, i, o), n.child);
  }
  function wc(e, n, t, i, o) {
    if (e === null) {
      var s = t.type;
      return typeof s == "function" && !Eo(s) && s.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = s, xc(e, n, s, i, o)) : (e = il(t.type, null, i, n, n.mode, o), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (s = e.child, (e.lanes & o) === 0) {
      var f = s.memoizedProps;
      if (t = t.compare, t = t !== null ? t : kr, t(f, i) && e.ref === n.ref) return Dn(e, n, o);
    }
    return n.flags |= 1, e = lt(s, i), e.ref = n.ref, e.return = n, n.child = e;
  }
  function xc(e, n, t, i, o) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (kr(s, i) && e.ref === n.ref) if (Ge = !1, n.pendingProps = i = s, (e.lanes & o) !== 0) (e.flags & 131072) !== 0 && (Ge = !0);
      else return n.lanes = e.lanes, Dn(e, n, o);
    }
    return ro(e, n, t, i, o);
  }
  function _c(e, n, t) {
    var i = n.pendingProps, o = i.children, s = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden") if ((n.mode & 1) === 0) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, me(Zt, ln), ln |= t;
    else {
      if ((t & 1073741824) === 0) return e = s !== null ? s.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, me(Zt, ln), ln |= e, null;
      n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, i = s !== null ? s.baseLanes : t, me(Zt, ln), ln |= i;
    }
    else s !== null ? (i = s.baseLanes | t, n.memoizedState = null) : i = t, me(Zt, ln), ln |= i;
    return We(e, n, o, t), n.child;
  }
  function Nc(e, n) {
    var t = n.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
  }
  function ro(e, n, t, i, o) {
    var s = Ke(t) ? dt : Ue.current;
    return s = jt(n, s), Yt(n, o), t = Yu(e, n, t, i, s, o), i = Ku(), e !== null && !Ge ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~o, Dn(e, n, o)) : (xe && i && zu(n), n.flags |= 1, We(e, n, t, o), n.child);
  }
  function kc(e, n, t, i, o) {
    if (Ke(t)) {
      var s = !0;
      Ti(n);
    } else s = !1;
    if (Yt(n, o), n.stateNode === null) Yi(e, n), fc(n, t, i), eo(n, t, i, o), i = !0;
    else if (e === null) {
      var f = n.stateNode, v = n.memoizedProps;
      f.props = v;
      var w = f.context, C = t.contextType;
      typeof C == "object" && C !== null ? C = sn(C) : (C = Ke(t) ? dt : Ue.current, C = jt(n, C));
      var z = t.getDerivedStateFromProps, R = typeof z == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      R || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (v !== i || w !== C) && dc(n, f, i, C), Jn = !1;
      var T = n.memoizedState;
      f.state = T, Di(n, i, f, o), w = n.memoizedState, v !== i || T !== w || Ye.current || Jn ? (typeof z == "function" && (bu(n, t, z, i), w = n.memoizedState), (v = Jn || cc(n, t, v, i, T, w, C)) ? (R || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = i, n.memoizedState = w), f.props = i, f.state = w, f.context = C, i = v) : (typeof f.componentDidMount == "function" && (n.flags |= 4194308), i = !1);
    } else {
      f = n.stateNode, Ia(e, n), v = n.memoizedProps, C = n.type === n.elementType ? v : mn(n.type, v), f.props = C, R = n.pendingProps, T = f.context, w = t.contextType, typeof w == "object" && w !== null ? w = sn(w) : (w = Ke(t) ? dt : Ue.current, w = jt(n, w));
      var F = t.getDerivedStateFromProps;
      (z = typeof F == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (v !== R || T !== w) && dc(n, f, i, w), Jn = !1, T = n.memoizedState, f.state = T, Di(n, i, f, o);
      var U = n.memoizedState;
      v !== R || T !== U || Ye.current || Jn ? (typeof F == "function" && (bu(n, t, F, i), U = n.memoizedState), (C = Jn || cc(n, t, C, i, T, U, w) || !1) ? (z || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, U, w), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(i, U, w)), typeof f.componentDidUpdate == "function" && (n.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || v === e.memoizedProps && T === e.memoizedState || (n.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && T === e.memoizedState || (n.flags |= 1024), n.memoizedProps = i, n.memoizedState = U), f.props = i, f.state = U, f.context = w, i = C) : (typeof f.componentDidUpdate != "function" || v === e.memoizedProps && T === e.memoizedState || (n.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && T === e.memoizedState || (n.flags |= 1024), i = !1);
    }
    return io(e, n, t, i, s, o);
  }
  function io(e, n, t, i, o, s) {
    Nc(e, n);
    var f = (n.flags & 128) !== 0;
    if (!i && !f) return o && Pa(n, t, !1), Dn(e, n, s);
    i = n.stateNode, tp.current = n;
    var v = f && typeof t.getDerivedStateFromError != "function" ? null : i.render();
    return n.flags |= 1, e !== null && f ? (n.child = Wt(n, e.child, null, s), n.child = Wt(n, null, v, s)) : We(e, n, v, s), n.memoizedState = i.state, o && Pa(n, t, !0), n.child;
  }
  function Sc(e) {
    var n = e.stateNode;
    n.pendingContext ? Ca(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Ca(e, n.context, !1), ju(e, n.containerInfo);
  }
  function Ec(e, n, t, i, o) {
    return Qt(), Lu(o), n.flags |= 256, We(e, n, t, i), n.child;
  }
  var lo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function uo(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Cc(e, n, t) {
    var i = n.pendingProps, o = ke.current, s = !1, f = (n.flags & 128) !== 0, v;
    if ((v = f) || (v = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), v ? (s = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), me(ke, o & 1), e === null)
      return Ou(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((n.mode & 1) === 0 ? n.lanes = 1 : e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824, null) : (f = i.children, e = i.fallback, s ? (i = n.mode, s = n.child, f = { mode: "hidden", children: f }, (i & 1) === 0 && s !== null ? (s.childLanes = 0, s.pendingProps = f) : s = ll(f, i, 0, null), e = Nt(e, i, t, null), s.return = n, e.return = n, s.sibling = e, n.child = s, n.child.memoizedState = uo(t), n.memoizedState = lo, e) : oo(n, f));
    if (o = e.memoizedState, o !== null && (v = o.dehydrated, v !== null)) return rp(e, n, f, i, v, o, t);
    if (s) {
      s = i.fallback, f = n.mode, o = e.child, v = o.sibling;
      var w = { mode: "hidden", children: i.children };
      return (f & 1) === 0 && n.child !== o ? (i = n.child, i.childLanes = 0, i.pendingProps = w, n.deletions = null) : (i = lt(o, w), i.subtreeFlags = o.subtreeFlags & 14680064), v !== null ? s = lt(v, s) : (s = Nt(s, f, t, null), s.flags |= 2), s.return = n, i.return = n, i.sibling = s, n.child = i, i = s, s = n.child, f = e.child.memoizedState, f = f === null ? uo(t) : { baseLanes: f.baseLanes | t, cachePool: null, transitions: f.transitions }, s.memoizedState = f, s.childLanes = e.childLanes & ~t, n.memoizedState = lo, i;
    }
    return s = e.child, e = s.sibling, i = lt(s, { mode: "visible", children: i.children }), (n.mode & 1) === 0 && (i.lanes = t), i.return = n, i.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = i, n.memoizedState = null, i;
  }
  function oo(e, n) {
    return n = ll({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
  }
  function Xi(e, n, t, i) {
    return i !== null && Lu(i), Wt(n, e.child, null, t), e = oo(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
  }
  function rp(e, n, t, i, o, s, f) {
    if (t)
      return n.flags & 256 ? (n.flags &= -257, i = no(Error(u(422))), Xi(e, n, f, i)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (s = i.fallback, o = n.mode, i = ll({ mode: "visible", children: i.children }, o, 0, null), s = Nt(s, o, f, null), s.flags |= 2, i.return = n, s.return = n, i.sibling = s, n.child = i, (n.mode & 1) !== 0 && Wt(n, e.child, null, f), n.child.memoizedState = uo(f), n.memoizedState = lo, s);
    if ((n.mode & 1) === 0) return Xi(e, n, f, null);
    if (o.data === "$!") {
      if (i = o.nextSibling && o.nextSibling.dataset, i) var v = i.dgst;
      return i = v, s = Error(u(419)), i = no(s, i, void 0), Xi(e, n, f, i);
    }
    if (v = (f & e.childLanes) !== 0, Ge || v) {
      if (i = Ae, i !== null) {
        switch (f & -f) {
          case 4:
            o = 2;
            break;
          case 16:
            o = 8;
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
            o = 32;
            break;
          case 536870912:
            o = 268435456;
            break;
          default:
            o = 0;
        }
        o = (o & (i.suspendedLanes | f)) !== 0 ? 0 : o, o !== 0 && o !== s.retryLane && (s.retryLane = o, $n(e, o), yn(i, e, o, -1));
      }
      return So(), i = no(Error(u(421))), Xi(e, n, f, i);
    }
    return o.data === "$?" ? (n.flags |= 128, n.child = e.child, n = gp.bind(null, e), o._reactRetry = n, null) : (e = s.treeContext, rn = Kn(o.nextSibling), tn = n, xe = !0, pn = null, e !== null && (un[on++] = Ln, un[on++] = An, un[on++] = ht, Ln = e.id, An = e.overflow, ht = n), n = oo(n, i.children), n.flags |= 4096, n);
  }
  function Mc(e, n, t) {
    e.lanes |= n;
    var i = e.alternate;
    i !== null && (i.lanes |= n), Du(e.return, n, t);
  }
  function so(e, n, t, i, o) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: i, tail: t, tailMode: o } : (s.isBackwards = n, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = t, s.tailMode = o);
  }
  function Pc(e, n, t) {
    var i = n.pendingProps, o = i.revealOrder, s = i.tail;
    if (We(e, n, i.children, t), i = ke.current, (i & 2) !== 0) i = i & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Mc(e, t, n);
        else if (e.tag === 19) Mc(e, t, n);
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
      i &= 1;
    }
    if (me(ke, i), (n.mode & 1) === 0) n.memoizedState = null;
    else switch (o) {
      case "forwards":
        for (t = n.child, o = null; t !== null; ) e = t.alternate, e !== null && Ii(e) === null && (o = t), t = t.sibling;
        t = o, t === null ? (o = n.child, n.child = null) : (o = t.sibling, t.sibling = null), so(n, !1, o, t, s);
        break;
      case "backwards":
        for (t = null, o = n.child, n.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Ii(e) === null) {
            n.child = o;
            break;
          }
          e = o.sibling, o.sibling = t, t = o, o = e;
        }
        so(n, !0, t, null, s);
        break;
      case "together":
        so(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Yi(e, n) {
    (n.mode & 1) === 0 && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
  }
  function Dn(e, n, t) {
    if (e !== null && (n.dependencies = e.dependencies), yt |= n.lanes, (t & n.childLanes) === 0) return null;
    if (e !== null && n.child !== e.child) throw Error(u(153));
    if (n.child !== null) {
      for (e = n.child, t = lt(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) e = e.sibling, t = t.sibling = lt(e, e.pendingProps), t.return = n;
      t.sibling = null;
    }
    return n.child;
  }
  function ip(e, n, t) {
    switch (n.tag) {
      case 3:
        Sc(n), Qt();
        break;
      case 5:
        Va(n);
        break;
      case 1:
        Ke(n.type) && Ti(n);
        break;
      case 4:
        ju(n, n.stateNode.containerInfo);
        break;
      case 10:
        var i = n.type._context, o = n.memoizedProps.value;
        me(Ai, i._currentValue), i._currentValue = o;
        break;
      case 13:
        if (i = n.memoizedState, i !== null)
          return i.dehydrated !== null ? (me(ke, ke.current & 1), n.flags |= 128, null) : (t & n.child.childLanes) !== 0 ? Cc(e, n, t) : (me(ke, ke.current & 1), e = Dn(e, n, t), e !== null ? e.sibling : null);
        me(ke, ke.current & 1);
        break;
      case 19:
        if (i = (t & n.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (i) return Pc(e, n, t);
          n.flags |= 128;
        }
        if (o = n.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), me(ke, ke.current), i) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, _c(e, n, t);
    }
    return Dn(e, n, t);
  }
  var Tc, ao, zc, Rc;
  Tc = function(e, n) {
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
  }, ao = function() {
  }, zc = function(e, n, t, i) {
    var o = e.memoizedProps;
    if (o !== i) {
      e = n.stateNode, gt(En.current);
      var s = null;
      switch (t) {
        case "input":
          o = Dl(e, o), i = Dl(e, i), s = [];
          break;
        case "select":
          o = A({}, o, { value: void 0 }), i = A({}, i, { value: void 0 }), s = [];
          break;
        case "textarea":
          o = jl(e, o), i = jl(e, i), s = [];
          break;
        default:
          typeof o.onClick != "function" && typeof i.onClick == "function" && (e.onclick = Ci);
      }
      Hl(t, i);
      var f;
      t = null;
      for (C in o) if (!i.hasOwnProperty(C) && o.hasOwnProperty(C) && o[C] != null) if (C === "style") {
        var v = o[C];
        for (f in v) v.hasOwnProperty(f) && (t || (t = {}), t[f] = "");
      } else C !== "dangerouslySetInnerHTML" && C !== "children" && C !== "suppressContentEditableWarning" && C !== "suppressHydrationWarning" && C !== "autoFocus" && (c.hasOwnProperty(C) ? s || (s = []) : (s = s || []).push(C, null));
      for (C in i) {
        var w = i[C];
        if (v = o != null ? o[C] : void 0, i.hasOwnProperty(C) && w !== v && (w != null || v != null)) if (C === "style") if (v) {
          for (f in v) !v.hasOwnProperty(f) || w && w.hasOwnProperty(f) || (t || (t = {}), t[f] = "");
          for (f in w) w.hasOwnProperty(f) && v[f] !== w[f] && (t || (t = {}), t[f] = w[f]);
        } else t || (s || (s = []), s.push(
          C,
          t
        )), t = w;
        else C === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, v = v ? v.__html : void 0, w != null && v !== w && (s = s || []).push(C, w)) : C === "children" ? typeof w != "string" && typeof w != "number" || (s = s || []).push(C, "" + w) : C !== "suppressContentEditableWarning" && C !== "suppressHydrationWarning" && (c.hasOwnProperty(C) ? (w != null && C === "onScroll" && ye("scroll", e), s || v === w || (s = [])) : (s = s || []).push(C, w));
      }
      t && (s = s || []).push("style", t);
      var C = s;
      (n.updateQueue = C) && (n.flags |= 4);
    }
  }, Rc = function(e, n, t, i) {
    t !== i && (n.flags |= 4);
  };
  function Dr(e, n) {
    if (!xe) switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; ) n.alternate !== null && (t = n), n = n.sibling;
        t === null ? e.tail = null : t.sibling = null;
        break;
      case "collapsed":
        t = e.tail;
        for (var i = null; t !== null; ) t.alternate !== null && (i = t), t = t.sibling;
        i === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
    }
  }
  function Ve(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, t = 0, i = 0;
    if (n) for (var o = e.child; o !== null; ) t |= o.lanes | o.childLanes, i |= o.subtreeFlags & 14680064, i |= o.flags & 14680064, o.return = e, o = o.sibling;
    else for (o = e.child; o !== null; ) t |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= i, e.childLanes = t, n;
  }
  function lp(e, n, t) {
    var i = n.pendingProps;
    switch (Ru(n), n.tag) {
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
        return Ve(n), null;
      case 1:
        return Ke(n.type) && Pi(), Ve(n), null;
      case 3:
        return i = n.stateNode, Kt(), we(Ye), we(Ue), Qu(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (Oi(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, pn !== null && (_o(pn), pn = null))), ao(e, n), Ve(n), null;
      case 5:
        Vu(n);
        var o = gt(Or.current);
        if (t = n.type, e !== null && n.stateNode != null) zc(e, n, t, i, o), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
        else {
          if (!i) {
            if (n.stateNode === null) throw Error(u(166));
            return Ve(n), null;
          }
          if (e = gt(En.current), Oi(n)) {
            i = n.stateNode, t = n.type;
            var s = n.memoizedProps;
            switch (i[Sn] = n, i[Pr] = s, e = (n.mode & 1) !== 0, t) {
              case "dialog":
                ye("cancel", i), ye("close", i);
                break;
              case "iframe":
              case "object":
              case "embed":
                ye("load", i);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Er.length; o++) ye(Er[o], i);
                break;
              case "source":
                ye("error", i);
                break;
              case "img":
              case "image":
              case "link":
                ye(
                  "error",
                  i
                ), ye("load", i);
                break;
              case "details":
                ye("toggle", i);
                break;
              case "input":
                fs(i, s), ye("invalid", i);
                break;
              case "select":
                i._wrapperState = { wasMultiple: !!s.multiple }, ye("invalid", i);
                break;
              case "textarea":
                ps(i, s), ye("invalid", i);
            }
            Hl(t, s), o = null;
            for (var f in s) if (s.hasOwnProperty(f)) {
              var v = s[f];
              f === "children" ? typeof v == "string" ? i.textContent !== v && (s.suppressHydrationWarning !== !0 && Ei(i.textContent, v, e), o = ["children", v]) : typeof v == "number" && i.textContent !== "" + v && (s.suppressHydrationWarning !== !0 && Ei(
                i.textContent,
                v,
                e
              ), o = ["children", "" + v]) : c.hasOwnProperty(f) && v != null && f === "onScroll" && ye("scroll", i);
            }
            switch (t) {
              case "input":
                at(i), hs(i, s, !0);
                break;
              case "textarea":
                at(i), gs(i);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof s.onClick == "function" && (i.onclick = Ci);
            }
            i = o, n.updateQueue = i, i !== null && (n.flags |= 4);
          } else {
            f = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = vs(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = f.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = f.createElement(t, { is: i.is }) : (e = f.createElement(t), t === "select" && (f = e, i.multiple ? f.multiple = !0 : i.size && (f.size = i.size))) : e = f.createElementNS(e, t), e[Sn] = n, e[Pr] = i, Tc(e, n, !1, !1), n.stateNode = e;
            e: {
              switch (f = Ql(t, i), t) {
                case "dialog":
                  ye("cancel", e), ye("close", e), o = i;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ye("load", e), o = i;
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < Er.length; o++) ye(Er[o], e);
                  o = i;
                  break;
                case "source":
                  ye("error", e), o = i;
                  break;
                case "img":
                case "image":
                case "link":
                  ye(
                    "error",
                    e
                  ), ye("load", e), o = i;
                  break;
                case "details":
                  ye("toggle", e), o = i;
                  break;
                case "input":
                  fs(e, i), o = Dl(e, i), ye("invalid", e);
                  break;
                case "option":
                  o = i;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!i.multiple }, o = A({}, i, { value: void 0 }), ye("invalid", e);
                  break;
                case "textarea":
                  ps(e, i), o = jl(e, i), ye("invalid", e);
                  break;
                default:
                  o = i;
              }
              Hl(t, o), v = o;
              for (s in v) if (v.hasOwnProperty(s)) {
                var w = v[s];
                s === "style" ? xs(e, w) : s === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, w != null && ys(e, w)) : s === "children" ? typeof w == "string" ? (t !== "textarea" || w !== "") && ur(e, w) : typeof w == "number" && ur(e, "" + w) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (c.hasOwnProperty(s) ? w != null && s === "onScroll" && ye("scroll", e) : w != null && ee(e, s, w, f));
              }
              switch (t) {
                case "input":
                  at(e), hs(e, i, !1);
                  break;
                case "textarea":
                  at(e), gs(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + se(i.value));
                  break;
                case "select":
                  e.multiple = !!i.multiple, s = i.value, s != null ? Tt(e, !!i.multiple, s, !1) : i.defaultValue != null && Tt(
                    e,
                    !!i.multiple,
                    i.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof o.onClick == "function" && (e.onclick = Ci);
              }
              switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  i = !!i.autoFocus;
                  break e;
                case "img":
                  i = !0;
                  break e;
                default:
                  i = !1;
              }
            }
            i && (n.flags |= 4);
          }
          n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
        }
        return Ve(n), null;
      case 6:
        if (e && n.stateNode != null) Rc(e, n, e.memoizedProps, i);
        else {
          if (typeof i != "string" && n.stateNode === null) throw Error(u(166));
          if (t = gt(Or.current), gt(En.current), Oi(n)) {
            if (i = n.stateNode, t = n.memoizedProps, i[Sn] = n, (s = i.nodeValue !== t) && (e = tn, e !== null)) switch (e.tag) {
              case 3:
                Ei(i.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ei(i.nodeValue, t, (e.mode & 1) !== 0);
            }
            s && (n.flags |= 4);
          } else i = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(i), i[Sn] = n, n.stateNode = i;
        }
        return Ve(n), null;
      case 13:
        if (we(ke), i = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (xe && rn !== null && (n.mode & 1) !== 0 && (n.flags & 128) === 0) La(), Qt(), n.flags |= 98560, s = !1;
          else if (s = Oi(n), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!s) throw Error(u(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(u(317));
              s[Sn] = n;
            } else Qt(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Ve(n), s = !1;
          } else pn !== null && (_o(pn), pn = null), s = !0;
          if (!s) return n.flags & 65536 ? n : null;
        }
        return (n.flags & 128) !== 0 ? (n.lanes = t, n) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (n.child.flags |= 8192, (n.mode & 1) !== 0 && (e === null || (ke.current & 1) !== 0 ? Oe === 0 && (Oe = 3) : So())), n.updateQueue !== null && (n.flags |= 4), Ve(n), null);
      case 4:
        return Kt(), ao(e, n), e === null && Cr(n.stateNode.containerInfo), Ve(n), null;
      case 10:
        return Fu(n.type._context), Ve(n), null;
      case 17:
        return Ke(n.type) && Pi(), Ve(n), null;
      case 19:
        if (we(ke), s = n.memoizedState, s === null) return Ve(n), null;
        if (i = (n.flags & 128) !== 0, f = s.rendering, f === null) if (i) Dr(s, !1);
        else {
          if (Oe !== 0 || e !== null && (e.flags & 128) !== 0) for (e = n.child; e !== null; ) {
            if (f = Ii(e), f !== null) {
              for (n.flags |= 128, Dr(s, !1), i = f.updateQueue, i !== null && (n.updateQueue = i, n.flags |= 4), n.subtreeFlags = 0, i = t, t = n.child; t !== null; ) s = t, e = i, s.flags &= 14680066, f = s.alternate, f === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = f.childLanes, s.lanes = f.lanes, s.child = f.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = f.memoizedProps, s.memoizedState = f.memoizedState, s.updateQueue = f.updateQueue, s.type = f.type, e = f.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
              return me(ke, ke.current & 1 | 2), n.child;
            }
            e = e.sibling;
          }
          s.tail !== null && Pe() > Jt && (n.flags |= 128, i = !0, Dr(s, !1), n.lanes = 4194304);
        }
        else {
          if (!i) if (e = Ii(f), e !== null) {
            if (n.flags |= 128, i = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), Dr(s, !0), s.tail === null && s.tailMode === "hidden" && !f.alternate && !xe) return Ve(n), null;
          } else 2 * Pe() - s.renderingStartTime > Jt && t !== 1073741824 && (n.flags |= 128, i = !0, Dr(s, !1), n.lanes = 4194304);
          s.isBackwards ? (f.sibling = n.child, n.child = f) : (t = s.last, t !== null ? t.sibling = f : n.child = f, s.last = f);
        }
        return s.tail !== null ? (n = s.tail, s.rendering = n, s.tail = n.sibling, s.renderingStartTime = Pe(), n.sibling = null, t = ke.current, me(ke, i ? t & 1 | 2 : t & 1), n) : (Ve(n), null);
      case 22:
      case 23:
        return ko(), i = n.memoizedState !== null, e !== null && e.memoizedState !== null !== i && (n.flags |= 8192), i && (n.mode & 1) !== 0 ? (ln & 1073741824) !== 0 && (Ve(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Ve(n), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(u(156, n.tag));
  }
  function up(e, n) {
    switch (Ru(n), n.tag) {
      case 1:
        return Ke(n.type) && Pi(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Kt(), we(Ye), we(Ue), Qu(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 5:
        return Vu(n), null;
      case 13:
        if (we(ke), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null) throw Error(u(340));
          Qt();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return we(ke), null;
      case 4:
        return Kt(), null;
      case 10:
        return Fu(n.type._context), null;
      case 22:
      case 23:
        return ko(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ki = !1, He = !1, op = typeof WeakSet == "function" ? WeakSet : Set, D = null;
  function qt(e, n) {
    var t = e.ref;
    if (t !== null) if (typeof t == "function") try {
      t(null);
    } catch (i) {
      Me(e, n, i);
    }
    else t.current = null;
  }
  function co(e, n, t) {
    try {
      t();
    } catch (i) {
      Me(e, n, i);
    }
  }
  var Bc = !1;
  function sp(e, n) {
    if (Nu = pi, e = ca(), pu(e)) {
      if ("selectionStart" in e) var t = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        t = (t = e.ownerDocument) && t.defaultView || window;
        var i = t.getSelection && t.getSelection();
        if (i && i.rangeCount !== 0) {
          t = i.anchorNode;
          var o = i.anchorOffset, s = i.focusNode;
          i = i.focusOffset;
          try {
            t.nodeType, s.nodeType;
          } catch {
            t = null;
            break e;
          }
          var f = 0, v = -1, w = -1, C = 0, z = 0, R = e, T = null;
          n: for (; ; ) {
            for (var F; R !== t || o !== 0 && R.nodeType !== 3 || (v = f + o), R !== s || i !== 0 && R.nodeType !== 3 || (w = f + i), R.nodeType === 3 && (f += R.nodeValue.length), (F = R.firstChild) !== null; )
              T = R, R = F;
            for (; ; ) {
              if (R === e) break n;
              if (T === t && ++C === o && (v = f), T === s && ++z === i && (w = f), (F = R.nextSibling) !== null) break;
              R = T, T = R.parentNode;
            }
            R = F;
          }
          t = v === -1 || w === -1 ? null : { start: v, end: w };
        } else t = null;
      }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (ku = { focusedElem: e, selectionRange: t }, pi = !1, D = n; D !== null; ) if (n = D, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, D = e;
    else for (; D !== null; ) {
      n = D;
      try {
        var U = n.alternate;
        if ((n.flags & 1024) !== 0) switch (n.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (U !== null) {
              var H = U.memoizedProps, Te = U.memoizedState, N = n.stateNode, x = N.getSnapshotBeforeUpdate(n.elementType === n.type ? H : mn(n.type, H), Te);
              N.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var E = n.stateNode.containerInfo;
            E.nodeType === 1 ? E.textContent = "" : E.nodeType === 9 && E.documentElement && E.removeChild(E.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(u(163));
        }
      } catch (O) {
        Me(n, n.return, O);
      }
      if (e = n.sibling, e !== null) {
        e.return = n.return, D = e;
        break;
      }
      D = n.return;
    }
    return U = Bc, Bc = !1, U;
  }
  function Ir(e, n, t) {
    var i = n.updateQueue;
    if (i = i !== null ? i.lastEffect : null, i !== null) {
      var o = i = i.next;
      do {
        if ((o.tag & e) === e) {
          var s = o.destroy;
          o.destroy = void 0, s !== void 0 && co(n, t, s);
        }
        o = o.next;
      } while (o !== i);
    }
  }
  function Gi(e, n) {
    if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
      var t = n = n.next;
      do {
        if ((t.tag & e) === e) {
          var i = t.create;
          t.destroy = i();
        }
        t = t.next;
      } while (t !== n);
    }
  }
  function fo(e) {
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
  function Oc(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Oc(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[Sn], delete n[Pr], delete n[Mu], delete n[Qh], delete n[Wh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Lc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ac(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Lc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ho(e, n, t) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Ci));
    else if (i !== 4 && (e = e.child, e !== null)) for (ho(e, n, t), e = e.sibling; e !== null; ) ho(e, n, t), e = e.sibling;
  }
  function po(e, n, t) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (i !== 4 && (e = e.child, e !== null)) for (po(e, n, t), e = e.sibling; e !== null; ) po(e, n, t), e = e.sibling;
  }
  var Fe = null, gn = !1;
  function et(e, n, t) {
    for (t = t.child; t !== null; ) $c(e, n, t), t = t.sibling;
  }
  function $c(e, n, t) {
    if (kn && typeof kn.onCommitFiberUnmount == "function") try {
      kn.onCommitFiberUnmount(si, t);
    } catch {
    }
    switch (t.tag) {
      case 5:
        He || qt(t, n);
      case 6:
        var i = Fe, o = gn;
        Fe = null, et(e, n, t), Fe = i, gn = o, Fe !== null && (gn ? (e = Fe, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : Fe.removeChild(t.stateNode));
        break;
      case 18:
        Fe !== null && (gn ? (e = Fe, t = t.stateNode, e.nodeType === 8 ? Cu(e.parentNode, t) : e.nodeType === 1 && Cu(e, t), vr(e)) : Cu(Fe, t.stateNode));
        break;
      case 4:
        i = Fe, o = gn, Fe = t.stateNode.containerInfo, gn = !0, et(e, n, t), Fe = i, gn = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!He && (i = t.updateQueue, i !== null && (i = i.lastEffect, i !== null))) {
          o = i = i.next;
          do {
            var s = o, f = s.destroy;
            s = s.tag, f !== void 0 && ((s & 2) !== 0 || (s & 4) !== 0) && co(t, n, f), o = o.next;
          } while (o !== i);
        }
        et(e, n, t);
        break;
      case 1:
        if (!He && (qt(t, n), i = t.stateNode, typeof i.componentWillUnmount == "function")) try {
          i.props = t.memoizedProps, i.state = t.memoizedState, i.componentWillUnmount();
        } catch (v) {
          Me(t, n, v);
        }
        et(e, n, t);
        break;
      case 21:
        et(e, n, t);
        break;
      case 22:
        t.mode & 1 ? (He = (i = He) || t.memoizedState !== null, et(e, n, t), He = i) : et(e, n, t);
        break;
      default:
        et(e, n, t);
    }
  }
  function Fc(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new op()), n.forEach(function(i) {
        var o = vp.bind(null, e, i);
        t.has(i) || (t.add(i), i.then(o, o));
      });
    }
  }
  function vn(e, n) {
    var t = n.deletions;
    if (t !== null) for (var i = 0; i < t.length; i++) {
      var o = t[i];
      try {
        var s = e, f = n, v = f;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 5:
              Fe = v.stateNode, gn = !1;
              break e;
            case 3:
              Fe = v.stateNode.containerInfo, gn = !0;
              break e;
            case 4:
              Fe = v.stateNode.containerInfo, gn = !0;
              break e;
          }
          v = v.return;
        }
        if (Fe === null) throw Error(u(160));
        $c(s, f, o), Fe = null, gn = !1;
        var w = o.alternate;
        w !== null && (w.return = null), o.return = null;
      } catch (C) {
        Me(o, n, C);
      }
    }
    if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) Dc(n, e), n = n.sibling;
  }
  function Dc(e, n) {
    var t = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (vn(n, e), Mn(e), i & 4) {
          try {
            Ir(3, e, e.return), Gi(3, e);
          } catch (H) {
            Me(e, e.return, H);
          }
          try {
            Ir(5, e, e.return);
          } catch (H) {
            Me(e, e.return, H);
          }
        }
        break;
      case 1:
        vn(n, e), Mn(e), i & 512 && t !== null && qt(t, t.return);
        break;
      case 5:
        if (vn(n, e), Mn(e), i & 512 && t !== null && qt(t, t.return), e.flags & 32) {
          var o = e.stateNode;
          try {
            ur(o, "");
          } catch (H) {
            Me(e, e.return, H);
          }
        }
        if (i & 4 && (o = e.stateNode, o != null)) {
          var s = e.memoizedProps, f = t !== null ? t.memoizedProps : s, v = e.type, w = e.updateQueue;
          if (e.updateQueue = null, w !== null) try {
            v === "input" && s.type === "radio" && s.name != null && ds(o, s), Ql(v, f);
            var C = Ql(v, s);
            for (f = 0; f < w.length; f += 2) {
              var z = w[f], R = w[f + 1];
              z === "style" ? xs(o, R) : z === "dangerouslySetInnerHTML" ? ys(o, R) : z === "children" ? ur(o, R) : ee(o, z, R, C);
            }
            switch (v) {
              case "input":
                Il(o, s);
                break;
              case "textarea":
                ms(o, s);
                break;
              case "select":
                var T = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!s.multiple;
                var F = s.value;
                F != null ? Tt(o, !!s.multiple, F, !1) : T !== !!s.multiple && (s.defaultValue != null ? Tt(
                  o,
                  !!s.multiple,
                  s.defaultValue,
                  !0
                ) : Tt(o, !!s.multiple, s.multiple ? [] : "", !1));
            }
            o[Pr] = s;
          } catch (H) {
            Me(e, e.return, H);
          }
        }
        break;
      case 6:
        if (vn(n, e), Mn(e), i & 4) {
          if (e.stateNode === null) throw Error(u(162));
          o = e.stateNode, s = e.memoizedProps;
          try {
            o.nodeValue = s;
          } catch (H) {
            Me(e, e.return, H);
          }
        }
        break;
      case 3:
        if (vn(n, e), Mn(e), i & 4 && t !== null && t.memoizedState.isDehydrated) try {
          vr(n.containerInfo);
        } catch (H) {
          Me(e, e.return, H);
        }
        break;
      case 4:
        vn(n, e), Mn(e);
        break;
      case 13:
        vn(n, e), Mn(e), o = e.child, o.flags & 8192 && (s = o.memoizedState !== null, o.stateNode.isHidden = s, !s || o.alternate !== null && o.alternate.memoizedState !== null || (vo = Pe())), i & 4 && Fc(e);
        break;
      case 22:
        if (z = t !== null && t.memoizedState !== null, e.mode & 1 ? (He = (C = He) || z, vn(n, e), He = C) : vn(n, e), Mn(e), i & 8192) {
          if (C = e.memoizedState !== null, (e.stateNode.isHidden = C) && !z && (e.mode & 1) !== 0) for (D = e, z = e.child; z !== null; ) {
            for (R = D = z; D !== null; ) {
              switch (T = D, F = T.child, T.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ir(4, T, T.return);
                  break;
                case 1:
                  qt(T, T.return);
                  var U = T.stateNode;
                  if (typeof U.componentWillUnmount == "function") {
                    i = T, t = T.return;
                    try {
                      n = i, U.props = n.memoizedProps, U.state = n.memoizedState, U.componentWillUnmount();
                    } catch (H) {
                      Me(i, t, H);
                    }
                  }
                  break;
                case 5:
                  qt(T, T.return);
                  break;
                case 22:
                  if (T.memoizedState !== null) {
                    jc(R);
                    continue;
                  }
              }
              F !== null ? (F.return = T, D = F) : jc(R);
            }
            z = z.sibling;
          }
          e: for (z = null, R = e; ; ) {
            if (R.tag === 5) {
              if (z === null) {
                z = R;
                try {
                  o = R.stateNode, C ? (s = o.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (v = R.stateNode, w = R.memoizedProps.style, f = w != null && w.hasOwnProperty("display") ? w.display : null, v.style.display = ws("display", f));
                } catch (H) {
                  Me(e, e.return, H);
                }
              }
            } else if (R.tag === 6) {
              if (z === null) try {
                R.stateNode.nodeValue = C ? "" : R.memoizedProps;
              } catch (H) {
                Me(e, e.return, H);
              }
            } else if ((R.tag !== 22 && R.tag !== 23 || R.memoizedState === null || R === e) && R.child !== null) {
              R.child.return = R, R = R.child;
              continue;
            }
            if (R === e) break e;
            for (; R.sibling === null; ) {
              if (R.return === null || R.return === e) break e;
              z === R && (z = null), R = R.return;
            }
            z === R && (z = null), R.sibling.return = R.return, R = R.sibling;
          }
        }
        break;
      case 19:
        vn(n, e), Mn(e), i & 4 && Fc(e);
        break;
      case 21:
        break;
      default:
        vn(
          n,
          e
        ), Mn(e);
    }
  }
  function Mn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var t = e.return; t !== null; ) {
            if (Lc(t)) {
              var i = t;
              break e;
            }
            t = t.return;
          }
          throw Error(u(160));
        }
        switch (i.tag) {
          case 5:
            var o = i.stateNode;
            i.flags & 32 && (ur(o, ""), i.flags &= -33);
            var s = Ac(e);
            po(e, s, o);
            break;
          case 3:
          case 4:
            var f = i.stateNode.containerInfo, v = Ac(e);
            ho(e, v, f);
            break;
          default:
            throw Error(u(161));
        }
      } catch (w) {
        Me(e, e.return, w);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function ap(e, n, t) {
    D = e, Ic(e);
  }
  function Ic(e, n, t) {
    for (var i = (e.mode & 1) !== 0; D !== null; ) {
      var o = D, s = o.child;
      if (o.tag === 22 && i) {
        var f = o.memoizedState !== null || Ki;
        if (!f) {
          var v = o.alternate, w = v !== null && v.memoizedState !== null || He;
          v = Ki;
          var C = He;
          if (Ki = f, (He = w) && !C) for (D = o; D !== null; ) f = D, w = f.child, f.tag === 22 && f.memoizedState !== null ? Vc(o) : w !== null ? (w.return = f, D = w) : Vc(o);
          for (; s !== null; ) D = s, Ic(s), s = s.sibling;
          D = o, Ki = v, He = C;
        }
        Uc(e);
      } else (o.subtreeFlags & 8772) !== 0 && s !== null ? (s.return = o, D = s) : Uc(e);
    }
  }
  function Uc(e) {
    for (; D !== null; ) {
      var n = D;
      if ((n.flags & 8772) !== 0) {
        var t = n.alternate;
        try {
          if ((n.flags & 8772) !== 0) switch (n.tag) {
            case 0:
            case 11:
            case 15:
              He || Gi(5, n);
              break;
            case 1:
              var i = n.stateNode;
              if (n.flags & 4 && !He) if (t === null) i.componentDidMount();
              else {
                var o = n.elementType === n.type ? t.memoizedProps : mn(n.type, t.memoizedProps);
                i.componentDidUpdate(o, t.memoizedState, i.__reactInternalSnapshotBeforeUpdate);
              }
              var s = n.updateQueue;
              s !== null && ja(n, s, i);
              break;
            case 3:
              var f = n.updateQueue;
              if (f !== null) {
                if (t = null, n.child !== null) switch (n.child.tag) {
                  case 5:
                    t = n.child.stateNode;
                    break;
                  case 1:
                    t = n.child.stateNode;
                }
                ja(n, f, t);
              }
              break;
            case 5:
              var v = n.stateNode;
              if (t === null && n.flags & 4) {
                t = v;
                var w = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    w.autoFocus && t.focus();
                    break;
                  case "img":
                    w.src && (t.src = w.src);
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
                var C = n.alternate;
                if (C !== null) {
                  var z = C.memoizedState;
                  if (z !== null) {
                    var R = z.dehydrated;
                    R !== null && vr(R);
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
              throw Error(u(163));
          }
          He || n.flags & 512 && fo(n);
        } catch (T) {
          Me(n, n.return, T);
        }
      }
      if (n === e) {
        D = null;
        break;
      }
      if (t = n.sibling, t !== null) {
        t.return = n.return, D = t;
        break;
      }
      D = n.return;
    }
  }
  function jc(e) {
    for (; D !== null; ) {
      var n = D;
      if (n === e) {
        D = null;
        break;
      }
      var t = n.sibling;
      if (t !== null) {
        t.return = n.return, D = t;
        break;
      }
      D = n.return;
    }
  }
  function Vc(e) {
    for (; D !== null; ) {
      var n = D;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var t = n.return;
            try {
              Gi(4, n);
            } catch (w) {
              Me(n, t, w);
            }
            break;
          case 1:
            var i = n.stateNode;
            if (typeof i.componentDidMount == "function") {
              var o = n.return;
              try {
                i.componentDidMount();
              } catch (w) {
                Me(n, o, w);
              }
            }
            var s = n.return;
            try {
              fo(n);
            } catch (w) {
              Me(n, s, w);
            }
            break;
          case 5:
            var f = n.return;
            try {
              fo(n);
            } catch (w) {
              Me(n, f, w);
            }
        }
      } catch (w) {
        Me(n, n.return, w);
      }
      if (n === e) {
        D = null;
        break;
      }
      var v = n.sibling;
      if (v !== null) {
        v.return = n.return, D = v;
        break;
      }
      D = n.return;
    }
  }
  var cp = Math.ceil, qi = Z.ReactCurrentDispatcher, mo = Z.ReactCurrentOwner, cn = Z.ReactCurrentBatchConfig, ae = 0, Ae = null, Re = null, De = 0, ln = 0, Zt = Gn(0), Oe = 0, Ur = null, yt = 0, Zi = 0, go = 0, jr = null, qe = null, vo = 0, Jt = 1 / 0, In = null, Ji = !1, yo = null, nt = null, bi = !1, tt = null, el = 0, Vr = 0, wo = null, nl = -1, tl = 0;
  function Xe() {
    return (ae & 6) !== 0 ? Pe() : nl !== -1 ? nl : nl = Pe();
  }
  function rt(e) {
    return (e.mode & 1) === 0 ? 1 : (ae & 2) !== 0 && De !== 0 ? De & -De : Yh.transition !== null ? (tl === 0 && (tl = As()), tl) : (e = de, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Qs(e.type)), e);
  }
  function yn(e, n, t, i) {
    if (50 < Vr) throw Vr = 0, wo = null, Error(u(185));
    dr(e, t, i), ((ae & 2) === 0 || e !== Ae) && (e === Ae && ((ae & 2) === 0 && (Zi |= t), Oe === 4 && it(e, De)), Ze(e, i), t === 1 && ae === 0 && (n.mode & 1) === 0 && (Jt = Pe() + 500, zi && Zn()));
  }
  function Ze(e, n) {
    var t = e.callbackNode;
    Yd(e, n);
    var i = fi(e, e === Ae ? De : 0);
    if (i === 0) t !== null && Bs(t), e.callbackNode = null, e.callbackPriority = 0;
    else if (n = i & -i, e.callbackPriority !== n) {
      if (t != null && Bs(t), n === 1) e.tag === 0 ? Xh(Qc.bind(null, e)) : Ta(Qc.bind(null, e)), Vh(function() {
        (ae & 6) === 0 && Zn();
      }), t = null;
      else {
        switch ($s(i)) {
          case 1:
            t = Zl;
            break;
          case 4:
            t = Os;
            break;
          case 16:
            t = oi;
            break;
          case 536870912:
            t = Ls;
            break;
          default:
            t = oi;
        }
        t = Jc(t, Hc.bind(null, e));
      }
      e.callbackPriority = n, e.callbackNode = t;
    }
  }
  function Hc(e, n) {
    if (nl = -1, tl = 0, (ae & 6) !== 0) throw Error(u(327));
    var t = e.callbackNode;
    if (bt() && e.callbackNode !== t) return null;
    var i = fi(e, e === Ae ? De : 0);
    if (i === 0) return null;
    if ((i & 30) !== 0 || (i & e.expiredLanes) !== 0 || n) n = rl(e, i);
    else {
      n = i;
      var o = ae;
      ae |= 2;
      var s = Xc();
      (Ae !== e || De !== n) && (In = null, Jt = Pe() + 500, xt(e, n));
      do
        try {
          hp();
          break;
        } catch (v) {
          Wc(e, v);
        }
      while (!0);
      $u(), qi.current = s, ae = o, Re !== null ? n = 0 : (Ae = null, De = 0, n = Oe);
    }
    if (n !== 0) {
      if (n === 2 && (o = Jl(e), o !== 0 && (i = o, n = xo(e, o))), n === 1) throw t = Ur, xt(e, 0), it(e, i), Ze(e, Pe()), t;
      if (n === 6) it(e, i);
      else {
        if (o = e.current.alternate, (i & 30) === 0 && !fp(o) && (n = rl(e, i), n === 2 && (s = Jl(e), s !== 0 && (i = s, n = xo(e, s))), n === 1)) throw t = Ur, xt(e, 0), it(e, i), Ze(e, Pe()), t;
        switch (e.finishedWork = o, e.finishedLanes = i, n) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            _t(e, qe, In);
            break;
          case 3:
            if (it(e, i), (i & 130023424) === i && (n = vo + 500 - Pe(), 10 < n)) {
              if (fi(e, 0) !== 0) break;
              if (o = e.suspendedLanes, (o & i) !== i) {
                Xe(), e.pingedLanes |= e.suspendedLanes & o;
                break;
              }
              e.timeoutHandle = Eu(_t.bind(null, e, qe, In), n);
              break;
            }
            _t(e, qe, In);
            break;
          case 4:
            if (it(e, i), (i & 4194240) === i) break;
            for (n = e.eventTimes, o = -1; 0 < i; ) {
              var f = 31 - dn(i);
              s = 1 << f, f = n[f], f > o && (o = f), i &= ~s;
            }
            if (i = o, i = Pe() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * cp(i / 1960)) - i, 10 < i) {
              e.timeoutHandle = Eu(_t.bind(null, e, qe, In), i);
              break;
            }
            _t(e, qe, In);
            break;
          case 5:
            _t(e, qe, In);
            break;
          default:
            throw Error(u(329));
        }
      }
    }
    return Ze(e, Pe()), e.callbackNode === t ? Hc.bind(null, e) : null;
  }
  function xo(e, n) {
    var t = jr;
    return e.current.memoizedState.isDehydrated && (xt(e, n).flags |= 256), e = rl(e, n), e !== 2 && (n = qe, qe = t, n !== null && _o(n)), e;
  }
  function _o(e) {
    qe === null ? qe = e : qe.push.apply(qe, e);
  }
  function fp(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue;
        if (t !== null && (t = t.stores, t !== null)) for (var i = 0; i < t.length; i++) {
          var o = t[i], s = o.getSnapshot;
          o = o.value;
          try {
            if (!hn(s(), o)) return !1;
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
  function it(e, n) {
    for (n &= ~go, n &= ~Zi, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
      var t = 31 - dn(n), i = 1 << t;
      e[t] = -1, n &= ~i;
    }
  }
  function Qc(e) {
    if ((ae & 6) !== 0) throw Error(u(327));
    bt();
    var n = fi(e, 0);
    if ((n & 1) === 0) return Ze(e, Pe()), null;
    var t = rl(e, n);
    if (e.tag !== 0 && t === 2) {
      var i = Jl(e);
      i !== 0 && (n = i, t = xo(e, i));
    }
    if (t === 1) throw t = Ur, xt(e, 0), it(e, n), Ze(e, Pe()), t;
    if (t === 6) throw Error(u(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n, _t(e, qe, In), Ze(e, Pe()), null;
  }
  function No(e, n) {
    var t = ae;
    ae |= 1;
    try {
      return e(n);
    } finally {
      ae = t, ae === 0 && (Jt = Pe() + 500, zi && Zn());
    }
  }
  function wt(e) {
    tt !== null && tt.tag === 0 && (ae & 6) === 0 && bt();
    var n = ae;
    ae |= 1;
    var t = cn.transition, i = de;
    try {
      if (cn.transition = null, de = 1, e) return e();
    } finally {
      de = i, cn.transition = t, ae = n, (ae & 6) === 0 && Zn();
    }
  }
  function ko() {
    ln = Zt.current, we(Zt);
  }
  function xt(e, n) {
    e.finishedWork = null, e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1, jh(t)), Re !== null) for (t = Re.return; t !== null; ) {
      var i = t;
      switch (Ru(i), i.tag) {
        case 1:
          i = i.type.childContextTypes, i != null && Pi();
          break;
        case 3:
          Kt(), we(Ye), we(Ue), Qu();
          break;
        case 5:
          Vu(i);
          break;
        case 4:
          Kt();
          break;
        case 13:
          we(ke);
          break;
        case 19:
          we(ke);
          break;
        case 10:
          Fu(i.type._context);
          break;
        case 22:
        case 23:
          ko();
      }
      t = t.return;
    }
    if (Ae = e, Re = e = lt(e.current, null), De = ln = n, Oe = 0, Ur = null, go = Zi = yt = 0, qe = jr = null, mt !== null) {
      for (n = 0; n < mt.length; n++) if (t = mt[n], i = t.interleaved, i !== null) {
        t.interleaved = null;
        var o = i.next, s = t.pending;
        if (s !== null) {
          var f = s.next;
          s.next = o, i.next = f;
        }
        t.pending = i;
      }
      mt = null;
    }
    return e;
  }
  function Wc(e, n) {
    do {
      var t = Re;
      try {
        if ($u(), Ui.current = Qi, ji) {
          for (var i = Se.memoizedState; i !== null; ) {
            var o = i.queue;
            o !== null && (o.pending = null), i = i.next;
          }
          ji = !1;
        }
        if (vt = 0, Le = Be = Se = null, Lr = !1, Ar = 0, mo.current = null, t === null || t.return === null) {
          Oe = 1, Ur = n, Re = null;
          break;
        }
        e: {
          var s = e, f = t.return, v = t, w = n;
          if (n = De, v.flags |= 32768, w !== null && typeof w == "object" && typeof w.then == "function") {
            var C = w, z = v, R = z.tag;
            if ((z.mode & 1) === 0 && (R === 0 || R === 11 || R === 15)) {
              var T = z.alternate;
              T ? (z.updateQueue = T.updateQueue, z.memoizedState = T.memoizedState, z.lanes = T.lanes) : (z.updateQueue = null, z.memoizedState = null);
            }
            var F = gc(f);
            if (F !== null) {
              F.flags &= -257, vc(F, f, v, s, n), F.mode & 1 && mc(s, C, n), n = F, w = C;
              var U = n.updateQueue;
              if (U === null) {
                var H = /* @__PURE__ */ new Set();
                H.add(w), n.updateQueue = H;
              } else U.add(w);
              break e;
            } else {
              if ((n & 1) === 0) {
                mc(s, C, n), So();
                break e;
              }
              w = Error(u(426));
            }
          } else if (xe && v.mode & 1) {
            var Te = gc(f);
            if (Te !== null) {
              (Te.flags & 65536) === 0 && (Te.flags |= 256), vc(Te, f, v, s, n), Lu(Gt(w, v));
              break e;
            }
          }
          s = w = Gt(w, v), Oe !== 4 && (Oe = 2), jr === null ? jr = [s] : jr.push(s), s = f;
          do {
            switch (s.tag) {
              case 3:
                s.flags |= 65536, n &= -n, s.lanes |= n;
                var N = hc(s, w, n);
                Ua(s, N);
                break e;
              case 1:
                v = w;
                var x = s.type, E = s.stateNode;
                if ((s.flags & 128) === 0 && (typeof x.getDerivedStateFromError == "function" || E !== null && typeof E.componentDidCatch == "function" && (nt === null || !nt.has(E)))) {
                  s.flags |= 65536, n &= -n, s.lanes |= n;
                  var O = pc(s, v, n);
                  Ua(s, O);
                  break e;
                }
            }
            s = s.return;
          } while (s !== null);
        }
        Kc(t);
      } catch (Q) {
        n = Q, Re === t && t !== null && (Re = t = t.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Xc() {
    var e = qi.current;
    return qi.current = Qi, e === null ? Qi : e;
  }
  function So() {
    (Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4), Ae === null || (yt & 268435455) === 0 && (Zi & 268435455) === 0 || it(Ae, De);
  }
  function rl(e, n) {
    var t = ae;
    ae |= 2;
    var i = Xc();
    (Ae !== e || De !== n) && (In = null, xt(e, n));
    do
      try {
        dp();
        break;
      } catch (o) {
        Wc(e, o);
      }
    while (!0);
    if ($u(), ae = t, qi.current = i, Re !== null) throw Error(u(261));
    return Ae = null, De = 0, Oe;
  }
  function dp() {
    for (; Re !== null; ) Yc(Re);
  }
  function hp() {
    for (; Re !== null && !Dd(); ) Yc(Re);
  }
  function Yc(e) {
    var n = Zc(e.alternate, e, ln);
    e.memoizedProps = e.pendingProps, n === null ? Kc(e) : Re = n, mo.current = null;
  }
  function Kc(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (e = n.return, (n.flags & 32768) === 0) {
        if (t = lp(t, n, ln), t !== null) {
          Re = t;
          return;
        }
      } else {
        if (t = up(t, n), t !== null) {
          t.flags &= 32767, Re = t;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Oe = 6, Re = null;
          return;
        }
      }
      if (n = n.sibling, n !== null) {
        Re = n;
        return;
      }
      Re = n = e;
    } while (n !== null);
    Oe === 0 && (Oe = 5);
  }
  function _t(e, n, t) {
    var i = de, o = cn.transition;
    try {
      cn.transition = null, de = 1, pp(e, n, t, i);
    } finally {
      cn.transition = o, de = i;
    }
    return null;
  }
  function pp(e, n, t, i) {
    do
      bt();
    while (tt !== null);
    if ((ae & 6) !== 0) throw Error(u(327));
    t = e.finishedWork;
    var o = e.finishedLanes;
    if (t === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(u(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var s = t.lanes | t.childLanes;
    if (Kd(e, s), e === Ae && (Re = Ae = null, De = 0), (t.subtreeFlags & 2064) === 0 && (t.flags & 2064) === 0 || bi || (bi = !0, Jc(oi, function() {
      return bt(), null;
    })), s = (t.flags & 15990) !== 0, (t.subtreeFlags & 15990) !== 0 || s) {
      s = cn.transition, cn.transition = null;
      var f = de;
      de = 1;
      var v = ae;
      ae |= 4, mo.current = null, sp(e, t), Dc(t, e), Lh(ku), pi = !!Nu, ku = Nu = null, e.current = t, ap(t), Id(), ae = v, de = f, cn.transition = s;
    } else e.current = t;
    if (bi && (bi = !1, tt = e, el = o), s = e.pendingLanes, s === 0 && (nt = null), Vd(t.stateNode), Ze(e, Pe()), n !== null) for (i = e.onRecoverableError, t = 0; t < n.length; t++) o = n[t], i(o.value, { componentStack: o.stack, digest: o.digest });
    if (Ji) throw Ji = !1, e = yo, yo = null, e;
    return (el & 1) !== 0 && e.tag !== 0 && bt(), s = e.pendingLanes, (s & 1) !== 0 ? e === wo ? Vr++ : (Vr = 0, wo = e) : Vr = 0, Zn(), null;
  }
  function bt() {
    if (tt !== null) {
      var e = $s(el), n = cn.transition, t = de;
      try {
        if (cn.transition = null, de = 16 > e ? 16 : e, tt === null) var i = !1;
        else {
          if (e = tt, tt = null, el = 0, (ae & 6) !== 0) throw Error(u(331));
          var o = ae;
          for (ae |= 4, D = e.current; D !== null; ) {
            var s = D, f = s.child;
            if ((D.flags & 16) !== 0) {
              var v = s.deletions;
              if (v !== null) {
                for (var w = 0; w < v.length; w++) {
                  var C = v[w];
                  for (D = C; D !== null; ) {
                    var z = D;
                    switch (z.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ir(8, z, s);
                    }
                    var R = z.child;
                    if (R !== null) R.return = z, D = R;
                    else for (; D !== null; ) {
                      z = D;
                      var T = z.sibling, F = z.return;
                      if (Oc(z), z === C) {
                        D = null;
                        break;
                      }
                      if (T !== null) {
                        T.return = F, D = T;
                        break;
                      }
                      D = F;
                    }
                  }
                }
                var U = s.alternate;
                if (U !== null) {
                  var H = U.child;
                  if (H !== null) {
                    U.child = null;
                    do {
                      var Te = H.sibling;
                      H.sibling = null, H = Te;
                    } while (H !== null);
                  }
                }
                D = s;
              }
            }
            if ((s.subtreeFlags & 2064) !== 0 && f !== null) f.return = s, D = f;
            else e: for (; D !== null; ) {
              if (s = D, (s.flags & 2048) !== 0) switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  Ir(9, s, s.return);
              }
              var N = s.sibling;
              if (N !== null) {
                N.return = s.return, D = N;
                break e;
              }
              D = s.return;
            }
          }
          var x = e.current;
          for (D = x; D !== null; ) {
            f = D;
            var E = f.child;
            if ((f.subtreeFlags & 2064) !== 0 && E !== null) E.return = f, D = E;
            else e: for (f = x; D !== null; ) {
              if (v = D, (v.flags & 2048) !== 0) try {
                switch (v.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Gi(9, v);
                }
              } catch (Q) {
                Me(v, v.return, Q);
              }
              if (v === f) {
                D = null;
                break e;
              }
              var O = v.sibling;
              if (O !== null) {
                O.return = v.return, D = O;
                break e;
              }
              D = v.return;
            }
          }
          if (ae = o, Zn(), kn && typeof kn.onPostCommitFiberRoot == "function") try {
            kn.onPostCommitFiberRoot(si, e);
          } catch {
          }
          i = !0;
        }
        return i;
      } finally {
        de = t, cn.transition = n;
      }
    }
    return !1;
  }
  function Gc(e, n, t) {
    n = Gt(t, n), n = hc(e, n, 1), e = bn(e, n, 1), n = Xe(), e !== null && (dr(e, 1, n), Ze(e, n));
  }
  function Me(e, n, t) {
    if (e.tag === 3) Gc(e, e, t);
    else for (; n !== null; ) {
      if (n.tag === 3) {
        Gc(n, e, t);
        break;
      } else if (n.tag === 1) {
        var i = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (nt === null || !nt.has(i))) {
          e = Gt(t, e), e = pc(n, e, 1), n = bn(n, e, 1), e = Xe(), n !== null && (dr(n, 1, e), Ze(n, e));
          break;
        }
      }
      n = n.return;
    }
  }
  function mp(e, n, t) {
    var i = e.pingCache;
    i !== null && i.delete(n), n = Xe(), e.pingedLanes |= e.suspendedLanes & t, Ae === e && (De & t) === t && (Oe === 4 || Oe === 3 && (De & 130023424) === De && 500 > Pe() - vo ? xt(e, 0) : go |= t), Ze(e, n);
  }
  function qc(e, n) {
    n === 0 && ((e.mode & 1) === 0 ? n = 1 : (n = ci, ci <<= 1, (ci & 130023424) === 0 && (ci = 4194304)));
    var t = Xe();
    e = $n(e, n), e !== null && (dr(e, n, t), Ze(e, t));
  }
  function gp(e) {
    var n = e.memoizedState, t = 0;
    n !== null && (t = n.retryLane), qc(e, t);
  }
  function vp(e, n) {
    var t = 0;
    switch (e.tag) {
      case 13:
        var i = e.stateNode, o = e.memoizedState;
        o !== null && (t = o.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      default:
        throw Error(u(314));
    }
    i !== null && i.delete(n), qc(e, t);
  }
  var Zc;
  Zc = function(e, n, t) {
    if (e !== null) if (e.memoizedProps !== n.pendingProps || Ye.current) Ge = !0;
    else {
      if ((e.lanes & t) === 0 && (n.flags & 128) === 0) return Ge = !1, ip(e, n, t);
      Ge = (e.flags & 131072) !== 0;
    }
    else Ge = !1, xe && (n.flags & 1048576) !== 0 && za(n, Bi, n.index);
    switch (n.lanes = 0, n.tag) {
      case 2:
        var i = n.type;
        Yi(e, n), e = n.pendingProps;
        var o = jt(n, Ue.current);
        Yt(n, t), o = Yu(null, n, i, e, o, t);
        var s = Ku();
        return n.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, Ke(i) ? (s = !0, Ti(n)) : s = !1, n.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Uu(n), o.updater = Wi, n.stateNode = o, o._reactInternals = n, eo(n, i, e, t), n = io(null, n, i, !0, s, t)) : (n.tag = 0, xe && s && zu(n), We(null, n, o, t), n = n.child), n;
      case 16:
        i = n.elementType;
        e: {
          switch (Yi(e, n), e = n.pendingProps, o = i._init, i = o(i._payload), n.type = i, o = n.tag = wp(i), e = mn(i, e), o) {
            case 0:
              n = ro(null, n, i, e, t);
              break e;
            case 1:
              n = kc(null, n, i, e, t);
              break e;
            case 11:
              n = yc(null, n, i, e, t);
              break e;
            case 14:
              n = wc(null, n, i, mn(i.type, e), t);
              break e;
          }
          throw Error(u(
            306,
            i,
            ""
          ));
        }
        return n;
      case 0:
        return i = n.type, o = n.pendingProps, o = n.elementType === i ? o : mn(i, o), ro(e, n, i, o, t);
      case 1:
        return i = n.type, o = n.pendingProps, o = n.elementType === i ? o : mn(i, o), kc(e, n, i, o, t);
      case 3:
        e: {
          if (Sc(n), e === null) throw Error(u(387));
          i = n.pendingProps, s = n.memoizedState, o = s.element, Ia(e, n), Di(n, i, null, t);
          var f = n.memoizedState;
          if (i = f.element, s.isDehydrated) if (s = { element: i, isDehydrated: !1, cache: f.cache, pendingSuspenseBoundaries: f.pendingSuspenseBoundaries, transitions: f.transitions }, n.updateQueue.baseState = s, n.memoizedState = s, n.flags & 256) {
            o = Gt(Error(u(423)), n), n = Ec(e, n, i, t, o);
            break e;
          } else if (i !== o) {
            o = Gt(Error(u(424)), n), n = Ec(e, n, i, t, o);
            break e;
          } else for (rn = Kn(n.stateNode.containerInfo.firstChild), tn = n, xe = !0, pn = null, t = Fa(n, null, i, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (Qt(), i === o) {
              n = Dn(e, n, t);
              break e;
            }
            We(e, n, i, t);
          }
          n = n.child;
        }
        return n;
      case 5:
        return Va(n), e === null && Ou(n), i = n.type, o = n.pendingProps, s = e !== null ? e.memoizedProps : null, f = o.children, Su(i, o) ? f = null : s !== null && Su(i, s) && (n.flags |= 32), Nc(e, n), We(e, n, f, t), n.child;
      case 6:
        return e === null && Ou(n), null;
      case 13:
        return Cc(e, n, t);
      case 4:
        return ju(n, n.stateNode.containerInfo), i = n.pendingProps, e === null ? n.child = Wt(n, null, i, t) : We(e, n, i, t), n.child;
      case 11:
        return i = n.type, o = n.pendingProps, o = n.elementType === i ? o : mn(i, o), yc(e, n, i, o, t);
      case 7:
        return We(e, n, n.pendingProps, t), n.child;
      case 8:
        return We(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return We(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          if (i = n.type._context, o = n.pendingProps, s = n.memoizedProps, f = o.value, me(Ai, i._currentValue), i._currentValue = f, s !== null) if (hn(s.value, f)) {
            if (s.children === o.children && !Ye.current) {
              n = Dn(e, n, t);
              break e;
            }
          } else for (s = n.child, s !== null && (s.return = n); s !== null; ) {
            var v = s.dependencies;
            if (v !== null) {
              f = s.child;
              for (var w = v.firstContext; w !== null; ) {
                if (w.context === i) {
                  if (s.tag === 1) {
                    w = Fn(-1, t & -t), w.tag = 2;
                    var C = s.updateQueue;
                    if (C !== null) {
                      C = C.shared;
                      var z = C.pending;
                      z === null ? w.next = w : (w.next = z.next, z.next = w), C.pending = w;
                    }
                  }
                  s.lanes |= t, w = s.alternate, w !== null && (w.lanes |= t), Du(
                    s.return,
                    t,
                    n
                  ), v.lanes |= t;
                  break;
                }
                w = w.next;
              }
            } else if (s.tag === 10) f = s.type === n.type ? null : s.child;
            else if (s.tag === 18) {
              if (f = s.return, f === null) throw Error(u(341));
              f.lanes |= t, v = f.alternate, v !== null && (v.lanes |= t), Du(f, t, n), f = s.sibling;
            } else f = s.child;
            if (f !== null) f.return = s;
            else for (f = s; f !== null; ) {
              if (f === n) {
                f = null;
                break;
              }
              if (s = f.sibling, s !== null) {
                s.return = f.return, f = s;
                break;
              }
              f = f.return;
            }
            s = f;
          }
          We(e, n, o.children, t), n = n.child;
        }
        return n;
      case 9:
        return o = n.type, i = n.pendingProps.children, Yt(n, t), o = sn(o), i = i(o), n.flags |= 1, We(e, n, i, t), n.child;
      case 14:
        return i = n.type, o = mn(i, n.pendingProps), o = mn(i.type, o), wc(e, n, i, o, t);
      case 15:
        return xc(e, n, n.type, n.pendingProps, t);
      case 17:
        return i = n.type, o = n.pendingProps, o = n.elementType === i ? o : mn(i, o), Yi(e, n), n.tag = 1, Ke(i) ? (e = !0, Ti(n)) : e = !1, Yt(n, t), fc(n, i, o), eo(n, i, o, t), io(null, n, i, !0, e, t);
      case 19:
        return Pc(e, n, t);
      case 22:
        return _c(e, n, t);
    }
    throw Error(u(156, n.tag));
  };
  function Jc(e, n) {
    return Rs(e, n);
  }
  function yp(e, n, t, i) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function fn(e, n, t, i) {
    return new yp(e, n, t, i);
  }
  function Eo(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function wp(e) {
    if (typeof e == "function") return Eo(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === X) return 11;
      if (e === ve) return 14;
    }
    return 2;
  }
  function lt(e, n) {
    var t = e.alternate;
    return t === null ? (t = fn(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
  }
  function il(e, n, t, i, o, s) {
    var f = 2;
    if (i = e, typeof e == "function") Eo(e) && (f = 1);
    else if (typeof e == "string") f = 5;
    else e: switch (e) {
      case ge:
        return Nt(t.children, o, s, n);
      case _e:
        f = 8, o |= 8;
        break;
      case ze:
        return e = fn(12, t, n, o | 2), e.elementType = ze, e.lanes = s, e;
      case V:
        return e = fn(13, t, n, o), e.elementType = V, e.lanes = s, e;
      case Y:
        return e = fn(19, t, n, o), e.elementType = Y, e.lanes = s, e;
      case ue:
        return ll(t, o, s, n);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Ee:
            f = 10;
            break e;
          case Ne:
            f = 9;
            break e;
          case X:
            f = 11;
            break e;
          case ve:
            f = 14;
            break e;
          case Ce:
            f = 16, i = null;
            break e;
        }
        throw Error(u(130, e == null ? e : typeof e, ""));
    }
    return n = fn(f, t, n, o), n.elementType = e, n.type = i, n.lanes = s, n;
  }
  function Nt(e, n, t, i) {
    return e = fn(7, e, i, n), e.lanes = t, e;
  }
  function ll(e, n, t, i) {
    return e = fn(22, e, i, n), e.elementType = ue, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
  }
  function Co(e, n, t) {
    return e = fn(6, e, null, n), e.lanes = t, e;
  }
  function Mo(e, n, t) {
    return n = fn(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
  }
  function xp(e, n, t, i, o) {
    this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = bl(0), this.expirationTimes = bl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = bl(0), this.identifierPrefix = i, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
  }
  function Po(e, n, t, i, o, s, f, v, w) {
    return e = new xp(e, n, t, v, w), n === 1 ? (n = 1, s === !0 && (n |= 8)) : n = 0, s = fn(3, null, null, n), e.current = s, s.stateNode = e, s.memoizedState = { element: i, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Uu(s), e;
  }
  function _p(e, n, t) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: re, key: i == null ? null : "" + i, children: e, containerInfo: n, implementation: t };
  }
  function bc(e) {
    if (!e) return qn;
    e = e._reactInternals;
    e: {
      if (ct(e) !== e || e.tag !== 1) throw Error(u(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (Ke(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(u(171));
    }
    if (e.tag === 1) {
      var t = e.type;
      if (Ke(t)) return Ma(e, t, n);
    }
    return n;
  }
  function ef(e, n, t, i, o, s, f, v, w) {
    return e = Po(t, i, !0, e, o, s, f, v, w), e.context = bc(null), t = e.current, i = Xe(), o = rt(t), s = Fn(i, o), s.callback = n ?? null, bn(t, s, o), e.current.lanes = o, dr(e, o, i), Ze(e, i), e;
  }
  function ul(e, n, t, i) {
    var o = n.current, s = Xe(), f = rt(o);
    return t = bc(t), n.context === null ? n.context = t : n.pendingContext = t, n = Fn(s, f), n.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (n.callback = i), e = bn(o, n, f), e !== null && (yn(e, o, f, s), Fi(e, o, f)), f;
  }
  function ol(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function nf(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function To(e, n) {
    nf(e, n), (e = e.alternate) && nf(e, n);
  }
  function Np() {
    return null;
  }
  var tf = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function zo(e) {
    this._internalRoot = e;
  }
  sl.prototype.render = zo.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(u(409));
    ul(e, n, null, null);
  }, sl.prototype.unmount = zo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      wt(function() {
        ul(null, e, null, null);
      }), n[Bn] = null;
    }
  };
  function sl(e) {
    this._internalRoot = e;
  }
  sl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = Is();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < Wn.length && n !== 0 && n < Wn[t].priority; t++) ;
      Wn.splice(t, 0, e), t === 0 && Vs(e);
    }
  };
  function Ro(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function al(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function rf() {
  }
  function kp(e, n, t, i, o) {
    if (o) {
      if (typeof i == "function") {
        var s = i;
        i = function() {
          var C = ol(f);
          s.call(C);
        };
      }
      var f = ef(n, i, e, 0, null, !1, !1, "", rf);
      return e._reactRootContainer = f, e[Bn] = f.current, Cr(e.nodeType === 8 ? e.parentNode : e), wt(), f;
    }
    for (; o = e.lastChild; ) e.removeChild(o);
    if (typeof i == "function") {
      var v = i;
      i = function() {
        var C = ol(w);
        v.call(C);
      };
    }
    var w = Po(e, 0, !1, null, null, !1, !1, "", rf);
    return e._reactRootContainer = w, e[Bn] = w.current, Cr(e.nodeType === 8 ? e.parentNode : e), wt(function() {
      ul(n, w, t, i);
    }), w;
  }
  function cl(e, n, t, i, o) {
    var s = t._reactRootContainer;
    if (s) {
      var f = s;
      if (typeof o == "function") {
        var v = o;
        o = function() {
          var w = ol(f);
          v.call(w);
        };
      }
      ul(n, f, e, o);
    } else f = kp(t, n, e, o, i);
    return ol(f);
  }
  Fs = function(e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var t = fr(n.pendingLanes);
          t !== 0 && (eu(n, t | 1), Ze(n, Pe()), (ae & 6) === 0 && (Jt = Pe() + 500, Zn()));
        }
        break;
      case 13:
        wt(function() {
          var i = $n(e, 1);
          if (i !== null) {
            var o = Xe();
            yn(i, e, 1, o);
          }
        }), To(e, 1);
    }
  }, nu = function(e) {
    if (e.tag === 13) {
      var n = $n(e, 134217728);
      if (n !== null) {
        var t = Xe();
        yn(n, e, 134217728, t);
      }
      To(e, 134217728);
    }
  }, Ds = function(e) {
    if (e.tag === 13) {
      var n = rt(e), t = $n(e, n);
      if (t !== null) {
        var i = Xe();
        yn(t, e, n, i);
      }
      To(e, n);
    }
  }, Is = function() {
    return de;
  }, Us = function(e, n) {
    var t = de;
    try {
      return de = e, n();
    } finally {
      de = t;
    }
  }, Yl = function(e, n, t) {
    switch (n) {
      case "input":
        if (Il(e, t), n = t.name, t.type === "radio" && n != null) {
          for (t = e; t.parentNode; ) t = t.parentNode;
          for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
            var i = t[n];
            if (i !== e && i.form === e.form) {
              var o = Mi(i);
              if (!o) throw Error(u(90));
              cs(i), Il(i, o);
            }
          }
        }
        break;
      case "textarea":
        ms(e, t);
        break;
      case "select":
        n = t.value, n != null && Tt(e, !!t.multiple, n, !1);
    }
  }, Ss = No, Es = wt;
  var Sp = { usingClientEntryPoint: !1, Events: [Tr, It, Mi, Ns, ks, No] }, Hr = { findFiberByHostInstance: ft, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Ep = { bundleType: Hr.bundleType, version: Hr.version, rendererPackageName: Hr.rendererPackageName, rendererConfig: Hr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Z.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Ts(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Hr.findFiberByHostInstance || Np, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var fl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!fl.isDisabled && fl.supportsFiber) try {
      si = fl.inject(Ep), kn = fl;
    } catch {
    }
  }
  return Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sp, Je.createPortal = function(e, n) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ro(n)) throw Error(u(200));
    return _p(e, n, null, t);
  }, Je.createRoot = function(e, n) {
    if (!Ro(e)) throw Error(u(299));
    var t = !1, i = "", o = tf;
    return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), n = Po(e, 1, !1, null, null, t, !1, i, o), e[Bn] = n.current, Cr(e.nodeType === 8 ? e.parentNode : e), new zo(n);
  }, Je.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = Ts(n), e = e === null ? null : e.stateNode, e;
  }, Je.flushSync = function(e) {
    return wt(e);
  }, Je.hydrate = function(e, n, t) {
    if (!al(n)) throw Error(u(200));
    return cl(null, e, n, !0, t);
  }, Je.hydrateRoot = function(e, n, t) {
    if (!Ro(e)) throw Error(u(405));
    var i = t != null && t.hydratedSources || null, o = !1, s = "", f = tf;
    if (t != null && (t.unstable_strictMode === !0 && (o = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), n = ef(n, null, e, 1, t ?? null, o, !1, s, f), e[Bn] = n.current, Cr(e), i) for (e = 0; e < i.length; e++) t = i[e], o = t._getVersion, o = o(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, o] : n.mutableSourceEagerHydrationData.push(
      t,
      o
    );
    return new sl(n);
  }, Je.render = function(e, n, t) {
    if (!al(n)) throw Error(u(200));
    return cl(null, e, n, !1, t);
  }, Je.unmountComponentAtNode = function(e) {
    if (!al(e)) throw Error(u(40));
    return e._reactRootContainer ? (wt(function() {
      cl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Bn] = null;
      });
    }), !0) : !1;
  }, Je.unstable_batchedUpdates = No, Je.unstable_renderSubtreeIntoContainer = function(e, n, t, i) {
    if (!al(t)) throw Error(u(200));
    if (e == null || e._reactInternals === void 0) throw Error(u(38));
    return cl(e, n, t, !1, i);
  }, Je.version = "18.3.1-next-f1338f8080-20240426", Je;
}
var df;
function Op() {
  if (df) return Lo.exports;
  df = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (l) {
        console.error(l);
      }
  }
  return r(), Lo.exports = Bp(), Lo.exports;
}
var hf;
function Lp() {
  if (hf) return dl;
  hf = 1;
  var r = Op();
  return dl.createRoot = r.createRoot, dl.hydrateRoot = r.hydrateRoot, dl;
}
var Ap = Lp(), st = Jo();
function yl(r, l) {
  return r == null || l == null ? NaN : r < l ? -1 : r > l ? 1 : r >= l ? 0 : NaN;
}
function $p(r, l) {
  return r == null || l == null ? NaN : l < r ? -1 : l > r ? 1 : l >= r ? 0 : NaN;
}
function Hf(r) {
  let l, u, a;
  r.length !== 2 ? (l = yl, u = (p, g) => yl(r(p), g), a = (p, g) => r(p) - g) : (l = r === yl || r === $p ? r : Fp, u = r, a = r);
  function c(p, g, m = 0, y = p.length) {
    if (m < y) {
      if (l(g, g) !== 0) return y;
      do {
        const S = m + y >>> 1;
        u(p[S], g) < 0 ? m = S + 1 : y = S;
      } while (m < y);
    }
    return m;
  }
  function d(p, g, m = 0, y = p.length) {
    if (m < y) {
      if (l(g, g) !== 0) return y;
      do {
        const S = m + y >>> 1;
        u(p[S], g) <= 0 ? m = S + 1 : y = S;
      } while (m < y);
    }
    return m;
  }
  function h(p, g, m = 0, y = p.length) {
    const S = c(p, g, m, y - 1);
    return S > m && a(p[S - 1], g) > -a(p[S], g) ? S - 1 : S;
  }
  return { left: c, center: h, right: d };
}
function Fp() {
  return 0;
}
function Dp(r) {
  return r === null ? NaN : +r;
}
const Ip = Hf(yl), Up = Ip.right;
Hf(Dp).center;
class pf extends Map {
  constructor(l, u = Hp) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: u } }), l != null) for (const [a, c] of l) this.set(a, c);
  }
  get(l) {
    return super.get(mf(this, l));
  }
  has(l) {
    return super.has(mf(this, l));
  }
  set(l, u) {
    return super.set(jp(this, l), u);
  }
  delete(l) {
    return super.delete(Vp(this, l));
  }
}
function mf({ _intern: r, _key: l }, u) {
  const a = l(u);
  return r.has(a) ? r.get(a) : u;
}
function jp({ _intern: r, _key: l }, u) {
  const a = l(u);
  return r.has(a) ? r.get(a) : (r.set(a, u), u);
}
function Vp({ _intern: r, _key: l }, u) {
  const a = l(u);
  return r.has(a) && (u = r.get(a), r.delete(a)), u;
}
function Hp(r) {
  return r !== null && typeof r == "object" ? r.valueOf() : r;
}
const Qp = Math.sqrt(50), Wp = Math.sqrt(10), Xp = Math.sqrt(2);
function Nl(r, l, u) {
  const a = (l - r) / Math.max(0, u), c = Math.floor(Math.log10(a)), d = a / Math.pow(10, c), h = d >= Qp ? 10 : d >= Wp ? 5 : d >= Xp ? 2 : 1;
  let p, g, m;
  return c < 0 ? (m = Math.pow(10, -c) / h, p = Math.round(r * m), g = Math.round(l * m), p / m < r && ++p, g / m > l && --g, m = -m) : (m = Math.pow(10, c) * h, p = Math.round(r / m), g = Math.round(l / m), p * m < r && ++p, g * m > l && --g), g < p && 0.5 <= u && u < 2 ? Nl(r, l, u * 2) : [p, g, m];
}
function Yp(r, l, u) {
  if (l = +l, r = +r, u = +u, !(u > 0)) return [];
  if (r === l) return [r];
  const a = l < r, [c, d, h] = a ? Nl(l, r, u) : Nl(r, l, u);
  if (!(d >= c)) return [];
  const p = d - c + 1, g = new Array(p);
  if (a)
    if (h < 0) for (let m = 0; m < p; ++m) g[m] = (d - m) / -h;
    else for (let m = 0; m < p; ++m) g[m] = (d - m) * h;
  else if (h < 0) for (let m = 0; m < p; ++m) g[m] = (c + m) / -h;
  else for (let m = 0; m < p; ++m) g[m] = (c + m) * h;
  return g;
}
function jo(r, l, u) {
  return l = +l, r = +r, u = +u, Nl(r, l, u)[2];
}
function Kp(r, l, u) {
  l = +l, r = +r, u = +u;
  const a = l < r, c = a ? jo(l, r, u) : jo(r, l, u);
  return (a ? -1 : 1) * (c < 0 ? 1 / -c : c);
}
var Gp = { value: () => {
} };
function Qf() {
  for (var r = 0, l = arguments.length, u = {}, a; r < l; ++r) {
    if (!(a = arguments[r] + "") || a in u || /[\s.]/.test(a)) throw new Error("illegal type: " + a);
    u[a] = [];
  }
  return new wl(u);
}
function wl(r) {
  this._ = r;
}
function qp(r, l) {
  return r.trim().split(/^|\s+/).map(function(u) {
    var a = "", c = u.indexOf(".");
    if (c >= 0 && (a = u.slice(c + 1), u = u.slice(0, c)), u && !l.hasOwnProperty(u)) throw new Error("unknown type: " + u);
    return { type: u, name: a };
  });
}
wl.prototype = Qf.prototype = {
  constructor: wl,
  on: function(r, l) {
    var u = this._, a = qp(r + "", u), c, d = -1, h = a.length;
    if (arguments.length < 2) {
      for (; ++d < h; ) if ((c = (r = a[d]).type) && (c = Zp(u[c], r.name))) return c;
      return;
    }
    if (l != null && typeof l != "function") throw new Error("invalid callback: " + l);
    for (; ++d < h; )
      if (c = (r = a[d]).type) u[c] = gf(u[c], r.name, l);
      else if (l == null) for (c in u) u[c] = gf(u[c], r.name, null);
    return this;
  },
  copy: function() {
    var r = {}, l = this._;
    for (var u in l) r[u] = l[u].slice();
    return new wl(r);
  },
  call: function(r, l) {
    if ((c = arguments.length - 2) > 0) for (var u = new Array(c), a = 0, c, d; a < c; ++a) u[a] = arguments[a + 2];
    if (!this._.hasOwnProperty(r)) throw new Error("unknown type: " + r);
    for (d = this._[r], a = 0, c = d.length; a < c; ++a) d[a].value.apply(l, u);
  },
  apply: function(r, l, u) {
    if (!this._.hasOwnProperty(r)) throw new Error("unknown type: " + r);
    for (var a = this._[r], c = 0, d = a.length; c < d; ++c) a[c].value.apply(l, u);
  }
};
function Zp(r, l) {
  for (var u = 0, a = r.length, c; u < a; ++u)
    if ((c = r[u]).name === l)
      return c.value;
}
function gf(r, l, u) {
  for (var a = 0, c = r.length; a < c; ++a)
    if (r[a].name === l) {
      r[a] = Gp, r = r.slice(0, a).concat(r.slice(a + 1));
      break;
    }
  return u != null && r.push({ name: l, value: u }), r;
}
var Vo = "http://www.w3.org/1999/xhtml";
const vf = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Vo,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Al(r) {
  var l = r += "", u = l.indexOf(":");
  return u >= 0 && (l = r.slice(0, u)) !== "xmlns" && (r = r.slice(u + 1)), vf.hasOwnProperty(l) ? { space: vf[l], local: r } : r;
}
function Jp(r) {
  return function() {
    var l = this.ownerDocument, u = this.namespaceURI;
    return u === Vo && l.documentElement.namespaceURI === Vo ? l.createElement(r) : l.createElementNS(u, r);
  };
}
function bp(r) {
  return function() {
    return this.ownerDocument.createElementNS(r.space, r.local);
  };
}
function Wf(r) {
  var l = Al(r);
  return (l.local ? bp : Jp)(l);
}
function e0() {
}
function bo(r) {
  return r == null ? e0 : function() {
    return this.querySelector(r);
  };
}
function n0(r) {
  typeof r != "function" && (r = bo(r));
  for (var l = this._groups, u = l.length, a = new Array(u), c = 0; c < u; ++c)
    for (var d = l[c], h = d.length, p = a[c] = new Array(h), g, m, y = 0; y < h; ++y)
      (g = d[y]) && (m = r.call(g, g.__data__, y, d)) && ("__data__" in g && (m.__data__ = g.__data__), p[y] = m);
  return new _n(a, this._parents);
}
function t0(r) {
  return r == null ? [] : Array.isArray(r) ? r : Array.from(r);
}
function r0() {
  return [];
}
function Xf(r) {
  return r == null ? r0 : function() {
    return this.querySelectorAll(r);
  };
}
function i0(r) {
  return function() {
    return t0(r.apply(this, arguments));
  };
}
function l0(r) {
  typeof r == "function" ? r = i0(r) : r = Xf(r);
  for (var l = this._groups, u = l.length, a = [], c = [], d = 0; d < u; ++d)
    for (var h = l[d], p = h.length, g, m = 0; m < p; ++m)
      (g = h[m]) && (a.push(r.call(g, g.__data__, m, h)), c.push(g));
  return new _n(a, c);
}
function Yf(r) {
  return function() {
    return this.matches(r);
  };
}
function Kf(r) {
  return function(l) {
    return l.matches(r);
  };
}
var u0 = Array.prototype.find;
function o0(r) {
  return function() {
    return u0.call(this.children, r);
  };
}
function s0() {
  return this.firstElementChild;
}
function a0(r) {
  return this.select(r == null ? s0 : o0(typeof r == "function" ? r : Kf(r)));
}
var c0 = Array.prototype.filter;
function f0() {
  return Array.from(this.children);
}
function d0(r) {
  return function() {
    return c0.call(this.children, r);
  };
}
function h0(r) {
  return this.selectAll(r == null ? f0 : d0(typeof r == "function" ? r : Kf(r)));
}
function p0(r) {
  typeof r != "function" && (r = Yf(r));
  for (var l = this._groups, u = l.length, a = new Array(u), c = 0; c < u; ++c)
    for (var d = l[c], h = d.length, p = a[c] = [], g, m = 0; m < h; ++m)
      (g = d[m]) && r.call(g, g.__data__, m, d) && p.push(g);
  return new _n(a, this._parents);
}
function Gf(r) {
  return new Array(r.length);
}
function m0() {
  return new _n(this._enter || this._groups.map(Gf), this._parents);
}
function kl(r, l) {
  this.ownerDocument = r.ownerDocument, this.namespaceURI = r.namespaceURI, this._next = null, this._parent = r, this.__data__ = l;
}
kl.prototype = {
  constructor: kl,
  appendChild: function(r) {
    return this._parent.insertBefore(r, this._next);
  },
  insertBefore: function(r, l) {
    return this._parent.insertBefore(r, l);
  },
  querySelector: function(r) {
    return this._parent.querySelector(r);
  },
  querySelectorAll: function(r) {
    return this._parent.querySelectorAll(r);
  }
};
function g0(r) {
  return function() {
    return r;
  };
}
function v0(r, l, u, a, c, d) {
  for (var h = 0, p, g = l.length, m = d.length; h < m; ++h)
    (p = l[h]) ? (p.__data__ = d[h], a[h] = p) : u[h] = new kl(r, d[h]);
  for (; h < g; ++h)
    (p = l[h]) && (c[h] = p);
}
function y0(r, l, u, a, c, d, h) {
  var p, g, m = /* @__PURE__ */ new Map(), y = l.length, S = d.length, k = new Array(y), M;
  for (p = 0; p < y; ++p)
    (g = l[p]) && (k[p] = M = h.call(g, g.__data__, p, l) + "", m.has(M) ? c[p] = g : m.set(M, g));
  for (p = 0; p < S; ++p)
    M = h.call(r, d[p], p, d) + "", (g = m.get(M)) ? (a[p] = g, g.__data__ = d[p], m.delete(M)) : u[p] = new kl(r, d[p]);
  for (p = 0; p < y; ++p)
    (g = l[p]) && m.get(k[p]) === g && (c[p] = g);
}
function w0(r) {
  return r.__data__;
}
function x0(r, l) {
  if (!arguments.length) return Array.from(this, w0);
  var u = l ? y0 : v0, a = this._parents, c = this._groups;
  typeof r != "function" && (r = g0(r));
  for (var d = c.length, h = new Array(d), p = new Array(d), g = new Array(d), m = 0; m < d; ++m) {
    var y = a[m], S = c[m], k = S.length, M = _0(r.call(y, y && y.__data__, m, a)), I = M.length, $ = p[m] = new Array(I), B = h[m] = new Array(I), j = g[m] = new Array(k);
    u(y, S, $, B, j, M, l);
    for (var K = 0, ee = 0, Z, oe; K < I; ++K)
      if (Z = $[K]) {
        for (K >= ee && (ee = K + 1); !(oe = B[ee]) && ++ee < I; ) ;
        Z._next = oe || null;
      }
  }
  return h = new _n(h, a), h._enter = p, h._exit = g, h;
}
function _0(r) {
  return typeof r == "object" && "length" in r ? r : Array.from(r);
}
function N0() {
  return new _n(this._exit || this._groups.map(Gf), this._parents);
}
function k0(r, l, u) {
  var a = this.enter(), c = this, d = this.exit();
  return typeof r == "function" ? (a = r(a), a && (a = a.selection())) : a = a.append(r + ""), l != null && (c = l(c), c && (c = c.selection())), u == null ? d.remove() : u(d), a && c ? a.merge(c).order() : c;
}
function S0(r) {
  for (var l = r.selection ? r.selection() : r, u = this._groups, a = l._groups, c = u.length, d = a.length, h = Math.min(c, d), p = new Array(c), g = 0; g < h; ++g)
    for (var m = u[g], y = a[g], S = m.length, k = p[g] = new Array(S), M, I = 0; I < S; ++I)
      (M = m[I] || y[I]) && (k[I] = M);
  for (; g < c; ++g)
    p[g] = u[g];
  return new _n(p, this._parents);
}
function E0() {
  for (var r = this._groups, l = -1, u = r.length; ++l < u; )
    for (var a = r[l], c = a.length - 1, d = a[c], h; --c >= 0; )
      (h = a[c]) && (d && h.compareDocumentPosition(d) ^ 4 && d.parentNode.insertBefore(h, d), d = h);
  return this;
}
function C0(r) {
  r || (r = M0);
  function l(S, k) {
    return S && k ? r(S.__data__, k.__data__) : !S - !k;
  }
  for (var u = this._groups, a = u.length, c = new Array(a), d = 0; d < a; ++d) {
    for (var h = u[d], p = h.length, g = c[d] = new Array(p), m, y = 0; y < p; ++y)
      (m = h[y]) && (g[y] = m);
    g.sort(l);
  }
  return new _n(c, this._parents).order();
}
function M0(r, l) {
  return r < l ? -1 : r > l ? 1 : r >= l ? 0 : NaN;
}
function P0() {
  var r = arguments[0];
  return arguments[0] = this, r.apply(null, arguments), this;
}
function T0() {
  return Array.from(this);
}
function z0() {
  for (var r = this._groups, l = 0, u = r.length; l < u; ++l)
    for (var a = r[l], c = 0, d = a.length; c < d; ++c) {
      var h = a[c];
      if (h) return h;
    }
  return null;
}
function R0() {
  let r = 0;
  for (const l of this) ++r;
  return r;
}
function B0() {
  return !this.node();
}
function O0(r) {
  for (var l = this._groups, u = 0, a = l.length; u < a; ++u)
    for (var c = l[u], d = 0, h = c.length, p; d < h; ++d)
      (p = c[d]) && r.call(p, p.__data__, d, c);
  return this;
}
function L0(r) {
  return function() {
    this.removeAttribute(r);
  };
}
function A0(r) {
  return function() {
    this.removeAttributeNS(r.space, r.local);
  };
}
function $0(r, l) {
  return function() {
    this.setAttribute(r, l);
  };
}
function F0(r, l) {
  return function() {
    this.setAttributeNS(r.space, r.local, l);
  };
}
function D0(r, l) {
  return function() {
    var u = l.apply(this, arguments);
    u == null ? this.removeAttribute(r) : this.setAttribute(r, u);
  };
}
function I0(r, l) {
  return function() {
    var u = l.apply(this, arguments);
    u == null ? this.removeAttributeNS(r.space, r.local) : this.setAttributeNS(r.space, r.local, u);
  };
}
function U0(r, l) {
  var u = Al(r);
  if (arguments.length < 2) {
    var a = this.node();
    return u.local ? a.getAttributeNS(u.space, u.local) : a.getAttribute(u);
  }
  return this.each((l == null ? u.local ? A0 : L0 : typeof l == "function" ? u.local ? I0 : D0 : u.local ? F0 : $0)(u, l));
}
function qf(r) {
  return r.ownerDocument && r.ownerDocument.defaultView || r.document && r || r.defaultView;
}
function j0(r) {
  return function() {
    this.style.removeProperty(r);
  };
}
function V0(r, l, u) {
  return function() {
    this.style.setProperty(r, l, u);
  };
}
function H0(r, l, u) {
  return function() {
    var a = l.apply(this, arguments);
    a == null ? this.style.removeProperty(r) : this.style.setProperty(r, a, u);
  };
}
function Q0(r, l, u) {
  return arguments.length > 1 ? this.each((l == null ? j0 : typeof l == "function" ? H0 : V0)(r, l, u ?? "")) : tr(this.node(), r);
}
function tr(r, l) {
  return r.style.getPropertyValue(l) || qf(r).getComputedStyle(r, null).getPropertyValue(l);
}
function W0(r) {
  return function() {
    delete this[r];
  };
}
function X0(r, l) {
  return function() {
    this[r] = l;
  };
}
function Y0(r, l) {
  return function() {
    var u = l.apply(this, arguments);
    u == null ? delete this[r] : this[r] = u;
  };
}
function K0(r, l) {
  return arguments.length > 1 ? this.each((l == null ? W0 : typeof l == "function" ? Y0 : X0)(r, l)) : this.node()[r];
}
function Zf(r) {
  return r.trim().split(/^|\s+/);
}
function es(r) {
  return r.classList || new Jf(r);
}
function Jf(r) {
  this._node = r, this._names = Zf(r.getAttribute("class") || "");
}
Jf.prototype = {
  add: function(r) {
    var l = this._names.indexOf(r);
    l < 0 && (this._names.push(r), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(r) {
    var l = this._names.indexOf(r);
    l >= 0 && (this._names.splice(l, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(r) {
    return this._names.indexOf(r) >= 0;
  }
};
function bf(r, l) {
  for (var u = es(r), a = -1, c = l.length; ++a < c; ) u.add(l[a]);
}
function ed(r, l) {
  for (var u = es(r), a = -1, c = l.length; ++a < c; ) u.remove(l[a]);
}
function G0(r) {
  return function() {
    bf(this, r);
  };
}
function q0(r) {
  return function() {
    ed(this, r);
  };
}
function Z0(r, l) {
  return function() {
    (l.apply(this, arguments) ? bf : ed)(this, r);
  };
}
function J0(r, l) {
  var u = Zf(r + "");
  if (arguments.length < 2) {
    for (var a = es(this.node()), c = -1, d = u.length; ++c < d; ) if (!a.contains(u[c])) return !1;
    return !0;
  }
  return this.each((typeof l == "function" ? Z0 : l ? G0 : q0)(u, l));
}
function b0() {
  this.textContent = "";
}
function em(r) {
  return function() {
    this.textContent = r;
  };
}
function nm(r) {
  return function() {
    var l = r.apply(this, arguments);
    this.textContent = l ?? "";
  };
}
function tm(r) {
  return arguments.length ? this.each(r == null ? b0 : (typeof r == "function" ? nm : em)(r)) : this.node().textContent;
}
function rm() {
  this.innerHTML = "";
}
function im(r) {
  return function() {
    this.innerHTML = r;
  };
}
function lm(r) {
  return function() {
    var l = r.apply(this, arguments);
    this.innerHTML = l ?? "";
  };
}
function um(r) {
  return arguments.length ? this.each(r == null ? rm : (typeof r == "function" ? lm : im)(r)) : this.node().innerHTML;
}
function om() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function sm() {
  return this.each(om);
}
function am() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function cm() {
  return this.each(am);
}
function fm(r) {
  var l = typeof r == "function" ? r : Wf(r);
  return this.select(function() {
    return this.appendChild(l.apply(this, arguments));
  });
}
function dm() {
  return null;
}
function hm(r, l) {
  var u = typeof r == "function" ? r : Wf(r), a = l == null ? dm : typeof l == "function" ? l : bo(l);
  return this.select(function() {
    return this.insertBefore(u.apply(this, arguments), a.apply(this, arguments) || null);
  });
}
function pm() {
  var r = this.parentNode;
  r && r.removeChild(this);
}
function mm() {
  return this.each(pm);
}
function gm() {
  var r = this.cloneNode(!1), l = this.parentNode;
  return l ? l.insertBefore(r, this.nextSibling) : r;
}
function vm() {
  var r = this.cloneNode(!0), l = this.parentNode;
  return l ? l.insertBefore(r, this.nextSibling) : r;
}
function ym(r) {
  return this.select(r ? vm : gm);
}
function wm(r) {
  return arguments.length ? this.property("__data__", r) : this.node().__data__;
}
function xm(r) {
  return function(l) {
    r.call(this, l, this.__data__);
  };
}
function _m(r) {
  return r.trim().split(/^|\s+/).map(function(l) {
    var u = "", a = l.indexOf(".");
    return a >= 0 && (u = l.slice(a + 1), l = l.slice(0, a)), { type: l, name: u };
  });
}
function Nm(r) {
  return function() {
    var l = this.__on;
    if (l) {
      for (var u = 0, a = -1, c = l.length, d; u < c; ++u)
        d = l[u], (!r.type || d.type === r.type) && d.name === r.name ? this.removeEventListener(d.type, d.listener, d.options) : l[++a] = d;
      ++a ? l.length = a : delete this.__on;
    }
  };
}
function km(r, l, u) {
  return function() {
    var a = this.__on, c, d = xm(l);
    if (a) {
      for (var h = 0, p = a.length; h < p; ++h)
        if ((c = a[h]).type === r.type && c.name === r.name) {
          this.removeEventListener(c.type, c.listener, c.options), this.addEventListener(c.type, c.listener = d, c.options = u), c.value = l;
          return;
        }
    }
    this.addEventListener(r.type, d, u), c = { type: r.type, name: r.name, value: l, listener: d, options: u }, a ? a.push(c) : this.__on = [c];
  };
}
function Sm(r, l, u) {
  var a = _m(r + ""), c, d = a.length, h;
  if (arguments.length < 2) {
    var p = this.node().__on;
    if (p) {
      for (var g = 0, m = p.length, y; g < m; ++g)
        for (c = 0, y = p[g]; c < d; ++c)
          if ((h = a[c]).type === y.type && h.name === y.name)
            return y.value;
    }
    return;
  }
  for (p = l ? km : Nm, c = 0; c < d; ++c) this.each(p(a[c], l, u));
  return this;
}
function nd(r, l, u) {
  var a = qf(r), c = a.CustomEvent;
  typeof c == "function" ? c = new c(l, u) : (c = a.document.createEvent("Event"), u ? (c.initEvent(l, u.bubbles, u.cancelable), c.detail = u.detail) : c.initEvent(l, !1, !1)), r.dispatchEvent(c);
}
function Em(r, l) {
  return function() {
    return nd(this, r, l);
  };
}
function Cm(r, l) {
  return function() {
    return nd(this, r, l.apply(this, arguments));
  };
}
function Mm(r, l) {
  return this.each((typeof l == "function" ? Cm : Em)(r, l));
}
function* Pm() {
  for (var r = this._groups, l = 0, u = r.length; l < u; ++l)
    for (var a = r[l], c = 0, d = a.length, h; c < d; ++c)
      (h = a[c]) && (yield h);
}
var Tm = [null];
function _n(r, l) {
  this._groups = r, this._parents = l;
}
function ni() {
  return new _n([[document.documentElement]], Tm);
}
function zm() {
  return this;
}
_n.prototype = ni.prototype = {
  constructor: _n,
  select: n0,
  selectAll: l0,
  selectChild: a0,
  selectChildren: h0,
  filter: p0,
  data: x0,
  enter: m0,
  exit: N0,
  join: k0,
  merge: S0,
  selection: zm,
  order: E0,
  sort: C0,
  call: P0,
  nodes: T0,
  node: z0,
  size: R0,
  empty: B0,
  each: O0,
  attr: U0,
  style: Q0,
  property: K0,
  classed: J0,
  text: tm,
  html: um,
  raise: sm,
  lower: cm,
  append: fm,
  insert: hm,
  remove: mm,
  clone: ym,
  datum: wm,
  on: Sm,
  dispatch: Mm,
  [Symbol.iterator]: Pm
};
function ns(r, l, u) {
  r.prototype = l.prototype = u, u.constructor = r;
}
function td(r, l) {
  var u = Object.create(r.prototype);
  for (var a in l) u[a] = l[a];
  return u;
}
function ti() {
}
var Zr = 0.7, Sl = 1 / Zr, nr = "\\s*([+-]?\\d+)\\s*", Jr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", zn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Rm = /^#([0-9a-f]{3,8})$/, Bm = new RegExp(`^rgb\\(${nr},${nr},${nr}\\)$`), Om = new RegExp(`^rgb\\(${zn},${zn},${zn}\\)$`), Lm = new RegExp(`^rgba\\(${nr},${nr},${nr},${Jr}\\)$`), Am = new RegExp(`^rgba\\(${zn},${zn},${zn},${Jr}\\)$`), $m = new RegExp(`^hsl\\(${Jr},${zn},${zn}\\)$`), Fm = new RegExp(`^hsla\\(${Jr},${zn},${zn},${Jr}\\)$`), yf = {
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
ns(ti, Mt, {
  copy(r) {
    return Object.assign(new this.constructor(), this, r);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: wf,
  // Deprecated! Use color.formatHex.
  formatHex: wf,
  formatHex8: Dm,
  formatHsl: Im,
  formatRgb: xf,
  toString: xf
});
function wf() {
  return this.rgb().formatHex();
}
function Dm() {
  return this.rgb().formatHex8();
}
function Im() {
  return rd(this).formatHsl();
}
function xf() {
  return this.rgb().formatRgb();
}
function Mt(r) {
  var l, u;
  return r = (r + "").trim().toLowerCase(), (l = Rm.exec(r)) ? (u = l[1].length, l = parseInt(l[1], 16), u === 6 ? _f(l) : u === 3 ? new en(l >> 8 & 15 | l >> 4 & 240, l >> 4 & 15 | l & 240, (l & 15) << 4 | l & 15, 1) : u === 8 ? hl(l >> 24 & 255, l >> 16 & 255, l >> 8 & 255, (l & 255) / 255) : u === 4 ? hl(l >> 12 & 15 | l >> 8 & 240, l >> 8 & 15 | l >> 4 & 240, l >> 4 & 15 | l & 240, ((l & 15) << 4 | l & 15) / 255) : null) : (l = Bm.exec(r)) ? new en(l[1], l[2], l[3], 1) : (l = Om.exec(r)) ? new en(l[1] * 255 / 100, l[2] * 255 / 100, l[3] * 255 / 100, 1) : (l = Lm.exec(r)) ? hl(l[1], l[2], l[3], l[4]) : (l = Am.exec(r)) ? hl(l[1] * 255 / 100, l[2] * 255 / 100, l[3] * 255 / 100, l[4]) : (l = $m.exec(r)) ? Sf(l[1], l[2] / 100, l[3] / 100, 1) : (l = Fm.exec(r)) ? Sf(l[1], l[2] / 100, l[3] / 100, l[4]) : yf.hasOwnProperty(r) ? _f(yf[r]) : r === "transparent" ? new en(NaN, NaN, NaN, 0) : null;
}
function _f(r) {
  return new en(r >> 16 & 255, r >> 8 & 255, r & 255, 1);
}
function hl(r, l, u, a) {
  return a <= 0 && (r = l = u = NaN), new en(r, l, u, a);
}
function Um(r) {
  return r instanceof ti || (r = Mt(r)), r ? (r = r.rgb(), new en(r.r, r.g, r.b, r.opacity)) : new en();
}
function Ho(r, l, u, a) {
  return arguments.length === 1 ? Um(r) : new en(r, l, u, a ?? 1);
}
function en(r, l, u, a) {
  this.r = +r, this.g = +l, this.b = +u, this.opacity = +a;
}
ns(en, Ho, td(ti, {
  brighter(r) {
    return r = r == null ? Sl : Math.pow(Sl, r), new en(this.r * r, this.g * r, this.b * r, this.opacity);
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
  hex: Nf,
  // Deprecated! Use color.formatHex.
  formatHex: Nf,
  formatHex8: jm,
  formatRgb: kf,
  toString: kf
}));
function Nf() {
  return `#${Et(this.r)}${Et(this.g)}${Et(this.b)}`;
}
function jm() {
  return `#${Et(this.r)}${Et(this.g)}${Et(this.b)}${Et((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function kf() {
  const r = El(this.opacity);
  return `${r === 1 ? "rgb(" : "rgba("}${Ct(this.r)}, ${Ct(this.g)}, ${Ct(this.b)}${r === 1 ? ")" : `, ${r})`}`;
}
function El(r) {
  return isNaN(r) ? 1 : Math.max(0, Math.min(1, r));
}
function Ct(r) {
  return Math.max(0, Math.min(255, Math.round(r) || 0));
}
function Et(r) {
  return r = Ct(r), (r < 16 ? "0" : "") + r.toString(16);
}
function Sf(r, l, u, a) {
  return a <= 0 ? r = l = u = NaN : u <= 0 || u >= 1 ? r = l = NaN : l <= 0 && (r = NaN), new xn(r, l, u, a);
}
function rd(r) {
  if (r instanceof xn) return new xn(r.h, r.s, r.l, r.opacity);
  if (r instanceof ti || (r = Mt(r)), !r) return new xn();
  if (r instanceof xn) return r;
  r = r.rgb();
  var l = r.r / 255, u = r.g / 255, a = r.b / 255, c = Math.min(l, u, a), d = Math.max(l, u, a), h = NaN, p = d - c, g = (d + c) / 2;
  return p ? (l === d ? h = (u - a) / p + (u < a) * 6 : u === d ? h = (a - l) / p + 2 : h = (l - u) / p + 4, p /= g < 0.5 ? d + c : 2 - d - c, h *= 60) : p = g > 0 && g < 1 ? 0 : h, new xn(h, p, g, r.opacity);
}
function id(r, l, u, a) {
  return arguments.length === 1 ? rd(r) : new xn(r, l, u, a ?? 1);
}
function xn(r, l, u, a) {
  this.h = +r, this.s = +l, this.l = +u, this.opacity = +a;
}
ns(xn, id, td(ti, {
  brighter(r) {
    return r = r == null ? Sl : Math.pow(Sl, r), new xn(this.h, this.s, this.l * r, this.opacity);
  },
  darker(r) {
    return r = r == null ? Zr : Math.pow(Zr, r), new xn(this.h, this.s, this.l * r, this.opacity);
  },
  rgb() {
    var r = this.h % 360 + (this.h < 0) * 360, l = isNaN(r) || isNaN(this.s) ? 0 : this.s, u = this.l, a = u + (u < 0.5 ? u : 1 - u) * l, c = 2 * u - a;
    return new en(
      Fo(r >= 240 ? r - 240 : r + 120, c, a),
      Fo(r, c, a),
      Fo(r < 120 ? r + 240 : r - 120, c, a),
      this.opacity
    );
  },
  clamp() {
    return new xn(Ef(this.h), pl(this.s), pl(this.l), El(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const r = El(this.opacity);
    return `${r === 1 ? "hsl(" : "hsla("}${Ef(this.h)}, ${pl(this.s) * 100}%, ${pl(this.l) * 100}%${r === 1 ? ")" : `, ${r})`}`;
  }
}));
function Ef(r) {
  return r = (r || 0) % 360, r < 0 ? r + 360 : r;
}
function pl(r) {
  return Math.max(0, Math.min(1, r || 0));
}
function Fo(r, l, u) {
  return (r < 60 ? l + (u - l) * r / 60 : r < 180 ? u : r < 240 ? l + (u - l) * (240 - r) / 60 : l) * 255;
}
const ts = (r) => () => r;
function Vm(r, l) {
  return function(u) {
    return r + u * l;
  };
}
function Hm(r, l, u) {
  return r = Math.pow(r, u), l = Math.pow(l, u) - r, u = 1 / u, function(a) {
    return Math.pow(r + a * l, u);
  };
}
function Qm(r) {
  return (r = +r) == 1 ? ld : function(l, u) {
    return u - l ? Hm(l, u, r) : ts(isNaN(l) ? u : l);
  };
}
function ld(r, l) {
  var u = l - r;
  return u ? Vm(r, u) : ts(isNaN(r) ? l : r);
}
const Cl = (function r(l) {
  var u = Qm(l);
  function a(c, d) {
    var h = u((c = Ho(c)).r, (d = Ho(d)).r), p = u(c.g, d.g), g = u(c.b, d.b), m = ld(c.opacity, d.opacity);
    return function(y) {
      return c.r = h(y), c.g = p(y), c.b = g(y), c.opacity = m(y), c + "";
    };
  }
  return a.gamma = r, a;
})(1);
function Wm(r, l) {
  l || (l = []);
  var u = r ? Math.min(l.length, r.length) : 0, a = l.slice(), c;
  return function(d) {
    for (c = 0; c < u; ++c) a[c] = r[c] * (1 - d) + l[c] * d;
    return a;
  };
}
function Xm(r) {
  return ArrayBuffer.isView(r) && !(r instanceof DataView);
}
function Ym(r, l) {
  var u = l ? l.length : 0, a = r ? Math.min(u, r.length) : 0, c = new Array(a), d = new Array(u), h;
  for (h = 0; h < a; ++h) c[h] = rs(r[h], l[h]);
  for (; h < u; ++h) d[h] = l[h];
  return function(p) {
    for (h = 0; h < a; ++h) d[h] = c[h](p);
    return d;
  };
}
function Km(r, l) {
  var u = /* @__PURE__ */ new Date();
  return r = +r, l = +l, function(a) {
    return u.setTime(r * (1 - a) + l * a), u;
  };
}
function wn(r, l) {
  return r = +r, l = +l, function(u) {
    return r * (1 - u) + l * u;
  };
}
function Gm(r, l) {
  var u = {}, a = {}, c;
  (r === null || typeof r != "object") && (r = {}), (l === null || typeof l != "object") && (l = {});
  for (c in l)
    c in r ? u[c] = rs(r[c], l[c]) : a[c] = l[c];
  return function(d) {
    for (c in u) a[c] = u[c](d);
    return a;
  };
}
var Qo = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Do = new RegExp(Qo.source, "g");
function qm(r) {
  return function() {
    return r;
  };
}
function Zm(r) {
  return function(l) {
    return r(l) + "";
  };
}
function ud(r, l) {
  var u = Qo.lastIndex = Do.lastIndex = 0, a, c, d, h = -1, p = [], g = [];
  for (r = r + "", l = l + ""; (a = Qo.exec(r)) && (c = Do.exec(l)); )
    (d = c.index) > u && (d = l.slice(u, d), p[h] ? p[h] += d : p[++h] = d), (a = a[0]) === (c = c[0]) ? p[h] ? p[h] += c : p[++h] = c : (p[++h] = null, g.push({ i: h, x: wn(a, c) })), u = Do.lastIndex;
  return u < l.length && (d = l.slice(u), p[h] ? p[h] += d : p[++h] = d), p.length < 2 ? g[0] ? Zm(g[0].x) : qm(l) : (l = g.length, function(m) {
    for (var y = 0, S; y < l; ++y) p[(S = g[y]).i] = S.x(m);
    return p.join("");
  });
}
function rs(r, l) {
  var u = typeof l, a;
  return l == null || u === "boolean" ? ts(l) : (u === "number" ? wn : u === "string" ? (a = Mt(l)) ? (l = a, Cl) : ud : l instanceof Mt ? Cl : l instanceof Date ? Km : Xm(l) ? Wm : Array.isArray(l) ? Ym : typeof l.valueOf != "function" && typeof l.toString != "function" || isNaN(l) ? Gm : wn)(r, l);
}
function Jm(r, l) {
  return r = +r, l = +l, function(u) {
    return Math.round(r * (1 - u) + l * u);
  };
}
var Cf = 180 / Math.PI, Wo = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function od(r, l, u, a, c, d) {
  var h, p, g;
  return (h = Math.sqrt(r * r + l * l)) && (r /= h, l /= h), (g = r * u + l * a) && (u -= r * g, a -= l * g), (p = Math.sqrt(u * u + a * a)) && (u /= p, a /= p, g /= p), r * a < l * u && (r = -r, l = -l, g = -g, h = -h), {
    translateX: c,
    translateY: d,
    rotate: Math.atan2(l, r) * Cf,
    skewX: Math.atan(g) * Cf,
    scaleX: h,
    scaleY: p
  };
}
var ml;
function bm(r) {
  const l = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(r + "");
  return l.isIdentity ? Wo : od(l.a, l.b, l.c, l.d, l.e, l.f);
}
function e1(r) {
  return r == null || (ml || (ml = document.createElementNS("http://www.w3.org/2000/svg", "g")), ml.setAttribute("transform", r), !(r = ml.transform.baseVal.consolidate())) ? Wo : (r = r.matrix, od(r.a, r.b, r.c, r.d, r.e, r.f));
}
function sd(r, l, u, a) {
  function c(m) {
    return m.length ? m.pop() + " " : "";
  }
  function d(m, y, S, k, M, I) {
    if (m !== S || y !== k) {
      var $ = M.push("translate(", null, l, null, u);
      I.push({ i: $ - 4, x: wn(m, S) }, { i: $ - 2, x: wn(y, k) });
    } else (S || k) && M.push("translate(" + S + l + k + u);
  }
  function h(m, y, S, k) {
    m !== y ? (m - y > 180 ? y += 360 : y - m > 180 && (m += 360), k.push({ i: S.push(c(S) + "rotate(", null, a) - 2, x: wn(m, y) })) : y && S.push(c(S) + "rotate(" + y + a);
  }
  function p(m, y, S, k) {
    m !== y ? k.push({ i: S.push(c(S) + "skewX(", null, a) - 2, x: wn(m, y) }) : y && S.push(c(S) + "skewX(" + y + a);
  }
  function g(m, y, S, k, M, I) {
    if (m !== S || y !== k) {
      var $ = M.push(c(M) + "scale(", null, ",", null, ")");
      I.push({ i: $ - 4, x: wn(m, S) }, { i: $ - 2, x: wn(y, k) });
    } else (S !== 1 || k !== 1) && M.push(c(M) + "scale(" + S + "," + k + ")");
  }
  return function(m, y) {
    var S = [], k = [];
    return m = r(m), y = r(y), d(m.translateX, m.translateY, y.translateX, y.translateY, S, k), h(m.rotate, y.rotate, S, k), p(m.skewX, y.skewX, S, k), g(m.scaleX, m.scaleY, y.scaleX, y.scaleY, S, k), m = y = null, function(M) {
      for (var I = -1, $ = k.length, B; ++I < $; ) S[(B = k[I]).i] = B.x(M);
      return S.join("");
    };
  };
}
var n1 = sd(bm, "px, ", "px)", "deg)"), t1 = sd(e1, ", ", ")", ")"), rr = 0, Yr = 0, Wr = 0, ad = 1e3, Ml, Kr, Pl = 0, Pt = 0, $l = 0, br = typeof performance == "object" && performance.now ? performance : Date, cd = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(r) {
  setTimeout(r, 17);
};
function is() {
  return Pt || (cd(r1), Pt = br.now() + $l);
}
function r1() {
  Pt = 0;
}
function Tl() {
  this._call = this._time = this._next = null;
}
Tl.prototype = fd.prototype = {
  constructor: Tl,
  restart: function(r, l, u) {
    if (typeof r != "function") throw new TypeError("callback is not a function");
    u = (u == null ? is() : +u) + (l == null ? 0 : +l), !this._next && Kr !== this && (Kr ? Kr._next = this : Ml = this, Kr = this), this._call = r, this._time = u, Xo();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Xo());
  }
};
function fd(r, l, u) {
  var a = new Tl();
  return a.restart(r, l, u), a;
}
function i1() {
  is(), ++rr;
  for (var r = Ml, l; r; )
    (l = Pt - r._time) >= 0 && r._call.call(void 0, l), r = r._next;
  --rr;
}
function Mf() {
  Pt = (Pl = br.now()) + $l, rr = Yr = 0;
  try {
    i1();
  } finally {
    rr = 0, u1(), Pt = 0;
  }
}
function l1() {
  var r = br.now(), l = r - Pl;
  l > ad && ($l -= l, Pl = r);
}
function u1() {
  for (var r, l = Ml, u, a = 1 / 0; l; )
    l._call ? (a > l._time && (a = l._time), r = l, l = l._next) : (u = l._next, l._next = null, l = r ? r._next = u : Ml = u);
  Kr = r, Xo(a);
}
function Xo(r) {
  if (!rr) {
    Yr && (Yr = clearTimeout(Yr));
    var l = r - Pt;
    l > 24 ? (r < 1 / 0 && (Yr = setTimeout(Mf, r - br.now() - $l)), Wr && (Wr = clearInterval(Wr))) : (Wr || (Pl = br.now(), Wr = setInterval(l1, ad)), rr = 1, cd(Mf));
  }
}
function Pf(r, l, u) {
  var a = new Tl();
  return l = l == null ? 0 : +l, a.restart((c) => {
    a.stop(), r(c + l);
  }, l, u), a;
}
var o1 = Qf("start", "end", "cancel", "interrupt"), s1 = [], dd = 0, Tf = 1, Yo = 2, xl = 3, zf = 4, Ko = 5, _l = 6;
function Fl(r, l, u, a, c, d) {
  var h = r.__transition;
  if (!h) r.__transition = {};
  else if (u in h) return;
  a1(r, u, {
    name: l,
    index: a,
    // For context during callback.
    group: c,
    // For context during callback.
    on: o1,
    tween: s1,
    time: d.time,
    delay: d.delay,
    duration: d.duration,
    ease: d.ease,
    timer: null,
    state: dd
  });
}
function ls(r, l) {
  var u = Nn(r, l);
  if (u.state > dd) throw new Error("too late; already scheduled");
  return u;
}
function Rn(r, l) {
  var u = Nn(r, l);
  if (u.state > xl) throw new Error("too late; already running");
  return u;
}
function Nn(r, l) {
  var u = r.__transition;
  if (!u || !(u = u[l])) throw new Error("transition not found");
  return u;
}
function a1(r, l, u) {
  var a = r.__transition, c;
  a[l] = u, u.timer = fd(d, 0, u.time);
  function d(m) {
    u.state = Tf, u.timer.restart(h, u.delay, u.time), u.delay <= m && h(m - u.delay);
  }
  function h(m) {
    var y, S, k, M;
    if (u.state !== Tf) return g();
    for (y in a)
      if (M = a[y], M.name === u.name) {
        if (M.state === xl) return Pf(h);
        M.state === zf ? (M.state = _l, M.timer.stop(), M.on.call("interrupt", r, r.__data__, M.index, M.group), delete a[y]) : +y < l && (M.state = _l, M.timer.stop(), M.on.call("cancel", r, r.__data__, M.index, M.group), delete a[y]);
      }
    if (Pf(function() {
      u.state === xl && (u.state = zf, u.timer.restart(p, u.delay, u.time), p(m));
    }), u.state = Yo, u.on.call("start", r, r.__data__, u.index, u.group), u.state === Yo) {
      for (u.state = xl, c = new Array(k = u.tween.length), y = 0, S = -1; y < k; ++y)
        (M = u.tween[y].value.call(r, r.__data__, u.index, u.group)) && (c[++S] = M);
      c.length = S + 1;
    }
  }
  function p(m) {
    for (var y = m < u.duration ? u.ease.call(null, m / u.duration) : (u.timer.restart(g), u.state = Ko, 1), S = -1, k = c.length; ++S < k; )
      c[S].call(r, y);
    u.state === Ko && (u.on.call("end", r, r.__data__, u.index, u.group), g());
  }
  function g() {
    u.state = _l, u.timer.stop(), delete a[l];
    for (var m in a) return;
    delete r.__transition;
  }
}
function c1(r, l) {
  var u = r.__transition, a, c, d = !0, h;
  if (u) {
    l = l == null ? null : l + "";
    for (h in u) {
      if ((a = u[h]).name !== l) {
        d = !1;
        continue;
      }
      c = a.state > Yo && a.state < Ko, a.state = _l, a.timer.stop(), a.on.call(c ? "interrupt" : "cancel", r, r.__data__, a.index, a.group), delete u[h];
    }
    d && delete r.__transition;
  }
}
function f1(r) {
  return this.each(function() {
    c1(this, r);
  });
}
function d1(r, l) {
  var u, a;
  return function() {
    var c = Rn(this, r), d = c.tween;
    if (d !== u) {
      a = u = d;
      for (var h = 0, p = a.length; h < p; ++h)
        if (a[h].name === l) {
          a = a.slice(), a.splice(h, 1);
          break;
        }
    }
    c.tween = a;
  };
}
function h1(r, l, u) {
  var a, c;
  if (typeof u != "function") throw new Error();
  return function() {
    var d = Rn(this, r), h = d.tween;
    if (h !== a) {
      c = (a = h).slice();
      for (var p = { name: l, value: u }, g = 0, m = c.length; g < m; ++g)
        if (c[g].name === l) {
          c[g] = p;
          break;
        }
      g === m && c.push(p);
    }
    d.tween = c;
  };
}
function p1(r, l) {
  var u = this._id;
  if (r += "", arguments.length < 2) {
    for (var a = Nn(this.node(), u).tween, c = 0, d = a.length, h; c < d; ++c)
      if ((h = a[c]).name === r)
        return h.value;
    return null;
  }
  return this.each((l == null ? d1 : h1)(u, r, l));
}
function us(r, l, u) {
  var a = r._id;
  return r.each(function() {
    var c = Rn(this, a);
    (c.value || (c.value = {}))[l] = u.apply(this, arguments);
  }), function(c) {
    return Nn(c, a).value[l];
  };
}
function hd(r, l) {
  var u;
  return (typeof l == "number" ? wn : l instanceof Mt ? Cl : (u = Mt(l)) ? (l = u, Cl) : ud)(r, l);
}
function m1(r) {
  return function() {
    this.removeAttribute(r);
  };
}
function g1(r) {
  return function() {
    this.removeAttributeNS(r.space, r.local);
  };
}
function v1(r, l, u) {
  var a, c = u + "", d;
  return function() {
    var h = this.getAttribute(r);
    return h === c ? null : h === a ? d : d = l(a = h, u);
  };
}
function y1(r, l, u) {
  var a, c = u + "", d;
  return function() {
    var h = this.getAttributeNS(r.space, r.local);
    return h === c ? null : h === a ? d : d = l(a = h, u);
  };
}
function w1(r, l, u) {
  var a, c, d;
  return function() {
    var h, p = u(this), g;
    return p == null ? void this.removeAttribute(r) : (h = this.getAttribute(r), g = p + "", h === g ? null : h === a && g === c ? d : (c = g, d = l(a = h, p)));
  };
}
function x1(r, l, u) {
  var a, c, d;
  return function() {
    var h, p = u(this), g;
    return p == null ? void this.removeAttributeNS(r.space, r.local) : (h = this.getAttributeNS(r.space, r.local), g = p + "", h === g ? null : h === a && g === c ? d : (c = g, d = l(a = h, p)));
  };
}
function _1(r, l) {
  var u = Al(r), a = u === "transform" ? t1 : hd;
  return this.attrTween(r, typeof l == "function" ? (u.local ? x1 : w1)(u, a, us(this, "attr." + r, l)) : l == null ? (u.local ? g1 : m1)(u) : (u.local ? y1 : v1)(u, a, l));
}
function N1(r, l) {
  return function(u) {
    this.setAttribute(r, l.call(this, u));
  };
}
function k1(r, l) {
  return function(u) {
    this.setAttributeNS(r.space, r.local, l.call(this, u));
  };
}
function S1(r, l) {
  var u, a;
  function c() {
    var d = l.apply(this, arguments);
    return d !== a && (u = (a = d) && k1(r, d)), u;
  }
  return c._value = l, c;
}
function E1(r, l) {
  var u, a;
  function c() {
    var d = l.apply(this, arguments);
    return d !== a && (u = (a = d) && N1(r, d)), u;
  }
  return c._value = l, c;
}
function C1(r, l) {
  var u = "attr." + r;
  if (arguments.length < 2) return (u = this.tween(u)) && u._value;
  if (l == null) return this.tween(u, null);
  if (typeof l != "function") throw new Error();
  var a = Al(r);
  return this.tween(u, (a.local ? S1 : E1)(a, l));
}
function M1(r, l) {
  return function() {
    ls(this, r).delay = +l.apply(this, arguments);
  };
}
function P1(r, l) {
  return l = +l, function() {
    ls(this, r).delay = l;
  };
}
function T1(r) {
  var l = this._id;
  return arguments.length ? this.each((typeof r == "function" ? M1 : P1)(l, r)) : Nn(this.node(), l).delay;
}
function z1(r, l) {
  return function() {
    Rn(this, r).duration = +l.apply(this, arguments);
  };
}
function R1(r, l) {
  return l = +l, function() {
    Rn(this, r).duration = l;
  };
}
function B1(r) {
  var l = this._id;
  return arguments.length ? this.each((typeof r == "function" ? z1 : R1)(l, r)) : Nn(this.node(), l).duration;
}
function O1(r, l) {
  if (typeof l != "function") throw new Error();
  return function() {
    Rn(this, r).ease = l;
  };
}
function L1(r) {
  var l = this._id;
  return arguments.length ? this.each(O1(l, r)) : Nn(this.node(), l).ease;
}
function A1(r, l) {
  return function() {
    var u = l.apply(this, arguments);
    if (typeof u != "function") throw new Error();
    Rn(this, r).ease = u;
  };
}
function $1(r) {
  if (typeof r != "function") throw new Error();
  return this.each(A1(this._id, r));
}
function F1(r) {
  typeof r != "function" && (r = Yf(r));
  for (var l = this._groups, u = l.length, a = new Array(u), c = 0; c < u; ++c)
    for (var d = l[c], h = d.length, p = a[c] = [], g, m = 0; m < h; ++m)
      (g = d[m]) && r.call(g, g.__data__, m, d) && p.push(g);
  return new jn(a, this._parents, this._name, this._id);
}
function D1(r) {
  if (r._id !== this._id) throw new Error();
  for (var l = this._groups, u = r._groups, a = l.length, c = u.length, d = Math.min(a, c), h = new Array(a), p = 0; p < d; ++p)
    for (var g = l[p], m = u[p], y = g.length, S = h[p] = new Array(y), k, M = 0; M < y; ++M)
      (k = g[M] || m[M]) && (S[M] = k);
  for (; p < a; ++p)
    h[p] = l[p];
  return new jn(h, this._parents, this._name, this._id);
}
function I1(r) {
  return (r + "").trim().split(/^|\s+/).every(function(l) {
    var u = l.indexOf(".");
    return u >= 0 && (l = l.slice(0, u)), !l || l === "start";
  });
}
function U1(r, l, u) {
  var a, c, d = I1(l) ? ls : Rn;
  return function() {
    var h = d(this, r), p = h.on;
    p !== a && (c = (a = p).copy()).on(l, u), h.on = c;
  };
}
function j1(r, l) {
  var u = this._id;
  return arguments.length < 2 ? Nn(this.node(), u).on.on(r) : this.each(U1(u, r, l));
}
function V1(r) {
  return function() {
    var l = this.parentNode;
    for (var u in this.__transition) if (+u !== r) return;
    l && l.removeChild(this);
  };
}
function H1() {
  return this.on("end.remove", V1(this._id));
}
function Q1(r) {
  var l = this._name, u = this._id;
  typeof r != "function" && (r = bo(r));
  for (var a = this._groups, c = a.length, d = new Array(c), h = 0; h < c; ++h)
    for (var p = a[h], g = p.length, m = d[h] = new Array(g), y, S, k = 0; k < g; ++k)
      (y = p[k]) && (S = r.call(y, y.__data__, k, p)) && ("__data__" in y && (S.__data__ = y.__data__), m[k] = S, Fl(m[k], l, u, k, m, Nn(y, u)));
  return new jn(d, this._parents, l, u);
}
function W1(r) {
  var l = this._name, u = this._id;
  typeof r != "function" && (r = Xf(r));
  for (var a = this._groups, c = a.length, d = [], h = [], p = 0; p < c; ++p)
    for (var g = a[p], m = g.length, y, S = 0; S < m; ++S)
      if (y = g[S]) {
        for (var k = r.call(y, y.__data__, S, g), M, I = Nn(y, u), $ = 0, B = k.length; $ < B; ++$)
          (M = k[$]) && Fl(M, l, u, $, k, I);
        d.push(k), h.push(y);
      }
  return new jn(d, h, l, u);
}
var X1 = ni.prototype.constructor;
function Y1() {
  return new X1(this._groups, this._parents);
}
function K1(r, l) {
  var u, a, c;
  return function() {
    var d = tr(this, r), h = (this.style.removeProperty(r), tr(this, r));
    return d === h ? null : d === u && h === a ? c : c = l(u = d, a = h);
  };
}
function pd(r) {
  return function() {
    this.style.removeProperty(r);
  };
}
function G1(r, l, u) {
  var a, c = u + "", d;
  return function() {
    var h = tr(this, r);
    return h === c ? null : h === a ? d : d = l(a = h, u);
  };
}
function q1(r, l, u) {
  var a, c, d;
  return function() {
    var h = tr(this, r), p = u(this), g = p + "";
    return p == null && (g = p = (this.style.removeProperty(r), tr(this, r))), h === g ? null : h === a && g === c ? d : (c = g, d = l(a = h, p));
  };
}
function Z1(r, l) {
  var u, a, c, d = "style." + l, h = "end." + d, p;
  return function() {
    var g = Rn(this, r), m = g.on, y = g.value[d] == null ? p || (p = pd(l)) : void 0;
    (m !== u || c !== y) && (a = (u = m).copy()).on(h, c = y), g.on = a;
  };
}
function J1(r, l, u) {
  var a = (r += "") == "transform" ? n1 : hd;
  return l == null ? this.styleTween(r, K1(r, a)).on("end.style." + r, pd(r)) : typeof l == "function" ? this.styleTween(r, q1(r, a, us(this, "style." + r, l))).each(Z1(this._id, r)) : this.styleTween(r, G1(r, a, l), u).on("end.style." + r, null);
}
function b1(r, l, u) {
  return function(a) {
    this.style.setProperty(r, l.call(this, a), u);
  };
}
function eg(r, l, u) {
  var a, c;
  function d() {
    var h = l.apply(this, arguments);
    return h !== c && (a = (c = h) && b1(r, h, u)), a;
  }
  return d._value = l, d;
}
function ng(r, l, u) {
  var a = "style." + (r += "");
  if (arguments.length < 2) return (a = this.tween(a)) && a._value;
  if (l == null) return this.tween(a, null);
  if (typeof l != "function") throw new Error();
  return this.tween(a, eg(r, l, u ?? ""));
}
function tg(r) {
  return function() {
    this.textContent = r;
  };
}
function rg(r) {
  return function() {
    var l = r(this);
    this.textContent = l ?? "";
  };
}
function ig(r) {
  return this.tween("text", typeof r == "function" ? rg(us(this, "text", r)) : tg(r == null ? "" : r + ""));
}
function lg(r) {
  return function(l) {
    this.textContent = r.call(this, l);
  };
}
function ug(r) {
  var l, u;
  function a() {
    var c = r.apply(this, arguments);
    return c !== u && (l = (u = c) && lg(c)), l;
  }
  return a._value = r, a;
}
function og(r) {
  var l = "text";
  if (arguments.length < 1) return (l = this.tween(l)) && l._value;
  if (r == null) return this.tween(l, null);
  if (typeof r != "function") throw new Error();
  return this.tween(l, ug(r));
}
function sg() {
  for (var r = this._name, l = this._id, u = md(), a = this._groups, c = a.length, d = 0; d < c; ++d)
    for (var h = a[d], p = h.length, g, m = 0; m < p; ++m)
      if (g = h[m]) {
        var y = Nn(g, l);
        Fl(g, r, u, m, h, {
          time: y.time + y.delay + y.duration,
          delay: 0,
          duration: y.duration,
          ease: y.ease
        });
      }
  return new jn(a, this._parents, r, u);
}
function ag() {
  var r, l, u = this, a = u._id, c = u.size();
  return new Promise(function(d, h) {
    var p = { value: h }, g = { value: function() {
      --c === 0 && d();
    } };
    u.each(function() {
      var m = Rn(this, a), y = m.on;
      y !== r && (l = (r = y).copy(), l._.cancel.push(p), l._.interrupt.push(p), l._.end.push(g)), m.on = l;
    }), c === 0 && d();
  });
}
var cg = 0;
function jn(r, l, u, a) {
  this._groups = r, this._parents = l, this._name = u, this._id = a;
}
function md() {
  return ++cg;
}
var Un = ni.prototype;
jn.prototype = {
  constructor: jn,
  select: Q1,
  selectAll: W1,
  selectChild: Un.selectChild,
  selectChildren: Un.selectChildren,
  filter: F1,
  merge: D1,
  selection: Y1,
  transition: sg,
  call: Un.call,
  nodes: Un.nodes,
  node: Un.node,
  size: Un.size,
  empty: Un.empty,
  each: Un.each,
  on: j1,
  attr: _1,
  attrTween: C1,
  style: J1,
  styleTween: ng,
  text: ig,
  textTween: og,
  remove: H1,
  tween: p1,
  delay: T1,
  duration: B1,
  ease: L1,
  easeVarying: $1,
  end: ag,
  [Symbol.iterator]: Un[Symbol.iterator]
};
function fg(r) {
  return ((r *= 2) <= 1 ? r * r * r : (r -= 2) * r * r + 2) / 2;
}
var dg = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: fg
};
function hg(r, l) {
  for (var u; !(u = r.__transition) || !(u = u[l]); )
    if (!(r = r.parentNode))
      throw new Error(`transition ${l} not found`);
  return u;
}
function pg(r) {
  var l, u;
  r instanceof jn ? (l = r._id, r = r._name) : (l = md(), (u = dg).time = is(), r = r == null ? null : r + "");
  for (var a = this._groups, c = a.length, d = 0; d < c; ++d)
    for (var h = a[d], p = h.length, g, m = 0; m < p; ++m)
      (g = h[m]) && Fl(g, r, l, m, h, u || hg(g, l));
  return new jn(a, this._parents, r, l);
}
ni.prototype.interrupt = f1;
ni.prototype.transition = pg;
const Go = Math.PI, qo = 2 * Go, St = 1e-6, mg = qo - St;
function gd(r) {
  this._ += r[0];
  for (let l = 1, u = r.length; l < u; ++l)
    this._ += arguments[l] + r[l];
}
function gg(r) {
  let l = Math.floor(r);
  if (!(l >= 0)) throw new Error(`invalid digits: ${r}`);
  if (l > 15) return gd;
  const u = 10 ** l;
  return function(a) {
    this._ += a[0];
    for (let c = 1, d = a.length; c < d; ++c)
      this._ += Math.round(arguments[c] * u) / u + a[c];
  };
}
class vg {
  constructor(l) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = l == null ? gd : gg(l);
  }
  moveTo(l, u) {
    this._append`M${this._x0 = this._x1 = +l},${this._y0 = this._y1 = +u}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(l, u) {
    this._append`L${this._x1 = +l},${this._y1 = +u}`;
  }
  quadraticCurveTo(l, u, a, c) {
    this._append`Q${+l},${+u},${this._x1 = +a},${this._y1 = +c}`;
  }
  bezierCurveTo(l, u, a, c, d, h) {
    this._append`C${+l},${+u},${+a},${+c},${this._x1 = +d},${this._y1 = +h}`;
  }
  arcTo(l, u, a, c, d) {
    if (l = +l, u = +u, a = +a, c = +c, d = +d, d < 0) throw new Error(`negative radius: ${d}`);
    let h = this._x1, p = this._y1, g = a - l, m = c - u, y = h - l, S = p - u, k = y * y + S * S;
    if (this._x1 === null)
      this._append`M${this._x1 = l},${this._y1 = u}`;
    else if (k > St) if (!(Math.abs(S * g - m * y) > St) || !d)
      this._append`L${this._x1 = l},${this._y1 = u}`;
    else {
      let M = a - h, I = c - p, $ = g * g + m * m, B = M * M + I * I, j = Math.sqrt($), K = Math.sqrt(k), ee = d * Math.tan((Go - Math.acos(($ + k - B) / (2 * j * K))) / 2), Z = ee / K, oe = ee / j;
      Math.abs(Z - 1) > St && this._append`L${l + Z * y},${u + Z * S}`, this._append`A${d},${d},0,0,${+(S * M > y * I)},${this._x1 = l + oe * g},${this._y1 = u + oe * m}`;
    }
  }
  arc(l, u, a, c, d, h) {
    if (l = +l, u = +u, a = +a, h = !!h, a < 0) throw new Error(`negative radius: ${a}`);
    let p = a * Math.cos(c), g = a * Math.sin(c), m = l + p, y = u + g, S = 1 ^ h, k = h ? c - d : d - c;
    this._x1 === null ? this._append`M${m},${y}` : (Math.abs(this._x1 - m) > St || Math.abs(this._y1 - y) > St) && this._append`L${m},${y}`, a && (k < 0 && (k = k % qo + qo), k > mg ? this._append`A${a},${a},0,1,${S},${l - p},${u - g}A${a},${a},0,1,${S},${this._x1 = m},${this._y1 = y}` : k > St && this._append`A${a},${a},0,${+(k >= Go)},${S},${this._x1 = l + a * Math.cos(d)},${this._y1 = u + a * Math.sin(d)}`);
  }
  rect(l, u, a, c) {
    this._append`M${this._x0 = this._x1 = +l},${this._y0 = this._y1 = +u}h${a = +a}v${+c}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function yg(r) {
  return Math.abs(r = Math.round(r)) >= 1e21 ? r.toLocaleString("en").replace(/,/g, "") : r.toString(10);
}
function zl(r, l) {
  if (!isFinite(r) || r === 0) return null;
  var u = (r = l ? r.toExponential(l - 1) : r.toExponential()).indexOf("e"), a = r.slice(0, u);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +r.slice(u + 1)
  ];
}
function ir(r) {
  return r = zl(Math.abs(r)), r ? r[1] : NaN;
}
function wg(r, l) {
  return function(u, a) {
    for (var c = u.length, d = [], h = 0, p = r[0], g = 0; c > 0 && p > 0 && (g + p + 1 > a && (p = Math.max(1, a - g)), d.push(u.substring(c -= p, c + p)), !((g += p + 1) > a)); )
      p = r[h = (h + 1) % r.length];
    return d.reverse().join(l);
  };
}
function xg(r) {
  return function(l) {
    return l.replace(/[0-9]/g, function(u) {
      return r[+u];
    });
  };
}
var _g = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Rl(r) {
  if (!(l = _g.exec(r))) throw new Error("invalid format: " + r);
  var l;
  return new os({
    fill: l[1],
    align: l[2],
    sign: l[3],
    symbol: l[4],
    zero: l[5],
    width: l[6],
    comma: l[7],
    precision: l[8] && l[8].slice(1),
    trim: l[9],
    type: l[10]
  });
}
Rl.prototype = os.prototype;
function os(r) {
  this.fill = r.fill === void 0 ? " " : r.fill + "", this.align = r.align === void 0 ? ">" : r.align + "", this.sign = r.sign === void 0 ? "-" : r.sign + "", this.symbol = r.symbol === void 0 ? "" : r.symbol + "", this.zero = !!r.zero, this.width = r.width === void 0 ? void 0 : +r.width, this.comma = !!r.comma, this.precision = r.precision === void 0 ? void 0 : +r.precision, this.trim = !!r.trim, this.type = r.type === void 0 ? "" : r.type + "";
}
os.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Ng(r) {
  e: for (var l = r.length, u = 1, a = -1, c; u < l; ++u)
    switch (r[u]) {
      case ".":
        a = c = u;
        break;
      case "0":
        a === 0 && (a = u), c = u;
        break;
      default:
        if (!+r[u]) break e;
        a > 0 && (a = 0);
        break;
    }
  return a > 0 ? r.slice(0, a) + r.slice(c + 1) : r;
}
var Bl;
function kg(r, l) {
  var u = zl(r, l);
  if (!u) return Bl = void 0, r.toPrecision(l);
  var a = u[0], c = u[1], d = c - (Bl = Math.max(-8, Math.min(8, Math.floor(c / 3))) * 3) + 1, h = a.length;
  return d === h ? a : d > h ? a + new Array(d - h + 1).join("0") : d > 0 ? a.slice(0, d) + "." + a.slice(d) : "0." + new Array(1 - d).join("0") + zl(r, Math.max(0, l + d - 1))[0];
}
function Rf(r, l) {
  var u = zl(r, l);
  if (!u) return r + "";
  var a = u[0], c = u[1];
  return c < 0 ? "0." + new Array(-c).join("0") + a : a.length > c + 1 ? a.slice(0, c + 1) + "." + a.slice(c + 1) : a + new Array(c - a.length + 2).join("0");
}
const Bf = {
  "%": (r, l) => (r * 100).toFixed(l),
  b: (r) => Math.round(r).toString(2),
  c: (r) => r + "",
  d: yg,
  e: (r, l) => r.toExponential(l),
  f: (r, l) => r.toFixed(l),
  g: (r, l) => r.toPrecision(l),
  o: (r) => Math.round(r).toString(8),
  p: (r, l) => Rf(r * 100, l),
  r: Rf,
  s: kg,
  X: (r) => Math.round(r).toString(16).toUpperCase(),
  x: (r) => Math.round(r).toString(16)
};
function Of(r) {
  return r;
}
var Lf = Array.prototype.map, Af = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Sg(r) {
  var l = r.grouping === void 0 || r.thousands === void 0 ? Of : wg(Lf.call(r.grouping, Number), r.thousands + ""), u = r.currency === void 0 ? "" : r.currency[0] + "", a = r.currency === void 0 ? "" : r.currency[1] + "", c = r.decimal === void 0 ? "." : r.decimal + "", d = r.numerals === void 0 ? Of : xg(Lf.call(r.numerals, String)), h = r.percent === void 0 ? "%" : r.percent + "", p = r.minus === void 0 ? "−" : r.minus + "", g = r.nan === void 0 ? "NaN" : r.nan + "";
  function m(S, k) {
    S = Rl(S);
    var M = S.fill, I = S.align, $ = S.sign, B = S.symbol, j = S.zero, K = S.width, ee = S.comma, Z = S.precision, oe = S.trim, re = S.type;
    re === "n" ? (ee = !0, re = "g") : Bf[re] || (Z === void 0 && (Z = 12), oe = !0, re = "g"), (j || M === "0" && I === "=") && (j = !0, M = "0", I = "=");
    var ge = (k && k.prefix !== void 0 ? k.prefix : "") + (B === "$" ? u : B === "#" && /[boxX]/.test(re) ? "0" + re.toLowerCase() : ""), _e = (B === "$" ? a : /[%p]/.test(re) ? h : "") + (k && k.suffix !== void 0 ? k.suffix : ""), ze = Bf[re], Ee = /[defgprs%]/.test(re);
    Z = Z === void 0 ? 6 : /[gprs]/.test(re) ? Math.max(1, Math.min(21, Z)) : Math.max(0, Math.min(20, Z));
    function Ne(X) {
      var V = ge, Y = _e, ve, Ce, ue;
      if (re === "c")
        Y = ze(X) + Y, X = "";
      else {
        X = +X;
        var L = X < 0 || 1 / X < 0;
        if (X = isNaN(X) ? g : ze(Math.abs(X), Z), oe && (X = Ng(X)), L && +X == 0 && $ !== "+" && (L = !1), V = (L ? $ === "(" ? $ : p : $ === "-" || $ === "(" ? "" : $) + V, Y = (re === "s" && !isNaN(X) && Bl !== void 0 ? Af[8 + Bl / 3] : "") + Y + (L && $ === "(" ? ")" : ""), Ee) {
          for (ve = -1, Ce = X.length; ++ve < Ce; )
            if (ue = X.charCodeAt(ve), 48 > ue || ue > 57) {
              Y = (ue === 46 ? c + X.slice(ve + 1) : X.slice(ve)) + Y, X = X.slice(0, ve);
              break;
            }
        }
      }
      ee && !j && (X = l(X, 1 / 0));
      var W = V.length + X.length + Y.length, A = W < K ? new Array(K - W + 1).join(M) : "";
      switch (ee && j && (X = l(A + X, A.length ? K - Y.length : 1 / 0), A = ""), I) {
        case "<":
          X = V + X + Y + A;
          break;
        case "=":
          X = V + A + X + Y;
          break;
        case "^":
          X = A.slice(0, W = A.length >> 1) + V + X + Y + A.slice(W);
          break;
        default:
          X = A + V + X + Y;
          break;
      }
      return d(X);
    }
    return Ne.toString = function() {
      return S + "";
    }, Ne;
  }
  function y(S, k) {
    var M = Math.max(-8, Math.min(8, Math.floor(ir(k) / 3))) * 3, I = Math.pow(10, -M), $ = m((S = Rl(S), S.type = "f", S), { suffix: Af[8 + M / 3] });
    return function(B) {
      return $(I * B);
    };
  }
  return {
    format: m,
    formatPrefix: y
  };
}
var gl, vd, yd;
Eg({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Eg(r) {
  return gl = Sg(r), vd = gl.format, yd = gl.formatPrefix, gl;
}
function Cg(r) {
  return Math.max(0, -ir(Math.abs(r)));
}
function Mg(r, l) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(ir(l) / 3))) * 3 - ir(Math.abs(r)));
}
function Pg(r, l) {
  return r = Math.abs(r), l = Math.abs(l) - r, Math.max(0, ir(l) - ir(r)) + 1;
}
function Tg(r) {
  var l = 0, u = r.children, a = u && u.length;
  if (!a) l = 1;
  else for (; --a >= 0; ) l += u[a].value;
  r.value = l;
}
function zg() {
  return this.eachAfter(Tg);
}
function Rg(r, l) {
  let u = -1;
  for (const a of this)
    r.call(l, a, ++u, this);
  return this;
}
function Bg(r, l) {
  for (var u = this, a = [u], c, d, h = -1; u = a.pop(); )
    if (r.call(l, u, ++h, this), c = u.children)
      for (d = c.length - 1; d >= 0; --d)
        a.push(c[d]);
  return this;
}
function Og(r, l) {
  for (var u = this, a = [u], c = [], d, h, p, g = -1; u = a.pop(); )
    if (c.push(u), d = u.children)
      for (h = 0, p = d.length; h < p; ++h)
        a.push(d[h]);
  for (; u = c.pop(); )
    r.call(l, u, ++g, this);
  return this;
}
function Lg(r, l) {
  let u = -1;
  for (const a of this)
    if (r.call(l, a, ++u, this))
      return a;
}
function Ag(r) {
  return this.eachAfter(function(l) {
    for (var u = +r(l.data) || 0, a = l.children, c = a && a.length; --c >= 0; ) u += a[c].value;
    l.value = u;
  });
}
function $g(r) {
  return this.eachBefore(function(l) {
    l.children && l.children.sort(r);
  });
}
function Fg(r) {
  for (var l = this, u = Dg(l, r), a = [l]; l !== u; )
    l = l.parent, a.push(l);
  for (var c = a.length; r !== u; )
    a.splice(c, 0, r), r = r.parent;
  return a;
}
function Dg(r, l) {
  if (r === l) return r;
  var u = r.ancestors(), a = l.ancestors(), c = null;
  for (r = u.pop(), l = a.pop(); r === l; )
    c = r, r = u.pop(), l = a.pop();
  return c;
}
function Ig() {
  for (var r = this, l = [r]; r = r.parent; )
    l.push(r);
  return l;
}
function Ug() {
  return Array.from(this);
}
function jg() {
  var r = [];
  return this.eachBefore(function(l) {
    l.children || r.push(l);
  }), r;
}
function Vg() {
  var r = this, l = [];
  return r.each(function(u) {
    u !== r && l.push({ source: u.parent, target: u });
  }), l;
}
function* Hg() {
  var r = this, l, u = [r], a, c, d;
  do
    for (l = u.reverse(), u = []; r = l.pop(); )
      if (yield r, a = r.children)
        for (c = 0, d = a.length; c < d; ++c)
          u.push(a[c]);
  while (u.length);
}
function ss(r, l) {
  r instanceof Map ? (r = [void 0, r], l === void 0 && (l = Xg)) : l === void 0 && (l = Wg);
  for (var u = new Ol(r), a, c = [u], d, h, p, g; a = c.pop(); )
    if ((h = l(a.data)) && (g = (h = Array.from(h)).length))
      for (a.children = h, p = g - 1; p >= 0; --p)
        c.push(d = h[p] = new Ol(h[p])), d.parent = a, d.depth = a.depth + 1;
  return u.eachBefore(Kg);
}
function Qg() {
  return ss(this).eachBefore(Yg);
}
function Wg(r) {
  return r.children;
}
function Xg(r) {
  return Array.isArray(r) ? r[1] : null;
}
function Yg(r) {
  r.data.value !== void 0 && (r.value = r.data.value), r.data = r.data.data;
}
function Kg(r) {
  var l = 0;
  do
    r.height = l;
  while ((r = r.parent) && r.height < ++l);
}
function Ol(r) {
  this.data = r, this.depth = this.height = 0, this.parent = null;
}
Ol.prototype = ss.prototype = {
  constructor: Ol,
  count: zg,
  each: Rg,
  eachAfter: Og,
  eachBefore: Bg,
  find: Lg,
  sum: Ag,
  sort: $g,
  path: Fg,
  ancestors: Ig,
  descendants: Ug,
  leaves: jg,
  links: Vg,
  copy: Qg,
  [Symbol.iterator]: Hg
};
function Gg(r) {
  r.x0 = Math.round(r.x0), r.y0 = Math.round(r.y0), r.x1 = Math.round(r.x1), r.y1 = Math.round(r.y1);
}
function qg(r, l, u, a, c) {
  for (var d = r.children, h, p = -1, g = d.length, m = r.value && (a - l) / r.value; ++p < g; )
    h = d[p], h.y0 = u, h.y1 = c, h.x0 = l, h.x1 = l += h.value * m;
}
function Zg() {
  var r = 1, l = 1, u = 0, a = !1;
  function c(h) {
    var p = h.height + 1;
    return h.x0 = h.y0 = u, h.x1 = r, h.y1 = l / p, h.eachBefore(d(l, p)), a && h.eachBefore(Gg), h;
  }
  function d(h, p) {
    return function(g) {
      g.children && qg(g, g.x0, h * (g.depth + 1) / p, g.x1, h * (g.depth + 2) / p);
      var m = g.x0, y = g.y0, S = g.x1 - u, k = g.y1 - u;
      S < m && (m = S = (m + S) / 2), k < y && (y = k = (y + k) / 2), g.x0 = m, g.y0 = y, g.x1 = S, g.y1 = k;
    };
  }
  return c.round = function(h) {
    return arguments.length ? (a = !!h, c) : a;
  }, c.size = function(h) {
    return arguments.length ? (r = +h[0], l = +h[1], c) : [r, l];
  }, c.padding = function(h) {
    return arguments.length ? (u = +h, c) : u;
  }, c;
}
function as(r, l) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(r);
      break;
    default:
      this.range(l).domain(r);
      break;
  }
  return this;
}
const $f = Symbol("implicit");
function wd() {
  var r = new pf(), l = [], u = [], a = $f;
  function c(d) {
    let h = r.get(d);
    if (h === void 0) {
      if (a !== $f) return a;
      r.set(d, h = l.push(d) - 1);
    }
    return u[h % u.length];
  }
  return c.domain = function(d) {
    if (!arguments.length) return l.slice();
    l = [], r = new pf();
    for (const h of d)
      r.has(h) || r.set(h, l.push(h) - 1);
    return c;
  }, c.range = function(d) {
    return arguments.length ? (u = Array.from(d), c) : u.slice();
  }, c.unknown = function(d) {
    return arguments.length ? (a = d, c) : a;
  }, c.copy = function() {
    return wd(l, u).unknown(a);
  }, as.apply(c, arguments), c;
}
function Jg(r) {
  return function() {
    return r;
  };
}
function bg(r) {
  return +r;
}
var Ff = [0, 1];
function Tn(r) {
  return r;
}
function Zo(r, l) {
  return (l -= r = +r) ? function(u) {
    return (u - r) / l;
  } : Jg(isNaN(l) ? NaN : 0.5);
}
function ev(r, l) {
  var u;
  return r > l && (u = r, r = l, l = u), function(a) {
    return Math.max(r, Math.min(l, a));
  };
}
function nv(r, l, u) {
  var a = r[0], c = r[1], d = l[0], h = l[1];
  return c < a ? (a = Zo(c, a), d = u(h, d)) : (a = Zo(a, c), d = u(d, h)), function(p) {
    return d(a(p));
  };
}
function tv(r, l, u) {
  var a = Math.min(r.length, l.length) - 1, c = new Array(a), d = new Array(a), h = -1;
  for (r[a] < r[0] && (r = r.slice().reverse(), l = l.slice().reverse()); ++h < a; )
    c[h] = Zo(r[h], r[h + 1]), d[h] = u(l[h], l[h + 1]);
  return function(p) {
    var g = Up(r, p, 1, a) - 1;
    return d[g](c[g](p));
  };
}
function xd(r, l) {
  return l.domain(r.domain()).range(r.range()).interpolate(r.interpolate()).clamp(r.clamp()).unknown(r.unknown());
}
function _d() {
  var r = Ff, l = Ff, u = rs, a, c, d, h = Tn, p, g, m;
  function y() {
    var k = Math.min(r.length, l.length);
    return h !== Tn && (h = ev(r[0], r[k - 1])), p = k > 2 ? tv : nv, g = m = null, S;
  }
  function S(k) {
    return k == null || isNaN(k = +k) ? d : (g || (g = p(r.map(a), l, u)))(a(h(k)));
  }
  return S.invert = function(k) {
    return h(c((m || (m = p(l, r.map(a), wn)))(k)));
  }, S.domain = function(k) {
    return arguments.length ? (r = Array.from(k, bg), y()) : r.slice();
  }, S.range = function(k) {
    return arguments.length ? (l = Array.from(k), y()) : l.slice();
  }, S.rangeRound = function(k) {
    return l = Array.from(k), u = Jm, y();
  }, S.clamp = function(k) {
    return arguments.length ? (h = k ? !0 : Tn, y()) : h !== Tn;
  }, S.interpolate = function(k) {
    return arguments.length ? (u = k, y()) : u;
  }, S.unknown = function(k) {
    return arguments.length ? (d = k, S) : d;
  }, function(k, M) {
    return a = k, c = M, y();
  };
}
function rv() {
  return _d()(Tn, Tn);
}
function iv(r, l, u, a) {
  var c = Kp(r, l, u), d;
  switch (a = Rl(a ?? ",f"), a.type) {
    case "s": {
      var h = Math.max(Math.abs(r), Math.abs(l));
      return a.precision == null && !isNaN(d = Mg(c, h)) && (a.precision = d), yd(a, h);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(d = Pg(c, Math.max(Math.abs(r), Math.abs(l)))) && (a.precision = d - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(d = Cg(c)) && (a.precision = d - (a.type === "%") * 2);
      break;
    }
  }
  return vd(a);
}
function Nd(r) {
  var l = r.domain;
  return r.ticks = function(u) {
    var a = l();
    return Yp(a[0], a[a.length - 1], u ?? 10);
  }, r.tickFormat = function(u, a) {
    var c = l();
    return iv(c[0], c[c.length - 1], u ?? 10, a);
  }, r.nice = function(u) {
    u == null && (u = 10);
    var a = l(), c = 0, d = a.length - 1, h = a[c], p = a[d], g, m, y = 10;
    for (p < h && (m = h, h = p, p = m, m = c, c = d, d = m); y-- > 0; ) {
      if (m = jo(h, p, u), m === g)
        return a[c] = h, a[d] = p, l(a);
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
function kd() {
  var r = rv();
  return r.copy = function() {
    return xd(r, kd());
  }, as.apply(r, arguments), Nd(r);
}
function Df(r) {
  return function(l) {
    return l < 0 ? -Math.pow(-l, r) : Math.pow(l, r);
  };
}
function lv(r) {
  return r < 0 ? -Math.sqrt(-r) : Math.sqrt(r);
}
function uv(r) {
  return r < 0 ? -r * r : r * r;
}
function ov(r) {
  var l = r(Tn, Tn), u = 1;
  function a() {
    return u === 1 ? r(Tn, Tn) : u === 0.5 ? r(lv, uv) : r(Df(u), Df(1 / u));
  }
  return l.exponent = function(c) {
    return arguments.length ? (u = +c, a()) : u;
  }, Nd(l);
}
function Sd() {
  var r = ov(_d());
  return r.copy = function() {
    return xd(r, Sd()).exponent(r.exponent());
  }, as.apply(r, arguments), r;
}
function sv() {
  return Sd.apply(null, arguments).exponent(0.5);
}
function Ed(r) {
  for (var l = r.length / 6 | 0, u = new Array(l), a = 0; a < l; ) u[a] = "#" + r.slice(a * 6, ++a * 6);
  return u;
}
const av = Ed("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), cv = Ed("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function ot(r) {
  return function() {
    return r;
  };
}
const If = Math.abs, Qe = Math.atan2, kt = Math.cos, fv = Math.max, Io = Math.min, Pn = Math.sin, er = Math.sqrt, be = 1e-12, ei = Math.PI, Ll = ei / 2, dv = 2 * ei;
function hv(r) {
  return r > 1 ? 0 : r < -1 ? ei : Math.acos(r);
}
function Uf(r) {
  return r >= 1 ? Ll : r <= -1 ? -Ll : Math.asin(r);
}
function pv(r) {
  let l = 3;
  return r.digits = function(u) {
    if (!arguments.length) return l;
    if (u == null)
      l = null;
    else {
      const a = Math.floor(u);
      if (!(a >= 0)) throw new RangeError(`invalid digits: ${u}`);
      l = a;
    }
    return r;
  }, () => new vg(l);
}
function mv(r) {
  return r.innerRadius;
}
function gv(r) {
  return r.outerRadius;
}
function vv(r) {
  return r.startAngle;
}
function yv(r) {
  return r.endAngle;
}
function wv(r) {
  return r && r.padAngle;
}
function xv(r, l, u, a, c, d, h, p) {
  var g = u - r, m = a - l, y = h - c, S = p - d, k = S * g - y * m;
  if (!(k * k < be))
    return k = (y * (l - d) - S * (r - c)) / k, [r + k * g, l + k * m];
}
function vl(r, l, u, a, c, d, h) {
  var p = r - u, g = l - a, m = (h ? d : -d) / er(p * p + g * g), y = m * g, S = -m * p, k = r + y, M = l + S, I = u + y, $ = a + S, B = (k + I) / 2, j = (M + $) / 2, K = I - k, ee = $ - M, Z = K * K + ee * ee, oe = c - d, re = k * $ - I * M, ge = (ee < 0 ? -1 : 1) * er(fv(0, oe * oe * Z - re * re)), _e = (re * ee - K * ge) / Z, ze = (-re * K - ee * ge) / Z, Ee = (re * ee + K * ge) / Z, Ne = (-re * K + ee * ge) / Z, X = _e - B, V = ze - j, Y = Ee - B, ve = Ne - j;
  return X * X + V * V > Y * Y + ve * ve && (_e = Ee, ze = Ne), {
    cx: _e,
    cy: ze,
    x01: -y,
    y01: -S,
    x11: _e * (c / oe - 1),
    y11: ze * (c / oe - 1)
  };
}
function _v() {
  var r = mv, l = gv, u = ot(0), a = null, c = vv, d = yv, h = wv, p = null, g = pv(m);
  function m() {
    var y, S, k = +r.apply(this, arguments), M = +l.apply(this, arguments), I = c.apply(this, arguments) - Ll, $ = d.apply(this, arguments) - Ll, B = If($ - I), j = $ > I;
    if (p || (p = y = g()), M < k && (S = M, M = k, k = S), !(M > be)) p.moveTo(0, 0);
    else if (B > dv - be)
      p.moveTo(M * kt(I), M * Pn(I)), p.arc(0, 0, M, I, $, !j), k > be && (p.moveTo(k * kt($), k * Pn($)), p.arc(0, 0, k, $, I, j));
    else {
      var K = I, ee = $, Z = I, oe = $, re = B, ge = B, _e = h.apply(this, arguments) / 2, ze = _e > be && (a ? +a.apply(this, arguments) : er(k * k + M * M)), Ee = Io(If(M - k) / 2, +u.apply(this, arguments)), Ne = Ee, X = Ee, V, Y;
      if (ze > be) {
        var ve = Uf(ze / k * Pn(_e)), Ce = Uf(ze / M * Pn(_e));
        (re -= ve * 2) > be ? (ve *= j ? 1 : -1, Z += ve, oe -= ve) : (re = 0, Z = oe = (I + $) / 2), (ge -= Ce * 2) > be ? (Ce *= j ? 1 : -1, K += Ce, ee -= Ce) : (ge = 0, K = ee = (I + $) / 2);
      }
      var ue = M * kt(K), L = M * Pn(K), W = k * kt(oe), A = k * Pn(oe);
      if (Ee > be) {
        var _ = M * kt(ee), P = M * Pn(ee), b = k * kt(Z), te = k * Pn(Z), ne;
        if (B < ei)
          if (ne = xv(ue, L, b, te, _, P, W, A)) {
            var le = ue - ne[0], fe = L - ne[1], se = _ - ne[0], he = P - ne[1], Ie = 1 / Pn(hv((le * se + fe * he) / (er(le * le + fe * fe) * er(se * se + he * he))) / 2), at = er(ne[0] * ne[0] + ne[1] * ne[1]);
            Ne = Io(Ee, (k - at) / (Ie - 1)), X = Io(Ee, (M - at) / (Ie + 1));
          } else
            Ne = X = 0;
      }
      ge > be ? X > be ? (V = vl(b, te, ue, L, M, X, j), Y = vl(_, P, W, A, M, X, j), p.moveTo(V.cx + V.x01, V.cy + V.y01), X < Ee ? p.arc(V.cx, V.cy, X, Qe(V.y01, V.x01), Qe(Y.y01, Y.x01), !j) : (p.arc(V.cx, V.cy, X, Qe(V.y01, V.x01), Qe(V.y11, V.x11), !j), p.arc(0, 0, M, Qe(V.cy + V.y11, V.cx + V.x11), Qe(Y.cy + Y.y11, Y.cx + Y.x11), !j), p.arc(Y.cx, Y.cy, X, Qe(Y.y11, Y.x11), Qe(Y.y01, Y.x01), !j))) : (p.moveTo(ue, L), p.arc(0, 0, M, K, ee, !j)) : p.moveTo(ue, L), !(k > be) || !(re > be) ? p.lineTo(W, A) : Ne > be ? (V = vl(W, A, _, P, k, -Ne, j), Y = vl(ue, L, b, te, k, -Ne, j), p.lineTo(V.cx + V.x01, V.cy + V.y01), Ne < Ee ? p.arc(V.cx, V.cy, Ne, Qe(V.y01, V.x01), Qe(Y.y01, Y.x01), !j) : (p.arc(V.cx, V.cy, Ne, Qe(V.y01, V.x01), Qe(V.y11, V.x11), !j), p.arc(0, 0, k, Qe(V.cy + V.y11, V.cx + V.x11), Qe(Y.cy + Y.y11, Y.cx + Y.x11), j), p.arc(Y.cx, Y.cy, Ne, Qe(Y.y11, Y.x11), Qe(Y.y01, Y.x01), !j))) : p.arc(0, 0, k, oe, Z, j);
    }
    if (p.closePath(), y) return p = null, y + "" || null;
  }
  return m.centroid = function() {
    var y = (+r.apply(this, arguments) + +l.apply(this, arguments)) / 2, S = (+c.apply(this, arguments) + +d.apply(this, arguments)) / 2 - ei / 2;
    return [kt(S) * y, Pn(S) * y];
  }, m.innerRadius = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : ot(+y), m) : r;
  }, m.outerRadius = function(y) {
    return arguments.length ? (l = typeof y == "function" ? y : ot(+y), m) : l;
  }, m.cornerRadius = function(y) {
    return arguments.length ? (u = typeof y == "function" ? y : ot(+y), m) : u;
  }, m.padRadius = function(y) {
    return arguments.length ? (a = y == null ? null : typeof y == "function" ? y : ot(+y), m) : a;
  }, m.startAngle = function(y) {
    return arguments.length ? (c = typeof y == "function" ? y : ot(+y), m) : c;
  }, m.endAngle = function(y) {
    return arguments.length ? (d = typeof y == "function" ? y : ot(+y), m) : d;
  }, m.padAngle = function(y) {
    return arguments.length ? (h = typeof y == "function" ? y : ot(+y), m) : h;
  }, m.context = function(y) {
    return arguments.length ? (p = y ?? null, m) : p;
  }, m;
}
function Gr(r, l, u) {
  this.k = r, this.x = l, this.y = u;
}
Gr.prototype = {
  constructor: Gr,
  scale: function(r) {
    return r === 1 ? this : new Gr(this.k * r, this.x, this.y);
  },
  translate: function(r, l) {
    return r === 0 & l === 0 ? this : new Gr(this.k, this.x + this.k * r, this.y + this.k * l);
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
Gr.prototype;
function Nv(r) {
  switch (r.stroke) {
    case "white":
      return { stroke: "#fff", width: r.strokeWidth ?? 0.5, paintOrder: "normal" };
    case "black-hairline":
      return { stroke: "#000", width: r.strokeWidth ?? 0.1, paintOrder: "stroke" };
    default:
      return { stroke: "none", width: 0, paintOrder: "stroke" };
  }
}
function kv(r) {
  let l = r;
  for (; l.depth > 1 && l.parent; ) l = l.parent;
  return l;
}
function Uo({ data: r, knobs: l, crop: u, highlight: a, className: c }) {
  const { width: d, hole: h } = l, p = st.useMemo(() => {
    const B = ss(r, (j) => j.children);
    return l.sum === "leaves" ? B.sum((j) => j.children.length ? 0 : j.count) : B.eachAfter((j) => {
      j.value = j.data.count;
    }), l.sort ? B.sort((j, K) => K.height - j.height || (K.value ?? 0) - (j.value ?? 0)) : B.sort(() => 0), Zg().size([2 * Math.PI, d / 2 - h])(B);
  }, [r, l.sum, l.sort, d, h]), g = st.useMemo(() => {
    const B = [0, d / 2], j = [0, d / 2];
    return l.radius === "sqrt" ? sv(B, j) : kd(B, j);
  }, [l.radius, d]), m = st.useMemo(
    () => wd(l.palette === "tableau10" ? cv : av),
    [l.palette]
  ), y = st.useMemo(
    () => _v().startAngle((B) => B.x0).endAngle((B) => B.x1).padAngle(
      (B) => l.padAngle ? Math.min((B.x1 - B.x0) / 2, l.padAngle) : 0
    ).padRadius(d / 4).innerRadius((B) => g(B.y0)).outerRadius((B) => g(Math.max(B.y0, B.y1 - l.ringGap))),
    [l.padAngle, l.ringGap, g, d]
  ), S = p.descendants().filter((B) => {
    if (!B.depth) return !1;
    const j = B.x1 - B.x0, K = l.thresholdUnit === "fraction" ? l.nodeThreshold * 2 * Math.PI : l.nodeThreshold;
    return j > K;
  }), k = l.showSan ? S.filter((B) => {
    const j = B.x1 - B.x0, K = l.thresholdUnit === "fraction" ? l.sanThreshold * 2 * Math.PI : l.sanThreshold;
    return j > K;
  }) : [], M = g(p.y1), I = Nv(l), $ = u ? `${u.x} ${u.y} ${u.size} ${u.size}` : `${-d / 2} ${-d / 2} ${d} ${d}`;
  return /* @__PURE__ */ pe.jsxs(
    "svg",
    {
      viewBox: $,
      role: "img",
      className: c ?? "openings-sunburst",
      children: [
        /* @__PURE__ */ pe.jsxs("g", { children: [
          S.map((B) => {
            const j = m(kv(B).data.san);
            let K = id(j).brighter(0.2);
            K = B.depth % 2 === 0 ? K.darker(0.5) : K.brighter(0.5), K = K.darker(B.depth * l.depthFade);
            const ee = B.ancestors().map((Z) => Z.data.san).join(" ");
            return /* @__PURE__ */ pe.jsx(
              "path",
              {
                d: y(B) ?? void 0,
                fill: K.toString(),
                stroke: I.stroke,
                strokeWidth: I.width,
                paintOrder: I.paintOrder
              },
              ee
            );
          }),
          k.map((B) => {
            const j = (B.x0 + B.x1) / 2 * 180 / Math.PI, K = g((B.y0 + B.y1) / 2), ee = j - 90, Z = B.ancestors().map((oe) => oe.data.san).join(" ");
            return /* @__PURE__ */ pe.jsx(
              "text",
              {
                textAnchor: "middle",
                fontSize: l.width < 600 ? 10 : 12,
                fontFamily: "sans-serif",
                fill: "white",
                transform: `rotate(${ee}) translate(${K},0) rotate(${-ee})`,
                dy: "0.35em",
                children: B.data.san
              },
              Z
            );
          })
        ] }),
        l.center === "board-disk" && M > 0 && /* @__PURE__ */ pe.jsx(
          "rect",
          {
            x: -M * 0.8,
            y: -M * 0.8,
            width: M * 1.6,
            height: M * 1.6,
            fill: "#c8a36a",
            stroke: "#5c4033",
            strokeWidth: 2
          }
        ),
        a && /* @__PURE__ */ pe.jsx(
          "rect",
          {
            x: a.x,
            y: a.y,
            width: a.size,
            height: a.size,
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
const Sv = 2197113, Ev = "start", Cv = /* @__PURE__ */ JSON.parse('[{"count":1051522,"san":"e4","children":[{"count":76139,"san":"c6","children":[{"count":61565,"san":"d4","children":[{"count":59388,"san":"d5","children":[{"count":18428,"san":"Nc3","children":[{"count":17125,"san":"dxe4","children":[{"count":16947,"san":"Nxe4","children":[{"count":4655,"san":"Nd7","children":[]},{"count":8734,"san":"Bf5","children":[{"count":8288,"san":"Ng3","children":[{"count":8258,"san":"Bg6","children":[]}]}]},{"count":3439,"san":"Nf6","children":[{"count":2926,"san":"Nxf6+","children":[]}]}]}]}]},{"count":15596,"san":"exd5","children":[{"count":15489,"san":"cxd5","children":[{"count":9801,"san":"c4","children":[{"count":9213,"san":"Nf6","children":[{"count":8908,"san":"Nc3","children":[{"count":4807,"san":"e6","children":[]},{"count":2347,"san":"Nc6","children":[]}]}]}]},{"count":4527,"san":"Bd3","children":[{"count":3578,"san":"Nc6","children":[{"count":3427,"san":"c3","children":[]}]}]}]}]},{"count":14661,"san":"e5","children":[{"count":12384,"san":"Bf5","children":[{"count":2831,"san":"Nc3","children":[]},{"count":4227,"san":"Nf3","children":[{"count":4174,"san":"e6","children":[{"count":3614,"san":"Be2","children":[]}]}]}]}]},{"count":8683,"san":"Nd2","children":[{"count":8068,"san":"dxe4","children":[{"count":8068,"san":"Nxe4","children":[{"count":3901,"san":"Bf5","children":[{"count":3653,"san":"Ng3","children":[{"count":3645,"san":"Bg6","children":[]}]}]},{"count":2568,"san":"Nd7","children":[]}]}]}]}]}]},{"count":5057,"san":"Nc3","children":[{"count":4851,"san":"d5","children":[{"count":3437,"san":"Nf3","children":[]}]}]},{"count":2679,"san":"d3","children":[{"count":2342,"san":"d5","children":[{"count":2235,"san":"Nd2","children":[]}]}]},{"count":4019,"san":"c4","children":[{"count":3112,"san":"d5","children":[]}]}]},{"count":26044,"san":"Nf6","children":[{"count":20284,"san":"e5","children":[{"count":20075,"san":"Nd5","children":[{"count":2846,"san":"c4","children":[{"count":2833,"san":"Nb6","children":[]}]},{"count":15585,"san":"d4","children":[{"count":15304,"san":"d6","children":[{"count":9446,"san":"Nf3","children":[{"count":4140,"san":"Bg4","children":[{"count":3800,"san":"Be2","children":[]}]},{"count":2308,"san":"g6","children":[]}]},{"count":4660,"san":"c4","children":[{"count":4655,"san":"Nb6","children":[{"count":2906,"san":"exd6","children":[]}]}]}]}]}]}]},{"count":4895,"san":"Nc3","children":[{"count":3452,"san":"d5","children":[]}]}]},{"count":32751,"san":"g6","children":[{"count":30215,"san":"d4","children":[{"count":26550,"san":"Bg7","children":[{"count":16645,"san":"Nc3","children":[{"count":10447,"san":"d6","children":[{"count":3607,"san":"Be3","children":[]},{"count":3208,"san":"f4","children":[]}]},{"count":4892,"san":"c6","children":[]}]},{"count":5031,"san":"Nf3","children":[{"count":3971,"san":"d6","children":[]}]}]}]}]},{"count":141803,"san":"e6","children":[{"count":121855,"san":"d4","children":[{"count":119291,"san":"d5","children":[{"count":16546,"san":"e5","children":[{"count":15692,"san":"c5","children":[{"count":13956,"san":"c3","children":[{"count":2927,"san":"Qb6","children":[{"count":2687,"san":"Nf3","children":[]}]},{"count":10267,"san":"Nc6","children":[{"count":9667,"san":"Nf3","children":[{"count":5009,"san":"Qb6","children":[]},{"count":3301,"san":"Bd7","children":[]}]}]}]}]}]},{"count":36966,"san":"Nd2","children":[{"count":10841,"san":"c5","children":[{"count":6523,"san":"exd5","children":[{"count":2996,"san":"Qxd5","children":[{"count":2656,"san":"Ngf3","children":[{"count":2520,"san":"cxd4","children":[]}]}]},{"count":3507,"san":"exd5","children":[{"count":2225,"san":"Ngf3","children":[]}]}]},{"count":3750,"san":"Ngf3","children":[]}]},{"count":14529,"san":"Nf6","children":[{"count":13602,"san":"e5","children":[{"count":13096,"san":"Nfd7","children":[{"count":2760,"san":"c3","children":[{"count":2714,"san":"c5","children":[]}]},{"count":2558,"san":"f4","children":[{"count":2525,"san":"c5","children":[]}]},{"count":7170,"san":"Bd3","children":[{"count":7002,"san":"c5","children":[]}]}]}]}]},{"count":3637,"san":"dxe4","children":[{"count":3636,"san":"Nxe4","children":[]}]},{"count":2717,"san":"Be7","children":[]},{"count":2785,"san":"Nc6","children":[{"count":2348,"san":"Ngf3","children":[{"count":2205,"san":"Nf6","children":[]}]}]}]},{"count":55239,"san":"Nc3","children":[{"count":28980,"san":"Bb4","children":[{"count":21760,"san":"e5","children":[{"count":15003,"san":"c5","children":[{"count":12468,"san":"a3","children":[{"count":10522,"san":"Bxc3+","children":[]}]}]},{"count":3857,"san":"Ne7","children":[{"count":2874,"san":"a3","children":[{"count":2844,"san":"Bxc3+","children":[]}]}]}]},{"count":2414,"san":"Ne2","children":[]}]},{"count":4799,"san":"dxe4","children":[{"count":4778,"san":"Nxe4","children":[{"count":2682,"san":"Nd7","children":[{"count":2239,"san":"Nf3","children":[]}]}]}]},{"count":19501,"san":"Nf6","children":[{"count":11416,"san":"Bg5","children":[{"count":4634,"san":"Be7","children":[{"count":4245,"san":"e5","children":[{"count":3941,"san":"Nfd7","children":[]}]}]},{"count":3110,"san":"Bb4","children":[{"count":2587,"san":"e5","children":[{"count":2575,"san":"h6","children":[]}]}]},{"count":3645,"san":"dxe4","children":[{"count":3555,"san":"Nxe4","children":[{"count":2389,"san":"Be7","children":[]}]}]}]},{"count":7366,"san":"e5","children":[{"count":7171,"san":"Nfd7","children":[{"count":5804,"san":"f4","children":[{"count":5715,"san":"c5","children":[]}]}]}]}]}]},{"count":9814,"san":"exd5","children":[{"count":9704,"san":"exd5","children":[{"count":3812,"san":"Nf3","children":[]},{"count":3927,"san":"Bd3","children":[]}]}]}]}]},{"count":9956,"san":"d3","children":[{"count":7838,"san":"d5","children":[{"count":6733,"san":"Nd2","children":[{"count":3780,"san":"Nf6","children":[{"count":3011,"san":"Ngf3","children":[]}]},{"count":2351,"san":"c5","children":[]}]}]}]},{"count":3976,"san":"Nf3","children":[{"count":3555,"san":"d5","children":[]}]}]},{"count":232240,"san":"e5","children":[{"count":196510,"san":"Nf3","children":[{"count":21653,"san":"Nf6","children":[{"count":3961,"san":"d4","children":[{"count":3083,"san":"Nxe4","children":[{"count":2611,"san":"Bd3","children":[{"count":2379,"san":"d5","children":[]}]}]}]},{"count":12396,"san":"Nxe5","children":[{"count":11916,"san":"d6","children":[{"count":11152,"san":"Nf3","children":[{"count":11141,"san":"Nxe4","children":[{"count":5954,"san":"d4","children":[{"count":5607,"san":"d5","children":[]}]},{"count":2372,"san":"Nc3","children":[]}]}]}]}]},{"count":4099,"san":"Nc3","children":[{"count":2454,"san":"Nc6","children":[]}]}]},{"count":161359,"san":"Nc6","children":[{"count":96748,"san":"Bb5","children":[{"count":69150,"san":"a6","children":[{"count":59965,"san":"Ba4","children":[{"count":51609,"san":"Nf6","children":[{"count":42751,"san":"O-O","children":[{"count":27842,"san":"Be7","children":[]},{"count":5553,"san":"Nxe4","children":[]},{"count":7592,"san":"b5","children":[]}]},{"count":3392,"san":"d3","children":[]},{"count":2272,"san":"Qe2","children":[]}]},{"count":5726,"san":"d6","children":[]}]},{"count":9108,"san":"Bxc6","children":[{"count":8892,"san":"dxc6","children":[{"count":6607,"san":"O-O","children":[{"count":2424,"san":"f6","children":[]}]}]}]}]},{"count":11935,"san":"Nf6","children":[{"count":8040,"san":"O-O","children":[{"count":5646,"san":"Nxe4","children":[{"count":4604,"san":"d4","children":[{"count":3534,"san":"Nd6","children":[]}]}]}]},{"count":2403,"san":"d3","children":[]}]},{"count":4754,"san":"f5","children":[{"count":2484,"san":"Nc3","children":[]}]},{"count":3274,"san":"Bc5","children":[]}]},{"count":30899,"san":"Bc4","children":[{"count":14179,"san":"Bc5","children":[{"count":2469,"san":"b4","children":[]},{"count":7221,"san":"c3","children":[{"count":6022,"san":"Nf6","children":[{"count":3433,"san":"d3","children":[]}]}]}]},{"count":13752,"san":"Nf6","children":[{"count":3692,"san":"Ng5","children":[{"count":3002,"san":"d5","children":[{"count":2995,"san":"exd5","children":[]}]}]},{"count":6725,"san":"d3","children":[{"count":3346,"san":"Be7","children":[{"count":2261,"san":"O-O","children":[]}]},{"count":2267,"san":"Bc5","children":[]}]}]}]},{"count":20255,"san":"d4","children":[{"count":19655,"san":"exd4","children":[{"count":14078,"san":"Nxd4","children":[{"count":6240,"san":"Bc5","children":[{"count":3089,"san":"Be3","children":[{"count":2704,"san":"Qf6","children":[]}]}]},{"count":5020,"san":"Nf6","children":[{"count":3879,"san":"Nxc6","children":[{"count":3859,"san":"bxc6","children":[]}]}]}]},{"count":4121,"san":"Bc4","children":[]}]}]},{"count":10555,"san":"Nc3","children":[{"count":8868,"san":"Nf6","children":[{"count":3205,"san":"d4","children":[{"count":2804,"san":"exd4","children":[{"count":2333,"san":"Nxd4","children":[]}]}]},{"count":3805,"san":"Bb5","children":[]}]}]}]},{"count":8457,"san":"d6","children":[{"count":6617,"san":"d4","children":[{"count":3375,"san":"exd4","children":[{"count":2746,"san":"Nxd4","children":[]}]}]}]},{"count":3261,"san":"f5","children":[]}]},{"count":11606,"san":"f4","children":[{"count":7144,"san":"exf4","children":[{"count":5477,"san":"Nf3","children":[]}]}]},{"count":3733,"san":"d4","children":[{"count":3474,"san":"exd4","children":[]}]},{"count":10391,"san":"Nc3","children":[{"count":2491,"san":"Nc6","children":[]},{"count":6670,"san":"Nf6","children":[{"count":2240,"san":"f4","children":[]}]}]},{"count":9145,"san":"Bc4","children":[{"count":6776,"san":"Nf6","children":[{"count":4990,"san":"d3","children":[]}]}]}]},{"count":454574,"san":"c5","children":[{"count":347334,"san":"Nf3","children":[{"count":86338,"san":"e6","children":[{"count":5707,"san":"c3","children":[{"count":2408,"san":"Nf6","children":[]},{"count":2831,"san":"d5","children":[]}]},{"count":63801,"san":"d4","children":[{"count":63631,"san":"cxd4","children":[{"count":63332,"san":"Nxd4","children":[{"count":17799,"san":"Nc6","children":[{"count":13811,"san":"Nc3","children":[{"count":8433,"san":"Qc7","children":[]},{"count":3174,"san":"a6","children":[]}]},{"count":2314,"san":"Nb5","children":[]}]},{"count":27159,"san":"a6","children":[{"count":12137,"san":"Bd3","children":[{"count":3505,"san":"Bc5","children":[]},{"count":4050,"san":"Nf6","children":[]}]},{"count":10329,"san":"Nc3","children":[{"count":6954,"san":"Qc7","children":[]},{"count":2318,"san":"b5","children":[]}]},{"count":2690,"san":"c4","children":[]}]},{"count":16965,"san":"Nf6","children":[{"count":15267,"san":"Nc3","children":[{"count":3869,"san":"Nc6","children":[]},{"count":10089,"san":"d6","children":[]}]}]}]}]}]},{"count":5983,"san":"Nc3","children":[{"count":2969,"san":"a6","children":[]}]},{"count":5197,"san":"d3","children":[{"count":3651,"san":"Nc6","children":[{"count":3268,"san":"g3","children":[]}]}]},{"count":2412,"san":"b3","children":[]}]},{"count":5084,"san":"a6","children":[]},{"count":101269,"san":"Nc6","children":[{"count":66796,"san":"d4","children":[{"count":66650,"san":"cxd4","children":[{"count":66252,"san":"Nxd4","children":[{"count":2966,"san":"Qc7","children":[{"count":2393,"san":"Nc3","children":[{"count":2345,"san":"e6","children":[]}]}]},{"count":34744,"san":"Nf6","children":[{"count":34505,"san":"Nc3","children":[{"count":15607,"san":"d6","children":[]},{"count":15141,"san":"e5","children":[]},{"count":2259,"san":"e6","children":[]}]}]},{"count":12770,"san":"g6","children":[{"count":5519,"san":"Nc3","children":[{"count":5493,"san":"Bg7","children":[]}]},{"count":5372,"san":"c4","children":[{"count":3276,"san":"Bg7","children":[]}]}]},{"count":2655,"san":"Qb6","children":[{"count":2387,"san":"Nb3","children":[{"count":2243,"san":"Nf6","children":[]}]}]},{"count":4375,"san":"e6","children":[{"count":3241,"san":"Nc3","children":[]}]},{"count":7286,"san":"e5","children":[{"count":6530,"san":"Nb5","children":[{"count":4937,"san":"d6","children":[]}]}]}]}]}]},{"count":19959,"san":"Bb5","children":[{"count":9813,"san":"g6","children":[{"count":3183,"san":"Bxc6","children":[{"count":2311,"san":"dxc6","children":[]}]},{"count":5984,"san":"O-O","children":[{"count":5898,"san":"Bg7","children":[{"count":2387,"san":"Re1","children":[]},{"count":2773,"san":"c3","children":[]}]}]}]},{"count":4363,"san":"e6","children":[{"count":2724,"san":"O-O","children":[{"count":2589,"san":"Nge7","children":[]}]}]},{"count":2844,"san":"d6","children":[]}]},{"count":3333,"san":"c3","children":[]},{"count":7777,"san":"Nc3","children":[]}]},{"count":143298,"san":"d6","children":[{"count":115393,"san":"d4","children":[{"count":110566,"san":"cxd4","children":[{"count":105461,"san":"Nxd4","children":[{"count":103951,"san":"Nf6","children":[{"count":101346,"san":"Nc3","children":[{"count":19599,"san":"g6","children":[]},{"count":58355,"san":"a6","children":[]},{"count":5860,"san":"e6","children":[]},{"count":16384,"san":"Nc6","children":[]}]}]}]},{"count":4815,"san":"Qxd4","children":[{"count":2718,"san":"Nc6","children":[{"count":2687,"san":"Bb5","children":[{"count":2349,"san":"Bd7","children":[]}]}]}]}]},{"count":4793,"san":"Nf6","children":[{"count":4510,"san":"Nc3","children":[{"count":4492,"san":"cxd4","children":[{"count":4299,"san":"Nxd4","children":[{"count":2303,"san":"a6","children":[]}]}]}]}]}]},{"count":13939,"san":"Bb5+","children":[{"count":8159,"san":"Bd7","children":[{"count":7599,"san":"Bxd7+","children":[{"count":5906,"san":"Qxd7","children":[{"count":3561,"san":"O-O","children":[{"count":2241,"san":"Nc6","children":[]}]},{"count":2213,"san":"c4","children":[]}]}]}]},{"count":3420,"san":"Nd7","children":[]},{"count":2357,"san":"Nc6","children":[]}]},{"count":6561,"san":"c3","children":[{"count":6135,"san":"Nf6","children":[{"count":2719,"san":"Be2","children":[]}]}]},{"count":2686,"san":"Nc3","children":[]}]},{"count":3192,"san":"Nf6","children":[]},{"count":7443,"san":"g6","children":[{"count":5272,"san":"d4","children":[{"count":3238,"san":"cxd4","children":[{"count":2555,"san":"Nxd4","children":[]}]}]}]}]},{"count":34855,"san":"c3","children":[{"count":12389,"san":"Nf6","children":[{"count":12095,"san":"e5","children":[{"count":12083,"san":"Nd5","children":[{"count":8765,"san":"d4","children":[{"count":8313,"san":"cxd4","children":[{"count":5153,"san":"Nf3","children":[{"count":2567,"san":"Nc6","children":[]}]}]}]},{"count":2674,"san":"Nf3","children":[]}]}]}]},{"count":12281,"san":"d5","children":[{"count":12053,"san":"exd5","children":[{"count":11889,"san":"Qxd5","children":[{"count":11376,"san":"d4","children":[{"count":5501,"san":"Nf6","children":[{"count":5205,"san":"Nf3","children":[{"count":2371,"san":"Bg4","children":[]}]}]},{"count":2250,"san":"Nc6","children":[]}]}]}]}]},{"count":3405,"san":"e6","children":[{"count":3033,"san":"d4","children":[{"count":2614,"san":"d5","children":[]}]}]},{"count":3198,"san":"d6","children":[{"count":3015,"san":"d4","children":[{"count":2304,"san":"Nf6","children":[]}]}]}]},{"count":45251,"san":"Nc3","children":[{"count":28009,"san":"Nc6","children":[{"count":6624,"san":"f4","children":[{"count":3959,"san":"g6","children":[{"count":3772,"san":"Nf3","children":[{"count":3748,"san":"Bg7","children":[]}]}]}]},{"count":12327,"san":"g3","children":[{"count":10949,"san":"g6","children":[{"count":10455,"san":"Bg2","children":[{"count":10370,"san":"Bg7","children":[{"count":8892,"san":"d3","children":[{"count":6087,"san":"d6","children":[]}]}]}]}]}]},{"count":2352,"san":"Nge2","children":[]},{"count":2776,"san":"Nf3","children":[]},{"count":3164,"san":"Bb5","children":[]}]},{"count":7137,"san":"e6","children":[{"count":2332,"san":"g3","children":[]}]},{"count":6425,"san":"d6","children":[{"count":2518,"san":"f4","children":[]}]}]},{"count":7297,"san":"d4","children":[{"count":7052,"san":"cxd4","children":[{"count":6170,"san":"c3","children":[{"count":3415,"san":"dxc3","children":[{"count":3375,"san":"Nxc3","children":[{"count":2291,"san":"Nc6","children":[]}]}]}]}]}]},{"count":4423,"san":"f4","children":[]},{"count":2696,"san":"b3","children":[]},{"count":3235,"san":"d3","children":[{"count":2275,"san":"Nc6","children":[]}]},{"count":2327,"san":"Ne2","children":[]}]},{"count":7501,"san":"Nc6","children":[{"count":3688,"san":"Nf3","children":[]},{"count":2782,"san":"d4","children":[]}]},{"count":45929,"san":"d6","children":[{"count":42382,"san":"d4","children":[{"count":35083,"san":"Nf6","children":[{"count":32169,"san":"Nc3","children":[{"count":20601,"san":"g6","children":[{"count":5823,"san":"f4","children":[{"count":5689,"san":"Bg7","children":[{"count":5311,"san":"Nf3","children":[{"count":3608,"san":"O-O","children":[]}]}]}]},{"count":4570,"san":"Nf3","children":[{"count":4457,"san":"Bg7","children":[{"count":2556,"san":"Be2","children":[{"count":2330,"san":"O-O","children":[]}]}]}]},{"count":2988,"san":"Be3","children":[]}]},{"count":3777,"san":"c6","children":[]},{"count":5688,"san":"e5","children":[{"count":3766,"san":"Nf3","children":[{"count":3512,"san":"Nbd7","children":[{"count":2988,"san":"Bc4","children":[{"count":2950,"san":"Be7","children":[]}]}]}]}]}]}]},{"count":5949,"san":"g6","children":[{"count":3718,"san":"Nc3","children":[{"count":3183,"san":"Bg7","children":[]}]}]}]}]},{"count":31014,"san":"d5","children":[{"count":29345,"san":"exd5","children":[{"count":11382,"san":"Nf6","children":[{"count":5806,"san":"d4","children":[{"count":4272,"san":"Nxd5","children":[]}]}]},{"count":17835,"san":"Qxd5","children":[{"count":16184,"san":"Nc3","children":[{"count":10268,"san":"Qa5","children":[{"count":7621,"san":"d4","children":[{"count":5214,"san":"Nf6","children":[{"count":3350,"san":"Nf3","children":[]}]}]}]},{"count":4590,"san":"Qd6","children":[{"count":3780,"san":"d4","children":[{"count":3300,"san":"Nf6","children":[{"count":2347,"san":"Nf3","children":[]}]}]}]}]}]}]}]},{"count":2620,"san":"b6","children":[{"count":2244,"san":"d4","children":[]}]}]},{"count":750505,"san":"d4","children":[{"count":435756,"san":"Nf6","children":[{"count":299965,"san":"c4","children":[{"count":130778,"san":"e6","children":[{"count":54321,"san":"Nf3","children":[{"count":5834,"san":"c5","children":[{"count":4201,"san":"d5","children":[{"count":2656,"san":"exd5","children":[{"count":2656,"san":"cxd5","children":[{"count":2282,"san":"d6","children":[]}]}]}]}]},{"count":24442,"san":"b6","children":[{"count":12844,"san":"g3","children":[{"count":7100,"san":"Ba6","children":[{"count":3762,"san":"b3","children":[{"count":2289,"san":"Bb4+","children":[]}]}]},{"count":5021,"san":"Bb7","children":[{"count":5004,"san":"Bg2","children":[{"count":3514,"san":"Be7","children":[]}]}]}]},{"count":5196,"san":"a3","children":[{"count":3049,"san":"Bb7","children":[{"count":3024,"san":"Nc3","children":[{"count":2316,"san":"d5","children":[]}]}]}]},{"count":3981,"san":"Nc3","children":[{"count":2329,"san":"Bb7","children":[]}]}]},{"count":9661,"san":"Bb4+","children":[{"count":3345,"san":"Nbd2","children":[]},{"count":5937,"san":"Bd2","children":[{"count":2880,"san":"Qe7","children":[]}]}]},{"count":13852,"san":"d5","children":[{"count":9858,"san":"Nc3","children":[{"count":3339,"san":"Be7","children":[]}]}]}]},{"count":63631,"san":"Nc3","children":[{"count":51365,"san":"Bb4","children":[{"count":20312,"san":"e3","children":[{"count":6122,"san":"c5","children":[{"count":3396,"san":"Bd3","children":[]}]},{"count":3736,"san":"b6","children":[]},{"count":9149,"san":"O-O","children":[{"count":6050,"san":"Bd3","children":[{"count":3946,"san":"d5","children":[]}]},{"count":2290,"san":"Ne2","children":[]}]}]},{"count":2384,"san":"Bg5","children":[]},{"count":3169,"san":"f3","children":[]},{"count":2205,"san":"a3","children":[]},{"count":16755,"san":"Qc2","children":[{"count":7563,"san":"O-O","children":[{"count":5399,"san":"a3","children":[{"count":5375,"san":"Bxc3+","children":[]}]}]},{"count":4435,"san":"c5","children":[{"count":3980,"san":"dxc5","children":[]}]},{"count":2825,"san":"d5","children":[]}]},{"count":4147,"san":"Nf3","children":[]}]},{"count":2580,"san":"c5","children":[{"count":2241,"san":"d5","children":[]}]},{"count":9058,"san":"d5","children":[{"count":3763,"san":"Bg5","children":[{"count":2305,"san":"Be7","children":[]}]},{"count":2943,"san":"cxd5","children":[{"count":2740,"san":"exd5","children":[{"count":2641,"san":"Bg5","children":[]}]}]}]}]},{"count":11808,"san":"g3","children":[{"count":6210,"san":"d5","children":[{"count":3753,"san":"Bg2","children":[]},{"count":2429,"san":"Nf3","children":[]}]},{"count":2623,"san":"c5","children":[]},{"count":2727,"san":"Bb4+","children":[{"count":2304,"san":"Bd2","children":[]}]}]}]},{"count":109513,"san":"g6","children":[{"count":92209,"san":"Nc3","children":[{"count":27973,"san":"d5","children":[{"count":2586,"san":"Bf4","children":[{"count":2497,"san":"Bg7","children":[]}]},{"count":12877,"san":"cxd5","children":[{"count":12873,"san":"Nxd5","children":[{"count":10877,"san":"e4","children":[{"count":10767,"san":"Nxc3","children":[]}]}]}]},{"count":9073,"san":"Nf3","children":[{"count":9033,"san":"Bg7","children":[{"count":2614,"san":"Qb3","children":[{"count":2448,"san":"dxc4","children":[]}]}]}]}]},{"count":63592,"san":"Bg7","children":[{"count":56984,"san":"e4","children":[{"count":52063,"san":"d6","children":[{"count":11209,"san":"Be2","children":[{"count":10846,"san":"O-O","children":[]}]},{"count":16826,"san":"Nf3","children":[{"count":16561,"san":"O-O","children":[]}]},{"count":13350,"san":"f3","children":[{"count":11608,"san":"O-O","children":[]}]},{"count":4226,"san":"f4","children":[{"count":3463,"san":"O-O","children":[]}]},{"count":2332,"san":"h3","children":[]}]},{"count":4893,"san":"O-O","children":[]}]},{"count":4144,"san":"Nf3","children":[{"count":2898,"san":"O-O","children":[]}]}]}]},{"count":7584,"san":"Nf3","children":[{"count":7429,"san":"Bg7","children":[{"count":5868,"san":"g3","children":[{"count":4236,"san":"O-O","children":[{"count":4216,"san":"Bg2","children":[{"count":2962,"san":"d6","children":[]}]}]}]}]}]},{"count":7945,"san":"g3","children":[{"count":6616,"san":"Bg7","children":[{"count":6559,"san":"Bg2","children":[{"count":4174,"san":"O-O","children":[{"count":2722,"san":"Nc3","children":[{"count":2443,"san":"d6","children":[]}]}]}]}]}]}]},{"count":37895,"san":"c5","children":[{"count":32464,"san":"d5","children":[{"count":3030,"san":"e5","children":[{"count":2962,"san":"Nc3","children":[{"count":2954,"san":"d6","children":[{"count":2778,"san":"e4","children":[]}]}]}]},{"count":15641,"san":"b5","children":[{"count":11611,"san":"cxb5","children":[{"count":11458,"san":"a6","children":[{"count":5485,"san":"bxa6","children":[{"count":2731,"san":"g6","children":[]},{"count":2566,"san":"Bxa6","children":[]}]},{"count":2309,"san":"b6","children":[]}]}]}]},{"count":8554,"san":"e6","children":[{"count":8315,"san":"Nc3","children":[{"count":8225,"san":"exd5","children":[{"count":8150,"san":"cxd5","children":[{"count":7575,"san":"d6","children":[]}]}]}]}]},{"count":2606,"san":"g6","children":[{"count":2524,"san":"Nc3","children":[]}]}]},{"count":3609,"san":"Nf3","children":[{"count":2529,"san":"cxd4","children":[{"count":2515,"san":"Nxd4","children":[]}]}]}]},{"count":6523,"san":"e5","children":[{"count":5966,"san":"dxe5","children":[{"count":4903,"san":"Ng4","children":[]}]}]},{"count":9514,"san":"d6","children":[{"count":6933,"san":"Nc3","children":[{"count":3177,"san":"Nbd7","children":[]}]},{"count":2402,"san":"Nf3","children":[]}]},{"count":2570,"san":"c6","children":[]}]},{"count":103612,"san":"Nf3","children":[{"count":34154,"san":"e6","children":[{"count":5558,"san":"Bg5","children":[{"count":2234,"san":"c5","children":[]}]},{"count":5218,"san":"e3","children":[{"count":2753,"san":"b6","children":[{"count":2433,"san":"Bd3","children":[{"count":2342,"san":"Bb7","children":[]}]}]}]},{"count":15354,"san":"c4","children":[{"count":3298,"san":"Bb4+","children":[]},{"count":2391,"san":"c5","children":[]},{"count":6608,"san":"b6","children":[{"count":3233,"san":"g3","children":[]}]},{"count":2743,"san":"d5","children":[]}]},{"count":2390,"san":"Bf4","children":[]},{"count":4742,"san":"g3","children":[]}]},{"count":9822,"san":"c5","children":[{"count":4817,"san":"d5","children":[]}]},{"count":9645,"san":"d5","children":[{"count":6111,"san":"c4","children":[{"count":3547,"san":"e6","children":[{"count":2229,"san":"Nc3","children":[]}]}]}]},{"count":42686,"san":"g6","children":[{"count":18449,"san":"c4","children":[{"count":16916,"san":"Bg7","children":[{"count":12824,"san":"Nc3","children":[{"count":7466,"san":"O-O","children":[{"count":5694,"san":"e4","children":[{"count":5577,"san":"d6","children":[]}]}]},{"count":3271,"san":"d5","children":[]}]},{"count":3978,"san":"g3","children":[{"count":3018,"san":"O-O","children":[{"count":2999,"san":"Bg2","children":[]}]}]}]}]},{"count":6483,"san":"Bg5","children":[{"count":6058,"san":"Bg7","children":[{"count":4837,"san":"Nbd2","children":[]}]}]},{"count":7651,"san":"g3","children":[{"count":7178,"san":"Bg7","children":[{"count":6981,"san":"Bg2","children":[{"count":5748,"san":"O-O","children":[{"count":4821,"san":"O-O","children":[{"count":3402,"san":"d6","children":[]}]}]}]}]}]},{"count":4485,"san":"Bf4","children":[{"count":4063,"san":"Bg7","children":[{"count":3058,"san":"e3","children":[]}]}]},{"count":2405,"san":"Nc3","children":[]}]},{"count":2757,"san":"b6","children":[]},{"count":3725,"san":"d6","children":[]}]},{"count":16403,"san":"Bg5","children":[{"count":5311,"san":"Ne4","children":[{"count":3784,"san":"Bf4","children":[]}]},{"count":2819,"san":"d5","children":[]},{"count":4207,"san":"e6","children":[{"count":2345,"san":"e4","children":[]}]}]},{"count":2767,"san":"g3","children":[]},{"count":7347,"san":"Nc3","children":[{"count":5307,"san":"d5","children":[{"count":3746,"san":"Bg5","children":[]}]}]}]},{"count":34034,"san":"e6","children":[{"count":8596,"san":"Nf3","children":[{"count":3125,"san":"Nf6","children":[]},{"count":2298,"san":"f5","children":[]}]},{"count":20268,"san":"c4","children":[{"count":5256,"san":"f5","children":[{"count":2810,"san":"g3","children":[{"count":2723,"san":"Nf6","children":[{"count":2683,"san":"Bg2","children":[]}]}]}]},{"count":2288,"san":"Bb4+","children":[]},{"count":2497,"san":"b6","children":[]},{"count":2854,"san":"d5","children":[]},{"count":6390,"san":"Nf6","children":[{"count":2623,"san":"Nf3","children":[]},{"count":3180,"san":"Nc3","children":[{"count":2456,"san":"Bb4","children":[]}]}]}]},{"count":3664,"san":"e4","children":[{"count":3157,"san":"d5","children":[]}]}]},{"count":198775,"san":"d5","children":[{"count":44581,"san":"Nf3","children":[{"count":29537,"san":"Nf6","children":[{"count":17005,"san":"c4","children":[{"count":6194,"san":"e6","children":[{"count":3869,"san":"Nc3","children":[]}]},{"count":7895,"san":"c6","children":[{"count":4032,"san":"Nc3","children":[]}]},{"count":2787,"san":"dxc4","children":[]}]},{"count":3552,"san":"Bf4","children":[]},{"count":4169,"san":"e3","children":[]}]},{"count":4563,"san":"e6","children":[{"count":2292,"san":"c4","children":[]}]},{"count":4656,"san":"c6","children":[{"count":2367,"san":"c4","children":[]}]}]},{"count":138986,"san":"c4","children":[{"count":17114,"san":"dxc4","children":[{"count":9525,"san":"Nf3","children":[{"count":6393,"san":"Nf6","children":[{"count":4917,"san":"e3","children":[{"count":3334,"san":"e6","children":[{"count":3321,"san":"Bxc4","children":[{"count":2526,"san":"c5","children":[]}]}]}]}]}]},{"count":3054,"san":"e3","children":[]},{"count":3445,"san":"e4","children":[]}]},{"count":53549,"san":"e6","children":[{"count":36353,"san":"Nc3","children":[{"count":7384,"san":"c6","children":[{"count":2759,"san":"e3","children":[]},{"count":2668,"san":"Nf3","children":[]}]},{"count":4430,"san":"c5","children":[{"count":3478,"san":"cxd5","children":[{"count":2663,"san":"exd5","children":[{"count":2458,"san":"Nf3","children":[{"count":2368,"san":"Nc6","children":[]}]}]}]}]},{"count":17309,"san":"Nf6","children":[{"count":3581,"san":"Nf3","children":[]},{"count":8169,"san":"Bg5","children":[{"count":4944,"san":"Be7","children":[{"count":3487,"san":"e3","children":[]}]},{"count":2327,"san":"Nbd7","children":[]}]},{"count":5108,"san":"cxd5","children":[{"count":4893,"san":"exd5","children":[{"count":4729,"san":"Bg5","children":[{"count":2766,"san":"Be7","children":[]}]}]}]}]},{"count":5275,"san":"Be7","children":[{"count":3602,"san":"Nf3","children":[{"count":3550,"san":"Nf6","children":[]}]}]}]},{"count":15394,"san":"Nf3","children":[{"count":9682,"san":"Nf6","children":[{"count":3282,"san":"g3","children":[]},{"count":4506,"san":"Nc3","children":[]}]},{"count":3028,"san":"c6","children":[]}]}]},{"count":59268,"san":"c6","children":[{"count":18056,"san":"Nc3","children":[{"count":15458,"san":"Nf6","children":[{"count":6995,"san":"e3","children":[{"count":3830,"san":"e6","children":[{"count":3625,"san":"Nf3","children":[{"count":3129,"san":"Nbd7","children":[]}]}]}]},{"count":6549,"san":"Nf3","children":[{"count":2840,"san":"e6","children":[]}]}]}]},{"count":33445,"san":"Nf3","children":[{"count":30861,"san":"Nf6","children":[{"count":18950,"san":"Nc3","children":[{"count":7707,"san":"e6","children":[{"count":3258,"san":"e3","children":[{"count":2850,"san":"Nbd7","children":[]}]},{"count":3373,"san":"Bg5","children":[]}]},{"count":3264,"san":"a6","children":[]},{"count":7097,"san":"dxc4","children":[{"count":6280,"san":"a4","children":[{"count":5083,"san":"Bf5","children":[]}]}]}]},{"count":7720,"san":"e3","children":[{"count":2550,"san":"Bf5","children":[]}]}]}]},{"count":2782,"san":"e3","children":[{"count":2279,"san":"Nf6","children":[]}]},{"count":4708,"san":"cxd5","children":[{"count":4691,"san":"cxd5","children":[{"count":3142,"san":"Nc3","children":[{"count":2200,"san":"Nf6","children":[]}]}]}]}]},{"count":2565,"san":"e5","children":[{"count":2291,"san":"dxe5","children":[{"count":2245,"san":"d4","children":[]}]}]},{"count":3375,"san":"Nc6","children":[]}]},{"count":4079,"san":"e4","children":[{"count":3649,"san":"dxe4","children":[{"count":3540,"san":"Nc3","children":[{"count":2891,"san":"Nf6","children":[{"count":2649,"san":"f3","children":[{"count":2238,"san":"exf3","children":[]}]}]}]}]}]},{"count":2757,"san":"Bg5","children":[]},{"count":2733,"san":"Bf4","children":[]},{"count":2465,"san":"Nc3","children":[]}]},{"count":19906,"san":"d6","children":[{"count":5714,"san":"c4","children":[{"count":3198,"san":"e5","children":[]}]},{"count":7290,"san":"Nf3","children":[{"count":2708,"san":"g6","children":[]}]},{"count":5603,"san":"e4","children":[{"count":3855,"san":"Nf6","children":[{"count":3028,"san":"Nc3","children":[]}]}]}]},{"count":20795,"san":"g6","children":[{"count":10082,"san":"c4","children":[{"count":8927,"san":"Bg7","children":[{"count":5382,"san":"Nc3","children":[{"count":3551,"san":"d6","children":[{"count":2735,"san":"e4","children":[]}]}]}]}]},{"count":6044,"san":"e4","children":[{"count":5101,"san":"Bg7","children":[]}]},{"count":3586,"san":"Nf3","children":[{"count":3244,"san":"Bg7","children":[]}]}]},{"count":24866,"san":"f5","children":[{"count":4891,"san":"c4","children":[{"count":3892,"san":"Nf6","children":[{"count":2205,"san":"Nc3","children":[]}]}]},{"count":8312,"san":"g3","children":[{"count":7218,"san":"Nf6","children":[{"count":7028,"san":"Bg2","children":[{"count":4592,"san":"g6","children":[]}]}]}]},{"count":2726,"san":"Nc3","children":[]},{"count":4302,"san":"Nf3","children":[{"count":3662,"san":"Nf6","children":[{"count":2296,"san":"g3","children":[]}]}]}]},{"count":9911,"san":"c5","children":[{"count":6968,"san":"d5","children":[{"count":2605,"san":"e5","children":[]}]}]}]},{"count":154519,"san":"c4","children":[{"count":49816,"san":"Nf6","children":[{"count":31962,"san":"Nc3","children":[{"count":4607,"san":"c5","children":[{"count":2265,"san":"Nf3","children":[]}]},{"count":7257,"san":"e6","children":[{"count":2522,"san":"Nf3","children":[]},{"count":2804,"san":"e4","children":[]}]},{"count":10976,"san":"g6","children":[{"count":4753,"san":"g3","children":[{"count":4438,"san":"Bg7","children":[{"count":4395,"san":"Bg2","children":[{"count":3507,"san":"O-O","children":[]}]}]}]},{"count":3885,"san":"e4","children":[{"count":3639,"san":"d6","children":[{"count":3152,"san":"d4","children":[{"count":3123,"san":"Bg7","children":[]}]}]}]}]},{"count":2986,"san":"d5","children":[{"count":2631,"san":"cxd5","children":[{"count":2629,"san":"Nxd5","children":[]}]}]},{"count":4229,"san":"e5","children":[{"count":2409,"san":"Nf3","children":[]}]}]},{"count":7573,"san":"Nf3","children":[{"count":2370,"san":"e6","children":[]},{"count":2831,"san":"g6","children":[]}]},{"count":7531,"san":"g3","children":[{"count":3124,"san":"g6","children":[{"count":2938,"san":"Bg2","children":[{"count":2575,"san":"Bg7","children":[]}]}]}]},{"count":2489,"san":"d4","children":[]}]},{"count":10705,"san":"c6","children":[{"count":2273,"san":"d4","children":[]},{"count":2752,"san":"e4","children":[{"count":2216,"san":"d5","children":[]}]},{"count":3497,"san":"Nf3","children":[{"count":2824,"san":"d5","children":[]}]}]},{"count":20027,"san":"e6","children":[{"count":6427,"san":"Nc3","children":[{"count":4626,"san":"d5","children":[{"count":3675,"san":"d4","children":[]}]}]},{"count":6776,"san":"Nf3","children":[{"count":4061,"san":"d5","children":[]},{"count":2199,"san":"Nf6","children":[]}]},{"count":3941,"san":"g3","children":[{"count":2799,"san":"d5","children":[{"count":2293,"san":"Bg2","children":[]}]}]}]},{"count":33538,"san":"e5","children":[{"count":23844,"san":"Nc3","children":[{"count":11404,"san":"Nf6","children":[{"count":6011,"san":"Nf3","children":[{"count":5461,"san":"Nc6","children":[{"count":2444,"san":"g3","children":[]}]}]},{"count":4548,"san":"g3","children":[]}]},{"count":2322,"san":"d6","children":[]},{"count":7070,"san":"Nc6","children":[{"count":4376,"san":"g3","children":[{"count":2648,"san":"g6","children":[{"count":2616,"san":"Bg2","children":[{"count":2545,"san":"Bg7","children":[]}]}]}]},{"count":2303,"san":"Nf3","children":[]}]}]},{"count":8441,"san":"g3","children":[{"count":2533,"san":"Nc6","children":[{"count":2265,"san":"Bg2","children":[]}]},{"count":3844,"san":"Nf6","children":[{"count":3749,"san":"Bg2","children":[]}]}]}]},{"count":17435,"san":"c5","children":[{"count":6995,"san":"Nc3","children":[{"count":3577,"san":"Nc6","children":[{"count":2320,"san":"g3","children":[]}]}]},{"count":6976,"san":"Nf3","children":[{"count":3188,"san":"Nf6","children":[]},{"count":2469,"san":"Nc6","children":[]}]},{"count":3180,"san":"g3","children":[]}]},{"count":13217,"san":"g6","children":[{"count":3171,"san":"g3","children":[{"count":3025,"san":"Bg7","children":[{"count":2963,"san":"Bg2","children":[]}]}]},{"count":6187,"san":"Nc3","children":[{"count":5527,"san":"Bg7","children":[{"count":3316,"san":"g3","children":[]}]}]}]},{"count":5255,"san":"f5","children":[]},{"count":2211,"san":"b6","children":[]}]},{"count":186872,"san":"Nf3","children":[{"count":88966,"san":"Nf6","children":[{"count":50459,"san":"c4","children":[{"count":15026,"san":"e6","children":[{"count":5444,"san":"Nc3","children":[{"count":2461,"san":"d5","children":[{"count":2241,"san":"d4","children":[]}]}]},{"count":7210,"san":"g3","children":[{"count":4198,"san":"d5","children":[{"count":2613,"san":"Bg2","children":[]}]}]}]},{"count":3230,"san":"b6","children":[{"count":2328,"san":"g3","children":[]}]},{"count":19489,"san":"g6","children":[{"count":10977,"san":"Nc3","children":[{"count":7905,"san":"Bg7","children":[{"count":5486,"san":"e4","children":[{"count":4761,"san":"d6","children":[{"count":4711,"san":"d4","children":[{"count":4618,"san":"O-O","children":[]}]}]}]}]},{"count":2755,"san":"d5","children":[]}]},{"count":5250,"san":"g3","children":[{"count":5066,"san":"Bg7","children":[{"count":4943,"san":"Bg2","children":[{"count":4173,"san":"O-O","children":[{"count":3048,"san":"O-O","children":[]}]}]}]}]}]},{"count":7908,"san":"c5","children":[{"count":2215,"san":"g3","children":[]},{"count":5044,"san":"Nc3","children":[]}]},{"count":2849,"san":"c6","children":[]}]},{"count":9287,"san":"d4","children":[{"count":3713,"san":"g6","children":[]},{"count":2640,"san":"e6","children":[]}]},{"count":24760,"san":"g3","children":[{"count":11804,"san":"g6","children":[{"count":8577,"san":"Bg2","children":[{"count":8425,"san":"Bg7","children":[{"count":6563,"san":"O-O","children":[{"count":5960,"san":"O-O","children":[]}]}]}]},{"count":2211,"san":"b3","children":[]}]},{"count":6594,"san":"d5","children":[{"count":5967,"san":"Bg2","children":[{"count":2737,"san":"c6","children":[]}]}]},{"count":2562,"san":"b6","children":[{"count":2464,"san":"Bg2","children":[{"count":2461,"san":"Bb7","children":[]}]}]}]},{"count":3190,"san":"b3","children":[]}]},{"count":47261,"san":"d5","children":[{"count":15277,"san":"d4","children":[{"count":9898,"san":"Nf6","children":[{"count":8222,"san":"c4","children":[{"count":3529,"san":"e6","children":[{"count":2211,"san":"Nc3","children":[]}]},{"count":3520,"san":"c6","children":[]}]}]}]},{"count":16200,"san":"g3","children":[{"count":3950,"san":"c6","children":[{"count":3759,"san":"Bg2","children":[{"count":2409,"san":"Bg4","children":[]}]}]},{"count":6208,"san":"Nf6","children":[{"count":6062,"san":"Bg2","children":[]}]}]},{"count":11985,"san":"c4","children":[{"count":4799,"san":"c6","children":[]},{"count":4162,"san":"e6","children":[]}]},{"count":2325,"san":"b3","children":[]}]},{"count":6105,"san":"f5","children":[{"count":2227,"san":"g3","children":[]}]},{"count":21472,"san":"c5","children":[{"count":12249,"san":"c4","children":[{"count":2404,"san":"g6","children":[]},{"count":4995,"san":"Nc6","children":[{"count":2363,"san":"Nc3","children":[]}]},{"count":4071,"san":"Nf6","children":[{"count":2657,"san":"Nc3","children":[]}]}]},{"count":5145,"san":"g3","children":[{"count":2607,"san":"Nc6","children":[]}]}]},{"count":10258,"san":"g6","children":[{"count":3151,"san":"d4","children":[{"count":2274,"san":"Bg7","children":[]}]},{"count":2433,"san":"g3","children":[{"count":2324,"san":"Bg7","children":[]}]},{"count":2708,"san":"c4","children":[{"count":2458,"san":"Bg7","children":[]}]}]},{"count":3629,"san":"e6","children":[]},{"count":5360,"san":"d6","children":[{"count":3706,"san":"d4","children":[]}]}]},{"count":8279,"san":"b3","children":[{"count":3630,"san":"e5","children":[{"count":3542,"san":"Bb2","children":[{"count":2594,"san":"Nc6","children":[]}]}]}]},{"count":11957,"san":"f4","children":[{"count":5540,"san":"d5","children":[{"count":4098,"san":"Nf3","children":[]}]}]},{"count":5130,"san":"Nc3","children":[]},{"count":6852,"san":"b4","children":[{"count":3117,"san":"e5","children":[{"count":2814,"san":"Bb2","children":[]}]}]},{"count":16412,"san":"g3","children":[{"count":3014,"san":"g6","children":[{"count":2847,"san":"Bg2","children":[{"count":2782,"san":"Bg7","children":[]}]}]},{"count":3069,"san":"Nf6","children":[{"count":2863,"san":"Bg2","children":[]}]},{"count":5509,"san":"d5","children":[{"count":3631,"san":"Bg2","children":[]}]},{"count":2519,"san":"e5","children":[]}]}]'), Mv = {
  count: Sv,
  san: Ev,
  children: Cv
};
function Cd(r) {
  const l = r;
  return {
    san: l.san ?? l.San ?? "start",
    count: l.count ?? l.Count ?? 0,
    children: (l.children ?? l.Children ?? []).map(Cd)
  };
}
function Md(r, l, u = 0) {
  return u >= l ? { ...r, children: [] } : {
    ...r,
    children: r.children.map((a) => Md(a, l, u + 1))
  };
}
function Pd(r, l) {
  return {
    ...r,
    children: r.children.filter((u) => u.count >= l).map((u) => Pd(u, l))
  };
}
function Pv(r, l) {
  const u = Md(r, l.maxPly), a = l.pruneFraction > 0 ? r.count * l.pruneFraction : 0;
  return a > 0 ? Pd(u, a) : u;
}
function Td(r, l = 0) {
  return r.children.length ? r.children.reduce(
    (u, a) => {
      const c = Td(a, l + 1);
      return {
        nodes: u.nodes + c.nodes,
        leaves: u.leaves + c.leaves,
        maxDepth: Math.max(u.maxDepth, c.maxDepth)
      };
    },
    { nodes: 1, leaves: 0, maxDepth: l }
  ) : { nodes: 1, leaves: 1, maxDepth: l };
}
const jf = Cd(Mv), qr = [
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
    note: "chessviz.tools / poster: 0.1px black stroke painted under the fill, no padAngle.",
    knobs: { stroke: "black-hairline", strokeWidth: 0.1, padAngle: 0, ringGap: 1 }
  }
], Xr = {
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
}, zd = [
  {
    id: "library-2015",
    label: "0 · library",
    year: "2015",
    caption: "2015-12 — chess-dataviz 1.0.0",
    blurb: "Shipped 2015-12-21. No hole, category10, every-node value, centroid SAN. Hub text was removed two days before the tag.",
    knobs: {
      width: 550,
      hole: 0,
      radius: "sqrt",
      palette: "category10",
      sum: "every-node",
      sort: !1,
      padAngle: 0,
      ringGap: 0,
      stroke: "none",
      depthFade: 0.2,
      nodeThreshold: 0.01,
      thresholdUnit: "fraction",
      showSan: !0,
      sanThreshold: 0.1,
      center: "none",
      background: "light",
      maxPly: 10,
      pruneFraction: 0
    }
  },
  {
    id: "blog-2016",
    label: "1 · blog",
    year: "2016",
    caption: "2016 post / 2021 rewrite",
    blurb: "Published March 2016 on the v3 library. This drawing is the Feb 2021 rewrite: hole 20, padAngle, leaf-sum, board in the center.",
    knobs: { ...Xr }
  },
  {
    id: "ply",
    label: "2 · ply",
    year: "knob",
    caption: "Ply depth",
    blurb: "Same drawing as 2016. 4 half-moves is a pie. 10 is a city.",
    knobs: { ...Xr, maxPly: 4 },
    controls: ["ply"]
  },
  {
    id: "prune",
    label: "3 · prune",
    year: "knob",
    caption: "Prune threshold",
    blurb: "Further prune on the already-cut 2m tree. 0.5% is the later default.",
    knobs: { ...Xr, pruneFraction: 5e-3 },
    controls: ["prune"]
  },
  {
    id: "radius-linear",
    label: "4 · linear r",
    year: "knob",
    caption: "Linear radius",
    blurb: "Linear radius. Outer theory becomes a wire. Sqrt is a choice.",
    knobs: { ...Xr, radius: "linear" }
  },
  {
    id: "separation",
    label: "4b · separation",
    year: "knob",
    caption: "Gaps and lines between slices",
    blurb: "Same 2m tree and 2016 knobs. Only the separation changes. The inset is the outer edge, magnified.",
    knobs: { ...Xr, ...qr[0].knobs },
    controls: ["separation"],
    inset: { angle: 1.4, radius: 0.72, size: 80 }
  },
  {
    id: "chessviz-tools",
    label: "5 · chessviz",
    year: "2024–25",
    caption: "2023–25 — chessviz.tools",
    blurb: "Tableau from day one (2023-12). Black hairline and names: 2024-03. Product + Zazzle 2000²: 2025-07.",
    knobs: {
      width: 900,
      hole: 20,
      radius: "sqrt",
      palette: "tableau10",
      sum: "leaves",
      sort: !0,
      padAngle: 0,
      ringGap: 1,
      stroke: "black-hairline",
      depthFade: 0.15,
      nodeThreshold: 5e-3,
      thresholdUnit: "radian",
      showSan: !0,
      sanThreshold: 0.05,
      center: "board-disk",
      background: "light",
      maxPly: 10,
      pruneFraction: 0
    }
  },
  {
    id: "print-adjacent",
    label: "6 · print clothes",
    year: "2026",
    caption: "Print clothes — still the 2m tree",
    blurb: "2m tree, print decisions: black field, large void, hairlines, no SAN.",
    knobs: {
      width: 900,
      hole: 90,
      radius: "sqrt",
      palette: "tableau10",
      sum: "leaves",
      sort: !0,
      padAngle: 0,
      ringGap: 1,
      stroke: "black-hairline",
      depthFade: 0.15,
      nodeThreshold: 2e-3,
      thresholdUnit: "radian",
      showSan: !1,
      sanThreshold: 0.05,
      center: "void",
      background: "dark",
      maxPly: 10,
      pruneFraction: 0
    }
  },
  {
    id: "poster",
    label: "7 · poster",
    year: "2026",
    caption: "Ten Million Openings",
    blurb: "Prodigi preview. 10,388,956 games — cannot rebuild from this repo.",
    knobs: {
      width: 900,
      hole: 90,
      radius: "sqrt",
      palette: "tableau10",
      sum: "leaves",
      sort: !0,
      padAngle: 0,
      ringGap: 1,
      stroke: "black-hairline",
      depthFade: 0.15,
      nodeThreshold: 2e-3,
      thresholdUnit: "radian",
      showSan: !1,
      sanThreshold: 0.05,
      center: "void",
      background: "dark",
      maxPly: 10,
      pruneFraction: 0
    }
  }
];
function Tv(r, l) {
  const u = r.radius * l / 2, a = u * Math.sin(r.angle), c = -u * Math.cos(r.angle);
  return { x: a - r.size / 2, y: c - r.size / 2, size: r.size };
}
function zv({ stageId: r }) {
  const l = zd.find((M) => M.id === r), [u, a] = st.useState(l == null ? void 0 : l.knobs), [c, d] = st.useState(
    qr[0].id
  ), h = st.useMemo(() => u ? Pv(jf, u) : jf, [u]), p = st.useMemo(() => Td(h), [h]);
  if (!l || !u) return null;
  const g = u.background === "dark", m = l.controls ?? [], y = l.inset ? Tv(l.inset, u.width) : void 0, S = qr.find((M) => M.id === c);
  function k(M) {
    const I = qr.find(($) => $.id === M);
    !I || !u || (d(M), a({ ...u, ...I.knobs }));
  }
  return /* @__PURE__ */ pe.jsxs("div", { className: `openings-stage${g ? " openings-stage-dark" : ""}`, children: [
    /* @__PURE__ */ pe.jsx("div", { className: "viz-title", children: l.caption }),
    /* @__PURE__ */ pe.jsx("div", { className: "viz-subtitle", children: l.blurb }),
    m.includes("separation") && /* @__PURE__ */ pe.jsx("div", { className: "openings-segmented", role: "group", "aria-label": "slice separation", children: qr.map((M) => /* @__PURE__ */ pe.jsx(
      "button",
      {
        type: "button",
        "aria-pressed": M.id === c,
        className: M.id === c ? "active" : "",
        onClick: () => k(M.id),
        children: M.label
      },
      M.id
    )) }),
    y ? /* @__PURE__ */ pe.jsxs("div", { className: "openings-with-inset", children: [
      /* @__PURE__ */ pe.jsx(Uo, { data: h, knobs: u, highlight: y }),
      /* @__PURE__ */ pe.jsxs("figure", { className: "openings-inset", children: [
        /* @__PURE__ */ pe.jsx(
          Uo,
          {
            data: h,
            knobs: u,
            crop: y,
            className: "openings-sunburst openings-sunburst-inset"
          }
        ),
        /* @__PURE__ */ pe.jsxs("figcaption", { children: [
          "outer edge, ×",
          Math.round(u.width / y.size)
        ] })
      ] })
    ] }) : /* @__PURE__ */ pe.jsx(Uo, { data: h, knobs: u }),
    m.includes("separation") && S && /* @__PURE__ */ pe.jsx("div", { className: "openings-mode-note", children: S.note }),
    m.some((M) => M !== "separation") && /* @__PURE__ */ pe.jsxs("div", { className: "openings-controls", children: [
      m.includes("ply") && /* @__PURE__ */ pe.jsxs("label", { children: [
        "ply ",
        u.maxPly,
        /* @__PURE__ */ pe.jsx(
          "input",
          {
            type: "range",
            min: 1,
            max: 10,
            value: u.maxPly,
            onChange: (M) => a({ ...u, maxPly: Number(M.target.value) })
          }
        )
      ] }),
      m.includes("prune") && /* @__PURE__ */ pe.jsxs("label", { children: [
        "extra prune ",
        (u.pruneFraction * 100).toFixed(2),
        "%",
        /* @__PURE__ */ pe.jsx(
          "input",
          {
            type: "range",
            min: 0,
            max: 50,
            value: Math.round(u.pruneFraction * 1e3),
            onChange: (M) => a({
              ...u,
              pruneFraction: Number(M.target.value) / 1e3
            })
          }
        )
      ] }),
      m.includes("hole") && /* @__PURE__ */ pe.jsxs("label", { children: [
        "hole ",
        u.hole,
        /* @__PURE__ */ pe.jsx(
          "input",
          {
            type: "range",
            min: 0,
            max: 160,
            value: u.hole,
            onChange: (M) => a({ ...u, hole: Number(M.target.value) })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ pe.jsxs("div", { className: "viz-meta", children: [
      p.nodes,
      " nodes · ",
      p.leaves,
      " leaves · depth ",
      p.maxDepth,
      " · 2,197,113-game tree"
    ] })
  ] });
}
const Rv = new Set(zd.map((r) => r.id));
function Vf() {
  document.querySelectorAll("[data-openings-stage]").forEach((r) => {
    const l = r.dataset.openingsStage;
    Rv.has(l) && Ap.createRoot(r).render(/* @__PURE__ */ pe.jsx(zv, { stageId: l }));
  });
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Vf) : Vf();
