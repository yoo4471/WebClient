! function() {
    var e = webpackJsonp([106], {
        0: function(e, t, n) {
            e.exports = n(2053)
        },
        858: function(e, t, n) {
            var o = function(e, t, n, o, r, i, a, s) {
                if (!e) {
                    var u;
                    if (void 0 === t) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        var l = [n, o, r, i, a, s],
                            c = 0;
                        u = new Error(t.replace(/%s/g, function() {
                            return l[c++]
                        })), u.name = "Invariant Violation"
                    }
                    throw u.framesToPop = 1, u
                }
            };
            e.exports = o
        },
        1586: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(38),
                r = babelHelpers.interopRequireDefault(o),
                i = function() {
                    function e() {
                        babelHelpers.classCallCheck(this, e)
                    }
                    return babelHelpers.createClass(e, null, [{
                        key: "trackImpression",
                        value: function() {
                            function e(e, t, n) {
                                r.default.logEvent({
                                    event_name: "support_phone_numbers",
                                    event_data: {
                                        operation: "impression",
                                        page: e,
                                        section: t,
                                        numbers: n
                                    }
                                })
                            }
                            return e
                        }()
                    }]), e
                }();
            t.default = i, e.exports = t.default
        },
        2053: function(e, t, n) {
            var o = n(10),
                r = babelHelpers.interopRequireDefault(o),
                i = n(11),
                a = babelHelpers.interopRequireDefault(i),
                s = n(5),
                u = babelHelpers.interopRequireDefault(s),
                l = n(2),
                c = babelHelpers.interopRequireDefault(l),
                p = n(2054),
                f = babelHelpers.interopRequireDefault(p),
                d = n(1871);
            (0, d.beloHeader)(window.location.hostname);
            var h = (0, u.default)("#js-header-help-menu");
            h.length > 0 && a.default.render(r.default.createElement(f.default, {
                isSimpleHeader: (0, u.default)("body").hasClass("simple-header"),
                instantHelp: c.default.get("instant-help"),
                canonicalUrl: h.find(".js-help-toggle").attr("href")
            }), h[0])
        },
        2054: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(5),
                r = babelHelpers.interopRequireDefault(o),
                i = n(14),
                a = babelHelpers.interopRequireDefault(i),
                s = n(15),
                u = babelHelpers.interopRequireDefault(s),
                l = n(13),
                c = babelHelpers.interopRequireDefault(l),
                p = n(54),
                f = babelHelpers.interopRequireDefault(p),
                d = n(144),
                h = babelHelpers.interopRequireDefault(d),
                y = n(45),
                b = n(10),
                v = babelHelpers.interopRequireDefault(b),
                m = n(38),
                _ = babelHelpers.interopRequireDefault(m),
                g = n(89),
                E = babelHelpers.interopRequireDefault(g),
                P = n(30),
                T = babelHelpers.interopRequireDefault(P),
                S = n(2055),
                C = babelHelpers.interopRequireDefault(S),
                w = n(2059),
                k = babelHelpers.interopRequireDefault(w),
                D = n(1586),
                O = babelHelpers.interopRequireDefault(D),
                H = n(2080),
                I = babelHelpers.interopRequireDefault(H),
                M = {
                    isSimpleHeader: y.Types.bool.isRequired,
                    canonicalUrl: y.Types.string.isRequired,
                    instantHelp: y.Types.any,
                    useNavigationLink: y.Types.bool
                },
                A = {
                    useNavigationLink: !1
                },
                N = ".regular-header .comp",
                L = function(e) {
                    function t(e) {
                        babelHelpers.classCallCheck(this, t);
                        var n = babelHelpers.possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                        return n.timeEntered = 0, n.loadedForLocation = null, n.showCommunityCenterLink = a.default.current().can_see_community_links, n.state = {
                            instantHelp: null,
                            shouldLogCommunityCenterImpression: n.showCommunityCenterLink,
                            shouldLogFieldGuidePhoneImpression: !0,
                            shouldLogFooterPhoneImpression: !0,
                            isSticky: !1,
                            showProminentHelpCenterLinks: null
                        }, n.loadPanelData = n.loadPanelData.bind(n), n.onTriggerClick = n.onTriggerClick.bind(n), n.onClosePanelClick = n.onClosePanelClick.bind(n), n.onDocumentClick = n.onDocumentClick.bind(n), n.inExperiment = null, n
                    }
                    return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
                        key: "componentDidMount",
                        value: function() {
                            function e() {
                                this.displayInstantHelp()
                            }
                            return e
                        }()
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            function e() {
                                this.cleanUpAfterStickyState()
                            }
                            return e
                        }()
                    }, {
                        key: "onTriggerClick",
                        value: function() {
                            function e(e) {
                                return _.default.queueEvent({
                                    event_name: "px_help_button",
                                    event_data: {
                                        section: "field_guide",
                                        operation: "click",
                                        datadog_key: "px_help_button.click",
                                        datadog_tags: "section:field_guide"
                                    }
                                }), this.loadPanelData(), null === this.state.showHelpFeedbackLink && this.setState({
                                    showHelpFeedbackLink: this.isInSubmitFeedbackLinkExperiment()
                                }), null === this.state.showProminentHelpCenterLinks && this.setState({
                                    showProminentHelpCenterLinks: this.isInShowProminentHelpCenterLinksExp()
                                }), this.state.isSticky ? this.setNonsticky() : this.setSticky(), e.preventDefault(), !1
                            }
                            return e
                        }()
                    }, {
                        key: "onClosePanelClick",
                        value: function() {
                            function e() {
                                this.setNonsticky()
                            }
                            return e
                        }()
                    }, {
                        key: "onDocumentClick",
                        value: function() {
                            function e(e) {
                                if (this.state.isSticky) {
                                    var t = (0, r.default)(e.target);
                                    t.closest(".field-guide.drop-down-menu").length || t.is(".field-guide.drop-down-menu") || t.closest(".help-trigger-wrapper").length || this.setNonsticky()
                                }
                            }
                            return e
                        }()
                    }, {
                        key: "setSticky",
                        value: function() {
                            function e() {
                                (0, r.default)(document).on("click", this.onDocumentClick), (0, r.default)(N).addClass("no-hover"), this.setState({
                                    isSticky: !0
                                }), this.logPanelImpressions()
                            }
                            return e
                        }()
                    }, {
                        key: "setNonsticky",
                        value: function() {
                            function e() {
                                this.cleanUpAfterStickyState(), this.state.isSticky && this.timeEntered && k.default.logPanelViewTime(Date.now() - this.timeEntered), this.setState({
                                    isSticky: !1
                                })
                            }
                            return e
                        }()
                    }, {
                        key: "cleanUpAfterStickyState",
                        value: function() {
                            function e() {
                                (0, r.default)(document).off("click", this.onDocumentClick), (0, r.default)(N).removeClass("no-hover")
                            }
                            return e
                        }()
                    }, {
                        key: "isInShowProminentHelpCenterLinksExp",
                        value: function() {
                            function e() {
                                return this.state.showProminentHelpCenterLinks ? this.state.showProminentHelpCenterLinks : !!T.default.getBootstrap("px_field_guide_to_hc_accessibility") && u.default.deliverExperiment("px_field_guide_to_hc_accessibility", {
                                    show_prominent_hc_links: function() {
                                        function e() {
                                            return !0
                                        }
                                        return e
                                    }(),
                                    control: function() {
                                        function e() {
                                            return !1
                                        }
                                        return e
                                    }(),
                                    treatment_unknown: function() {
                                        function e() {
                                            return !1
                                        }
                                        return e
                                    }()
                                })
                            }
                            return e
                        }()
                    }, {
                        key: "displayInstantHelp",
                        value: function() {
                            function e() {
                                var e = this,
                                    t = window.document.getElementById("instant-help-footer");
                                t && ("ES" === h.default.tld_country() ? u.default.deliverExperiment("px.instant_help_v2", {
                                    hide_phone: function() {
                                        function e() {
                                            return !1
                                        }
                                        return e
                                    }(),
                                    show_phone: function() {
                                        function n() {
                                            (0, r.default)(t).removeClass("hide"), e.setState({
                                                instantHelp: e.props.instantHelp
                                            }), e.logSupportPhoneImpression("shouldLogFooterPhoneImpression", "footer", (0, r.default)(t).data("instant-help"))
                                        }
                                        return n
                                    }(),
                                    treatment_unknown: function() {
                                        function e() {
                                            return !1
                                        }
                                        return e
                                    }(),
                                    not_in_experiment: function() {
                                        function e() {
                                            return !1
                                        }
                                        return e
                                    }()
                                }) : "CN" === h.default.country() && "zh" === h.default.locale() ? u.default.deliverExperiment("instant_help_web_china_v2", {
                                    hide_phone: function() {
                                        function e() {
                                            return !1
                                        }
                                        return e
                                    }(),
                                    show_phone: function() {
                                        function t() {
                                            e.setState({
                                                instantHelp: e.props.instantHelp
                                            })
                                        }
                                        return t
                                    }(),
                                    treatment_unknown: function() {
                                        function e() {
                                            return !1
                                        }
                                        return e
                                    }()
                                }) : "IN" === h.default.country() && "en-IN" === h.default.locale() && u.default.deliverExperiment("instant_help_web_india", {
                                    hide_phone: function() {
                                        function e() {
                                            return !1
                                        }
                                        return e
                                    }(),
                                    show_phone: function() {
                                        function n() {
                                            (0, r.default)(t).removeClass("hide"), e.setState({
                                                instantHelp: e.props.instantHelp
                                            }), e.logSupportPhoneImpression("shouldLogFooterPhoneImpression", "footer", (0, r.default)(t).data("instant-help"))
                                        }
                                        return n
                                    }(),
                                    treatment_unknown: function() {
                                        function e() {
                                            return !1
                                        }
                                        return e
                                    }()
                                }))
                            }
                            return e
                        }()
                    }, {
                        key: "logPanelImpressions",
                        value: function() {
                            function e() {
                                this.timeEntered = Date.now(), this.logCommunityCenterImpression(), this.state.instantHelp && this.logSupportPhoneImpression("shouldLogFieldGuidePhoneImpression", "field_guide", this.state.instantHelp)
                            }
                            return e
                        }()
                    }, {
                        key: "loadPanelData",
                        value: function() {
                            function e() {
                                this.shouldFetchData() && (this.loadedForLocation = window.location.href, k.default.fetchData(), a.default.isLoggedIn() && T.default.getBootstrap("px_user_issue_prediction_in_field_guide_dark_launch") && k.default.getUserIssuePrediction("field_guide"))
                            }
                            return e
                        }()
                    }, {
                        key: "logCommunityCenterImpression",
                        value: function() {
                            function e() {
                                this.state.shouldLogCommunityCenterImpression && (_.default.logEvent({
                                    event_name: "community_center_link",
                                    event_data: {
                                        operation: "impression",
                                        page: "nav_bar",
                                        section: "help_dropdown"
                                    }
                                }), this.setState({
                                    shouldLogCommunityCenterImpression: !1
                                }))
                            }
                            return e
                        }()
                    }, {
                        key: "logSupportPhoneImpression",
                        value: function() {
                            function e(e, t, n) {
                                this.state[e] && (O.default.trackImpression("all", t, [n]), this.setState(babelHelpers.defineProperty({}, e, !1)))
                            }
                            return e
                        }()
                    }, {
                        key: "shouldFetchData",
                        value: function() {
                            function e() {
                                return this.loadedForLocation !== window.location.href
                            }
                            return e
                        }()
                    }, {
                        key: "render",
                        value: function() {
                            function e() {
                                var e = (0, E.default)("header-icon", {
                                        "icon-lifesaver-alt-white": this.props.isSimpleHeader,
                                        "icon-lifesaver-alt-gray": !this.props.isSimpleHeader
                                    }),
                                    t = (0, E.default)("field-guide panel help-side-panel", {
                                        sticky: this.state.isSticky,
                                        articleAccordion_flat: this.state.showProminentHelpCenterLinks
                                    }),
                                    n = v.default.createElement("div", {
                                        className: t
                                    }, v.default.createElement(C.default, {
                                        instantHelp: this.state.instantHelp,
                                        captureScrolling: this.state.isSticky,
                                        onClosePanelClick: this.onClosePanelClick,
                                        showCommunityCenterLink: this.showCommunityCenterLink,
                                        showHelpFeedbackLink: this.state.showHelpFeedbackLink,
                                        showProminentHelpCenterLinks: this.state.showProminentHelpCenterLinks
                                    }));
                                return this.props.useNavigationLink ? v.default.createElement("div", {
                                    className: "help-trigger-wrapper"
                                }, v.default.createElement(I.default, {
                                    name: "help",
                                    href: this.props.canonicalUrl,
                                    onPress: this.onTriggerClick
                                }, v.default.createElement(f.default, {
                                    k: "help"
                                })), this.state.isSticky && n) : v.default.createElement("div", {
                                    className: "help-trigger-wrapper"
                                }, v.default.createElement("div", {
                                    className: "comp pull-right no-border no-hover"
                                }, v.default.createElement("a", {
                                    className: "hdr-btn js-help-toggle link-reset needsclick",
                                    onClick: this.onTriggerClick,
                                    href: this.props.canonicalUrl
                                }, v.default.createElement("span", {
                                    className: "margin-right--tiny"
                                }, c.default.t("help")), "혻", v.default.createElement("i", {
                                    className: e
                                }))), n)
                            }
                            return e
                        }()
                    }]), t
                }(v.default.Component);
            L.propTypes = M, L.defaultProps = A, t.default = L, e.exports = t.default
        },
        2055: function(e, t, n) {
            function o() {
                return new Promise(function(e) {
                    n.e(107, function(t) {
                        var o = n(2056);
                        e(o.default || o)
                    })
                })
            }

            function r(e) {
                return a.default.createElement(u.default, babelHelpers.extends({
                    loader: o
                }, e))
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = r;
            var i = n(10),
                a = babelHelpers.interopRequireDefault(i),
                s = n(268),
                u = babelHelpers.interopRequireDefault(s);
            e.exports = t.default
        },
        2059: function(e, t, n) {
            var o = n(31),
                r = babelHelpers.interopRequireDefault(o),
                i = n(5),
                a = babelHelpers.interopRequireDefault(i),
                s = n(2060),
                u = babelHelpers.interopRequireDefault(s),
                l = function() {
                    function e() {
                        babelHelpers.classCallCheck(this, e), this.generateActions("setLoadingArticle", "setLoadingTopic", "resetCurrentArticle", "logHelpCenterClick", "addTopicTitle", "logPanelViewTime", "logSearchUsage", "fetchDataSucceeded", "fetchDataFailed", "getUserIssuePrediction")
                    }
                    return babelHelpers.createClass(e, [{
                        key: "fetchData",
                        value: function() {
                            function e() {
                                var e = this;
                                this.actions.setLoadingTopic(!0), a.default.get("/help/dropdown", {
                                    window_location: window.location.href
                                }).done(function(t) {
                                    e.actions.fetchDataSucceeded(t)
                                }).fail(function() {
                                    e.actions.fetchDataFailed()
                                }).always(function() {
                                    e.actions.setLoadingTopic(!1)
                                })
                            }
                            return e
                        }()
                    }, {
                        key: "fetchArticle",
                        value: function() {
                            function e(e) {
                                var t = this;
                                this.actions.setLoadingArticle(!0), r.default.get("/v1/help/faq/" + String(e)).done(function(e) {
                                    t.dispatch(e.faq)
                                }).fail(function() {
                                    t.dispatch({
                                        id: e
                                    })
                                }).always(function() {
                                    t.actions.setLoadingArticle(!1)
                                })
                            }
                            return e
                        }()
                    }, {
                        key: "showArticle",
                        value: function() {
                            function e(e) {
                                this.dispatch({
                                    id: e,
                                    isInitial: !1
                                })
                            }
                            return e
                        }()
                    }]), e
                }();
            e.exports = u.default.createActions(l)
        },
        2060: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(19),
                r = babelHelpers.interopRequireDefault(o);
            t.default = new r.default, e.exports = t.default
        },
        2080: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(2081),
                r = n(2102),
                i = n(2103),
                a = n(2104),
                s = babelHelpers.interopRequireDefault(a),
                u = function(e, t) {
                    return {
                        floating: e.isFloating,
                        focused: e.activeNavigationItem === t.name,
                        light: e.activeTheme === r.THEMES.MonoLight,
                        dark: e.activeTheme === r.THEMES.MonoDark,
                        hasNotification: e.navigationItemsWithNotifications.has(t.name)
                    }
                },
                l = function(e) {
                    return {
                        onActive: function() {
                            function t(t) {
                                e((0, i.selectNavigationItem)(t))
                            }
                            return t
                        }(),
                        onOutsideClick: function() {
                            function t() {
                                e((0, i.deselectNavigationItem)())
                            }
                            return t
                        }()
                    }
                };
            t.default = (0, o.connect)(u, l)(s.default), e.exports = t.default
        },
        2081: function(e, t, n) {
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.__esModule = !0, t.connect = t.Provider = void 0;
            var r = n(2082),
                i = o(r),
                a = n(2085),
                s = o(a);
            t.Provider = i.default, t.connect = s.default
        },
        2082: function(e, t, n) {
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            t.__esModule = !0, t.default = void 0;
            var s = n(10),
                u = n(2083),
                l = o(u),
                c = n(2084),
                p = (o(c), function(e) {
                    function t(n, o) {
                        r(this, t);
                        var a = i(this, e.call(this, n, o));
                        return a.store = n.store, a
                    }
                    return a(t, e), t.prototype.getChildContext = function() {
                        return {
                            store: this.store
                        }
                    }, t.prototype.render = function() {
                        var e = this.props.children;
                        return s.Children.only(e)
                    }, t
                }(s.Component));
            t.default = p, p.propTypes = {
                store: l.default.isRequired,
                children: s.PropTypes.element.isRequired
            }, p.childContextTypes = {
                store: l.default.isRequired
            }
        },
        2083: function(e, t, n) {
            t.__esModule = !0;
            var o = n(10);
            t.default = o.PropTypes.shape({
                subscribe: o.PropTypes.func.isRequired,
                dispatch: o.PropTypes.func.isRequired,
                getState: o.PropTypes.func.isRequired
            })
        },
        2084: function(e, t) {
            function n(e) {
                "undefined" != typeof console && "function" == typeof console.error && console.error(e);
                try {
                    throw new Error(e)
                } catch (e) {}
            }
            t.__esModule = !0, t.default = n
        },
        2085: function(e, t, n) {
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            function s(e) {
                return e.displayName || e.name || "Component"
            }

            function u(e, t) {
                try {
                    return e.apply(t)
                } catch (e) {
                    return k.value = e, k
                }
            }

            function l(e, t, n) {
                var o = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3],
                    l = Boolean(e),
                    f = e || S,
                    h = void 0;
                h = "function" == typeof t ? t : t ? (0, v.default)(t) : C;
                var b = n || w,
                    m = o.pure,
                    _ = void 0 === m || m,
                    g = o.withRef,
                    P = void 0 !== g && g,
                    O = _ && b !== w,
                    H = D++;
                return function(e) {
                    function t(e, t, n) {
                        var o = b(e, t, n);
                        return o
                    }
                    var n = "Connect(" + s(e) + ")",
                        o = function(o) {
                            function s(e, t) {
                                r(this, s);
                                var a = i(this, o.call(this, e, t));
                                a.version = H, a.store = e.store || t.store, (0, T.default)(a.store, 'Could not find "store" in either the context or ' + ('props of "' + n + '". ') + "Either wrap the root component in a <Provider>, " + ('or explicitly pass "store" as a prop to "' + n + '".'));
                                var u = a.store.getState();
                                return a.state = {
                                    storeState: u
                                }, a.clearCache(), a
                            }
                            return a(s, o), s.prototype.shouldComponentUpdate = function() {
                                return !_ || this.haveOwnPropsChanged || this.hasStoreStateChanged
                            }, s.prototype.computeStateProps = function(e, t) {
                                if (!this.finalMapStateToProps) return this.configureFinalMapState(e, t);
                                var n = e.getState(),
                                    o = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(n, t) : this.finalMapStateToProps(n);
                                return o
                            }, s.prototype.configureFinalMapState = function(e, t) {
                                var n = f(e.getState(), t),
                                    o = "function" == typeof n;
                                return this.finalMapStateToProps = o ? n : f, this.doStatePropsDependOnOwnProps = 1 !== this.finalMapStateToProps.length, o ? this.computeStateProps(e, t) : n
                            }, s.prototype.computeDispatchProps = function(e, t) {
                                if (!this.finalMapDispatchToProps) return this.configureFinalMapDispatch(e, t);
                                var n = e.dispatch,
                                    o = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(n, t) : this.finalMapDispatchToProps(n);
                                return o
                            }, s.prototype.configureFinalMapDispatch = function(e, t) {
                                var n = h(e.dispatch, t),
                                    o = "function" == typeof n;
                                return this.finalMapDispatchToProps = o ? n : h, this.doDispatchPropsDependOnOwnProps = 1 !== this.finalMapDispatchToProps.length, o ? this.computeDispatchProps(e, t) : n
                            }, s.prototype.updateStatePropsIfNeeded = function() {
                                var e = this.computeStateProps(this.store, this.props);
                                return (!this.stateProps || !(0, y.default)(e, this.stateProps)) && (this.stateProps = e, !0)
                            }, s.prototype.updateDispatchPropsIfNeeded = function() {
                                var e = this.computeDispatchProps(this.store, this.props);
                                return (!this.dispatchProps || !(0, y.default)(e, this.dispatchProps)) && (this.dispatchProps = e, !0)
                            }, s.prototype.updateMergedPropsIfNeeded = function() {
                                var e = t(this.stateProps, this.dispatchProps, this.props);
                                return !(this.mergedProps && O && (0, y.default)(e, this.mergedProps)) && (this.mergedProps = e, !0)
                            }, s.prototype.isSubscribed = function() {
                                return "function" == typeof this.unsubscribe
                            }, s.prototype.trySubscribe = function() {
                                l && !this.unsubscribe && (this.unsubscribe = this.store.subscribe(this.handleChange.bind(this)), this.handleChange())
                            }, s.prototype.tryUnsubscribe = function() {
                                this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null)
                            }, s.prototype.componentDidMount = function() {
                                this.trySubscribe()
                            }, s.prototype.componentWillReceiveProps = function(e) {
                                _ && (0, y.default)(e, this.props) || (this.haveOwnPropsChanged = !0)
                            }, s.prototype.componentWillUnmount = function() {
                                this.tryUnsubscribe(), this.clearCache()
                            }, s.prototype.clearCache = function() {
                                this.dispatchProps = null, this.stateProps = null, this.mergedProps = null, this.haveOwnPropsChanged = !0, this.hasStoreStateChanged = !0, this.haveStatePropsBeenPrecalculated = !1, this.statePropsPrecalculationError = null, this.renderedElement = null, this.finalMapDispatchToProps = null, this.finalMapStateToProps = null
                            }, s.prototype.handleChange = function() {
                                if (this.unsubscribe) {
                                    var e = this.store.getState(),
                                        t = this.state.storeState;
                                    if (!_ || t !== e) {
                                        if (_ && !this.doStatePropsDependOnOwnProps) {
                                            var n = u(this.updateStatePropsIfNeeded, this);
                                            if (!n) return;
                                            n === k && (this.statePropsPrecalculationError = k.value), this.haveStatePropsBeenPrecalculated = !0
                                        }
                                        this.hasStoreStateChanged = !0, this.setState({
                                            storeState: e
                                        })
                                    }
                                }
                            }, s.prototype.getWrappedInstance = function() {
                                return (0, T.default)(P, "To access the wrapped instance, you need to specify { withRef: true } as the fourth argument of the connect() call."), this.refs.wrappedInstance
                            }, s.prototype.render = function() {
                                var t = this.haveOwnPropsChanged,
                                    n = this.hasStoreStateChanged,
                                    o = this.haveStatePropsBeenPrecalculated,
                                    r = this.statePropsPrecalculationError,
                                    i = this.renderedElement;
                                if (this.haveOwnPropsChanged = !1, this.hasStoreStateChanged = !1, this.haveStatePropsBeenPrecalculated = !1, this.statePropsPrecalculationError = null, r) throw r;
                                var a = !0,
                                    s = !0;
                                _ && i && (a = n || t && this.doStatePropsDependOnOwnProps, s = t && this.doDispatchPropsDependOnOwnProps);
                                var u = !1,
                                    l = !1;
                                o ? u = !0 : a && (u = this.updateStatePropsIfNeeded()), s && (l = this.updateDispatchPropsIfNeeded());
                                var f = !0;
                                return f = !!(u || l || t) && this.updateMergedPropsIfNeeded(), !f && i ? i : (P ? this.renderedElement = (0, p.createElement)(e, c({}, this.mergedProps, {
                                    ref: "wrappedInstance"
                                })) : this.renderedElement = (0, p.createElement)(e, this.mergedProps), this.renderedElement)
                            }, s
                        }(p.Component);
                    return o.displayName = n, o.WrappedComponent = e, o.contextTypes = {
                        store: d.default
                    }, o.propTypes = {
                        store: d.default
                    }, (0, E.default)(o, e)
                }
            }
            var c = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            };
            t.__esModule = !0, t.default = l;
            var p = n(10),
                f = n(2083),
                d = o(f),
                h = n(2086),
                y = o(h),
                b = n(2087),
                v = o(b),
                m = n(2084),
                _ = (o(m), n(2090)),
                g = (o(_), n(2101)),
                E = o(g),
                P = n(858),
                T = o(P),
                S = function(e) {
                    return {}
                },
                C = function(e) {
                    return {
                        dispatch: e
                    }
                },
                w = function(e, t, n) {
                    return c({}, n, e, t)
                },
                k = {
                    value: null
                },
                D = 0
        },
        2086: function(e, t) {
            function n(e, t) {
                if (e === t) return !0;
                var n = Object.keys(e),
                    o = Object.keys(t);
                if (n.length !== o.length) return !1;
                for (var r = Object.prototype.hasOwnProperty, i = 0; i < n.length; i++)
                    if (!r.call(t, n[i]) || e[n[i]] !== t[n[i]]) return !1;
                return !0
            }
            t.__esModule = !0, t.default = n
        },
        2087: function(e, t, n) {
            function o(e) {
                return function(t) {
                    return (0, r.bindActionCreators)(e, t)
                }
            }
            t.__esModule = !0, t.default = o;
            var r = n(2088)
        },
        2088: function(e, t, n) {
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.__esModule = !0, t.compose = t.applyMiddleware = t.bindActionCreators = t.combineReducers = t.createStore = void 0;
            var r = n(2089),
                i = o(r),
                a = n(2096),
                s = o(a),
                u = n(2098),
                l = o(u),
                c = n(2099),
                p = o(c),
                f = n(2100),
                d = o(f),
                h = n(2097);
            o(h);
            t.createStore = i.default, t.combineReducers = s.default, t.bindActionCreators = l.default, t.applyMiddleware = p.default, t.compose = d.default
        },
        2089: function(e, t, n) {
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function r(e, t, n) {
                function o() {
                    v === b && (v = b.slice())
                }

                function i() {
                    return y
                }

                function s(e) {
                    if ("function" != typeof e) throw new Error("Expected listener to be a function.");
                    var t = !0;
                    return o(), v.push(e),
                        function() {
                            if (t) {
                                t = !1, o();
                                var n = v.indexOf(e);
                                v.splice(n, 1)
                            }
                        }
                }

                function c(e) {
                    if (!(0, a.default)(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                    if ("undefined" == typeof e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                    if (m) throw new Error("Reducers may not dispatch actions.");
                    try {
                        m = !0, y = h(y, e)
                    } finally {
                        m = !1
                    }
                    for (var t = b = v, n = 0; n < t.length; n++) t[n]();
                    return e
                }

                function p(e) {
                    if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
                    h = e, c({
                        type: l.INIT
                    })
                }

                function f() {
                    var e, t = s;
                    return e = {
                        subscribe: function(e) {
                            function n() {
                                e.next && e.next(i())
                            }
                            if ("object" != typeof e) throw new TypeError("Expected the observer to be an object.");
                            n();
                            var o = t(n);
                            return {
                                unsubscribe: o
                            }
                        }
                    }, e[u.default] = function() {
                        return this
                    }, e
                }
                var d;
                if ("function" == typeof t && "undefined" == typeof n && (n = t, t = void 0), "undefined" != typeof n) {
                    if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
                    return n(r)(e, t)
                }
                if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
                var h = e,
                    y = t,
                    b = [],
                    v = b,
                    m = !1;
                return c({
                    type: l.INIT
                }), d = {
                    dispatch: c,
                    subscribe: s,
                    getState: i,
                    replaceReducer: p
                }, d[u.default] = f, d
            }
            t.__esModule = !0, t.ActionTypes = void 0, t.default = r;
            var i = n(2090),
                a = o(i),
                s = n(2094),
                u = o(s),
                l = t.ActionTypes = {
                    INIT: "@@redux/INIT"
                }
        },
        2090: function(e, t, n) {
            function o(e) {
                if (!i(e) || f.call(e) != a) return !1;
                var t = r(e);
                if (null === t) return !0;
                var n = c.call(t, "constructor") && t.constructor;
                return "function" == typeof n && n instanceof n && l.call(n) == p
            }
            var r = n(2091),
                i = n(2093),
                a = "[object Object]",
                s = Function.prototype,
                u = Object.prototype,
                l = s.toString,
                c = u.hasOwnProperty,
                p = l.call(Object),
                f = u.toString;
            e.exports = o
        },
        2091: function(e, t, n) {
            var o = n(2092),
                r = o(Object.getPrototypeOf, Object);
            e.exports = r
        },
        2092: function(e, t) {
            function n(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }
            e.exports = n
        },
        2093: function(e, t) {
            function n(e) {
                return null != e && "object" == typeof e
            }
            e.exports = n
        },
        2094: function(e, t, n) {
            (function(t) {
                e.exports = n(2095)(t || window || this)
            }).call(t, function() {
                return this
            }())
        },
        2095: function(e, t) {
            e.exports = function(e) {
                var t, n = e.Symbol;
                return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"), n.observable = t) : t = "@@observable", t
            }
        },
        2096: function(e, t, n) {
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function r(e, t) {
                var n = t && t.type,
                    o = n && '"' + n.toString() + '"' || "an action";
                return "Given action " + o + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
            }

            function i(e) {
                Object.keys(e).forEach(function(t) {
                    var n = e[t],
                        o = n(void 0, {
                            type: s.ActionTypes.INIT
                        });
                    if ("undefined" == typeof o) throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                    var r = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                    if ("undefined" == typeof n(void 0, {
                            type: r
                        })) throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + s.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
                })
            }

            function a(e) {
                for (var t = Object.keys(e), n = {}, o = 0; o < t.length; o++) {
                    var a = t[o];
                    "function" == typeof e[a] && (n[a] = e[a])
                }
                var s, u = Object.keys(n);
                try {
                    i(n)
                } catch (e) {
                    s = e
                }
                return function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                        t = arguments[1];
                    if (s) throw s;
                    for (var o = !1, i = {}, a = 0; a < u.length; a++) {
                        var l = u[a],
                            c = n[l],
                            p = e[l],
                            f = c(p, t);
                        if ("undefined" == typeof f) {
                            var d = r(l, t);
                            throw new Error(d)
                        }
                        i[l] = f, o = o || f !== p
                    }
                    return o ? i : e
                }
            }
            t.__esModule = !0, t.default = a;
            var s = n(2089),
                u = n(2090),
                l = (o(u), n(2097));
            o(l)
        },
        2097: function(e, t) {
            function n(e) {
                "undefined" != typeof console && "function" == typeof console.error && console.error(e);
                try {
                    throw new Error(e)
                } catch (e) {}
            }
            t.__esModule = !0, t.default = n
        },
        2098: function(e, t) {
            function n(e, t) {
                return function() {
                    return t(e.apply(void 0, arguments))
                }
            }

            function o(e, t) {
                if ("function" == typeof e) return n(e, t);
                if ("object" != typeof e || null === e) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
                for (var o = Object.keys(e), r = {}, i = 0; i < o.length; i++) {
                    var a = o[i],
                        s = e[a];
                    "function" == typeof s && (r[a] = n(s, t))
                }
                return r
            }
            t.__esModule = !0, t.default = o
        },
        2099: function(e, t, n) {
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function r() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return function(e) {
                    return function(n, o, r) {
                        var a = e(n, o, r),
                            u = a.dispatch,
                            l = [],
                            c = {
                                getState: a.getState,
                                dispatch: function(e) {
                                    return u(e)
                                }
                            };
                        return l = t.map(function(e) {
                            return e(c)
                        }), u = s.default.apply(void 0, l)(a.dispatch), i({}, a, {
                            dispatch: u
                        })
                    }
                }
            }
            t.__esModule = !0;
            var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            };
            t.default = r;
            var a = n(2100),
                s = o(a)
        },
        2100: function(e, t) {
            function n() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (0 === t.length) return function(e) {
                    return e
                };
                var o = function() {
                    var e = t[t.length - 1],
                        n = t.slice(0, -1);
                    return {
                        v: function() {
                            return n.reduceRight(function(e, t) {
                                return t(e)
                            }, e.apply(void 0, arguments))
                        }
                    }
                }();
                return "object" == typeof o ? o.v : void 0
            }
            t.__esModule = !0, t.default = n
        },
        2101: function(e, t) {
            var n = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                o = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                r = "function" == typeof Object.getOwnPropertySymbols;
            e.exports = function(e, t, i) {
                if ("string" != typeof t) {
                    var a = Object.getOwnPropertyNames(t);
                    r && (a = a.concat(Object.getOwnPropertySymbols(t)));
                    for (var s = 0; s < a.length; ++s)
                        if (!(n[a[s]] || o[a[s]] || i && i[a[s]])) try {
                            e[a[s]] = t[a[s]]
                        } catch (e) {}
                }
                return e
            }
        },
        2102: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.HEADER_HEIGHT = 64, t.ZINDEX = {
                container: 5,
                flyoutMenu: 10,
                flyoutMenuMask: 15,
                logo: 20
            }, t.THEMES = {
                Default: "default",
                MonoLight: "monoLight",
                MonoDark: "monoDark"
            }, t.NAV_HEIGHT = 41
        },
        2103: function(e, t, n) {
            function o() {
                var e = T.default.current();
                return function(t) {
                    return T.default.fetchProfileImg().then(function(n) {
                        t({
                            type: O,
                            payload: {
                                name: e.name,
                                profilePicUrl: n
                            }
                        })
                    })
                }
            }

            function r() {
                return {
                    type: H
                }
            }

            function i(e) {
                return {
                    type: w,
                    payload: e
                }
            }

            function a() {
                return {
                    type: k
                }
            }

            function s() {
                return {
                    type: C
                }
            }

            function u(e) {
                return function(t) {
                    Object.values(S.THEMES).includes(e) && t({
                        type: D,
                        payload: e
                    })
                }
            }

            function l(e) {
                return {
                    type: I,
                    payload: e
                }
            }

            function c(e) {
                return {
                    type: M,
                    payload: e
                }
            }

            function p() {
                return {
                    type: A
                }
            }

            function f() {
                return {
                    type: N
                }
            }

            function d() {
                return {
                    type: L
                }
            }

            function h() {
                return {
                    type: R
                }
            }

            function y() {
                return {
                    type: x
                }
            }

            function b() {
                return {
                    type: j
                }
            }

            function v(e) {
                return {
                    type: F,
                    payload: e
                }
            }

            function m(e) {
                return {
                    type: U,
                    error: !0,
                    payload: e
                }
            }

            function _() {
                return function(e) {
                    e(b());
                    var t = E.default.getJSON("/global_supply/become_a_host_button_data");
                    return Promise.resolve(t).then(function(t) {
                        e(v(t))
                    }).catch(function(t) {
                        e(m(t))
                    })
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BECOME_HOST_DATA_FAILURE = t.BECOME_HOST_DATA_SUCCESS = t.BECOME_HOST_DATA_REQUEST = t.STICKY_DISABLED = t.STICKY_ENABLED = t.FLOATING_DISABLED = t.FLOATING_ENABLED = t.FLYOUT_MENU_TOGGLED = t.NOTIFICATION_REMOVED = t.NOTIFICATION_SET = t.USER_LOGGED_OUT = t.USER_LOGGED_IN = t.THEME_CHANGED = t.NAVIGATION_ITEM_DESELECTED = t.NAVIGATION_ITEM_SELECTED = t.SEARCH_INPUT_FOCUSED = void 0, t.login = o, t.logout = r, t.selectNavigationItem = i, t.deselectNavigationItem = a, t.focusSearchInput = s, t.changeTheme = u, t.setNotification = l, t.removeNotification = c, t.toggleFlyoutMenu = p, t.enableFloating = f, t.disableFloating = d, t.enableSticky = h, t.disableSticky = y, t.fetchBecomeAHostData = _;
            var g = n(5),
                E = babelHelpers.interopRequireDefault(g),
                P = n(14),
                T = babelHelpers.interopRequireDefault(P),
                S = n(2102),
                C = t.SEARCH_INPUT_FOCUSED = "SEARCH_INPUT_FOCUSED",
                w = t.NAVIGATION_ITEM_SELECTED = "NAVIGATION_ITEM_SELECTED",
                k = t.NAVIGATION_ITEM_DESELECTED = "NAVIGATION_ITEM_DESELECTED",
                D = t.THEME_CHANGED = "THEME_CHANGED",
                O = t.USER_LOGGED_IN = "USER_LOGGED_IN",
                H = t.USER_LOGGED_OUT = "USER_LOGGED_OUT",
                I = t.NOTIFICATION_SET = "NOTIFICATION_SET",
                M = t.NOTIFICATION_REMOVED = "NOTIFICATION_REMOVED",
                A = t.FLYOUT_MENU_TOGGLED = "FLYOUT_MENU_TOGGLED",
                N = t.FLOATING_ENABLED = "FLOATING_ENABLED",
                L = t.FLOATING_DISABLED = "FLOATING_DISABLED",
                R = t.STICKY_ENABLED = "STICKY_ENABLED",
                x = t.STICKY_DISABLED = "STICKY_DISABLED",
                j = t.BECOME_HOST_DATA_REQUEST = "BECOME_HOST_DATA_REQUEST",
                F = t.BECOME_HOST_DATA_SUCCESS = "BECOME_HOST_DATA_SUCCESS",
                U = t.BECOME_HOST_DATA_FAILURE = "BECOME_HOST_DATA_FAILURE"
        },
        2104: function(e, t, n) {
            function o(e) {
                var t = e.menu,
                    n = e.focused;
                return t && n
            }

            function r(e) {
                var t = {};
                return e && Object.entries(e).forEach(function(e) {
                    var n = babelHelpers.slicedToArray(e, 2),
                        o = n[0],
                        r = n[1];
                    t["data-" + String(o)] = r
                }), t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(101),
                a = n(240),
                s = babelHelpers.interopRequireDefault(a),
                u = n(10),
                l = babelHelpers.interopRequireDefault(u),
                c = n(2102),
                p = n(2105),
                f = babelHelpers.interopRequireDefault(p),
                d = n(2106),
                h = babelHelpers.interopRequireDefault(d),
                y = n(1825),
                b = babelHelpers.interopRequireDefault(y),
                v = Object.assign({}, i.withStylesPropTypes, {
                    children: u.PropTypes.node,
                    dataAttrs: u.PropTypes.object,
                    floating: u.PropTypes.bool,
                    focused: u.PropTypes.bool,
                    focusOnHover: u.PropTypes.bool,
                    hasNotification: u.PropTypes.bool,
                    hideMenuCaret: u.PropTypes.bool,
                    href: u.PropTypes.string,
                    light: u.PropTypes.bool,
                    dark: u.PropTypes.bool,
                    menu: u.PropTypes.node,
                    name: u.PropTypes.string.isRequired,
                    onActive: u.PropTypes.func,
                    onPress: u.PropTypes.func,
                    onHover: u.PropTypes.func,
                    onOutsideClick: u.PropTypes.func
                }),
                m = {
                    dataAttrs: null,
                    focusOnHover: !1,
                    focused: !1,
                    hasNotification: null,
                    hideMenuCaret: !1,
                    onPress: function() {
                        function e() {}
                        return e
                    }(),
                    onActive: function() {
                        function e() {}
                        return e
                    }(),
                    onHover: function() {
                        function e() {}
                        return e
                    }(),
                    onOutsideClick: function() {
                        function e() {}
                        return e
                    }()
                },
                _ = function(e) {
                    function t(e) {
                        babelHelpers.classCallCheck(this, t);
                        var n = babelHelpers.possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                        return n.containerNode = null, n.state = {
                            containerWidth: void 0,
                            isActive: !1,
                            isHovered: !1,
                            isFocused: !1
                        }, n.handleMouseEnter = n.handleMouseEnter.bind(n), n.handleMouseLeave = n.handleMouseLeave.bind(n), n.handleMouseDown = n.handleMouseDown.bind(n), n.handleMouseUp = n.handleMouseUp.bind(n), n.handleFocus = n.handleFocus.bind(n), n.handleBlur = n.handleBlur.bind(n), n.handleClick = n.handleClick.bind(n), n
                    }
                    return babelHelpers.inherits(t, e), babelHelpers.createClass(t, [{
                        key: "componentDidMount",
                        value: function() {
                            function e() {
                                o(this.props) && this.updateWidth()
                            }
                            return e
                        }()
                    }, {
                        key: "componentWillReceiveProps",
                        value: function() {
                            function e(e) {
                                o(e) && !o(this.props) && this.updateWidth()
                            }
                            return e
                        }()
                    }, {
                        key: "handleMouseEnter",
                        value: function() {
                            function e(e) {
                                var t = this.props,
                                    n = t.onHover,
                                    o = t.focusOnHover,
                                    r = t.onActive,
                                    i = t.name;
                                this.setState({
                                    isHovered: !0
                                }), n(e), o && r(i)
                            }
                            return e
                        }()
                    }, {
                        key: "handleMouseLeave",
                        value: function() {
                            function e() {
                                var e = this.props,
                                    t = e.focusOnHover,
                                    n = e.onActive;
                                this.setState({
                                    isHovered: !1
                                }), t && n(null)
                            }
                            return e
                        }()
                    }, {
                        key: "handleMouseDown",
                        value: function() {
                            function e() {
                                this.setState({
                                    isActive: !0
                                })
                            }
                            return e
                        }()
                    }, {
                        key: "handleMouseUp",
                        value: function() {
                            function e() {
                                this.setState({
                                    isActive: !1
                                })
                            }
                            return e
                        }()
                    }, {
                        key: "handleFocus",
                        value: function() {
                            function e() {
                                this.setState({
                                    isFocused: !0
                                })
                            }
                            return e
                        }()
                    }, {
                        key: "handleBlur",
                        value: function() {
                            function e() {
                                this.setState({
                                    isFocused: !1
                                })
                            }
                            return e
                        }()
                    }, {
                        key: "handleClick",
                        value: function() {
                            function e(e) {
                                var t = this.props,
                                    n = t.onPress,
                                    o = t.focusOnHover,
                                    r = t.menu,
                                    i = t.onActive,
                                    a = t.name;
                                n(e), !o && r && e.preventDefault(), o || i(a)
                            }
                            return e
                        }()
                    }, {
                        key: "updateWidth",
                        value: function() {
                            function e() {
                                this.setState({
                                    containerWidth: this.containerNode.getBoundingClientRect().width
                                })
                            }
                            return e
                        }()
                    }, {
                        key: "render",
                        value: function() {
                            function e() {
                                var e = this,
                                    t = this.props,
                                    n = t.children,
                                    a = t.dataAttrs,
                                    u = t.href,
                                    c = t.light,
                                    p = t.dark,
                                    d = t.floating,
                                    y = t.hideMenuCaret,
                                    v = t.menu,
                                    m = t.hasNotification,
                                    _ = t.onOutsideClick,
                                    g = t.styles,
                                    E = this.state,
                                    P = E.isFocused,
                                    T = E.isHovered,
                                    S = E.isActive,
                                    C = o(this.props);
                                return l.default.createElement(b.default, {
                                    onOutsideClick: _,
                                    disabled: !C
                                }, l.default.createElement("div", babelHelpers.extends({
                                    ref: function() {
                                        function t(t) {
                                            e.containerNode = t
                                        }
                                        return t
                                    }()
                                }, (0, i.css)(g.container)), l.default.createElement(s.default, babelHelpers.extends({
                                    href: u,
                                    removeOutlineOnPress: !0,
                                    onMouseEnter: this.handleMouseEnter,
                                    onMouseLeave: this.handleMouseLeave,
                                    onMouseDown: this.handleMouseDown,
                                    onMouseUp: this.handleMouseUp,
                                    onDragEnd: this.handleMouseUp,
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: this.handleClick
                                }, r(a), (0, i.css)(g.link, c && g.link_light, p && g.link_dark)), l.default.createElement("div", (0, i.css)(g.wrapper, g.underline, (T || P) && g.underline_default, (S || C) && g.underline_active, d && g.underline_none), l.default.createElement("div", (0, i.css)(g.content, g.underline, d && (P || T) && g.underline_default, d && (S || C) && g.underline_active), n, l.default.createElement(h.default, {
                                    visible: m,
                                    dark: p,
                                    light: c
                                })))), C && l.default.createElement("div", (0, i.css)(g.menu), l.default.createElement(f.default, {
                                    floating: d,
                                    hideCaret: y,
                                    parentWidth: this.state.containerWidth
                                }, v))))
                            }
                            return e
                        }()
                    }]), t
                }(l.default.Component);
            _.propTypes = v, _.defaultProps = m, t.default = (0, i.withStyles)(function(e) {
                var t = e.color,
                    n = e.font,
                    o = e.unit;
                return {
                    container: {
                        position: "relative"
                    },
                    link: Object.assign({}, n.default, {
                        appearance: "none",
                        background: "transparent",
                        border: "none",
                        color: "inherit",
                        display: "block",
                        height: c.HEADER_HEIGHT,
                        lineHeight: String(c.HEADER_HEIGHT) + "px",
                        textDecoration: "none",
                        margin: 0,
                        position: "relative",
                        padding: "0 " + 2 * o + "px",
                        whiteSpace: "nowrap"
                    }),
                    link_light: {
                        color: t.white
                    },
                    link_dark: {
                        color: t.core.hof
                    },
                    underline: {
                        borderBottom: "3px solid " + String(t.clear)
                    },
                    underline_default: {
                        borderBottomColor: t.core.foggy
                    },
                    underline_active: {
                        borderBottomColor: t.core.babu
                    },
                    underline_none: {
                        borderBottom: "none"
                    },
                    wrapper: {
                        height: "100%",
                        verticalAlign: "middle",
                        boxSizing: "border-box"
                    },
                    content: {
                        display: "inline-block",
                        padding: String(o) + "px 0",
                        verticalAlign: "middle",
                        lineHeight: 1
                    },
                    menu: {
                        position: "absolute",
                        top: "100%",
                        right: 0,
                        width: p.MAX_WIDTH,
                        zIndex: -1
                    }
                }
            })(_), e.exports = t.default
        },
        2105: function(e, t, n) {
            function o(e) {
                var t = e.children,
                    n = e.floating,
                    o = e.hideCaret,
                    r = e.parentWidth,
                    l = e.styles,
                    c = void 0,
                    p = void 0,
                    f = void 0;
                return n && !o && (p = "M0," + u + " " + s + "," + u + " " + s / 2 + ",0z", f = "M0," + u + " " + s / 2 + ",0 " + s + "," + u, c = i.default.createElement("svg", (0, a.css)(l.fang, {
                    right: (r - s) / 2
                }), i.default.createElement("path", babelHelpers.extends({
                    d: p
                }, (0, a.css)(l.fangShape))), i.default.createElement("path", babelHelpers.extends({
                    d: f
                }, (0, a.css)(l.fangStroke))))), i.default.createElement("div", (0, a.css)(l.container), i.default.createElement("div", (0, a.css)(l.content, !n && l.content_attached, n && l.content_floating), t), c)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MAX_WIDTH = void 0;
            var r = n(10),
                i = babelHelpers.interopRequireDefault(r),
                a = n(101),
                s = 20,
                u = 10,
                l = 14,
                c = Object.assign({}, a.withStylesPropTypes, {
                    children: r.PropTypes.node,
                    floating: r.PropTypes.bool,
                    hideCaret: r.PropTypes.bool,
                    parentWidth: r.PropTypes.number
                }),
                p = {
                    floating: !1,
                    hideCaret: !1,
                    parentWidth: 2 * l + s
                };
            o.propTypes = c, o.defaultProps = p;
            var f = t.MAX_WIDTH = 460;
            t.default = (0, a.withStyles)(function(e) {
                var t = e.color;
                return {
                    container: {
                        position: "absolute",
                        width: "100%",
                        right: 0
                    },
                    content: {
                        backgroundColor: t.white,
                        border: "1px solid " + String(t.accent.hrGray),
                        boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
                        minWidth: 282,
                        maxWidth: f,
                        minHeight: 60,
                        position: "absolute",
                        right: 0,
                        top: 0
                    },
                    content_attached: {
                        borderTop: "none"
                    },
                    fang: {
                        position: "absolute",
                        width: s,
                        height: u,
                        top: -u + 1
                    },
                    fangShape: {
                        fill: t.white
                    },
                    fangStroke: {
                        stroke: t.accent.hrGray,
                        fill: "transparent"
                    }
                }
            })(o)
        },
        2106: function(e, t, n) {
            function o(e) {
                var t = e.dark,
                    n = e.light,
                    o = e.styles,
                    r = e.visible;
                return i.default.createElement("svg", (0, a.css)(o.notification, n && o.notification_light, t && o.notification_dark, r && o.notification_visible), i.default.createElement("circle", {
                    cx: s / 2,
                    cy: s / 2,
                    r: s / 2
                }))
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(10),
                i = babelHelpers.interopRequireDefault(r),
                a = n(101),
                s = 6,
                u = Object.assign({}, a.withStylesPropTypes, {
                    dark: r.PropTypes.bool,
                    light: r.PropTypes.bool,
                    visible: r.PropTypes.bool
                }),
                l = {
                    dark: !1,
                    light: !1,
                    visible: !1
                };
            o.propTypes = u, o.defaultProps = l, t.default = (0, a.withStyles)(function(e) {
                var t = e.color,
                    n = e.unit,
                    o = n / 2,
                    r = n * -1,
                    i = "translate3d(" + o + "px, " + r + "px, 0)";
                return {
                    notification: {
                        fill: t.textLink,
                        height: s,
                        opacity: 0,
                        position: "absolute",
                        top: "50%",
                        transform: i,
                        transformOriginX: o + s / 2 + "px",
                        transformOriginY: r + s / 2 + "px",
                        width: s
                    },
                    notification_light: {
                        fill: t.white
                    },
                    notification_dark: {
                        fill: t.core.hof
                    },
                    notification_visible: {
                        animationName: {
                            "0%": {
                                opacity: 0,
                                transform: "scale(0.75) " + i
                            },
                            "100%": {
                                opacity: 1,
                                transform: "scale(1) " + i
                            }
                        },
                        animationDuration: "0.5s",
                        animationTimingFunction: "ease",
                        animationFillMode: "both"
                    }
                }
            })(o), e.exports = t.default
        }
    });
    "object" == typeof module && (module.exports = e)
}();
