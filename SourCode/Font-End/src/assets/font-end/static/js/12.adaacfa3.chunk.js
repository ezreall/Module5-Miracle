(window.webpackJsonp = window.webpackJsonp || []).push([
    [12], {
        1065: function(e, t, a) {
            "use strict";
            var n = a(11),
                r = a(20),
                o = a(17),
                c = a(16),
                i = a.n(c),
                s = a(0),
                l = a.n(s),
                u = a(1),
                m = a.n(u),
                d = a(36),
                p = a.n(d),
                f = a(10),
                h = {
                    fluid: m.a.bool,
                    componentClass: p.a
                },
                g = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return Object(o.a)(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.fluid,
                            a = e.componentClass,
                            o = e.className,
                            c = Object(r.a)(e, ["fluid", "componentClass", "className"]),
                            s = Object(f.f)(c),
                            u = s[0],
                            m = s[1],
                            d = Object(f.e)(u, t && "fluid");
                        return l.a.createElement(a, Object(n.a)({}, m, {
                            className: i()(o, d)
                        }))
                    }, t
                }(l.a.Component);
            g.propTypes = h, g.defaultProps = {
                componentClass: "div",
                fluid: !1
            }, t.a = Object(f.a)("container", g)
        },
        1292: function(e, t, a) {},
        1293: function(e, t, a) {},
        1294: function(e, t, a) {},
        1295: function(e, t, a) {},
        1296: function(e, t, a) {},
        1297: function(e, t, a) {},
        1298: function(e, t, a) {
            var n = a(274),
                r = a(1299);
            e.exports = function(e, t) {
                return e && e.length ? r(e, n(t, 2)) : []
            }
        },
        1299: function(e, t, a) {
            var n = a(455),
                r = a(969),
                o = a(1300),
                c = a(456),
                i = a(1301),
                s = a(434),
                l = 200;
            e.exports = function(e, t, a) {
                var u = -1,
                    m = r,
                    d = e.length,
                    p = !0,
                    f = [],
                    h = f;
                if (a) p = !1, m = o;
                else if (d >= l) {
                    var g = t ? null : i(e);
                    if (g) return s(g);
                    p = !1, m = c, h = new n
                } else h = t ? [] : f;
                e: for (; ++u < d;) {
                    var E = e[u],
                        b = t ? t(E) : E;
                    if (E = a || 0 !== E ? E : 0, p && b === b) {
                        for (var v = h.length; v--;)
                            if (h[v] === b) continue e;
                        t && h.push(b), f.push(E)
                    } else m(h, b, a) || (h !== f && h.push(b), f.push(E))
                }
                return f
            }
        },
        1300: function(e, t) {
            e.exports = function(e, t, a) {
                for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                    if (a(t, e[n])) return !0;
                return !1
            }
        },
        1301: function(e, t, a) {
            var n = a(447),
                r = a(973),
                o = a(434),
                c = n && 1 / o(new n([, -0]))[1] == 1 / 0 ? function(e) {
                    return new n(e)
                } : r;
            e.exports = c
        },
        1302: function(e, t, a) {},
        1303: function(e, t, a) {},
        1304: function(e, t, a) {},
        1478: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(55),
                r = a(0),
                o = a.n(r),
                c = a(40),
                i = a(1065),
                s = a(97),
                l = a(7),
                u = a.n(l),
                m = a(3),
                d = a(30),
                p = a(9),
                f = a(48),
                h = (a(1292), function(e) {
                    var t = e.animation,
                        a = e.title,
                        n = e.children,
                        r = e.className;
                    return o.a.createElement("section", {
                        className: "home__layout ".concat(r || "", " ").concat(t ? "animated fadeInRight" : "")
                    }, o.a.createElement("div", {
                        className: "home__layout--title"
                    }, o.a.createElement("p", null, a)), n)
                });
            h.defaultProps = {
                animation: !0
            };
            var g = h,
                E = a(91),
                b = a(41),
                v = a(897),
                y = function(e) {
                    var t = Object(c.d)(function(e) {
                            return e.userInformation.data
                        }),
                        a = Object(c.d)(function(e) {
                            return e.userProfile
                        }),
                        i = e.setStep,
                        s = e.step,
                        l = Object(r.useState)(1),
                        h = Object(n.a)(l, 2),
                        y = h[0],
                        k = h[1],
                        C = Object(c.c)(),
                        w = function(e) {
                            return C(Object(f.p)(e, t.subscribingThemes))
                        };
                    Object(r.useEffect)(function() {
                        w(y)
                    }, [t.subscribingThemes]);
                    var O = function(e, t) {
                        e && function(e, t) {
                            C(Object(f.H)(e, t, "HomeFollow"))
                        }(e, t)
                    };
                    return o.a.createElement(g, {
                        title: o.a.createElement(p.a, {
                            id: "userProfile.canuwant"
                        })
                    }, o.a.createElement("div", {
                        className: "home__layout--main"
                    }, o.a.createElement("div", {
                        className: "container-fluid"
                    }, !a.suggestPage.total && o.a.createElement("div", {
                        className: "center"
                    }, o.a.createElement("i", {
                        className: "fa fa-spinner fa-spin"
                    })), a.suggestPage.data.length && a.suggestPage.data.map(function(e, t) {
                        return o.a.createElement("div", {
                            className: "col-md-6 content",
                            key: t
                        }, o.a.createElement("div", {
                            className: "item-page media"
                        }, o.a.createElement("div", {
                            className: "media-left"
                        }, o.a.createElement(d.b, {
                            to: null !== e.user ? e.user.url || "page".concat(e.user._id) : "",
                            target: "_blank"
                        }, o.a.createElement(b.a, {
                            className: "media-object",
                            src: m.d.getLinkImage(u()(e, "user.avatar", ""))
                        }))), o.a.createElement("div", {
                            className: "media-body"
                        }, o.a.createElement("h5", {
                            className: "media-heading"
                        }, o.a.createElement(d.b, {
                            to: null !== e.user ? e.user.url || "page".concat(e.user._id) : "",
                            target: "_blank"
                        }, u()(e, "user.name", ""))), o.a.createElement("p", {
                            className: "media-follow"
                        }, o.a.createElement(d.b, {
                            to: null !== e.user ? e.user.url || "page".concat(e.user._id) : "",
                            target: "_blank"
                        }, e.totalFollow && e.totalFollow.toLocaleString() || 0, " ", o.a.createElement(p.a, {
                            id: "teamsidebar.nguoitheodoi"
                        }))), o.a.createElement("div", {
                            className: "btn-follow"
                        }, o.a.createElement(v.a, {
                            tooltip: o.a.createElement(p.a, {
                                id: e.isFollowed ? "teamsidebar.huytheodoi" : "teamsidebar.theodoi"
                            })
                        }, o.a.createElement("i", {
                            className: e.isFollowed ? "fas fa-minus-circle" : "fa fa-user-plus",
                            onClick: function() {
                                return O(u()(e, "user._id", ""), e.isFollowed)
                            }
                        }))))))
                    }), a.suggestPage.data.length < a.suggestPage.total && o.a.createElement("div", {
                        className: "col-md-12 btn-more"
                    }, o.a.createElement("span", {
                        onClick: function() {
                            w(y + 1), k(y + 1)
                        }
                    }, o.a.createElement(p.a, {
                        id: "notify.seemore"
                    }), " \xbb")))), o.a.createElement("div", {
                        className: "home__layout--footer"
                    }, o.a.createElement(E.a, {
                        bsStyle: "danger",
                        fill: !0,
                        onClick: function() {
                            return i(s)
                        }
                    }, o.a.createElement(p.a, {
                        id: "done"
                    }))))
                },
                k = a(968),
                C = function(e) {
                    var t = Object(c.d)(function(e) {
                            return e.userProfile
                        }),
                        a = Object(c.d)(function(e) {
                            return e.userInformation.data
                        }),
                        i = e.setStep,
                        s = e.step,
                        l = e.modalUpdate,
                        u = Object(r.useState)(a.subscribingThemes || []),
                        d = Object(n.a)(u, 2),
                        h = d[0],
                        b = d[1],
                        v = Object(r.useState)(""),
                        y = Object(n.a)(v, 2),
                        C = y[0],
                        w = y[1],
                        O = Object(r.useState)({}),
                        _ = Object(n.a)(O, 2),
                        N = _[0],
                        S = _[1],
                        P = Object(c.c)(),
                        j = function(e) {
                            return P(Object(f.v)(e, !0))
                        };
                    Object(r.useEffect)(function() {
                        j()
                    }, []);
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement(g, {
                        title: o.a.createElement(p.a, {
                            id: "userProfile.whatuwant"
                        })
                    }, o.a.createElement(g, {
                        title: o.a.createElement(p.a, {
                            id: "userProfile.tips"
                        }),
                        className: "fix-layout",
                        animation: !1
                    }, o.a.createElement("div", {
                        className: "home__layout--tips"
                    }, !t.themesHot.length && o.a.createElement("div", {
                        className: "center"
                    }, o.a.createElement("i", {
                        className: "fa fa-spinner fa-spin"
                    })), t.themesHot.map(function(e, t) {
                        return o.a.createElement("p", {
                            className: "list-item",
                            key: t,
                            onClick: function() {
                                return w(e.tag)
                            }
                        }, o.a.createElement("i", {
                            className: "fa fa-caret-left"
                        }), m.d.replaceSpaceToDash(e.tag))
                    }))), o.a.createElement("div", {
                        className: "home__layout--main"
                    }, o.a.createElement("div", {
                        className: "setting-hobby"
                    }, o.a.createElement(k.a, {
                        placeholder: "manga,anime,...",
                        field: "subscribingThemes",
                        value: h,
                        onChange: function(e) {
                            var t = e.target.value;
                            S({}), b(t)
                        },
                        error: N.subscribingThemes,
                        requestSuggest: j,
                        suggest: t.suggest,
                        classSuggest: "fix-position",
                        chooseTag: C,
                        setChooseTag: w
                    }), o.a.createElement("p", {
                        className: "notif"
                    }, o.a.createElement(p.a, {
                        id: "userProfile.noteshobby"
                    })))), o.a.createElement("div", {
                        className: "home__layout--footer"
                    }, o.a.createElement(E.a, {
                        bsStyle: "danger",
                        fill: !0,
                        onClick: function() {
                            if (!h.length || h.length > 10) S({
                                subscribingThemes: o.a.createElement(p.a, {
                                    id: "userProfile.min1max10tags"
                                })
                            });
                            else {
                                l ? l() : i(s);
                                for (var e = 0; e < h.length; e++) h[e] = m.d.replaceDashToSpace(h[e]);
                                t = h, P(Object(f.E)(t))
                            }
                            var t
                        }
                    }, o.a.createElement(p.a, {
                        id: l ? "cusbtn.capnhat" : "next"
                    })))))
                },
                w = a(54),
                O = a(2),
                _ = a(6),
                N = a(290),
                S = (a(425), a(23)),
                P = a.n(S),
                j = a(49),
                T = a.n(j),
                R = a(65),
                D = a(386),
                L = a(100),
                A = a(168),
                U = a(61),
                M = (a(1293), Object(c.b)(function(e) {
                    return {
                        country: e.country,
                        cities: e.cities,
                        infoUser: e.playerProfile.data,
                        auth: e.auth
                    }
                }, {
                    citiesRequest: L.a,
                    countryRequest: A.a,
                    createUserProfileRequest: f.b,
                    fetchDataPlayerProfileRequest: U.c
                })(Object(_.g)(function(e) {
                    var t = e.setStep,
                        a = e.step,
                        c = e.intl,
                        i = e.country,
                        s = e.cities,
                        l = e.infoUser,
                        u = e.auth,
                        d = Object(r.useState)({
                            nickName: "",
                            birthday: "",
                            name: "",
                            gender: "male",
                            country: "",
                            city: ""
                        }),
                        p = Object(n.a)(d, 2),
                        f = p[0],
                        h = p[1],
                        b = Object(r.useState)({}),
                        v = Object(n.a)(b, 2),
                        y = v[0],
                        k = v[1];
                    Object(r.useEffect)(function() {
                        localStorage.idUser && e.fetchDataPlayerProfileRequest("page".concat(localStorage.idUser), s.data), P.a.isEmpty(i) && e.countryRequest()
                    }, [localStorage.idUser]), Object(r.useEffect)(function() {
                        return h({
                            nickName: l.nickName || "",
                            birthday: l.birthday || T()(new Date).format("DD/MM/YYYY"),
                            name: l.name || "",
                            gender: l.gender || "male",
                            country: l.country || "",
                            city: l.city || ""
                        }),
                            function() {
                                f.country !== l.country && l.country && e.citiesRequest(l.country, !0)
                            }
                    }, [l]);
                    var C = function(t) {
                        var a = t.target,
                            n = a.value,
                            r = a.name;
                        if (k({}), "country" === r) return e.citiesRequest(n, !0), h(Object(O.a)({}, f, Object(w.a)({
                            city: ""
                        }, r, n)));
                        h(Object(O.a)({}, f, Object(w.a)({}, r, n)))
                    };
                    return o.a.createElement(g, {
                        title: o.a.createElement(_.b, {
                            id: "userProfile.whoareyou"
                        }),
                        animation: !1
                    }, o.a.createElement("div", {
                        className: "home__layout--main"
                    }, o.a.createElement("div", {
                        className: "container-fluid over-customer"
                    }, o.a.createElement(R.j, {
                        className: "col-md-6",
                        label: o.a.createElement(_.b, {
                            id: "userProfile.name"
                        }),
                        field: "name",
                        value: f.name,
                        onChange: C,
                        error: y.name && o.a.createElement(_.b, {
                            id: y.name
                        })
                    }), o.a.createElement(R.j, {
                        className: "col-md-6",
                        label: o.a.createElement(_.b, {
                            id: "userProfile.nickName"
                        }),
                        field: "nickName",
                        value: f.nickName,
                        onChange: C,
                        error: y.nickName && o.a.createElement(_.b, {
                            id: y.nickName
                        })
                    }), o.a.createElement("div", {
                        className: "col-md-6 date-setting-user"
                    }, o.a.createElement("p", null, o.a.createElement(_.b, {
                        id: "userProfile.birthday"
                    })), o.a.createElement(N.a, {
                        name: "birthday",
                        selected: T()(f.birthday || new Date, "DD/MM/YYYY"),
                        onChange: function(e) {
                            k({}), h(Object(O.a)({}, f, {
                                birthday: T()(e).format("DD/MM/YYYY")
                            }))
                        },
                        dateFormat: "DD/MM/YYYY",
                        showMonthDropdown: !0,
                        peekNextMonth: !0,
                        showYearDropdown: !0,
                        autoComplete: "off",
                        dropdownMode: "select",
                        customInput: o.a.createElement(function(e) {
                            var t = e.value,
                                a = e.onClick;
                            return o.a.createElement("button", {
                                className: "example-custom-input",
                                onClick: a,
                                type: "button"
                            }, t)
                        }, null)
                    }), o.a.createElement("div", null, y.birthday && o.a.createElement("span", {
                        className: "err-message"
                    }, o.a.createElement(_.b, {
                        id: y.birthday
                    })))), o.a.createElement("div", {
                        className: "fieldGroup col-md-6"
                    }, o.a.createElement("p", {
                        className: "control-label"
                    }, o.a.createElement(_.b, {
                        id: "infoform.gioitinh"
                    })), o.a.createElement("select", {
                        name: "gender",
                        onChange: C,
                        value: f.gender
                    }, o.a.createElement("option", {
                        value: "male"
                    }, c.formatMessage({
                        id: "infoform.nam"
                    })), o.a.createElement("option", {
                        value: "female"
                    }, c.formatMessage({
                        id: "infoform.nu"
                    })), o.a.createElement("option", {
                        value: "other"
                    }, c.formatMessage({
                        id: "infoform.khac"
                    })))), o.a.createElement("div", {
                        className: "fieldGroup col-md-6"
                    }, o.a.createElement("p", {
                        className: "control-label"
                    }, o.a.createElement(_.b, {
                        id: "infoform.quocgia"
                    })), o.a.createElement("select", {
                        name: "country",
                        onChange: C,
                        value: f.country
                    }, o.a.createElement("option", {
                        disabled: !0,
                        value: ""
                    }, c.formatMessage({
                        id: "infoform.chonquocgia"
                    })), i.length > 0 ? P.a.map(i, function(e, t) {
                        return o.a.createElement("option", {
                            key: t,
                            value: e._id
                        }, e.name)
                    }) : null), y.country && o.a.createElement("span", {
                        className: "err-message"
                    }, o.a.createElement(_.b, {
                        id: y.country
                    }))), o.a.createElement("div", {
                        className: "fieldGroup col-md-6"
                    }, o.a.createElement("p", {
                        className: "control-label"
                    }, o.a.createElement(_.b, {
                        id: "infoform.thanhpho"
                    }), " ", "" === f.country && o.a.createElement("span", {
                        style: {
                            color: "red",
                            fontSize: "11px"
                        }
                    }, "(", o.a.createElement(_.b, {
                        id: "infoform.choosecountryfirst"
                    }), ")"), s.isLoadingCities && o.a.createElement("i", {
                        className: "fa fa-spinner fa-spin"
                    })), o.a.createElement("select", {
                        name: "city",
                        onChange: C,
                        value: f.city
                    }, o.a.createElement("option", {
                        disabled: !0,
                        value: ""
                    }, c.formatMessage({
                        id: "infoform.chonthanhpho"
                    })), s && s.list.length > 0 ? P.a.map(s.list, function(e, t) {
                        return o.a.createElement("option", {
                            key: t,
                            value: e._id
                        }, e.name)
                    }) : null), y.city && o.a.createElement("span", {
                        className: "err-message"
                    }, o.a.createElement(_.b, {
                        id: y.city
                    })))), o.a.createElement("div", {
                        className: "container-fluid over-customer"
                    }, o.a.createElement("div", {
                        className: "col-md-12 customer-setting-tab"
                    }, o.a.createElement(D.a, {
                        auth: u,
                        fixClass: !0,
                        hiddenBtnDelEmail: !0
                    })))), o.a.createElement("div", {
                        className: "home__layout--footer"
                    }, o.a.createElement(E.a, {
                        bsStyle: "danger",
                        disabled: !f.city || "0" === f.city || !localStorage.email,
                        fill: !0,
                        onClick: function() {
                            if (function() {
                                var e = Object(O.a)({}, f);
                                e.step = 2;
                                var t = m.j.validateUserProfile(e),
                                    a = t.errors,
                                    n = t.isValid;
                                return n || k(a), n
                            }()) {
                                var n = {};
                                return n.name = f.name.trim(), n.nickName = f.nickName.trim(), n.birthday = f.birthday.trim(), n.gender = f.gender, n.country = f.country || "5b99f97c978dff3d115261c7", n.city = f.city || "5b99f9e35180d13ea22a97fc", t(a), e.createUserProfileRequest(n, "updateUser1")
                            }
                        }
                    }, o.a.createElement(_.b, {
                        id: "next"
                    }))))
                }))),
                x = a(79),
                q = a(859),
                I = a(152),
                F = a(59),
                B = a(911),
                G = a(21),
                V = a(895),
                Y = a(58),
                H = a(24),
                z = a(1),
                W = a.n(z),
                J = a(847),
                K = function(e) {
                    var t = e.name,
                        a = e.avatar,
                        n = e.className,
                        r = e.setTopic;
                    return o.a.createElement("div", {
                        className: "topic__item ".concat(n || ""),
                        onClick: function() {
                            return r(e)
                        }
                    }, o.a.createElement("div", {
                        className: "topic__avatar"
                    }, o.a.createElement(b.a, {
                        src: m.d.checkAvatarAlbum(a),
                        alt: "PD"
                    })), o.a.createElement("div", {
                        className: "topic__name"
                    }, o.a.createElement("p", null, t)))
                };
            K.propsType = {
                hotTopic: W.a.array,
                className: W.a.string,
                name: W.a.string.isRequired,
                avatar: W.a.string.isRequired,
                setTopic: W.a.func.isRequired
            }, K.defaultProps = {
                hotTopic: [],
                className: ""
            };
            var Q = K,
                $ = (a(1294), function(e) {
                    var t = e.hotTopic,
                        a = e.topic,
                        n = e.fetchHotTopic,
                        c = e.setTopic,
                        i = e.setPage;
                    Object(r.useEffect)(function() {
                        n()
                    }, []);
                    var s = function(e) {
                            i(1), c(e)
                        },
                        l = Object(r.useMemo)(function() {
                            return (t || []).map(function(e) {
                                return o.a.createElement(Q, Object.assign({
                                    className: a && a.name === e.name ? "active" : "",
                                    key: e._id,
                                    setTopic: s
                                }, e))
                            })
                        }, [t, a]);
                    return o.a.createElement(J.a, {
                        title: o.a.createElement(p.a, {
                            id: "topic"
                        })
                    }, o.a.createElement("div", {
                        className: "user__action--topic"
                    }, l))
                });
            $.propsType = {
                hotTopic: W.a.array,
                topic: W.a.object,
                setPage: W.a.func.isRequired,
                setTopic: W.a.func.isRequired,
                fetchHotTopic: W.a.func.isRequired
            }, $.defaultProps = {
                hotTopic: [],
                topic: {}
            };
            var Z = $,
                X = Object(c.b)(function(e) {
                    var t = e.userProfile,
                        a = e.userInformation;
                    return {
                        hotTopic: t.hotTopic,
                        userInformation: a.data
                    }
                }, function(e) {
                    return Object(Y.bindActionCreators)({
                        fetchHotTopic: f.j,
                        requestMyProfile: H.v
                    }, e)
                })(Z),
                ee = a(4),
                te = a(39),
                ae = a(1465),
                ne = a(1491),
                re = function(e) {
                    var t = e.topic,
                        a = e.userData,
                        n = e.requestSetTagsViewerContent,
                        r = e.setNotificationStatus,
                        c = o.a.createElement(ae.a, {
                            id: "tooltip"
                        }, "Th\xeam v\xe0o s\u1edf th\xedch c\u1ee7a b\u1ea1n."),
                        i = function(e) {
                            return o.a.createElement(ne.a, {
                                placement: "bottom",
                                overlay: c
                            }, o.a.createElement("span", {
                                onClick: function() {
                                    return function(e) {
                                        var t = Object(te.a)(new Set([].concat(Object(te.a)(u()(a, "subscribingThemes", [])), Object(te.a)([e] || !1))));
                                        if (t.length > 10) return r(!1, "T\u1ed1i \u0111a 10 s\u1edf th\xedch");
                                        n(t, null)
                                    }(e)
                                }
                            }, "".concat(e.replace(/ /g, "_"))))
                        };
                    return o.a.createElement("div", {
                        className: "newfeed--addtheme"
                    }, o.a.createElement("div", {
                        className: "left"
                    }, o.a.createElement("p", null, t ? t.name : "Topic")), o.a.createElement("div", {
                        className: "right"
                    }, t ? (t.themeTags || []).map(function(e) {
                        return o.a.createElement("div", null, i(e))
                    }) : "Topic"))
                };
            re.defaultProps = {
                topic: {}
            };
            var oe = re,
                ce = Object(c.b)(function(e) {
                    var t = e.userProfile,
                        a = e.userInformation;
                    return {
                        hotTopic: t.hotTopic,
                        userData: a.data
                    }
                }, function(e) {
                    return Object(Y.bindActionCreators)({
                        requestSetTagsViewerContent: f.E,
                        setNotificationStatus: ee.c
                    }, e)
                })(oe),
                ie = (a(1295), function(e) {
                    var t = e.sortBy,
                        a = e.sortBys,
                        n = e.setSortBy;
                    return o.a.createElement("div", {
                        className: "action__filter"
                    }, o.a.createElement(R.h, {
                        field: "action",
                        onChange: function(e) {
                            var t = e.target.value;
                            n(t)
                        },
                        option: a,
                        value: t,
                        isShowInit: !0
                    }))
                }),
                se = function(e) {
                    var t = e.history,
                        a = e.match,
                        n = e.onGetMorePost,
                        r = e.topic,
                        c = e.sortBys,
                        i = e.sortBy,
                        s = e.setSortBy;
                    return o.a.createElement(o.a.Fragment, null, r && o.a.createElement(o.a.Fragment, null, o.a.createElement(ce, {
                        topic: r
                    }), o.a.createElement(V.a, {
                        topic: r,
                        type: G.h.DEFAULT_TYPE_CREATE_ARTICLE
                    }), o.a.createElement(ie, {
                        sortBys: c,
                        sortBy: i,
                        setSortBy: s
                    })), o.a.createElement(B.a, {
                        match: a,
                        history: t,
                        getMorePost: n
                    }))
                };
            se.defaultProps = {};
            var le = se,
                ue = (a(1296), function() {
                    var e = Object(r.useContext)(q.a),
                        t = e.typeFilter,
                        a = e.onFilter,
                        n = e.type,
                        i = e.setTopic,
                        s = e.topic,
                        l = e.setTypeFilter,
                        u = e.setPage,
                        m = Object(c.d)(function(e) {
                            return e.group.isReloadNewfeed
                        });
                    Object(r.useEffect)(function() {
                        m && (i(null), l("care"))
                    }, [m]);
                    var d = function(e) {
                        i(null), u(1), a(e, 1)
                    };
                    return o.a.createElement("div", {
                        className: "action__post item1"
                    }, o.a.createElement("p", {
                        className: t !== n[0] || s ? "" : "active",
                        onClick: function() {
                            return d(n[0])
                        }
                    }, "C\xf3 th\u1ec3 b\u1ea1n quan t\xe2m"), o.a.createElement("p", {
                        className: t !== n[1] || s ? "" : "active",
                        onClick: function() {
                            return d(n[1])
                        }
                    }, "Nh\u1eefng ng\u01b0\u1eddi b\u1ea1n theo d\xf5i"))
                }),
                me = a(159),
                de = a(861),
                pe = a.n(de),
                fe = (a(1297), function() {
                    var e = Object(c.d)(function(e) {
                            return e.userInformation.data
                        }),
                        t = Object(r.useState)(!1),
                        a = Object(n.a)(t, 2),
                        i = a[0],
                        s = a[1],
                        l = function() {
                            s(!1)
                        };
                    return o.a.createElement(J.a, {
                        title: o.a.createElement(p.a, {
                            id: "hobbies"
                        }),
                        classBtn: "btn-detail-vip",
                        isNewFeed: "cusbtn.capnhat",
                        clickLabel: function() {
                            s(!0)
                        },
                        className: "item3"
                    }, o.a.createElement("div", {
                        className: "tag-div"
                    }, e.subscribingThemes && e.subscribingThemes.length > 0 ? e.subscribingThemes.map(function(e) {
                        return o.a.createElement("span", {
                            key: pe.a.generate()
                        }, m.d.replaceSpaceToDash(e))
                    }) : null), o.a.createElement("div", {
                        className: "hobby__guide mobile__hidden"
                    }, o.a.createElement(p.a, {
                        id: "userProfile.noteHobby"
                    })), o.a.createElement(me.a, {
                        className: "modal-edit-hobby",
                        show: i,
                        onHide: l,
                        bsSize: "large"
                    }, o.a.createElement(me.a.Header, {
                        closeButton: !0
                    }), o.a.createElement(C, {
                        modalUpdate: l
                    })))
                }),
                he = a(1298),
                ge = a.n(he),
                Ee = a(28),
                be = (a(1302), o.a.memo(function(e) {
                    var t = Object(r.useContext)(q.a),
                        a = t.listFollow,
                        n = t.myInfo,
                        c = ge()(u()(n, "data.userHistory.data", []), "pageUserId");
                    return a.data && Array.isArray(a.data) && a.data.length > 0 ? o.a.createElement(J.a, {
                        title: o.a.createElement(p.a, {
                            id: e.type ? "button.areaMember" : "shortcut"
                        }),
                        classBtn: "btn-detail-vip",
                        className: "item2",
                        isNewFeed: e.type ? "notify.seemore" : null,
                        link: "/member_ship/registed_history"
                    }, o.a.createElement("div", {
                        className: "shortcut__avatar"
                    }, e.type ? function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        return Array.isArray(e) && e.length > 0 ? e.map(function(e, t) {
                            var a = m.d.getLinkImage(u()(e, "author.avatar")),
                                n = u()(e, "author.url") || "page".concat(u()(e, "author._id"));
                            return o.a.createElement(d.b, {
                                key: e._id + t,
                                to: "/".concat(n, "/membership/home"),
                                className: "border-radius-default ".concat(t > 10 ? "mobile__hidden" : "")
                            }, o.a.createElement(Ee.a, {
                                url: a
                            }))
                        }) : null
                    }(c || []) : function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        return Array.isArray(e) && e.length > 0 ? e.map(function(e, t) {
                            var a = m.d.getLinkImage(u()(e, "user.avatar"));
                            return o.a.createElement(d.b, {
                                key: e._id + t,
                                to: "".concat(u()(e, "user.url") || "page".concat(u()(e, "user._id"))),
                                className: "border-radius-default ".concat(t > 10 ? "mobile__hidden" : "")
                            }, o.a.createElement(Ee.a, {
                                url: a
                            }))
                        }) : null
                    }(a.data || []))) : null
                })),
                ve = a(870),
                ye = function(e) {
                    var t = Object(r.useContext)(q.a),
                        a = t.userInformation,
                        n = t.listFollow,
                        c = t.setTopic,
                        i = t.topic,
                        s = t.setPage,
                        l = t.myInfo,
                        m = e.loadingFollowing,
                        d = u()(l, "data.userHistory.total");
                    return o.a.createElement("section", {
                        className: "newfeed__left"
                    }, o.a.createElement(ue, null), m && o.a.createElement(ve.a, {
                        height: "100px"
                    }), o.a.createElement(X, {
                        setTopic: c,
                        topic: i,
                        setPage: s
                    }), n.total && !m ? o.a.createElement(be, null) : null, d && !m ? o.a.createElement(be, {
                        type: !0
                    }) : null, u()(a, "subscribingThemes[0]") ? o.a.createElement(fe, null) : o.a.createElement(ve.a, {
                        height: "100px"
                    }))
                },
                ke = a(989),
                Ce = (a(1303), function(e) {
                    var t = e.match,
                        a = e.history,
                        i = ["care", "follow"],
                        l = Object(r.useState)("mostActive"),
                        u = Object(n.a)(l, 2),
                        m = u[0],
                        d = u[1],
                        p = Object(r.useState)(null),
                        h = Object(n.a)(p, 2),
                        g = h[0],
                        E = h[1],
                        b = Object(r.useState)(i[0]),
                        v = Object(n.a)(b, 2),
                        y = v[0],
                        k = v[1],
                        C = Object(r.useState)(1),
                        w = Object(n.a)(C, 2),
                        O = w[0],
                        _ = w[1],
                        N = Object(c.c)(),
                        S = function(e) {
                            return N(Object(F.q)(e))
                        },
                        P = Object(c.d)(function(e) {
                            return e.userProfile.loading.album
                        }),
                        j = Object(c.d)(function(e) {
                            return e.userProfile.loading.following
                        }),
                        T = Object(c.d)(function(e) {
                            return e.userProfile.albumFollowed
                        }),
                        R = Object(c.d)(function(e) {
                            return e.userProfile.listFollow
                        }),
                        D = Object(c.d)(function(e) {
                            return e.userInformation.data
                        }),
                        L = Object(c.d)(function(e) {
                            return e.group
                        }),
                        A = Object(c.d)(function(e) {
                            return e.rank.incomeDay
                        }),
                        U = Object(c.d)(function(e) {
                            return e.userInformation.myInfo
                        }),
                        M = function(e, t) {
                            var a = D.subscribingThemes;
                            k(e), S(e === i[0] ? {
                                page: t,
                                userId: localStorage.idUser,
                                type: !1,
                                newfeed: e,
                                hobbies: a
                            } : {
                                page: t,
                                userId: localStorage.idUser,
                                type: !1,
                                newfeed: e
                            })
                        },
                        B = {
                            album: T,
                            listFollow: R,
                            userInformation: D,
                            incomeDay: A
                        },
                        G = {
                            listFollow: R,
                            userInformation: D,
                            typeFilter: y,
                            onFilter: M,
                            type: i,
                            topic: g,
                            setTopic: E,
                            setPage: _,
                            setTypeFilter: k,
                            myInfo: U
                        };
                    return Object(r.useEffect)(function() {
                        var e = D.subscribingThemes;
                        g || S({
                            page: 1,
                            userId: localStorage.idUser,
                            type: !1,
                            newfeed: y,
                            hobbies: e
                        })
                    }, [F.q, D.subscribingThemes]), Object(r.useEffect)(function() {
                        g && (S({
                            page: 1,
                            userId: localStorage.idUser,
                            type: !1,
                            newfeed: y,
                            hobbies: g.themeTags,
                            isTopic: !0,
                            sortBy: m
                        }), _(1))
                    }, [g, m]), Object(r.useEffect)(function() {
                        var e, t, a;
                        D._id && (e = D._id, t = 1, a = 4, N(Object(f.g)(e, t, a)), function(e, t, a) {
                            N(Object(f.h)(e, t, a))
                        }(D._id, 1, 10), function(e, t) {
                            N(Object(I.b)(e, t))
                        }(1, 10))
                    }, [D._id]), o.a.createElement(s.a, {
                        className: "user__profile new-feed"
                    }, o.a.createElement(x.a, {
                        md: 3
                    }, o.a.createElement(q.a.Provider, {
                        value: G
                    }, o.a.createElement(ye, {
                        loadingFollowing: j
                    }))), o.a.createElement(x.a, {
                        md: 6,
                        className: "group-main-wrap"
                    }, o.a.createElement(le, {
                        topic: g,
                        sortBys: [{
                            _id: "mostActive",
                            name: "Ho\u1ea1t \u0111\u1ed9ng m\u1edbi"
                        }, {
                            _id: "newest",
                            name: "B\xe0i vi\u1ebft m\u1edbi "
                        }],
                        sortBy: m,
                        setSortBy: d,
                        onGetMorePost: function() {
                            g ? S({
                                page: O + 1,
                                userId: localStorage.idUser,
                                type: !1,
                                newfeed: y,
                                hobbies: g.themeTags,
                                isTopic: !0,
                                sortBy: m
                            }) : M(y, O + 1), _(O + 1)
                        },
                        onRequestFilterPost: S,
                        group: L,
                        match: t,
                        history: a,
                        typeFilter: y
                    })), o.a.createElement(x.a, {
                        md: 3,
                        smHidden: !0,
                        xsHidden: !0
                    }, o.a.createElement(q.b.Provider, {
                        value: B
                    }, o.a.createElement(ke.a, {
                        loadingAlbum: P,
                        loadingFollowing: j
                    }))))
                }),
                we = a(306);
            a(1304), a(960), t.default = function(e) {
                var t = ["setting", "hobby", "pages", "newFeed"],
                    a = Object(r.useState)(t[3]),
                    l = Object(n.a)(a, 2),
                    d = l[0],
                    p = l[1],
                    f = e.match,
                    h = e.history,
                    g = Object(c.d)(function(e) {
                        return e.userInformation
                    });
                return Object(r.useEffect)(function() {
                    m.d.handleChange(!0)
                }, []), Object(r.useEffect)(function() {
                    u()(g, "data.subscribingThemes") && g.data.subscribingThemes.length || p(t[0])
                }, [g.data]), g.data._id ? o.a.createElement(i.a, null, o.a.createElement(s.a, {
                    className: "user__profile"
                }, t[0] === d && o.a.createElement(M, {
                    step: t[1],
                    setStep: p
                }), t[1] === d && o.a.createElement(C, {
                    step: t[2],
                    setStep: p
                }), t[2] === d && o.a.createElement(y, {
                    step: t[3],
                    setStep: p
                }), t[3] === d && o.a.createElement(Ce, {
                    match: f,
                    history: h
                }))) : o.a.createElement(we.a, null)
            }
        },
        847: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                o = a(9),
                c = a(30);
            t.a = r.a.memo(function(e) {
                var t = e.className,
                    a = e.title,
                    n = e.classTitle,
                    i = e.total,
                    s = e.isNewFeed,
                    l = e.btn,
                    u = e.onClick,
                    m = e.classBtn,
                    d = e.clickLabel,
                    p = e.children,
                    f = e.link,
                    h = e.disabledBtn,
                    g = e.idUser,
                    E = e.userVip;
                return r.a.createElement("div", {
                    className: "user__action--introduce ".concat(t || "")
                }, a && r.a.createElement("div", {
                    className: "user__action--title ".concat(n || "")
                }, a, " ", parseInt(i) > 0 && (E ? g === localStorage.idUser ? r.a.createElement("span", null, i.toLocaleString()) : i > 100 ? r.a.createElement("span", null, "99+") : r.a.createElement("span", null, i.toLocaleString()) : r.a.createElement("span", null, i.toLocaleString())), s && r.a.createElement(c.b, {
                    to: d ? null : f || "/"
                }, r.a.createElement("span", {
                    className: d ? "additional-label" : "",
                    onClick: d
                }, "(", r.a.createElement(o.a, {
                    id: s
                }), ")")), l && r.a.createElement("button", {
                    onClick: u,
                    className: m,
                    disabled: h
                }, l)), p)
            })
        },
        853: function(e, t, a) {
            "use strict";
            var n = a(14),
                r = a(15),
                o = a(26),
                c = a(27),
                i = a(19),
                s = a(0),
                l = a.n(s),
                u = a(6),
                m = a(160),
                d = a.n(m),
                p = a(884),
                f = a.n(p);
            a(866);

            function h(e) {
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
                    return Object(c.a)(this, a)
                }
            }
            var g = function(e) {
                Object(o.a)(a, e);
                var t = h(a);

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
                        return l.a.createElement(f.a, {
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
                            confirmBtnText: n ? l.a.createElement(d.a, {
                                name: "ball-scale-ripple",
                                color: "white",
                                fadeIn: "none"
                            }) : l.a.createElement(u.b, {
                                id: "accept"
                            }),
                            cancelBtnText: l.a.createElement(u.b, {
                                id: "close"
                            }),
                            confirmBtnBsStyle: "danger",
                            cancelBtnBsStyle: "default",
                            showCancel: !0
                        }, l.a.createElement("p", {
                            className: "message"
                        }, a), r && l.a.createElement("p", {
                            className: "mess-bonus"
                        }, r))
                    }
                }]), a
            }(s.Component);
            t.a = g
        },
        859: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                o = (r.a.createContext({}), r.a.createContext({})),
                c = r.a.createContext({});
            a.d(t, "a", function() {
                return o
            }), a.d(t, "b", function() {
                return c
            })
        },
        866: function(e, t, a) {},
        870: function(e, t, a) {
            "use strict";
            var n = a(14),
                r = a(15),
                o = a(26),
                c = a(27),
                i = a(19),
                s = a(0),
                l = a.n(s),
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
                    var a, n = Object(i.a)(e);
                    if (t) {
                        var r = Object(i.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(c.a)(this, a)
                }
            }
            var p = function(e) {
                Object(o.a)(a, e);
                var t = d(a);

                function a() {
                    return Object(n.a)(this, a), t.apply(this, arguments)
                }
                return Object(r.a)(a, [{
                    key: "render",
                    value: function() {
                        return l.a.createElement("div", {
                            className: "user__action--introduce",
                            style: this.props.style
                        }, l.a.createElement("div", {
                            className: "user__action--title hidden-sm hidden-xs"
                        }, l.a.createElement(m.a, {
                            height: this.props.heightTop || "18px",
                            width: this.props.widthTop || "81px",
                            widthRandomness: 0,
                            borderRadius: "4px"
                        })), !this.props.userLink && l.a.createElement("div", {
                            className: "user__link"
                        }, l.a.createElement(m.a, {
                            height: this.props.height,
                            width: "100%",
                            widthRandomness: 0,
                            borderRadius: "4px"
                        })))
                    }
                }]), a
            }(s.PureComponent);
            t.a = p
        },
        872: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                o = a(23),
                c = a.n(o),
                i = function(e) {
                    var t = e.trustTypes,
                        a = e.type,
                        n = e.size,
                        o = e.paddingLeft,
                        i = e.isTrust;
                    return -1 !== c.a.findIndex(t, function(e) {
                        return e === a
                    }) || !0 === i ? r.a.createElement("i", {
                        style: {
                            fontSize: n,
                            paddingLeft: o,
                            color: "#5d93fe"
                        },
                        className: "fas fa-check-circle",
                        "aria-hidden": "true"
                    }) : null
                };
            i.defaultProps = {
                trustTypes: [],
                size: "3rem",
                paddingLeft: 10,
                isTrust: !1
            }, t.a = i
        },
        877: function(e, t) {},
        882: function(e, t, a) {
            "use strict";
            var n = a(2),
                r = a(40),
                o = a(58),
                c = a(7),
                i = a.n(c),
                s = a(4),
                l = a(48),
                u = a(59),
                m = a(54),
                d = a(39),
                p = a(14),
                f = a(15),
                h = a(273),
                g = a(26),
                E = a(27),
                b = a(19),
                v = a(0),
                y = a.n(v),
                k = a(160),
                C = a.n(k),
                w = a(1466),
                O = a(1491),
                _ = a(157),
                N = a(1053),
                S = a.n(N),
                P = a(6),
                j = a(3),
                T = a(91),
                R = a(21),
                D = a(12),
                L = a(41);
            a(946);

            function A(e) {
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
                    var a, n = Object(b.a)(e);
                    if (t) {
                        var r = Object(b.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(E.a)(this, a)
                }
            }
            var U = function(e) {
                Object(g.a)(a, e);
                var t = A(a);

                function a() {
                    var e;
                    Object(p.a)(this, a);
                    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return (e = t.call.apply(t, [this].concat(r))).showImages = function(t) {
                        var a = e.props,
                            n = a.type,
                            r = a.isLocked,
                            o = a.deleteImage,
                            c = a.stt,
                            i = a.className,
                            s = t;
                        return i && (s = Object(d.a)(t).splice(0, 4)), s.map(function(e, a) {
                            return y.a.createElement("div", {
                                className: "image-before-upload",
                                key: a
                            }, y.a.createElement(L.a, {
                                src: n === R.h.DEFAULT_TYPE_CREATE_ARTICLE ? e : j.g.checkThumbnailGroup(e)
                            }), n === R.h.DEFAULT_TYPE_CREATE_ARTICLE && y.a.createElement("div", {
                                className: "fade"
                            }, y.a.createElement("i", {
                                className: "fas fa-times"
                            }), y.a.createElement("i", {
                                className: "fas fa-times",
                                onClick: function() {
                                    return o(a, c)
                                }
                            })), n === R.h.DEFAULT_TYPE_CREATE_ARTICLE && e.startsWith("data:image/png;base64") && y.a.createElement("span", {
                                className: "preview-time"
                            }, "0:00"), n !== R.h.DEFAULT_TYPE_CREATE_ARTICLE && r && 3 === a && t.length > 4 && y.a.createElement("div", {
                                className: "fadeDiv"
                            }, y.a.createElement("span", null, "+", t.length - 4)))
                        })
                    }, e
                }
                return Object(f.a)(a, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.dataImage,
                            a = e.className;
                        return i()(t, "dataImage[0].fileName", "").endsWith(".mp4") ? y.a.createElement("div", {
                            className: "image-before-upload-wrap ".concat(a || "")
                        }, y.a.createElement("div", {
                            className: "image-before-upload"
                        }, y.a.createElement(L.a, {
                            className: "video_thumb",
                            src: t[0].thumbnailName ? "".concat(D.thumbVideoUrl, "/").concat(t[0].thumbnailName) : "".concat(D.staticImageUrl, "/image_black.jpg")
                        }), y.a.createElement("span", {
                            className: "preview-time"
                        }, "0:00"))) : y.a.createElement("div", {
                            className: "image-before-upload-wrap ".concat(a || "")
                        }, this.showImages(t))
                    }
                }]), a
            }(v.Component);
            U.defaultProps = {
                className: "",
                isLocked: !1
            };
            var M = U,
                x = a(8),
                q = a.n(x),
                I = a(13),
                F = a(9);
            a(947);

            function B(e) {
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
                    var a, n = Object(b.a)(e);
                    if (t) {
                        var r = Object(b.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(E.a)(this, a)
                }
            }
            var G = function(e) {
                Object(g.a)(a, e);
                var t = B(a);

                function a() {
                    var e;
                    Object(p.a)(this, a);
                    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return (e = t.call.apply(t, [this].concat(r))).checkHeighImage = function(e) {
                        return new Promise(function(t, a) {
                            var n = new Image;
                            n.src = e, n.onload = function() {
                                n.height > 1e4 && a(), t()
                            }, n.onerror = function() {
                                a()
                            }
                        })
                    }, e.onChange = function() {
                        var t = Object(I.a)(q.a.mark(function t(a) {
                            var n, r, o, c, i, s, l, u, m, p, f, h, g, E;
                            return q.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (n = e.props, r = n.setNotificationStatus, o = n.name, c = n.onChange, t.prev = 1, a.preventDefault(), i = ["image/png", "image/jpeg"], s = 100, o && "fileUploadsCover" === o.file && (s = Number.MAX_SAFE_INTEGER), l = [], u = a.target.files, m = Object(d.a)(u), p = new Intl.Collator(void 0, {
                                            numeric: !0,
                                            sensitivity: "base"
                                        }), m.sort(function(e, t) {
                                            return p.compare(e.name, t.name)
                                        }), (f = u.length) > s && (f = s), !(f > 100)) {
                                            t.next = 15;
                                            break
                                        }
                                        return t.abrupt("return", r(!1, "T\u1ed1i \u0111a 100 \u1ea3nh"));
                                    case 15:
                                        h = 0;
                                    case 16:
                                        if (!(h < f)) {
                                            t.next = 26;
                                            break
                                        }
                                        if (!(u[h].size < 5120)) {
                                            t.next = 19;
                                            break
                                        }
                                        return t.abrupt("return", r(!1, "\u1ea2nh nh\u1ecf h\u01a1n 5kb"));
                                    case 19:
                                        if (!(u[h].size > 5242880)) {
                                            t.next = 21;
                                            break
                                        }
                                        return t.abrupt("return", r(!1, "\u1ea2nh v\u01b0\u1ee3t qu\xe1 5mb"));
                                    case 21:
                                        if (i.includes(u[h].type)) {
                                            t.next = 23;
                                            break
                                        }
                                        return t.abrupt("return", r(!1, "Ch\u1ec9 h\u1ed7 tr\u1ee3 file PNG v\xe0 JPG"));
                                    case 23:
                                        h += 1, t.next = 16;
                                        break;
                                    case 26:
                                        for (g = [], E = 0; E < f; E += 1) l.push(URL.createObjectURL(m[E])), g.push(e.checkHeighImage(l[E]));
                                        return t.next = 30, Promise.all(g);
                                    case 30:
                                        if (!(u.length > s)) {
                                            t.next = 32;
                                            break
                                        }
                                        return t.abrupt("return", r(!1, y.a.createElement(F.a, {
                                            id: "userPlayer.upimagemax",
                                            mess: s
                                        })));
                                    case 32:
                                        return t.abrupt("return", c(m, l, o));
                                    case 35:
                                        return t.prev = 35, t.t0 = t.catch(1), t.abrupt("return", r(!1, "Chi\u1ec1u cao t\u1ed1i \u0111a c\u1ee7a 1 h\xecnh l\xe0 10,000px"));
                                    case 38:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, null, [
                                [1, 35]
                            ])
                        }));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }(), e
                }
                return Object(f.a)(a, [{
                    key: "render",
                    value: function() {
                        var e = this.props.id;
                        return y.a.createElement("div", {
                            className: "button-upload-image-wrap"
                        }, y.a.createElement("input", {
                            id: "file-upload".concat(e || ""),
                            type: "file",
                            multiple: !0,
                            accept: "image/png, image/jpeg, image/jpg",
                            onChange: this.onChange
                        }), y.a.createElement("label", {
                            htmlFor: "file-upload".concat(e || "")
                        }, y.a.createElement("i", {
                            className: "fas fa-image"
                        }), y.a.createElement(P.b, {
                            id: "images"
                        })))
                    }
                }]), a
            }(v.Component);
            G.defaultProps = {
                id: ""
            };
            var V = G;
            a(948);

            function Y(e) {
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
                    var a, n = Object(b.a)(e);
                    if (t) {
                        var r = Object(b.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(E.a)(this, a)
                }
            }
            var H = function(e) {
                    Object(g.a)(a, e);
                    var t = Y(a);

                    function a(e) {
                        var n;
                        return Object(p.a)(this, a), (n = t.call(this, e)).onChange = function(e) {
                            e.preventDefault();
                            var t = n.props,
                                a = t.setNotificationStatus,
                                r = t.loadingVideo,
                                o = t.onChange,
                                c = t.name,
                                i = t.type,
                                s = e.target.files,
                                l = 52428800;
                            return i !== R.h.DEFAULT_TYPE_CREATE_ARTICLE && i !== R.h.DEFAULT_TYPE_EDIT_ARTICLE || (l = 1073741824), s.length > 1 ? a(!1, y.a.createElement(F.a, {
                                id: "userPlayer.upvideomax",
                                mess: "1"
                            })) : 1 !== s.length || j.d.checkVideo(s[0].type.split("/")[1].toLocaleLowerCase()) ? 1 === s.length && s[0].size > l ? a(!1, y.a.createElement(F.a, {
                                id: "userPlayer.filevideomax",
                                mess: 1073741824 === l ? "1gb" : "50mb"
                            })) : void(1 === s.length ? (r(!0), n.previewVideo(s[0])) : (r(!1), o([], [], c))) : a(!1, y.a.createElement(F.a, {
                                id: "userPlayer.converttypevideo"
                            }))
                        }, n.previewVideo = function(e) {
                            var t = new FileReader;
                            t.onload = function() {
                                var a = new Blob([t.result], {
                                        type: e.type
                                    }),
                                    r = URL.createObjectURL(a),
                                    o = document.createElement("video"),
                                    c = function e() {
                                        i() && (o.removeEventListener("timeupdate", e), o.pause())
                                    };
                                o.addEventListener("loadeddata", function() {
                                    i() && (o.removeEventListener("timeupdate", c), o.remove(), o && (o.style.display = "none"))
                                });
                                var i = function() {
                                    var t = document.createElement("canvas");
                                    t.width = o.videoWidth, t.height = o.videoHeight, t.getContext("2d").drawImage(o, 0, 0, t.width, t.height);
                                    var a = t.toDataURL(),
                                        r = a.length > 1e5;
                                    return r && (n.props.loadingVideo(!1), n.props.onChange([e], [a], n.props.name, o.videoHeight)), r
                                };
                                o.addEventListener("timeupdate", c), o.preload = "metadata", o.src = r, o.muted = !0, o.playsInline = !0, o.play()
                            }, t.readAsArrayBuffer(e)
                        }, n.state = {}, n
                    }
                    return Object(f.a)(a, [{
                        key: "render",
                        value: function() {
                            return y.a.createElement("div", {
                                className: "button-upload-video-wrap"
                            }, y.a.createElement("input", {
                                id: "file-upload-video".concat(this.props.id),
                                type: "file",
                                accept: "video/*",
                                onChange: this.onChange
                            }), y.a.createElement("label", {
                                htmlFor: "file-upload-video".concat(this.props.id)
                            }, y.a.createElement("i", {
                                className: "fas fa-video"
                            }), "Video"))
                        }
                    }]), a
                }(v.Component),
                z = a(832),
                W = a(133),
                J = a(829);
            a(949);

            function K(e) {
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
                    var a, n = Object(b.a)(e);
                    if (t) {
                        var r = Object(b.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(E.a)(this, a)
                }
            }
            var Q = function(e) {
                    Object(g.a)(a, e);
                    var t = K(a);

                    function a(e) {
                        var n;
                        return Object(p.a)(this, a), (n = t.call(this, e)).setWrapperRef = function(e) {
                            n.wrapperRef = e
                        }, n.handleClickOutside = function(e) {
                            n.wrapperRef && !n.wrapperRef.contains(e.target) && n.state.open && n.toggleDropdown()
                        }, n.handleChange = function(e) {
                            var t = e.target,
                                a = t.name,
                                r = t.value,
                                o = n.props,
                                c = o.requestSearchAlbums,
                                i = o.info;
                            n.setState(Object(m.a)({}, a, r)), 0 !== n.timeId && window.clearTimeout(n.timeId), r.length > 0 ? n.timeId = setTimeout(function() {
                                c(i.data._id, r.trim())
                            }, 500) : c(i.data._id, r.trim())
                        }, n.toggleDropdown = function() {
                            var e = n.props,
                                t = e.requestSearchAlbums,
                                a = e.info;
                            !n.state.open && t(a.data._id, ""), n.setState({
                                open: !n.state.open,
                                name: ""
                            })
                        }, n.handleChoose = function(e, t) {
                            n.toggleDropdown(), n.setState({
                                title: t
                            }), n.props.onChange({
                                target: {
                                    name: "postAlbum",
                                    value: e
                                }
                            })
                        }, n.handleRemove = function() {
                            n.state.open && n.toggleDropdown(), n.setState({
                                title: ""
                            }), n.props.onChange({
                                target: {
                                    name: "postAlbum",
                                    value: ""
                                }
                            })
                        }, n.state = {
                            open: !1,
                            name: "",
                            title: !1
                        }, n.timeId = 0, n
                    }
                    return Object(f.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            document.addEventListener("mousedown", this.handleClickOutside)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            document.removeEventListener("mousedown", this.handleClickOutside)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = t.open,
                                n = t.name,
                                r = t.title,
                                o = this.props.userProfile,
                                c = null;
                            return o.searchAlbums && o.searchAlbums.length > 0 && (c = o.searchAlbums.map(function(t, a) {
                                var n = t.avatar ? t.avatar.indexOf("http") > -1 ? t.avatar : j.d.checkAvatarAlbum(t.avatar) : R.c.DEFAULT_AVATAR_ALBUM_URL;
                                return y.a.createElement(z.a, {
                                    key: a,
                                    onClick: function() {
                                        return e.handleChoose(t._id, t.name)
                                    }
                                }, y.a.createElement(L.a, {
                                    alt: t.name,
                                    src: n
                                }), " ", t.name)
                            })), y.a.createElement("div", {
                                ref: this.setWrapperRef,
                                className: "btn-user-album"
                            }, y.a.createElement(W.a, {
                                className: "button-user-albums-wrap",
                                open: a
                            }, r && y.a.createElement("i", {
                                className: "fa fa-times",
                                onClick: this.handleRemove
                            }), y.a.createElement(W.a.Toggle, {
                                noCaret: !0,
                                onClick: this.toggleDropdown
                            }, y.a.createElement("i", {
                                className: "fas fa-list"
                            }), " ", r || "Album"), y.a.createElement(W.a.Menu, null, y.a.createElement("div", {
                                className: "box-search"
                            }, y.a.createElement(J.a, {
                                type: "text",
                                placeholder: "Search album...",
                                name: "name",
                                onChange: this.handleChange,
                                value: n,
                                autoComplete: !1
                            }), o.loading.searchAlbum && y.a.createElement("i", {
                                className: "fa fa-spinner fa-spin",
                                "aria-hidden": "true"
                            })), o.searchAlbums.length > 0 && y.a.createElement(z.a, {
                                divider: !0
                            }), y.a.createElement("div", {
                                className: "box-data"
                            }, c))))
                        }
                    }]), a
                }(v.Component),
                $ = a(55),
                Z = (a(950), function(e) {
                    var t = e.info,
                        a = e.themeTags,
                        n = Object(v.useState)(!1),
                        r = Object($.a)(n, 2),
                        o = r[0],
                        c = r[1],
                        i = Object(v.useState)([]),
                        s = Object($.a)(i, 2),
                        l = s[0],
                        u = s[1],
                        m = Object(v.useRef)();
                    Object(v.useEffect)(function() {
                        u(a || [])
                    }, []), Object(v.useEffect)(function() {
                        var e = m.current,
                            t = function(t) {
                                e && !e.contains(t.target) && o && d()
                            };
                        return document.addEventListener("mousedown", t),
                            function() {
                                document.removeEventListener("mousedown", t)
                            }
                    }, [o]);
                    var d = function() {
                            c(!o)
                        },
                        p = null;
                    return t.data.themes && (p = t.data.themes.map(function(t, a) {
                        return y.a.createElement(z.a, {
                            key: a,
                            onClick: function() {
                                return function(t) {
                                    e.onChange({
                                        target: {
                                            name: "themeTags",
                                            value: t
                                        }
                                    })
                                }(t)
                            },
                            className: l.includes(t) || 5 !== l.length ? "" : "disabled"
                        }, y.a.createElement("label", {
                            className: "check_box"
                        }, y.a.createElement("i", {
                            className: "fas fa-plus-square"
                        }), " ", j.d.replaceSpaceToDash(t)))
                    })), y.a.createElement("div", {
                        ref: m,
                        className: "btn-dropdown-checkbox"
                    }, y.a.createElement(W.a, {
                        className: "btn-drop-box-wrap",
                        open: o
                    }, y.a.createElement(W.a.Toggle, {
                        noCaret: !0,
                        onClick: d
                    }, y.a.createElement("i", {
                        className: "fa fa-tags"
                    }), " Tags"), y.a.createElement(W.a.Menu, null, y.a.createElement("div", {
                        className: "box-data"
                    }, p))))
                }),
                X = a(290),
                ee = a(49),
                te = a.n(ee);
            a(425), a(951);

            function ae(e) {
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
                    var a, n = Object(b.a)(e);
                    if (t) {
                        var r = Object(b.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(E.a)(this, a)
                }
            }
            var ne = function(e) {
                    Object(g.a)(a, e);
                    var t = ae(a);

                    function a(e) {
                        var n;
                        return Object(p.a)(this, a), (n = t.call(this, e)).onChangeDate = function(e) {
                            n.setState({
                                dateTime: e,
                                chooseDateTime: !0
                            }), n.props.onChange({
                                target: {
                                    name: "willShowInTime",
                                    value: new Date(e)
                                }
                            })
                        }, n.handleRemove = function() {
                            n.setState({
                                dateTime: te()(),
                                chooseDateTime: !1
                            }), n.props.onChange({
                                target: {
                                    name: "willShowInTime",
                                    value: ""
                                }
                            })
                        }, n.state = {
                            dateTime: te()(),
                            chooseDateTime: !1
                        }, n
                    }
                    return Object(f.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = t.dateTime,
                                n = t.chooseDateTime,
                                r = function(t) {
                                    var a = t.value,
                                        r = t.onClick;
                                    return y.a.createElement(y.a.Fragment, null, n && y.a.createElement("i", {
                                        className: "fa fa-times",
                                        onClick: e.handleRemove
                                    }), y.a.createElement("button", {
                                        className: "date-custom-input",
                                        onClick: r
                                    }, y.a.createElement("i", {
                                        className: "far fa-clock"
                                    }), " ", n ? a : y.a.createElement(P.b, {
                                        id: "userPlayer.posttime"
                                    })))
                                };
                            return y.a.createElement("div", {
                                className: "btn-choose-date"
                            }, y.a.createElement(X.a, {
                                selected: a,
                                onChange: this.onChangeDate,
                                showTimeSelect: !0,
                                timeFormat: "HH:mm",
                                timeIntervals: 5,
                                dateFormat: "DD/MM/YYYY HH:mm",
                                customInput: y.a.createElement(r, null)
                            }))
                        }
                    }]), a
                }(v.Component),
                re = a(33),
                oe = a.n(re),
                ce = a(912),
                ie = a(28);
            a(952);

            function se(e) {
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
                    var a, n = Object(b.a)(e);
                    if (t) {
                        var r = Object(b.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(E.a)(this, a)
                }
            }
            var le = function(e) {
                Object(g.a)(a, e);
                var t = se(a);

                function a() {
                    var e;
                    Object(p.a)(this, a);
                    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return (e = t.call.apply(t, [this].concat(r))).onChange = function(t) {
                        (0, e.props.onChange)(t)
                    }, e
                }
                return Object(f.a)(a, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.content,
                            a = e.userData,
                            n = e.intl,
                            r = e.hideAvt,
                            o = e.name,
                            c = y.a.createElement("p", {
                                className: "skeleton-avatar"
                            }, y.a.createElement(oe.a, {
                                height: "40px",
                                width: "40px",
                                widthRandomness: 0,
                                borderRadius: "50%"
                            }));
                        return a.avatar && (c = y.a.createElement(ie.a, {
                            size: "sm",
                            url: j.d.getLinkImage(a.avatar)
                        })), y.a.createElement("div", {
                            className: "articles-editor-wrap"
                        }, !r && c, y.a.createElement(ce.a, {
                            className: "inter-text",
                            name: o || "content",
                            placeholder: n.formatMessage({
                                id: "group.writesomething"
                            }),
                            onChange: this.onChange,
                            value: t
                        }))
                    }
                }]), a
            }(v.Component);
            le.defaultProps = {
                hideAvt: !1,
                name: void 0
            };
            var ue = Object(P.g)(le),
                me = a(835);
            a(953);

            function de(e) {
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
                    var a, n = Object(b.a)(e);
                    if (t) {
                        var r = Object(b.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(E.a)(this, a)
                }
            }
            var pe = function(e) {
                    Object(g.a)(a, e);
                    var t = de(a);

                    function a(e) {
                        var n;
                        return Object(p.a)(this, a), (n = t.call(this, e)).state = {
                            isLoadingVideo: !1
                        }, n
                    }
                    return Object(f.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = t.isLocked,
                                n = t.userData,
                                r = t.type,
                                o = t.onChangeUpload,
                                c = t.onChange,
                                i = t.onDelete,
                                s = t.contentCover,
                                l = t.imagePreviewsCover,
                                u = t.dataCoverEdit,
                                m = t.setNotificationStatus,
                                d = this.state.isLoadingVideo;
                            return y.a.createElement(me.a, {
                                className: "article__cost--panel",
                                expanded: a
                            }, y.a.createElement(me.a.Collapse, null, y.a.createElement(me.a.Body, null, y.a.createElement("h6", null, y.a.createElement(P.b, {
                                id: "userPlayer.contentunlock"
                            })), y.a.createElement("div", {
                                className: "header"
                            }, y.a.createElement(ue, {
                                onChange: c,
                                name: "contentCover",
                                content: s,
                                userData: n,
                                hideAvt: !0
                            })), (l.length > 0 || u && u.attachments && u.attachments.length > 0 || d) && y.a.createElement("div", {
                                className: "body"
                            }, l && l.length > 0 && y.a.createElement(M, {
                                type: R.h.DEFAULT_TYPE_CREATE_ARTICLE,
                                dataImage: l,
                                deleteImage: i,
                                stt: !0
                            }), l && l.length <= 0 && r === R.h.DEFAULT_TYPE_EDIT_ARTICLE && u && u.attachments && u.attachments.length > 0 && y.a.createElement(M, {
                                type: r,
                                dataImage: u.attachments,
                                deleteImage: i,
                                stt: !0,
                                isLocked: a,
                                className: "img-old"
                            }), d && y.a.createElement(C.a, {
                                name: "cube-grid"
                            })), y.a.createElement("div", {
                                className: "footer"
                            }, y.a.createElement("div", {
                                className: "footer-top"
                            }, y.a.createElement(V, {
                                onChange: o,
                                type: r,
                                id: r,
                                setNotificationStatus: m,
                                name: {
                                    file: "fileUploadsCover",
                                    preview: "imagePreviewsCover"
                                }
                            }), y.a.createElement(H, {
                                onChange: o,
                                loadingVideo: function(t) {
                                    return e.setState({
                                        isLoadingVideo: t
                                    })
                                },
                                id: r,
                                type: r,
                                setNotificationStatus: m,
                                name: {
                                    file: "fileUploadsCover",
                                    preview: "imagePreviewsCover"
                                }
                            }))), this.props.children)))
                        }
                    }]), a
                }(v.Component),
                fe = a(46),
                he = (a(954), function(e) {
                    var t = e.hashtags;
                    return y.a.createElement("div", {
                        className: "hashtags--scope"
                    }, "Hashtags:", " ", y.a.createElement("span", {
                        className: "text-primary"
                    }, t.map(function(e, a) {
                        return y.a.createElement("span", {
                            key: a
                        }, " ".concat(j.d.replaceSpaceToDash(e)).concat(a + 1 !== t.length ? "," : ""))
                    })))
                });

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
                    var a, n = Object(b.a)(e);
                    if (t) {
                        var r = Object(b.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(E.a)(this, a)
                }
            }
            var Ee = function(e) {
                Object(g.a)(a, e);
                var t = ge(a);

                function a(e) {
                    var r;
                    Object(p.a)(this, a), (r = t.call(this, e)).donePublish = function(e) {
                        var t = e.dataGroup,
                            a = e.languageCurrent,
                            n = e.topic,
                            o = (t || {}).newPost,
                            c = r.props.setPublishPostStatus;
                        if (t && o.donePublish && (r.setState({
                            content: "",
                            fileUploads: [],
                            imagePreviews: [],
                            showPostAction: !1,
                            showButtonPublish: !1,
                            checkboxChecked: !1,
                            isLocked: !1,
                            contentCover: "",
                            fileUploadsCover: [],
                            imagePreviewsCover: [],
                            lockUntil: "",
                            unlockPrice: "",
                            checkboxView: !1,
                            postAlbum: "",
                            willShowInTime: "",
                            themeTags: []
                        }), c(!1)), r.setState({
                            language: a
                        }), n) {
                            var s = r.state.content,
                                l = j.e.getTags(s) || [],
                                u = i()(Object(h.a)(r), "props.topic.themeTags", []),
                                m = Object(d.a)(new Set([].concat(Object(d.a)(l[0] || []), Object(d.a)(u))));
                            r.setState({
                                hashtags: m
                            })
                        }
                    }, r.onChange = function(e) {
                        var t = e.target,
                            a = t.name,
                            n = t.value;
                        if ("lockUntil" !== a && "unlockPrice" !== a)
                            if ("themeTags" !== a) {
                                if ("content" === a) {
                                    var o = j.e.getTags(n) || [],
                                        c = i()(Object(h.a)(r), "props.topic.themeTags", []),
                                        s = [];
                                    r.props.isMembership || (s = Object(d.a)(new Set([].concat(Object(d.a)(o[0] || []), Object(d.a)(c))))), r.setState({
                                        hashtags: s
                                    })
                                }
                                r.setState(Object(m.a)({
                                    messErr: ""
                                }, a, n), function() {
                                    return r.handelShowBtnPublish()
                                })
                            } else {
                                var l = r.state.content,
                                    u = r.state.hashtags;
                                u.push(n);
                                var p = l.indexOf("#");
                                r.setState({
                                    content: "".concat(l + (-1 !== p ? "" : "\n"), " #").concat(n && j.d.replaceSpaceToDash(n)),
                                    hashtags: u
                                })
                            }
                        else {
                            var f = n.replace(/[\D\s]+/g, "");
                            r.setState(Object(m.a)({
                                messErr: ""
                            }, a, "" === f ? 0 : parseInt(f, 0)), function() {
                                return r.handelShowBtnPublish()
                            })
                        }
                    }, r.onChangeUpload = function(e, t, a, n) {
                        var o, c = r.props.setNotificationStatus;
                        if (n && n > 720) return c(!1, "Ch\u1ea5t l\u01b0\u1ee3ng video 720 tr\u1edf xu\u1ed1ng"), r.setState({
                            fileUploads: [],
                            imagePreviews: [],
                            messErr: "Ch\u1ea5t l\u01b0\u1ee3ng video 720 tr\u1edf xu\u1ed1ng"
                        });
                        a || (a = {
                            file: "fileUploads",
                            preview: "imagePreviews"
                        }), r.setState((o = {}, Object(m.a)(o, a.file, e), Object(m.a)(o, a.preview, t), Object(m.a)(o, "messErr", ""), o))
                    }, r.handelShowBtnPublish = function() {
                        var e = r.state.content,
                            t = r.props.type;
                        "" !== e || R.h.DEFAULT_TYPE_CREATE_ARTICLE === t && "" !== e ? r.setState({
                            showButtonPublish: !0
                        }) : r.setState({
                            showButtonPublish: !1
                        })
                    }, r.onDelete = function(e, t) {
                        var a = r.state,
                            n = a.fileUploads,
                            o = a.imagePreviews,
                            c = a.fileUploadsCover,
                            i = a.imagePreviewsCover,
                            s = [],
                            l = 0;
                        if (t) {
                            for (var u = c.length; l < u; l++) l !== e && s.push(c[l]);
                            i.splice(e, 1), r.setState({
                                fileUploadsCover: s,
                                imagePreviewsCover: i,
                                messErr: ""
                            })
                        } else {
                            for (var m = n.length; l < m; l++) l !== e && s.push(n[l]);
                            o.splice(e, 1), r.setState({
                                fileUploads: s,
                                imagePreviews: o
                            })
                        }
                    }, r.convertDateUnlock = function(e) {
                        if (e <= 0) return new Date;
                        var t = Object(n.a)({}, r.state).willShowInTime,
                            a = null;
                        return (a = t ? S()(t) : new Date).setHours(a.getHours() + e), a
                    }, r.onCheckValidate = function() {
                        var e = r.state,
                            t = e.unlockPrice,
                            a = e.checkboxChecked,
                            o = e.contentCover,
                            c = e.fileUploadsCover,
                            i = e.content,
                            s = e.hashtags,
                            l = Object(n.a)({}, r.state).lockUntil,
                            u = r.props,
                            m = u.setNotificationStatus,
                            d = u.isLockedEdit;
                        if (!a || t && l && o)
                            if (c.length > 100) r.setState({
                                messErr: y.a.createElement(P.b, {
                                    id: "userPlayer.imgmax100"
                                })
                            });
                            else if (a && l && (parseInt(l, 10) < 1 || parseInt(l, 10) > 1e4)) r.setState({
                                messErr: y.a.createElement(P.b, {
                                    id: "userPlayer.timegreaterthan0"
                                })
                            });
                            else if (d && l && parseInt(l, 10) > 1e4) r.setState({
                                messErr: y.a.createElement(P.b, {
                                    id: "userPlayer.timegreaterthan0"
                                })
                            });
                            else if ((a || d) && t && (parseInt(t, 10) % 100 > 0 || parseInt(t, 10) > 1e7)) r.setState({
                                messErr: y.a.createElement(P.b, {
                                    id: "userPlayer.feemultiple1000"
                                })
                            });
                            else {
                                if (!(i && i.length > 5e4 || o && o.length > 5e4)) return !(s.length > 5) || m(!1, "Ch\u1ec9 c\xf3 th\u1ebb th\xeam t\u1ed1i \u0111a 5 hagtag tr\xean b\xe0i vi\u1ebft");
                                r.setState({
                                    messErr: y.a.createElement(P.b, {
                                        id: "userPlayer.content50000"
                                    })
                                })
                            } else r.setState({
                            messErr: y.a.createElement(P.b, {
                                id: "userPlayer.nounlock"
                            })
                        })
                    }, r.onPublish = function() {
                        var e = r.state,
                            t = e.fileUploads,
                            a = e.unlockPrice,
                            o = e.isLocked,
                            c = e.contentCover,
                            i = e.fileUploadsCover,
                            s = e.checkboxView,
                            l = e.postAlbum,
                            u = e.willShowInTime,
                            m = e.imagePreviews,
                            d = e.imagePreviewsCover,
                            p = e.hashtags,
                            f = Object(n.a)({}, r.state),
                            h = f.lockUntil,
                            g = f.content,
                            E = r.props,
                            b = E.setNotificationStatus,
                            v = E.urlPost;
                        if (g = (j.e.getTags(g || "") || [])[1], p.length > 5) return b(!1, "Ch\u1ec9 c\xf3 th\u1ebb th\xeam t\u1ed1i \u0111a 5 hagtag tr\xean b\xe0i vi\u1ebft");
                        if (r.onCheckValidate()) {
                            h = r.convertDateUnlock(h);
                            var y = r.state.language;
                            y || (y = JSON.parse(localStorage.getItem("languageLocale"))._id);
                            var k = r.props,
                                C = k.postId,
                                w = k.publishPost,
                                O = k.requestEditPost,
                                _ = k.type,
                                N = k.uploadFileContentLock,
                                S = k.dataGroup,
                                P = k.info,
                                T = k.userData,
                                D = k.displayOption,
                                L = (S || {}).postList;
                            _ === R.h.DEFAULT_TYPE_CREATE_ARTICLE ? o && i.length > 0 ? N(g, y, t, _, parseInt(a, 10), h, c, i, {
                                isLocked: o,
                                checkboxView: s,
                                postAlbum: l,
                                willShowInTime: u,
                                themeTags: p
                            }, m, d) : w({
                                content: g,
                                language: y,
                                fileUploads: t,
                                undefined: void 0,
                                type: _,
                                unlockPrice: parseInt(a, 10),
                                lockUntil: h,
                                contentCover: c,
                                data: {
                                    isLocked: o,
                                    checkboxView: s,
                                    postAlbum: l,
                                    willShowInTime: u,
                                    themeTags: p
                                },
                                thumbVideo: m,
                                urlPost: v.replace(":id", P.data.pageUserId)
                            }) : o && i.length > 0 ? N(g, y, t, _, parseInt(a), r.state.lockUntil ? h : "", c, i, {
                                postId: C,
                                idCover: L.dataCoverEdit._id,
                                idUser: T._id,
                                isLocked: o,
                                postAlbum: l,
                                willShowInTime: u,
                                checkboxView: s || D,
                                themeTags: p
                            }, m, d) : O(C, {
                                content: g,
                                language: y,
                                fileUploads: t,
                                type: _,
                                unlockPrice: a,
                                lockUntil: r.state.lockUntil ? h : "",
                                isLocked: o,
                                contentCover: c,
                                idCover: L.dataCoverEdit._id,
                                idUser: T._id,
                                typePage: P ? P.typePage : "",
                                postAlbum: l,
                                willShowInTime: u,
                                checkboxView: s,
                                themeTags: p,
                                thumbVideo: m
                            })
                        }
                    }, r.handleCheckboxChecked = function(e) {
                        "view" === e ? r.setState(function(e) {
                            return {
                                checkboxView: !e.checkboxView
                            }
                        }) : (r.state.checkboxChecked && r.setState({
                            lockUntil: "",
                            unlockPrice: "",
                            messErr: "",
                            contentCover: "",
                            fileUploadsCover: [],
                            imagePreviewsCover: []
                        }), r.setState(function(e) {
                            return {
                                isLocked: !e.isLocked,
                                checkboxChecked: !e.checkboxChecked
                            }
                        }))
                    };
                    var o = r.props,
                        c = o.displayOption,
                        s = o.topic,
                        l = o.themeTags;
                    return r.state = {
                        showPostAction: !1,
                        showButtonPublish: !1,
                        isLoadingVideo: !1,
                        isLocked: !1,
                        checkboxChecked: !1,
                        checkboxView: "connect_image" === c,
                        content: "",
                        fileUploads: [],
                        imagePreviews: [],
                        language: "",
                        lockUntil: "",
                        unlockPrice: "",
                        messErr: "",
                        contentCover: "",
                        fileUploadsCover: [],
                        imagePreviewsCover: [],
                        postAlbum: "",
                        willShowInTime: "",
                        themeTags: [],
                        hashtags: s ? Object(d.a)(new Set([].concat(Object(d.a)(s.themeTags), Object(d.a)(l)))) : l || []
                    }, r
                }
                return Object(f.a)(a, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this.props,
                            t = e.type,
                            a = e.content,
                            n = e.themeTags,
                            r = e.topic,
                            o = e.dataGroup,
                            c = e.languageCurrent;
                        this.donePublish({
                            dataGroup: o,
                            languageCurrent: c,
                            topic: r
                        }), t === R.h.DEFAULT_TYPE_EDIT_ARTICLE && this.setState({
                            showPostAction: !0,
                            showButtonPublish: !0,
                            content: a,
                            themeTags: n
                        })
                    }
                }, {
                    key: "UNSAFE_componentWillReceiveProps",
                    value: function(e) {
                        var t = e.dataGroup,
                            a = e.languageCurrent,
                            n = e.isLockedEdit,
                            r = e.topic,
                            o = (t || {}).postList;
                        this.donePublish({
                            dataGroup: t,
                            languageCurrent: a,
                            topic: r
                        }), e && t && !0 === n && 0 !== Object.keys(o.dataCoverEdit).length && o.dataCoverEdit.constructor === Object && !this.state.contentCover && this.setState({
                            isLocked: !0,
                            contentCover: o.dataCoverEdit.content
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            a = t.info,
                            n = t.dataGroup,
                            r = t.userData,
                            o = t.attachments,
                            c = t.type,
                            i = t.intl,
                            s = t.isLockedEdit,
                            l = t.requestSearchAlbums,
                            u = t.userProfile,
                            m = t.setNotificationStatus,
                            d = t.displayOption,
                            p = t.isLoadingUpdatePost,
                            f = t.topic,
                            h = t.isMembership,
                            g = n || {},
                            E = g.newPost,
                            b = g.postList,
                            v = this.state,
                            k = v.showPostAction,
                            N = v.content,
                            S = v.showButtonPublish,
                            j = v.imagePreviews,
                            D = v.isLoadingVideo,
                            L = v.lockUntil,
                            A = v.unlockPrice,
                            U = v.isLocked,
                            x = v.checkboxChecked,
                            q = v.messErr,
                            I = v.contentCover,
                            F = v.fileUploadsCover,
                            B = v.imagePreviewsCover,
                            G = v.checkboxView,
                            Y = v.themeTags,
                            z = v.hashtags,
                            W = y.a.createElement(w.a, {
                                id: "popover-trigger-click-root-close",
                                title: i.formatMessage({
                                    id: "userPlayer.postunlockfee"
                                })
                            }, y.a.createElement("input", {
                                type: "text",
                                value: A.toLocaleString(),
                                name: "unlockPrice",
                                onChange: this.onChange
                            }), " ", "\u0111"),
                            J = y.a.createElement(w.a, {
                                id: "popover-trigger-click-root-close",
                                title: i.formatMessage({
                                    id: "userPlayer.turnofffee"
                                })
                            }, y.a.createElement("input", {
                                type: "text",
                                value: L,
                                name: "lockUntil",
                                onChange: this.onChange
                            }), " ", y.a.createElement(P.b, {
                                id: "hour"
                            }));
                        return y.a.createElement(y.a.Fragment, null, y.a.createElement("div", {
                            className: "publish-post-wrap"
                        }, y.a.createElement("div", {
                            className: "header",
                            onClick: function() {
                                return e.setState({
                                    showPostAction: !0
                                })
                            }
                        }, y.a.createElement(ue, {
                            onChange: this.onChange,
                            content: N,
                            userData: r
                        })), (j.length > 0 || o && o.length > 0 || D) && y.a.createElement("div", {
                            className: "body"
                        }, j && j.length > 0 && y.a.createElement(M, {
                            type: c,
                            dataImage: j,
                            deleteImage: this.onDelete
                        }), j && j.length <= 0 && o && o.length > 0 && y.a.createElement(M, {
                            type: c,
                            dataImage: o,
                            deleteImage: this.onDelete,
                            isLocked: d,
                            className: "img-old"
                        }), D && y.a.createElement(C.a, {
                            name: "cube-grid"
                        })), k && y.a.createElement("div", {
                            className: "footer"
                        }, y.a.createElement("div", {
                            className: "footer-top user"
                        }, a && "user" === a.typePage && y.a.createElement(y.a.Fragment, null, y.a.createElement(V, {
                            onChange: this.onChangeUpload,
                            type: c,
                            id: "".concat(c, "main"),
                            checkboxView: G || d,
                            setNotificationStatus: m
                        }), y.a.createElement(H, {
                            onChange: this.onChangeUpload,
                            loadingVideo: function(t) {
                                return e.setState({
                                    isLoadingVideo: t
                                })
                            },
                            setNotificationStatus: m,
                            type: c,
                            id: "".concat(c, "main")
                        }), !h && y.a.createElement(Q, {
                            requestSearchAlbums: l,
                            userProfile: u,
                            info: a,
                            onChange: this.onChange
                        })), c === R.h.DEFAULT_TYPE_CREATE_ARTICLE && a && "user" === a.typePage && !h && y.a.createElement(ne, {
                            onChange: this.onChange
                        }), !h && a && "user" === a.typePage && a.data.themes && a.data.themes.length > 0 && y.a.createElement(Z, {
                            requestSearchAlbums: l,
                            userProfile: u,
                            info: a,
                            onChange: this.onChange,
                            themeTags: Y
                        })), y.a.createElement("div", null, s && 0 === Object.keys(b.dataCoverEdit).length && b.dataCoverEdit.constructor === Object && y.a.createElement("i", {
                            className: "fa fa-spinner fa-spin"
                        }), (c === R.h.DEFAULT_TYPE_CREATE_ARTICLE || s) && y.a.createElement(pe, {
                            userData: r,
                            isLocked: U,
                            type: c,
                            onChangeUpload: this.onChangeUpload,
                            onChange: this.onChange,
                            onDelete: this.onDelete,
                            contentCover: I,
                            fileUploadsCover: F,
                            imagePreviewsCover: B,
                            setNotificationStatus: m,
                            dataCoverEdit: b.dataCoverEdit
                        }, s && y.a.createElement("div", {
                            className: "edit-fee-time"
                        }, y.a.createElement(P.b, {
                            id: "userPlayer.postunlockfee"
                        }), y.a.createElement("input", {
                            type: "text",
                            value: A.toLocaleString(),
                            name: "unlockPrice",
                            onChange: this.onChange
                        }), " ", "\u0111", y.a.createElement("br", null), y.a.createElement(P.b, {
                            id: "userPlayer.turnofffee"
                        }), y.a.createElement("input", {
                            type: "text",
                            value: L,
                            name: "lockUntil",
                            onChange: this.onChange
                        }), " ", y.a.createElement(P.b, {
                            id: "hour"
                        })))), y.a.createElement("div", {
                            className: "footer-bottom"
                        }, c === R.h.DEFAULT_TYPE_CREATE_ARTICLE && !f && !h && y.a.createElement("label", {
                            className: "check_box"
                        }, y.a.createElement("input", {
                            type: "checkbox",
                            onChange: this.handleCheckboxChecked
                        }), " ", y.a.createElement(P.b, {
                            id: "userPlayer.createpostlock"
                        })), y.a.createElement("label", {
                            className: "check_box"
                        }, y.a.createElement("input", {
                            type: "checkbox",
                            onChange: function() {
                                return e.handleCheckboxChecked("view")
                            },
                            checked: G
                        }), " ", y.a.createElement(P.b, {
                            id: "userPlayer.listview"
                        })), S ? !E.loading && y.a.createElement(T.a, {
                            bsSize: "sm",
                            fill: !0,
                            onClick: this.onPublish
                        }, c === R.h.DEFAULT_TYPE_CREATE_ARTICLE ? y.a.createElement(P.b, {
                            id: "button.post"
                        }) : p ? y.a.createElement(C.a, {
                            name: "ball-scale-ripple",
                            color: "white",
                            fadeIn: "none"
                        }) : y.a.createElement(P.b, {
                            id: "button.edit"
                        })) : y.a.createElement(T.a, {
                            style: {
                                opacity: .5
                            },
                            bsSize: "sm",
                            fill: !0
                        }, c === R.h.DEFAULT_TYPE_CREATE_ARTICLE ? y.a.createElement(P.b, {
                            id: "button.post"
                        }) : y.a.createElement(P.b, {
                            id: "button.edit"
                        })), c === R.h.DEFAULT_TYPE_CREATE_ARTICLE && x && y.a.createElement(y.a.Fragment, null, y.a.createElement(O.a, {
                            trigger: "click",
                            rootClose: !0,
                            placement: "top",
                            overlay: J
                        }, y.a.createElement(_.a, {
                            bsSize: "sm",
                            className: "btn-post"
                        }, y.a.createElement("i", {
                            className: "far fa-clock"
                        }), " ", L ? y.a.createElement(y.a.Fragment, null, L, " ", y.a.createElement(P.b, {
                            id: "hour"
                        })) : y.a.createElement(P.b, {
                            id: "userPlayer.timetolock"
                        }))), y.a.createElement(O.a, {
                            trigger: "click",
                            rootClose: !0,
                            placement: "top",
                            overlay: W
                        }, y.a.createElement(_.a, {
                            bsSize: "sm",
                            className: "btn-post"
                        }, y.a.createElement("i", {
                            className: "fas fa-coins"
                        }), " ", A ? y.a.createElement(fe.a, {
                            money: A
                        }) : y.a.createElement(P.b, {
                            id: "userPlayer.feeunlock"
                        })))), y.a.createElement("br", null), z && z.length > 0 && y.a.createElement(he, {
                            hashtags: z
                        }), q && y.a.createElement("i", {
                            className: "err-message"
                        }, q), S && E.loading && y.a.createElement("div", {
                            className: "text-center"
                        }, y.a.createElement(C.a, {
                            name: "ball-beat",
                            color: "#a5a0a0"
                        }))))))
                    }
                }]), a
            }(v.Component);
            Ee.defaultProps = {
                urlPost: "",
                displayOption: "",
                isLockedEdit: !1,
                isLoadingUpdatePost: !1,
                themeTags: [],
                attachments: [],
                topic: null,
                content: "",
                postId: null,
                requestEditPost: null,
                languageCurrent: "",
                isMembership: !1
            };
            var be = Object(P.g)(Ee);
            t.a = Object(r.b)(function(e, t) {
                var a = e.group,
                    r = e.auth,
                    o = e.userProfile,
                    c = e.userInformation,
                    s = Object(n.a)({}, a.data),
                    l = !!i()(s, "postList.data[0].membershipType");
                return Object(n.a)({
                    isMembership: l,
                    dataGroup: s,
                    auth: r.data,
                    userData: c.data,
                    userProfile: o,
                    info: Object(n.a)({}, c.myInfo)
                }, t)
            }, function(e) {
                return Object(o.bindActionCreators)({
                    requestSearchAlbums: l.C,
                    setNotificationStatus: s.c,
                    requestEditPost: u.p,
                    uploadFileContentLock: u.y,
                    setPublishPostStatus: u.D,
                    publishPost: u.w
                }, e)
            })(be)
        },
        895: function(e, t, a) {
            "use strict";
            var n = a(882);
            a.d(t, "a", function() {
                return n.a
            })
        },
        897: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                o = a(1465),
                c = a(1491),
                i = a(861),
                s = a.n(i);
            t.a = r.a.memo(function(e) {
                var t = r.a.createElement(o.a, {
                    id: s.a.generate()
                }, e.tooltip);
                return r.a.createElement(c.a, {
                    placement: "top",
                    overlay: t
                }, r.a.createElement("div", null, e.children || ""))
            })
        },
        904: function(e, t, a) {
            "use strict";
            var n = a(14),
                r = a(15),
                o = a(26),
                c = a(27),
                i = a(19),
                s = a(0),
                l = a.n(s),
                u = a(3);

            function m(e) {
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
                    return Object(c.a)(this, a)
                }
            }
            var d = function(e) {
                Object(o.a)(a, e);
                var t = m(a);

                function a(e) {
                    var r;
                    return Object(n.a)(this, a), (r = t.call(this, e)).secondsToTime = function(e) {
                        e /= 1e3;
                        var t = Math.floor(e / 3600),
                            a = Math.floor(e / 60) - 60 * t,
                            n = Math.floor(e - 3600 * t - 60 * a),
                            o = Math.floor(t / 24);
                        t -= 24 * o, t = u.d.formatTimer(t), a = u.d.formatTimer(a), n = u.d.formatTimer(n);
                        var c = [];
                        return r.checkPush(c, t), r.checkPush(c, a), r.checkPush(c, n), o ? "".concat(o, " ng\xe0y ").concat(c.join(":")) : c.join(":")
                    }, r.checkPush = function(e, t) {
                        t && e.push(t)
                    }, r.state = {
                        seconds: 0
                    }, r
                }
                return Object(r.a)(a, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this,
                            t = this.props.timeCountDown;
                        if (t) {
                            var a = new Date(t),
                                n = new Date,
                                r = a.getTime() - n.getTime();
                            this.setState({
                                seconds: r
                            }, function() {
                                e.startTimer(1e3)
                            })
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearInterval(this.timer)
                    }
                }, {
                    key: "startTimer",
                    value: function(e) {
                        var t = this;
                        this.state.seconds > 0 && (this.timer = setInterval(function() {
                            var a = t.state.seconds - e;
                            a < 0 && (a = 0), t.setState({
                                seconds: a
                            }), 0 === a && clearInterval(t.timer)
                        }, 1e3))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props.className,
                            t = this.state.seconds;
                        return t < 0 ? null : l.a.createElement("div", {
                            className: e || ""
                        }, l.a.createElement("i", {
                            className: "far fa-clock"
                        }), " ", this.secondsToTime(t))
                    }
                }]), a
            }(l.a.Component);
            t.a = d
        },
        911: function(e, t, a) {
            "use strict";
            var n = a(2),
                r = a(40),
                o = a(58),
                c = a(80),
                i = a(0),
                s = a.n(i),
                l = a(39),
                u = a(50),
                m = a(1022),
                d = a.n(m),
                p = a(7),
                f = a.n(p),
                h = a(14),
                g = a(15),
                E = a(26),
                b = a(27),
                v = a(19),
                y = a(33),
                k = a.n(y);
            a(935);

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
                    var a, n = Object(v.a)(e);
                    if (t) {
                        var r = Object(v.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(b.a)(this, a)
                }
            }
            var w = function(e) {
                    Object(E.a)(a, e);
                    var t = C(a);

                    function a() {
                        return Object(h.a)(this, a), t.apply(this, arguments)
                    }
                    return Object(g.a)(a, [{
                        key: "render",
                        value: function() {
                            return s.a.createElement("div", {
                                className: "skeleton-post-list"
                            }, s.a.createElement("div", {
                                className: "post"
                            }, s.a.createElement("div", {
                                className: "user"
                            }, s.a.createElement("p", null, s.a.createElement(k.a, {
                                height: "40px",
                                width: "40px",
                                widthRandomness: 0,
                                borderRadius: "50%"
                            })), s.a.createElement("div", null, s.a.createElement("p", {
                                className: "name"
                            }, s.a.createElement(k.a, {
                                height: "15px",
                                width: "100px",
                                widthRandomness: 0,
                                borderRadius: "4px"
                            })), s.a.createElement("p", {
                                className: "time"
                            }, s.a.createElement(k.a, {
                                height: "13px",
                                width: "150px",
                                widthRandomness: 0,
                                borderRadius: "4px"
                            })))), s.a.createElement("div", {
                                className: "content"
                            }, s.a.createElement("p", null, s.a.createElement(k.a, {
                                height: "15px",
                                width: "100%",
                                widthRandomness: 0,
                                borderRadius: "4px"
                            })), s.a.createElement("p", null, s.a.createElement(k.a, {
                                height: "15px",
                                width: "100%",
                                widthRandomness: 0,
                                borderRadius: "4px"
                            })), s.a.createElement("p", null, s.a.createElement(k.a, {
                                height: "15px",
                                width: "20%",
                                widthRandomness: 0,
                                borderRadius: "4px"
                            })))), s.a.createElement("div", {
                                className: "post"
                            }, s.a.createElement("div", {
                                className: "user"
                            }, s.a.createElement("p", null, s.a.createElement(k.a, {
                                height: "40px",
                                width: "40px",
                                widthRandomness: 0,
                                borderRadius: "50%"
                            })), s.a.createElement("div", null, s.a.createElement("p", {
                                className: "name"
                            }, s.a.createElement(k.a, {
                                height: "15px",
                                width: "100px",
                                widthRandomness: 0,
                                borderRadius: "4px"
                            })), s.a.createElement("p", {
                                className: "time"
                            }, s.a.createElement(k.a, {
                                height: "13px",
                                width: "150px",
                                widthRandomness: 0,
                                borderRadius: "4px"
                            })))), s.a.createElement("div", {
                                className: "content"
                            }, s.a.createElement("p", null, s.a.createElement(k.a, {
                                height: "15px",
                                width: "100%",
                                widthRandomness: 0,
                                borderRadius: "4px"
                            })), s.a.createElement("p", null, s.a.createElement(k.a, {
                                height: "15px",
                                width: "100%",
                                widthRandomness: 0,
                                borderRadius: "4px"
                            })), s.a.createElement("p", null, s.a.createElement(k.a, {
                                height: "15px",
                                width: "20%",
                                widthRandomness: 0,
                                borderRadius: "4px"
                            })))))
                        }
                    }]), a
                }(i.Component),
                O = a(114),
                _ = a.n(O),
                N = a(6),
                S = a(30),
                P = a(3),
                j = a(1023),
                T = a(12),
                R = a.n(T),
                D = (a(941), function(e) {
                    var t = e.url,
                        a = function(e) {
                            if (3 === e.nativeEvent.which) return e.preventDefault(), !1
                        },
                        n = P.g.getLinkThumbVideo(t.thumbnailName),
                        r = new URL("".concat(T.SVSpacesEndpoint, "/post_cover_videos/").concat(t.fileName));
                    return r.searchParams && r.searchParams.append(T.security.key, localStorage.security_code), s.a.createElement("div", {
                        className: "post-video",
                        onClick: a,
                        onContextMenu: a
                    }, s.a.createElement(j.Player, {
                        poster: n,
                        src: r.toString(),
                        fluid: !1,
                        preload: "none",
                        playsInline: !0
                    }, s.a.createElement(j.LoadingSpinner, null), s.a.createElement(j.BigPlayButton, {
                        position: "center"
                    }), s.a.createElement(j.ControlBar, null, s.a.createElement(j.PlayToggle, null), s.a.createElement(j.ReplayControl, {
                        seconds: 5,
                        order: 2.1
                    }), s.a.createElement(j.ForwardControl, {
                        seconds: 5,
                        order: 3.1
                    }), s.a.createElement(j.PlaybackRateMenuButton, {
                        rates: [1.75, 1.5, 1, .5, .1]
                    }), s.a.createElement(j.VolumeMenuButton, {
                        vertical: !0
                    }))))
                });
            D.defaultProps = {};
            var L = D,
                A = a(21),
                U = a(23),
                M = a.n(U),
                x = a(159),
                q = a(8),
                I = a.n(q),
                F = a(13),
                B = a(55),
                G = a(66),
                V = a.n(G),
                Y = a(65),
                H = a(1485),
                z = function(e) {
                    var t = e.src,
                        a = e.isLoadDataCover,
                        n = e.isDraw,
                        r = e.index,
                        o = Object(i.useState)(!1),
                        c = Object(B.a)(o, 2),
                        l = c[0],
                        u = c[1],
                        m = Object(i.useState)(!1),
                        d = Object(B.a)(m, 2),
                        p = d[0],
                        f = d[1],
                        h = Object(i.useState)(!1),
                        g = Object(B.a)(h, 2),
                        E = g[0],
                        b = g[1],
                        v = Object(i.useState)(t),
                        y = Object(B.a)(v, 1)[0],
                        k = Object(i.useRef)(null),
                        C = function(e) {
                            return Math.round((e / 2 - 100) / 3 * 100) / 100
                        },
                        w = function(e) {
                            return e.searchParams && e.searchParams.append(T.security.key, T.security.code), p && e.searchParams && e.searchParams.append("v", Object(H.a)()), e.toString()
                        },
                        O = function() {
                            var t = Object(F.a)(I.a.mark(function t() {
                                var o, c, i, s, l, m, d, p, f, h, g, E;
                                return I.a.wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (o = k.current, c = o.getContext("2d"), i = new Image, !V()(y)) {
                                                t.next = 17;
                                                break
                                            }
                                            for (s = e.a, l = e.b, m = e.c, d = e.d, p = e.e, s = C(s), l = C(l), m = C(m), d = C(d), p = C(p), f = [], h = 0; h < y.length; h += 1) g = y[h], g = w(new URL(g)), f.push(P.b.invitedImage({
                                                canvas: o,
                                                ctx: c,
                                                fileName: g,
                                                a: s,
                                                b: l,
                                                c: m,
                                                index: h,
                                                d: d,
                                                e: p,
                                                isLoadDataCover: a,
                                                setErrorImage: b
                                            }));
                                            return t.next = 14, Promise.all(f);
                                        case 14:
                                            P.b.drawIdUser({
                                                canvas: o,
                                                ctx: c,
                                                isLoadDataCover: a,
                                                isDraw: n,
                                                index: r
                                            }), t.next = 18;
                                            break;
                                        case 17:
                                            _()(y) && (E = w(new URL(y)), i.onload = function() {
                                                o.width = i.width, o.height = i.height, c.drawImage(i, 0, 0, i.width, i.height), P.b.drawIdUser({
                                                    canvas: o,
                                                    ctx: c,
                                                    isLoadDataCover: a
                                                })
                                            }, i.onerror = function() {
                                                b(!0)
                                            }, i.src = E);
                                        case 18:
                                            u(!0);
                                        case 19:
                                        case "end":
                                            return t.stop()
                                    }
                                }, t)
                            }));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }();
                    return Object(i.useEffect)(function() {
                        k && k.current && O()
                    }, [k]), Object(i.useEffect)(function() {
                        p && (u(!1), b(!1), f(!1), O())
                    }, [p]), s.a.createElement(i.Fragment, null, !l && s.a.createElement(Y.a, null), E && s.a.createElement("button", {
                        className: "modal__image--refesh",
                        onClick: function() {
                            return f(!0)
                        }
                    }, s.a.createElement("i", {
                        class: "fas fa-sync-alt"
                    }), " T\u1ea3i l\u1ea1i \u1ea3nh"), s.a.createElement("canvas", {
                        style: {
                            display: l ? "block" : "none"
                        },
                        ref: k,
                        width: "auto",
                        height: "auto"
                    }))
                };
            z.defaultProps = {
                isLoadDataCover: !1,
                a: 0,
                b: 0,
                c: 0,
                d: 0,
                e: 0
            };
            var W = z,
                J = (a(942), function(e) {
                    var t = e.isShowModal,
                        a = e.post_id,
                        n = e.dataGroup,
                        r = e.images,
                        o = e.displayOption,
                        c = e.isLoadDataCover,
                        l = e.closeModal,
                        u = Object(U.get)(n, "postList.data"),
                        m = Object(i.useMemo)(function() {
                            var e = P.b.randomNumber(r.length);
                            return r.map(function(t, a) {
                                return s.a.createElement("div", {
                                    key: "".concat(t.thumbnailName).concat(a),
                                    className: "modal__image--item ".concat("connect_image" === o ? "connect_image" : "")
                                }, s.a.createElement(W, Object.assign({}, t, {
                                    index: a,
                                    isLoadDataCover: c,
                                    isDraw: e.includes(a)
                                })))
                            })
                        }, [r]);
                    return s.a.createElement(s.a.Fragment, null, t && s.a.createElement(s.a.Fragment, null, s.a.createElement("i", {
                        className: "fas fa-times modal__image--close",
                        onClick: function() {
                            l()
                        }
                    })), s.a.createElement(x.a, {
                        animation: !1,
                        className: "modal__group--image animated fadeIn",
                        show: t,
                        onHide: function() {
                            l()
                        },
                        dialogClassName: "custom-modal",
                        "aria-labelledby": "contained-modal-title-vcenter",
                        id: "image_".concat(a)
                    }, s.a.createElement(x.a.Body, null, m), s.a.createElement(x.a.Footer, null, Object(U.get)(u, "[0]next._id", !1) && function(e) {
                        return s.a.createElement(S.b, {
                            to: e[0].next._id,
                            onClick: function() {
                                return window.scrollTo(0, 0)
                            },
                            className: "btn btn-info btn-fill"
                        }, "Chap ti\u1ebfp theo")
                    }(u))))
                });
            J.defaultProps = {
                dataGroup: {},
                images: [],
                isLoadDataCover: !1
            };
            var K = J;
            a(943);

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
                    var a, n = Object(v.a)(e);
                    if (t) {
                        var r = Object(v.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(b.a)(this, a)
                }
            }
            var $ = function(e) {
                    Object(E.a)(a, e);
                    var t = Q(a);

                    function a(e) {
                        var n;
                        return Object(h.a)(this, a), (n = t.call(this, e)).openLightbox = function() {
                            n.setState({
                                isShowModal: !0
                            }), n.hideMessageFB("none")
                        }, n.renderGallery = function() {
                            var e, t = n.props.images;
                            if (t) {
                                (e = t.length) > 5 && (t = t.slice(0, 5));
                                var a = e > A.d.IMAGES_NO_PER_ROW ? A.d.IMAGES_NO_PER_ROW : e,
                                    r = t.map(function(t, r) {
                                        var o = null;
                                        return r === A.d.IMAGES_NO_PER_ROW - 1 && e > A.d.IMAGES_NO_PER_ROW && (o = s.a.createElement("div", {
                                            className: "fadeDiv"
                                        }, s.a.createElement("span", null, "+", e - A.d.IMAGES_NO_PER_ROW))), s.a.createElement("div", {
                                            key: r,
                                            style: {
                                                cursor: "pointer",
                                                display: r > 3 ? "none" : "block",
                                                background: r > 3 ? "unset" : "url('".concat(t.thumbnail, "') center center / cover no-repeat")
                                            },
                                            className: "img-articles-".concat(a, "-").concat(r + 1),
                                            onClick: n.openLightbox
                                        }, o)
                                    });
                                return s.a.createElement("div", null, r, s.a.createElement("div", {
                                    className: "clearfix"
                                }))
                            }
                        }, n.closeModal = function() {
                            n.setState({
                                isShowModal: !1
                            }, function() {
                                n.hideMessageFB("block")
                            })
                        }, n.hideMessageFB = function(e) {
                            var t = document.getElementsByClassName("fb_reset");
                            setTimeout(function() {
                                f()(t, "[0].style") && (t[0].style.display = e)
                            }, 300)
                        }, n.handleDisableRightClick = function(e) {
                            if (3 === e.nativeEvent.which) return e.preventDefault(), !1
                        }, n.state = {
                            isShowModal: !1
                        }, n
                    }
                    return Object(g.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.state.isShowModal,
                                t = this.props,
                                a = t.className,
                                n = t.post_id,
                                r = t.displayOption,
                                o = t.isLoadDataCover,
                                c = t.dataGroup,
                                i = t.requestTrackingImage,
                                l = this.props.images;
                            return s.a.createElement("div", {
                                className: a,
                                onClick: this.handleDisableRightClick,
                                onContextMenu: this.handleDisableRightClick
                            }, this.renderGallery(), s.a.createElement(K, {
                                isShowModal: e,
                                images: l,
                                post_id: n,
                                closeModal: this.closeModal,
                                displayOption: r,
                                isLoadDataCover: o,
                                dataGroup: c,
                                requestTrackingImage: i
                            }))
                        }
                    }]), a
                }(i.Component),
                Z = a(1465),
                X = a(270),
                ee = a(853),
                te = a(271),
                ae = a(272),
                ne = a(41),
                re = a(28),
                oe = a(46);
            a(944);

            function ce(e) {
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
                    var a, n = Object(v.a)(e);
                    if (t) {
                        var r = Object(v.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(b.a)(this, a)
                }
            }
            var ie = function(e) {
                    Object(E.a)(a, e);
                    var t = ce(a);

                    function a(e) {
                        var n;
                        return Object(h.a)(this, a), (n = t.call(this, e)).setTipRef = function(e) {
                            n.tipRef = e
                        }, n.handleClickOutside = function(e) {
                            n.tipRef && !n.tipRef.contains(e.target) && n.state.open && n.toggleDropdown()
                        }, n.toggleDropdown = function(e) {
                            e ? (!n.state.hide && n.props.fetchTipList(n.props.postId, 1), n.setState({
                                hide: !n.state.hide,
                                tipAmount: !1
                            })) : n.setState({
                                open: !n.state.open,
                                hide: !1,
                                tipAmount: !1
                            })
                        }, n.handleChoose = function(e) {
                            n.setState({
                                tipAmount: e
                            })
                        }, n.handleTip = function() {
                            var e = n.props,
                                t = e.requestTipPost,
                                a = e.postId,
                                r = e.user;
                            n.state.tipAmount && r._id !== localStorage.idUser && (t(a, n.state.tipAmount), n.toggleDropdown())
                        }, n.convertTip = function(e) {
                            var t = e.substr(0, e.length - 3);
                            return s.a.createElement(oe.a, {
                                money: parseInt(t),
                                curr: !0
                            })
                        }, n.handleViewMore = function() {
                            var e = n.props,
                                t = e.postId,
                                a = e.fetchTipList,
                                r = e.loadingTip,
                                o = n.state.page;
                            r || (a(t, ++o), n.setState({
                                page: o
                            }))
                        }, n.state = {
                            open: !1,
                            hide: !1,
                            arrTip: [{
                                tip: 1,
                                money: 1e3
                            }, {
                                tip: 10,
                                money: 1e4
                            }, {
                                tip: 50,
                                money: 5e4
                            }, {
                                tip: 100,
                                money: 1e5
                            }, {
                                tip: 500,
                                money: 5e5
                            }],
                            tipAmount: !1,
                            page: 1
                        }, n
                    }
                    return Object(g.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            document.addEventListener("mousedown", this.handleClickOutside)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            document.removeEventListener("mousedown", this.handleClickOutside)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = t.open,
                                n = t.hide,
                                r = t.arrTip,
                                o = t.tipAmount,
                                c = t.page,
                                i = this.props,
                                l = i.totalTipped,
                                u = i.user,
                                m = i.tipList,
                                d = i.loadingTip,
                                p = i.totalTips,
                                f = l ? Math.floor(parseInt(l) / 1e3) : 0;
                            return s.a.createElement("div", {
                                ref: this.setTipRef,
                                className: "button-user-tip"
                            }, s.a.createElement("p", {
                                className: "info__article--label count-message tip-post",
                                onClick: function() {
                                    return e.toggleDropdown()
                                }
                            }, f || 0, "\xa0", s.a.createElement("i", {
                                className: "fab fa-bitcoin"
                            })), a && s.a.createElement("div", {
                                className: "tip-box open"
                            }, !n && s.a.createElement("div", {
                                className: "tip-choose"
                            }, s.a.createElement("div", {
                                className: "media"
                            }, s.a.createElement("div", {
                                className: "media-left"
                            }, s.a.createElement(ne.a, {
                                className: "media-object",
                                src: P.d.getLinkImage(u.avatar)
                            })), s.a.createElement("div", {
                                className: "media-body"
                            }, s.a.createElement(N.b, {
                                id: "userPlayer.tipforpost"
                            }), " ", s.a.createElement("span", {
                                className: "user-name"
                            }, u.name))), s.a.createElement("div", {
                                className: "list-group"
                            }, r.map(function(t, a) {
                                return s.a.createElement("div", {
                                    key: a,
                                    className: "list-group-item ".concat(t.money === o && "active"),
                                    onClick: function() {
                                        return e.handleChoose(t.money)
                                    }
                                }, s.a.createElement("p", {
                                    className: "item-left"
                                }, s.a.createElement("i", {
                                    className: "fab fa-bitcoin"
                                }), " ", t.tip), s.a.createElement("p", {
                                    className: "item-right"
                                }, s.a.createElement(oe.a, {
                                    money: t.money
                                })))
                            })), s.a.createElement("div", {
                                className: "media"
                            }, s.a.createElement("div", {
                                className: "media-body user-name",
                                onClick: function() {
                                    return e.toggleDropdown(!0)
                                }
                            }, s.a.createElement(N.b, {
                                id: "userPlayer.tiplist"
                            })), s.a.createElement("div", {
                                className: "media-right media-middle"
                            }, s.a.createElement("button", {
                                className: "btn-fill btn btn-sm btn-default",
                                disabled: !o || u._id === localStorage.idUser,
                                onClick: this.handleTip
                            }, s.a.createElement(N.b, {
                                id: "send"
                            }))))), n && s.a.createElement("div", {
                                className: "tip-list"
                            }, s.a.createElement("h6", null, s.a.createElement(N.b, {
                                id: "userPlayer.tiplistsupport"
                            })), s.a.createElement("div", {
                                className: "list-item"
                            }, d && 1 === c && s.a.createElement("i", {
                                className: "fa fa-spinner fa-spin"
                            }), !d && m.length < 1 && s.a.createElement("p", null, s.a.createElement(N.b, {
                                id: "pagition.data"
                            })), m.map(function(t, a) {
                                return s.a.createElement("div", {
                                    className: "media",
                                    key: a
                                }, s.a.createElement("div", {
                                    className: "media-left"
                                }, s.a.createElement(re.a, {
                                    size: "xs",
                                    url: P.d.getLinkImage(t.avatar),
                                    rankVip: P.d.urlRankVip_New(t.rank),
                                    sizeVip: 17,
                                    styleRankVip: "small"
                                })), s.a.createElement("div", {
                                    className: "media-body media-middle"
                                }, s.a.createElement(S.b, {
                                    to: t.url ? "/".concat(t.url) : "/page".concat(t._id)
                                }, s.a.createElement("span", {
                                    className: "user-name"
                                }, t.name))), s.a.createElement("div", {
                                    className: "media-right media-middle"
                                }, e.convertTip(t.tipAmount.toString()), " ", s.a.createElement("i", {
                                    className: "fab fa-bitcoin"
                                })))
                            }), p !== m.length && s.a.createElement("div", {
                                className: "view-more",
                                onClick: this.handleViewMore
                            }, d ? s.a.createElement("i", {
                                className: "fa fa-spinner fa-spin"
                            }) : s.a.createElement("i", {
                                className: "fa fa-caret-down"
                            }), " ", s.a.createElement(N.b, {
                                id: "notify.seemore"
                            }))), s.a.createElement("button", {
                                className: "btn btn-sm btn-default",
                                onClick: function() {
                                    return e.toggleDropdown()
                                }
                            }, s.a.createElement(N.b, {
                                id: "close"
                            })), s.a.createElement("button", {
                                className: "btn btn-sm btn-primary",
                                onClick: function() {
                                    return e.toggleDropdown(!0)
                                }
                            }, "Back"))))
                        }
                    }]), a
                }(i.Component),
                se = a(1052);

            function le(e) {
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
                    var a, n = Object(v.a)(e);
                    if (t) {
                        var r = Object(v.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(b.a)(this, a)
                }
            }
            var ue = function(e) {
                    Object(E.a)(a, e);
                    var t = le(a);

                    function a() {
                        return Object(h.a)(this, a), t.apply(this, arguments)
                    }
                    return Object(g.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = "https://playerduo.com";
                            return this.props.url && (e = this.props.url), s.a.createElement(se.FacebookButton, {
                                url: e,
                                appId: T.facebook.appId,
                                windowOptions: ["width=500", "height=600"]
                            }, s.a.createElement(N.b, {
                                id: "share"
                            }), " ", s.a.createElement("i", {
                                className: "fab fa-facebook"
                            }))
                        }
                    }]), a
                }(i.Component),
                me = a(904),
                de = a(284),
                pe = Object(N.g)(function(e) {
                    var t = e.countComment,
                        a = e.countLike,
                        r = e.isLike,
                        o = e.user,
                        c = void 0 === o ? {} : o,
                        l = e.post_id,
                        u = e.isLocked,
                        m = e.isUnlockedPost,
                        d = e.unlockPrice,
                        p = e.lockUntil,
                        h = e.typeArticle,
                        g = e.unlockedQuantity,
                        E = e.numberOfView,
                        b = e.showModalUnlock,
                        v = e.intl,
                        y = e.isLoadingCheckUnlock,
                        k = e.isLoadingUnlock,
                        C = e.isLoadDataCover,
                        w = e.setShowModalUnlock,
                        O = e.totalTipped,
                        _ = e.fetchTipList,
                        S = e.userProfile,
                        P = e.postId,
                        j = e.match,
                        R = e.setNotificationStatus,
                        D = e.requestTipPost,
                        L = e.userData,
                        A = e.unlockArticleRequest,
                        U = e.setShowModalRecharge,
                        M = e.checkUnlockArticleRequest,
                        x = e.requestLikePost,
                        q = e.history,
                        I = e.isShowModalRecharge,
                        F = Object(i.useState)({
                            checkLike: !0,
                            countLike: 3,
                            seconds: 0,
                            showModalLoadCredit: !1,
                            showModalUnlockSecurityCode: !1
                        }),
                        G = Object(B.a)(F, 2),
                        V = G[0],
                        Y = G[1],
                        H = null,
                        z = sessionStorage.getItem("unlockTime"),
                        W = function() {
                            if (!y) return localStorage.token ? void(C || M(l, !1, L.securityLock)) : (q.push("/login"), R(!1, v.formatMessage({
                                id: "notify.notLogin"
                            })))
                        },
                        J = function() {
                            return void 0 !== L.securityLock && null !== L.securityLock && !sessionStorage.unlockTime && !m && L.url !== c.url
                        };
                    return Object(i.useEffect)(function() {
                        b && J() && (Y(function(e) {
                            return Object(n.a)({}, e, {
                                showModalUnlockSecurityCode: !0
                            })
                        }), R(!1, s.a.createElement(N.b, {
                            id: "userPlayer.unlockkey"
                        })))
                    }, [b]), Object(i.useEffect)(function() {
                        return I && (Y(function(e) {
                            return Object(n.a)({}, e, {
                                showModalLoadCredit: !0
                            })
                        }), w(l, !1), U(l, !1)),
                            function() {
                                clearInterval(H), clearInterval(0)
                            }
                    }, [I]), s.a.createElement("div", {
                        className: "info-articles"
                    }, s.a.createElement("div", {
                        className: "user" === h && u ? "row info__article--action" : ""
                    }, s.a.createElement("div", {
                        className: "info__article--label count-message",
                        onClick: function() {
                            if (!localStorage.idUser) return R(!1, "".concat(v.formatMessage({
                                id: "notify.notLogin"
                            })));
                            V.checkLike ? (x(l, r), H = setInterval(function() {
                                Y(function(e) {
                                    return Object(n.a)({}, e, {
                                        countLike: V.countLike - 1
                                    })
                                }), 0 === V.countLike && (clearInterval(H), Y(function(e) {
                                    return Object(n.a)({}, e, {
                                        checkLike: !0,
                                        countLike: 3
                                    })
                                }))
                            }, 1e3), Y(function(e) {
                                return Object(n.a)({}, e, {
                                    checkLike: !1
                                })
                            })) : R(!1, "".concat(v.formatMessage({
                                id: "notify.toofasttrylater"
                            }), " ").concat(V.countLike, "s"))
                        }
                    }, s.a.createElement(Z.a, {
                        placement: "top",
                        className: "fade like",
                        id: "tooltip-like"
                    }, s.a.createElement("strong", null, s.a.createElement(N.b, {
                        id: "button.like"
                    }))), a || "", "\xa0", s.a.createElement("i", {
                        className: "fas fa-heart ".concat(r ? "active" : "")
                    })), "user" === h && s.a.createElement(ie, {
                        user: c,
                        totalTipped: O,
                        requestTipPost: function(e, t) {
                            return localStorage.token ? L.securityLock && !sessionStorage.unlockTime && L.url !== c.url ? (Y(function(e) {
                                return Object(n.a)({}, e, {
                                    showModalUnlockSecurityCode: !0
                                })
                            }), R(!1, s.a.createElement(N.b, {
                                id: "userPlayer.unlockkey"
                            }))) : void D(e, t, sessionStorage.unlockTime) : (q.push("/login"), R(!1, v.formatMessage({
                                id: "notify.notLogin"
                            })))
                        },
                        fetchTipList: _,
                        postId: l,
                        tipList: S.dataTips,
                        totalTips: S.totalTips,
                        loadingTip: S.loading.tip
                    }), s.a.createElement("p", {
                        className: "info__article--label count-message"
                    }, t, "\xa0", s.a.createElement("i", {
                        className: "fas fa-comments"
                    })), "user" === h && u && s.a.createElement("div", {
                        className: "info__article--label count-message"
                    }, s.a.createElement(Z.a, {
                        placement: "top",
                        className: "fade lock",
                        id: "tooltip-lock"
                    }, s.a.createElement("strong", null, s.a.createElement(N.b, {
                        id: "button.solanmokhoa"
                    }))), g && g.toLocaleString() || 0, "\xa0", s.a.createElement("i", {
                        className: "fas fa-lock-open"
                    })), "user" === h && s.a.createElement("p", {
                        className: "info__article--label count-message"
                    }, E && E.toLocaleString() || 0, "\xa0", s.a.createElement("i", {
                        className: "fas fa-eye"
                    })), s.a.createElement("p", {
                        className: "info__article--button count-message pull-right margin-right-0"
                    }, s.a.createElement(ue, {
                        url: "".concat(window.location.origin).concat(function() {
                            var e = f()(j, "params.sortUrl");
                            return e ? "/".concat(e, "/posts/").concat(P) : c ? "".concat(de.a.getUrlUser(c || {}), "/posts/").concat(P) : T.serverDomain
                        }())
                    }))), u && "user" === h && !m && function(e) {
                        var t = new Date(e),
                            a = new Date;
                        return t.getTime() > a.getTime()
                    }(p) && s.a.createElement("div", {
                        className: "info__article--label info__article--countdown ".concat(C && "info__label--disabled"),
                        onClick: W
                    }, s.a.createElement(Z.a, {
                        placement: "top",
                        className: "fade unlock",
                        id: "tooltip-unlock"
                    }, s.a.createElement("strong", null, s.a.createElement(N.b, {
                        id: "button.mokhoavaxem"
                    }))), s.a.createElement("i", {
                        className: "fas fa-unlock"
                    }), " ".concat(d && d.toLocaleString(), "\u0111 -"), s.a.createElement(me.a, {
                        className: "count-down-time",
                        timeCountDown: p
                    })), "user" === h && u && s.a.createElement("div", {
                        className: "info__article--label info__article--price ".concat(C && "info__label--disabled"),
                        onClick: W
                    }, s.a.createElement(Z.a, {
                        placement: "top",
                        className: "fade unlock",
                        id: "tooltip-unlock"
                    }, s.a.createElement("strong", null, s.a.createElement(N.b, {
                        id: "button.mokhoavaxem"
                    }))), s.a.createElement(N.b, {
                        id: "group.showArticle"
                    }), y && s.a.createElement(X.a, {
                        fontSize: 13
                    })), b && !J() ? s.a.createElement(ee.a, {
                        message: "".concat(v.formatMessage({
                            id: "group.unlock"
                        }) + (d && d.toLocaleString()), "\u0111"),
                        close: function() {
                            return w(l, !1)
                        },
                        confirm: function() {
                            if (d > L.totalMoney) return Y(function(e) {
                                return Object(n.a)({}, e, {
                                    showModalLoadCredit: !0
                                })
                            }), w(l, !1), U(l, !1), R(!1, s.a.createElement(N.b, {
                                id: "err.balancenotenough"
                            }));
                            !k && A(l, d, z)
                        },
                        isLoading: k
                    }) : null, s.a.createElement(ae.a, {
                        closeModal: function() {
                            return Y(Object(n.a)({}, V, {
                                showModalLoadCredit: !1
                            }))
                        },
                        isShow: V.showModalLoadCredit
                    }), s.a.createElement(te.a, {
                        closeModal: function() {
                            return Y(Object(n.a)({}, V, {
                                showModalUnlockSecurityCode: !1
                            }))
                        },
                        isShow: V.showModalUnlockSecurityCode
                    }))
                }),
                fe = a(860),
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
                    var a, n = Object(v.a)(e);
                    if (t) {
                        var r = Object(v.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(b.a)(this, a)
                }
            }
            var Ee = function(e) {
                Object(E.a)(a, e);
                var t = ge(a);

                function a(e) {
                    var n;
                    return Object(h.a)(this, a), (n = t.call(this, e)).state = {
                        checkPost: !1,
                        seeMore: !1
                    }, n
                }
                return Object(g.a)(a, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this.props.match;
                        e.params && e.params.idPost && this.setState({
                            checkPost: !0
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            a = t.content,
                            n = t.themeTags,
                            r = this.state,
                            o = r.checkPost,
                            c = r.seeMore,
                            i = !1,
                            l = "";
                        if (a) {
                            var u = "";
                            if (a.length > 300 && !o && !c) {
                                var m = a.indexOf(" ", 300);
                                u = -1 === m ? a.substring(0, 300) : a.substring(0, m), i = !0
                            } else u = a;
                            var d = u.split("\n");
                            l = d.map(function(t, a) {
                                var n = a === d.length - 1 && i ? s.a.createElement("span", {
                                        className: "content-player-review more"
                                    }, s.a.createElement("div", {
                                        onClick: function() {
                                            return e.setState({
                                                seeMore: !0
                                            })
                                        }
                                    }, s.a.createElement("span", null, "..."), s.a.createElement(N.b, {
                                        id: "notify.seemore"
                                    }))) : null,
                                    r = he()(t.replace(/(https?:\/\/[^\s]+)\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g, "<a target='_blank' href='$1'>$1</a>"));
                                return 1 === t.indexOf("\n") ? -1 !== t.indexOf("https://") || -1 !== t.indexOf("http://") ? s.a.createElement("p", {
                                    className: "content-player-review",
                                    key: a
                                }, r, " ", n) : s.a.createElement("p", {
                                    className: "content-player-review",
                                    key: a
                                }, " ", t.slice(t.indexOf("\n")), " ", n, s.a.createElement("br", null)) : -1 !== t.indexOf("https://") || -1 !== t.indexOf("http://") ? s.a.createElement("p", {
                                    className: "content-player-review",
                                    key: a
                                }, r, " ", n) : t ? s.a.createElement("p", {
                                    className: "content-player-review",
                                    key: a
                                }, t, n) : s.a.createElement(s.a.Fragment, null, s.a.createElement("br", null), " ", n)
                            })
                        }
                        return s.a.createElement("div", {
                            className: "content-articles"
                        }, s.a.createElement("p", null, l), n && (Array.isArray(a).length <= 300 || !i) && s.a.createElement("p", null, n.map(function(e, t) {
                            return s.a.createElement("span", {
                                key: t,
                                className: "content-articles-tag"
                            }, "#".concat(e.replace(/ /g, "_")), " ")
                        })))
                    }
                }]), a
            }(i.Component);
            Ee.defaultProps = {
                themeTags: []
            };
            var be = Ee,
                ve = a(411),
                ye = a(831),
                ke = (a(945), a(895));

            function Ce(e, t) {
                var a;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (a = function(e, t) {
                        if (!e) return;
                        if ("string" === typeof e) return we(e, t);
                        var a = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === a && e.constructor && (a = e.constructor.name);
                        if ("Map" === a || "Set" === a) return Array.from(e);
                        if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return we(e, t)
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
                var o, c = !0,
                    i = !1;
                return {
                    s: function() {
                        a = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = a.next();
                        return c = e.done, e
                    },
                    e: function(e) {
                        i = !0, o = e
                    },
                    f: function() {
                        try {
                            c || null == a.return || a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                }
            }

            function we(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }
            var Oe = function(e) {
                var t = e.content,
                    a = e.isLocked,
                    n = e.isShowModal,
                    r = e.onHideModal,
                    o = e.themeTags,
                    l = Object(c.a)(e, ["content", "isLocked", "isShowModal", "onHideModal", "themeTags"]),
                    u = Object(i.useMemo)(function() {
                        if (Array.isArray(o) && o.length > 0) {
                            var e, t = "\n",
                                a = Ce(o);
                            try {
                                for (a.s(); !(e = a.n()).done;) {
                                    var n = e.value;
                                    t += "#".concat(n.replace(/ /g, "_"), " ")
                                }
                            } catch (r) {
                                a.e(r)
                            } finally {
                                a.f()
                            }
                            return t
                        }
                        return ""
                    }, [o]);
                return s.a.createElement(x.a, {
                    className: "modal-edit-post",
                    show: n,
                    onHide: function() {
                        return r(!1)
                    }
                }, s.a.createElement(ke.a, Object.assign({
                    content: t + u,
                    isLockedEdit: a,
                    themeTags: o
                }, l, {
                    type: A.h.DEFAULT_TYPE_EDIT_ARTICLE
                })))
            };
            Oe.defaultProps = {
                isShowModal: !1,
                isLocked: !1,
                themeTags: []
            };
            var _e = Oe,
                Ne = a(872),
                Se = a(9),
                Pe = a(297),
                je = a(54),
                Te = a(829),
                Re = a(91);
            a(955);

            function De(e) {
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
                    var a, n = Object(v.a)(e);
                    if (t) {
                        var r = Object(v.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(b.a)(this, a)
                }
            }
            var Le = function(e) {
                Object(E.a)(a, e);
                var t = De(a);

                function a(e) {
                    var n;
                    return Object(h.a)(this, a), (n = t.call(this, e)).onChange = function(e) {
                        var t;
                        e.preventDefault();
                        var a = e.target,
                            r = a.name,
                            o = a.value;
                        if ("amount" !== r) n.setState((t = {}, Object(je.a)(t, r, o), Object(je.a)(t, "errReason", ""), t));
                        else {
                            var c = o.replace(/[\D\s]+/g, "");
                            n.setState(Object(je.a)({}, r, "" === c ? 0 : parseInt(c, 0)))
                        }
                    }, n.onBlocking = function() {
                        var e = n.props,
                            t = e.post_id,
                            a = e.comment_id,
                            r = e.requestBlockingUser,
                            o = e.closeModal,
                            c = e.user,
                            i = e.type,
                            s = n.state.reason;
                        0 === M.a.trim(s).length ? n.setState({
                            errReason: "B\u1ea1n kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng \xf4 n\xe0y"
                        }) : (r({
                            userId: c._id,
                            blockType: i,
                            reason: s
                        }, t, a), o())
                    }, n.state = {
                        showModal: !1,
                        reason: "",
                        errReason: ""
                    }, n
                }
                return Object(g.a)(a, [{
                    key: "render",
                    value: function() {
                        var e = this.state,
                            t = e.reason,
                            a = e.errReason,
                            n = this.props,
                            r = n.isShowModal,
                            o = n.user,
                            c = n.typeBlocking,
                            i = n.closeModal;
                        return s.a.createElement(x.a, {
                            className: "modal-donate",
                            show: r,
                            onHide: function() {
                                i()
                            },
                            size: "lg",
                            "aria-labelledby": "contained-modal-title-vcenter",
                            centered: !0
                        }, s.a.createElement(x.a.Header, {
                            closeButton: !0
                        }, s.a.createElement(x.a.Title, null, s.a.createElement(N.b, {
                            id: "group.banning"
                        }))), s.a.createElement(x.a.Body, null, s.a.createElement("table", null, s.a.createElement("tbody", null, s.a.createElement("tr", null, s.a.createElement("td", null, s.a.createElement(N.b, {
                            id: "group.user"
                        }), ":"), s.a.createElement("td", null, s.a.createElement(ne.a, {
                            src: P.d.getLinkImage(o.avatar),
                            alt: "PD"
                        }), o.name)), s.a.createElement("tr", {
                            style: {
                                height: 59
                            }
                        }, s.a.createElement("td", null, s.a.createElement(N.b, {
                            id: "group.forbiddentype"
                        }), ":"), s.a.createElement("td", {
                            className: "type-blocking"
                        }, c)), s.a.createElement("tr", null, s.a.createElement("td", null, s.a.createElement(N.b, {
                            id: "group.reason"
                        }), ":"), s.a.createElement("td", null, s.a.createElement(Te.a, {
                            type: "text",
                            name: "reason",
                            value: t,
                            onChange: this.onChange
                        }), s.a.createElement("span", {
                            className: "errors"
                        }, a)))))), s.a.createElement(x.a.Footer, null, s.a.createElement(Re.a, {
                            bsStyle: "danger",
                            fill: !0,
                            onClick: this.onBlocking
                        }, s.a.createElement(N.b, {
                            id: "accept"
                        })), s.a.createElement(Re.a, {
                            onClick: function() {
                                i()
                            }
                        }, s.a.createElement(N.b, {
                            id: "close"
                        }))))
                    }
                }]), a
            }(i.Component);

            function Ae(e) {
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
                    var a, n = Object(v.a)(e);
                    if (t) {
                        var r = Object(v.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(b.a)(this, a)
                }
            }
            var Ue = function(e) {
                    Object(E.a)(a, e);
                    var t = Ae(a);

                    function a(e) {
                        var n;
                        return Object(h.a)(this, a), (n = t.call(this, e)).onClick = function(e, t) {
                            var a = n.props,
                                r = a.comment_id;
                            (0, a.toggleDropdown)(), n.setState({
                                type: e,
                                typeBlocking: r ? "Xo\xe1 b\xecnh lu\u1eadn v\xe0 ".concat(t) : t
                            }, function() {
                                n.setState({
                                    isShowModal: !0
                                })
                            })
                        }, n.closeModal = function() {
                            n.setState({
                                isShowModal: !1
                            })
                        }, n.state = {
                            isShowModal: !1,
                            type: Pe.a[0],
                            typeBlocking: ""
                        }, n
                    }
                    return Object(g.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = t.requestBlockingUser,
                                n = t.user,
                                r = t.intl,
                                o = t.post_id,
                                c = t.comment_id,
                                i = this.state,
                                l = i.isShowModal,
                                u = i.type,
                                m = i.typeBlocking;
                            return s.a.createElement(s.a.Fragment, null, s.a.createElement("p", {
                                onMouseDown: function() {
                                    return e.onClick(Pe.a[0], r.formatMessage({
                                        id: "group.block24h"
                                    }))
                                }
                            }, s.a.createElement("i", {
                                className: "fas fa-hourglass-half"
                            }), " ", s.a.createElement(N.b, {
                                id: c ? "group.block24hcmt" : "group.block24h"
                            })), s.a.createElement("p", {
                                onMouseDown: function() {
                                    return e.onClick(Pe.a[1], r.formatMessage({
                                        id: "group.block7day"
                                    }))
                                }
                            }, s.a.createElement("i", {
                                className: "fas fa-ban"
                            }), " ", s.a.createElement(N.b, {
                                id: c ? "group.block7daycmt" : "group.block7day"
                            })), s.a.createElement("p", {
                                onMouseDown: function() {
                                    return e.onClick(Pe.a[2], r.formatMessage({
                                        id: "group.blockforever"
                                    }))
                                }
                            }, s.a.createElement("i", {
                                className: "fas fa-lock"
                            }), " ", s.a.createElement(N.b, {
                                id: c ? "group.blockforevercmt" : "group.blockforever"
                            })), s.a.createElement("p", {
                                onMouseDown: function() {
                                    return e.onClick(Pe.a[3], r.formatMessage({
                                        id: "group.blockforeverdel"
                                    }))
                                }
                            }, s.a.createElement("i", {
                                className: "fas fa-user-slash"
                            }), " ", s.a.createElement(N.b, {
                                id: "group.blockforeverdel"
                            })), s.a.createElement(Le, {
                                isShowModal: l,
                                requestBlockingUser: a,
                                user: n,
                                type: u,
                                post_id: o,
                                comment_id: c,
                                typeBlocking: m,
                                closeModal: this.closeModal
                            }))
                        }
                    }]), a
                }(i.Component),
                Me = Object(N.g)(Ue),
                xe = a(49),
                qe = a.n(xe),
                Ie = function(e) {
                    var t = e.info,
                        a = e.user,
                        r = void 0 === a ? {} : a,
                        o = e.createdAt,
                        l = e.showTime,
                        u = e.postId,
                        m = e.index,
                        d = e.deletePostLoading,
                        p = e.pinPostLoading,
                        f = e.pinnedAt,
                        h = e.userData,
                        g = e.publishPost,
                        E = e.setPublishPostStatus,
                        b = e.content,
                        v = e.themeTags,
                        y = e.attachments,
                        k = e.requestEditPost,
                        C = e.language,
                        w = e.languageCurrent,
                        O = e.isTurnOnNotification,
                        _ = e.changeNotificationStatus,
                        S = e.history,
                        j = e.requestBlockingUser,
                        T = e.intl,
                        D = e.typeArticle,
                        L = e.isLocked,
                        U = e.isLoadDataCover,
                        M = e.uploadFileContentLock,
                        x = e.isAcceptComment,
                        q = e.requestSearchAlbums,
                        I = e.postAlbum,
                        F = e.displayOption,
                        G = e.isShowModalUpdate,
                        V = e.isLoadingUpdatePost,
                        Y = e.isLoadingHidePost,
                        H = e.typeFilter,
                        z = e.setNotificationStatus,
                        W = e.deletePost,
                        J = e.pinPost,
                        K = Object(c.a)(e, ["info", "user", "createdAt", "showTime", "postId", "index", "deletePostLoading", "pinPostLoading", "pinnedAt", "userData", "publishPost", "setPublishPostStatus", "content", "themeTags", "attachments", "requestEditPost", "language", "languageCurrent", "isTurnOnNotification", "changeNotificationStatus", "history", "requestBlockingUser", "intl", "typeArticle", "isLocked", "isLoadDataCover", "uploadFileContentLock", "isAcceptComment", "requestSearchAlbums", "postAlbum", "displayOption", "isShowModalUpdate", "isLoadingUpdatePost", "isLoadingHidePost", "typeFilter", "setNotificationStatus", "deletePost", "pinPost"]),
                        Q = Object(i.useState)({
                            showDeletePostAlert: !1,
                            showPinPostAlert: !1,
                            isExpandDropDown: !1,
                            isShowModalHidePost: !1
                        }),
                        $ = Object(B.a)(Q, 2),
                        Z = $[0],
                        X = $[1];
                    Object(i.useEffect)(function() {
                        d || X(function(e) {
                            return Object(n.a)({}, e, {
                                showDeletePostAlert: !1
                            })
                        })
                    }, [d]), Object(i.useEffect)(function() {
                        p || X(function(e) {
                            return Object(n.a)({}, e, {
                                showPinPostAlert: !1
                            })
                        })
                    }, [p]), Object(i.useEffect)(function() {
                        Y || X(function(e) {
                            return Object(n.a)({}, e, {
                                isShowModalHidePost: !1
                            })
                        })
                    }, [Y]);
                    var te = function() {
                            X(function(e) {
                                return {
                                    isExpandDropDown: !e.isExpandDropDown
                                }
                            })
                        },
                        ae = function() {
                            var t = e.userCreatePost,
                                a = e.userData;
                            "normal" === localStorage.role && t._id !== a._id || X(function(e) {
                                return Object(n.a)({}, e, {
                                    showPinPostAlert: !0
                                })
                            })
                        },
                        ne = function(t) {
                            var a = e.postAlbum,
                                n = e.history,
                                r = e.user,
                                o = r.url ? "/".concat(r.url) : "/page".concat(r._id);
                            return t.ctrlKey ? window.open("".concat(o, "/albums/").concat(a._id)) : (P.d.scrollTop(), n.push("".concat(o, "/albums/").concat(a._id)))
                        },
                        oe = function(e) {
                            e && te(), X(function(t) {
                                return {
                                    isShowModalHidePost: e
                                }
                            })
                        },
                        ce = Z.showDeletePostAlert,
                        ie = Z.showPinPostAlert,
                        se = Z.isExpandDropDown,
                        le = Z.isShowModalHidePost,
                        ue = "pin";
                    f && (ue = "un-pin");
                    var me = O ? s.a.createElement("p", {
                        onClick: function() {
                            _(u, "off"), te()
                        }
                    }, s.a.createElement("i", {
                        className: "fas fa-bell-slash"
                    }), s.a.createElement(N.b, {
                        id: "group.notifypostoff"
                    })) : s.a.createElement("p", {
                        onClick: function() {
                            _(u, "on"), te()
                        }
                    }, s.a.createElement("i", {
                        className: "fas fa-bell"
                    }), s.a.createElement(N.b, {
                        id: "group.notifyposton"
                    }));
                    return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
                        className: "av-na-ti"
                    }, s.a.createElement(re.a, {
                        size: "sm",
                        url: r && r.avatar ? P.d.getLinkImage(r.avatar) : A.c.DEFAULT_AVATAR_URL,
                        rankVip: r && r.rank && "0.png" !== r.rank ? "".concat(R.a.uploadUrl, "/new-rankvip/").concat(r.rank) : null,
                        sizeVip: 20
                    }), s.a.createElement("p", {
                        className: r.role && "normal" !== r.role ? "is-admin" : void 0
                    }, s.a.createElement("div", {
                        className: "hidden-over-name",
                        onClick: function(t) {
                            var a = e.user,
                                n = e.history,
                                r = a && a.url ? "/".concat(a.url) : "/page".concat(a._id);
                            return t.ctrlKey ? window.open(r) : (P.d.scrollTop(), n.push(r))
                        }
                    }, r.name, s.a.createElement(Ne.a, {
                        trustTypes: r.trustTypes,
                        type: "group",
                        size: "1rem",
                        paddingLeft: 3
                    }))), s.a.createElement("p", {
                        className: "post__header--time"
                    }, s.a.createElement("div", {
                        onClick: function(t) {
                            var a = e.postId,
                                n = e.history,
                                r = e.match,
                                o = e.typeArticle,
                                c = e.user,
                                i = c.url || "page".concat(c._id);
                            return t.ctrlKey ? o && r && r.params && r.params.sortUrl ? window.open("/".concat(r.params.sortUrl, "/posts/").concat(a)) : window.open("/".concat(i, "/posts/").concat(a)) : (P.d.scrollTop(), o && r && r.params && r.params.sortUrl ? n.push("/".concat(r.params.sortUrl, "/posts/").concat(a)) : n.push("/".concat(i, "/posts/").concat(a)))
                        }
                    }, s.a.createElement("span", null, s.a.createElement("span", {
                        id: u,
                        "data-toggle": "tooltip",
                        title: qe()(l || o).format("HH:mm DD/MM/YYYY")
                    }, s.a.createElement(N.c, {
                        value: l || o,
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric"
                    })))), function() {
                        var t = e.membershipType,
                            a = e.postAlbum,
                            n = e.match,
                            r = e.history,
                            o = e.user,
                            c = o.url || "page".concat(o._id),
                            i = null,
                            l = "";
                        if (n.params.idPost) switch (t) {
                            case "author":
                                i = s.a.createElement(N.b, {
                                    id: "user-membership.post.content"
                                }), l = "/membership/home";
                                break;
                            case "community":
                                i = s.a.createElement(N.b, {
                                    id: "user-membership.group.content"
                                }), l = "/membership/community";
                                break;
                            case "suggest":
                                i = s.a.createElement(N.b, {
                                    id: "user-membership.recommended.content"
                                }), l = "/membership/suggest"
                        }
                        return a || i ? s.a.createElement(s.a.Fragment, null, s.a.createElement("span", {
                            className: "dot-connect"
                        }, " \xb7 "), s.a.createElement("div", {
                            className: "album--name",
                            onClick: function(e) {
                                return a ? ne(e) : r.push("/".concat(c).concat(l))
                            }
                        }, i || s.a.createElement("span", null, a.name))) : null
                    }())), s.a.createElement("div", {
                        className: "pin"
                    }, function() {
                        var t = e.pinnedAt,
                            a = e.typeArticle,
                            n = e.userCreatePost,
                            r = e.userData,
                            o = e.typeFilter;
                        return a && n._id === r._id || !a && "normal" !== localStorage.role || t && "care" !== o ? s.a.createElement("i", {
                            className: "fas fa-thumbtack ".concat(t ? "pinned" : "", " ").concat("normal" !== localStorage.role || n._id === r._id ? "cursor" : "", " "),
                            onClick: ae
                        }) : null
                    }(), s.a.createElement(ve.a, {
                        className: "dropdown-setting-article"
                    }, s.a.createElement(ye.a, {
                        open: se,
                        onToggle: te,
                        eventKey: 1,
                        id: "header-article",
                        title: s.a.createElement("i", {
                            className: "fas fa-chevron-down"
                        })
                    }, localStorage.token ? me : s.a.createElement("p", {
                        onClick: function() {
                            S.push("/login")
                        }
                    }, s.a.createElement("i", {
                        className: "fas fa-sign-in-alt"
                    }), s.a.createElement(N.b, {
                        id: "group.needlogin"
                    })), r._id === h._id && t && "user" === t.typePage && s.a.createElement("p", {
                        onClick: function() {
                            var t = e.postId,
                                a = e.isAcceptComment,
                                n = e.userData;
                            te(), e.requestEditPost(t, {
                                isAcceptComment: !a,
                                typePage: "user",
                                idUser: n._id,
                                notifComment: a ? s.a.createElement(Se.a, {
                                    id: "notify.offcomment"
                                }) : s.a.createElement(Se.a, {
                                    id: "notify.oncomment"
                                })
                            })
                        }
                    }, x ? s.a.createElement("i", {
                        className: "fas fa-comment-slash"
                    }) : s.a.createElement("i", {
                        className: "fas fa-comment"
                    }), x ? s.a.createElement(N.b, {
                        id: "group.commentoff"
                    }) : s.a.createElement(N.b, {
                        id: "group.commenton"
                    })), localStorage.token && "care" === H && s.a.createElement("p", {
                        onClick: function() {
                            return oe(!0)
                        }
                    }, s.a.createElement("i", {
                        className: "far fa-minus-square"
                    }), " ", s.a.createElement(N.b, {
                        id: "group.hidearticle"
                    })), s.a.createElement("p", {
                        onClick: function() {
                            S.push(function() {
                                var t = e.typeArticle,
                                    a = e.match,
                                    n = e.postId,
                                    r = e.user,
                                    o = r.url || "page".concat(r._id);
                                return t && a && a.params && a.params.sortUrl ? "/".concat(a.params.sortUrl, "/posts/").concat(n) : "/".concat(o, "/posts/").concat(n)
                            }())
                        }
                    }, s.a.createElement("i", {
                        className: "fa fa-arrow-circle-right"
                    }), s.a.createElement(N.b, {
                        id: "group.gopost"
                    })), I && s.a.createElement("p", {
                        onClick: ne
                    }, s.a.createElement("i", {
                        className: "fa fa-arrow-circle-right"
                    }), s.a.createElement(N.b, {
                        id: "group.goAlbum"
                    })), r._id !== h._id || U ? null : s.a.createElement("p", {
                        onClick: function() {
                            var t = e.setShowModalUpdate,
                                a = e.checkUnlockArticleRequest,
                                n = e.postId,
                                r = e.isLocked;
                            t(n, !1), r && a && a(n, !0), t(n, !0), te()
                        }
                    }, s.a.createElement("i", {
                        className: "fas fa-edit"
                    }), s.a.createElement(N.b, {
                        id: "group.editpost"
                    })), localStorage.role && "normal" !== localStorage.role || r._id === h._id ? s.a.createElement("p", {
                        onClick: function() {
                            te(), X(function(e) {
                                return {
                                    showDeletePostAlert: !0
                                }
                            })
                        }
                    }, s.a.createElement("i", {
                        className: "fas fa-trash-alt"
                    }), s.a.createElement(N.b, {
                        id: "group.delpost"
                    })) : null, localStorage.role && "normal" !== localStorage.role && s.a.createElement(Me, {
                        requestBlockingUser: j,
                        user: r,
                        toggleDropdown: te
                    })))), ce ? s.a.createElement(ee.a, {
                        message: T.formatMessage({
                            id: "group.notifydelpost"
                        }),
                        close: function() {
                            return X(function(e) {
                                return {
                                    showDeletePostAlert: !1
                                }
                            })
                        },
                        confirm: function() {
                            return W(u, m, localStorage.role && "normal" !== localStorage.role)
                        },
                        isLoading: d
                    }) : "", ie ? s.a.createElement(ee.a, {
                        message: f ? T.formatMessage({
                            id: "group.offghim"
                        }) : T.formatMessage({
                            id: "group.onghim"
                        }),
                        close: function() {
                            return X(function(e) {
                                return {
                                    showPinPostAlert: !1
                                }
                            })
                        },
                        confirm: function() {
                            return J(D, u, ue, m)
                        },
                        isLoading: p
                    }) : "", le ? s.a.createElement(ee.a, {
                        message: T.formatMessage({
                            id: "group.titlehidepost"
                        }) + r.name,
                        close: function() {
                            return oe(!1)
                        },
                        confirm: function() {
                            var t = e.postId,
                                a = e.user,
                                n = e.hidePostRequest,
                                r = e.index;
                            n({
                                postId: t
                            }, a._id, r)
                        },
                        isLoading: Y
                    }) : "", s.a.createElement(_e, Object.assign({
                        isAcceptComment: x,
                        isShowModal: G,
                        onHideModal: function() {
                            (0, e.setShowModalUpdate)(e.postId, !1)
                        },
                        publishPost: g,
                        setPublishPostStatus: E,
                        content: b,
                        themeTags: v,
                        attachments: y,
                        requestEditPost: k,
                        postId: u,
                        language: C,
                        languageCurrent: w,
                        isLocked: L,
                        uploadFileContentLock: M,
                        requestSearchAlbums: q,
                        displayOption: F,
                        isLoadingUpdatePost: V,
                        setNotificationStatus: z
                    }, K)))
                };
            Ie.defaultProps = {
                deletePostLoading: !1,
                pinnedAt: !1,
                userData: {}
            };
            var Fe = Object(N.g)(Ie),
                Be = a(1491),
                Ge = a(912),
                Ve = (a(956), Object(N.g)(function(e) {
                    var t = e.content,
                        a = e.image,
                        n = e.type,
                        r = e.typeEdit,
                        o = e.requestCreateCommentPost,
                        c = e.post_id,
                        l = e.requestCreateSubCommentPost,
                        u = e.comment_id,
                        m = e.toggleEdit,
                        d = e.requestEditComment,
                        p = e.source,
                        f = e.setNotificationStatus,
                        h = e.intl,
                        g = e.pageUserId,
                        E = Object(i.useState)(""),
                        b = Object(B.a)(E, 2),
                        v = b[0],
                        y = b[1],
                        k = Object(i.useState)([]),
                        C = Object(B.a)(k, 2),
                        w = C[0],
                        O = C[1],
                        _ = Object(i.useState)(null),
                        S = Object(B.a)(_, 2),
                        j = S[0],
                        T = S[1],
                        R = Object(i.useState)(!1),
                        D = Object(B.a)(R, 2),
                        L = D[0],
                        U = D[1],
                        M = Object(i.useState)(null),
                        x = Object(B.a)(M, 2),
                        q = x[0],
                        I = x[1],
                        F = Object(i.useState)(!1),
                        G = Object(B.a)(F, 2),
                        V = G[0],
                        Y = G[1],
                        H = Object(i.useRef)(),
                        z = Object(i.useRef)();
                    Object(i.useEffect)(function() {
                        t && Y(!0), t && y(t), a && I(a), r && z.current.focus()
                    }, []);
                    var W = function() {
                            O([]), T(null), I(null)
                        },
                        J = s.a.createElement(Z.a, {
                            id: "tooltip"
                        }, s.a.createElement("strong", null, s.a.createElement(N.b, {
                            id: "button.cancel"
                        })));
                    return s.a.createElement("div", {
                        className: "my-comment"
                    }, s.a.createElement(re.a, {
                        size: "xs",
                        url: localStorage.getItem("avatar") ? P.d.getLinkImage(localStorage.avatar) : A.c.DEFAULT_AVATAR_URL
                    }), s.a.createElement(Ge.a, {
                        inputRef: z,
                        className: "input-text",
                        name: "content",
                        value: v,
                        onChange: function(e) {
                            L ? U(!1) : y(e.target.value)
                        },
                        onKeyPress: function(e) {
                            if (void 0 === v.trim()) return f(!1, h.formatMessage({
                                id: "userPlayer.content"
                            }));
                            if (!e.shiftKey && 13 === e.charCode) {
                                if (!v.trim() && 0 === w.length) return;
                                var t = null;
                                switch (w.length > 0 && (t = w[0]), n) {
                                    case A.f.DEFAULT_TYPE_COMMENT:
                                        if (r) {
                                            var a = {
                                                content: v
                                            };
                                            t ? a.imageUpload = t : q && (a.attachments = q), d(c, u, a), m()
                                        } else g && o(g, c, t, {
                                            content: v
                                        });
                                        break;
                                    case A.f.DEFAULT_TYPE_COMMENT_REPLY:
                                        if (r) {
                                            var i = {
                                                content: v
                                            };
                                            t ? i.imageUpload = t : q && (i.attachments = q), d(c, p, i, u), m()
                                        } else g && l(g, c, u, t, {
                                            content: v
                                        })
                                }
                                y(""), O([]), T(null), U(!0), Y(!1)
                            }
                        },
                        placeholder: h.formatMessage({
                            id: "group.comment"
                        })
                    }), s.a.createElement("i", {
                        className: "fas fa-camera",
                        onClick: function() {
                            return H.current.click()
                        }
                    }), j ? s.a.createElement("div", {
                        className: "preview-image"
                    }, s.a.createElement(ne.a, {
                        src: j,
                        alt: "PD"
                    }), s.a.createElement(Be.a, {
                        placement: "top",
                        overlay: J
                    }, s.a.createElement("i", {
                        className: "fas fa-times",
                        onClick: W
                    }))) : null, q ? s.a.createElement("div", {
                        className: "preview-image"
                    }, s.a.createElement(ne.a, {
                        src: P.d.getLinkImage(q),
                        alt: "PD"
                    }), s.a.createElement(Be.a, {
                        placement: "top",
                        overlay: J
                    }, s.a.createElement("i", {
                        className: "fas fa-times",
                        onClick: W
                    }))) : null, n !== A.b.DEFAULT_TYPE_EDIT_COMMENT && n !== A.b.DEFAULT_TYPE_EDIT_REPLY_COMMENT || !V ? null : s.a.createElement(s.a.Fragment, null, s.a.createElement("button", {
                        className: "btn-cancel",
                        onClick: function() {
                            O([]), T(null), I(null), Y(!1), m()
                        }
                    }, s.a.createElement(N.b, {
                        id: "button.cancel"
                    }))), s.a.createElement("input", {
                        className: "hidden",
                        type: "file",
                        accept: "image/*",
                        onChange: function(e) {
                            e.preventDefault();
                            for (var t = e.target.files, a = null, n = 0; n < t.length; n += 1) a = URL.createObjectURL(t[n]);
                            O(t), T(a), I(null), z.current.focus()
                        },
                        ref: H
                    }))
                })),
                Ye = a(861),
                He = a.n(Ye);

            function ze(e) {
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
                    var a, n = Object(v.a)(e);
                    if (t) {
                        var r = Object(v.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(b.a)(this, a)
                }
            }
            var We = function(e) {
                    Object(E.a)(a, e);
                    var t = ze(a);

                    function a(e) {
                        var n;
                        return Object(h.a)(this, a), (n = t.call(this, e)).toggleDropdown = function() {
                            n.setState(function(e) {
                                return {
                                    isExpandDropDown: !e.isExpandDropDown
                                }
                            })
                        }, n.toggleEdit = function() {
                            n.setState(function(e) {
                                return {
                                    isEditComment: !e.isEditComment
                                }
                            })
                        }, n.checkShowCount = function() {
                            var e = n.props,
                                t = e.post_id,
                                a = e.comment_id,
                                r = e.pageUserId;
                            n.props.checkShowCount(), r && n.props.requestGetReplyComment(r, t, a)
                        }, n.onMouseOut = function() {
                            n.state.isExpandDropDown || n.setState({
                                isShowDropDown: !1
                            })
                        }, n.onMouseOver = function() {
                            n.setState({
                                isShowDropDown: !0
                            })
                        }, n.onBlur = function() {
                            n.setState({
                                isShowDropDown: !1
                            })
                        }, n.onEditComment = function() {
                            n.toggleDropdown(), n.setState({
                                isEditComment: !0,
                                isShowDropDown: !1
                            })
                        }, n.onDeleteComment = function() {
                            var e = n.props,
                                t = e.requestDeleteComment,
                                a = e.post_id,
                                r = e.source,
                                o = e.comment_id,
                                c = e.type,
                                i = e.userCreatePost,
                                s = e.userData,
                                l = i._id === s._id;
                            n.toggleDropdown(), c === A.f.DEFAULT_TYPE_COMMENT ? t(l, a, o) : t(l, a, r, o)
                        }, n.onBlockAndDelComment = function() {
                            var e = n.props,
                                t = e.requestBlockAndDelComment,
                                a = e.user,
                                r = void 0 === a ? {} : a;
                            r._id && t(r._id), n.setState({
                                isShowBlockDel: !1
                            })
                        }, n.linkUser = function() {
                            var e = n.props.user;
                            return e && e.url ? "/".concat(e.url) : "/page".concat(e._id)
                        }, n.closeModal = function() {
                            n.setState({
                                isShowModal: !1
                            })
                        }, n.showModal = function() {
                            n.setState({
                                isShowModal: !0
                            })
                        }, n.listAttachments = function(e) {
                            if (!e) return [];
                            var t = window.location.hostname,
                                a = t.includes("stg") || t.includes("localhost") ? "development" : "production";
                            return [Object(je.a)({}, e, "".concat(a, "/images/").concat(e))]
                        }, n.listImages = function(e) {
                            return e ? [{
                                fileName: e,
                                src: P.d.getLinkImage(e)
                            }] : []
                        }, n.state = {
                            isExpandDropDown: !1,
                            isShowDropDown: !1,
                            isEditComment: !1,
                            isShowModal: !1,
                            isShowBlockDel: !1
                        }, n
                    }
                    return Object(g.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = t.content,
                                n = t.user,
                                r = void 0 === n ? {} : n,
                                o = t.attachments,
                                c = t.type,
                                i = t.typeEdit,
                                l = t.createdAt,
                                u = t.requestEditComment,
                                m = t.comment_id,
                                d = t.post_id,
                                p = t.userData,
                                f = t.source,
                                h = t.requestBlockingUser,
                                g = t.userCreatePost,
                                E = this.state,
                                b = E.isExpandDropDown,
                                v = E.isShowDropDown,
                                y = E.isEditComment,
                                k = E.isShowModal,
                                C = E.isShowBlockDel;
                            if (!r) return null;
                            var w = "";
                            a && (w = a.split("\n").map(function(e, t) {
                                return 1 === e.indexOf("\n") ? -1 !== e.indexOf("https://") || -1 !== e.indexOf("http://") ? s.a.createElement("span", {
                                    key: t
                                }, he()(e.replace(/(https?:\/\/[^\s]+)\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g, "<a target='_blank' href='$1'>$1</a>")), s.a.createElement("br", null)) : s.a.createElement("span", {
                                    key: He.a.generate()
                                }, e.slice(e.indexOf("\n")), s.a.createElement("br", null)) : -1 !== e.indexOf("https://") || -1 !== e.indexOf("http://") ? s.a.createElement("span", {
                                    key: t
                                }, he()(e.replace(/(https?:\/\/[^\s]+)\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g, "<a target='_blank' href='$1'>$1</a>")), s.a.createElement("br", null)) : e ? s.a.createElement("span", {
                                    key: He.a.generate()
                                }, e, s.a.createElement("br", null)) : s.a.createElement("br", null)
                            }));
                            return s.a.createElement(s.a.Fragment, null, y ? s.a.createElement(Ve, {
                                type: c,
                                typeEdit: i,
                                content: a,
                                image: o,
                                post_id: d,
                                comment_id: m,
                                source: f,
                                requestEditComment: u,
                                toggleEdit: this.toggleEdit
                            }) : s.a.createElement(s.a.Fragment, null, s.a.createElement(re.a, {
                                size: "xs",
                                url: P.d.getLinkImage(r.avatar),
                                rankVip: r.rank && "0.png" !== r.rank ? "".concat(T.uploadUrl, "/new-rankvip/").concat(r.rank) : null,
                                sizeVip: 17,
                                styleRankVip: "small"
                            }), s.a.createElement("div", {
                                className: "content-sub-comment",
                                onMouseOut: this.onMouseOut,
                                onMouseOver: this.onMouseOver,
                                onBlur: this.onBlur
                            }, s.a.createElement("a", {
                                className: "name-comment ".concat(r.role && "normal" !== r.role && "is-admin"),
                                href: this.linkUser(),
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, r.name, s.a.createElement(Ne.a, {
                                trustTypes: r.trustTypes,
                                type: "group",
                                size: "1rem",
                                paddingLeft: 3
                            })), "\xa0\xa0", s.a.createElement("span", {
                                className: "content-comment"
                            }, w), o ? s.a.createElement(s.a.Fragment, null, s.a.createElement(ne.a, {
                                onClick: this.showModal,
                                src: P.d.convertTypeThumbnail(o),
                                alt: "comment-img"
                            })) : null, r._id === p._id || g._id === p._id || "normal" !== localStorage.role ? s.a.createElement("div", null, s.a.createElement(ve.a, {
                                className: v ? "dropdown-setting-comment" : "hide-dropdown-setting-comment"
                            }, s.a.createElement(ye.a, {
                                open: b,
                                onToggle: this.toggleDropdown,
                                eventKey: 1,
                                title: s.a.createElement("i", {
                                    className: "fas fa-ellipsis-h"
                                })
                            }, r._id === p._id && s.a.createElement("p", {
                                onMouseDown: this.onEditComment
                            }, s.a.createElement("i", {
                                className: "fas fa-edit"
                            }), "\xa0", s.a.createElement(N.b, {
                                id: "title.editcomment"
                            })), (r._id === p._id || g._id === p._id || localStorage.role && "normal" !== localStorage.role) && s.a.createElement("p", {
                                onMouseDown: this.onDeleteComment
                            }, s.a.createElement("i", {
                                className: "fas fa-trash-alt"
                            }), "\xa0", s.a.createElement(N.b, {
                                id: "title.delcomment"
                            })), r._id !== p._id && g._id === p._id && s.a.createElement("p", {
                                onMouseDown: function() {
                                    return e.setState({
                                        isShowBlockDel: !0
                                    })
                                }
                            }, s.a.createElement("i", {
                                className: "fas fa-ban"
                            }), "\xa0", s.a.createElement(N.b, {
                                id: "title.blockdelcomment"
                            })), "censor" === localStorage.role && s.a.createElement(Me, {
                                requestBlockingUser: h,
                                user: r,
                                post_id: d,
                                comment_id: m,
                                toggleDropdown: this.toggleDropdown
                            })))) : null, s.a.createElement("div", {
                                className: "div-reply"
                            }, c === A.f.DEFAULT_TYPE_COMMENT_REPLY ? null : s.a.createElement("span", {
                                className: "reply",
                                onClick: this.checkShowCount
                            }, s.a.createElement(N.b, {
                                id: "title.answer"
                            })), s.a.createElement("span", {
                                className: "time-reply"
                            }, s.a.createElement(N.c, {
                                value: l || 0,
                                hour: "numeric",
                                minute: "numeric",
                                second: "numeric"
                            }))))), s.a.createElement(K, {
                                isShowModal: k,
                                images: this.listImages(o),
                                post_id: d,
                                closeModal: this.closeModal,
                                displayOption: !0
                            }), C && s.a.createElement(ee.a, {
                                message: s.a.createElement(Se.a, {
                                    id: "notify.blockDelComment",
                                    mess: r.name
                                }),
                                close: function() {
                                    return e.setState({
                                        isShowBlockDel: !1
                                    })
                                },
                                confirm: this.onBlockAndDelComment
                            }))
                        }
                    }]), a
                }(i.Component),
                Je = function(e) {
                    var t = e.comment_id,
                        a = e.latestComment,
                        n = e.requestDeleteComment,
                        r = e.requestBlockAndDelComment,
                        o = e.requestEditComment,
                        u = e.history,
                        m = e.requestBlockingUser,
                        d = e.userCreatePost,
                        p = Object(c.a)(e, ["comment_id", "latestComment", "requestDeleteComment", "requestBlockAndDelComment", "requestEditComment", "history", "requestBlockingUser", "userCreatePost"]),
                        f = Object(i.useMemo)(function() {
                            return (a || []).map(function(e) {
                                return s.a.createElement(We, Object.assign({
                                    key: e._id,
                                    type: A.f.DEFAULT_TYPE_COMMENT_REPLY,
                                    typeEdit: !0,
                                    comment_id: e._id
                                }, e, {
                                    playerSetting: e.user.playerSetting,
                                    requestDeleteComment: n,
                                    requestBlockAndDelComment: r,
                                    requestEditComment: o,
                                    history: u,
                                    requestBlockingUser: m,
                                    userCreatePost: d
                                }, p))
                            })
                        }, [Object(l.a)(a)]);
                    return s.a.createElement("div", {
                        className: "sub-sub-comment"
                    }, f, localStorage.getItem("avatar") && s.a.createElement(Ve, Object.assign({
                        type: A.f.DEFAULT_TYPE_COMMENT_REPLY,
                        comment_id: t
                    }, p)))
                };

            function Ke(e) {
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
                    var a, n = Object(v.a)(e);
                    if (t) {
                        var r = Object(v.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(b.a)(this, a)
                }
            }
            var Qe = function(e) {
                Object(E.a)(a, e);
                var t = Ke(a);

                function a(e) {
                    var n;
                    return Object(h.a)(this, a), (n = t.call(this, e)).checkShowCount = function() {
                        var e = n.props,
                            t = e.post_id,
                            a = e.comment_id,
                            r = e.checkShowCount,
                            o = e.requestGetReplyComment,
                            c = e.pageUserId;
                        r(), c && o(c, t, a)
                    }, n.state = {}, n
                }
                return Object(g.a)(a, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.countReply,
                            a = e.loadingGetReplyComment;
                        return t && 0 !== t ? s.a.createElement("div", {
                            className: "count-comment"
                        }, s.a.createElement("i", {
                            className: "far fa-hand-point-right",
                            onClick: this.checkShowCount
                        }), "\xa0", s.a.createElement("span", {
                            className: "show-reply",
                            onClick: this.checkShowCount
                        }, s.a.createElement(Se.a, {
                            id: "notify.seeanswer",
                            mess: t
                        }), a && s.a.createElement("i", {
                            className: "fa fa-spinner fa-spin",
                            "aria-hidden": "true"
                        }))) : null
                    }
                }]), a
            }(i.Component);

            function $e(e) {
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
                    var a, n = Object(v.a)(e);
                    if (t) {
                        var r = Object(v.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(b.a)(this, a)
                }
            }
            var Ze = function(e) {
                Object(E.a)(a, e);
                var t = $e(a);

                function a(e) {
                    var n;
                    return Object(h.a)(this, a), (n = t.call(this, e)).checkShowCount = function() {
                        n.setState({
                            isShowCount: !1
                        })
                    }, n.state = {
                        isShowCount: !0
                    }, n
                }
                return Object(g.a)(a, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.content,
                            a = e.createdAt,
                            n = e.countReply,
                            r = e.user,
                            o = e.attachments,
                            c = e.requestCreateCommentPost,
                            i = e.post_id,
                            l = e.comment_id,
                            u = e.userData,
                            m = e.requestCreateSubCommentPost,
                            d = e.latestComment,
                            p = e.requestGetReplyComment,
                            f = e.requestEditComment,
                            h = e.requestDeleteComment,
                            g = e.requestBlockAndDelComment,
                            E = e.loadingGetReplyComment,
                            b = e.showSubComment,
                            v = e.history,
                            y = e.requestBlockingUser,
                            k = e.userCreatePost,
                            C = e.pageUserId;
                        return r ? s.a.createElement("div", {
                            className: "sub-comment"
                        }, s.a.createElement(We, {
                            type: A.f.DEFAULT_TYPE_COMMENT,
                            typeEdit: !0,
                            checkShowCount: this.checkShowCount,
                            post_id: i,
                            comment_id: l,
                            content: t,
                            user: r,
                            userData: u,
                            attachments: o,
                            createdAt: a,
                            history: v,
                            playerSetting: r.playerSetting,
                            requestGetReplyComment: p,
                            requestCreateCommentPost: c,
                            requestCreateSubCommentPost: m,
                            requestEditComment: f,
                            requestDeleteComment: h,
                            requestBlockAndDelComment: g,
                            requestBlockingUser: y,
                            userCreatePost: k,
                            pageUserId: C
                        }), d && d.length > 0 || b ? s.a.createElement(Je, {
                            latestComment: d || [],
                            userData: u,
                            requestCreateCommentPost: c,
                            requestCreateSubCommentPost: m,
                            post_id: i,
                            comment_id: l,
                            requestDeleteComment: h,
                            requestBlockAndDelComment: g,
                            requestEditComment: f,
                            history: v,
                            requestBlockingUser: y,
                            userCreatePost: k,
                            pageUserId: C
                        }) : s.a.createElement(Qe, {
                            checkShowCount: this.checkShowCount,
                            countReply: n,
                            requestGetReplyComment: p,
                            post_id: i,
                            comment_id: l,
                            loadingGetReplyComment: E,
                            pageUserId: C
                        })) : null
                    }
                }]), a
            }(i.Component);
            Ze.defaultProps = {
                content: "",
                latestComment: [],
                loadingGetReplyComment: !1
            };
            var Xe = Ze;

            function et(e) {
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
                    var a, n = Object(v.a)(e);
                    if (t) {
                        var r = Object(v.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(b.a)(this, a)
                }
            }
            var tt = function(e) {
                Object(E.a)(a, e);
                var t = et(a);

                function a(e) {
                    var n;
                    return Object(h.a)(this, a), (n = t.call(this, e)).state = {}, n
                }
                return Object(g.a)(a, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.userCreatePost,
                            a = e.latestComment,
                            n = e.requestCreateCommentPost,
                            r = e.post_id,
                            o = e.requestCreateSubCommentPost,
                            c = e.requestGetReplyComment,
                            i = e.userData,
                            l = e.requestEditComment,
                            u = e.requestDeleteComment,
                            m = e.requestBlockAndDelComment,
                            d = e.history,
                            p = e.requestBlockingUser,
                            f = e.isAcceptComment,
                            h = e.setNotificationStatus,
                            g = e.isBlocked,
                            E = e.pageUserId;
                        if (!1 === f || g) return s.a.createElement("div", {
                            className: "comment-articles"
                        }, s.a.createElement("p", {
                            className: "cmt-block"
                        }, s.a.createElement(N.b, {
                            id: "notify.Commentsblock"
                        })));
                        var b = Array.isArray(a) ? a.map(function(e) {
                            return s.a.createElement(Xe, {
                                key: e._id,
                                comment_id: e._id,
                                content: e.content,
                                source: e.source,
                                countReply: e.countReply,
                                user: e.user,
                                createdAt: e.createdAt,
                                attachments: e.attachments,
                                latestComment: e.latestComment,
                                showSubComment: e.showSubComment,
                                loadingGetReplyComment: e.loadingGetReplyComment,
                                requestCreateCommentPost: n,
                                requestCreateSubCommentPost: o,
                                requestGetReplyComment: c,
                                requestEditComment: l,
                                requestDeleteComment: u,
                                requestBlockAndDelComment: m,
                                history: d,
                                requestBlockingUser: p,
                                userCreatePost: t,
                                post_id: r,
                                userData: i,
                                pageUserId: E
                            })
                        }) : null;
                        return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
                            className: "comment-articles"
                        }, b, localStorage.getItem("avatar") ? s.a.createElement(Ve, {
                            post_id: r,
                            userData: i,
                            type: A.f.DEFAULT_TYPE_COMMENT,
                            requestCreateCommentPost: n,
                            requestCreateSubCommentPost: o,
                            requestGetReplyComment: c,
                            setNotificationStatus: h,
                            pageUserId: E
                        }) : null))
                    }
                }]), a
            }(i.Component);

            function at(e) {
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
                    var a, n = Object(v.a)(e);
                    if (t) {
                        var r = Object(v.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(b.a)(this, a)
                }
            }
            var nt = function(e) {
                Object(E.a)(a, e);
                var t = at(a);

                function a() {
                    var e;
                    Object(h.a)(this, a);
                    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return (e = t.call.apply(t, [this].concat(r))).getCommentOfPost = function() {
                        var t = e.props,
                            a = t.post_id,
                            n = t.last_id,
                            r = t.loadingSeeMore,
                            o = t.pageUserId;
                        !r && o && e.props.requestGetCommentPost(o, a, n, A.f.DEFAULT_NUMBER_GET_DATA)
                    }, e
                }
                return Object(g.a)(a, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.countComment,
                            a = e.latestComment,
                            n = e.loadingSeeMore,
                            r = e.clearLoadMore;
                        return t - a.length <= 0 || r ? null : s.a.createElement("div", {
                            className: "see-more-comment"
                        }, s.a.createElement("p", {
                            onClick: this.getCommentOfPost
                        }, s.a.createElement(Se.a, {
                            id: "notify.seemorecomment",
                            mess: t - a.length > A.f.DEFAULT_NUMBER_GET_DATA ? A.f.DEFAULT_NUMBER_GET_DATA : t - a.length
                        }), n && s.a.createElement("i", {
                            className: "fa fa-spinner fa-spin",
                            "aria-hidden": "true"
                        })))
                    }
                }]), a
            }(i.Component);

            function rt(e) {
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
                    var a, n = Object(v.a)(e);
                    if (t) {
                        var r = Object(v.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(b.a)(this, a)
                }
            }
            var ot = function(e) {
                Object(E.a)(a, e);
                var t = rt(a);

                function a() {
                    var e;
                    Object(h.a)(this, a);
                    for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c];
                    return (e = t.call.apply(t, [this].concat(o))).images = function(e, t) {
                        arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        var a = function(e) {
                                return P.g.checkImageOnlineGroup(e.fileName, t)
                            },
                            r = function(e) {
                                return P.g.checkThumbnailGroup(e, !1)
                            },
                            o = function(e) {
                                return P.g.checkThumbnailGroup(e, !0)
                            };
                        return e.map(function(e, t) {
                            return Object(n.a)({
                                fileName: e.fileName,
                                src: a(e),
                                thumbnail: 0 === t ? o(e) : r(e)
                            }, e)
                        })
                    }, e.showAlbum = function(t, a, n) {
                        var r = e.props,
                            o = r.displayOption,
                            c = r.post_id,
                            i = r.isLoadDataCover,
                            l = r.dataGroup,
                            u = r.requestTrackingImage,
                            m = "cover" === n || "high_quality" === o || "connect_image" === o ? "/post_cover_images" : "/";
                        return s.a.createElement($, {
                            images: e.images(t, m),
                            showThumbnails: !0,
                            isLoadDataCover: i,
                            className: 2 === a ? "wrapper-album-block-tow" : "wrapper-album-block",
                            displayOption: o,
                            post_id: c,
                            dataGroup: l,
                            requestTrackingImage: u
                        })
                    }, e.showVideo = function(e, t) {
                        return s.a.createElement(L, {
                            url: e[0],
                            typeCover: t
                        })
                    }, e.handleViewPost = function() {
                        var t = e.props,
                            a = t.userData,
                            n = t.post_id,
                            r = t.typeArticle,
                            o = t.requestViewPost,
                            c = t.postAlbum,
                            i = f()(c, "_id");
                        if (localStorage.token && a.constructor === Object && 0 !== Object.keys(a).length && "user" === r && o) {
                            var s = P.d.getCookie(a._id) && JSON.parse(P.d.getCookie(a._id)).constructor === Array ? JSON.parse(P.d.getCookie(a._id)) : [];
                            s.length > 20 && (P.d.setCookie(a._id, "", -1), s = []), s.includes(n) || (s.push(n), P.d.setCookie(a._id, JSON.stringify(s), 2), o(i, n))
                        }
                    }, e
                }
                return Object(g.a)(a, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.info,
                            a = e.thumbnail,
                            n = e.attachments,
                            r = e.content,
                            o = e.themeTags,
                            i = e.latestComment,
                            l = e.user,
                            u = e.hashtags,
                            m = e.hashTag,
                            d = e.createdAt,
                            p = e.countComment,
                            h = e.requestCreateCommentPost,
                            g = e.requestCreateSubCommentPost,
                            E = e.requestGetReplyComment,
                            b = e.requestGetCommentPost,
                            v = e.userData,
                            y = e.post_id,
                            k = e.isShowModalRecharge,
                            C = e.deletePost,
                            w = e.index,
                            O = e.deletePostLoading,
                            j = e.setNotificationStatus,
                            T = e.createRoomRequest,
                            R = e.socket,
                            D = e.history,
                            L = e.pinPost,
                            A = e.pinPostLoading,
                            U = e.pinnedAt,
                            M = e.publishPost,
                            x = e.setPublishPostStatus,
                            q = e.requestEditPost,
                            I = e.language,
                            F = e.languageCurrent,
                            B = e.loadingSeeMore,
                            G = e.requestEditComment,
                            V = e.requestDeleteComment,
                            Y = e.requestBlockAndDelComment,
                            H = e.isTurnOnNotification,
                            z = e.changeNotificationStatus,
                            W = e.match,
                            J = e.countLike,
                            K = e.requestLikePost,
                            Q = e.isLike,
                            $ = e.requestBlockingUser,
                            Z = e.isShowModalChat,
                            X = e.checkFirstChatRequest,
                            ee = e.showModalChat,
                            te = e.isLoadingBtnChat,
                            ae = e.clearLoadMore,
                            ne = e.isLocked,
                            re = e.isUnlockedPost,
                            oe = e.unlockPrice,
                            ce = e.lockUntil,
                            ie = e.typeArticle,
                            se = e.unlockedQuantity,
                            le = e.showModalUnlock,
                            ue = e.setShowModalUnlock,
                            me = e.checkUnlockArticleRequest,
                            de = e.unlockArticleRequest,
                            fe = e.isLoadingCheckUnlock,
                            he = e.isLoadingUnlock,
                            ge = e.isLoadDataCover,
                            Ee = e.uploadFileContentLock,
                            ve = e.setShowModalRecharge,
                            ye = e.isShowModalSecurity,
                            ke = e.setShowModalUnlockSecurity,
                            Ce = e.isAcceptComment,
                            we = e.requestSearchAlbums,
                            Oe = e.userProfile,
                            _e = e.postAlbum,
                            Ne = e.requestViewPost,
                            Se = e.displayOption,
                            Pe = e.requestTipPost,
                            je = e.fetchTipList,
                            Te = e.setShowModalUpdate,
                            Re = e.isShowModalUpdate,
                            De = e.isLoadingUpdatePost,
                            Le = e.hidePostRequest,
                            Ae = e.isLoadingHidePost,
                            Ue = e.isHidePost,
                            Me = e.typeFilter,
                            xe = e.showTime,
                            qe = e.numberOfView,
                            Ie = e.totalTipped,
                            Be = e.pageUser,
                            Ge = Object(c.a)(e, ["info", "thumbnail", "attachments", "content", "themeTags", "latestComment", "user", "hashtags", "hashTag", "createdAt", "countComment", "requestCreateCommentPost", "requestCreateSubCommentPost", "requestGetReplyComment", "requestGetCommentPost", "userData", "post_id", "isShowModalRecharge", "deletePost", "index", "deletePostLoading", "setNotificationStatus", "createRoomRequest", "socket", "history", "pinPost", "pinPostLoading", "pinnedAt", "publishPost", "setPublishPostStatus", "requestEditPost", "language", "languageCurrent", "loadingSeeMore", "requestEditComment", "requestDeleteComment", "requestBlockAndDelComment", "isTurnOnNotification", "changeNotificationStatus", "match", "countLike", "requestLikePost", "isLike", "requestBlockingUser", "isShowModalChat", "checkFirstChatRequest", "showModalChat", "isLoadingBtnChat", "clearLoadMore", "isLocked", "isUnlockedPost", "unlockPrice", "lockUntil", "typeArticle", "unlockedQuantity", "showModalUnlock", "setShowModalUnlock", "checkUnlockArticleRequest", "unlockArticleRequest", "isLoadingCheckUnlock", "isLoadingUnlock", "isLoadDataCover", "uploadFileContentLock", "setShowModalRecharge", "isShowModalSecurity", "setShowModalUnlockSecurity", "isAcceptComment", "requestSearchAlbums", "userProfile", "postAlbum", "requestViewPost", "displayOption", "requestTipPost", "fetchTipList", "setShowModalUpdate", "isShowModalUpdate", "isLoadingUpdatePost", "hidePostRequest", "isLoadingHidePost", "isHidePost", "typeFilter", "showTime", "numberOfView", "totalTipped", "pageUser"]),
                            Ve = !1;
                        return f()(n, "[0].fileName") && _()(n[0].fileName) && n[0].fileName.split(".")[1] && P.d.checkVideo(n[0].fileName.split(".").slice(-1)[0].toLocaleLowerCase()) && (Ve = !0), Ue ? s.a.createElement("section", {
                            className: "articles-section pd-10"
                        }, s.a.createElement(N.b, {
                            id: "group.hidepostof"
                        }), s.a.createElement(S.b, {
                            to: "/".concat(l.url || "page".concat(l._id))
                        }, l.name)) : s.a.createElement("div", {
                            onClick: this.handleViewPost,
                            className: "articles-section\n            ".concat(ge ? "articles__animation--focus" : "", "\n            ").concat(n.length < 1 && 0 === w ? "tip-fix" : "")
                        }, s.a.createElement("div", {
                            className: "header-articles"
                        }, s.a.createElement(Fe, Object.assign({
                            userCreatePost: l,
                            isAcceptComment: Ce,
                            info: t,
                            index: w,
                            typeFilter: Me,
                            typeArticle: ie,
                            user: l,
                            hashtags: u,
                            hashTag: m,
                            createdAt: d,
                            showTime: xe || d,
                            postId: y,
                            deletePost: C,
                            deletePostLoading: O,
                            pinPost: L,
                            pinPostLoading: A,
                            pinnedAt: U,
                            userData: v,
                            publishPost: M,
                            setPublishPostStatus: x,
                            content: r,
                            themeTags: o,
                            attachments: n,
                            requestEditPost: q,
                            language: I,
                            languageCurrent: F,
                            isTurnOnNotification: H,
                            changeNotificationStatus: z,
                            history: D,
                            match: W,
                            playerSetting: l && l.playerSetting ? l.playerSetting : null,
                            setNotificationStatus: j,
                            requestBlockingUser: $,
                            checkUnlockArticleRequest: me,
                            isLocked: ne,
                            isLoadDataCover: ge,
                            uploadFileContentLock: Ee,
                            requestSearchAlbums: we,
                            postAlbum: _e,
                            displayOption: Se,
                            setShowModalUpdate: Te,
                            isShowModalUpdate: Re,
                            isLoadingUpdatePost: De,
                            hidePostRequest: Le,
                            isLoadingHidePost: Ae
                        }, Ge))), s.a.createElement(be, {
                            content: r,
                            post_id: y,
                            history: D,
                            match: W,
                            isLoadDataCover: ge,
                            themeTags: o
                        }), n && n.length > 0 && n[0] && !Ve && this.showAlbum(n, n.length, a), n && n.length > 0 && n[0] && Ve && this.showVideo(n, a), s.a.createElement(pe, {
                            postId: y,
                            match: W,
                            countComment: p,
                            isShowModalSecurity: ye,
                            info: t,
                            isShowModalRecharge: k,
                            setNotificationStatus: j,
                            createRoomRequest: T,
                            isShowModalChat: Z,
                            showModalChat: ee,
                            socket: R,
                            history: D,
                            user: l,
                            countLike: J,
                            isLike: Q,
                            post_id: y,
                            requestLikePost: K,
                            hashtags: u,
                            hashTag: m,
                            checkFirstChatRequest: X,
                            isLoadingBtnChat: te,
                            isLocked: ne,
                            isUnlockedPost: re,
                            unlockPrice: oe,
                            lockUntil: ce,
                            typeArticle: ie,
                            unlockedQuantity: se,
                            showModalUnlock: le,
                            setShowModalUnlock: ue,
                            checkUnlockArticleRequest: me,
                            unlockArticleRequest: de,
                            isLoadingCheckUnlock: fe,
                            isLoadingUnlock: he,
                            isLoadDataCover: ge,
                            userData: v,
                            setShowModalRecharge: ve,
                            setShowModalUnlockSecurity: ke,
                            requestViewPost: Ne,
                            numberOfView: qe || 0,
                            totalTipped: Ie || 0,
                            requestTipPost: Pe,
                            fetchTipList: je,
                            userProfile: Oe
                        }), p > 0 && !1 !== Ce && s.a.createElement(nt, {
                            post_id: y,
                            countComment: p,
                            latestComment: i || [],
                            requestGetCommentPost: b,
                            last_id: i.length > 0 ? i[0]._id : null,
                            loadingSeeMore: B,
                            clearLoadMore: ae,
                            pageUserId: Be
                        }), s.a.createElement(tt, {
                            isAcceptComment: Ce,
                            post_id: y,
                            latestComment: i,
                            userData: v,
                            history: D,
                            requestBlockingUser: $,
                            userCreatePost: l,
                            requestCreateCommentPost: h,
                            requestCreateSubCommentPost: g,
                            requestGetReplyComment: E,
                            requestEditComment: G,
                            requestDeleteComment: V,
                            requestBlockAndDelComment: Y,
                            setNotificationStatus: j,
                            isBlocked: f()(t, "data.isBlocked"),
                            pageUserId: Be
                        }))
                    }
                }]), a
            }(i.Component);
            ot.defaultProps = {
                deletePostLoading: !1,
                latestComment: [],
                isLike: !1,
                isShowModalChat: !1,
                pinnedAt: null,
                clearLoadMore: !1,
                checkFirstChatRequest: function() {},
                showModalChat: function() {}
            };
            var ct = ot,
                it = (a(957), function(e) {
                    var t = e.getMorePost,
                        a = e.postList,
                        n = Object(c.a)(e, ["getMorePost", "postList"]),
                        r = a.doneLoadPost,
                        o = a.pinPostLoading,
                        m = f()(a, "data", []),
                        p = Object(u.i)(),
                        h = function(e) {
                            return p.url.indexOf("membership/home") > -1 ? "page-users/".concat(e.pageUser, "/posts/membership?membershipType=author") : e.type
                        },
                        g = Object(i.useMemo)(function() {
                            return m.map(function(e, t) {
                                return s.a.createElement(ct, Object.assign({
                                    index: t,
                                    pinPostLoading: o,
                                    key: e._id,
                                    post_id: e._id,
                                    typeArticle: h(e)
                                }, e, n))
                            })
                        }, [Object(l.a)(m)]);
                    return s.a.createElement(i.Fragment, null, s.a.createElement(d.a, {
                        onBottom: function() {
                            return !r && t(localStorage.idUser)
                        }
                    }, g), a.loading && s.a.createElement(w, null))
                }),
                st = (a(958), function(e) {
                    var t = e.dataGroup,
                        a = Object(c.a)(e, ["dataGroup"]),
                        n = t || {},
                        r = n.hashtags,
                        o = n.postList;
                    return o.errorMessage && o.data && 0 === o.data.length ? s.a.createElement("div", {
                        className: "text-center message-error-group"
                    }, s.a.createElement("h5", null, o.errorMessage)) : s.a.createElement(it, Object.assign({
                        dataGroup: t,
                        hashtags: r,
                        postList: o
                    }, a))
                }),
                lt = a(61),
                ut = a(48),
                mt = a(59),
                dt = a(161),
                pt = a(68),
                ft = a(4),
                ht = a(74);
            t.a = Object(r.b)(function(e) {
                var t = e.group,
                    a = e.auth,
                    r = e.socket,
                    o = e.userInformation;
                return {
                    info: e.playerProfile,
                    socket: r,
                    auth: a,
                    userProfile: e.userProfile,
                    userData: o.data,
                    dataGroup: Object(n.a)({}, t.data),
                    loadingGroup: t.loading
                }
            }, function(e) {
                return Object(o.bindActionCreators)({
                    deletePost: mt.n,
                    setNotificationStatus: ft.c,
                    requestSearchAlbums: ut.C,
                    pinPost: mt.v,
                    publishPost: mt.w,
                    requestCreateCommentPost: mt.k,
                    requestCreateSubCommentPost: mt.l,
                    requestGetReplyComment: mt.t,
                    requestGetCommentPost: mt.s,
                    createRoomRequest: pt.a,
                    setPublishPostStatus: mt.D,
                    requestEditPost: mt.p,
                    requestEditComment: mt.o,
                    requestDeleteComment: mt.m,
                    requestBlockAndDelComment: mt.i,
                    changeNotificationStatus: mt.d,
                    requestGetDataForUserOrPlayer: dt.c,
                    requestLikePost: mt.u,
                    requestBlockingUser: mt.j,
                    checkFirstChatRequest: lt.a,
                    showModalChat: lt.m,
                    setShowModalUnlock: mt.F,
                    checkUnlockArticleRequest: mt.e,
                    unlockArticleRequest: mt.I,
                    uploadFileContentLock: mt.y,
                    setShowModalRecharge: mt.E,
                    setShowModalUnlockSecurity: mt.G,
                    requestViewPost: ut.J,
                    requestTipPost: ut.G,
                    fetchTipList: ut.q,
                    setShowModalUpdate: mt.H,
                    requestTrackingImage: ht.e,
                    fetchPostPending: mt.h
                }, e)
            })(st)
        },
        913: function(e, t, a) {},
        935: function(e, t, a) {},
        941: function(e, t, a) {},
        942: function(e, t, a) {},
        943: function(e, t, a) {},
        944: function(e, t, a) {},
        945: function(e, t, a) {},
        946: function(e, t, a) {},
        947: function(e, t, a) {},
        948: function(e, t, a) {},
        949: function(e, t, a) {},
        950: function(e, t, a) {},
        951: function(e, t, a) {},
        952: function(e, t, a) {},
        953: function(e, t, a) {},
        954: function(e, t, a) {},
        955: function(e, t, a) {},
        956: function(e, t, a) {},
        957: function(e, t, a) {},
        958: function(e, t, a) {},
        960: function(e, t, a) {},
        968: function(e, t, a) {
            "use strict";
            var n = a(39),
                r = a(55),
                o = a(80),
                c = a(0),
                i = a.n(c),
                s = a(23),
                l = a.n(s),
                u = a(3),
                m = a(51),
                d = 0;
            t.a = function(e) {
                var t = e.field,
                    a = e.label,
                    s = e.value,
                    p = e.onChange,
                    f = e.error,
                    h = e.requestSuggest,
                    g = e.suggest,
                    E = e.classSuggest,
                    b = e.chooseTag,
                    v = e.setChooseTag,
                    y = Object(o.a)(e, ["field", "label", "value", "onChange", "error", "requestSuggest", "suggest", "classSuggest", "chooseTag", "setChooseTag"]),
                    k = Object(c.useState)([]),
                    C = Object(r.a)(k, 2),
                    w = C[0],
                    O = C[1],
                    _ = Object(c.useState)(""),
                    N = Object(r.a)(_, 2),
                    S = N[0],
                    P = N[1],
                    j = Object(c.useState)(!1),
                    T = Object(r.a)(j, 2),
                    R = T[0],
                    D = T[1];
                Object(c.useEffect)(function() {
                    return O(s),
                        function() {
                            window.clearTimeout(d)
                        }
                }, [s]), Object(c.useEffect)(function() {
                    b && L(b)
                }, [b]);
                var L = function(e) {
                    if (e.trim()) {
                        var a = Object(n.a)(new Set(u.d.replaceHashtags([].concat(Object(n.a)(w), [e]))));
                        p({
                            target: {
                                value: a,
                                name: t
                            }
                        }), O(a), P(""), h && h()
                    }
                };
                return i.a.createElement("div", {
                    className: "hash-tag"
                }, i.a.createElement(m.a, Object.assign({
                    field: "hashtag",
                    label: a,
                    value: S,
                    onChange: function(e) {
                        return function(e) {
                            var t = e.target.value;
                            t.length < 50 && (P(t), h && (0 !== d && window.clearTimeout(d), t.length > 1 ? d = setTimeout(function() {
                                h(t), D(!0)
                            }, 500) : h()))
                        }(e)
                    },
                    error: f,
                    onBlur: function() {
                        setTimeout(function() {
                            D(!1)
                        }, 50)
                    },
                    onFocus: function() {
                        D(!0)
                    },
                    autoComplete: "off",
                    onKeyDown: function(e) {
                        "Enter" === e.key && (L(S), D(!1))
                    }
                }, y)), R && g && g.length > 0 ? i.a.createElement("div", {
                    className: "suggest-tag ".concat(E || "")
                }, (g || []).map(function(e, t) {
                    return i.a.createElement("p", {
                        className: "item-suggest",
                        key: t,
                        onMouseDown: function() {
                            return L(u.d.replaceSpaceToDash(e.tag))
                        }
                    }, u.d.replaceSpaceToDash(e.tag))
                })) : null, w.length > 0 ? i.a.createElement("div", {
                    className: "list-tag row"
                }, w.map(function(e, a) {
                    return "" === l.a.trim(e) ? null : i.a.createElement("p", {
                        className: "item-tag",
                        key: e + a
                    }, i.a.createElement("i", {
                        className: "fa fa-times-circle",
                        onClick: function() {
                            return function(e) {
                                var a = u.d.replaceHashtags(u.h.checkFormatTags(Object(n.a)(w)));
                                a.splice(e, 1), v && v(""), p({
                                    target: {
                                        value: a,
                                        name: t
                                    }
                                }), O(a), P(""), h && h()
                            }(a)
                        }
                    }), u.d.replaceSpaceToDash(e))
                })) : null)
            }
        },
        969: function(e, t, a) {
            var n = a(970);
            e.exports = function(e, t) {
                return !(null == e || !e.length) && n(e, t, 0) > -1
            }
        },
        970: function(e, t, a) {
            var n = a(433),
                r = a(971),
                o = a(972);
            e.exports = function(e, t, a) {
                return t === t ? o(e, t, a) : n(e, r, a)
            }
        },
        971: function(e, t) {
            e.exports = function(e) {
                return e !== e
            }
        },
        972: function(e, t) {
            e.exports = function(e, t, a) {
                for (var n = a - 1, r = e.length; ++n < r;)
                    if (e[n] === t) return n;
                return -1
            }
        },
        973: function(e, t) {
            e.exports = function() {}
        },
        989: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                o = a(859),
                c = a(6),
                i = a(7),
                s = a.n(i),
                l = a(30),
                u = a(3),
                m = a(41),
                d = a(12),
                p = (a(913), function() {
                    var e = Object(n.useContext)(o.b).incomeDay;
                    return r.a.createElement("section", {
                        className: "player__newfeed"
                    }, r.a.createElement("div", {
                        className: "player__newfeed--rent"
                    }, r.a.createElement("div", {
                        className: "wrapper__image"
                    }, r.a.createElement(l.b, {
                        to: "/players"
                    }, r.a.createElement(m.a, {
                        src: u.d.getLinkImage(s()(e, "[0].playerSetting.avatar")),
                        alt: "rent player"
                    }))), r.a.createElement("div", {
                        className: "rent__player--text"
                    }, r.a.createElement(l.b, {
                        to: "/players"
                    }, r.a.createElement(c.b, {
                        id: "nav.rentplayer"
                    })))), r.a.createElement("div", {
                        className: "player__newfeed--card"
                    }, r.a.createElement("div", {
                        className: "wrapper__image"
                    }, r.a.createElement(l.b, {
                        to: "/cards"
                    }, r.a.createElement(m.a, {
                        src: "".concat(d.staticImageUrl, "/steam_gift.jpg"),
                        alt: "rent player"
                    }))), r.a.createElement("div", {
                        className: "rent__player--text"
                    }, r.a.createElement(l.b, {
                        to: "/cards"
                    }, r.a.createElement(c.b, {
                        id: "buyCard"
                    })))))
                }),
                f = a(847),
                h = a(21),
                g = r.a.memo(function() {
                    var e = Object(n.useContext)(o.b),
                        t = e.album,
                        a = e.userInformation;
                    if (t && Array.isArray(t.albums) && t.albums.length > 0) {
                        var i = a.url || "page".concat(a._id);
                        return r.a.createElement(f.a, {
                            title: "Albums ",
                            classBtn: "btn-detail-vip",
                            isNewFeed: "button.following",
                            link: "".concat(i, "/following/albums")
                        }, r.a.createElement("div", {
                            className: "user__albums"
                        }, t && Array.isArray(t.albums) ? t.albums.map(function(e) {
                            var t = u.d.checkAvatarAlbum(e.avatar);
                            return r.a.createElement(l.b, {
                                key: e._id,
                                to: "/".concat(s()(e, "user.url"), "/albums/").concat(e._id),
                                className: "item-album"
                            }, r.a.createElement(m.a, {
                                src: t,
                                alt: e.name
                            }), r.a.createElement("p", {
                                className: "user__name"
                            }, e.name), r.a.createElement("p", {
                                className: "user__time"
                            }, r.a.createElement(c.c, {
                                value: e.updatedAt || 0,
                                year: "numeric",
                                month: "numeric",
                                day: "numeric",
                                hour: "numeric",
                                minute: "numeric",
                                second: "numeric"
                            })))
                        }) : [], t.total > h.d.LIMIT_ITEM_NEW_FEED && r.a.createElement(l.b, {
                            to: "/".concat(a.url, "/following/albums"),
                            className: "user__item--seemore"
                        }, r.a.createElement("i", {
                            className: "fas fa-caret-down"
                        }), " \xa0", r.a.createElement(c.b, {
                            id: "notify.seemore"
                        }))))
                    }
                    return null
                }),
                E = a(9),
                b = r.a.memo(function() {
                    var e = Object(n.useContext)(o.b),
                        t = e.listFollow,
                        a = e.userInformation;
                    if (t && Array.isArray(t.data) && t.data.length > 0) {
                        var i = a.url || "page".concat(a._id);
                        return r.a.createElement(f.a, {
                            title: r.a.createElement(E.a, {
                                id: "page"
                            }),
                            isNewFeed: "button.following",
                            link: "".concat(i, "/following/pages")
                        }, r.a.createElement("div", {
                            className: "user__albums"
                        }, function() {
                            if (t && Array.isArray(t.data)) {
                                var e = t.data;
                                return (e.length > 4 ? e.slice(0, 4) : e).map(function(e) {
                                    var t = e.user || {},
                                        a = u.d.getLinkImage(t.avatar);
                                    return r.a.createElement(l.b, {
                                        key: e._id,
                                        to: "/".concat(t.url),
                                        className: "item-album"
                                    }, r.a.createElement(m.a, {
                                        src: a,
                                        alt: t.name
                                    }), r.a.createElement("p", {
                                        className: "user__name"
                                    }, t.name), r.a.createElement("p", {
                                        className: "user__time"
                                    }, r.a.createElement(c.c, {
                                        value: e.lastTimeUpdatePost || t.createdAt,
                                        year: "numeric",
                                        month: "numeric",
                                        day: "numeric",
                                        hour: "numeric",
                                        minute: "numeric",
                                        second: "numeric"
                                    })))
                                })
                            }
                            return []
                        }(), t.total > h.d.LIMIT_ITEM_NEW_FEED && r.a.createElement(l.b, {
                            to: "/".concat(a.url, "/following/pages"),
                            className: "user__item--seemore"
                        }, r.a.createElement("i", {
                            className: "fas fa-caret-down"
                        }), " \xa0", r.a.createElement(E.a, {
                            id: "notify.seemore"
                        }))))
                    }
                    return null
                }),
                v = a(55),
                y = function() {
                    var e = Object(n.useState)(null),
                        t = Object(v.a)(e, 2),
                        a = t[0],
                        o = t[1],
                        c = function(e) {
                            if (a) {
                                var t = "ios" === a ? d.mobile.ios.link : d.mobile.android.link,
                                    n = "ios" === a ? d.mobileChat.ios.link : d.mobileChat.android.link;
                                return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                                    className: "wrapper__image"
                                }, r.a.createElement("a", {
                                    href: e ? n : t,
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                }, r.a.createElement(m.a, {
                                    src: e ? "https://lh3.googleusercontent.com/sThfwStmdeoU2qrcSadQxErZhQ97Wy0FFUt3ecunu83M8XVj82y7wcsSfySkIHo4Yjg" : "https://lh3.googleusercontent.com/teno8SXg4Nxh4tMwgi7x2FCLJFYrx6nq3e6ZdDzYqaSln3mKwpQRsk-I7oAXmaBQZqo",
                                    style: {
                                        borderRadius: 15
                                    }
                                }))), r.a.createElement("div", {
                                    className: "rent__player--text"
                                }, r.a.createElement("a", {
                                    href: e ? n : t,
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                }, r.a.createElement("span", null, e ? "PlayerChat" : "PlayerDuo"))))
                            }
                            return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                                className: "wrapper__image"
                            }, r.a.createElement("div", {
                                onClick: function() {
                                    return o(e ? "android" : "ios")
                                }
                            }, r.a.createElement(m.a, {
                                src: "".concat(d.staticImageUrl, "/icon/").concat(e ? "logo_googleplay.png" : "logo_ios.png")
                            }))), r.a.createElement("div", {
                                className: "rent__player--text"
                            }, r.a.createElement("div", {
                                className: "label",
                                onClick: function() {
                                    return o(e ? "android" : "ios")
                                }
                            }, r.a.createElement("span", null, e ? "Google Play" : "Apple Store"))))
                        };
                    return a ? r.a.createElement("section", {
                        className: "player__newfeed platform-app"
                    }, r.a.createElement("div", {
                        className: "back-btn",
                        onClick: function() {
                            return o(null)
                        }
                    }, r.a.createElement(m.a, {
                        src: "".concat(d.staticImageUrl, "/icon/").concat("ios" === a ? "logo_ios.png" : "logo_googleplay.png")
                    })), r.a.createElement("div", {
                        className: "player__newfeed--apple"
                    }, c()), r.a.createElement("div", {
                        className: "player__newfeed--card"
                    }, c(!0))) : r.a.createElement("section", {
                        className: "player__newfeed"
                    }, r.a.createElement("div", {
                        className: "player__newfeed--apple"
                    }, c()), r.a.createElement("div", {
                        className: "player__newfeed--card"
                    }, c(!0)))
                },
                k = a(870);
            t.a = function(e) {
                var t = Object(n.useContext)(o.b),
                    a = t.album,
                    c = t.listFollow,
                    i = e.loadingAlbum,
                    s = e.loadingFollowing;
                return r.a.createElement(r.a.Fragment, null, r.a.createElement(p, null), r.a.createElement(y, null), i && r.a.createElement(k.a, {
                    height: "200px"
                }), a.total ? r.a.createElement(g, null) : null, s && r.a.createElement(k.a, {
                    height: "200px"
                }), c.total ? r.a.createElement(b, null) : null)
            }
        }
    }
]);
