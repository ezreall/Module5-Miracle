(window.webpackJsonp = window.webpackJsonp || []).push([
    [15], {
        1058: function(e, t) {},
        1059: function(e, t) {},
        1064: function(e, t, a) {},
        1290: function(e, t, a) {},
        1291: function(e, t, a) {},
        1481: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                c = a(40),
                l = a(55),
                o = a(12),
                i = a.n(o),
                s = a(283),
                u = a.n(s),
                m = a(988),
                d = a(966),
                f = (a(967), null),
                h = function(e) {
                    var t = e.data,
                        a = e.fetchGlobalMessage,
                        c = e.requestGlobalMessage,
                        o = e.messageFetched,
                        s = e.setMessageLoading,
                        h = e.blockUserRequest,
                        g = Object(n.useState)(1),
                        p = Object(l.a)(g, 2),
                        y = p[0],
                        v = p[1],
                        b = Object(n.useState)(!1),
                        E = Object(l.a)(b, 2),
                        C = E[0],
                        S = E[1];
                    Object(n.useEffect)(function() {
                        return k(),
                            function() {
                                f.disconnect(!0), s({
                                    message: !1
                                }, !0)
                            }
                    }, []);
                    var k = function() {
                        var e = u()("".concat(i.a.socketUrl, "/outside?deviceType=browser"), {
                            path: "/socket",
                            transports: ["websocket", "polling"]
                        });
                        e.on("error", function(e) {}), e.on("global-chat", function(e) {
                            "new-global-message" === e.action && (s({
                                newMessage: !0
                            }), o([], 0, e.data || {}), s({
                                newMessage: !1
                            }))
                        }), f = e
                    };
                    return t.isLoading ? r.a.createElement(d.a, null) : r.a.createElement("div", {
                        className: "slide ".concat(C && "extend-box")
                    }, r.a.createElement(m.a, {
                        data: t,
                        fetchGlobalMessage: a,
                        requestGlobalMessage: c,
                        blockUserRequest: h,
                        page: y,
                        setPage: v,
                        extend: C,
                        setExtend: S
                    }))
                },
                g = a(118),
                p = a(4),
                y = a(14),
                v = a(15),
                b = a(26),
                E = a(27),
                C = a(19),
                S = a(275),
                k = a.n(S),
                O = a(6),
                N = a(366),
                j = a(30),
                w = {
                    "Li\xean Minh Huy\u1ec1n Tho\u1ea1i": "".concat(o.staticImageUrl, "/game-category/lienminh.png"),
                    "Li\xean Qu\xe2n Mobile": "".concat(o.staticImageUrl, "/game-category/lqmobile.png"),
                    "Fortnite Battle Royale": "".concat(o.staticImageUrl, "/game-category/fornitebattleroyale.png"),
                    "\u0110\u1ed9t K\xedch": "".concat(o.staticImageUrl, "/game-category/other.png"),
                    "Dota 2": "".concat(o.staticImageUrl, "/game-category/dota2.png"),
                    "Playerunknown's Battlegrounds": "".concat(o.staticImageUrl, "/game-category/pubg.png"),
                    "Blade and Soul": "".concat(o.staticImageUrl, "/game-category/other.png"),
                    Other: "".concat(o.staticImageUrl, "/game-category/other.png")
                },
                x = a(3),
                R = a(861),
                P = a.n(R),
                M = a(21),
                G = a(46),
                D = a(41);
            a(1290);

            function I(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = Object(C.a)(e);
                    if (t) {
                        var r = Object(C.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(E.a)(this, a)
                }
            }
            var A = function(e) {
                    Object(b.a)(a, e);
                    var t = I(a);

                    function a() {
                        return Object(y.a)(this, a), t.apply(this, arguments)
                    }
                    return Object(v.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props.data,
                                t = e.playerSetting,
                                a = e.trustTypes,
                                n = t.status,
                                c = t.localesPlayer,
                                l = null;
                            l = "ready" === n ? "ready" : "busy" === n ? "busy" : "stop";
                            var i = M.c.DEFAULT_AVATAR_LARGE_URL;
                            t.avatar && (i = x.d.getLinkImage(t.avatar));
                            var s = 0,
                                u = null,
                                m = null,
                                d = null,
                                f = "";
                            localStorage.idEduCategory && (f = x.d.checkFields(localStorage.idEduCategory));
                            var h = "".concat(o.staticImageUrl, "edu" === f ? "/game-category/book.png" : "life" === f ? "/game-category/life.png" : "/game-category/other.png");
                            return c && c[0] && (c[0].price && (s = c[0].price.toLocaleString()), c[0].title && (u = c[0].title), c[0].description && c[0].description.length > 0 && (m = c[0].description.split("<br />").map(function(e) {
                                return 1 === e.indexOf("\n") ? r.a.createElement("span", {
                                    key: P.a.generate()
                                }, " ", e.slice(e.indexOf("\n")), " ", r.a.createElement("br", null), " ") : r.a.createElement("span", {
                                    key: P.a.generate()
                                }, e, r.a.createElement("br", null))
                            })), d = c[0].gameCategory && void 0 !== w[c[0].gameCategory] ? r.a.createElement("div", {
                                className: "div--flex"
                            }, r.a.createElement(D.a, {
                                src: "edu" === f ? h : "".concat(w[c[0].gameCategory]),
                                alt: "category logo"
                            }), r.a.createElement("span", null, c[0].gameCategory)) : r.a.createElement("div", {
                                className: "div--flex"
                            }, r.a.createElement(D.a, {
                                src: h,
                                alt: "category logo"
                            }), r.a.createElement("span", null, t && c && Array.isArray(c) && c.length > 0 && c[0] && c[0].gameCategory ? c[0].gameCategory : ""))), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                                className: "player-information-card-wrap"
                            }, r.a.createElement("div", {
                                className: "player-avatar"
                            }, r.a.createElement(D.a, {
                                src: i,
                                alt: "",
                                responsive: !0,
                                id: "avt-img-reponsiver"
                            }), r.a.createElement("div", {
                                className: "player-price"
                            }, s ? r.a.createElement(G.a, {
                                money: s.replace(/[\,\.]/gi, "")
                            }) : 0, "/h"), r.a.createElement("div", {
                                className: "hidden-information"
                            }, r.a.createElement("p", null, m), r.a.createElement("div", {
                                className: "rent"
                            }, r.a.createElement("a", {
                                href: "".concat(window.location.origin, "/").concat(t.url),
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, " ", r.a.createElement(O.b, {
                                id: "cardItem.thuengay"
                            }))))), r.a.createElement("div", {
                                className: "player-information"
                            }, r.a.createElement("h3", {
                                className: "player-name"
                            }, r.a.createElement(j.b, {
                                to: "/".concat(t.url)
                            }, t.nickName), Array.isArray(a) && a.includes("player") && r.a.createElement("i", {
                                className: "fas fa-check-circle",
                                "aria-hidden": "true"
                            }), r.a.createElement("div", {
                                className: "player-status ".concat(l)
                            }, " ")), r.a.createElement("p", {
                                className: "player-title"
                            }, u), r.a.createElement("div", {
                                className: "category"
                            }, d))))
                        }
                    }]), a
                }(n.PureComponent),
                T = a(33),
                F = a.n(T);

            function H(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = Object(C.a)(e);
                    if (t) {
                        var r = Object(C.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(E.a)(this, a)
                }
            }
            var L = function(e) {
                Object(b.a)(a, e);
                var t = H(a);

                function a() {
                    return Object(y.a)(this, a), t.apply(this, arguments)
                }
                return Object(v.a)(a, [{
                    key: "render",
                    value: function() {
                        return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                            className: "player-information-card-wrap"
                        }, r.a.createElement("p", null, r.a.createElement(F.a, {
                            height: "360px",
                            width: "270px",
                            widthRandomness: 0,
                            borderRadius: "4px"
                        }))), r.a.createElement("div", {
                            className: "player-information-card-wrap"
                        }, r.a.createElement("p", null, r.a.createElement(F.a, {
                            height: "360px",
                            width: "270px",
                            widthRandomness: 0,
                            borderRadius: "4px"
                        }))), r.a.createElement("div", {
                            className: "player-information-card-wrap"
                        }, r.a.createElement("p", null, r.a.createElement(F.a, {
                            height: "360px",
                            width: "270px",
                            widthRandomness: 0,
                            borderRadius: "4px"
                        }))), r.a.createElement("div", {
                            className: "player-information-card-wrap"
                        }, r.a.createElement("p", null, r.a.createElement(F.a, {
                            height: "360px",
                            width: "270px",
                            widthRandomness: 0,
                            borderRadius: "4px"
                        }))), r.a.createElement("div", {
                            className: "player-information-card-wrap"
                        }, r.a.createElement("p", null, r.a.createElement(F.a, {
                            height: "360px",
                            width: "270px",
                            widthRandomness: 0,
                            borderRadius: "4px"
                        }))), r.a.createElement("div", {
                            className: "player-information-card-wrap"
                        }, r.a.createElement("p", null, r.a.createElement(F.a, {
                            height: "360px",
                            width: "270px",
                            widthRandomness: 0,
                            borderRadius: "4px"
                        }))), r.a.createElement("div", {
                            className: "player-information-card-wrap"
                        }, r.a.createElement("p", null, r.a.createElement(F.a, {
                            height: "360px",
                            width: "270px",
                            widthRandomness: 0,
                            borderRadius: "4px"
                        }))), r.a.createElement("div", {
                            className: "player-information-card-wrap"
                        }, r.a.createElement("p", null, r.a.createElement(F.a, {
                            height: "360px",
                            width: "270px",
                            widthRandomness: 0,
                            borderRadius: "4px"
                        }))))
                    }
                }]), a
            }(n.PureComponent);

            function _(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = Object(C.a)(e);
                    if (t) {
                        var r = Object(C.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(E.a)(this, a)
                }
            }
            var U = function(e) {
                    Object(b.a)(a, e);
                    var t = _(a);

                    function a() {
                        var e;
                        Object(y.a)(this, a);
                        for (var n = arguments.length, c = new Array(n), l = 0; l < n; l++) c[l] = arguments[l];
                        return (e = t.call.apply(t, [this].concat(c))).showCardItem = function(t) {
                            var a = !1,
                                n = e.props.locale;
                            return Array.isArray(t) && t.length > 0 && (a = k()(t, function(e) {
                                return r.a.createElement(A, {
                                    key: e._id,
                                    data: e,
                                    locale: n
                                })
                            })), a
                        }, e.refresh = function() {
                            e.props.fetchVipPlayerRequest()
                        }, e
                    }
                    return Object(v.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.isFetchedVipPlayer || this.props.fetchVipPlayerRequest()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.vipPlayers,
                                t = e.vip,
                                a = e.isLoading;
                            return r.a.createElement("div", null, r.a.createElement("section", {
                                className: "box vip-player"
                            }, r.a.createElement("h4", {
                                className: "section-title"
                            }, "VIP PLAYER"), r.a.createElement("button", {
                                onClick: this.refresh,
                                className: "refresh-btn"
                            }, r.a.createElement("i", {
                                style: {
                                    marginRight: "5px"
                                },
                                className: a ? "fas fa-sync fa-spin" : "fas fa-sync",
                                "aria-hidden": "true"
                            }), r.a.createElement(O.b, {
                                id: "lammoi"
                            }))), r.a.createElement("div", {
                                className: "row flex-card"
                            }, a ? r.a.createElement(L, null) : this.showCardItem(t)))
                        }
                    }]), a
                }(n.PureComponent),
                q = Object(c.b)(function(e) {
                    return {
                        vipPlayers: e.vipPlayers,
                        locale: e.locale,
                        isFetchedVipPlayer: e.fetchedApi.isFetchedVipPlayer
                    }
                }, {
                    fetchVipPlayerRequest: N.b
                })(U),
                B = a(367);

            function V(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = Object(C.a)(e);
                    if (t) {
                        var r = Object(C.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(E.a)(this, a)
                }
            }
            var W = function(e) {
                    Object(b.a)(a, e);
                    var t = V(a);

                    function a(e) {
                        var n;
                        return Object(y.a)(this, a), (n = t.call(this, e)).showCardItem = function(e) {
                            var t = null,
                                a = n.props.locale;
                            return Array.isArray(e.hotPlayers) && e.hotPlayers.length > 0 && (t = k()(e.hotPlayers, function(e) {
                                return r.a.createElement(A, {
                                    key: e._id,
                                    data: e,
                                    locale: a
                                })
                            })), t
                        }, n.refresh = function() {
                            var e = n.state.page,
                                t = (n.props.hotPlayers.data || {}).total,
                                a = void 0 === t ? 0 : t;
                            e + 1 <= Math.ceil(a / 20) ? (n.props.fetchHotPlayerRequest(e + 1), ++e) : (n.props.fetchHotPlayerRequest(1), e = 1), n.setState({
                                page: e
                            })
                        }, n.state = {
                            page: 1
                        }, n
                    }
                    return Object(v.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.isFetchedHotPlayer || this.props.fetchHotPlayerRequest()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.hotPlayers,
                                t = e.data,
                                a = e.isLoading;
                            return r.a.createElement("div", null, r.a.createElement("section", {
                                className: "hot-player"
                            }, r.a.createElement("h4", {
                                className: "section-title"
                            }, "HOT PLAYER"), r.a.createElement("button", {
                                onClick: this.refresh,
                                className: "refresh-btn"
                            }, r.a.createElement("i", {
                                style: {
                                    marginRight: "5px"
                                },
                                className: a ? "fas fa-sync fa-spin" : "fas fa-sync",
                                "aria-hidden": "true"
                            }), r.a.createElement(O.b, {
                                id: "lammoi"
                            }))), r.a.createElement("div", {
                                className: "row flex-card"
                            }, a ? r.a.createElement(L, null) : this.showCardItem(t)))
                        }
                    }]), a
                }(n.PureComponent),
                K = Object(c.b)(function(e) {
                    return {
                        hotPlayers: e.hotPlayers,
                        locale: e.locale,
                        fetchedApi: e.fetchedApi.isFetchedHotPlayer
                    }
                }, {
                    fetchHotPlayerRequest: B.b
                })(W),
                z = a(368);
            a(1064);

            function Q(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = Object(C.a)(e);
                    if (t) {
                        var r = Object(C.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(E.a)(this, a)
                }
            }
            var J = function(e) {
                    Object(b.a)(a, e);
                    var t = Q(a);

                    function a() {
                        var e;
                        Object(y.a)(this, a);
                        for (var n = arguments.length, c = new Array(n), l = 0; l < n; l++) c[l] = arguments[l];
                        return (e = t.call.apply(t, [this].concat(c))).showCardItem = function(t) {
                            var a = !1,
                                n = e.props.locale;
                            return Array.isArray(t) && t.length > 0 && (a = k()(t, function(e) {
                                return r.a.createElement(A, {
                                    key: e._id,
                                    data: e,
                                    locale: n
                                })
                            })), a
                        }, e
                    }
                    return Object(v.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.isFetchedHiringPlayer || this.props.fetchHiringPlayerRequest()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.hiringPlayers,
                                t = e.hiring,
                                a = e.total,
                                n = e.isLoading;
                            return r.a.createElement("div", null, r.a.createElement("section", {
                                className: "rent-player"
                            }, r.a.createElement("h4", {
                                className: "section-title"
                            }, r.a.createElement(O.b, {
                                id: "dangduocthue"
                            }), " (", a || 0, ")"), r.a.createElement("button", {
                                onClick: this.refresh,
                                className: "refresh-btn"
                            }, r.a.createElement("i", {
                                style: {
                                    marginRight: "5px"
                                },
                                className: "fas fa-sync fa-spin",
                                "aria-hidden": "true"
                            }), r.a.createElement(O.b, {
                                id: "lammoi"
                            }))), r.a.createElement("div", {
                                className: "row flex-card"
                            }, n ? r.a.createElement(L, null) : this.showCardItem(t)))
                        }
                    }]), a
                }(n.PureComponent),
                Y = Object(c.b)(function(e) {
                    return {
                        hiringPlayers: e.hiringPlayers,
                        locale: e.locale,
                        isFetchedHiringPlayer: e.fetchedApi.isFetchedHiringPlayer
                    }
                }, {
                    fetchHiringPlayerRequest: z.b
                })(J),
                $ = a(299);

            function Z(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = Object(C.a)(e);
                    if (t) {
                        var r = Object(C.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(E.a)(this, a)
                }
            }
            var X = function(e) {
                    Object(b.a)(a, e);
                    var t = Z(a);

                    function a(e) {
                        var n;
                        return Object(y.a)(this, a), (n = t.call(this, e)).showCardItem = function(e) {
                            return Array.isArray(e) && e.length > 0 ? k()(e, function(e) {
                                return r.a.createElement(A, {
                                    key: e._id,
                                    data: e,
                                    locale: n.props.locale
                                })
                            }) : r.a.createElement("h5", {
                                style: {
                                    marginBottom: "20px"
                                }
                            }, r.a.createElement(O.b, {
                                id: "search.khongcoketqua"
                            }))
                        }, n.refresh = function() {
                            var e = n.props.searchPlayers;
                            e && null !== e.dataSearch && n.props.fetchSearchPlayerRequest(e.dataSearch, e.pageSearch)
                        }, n.state = {
                            page: 1
                        }, n
                    }
                    return Object(v.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props.searchPlayers,
                                t = e.players,
                                a = e.isLoading,
                                n = e.gameCategory,
                                c = this.showCardItem(t);
                            return r.a.createElement("div", null, r.a.createElement("section", {
                                className: "search-player search-section-new"
                            }, r.a.createElement("h4", {
                                className: "section-title"
                            }, r.a.createElement(O.b, {
                                id: "search.ketquatimkiem"
                            }), n.length > 0 ? r.a.createElement("span", null, "\xa0'", n, "'") : null, " ", r.a.createElement(O.b, {
                                id: "follow"
                            }), r.a.createElement("strong", null, r.a.createElement(O.b, {
                                id: "filter"
                            }))), r.a.createElement("button", {
                                onClick: this.refresh,
                                className: "refresh-btn"
                            }, r.a.createElement("i", {
                                style: {
                                    marginRight: "5px"
                                },
                                className: a ? "fas fa-sync fa-spin" : "fas fa-sync",
                                "aria-hidden": "true"
                            }), r.a.createElement(O.b, {
                                id: "lammoi"
                            }))), r.a.createElement("div", {
                                className: "row flex-card"
                            }, a ? r.a.createElement(L, null) : c))
                        }
                    }]), a
                }(n.Component),
                ee = Object(c.b)(function(e) {
                    return {
                        searchPlayers: e.searchPlayers,
                        locale: e.locale
                    }
                }, {
                    fetchSearchPlayerRequest: $.b
                })(X),
                te = a(2),
                ae = a(54),
                ne = a(39),
                re = a(97),
                ce = a(79),
                le = (a(1291), a(23)),
                oe = a.n(le),
                ie = a(270),
                se = a(159),
                ue = a(932),
                me = a(365),
                de = a(288),
                fe = a(914),
                he = a.n(fe);

            function ge(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = Object(C.a)(e);
                    if (t) {
                        var r = Object(C.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(E.a)(this, a)
                }
            }
            var pe = function(e) {
                Object(b.a)(a, e);
                var t = ge(a);

                function a(e) {
                    var n;
                    return Object(y.a)(this, a), (n = t.call(this, e)).ratioPerVnd = function(e) {
                        return Math.round(e).toLocaleString("en-EG")
                    }, n.state = {
                        citySelect: "",
                        listCitySelect: [],
                        listAutocompleteCity: [],
                        keyHoverCityCity: -1,
                        gender: "",
                        status: "",
                        playerType: "",
                        nickName: "",
                        gameCategory: "",
                        toggleCity: !0
                    }, n
                }
                return Object(v.a)(a, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this,
                            t = document.getElementById("skipstep");
                        he.a.create(t, {
                            range: {
                                min: 5e3,
                                "5%": 1e4,
                                "10%": 2e4,
                                "15%": 3e4,
                                "20%": 4e4,
                                "25%": 5e4,
                                "30%": 6e4,
                                "35%": 7e4,
                                "40%": 8e4,
                                "45%": 9e4,
                                "50%": 1e5,
                                "60%": 2e5,
                                "70%": 5e5,
                                "80%": 1e6,
                                "90%": 2e6,
                                max: 5e6
                            },
                            snap: !0,
                            connect: !0,
                            start: [this.props.minPrice, this.props.maxPrice]
                        });
                        var a = [document.getElementById("skip-value-lower"), document.getElementById("skip-value-upper")];
                        t.noUiSlider.on("update", function(t, n) {
                            a[n].innerHTML = e.ratioPerVnd(t[n]), e.props.onChangePrice(Math.round(t[0]), Math.round(t[1]))
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                            id: "skipstep"
                        }), r.a.createElement(re.a, {
                            className: "mt-10"
                        }, r.a.createElement(ce.a, {
                            xs: 4,
                            className: "text-left"
                        }, r.a.createElement("span", {
                            className: "example-val",
                            id: "skip-value-lower"
                        })), r.a.createElement(ce.a, {
                            xs: 4,
                            className: "text-center"
                        }, r.a.createElement("span", {
                            className: "example-val",
                            id: "skip-value-lower"
                        }, r.a.createElement(O.b, {
                            id: "modalFilter.to"
                        }))), r.a.createElement(ce.a, {
                            xs: 4
                        }, r.a.createElement("span", {
                            className: "example-val",
                            id: "skip-value-upper"
                        }))))
                    }
                }]), a
            }(n.Component);

            function ye(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = Object(C.a)(e);
                    if (t) {
                        var r = Object(C.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(E.a)(this, a)
                }
            }
            var ve = function(e) {
                    Object(b.a)(a, e);
                    var t = ye(a);

                    function a(e) {
                        var n;
                        return Object(y.a)(this, a), (n = t.call(this, e)).closeModal = function() {
                            n.props.onChangeQuery(n.state), n.props.closeModal()
                        }, n.filterData = function(e, t) {
                            var a = "",
                                n = "",
                                r = "",
                                c = oe.a.filter(e, function(e) {
                                    return a = e.name.replace("\u0110", "d").replace("\u0111", "d").normalize("NFD").replace(/[\u0300-\u036f]/g, ""), n = a.toLowerCase(), r = e.name.toLowerCase(), e.name.trim().startsWith(t.trim()) || n.trim().startsWith(t.trim()) || r.trim().startsWith(t.trim()) || a.trim().startsWith(t.trim())
                                }),
                                l = oe.a.filter(e, function(e) {
                                    return a = e.name.replace("\u0110", "d").replace("\u0111", "d").normalize("NFD").replace(/[\u0300-\u036f]/g, ""), n = a.toLowerCase(), r = e.name.toLowerCase(), !e.name.trim().startsWith(t.trim()) && !n.trim().startsWith(t.trim()) && !r.trim().startsWith(t.trim()) && !a.trim().startsWith(t.trim()) && (-1 !== a.trim().indexOf(t.trim()) || -1 !== n.trim().indexOf(t.trim()))
                                });
                            return c.concat(l)
                        }, n.onChange = function(e) {
                            e.preventDefault();
                            var t = e.target,
                                a = t.name,
                                r = "checkbox" === t.type ? t.checked : t.value;
                            if ("citySelect" === a && r.length > 0) {
                                var c = Object(te.a)({}, n.props.listCitySearch),
                                    l = n.filterData(c, r);
                                n.setState({
                                    listAutoCompleteCity: l,
                                    isShowDiv: !0,
                                    keyHoverCity: -1
                                })
                            } else if ("citySelect" === a && 0 === r.length) n.setState({
                                isShowDiv: !1,
                                keyHoverCity: -1
                            });
                            else if ("tagsString" === a) {
                                var o = r.split(","),
                                    i = x.h.checkFormatTags(o);
                                n.setState({
                                    tags: i.toString()
                                })
                            }
                            n.setState(Object(ae.a)({}, a, r))
                        }, n.onFocusCity = function() {
                            var e = n.state.citySelect,
                                t = n.props.listCitySearch;
                            if (e.length > 0) {
                                var a = n.filterData(t, e);
                                n.setState({
                                    listAutoCompleteCity: a,
                                    isShowDiv: !0,
                                    keyHoverCity: -1
                                })
                            } else 0 === e.length && n.setState({
                                listAutoCompleteCity: [].concat(t),
                                isShowDiv: !0,
                                keyHoverCity: -1
                            })
                        }, n.onKeyUp = function(e) {
                            e.preventDefault();
                            var t = n.state,
                                a = t.keyHoverCity,
                                r = t.listAutoCompleteCity;
                            if (13 === e.keyCode && a >= 0 && a < r.length && r.length > 0) {
                                n.setState({
                                    listAutoCompleteGameCategory: []
                                });
                                var c = n.checkCity(),
                                    l = n.state.listCitySelect;
                                c ? (l.unshift(r[a]), n.setState({
                                    citySelect: "",
                                    listCitySelect: l,
                                    isShowDiv: !1
                                })) : n.setState({
                                    citySelect: "",
                                    isShowDiv: !1
                                }), l.length > 0 && n.setState({
                                    toggleCity: "-1"
                                })
                            }
                            40 === e.keyCode && a < r.length - 1 && n.setState({
                                keyHoverCity: a + 1
                            }), 38 === e.keyCode && a > 0 && n.setState({
                                keyHoverCity: a - 1
                            })
                        }, n.checkCity = function() {
                            for (var e = n.state, t = e.keyHoverCity, a = e.listCitySelect, r = e.listAutoCompleteCity, c = 0, l = a.length, o = !0; c < l; c += 1) a[c]._id === r[t]._id && (o = !1);
                            return o
                        }, n.checkGame = function() {
                            for (var e = n.state, t = e.keyHoverGame, a = e.listGameCategorySelect, r = e.listAutoCompleteGameCategory, c = 0, l = a.length, o = !0; c < l; c += 1) a[c]._id === r[t]._id && (o = !1);
                            return o
                        }, n.onMouseOver = function(e) {
                            var t = n.state,
                                a = t.listAutoCompleteGameCategory,
                                r = t.listAutoCompleteCity;
                            a.length > 0 && n.setState({
                                keyHoverGame: e
                            }), r.length > 0 && n.setState({
                                keyHoverCity: e
                            })
                        }, n.onMouseOut = function() {
                            var e = n.state,
                                t = e.listAutoCompleteGameCategory,
                                a = e.listAutoCompleteCity;
                            t.length > 0 && n.setState({
                                keyHoverGame: -1
                            }), a.length > 0 && n.setState({
                                keyHoverCity: -1
                            })
                        }, n.onMouseDown = function(e) {
                            e.city = e._id;
                            var t = n.state,
                                a = t.listAutoCompleteGameCategory,
                                r = t.listAutoCompleteCity;
                            if (a.length > 0)
                                if (n.setState({
                                    listAutoCompleteCity: []
                                }), n.checkGame()) {
                                    var c = n.state.listGameCategorySelect;
                                    c.unshift(e), n.setState({
                                        toggleGameCategory: "-1",
                                        gameCategory: "",
                                        listGameCategorySelect: c,
                                        isShowDivGame: !1
                                    })
                                } else n.setState({
                                    toggleGameCategory: "-1",
                                    gameCategory: "",
                                    isShowDivGame: !1
                                });
                            if (r.length > 0)
                                if (n.setState({
                                    listAutoCompleteGameCategory: []
                                }), n.checkCity()) {
                                    var l = n.state.listCitySelect;
                                    l.unshift(e), n.setState({
                                        toggleCity: "-1",
                                        gameSelect: "",
                                        listCitySelect: l,
                                        isShowDiv: !1
                                    })
                                } else n.setState({
                                    toggleCity: "-1",
                                    gameSelect: "",
                                    isShowDiv: !1
                                })
                        }, n.onBlur = function() {
                            n.setState({
                                isShowDiv: !1,
                                isShowDivGame: !1,
                                listAutoCompleteGameCategory: [],
                                listAutoCompleteCity: []
                            })
                        }, n.deleteCity = function(e) {
                            var t = n.state.listCitySelect;
                            t.splice(e, 1), n.setState({
                                listCitySelect: t,
                                isShowDiv: !1
                            }), 0 === t.length && n.setState({
                                toggleCity: ""
                            })
                        }, n.showAutoComplete = function() {
                            return n.state.isShowDiv && n.state.listAutoCompleteCity.length > 0 ? "suggestion-game" : "suggestion-game-hide"
                        }, n.activeGender = function(e) {
                            return n.state.gender === e ? "btn btn-default active" : "btn btn-default"
                        }, n.changeGender = function(e) {
                            n.setState({
                                gender: e
                            })
                        }, n.activePlayerType = function(e) {
                            return n.state.playerType === e ? "btn btn-default active" : "btn btn-default"
                        }, n.changePlayerType = function(e) {
                            n.setState({
                                playerType: e
                            })
                        }, n.activeStatus = function(e) {
                            return n.state.status === e ? "btn btn-default active" : "btn btn-default"
                        }, n.changeStatus = function(e) {
                            n.setState({
                                status: e
                            })
                        }, n.activeCity = function(e) {
                            return n.state.toggleCity === e ? "btn btn-default active" : "btn btn-default"
                        }, n.changeCity = function(e) {
                            n.setState({
                                citySelect: "",
                                listCitySelect: [],
                                toggleCity: e
                            })
                        }, n.activeNickName = function(e) {
                            return n.state.nickName === e ? "btn btn-default active" : "btn btn-default"
                        }, n.changeNickName = function(e) {
                            n.setState({
                                nickName: e
                            })
                        }, n.activeOnline = function(e) {
                            return n.state.isOnline === e ? "btn btn-default active" : "btn btn-default"
                        }, n.changeIsOnline = function(e) {
                            n.setState({
                                isOnline: e
                            })
                        }, n.activeTagsString = function(e) {
                            return n.state.tagsString === e ? "btn btn-default active" : "btn btn-default"
                        }, n.changeTagsString = function(e) {
                            n.setState({
                                tagsString: e
                            })
                        }, n.onChangePrice = function(e, t) {
                            n.setState({
                                minPrice: e,
                                maxPrice: t,
                                togglePrice: "-1"
                            })
                        }, n.classDivGame = function() {
                            return n.state.isShowDiv ? "player-select div-autoComplete-search fixed-div" : "player-select div-autoComplete-search"
                        }, n.onFilter = function() {
                            n.props.closeModal(), n.props.onFilter(n.state)
                        }, n.state = {
                            keyHoverCity: -1,
                            toggleCity: "",
                            citySelect: "",
                            listCitySelect: [],
                            listAutoCompleteCity: [],
                            keyHoverCityCity: -1,
                            gender: "",
                            status: "",
                            playerType: "",
                            nickName: "",
                            gameCategory: "",
                            tags: [],
                            tagsString: "",
                            isOnline: !1,
                            toggleGameCategory: "",
                            listGameCategory: [],
                            listGameCategorySelect: [],
                            listAutoCompleteGameCategory: [],
                            minPrice: 5e3,
                            maxPrice: 5e6,
                            togglePrice: "",
                            isShowDivGame: !0,
                            keyHoverGame: -1
                        }, n
                    }
                    return Object(v.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.fetchedListCityRequest()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = t.citySelect,
                                n = t.listAutoCompleteCity,
                                c = t.keyHoverCity,
                                l = t.listCitySelect,
                                o = t.nickName,
                                i = 0,
                                s = this.props,
                                u = s.isShow,
                                m = s.languageLocale,
                                d = null;
                            n.length > 10 && n.splice(10, n.length - 10), Array.isArray(n) && n.length > 0 && (d = n.map(function(t, a) {
                                i = 0;
                                for (var n = !1, o = l.length; i < o; i += 1)
                                    if (l[i]._id === t._id) {
                                        n = !0;
                                        break
                                    } return r.a.createElement("p", {
                                    key: t._id,
                                    className: c === a ? "suggestion-game-hover" : "",
                                    onMouseOver: function() {
                                        return e.onMouseOver(a, "city")
                                    },
                                    onMouseOut: function() {
                                        return e.onMouseOut(a, "city")
                                    },
                                    onMouseDown: function() {
                                        return e.onMouseDown(t, "city")
                                    }
                                }, t.name, n ? r.a.createElement("i", {
                                    className: "fa fa-check",
                                    "aria-hidden": "true"
                                }) : null)
                            }));
                            var f = null;
                            return l && l.length > 0 && (f = l.map(function(t, a) {
                                return r.a.createElement("span", {
                                    key: t._id,
                                    className: "Rectangle-9"
                                }, t.name, r.a.createElement("i", {
                                    className: "fa fa-times-circle delete-city-search",
                                    "aria-hidden": "true",
                                    onClick: function() {
                                        return e.deleteCity(a)
                                    }
                                }))
                            })), r.a.createElement(se.a, {
                                show: u,
                                onHide: this.closeModal,
                                className: "search-index-modal"
                            }, r.a.createElement(se.a.Header, {
                                closeButton: !0
                            }, r.a.createElement(se.a.Title, null, r.a.createElement(O.b, {
                                id: "modalFilter.title"
                            }))), r.a.createElement(se.a.Body, {
                                className: "content"
                            }, r.a.createElement(ue.a, null, r.a.createElement("tbody", null, r.a.createElement("tr", null, r.a.createElement("td", {
                                className: "text-left"
                            }, r.a.createElement(O.b, {
                                id: "modalFilter.sex"
                            })), r.a.createElement("td", {
                                className: "text-right"
                            }, r.a.createElement("div", {
                                "data-toggle": "buttons",
                                className: "btn-group"
                            }, r.a.createElement("label", {
                                type: "button",
                                className: this.activeGender("male"),
                                onClick: function() {
                                    return e.changeGender("male")
                                }
                            }, r.a.createElement("span", null, r.a.createElement("i", {
                                className: "fa fa-mars",
                                "aria-hidden": "true"
                            }), "\xa0", r.a.createElement(O.b, {
                                id: "filter.nam"
                            }))), r.a.createElement("label", {
                                type: "button",
                                className: this.activeGender("female"),
                                onClick: function() {
                                    return e.changeGender("female")
                                }
                            }, r.a.createElement("span", null, r.a.createElement("i", {
                                className: "fa fa-user-secret",
                                "aria-hidden": "true"
                            }), "\xa0", r.a.createElement(O.b, {
                                id: "filter.nu"
                            }))))), r.a.createElement("td", null, r.a.createElement("div", {
                                "data-toggle": "buttons",
                                className: "btn-group"
                            }, r.a.createElement("label", {
                                type: "button",
                                className: this.activeGender(""),
                                onClick: function() {
                                    return e.changeGender("")
                                }
                            }, r.a.createElement("span", null, r.a.createElement("i", {
                                className: "fa fa-times",
                                "aria-hidden": "true"
                            })))))), r.a.createElement("tr", null, r.a.createElement("td", {
                                className: "text-left"
                            }, r.a.createElement(O.b, {
                                id: "modalFilter.now"
                            })), r.a.createElement("td", {
                                className: "text-right"
                            }, r.a.createElement("div", {
                                "data-toggle": "buttons",
                                className: "btn-group"
                            }, r.a.createElement("label", {
                                type: "button",
                                className: this.activePlayerType("new"),
                                onClick: function() {
                                    return e.changePlayerType("new")
                                }
                            }, r.a.createElement("span", null, r.a.createElement("i", {
                                className: "fa fa-user-circle",
                                "aria-hidden": "true"
                            }), " new")), r.a.createElement("label", {
                                type: "button",
                                className: this.activePlayerType("hot"),
                                onClick: function() {
                                    return e.changePlayerType("hot")
                                }
                            }, r.a.createElement("span", null, r.a.createElement("i", {
                                className: "fa fa-user-secret",
                                "aria-hidden": "true"
                            }), " hot")), r.a.createElement("label", {
                                type: "button",
                                className: this.activePlayerType("vip"),
                                onClick: function() {
                                    return e.changePlayerType("vip")
                                }
                            }, r.a.createElement("span", null, r.a.createElement("i", {
                                className: "fa fa-user-md",
                                "aria-hidden": "true"
                            }), " vip")))), r.a.createElement("td", null, r.a.createElement("div", {
                                "data-toggle": "buttons",
                                className: "btn-group"
                            }, r.a.createElement("label", {
                                type: "button",
                                className: this.activePlayerType(""),
                                onClick: function() {
                                    return e.changePlayerType("")
                                }
                            }, r.a.createElement("span", null, r.a.createElement("i", {
                                className: "fa fa-times",
                                "aria-hidden": "true"
                            })))))), r.a.createElement("tr", null, r.a.createElement("td", {
                                className: "text-left"
                            }, r.a.createElement(O.b, {
                                id: "modalFilter.status"
                            })), r.a.createElement("td", {
                                className: "text-right"
                            }, r.a.createElement("div", {
                                "data-toggle": "buttons",
                                className: "btn-group"
                            }, r.a.createElement("label", {
                                type: "button",
                                className: this.activeStatus("ready"),
                                onClick: function() {
                                    return e.changeStatus("ready")
                                }
                            }, r.a.createElement("input", {
                                name: "status",
                                type: "radio",
                                autoComplete: "off",
                                value: "ready"
                            }), r.a.createElement("span", null, r.a.createElement("i", {
                                className: "fa fa-spinner",
                                "aria-hidden": "true"
                            }), "\xa0", r.a.createElement("span", null, r.a.createElement(O.b, {
                                id: "filter.sansang",
                                var: "hehe"
                            })))))), r.a.createElement("td", null, r.a.createElement("div", {
                                "data-toggle": "buttons",
                                className: "btn-group"
                            }, r.a.createElement("label", {
                                type: "button",
                                className: this.activeStatus(""),
                                onClick: function() {
                                    return e.changeStatus("")
                                }
                            }, r.a.createElement("span", null, r.a.createElement("i", {
                                className: "fa fa-times",
                                "aria-hidden": "true"
                            })))))), r.a.createElement("tr", null, r.a.createElement("td", {
                                className: "text-left"
                            }, r.a.createElement(O.b, {
                                id: "modalFilter.online"
                            })), r.a.createElement("td", {
                                className: "text-right"
                            }, r.a.createElement("div", {
                                "data-toggle": "buttons",
                                className: "btn-group"
                            }, r.a.createElement("label", {
                                type: "button",
                                className: this.activeOnline(!0),
                                onClick: function() {
                                    return e.changeIsOnline(!0)
                                }
                            }, r.a.createElement("span", null, r.a.createElement("i", {
                                className: "fas fa-globe-africa"
                            }), "\xa0 Online")))), r.a.createElement("td", null, r.a.createElement("div", {
                                "data-toggle": "buttons",
                                className: "btn-group"
                            }, r.a.createElement("label", {
                                type: "button",
                                className: this.activeOnline(!1),
                                onClick: function() {
                                    return e.changeIsOnline(!1)
                                }
                            }, r.a.createElement("span", null, r.a.createElement("i", {
                                className: "fa fa-times",
                                "aria-hidden": "true"
                            })))))), r.a.createElement("tr", null, r.a.createElement("td", {
                                className: "text-left"
                            }, r.a.createElement(O.b, {
                                id: "modalFilter.priceScope"
                            })), r.a.createElement("td", {
                                className: "text-right"
                            }, r.a.createElement(pe, {
                                onChangePrice: this.onChangePrice,
                                minPrice: this.state.minPrice,
                                maxPrice: this.state.maxPrice,
                                ratio: m.ratioPerVND
                            })), r.a.createElement("td", null)), r.a.createElement("tr", null, r.a.createElement("td", {
                                className: "text-left"
                            }, r.a.createElement(O.b, {
                                id: "modalFilter.live"
                            })), r.a.createElement("td", {
                                className: "text-right"
                            }, r.a.createElement("div", {
                                className: "mb-4"
                            }, f), r.a.createElement("div", {
                                className: "player-select div-autoComplete-search"
                            }, r.a.createElement("input", {
                                className: "filter-modal",
                                name: "citySelect",
                                type: "text",
                                value: a,
                                onChange: this.onChange,
                                onKeyUp: this.onKeyUp,
                                onBlur: this.onBlur,
                                onFocus: this.onFocusCity
                            }), r.a.createElement("div", {
                                className: this.showAutoComplete()
                            }, d))), r.a.createElement("td", null, r.a.createElement("div", {
                                "data-toggle": "buttons",
                                className: "btn-group"
                            }, r.a.createElement("label", {
                                type: "button",
                                className: this.activeCity(""),
                                onClick: function() {
                                    return e.changeCity("")
                                }
                            }, r.a.createElement("span", null, r.a.createElement("i", {
                                className: "fa fa-times",
                                "aria-hidden": "true"
                            })))))), r.a.createElement("tr", null, r.a.createElement("td", {
                                className: "text-left"
                            }, r.a.createElement(O.b, {
                                id: "name"
                            }), "/Url player:"), r.a.createElement("td", {
                                className: "text-right"
                            }, r.a.createElement("div", {
                                className: this.classDivGame()
                            }, r.a.createElement("input", {
                                className: "filter-modal",
                                name: "nickName",
                                type: "text",
                                autoComplete: "off",
                                value: o,
                                onChange: this.onChange,
                                maxLength: 32
                            }))), r.a.createElement("td", null, r.a.createElement("div", {
                                "data-toggle": "buttons",
                                className: "btn-group"
                            }, r.a.createElement("label", {
                                type: "button",
                                className: this.activeNickName(""),
                                onClick: function() {
                                    return e.changeNickName("")
                                }
                            }, r.a.createElement("span", null, r.a.createElement("i", {
                                className: "fa fa-times",
                                "aria-hidden": "true"
                            }))))))))), r.a.createElement(se.a.Footer, {
                                className: "text-center"
                            }, r.a.createElement("button", {
                                className: "btn btn-danger",
                                onClick: this.onFilter
                            }, r.a.createElement(O.b, {
                                id: "filter"
                            }))))
                        }
                    }]), a
                }(n.Component),
                be = Object(c.b)(function(e) {
                    return {
                        listCitySearch: e.listCitySearch.data,
                        language: e.languages,
                        dataVi: e.listGameSearch.dataVi,
                        dataEn: e.listGameSearch.dataEn,
                        dataCn: e.listGameSearch.dataCn,
                        isFetchedVi: e.listGameSearch.isFetchedVi,
                        isFetchedEn: e.listGameSearch.isFetchedEn,
                        isFetchedCn: e.listGameSearch.isFetchedCn,
                        fields: e.listGameSearch.fields,
                        languageLocale: e.languageLocale
                    }
                }, {
                    fetchedListCityRequest: me.b,
                    languagesRequest: de.b
                })(ve);

            function Ee(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = Object(C.a)(e);
                    if (t) {
                        var r = Object(C.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(E.a)(this, a)
                }
            }
            var Ce = function(e) {
                    Object(b.a)(a, e);
                    var t = Ee(a);

                    function a(e) {
                        var n;
                        return Object(y.a)(this, a), (n = t.call(this, e)).setData = function(e) {
                            var t = "vi";
                            switch (localStorage.lang && (t = localStorage.lang), t) {
                                case "vi":
                                    n.setState({
                                        listGameCategory: e.dataVi
                                    });
                                    break;
                                case "en":
                                    n.setState({
                                        listGameCategory: e.dataEn
                                    });
                                    break;
                                case "cn":
                                    n.setState({
                                        listGameCategory: e.dataCn
                                    });
                                    break;
                                default:
                                    n.setState({
                                        listGameCategory: e.dataVi
                                    })
                            }
                        }, n.filterData = function(e, t) {
                            var a = "",
                                n = "",
                                r = "",
                                c = oe.a.filter(e, function(e) {
                                    return a = e.name.replace("\u0110", "d").replace("\u0111", "d").normalize("NFD").replace(/[\u0300-\u036f]/g, ""), n = a.toLowerCase(), r = e.name.toLowerCase(), e.name.trim().startsWith(t.trim()) || n.trim().startsWith(t.trim()) || r.trim().startsWith(t.trim()) || a.trim().startsWith(t.trim())
                                }),
                                l = oe.a.filter(e, function(e) {
                                    return a = e.name.replace("\u0110", "d").replace("\u0111", "d").normalize("NFD").replace(/[\u0300-\u036f]/g, ""), n = a.toLowerCase(), r = e.name.toLowerCase(), !e.name.trim().startsWith(t.trim()) && !n.trim().startsWith(t.trim()) && !r.trim().startsWith(t.trim()) && !a.trim().startsWith(t.trim()) && (-1 !== a.trim().indexOf(t.trim()) || -1 !== n.trim().indexOf(t.trim()))
                                });
                            return c.concat(l)
                        }, n.onChange = function(e) {
                            e.preventDefault();
                            var t = e.target,
                                a = t.name,
                                r = "checkbox" === t.type ? t.checked : t.value,
                                c = Object(ne.a)(n.state.listGameCategory);
                            if ("gameCategory" === a && r.length > 0) {
                                var l = n.filterData(c, r);
                                n.setState({
                                    listAutoCompleteGameCategory: l,
                                    isShowDivGame: !0,
                                    keyHoverGame: -1
                                })
                            } else "gameCategory" === a && 0 === r.length && n.setState({
                                listAutoCompleteGameCategory: c,
                                isShowDivGame: !0,
                                keyHoverGame: -1
                            });
                            n.setState(Object(ae.a)({}, a, r))
                        }, n.onSearch = function(e) {
                            var t = Object(te.a)({}, e);
                            if (delete t.toggleCity, delete t.citySelect, delete t.listAutoCompleteCity, delete t.keyHoverCityCity, delete t.toggleGameCategory, delete t.listGameCategory, delete t.listAutoCompleteGameCategory, delete t.togglePrice, delete t.isShowDivGame, delete t.keyHoverGame, delete t.keyHoverCity, delete t.tagsString, 5e3 === t.minPrice && 5e6 === t.maxPrice && (delete t.minPrice, delete t.maxPrice), t.listCitySelect && t.listCitySelect.length > 0) {
                                var a = n.getArrayId(t.listCitySelect);
                                t.city = a
                            }
                            t.tags && 0 === t.tags.length && delete t.tags, delete t.listGameCategorySelect, delete t.listCitySelect, delete t.isShowModal, n.props.onSearch(t)
                        }, n.getArrayId = function(e) {
                            for (var t = "", a = 0, n = e.length; a < n; a += 1) t += e[a].city, a <= n - 2 && (t += ",");
                            return t
                        }, n.onChangeQuery = function(e) {
                            var t = e.minPrice,
                                a = e.maxPrice,
                                r = e.listCitySelect,
                                c = e.listGameCategorySelect,
                                l = e.gameSelect,
                                o = e.gender,
                                i = e.playerType,
                                s = e.status,
                                u = e.nickName;
                            n.setState({
                                minPrice: t,
                                maxPrice: a,
                                listCitySelect: r,
                                listGameCategorySelect: c,
                                gameSelect: l,
                                gender: o,
                                playerType: i,
                                status: s,
                                nickName: u
                            })
                        }, n.closeModal = function() {
                            n.setState({
                                isShowModal: !1
                            })
                        }, n.onClick = function() {
                            n.setState({
                                isShowModal: !0
                            })
                        }, n.onKeyUp = function(e) {
                            e.preventDefault();
                            var t = n.state,
                                a = t.keyHoverGame,
                                r = t.listAutoCompleteGameCategory,
                                c = t.isShowDivGame;
                            if (13 === e.keyCode && c && a >= 0 && a < r.length && r.length > 0) {
                                n.setState({
                                    gameCategory: r[a].name,
                                    isShowDivGame: !1,
                                    keyHoverGame: -1
                                });
                                var l = Object(te.a)({}, n.state);
                                l.gameCategory = r[a].name, n.onSearch(l)
                            }
                            13 === e.keyCode && -1 === a && (n.setState({
                                isShowDivGame: !1,
                                keyHoverGame: -1
                            }), n.onSearch(n.state)), 40 === e.keyCode && a < r.length - 1 && n.setState({
                                keyHoverGame: a + 1
                            }), 38 === e.keyCode && a > 0 && n.setState({
                                keyHoverGame: a - 1
                            })
                        }, n.onBlur = function() {
                            n.setState({
                                isShowDivGame: !1,
                                listAutoCompleteGameCategory: []
                            })
                        }, n.onFilter = function(e) {
                            var t = e.minPrice,
                                a = e.maxPrice,
                                r = e.listCitySelect,
                                c = e.gameSelect,
                                l = e.gender,
                                o = e.playerType,
                                i = e.status,
                                s = e.nickName;
                            n.setState({
                                minPrice: t,
                                maxPrice: a,
                                listCitySelect: r,
                                gameSelect: c,
                                gender: l,
                                playerType: o,
                                status: i,
                                nickName: s
                            }), e.gameCategory = n.state.gameCategory, n.onSearch(e)
                        }, n.classDivGame = function() {
                            return n.state.isShowDiv ? "player-select div-autoComplete-search fixed-div" : "player-select div-autoComplete-search"
                        }, n.showAutoCompleteGame = function() {
                            return n.state.isShowDivGame && n.state.listAutoCompleteGameCategory.length > 0 ? "suggestion-game-bar" : "suggestion-game-hide"
                        }, n.onMouseOver = function(e) {
                            n.state.listAutoCompleteGameCategory.length > 0 && n.setState({
                                keyHoverGame: e
                            })
                        }, n.onMouseOut = function() {
                            n.state.listAutoCompleteGameCategory.length > 0 && n.setState({
                                keyHoverGame: -1
                            })
                        }, n.checkGame = function() {
                            for (var e = n.state, t = e.keyHoverGame, a = e.listGameCategorySelect, r = e.listAutoCompleteGameCategory, c = 0, l = a.length, o = !0; c < l; c += 1) a[c]._id === r[t]._id && (o = !1);
                            return o
                        }, n.onMouseDown = function(e) {
                            if (n.state.listAutoCompleteGameCategory.length > 0) {
                                n.setState({
                                    gameCategory: e.name,
                                    isShowDivGame: !1
                                });
                                var t = Object(te.a)({}, n.state);
                                t.gameCategory = e.name, n.onSearch(t)
                            }
                        }, n.onFocusGameCategory = function() {
                            var e = n.state.gameCategory,
                                t = n.state.listGameCategory;
                            if (e.length > 0) {
                                var a = n.filterData(t, e);
                                n.setState({
                                    listAutoCompleteGameCategory: a,
                                    isShowDivGame: !0,
                                    keyHoverGame: -1
                                })
                            } else 0 === e.length && n.setState({
                                listAutoCompleteGameCategory: [].concat(t),
                                isShowDivGame: !0,
                                keyHoverGame: -1
                            })
                        }, n.state = {
                            minPrice: 5e3,
                            maxPrice: 5e6,
                            nickName: "",
                            listCitySelect: [],
                            listGameCategorySelect: [],
                            gameSelect: "",
                            gender: "",
                            playerType: "",
                            status: "",
                            isShowModal: !1,
                            isShowDivGame: !1,
                            gameCategory: "",
                            keyHoverGame: -1,
                            listGameCategory: [],
                            listAutoCompleteGameCategory: []
                        }, n
                    }
                    return Object(v.a)(a, [{
                        key: "UNSAFE_componentWillReceiveProps",
                        value: function(e) {
                            this.setData(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = t.isShowModal,
                                n = t.gameCategory,
                                c = t.listAutoCompleteGameCategory,
                                l = t.keyHoverGame,
                                o = this.props.searchPlayers.isLoading,
                                i = null;
                            c && c.length > 5 && c.splice(5, c.length - 5), c && c.length > 0 && (i = c.map(function(t, a) {
                                return r.a.createElement("p", {
                                    key: a,
                                    className: l === a ? "suggestion-game-hover" : "",
                                    onMouseOver: function() {
                                        return e.onMouseOver(a)
                                    },
                                    onMouseOut: function() {
                                        return e.onMouseOut(a)
                                    },
                                    onMouseDown: function() {
                                        return e.onMouseDown(t)
                                    }
                                }, t.name)
                            }));
                            var s = localStorage.lang || "vi",
                                u = "";
                            return "vi" === s ? u = "T\xean game" : "en" === s && (u = "Game title"), r.a.createElement(r.a.Fragment, null, r.a.createElement(re.a, {
                                className: "filter-player"
                            }, r.a.createElement(ce.a, {
                                sm: 12,
                                md: 12,
                                lg: 12,
                                xl: 12
                            }, r.a.createElement("section", {
                                id: "search"
                            }, r.a.createElement("div", {
                                className: this.classDivGame()
                            }, r.a.createElement("label", {
                                htmlFor: "search-input"
                            }, r.a.createElement("i", {
                                className: "fa fa-search",
                                "aria-hidden": "true",
                                onClick: function() {
                                    return e.onSearch(e.state)
                                }
                            }), r.a.createElement("span", {
                                className: "sr-only"
                            }, "Search Players")), r.a.createElement("i", {
                                className: "fa fa-bars setting-search-index",
                                "aria-hidden": "true",
                                onClick: this.onClick
                            }), r.a.createElement("input", {
                                className: "form-control input-lg",
                                placeholder: u,
                                autoComplete: "off",
                                spellCheck: "false",
                                autoCorrect: "off",
                                tabIndex: "1",
                                name: "gameCategory",
                                type: "text",
                                value: n,
                                onChange: this.onChange,
                                onKeyUp: this.onKeyUp,
                                onBlur: this.onBlur,
                                onFocus: this.onFocusGameCategory
                            }), r.a.createElement("div", {
                                className: this.showAutoCompleteGame()
                            }, i)))), r.a.createElement(be, {
                                isShow: a,
                                closeModal: this.closeModal,
                                onChangeQuery: this.onChangeQuery,
                                onFilter: this.onFilter
                            }), r.a.createElement(ce.a, {
                                sm: 12,
                                md: 12,
                                lg: 12,
                                xl: 12
                            }, r.a.createElement("section", {
                                className: "search-destop"
                            }, r.a.createElement(ce.a, {
                                md: 3,
                                className: "text-right"
                            }), r.a.createElement(ce.a, {
                                md: 4
                            }, r.a.createElement("div", {
                                className: this.classDivGame()
                            }, r.a.createElement("input", {
                                className: "form-control",
                                name: "gameCategory",
                                placeholder: u,
                                type: "text",
                                autoComplete: "off",
                                value: n,
                                onChange: this.onChange,
                                onKeyUp: this.onKeyUp,
                                onBlur: this.onBlur,
                                onFocus: this.onFocusGameCategory
                            }), r.a.createElement("div", {
                                className: this.showAutoCompleteGame()
                            }, i))), r.a.createElement(ce.a, {
                                md: 3,
                                className: "text-left"
                            }, r.a.createElement("button", {
                                className: "btn btn-danger btn-filter",
                                onClick: this.onClick
                            }, r.a.createElement(O.b, {
                                id: "filter"
                            })), r.a.createElement("button", {
                                className: "btn btn-success btn-search",
                                onClick: function() {
                                    return e.onSearch(e.state)
                                }
                            }, r.a.createElement(O.b, {
                                id: "search"
                            }), "\xa0", o ? r.a.createElement(ie.a, {
                                fontSize: 15
                            }) : null))))))
                        }
                    }]), a
                }(n.Component),
                Se = Object(c.b)(function(e) {
                    return {
                        listCitySearch: e.listCitySearch.data,
                        dataVi: e.listGameSearch.dataVi,
                        dataEn: e.listGameSearch.dataEn,
                        dataCn: e.listGameSearch.dataCn
                    }
                }, null)(Ce);

            function ke(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = Object(C.a)(e);
                    if (t) {
                        var r = Object(C.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(E.a)(this, a)
                }
            }
            var Oe = function(e) {
                    Object(b.a)(a, e);
                    var t = ke(a);

                    function a() {
                        var e;
                        Object(y.a)(this, a);
                        for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c];
                        return (e = t.call.apply(t, [this].concat(r))).onSearch = function(t) {
                            e.props.fetchSearchPlayerRequest(t)
                        }, e
                    }
                    return Object(v.a)(a, [{
                        key: "render",
                        value: function() {
                            return r.a.createElement(Se, {
                                onSearch: this.onSearch,
                                cities: this.props.cities,
                                searchPlayers: this.props.searchPlayers
                            })
                        }
                    }]), a
                }(n.Component),
                Ne = Object(c.b)(function(e) {
                    return {
                        cities: e.cities,
                        searchPlayers: e.searchPlayers,
                        changeComponent: e.changeComponent
                    }
                }, {
                    fetchSearchPlayerRequest: $.b
                })(Oe);
            t.default = Object(c.b)(function(e) {
                return {
                    searchPlayers: e.searchPlayers,
                    listBanner: e.listBanner
                }
            }, {
                setNotificationStatus: p.c,
                fetchGlobalMessage: g.d,
                requestGlobalMessage: g.f,
                messageFetched: g.e,
                setMessageLoading: g.g,
                blockUserRequest: g.a
            })(function(e) {
                var t = e.searchPlayers,
                    a = e.listBanner,
                    n = e.fetchGlobalMessage,
                    c = e.setNotificationStatus,
                    l = e.requestGlobalMessage,
                    o = e.messageFetched,
                    i = e.setMessageLoading,
                    s = e.blockUserRequest,
                    u = (t || {}).isSearch;
                return r.a.createElement("div", {
                    className: "container container2"
                }, r.a.createElement(h, {
                    data: a,
                    fetchGlobalMessage: n,
                    requestGlobalMessage: l,
                    setNotificationStatus: c,
                    messageFetched: o,
                    setMessageLoading: i,
                    blockUserRequest: s
                }), r.a.createElement(Ne, null), r.a.createElement("div", {
                    className: "list-player"
                }, r.a.createElement(r.a.Fragment, null, u && r.a.createElement(ee, null), r.a.createElement(q, null), r.a.createElement(K, null), r.a.createElement(Y, null))))
            })
        },
        863: function(e, t, a) {
            "use strict";
            var n = a(2),
                r = a(39),
                c = a(55),
                l = a(12),
                o = a.n(l),
                i = a(86),
                s = a(118),
                u = a(4),
                m = a(3),
                d = a(23),
                f = a(0),
                h = a.n(f),
                g = a(40),
                p = a(50),
                y = a(1055),
                v = a.n(y),
                b = a(283),
                E = a.n(b),
                C = function(e) {
                    var t = e.friends,
                        a = void 0 === t ? [] : t,
                        n = e.teammates,
                        r = void 0 === n ? [] : n,
                        c = e.peer,
                        l = e.volume,
                        o = e.authorId,
                        i = void 0 === o ? {} : o,
                        s = Object(f.useRef)(),
                        u = Object(f.useCallback)(function() {
                            if (!c.userId) return !0;
                            if (c.userId === i._id) return !1;
                            var e = -1;
                            return -1 !== (e = r.findIndex(function(e) {
                                return e._id === c.userId
                            })) ? !!r[e].isMuted : -1 !== (e = a.findIndex(function(e) {
                                return e._id === c.userId
                            })) ? !!a[e].isMuted : -1 === e
                        }, [c.userId, r, a, i]);
                    return Object(f.useEffect)(function() {
                        c.peer.on("stream", function(e) {
                            s.current && (s.current.srcObject = e)
                        })
                    }, []), Object(f.useEffect)(function() {
                        s && s.current && (u(), s.current.volume = 0)
                    }, [s.current, l, r, a]), h.a.createElement("audio", {
                        id: e.socketId,
                        ref: s,
                        playsInline: !0,
                        autoPlay: !0,
                        muted: !0
                    })
                },
                S = a(896),
                k = a(8),
                O = a.n(k),
                N = a(13),
                j = Object(f.createContext)({
                    stream: void 0,
                    start: void 0,
                    stop: function() {}
                }),
                w = function() {
                    return Object(f.useContext)(j)
                },
                x = function(e) {
                    var t = e.children,
                        a = e.audio,
                        n = Object(f.useState)(),
                        r = Object(c.a)(n, 2),
                        l = r[0],
                        o = r[1];
                    Object(f.useEffect)(function() {
                        return function() {
                            l && l.getTracks().forEach(function(e) {
                                return e.stop()
                            })
                        }
                    }, [l]);
                    var i = Object(f.useCallback)(Object(N.a)(O.a.mark(function e() {
                            var t;
                            return O.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, navigator.mediaDevices.getUserMedia({
                                            audio: a
                                        });
                                    case 2:
                                        t = e.sent, o(t);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [a]),
                        s = Object(f.useCallback)(function() {
                            l && (l.getTracks().forEach(function(e) {
                                return e.stop()
                            }), o(void 0))
                        }, [l]);
                    return h.a.createElement(j.Provider, {
                        value: {
                            stream: l,
                            stop: s,
                            start: i
                        }
                    }, t)
                },
                R = Object(f.createContext)({
                    audioCtx: void 0,
                    source: void 0
                }),
                P = function(e) {
                    var t = e.children,
                        a = Object(f.useState)(),
                        n = Object(c.a)(a, 2),
                        r = n[0],
                        l = n[1],
                        o = Object(f.useState)(),
                        i = Object(c.a)(o, 2),
                        s = i[0],
                        u = i[1],
                        m = w().stream,
                        d = Object(f.useCallback)(Object(N.a)(O.a.mark(function e() {
                            return O.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.prev = 0, !r) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.next = 4, r.close();
                                    case 4:
                                        l(void 0);
                                    case 5:
                                        s && (s.disconnect(), u(void 0)), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), console.error(e.t0.name, e.t0.message);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [0, 8]
                            ])
                        })), [r, s]);
                    return Object(f.useEffect)(function() {
                        if (m) {
                            var e = new(window.AudioContext || window.webkitAudioContext);
                            u(e.createMediaStreamSource(m)), l(e)
                        }
                    }, [m]), Object(f.useEffect)(function() {
                        return m || d(),
                            function() {
                                d()
                            }
                    }, [m, d]), h.a.createElement(R.Provider, {
                        value: {
                            audioCtx: r,
                            source: s
                        }
                    }, t)
                },
                M = Object(f.createContext)({
                    analyser: void 0
                }),
                G = function(e) {
                    var t = e.children,
                        a = Object(f.useState)(),
                        n = Object(c.a)(a, 2),
                        r = n[0],
                        l = n[1],
                        o = Object(f.useContext)(R).source;
                    return Object(f.useEffect)(function() {
                        if (o) {
                            var e = o.context.createAnalyser();
                            e.smoothingTimeConstant = 1, o.connect(e), l(e)
                        }
                    }, [o]), Object(f.useEffect)(function() {
                        return r && o && o.connect(r), o || r && (r.disconnect(), l(void 0)),
                            function() {
                                r && (r.disconnect(), l(void 0))
                            }
                    }, [r, o]), h.a.createElement(M.Provider, {
                        value: {
                            analyser: r
                        }
                    }, t)
                };

            function D(e, t) {
                var a;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (a = function(e, t) {
                        if (!e) return;
                        if ("string" === typeof e) return I(e, t);
                        var a = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === a && e.constructor && (a = e.constructor.name);
                        if ("Map" === a || "Set" === a) return Array.from(e);
                        if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return I(e, t)
                    }(e)) || t && e && "number" === typeof e.length) {
                        a && (e = a);
                        var n = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var c, l = !0,
                    o = !1;
                return {
                    s: function() {
                        a = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = a.next();
                        return l = e.done, e
                    },
                    e: function(e) {
                        o = !0, c = e
                    },
                    f: function() {
                        try {
                            l || null == a.return || a.return()
                        } finally {
                            if (o) throw c
                        }
                    }
                }
            }

            function I(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }
            var A = 0,
                T = function(e) {
                    var t = e.setState,
                        a = Object(f.createRef)(),
                        r = Object(f.useContext)(M).analyser,
                        c = w().start;
                    return Object(f.useEffect)(function() {
                        c()
                    }, []), Object(f.useEffect)(function() {
                        if (r) {
                            var e, c = new Uint8Array(r.frequencyBinCount);
                            return function l() {
                                e = requestAnimationFrame(l), r.getByteTimeDomainData(c);
                                var o = a.current;
                                if (o) {
                                    var i = o.height,
                                        s = o.width,
                                        u = o.getContext("2d"),
                                        m = 0,
                                        d = 1 * s / c.length;
                                    if (u) {
                                        u.lineWidth = 2, u.strokeStyle = "#fff", u.clearRect(0, 0, s, i), u.beginPath(), u.moveTo(0, i / 2);
                                        var f, h = D(c);
                                        try {
                                            for (h.s(); !(f = h.n()).done;) {
                                                var g = f.value / 255 * i;
                                                u.lineTo(m, g), m += d
                                            }
                                        } catch (E) {
                                            h.e(E)
                                        } finally {
                                            h.f()
                                        }
                                        u.lineTo(m, i / 2), u.stroke()
                                    }
                                }
                                for (var p, y = c.length, v = 0, b = 0; b < y;) v += Math.abs(c[b++]);
                                p = Math.sqrt(v / y), 0 === A && (A = setTimeout(function() {
                                    t(p > 11.2917 ? function(e) {
                                        return Object(n.a)({}, e, {
                                            isSpeaker: !0
                                        })
                                    } : function(e) {
                                        return Object(n.a)({}, e, {
                                            isSpeaker: !1
                                        })
                                    }), A = 0
                                }, 800))
                            }(),
                                function() {
                                    cancelAnimationFrame(e)
                                }
                        }
                    }, [a, r]), null
                },
                F = function(e) {
                    var t = e.children,
                        a = e.currentStream,
                        n = e.setState;
                    return h.a.createElement(x, {
                        stream: a,
                        video: !1,
                        audio: !0
                    }, h.a.createElement(P, null, h.a.createElement(G, null, h.a.createElement(T, {
                        setState: n
                    }), t)))
                },
                H = a(906);
            a.d(t, "a", function() {
                return K
            }), a.d(t, "b", function() {
                return z
            });
            var L, _, U = {},
                q = function() {},
                B = {
                    socketDonate: null,
                    channel: null,
                    categoryId: null,
                    playerId: null,
                    detailRoom: {},
                    newDonate: null,
                    currentStream: null,
                    volume: 100,
                    userOnMic: [],
                    isSpeaker: !1,
                    isMute: !1
                },
                V = {
                    state: B,
                    setState: function(e) {
                        return e
                    }
                },
                W = Object(f.createContext)(V),
                K = function(e) {
                    var t = e.children,
                        a = Object(f.useState)(B),
                        l = Object(c.a)(a, 2),
                        y = l[0],
                        b = l[1],
                        k = Object(f.useRef)(),
                        O = y.categoryId,
                        N = y.detailRoom,
                        j = y.isSpeaker,
                        w = N || {},
                        x = w.friends,
                        R = void 0 === x ? [] : x,
                        P = w.teammates,
                        M = void 0 === P ? [] : P,
                        G = w.authorId,
                        D = Object(g.c)(),
                        I = Object(p.h)(),
                        A = Object(f.useState)([]),
                        T = Object(c.a)(A, 2),
                        V = T[0],
                        K = T[1],
                        z = function() {
                            for (var e in U) U[e].peer.destroy();
                            K([])
                        },
                        Q = function(e, t, a) {
                            U[e] = {
                                peer: new v.a({
                                    stream: _,
                                    config: S.a,
                                    initiator: t
                                }),
                                userId: a
                            }, U[e].peer.on("signal", function(t) {
                                L.emit("signal", {
                                    socketId: e,
                                    signal: t
                                })
                            }), K(function(t) {
                                return [].concat(Object(r.a)(t), [{
                                    socketId: e,
                                    peer: U[e]
                                }])
                            })
                        };
                    q = function(e) {
                        e ? k.current && (k.current.getAudioTracks()[0].enabled = !0) : k.current && (k.current.getAudioTracks()[0].enabled = !1)
                    };
                    var J = function() {
                        L && L.close && (z(), L.close()), (L = E()("".concat(o.a.socketUrl, "/outside?gameId=").concat(y.categoryId, "&gameRoomId=").concat(I.id, "&token=").concat(localStorage.token), {
                            path: "/socket",
                            transports: ["websocket", "polling"]
                        })).on("initReceive", function(e) {
                            var t = e.socketId,
                                a = e.userId;
                            Q(t, !1, a), L.emit("initSend", t)
                        }), L.on("initSend", function(e) {
                            var t = e.socketId,
                                a = e.userId;
                            Q(t, !0, a)
                        }), L.on("anything", function(e) {
                            e.data.userId && b(function(t) {
                                var a = Object(r.a)(new Set([].concat(Object(r.a)(t.userOnMic), [e.data.userId])));
                                return Object(n.a)({}, t, {
                                    userOnMic: a
                                })
                            })
                        }), L.on("signal", function(e) {
                            var t = e.socketId,
                                a = e.signal;
                            try {
                                U[t].peer.signal(a)
                            } catch (n) {
                                console.log({
                                    error: n
                                })
                            }
                        }), L.on("error", function(e) {
                            console.log("error", e)
                        }), L.on("removePeer", function(e) {
                            ! function(e) {
                                U[e] && U[e].peer.destroy(), delete U[e], K(function(t) {
                                    return t.filter(function(t) {
                                        return t.socketId !== e
                                    })
                                })
                            }(e)
                        }), L.on("game-room", function(e) {
                            "new-message-game-room" === e.action && (D(Object(s.g)({
                                newMessage: !0
                            })), D(Object(s.e)([], 0, e.data || {})), D(Object(s.g)({
                                newMessage: !1
                            }))), ["leave", "join"].includes(e.action) && D(Object(i.l)(e)), ["unmute", "mute"].includes(e.action) && D(Object(i.t)({
                                action: e.action,
                                userId: e.data.playerId
                            }))
                        })
                    };
                    Object(f.useEffect)(function() {
                        b(function(e) {
                            return Object(n.a)({}, e, {
                                muteMic: q
                            })
                        });
                        var e = setInterval(function() {
                            return b(function(e) {
                                return Object(n.a)({}, e, {
                                    userOnMic: []
                                })
                            })
                        }, 2e3);
                        return function() {
                            return clearInterval(e)
                        }
                    }, []), Object(f.useEffect)(function() {}, [j]), Object(f.useEffect)(function() {
                        var e = Object(d.get)(N, "authorId._id");
                        if (e) {
                            var t = E()("".concat(o.a.socketUrl, "/outside?deviceType=browser&playerId=").concat(e), {
                                path: "/socket",
                                transports: ["websocket", "polling"]
                            });
                            b(Object(n.a)({}, y, {
                                socketDonate: t
                            })), t.on("error", function(t) {
                                m.d.workerClientPostLog("SOCKET donate-streams/".concat(e), {
                                    error: t
                                })
                            }), t.on("donate-stream", function(e) {
                                b(Object(n.a)({}, y, {
                                    newDonate: Object(n.a)({}, e, {
                                        amount: e.payload.donationAmount,
                                        message: e.payload.message
                                    })
                                }))
                            })
                        }
                        return function() {
                            y.socketDonate && y.socketDonate.close(), b({
                                socketDonate: null
                            })
                        }
                    }, [Object(d.get)(N, "authorId._id")]), Object(f.useEffect)(function() {
                        return O && navigator.mediaDevices.getUserMedia(S.b).then(function(e) {
                            k.current = e, _ = e.clone(), J()
                        }).catch(function(e) {
                            m.d.workerClientPostLog("ERROR GET MediaStream", {
                                userAgent: navigator.userAgent,
                                error: e
                            }), D(Object(u.c)(!1, Object(H.a)(e.name))), J()
                        }),
                            function() {
                                L && L.close && (L.close(), U = {}, z()), _ && (k.current.getTracks().forEach(function(e) {
                                    return e.stop()
                                }), k.current = void 0, _.getTracks().forEach(function(e) {
                                    return e.stop()
                                }), _ = void 0), k.current = null
                            }
                    }, [O, I.id]), Object(f.useEffect)(function() {
                        b(Object(n.a)({}, y, {
                            newDonate: null
                        }))
                    }, [N._id]);
                    var Y = {
                        state: y,
                        setState: b,
                        currentPeers: V
                    };
                    return h.a.createElement(F, {
                        setState: b,
                        audio: !0
                    }, h.a.createElement(W.Provider, {
                        value: Y
                    }, V.map(function(e, t) {
                        return h.a.createElement(C, Object.assign({
                            key: t + "audio",
                            volume: y.volume,
                            teammates: M,
                            authorId: G,
                            friends: R
                        }, e))
                    }), t))
                },
                z = function() {
                    var e = Object(f.useContext)(W),
                        t = e.state,
                        a = e.setState;
                    return Object(n.a)({}, t, {
                        emitJoinRoom: function(e) {
                            var t = e.gameId,
                                a = e.gameRoomId;
                            L && L.emit && L.emit("game-room", {
                                action: "joined-game-room",
                                data: {
                                    gameId: t,
                                    gameRoomId: a
                                }
                            })
                        },
                        setCategory: function(e) {
                            a(Object(n.a)({}, t, {
                                categoryId: e
                            }))
                        },
                        setDetailRoom: function(e) {
                            a(Object(n.a)({}, t, {
                                detailRoom: e
                            }))
                        },
                        setVolume: function(e) {
                            a(Object(n.a)({}, t, {
                                volume: e
                            }))
                        },
                        muteLocalMic: function(e) {
                            q(e), e ? (a(Object(n.a)({}, t, {
                                isMute: !1
                            })), _ && (_.getAudioTracks()[0].enabled = !0)) : (a(Object(n.a)({}, t, {
                                isMute: !0
                            })), _ && (_.getAudioTracks()[0].enabled = !1))
                        }
                    })
                }
        },
        864: function(e, t, a) {
            "use strict";
            var n = a(54),
                r = a(14),
                c = a(15),
                l = a(26),
                o = a(27),
                i = a(19),
                s = a(0),
                u = a.n(s),
                m = a(40),
                d = a(159),
                f = a(829),
                h = a(6),
                g = a(160),
                p = a.n(g),
                y = a(91),
                v = a(271),
                b = a(272),
                E = a(46);
            a(868);

            function C(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = Object(i.a)(e);
                    if (t) {
                        var r = Object(i.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(o.a)(this, a)
                }
            }
            var S = function(e) {
                Object(l.a)(a, e);
                var t = C(a);

                function a(e) {
                    var c;
                    return Object(r.a)(this, a), (c = t.call(this, e)).onChange = function(e) {
                        e.preventDefault();
                        var t = e.target,
                            a = t.name,
                            r = t.value,
                            l = r || "";
                        "amount" === a && (l = r ? parseInt(r.replace(/[\D\s]+/g, ""), 0) : 0), c.setState(Object(n.a)({
                            errMoney: null,
                            errMess: null,
                            errName: null
                        }, a, l))
                    }, c.onDonate = function() {
                        var e = sessionStorage.getItem("unlockTime"),
                            t = localStorage.getItem("token"),
                            a = localStorage.getItem("lang") || "vi",
                            n = c.state,
                            r = n.amount,
                            l = n.displayName,
                            o = n.message,
                            i = n.playerId,
                            s = n.securityLock,
                            u = n.totalMoney;
                        if (t) {
                            if (u < r) return alert("S\u1ed1 d\u01b0 hi\u1ec7n t\u1ea1i kh\xf4ng \u0111\u1ee7!");
                            if (s && e || void 0 === s) {
                                if (l && l.length > 30) return c.setState({
                                    errName: c.props.intl.formatMessage({
                                        id: "err.messlengthChar"
                                    }, {
                                        e: "30"
                                    })
                                });
                                r < 8e3 ? c.setState({
                                    errMoney: c.props.intl.formatMessage({
                                        id: "err.donatemin8k"
                                    })
                                }) : parseInt(r) > 1e8 ? c.setState({
                                    errMoney: c.props.intl.formatMessage({
                                        id: "err.donatemin8k"
                                    })
                                }) : r % 1e3 === 0 ? o.length > 255 ? c.setState({
                                    errMess: c.props.intl.formatMessage({
                                        id: "err.messlengthChar"
                                    }, {
                                        e: "255"
                                    })
                                }) : c.props.submit(r, l, o, i, e, a) : c.setState({
                                    errMoney: c.props.intl.formatMessage({
                                        id: "err.donateevennum"
                                    })
                                })
                            } else c.setState({
                                showModalUnlock: !0
                            })
                        } else window.location.assign("/login")
                    }, c.state = {
                        showModal: !1,
                        showModalLoadCredit: !1,
                        showModalUnlock: !1,
                        amount: "",
                        totalMoney: 0,
                        displayName: "",
                        message: "",
                        playerName: "",
                        playerId: "",
                        securityLock: null,
                        errMoney: null,
                        errMess: null,
                        errName: null
                    }, c
                }
                return Object(c.a)(a, [{
                    key: "UNSAFE_componentWillReceiveProps",
                    value: function(e) {
                        e && e.show !== this.state.showModal && this.setState({
                            showModal: e.show
                        }), e && e.userInformation && this.setState({
                            displayName: e.userInformation.name,
                            totalMoney: e.userInformation.totalMoney,
                            securityLock: e.userInformation.securityLock
                        }), e && e.duoData && e.duoData.player && this.setState({
                            playerName: e.duoData.player.playerSetting.nickName,
                            playerId: e.duoData.player._id
                        }), e && e.playerInformation && e.playerInformation.playerSetting && this.setState({
                            playerName: e.playerInformation.playerSetting.nickName,
                            playerId: e.playerInformation._id
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.state,
                            a = t.showModal,
                            n = t.amount,
                            r = t.displayName,
                            c = t.message,
                            l = t.showModalUnlock,
                            o = t.totalMoney,
                            i = t.playerName,
                            s = t.showModalLoadCredit,
                            m = t.errMoney,
                            g = t.errMess,
                            C = t.errName,
                            S = this.props,
                            k = S.isLoading,
                            O = S.info,
                            N = S.totalTimeHasBeenRent,
                            j = S.totalReviewsPlayer,
                            w = S.isConnect,
                            x = w ? " Tip " : " Donate ",
                            R = !1;
                        return N < 10 && j < 5 && (R = !0), u.a.createElement(d.a, {
                            className: "modal-donate",
                            show: a,
                            onHide: function() {
                                e.setState({
                                    showModal: !1
                                }), e.props.close(!1)
                            }
                        }, u.a.createElement(d.a.Header, {
                            closeButton: !0
                        }, u.a.createElement(d.a.Title, null, x)), u.a.createElement(d.a.Body, null, u.a.createElement("table", null, u.a.createElement("tbody", null, u.a.createElement("tr", null, u.a.createElement("td", null, u.a.createElement(h.b, {
                            id: "shoptable.nguoinhan"
                        }), ":"), u.a.createElement("td", null, O && O.typePage && "user" === O.typePage ? O.data.name : i)), u.a.createElement("tr", null, u.a.createElement("td", null, u.a.createElement(h.b, {
                            id: "title.currentbalance"
                        }), ":"), u.a.createElement("td", null, u.a.createElement("span", {
                            className: "total-amount"
                        }, o ? u.a.createElement(E.a, {
                            money: o
                        }) : "0\u0111"), u.a.createElement("span", {
                            className: "load-more-credit",
                            onClick: function() {
                                return e.setState({
                                    showModalLoadCredit: !0
                                })
                            }
                        }, "+"))), u.a.createElement("tr", null, u.a.createElement("td", null, u.a.createElement(h.b, {
                            id: "playerprofile.sotiendonate"
                        }), x, ":"), u.a.createElement("td", null, u.a.createElement(f.a, {
                            type: "text",
                            name: "amount",
                            value: n.toLocaleString(),
                            onChange: this.onChange
                        }), u.a.createElement("span", {
                            className: "total-amount"
                        }, m))), !w && u.a.createElement("tr", null, u.a.createElement("td", null, u.a.createElement(h.b, {
                            id: "infoform.tenhienthi"
                        })), u.a.createElement("td", null, u.a.createElement(f.a, {
                            type: "text",
                            name: "displayName",
                            value: r,
                            onChange: this.onChange
                        }), u.a.createElement("span", {
                            className: "total-amount"
                        }, C))), u.a.createElement("tr", null, u.a.createElement("td", {
                            colSpan: 2
                        }, u.a.createElement(f.a, {
                            componentClass: "textarea",
                            placeholder: "Type a message ...",
                            type: "text",
                            name: "message",
                            value: c,
                            onChange: this.onChange,
                            maxLength: 250
                        }), u.a.createElement("span", {
                            className: "total-amount"
                        }, g))), !w && R && u.a.createElement("tr", null, u.a.createElement("td", {
                            class: "text-warning",
                            colSpan: 2
                        }, u.a.createElement(h.b, {
                            id: "playerprofile.warningrent"
                        })))))), u.a.createElement(d.a.Footer, null, w && u.a.createElement("p", {
                            className: "note-modal"
                        }, "1 ", u.a.createElement("i", {
                            className: "fab fa-bitcoin"
                        }), " = 1,000 \u0111"), u.a.createElement(y.a, {
                            bsStyle: "danger",
                            fill: !0,
                            onClick: this.onDonate
                        }, k ? u.a.createElement(p.a, {
                            name: "ball-scale-ripple",
                            color: "white",
                            fadeIn: "none"
                        }) : x), u.a.createElement(y.a, {
                            onClick: function() {
                                e.setState({
                                    showModal: !1
                                }), e.props.close(!1)
                            }
                        }, u.a.createElement(h.b, {
                            id: "close"
                        }))), u.a.createElement(v.a, {
                            closeModal: function() {
                                return e.setState({
                                    showModalUnlock: !1
                                })
                            },
                            isLoading: !1,
                            isShow: l
                        }), u.a.createElement(b.a, {
                            closeModal: function() {
                                return e.setState({
                                    showModalLoadCredit: !1
                                })
                            },
                            isShow: s
                        }))
                    }
                }]), a
            }(s.Component);
            S.defaultProps = {
                totalTimeHasBeenRent: 0,
                totalReviewsPlayer: 0,
                duoData: {}
            };
            t.a = Object(m.b)(function(e) {
                return {
                    userInformation: e.userInformation.data,
                    isLoading: e.common.data.donateLoading
                }
            }, null)(Object(h.g)(S))
        },
        868: function(e, t, a) {},
        877: function(e, t) {},
        896: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return n
            }), a.d(t, "b", function() {
                return r
            });
            var n = {
                    iceServers: [{
                        urls: "stun:stun.l.google.com:19302"
                    }, {
                        url: "turn:192.158.29.39:3478?transport=udp",
                        credential: "JZEOEt2V3Qb0y27GRntt2u2PAYA=",
                        username: "28224511:1379330808"
                    }]
                },
                r = {
                    audio: !0
                }
        },
        906: function(e, t, a) {
            "use strict";
            a.d(t, "b", function() {
                return n
            }), a.d(t, "a", function() {
                return r
            });
            a(896);
            var n = function(e) {
                    var t = e.authorId,
                        a = void 0 === t ? {} : t,
                        n = e.teammates,
                        r = void 0 === n ? [] : n,
                        c = e.friends,
                        l = void 0 === c ? [] : c,
                        o = e.userId;
                    if (o === a._id) return !0;
                    return -1 !== r.findIndex(function(e) {
                        return e._id === o
                    }) || -1 !== l.findIndex(function(e) {
                        return e._id === o
                    })
                },
                r = function(e) {
                    switch (e) {
                        case "AbortError":
                            return "M\u1ed9t s\u1ed1 s\u1ef1 c\u1ed1 \u0111\xe3 x\u1ea3y ra khi\u1ebfn Micro kh\xf4ng \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng.";
                        case "NotAllowedError":
                            return "Kh\xf4ng t\xecm th\u1ea5y thi\u1ebft b\u1ecb.";
                        case "NotFoundError":
                            return "Kh\xf4ng t\xecm th\u1ea5y Micro.";
                        case "NotReadableError":
                            return "L\u1ed7i ph\u1ea7n c\u1ee9ng \u0111\xe3 x\u1ea3y ra \u1edf c\u1ea5p h\u1ec7 \u0111i\u1ec1u h\xe0nh, tr\xecnh duy\u1ec7t ho\u1eb7c trang Web \u0111\xe3 ng\u0103n quy\u1ec1n truy c\u1eadp v\xe0o thi\u1ebft b\u1ecb.";
                        case "OverconstrainedError":
                            return "Kh\xf4ng c\xf3 thi\u1ebft b\u1ecb \u0111\xe1p \u1ee9ng y\xeau c\u1ea7u.";
                        case "SecurityError":
                            return "Vui l\xf2ng b\u1eadt Micro cho web.";
                        case "TypeError":
                            return "Kh\xf4ng t\xecm th\u1ea5y thi\u1ebft b\u1ecb.";
                        default:
                            return "\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra: " + e
                    }
                }
        },
        961: function(e, t, a) {},
        962: function(e, t, a) {},
        964: function(e, t, a) {},
        965: function(e, t, a) {},
        966: function(e, t, a) {
            "use strict";
            var n = a(14),
                r = a(15),
                c = a(26),
                l = a(27),
                o = a(19),
                i = a(0),
                s = a.n(i),
                u = a(33),
                m = a.n(u);

            function d(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = Object(o.a)(e);
                    if (t) {
                        var r = Object(o.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(l.a)(this, a)
                }
            }
            var f = function(e) {
                Object(c.a)(a, e);
                var t = d(a);

                function a() {
                    return Object(n.a)(this, a), t.apply(this, arguments)
                }
                return Object(r.a)(a, [{
                    key: "render",
                    value: function() {
                        return s.a.createElement("div", {
                            className: "slide carousel ".concat(this.props.isBanner && "banner")
                        }, s.a.createElement(m.a, {
                            height: "100%",
                            width: "100%",
                            widthRandomness: 0,
                            borderRadius: "4px"
                        }))
                    }
                }]), a
            }(i.PureComponent);
            t.a = f
        },
        967: function(e, t, a) {},
        988: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                c = a(871),
                l = a.n(c),
                o = a(55),
                i = a(1462),
                s = a(30),
                u = a(6),
                m = a(860),
                d = a.n(m),
                f = a(3),
                h = a(28),
                g = a(159),
                p = a(1269),
                y = a(1467),
                v = a(829),
                b = a(1468),
                E = a(157),
                C = function(e) {
                    var t = e.show,
                        a = e.setShow,
                        c = e.blockUserRequest,
                        l = e.author,
                        i = Object(n.useState)(""),
                        s = Object(o.a)(i, 2),
                        u = s[0],
                        m = s[1],
                        d = Object(n.useState)(""),
                        f = Object(o.a)(d, 2),
                        h = f[0],
                        C = f[1],
                        S = function() {
                            a(!1)
                        };
                    return r.a.createElement(g.a, {
                        show: t,
                        onHide: S
                    }, r.a.createElement(g.a.Header, {
                        closeButton: !0
                    }, r.a.createElement(g.a.Title, null, "C\u1ea5m chat")), r.a.createElement(g.a.Body, null, r.a.createElement(p.a, {
                        controlId: "formBasicText",
                        validationState: function() {
                            var e = u.length;
                            return e > 0 ? "success" : 0 === e || e > 255 ? "error" : null
                        }()
                    }, r.a.createElement(y.a, null, "L\xed do c\u1ea5m chat"), r.a.createElement(v.a, {
                        type: "text",
                        value: u,
                        placeholder: "l\xed do",
                        onChange: function(e) {
                            m(e.target.value), e.target.value && e.target.value.length > 255 ? C("T\u1ed1i \u0111a 255 k\xed t\u1ef1") : C("")
                        }
                    }), r.a.createElement(v.a.Feedback, null), r.a.createElement(b.a, null, h || null))), r.a.createElement(g.a.Footer, null, r.a.createElement(E.a, {
                        onClick: S
                    }, "Close"), r.a.createElement(E.a, {
                        bsStyle: "danger",
                        onClick: function() {
                            0 === u.trim().length ? C("Tr\u01b0\u1eddng n\xe0y kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng.") : c(l._id, {
                                status: "block",
                                reason: u
                            })
                        }
                    }, "Block")))
                },
                S = (a(961), function(e) {
                    var t = e.message,
                        a = e.createdAt,
                        c = e.author,
                        l = (e.isConnect, e.blockUserRequest),
                        m = /(https?:\/\/[^\s]+)\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g,
                        g = /playerduo.com|youtube.com|facebook.com|discord.com/gi,
                        p = /iframe|img/gi,
                        y = Object(n.useState)(!1),
                        v = Object(o.a)(y, 2),
                        b = v[0],
                        E = v[1];
                    if (!t) return null;
                    var S = t.split("\n").map(function(e, t) {
                        var a = e.replace(m, "<a target='_blank' href='$1' class='link'>$1</a>");
                        a.includes("<a target") && !g.test(a) && (a = e.replace(m, "")), p.test(a) && (a = a.replace("/>", ""));
                        var n = d()(a);
                        return 1 === e.indexOf("\n") ? -1 !== e.indexOf("https://") || -1 !== e.indexOf("http://") ? n : e.slice(e.indexOf("\n")) : -1 !== e.indexOf("https://") || -1 !== e.indexOf("http://") ? n : e ? n : r.a.createElement("br", null)
                    });
                    return r.a.createElement(i.a, {
                        className: "global_message__item"
                    }, r.a.createElement(i.a.Left, null, r.a.createElement(s.b, {
                        to: "/".concat(c.url || "page".concat(c._id)),
                        target: "_blank"
                    }, r.a.createElement(h.a, {
                        size: "sm",
                        url: f.d.getLinkImage(c.avatar),
                        sizeVip: 18,
                        rankVip: c.rank && f.d.urlRankVip_New(c.rank),
                        classRank: "rank-vip",
                        trustTypes: c.trustTypes && c.trustTypes[0]
                    }))), r.a.createElement(i.a.Body, {
                        className: "admin" === c.role || "manager" === c.role ? "admin" : ""
                    }, r.a.createElement("p", {
                        className: "chat-name"
                    }, r.a.createElement(s.b, {
                        to: "/".concat(c.url || "page".concat(c._id)),
                        target: "_blank"
                    }, r.a.createElement("span", {
                        className: "visible-xs"
                    }, r.a.createElement(u.c, {
                        value: a,
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric"
                    }))), r.a.createElement("strong", {
                        className: f.e.classOfVipName(c.rank)
                    }, c.name, " ", !["normal", void 0].includes(localStorage.role) && r.a.createElement("i", {
                        onClick: function() {
                            E(!0)
                        },
                        class: "fas fa-ban"
                    }), " ", ":", " ")), r.a.createElement("p", {
                        className: "mess-global"
                    }, S)), r.a.createElement(i.a.Right, {
                        className: "hidden-xs"
                    }, r.a.createElement(u.c, {
                        value: a,
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric"
                    })), r.a.createElement(C, {
                        author: c,
                        show: b,
                        setShow: E,
                        blockUserRequest: l
                    }))
                });
            S.defaultProps = {
                message: "",
                author: {}
            };
            var k = S,
                O = (a(962), function(e) {
                    var t = e.data,
                        a = e.fetchGlobalMessage,
                        c = e.page,
                        o = e.setPage,
                        i = e.extend,
                        s = e.isConnect,
                        u = e.blockUserRequest,
                        m = t || {},
                        d = m.messages,
                        f = m.loadingMessage,
                        h = void 0 === f ? {} : f,
                        g = m.hasMore,
                        p = m.idUserAuthorChat,
                        y = Object(n.useRef)(null);
                    Object(n.useEffect)(function() {
                        h.message || 1 !== c || s || (a(c), o(c + 1)), y.current && Array.isArray(d) && d.length <= 20 && y.current.scrollIntoView(!1)
                    }, [d]), Object(n.useEffect)(function() {
                        s && (a(1), o(2), y.current.scrollIntoView(!1))
                    }, [s]);
                    Object(n.useEffect)(function() {
                        var e = document.getElementById("global-chat"),
                            t = i ? 400 : 270;
                        if (window.scrollY < t && e) {
                            var a = function(e) {
                                    if (e) {
                                        var t = getComputedStyle(e),
                                            a = parseInt(t.paddingTop) + parseInt(t.paddingBottom);
                                        return e.clientHeight - a
                                    }
                                    return 0
                                }(e),
                                n = e.scrollHeight - (e.scrollTop + a) < 200;
                            (localStorage.idUser === p || !h.newMessage && e && n) && y.current.scrollIntoView(!1)
                        }
                    }, [h.newMessage]);
                    return r.a.createElement("div", {
                        id: "global-chat",
                        className: "global-chat-display"
                    }, r.a.createElement(l.a, {
                        pageStart: 0,
                        loadMore: function() {
                            d && d[0] && (h.message || (a(c), o(c + 1)))
                        },
                        hasMore: g,
                        loader: r.a.createElement("div", {
                            className: "text-center"
                        }, r.a.createElement("i", {
                            className: "fa fa-spinner fa-spin"
                        })),
                        useWindow: !1,
                        initialLoad: !1,
                        threshold: 20,
                        isReverse: !0
                    }, s ? (d || []).map(function(e) {
                        return r.a.createElement(k, Object.assign({
                            key: e._id,
                            author: e.sender || {},
                            message: e.body ? e.body.content : "",
                            isConnect: !0,
                            blockUserRequest: u
                        }, e))
                    }) : (d || []).map(function(e) {
                        return r.a.createElement(k, Object.assign({
                            key: e._id
                        }, e, {
                            blockUserRequest: u
                        }))
                    }), r.a.createElement("div", {
                        ref: y
                    })))
                }),
                N = a(40),
                j = a(7),
                w = a.n(j),
                x = a(864),
                R = a(161),
                P = a(1090),
                M = a(863),
                G = (a(964), function(e) {
                    var t = e.isHide,
                        a = e.setIsHide,
                        n = Object(M.b)(),
                        c = n.volume,
                        l = n.setVolume;
                    return r.a.createElement(r.a.Fragment, null, 0 === c ? r.a.createElement("i", {
                        className: "fa fa-volume-mute"
                    }) : r.a.createElement("i", {
                        className: "fas fa-volume-up"
                    }), " ", r.a.createElement("span", null, "\xc2m l\u01b0\u1ee3ng"), r.a.createElement("div", {
                        className: "volume__voice "
                    }, r.a.createElement("div", {
                        className: "volume__voice--control ".concat(t ? "hide" : "show")
                    }, r.a.createElement(P.a, {
                        styles: {
                            track: {
                                backgroundColor: "#f5f5f5"
                            },
                            active: {
                                backgroundColor: "#f0564a"
                            },
                            thumb: {
                                width: 20,
                                height: 20
                            },
                            disabled: {
                                opacity: .5
                            }
                        },
                        onDragEnd: function() {
                            a(!0)
                        },
                        yreverse: !0,
                        axis: "y",
                        y: c,
                        onChange: function(e) {
                            var t = e.y;
                            l(t)
                        }
                    }))))
                }),
                D = a(4),
                I = function() {
                    Object(M.b)().muteLocalMic;
                    var e = Object(n.useState)(!1),
                        t = Object(o.a)(e, 2),
                        a = t[0],
                        c = (t[1], Object(N.c)());
                    return r.a.createElement("p", {
                        className: "btn-micro",
                        onClick: function() {
                            return c(Object(D.c)(!1, "H\u1ec7 th\u1ed1ng \xe2m thanh \u0111ang b\u1ea3o tr\xec"))
                        }
                    }, a ? r.a.createElement(r.a.Fragment, null, r.a.createElement("i", {
                        className: "fas fa-microphone"
                    }), " ", r.a.createElement("span", null, "T\u1eaft mic")) : r.a.createElement(r.a.Fragment, null, r.a.createElement("i", {
                        class: "fas fa-microphone-slash"
                    }), " ", r.a.createElement("span", null, "B\u1eadt mic")))
                },
                A = Object(u.g)(function(e) {
                    var t = e.intl,
                        a = e.requestGlobalMessage,
                        c = e.setNotificationStatus,
                        l = e.extend,
                        i = e.setExtend,
                        s = e.isConnect,
                        u = e.disabledChat,
                        m = Object(n.useState)(""),
                        d = Object(o.a)(m, 2),
                        h = d[0],
                        g = d[1],
                        y = Object(n.useState)(!0),
                        b = Object(o.a)(y, 2),
                        E = b[0],
                        C = b[1],
                        S = Object(n.useState)(!1),
                        k = Object(o.a)(S, 2),
                        O = k[0],
                        j = k[1],
                        P = Object(N.c)(),
                        M = Object(N.d)(function(e) {
                            return e.gameCategory.detailRoom
                        }),
                        D = function(e) {
                            if ((0 !== h.trim().length && (!(h.trim().length > 255) || (c(!1, t.formatMessage({
                                id: "err.max200char"
                            })), 0)) && f.d.filterChar(h) || e) && localStorage.token) {
                                var n = {
                                    body: {
                                        content: e || h.trim()
                                    },
                                    type: "text"
                                };
                                a(s ? n : h.trim())
                            }
                            g("")
                        };
                    return r.a.createElement(p.a, {
                        controlId: "formBasicText",
                        className: s && "connect-room"
                    }, r.a.createElement(v.a, {
                        type: "text",
                        value: h,
                        placeholder: e.intl.formatMessage({
                            id: "playerHistory.reply"
                        }),
                        onChange: function(e) {
                            g(e.target.value)
                        },
                        onKeyPress: function(e) {
                            e.shiftKey || 13 === e.charCode && (D(), e.preventDefault())
                        },
                        maxLength: 255,
                        disabled: !localStorage.getItem("token") || u
                    }), r.a.createElement(v.a.Feedback, null), i && r.a.createElement("p", {
                        className: "extend-chat",
                        onClick: function() {
                            return i(!l)
                        }
                    }, r.a.createElement("i", {
                        className: "fa fa-bars"
                    })), s && r.a.createElement("div", {
                        className: "connect-chat"
                    }, r.a.createElement(I, null), r.a.createElement("p", {
                        className: "btn-volume",
                        onClick: function() {
                            return C(!E)
                        }
                    }, r.a.createElement(G, {
                        isHide: E,
                        setIsHide: C
                    })), r.a.createElement("p", {
                        className: "btn-tip",
                        onClick: function() {
                            if (localStorage.token) return localStorage.idUser === w()(M, "authorId._id", "") ? c(!1, t.formatMessage({
                                id: "playerDonate.yourself"
                            })) : void j(!0)
                        }
                    }, r.a.createElement("i", {
                        className: "fab fa-bitcoin"
                    }), " ", r.a.createElement("span", null, "Tip")), r.a.createElement(x.a, {
                        show: O,
                        close: function() {
                            return j(!1)
                        },
                        playerInformation: {
                            playerSetting: {
                                nickName: w()(M, "authorId.name", "")
                            },
                            _id: w()(M, "authorId._id", "")
                        },
                        submit: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                t = arguments.length > 1 ? arguments[1] : void 0,
                                a = arguments.length > 2 ? arguments[2] : void 0,
                                n = arguments.length > 3 ? arguments[3] : void 0,
                                r = arguments.length > 4 ? arguments[4] : void 0,
                                c = arguments.length > 5 ? arguments[5] : void 0;
                            P(Object(R.b)({
                                amount: e,
                                displayName: t,
                                message: a,
                                pdUserReceive: n,
                                unlockTime: r,
                                lang: c
                            })), D("\u0110\xe3 \u1ee7ng h\u1ed9 <strong>".concat(e / 1e3, "</strong> <i class='fab fa-bitcoin' />")), j(!1)
                        },
                        unlockSecurityCode: function(e) {
                            return P(Object(R.f)(e))
                        },
                        isConnect: !0
                    })))
                });
            a(965), t.a = function(e) {
                var t = e.data,
                    a = e.fetchGlobalMessage,
                    n = e.requestGlobalMessage,
                    c = e.setNotificationStatus,
                    l = e.page,
                    o = e.setPage,
                    i = e.extend,
                    s = e.setExtend,
                    u = e.isConnect,
                    m = e.disabledChat,
                    d = e.blockUserRequest;
                return r.a.createElement("div", {
                    className: "global-chat"
                }, r.a.createElement(O, {
                    data: t,
                    fetchGlobalMessage: a,
                    page: l,
                    setPage: o,
                    extend: i,
                    isConnect: u,
                    blockUserRequest: d
                }), r.a.createElement(A, {
                    requestGlobalMessage: n,
                    setNotificationStatus: c,
                    extend: i,
                    setExtend: s,
                    isConnect: u,
                    disabledChat: m
                }))
            }
        }
    }
]);
