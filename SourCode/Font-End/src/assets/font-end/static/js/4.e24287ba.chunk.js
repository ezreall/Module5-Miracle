(window.webpackJsonp = window.webpackJsonp || []).push([
    [4], {
        1022: function(e, t, n) {
            e.exports = function(e, t, n) {
                "use strict";
                var a = "default" in e ? e.default : e;
                t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;
                var r = function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    },
                    o = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var a = t[n];
                                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                            }
                        }
                        return function(t, n, a) {
                            return n && e(t.prototype, n), a && e(t, a), t
                        }
                    }(),
                    i = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                    },
                    u = function(e) {
                        function t(e) {
                            r(this, t);
                            var a = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                            return e.debounce ? a.handleOnScroll = n(a.handleOnScroll.bind(a), e.debounce, {
                                trailing: !0
                            }) : a.handleOnScroll = a.handleOnScroll.bind(a), a
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
                        }(t, e), o(t, [{
                            key: "componentDidMount",
                            value: function() {
                                document.addEventListener("scroll", this.handleOnScroll)
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                document.removeEventListener("scroll", this.handleOnScroll)
                            }
                        }, {
                            key: "handleOnScroll",
                            value: function() {
                                var e = document.scrollingElement || document.documentElement;
                                e.scrollHeight - this.props.offset <= e.scrollTop + window.innerHeight && this.props.onBottom()
                            }
                        }, {
                            key: "render",
                            value: function() {
                                return this.props.children ? a.createElement("div", null, this.props.children) : null
                            }
                        }]), t
                    }(e.Component);
                return u.defaultProps = {
                    debounce: 200,
                    offset: 0,
                    children: null
                }, u.propTypes = {
                    onBottom: t.func.isRequired,
                    debounce: t.number,
                    offset: t.number,
                    children: t.element
                }, u
            }(n(0), n(1), n(1225))
        },
        1023: function(e, t, n) {
            "use strict";
            var a = n(841),
                r = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Player", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            }), Object.defineProperty(t, "Video", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            }), Object.defineProperty(t, "BigPlayButton", {
                enumerable: !0,
                get: function() {
                    return u.default
                }
            }), Object.defineProperty(t, "LoadingSpinner", {
                enumerable: !0,
                get: function() {
                    return l.default
                }
            }), Object.defineProperty(t, "PosterImage", {
                enumerable: !0,
                get: function() {
                    return s.default
                }
            }), Object.defineProperty(t, "Slider", {
                enumerable: !0,
                get: function() {
                    return d.default
                }
            }), Object.defineProperty(t, "Bezel", {
                enumerable: !0,
                get: function() {
                    return c.default
                }
            }), Object.defineProperty(t, "Shortcut", {
                enumerable: !0,
                get: function() {
                    return f.default
                }
            }), Object.defineProperty(t, "ControlBar", {
                enumerable: !0,
                get: function() {
                    return p.default
                }
            }), Object.defineProperty(t, "PlayToggle", {
                enumerable: !0,
                get: function() {
                    return h.default
                }
            }), Object.defineProperty(t, "ForwardControl", {
                enumerable: !0,
                get: function() {
                    return v.default
                }
            }), Object.defineProperty(t, "ReplayControl", {
                enumerable: !0,
                get: function() {
                    return m.default
                }
            }), Object.defineProperty(t, "FullscreenToggle", {
                enumerable: !0,
                get: function() {
                    return y.default
                }
            }), Object.defineProperty(t, "ProgressControl", {
                enumerable: !0,
                get: function() {
                    return g.default
                }
            }), Object.defineProperty(t, "SeekBar", {
                enumerable: !0,
                get: function() {
                    return b.default
                }
            }), Object.defineProperty(t, "PlayProgressBar", {
                enumerable: !0,
                get: function() {
                    return k.default
                }
            }), Object.defineProperty(t, "LoadProgressBar", {
                enumerable: !0,
                get: function() {
                    return C.default
                }
            }), Object.defineProperty(t, "MouseTimeDisplay", {
                enumerable: !0,
                get: function() {
                    return E.default
                }
            }), Object.defineProperty(t, "VolumeMenuButton", {
                enumerable: !0,
                get: function() {
                    return P.default
                }
            }), Object.defineProperty(t, "PlaybackRateMenuButton", {
                enumerable: !0,
                get: function() {
                    return T.default
                }
            }), Object.defineProperty(t, "PlaybackRate", {
                enumerable: !0,
                get: function() {
                    return w.default
                }
            }), Object.defineProperty(t, "ClosedCaptionButton", {
                enumerable: !0,
                get: function() {
                    return S.default
                }
            }), Object.defineProperty(t, "RemainingTimeDisplay", {
                enumerable: !0,
                get: function() {
                    return N.default
                }
            }), Object.defineProperty(t, "CurrentTimeDisplay", {
                enumerable: !0,
                get: function() {
                    return M.default
                }
            }), Object.defineProperty(t, "DurationDisplay", {
                enumerable: !0,
                get: function() {
                    return x.default
                }
            }), Object.defineProperty(t, "TimeDivider", {
                enumerable: !0,
                get: function() {
                    return O.default
                }
            }), Object.defineProperty(t, "MenuButton", {
                enumerable: !0,
                get: function() {
                    return j.default
                }
            }), Object.defineProperty(t, "playerReducer", {
                enumerable: !0,
                get: function() {
                    return I.playerReducer
                }
            }), Object.defineProperty(t, "operationReducer", {
                enumerable: !0,
                get: function() {
                    return I.operationReducer
                }
            }), t.videoActions = t.playerActions = void 0;
            var o = r(n(1226)),
                i = r(n(1030)),
                u = r(n(1027)),
                l = r(n(1028)),
                s = r(n(1029)),
                d = r(n(938)),
                c = r(n(1033)),
                f = r(n(1034)),
                p = r(n(1035)),
                h = r(n(1041)),
                v = r(n(1042)),
                m = r(n(1044)),
                y = r(n(1045)),
                g = r(n(1036)),
                b = r(n(1037)),
                k = r(n(1038)),
                C = r(n(1039)),
                E = r(n(1040)),
                P = r(n(1050)),
                T = r(n(939)),
                w = r(n(1241)),
                S = r(n(1242)),
                N = r(n(1046)),
                M = r(n(1047)),
                x = r(n(1048)),
                O = r(n(1049)),
                j = r(n(940)),
                A = a(n(902));
            t.playerActions = A;
            var R = a(n(937));
            t.videoActions = R;
            var I = n(1025)
        },
        1024: function(e, t) {
            function n(t) {
                return "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? e.exports = n = function(e) {
                    return typeof e
                } : e.exports = n = function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, n(t)
            }
            e.exports = n
        },
        1025: function(e, t, n) {
            "use strict";
            var a = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 ? arguments[1] : void 0;
                return {
                    player: (0, r.default)(e.player, t),
                    operation: (0, o.default)(e.operation, t)
                }
            }, t.operationReducer = t.playerReducer = void 0;
            var r = a(n(1228)),
                o = a(n(1229));
            var i = r.default;
            t.playerReducer = i;
            var u = o.default;
            t.operationReducer = u
        },
        1026: function(e, t, n) {
            "use strict";
            var a = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n(840)),
                o = a(n(269)),
                i = new(function() {
                    function e() {
                        (0, r.default)(this, e)
                    }
                    return (0, o.default)(e, [{
                        key: "request",
                        value: function(e) {
                            e.requestFullscreen ? e.requestFullscreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.msRequestFullscreen && e.msRequestFullscreen()
                        }
                    }, {
                        key: "exit",
                        value: function() {
                            document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()
                        }
                    }, {
                        key: "addEventListener",
                        value: function(e) {
                            document.addEventListener("fullscreenchange", e), document.addEventListener("webkitfullscreenchange", e), document.addEventListener("mozfullscreenchange", e), document.addEventListener("MSFullscreenChange", e)
                        }
                    }, {
                        key: "removeEventListener",
                        value: function(e) {
                            document.removeEventListener("fullscreenchange", e), document.removeEventListener("webkitfullscreenchange", e), document.removeEventListener("mozfullscreenchange", e), document.removeEventListener("MSFullscreenChange", e)
                        }
                    }, {
                        key: "isFullscreen",
                        get: function() {
                            return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement
                        }
                    }, {
                        key: "enabled",
                        get: function() {
                            return document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled
                        }
                    }]), e
                }());
            t.default = i
        },
        1027: function(e, t, n) {
            "use strict";
            var a = n(841),
                r = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n(840)),
                i = r(n(269)),
                u = r(n(842)),
                l = r(n(843)),
                s = r(n(31)),
                d = r(n(844)),
                c = r(n(1)),
                f = a(n(0)),
                p = r(n(16)),
                h = {
                    actions: c.default.object,
                    player: c.default.object,
                    position: c.default.string,
                    className: c.default.string
                },
                v = function(e) {
                    function t(e, n) {
                        var a;
                        return (0, o.default)(this, t), (a = (0, u.default)(this, (0, l.default)(t).call(this, e, n))).handleClick = a.handleClick.bind((0, s.default)(a)), a
                    }
                    return (0, d.default)(t, e), (0, i.default)(t, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "handleClick",
                        value: function() {
                            this.props.actions.play()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.player,
                                n = e.position;
                            return f.default.createElement("button", {
                                className: (0, p.default)("video-react-big-play-button", "video-react-big-play-button-".concat(n), this.props.className, {
                                    "big-play-button-hide": t.hasStarted || !t.currentSrc
                                }),
                                type: "button",
                                "aria-live": "polite",
                                tabIndex: "0",
                                onClick: this.handleClick
                            }, f.default.createElement("span", {
                                className: "video-react-control-text"
                            }, "Play Video"))
                        }
                    }]), t
                }(f.Component);
            t.default = v, v.propTypes = h, v.defaultProps = {
                position: "left"
            }, v.displayName = "BigPlayButton"
        },
        1028: function(e, t, n) {
            "use strict";
            var a = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = l;
            var r = a(n(1)),
                o = a(n(0)),
                i = a(n(16)),
                u = {
                    player: r.default.object,
                    className: r.default.string
                };

            function l(e) {
                var t = e.player,
                    n = e.className;
                return t.error ? null : o.default.createElement("div", {
                    className: (0, i.default)("video-react-loading-spinner", n)
                })
            }
            l.propTypes = u, l.displayName = "LoadingSpinner"
        },
        1029: function(e, t, n) {
            "use strict";
            var a = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n(1)),
                o = a(n(0)),
                i = a(n(16)),
                u = {
                    poster: r.default.string,
                    player: r.default.object,
                    actions: r.default.object,
                    className: r.default.string
                };

            function l(e) {
                var t = e.poster,
                    n = e.player,
                    a = e.actions,
                    r = e.className;
                return !t || n.hasStarted ? null : o.default.createElement("div", {
                    className: (0, i.default)("video-react-poster", r),
                    style: {
                        backgroundImage: 'url("'.concat(t, '")')
                    },
                    onClick: function() {
                        n.paused && a.play()
                    }
                })
            }
            l.propTypes = u, l.displayName = "PosterImage";
            var s = l;
            t.default = s
        },
        1030: function(e, t, n) {
            "use strict";
            var a = n(841),
                r = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n(869)),
                i = r(n(840)),
                u = r(n(269)),
                l = r(n(842)),
                s = r(n(843)),
                d = r(n(31)),
                c = r(n(844)),
                f = r(n(1)),
                p = a(n(0)),
                h = r(n(16)),
                v = n(862),
                m = {
                    actions: f.default.object,
                    player: f.default.object,
                    children: f.default.any,
                    startTime: f.default.number,
                    loop: f.default.bool,
                    muted: f.default.bool,
                    autoPlay: f.default.bool,
                    playsInline: f.default.bool,
                    src: f.default.string,
                    poster: f.default.string,
                    className: f.default.string,
                    preload: f.default.oneOf(["auto", "metadata", "none"]),
                    crossOrigin: f.default.string,
                    onLoadStart: f.default.func,
                    onWaiting: f.default.func,
                    onCanPlay: f.default.func,
                    onCanPlayThrough: f.default.func,
                    onPlaying: f.default.func,
                    onEnded: f.default.func,
                    onSeeking: f.default.func,
                    onSeeked: f.default.func,
                    onPlay: f.default.func,
                    onPause: f.default.func,
                    onProgress: f.default.func,
                    onDurationChange: f.default.func,
                    onError: f.default.func,
                    onSuspend: f.default.func,
                    onAbort: f.default.func,
                    onEmptied: f.default.func,
                    onStalled: f.default.func,
                    onLoadedMetadata: f.default.func,
                    onLoadedData: f.default.func,
                    onTimeUpdate: f.default.func,
                    onRateChange: f.default.func,
                    onVolumeChange: f.default.func,
                    onResize: f.default.func
                },
                y = function(e) {
                    function t(e) {
                        var n;
                        return (0, i.default)(this, t), (n = (0, l.default)(this, (0, s.default)(t).call(this, e))).video = null, n.play = n.play.bind((0, d.default)(n)), n.pause = n.pause.bind((0, d.default)(n)), n.seek = n.seek.bind((0, d.default)(n)), n.forward = n.forward.bind((0, d.default)(n)), n.replay = n.replay.bind((0, d.default)(n)), n.toggleFullscreen = n.toggleFullscreen.bind((0, d.default)(n)), n.getProperties = n.getProperties.bind((0, d.default)(n)), n.renderChildren = n.renderChildren.bind((0, d.default)(n)), n.handleLoadStart = n.handleLoadStart.bind((0, d.default)(n)), n.handleCanPlay = n.handleCanPlay.bind((0, d.default)(n)), n.handleCanPlayThrough = n.handleCanPlayThrough.bind((0, d.default)(n)), n.handlePlay = n.handlePlay.bind((0, d.default)(n)), n.handlePlaying = n.handlePlaying.bind((0, d.default)(n)), n.handlePause = n.handlePause.bind((0, d.default)(n)), n.handleEnded = n.handleEnded.bind((0, d.default)(n)), n.handleWaiting = n.handleWaiting.bind((0, d.default)(n)), n.handleSeeking = n.handleSeeking.bind((0, d.default)(n)), n.handleSeeked = n.handleSeeked.bind((0, d.default)(n)), n.handleFullscreenChange = n.handleFullscreenChange.bind((0, d.default)(n)), n.handleError = n.handleError.bind((0, d.default)(n)), n.handleSuspend = n.handleSuspend.bind((0, d.default)(n)), n.handleAbort = n.handleAbort.bind((0, d.default)(n)), n.handleEmptied = n.handleEmptied.bind((0, d.default)(n)), n.handleStalled = n.handleStalled.bind((0, d.default)(n)), n.handleLoadedMetaData = n.handleLoadedMetaData.bind((0, d.default)(n)), n.handleLoadedData = n.handleLoadedData.bind((0, d.default)(n)), n.handleTimeUpdate = n.handleTimeUpdate.bind((0, d.default)(n)), n.handleRateChange = n.handleRateChange.bind((0, d.default)(n)), n.handleVolumeChange = n.handleVolumeChange.bind((0, d.default)(n)), n.handleDurationChange = n.handleDurationChange.bind((0, d.default)(n)), n.handleProgress = (0, v.throttle)(n.handleProgress.bind((0, d.default)(n)), 250), n.handleKeypress = n.handleKeypress.bind((0, d.default)(n)), n.handleTextTrackChange = n.handleTextTrackChange.bind((0, d.default)(n)), n
                    }
                    return (0, c.default)(t, e), (0, u.default)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.forceUpdate(), this.video && this.video.textTracks && (this.video.textTracks.onaddtrack = this.handleTextTrackChange, this.video.textTracks.onremovetrack = this.handleTextTrackChange)
                        }
                    }, {
                        key: "getProperties",
                        value: function() {
                            var e = this;
                            return this.video ? v.mediaProperties.reduce(function(t, n) {
                                return t[n] = e.video[n], t
                            }, {}) : null
                        }
                    }, {
                        key: "handleTextTrackChange",
                        value: function() {
                            var e = this.props,
                                t = e.actions,
                                n = e.player;
                            if (this.video && this.video.textTracks) {
                                var a = Array.from(this.video.textTracks).find(function(e) {
                                    return "showing" === e.mode
                                });
                                a !== n.activeTextTrack && t.activateTextTrack(a)
                            }
                        }
                    }, {
                        key: "play",
                        value: function() {
                            var e = this.video.play();
                            void 0 !== e && e.catch(function() {}).then(function() {})
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            var e = this.video.pause();
                            void 0 !== e && e.catch(function() {}).then(function() {})
                        }
                    }, {
                        key: "load",
                        value: function() {
                            this.video.load()
                        }
                    }, {
                        key: "addTextTrack",
                        value: function() {
                            var e;
                            (e = this.video).addTextTrack.apply(e, arguments)
                        }
                    }, {
                        key: "canPlayType",
                        value: function() {
                            var e;
                            (e = this.video).canPlayType.apply(e, arguments)
                        }
                    }, {
                        key: "togglePlay",
                        value: function() {
                            this.video.paused ? this.play() : this.pause()
                        }
                    }, {
                        key: "seek",
                        value: function(e) {
                            try {
                                this.video.currentTime = e
                            } catch (t) {}
                        }
                    }, {
                        key: "forward",
                        value: function(e) {
                            this.seek(this.video.currentTime + e)
                        }
                    }, {
                        key: "replay",
                        value: function(e) {
                            this.forward(-e)
                        }
                    }, {
                        key: "toggleFullscreen",
                        value: function() {
                            var e = this.props,
                                t = e.player;
                            e.actions.toggleFullscreen(t)
                        }
                    }, {
                        key: "handleLoadStart",
                        value: function() {
                            var e = this.props,
                                t = e.actions,
                                n = e.onLoadStart;
                            t.handleLoadStart(this.getProperties()), n && n.apply(void 0, arguments)
                        }
                    }, {
                        key: "handleCanPlay",
                        value: function() {
                            var e = this.props,
                                t = e.actions,
                                n = e.onCanPlay;
                            t.handleCanPlay(this.getProperties()), n && n.apply(void 0, arguments)
                        }
                    }, {
                        key: "handleCanPlayThrough",
                        value: function() {
                            var e = this.props,
                                t = e.actions,
                                n = e.onCanPlayThrough;
                            t.handleCanPlayThrough(this.getProperties()), n && n.apply(void 0, arguments)
                        }
                    }, {
                        key: "handlePlaying",
                        value: function() {
                            var e = this.props,
                                t = e.actions,
                                n = e.onPlaying;
                            t.handlePlaying(this.getProperties()), n && n.apply(void 0, arguments)
                        }
                    }, {
                        key: "handlePlay",
                        value: function() {
                            var e = this.props,
                                t = e.actions,
                                n = e.onPlay;
                            t.handlePlay(this.getProperties()), n && n.apply(void 0, arguments)
                        }
                    }, {
                        key: "handlePause",
                        value: function() {
                            var e = this.props,
                                t = e.actions,
                                n = e.onPause;
                            t.handlePause(this.getProperties()), n && n.apply(void 0, arguments)
                        }
                    }, {
                        key: "handleDurationChange",
                        value: function() {
                            var e = this.props,
                                t = e.actions,
                                n = e.onDurationChange;
                            t.handleDurationChange(this.getProperties()), n && n.apply(void 0, arguments)
                        }
                    }, {
                        key: "handleProgress",
                        value: function() {
                            var e = this.props,
                                t = e.actions,
                                n = e.onProgress;
                            this.video && t.handleProgressChange(this.getProperties()), n && n.apply(void 0, arguments)
                        }
                    }, {
                        key: "handleEnded",
                        value: function() {
                            var e = this.props,
                                t = e.loop,
                                n = e.player,
                                a = e.actions,
                                r = e.onEnded;
                            t ? (this.seek(0), this.play()) : n.paused || this.pause(), a.handleEnd(this.getProperties()), r && r.apply(void 0, arguments)
                        }
                    }, {
                        key: "handleWaiting",
                        value: function() {
                            var e = this.props,
                                t = e.actions,
                                n = e.onWaiting;
                            t.handleWaiting(this.getProperties()), n && n.apply(void 0, arguments)
                        }
                    }, {
                        key: "handleSeeking",
                        value: function() {
                            var e = this.props,
                                t = e.actions,
                                n = e.onSeeking;
                            t.handleSeeking(this.getProperties()), n && n.apply(void 0, arguments)
                        }
                    }, {
                        key: "handleSeeked",
                        value: function() {
                            var e = this.props,
                                t = e.actions,
                                n = e.onSeeked;
                            t.handleSeeked(this.getProperties()), n && n.apply(void 0, arguments)
                        }
                    }, {
                        key: "handleFullscreenChange",
                        value: function() {}
                    }, {
                        key: "handleSuspend",
                        value: function() {
                            var e = this.props,
                                t = e.actions,
                                n = e.onSuspend;
                            t.handleSuspend(this.getProperties()), n && n.apply(void 0, arguments)
                        }
                    }, {
                        key: "handleAbort",
                        value: function() {
                            var e = this.props,
                                t = e.actions,
                                n = e.onAbort;
                            t.handleAbort(this.getProperties()), n && n.apply(void 0, arguments)
                        }
                    }, {
                        key: "handleEmptied",
                        value: function() {
                            var e = this.props,
                                t = e.actions,
                                n = e.onEmptied;
                            t.handleEmptied(this.getProperties()), n && n.apply(void 0, arguments)
                        }
                    }, {
                        key: "handleStalled",
                        value: function() {
                            var e = this.props,
                                t = e.actions,
                                n = e.onStalled;
                            t.handleStalled(this.getProperties()), n && n.apply(void 0, arguments)
                        }
                    }, {
                        key: "handleLoadedMetaData",
                        value: function() {
                            var e = this.props,
                                t = e.actions,
                                n = e.onLoadedMetadata,
                                a = e.startTime;
                            a && a > 0 && (this.video.currentTime = a), t.handleLoadedMetaData(this.getProperties()), n && n.apply(void 0, arguments)
                        }
                    }, {
                        key: "handleLoadedData",
                        value: function() {
                            var e = this.props,
                                t = e.actions,
                                n = e.onLoadedData;
                            t.handleLoadedData(this.getProperties()), n && n.apply(void 0, arguments)
                        }
                    }, {
                        key: "handleTimeUpdate",
                        value: function() {
                            var e = this.props,
                                t = e.actions,
                                n = e.onTimeUpdate;
                            t.handleTimeUpdate(this.getProperties()), n && n.apply(void 0, arguments)
                        }
                    }, {
                        key: "handleRateChange",
                        value: function() {
                            var e = this.props,
                                t = e.actions,
                                n = e.onRateChange;
                            t.handleRateChange(this.getProperties()), n && n.apply(void 0, arguments)
                        }
                    }, {
                        key: "handleVolumeChange",
                        value: function() {
                            var e = this.props,
                                t = e.actions,
                                n = e.onVolumeChange;
                            t.handleVolumeChange(this.getProperties()), n && n.apply(void 0, arguments)
                        }
                    }, {
                        key: "handleError",
                        value: function() {
                            var e = this.props,
                                t = e.actions,
                                n = e.onError;
                            t.handleError(this.getProperties()), n && n.apply(void 0, arguments)
                        }
                    }, {
                        key: "handleResize",
                        value: function() {
                            var e = this.props,
                                t = e.actions,
                                n = e.onResize;
                            t.handleResize(this.getProperties()), n && n.apply(void 0, arguments)
                        }
                    }, {
                        key: "handleKeypress",
                        value: function() {}
                    }, {
                        key: "renderChildren",
                        value: function() {
                            var e = this,
                                t = (0, o.default)({}, this.props, {
                                    video: this.video
                                });
                            return this.video ? p.default.Children.toArray(this.props.children).filter(v.isVideoChild).map(function(n) {
                                var a;
                                if ("string" === typeof n.type) {
                                    if ("source" === n.type) {
                                        var r = (a = (0, o.default)({}, n.props)).onError;
                                        a.onError = function() {
                                            r && r.apply(void 0, arguments), e.handleError.apply(e, arguments)
                                        }
                                    }
                                } else a = t;
                                return p.default.cloneElement(n, a)
                            }) : null
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.loop,
                                a = t.poster,
                                r = t.preload,
                                o = t.src,
                                i = t.autoPlay,
                                u = t.playsInline,
                                l = t.muted,
                                s = t.crossOrigin,
                                d = t.videoId;
                            return p.default.createElement("video", {
                                className: (0, h.default)("video-react-video", this.props.className),
                                id: d,
                                crossOrigin: s,
                                ref: function(t) {
                                    e.video = t
                                },
                                muted: l,
                                preload: r,
                                loop: n,
                                playsInline: u,
                                autoPlay: i,
                                poster: a,
                                src: o,
                                onLoadStart: this.handleLoadStart,
                                onWaiting: this.handleWaiting,
                                onCanPlay: this.handleCanPlay,
                                onCanPlayThrough: this.handleCanPlayThrough,
                                onPlaying: this.handlePlaying,
                                onEnded: this.handleEnded,
                                onSeeking: this.handleSeeking,
                                onSeeked: this.handleSeeked,
                                onPlay: this.handlePlay,
                                onPause: this.handlePause,
                                onProgress: this.handleProgress,
                                onDurationChange: this.handleDurationChange,
                                onError: this.handleError,
                                onSuspend: this.handleSuspend,
                                onAbort: this.handleAbort,
                                onEmptied: this.handleEmptied,
                                onStalled: this.handleStalled,
                                onLoadedMetadata: this.handleLoadedMetaData,
                                onLoadedData: this.handleLoadedData,
                                onTimeUpdate: this.handleTimeUpdate,
                                onRateChange: this.handleRateChange,
                                onVolumeChange: this.handleVolumeChange,
                                tabIndex: "-1"
                            }, this.renderChildren())
                        }
                    }, {
                        key: "playbackRate",
                        get: function() {
                            return this.video.playbackRate
                        },
                        set: function(e) {
                            this.video.playbackRate = e
                        }
                    }, {
                        key: "muted",
                        get: function() {
                            return this.video.muted
                        },
                        set: function(e) {
                            this.video.muted = e
                        }
                    }, {
                        key: "volume",
                        get: function() {
                            return this.video.volume
                        },
                        set: function(e) {
                            e > 1 && (e = 1), e < 0 && (e = 0), this.video.volume = e
                        }
                    }, {
                        key: "videoWidth",
                        get: function() {
                            return this.video.videoWidth
                        }
                    }, {
                        key: "videoHeight",
                        get: function() {
                            return this.video.videoHeight
                        }
                    }]), t
                }(p.Component);
            t.default = y, y.propTypes = m, y.displayName = "Video"
        },
        1031: function(e, t, n) {
            var a = n(1230),
                r = n(1231),
                o = n(1232),
                i = n(1233);
            e.exports = function(e) {
                return a(e) || r(e) || o(e) || i()
            }
        },
        1032: function(e, t) {
            e.exports = function(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                return a
            }
        },
        1033: function(e, t, n) {
            "use strict";
            var a = n(841),
                r = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n(840)),
                i = r(n(269)),
                u = r(n(842)),
                l = r(n(843)),
                s = r(n(31)),
                d = r(n(844)),
                c = r(n(1)),
                f = a(n(0)),
                p = r(n(16)),
                h = {
                    manager: c.default.object,
                    className: c.default.string
                },
                v = function(e) {
                    function t(e, n) {
                        var a;
                        return (0, o.default)(this, t), (a = (0, u.default)(this, (0, l.default)(t).call(this, e, n))).timer = null, e.manager.subscribeToOperationStateChange(a.handleStateChange.bind((0, s.default)(a))), a.state = {
                            hidden: !0,
                            operation: {}
                        }, a
                    }
                    return (0, d.default)(t, e), (0, i.default)(t, [{
                        key: "handleStateChange",
                        value: function(e, t) {
                            var n = this;
                            e.count !== t.count && "shortcut" === e.operation.source && (this.timer && (clearTimeout(this.timer), this.timer = null), this.setState({
                                hidden: !1,
                                count: e.count,
                                operation: e.operation
                            }), this.timer = setTimeout(function() {
                                n.setState({
                                    hidden: !0
                                }), n.timer = null
                            }, 500))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            if ("shortcut" !== this.state.operation.source) return null;
                            var e = this.state.hidden ? {
                                display: "none"
                            } : null;
                            return f.default.createElement("div", {
                                className: (0, p.default)({
                                    "video-react-bezel": !0,
                                    "video-react-bezel-animation": this.state.count % 2 === 0,
                                    "video-react-bezel-animation-alt": this.state.count % 2 === 1
                                }, this.props.className),
                                style: e,
                                role: "status",
                                "aria-label": this.state.operation.action
                            }, f.default.createElement("div", {
                                className: (0, p.default)("video-react-bezel-icon", "video-react-bezel-icon-".concat(this.state.operation.action))
                            }))
                        }
                    }]), t
                }(f.Component);
            t.default = v, v.propTypes = h, v.displayName = "Bezel"
        },
        1034: function(e, t, n) {
            "use strict";
            var a = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n(47)),
                o = a(n(1031)),
                i = a(n(840)),
                u = a(n(269)),
                l = a(n(842)),
                s = a(n(843)),
                d = a(n(31)),
                c = a(n(844)),
                f = n(0),
                p = a(n(1)),
                h = n(903),
                v = {
                    clickable: p.default.bool,
                    dblclickable: p.default.bool,
                    manager: p.default.object,
                    actions: p.default.object,
                    player: p.default.object,
                    shortcuts: p.default.array
                },
                m = function(e) {
                    function t(e, n) {
                        var a;
                        return (0, i.default)(this, t), (a = (0, l.default)(this, (0, s.default)(t).call(this, e, n))).defaultShortcuts = [{
                            keyCode: 32,
                            handle: a.togglePlay
                        }, {
                            keyCode: 75,
                            handle: a.togglePlay
                        }, {
                            keyCode: 70,
                            handle: a.toggleFullscreen
                        }, {
                            keyCode: 37,
                            handle: function(e, t) {
                                e.hasStarted && t.replay(5, {
                                    action: "replay-5",
                                    source: "shortcut"
                                })
                            }
                        }, {
                            keyCode: 74,
                            handle: function(e, t) {
                                e.hasStarted && t.replay(10, {
                                    action: "replay-10",
                                    source: "shortcut"
                                })
                            }
                        }, {
                            keyCode: 39,
                            handle: function(e, t) {
                                e.hasStarted && t.forward(5, {
                                    action: "forward-5",
                                    source: "shortcut"
                                })
                            }
                        }, {
                            keyCode: 76,
                            handle: function(e, t) {
                                e.hasStarted && t.forward(10, {
                                    action: "forward-10",
                                    source: "shortcut"
                                })
                            }
                        }, {
                            keyCode: 36,
                            handle: function(e, t) {
                                e.hasStarted && t.seek(0)
                            }
                        }, {
                            keyCode: 35,
                            handle: function(e, t) {
                                e.hasStarted && t.seek(e.duration)
                            }
                        }, {
                            keyCode: 38,
                            handle: function(e, t) {
                                var n = e.volume + .05;
                                n > 1 && (n = 1), t.changeVolume(n, {
                                    action: "volume-up",
                                    source: "shortcut"
                                })
                            }
                        }, {
                            keyCode: 40,
                            handle: function(e, t) {
                                var n = e.volume - .05;
                                n < 0 && (n = 0);
                                var a = n > 0 ? "volume-down" : "volume-off";
                                t.changeVolume(n, {
                                    action: a,
                                    source: "shortcut"
                                })
                            }
                        }, {
                            keyCode: 190,
                            shift: !0,
                            handle: function(e, t) {
                                var n = e.playbackRate;
                                n >= 1.5 ? n = 2 : n >= 1.25 ? n = 1.5 : n >= 1 ? n = 1.25 : n >= .5 ? n = 1 : n >= .25 ? n = .5 : n >= 0 && (n = .25), t.changeRate(n, {
                                    action: "fast-forward",
                                    source: "shortcut"
                                })
                            }
                        }, {
                            keyCode: 188,
                            shift: !0,
                            handle: function(e, t) {
                                var n = e.playbackRate;
                                n <= .5 ? n = .25 : n <= 1 ? n = .5 : n <= 1.25 ? n = 1 : n <= 1.5 ? n = 1.25 : n <= 2 && (n = 1.5), t.changeRate(n, {
                                    action: "fast-rewind",
                                    source: "shortcut"
                                })
                            }
                        }], a.shortcuts = (0, o.default)(a.defaultShortcuts), a.mergeShortcuts = a.mergeShortcuts.bind((0, d.default)(a)), a.handleKeyPress = a.handleKeyPress.bind((0, d.default)(a)), a.handleClick = a.handleClick.bind((0, d.default)(a)), a.handleDoubleClick = a.handleDoubleClick.bind((0, d.default)(a)), a
                    }
                    return (0, c.default)(t, e), (0, u.default)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.mergeShortcuts(), document.addEventListener("keydown", this.handleKeyPress), document.addEventListener("click", this.handleClick), document.addEventListener("dblclick", this.handleDoubleClick)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            e.shortcuts !== this.props.shortcuts && this.mergeShortcuts()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            document.removeEventListener("keydown", this.handleKeyPress), document.removeEventListener("click", this.handleClick), document.removeEventListener("dblclick", this.handleDoubleClick)
                        }
                    }, {
                        key: "mergeShortcuts",
                        value: function() {
                            var e = function(e) {
                                    var t = e.keyCode,
                                        n = void 0 === t ? 0 : t,
                                        a = e.ctrl,
                                        r = void 0 !== a && a,
                                        o = e.shift,
                                        i = void 0 !== o && o,
                                        u = e.alt,
                                        l = void 0 !== u && u;
                                    return "".concat(n, ":").concat(r, ":").concat(i, ":").concat(l)
                                },
                                t = this.defaultShortcuts.reduce(function(t, n) {
                                    return Object.assign(t, (0, r.default)({}, e(n), n))
                                }, {}),
                                n = (this.props.shortcuts || []).reduce(function(t, n) {
                                    var a = n.keyCode,
                                        o = n.handle;
                                    return a && "function" === typeof o ? Object.assign(t, (0, r.default)({}, e(n), n)) : t
                                }, t),
                                a = function(e) {
                                    var t = 0;
                                    return ["ctrl", "shift", "alt"].forEach(function(n) {
                                        e[n] && t++
                                    }), t
                                };
                            this.shortcuts = Object.keys(n).map(function(e) {
                                return n[e]
                            }).sort(function(e, t) {
                                return a(t) - a(e)
                            })
                        }
                    }, {
                        key: "togglePlay",
                        value: function(e, t) {
                            e.paused ? t.play({
                                action: "play",
                                source: "shortcut"
                            }) : t.pause({
                                action: "pause",
                                source: "shortcut"
                            })
                        }
                    }, {
                        key: "toggleFullscreen",
                        value: function(e, t) {
                            t.toggleFullscreen(e)
                        }
                    }, {
                        key: "handleKeyPress",
                        value: function(e) {
                            var t = this.props,
                                n = t.player,
                                a = t.actions;
                            if (n.isActive && (!document.activeElement || !((0, h.hasClass)(document.activeElement, "video-react-control") || (0, h.hasClass)(document.activeElement, "video-react-menu-button-active") || (0, h.hasClass)(document.activeElement, "video-react-big-play-button")))) {
                                var r = e.keyCode || e.which,
                                    o = e.ctrlKey || e.metaKey,
                                    i = e.shiftKey,
                                    u = e.altKey,
                                    l = this.shortcuts.filter(function(e) {
                                        return !(!e.keyCode || e.keyCode - r !== 0) && !(void 0 !== e.ctrl && e.ctrl !== o || void 0 !== e.shift && e.shift !== i || void 0 !== e.alt && e.alt !== u)
                                    })[0];
                                l && (l.handle(n, a), e.preventDefault())
                            }
                        }
                    }, {
                        key: "canBeClicked",
                        value: function(e, t) {
                            return !(!e.isActive || "VIDEO" !== t.target.nodeName || 4 !== e.readyState)
                        }
                    }, {
                        key: "handleClick",
                        value: function(e) {
                            var t = this.props,
                                n = t.player,
                                a = t.actions,
                                r = t.clickable;
                            this.canBeClicked(n, e) && r && this.togglePlay(n, a)
                        }
                    }, {
                        key: "handleDoubleClick",
                        value: function(e) {
                            var t = this.props,
                                n = t.player,
                                a = t.actions,
                                r = t.dblclickable;
                            this.canBeClicked(n, e) && r && this.toggleFullscreen(n, a)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return null
                        }
                    }]), t
                }(f.Component);
            t.default = m, m.propTypes = v, m.defaultProps = {
                clickable: !0,
                dblclickable: !0
            }, m.displayName = "Shortcut"
        },
        1035: function(e, t, n) {
            "use strict";
            var a = n(841),
                r = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n(936)),
                i = r(n(840)),
                u = r(n(269)),
                l = r(n(842)),
                s = r(n(843)),
                d = r(n(31)),
                c = r(n(844)),
                f = r(n(1)),
                p = a(n(0)),
                h = r(n(16)),
                v = r(n(1036)),
                m = r(n(1041)),
                y = r(n(1042)),
                g = r(n(1044)),
                b = r(n(1045)),
                k = r(n(1046)),
                C = r(n(1047)),
                E = r(n(1048)),
                P = r(n(1049)),
                T = r(n(1050)),
                w = r(n(939)),
                S = n(862),
                N = {
                    children: f.default.any,
                    autoHide: f.default.bool,
                    autoHideTime: f.default.number,
                    disableDefaultControls: f.default.bool,
                    disableCompletely: f.default.bool,
                    className: f.default.string
                },
                M = function(e) {
                    function t(e) {
                        var n;
                        return (0, i.default)(this, t), (n = (0, l.default)(this, (0, s.default)(t).call(this, e))).getDefaultChildren = n.getDefaultChildren.bind((0, d.default)(n)), n.getFullChildren = n.getFullChildren.bind((0, d.default)(n)), n
                    }
                    return (0, c.default)(t, e), (0, u.default)(t, [{
                        key: "getDefaultChildren",
                        value: function() {
                            return [p.default.createElement(m.default, {
                                key: "play-toggle",
                                order: 1
                            }), p.default.createElement(T.default, {
                                key: "volume-menu-button",
                                order: 4
                            }), p.default.createElement(C.default, {
                                key: "current-time-display",
                                order: 5.1
                            }), p.default.createElement(P.default, {
                                key: "time-divider",
                                order: 5.2
                            }), p.default.createElement(E.default, {
                                key: "duration-display",
                                order: 5.3
                            }), p.default.createElement(v.default, {
                                key: "progress-control",
                                order: 6
                            }), p.default.createElement(b.default, {
                                key: "fullscreen-toggle",
                                order: 8
                            })]
                        }
                    }, {
                        key: "getFullChildren",
                        value: function() {
                            return [p.default.createElement(m.default, {
                                key: "play-toggle",
                                order: 1
                            }), p.default.createElement(g.default, {
                                key: "replay-control",
                                order: 2
                            }), p.default.createElement(y.default, {
                                key: "forward-control",
                                order: 3
                            }), p.default.createElement(T.default, {
                                key: "volume-menu-button",
                                order: 4
                            }), p.default.createElement(C.default, {
                                key: "current-time-display",
                                order: 5
                            }), p.default.createElement(P.default, {
                                key: "time-divider",
                                order: 6
                            }), p.default.createElement(E.default, {
                                key: "duration-display",
                                order: 7
                            }), p.default.createElement(v.default, {
                                key: "progress-control",
                                order: 8
                            }), p.default.createElement(k.default, {
                                key: "remaining-time-display",
                                order: 9
                            }), p.default.createElement(w.default, {
                                rates: [1, 1.25, 1.5, 2],
                                key: "playback-rate",
                                order: 10
                            }), p.default.createElement(b.default, {
                                key: "fullscreen-toggle",
                                order: 11
                            })]
                        }
                    }, {
                        key: "getChildren",
                        value: function() {
                            var e = p.default.Children.toArray(this.props.children),
                                t = this.props.disableDefaultControls ? [] : this.getDefaultChildren(),
                                n = this.props,
                                a = (n.className, (0, o.default)(n, ["className"]));
                            return (0, S.mergeAndSortChildren)(t, e, a)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.autoHide,
                                n = e.className,
                                a = e.disableCompletely,
                                r = this.getChildren();
                            return a ? null : p.default.createElement("div", {
                                className: (0, h.default)("video-react-control-bar", {
                                    "video-react-control-bar-auto-hide": t
                                }, n)
                            }, r)
                        }
                    }]), t
                }(p.Component);
            t.default = M, M.propTypes = N, M.defaultProps = {
                autoHide: !0,
                disableCompletely: !1
            }, M.displayName = "ControlBar"
        },
        1036: function(e, t, n) {
            "use strict";
            var a = n(841),
                r = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n(37)),
                i = r(n(840)),
                u = r(n(269)),
                l = r(n(842)),
                s = r(n(843)),
                d = r(n(31)),
                c = r(n(844)),
                f = r(n(1)),
                p = a(n(0)),
                h = r(n(16)),
                v = a(n(903)),
                m = r(n(1037)),
                y = {
                    player: f.default.object,
                    className: f.default.string
                },
                g = function(e) {
                    function t(e, n) {
                        var a;
                        return (0, i.default)(this, t), (a = (0, l.default)(this, (0, s.default)(t).call(this, e, n))).state = {
                            mouseTime: {
                                time: null,
                                position: 0
                            }
                        }, a.handleMouseMoveThrottle = a.handleMouseMove.bind((0, d.default)(a)), a
                    }
                    return (0, c.default)(t, e), (0, u.default)(t, [{
                        key: "handleMouseMove",
                        value: function(e) {
                            if (e.pageX) {
                                var t = this.props.player.duration,
                                    n = this.seekBar,
                                    a = v.getPointerPosition(n, e).x * t,
                                    r = e.pageX - v.findElPosition(n).left;
                                this.setState({
                                    mouseTime: {
                                        time: a,
                                        position: r
                                    }
                                })
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.className;
                            return p.default.createElement("div", {
                                onMouseMove: this.handleMouseMoveThrottle,
                                className: (0, h.default)("video-react-progress-control video-react-control", t)
                            }, p.default.createElement(m.default, (0, o.default)({
                                mouseTime: this.state.mouseTime,
                                ref: function(t) {
                                    e.seekBar = t
                                }
                            }, this.props)))
                        }
                    }]), t
                }(p.Component);
            t.default = g, g.propTypes = y, g.displayName = "ProgressControl"
        },
        1037: function(e, t, n) {
            "use strict";
            var a = n(841),
                r = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n(840)),
                i = r(n(269)),
                u = r(n(842)),
                l = r(n(843)),
                s = r(n(31)),
                d = r(n(844)),
                c = r(n(1)),
                f = a(n(0)),
                p = r(n(16)),
                h = r(n(938)),
                v = r(n(1038)),
                m = r(n(1039)),
                y = r(n(1040)),
                g = n(862),
                b = {
                    player: c.default.object,
                    mouseTime: c.default.object,
                    actions: c.default.object,
                    className: c.default.string
                },
                k = function(e) {
                    function t(e, n) {
                        var a;
                        return (0, o.default)(this, t), (a = (0, u.default)(this, (0, l.default)(t).call(this, e, n))).getPercent = a.getPercent.bind((0, s.default)(a)), a.getNewTime = a.getNewTime.bind((0, s.default)(a)), a.stepForward = a.stepForward.bind((0, s.default)(a)), a.stepBack = a.stepBack.bind((0, s.default)(a)), a.handleMouseDown = a.handleMouseDown.bind((0, s.default)(a)), a.handleMouseMove = a.handleMouseMove.bind((0, s.default)(a)), a.handleMouseUp = a.handleMouseUp.bind((0, s.default)(a)), a
                    }
                    return (0, d.default)(t, e), (0, i.default)(t, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "componentDidUpdate",
                        value: function() {}
                    }, {
                        key: "getPercent",
                        value: function() {
                            var e = this.props.player,
                                t = e.currentTime,
                                n = (e.seekingTime || t) / e.duration;
                            return n >= 1 ? 1 : n
                        }
                    }, {
                        key: "getNewTime",
                        value: function(e) {
                            var t = this.props.player.duration,
                                n = this.slider.calculateDistance(e) * t;
                            return n === t ? n - .1 : n
                        }
                    }, {
                        key: "handleMouseDown",
                        value: function() {}
                    }, {
                        key: "handleMouseUp",
                        value: function(e) {
                            var t = this.props.actions,
                                n = this.getNewTime(e);
                            t.seek(n), t.handleEndSeeking(n)
                        }
                    }, {
                        key: "handleMouseMove",
                        value: function(e) {
                            var t = this.props.actions,
                                n = this.getNewTime(e);
                            t.handleSeekingTime(n)
                        }
                    }, {
                        key: "stepForward",
                        value: function() {
                            this.props.actions.forward(5)
                        }
                    }, {
                        key: "stepBack",
                        value: function() {
                            this.props.actions.replay(5)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.player,
                                a = n.currentTime,
                                r = n.seekingTime,
                                o = n.duration,
                                i = n.buffered,
                                u = t.mouseTime,
                                l = r || a;
                            return f.default.createElement(h.default, {
                                ref: function(t) {
                                    e.slider = t
                                },
                                label: "video progress bar",
                                className: (0, p.default)("video-react-progress-holder", this.props.className),
                                valuenow: (100 * this.getPercent()).toFixed(2),
                                valuetext: (0, g.formatTime)(l, o),
                                onMouseDown: this.handleMouseDown,
                                onMouseMove: this.handleMouseMove,
                                onMouseUp: this.handleMouseUp,
                                getPercent: this.getPercent,
                                stepForward: this.stepForward,
                                stepBack: this.stepBack
                            }, f.default.createElement(m.default, {
                                buffered: i,
                                currentTime: l,
                                duration: o
                            }), f.default.createElement(y.default, {
                                duration: o,
                                mouseTime: u
                            }), f.default.createElement(v.default, {
                                currentTime: l,
                                duration: o
                            }))
                        }
                    }]), t
                }(f.Component);
            t.default = k, k.propTypes = b, k.displayName = "SeekBar"
        },
        1038: function(e, t, n) {
            "use strict";
            var a = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = s;
            var r = a(n(1)),
                o = a(n(0)),
                i = a(n(16)),
                u = n(862),
                l = {
                    currentTime: r.default.number,
                    duration: r.default.number,
                    percentage: r.default.string,
                    className: r.default.string
                };

            function s(e) {
                var t = e.currentTime,
                    n = e.duration,
                    a = e.percentage,
                    r = e.className;
                return o.default.createElement("div", {
                    "data-current-time": (0, u.formatTime)(t, n),
                    className: (0, i.default)("video-react-play-progress video-react-slider-bar", r),
                    style: {
                        width: a
                    }
                }, o.default.createElement("span", {
                    className: "video-react-control-text"
                }, "Progress: ".concat(a)))
            }
            s.propTypes = l, s.displayName = "PlayProgressBar"
        },
        1039: function(e, t, n) {
            "use strict";
            var a = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = l;
            var r = a(n(1)),
                o = a(n(0)),
                i = a(n(16)),
                u = {
                    duration: r.default.number,
                    buffered: r.default.object,
                    className: r.default.string
                };

            function l(e) {
                var t = e.buffered,
                    n = e.duration,
                    a = e.className;
                if (!t || !t.length) return null;
                var r = t.end(t.length - 1),
                    u = {};

                function l(e, t) {
                    var n = e / t || 0;
                    return "".concat(100 * (n >= 1 ? 1 : n), "%")
                }
                r > n && (r = n), u.width = l(r, n);
                for (var s = [], d = 0; d < t.length; d++) {
                    var c = t.start(d),
                        f = t.end(d),
                        p = o.default.createElement("div", {
                            style: {
                                left: l(c, r),
                                width: l(f - c, r)
                            },
                            key: "part-".concat(d)
                        });
                    s.push(p)
                }
                return 0 === s.length && (s = null), o.default.createElement("div", {
                    style: u,
                    className: (0, i.default)("video-react-load-progress", a)
                }, o.default.createElement("span", {
                    className: "video-react-control-text"
                }, "Loaded: 0%"), s)
            }
            l.propTypes = u, l.displayName = "LoadProgressBar"
        },
        1040: function(e, t, n) {
            "use strict";
            var a = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n(1)),
                o = a(n(0)),
                i = a(n(16)),
                u = n(862);

            function l(e) {
                var t = e.duration,
                    n = e.mouseTime,
                    a = e.className,
                    r = e.text;
                if (!n.time) return null;
                var l = r || (0, u.formatTime)(n.time, t);
                return o.default.createElement("div", {
                    className: (0, i.default)("video-react-mouse-display", a),
                    style: {
                        left: "".concat(n.position, "px")
                    },
                    "data-current-time": l
                })
            }
            l.propTypes = {
                duration: r.default.number,
                mouseTime: r.default.object,
                className: r.default.string
            }, l.displayName = "MouseTimeDisplay";
            var s = l;
            t.default = s
        },
        1041: function(e, t, n) {
            "use strict";
            var a = n(841),
                r = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n(840)),
                i = r(n(269)),
                u = r(n(842)),
                l = r(n(843)),
                s = r(n(31)),
                d = r(n(844)),
                c = r(n(1)),
                f = a(n(0)),
                p = r(n(16)),
                h = {
                    actions: c.default.object,
                    player: c.default.object,
                    className: c.default.string
                },
                v = function(e) {
                    function t(e, n) {
                        var a;
                        return (0, o.default)(this, t), (a = (0, u.default)(this, (0, l.default)(t).call(this, e, n))).handleClick = a.handleClick.bind((0, s.default)(a)), a
                    }
                    return (0, d.default)(t, e), (0, i.default)(t, [{
                        key: "handleClick",
                        value: function() {
                            var e = this.props,
                                t = e.actions;
                            e.player.paused ? t.play() : t.pause()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.player,
                                a = t.className,
                                r = n.paused ? "Play" : "Pause";
                            return f.default.createElement("button", {
                                ref: function(t) {
                                    e.button = t
                                },
                                className: (0, p.default)(a, {
                                    "video-react-play-control": !0,
                                    "video-react-control": !0,
                                    "video-react-button": !0,
                                    "video-react-paused": n.paused,
                                    "video-react-playing": !n.paused
                                }),
                                type: "button",
                                tabIndex: "0",
                                onClick: this.handleClick
                            }, f.default.createElement("span", {
                                className: "video-react-control-text"
                            }, r))
                        }
                    }]), t
                }(f.Component);
            t.default = v, v.propTypes = h, v.displayName = "PlayToggle"
        },
        1042: function(e, t, n) {
            "use strict";
            var a = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = (0, a(n(1043)).default)("forward");
            r.displayName = "ForwardControl";
            var o = r;
            t.default = o
        },
        1043: function(e, t, n) {
            "use strict";
            var a = n(841),
                r = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n(840)),
                i = r(n(269)),
                u = r(n(842)),
                l = r(n(843)),
                s = r(n(31)),
                d = r(n(844)),
                c = r(n(1)),
                f = a(n(0)),
                p = {
                    actions: c.default.object,
                    className: c.default.string,
                    seconds: c.default.oneOf([5, 10, 30])
                },
                h = {
                    seconds: 10
                };
            t.default = function(e) {
                var t = function(t) {
                    function n(e, t) {
                        var a;
                        return (0, o.default)(this, n), (a = (0, u.default)(this, (0, l.default)(n).call(this, e, t))).handleClick = a.handleClick.bind((0, s.default)(a)), a
                    }
                    return (0, d.default)(n, t), (0, i.default)(n, [{
                        key: "handleClick",
                        value: function() {
                            var t = this.props,
                                n = t.actions,
                                a = t.seconds;
                            "forward" === e ? n.forward(a) : n.replay(a)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this,
                                n = this.props,
                                a = n.seconds,
                                r = n.className,
                                o = ["video-react-control", "video-react-button", "video-react-icon"];
                            return o.push("video-react-icon-".concat(e, "-").concat(a), "video-react-".concat(e, "-control")), r && o.push(r), f.default.createElement("button", {
                                ref: function(e) {
                                    t.button = e
                                },
                                className: o.join(" "),
                                type: "button",
                                onClick: this.handleClick
                            }, f.default.createElement("span", {
                                className: "video-react-control-text"
                            }, "".concat(e, " ").concat(a, " seconds")))
                        }
                    }]), n
                }(f.Component);
                return t.propTypes = p, t.defaultProps = h, t
            }
        },
        1044: function(e, t, n) {
            "use strict";
            var a = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = (0, a(n(1043)).default)("replay");
            r.displayName = "ReplayControl";
            var o = r;
            t.default = o
        },
        1045: function(e, t, n) {
            "use strict";
            var a = n(841),
                r = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n(840)),
                i = r(n(269)),
                u = r(n(842)),
                l = r(n(843)),
                s = r(n(31)),
                d = r(n(844)),
                c = r(n(1)),
                f = a(n(0)),
                p = r(n(16)),
                h = {
                    actions: c.default.object,
                    player: c.default.object,
                    className: c.default.string
                },
                v = function(e) {
                    function t(e, n) {
                        var a;
                        return (0, o.default)(this, t), (a = (0, u.default)(this, (0, l.default)(t).call(this, e, n))).handleClick = a.handleClick.bind((0, s.default)(a)), a
                    }
                    return (0, d.default)(t, e), (0, i.default)(t, [{
                        key: "handleClick",
                        value: function() {
                            var e = this.props,
                                t = e.player;
                            e.actions.toggleFullscreen(t)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.player,
                                a = t.className;
                            return f.default.createElement("button", {
                                className: (0, p.default)(a, {
                                    "video-react-icon-fullscreen-exit": n.isFullscreen,
                                    "video-react-icon-fullscreen": !n.isFullscreen
                                }, "video-react-fullscreen-control video-react-control video-react-button video-react-icon"),
                                ref: function(t) {
                                    e.button = t
                                },
                                type: "button",
                                tabIndex: "0",
                                onClick: this.handleClick
                            }, f.default.createElement("span", {
                                className: "video-react-control-text"
                            }, "Non-Fullscreen"))
                        }
                    }]), t
                }(f.Component);
            t.default = v, v.propTypes = h, v.displayName = "FullscreenToggle"
        },
        1046: function(e, t, n) {
            "use strict";
            var a = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n(1)),
                o = a(n(0)),
                i = a(n(16)),
                u = n(862),
                l = {
                    player: r.default.object,
                    className: r.default.string
                };

            function s(e) {
                var t = e.player,
                    n = t.currentTime,
                    a = t.duration,
                    r = e.className,
                    l = a - n,
                    s = (0, u.formatTime)(l);
                return o.default.createElement("div", {
                    className: (0, i.default)("video-react-remaining-time video-react-time-control video-react-control", r)
                }, o.default.createElement("div", {
                    className: "video-react-remaining-time-display",
                    "aria-live": "off"
                }, o.default.createElement("span", {
                    className: "video-react-control-text"
                }, "Remaining Time "), "-".concat(s)))
            }
            s.propTypes = l, s.displayName = "RemainingTimeDisplay";
            var d = s;
            t.default = d
        },
        1047: function(e, t, n) {
            "use strict";
            var a = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n(1)),
                o = a(n(0)),
                i = a(n(16)),
                u = n(862),
                l = {
                    player: r.default.object,
                    className: r.default.string
                };

            function s(e) {
                var t = e.player,
                    n = t.currentTime,
                    a = t.duration,
                    r = e.className,
                    l = (0, u.formatTime)(n, a);
                return o.default.createElement("div", {
                    className: (0, i.default)("video-react-current-time video-react-time-control video-react-control", r)
                }, o.default.createElement("div", {
                    className: "video-react-current-time-display",
                    "aria-live": "off"
                }, o.default.createElement("span", {
                    className: "video-react-control-text"
                }, "Current Time "), l))
            }
            s.propTypes = l, s.displayName = "CurrentTimeDisplay";
            var d = s;
            t.default = d
        },
        1048: function(e, t, n) {
            "use strict";
            var a = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n(1)),
                o = a(n(0)),
                i = a(n(16)),
                u = n(862),
                l = {
                    player: r.default.object,
                    className: r.default.string
                };

            function s(e) {
                var t = e.player.duration,
                    n = e.className,
                    a = (0, u.formatTime)(t);
                return o.default.createElement("div", {
                    className: (0, i.default)(n, "video-react-duration video-react-time-control video-react-control")
                }, o.default.createElement("div", {
                    className: "video-react-duration-display",
                    "aria-live": "off"
                }, o.default.createElement("span", {
                    className: "video-react-control-text"
                }, "Duration Time "), a))
            }
            s.propTypes = l, s.displayName = "DurationDisplay";
            var d = s;
            t.default = d
        },
        1049: function(e, t, n) {
            "use strict";
            var a = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = l;
            var r = a(n(1)),
                o = a(n(0)),
                i = a(n(16)),
                u = {
                    separator: r.default.string,
                    className: r.default.string
                };

            function l(e) {
                var t = e.separator,
                    n = e.className,
                    a = t || "/";
                return o.default.createElement("div", {
                    className: (0, i.default)("video-react-time-control video-react-time-divider", n),
                    dir: "ltr"
                }, o.default.createElement("div", null, o.default.createElement("span", null, a)))
            }
            l.propTypes = u, l.displayName = "TimeDivider"
        },
        1050: function(e, t, n) {
            "use strict";
            var a = n(841),
                r = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n(37)),
                i = r(n(840)),
                u = r(n(269)),
                l = r(n(842)),
                s = r(n(843)),
                d = r(n(31)),
                c = r(n(844)),
                f = r(n(1)),
                p = a(n(0)),
                h = r(n(16)),
                v = r(n(1234)),
                m = r(n(1236)),
                y = {
                    player: f.default.object,
                    actions: f.default.object,
                    vertical: f.default.bool,
                    className: f.default.string,
                    alwaysShowVolume: f.default.bool
                },
                g = function(e) {
                    function t(e, n) {
                        var a;
                        return (0, i.default)(this, t), (a = (0, l.default)(this, (0, s.default)(t).call(this, e, n))).state = {
                            active: !1
                        }, a.handleClick = a.handleClick.bind((0, d.default)(a)), a.handleFocus = a.handleFocus.bind((0, d.default)(a)), a.handleBlur = a.handleBlur.bind((0, d.default)(a)), a
                    }
                    return (0, c.default)(t, e), (0, u.default)(t, [{
                        key: "handleClick",
                        value: function() {
                            var e = this.props,
                                t = e.player;
                            e.actions.mute(!t.muted)
                        }
                    }, {
                        key: "handleFocus",
                        value: function() {
                            this.setState({
                                active: !0
                            })
                        }
                    }, {
                        key: "handleBlur",
                        value: function() {
                            this.setState({
                                active: !1
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.vertical,
                                n = e.player,
                                a = e.className,
                                r = !t,
                                i = this.volumeLevel;
                            return p.default.createElement(v.default, {
                                className: (0, h.default)(a, {
                                    "video-react-volume-menu-button-vertical": t,
                                    "video-react-volume-menu-button-horizontal": !t,
                                    "video-react-vol-muted": n.muted,
                                    "video-react-vol-0": 0 === i && !n.muted,
                                    "video-react-vol-1": 1 === i,
                                    "video-react-vol-2": 2 === i,
                                    "video-react-vol-3": 3 === i,
                                    "video-react-slider-active": this.props.alwaysShowVolume || this.state.active,
                                    "video-react-lock-showing": this.props.alwaysShowVolume || this.state.active
                                }, "video-react-volume-menu-button"),
                                onClick: this.handleClick,
                                inline: r
                            }, p.default.createElement(m.default, (0, o.default)({
                                onFocus: this.handleFocus,
                                onBlur: this.handleBlur
                            }, this.props)))
                        }
                    }, {
                        key: "volumeLevel",
                        get: function() {
                            var e = this.props.player,
                                t = e.volume,
                                n = e.muted,
                                a = 3;
                            return 0 === t || n ? a = 0 : t < .33 ? a = 1 : t < .67 && (a = 2), a
                        }
                    }]), t
                }(p.Component);
            g.propTypes = y, g.defaultProps = {
                vertical: !1
            }, g.displayName = "VolumeMenuButton";
            var b = g;
            t.default = b
        },
        1051: function(e, t, n) {
            "use strict";
            var a = n(841),
                r = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n(37)),
                i = r(n(869)),
                u = r(n(840)),
                l = r(n(269)),
                s = r(n(842)),
                d = r(n(843)),
                c = r(n(31)),
                f = r(n(844)),
                p = r(n(1)),
                h = a(n(0)),
                v = r(n(16)),
                m = {
                    tagName: p.default.string,
                    onClick: p.default.func.isRequired,
                    onFocus: p.default.func,
                    onBlur: p.default.func,
                    className: p.default.string
                },
                y = function(e) {
                    function t(e, n) {
                        var a;
                        return (0, u.default)(this, t), (a = (0, s.default)(this, (0, d.default)(t).call(this, e, n))).handleClick = a.handleClick.bind((0, c.default)(a)), a.handleFocus = a.handleFocus.bind((0, c.default)(a)), a.handleBlur = a.handleBlur.bind((0, c.default)(a)), a.handleKeypress = a.handleKeypress.bind((0, c.default)(a)), a
                    }
                    return (0, f.default)(t, e), (0, l.default)(t, [{
                        key: "handleKeypress",
                        value: function(e) {
                            32 !== e.which && 13 !== e.which || (e.preventDefault(), this.handleClick(e))
                        }
                    }, {
                        key: "handleClick",
                        value: function(e) {
                            (0, this.props.onClick)(e)
                        }
                    }, {
                        key: "handleFocus",
                        value: function(e) {
                            document.addEventListener("keydown", this.handleKeypress), this.props.onFocus && this.props.onFocus(e)
                        }
                    }, {
                        key: "handleBlur",
                        value: function(e) {
                            document.removeEventListener("keydown", this.handleKeypress), this.props.onBlur && this.props.onBlur(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.tagName,
                                t = (0, i.default)({}, this.props);
                            return delete t.tagName, delete t.className, h.default.createElement(e, (0, o.default)({
                                className: (0, v.default)(this.props.className),
                                role: "button",
                                tabIndex: "0",
                                onClick: this.handleClick,
                                onFocus: this.handleFocus,
                                onBlur: this.handleBlur
                            }, t))
                        }
                    }]), t
                }(h.Component);
            t.default = y, y.propTypes = m, y.defaultProps = {
                tagName: "div"
            }, y.displayName = "ClickableComponent"
        },
        1052: function(e, t, n) {
            var a, r, o, i;
            i = function(e, t, n) {
                "use strict";
                var a = function() {
                        return !("undefined" === typeof document || "undefined" === typeof window)
                    },
                    r = function(e, t) {
                        for (var n in t) e[n] = t[n];
                        return e
                    },
                    o = function(e, t) {
                        var n = r({}, e);
                        return t.forEach(function(e) {
                            delete n[e]
                        }), n
                    },
                    i = function(e, t) {
                        t = t || function() {};
                        var n = !1,
                            a = +new Date + "_" + Math.floor(1e3 * Math.random()),
                            r = document.createElement("script"),
                            o = "jsonp_" + a,
                            i = e.replace("@", o);
                        r.setAttribute("type", "text/javascript"), r.setAttribute("src", i), document.body.appendChild(r), setTimeout(function() {
                            n || (n = !0, t(new Error("jsonp timeout")))
                        }, 1e4), window[o] = function() {
                            var e = Array.prototype.slice.call(arguments, 0);
                            e.unshift(null), n || (n = !0, t.apply(this, e))
                        }
                    },
                    u = {};
                ! function() {
                    if (a()) {
                        window.VK || (window.VK = {}), window.VK.Share || (window.VK.Share = {});
                        var e = window.VK.Share.count;
                        window.VK.Share.count = function(t, n) {
                            if ("function" === typeof u[t]) return u[t](n);
                            "function" === typeof e && e(t, n)
                        }
                    }
                }();
                var l = {},
                    s = {
                        displayName: "Count",
                        propTypes: {
                            element: n.string,
                            url: n.string,
                            token: n.string
                        },
                        getDefaultProps: function() {
                            var e = "";
                            return a() && (e = window.location.href), {
                                url: e,
                                token: "",
                                element: "span",
                                onCount: function() {}
                            }
                        },
                        getInitialState: function() {
                            return {
                                count: 0
                            }
                        },
                        componentDidMount: function() {
                            this.updateCount()
                        },
                        componentWillReceiveProps: function(e) {
                            this.props.url !== e.url && this.setState({
                                count: 0
                            }, function() {
                                this.updateCount()
                            })
                        },
                        componentDidUpdate: function() {
                            this.props.onCount(this.state.count)
                        },
                        updateCount: function() {
                            if (a()) {
                                if ("function" === typeof this.fetchCount) return this.fetchCount(function(e) {
                                    this.setState({
                                        count: e
                                    })
                                }.bind(this));
                                var e = this.constructUrl();
                                i(e, function(t, n) {
                                    if (t) return console.warn("react-social: jsonp timeout for url " + e), this.setState({
                                        count: 0
                                    });
                                    this.setState({
                                        count: this.extractCount(n)
                                    })
                                }.bind(this))
                            }
                        },
                        getCount: function() {
                            return this.state.count
                        },
                        render: function() {
                            return e.createElement(this.props.element, o(this.props, ["element", "url", "onCount", "token"]), this.state.count)
                        }
                    },
                    d = {
                        displayName: "Button",
                        propTypes: {
                            element: n.oneOfType([n.string, n.func]),
                            media: n.string,
                            message: n.string,
                            onClick: n.func,
                            sharer: n.bool,
                            target: n.string,
                            title: n.string,
                            url: n.string,
                            windowOptions: n.array,
                            _open: n.bool
                        },
                        getDefaultProps: function() {
                            var e = "";
                            return a() && (e = window.location.href), {
                                element: "button",
                                url: e,
                                media: "",
                                message: "",
                                onClick: function() {},
                                windowOptions: [],
                                _open: !0,
                                sharer: !1
                            }
                        },
                        click: function(e) {
                            var t = this.constructUrl(),
                                n = this.props.target,
                                r = this.props.windowOptions.join(",");
                            this.props.onClick(e, t, n), a() && this.props._open && window.open(t, n, r)
                        },
                        render: function() {
                            var t = o(this.props, ["_open", "appId", "element", "media", "message", "onClick", "sharer", "title", "url", "windowOptions"]);
                            return e.createElement(this.props.element, r({
                                onClick: this.click
                            }, t))
                        }
                    },
                    c = {
                        getDefaultProps: function() {
                            return {
                                target: "_blank"
                            }
                        }
                    };
                return l.FacebookCount = t({
                    displayName: "FacebookCount",
                    mixins: [s],
                    constructUrl: function() {
                        return this.props.token ? "https://graph.facebook.com/v2.8/?callback=@&id=" + encodeURIComponent(this.props.url) + "&access_token=" + encodeURIComponent(this.props.token) : "https://graph.facebook.com/?callback=@&id=" + encodeURIComponent(this.props.url)
                    },
                    extractCount: function(e) {
                        return e && e.share && e.share.share_count ? e.share.share_count : 0
                    }
                }), l.TwitterCount = t({
                    displayName: "TwitterCount",
                    mixins: [s],
                    constructUrl: function() {
                        return "https://count.donreach.com/?callback=@&url=" + encodeURIComponent(this.props.url) + "&providers=all"
                    },
                    extractCount: function(e) {
                        return e.shares.twitter || 0
                    }
                }), l.GooglePlusCount = t({
                    displayName: "GooglePlusCount",
                    mixins: [s],
                    constructUrl: function() {
                        return "https://count.donreach.com/?callback=@&url=" + encodeURIComponent(this.props.url) + "&providers=google"
                    },
                    extractCount: function(e) {
                        return e.shares.google || 0
                    }
                }), l.PinterestCount = t({
                    displayName: "PinterestCount",
                    mixins: [s],
                    constructUrl: function() {
                        return "https://api.pinterest.com/v1/urls/count.json?callback=@&url=" + encodeURIComponent(this.props.url)
                    },
                    extractCount: function(e) {
                        return e.count || 0
                    }
                }), l.LinkedInCount = t({
                    displayName: "LinkedInCount",
                    mixins: [s],
                    constructUrl: function() {
                        return "https://www.linkedin.com/countserv/count/share?url=" + encodeURIComponent(this.props.url) + "&callback=@&format=jsonp"
                    },
                    extractCount: function(e) {
                        return e.count || 0
                    }
                }), l.RedditCount = t({
                    displayName: "RedditCount",
                    mixins: [s],
                    constructUrl: function() {
                        return "https://www.reddit.com/api/info.json?jsonp=@&url=" + encodeURIComponent(this.props.url)
                    },
                    extractCount: function(e) {
                        for (var t = 0, n = e.data.children, a = 0; a < n.length; a++) t += n[a].data.score;
                        return t
                    }
                }), l.VKontakteCount = t({
                    displayName: "VKontakteCount",
                    mixins: [s],
                    fetchCount: function(e) {
                        var t = Math.floor(1e4 * Math.random()),
                            n = "https://vkontakte.ru/share.php?act=count&index=" + t + "&url=" + encodeURIComponent(this.props.url);
                        ! function(e, t) {
                            u[e] = t
                        }(t, e), i(n)
                    }
                }), l.TumblrCount = t({
                    displayName: "TumblrCount",
                    mixins: [s],
                    constructUrl: function() {
                        return "http://api.tumblr.com/v2/share/stats?url=" + encodeURIComponent(this.props.url) + "&callback=@"
                    },
                    extractCount: function(e) {
                        return e.response.note_count || 0
                    }
                }), l.PocketCount = t({
                    displayName: "PocketCount",
                    mixins: [s],
                    constructUrl: function() {
                        return "https://count.donreach.com/?callback=@&url=" + encodeURIComponent(this.props.url) + "&providers=pocket"
                    },
                    extractCount: function(e) {
                        return e.shares.pocket || 0
                    }
                }), l.FacebookButton = t({
                    displayName: "FacebookButton",
                    mixins: [d, c],
                    propTypes: {
                        appId: n.oneOfType([n.string, n.number]).isRequired,
                        sharer: n.bool
                    },
                    constructUrl: function() {
                        return this.props.sharer ? "https://www.facebook.com/dialog/share?app_id=" + encodeURIComponent(this.props.appId) + "&display=popup&caption=" + encodeURIComponent(this.props.message) + "&href=" + encodeURIComponent(this.props.url) + "&redirect_uri=" + encodeURIComponent("https://www.facebook.com/") : "https://www.facebook.com/dialog/feed?app_id=" + encodeURIComponent(this.props.appId) + "&display=popup&caption=" + encodeURIComponent(this.props.message) + "&link=" + encodeURIComponent(this.props.url) + "&picture=" + encodeURIComponent(this.props.media) + "&redirect_uri=" + encodeURIComponent("https://www.facebook.com/")
                    }
                }), l.OdnoklassnikiButton = t({
                    displayName: "OdnoklassnikiButton",
                    mixins: [d, c],
                    propTypes: {
                        message: n.string.isRequired,
                        media: n.string.isRequired,
                        title: n.string.isRequired
                    },
                    constructUrl: function() {
                        var e = {
                            url: this.props.url,
                            media: encodeURIComponent(this.props.media),
                            title: encodeURIComponent(this.props.title),
                            description: encodeURIComponent(this.props.message)
                        };
                        return ["https://connect.ok.ru/offer", Object.keys(e).map(function(t) {
                            return t + "=" + e[t]
                        }).join("&")].join("?")
                    }
                }), l.MyMailRuButton = t({
                    displayName: "MyMailRuButton",
                    mixins: [d, c],
                    propTypes: {
                        message: n.string.isRequired,
                        media: n.string.isRequired,
                        title: n.string.isRequired
                    },
                    constructUrl: function() {
                        var e = {
                            url: this.props.url,
                            image_url: encodeURIComponent(this.props.media),
                            title: encodeURIComponent(this.props.title),
                            description: encodeURIComponent(this.props.message)
                        };
                        return ["http://connect.mail.ru/share", Object.keys(e).map(function(t) {
                            return t + "=" + e[t]
                        }).join("&")].join("?")
                    }
                }), l.TwitterButton = t({
                    displayName: "TwitterButton",
                    mixins: [d, c],
                    constructUrl: function() {
                        var e = "" === this.props.message ? this.props.url : this.props.message + " " + this.props.url;
                        return "https://twitter.com/intent/tweet?text=" + encodeURIComponent(e)
                    }
                }), l.EmailButton = t({
                    displayName: "EmailButton",
                    mixins: [d, c],
                    constructUrl: function() {
                        return "mailto:?subject=" + encodeURIComponent(this.props.message) + "&body=" + encodeURIComponent(this.props.url)
                    }
                }), l.PinterestButton = t({
                    displayName: "PinterestButton",
                    mixins: [d, c],
                    propTypes: {
                        media: n.string.isRequired
                    },
                    constructUrl: function() {
                        return "https://pinterest.com/pin/create/button/?url=" + encodeURIComponent(this.props.url) + "&media=" + encodeURIComponent(this.props.media) + "&description=" + encodeURIComponent(this.props.message)
                    }
                }), l.VKontakteButton = t({
                    displayName: "VKontakteButton",
                    mixins: [d, c],
                    constructUrl: function() {
                        return "http://vk.com/share.php?url=" + encodeURIComponent(this.props.url) + "&title=" + encodeURIComponent(this.props.title) + "&description=" + encodeURIComponent(this.props.message)
                    }
                }), l.GooglePlusButton = t({
                    displayName: "GooglePlusButton",
                    mixins: [d, c],
                    constructUrl: function() {
                        return "https://plus.google.com/share?url=" + encodeURIComponent(this.props.url)
                    }
                }), l.RedditButton = t({
                    displayName: "RedditButton",
                    mixins: [d, c],
                    constructUrl: function() {
                        return "https://www.reddit.com/submit?url=" + encodeURIComponent(this.props.url) + "&title=" + encodeURIComponent(this.props.title)
                    }
                }), l.LinkedInButton = t({
                    displayName: "LinkedInButton",
                    mixins: [d, c],
                    constructUrl: function() {
                        return "https://www.linkedin.com/shareArticle?url=" + encodeURIComponent(this.props.url) + "&title=" + encodeURIComponent(this.props.title)
                    }
                }), l.XingButton = t({
                    displayName: "XingButton",
                    mixins: [d, c],
                    constructUrl: function() {
                        return "https://www.xing.com/app/user?op=share;url=" + encodeURIComponent(this.props.url) + ";title=" + encodeURIComponent(this.props.message)
                    }
                }), l.TumblrButton = t({
                    displayName: "TumblrButton",
                    mixins: [d, c],
                    constructUrl: function() {
                        return "https://www.tumblr.com/widgets/share/tool?posttype=link&title=" + encodeURIComponent(this.props.message) + "&content=" + encodeURIComponent(this.props.url) + "&canonicalUrl=" + encodeURIComponent(this.props.url) + "&shareSource=tumblr_share_button"
                    }
                }), l.PocketButton = t({
                    displayName: "PocketButton",
                    mixins: [d, c],
                    constructUrl: function() {
                        return "https://getpocket.com/save?url=" + encodeURIComponent(this.props.url) + "&title=" + encodeURIComponent(this.props.message)
                    }
                }), l
            }, e.exports ? e.exports = i(n(0), n(229), n(1)) : (r = [n(0)], void 0 === (o = "function" === typeof(a = i) ? a.apply(t, r) : a) || (e.exports = o))
        },
        1053: function(e, t, n) {
            var a = n(1243),
                r = 4;
            e.exports = function(e) {
                return a(e, r)
            }
        },
        1054: function(e, t, n) {
            var a = n(459),
                r = n(292),
                o = n(435),
                i = n(460),
                u = Object.getOwnPropertySymbols ? function(e) {
                    for (var t = []; e;) a(t, o(e)), e = r(e);
                    return t
                } : i;
            e.exports = u
        },
        1225: function(e, t, n) {
            (function(t) {
                var n = "Expected a function",
                    a = NaN,
                    r = "[object Symbol]",
                    o = /^\s+|\s+$/g,
                    i = /^[-+]0x[0-9a-f]+$/i,
                    u = /^0b[01]+$/i,
                    l = /^0o[0-7]+$/i,
                    s = parseInt,
                    d = "object" == typeof t && t && t.Object === Object && t,
                    c = "object" == typeof self && self && self.Object === Object && self,
                    f = d || c || Function("return this")(),
                    p = Object.prototype.toString,
                    h = Math.max,
                    v = Math.min,
                    m = function() {
                        return f.Date.now()
                    };

                function y(e) {
                    var t = typeof e;
                    return !!e && ("object" == t || "function" == t)
                }

                function g(e) {
                    if ("number" == typeof e) return e;
                    if (function(e) {
                        return "symbol" == typeof e || function(e) {
                            return !!e && "object" == typeof e
                        }(e) && p.call(e) == r
                    }(e)) return a;
                    if (y(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = y(t) ? t + "" : t
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(o, "");
                    var n = u.test(e);
                    return n || l.test(e) ? s(e.slice(2), n ? 2 : 8) : i.test(e) ? a : +e
                }
                e.exports = function(e, t, a) {
                    var r, o, i, u, l, s, d = 0,
                        c = !1,
                        f = !1,
                        p = !0;
                    if ("function" != typeof e) throw new TypeError(n);

                    function b(t) {
                        var n = r,
                            a = o;
                        return r = o = void 0, d = t, u = e.apply(a, n)
                    }

                    function k(e) {
                        var n = e - s;
                        return void 0 === s || n >= t || n < 0 || f && e - d >= i
                    }

                    function C() {
                        var e = m();
                        if (k(e)) return E(e);
                        l = setTimeout(C, function(e) {
                            var n = t - (e - s);
                            return f ? v(n, i - (e - d)) : n
                        }(e))
                    }

                    function E(e) {
                        return l = void 0, p && r ? b(e) : (r = o = void 0, u)
                    }

                    function P() {
                        var e = m(),
                            n = k(e);
                        if (r = arguments, o = this, s = e, n) {
                            if (void 0 === l) return function(e) {
                                return d = e, l = setTimeout(C, t), c ? b(e) : u
                            }(s);
                            if (f) return l = setTimeout(C, t), b(s)
                        }
                        return void 0 === l && (l = setTimeout(C, t)), u
                    }
                    return t = g(t) || 0, y(a) && (c = !!a.leading, i = (f = "maxWait" in a) ? h(g(a.maxWait) || 0, t) : i, p = "trailing" in a ? !!a.trailing : p), P.cancel = function() {
                        void 0 !== l && clearTimeout(l), d = 0, r = s = o = l = void 0
                    }, P.flush = function() {
                        return void 0 === l ? u : E(m())
                    }, P
                }
            }).call(this, n(98))
        },
        1226: function(e, t, n) {
            "use strict";
            var a = n(841),
                r = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n(869)),
                i = r(n(47)),
                u = r(n(936)),
                l = r(n(840)),
                s = r(n(269)),
                d = r(n(842)),
                c = r(n(843)),
                f = r(n(31)),
                p = r(n(844)),
                h = r(n(1)),
                v = a(n(0)),
                m = r(n(16)),
                y = r(n(1227)),
                g = r(n(1027)),
                b = r(n(1028)),
                k = r(n(1029)),
                C = r(n(1030)),
                E = r(n(1033)),
                P = r(n(1034)),
                T = r(n(1035)),
                w = a(n(1240)),
                S = n(903),
                N = n(862),
                M = r(n(1026)),
                x = {
                    children: h.default.any,
                    width: h.default.oneOfType([h.default.string, h.default.number]),
                    height: h.default.oneOfType([h.default.string, h.default.number]),
                    fluid: h.default.bool,
                    muted: h.default.bool,
                    playsInline: h.default.bool,
                    aspectRatio: h.default.string,
                    className: h.default.string,
                    videoId: h.default.string,
                    startTime: h.default.number,
                    loop: h.default.bool,
                    autoPlay: h.default.bool,
                    src: h.default.string,
                    poster: h.default.string,
                    preload: h.default.oneOf(["auto", "metadata", "none"]),
                    onLoadStart: h.default.func,
                    onWaiting: h.default.func,
                    onCanPlay: h.default.func,
                    onCanPlayThrough: h.default.func,
                    onPlaying: h.default.func,
                    onEnded: h.default.func,
                    onSeeking: h.default.func,
                    onSeeked: h.default.func,
                    onPlay: h.default.func,
                    onPause: h.default.func,
                    onProgress: h.default.func,
                    onDurationChange: h.default.func,
                    onError: h.default.func,
                    onSuspend: h.default.func,
                    onAbort: h.default.func,
                    onEmptied: h.default.func,
                    onStalled: h.default.func,
                    onLoadedMetadata: h.default.func,
                    onLoadedData: h.default.func,
                    onTimeUpdate: h.default.func,
                    onRateChange: h.default.func,
                    onVolumeChange: h.default.func,
                    store: h.default.object
                },
                O = function(e) {
                    function t(e) {
                        var n;
                        return (0, l.default)(this, t), (n = (0, d.default)(this, (0, c.default)(t).call(this, e))).controlsHideTimer = null, n.video = null, n.manager = new y.default(e.store), n.actions = n.manager.getActions(), n.manager.subscribeToPlayerStateChange(n.handleStateChange.bind((0, f.default)(n))), n.getStyle = n.getStyle.bind((0, f.default)(n)), n.handleResize = n.handleResize.bind((0, f.default)(n)), n.getChildren = n.getChildren.bind((0, f.default)(n)), n.handleMouseMove = (0, N.throttle)(n.handleMouseMove.bind((0, f.default)(n)), 250), n.handleMouseDown = n.handleMouseDown.bind((0, f.default)(n)), n.startControlsTimer = n.startControlsTimer.bind((0, f.default)(n)), n.handleFullScreenChange = n.handleFullScreenChange.bind((0, f.default)(n)), n.handleKeyDown = n.handleKeyDown.bind((0, f.default)(n)), n.handleFocus = n.handleFocus.bind((0, f.default)(n)), n.handleBlur = n.handleBlur.bind((0, f.default)(n)), n
                    }
                    return (0, p.default)(t, e), (0, s.default)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.handleResize(), window.addEventListener("resize", this.handleResize), M.default.addEventListener(this.handleFullScreenChange)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.handleResize), M.default.removeEventListener(this.handleFullScreenChange), this.controlsHideTimer && window.clearTimeout(this.controlsHideTimer)
                        }
                    }, {
                        key: "getDefaultChildren",
                        value: function(e) {
                            var t = this;
                            return [v.default.createElement(C.default, {
                                ref: function(e) {
                                    t.video = e, t.manager.video = t.video
                                },
                                key: "video",
                                order: 0
                            }, e), v.default.createElement(k.default, {
                                key: "poster-image",
                                order: 1
                            }), v.default.createElement(b.default, {
                                key: "loading-spinner",
                                order: 2
                            }), v.default.createElement(E.default, {
                                key: "bezel",
                                order: 3
                            }), v.default.createElement(g.default, {
                                key: "big-play-button",
                                order: 4
                            }), v.default.createElement(T.default, {
                                key: "control-bar",
                                order: 5
                            }), v.default.createElement(P.default, {
                                key: "shortcut",
                                order: 99
                            })]
                        }
                    }, {
                        key: "getChildren",
                        value: function(e) {
                            e.className;
                            var t = e.children,
                                n = (0, u.default)(e, ["className", "children"]),
                                a = v.default.Children.toArray(this.props.children).filter(function(e) {
                                    return !(0, N.isVideoChild)(e)
                                }),
                                r = this.getDefaultChildren(t);
                            return (0, N.mergeAndSortChildren)(r, a, n)
                        }
                    }, {
                        key: "setWidthOrHeight",
                        value: function(e, t, n) {
                            var a;
                            "string" === typeof n ? "auto" === n ? a = "auto" : n.match(/\d+%/) && (a = n) : "number" === typeof n && (a = "".concat(n, "px")), Object.assign(e, (0, i.default)({}, t, a))
                        }
                    }, {
                        key: "getStyle",
                        value: function() {
                            var e, t, n = this.props,
                                a = n.fluid,
                                r = n.aspectRatio,
                                o = n.height,
                                i = n.width,
                                u = this.manager.getState().player,
                                l = {},
                                s = (void 0 !== r && "auto" !== r ? r : u.videoWidth ? "".concat(u.videoWidth, ":").concat(u.videoHeight) : "16:9").split(":"),
                                d = s[1] / s[0];
                            return e = void 0 !== i ? i : void 0 !== o ? o / d : u.videoWidth || 400, t = void 0 !== o ? o : e * d, a ? l.paddingTop = "".concat(100 * d, "%") : (this.setWidthOrHeight(l, "width", e), this.setWidthOrHeight(l, "height", t)), l
                        }
                    }, {
                        key: "getState",
                        value: function() {
                            return this.manager.getState()
                        }
                    }, {
                        key: "play",
                        value: function() {
                            this.video.play()
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this.video.pause()
                        }
                    }, {
                        key: "load",
                        value: function() {
                            this.video.load()
                        }
                    }, {
                        key: "addTextTrack",
                        value: function() {
                            var e;
                            (e = this.video).addTextTrack.apply(e, arguments)
                        }
                    }, {
                        key: "canPlayType",
                        value: function() {
                            var e;
                            (e = this.video).canPlayType.apply(e, arguments)
                        }
                    }, {
                        key: "seek",
                        value: function(e) {
                            this.video.seek(e)
                        }
                    }, {
                        key: "forward",
                        value: function(e) {
                            this.video.forward(e)
                        }
                    }, {
                        key: "replay",
                        value: function(e) {
                            this.video.replay(e)
                        }
                    }, {
                        key: "toggleFullscreen",
                        value: function() {
                            this.video.toggleFullscreen()
                        }
                    }, {
                        key: "subscribeToStateChange",
                        value: function(e) {
                            return this.manager.subscribeToPlayerStateChange(e)
                        }
                    }, {
                        key: "handleResize",
                        value: function() {}
                    }, {
                        key: "handleFullScreenChange",
                        value: function(e) {
                            e.target === this.manager.rootElement && this.actions.handleFullscreenChange(M.default.isFullscreen)
                        }
                    }, {
                        key: "handleMouseDown",
                        value: function() {
                            this.startControlsTimer()
                        }
                    }, {
                        key: "handleMouseMove",
                        value: function() {
                            this.startControlsTimer()
                        }
                    }, {
                        key: "handleKeyDown",
                        value: function() {
                            this.startControlsTimer()
                        }
                    }, {
                        key: "startControlsTimer",
                        value: function() {
                            var e = this,
                                t = 3e3;
                            v.default.Children.forEach(this.props.children, function(e) {
                                if (v.default.isValidElement(e) && e.type === T.default) {
                                    var n = e.props.autoHideTime;
                                    "number" === typeof n && (t = n)
                                }
                            }), this.actions.userActivate(!0), clearTimeout(this.controlsHideTimer), this.controlsHideTimer = setTimeout(function() {
                                e.actions.userActivate(!1)
                            }, t)
                        }
                    }, {
                        key: "handleStateChange",
                        value: function(e, t) {
                            e.isFullscreen !== t.isFullscreen && (this.handleResize(), (0, S.focusNode)(this.manager.rootElement)), this.forceUpdate()
                        }
                    }, {
                        key: "handleFocus",
                        value: function() {
                            this.actions.activate(!0)
                        }
                    }, {
                        key: "handleBlur",
                        value: function() {
                            this.actions.activate(!1)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.fluid,
                                n = this.manager.getState().player,
                                a = n.paused,
                                r = n.hasStarted,
                                i = n.waiting,
                                u = n.seeking,
                                l = n.isFullscreen,
                                s = n.userActivity,
                                d = (0, o.default)({}, this.props, {
                                    player: n,
                                    actions: this.actions,
                                    manager: this.manager,
                                    store: this.manager.store,
                                    video: this.video ? this.video.video : null
                                }),
                                c = this.getChildren(d);
                            return v.default.createElement("div", {
                                className: (0, m.default)({
                                    "video-react-controls-enabled": !0,
                                    "video-react-has-started": r,
                                    "video-react-paused": a,
                                    "video-react-playing": !a,
                                    "video-react-waiting": i,
                                    "video-react-seeking": u,
                                    "video-react-fluid": t,
                                    "video-react-fullscreen": l,
                                    "video-react-user-inactive": !s,
                                    "video-react-user-active": s,
                                    "video-react-workinghover": !w.IS_IOS
                                }, "video-react", this.props.className),
                                style: this.getStyle(),
                                ref: function(t) {
                                    e.manager.rootElement = t
                                },
                                role: "region",
                                onTouchStart: this.handleMouseDown,
                                onMouseDown: this.handleMouseDown,
                                onTouchMove: this.handleMouseMove,
                                onMouseMove: this.handleMouseMove,
                                onKeyDown: this.handleKeyDown,
                                onFocus: this.handleFocus,
                                onBlur: this.handleBlur,
                                tabIndex: "-1"
                            }, c)
                        }
                    }, {
                        key: "playbackRate",
                        get: function() {
                            return this.video.playbackRate
                        },
                        set: function(e) {
                            this.video.playbackRate = e
                        }
                    }, {
                        key: "muted",
                        get: function() {
                            return this.video.muted
                        },
                        set: function(e) {
                            this.video.muted = e
                        }
                    }, {
                        key: "volume",
                        get: function() {
                            return this.video.volume
                        },
                        set: function(e) {
                            this.video.volume = e
                        }
                    }, {
                        key: "videoWidth",
                        get: function() {
                            return this.video.videoWidth
                        }
                    }, {
                        key: "videoHeight",
                        get: function() {
                            return this.video.videoHeight
                        }
                    }]), t
                }(v.Component);
            t.default = O, O.contextTypes = {
                store: h.default.object
            }, O.propTypes = x, O.defaultProps = {
                fluid: !0,
                muted: !1,
                playsInline: !1,
                preload: "auto",
                aspectRatio: "auto"
            }, O.displayName = "Player"
        },
        1227: function(e, t, n) {
            "use strict";
            var a = n(841),
                r = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n(869)),
                i = r(n(840)),
                u = r(n(269)),
                l = n(58),
                s = r(n(1025)),
                d = a(n(902)),
                c = a(n(937)),
                f = function() {
                    function e(t) {
                        (0, i.default)(this, e), this.store = t || (0, l.createStore)(s.default), this.video = null, this.rootElement = null
                    }
                    return (0, u.default)(e, [{
                        key: "getActions",
                        value: function() {
                            var e = this,
                                t = this.store.dispatch,
                                n = (0, o.default)({}, d, c);
                            return Object.keys(n).filter(function(e) {
                                return "function" === typeof n[e]
                            }).reduce(function(a, r) {
                                var o;
                                return a[r] = (o = n[r], function() {
                                    var n = o.apply(e, arguments);
                                    "undefined" !== typeof n && t(n)
                                }), a
                            }, {})
                        }
                    }, {
                        key: "getState",
                        value: function() {
                            return this.store.getState()
                        }
                    }, {
                        key: "subscribeToStateChange",
                        value: function(e, t) {
                            t || (t = this.getState.bind(this));
                            var n = t();
                            return this.store.subscribe(function() {
                                var a = t();
                                if (a !== n) {
                                    var r = n;
                                    n = a, e(a, r)
                                }
                            })
                        }
                    }, {
                        key: "subscribeToOperationStateChange",
                        value: function(e) {
                            var t = this;
                            return this.subscribeToStateChange(e, function() {
                                return t.getState().operation
                            })
                        }
                    }, {
                        key: "subscribeToPlayerStateChange",
                        value: function(e) {
                            var t = this;
                            return this.subscribeToStateChange(e, function() {
                                return t.getState().player
                            })
                        }
                    }]), e
                }();
            t.default = f
        },
        1228: function(e, t, n) {
            "use strict";
            var a = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case i.USER_ACTIVATE:
                        return (0, r.default)({}, e, {
                            userActivity: t.activity
                        });
                    case i.PLAYER_ACTIVATE:
                        return (0, r.default)({}, e, {
                            isActive: t.activity
                        });
                    case i.FULLSCREEN_CHANGE:
                        return (0, r.default)({}, e, {
                            isFullscreen: !!t.isFullscreen
                        });
                    case o.SEEKING_TIME:
                        return (0, r.default)({}, e, {
                            seekingTime: t.time
                        });
                    case o.END_SEEKING:
                        return (0, r.default)({}, e, {
                            seekingTime: 0
                        });
                    case o.LOAD_START:
                        return (0, r.default)({}, e, t.videoProps, {
                            hasStarted: !1,
                            ended: !1
                        });
                    case o.CAN_PLAY:
                        return (0, r.default)({}, e, t.videoProps, {
                            waiting: !1
                        });
                    case o.WAITING:
                        return (0, r.default)({}, e, t.videoProps, {
                            waiting: !0
                        });
                    case o.CAN_PLAY_THROUGH:
                    case o.PLAYING:
                        return (0, r.default)({}, e, t.videoProps, {
                            waiting: !1
                        });
                    case o.PLAY:
                        return (0, r.default)({}, e, t.videoProps, {
                            ended: !1,
                            paused: !1,
                            autoPaused: !1,
                            waiting: !1,
                            hasStarted: !0
                        });
                    case o.PAUSE:
                        return (0, r.default)({}, e, t.videoProps, {
                            paused: !0
                        });
                    case o.END:
                        return (0, r.default)({}, e, t.videoProps, {
                            ended: !0
                        });
                    case o.SEEKING:
                        return (0, r.default)({}, e, t.videoProps, {
                            seeking: !0
                        });
                    case o.SEEKED:
                        return (0, r.default)({}, e, t.videoProps, {
                            seeking: !1
                        });
                    case o.ERROR:
                        return (0, r.default)({}, e, t.videoProps, {
                            error: "UNKNOWN ERROR",
                            ended: !0
                        });
                    case o.DURATION_CHANGE:
                    case o.TIME_UPDATE:
                    case o.VOLUME_CHANGE:
                    case o.PROGRESS_CHANGE:
                    case o.RATE_CHANGE:
                    case o.SUSPEND:
                    case o.ABORT:
                    case o.EMPTIED:
                    case o.STALLED:
                    case o.LOADED_META_DATA:
                    case o.LOADED_DATA:
                    case o.RESIZE:
                        return (0, r.default)({}, e, t.videoProps);
                    case o.ACTIVATE_TEXT_TRACK:
                        return (0, r.default)({}, e, {
                            activeTextTrack: t.textTrack
                        });
                    default:
                        return e
                }
            };
            var r = a(n(869)),
                o = n(937),
                i = n(902),
                u = {
                    currentSrc: null,
                    duration: 0,
                    currentTime: 0,
                    seekingTime: 0,
                    buffered: null,
                    waiting: !1,
                    seeking: !1,
                    paused: !0,
                    autoPaused: !1,
                    ended: !1,
                    playbackRate: 1,
                    muted: !1,
                    volume: 1,
                    readyState: 0,
                    networkState: 0,
                    videoWidth: 0,
                    videoHeight: 0,
                    hasStarted: !1,
                    userActivity: !0,
                    isActive: !1,
                    isFullscreen: !1,
                    activeTextTrack: null
                }
        },
        1229: function(e, t, n) {
            "use strict";
            var a = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case o.OPERATE:
                        return (0, r.default)({}, e, {
                            count: e.count + 1,
                            operation: (0, r.default)({}, e.operation, t.operation)
                        });
                    default:
                        return e
                }
            };
            var r = a(n(869)),
                o = n(902),
                i = {
                    count: 0,
                    operation: {
                        action: "",
                        source: ""
                    }
                }
        },
        1230: function(e, t, n) {
            var a = n(1032);
            e.exports = function(e) {
                if (Array.isArray(e)) return a(e)
            }
        },
        1231: function(e, t) {
            e.exports = function(e) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }
        },
        1232: function(e, t, n) {
            var a = n(1032);
            e.exports = function(e, t) {
                if (e) {
                    if ("string" === typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
                }
            }
        },
        1233: function(e, t) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
        },
        1234: function(e, t, n) {
            "use strict";
            var a = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = f;
            var r = a(n(37)),
                o = a(n(869)),
                i = a(n(1)),
                u = a(n(0)),
                l = a(n(16)),
                s = a(n(1051)),
                d = a(n(1235)),
                c = {
                    inline: i.default.bool,
                    onClick: i.default.func.isRequired,
                    onFocus: i.default.func,
                    onBlur: i.default.func,
                    className: i.default.string
                };

            function f(e) {
                var t = e.inline,
                    n = e.className,
                    a = (0, o.default)({}, e);
                return delete a.children, delete a.inline, delete a.className, u.default.createElement(s.default, (0, r.default)({
                    className: (0, l.default)(n, {
                        "video-react-menu-button-inline": !!t,
                        "video-react-menu-button-popup": !t
                    }, "video-react-control video-react-button video-react-menu-button")
                }, a), u.default.createElement(d.default, e))
            }
            f.propTypes = c, f.defaultProps = {
                inline: !0
            }, f.displayName = "PopupButton"
        },
        1235: function(e, t, n) {
            "use strict";
            var a = n(841),
                r = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n(840)),
                i = r(n(269)),
                u = r(n(842)),
                l = r(n(843)),
                s = r(n(31)),
                d = r(n(844)),
                c = r(n(1)),
                f = a(n(0)),
                p = {
                    player: c.default.object,
                    children: c.default.any
                },
                h = function(e) {
                    function t(e, n) {
                        var a;
                        return (0, o.default)(this, t), (a = (0, u.default)(this, (0, l.default)(t).call(this, e, n))).handleClick = a.handleClick.bind((0, s.default)(a)), a
                    }
                    return (0, d.default)(t, e), (0, i.default)(t, [{
                        key: "handleClick",
                        value: function(e) {
                            e.preventDefault()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.children;
                            return f.default.createElement("div", {
                                className: "video-react-menu",
                                onClick: this.handleClick
                            }, f.default.createElement("div", {
                                className: "video-react-menu-content"
                            }, e))
                        }
                    }]), t
                }(f.Component);
            t.default = h, h.propTypes = p, h.displayName = "Popup"
        },
        1236: function(e, t, n) {
            "use strict";
            var a = n(841),
                r = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n(37)),
                i = r(n(840)),
                u = r(n(269)),
                l = r(n(842)),
                s = r(n(843)),
                d = r(n(31)),
                c = r(n(844)),
                f = r(n(1)),
                p = a(n(0)),
                h = r(n(16)),
                v = r(n(938)),
                m = r(n(1237)),
                y = {
                    actions: f.default.object,
                    player: f.default.object,
                    className: f.default.string,
                    onFocus: f.default.func,
                    onBlur: f.default.func
                },
                g = function(e) {
                    function t(e, n) {
                        var a;
                        return (0, i.default)(this, t), (a = (0, l.default)(this, (0, s.default)(t).call(this, e, n))).state = {
                            percentage: "0%"
                        }, a.handleMouseMove = a.handleMouseMove.bind((0, d.default)(a)), a.handlePercentageChange = a.handlePercentageChange.bind((0, d.default)(a)), a.checkMuted = a.checkMuted.bind((0, d.default)(a)), a.getPercent = a.getPercent.bind((0, d.default)(a)), a.stepForward = a.stepForward.bind((0, d.default)(a)), a.stepBack = a.stepBack.bind((0, d.default)(a)), a.handleFocus = a.handleFocus.bind((0, d.default)(a)), a.handleBlur = a.handleBlur.bind((0, d.default)(a)), a.handleClick = a.handleClick.bind((0, d.default)(a)), a
                    }
                    return (0, c.default)(t, e), (0, u.default)(t, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "getPercent",
                        value: function() {
                            var e = this.props.player;
                            return e.muted ? 0 : e.volume
                        }
                    }, {
                        key: "checkMuted",
                        value: function() {
                            var e = this.props,
                                t = e.player,
                                n = e.actions;
                            t.muted && n.mute(!1)
                        }
                    }, {
                        key: "handleMouseMove",
                        value: function(e) {
                            var t = this.props.actions;
                            this.checkMuted();
                            var n = this.slider.calculateDistance(e);
                            t.changeVolume(n)
                        }
                    }, {
                        key: "stepForward",
                        value: function() {
                            var e = this.props,
                                t = e.player,
                                n = e.actions;
                            this.checkMuted(), n.changeVolume(t.volume + .1)
                        }
                    }, {
                        key: "stepBack",
                        value: function() {
                            var e = this.props,
                                t = e.player,
                                n = e.actions;
                            this.checkMuted(), n.changeVolume(t.volume - .1)
                        }
                    }, {
                        key: "handleFocus",
                        value: function(e) {
                            this.props.onFocus && this.props.onFocus(e)
                        }
                    }, {
                        key: "handleBlur",
                        value: function(e) {
                            this.props.onBlur && this.props.onBlur(e)
                        }
                    }, {
                        key: "handlePercentageChange",
                        value: function(e) {
                            e !== this.state.percentage && this.setState({
                                percentage: e
                            })
                        }
                    }, {
                        key: "handleClick",
                        value: function(e) {
                            e.stopPropagation()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.player,
                                a = t.className,
                                r = (100 * n.volume).toFixed(2);
                            return p.default.createElement(v.default, (0, o.default)({
                                ref: function(t) {
                                    e.slider = t
                                },
                                label: "volume level",
                                valuenow: r,
                                valuetext: "".concat(r, "%"),
                                onMouseMove: this.handleMouseMove,
                                onFocus: this.handleFocus,
                                onBlur: this.handleBlur,
                                onClick: this.handleClick,
                                sliderActive: this.handleFocus,
                                sliderInactive: this.handleBlur,
                                getPercent: this.getPercent,
                                onPercentageChange: this.handlePercentageChange,
                                stepForward: this.stepForward,
                                stepBack: this.stepBack
                            }, this.props, {
                                className: (0, h.default)(a, "video-react-volume-bar video-react-slider-bar")
                            }), p.default.createElement(m.default, this.props))
                        }
                    }]), t
                }(p.Component);
            g.propTypes = y, g.displayName = "VolumeBar";
            var b = g;
            t.default = b
        },
        1237: function(e, t, n) {
            "use strict";
            var a = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n(1)),
                o = a(n(0)),
                i = a(n(16)),
                u = {
                    percentage: r.default.string,
                    vertical: r.default.bool,
                    className: r.default.string
                };

            function l(e) {
                var t = e.percentage,
                    n = e.vertical,
                    a = e.className,
                    r = {};
                return n ? r.height = t : r.width = t, o.default.createElement("div", {
                    className: (0, i.default)(a, "video-react-volume-level"),
                    style: r
                }, o.default.createElement("span", {
                    className: "video-react-control-text"
                }))
            }
            l.propTypes = u, l.defaultProps = {
                percentage: "100%",
                vertical: !1
            }, l.displayName = "VolumeLevel";
            var s = l;
            t.default = s
        },
        1238: function(e, t, n) {
            "use strict";
            var a = n(841),
                r = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n(840)),
                i = r(n(269)),
                u = r(n(842)),
                l = r(n(843)),
                s = r(n(31)),
                d = r(n(844)),
                c = r(n(1)),
                f = a(n(0)),
                p = {
                    children: c.default.any
                },
                h = function(e) {
                    function t(e, n) {
                        var a;
                        return (0, o.default)(this, t), (a = (0, u.default)(this, (0, l.default)(t).call(this, e, n))).handleClick = a.handleClick.bind((0, s.default)(a)), a
                    }
                    return (0, d.default)(t, e), (0, i.default)(t, [{
                        key: "handleClick",
                        value: function(e) {
                            e.preventDefault()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return f.default.createElement("div", {
                                className: "video-react-menu video-react-lock-showing",
                                role: "presentation",
                                onClick: this.handleClick
                            }, f.default.createElement("ul", {
                                className: "video-react-menu-content"
                            }, this.props.children))
                        }
                    }]), t
                }(f.Component);
            t.default = h, h.propTypes = p, h.displayName = "Menu"
        },
        1239: function(e, t, n) {
            "use strict";
            var a = n(841),
                r = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n(840)),
                i = r(n(269)),
                u = r(n(842)),
                l = r(n(843)),
                s = r(n(31)),
                d = r(n(844)),
                c = r(n(1)),
                f = a(n(0)),
                p = r(n(16)),
                h = {
                    item: c.default.object,
                    index: c.default.number,
                    activateIndex: c.default.number,
                    onSelectItem: c.default.func
                },
                v = function(e) {
                    function t(e, n) {
                        var a;
                        return (0, o.default)(this, t), (a = (0, u.default)(this, (0, l.default)(t).call(this, e, n))).handleClick = a.handleClick.bind((0, s.default)(a)), a
                    }
                    return (0, d.default)(t, e), (0, i.default)(t, [{
                        key: "handleClick",
                        value: function() {
                            var e = this.props,
                                t = e.index;
                            (0, e.onSelectItem)(t)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.item,
                                n = e.index,
                                a = e.activateIndex;
                            return f.default.createElement("li", {
                                className: (0, p.default)({
                                    "video-react-menu-item": !0,
                                    "video-react-selected": n === a
                                }),
                                role: "menuitem",
                                onClick: this.handleClick
                            }, t.label, f.default.createElement("span", {
                                className: "video-react-control-text"
                            }))
                        }
                    }]), t
                }(f.Component);
            t.default = v, v.propTypes = h, v.displayName = "MenuItem"
        },
        1240: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IS_IOS = t.IS_IPOD = t.IS_IPHONE = t.IS_IPAD = void 0;
            var a = "undefined" !== typeof window && window.navigator ? window.navigator.userAgent : "",
                r = /iPad/i.test(a);
            t.IS_IPAD = r;
            var o = /iPhone/i.test(a) && !r;
            t.IS_IPHONE = o;
            var i = /iPod/i.test(a);
            t.IS_IPOD = i;
            var u = o || r || i;
            t.IS_IOS = u
        },
        1241: function(e, t, n) {
            "use strict";
            var a = n(841),
                r = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n(840)),
                i = r(n(269)),
                u = r(n(842)),
                l = r(n(843)),
                s = r(n(844)),
                d = a(n(0)),
                c = r(n(939)),
                f = n(862),
                p = function(e) {
                    function t(e, n) {
                        var a;
                        return (0, o.default)(this, t), a = (0, u.default)(this, (0, l.default)(t).call(this, e, n)), (0, f.deprecatedWarning)("PlaybackRate", "PlaybackRateMenuButton"), a
                    }
                    return (0, s.default)(t, e), (0, i.default)(t, [{
                        key: "render",
                        value: function() {
                            return d.default.createElement(c.default, this.props)
                        }
                    }]), t
                }(d.Component);
            t.default = p, p.displayName = "PlaybackRate"
        },
        1242: function(e, t, n) {
            "use strict";
            var a = n(841),
                r = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n(840)),
                i = r(n(269)),
                u = r(n(842)),
                l = r(n(843)),
                s = r(n(31)),
                d = r(n(844)),
                c = r(n(1)),
                f = a(n(0)),
                p = r(n(16)),
                h = r(n(940)),
                v = {
                    player: c.default.object,
                    actions: c.default.object,
                    className: c.default.string,
                    offMenuText: c.default.string,
                    showOffMenu: c.default.bool,
                    kinds: c.default.array
                },
                m = function(e) {
                    function t(e, n) {
                        var a;
                        return (0, o.default)(this, t), (a = (0, u.default)(this, (0, l.default)(t).call(this, e, n))).getTextTrackItems = a.getTextTrackItems.bind((0, s.default)(a)), a.updateState = a.updateState.bind((0, s.default)(a)), a.handleSelectItem = a.handleSelectItem.bind((0, s.default)(a)), a.state = a.getTextTrackItems(), a
                    }
                    return (0, d.default)(t, e), (0, i.default)(t, [{
                        key: "componentDidUpdate",
                        value: function() {
                            this.updateState()
                        }
                    }, {
                        key: "getTextTrackItems",
                        value: function() {
                            var e = this.props,
                                t = e.kinds,
                                n = e.player,
                                a = e.offMenuText,
                                r = e.showOffMenu,
                                o = n.textTracks,
                                i = n.activeTextTrack,
                                u = {
                                    items: [],
                                    selectedIndex: 0
                                },
                                l = Array.from(o || []);
                            return 0 === l.length ? u : (r && u.items.push({
                                label: a || "Off",
                                value: null
                            }), l.forEach(function(e) {
                                t.length && !t.includes(e.kind) || u.items.push({
                                    label: e.label,
                                    value: e.language
                                })
                            }), u.selectedIndex = u.items.findIndex(function(e) {
                                return i && i.language === e.value
                            }), -1 === u.selectedIndex && (u.selectedIndex = 0), u)
                        }
                    }, {
                        key: "updateState",
                        value: function() {
                            var e = this.getTextTrackItems();
                            e.selectedIndex === this.state.selectedIndex && this.textTrackItemsAreEqual(e.items, this.state.items) || this.setState(e)
                        }
                    }, {
                        key: "textTrackItemsAreEqual",
                        value: function(e, t) {
                            if (e.length !== t.length) return !1;
                            for (var n = 0; n < e.length; n++)
                                if (!t[n] || e[n].label !== t[n].label || e[n].value !== t[n].value) return !1;
                            return !0
                        }
                    }, {
                        key: "handleSelectItem",
                        value: function(e) {
                            var t = this.props,
                                n = t.player,
                                a = t.actions,
                                r = t.showOffMenu,
                                o = n.textTracks;
                            Array.from(o).forEach(function(t, n) {
                                e === (r ? n + 1 : n) ? (t.mode = "showing", a.activateTextTrack(t)) : t.mode = "hidden"
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.items,
                                n = e.selectedIndex;
                            return f.default.createElement(h.default, {
                                className: (0, p.default)("video-react-closed-caption", this.props.className),
                                onSelectItem: this.handleSelectItem,
                                items: t,
                                selectedIndex: n
                            }, f.default.createElement("span", {
                                className: "video-react-control-text"
                            }, "Closed Caption"))
                        }
                    }]), t
                }(f.Component);
            m.propTypes = v, m.defaultProps = {
                offMenuText: "Off",
                showOffMenu: !0,
                kinds: ["captions", "subtitles"]
            }, m.displayName = "ClosedCaptionButton";
            var y = m;
            t.default = y
        },
        1243: function(e, t, n) {
            var a = n(222),
                r = n(905),
                o = n(429),
                i = n(1244),
                u = n(1245),
                l = n(441),
                s = n(277),
                d = n(1246),
                c = n(1247),
                f = n(457),
                p = n(1248),
                h = n(280),
                v = n(1249),
                m = n(1250),
                y = n(443),
                g = n(66),
                b = n(172),
                k = n(1254),
                C = n(67),
                E = n(1256),
                P = n(217),
                T = n(278),
                w = 1,
                S = 2,
                N = 4,
                M = "[object Arguments]",
                x = "[object Function]",
                O = "[object GeneratorFunction]",
                j = "[object Object]",
                A = {};
            A[M] = A["[object Array]"] = A["[object ArrayBuffer]"] = A["[object DataView]"] = A["[object Boolean]"] = A["[object Date]"] = A["[object Float32Array]"] = A["[object Float64Array]"] = A["[object Int8Array]"] = A["[object Int16Array]"] = A["[object Int32Array]"] = A["[object Map]"] = A["[object Number]"] = A[j] = A["[object RegExp]"] = A["[object Set]"] = A["[object String]"] = A["[object Symbol]"] = A["[object Uint8Array]"] = A["[object Uint8ClampedArray]"] = A["[object Uint16Array]"] = A["[object Uint32Array]"] = !0, A["[object Error]"] = A[x] = A["[object WeakMap]"] = !1, e.exports = function e(t, n, R, I, _, D) {
                var U, F = n & w,
                    L = n & S,
                    B = n & N;
                if (R && (U = _ ? R(t, I, _, D) : R(t)), void 0 !== U) return U;
                if (!C(t)) return t;
                var V = g(t);
                if (V) {
                    if (U = v(t), !F) return s(t, U)
                } else {
                    var H = h(t),
                        K = H == x || H == O;
                    if (b(t)) return l(t, F);
                    if (H == j || H == M || K && !_) {
                        if (U = L || K ? {} : y(t), !F) return L ? c(t, u(U, t)) : d(t, i(U, t))
                    } else {
                        if (!A[H]) return _ ? t : {};
                        U = m(t, H, F)
                    }
                }
                D || (D = new a);
                var z = D.get(t);
                if (z) return z;
                D.set(t, U), E(t) ? t.forEach(function(a) {
                    U.add(e(a, n, R, a, t, D))
                }) : k(t) && t.forEach(function(a, r) {
                    U.set(r, e(a, n, R, r, t, D))
                });
                var G = V ? void 0 : (B ? L ? p : f : L ? T : P)(t);
                return r(G || t, function(a, r) {
                    G && (a = t[r = a]), o(U, r, e(a, n, R, r, t, D))
                }), U
            }
        },
        1244: function(e, t, n) {
            var a = n(421),
                r = n(217);
            e.exports = function(e, t) {
                return e && a(t, r(t), e)
            }
        },
        1245: function(e, t, n) {
            var a = n(421),
                r = n(278);
            e.exports = function(e, t) {
                return e && a(t, r(t), e)
            }
        },
        1246: function(e, t, n) {
            var a = n(421),
                r = n(435);
            e.exports = function(e, t) {
                return a(e, r(e), t)
            }
        },
        1247: function(e, t, n) {
            var a = n(421),
                r = n(1054);
            e.exports = function(e, t) {
                return a(e, r(e), t)
            }
        },
        1248: function(e, t, n) {
            var a = n(458),
                r = n(1054),
                o = n(278);
            e.exports = function(e) {
                return a(e, o, r)
            }
        },
        1249: function(e, t) {
            var n = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                var t = e.length,
                    a = new e.constructor(t);
                return t && "string" == typeof e[0] && n.call(e, "index") && (a.index = e.index, a.input = e.input), a
            }
        },
        1250: function(e, t, n) {
            var a = n(426),
                r = n(1251),
                o = n(1252),
                i = n(1253),
                u = n(442),
                l = "[object Boolean]",
                s = "[object Date]",
                d = "[object Map]",
                c = "[object Number]",
                f = "[object RegExp]",
                p = "[object Set]",
                h = "[object String]",
                v = "[object Symbol]",
                m = "[object ArrayBuffer]",
                y = "[object DataView]",
                g = "[object Float32Array]",
                b = "[object Float64Array]",
                k = "[object Int8Array]",
                C = "[object Int16Array]",
                E = "[object Int32Array]",
                P = "[object Uint8Array]",
                T = "[object Uint8ClampedArray]",
                w = "[object Uint16Array]",
                S = "[object Uint32Array]";
            e.exports = function(e, t, n) {
                var N = e.constructor;
                switch (t) {
                    case m:
                        return a(e);
                    case l:
                    case s:
                        return new N(+e);
                    case y:
                        return r(e, n);
                    case g:
                    case b:
                    case k:
                    case C:
                    case E:
                    case P:
                    case T:
                    case w:
                    case S:
                        return u(e, n);
                    case d:
                        return new N;
                    case c:
                    case h:
                        return new N(e);
                    case f:
                        return o(e);
                    case p:
                        return new N;
                    case v:
                        return i(e)
                }
            }
        },
        1251: function(e, t, n) {
            var a = n(426);
            e.exports = function(e, t) {
                var n = t ? a(e.buffer) : e.buffer;
                return new e.constructor(n, e.byteOffset, e.byteLength)
            }
        },
        1252: function(e, t) {
            var n = /\w*$/;
            e.exports = function(e) {
                var t = new e.constructor(e.source, n.exec(e));
                return t.lastIndex = e.lastIndex, t
            }
        },
        1253: function(e, t, n) {
            var a = n(170),
                r = a ? a.prototype : void 0,
                o = r ? r.valueOf : void 0;
            e.exports = function(e) {
                return o ? Object(o.call(e)) : {}
            }
        },
        1254: function(e, t, n) {
            var a = n(1255),
                r = n(427),
                o = n(428),
                i = o && o.isMap,
                u = i ? r(i) : a;
            e.exports = u
        },
        1255: function(e, t, n) {
            var a = n(280),
                r = n(92),
                o = "[object Map]";
            e.exports = function(e) {
                return r(e) && a(e) == o
            }
        },
        1256: function(e, t, n) {
            var a = n(1257),
                r = n(427),
                o = n(428),
                i = o && o.isSet,
                u = i ? r(i) : a;
            e.exports = u
        },
        1257: function(e, t, n) {
            var a = n(280),
                r = n(92),
                o = "[object Set]";
            e.exports = function(e) {
                return r(e) && a(e) == o
            }
        },
        1466: function(e, t, n) {
            "use strict";
            var a = n(11),
                r = n(20),
                o = n(17),
                i = n(16),
                u = n.n(i),
                l = n(0),
                s = n.n(l),
                d = n(1),
                c = n.n(d),
                f = n(193),
                p = n.n(f),
                h = n(10),
                v = {
                    id: p()(c.a.oneOfType([c.a.string, c.a.number])),
                    placement: c.a.oneOf(["top", "right", "bottom", "left"]),
                    positionTop: c.a.oneOfType([c.a.number, c.a.string]),
                    positionLeft: c.a.oneOfType([c.a.number, c.a.string]),
                    arrowOffsetTop: c.a.oneOfType([c.a.number, c.a.string]),
                    arrowOffsetLeft: c.a.oneOfType([c.a.number, c.a.string]),
                    title: c.a.node
                },
                m = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return Object(o.a)(t, e), t.prototype.render = function() {
                        var e, t = this.props,
                            n = t.placement,
                            o = t.positionTop,
                            i = t.positionLeft,
                            l = t.arrowOffsetTop,
                            d = t.arrowOffsetLeft,
                            c = t.title,
                            f = t.className,
                            p = t.style,
                            v = t.children,
                            m = Object(r.a)(t, ["placement", "positionTop", "positionLeft", "arrowOffsetTop", "arrowOffsetLeft", "title", "className", "style", "children"]),
                            y = Object(h.f)(m),
                            g = y[0],
                            b = y[1],
                            k = Object(a.a)({}, Object(h.d)(g), ((e = {})[n] = !0, e)),
                            C = Object(a.a)({
                                display: "block",
                                top: o,
                                left: i
                            }, p),
                            E = {
                                top: l,
                                left: d
                            };
                        return s.a.createElement("div", Object(a.a)({}, b, {
                            role: "tooltip",
                            className: u()(f, k),
                            style: C
                        }), s.a.createElement("div", {
                            className: "arrow",
                            style: E
                        }), c && s.a.createElement("h3", {
                            className: Object(h.e)(g, "title")
                        }, c), s.a.createElement("div", {
                            className: Object(h.e)(g, "content")
                        }, v))
                    }, t
                }(s.a.Component);
            m.propTypes = v, m.defaultProps = {
                placement: "right"
            }, t.a = Object(h.a)("popover", m)
        },
        1485: function(e, t, n) {
            "use strict";
            var a, r = new Uint8Array(16);
            var o = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
            for (var i = function(e) {
                return "string" === typeof e && o.test(e)
            }, u = [], l = 0; l < 256; ++l) u.push((l + 256).toString(16).substr(1));
            var s = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = (u[e[t + 0]] + u[e[t + 1]] + u[e[t + 2]] + u[e[t + 3]] + "-" + u[e[t + 4]] + u[e[t + 5]] + "-" + u[e[t + 6]] + u[e[t + 7]] + "-" + u[e[t + 8]] + u[e[t + 9]] + "-" + u[e[t + 10]] + u[e[t + 11]] + u[e[t + 12]] + u[e[t + 13]] + u[e[t + 14]] + u[e[t + 15]]).toLowerCase();
                if (!i(n)) throw TypeError("Stringified UUID is invalid");
                return n
            };
            t.a = function(e, t, n) {
                var o = (e = e || {}).random || (e.rng || function() {
                    if (!a && !(a = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                    return a(r)
                })();
                if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, t) {
                    n = n || 0;
                    for (var i = 0; i < 16; ++i) t[n + i] = o[i];
                    return t
                }
                return s(o)
            }
        },
        840: function(e, t) {
            e.exports = function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
        },
        841: function(e, t, n) {
            var a = n(1024);

            function r() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return r = function() {
                    return e
                }, e
            }
            e.exports = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== a(e) && "function" !== typeof e) return {
                    default: e
                };
                var t = r();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if (Object.prototype.hasOwnProperty.call(e, i)) {
                        var u = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                        u && (u.get || u.set) ? Object.defineProperty(n, i, u) : n[i] = e[i]
                    } return n.default = e, t && t.set(e, n), n
            }
        },
        842: function(e, t, n) {
            var a = n(1024),
                r = n(31);
            e.exports = function(e, t) {
                return !t || "object" !== a(t) && "function" !== typeof t ? r(e) : t
            }
        },
        843: function(e, t) {
            function n(t) {
                return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, n(t)
            }
            e.exports = n
        },
        844: function(e, t, n) {
            var a = n(475);
            e.exports = function(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && a(e, t)
            }
        },
        858: function(e, t, n) {
            "use strict";
            var a, r, o, i = n(888),
                u = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";

            function l() {
                o = !1
            }

            function s(e) {
                if (e) {
                    if (e !== a) {
                        if (e.length !== u.length) throw new Error("Custom alphabet for shortid must be " + u.length + " unique characters. You submitted " + e.length + " characters: " + e);
                        var t = e.split("").filter(function(e, t, n) {
                            return t !== n.lastIndexOf(e)
                        });
                        if (t.length) throw new Error("Custom alphabet for shortid must be " + u.length + " unique characters. These characters were not unique: " + t.join(", "));
                        a = e, l()
                    }
                } else a !== u && (a = u, l())
            }

            function d() {
                return o || (o = function() {
                    a || s(u);
                    for (var e, t = a.split(""), n = [], r = i.nextValue(); t.length > 0;) r = i.nextValue(), e = Math.floor(r * t.length), n.push(t.splice(e, 1)[0]);
                    return n.join("")
                }())
            }
            e.exports = {
                get: function() {
                    return a || u
                },
                characters: function(e) {
                    return s(e), a
                },
                seed: function(e) {
                    i.seed(e), r !== e && (l(), r = e)
                },
                lookup: function(e) {
                    return d()[e]
                },
                shuffled: d
            }
        },
        861: function(e, t, n) {
            "use strict";
            e.exports = n(887)
        },
        862: function(e, t, n) {
            "use strict";
            var a = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.formatTime = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
                    n = Math.floor(e % 60),
                    a = Math.floor(e / 60 % 60),
                    r = Math.floor(e / 3600),
                    o = Math.floor(t / 60 % 60),
                    i = Math.floor(t / 3600);
                (l(e) || e === 1 / 0) && (r = "-", a = "-", n = "-");
                return r = r > 0 || i > 0 ? "".concat(r, ":") : "", a = "".concat((r || o >= 10) && a < 10 ? "0".concat(a) : a, ":"), n = n < 10 ? "0".concat(n) : n, r + a + n
            }, t.isVideoChild = function(e) {
                if (e.props && e.props.isVideoChild) return !0;
                return "source" === e.type || "track" === e.type
            }, t.mergeAndSortChildren = function(e, t, n) {
                var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                    r = u.default.Children.toArray(t),
                    l = (n.order, (0, i.default)(n, ["order"]));
                return r.filter(function(e) {
                    return !e.props.disabled
                }).concat(e.filter(function(e) {
                    return !s(r, function(t) {
                        return d(t, e)
                    })
                })).map(function(t) {
                    var n = s(e, function(e) {
                            return d(e, t)
                        }),
                        a = n ? n.props : {},
                        r = (0, o.default)({}, l, a, t.props),
                        i = u.default.cloneElement(t, r, t.props.children);
                    return i
                }).sort(function(e, t) {
                    return (e.props.order || a) - (t.props.order || a)
                })
            }, t.deprecatedWarning = function(e, t) {
                console.warn("WARNING: ".concat(e, " will be deprecated soon! Please use ").concat(t, " instead."))
            }, t.throttle = function(e, t) {
                var n = arguments,
                    a = !1;
                return function() {
                    a || (e.apply(void 0, (0, r.default)(n)), a = !0, setTimeout(function() {
                        a = !1
                    }, t))
                }
            }, t.mediaProperties = void 0;
            var r = a(n(1031)),
                o = a(n(869)),
                i = a(n(936)),
                u = a(n(0)),
                l = Number.isNaN || function(e) {
                    return e !== e
                };
            var s = function(e, t) {
                    return e.filter(t)[0]
                },
                d = function(e, t) {
                    var n = e.type,
                        a = t.type;
                    return "string" === typeof n || "string" === typeof a ? n === a : "function" === typeof n && "function" === typeof a && n.displayName === a.displayName
                };
            t.mediaProperties = ["error", "src", "srcObject", "currentSrc", "crossOrigin", "networkState", "preload", "buffered", "readyState", "seeking", "currentTime", "duration", "paused", "defaultPlaybackRate", "playbackRate", "played", "seekable", "ended", "autoplay", "loop", "mediaGroup", "controller", "controls", "volume", "muted", "defaultMuted", "audioTracks", "videoTracks", "textTracks", "width", "height", "videoWidth", "videoHeight", "poster"]
        },
        869: function(e, t, n) {
            var a = n(47);
            e.exports = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? Object(arguments[t]) : {},
                        r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        a(e, t, n[t])
                    })
                }
                return e
            }
        },
        887: function(e, t, n) {
            "use strict";
            var a = n(858),
                r = n(889),
                o = n(893),
                i = n(894) || 0;

            function u() {
                return r(i)
            }
            e.exports = u, e.exports.generate = u, e.exports.seed = function(t) {
                return a.seed(t), e.exports
            }, e.exports.worker = function(t) {
                return i = t, e.exports
            }, e.exports.characters = function(e) {
                return void 0 !== e && a.characters(e), a.shuffled()
            }, e.exports.isValid = o
        },
        888: function(e, t, n) {
            "use strict";
            var a = 1;
            e.exports = {
                nextValue: function() {
                    return (a = (9301 * a + 49297) % 233280) / 233280
                },
                seed: function(e) {
                    a = e
                }
            }
        },
        889: function(e, t, n) {
            "use strict";
            var a, r, o = n(890),
                i = (n(858), 1567752802062),
                u = 7;
            e.exports = function(e) {
                var t = "",
                    n = Math.floor(.001 * (Date.now() - i));
                return n === r ? a++ : (a = 0, r = n), t += o(u), t += o(e), a > 0 && (t += o(a)), t += o(n)
            }
        },
        890: function(e, t, n) {
            "use strict";
            var a = n(858),
                r = n(891),
                o = n(892);
            e.exports = function(e) {
                for (var t, n = 0, i = ""; !t;) i += o(r, a.get(), 1), t = e < Math.pow(16, n + 1), n++;
                return i
            }
        },
        891: function(e, t, n) {
            "use strict";
            var a, r = "object" === typeof window && (window.crypto || window.msCrypto);
            a = r && r.getRandomValues ? function(e) {
                return r.getRandomValues(new Uint8Array(e))
            } : function(e) {
                for (var t = [], n = 0; n < e; n++) t.push(Math.floor(256 * Math.random()));
                return t
            }, e.exports = a
        },
        892: function(e, t) {
            e.exports = function(e, t, n) {
                for (var a = (2 << Math.log(t.length - 1) / Math.LN2) - 1, r = -~(1.6 * a * n / t.length), o = "";;)
                    for (var i = e(r), u = r; u--;)
                        if ((o += t[i[u] & a] || "").length === +n) return o
            }
        },
        893: function(e, t, n) {
            "use strict";
            var a = n(858);
            e.exports = function(e) {
                return !(!e || "string" !== typeof e || e.length < 6) && !new RegExp("[^" + a.get().replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&") + "]").test(e)
            }
        },
        894: function(e, t, n) {
            "use strict";
            e.exports = 0
        },
        902: function(e, t, n) {
            "use strict";
            var a = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.handleFullscreenChange = function(e) {
                return {
                    type: i,
                    isFullscreen: e
                }
            }, t.activate = function(e) {
                return {
                    type: u,
                    activity: e
                }
            }, t.userActivate = function(e) {
                return {
                    type: l,
                    activity: e
                }
            }, t.play = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    action: "play",
                    source: ""
                };
                return this.video.play(), {
                    type: o,
                    operation: e
                }
            }, t.pause = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    action: "pause",
                    source: ""
                };
                return this.video.pause(), {
                    type: o,
                    operation: e
                }
            }, t.togglePlay = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    action: "toggle-play",
                    source: ""
                };
                return this.video.togglePlay(), {
                    type: o,
                    operation: e
                }
            }, t.seek = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    action: "seek",
                    source: ""
                };
                return this.video.seek(e), {
                    type: o,
                    operation: t
                }
            }, t.forward = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    action: "forward-".concat(e),
                    source: ""
                };
                return this.video.forward(e), {
                    type: o,
                    operation: t
                }
            }, t.replay = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    action: "replay-".concat(e),
                    source: ""
                };
                return this.video.replay(e), {
                    type: o,
                    operation: t
                }
            }, t.changeRate = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    action: "change-rate",
                    source: ""
                };
                return this.video.playbackRate = e, {
                    type: o,
                    operation: t
                }
            }, t.changeVolume = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        action: "change-volume",
                        source: ""
                    },
                    n = e;
                e < 0 && (n = 0);
                e > 1 && (n = 1);
                return this.video.volume = n, {
                    type: o,
                    operation: t
                }
            }, t.mute = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    action: e ? "muted" : "unmuted",
                    source: ""
                };
                return this.video.muted = e, {
                    type: o,
                    operation: t
                }
            }, t.toggleFullscreen = function(e) {
                if (r.default.enabled) return r.default.isFullscreen ? r.default.exit() : r.default.request(this.rootElement), {
                    type: o,
                    operation: {
                        action: "toggle-fullscreen",
                        source: ""
                    }
                };
                return {
                    type: i,
                    isFullscreen: !e.isFullscreen
                }
            }, t.USER_ACTIVATE = t.PLAYER_ACTIVATE = t.FULLSCREEN_CHANGE = t.OPERATE = void 0;
            var r = a(n(1026)),
                o = "video-react/OPERATE";
            t.OPERATE = o;
            var i = "video-react/FULLSCREEN_CHANGE";
            t.FULLSCREEN_CHANGE = i;
            var u = "video-react/PLAYER_ACTIVATE";
            t.PLAYER_ACTIVATE = u;
            var l = "video-react/USER_ACTIVATE";
            t.USER_ACTIVATE = l
        },
        903: function(e, t, n) {
            "use strict";

            function a(e) {
                var t;
                if (e.getBoundingClientRect && e.parentNode && (t = e.getBoundingClientRect()), !t) return {
                    left: 0,
                    top: 0
                };
                var n = document,
                    a = n.body,
                    r = n.documentElement,
                    o = r.clientLeft || a.clientLeft || 0,
                    i = window.pageXOffset || a.scrollLeft,
                    u = t.left + i - o,
                    l = r.clientTop || a.clientTop || 0,
                    s = window.pageYOffset || a.scrollTop,
                    d = t.top + s - l;
                return {
                    left: Math.round(u),
                    top: Math.round(d)
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.findElPosition = a, t.getPointerPosition = function(e, t) {
                var n = {},
                    r = a(e),
                    o = e.offsetWidth,
                    i = e.offsetHeight,
                    u = r.top,
                    l = r.left,
                    s = t.pageY,
                    d = t.pageX;
                t.changedTouches && (d = t.changedTouches[0].pageX, s = t.changedTouches[0].pageY);
                return n.y = Math.max(0, Math.min(1, (u - s + i) / i)), n.x = Math.max(0, Math.min(1, (d - l) / o)), n
            }, t.blurNode = function(e) {
                e && e.blur && e.blur()
            }, t.focusNode = function(e) {
                e && e.focus && e.focus()
            }, t.hasClass = function(e, t) {
                for (var n = e.className.split(" "), a = 0; a < n.length; a++)
                    if (n[a].toLowerCase() === t.toLowerCase()) return !0;
                return !1
            }
        },
        905: function(e, t) {
            e.exports = function(e, t) {
                for (var n = -1, a = null == e ? 0 : e.length; ++n < a && !1 !== t(e[n], n, e););
                return e
            }
        },
        912: function(e, t, n) {
            "use strict";
            var a = n(43),
                r = n(62);
            var o = n(70),
                i = n(0),
                u = (n(1), !!document.documentElement.currentStyle),
                l = {
                    "min-height": "0",
                    "max-height": "none",
                    height: "0",
                    visibility: "hidden",
                    overflow: "hidden",
                    position: "absolute",
                    "z-index": "-1000",
                    top: "0",
                    right: "0"
                },
                s = ["letter-spacing", "line-height", "font-family", "font-weight", "font-size", "font-style", "tab-size", "text-rendering", "text-transform", "width", "text-indent", "padding-top", "padding-right", "padding-bottom", "padding-left", "border-top-width", "border-right-width", "border-bottom-width", "border-left-width", "box-sizing"],
                d = {},
                c = document.createElement("textarea"),
                f = function(e) {
                    Object.keys(l).forEach(function(t) {
                        e.style.setProperty(t, l[t], "important")
                    })
                };

            function p(e, t, n, a, r) {
                void 0 === n && (n = !1), void 0 === a && (a = null), void 0 === r && (r = null), null === c.parentNode && document.body.appendChild(c);
                var o = function(e, t, n) {
                    void 0 === n && (n = !1);
                    if (n && d[t]) return d[t];
                    var a = window.getComputedStyle(e);
                    if (null === a) return null;
                    var r = s.reduce(function(e, t) {
                            return e[t] = a.getPropertyValue(t), e
                        }, {}),
                        o = r["box-sizing"];
                    if ("" === o) return null;
                    u && "border-box" === o && (r.width = parseFloat(r.width) + parseFloat(a["border-right-width"]) + parseFloat(a["border-left-width"]) + parseFloat(a["padding-right"]) + parseFloat(a["padding-left"]) + "px");
                    var i = parseFloat(r["padding-bottom"]) + parseFloat(r["padding-top"]),
                        l = parseFloat(r["border-bottom-width"]) + parseFloat(r["border-top-width"]),
                        c = {
                            sizingStyle: r,
                            paddingSize: i,
                            borderSize: l,
                            boxSizing: o
                        };
                    n && (d[t] = c);
                    return c
                }(e, t, n);
                if (null === o) return null;
                var i = o.paddingSize,
                    l = o.borderSize,
                    p = o.boxSizing,
                    h = o.sizingStyle;
                Object.keys(h).forEach(function(e) {
                    c.style[e] = h[e]
                }), f(c), c.value = e.value || e.placeholder || "x";
                var v = -1 / 0,
                    m = 1 / 0,
                    y = c.scrollHeight;
                "border-box" === p ? y += l : "content-box" === p && (y -= i), c.value = "x";
                var g = c.scrollHeight - i,
                    b = Math.floor(y / g);
                return null !== a && (v = g * a, "border-box" === p && (v = v + i + l), y = Math.max(v, y)), null !== r && (m = g * r, "border-box" === p && (m = m + i + l), y = Math.min(m, y)), {
                    height: y,
                    minHeight: v,
                    maxHeight: m,
                    rowCount: Math.floor(y / g),
                    valueRowCount: b
                }
            }
            c.setAttribute("tab-index", "-1"), c.setAttribute("aria-hidden", "true"), f(c);
            var h = function() {},
                v = 0,
                m = function(e) {
                    function t(t) {
                        var n;
                        return (n = e.call(this, t) || this)._onRef = function(e) {
                            n._ref = e;
                            var t = n.props.inputRef;
                            "function" !== typeof t ? t.current = e : t(e)
                        }, n._onChange = function(e) {
                            n._controlled || n._resizeComponent(), n.props.onChange(e, function(e) {
                                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e
                            }(n))
                        }, n._resizeComponent = function(e) {
                            void 0 === e && (e = h);
                            var t = p(n._ref, n._uid, n.props.useCacheForDOMMeasurements, n.props.minRows, n.props.maxRows);
                            if (null !== t) {
                                var a = t.height,
                                    r = t.minHeight,
                                    o = t.maxHeight,
                                    i = t.rowCount,
                                    u = t.valueRowCount;
                                n.rowCount = i, n.valueRowCount = u, n.state.height === a && n.state.minHeight === r && n.state.maxHeight === o ? e() : n.setState({
                                    height: a,
                                    minHeight: r,
                                    maxHeight: o
                                }, e)
                            } else e()
                        }, n.state = {
                            height: t.style && t.style.height || 0,
                            minHeight: -1 / 0,
                            maxHeight: 1 / 0
                        }, n._uid = v++, n._controlled = void 0 !== t.value, n._resizeLock = !1, n
                    }
                    Object(o.a)(t, e);
                    var n = t.prototype;
                    return n.render = function() {
                        var e = this.props,
                            t = (e.inputRef, e.maxRows, e.minRows, e.onHeightChange, e.useCacheForDOMMeasurements, Object(r.a)(e, ["inputRef", "maxRows", "minRows", "onHeightChange", "useCacheForDOMMeasurements"]));
                        return t.style = Object(a.a)({}, t.style, {
                            height: this.state.height
                        }), Math.max(t.style.maxHeight || 1 / 0, this.state.maxHeight) < this.state.height && (t.style.overflow = "hidden"), Object(i.createElement)("textarea", Object(a.a)({}, t, {
                            onChange: this._onChange,
                            ref: this._onRef
                        }))
                    }, n.componentDidMount = function() {
                        var e = this;
                        this._resizeComponent(), this._resizeListener = function() {
                            e._resizeLock || (e._resizeLock = !0, e._resizeComponent(function() {
                                e._resizeLock = !1
                            }))
                        }, window.addEventListener("resize", this._resizeListener)
                    }, n.componentDidUpdate = function(e, t) {
                        e !== this.props && this._resizeComponent(), this.state.height !== t.height && this.props.onHeightChange(this.state.height, this)
                    }, n.componentWillUnmount = function() {
                        var e;
                        window.removeEventListener("resize", this._resizeListener), e = this._uid, delete d[e]
                    }, t
                }(i.Component);
            m.defaultProps = {
                inputRef: h,
                onChange: h,
                onHeightChange: h,
                useCacheForDOMMeasurements: !1
            };
            t.a = m
        },
        936: function(e, t, n) {
            var a = n(76);
            e.exports = function(e, t) {
                if (null == e) return {};
                var n, r, o = a(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }
        },
        937: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.handleLoadStart = function(e) {
                return {
                    type: a,
                    videoProps: e
                }
            }, t.handleCanPlay = function(e) {
                return {
                    type: r,
                    videoProps: e
                }
            }, t.handleWaiting = function(e) {
                return {
                    type: o,
                    videoProps: e
                }
            }, t.handleCanPlayThrough = function(e) {
                return {
                    type: i,
                    videoProps: e
                }
            }, t.handlePlaying = function(e) {
                return {
                    type: u,
                    videoProps: e
                }
            }, t.handlePlay = function(e) {
                return {
                    type: l,
                    videoProps: e
                }
            }, t.handlePause = function(e) {
                return {
                    type: s,
                    videoProps: e
                }
            }, t.handleEnd = function(e) {
                return {
                    type: d,
                    videoProps: e
                }
            }, t.handleSeeking = function(e) {
                return {
                    type: c,
                    videoProps: e
                }
            }, t.handleSeeked = function(e) {
                return {
                    type: f,
                    videoProps: e
                }
            }, t.handleDurationChange = function(e) {
                return {
                    type: v,
                    videoProps: e
                }
            }, t.handleTimeUpdate = function(e) {
                return {
                    type: m,
                    videoProps: e
                }
            }, t.handleVolumeChange = function(e) {
                return {
                    type: y,
                    videoProps: e
                }
            }, t.handleProgressChange = function(e) {
                return {
                    type: g,
                    videoProps: e
                }
            }, t.handleRateChange = function(e) {
                return {
                    type: b,
                    videoProps: e
                }
            }, t.handleSuspend = function(e) {
                return {
                    type: k,
                    videoProps: e
                }
            }, t.handleAbort = function(e) {
                return {
                    type: C,
                    videoProps: e
                }
            }, t.handleEmptied = function(e) {
                return {
                    type: E,
                    videoProps: e
                }
            }, t.handleStalled = function(e) {
                return {
                    type: P,
                    videoProps: e
                }
            }, t.handleLoadedMetaData = function(e) {
                return {
                    type: T,
                    videoProps: e
                }
            }, t.handleLoadedData = function(e) {
                return {
                    type: w,
                    videoProps: e
                }
            }, t.handleResize = function(e) {
                return {
                    type: S,
                    videoProps: e
                }
            }, t.handleError = function(e) {
                return {
                    type: N,
                    videoProps: e
                }
            }, t.handleSeekingTime = function(e) {
                return {
                    type: p,
                    time: e
                }
            }, t.handleEndSeeking = function(e) {
                return {
                    type: h,
                    time: e
                }
            }, t.activateTextTrack = function(e) {
                return {
                    type: M,
                    textTrack: e
                }
            }, t.ACTIVATE_TEXT_TRACK = t.ERROR = t.RESIZE = t.LOADED_DATA = t.LOADED_META_DATA = t.STALLED = t.EMPTIED = t.ABORT = t.SUSPEND = t.RATE_CHANGE = t.PROGRESS_CHANGE = t.VOLUME_CHANGE = t.TIME_UPDATE = t.DURATION_CHANGE = t.END_SEEKING = t.SEEKING_TIME = t.SEEKED = t.SEEKING = t.END = t.PAUSE = t.PLAY = t.PLAYING = t.CAN_PLAY_THROUGH = t.WAITING = t.CAN_PLAY = t.LOAD_START = void 0;
            var a = "video-react/LOAD_START";
            t.LOAD_START = a;
            var r = "video-react/CAN_PLAY";
            t.CAN_PLAY = r;
            var o = "video-react/WAITING";
            t.WAITING = o;
            var i = "video-react/CAN_PLAY_THROUGH";
            t.CAN_PLAY_THROUGH = i;
            var u = "video-react/PLAYING";
            t.PLAYING = u;
            var l = "video-react/PLAY";
            t.PLAY = l;
            var s = "video-react/PAUSE";
            t.PAUSE = s;
            var d = "video-react/END";
            t.END = d;
            var c = "video-react/SEEKING";
            t.SEEKING = c;
            var f = "video-react/SEEKED";
            t.SEEKED = f;
            var p = "video-react/SEEKING_TIME";
            t.SEEKING_TIME = p;
            var h = "video-react/END_SEEKING";
            t.END_SEEKING = h;
            var v = "video-react/DURATION_CHANGE";
            t.DURATION_CHANGE = v;
            var m = "video-react/TIME_UPDATE";
            t.TIME_UPDATE = m;
            var y = "video-react/VOLUME_CHANGE";
            t.VOLUME_CHANGE = y;
            var g = "video-react/PROGRESS_CHANGE";
            t.PROGRESS_CHANGE = g;
            var b = "video-react/RATE_CHANGE";
            t.RATE_CHANGE = b;
            var k = "video-react/SUSPEND";
            t.SUSPEND = k;
            var C = "video-react/ABORT";
            t.ABORT = C;
            var E = "video-react/EMPTIED";
            t.EMPTIED = E;
            var P = "video-react/STALLED";
            t.STALLED = P;
            var T = "video-react/LOADED_META_DATA";
            t.LOADED_META_DATA = T;
            var w = "video-react/LOADED_DATA";
            t.LOADED_DATA = w;
            var S = "video-react/RESIZE";
            t.RESIZE = S;
            var N = "video-react/ERROR";
            t.ERROR = N;
            var M = "video-react/ACTIVATE_TEXT_TRACK";
            t.ACTIVATE_TEXT_TRACK = M
        },
        938: function(e, t, n) {
            "use strict";
            var a = n(841),
                r = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n(840)),
                i = r(n(269)),
                u = r(n(842)),
                l = r(n(843)),
                s = r(n(31)),
                d = r(n(844)),
                c = r(n(1)),
                f = a(n(0)),
                p = r(n(16)),
                h = a(n(903)),
                v = {
                    className: c.default.string,
                    onMouseDown: c.default.func,
                    onMouseMove: c.default.func,
                    stepForward: c.default.func,
                    stepBack: c.default.func,
                    sliderActive: c.default.func,
                    sliderInactive: c.default.func,
                    onMouseUp: c.default.func,
                    onFocus: c.default.func,
                    onBlur: c.default.func,
                    onClick: c.default.func,
                    getPercent: c.default.func,
                    vertical: c.default.bool,
                    children: c.default.node,
                    label: c.default.string,
                    valuenow: c.default.string,
                    valuetext: c.default.string
                },
                m = function(e) {
                    function t(e, n) {
                        var a;
                        return (0, o.default)(this, t), (a = (0, u.default)(this, (0, l.default)(t).call(this, e, n))).handleMouseDown = a.handleMouseDown.bind((0, s.default)(a)), a.handleMouseMove = a.handleMouseMove.bind((0, s.default)(a)), a.handleMouseUp = a.handleMouseUp.bind((0, s.default)(a)), a.handleFocus = a.handleFocus.bind((0, s.default)(a)), a.handleBlur = a.handleBlur.bind((0, s.default)(a)), a.handleClick = a.handleClick.bind((0, s.default)(a)), a.handleKeyPress = a.handleKeyPress.bind((0, s.default)(a)), a.stepForward = a.stepForward.bind((0, s.default)(a)), a.stepBack = a.stepBack.bind((0, s.default)(a)), a.calculateDistance = a.calculateDistance.bind((0, s.default)(a)), a.getProgress = a.getProgress.bind((0, s.default)(a)), a.renderChildren = a.renderChildren.bind((0, s.default)(a)), a.state = {
                            active: !1
                        }, a
                    }
                    return (0, d.default)(t, e), (0, i.default)(t, [{
                        key: "componentWillUnmount",
                        value: function() {
                            document.removeEventListener("mousemove", this.handleMouseMove, !0), document.removeEventListener("mouseup", this.handleMouseUp, !0), document.removeEventListener("touchmove", this.handleMouseMove, !0), document.removeEventListener("touchend", this.handleMouseUp, !0), document.removeEventListener("keydown", this.handleKeyPress, !0)
                        }
                    }, {
                        key: "getProgress",
                        value: function() {
                            var e = this.props.getPercent;
                            if (!e) return 0;
                            var t = e();
                            return ("number" !== typeof t || t < 0 || t === 1 / 0) && (t = 0), t
                        }
                    }, {
                        key: "handleMouseDown",
                        value: function(e) {
                            var t = this.props.onMouseDown;
                            document.addEventListener("mousemove", this.handleMouseMove, !0), document.addEventListener("mouseup", this.handleMouseUp, !0), document.addEventListener("touchmove", this.handleMouseMove, !0), document.addEventListener("touchend", this.handleMouseUp, !0), this.setState({
                                active: !0
                            }), this.props.sliderActive && this.props.sliderActive(e), this.handleMouseMove(e), t && t(e)
                        }
                    }, {
                        key: "handleMouseMove",
                        value: function(e) {
                            var t = this.props.onMouseMove;
                            t && t(e)
                        }
                    }, {
                        key: "handleMouseUp",
                        value: function(e) {
                            e.preventDefault();
                            var t = this.props.onMouseUp;
                            document.removeEventListener("mousemove", this.handleMouseMove, !0), document.removeEventListener("mouseup", this.handleMouseUp, !0), document.removeEventListener("touchmove", this.handleMouseMove, !0), document.removeEventListener("touchend", this.handleMouseUp, !0), this.setState({
                                active: !1
                            }), this.props.sliderInactive && this.props.sliderInactive(e), t && t(e)
                        }
                    }, {
                        key: "handleFocus",
                        value: function(e) {
                            document.addEventListener("keydown", this.handleKeyPress, !0), this.props.onFocus && this.props.onFocus(e)
                        }
                    }, {
                        key: "handleBlur",
                        value: function(e) {
                            document.removeEventListener("keydown", this.handleKeyPress, !0), this.props.onBlur && this.props.onBlur(e)
                        }
                    }, {
                        key: "handleClick",
                        value: function(e) {
                            e.preventDefault(), this.props.onClick && this.props.onClick(e)
                        }
                    }, {
                        key: "handleKeyPress",
                        value: function(e) {
                            37 === e.which || 40 === e.which ? (e.preventDefault(), e.stopPropagation(), this.stepBack()) : 38 !== e.which && 39 !== e.which || (e.preventDefault(), e.stopPropagation(), this.stepForward())
                        }
                    }, {
                        key: "stepForward",
                        value: function() {
                            this.props.stepForward && this.props.stepForward()
                        }
                    }, {
                        key: "stepBack",
                        value: function() {
                            this.props.stepBack && this.props.stepBack()
                        }
                    }, {
                        key: "calculateDistance",
                        value: function(e) {
                            var t = this.slider,
                                n = h.getPointerPosition(t, e);
                            return this.props.vertical ? n.y : n.x
                        }
                    }, {
                        key: "renderChildren",
                        value: function() {
                            var e = this.getProgress(),
                                t = "".concat((100 * e).toFixed(2), "%");
                            return f.default.Children.map(this.props.children, function(n) {
                                return f.default.cloneElement(n, {
                                    progress: e,
                                    percentage: t
                                })
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.vertical,
                                a = t.label,
                                r = t.valuenow,
                                o = t.valuetext;
                            return f.default.createElement("div", {
                                className: (0, p.default)(this.props.className, {
                                    "video-react-slider-vertical": n,
                                    "video-react-slider-horizontal": !n,
                                    "video-react-sliding": this.state.active
                                }, "video-react-slider"),
                                ref: function(t) {
                                    e.slider = t
                                },
                                tabIndex: "0",
                                role: "slider",
                                onMouseDown: this.handleMouseDown,
                                onTouchStart: this.handleMouseDown,
                                onFocus: this.handleFocus,
                                onBlur: this.handleBlur,
                                onClick: this.handleClick,
                                "aria-label": a || "",
                                "aria-valuenow": r || "",
                                "aria-valuetext": o || "",
                                "aria-valuemin": 0,
                                "aria-valuemax": 100
                            }, this.renderChildren())
                        }
                    }]), t
                }(f.Component);
            t.default = m, m.propTypes = v, m.displayName = "Slider"
        },
        939: function(e, t, n) {
            "use strict";
            var a = n(841),
                r = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n(840)),
                i = r(n(269)),
                u = r(n(842)),
                l = r(n(843)),
                s = r(n(31)),
                d = r(n(844)),
                c = r(n(1)),
                f = a(n(0)),
                p = r(n(16)),
                h = r(n(940)),
                v = {
                    player: c.default.object,
                    actions: c.default.object,
                    rates: c.default.array,
                    className: c.default.string
                },
                m = function(e) {
                    function t(e, n) {
                        var a;
                        return (0, o.default)(this, t), (a = (0, u.default)(this, (0, l.default)(t).call(this, e, n))).handleSelectItem = a.handleSelectItem.bind((0, s.default)(a)), a
                    }
                    return (0, d.default)(t, e), (0, i.default)(t, [{
                        key: "handleSelectItem",
                        value: function(e) {
                            var t = this.props,
                                n = t.rates,
                                a = t.actions;
                            e >= 0 && e < n.length && a.changeRate(n[e])
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.rates,
                                n = e.player,
                                a = t.map(function(e) {
                                    return {
                                        label: "".concat(e, "x"),
                                        value: e
                                    }
                                }),
                                r = t.indexOf(n.playbackRate) || 0;
                            return f.default.createElement(h.default, {
                                className: (0, p.default)("video-react-playback-rate", this.props.className),
                                onSelectItem: this.handleSelectItem,
                                items: a,
                                selectedIndex: r
                            }, f.default.createElement("span", {
                                className: "video-react-control-text"
                            }, "Playback Rate"), f.default.createElement("div", {
                                className: "video-react-playback-rate-value"
                            }, "".concat(n.playbackRate.toFixed(2), "x")))
                        }
                    }]), t
                }(f.Component);
            m.propTypes = v, m.defaultProps = {
                rates: [2, 1.5, 1.25, 1, .5, .25]
            }, m.displayName = "PlaybackRateMenuButton";
            var y = m;
            t.default = y
        },
        940: function(e, t, n) {
            "use strict";
            var a = n(841),
                r = n(60);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n(840)),
                i = r(n(269)),
                u = r(n(842)),
                l = r(n(843)),
                s = r(n(31)),
                d = r(n(844)),
                c = r(n(1)),
                f = a(n(0)),
                p = r(n(16)),
                h = r(n(1238)),
                v = r(n(1239)),
                m = r(n(1051)),
                y = {
                    inline: c.default.bool,
                    items: c.default.array,
                    className: c.default.string,
                    onSelectItem: c.default.func,
                    children: c.default.any,
                    selectedIndex: c.default.number
                },
                g = function(e) {
                    function t(e, n) {
                        var a;
                        return (0, o.default)(this, t), (a = (0, u.default)(this, (0, l.default)(t).call(this, e, n))).state = {
                            active: !1,
                            activateIndex: e.selectedIndex || 0
                        }, a.commitSelection = a.commitSelection.bind((0, s.default)(a)), a.activateMenuItem = a.activateMenuItem.bind((0, s.default)(a)), a.handleClick = a.handleClick.bind((0, s.default)(a)), a.renderMenu = a.renderMenu.bind((0, s.default)(a)), a.handleFocus = a.handleFocus.bind((0, s.default)(a)), a.handleBlur = a.handleBlur.bind((0, s.default)(a)), a.handleUpArrow = a.handleUpArrow.bind((0, s.default)(a)), a.handleDownArrow = a.handleDownArrow.bind((0, s.default)(a)), a.handleEscape = a.handleEscape.bind((0, s.default)(a)), a.handleReturn = a.handleReturn.bind((0, s.default)(a)), a.handleTab = a.handleTab.bind((0, s.default)(a)), a.handleKeyPress = a.handleKeyPress.bind((0, s.default)(a)), a.handleSelectItem = a.handleSelectItem.bind((0, s.default)(a)), a.handleIndexChange = a.handleIndexChange.bind((0, s.default)(a)), a
                    }
                    return (0, d.default)(t, e), (0, i.default)(t, [{
                        key: "componentDidUpdate",
                        value: function(e) {
                            e.selectedIndex !== this.props.selectedIndex && this.activateMenuItem(this.props.selectedIndex)
                        }
                    }, {
                        key: "commitSelection",
                        value: function(e) {
                            this.setState({
                                activateIndex: e
                            }), this.handleIndexChange(e)
                        }
                    }, {
                        key: "activateMenuItem",
                        value: function(e) {
                            this.setState({
                                activateIndex: e
                            }), this.handleIndexChange(e)
                        }
                    }, {
                        key: "handleIndexChange",
                        value: function(e) {
                            (0, this.props.onSelectItem)(e)
                        }
                    }, {
                        key: "handleClick",
                        value: function() {
                            this.setState(function(e) {
                                return {
                                    active: !e.active
                                }
                            })
                        }
                    }, {
                        key: "handleFocus",
                        value: function() {
                            document.addEventListener("keydown", this.handleKeyPress)
                        }
                    }, {
                        key: "handleBlur",
                        value: function() {
                            this.setState({
                                active: !1
                            }), document.removeEventListener("keydown", this.handleKeyPress)
                        }
                    }, {
                        key: "handleUpArrow",
                        value: function(e) {
                            var t = this.props.items;
                            if (this.state.active) {
                                e.preventDefault();
                                var n = this.state.activateIndex - 1;
                                n < 0 && (n = t.length ? t.length - 1 : 0), this.activateMenuItem(n)
                            }
                        }
                    }, {
                        key: "handleDownArrow",
                        value: function(e) {
                            var t = this.props.items;
                            if (this.state.active) {
                                e.preventDefault();
                                var n = this.state.activateIndex + 1;
                                n >= t.length && (n = 0), this.activateMenuItem(n)
                            }
                        }
                    }, {
                        key: "handleTab",
                        value: function(e) {
                            this.state.active && (e.preventDefault(), this.commitSelection(this.state.activateIndex))
                        }
                    }, {
                        key: "handleReturn",
                        value: function(e) {
                            e.preventDefault(), this.state.active ? this.commitSelection(this.state.activateIndex) : this.setState({
                                active: !0
                            })
                        }
                    }, {
                        key: "handleEscape",
                        value: function() {
                            this.setState({
                                active: !1,
                                activateIndex: 0
                            })
                        }
                    }, {
                        key: "handleKeyPress",
                        value: function(e) {
                            27 === e.which ? this.handleEscape(e) : 9 === e.which ? this.handleTab(e) : 13 === e.which ? this.handleReturn(e) : 38 === e.which ? this.handleUpArrow(e) : 40 === e.which && this.handleDownArrow(e)
                        }
                    }, {
                        key: "handleSelectItem",
                        value: function(e) {
                            this.commitSelection(e)
                        }
                    }, {
                        key: "renderMenu",
                        value: function() {
                            var e = this;
                            if (!this.state.active) return null;
                            var t = this.props.items;
                            return f.default.createElement(h.default, null, t.map(function(t, n) {
                                return f.default.createElement(v.default, {
                                    item: t,
                                    index: n,
                                    onSelectItem: e.handleSelectItem,
                                    activateIndex: e.state.activateIndex,
                                    key: "item-".concat(n++)
                                })
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.inline,
                                a = t.className;
                            return f.default.createElement(m.default, {
                                className: (0, p.default)(a, {
                                    "video-react-menu-button-inline": !!n,
                                    "video-react-menu-button-popup": !n,
                                    "video-react-menu-button-active": this.state.active
                                }, "video-react-control video-react-button video-react-menu-button"),
                                role: "button",
                                tabIndex: "0",
                                ref: function(t) {
                                    e.menuButton = t
                                },
                                onClick: this.handleClick,
                                onFocus: this.handleFocus,
                                onBlur: this.handleBlur
                            }, this.props.children, this.renderMenu())
                        }
                    }]), t
                }(f.Component);
            t.default = g, g.propTypes = y, g.displayName = "MenuButton"
        }
    }
]);
