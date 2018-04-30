!function(global, undefined) {
    var tempDefine, tempModule, tempExports;
    "function" == typeof define ? (tempDefine = define,
    define = null) : "undefined" != typeof exports && (tempModule = module,
    tempExports = exports,
    exports = null,
    module = null),
    !function() {
        function e(e, t) {
            return (/string|function/.test(typeof t) ? a : s)(e, t)
        }
        function t(e, n) {
            return "string" != typeof e && (n = typeof e,
            "number" === n ? e += "" : e = "function" === n ? t(e.call(e)) : ""),
            e
        }
        function n(e) {
            return p[e]
        }
        function r(e) {
            return t(e).replace(/&(?![\w#]+;)|[<>"']/g, n)
        }
        function i(e, t) {
            if (f(e))
                for (var n = 0, r = e.length; r > n; n++)
                    t.call(e, e[n], n, e);
            else
                for (n in e)
                    t.call(e, e[n], n)
        }
        function o(e, t) {
            var n = /(\/)[^\/]+\1\.\.\1/
              , r = ("./" + e).replace(/[^\/]+$/, "")
              , i = r + t;
            for (i = i.replace(/\/\.\//g, "/"); i.match(n); )
                i = i.replace(n, "/");
            return i
        }
        function s(t, n) {
            var r = e.get(t) || u({
                filename: t,
                name: "Render Error",
                message: "Template not found"
            });
            return n ? r(n) : r
        }
        function a(e, t) {
            if ("string" == typeof t) {
                var n = t;
                t = function() {
                    return new c(n)
                }
            }
            var r = l[e] = function(n) {
                try {
                    return new t(n,e) + ""
                } catch (r) {
                    return u(r)()
                }
            }
            ;
            return r.prototype = t.prototype = d,
            r.toString = function() {
                return t + ""
            }
            ,
            r
        }
        function u(e) {
            var t = "{Template Error}"
              , n = e.stack || "";
            if (n)
                n = n.split("\n").slice(0, 2).join("\n");
            else
                for (var r in e)
                    n += "<" + r + ">\n" + e[r] + "\n\n";
            return function() {
                return "object" == typeof console && console.error(t + "\n\n" + n),
                t
            }
        }
        var l = e.cache = {}
          , c = this.String
          , p = {
            "<": "&#60;",
            ">": "&#62;",
            '"': "&#34;",
            "'": "&#39;",
            "&": "&#38;"
        }
          , f = Array.isArray || function(e) {
            return "[object Array]" === {}.toString.call(e)
        }
          , d = e.utils = {
            $helpers: {},
            $include: function(e, t, n) {
                return e = o(n, e),
                s(e, t)
            },
            $string: t,
            $escape: r,
            $each: i
        }
          , h = e.helpers = d.$helpers;
        e.get = function(e) {
            return l[e.replace(/^\.\//, "")]
        }
        ,
        e.helper = function(e, t) {
            h[e] = t
        }
        ,
        "function" == typeof define ? define(function() {
            return e
        }) : "undefined" != typeof exports ? module.exports = e : this.template = e
    }(),
    !function(e, t) {
        function n(e) {
            var t = e.length
              , n = ue.type(e);
            return !ue.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)))
        }
        function r(e) {
            var t = ke[e] = {};
            return ue.each(e.match(ce) || [], function(e, n) {
                t[n] = !0
            }),
            t
        }
        function i(e, n, r, i) {
            if (ue.acceptData(e)) {
                var o, s, a = ue.expando, u = "string" == typeof n, l = e.nodeType, c = l ? ue.cache : e, p = l ? e[a] : e[a] && a;
                if (p && c[p] && (i || c[p].data) || !u || r !== t)
                    return p || (l ? e[a] = p = Z.pop() || ue.guid++ : p = a),
                    c[p] || (c[p] = {},
                    l || (c[p].toJSON = ue.noop)),
                    ("object" == typeof n || "function" == typeof n) && (i ? c[p] = ue.extend(c[p], n) : c[p].data = ue.extend(c[p].data, n)),
                    o = c[p],
                    i || (o.data || (o.data = {}),
                    o = o.data),
                    r !== t && (o[ue.camelCase(n)] = r),
                    u ? (s = o[n],
                    null == s && (s = o[ue.camelCase(n)])) : s = o,
                    s
            }
        }
        function o(e, t, n) {
            if (ue.acceptData(e)) {
                var r, i, o, s = e.nodeType, u = s ? ue.cache : e, l = s ? e[ue.expando] : ue.expando;
                if (u[l]) {
                    if (t && (o = n ? u[l] : u[l].data)) {
                        ue.isArray(t) ? t = t.concat(ue.map(t, ue.camelCase)) : t in o ? t = [t] : (t = ue.camelCase(t),
                        t = t in o ? [t] : t.split(" "));
                        for (r = 0,
                        i = t.length; i > r; r++)
                            delete o[t[r]];
                        if (!(n ? a : ue.isEmptyObject)(o))
                            return
                    }
                    (n || (delete u[l].data,
                    a(u[l]))) && (s ? ue.cleanData([e], !0) : ue.support.deleteExpando || u != u.window ? delete u[l] : u[l] = null)
                }
            }
        }
        function s(e, n, r) {
            if (r === t && 1 === e.nodeType) {
                var i = "data-" + n.replace(Se, "-$1").toLowerCase();
                if (r = e.getAttribute(i),
                "string" == typeof r) {
                    try {
                        r = "true" === r || "false" !== r && ("null" === r ? null : +r + "" === r ? +r : Ne.test(r) ? ue.parseJSON(r) : r)
                    } catch (o) {}
                    ue.data(e, n, r)
                } else
                    r = t
            }
            return r
        }
        function a(e) {
            var t;
            for (t in e)
                if (("data" !== t || !ue.isEmptyObject(e[t])) && "toJSON" !== t)
                    return !1;
            return !0
        }
        function u() {
            return !0
        }
        function l() {
            return !1
        }
        function c(e, t) {
            do
                e = e[t];
            while (e && 1 !== e.nodeType);return e
        }
        function p(e, t, n) {
            if (t = t || 0,
            ue.isFunction(t))
                return ue.grep(e, function(e, r) {
                    var i = !!t.call(e, r, e);
                    return i === n
                });
            if (t.nodeType)
                return ue.grep(e, function(e) {
                    return e === t === n
                });
            if ("string" == typeof t) {
                var r = ue.grep(e, function(e) {
                    return 1 === e.nodeType
                });
                if (We.test(t))
                    return ue.filter(t, r, !n);
                t = ue.filter(t, r)
            }
            return ue.grep(e, function(e) {
                return ue.inArray(e, t) >= 0 === n
            })
        }
        function f(e) {
            var t = Xe.split("|")
              , n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length; )
                    n.createElement(t.pop());
            return n
        }
        function d(e, t) {
            return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
        }
        function h(e) {
            var t = e.getAttributeNode("type");
            return e.type = (t && t.specified) + "/" + e.type,
            e
        }
        function g(e) {
            var t = it.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"),
            e
        }
        function m(e, t) {
            for (var n, r = 0; null != (n = e[r]); r++)
                ue._data(n, "globalEval", !t || ue._data(t[r], "globalEval"))
        }
        function y(e, t) {
            if (1 === t.nodeType && ue.hasData(e)) {
                var n, r, i, o = ue._data(e), s = ue._data(t, o), a = o.events;
                if (a) {
                    delete s.handle,
                    s.events = {};
                    for (n in a)
                        for (r = 0,
                        i = a[n].length; i > r; r++)
                            ue.event.add(t, n, a[n][r])
                }
                s.data && (s.data = ue.extend({}, s.data))
            }
        }
        function v(e, t) {
            var n, r, i;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(),
                !ue.support.noCloneEvent && t[ue.expando]) {
                    i = ue._data(t);
                    for (r in i.events)
                        ue.removeEvent(t, r, i.handle);
                    t.removeAttribute(ue.expando)
                }
                "script" === n && t.text !== e.text ? (h(t).text = e.text,
                g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
                ue.support.html5Clone && e.innerHTML && !ue.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tt.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
                t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
        }
        function b(e, n) {
            var r, i, o = 0, s = typeof e.getElementsByTagName !== J ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== J ? e.querySelectorAll(n || "*") : t;
            if (!s)
                for (s = [],
                r = e.childNodes || e; null != (i = r[o]); o++)
                    !n || ue.nodeName(i, n) ? s.push(i) : ue.merge(s, b(i, n));
            return n === t || n && ue.nodeName(e, n) ? ue.merge([e], s) : s
        }
        function x(e) {
            tt.test(e.type) && (e.defaultChecked = e.checked)
        }
        function w(e, t) {
            if (t in e)
                return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Nt.length; i--; )
                if (t = Nt[i] + n,
                t in e)
                    return t;
            return r
        }
        function T(e, t) {
            return e = t || e,
            "none" === ue.css(e, "display") || !ue.contains(e.ownerDocument, e)
        }
        function k(e, t) {
            for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++)
                r = e[s],
                r.style && (o[s] = ue._data(r, "olddisplay"),
                n = r.style.display,
                t ? (o[s] || "none" !== n || (r.style.display = ""),
                "" === r.style.display && T(r) && (o[s] = ue._data(r, "olddisplay", E(r.nodeName)))) : o[s] || (i = T(r),
                (n && "none" !== n || !i) && ue._data(r, "olddisplay", i ? n : ue.css(r, "display"))));
            for (s = 0; a > s; s++)
                r = e[s],
                r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
            return e
        }
        function N(e, t, n) {
            var r = yt.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
        }
        function S(e, t, n, r, i) {
            for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2)
                "margin" === n && (s += ue.css(e, n + kt[o], !0, i)),
                r ? ("content" === n && (s -= ue.css(e, "padding" + kt[o], !0, i)),
                "margin" !== n && (s -= ue.css(e, "border" + kt[o] + "Width", !0, i))) : (s += ue.css(e, "padding" + kt[o], !0, i),
                "padding" !== n && (s += ue.css(e, "border" + kt[o] + "Width", !0, i)));
            return s
        }
        function C(e, t, n) {
            var r = !0
              , i = "width" === t ? e.offsetWidth : e.offsetHeight
              , o = ct(e)
              , s = ue.support.boxSizing && "border-box" === ue.css(e, "boxSizing", !1, o);
            if (0 >= i || null == i) {
                if (i = pt(e, t, o),
                (0 > i || null == i) && (i = e.style[t]),
                vt.test(i))
                    return i;
                r = s && (ue.support.boxSizingReliable || i === e.style[t]),
                i = parseFloat(i) || 0
            }
            return i + S(e, t, n || (s ? "border" : "content"), r, o) + "px"
        }
        function E(e) {
            var t = K
              , n = xt[e];
            return n || (n = j(e, t),
            "none" !== n && n || (lt = (lt || ue("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement),
            t = (lt[0].contentWindow || lt[0].contentDocument).document,
            t.write("<!doctype html><html><body>"),
            t.close(),
            n = j(e, t),
            lt.detach()),
            xt[e] = n),
            n
        }
        function j(e, t) {
            var n = ue(t.createElement(e)).appendTo(t.body)
              , r = ue.css(n[0], "display");
            return n.remove(),
            r
        }
        function A(e, t, n, r) {
            var i;
            if (ue.isArray(t))
                ue.each(t, function(t, i) {
                    n || Ct.test(e) ? r(e, i) : A(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
                });
            else if (n || "object" !== ue.type(t))
                r(e, t);
            else
                for (i in t)
                    A(e + "[" + i + "]", t[i], n, r)
        }
        function D(e) {
            return function(t, n) {
                "string" != typeof t && (n = t,
                t = "*");
                var r, i = 0, o = t.toLowerCase().match(ce) || [];
                if (ue.isFunction(n))
                    for (; r = o[i++]; )
                        "+" === r[0] ? (r = r.slice(1) || "*",
                        (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }
        function _(e, n, r, i) {
            function o(u) {
                var l;
                return s[u] = !0,
                ue.each(e[u] || [], function(e, u) {
                    var c = u(n, r, i);
                    return "string" != typeof c || a || s[c] ? a ? !(l = c) : t : (n.dataTypes.unshift(c),
                    o(c),
                    !1)
                }),
                l
            }
            var s = {}
              , a = e === Wt;
            return o(n.dataTypes[0]) || !s["*"] && o("*")
        }
        function M(e, n) {
            var r, i, o = ue.ajaxSettings.flatOptions || {};
            for (i in n)
                n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
            return r && ue.extend(!0, e, r),
            e
        }
        function H(e, n, r) {
            var i, o, s, a, u = e.contents, l = e.dataTypes, c = e.responseFields;
            for (a in c)
                a in r && (n[c[a]] = r[a]);
            for (; "*" === l[0]; )
                l.shift(),
                o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
            if (o)
                for (a in u)
                    if (u[a] && u[a].test(o)) {
                        l.unshift(a);
                        break
                    }
            if (l[0]in r)
                s = l[0];
            else {
                for (a in r) {
                    if (!l[0] || e.converters[a + " " + l[0]]) {
                        s = a;
                        break
                    }
                    i || (i = a)
                }
                s = s || i
            }
            return s ? (s !== l[0] && l.unshift(s),
            r[s]) : t
        }
        function L(e, t) {
            var n, r, i, o, s = {}, a = 0, u = e.dataTypes.slice(), l = u[0];
            if (e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            u[1])
                for (i in e.converters)
                    s[i.toLowerCase()] = e.converters[i];
            for (; r = u[++a]; )
                if ("*" !== r) {
                    if ("*" !== l && l !== r) {
                        if (i = s[l + " " + r] || s["* " + r],
                        !i)
                            for (n in s)
                                if (o = n.split(" "),
                                o[1] === r && (i = s[l + " " + o[0]] || s["* " + o[0]])) {
                                    i === !0 ? i = s[n] : s[n] !== !0 && (r = o[0],
                                    u.splice(a--, 0, r));
                                    break
                                }
                        if (i !== !0)
                            if (i && e["throws"])
                                t = i(t);
                            else
                                try {
                                    t = i(t)
                                } catch (c) {
                                    return {
                                        state: "parsererror",
                                        error: i ? c : "No conversion from " + l + " to " + r
                                    }
                                }
                    }
                    l = r
                }
            return {
                state: "success",
                data: t
            }
        }
        function I() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }
        function O() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }
        function q() {
            return setTimeout(function() {
                Gt = t
            }),
            Gt = ue.now()
        }
        function P(e, t) {
            ue.each(t, function(t, n) {
                for (var r = (on[t] || []).concat(on["*"]), i = 0, o = r.length; o > i; i++)
                    if (r[i].call(e, t, n))
                        return
            })
        }
        function $(e, t, n) {
            var r, i, o = 0, s = rn.length, a = ue.Deferred().always(function() {
                delete u.elem
            }), u = function() {
                if (i)
                    return !1;
                for (var t = Gt || q(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; u > s; s++)
                    l.tweens[s].run(o);
                return a.notifyWith(e, [l, o, n]),
                1 > o && u ? n : (a.resolveWith(e, [l]),
                !1)
            }, l = a.promise({
                elem: e,
                props: ue.extend({}, t),
                opts: ue.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Gt || q(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = ue.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r),
                    r
                },
                stop: function(t) {
                    var n = 0
                      , r = t ? l.tweens.length : 0;
                    if (i)
                        return this;
                    for (i = !0; r > n; n++)
                        l.tweens[n].run(1);
                    return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]),
                    this
                }
            }), c = l.props;
            for (F(c, l.opts.specialEasing); s > o; o++)
                if (r = rn[o].call(l, e, c, l.opts))
                    return r;
            return P(l, c),
            ue.isFunction(l.opts.start) && l.opts.start.call(e, l),
            ue.fx.timer(ue.extend(u, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }
        function F(e, t) {
            var n, r, i, o, s;
            for (i in e)
                if (r = ue.camelCase(i),
                o = t[r],
                n = e[i],
                ue.isArray(n) && (o = n[1],
                n = e[i] = n[0]),
                i !== r && (e[r] = n,
                delete e[i]),
                s = ue.cssHooks[r],
                s && "expand"in s) {
                    n = s.expand(n),
                    delete e[r];
                    for (i in n)
                        i in e || (e[i] = n[i],
                        t[i] = o)
                } else
                    t[r] = o
        }
        function R(e, t, n) {
            var r, i, o, s, a, u, l, c, p, f = this, d = e.style, h = {}, g = [], m = e.nodeType && T(e);
            n.queue || (c = ue._queueHooks(e, "fx"),
            null == c.unqueued && (c.unqueued = 0,
            p = c.empty.fire,
            c.empty.fire = function() {
                c.unqueued || p()
            }
            ),
            c.unqueued++,
            f.always(function() {
                f.always(function() {
                    c.unqueued--,
                    ue.queue(e, "fx").length || c.empty.fire()
                })
            })),
            1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY],
            "inline" === ue.css(e, "display") && "none" === ue.css(e, "float") && (ue.support.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")),
            n.overflow && (d.overflow = "hidden",
            ue.support.shrinkWrapBlocks || f.always(function() {
                d.overflow = n.overflow[0],
                d.overflowX = n.overflow[1],
                d.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (s = t[i],
                en.exec(s)) {
                    if (delete t[i],
                    u = u || "toggle" === s,
                    s === (m ? "hide" : "show"))
                        continue;
                    g.push(i)
                }
            if (o = g.length) {
                a = ue._data(e, "fxshow") || ue._data(e, "fxshow", {}),
                "hidden"in a && (m = a.hidden),
                u && (a.hidden = !m),
                m ? ue(e).show() : f.done(function() {
                    ue(e).hide()
                }),
                f.done(function() {
                    var t;
                    ue._removeData(e, "fxshow");
                    for (t in h)
                        ue.style(e, t, h[t])
                });
                for (i = 0; o > i; i++)
                    r = g[i],
                    l = f.createTween(r, m ? a[r] : 0),
                    h[r] = a[r] || ue.style(e, r),
                    r in a || (a[r] = l.start,
                    m && (l.end = l.start,
                    l.start = "width" === r || "height" === r ? 1 : 0))
            }
        }
        function B(e, t, n, r, i) {
            return new B.prototype.init(e,t,n,r,i)
        }
        function W(e, t) {
            var n, r = {
                height: e
            }, i = 0;
            for (t = t ? 1 : 0; 4 > i; i += 2 - t)
                n = kt[i],
                r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e),
            r
        }
        function U(e) {
            return ue.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }
        var z, X, J = typeof t, K = e.document, Q = e.location, Y = e.jQuery, V = e.$, G = {}, Z = [], ee = "1.9.1", te = Z.concat, ne = Z.push, re = Z.slice, ie = Z.indexOf, oe = G.toString, se = G.hasOwnProperty, ae = ee.trim, ue = function(e, t) {
            return new ue.fn.init(e,t,X)
        }, le = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ce = /\S+/g, pe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, fe = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, he = /^[\],:{}\s]*$/, ge = /(?:^|:|,)(?:\s*\[)+/g, me = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, ye = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, ve = /^-ms-/, be = /-([\da-z])/gi, xe = function(e, t) {
            return t.toUpperCase()
        }, we = function(e) {
            (K.addEventListener || "load" === e.type || "complete" === K.readyState) && (Te(),
            ue.ready())
        }, Te = function() {
            K.addEventListener ? (K.removeEventListener("DOMContentLoaded", we, !1),
            e.removeEventListener("load", we, !1)) : (K.detachEvent("onreadystatechange", we),
            e.detachEvent("onload", we))
        };
        ue.fn = ue.prototype = {
            jquery: ee,
            constructor: ue,
            init: function(e, n, r) {
                var i, o;
                if (!e)
                    return this;
                if ("string" == typeof e) {
                    if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : fe.exec(e),
                    !i || !i[1] && n)
                        return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                    if (i[1]) {
                        if (n = n instanceof ue ? n[0] : n,
                        ue.merge(this, ue.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : K, !0)),
                        de.test(i[1]) && ue.isPlainObject(n))
                            for (i in n)
                                ue.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                        return this
                    }
                    if (o = K.getElementById(i[2]),
                    o && o.parentNode) {
                        if (o.id !== i[2])
                            return r.find(e);
                        this.length = 1,
                        this[0] = o
                    }
                    return this.context = K,
                    this.selector = e,
                    this
                }
                return e.nodeType ? (this.context = this[0] = e,
                this.length = 1,
                this) : ue.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector,
                this.context = e.context),
                ue.makeArray(e, this))
            },
            selector: "",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return re.call(this)
            },
            get: function(e) {
                return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
            },
            pushStack: function(e) {
                var t = ue.merge(this.constructor(), e);
                return t.prevObject = this,
                t.context = this.context,
                t
            },
            each: function(e, t) {
                return ue.each(this, e, t)
            },
            ready: function(e) {
                return ue.ready.promise().done(e),
                this
            },
            slice: function() {
                return this.pushStack(re.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length
                  , n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            map: function(e) {
                return this.pushStack(ue.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: ne,
            sort: [].sort,
            splice: [].splice
        },
        ue.fn.init.prototype = ue.fn,
        ue.extend = ue.fn.extend = function() {
            var e, n, r, i, o, s, a = arguments[0] || {}, u = 1, l = arguments.length, c = !1;
            for ("boolean" == typeof a && (c = a,
            a = arguments[1] || {},
            u = 2),
            "object" == typeof a || ue.isFunction(a) || (a = {}),
            l === u && (a = this,
            --u); l > u; u++)
                if (null != (o = arguments[u]))
                    for (i in o)
                        e = a[i],
                        r = o[i],
                        a !== r && (c && r && (ue.isPlainObject(r) || (n = ue.isArray(r))) ? (n ? (n = !1,
                        s = e && ue.isArray(e) ? e : []) : s = e && ue.isPlainObject(e) ? e : {},
                        a[i] = ue.extend(c, s, r)) : r !== t && (a[i] = r));
            return a
        }
        ,
        ue.extend({
            noConflict: function(t) {
                return e.$ === ue && (e.$ = V),
                t && e.jQuery === ue && (e.jQuery = Y),
                ue
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? ue.readyWait++ : ue.ready(!0)
            },
            ready: function(e) {
                if (e === !0 ? !--ue.readyWait : !ue.isReady) {
                    if (!K.body)
                        return setTimeout(ue.ready);
                    ue.isReady = !0,
                    e !== !0 && --ue.readyWait > 0 || (z.resolveWith(K, [ue]),
                    ue.fn.trigger && ue(K).trigger("ready").off("ready"))
                }
            },
            isFunction: function(e) {
                return "function" === ue.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === ue.type(e)
            }
            ,
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? G[oe.call(e)] || "object" : typeof e
            },
            isPlainObject: function(e) {
                if (!e || "object" !== ue.type(e) || e.nodeType || ue.isWindow(e))
                    return !1;
                try {
                    if (e.constructor && !se.call(e, "constructor") && !se.call(e.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (n) {
                    return !1
                }
                var r;
                for (r in e)
                    ;
                return r === t || se.call(e, r)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            error: function(e) {
                throw Error(e)
            },
            parseHTML: function(e, t, n) {
                if (!e || "string" != typeof e)
                    return null;
                "boolean" == typeof t && (n = t,
                t = !1),
                t = t || K;
                var r = de.exec(e)
                  , i = !n && [];
                return r ? [t.createElement(r[1])] : (r = ue.buildFragment([e], t, i),
                i && ue(i).remove(),
                ue.merge([], r.childNodes))
            },
            parseJSON: function(n) {
                return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = ue.trim(n),
                n && he.test(n.replace(me, "@").replace(ye, "]").replace(ge, ""))) ? Function("return " + n)() : (ue.error("Invalid JSON: " + n),
                t)
            },
            parseXML: function(n) {
                var r, i;
                if (!n || "string" != typeof n)
                    return null;
                try {
                    e.DOMParser ? (i = new DOMParser,
                    r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"),
                    r.async = "false",
                    r.loadXML(n))
                } catch (o) {
                    r = t
                }
                return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ue.error("Invalid XML: " + n),
                r
            },
            noop: function() {},
            globalEval: function(t) {
                t && ue.trim(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                }
                )(t)
            },
            camelCase: function(e) {
                return e.replace(ve, "ms-").replace(be, xe)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, r) {
                var i, o = 0, s = e.length, a = n(e);
                if (r) {
                    if (a)
                        for (; s > o && (i = t.apply(e[o], r),
                        i !== !1); o++)
                            ;
                    else
                        for (o in e)
                            if (i = t.apply(e[o], r),
                            i === !1)
                                break
                } else if (a)
                    for (; s > o && (i = t.call(e[o], o, e[o]),
                    i !== !1); o++)
                        ;
                else
                    for (o in e)
                        if (i = t.call(e[o], o, e[o]),
                        i === !1)
                            break;
                return e
            },
            trim: ae && !ae.call("\ufeff ") ? function(e) {
                return null == e ? "" : ae.call(e)
            }
            : function(e) {
                return null == e ? "" : (e + "").replace(pe, "")
            }
            ,
            makeArray: function(e, t) {
                var r = t || [];
                return null != e && (n(Object(e)) ? ue.merge(r, "string" == typeof e ? [e] : e) : ne.call(r, e)),
                r
            },
            inArray: function(e, t, n) {
                var r;
                if (t) {
                    if (ie)
                        return ie.call(t, e, n);
                    for (r = t.length,
                    n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                        if (n in t && t[n] === e)
                            return n
                }
                return -1
            },
            merge: function(e, n) {
                var r = n.length
                  , i = e.length
                  , o = 0;
                if ("number" == typeof r)
                    for (; r > o; o++)
                        e[i++] = n[o];
                else
                    for (; n[o] !== t; )
                        e[i++] = n[o++];
                return e.length = i,
                e
            },
            grep: function(e, t, n) {
                var r, i = [], o = 0, s = e.length;
                for (n = !!n; s > o; o++)
                    r = !!t(e[o], o),
                    n !== r && i.push(e[o]);
                return i
            },
            map: function(e, t, r) {
                var i, o = 0, s = e.length, a = n(e), u = [];
                if (a)
                    for (; s > o; o++)
                        i = t(e[o], o, r),
                        null != i && (u[u.length] = i);
                else
                    for (o in e)
                        i = t(e[o], o, r),
                        null != i && (u[u.length] = i);
                return te.apply([], u)
            },
            guid: 1,
            proxy: function(e, n) {
                var r, i, o;
                return "string" == typeof n && (o = e[n],
                n = e,
                e = o),
                ue.isFunction(e) ? (r = re.call(arguments, 2),
                i = function() {
                    return e.apply(n || this, r.concat(re.call(arguments)))
                }
                ,
                i.guid = e.guid = e.guid || ue.guid++,
                i) : t
            },
            access: function(e, n, r, i, o, s, a) {
                var u = 0
                  , l = e.length
                  , c = null == r;
                if ("object" === ue.type(r)) {
                    o = !0;
                    for (u in r)
                        ue.access(e, n, u, r[u], !0, s, a)
                } else if (i !== t && (o = !0,
                ue.isFunction(i) || (a = !0),
                c && (a ? (n.call(e, i),
                n = null) : (c = n,
                n = function(e, t, n) {
                    return c.call(ue(e), n)
                }
                )),
                n))
                    for (; l > u; u++)
                        n(e[u], r, a ? i : i.call(e[u], u, n(e[u], r)));
                return o ? e : c ? n.call(e) : l ? n(e[0], r) : s
            },
            now: function() {
                return (new Date).getTime()
            }
        }),
        ue.ready.promise = function(t) {
            if (!z)
                if (z = ue.Deferred(),
                "complete" === K.readyState)
                    setTimeout(ue.ready);
                else if (K.addEventListener)
                    K.addEventListener("DOMContentLoaded", we, !1),
                    e.addEventListener("load", we, !1);
                else {
                    K.attachEvent("onreadystatechange", we),
                    e.attachEvent("onload", we);
                    var n = !1;
                    try {
                        n = null == e.frameElement && K.documentElement
                    } catch (r) {}
                    n && n.doScroll && function i() {
                        if (!ue.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (e) {
                                return setTimeout(i, 50)
                            }
                            Te(),
                            ue.ready()
                        }
                    }()
                }
            return z.promise(t)
        }
        ,
        ue.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            G["[object " + t + "]"] = t.toLowerCase()
        }),
        X = ue(K);
        var ke = {};
        ue.Callbacks = function(e) {
            e = "string" == typeof e ? ke[e] || r(e) : ue.extend({}, e);
            var n, i, o, s, a, u, l = [], c = !e.once && [], p = function(t) {
                for (i = e.memory && t,
                o = !0,
                a = u || 0,
                u = 0,
                s = l.length,
                n = !0; l && s > a; a++)
                    if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        i = !1;
                        break
                    }
                n = !1,
                l && (c ? c.length && p(c.shift()) : i ? l = [] : f.disable())
            }, f = {
                add: function() {
                    if (l) {
                        var t = l.length;
                        !function r(t) {
                            ue.each(t, function(t, n) {
                                var i = ue.type(n);
                                "function" === i ? e.unique && f.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                            })
                        }(arguments),
                        n ? s = l.length : i && (u = t,
                        p(i))
                    }
                    return this
                },
                remove: function() {
                    return l && ue.each(arguments, function(e, t) {
                        for (var r; (r = ue.inArray(t, l, r)) > -1; )
                            l.splice(r, 1),
                            n && (s >= r && s--,
                            a >= r && a--)
                    }),
                    this
                },
                has: function(e) {
                    return e ? ue.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [],
                    this
                },
                disable: function() {
                    return l = c = i = t,
                    this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return c = t,
                    i || f.disable(),
                    this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(e, t) {
                    return t = t || [],
                    t = [e, t.slice ? t.slice() : t],
                    !l || o && !c || (n ? c.push(t) : p(t)),
                    this
                },
                fire: function() {
                    return f.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!o
                }
            };
            return f
        }
        ,
        ue.extend({
            Deferred: function(e) {
                var t = [["resolve", "done", ue.Callbacks("once memory"), "resolved"], ["reject", "fail", ue.Callbacks("once memory"), "rejected"], ["notify", "progress", ue.Callbacks("memory")]]
                  , n = "pending"
                  , r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments),
                        this
                    },
                    then: function() {
                        var e = arguments;
                        return ue.Deferred(function(n) {
                            ue.each(t, function(t, o) {
                                var s = o[0]
                                  , a = ue.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && ue.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }),
                            e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ue.extend(e, r) : r
                    }
                }
                  , i = {};
                return r.pipe = r.then,
                ue.each(t, function(e, o) {
                    var s = o[2]
                      , a = o[3];
                    r[o[1]] = s.add,
                    a && s.add(function() {
                        n = a
                    }, t[1 ^ e][2].disable, t[2][2].lock),
                    i[o[0]] = function() {
                        return i[o[0] + "With"](this === i ? r : this, arguments),
                        this
                    }
                    ,
                    i[o[0] + "With"] = s.fireWith
                }),
                r.promise(i),
                e && e.call(i, i),
                i
            },
            when: function(e) {
                var t, n, r, i = 0, o = re.call(arguments), s = o.length, a = 1 !== s || e && ue.isFunction(e.promise) ? s : 0, u = 1 === a ? e : ue.Deferred(), l = function(e, n, r) {
                    return function(i) {
                        n[e] = this,
                        r[e] = arguments.length > 1 ? re.call(arguments) : i,
                        r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                    }
                };
                if (s > 1)
                    for (t = Array(s),
                    n = Array(s),
                    r = Array(s); s > i; i++)
                        o[i] && ue.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --a;
                return a || u.resolveWith(r, o),
                u.promise()
            }
        }),
        ue.support = function() {
            var t, n, r, i, o, s, a, u, l, c, p = K.createElement("div");
            if (p.setAttribute("className", "t"),
            p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
            n = p.getElementsByTagName("*"),
            r = p.getElementsByTagName("a")[0],
            !n || !r || !n.length)
                return {};
            o = K.createElement("select"),
            a = o.appendChild(K.createElement("option")),
            i = p.getElementsByTagName("input")[0],
            r.style.cssText = "top:1px;float:left;opacity:.5",
            t = {
                getSetAttribute: "t" !== p.className,
                leadingWhitespace: 3 === p.firstChild.nodeType,
                tbody: !p.getElementsByTagName("tbody").length,
                htmlSerialize: !!p.getElementsByTagName("link").length,
                style: /top/.test(r.getAttribute("style")),
                hrefNormalized: "/a" === r.getAttribute("href"),
                opacity: /^0.5/.test(r.style.opacity),
                cssFloat: !!r.style.cssFloat,
                checkOn: !!i.value,
                optSelected: a.selected,
                enctype: !!K.createElement("form").enctype,
                html5Clone: "<:nav></:nav>" !== K.createElement("nav").cloneNode(!0).outerHTML,
                boxModel: "CSS1Compat" === K.compatMode,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                boxSizingReliable: !0,
                pixelPosition: !1
            },
            i.checked = !0,
            t.noCloneChecked = i.cloneNode(!0).checked,
            o.disabled = !0,
            t.optDisabled = !a.disabled;
            try {
                delete p.test
            } catch (f) {
                t.deleteExpando = !1
            }
            i = K.createElement("input"),
            i.setAttribute("value", ""),
            t.input = "" === i.getAttribute("value"),
            i.value = "t",
            i.setAttribute("type", "radio"),
            t.radioValue = "t" === i.value,
            i.setAttribute("checked", "t"),
            i.setAttribute("name", "t"),
            s = K.createDocumentFragment(),
            s.appendChild(i),
            t.appendChecked = i.checked,
            t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked,
            p.attachEvent && (p.attachEvent("onclick", function() {
                t.noCloneEvent = !1
            }),
            p.cloneNode(!0).click());
            for (c in {
                submit: !0,
                change: !0,
                focusin: !0
            })
                p.setAttribute(u = "on" + c, "t"),
                t[c + "Bubbles"] = u in e || p.attributes[u].expando === !1;
            return p.style.backgroundClip = "content-box",
            p.cloneNode(!0).style.backgroundClip = "",
            t.clearCloneStyle = "content-box" === p.style.backgroundClip,
            ue(function() {
                var n, r, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", s = K.getElementsByTagName("body")[0];
                s && (n = K.createElement("div"),
                n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
                s.appendChild(n).appendChild(p),
                p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                i = p.getElementsByTagName("td"),
                i[0].style.cssText = "padding:0;margin:0;border:0;display:none",
                l = 0 === i[0].offsetHeight,
                i[0].style.display = "",
                i[1].style.display = "none",
                t.reliableHiddenOffsets = l && 0 === i[0].offsetHeight,
                p.innerHTML = "",
                p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
                t.boxSizing = 4 === p.offsetWidth,
                t.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop,
                e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(p, null) || {}).top,
                t.boxSizingReliable = "4px" === (e.getComputedStyle(p, null) || {
                    width: "4px"
                }).width,
                r = p.appendChild(K.createElement("div")),
                r.style.cssText = p.style.cssText = o,
                r.style.marginRight = r.style.width = "0",
                p.style.width = "1px",
                t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)),
                typeof p.style.zoom !== J && (p.innerHTML = "",
                p.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1",
                t.inlineBlockNeedsLayout = 3 === p.offsetWidth,
                p.style.display = "block",
                p.innerHTML = "<div></div>",
                p.firstChild.style.width = "5px",
                t.shrinkWrapBlocks = 3 !== p.offsetWidth,
                t.inlineBlockNeedsLayout && (s.style.zoom = 1)),
                s.removeChild(n),
                n = p = i = r = null)
            }),
            n = o = s = a = r = i = null,
            t
        }();
        var Ne = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/
          , Se = /([A-Z])/g;
        ue.extend({
            cache: {},
            expando: "jQuery" + (ee + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(e) {
                return e = e.nodeType ? ue.cache[e[ue.expando]] : e[ue.expando],
                !!e && !a(e)
            },
            data: function(e, t, n) {
                return i(e, t, n)
            },
            removeData: function(e, t) {
                return o(e, t)
            },
            _data: function(e, t, n) {
                return i(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return o(e, t, !0)
            },
            acceptData: function(e) {
                if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType)
                    return !1;
                var t = e.nodeName && ue.noData[e.nodeName.toLowerCase()];
                return !t || t !== !0 && e.getAttribute("classid") === t
            }
        }),
        ue.fn.extend({
            data: function(e, n) {
                var r, i, o = this[0], a = 0, u = null;
                if (e === t) {
                    if (this.length && (u = ue.data(o),
                    1 === o.nodeType && !ue._data(o, "parsedAttrs"))) {
                        for (r = o.attributes; r.length > a; a++)
                            i = r[a].name,
                            i.indexOf("data-") || (i = ue.camelCase(i.slice(5)),
                            s(o, i, u[i]));
                        ue._data(o, "parsedAttrs", !0)
                    }
                    return u
                }
                return "object" == typeof e ? this.each(function() {
                    ue.data(this, e)
                }) : ue.access(this, function(n) {
                    return n === t ? o ? s(o, e, ue.data(o, e)) : null : (this.each(function() {
                        ue.data(this, e, n)
                    }),
                    t)
                }, null, n, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    ue.removeData(this, e)
                })
            }
        }),
        ue.extend({
            queue: function(e, n, r) {
                var i;
                return e ? (n = (n || "fx") + "queue",
                i = ue._data(e, n),
                r && (!i || ue.isArray(r) ? i = ue._data(e, n, ue.makeArray(r)) : i.push(r)),
                i || []) : t
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = ue.queue(e, t)
                  , r = n.length
                  , i = n.shift()
                  , o = ue._queueHooks(e, t)
                  , s = function() {
                    ue.dequeue(e, t)
                };
                "inprogress" === i && (i = n.shift(),
                r--),
                o.cur = i,
                i && ("fx" === t && n.unshift("inprogress"),
                delete o.stop,
                i.call(e, s, o)),
                !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return ue._data(e, n) || ue._data(e, n, {
                    empty: ue.Callbacks("once memory").add(function() {
                        ue._removeData(e, t + "queue"),
                        ue._removeData(e, n)
                    })
                })
            }
        }),
        ue.fn.extend({
            queue: function(e, n) {
                var r = 2;
                return "string" != typeof e && (n = e,
                e = "fx",
                r--),
                r > arguments.length ? ue.queue(this[0], e) : n === t ? this : this.each(function() {
                    var t = ue.queue(this, e, n);
                    ue._queueHooks(this, e),
                    "fx" === e && "inprogress" !== t[0] && ue.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    ue.dequeue(this, e)
                })
            },
            delay: function(e, t) {
                return e = ue.fx ? ue.fx.speeds[e] || e : e,
                t = t || "fx",
                this.queue(t, function(t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(r)
                    }
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, n) {
                var r, i = 1, o = ue.Deferred(), s = this, a = this.length, u = function() {
                    --i || o.resolveWith(s, [s])
                };
                for ("string" != typeof e && (n = e,
                e = t),
                e = e || "fx"; a--; )
                    r = ue._data(s[a], e + "queueHooks"),
                    r && r.empty && (i++,
                    r.empty.add(u));
                return u(),
                o.promise(n)
            }
        });
        var Ce, Ee, je = /[\t\r\n]/g, Ae = /\r/g, De = /^(?:input|select|textarea|button|object)$/i, _e = /^(?:a|area)$/i, Me = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, He = /^(?:checked|selected)$/i, Le = ue.support.getSetAttribute, Ie = ue.support.input;
        ue.fn.extend({
            attr: function(e, t) {
                return ue.access(this, ue.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    ue.removeAttr(this, e)
                })
            },
            prop: function(e, t) {
                return ue.access(this, ue.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = ue.propFix[e] || e,
                this.each(function() {
                    try {
                        this[e] = t,
                        delete this[e]
                    } catch (n) {}
                })
            },
            addClass: function(e) {
                var t, n, r, i, o, s = 0, a = this.length, u = "string" == typeof e && e;
                if (ue.isFunction(e))
                    return this.each(function(t) {
                        ue(this).addClass(e.call(this, t, this.className))
                    });
                if (u)
                    for (t = (e || "").match(ce) || []; a > s; s++)
                        if (n = this[s],
                        r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(je, " ") : " ")) {
                            for (o = 0; i = t[o++]; )
                                0 > r.indexOf(" " + i + " ") && (r += i + " ");
                            n.className = ue.trim(r)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, r, i, o, s = 0, a = this.length, u = 0 === arguments.length || "string" == typeof e && e;
                if (ue.isFunction(e))
                    return this.each(function(t) {
                        ue(this).removeClass(e.call(this, t, this.className))
                    });
                if (u)
                    for (t = (e || "").match(ce) || []; a > s; s++)
                        if (n = this[s],
                        r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(je, " ") : "")) {
                            for (o = 0; i = t[o++]; )
                                for (; r.indexOf(" " + i + " ") >= 0; )
                                    r = r.replace(" " + i + " ", " ");
                            n.className = e ? ue.trim(r) : ""
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e
                  , r = "boolean" == typeof t;
                return ue.isFunction(e) ? this.each(function(n) {
                    ue(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === n)
                        for (var i, o = 0, s = ue(this), a = t, u = e.match(ce) || []; i = u[o++]; )
                            a = r ? a : !s.hasClass(i),
                            s[a ? "addClass" : "removeClass"](i);
                    else
                        (n === J || "boolean" === n) && (this.className && ue._data(this, "__className__", this.className),
                        this.className = this.className || e === !1 ? "" : ue._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(je, " ").indexOf(t) >= 0)
                        return !0;
                return !1
            },
            val: function(e) {
                var n, r, i, o = this[0];
                return arguments.length ? (i = ue.isFunction(e),
                this.each(function(n) {
                    var o, s = ue(this);
                    1 === this.nodeType && (o = i ? e.call(this, n, s.val()) : e,
                    null == o ? o = "" : "number" == typeof o ? o += "" : ue.isArray(o) && (o = ue.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })),
                    r = ue.valHooks[this.type] || ue.valHooks[this.nodeName.toLowerCase()],
                    r && "set"in r && r.set(this, o, "value") !== t || (this.value = o))
                })) : o ? (r = ue.valHooks[o.type] || ue.valHooks[o.nodeName.toLowerCase()],
                r && "get"in r && (n = r.get(o, "value")) !== t ? n : (n = o.value,
                "string" == typeof n ? n.replace(Ae, "") : null == n ? "" : n)) : void 0
            }
        }),
        ue.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = e.attributes.value;
                        return !t || t.specified ? e.value : e.text
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++)
                            if (n = r[u],
                            !(!n.selected && u !== i || (ue.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ue.nodeName(n.parentNode, "optgroup"))) {
                                if (t = ue(n).val(),
                                o)
                                    return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function(e, t) {
                        var n = ue.makeArray(t);
                        return ue(e).find("option").each(function() {
                            this.selected = ue.inArray(ue(this).val(), n) >= 0
                        }),
                        n.length || (e.selectedIndex = -1),
                        n
                    }
                }
            },
            attr: function(e, n, r) {
                var i, o, s, a = e.nodeType;
                return e && 3 !== a && 8 !== a && 2 !== a ? typeof e.getAttribute === J ? ue.prop(e, n, r) : (o = 1 !== a || !ue.isXMLDoc(e),
                o && (n = n.toLowerCase(),
                i = ue.attrHooks[n] || (Me.test(n) ? Ee : Ce)),
                r === t ? i && o && "get"in i && null !== (s = i.get(e, n)) ? s : (typeof e.getAttribute !== J && (s = e.getAttribute(n)),
                null == s ? t : s) : null !== r ? i && o && "set"in i && (s = i.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""),
                r) : (ue.removeAttr(e, n),
                t)) : void 0
            },
            removeAttr: function(e, t) {
                var n, r, i = 0, o = t && t.match(ce);
                if (o && 1 === e.nodeType)
                    for (; n = o[i++]; )
                        r = ue.propFix[n] || n,
                        Me.test(n) ? !Le && He.test(n) ? e[ue.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : ue.attr(e, n, ""),
                        e.removeAttribute(Le ? n : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ue.support.radioValue && "radio" === t && ue.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                            t
                        }
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(e, n, r) {
                var i, o, s, a = e.nodeType;
                return e && 3 !== a && 8 !== a && 2 !== a ? (s = 1 !== a || !ue.isXMLDoc(e),
                s && (n = ue.propFix[n] || n,
                o = ue.propHooks[n]),
                r !== t ? o && "set"in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get"in o && null !== (i = o.get(e, n)) ? i : e[n]) : void 0
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var n = e.getAttributeNode("tabindex");
                        return n && n.specified ? parseInt(n.value, 10) : De.test(e.nodeName) || _e.test(e.nodeName) && e.href ? 0 : t
                    }
                }
            }
        }),
        Ee = {
            get: function(e, n) {
                var r = ue.prop(e, n)
                  , i = "boolean" == typeof r && e.getAttribute(n)
                  , o = "boolean" == typeof r ? Ie && Le ? null != i : He.test(n) ? e[ue.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
                return o && o.value !== !1 ? n.toLowerCase() : t
            },
            set: function(e, t, n) {
                return t === !1 ? ue.removeAttr(e, n) : Ie && Le || !He.test(n) ? e.setAttribute(!Le && ue.propFix[n] || n, n) : e[ue.camelCase("default-" + n)] = e[n] = !0,
                n
            }
        },
        Ie && Le || (ue.attrHooks.value = {
            get: function(e, n) {
                var r = e.getAttributeNode(n);
                return ue.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
            },
            set: function(e, n, r) {
                return ue.nodeName(e, "input") ? (e.defaultValue = n,
                t) : Ce && Ce.set(e, n, r)
            }
        }),
        Le || (Ce = ue.valHooks.button = {
            get: function(e, n) {
                var r = e.getAttributeNode(n);
                return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t
            },
            set: function(e, n, r) {
                var i = e.getAttributeNode(r);
                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)),
                i.value = n += "",
                "value" === r || n === e.getAttribute(r) ? n : t
            }
        },
        ue.attrHooks.contenteditable = {
            get: Ce.get,
            set: function(e, t, n) {
                Ce.set(e, "" !== t && t, n)
            }
        },
        ue.each(["width", "height"], function(e, n) {
            ue.attrHooks[n] = ue.extend(ue.attrHooks[n], {
                set: function(e, r) {
                    return "" === r ? (e.setAttribute(n, "auto"),
                    r) : t
                }
            })
        })),
        ue.support.hrefNormalized || (ue.each(["href", "src", "width", "height"], function(e, n) {
            ue.attrHooks[n] = ue.extend(ue.attrHooks[n], {
                get: function(e) {
                    var r = e.getAttribute(n, 2);
                    return null == r ? t : r
                }
            })
        }),
        ue.each(["href", "src"], function(e, t) {
            ue.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        })),
        ue.support.style || (ue.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || t
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        }),
        ue.support.optSelected || (ue.propHooks.selected = ue.extend(ue.propHooks.selected, {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex,
                t.parentNode && t.parentNode.selectedIndex),
                null
            }
        })),
        ue.support.enctype || (ue.propFix.enctype = "encoding"),
        ue.support.checkOn || ue.each(["radio", "checkbox"], function() {
            ue.valHooks[this] = {
                get: function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
            }
        }),
        ue.each(["radio", "checkbox"], function() {
            ue.valHooks[this] = ue.extend(ue.valHooks[this], {
                set: function(e, n) {
                    return ue.isArray(n) ? e.checked = ue.inArray(ue(e).val(), n) >= 0 : t
                }
            })
        });
        var Oe = /^(?:input|select|textarea)$/i
          , qe = /^key/
          , Pe = /^(?:mouse|contextmenu)|click/
          , $e = /^(?:focusinfocus|focusoutblur)$/
          , Fe = /^([^.]*)(?:\.(.+)|)$/;
        ue.event = {
            global: {},
            add: function(e, n, r, i, o) {
                var s, a, u, l, c, p, f, d, h, g, m, y = ue._data(e);
                if (y) {
                    for (r.handler && (l = r,
                    r = l.handler,
                    o = l.selector),
                    r.guid || (r.guid = ue.guid++),
                    (a = y.events) || (a = y.events = {}),
                    (p = y.handle) || (p = y.handle = function(e) {
                        return typeof ue === J || e && ue.event.triggered === e.type ? t : ue.event.dispatch.apply(p.elem, arguments)
                    }
                    ,
                    p.elem = e),
                    n = (n || "").match(ce) || [""],
                    u = n.length; u--; )
                        s = Fe.exec(n[u]) || [],
                        h = m = s[1],
                        g = (s[2] || "").split(".").sort(),
                        c = ue.event.special[h] || {},
                        h = (o ? c.delegateType : c.bindType) || h,
                        c = ue.event.special[h] || {},
                        f = ue.extend({
                            type: h,
                            origType: m,
                            data: i,
                            handler: r,
                            guid: r.guid,
                            selector: o,
                            needsContext: o && ue.expr.match.needsContext.test(o),
                            namespace: g.join(".")
                        }, l),
                        (d = a[h]) || (d = a[h] = [],
                        d.delegateCount = 0,
                        c.setup && c.setup.call(e, i, g, p) !== !1 || (e.addEventListener ? e.addEventListener(h, p, !1) : e.attachEvent && e.attachEvent("on" + h, p))),
                        c.add && (c.add.call(e, f),
                        f.handler.guid || (f.handler.guid = r.guid)),
                        o ? d.splice(d.delegateCount++, 0, f) : d.push(f),
                        ue.event.global[h] = !0;
                    e = null
                }
            },
            remove: function(e, t, n, r, i) {
                var o, s, a, u, l, c, p, f, d, h, g, m = ue.hasData(e) && ue._data(e);
                if (m && (c = m.events)) {
                    for (t = (t || "").match(ce) || [""],
                    l = t.length; l--; )
                        if (a = Fe.exec(t[l]) || [],
                        d = g = a[1],
                        h = (a[2] || "").split(".").sort(),
                        d) {
                            for (p = ue.event.special[d] || {},
                            d = (r ? p.delegateType : p.bindType) || d,
                            f = c[d] || [],
                            a = a[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            u = o = f.length; o--; )
                                s = f[o],
                                !i && g !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || r && r !== s.selector && ("**" !== r || !s.selector) || (f.splice(o, 1),
                                s.selector && f.delegateCount--,
                                p.remove && p.remove.call(e, s));
                            u && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || ue.removeEvent(e, d, m.handle),
                            delete c[d])
                        } else
                            for (d in c)
                                ue.event.remove(e, d + t[l], n, r, !0);
                    ue.isEmptyObject(c) && (delete m.handle,
                    ue._removeData(e, "events"))
                }
            },
            trigger: function(n, r, i, o) {
                var s, a, u, l, c, p, f, d = [i || K], h = se.call(n, "type") ? n.type : n, g = se.call(n, "namespace") ? n.namespace.split(".") : [];
                if (u = p = i = i || K,
                3 !== i.nodeType && 8 !== i.nodeType && !$e.test(h + ue.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."),
                h = g.shift(),
                g.sort()),
                a = 0 > h.indexOf(":") && "on" + h,
                n = n[ue.expando] ? n : new ue.Event(h,"object" == typeof n && n),
                n.isTrigger = !0,
                n.namespace = g.join("."),
                n.namespace_re = n.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                n.result = t,
                n.target || (n.target = i),
                r = null == r ? [n] : ue.makeArray(r, [n]),
                c = ue.event.special[h] || {},
                o || !c.trigger || c.trigger.apply(i, r) !== !1)) {
                    if (!o && !c.noBubble && !ue.isWindow(i)) {
                        for (l = c.delegateType || h,
                        $e.test(l + h) || (u = u.parentNode); u; u = u.parentNode)
                            d.push(u),
                            p = u;
                        p === (i.ownerDocument || K) && d.push(p.defaultView || p.parentWindow || e)
                    }
                    for (f = 0; (u = d[f++]) && !n.isPropagationStopped(); )
                        n.type = f > 1 ? l : c.bindType || h,
                        s = (ue._data(u, "events") || {})[n.type] && ue._data(u, "handle"),
                        s && s.apply(u, r),
                        s = a && u[a],
                        s && ue.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
                    if (n.type = h,
                    !(o || n.isDefaultPrevented() || c._default && c._default.apply(i.ownerDocument, r) !== !1 || "click" === h && ue.nodeName(i, "a") || !ue.acceptData(i) || !a || !i[h] || ue.isWindow(i))) {
                        p = i[a],
                        p && (i[a] = null),
                        ue.event.triggered = h;
                        try {
                            i[h]()
                        } catch (m) {}
                        ue.event.triggered = t,
                        p && (i[a] = p)
                    }
                    return n.result
                }
            },
            dispatch: function(e) {
                e = ue.event.fix(e);
                var n, r, i, o, s, a = [], u = re.call(arguments), l = (ue._data(this, "events") || {})[e.type] || [], c = ue.event.special[e.type] || {};
                if (u[0] = e,
                e.delegateTarget = this,
                !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                    for (a = ue.event.handlers.call(this, e, l),
                    n = 0; (o = a[n++]) && !e.isPropagationStopped(); )
                        for (e.currentTarget = o.elem,
                        s = 0; (i = o.handlers[s++]) && !e.isImmediatePropagationStopped(); )
                            (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i,
                            e.data = i.data,
                            r = ((ue.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u),
                            r !== t && (e.result = r) === !1 && (e.preventDefault(),
                            e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e),
                    e.result
                }
            },
            handlers: function(e, n) {
                var r, i, o, s, a = [], u = n.delegateCount, l = e.target;
                if (u && l.nodeType && (!e.button || "click" !== e.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                            for (o = [],
                            s = 0; u > s; s++)
                                i = n[s],
                                r = i.selector + " ",
                                o[r] === t && (o[r] = i.needsContext ? ue(r, this).index(l) >= 0 : ue.find(r, this, null, [l]).length),
                                o[r] && o.push(i);
                            o.length && a.push({
                                elem: l,
                                handlers: o
                            })
                        }
                return n.length > u && a.push({
                    elem: this,
                    handlers: n.slice(u)
                }),
                a
            },
            fix: function(e) {
                if (e[ue.expando])
                    return e;
                var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
                for (s || (this.fixHooks[i] = s = Pe.test(i) ? this.mouseHooks : qe.test(i) ? this.keyHooks : {}),
                r = s.props ? this.props.concat(s.props) : this.props,
                e = new ue.Event(o),
                t = r.length; t--; )
                    n = r[t],
                    e[n] = o[n];
                return e.target || (e.target = o.srcElement || K),
                3 === e.target.nodeType && (e.target = e.target.parentNode),
                e.metaKey = !!e.metaKey,
                s.filter ? s.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                    e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var r, i, o, s = n.button, a = n.fromElement;
                    return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || K,
                    o = i.documentElement,
                    r = i.body,
                    e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0),
                    e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)),
                    !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a),
                    e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
                    e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    trigger: function() {
                        return ue.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                        !1) : t
                    }
                },
                focus: {
                    trigger: function() {
                        if (this !== K.activeElement && this.focus)
                            try {
                                return this.focus(),
                                !1
                            } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === K.activeElement && this.blur ? (this.blur(),
                        !1) : t
                    },
                    delegateType: "focusout"
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== t && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, r) {
                var i = ue.extend(new ue.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? ue.event.trigger(i, null, t) : ue.event.dispatch.call(t, i),
                i.isDefaultPrevented() && n.preventDefault()
            }
        },
        ue.removeEvent = K.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        }
        : function(e, t, n) {
            var r = "on" + t;
            e.detachEvent && (typeof e[r] === J && (e[r] = null),
            e.detachEvent(r, n))
        }
        ,
        ue.Event = function(e, n) {
            return this instanceof ue.Event ? (e && e.type ? (this.originalEvent = e,
            this.type = e.type,
            this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? u : l) : this.type = e,
            n && ue.extend(this, n),
            this.timeStamp = e && e.timeStamp || ue.now(),
            this[ue.expando] = !0,
            t) : new ue.Event(e,n)
        }
        ,
        ue.Event.prototype = {
            isDefaultPrevented: l,
            isPropagationStopped: l,
            isImmediatePropagationStopped: l,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = u,
                e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = u,
                e && (e.stopPropagation && e.stopPropagation(),
                e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = u,
                this.stopPropagation()
            }
        },
        ue.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            ue.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this, i = e.relatedTarget, o = e.handleObj;
                    return (!i || i !== r && !ue.contains(r, i)) && (e.type = o.origType,
                    n = o.handler.apply(this, arguments),
                    e.type = t),
                    n
                }
            }
        }),
        ue.support.submitBubbles || (ue.event.special.submit = {
            setup: function() {
                return !ue.nodeName(this, "form") && (ue.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target
                      , r = ue.nodeName(n, "input") || ue.nodeName(n, "button") ? n.form : t;
                    r && !ue._data(r, "submitBubbles") && (ue.event.add(r, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }),
                    ue._data(r, "submitBubbles", !0))
                }),
                t)
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble,
                this.parentNode && !e.isTrigger && ue.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return !ue.nodeName(this, "form") && (ue.event.remove(this, "._submit"),
                t)
            }
        }),
        ue.support.changeBubbles || (ue.event.special.change = {
            setup: function() {
                return Oe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ue.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }),
                ue.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1),
                    ue.event.simulate("change", this, e, !0)
                })),
                !1) : (ue.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Oe.test(t.nodeName) && !ue._data(t, "changeBubbles") && (ue.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || ue.event.simulate("change", this.parentNode, e, !0)
                    }),
                    ue._data(t, "changeBubbles", !0))
                }),
                t)
            },
            handle: function(e) {
                var n = e.target;
                return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
            },
            teardown: function() {
                return ue.event.remove(this, "._change"),
                !Oe.test(this.nodeName)
            }
        }),
        ue.support.focusinBubbles || ue.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = 0
              , r = function(e) {
                ue.event.simulate(t, e.target, ue.event.fix(e), !0)
            };
            ue.event.special[t] = {
                setup: function() {
                    0 === n++ && K.addEventListener(e, r, !0)
                },
                teardown: function() {
                    0 === --n && K.removeEventListener(e, r, !0)
                }
            }
        }),
        ue.fn.extend({
            on: function(e, n, r, i, o) {
                var s, a;
                if ("object" == typeof e) {
                    "string" != typeof n && (r = r || n,
                    n = t);
                    for (s in e)
                        this.on(s, n, r, e[s], o);
                    return this
                }
                if (null == r && null == i ? (i = n,
                r = n = t) : null == i && ("string" == typeof n ? (i = r,
                r = t) : (i = r,
                r = n,
                n = t)),
                i === !1)
                    i = l;
                else if (!i)
                    return this;
                return 1 === o && (a = i,
                i = function(e) {
                    return ue().off(e),
                    a.apply(this, arguments)
                }
                ,
                i.guid = a.guid || (a.guid = ue.guid++)),
                this.each(function() {
                    ue.event.add(this, e, i, r, n)
                })
            },
            one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function(e, n, r) {
                var i, o;
                if (e && e.preventDefault && e.handleObj)
                    return i = e.handleObj,
                    ue(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                    this;
                if ("object" == typeof e) {
                    for (o in e)
                        this.off(o, n, e[o]);
                    return this
                }
                return (n === !1 || "function" == typeof n) && (r = n,
                n = t),
                r === !1 && (r = l),
                this.each(function() {
                    ue.event.remove(this, e, r, n)
                })
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            trigger: function(e, t) {
                return this.each(function() {
                    ue.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, n) {
                var r = this[0];
                return r ? ue.event.trigger(e, n, r, !0) : t
            }
        }),
        function(e, t) {
            function n(e) {
                return he.test(e + "")
            }
            function r() {
                var e, t = [];
                return e = function(n, r) {
                    return t.push(n += " ") > N.cacheLength && delete e[t.shift()],
                    e[n] = r
                }
            }
            function i(e) {
                return e[$] = !0,
                e
            }
            function o(e) {
                var t = _.createElement("div");
                try {
                    return e(t)
                } catch (n) {
                    return !1
                } finally {
                    t = null
                }
            }
            function s(e, t, n, r) {
                var i, o, s, a, u, l, c, d, h, g;
                if ((t ? t.ownerDocument || t : F) !== _ && D(t),
                t = t || _,
                n = n || [],
                !e || "string" != typeof e)
                    return n;
                if (1 !== (a = t.nodeType) && 9 !== a)
                    return [];
                if (!H && !r) {
                    if (i = ge.exec(e))
                        if (s = i[1]) {
                            if (9 === a) {
                                if (o = t.getElementById(s),
                                !o || !o.parentNode)
                                    return n;
                                if (o.id === s)
                                    return n.push(o),
                                    n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && q(t, o) && o.id === s)
                                return n.push(o),
                                n
                        } else {
                            if (i[2])
                                return V.apply(n, G.call(t.getElementsByTagName(e), 0)),
                                n;
                            if ((s = i[3]) && R.getByClassName && t.getElementsByClassName)
                                return V.apply(n, G.call(t.getElementsByClassName(s), 0)),
                                n
                        }
                    if (R.qsa && !L.test(e)) {
                        if (c = !0,
                        d = $,
                        h = t,
                        g = 9 === a && e,
                        1 === a && "object" !== t.nodeName.toLowerCase()) {
                            for (l = p(e),
                            (c = t.getAttribute("id")) ? d = c.replace(ve, "\\$&") : t.setAttribute("id", d),
                            d = "[id='" + d + "'] ",
                            u = l.length; u--; )
                                l[u] = d + f(l[u]);
                            h = de.test(e) && t.parentNode || t,
                            g = l.join(",")
                        }
                        if (g)
                            try {
                                return V.apply(n, G.call(h.querySelectorAll(g), 0)),
                                n
                            } catch (m) {} finally {
                                c || t.removeAttribute("id")
                            }
                    }
                }
                return x(e.replace(se, "$1"), t, n, r)
            }
            function a(e, t) {
                var n = t && e
                  , r = n && (~t.sourceIndex || K) - (~e.sourceIndex || K);
                if (r)
                    return r;
                if (n)
                    for (; n = n.nextSibling; )
                        if (n === t)
                            return -1;
                return e ? 1 : -1
            }
            function u(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }
            function l(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }
            function c(e) {
                return i(function(t) {
                    return t = +t,
                    i(function(n, r) {
                        for (var i, o = e([], n.length, t), s = o.length; s--; )
                            n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }
            function p(e, t) {
                var n, r, i, o, a, u, l, c = z[e + " "];
                if (c)
                    return t ? 0 : c.slice(0);
                for (a = e,
                u = [],
                l = N.preFilter; a; ) {
                    (!n || (r = ae.exec(a))) && (r && (a = a.slice(r[0].length) || a),
                    u.push(i = [])),
                    n = !1,
                    (r = le.exec(a)) && (n = r.shift(),
                    i.push({
                        value: n,
                        type: r[0].replace(se, " ")
                    }),
                    a = a.slice(n.length));
                    for (o in N.filter)
                        !(r = fe[o].exec(a)) || l[o] && !(r = l[o](r)) || (n = r.shift(),
                        i.push({
                            value: n,
                            type: o,
                            matches: r
                        }),
                        a = a.slice(n.length));
                    if (!n)
                        break
                }
                return t ? a.length : a ? s.error(e) : z(e, u).slice(0)
            }
            function f(e) {
                for (var t = 0, n = e.length, r = ""; n > t; t++)
                    r += e[t].value;
                return r
            }
            function d(e, t, n) {
                var r = t.dir
                  , i = n && "parentNode" === r
                  , o = W++;
                return t.first ? function(t, n, o) {
                    for (; t = t[r]; )
                        if (1 === t.nodeType || i)
                            return e(t, n, o)
                }
                : function(t, n, s) {
                    var a, u, l, c = B + " " + o;
                    if (s) {
                        for (; t = t[r]; )
                            if ((1 === t.nodeType || i) && e(t, n, s))
                                return !0
                    } else
                        for (; t = t[r]; )
                            if (1 === t.nodeType || i)
                                if (l = t[$] || (t[$] = {}),
                                (u = l[r]) && u[0] === c) {
                                    if ((a = u[1]) === !0 || a === k)
                                        return a === !0
                                } else if (u = l[r] = [c],
                                u[1] = e(t, n, s) || k,
                                u[1] === !0)
                                    return !0
                }
            }
            function h(e) {
                return e.length > 1 ? function(t, n, r) {
                    for (var i = e.length; i--; )
                        if (!e[i](t, n, r))
                            return !1;
                    return !0
                }
                : e[0]
            }
            function g(e, t, n, r, i) {
                for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)
                    (o = e[a]) && (!n || n(o, r, i)) && (s.push(o),
                    l && t.push(a));
                return s
            }
            function m(e, t, n, r, o, s) {
                return r && !r[$] && (r = m(r)),
                o && !o[$] && (o = m(o, s)),
                i(function(i, s, a, u) {
                    var l, c, p, f = [], d = [], h = s.length, m = i || b(t || "*", a.nodeType ? [a] : a, []), y = !e || !i && t ? m : g(m, f, e, a, u), v = n ? o || (i ? e : h || r) ? [] : s : y;
                    if (n && n(y, v, a, u),
                    r)
                        for (l = g(v, d),
                        r(l, [], a, u),
                        c = l.length; c--; )
                            (p = l[c]) && (v[d[c]] = !(y[d[c]] = p));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (l = [],
                                c = v.length; c--; )
                                    (p = v[c]) && l.push(y[c] = p);
                                o(null, v = [], l, u)
                            }
                            for (c = v.length; c--; )
                                (p = v[c]) && (l = o ? Z.call(i, p) : f[c]) > -1 && (i[l] = !(s[l] = p))
                        }
                    } else
                        v = g(v === s ? v.splice(h, v.length) : v),
                        o ? o(null, s, v, u) : V.apply(s, v)
                })
            }
            function y(e) {
                for (var t, n, r, i = e.length, o = N.relative[e[0].type], s = o || N.relative[" "], a = o ? 1 : 0, u = d(function(e) {
                    return e === t
                }, s, !0), l = d(function(e) {
                    return Z.call(t, e) > -1
                }, s, !0), c = [function(e, n, r) {
                    return !o && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
                }
                ]; i > a; a++)
                    if (n = N.relative[e[a].type])
                        c = [d(h(c), n)];
                    else {
                        if (n = N.filter[e[a].type].apply(null, e[a].matches),
                        n[$]) {
                            for (r = ++a; i > r && !N.relative[e[r].type]; r++)
                                ;
                            return m(a > 1 && h(c), a > 1 && f(e.slice(0, a - 1)).replace(se, "$1"), n, r > a && y(e.slice(a, r)), i > r && y(e = e.slice(r)), i > r && f(e))
                        }
                        c.push(n)
                    }
                return h(c)
            }
            function v(e, t) {
                var n = 0
                  , r = t.length > 0
                  , o = e.length > 0
                  , a = function(i, a, u, l, c) {
                    var p, f, d, h = [], m = 0, y = "0", v = i && [], b = null != c, x = A, w = i || o && N.find.TAG("*", c && a.parentNode || a), T = B += null == x ? 1 : Math.random() || .1;
                    for (b && (A = a !== _ && a,
                    k = n); null != (p = w[y]); y++) {
                        if (o && p) {
                            for (f = 0; d = e[f++]; )
                                if (d(p, a, u)) {
                                    l.push(p);
                                    break
                                }
                            b && (B = T,
                            k = ++n)
                        }
                        r && ((p = !d && p) && m--,
                        i && v.push(p))
                    }
                    if (m += y,
                    r && y !== m) {
                        for (f = 0; d = t[f++]; )
                            d(v, h, a, u);
                        if (i) {
                            if (m > 0)
                                for (; y--; )
                                    v[y] || h[y] || (h[y] = Y.call(l));
                            h = g(h)
                        }
                        V.apply(l, h),
                        b && !i && h.length > 0 && m + t.length > 1 && s.uniqueSort(l)
                    }
                    return b && (B = T,
                    A = x),
                    v
                };
                return r ? i(a) : a
            }
            function b(e, t, n) {
                for (var r = 0, i = t.length; i > r; r++)
                    s(e, t[r], n);
                return n
            }
            function x(e, t, n, r) {
                var i, o, s, a, u, l = p(e);
                if (!r && 1 === l.length) {
                    if (o = l[0] = l[0].slice(0),
                    o.length > 2 && "ID" === (s = o[0]).type && 9 === t.nodeType && !H && N.relative[o[1].type]) {
                        if (t = N.find.ID(s.matches[0].replace(xe, we), t)[0],
                        !t)
                            return n;
                        e = e.slice(o.shift().value.length)
                    }
                    for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i],
                    !N.relative[a = s.type]); )
                        if ((u = N.find[a]) && (r = u(s.matches[0].replace(xe, we), de.test(o[0].type) && t.parentNode || t))) {
                            if (o.splice(i, 1),
                            e = r.length && f(o),
                            !e)
                                return V.apply(n, G.call(r, 0)),
                                n;
                            break
                        }
                }
                return E(e, l)(r, t, H, n, de.test(e)),
                n
            }
            function w() {}
            var T, k, N, S, C, E, j, A, D, _, M, H, L, I, O, q, P, $ = "sizzle" + -new Date, F = e.document, R = {}, B = 0, W = 0, U = r(), z = r(), X = r(), J = typeof t, K = 1 << 31, Q = [], Y = Q.pop, V = Q.push, G = Q.slice, Z = Q.indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] === e)
                        return t;
                return -1
            }
            , ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ne = te.replace("w", "w#"), re = "([*^$|!~]?=)", ie = "\\[" + ee + "*(" + te + ")" + ee + "*(?:" + re + ee + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ne + ")|)|)" + ee + "*\\]", oe = ":(" + te + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ie.replace(3, 8) + ")*)|.*)\\)|)", se = RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"), ae = RegExp("^" + ee + "*," + ee + "*"), le = RegExp("^" + ee + "*([\\x20\\t\\r\\n\\f>+~])" + ee + "*"), ce = RegExp(oe), pe = RegExp("^" + ne + "$"), fe = {
                ID: RegExp("^#(" + te + ")"),
                CLASS: RegExp("^\\.(" + te + ")"),
                NAME: RegExp("^\\[name=['\"]?(" + te + ")['\"]?\\]"),
                TAG: RegExp("^(" + te.replace("w", "w*") + ")"),
                ATTR: RegExp("^" + ie),
                PSEUDO: RegExp("^" + oe),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                needsContext: RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            }, de = /[\x20\t\r\n\f]*[+~]/, he = /^[^{]+\{\s*\[native code/, ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, me = /^(?:input|select|textarea|button)$/i, ye = /^h\d$/i, ve = /'|\\/g, be = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, xe = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, we = function(e, t) {
                var n = "0x" + t - 65536;
                return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
            };
            try {
                G.call(F.documentElement.childNodes, 0)[0].nodeType
            } catch (Te) {
                G = function(e) {
                    for (var t, n = []; t = this[e++]; )
                        n.push(t);
                    return n
                }
            }
            C = s.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }
            ,
            D = s.setDocument = function(e) {
                var r = e ? e.ownerDocument || e : F;
                return r !== _ && 9 === r.nodeType && r.documentElement ? (_ = r,
                M = r.documentElement,
                H = C(r),
                R.tagNameNoComments = o(function(e) {
                    return e.appendChild(r.createComment("")),
                    !e.getElementsByTagName("*").length
                }),
                R.attributes = o(function(e) {
                    e.innerHTML = "<select></select>";
                    var t = typeof e.lastChild.getAttribute("multiple");
                    return "boolean" !== t && "string" !== t
                }),
                R.getByClassName = o(function(e) {
                    return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
                    !(!e.getElementsByClassName || !e.getElementsByClassName("e").length) && (e.lastChild.className = "e",
                    2 === e.getElementsByClassName("e").length)
                }),
                R.getByName = o(function(e) {
                    e.id = $ + 0,
                    e.innerHTML = "<a name='" + $ + "'></a><div name='" + $ + "'></div>",
                    M.insertBefore(e, M.firstChild);
                    var t = r.getElementsByName && r.getElementsByName($).length === 2 + r.getElementsByName($ + 0).length;
                    return R.getIdNotName = !r.getElementById($),
                    M.removeChild(e),
                    t
                }),
                N.attrHandle = o(function(e) {
                    return e.innerHTML = "<a href='#'></a>",
                    e.firstChild && typeof e.firstChild.getAttribute !== J && "#" === e.firstChild.getAttribute("href")
                }) ? {} : {
                    href: function(e) {
                        return e.getAttribute("href", 2)
                    },
                    type: function(e) {
                        return e.getAttribute("type")
                    }
                },
                R.getIdNotName ? (N.find.ID = function(e, t) {
                    if (typeof t.getElementById !== J && !H) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }
                ,
                N.filter.ID = function(e) {
                    var t = e.replace(xe, we);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }
                ) : (N.find.ID = function(e, n) {
                    if (typeof n.getElementById !== J && !H) {
                        var r = n.getElementById(e);
                        return r ? r.id === e || typeof r.getAttributeNode !== J && r.getAttributeNode("id").value === e ? [r] : t : []
                    }
                }
                ,
                N.filter.ID = function(e) {
                    var t = e.replace(xe, we);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== J && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }
                ),
                N.find.TAG = R.tagNameNoComments ? function(e, n) {
                    return typeof n.getElementsByTagName !== J ? n.getElementsByTagName(e) : t
                }
                : function(e, t) {
                    var n, r = [], i = 0, o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++]; )
                            1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }
                ,
                N.find.NAME = R.getByName && function(e, n) {
                    return typeof n.getElementsByName !== J ? n.getElementsByName(name) : t
                }
                ,
                N.find.CLASS = R.getByClassName && function(e, n) {
                    return typeof n.getElementsByClassName === J || H ? t : n.getElementsByClassName(e)
                }
                ,
                I = [],
                L = [":focus"],
                (R.qsa = n(r.querySelectorAll)) && (o(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>",
                    e.querySelectorAll("[selected]").length || L.push("\\[" + ee + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
                    e.querySelectorAll(":checked").length || L.push(":checked")
                }),
                o(function(e) {
                    e.innerHTML = "<input type='hidden' i=''/>",
                    e.querySelectorAll("[i^='']").length && L.push("[*^$]=" + ee + "*(?:\"\"|'')"),
                    e.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    L.push(",.*:")
                })),
                (R.matchesSelector = n(O = M.matchesSelector || M.mozMatchesSelector || M.webkitMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && o(function(e) {
                    R.disconnectedMatch = O.call(e, "div"),
                    O.call(e, "[s!='']:x"),
                    I.push("!=", oe)
                }),
                L = RegExp(L.join("|")),
                I = RegExp(I.join("|")),
                q = n(M.contains) || M.compareDocumentPosition ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e
                      , r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                }
                : function(e, t) {
                    if (t)
                        for (; t = t.parentNode; )
                            if (t === e)
                                return !0;
                    return !1
                }
                ,
                P = M.compareDocumentPosition ? function(e, t) {
                    var n;
                    return e === t ? (j = !0,
                    0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === r || q(F, e) ? -1 : t === r || q(F, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                }
                : function(e, t) {
                    var n, i = 0, o = e.parentNode, s = t.parentNode, u = [e], l = [t];
                    if (e === t)
                        return j = !0,
                        0;
                    if (!o || !s)
                        return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : 0;
                    if (o === s)
                        return a(e, t);
                    for (n = e; n = n.parentNode; )
                        u.unshift(n);
                    for (n = t; n = n.parentNode; )
                        l.unshift(n);
                    for (; u[i] === l[i]; )
                        i++;
                    return i ? a(u[i], l[i]) : u[i] === F ? -1 : l[i] === F ? 1 : 0
                }
                ,
                j = !1,
                [0, 0].sort(P),
                R.detectDuplicates = j,
                _) : _
            }
            ,
            s.matches = function(e, t) {
                return s(e, null, null, t)
            }
            ,
            s.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== _ && D(e),
                t = t.replace(be, "='$1']"),
                !(!R.matchesSelector || H || I && I.test(t) || L.test(t)))
                    try {
                        var n = O.call(e, t);
                        if (n || R.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return n
                    } catch (r) {}
                return s(t, _, null, [e]).length > 0
            }
            ,
            s.contains = function(e, t) {
                return (e.ownerDocument || e) !== _ && D(e),
                q(e, t)
            }
            ,
            s.attr = function(e, t) {
                var n;
                return (e.ownerDocument || e) !== _ && D(e),
                H || (t = t.toLowerCase()),
                (n = N.attrHandle[t]) ? n(e) : H || R.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
            }
            ,
            s.error = function(e) {
                throw Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            s.uniqueSort = function(e) {
                var t, n = [], r = 1, i = 0;
                if (j = !R.detectDuplicates,
                e.sort(P),
                j) {
                    for (; t = e[r]; r++)
                        t === e[r - 1] && (i = n.push(r));
                    for (; i--; )
                        e.splice(n[i], 1)
                }
                return e
            }
            ,
            S = s.getText = function(e) {
                var t, n = "", r = 0, i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += S(e)
                    } else if (3 === i || 4 === i)
                        return e.nodeValue
                } else
                    for (; t = e[r]; r++)
                        n += S(t);
                return n
            }
            ,
            N = s.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: fe,
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(xe, we),
                        e[3] = (e[4] || e[5] || "").replace(xe, we),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                        "nth" === e[1].slice(0, 3) ? (e[3] || s.error(e[0]),
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                        e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && s.error(e[0]),
                        e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[5] && e[2];
                        return fe.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && ce.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                        e[2] = n.slice(0, t)),
                        e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        return "*" === e ? function() {
                            return !0
                        }
                        : (e = e.replace(xe, we).toLowerCase(),
                        function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                        )
                    },
                    CLASS: function(e) {
                        var t = U[e + " "];
                        return t || (t = RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && U(e, function(e) {
                            return t.test(e.className || typeof e.getAttribute !== J && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = s.attr(r, e);
                            return null == i ? "!=" === t : !t || (i += "",
                            "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3)
                          , s = "last" !== e.slice(-4)
                          , a = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        }
                        : function(t, n, u) {
                            var l, c, p, f, d, h, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode, y = a && t.nodeName.toLowerCase(), v = !u && !a;
                            if (m) {
                                if (o) {
                                    for (; g; ) {
                                        for (p = t; p = p[g]; )
                                            if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType)
                                                return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? m.firstChild : m.lastChild],
                                s && v) {
                                    for (c = m[$] || (m[$] = {}),
                                    l = c[e] || [],
                                    d = l[0] === B && l[1],
                                    f = l[0] === B && l[2],
                                    p = d && m.childNodes[d]; p = ++d && p && p[g] || (f = d = 0) || h.pop(); )
                                        if (1 === p.nodeType && ++f && p === t) {
                                            c[e] = [B, d, f];
                                            break
                                        }
                                } else if (v && (l = (t[$] || (t[$] = {}))[e]) && l[0] === B)
                                    f = l[1];
                                else
                                    for (; (p = ++d && p && p[g] || (f = d = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++f || (v && ((p[$] || (p[$] = {}))[e] = [B, f]),
                                    p !== t)); )
                                        ;
                                return f -= i,
                                f === r || 0 === f % r && f / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, r = N.pseudos[e] || N.setFilters[e.toLowerCase()] || s.error("unsupported pseudo: " + e);
                        return r[$] ? r(t) : r.length > 1 ? (n = [e, e, "", t],
                        N.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) {
                            for (var i, o = r(e, t), s = o.length; s--; )
                                i = Z.call(e, o[s]),
                                e[i] = !(n[i] = o[s])
                        }) : function(e) {
                            return r(e, 0, n)
                        }
                        ) : r
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = []
                          , n = []
                          , r = E(e.replace(se, "$1"));
                        return r[$] ? i(function(e, t, n, i) {
                            for (var o, s = r(e, null, i, []), a = e.length; a--; )
                                (o = s[a]) && (e[a] = !(t[a] = o))
                        }) : function(e, i, o) {
                            return t[0] = e,
                            r(t, null, o, n),
                            !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(t) {
                            return s(e, t).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                        }
                    }),
                    lang: i(function(e) {
                        return pe.test(e || "") || s.error("unsupported lang: " + e),
                        e = e.replace(xe, we).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = H ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang)
                                    return n = n.toLowerCase(),
                                    n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);return !1
                        }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === M
                    },
                    focus: function(e) {
                        return e === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)
                                return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !N.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ye.test(e.nodeName)
                    },
                    input: function(e) {
                        return me.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(e, t) {
                        return [t - 1]
                    }),
                    eq: c(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: c(function(e, t) {
                        for (var n = 0; t > n; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: c(function(e, t) {
                        for (var n = 1; t > n; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: c(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0; )
                            e.push(r);
                        return e
                    }),
                    gt: c(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; t > ++r; )
                            e.push(r);
                        return e
                    })
                }
            };
            for (T in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                N.pseudos[T] = u(T);
            for (T in {
                submit: !0,
                reset: !0
            })
                N.pseudos[T] = l(T);
            E = s.compile = function(e, t) {
                var n, r = [], i = [], o = X[e + " "];
                if (!o) {
                    for (t || (t = p(e)),
                    n = t.length; n--; )
                        o = y(t[n]),
                        o[$] ? r.push(o) : i.push(o);
                    o = X(e, v(i, r))
                }
                return o
            }
            ,
            N.pseudos.nth = N.pseudos.eq,
            N.filters = w.prototype = N.pseudos,
            N.setFilters = new w,
            D(),
            s.attr = ue.attr,
            ue.find = s,
            ue.expr = s.selectors,
            ue.expr[":"] = ue.expr.pseudos,
            ue.unique = s.uniqueSort,
            ue.text = s.getText,
            ue.isXMLDoc = s.isXML,
            ue.contains = s.contains
        }(e);
        var Re = /Until$/
          , Be = /^(?:parents|prev(?:Until|All))/
          , We = /^.[^:#\[\.,]*$/
          , Ue = ue.expr.match.needsContext
          , ze = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        ue.fn.extend({
            find: function(e) {
                var t, n, r, i = this.length;
                if ("string" != typeof e)
                    return r = this,
                    this.pushStack(ue(e).filter(function() {
                        for (t = 0; i > t; t++)
                            if (ue.contains(r[t], this))
                                return !0
                    }));
                for (n = [],
                t = 0; i > t; t++)
                    ue.find(e, this[t], n);
                return n = this.pushStack(i > 1 ? ue.unique(n) : n),
                n.selector = (this.selector ? this.selector + " " : "") + e,
                n
            },
            has: function(e) {
                var t, n = ue(e, this), r = n.length;
                return this.filter(function() {
                    for (t = 0; r > t; t++)
                        if (ue.contains(this, n[t]))
                            return !0
                })
            },
            not: function(e) {
                return this.pushStack(p(this, e, !1))
            },
            filter: function(e) {
                return this.pushStack(p(this, e, !0))
            },
            is: function(e) {
                return !!e && ("string" == typeof e ? Ue.test(e) ? ue(e, this.context).index(this[0]) >= 0 : ue.filter(e, this).length > 0 : this.filter(e).length > 0)
            },
            closest: function(e, t) {
                for (var n, r = 0, i = this.length, o = [], s = Ue.test(e) || "string" != typeof e ? ue(e, t || this.context) : 0; i > r; r++)
                    for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType; ) {
                        if (s ? s.index(n) > -1 : ue.find.matchesSelector(n, e)) {
                            o.push(n);
                            break
                        }
                        n = n.parentNode
                    }
                return this.pushStack(o.length > 1 ? ue.unique(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? ue.inArray(this[0], ue(e)) : ue.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                var n = "string" == typeof e ? ue(e, t) : ue.makeArray(e && e.nodeType ? [e] : e)
                  , r = ue.merge(this.get(), n);
                return this.pushStack(ue.unique(r))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }),
        ue.fn.andSelf = ue.fn.addBack,
        ue.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return ue.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return ue.dir(e, "parentNode", n)
            },
            next: function(e) {
                return c(e, "nextSibling")
            },
            prev: function(e) {
                return c(e, "previousSibling")
            },
            nextAll: function(e) {
                return ue.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return ue.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return ue.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return ue.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return ue.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return ue.sibling(e.firstChild)
            },
            contents: function(e) {
                return ue.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ue.merge([], e.childNodes)
            }
        }, function(e, t) {
            ue.fn[e] = function(n, r) {
                var i = ue.map(this, t, n);
                return Re.test(e) || (r = n),
                r && "string" == typeof r && (i = ue.filter(r, i)),
                i = this.length > 1 && !ze[e] ? ue.unique(i) : i,
                this.length > 1 && Be.test(e) && (i = i.reverse()),
                this.pushStack(i)
            }
        }),
        ue.extend({
            filter: function(e, t, n) {
                return n && (e = ":not(" + e + ")"),
                1 === t.length ? ue.find.matchesSelector(t[0], e) ? [t[0]] : [] : ue.find.matches(e, t)
            },
            dir: function(e, n, r) {
                for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !ue(o).is(r)); )
                    1 === o.nodeType && i.push(o),
                    o = o[n];
                return i
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling)
                    1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        });
        var Xe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
          , Je = / jQuery\d+="(?:null|\d+)"/g
          , Ke = RegExp("<(?:" + Xe + ")[\\s/>]", "i")
          , Qe = /^\s+/
          , Ye = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
          , Ve = /<([\w:]+)/
          , Ge = /<tbody/i
          , Ze = /<|&#?\w+;/
          , et = /<(?:script|style|link)/i
          , tt = /^(?:checkbox|radio)$/i
          , nt = /checked\s*(?:[^=]|=\s*.checked.)/i
          , rt = /^$|\/(?:java|ecma)script/i
          , it = /^true\/(.*)/
          , ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
          , st = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ue.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }
          , at = f(K)
          , ut = at.appendChild(K.createElement("div"));
        st.optgroup = st.option,
        st.tbody = st.tfoot = st.colgroup = st.caption = st.thead,
        st.th = st.td,
        ue.fn.extend({
            text: function(e) {
                return ue.access(this, function(e) {
                    return e === t ? ue.text(this) : this.empty().append((this[0] && this[0].ownerDocument || K).createTextNode(e))
                }, null, e, arguments.length)
            },
            wrapAll: function(e) {
                if (ue.isFunction(e))
                    return this.each(function(t) {
                        ue(this).wrapAll(e.call(this, t))
                    });
                if (this[0]) {
                    var t = ue(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]),
                    t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                            e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return ue.isFunction(e) ? this.each(function(t) {
                    ue(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = ue(this)
                      , n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = ue.isFunction(e);
                return this.each(function(n) {
                    ue(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ue.nodeName(this, "body") || ue(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(e) {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(e) {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
                })
            },
            before: function() {
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, r = 0; null != (n = this[r]); r++)
                    (!e || ue.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || ue.cleanData(b(n)),
                    n.parentNode && (t && ue.contains(n.ownerDocument, n) && m(b(n, "script")),
                    n.parentNode.removeChild(n)));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && ue.cleanData(b(e, !1)); e.firstChild; )
                        e.removeChild(e.firstChild);
                    e.options && ue.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null != e && e,
                t = null == t ? e : t,
                this.map(function() {
                    return ue.clone(this, e, t)
                })
            },
            html: function(e) {
                return ue.access(this, function(e) {
                    var n = this[0] || {}
                      , r = 0
                      , i = this.length;
                    if (e === t)
                        return 1 === n.nodeType ? n.innerHTML.replace(Je, "") : t;
                    if (!("string" != typeof e || et.test(e) || !ue.support.htmlSerialize && Ke.test(e) || !ue.support.leadingWhitespace && Qe.test(e) || st[(Ve.exec(e) || ["", ""])[1].toLowerCase()])) {
                        e = e.replace(Ye, "<$1></$2>");
                        try {
                            for (; i > r; r++)
                                n = this[r] || {},
                                1 === n.nodeType && (ue.cleanData(b(n, !1)),
                                n.innerHTML = e);
                            n = 0
                        } catch (o) {}
                    }
                    n && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function(e) {
                var t = ue.isFunction(e);
                return t || "string" == typeof e || (e = ue(e).not(this).detach()),
                this.domManip([e], !0, function(e) {
                    var t = this.nextSibling
                      , n = this.parentNode;
                    n && (ue(this).remove(),
                    n.insertBefore(e, t))
                })
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, n, r) {
                e = te.apply([], e);
                var i, o, s, a, u, l, c = 0, p = this.length, f = this, m = p - 1, y = e[0], v = ue.isFunction(y);
                if (v || !(1 >= p || "string" != typeof y || ue.support.checkClone) && nt.test(y))
                    return this.each(function(i) {
                        var o = f.eq(i);
                        v && (e[0] = y.call(this, i, n ? o.html() : t)),
                        o.domManip(e, n, r)
                    });
                if (p && (l = ue.buildFragment(e, this[0].ownerDocument, !1, this),
                i = l.firstChild,
                1 === l.childNodes.length && (l = i),
                i)) {
                    for (n = n && ue.nodeName(i, "tr"),
                    a = ue.map(b(l, "script"), h),
                    s = a.length; p > c; c++)
                        o = l,
                        c !== m && (o = ue.clone(o, !0, !0),
                        s && ue.merge(a, b(o, "script"))),
                        r.call(n && ue.nodeName(this[c], "table") ? d(this[c], "tbody") : this[c], o, c);
                    if (s)
                        for (u = a[a.length - 1].ownerDocument,
                        ue.map(a, g),
                        c = 0; s > c; c++)
                            o = a[c],
                            rt.test(o.type || "") && !ue._data(o, "globalEval") && ue.contains(u, o) && (o.src ? ue.ajax({
                                url: o.src,
                                type: "GET",
                                dataType: "script",
                                async: !1,
                                global: !1,
                                "throws": !0
                            }) : ue.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ot, "")));
                    l = i = null
                }
                return this
            }
        }),
        ue.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            ue.fn[e] = function(e) {
                for (var n, r = 0, i = [], o = ue(e), s = o.length - 1; s >= r; r++)
                    n = r === s ? this : this.clone(!0),
                    ue(o[r])[t](n),
                    ne.apply(i, n.get());
                return this.pushStack(i)
            }
        }),
        ue.extend({
            clone: function(e, t, n) {
                var r, i, o, s, a, u = ue.contains(e.ownerDocument, e);
                if (ue.support.html5Clone || ue.isXMLDoc(e) || !Ke.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (ut.innerHTML = e.outerHTML,
                ut.removeChild(o = ut.firstChild)),
                !(ue.support.noCloneEvent && ue.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ue.isXMLDoc(e)))
                    for (r = b(o),
                    a = b(e),
                    s = 0; null != (i = a[s]); ++s)
                        r[s] && v(i, r[s]);
                if (t)
                    if (n)
                        for (a = a || b(e),
                        r = r || b(o),
                        s = 0; null != (i = a[s]); s++)
                            y(i, r[s]);
                    else
                        y(e, o);
                return r = b(o, "script"),
                r.length > 0 && m(r, !u && b(e, "script")),
                r = a = i = null,
                o
            },
            buildFragment: function(e, t, n, r) {
                for (var i, o, s, a, u, l, c, p = e.length, d = f(t), h = [], g = 0; p > g; g++)
                    if (o = e[g],
                    o || 0 === o)
                        if ("object" === ue.type(o))
                            ue.merge(h, o.nodeType ? [o] : o);
                        else if (Ze.test(o)) {
                            for (a = a || d.appendChild(t.createElement("div")),
                            u = (Ve.exec(o) || ["", ""])[1].toLowerCase(),
                            c = st[u] || st._default,
                            a.innerHTML = c[1] + o.replace(Ye, "<$1></$2>") + c[2],
                            i = c[0]; i--; )
                                a = a.lastChild;
                            if (!ue.support.leadingWhitespace && Qe.test(o) && h.push(t.createTextNode(Qe.exec(o)[0])),
                            !ue.support.tbody)
                                for (o = "table" !== u || Ge.test(o) ? "<table>" !== c[1] || Ge.test(o) ? 0 : a : a.firstChild,
                                i = o && o.childNodes.length; i--; )
                                    ue.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
                            for (ue.merge(h, a.childNodes),
                            a.textContent = ""; a.firstChild; )
                                a.removeChild(a.firstChild);
                            a = d.lastChild
                        } else
                            h.push(t.createTextNode(o));
                for (a && d.removeChild(a),
                ue.support.appendChecked || ue.grep(b(h, "input"), x),
                g = 0; o = h[g++]; )
                    if ((!r || -1 === ue.inArray(o, r)) && (s = ue.contains(o.ownerDocument, o),
                    a = b(d.appendChild(o), "script"),
                    s && m(a),
                    n))
                        for (i = 0; o = a[i++]; )
                            rt.test(o.type || "") && n.push(o);
                return a = null,
                d
            },
            cleanData: function(e, t) {
                for (var n, r, i, o, s = 0, a = ue.expando, u = ue.cache, l = ue.support.deleteExpando, c = ue.event.special; null != (n = e[s]); s++)
                    if ((t || ue.acceptData(n)) && (i = n[a],
                    o = i && u[i])) {
                        if (o.events)
                            for (r in o.events)
                                c[r] ? ue.event.remove(n, r) : ue.removeEvent(n, r, o.handle);
                        u[i] && (delete u[i],
                        l ? delete n[a] : typeof n.removeAttribute !== J ? n.removeAttribute(a) : n[a] = null,
                        Z.push(i))
                    }
            }
        });
        var lt, ct, pt, ft = /alpha\([^)]*\)/i, dt = /opacity\s*=\s*([^)]*)/, ht = /^(top|right|bottom|left)$/, gt = /^(none|table(?!-c[ea]).+)/, mt = /^margin/, yt = RegExp("^(" + le + ")(.*)$", "i"), vt = RegExp("^(" + le + ")(?!px)[a-z%]+$", "i"), bt = RegExp("^([+-])=(" + le + ")", "i"), xt = {
            BODY: "block"
        }, wt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Tt = {
            letterSpacing: 0,
            fontWeight: 400
        }, kt = ["Top", "Right", "Bottom", "Left"], Nt = ["Webkit", "O", "Moz", "ms"];
        ue.fn.extend({
            css: function(e, n) {
                return ue.access(this, function(e, n, r) {
                    var i, o, s = {}, a = 0;
                    if (ue.isArray(n)) {
                        for (o = ct(e),
                        i = n.length; i > a; a++)
                            s[n[a]] = ue.css(e, n[a], !1, o);
                        return s
                    }
                    return r !== t ? ue.style(e, n, r) : ue.css(e, n)
                }, e, n, arguments.length > 1)
            },
            show: function() {
                return k(this, !0)
            },
            hide: function() {
                return k(this)
            },
            toggle: function(e) {
                var t = "boolean" == typeof e;
                return this.each(function() {
                    (t ? e : T(this)) ? ue(this).show() : ue(this).hide()
                })
            }
        }),
        ue.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = pt(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": ue.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, n, r, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, s, a, u = ue.camelCase(n), l = e.style;
                    if (n = ue.cssProps[u] || (ue.cssProps[u] = w(l, u)),
                    a = ue.cssHooks[n] || ue.cssHooks[u],
                    r === t)
                        return a && "get"in a && (o = a.get(e, !1, i)) !== t ? o : l[n];
                    if (s = typeof r,
                    "string" === s && (o = bt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ue.css(e, n)),
                    s = "number"),
                    !(null == r || "number" === s && isNaN(r) || ("number" !== s || ue.cssNumber[u] || (r += "px"),
                    ue.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"),
                    a && "set"in a && (r = a.set(e, r, i)) === t)))
                        try {
                            l[n] = r
                        } catch (c) {}
                }
            },
            css: function(e, n, r, i) {
                var o, s, a, u = ue.camelCase(n);
                return n = ue.cssProps[u] || (ue.cssProps[u] = w(e.style, u)),
                a = ue.cssHooks[n] || ue.cssHooks[u],
                a && "get"in a && (s = a.get(e, !0, r)),
                s === t && (s = pt(e, n, i)),
                "normal" === s && n in Tt && (s = Tt[n]),
                "" === r || r ? (o = parseFloat(s),
                r === !0 || ue.isNumeric(o) ? o || 0 : s) : s
            },
            swap: function(e, t, n, r) {
                var i, o, s = {};
                for (o in t)
                    s[o] = e.style[o],
                    e.style[o] = t[o];
                i = n.apply(e, r || []);
                for (o in t)
                    e.style[o] = s[o];
                return i
            }
        }),
        e.getComputedStyle ? (ct = function(t) {
            return e.getComputedStyle(t, null)
        }
        ,
        pt = function(e, n, r) {
            var i, o, s, a = r || ct(e), u = a ? a.getPropertyValue(n) || a[n] : t, l = e.style;
            return a && ("" !== u || ue.contains(e.ownerDocument, e) || (u = ue.style(e, n)),
            vt.test(u) && mt.test(n) && (i = l.width,
            o = l.minWidth,
            s = l.maxWidth,
            l.minWidth = l.maxWidth = l.width = u,
            u = a.width,
            l.width = i,
            l.minWidth = o,
            l.maxWidth = s)),
            u
        }
        ) : K.documentElement.currentStyle && (ct = function(e) {
            return e.currentStyle
        }
        ,
        pt = function(e, n, r) {
            var i, o, s, a = r || ct(e), u = a ? a[n] : t, l = e.style;
            return null == u && l && l[n] && (u = l[n]),
            vt.test(u) && !ht.test(n) && (i = l.left,
            o = e.runtimeStyle,
            s = o && o.left,
            s && (o.left = e.currentStyle.left),
            l.left = "fontSize" === n ? "1em" : u,
            u = l.pixelLeft + "px",
            l.left = i,
            s && (o.left = s)),
            "" === u ? "auto" : u
        }
        ),
        ue.each(["height", "width"], function(e, n) {
            ue.cssHooks[n] = {
                get: function(e, r, i) {
                    return r ? 0 === e.offsetWidth && gt.test(ue.css(e, "display")) ? ue.swap(e, wt, function() {
                        return C(e, n, i)
                    }) : C(e, n, i) : t
                },
                set: function(e, t, r) {
                    var i = r && ct(e);
                    return N(e, t, r ? S(e, n, r, ue.support.boxSizing && "border-box" === ue.css(e, "boxSizing", !1, i), i) : 0)
                }
            }
        }),
        ue.support.opacity || (ue.cssHooks.opacity = {
            get: function(e, t) {
                return dt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style
                  , r = e.currentStyle
                  , i = ue.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
                  , o = r && r.filter || n.filter || "";
                n.zoom = 1,
                (t >= 1 || "" === t) && "" === ue.trim(o.replace(ft, "")) && n.removeAttribute && (n.removeAttribute("filter"),
                "" === t || r && !r.filter) || (n.filter = ft.test(o) ? o.replace(ft, i) : o + " " + i)
            }
        }),
        ue(function() {
            ue.support.reliableMarginRight || (ue.cssHooks.marginRight = {
                get: function(e, n) {
                    return n ? ue.swap(e, {
                        display: "inline-block"
                    }, pt, [e, "marginRight"]) : t
                }
            }),
            !ue.support.pixelPosition && ue.fn.position && ue.each(["top", "left"], function(e, n) {
                ue.cssHooks[n] = {
                    get: function(e, r) {
                        return r ? (r = pt(e, n),
                        vt.test(r) ? ue(e).position()[n] + "px" : r) : t
                    }
                }
            })
        }),
        ue.expr && ue.expr.filters && (ue.expr.filters.hidden = function(e) {
            return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !ue.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ue.css(e, "display"))
        }
        ,
        ue.expr.filters.visible = function(e) {
            return !ue.expr.filters.hidden(e)
        }
        ),
        ue.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            ue.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)
                        i[e + kt[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            },
            mt.test(e) || (ue.cssHooks[e + t].set = N)
        });
        var St = /%20/g
          , Ct = /\[\]$/
          , Et = /\r?\n/g
          , jt = /^(?:submit|button|image|reset|file)$/i
          , At = /^(?:input|select|textarea|keygen)/i;
        ue.fn.extend({
            serialize: function() {
                return ue.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = ue.prop(this, "elements");
                    return e ? ue.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !ue(this).is(":disabled") && At.test(this.nodeName) && !jt.test(e) && (this.checked || !tt.test(e))
                }).map(function(e, t) {
                    var n = ue(this).val();
                    return null == n ? null : ue.isArray(n) ? ue.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Et, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Et, "\r\n")
                    }
                }).get()
            }
        }),
        ue.param = function(e, n) {
            var r, i = [], o = function(e, t) {
                t = ue.isFunction(t) ? t() : null == t ? "" : t,
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            if (n === t && (n = ue.ajaxSettings && ue.ajaxSettings.traditional),
            ue.isArray(e) || e.jquery && !ue.isPlainObject(e))
                ue.each(e, function() {
                    o(this.name, this.value)
                });
            else
                for (r in e)
                    A(r, e[r], n, o);
            return i.join("&").replace(St, "+")
        }
        ,
        ue.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            ue.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }),
        ue.fn.hover = function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
        ;
        var Dt, _t, Mt = ue.now(), Ht = /\?/, Lt = /#.*$/, It = /([?&])_=[^&]*/, Ot = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, qt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Pt = /^(?:GET|HEAD)$/, $t = /^\/\//, Ft = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Rt = ue.fn.load, Bt = {}, Wt = {}, Ut = "*/".concat("*");
        try {
            _t = Q.href
        } catch (zt) {
            _t = K.createElement("a"),
            _t.href = "",
            _t = _t.href
        }
        Dt = Ft.exec(_t.toLowerCase()) || [],
        ue.fn.load = function(e, n, r) {
            if ("string" != typeof e && Rt)
                return Rt.apply(this, arguments);
            var i, o, s, a = this, u = e.indexOf(" ");
            return u >= 0 && (i = e.slice(u, e.length),
            e = e.slice(0, u)),
            ue.isFunction(n) ? (r = n,
            n = t) : n && "object" == typeof n && (s = "POST"),
            a.length > 0 && ue.ajax({
                url: e,
                type: s,
                dataType: "html",
                data: n
            }).done(function(e) {
                o = arguments,
                a.html(i ? ue("<div>").append(ue.parseHTML(e)).find(i) : e)
            }).complete(r && function(e, t) {
                a.each(r, o || [e.responseText, t, e])
            }
            ),
            this
        }
        ,
        ue.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            ue.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        ue.each(["get", "post"], function(e, n) {
            ue[n] = function(e, r, i, o) {
                return ue.isFunction(r) && (o = o || i,
                i = r,
                r = t),
                ue.ajax({
                    url: e,
                    type: n,
                    dataType: o,
                    data: r,
                    success: i
                })
            }
        }),
        ue.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: _t,
                type: "GET",
                isLocal: qt.test(Dt[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ut,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": e.String,
                    "text html": !0,
                    "text json": ue.parseJSON,
                    "text xml": ue.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? M(M(e, ue.ajaxSettings), t) : M(ue.ajaxSettings, e)
            },
            ajaxPrefilter: D(Bt),
            ajaxTransport: D(Wt),
            ajax: function(e, n) {
                function r(e, n, r, i) {
                    var o, p, v, b, w, k = n;
                    2 !== x && (x = 2,
                    u && clearTimeout(u),
                    c = t,
                    a = i || "",
                    T.readyState = e > 0 ? 4 : 0,
                    r && (b = H(f, T, r)),
                    e >= 200 && 300 > e || 304 === e ? (f.ifModified && (w = T.getResponseHeader("Last-Modified"),
                    w && (ue.lastModified[s] = w),
                    w = T.getResponseHeader("etag"),
                    w && (ue.etag[s] = w)),
                    204 === e ? (o = !0,
                    k = "nocontent") : 304 === e ? (o = !0,
                    k = "notmodified") : (o = L(f, b),
                    k = o.state,
                    p = o.data,
                    v = o.error,
                    o = !v)) : (v = k,
                    (e || !k) && (k = "error",
                    0 > e && (e = 0))),
                    T.status = e,
                    T.statusText = (n || k) + "",
                    o ? g.resolveWith(d, [p, k, T]) : g.rejectWith(d, [T, k, v]),
                    T.statusCode(y),
                    y = t,
                    l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [T, f, o ? p : v]),
                    m.fireWith(d, [T, k]),
                    l && (h.trigger("ajaxComplete", [T, f]),
                    --ue.active || ue.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e,
                e = t),
                n = n || {};
                var i, o, s, a, u, l, c, p, f = ue.ajaxSetup({}, n), d = f.context || f, h = f.context && (d.nodeType || d.jquery) ? ue(d) : ue.event, g = ue.Deferred(), m = ue.Callbacks("once memory"), y = f.statusCode || {}, v = {}, b = {}, x = 0, w = "canceled", T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!p)
                                for (p = {}; t = Ot.exec(a); )
                                    p[t[1].toLowerCase()] = t[2];
                            t = p[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return x || (e = b[n] = b[n] || e,
                        v[e] = t),
                        this
                    },
                    overrideMimeType: function(e) {
                        return x || (f.mimeType = e),
                        this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e)
                                    y[t] = [y[t], e[t]];
                            else
                                T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return c && c.abort(t),
                        r(0, t),
                        this
                    }
                };
                if (g.promise(T).complete = m.add,
                T.success = T.done,
                T.error = T.fail,
                f.url = ((e || f.url || _t) + "").replace(Lt, "").replace($t, Dt[1] + "//"),
                f.type = n.method || n.type || f.method || f.type,
                f.dataTypes = ue.trim(f.dataType || "*").toLowerCase().match(ce) || [""],
                null == f.crossDomain && (i = Ft.exec(f.url.toLowerCase()),
                f.crossDomain = !(!i || i[1] === Dt[1] && i[2] === Dt[2] && (i[3] || ("http:" === i[1] ? 80 : 443)) == (Dt[3] || ("http:" === Dt[1] ? 80 : 443)))),
                f.data && f.processData && "string" != typeof f.data && (f.data = ue.param(f.data, f.traditional)),
                _(Bt, f, n, T),
                2 === x)
                    return T;
                l = f.global,
                l && 0 === ue.active++ && ue.event.trigger("ajaxStart"),
                f.type = f.type.toUpperCase(),
                f.hasContent = !Pt.test(f.type),
                s = f.url,
                f.hasContent || (f.data && (s = f.url += (Ht.test(s) ? "&" : "?") + f.data,
                delete f.data),
                f.cache === !1 && (f.url = It.test(s) ? s.replace(It, "$1_=" + Mt++) : s + (Ht.test(s) ? "&" : "?") + "_=" + Mt++)),
                f.ifModified && (ue.lastModified[s] && T.setRequestHeader("If-Modified-Since", ue.lastModified[s]),
                ue.etag[s] && T.setRequestHeader("If-None-Match", ue.etag[s])),
                (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", f.contentType),
                T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ut + "; q=0.01" : "") : f.accepts["*"]);
                for (o in f.headers)
                    T.setRequestHeader(o, f.headers[o]);
                if (f.beforeSend && (f.beforeSend.call(d, T, f) === !1 || 2 === x))
                    return T.abort();
                w = "abort";
                for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    T[o](f[o]);
                if (c = _(Wt, f, n, T)) {
                    T.readyState = 1,
                    l && h.trigger("ajaxSend", [T, f]),
                    f.async && f.timeout > 0 && (u = setTimeout(function() {
                        T.abort("timeout")
                    }, f.timeout));
                    try {
                        x = 1,
                        c.send(v, r)
                    } catch (k) {
                        if (!(2 > x))
                            throw k;
                        r(-1, k)
                    }
                } else
                    r(-1, "No Transport");
                return T
            },
            getScript: function(e, n) {
                return ue.get(e, t, n, "script")
            },
            getJSON: function(e, t, n) {
                return ue.get(e, t, n, "json")
            }
        }),
        ue.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return ue.globalEval(e),
                    e
                }
            }
        }),
        ue.ajaxPrefilter("script", function(e) {
            e.cache === t && (e.cache = !1),
            e.crossDomain && (e.type = "GET",
            e.global = !1)
        }),
        ue.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var n, r = K.head || ue("head")[0] || K.documentElement;
                return {
                    send: function(t, i) {
                        n = K.createElement("script"),
                        n.async = !0,
                        e.scriptCharset && (n.charset = e.scriptCharset),
                        n.src = e.url,
                        n.onload = n.onreadystatechange = function(e, t) {
                            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null,
                            n.parentNode && n.parentNode.removeChild(n),
                            n = null,
                            t || i(200, "success"))
                        }
                        ,
                        r.insertBefore(n, r.firstChild)
                    },
                    abort: function() {
                        n && n.onload(t, !0)
                    }
                }
            }
        });
        var Xt = []
          , Jt = /(=)\?(?=&|$)|\?\?/;
        ue.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Xt.pop() || ue.expando + "_" + Mt++;
                return this[e] = !0,
                e
            }
        }),
        ue.ajaxPrefilter("json jsonp", function(n, r, i) {
            var o, s, a, u = n.jsonp !== !1 && (Jt.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Jt.test(n.data) && "data");
            return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ue.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback,
            u ? n[u] = n[u].replace(Jt, "$1" + o) : n.jsonp !== !1 && (n.url += (Ht.test(n.url) ? "&" : "?") + n.jsonp + "=" + o),
            n.converters["script json"] = function() {
                return a || ue.error(o + " was not called"),
                a[0]
            }
            ,
            n.dataTypes[0] = "json",
            s = e[o],
            e[o] = function() {
                a = arguments
            }
            ,
            i.always(function() {
                e[o] = s,
                n[o] && (n.jsonpCallback = r.jsonpCallback,
                Xt.push(o)),
                a && ue.isFunction(s) && s(a[0]),
                a = s = t
            }),
            "script") : t
        });
        var Kt, Qt, Yt = 0, Vt = e.ActiveXObject && function() {
            var e;
            for (e in Kt)
                Kt[e](t, !0)
        }
        ;
        ue.ajaxSettings.xhr = e.ActiveXObject ? function() {
            return !this.isLocal && I() || O()
        }
        : I,
        Qt = ue.ajaxSettings.xhr(),
        ue.support.cors = !!Qt && "withCredentials"in Qt,
        Qt = ue.support.ajax = !!Qt,
        Qt && ue.ajaxTransport(function(n) {
            if (!n.crossDomain || ue.support.cors) {
                var r;
                return {
                    send: function(i, o) {
                        var s, a, u = n.xhr();
                        if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async),
                        n.xhrFields)
                            for (a in n.xhrFields)
                                u[a] = n.xhrFields[a];
                        n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType),
                        n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (a in i)
                                u.setRequestHeader(a, i[a])
                        } catch (l) {}
                        u.send(n.hasContent && n.data || null),
                        r = function(e, i) {
                            var a, l, c, p;
                            try {
                                if (r && (i || 4 === u.readyState))
                                    if (r = t,
                                    s && (u.onreadystatechange = ue.noop,
                                    Vt && delete Kt[s]),
                                    i)
                                        4 !== u.readyState && u.abort();
                                    else {
                                        p = {},
                                        a = u.status,
                                        l = u.getAllResponseHeaders(),
                                        "string" == typeof u.responseText && (p.text = u.responseText);
                                        try {
                                            c = u.statusText
                                        } catch (f) {
                                            c = ""
                                        }
                                        a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = p.text ? 200 : 404
                                    }
                            } catch (d) {
                                i || o(-1, d)
                            }
                            p && o(a, c, p, l)
                        }
                        ,
                        n.async ? 4 === u.readyState ? setTimeout(r) : (s = ++Yt,
                        Vt && (Kt || (Kt = {},
                        ue(e).unload(Vt)),
                        Kt[s] = r),
                        u.onreadystatechange = r) : r()
                    },
                    abort: function() {
                        r && r(t, !0)
                    }
                }
            }
        });
        var Gt, Zt, en = /^(?:toggle|show|hide)$/, tn = RegExp("^(?:([+-])=|)(" + le + ")([a-z%]*)$", "i"), nn = /queueHooks$/, rn = [R], on = {
            "*": [function(e, t) {
                var n, r, i = this.createTween(e, t), o = tn.exec(t), s = i.cur(), a = +s || 0, u = 1, l = 20;
                if (o) {
                    if (n = +o[2],
                    r = o[3] || (ue.cssNumber[e] ? "" : "px"),
                    "px" !== r && a) {
                        a = ue.css(i.elem, e, !0) || n || 1;
                        do
                            u = u || ".5",
                            a /= u,
                            ue.style(i.elem, e, a + r);
                        while (u !== (u = i.cur() / s) && 1 !== u && --l)
                    }
                    i.unit = r,
                    i.start = a,
                    i.end = o[1] ? a + (o[1] + 1) * n : n
                }
                return i
            }
            ]
        };
        ue.Animation = ue.extend($, {
            tweener: function(e, t) {
                ue.isFunction(e) ? (t = e,
                e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++)
                    n = e[r],
                    on[n] = on[n] || [],
                    on[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? rn.unshift(e) : rn.push(e)
            }
        }),
        ue.Tween = B,
        B.prototype = {
            constructor: B,
            init: function(e, t, n, r, i, o) {
                this.elem = e,
                this.prop = n,
                this.easing = i || "swing",
                this.options = t,
                this.start = this.now = this.cur(),
                this.end = r,
                this.unit = o || (ue.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = B.propHooks[this.prop];
                return e && e.get ? e.get(this) : B.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = B.propHooks[this.prop];
                return this.pos = t = this.options.duration ? ue.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
                this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : B.propHooks._default.set(this),
                this
            }
        },
        B.prototype.init.prototype = B.prototype,
        B.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ue.css(e.elem, e.prop, ""),
                    t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    ue.fx.step[e.prop] ? ue.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ue.cssProps[e.prop]] || ue.cssHooks[e.prop]) ? ue.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        },
        B.propHooks.scrollTop = B.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        ue.each(["toggle", "show", "hide"], function(e, t) {
            var n = ue.fn[t];
            ue.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, r, i)
            }
        }),
        ue.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(T).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = ue.isEmptyObject(e)
                  , o = ue.speed(t, n, r)
                  , s = function() {
                    var t = $(this, ue.extend({}, e), o);
                    s.finish = function() {
                        t.stop(!0)
                    }
                    ,
                    (i || ue._data(this, "finish")) && t.stop(!0)
                };
                return s.finish = s,
                i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(e, n, r) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop,
                    t(r)
                };
                return "string" != typeof e && (r = n,
                n = e,
                e = t),
                n && e !== !1 && this.queue(e || "fx", []),
                this.each(function() {
                    var t = !0
                      , n = null != e && e + "queueHooks"
                      , o = ue.timers
                      , s = ue._data(this);
                    if (n)
                        s[n] && s[n].stop && i(s[n]);
                    else
                        for (n in s)
                            s[n] && s[n].stop && nn.test(n) && i(s[n]);
                    for (n = o.length; n--; )
                        o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r),
                        t = !1,
                        o.splice(n, 1));
                    (t || !r) && ue.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"),
                this.each(function() {
                    var t, n = ue._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = ue.timers, s = r ? r.length : 0;
                    for (n.finish = !0,
                    ue.queue(this, e, []),
                    i && i.cur && i.cur.finish && i.cur.finish.call(this),
                    t = o.length; t--; )
                        o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                        o.splice(t, 1));
                    for (t = 0; s > t; t++)
                        r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }),
        ue.each({
            slideDown: W("show"),
            slideUp: W("hide"),
            slideToggle: W("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            ue.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }),
        ue.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? ue.extend({}, e) : {
                complete: n || !n && t || ue.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ue.isFunction(t) && t
            };
            return r.duration = ue.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ue.fx.speeds ? ue.fx.speeds[r.duration] : ue.fx.speeds._default,
            (null == r.queue || r.queue === !0) && (r.queue = "fx"),
            r.old = r.complete,
            r.complete = function() {
                ue.isFunction(r.old) && r.old.call(this),
                r.queue && ue.dequeue(this, r.queue)
            }
            ,
            r
        }
        ,
        ue.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        },
        ue.timers = [],
        ue.fx = B.prototype.init,
        ue.fx.tick = function() {
            var e, n = ue.timers, r = 0;
            for (Gt = ue.now(); n.length > r; r++)
                e = n[r],
                e() || n[r] !== e || n.splice(r--, 1);
            n.length || ue.fx.stop(),
            Gt = t
        }
        ,
        ue.fx.timer = function(e) {
            e() && ue.timers.push(e) && ue.fx.start()
        }
        ,
        ue.fx.interval = 13,
        ue.fx.start = function() {
            Zt || (Zt = setInterval(ue.fx.tick, ue.fx.interval))
        }
        ,
        ue.fx.stop = function() {
            clearInterval(Zt),
            Zt = null
        }
        ,
        ue.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        ue.fx.step = {},
        ue.expr && ue.expr.filters && (ue.expr.filters.animated = function(e) {
            return ue.grep(ue.timers, function(t) {
                return e === t.elem
            }).length
        }
        ),
        ue.fn.offset = function(e) {
            if (arguments.length)
                return e === t ? this : this.each(function(t) {
                    ue.offset.setOffset(this, e, t)
                });
            var n, r, i = {
                top: 0,
                left: 0
            }, o = this[0], s = o && o.ownerDocument;
            return s ? (n = s.documentElement,
            ue.contains(n, o) ? (typeof o.getBoundingClientRect !== J && (i = o.getBoundingClientRect()),
            r = U(s),
            {
                top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : i) : void 0
        }
        ,
        ue.offset = {
            setOffset: function(e, t, n) {
                var r = ue.css(e, "position");
                "static" === r && (e.style.position = "relative");
                var i, o, s = ue(e), a = s.offset(), u = ue.css(e, "top"), l = ue.css(e, "left"), c = ("absolute" === r || "fixed" === r) && ue.inArray("auto", [u, l]) > -1, p = {}, f = {};
                c ? (f = s.position(),
                i = f.top,
                o = f.left) : (i = parseFloat(u) || 0,
                o = parseFloat(l) || 0),
                ue.isFunction(t) && (t = t.call(e, n, a)),
                null != t.top && (p.top = t.top - a.top + i),
                null != t.left && (p.left = t.left - a.left + o),
                "using"in t ? t.using.call(e, p) : s.css(p)
            }
        },
        ue.fn.extend({
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                        top: 0,
                        left: 0
                    }, r = this[0];
                    return "fixed" === ue.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(),
                    t = this.offset(),
                    ue.nodeName(e[0], "html") || (n = e.offset()),
                    n.top += ue.css(e[0], "borderTopWidth", !0),
                    n.left += ue.css(e[0], "borderLeftWidth", !0)),
                    {
                        top: t.top - n.top - ue.css(r, "marginTop", !0),
                        left: t.left - n.left - ue.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || K.documentElement; e && !ue.nodeName(e, "html") && "static" === ue.css(e, "position"); )
                        e = e.offsetParent;
                    return e || K.documentElement
                })
            }
        }),
        ue.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, n) {
            var r = /Y/.test(n);
            ue.fn[e] = function(i) {
                return ue.access(this, function(e, i, o) {
                    var s = U(e);
                    return o === t ? s ? n in s ? s[n] : s.document.documentElement[i] : e[i] : (s ? s.scrollTo(r ? ue(s).scrollLeft() : o, r ? o : ue(s).scrollTop()) : e[i] = o,
                    t)
                }, e, i, arguments.length, null)
            }
        }),
        ue.each({
            Height: "height",
            Width: "width"
        }, function(e, n) {
            ue.each({
                padding: "inner" + e,
                content: n,
                "": "outer" + e
            }, function(r, i) {
                ue.fn[i] = function(i, o) {
                    var s = arguments.length && (r || "boolean" != typeof i)
                      , a = r || (i === !0 || o === !0 ? "margin" : "border");
                    return ue.access(this, function(n, r, i) {
                        var o;
                        return ue.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement,
                        Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? ue.css(n, r, a) : ue.style(n, r, i, a)
                    }, n, s ? i : t, s, null)
                }
            })
        }),
        e.jQuery = e.$ = ue,
        "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
            return ue
        })
    }(window),
    template("modal/template.default", function(e) {
        "use strict";
        var t = this
          , n = (t.$helpers,
        t.$escape)
          , r = e.title
          , i = e.type
          , o = t.$string
          , s = e.msg
          , a = e.cancelBtn
          , u = e.cancelBtnText
          , l = e.sureBtnText
          , c = e.showTips
          , p = e.showHelperTips
          , f = "";
        return f += '<div class="ep-modal-content"> <div class="ep-modal-header"> ',
        f += n(r),
        f += " ",
        "confirm" != i && (f += ' <a href="javascript:void(0);" data-active="close" class="ep-icon ep-icon-close close">关闭</a> '),
        f += ' </div> <div class="ep-modal-body"> ',
        "default" == i && (f += ' <div class="text">',
        f += o(s),
        f += '</div> <div class="btns"> ',
        a && (f += ' <a href="javascript:void(0);" data-active="fail" class="ep-btn ep-btn-white ep-mr10">',
        f += n(u),
        f += "</a> "),
        f += ' <a href="javascript:void(0);" data-active="success" class="ep-btn ep-btn-blue ep-btn-normal">',
        f += n(l),
        f += "</a> </div> "),
        f += " ",
        "confirm" == i && (f += ' <div class="text text-status"><span class="ep-icon ep-icon-warning"></span><span>',
        f += n(s),
        f += '</span></div> <div class="btns"> <a href="javascript:void(0);" data-active="confirm" class="ep-btn ep-btn-blue ep-btn-normal">我知道了</a> </div> '),
        f += " </div> ",
        c && (f += ' <div class="ep-modal-footer"> <div class="links"> <a href="javascript:void(0);" data-active="help" title="查看支付帮助">查看支付帮助</a> <a href="javascript:void(0);" data-active="free" title="免费开通使用版">免费开通使用版</a> </div> </div> '),
        f += " ",
        p && (f += ' <div class="ep-modal-footer"> <div class="links"> <a href="javascript:void(0);" data-active="helperTipsLink" title="查看支付帮助">支付遇到困难？</a> </div> </div> '),
        f += " </div>",
        new String(f)
    }),
    template("mask/template.default", '<div class="ep-mask"></div>'),
    "object" != typeof JSON && (JSON = {}),
    function() {
        "use strict";
        function f(e) {
            return e < 10 ? "0" + e : e
        }
        function this_value() {
            return this.valueOf()
        }
        function quote(e) {
            return rx_escapable.lastIndex = 0,
            rx_escapable.test(e) ? '"' + e.replace(rx_escapable, function(e) {
                var t = meta[e];
                return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + e + '"'
        }
        function str(e, t) {
            var n, r, i, o, s, a = gap, u = t[e];
            switch (u && "object" == typeof u && "function" == typeof u.toJSON && (u = u.toJSON(e)),
            "function" == typeof rep && (u = rep.call(t, e, u)),
            typeof u) {
            case "string":
                return quote(u);
            case "number":
                return isFinite(u) ? String(u) : "null";
            case "boolean":
            case "null":
                return String(u);
            case "object":
                if (!u)
                    return "null";
                if (gap += indent,
                s = [],
                "[object Array]" === Object.prototype.toString.apply(u)) {
                    for (o = u.length,
                    n = 0; n < o; n += 1)
                        s[n] = str(n, u) || "null";
                    return i = 0 === s.length ? "[]" : gap ? "[\n" + gap + s.join(",\n" + gap) + "\n" + a + "]" : "[" + s.join(",") + "]",
                    gap = a,
                    i
                }
                if (rep && "object" == typeof rep)
                    for (o = rep.length,
                    n = 0; n < o; n += 1)
                        "string" == typeof rep[n] && (r = rep[n],
                        i = str(r, u),
                        i && s.push(quote(r) + (gap ? ": " : ":") + i));
                else
                    for (r in u)
                        Object.prototype.hasOwnProperty.call(u, r) && (i = str(r, u),
                        i && s.push(quote(r) + (gap ? ": " : ":") + i));
                return i = 0 === s.length ? "{}" : gap ? "{\n" + gap + s.join(",\n" + gap) + "\n" + a + "}" : "{" + s.join(",") + "}",
                gap = a,
                i
            }
        }
        var rx_one = /^[\],:{}\s]*$/
          , rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g
          , rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g
          , rx_four = /(?:^|:|,)(?:\s*\[)+/g
          , rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g
          , rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }
        ,
        Boolean.prototype.toJSON = this_value,
        Number.prototype.toJSON = this_value,
        String.prototype.toJSON = this_value);
        var gap, indent, meta, rep;
        "function" != typeof JSON.stringify && (meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        JSON.stringify = function(e, t, n) {
            var r;
            if (gap = "",
            indent = "",
            "number" == typeof n)
                for (r = 0; r < n; r += 1)
                    indent += " ";
            else
                "string" == typeof n && (indent = n);
            if (rep = t,
            t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length))
                throw new Error("JSON.stringify");
            return str("", {
                "": e
            })
        }
        ),
        "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(e, t) {
                var n, r, i = e[t];
                if (i && "object" == typeof i)
                    for (n in i)
                        Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n),
                        r !== undefined ? i[n] = r : delete i[n]);
                return reviver.call(e, t, i)
            }
            var j;
            if (text = String(text),
            rx_dangerous.lastIndex = 0,
            rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function(e) {
                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            })),
            rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, "")))
                return j = eval("(" + text + ")"),
                "function" == typeof reviver ? walk({
                    "": j
                }, "") : j;
            throw new SyntaxError("JSON.parse")
        }
        )
    }(),
    function(e, t) {
        "use strict";
        function n() {
            e[s] = {}
        }
        function r() {
            return e[s] || n(),
            e[s]
        }
        function i(r, i) {
            if (r) {
                r = String(r);
                var o, a = r.split("."), u = a.length, l = e[s];
                if (l || n(),
                !a)
                    return !1;
                for (o = 0; o < u; o += 1)
                    l[a[o]] || (l[a[o]] = {}),
                    o === u - 1 && i !== t && (l[a[o]] = i),
                    l = l[a[o]];
                return l
            }
            return !1
        }
        var o, s = "TEG";
        o = r(),
        o.namespace = o.ns = i,
        e[s] = o,
        e.getNamespace = e.getNs = r
    }(window),
    function(e, t) {
        "use strict";
        var n = {}
          , r = []
          , i = n.hasOwnProperty
          , o = n.toString
          , s = r.indexOf
          , a = /%20/g
          , u = /\[\]$/
          , l = {
            noop: function() {},
            type: function(e) {
                return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
            },
            jumpPage: function(e, t, n, r) {
                if (r) {
                    var i = $("#postForm");
                    0 == i.length && (i = $("<form id='postForm' action='" + e + "' method='post' style='display: none' target='" + (n ? "_top" : "_blank") + "'></form>").appendTo($("body"))),
                    this.each(t, function(e, t) {
                        i.append("<input type='hidden' name='" + e + "' value='" + t + "'/> ")
                    }),
                    function() {
                        i.submit()
                    }()
                } else {
                    var o = this.URL.addParam(e, t);
                    n ? location.href = o : window.open(o)
                }
            },
            param: function(e) {
                var t, n = [], r = function(e, t) {
                    t = l.isFunction(t) ? t() : null == t ? "" : t,
                    n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
                if (l.isArray(e) || e.jquery && !l.isPlainObject(e))
                    l.each(e, function() {
                        r(this.name, this.value)
                    });
                else
                    for (t in e)
                        l.buildParams(t, e[t], r);
                return n.join("&").replace(a, "+")
            },
            buildParams: function(e, t, n) {
                var r;
                if (l.isArray(t))
                    l.each(t, function(t, r) {
                        u.test(e) ? n(e, r) : l.buildParams(e + "[" + ("object" == typeof r ? t : "") + "]", r, n)
                    });
                else if ("object" === l.type(t))
                    for (r in t)
                        l.buildParams(e + "[" + r + "]", t[r], n);
                else
                    n(e, t)
            },
            inArray: function(e, t, n) {
                var r;
                if (t) {
                    if (s)
                        return s.call(t, e, n);
                    for (r = t.length,
                    n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                        if (n in t && t[n] === e)
                            return n
                }
                return -1
            },
            isArray: Array.isArray || function(e) {
                return "array" === l.type(e)
            }
            ,
            isFunction: function(e) {
                return "function" === l.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isPlainObject: function(e) {
                if (!e || "object" !== l.type(e) || e.nodeType || l.isWindow(e))
                    return !1;
                try {
                    if (e.constructor && !i.call(e, "constructor") && !i.call(e.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (n) {
                    return !1
                }
                var r;
                for (r in e)
                    ;
                return r === t || i.call(e, r)
            },
            extend: function() {
                var e, n, r, i, o, s, a = arguments[0] || {}, u = 1, c = arguments.length, p = !1;
                for ("boolean" == typeof a && (p = a,
                a = arguments[1] || {},
                u = 2),
                "object" == typeof a || l.isFunction(a) || (a = {}),
                c === u && (a = this,
                --u); u < c; u++)
                    if (null != (o = arguments[u]))
                        for (i in o)
                            e = a[i],
                            r = o[i],
                            a !== r && (p && r && (l.isPlainObject(r) || (n = l.isArray(r))) ? (n ? (n = !1,
                            s = e && l.isArray(e) ? e : []) : s = e && l.isPlainObject(e) ? e : {},
                            a[i] = l.extend(p, s, r)) : r !== t && (a[i] = r));
                return a
            },
            each: function(e, t, n) {
                var r, i = 0, o = e.length, s = l.isArray(e);
                if (n) {
                    if (s)
                        for (; i < o && (r = t.apply(e[i], n),
                        r !== !1); i++)
                            ;
                    else
                        for (i in e)
                            if (r = t.apply(e[i], n),
                            r === !1)
                                break
                } else if (s)
                    for (; i < o && (r = t.call(e[i], i, e[i]),
                    r !== !1); i++)
                        ;
                else
                    for (i in e)
                        if (r = t.call(e[i], i, e[i]),
                        r === !1)
                            break;
                return e
            },
            genMessage: function(t, n, r) {
                n = n || {};
                var i = e.Service.StatusMap[t];
                return e.debug ? l.extend(n, {
                    serverError: r
                }, i) : l.extend(n, i)
            },
            genJSONPCallback: function(e) {
                var t = +new Date;
                return "enterprise_" + (e || "") + t
            },
            UUID: function(e, t) {
                var n, r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), i = r, o = [];
                if (t = t || i.length,
                e)
                    for (n = 0; n < e; n++)
                        o[n] = i[0 | Math.random() * t];
                else {
                    var s;
                    for (o[8] = o[13] = o[18] = o[23] = "-",
                    o[14] = "4",
                    n = 0; n < 36; n++)
                        o[n] || (s = 0 | 16 * Math.random(),
                        o[n] = i[19 == n ? 3 & s | 8 : s])
                }
                return o.join("")
            },
            close: function() {
                var e = navigator.appName;
                parseInt(navigator.appVersion);
                if ("Microsoft Internet Explorer" == e) {
                    var t = !(!document.all || window.opera || !window.XMLHttpRequest);
                    t ? (window.open("", "_parent", ""),
                    window.close()) : (window.focus(),
                    window.opener = this,
                    window.close())
                } else {
                    try {
                        window.focus(),
                        window.opener = this,
                        window.close()
                    } catch (n) {}
                    try {
                        window.open("", "_self", ""),
                        window.close()
                    } catch (n) {}
                }
            },
            delayRun: function(e, t, n, r) {
                r = r || window,
                r.__DelayRunTimer ? r.__DelayRunTimer[e] && (clearTimeout(r.__DelayRunTimer[e]),
                r.__DelayRunTimer[e] = -1) : r.__DelayRunTimer = {},
                r.__DelayRunTimer[e] = setTimeout(function() {
                    t.call(r)
                }, n)
            }
        };
        e.ns("Helpers.Utils", l)
    }(window.getNs()),
    function(e, t, n) {
        "use strict";
        jQuery.noConflict(),
        t.ns("Helpers.Query", jQuery)
    }(window, window.getNs()),
    function(e, t) {
        "use strict";
        e.ns("Enum.PayStep", {
            Channel: "channel",
            Pending: "pending",
            Success: "success",
            Fail: "fail"
        })
    }(window.getNs()),
    function(e, t) {
        "use strict";
        e.ns("Enum.SessionType", {
            SKEY: "SKEY",
            OAUTH: "OAUTH",
            UNL: "UNL"
        })
    }(window.getNs()),
    function(e, t) {
        "use strict";
        e.ns("Enum.ChannelDesc", {
            qqwallet: "QQ钱包支付",
            wechat: "微信支付",
            bank: "网银支付",
            icard: "国际卡支付",
            remitpay: "转账/汇款"
        }),
        e.ns("Enum.PayChannel", {
            FbankCard: "icard",
            QQPAY: "qqwallet",
            WXPAY: "wechat",
            BANK: "bank",
            OFFLINE: "remitpay"
        })
    }(window.getNs()),
    function(e, t, n, r) {
        "use strict";
        var i = function(e) {
            return i.inst ? i.inst : (i.inst = this,
            this.$container = e || n("body"),
            this.options = {
                template: "mask/template.default"
            },
            void (this.$el = n(t(this.options.template, {})).appendTo(this.$container)))
        };
        i.prototype = i.fn = {
            show: function() {
                this.$el.addClass("show")
            },
            hide: function() {
                this.$el.removeClass("show")
            }
        },
        e.ns("UI.Mask", i)
    }(window.getNs(), template, "undefined" != typeof jQuery ? jQuery : window.getNs().ns("Helpers.Query")),
    function(e, t, n, r) {
        "use strict";
        var i = function(t, r, o) {
            this._defaultOptions = {
                type: "default",
                cancelBtn: !0,
                sureBtnText: "已成功支付",
                cancelBtnText: "未完成支付"
            };
            var s = function(e, t, r) {
                e.callbacks = n.extend({
                    onClick: n.noop
                }, r),
                e.options = n.extend({
                    template: "modal/template.default",
                    data: e._defaultOptions
                }, t)
            };
            if (i.inst) {
                var a = i.inst;
                return s(a, r, o),
                a
            }
            i.inst = this,
            this.$container = t || n("body"),
            this.$el = n('<div class="ep-modal"></div>').appendTo(this.$container),
            this.mask = new e.UI.Mask,
            s(this, r, o),
            this.bindEvent()
        };
        i.prototype = i.fn = {
            show: function(e) {
                this.$context && !e || (this.$context && this.$context.remove(),
                this.options.data = n.extend({}, this._defaultOptions, e.data || {}),
                this.$context = n(t(this.options.template, this.options.data || {})).appendTo(this.$el)),
                this.$el.addClass("show"),
                this.mask.show()
            },
            setCallBack: function(e) {
                this.callbacks = n.extend({
                    onClick: n.noop
                }, e)
            },
            hide: function() {
                this.mask.hide(),
                this.$el.removeClass("show")
            },
            bindEvent: function() {
                var e = this;
                this.$el.delegate("a", "click", function(t) {
                    var r = n(this)
                      , i = r.data("active");
                    e.hide(),
                    e.callbacks.onClick(i, e.options.data.type)
                })
            }
        },
        e.ns("UI.Modal", i)
    }(window.getNs(), template, "undefined" != typeof jQuery ? jQuery : window.getNs().ns("Helpers.Query")),
    function(e, t, n, r) {
        "use strict";
        var i = n.Helpers.Utils
          , o = {
            getParam: function(t, n) {
                if (n == r && (n = t,
                t = e.location.href),
                n && t) {
                    var i = new RegExp("(\\?|#|&|^)" + n + "=([^&^#]*)(#|&|$)")
                      , o = t.match(i);
                    return o ? o[2] : ""
                }
                return null
            },
            getParams: function(e) {
                e = e || location.href;
                var t = e.replace(/.+?\?/, "").replace(/#.*/, "").split("&")
                  , n = {};
                for (var r in t) {
                    var i = t[r].split("=");
                    2 === i.length && (n[i[0]] = i[1])
                }
                return n
            },
            getFParam: function(e, t) {
                var n, r = decodeURIComponent(this.getParam(e)), i = 0 == r.length;
                switch (t) {
                case "a":
                    n = i ? [] : r.split(",");
                    break;
                case "j":
                    n = i ? {} : JSON.parse(r);
                    break;
                case "b":
                    n = "1" == r;
                    break;
                default:
                    n = i ? null : r
                }
                return n
            },
            delParam: function(t, n) {
                return n == r && (n = t,
                t = e.location.href),
                n instanceof Array || (n = [n]),
                i.each(n, function(e, n) {
                    t = t.replace(new RegExp("(?:&" + n + "=[^&]*)","g"), ""),
                    t = t.replace(new RegExp("(?:\\?" + n + "=[^&]*&?)","g"), "?")
                }),
                t
            },
            addParam: function(t, n) {
                n == r && (n = t,
                t = e.location.href);
                var s = [];
                i.each(n, function(e, t) {
                    s.push(e)
                }),
                t = o.delParam(t, s);
                var a = i.param(n);
                return t += /(\?|&)$/.test(t) ? "" + a : /\?/.test(t) ? "&" + a : "?" + a
            }
        }
          , s = {
            format: function(e) {
                if (e.length <= 3)
                    return e;
                if (!/^(\+|-)?(\d+)(\.\d+)?$/.test(e))
                    return e;
                var t = RegExp.$1
                  , n = RegExp.$2
                  , r = RegExp.$3
                  , i = new RegExp;
                for (i.compile("(\\d)(\\d{3})(,|$)"); i.test(n); )
                    n = n.replace(i, "$1,$2$3");
                return t + "" + n + r
            }
        }
          , a = {
            reverse: function(e) {
                return String(e).length > 0 ? String(e).split("").reverse().join("") : e
            },
            formatTypeData: function(e, t) {
                var n = t;
                switch (t = String(t),
                e) {
                case "bankAccount":
                    if (t.length <= 4)
                        return t;
                    var r = new RegExp;
                    for (r.compile("(\\d)(\\d{4})(,|$)"),
                    t = this.reverse(t); r.test(t); )
                        t = t.replace(r, "$1,$2$3");
                    n = t.replace(/,/gim, " "),
                    n = this.reverse(n);
                    break;
                case "number":
                    n = s.format(t)
                }
                return n
            },
            format: function(e, t) {
                var n = e;
                if (arguments.length > 1 && 2 == arguments.length && "object" == typeof arguments[1]) {
                    var i = arguments[1];
                    for (var o in i)
                        if (i[o] != r) {
                            var s = new RegExp("({" + o + "})","g");
                            n = n.replace(s, i[o])
                        }
                }
                return n
            }
        }
          , u = {
            convertToDate: function(e) {
                var t = e;
                return "string" == typeof e && (t = new Date(Date.parse(e)),
                isNaN(t.getTime()) && e.replace(/^(\d{4})-(\d{1,2})-(\d{1,2}).(\d{2}):(\d{2}):(\d{2})$/, function(e, n, r, i, o, s, a) {
                    t = new Date(n,r - 1,i,o,s,a)
                })),
                t
            },
            format: function(e, t) {
                e = this.convertToDate(e);
                var n = function(e, t) {
                    t || (t = 2),
                    e = new String(e);
                    for (var n = 0, r = ""; n < t - e.length; n++)
                        r += "0";
                    return r + e
                };
                return t.replace(/"[^"]*"|'[^']*'|\b(?:d{1,4}|M{1,4}|yy(?:yy)?|([hHmstT])\1?|[lLZ])\b/g, function(t) {
                    switch (t) {
                    case "d":
                        return e.getDate();
                    case "dd":
                        return n(e.getDate());
                    case "ddd":
                        return ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"][e.getDay()];
                    case "dddd":
                        return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][e.getDay()];
                    case "M":
                        return e.getMonth() + 1;
                    case "MM":
                        return n(e.getMonth() + 1);
                    case "MMM":
                        return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][e.getMonth()];
                    case "MMMM":
                        return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][e.getMonth()];
                    case "yy":
                        return new String(e.getFullYear()).substr(2);
                    case "yyyy":
                        return e.getFullYear();
                    case "h":
                        return e.getHours() % 12 || 12;
                    case "hh":
                        return n(e.getHours() % 12 || 12);
                    case "H":
                        return e.getHours();
                    case "HH":
                        return n(e.getHours());
                    case "m":
                        return e.getMinutes();
                    case "mm":
                        return n(e.getMinutes());
                    case "s":
                        return e.getSeconds();
                    case "ss":
                        return n(e.getSeconds());
                    case "l":
                        return e.getMilliseconds();
                    case "ll":
                        return n(e.getMilliseconds());
                    case "tt":
                        return e.getHours() < 12 ? "am" : "pm";
                    case "TT":
                        return e.getHours() < 12 ? "AM" : "PM"
                    }
                })
            }
        }
          , l = {
            get: function(e) {
                var n = t.cookie.match(new RegExp("(?:^|;\\s)" + e + "=(.*?)(?:;\\s|$)"));
                return n ? n[1] : ""
            },
            set: function(e, n, r) {
                r = r || {};
                var i = new Date
                  , o = r.domain || "m.jifen.qq.com"
                  , s = r.path || "/"
                  , a = r.time || 31536e7;
                i.setTime(i.getTime() + a),
                t.cookie = e + "=" + n + "; path=" + s + "; domain=" + o + "; expires=" + i.toUTCString()
            },
            del: function(e, t) {
                t = t || {},
                t.time = -new Date,
                l.set(e, "", t)
            }
        }
          , c = {
            Number: s,
            URL: o,
            Cookie: l,
            String: a,
            Date: u
        };
        i.extend(i, c)
    }(window, document, window.getNs()),
    function(e, t) {
        "use strict";
        var n = e.Helpers
          , r = n.Utils
          , i = r.String
          , o = function(e) {
            this.urlMatch = /\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/i,
            this.options = {},
            this.mid = e.mid || "r",
            this.appid = e.appid,
            this.session = e.session,
            this.env = e.env || "live",
            this.pf = e.pf || "vip_m-ep_html5-html5",
            this.pfkey = "pfkey",
            this.receipt = e.receipt || "",
            this.protocol = e.protocol || "http",
            "live" == this.env && (this.protocol = "https",
            o.env = 1),
            this.domain = i.format("{prefix}api.unipay.qq.com", {
                prefix: "sandbox" == this.env ? "sandbox." : "dev" == this.env ? "dev." : ""
            });
            var t = "sandbox" == this.env ? "sandbox." : "dev" == this.env ? "sandbox." : "";
            this.pullURI = i.format("{protocol}://{prefix}jspay.qq.com/jsonp", {
                protocol: this.protocol,
                prefix: t
            }),
            this.separateURI = i.format("{protocol}://{prefix}pay.qq.com/enterprise/separate.shtml", {
                protocol: this.protocol,
                prefix: t
            }),
            this.checkSIGURI = i.format("{protocol}://{prefix}pay.qq.com/enterprise/php/checkSig.php", {
                protocol: this.protocol,
                prefix: t
            }),
            r.extend(this.options, e)
        };
        o.transaction_id = (1e4 * Math.random() + 1e3).toString().replace(".", ""),
        o.pid = 1,
        o.report = function(e) {
            var t = {}
              , n = [];
            if (r.extend(t, e || {}, {
                6: 10,
                13: o.pid++,
                29: o.transaction_id,
                50: navigator.userAgent,
                31: "enterprisepay_v1",
                36: window.location.href
            }),
            "object" == typeof t[8]) {
                var i = [];
                for (var s in t[8])
                    i.push(s + "=" + t[8][s]);
                t[8] = i.join("&")
            }
            r.each(t, function(e, t) {
                n.push(e + "=" + encodeURIComponent(t))
            });
            var a = 1 == o.env ? "//" : "//sandbox.";
            (new Image).src = a + "api.unipay.qq.com/v1/900/15499/log_data?num=1&record0=" + n.join("|") + "&rr=" + Math.random()
        }
        ,
        o.prototype = o.fn = {
            urls: {
                goodsInfo: "qz_goods_info",
                queryOrder: "query_order",
                queryRefund: "query_refund",
                refund: "refund",
                saveGoods: "qz_save_goods"
            },
            host: function(e) {
                return r.String.format("{protocol}://{host}", {
                    protocol: e ? "https" : this.protocol || "https",
                    host: this.domain
                })
            },
            forceProtocol: function(e, t) {
                return e.replace(/http(\b|s)(?=:)/i, t ? "https" : this.protocol)
            },
            cgiToUrl: function(e, t, n) {
                return this.urlMatch.test(e) ? t ? e : this.forceProtocol(e, n) : r.String.format("{host}{path}", {
                    host: this.host(n),
                    path: this.cgiToPath(e)
                })
            },
            cgiToPath: function(e) {
                var t = this.urls[this.env] ? this.urls[this.env][e] || this.urls[e] || e : this.urls[e] || e;
                return r.String.format("/v1/{mid}/{appid}/{cgi}", {
                    appid: this.appid,
                    mid: this.mid || "r",
                    cgi: t
                })
            }
        },
        e.ns("Helpers.Request", o)
    }(window.getNs()),
    function(e, t) {
        "use strict";
        var n = e.Enum
          , r = e.Helpers
          , i = r.Utils
          , o = i.Cookie
          , s = function(e) {
            e = e || {},
            this.sessionId = e.sessionId || "uin",
            this.sessionKey = e.sessionKey || "skey",
            this.user = e.user,
            this.password = e.password
        };
        s.prototype = {
            getSessionParam: function(e, t) {
                e = e || "openid",
                t = t || "openkey";
                var n = {
                    session_id: this.sessionId,
                    session_type: this.sessionKey
                };
                return n[e] = this.user || "",
                n[t] = this.password || "nopwd",
                n
            },
            isValid: function() {
                return "st_dummy" == this.sessionKey ? this.user : this.user && this.password
            },
            setUser: function(e) {
                if ("st_dummy" == this.sessionKey) {
                    var t = this.user;
                    this.user = e || t
                }
            },
            getUser: function() {
                return this.user
            },
            getPWD: function() {
                return this.password
            }
        };
        var a = function(e) {
            s.call(this, e),
            this.sessionId = e.sessionId || "uin",
            this.sessionKey = e.sessionKey || "sid"
        };
        a.prototype = new s;
        var u = function(e) {
            s.call(this, e),
            this.sessionId = e.sessionId || "uin",
            this.sessionKey = e.sessionKey || "skey"
        };
        u.prototype = new s;
        var l = function(e) {
            s.call(this, e),
            this.sessionId = e.sessionId || "openid",
            this.sessionKey = e.sessionKey || "kp_actoken"
        };
        l.prototype = new s;
        var c = function(e) {
            s.call(this, e),
            this.sessionId = e.sessionId || "hy_gameid",
            this.sessionKey = e.sessionKey || "kp_actoken"
        };
        c.prototype = new s;
        var p = function(e) {
            s.call(this, e),
            this.sessionId = e.sessionId || "hy_gameid",
            this.sessionKey = e.sessionKey || "st_dummy"
        };
        p.prototype = new s;
        var f = {
            SID: a,
            SKEY: u,
            MQQ: l,
            OAUTH: c,
            UNL: p
        };
        f.getSession = function(e, t) {
            e = e.toUpperCase(),
            t = t || {};
            var r = o.get("uin")
              , s = {}
              , a = null;
            switch (e) {
            case n.SessionType.SID:
                t.user || r && r.length > 0 && (s.user = String(parseInt(o.get("uin").substring(1), 10))),
                t.password || (s.password = o.get("sid"));
                break;
            case n.SessionType.SKEY:
                t.user || r && r.length > 0 && (s.user = String(parseInt(o.get("uin").substring(1), 10))),
                t.password || (s.password = o.get("skey"))
            }
            var u = i.inArray(e, [n.SessionType.SID, n.SessionType.SKEY, n.SessionType.OAUTH]) > -1;
            return !s.user && t.user && (s.user = t.user),
            !s.password && t.password && (s.password = t.password),
            s.user && (u && s.password || !u) && (a = new f[e](s)),
            a
        }
        ,
        e.ns("Session", f)
    }(window.getNs()),
    function(e) {
        "use strict";
        var t = {
            "login-defect": {
                status: "-100",
                message: "登陆态无效"
            },
            "order-exception": {
                status: "-200",
                message: "渠道下单失败"
            },
            "cgi-error": {
                status: -300,
                message: "服务不可用"
            },
            "client-error": {
                status: -400,
                message: "支付页面不可用"
            },
            "open-window": {
                status: "-500",
                message: "跨域打开新窗口"
            },
            "token-error": {
                status: "100",
                message: "获取token失败"
            },
            "switch-page": {
                status: 200,
                message: "支付状态变更"
            },
            "switch-channel": {
                status: 300,
                message: "支付渠道变更"
            },
            "click-atag": {
                status: 400,
                message: "单击a标签"
            },
            "order-status": {
                status: 500,
                message: "检查订单状态"
            },
            "page-ready": {
                status: 1e3,
                message: "页面正常加载"
            }
        };
        e.ns("Service.StatusMap", t)
    }(window.getNs()),
    function(e, t, n, r, i) {
        "use strict";
        var o = r.Helpers
          , s = (o.Utils,
        function() {
            var n = e.console !== i
              , o = n ? e.console : null
              , a = n && o.log !== i
              , u = n && o.warn !== i
              , l = n && o.error !== i
              , c = n && o.time !== i && o.timeEnd !== i;
            return {
                logToScreen: function(e) {
                    if (r.debug) {
                        var n = t.getElementById("log")
                          , i = t.createElement("p")
                          , o = t.createTextNode(e);
                        if (n) {
                            i.appendChild(o);
                            var s = n.childNodes;
                            s.length > 0 ? n.insertBefore(i, s[0]) : n.appendChild(i)
                        }
                    }
                },
                log: function() {
                    if (r.debug) {
                        var e, t = Array.prototype.slice.call(arguments), n = t.length;
                        n && (a && (o.log.apply ? o.log.apply(o, t) : o.log(t)),
                        e = t[0],
                        s.logToScreen(e))
                    }
                },
                warn: function() {
                    if (r.debug) {
                        var e, t = Array.prototype.slice.call(arguments), n = t.length;
                        n && (e = t[0],
                        u ? o.warn.apply(o, t) : s.log(e),
                        s.logToScreen(e))
                    }
                },
                error: function() {
                    if (r.debug) {
                        var e, t = Array.prototype.slice.call(arguments), n = t.length;
                        n && (e = t[0],
                        r.debug && (l ? o.error.apply(o, t) : s.log(e),
                        s.logToScreen(e)))
                    }
                },
                save: function() {
                    r.debug && n && e.Blob && e.JSON && e.URL && (o.save = function(n, r) {
                        if (!n && l)
                            return void o.error("Console.save: No data");
                        r || (r = "console.json"),
                        "object" == typeof n && (n = JSON.stringify(n, i, 4));
                        var s = new Blob([n],{
                            type: "text/json"
                        })
                          , a = t.createEvent("MouseEvents")
                          , u = t.createElement("a");
                        u.download = r,
                        u.href = e.URL.createObjectURL(s),
                        u.dataset.downloadurl = ["text/json", u.download, u.href].join(":"),
                        a.initMouseEvent("click", !0, !1, e, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null),
                        u.dispatchEvent(a)
                    }
                    )
                },
                logTimerStart: function(e) {
                    c && o.time(e)
                },
                logTimerEnd: function(e) {
                    c && o.timeEnd(e)
                }
            }
        }());
        r.ns("Helpers.Console", s)
    }(window, document, navigator, window.getNs()),
    function(e, t) {
        "use strict";
        function n() {
            var e = this;
            return e instanceof n ? (e.m = [],
            e.r = null,
            void (e.f = !1)) : new n
        }
        n.prototype = n.fn = {
            add: function(e) {
                var t = this;
                t.f ? e(t.r) : t.m.push(e)
            },
            flush: function(e, t) {
                var n = this;
                if (!n.f)
                    if (n.r = e,
                    t || (n.f = !0),
                    t)
                        for (var r = 0, i = n.m.length; r < i; r++)
                            n.m[r](e);
                    else
                        for (; n.m[0]; )
                            n.m.shift()(e)
            }
        },
        e.ns("Helpers.Queue", n)
    }(window.getNs()),
    function(e, t) {
        function n(e, t) {
            arguments.length < 2 ? u("Target error - target and name are both required") : a(e) || u("Target error - target name must be a string"),
            this.target = t,
            this.name = e
        }
        function r(e, t) {
            if (this.name = e,
            this._listener = {},
            this.targets = {},
            t && o(t))
                for (var n in t)
                    t.hasOwnProperty(n) && this.addTarget(n, t[n]);
            var r = this
              , s = function(e) {
                if (o(e)) {
                    var t = JSON.parse(e.data);
                    if (t && o(t)) {
                        var n, s, a, u = r._listener;
                        if (n = u["*"])
                            for (a = n.length,
                            s = 0; s < a; s++)
                                i(n[s]) && n[s](t);
                        if (n = u[t.originName],
                        n && n.length > 0)
                            for (a = n.length,
                            s = 0; s < a; s++)
                                i(n[s]) && n[s](t)
                    }
                }
            };
            c ? "addEventListener"in window ? window.addEventListener("message", s, !1) : "attachEvent"in window && window.attachEvent("onmessage", s) : window.navigator[l + this.name] = s
        }
        function i(e) {
            return "function" == typeof e
        }
        function o(e) {
            return "object" == typeof e
        }
        function s(e) {
            return "string" == typeof e
        }
        function a(e) {
            return s(e) && "" !== e
        }
        function u(e) {
            throw new TypeError(e)
        }
        var l = "[VIP-GLOBAL]"
          , c = "postMessage"in window;
        c ? n.prototype.send = function(e) {
            this.target.postMessage(e, "*")
        }
        : n.prototype.send = function(e) {
            var t = window.navigator[l + this.name];
            if (!i(t))
                throw new Error("Target callback function is not defined");
            t(e, window)
        }
        ,
        r.prototype.addTarget = function(e, t) {
            return this.targets[e] = new n(e,t),
            this
        }
        ,
        r.prototype.removeTarget = function(e) {
            return this.targets.hasOwnProperty(e) && (this.targets[e] = null,
            delete this.targets[e]),
            this
        }
        ,
        r.prototype.on = function(e, t) {
            arguments.length < 2 && (t = e,
            e = "*"),
            a(e) || (e = "*"),
            i(t) || u("callback must be a function.");
            var n = this._listener;
            return n[e] || (n[e] = []),
            n[e].push(t),
            this
        }
        ,
        r.prototype.once = function(e, t) {
            var n = this
              , r = function() {
                n.off(e, r),
                t.apply(this, arguments)
            };
            this.on(e, r)
        }
        ,
        r.prototype.off = function(e, t) {
            var n, r, i;
            if (n = this._listener,
            !e && !t)
                return this._listener = {},
                this;
            if (e && !t)
                return delete n[e],
                this;
            if (r = n[e]) {
                for (i = r.length - 1; i >= 0; i--)
                    r[i] === t && r.splice(i, 1);
                0 === r.length && delete n[e]
            }
            return this
        }
        ,
        r.prototype.send = function(e, t) {
            a(e) || u("The targetName must be a non-empty string.");
            var n = this.targets[e];
            n || u('The target window named: "' + e + '" is not exist.\n You can call `addTarget(targetName, windowObj)` to add a one.');
            var r = {
                message: t,
                originUrl: window.location.href,
                originName: this.name,
                timeStamp: +new Date
            };
            return n.send(JSON.stringify(r)),
            this
        }
        ,
        r.prototype.broadcast = function(e) {
            var t, n = this.targets;
            for (t in n)
                n.hasOwnProperty(t) && this.send(t, e);
            return this
        }
        ,
        e.ns("Helpers.XCross", r)
    }(window.getNs()),
    function(e, t) {
        "use strict";
        var n, r = e.Enum, i = e.Session, o = e.Helpers, s = o.Utils, a = (e.UI,
        o.XCross), u = o.Request, l = o.Queue, c = e.Service.StatusMap, p = s.URL, f = s.String, d = function(e) {
            var t, n = null, r = e.sourceKey, i = r.split("."), o = i.length, s = e.source;
            if (s) {
                for (t = 0; t < o; t += 1) {
                    if (!s.hasOwnProperty([i[t]])) {
                        s = null;
                        break
                    }
                    s = s[i[t]]
                }
                n = s
            }
            if (n || e.defaultValue) {
                var a = null
                  , u = n || e.defaultValue;
                switch (e.type) {
                case "bool":
                    a = e.defaultValue && null == n ? e.defaultValue ? "1" : null : n ? "1" : null;
                    break;
                case "array":
                    a = u ? u.join(",") : null;
                    break;
                default:
                    a = u
                }
                null != a && (e.target[e.targetKey] = a)
            }
        }, h = function(e, t, n) {
            s.each(n, function(n, r) {
                d({
                    type: r.type || "string",
                    target: e,
                    source: t,
                    sourceKey: n,
                    targetKey: r.key || n,
                    defaultValue: r.val
                })
            })
        }, g = function() {
            var e = {}
              , t = function(t, n) {
                return e[t] ? e[t] : e[t] = {
                    q: new l,
                    keep: n
                }
            };
            return {
                addOne: function(e, n) {
                    var r = t(e);
                    if (r.keep)
                        throw new TypeError(e + "事件类型不一致。");
                    r.q.add(n)
                },
                add: function(e, n) {
                    var r = t(e, !0);
                    if (!r.keep)
                        throw new TypeError(e + "事件类型不一致。");
                    r.q.add(n)
                },
                off: function(t) {
                    e[t] = null
                },
                flush: function(n, r) {
                    if (e[n]) {
                        var i = t(n);
                        i.q.flush(r, i.keep)
                    }
                }
            }
        }(), m = null, y = ["data", "load", "ready", "token", "children"], v = function(e) {
            e.sessionType && e.appId && !this.session && (this.session = i.getSession(e.sessionType, {
                user: e.user || e.openid || e.openId,
                password: e.password || e.openkey || e.openKey
            }),
            this.request = new u({
                protocol: e.protocol || "http",
                mid: e.mId,
                env: e.env,
                session: this.session,
                appid: e.appId
            }))
        }, b = function(e, t) {
            u && u.report(s.extend({
                3: this.session ? this.session.getUser() : "",
                24: this.clientInfo.appId,
                26: this.clientInfo.env || "live",
                21: f.format("ep.client.{action}", {
                    action: e
                })
            }, t))
        }, x = function(e) {
            if (!this.messenger && e) {
                this.messenger = new a("parent",{
                    enterprise: e.contentWindow
                }),
                this.messenger.on(function(e) {
                    e.originName && "enterprise" == e.originName && ("1000" == e.message.status ? m.trigger("children", e.message) : m.trigger("data", e.message))
                });
                var t = this;
                this.on("children", function(e) {
                    t.loaded = !0,
                    s.delayRun("good.info", function() {}),
                    t.trigger("data", e)
                }),
                this.on("data", function(e) {
                    switch (e.status) {
                    case c["switch-page"].status:
                        t.clientInfo.externalPending && (e.step == r.PayStep.Pending ? s.inArray(e.channel, [r.PayChannel.WXPAY, r.PayChannel.QQPAY]) == -1 && w.call(t) : t.modal && t.modal.hide());
                        break;
                    case c["order-status"].status:
                        e.step == r.PayStep.Pending ? w.call(t, !0) : (t.trigger("load", !1),
                        t.modal && t.modal.hide());
                        break;
                    case c["open-window"].status:
                        window.open(e.url)
                    }
                })
            }
        }, w = function(t) {
            if (t)
                return this.modal.show({
                    data: {
                        title: "提示",
                        showTips: !1,
                        showHelperTips: this.clientInfo.epExt && this.clientInfo.epExt.guideUrl,
                        type: "confirm",
                        msg: "您尚未支付成功，请继续支付"
                    }
                }),
                void this.trigger("load", !1);
            b.call(this, "pending.pv");
            var n = this
              , i = function(e, t) {
                n.notify(s.genMessage(e, t))
            }
              , o = "switch-page"
              , a = "click-atag"
              , u = e.UI;
            this.mask = new u.Mask,
            this.modal = new u.Modal(null,{},{
                onClick: function(e, t) {
                    switch ("close" == e && (e = "confirm" == t ? "confirm" : r.PayStep.Fail),
                    e) {
                    case r.PayStep.Success:
                    case r.PayStep.Fail:
                        n.mask.show(),
                        n.trigger("load", !0),
                        i("order-status");
                        break;
                    case "confirm":
                        i(o, {
                            step: r.PayStep.Channel
                        });
                        break;
                    case "help":
                    case "free":
                        n.modal.show(),
                        n.trigger("data", s.genMessage(a, {
                            active: e
                        }));
                        break;
                    case "helperTipsLink":
                        i(o, {
                            step: r.PayStep.Channel
                        }),
                        window.open(n.clientInfo.epExt.guideUrl)
                    }
                }
            }),
            this.mask.show(),
            this.modal.show({
                data: {
                    type: "default",
                    title: "确认支付操作",
                    showTips: n.clientInfo.tips,
                    msg: "请在新开的支付页面上完成支付"
                }
            })
        };
        n = function(t) {
            return m ? m : this instanceof n ? (this.clientInfo = s.extend({
                sessionType: r.SessionType.UNL,
                timeout: 10,
                appId: "",
                externalPending: !0
            }, t),
            m = this,
            e.debug = this.clientInfo.debug,
            this.trigger("ready", m),
            v.call(this, this.clientInfo),
            b.call(this, "version." + n.version),
            void 0) : new n(t)
        }
        ,
        n.Ready = function(e) {
            g.addOne("ready", e)
        }
        ,
        n.version = "1.0",
        n.prototype = n.fn = {
            on: function(e, t) {
                if (s.inArray(e, y) == -1)
                    throw new TypeError("不支持事件");
                g.add(e, t)
            },
            off: function(e) {
                g.off(e)
            },
            pay: function(e) {
                if (!this.session || !this.session.isValid())
                    return void this.trigger("data", s.genMessage("login-defect"));
                if ((e.url_params || e.transaction_id || e.token_id) && (e.url_params && (this.clientInfo.tokenUrl = e.url_params),
                this.clientInfo.token = e.transaction_id || e.token_id,
                delete e.url_params,
                delete e.transaction_id,
                delete e.token_id),
                s.extend(this.clientInfo, e),
                !this.clientInfo.token)
                    throw new TypeError("token缺失。");
                var t = p.getParams(this.clientInfo.tokenUrl);
                this.clientInfo.pf = p.getParam(this.clientInfo.tokenUrl, "pf") || "ep.client." + (this.clientInfo.appId || "");
                var n = null
                  , r = s.extend({
                    appid: this.clientInfo.appId,
                    mid: this.clientInfo.mId,
                    type: this.clientInfo.sessionType,
                    timestamp: +new Date
                }, this.session.getSessionParam());
                if (h(r, this.clientInfo, {
                    tips: {
                        type: "bool"
                    },
                    style: {},
                    env: {},
                    secure: {
                        type: "bool",
                        val: !0
                    },
                    allowChannels: {
                        key: "allowchannels",
                        type: "array"
                    },
                    channel: {},
                    mId: {
                        key: "mid"
                    },
                    nFormat: {
                        key: "nformat",
                        type: "bool",
                        val: !0
                    },
                    debug: {
                        type: "bool"
                    }
                }),
                b.call(this, "pay.click"),
                this.clientInfo.isSeparatePage)
                    if (n = p.addParam(this.request.separateURI, s.extend(t, {
                        transaction_id: this.clientInfo.token,
                        pf: this.clientInfo.pf,
                        extinfo: "object" == s.type(this.clientInfo.epExt) ? JSON.stringify(this.clientInfo.epExt) : null
                    }, r)),
                    window.top != window)
                        try {
                            window.top.location.href = n
                        } catch (i) {
                            window.open(n)
                        }
                    else
                        location.href = n;
                else {
                    h(r, this.clientInfo, {
                        externalPending: {
                            key: "pending",
                            type: "bool",
                            val: !0
                        },
                        "epExt.useBizWxAppid": {
                            key: "bizwxappid",
                            type: "bool"
                        },
                        "epExt.phone": {
                            key: "phone"
                        },
                        "epExt.native_wxpay": {
                            key: "native_wxpay"
                        },
                        "epExt.native_qqpay": {
                            key: "native_qqpay"
                        },
                        "epExt.onlyQrCode": {
                            key: "onlyQrCode"
                        },
                        "epExt.showOrderInfo": {
                            key: "showOrderInfo"
                        },
                        "epExt.bankMode": {
                            key: "bankmode",
                            val: 2
                        },
                        "epExt.epBankPriority": {
                            key: "epbank",
                            type: "bool"
                        },
                        "epExt.goTransBtn": {
                            key: "goTransBtn"
                        }
                    });
                    var a = this.clientInfo.$target.select ? this.clientInfo.$target : o.Query ? o.Query(this.clientInfo.$target) : $(this.clientInfo.$target);
                    if (!(a.length > 0))
                        throw new TypeError("$target参数缺失");
                    this.trigger("load", !0),
                    n = this.clientInfo.tokenUrl ? p.addParam(this.request.host() + this.clientInfo.tokenUrl, r) : p.addParam(this.request.cgiToUrl("goodsInfo"), s.extend(t, {
                        transaction_id: this.clientInfo.token,
                        pf: this.clientInfo.pf
                    }, r));
                    var u = (new Date).getTime()
                      , l = this;
                    a.attr("src", n),
                    a.on("load", function(e) {
                        a.off("load"),
                        l.trigger("load", !1),
                        l.notify({
                            status: -9999,
                            client: s.extend({}, "object" == s.type(l.clientInfo.epExt) ? l.clientInfo.epExt : {})
                        }),
                        b.call(l, "index.time", {
                            20: (new Date).getTime() - u
                        })
                    }),
                    s.delayRun("good.info", function() {
                        l.trigger("data", s.genMessage("client-error")),
                        l.loaded = !1
                    }, 1e3 * this.clientInfo.timeout),
                    x.call(this, a.get(0))
                }
            },
            trigger: function(e, t) {
                g.flush(e, t)
            },
            notify: function(e) {
                return !(!this.messenger || !this.loaded) && void this.messenger.send("enterprise", e)
            }
        },
        e.ns("Service.EnterprisePay", n)
    }(window.getNs()),
    define = tempDefine,
    module = tempModule,
    exports = tempExports,
    "function" == typeof define ? define(function() {
        return TEG.Service.EnterprisePay
    }) : "undefined" != typeof exports && (module.exports = TEG.Service.EnterprisePay)
}(this);
