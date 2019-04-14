var gcs = function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {i: r, l: !1, exports: {}};
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
            return e[t]
        }.bind(null, o));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 11)
}([function (e, t, n) {
    (function (t, n) {
        /*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.4+314e4831
 */
        var r;
        r = function () {
            "use strict";

            function e(e) {
                return "function" == typeof e
            }

            var r = Array.isArray ? Array.isArray : function (e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }, o = 0, i = void 0, a = void 0, s = function (e, t) {
                m[o] = e, m[o + 1] = t, 2 === (o += 2) && (a ? a(h) : _())
            };
            var c = "undefined" != typeof window ? window : void 0, u = c || {},
                l = u.MutationObserver || u.WebKitMutationObserver,
                d = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t),
                p = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

            function f() {
                var e = setTimeout;
                return function () {
                    return e(h, 1)
                }
            }

            var m = new Array(1e3);

            function h() {
                for (var e = 0; e < o; e += 2) {
                    (0, m[e])(m[e + 1]), m[e] = void 0, m[e + 1] = void 0
                }
                o = 0
            }

            var v, g, y, w, _ = void 0;

            function b(e, t) {
                var n = this, r = new this.constructor(S);
                void 0 === r[D] && j(r);
                var o = n._state;
                if (o) {
                    var i = arguments[o - 1];
                    s(function () {
                        return A(o, r, i, n._result)
                    })
                } else L(n, r, e, t);
                return r
            }

            function P(e) {
                if (e && "object" == typeof e && e.constructor === this) return e;
                var t = new this(S);
                return O(t, e), t
            }

            d ? _ = function () {
                return t.nextTick(h)
            } : l ? (g = 0, y = new l(h), w = document.createTextNode(""), y.observe(w, {characterData: !0}), _ = function () {
                w.data = g = ++g % 2
            }) : p ? ((v = new MessageChannel).port1.onmessage = h, _ = function () {
                return v.port2.postMessage(0)
            }) : _ = void 0 === c ? function () {
                try {
                    var e = Function("return this")().require("vertx");
                    return void 0 !== (i = e.runOnLoop || e.runOnContext) ? function () {
                        i(h)
                    } : f()
                } catch (e) {
                    return f()
                }
            }() : f();
            var D = Math.random().toString(36).substring(2);

            function S() {
            }

            var I = void 0, k = 1, E = 2, C = {error: null};

            function F(e) {
                try {
                    return e.then
                } catch (e) {
                    return C.error = e, C
                }
            }

            function T(t, n, r) {
                n.constructor === t.constructor && r === b && n.constructor.resolve === P ? function (e, t) {
                    t._state === k ? M(e, t._result) : t._state === E ? U(e, t._result) : L(t, void 0, function (t) {
                        return O(e, t)
                    }, function (t) {
                        return U(e, t)
                    })
                }(t, n) : r === C ? (U(t, C.error), C.error = null) : void 0 === r ? M(t, n) : e(r) ? function (e, t, n) {
                    s(function (e) {
                        var r = !1, o = function (e, t, n, r) {
                            try {
                                e.call(t, n, r)
                            } catch (e) {
                                return e
                            }
                        }(n, t, function (n) {
                            r || (r = !0, t !== n ? O(e, n) : M(e, n))
                        }, function (t) {
                            r || (r = !0, U(e, t))
                        }, e._label);
                        !r && o && (r = !0, U(e, o))
                    }, e)
                }(t, n, r) : M(t, n)
            }

            function O(e, t) {
                var n, r;
                e === t ? U(e, new TypeError("You cannot resolve a promise with itself")) : (r = typeof(n = t), null === n || "object" !== r && "function" !== r ? M(e, t) : T(e, t, F(t)))
            }

            function x(e) {
                e._onerror && e._onerror(e._result), N(e)
            }

            function M(e, t) {
                e._state === I && (e._result = t, e._state = k, 0 !== e._subscribers.length && s(N, e))
            }

            function U(e, t) {
                e._state === I && (e._state = E, e._result = t, s(x, e))
            }

            function L(e, t, n, r) {
                var o = e._subscribers, i = o.length;
                e._onerror = null, o[i] = t, o[i + k] = n, o[i + E] = r, 0 === i && e._state && s(N, e)
            }

            function N(e) {
                var t = e._subscribers, n = e._state;
                if (0 !== t.length) {
                    for (var r = void 0, o = void 0, i = e._result, a = 0; a < t.length; a += 3) r = t[a], o = t[a + n], r ? A(n, r, o, i) : o(i);
                    e._subscribers.length = 0
                }
            }

            function A(t, n, r, o) {
                var i = e(r), a = void 0, s = void 0, c = void 0, u = void 0;
                if (i) {
                    if ((a = function (e, t) {
                        try {
                            return e(t)
                        } catch (e) {
                            return C.error = e, C
                        }
                    }(r, o)) === C ? (u = !0, s = a.error, a.error = null) : c = !0, n === a) return void U(n, new TypeError("A promises callback cannot return that same promise."))
                } else a = o, c = !0;
                n._state !== I || (i && c ? O(n, a) : u ? U(n, s) : t === k ? M(n, a) : t === E && U(n, a))
            }

            var G = 0;

            function j(e) {
                e[D] = G++, e._state = void 0, e._result = void 0, e._subscribers = []
            }

            var R = function () {
                function e(e, t) {
                    this._instanceConstructor = e, this.promise = new e(S), this.promise[D] || j(this.promise), r(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? M(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && M(this.promise, this._result))) : U(this.promise, new Error("Array Methods must be provided an Array"))
                }

                return e.prototype._enumerate = function (e) {
                    for (var t = 0; this._state === I && t < e.length; t++) this._eachEntry(e[t], t)
                }, e.prototype._eachEntry = function (e, t) {
                    var n = this._instanceConstructor, r = n.resolve;
                    if (r === P) {
                        var o = F(e);
                        if (o === b && e._state !== I) this._settledAt(e._state, t, e._result); else if ("function" != typeof o) this._remaining--, this._result[t] = e; else if (n === H) {
                            var i = new n(S);
                            T(i, e, o), this._willSettleAt(i, t)
                        } else this._willSettleAt(new n(function (t) {
                            return t(e)
                        }), t)
                    } else this._willSettleAt(r(e), t)
                }, e.prototype._settledAt = function (e, t, n) {
                    var r = this.promise;
                    r._state === I && (this._remaining--, e === E ? U(r, n) : this._result[t] = n), 0 === this._remaining && M(r, this._result)
                }, e.prototype._willSettleAt = function (e, t) {
                    var n = this;
                    L(e, void 0, function (e) {
                        return n._settledAt(k, t, e)
                    }, function (e) {
                        return n._settledAt(E, t, e)
                    })
                }, e
            }();
            var H = function () {
                function e(t) {
                    this[D] = G++, this._result = this._state = void 0, this._subscribers = [], S !== t && ("function" != typeof t && function () {
                        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                    }(), this instanceof e ? function (e, t) {
                        try {
                            t(function (t) {
                                O(e, t)
                            }, function (t) {
                                U(e, t)
                            })
                        } catch (t) {
                            U(e, t)
                        }
                    }(this, t) : function () {
                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                    }())
                }

                return e.prototype.catch = function (e) {
                    return this.then(null, e)
                }, e.prototype.finally = function (e) {
                    var t = this.constructor;
                    return this.then(function (n) {
                        return t.resolve(e()).then(function () {
                            return n
                        })
                    }, function (n) {
                        return t.resolve(e()).then(function () {
                            throw n
                        })
                    })
                }, e
            }();
            return H.prototype.then = b, H.all = function (e) {
                return new R(this, e).promise
            }, H.race = function (e) {
                var t = this;
                return r(e) ? new t(function (n, r) {
                    for (var o = e.length, i = 0; i < o; i++) t.resolve(e[i]).then(n, r)
                }) : new t(function (e, t) {
                    return t(new TypeError("You must pass an array to race."))
                })
            }, H.resolve = P, H.reject = function (e) {
                var t = new this(S);
                return U(t, e), t
            }, H._setScheduler = function (e) {
                a = e
            }, H._setAsap = function (e) {
                s = e
            }, H._asap = s, H.polyfill = function () {
                var e = void 0;
                if (void 0 !== n) e = n; else if ("undefined" != typeof self) e = self; else try {
                    e = Function("return this")()
                } catch (e) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var t = e.Promise;
                if (t) {
                    var r = null;
                    try {
                        r = Object.prototype.toString.call(t.resolve())
                    } catch (e) {
                    }
                    if ("[object Promise]" === r && !t.cast) return
                }
                e.Promise = H
            }, H.Promise = H, H
        }, e.exports = r()
    }).call(this, n(9), n(8))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(2), o = n(0), i = function () {
        function e(e, t, n, o) {
            e instanceof r.Diagram && (e = [e]), this._managedDiagrams = e, this._currentDiagramFile = {
                name: null,
                id: null,
                path: null
            }, this._isAutoSaving = !0, t && (this._defaultModel = t), n ? this._clientId = n : n = null, this._iconsRelativeDirectory = o || "../goCloudStorageIcons/";
            var i = document.createElement("div");

            function a(e) {
                e.addModelChangedListener(function (e) {
                    e.isTransactionFinished && c.isAutoSaving && "" !== e.oldValue && c.currentDiagramFile.name && c.save()
                })
            }

            i.className = "goCustomFilepicker", i.style.visibility = "hidden", document.getElementsByTagName("body")[0].appendChild(i), this._ui = i, this._deferredPromise = {promise: this.makeDeferredPromise()};
            var s = this.managedDiagrams, c = this;
            if (s instanceof r.Diagram) a(s); else for (var u = 0; u < s.length; u++) a(s[u])
        }

        return Object.defineProperty(e.prototype, "managedDiagrams", {
            get: function () {
                return this._managedDiagrams
            }, set: function (e) {
                this._managedDiagrams = e
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "defaultModel", {
            get: function () {
                return this._defaultModel
            }, set: function (e) {
                this._defaultModel = e
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "iconsRelativeDirectory", {
            get: function () {
                return this._iconsRelativeDirectory
            }, set: function (e) {
                this._iconsRelativeDirectory = e
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "clientId", {
            get: function () {
                return this._clientId
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "currentDiagramFile", {
            get: function () {
                return this._currentDiagramFile
            }, set: function (e) {
                this._currentDiagramFile = e
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "isAutoSaving", {
            get: function () {
                return this._isAutoSaving
            }, set: function (e) {
                this._isAutoSaving = e
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "serviceName", {
            get: function () {
                return this._serviceName
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "className", {
            get: function () {
                return this._className
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "ui", {
            get: function () {
                return this._ui
            }, enumerable: !0, configurable: !0
        }), e.prototype.authorize = function (e) {
            return void 0 === e && (e = !1), new o.Promise(function (e, t) {
                console.error("authorize not implemented"), t(!1)
            })
        }, e.prototype.makeDeferredPromise = function () {
            var e, t, n = new o.Promise(function (n, r) {
                e = n, t = r
            });
            return n.resolve = e, n.reject = t, n
        }, e.prototype.getUserInfo = function () {
            return new o.Promise(function (e, t) {
                t("getUserInfo not implemented")
            })
        }, e.prototype.hideUI = function (e) {
            void 0 === e && (e = !1);
            if (this.ui.style.visibility = "hidden", e) {
                var t = document.getElementById("actionButton").innerHTML;
                this._deferredPromise.promise.resolve(t + " canceled by user"), this._deferredPromise.promise = this.makeDeferredPromise()
            }
        }, e.prototype.checkFileExists = function (e) {
            return new o.Promise(function (e, t) {
                t("checkFileExists not implemented")
            })
        }, e.prototype.getFile = function (e) {
            return new o.Promise(function (e, t) {
                throw Error("getFile not implemented")
            })
        }, e.prototype.showUI = function (e) {
            return new o.Promise(function (e, t) {
                throw Error("showUI not implemented")
            })
        }, e.prototype.create = function (e) {
            var t = this;
            t.managedDiagrams;
            return new o.Promise(function (n, o) {
                function i(e) {
                    t.defaultModel ? e.model = r.Model.fromJson(JSON.parse(t.defaultModel)) : e.model = new r.GraphLinksModel
                }

                if (t.currentDiagramFile = {
                    name: null,
                    id: null,
                    path: null
                }, t.managedDiagrams instanceof r.Diagram) i(t.managedDiagrams); else for (var a = 0; a < t.managedDiagrams.length; a++) i(t.managedDiagrams[a]);
                t.isAutoSaving ? n(e ? t.save(e) : t.saveWithUI()) : n("New diagram created.")
            })
        }, e.prototype.makeSaveFile = function () {
            var e = "{\n";
            if (0 != this.managedDiagrams.length) {
                for (var t = 0; t < this.managedDiagrams.length; t++) {
                    var n = this.managedDiagrams[t], r = n.div.id;
                    n.model.toJson();
                    e += '"' + r + '": ' + n.model.toJson(), t + 1 !== this.managedDiagrams.length && (e += ",\n")
                }
                return e += "\n}"
            }
        }, e.prototype.loadFromFileContents = function (e) {
            var t = JSON.parse(e);
            for (var n in t) {
                var o = t[n], i = document.getElementById(n), a = r.Diagram.fromDiv(i);
                if (!a) throw Error("No Diagram on page is associated with a div with id " + n);
                a.model = r.Model.fromJson(JSON.stringify(o))
            }
        }, e.prototype.saveWithUI = function () {
            return new o.Promise(function (e, t) {
                t("saveWithUI not implemented")
            })
        }, e.prototype.save = function (e) {
            return new o.Promise(function (e, t) {
                t("save not implemented")
            })
        }, e.prototype.load = function (e) {
            return new o.Promise(function (e, t) {
                t("load not implemented")
            })
        }, e.prototype.loadWithUI = function () {
            return new o.Promise(function (e, t) {
                t("loadWithUI not implemented")
            })
        }, e.prototype.remove = function (e) {
            return new o.Promise(function (e, t) {
                t("remove not implemented")
            })
        }, e.prototype.removeWithUI = function () {
            return new o.Promise(function (e, t) {
                t("removeWithUI not implemented")
            })
        }, e
    }();
    t.GoCloudStorage = i
}, function (e, t) {
    e.exports = go
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(2), o = n(1), i = n(0), a = function () {
        function e(e, t) {
            if (e instanceof Array) {
                for (var n = new r.Set, i = 0; i < e.length; i++) {
                    if (!(e[i] instanceof o.GoCloudStorage)) throw Error("Cannot create GoCloudStorageManager; provided 'storages' parameter elements are not all of type GoCloudStorage");
                    n.add(e[i])
                }
                e = n
            }
            if (!(e instanceof r.Set && e)) throw Error("Cannot create GoCloudStorageManager with provided 'storages' parameter");
            var a = this;
            a._storages = e, a._currentStorage = e.first();
            var s = document.createElement("div");
            s.id = "goCloudStorageManagerMenu", a._menu = s, a._deferredPromise = {promise: o.GoCloudStorage.prototype.makeDeferredPromise()}, a._iconsRelativeDirectory = t || "../goCloudStorageIcons/", t && a._storages.iterator.each(function (e) {
                e.iconsRelativeDirectory = t
            }), -1 !== window.location.href.indexOf("account_id=dbid") && e.iterator.each(function (e) {
                "GoDropBox" === e.className && (a._currentStorage = e, a.currentStorage.authorize())
            })
        }

        return Object.defineProperty(e.prototype, "storages", {
            get: function () {
                return this._storages
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "iconsRelativeDirectory", {
            get: function () {
                return this._iconsRelativeDirectory
            }, set: function (e) {
                this._iconsRelativeDirectory = e
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "menu", {
            get: function () {
                return this._menu
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "currentStorage", {
            get: function () {
                return this._currentStorage
            }, set: function (e) {
                this._currentStorage = e
            }, enumerable: !0, configurable: !0
        }), e.prototype.create = function () {
            var e = this;
            return new i.Promise(function (t, n) {
                t(e.handleAction("Create"))
            })
        }, e.prototype.load = function () {
            var e = this;
            return new i.Promise(function (t, n) {
                t(e.handleAction("Load"))
            })
        }, e.prototype.remove = function () {
            var e = this;
            return new i.Promise(function (t, n) {
                t(e.handleAction("Remove"))
            })
        }, e.prototype.save = function (e) {
            void 0 === e && (e = !0);
            var t = this;
            return new i.Promise(function (n, r) {
                n(e ? t.handleAction("SaveAs") : t.handleAction("Save"))
            })
        }, e.prototype.showMessage = function (e, t) {
            t || (t = 2);
            var n = document.createElement("div");
            n.id = "goCloudStorageManagerMessageBox", n.innerHTML = "<p>" + e + "</p>", document.body.appendChild(n), setTimeout(function () {
                n.style.opacity = "0", setTimeout(function () {
                    n.parentNode.removeChild(n)
                }, 1e3)
            }, 1e3 * t)
        }, e.prototype.getStorageIconPath = function (e) {
            if (null == this.iconsRelativeDirectory || void 0 == this.iconsRelativeDirectory) return null;
            var t = this.iconsRelativeDirectory;
            switch (e) {
                case"GoGoogleDrive":
                    t += "googleDrive.jpg";
                    break;
                case"GoOneDrive":
                    t += "oneDrive.png";
                    break;
                case"GoLocalStorage":
                    t += "localStorage.png";
                    break;
                case"GoDropBox":
                    t += "dropBox.png"
            }
            return t
        }, e.prototype.selectStorageService = function () {
            var e = this, t = this.storages;
            return new i.Promise(function (n, r) {
                var o = e.menu;
                o.innerHTML = "<strong>Select Storage Service</strong><hr></hr>";
                var i = document.createElement("p");
                i.id = "gcsmSelectedStorage", i.innerHTML = e.currentStorage.serviceName, o.appendChild(i), o.onchange = function () {
                    for (var e = document.getElementsByName("storageSelection"), n = null, r = 0; r < e.length; r++) e[r].checked && (n = e[r].id);
                    var o = "";
                    t.iterator.each(function (e) {
                        e.className == n && (o = e.serviceName)
                    }), document.getElementById("gcsmSelectedStorage").innerHTML = o
                }, document.getElementsByTagName("body")[0].appendChild(e.menu), e.menu.style.visibility = "visible";
                var a = document.createElement("div");
                a.id = "storageOptions", t.iterator.each(function (t) {
                    var n = t.className, r = e.getStorageIconPath(n), o = "";
                    t.className == e.currentStorage.className && (o = "checked"), a.innerHTML += "<label><input id=" + n + " type='radio' name='storageSelection' " + o + " /><img class='storageLogo' src=" + r + " >"
                }), o.appendChild(a);
                o.innerHTML += "<p class='description'>This will be where you save / load diagram model data to / from. You will need to grant GoCloudStorage permission to access your files on the selected storage service.</p>";
                var s = document.createElement("div"), c = document.createElement("button");
                c.id = "actionButton", c.textContent = "Select", c.onclick = function () {
                    for (var t = document.getElementsByName("storageSelection"), r = null, o = 0; o < t.length; o++) t[o].checked && (r = t[o].id);
                    e.storages.each(function (t) {
                        t.className == r && (e.currentStorage = t)
                    }), e.currentStorageNeedsAuth() && e.currentStorage.authorize().then(function (e) {
                    }), n(e.currentStorage), e.hideMenu()
                }, s.appendChild(c), o.appendChild(s);
                var u = document.createElement("div"), l = document.createElement("button");
                l.id = "cancelButton", l.textContent = "Cancel", l.onclick = function () {
                    e.hideMenu()
                }, u.appendChild(l), o.appendChild(u)
            })
        }, e.prototype.hideMenu = function () {
            this.menu.style.visibility = "hidden"
        }, e.prototype.currentStorageNeedsAuth = function () {
            var e = this.currentStorage.className;
            return "GoGoogleDrive" === e || "GoDropBox" === e
        }, e.prototype.handleAction = function (e) {
            var t = this, n = t.currentStorage;
            return new i.Promise(function (r, o) {
                function i() {
                    switch (e) {
                        case"Load":
                            r(n.loadWithUI());
                            break;
                        case"SaveAs":
                            r(n.saveWithUI());
                            break;
                        case"Save":
                            r(n.save());
                            break;
                        case"Remove":
                            r(n.removeWithUI());
                            break;
                        case"Create":
                            r(n.create())
                    }
                    t.hideMenu()
                }

                t.currentStorageNeedsAuth() ? n.authorize().then(function () {
                    i()
                }) : i()
            })
        }, e
    }();
    t.GoCloudStorageManager = a
}, function (e, t, n) {
    "use strict";
    var r,
        o = this && this.__extends || (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        }, function (e, t) {
            function n() {
                this.constructor = e
            }

            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        });
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(1), a = n(0), s = function (e) {
        function t(t, n, r, o) {
            var i = e.call(this, t, r) || this;
            return i._rootEndpoint = n, i.ui.id = "goNetCoreCustomFilepicker", i._serviceName = "Microsoft ASP .NET Core Web API", i._className = "GoNetCore", i
        }

        return o(t, e), Object.defineProperty(t.prototype, "rootEndpoint", {
            get: function () {
                return this._rootEndpoint
            }, enumerable: !0, configurable: !0
        }), t.prototype.authorize = function (e) {
            void 0 === e && (e = !1);
            return new a.Promise(function (e, t) {
                e(!0)
            })
        }, t.prototype.showUI = function (e, n) {
            var r = this, o = r.ui;
            n || (n = 0);
            var i = t._MIN_FILES_IN_UI + n;
            o.innerHTML = "";
            var a = e + " Diagram File";
            o.innerHTML += "<strong>" + a + "</strong><hr></hr>", document.getElementsByTagName("body")[0].appendChild(o), o.style.visibility = "visible";
            var s = document.createElement("div");
            s.id = "fileOptions";
            var c = [], u = (t._MIN_FILES_IN_UI, 0), l = !1;
            return r.getFiles().then(function (t) {
                if (0 !== t.length) for (var a in t) {
                    var d = t[a];
                    if (c.length < i) {
                        u++;
                        var p = d.file;
                        if (p && -1 !== p.indexOf("GraphLinksModel")) {
                            var f = {name: d.name, id: d.id};
                            c.push(f)
                        }
                        u === t.length && (l = !0)
                    }
                } else l = !0;
                if (0 !== c.length) for (a = 0; a < c.length; a++) {
                    var m = (d = c[a]).name, h = d.id;
                    s.innerHTML += "Save" !== e ? "<div class='fileOption'><input id=" + h + " type='radio' name='localStorageFile' /><label id =" + h + "-label for='" + m + "'>" + m + "</label></div>" : "<div class='fileOption'><label id =" + h + "-label for='" + h + "'>" + m + "</label></div>"
                }
                if (!l) {
                    var v = n + 50;
                    s.innerHTML += "<p>There may be more diagram files not shown. <a id='netCoreLoadMoreFiles'>Click here</a> to try loading more.</p>", document.getElementById("netCoreLoadMoreFiles").onclick = function () {
                        r.showUI(e, v)
                    }
                }
                if (o.appendChild(s), r.currentDiagramFile.id) {
                    var g = document.getElementById(r.currentDiagramFile.id + "-label");
                    g && (g.style.fontStyle = "italic")
                }
                if ("Save" === e) {
                    var y = document.createElement("div");
                    y.id = "userInputDiv", y.innerHTML += '<span>Save Diagram As </span><input id="userInput" placeholder="Enter filename"></input>', o.appendChild(y)
                }
                var w = document.createElement("div");
                w.id = "submitDiv";
                var _ = document.createElement("button");
                _.textContent = e, _.id = "actionButton", _.onclick = function () {
                    r.processUIResult(e)
                }, w.appendChild(_), o.appendChild(w);
                var b = document.createElement("div"), P = document.createElement("button");
                P.id = "cancelButton", P.textContent = "Cancel", P.onclick = function () {
                    r.hideUI(!0)
                }, b.appendChild(P), o.appendChild(b)
            }), r._deferredPromise.promise
        }, t.prototype.processUIResult = function (e) {
            var t = function () {
                for (var e = document.getElementsByName("localStorageFile"), t = null, n = 0; n < e.length; n++) e[n].checked && (t = e[n].id.replace(/qwe45qw34/g, " "));
                return t || null
            }();
            switch (e) {
                case"Save":
                    var n = document.getElementById("userInput").value;
                    n && (n += ".diagram", this.save(n));
                    break;
                case"Load":
                    this.load(t);
                    break;
                case"Delete":
                    this.remove(t)
            }
            this.hideUI()
        }, t.prototype.getFile = function (e) {
            var t = this.rootEndpoint + e;
            return new a.Promise(function (n, r) {
                if (e) {
                    var o = new XMLHttpRequest;
                    o.open("GET", t, !0), o.onreadystatechange = function () {
                        4 == o.readyState && o.status >= 200 && o.status < 300 && n(JSON.parse(o.response))
                    }, o.send()
                } else r("Cannot get diagram file from ASP .NET Core Web API with id " + e)
            })
        }, t.prototype.getFiles = function () {
            var e = this;
            return new a.Promise(function (t, n) {
                var r = new XMLHttpRequest;
                r.open("GET", e.rootEndpoint, !0), r.onreadystatechange = function () {
                    4 == r.readyState && (r.status >= 200 && r.status < 300 ? t(JSON.parse(r.response)) : n(r.response))
                }, r.send()
            })
        }, t.prototype.checkFileExists = function (e) {
            var t = this.rootEndpoint + e;
            return new a.Promise(function (e, n) {
                var r = new XMLHttpRequest;
                r.open("GET", t, !0), r.onreadystatechange = function () {
                    4 == r.readyState && (r.status >= 200 && r.status < 300 ? e(!0) : e(!1))
                }, r.send()
            })
        }, t.prototype.saveWithUI = function () {
            var e = this;
            return new a.Promise(function (t, n) {
                t(e.showUI("Save"))
            })
        }, t.prototype.save = function (e) {
            var t = this;
            return new a.Promise(function (n, r) {
                if (t.currentDiagramFile.id && !e) {
                    var o = new XMLHttpRequest;
                    t.getFile(t.currentDiagramFile.id).then(function (e) {
                        var i = {id: t.currentDiagramFile.id, name: t.currentDiagramFile.name, file: t.makeSaveFile()},
                            a = {id: i.id, name: i.name, path: i.name};
                        o.open("PUT", t.rootEndpoint + t.currentDiagramFile.id, !0), o.setRequestHeader("Content-Type", "application/json; charset=utf-8"), o.onreadystatechange = function () {
                            4 == o.readyState && (o.status > 200 && o.status < 300 ? n(a) : r(o.responseText))
                        }, o.send(JSON.stringify(i))
                    })
                } else {
                    var i = new XMLHttpRequest, a = {name: null !== e ? e : "New diagram", file: t.makeSaveFile()};
                    i.open("POST", t.rootEndpoint, !0), i.setRequestHeader("Content-Type", "application/json; charset=utf-8"), i.onreadystatechange = function () {
                        if (4 == i.readyState) if (i.status > 200 && i.status < 300) {
                            var e = {id: JSON.parse(i.response).id, name: a.name, path: a.name};
                            t.currentDiagramFile = e, n(e), t._deferredPromise.promise.resolve(e), t._deferredPromise.promise = t.makeDeferredPromise()
                        } else r(i.responseText)
                    }, i.send(JSON.stringify(a))
                }
            })
        }, t.prototype.loadWithUI = function () {
            var e = this;
            return new a.Promise(function (t, n) {
                t(e.showUI("Load"))
            }).catch(function (e) {
                throw Error(e)
            })
        }, t.prototype.load = function (e) {
            var t = this;
            return new a.Promise(function (n, r) {
                if (!e) throw Error("Cannot load file from .NET Core Web API with path " + e);
                var o = new XMLHttpRequest;
                o.open("GET", t.rootEndpoint + e, !0), o.onreadystatechange = function () {
                    if (4 == o.readyState) if (o.status >= 200 && o.status < 300) {
                        var e = JSON.parse(o.response);
                        t.loadFromFileContents(e.file);
                        var i = {id: e.id, path: e.name, name: e.name};
                        t.currentDiagramFile = i, n(i), t._deferredPromise.promise.resolve(i), t._deferredPromise.promise = t.makeDeferredPromise()
                    } else r(o.responseText)
                }, o.send()
            }).catch(function (e) {
                throw Error(e)
            })
        }, t.prototype.removeWithUI = function () {
            var e = this;
            return new a.Promise(function (t, n) {
                t(e.showUI("Delete"))
            })
        }, t.prototype.remove = function (e) {
            var t = this;
            return new a.Promise(function (n, r) {
                if (!e) throw Error("Cannot delete file from local storage with id " + e);
                t.getFile(e).then(function (o) {
                    var i = {name: o.name, path: o.name, id: e};
                    t.currentDiagramFile && o.name === t.currentDiagramFile.name && (t.currentDiagramFile = {
                        name: null,
                        path: null,
                        id: null
                    });
                    var a = new XMLHttpRequest;
                    a.open("DELETE", t.rootEndpoint + e, !0), a.onreadystatechange = function () {
                        4 == a.readyState && (a.status >= 200 && a.status < 300 ? (n(i), t._deferredPromise.promise.resolve(i), t._deferredPromise.promise = t.makeDeferredPromise()) : r(a.responseText))
                    }, a.send()
                })
            })
        }, t._MIN_FILES_IN_UI = 100, t
    }(i.GoCloudStorage);
    t.GoNetCore = s
}, function (e, t, n) {
    "use strict";
    var r,
        o = this && this.__extends || (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        }, function (e, t) {
            function n() {
                this.constructor = e
            }

            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        });
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(1), a = n(0), s = function (e) {
        function t(t, n, r, o) {
            var i = e.call(this, t, r, n) || this;
            return i._oauthToken = null, i.ui.id = "goOneDriveSavePrompt", window.OneDrive && (i._oneDriveFilepicker = window.OneDrive), i.authorize(!1), i._serviceName = "Microsoft OneDrive", i._className = "GoOneDrive", i
        }

        return o(t, e), Object.defineProperty(t.prototype, "oauthToken", {
            get: function () {
                return this._oauthToken
            }, set: function (e) {
                this._oauthToken = e
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "oneDriveFilepicker", {
            get: function () {
                return this._oneDriveFilepicker
            }, enumerable: !0, configurable: !0
        }), t.prototype.authorize = function (e) {
            var t = this;
            return new a.Promise(function (n, r) {
                if (e || -1 === window.location.hash.indexOf("access_token")) {
                    if (e) {
                        var o = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=" + t.clientId + "&scope=files.readwrite.all&response_type=token&redirect_uri=" + window.location.href;
                        window.location.href = o, n(!0)
                    }
                } else {
                    var i = window.location.hash.substring(window.location.hash.indexOf("=") + 1, window.location.hash.indexOf("&"));
                    t.oauthToken = i, n(!0)
                }
            })
        }, t.prototype.getUserInfo = function () {
            var e = this;
            return new a.Promise(function (t, n) {
                var r = new XMLHttpRequest;
                e.oauthToken ? (r.open("GET", "https://graph.microsoft.com/v1.0/me"), r.setRequestHeader("Authorization", "Bearer " + e.oauthToken), r.onreadystatechange = function () {
                    4 == r.readyState && 200 == r.status ? t(JSON.parse(r.response)) : 401 == r.status && (e.authorize(!0), n(r.response))
                }, r.send()) : -1 == window.location.hash.indexOf("access_token") ? (n("No acessToken in current uri"), e.authorize(!0)) : (n("oauthToken not set"), e.authorize(!1))
            })
        }, t.prototype.checkFileExists = function (e) {
            var t = this;
            return -1 === e.indexOf(".diagram") && (e += ".diagram"), new a.Promise(function (n, r) {
                var o = new XMLHttpRequest;
                o.open("GET", "https://graph.microsoft.com/v1.0" + e, !0), o.setRequestHeader("Authorization", "Bearer " + t.oauthToken), o.onreadystatechange = function () {
                    var e, i;
                    4 === o.readyState && (200 === o.status ? e = !0 : 401 === o.status ? t.authorize(!0) : 404 === o.status ? e = !1 : i = o.response, n(e), i && r(i))
                }, o.send()
            })
        }, t.prototype.getFile = function (e, t) {
            var n = this;
            return -1 === e.indexOf(".diagram") && (e += ".diagram"), new a.Promise(function (r, o) {
                var i = new XMLHttpRequest;
                i.open("GET", "https://graph.microsoft.com/v1.0" + e, !0);
                var a = t || n.oauthToken;
                i.setRequestHeader("Authorization", "Bearer " + a), i.onreadystatechange = function () {
                    if (4 == i.readyState) if (200 == i.status) {
                        var e = JSON.parse(i.response);
                        r(e)
                    } else 401 == i.status ? n.authorize(!0) : o(i.response)
                }, i.send()
            })
        }, t.prototype.showUI = function () {
            var e = this, t = e.ui;
            t.innerHTML = "", t.style.visibility = "visible", t.innerHTML = "<img class='icons' src='" + e.iconsRelativeDirectory + "oneDrive.png'></img><strong>Save Diagram As</strong><hr></hr>";
            var n = document.createElement("div");
            n.id = "userInputDiv", n.innerHTML += '<input id="userInput" placeholder="Enter filename"></input>', t.appendChild(n);
            var r = document.createElement("div");
            r.id = "submitDiv";
            var o = document.createElement("button");
            o.id = "actionButton", o.textContent = "Save", o.onclick = function () {
                e.saveWithUI()
            }, r.appendChild(o), t.appendChild(r);
            var i = document.createElement("div");
            i.id = "cancelDiv";
            var a = document.createElement("button");
            return a.id = "cancelButton", a.textContent = "Cancel", a.onclick = function () {
                e.hideUI(!0)
            }, i.appendChild(a), t.appendChild(i), e._deferredPromise.promise
        }, t.prototype.saveWithUI = function () {
            var e = this, t = e.ui;
            return new a.Promise(function (n, r) {
                if ("hidden" === t.style.visibility) n(e.showUI()); else {
                    var o = document.getElementById("userInput").value;
                    o && -1 === o.indexOf(".diagram") && (o += ".diagram");
                    var i = {
                        clientId: e.clientId, action: "query", openInNewWindow: !0, success: function (t) {
                            var n = t.value[0], r = t.accessToken;
                            e.currentDiagramFile = {
                                id: null,
                                name: o,
                                token: r,
                                parentReference: {driveId: n.parentReference.driveId, id: n.id},
                                path: "placeholder"
                            }, e.hideUI(), e.save()
                        }
                    };
                    o && "" !== o && void 0 !== o ? e.oneDriveFilepicker.save(i) : r("Cannot save file to OneDrive with save name " + o)
                }
            })
        }, t.prototype.save = function (e) {
            var t = this;
            return new a.Promise(function (n, r) {
                if (e) {
                    var o = new XMLHttpRequest;
                    -1 === e.indexOf(".diagram") && (e += ".diagram");
                    var i = t.makeSaveFile();
                    o.open("PUT", "https://graph.microsoft.com/v1.0" + e + ":/content", !0), o.setRequestHeader("Authorization", "Bearer " + t.oauthToken), o.setRequestHeader("Content-Type", "application/json"), o.onreadystatechange = function () {
                        if (4 == o.readyState) if (o.status >= 200 && o.status < 300) {
                            var e = JSON.parse(o.response), r = {
                                name: e.name,
                                id: e.id,
                                path: e.parentReference.path + "/" + e.name,
                                parentReference: e.parentReference
                            };
                            n(r)
                        } else {
                            if (401 != o.status) throw Error(o.response);
                            t.authorize(!0)
                        }
                    }, o.send(i)
                } else if (t.currentDiagramFile.path) {
                    var a = t.currentDiagramFile.token, s = t.generateGraphUrl(t.currentDiagramFile, !0, !0),
                        c = (i = t.makeSaveFile(), a ? t.currentDiagramFile.token : t.oauthToken),
                        u = new XMLHttpRequest;
                    u.open("PUT", s, !0), u.setRequestHeader("Authorization", "Bearer " + c), u.onload = function () {
                        if (4 != u.readyState || 200 != u.status && 201 != u.status) r(u.response); else {
                            var e = JSON.parse(u.response), o = {
                                name: e.name,
                                id: e.id,
                                path: e.parentReference.path + "/" + e.name,
                                token: a,
                                parentReference: e.parentReference
                            };
                            t.currentDiagramFile = o, n(o), t._deferredPromise.promise.resolve(o), t._deferredPromise.promise = t.makeDeferredPromise()
                        }
                    }, u.send(i)
                } else n(t.saveWithUI())
            })
        }, t.prototype.loadWithUI = function () {
            var e = this;
            return new a.Promise(function (t, n) {
                var r = {
                    clientId: e.clientId,
                    action: "share",
                    multiSelect: !1,
                    advanced: {filter: ".diagram"},
                    success: function (n) {
                        var r = n.value[0], o = n.accessToken, i = r.parentReference.path + "/" + r.name;
                        t(e.load(i, o))
                    }
                };
                e.oneDriveFilepicker.open(r)
            })
        }, t.prototype.load = function (e, t) {
            var n = this;
            return new a.Promise(function (r, o) {
                if (e) {
                    var i = t || n.oauthToken;
                    n.getFile(e, i).then(function (e) {
                        var o = e["@microsoft.graph.downloadUrl"], i = new XMLHttpRequest;
                        i.open("GET", o, !0), i.onreadystatechange = function () {
                            if (4 == i.readyState && 200 == i.status) {
                                n.loadFromFileContents(i.response);
                                var o = {
                                    name: e.name,
                                    id: e.id,
                                    path: e.parentReference.path + "/" + e.name,
                                    token: t,
                                    parentReference: {id: e.parentReference.id, driveId: e.parentReference.driveId}
                                };
                                n.currentDiagramFile = o, r(o)
                            }
                        }, i.send()
                    })
                } else o("Cannot load file from OneDrive with path " + e)
            })
        }, t.prototype.removeWithUI = function () {
            var e = this;
            return new a.Promise(function (t, n) {
                var r = {
                    clientId: e.clientId, action: "share", openInNewWindow: !0, success: function (n) {
                        if (n) {
                            var r = n.value[0], o = n.accessToken, i = r.parentReference.path + "/" + r.name;
                            t(new a.Promise(function (t, n) {
                                t(e.remove(i, o))
                            }))
                        }
                    }
                };
                e.oneDriveFilepicker.open(r)
            })
        }, t.prototype.remove = function (e, t) {
            var n = this, r = t || n.oauthToken;
            return new a.Promise(function (t, o) {
                n.getFile(e, r).then(function (i) {
                    var a = {name: i.name, id: i.id, path: i.parentReference.path + "/" + i.name},
                        s = new XMLHttpRequest;
                    s.open("DELETE", "https://graph.microsoft.com/v1.0" + e, !0), s.setRequestHeader("Authorization", "Bearer" + r), s.onload = function () {
                        4 == s.readyState && 204 == s.status ? (n.currentDiagramFile && e == n.currentDiagramFile.path && (n.currentDiagramFile = {
                            id: null,
                            path: null,
                            name: null
                        }), t(a)) : 401 == s.status ? n.authorize(!0) : o(s.response)
                    }, s.send()
                }).catch(function (e) {
                    throw Error(e)
                })
            })
        }, t.prototype.generateGraphUrl = function (e, t, n) {
            var r = "https://graph.microsoft.com/v1.0/";
            return r += t ? "drives/" + e.parentReference.driveId + "/items/" + e.parentReference.id + "/children/" + e.name : "drives/" + e.parentReference.driveId + "/items/" + e.id, n && (r += "/content"), r
        }, t
    }(i.GoCloudStorage);
    t.GoOneDrive = s
}, function (e, t, n) {
    "use strict";
    var r,
        o = this && this.__extends || (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        }, function (e, t) {
            function n() {
                this.constructor = e
            }

            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        });
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(1), a = n(0), s = function (e) {
        function t(t, n, r, o, i) {
            var a = e.call(this, t, o, n) || this;
            return a._scope = "https://www.googleapis.com/auth/drive", a._pickerApiKey = r, a._oauthToken = null, a._gapiClient = null, a._gapiPicker = null, a.ui.id = "goGoogleDriveSavePrompt", a._serviceName = "Google Drive", a._className = "GoGoogleDrive", a
        }

        return o(t, e), Object.defineProperty(t.prototype, "pickerApiKey", {
            get: function () {
                return this._pickerApiKey
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "scope", {
            get: function () {
                return this._scope
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "gapiClient", {
            get: function () {
                return this._gapiClient
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "gapiPicker", {
            get: function () {
                return this._gapiPicker
            }, enumerable: !0, configurable: !0
        }), t.prototype.authorize = function (e) {
            void 0 === e && (e = !1);
            var t = this, n = null;
            if (window.gapi) {
                if (n = window.gapi, e) {
                    var r = document.location.href;
                    document.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=" + r
                }
                return new a.Promise(function (e, r) {
                    n.load("client:auth", function () {
                        n.auth.authorize({client_id: t.clientId, scope: t.scope, immediate: !1}, function (r) {
                            r && !r.error && (t._oauthToken = r.access_token), t._gapiClient = n.client, window.google && (t._gapiPicker = window.google.picker), e(!0)
                        })
                    }), n.load("picker", {})
                })
            }
        }, t.prototype.createPicker = function (e) {
            if (this._oauthToken) {
                var t = this.clientId.substring(0, this.clientId.indexOf("-")),
                    n = new this.gapiPicker.View(this.gapiPicker.ViewId.DOCS);
                n.setMimeTypes("application/json"), n.setQuery("*.diagram"), (new this.gapiPicker.PickerBuilder).enableFeature(this.gapiPicker.Feature.NAV_HIDDEN).enableFeature(this.gapiPicker.Feature.MULTISELECT_ENABLED).setAppId(t).setOrigin(window.location.protocol + "//" + window.location.host).setOAuthToken(this._oauthToken).addView(n).setDeveloperKey(this.pickerApiKey).setCallback(function (t) {
                    e(t)
                }).build().setVisible(!0)
            }
        }, t.prototype.getUserInfo = function () {
            var e = this;
            return new a.Promise(function (t, n) {
                e.gapiClient.request({
                    path: "/drive/v3/about",
                    method: "GET",
                    params: {fields: "user"},
                    callback: function (e) {
                        e ? t(e.user) : n(e)
                    }
                })
            })
        }, t.prototype.getFile = function (e) {
            var t = this;
            return new a.Promise(function (n, r) {
                t.gapiClient.request({
                    path: "/drive/v3/files/" + e, method: "GET", callback: function (e) {
                        e.error ? r(e.error) : n(e)
                    }
                })
            })
        }, t.prototype.checkFileExists = function (e) {
            var t = this;
            return new a.Promise(function (n, r) {
                t.gapiClient.request({
                    path: "/drive/v3/files/" + e, method: "GET", callback: function (e) {
                        n(!!e)
                    }
                })
            })
        }, t.prototype.showUI = function () {
            var e = this, t = e.ui;
            t.innerHTML = "", t.style.visibility = "visible", t.innerHTML = "<img class='icons' src='" + e.iconsRelativeDirectory + "googleDrive.jpg'></img><strong>Save Diagram As</strong><hr></hr>";
            var n = document.createElement("div");
            n.id = "userInputDiv", n.innerHTML += '<input id="userInput" placeholder="Enter filename"></input>', t.appendChild(n);
            var r = document.createElement("div");
            r.id = "submitDiv";
            var o = document.createElement("button");
            o.id = "actionButton", o.textContent = "Save", o.onclick = function () {
                e.saveWithUI()
            }, r.appendChild(o), t.appendChild(r);
            var i = document.createElement("div");
            i.id = "cancelDiv";
            var a = document.createElement("button");
            return a.id = "cancelButton", a.textContent = "Cancel", a.onclick = function () {
                e.hideUI(!0)
            }, i.appendChild(a), t.appendChild(i), e._deferredPromise.promise
        }, t.prototype.saveWithUI = function () {
            var e = this, t = e.ui;
            return new a.Promise(function (n, r) {
                if ("hidden" === t.style.visibility) n(e.showUI()); else {
                    var o = document.getElementById("userInput").value;
                    e.save(o), n(e.hideUI())
                }
            })
        }, t.prototype.save = function (e) {
            var t = this;
            return new a.Promise(function (n, r) {
                if (e) {
                    -1 === e.indexOf(".diagram") && (e += ".diagram");
                    t.gapiClient.request({
                        path: "/drive/v3/files",
                        method: "GET",
                        params: {q: 'trashed=false and name contains ".diagram" and mimeType = "application/json"'},
                        callback: function (r) {
                            var o = r.files;
                            if (o) for (var i = 0; i < o.length; i++) o[i].name == e && (!0, o[i]);
                            var a = "-------314159265358979323846", s = "\r\n--" + a + "\r\n",
                                c = {name: e, mimeType: "application/json"}, u = t.makeSaveFile(),
                                l = s + "Content-Type: application/json\r\n\r\n" + JSON.stringify(c) + s + "Content-Type: application/json\r\n\r\n" + u + "\r\n---------314159265358979323846--";
                            t.gapiClient.request({
                                path: "/upload/drive/v3/files",
                                method: "POST",
                                params: {uploadType: "multipart"},
                                headers: {"Content-Type": 'multipart/related; boundary="' + a + '"'},
                                body: l
                            }).execute(function (e) {
                                var r = {name: e.name, id: e.id, path: e.name};
                                t.currentDiagramFile = r, n(r), t._deferredPromise.promise.resolve(r), t._deferredPromise.promise = t.makeDeferredPromise()
                            })
                        }
                    })
                } else if (t.currentDiagramFile.path) {
                    var o = t.currentDiagramFile.id, i = t.makeSaveFile();
                    t.gapiClient.request({
                        path: "/upload/drive/v3/files/" + o,
                        method: "PATCH",
                        params: {uploadType: "media"},
                        body: i,
                        callback: function (e) {
                            if (e.error) 401 == e.error.code && t.authorize(!0); else {
                                var r = {name: e.name, id: e.id, path: e.name};
                                n(r)
                            }
                        }
                    })
                } else n(t.saveWithUI())
            })
        }, t.prototype.loadWithUI = function () {
            var e = this;
            return new a.Promise(function (t, n) {
                e.createPicker(function (n) {
                    if ("picked" === n.action) {
                        var r = n.docs[0];
                        e.gapiClient.request({
                            path: "/drive/v3/files/" + r.id + "?alt=media",
                            method: "GET",
                            callback: function (n) {
                                if (-1 !== r.name.indexOf(".diagram")) {
                                    var o = {name: r.name, path: r.name, id: r.id};
                                    t(e.load(r.id)), e.currentDiagramFile = o
                                }
                            }
                        })
                    }
                })
            })
        }, t.prototype.load = function (e) {
            var t = this;
            return new a.Promise(function (n, r) {
                t.getFile(e).then(function (e) {
                    t.gapiClient.request({
                        path: "/drive/v3/files/" + e.id + "?alt=media",
                        method: "GET",
                        callback: function (r) {
                            if (r && -1 !== e.name.indexOf(".diagram")) {
                                t.loadFromFileContents(JSON.stringify(r));
                                var o = {name: e.name, path: e.name, id: e.id};
                                t.currentDiagramFile = o, n(o)
                            }
                        }
                    })
                }).catch(function (e) {
                    r(e.message)
                })
            })
        }, t.prototype.removeWithUI = function () {
            var e = this;
            return new a.Promise(function (t, n) {
                e.createPicker(function (n) {
                    if ("picked" === n.action) {
                        var r = n.docs[0];
                        t(e.remove(r.id))
                    }
                })
            })
        }, t.prototype.remove = function (e) {
            var t = this;
            return new a.Promise(function (n, r) {
                t.getFile(e).then(function (r) {
                    t.gapiClient.request({
                        path: "drive/v3/files/" + e, method: "DELETE", callback: function () {
                            t.currentDiagramFile && e == t.currentDiagramFile.id && (t.currentDiagramFile = {
                                name: null,
                                path: null,
                                id: null
                            }), r.path = r.name, n(r)
                        }
                    })
                }).catch(function (e) {
                    r(e.message)
                })
            })
        }, t
    }(i.GoCloudStorage);
    t.GoGoogleDrive = s
}, function (e, t, n) {
    "use strict";
    var r,
        o = this && this.__extends || (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        }, function (e, t) {
            function n() {
                this.constructor = e
            }

            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        });
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(1), a = n(0), s = function (e) {
        function t(t, n, r, o) {
            var i = e.call(this, t, r, n) || this;
            if (window.Dropbox) {
                var a = window.Dropbox;
                i._dropbox = new a({clientId: n})
            }
            return i.menuPath = "", i.ui.id = "goDropBoxCustomFilepicker", i._serviceName = "Dropbox", i._className = "GoDropBox", i._options = {
                success: function (e) {
                    alert("Here's the file link: " + e[0].link)
                },
                cancel: function () {
                },
                linkType: "direct",
                multiselect: !1,
                extensions: [".pdf", ".doc", ".docx", ".diagram"],
                folderselect: !1
            }, i
        }

        return o(t, e), Object.defineProperty(t.prototype, "dropbox", {
            get: function () {
                return this._dropbox
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "menuPath", {
            get: function () {
                return this._menuPath
            }, set: function (e) {
                this._menuPath = e
            }, enumerable: !0, configurable: !0
        }), t.prototype.authorize = function (e) {
            void 0 === e && (e = !1);
            var t = this;
            return new a.Promise(function (n, r) {
                if (e) {
                    try {
                        var o = t.makeSaveFile();
                        window.localStorage.setItem("gdb-" + t.clientId, o)
                    } catch (e) {
                        console.error("Local storage not supported; diagrams model data will not be preserved during Dropboc authentication.")
                    }
                    var i = t.dropbox.getAuthenticationUrl(window.location.href);
                    window.location.href = i, n(!1)
                } else if (!t.dropbox.getAccessToken()) if (-1 !== window.location.hash.indexOf("access_token") && -1 !== window.location.hash.indexOf("id=dbid")) {
                    var a = window.location.hash.substring(window.location.hash.indexOf("=") + 1, window.location.hash.indexOf("&"));
                    t.dropbox.setAccessToken(a);
                    try {
                        var s = window.localStorage.getItem("gdb-" + t.clientId);
                        t.loadFromFileContents(s), localStorage.removeItem("gdb-" + t.clientId)
                    } catch (e) {
                    }
                    n(!0)
                } else {
                    try {
                        o = t.makeSaveFile();
                        window.localStorage.setItem("gdb-" + t.clientId, o)
                    } catch (e) {
                        console.error("Local storage not supported; diagrams model data will not be preserved during Dropboc authentication.")
                    }
                    i = t.dropbox.getAuthenticationUrl(window.location.href);
                    window.location.href = i, n(!1)
                }
                n(!0)
            })
        }, t.prototype.testAuth = function () {
            var e = new XMLHttpRequest;
            e.open("GET", "https://www.dropbox.com/oauth2/authorize", !0), e.setRequestHeader("response_type", "code"), e.setRequestHeader("client_id", this.clientId), e.onload = function () {
                if (4 != e.readyState || 200 != e.status) throw Error(e.response);
                console.log(e.response)
            }, e.send()
        }, t.prototype.getUserInfo = function () {
            var e = this;
            return new a.Promise(function (t, n) {
                e.dropbox.getAccessToken() || -1 != window.location.hash.indexOf("access_token") ? e.dropbox.getAccessToken() || 1 != window.location.hash.indexOf("access_token") || e.authorize(!1) : e.authorize(!0), e.dropbox.usersGetCurrentAccount(null).then(function (e) {
                    t(e)
                }).catch(function (t) {
                    400 == t.status && e.authorize(!0)
                })
            })
        }, t.prototype.showUI = function () {
            var e = this, t = e.ui;
            t.innerHTML = "", t.style.visibility = "visible", t.innerHTML = "<img class='icons' src='" + e.iconsRelativeDirectory + "dropBox.png'></img><strong>Save Diagram As</strong><hr></hr>";
            var n = document.createElement("div");
            n.id = "userInputDiv", n.innerHTML += '<input id="gdb-userInput" placeholder="Enter filename"></input>', t.appendChild(n);
            var r = document.createElement("div");
            r.id = "submitDiv";
            var o = document.createElement("button");
            o.id = "actionButton", o.textContent = "Save", o.onclick = function () {
                var n = document.getElementById("gdb-userInput").value;
                "" != n && void 0 != n && null != n && (t.style.visibility = "hidden", e.saveWithUI(n))
            }, r.appendChild(o), t.appendChild(r);
            var i = document.createElement("div");
            i.id = "cancelDiv";
            var a = document.createElement("button");
            return a.id = "cancelButton", a.textContent = "Cancel", a.onclick = function () {
                e.hideUI(!0)
            }, i.appendChild(a), t.appendChild(i), e._deferredPromise.promise
        }, t.prototype.hideUI = function (t) {
            this.menuPath = "", e.prototype.hideUI.call(this, t)
        }, t.prototype.processUIResult = function (e) {
            var t = function () {
                for (var e = document.getElementsByName("dropBoxFile"), t = null, n = 0; n < e.length; n++) e[n].checked && (t = e[n].getAttribute("data"));
                return t
            }();
            switch (e) {
                case"Save":
                    if (this.menuPath || "" === this.menuPath) {
                        var n = document.getElementById("userInput").value;
                        n ? (-1 === n.indexOf(".diagram") && (n += ".diagram"), this.save(this.menuPath + "/" + n)) : console.log("Proposed file name is not valid")
                    }
                    break;
                case"Load":
                    this.load(t);
                    break;
                case"Delete":
                    this.remove(t)
            }
            this.hideUI()
        }, t.prototype.checkFileExists = function (e) {
            var t = this;
            return -1 === e.indexOf(".diagram") && (e += ".diagram"), new a.Promise(function (n, r) {
                t.dropbox.filesGetMetadata({path: e}).then(function (e) {
                    e && n(!0)
                }).catch(function (e) {
                    n(!1)
                })
            })
        }, t.prototype.getFile = function (e) {
            return -1 === e.indexOf(".diagram") && (e += ".diagram"), this.dropbox.filesGetMetadata({path: e}).then(function (e) {
                if (e) return e
            }).catch(function (e) {
                return null
            })
        }, t.prototype.saveWithUI = function (e) {
            var t = this;
            return void 0 == e || null == e ? new a.Promise(function (e, n) {
                e(t.showUI())
            }) : (e.length < 8 ? e += ".diagram" : ".diagram" != e.substring(e.length - 8, e.length) && (e += ".diagram"), new a.Promise(function (n, r) {
                t._options.success = function (e) {
                    t.dropbox.filesListFolder({path: "", recursive: !0}).then(function (e) {
                        for (var r = e.entries, o = new Date(-84e5), i = null, a = 0; a < r.length; a++) {
                            var s = r[a], c = new Date(s.server_modified);
                            null != c && void 0 != c && c instanceof Date && c > o && (c = o, i = s)
                        }
                        var u = {name: i.name, path: i.path_lower, id: i.id};
                        t.currentDiagramFile = u, n(u), t._deferredPromise.promise.resolve(u), t._deferredPromise.promise = t.makeDeferredPromise()
                    })
                };
                var o = "data:text/html," + encodeURIComponent(t.makeSaveFile());
                window.Dropbox.save(o, e, t._options)
            }))
        }, t.prototype.save = function (e) {
            var t = this;
            return new a.Promise(function (n, r) {
                e ? t.dropbox.filesUpload({
                    contents: t.makeSaveFile(),
                    path: e,
                    autorename: !0,
                    mode: {".tag": "add"},
                    mute: !1
                }).then(function (e) {
                    var r = {name: e.name, id: e.id, path: e.path_lower};
                    t.currentDiagramFile = r, n(r), t._deferredPromise.promise.resolve(r), t._deferredPromise.promise = t.makeDeferredPromise()
                }).catch(function (e) {
                    400 == e.status && t.authorize(!0)
                }) : t.currentDiagramFile.path ? (e = t.currentDiagramFile.path, t.dropbox.filesUpload({
                    contents: t.makeSaveFile(),
                    path: e,
                    autorename: !1,
                    mode: {".tag": "overwrite"},
                    mute: !0
                }).then(function (e) {
                    var t = {name: e.name, id: e.id, path: e.path_lower};
                    n(t)
                }).catch(function (e) {
                    400 == e.status && t.authorize(!0)
                })) : n(t.saveWithUI())
            })
        }, t.prototype.loadWithUI = function () {
            var e = this;
            return e._options.success = function (t) {
                var n = t[0];
                e.dropbox.filesGetMetadata({path: n.id}).then(function (t) {
                    var n = t.path_display;
                    e.load(n)
                })
            }, window.Dropbox.choose(e._options), e._deferredPromise.promise
        }, t.prototype.load = function (e) {
            var t = this;
            return new a.Promise(function (n, r) {
                if (!e) throw Error("Cannot load file from Dropbox with path " + e);
                t.dropbox.filesGetTemporaryLink({path: e}).then(function (r) {
                    var o = r.link;
                    t.currentDiagramFile.name = r.metadata.name, t.currentDiagramFile.id = r.metadata.id, t.currentDiagramFile.path = e;
                    var i = new XMLHttpRequest;
                    i.open("GET", o, !0), i.setRequestHeader("Authorization", "Bearer " + t.dropbox.getAccessToken()), i.onload = function () {
                        if (4 != i.readyState || 200 != i.status) throw Error("Cannot load file from Dropbox with path " + e);
                        t.loadFromFileContents(i.response);
                        var o = {name: r.metadata.name, id: r.metadata.id, path: r.metadata.path_lower};
                        n(o), t._deferredPromise.promise.resolve(o), t._deferredPromise.promise = t.makeDeferredPromise()
                    }, i.send()
                }).catch(function (e) {
                    400 == e.status && t.authorize(!0)
                })
            })
        }, t.prototype.removeWithUI = function () {
            var e = this;
            return e._options.success = function (t) {
                var n = t[0];
                e.dropbox.filesGetMetadata({path: n.id}).then(function (t) {
                    var n = t.path_display;
                    e.remove(n)
                })
            }, window.Dropbox.choose(e._options), e._deferredPromise.promise
        }, t.prototype.remove = function (e) {
            var t = this;
            return new a.Promise(function (n, r) {
                if (!e) throw Error("Cannot delete file from Dropbox with path " + e);
                t.dropbox.filesDelete({path: e}).then(function (e) {
                    t.currentDiagramFile && t.currentDiagramFile.id === e.id && (t.currentDiagramFile = {
                        name: null,
                        path: null,
                        id: null
                    });
                    var r = {name: e.name, id: e.id, path: e.path_lower};
                    n(r), t._deferredPromise.promise.resolve(r), t._deferredPromise.promise = t.makeDeferredPromise()
                }).catch(function (e) {
                    400 == e.status && t.authorize(!0)
                })
            })
        }, t._MIN_FILES_IN_UI = 100, t
    }(i.GoCloudStorage);
    t.GoDropBox = s
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t) {
    var n, r, o = e.exports = {};

    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }

    !function () {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            r = a
        }
    }();
    var c, u = [], l = !1, d = -1;

    function p() {
        l && c && (l = !1, c.length ? u = c.concat(u) : d = -1, u.length && f())
    }

    function f() {
        if (!l) {
            var e = s(p);
            l = !0;
            for (var t = u.length; t;) {
                for (c = u, u = []; ++d < t;) c && c[d].run();
                d = -1, t = u.length
            }
            c = null, l = !1, function (e) {
                if (r === clearTimeout) return clearTimeout(e);
                if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                try {
                    r(e)
                } catch (t) {
                    try {
                        return r.call(null, e)
                    } catch (t) {
                        return r.call(this, e)
                    }
                }
            }(e)
        }
    }

    function m(e, t) {
        this.fun = e, this.array = t
    }

    function h() {
    }

    o.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        u.push(new m(e, t)), 1 !== u.length || l || s(f)
    }, m.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = h, o.addListener = h, o.once = h, o.off = h, o.removeListener = h, o.removeAllListeners = h, o.emit = h, o.prependListener = h, o.prependOnceListener = h, o.listeners = function (e) {
        return []
    }, o.binding = function (e) {
        throw new Error("process.binding is not supported")
    }, o.cwd = function () {
        return "/"
    }, o.chdir = function (e) {
        throw new Error("process.chdir is not supported")
    }, o.umask = function () {
        return 0
    }
}, function (e, t, n) {
    "use strict";
    var r,
        o = this && this.__extends || (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        }, function (e, t) {
            function n() {
                this.constructor = e
            }

            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        });
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(1), a = n(0), s = function (e) {
        function t(t, n, r) {
            var o = e.call(this, t, n) || this;
            return o._localStorage = window.localStorage, o.ui.id = "goLocalStorageCustomFilepicker", o._serviceName = "Local Storage", o._className = "GoLocalStorage", o
        }

        return o(t, e), Object.defineProperty(t.prototype, "localStorage", {
            get: function () {
                return this._localStorage
            }, enumerable: !0, configurable: !0
        }), t.prototype.authorize = function (e) {
            void 0 === e && (e = !1);
            var t = this;
            return new a.Promise(function (e, n) {
                try {
                    t.localStorage.setItem("item", "item"), t.localStorage.removeItem("item"), e(!0)
                } catch (t) {
                    e(!1)
                }
            })
        }, t.prototype.showUI = function (e, n) {
            var r = this, o = r.ui;
            n || (n = 0);
            var i = t._MIN_FILES_IN_UI + n;
            o.innerHTML = "<img class='icons' src='" + r.iconsRelativeDirectory + "localStorage.png'></img>";
            var a = e + " Diagram File";
            o.innerHTML += "<strong>" + a + "</strong><hr></hr>", document.getElementsByTagName("body")[0].appendChild(o), o.style.visibility = "visible";
            var s = document.createElement("div");
            s.id = "fileOptions";
            var c = [], u = (t._MIN_FILES_IN_UI, 0), l = !1;
            if (0 !== r.localStorage.length) {
                for (var d in r.localStorage) if (c.length < i) {
                    u++;
                    var p = r.localStorage.getItem(d);
                    if (p && (-1 !== p.indexOf("GraphLinksModel") || -1 !== p.indexOf("TreeModel"))) {
                        var f = {key: d, model: p};
                        c.push(f)
                    }
                    u === r.localStorage.length && (l = !0)
                }
            } else l = !0;
            if (0 !== c.length) for (var m = 0; m < c.length; m++) {
                var h = (f = c[m].key).replace(/ /g, "qwe45qw34");
                s.innerHTML += "Save" !== e ? "<div class='fileOption'><input id=" + h + " type='radio' name='localStorageFile' /><label id =" + h + "-label for='" + h + "'>" + f + "</label></div>" : "<div class='fileOption'><label id =" + h + "-label for='" + h + "'>" + f + "</label></div>"
            }
            if (!l) {
                var v = n + 50;
                s.innerHTML += "<p>There may be more diagram files not shown. <a id='localStorageLoadMoreFiles'>Click here</a> to try loading more.</p>", document.getElementById("localStorageLoadMoreFiles").onclick = function () {
                    r.showUI(e, v)
                }
            }
            if (o.appendChild(s), r.currentDiagramFile.id) {
                var g = r.currentDiagramFile.id.replace(/ /g, "qwe45qw34"), y = document.getElementById(g + "-label");
                y && (y.style.fontStyle = "italic")
            }
            if ("Save" === e) {
                var w = document.createElement("div");
                w.id = "userInputDiv", w.innerHTML += '<span>Save Diagram As </span><input id="userInput" placeholder="Enter filename"></input>', o.appendChild(w)
            }
            var _ = document.createElement("div");
            _.id = "submitDiv";
            var b = document.createElement("button");
            b.textContent = e, b.id = "actionButton", b.onclick = function () {
                r.processUIResult(e)
            }, _.appendChild(b), o.appendChild(_);
            var P = document.createElement("div"), D = document.createElement("button");
            return D.id = "cancelButton", D.textContent = "Cancel", D.onclick = function () {
                r.hideUI(!0)
            }, P.appendChild(D), o.appendChild(P), r._deferredPromise.promise
        }, t.prototype.processUIResult = function (e) {
            var t = function () {
                for (var e = document.getElementsByName("localStorageFile"), t = null, n = 0; n < e.length; n++) e[n].checked && (t = e[n].id.replace(/qwe45qw34/g, " "));
                return t || null
            }();
            switch (e) {
                case"Save":
                    var n = document.getElementById("userInput").value;
                    n && (n += ".diagram", this.save(n));
                    break;
                case"Load":
                    this.load(t);
                    break;
                case"Delete":
                    this.remove(t)
            }
            this.hideUI()
        }, t.prototype.getFile = function (e) {
            return -1 === e.indexOf(".diagram") && (e += ".diagram"), new a.Promise(function (t, n) {
                var r = window.localStorage.getItem(e) ? window.localStorage.getItem(e) : null;
                t({name: e, content: r, path: e, id: e})
            })
        }, t.prototype.checkFileExists = function (e) {
            return -1 === e.indexOf(".diagram") && (e += ".diagram"), new a.Promise(function (t, n) {
                t(!!window.localStorage.getItem(e))
            })
        }, t.prototype.saveWithUI = function () {
            var e = this;
            return new a.Promise(function (t, n) {
                t(e.showUI("Save"))
            })
        }, t.prototype.save = function (e) {
            var t = this;
            return new a.Promise(function (n, r) {
                if (e) {
                    -1 === e.indexOf(".diagram") && (e += ".diagram");
                    var o = t.makeSaveFile();
                    t.localStorage.setItem(e, o);
                    var i = {name: e, id: e, path: e};
                    t.currentDiagramFile = i, n(i), t._deferredPromise.promise.resolve(i), t._deferredPromise.promise = t.makeDeferredPromise()
                } else if (t.currentDiagramFile.path) {
                    var a = t.currentDiagramFile.path;
                    i = {name: a, path: a, id: a}, o = t.makeSaveFile();
                    t.localStorage.setItem(a, o), n(a)
                } else n(t.saveWithUI())
            })
        }, t.prototype.loadWithUI = function () {
            var e = this;
            return new a.Promise(function (t, n) {
                t(e.showUI("Load"))
            }).catch(function (e) {
                throw Error(e)
            })
        }, t.prototype.load = function (e) {
            var t = this;
            return new a.Promise(function (n, r) {
                if (!e) throw Error("Cannot load file from local storage with path " + e);
                var o = t.localStorage.getItem(e);
                if (!o) throw Error("Cannot load file from local storage with path " + e);
                t.loadFromFileContents(o);
                var i = {name: e, id: e, path: e};
                t.currentDiagramFile = i, n(i), t._deferredPromise.promise.resolve(i), t._deferredPromise.promise = t.makeDeferredPromise()
            }).catch(function (e) {
                throw Error(e)
            })
        }, t.prototype.removeWithUI = function () {
            var e = this;
            return new a.Promise(function (t, n) {
                t(e.showUI("Delete"))
            })
        }, t.prototype.remove = function (e) {
            var t = this;
            return new a.Promise(function (n, r) {
                if (!e) throw Error("Cannot delete file from local storage with path " + e);
                var o = {name: e, path: e, id: e};
                t.currentDiagramFile && e === t.currentDiagramFile.name && (t.currentDiagramFile = {
                    name: null,
                    path: null,
                    id: null
                }), t.localStorage.removeItem(e), n(o), t._deferredPromise.promise.resolve(o), t._deferredPromise.promise = t.makeDeferredPromise()
            })
        }, t._MIN_FILES_IN_UI = 100, t
    }(i.GoCloudStorage);
    t.GoLocalStorage = s
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), e.exports = {
        GoLocalStorage: n(10).GoLocalStorage,
        GoDropBox: n(7).GoDropBox,
        GoGoogleDrive: n(6).GoGoogleDrive,
        GoOneDrive: n(5).GoOneDrive,
        GoNetCore: n(4).GoNetCore,
        GoCloudStorageManager: n(3).GoCloudStorageManager
    }
}]);
//# sourceMappingURL=gcs.js.map
