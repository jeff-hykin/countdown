;(function (t) {
    function e(e) {
        for (var r, o, s = e[0], l = e[1], u = e[2], d = 0, h = []; d < s.length; d++) (o = s[d]), Object.prototype.hasOwnProperty.call(i, o) && i[o] && h.push(i[o][0]), (i[o] = 0)
        for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (t[r] = l[r])
        c && c(e)
        while (h.length) h.shift()()
        return a.push.apply(a, u || []), n()
    }
    function n() {
        for (var t, e = 0; e < a.length; e++) {
            for (var n = a[e], r = !0, s = 1; s < n.length; s++) {
                var l = n[s]
                0 !== i[l] && (r = !1)
            }
            r && (a.splice(e--, 1), (t = o((o.s = n[0]))))
        }
        return t
    }
    var r = {},
        i = { app: 0 },
        a = []
    function o(e) {
        if (r[e]) return r[e].exports
        var n = (r[e] = { i: e, l: !1, exports: {} })
        return t[e].call(n.exports, n, n.exports, o), (n.l = !0), n.exports
    }
    ;(o.m = t),
        (o.c = r),
        (o.d = function (t, e, n) {
            o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n })
        }),
        (o.r = function (t) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 })
        }),
        (o.t = function (t, e) {
            if ((1 & e && (t = o(t)), 8 & e)) return t
            if (4 & e && "object" === typeof t && t && t.__esModule) return t
            var n = Object.create(null)
            if ((o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                for (var r in t)
                    o.d(
                        n,
                        r,
                        function (e) {
                            return t[e]
                        }.bind(null, r)
                    )
            return n
        }),
        (o.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t["default"]
                      }
                    : function () {
                          return t
                      }
            return o.d(e, "a", e), e
        }),
        (o.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }),
        (o.p = "")
    var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
        l = s.push.bind(s)
    ;(s.push = e), (s = s.slice())
    for (var u = 0; u < s.length; u++) e(s[u])
    var c = l
    a.push([0, "chunk-vendors"]), n()
})({
    0: function (t, e, n) {
        t.exports = n("56d7")
    },
    "034f": function (t, e, n) {
        "use strict"
        var r = n("64a9"),
            i = n.n(r)
        i.a
    },
    "12da": function (t, e, n) {},
    "41e5": function (t, e, n) {},
    "56d7": function (t, e, n) {
        "use strict"
        n.r(e)
        n("cadf"), n("551c"), n("f751"), n("097d")
        var r = n("2b0e"),
            i = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e
                return n("column", { attrs: { "align-h": "left", "align-v": "top" } }, [n("row", { attrs: { "align-v": "top", wrap: !0, width: "100%" } }, [n("column", { attrs: { margin: "2rem", "max-with": "100vw", "flex-grow": "1", "max-width": "40rem" } }, [n("Card", { staticStyle: { "max-width": "100%" } }, [n("h3", { staticStyle: { width: "100%", "max-width": "100%" } }, [t._v(t._s(t.calendarEventName))])]), n("row", [t.daysUntil ? n("h1", [t._v(t._s(t.daysUntil) + ":")]) : t._e(), t.hoursUntil ? n("h1", [t._v(t._s(t.hoursUntil) + ":")]) : t._e(), t.minutesUntil ? n("h1", [t._v(t._s(t.minutesUntil) + ":")]) : t._e(), n("h1", [t._v(t._s(t.secondsUntil))])])], 1), n("column", { staticClass: "event-container" }, [n("row", { attrs: { height: "2rem" } }), n("ToDo", { on: { taskChange: t.updateCalendarEvents } })], 1)], 1)], 1)
            },
            a = [],
            o =
                (n("ac4d"),
                n("8a81"),
                n("ac6a"),
                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e
                    return n("row", { staticClass: "card", attrs: { color: "gray" } }, [t._t("default")], 2)
                }),
            s = [],
            l = (n("a51a"), n("2877")),
            u = {},
            c = Object(l["a"])(u, o, s, !1, null, "25e5b356", null),
            d = c.exports,
            h = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e
                return n(
                    "div",
                    [
                        n("ui-textbox", {
                            ref: "textbox",
                            staticClass: "todo-textbox",
                            staticStyle: { "font-size": "14pt !important", width: "25rem" },
                            attrs: { "floating-label": "", label: "Your todo's ", placeholder: "(mm/dd/yyyy hh:mm I need to start typing)", "multi-line": !0, rows: 5, autosize: !0 },
                            model: {
                                value: t.text,
                                callback: function (e) {
                                    t.text = e
                                },
                                expression: "text",
                            },
                        }),
                        t._l(t.reocurringTasksToDisplay, function (e) {
                            return n("column", { key: e && Math.random(), staticClass: "card", attrs: { "align-h": "left", padding: "1.2rem", "margin-top": "1rem", width: "-webkit-fill-available" } }, [n("row", [n("b", [t._v(t._s(e.start))]), n("div", { staticStyle: { width: "0.8rem" } }), t._v(" " + t._s(e.description) + "\n        ")]), n("row", [n("b", [t._v("Days:")]), n("div", { staticStyle: { width: "0.8rem" } }), t._v(" " + t._s(e.days.join(", ")) + "\n        ")])], 1)
                        }),
                    ],
                    2
                )
            },
            m = [],
            f = n("75fc"),
            v = (n("55dd"), n("28a5"), n("6762"), n("2fdb"), n("4917"), n("aaa8")),
            p = n.n(v),
            g = function (t, e, n) {
                return "12" == t && (t = "00"), n.match(/[pP][mM]/) && (t = parseInt(t, 10) + 12), [t, e]
            },
            y = function (t) {
                var e = t.pattern,
                    n = t.from,
                    r = n.match(e)
                return r ? { remaining: n.slice(0, r.index) + n.slice(r.index + r[0].length, n.length), extraction: r[0] } : { remaining: n, extraction: null }
            },
            T = {
                data: function () {
                    return { text: "", tasks: [], reocurringTasks: [] }
                },
                methods: {
                    generateReocurringTasks: function () {
                        var t = new p.a(),
                            e = t.dayName,
                            n = t.add({ days: 1 }).dayName,
                            r = [],
                            i = !0,
                            a = !1,
                            o = void 0
                        try {
                            for (var s, l = this.reocurringTasks[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
                                var u = s.value
                                if (u.days.includes(e)) {
                                    var c = new p.a()
                                    try {
                                        c.time = u.start
                                    } catch (error) {
                                        console.warn(error)
                                    }
                                    r.push({ dateTime: c, date: c.date, hour: c.hour24, minute: c.minute, content: u.description })
                                }
                                if (u.days.includes(n)) {
                                    var d = new p.a().add({ days: 1 })
                                    try {
                                        d.time = u.start
                                    } catch (error) {
                                        console.warn(error)
                                    }
                                    r.push({ dateTime: d, date: d.date, hour: d.hour24, minute: d.minute, content: u.description })
                                }
                            }
                        } catch (h) {
                            ;(a = !0), (o = h)
                        } finally {
                            try {
                                i || null == l.return || l.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return r
                    },
                    parseUpcomingTodos: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Date(),
                            n = [],
                            r = []
                        if (t) {
                            var i = t.split(/\n(?=\S)/),
                                a = !0,
                                o = !1,
                                s = void 0
                            try {
                                for (var l, u = i[Symbol.iterator](); !(a = (l = u.next()).done); a = !0) {
                                    var c = l.value,
                                        d = c.match(/^(Sun|Mon|Tue|Wed|Thu|Fri|Sat)/i)
                                    if (d)
                                        try {
                                            var h = y({ pattern: /^(\w+( *, *)?)+/, from: c }),
                                                m = h.remaining,
                                                f = h.extraction
                                            ;(f = f.split(",").map(function (t) {
                                                return t.trim()
                                            })),
                                                (f = f.map(function (t) {
                                                    return t.match(/^Sun/i) ? "Sunday" : t.match(/^Mon/i) ? "Monday" : t.match(/^Tue/i) ? "Tuesday" : t.match(/^Wed/i) ? "Wednesday" : t.match(/^Thu/i) ? "Thursday" : t.match(/^Fri/i) ? "Friday" : t.match(/^Sat/i) ? "Saturday" : void 0
                                                }))
                                            var v = y({ pattern: /\s*[^\s]+/, from: m }),
                                                p = v.remaining,
                                                T = v.extraction
                                            ;(T = T.trim()), r.push({ description: p, start: T, days: f })
                                        } catch (S) {
                                            console.error("Error trying to parse weekly reocurring event"), console.debug("error is:", S)
                                        }
                                    else {
                                        var w = c.match(/^(?:(\d+\/\d+\/\d+) )?(\d{1,2}):(\d{1,2})([aA][mM]|[pP][mM]) ([\s\S]*)/)
                                        if (w) {
                                            var x = w[2] - 0,
                                                b = w[3] - 0,
                                                U = w[4],
                                                _ = g(x, b, U),
                                                k = new Date()
                                            if ((null != w[1] && (k = new Date(new Date(w[1]).getTime() + Math.abs(6e4 * e.getTimezoneOffset()))), k.setHours(_[0], _[1]), null == w[1] && k.getTime() <= new Date().getTime())) {
                                                var E = 864e5
                                                k = new Date(k.getTime() + E)
                                            }
                                            k.getTime() > new Date().getTime() && n.push({ dateTime: k, date: w[1], hour: x, minute: b, content: w[5] })
                                        }
                                    }
                                }
                            } catch (O) {
                                ;(o = !0), (s = O)
                            } finally {
                                try {
                                    a || null == u.return || u.return()
                                } finally {
                                    if (o) throw s
                                }
                            }
                        }
                        return (
                            (n = n.sort(function (t, e) {
                                return t.dateTime.getTime() - e.dateTime.getTime()
                            })),
                            (this.reocurringTasks = r),
                            n
                        )
                    },
                    generateOrderedTasks: function () {
                        var t = this.parseUpcomingTodos(this.text).concat(this.generateReocurringTasks()),
                            e = new Date().getTime(),
                            n = function (t, e) {
                                return t.dateTime.getTime() - e.dateTime.getTime()
                            },
                            r = function (t) {
                                return t.dateTime.getTime() - e > 0
                            },
                            i = Object(f["a"])(t).filter(r).sort(n)
                        return (this.tasks = i)
                    },
                },
                computed: {
                    reocurringTasksToDisplay: function () {
                        return this.reocurringTasks.filter(function (t) {
                            return !0 !== t.hide
                        })
                    },
                },
                watch: {
                    text: function () {
                        ;(window.tasks = this.generateOrderedTasks()), console.log("window.tasks is:", this.tasks), localStorage.setItem("todos", this.text)
                    },
                    tasks: function () {
                        this.$emit("taskChange", this.tasks)
                    },
                },
                mounted: function () {
                    var t = localStorage.getItem("todos")
                    "string" == typeof t && ((this.text = t), (this.tasks = this.generateOrderedTasks())), setTimeout(this.$refs.textbox.refreshSize, 0)
                },
            },
            w = T,
            x = (n("6299"), Object(l["a"])(w, h, m, !1, null, null, null)),
            b = x.exports,
            U = {
                findMissing: function (t) {
                    for (var e = [], n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i]
                    for (var a = 0, o = r; a < o.length; a++) {
                        var s = o[a]
                        ;(null == t[s] || ("string" == typeof t[s] && 0 == t[s].length)) && e.push(s)
                    }
                    return e
                },
                calcHandle: function (t, e) {
                    var n = []
                    for (var r in e) (null == t[r] || ("string" == typeof t[r] && 0 == t[r].length)) && n.push(r)
                    if (0 == n.length) return "no missing value to solve for"
                    if (n.length > 1) return "still missing: ".concat(n)
                    var i = n[0],
                        a = e[i]()
                    return "solved for ".concat(i, " ").concat(a)
                },
                volumeConvert: function (t) {
                    var e = t.match(/(.+?)\s*(tor|mmhg|p)/i)
                    e && (e[1] - 0, e[2])
                },
            }
        window.allUtils = U
        var _ = function () {
                return new Date().getTime() / 1e3
            },
            k = function (t) {
                return t < 10 ? "0".concat(t) : t
            },
            E = {
                name: "Main",
                components: { ToDo: b, Card: d },
                data: function () {
                    return { timeUntil: null, calendarEventName: null, nextCalendarEventTime: null, calendarEvent: { time: null, date: null, title: null }, randomDate: null, calendarEvents: [] }
                },
                computed: {
                    secondsUntil: function () {
                        return k(Math.floor(this.timeUntil % 60))
                    },
                    minutesUntil: function () {
                        return k(Math.floor((this.timeUntil / 60) % 60))
                    },
                    hoursUntil: function () {
                        return Math.floor((this.timeUntil / 3600) % 24)
                    },
                    daysUntil: function () {
                        return Math.floor(this.timeUntil / 86400)
                    },
                    countdown: function () {
                        var t = this.secondsUntil
                        return this.minutesUntil && (t = "".concat(this.minutesUntil, ":").concat(t)), this.hoursUntil && (t = "".concat(this.hoursUntil, ":").concat(t)), this.daysUntil && (t = "".concat(this.daysUntil, ":").concat(t)), t
                    },
                },
                watch: {
                    timeUntil: function () {
                        document.title = this.countdown
                    },
                },
                methods: {
                    timeUntilNextCaledarEvent: function () {
                        return this.nextCalendarEventTime ? this.nextCalendarEventTime - _() : -1 / 0
                    },
                    updateCalendarEvents: function (t) {
                        this.calendarEvents = []
                        var e = !0,
                            n = !1,
                            r = void 0
                        try {
                            for (var i, a = t[Symbol.iterator](); !(e = (i = a.next()).done); e = !0) {
                                var o = i.value
                                this.calendarEvents.push({ unixTime: o.dateTime.getTime() / 1e3, title: o.content })
                            }
                        } catch (s) {
                            ;(n = !0), (r = s)
                        } finally {
                            try {
                                e || null == a.return || a.return()
                            } finally {
                                if (n) throw r
                            }
                        }
                        ;(this.nextCalendarEventTime = null), (this.timeUntil = null), this.updateTime()
                    },
                    updateTime: function () {
                        var t = this.timeUntilNextCaledarEvent()
                        t > 0 ? (this.timeUntil = t) : this.calendarEvents.length ? this.calendarEvents.length && (null != this.timeUntil && this.calendarEvents.shift(), this.calendarEvents[0] ? ((this.nextCalendarEventTime = this.calendarEvents[0].unixTime), (this.calendarEventName = this.calendarEvents[0].title), this.updateTime()) : (this.timeUntil = 0)) : (this.timeUntil = 0)
                    },
                },
                mounted: function () {
                    setInterval(this.updateTime, 1e3)
                },
            },
            S = E,
            O = (n("034f"), Object(l["a"])(S, i, a, !1, null, null, null)),
            C = O.exports,
            M = n("287d"),
            D = n.n(M),
            j = (n("1fff"), n("6600"), n("c760")),
            P = n.n(j)
        r["a"].use(D.a),
            r["a"].use(P.a),
            (r["a"].config.productionTip = !1),
            new r["a"]({
                render: function (t) {
                    return t(C)
                },
            }).$mount("#app")
    },
    6299: function (t, e, n) {
        "use strict"
        var r = n("41e5"),
            i = n.n(r)
        i.a
    },
    "64a9": function (t, e, n) {},
    a51a: function (t, e, n) {
        "use strict"
        var r = n("12da"),
            i = n.n(r)
        i.a
    },
})
//# sourceMappingURL=app.c69b33ed.js.map
