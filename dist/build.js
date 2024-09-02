import { defineComponent as rs, useSlots as is, ref as R, computed as w, watch as Ve, nextTick as pt, onMounted as as, resolveComponent as en, openBlock as u, createElementBlock as f, normalizeClass as ue, unref as K, renderSlot as te, createCommentVNode as C, withModifiers as je, createElementVNode as he, createBlock as G, resolveDynamicComponent as ne, toDisplayString as fe, Fragment as Re, renderList as ht, withDirectives as tn, normalizeStyle as cs, createVNode as us, vShow as nn, createTextVNode as sn } from "vue";
import { generateRandomString as on } from "lkt-string-tools";
import { httpCall as fs } from "lkt-http-client";
import { __ as ds } from "lkt-i18n";
import ps from "lkt-loader";
import hs from "lkt-field-text";
const Q = class Q {
};
Q.debugEnabled = !1, Q.NO_OPTIONS_MESSAGE = "", Q.emptyValueText = "", Q.defaultEmptyValueSlot = "", Q.customResourceOptionSlots = {}, Q.customResourceValueSlots = {};
let g = Q;
const _s = () => g.NO_OPTIONS_MESSAGE, Ll = (e) => (g.NO_OPTIONS_MESSAGE = e, !0), Al = (e) => (g.emptyValueText = e, !0), Hl = (e, t) => (g.customResourceOptionSlots[e] = t, !0), jl = (e, t) => (g.customResourceValueSlots[e] = t, !0), Fl = (e, t) => {
  g.defaultEmptyValueSlot = e, t && (g.customResourceValueSlots[e] = t);
};
class ln {
  constructor(t = []) {
    Array.isArray(t) || (t = []), this.value = [...t];
  }
  all() {
    return this.value;
  }
  filter(t) {
    if (t === "")
      return this.all();
    const n = t.toLowerCase();
    return this.value.filter((o) => o.label.toLowerCase().indexOf(n) !== -1);
  }
  findByValue(t) {
    if (t)
      return this.value.find((n) => n.value === t);
  }
  receiveOptions(t) {
    const n = /* @__PURE__ */ new Set(), o = [...this.value, ...t], s = [];
    o.forEach((l) => {
      let r = [l.value, l.label].join("-");
      n.has(r) || (s.push(l), n.add(r));
    }), this.value = s;
  }
}
/**
* @vue/shared v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function vs(e, t) {
  const n = new Set(e.split(","));
  return t ? (o) => n.has(o.toLowerCase()) : (o) => n.has(o);
}
const J = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const _e = () => {
}, ms = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), F = Object.assign, gs = Object.prototype.hasOwnProperty, V = (e, t) => gs.call(e, t), y = Array.isArray, ge = (e) => tt(e) === "[object Map]", Es = (e) => tt(e) === "[object Set]", D = (e) => typeof e == "function", P = (e) => typeof e == "string", et = (e) => typeof e == "symbol", L = (e) => e !== null && typeof e == "object", ws = (e) => (L(e) || D(e)) && D(e.then) && D(e.catch), ys = Object.prototype.toString, tt = (e) => ys.call(e), Sn = (e) => tt(e).slice(8, -1), Ss = (e) => tt(e) === "[object Object]", Vt = (e) => P(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, bn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, On = bn((e) => e.charAt(0).toUpperCase() + e.slice(1)), bs = bn((e) => e ? `on${On(e)}` : ""), ye = (e, t) => !Object.is(e, t), Os = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
};
let rn;
const Nn = () => rn || (rn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Rt(e) {
  if (y(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = P(o) ? Cs(o) : Rt(o);
      if (s)
        for (const l in s)
          t[l] = s[l];
    }
    return t;
  } else if (P(e) || L(e))
    return e;
}
const Ns = /;(?![^(]*\))/g, Vs = /:([^]+)/, Rs = /\/\*[^]*?\*\//g;
function Cs(e) {
  const t = {};
  return e.replace(Rs, "").split(Ns).forEach((n) => {
    if (n) {
      const o = n.split(Vs);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Ct(e) {
  let t = "";
  if (P(e))
    t = e;
  else if (y(e))
    for (let n = 0; n < e.length; n++) {
      const o = Ct(e[n]);
      o && (t += o + " ");
    }
  else if (L(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
/**
* @vue/reactivity v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ie(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ds;
function Ts(e, t = Ds) {
  t && t.active && t.effects.push(e);
}
let Te;
class xs {
  constructor(t, n, o, s) {
    this.fn = t, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Ts(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, nt();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Ms(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), st();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = se, n = Te;
    try {
      return se = !0, Te = this, this._runnings++, an(this), this.fn();
    } finally {
      cn(this), this._runnings--, Te = n, se = t;
    }
  }
  stop() {
    var t;
    this.active && (an(this), cn(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function Ms(e) {
  return e.value;
}
function an(e) {
  e._trackId++, e._depsLength = 0;
}
function cn(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Vn(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Vn(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let se = !0, mt = 0;
const Rn = [];
function nt() {
  Rn.push(se), se = !1;
}
function st() {
  const e = Rn.pop();
  se = e === void 0 ? !0 : e;
}
function Dt() {
  mt++;
}
function Tt() {
  for (mt--; !mt && gt.length; )
    gt.shift()();
}
function ks(e, t, n) {
  var o;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && Vn(s, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((o = e.onTrack) == null || o.call(e, F({ effect: e }, n)));
  }
}
const gt = [];
function Is(e, t, n) {
  var o;
  Dt();
  for (const s of e.keys()) {
    let l;
    s._dirtyLevel < t && (l ?? (l = e.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = t), s._shouldSchedule && (l ?? (l = e.get(s) === s._trackId)) && (process.env.NODE_ENV !== "production" && ((o = s.onTrigger) == null || o.call(s, F({ effect: s }, n))), s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && gt.push(s.scheduler)));
  }
  Tt();
}
const $s = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Et = /* @__PURE__ */ new WeakMap(), oe = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), wt = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function M(e, t, n) {
  if (se && Te) {
    let o = Et.get(e);
    o || Et.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = $s(() => o.delete(n))), ks(
      Te,
      s,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function Z(e, t, n, o, s, l) {
  const r = Et.get(e);
  if (!r)
    return;
  let a = [];
  if (t === "clear")
    a = [...r.values()];
  else if (n === "length" && y(e)) {
    const c = Number(o);
    r.forEach((h, d) => {
      (d === "length" || !et(d) && d >= c) && a.push(h);
    });
  } else
    switch (n !== void 0 && a.push(r.get(n)), t) {
      case "add":
        y(e) ? Vt(n) && a.push(r.get("length")) : (a.push(r.get(oe)), ge(e) && a.push(r.get(wt)));
        break;
      case "delete":
        y(e) || (a.push(r.get(oe)), ge(e) && a.push(r.get(wt)));
        break;
      case "set":
        ge(e) && a.push(r.get(oe));
        break;
    }
  Dt();
  for (const c of a)
    c && Is(
      c,
      4,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: o,
        oldValue: s,
        oldTarget: l
      } : void 0
    );
  Tt();
}
const Ps = /* @__PURE__ */ vs("__proto__,__v_isRef,__isVue"), Cn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(et)
), un = /* @__PURE__ */ Ls();
function Ls() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = _(this);
      for (let l = 0, r = this.length; l < r; l++)
        M(o, "get", l + "");
      const s = o[t](...n);
      return s === -1 || s === !1 ? o[t](...n.map(_)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      nt(), Dt();
      const o = _(this)[t].apply(this, n);
      return Tt(), st(), o;
    };
  }), e;
}
function As(e) {
  const t = _(this);
  return M(t, "has", e), t.hasOwnProperty(e);
}
class Dn {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    const s = this._isReadonly, l = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return l;
    if (n === "__v_raw")
      return o === (s ? l ? In : kn : l ? Qs : Mn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const r = y(t);
    if (!s) {
      if (r && V(un, n))
        return Reflect.get(un, n, o);
      if (n === "hasOwnProperty")
        return As;
    }
    const a = Reflect.get(t, n, o);
    return (et(n) ? Cn.has(n) : Ps(n)) || (s || M(t, "get", n), l) ? a : A(a) ? r && Vt(n) ? a : a.value : L(a) ? s ? Pn(a) : $n(a) : a;
  }
}
class Hs extends Dn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let l = t[n];
    if (!this._isShallow) {
      const c = $e(l);
      if (!yt(o) && !$e(o) && (l = _(l), o = _(o)), !y(t) && A(l) && !A(o))
        return c ? !1 : (l.value = o, !0);
    }
    const r = y(t) && Vt(n) ? Number(n) < t.length : V(t, n), a = Reflect.set(t, n, o, s);
    return t === _(s) && (r ? ye(o, l) && Z(t, "set", n, o, l) : Z(t, "add", n, o)), a;
  }
  deleteProperty(t, n) {
    const o = V(t, n), s = t[n], l = Reflect.deleteProperty(t, n);
    return l && o && Z(t, "delete", n, void 0, s), l;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!et(n) || !Cn.has(n)) && M(t, "has", n), o;
  }
  ownKeys(t) {
    return M(
      t,
      "iterate",
      y(t) ? "length" : oe
    ), Reflect.ownKeys(t);
  }
}
class Tn extends Dn {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && Ie(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && Ie(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const js = /* @__PURE__ */ new Hs(), Fs = /* @__PURE__ */ new Tn(), zs = /* @__PURE__ */ new Tn(!0), xt = (e) => e, ot = (e) => Reflect.getPrototypeOf(e);
function Fe(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = _(e), l = _(t);
  n || (ye(t, l) && M(s, "get", t), M(s, "get", l));
  const { has: r } = ot(s), a = o ? xt : n ? $t : It;
  if (r.call(s, t))
    return a(e.get(t));
  if (r.call(s, l))
    return a(e.get(l));
  e !== s && e.get(t);
}
function ze(e, t = !1) {
  const n = this.__v_raw, o = _(n), s = _(e);
  return t || (ye(e, s) && M(o, "has", e), M(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function Be(e, t = !1) {
  return e = e.__v_raw, !t && M(_(e), "iterate", oe), Reflect.get(e, "size", e);
}
function fn(e) {
  e = _(e);
  const t = _(this);
  return ot(t).has.call(t, e) || (t.add(e), Z(t, "add", e, e)), this;
}
function dn(e, t) {
  t = _(t);
  const n = _(this), { has: o, get: s } = ot(n);
  let l = o.call(n, e);
  l ? process.env.NODE_ENV !== "production" && xn(n, o, e) : (e = _(e), l = o.call(n, e));
  const r = s.call(n, e);
  return n.set(e, t), l ? ye(t, r) && Z(n, "set", e, t, r) : Z(n, "add", e, t), this;
}
function pn(e) {
  const t = _(this), { has: n, get: o } = ot(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && xn(t, n, e) : (e = _(e), s = n.call(t, e));
  const l = o ? o.call(t, e) : void 0, r = t.delete(e);
  return s && Z(t, "delete", e, void 0, l), r;
}
function hn() {
  const e = _(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? ge(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Z(e, "clear", void 0, void 0, n), o;
}
function Ke(e, t) {
  return function(o, s) {
    const l = this, r = l.__v_raw, a = _(r), c = t ? xt : e ? $t : It;
    return !e && M(a, "iterate", oe), r.forEach((h, d) => o.call(s, c(h), c(d), l));
  };
}
function Ue(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, l = _(s), r = ge(l), a = e === "entries" || e === Symbol.iterator && r, c = e === "keys" && r, h = s[e](...o), d = n ? xt : t ? $t : It;
    return !t && M(
      l,
      "iterate",
      c ? wt : oe
    ), {
      // iterator protocol
      next() {
        const { value: E, done: S } = h.next();
        return S ? { value: E, done: S } : {
          value: a ? [d(E[0]), d(E[1])] : d(E),
          done: S
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function q(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ie(
        `${On(e)} operation ${n}failed: target is readonly.`,
        _(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Bs() {
  const e = {
    get(l) {
      return Fe(this, l);
    },
    get size() {
      return Be(this);
    },
    has: ze,
    add: fn,
    set: dn,
    delete: pn,
    clear: hn,
    forEach: Ke(!1, !1)
  }, t = {
    get(l) {
      return Fe(this, l, !1, !0);
    },
    get size() {
      return Be(this);
    },
    has: ze,
    add: fn,
    set: dn,
    delete: pn,
    clear: hn,
    forEach: Ke(!1, !0)
  }, n = {
    get(l) {
      return Fe(this, l, !0);
    },
    get size() {
      return Be(this, !0);
    },
    has(l) {
      return ze.call(this, l, !0);
    },
    add: q("add"),
    set: q("set"),
    delete: q("delete"),
    clear: q("clear"),
    forEach: Ke(!0, !1)
  }, o = {
    get(l) {
      return Fe(this, l, !0, !0);
    },
    get size() {
      return Be(this, !0);
    },
    has(l) {
      return ze.call(this, l, !0);
    },
    add: q("add"),
    set: q("set"),
    delete: q("delete"),
    clear: q("clear"),
    forEach: Ke(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((l) => {
    e[l] = Ue(
      l,
      !1,
      !1
    ), n[l] = Ue(
      l,
      !0,
      !1
    ), t[l] = Ue(
      l,
      !1,
      !0
    ), o[l] = Ue(
      l,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    o
  ];
}
const [
  Ks,
  Us,
  Ws,
  Gs
] = /* @__PURE__ */ Bs();
function Mt(e, t) {
  const n = t ? e ? Gs : Ws : e ? Us : Ks;
  return (o, s, l) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    V(n, s) && s in o ? n : o,
    s,
    l
  );
}
const qs = {
  get: /* @__PURE__ */ Mt(!1, !1)
}, Js = {
  get: /* @__PURE__ */ Mt(!0, !1)
}, Ys = {
  get: /* @__PURE__ */ Mt(!0, !0)
};
function xn(e, t, n) {
  const o = _(n);
  if (o !== n && t.call(e, o)) {
    const s = Sn(e);
    Ie(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Mn = /* @__PURE__ */ new WeakMap(), Qs = /* @__PURE__ */ new WeakMap(), kn = /* @__PURE__ */ new WeakMap(), In = /* @__PURE__ */ new WeakMap();
function Xs(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Zs(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Xs(Sn(e));
}
function $n(e) {
  return $e(e) ? e : kt(
    e,
    !1,
    js,
    qs,
    Mn
  );
}
function Pn(e) {
  return kt(
    e,
    !0,
    Fs,
    Js,
    kn
  );
}
function We(e) {
  return kt(
    e,
    !0,
    zs,
    Ys,
    In
  );
}
function kt(e, t, n, o, s) {
  if (!L(e))
    return process.env.NODE_ENV !== "production" && Ie(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const l = s.get(e);
  if (l)
    return l;
  const r = Zs(e);
  if (r === 0)
    return e;
  const a = new Proxy(
    e,
    r === 2 ? o : n
  );
  return s.set(e, a), a;
}
function Ee(e) {
  return $e(e) ? Ee(e.__v_raw) : !!(e && e.__v_isReactive);
}
function $e(e) {
  return !!(e && e.__v_isReadonly);
}
function yt(e) {
  return !!(e && e.__v_isShallow);
}
function St(e) {
  return Ee(e) || $e(e);
}
function _(e) {
  const t = e && e.__v_raw;
  return t ? _(t) : e;
}
function eo(e) {
  return Object.isExtensible(e) && Os(e, "__v_skip", !0), e;
}
const It = (e) => L(e) ? $n(e) : e, $t = (e) => L(e) ? Pn(e) : e;
function A(e) {
  return !!(e && e.__v_isRef === !0);
}
function to(e) {
  return A(e) ? e.value : e;
}
const no = {
  get: (e, t, n) => to(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return A(s) && !A(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function so(e) {
  return Ee(e) ? e : new Proxy(e, no);
}
/**
* @vue/runtime-core v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const le = [];
function oo(e) {
  le.push(e);
}
function lo() {
  le.pop();
}
function O(e, ...t) {
  nt();
  const n = le.length ? le[le.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = ro();
  if (o)
    re(
      o,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        s.map(
          ({ vnode: l }) => `at <${Qn(n, l.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const l = [`[Vue warn]: ${e}`, ...t];
    s.length && l.push(`
`, ...io(s)), console.warn(...l);
  }
  st();
}
function ro() {
  let e = le[le.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function io(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...ao(n));
  }), t;
}
function ao({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${Qn(
    e.component,
    e.type,
    o
  )}`, l = ">" + n;
  return e.props ? [s, ...co(e.props), l] : [s + l];
}
function co(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Ln(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Ln(e, t, n) {
  return P(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : A(t) ? (t = Ln(e, _(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : D(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = _(t), n ? t : [`${e}=`, t]);
}
const Pt = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function re(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    Lt(s, t, n);
  }
}
function xe(e, t, n, o) {
  if (D(e)) {
    const l = re(e, t, n, o);
    return l && ws(l) && l.catch((r) => {
      Lt(r, t, n);
    }), l;
  }
  const s = [];
  for (let l = 0; l < e.length; l++)
    s.push(xe(e[l], t, n, o));
  return s;
}
function Lt(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let l = t.parent;
    const r = t.proxy, a = process.env.NODE_ENV !== "production" ? Pt[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const h = l.ec;
      if (h) {
        for (let d = 0; d < h.length; d++)
          if (h[d](e, r, a) === !1)
            return;
      }
      l = l.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      re(
        c,
        null,
        10,
        [e, r, a]
      );
      return;
    }
  }
  uo(e, n, s, o);
}
function uo(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = Pt[t];
    if (n && oo(n), O(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && lo(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Ye = !1, bt = !1;
const $ = [];
let X = 0;
const we = [];
let U = null, Y = 0;
const An = /* @__PURE__ */ Promise.resolve();
let At = null;
const fo = 100;
function po(e) {
  const t = At || An;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ho(e) {
  let t = X + 1, n = $.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = $[o], l = Pe(s);
    l < e || l === e && s.pre ? t = o + 1 : n = o;
  }
  return t;
}
function Ht(e) {
  (!$.length || !$.includes(
    e,
    Ye && e.allowRecurse ? X + 1 : X
  )) && (e.id == null ? $.push(e) : $.splice(ho(e.id), 0, e), Hn());
}
function Hn() {
  !Ye && !bt && (bt = !0, At = An.then(Fn));
}
function jn(e) {
  y(e) ? we.push(...e) : (!U || !U.includes(
    e,
    e.allowRecurse ? Y + 1 : Y
  )) && we.push(e), Hn();
}
function _o(e) {
  if (we.length) {
    const t = [...new Set(we)].sort(
      (n, o) => Pe(n) - Pe(o)
    );
    if (we.length = 0, U) {
      U.push(...t);
      return;
    }
    for (U = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Y = 0; Y < U.length; Y++)
      process.env.NODE_ENV !== "production" && zn(e, U[Y]) || U[Y]();
    U = null, Y = 0;
  }
}
const Pe = (e) => e.id == null ? 1 / 0 : e.id, vo = (e, t) => {
  const n = Pe(e) - Pe(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Fn(e) {
  bt = !1, Ye = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), $.sort(vo);
  const t = process.env.NODE_ENV !== "production" ? (n) => zn(e, n) : _e;
  try {
    for (X = 0; X < $.length; X++) {
      const n = $[X];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        re(n, null, 14);
      }
    }
  } finally {
    X = 0, $.length = 0, _o(e), Ye = !1, At = null, ($.length || we.length) && Fn(e);
  }
}
function zn(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > fo) {
      const o = t.ownerInstance, s = o && Yn(o.type);
      return Lt(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const Ce = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Nn().__VUE_HMR_RUNTIME__ = {
  createRecord: _t(mo),
  rerender: _t(go),
  reload: _t(Eo)
});
const Qe = /* @__PURE__ */ new Map();
function mo(e, t) {
  return Qe.has(e) ? !1 : (Qe.set(e, {
    initialDef: Me(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Me(e) {
  return Xn(e) ? e.__vccOpts : e;
}
function go(e, t) {
  const n = Qe.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Me(o.type).render = t), o.renderCache = [], o.effect.dirty = !0, o.update();
  }));
}
function Eo(e, t) {
  const n = Qe.get(e);
  if (!n)
    return;
  t = Me(t), _n(n.initialDef, t);
  const o = [...n.instances];
  for (const s of o) {
    const l = Me(s.type);
    Ce.has(l) || (l !== n.initialDef && _n(l, t), Ce.add(l)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (Ce.add(l), s.ceReload(t.styles), Ce.delete(l)) : s.parent ? (s.parent.effect.dirty = !0, Ht(s.parent.update)) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  jn(() => {
    for (const s of o)
      Ce.delete(
        Me(s.type)
      );
  });
}
function _n(e, t) {
  F(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function _t(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let pe, Ge = [];
function Bn(e, t) {
  var n, o;
  pe = e, pe ? (pe.enabled = !0, Ge.forEach(({ event: s, args: l }) => pe.emit(s, ...l)), Ge = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((l) => {
    Bn(l, t);
  }), setTimeout(() => {
    pe || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Ge = []);
  }, 3e3)) : Ge = [];
}
let W = null, wo = null;
const yo = Symbol.for("v-ndc"), So = (e) => e.__isSuspense;
function bo(e, t) {
  t && t.pendingBranch ? y(e) ? t.effects.push(...e) : t.effects.push(e) : jn(e);
}
const Oo = Symbol.for("v-scx"), No = () => {
  {
    const e = Ao(Oo);
    return e || process.env.NODE_ENV !== "production" && O(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, qe = {};
function Vo(e, t, {
  immediate: n,
  deep: o,
  flush: s,
  once: l,
  onTrack: r,
  onTrigger: a
} = J) {
  if (t && l) {
    const p = t;
    t = (...be) => {
      p(...be), j();
    };
  }
  process.env.NODE_ENV !== "production" && o !== void 0 && typeof o == "number" && O(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !t && (n !== void 0 && O(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && O(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), l !== void 0 && O(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = (p) => {
    O(
      "Invalid watch source: ",
      p,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, h = Se, d = (p) => o === !0 ? p : (
    // for deep: false, only traverse root-level properties
    ve(p, o === !1 ? 1 : void 0)
  );
  let E, S = !1, I = !1;
  if (A(e) ? (E = () => e.value, S = yt(e)) : Ee(e) ? (E = () => d(e), S = !0) : y(e) ? (I = !0, S = e.some((p) => Ee(p) || yt(p)), E = () => e.map((p) => {
    if (A(p))
      return p.value;
    if (Ee(p))
      return d(p);
    if (D(p))
      return re(p, h, 2);
    process.env.NODE_ENV !== "production" && c(p);
  })) : D(e) ? t ? E = () => re(e, h, 2) : E = () => (H && H(), xe(
    e,
    h,
    3,
    [v]
  )) : (E = _e, process.env.NODE_ENV !== "production" && c(e)), t && o) {
    const p = E;
    E = () => ve(p());
  }
  let H, v = (p) => {
    H = N.onStop = () => {
      re(p, h, 4), H = N.onStop = void 0;
    };
  }, ie;
  if (Ft)
    if (v = _e, t ? n && xe(t, h, 3, [
      E(),
      I ? [] : void 0,
      v
    ]) : E(), s === "sync") {
      const p = No();
      ie = p.__watcherHandles || (p.__watcherHandles = []);
    } else
      return _e;
  let k = I ? new Array(e.length).fill(qe) : qe;
  const T = () => {
    if (!(!N.active || !N.dirty))
      if (t) {
        const p = N.run();
        (o || S || (I ? p.some((be, lt) => ye(be, k[lt])) : ye(p, k))) && (H && H(), xe(t, h, 3, [
          p,
          // pass undefined as the old value when it's changed for the first time
          k === qe ? void 0 : I && k[0] === qe ? [] : k,
          v
        ]), k = p);
      } else
        N.run();
  };
  T.allowRecurse = !!t;
  let z;
  s === "sync" ? z = T : s === "post" ? z = () => yn(T, h && h.suspense) : (T.pre = !0, h && (T.id = h.uid), z = () => Ht(T));
  const N = new xs(E, _e, z), j = () => {
    N.stop();
  };
  return process.env.NODE_ENV !== "production" && (N.onTrack = r, N.onTrigger = a), t ? n ? T() : k = N.run() : s === "post" ? yn(
    N.run.bind(N),
    h && h.suspense
  ) : N.run(), ie && ie.push(j), j;
}
function Ro(e, t, n) {
  const o = this.proxy, s = P(e) ? e.includes(".") ? Co(o, e) : () => o[e] : e.bind(o, o);
  let l;
  D(t) ? l = t : (l = t.handler, n = t);
  const r = Jn(this), a = Vo(s, l.bind(o), n);
  return r(), a;
}
function Co(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
function ve(e, t, n = 0, o) {
  if (!L(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (n >= t)
      return e;
    n++;
  }
  if (o = o || /* @__PURE__ */ new Set(), o.has(e))
    return e;
  if (o.add(e), A(e))
    ve(e.value, t, n, o);
  else if (y(e))
    for (let s = 0; s < e.length; s++)
      ve(e[s], t, n, o);
  else if (Es(e) || ge(e))
    e.forEach((s) => {
      ve(s, t, n, o);
    });
  else if (Ss(e))
    for (const s in e)
      ve(e[s], t, n, o);
  return e;
}
function Do(e, t, n = Se, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), l = t.__weh || (t.__weh = (...r) => {
      if (n.isUnmounted)
        return;
      nt();
      const a = Jn(n), c = xe(t, n, e, r);
      return a(), st(), c;
    });
    return o ? s.unshift(l) : s.push(l), l;
  } else if (process.env.NODE_ENV !== "production") {
    const s = bs(Pt[e].replace(/ hook$/, ""));
    O(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const To = (e) => (t, n = Se) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Ft || e === "sp") && Do(e, (...o) => t(...o), n)
), xo = To("bum"), Ot = (e) => e ? Jo(e) ? Yo(e) || e.proxy : Ot(e.parent) : null, ke = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ F(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? We(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? We(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? We(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? We(e.refs) : e.refs,
    $parent: (e) => Ot(e.parent),
    $root: (e) => Ot(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Io(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Ht(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = po.bind(e.proxy)),
    $watch: (e) => Ro.bind(e)
  })
), Mo = (e) => e === "_" || e === "$", vt = (e, t) => e !== J && !e.__isScriptSetup && V(e, t), ko = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: s, props: l, accessCache: r, type: a, appContext: c } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let h;
    if (t[0] !== "$") {
      const I = r[t];
      if (I !== void 0)
        switch (I) {
          case 1:
            return o[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return l[t];
        }
      else {
        if (vt(o, t))
          return r[t] = 1, o[t];
        if (s !== J && V(s, t))
          return r[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (h = e.propsOptions[0]) && V(h, t)
        )
          return r[t] = 3, l[t];
        if (n !== J && V(n, t))
          return r[t] = 4, n[t];
        r[t] = 0;
      }
    }
    const d = ke[t];
    let E, S;
    if (d)
      return t === "$attrs" ? (M(e, "get", t), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && M(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (E = a.__cssModules) && (E = E[t])
    )
      return E;
    if (n !== J && V(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      S = c.config.globalProperties, V(S, t)
    )
      return S[t];
    process.env.NODE_ENV !== "production" && W && (!P(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== J && Mo(t[0]) && V(s, t) ? O(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === W && O(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: l } = e;
    return vt(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && V(s, t) ? (O(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== J && V(o, t) ? (o[t] = n, !0) : V(e.props, t) ? (process.env.NODE_ENV !== "production" && O(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && O(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(l, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : l[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: s, propsOptions: l }
  }, r) {
    let a;
    return !!n[r] || e !== J && V(e, r) || vt(t, r) || (a = l[0]) && V(a, r) || V(o, r) || V(ke, r) || V(s.config.globalProperties, r);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : V(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (ko.ownKeys = (e) => (O(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function vn(e) {
  return y(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Io(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: l,
    config: { optionMergeStrategies: r }
  } = e.appContext, a = l.get(t);
  let c;
  return a ? c = a : !s.length && !n && !o ? c = t : (c = {}, s.length && s.forEach(
    (h) => Xe(c, h, r, !0)
  ), Xe(c, t, r)), L(t) && l.set(t, c), c;
}
function Xe(e, t, n, o = !1) {
  const { mixins: s, extends: l } = t;
  l && Xe(e, l, n, !0), s && s.forEach(
    (r) => Xe(e, r, n, !0)
  );
  for (const r in t)
    if (o && r === "expose")
      process.env.NODE_ENV !== "production" && O(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = $o[r] || n && n[r];
      e[r] = a ? a(e[r], t[r]) : t[r];
    }
  return e;
}
const $o = {
  data: mn,
  props: En,
  emits: En,
  // objects
  methods: De,
  computed: De,
  // lifecycle
  beforeCreate: x,
  created: x,
  beforeMount: x,
  mounted: x,
  beforeUpdate: x,
  updated: x,
  beforeDestroy: x,
  beforeUnmount: x,
  destroyed: x,
  unmounted: x,
  activated: x,
  deactivated: x,
  errorCaptured: x,
  serverPrefetch: x,
  // assets
  components: De,
  directives: De,
  // watch
  watch: Lo,
  // provide / inject
  provide: mn,
  inject: Po
};
function mn(e, t) {
  return t ? e ? function() {
    return F(
      D(e) ? e.call(this, this) : e,
      D(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Po(e, t) {
  return De(gn(e), gn(t));
}
function gn(e) {
  if (y(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function x(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function De(e, t) {
  return e ? F(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function En(e, t) {
  return e ? y(e) && y(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : F(
    /* @__PURE__ */ Object.create(null),
    vn(e),
    vn(t ?? {})
  ) : t;
}
function Lo(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = F(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = x(e[o], t[o]);
  return n;
}
let wn = null;
function Ao(e, t, n = !1) {
  const o = Se || W;
  if (o || wn) {
    const s = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : wn._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && D(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && O(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && O("inject() can only be used inside setup() or functional components.");
}
const yn = bo, Ho = (e) => e.__isTeleport, Kn = Symbol.for("v-fgt"), jo = Symbol.for("v-txt"), Fo = Symbol.for("v-cmt");
let me = null;
function zo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Bo = (...e) => Gn(
  ...e
), Un = "__vInternal", Wn = ({ key: e }) => e ?? null, Je = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? P(e) || A(e) || D(e) ? { i: W, r: e, k: t, f: !!n } : e : null);
function Ko(e, t = null, n = null, o = 0, s = null, l = e === Kn ? 0 : 1, r = !1, a = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Wn(t),
    ref: t && Je(t),
    scopeId: wo,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: l,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: W
  };
  return a ? (jt(c, n), l & 128 && e.normalize(c)) : n && (c.shapeFlag |= P(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && O("VNode created with invalid key (NaN). VNode type:", c.type), // avoid a block node from tracking itself
  !r && // has current parent block
  me && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || l & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && me.push(c), c;
}
const Uo = process.env.NODE_ENV !== "production" ? Bo : Gn;
function Gn(e, t = null, n = null, o = 0, s = null, l = !1) {
  if ((!e || e === yo) && (process.env.NODE_ENV !== "production" && !e && O(`Invalid vnode type when creating vnode: ${e}.`), e = Fo), zo(e)) {
    const a = Ze(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && jt(a, n), !l && me && (a.shapeFlag & 6 ? me[me.indexOf(e)] = a : me.push(a)), a.patchFlag |= -2, a;
  }
  if (Xn(e) && (e = e.__vccOpts), t) {
    t = Wo(t);
    let { class: a, style: c } = t;
    a && !P(a) && (t.class = Ct(a)), L(c) && (St(c) && !y(c) && (c = F({}, c)), t.style = Rt(c));
  }
  const r = P(e) ? 1 : So(e) ? 128 : Ho(e) ? 64 : L(e) ? 4 : D(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && r & 4 && St(e) && (e = _(e), O(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Ko(
    e,
    t,
    n,
    o,
    s,
    r,
    l,
    !0
  );
}
function Wo(e) {
  return e ? St(e) || Un in e ? F({}, e) : e : null;
}
function Ze(e, t, n = !1) {
  const { props: o, ref: s, patchFlag: l, children: r } = e, a = t ? qo(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Wn(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? y(s) ? s.concat(Je(t)) : [s, Je(t)] : Je(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && l === -1 && y(r) ? r.map(qn) : r,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Kn ? l === -1 ? 16 : l | 16 : l,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ze(e.ssContent),
    ssFallback: e.ssFallback && Ze(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function qn(e) {
  const t = Ze(e);
  return y(e.children) && (t.children = e.children.map(qn)), t;
}
function Go(e = " ", t = 0) {
  return Uo(jo, null, e, t);
}
function jt(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (y(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), jt(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(Un in t) ? t._ctx = W : s === 3 && W && (W.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    D(t) ? (t = { default: t, _ctx: W }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Go(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function qo(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = Ct([t.class, o.class]));
      else if (s === "style")
        t.style = Rt([t.style, o.style]);
      else if (ms(s)) {
        const l = t[s], r = o[s];
        r && l !== r && !(y(l) && l.includes(r)) && (t[s] = l ? [].concat(l, r) : r);
      } else
        s !== "" && (t[s] = o[s]);
  }
  return t;
}
let Se = null, Nt;
{
  const e = Nn(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (l) => {
      s.length > 1 ? s.forEach((r) => r(l)) : s[0](l);
    };
  };
  Nt = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Se = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => Ft = n
  );
}
const Jn = (e) => {
  const t = Se;
  return Nt(e), e.scope.on(), () => {
    e.scope.off(), Nt(t);
  };
};
function Jo(e) {
  return e.vnode.shapeFlag & 4;
}
let Ft = !1;
function Yo(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(so(eo(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in ke)
          return ke[n](e);
      },
      has(t, n) {
        return n in t || n in ke;
      }
    }));
}
const Qo = /(?:^|[-_])(\w)/g, Xo = (e) => e.replace(Qo, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Yn(e, t = !0) {
  return D(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Qn(e, t, n = !1) {
  let o = Yn(t);
  if (!o && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e && e.parent) {
    const s = (l) => {
      for (const r in l)
        if (l[r] === t)
          return r;
    };
    o = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return o ? Xo(o) : n ? "App" : "Anonymous";
}
function Xn(e) {
  return D(e) && "__vccOpts" in e;
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
const de = (...e) => {
  g.debugEnabled && console.info("[LktFieldSelect] ", ...e);
}, zl = (e = !0) => {
  g.debugEnabled = e;
}, Zo = ["innerHTML"], el = {
  key: 2,
  class: "lkt-field-main lkt-field-main--select"
}, tl = ["id", "multiple"], nl = { class: "lkt-field-picked-option" }, sl = ["innerHTML"], ol = /* @__PURE__ */ he("div", { class: "lkt-field-dropdown-angle" }, [
  /* @__PURE__ */ he("i", { class: "lkt-field-icon-angle-down" })
], -1), ll = { key: 0 }, rl = ["title"], il = ["innerHTML"], al = { class: "lkt-field__select-search-container" }, cl = {
  key: 1,
  class: "lkt-field__select-options"
}, ul = ["onClick"], fl = {
  key: 0,
  class: "lkt-field__select-option"
}, dl = {
  key: 3,
  class: "lkt-field__state"
}, pl = ["title"], hl = ["title"], _l = {
  key: 3,
  class: "lkt-field-select__read"
}, vl = {
  key: 0,
  class: "lkt-field-select-empty"
}, ml = {
  key: 1,
  class: "lkt-field-select-empty"
}, gl = ["innerHTML", "title"], El = {
  key: 5,
  class: "lkt-field__state"
}, wl = ["title"], yl = {
  key: 4,
  class: "lkt-field-select__read-multiple"
}, Sl = { key: 0 }, bl = {
  key: 1,
  class: "lkt-field-select-empty"
}, Ol = {
  key: 2,
  class: "lkt-field-select-empty"
}, Nl = ["title"], Vl = ["innerHTML"], Rl = {
  key: 4,
  class: "lkt-field__state"
}, Cl = ["title"], Dl = /* @__PURE__ */ rs({
  __name: "LktFieldSelect",
  props: {
    modelValue: { default: "" },
    class: { default: "" },
    placeholder: { default: "" },
    label: { default: "" },
    palette: { default: "" },
    name: { default: on(16) },
    valid: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    closeOnSelect: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    readMode: { type: Boolean, default: !1 },
    searchable: { type: Boolean, default: !1 },
    upperDropdown: { type: Boolean, default: !1 },
    choiceDropdown: { type: Boolean, default: !1 },
    allowReadModeSwitch: { type: Boolean, default: !1 },
    switchEditionMessage: { default: "" },
    emptyLabel: { type: Boolean, default: !1 },
    options: { default: () => [] },
    multiple: { type: Boolean, default: !1 },
    reset: { type: Boolean, default: !1 },
    resetMessage: { default: "" },
    tags: { type: Boolean, default: !1 },
    autoloadResource: { type: Boolean, default: !1 },
    noOptionsMessage: { default: _s() },
    resource: { default: "" },
    resourceData: { default: () => ({}) },
    slotData: { default: () => ({}) },
    searchStringResourceParam: { default: "query" },
    searchPlaceholder: { default: "" },
    useResourceSlot: { default: "" },
    multipleDisplay: { default: "list" },
    multipleDisplayEdition: { default: "inline" },
    mandatory: { type: Boolean, default: !1 },
    mandatoryMessage: { default: "Mandatory" },
    emptyValueSlot: { default: "" },
    emptyValueText: { default: "" }
  },
  emits: ["update:modelValue", "click-ui", "selected-option", "results"],
  setup(e, { expose: t, emit: n }) {
    const o = n, s = e, l = is(), r = R(null), a = R(null), c = R(null), h = R(null), d = R(!s.readMode), E = on(16), S = R(new ln(s.options)), I = R(!1), H = R(s.modelValue), v = R(s.modelValue), ie = R(!1), k = R(!1), T = R(!1), z = R(S.value.all()), N = R(S.value.all()), j = R(""), p = R("");
    s.closeOnSelect === null ? I.value = s.multiple === !0 : I.value = s.closeOnSelect;
    const be = w(() => s.resource !== ""), lt = w(() => typeof s.valid == "function" ? s.valid() : s.valid), Zn = w(() => v.value !== H.value), es = w(() => {
      const i = ["lkt-field", "lkt-field-select"];
      return s.palette && i.push(`lkt-field--${s.palette}`), Zn.value && i.push("is-changed"), s.class && i.push(s.class), s.multiple && i.push("is-multiple"), s.disabled && i.push("is-disabled"), s.tags && i.push("with-tags"), s.upperDropdown && !s.choiceDropdown && i.push("lkt-field-select-upper-dropdown"), s.choiceDropdown && i.push("lkt-field-select-choice-dropdown"), s.mandatory && d.value && i.push("is-mandatory-field"), T.value && i.push("has-focus"), s.multiple && d.value && s.multipleDisplayEdition === "count" && i.push("size-sm"), s.multiple && !d.value && s.multipleDisplay === "count" && i.push("size-sm"), i.push(lt.value ? "is-valid" : "is-error"), i.push(s.modelValue ? "is-filled" : "is-empty"), i.join(" ");
    }), ts = w(() => {
      const i = [];
      return i.push(`lkt-field-select-read--${s.multipleDisplay}`), i.join(" ");
    }), ns = w(() => {
      const i = [];
      return i.push(`lkt-field-select-read--${s.multipleDisplayEdition}`), i.join(" ");
    }), zt = w(() => {
      let i = !1;
      return N.value.forEach((b) => {
        b.value == v.value && (i = !0);
      }), i;
    }), Oe = w(() => {
      let i = {};
      return N.value.forEach((b) => {
        b.value == v.value && (i = b);
      }), i;
    }), rt = w(() => {
      let i = "";
      return N.value.forEach((b) => {
        b.value == v.value && (i = b.label);
      }), i;
    }), Bt = w(() => {
      let i = [];
      return s.multiple && N.value.forEach((b) => {
        v.value.forEach((B) => {
          B == b.value && i.push(b);
        });
      }), i;
    }), Le = w(() => Array.isArray(v.value) ? v.value.length : 0), Kt = w(() => s.allowReadModeSwitch || s.reset && Ae.value), Ae = w(() => s.multiple ? v.value.length > 0 : v.value !== ""), Ut = w(() => s.label.startsWith("__:") ? ds(s.label.substring(3)) : s.label), ee = () => {
      const i = c.value.getBoundingClientRect();
      let b = i.top + c.value.offsetHeight, B = [
        "position: fixed",
        "transform: none",
        "transition: none",
        "left: " + i.left + "px",
        "width: " + c.value.offsetWidth + "px"
      ];
      if (s.upperDropdown) {
        let dt = window.outerHeight - i.bottom - c.value.offsetHeight;
        B.push("bottom: " + dt + "px");
      } else
        B.push("top: " + b + "px");
      p.value = B.join(";");
    }, ae = () => {
      N.value = S.value.all(), z.value = S.value.filter(j.value), k.value = !1, de("buildVisibleOptions: optionsValue", S.value), de("buildVisibleOptions: optionsHaystack", N.value), de("buildVisibleOptions: visibleOptions", z.value);
    }, Wt = () => {
      j.value = "", d.value && ae();
    }, it = async () => {
      if (!(!d.value && !s.autoloadResource))
        if (k.value = !1, be.value) {
          k.value = !0, s.searchStringResourceParam && (s.resourceData[s.searchStringResourceParam] = j.value);
          const i = await fs(s.resource, s.resourceData);
          S.value.receiveOptions(i.data), ae(), o("results", i.data);
        } else
          ae();
    }, Gt = () => {
      s.multiple ? (v.value.splice(0, v.value.length), v.value = [...H.value]) : v.value = H.value;
    }, ss = () => s.modelValue, Ne = (i) => {
      d.value && (Wt(), at(i), ee(), T.value = !T.value, T.value && pt(() => {
        it(), r.value.focus(), pt(() => {
          r.value.focus();
        });
      }));
    };
    Ve(() => s.readMode, (i) => d.value = !i), Ve(() => s.modelValue, (i) => {
      de("Updated props.modelValue", i), v.value = i;
    }), Ve(v, (i) => {
      o("update:modelValue", i), o("selected-option", S.value.findByValue(i)), ie.value = !0, pt(() => ie.value = !1);
    }), Ve(j, ae), Ve(() => s.options, (i) => {
      de("Updated props.options", i, S.value), S.value = new ln(i), ae();
    });
    const qt = (i) => {
      if (s.multiple) {
        let b = v.value.findIndex((B) => B == i.value);
        return typeof b > "u" && (b = -1), b;
      }
      return -1;
    }, os = (i) => {
      if (s.multiple) {
        let b = qt(i);
        b === -1 ? v.value.push(i.value) : v.value.splice(b, 1);
      } else
        v.value = i.value, T.value = !1;
    }, ls = (i) => s.multiple ? qt(i) !== -1 : i.value == v.value, at = (i) => {
      if (!c.value.contains(i.target)) {
        Wt(), T.value = !1;
        return;
      }
    }, ct = (i) => {
      d.value = !d.value, d.value && focus();
    };
    ae(), t({
      reset: Gt,
      value: ss
    }), s.autoloadResource && s.resource !== "" && (de("Auto loading Resource", s.resource, s.resourceData, s.autoloadResource), it());
    const ce = w(() => s.useResourceSlot ? s.useResourceSlot : s.resource), Jt = w(() => g.NO_OPTIONS_MESSAGE), Yt = w(() => s.emptyValueText !== "" ? s.emptyValueText : g.emptyValueText), He = w(() => s.emptyValueSlot !== "" && typeof g.customResourceValueSlots[s.emptyValueSlot] < "u" || g.defaultEmptyValueSlot && typeof g.customResourceValueSlots[g.defaultEmptyValueSlot] < "u"), Qt = w(() => g.customResourceValueSlots[s.emptyValueSlot] ?? g.customResourceValueSlots[g.defaultEmptyValueSlot]), ut = w(() => ce.value !== "" && typeof g.customResourceOptionSlots[ce.value] < "u"), ft = w(() => g.customResourceOptionSlots[ce.value]), Xt = w(() => ce.value !== "" && typeof g.customResourceValueSlots[ce.value] < "u"), Zt = w(() => g.customResourceValueSlots[ce.value]);
    return as(() => {
      window.addEventListener("click", at), window.addEventListener("scroll", ee), window.addEventListener("resize", ee);
      let i = c.value.closest(".lkt-modal");
      i && i.addEventListener("scroll", ee);
    }), xo(() => {
      window.removeEventListener("click", at), window.removeEventListener("scroll", ee), window.removeEventListener("resize", ee);
      let i = c.value.closest(".lkt-modal");
      i && i.removeEventListener("scroll", ee);
    }), (i, b) => {
      const B = en("lkt-field-text"), dt = en("lkt-loader");
      return u(), f("div", {
        class: ue(es.value),
        "data-show-ui": !1,
        ref: (m) => c.value = m
      }, [
        K(l).prefix ? te(i.$slots, "prefix", { key: 0 }) : C("", !0),
        Ut.value ? (u(), f("label", {
          key: 1,
          innerHTML: Ut.value,
          onClick: je(Ne, ["stop", "prevent"])
        }, null, 8, Zo)) : C("", !0),
        d.value ? (u(), f("div", el, [
          d.value ? (u(), f("select", {
            key: 0,
            ref: (m) => a.value = m,
            id: K(E),
            onFocus: je(Ne, ["stop", "prevent"]),
            onBlur: je(Ne, ["stop", "prevent"]),
            multiple: i.multiple,
            style: { height: "0", opacity: "0", width: "0", border: "none", overflow: "hidden", padding: "0" }
          }, null, 40, tl)) : C("", !0),
          i.multiple ? (u(), f("div", {
            key: 2,
            class: "lkt-field__select-value-multiple",
            onClick: Ne
          }, [
            i.multipleDisplayEdition === "count" ? (u(), f("div", ll, fe(Le.value), 1)) : (u(), f("ul", {
              key: 1,
              class: ue(ns.value)
            }, [
              (u(!0), f(Re, null, ht(Bt.value, (m) => (u(), f("li", {
                title: m.label
              }, [
                K(l).option ? te(i.$slots, "option", {
                  key: 0,
                  option: m,
                  data: i.slotData
                }) : ut.value ? (u(), G(ne(ft.value), {
                  key: 1,
                  option: m
                }, null, 8, ["option"])) : (u(), f("div", {
                  key: 2,
                  class: "lkt-field-select__read-value",
                  innerHTML: m.label
                }, null, 8, il))
              ], 8, rl))), 256))
            ], 2))
          ])) : (u(), f("div", {
            key: 1,
            class: "lkt-field__select-value",
            onClick: Ne
          }, [
            he("div", nl, [
              Ae.value && K(l).option ? te(i.$slots, "option", {
                key: 0,
                option: Oe.value,
                data: i.slotData
              }) : Ae.value && ut.value ? (u(), G(ne(ft.value), {
                key: 1,
                option: Oe.value
              }, null, 8, ["option"])) : (u(), f("div", {
                key: 2,
                class: "lkt-field-select__read-value",
                innerHTML: rt.value
              }, null, 8, sl))
            ]),
            ol
          ])),
          tn(he("div", {
            ref_key: "dropdownEl",
            ref: h,
            class: "lkt-field__select-dropdown",
            style: cs(p.value)
          }, [
            tn(he("div", al, [
              us(B, {
                ref: (m) => r.value = m,
                modelValue: j.value,
                "onUpdate:modelValue": b[0] || (b[0] = (m) => j.value = m),
                placeholder: i.searchPlaceholder,
                tabindex: -1,
                class: "lkt-field__select-search",
                onKeyup: it
              }, null, 8, ["modelValue", "placeholder"])
            ], 512), [
              [nn, i.searchable]
            ]),
            k.value ? (u(), G(dt, { key: 0 })) : C("", !0),
            !i.readonly && !k.value ? (u(), f("ul", cl, [
              (u(!0), f(Re, null, ht(z.value, (m) => (u(), f("li", {
                class: ue(["lkt-field__select-option", { "is-active": i.multiple ? ls(m) : m.value == v.value }]),
                onClick: je((Tl) => os(m), ["prevent", "stop"])
              }, [
                K(l).option ? te(i.$slots, "option", {
                  key: 0,
                  option: m,
                  data: i.slotData
                }) : C("", !0),
                ut.value ? (u(), G(ne(ft.value), {
                  key: 1,
                  option: m
                }, null, 8, ["option"])) : (u(), f(Re, { key: 2 }, [
                  sn(fe(m.label), 1)
                ], 64))
              ], 10, ul))), 256)),
              z.value.length === 0 && (K(l)["no-results"] || Jt.value) ? (u(), f("li", fl, [
                K(l)["no-results"] ? te(i.$slots, "no-results", { key: 0 }) : (u(), f(Re, { key: 1 }, [
                  sn(fe(Jt.value), 1)
                ], 64))
              ])) : C("", !0)
            ])) : C("", !0)
          ], 4), [
            [nn, T.value]
          ]),
          Kt.value ? (u(), f("div", dl, [
            s.reset && Ae.value ? (u(), f("i", {
              key: 0,
              class: "lkt-field__reset-icon",
              title: i.resetText,
              onClick: Gt
            }, null, 8, pl)) : C("", !0),
            i.allowReadModeSwitch ? (u(), f("i", {
              key: 1,
              class: "lkt-field__edit-icon",
              title: i.switchEditionMessage,
              onClick: ct
            }, null, 8, hl)) : C("", !0)
          ])) : C("", !0)
        ])) : C("", !0),
        !d.value && !i.multiple ? (u(), f("div", _l, [
          !zt.value && He.value ? (u(), f("div", vl, [
            (u(), G(ne(Qt.value)))
          ])) : !zt.value && !He.value ? (u(), f("div", ml, fe(Yt.value), 1)) : K(l).value ? te(i.$slots, "value", {
            key: 2,
            option: Oe.value,
            data: i.slotData
          }) : Xt.value ? (u(), G(ne(Zt.value), {
            key: 3,
            option: Oe.value
          }, null, 8, ["option"])) : (u(), f("div", {
            key: 4,
            class: ue(["lkt-field-select__read-value", "lkt-field-option option-" + Oe.value.value]),
            innerHTML: rt.value,
            title: rt.value
          }, null, 10, gl)),
          Kt.value ? (u(), f("div", El, [
            i.allowReadModeSwitch ? (u(), f("i", {
              key: 0,
              class: "lkt-field__edit-icon",
              title: i.switchEditionMessage,
              onClick: ct
            }, null, 8, wl)) : C("", !0)
          ])) : C("", !0)
        ])) : C("", !0),
        !d.value && i.multiple ? (u(), f("div", yl, [
          i.multipleDisplay === "count" ? (u(), f("div", Sl, fe(Le.value), 1)) : Le.value === 0 && He.value ? (u(), f("div", bl, [
            (u(), G(ne(Qt.value)))
          ])) : Le.value === 0 && !He.value ? (u(), f("div", Ol, fe(Yt.value), 1)) : (u(), f("ul", {
            key: 3,
            class: ue(ts.value)
          }, [
            (u(!0), f(Re, null, ht(Bt.value, (m) => (u(), f("li", {
              title: m.label,
              class: ue("lkt-field-option option-" + m.value)
            }, [
              K(l).value ? te(i.$slots, "value", {
                key: 0,
                option: m,
                data: i.slotData
              }) : Xt.value ? (u(), G(ne(Zt.value), {
                key: 1,
                option: m,
                data: i.slotData
              }, null, 8, ["option", "data"])) : (u(), f("div", {
                key: 2,
                class: "lkt-field-select__read-value",
                innerHTML: m.label
              }, null, 8, Vl))
            ], 10, Nl))), 256))
          ], 2)),
          i.allowReadModeSwitch ? (u(), f("div", Rl, [
            he("i", {
              class: "lkt-field__edit-icon",
              title: s.switchEditionMessage,
              onClick: ct
            }, null, 8, Cl)
          ])) : C("", !0)
        ])) : C("", !0)
      ], 2);
    };
  }
}), Bl = {
  install: (e) => {
    e.component("lkt-field-select") === void 0 && e.component("lkt-field-select", Dl), e.component("lkt-loader") === void 0 && e.use(ps), e.component("lkt-field-text") === void 0 && e.use(hs);
  }
};
export {
  zl as debugLktFieldSelect,
  Bl as default,
  Fl as setDefaultSelectEmptyValueSlot,
  Ll as setNoOptionsMessage,
  Hl as setResourceOptionSlot,
  jl as setResourceValueSlot,
  Al as setSelectEmptyValueMessage
};
