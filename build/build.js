import { defineComponent as Le, useSlots as Be, ref as p, computed as i, watch as H, nextTick as Q, resolveComponent as X, openBlock as t, createElementBlock as a, normalizeClass as D, unref as h, renderSlot as w, createCommentVNode as c, withModifiers as Y, createElementVNode as F, createBlock as k, resolveDynamicComponent as b, toDisplayString as T, Fragment as A, renderList as Z, createVNode as fe, withCtx as Ne, withDirectives as $e, vShow as He, createTextVNode as ve } from "vue";
import { generateRandomString as me } from "lkt-string-tools";
import { httpCall as Ae } from "lkt-http-client";
import { __ as Fe } from "lkt-i18n";
import Ie from "lkt-loader";
import Pe from "lkt-field-text";
const _ = class _ {
};
_.debugEnabled = !1, _.NO_OPTIONS_MESSAGE = "", _.emptyValueText = "", _.defaultEmptyValueSlot = "", _.customResourceOptionSlots = {}, _.customResourceValueSlots = {};
let u = _;
const Ue = () => u.NO_OPTIONS_MESSAGE, gl = (s) => (u.NO_OPTIONS_MESSAGE = s, !0), Rl = (s) => (u.emptyValueText = s, !0), Ml = (s, d) => (u.customResourceOptionSlots[s] = d, !0), Dl = (s, d) => (u.customResourceValueSlots[s] = d, !0), Tl = (s, d) => {
  u.defaultEmptyValueSlot = s, d && (u.customResourceValueSlots[s] = d);
};
class he {
  constructor(d = []) {
    Array.isArray(d) || (d = []), this.value = [...d];
  }
  all() {
    return this.value;
  }
  filter(d) {
    if (d === "")
      return this.all();
    const y = d.toLowerCase();
    return this.value.filter((S) => S.label.toLowerCase().indexOf(y) !== -1);
  }
  findByValue(d) {
    if (d)
      return this.value.find((y) => y.value === d);
  }
  receiveOptions(d) {
    const y = /* @__PURE__ */ new Set(), S = [...this.value, ...d], l = [];
    S.forEach((v) => {
      let O = [v.value, v.label].join("-");
      y.has(O) || (l.push(v), y.add(O));
    }), this.value = l;
  }
}
const C = (...s) => {
  u.debugEnabled && console.info("[LktFieldSelect] ", ...s);
}, Cl = (s = !0) => {
  u.debugEnabled = s;
}, je = ["innerHTML"], Ge = {
  key: 2,
  class: "lkt-field-main lkt-field-main--select"
}, qe = ["id", "multiple"], ze = { class: "lkt-field-picked-option" }, Ke = ["innerHTML"], We = /* @__PURE__ */ F("div", { class: "lkt-field-dropdown-angle" }, [
  /* @__PURE__ */ F("i", { class: "lkt-field-icon-angle-down" })
], -1), Je = { key: 0 }, Qe = ["title"], Xe = ["innerHTML"], Ye = { class: "lkt-field__select-search-container" }, Ze = {
  key: 1,
  class: "lkt-field__select-options"
}, xe = ["onClick"], el = {
  key: 0,
  class: "lkt-field__select-option"
}, ll = {
  key: 3,
  class: "lkt-field__state"
}, tl = ["title"], al = ["title"], ol = {
  key: 3,
  class: "lkt-field-select__read"
}, sl = {
  key: 0,
  class: "lkt-field-select-empty"
}, ul = {
  key: 1,
  class: "lkt-field-select-empty"
}, il = ["innerHTML", "title"], nl = {
  key: 5,
  class: "lkt-field__state"
}, rl = ["title"], dl = {
  key: 4,
  class: "lkt-field-select__read-multiple"
}, cl = { key: 0 }, pl = {
  key: 1,
  class: "lkt-field-select-empty"
}, fl = {
  key: 2,
  class: "lkt-field-select-empty"
}, vl = ["title"], ml = ["innerHTML"], hl = {
  key: 4,
  class: "lkt-field__state"
}, yl = ["title"], kl = /* @__PURE__ */ Le({
  __name: "LktFieldSelect",
  props: {
    modelValue: { default: "" },
    class: { default: "" },
    placeholder: { default: "" },
    label: { default: "" },
    palette: { default: "" },
    name: { default: me(16) },
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
    noOptionsMessage: { default: Ue() },
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
  setup(s, { expose: d, emit: y }) {
    const S = y, l = s, v = Be(), O = p(null), ye = p(null), x = p(null), ke = p(null), f = p(!l.readMode), _e = me(16), m = p(new he(l.options)), ee = p(!1), G = p(l.modelValue), r = p(l.modelValue), le = p(!1), L = p(!1), V = p(!1), I = p(m.value.all()), E = p(m.value.all()), g = p("");
    l.closeOnSelect === null ? ee.value = l.multiple === !0 : ee.value = l.closeOnSelect;
    const Se = i(() => l.resource !== ""), Ve = i(() => typeof l.valid == "function" ? l.valid() : l.valid), we = i(() => r.value !== G.value), be = i(() => {
      const e = ["lkt-field", "lkt-field-select"];
      return l.palette && e.push(`lkt-field--${l.palette}`), we.value && e.push("is-changed"), l.class && e.push(l.class), l.multiple && e.push("is-multiple"), l.disabled && e.push("is-disabled"), l.tags && e.push("with-tags"), l.upperDropdown && !l.choiceDropdown && e.push("lkt-field-select-upper-dropdown"), l.choiceDropdown && e.push("lkt-field-select-choice-dropdown"), l.mandatory && f.value && e.push("is-mandatory-field"), V.value && e.push("has-focus"), l.multiple && f.value && l.multipleDisplayEdition === "count" && e.push("size-sm"), l.multiple && !f.value && l.multipleDisplay === "count" && e.push("size-sm"), e.push(Ve.value ? "is-valid" : "is-error"), e.push(l.modelValue ? "is-filled" : "is-empty"), e.join(" ");
    }), Oe = i(() => {
      const e = [];
      return e.push(`lkt-field-select-read--${l.multipleDisplay}`), e.join(" ");
    }), Ee = i(() => {
      const e = [];
      return e.push(`lkt-field-select-read--${l.multipleDisplayEdition}`), e.join(" ");
    }), te = i(() => {
      let e = !1;
      return E.value.forEach((n) => {
        n.value == r.value && (e = !0);
      }), e;
    }), B = i(() => {
      let e = {};
      return E.value.forEach((n) => {
        n.value == r.value && (e = n);
      }), e;
    }), q = i(() => {
      let e = "";
      return E.value.forEach((n) => {
        n.value == r.value && (e = n.label);
      }), e;
    }), ae = i(() => {
      let e = [];
      return l.multiple && E.value.forEach((n) => {
        r.value.forEach(($) => {
          $ == n.value && e.push(n);
        });
      }), e;
    }), P = i(() => Array.isArray(r.value) ? r.value.length : 0), oe = i(() => l.allowReadModeSwitch || l.reset && U.value), U = i(() => l.multiple ? r.value.length > 0 : r.value !== ""), se = i(() => l.label.startsWith("__:") ? Fe(l.label.substring(3)) : l.label), R = () => {
      E.value = m.value.all(), I.value = m.value.filter(g.value), L.value = !1, C("buildVisibleOptions: optionsValue", m.value), C("buildVisibleOptions: optionsHaystack", E.value), C("buildVisibleOptions: visibleOptions", I.value);
    }, ge = () => {
      g.value = "", f.value && R();
    }, z = async () => {
      if (!(!f.value && !l.autoloadResource))
        if (L.value = !1, Se.value) {
          L.value = !0, l.searchStringResourceParam && (l.resourceData[l.searchStringResourceParam] = g.value);
          const e = await Ae(l.resource, l.resourceData);
          m.value.receiveOptions(e.data), R(), S("results", e.data);
        } else
          R();
    }, ue = () => {
      l.multiple ? (r.value.splice(0, r.value.length), r.value = [...G.value]) : r.value = G.value;
    }, Re = () => l.modelValue, N = (e) => {
      f.value && (ge(), V.value = !V.value, V.value && Q(() => {
        z(), O.value.focus(), Q(() => {
          O.value.focus();
        });
      }));
    };
    H(() => l.readMode, (e) => f.value = !e), H(() => l.modelValue, (e) => {
      C("Updated props.modelValue", e), r.value = e;
    }), H(r, (e) => {
      S("update:modelValue", e), S("selected-option", m.value.findByValue(e)), le.value = !0, Q(() => le.value = !1);
    }), H(g, R), H(() => l.options, (e) => {
      C("Updated props.options", e, m.value), m.value = new he(e), R();
    });
    const ie = (e) => {
      if (l.multiple) {
        let n = r.value.findIndex(($) => $ == e.value);
        return typeof n > "u" && (n = -1), n;
      }
      return -1;
    }, Me = (e) => {
      if (l.multiple) {
        let n = ie(e);
        n === -1 ? r.value.push(e.value) : r.value.splice(n, 1);
      } else
        r.value = e.value, V.value = !1;
    }, De = (e) => l.multiple ? ie(e) !== -1 : e.value == r.value, K = (e) => {
      f.value = !f.value, f.value && focus();
    };
    R(), d({
      reset: ue,
      value: Re
    }), l.autoloadResource && l.resource !== "" && (C("Auto loading Resource", l.resource, l.resourceData, l.autoloadResource), z());
    const M = i(() => l.useResourceSlot ? l.useResourceSlot : l.resource), ne = i(() => u.NO_OPTIONS_MESSAGE), re = i(() => l.emptyValueText !== "" ? l.emptyValueText : u.emptyValueText), j = i(() => l.emptyValueSlot !== "" && typeof u.customResourceValueSlots[l.emptyValueSlot] < "u" || u.defaultEmptyValueSlot && typeof u.customResourceValueSlots[u.defaultEmptyValueSlot] < "u"), de = i(() => u.customResourceValueSlots[l.emptyValueSlot] ?? u.customResourceValueSlots[u.defaultEmptyValueSlot]), W = i(() => M.value !== "" && typeof u.customResourceOptionSlots[M.value] < "u"), J = i(() => u.customResourceOptionSlots[M.value]), ce = i(() => M.value !== "" && typeof u.customResourceValueSlots[M.value] < "u"), pe = i(() => u.customResourceValueSlots[M.value]);
    return (e, n) => {
      const $ = X("lkt-field-text"), Te = X("lkt-loader"), Ce = X("lkt-tooltip");
      return t(), a("div", {
        class: D(be.value),
        "data-show-ui": !1,
        ref: (o) => x.value = o
      }, [
        h(v).prefix ? w(e.$slots, "prefix", { key: 0 }) : c("", !0),
        se.value ? (t(), a("label", {
          key: 1,
          innerHTML: se.value,
          onClick: N
        }, null, 8, je)) : c("", !0),
        f.value ? (t(), a("div", Ge, [
          f.value ? (t(), a("select", {
            key: 0,
            ref: (o) => ye.value = o,
            id: h(_e),
            onFocus: Y(N, ["stop", "prevent"]),
            onBlur: Y(N, ["stop", "prevent"]),
            multiple: e.multiple,
            style: { height: "0", opacity: "0", width: "0", border: "none", overflow: "hidden", padding: "0" }
          }, null, 40, qe)) : c("", !0),
          e.multiple ? (t(), a("div", {
            key: 2,
            class: "lkt-field__select-value-multiple",
            onClick: N
          }, [
            e.multipleDisplayEdition === "count" ? (t(), a("div", Je, T(P.value), 1)) : (t(), a("ul", {
              key: 1,
              class: D(Ee.value)
            }, [
              (t(!0), a(A, null, Z(ae.value, (o) => (t(), a("li", {
                title: o.label
              }, [
                h(v).option ? w(e.$slots, "option", {
                  key: 0,
                  option: o,
                  data: e.slotData
                }) : W.value ? (t(), k(b(J.value), {
                  key: 1,
                  option: o
                }, null, 8, ["option"])) : (t(), a("div", {
                  key: 2,
                  class: "lkt-field-select__read-value",
                  innerHTML: o.label
                }, null, 8, Xe))
              ], 8, Qe))), 256))
            ], 2))
          ])) : (t(), a("div", {
            key: 1,
            class: "lkt-field__select-value",
            onClick: N
          }, [
            F("div", ze, [
              U.value && h(v).option ? w(e.$slots, "option", {
                key: 0,
                option: B.value,
                data: e.slotData
              }) : U.value && W.value ? (t(), k(b(J.value), {
                key: 1,
                option: B.value
              }, null, 8, ["option"])) : (t(), a("div", {
                key: 2,
                class: "lkt-field-select__read-value",
                innerHTML: q.value
              }, null, 8, Ke))
            ]),
            We
          ])),
          fe(Ce, {
            ref_key: "dropdownEl",
            ref: ke,
            class: "lkt-field__select-dropdown",
            modelValue: V.value,
            "onUpdate:modelValue": n[1] || (n[1] = (o) => V.value = o),
            referrer: x.value,
            "referrer-width": "",
            "location-x": "left-corner",
            "location-y": e.upperDropdown ? "top" : "bottom"
          }, {
            default: Ne(() => [
              $e(F("div", Ye, [
                fe($, {
                  ref: (o) => O.value = o,
                  modelValue: g.value,
                  "onUpdate:modelValue": n[0] || (n[0] = (o) => g.value = o),
                  placeholder: e.searchPlaceholder,
                  tabindex: -1,
                  class: "lkt-field__select-search",
                  onKeyup: z
                }, null, 8, ["modelValue", "placeholder"])
              ], 512), [
                [He, e.searchable]
              ]),
              L.value ? (t(), k(Te, { key: 0 })) : c("", !0),
              !e.readonly && !L.value ? (t(), a("ul", Ze, [
                (t(!0), a(A, null, Z(I.value, (o) => (t(), a("li", {
                  class: D(["lkt-field__select-option", { "is-active": e.multiple ? De(o) : o.value == r.value }]),
                  onClick: Y((_l) => Me(o), ["prevent", "stop"])
                }, [
                  h(v).option ? w(e.$slots, "option", {
                    key: 0,
                    option: o,
                    data: e.slotData
                  }) : c("", !0),
                  W.value ? (t(), k(b(J.value), {
                    key: 1,
                    option: o
                  }, null, 8, ["option"])) : (t(), a(A, { key: 2 }, [
                    ve(T(o.label), 1)
                  ], 64))
                ], 10, xe))), 256)),
                I.value.length === 0 && (h(v)["no-results"] || ne.value) ? (t(), a("li", el, [
                  h(v)["no-results"] ? w(e.$slots, "no-results", { key: 0 }) : (t(), a(A, { key: 1 }, [
                    ve(T(ne.value), 1)
                  ], 64))
                ])) : c("", !0)
              ])) : c("", !0)
            ]),
            _: 3
          }, 8, ["modelValue", "referrer", "location-y"]),
          oe.value ? (t(), a("div", ll, [
            l.reset && U.value ? (t(), a("i", {
              key: 0,
              class: "lkt-field__reset-icon",
              title: e.resetText,
              onClick: ue
            }, null, 8, tl)) : c("", !0),
            e.allowReadModeSwitch ? (t(), a("i", {
              key: 1,
              class: "lkt-field__edit-icon",
              title: e.switchEditionMessage,
              onClick: K
            }, null, 8, al)) : c("", !0)
          ])) : c("", !0)
        ])) : c("", !0),
        !f.value && !e.multiple ? (t(), a("div", ol, [
          !te.value && j.value ? (t(), a("div", sl, [
            (t(), k(b(de.value)))
          ])) : !te.value && !j.value ? (t(), a("div", ul, T(re.value), 1)) : h(v).value ? w(e.$slots, "value", {
            key: 2,
            option: B.value,
            data: e.slotData
          }) : ce.value ? (t(), k(b(pe.value), {
            key: 3,
            option: B.value
          }, null, 8, ["option"])) : (t(), a("div", {
            key: 4,
            class: D(["lkt-field-select__read-value", "lkt-field-option option-" + B.value.value]),
            innerHTML: q.value,
            title: q.value
          }, null, 10, il)),
          oe.value ? (t(), a("div", nl, [
            e.allowReadModeSwitch ? (t(), a("i", {
              key: 0,
              class: "lkt-field__edit-icon",
              title: e.switchEditionMessage,
              onClick: K
            }, null, 8, rl)) : c("", !0)
          ])) : c("", !0)
        ])) : c("", !0),
        !f.value && e.multiple ? (t(), a("div", dl, [
          e.multipleDisplay === "count" ? (t(), a("div", cl, T(P.value), 1)) : P.value === 0 && j.value ? (t(), a("div", pl, [
            (t(), k(b(de.value)))
          ])) : P.value === 0 && !j.value ? (t(), a("div", fl, T(re.value), 1)) : (t(), a("ul", {
            key: 3,
            class: D(Oe.value)
          }, [
            (t(!0), a(A, null, Z(ae.value, (o) => (t(), a("li", {
              title: o.label,
              class: D("lkt-field-option option-" + o.value)
            }, [
              h(v).value ? w(e.$slots, "value", {
                key: 0,
                option: o,
                data: e.slotData
              }) : ce.value ? (t(), k(b(pe.value), {
                key: 1,
                option: o,
                data: e.slotData
              }, null, 8, ["option", "data"])) : (t(), a("div", {
                key: 2,
                class: "lkt-field-select__read-value",
                innerHTML: o.label
              }, null, 8, ml))
            ], 10, vl))), 256))
          ], 2)),
          e.allowReadModeSwitch ? (t(), a("div", hl, [
            F("i", {
              class: "lkt-field__edit-icon",
              title: l.switchEditionMessage,
              onClick: K
            }, null, 8, yl)
          ])) : c("", !0)
        ])) : c("", !0)
      ], 2);
    };
  }
}), Ll = {
  install: (s) => {
    s.component("lkt-field-select") === void 0 && s.component("lkt-field-select", kl), s.component("lkt-loader") === void 0 && s.use(Ie), s.component("lkt-field-text") === void 0 && s.use(Pe);
  }
};
export {
  Cl as debugLktFieldSelect,
  Ll as default,
  Tl as setDefaultSelectEmptyValueSlot,
  gl as setNoOptionsMessage,
  Ml as setResourceOptionSlot,
  Dl as setResourceValueSlot,
  Rl as setSelectEmptyValueMessage
};
