(window.webpackJsonp = window.webpackJsonp || []).push([
    [21], {
        1312: function(e, t, a) {
            var r;
            e.exports = (r = a(0), function(e) {
                function t(r) {
                    if (a[r]) return a[r].exports;
                    var n = a[r] = {
                        exports: {},
                        id: r,
                        loaded: !1
                    };
                    return e[r].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports
                }
                var a = {};
                return t.m = e, t.c = a, t.p = "", t(0)
            }([function(e, t, a) {
                e.exports = a(4)
            }, function(e, t, a) {
                e.exports = a(6)()
            }, function(e, t) {
                e.exports = r
            }, function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t) {
                    return decodeURIComponent(e.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(t).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"))
                }
            }, function(e, t, a) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function n(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = arguments[t];
                            for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
                        }
                        return e
                    },
                    s = function() {
                        function e(e, t) {
                            for (var a = 0; a < t.length; a++) {
                                var r = t[a];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, a, r) {
                            return a && e(t.prototype, a), r && e(t, r), t
                        }
                    }(),
                    o = a(2),
                    c = r(o),
                    l = a(1),
                    u = r(l),
                    d = a(5),
                    f = r(d),
                    m = a(3),
                    p = r(m),
                    h = function(e) {
                        function t() {
                            var e, a, r;
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t);
                            for (var s = arguments.length, o = Array(s), c = 0; c < s; c++) o[c] = arguments[c];
                            return a = r = n(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(o))), r.state = {
                                isSdkLoaded: !1,
                                isProcessing: !1
                            }, r.responseApi = function(e) {
                                window.FB.api("/me", {
                                    locale: r.props.language,
                                    fields: r.props.fields
                                }, function(t) {
                                    i(t, e), r.props.callback(t)
                                })
                            }, r.checkLoginState = function(e) {
                                r.setStateIfMounted({
                                    isProcessing: !1
                                }), e.authResponse ? r.responseApi(e.authResponse) : r.props.onFailure ? r.props.onFailure({
                                    status: e.status
                                }) : r.props.callback({
                                    status: e.status
                                })
                            }, r.checkLoginAfterRefresh = function(e) {
                                "connected" === e.status ? r.checkLoginState(e) : window.FB.login(function(e) {
                                    return r.checkLoginState(e)
                                }, !0)
                            }, r.click = function(e) {
                                if (r.state.isSdkLoaded && !r.state.isProcessing && !r.props.isDisabled) {
                                    r.setState({
                                        isProcessing: !0
                                    });
                                    var t = r.props,
                                        a = t.scope,
                                        n = t.appId,
                                        i = t.onClick,
                                        s = t.returnScopes,
                                        o = t.responseType,
                                        c = t.redirectUri,
                                        l = t.disableMobileRedirect,
                                        u = t.authType,
                                        d = t.state;
                                    if ("function" != typeof i || (i(e), !e.defaultPrevented)) {
                                        var m = {
                                            client_id: n,
                                            redirect_uri: c,
                                            state: d,
                                            return_scopes: s,
                                            scope: a,
                                            response_type: o,
                                            auth_type: u
                                        };
                                        if (r.props.isMobile && !l) window.location.href = "https://www.facebook.com/dialog/oauth" + (0, f.default)(m);
                                        else {
                                            if (!window.FB) return void(r.props.onFailure && r.props.onFailure({
                                                status: "facebookNotLoaded"
                                            }));
                                            window.FB.login(r.checkLoginState, {
                                                scope: a,
                                                return_scopes: s,
                                                auth_type: m.auth_type
                                            })
                                        }
                                    }
                                }
                            }, n(r, a)
                        }
                        return function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(t, e), s(t, [{
                            key: "componentDidMount",
                            value: function() {
                                if (this._isMounted = !0, document.getElementById("facebook-jssdk")) this.sdkLoaded();
                                else {
                                    this.setFbAsyncInit(), this.loadSdkAsynchronously();
                                    var e = document.getElementById("fb-root");
                                    e || ((e = document.createElement("div")).id = "fb-root", document.body.appendChild(e))
                                }
                            }
                        }, {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                this.state.isSdkLoaded && e.autoLoad && !this.props.autoLoad && window.FB.getLoginStatus(this.checkLoginAfterRefresh)
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                this._isMounted = !1
                            }
                        }, {
                            key: "setStateIfMounted",
                            value: function(e) {
                                this._isMounted && this.setState(e)
                            }
                        }, {
                            key: "setFbAsyncInit",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    a = t.appId,
                                    r = t.xfbml,
                                    n = t.cookie,
                                    i = t.version,
                                    s = t.autoLoad;
                                window.fbAsyncInit = function() {
                                    window.FB.init({
                                        version: "v" + i,
                                        appId: a,
                                        xfbml: r,
                                        cookie: n
                                    }), e.setStateIfMounted({
                                        isSdkLoaded: !0
                                    }), (s || e.isRedirectedFromFb()) && window.FB.getLoginStatus(e.checkLoginAfterRefresh)
                                }
                            }
                        }, {
                            key: "isRedirectedFromFb",
                            value: function() {
                                var e = window.location.search;
                                return (0, p.default)(e, "code") || (0, p.default)(e, "granted_scopes")
                            }
                        }, {
                            key: "sdkLoaded",
                            value: function() {
                                this.setState({
                                    isSdkLoaded: !0
                                })
                            }
                        }, {
                            key: "loadSdkAsynchronously",
                            value: function() {
                                var e = this.props.language;
                                ! function(t, a, r) {
                                    var n = t.getElementsByTagName(a)[0],
                                        i = n,
                                        s = n;
                                    t.getElementById(r) || ((s = t.createElement(a)).id = r, s.src = "https://connect.facebook.net/" + e + "/sdk.js", i.parentNode.insertBefore(s, i))
                                }(document, "script", "facebook-jssdk")
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var e = this.props.render;
                                if (!e) throw new Error("ReactFacebookLogin requires a render prop to render");
                                var t = {
                                    onClick: this.click,
                                    isDisabled: !!this.props.isDisabled,
                                    isProcessing: this.state.isProcessing,
                                    isSdkLoaded: this.state.isSdkLoaded
                                };
                                return this.props.render(t)
                            }
                        }]), t
                    }(c.default.Component);
                h.propTypes = {
                    isDisabled: u.default.bool,
                    callback: u.default.func.isRequired,
                    appId: u.default.string.isRequired,
                    xfbml: u.default.bool,
                    cookie: u.default.bool,
                    authType: u.default.string,
                    scope: u.default.string,
                    state: u.default.string,
                    responseType: u.default.string,
                    returnScopes: u.default.bool,
                    redirectUri: u.default.string,
                    autoLoad: u.default.bool,
                    disableMobileRedirect: u.default.bool,
                    isMobile: u.default.bool,
                    fields: u.default.string,
                    version: u.default.string,
                    language: u.default.string,
                    onClick: u.default.func,
                    onFailure: u.default.func,
                    render: u.default.func.isRequired
                }, h.defaultProps = {
                    redirectUri: "undefined" != typeof window ? window.location.href : "/",
                    scope: "public_profile,email",
                    returnScopes: !1,
                    xfbml: !1,
                    cookie: !1,
                    authType: "",
                    fields: "name",
                    version: "2.3",
                    language: "en_US",
                    disableMobileRedirect: !1,
                    isMobile: function() {
                        var e = !1;
                        try {
                            e = !!(window.navigator && window.navigator.standalone || navigator.userAgent.match("CriOS") || navigator.userAgent.match(/mobile/i))
                        } catch (t) {}
                        return e
                    }(),
                    onFailure: null,
                    state: "facebookdirect",
                    responseType: "code"
                }, t.default = h
            }, function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    return "?" + Object.keys(e).map(function(t) {
                        return t + "=" + encodeURIComponent(e[t])
                    }).join("&")
                }
            }, function(e, t, a) {
                "use strict";

                function r() {}
                var n = a(7);
                e.exports = function() {
                    function e(e, t, a, r, i, s) {
                        if (s !== n) {
                            var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                            throw o.name = "Invariant Violation", o
                        }
                    }

                    function t() {
                        return e
                    }
                    e.isRequired = e;
                    var a = {
                        array: e,
                        bool: e,
                        func: e,
                        number: e,
                        object: e,
                        string: e,
                        symbol: e,
                        any: e,
                        arrayOf: t,
                        element: e,
                        instanceOf: t,
                        node: e,
                        objectOf: t,
                        oneOf: t,
                        oneOfType: t,
                        shape: t,
                        exact: t
                    };
                    return a.checkPropTypes = r, a.PropTypes = a, a
                }
            }, function(e, t) {
                "use strict";
                e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
            }]))
        },
        1313: function(e, t, a) {},
        1483: function(e, t, a) {
            "use strict";
            a.r(t);
            var r = a(54),
                n = a(2),
                i = a(55),
                s = a(0),
                o = a.n(s),
                c = a(30),
                l = a(40),
                u = a(6),
                d = a(44),
                f = a(4),
                m = a(51),
                p = a(934),
                h = a(3),
                b = a(227),
                g = a.n(b),
                v = a(53),
                y = a.n(v),
                E = a(94),
                k = a.n(E),
                w = function(e) {
                    var t = {};
                    return y.a.isLength(e.username, {
                        min: 4,
                        max: void 0
                    }) || (t.username = o.a.createElement(u.b, {
                        id: "length4"
                    })), y.a.isAlphanumeric(e.username) ? y.a.isLength(e.username, {
                        min: 4,
                        max: 25
                    }) || (t.username = o.a.createElement(u.b, {
                        id: "username.minmax"
                    })) : t.username = o.a.createElement(u.b, {
                        id: "username.invalid"
                    }), y.a.isEmpty(e.username) && (t.username = o.a.createElement(u.b, {
                        id: "required"
                    })), y.a.isLength(e.password, {
                        min: 6,
                        max: 100
                    }) || (t.password = o.a.createElement(u.b, {
                        id: "pass.minmaxvalid"
                    })), y.a.isEmpty(e.password) && (t.password = o.a.createElement(u.b, {
                        id: "required"
                    })), y.a.equals(e.password, e.confirmPassword) || (t.confirmPassword = o.a.createElement(u.b, {
                        id: "pass.notmatch"
                    })), y.a.isEmpty(e.confirmPassword) && (t.confirmPassword = o.a.createElement(u.b, {
                        id: "required"
                    })), y.a.isEmpty(e.email) && (t.email = o.a.createElement(u.b, {
                        id: "required"
                    })), {
                        errors: t,
                        isValid: k()(t)
                    }
                },
                C = a(228),
                O = Object(l.b)(null, {
                    registerRequest: d.q,
                    updateEmailRequest: d.z,
                    handleInputVerifyEmail: d.i
                })(Object(u.g)(function(e) {
                    var t = e.intl,
                        a = e.auth,
                        l = e.onChangeView,
                        d = e.registerRequest,
                        f = e.historyUrl,
                        p = e.updateEmailRequest,
                        b = a || {},
                        v = b.isLoading,
                        y = b.isVerifyMailLoading,
                        E = b.showInputVerifyEmail,
                        k = Object(s.useState)({
                            username: "",
                            password: "",
                            confirmPassword: "",
                            isVerifyCaptcha: !1,
                            verifyCaptchaMess: "",
                            errors: {},
                            email: "",
                            verifiedMailCode: ""
                        }),
                        O = Object(i.a)(k, 2),
                        j = O[0],
                        S = O[1],
                        M = Object(s.useState)(""),
                        x = Object(i.a)(M, 2),
                        R = x[0],
                        _ = x[1],
                        L = Object(s.useRef)();
                    Object(s.useEffect)(function() {
                        return function() {
                            L.current.reset()
                        }
                    }, []), Object(s.useEffect)(function() {
                        R && S(Object(n.a)({}, j, {
                            isVerifyCaptcha: !0
                        }))
                    }, [R]);
                    var P = function(e) {
                        var t, a = e.target,
                            i = a.name,
                            s = "checkbox" === a.type ? a.checked : a.value;
                        "username" === i && (s = s.trim()), S(Object(n.a)({}, j, (t = {}, Object(r.a)(t, i, s), Object(r.a)(t, "errors", {}), t))), e.preventDefault()
                    };
                    return o.a.createElement("div", {
                        className: "content-main"
                    }, o.a.createElement("form", {
                        onSubmit: function(e) {
                            if (e.preventDefault(), j.verifiedMailCode) {
                                var t = {
                                    username: j.username,
                                    password: j.password,
                                    verifiedMailCode: j.verifiedMailCode,
                                    email: j.email
                                };
                                ! function() {
                                    var e = w(j),
                                        t = e.errors,
                                        a = e.isValid;
                                    return a || S(Object(n.a)({}, j, {
                                        errors: t
                                    })), a
                                }() ? j.isVerifyCaptcha || S(Object(n.a)({}, j, {
                                    verifyCaptchaMess: "Captcha is Required"
                                })): (S(Object(n.a)({}, j, {
                                    errors: {},
                                    isVerifyCaptcha: !1
                                })), d(t, f, R), L.current.reset())
                            }
                        }
                    }, o.a.createElement(m.a, {
                        field: "username",
                        value: j.username,
                        placeholder: t.formatMessage({
                            id: "passform.username"
                        }),
                        error: j.errors.username,
                        onChange: P
                    }), o.a.createElement(m.a, {
                        type: "password",
                        field: "password",
                        value: j.password,
                        placeholder: t.formatMessage({
                            id: "passform.matkhau"
                        }),
                        error: j.errors.password,
                        onChange: P
                    }), o.a.createElement(m.a, {
                        type: "password",
                        field: "confirmPassword",
                        value: j.confirmPassword,
                        placeholder: t.formatMessage({
                            id: "passform.confirmpass"
                        }),
                        error: j.errors.confirmPassword,
                        onChange: P
                    }), o.a.createElement("div", {
                        className: "register-verify-email"
                    }, o.a.createElement(m.a, {
                        type: "email",
                        field: "email",
                        value: j.email,
                        placeholder: t.formatMessage({
                            id: "xacthucemail"
                        }),
                        error: j.errors.email,
                        onChange: P,
                        disabled: E
                    }), E ? o.a.createElement(m.a, {
                        field: "verifiedMailCode",
                        value: j.verifiedMailCode,
                        placeholder: t.formatMessage({
                            id: "phoneform.maxacnhan"
                        }),
                        error: j.errors.verifiedMailCode,
                        onChange: P,
                        className: "verified-mail-code"
                    }) : o.a.createElement("button", {
                        onClick: function() {
                            h.j.isEmail(j.email) && p({
                                email: j.email,
                                action: "signup"
                            })
                        },
                        disabled: !h.j.isEmail(j.email)
                    }, y ? o.a.createElement("i", {
                        className: "fa fa-spinner fa-spin"
                    }) : o.a.createElement(u.b, {
                        id: "cusbtn.layma"
                    }))), o.a.createElement("div", {
                        className: "recaptcha"
                    }, o.a.createElement(g.a, {
                        ref: L,
                        sitekey: C.a,
                        render: "explicit",
                        verifyCallback: function(e) {
                            return _(e)
                        },
                        onloadCallback: function() {},
                        hl: localStorage.lang || "vi"
                    })), !j.isVerifyCaptcha && j.verifyCaptchaMess && o.a.createElement("span", {
                        className: "err-captcha"
                    }, j.verifyCaptchaMess), o.a.createElement("button", {
                        type: "submit",
                        disabled: v
                    }, v ? o.a.createElement("i", {
                        className: "fa fa-spinner fa-spin"
                    }) : o.a.createElement(u.b, {
                        id: "taotk"
                    }))), o.a.createElement("button", {
                        style: {
                            backgroundColor: "gray"
                        },
                        onClick: function() {
                            return l(!0, !1, !1)
                        }
                    }, o.a.createElement(u.b, {
                        id: "dangnhap"
                    })), o.a.createElement("p", {
                        className: "forgot_password"
                    }, o.a.createElement(c.b, {
                        to: "#",
                        onClick: function() {
                            return l(!1, !1, !0)
                        }
                    }, o.a.createElement(u.b, {
                        id: "quenmk"
                    }))))
                })),
                j = a(14),
                S = a(15),
                M = a(26),
                x = a(27),
                R = a(19),
                _ = function(e) {
                    var t = {};
                    return h.j.isEmail(e.email) || (t.email = o.a.createElement(u.b, {
                        id: "email.invalid"
                    })), y.a.isEmpty(e.email) ? t.email = o.a.createElement(u.b, {
                        id: "required"
                    }) : y.a.isLength(e.email, {
                        min: 6,
                        max: 50
                    }) || (t.email = o.a.createElement(u.b, {
                        id: "email.minmaxvalid"
                    })), {
                        errors: t,
                        isValid: k()(t)
                    }
                };

            function L(e) {
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
                    var a, r = Object(R.a)(e);
                    if (t) {
                        var n = Object(R.a)(this).constructor;
                        a = Reflect.construct(r, arguments, n)
                    } else a = r.apply(this, arguments);
                    return Object(x.a)(this, a)
                }
            }
            var P = function(e) {
                    Object(M.a)(a, e);
                    var t = L(a);

                    function a(e) {
                        var n;
                        return Object(j.a)(this, a), (n = t.call(this, e)).onChangeView = function(e, t, a) {
                            n.props.onChangeView(e, t, a)
                        }, n.onChange = function(e) {
                            var t = e.target,
                                a = t.name,
                                i = "checkbox" === t.type ? t.checked : t.value;
                            n.setState({
                                errors: {}
                            }), n.setState(Object(r.a)({}, a, i)), e.preventDefault()
                        }, n.isValid = function() {
                            var e = _(n.state),
                                t = e.errors,
                                a = e.isValid;
                            return a || n.setState({
                                errors: t
                            }), a
                        }, n.onSubmit = function(e) {
                            e.preventDefault(), n.isValid() && n.state.isVerifyCaptcha ? (n.setState({
                                errors: {},
                                isVerifyCaptcha: !1
                            }), n.props.checkEmailToResetPass({
                                email: n.state.email
                            }, n.state.responseCaptcha), n.recaptchaInstance.reset()) : n.state.isVerifyCaptcha || n.setState({
                                verifyCaptchaMess: "Captcha is Required"
                            })
                        }, n.verifyCallback = function(e) {
                            n.setState({
                                responseCaptcha: e,
                                isVerifyCaptcha: !0
                            })
                        }, n.state = {
                            email: "",
                            isVerifyCaptcha: !1,
                            verifyCaptchaMess: "",
                            errors: {},
                            responseCaptcha: ""
                        }, n
                    }
                    return Object(S.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = t.email,
                                r = t.errors,
                                n = this.props.auth.isLoading,
                                i = this.props.intl;
                            return o.a.createElement("div", {
                                className: "content-main"
                            }, o.a.createElement("form", {
                                onSubmit: this.onSubmit
                            }, o.a.createElement(m.a, {
                                field: "email",
                                value: a,
                                placeholder: i.formatMessage({
                                    id: "passform.emailrecoverpass"
                                }),
                                error: r.email,
                                onChange: this.onChange
                            }), o.a.createElement("div", {
                                className: "recaptcha"
                            }, o.a.createElement(g.a, {
                                ref: function(t) {
                                    return e.recaptchaInstance = t
                                },
                                sitekey: C.a,
                                render: "explicit",
                                verifyCallback: this.verifyCallback,
                                onloadCallback: this.recaptchaLoaded,
                                hl: localStorage.lang || "vi"
                            })), !this.state.isVerifyCaptcha && this.state.verifyCaptchaMess ? o.a.createElement("span", {
                                className: "err-captcha"
                            }, this.state.verifyCaptchaMess) : "", o.a.createElement("button", {
                                type: "submit",
                                disabled: n
                            }, n ? o.a.createElement("i", {
                                className: "fa fa-spinner fa-spin"
                            }) : o.a.createElement(u.b, {
                                id: "xacthucemail"
                            }))), o.a.createElement("button", {
                                style: {
                                    backgroundColor: "gray"
                                },
                                onClick: function() {
                                    return e.onChangeView(!0, !1, !1)
                                }
                            }, o.a.createElement(u.b, {
                                id: "dangnhap"
                            })), o.a.createElement("p", {
                                className: "forgot_password"
                            }, o.a.createElement(c.b, {
                                to: "#",
                                onClick: function() {
                                    return e.onChangeView(!1, !1, !0)
                                }
                            }, o.a.createElement(u.b, {
                                id: "laylaimk"
                            }), "?")), this.props.auth.emailValid && o.a.createElement("span", null, i.formatMessage({
                                id: "notify.emailsendto"
                            }), " ", o.a.createElement("span", {
                                style: {
                                    color: "black"
                                }
                            }, a), ".", " ", i.formatMessage({
                                id: "notify.checkspamorinbox"
                            })))
                        }
                    }]), a
                }(s.Component),
                V = Object(l.b)(null, {
                    getClientCredentials: d.f,
                    checkEmailToResetPass: d.a
                })(Object(u.g)(P)),
                I = a(1312),
                N = a.n(I),
                q = a(12),
                F = a(7),
                T = a.n(F),
                A = function(e) {
                    var t = Object(l.c)();
                    return o.a.createElement(o.a.Fragment, null, ! function() {
                        var e = T()(navigator, "userAgent", "").toLowerCase();
                        return -1 !== e.indexOf("fb_iab") && -1 !== e.indexOf("android")
                    }() && o.a.createElement(N.a, {
                        appId: q.oauth.facebook_client_id,
                        callback: function(a) {
                            var r, n;
                            a.userID && (r = {
                                socialId: a.userID || a.id,
                                avatar: a.picture.data.url,
                                name: a.name,
                                accessToken: a.accessToken
                            }, n = e.history, t(Object(d.o)(r, n)))
                        },
                        fields: "name,email,picture",
                        disableMobileRedirect: !0,
                        isMobile: !0,
                        render: e.render
                    }))
                },
                D = a(41);
            a(1313), t.default = Object(l.b)(function(e) {
                return {
                    auth: e.auth
                }
            }, {
                loginByAccountRequest: d.n,
                setNotificationStatus: f.c
            })(Object(u.g)(function(e) {
                var t = e.intl,
                    a = e.auth,
                    l = e.history,
                    d = Object(s.useState)({
                        username: "",
                        password: ""
                    }),
                    f = Object(i.a)(d, 2),
                    b = f[0],
                    g = f[1],
                    v = Object(s.useState)({}),
                    y = Object(i.a)(v, 2),
                    E = y[0],
                    k = y[1],
                    w = Object(s.useState)({
                        isLogin: !0,
                        isRegister: !1,
                        isForgotPass: !1
                    }),
                    C = Object(i.a)(w, 2),
                    j = C[0],
                    S = C[1];
                Object(s.useEffect)(function() {
                    var t = e.setNotificationStatus;
                    localStorage.errorMessage && (t(!1, localStorage.errorMessage), localStorage.removeItem("errorMessage"))
                }, []), Object(s.useEffect)(function() {
                    h.d.handleChange(!0)
                }, []);
                var M = function(e) {
                        var t = e.target,
                            a = t.name,
                            i = "checkbox" === t.type ? t.checked : t.value;
                        k({}), "username" === a && (i = i.trim()), g(Object(n.a)({}, b, Object(r.a)({}, a, i))), e.preventDefault()
                    },
                    x = function(t) {
                        t.preventDefault(),
                        function() {
                            var e = Object(p.a)(b),
                                t = e.errors,
                                a = e.isValid;
                            return a || k(t), a
                        }() && !a.isLoading && (k({}), e.loginByAccountRequest({
                            username: b.username,
                            password: b.password
                        }, e.history))
                    },
                    R = function(e, t, a) {
                        S({
                            isLogin: e,
                            isRegister: t,
                            isForgotPass: a
                        })
                    };
                return o.a.createElement("div", {
                    className: "container"
                }, o.a.createElement("div", {
                    className: "row login-page"
                }, o.a.createElement("div", {
                    className: "col-md-7 hidden-sm hidden-xs image-login"
                }, o.a.createElement(D.a, {
                    src: "/favicons/banner_login.jpg",
                    alt: "PD"
                })), o.a.createElement("div", {
                    className: "col-md-5  col-xs-12 form-content"
                }, function() {
                    var r = a.isLoading;
                    return j.isRegister ? o.a.createElement(O, {
                        auth: a,
                        onChangeView: R,
                        historyUrl: l
                    }) : j.isForgotPass ? o.a.createElement(V, {
                        auth: a,
                        onChangeView: R
                    }) : o.a.createElement("div", {
                        className: "content-main"
                    }, o.a.createElement("form", {
                        onSubmit: x
                    }, o.a.createElement(m.a, {
                        field: "username",
                        value: b.username,
                        placeholder: t.formatMessage({
                            id: "passform.nickoremail"
                        }),
                        error: E.username,
                        onChange: M
                    }), o.a.createElement(m.a, {
                        field: "password",
                        value: b.password,
                        placeholder: t.formatMessage({
                            id: "passform.matkhau"
                        }),
                        error: E.password,
                        type: "password",
                        onChange: M
                    }), o.a.createElement("button", {
                        type: "submit",
                        disabled: r
                    }, r ? o.a.createElement("i", {
                        className: "fa fa-spinner fa-spin"
                    }) : o.a.createElement(u.b, {
                        id: "dangnhap"
                    }))), o.a.createElement("div", {
                        className: "content-middle"
                    }, o.a.createElement(A, {
                        history: e.history,
                        render: function(e) {
                            return o.a.createElement("i", {
                                className: "fab fa-facebook-square",
                                onClick: e.onClick
                            })
                        }
                    }), o.a.createElement("p", {
                        className: "forgot-password"
                    }, o.a.createElement(c.b, {
                        to: "#",
                        onClick: function() {
                            return R(!1, !1, !0)
                        }
                    }, o.a.createElement(u.b, {
                        id: "quenmk"
                    })))), o.a.createElement("button", {
                        style: {
                            backgroundColor: "gray"
                        },
                        onClick: function() {
                            return R(!1, !0, !1)
                        }
                    }, o.a.createElement(u.b, {
                        id: "taotk"
                    })))
                }())))
            }))
        },
        934: function(e, t, a) {
            "use strict";
            var r = a(0),
                n = a.n(r),
                i = a(53),
                s = a.n(i),
                o = a(94),
                c = a.n(o),
                l = a(6),
                u = a(3);
            t.a = function(e) {
                var t = {};
                return s.a.isLength(e.username, {
                    min: 4,
                    max: void 0
                }) || (t.username = n.a.createElement(l.b, {
                    id: "length4"
                })), e.username.indexOf("@") > -1 ? u.j.isEmail(e.username) || (t.username = n.a.createElement(l.b, {
                    id: "email.invalid"
                })) : s.a.isLength(e.username, {
                    min: 4,
                    max: 25
                }) || (t.username = n.a.createElement(l.b, {
                    id: "username.minmax"
                })), s.a.isEmpty(e.username) && (t.username = n.a.createElement(l.b, {
                    id: "required"
                })), s.a.isLength(e.password, {
                    min: 6,
                    max: 100
                }) || (t.password = n.a.createElement(l.b, {
                    id: "pass.minmaxvalid"
                })), s.a.isEmpty(e.password) && (t.password = n.a.createElement(l.b, {
                    id: "required"
                })), {
                    errors: t,
                    isValid: c()(t)
                }
            }
        }
    }
]);
