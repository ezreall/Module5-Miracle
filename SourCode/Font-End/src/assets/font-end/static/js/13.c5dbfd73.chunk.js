(window.webpackJsonp = window.webpackJsonp || []).push([
    [13], {
        1058: function(e, t) {},
        1059: function(e, t) {},
        1065: function(e, t, a) {
            "use strict";
            var n = a(11),
                r = a(20),
                c = a(17),
                i = a(16),
                o = a.n(i),
                l = a(0),
                s = a.n(l),
                u = a(1),
                m = a.n(u),
                d = a(36),
                f = a.n(d),
                p = a(10),
                g = {
                    fluid: m.a.bool,
                    componentClass: f.a
                },
                h = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return Object(c.a)(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.fluid,
                            a = e.componentClass,
                            c = e.className,
                            i = Object(r.a)(e, ["fluid", "componentClass", "className"]),
                            l = Object(p.f)(i),
                            u = l[0],
                            m = l[1],
                            d = Object(p.e)(u, t && "fluid");
                        return s.a.createElement(a, Object(n.a)({}, m, {
                            className: o()(c, d)
                        }))
                    }, t
                }(s.a.Component);
            h.propTypes = g, h.defaultProps = {
                componentClass: "div",
                fluid: !1
            }, t.a = Object(p.a)("container", h)
        },
        1306: function(e, t, a) {
            "use strict";
            var n = a(60);
            t.__esModule = !0, t.default = void 0;
            var r = n(a(1307));
            t.end = r.default;
            var c = n(a(437));
            t.properties = c.default;
            var i = {
                end: r.default,
                properties: c.default
            };
            t.default = i
        },
        1307: function(e, t, a) {
            "use strict";
            var n = a(60);
            t.__esModule = !0, t.default = void 0;
            var r = n(a(437)),
                c = n(a(175));

            function i(e, t, a) {
                var n, c = {
                    target: e,
                    currentTarget: e
                };

                function i(e) {
                    e.target === e.currentTarget && (clearTimeout(n), e.target.removeEventListener(r.default.end, i), t.call(this))
                }
                r.default.end ? null == a && (a = l(e) || 0) : a = 0, r.default.end ? (e.addEventListener(r.default.end, i, !1), n = setTimeout(function() {
                    return i(c)
                }, 1.5 * (a || 100))) : setTimeout(i.bind(null, c), 0)
            }
            i._parseDuration = l;
            var o = i;

            function l(e) {
                var t = (0, c.default)(e, r.default.duration),
                    a = -1 === t.indexOf("ms") ? 1e3 : 1;
                return parseFloat(t) * a
            }
            t.default = o, e.exports = t.default
        },
        1308: function(e, t, a) {
            e.exports = a.p + "static/media/bg-room.b2a2150d.jpg"
        },
        1309: function(e, t, a) {},
        1310: function(e, t, a) {
            e.exports = a.p + "static/media/bgtipconnect.ec40c72c.gif"
        },
        1311: function(e, t, a) {},
        1477: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                c = a(50),
                i = a(58),
                o = a(40),
                l = a(55),
                s = a(3),
                u = a(7),
                m = a.n(u),
                d = a(8),
                f = a.n(d),
                p = a(2),
                g = a(13),
                h = a(80),
                b = a(835),
                E = a(833),
                v = a(157),
                y = a(1462),
                k = a(41),
                O = a(9),
                j = r.a.memo(function(e) {
                    var t = e.loading,
                        a = e.listData,
                        n = void 0 === a ? [] : a,
                        c = e.params,
                        i = e.item,
                        o = e.type,
                        l = e.history,
                        u = e.page,
                        d = e.categories,
                        f = e.fetchDetailGameCategory,
                        p = e.setGameCategory,
                        g = e.setPage;
                    return r.a.createElement(r.a.Fragment, null, 0 === n.length ? r.a.createElement(y.a, {
                        className: "item-tab-data"
                    }, r.a.createElement(y.a.Body, {
                        align: "middle"
                    }, r.a.createElement("p", {
                        className: "center"
                    }, "No Room"))) : n.map(function(e, t) {
                        return r.a.createElement(y.a, {
                            key: e._id + t,
                            className: "item-tab-data ".concat(c.id === e._id ? "active" : ""),
                            onClick: function() {
                                return function(e, t) {
                                    p(d, e), l.push("/game/".concat(e, "/").concat(t))
                                }(i.hashtag, e._id)
                            }
                        }, r.a.createElement(y.a.Left, {
                            align: "middle"
                        }, r.a.createElement(k.a, {
                            className: "avt-img",
                            src: s.d.getLinkImage(e.avatar || localStorage.avatar)
                        })), r.a.createElement(y.a.Body, {
                            align: "middle"
                        }, r.a.createElement("p", null, e.name)), r.a.createElement(y.a.Right, {
                            align: "middle"
                        }, "(", m()(e, "teammates", []).length, "/", e.maxTeammate, ")"))
                    }), !t.listRoom && n.length > 0 && r.a.createElement("p", {
                        className: "see-more",
                        onClick: function() {
                            return function(e, t) {
                                !t && p(d, e.hashtag), g(u + 1), f({
                                    gameId: e._id,
                                    type: !0
                                }, u)
                            }(i, o)
                        }
                    }, r.a.createElement("i", {
                        className: "fa fa-caret-down"
                    }), r.a.createElement(O.a, {
                        id: "notify.seemore"
                    })))
                }),
                N = r.a.memo(function(e) {
                    var t = e.history,
                        a = e.params,
                        n = e.room,
                        c = e.game,
                        i = e.displayModalSetting,
                        o = e.setRoom,
                        l = function(e) {
                            if (n._id && !e) return t.push("/game/".concat(c.hashtag, "/").concat(n._id));
                            i(!0)
                        };
                    return r.a.createElement(y.a, {
                        className: "item-tab-data your-room ".concat(a.id === n._id ? "active" : "")
                    }, r.a.createElement(y.a.Left, {
                        align: "middle",
                        onClick: function() {
                            return l()
                        }
                    }, r.a.createElement(k.a, {
                        className: "avt-img",
                        src: s.d.getLinkImage(n.avatar || localStorage.avatar)
                    })), r.a.createElement(y.a.Body, {
                        align: "middle",
                        onClick: function() {
                            return l()
                        }
                    }, r.a.createElement("p", null, n._id ? n.name : "T\u1ea1o ph\xf2ng")), r.a.createElement(y.a.Right, {
                        align: "middle",
                        onClick: function() {
                            return l(n._id)
                        }
                    }, n._id ? r.a.createElement("i", {
                        class: "fas fa-pen",
                        onClick: function() {
                            return o(n)
                        }
                    }) : r.a.createElement("i", {
                        class: "fas fa-plus"
                    }), n._id && r.a.createElement("span", {
                        className: "count-people"
                    }, "(", m()(n, "teammates", []).length, "/", n.maxTeammate, ")")))
                }),
                w = a(159),
                I = (a(974), Object(n.forwardRef)(function(e, t) {
                    var a = e.children,
                        c = e.title,
                        i = e.setRoom,
                        o = Object(n.useState)(!1),
                        s = Object(l.a)(o, 2),
                        u = s[0],
                        m = s[1];
                    return Object(n.useImperativeHandle)(t, function() {
                        return {
                            handleVisible: function(e) {
                                m(e), !e && i && i(null)
                            }
                        }
                    }), r.a.createElement(w.a, {
                        show: u,
                        onHide: function() {
                            i && i(null), m(!1)
                        },
                        "aria-labelledby": "contained-modal-title-lg",
                        className: "connect-modal"
                    }, r.a.createElement(w.a.Header, {
                        closeButton: !0
                    }, r.a.createElement(w.a.Title, {
                        id: "contained-modal-title-lg"
                    }, c)), r.a.createElement(w.a.Body, null, r.a.createElement("div", {
                        className: "aside form--modal"
                    }, a)))
                })),
                C = r.a.memo(I),
                _ = a(990),
                S = a(39),
                x = a(97),
                R = a(79),
                M = a(33),
                L = a.n(M),
                P = function() {
                    return r.a.createElement(x.a, null, Object(S.a)(Array(6).keys()).map(function(e, t) {
                        return r.a.createElement(R.a, {
                            md: 4,
                            sm: 4,
                            xs: 6
                        }, r.a.createElement(L.a, {
                            height: "90px",
                            width: "90px",
                            widthRandomness: 0,
                            borderRadius: "50%"
                        }), r.a.createElement("div", {
                            className: "title-class"
                        }, r.a.createElement(L.a, {
                            height: "45px",
                            width: "150px",
                            widthRandomness: 0,
                            borderRadius: "4px"
                        })))
                    }))
                },
                T = function() {
                    return r.a.createElement("div", {
                        role: "tablist",
                        className: "panel-group"
                    }, Object(S.a)(Array(6).keys()).map(function(e, t) {
                        return r.a.createElement("div", {
                            className: "panel panel-default",
                            key: e + "LoadLeft"
                        }, r.a.createElement("div", {
                            className: "panel-heading"
                        }, r.a.createElement("div", {
                            className: "box-class panel-title"
                        }, r.a.createElement("a", null, r.a.createElement(L.a, {
                            height: "42px",
                            width: "100%",
                            widthRandomness: 0,
                            borderRadius: "4px"
                        })))))
                    }))
                },
                A = function() {
                    return r.a.createElement("div", {
                        className: "tab-data-info"
                    }, Object(S.a)(Array(10).keys()).map(function(e, t) {
                        return r.a.createElement("div", {
                            className: "box-info",
                            key: e + "LoadRight"
                        }, r.a.createElement(L.a, {
                            height: "30px",
                            width: "100%",
                            widthRandomness: 0,
                            borderRadius: "4px"
                        }))
                    }))
                },
                U = function() {
                    return r.a.createElement("div", {
                        className: "box-room-chat hidden-xs hidden-sm"
                    }, r.a.createElement(L.a, {
                        height: "100%",
                        width: "100%",
                        widthRandomness: 0,
                        borderRadius: "4px"
                    }))
                },
                D = function() {
                    return r.a.createElement("div", {
                        className: "box-room-slot loading"
                    }, r.a.createElement("div", {
                        className: "slot-action hidden-md hidden-lg"
                    }, r.a.createElement(L.a, {
                        height: "100%",
                        width: "100%",
                        widthRandomness: 0,
                        borderRadius: "4px"
                    })), r.a.createElement("div", {
                        className: "slot-main"
                    }, r.a.createElement(L.a, {
                        height: "100%",
                        width: "100%",
                        widthRandomness: 0,
                        borderRadius: "4px"
                    })), r.a.createElement("div", {
                        className: "slot-sub"
                    }, r.a.createElement(L.a, {
                        height: "100%",
                        width: "100%",
                        widthRandomness: 0,
                        borderRadius: "4px"
                    })), r.a.createElement("div", {
                        className: "slot-action hidden-xs hidden-sm"
                    }, r.a.createElement(L.a, {
                        height: "100%",
                        width: "100%",
                        widthRandomness: 0,
                        borderRadius: "4px"
                    })), r.a.createElement("div", {
                        className: "message-form hidden-md hidden-lg"
                    }, r.a.createElement(L.a, {
                        height: "100%",
                        width: "100%",
                        widthRandomness: 0,
                        borderRadius: "4px"
                    })))
                },
                q = function(e) {
                    var t = e.history,
                        a = e.params,
                        c = e.drawer,
                        i = e.gameConnect,
                        o = e.setActiveCategory,
                        u = e.fetchDetailGameCategory,
                        d = e.fetchQuickRoomEntry,
                        y = e.setGameCategory,
                        k = e.loading,
                        w = e.dataUser,
                        I = Object(h.a)(e, ["history", "params", "drawer", "gameConnect", "setActiveCategory", "fetchDetailGameCategory", "fetchQuickRoomEntry", "setGameCategory", "loading", "dataUser"]),
                        S = e.requestUpdateRoom,
                        x = e.requestCreateRoom,
                        R = i || {},
                        M = R.loading,
                        L = R.categories,
                        P = void 0 === L ? [] : L,
                        A = R.category,
                        U = void 0 === A ? {} : A,
                        D = R.detailCategory,
                        q = R.listRoom,
                        G = void 0 === q ? [] : q,
                        F = R.yourRooms,
                        B = void 0 === F ? {} : F,
                        H = Object(n.useState)(1),
                        V = Object(l.a)(H, 2),
                        z = V[0],
                        Y = V[1],
                        W = Object(n.useState)(),
                        K = Object(l.a)(W, 2),
                        Z = K[0],
                        J = K[1],
                        $ = Object(n.useState)({
                            id: "",
                            hashtag: ""
                        }),
                        Q = Object(l.a)($, 2),
                        X = Q[0],
                        ee = Q[1],
                        te = Object(n.useRef)();
                    Object(n.useEffect)(function() {
                        U._id && (Y(2), u({
                            gameId: U._id,
                            type: !0
                        }, 1)), ee({
                            id: U._id,
                            hashtag: U.hashtag
                        })
                    }, [U]);
                    var ae = function(e) {
                            e || J(null), te && te.current.handleVisible(e)
                        },
                        ne = function() {
                            var e = Object(g.a)(f.a.mark(function e(t) {
                                var n;
                                return f.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!Z) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.next = 3, S(Object(p.a)({}, t, {
                                                status: t.status || 2,
                                                _id: Z._id,
                                                avatar: w.avatar,
                                                inRoom: Z._id === a.id,
                                                gameId: X.id,
                                                authorId: Z.authorId,
                                                room: Z
                                            }));
                                        case 3:
                                            e.next = 8;
                                            break;
                                        case 5:
                                            return n = P.find(function(e) {
                                                return e._id === X.id
                                            }), e.next = 8, x(Object(p.a)({}, t, {
                                                status: t.status,
                                                avatar: w.avatar,
                                                isUpdateRoom: !0,
                                                gameId: X.id,
                                                room: {
                                                    gameId: n
                                                },
                                                callback: function() {
                                                    return o(X.id)
                                                }
                                            }));
                                        case 8:
                                            ae(!1), J(null);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        re = function(e, n) {
                            return r.a.createElement(r.a.Fragment, null, r.a.createElement(b.a.Heading, {
                                onClick: function() {
                                    return function(e) {
                                        var t = e._id,
                                            a = e.hashtag;
                                        return U && U._id ? (ee({
                                            id: "",
                                            hashtag: ""
                                        }), y([], "")) : X.id === t ? ee({
                                            id: "",
                                            hashtag: ""
                                        }) : (u({
                                            gameId: t
                                        }, D[t] ? 0 : 1), void ee({
                                            id: t,
                                            hashtag: a
                                        }))
                                    }(e)
                                }
                            }, r.a.createElement(b.a.Title, {
                                toggle: !0,
                                className: "box-class"
                            }, r.a.createElement("div", {
                                className: "room-class ".concat(n ? "category" : "")
                            }, n && r.a.createElement("i", {
                                className: "fa fa-2x fa-caret-left"
                            }), r.a.createElement("img", {
                                src: s.d.getLinkImage(e.avatar, "/game_avatars")
                            }), r.a.createElement("div", {
                                className: "title-class"
                            }, r.a.createElement("p", null, e.name), r.a.createElement("p", null, "(", e.activeCount, " Online)"))))), r.a.createElement(b.a.Body, {
                                collapsible: !n,
                                expanded: n,
                                className: "room-panel-body ".concat(n ? "category" : "")
                            }, localStorage.token && r.a.createElement(N, {
                                history: t,
                                params: a,
                                room: B[X.id] || {},
                                game: e,
                                displayModalSetting: ae,
                                setRoom: J
                            }), r.a.createElement(j, {
                                item: e,
                                params: a,
                                listData: n ? G : D[e._id],
                                type: n,
                                history: t,
                                setGameCategory: y,
                                fetchDetailGameCategory: u,
                                setPage: Y,
                                page: z,
                                categories: P,
                                loading: M
                            })))
                        };
                    return M.category ? r.a.createElement("div", {
                        className: "connect__view--left ".concat(c.left && "show-mobile")
                    }, r.a.createElement(T, null)) : r.a.createElement("div", {
                        className: "connect__view--left ".concat(c.left && "show-mobile")
                    }, U && U._id ? r.a.createElement(b.a, null, re(U, !0)) : r.a.createElement(E.a, {
                        accordion: !0
                    }, P.map(function(e, t) {
                        return r.a.createElement(b.a, {
                            eventKey: t + 1,
                            key: e._id + t
                        }, re(e))
                    })), !(!X.id || a.id || !localStorage.token) && (U && U._id ? G && G.length > 0 : D[X.id] && D[X.id].length > 0) && r.a.createElement(v.a, {
                        bsStyle: "danger",
                        className: "btn-join-room btn-fill",
                        onClick: function() {
                            var e = D[X.id] || [];
                            U && U._id && (e = G), X.id && !a.id && e[0]._id && d({
                                idGame: X.id,
                                hashtag: X.hashtag,
                                idRoom: e[0]._id,
                                history: t
                            })
                        }
                    }, r.a.createElement(O.a, {
                        id: "button.joinfastroom"
                    })), r.a.createElement(C, {
                        ref: te,
                        title: m()(Z, "_id", "") ? "Ch\u1ec9nh s\u1eeda ph\xf2ng" : "T\u1ea1o ph\xf2ng",
                        setRoom: J
                    }, r.a.createElement(_.a, Object.assign({
                        gameId: X.id,
                        room: Z,
                        onUpdate: ne,
                        loading: k || {}
                    }, I))))
                },
                G = a(1065),
                F = a(11),
                B = a(20),
                H = a(17),
                V = a(29),
                z = a(16),
                Y = a.n(z),
                W = a(1),
                K = a.n(W),
                Z = a(36),
                J = a.n(Z),
                $ = a(10),
                Q = {
                    componentClass: J.a
                },
                X = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return Object(H.a)(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.componentClass,
                            a = e.className,
                            n = Object(B.a)(e, ["componentClass", "className"]),
                            c = Object($.f)(n),
                            i = c[0],
                            o = c[1],
                            l = Object($.d)(i);
                        return r.a.createElement(t, Object(F.a)({}, o, {
                            className: Y()(a, l)
                        }))
                    }, t
                }(r.a.Component);
            X.propTypes = Q, X.defaultProps = {
                componentClass: "div"
            };
            var ee = Object($.a)("carousel-caption", X),
                te = a(45),
                ae = a.n(te),
                ne = a(1306),
                re = a.n(ne),
                ce = {
                    direction: K.a.oneOf(["prev", "next"]),
                    onAnimateOutEnd: K.a.func,
                    active: K.a.bool,
                    animateIn: K.a.bool,
                    animateOut: K.a.bool,
                    index: K.a.number
                },
                ie = function(e) {
                    function t(t, a) {
                        var n;
                        return (n = e.call(this, t, a) || this).handleAnimateOutEnd = n.handleAnimateOutEnd.bind(Object(V.a)(Object(V.a)(n))), n.state = {
                            direction: null
                        }, n.isUnmounted = !1, n
                    }
                    Object(H.a)(t, e);
                    var a = t.prototype;
                    return a.componentWillReceiveProps = function(e) {
                        this.props.active !== e.active && this.setState({
                            direction: null
                        })
                    }, a.componentDidUpdate = function(e) {
                        var t = this,
                            a = this.props.active,
                            n = e.active;
                        !a && n && re.a.end(ae.a.findDOMNode(this), this.handleAnimateOutEnd), a !== n && setTimeout(function() {
                            return t.startAnimation()
                        }, 20)
                    }, a.componentWillUnmount = function() {
                        this.isUnmounted = !0
                    }, a.handleAnimateOutEnd = function() {
                        this.isUnmounted || this.props.onAnimateOutEnd && this.props.onAnimateOutEnd(this.props.index)
                    }, a.startAnimation = function() {
                        this.isUnmounted || this.setState({
                            direction: "prev" === this.props.direction ? "right" : "left"
                        })
                    }, a.render = function() {
                        var e = this.props,
                            t = e.direction,
                            a = e.active,
                            n = e.animateIn,
                            c = e.animateOut,
                            i = e.className,
                            o = Object(B.a)(e, ["direction", "active", "animateIn", "animateOut", "className"]);
                        delete o.onAnimateOutEnd, delete o.index;
                        var l = {
                            item: !0,
                            active: a && !n || c
                        };
                        return t && a && n && (l[t] = !0), this.state.direction && (n || c) && (l[this.state.direction] = !0), r.a.createElement("div", Object(F.a)({}, o, {
                            className: Y()(i, l)
                        }))
                    }, t
                }(r.a.Component);
            ie.propTypes = ce, ie.defaultProps = {
                active: !1,
                animateIn: !1,
                animateOut: !1
            };
            var oe = ie,
                le = a(378),
                se = a(87),
                ue = a(52),
                me = {
                    slide: K.a.bool,
                    indicators: K.a.bool,
                    interval: K.a.number,
                    controls: K.a.bool,
                    pauseOnHover: K.a.bool,
                    wrap: K.a.bool,
                    onSelect: K.a.func,
                    onSlideEnd: K.a.func,
                    activeIndex: K.a.number,
                    defaultActiveIndex: K.a.number,
                    direction: K.a.oneOf(["prev", "next"]),
                    prevIcon: K.a.node,
                    prevLabel: K.a.string,
                    nextIcon: K.a.node,
                    nextLabel: K.a.string
                },
                de = {
                    slide: !0,
                    interval: 5e3,
                    pauseOnHover: !0,
                    wrap: !0,
                    indicators: !0,
                    controls: !0,
                    prevIcon: r.a.createElement(le.a, {
                        glyph: "chevron-left"
                    }),
                    prevLabel: "Previous",
                    nextIcon: r.a.createElement(le.a, {
                        glyph: "chevron-right"
                    }),
                    nextLabel: "Next"
                },
                fe = function(e) {
                    function t(t, a) {
                        var n;
                        (n = e.call(this, t, a) || this).handleMouseOver = n.handleMouseOver.bind(Object(V.a)(Object(V.a)(n))), n.handleMouseOut = n.handleMouseOut.bind(Object(V.a)(Object(V.a)(n))), n.handlePrev = n.handlePrev.bind(Object(V.a)(Object(V.a)(n))), n.handleNext = n.handleNext.bind(Object(V.a)(Object(V.a)(n))), n.handleItemAnimateOutEnd = n.handleItemAnimateOutEnd.bind(Object(V.a)(Object(V.a)(n)));
                        var r = t.defaultActiveIndex;
                        return n.state = {
                            activeIndex: null != r ? r : 0,
                            previousActiveIndex: null,
                            direction: null
                        }, n.isUnmounted = !1, n
                    }
                    Object(H.a)(t, e);
                    var a = t.prototype;
                    return a.componentDidMount = function() {
                        this.waitForNext()
                    }, a.componentWillReceiveProps = function(e) {
                        var t = this.getActiveIndex();
                        null != e.activeIndex && e.activeIndex !== t && (clearTimeout(this.timeout), this.setState({
                            previousActiveIndex: t,
                            direction: null != e.direction ? e.direction : this.getDirection(t, e.activeIndex)
                        })), null == e.activeIndex && this.state.activeIndex >= e.children.length && this.setState({
                            activeIndex: 0,
                            previousActiveIndex: null,
                            direction: null
                        })
                    }, a.componentWillUnmount = function() {
                        clearTimeout(this.timeout), this.isUnmounted = !0
                    }, a.getActiveIndex = function() {
                        var e = this.props.activeIndex;
                        return null != e ? e : this.state.activeIndex
                    }, a.getDirection = function(e, t) {
                        return e === t ? null : e > t ? "prev" : "next"
                    }, a.handleItemAnimateOutEnd = function() {
                        var e = this;
                        this.setState({
                            previousActiveIndex: null,
                            direction: null
                        }, function() {
                            e.waitForNext(), e.props.onSlideEnd && e.props.onSlideEnd()
                        })
                    }, a.handleMouseOut = function() {
                        this.isPaused && this.play()
                    }, a.handleMouseOver = function() {
                        this.props.pauseOnHover && this.pause()
                    }, a.handleNext = function(e) {
                        var t = this.getActiveIndex() + 1;
                        if (t > ue.a.count(this.props.children) - 1) {
                            if (!this.props.wrap) return;
                            t = 0
                        }
                        this.select(t, e, "next")
                    }, a.handlePrev = function(e) {
                        var t = this.getActiveIndex() - 1;
                        if (t < 0) {
                            if (!this.props.wrap) return;
                            t = ue.a.count(this.props.children) - 1
                        }
                        this.select(t, e, "prev")
                    }, a.pause = function() {
                        this.isPaused = !0, clearTimeout(this.timeout)
                    }, a.play = function() {
                        this.isPaused = !1, this.waitForNext()
                    }, a.select = function(e, t, a) {
                        if (clearTimeout(this.timeout), !this.isUnmounted) {
                            var n = this.props.slide ? this.getActiveIndex() : null;
                            a = a || this.getDirection(n, e);
                            var r = this.props.onSelect;
                            if (r && (r.length > 1 ? (t ? (t.persist(), t.direction = a) : t = {
                                direction: a
                            }, r(e, t)) : r(e)), null == this.props.activeIndex && e !== n) {
                                if (null != this.state.previousActiveIndex) return;
                                this.setState({
                                    activeIndex: e,
                                    previousActiveIndex: n,
                                    direction: a
                                })
                            }
                        }
                    }, a.waitForNext = function() {
                        var e = this.props,
                            t = e.slide,
                            a = e.interval,
                            n = e.activeIndex;
                        !this.isPaused && t && a && null == n && (this.timeout = setTimeout(this.handleNext, a))
                    }, a.renderControls = function(e) {
                        var t = e.wrap,
                            a = e.children,
                            n = e.activeIndex,
                            c = e.prevIcon,
                            i = e.nextIcon,
                            o = e.bsProps,
                            l = e.prevLabel,
                            s = e.nextLabel,
                            u = Object($.e)(o, "control"),
                            m = ue.a.count(a);
                        return [(t || 0 !== n) && r.a.createElement(se.a, {
                            key: "prev",
                            className: Y()(u, "left"),
                            onClick: this.handlePrev
                        }, c, l && r.a.createElement("span", {
                            className: "sr-only"
                        }, l)), (t || n !== m - 1) && r.a.createElement(se.a, {
                            key: "next",
                            className: Y()(u, "right"),
                            onClick: this.handleNext
                        }, i, s && r.a.createElement("span", {
                            className: "sr-only"
                        }, s))]
                    }, a.renderIndicators = function(e, t, a) {
                        var n = this,
                            c = [];
                        return ue.a.forEach(e, function(e, a) {
                            c.push(r.a.createElement("li", {
                                key: a,
                                className: a === t ? "active" : null,
                                onClick: function(e) {
                                    return n.select(a, e)
                                }
                            }), " ")
                        }), r.a.createElement("ol", {
                            className: Object($.e)(a, "indicators")
                        }, c)
                    }, a.render = function() {
                        var e = this,
                            t = this.props,
                            a = t.slide,
                            c = t.indicators,
                            i = t.controls,
                            o = t.wrap,
                            l = t.prevIcon,
                            s = t.prevLabel,
                            u = t.nextIcon,
                            m = t.nextLabel,
                            d = t.className,
                            f = t.children,
                            p = Object(B.a)(t, ["slide", "indicators", "controls", "wrap", "prevIcon", "prevLabel", "nextIcon", "nextLabel", "className", "children"]),
                            g = this.state,
                            h = g.previousActiveIndex,
                            b = g.direction,
                            E = Object($.g)(p, ["interval", "pauseOnHover", "onSelect", "onSlideEnd", "activeIndex", "defaultActiveIndex", "direction"]),
                            v = E[0],
                            y = E[1],
                            k = this.getActiveIndex(),
                            O = Object(F.a)({}, Object($.d)(v), {
                                slide: a
                            });
                        return r.a.createElement("div", Object(F.a)({}, y, {
                            className: Y()(d, O),
                            onMouseOver: this.handleMouseOver,
                            onMouseOut: this.handleMouseOut
                        }), c && this.renderIndicators(f, k, v), r.a.createElement("div", {
                            className: Object($.e)(v, "inner")
                        }, ue.a.map(f, function(t, r) {
                            var c = r === k,
                                i = a && r === h;
                            return Object(n.cloneElement)(t, {
                                active: c,
                                index: r,
                                animateOut: i,
                                animateIn: c && null != h && a,
                                direction: b,
                                onAnimateOutEnd: i ? e.handleItemAnimateOutEnd : null
                            })
                        })), i && this.renderControls({
                            wrap: o,
                            children: f,
                            activeIndex: k,
                            prevIcon: l,
                            prevLabel: s,
                            nextIcon: u,
                            nextLabel: m,
                            bsProps: v
                        }))
                    }, t
                }(r.a.Component);
            fe.propTypes = me, fe.defaultProps = de, fe.Caption = ee, fe.Item = oe;
            var pe = Object($.a)("carousel", fe),
                ge = a(861),
                he = a.n(ge),
                be = a(966),
                Ee = a(118),
                ve = (a(967), r.a.memo(function(e) {
                    var t = Object(o.d)(function(e) {
                            return e.listBanner
                        }),
                        a = Object(o.c)();
                    return Object(n.useEffect)(function() {
                        a(Object(Ee.c)())
                    }, []), t.isLoading ? r.a.createElement("div", {
                        className: "slide banner"
                    }, r.a.createElement(be.a, {
                        isBanner: !0
                    })) : t.banners && Array.isArray(t.banners) && 0 === t.banners.length ? null : r.a.createElement(pe, {
                        className: "slide banner"
                    }, t.banners.map(function(e) {
                        return r.a.createElement(pe.Item, {
                            key: he.a.generate()
                        }, r.a.createElement("a", {
                            href: e.link,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, r.a.createElement(k.a, {
                            alt: "banner",
                            src: s.d.getLinkImage(e.fileName, "/images/banner")
                        })))
                    }))
                })),
                ye = function(e) {
                    var t = e.loading,
                        a = e.categories,
                        n = e.setGameCategory;
                    return r.a.createElement("div", {
                        className: "connect__view--middle"
                    }, r.a.createElement("div", {
                        className: "connect-banner"
                    }, r.a.createElement(ve, null)), r.a.createElement(G.a, {
                        fluid: !0,
                        className: "list-room"
                    }, t.category ? r.a.createElement(P, null) : r.a.createElement(x.a, null, a.map(function(e, t) {
                        return r.a.createElement(R.a, {
                            md: 4,
                            sm: 4,
                            xs: 6,
                            key: e._id + t,
                            onClick: function() {
                                var t;
                                (t = e.hashtag) && n(a, t)
                            }
                        }, r.a.createElement("img", {
                            src: s.d.getLinkImage(e.avatar, "/game_avatars"),
                            alt: "PD"
                        }), r.a.createElement("div", {
                            className: "title-class"
                        }, r.a.createElement("p", null, e.name), r.a.createElement("p", null, "(", e.activeCount, " Online)")))
                    }))))
                },
                ke = a(23),
                Oe = a.n(ke),
                je = a(932),
                Ne = a(829),
                we = a(6),
                Ie = a(30),
                Ce = a(12),
                _e = a(28),
                Se = a(21),
                xe = function(e) {
                    var t = e.loading,
                        a = e.params,
                        c = e.infoUser,
                        i = e.friendStatus,
                        o = e.setInfoUser,
                        u = e.categoryDetail,
                        m = e.userReviews,
                        d = e.cities,
                        f = e.citiesRequest,
                        g = e.displayRank,
                        h = e.requestReviewUser,
                        b = e.fetchGameUserReviews,
                        E = e.fetchFriendStatus,
                        j = e.requestMuteMic,
                        N = e.onRequestJoinLeaveRoom,
                        I = Object(n.useState)(""),
                        C = Object(l.a)(I, 2),
                        _ = C[0],
                        S = C[1],
                        x = Object(n.useState)(""),
                        R = Object(l.a)(x, 2),
                        M = R[0],
                        L = R[1],
                        P = Object(n.useState)(!1),
                        T = Object(l.a)(P, 2),
                        A = T[0],
                        U = T[1],
                        D = Object(n.useState)(1),
                        q = Object(l.a)(D, 2),
                        G = (q[0], q[1]);
                    Object(n.useEffect)(function() {
                        c._id && E(c._id), c._id && ("5b99f9e35180d13ea22a97fc" !== d[0]._id || "5b99f97c978dff3d115261c7" !== c.country) && f(c.country)
                    }, [c._id]);
                    var F = function(e) {
                            localStorage.token && (S(e), L(""), U(!1))
                        },
                        B = function() {
                            o({}), F("")
                        },
                        H = function(e) {
                            if (!e) return N({
                                action: "leave",
                                as: c.type,
                                userId: c._id
                            }), B();
                            j({
                                gameId: u._id,
                                roomId: a.id,
                                action: c.isMuted ? "unmute" : "mute",
                                userId: c._id
                            }), o(Object(p.a)({}, c, {
                                isMuted: !c.isMuted
                            }))
                        };
                    return c._id ? r.a.createElement(w.a, {
                        show: c._id,
                        onHide: B,
                        dialogClassName: "info-user-modal"
                    }, r.a.createElement(w.a.Body, null, r.a.createElement("div", {
                        className: "box-info-user"
                    }, r.a.createElement("div", {
                        className: "icon-social"
                    }, r.a.createElement(Ie.b, {
                        to: "/".concat(c.url || "page".concat(c._id)),
                        target: "_blank",
                        className: c._id === localStorage.idUser && "bg-white"
                    }, r.a.createElement("img", {
                        src: "".concat(Ce.staticImageUrl, "/icon/player-card.png")
                    }), c._id !== localStorage.idUser && ("accepted" === i.status ? r.a.createElement(O.a, {
                        id: "title.friended"
                    }) : r.a.createElement(O.a, {
                        id: "title.addfriend"
                    }))), c.discordUrl && r.a.createElement("a", {
                        href: c.discordUrl,
                        target: "_blank"
                    }, r.a.createElement("i", {
                        className: "fab fa-discord"
                    })), c.facebookUrl && r.a.createElement("a", {
                        href: c.facebookUrl,
                        target: "_blank"
                    }, r.a.createElement("i", {
                        className: "fab fa-facebook-f"
                    })), c.youtubeUrl && r.a.createElement("a", {
                        href: c.youtubeUrl,
                        target: "_blank"
                    }, r.a.createElement("i", {
                        className: "fab fa-youtube"
                    }))), r.a.createElement(k.a, {
                        circle: !0,
                        className: "avt-img",
                        src: s.d.getLinkImage(c.avatar)
                    }), r.a.createElement("h5", null, c.name), r.a.createElement("p", null, function() {
                        var e = "";
                        if (c.city) {
                            var t = d.find(function(e) {
                                return e._id === c.city
                            });
                            t && t.name && (e = "".concat(t.name, ", "))
                        }
                        return c.birthday && (e += "".concat((new Date).getFullYear() - parseInt(c.birthday.substr(c.birthday.length - 4)), " tu\u1ed5i")), e
                    }()), "author" !== c.type && c.authorRoomId === localStorage.idUser && r.a.createElement("div", {
                        className: "action-user"
                    }, r.a.createElement(v.a, {
                        bsStyle: "danger",
                        className: "btn-fill",
                        onClick: function() {
                            return H()
                        }
                    }, r.a.createElement("i", {
                        className: "fas fa-sign-out-alt"
                    }), " K\xedch"), r.a.createElement(v.a, {
                        className: "btn-fill",
                        bsStyle: c.isMuted ? "default" : "primary",
                        onClick: function() {
                            return H(!0)
                        }
                    }, r.a.createElement("i", {
                        className: "fas fa-".concat(c.isMuted ? "volume-up" : "volume-mute")
                    }), " ", c.isMuted ? "B\u1eadt mic" : "T\u1eaft mic"))), r.a.createElement(je.a, {
                        responsive: !0
                    }, r.a.createElement("tr", null, r.a.createElement("td", null, "Game:"), r.a.createElement("td", null, u.name)), function() {
                        if (u.setupFields && c.gameProfile) {
                            var e = c.gameProfile.detail;
                            return Object.keys(e).map(function(t) {
                                return r.a.createElement("tr", null, r.a.createElement("td", null, u.setupFields[t].title), r.a.createElement("td", null, "rank" === t ? g(e[t]) : e[t]))
                            })
                        }
                        return null
                    }(), r.a.createElement("tr", null, r.a.createElement("td", null, "\u0110\xe1nh gi\xe1:"), r.a.createElement("td", null, Object(ke.get)(c, "gameProfile.likeRate", 0), " (", " ", r.a.createElement("span", {
                        className: "btn-like",
                        onClick: function() {
                            return F("like")
                        }
                    }, r.a.createElement("i", {
                        className: "fa fa-thumbs-up"
                    }), " ", Object(ke.get)(c, "gameProfile.like", 0)), " \xb7 ", r.a.createElement("span", {
                        className: "btn-dislike",
                        onClick: function() {
                            return F("dislike")
                        }
                    }, r.a.createElement("i", {
                        className: "fa fa-thumbs-down"
                    }), " ", Object(ke.get)(c, "gameProfile.dislike", 0)), " ", ")", " \xb7 ", r.a.createElement("span", {
                        className: "btn-view-reviews",
                        onClick: function() {
                            return function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                                if (!t.action && localStorage.token) {
                                    if (A) return U(!1);
                                    b({
                                        userId: c._id,
                                        gameId: u._id,
                                        isUser: !0,
                                        page: e
                                    }), G(e + 1), U(!0)
                                }
                            }()
                        }
                    }, "( ", r.a.createElement("i", {
                        className: "fa fa-eye"
                    }), " ", r.a.createElement(O.a, {
                        id: "button.see"
                    }), " )"))), r.a.createElement("tr", null, r.a.createElement("td", {
                        colSpan: "2"
                    }, r.a.createElement("p", {
                        className: "text-description"
                    }, Object(ke.get)(c, "gameProfile.description", "")))), _ && !A && r.a.createElement("tr", null, r.a.createElement("td", {
                        colSpan: "2",
                        className: "form-review"
                    }, r.a.createElement(Ne.a, {
                        componentClass: "textarea",
                        placeholder: "\u0110\xe1nh gi\xe1 ".concat("like" === _ ? "\ud83d\udc4d" : "\ud83d\udc4e", " v\u1edbi b\xecnh lu\u1eadn"),
                        maxLength: 220,
                        onChange: function(e) {
                            return L(e.target.value)
                        },
                        value: M
                    }), r.a.createElement(v.a, {
                        bsStyle: "danger",
                        className: "btn-fill",
                        onClick: function() {
                            t.action || c._id && _ && a.id && u._id && Object(ke.get)(c, "gameProfile._id", "") && (h({
                                userId: c._id,
                                gameId: u._id,
                                roomId: a.id,
                                gameProfileId: c.gameProfile._id,
                                type: _,
                                msg: M ? M.trim() : ""
                            }), S(""), L(""))
                        },
                        disabled: t.action || !M.trim()
                    }, t.action ? r.a.createElement("i", {
                        className: "fa fa-spinner fa-spin"
                    }) : r.a.createElement(r.a.Fragment, null, r.a.createElement(O.a, {
                        id: "send"
                    }), " ", "like" === _ ? " \ud83d\udc4d" : " \ud83d\udc4e")))), A && !t.profile && r.a.createElement("tr", null, r.a.createElement("td", {
                        colSpan: "2",
                        className: "box-comments"
                    }, 0 === m.length ? r.a.createElement("p", {
                        className: "center"
                    }, r.a.createElement(O.a, {
                        id: "pagition.data"
                    })) : r.a.createElement("div", {
                        className: "list-comment"
                    }, m.map(function(e, t) {
                        return r.a.createElement(y.a, {
                            className: "item-tab-data",
                            key: t + e._id
                        }, r.a.createElement(y.a.Left, null, r.a.createElement(_e.a, {
                            size: "sm",
                            url: e.from ? s.d.getLinkImage(e.from.avatar) : Se.c.DEFAULT_AVATAR_URL,
                            rankVip: Object(ke.get)(e, "from.rank") && s.d.urlRankVip_New(e.from.rank),
                            sizeVip: 20
                        })), r.a.createElement(y.a.Body, null, r.a.createElement(y.a.Heading, {
                            className: s.e.classOfVipName(Object(ke.get)(e, "from.rank"))
                        }, Object(ke.get)(e, "from.name", "")), r.a.createElement("p", {
                            className: "item-tab-description"
                        }, e.msg), r.a.createElement("p", {
                            className: "item-tab-description"
                        }, r.a.createElement(we.c, {
                            value: e.updatedAt,
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric"
                        }))), r.a.createElement(y.a.Right, null, r.a.createElement("i", {
                            className: "fa fa-thumbs-".concat("like" !== e.type ? "down" : "up")
                        })))
                    }))))))) : null
                },
                Re = a(988),
                Me = function(e) {
                    var t = e.params,
                        a = e.data,
                        n = e.page,
                        c = e.setPage,
                        i = e.visible,
                        o = e.setVisible,
                        l = e.detailRoom,
                        s = e.fetchGameRoomMessage,
                        u = e.requestGameRoomMessage,
                        m = e.setNotificationStatus,
                        d = function(e, a) {
                            if (a) return s(e || 1, t.id);
                            var n = e || {},
                                r = n.type,
                                c = n.body;
                            u({
                                body: c,
                                type: r,
                                authorRoomId: l.authorId._id
                            }, t.id)
                        };
                    return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                        className: "box-room-chat hidden-xs hidden-sm"
                    }, r.a.createElement(Re.a, {
                        data: a,
                        fetchGlobalMessage: function(e) {
                            return d(e, !0)
                        },
                        requestGlobalMessage: d,
                        page: n,
                        setPage: c,
                        isConnect: t.id,
                        setNotificationStatus: m,
                        disabledChat: l.isBlock
                    })), r.a.createElement(w.a, {
                        show: i,
                        onHide: function() {
                            return o(!1)
                        },
                        dialogClassName: "room-chat-modal"
                    }, r.a.createElement(w.a.Header, {
                        closeButton: !0
                    }, r.a.createElement(w.a.Title, {
                        id: "contained-modal-title-lg"
                    }, "K\xe9o Rank B\u1ea1ch Kim")), r.a.createElement(w.a.Body, null, r.a.createElement("div", {
                        className: "box-room-chat"
                    }, r.a.createElement(Re.a, {
                        data: a,
                        fetchGlobalMessage: function(e) {
                            return d(e, !0)
                        },
                        requestGlobalMessage: d,
                        page: n,
                        setPage: c,
                        isConnect: t.id,
                        setNotificationStatus: m
                    })))))
                },
                Le = a(1308),
                Pe = a.n(Le),
                Te = null,
                Ae = function(e) {
                    var t = e.detailRoom,
                        a = e.displayRank,
                        c = e.fetchedTopDonateRequest,
                        i = (e.dataDonate, e.dataTopDonate),
                        o = (e.showModal, e.newDonate);
                    Object(n.useEffect)(function() {
                        return Object(ke.get)(t, "authorId._id") && (c(t.authorId._id, "week"), Te = setInterval(function() {
                            c(t.authorId._id, "week")
                        }, 6e4)),
                            function() {
                                return clearInterval(Te)
                            }
                    }, [Object(ke.get)(t, "authorId._id")]);
                    return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                        className: "box-info"
                    }, r.a.createElement("p", {
                        className: "marquee"
                    }, r.a.createElement("span", null, "Ng\u01b0\u1eddi ch\u01a1i : ", a(Object(ke.get)(t, "joinCondition.minRank")), " \u279d", " ", a(Object(ke.get)(t, "joinCondition.maxRank")))), r.a.createElement("p", null, t.description)), r.a.createElement("div", {
                        className: "box-donate"
                    }, (i.slice(0, 4) || []).map(function(e, t) {
                        return r.a.createElement("div", {
                            key: t,
                            className: "item-tab-data"
                        }, r.a.createElement("div", {
                            className: "name-donate"
                        }, r.a.createElement(k.a, {
                            circle: !0,
                            className: "avt-img",
                            src: s.d.getLinkImage(e.customer.avatar)
                        }), r.a.createElement("p", null, e.customer.name)), r.a.createElement("p", {
                            className: "amount-donate"
                        }, (e.totalAmount / 1e3).toLocaleString(), " ", r.a.createElement("i", {
                            className: "fab fa-bitcoin"
                        })))
                    })), o ? r.a.createElement("div", {
                        className: "display-donate"
                    }, r.a.createElement("div", {
                        className: "item-tab-data"
                    }, r.a.createElement("div", {
                        className: "name-donate"
                    }, r.a.createElement(k.a, {
                        circle: !0,
                        className: "avt-img",
                        src: s.d.getLinkImage(Object(ke.get)(o, "customer.avatar"))
                    }), r.a.createElement("p", null, o.customer.name)), r.a.createElement("p", {
                        className: "amount-donate"
                    }, (o.amount / 1e3).toLocaleString(), " ", r.a.createElement("i", {
                        className: "fab fa-bitcoin"
                    }))), r.a.createElement("p", {
                        className: "message-donate"
                    }, o.message), r.a.createElement("p", {
                        className: "time-donate"
                    }, r.a.createElement(we.c, {
                        value: o.createdAt,
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric"
                    }))) : r.a.createElement("div", {
                        className: "display-donate"
                    }))
                };
            Ae.defaultProps = {
                dataDonate: []
            };
            var Ue = Ae,
                De = a(302),
                qe = Object(o.b)(function(e) {
                    return {
                        dataTopDonate: e.topDonate,
                        dataDonate: e.playerHistoryDonate.data
                    }
                }, function(e) {
                    return Object(i.bindActionCreators)({
                        fetchedTopDonateRequest: De.b
                    }, e)
                })(Ue),
                Ge = a(863),
                Fe = a(1491),
                Be = a(1465),
                He = a(853),
                Ve = (a(1309), Object(we.g)(function(e) {
                    var t = e.intl,
                        a = e.detailRoom,
                        c = e.loading,
                        i = e.classname,
                        o = e.onRequestJoinLeaveRoom,
                        s = e.requestRemoveRoom,
                        u = e.requestUpdateRoom,
                        m = Object(n.useState)(!1),
                        d = Object(l.a)(m, 2),
                        p = d[0],
                        h = d[1],
                        b = Object(n.useState)(!1),
                        E = Object(l.a)(b, 2),
                        v = E[0],
                        y = E[1],
                        k = function() {
                            var e = Object(g.a)(f.a.mark(function e() {
                                var t, n, r, c;
                                return f.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (Object(ke.get)(a, "authorId._id") !== localStorage.idUser) {
                                                e.next = 3;
                                                break
                                            }
                                            return s({
                                                gameId: {
                                                    _id: a.gameProfileId.gameId
                                                },
                                                _id: a._id
                                            }), e.abrupt("return", h(!p));
                                        case 3:
                                            if (t = a.teammates, n = void 0 === t ? [] : t, r = a.friends, c = void 0 === r ? [] : r, -1 === n.findIndex(function(e) {
                                                return e._id === localStorage.idUser
                                            })) {
                                                e.next = 9;
                                                break
                                            }
                                            return e.next = 8, o({
                                                action: "leave",
                                                as: "player"
                                            });
                                        case 8:
                                            return e.abrupt("return", h(!p));
                                        case 9:
                                            if (-1 === c.findIndex(function(e) {
                                                return e._id === localStorage.idUser
                                            })) {
                                                e.next = 14;
                                                break
                                            }
                                            return e.next = 13, o({
                                                action: "leave",
                                                as: "friend"
                                            });
                                        case 13:
                                            return e.abrupt("return", h(!p));
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        O = function(e, n) {
                            var r = "";
                            return n ? (r = "".concat(t.formatMessage({
                                id: a.isLocked ? "title.lockjoinslot" : "title.unlockjoinslot"
                            }), " ?"), e && (r = t.formatMessage({
                                id: a.isLocked ? "title.lockjoinslot" : "title.unlockjoinslot"
                            })), r) : (r = "".concat(t.formatMessage({
                                id: "title.confirmroomconnect"
                            }), " ").concat(t.formatMessage({
                                id: "button.outslot"
                            }), " ?"), e && (r = t.formatMessage({
                                id: "button.outslot"
                            })), Object(ke.get)(a, "authorId._id") === localStorage.idUser && (r = "".concat(t.formatMessage({
                                id: "title.confirmroomconnect"
                            }), " ").concat(t.formatMessage({
                                id: "button.delroom"
                            }), " ?"), e && (r = t.formatMessage({
                                id: "button.delroom"
                            }))), r)
                        };
                    return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                        className: "slot-action ".concat(i)
                    }, localStorage.idUser && function() {
                        if (!localStorage.idUser) return !1;
                        var e = a.teammates,
                            t = void 0 === e ? [] : e,
                            n = a.friends,
                            r = void 0 === n ? [] : n;
                        return -1 !== [].concat(Object(S.a)(t), Object(S.a)(r)).findIndex(function(e) {
                            return e._id === localStorage.idUser
                        }) || Object(ke.get)(a, "authorId._id") === localStorage.idUser
                    }() ? r.a.createElement("div", {
                        className: "setting-btns"
                    }, r.a.createElement(Fe.a, {
                        overlay: r.a.createElement(Be.a, null, r.a.createElement("span", {
                            className: "tooltip-btn"
                        }, O(!0))),
                        placement: "top"
                    }, r.a.createElement("p", {
                        className: "room--setting",
                        onClick: function() {
                            return h(!p)
                        }
                    }, r.a.createElement("i", {
                        className: "fas fa-sign-out-alt"
                    }))), Object(ke.get)(a, "authorId._id") === localStorage.idUser && r.a.createElement(Fe.a, {
                        overlay: r.a.createElement(Be.a, null, r.a.createElement("span", {
                            className: "tooltip-btn"
                        }, O(!0, !0))),
                        placement: "bottom"
                    }, r.a.createElement("p", {
                        className: "room--setting",
                        onClick: function() {
                            return y(!v)
                        }
                    }, r.a.createElement("i", {
                        className: "fas fa-lock".concat(a.isLocked ? "-open" : "")
                    })))) : r.a.createElement("div", null), r.a.createElement("p", {
                        className: "count-user"
                    }, r.a.createElement("i", {
                        className: "fa fa-user"
                    }), " ", a.activeCount)), p && r.a.createElement(He.a, {
                        message: O(),
                        close: function() {
                            h(!p)
                        },
                        confirm: k,
                        isLoading: c.joinRoom
                    }), v && r.a.createElement(He.a, {
                        message: O(!1, !0),
                        close: function() {
                            y(!v)
                        },
                        confirm: function() {
                            u({
                                _id: a._id,
                                gameCategories: a.gameId,
                                room: {
                                    gameId: a.gameId
                                },
                                gameId: a.gameId,
                                isLocked: !a.isLocked,
                                inRoom: !0
                            }), y(!v)
                        },
                        isLoading: c.joinRoom
                    }))
                })),
                ze = function(e) {
                    var t = e.detailRoom,
                        a = e.handleClickSlot,
                        n = e.isLocked,
                        c = t.friends,
                        i = void 0 === c ? [] : c,
                        o = Object(Ge.b)().userOnMic;
                    return r.a.createElement("div", {
                        className: "slot-main-bottom"
                    }, [].concat(Object(S.a)(i), Object(S.a)(Array(n ? 0 : 3 - i.length).keys())).map(function(e, t) {
                        return r.a.createElement("div", {
                            key: t + "friend",
                            className: "slot-item",
                            onClick: function() {
                                return a(e, "friend")
                            }
                        }, e._id ? r.a.createElement("div", {
                            className: "slot__avatar "
                        }, r.a.createElement(k.a, {
                            isShowIcon: !0,
                            isMuted: e.isMuted,
                            circle: !0,
                            className: "avt-slot-img ".concat(o.includes(e._id) && !e.isMuted ? "pulse" : ""),
                            src: s.d.getLinkImage(e.avatar)
                        })) : r.a.createElement("h5", null, r.a.createElement("i", {
                            className: "fa fa-plus"
                        })), r.a.createElement("p", null, e.name || "B\u1ea1n b\xe8"))
                    }), n && Object(S.a)(Array(3 - i.length).keys()).map(function(e, t) {
                        return r.a.createElement("div", {
                            key: t + "lock-friend",
                            className: "slot-item block"
                        }, r.a.createElement("div", {
                            className: "slot-empty"
                        }, r.a.createElement("h5", {
                            className: "slot-block"
                        })), r.a.createElement("p", null, "Kho\xe1"))
                    }))
                },
                Ye = function(e) {
                    var t = e.teammates,
                        a = void 0 === t ? [] : t,
                        n = e.maxTeammate,
                        c = e.categoryDetail,
                        i = e.handleClickSlot,
                        o = e.isLocked,
                        l = Object(Ge.b)().userOnMic;
                    return [].concat(Object(S.a)(a), Object(S.a)(Array(o ? 0 : n - a.length).keys())).map(function(e, t) {
                        return r.a.createElement("div", {
                            key: t + "slot",
                            className: "slot-item",
                            onClick: function() {
                                return i(e, "player")
                            }
                        }, e._id ? r.a.createElement("div", {
                            className: "slot__avatar"
                        }, r.a.createElement(k.a, {
                            isShowIcon: !0,
                            isMuted: e.isMuted,
                            circle: !0,
                            className: "avt-img ".concat(l.includes(e._id) && !e.isMuted ? "pulse" : ""),
                            src: s.d.getLinkImage(e.avatar)
                        })) : r.a.createElement("div", {
                            className: "slot-empty"
                        }, r.a.createElement("i", {
                            className: "fa fa-plus"
                        })), r.a.createElement("h5", null, e.name || "Ng\u01b0\u1eddi ch\u01a1i"), r.a.createElement("p", null, function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            return 2 === Object(ke.get)(c, "setupFields.rank.type") ? Object(ke.get)(c, "setupFields.rank.moreInfo[".concat(e, "]")) : e
                        }(Object(ke.get)(e, "gameProfile.detail.rank"))))
                    })
                },
                We = function(e) {
                    var t = e.handleClickSlot,
                        a = e.authorId,
                        n = e.gameProfileId,
                        c = e.displayRank,
                        i = Object(Ge.b)().userOnMic;
                    return r.a.createElement("div", {
                        className: "slot-main-top",
                        onClick: function() {
                            return t(Object(p.a)({}, a, {
                                gameProfile: n
                            }), "author")
                        }
                    }, r.a.createElement(k.a, {
                        circle: !0,
                        className: "avt-img ".concat(i.includes(a._id) ? "pulse" : ""),
                        src: s.d.getLinkImage(a.avatar)
                    }), r.a.createElement("h4", null, a.name), r.a.createElement("p", null, c(Object(ke.get)(n, "detail.rank"))))
                },
                Ke = a(906),
                Ze = a(1310),
                Je = a.n(Ze),
                $e = function(e) {
                    var t = e.setVisible,
                        a = e.detailRoom,
                        c = e.params,
                        i = e.categories,
                        o = e.loading,
                        u = e.requestJoinRooms,
                        m = e.requestMuteMic,
                        d = e.requestRemoveRoom,
                        f = e.requestUpdateRoom,
                        g = e.requestLastActived,
                        b = e.setNotificationStatus,
                        E = e.setActiveCategory,
                        v = Object(h.a)(e, ["setVisible", "detailRoom", "params", "categories", "loading", "requestJoinRooms", "requestMuteMic", "requestRemoveRoom", "requestUpdateRoom", "requestLastActived", "setNotificationStatus", "setActiveCategory"]),
                        y = a.maxTeammate,
                        j = void 0 === y ? 0 : y,
                        N = a.teammates,
                        w = void 0 === N ? [] : N,
                        I = a.gameProfileId,
                        C = void 0 === I ? {} : I,
                        _ = a.authorId,
                        x = void 0 === _ ? {} : _,
                        R = Object(Ge.b)(),
                        M = R.emitJoinRoom,
                        L = R.socket,
                        P = R.setCategory,
                        T = R.setDetailRoom,
                        A = R.newDonate,
                        U = Object(n.useState)({}),
                        q = Object(l.a)(U, 2),
                        G = q[0],
                        F = q[1],
                        B = Object(n.useState)(),
                        H = Object(l.a)(B, 2),
                        V = H[0],
                        z = H[1],
                        Y = Object(n.useState)({}),
                        W = Object(l.a)(Y, 2),
                        K = W[0],
                        Z = W[1],
                        J = Object(n.useState)(!1),
                        $ = Object(l.a)(J, 2),
                        Q = $[0],
                        X = $[1];
                    Object(n.useEffect)(function() {
                        return X(!0), setTimeout(function() {
                            return X(!1)
                        }, 8e3),
                            function() {
                                return X(!1)
                            }
                    }, [A]), Object(n.useEffect)(function() {
                        if (i && i.length > 0) {
                            var e = i.find(function(e) {
                                return e.hashtag === c.room
                            });
                            e && (Z(e), P(e._id))
                        }
                    }, [c.room, i]), Object(n.useEffect)(function() {
                        var e = null;
                        return x._id && T(a), 1 !== a.status && x._id && x._id === localStorage.idUser && (e = setInterval(function() {
                            g(a.gameId, a._id)
                        }, 36e4)),
                            function() {
                                return clearInterval(e)
                            }
                    }, [a]);
                    var ee = function(e) {
                            var t = e.action,
                                n = e.as,
                                r = e.userId;
                            "join" === t && Object(Ke.b)(Object(p.a)({}, a, {
                                userId: localStorage.idUser
                            })) ? b(!1, "B\u1ea1n \u0111\xe3 \u1edf trong ph\xf2ng !") : u({
                                gameId: K._id,
                                roomId: V,
                                action: t,
                                as: n,
                                userId: r,
                                callback: function() {
                                    return E(K._id)
                                }
                            })
                        },
                        te = function(e, t) {
                            if (!e._id) {
                                if (a.isLocked) return;
                                return ee({
                                    action: "join",
                                    as: t || "player"
                                })
                            }
                            F(Object(p.a)({}, e, {
                                authorRoomId: x._id,
                                type: t
                            }))
                        };
                    Object(n.useEffect)(function() {
                        var e;
                        L && (e = c.id) && K._id && M({
                            gameRoomId: e,
                            gameId: K._id
                        }), z(c.id)
                    }, [c.id, K, L]);
                    var ae = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            return 2 === Object(ke.get)(K, "setupFields.rank.type") ? Object(ke.get)(K, "setupFields.rank.moreInfo[".concat(e, "]")) : e
                        },
                        ne = function(e) {
                            return r.a.createElement(Ve, {
                                classname: e,
                                detailRoom: a,
                                onRequestJoinLeaveRoom: ee,
                                requestRemoveRoom: d,
                                requestUpdateRoom: f,
                                loading: o
                            })
                        };
                    return o.detailRoom || o.category ? r.a.createElement(D, null) : s.d.isMongoDbId(V) ? r.a.createElement("div", {
                        className: "box-room-slot",
                        style: {
                            backgroundImage: "url(".concat(s.d.getLinkImage(a.background, "/game_backgrounds", Pe.a), ")")
                        }
                    }, ne("hidden-md hidden-lg"), r.a.createElement("div", {
                        className: "slot-main"
                    }, 2 !== a.status && r.a.createElement("i", {
                        className: "fas fa-eye-slash"
                    }), r.a.createElement(We, {
                        handleClickSlot: te,
                        displayRank: ae,
                        authorId: x,
                        gameProfileId: C
                    }), r.a.createElement(ze, {
                        handleClickSlot: te,
                        detailRoom: a,
                        isLocked: a.isLocked
                    })), r.a.createElement("div", {
                        className: "slot-sub"
                    }, r.a.createElement("div", {
                        className: "slot-sub-top"
                    }, r.a.createElement(Ye, {
                        handleClickSlot: te,
                        categoryDetail: K,
                        teammates: a.teammates,
                        maxTeammate: j,
                        isLocked: a.isLocked
                    }), Object(S.a)(Array(a.isLocked ? 6 - w.length : 6 - j).keys()).map(function(e, t) {
                        return r.a.createElement("div", {
                            key: t + "lock-slot",
                            className: "slot-item block"
                        }, r.a.createElement("div", {
                            className: "slot-empty"
                        }, r.a.createElement("div", {
                            className: "slot-block"
                        })), r.a.createElement("h5", null, "Kho\xe1"))
                    })), r.a.createElement("div", {
                        className: "slot-sub-bottom"
                    }, r.a.createElement(qe, {
                        detailRoom: a,
                        displayRank: ae,
                        newDonate: A
                    })), r.a.createElement("div", {
                        className: "popup-tip ".concat(A && Q && "show-tip")
                    }, r.a.createElement("img", {
                        src: Je.a,
                        className: "bg-tip"
                    }), r.a.createElement("div", {
                        className: "detail-tip"
                    }, r.a.createElement(k.a, {
                        circle: !0,
                        className: "avt-img",
                        src: s.d.getLinkImage(Object(ke.get)(A, "customer.avatar"))
                    }), r.a.createElement("p", {
                        className: "name-tip"
                    }, r.a.createElement("strong", null, Object(ke.get)(A, "customer.name")), " \u0111\xe3 Tip", " ", r.a.createElement("strong", null, (Object(ke.get)(A, "amount", 0) / 1e3).toLocaleString()), " ", r.a.createElement("i", {
                        className: "fab fa-bitcoin"
                    })), r.a.createElement("p", {
                        className: "mess-tip"
                    }, Object(ke.get)(A, "message"))))), ne("hidden-xs hidden-sm"), r.a.createElement("div", {
                        className: "message-form hidden-md hidden-lg",
                        onClick: function() {
                            return t(!0)
                        }
                    }, r.a.createElement("p", null, r.a.createElement("i", {
                        className: "fa fa-paper-plane"
                    }), " ", r.a.createElement(O.a, {
                        id: "donatetable.loinhan"
                    }))), G._id && r.a.createElement(xe, Object.assign({
                        loading: o,
                        params: c,
                        setInfoUser: F,
                        infoUser: G || {},
                        categoryDetail: K || {},
                        displayRank: ae,
                        onRequestJoinLeaveRoom: ee,
                        requestMuteMic: m
                    }, v))) : r.a.createElement("div", {
                        className: "box-room-slot"
                    }, r.a.createElement("p", {
                        className: "non-exist"
                    }, "Room kh\xf4ng t\u1ed3n t\u1ea1i"))
                },
                Qe = a(86),
                Xe = a(24),
                et = a(48),
                tt = a(4),
                at = Object(o.b)(function(e) {
                    return {
                        detailRoom: e.gameCategory.detailRoom || {},
                        loading: e.gameCategory.loading,
                        userReviews: e.gameCategory.userReviews || [],
                        friendStatus: e.userProfile.friendStatus || {}
                    }
                }, function(e) {
                    return Object(i.bindActionCreators)({
                        requestJoinRooms: Qe.o,
                        requestMuteMic: Qe.q,
                        requestReviewUser: Qe.r,
                        requestRemoveRoom: Xe.x,
                        fetchGameUserReviews: Qe.g,
                        setNotificationStatus: tt.c,
                        fetchFriendStatus: et.i,
                        requestUpdateRoom: Xe.z,
                        requestLastActived: Qe.p
                    }, e)
                })($e),
                nt = function(e) {
                    var t = e.params,
                        a = e.data,
                        c = e.cities,
                        i = e.detailRoom,
                        o = void 0 === i ? {} : i,
                        s = e.categories,
                        u = void 0 === s ? [] : s,
                        m = e.gameConnect,
                        d = e.citiesRequest,
                        f = e.setNotificationStatus,
                        p = e.setMessageLoading,
                        g = e.fetchDetailRoom,
                        h = e.fetchGameRoomMessage,
                        b = e.requestGameRoomMessage,
                        E = e.setActiveCategory,
                        v = (m || {}).loading,
                        y = Object(n.useState)(1),
                        k = Object(l.a)(y, 2),
                        O = k[0],
                        j = k[1],
                        N = Object(n.useState)(!1),
                        w = Object(l.a)(N, 2),
                        I = w[0],
                        C = w[1];
                    return Object(n.useEffect)(function() {
                        return 0 === c.length && d("5b99f97c978dff3d115261c7"),
                            function() {
                                p({
                                    message: !1
                                }, !0)
                            }
                    }, []), Object(n.useEffect)(function() {
                        if (u.length > 0 && o._id !== t.id) {
                            var e = u.find(function(e) {
                                return e.hashtag === t.room
                            });
                            g({
                                gameId: e._id,
                                roomId: t.id
                            })
                        }
                    }, [t, u]), r.a.createElement("div", {
                        className: "connect__view--middle container-fluid"
                    }, r.a.createElement(at, {
                        params: t,
                        setVisible: C,
                        categories: u,
                        cities: c,
                        citiesRequest: d,
                        setActiveCategory: E
                    }), v.detailRoom || v.category ? r.a.createElement(U, null) : r.a.createElement(Me, {
                        params: t,
                        data: a,
                        page: O,
                        setPage: j,
                        visible: I,
                        setVisible: C,
                        fetchGameRoomMessage: h,
                        requestGameRoomMessage: b,
                        setNotificationStatus: f,
                        detailRoom: o || {}
                    }))
                },
                rt = a(991),
                ct = r.a.memo(function(e) {
                    var t = e.userInformation,
                        a = e.params,
                        c = e.gameConnect,
                        i = e.activeCategory,
                        o = e.setActiveCategory,
                        u = e.fetchGameProfile,
                        m = e.fetchGameUserReviews,
                        d = Object(h.a)(e, ["userInformation", "params", "gameConnect", "activeCategory", "setActiveCategory", "fetchGameProfile", "fetchGameUserReviews"]),
                        b = c.loading,
                        E = c.categories,
                        v = c.category,
                        k = c.listProfile,
                        O = c.selfReviews,
                        j = t.data,
                        N = void 0 === j ? {} : j,
                        w = t.loading,
                        I = Object(n.useState)(0),
                        _ = Object(l.a)(I, 2),
                        S = _[0],
                        x = _[1],
                        R = Object(n.useState)({}),
                        M = Object(l.a)(R, 2),
                        L = M[0],
                        P = M[1],
                        T = Object(n.useState)(1),
                        A = Object(l.a)(T, 2),
                        U = A[0],
                        D = A[1],
                        q = Object(n.useState)("PUT"),
                        G = Object(l.a)(q, 2),
                        F = G[0],
                        B = G[1],
                        H = Object(n.useRef)();
                    Object(n.useEffect)(function() {
                        localStorage.token && N._id && u(N._id)
                    }, [N]), Object(n.useEffect)(function() {
                        if (v._id) {
                            var e = Oe.a.findIndex(E, function(e) {
                                return e._id === v._id
                            });
                            e > -1 && x(e)
                        }
                    }, [v]), Object(n.useEffect)(function() {
                        E.length > 0 && V()
                    }, [k, S, E]), Object(n.useEffect)(function() {
                        if (i) {
                            var e = Oe.a.findIndex(E, function(e) {
                                return e._id === i
                            });
                            x(e), Y(!0)
                        }
                    }, [i]);
                    var V = function() {
                            var e = E[S] || {},
                                t = Oe.a.find(k.data || [], function(t) {
                                    return t.gameId && t.gameId._id === e._id
                                });
                            B(t ? "PUT" : "POST"), P(Object(p.a)({}, e, {
                                profile: t || {}
                            })), !b.review && m({
                                userId: N._id,
                                gameId: e._id,
                                page: U
                            })
                        },
                        z = function(e) {
                            b.profile || (!e && S && x(S - 1), e && E.length - 1 > S && x(S + 1), (S || E.length - 1 > S) && D(1))
                        },
                        Y = function(e) {
                            H && H.current.handleVisible(e)
                        },
                        W = function() {
                            var t = Object(g.a)(f.a.mark(function t(a) {
                                return f.a.wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if ("PUT" !== F) {
                                                t.next = 5;
                                                break
                                            }
                                            return t.next = 3, e.requestUpdateGameProfile(Object(p.a)({}, L.profile, a, {
                                                _id: L.profile._id,
                                                isUpdateProfile: !0
                                            }));
                                        case 3:
                                            t.next = 7;
                                            break;
                                        case 5:
                                            return t.next = 7, e.requestCreateGameProfile(a);
                                        case 7:
                                            Y(!1);
                                        case 8:
                                        case "end":
                                            return t.stop()
                                    }
                                }, t)
                            }));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }();
                    return r.a.createElement("div", {
                        className: "tab-data-info"
                    }, r.a.createElement("div", {
                        className: "box-action-info"
                    }, r.a.createElement("p", {
                        className: "btn-edit",
                        onClick: function() {
                            return Y(!0)
                        }
                    }, "Ch\u1ec9nh s\u1eeda"), !a.id && !v._id && r.a.createElement("div", {
                        className: "btn-change-view"
                    }, r.a.createElement("p", {
                        onClick: function() {
                            return z()
                        }
                    }, r.a.createElement("i", {
                        class: "fa fa-angle-left"
                    })), r.a.createElement("p", {
                        onClick: function() {
                            return z(!0)
                        }
                    }, r.a.createElement("i", {
                        class: "fa fa-angle-right"
                    })))), r.a.createElement("div", {
                        className: "box-info"
                    }, r.a.createElement(je.a, {
                        responsive: !0
                    }, r.a.createElement("tr", null, r.a.createElement("td", null, "Game:"), r.a.createElement("td", null, L.name)), function() {
                        var e = Object.keys(Oe.a.get(L, "profile.detail", {}));
                        return 0 === e.length ? null : e.map(function(e, t) {
                            var a = Oe.a.get(L, "profile.gameId.setupFields[".concat(e, "]"), {}),
                                n = Oe.a.get(L, "profile.detail[".concat(e, "]"), "");
                            return r.a.createElement("tr", {
                                key: e + t
                            }, r.a.createElement("td", null, a.title, ":"), r.a.createElement("td", null, 2 === a.type && Oe.a.get(a, "moreInfo[".concat(n, "]"), "") || n))
                        })
                    }(), r.a.createElement("tr", null, r.a.createElement("td", null, "\u0110\xe1nh gi\xe1:"), r.a.createElement("td", null, Oe.a.get(L, "profile.likeRate", 0), " (", " ", r.a.createElement("span", {
                        className: "btn-like"
                    }, r.a.createElement("i", {
                        className: "fa fa-thumbs-up"
                    }), " ", Oe.a.get(L, "profile.like", 0)), " \xb7 ", r.a.createElement("span", {
                        className: "btn-dislike"
                    }, r.a.createElement("i", {
                        className: "fa fa-thumbs-down"
                    }), " ", Oe.a.get(L, "profile.dislike", 0)), " ", ")"))), r.a.createElement("p", {
                        className: "text-description"
                    }, Oe.a.get(L, "profile.description", ""))), r.a.createElement("div", {
                        className: "box-user-comment"
                    }, O.length > 0 && r.a.createElement(r.a.Fragment, null, r.a.createElement("p", {
                        className: "title"
                    }, r.a.createElement("strong", null, "Nh\u1eadn x\xe9t t\u1eeb \u0111\u1ed3ng \u0111\u1ed9i")), r.a.createElement("div", {
                        className: "list-comment"
                    }, O.map(function(e, t) {
                        return r.a.createElement(y.a, {
                            className: "item-tab-data",
                            key: t + e._id
                        }, r.a.createElement(y.a.Left, null, r.a.createElement(_e.a, {
                            size: "sm",
                            url: e.from ? s.d.getLinkImage(e.from.avatar) : Se.c.DEFAULT_AVATAR_URL,
                            rankVip: Oe.a.get(e, "from.rank") && s.d.urlRankVip_New(e.from.rank),
                            sizeVip: 20
                        })), r.a.createElement(y.a.Body, null, r.a.createElement(y.a.Heading, {
                            className: s.e.classOfVipName(Oe.a.get(e, "from.rank"))
                        }, Oe.a.get(e, "from.name", "")), r.a.createElement("p", {
                            className: "item-tab-description"
                        }, e.msg), r.a.createElement("p", {
                            className: "item-tab-description"
                        }, r.a.createElement(we.c, {
                            value: e.updatedAt,
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric"
                        }))), r.a.createElement(y.a.Right, null, r.a.createElement("i", {
                            className: "fa fa-thumbs-".concat("like" !== e.type ? "down" : "up")
                        })))
                    })))), r.a.createElement(C, {
                        ref: H,
                        title: "PUT" === F ? "Ch\u1ec9nh s\u1eeda th\xf4ng tin" : "T\u1ea1o th\xf4ng tin",
                        setRoom: o
                    }, r.a.createElement(rt.a, Object.assign({
                        gameProfile: L || {},
                        onUpdate: W,
                        loading: w || {},
                        method: F
                    }, d))))
                }),
                it = a(879),
                ot = r.a.memo(function(e) {
                    var t = e.loading,
                        a = e.handleListInvitation,
                        n = e.requestFriendAccept,
                        c = e.invitate,
                        i = e.listFriend,
                        o = e.friendRequest,
                        l = e.handleSearchFriend,
                        u = e.fetchListFriend;
                    return r.a.createElement("div", {
                        className: "tab-data-friend"
                    }, r.a.createElement("div", {
                        className: "tab-add-friend"
                    }, r.a.createElement(it.a, {
                        disabled: !localStorage.token || c,
                        onPostSearch: l,
                        placeholder: "Name/Url...",
                        match: c
                    }), r.a.createElement("p", {
                        className: c && "active",
                        onClick: function() {
                            return a()
                        }
                    }, "L\u1eddi m\u1eddi k\u1ebft b\u1ea1n")), !c && r.a.createElement(r.a.Fragment, null, i.map(function(e, t) {
                        return r.a.createElement(y.a, {
                            className: "item-tab-data",
                            key: t + e._id
                        }, r.a.createElement(y.a.Left, {
                            onClick: function() {
                                return window.open("/".concat(e.friendId.url))
                            }
                        }, r.a.createElement(_e.a, {
                            url: m()(e, "friendId.avatar") ? s.d.getLinkImage(e.friendId.avatar) : Se.c.DEFAULT_AVATAR_URL,
                            rankVip: s.d.urlRankVip_New(m()(e, "friendId.rank", "0.png")),
                            sizeVip: 20,
                            status: m()(e, "friendId.isOnline") ? "ready" : "offline"
                        })), r.a.createElement(y.a.Body, null, r.a.createElement(y.a.Heading, {
                            onClick: function() {
                                return window.open("/".concat(e.friendId.url))
                            }
                        }, m()(e, "friendId.name")), r.a.createElement("p", {
                            className: "item-tab-description"
                        }, r.a.createElement(we.c, {
                            value: m()(e, "friendId.connectedAt", 0),
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric"
                        }))))
                    }), !t.listFriend && i.length > 0 && r.a.createElement("p", {
                        className: "see-more center",
                        onClick: u
                    }, r.a.createElement("i", {
                        className: "fa fa-caret-down"
                    }), r.a.createElement(O.a, {
                        id: "notify.seemore"
                    }))), c && o.map(function(e, t) {
                        return r.a.createElement(y.a, {
                            className: "item-tab-data",
                            key: t + e._id
                        }, r.a.createElement(y.a.Left, {
                            onClick: function() {
                                return window.open("/".concat(e.userId.url))
                            }
                        }, r.a.createElement(_e.a, {
                            url: m()(e, "userId.avatar") ? s.d.getLinkImage(e.userId.avatar) : Se.c.DEFAULT_AVATAR_URL,
                            status: m()(e, "userId.isOnline") ? "ready" : "offline"
                        })), r.a.createElement(y.a.Body, null, r.a.createElement(y.a.Heading, {
                            onClick: function() {
                                return window.open("/".concat(e.userId.url))
                            }
                        }, m()(e, "userId.name")), r.a.createElement("div", {
                            className: "btn-add-friend"
                        }, r.a.createElement(v.a, {
                            bsSize: "small",
                            bsStyle: "danger",
                            className: "btn-fill",
                            onClick: function() {
                                return n("yes", t, e._id)
                            }
                        }, r.a.createElement(O.a, {
                            id: "accept"
                        })), r.a.createElement(v.a, {
                            bsSize: "small",
                            className: "btn-fill",
                            onClick: function() {
                                return n("no", t, e._id)
                            }
                        }, r.a.createElement(O.a, {
                            id: "delete"
                        })))))
                    }), (!c && !i.length || c && !o.length) && r.a.createElement(y.a, null, r.a.createElement("p", {
                        className: "center"
                    }, "Danh s\xe1ch tr\u1ed1ng")))
                }),
                lt = function(e) {
                    var t = e.drawer,
                        a = e.activeTab,
                        c = e.handleChangeTab,
                        i = e.params,
                        o = e.userInformation,
                        s = e.gameConnect,
                        u = e.activeCategory,
                        m = e.setActiveCategory,
                        d = e.fetchListFriend,
                        f = e.fetchListFriendRequest,
                        p = e.requestFriend,
                        g = e.fetchSearchFriend,
                        h = e.fetchGameProfile,
                        b = e.fetchGameUserReviews,
                        E = e.requestCreateGameProfile,
                        v = e.requestGetGameProfile,
                        y = e.requestUpdateGameProfile,
                        k = s || {},
                        j = k.loading,
                        N = k.friendRequest,
                        w = k.listFriend,
                        I = Object(n.useState)(!1),
                        C = Object(l.a)(I, 2),
                        _ = C[0],
                        S = C[1],
                        x = Object(n.useState)(1),
                        R = Object(l.a)(x, 2),
                        M = R[0],
                        L = R[1],
                        P = function(e) {
                            _ || f(1), _ && (d(localStorage.idUser, 1), L(2)), !e && S(!_)
                        },
                        T = function(e, t) {
                            localStorage.token && (a !== e || t) && (e && S(!1), e && (d(localStorage.idUser, M), L(M + 1)), c(e))
                        },
                        U = function(e, t, a) {
                            p(t, a, e, function() {
                                return P(!0)
                            })
                        },
                        D = function(e) {
                            e.trim() ? g(e, 1) : d(localStorage.idUser, 1), L(2)
                        };
                    return r.a.createElement("div", {
                        className: "connect__view--right ".concat(t.right && "show-mobile")
                    }, r.a.createElement("div", {
                        className: "tab-info"
                    }, r.a.createElement("div", {
                        className: "item-tab-info"
                    }, r.a.createElement("p", {
                        className: !a && "active",
                        onClick: function() {
                            return T(!1)
                        }
                    }, "C\xe1 nh\xe2n"), r.a.createElement("p", {
                        className: a && "active",
                        onClick: function() {
                            return T(!0)
                        }
                    }, "B\u1ea1n b\xe8"))), localStorage.token ? j.category ? r.a.createElement(A, null) : a ? r.a.createElement(ot, {
                        loading: j || {},
                        handleListInvitation: P,
                        requestFriendAccept: U,
                        invitate: _,
                        listFriend: w,
                        friendRequest: N,
                        handleSearchFriend: D,
                        fetchListFriend: function() {
                            return T(!0, !0)
                        }
                    }) : a ? void 0 : r.a.createElement(ct, {
                        userInformation: o || {},
                        params: i,
                        gameConnect: s || {},
                        activeCategory: u,
                        setActiveCategory: m,
                        fetchGameProfile: h,
                        fetchGameUserReviews: b,
                        requestCreateGameProfile: E,
                        requestGetGameProfile: v,
                        requestUpdateGameProfile: y
                    }) : r.a.createElement("p", {
                        className: "required-login"
                    }, r.a.createElement(O.a, {
                        id: "gameprofile.loginRequired"
                    })))
                },
                st = Object(o.b)(function(e) {
                    return {
                        userInformation: e.userInformation
                    }
                }, function(e) {
                    return Object(i.bindActionCreators)({
                        fetchListFriend: Qe.h,
                        fetchListFriendRequest: Qe.i,
                        requestFriend: Qe.m,
                        fetchSearchFriend: Qe.k,
                        fetchGameProfile: Qe.e,
                        fetchGameUserReviews: Qe.g,
                        requestCreateGameProfile: Xe.p,
                        requestGetGameProfile: Xe.s,
                        requestUpdateGameProfile: Xe.y
                    }, e)
                })(lt),
                ut = a(100),
                mt = Object(o.b)(function(e) {
                    return {
                        detailRoom: e.gameCategory.detailRoom,
                        cities: e.cities.data || []
                    }
                }, function(e) {
                    return Object(i.bindActionCreators)({
                        fetchDetailRoom: Qe.c,
                        fetchGameRoomMessage: Qe.f,
                        requestGameRoomMessage: Qe.n,
                        setNotificationStatus: tt.c,
                        citiesRequest: ut.a
                    }, e)
                })(nt),
                dt = Object(o.b)(function(e, t) {
                    return {
                        gameCategory: e.userInformation.gameCategory,
                        dataUser: e.userInformation.data,
                        gameRooms: e.userInformation.gameRooms,
                        loading: e.userInformation.loading
                    }
                }, function(e) {
                    return Object(i.bindActionCreators)({
                        requestCreateRoom: Xe.q,
                        requestGetRooms: Xe.t,
                        requestUpdateRoom: Xe.z,
                        requestRemoveRoom: Xe.x
                    }, e)
                })(q),
                ft = (a(1311), function(e) {
                    var t = e.history,
                        a = e.match,
                        c = e.listBanner,
                        i = e.gameConnect,
                        o = e.fetchGameCategories,
                        s = e.fetchDetailGameCategory,
                        u = e.setGameCategory,
                        d = e.fetchGlobalMessage,
                        f = e.requestGlobalMessage,
                        p = e.setMessageLoading,
                        g = e.fetchQuickRoomEntry,
                        h = i || {},
                        b = h.loading,
                        E = h.categories,
                        v = Object(n.useState)(!1),
                        y = Object(l.a)(v, 2),
                        k = y[0],
                        O = y[1],
                        j = Object(n.useState)(null),
                        N = Object(l.a)(j, 2),
                        w = N[0],
                        I = N[1],
                        C = Object(n.useState)({
                            left: !1,
                            right: !1
                        }),
                        _ = Object(l.a)(C, 2),
                        S = _[0],
                        x = _[1],
                        R = Object(n.useState)({
                            room: null,
                            id: null
                        }),
                        M = Object(l.a)(R, 2),
                        L = M[0],
                        P = M[1];
                    return Object(n.useEffect)(function() {
                        o(m()(a, "params.room", null)), setTimeout(function() {
                            return window.scrollTo(0, 0)
                        }, 200)
                    }, []), Object(n.useEffect)(function() {
                        !m()(a, "params.room", null) && u([], ""), P({
                            room: m()(a, "params.room", null),
                            id: m()(a, "params.id", null)
                        })
                    }, [a]), r.a.createElement("div", {
                        className: "connect__view"
                    }, r.a.createElement("div", {
                        className: "btn-drawer"
                    }, r.a.createElement("div", {
                        className: "btn-drawer-left",
                        onClick: function() {
                            return x({
                                left: !S.left,
                                right: !1
                            })
                        }
                    }, r.a.createElement("i", {
                        className: "fas fa-chevron-".concat(S.left ? "left" : "right")
                    })), r.a.createElement("div", {
                        className: "btn-drawer-right",
                        onClick: function() {
                            return x({
                                left: !1,
                                right: !S.right
                            })
                        }
                    }, r.a.createElement("i", {
                        className: "fas fa-chevron-".concat(S.right ? "right" : "left")
                    }))), r.a.createElement(dt, {
                        fetchDetailGameCategory: s,
                        fetchQuickRoomEntry: g,
                        setGameCategory: u,
                        gameConnect: i || {},
                        drawer: S,
                        history: t,
                        params: L,
                        setActiveCategory: I
                    }), L.id ? r.a.createElement(Ge.a, null, r.a.createElement(mt, {
                        history: t,
                        params: L,
                        data: c,
                        categories: E,
                        fetchGlobalMessage: d,
                        requestGlobalMessage: f,
                        setMessageLoading: p,
                        gameConnect: i || {},
                        setActiveCategory: I
                    })) : r.a.createElement(ye, {
                        loading: b,
                        categories: E || [],
                        history: t,
                        setGameCategory: u
                    }), r.a.createElement(st, {
                        drawer: S,
                        activeTab: k,
                        handleChangeTab: O,
                        params: L,
                        gameConnect: i || {},
                        activeCategory: w,
                        setActiveCategory: I
                    }))
                }),
                pt = Object(o.b)(function(e) {
                    return {
                        listBanner: e.listBanner,
                        gameConnect: e.gameCategory
                    }
                }, function(e) {
                    return Object(i.bindActionCreators)({
                        fetchGameCategories: Qe.d,
                        fetchDetailGameCategory: Qe.b,
                        setGameCategory: Qe.s,
                        fetchQuickRoomEntry: Qe.j,
                        setMessageLoading: Ee.g
                    }, e)
                })(ft);
            t.default = Object(c.j)(function(e) {
                var t = e.history,
                    a = e.match;
                return r.a.createElement(pt, {
                    history: t,
                    match: a
                })
            })
        },
        845: function(e, t, a) {
            "use strict";
            a.d(t, "o", function() {
                return k
            }), a.d(t, "m", function() {
                return O
            }), a.d(t, "n", function() {
                return j
            }), a.d(t, "E", function() {
                return N
            }), a.d(t, "p", function() {
                return w
            }), a.d(t, "j", function() {
                return I
            }), a.d(t, "x", function() {
                return C
            }), a.d(t, "v", function() {
                return _
            }), a.d(t, "t", function() {
                return S
            }), a.d(t, "z", function() {
                return x
            }), a.d(t, "y", function() {
                return R
            }), a.d(t, "w", function() {
                return M
            }), a.d(t, "u", function() {
                return L
            }), a.d(t, "s", function() {
                return P
            }), a.d(t, "D", function() {
                return T
            }), a.d(t, "B", function() {
                return A
            }), a.d(t, "C", function() {
                return U
            }), a.d(t, "A", function() {
                return D
            }), a.d(t, "r", function() {
                return q
            }), a.d(t, "l", function() {
                return G
            }), a.d(t, "g", function() {
                return F
            }), a.d(t, "k", function() {
                return B
            }), a.d(t, "h", function() {
                return H
            }), a.d(t, "b", function() {
                return V
            }), a.d(t, "c", function() {
                return z
            }), a.d(t, "q", function() {
                return Y
            }), a.d(t, "f", function() {
                return W
            }), a.d(t, "d", function() {
                return K
            }), a.d(t, "e", function() {
                return Z
            }), a.d(t, "i", function() {
                return J
            }), a.d(t, "a", function() {
                return $
            });
            var n, r = a(0),
                c = a.n(r),
                i = a(279),
                o = a.n(i),
                l = a(53),
                s = a.n(l),
                u = a(49),
                m = a.n(u),
                d = a(9),
                f = function(e) {
                    return function(t) {
                        return t > e ? "Nhi\u1ec1u nh\xe2t ".concat(e) : void 0
                    }
                },
                p = function(e) {
                    return function(t) {
                        return t && t.trim().length > e ? "Must be ".concat(e, " characters or less") : void 0
                    }
                },
                g = function(e) {
                    return function(t) {
                        return t && t.trim().length < e ? "Must be at least ".concat(e) : void 0
                    }
                },
                h = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\xe0\xe1\u1ea1\u1ea3\xe3\xe2\u1ea7\u1ea5\u1ead\u1ea9\u1eab\u0103\u1eb1\u1eaf\u1eb7\u1eb3\u1eb5\xe8\xe9\u1eb9\u1ebb\u1ebd\xea\u1ec1\u1ebf\u1ec7\u1ec3\u1ec5\xec\xed\u1ecb\u1ec9\u0129\xf2\xf3\u1ecd\u1ecf\xf5\xf4\u1ed3\u1ed1\u1ed9\u1ed5\u1ed7\u01a1\u1edd\u1edb\u1ee3\u1edf\u1ee1\xf9\xfa\u1ee5\u1ee7\u0169\u01b0\u1eeb\u1ee9\u1ef1\u1eed\u1eef\u1ef3\xfd\u1ef5\u1ef7\u1ef9\u0111\xc0\xc1\u1ea0\u1ea2\xc3\xc2\u1ea6\u1ea4\u1eac\u1ea8\u1eaa\u0102\u1eb0\u1eae\u1eb6\u1eb2\u1eb4\xc8\xc9\u1eb8\u1eba\u1ebc\xca\u1ec0\u1ebe\u1ec6\u1ec2\u1ec4\xcc\xcd\u1eca\u1ec8\u0128\xd2\xd3\u1ecc\u1ece\xd5\xd4\u1ed2\u1ed0\u1ed8\u1ed4\u1ed6\u01a0\u1edc\u1eda\u1ee2\u1ede\u1ee0\xd9\xda\u1ee4\u1ee6\u0168\u01af\u1eea\u1ee8\u1ef0\u1eec\u1eee\u1ef2\xdd\u1ef4\u1ef6\u1ef8\u0110 ]/,
                b = new RegExp(/^[A-Za-z ]*$/),
                E = new RegExp(/^[A-Za-z0-9]*$/),
                v = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/),
                y = /^https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/,
                k = function(e) {
                    return !e || -1 !== e.indexOf("youtube.com/") && -1 === e.indexOf(" ") ? void 0 : c.a.createElement(d.a, {
                        id: "err.checklinkYTB"
                    })
                },
                O = function(e) {
                    return e && -1 === e.indexOf("https://discord") ? c.a.createElement(d.a, {
                        id: "err.checklinkDISCORD"
                    }) : void 0
                },
                j = function(e) {
                    return !e || -1 !== e.indexOf("https://playerduo.com/") && -1 === e.indexOf(" ") ? void 0 : c.a.createElement(d.a, {
                        id: "err.checklinkPost"
                    })
                },
                N = function(e) {
                    return e || o()(e) ? void 0 : c.a.createElement(d.a, {
                        id: "err.required"
                    })
                },
                w = function(e) {
                    return e && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e) ? c.a.createElement(d.a, {
                        id: "err.email"
                    }) : void 0
                },
                I = function(e) {
                    return e && -1 !== e.indexOf(" ") ? c.a.createElement(d.a, {
                        id: "err.checkspace"
                    }) : null
                },
                C = p(255),
                _ = p(200),
                S = p(100),
                x = p(50),
                R = p(32),
                M = p(25),
                L = p(20),
                P = p(10),
                T = g(6),
                A = g(2),
                U = g(4),
                D = (n = 0, function(e) {
                    return e < n ? "Th\u1ea5p nh\xe2t ".concat(n) : void 0
                }),
                q = f(6),
                G = (f(10), function(e) {
                    return h.test(e) ? c.a.createElement(d.a, {
                        id: "err.regexLink"
                    }) : void 0
                }),
                F = function(e) {
                    var t = e && e.replace(/[\D\s]+/g, "");
                    return t = t ? parseFloat(t, 10) : 0, parseInt(t, 10) % 1e3 !== 0 ? c.a.createElement(d.a, {
                        id: "err.checkpriceEventNumber"
                    }) : parseInt(t) < 5e3 || parseInt(t) > 1e7 ? c.a.createElement(d.a, {
                        id: "err.checkpricelength"
                    }) : void 0
                },
                B = function(e) {
                    var t = e && e.replace(/[\D\s]+/g, "");
                    return t = t ? parseFloat(t, 10) : 0, parseInt(t, 10) % 1e3 !== 0 ? c.a.createElement(d.a, {
                        id: "err.checkpriceEventNumber"
                    }) : parseInt(t) < 5e3 || parseInt(t) > 1e10 ? c.a.createElement(d.a, {
                        id: "err.checkpricelength"
                    }) : void 0
                },
                H = function(e) {
                    var t = e && e.replace(/[\D\s]+/g, "");
                    return t = t ? parseFloat(t, 10) : 0, parseInt(t, 10) % 1e3 !== 0 ? c.a.createElement(d.a, {
                        id: "err.checkpriceEventNumber"
                    }) : parseInt(t) < 0 || parseInt(t) > 1e10 ? c.a.createElement(d.a, {
                        id: "err.checkpriceTarget"
                    }) : void 0
                },
                V = function(e) {
                    return b.test(e) ? void 0 : c.a.createElement(d.a, {
                        id: "err.checkaccountname"
                    })
                },
                z = function(e) {
                    return E.test(e) ? void 0 : c.a.createElement(d.a, {
                        id: "err.checknumber"
                    })
                },
                Y = function(e) {
                    return !e || -1 !== e.indexOf("https://www.facebook.com") && -1 === e.indexOf(" ") && 0 === e.trim().indexOf("https://www.facebook.com") ? void 0 : c.a.createElement(d.a, {
                        id: "err.incorrectlinkfbformat"
                    })
                },
                W = function(e) {
                    return e && s.a.isMobilePhone(e) ? void 0 : c.a.createElement(d.a, {
                        id: "err.phonenumber"
                    })
                },
                K = function(e) {
                    return e && v.test(m()(e).format("DD/MM/YYYY")) ? void 0 : c.a.createElement(d.a, {
                        id: "err.likedate"
                    })
                },
                Z = function(e) {
                    var t;
                    return e ? (Array.isArray(e) ? e.forEach(function(e) {
                        m()(e.time, "DD/MM/YYYY") >= m()(new Date) && (t = c.a.createElement(d.a, {
                            id: "err.checkbirthdayNow"
                        }))
                    }) : t = e < m()(new Date) ? void 0 : c.a.createElement(d.a, {
                        id: "err.checkbirthdayNow"
                    }), t) : t
                },
                J = function(e) {
                    var t = null;
                    return e && e.length > 0 && (t = y.test(e) ? void 0 : c.a.createElement(d.a, {
                        id: "err.regexLink"
                    })), t
                },
                $ = function(e) {
                    return e && s.a.isAlphanumeric(e) ? void 0 : c.a.createElement(d.a, {
                        id: "username.invalid"
                    })
                }
        },
        853: function(e, t, a) {
            "use strict";
            var n = a(14),
                r = a(15),
                c = a(26),
                i = a(27),
                o = a(19),
                l = a(0),
                s = a.n(l),
                u = a(6),
                m = a(160),
                d = a.n(m),
                f = a(884),
                p = a.n(f);
            a(866);

            function g(e) {
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
                    return Object(i.a)(this, a)
                }
            }
            var h = function(e) {
                Object(c.a)(a, e);
                var t = g(a);

                function a() {
                    return Object(n.a)(this, a), t.apply(this, arguments)
                }
                return Object(r.a)(a, [{
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            a = t.message,
                            n = t.isLoading,
                            r = t.messBonus;
                        return s.a.createElement(p.a, {
                            title: "",
                            className: "sweet-alert",
                            style: {
                                display: "block",
                                marginTop: "-100px"
                            },
                            onConfirm: function() {
                                return e.props.confirm()
                            },
                            onCancel: function() {
                                return e.props.close(!1)
                            },
                            confirmBtnText: n ? s.a.createElement(d.a, {
                                name: "ball-scale-ripple",
                                color: "white",
                                fadeIn: "none"
                            }) : s.a.createElement(u.b, {
                                id: "accept"
                            }),
                            cancelBtnText: s.a.createElement(u.b, {
                                id: "close"
                            }),
                            confirmBtnBsStyle: "danger",
                            cancelBtnBsStyle: "default",
                            showCancel: !0
                        }, s.a.createElement("p", {
                            className: "message"
                        }, a), r && s.a.createElement("p", {
                            className: "mess-bonus"
                        }, r))
                    }
                }]), a
            }(l.Component);
            t.a = h
        },
        857: function(e, t, a) {
            "use strict";
            var n = a(39),
                r = a(54),
                c = a(2),
                i = a(55),
                o = a(0),
                l = a.n(o),
                s = a(1491),
                u = a(1465),
                m = a(932),
                d = a(834),
                f = a(1480),
                p = a(6),
                g = a(30),
                h = a(49),
                b = a.n(h),
                E = a(7),
                v = a.n(E),
                y = a(14),
                k = a(15),
                O = a(897),
                j = a(9),
                N = a(3),
                w = function() {
                    function e() {
                        Object(y.a)(this, e)
                    }
                    return Object(k.a)(e, null, [{
                        key: "DuoStatusTable",
                        value: function(e, t, a, n, r) {
                            return l.a.createElement("td", {
                                key: e
                            }, N.i.checkDuoStatus(a), l.a.createElement("br", null), "duo" === a && l.a.createElement("button", {
                                type: "button",
                                onClick: function() {
                                    return n(t)
                                },
                                className: "btn-fill btn btn-sm btn-success",
                                style: {
                                    marginRight: "10px"
                                }
                            }, l.a.createElement(O.a, {
                                tooltip: l.a.createElement(j.a, {
                                    id: "title.completeduo"
                                })
                            }, l.a.createElement("i", {
                                className: "fa fa-check"
                            }))), ("duo" === a || "waiting_player" === a) && l.a.createElement("button", {
                                className: "btn-fill btn btn-sm btn-danger",
                                type: "button",
                                onClick: function() {
                                    return r(t)
                                }
                            }, l.a.createElement(O.a, {
                                tooltip: l.a.createElement(j.a, {
                                    id: "button.cancelDuo"
                                })
                            }, l.a.createElement("i", {
                                className: "fa fa-times"
                            }))))
                        }
                    }]), e
                }(),
                I = function e() {
                    Object(y.a)(this, e)
                };
            I.checkStatus = function(e, t) {
                var a = null;
                switch (t) {
                    case "success":
                        a = l.a.createElement("td", {
                            key: e,
                            style: {
                                color: "orange"
                            }
                        }, l.a.createElement(j.a, {
                            id: "statusPlayer.money"
                        }));
                        break;
                    case !0:
                        a = l.a.createElement("td", {
                            key: e,
                            style: {
                                color: "orange"
                            }
                        }, l.a.createElement(j.a, {
                            id: "turnOn"
                        }));
                        break;
                    case !1:
                        a = l.a.createElement("td", {
                            key: e,
                            style: {
                                color: "orange"
                            }
                        }, l.a.createElement(j.a, {
                            id: "turnOff"
                        }));
                        break;
                    case "waiting":
                        a = l.a.createElement("td", {
                            key: e,
                            style: {
                                color: "red"
                            }
                        }, l.a.createElement(j.a, {
                            id: "statusPlayer.waitting"
                        }));
                        break;
                    case "deny":
                        a = l.a.createElement("td", {
                            key: e,
                            style: {
                                color: "red"
                            }
                        }, l.a.createElement(j.a, {
                            id: "statusPlayer.cancelled"
                        }));
                        break;
                    case "-rent_player":
                        a = l.a.createElement("td", {
                            key: e
                        }, l.a.createElement(j.a, {
                            id: "cusbalance.rent_player"
                        }));
                        break;
                    case "+cancel_duo":
                        a = l.a.createElement("td", {
                            key: e
                        }, l.a.createElement(j.a, {
                            id: "cusbalance.cancel_duo"
                        }));
                        break;
                    case "donate":
                        a = l.a.createElement("td", {
                            key: e
                        }, l.a.createElement(j.a, {
                            id: "cusbalance.donate"
                        }));
                        break;
                    case "-donate":
                        a = l.a.createElement("td", {
                            key: e
                        }, "Donate");
                        break;
                    case "waiting_player":
                        a = l.a.createElement("td", {
                            key: e,
                            style: {
                                color: "#e67e21"
                            }
                        }, l.a.createElement(j.a, {
                            id: "statusPlayer.waitting"
                        }));
                        break;
                    case "duo":
                        a = l.a.createElement("td", {
                            key: e,
                            style: {
                                color: "#e67e21"
                            }
                        }, l.a.createElement(j.a, {
                            id: "statusPlayer.hired"
                        }));
                        break;
                    case "complete":
                        a = l.a.createElement("td", {
                            key: e,
                            style: {
                                color: "#49b549"
                            }
                        }, l.a.createElement(j.a, {
                            id: "statusPlayer.finish"
                        }));
                        break;
                    case "player_cancel":
                    case "customer_cancel":
                    case "cancel":
                        a = l.a.createElement("td", {
                            key: e,
                            style: {
                                color: "#f0564a"
                            }
                        }, l.a.createElement(j.a, {
                            id: "statusPlayer.cancelled"
                        }));
                        break;
                    case "admin_cancel":
                        a = l.a.createElement("td", {
                            key: e,
                            style: {
                                color: "#f0564a"
                            }
                        }, l.a.createElement(j.a, {
                            id: "statusPlayer.admin_cancel"
                        }));
                        break;
                    case "-buy_card":
                        a = l.a.createElement("td", {
                            key: e
                        }, l.a.createElement(j.a, {
                            id: "buyCard"
                        }));
                        break;
                    case "-withdraw":
                        a = l.a.createElement("td", {
                            key: e
                        }, l.a.createElement(j.a, {
                            id: "cusbalance.withdraw"
                        }));
                        break;
                    case "-buy_player_card":
                        a = l.a.createElement("td", {
                            key: e
                        }, l.a.createElement(j.a, {
                            id: "cusbalance.buy_player_card"
                        }));
                        break;
                    case "+recharge_player_card":
                        a = l.a.createElement("td", {
                            key: e
                        }, l.a.createElement(j.a, {
                            id: "cusbalance.recharge_player_card"
                        }));
                        break;
                    case "+recharge_by_phone_card":
                        a = l.a.createElement("td", {
                            key: e
                        }, l.a.createElement(j.a, {
                            id: "cusbalance.recharge_by_phone_card"
                        }));
                        break;
                    case "+receive_money_donate":
                        a = l.a.createElement("td", {
                            key: e
                        }, l.a.createElement(j.a, {
                            id: "cusbalance.receive_money_donate"
                        }));
                        break;
                    case "+receive_money_duo":
                        a = l.a.createElement("td", {
                            key: e
                        }, l.a.createElement(j.a, {
                            id: "cusbalance.receive_money_duo"
                        }));
                        break;
                    case "-register_vip_member":
                    case "+register_vip_member":
                        a = l.a.createElement("td", {
                            key: e
                        }, l.a.createElement(j.a, {
                            id: "cusbalance.register_vip_member"
                        }));
                        break;
                    case "+transfer":
                        a = l.a.createElement("td", {
                            key: e
                        }, l.a.createElement(j.a, {
                            id: "cusbalance.transfer+"
                        }));
                        break;
                    case "-transfer":
                        a = l.a.createElement("td", {
                            key: e
                        }, l.a.createElement(j.a, {
                            id: "cusbalance.transfer-"
                        }));
                        break;
                    case "+unlock_post":
                        a = l.a.createElement("td", {
                            key: e
                        }, l.a.createElement(j.a, {
                            id: "cusbalance.unlock_post+"
                        }));
                        break;
                    case "-unlock_post":
                        a = l.a.createElement("td", {
                            key: e
                        }, l.a.createElement(j.a, {
                            id: "cusbalance.unlock_post-"
                        }));
                        break;
                    case "+tip":
                    case "-tip":
                        a = l.a.createElement("td", {
                            key: e
                        }, l.a.createElement(j.a, {
                            id: "cusbalance.tip"
                        }));
                        break;
                    case "+admin_fix_recharge_money":
                        a = l.a.createElement("td", {
                            key: e
                        }, l.a.createElement(j.a, {
                            id: "cusbalance.admin_fix_recharge_money"
                        }));
                        break;
                    case "-admin_fix_withdraw_money":
                        a = l.a.createElement("td", {
                            key: e
                        }, l.a.createElement(j.a, {
                            id: "cusbalance.admin_fix_withdraw_money"
                        }));
                        break;
                    case "-renewal_duo":
                        a = l.a.createElement("td", {
                            key: e
                        }, l.a.createElement(j.a, {
                            id: "cusbalance.renewal_duo"
                        }));
                        break;
                    case "+register_package":
                        a = l.a.createElement("td", {
                            key: e
                        }, l.a.createElement(j.a, {
                            id: "cusbalance.register_package"
                        }));
                        break;
                    default:
                        a = l.a.createElement("td", {
                            key: e
                        }, t)
                }
                return a
            };
            var C = a(8),
                _ = a.n(C),
                S = a(13),
                x = a(26),
                R = a(27),
                M = a(19),
                L = a(40),
                P = a(23),
                T = a.n(P),
                A = a(159),
                U = a(829),
                D = a(91),
                q = a(271),
                G = a(77);
            a(975);

            function F(e) {
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
                    var a, n = Object(M.a)(e);
                    if (t) {
                        var r = Object(M.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(R.a)(this, a)
                }
            }
            var B = function(e) {
                Object(x.a)(a, e);
                var t = F(a);

                function a(e) {
                    var n;
                    return Object(y.a)(this, a), (n = t.call(this, e)).onChange = function(e) {
                        e.preventDefault();
                        var t = e.target,
                            a = t.name,
                            c = t.value;
                        if ("amount" !== a) n.setState(Object(r.a)({}, a, c));
                        else {
                            var i = c.replace(/[\D\s]+/g, "");
                            n.setState(Object(r.a)({}, a, "" === i ? 0 : parseInt(i, 0)))
                        }
                    }, n.onTransfers = Object(S.a)(_.a.mark(function e() {
                        var t, a, r, c, i, o, s, u, m, d, f, g, h, b;
                        return _.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = sessionStorage.getItem("unlockTime"), a = localStorage.getItem("token"), r = n.props, c = r.userData, i = r.submit, o = r.payTransactionId, s = r._id, u = r.setNotificationStatus, m = r.close, d = r.isLoading, f = n.state, g = f.amount, h = f.note, !a) {
                                        e.next = 20;
                                        break
                                    }
                                    if (!(c.securityLock && t || void 0 === c.securityLock)) {
                                        e.next = 17;
                                        break
                                    }
                                    if (!(g % 1e3 === 0 && T.a.trim(h).length > 0)) {
                                        e.next = 14;
                                        break
                                    }
                                    if (b = {
                                        amount: g,
                                        note: h,
                                        payTransactionId: o,
                                        unlockTime: t
                                    }, d) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.next = 11, i(b, s);
                                case 11:
                                    m();
                                case 12:
                                    e.next = 15;
                                    break;
                                case 14:
                                    g % 1e3 !== 0 ? u(!1, l.a.createElement(p.b, {
                                        id: "notify.least10000multiple1000"
                                    })) : T.a.trim(h).length < 5 && u(!1, l.a.createElement(p.b, {
                                        id: "notify.more5char"
                                    }));
                                case 15:
                                    e.next = 18;
                                    break;
                                case 17:
                                    n.setState({
                                        showModalUnlock: !0
                                    });
                                case 18:
                                    e.next = 21;
                                    break;
                                case 20:
                                    window.location.assign("/login");
                                case 21:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), n.state = {
                        showModal: !1,
                        amount: "",
                        note: "",
                        showModalUnlock: !1
                    }, n
                }
                return Object(k.a)(a, [{
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            a = t.name,
                            n = t.note,
                            r = t.close,
                            c = this.state,
                            i = c.showModal,
                            o = c.amount,
                            s = c.showModalUnlock;
                        return l.a.createElement(A.a, {
                            className: "modal-transfer",
                            show: i,
                            onHide: function() {
                                e.setState({
                                    showModal: !1
                                }), r(!1)
                            }
                        }, l.a.createElement(A.a.Header, {
                            closeButton: !0
                        }, l.a.createElement(A.a.Title, null, "Chuy\u1ec3n Ti\u1ec1n")), l.a.createElement(A.a.Body, null, l.a.createElement("table", null, l.a.createElement("tbody", null, l.a.createElement("tr", null, l.a.createElement("td", null, "Ng\u01b0\u1eddi nh\u1eadn:"), l.a.createElement("td", null, a)), l.a.createElement("tr", null, l.a.createElement("td", null, "S\u1ed1 ti\u1ec1n mu\u1ed1n chuy\u1ec3n:"), l.a.createElement("td", null, l.a.createElement(U.a, {
                            type: "text",
                            name: "amount",
                            value: o.toLocaleString("en-EG"),
                            onChange: this.onChange
                        }))), l.a.createElement("tr", null, l.a.createElement("td", null, "Ghi ch\xfa:"), l.a.createElement("td", null, l.a.createElement("textarea", {
                            type: "text",
                            name: "note",
                            value: n,
                            onChange: this.onChange
                        })))))), l.a.createElement(A.a.Footer, null, l.a.createElement(D.a, {
                            bsStyle: "danger",
                            fill: !0,
                            onClick: this.onTransfers
                        }, "Chuy\u1ec3n"), l.a.createElement(D.a, {
                            onClick: function() {
                                e.setState({
                                    showModal: !1
                                }), r()
                            }
                        }, "\u0110\xf3ng")), l.a.createElement(q.a, {
                            closeModal: function() {
                                return e.setState({
                                    showModalUnlock: !1
                                })
                            },
                            isLoading: !1,
                            isShow: s
                        }))
                    }
                }], [{
                    key: "getDerivedStateFromProps",
                    value: function(e, t) {
                        return {
                            showModal: e.showModal
                        }
                    }
                }]), a
            }(o.Component);
            B.defaultProps = {
                name: "name"
            };
            var H = Object(L.b)(function(e) {
                    return {}
                }, {
                    transferUserMoneyRequest: G.v
                })(B),
                V = a(65),
                z = a(845),
                Y = a(46),
                W = a(281),
                K = (a(976), function(e) {
                    var t = e.dataTH,
                        a = e.dataTable,
                        f = e.userInformation,
                        p = e.isLoadingTransfer,
                        h = e.showModalSuccess,
                        E = e.showModalCancel,
                        y = e.showModalBlock,
                        k = e.intl,
                        O = e.sendReplyMess,
                        C = e.funcButton,
                        _ = e.setNotificationStatus,
                        S = e.requestUnlockSecurityCode,
                        x = e.onTransferUserMoneyRequest,
                        R = e.funcButtonEdit,
                        M = Object(o.useState)({
                            isShow: !1
                        }),
                        L = Object(i.a)(M, 2),
                        P = L[0],
                        T = L[1],
                        A = Object(o.useState)({}),
                        U = Object(i.a)(A, 2),
                        D = U[0],
                        q = U[1],
                        G = function(e) {
                            13 === e.keyCode && (O(P.id, {
                                message: e.target.value
                            }, 1), T({
                                isShow: !1
                            }))
                        },
                        F = Object(o.useMemo)(function() {
                            return t.map(function(e, t) {
                                return l.a.createElement("th", {
                                    key: t
                                }, e.name)
                            })
                        }, [t]),
                        B = function(e) {
                            var t = e.avatar,
                                a = e.name,
                                n = e.url,
                                r = e.isVip;
                            return l.a.createElement("div", null, l.a.createElement(g.b, {
                                to: "/".concat(n),
                                className: "avatar"
                            }, l.a.createElement(W.a, {
                                src: N.d.getLinkImage(t),
                                className: r ? "image__vip" : "avt-xs"
                            }), a))
                        },
                        K = function(e) {
                            q(function(t) {
                                return Object(c.a)({}, t, Object(r.a)({}, e, !t[e]))
                            })
                        },
                        Z = Object(o.useMemo)(function() {
                            return (a || []).map(function(e, n) {
                                return l.a.createElement("tr", {
                                    key: n
                                }, t.map(function(e, t) {
                                    var r = v()(a[n], "".concat([e.value])),
                                        c = a[n][e.addValue],
                                        i = a[n],
                                        o = null,
                                        m = "",
                                        O = "",
                                        M = "";
                                    switch (e.typeData) {
                                        case "date":
                                            o = l.a.createElement("td", {
                                                key: t
                                            }, void 0 === r ? l.a.createElement(j.a, {
                                                id: i.member || "forever" === e.status ? "forever" : "cardtable.chuasudung"
                                            }) : b()(r).format("DD/MM/YYYY"));
                                            break;
                                        case "date-balance":
                                            o = l.a.createElement("td", {
                                                key: t
                                            }, b()(r).format("DD/MM/YYYY hh:mm:ss"));
                                            break;
                                        case "money":
                                            o = l.a.createElement("td", {
                                                key: t
                                            }, l.a.createElement(Y.a, {
                                                money: void 0 === r ? 0 : r
                                            }));
                                            break;
                                        case "changeMoney":
                                            o = l.a.createElement("td", {
                                                key: t
                                            }, i.operation || "+", l.a.createElement(Y.a, {
                                                money: r
                                            }));
                                            break;
                                        case "vipImage":
                                            O = N.d.getLinkImage(r, "/images/vip"), m = "customer_setting/vip", o = l.a.createElement("td", {
                                                key: t
                                            }, B({
                                                url: m,
                                                avatar: O,
                                                name: M,
                                                isVip: !0
                                            }));
                                            break;
                                        case "time-user-level":
                                            o = l.a.createElement("td", {
                                                key: t
                                            }, "".concat(0 === r ? "" : r, " ").concat(function(e) {
                                                switch (e) {
                                                    case 30:
                                                        return k.formatMessage({
                                                            id: "month"
                                                        });
                                                    case 365:
                                                        return k.formatMessage({
                                                            id: "year"
                                                        });
                                                    case 0:
                                                        return k.formatMessage({
                                                            id: "forever"
                                                        });
                                                    default:
                                                        return k.formatMessage({
                                                            id: "day"
                                                        })
                                                }
                                            }(i.timeUnit)));
                                            break;
                                        case "avatar":
                                            r ? r.playerSetting ? (m = i.isReplyTransaction ? N.d.urlPersonalPage(r.url, r._id) : N.d.urlPersonalPage(r.playerSetting.url, r.playerSetting._id), O = N.d.getLinkImage(i.isReplyTransaction ? r.avatar : r.playerSetting.avatar), M = i.isReplyTransaction ? r.name : r.playerSetting.nickName) : (i.isReplyTransaction, m = N.d.urlPersonalPage(r.url, r._id), O = N.d.getLinkImage(O), M = r.name) : c ? (O = N.d.getLinkImage(c.avatar), m = N.d.urlPersonalPage(c.url, c._id), M = c.name) : (O = N.d.getLinkImage(r.avatar || r.user.avatar), m = N.d.urlPersonalPage(r.url, r._id), M = r.name), o = l.a.createElement("td", {
                                                key: t
                                            }, B({
                                                url: m,
                                                avatar: O,
                                                name: M
                                            }));
                                            break;
                                        case "avatar-history":
                                            (r || c) && (O = N.d.getLinkImage(r ? r.avatar : c.avatar), m = N.d.urlPersonalPage(r ? r.url || r._id : c.url || c._id), M = r ? r.name : c.name), o = l.a.createElement("td", {
                                                key: t
                                            }, B({
                                                url: m,
                                                avatar: O,
                                                name: M
                                            }));
                                            break;
                                        case "avatar-registed-history":
                                            (r || c) && (O = N.d.getLinkImage(r ? r.avatar : c.avatar), m = N.d.urlPersonalMemberShip(r), M = r ? r.name : c.name), o = l.a.createElement("td", {
                                                key: t
                                            }, B({
                                                url: m,
                                                avatar: O,
                                                name: M
                                            }));
                                            break;
                                        case "vip":
                                            O = N.d.getLinkImage(r), o = l.a.createElement("td", {
                                                key: t
                                            }, B({
                                                avatar: O
                                            }));
                                            break;
                                        case "func":
                                            o = w.DuoStatusTable(t, i._id, r, h, E);
                                            break;
                                        case "status":
                                            var L = i.operation ? "".concat(i.operation).concat(r) : r;
                                            o = I.checkStatus(t, L);
                                            break;
                                        case "message":
                                            o = l.a.createElement("td", {
                                                key: t,
                                                className: "message-donate"
                                            }, P.isShow && void 0 === i.replyMessage && i._id === P.id ? l.a.createElement(d.a, {
                                                component: V.i,
                                                name: i._id,
                                                placeholder: k.formatMessage({
                                                    id: "playerHistory.reply"
                                                }),
                                                onKeyUp: G,
                                                validate: z.E
                                            }) : r);
                                            break;
                                        case "message-donate":
                                            o = l.a.createElement("td", {
                                                key: t,
                                                className: "message-donate"
                                            }, c || r);
                                            break;
                                        case "reply":
                                            o = l.a.createElement("td", {
                                                key: t,
                                                className: "btn-action-table"
                                            }, l.a.createElement(s.a, {
                                                overlay: l.a.createElement(u.a, {
                                                    id: "send_mess"
                                                }, l.a.createElement(j.a, {
                                                    id: "cardtable.sendMess"
                                                })),
                                                placement: "top"
                                            }, l.a.createElement("p", null, void 0 === i.replyMessage && l.a.createElement("i", {
                                                className: "fa fa-reply fix-font-size",
                                                "aria-hidden": "true",
                                                onClick: function() {
                                                    return function(e) {
                                                        var t = P.id !== e ? {
                                                            id: e,
                                                            isShow: !0
                                                        } : {
                                                            isShow: !1
                                                        };
                                                        T(t)
                                                    }(i._id)
                                                }
                                            }))), l.a.createElement(s.a, {
                                                overlay: l.a.createElement(u.a, {
                                                    id: "block_user"
                                                }, l.a.createElement(j.a, {
                                                    id: "cardtable.block"
                                                })),
                                                placement: "top"
                                            }, l.a.createElement("p", null, !i.isBlocked && l.a.createElement("i", {
                                                className: "fa fa-ban",
                                                "aria-hidden": "true",
                                                onClick: function() {
                                                    return e = i, void y(v()(e, "customer._id"));
                                                    var e
                                                }
                                            }))));
                                            break;
                                        case "obj":
                                            o = l.a.createElement("td", {
                                                key: t
                                            }, l.a.createElement("div", null, r.publisher, " -", r.itemName));
                                            break;
                                        case "button":
                                            o = l.a.createElement("td", {
                                                key: t,
                                                className: "btn-action-table"
                                            }, i.permissions && l.a.createElement(s.a, {
                                                overlay: l.a.createElement(u.a, {
                                                    id: "user-membership-editlevel"
                                                }, l.a.createElement(j.a, {
                                                    id: "user-membership-editlevel"
                                                })),
                                                placement: "top"
                                            }, l.a.createElement("p", null, l.a.createElement("i", {
                                                className: "fas fa-edit fix-font-size",
                                                "aria-hidden": "true",
                                                onClick: function() {
                                                    return R(r)
                                                }
                                            }))), l.a.createElement(s.a, {
                                                overlay: l.a.createElement(u.a, {
                                                    id: "delete"
                                                }, l.a.createElement(j.a, {
                                                    id: "delete"
                                                })),
                                                placement: "top"
                                            }, l.a.createElement("p", null, i.totalMember && i.totalMember > 0 ? "" : l.a.createElement("i", {
                                                className: "fa fa-trash",
                                                "aria-hidden": "true",
                                                onClick: function() {
                                                    return C(r)
                                                }
                                            }))));
                                            break;
                                        case "showModal":
                                            o = l.a.createElement("td", {
                                                key: t
                                            }, !i.isReplyTransaction && l.a.createElement("i", {
                                                className: v()(i, "payUser") ? "fas fa-exchange-alt" : "fa fa-trash",
                                                "aria-hidden": "true",
                                                onClick: function() {
                                                    return K(i._id)
                                                }
                                            }), l.a.createElement(H, {
                                                submit: x,
                                                setNotificationStatus: _,
                                                showModal: D[i._id],
                                                name: r.name,
                                                userData: f,
                                                _id: r._id,
                                                payTransactionId: i._id,
                                                close: function() {
                                                    return K(i._id)
                                                },
                                                isLoading: p,
                                                requestUnlockSecurityCode: S
                                            }));
                                            break;
                                        case "time_rent":
                                            o = l.a.createElement("td", {
                                                key: t
                                            }, r + (i.timeRenewal || 0), " ", k.formatMessage({
                                                id: "hour"
                                            }));
                                            break;
                                        case "string":
                                            o = l.a.createElement("td", {
                                                key: t
                                            }, v()(i, "isReplyTransaction") ? k.formatMessage({
                                                id: "navdropdown.vidientu"
                                            }) : k.formatMessage({
                                                id: "navdropdown.nguoidung"
                                            }));
                                            break;
                                        case "quantily":
                                            o = l.a.createElement("td", {
                                                key: t
                                            }, r && "".concat(r.toLocaleString("en-EG"), "/").concat(function(e) {
                                                var t = null;
                                                return void 0 !== e && (t = 0 === e ? k.formatMessage({
                                                    id: "unlimit"
                                                }) : e.toLocaleString("en-EG")), t
                                            }(i.maxMember)));
                                            break;
                                        case "room":
                                            m = "messages/".concat(r), o = l.a.createElement("td", {
                                                key: t
                                            }, l.a.createElement(g.b, {
                                                to: "/".concat(m)
                                            }, r));
                                            break;
                                        default:
                                            o = l.a.createElement("td", {
                                                key: t
                                            }, r)
                                    }
                                    return o
                                }))
                            })
                        }, [Object(n.a)(a)]);
                    return l.a.createElement(m.a, {
                        striped: !0,
                        bordered: !0,
                        condensed: !0,
                        hover: !0,
                        responsive: !0
                    }, l.a.createElement("thead", null, l.a.createElement("tr", null, F)), l.a.createElement("tbody", null, Z))
                });
            K.defaultProps = {
                isLoadingTransfer: !1,
                userInformation: {},
                dataTable: [],
                showModalSuccess: function() {},
                showModalCancel: function() {},
                showModalBlock: function() {},
                sendReplyMess: function() {},
                funcButton: function() {},
                funcButtonEdit: function() {},
                setNotificationStatus: function() {},
                requestUnlockSecurityCode: function() {},
                onTransferUserMoneyRequest: function() {}
            };
            var Z = Object(f.a)({
                form: "TableForm"
            })(Object(p.g)(K));
            a.d(t, "a", function() {
                return Z
            })
        },
        863: function(e, t, a) {
            "use strict";
            var n = a(2),
                r = a(39),
                c = a(55),
                i = a(12),
                o = a.n(i),
                l = a(86),
                s = a(118),
                u = a(4),
                m = a(3),
                d = a(23),
                f = a(0),
                p = a.n(f),
                g = a(40),
                h = a(50),
                b = a(1055),
                E = a.n(b),
                v = a(283),
                y = a.n(v),
                k = function(e) {
                    var t = e.friends,
                        a = void 0 === t ? [] : t,
                        n = e.teammates,
                        r = void 0 === n ? [] : n,
                        c = e.peer,
                        i = e.volume,
                        o = e.authorId,
                        l = void 0 === o ? {} : o,
                        s = Object(f.useRef)(),
                        u = Object(f.useCallback)(function() {
                            if (!c.userId) return !0;
                            if (c.userId === l._id) return !1;
                            var e = -1;
                            return -1 !== (e = r.findIndex(function(e) {
                                return e._id === c.userId
                            })) ? !!r[e].isMuted : -1 !== (e = a.findIndex(function(e) {
                                return e._id === c.userId
                            })) ? !!a[e].isMuted : -1 === e
                        }, [c.userId, r, a, l]);
                    return Object(f.useEffect)(function() {
                        c.peer.on("stream", function(e) {
                            s.current && (s.current.srcObject = e)
                        })
                    }, []), Object(f.useEffect)(function() {
                        s && s.current && (u(), s.current.volume = 0)
                    }, [s.current, i, r, a]), p.a.createElement("audio", {
                        id: e.socketId,
                        ref: s,
                        playsInline: !0,
                        autoPlay: !0,
                        muted: !0
                    })
                },
                O = a(896),
                j = a(8),
                N = a.n(j),
                w = a(13),
                I = Object(f.createContext)({
                    stream: void 0,
                    start: void 0,
                    stop: function() {}
                }),
                C = function() {
                    return Object(f.useContext)(I)
                },
                _ = function(e) {
                    var t = e.children,
                        a = e.audio,
                        n = Object(f.useState)(),
                        r = Object(c.a)(n, 2),
                        i = r[0],
                        o = r[1];
                    Object(f.useEffect)(function() {
                        return function() {
                            i && i.getTracks().forEach(function(e) {
                                return e.stop()
                            })
                        }
                    }, [i]);
                    var l = Object(f.useCallback)(Object(w.a)(N.a.mark(function e() {
                            var t;
                            return N.a.wrap(function(e) {
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
                            i && (i.getTracks().forEach(function(e) {
                                return e.stop()
                            }), o(void 0))
                        }, [i]);
                    return p.a.createElement(I.Provider, {
                        value: {
                            stream: i,
                            stop: s,
                            start: l
                        }
                    }, t)
                },
                S = Object(f.createContext)({
                    audioCtx: void 0,
                    source: void 0
                }),
                x = function(e) {
                    var t = e.children,
                        a = Object(f.useState)(),
                        n = Object(c.a)(a, 2),
                        r = n[0],
                        i = n[1],
                        o = Object(f.useState)(),
                        l = Object(c.a)(o, 2),
                        s = l[0],
                        u = l[1],
                        m = C().stream,
                        d = Object(f.useCallback)(Object(w.a)(N.a.mark(function e() {
                            return N.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.prev = 0, !r) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.next = 4, r.close();
                                    case 4:
                                        i(void 0);
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
                            u(e.createMediaStreamSource(m)), i(e)
                        }
                    }, [m]), Object(f.useEffect)(function() {
                        return m || d(),
                            function() {
                                d()
                            }
                    }, [m, d]), p.a.createElement(S.Provider, {
                        value: {
                            audioCtx: r,
                            source: s
                        }
                    }, t)
                },
                R = Object(f.createContext)({
                    analyser: void 0
                }),
                M = function(e) {
                    var t = e.children,
                        a = Object(f.useState)(),
                        n = Object(c.a)(a, 2),
                        r = n[0],
                        i = n[1],
                        o = Object(f.useContext)(S).source;
                    return Object(f.useEffect)(function() {
                        if (o) {
                            var e = o.context.createAnalyser();
                            e.smoothingTimeConstant = 1, o.connect(e), i(e)
                        }
                    }, [o]), Object(f.useEffect)(function() {
                        return r && o && o.connect(r), o || r && (r.disconnect(), i(void 0)),
                            function() {
                                r && (r.disconnect(), i(void 0))
                            }
                    }, [r, o]), p.a.createElement(R.Provider, {
                        value: {
                            analyser: r
                        }
                    }, t)
                };

            function L(e, t) {
                var a;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (a = function(e, t) {
                        if (!e) return;
                        if ("string" === typeof e) return P(e, t);
                        var a = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === a && e.constructor && (a = e.constructor.name);
                        if ("Map" === a || "Set" === a) return Array.from(e);
                        if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return P(e, t)
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
                var c, i = !0,
                    o = !1;
                return {
                    s: function() {
                        a = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = a.next();
                        return i = e.done, e
                    },
                    e: function(e) {
                        o = !0, c = e
                    },
                    f: function() {
                        try {
                            i || null == a.return || a.return()
                        } finally {
                            if (o) throw c
                        }
                    }
                }
            }

            function P(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }
            var T = 0,
                A = function(e) {
                    var t = e.setState,
                        a = Object(f.createRef)(),
                        r = Object(f.useContext)(R).analyser,
                        c = C().start;
                    return Object(f.useEffect)(function() {
                        c()
                    }, []), Object(f.useEffect)(function() {
                        if (r) {
                            var e, c = new Uint8Array(r.frequencyBinCount);
                            return function i() {
                                e = requestAnimationFrame(i), r.getByteTimeDomainData(c);
                                var o = a.current;
                                if (o) {
                                    var l = o.height,
                                        s = o.width,
                                        u = o.getContext("2d"),
                                        m = 0,
                                        d = 1 * s / c.length;
                                    if (u) {
                                        u.lineWidth = 2, u.strokeStyle = "#fff", u.clearRect(0, 0, s, l), u.beginPath(), u.moveTo(0, l / 2);
                                        var f, p = L(c);
                                        try {
                                            for (p.s(); !(f = p.n()).done;) {
                                                var g = f.value / 255 * l;
                                                u.lineTo(m, g), m += d
                                            }
                                        } catch (y) {
                                            p.e(y)
                                        } finally {
                                            p.f()
                                        }
                                        u.lineTo(m, l / 2), u.stroke()
                                    }
                                }
                                for (var h, b = c.length, E = 0, v = 0; v < b;) E += Math.abs(c[v++]);
                                h = Math.sqrt(E / b), 0 === T && (T = setTimeout(function() {
                                    t(h > 11.2917 ? function(e) {
                                        return Object(n.a)({}, e, {
                                            isSpeaker: !0
                                        })
                                    } : function(e) {
                                        return Object(n.a)({}, e, {
                                            isSpeaker: !1
                                        })
                                    }), T = 0
                                }, 800))
                            }(),
                                function() {
                                    cancelAnimationFrame(e)
                                }
                        }
                    }, [a, r]), null
                },
                U = function(e) {
                    var t = e.children,
                        a = e.currentStream,
                        n = e.setState;
                    return p.a.createElement(_, {
                        stream: a,
                        video: !1,
                        audio: !0
                    }, p.a.createElement(x, null, p.a.createElement(M, null, p.a.createElement(A, {
                        setState: n
                    }), t)))
                },
                D = a(906);
            a.d(t, "a", function() {
                return Y
            }), a.d(t, "b", function() {
                return W
            });
            var q, G, F = {},
                B = function() {},
                H = {
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
                    state: H,
                    setState: function(e) {
                        return e
                    }
                },
                z = Object(f.createContext)(V),
                Y = function(e) {
                    var t = e.children,
                        a = Object(f.useState)(H),
                        i = Object(c.a)(a, 2),
                        b = i[0],
                        v = i[1],
                        j = Object(f.useRef)(),
                        N = b.categoryId,
                        w = b.detailRoom,
                        I = b.isSpeaker,
                        C = w || {},
                        _ = C.friends,
                        S = void 0 === _ ? [] : _,
                        x = C.teammates,
                        R = void 0 === x ? [] : x,
                        M = C.authorId,
                        L = Object(g.c)(),
                        P = Object(h.h)(),
                        T = Object(f.useState)([]),
                        A = Object(c.a)(T, 2),
                        V = A[0],
                        Y = A[1],
                        W = function() {
                            for (var e in F) F[e].peer.destroy();
                            Y([])
                        },
                        K = function(e, t, a) {
                            F[e] = {
                                peer: new E.a({
                                    stream: G,
                                    config: O.a,
                                    initiator: t
                                }),
                                userId: a
                            }, F[e].peer.on("signal", function(t) {
                                q.emit("signal", {
                                    socketId: e,
                                    signal: t
                                })
                            }), Y(function(t) {
                                return [].concat(Object(r.a)(t), [{
                                    socketId: e,
                                    peer: F[e]
                                }])
                            })
                        };
                    B = function(e) {
                        e ? j.current && (j.current.getAudioTracks()[0].enabled = !0) : j.current && (j.current.getAudioTracks()[0].enabled = !1)
                    };
                    var Z = function() {
                        q && q.close && (W(), q.close()), (q = y()("".concat(o.a.socketUrl, "/outside?gameId=").concat(b.categoryId, "&gameRoomId=").concat(P.id, "&token=").concat(localStorage.token), {
                            path: "/socket",
                            transports: ["websocket", "polling"]
                        })).on("initReceive", function(e) {
                            var t = e.socketId,
                                a = e.userId;
                            K(t, !1, a), q.emit("initSend", t)
                        }), q.on("initSend", function(e) {
                            var t = e.socketId,
                                a = e.userId;
                            K(t, !0, a)
                        }), q.on("anything", function(e) {
                            e.data.userId && v(function(t) {
                                var a = Object(r.a)(new Set([].concat(Object(r.a)(t.userOnMic), [e.data.userId])));
                                return Object(n.a)({}, t, {
                                    userOnMic: a
                                })
                            })
                        }), q.on("signal", function(e) {
                            var t = e.socketId,
                                a = e.signal;
                            try {
                                F[t].peer.signal(a)
                            } catch (n) {
                                console.log({
                                    error: n
                                })
                            }
                        }), q.on("error", function(e) {
                            console.log("error", e)
                        }), q.on("removePeer", function(e) {
                            ! function(e) {
                                F[e] && F[e].peer.destroy(), delete F[e], Y(function(t) {
                                    return t.filter(function(t) {
                                        return t.socketId !== e
                                    })
                                })
                            }(e)
                        }), q.on("game-room", function(e) {
                            "new-message-game-room" === e.action && (L(Object(s.g)({
                                newMessage: !0
                            })), L(Object(s.e)([], 0, e.data || {})), L(Object(s.g)({
                                newMessage: !1
                            }))), ["leave", "join"].includes(e.action) && L(Object(l.l)(e)), ["unmute", "mute"].includes(e.action) && L(Object(l.t)({
                                action: e.action,
                                userId: e.data.playerId
                            }))
                        })
                    };
                    Object(f.useEffect)(function() {
                        v(function(e) {
                            return Object(n.a)({}, e, {
                                muteMic: B
                            })
                        });
                        var e = setInterval(function() {
                            return v(function(e) {
                                return Object(n.a)({}, e, {
                                    userOnMic: []
                                })
                            })
                        }, 2e3);
                        return function() {
                            return clearInterval(e)
                        }
                    }, []), Object(f.useEffect)(function() {}, [I]), Object(f.useEffect)(function() {
                        var e = Object(d.get)(w, "authorId._id");
                        if (e) {
                            var t = y()("".concat(o.a.socketUrl, "/outside?deviceType=browser&playerId=").concat(e), {
                                path: "/socket",
                                transports: ["websocket", "polling"]
                            });
                            v(Object(n.a)({}, b, {
                                socketDonate: t
                            })), t.on("error", function(t) {
                                m.d.workerClientPostLog("SOCKET donate-streams/".concat(e), {
                                    error: t
                                })
                            }), t.on("donate-stream", function(e) {
                                v(Object(n.a)({}, b, {
                                    newDonate: Object(n.a)({}, e, {
                                        amount: e.payload.donationAmount,
                                        message: e.payload.message
                                    })
                                }))
                            })
                        }
                        return function() {
                            b.socketDonate && b.socketDonate.close(), v({
                                socketDonate: null
                            })
                        }
                    }, [Object(d.get)(w, "authorId._id")]), Object(f.useEffect)(function() {
                        return N && navigator.mediaDevices.getUserMedia(O.b).then(function(e) {
                            j.current = e, G = e.clone(), Z()
                        }).catch(function(e) {
                            m.d.workerClientPostLog("ERROR GET MediaStream", {
                                userAgent: navigator.userAgent,
                                error: e
                            }), L(Object(u.c)(!1, Object(D.a)(e.name))), Z()
                        }),
                            function() {
                                q && q.close && (q.close(), F = {}, W()), G && (j.current.getTracks().forEach(function(e) {
                                    return e.stop()
                                }), j.current = void 0, G.getTracks().forEach(function(e) {
                                    return e.stop()
                                }), G = void 0), j.current = null
                            }
                    }, [N, P.id]), Object(f.useEffect)(function() {
                        v(Object(n.a)({}, b, {
                            newDonate: null
                        }))
                    }, [w._id]);
                    var J = {
                        state: b,
                        setState: v,
                        currentPeers: V
                    };
                    return p.a.createElement(U, {
                        setState: v,
                        audio: !0
                    }, p.a.createElement(z.Provider, {
                        value: J
                    }, V.map(function(e, t) {
                        return p.a.createElement(k, Object.assign({
                            key: t + "audio",
                            volume: b.volume,
                            teammates: R,
                            authorId: M,
                            friends: S
                        }, e))
                    }), t))
                },
                W = function() {
                    var e = Object(f.useContext)(z),
                        t = e.state,
                        a = e.setState;
                    return Object(n.a)({}, t, {
                        emitJoinRoom: function(e) {
                            var t = e.gameId,
                                a = e.gameRoomId;
                            q && q.emit && q.emit("game-room", {
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
                            B(e), e ? (a(Object(n.a)({}, t, {
                                isMute: !1
                            })), G && (G.getAudioTracks()[0].enabled = !0)) : (a(Object(n.a)({}, t, {
                                isMute: !0
                            })), G && (G.getAudioTracks()[0].enabled = !1))
                        }
                    })
                }
        },
        864: function(e, t, a) {
            "use strict";
            var n = a(54),
                r = a(14),
                c = a(15),
                i = a(26),
                o = a(27),
                l = a(19),
                s = a(0),
                u = a.n(s),
                m = a(40),
                d = a(159),
                f = a(829),
                p = a(6),
                g = a(160),
                h = a.n(g),
                b = a(91),
                E = a(271),
                v = a(272),
                y = a(46);
            a(868);

            function k(e) {
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
                    var a, n = Object(l.a)(e);
                    if (t) {
                        var r = Object(l.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(o.a)(this, a)
                }
            }
            var O = function(e) {
                Object(i.a)(a, e);
                var t = k(a);

                function a(e) {
                    var c;
                    return Object(r.a)(this, a), (c = t.call(this, e)).onChange = function(e) {
                        e.preventDefault();
                        var t = e.target,
                            a = t.name,
                            r = t.value,
                            i = r || "";
                        "amount" === a && (i = r ? parseInt(r.replace(/[\D\s]+/g, ""), 0) : 0), c.setState(Object(n.a)({
                            errMoney: null,
                            errMess: null,
                            errName: null
                        }, a, i))
                    }, c.onDonate = function() {
                        var e = sessionStorage.getItem("unlockTime"),
                            t = localStorage.getItem("token"),
                            a = localStorage.getItem("lang") || "vi",
                            n = c.state,
                            r = n.amount,
                            i = n.displayName,
                            o = n.message,
                            l = n.playerId,
                            s = n.securityLock,
                            u = n.totalMoney;
                        if (t) {
                            if (u < r) return alert("S\u1ed1 d\u01b0 hi\u1ec7n t\u1ea1i kh\xf4ng \u0111\u1ee7!");
                            if (s && e || void 0 === s) {
                                if (i && i.length > 30) return c.setState({
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
                                }) : c.props.submit(r, i, o, l, e, a) : c.setState({
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
                            i = t.showModalUnlock,
                            o = t.totalMoney,
                            l = t.playerName,
                            s = t.showModalLoadCredit,
                            m = t.errMoney,
                            g = t.errMess,
                            k = t.errName,
                            O = this.props,
                            j = O.isLoading,
                            N = O.info,
                            w = O.totalTimeHasBeenRent,
                            I = O.totalReviewsPlayer,
                            C = O.isConnect,
                            _ = C ? " Tip " : " Donate ",
                            S = !1;
                        return w < 10 && I < 5 && (S = !0), u.a.createElement(d.a, {
                            className: "modal-donate",
                            show: a,
                            onHide: function() {
                                e.setState({
                                    showModal: !1
                                }), e.props.close(!1)
                            }
                        }, u.a.createElement(d.a.Header, {
                            closeButton: !0
                        }, u.a.createElement(d.a.Title, null, _)), u.a.createElement(d.a.Body, null, u.a.createElement("table", null, u.a.createElement("tbody", null, u.a.createElement("tr", null, u.a.createElement("td", null, u.a.createElement(p.b, {
                            id: "shoptable.nguoinhan"
                        }), ":"), u.a.createElement("td", null, N && N.typePage && "user" === N.typePage ? N.data.name : l)), u.a.createElement("tr", null, u.a.createElement("td", null, u.a.createElement(p.b, {
                            id: "title.currentbalance"
                        }), ":"), u.a.createElement("td", null, u.a.createElement("span", {
                            className: "total-amount"
                        }, o ? u.a.createElement(y.a, {
                            money: o
                        }) : "0\u0111"), u.a.createElement("span", {
                            className: "load-more-credit",
                            onClick: function() {
                                return e.setState({
                                    showModalLoadCredit: !0
                                })
                            }
                        }, "+"))), u.a.createElement("tr", null, u.a.createElement("td", null, u.a.createElement(p.b, {
                            id: "playerprofile.sotiendonate"
                        }), _, ":"), u.a.createElement("td", null, u.a.createElement(f.a, {
                            type: "text",
                            name: "amount",
                            value: n.toLocaleString(),
                            onChange: this.onChange
                        }), u.a.createElement("span", {
                            className: "total-amount"
                        }, m))), !C && u.a.createElement("tr", null, u.a.createElement("td", null, u.a.createElement(p.b, {
                            id: "infoform.tenhienthi"
                        })), u.a.createElement("td", null, u.a.createElement(f.a, {
                            type: "text",
                            name: "displayName",
                            value: r,
                            onChange: this.onChange
                        }), u.a.createElement("span", {
                            className: "total-amount"
                        }, k))), u.a.createElement("tr", null, u.a.createElement("td", {
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
                        }, g))), !C && S && u.a.createElement("tr", null, u.a.createElement("td", {
                            class: "text-warning",
                            colSpan: 2
                        }, u.a.createElement(p.b, {
                            id: "playerprofile.warningrent"
                        })))))), u.a.createElement(d.a.Footer, null, C && u.a.createElement("p", {
                            className: "note-modal"
                        }, "1 ", u.a.createElement("i", {
                            className: "fab fa-bitcoin"
                        }), " = 1,000 \u0111"), u.a.createElement(b.a, {
                            bsStyle: "danger",
                            fill: !0,
                            onClick: this.onDonate
                        }, j ? u.a.createElement(h.a, {
                            name: "ball-scale-ripple",
                            color: "white",
                            fadeIn: "none"
                        }) : _), u.a.createElement(b.a, {
                            onClick: function() {
                                e.setState({
                                    showModal: !1
                                }), e.props.close(!1)
                            }
                        }, u.a.createElement(p.b, {
                            id: "close"
                        }))), u.a.createElement(E.a, {
                            closeModal: function() {
                                return e.setState({
                                    showModalUnlock: !1
                                })
                            },
                            isLoading: !1,
                            isShow: i
                        }), u.a.createElement(v.a, {
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
            O.defaultProps = {
                totalTimeHasBeenRent: 0,
                totalReviewsPlayer: 0,
                duoData: {}
            };
            t.a = Object(m.b)(function(e) {
                return {
                    userInformation: e.userInformation.data,
                    isLoading: e.common.data.donateLoading
                }
            }, null)(Object(p.g)(O))
        },
        866: function(e, t, a) {},
        868: function(e, t, a) {},
        871: function(e, t, a) {
            e.exports = a(921)
        },
        877: function(e, t) {},
        879: function(e, t, a) {
            "use strict";
            var n = a(55),
                r = a(0),
                c = a.n(r),
                i = a(837),
                o = a(829),
                l = a(6);
            a(933);
            t.a = Object(l.g)(function(e) {
                var t = e.onPostSearch,
                    a = e.intl,
                    l = e.placeholder,
                    s = e.disabled,
                    u = e.match,
                    m = Object(r.useState)(""),
                    d = Object(n.a)(m, 2),
                    f = d[0],
                    p = d[1];
                Object(r.useEffect)(function() {
                    p("")
                }, [u]);
                var g = function() {
                    t(f.trim())
                };
                return c.a.createElement("div", {
                    className: "group-search"
                }, c.a.createElement(i.a, {
                    className: "search"
                }, c.a.createElement(o.a, {
                    placeholder: l || a.formatMessage({
                        id: "userPlayer.searchposts"
                    }),
                    type: "text",
                    name: "name",
                    value: f,
                    onChange: function(e) {
                        e.preventDefault();
                        var t = e.target,
                            a = t.type,
                            n = t.checked,
                            r = t.value,
                            c = "checkbox" === a ? n : r.replace(/[&\/\\#,+()$~%.'":*?<>{}!@]/g, "");
                        p(c)
                    },
                    onKeyUp: function(e) {
                        e.preventDefault(), 13 === e.keyCode && g()
                    },
                    disabled: s
                }), c.a.createElement(i.a.Addon, null, c.a.createElement("i", {
                    className: "fa fa-search",
                    "aria-hidden": "true",
                    onClick: g
                }))))
            })
        },
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
        897: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                c = a(1465),
                i = a(1491),
                o = a(861),
                l = a.n(o);
            t.a = r.a.memo(function(e) {
                var t = r.a.createElement(c.a, {
                    id: l.a.generate()
                }, e.tooltip);
                return r.a.createElement(i.a, {
                    placement: "top",
                    overlay: t
                }, r.a.createElement("div", null, e.children || ""))
            })
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
                        i = void 0 === c ? [] : c,
                        o = e.userId;
                    if (o === a._id) return !0;
                    return -1 !== r.findIndex(function(e) {
                        return e._id === o
                    }) || -1 !== i.findIndex(function(e) {
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
        921: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t
                    }
                }(),
                r = a(0),
                c = o(r),
                i = o(a(1));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var a = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return a.scrollListener = a.scrollListener.bind(a), a.eventListenerOptions = a.eventListenerOptions.bind(a), a.mousewheelListener = a.mousewheelListener.bind(a), a
                }
                return function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, r.Component), n(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.pageLoaded = this.props.pageStart, this.options = this.eventListenerOptions(), this.attachScrollListener()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        if (this.props.isReverse && this.loadMore) {
                            var e = this.getParentElement(this.scrollComponent);
                            e.scrollTop = e.scrollHeight - this.beforeScrollHeight + this.beforeScrollTop, this.loadMore = !1
                        }
                        this.attachScrollListener()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.detachScrollListener(), this.detachMousewheelListener()
                    }
                }, {
                    key: "isPassiveSupported",
                    value: function() {
                        var e = !1,
                            t = {
                                get passive() {
                                    e = !0
                                }
                            };
                        try {
                            document.addEventListener("test", null, t), document.removeEventListener("test", null, t)
                        } catch (a) {}
                        return e
                    }
                }, {
                    key: "eventListenerOptions",
                    value: function() {
                        var e = this.props.useCapture;
                        return this.isPassiveSupported() && (e = {
                            useCapture: this.props.useCapture,
                            passive: !0
                        }), e
                    }
                }, {
                    key: "setDefaultLoader",
                    value: function(e) {
                        this.defaultLoader = e
                    }
                }, {
                    key: "detachMousewheelListener",
                    value: function() {
                        var e = window;
                        !1 === this.props.useWindow && (e = this.scrollComponent.parentNode), e.removeEventListener("mousewheel", this.mousewheelListener, this.options ? this.options : this.props.useCapture)
                    }
                }, {
                    key: "detachScrollListener",
                    value: function() {
                        var e = window;
                        !1 === this.props.useWindow && (e = this.getParentElement(this.scrollComponent)), e.removeEventListener("scroll", this.scrollListener, this.options ? this.options : this.props.useCapture), e.removeEventListener("resize", this.scrollListener, this.options ? this.options : this.props.useCapture)
                    }
                }, {
                    key: "getParentElement",
                    value: function(e) {
                        var t = this.props.getScrollParent && this.props.getScrollParent();
                        return null != t ? t : e && e.parentNode
                    }
                }, {
                    key: "filterProps",
                    value: function(e) {
                        return e
                    }
                }, {
                    key: "attachScrollListener",
                    value: function() {
                        var e = this.getParentElement(this.scrollComponent);
                        if (this.props.hasMore && e) {
                            var t = window;
                            !1 === this.props.useWindow && (t = e), t.addEventListener("mousewheel", this.mousewheelListener, this.options ? this.options : this.props.useCapture), t.addEventListener("scroll", this.scrollListener, this.options ? this.options : this.props.useCapture), t.addEventListener("resize", this.scrollListener, this.options ? this.options : this.props.useCapture), this.props.initialLoad && this.scrollListener()
                        }
                    }
                }, {
                    key: "mousewheelListener",
                    value: function(e) {
                        1 !== e.deltaY || this.isPassiveSupported() || e.preventDefault()
                    }
                }, {
                    key: "scrollListener",
                    value: function() {
                        var e = this.scrollComponent,
                            t = window,
                            a = this.getParentElement(e),
                            n = void 0;
                        if (this.props.useWindow) {
                            var r = document.documentElement || document.body.parentNode || document.body,
                                c = void 0 !== t.pageYOffset ? t.pageYOffset : r.scrollTop;
                            n = this.props.isReverse ? c : this.calculateOffset(e, c)
                        } else n = this.props.isReverse ? a.scrollTop : e.scrollHeight - a.scrollTop - a.clientHeight;
                        n < Number(this.props.threshold) && e && null !== e.offsetParent && (this.detachScrollListener(), this.beforeScrollHeight = a.scrollHeight, this.beforeScrollTop = a.scrollTop, "function" === typeof this.props.loadMore && (this.props.loadMore(this.pageLoaded += 1), this.loadMore = !0))
                    }
                }, {
                    key: "calculateOffset",
                    value: function(e, t) {
                        return e ? this.calculateTopPosition(e) + (e.offsetHeight - t - window.innerHeight) : 0
                    }
                }, {
                    key: "calculateTopPosition",
                    value: function(e) {
                        return e ? e.offsetTop + this.calculateTopPosition(e.offsetParent) : 0
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.filterProps(this.props),
                            a = t.children,
                            n = t.element,
                            r = t.hasMore,
                            i = (t.initialLoad, t.isReverse),
                            o = t.loader,
                            l = (t.loadMore, t.pageStart, t.ref),
                            s = (t.threshold, t.useCapture, t.useWindow, t.getScrollParent, function(e, t) {
                                var a = {};
                                for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (a[n] = e[n]);
                                return a
                            }(t, ["children", "element", "hasMore", "initialLoad", "isReverse", "loader", "loadMore", "pageStart", "ref", "threshold", "useCapture", "useWindow", "getScrollParent"]));
                        s.ref = function(t) {
                            e.scrollComponent = t, l && l(t)
                        };
                        var u = [a];
                        return r && (o ? i ? u.unshift(o) : u.push(o) : this.defaultLoader && (i ? u.unshift(this.defaultLoader) : u.push(this.defaultLoader))), c.default.createElement(n, s, u)
                    }
                }]), t
            }();
            l.propTypes = {
                children: i.default.node.isRequired,
                element: i.default.node,
                hasMore: i.default.bool,
                initialLoad: i.default.bool,
                isReverse: i.default.bool,
                loader: i.default.node,
                loadMore: i.default.func.isRequired,
                pageStart: i.default.number,
                ref: i.default.func,
                getScrollParent: i.default.func,
                threshold: i.default.number,
                useCapture: i.default.bool,
                useWindow: i.default.bool
            }, l.defaultProps = {
                element: "div",
                hasMore: !1,
                initialLoad: !0,
                pageStart: 0,
                ref: null,
                threshold: 250,
                useWindow: !0,
                isReverse: !1,
                useCapture: !1,
                loader: null,
                getScrollParent: null
            }, t.default = l, e.exports = t.default
        },
        933: function(e, t, a) {},
        961: function(e, t, a) {},
        962: function(e, t, a) {},
        964: function(e, t, a) {},
        965: function(e, t, a) {},
        966: function(e, t, a) {
            "use strict";
            var n = a(14),
                r = a(15),
                c = a(26),
                i = a(27),
                o = a(19),
                l = a(0),
                s = a.n(l),
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
                    return Object(i.a)(this, a)
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
            }(l.PureComponent);
            t.a = f
        },
        967: function(e, t, a) {},
        974: function(e, t, a) {},
        975: function(e, t, a) {},
        976: function(e, t, a) {},
        978: function(e, t, a) {},
        979: function(e, t, a) {},
        980: function(e, t, a) {},
        981: function(e, t, a) {},
        988: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                c = a(871),
                i = a.n(c),
                o = a(55),
                l = a(1462),
                s = a(30),
                u = a(6),
                m = a(860),
                d = a.n(m),
                f = a(3),
                p = a(28),
                g = a(159),
                h = a(1269),
                b = a(1467),
                E = a(829),
                v = a(1468),
                y = a(157),
                k = function(e) {
                    var t = e.show,
                        a = e.setShow,
                        c = e.blockUserRequest,
                        i = e.author,
                        l = Object(n.useState)(""),
                        s = Object(o.a)(l, 2),
                        u = s[0],
                        m = s[1],
                        d = Object(n.useState)(""),
                        f = Object(o.a)(d, 2),
                        p = f[0],
                        k = f[1],
                        O = function() {
                            a(!1)
                        };
                    return r.a.createElement(g.a, {
                        show: t,
                        onHide: O
                    }, r.a.createElement(g.a.Header, {
                        closeButton: !0
                    }, r.a.createElement(g.a.Title, null, "C\u1ea5m chat")), r.a.createElement(g.a.Body, null, r.a.createElement(h.a, {
                        controlId: "formBasicText",
                        validationState: function() {
                            var e = u.length;
                            return e > 0 ? "success" : 0 === e || e > 255 ? "error" : null
                        }()
                    }, r.a.createElement(b.a, null, "L\xed do c\u1ea5m chat"), r.a.createElement(E.a, {
                        type: "text",
                        value: u,
                        placeholder: "l\xed do",
                        onChange: function(e) {
                            m(e.target.value), e.target.value && e.target.value.length > 255 ? k("T\u1ed1i \u0111a 255 k\xed t\u1ef1") : k("")
                        }
                    }), r.a.createElement(E.a.Feedback, null), r.a.createElement(v.a, null, p || null))), r.a.createElement(g.a.Footer, null, r.a.createElement(y.a, {
                        onClick: O
                    }, "Close"), r.a.createElement(y.a, {
                        bsStyle: "danger",
                        onClick: function() {
                            0 === u.trim().length ? k("Tr\u01b0\u1eddng n\xe0y kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng.") : c(i._id, {
                                status: "block",
                                reason: u
                            })
                        }
                    }, "Block")))
                },
                O = (a(961), function(e) {
                    var t = e.message,
                        a = e.createdAt,
                        c = e.author,
                        i = (e.isConnect, e.blockUserRequest),
                        m = /(https?:\/\/[^\s]+)\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g,
                        g = /playerduo.com|youtube.com|facebook.com|discord.com/gi,
                        h = /iframe|img/gi,
                        b = Object(n.useState)(!1),
                        E = Object(o.a)(b, 2),
                        v = E[0],
                        y = E[1];
                    if (!t) return null;
                    var O = t.split("\n").map(function(e, t) {
                        var a = e.replace(m, "<a target='_blank' href='$1' class='link'>$1</a>");
                        a.includes("<a target") && !g.test(a) && (a = e.replace(m, "")), h.test(a) && (a = a.replace("/>", ""));
                        var n = d()(a);
                        return 1 === e.indexOf("\n") ? -1 !== e.indexOf("https://") || -1 !== e.indexOf("http://") ? n : e.slice(e.indexOf("\n")) : -1 !== e.indexOf("https://") || -1 !== e.indexOf("http://") ? n : e ? n : r.a.createElement("br", null)
                    });
                    return r.a.createElement(l.a, {
                        className: "global_message__item"
                    }, r.a.createElement(l.a.Left, null, r.a.createElement(s.b, {
                        to: "/".concat(c.url || "page".concat(c._id)),
                        target: "_blank"
                    }, r.a.createElement(p.a, {
                        size: "sm",
                        url: f.d.getLinkImage(c.avatar),
                        sizeVip: 18,
                        rankVip: c.rank && f.d.urlRankVip_New(c.rank),
                        classRank: "rank-vip",
                        trustTypes: c.trustTypes && c.trustTypes[0]
                    }))), r.a.createElement(l.a.Body, {
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
                            y(!0)
                        },
                        class: "fas fa-ban"
                    }), " ", ":", " ")), r.a.createElement("p", {
                        className: "mess-global"
                    }, O)), r.a.createElement(l.a.Right, {
                        className: "hidden-xs"
                    }, r.a.createElement(u.c, {
                        value: a,
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric"
                    })), r.a.createElement(k, {
                        author: c,
                        show: v,
                        setShow: y,
                        blockUserRequest: i
                    }))
                });
            O.defaultProps = {
                message: "",
                author: {}
            };
            var j = O,
                N = (a(962), function(e) {
                    var t = e.data,
                        a = e.fetchGlobalMessage,
                        c = e.page,
                        o = e.setPage,
                        l = e.extend,
                        s = e.isConnect,
                        u = e.blockUserRequest,
                        m = t || {},
                        d = m.messages,
                        f = m.loadingMessage,
                        p = void 0 === f ? {} : f,
                        g = m.hasMore,
                        h = m.idUserAuthorChat,
                        b = Object(n.useRef)(null);
                    Object(n.useEffect)(function() {
                        p.message || 1 !== c || s || (a(c), o(c + 1)), b.current && Array.isArray(d) && d.length <= 20 && b.current.scrollIntoView(!1)
                    }, [d]), Object(n.useEffect)(function() {
                        s && (a(1), o(2), b.current.scrollIntoView(!1))
                    }, [s]);
                    Object(n.useEffect)(function() {
                        var e = document.getElementById("global-chat"),
                            t = l ? 400 : 270;
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
                            (localStorage.idUser === h || !p.newMessage && e && n) && b.current.scrollIntoView(!1)
                        }
                    }, [p.newMessage]);
                    return r.a.createElement("div", {
                        id: "global-chat",
                        className: "global-chat-display"
                    }, r.a.createElement(i.a, {
                        pageStart: 0,
                        loadMore: function() {
                            d && d[0] && (p.message || (a(c), o(c + 1)))
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
                        return r.a.createElement(j, Object.assign({
                            key: e._id,
                            author: e.sender || {},
                            message: e.body ? e.body.content : "",
                            isConnect: !0,
                            blockUserRequest: u
                        }, e))
                    }) : (d || []).map(function(e) {
                        return r.a.createElement(j, Object.assign({
                            key: e._id
                        }, e, {
                            blockUserRequest: u
                        }))
                    }), r.a.createElement("div", {
                        ref: b
                    })))
                }),
                w = a(40),
                I = a(7),
                C = a.n(I),
                _ = a(864),
                S = a(161),
                x = a(1090),
                R = a(863),
                M = (a(964), function(e) {
                    var t = e.isHide,
                        a = e.setIsHide,
                        n = Object(R.b)(),
                        c = n.volume,
                        i = n.setVolume;
                    return r.a.createElement(r.a.Fragment, null, 0 === c ? r.a.createElement("i", {
                        className: "fa fa-volume-mute"
                    }) : r.a.createElement("i", {
                        className: "fas fa-volume-up"
                    }), " ", r.a.createElement("span", null, "\xc2m l\u01b0\u1ee3ng"), r.a.createElement("div", {
                        className: "volume__voice "
                    }, r.a.createElement("div", {
                        className: "volume__voice--control ".concat(t ? "hide" : "show")
                    }, r.a.createElement(x.a, {
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
                            i(t)
                        }
                    }))))
                }),
                L = a(4),
                P = function() {
                    Object(R.b)().muteLocalMic;
                    var e = Object(n.useState)(!1),
                        t = Object(o.a)(e, 2),
                        a = t[0],
                        c = (t[1], Object(w.c)());
                    return r.a.createElement("p", {
                        className: "btn-micro",
                        onClick: function() {
                            return c(Object(L.c)(!1, "H\u1ec7 th\u1ed1ng \xe2m thanh \u0111ang b\u1ea3o tr\xec"))
                        }
                    }, a ? r.a.createElement(r.a.Fragment, null, r.a.createElement("i", {
                        className: "fas fa-microphone"
                    }), " ", r.a.createElement("span", null, "T\u1eaft mic")) : r.a.createElement(r.a.Fragment, null, r.a.createElement("i", {
                        class: "fas fa-microphone-slash"
                    }), " ", r.a.createElement("span", null, "B\u1eadt mic")))
                },
                T = Object(u.g)(function(e) {
                    var t = e.intl,
                        a = e.requestGlobalMessage,
                        c = e.setNotificationStatus,
                        i = e.extend,
                        l = e.setExtend,
                        s = e.isConnect,
                        u = e.disabledChat,
                        m = Object(n.useState)(""),
                        d = Object(o.a)(m, 2),
                        p = d[0],
                        g = d[1],
                        b = Object(n.useState)(!0),
                        v = Object(o.a)(b, 2),
                        y = v[0],
                        k = v[1],
                        O = Object(n.useState)(!1),
                        j = Object(o.a)(O, 2),
                        N = j[0],
                        I = j[1],
                        x = Object(w.c)(),
                        R = Object(w.d)(function(e) {
                            return e.gameCategory.detailRoom
                        }),
                        L = function(e) {
                            if ((0 !== p.trim().length && (!(p.trim().length > 255) || (c(!1, t.formatMessage({
                                id: "err.max200char"
                            })), 0)) && f.d.filterChar(p) || e) && localStorage.token) {
                                var n = {
                                    body: {
                                        content: e || p.trim()
                                    },
                                    type: "text"
                                };
                                a(s ? n : p.trim())
                            }
                            g("")
                        };
                    return r.a.createElement(h.a, {
                        controlId: "formBasicText",
                        className: s && "connect-room"
                    }, r.a.createElement(E.a, {
                        type: "text",
                        value: p,
                        placeholder: e.intl.formatMessage({
                            id: "playerHistory.reply"
                        }),
                        onChange: function(e) {
                            g(e.target.value)
                        },
                        onKeyPress: function(e) {
                            e.shiftKey || 13 === e.charCode && (L(), e.preventDefault())
                        },
                        maxLength: 255,
                        disabled: !localStorage.getItem("token") || u
                    }), r.a.createElement(E.a.Feedback, null), l && r.a.createElement("p", {
                        className: "extend-chat",
                        onClick: function() {
                            return l(!i)
                        }
                    }, r.a.createElement("i", {
                        className: "fa fa-bars"
                    })), s && r.a.createElement("div", {
                        className: "connect-chat"
                    }, r.a.createElement(P, null), r.a.createElement("p", {
                        className: "btn-volume",
                        onClick: function() {
                            return k(!y)
                        }
                    }, r.a.createElement(M, {
                        isHide: y,
                        setIsHide: k
                    })), r.a.createElement("p", {
                        className: "btn-tip",
                        onClick: function() {
                            if (localStorage.token) return localStorage.idUser === C()(R, "authorId._id", "") ? c(!1, t.formatMessage({
                                id: "playerDonate.yourself"
                            })) : void I(!0)
                        }
                    }, r.a.createElement("i", {
                        className: "fab fa-bitcoin"
                    }), " ", r.a.createElement("span", null, "Tip")), r.a.createElement(_.a, {
                        show: N,
                        close: function() {
                            return I(!1)
                        },
                        playerInformation: {
                            playerSetting: {
                                nickName: C()(R, "authorId.name", "")
                            },
                            _id: C()(R, "authorId._id", "")
                        },
                        submit: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                t = arguments.length > 1 ? arguments[1] : void 0,
                                a = arguments.length > 2 ? arguments[2] : void 0,
                                n = arguments.length > 3 ? arguments[3] : void 0,
                                r = arguments.length > 4 ? arguments[4] : void 0,
                                c = arguments.length > 5 ? arguments[5] : void 0;
                            x(Object(S.b)({
                                amount: e,
                                displayName: t,
                                message: a,
                                pdUserReceive: n,
                                unlockTime: r,
                                lang: c
                            })), L("\u0110\xe3 \u1ee7ng h\u1ed9 <strong>".concat(e / 1e3, "</strong> <i class='fab fa-bitcoin' />")), I(!1)
                        },
                        unlockSecurityCode: function(e) {
                            return x(Object(S.f)(e))
                        },
                        isConnect: !0
                    })))
                });
            a(965), t.a = function(e) {
                var t = e.data,
                    a = e.fetchGlobalMessage,
                    n = e.requestGlobalMessage,
                    c = e.setNotificationStatus,
                    i = e.page,
                    o = e.setPage,
                    l = e.extend,
                    s = e.setExtend,
                    u = e.isConnect,
                    m = e.disabledChat,
                    d = e.blockUserRequest;
                return r.a.createElement("div", {
                    className: "global-chat"
                }, r.a.createElement(N, {
                    data: t,
                    fetchGlobalMessage: a,
                    page: i,
                    setPage: o,
                    extend: l,
                    isConnect: u,
                    blockUserRequest: d
                }), r.a.createElement(T, {
                    requestGlobalMessage: n,
                    setNotificationStatus: c,
                    extend: l,
                    setExtend: s,
                    isConnect: u,
                    disabledChat: m
                }))
            }
        },
        990: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                c = a(857),
                i = a(9),
                o = function(e) {
                    var t = e.gameRooms,
                        a = e.requestGetRooms,
                        o = e.dataUser,
                        l = e.funcButtonEdit,
                        s = e.funcButton;
                    Object(n.useEffect)(function() {
                        o && o._id && a(o._id)
                    }, [o]);
                    var u = [{
                        name: r.a.createElement(i.a, {
                            id: "gameprofile.gameName"
                        }),
                        value: "gameId.name",
                        typeData: ""
                    }, {
                        name: r.a.createElement(i.a, {
                            id: "gameprofile.roomName"
                        }),
                        value: "name",
                        typeData: ""
                    }, {
                        name: r.a.createElement(i.a, {
                            id: "gameprofile.roomTitle"
                        }),
                        value: "title",
                        typeData: ""
                    }, {
                        name: r.a.createElement(i.a, {
                            id: "gameprofile.description"
                        }),
                        value: "description",
                        typeData: ""
                    }, {
                        name: "S\u1ed0 L\u01af\u1ee2NG NG\u01af\u1edcI CH\u01a0I CHUNG",
                        value: "maxTeammate"
                    }, {
                        name: "",
                        value: "",
                        typeData: "button"
                    }];
                    return r.a.createElement(c.a, {
                        dataTH: u,
                        dataTable: t.data,
                        isEdit: !0,
                        funcButtonEdit: l,
                        funcButton: s
                    })
                },
                l = a(157),
                s = (a(978), function(e) {
                    var t = e.isCreate,
                        a = e.setIsCreate;
                    return r.a.createElement("div", {
                        className: "customer--game--header"
                    }, r.a.createElement("h3", null, t ? "T\u1ea1o Ph\xf2ng" : r.a.createElement(i.a, {
                        id: "gameprofile.ListRoomProfile"
                    })), r.a.createElement(l.a, {
                        className: "btn-create-game",
                        type: "button",
                        onClick: function() {
                            a(!t)
                        }
                    }, t ? r.a.createElement(r.a.Fragment, null, r.a.createElement("i", {
                        className: "fas fa-list-alt"
                    }), " Danh s\xe1ch") : r.a.createElement(r.a.Fragment, null, r.a.createElement("i", {
                        className: "fas fa-plus"
                    }), " T\u1ea1o ph\xf2ng")))
                }),
                u = a(2),
                m = a(55),
                d = a(160),
                f = a.n(d),
                p = a(834),
                g = a(1480),
                h = a(7),
                b = a.n(h),
                E = a(65),
                v = a(3),
                y = a(845),
                k = (a(979), function(e) {
                    e.data, e.err;
                    var t = e.loading,
                        a = e.gameCategory,
                        c = e.room,
                        o = e.gameId,
                        l = e.initialize,
                        s = e.handleSubmit,
                        d = e.onUpdate,
                        g = Object(n.useState)({}),
                        h = Object(m.a)(g, 2),
                        k = h[0],
                        O = h[1],
                        j = Object(n.useState)(""),
                        N = Object(m.a)(j, 2),
                        w = N[0],
                        I = N[1],
                        C = Object(n.useState)({
                            description: !0
                        }),
                        _ = Object(m.a)(C, 2),
                        S = _[0],
                        x = _[1];
                    Object(n.useEffect)(function() {
                        var e = a.find(function(e) {
                            return e._id === (o || c.gameId._id)
                        });
                        e && O(e), c ? (l(Object(u.a)({}, c, {
                            gameCategories: c.gameId._id,
                            maxFriend: 3
                        })), I(c.background), x(Object(u.a)({}, S, {
                            description: c.description.length < 4
                        }))) : (l({
                            joinCondition: {
                                minRank: 1,
                                maxRank: 2
                            },
                            maxTeammate: 6,
                            name: "",
                            description: "",
                            maxFriend: 3,
                            gameCategories: o || "",
                            background: e.backgrounds[0],
                            status: 2
                        }), I(e.backgrounds[0]))
                    }, []);
                    var R = function() {
                        var e = b()(k, "setupFields.rank.moreInfo", {});
                        return Object.keys(e).map(function(t, a) {
                            return r.a.createElement("option", {
                                key: a + "condition",
                                value: t
                            }, e[t])
                        })
                    };
                    return r.a.createElement("form", {
                        className: "playerinfo-form row",
                        onSubmit: s(d)
                    }, r.a.createElement("div", {
                        className: "col-md-12"
                    }, r.a.createElement("div", {
                        className: "fieldGroup name-player"
                    }, r.a.createElement("p", null, r.a.createElement(i.a, {
                        id: "gameprofile.gamecategory"
                    }), " *"), r.a.createElement(p.a, {
                        name: "gameCategories",
                        component: "select",
                        onChange: function(e, t, n, r) {
                            var c = a.find(function(e) {
                                return e._id === t
                            });
                            O(c)
                        },
                        disabled: !0
                    }, r.a.createElement("option", {
                        value: -1
                    }, "---Ch\u1ecdn game---"), function() {
                        var e = null;
                        return a && a.length > 0 && (e = a.map(function(e, t) {
                            return r.a.createElement("option", {
                                key: t,
                                value: e._id,
                                disabled: !!o
                            }, e.name)
                        })), e
                    }())), r.a.createElement("div", {
                        className: "fieldGroup name-player"
                    }, r.a.createElement("p", null, r.a.createElement(i.a, {
                        id: "title.statusdisplayroom"
                    })), r.a.createElement(p.a, {
                        name: "status",
                        component: "select"
                    }, r.a.createElement("option", {
                        disabled: !0
                    }, " ---Ch\u1ecdn--- "), r.a.createElement("option", {
                        value: 1
                    }, " \u1ea8n "), r.a.createElement("option", {
                        value: 2
                    }, " Hi\u1ec3n th\u1ecb "))), r.a.createElement("div", {
                        className: "fieldGroup"
                    }, r.a.createElement("label", {
                        htmlFor: "detail"
                    }, "T\xean ph\xf2ng *"), r.a.createElement(p.a, {
                        component: E.i,
                        name: "name",
                        className: "name-player",
                        validate: [y.E, y.t]
                    })), r.a.createElement("div", {
                        className: "fieldGroup"
                    }, r.a.createElement("label", {
                        htmlFor: "detail"
                    }, "\u0110i\u1ec1u ki\u1ec7n ng\u01b0\u1eddi ch\u01a1i tham gia *"), r.a.createElement("div", {
                        className: "join-condition"
                    }, r.a.createElement(p.a, {
                        name: "joinCondition.minRank",
                        className: "name-player",
                        component: "select"
                    }, r.a.createElement("option", {
                        value: -1,
                        disabled: !0
                    }, "---Ch\u1ecdn---"), R()), r.a.createElement("i", {
                        className: "fas fa-arrow-right"
                    }), r.a.createElement(p.a, {
                        name: "joinCondition.maxRank",
                        className: "name-player",
                        component: "select"
                    }, r.a.createElement("option", {
                        value: -1,
                        disabled: !0
                    }, "---Ch\u1ecdn---"), R()))), r.a.createElement("div", {
                        className: "fieldGroup"
                    }, r.a.createElement("label", {
                        htmlFor: "detail"
                    }, "S\u1ed1 l\u01b0\u1ee3ng ng\u01b0\u1eddi ch\u01a1i chung"), r.a.createElement(p.a, {
                        component: E.i,
                        name: "maxTeammate",
                        className: "name-player",
                        type: "number",
                        validate: [y.E, y.A, y.r],
                        normalize: function(e) {
                            return e < 0 ? 0 : e > 6 ? 6 : e
                        }
                    })), r.a.createElement("div", {
                        className: "fieldGroup name-player"
                    }, r.a.createElement("label", {
                        htmlFor: "detail"
                    }, "H\xecnh n\u1ec1n ph\xf2ng"), r.a.createElement(p.a, {
                        name: "background",
                        component: function(e) {
                            var t = e.input,
                                a = (t.value, t.onChange);
                            return k.backgrounds && Array.isArray(k.backgrounds) && k.backgrounds.length > 0 ? r.a.createElement("div", {
                                className: "background-room"
                            }, k.backgrounds.map(function(e, t) {
                                return r.a.createElement("div", {
                                    key: t + e,
                                    onClick: function() {
                                        I(e), a(e)
                                    },
                                    className: "item-background-room ".concat(w === e && "active")
                                }, r.a.createElement("img", {
                                    src: v.d.getLinkImage(e, "/game_backgrounds")
                                }))
                            })) : null
                        }
                    })), r.a.createElement("div", {
                        className: "fieldGroup"
                    }, r.a.createElement("label", {
                        htmlFor: "detail"
                    }, "M\xf4 t\u1ea3 ph\xf2ng *"), r.a.createElement(p.a, {
                        component: "textarea",
                        name: "description",
                        className: "name-player",
                        validate: [y.E, y.C, y.v],
                        maxLength: "200",
                        onChange: function(e) {
                            var t = e.target;
                            return x(Object(u.a)({}, S, {
                                description: t.value.trim().length < 4
                            }))
                        }
                    }), S.description && r.a.createElement("span", {
                        class: "err-message"
                    }, r.a.createElement(i.a, {
                        id: "length4"
                    }))), r.a.createElement("div", {
                        className: "d-flex"
                    }, r.a.createElement("button", {
                        type: "submit",
                        className: "btn-update",
                        id: "player-info-btn"
                    }, t.updateRoom ? r.a.createElement(f.a, {
                        name: "ball-scale-ripple",
                        color: "white",
                        fadeIn: "none",
                        className: "loading"
                    }) : r.a.createElement(i.a, {
                        id: "accept"
                    })))))
                });
            k.defaultProps = {};
            var O = Object(g.a)({
                form: "createRoomForm"
            })(k);
            a.d(t, "c", function() {
                return o
            }), a.d(t, "b", function() {
                return s
            }), a.d(t, "a", function() {
                return O
            })
        },
        991: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                c = a(857),
                i = a(9),
                o = function(e) {
                    var t = e.requestGetGameProfile,
                        a = e.dataUser,
                        o = e.gameProfiles,
                        l = e.funcButtonEdit,
                        s = e.funcButton;
                    Object(n.useEffect)(function() {
                        a && a._id && t(a._id)
                    }, [a]);
                    var u = [{
                        name: r.a.createElement(i.a, {
                            id: "gameprofile.gameName"
                        }),
                        value: "gameId.name",
                        typeData: ""
                    }, {
                        name: r.a.createElement(i.a, {
                            id: "gameprofile.description"
                        }),
                        value: "description",
                        typeData: ""
                    }, {
                        name: r.a.createElement(i.a, {
                            id: "gameprofile.dislike"
                        }),
                        value: "dislike"
                    }, {
                        name: r.a.createElement(i.a, {
                            id: "gameprofile.detail"
                        }),
                        value: "detail",
                        typeData: "detail-game-profile"
                    }, {
                        name: r.a.createElement(i.a, {
                            id: "gameprofile.like"
                        }),
                        value: "like"
                    }, {
                        name: r.a.createElement(i.a, {
                            id: "gameprofile.likeRate"
                        }),
                        value: "likeRate"
                    }, {
                        name: "",
                        value: "",
                        typeData: "button"
                    }];
                    return r.a.createElement(c.a, {
                        dataTH: u,
                        dataTable: o.data || [],
                        isEdit: !0,
                        funcButtonEdit: l,
                        funcButton: s
                    })
                },
                l = a(157),
                s = (a(980), function(e) {
                    var t = e.isCreate,
                        a = e.setIsCreate;
                    return r.a.createElement("div", {
                        className: "customer--game--header"
                    }, r.a.createElement("h3", null, t ? "T\u1ea1o th\xf4ng tin Game" : r.a.createElement(i.a, {
                        id: "userProfile.ListGameProfile"
                    })), r.a.createElement(l.a, {
                        className: "btn-create-game",
                        type: "button",
                        onClick: function() {
                            a(!t)
                        }
                    }, t ? r.a.createElement(r.a.Fragment, null, r.a.createElement("i", {
                        className: "fas fa-list-alt"
                    }), " Danh s\xe1ch") : r.a.createElement(r.a.Fragment, null, r.a.createElement("i", {
                        className: "fas fa-plus"
                    }), " T\u1ea1o game")))
                }),
                u = a(2),
                m = a(55),
                d = a(834),
                f = a(1480),
                p = a(160),
                g = a.n(p),
                h = a(23),
                b = a.n(h),
                E = a(845),
                v = a(65),
                y = (a(981), function(e) {
                    var t = e.isLoading,
                        a = e.gameProfile,
                        c = e.method,
                        o = e.initialize,
                        l = e.handleSubmit,
                        s = e.onUpdate,
                        f = (a || {}).profile,
                        p = void 0 === f ? {} : f,
                        h = Object(n.useState)([]),
                        y = Object(m.a)(h, 2),
                        k = y[0],
                        O = y[1],
                        j = Object(n.useState)({
                            description: !0
                        }),
                        N = Object(m.a)(j, 2),
                        w = N[0],
                        I = N[1];
                    Object(n.useEffect)(function() {
                        O(Object.keys(a.setupFields)), "PUT" === c ? (o({
                            detail: p.detail,
                            gameCategories: a._id,
                            description: p.description
                        }), I(Object(u.a)({}, w, {
                            description: p.description.length < 4
                        }))) : o({
                            detail: {
                                rank: 1
                            },
                            gameCategories: a._id || -1,
                            description: ""
                        })
                    }, []);
                    return r.a.createElement("form", {
                        className: "playerinfo-form row",
                        onSubmit: l(s)
                    }, r.a.createElement("div", {
                        className: "col-md-12"
                    }, r.a.createElement("div", {
                        className: "fieldGroup name-player"
                    }, r.a.createElement("p", null, r.a.createElement(i.a, {
                        id: "gameprofile.gamecategory"
                    })), r.a.createElement(d.a, {
                        name: "gameCategories",
                        component: "select",
                        disabled: !0
                    }, r.a.createElement("option", {
                        value: a._id
                    }, a.name))), k.map(function(e, t) {
                        return 2 !== a.setupFields[e].type ? r.a.createElement("div", {
                            key: t,
                            className: "fieldGroup name-player"
                        }, r.a.createElement("label", {
                            htmlFor: "detail"
                        }, a.setupFields[e].title), r.a.createElement(d.a, {
                            name: "detail.".concat(e),
                            type: a.setupFields[e].type,
                            component: v.i,
                            minLength: a.setupFields[e].moreInfo.min,
                            maxLength: a.setupFields[e].moreInfo.max
                        })) : r.a.createElement("div", {
                            className: "fieldGroup name-player"
                        }, r.a.createElement("label", null, a.setupFields[e].title), r.a.createElement(d.a, {
                            name: "detail.".concat(e),
                            component: "select"
                        }, r.a.createElement("option", {
                            value: -1,
                            disabled: !0
                        }, "---Ch\u1ecdn ", a.setupFields[e].title, "---"), (n = a.setupFields[e].moreInfo, b.a.isObject(n) ? Object.keys(n).map(function(e, t) {
                            return r.a.createElement("option", {
                                key: t + e,
                                value: e
                            }, n[e])
                        }) : null)));
                        var n
                    }), r.a.createElement("div", {
                        className: "fieldGroup"
                    }, r.a.createElement("label", {
                        htmlFor: "detail"
                    }, r.a.createElement(i.a, {
                        id: "gameprofile.description"
                    }), " *"), r.a.createElement(d.a, {
                        component: "textarea",
                        name: "description",
                        className: "name-player",
                        validate: [E.E, E.C, E.v],
                        maxLength: "200",
                        onChange: function(e) {
                            var t = e.target;
                            return I(Object(u.a)({}, w, {
                                description: t.value.trim().length < 4
                            }))
                        }
                    }), w.description && r.a.createElement("span", {
                        class: "err-message"
                    }, r.a.createElement(i.a, {
                        id: "length4"
                    }))), r.a.createElement("div", {
                        className: "d-flex"
                    }, r.a.createElement("button", {
                        type: "submit",
                        className: "btn-update",
                        id: "player-info-btn"
                    }, t ? r.a.createElement(g.a, {
                        name: "ball-scale-ripple",
                        color: "white",
                        fadeIn: "none",
                        className: "loading"
                    }) : r.a.createElement(i.a, {
                        id: "accept"
                    })))))
                });
            y.defaultProps = {};
            var k = Object(f.a)({
                form: "createGameForm"
            })(y);
            a.d(t, "c", function() {
                return o
            }), a.d(t, "b", function() {
                return s
            }), a.d(t, "a", function() {
                return k
            })
        }
    }
]);
