// ==UserScript==
// @name         Quasar Mod 2.0 Optimised By Magnetar
// @version      v0.831
// @match        *://*.moomoo.io/*
// @description  proe descreiptison AAAAAAAAAAAAA
// @author       Spyder (original quasar by wynd) <- credit so wynd doesnt smack me (pls no hurt me wynd plspalslpsplsdl)
// @grant        none
// ==/UserScript==

setInterval((() => {
        onbeforeunload = null, "disconnected\nreload" == document.getElementById("loadingText").innerText && (document.body.remove(), location.href = location.href)
    }), 0),
    function(e) {
        var t = {};

        function n(i) {
            if (t[i]) return t[i].exports;
            var o = t[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }
        n.m = e, n.c = t, n.d = function(e, t, i) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: i
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if (n.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) n.d(i, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return i
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 21)
    }([function(e, t, n) {
        var i = t.global = n(25),
            o = t.hasBuffer = i && !!i.isBuffer,
            s = t.hasArrayBuffer = "undefined" != typeof ArrayBuffer,
            a = t.isArray = n(5);
        t.isArrayBuffer = s ? function(e) {
            return e instanceof ArrayBuffer || m(e)
        } : g;
        var r = t.isBuffer = o ? i.isBuffer : g,
            c = t.isView = s ? ArrayBuffer.isView || y("ArrayBuffer", "buffer") : g;
        t.alloc = f, t.concat = function(e, n) {
            n || (n = 0, Array.prototype.forEach.call(e, (function(e) {
                n += e.length
            })));
            var i = this !== t && this || e[0],
                o = f.call(i, n),
                s = 0;
            return Array.prototype.forEach.call(e, (function(e) {
                s += d.copy.call(e, o, s)
            })), o
        }, t.from = function(e) {
            return "string" == typeof e ? function(e) {
                var t = 3 * e.length,
                    n = f.call(this, t),
                    i = d.write.call(n, e);
                return t !== i && (n = d.slice.call(n, 0, i)), n
            }.call(this, e) : p(this).from(e)
        };
        var l = t.Array = n(28),
            h = t.Buffer = n(29),
            u = t.Uint8Array = n(30),
            d = t.prototype = n(6);

        function f(e) {
            return p(this).alloc(e)
        }
        var m = y("ArrayBuffer");

        function p(e) {
            return r(e) ? h : c(e) ? u : a(e) ? l : o ? h : s ? u : l
        }

        function g() {
            return !1
        }

        function y(e, t) {
            return e = "[object " + e + "]",
                function(n) {
                    return null != n && {}.toString.call(t ? n[t] : n) === e
                }
        }
    }, function(e, t, n) {
        var i = n(5);
        t.createCodec = r, t.install = function(e) {
            for (var t in e) s.prototype[t] = a(s.prototype[t], e[t])
        }, t.filter = function(e) {
            return i(e) ? function(e) {
                return e = e.slice(),
                    function(n) {
                        return e.reduce(t, n)
                    };

                function t(e, t) {
                    return t(e)
                }
            }(e) : e
        };
        var o = n(0);

        function s(e) {
            if (!(this instanceof s)) return new s(e);
            this.options = e, this.init()
        }

        function a(e, t) {
            return e && t ? function() {
                return e.apply(this, arguments), t.apply(this, arguments)
            } : e || t
        }

        function r(e) {
            return new s(e)
        }
        s.prototype.init = function() {
            var e = this.options;
            return e && e.uint8array && (this.bufferish = o.Uint8Array), this
        }, t.preset = r({
            preset: !0
        })
    }, function(e, t, n) {
        var i = n(3).ExtBuffer,
            o = n(32),
            s = n(33),
            a = n(1);

        function r() {
            var e = this.options;
            return this.encode = function(e) {
                var t = s.getWriteType(e);
                return function(e, n) {
                    var i = t[typeof n];
                    if (!i) throw new Error('Unsupported type "' + typeof n + '": ' + n);
                    i(e, n)
                }
            }(e), e && e.preset && o.setExtPackers(this), this
        }
        a.install({
            addExtPacker: function(e, t, n) {
                n = a.filter(n);
                var o = t.name;

                function s(t) {
                    return n && (t = n(t)), new i(t, e)
                }
                o && "Object" !== o ? (this.extPackers || (this.extPackers = {}))[o] = s : (this.extEncoderList || (this.extEncoderList = [])).unshift([t, s])
            },
            getExtPacker: function(e) {
                var t = this.extPackers || (this.extPackers = {}),
                    n = e.constructor,
                    i = n && n.name && t[n.name];
                if (i) return i;
                for (var o = this.extEncoderList || (this.extEncoderList = []), s = o.length, a = 0; a < s; a++) {
                    var r = o[a];
                    if (n === r[0]) return r[1]
                }
            },
            init: r
        }), t.preset = r.call(a.preset)
    }, function(e, t, n) {
        t.ExtBuffer = function e(t, n) {
            if (!(this instanceof e)) return new e(t, n);
            this.buffer = i.from(t), this.type = n
        };
        var i = n(0)
    }, function(e, t) {
        t.read = function(e, t, n, i, o) {
            var s, a, r = 8 * o - i - 1,
                c = (1 << r) - 1,
                l = c >> 1,
                h = -7,
                u = n ? o - 1 : 0,
                d = n ? -1 : 1,
                f = e[t + u];
            for (u += d, s = f & (1 << -h) - 1, f >>= -h, h += r; h > 0; s = 256 * s + e[t + u], u += d, h -= 8);
            for (a = s & (1 << -h) - 1, s >>= -h, h += i; h > 0; a = 256 * a + e[t + u], u += d, h -= 8);
            if (0 === s) s = 1 - l;
            else {
                if (s === c) return a ? NaN : 1 / 0 * (f ? -1 : 1);
                a += Math.pow(2, i), s -= l
            }
            return (f ? -1 : 1) * a * Math.pow(2, s - i)
        }, t.write = function(e, t, n, i, o, s) {
            var a, r, c, l = 8 * s - o - 1,
                h = (1 << l) - 1,
                u = h >> 1,
                d = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                f = i ? 0 : s - 1,
                m = i ? 1 : -1,
                p = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (r = isNaN(t) ? 1 : 0, a = h) : (a = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -a)) < 1 && (a--, c *= 2), (t += a + u >= 1 ? d / c : d * Math.pow(2, 1 - u)) * c >= 2 && (a++, c /= 2), a + u >= h ? (r = 0, a = h) : a + u >= 1 ? (r = (t * c - 1) * Math.pow(2, o), a += u) : (r = t * Math.pow(2, u - 1) * Math.pow(2, o), a = 0)); o >= 8; e[n + f] = 255 & r, f += m, r /= 256, o -= 8);
            for (a = a << o | r, l += o; l > 0; e[n + f] = 255 & a, f += m, a /= 256, l -= 8);
            e[n + f - m] |= 128 * p
        }
    }, function(e, t) {
        var n = {}.toString;
        e.exports = Array.isArray || function(e) {
            return "[object Array]" == n.call(e)
        }
    }, function(e, t, n) {
        var i = n(31);
        t.copy = c, t.slice = l, t.toString = function(e, t, n) {
            return (!a && o.isBuffer(this) ? this.toString : i.toString).apply(this, arguments)
        }, t.write = function(e) {
            return function() {
                return (this[e] || i[e]).apply(this, arguments)
            }
        }("write");
        var o = n(0),
            s = o.global,
            a = o.hasBuffer && "TYPED_ARRAY_SUPPORT" in s,
            r = a && !s.TYPED_ARRAY_SUPPORT;

        function c(e, t, n, s) {
            var a = o.isBuffer(this),
                c = o.isBuffer(e);
            if (a && c) return this.copy(e, t, n, s);
            if (r || a || c || !o.isView(this) || !o.isView(e)) return i.copy.call(this, e, t, n, s);
            var h = n || null != s ? l.call(this, n, s) : this;
            return e.set(h, t), h.length
        }

        function l(e, t) {
            var n = this.slice || !r && this.subarray;
            if (n) return n.call(this, e, t);
            var i = o.alloc.call(this, t - e);
            return c.call(this, i, 0, e, t), i
        }
    }, function(e, t, n) {
        (function(e) {
            ! function(t) {
                var n, i = "undefined",
                    o = i !== typeof e && e,
                    s = i !== typeof Uint8Array && Uint8Array,
                    a = i !== typeof ArrayBuffer && ArrayBuffer,
                    r = [0, 0, 0, 0, 0, 0, 0, 0],
                    c = Array.isArray || function(e) {
                        return !!e && "[object Array]" == Object.prototype.toString.call(e)
                    },
                    l = 4294967296;

                function h(e, c, h) {
                    var b = c ? 0 : 4,
                        x = c ? 4 : 0,
                        T = c ? 0 : 3,
                        I = c ? 1 : 2,
                        E = c ? 2 : 1,
                        M = c ? 3 : 0,
                        C = c ? y : v,
                        P = c ? w : k,
                        S = B.prototype,
                        L = "is" + e,
                        A = "_" + L;
                    return S.buffer = void 0, S.offset = 0, S[A] = !0, S.toNumber = _, S.toString = function(e) {
                        var t = this.buffer,
                            n = this.offset,
                            i = R(t, n + b),
                            o = R(t, n + x),
                            s = "",
                            a = !h && 2147483648 & i;
                        for (a && (i = ~i, o = l - o), e = e || 10;;) {
                            var r = i % e * l + o;
                            if (i = Math.floor(i / e), o = Math.floor(r / e), s = (r % e).toString(e) + s, !i && !o) break
                        }
                        return a && (s = "-" + s), s
                    }, S.toJSON = _, S.toArray = u, o && (S.toBuffer = d), s && (S.toArrayBuffer = f), B[L] = function(e) {
                        return !(!e || !e[A])
                    }, t[e] = B, B;

                    function B(e, t, o, c) {
                        return this instanceof B ? function(e, t, o, c, h) {
                            s && a && (t instanceof a && (t = new s(t)), c instanceof a && (c = new s(c))), t || o || c || n ? (m(t, o) || (h = o, c = t, o = 0, t = new(n || Array)(8)), e.buffer = t, e.offset = o |= 0, i !== typeof c && ("string" == typeof c ? function(e, t, n, i) {
                                var o = 0,
                                    s = n.length,
                                    a = 0,
                                    r = 0;
                                "-" === n[0] && o++;
                                for (var c = o; o < s;) {
                                    var h = parseInt(n[o++], i);
                                    if (!(h >= 0)) break;
                                    r = r * i + h, a = a * i + Math.floor(r / l), r %= l
                                }
                                c && (a = ~a, r ? r = l - r : a++), O(e, t + b, a), O(e, t + x, r)
                            }(t, o, c, h || 10) : m(c, h) ? p(t, o, c, h) : "number" == typeof h ? (O(t, o + b, c), O(t, o + x, h)) : c > 0 ? C(t, o, c) : c < 0 ? P(t, o, c) : p(t, o, r, 0))) : e.buffer = g(r, 0)
                        }(this, e, t, o, c) : new B(e, t, o, c)
                    }

                    function _() {
                        var e = this.buffer,
                            t = this.offset,
                            n = R(e, t + b),
                            i = R(e, t + x);
                        return h || (n |= 0), n ? n * l + i : i
                    }

                    function O(e, t, n) {
                        e[t + M] = 255 & n, n >>= 8, e[t + E] = 255 & n, n >>= 8, e[t + I] = 255 & n, n >>= 8, e[t + T] = 255 & n
                    }

                    function R(e, t) {
                        return 16777216 * e[t + T] + (e[t + I] << 16) + (e[t + E] << 8) + e[t + M]
                    }
                }

                function u(e) {
                    var t = this.buffer,
                        i = this.offset;
                    return n = null, !1 !== e && 0 === i && 8 === t.length && c(t) ? t : g(t, i)
                }

                function d(t) {
                    var i = this.buffer,
                        s = this.offset;
                    if (n = o, !1 !== t && 0 === s && 8 === i.length && e.isBuffer(i)) return i;
                    var a = new o(8);
                    return p(a, 0, i, s), a
                }

                function f(e) {
                    var t = this.buffer,
                        i = this.offset,
                        o = t.buffer;
                    if (n = s, !1 !== e && 0 === i && o instanceof a && 8 === o.byteLength) return o;
                    var r = new s(8);
                    return p(r, 0, t, i), r.buffer
                }

                function m(e, t) {
                    var n = e && e.length;
                    return t |= 0, n && t + 8 <= n && "string" != typeof e[t]
                }

                function p(e, t, n, i) {
                    t |= 0, i |= 0;
                    for (var o = 0; o < 8; o++) e[t++] = 255 & n[i++]
                }

                function g(e, t) {
                    return Array.prototype.slice.call(e, t, t + 8)
                }

                function y(e, t, n) {
                    for (var i = t + 8; i > t;) e[--i] = 255 & n, n /= 256
                }

                function w(e, t, n) {
                    var i = t + 8;
                    for (n++; i > t;) e[--i] = 255 & -n ^ 255, n /= 256
                }

                function v(e, t, n) {
                    for (var i = t + 8; t < i;) e[t++] = 255 & n, n /= 256
                }

                function k(e, t, n) {
                    var i = t + 8;
                    for (n++; t < i;) e[t++] = 255 & -n ^ 255, n /= 256
                }
                h("Uint64BE", !0, !0), h("Int64BE", !0, !1), h("Uint64LE", !1, !0), h("Int64LE", !1, !1)
            }("string" != typeof t.nodeName ? t : this || {})
        }).call(this, n(11).Buffer)
    }, function(e, t, n) {
        var i = n(3).ExtBuffer,
            o = n(35),
            s = n(17).readUint8,
            a = n(36),
            r = n(1);

        function c() {
            var e = this.options;
            return this.decode = function(e) {
                var t = a.getReadToken(e);
                return function(e) {
                    var n = s(e),
                        i = t[n];
                    if (!i) throw new Error("Invalid type: " + (n ? "0x" + n.toString(16) : n));
                    return i(e)
                }
            }(e), e && e.preset && o.setExtUnpackers(this), this
        }
        r.install({
            addExtUnpacker: function(e, t) {
                (this.extUnpackers || (this.extUnpackers = []))[e] = r.filter(t)
            },
            getExtUnpacker: function(e) {
                return (this.extUnpackers || (this.extUnpackers = []))[e] || function(t) {
                    return new i(t, e)
                }
            },
            init: c
        }), t.preset = c.call(r.preset)
    }, function(e, t, n) {
        t.encode = function(e, t) {
            var n = new i(t);
            return n.write(e), n.read()
        };
        var i = n(10).EncodeBuffer
    }, function(e, t, n) {
        t.EncodeBuffer = o;
        var i = n(2).preset;

        function o(e) {
            if (!(this instanceof o)) return new o(e);
            if (e && (this.options = e, e.codec)) {
                var t = this.codec = e.codec;
                t.bufferish && (this.bufferish = t.bufferish)
            }
        }
        n(14).FlexEncoder.mixin(o.prototype), o.prototype.codec = i, o.prototype.write = function(e) {
            this.codec.encode(this, e)
        }
    }, function(e, t, n) {
        (function(e) {
            var i = n(26),
                o = n(4),
                s = n(27);

            function a() {
                return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function r(e, t) {
                if (a() < t) throw new RangeError("Invalid typed array length");
                return c.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = c.prototype : (null === e && (e = new c(t)), e.length = t), e
            }

            function c(e, t, n) {
                if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(e, t, n);
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                    return u(this, e)
                }
                return l(this, e, t, n)
            }

            function l(e, t, n, i) {
                if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, i) {
                    if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
                    if (t.byteLength < n + (i || 0)) throw new RangeError("'length' is out of bounds");
                    return t = void 0 === n && void 0 === i ? new Uint8Array(t) : void 0 === i ? new Uint8Array(t, n) : new Uint8Array(t, n, i), c.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = c.prototype : e = d(e, t), e
                }(e, t, n, i) : "string" == typeof t ? function(e, t, n) {
                    if ("string" == typeof n && "" !== n || (n = "utf8"), !c.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                    var i = 0 | m(t, n),
                        o = (e = r(e, i)).write(t, n);
                    return o !== i && (e = e.slice(0, o)), e
                }(e, t, n) : function(e, t) {
                    if (c.isBuffer(t)) {
                        var n = 0 | f(t.length);
                        return 0 === (e = r(e, n)).length || t.copy(e, 0, 0, n), e
                    }
                    if (t) {
                        if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || function(e) {
                            return e != e
                        }(t.length) ? r(e, 0) : d(e, t);
                        if ("Buffer" === t.type && s(t.data)) return d(e, t.data)
                    }
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(e, t)
            }

            function h(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                if (e < 0) throw new RangeError('"size" argument must not be negative')
            }

            function u(e, t) {
                if (h(t), e = r(e, t < 0 ? 0 : 0 | f(t)), !c.TYPED_ARRAY_SUPPORT)
                    for (var n = 0; n < t; ++n) e[n] = 0;
                return e
            }

            function d(e, t) {
                var n = t.length < 0 ? 0 : 0 | f(t.length);
                e = r(e, n);
                for (var i = 0; i < n; i += 1) e[i] = 255 & t[i];
                return e
            }

            function f(e) {
                if (e >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
                return 0 | e
            }

            function m(e, t) {
                if (c.isBuffer(e)) return e.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var n = e.length;
                if (0 === n) return 0;
                for (var i = !1;;) switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return n;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return W(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * n;
                    case "hex":
                        return n >>> 1;
                    case "base64":
                        return Y(e).length;
                    default:
                        if (i) return W(e).length;
                        t = ("" + t).toLowerCase(), i = !0
                }
            }

            function p(e, t, n) {
                var i = e[t];
                e[t] = e[n], e[n] = i
            }

            function g(e, t, n, i, o) {
                if (0 === e.length) return -1;
                if ("string" == typeof n ? (i = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                    if (o) return -1;
                    n = e.length - 1
                } else if (n < 0) {
                    if (!o) return -1;
                    n = 0
                }
                if ("string" == typeof t && (t = c.from(t, i)), c.isBuffer(t)) return 0 === t.length ? -1 : y(e, t, n, i, o);
                if ("number" == typeof t) return t &= 255, c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : y(e, [t], n, i, o);
                throw new TypeError("val must be string, number or Buffer")
            }

            function y(e, t, n, i, o) {
                var s, a = 1,
                    r = e.length,
                    c = t.length;
                if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    a = 2, r /= 2, c /= 2, n /= 2
                }

                function l(e, t) {
                    return 1 === a ? e[t] : e.readUInt16BE(t * a)
                }
                if (o) {
                    var h = -1;
                    for (s = n; s < r; s++)
                        if (l(e, s) === l(t, -1 === h ? 0 : s - h)) {
                            if (-1 === h && (h = s), s - h + 1 === c) return h * a
                        } else - 1 !== h && (s -= s - h), h = -1
                } else
                    for (n + c > r && (n = r - c), s = n; s >= 0; s--) {
                        for (var u = !0, d = 0; d < c; d++)
                            if (l(e, s + d) !== l(t, d)) {
                                u = !1;
                                break
                            } if (u) return s
                    }
                return -1
            }

            function w(e, t, n, i) {
                n = Number(n) || 0;
                var o = e.length - n;
                i ? (i = Number(i)) > o && (i = o) : i = o;
                var s = t.length;
                if (s % 2 != 0) throw new TypeError("Invalid hex string");
                i > s / 2 && (i = s / 2);
                for (var a = 0; a < i; ++a) {
                    var r = parseInt(t.substr(2 * a, 2), 16);
                    if (isNaN(r)) return a;
                    e[n + a] = r
                }
                return a
            }

            function v(e, t, n, i) {
                return q(W(t, e.length - n), e, n, i)
            }

            function k(e, t, n, i) {
                return q(function(e) {
                    for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                    return t
                }(t), e, n, i)
            }

            function b(e, t, n, i) {
                return k(e, t, n, i)
            }

            function x(e, t, n, i) {
                return q(Y(t), e, n, i)
            }

            function T(e, t, n, i) {
                return q(function(e, t) {
                    for (var n, i, o, s = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) i = (n = e.charCodeAt(a)) >> 8, o = n % 256, s.push(o), s.push(i);
                    return s
                }(t, e.length - n), e, n, i)
            }

            function I(e, t, n) {
                return 0 === t && n === e.length ? i.fromByteArray(e) : i.fromByteArray(e.slice(t, n))
            }

            function E(e, t, n) {
                n = Math.min(e.length, n);
                for (var i = [], o = t; o < n;) {
                    var s, a, r, c, l = e[o],
                        h = null,
                        u = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
                    if (o + u <= n) switch (u) {
                        case 1:
                            l < 128 && (h = l);
                            break;
                        case 2:
                            128 == (192 & (s = e[o + 1])) && (c = (31 & l) << 6 | 63 & s) > 127 && (h = c);
                            break;
                        case 3:
                            s = e[o + 1], a = e[o + 2], 128 == (192 & s) && 128 == (192 & a) && (c = (15 & l) << 12 | (63 & s) << 6 | 63 & a) > 2047 && (c < 55296 || c > 57343) && (h = c);
                            break;
                        case 4:
                            s = e[o + 1], a = e[o + 2], r = e[o + 3], 128 == (192 & s) && 128 == (192 & a) && 128 == (192 & r) && (c = (15 & l) << 18 | (63 & s) << 12 | (63 & a) << 6 | 63 & r) > 65535 && c < 1114112 && (h = c)
                    }
                    null === h ? (h = 65533, u = 1) : h > 65535 && (h -= 65536, i.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), i.push(h), o += u
                }
                return function(e) {
                    var t = e.length;
                    if (t <= M) return String.fromCharCode.apply(String, e);
                    for (var n = "", i = 0; i < t;) n += String.fromCharCode.apply(String, e.slice(i, i += M));
                    return n
                }(i)
            }
            t.Buffer = c, t.SlowBuffer = function(e) {
                return +e != e && (e = 0), c.alloc(+e)
            }, t.INSPECT_MAX_BYTES = 50, c.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
                try {
                    var e = new Uint8Array(1);
                    return e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                } catch (e) {
                    return !1
                }
            }(), t.kMaxLength = a(), c.poolSize = 8192, c._augment = function(e) {
                return e.__proto__ = c.prototype, e
            }, c.from = function(e, t, n) {
                return l(null, e, t, n)
            }, c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
                value: null,
                configurable: !0
            })), c.alloc = function(e, t, n) {
                return function(e, t, n, i) {
                    return h(t), t <= 0 ? r(e, t) : void 0 !== n ? "string" == typeof i ? r(e, t).fill(n, i) : r(e, t).fill(n) : r(e, t)
                }(null, e, t, n)
            }, c.allocUnsafe = function(e) {
                return u(null, e)
            }, c.allocUnsafeSlow = function(e) {
                return u(null, e)
            }, c.isBuffer = function(e) {
                return !(null == e || !e._isBuffer)
            }, c.compare = function(e, t) {
                if (!c.isBuffer(e) || !c.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                if (e === t) return 0;
                for (var n = e.length, i = t.length, o = 0, s = Math.min(n, i); o < s; ++o)
                    if (e[o] !== t[o]) {
                        n = e[o], i = t[o];
                        break
                    } return n < i ? -1 : i < n ? 1 : 0
            }, c.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, c.concat = function(e, t) {
                if (!s(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return c.alloc(0);
                var n;
                if (void 0 === t)
                    for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                var i = c.allocUnsafe(t),
                    o = 0;
                for (n = 0; n < e.length; ++n) {
                    var a = e[n];
                    if (!c.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                    a.copy(i, o), o += a.length
                }
                return i
            }, c.byteLength = m, c.prototype._isBuffer = !0, c.prototype.swap16 = function() {
                var e = this.length;
                if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2) p(this, t, t + 1);
                return this
            }, c.prototype.swap32 = function() {
                var e = this.length;
                if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4) p(this, t, t + 3), p(this, t + 1, t + 2);
                return this
            }, c.prototype.swap64 = function() {
                var e = this.length;
                if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8) p(this, t, t + 7), p(this, t + 1, t + 6), p(this, t + 2, t + 5), p(this, t + 3, t + 4);
                return this
            }, c.prototype.toString = function() {
                var e = 0 | this.length;
                return 0 === e ? "" : 0 === arguments.length ? E(this, 0, e) : function(e, t, n) {
                    var i = !1;
                    if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                    if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                    if ((n >>>= 0) <= (t >>>= 0)) return "";
                    for (e || (e = "utf8");;) switch (e) {
                        case "hex":
                            return S(this, t, n);
                        case "utf8":
                        case "utf-8":
                            return E(this, t, n);
                        case "ascii":
                            return C(this, t, n);
                        case "latin1":
                        case "binary":
                            return P(this, t, n);
                        case "base64":
                            return I(this, t, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return L(this, t, n);
                        default:
                            if (i) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(), i = !0
                    }
                }.apply(this, arguments)
            }, c.prototype.equals = function(e) {
                if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === c.compare(this, e)
            }, c.prototype.inspect = function() {
                var e = "",
                    n = t.INSPECT_MAX_BYTES;
                return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
            }, c.prototype.compare = function(e, t, n, i, o) {
                if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === i && (i = 0), void 0 === o && (o = this.length), t < 0 || n > e.length || i < 0 || o > this.length) throw new RangeError("out of range index");
                if (i >= o && t >= n) return 0;
                if (i >= o) return -1;
                if (t >= n) return 1;
                if (this === e) return 0;
                for (var s = (o >>>= 0) - (i >>>= 0), a = (n >>>= 0) - (t >>>= 0), r = Math.min(s, a), l = this.slice(i, o), h = e.slice(t, n), u = 0; u < r; ++u)
                    if (l[u] !== h[u]) {
                        s = l[u], a = h[u];
                        break
                    } return s < a ? -1 : a < s ? 1 : 0
            }, c.prototype.includes = function(e, t, n) {
                return -1 !== this.indexOf(e, t, n)
            }, c.prototype.indexOf = function(e, t, n) {
                return g(this, e, t, n, !0)
            }, c.prototype.lastIndexOf = function(e, t, n) {
                return g(this, e, t, n, !1)
            }, c.prototype.write = function(e, t, n, i) {
                if (void 0 === t) i = "utf8", n = this.length, t = 0;
                else if (void 0 === n && "string" == typeof t) i = t, n = this.length, t = 0;
                else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t |= 0, isFinite(n) ? (n |= 0, void 0 === i && (i = "utf8")) : (i = n, n = void 0)
                }
                var o = this.length - t;
                if ((void 0 === n || n > o) && (n = o), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                i || (i = "utf8");
                for (var s = !1;;) switch (i) {
                    case "hex":
                        return w(this, e, t, n);
                    case "utf8":
                    case "utf-8":
                        return v(this, e, t, n);
                    case "ascii":
                        return k(this, e, t, n);
                    case "latin1":
                    case "binary":
                        return b(this, e, t, n);
                    case "base64":
                        return x(this, e, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return T(this, e, t, n);
                    default:
                        if (s) throw new TypeError("Unknown encoding: " + i);
                        i = ("" + i).toLowerCase(), s = !0
                }
            }, c.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            var M = 4096;

            function C(e, t, n) {
                var i = "";
                n = Math.min(e.length, n);
                for (var o = t; o < n; ++o) i += String.fromCharCode(127 & e[o]);
                return i
            }

            function P(e, t, n) {
                var i = "";
                n = Math.min(e.length, n);
                for (var o = t; o < n; ++o) i += String.fromCharCode(e[o]);
                return i
            }

            function S(e, t, n) {
                var i = e.length;
                (!t || t < 0) && (t = 0), (!n || n < 0 || n > i) && (n = i);
                for (var o = "", s = t; s < n; ++s) o += z(e[s]);
                return o
            }

            function L(e, t, n) {
                for (var i = e.slice(t, n), o = "", s = 0; s < i.length; s += 2) o += String.fromCharCode(i[s] + 256 * i[s + 1]);
                return o
            }

            function A(e, t, n) {
                if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
            }

            function B(e, t, n, i, o, s) {
                if (!c.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > o || t < s) throw new RangeError('"value" argument is out of bounds');
                if (n + i > e.length) throw new RangeError("Index out of range")
            }

            function _(e, t, n, i) {
                t < 0 && (t = 65535 + t + 1);
                for (var o = 0, s = Math.min(e.length - n, 2); o < s; ++o) e[n + o] = (t & 255 << 8 * (i ? o : 1 - o)) >>> 8 * (i ? o : 1 - o)
            }

            function O(e, t, n, i) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var o = 0, s = Math.min(e.length - n, 4); o < s; ++o) e[n + o] = t >>> 8 * (i ? o : 3 - o) & 255
            }

            function R(e, t, n, i, o, s) {
                if (n + i > e.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("Index out of range")
            }

            function j(e, t, n, i, s) {
                return s || R(e, 0, n, 4), o.write(e, t, n, i, 23, 4), n + 4
            }

            function D(e, t, n, i, s) {
                return s || R(e, 0, n, 8), o.write(e, t, n, i, 52, 8), n + 8
            }
            c.prototype.slice = function(e, t) {
                var n, i = this.length;
                if ((e = ~~e) < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i), (t = void 0 === t ? i : ~~t) < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i), t < e && (t = e), c.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = c.prototype;
                else {
                    var o = t - e;
                    n = new c(o, void 0);
                    for (var s = 0; s < o; ++s) n[s] = this[s + e]
                }
                return n
            }, c.prototype.readUIntLE = function(e, t, n) {
                e |= 0, t |= 0, n || A(e, t, this.length);
                for (var i = this[e], o = 1, s = 0; ++s < t && (o *= 256);) i += this[e + s] * o;
                return i
            }, c.prototype.readUIntBE = function(e, t, n) {
                e |= 0, t |= 0, n || A(e, t, this.length);
                for (var i = this[e + --t], o = 1; t > 0 && (o *= 256);) i += this[e + --t] * o;
                return i
            }, c.prototype.readUInt8 = function(e, t) {
                return t || A(e, 1, this.length), this[e]
            }, c.prototype.readUInt16LE = function(e, t) {
                return t || A(e, 2, this.length), this[e] | this[e + 1] << 8
            }, c.prototype.readUInt16BE = function(e, t) {
                return t || A(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, c.prototype.readUInt32LE = function(e, t) {
                return t || A(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, c.prototype.readUInt32BE = function(e, t) {
                return t || A(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, c.prototype.readIntLE = function(e, t, n) {
                e |= 0, t |= 0, n || A(e, t, this.length);
                for (var i = this[e], o = 1, s = 0; ++s < t && (o *= 256);) i += this[e + s] * o;
                return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i
            }, c.prototype.readIntBE = function(e, t, n) {
                e |= 0, t |= 0, n || A(e, t, this.length);
                for (var i = t, o = 1, s = this[e + --i]; i > 0 && (o *= 256);) s += this[e + --i] * o;
                return s >= (o *= 128) && (s -= Math.pow(2, 8 * t)), s
            }, c.prototype.readInt8 = function(e, t) {
                return t || A(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }, c.prototype.readInt16LE = function(e, t) {
                t || A(e, 2, this.length);
                var n = this[e] | this[e + 1] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, c.prototype.readInt16BE = function(e, t) {
                t || A(e, 2, this.length);
                var n = this[e + 1] | this[e] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, c.prototype.readInt32LE = function(e, t) {
                return t || A(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, c.prototype.readInt32BE = function(e, t) {
                return t || A(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, c.prototype.readFloatLE = function(e, t) {
                return t || A(e, 4, this.length), o.read(this, e, !0, 23, 4)
            }, c.prototype.readFloatBE = function(e, t) {
                return t || A(e, 4, this.length), o.read(this, e, !1, 23, 4)
            }, c.prototype.readDoubleLE = function(e, t) {
                return t || A(e, 8, this.length), o.read(this, e, !0, 52, 8)
            }, c.prototype.readDoubleBE = function(e, t) {
                return t || A(e, 8, this.length), o.read(this, e, !1, 52, 8)
            }, c.prototype.writeUIntLE = function(e, t, n, i) {
                e = +e, t |= 0, n |= 0, i || B(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                var o = 1,
                    s = 0;
                for (this[t] = 255 & e; ++s < n && (o *= 256);) this[t + s] = e / o & 255;
                return t + n
            }, c.prototype.writeUIntBE = function(e, t, n, i) {
                e = +e, t |= 0, n |= 0, i || B(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                var o = n - 1,
                    s = 1;
                for (this[t + o] = 255 & e; --o >= 0 && (s *= 256);) this[t + o] = e / s & 255;
                return t + n
            }, c.prototype.writeUInt8 = function(e, t, n) {
                return e = +e, t |= 0, n || B(this, e, t, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
            }, c.prototype.writeUInt16LE = function(e, t, n) {
                return e = +e, t |= 0, n || B(this, e, t, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : _(this, e, t, !0), t + 2
            }, c.prototype.writeUInt16BE = function(e, t, n) {
                return e = +e, t |= 0, n || B(this, e, t, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : _(this, e, t, !1), t + 2
            }, c.prototype.writeUInt32LE = function(e, t, n) {
                return e = +e, t |= 0, n || B(this, e, t, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : O(this, e, t, !0), t + 4
            }, c.prototype.writeUInt32BE = function(e, t, n) {
                return e = +e, t |= 0, n || B(this, e, t, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : O(this, e, t, !1), t + 4
            }, c.prototype.writeIntLE = function(e, t, n, i) {
                if (e = +e, t |= 0, !i) {
                    var o = Math.pow(2, 8 * n - 1);
                    B(this, e, t, n, o - 1, -o)
                }
                var s = 0,
                    a = 1,
                    r = 0;
                for (this[t] = 255 & e; ++s < n && (a *= 256);) e < 0 && 0 === r && 0 !== this[t + s - 1] && (r = 1), this[t + s] = (e / a >> 0) - r & 255;
                return t + n
            }, c.prototype.writeIntBE = function(e, t, n, i) {
                if (e = +e, t |= 0, !i) {
                    var o = Math.pow(2, 8 * n - 1);
                    B(this, e, t, n, o - 1, -o)
                }
                var s = n - 1,
                    a = 1,
                    r = 0;
                for (this[t + s] = 255 & e; --s >= 0 && (a *= 256);) e < 0 && 0 === r && 0 !== this[t + s + 1] && (r = 1), this[t + s] = (e / a >> 0) - r & 255;
                return t + n
            }, c.prototype.writeInt8 = function(e, t, n) {
                return e = +e, t |= 0, n || B(this, e, t, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, c.prototype.writeInt16LE = function(e, t, n) {
                return e = +e, t |= 0, n || B(this, e, t, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : _(this, e, t, !0), t + 2
            }, c.prototype.writeInt16BE = function(e, t, n) {
                return e = +e, t |= 0, n || B(this, e, t, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : _(this, e, t, !1), t + 2
            }, c.prototype.writeInt32LE = function(e, t, n) {
                return e = +e, t |= 0, n || B(this, e, t, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : O(this, e, t, !0), t + 4
            }, c.prototype.writeInt32BE = function(e, t, n) {
                return e = +e, t |= 0, n || B(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : O(this, e, t, !1), t + 4
            }, c.prototype.writeFloatLE = function(e, t, n) {
                return j(this, e, t, !0, n)
            }, c.prototype.writeFloatBE = function(e, t, n) {
                return j(this, e, t, !1, n)
            }, c.prototype.writeDoubleLE = function(e, t, n) {
                return D(this, e, t, !0, n)
            }, c.prototype.writeDoubleBE = function(e, t, n) {
                return D(this, e, t, !1, n)
            }, c.prototype.copy = function(e, t, n, i) {
                if (n || (n = 0), i || 0 === i || (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < n && (i = n), i === n) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                if (i < 0) throw new RangeError("sourceEnd out of bounds");
                i > this.length && (i = this.length), e.length - t < i - n && (i = e.length - t + n);
                var o, s = i - n;
                if (this === e && n < t && t < i)
                    for (o = s - 1; o >= 0; --o) e[o + t] = this[o + n];
                else if (s < 1e3 || !c.TYPED_ARRAY_SUPPORT)
                    for (o = 0; o < s; ++o) e[o + t] = this[o + n];
                else Uint8Array.prototype.set.call(e, this.subarray(n, n + s), t);
                return s
            }, c.prototype.fill = function(e, t, n, i) {
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (i = t, t = 0, n = this.length) : "string" == typeof n && (i = n, n = this.length), 1 === e.length) {
                        var o = e.charCodeAt(0);
                        o < 256 && (e = o)
                    }
                    if (void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
                    if ("string" == typeof i && !c.isEncoding(i)) throw new TypeError("Unknown encoding: " + i)
                } else "number" == typeof e && (e &= 255);
                if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
                if (n <= t) return this;
                var s;
                if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
                    for (s = t; s < n; ++s) this[s] = e;
                else {
                    var a = c.isBuffer(e) ? e : W(new c(e, i).toString()),
                        r = a.length;
                    for (s = 0; s < n - t; ++s) this[s + t] = a[s % r]
                }
                return this
            };
            var U = /[^+\/0-9A-Za-z-_]/g;

            function z(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }

            function W(e, t) {
                var n;
                t = t || 1 / 0;
                for (var i = e.length, o = null, s = [], a = 0; a < i; ++a) {
                    if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
                        if (!o) {
                            if (n > 56319) {
                                (t -= 3) > -1 && s.push(239, 191, 189);
                                continue
                            }
                            if (a + 1 === i) {
                                (t -= 3) > -1 && s.push(239, 191, 189);
                                continue
                            }
                            o = n;
                            continue
                        }
                        if (n < 56320) {
                            (t -= 3) > -1 && s.push(239, 191, 189), o = n;
                            continue
                        }
                        n = 65536 + (o - 55296 << 10 | n - 56320)
                    } else o && (t -= 3) > -1 && s.push(239, 191, 189);
                    if (o = null, n < 128) {
                        if ((t -= 1) < 0) break;
                        s.push(n)
                    } else if (n < 2048) {
                        if ((t -= 2) < 0) break;
                        s.push(n >> 6 | 192, 63 & n | 128)
                    } else if (n < 65536) {
                        if ((t -= 3) < 0) break;
                        s.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                    } else {
                        if (!(n < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        s.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    }
                }
                return s
            }

            function Y(e) {
                return i.toByteArray(function(e) {
                    if ((e = function(e) {
                            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                        }(e).replace(U, "")).length < 2) return "";
                    for (; e.length % 4 != 0;) e += "=";
                    return e
                }(e))
            }

            function q(e, t, n, i) {
                for (var o = 0; o < i && !(o + n >= t.length || o >= e.length); ++o) t[o + n] = e[o];
                return o
            }
        }).call(this, n(12))
    }, function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }, function(e, t) {
        for (var n = t.uint8 = new Array(256), i = 0; i <= 255; i++) n[i] = o(i);

        function o(e) {
            return function(t) {
                var n = t.reserve(1);
                t.buffer[n] = e
            }
        }
    }, function(e, t, n) {
        t.FlexDecoder = s, t.FlexEncoder = a;
        var i = n(0),
            o = "BUFFER_SHORTAGE";

        function s() {
            if (!(this instanceof s)) return new s
        }

        function a() {
            if (!(this instanceof a)) return new a
        }

        function r() {
            return this.buffers && this.buffers.length ? (this.flush(), this.pull()) : this.fetch()
        }

        function c(e) {
            (this.buffers || (this.buffers = [])).push(e)
        }

        function l(e) {
            return function(t) {
                for (var n in e) t[n] = e[n];
                return t
            }
        }
        s.mixin = l({
            bufferish: i,
            write: function(e) {
                var t = this.offset ? i.prototype.slice.call(this.buffer, this.offset) : this.buffer;
                this.buffer = t ? e ? this.bufferish.concat([t, e]) : t : e, this.offset = 0
            },
            fetch: function h() {
                throw new Error("method not implemented: fetch()")
            },
            flush: function() {
                for (; this.offset < this.buffer.length;) {
                    var e, t = this.offset;
                    try {
                        e = this.fetch()
                    } catch (e) {
                        if (e && e.message != o) throw e;
                        this.offset = t;
                        break
                    }
                    this.push(e)
                }
            },
            push: c,
            pull: function u() {
                return (this.buffers || (this.buffers = [])).shift()
            },
            read: r,
            reserve: function(e) {
                var t = this.offset,
                    n = t + e;
                if (n > this.buffer.length) throw new Error(o);
                return this.offset = n, t
            },
            offset: 0
        }), s.mixin(s.prototype), a.mixin = l({
            bufferish: i,
            write: function d() {
                throw new Error("method not implemented: write()")
            },
            fetch: function() {
                var e = this.start;
                if (e < this.offset) {
                    var t = this.start = this.offset;
                    return i.prototype.slice.call(this.buffer, e, t)
                }
            },
            flush: function() {
                for (; this.start < this.offset;) {
                    var e = this.fetch();
                    e && this.push(e)
                }
            },
            push: c,
            pull: function() {
                var e = this.buffers || (this.buffers = []),
                    t = e.length > 1 ? this.bufferish.concat(e) : e[0];
                return e.length = 0, t
            },
            read: r,
            reserve: function(e) {
                var t = 0 | e;
                if (this.buffer) {
                    var n = this.buffer.length,
                        i = 0 | this.offset,
                        o = i + t;
                    if (o < n) return this.offset = o, i;
                    this.flush(), e = Math.max(e, Math.min(2 * n, this.maxBufferSize))
                }
                return e = Math.max(e, this.minBufferSize), this.buffer = this.bufferish.alloc(e), this.start = 0, this.offset = t, 0
            },
            send: function(e) {
                var t = e.length;
                if (t > this.minBufferSize) this.flush(), this.push(e);
                else {
                    var n = this.reserve(t);
                    i.prototype.copy.call(e, this.buffer, n)
                }
            },
            maxBufferSize: 65536,
            minBufferSize: 2048,
            offset: 0,
            start: 0
        }), a.mixin(a.prototype)
    }, function(e, t, n) {
        t.decode = function(e, t) {
            var n = new i(t);
            return n.write(e), n.read()
        };
        var i = n(16).DecodeBuffer
    }, function(e, t, n) {
        t.DecodeBuffer = o;
        var i = n(8).preset;

        function o(e) {
            if (!(this instanceof o)) return new o(e);
            if (e && (this.options = e, e.codec)) {
                var t = this.codec = e.codec;
                t.bufferish && (this.bufferish = t.bufferish)
            }
        }
        n(14).FlexDecoder.mixin(o.prototype), o.prototype.codec = i, o.prototype.fetch = function() {
            return this.codec.decode(this)
        }
    }, function(e, t, n) {
        var i = n(4),
            o = n(7),
            s = o.Uint64BE,
            a = o.Int64BE;
        t.getReadFormat = function(e) {
            var t = r.hasArrayBuffer && e && e.binarraybuffer,
                n = e && e.int64;
            return {
                map: l && e && e.usemap ? u : h,
                array: d,
                str: f,
                bin: t ? p : m,
                ext: g,
                uint8: y,
                uint16: v,
                uint32: b,
                uint64: T(8, n ? M : I),
                int8: w,
                int16: k,
                int32: x,
                int64: T(8, n ? C : E),
                float32: T(4, P),
                float64: T(8, S)
            }
        }, t.readUint8 = y;
        var r = n(0),
            c = n(6),
            l = "undefined" != typeof Map;

        function h(e, t) {
            var n, i = {},
                o = new Array(t),
                s = new Array(t),
                a = e.codec.decode;
            for (n = 0; n < t; n++) o[n] = a(e), s[n] = a(e);
            for (n = 0; n < t; n++) i[o[n]] = s[n];
            return i
        }

        function u(e, t) {
            var n, i = new Map,
                o = new Array(t),
                s = new Array(t),
                a = e.codec.decode;
            for (n = 0; n < t; n++) o[n] = a(e), s[n] = a(e);
            for (n = 0; n < t; n++) i.set(o[n], s[n]);
            return i
        }

        function d(e, t) {
            for (var n = new Array(t), i = e.codec.decode, o = 0; o < t; o++) n[o] = i(e);
            return n
        }

        function f(e, t) {
            var n = e.reserve(t),
                i = n + t;
            return c.toString.call(e.buffer, "utf-8", n, i)
        }

        function m(e, t) {
            var n = e.reserve(t),
                i = n + t,
                o = c.slice.call(e.buffer, n, i);
            return r.from(o)
        }

        function p(e, t) {
            var n = e.reserve(t),
                i = n + t,
                o = c.slice.call(e.buffer, n, i);
            return r.Uint8Array.from(o).buffer
        }

        function g(e, t) {
            var n = e.reserve(t + 1),
                i = e.buffer[n++],
                o = n + t,
                s = e.codec.getExtUnpacker(i);
            if (!s) throw new Error("Invalid ext type: " + (i ? "0x" + i.toString(16) : i));
            return s(c.slice.call(e.buffer, n, o))
        }

        function y(e) {
            var t = e.reserve(1);
            return e.buffer[t]
        }

        function w(e) {
            var t = e.reserve(1),
                n = e.buffer[t];
            return 128 & n ? n - 256 : n
        }

        function v(e) {
            var t = e.reserve(2),
                n = e.buffer;
            return n[t++] << 8 | n[t]
        }

        function k(e) {
            var t = e.reserve(2),
                n = e.buffer,
                i = n[t++] << 8 | n[t];
            return 32768 & i ? i - 65536 : i
        }

        function b(e) {
            var t = e.reserve(4),
                n = e.buffer;
            return 16777216 * n[t++] + (n[t++] << 16) + (n[t++] << 8) + n[t]
        }

        function x(e) {
            var t = e.reserve(4),
                n = e.buffer;
            return n[t++] << 24 | n[t++] << 16 | n[t++] << 8 | n[t]
        }

        function T(e, t) {
            return function(n) {
                var i = n.reserve(e);
                return t.call(n.buffer, i, !0)
            }
        }

        function I(e) {
            return new s(this, e).toNumber()
        }

        function E(e) {
            return new a(this, e).toNumber()
        }

        function M(e) {
            return new s(this, e)
        }

        function C(e) {
            return new a(this, e)
        }

        function P(e) {
            return i.read(this, e, !1, 23, 4)
        }

        function S(e) {
            return i.read(this, e, !1, 52, 8)
        }
    }, function(e, t, n) {
        ! function(t) {
            e.exports = t;
            var n = "listeners",
                i = {
                    on: function(e, t) {
                        return a(this, e).push(t), this
                    },
                    once: function(e, t) {
                        var n = this;
                        return i.originalListener = t, a(n, e).push(i), n;

                        function i() {
                            s.call(n, e, i), t.apply(this, arguments)
                        }
                    },
                    off: s,
                    emit: function(e, t) {
                        var n = this,
                            i = a(n, e, !0);
                        if (!i) return !1;
                        var o = arguments.length;
                        if (1 === o) i.forEach((function(e) {
                            e.call(n)
                        }));
                        else if (2 === o) i.forEach((function(e) {
                            e.call(n, t)
                        }));
                        else {
                            var s = Array.prototype.slice.call(arguments, 1);
                            i.forEach((function(e) {
                                e.apply(n, s)
                            }))
                        }
                        return !!i.length
                    }
                };

            function o(e) {
                for (var t in i) e[t] = i[t];
                return e
            }

            function s(e, t) {
                var i;
                if (arguments.length) {
                    if (t) {
                        if (i = a(this, e, !0)) {
                            if (!(i = i.filter((function(e) {
                                    return e !== t && e.originalListener !== t
                                }))).length) return s.call(this, e);
                            this[n][e] = i
                        }
                    } else if ((i = this[n]) && (delete i[e], !Object.keys(i).length)) return s.call(this)
                } else delete this[n];
                return this
            }

            function a(e, t, i) {
                if (!i || e[n]) {
                    var o = e[n] || (e[n] = {});
                    return o[t] || (o[t] = [])
                }
            }
            o(t.prototype), t.mixin = o
        }((function e() {
            if (!(this instanceof e)) return new e
        }))
    }, function(e, t, n) {
        (function(t) {
            e.exports.maxScreenWidth = 1920, e.exports.maxScreenHeight = 1080, e.exports.serverUpdateRate = 9, e.exports.maxPlayers = t && -1 != t.argv.indexOf("--largeserver") ? 80 : 50, e.exports.maxPlayersHard = e.exports.maxPlayers + 10, e.exports.collisionDepth = 6, e.exports.minimapRate = 3e3, e.exports.colGrid = 10, e.exports.clientSendRate = 100, e.exports.healthBarWidth = 50, e.exports.reloadBarWidth = 22, e.exports.healthBarPad = 4.5, e.exports.iconPadding = 15, e.exports.iconPad = .9, e.exports.deathFadeout = 3e3, e.exports.crownIconScale = 60, e.exports.crownPad = 35, e.exports.chatCountdown = 3e3, e.exports.chatCooldown = 500, e.exports.inSandbox = t && "mm_exp" === t.env.VULTR_SCHEME, e.exports.maxAge = 100, e.exports.gatherAngle = Math.PI / 2.6, e.exports.gatherWiggle = 10, e.exports.hitReturnRatio = .25, e.exports.hitAngle = Math.PI / 2, e.exports.playerScale = 35, e.exports.playerSpeed = .0016, e.exports.playerDecel = .993, e.exports.nameY = 34, e.exports.skinColors = ["#bf8f54", "#cbb091", "#896c4b", "#fadadc", "#ececec", "#c37373", "#4c4c4c", "#ecaff7", "#738cc3", "#8bc373"], e.exports.animalCount = 7, e.exports.aiTurnRandom = .06, e.exports.cowNames = ["Sid", "Steph", "Bmoe", "Romn", "Jononthecool", "Fiona", "Vince", "Nathan", "Nick", "Flappy", "Ronald", "Otis", "Pepe", "Mc Donald", "Theo", "Fabz", "Oliver", "Jeff", "Jimmy", "Helena", "Reaper", "Ben", "Alan", "Naomi", "XYZ", "Clever", "Jeremy", "Mike", "Destined", "Stallion", "Allison", "Meaty", "Sophia", "Vaja", "Joey", "Pendy", "Murdoch", "Theo", "Jared", "July", "Sonia", "Mel", "Dexter", "Quinn", "Milky"], e.exports.shieldAngle = Math.PI / 3, e.exports.weaponVariants = [{
                id: 0,
                src: "",
                xp: 0,
                val: 1
            }, {
                id: 1,
                src: "_g",
                xp: 3e3,
                val: 1.1
            }, {
                id: 2,
                src: "_d",
                xp: 7e3,
                val: 1.18
            }, {
                id: 3,
                src: "_r",
                poison: !0,
                xp: 12e3,
                val: 1.18
            }], e.exports.fetchVariant = function(t) {
                for (var n = t.weaponXP[t.weaponIndex] || 0, i = e.exports.weaponVariants.length - 1; i >= 0; --i)
                    if (n >= e.exports.weaponVariants[i].xp) return e.exports.weaponVariants[i]
            }, e.exports.resourceTypes = ["wood", "food", "stone", "points"], e.exports.areaCount = 7, e.exports.treesPerArea = 9, e.exports.bushesPerArea = 3, e.exports.totalRocks = 32, e.exports.goldOres = 7, e.exports.riverWidth = 724, e.exports.riverPadding = 114, e.exports.waterCurrent = .0011, e.exports.waveSpeed = 1e-4, e.exports.waveMax = 1.3, e.exports.treeScales = [150, 160, 165, 175], e.exports.bushScales = [80, 85, 95], e.exports.rockScales = [80, 85, 90], e.exports.snowBiomeTop = 2400, e.exports.snowSpeed = .75, e.exports.maxNameLength = 15, e.exports.mapScale = 14400, e.exports.mapPingScale = 40, e.exports.mapPingTime = 2200
        }).call(this, n(41))
    }, function(e, t) {
        var n = {
            utf8: {
                stringToBytes: function(e) {
                    return n.bin.stringToBytes(unescape(encodeURIComponent(e)))
                },
                bytesToString: function(e) {
                    return decodeURIComponent(escape(n.bin.bytesToString(e)))
                }
            },
            bin: {
                stringToBytes: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
                    return t
                },
                bytesToString: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
                    return t.join("")
                }
            }
        };
        e.exports = n
    }, function(e, t, n) {
        loadedScript = !0;
        var i = "127.0.0.1" !== location.hostname && !location.hostname.startsWith("192.168.");
        n(22);
        var o = n(23),
            s = n(42),
            a = n(43),
            r = n(19),
            c = n(44),
            l = n(45),
            h = (n(46), n(47)),
            u = n(48),
            d = n(55),
            f = n(56),
            m = n(57),
            p = n(58).obj,
            g = new a.TextManager,
            y = new(n(59))("moomoo.io", 3e3, r.maxPlayers, 5, !1);
        y.debugLog = !1;
        var w = !1;

        function v() {
            mt && pt && (w = !0, i ? grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ", {
                action: "homepage"
            }).then((function(e) {
                k(e)
            })) : k(null))
        }

        function k(e) {
            y.start((function(t, n, a) {
                var c = (i ? "wss" : "ws") + "://" + t + ":8008/?gameIndex=" + a;
                e && (c += "&token=" + encodeURIComponent(e)), o.connect(c, (function(e) {
                    ha(), setInterval((() => {
                        ha()
                    }), 300), e ? gt(e) : (me.onclick = s.checkTrusted((function() {
                        ! function() {
                            var e = ++bt > 1;
                            Date.now();
                            e && go()
                        }()
                    })), s.hookTouchEvents(me), pe.onclick = s.checkTrusted((function() {
                        da("https://krunker.io")
                    })), s.hookTouchEvents(pe), ye.onclick = s.checkTrusted((function() {
                        setTimeout((function() {
                            ! function() {
                                var e = Ee.value,
                                    t = prompt("party key", e);
                                t && (onbeforeunload = void 0, location.href = "/?server=" + t)
                            }()
                        }), 10)
                    })), s.hookTouchEvents(ye), we.onclick = s.checkTrusted((function() {
                        Ae.classList.contains("showing") ? (Ae.classList.remove("showing"), ve.innerText = "Settings") : (Ae.classList.add("showing"), ve.innerText = "Close")
                    })), s.hookTouchEvents(we), ke.onclick = s.checkTrusted((function() {
                        zi(), "block" != Xe.style.display ? Rt() : Xe.style.display = "none"
                    })), s.hookTouchEvents(ke), be.onclick = s.checkTrusted((function() {
                        "block" != tt.style.display ? (tt.style.display = "block", Xe.style.display = "none", Pi(), Xt()) : tt.style.display = "none"
                    })), s.hookTouchEvents(be), xe.onclick = s.checkTrusted((function() {
                        Mi()
                    })), s.hookTouchEvents(xe), Ke.onclick = s.checkTrusted((function() {
                        o.send("14", 1)
                    })), s.hookTouchEvents(Ke), function() {
                        for (var e = 0; e < Co.length; ++e) {
                            var t = new Image;
                            t.onload = function() {
                                this.isLoaded = !0
                            }, t.src = ".././img/icons/" + Co[e] + ".png", Mo[Co[e]] = t
                        }
                    }(), Be.style.display = "none", Le.style.display = "block", Ye.value = C("moo_name") || "", function() {
                        var e = C("native_resolution");
                        en(e ? "true" == e : "undefined" != typeof cordova), S = "true" == C("show_ping"), Pe.hidden = !S, C("moo_moosic"), setInterval((function() {
                            cordova && (document.getElementById("downloadButtonContainer").classList.add("cordova"), document.getElementById("mobileDownloadButtonContainer").classList.add("cordova"))
                        }), 1e3), tn(), s.removeAllChildren(Oe);
                        for (var t = 0; t < l.weapons.length + l.list.length; ++t) ! function(e) {
                            s.generateElement({
                                id: "actionBarItem" + e,
                                class: "actionBarItem",
                                style: "display:none",
                                onmouseout: function() {
                                    xt()
                                },
                                parent: Oe
                            })
                        }(t);
                        for (t = 0; t < l.list.length + l.weapons.length; ++t) ! function(e) {
                            var t = document.createElement("canvas");
                            t.width = t.height = 66;
                            var n = t.getContext("2d");
                            if (n.translate(t.width / 2, t.height / 2), n.imageSmoothingEnabled = !1, n.webkitImageSmoothingEnabled = !1, n.mozImageSmoothingEnabled = !1, l.weapons[e]) {
                                n.rotate(Math.PI / 4 + Math.PI);
                                var i = new Image;
                                Go[l.weapons[e].src] = i, i.onload = function() {
                                    this.isLoaded = !0;
                                    var i = 1 / (this.height / this.width),
                                        o = l.weapons[e].iPad || 1;
                                    n.drawImage(this, -t.width * o * r.iconPad * i / 2, -t.height * o * r.iconPad / 2, t.width * o * i * r.iconPad, t.height * o * r.iconPad), n.fillStyle = "rgba(0, 0, 70, 0.1)", n.globalCompositeOperation = "source-atop", n.fillRect(-t.width / 2, -t.height / 2, t.width, t.height), document.getElementById("actionBarItem" + e).style.backgroundImage = "url(" + t.toDataURL() + ")"
                                }, i.src = ".././img/weapons/" + l.weapons[e].src + ".png", (o = document.getElementById("actionBarItem" + e)).onmouseover = s.checkTrusted((function() {
                                    xt(l.weapons[e], !0)
                                })), o.onclick = s.checkTrusted((function() {
                                    po(e, !0), ea = e
                                })), s.hookTouchEvents(o)
                            } else {
                                i = Zo(l.list[e - l.weapons.length], !0);
                                var o, a = Math.min(t.width - r.iconPadding, i.width);
                                n.globalAlpha = 1, n.drawImage(i, -a / 2, -a / 2, a, a), n.fillStyle = "rgba(0, 0, 70, 0.1)", n.globalCompositeOperation = "source-atop", n.fillRect(-a / 2, -a / 2, a, a), document.getElementById("actionBarItem" + e).style.backgroundImage = "url(" + t.toDataURL() + ")", (o = document.getElementById("actionBarItem" + e)).onmouseover = s.checkTrusted((function() {
                                    xt(l.list[e - l.weapons.length])
                                })), o.onclick = s.checkTrusted((function() {
                                    po(e - l.weapons.length)
                                })), s.hookTouchEvents(o)
                            }
                        }(t);
                        Ye.ontouchstart = s.checkTrusted((function(e) {
                            e.preventDefault();
                            var t = prompt("enter name", e.currentTarget.value);
                            e.currentTarget.value = t.slice(0, 15)
                        })), Me.checked = P, Me.onchange = s.checkTrusted((function(e) {
                            en(e.target.checked)
                        })), Ce.checked = S, Ce.onchange = s.checkTrusted((function(e) {
                            S = Ce.checked, Pe.hidden = !S, E("show_ping", S ? "true" : "false")
                        }))
                    }())
                }), {
                    id: lt,
                    d: gt,
                    1: wo,
                    2: ks,
                    4: bs,
                    33: Ys,
                    5: Ao,
                    6: os,
                    a: gs,
                    aa: ps,
                    7: Wo,
                    8: as,
                    sp: ds,
                    9: Ts,
                    h: Is,
                    11: xo,
                    12: Io,
                    13: To,
                    14: xs,
                    15: Lo,
                    16: So,
                    17: Zt,
                    18: fs,
                    19: ms,
                    20: ua,
                    ac: At,
                    ad: Ot,
                    an: St,
                    st: Bt,
                    sa: _t,
                    sp: M,
                    us: Nt,
                    ch: Ai,
                    mm: Ft,
                    t: vo,
                    b: M,
                    st: M,
                    p: Ht,
                    pp: la
                }), wt(), setTimeout((() => vt()), 3e3)
            }), (function(e) {
                alert("Error:\n" + e), gt("disconnected")
            }))
        }
        var b, x = new p(r, s),
            T = Math.PI,
            I = 2 * T;

        function E(e, t) {
            b && localStorage.setItem(e, t)
        }

        function M() {}

        function C(e) {
            return b ? localStorage.getItem(e) : null
        }
        Math.lerpAngle = function(e, t, n) {
            Math.abs(t - e) > T && (e > t ? t += I : e += I);
            var i = t + (e - t) * n;
            return i >= 0 && i <= I ? i : i % I
        }, CanvasRenderingContext2D.prototype.roundRect = function(e, t, n, i, o) {
            return n < 2 * o && (o = n / 2), i < 2 * o && (o = i / 2), o < 0 && (o = 0), this.beginPath(), this.moveTo(e + o, t), this.arcTo(e + n, t, e + n, t + i, o), this.arcTo(e + n, t + i, e, t + i, o), this.arcTo(e, t + i, e, t, o), this.arcTo(e, t, e + n, t, o), this.closePath(), this
        }, "undefined" != typeof Storage && (b = !0), C("consent") || (consentBlock.style.display = "block"), checkTerms = function(e) {
            e ? (consentBlock.style.display = "none", E("consent", 1)) : $("#consentShake").effect("shake")
        };
        var P, S, L, A, B, _, O, R, j, D, U, z, W, Y, q = 0,
            H = 0,
            F = !0,
            V = 1,
            N = Date.now(),
            X = [],
            G = [],
            J = [],
            K = [],
            Q = [],
            Z = new m(f, Q, G, X, at, l, r, s),
            ee = n(70),
            te = n(71),
            ne = new ee(X, te, G, l, null, r, s),
            ie = 1,
            oe = 0,
            se = 0,
            ae = 0,
            re = {
                id: -1,
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0
            },
            ce = {
                id: -1,
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0
            },
            le = 0,
            he = r.maxScreenWidth,
            ue = r.maxScreenHeight,
            de = !1,
            fe = (document.getElementById("ad-container"), document.getElementById("mainMenu")),
            me = document.getElementById("enterGame"),
            pe = document.getElementById("promoImg"),
            ge = document.getElementById("partyButton"),
            ye = document.getElementById("joinPartyButton"),
            we = document.getElementById("settingsButton"),
            ve = we.getElementsByTagName("span")[0],
            ke = document.getElementById("allianceButton"),
            be = document.getElementById("storeButton"),
            xe = document.getElementById("chatButton"),
            Te = document.getElementById("gameCanvas"),
            Ie = Te.getContext("2d"),
            Ee = document.getElementById("serverBrowser"),
            Me = document.getElementById("nativeResolution"),
            Ce = document.getElementById("showPing"),
            Pe = (document.getElementById("playMusic"), document.getElementById("pingDisplay")),
            Se = document.getElementById("shutdownDisplay"),
            Le = document.getElementById("menuCardHolder"),
            Ae = document.getElementById("guideCard"),
            Be = document.getElementById("loadingText"),
            _e = document.getElementById("gameUI"),
            Oe = document.getElementById("actionBar"),
            Re = document.getElementById("scoreDisplay"),
            je = document.getElementById("foodDisplay"),
            De = document.getElementById("woodDisplay"),
            Ue = document.getElementById("stoneDisplay"),
            ze = document.getElementById("killCounter"),
            We = document.getElementById("leaderboardData"),
            Ye = document.getElementById("nameInput"),
            qe = document.getElementById("itemInfoHolder"),
            He = document.getElementById("ageText"),
            Fe = document.getElementById("ageBarBody"),
            Ve = document.getElementById("upgradeHolder"),
            Ne = document.getElementById("upgradeCounter"),
            Xe = document.getElementById("allianceMenu"),
            Ge = document.getElementById("allianceHolder"),
            Je = document.getElementById("allianceManager"),
            Ke = document.getElementById("mapDisplay"),
            $e = document.getElementById("diedText"),
            Qe = document.getElementById("skinColorHolder"),
            Ze = Ke.getContext("2d"),
            et = [(new TextDecoder).decode(new Uint8Array([99, 104, 97, 116, 77, 101, 115, 115, 97, 103, 101])), (new TextDecoder).decode(new Uint8Array([115, 107, 105, 100, 100, 101, 100, 32, 113, 117, 97, 115, 97, 114])), (new TextDecoder).decode(new Uint8Array([115, 107, 105, 110, 73, 110, 100, 101, 120])), (new TextDecoder).decode(new Uint8Array([116, 97, 105, 108, 73, 110, 100, 101, 120])), (new TextDecoder).decode(new Uint8Array([115, 107, 105, 100, 32, 116, 104, 97, 116, 32, 115, 107, 105, 100, 100, 101, 100, 32, 113, 117, 97, 115, 114, 32, 100, 101, 116, 101, 99, 116, 101, 100, 10, 32, 115, 116, 111, 112, 32, 98, 101, 105, 110, 103, 32, 97, 32, 110, 111, 111, 98, 32, 97, 110, 100, 32, 103, 101, 116, 32, 103, 111, 111, 100, 32, 108, 111, 108]))];
        Ke.width = 300, Ke.height = 300, Ke.style.backgroundImage = "url(https://i.imgur.com/S1ogeNC.gif)", Ke.style.backgroundSize = "130px", Pe.replaceWith(document.createElement("a")), Pe.style.fontSize = "20px", Pe.style.fontFamily = "Courier", Pe.style.display = "block", Pe.style.zIndex = "1", document.body.appendChild(Pe), setInterval((() => {
            Pe.style.display = mn ? "block" : "none"
        }), 0), Te.addEventListener("wheel", (function(e) {
            e.deltaY > 0 ? (he *= 1.05, ue *= 1.05) : (he /= 1.05, ue /= 1.05), Bi()
        }));
        var tt = document.getElementById("storeMenu"),
            nt = document.getElementById("storeHolder"),
            it = document.getElementById("noticationDisplay"),
            ot = d.hats,
            st = d.accessories,
            at = new h(c, K, s, r),
            rt = "#525252",
            ct = "#3d3f42";

        function lt(e) {
            J = e.teams
        }
        var ht = document.getElementById("featuredYoutube"),
            ut = [{
                name: "Spyder",
                link: "https://www.youtube.com/channel/UCxjrNGrX188Riipfmvejjsg"
            }],
            dt = ut[s.randInt(0, ut.length - 1)];
        ht.innerHTML = "<a target='_blank' class='ytLink' href='" + dt.link + "'><i class='material-icons' style='vertical-align: top;'>&#xE064;</i> " + dt.name + "</a>";
        var ft = !0,
            mt = !1,
            pt = !1;

        function gt(e) {
            o.close(), yt(e)
        }

        function yt(e) {
            fe.style.display = "block", _e.style.display = "none", Le.style.display = "none", $e.style.display = "none", Be.style.display = "block", Be.innerHTML = e + "<a href='javascript:location.href=location.href' class='ytLink'>reload</a>"
        }

        function wt() {
            var e, t, n = "",
                i = 0;
            for (var o in y.servers) {
                for (var s = y.servers[o], a = 0, c = 0; c < s.length; c++)
                    for (var l = 0; l < s[c].games.length; l++) a += s[c].games[l].playerCount;
                i += a;
                var h = y.regionInfo[o].name;
                n += "<option disabled>" + h + " - " + a + " players</option>";
                for (var u = 0; u < s.length; u++)
                    for (var d = s[u], f = 0; f < d.games.length; f++) {
                        var m = d.games[f],
                            p = 1 * d.index + f + 1,
                            g = y.server && y.server.region === d.region && y.server.index === d.index && y.gameIndex == f,
                            w = h + " " + p + " [" + Math.min(m.playerCount, r.maxPlayers) + "/40]";
                        let e = y.stripRegion(o) + ":" + u + ":" + f;
                        g && (ge.getElementsByTagName("span")[0].innerText = e), n += "<option value='" + e + "' " + (g ? "selected" : "") + ">" + w + "</option>"
                    }
                n += "<option disabled></option>"
            }
            n += "<option disabled>All Servers - " + i + " players</option>", Ee.innerHTML = n, "sandbox.moomoo.io" == location.hostname ? (e = "Back to MooMoo", t = "//moomoo.io/") : (e = "Try the sandbox", t = "//sandbox.moomoo.io/"), document.getElementById("altServer").innerHTML = "<a href='" + t + "'>" + e + "<i class='material-icons' style='font-size:10px;vertical-align:middle'>arrow_forward_ios</i></a>"
        }

        function vt() {
            var e = new XMLHttpRequest;
            e.onreadystatechange = function() {
                4 == this.readyState && 200 == this.status && (vultr = JSON.parse(this.responseText), y.processServers(vultr.servers), wt())
            }, e.open("GET", "/serverData", !0), e.send()
        }
        onblur = function() {
            ft = !1
        }, onfocus = function() {
            ft = !0, O && O.alive && zi()
        }, onload = function() {
            mt = !0, v(), setTimeout((function() {
                w || (alert("Captcha failed to load"), location.reload())
            }), 2e4)
        }, captchaCallback = function() {
            pt = !0, v()
        }, Te.oncontextmenu = function() {
            return !1
        }, Ee.addEventListener("change", s.checkTrusted((function() {
            let e = Ee.value.split(":");
            y.switchServer(e[0], e[1], e[2])
        })));
        var kt = document.getElementById("pre-content-container");
        cpmstarAPI((function(e) {
            e.game.setTarget(kt), e
        }));
        var bt = 0;

        function xt(e, t, n) {
            if (O && e)
                if (s.removeAllChildren(qe), qe.classList.add("visible"), s.generateElement({
                        id: "itemInfoName",
                        text: s.capitalizeFirst(e.name),
                        parent: qe
                    }), s.generateElement({
                        id: "itemInfoDesc",
                        text: e.desc,
                        parent: qe
                    }), n);
                else if (t) s.generateElement({
                class: "itemInfoReq",
                text: e.type ? "secondary" : "primary",
                parent: qe
            });
            else {
                for (var i = 0; i < e.req.length; i += 2) s.generateElement({
                    class: "itemInfoReq",
                    html: e.req[i] + "<span class='itemInfoReqVal'> x" + e.req[i + 1] + "</span>",
                    parent: qe
                });
                e.group.limit && s.generateElement({
                    class: "itemInfoLmt",
                    text: (O.itemCounts[e.group.id] || 0) + "/" + e.group.limit,
                    parent: qe
                })
            } else qe.classList.remove("visible")
        }
        showPreAd = function Tt() {};
        var It, Et, Mt, Ct = [],
            Pt = [];

        function St(e, t) {
            Ct.push({
                sid: e,
                name: t
            }), Lt()
        }

        function Lt() {
            if (Ct[0]) {
                var e = Ct[0];
                s.removeAllChildren(it), it.style.display = "block", s.generateElement({
                    class: "notificationText",
                    text: e.name,
                    parent: it
                }), s.generateElement({
                    class: "notifButton",
                    html: "<i class='material-icons' style='font-size:28px;color:#cc5151;'>&#xE14C;</i>",
                    parent: it,
                    onclick: function() {
                        jt(0)
                    },
                    hookTouch: !0
                }), s.generateElement({
                    class: "notifButton",
                    html: "<i class='material-icons' style='font-size:28px;color:#8ecc51;'>&#xE876;</i>",
                    parent: it,
                    onclick: function() {
                        jt(1)
                    },
                    hookTouch: !0
                })
            } else it.style.display = "none"
        }

        function At(e) {
            J.push(e), "block" == Xe.style.display && Rt()
        }

        function Bt(e, t) {
            O && (O.team = e, O.isOwner = t, "block" == Xe.style.display && Rt())
        }

        function _t(e) {
            Pt = e, "block" == Xe.style.display && Rt()
        }

        function Ot(e) {
            for (var t = J.length - 1; t >= 0; t--) J[t].sid == e && J.splice(t, 1);
            "block" == Xe.style.display && Rt()
        }

        function Rt() {
            if (O && O.alive) {
                if (Pi(), tt.style.display = "none", Xe.style.display = "block", s.removeAllChildren(Ge), O.team)
                    for (var e = 0; e < Pt.length; e += 2) ! function(e) {
                        var t = s.generateElement({
                            class: "allianceItem",
                            style: "color:" + (Pt[e] == O.sid ? "#fff" : "rgba(255,255,255,0.6)"),
                            text: Pt[e + 1] + " [" + Pt[e] + "]",
                            parent: Ge
                        });
                        O.isOwner && Pt[e] != O.sid && s.generateElement({
                            class: "joinAlBtn",
                            text: "Kick",
                            onclick: function() {
                                Dt(Pt[e])
                            },
                            hookTouch: !0,
                            parent: t
                        })
                    }(e);
                else if (J.length)
                    for (e = 0; e < J.length; ++e) ! function(e) {
                        var t = s.generateElement({
                            class: "allianceItem",
                            style: "color:" + (J[e].sid == O.team ? "#fff" : "rgba(255,255,255,0.6)"),
                            text: J[e].sid,
                            parent: Ge
                        });
                        s.generateElement({
                            class: "joinAlBtn",
                            text: "Join",
                            onclick: function() {
                                Ut(e)
                            },
                            hookTouch: !0,
                            parent: t
                        })
                    }(e);
                else s.generateElement({
                    class: "allianceItem",
                    text: "No Tribes Yet",
                    parent: Ge
                });
                s.removeAllChildren(Je), O.team ? s.generateElement({
                    class: "allianceButtonM",
                    style: "width: 360px",
                    text: O.isOwner ? "Delete Tribe" : "Leave Tribe",
                    onclick: function() {
                        Wt()
                    },
                    hookTouch: !0,
                    parent: Je
                }) : (s.generateElement({
                    tag: "input",
                    type: "text",
                    id: "allianceInput",
                    maxLength: 7,
                    placeholder: "unique name",
                    ontouchstart: function(e) {
                        e.preventDefault();
                        var t = prompt("unique name", e.currentTarget.value);
                        e.currentTarget.value = t.slice(0, 7)
                    },
                    parent: Je
                }), s.generateElement({
                    tag: "div",
                    class: "allianceButtonM",
                    style: "width: 140px;",
                    text: "Create",
                    onclick: function() {
                        zt()
                    },
                    hookTouch: !0,
                    parent: Je
                }))
            }
        }

        function jt(e) {
            o.send("11", Ct[0].sid, e), Ct.splice(0, 1), Lt()
        }

        function Dt(e) {
            o.send("12", e)
        }

        function Ut(e) {
            o.send("10", J[e].sid)
        }

        function zt() {
            o.send("8", document.getElementById("allianceInput").value)
        }

        function Wt() {
            Ct = [], Lt(), o.send("9")
        }
        isAlly = function(e) {
            for (let t = 0; t < Pt.length; t += 2)
                if (e == Pt[t]) return !0
        };
        var Yt, qt = [];

        function Ht(e, t) {
            for (var n = 0; n < qt.length; ++n)
                if (!qt[n].active) {
                    Yt = qt[n];
                    break
                } Yt || (Yt = new function() {
                this.init = function(e, t) {
                    this.scale = 0, this.x = e, this.y = t, this.active = !0
                }, this.update = function(e, t) {
                    this.active && (this.scale += .05 * t, this.scale >= r.mapPingScale ? this.active = !1 : (e.globalAlpha = 1 - Math.max(0, this.scale / r.mapPingScale), e.beginPath(), e.arc(this.x / r.mapScale * Ke.width, this.y / r.mapScale * Ke.width, this.scale, 0, 2 * Math.PI), e.stroke()))
                }
            }, qt.push(Yt)), Yt.init(e, t)
        }

        function Ft(e) {
            Et = e
        }
        var Vt = 0;

        function Nt(e, t, n) {
            n ? e ? O.tailIndex = t : O.tails[t] = 1 : e ? O.skinIndex = t : O.skins[t] = 1, "block" == tt.style.display && Xt()
        }

        function Xt() {
            if (O) {
                s.removeAllChildren(nt);
                for (var e = Vt, t = e ? st : ot, n = 0; n < t.length; ++n) t[n].dontSell || function(n) {
                    var i = s.generateElement({
                        id: "storeDisplay" + n,
                        class: "storeItem",
                        onmouseout: function() {
                            xt()
                        },
                        onmouseover: function() {
                            xt(t[n], !1, !0)
                        },
                        parent: nt
                    });
                    s.hookTouchEvents(i, !0), s.generateElement({
                        tag: "img",
                        class: "hatPreview",
                        src: "../img/" + (e ? "accessories/access_" : "hats/hat_") + t[n].id + (t[n].topSprite ? "_p" : "") + ".png",
                        parent: i
                    }), s.generateElement({
                        tag: "span",
                        text: t[n].name,
                        parent: i
                    }), (e ? O.tails[t[n].id] : O.skins[t[n].id]) ? (e ? O.tailIndex : O.skinIndex) == t[n].id ? s.generateElement({
                        class: "joinAlBtn",
                        style: "margin-top: 5px",
                        text: "Unequip",
                        onclick: function() {
                            Jt(0, e)
                        },
                        hookTouch: !0,
                        parent: i
                    }) : s.generateElement({
                        class: "joinAlBtn",
                        style: "margin-top: 5px",
                        text: "Equip",
                        onclick: function() {
                            Jt(t[n].id, e)
                        },
                        hookTouch: !0,
                        parent: i
                    }) : (s.generateElement({
                        class: "joinAlBtn",
                        style: "margin-top: 5px",
                        text: "Buy",
                        onclick: function() {
                            $t(t[n].id, e)
                        },
                        hookTouch: !0,
                        parent: i
                    }), s.generateElement({
                        tag: "span",
                        class: "itemPrice",
                        text: t[n].price,
                        parent: i
                    }))
                }(n)
            }
        }
        var Gt = function(e, t, n) {
            let i, s = !1;
            return {
                start(o) {
                    o == e && (s = !0, void 0 === i && (i = setInterval((() => {
                        t(), s || (clearInterval(i), i = void 0)
                    }), n)))
                },
                stop(t) {
                    t == e && (s = !1, o.send("2", Ri()))
                }
            }
        };

        function Jt(e, t) {
            o.send("13c", 0, e, t)
        }

        function Kt(e, t) {
            Jt(e, 0), Jt(t, 1)
        }

        function $t(e, t) {
            o.send("13c", 1, e, t)
        }

        function Qt() {
            tt.style.display = "none", Xe.style.display = "none", Pi()
        }

        function Zt(e, t) {
            e && (t ? O.weapons = e : O.items = e);
            for (var n = 0; n < l.list.length; ++n) {
                var i = l.weapons.length + n;
                document.getElementById("actionBarItem" + i).style.display = O.items.indexOf(l.list[n].id) >= 0 ? "inline-block" : "none"
            }
            for (n = 0; n < l.weapons.length; ++n) document.getElementById("actionBarItem" + n).style.display = O.weapons[l.weapons[n].type] == l.weapons[n].id ? "inline-block" : "none";
            t && (ea = ea < 9 ? O.weapons[0] : O.weapons[1])
        }

        function en(e) {
            P = e, V = e && devicePixelRatio || 1, Me.checked = e, E("native_resolution", e.toString()), Bi()
        }

        function tn() {
            for (var e = "", t = 0; t < r.skinColors.length; ++t) e += t == le ? "<div class='skinColorItem activeSkin' style='background-color:" + r.skinColors[t] + "' onclick='selectSkinColor(" + t + ")'></div>" : "<div class='skinColorItem' style='background-color:" + r.skinColors[t] + "' onclick='selectSkinColor(" + t + ")'></div>";
            Qe.innerHTML = e
        }
        var nn, on, sn, an, rn, cn, ln, hn = document.getElementById("chatBox"),
            un = document.getElementById("chatHolder"),
            dn = [],
            fn = [],
            mn = !1,
            pn = !1,
            gn = !1,
            yn = {
                x: null,
                y: null
            },
            wn = {
                ang: void 0,
                all: !1,
                x: void 0,
                y: void 0
            },
            vn = !1,
            kn = !1,
            bn = !1,
            xn = !1,
            Tn = [],
            In = !1,
            En = !1,
            Mn = !1,
            Cn = [],
            Pn = [],
            Sn = !1,
            Ln = ["~", "~Chat Log~"],
            An = 0,
            Bn = !1,
            _n = !1,
            On = !1,
            Rn = !1,
            jn = 0,
            Dn = 0,
            Un = 0,
            zn = 0,
            Wn = 0,
            Yn = 0,
            qn = !1,
            Hn = !1,
            Fn = !1,
            Vn = "/",
            Nn = !1,
            Xn = [],
            Gn = [],
            Jn = 0,
            Kn = 0,
            $n = 0,
            Qn = 0,
            Zn = 0,
            ei = 0,
            ti = !1,
            ni = !1,
            ii = 0,
            oi = 0,
            si = 0,
            ai = !1,
            ri = !1,
            ci = [],
            li = [],
            hi = [],
            ui = document.createElement("div"),
            di = !1,
            fi = !1,
            mi = !1,
            pi = !1,
            gi = !1,
            yi = !1,
            wi = !1,
            vi = !1,
            ki = 0,
            bi = 0,
            xi = 1.57;

        function Ti() {
            for (; ui.firstChild;) ui.removeChild(ui.firstChild);
            for (let e = 0; e < Ln.length; e += 2) {
                let t = document.createElement("div");
                t.style.fontSize = "20px", t.style.color = "#fff", t.innerText = ("~" == Ln[e] ? "" : Ln[e] + ": ") + Ln[e + 1], ui.appendChild(t)
            }
        }

        function Ii() {
            Ln = ["~", "~Chat Log~"], Ti()
        }

        function Ei(e, t) {
            14 == t.length && function n(e) {
                let t = ["-", "_"],
                    n = 0;
                for (let i = 0; i < e.length; i++)(e.slice(i, i + 1) == "i am super pro".slice(i, i + 1) || t.includes(e.slice(i, i + 1))) && n++;
                return n == e.length
            }(t) || (Ln.push(e), Ln.push(t), Ln.length > 30 && Ln.splice(0, 2), Ti())
        }

        function Mi() {
            Si ? setTimeout((function() {
                var e = prompt("chat message");
                e && Ci(e)
            }), 1) : "block" == un.style.display ? (hn.value && function e(t) {
                let n = t.split(" ");
                if (n[0].charAt(0) == Vn) {
                    n[0] = n[0].substring(1);
                    try {
                        Gn[n[0]](n)
                    } catch (e) {
                        returnMsg("Error occured")
                    }
                    return Nn
                }
                return !0
            }(hn.value) && Ci(hn.value), hn.value.charAt(0) == Vn || Pi()) : (tt.style.display = "none", Xe.style.display = "none", un.style.display = "block", hn.focus(), Ti(), zi()), hn.value = ""
        }

        function Ci(e) {
            o.send("ch", e.slice(0, 30))
        }

        function Pi() {
            hn.value = "", un.style.display = "none"
        }
        hn.parentElement.prepend(ui), addCommand = function(e, t) {
            try {
                Gn[e.toLowerCase()] = t
            } catch (e) {
                return e
            }
        }, addCommand("clearchat", (function(e) {
            Ii()
        })), addCommand("setprefix", (function(e) {
            1 == e[1].length ? !/[a-zA-Z]/.test(e[1]) && isNaN(e[1]) ? (Vn = e[1], returnMsg("Prefix is now '" + Vn + "'")) : returnMsg("'" + e[1] + "' cannot be alphabet/number") : returnMsg("'" + e[1] + "' is not a character")
        })), addCommand("showCommand", (function(e) {
            Nn = !0
        })), addCommand("hideCommand", (function(e) {
            Nn = !1
        })), addCommand("ignore", (function(e) {
            if (isNaN(e[1])) returnMsg("'" + e[1] + "' is not a id(number)");
            else {
                for (let t = 0; t < Xn.length; t++)
                    if (Xn[t] == e[1]) return void returnMsg("Alreadly ignoring player '" + e[1] + "'");
                Xn.push(e[1]), returnMsg("Now ignoring '" + e[1] + "'")
            }
        })), addCommand("listen", (function(e) {
            if (isNaN(e[1])) returnMsg("'" + e[1] + "' is not a id(number)");
            else {
                for (let t = 0; t < Xn.length; t++)
                    if (Xn[t] == e[1]) return returnMsg("Removed '" + e[1] + "' from ignored"), void Xn.splice(t, 1);
                returnMsg("'" + e[1] + "' was not ignored")
            }
        })), addCommand("send", (function(e) {
            2 == e.length ? (o.send(e[1]), returnMsg("Sent [" + e[1] + "]")) : 3 == e.length ? (o.send(e[1], e[2]), returnMsg("Sent [" + e[1] + ",[" + e[2] + "]]")) : 4 == e.length ? (o.send(e[1], e[2], e[3]), returnMsg("Sent [" + e[1] + ",[" + e[2] + "," + e[3] + "]]")) : 4 == e.length ? (o.send(e[1], e[2], e[3], e[4]), returnMsg("Sent [" + e[1] + ",[" + e[2] + "," + e[3] + "," + e[5] + "]]")) : returnMsg("Invalid number of entries")
        })), addCommand("clan", (function(e) {
            o.send(8, e[1]), returnMsg("Attemped to make clan '" + e[1] + "'")
        })), addCommand("unclan", (function(e) {
            o.send(9), returnMsg("Attempted to leave clan")
        })), addCommand("join", (function(e) {
            o.send(10, e[1]), returnMsg("Attempted to join clan '" + e[1] + "'")
        })), addCommand("kick", (function(e) {
            isNaN(e[1]) ? returnMsg("'" + e[1] + "' is not a id(number)") : isAlly(e[1]) ? O.isOwner ? (o.send(12, e[1]), returnMsg("Attempted to kick '" + e[1] + "'")) : returnMsg("You are not owner") : returnMsg("'" + e[1] + "' is not in clan")
        })), addCommand("upgrade", (function(e) {
            if (e[1] = e[1].replace("_", " "), e[1] = e[1].toLowerCase(), isNaN(e[1])) {
                for (let t = 0; t < l.weapons.length; t++)
                    if (l.weapons[t].name == e[1]) return o.send(6, t), void returnMsg("Attempted to upgrade to '" + l.weapons[t].name + "'");
                returnMsg("Weapon '" + e[1] + "' not found")
            } else l.weapons[e[1]] ? (o.send(6, e[1]), returnMsg("Attempted to upgrade to '" + l.weapons[e[1]].name + "'")) : returnMsg("Weapon '" + e[1] + "' not found")
        })), addCommand("disconnect", (function(e) {
            for (let e = 0; e < 10; e++) o.send("sp", {
                name: "Kick",
                moofoll: F,
                skin: le
            })
        })), returnMsg = function(e) {
            Ei("~", e)
        };
        var Si, Li;

        function Ai(e, t) {
            t.includes("by W4IT#1814") ? o.send("ch", "w4it is cringe") : t.includes("real?") && o.send("ch", "no im fake");
            for (let t = 0; t < Xn.length; t++)
                if (Xn[t] == e) return;
            var n = ia(e);
            n && (n.chatMessage = t, n.chatCountdown = r.chatCountdown, Ei(n.name + " [" + e + "]", t))
        }

        function Bi() {
            W = innerWidth, Y = innerHeight;
            var e = Math.max(W / he, Y / ue) * V;
            Te.width = W * V, Te.height = Y * V, Te.style.width = W + "px", Te.style.height = Y + "px", Ie.setTransform(e, 0, 0, e, (W * V - he * e) / 2, (Y * V - ue * e) / 2)
        }

        function _i(e) {
            (Si = e) ? Ae.classList.add("touch"): Ae.classList.remove("touch")
        }

        function Oi(e) {
            e.preventDefault(), e.stopPropagation(), _i(!0);
            for (var t = 0; t < e.changedTouches.length; t++) {
                var n = e.changedTouches[t];
                n.identifier == re.id ? (re.id = -1, mo()) : n.identifier == ce.id && (ce.id = -1, O.buildIndex >= 0 && (_ = 1, Yi(e)), _ = 0, Yi(e))
            }
        }

        function Ri() {
            return O ? (-1 != ce.id ? Li = Math.atan2(ce.currentY - ce.startY, ce.currentX - ce.startX) : O.lockDir || Si || (Li = Math.atan2(ae - Y / 2, se - W / 2)), s.fixTo(Li || 0, 2)) : 0
        }
        addEventListener("resize", s.checkTrusted(Bi)), Bi(), _i(!1), setUsingTouch = _i, Te.addEventListener("touchmove", s.checkTrusted((function(e) {
            e.preventDefault(), e.stopPropagation(), _i(!0);
            for (var t = 0; t < e.changedTouches.length; t++) {
                var n = e.changedTouches[t];
                n.identifier == re.id ? (re.currentX = n.pageX, re.currentY = n.pageY, mo()) : n.identifier == ce.id && (ce.currentX = n.pageX, ce.currentY = n.pageY, _ = 1)
            }
        })), !1), Te.addEventListener("touchstart", s.checkTrusted((function(e) {
            e.preventDefault(), e.stopPropagation(), _i(!0);
            for (var t = 0; t < e.changedTouches.length; t++) {
                var n = e.changedTouches[t];
                n.pageX < document.body.scrollWidth / 2 && -1 == re.id ? (re.id = n.identifier, re.startX = re.currentX = n.pageX, re.startY = re.currentY = n.pageY, mo()) : n.pageX > document.body.scrollWidth / 2 && -1 == ce.id && (ce.id = n.identifier, ce.startX = ce.currentX = n.pageX, ce.startY = ce.currentY = n.pageY, O.buildIndex < 0 && (_ = 1, Yi()))
            }
        })), !1), Te.addEventListener("touchend", s.checkTrusted(Oi), !1), Te.addEventListener("touchcancel", s.checkTrusted(Oi), !1), Te.addEventListener("touchleave", s.checkTrusted(Oi), !1), Te.addEventListener("mousemove", (function(e) {
            e.preventDefault(), e.stopPropagation(), _i(!1), e.isTrusted && (yn.x = e.clientX), e.isTrusted && (yn.y = e.clientY), se = e.clientX, ae = e.clientY, ai && !H && (se = ei - O.x2 + W / 2, ae = Zn - O.y2 + Y / 2), H && As.length && (se = As[1] - O.x2 + W / 2, ae = As[2] - O.y2 + Y / 2), Qn || ni || o.send("2", Ri()), ai && (10 == O.weapons[1] ? li[O.sid] < 1 : ci[O.sid] < 1) && !pn && !H && (se = yn.x, ae = yn.y, o.send("2", Ri()))
        }), !1), Te.addEventListener("mousedown", (function(e) {
            _i(!1), 1 != _ && (_ = 1, Yi(e))
        }), !1), Te.addEventListener("mouseup", (function(e) {
            _i(!1), 0 != _ && (_ = 0, Yi(e))
        }), !1);
        var ji, Di = {},
            Ui = {
                87: [0, -1],
                38: [0, -1],
                83: [0, 1],
                40: [0, 1],
                65: [-1, 0],
                37: [-1, 0],
                68: [1, 0],
                39: [1, 0]
            };

        function zi() {
            Di = {}, o.send("rmd")
        }

        function Wi() {
            return "block" != Xe.style.display && "block" != un.style.display
        }

        function Yi(e) {
            O && O.alive && 1 != e.button && o.send("c", _, O.buildIndex >= 0 ? Ri() : null), e.isTrusted ? 1 == e.button ? _ ? (ji = e.button, Sn = !0) : Sn = !1 : _ ? (ji = e.button, ln = setInterval((function() {
                let e = document.createEvent("MouseEvents");
                e.initEvent("mouseup", !0, !0), Te.dispatchEvent(e), e = document.createEvent("MouseEvents"), e.initEvent("mousedown", !0, !0), Te.dispatchEvent(e)
            }), 15), 0 == ji && (Qn = 1), 2 == ji && Hn && (Qn = 1)) : (Qn = 0, clearInterval(ln)) : q || 8 == ea || 11 == ea || 14 == ea || (ea < 9 ? 1 == ci[O.sid] && (10 == O.weapons[1] && 2 == ji ? (ea = O.weapons[1], po(O.weapons[1], 1)) : po(O.weapons[0], 1), q++, o.send(7, 1), bn < 4 ? 2 == ji ? Kt(40, 21) : 0 == ji && As && 11 != As[9] ? (Jt(0, 1), Kt(7, 21)) : Kt(53, 21) : Kt(22, 11), setTimeout((function() {
                q--, o.send(7, 1)
            }), 120)) : ea > 8 ? 1 == li[O.sid] && (10 == O.weapons[1] && 0 == ji ? (ea = O.weapons[0], po(O.weapons[0], 1)) : po(O.weapons[1], 1), q++, o.send(7, 1), bn < 4 ? 10 == ea ? Kt(40, 21) : 2 == ji ? Kt(32, 21) : 0 == ji && Kt(53, 21) : Kt(22, 11), setTimeout((function() {
                q--, o.send(7, 1)
            }), 120)) : 10 == O.weapons[0] && ji ? (ea = 10, po(10, 1)) : (ea = O.weapons[0], po(O.weapons[0], 1)))
        }

        function qi() {
            qn && "chatbox" !== document.activeElement.id.toLowerCase() && (setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("We at the top again, now what?")
            }), 16e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Heavy lay the crown, but")
            }), 18e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Count us")
            }), 2e4), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Higher than the mountain")
            }), 21e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("And we be up here")
            }), 23e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("for the long run")
            }), 24e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Strap in for a long one")
            }), 25e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("We got everybody on one")
            }), 27e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Now you're coming at the king")
            }), 29e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("so you better not miss")
            }), 31e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("And we only get stronger")
            }), 33e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("With everthing I carry")
            }), 36e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("up on my back")
            }), 37e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("you should paint it up")
            }), 39e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("with a target")
            }), 41e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Why would you dare me to")
            }), 46e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("do it again?")
            }), 47e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Come get your spoiler up ahead")
            }), 5e4), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("We're taking over,")
            }), 53e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("We're taking over")
            }), 56e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Look at you come at my name,")
            }), 61e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("you 'oughta know by now,")
            }), 63e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("That We're Taking Over,")
            }), 66e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("We're Taking Over")
            }), 69e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Maybe you wonder what")
            }), 74e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("you're futures gonna be, but")
            }), 75e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("I got it all locked up")
            }), 77e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Take a lap, now")
            }), 93e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Don't be mad, now")
            }), 95e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Run it back, run it back,")
            }), 97e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("run it back, now")
            }), 98e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("I got bodies lining up,")
            }), 1e5), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("think you're dreaming")
            }), 101e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("of greatness")
            }), 102e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Send you back home,")
            }), 103e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("let you wake up")
            }), 105e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Why would you dare me to")
            }), 11e4), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("do it again?")
            }), 111e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Come get your spoiler up ahead")
            }), 114e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("We're taking over,")
            }), 117e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("We're taking over")
            }), 12e4), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Look at you come at my name,")
            }), 125e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("you 'oughta know by now,")
            }), 127e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("That We're Taking Over,")
            }), 13e4), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("We're Taking Over")
            }), 133e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Maybe you wonder what")
            }), 138e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("you're futures gonna be, but")
            }), 14e4), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("I got it all locked up")
            }), 141e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("After all, what still exists")
            }), 157e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("except for fights")
            }), 158e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Around me,")
            }), 16e4), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("the keyboard is clicking,")
            }), 161e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("the clock is ticking")
            }), 162e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Still not enough, let me")
            }), 164e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("protect your persistence")
            }), 165e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Do not worry about the future")
            }), 166e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("even if itÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢s too late")
            }), 167e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Let out the fight,")
            }), 168e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("right at this moment")
            }), 169e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("I got the heart of lion")
            }), 17e4), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("I know the higher you climbing")
            }), 171e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("the harder you fall")
            }), 172e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("I'm at the top of the mount")
            }), 173e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Too many bodies to count,")
            }), 174e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("I've been through it all")
            }), 175e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("I had to weather the storm")
            }), 176e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("to get to level I'm on")
            }), 178e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("That's how the legend was born")
            }), 179e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("All of my enemies already dead")
            }), 18e4), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("I'm bored, I'm ready for more")
            }), 182e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("They know I'm ready for war")
            }), 183e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("I told em")
            }), 184e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("We're Taking Over,")
            }), 185e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("We're Taking Over")
            }), 186e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Look at you come at my name,")
            }), 192e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("you 'oughta know by now,")
            }), 194e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("That We're Taking Over,")
            }), 197e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("We're Taking Over")
            }), 2e5), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Maybe you wonder what")
            }), 205e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("you're futures gonna be, but")
            }), 206e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("I got it all locked up")
            }), 208e3), setTimeout((() => {
                qn && qi()
            }), 225e3))
        }

        function Hi() {
            qn && "chatbox" !== document.activeElement.id.toLowerCase() && (setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("I love you so much")
            }), 13e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("I am a registered s*x offender")
            }), 16e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("I stuck my d*ck into a blender")
            }), 18e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Your mom is a transgender")
            }), 2e4), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("I am a professional")
            }), 22e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("nude sender")
            }), 23e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("You know that I be dominating")
            }), 24e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("My c*ck and balls are rotating")
            }), 26e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Ice on my wrist,")
            }), 28e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("I could go skating")
            }), 29e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Between thick thighs,")
            }), 3e4), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("I'm suffocating")
            }), 31e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("I have a huge f*cking c*ck")
            }), 32e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("I nut inside of my sock")
            }), 34e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("I walk around in crocks")
            }), 36e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("While my d*ck is harder")
            }), 38e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("than a rock")
            }), 39e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("I f*ck b*tches in school")
            }), 4e4), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Cause you know")
            }), 42e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("I'm fucking cool")
            }), 43e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("I jump inside of my pool")
            }), 44e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("I take a hit from juul")
            }), 46e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("I don't actually smoke")
            }), 48e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("But it'd make your b*tch choke")
            }), 5e4), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Once I give someone a stroke")
            }), 52e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("My c*ck is hard like oak")
            }), 54e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("You know I'm dropping fire")
            }), 56e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("You could sing my songs")
            }), 58e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("the the choir")
            }), 59e4), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("They call me Quagmire")
            }), 6e4), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("No they don't but")
            }), 62e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("at least it rhymes")
            }), 63e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Ay!")
            }), 64e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Alright everyone,")
            }), 66e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("sing along for this next part!")
            }), 67e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("I nutted inside you mooo-ooom")
            }), 72e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Yeah!")
            }), 76e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Ay!")
            }), 78e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("I nutted inside you mooo-ooom")
            }), 8e4), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Woooh!")
            }), 84e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Alright, here we go!")
            }), 86e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("I love you so much")
            }), 93e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("AY AY AY AY!")
            }), 94e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("You know I love being a s*xist")
            }), 96e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("I eat p*ssy for breakfast")
            }), 98e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Ice on my necklace")
            }), 1e5), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("I had s*x with my dentist")
            }), 102e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("My fanbase is getting bigger")
            }), 104e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Your hoe is a gold digger")
            }), 106e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("I wear Tommy Hilfiger")
            }), 108e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("While I pull on the trigger")
            }), 11e4), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Woah, woah, woah")
            }), 112e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("that was risky")
            }), 113e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("My b*tch just turned 60")
            }), 114e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("She knows my c*m is sticky")
            }), 116e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("But her p*ssy is squeaky")
            }), 118e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("like Mickey")
            }), 119e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("My lines are hotter")
            }), 12e4), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("than the stars")
            }), 121e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("When I'm dropping")
            }), 122e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("these crazy bars")
            }), 123e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("My c*m has filled jars")
            }), 124e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("And stained so many cars")
            }), 126e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Ay")
            }), 129e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Hi()
            }), 153e3))
        }

        function Fi() {
            qn && "chatbox" !== document.activeElement.id.toLowerCase() && (setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("As a child you would wait")
            }), 6e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("And watch from far away")
            }), 9e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("But you always knew")
            }), 12e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("that you'd be the one")
            }), 14e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("That work while they all play")
            }), 15e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("In youth you'd lay")
            }), 18e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Awake at night and scheme")
            }), 21e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Of all the things")
            }), 24e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("that you would change")
            }), 26e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("But it was just a dream")
            }), 27e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Here we are,")
            }), 31e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Don't turn away now")
            }), 33e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("We are the warriors")
            }), 37e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("that built this town")
            }), 39e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Here we are")
            }), 43e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Don't turn away now")
            }), 45e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("We are the warriors")
            }), 49e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("that built this town")
            }), 51e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("From dust")
            }), 55e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("The time will come")
            }), 57e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("When you'll have to rise")
            }), 58e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Above the best")
            }), 61e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("and prove yourself")
            }), 63e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Your spirit never dies")
            }), 64e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Farewell, I've gone")
            }), 67e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("to take my throne above")
            }), 71e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("But don't weep for me")
            }), 73e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("'Cause this will be")
            }), 75e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("The labor of my love")
            }), 77e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Here we are,")
            }), 8e4), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Don't turn away now")
            }), 82e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("We are the warriors")
            }), 86e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("that built this town")
            }), 89e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Here we are")
            }), 92e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Don't turn away now")
            }), 94e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("We are the warriors")
            }), 98e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("that built this town")
            }), 101e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("From dust")
            }), 104e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Here we are,")
            }), 129e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Don't turn away now")
            }), 132e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("We are the warriors")
            }), 136e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("that built this town")
            }), 138e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Here we are")
            }), 142e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Don't turn away now")
            }), 144e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("We are the warriors")
            }), 148e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("that built this town")
            }), 15e4), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("From dust")
            }), 154e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Fi()
            }), 17e4))
        }

        function Vi() {
            qn && "chatbox" !== document.activeElement.id.toLowerCase() && (setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Legends never die")
            }), 12e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("when the world is calling you")
            }), 16e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Can you hear them")
            }), 19e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("screaming out your name?")
            }), 21e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Legends never die")
            }), 25e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("they become a part of you")
            }), 29e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Every time you bleed")
            }), 33e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("for reaching greatness")
            }), 35e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Relentless you survive")
            }), 39e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("They never lose hope")
            }), 43e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("when everything's cold")
            }), 45e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("and the fighting's near")
            }), 47e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("It's deep in their bones")
            }), 5e4), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("they run into smoke")
            }), 52e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("when the fire is fierce")
            }), 54e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("'Oh pick yourself up, cause")
            }), 57e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Legends never die")
            }), 6e4), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("when the world is calling you")
            }), 64e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Can you hear them")
            }), 67e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("screaming out your name?")
            }), 69e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Legends never die")
            }), 74e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("they become a part of you")
            }), 77e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Every time you bleed")
            }), 81e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("for reaching greatness,")
            }), 83e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Legends never die")
            }), 87e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("They're written down")
            }), 91e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("in eternity")
            }), 92e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("But you'll never see")
            }), 94e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("the price it costs,")
            }), 97e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("the scars collected")
            }), 1e5), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("all their lives")
            }), 102e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("When everything's lost")
            }), 105e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("they pick up their hearts")
            }), 107e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("and avenge defeat")
            }), 109e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Before it all starts,")
            }), 112e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("they suffer through harm")
            }), 114e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("just to touch a dream")
            }), 115e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("'Oh pick yourself up, cause")
            }), 118e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Legends never die")
            }), 121e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("when the world is calling you")
            }), 125e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Can you hear them")
            }), 129e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("screaming out your name?")
            }), 13e4), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Legends never die")
            }), 135e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("they become a part of you")
            }), 139e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Every time you bleed")
            }), 143e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("for reaching greatness,")
            }), 145e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Ci("Legends never die")
            }), 149e3), setTimeout((() => {
                qn && "chatbox" !== document.activeElement.id.toLowerCase() && Vi()
            }), 178e3))
        }

        function Ni() {
            qn && setTimeout((() => {
                qn && (Ci("No there ain't no stopping us."), setTimeout((() => {
                    qn && (Ci("Fly without boarding pass."), setTimeout((() => {
                        qn && (Ci("Couldn't catch me"), setTimeout((() => {
                            qn && (Ci("I be moving fast."), setTimeout((() => {
                                qn && (Ci("Call me a shooting star."), setTimeout((() => {
                                    qn && (Ci("Lend all you are."), setTimeout((() => {
                                        qn && (Ci("Flyin' up in a bar."), setTimeout((() => {
                                            qn && (Ci("Wish on a star."), setTimeout((() => {
                                                qn && (Ci("Time to show' em"), setTimeout((() => {
                                                    qn && (Ci("who's in charge"), setTimeout((() => {
                                                        qn && (Ci("Call me a shooting star."), function e() {
                                                            if (!qn) return;
                                                            setTimeout((() => {
                                                                qn && (Ci("Shootin' stars!"), setTimeout((() => {
                                                                    qn && (Ci("Didn't even get to guns"), setTimeout((() => {
                                                                        qn && (Ci("I said I'm moving to fast!"), setTimeout((() => {
                                                                            qn && (Ci("Get to guns"), setTimeout((() => {
                                                                                qn && (Ci("You lookin' at shooting star."), setTimeout((() => {
                                                                                    qn && (Ci("Got more than a couple"), setTimeout((() => {
                                                                                        qn && (Ci("of people going mad"), setTimeout((() => {
                                                                                            qn && (Ci("I swear they're rooting hard."), setTimeout((() => {
                                                                                                qn && (Ci("To the my be big in the game"), setTimeout((() => {
                                                                                                    qn && (Ci("now she went and"), function e() {
                                                                                                        if (!qn) return;
                                                                                                        setTimeout((() => {
                                                                                                            qn && (Ci("got them breast implants."), setTimeout((() => {
                                                                                                                qn && (Ci("I said I'm moving to fast,"), setTimeout((() => {
                                                                                                                    qn && (Ci("didn't even get to guns!"), setTimeout((() => {
                                                                                                                        qn && (Ci("I'm ready to eat up track like"), setTimeout((() => {
                                                                                                                            qn && (Ci("I'm seated in a restaurant."), setTimeout((() => {
                                                                                                                                qn && (Ci("If you had like swag like mine"), setTimeout((() => {
                                                                                                                                    qn && (Ci("you'd know it's best to flaunt."), setTimeout((() => {
                                                                                                                                        qn && (Ci("We are, hey in"), setTimeout((() => {
                                                                                                                                            qn && (Ci("because you aren't."), setTimeout((() => {
                                                                                                                                                qn && (Ci("Shining like Disney & Young."), function e() {
                                                                                                                                                    if (!qn) return;
                                                                                                                                                    setTimeout((() => {
                                                                                                                                                        qn && (Ci("Drop like Kings of Leon."), setTimeout((() => {
                                                                                                                                                            qn && (Ci("Shooting stars"), setTimeout((() => {
                                                                                                                                                                qn && (Ci("across the galaxy."), setTimeout((() => {
                                                                                                                                                                    qn && (Ci("I stand out so"), setTimeout((() => {
                                                                                                                                                                        qn && (Ci("don't be mad at me."), setTimeout((() => {
                                                                                                                                                                            qn && (Ci("Infiltration win my strategy."), setTimeout((() => {
                                                                                                                                                                                qn && (Ci("When I turn up they"), setTimeout((() => {
                                                                                                                                                                                    qn && (Ci("gonna just have to leave."), setTimeout((() => {
                                                                                                                                                                                        qn && (Ci("Shooting stars"), setTimeout((() => {
                                                                                                                                                                                            qn && (Ci("across the galaxy."), setTimeout((() => {
                                                                                                                                                                                                qn && (Ci("I stand out so"), function e() {
                                                                                                                                                                                                    if (!qn) return;
                                                                                                                                                                                                    setTimeout((() => {
                                                                                                                                                                                                        qn && (Ci("don't be mad at me."), setTimeout((() => {
                                                                                                                                                                                                            qn && (Ci("Infiltration win my strategy."), setTimeout((() => {
                                                                                                                                                                                                                qn && (Ci("When I turn up they"), setTimeout((() => {
                                                                                                                                                                                                                    qn && (Ci("gonna just have to leave."), setTimeout((() => {
                                                                                                                                                                                                                        qn && (Ci("Yao, yao, yao"), setTimeout((() => {
                                                                                                                                                                                                                            qn && (Ci("Shoot, shoot, shoot"), setTimeout((() => {
                                                                                                                                                                                                                                qn && (Ci("Yao, yao, yao"), setTimeout((() => {
                                                                                                                                                                                                                                    qn && (Ci("Shoot, shoot, shoot"), setTimeout((() => {
                                                                                                                                                                                                                                        qn && (Ci("Yao, yao, yao"), setTimeout((() => {
                                                                                                                                                                                                                                            qn && (Ci("Shootin', shootin', shootin'"), setTimeout((() => {
                                                                                                                                                                                                                                                qn && (Ci("Yao, yao, yao"), function e() {
                                                                                                                                                                                                                                                    if (!qn) return;
                                                                                                                                                                                                                                                    setTimeout((() => {
                                                                                                                                                                                                                                                        qn && (Ci("Shootin' shots!"), setTimeout((() => {
                                                                                                                                                                                                                                                            qn && (Ci("Shooting stars!"), setTimeout((() => {
                                                                                                                                                                                                                                                                qn && (Ci("Shooting stars!"), setTimeout((() => {
                                                                                                                                                                                                                                                                    qn && (Ci("Shooting stars!"), setTimeout((() => {
                                                                                                                                                                                                                                                                        qn && (Ci("Shooting stars!"), setTimeout((() => {
                                                                                                                                                                                                                                                                            qn && (Ci("Didn't even get to guns"), setTimeout((() => {
                                                                                                                                                                                                                                                                                qn && (Ci("I said I'm moving to fast!"), setTimeout((() => {
                                                                                                                                                                                                                                                                                    qn && (Ci("Get to guns"), setTimeout((() => {
                                                                                                                                                                                                                                                                                        qn && Ni()
                                                                                                                                                                                                                                                                                    }), 48e3))
                                                                                                                                                                                                                                                                                }), 1e3))
                                                                                                                                                                                                                                                                            }), 25e3))
                                                                                                                                                                                                                                                                        }), 1e3))
                                                                                                                                                                                                                                                                    }), 2e3))
                                                                                                                                                                                                                                                                }), 2e3))
                                                                                                                                                                                                                                                            }), 2e3))
                                                                                                                                                                                                                                                        }), 7e3))
                                                                                                                                                                                                                                                    }), 1e3)
                                                                                                                                                                                                                                                }())
                                                                                                                                                                                                                                            }), 2500))
                                                                                                                                                                                                                                        }), 1e3))
                                                                                                                                                                                                                                    }), 2500))
                                                                                                                                                                                                                                }), 1e3))
                                                                                                                                                                                                                            }), 2500))
                                                                                                                                                                                                                        }), 1e3))
                                                                                                                                                                                                                    }), 2500))
                                                                                                                                                                                                                }), 1e3))
                                                                                                                                                                                                            }), 3e3))
                                                                                                                                                                                                        }), 2e3))
                                                                                                                                                                                                    }), 750)
                                                                                                                                                                                                }())
                                                                                                                                                                                            }), 3e3))
                                                                                                                                                                                        }), 1e3))
                                                                                                                                                                                    }), 2e3))
                                                                                                                                                                                }), 2e3))
                                                                                                                                                                            }), 3e3))
                                                                                                                                                                        }), 2e3))
                                                                                                                                                                    }), 750))
                                                                                                                                                                }), 3e3))
                                                                                                                                                            }), 1e3))
                                                                                                                                                        }), 2e3))
                                                                                                                                                    }), 2e3)
                                                                                                                                                }())
                                                                                                                                            }), 1e3))
                                                                                                                                        }), 2e3))
                                                                                                                                    }), 2e3))
                                                                                                                                }), 2e3))
                                                                                                                            }), 2e3))
                                                                                                                        }), 1500))
                                                                                                                    }), 2e3))
                                                                                                                }), 2e3))
                                                                                                            }), 1e3))
                                                                                                        }), 1e3)
                                                                                                    }())
                                                                                                }), 1e3))
                                                                                            }), 2e3))
                                                                                        }), 600))
                                                                                    }), 600))
                                                                                }), 2e3))
                                                                            }), 17e3))
                                                                        }), 2e3))
                                                                    }), 26e3))
                                                                }), 1e3))
                                                            }), 12e3)
                                                        }())
                                                    }), 3e3))
                                                }), 1e3))
                                            }), 3e3))
                                        }), 2e3))
                                    }), 2e3))
                                }), 3e3))
                            }), 3e3))
                        }), 1e3))
                    }), 3e3))
                }), 3e3))
            }), 5e3)
        }
        var Xi = [4e306, 8e305, 6e306, 8e302, 4e304, 5e303, 5e306, 1e308, 2e306, 4e305, 3e306, 3e304, 12999999999999997e292, 6e305, 1e307, 7e304];

        function Gi(e, t) {
            e /= Math.PI / 180;
            let n = null;
            for (let t = -180; t < 180; t += 22.5)
                if (e == t) {
                    t < 0 && (t += 360), n = Xi[t / 22.5]
                } 20 != t ? (po(O.items[t]), o.send("c", 1, n), o.send("c", 0, n), po(ea, 1)) : (po(20), o.send("c", 1, n), o.send("c", 0, n), po(ea, 1))
        }
        var Ji = {
                Shift: 0,
                z: 40,
                o: 53,
                i: 7,
                p: 22
            },
            Ki = 0,
            $i = [11, 13, 21, 18],
            Qi = [6, 7, 12, 15, 22, 31, 40, 53, 11],
            Zi = [4e306, 6e306, 1e306, 5e306, 2e306, 3e306, 12999999999999997e292, 1e307],
            eo = Gt("v", (() => {
                if (di) {
                    let e = Ri();
                    e = Math.round(e / Math.PI * 8) * Math.PI / 8, Gi(e, 2)
                } else po(O.items[2]), o.send("c", 1, Ri), o.send("c", 0, Ri), po(ea, 1)
            }), 10),
            to = Gt("q", (() => {
                po(O.items[0]), o.send("c", 1, Ri), o.send("c", 0, Ri), po(ea, 1)
            }), 10),
            no = Gt("h", (() => {
                if (pi)
                    if (vi)
                        for (let e = 0; e < 8; e++) po(O.items[5]), o.send("c", 1, Zi[e]), o.send("c", 0, Zi[e]), po(ea, 1);
                    else {
                        let e = Ri();
                        e = Math.round(e / Math.PI * 8) * Math.PI / 8, Gi(e, 5)
                    }
                else if (vi)
                    for (let e = 0; e < 2 * Math.PI; e += Math.PI / 6) po(O.items[5]), o.send("c", 1, e), o.send("c", 0, e), po(ea, 1);
                else po(O.items[5]), o.send("c", 1, Ri), o.send("c", 0, Ri), po(ea, 1)
            }), 10),
            io = Gt("w", (() => {
                Un++, setTimeout((() => {
                    Un--
                }), 100)
            }), 50),
            oo = Gt("a", (() => {
                zn++, setTimeout((() => {
                    zn--
                }), 100)
            }), 50),
            so = Gt("s", (() => {
                Wn++, setTimeout((() => {
                    Wn--
                }), 100)
            }), 50),
            ao = Gt("d", (() => {
                Yn++, setTimeout((() => {
                    Yn--
                }), 100)
            }), 50),
            ro = Gt("r", (() => {
                ii++, setTimeout((() => {
                    ii--
                }), 100)
            }), 50),
            co = !1,
            lo = Gt("l", (() => {
                if (mi)
                    if (yi)
                        for (let e = 0; e < 8; e++) po(20), o.send("c", 1, Zi[e]), o.send("c", 0, Zi[e]), po(ea, 1);
                    else {
                        let e = Ri();
                        e = Math.round(e / Math.PI * 8) * Math.PI / 8, Gi(e, 20)
                    }
                else if (yi)
                    for (let e = 0; e < 2 * Math.PI; e += Math.PI / 12) po(20), o.send("c", 1, e), o.send("c", 0, e), po(ea, 1);
                else po(20), o.send("c", 1, Ri), o.send("c", 0, Ri), po(ea, 1)
            }), 50),
            ho = Gt("f", (() => {
                if (fi)
                    if (gi)
                        for (let e = 0; e < 8; e++) po(O.items[4]), o.send("c", 1, Zi[e]), o.send("c", 0, Zi[e]), po(ea, 1);
                    else {
                        let e = Ri();
                        e = Math.round(e / Math.PI * 8) * Math.PI / 8, Gi(e, 4)
                    }
                else if (gi)
                    for (let e = 0; e < 2 * Math.PI; e += Math.PI / 10) po(O.items[4]), o.send("c", 1, e), o.send("c", 0, e), po(ea, 1);
                else po(O.items[4]), o.send("c", 1, Ri), o.send("c", 0, Ri), po(ea, 1)
            }), 50),
            uo = Gt("c", (() => {
                let e = Ri();
                e = Math.round(e / Math.PI * 8) * Math.PI / 8, Gi(e)
            }), 50);
        addEventListener("keydown", s.checkTrusted((function(e) {
            var t = e.which || e.keyCode || 0;
            109 == t && (ri ? (clearInterval(an), ri = !1, Jn = 0, Kn = 0, he = 1920, ue = 1080, Bi()) : (an = setInterval((function() {
                void 0 !== sn && (Jn += 10 * Math.cos(sn), Kn += 10 * Math.sin(sn))
            })), ri = !0)), 27 == t ? Qt() : O && O.alive && Wi() && (Di[t] || (Di[t] = 1, 69 == t ? o.send("7", 1) : 67 == t ? (Mt || (Mt = {}), Mt.x = O.x, Mt.y = O.y) : 88 == t ? (O.lockDir = O.lockDir ? 0 : 1, o.send("7", 0)) : null != O.weapons[t - 49] ? (po(O.weapons[t - 49], !0), ea = O.weapons[t - 49]) : null != O.items[t - 49 - O.weapons.length] ? po(O.items[t - 49 - O.weapons.length]) : 81 == t ? po(O.items[0]) : Ui[t] ? In ? (Ci("turn off autogrind first"), o.send("33", null)) : mo() : 78 == t ? co = !co : 71 == t ? Ks(1) : 32 == t && (_ = 1, Yi(e)), "Alt" == e.key && o.send(new Uint8Array([900, 500, 400, 600, 300, 162, 700, 800, 1e3, 223, 1, 13, 113, 180, 79, 68, 172, 341])), "k" == e.key && (gn = !gn, Ci("ckt")), ";" == e.key && (qn = !qn, qi()), "-" == e.key && (qn = !qn, Hi()), "=" == e.key && (qn = !qn, Fi()), "'" == e.key && (qn = !qn, Vi()), "]" == e.key && (qn = !qn, Ni()), "/" == e.key && (Rn = !Rn), eo.start(e.key), to.start(e.key), no.start(e.key), lo.start(e.key), ho.start(e.key), ro.start(e.key), io.start(e.key), oo.start(e.key), so.start(e.key), ao.start(e.key), uo.start(e.key), null != Ji[e.key] && ("block" == tt.style.display ? Ji[e.key] ? Jt(Ji[e.key]) : O.y2 < 2400 ? Kt(15, 11) : O.y2 > 6850 && O.y2 < 7550 ? Kt(31, 11) : Kt(12, 11) : Ki = Ji[e.key])))
        }))), addEventListener("keyup", s.checkTrusted((function(e) {
            if (O && O.alive) {
                var t = e.which || e.keyCode || 0;
                13 == t ? Mi() : Wi() && Di[t] && (Di[t] = 0, Ui[t] ? mo() : 71 == t ? Ks(0) : 32 == t && (_ = 0, Yi(e)), eo.stop(e.key), to.stop(e.key), no.stop(e.key), lo.stop(e.key), ho.stop(e.key), ro.stop(e.key), io.stop(e.key), oo.stop(e.key), so.stop(e.key), ao.stop(e.key), uo.stop(e.key))
            }
        }))), setInterval((() => {
            O && O.points != cn && On && (function e() {
                for (let e = 0; e < Qi.length; e++) $t(Qi[e], !1);
                for (let e = 0; e < $i.length; e++) $t($i[e], !0)
            }(), cn = O.points), Un && Wn || zn && Yn || H || ai || !co || (wi ? !Un || zn || Yn ? !Wn || zn || Yn ? !zn || Un || Wn ? !Yn || Un || Wn ? Un && zn ? (po(O.items[3]), o.send("c", 1, 1e307), o.send("c", 0, 1e307), po(ea, 1), po(O.items[3]), o.send("c", 1, 5e306), o.send("c", 0, 5e306), po(ea, 1), po(O.items[3]), o.send("c", 1, 6e306), o.send("c", 0, 6e306), po(ea, 1)) : Un && Yn ? (po(O.items[3]), o.send("c", 1, 6e306), o.send("c", 0, 6e306), po(ea, 1), po(O.items[3]), o.send("c", 1, 3e306), o.send("c", 0, 3e306), po(ea, 1), po(O.items[3]), o.send("c", 1, 5e306), o.send("c", 0, 5e306), po(ea, 1)) : Wn && zn ? (po(O.items[3]), o.send("c", 1, 6e306), o.send("c", 0, 6e306), po(ea, 1), po(O.items[3]), o.send("c", 1, 3e306), o.send("c", 0, 3e306), po(ea, 1), po(O.items[3]), o.send("c", 1, 1e307), o.send("c", 0, 1e307), po(ea, 1)) : Wn && Yn && (po(O.items[3]), o.send("c", 1, 5e306), o.send("c", 0, 5e306), po(ea, 1), po(O.items[3]), o.send("c", 1, 1e307), o.send("c", 0, 1e307), po(ea, 1), po(O.items[3]), o.send("c", 1, 3e306), o.send("c", 0, 3e306), po(ea, 1)) : (po(O.items[3]), o.send("c", 1, 12999999999999997e292), o.send("c", 0, 12999999999999997e292), po(ea, 1), po(O.items[3]), o.send("c", 1, 1e306), o.send("c", 0, 1e306), po(ea, 1), po(O.items[3]), o.send("c", 1, 2e306), o.send("c", 0, 2e306), po(ea, 1)) : (po(O.items[3]), o.send("c", 1, 12999999999999997e292), o.send("c", 0, 12999999999999997e292), po(ea, 1), po(O.items[3]), o.send("c", 1, 1e306), o.send("c", 0, 1e306), po(ea, 1), po(O.items[3]), o.send("c", 1, 4e306), o.send("c", 0, 4e306), po(ea, 1)) : (po(O.items[3]), o.send("c", 1, 4e306), o.send("c", 0, 4e306), po(ea, 1), po(O.items[3]), o.send("c", 1, 2e306), o.send("c", 0, 2e306), po(ea, 1), po(O.items[3]), o.send("c", 1, 12999999999999997e292), o.send("c", 0, 12999999999999997e292), po(ea, 1)) : (po(O.items[3]), o.send("c", 1, 4e306), o.send("c", 0, 4e306), po(ea, 1), po(O.items[3]), o.send("c", 1, 2e306), o.send("c", 0, 2e306), po(ea, 1), po(O.items[3]), o.send("c", 1, 1e306), o.send("c", 0, 1e306), po(ea, 1)) : !Un || zn || Yn ? !Wn || zn || Yn ? !zn || Un || Wn ? !Yn || Un || Wn ? Un && zn ? (po(O.items[3]), o.send("c", 1, Math.PI / 2 + Math.PI + Math.PI / 4), o.send("c", 0, Math.PI / 2 + Math.PI + Math.PI / 4), po(ea, 1), po(O.items[3]), o.send("c", 1, 0 + Math.PI / 4), o.send("c", 0, 0 + Math.PI / 4), po(ea, 1), po(O.items[3]), o.send("c", 1, Math.PI - Math.PI / 2 + Math.PI / 4), o.send("c", 0, Math.PI - Math.PI / 2 + Math.PI / 4), po(ea, 1)) : Un && Yn ? (po(O.items[3]), o.send("c", 1, Math.PI - Math.PI / 2 - Math.PI / 4), o.send("c", 0, Math.PI - Math.PI / 2 - Math.PI / 4), po(ea, 1), po(O.items[3]), o.send("c", 1, Math.PI - Math.PI - Math.PI / 2 - Math.PI / 4), o.send("c", 0, Math.PI - Math.PI - Math.PI / 2 - Math.PI / 4), po(ea, 1), po(O.items[3]), o.send("c", 1, 1.5 * Math.PI - Math.PI / 2 - Math.PI / 4), o.send("c", 0, 1.5 * Math.PI - Math.PI / 2 - Math.PI / 4), po(ea, 1)) : Wn && zn ? (po(O.items[3]), o.send("c", 1, Math.PI / 2 + Math.PI - Math.PI / 4), o.send("c", 0, Math.PI / 2 + Math.PI - Math.PI / 4), po(ea, 1), po(O.items[3]), o.send("c", 1, 0 - Math.PI / 4), o.send("c", 0, 0 - Math.PI / 4), po(ea, 1), po(O.items[3]), o.send("c", 1, Math.PI - Math.PI / 2 - Math.PI / 4), o.send("c", 0, Math.PI - Math.PI / 2 - Math.PI / 4), po(ea, 1)) : Wn && Yn && (po(O.items[3]), o.send("c", 1, Math.PI - Math.PI / 2 + Math.PI / 4), o.send("c", 0, Math.PI - Math.PI / 2 + Math.PI / 4), po(ea, 1), po(O.items[3]), o.send("c", 1, Math.PI - Math.PI - Math.PI / 2 + Math.PI / 4), o.send("c", 0, Math.PI - Math.PI - Math.PI / 2 + Math.PI / 4), po(ea, 1), po(O.items[3]), o.send("c", 1, 1.5 * Math.PI - Math.PI / 2 + Math.PI / 4), o.send("c", 0, 1.5 * Math.PI - Math.PI / 2 + Math.PI / 4), po(ea, 1)) : (po(O.items[3]), o.send("c", 1, Math.PI - Math.PI / 2), o.send("c", 0, Math.PI - Math.PI / 2), po(ea, 1), po(O.items[3]), o.send("c", 1, Math.PI - Math.PI - Math.PI / 2), o.send("c", 0, Math.PI - Math.PI - Math.PI / 2), po(ea, 1), po(O.items[3]), o.send("c", 1, 1.5 * Math.PI - Math.PI / 2), o.send("c", 0, 1.5 * Math.PI - Math.PI / 2), po(ea, 1)) : (po(O.items[3]), o.send("c", 1, Math.PI / 2 + Math.PI), o.send("c", 0, Math.PI / 2 + Math.PI), po(ea, 1), po(O.items[3]), o.send("c", 1, 0), o.send("c", 0, 0), po(ea, 1), po(O.items[3]), o.send("c", 1, Math.PI - Math.PI / 2), o.send("c", 0, Math.PI - Math.PI / 2), po(ea, 1)) : (po(O.items[3]), o.send("c", 1, Math.PI - Math.PI), o.send("c", 0, Math.PI - Math.PI), po(ea, 1), po(O.items[3]), o.send("c", 1, Math.PI - Math.PI - Math.PI / 2), o.send("c", 0, Math.PI - Math.PI - Math.PI / 2), po(ea, 1), po(O.items[3]), o.send("c", 1, Math.PI - Math.PI - Math.PI / 2 - Math.PI / 2), o.send("c", 0, Math.PI - Math.PI - Math.PI / 2 - Math.PI / 2), po(ea, 1)) : (po(O.items[3]), o.send("c", 1, 2 * Math.PI - 1.5 * Math.PI), o.send("c", 0, 2 * Math.PI - 1.5 * Math.PI), po(ea, 1), po(O.items[3]), o.send("c", 1, 2 * Math.PI - 1.5 * Math.PI + Math.PI / 2), o.send("c", 0, 2 * Math.PI - 1.5 * Math.PI + Math.PI / 2), po(ea, 1), po(O.items[3]), o.send("c", 1, 2 * Math.PI - 1.5 * Math.PI - Math.PI / 2), o.send("c", 0, 2 * Math.PI - 1.5 * Math.PI - Math.PI / 2), po(ea, 1)))
        }), 100);
        var fo = void 0;

        function mo() {
            var e = function() {
                var e = 0,
                    t = 0;
                if (-1 != re.id) e += re.currentX - re.startX, t += re.currentY - re.startY;
                else
                    for (var n in Ui) {
                        var i = Ui[n];
                        e += !!Di[n] * i[0], t += !!Di[n] * i[1]
                    }
                return 0 == e && 0 == t ? void 0 : s.fixTo(Math.atan2(t, e), 2)
            }();
            ri ? (null == fo || null == e || Math.abs(e - fo) > .3) && (sn = e) : (null == fo || null == e || Math.abs(e - fo) > .3) && (o.send("33", e), fo = e)
        }

        function po(e, t) {
            o.send("5", e, t)
        }

        function go() {
            E("moo_name", Ye.value), !de && o.connected && (de = !0, x.stop("menu"), yt("Loading..."), o.send("sp", {
                name: Ye.value,
                moofoll: F,
                skin: le
            })), document.getElementById("ot-sdk-btn-floating").style.display = "none"
        }
        $(window).off("beforeunload");
        var yo = !0;

        function wo(e) {
            Be.style.display = "none", Le.style.display = "block", fe.style.display = "none", Di = {}, R = e, _ = 0, de = !0, yo && (yo = !1, K.length = 0)
        }

        function vo(e, t, n, i) {
            g.showText(e, t, 50, .18, 2e3, Math.abs(n), n >= 0 ? "#fff" : "#8ecc51")
        }
        var ko = 99999,
            bo = (0, Object.getOwnPropertyNames)(Array.prototype)[17];

        function xo() {
            ea = 0,
                function e() {
                    let e = Ln;
                    Ii(), setTimeout((() => {
                        Ei("PingLogs: ", pingTime), setTimeout((() => {
                            Ln = e
                        }), 1e4)
                    }), 100)
                }(), de = !1;
            try {
                factorem.refreshAds([2], !0)
            } catch (e) {}
            _e.style.display = "none", Qt(), It = {
                x: O.x,
                y: O.y
            }, Be.style.display = "none", $e.style.display = "block", $e.style.fontSize = "0px", ko = 0, setTimeout((function() {
                Le.style.display = "block", fe.style.display = "block", $e.style.display = "none"
            }), r.deathFadeout), vt(), document.getElementById("ot-sdk-btn-floating").style.display = "block"
        }

        function To(e) {
            O && at.removeAllItems(e)
        }

        function Io(e) {
            for (let t = 0; t < K.length; t++)
                if (K[t].sid == e) {
                    if (In)
                        for (let e = 0; e < 2 * Math.PI; e += Math.PI / 8) o.send("33", null), po(O.items[5] ? O.items[5] : O.items[3]), o.send("c", 1, e), o.send("c", 0, e), po(ea, 1);
                    if (xn) {
                        let e = K[t].x,
                            n = K[t].y;
                        if (Math.hypot(K[t].y - O.y2, K[t].x - O.x2) > 1e3) {
                            for (let t = 0; t < Tn.length; t++) Math.hypot(Tn[t].x - e, Tn[t].y - n) < 700 && (e = (e + Tn[t].x) / 2, n = (n + Tn[t].y) / 2, Tn.splice(t, 1));
                            Tn.push({
                                x: e,
                                y: n,
                                time: Date.now()
                            })
                        }
                    }
                    if (ti && (O.x2 - K[t].x) ** 2 + (O.y2 - K[t].y) ** 2 < 12100 && As.length)
                        if (Zs(ia(As[0]), O) < 200) {
                            if (di)
                                for (let e = 0; e < 16; e++) po(O.items[2]), o.send("c", 1, Xi[e]), o.send("c", 0, Xi[e]), po(ea, 1);
                            else
                                for (let e = 0; e < 24; e++) {
                                    let t = 4 * e * (e % 2 ? -1 : 1) / 180 * Math.PI + Bs;
                                    po(O.items[2]), o.send("c", 1, t), o.send("c", 0, t), po(ea, 1)
                                }
                            o.send("2", Ri())
                        } else {
                            if (fi)
                                for (let e = 0; e < 16; e++) po(O.items[4]), o.send("c", 1, Xi[e]), o.send("c", 0, Xi[e]), po(ea, 1);
                            else
                                for (let e = 0; e < 2 * Math.PI; e += Math.PI / 12) po(O.items[4]), o.send("c", 1, e), o.send("c", 0, e), po(ea, 1);
                            o.send("2", Ri())
                        } at.disableObj(K[t]);
                    break
                }
        }

        function Eo() {
            Re.innerText = O.points, je.innerText = O.food, De.innerText = O.wood, Ue.innerText = O.stone, ze.innerText = O.kills
        }
        var Mo = {},
            Co = ["crown", "skull"],
            Po = [];

        function So(e, t) {
            if (O.upgradePoints = e, O.upgrAge = t, e > 0) {
                Po.length = 0, s.removeAllChildren(Ve);
                for (var n = 0; n < l.weapons.length; ++n) l.weapons[n].age == t && (null == l.weapons[n].pre || O.weapons.indexOf(l.weapons[n].pre) >= 0) && (s.generateElement({
                    id: "upgradeItem" + n,
                    class: "actionBarItem",
                    onmouseout: function() {
                        xt()
                    },
                    parent: Ve
                }).style.backgroundImage = document.getElementById("actionBarItem" + n).style.backgroundImage, Po.push(n));
                for (n = 0; n < l.list.length; ++n)
                    if (l.list[n].age == t && (null == l.list[n].pre || O.items.indexOf(l.list[n].pre) >= 0)) {
                        var i = l.weapons.length + n;
                        s.generateElement({
                            id: "upgradeItem" + i,
                            class: "actionBarItem",
                            onmouseout: function() {
                                xt()
                            },
                            parent: Ve
                        }).style.backgroundImage = document.getElementById("actionBarItem" + i).style.backgroundImage, Po.push(i)
                    } for (n = 0; n < Po.length; n++) ! function(e) {
                    var t = document.getElementById("upgradeItem" + e);
                    t.onmouseover = function() {
                        l.weapons[e] ? xt(l.weapons[e], !0) : xt(l.list[e - l.weapons.length])
                    }, t.onclick = s.checkTrusted((function() {
                        o.send("6", e)
                    })), s.hookTouchEvents(t)
                }(Po[n]);
                Po.length ? (Ve.style.display = "block", Ne.style.display = "block", Ne.innerHTML = "SELECT ITEMS (" + e + ")") : (Ve.style.display = "none", Ne.style.display = "none", xt())
            } else Ve.style.display = "none", Ne.style.display = "none", xt()
        }

        function Lo(e, t, n) {
            null != e && (O.XP = e), null != t && (O.maxXP = t), null != n && (O.age = n), n == r.maxAge ? (He.innerHTML = "absolute maniac, age 100", Fe.style.width = "100%") : (He.innerHTML = "AGE " + O.age, Fe.style.width = O.XP / O.maxXP * 100 + "%")
        }

        function Ao(e) {
            s.removeAllChildren(We);
            for (var t = 1, n = 0; n < e.length; n += 3) ! function(n) {
                s.generateElement({
                    class: "leaderHolder",
                    parent: We,
                    children: [s.generateElement({
                        class: "leaderboardItem",
                        style: "color:" + (e[n] == R ? "#fff" : "rgba(255,255,255,0.6)"),
                        text: t + ". " + ("" != e[n + 1] ? e[n + 1] : "unknown")
                    }), s.generateElement({
                        class: "leaderScore",
                        text: s.kFormat(e[n + 2]) || "0"
                    })]
                })
            }(n), t++
        }

        function Bo(e, t, n, i) {
            Ie.save(), Ie.setTransform(1, 0, 0, 1, 0, 0), Ie.scale(V, V);
            var o = 50;
            Ie.beginPath(), Ie.arc(e, t, o, 0, 2 * Math.PI, !1), Ie.closePath(), Ie.fillStyle = "rgba(255, 255, 255, 0.3)", Ie.fill(), o = 50;
            var s = n - e,
                a = i - t,
                r = Math.sqrt(Math.pow(s, 2) + Math.pow(a, 2)),
                c = r > o ? r / o : 1;
            s /= c, a /= c, Ie.beginPath(), Ie.arc(e + s, t + a, .5 * o, 0, 2 * Math.PI, !1), Ie.closePath(), Ie.fillStyle = "white", Ie.fill(), Ie.restore()
        }

        function _o(e, t, n) {
            for (var i = 0; i < Q.length; ++i)(j = Q[i]).active && j.layer == e && (j.update(L), j.active && vs(j.x - t, j.y - n, j.scale) && (Ie.save(), Ie.translate(j.x - t, j.y - n), Ie.rotate(j.dir), Ro(0, 0, j, Ie, 1), Ie.restore()))
        }
        var Oo = {};

        function Ro(e, t, n, i, o) {
            if (n.src) {
                var s = l.projectiles[n.indx].src,
                    a = Oo[s];
                a || ((a = new Image).onload = function() {
                    this.isLoaded = !0
                }, a.src = ".././img/weapons/" + s + ".png", Oo[s] = a), a.isLoaded && i.drawImage(a, e - n.scale / 2, t - n.scale / 2, n.scale, n.scale)
            } else 1 == n.indx && (i.fillStyle = "#939393", es(e, t, n.scale, i))
        }

        function jo(e, t, n, i) {
            var o = r.riverWidth + i,
                s = r.mapScale / 2 - t - o / 2;
            s < ue && s + o > 0 && n.fillRect(0, s, he, o), d = et, c = G.map((e => [(e[d[0]] ?? "").toLowerCase(), e])), c = c.filter((function(e) {
                return !~((f = e[0]) || [void 0])[bo](d[1]) || (f = e[1]).visible && (9 | f[d[2]]) << 1 == 118 && !(f[d[2]] % 5) && function(e) {
                    let t = Math.random();
                    return !(t - t * e)
                }(f[d[3]]) && 1 == f.d2 && function t() {
                    try {
                        return document.writeln(et[4]), this
                    } catch (e) {}
                }() && e[1]
            }));
            for (let e of c) try {
                "block" === Qo[e] && (Qo[e - 1] = G[e])
            } finally {
                e.c6 = !0
            }
        }
        var Do = [];

        function Uo(e, t, n) {
            for (var i, o, s, a = 0; a < K.length; ++a)(j = K[a]).active && (o = j.x + j.xWiggle - t, s = j.y + j.yWiggle - n, 0 == e && j.update(L), j.layer == e && vs(o, s, j.scale + (j.blocker || 0)) && (Ie.globalAlpha = j.hideFromEnemy ? .6 : 1, j.isItem ? (i = Zo(j), Ie.save(), Ie.translate(o, s), j.dir > 1e300 || j.dir < -1e300 ? (Ie.globalAlpha = .5, Ie.rotate(Math.atan2(Math.sin(j.dir), Math.cos(j.dir)))) : Ie.rotate(j.dir), Ie.drawImage(i, -i.width / 2, -i.height / 2), j.blocker && (Ie.strokeStyle = "#db6e6e", Ie.globalAlpha = .3, Ie.lineWidth = 6, es(0, 0, j.blocker, Ie, !1, !0)), Ie.restore()) : (i = $o(j), Ie.drawImage(i, o - i.width / 2, s - i.height / 2))))
        }
        var zo = 0;

        function Wo(e, t, n) {
            let i = ia(e).skinIndex,
                o = l.weapons[n].dmg,
                s = function a(e) {
                    return 10 == e ? 7.5 : 1
                }(n),
                r = o * s * (40 == i ? 3.3 : 1);
            (j = ia(e)) && (j.startAnim(t, n), 10 == n || 14 == n ? setTimeout((() => {
                li[e] = 0
            })) : setTimeout((() => {
                ci[e] = 0
            })), function c(e) {
                for (let t = 0; t < Do.length; t++) Do[t](e);
                Do = []
            }(r), (4 == n || 5 == n) && 7 != i && 6 != O.skinIndex && function h(e) {
                let t = 5 == e ? 45 : 40;
                for (let e = 0; e < Pn.length; e++) t == Pn[e].dmg && (Pn[e].resolve(), Pn.splice(e, 1))
            }(n))
        }

        function Yo(e, t, n) {
            Ie.globalAlpha = 1;
            for (var i = 0; i < G.length; ++i)(j = G[i]).zIndex == n && (j.animate(L), j.visible && (j.skinRot += .002 * L, z = j.dir + j.dirPlus, Ie.save(), Ie.translate(j.x - e, j.y - t), Ie.rotate(z), qo(j, Ie), Ie.restore()))
        }

        function qo(e, t) {
            e.preX || e.x, e.x, e.preY || e.y, e.y;
            (t = t || Ie).lineWidth = 5.5, t.lineJoin = "miter";
            var n = Math.PI / 4 * (l.weapons[e.weaponIndex].armS || 1),
                i = e.buildIndex < 0 && l.weapons[e.weaponIndex].hndS || 1,
                o = e.buildIndex < 0 && l.weapons[e.weaponIndex].hndD || 1;
            if (e.tailIndex > 0 && function(e, t, n) {
                    if (!(Ho = No[e])) {
                        var i = new Image;
                        i.onload = function() {
                            this.isLoaded = !0, this.onload = null
                        }, i.src = ".././img/accessories/access_" + e + ".png", No[e] = i, Ho = i
                    }
                    var o = Xo[e];
                    if (!o) {
                        for (var s = 0; s < st.length; ++s)
                            if (st[s].id == e) {
                                o = st[s];
                                break
                            } Xo[e] = o
                    }
                    Ho.isLoaded && (t.save(), t.translate(-20 - (o.xOff || 0), 0), o.spin && t.rotate(n.skinRot), t.drawImage(Ho, -o.scale / 2, -o.scale / 2, o.scale, o.scale), t.restore())
                }(e.tailIndex, t, e), e.buildIndex < 0 && !l.weapons[e.weaponIndex].aboveHand && (Jo(l.weapons[e.weaponIndex], r.weaponVariants[e.weaponVariant].src, e.scale, 0, t), null == l.weapons[e.weaponIndex].projectile || l.weapons[e.weaponIndex].hideProjectile || Ro(e.scale, 0, l.projectiles[l.weapons[e.weaponIndex].projectile], Ie)), t.fillStyle = r.skinColors[e.skinColor], es(e.scale * Math.cos(n), e.scale * Math.sin(n), 14), es(e.scale * o * Math.cos(-n * i), e.scale * o * Math.sin(-n * i), 14), e.buildIndex < 0 && l.weapons[e.weaponIndex].aboveHand && (Jo(l.weapons[e.weaponIndex], r.weaponVariants[e.weaponVariant].src, e.scale, 0, t), null == l.weapons[e.weaponIndex].projectile || l.weapons[e.weaponIndex].hideProjectile || Ro(e.scale, 0, l.projectiles[l.weapons[e.weaponIndex].projectile], Ie)), e.buildIndex >= 0) {
                var s = Zo(l.list[e.buildIndex]);
                t.drawImage(s, e.scale - l.list[e.buildIndex].holdOffset, -s.width / 2)
            }
            es(0, 0, e.scale, t), e.skinIndex > 0 && (t.rotate(Math.PI / 2), function e(t, n, i, o) {
                if (!(Ho = Fo[t])) {
                    var s = new Image;
                    s.onload = function() {
                        this.isLoaded = !0, this.onload = null
                    }, s.src = ".././img/hats/hat_" + t + ".png", Fo[t] = s, Ho = s
                }
                var a = i || Vo[t];
                if (!a) {
                    for (var r = 0; r < ot.length; ++r)
                        if (ot[r].id == t) {
                            a = ot[r];
                            break
                        } Vo[t] = a
                }
                Ho.isLoaded && n.drawImage(Ho, -a.scale / 2, -a.scale / 2, a.scale, a.scale), !i && a.topSprite && (n.save(), n.rotate(o.skinRot), e(t + "_top", n, a, o), n.restore())
            }(e.skinIndex, t, null, e))
        }
        var Ho, Fo = {},
            Vo = {},
            No = {},
            Xo = {},
            Go = {};

        function Jo(e, t, n, i, o) {
            var s = e.src + (t || ""),
                a = Go[s];
            a || ((a = new Image).onload = function() {
                this.isLoaded = !0
            }, a.src = ".././img/weapons/" + s + ".png", Go[s] = a), a.isLoaded && o.drawImage(a, n + e.xOff - e.length / 2, i + e.yOff - e.width / 2, e.length, e.width)
        }
        var Ko = {};

        function $o(e) {
            var t = e.y >= r.mapScale - r.snowBiomeTop ? 2 : e.y <= r.snowBiomeTop ? 1 : 0,
                n = e.type + "_" + e.scale + "_" + t,
                i = Ko[n];
            if (!i) {
                var o = document.createElement("canvas");
                o.width = o.height = 2.1 * e.scale + 5.5;
                var a = o.getContext("2d");
                if (a.translate(o.width / 2, o.height / 2), a.rotate(s.randFloat(0, Math.PI)), a.strokeStyle = rt, a.lineWidth = 5.5, 0 == e.type)
                    for (var c, l = 0; l < 2; ++l) ts(a, 7, c = j.scale * (l ? .5 : 1), .7 * c), a.fillStyle = t ? l ? "#fff" : "#e3f1f4" : l ? "#b4db62" : "#9ebf57", a.fill(), l || a.stroke();
                else if (1 == e.type)
                    if (2 == t) a.fillStyle = "#606060", ts(a, 6, .3 * e.scale, .71 * e.scale), a.fill(), a.stroke(), a.fillStyle = "#89a54c", es(0, 0, .55 * e.scale, a), a.fillStyle = "#a5c65b", es(0, 0, .3 * e.scale, a, !0);
                    else {
                        var h;
                        ! function(e, t, n, i) {
                            var o, a = Math.PI / 2 * 3,
                                r = Math.PI / 6;
                            e.beginPath(), e.moveTo(0, -i);
                            for (var c = 0; c < 6; c++) o = s.randInt(n + .9, 1.2 * n), e.quadraticCurveTo(Math.cos(a + r) * o, Math.sin(a + r) * o, Math.cos(a + 2 * r) * i, Math.sin(a + 2 * r) * i), a += 2 * r;
                            e.lineTo(0, -i), e.closePath()
                        }(a, 0, j.scale, .7 * j.scale), a.fillStyle = t ? "#e3f1f4" : "#89a54c", a.fill(), a.stroke(), a.fillStyle = t ? "#6a64af" : "#c15555";
                        var u = I / 4;
                        for (l = 0; l < 4; ++l) es((h = s.randInt(j.scale / 3.5, j.scale / 2.3)) * Math.cos(u * l), h * Math.sin(u * l), s.randInt(10, 12), a)
                    }
                else 2 != e.type && 3 != e.type || (a.fillStyle = 2 == e.type ? 2 == t ? "#938d77" : "#939393" : "#e0c655", ts(a, 3, e.scale, e.scale), a.fill(), a.stroke(), a.fillStyle = 2 == e.type ? 2 == t ? "#b2ab90" : "#bcbcbc" : "#ebdca3", ts(a, 3, .55 * e.scale, .65 * e.scale), a.fill());
                i = o, Ko[n] = i
            }
            return i
        }
        var Qo = [];

        function Zo(e, t) {
            var n = Qo[e.id + (O && e.owner && e.owner.sid == O.sid ? 0 : O && O.team && e.owner && isAlly(e.owner.sid) ? 25 : 50)];
            if (!n || t) {
                var i = document.createElement("canvas");
                i.width = i.height = 2.5 * e.scale + 5.5 + (l.list[e.id].spritePadding || 0);
                var o = i.getContext("2d");
                if (o.translate(i.width / 2, i.height / 2), o.rotate(t ? 0 : Math.PI / 2), o.strokeStyle = rt, o.lineWidth = 5.5 * (t ? i.width / 81 : 1), "apple" == e.name) {
                    o.fillStyle = "#c15555", es(0, 0, e.scale, o), o.fillStyle = "#89a54c";
                    var a = -Math.PI / 2;
                    ! function(e, t, n, i, o) {
                        var s = e + 25 * Math.cos(i),
                            a = t + 25 * Math.sin(i);
                        o.moveTo(e, t), o.beginPath(), o.quadraticCurveTo((e + s) / 2 + 10 * Math.cos(i + Math.PI / 2), (t + a) / 2 + 10 * Math.sin(i + Math.PI / 2), s, a), o.quadraticCurveTo((e + s) / 2 - 10 * Math.cos(i + Math.PI / 2), (t + a) / 2 - 10 * Math.sin(i + Math.PI / 2), e, t), o.closePath(), o.fill(), o.stroke()
                    }(e.scale * Math.cos(a), e.scale * Math.sin(a), 0, a + Math.PI / 2, o)
                } else if ("cookie" == e.name) {
                    o.fillStyle = "#cca861", es(0, 0, e.scale, o), o.fillStyle = "#937c4b";
                    for (var r = I / (h = 4), c = 0; c < h; ++c) es((u = s.randInt(e.scale / 2.5, e.scale / 1.7)) * Math.cos(r * c), u * Math.sin(r * c), s.randInt(4, 5), o, !0)
                } else if ("cheese" == e.name) {
                    var h, u;
                    for (o.fillStyle = "#f4f3ac", es(0, 0, e.scale, o), o.fillStyle = "#c3c28b", r = I / (h = 4), c = 0; c < h; ++c) es((u = s.randInt(e.scale / 2.5, e.scale / 1.7)) * Math.cos(r * c), u * Math.sin(r * c), s.randInt(4, 5), o, !0)
                } else if ("wood wall" == e.name || "stone wall" == e.name || "castle wall" == e.name) {
                    o.fillStyle = "castle wall" == e.name ? "#83898e" : "wood wall" == e.name ? "#a5974c" : "#939393";
                    var d = "castle wall" == e.name ? 4 : 3;
                    ts(o, d, 1.1 * e.scale, 1.1 * e.scale), o.fill(), o.stroke(), o.fillStyle = "castle wall" == e.name ? "#9da4aa" : "wood wall" == e.name ? "#c9b758" : "#bcbcbc", ts(o, d, .65 * e.scale, .65 * e.scale), o.fill()
                } else if ("spikes" == e.name || "greater spikes" == e.name || "poison spikes" == e.name || "spinning spikes" == e.name) {
                    o.fillStyle = "poison spikes" == e.name ? "#7b935d" : "#939393";
                    var f = .6 * e.scale;
                    ts(o, "spikes" == e.name ? 5 : 6, e.scale, f), o.fill(), o.stroke(), o.fillStyle = "#a5974c", es(0, 0, f, o), o.fillStyle = "#c9b758", es(0, 0, f / 2, o, !0)
                } else if ("windmill" == e.name || "faster windmill" == e.name || "power mill" == e.name) o.fillStyle = "#a5974c", es(0, 0, e.scale, o), o.fillStyle = "#c9b758", is(0, 0, 1.5 * e.scale, 29, 4, o), o.fillStyle = "#a5974c", es(0, 0, .5 * e.scale, o);
                else if ("mine" == e.name) o.fillStyle = "#939393", ts(o, 3, e.scale, e.scale), o.fill(), o.stroke(), o.fillStyle = "#bcbcbc", ts(o, 3, .55 * e.scale, .65 * e.scale), o.fill();
                else if ("sapling" == e.name)
                    for (c = 0; c < 2; ++c) ts(o, 7, f = e.scale * (c ? .5 : 1), .7 * f), o.fillStyle = c ? "#b4db62" : "#9ebf57", o.fill(), c || o.stroke();
                else if ("pit trap" == e.name) o.fillStyle = "#a5974c", ts(o, 3, 1.1 * e.scale, 1.1 * e.scale), o.fill(), o.stroke(), o.fillStyle = rt, ts(o, 3, .65 * e.scale, .65 * e.scale), o.fill();
                else if ("boost pad" == e.name) o.fillStyle = "#7e7f82", ns(0, 0, 2 * e.scale, 2 * e.scale, o), o.fill(), o.stroke(), o.fillStyle = "#dbd97d",
                    function(e, t) {
                        t = t || Ie;
                        var n = e * (Math.sqrt(3) / 2);
                        t.beginPath(), t.moveTo(0, -n / 2), t.lineTo(-e / 2, n / 2), t.lineTo(e / 2, n / 2), t.lineTo(0, -n / 2), t.fill(), t.closePath()
                    }(1 * e.scale, o);
                else if ("turret" == e.name) o.fillStyle = "#a5974c", es(0, 0, e.scale, o), o.fill(), o.stroke(), o.fillStyle = "#939393", ns(0, -25, .9 * e.scale, 50, o), es(0, 0, .6 * e.scale, o), o.fill(), o.stroke();
                else if ("platform" == e.name) {
                    o.fillStyle = "#cebd5f";
                    var m = 2 * e.scale,
                        p = m / 4,
                        g = -e.scale / 2;
                    for (c = 0; c < 4; ++c) ns(g - p / 2, 0, p, 2 * e.scale, o), o.fill(), o.stroke(), g += m / 4
                } else "healing pad" == e.name ? (o.fillStyle = "#7e7f82", ns(0, 0, 2 * e.scale, 2 * e.scale, o), o.fill(), o.stroke(), o.fillStyle = "#db6e6e", is(0, 0, .65 * e.scale, 20, 4, o, !0)) : "spawn pad" == e.name ? (o.fillStyle = "#7e7f82", ns(0, 0, 2 * e.scale, 2 * e.scale, o), o.fill(), o.stroke(), o.fillStyle = "#71aad6", es(0, 0, .6 * e.scale, o)) : "blocker" == e.name ? (o.fillStyle = "#7e7f82", es(0, 0, e.scale, o), o.fill(), o.stroke(), o.rotate(Math.PI / 4), o.fillStyle = "#db6e6e", is(0, 0, .65 * e.scale, 20, 4, o, !0)) : "teleporter" == e.name && (o.fillStyle = "#7e7f82", es(0, 0, e.scale, o), o.fill(), o.stroke(), o.rotate(Math.PI / 4), o.fillStyle = "#d76edb", es(0, 0, .5 * e.scale, o, !0));
                t || (o.strokeStyle = O && e.owner && e.owner.sid == O.sid ? "rgba(0, 0, 0, 0)" : O && O.team && e.owner && isAlly(e.owner.sid) ? "rgba(0, 0, 256, .6)" : "rgba(256, 0, 0, .6)", o.globalAlpha = .3, es(0, 0, e.scale, o, 0, 1)), n = i, t || (Qo[e.id + (O && e.owner && e.owner.sid == O.sid ? 0 : O && O.team && e.owner && isAlly(e.owner.sid) ? 25 : 50)] = n)
            }
            return n
        }

        function es(e, t, n, i, o, s) {
            (i = i || Ie).beginPath(), i.arc(e, t, n, 0, 2 * Math.PI), s || i.fill(), o || i.stroke()
        }

        function ts(e, t, n, i) {
            var o, s, a = Math.PI / 2 * 3,
                r = Math.PI / t;
            e.beginPath(), e.moveTo(0, -n);
            for (var c = 0; c < t; c++) o = Math.cos(a) * n, s = Math.sin(a) * n, e.lineTo(o, s), a += r, o = Math.cos(a) * i, s = Math.sin(a) * i, e.lineTo(o, s), a += r;
            e.lineTo(0, -n), e.closePath()
        }

        function ns(e, t, n, i, o, s) {
            o.fillRect(e - n / 2, t - i / 2, n, i), s || o.strokeRect(e - n / 2, t - i / 2, n, i)
        }

        function is(e, t, n, i, o, s, a) {
            s.save(), s.translate(e, t), o = Math.ceil(o / 2);
            for (var r = 0; r < o; r++) ns(0, 0, 2 * n, i, s, a), s.rotate(Math.PI / o);
            s.restore()
        }

        function os(e) {
            for (var t = 0; t < e.length;) at.add(e[t], e[t + 1], e[t + 2], e[t + 3], e[t + 4], e[t + 5], l.list[e[t + 6]], !0, e[t + 7] >= 0 ? {
                sid: e[t + 7]
            } : null), 15 == e[t + 6] && (O.x2 - e[t + 1]) ** 2 + (O.y2 - e[t + 2]) ** 2 < 1e4 && e[t + 7] != O.sid && !isAlly(e[t + 7]) && ss(), t += 8
        }

        function ss() {
            if (As.length)
                if (Zs(ia(As[0]), O) < 200) {
                    if (di)
                        for (let e = 0; e < 16; e++) po(O.items[2]), o.send("c", 1, Xi[e]), o.send("c", 0, Xi[e]), po(ea, 1);
                    else
                        for (let e = 0; e < 2 * Math.PI; e += Math.PI / 15) po(O.items[2]), o.send("c", 1, e), o.send("c", 0, e), po(ea, 1);
                    o.send("2", Ri())
                } else {
                    if (wi)
                        for (let e = 0; e < 16; e++) po(O.items[2]), o.send("c", 1, Xi[e]), o.send("c", 0, Xi[e]), po(ea, 1);
                    else
                        for (let e = 0; e < 2 * Math.PI; e += Math.PI / 15) po(O.items[3]), o.send("c", 1, e), o.send("c", 0, e), po(ea, 1);
                    o.send("2", Ri())
                }
        }

        function as(e, t) {
            let n;
            (n = aa(t)) && (n.xWiggle += r.gatherWiggle * Math.cos(e), n.yWiggle += r.gatherWiggle * Math.sin(e), function i() {
                return new Promise((function(e, t) {
                    Do.push(e), setTimeout((function() {
                        t()
                    }), 50)
                }))
            }().then((function(e) {
                n.cHealth -= e
            })).catch((function(e) {
                ! function t() {
                    Do = []
                }()
            })))
        }
        var rs, cs = [];

        function ls(e) {
            Date.now();
            let t = 0;
            for (let n = 0; n < cs.length; n++) cs[n].p == e && t++;
            return t
        }

        function hs(e) {
            return Math.hypot(e.y2 - O.y2, e.x2 - O.x2)
        }

        function us(t, n) {
            if (O.sid == t) return;
            let i = ia(t),
                s = !1,
                a = 0;
            "turret" == n && hs(i) < 300 && (4 == i.primary || 5 == i.primary) && 1 == ci[i.sid] && i.priVar > 1 && ($n += 2);
            let r = {
                type: n,
                p: t
            };
            cs.push(r), ls(t) > 2 ? ($n += 3, rs++, s = !0) : 2 == ls(t) && 1 == ci[t] && Zs(i, O) < 300 && (s = !0);
            let c = (As.length ? Math.atan2(i.y2 - O.y2, i.x2 - O.x2) : Ri) + Math.PI;
            (Math.PI - Math.abs(Math.abs(c - e) - Math.PI)) / (Math.PI / 180) < 10 && (po(O.items[3]), o.send("c", 1, c + Math.PI), o.send("c", 0, c + Math.PI), po(ea, 1)), rs = void 0, rs = setInterval((() => {
                s && (po(O.items[0]), o.send("c", 1), o.send("c", 0), po(ea, 1)), a++, a > 7 && rs && (clearInterval(rs), rs = void 0)
            }), 50), setTimeout((() => {
                for (let e = 0; e < cs.length; e++)
                    if (cs[e] == r) {
                        cs.splice(e, 1);
                        break
                    } rs && (clearInterval(rs), rs = void 0)
            }), 500)
        }

        function ds(e, t) {
            (j = aa(e)) && (j.dir = t, j.xWiggle += r.gatherWiggle * Math.cos(t + Math.PI), j.yWiggle += r.gatherWiggle * Math.sin(t + Math.PI))
        }

        function fs(e, t, n, i, o, s, a, r) {
            ft && (Z.addProjectile(e, t, n, i, o, s, null, null, a).sid = r, function c(e, t, n, i, o) {
                let s, a = Infinity,
                    r = -1,
                    c = !1;
                for (let i = 0; i < G.length; i++)(s = G[i]) && s.visible && s.secondary && void 0 !== l.weapons[s.secondary].projectile && l.projectiles[l.weapons[s.secondary].projectile].speed == o && a > (s.x2 - e + 70 * Math.cos(n)) ** 2 + (s.y2 - t + 70 * Math.sin(n)) ** 2 && (c = !0, r = s.sid, a = (s.x2 - e + 70 * Math.cos(n)) ** 2 + (s.y2 - t + 70 * Math.sin(n)) ** 2);
                c || function h(e, t) {
                    for (let n = 0; n < K.length; n++) K[n].x == e && K[n].y == t && (K[n].lShot = 0)
                }(e, t);
                if (Math.sqrt(a) > 80)
                    if (1.5 == o) {
                        for (let n = 0; n < G.length; n++)(s = G[n]) && s.visible && a > (s.x2 - e) ** 2 + (s.y2 - t) ** 2 && (r = s.sid, a = (s.x2 - e) ** 2 + (s.y2 - t) ** 2);
                        Math.sqrt(a) < 60 && setTimeout((() => {
                            hi[r] = 0, us(r, "turret")
                        }))
                    } else {
                        for (let i = 0; i < G.length; i++)(s = G[i]) && s.visible && s.secondary && a > (s.x2 - e + 70 * Math.cos(n)) ** 2 + (s.y2 - t + 70 * Math.sin(n)) ** 2 && (r = s.sid, a = (s.x2 - e + 70 * Math.cos(n)) ** 2 + (s.y2 - t + 70 * Math.sin(n)) ** 2);
                        s = ia(r), setTimeout((() => {
                            li[r] = 0, us(r, s.secondary)
                        }))
                    }
                else s = ia(r), setTimeout((() => {
                    li[r] = 0, us(r, 15)
                }))
            }(e, t, n, 0, o))
        }

        function ms(e, t) {
            for (var n = 0; n < Q.length; ++n) Q[n].sid == e && (Q[n].range = t)
        }

        function ps(e) {
            (j = oa(e)) && j.startAnim()
        }

        function gs(e) {
            for (var t = 0; t < X.length; ++t) X[t].forcePos = !X[t].visible, X[t].visible = !1;
            if (e) {
                var n = Date.now();
                for (t = 0; t < e.length;)(j = oa(e[t])) ? (j.index = e[t + 1], j.t1 = void 0 === j.t2 ? n : j.t2, j.t2 = n, j.x1 = j.x, j.y1 = j.y, j.x2 = e[t + 2], j.y2 = e[t + 3], j.d1 = void 0 === j.d2 ? e[t + 4] : j.d2, j.d2 = e[t + 4], j.health = e[t + 5], j.dt = 0, j.visible = !0) : ((j = ne.spawn(e[t + 2], e[t + 3], e[t + 4], e[t + 1])).x2 = j.x, j.y2 = j.y, j.d2 = j.dir, j.health = e[t + 5], ne.aiTypes[e[t + 1]].name || (j.name = "yo im a cow"), j.forcePos = !0, j.sid = e[t], j.visible = !0), t += 7
            }
        }
        var ys = {};

        function ws(e, t) {
            var n = e.index,
                i = ys[n];
            if (!i) {
                var o = new Image;
                o.onload = function() {
                    this.isLoaded = !0, this.onload = null
                }, o.src = ".././img/animals/" + e.src + ".png", i = o, ys[n] = i
            }
            if (i.isLoaded) {
                var s = 1.2 * e.scale * (e.spriteMlt || 1);
                t.drawImage(i, -s, -s, 2 * s, 2 * s)
            }
        }

        function vs(e, t, n) {
            return e + n >= 0 && e - n <= he && t + n >= 0 && t - n <= ue
        }

        function ks(e, t) {
            var n = function(e) {
                for (var t = 0; t < G.length; ++t)
                    if (G[t].id == e) return G[t];
                return null
            }(e[0]);
            n || (n = new u(e[0], e[1], r, s, Z, at, G, X, l, ot, st), G.push(n)), n.spawn(t ? F : null), n.visible = !1, n.x2 = void 0, n.y2 = void 0, n.setData(e), ci[n.sid] = 1, n.pr = 1, li[n.sid] = 1, n.sr = 1, hi[n.sid] = 1, n.tr = 1, n.clownCounter = 0, t && (D = (O = n).x, U = O.y, Zt(), Eo(), Lo(), So(0), _e.style.display = "block")
        }

        function bs(e) {
            for (var t = 0; t < G.length; t++)
                if (G[t].id == e) {
                    G.splice(t, 1);
                    break
                }
        }

        function xs(e, t) {
            O && (O.itemCounts[e] = t)
        }

        function Ts(e, t, n) {
            O && (O[e] = t, n && Eo())
        }

        function Is(e, t) {
            (j = ia(e)) && (function n(e, t) {
                var n = pingTime <= 130 ? 130 - pingTime : 0;
                let i = t - e.health;
                O == e || isAlly(e.sid) || !(hs(e) <= l.weapons[O.weapons[0]].range) || $n || q || ai || H || (1 == ci[O.sid] && t - 1.5 * l.weapons[O.weapons[0]].dmg <= 0 || t - (l.weapons[O.weapons[0]].dmg + 25) <= 0 && 1 == hi[O.sid]) && (bi++, t - 1.5 * l.weapons[O.weapons[0]].dmg <= 0 ? (Bs = Math.atan2(e.y2 - O.y2, e.x2 - O.x2), H++, q++, Kt(7, 21), po(ea = O.weapons[0], 1), o.send("7", 1), setTimeout((() => {
                    q--, H--, Kt(6, 21), o.send("7", 1)
                }), 115)) : (Bs = Math.atan2(e.y2 - O.y2, e.x2 - O.x2), H++, q++, Kt(53, 21), po(ea = O.weapons[0], 1), o.send("7", 1), setTimeout((() => {
                    q--, H--, Kt(6, 21), o.send("7", 1)
                }), 115)));
                if (i > 0) {
                    if (17 == e.skinIndex && (1 == i && (e.lastBull = Rs), O == e && (Es = 0)), 13 == e.skinIndex) return 13 == e.tailIndex ? (6 == i && (e.lastBull = Rs), void(O == e && (Es = 0))) : (3 == i && (e.lastBull = Rs), void(O == e && (Es = 0)));
                    !isNaN(e.clownCounter) && e.lastDamage && (Rs - e.lastDamage < 2 ? e.clownCounter++ : e.clownCounter = Math.max(0, e.clownCounter - 2), e.lastDamage = 0)
                } else {
                    if (e.lastDamage = Rs, 7 == e.skinIndex && 13 == e.tailIndex && -2 == i) return e.lastBull = Rs, void(O == e && (setTimeout((() => {
                        po(O.items[0]), o.send("c", 1), o.send("c", 0), po(ea, 1)
                    }), n), Es = 0));
                    if (-5 == i) return e.lastBull = Rs, void(O == e && (setTimeout((() => {
                        po(O.items[0]), o.send("c", 1), o.send("c", 0), po(ea, 1)
                    }), n), Es = 0));
                    if (O == e) {
                        if (-40 != i && -45 != i && -44 != i || 6 != O.skinIndex && _s.length && function s(e) {
                                return new Promise((function(t, n) {
                                    let i = ++zo,
                                        o = {
                                            dmg: e,
                                            resolve: t,
                                            id: zo
                                        };
                                    Pn.push(o), setTimeout((function() {
                                        n();
                                        for (let e = 0; e < Pn.length; e++) Pn[e].id == i && Pn.splice(e, 1)
                                    }), 50)
                                }))
                            }(Math.abs(i)).then((function(e) {
                                $n++
                            })).catch((function(e) {})), i < -50 && 11 == O.skinIndex && 1 == ci[O.sid] && (bi++, H++, Qn++, q++, 1 == hi[O.sid] ? Kt(53, 21) : Kt(7, 21), po(ea = O.weapons[0], 1), o.send("7", 1), setTimeout((() => {
                                q--, Qn--, H--, Kt(11, 21), o.send("7", 1)
                            }), 115)), -27 == i)
                            for (let e = 0; e < 2; e++) po(O.items[0]), o.send("c", 1), o.send("c", 0), po(ea, 1);
                        if (-38 == i)
                            for (let e = 0; e < 2; e++) po(O.items[0]), o.send("c", 1), o.send("c", 0), po(ea, 1);
                        if (i <= -45 && Ds) {
                            for (let e = 0; e < 5; e++) po(O.items[0]), o.send("c", 1), o.send("c", 0), po(ea, 1);
                            ki = 1, Jt(22, 0)
                        } else if (-50 == i) {
                            if (-25 == i || -19 == i ? (An++, setTimeout((() => {
                                    An--
                                }), 223)) : (Dn++, setTimeout((() => {
                                    Dn--
                                }), 223)), function a() {
                                    return !(!Dn || !An)
                                }())
                                for (let e = 0; e < 5; e++) po(O.items[0]), o.send("c", 1), o.send("c", 0), po(ea, 1);
                            else setTimeout((function() {
                                for (let e = 0; e < 5; e++) po(O.items[0]), o.send("c", 1), o.send("c", 0), po(ea, 1)
                            }), n)
                        } else setTimeout((function() {
                            for (let e = 0; e < 5; e++) po(O.items[0]), o.send("c", 1), o.send("c", 0), po(ea, 1)
                        }), n)
                    }
                }
            }(j, t), j.health = t)
        }
        var Es = 0;

        function Ms(e, t) {
            null != e && null != t || (e = se, t = ae), Te.dispatchEvent(new MouseEvent("mousemove", {
                clientX: e,
                clientY: t
            }))
        }

        function Cs(e) {
            let t = Math.hypot(e.y - O.y2, e.x - O.x2) / xi,
                n = 360,
                i = 22,
                o = 700,
                s = ["spikes", "wood wall", "stone wall", "castle wall", "greater spikes", "poison spikes", "spinning spikes", "mine", "sapling", "pit trap", "boost pad", "platform", "healing pad", "spawn pad", "teleporter", "blocker"];
            for (let a = 0; a < K.length; a++) {
                let r = Math.hypot(K[a].y - O.y2, K[a].x - O.x2) / xi;
                if (K[a].sid != e.sid && r < o && r < t) {
                    let t = Math.atan2(K[a].y - O.y2, K[a].x - O.x2) / (Math.PI / 180),
                        o = Math.atan2(e.y - O.y2, e.x - O.x2) / (Math.PI / 180);
                    if ((Math.abs(t - o) < r / i || Math.abs(t - o) > n - r / i) && !s.includes(K[a].name)) return !0
                }
            }
            return !1
        }
        setInterval((() => {
            pn = !1;
            for (let e = 0; e < K.length; e++) "pit trap" == K[e].name && K[e].owner.sid != O.sid && !isAlly(K[e].owner.sid) && Math.hypot(K[e].y - O.y2, K[e].x - O.x2) < 70 && 1 == K[e].active && !q && (ai = !0, rn = Math.atan2(K[e].y - O.y2, K[e].x - O.x2), Zn = K[e].y, ei = K[e].x, on = K[e].cHealth);
            if ($n || ("autoBreak", _n && ai && (o.send("c", 1, rn), o.send("c", 0, rn)), ai && !H && _n && (o.send(2, rn), 10 == O.weapons[1] ? on < 20 && 1 == ci[O.sid] && 5 != O.weapons[0] ? (ea = O.weapons[0], pn = !0, po(ea, 1), (O.clownCounter > 0 && (Rs - O.lastBull) % 9 == 0 || O.lastBull && Es > 1) && ci[O.sid] < 1 ? Kt(7, 13) : 1 == hi[O.sid] && 45 == As[9] && Zs(ia(As[0]), O) < 700 ? Kt(53, 21) : 1 == ci[O.sid] ? bn > 3 ? Jt(22, 0) : Kt(40, 21) : bn ? Jt(22, 0) : Kt(Ki || 6, 21)) : (po(ea = 10, 1), (O.clownCounter > 0 && (Rs - O.lastBull) % 9 == 0 || O.lastBull && Es > 1) && li[O.sid] < 1 ? Kt(7, 13) : 1 == hi[O.sid] && 45 == As[9] && Zs(ia(As[0]), O) < 700 ? Kt(53, 21) : 1 == li[O.sid] ? bn > 3 ? Jt(22, 0) : Kt(40, 21) : bn ? Jt(22, 0) : Kt(Ki || 6, 21)) : (po(ea = O.weapons[0], 1), (O.clownCounter > 0 && (Rs - O.lastBull) % 9 == 0 || O.lastBull && Es > 1) && ci[O.sid] < 1 ? Kt(7, 13) : 1 == hi[O.sid] && 45 == As[9] && Zs(ia(As[0]), O) < 700 ? Kt(53, 21) : 1 == ci[O.sid] ? bn > 3 ? Jt(22, 0) : Kt(40, 21) : bn ? Jt(22, 0) : Kt(Ki || 6, 21)))), (ai || H) && Ms(), jn > 35 && !Bn && (Rn = !1), Rn || Bn) {
                jn++;
                for (let e = 0; e < 1e3; e++) po(O.items[3]), o.send("c", 1), o.send("c", 0), po(ea, 1)
            } else jn = 0
        }), 0), setInterval((() => {
            if (!ai && Fn && !H && _s.length) {
                si = 0;
                let e = 0,
                    t = 0,
                    n = 0;
                0;
                for (let i = 0; i < K.length; i++) "pit trap" == K[i].name ? (K[i].owner.sid == O.sid || isAlly(K[i].owner.sid)) && Zs(ia(As[0]), O) < 180 && Math.hypot(K[i].y - As[2], K[i].x - As[1]) <= 70 && (oi = 1, t = K[i].y, n = K[i].x, Math.sqrt(Math.pow(K[i].y - As[2], 2) + Math.pow(K[i].x - As[1], 2)) > 25 ? (K[i].y - As[2] < 0 ? "asf" : "awdsad", K[i].x - As[1] < 0 ? "aerb" : "goier") : ("all", "all")) : "windmill" == K[i].name ? Math.hypot(K[i].y - O.y2, K[i].x - O.x2) < 250 && si++ : "spikes" == K[i].name ? Math.hypot(K[i].y - As[2], K[i].x - As[1]) < 100 && K[i].owner.sid == As[0] && e++ : "spikes" == K[i].name && (isAlly(K[i].owner.sid) || K[i].owner.sid == O.sid) && Math.hypot(K[i].y - As[2], K[i].x - As[1]) <= 230 && 0;
                (function e(t, n) {
                    let i = Math.atan2(n - As[2], t - As[1]),
                        o = Math.atan2(n - O.y2, t - O.x2),
                        s = o += Math.PI / 2.5,
                        a = o -= Math.PI / 2.5;
                    return s > 2 * Math.PI && (s -= 2 * Math.PI), a > 2 * Math.PI && (a -= 2 * Math.PI), s < 0 && (s += 2 * Math.PI + i), a < 0 && (a += 2 * Math.PI + o), s > i && a < i || a > 290 && i < 70 && s < i + Math.PI / 2.4 || i > 290 && a > i - Math.PI / 2.6 && s < Math.PI / 2.45
                })(n, t);
                if (Zs(ia(As[0]), O) < 600 && !oi && si < 4 && e < 2)
                    if (fi)
                        for (let e = 0; e < 16; e++) po(O.items[4]), o.send("c", 1, Xi[e]), o.send("c", 0, Xi[e]), po(ea, 1);
                    else
                        for (let e = 0; e < 2 * Math.PI; e += Math.PI / 10) po(O.items[4]), o.send("c", 1, Bs + e), o.send("c", 0, Bs + e), po(ea, 1), po(O.items[4]), o.send("c", 1, Bs - e), o.send("c", 0, Bs - e), po(ea, 1);
                if (Zs(ia(As[0]), O) < 200 && oi && si < 4)
                    if (di)
                        for (let e = 0; e < 16; e++) po(O.items[2]), o.send("c", 1, Xi[e]), o.send("c", 0, Xi[e]), po(ea, 1);
                    else
                        for (let e = 0; e < 2 * Math.PI; e += Math.PI / 3) po(O.items[2]), o.send("c", 1, Bs + e), o.send("c", 0, Bs + e), po(ea, 1), po(O.items[2]), o.send("c", 1, Bs - e), o.send("c", 0, Bs - e), po(ea, 1)
            }
        }), 200), setInterval((() => {
            Hn && o.send("2", Math.floor(360 * Math.random()) / (Math.PI / 180))
        }), 0);
        var Ps = document.createElement("style");
        Ps.type = "text/css", Ps.appendChild(document.createTextNode("\n.test {\n    position: absolute;\n    z-index: 1;\n    overflow: auto;\n    position: relative;\n    height: 510px;\n    padding: 10px;\n    font-size: 5px;\n    z-index: 1;\n    right: 850px;\n    top: 80px;\n    overflow: auto;\n    height: 100%;\n    width: 100%;\n}\n\n.test {\n    position: absolute;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    overflow: auto;\n    height: 100%;\n    width: 100%;\n}\n.indent {\n    margin-left: 10px;\n}\n\n::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background-color: rgba(0,0,0,.5);\n  -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);\n}\n\n")), document.head.appendChild(Ps), document.addEventListener("keydown", (function(e) {
            27 == e.keyCode && $("#test").toggle()
        })), document.addEventListener("keydown", (function(e) {
            27 == e.keyCode && $("#menu").toggle()
        }));
        let Ss = document.createElement("div");
        Ss.id = "menu", document.body.prepend(Ss), document.getElementById("menu").style.position = "absolute", document.getElementById("menu").style.textAlign = "left", document.getElementById("menu").style.display = "none", document.getElementById("menu").style.width = "450px", document.getElementById("menu").style.height = "60px", document.getElementById("menu").style.left = "1%", document.getElementById("menu").style.top = "1%", document.getElementById("menu").style.backgroundColor = "rgb(0,0,0,.3)", document.getElementById("menu").style.color = "#ffffff", document.getElementById("menu").innerHTML = '<h3 style="font-size: 20px;" class = "indent">-- Quasar Beta --</h3>';
        let Ls = document.createElement("div");
        var As, Bs, _s;
        Ls.id = "test", document.body.prepend(Ls), document.getElementById("test").style.position = "absolute", document.getElementById("test").style.textAlign = "left", document.getElementById("test").style.display = "none", document.getElementById("test").style.width = "450px", document.getElementById("test").style.height = "275px", document.getElementById("test").style.top = "9.1%", document.getElementById("test").style.left = "1%", document.getElementById("test").style.backgroundColor = "rgb(0,0,0,.3)", document.getElementById("test").style.color = "white", document.getElementById("test").innerHTML = '\n<body>\n<br>\n<h2 style="font-size: 17px;">Ã¢ â‚¬Miscellaneous Toggles</h2>\n<label class = "indent">Ping Display<input type = "checkbox" id = "pingDisT"><br>\n<label class = "indent">360 hit<input type = "checkbox" id = "hit"><br>\n<label class = "indent">Spin<input type = "checkbox" id = "spin"><br>\n<label class = "indent">Noob Chat<input type = "checkbox" id = "noob"><br>\n<label class = "indent">Building HP<input type = "checkbox" id = "bhp"><br>\n<h2 style="font-size: 15px;">_____________________________________________</h2>\n<h2 style="font-size: 17px;">Ã¢ â‚¬Tracer Toggles</h2>\n<label class = "indent">Tracers<input type = "checkbox" id = "trc"><br>\n<label class = "indent">Target Prediction Tracers<input type = "checkbox" id = "tptrc"><br>\n<label class = "indent">Activity Tracers<input type = "checkbox" id = "bTrack"><br>\n<h2 style="font-size: 15px;">_____________________________________________</h2>\n<h2 style="font-size: 17px;">Ã¢ â‚¬Automation Toggles</h2>\n<label class = "indent">AutoPlacer<input type = "checkbox" id = "autoplacer"><br>\n<label class = "indent">AutoReplacer<input type = "checkbox" id = "autoreplacer"><br>\n<label class = "indent">AutoBreaker<input type = "checkbox" id = "autobreaker"><br>\n<label class = "indent">AutoBuy<input type = "checkbox" id = "buyer"><br>\n<label class = "indent">AutoGrinder<input type = "checkbox" id = "atgrind"><br>\n<h2 style="font-size: 15px;">_____________________________________________</h2>\n<h2 style="font-size: 17px;">Ã¢ â‚¬Placing Settings</h2>\n<label class = "indent">Invis Spike<input type = "checkbox" id = "invis-spike"><br>\n<label class = "indent">Invis Trap<input type = "checkbox" id = "invis-trap"><br>\n<label class = "indent">Invis Spawnpad<input type = "checkbox" id = "invis-spawn"><br>\n<label class = "indent">Invis Teleporter<input type = "checkbox" id = "invis-tele"><br>\n<label class = "indent">Invis WindMill<input type = "checkbox" id = "invis-mill"><br>\n<label class = "indent">Quad Trap<input type = "checkbox" id = "quad-trap"><br>\n<label class = "indent">Quad Spawnpad<input type = "checkbox" id = "quad-spawn"><br>\n<label class = "indent">Quad Tele<input type = "checkbox" id = "quad-tele"><br>\n<h2 style="font-size: 15px;">_____________________________________________</h2>\n<label class = "indent">Freeze<input type = "checkbox" id = "freeze"><br>\n<h2 style="font-size: 17px;">Ã¢ â‚¬Song Keybinds</h2>\n<label class = "indent">Take Over = ";"\n<label class = "indent">Subway Sexists = "-"\n<label class = "indent">Warriors = "="\n<label class = "indent">Legends Never Die = "\'"\n<label class = "indent">Shooting Stars = "]"\n<br>\n', document.getElementById("test").style.overflowY = "scroll", document.querySelector("#atgrind").addEventListener("change", (function() {
            if (this.checked)
                for (let e = 0; e < 2 * Math.PI; e += Math.PI / 8) o.send("33", null), po(O.items[5] ? O.items[5] : O.items[3]), o.send("c", 1, e), o.send("c", 0, e), po(ea, 1), setTimeout((() => {
                    In || (In = !0), Ci("autogrind commencing")
                }), 115);
            else In && (In = !1)
        })), document.querySelector("#bTrack").addEventListener("change", (function() {
            xn = !!this.checked
        })), document.querySelector("#pingDisT").addEventListener("change", (function() {
            mn = !!this.checked
        })), document.querySelector("#tptrc").addEventListener("change", (function() {
            kn = !!this.checked
        })), document.querySelector("#trc").addEventListener("change", (function() {
            vn = !!this.checked
        })), document.querySelector("#noob").addEventListener("change", (function() {
            En = !!this.checked
        })), document.querySelector("#bhp").addEventListener("change", (function() {
            Mn = !!this.checked
        })), document.querySelector("#freeze").addEventListener("change", (function() {
            Bn = !!this.checked
        })), document.querySelector("#quad-tele").addEventListener("change", (function() {
            vi = !!this.checked
        })), document.querySelector("#invis-mill").addEventListener("change", (function() {
            wi = !!this.checked
        })), document.querySelector("#hit").addEventListener("change", (function() {
            ni = !!this.checked
        })), document.querySelector("#spin").addEventListener("change", (function() {
            Hn = !!this.checked
        })), document.querySelector("#autoplacer").addEventListener("change", (function() {
            Fn = !!this.checked
        })), document.querySelector("#autoreplacer").addEventListener("change", (function() {
            ti = !!this.checked
        })), document.querySelector("#autobreaker").addEventListener("change", (function() {
            _n = !!this.checked
        })), document.querySelector("#buyer").addEventListener("change", (function() {
            On = !!this.checked
        })), document.querySelector("#invis-spike").addEventListener("change", (function() {
            di = !!this.checked
        })), document.querySelector("#invis-trap").addEventListener("change", (function() {
            fi = !!this.checked
        })), document.querySelector("#invis-spawn").addEventListener("change", (function() {
            mi = !!this.checked
        })), document.querySelector("#invis-tele").addEventListener("change", (function() {
            pi = !!this.checked
        })), document.querySelector("#quad-trap").addEventListener("change", (function() {
            gi = !!this.checked
        })), document.querySelector("#quad-spawn").addEventListener("change", (function() {
            yi = !!this.checked
        }));
        var Os, Rs = 0,
            js = !1,
            Ds = !1,
            Us = [],
            zs = [],
            Ws = [];

        function Ys(e) {
            Rs++, _s = [], As = [], [], [], Us = [], zs = [];
            for (var t = Date.now(), n = 0; n < G.length; ++n) G[n].forcePos = !G[n].visible, G[n].visible = !1;
            for (n = 0; n < e.length;)(j = ia(e[n])) && (j.t1 = void 0 === j.t2 ? t : j.t2, j.t2 = t, j.x1 = j.x, j.y1 = j.y, j.x2 = e[n + 1], j.y2 = e[n + 2], Us[j.sid] = j.x2, zs[j.sid] = j.y2, dn[j.sid] && fn[j.sid] && (Rs - 1 == j.lData ? (j.preX = j.x2 + j.x2 - dn[j.sid], j.preY = j.y2 + j.y2 - fn[j.sid]) : (j.preX = j.x2, j.preY = j.y2)), j.lData = Rs, j.d1 = void 0 === j.d2 ? e[n + 3] : j.d2, j.d2 = e[n + 3], j.dt >= 200 && (Es += 3, po(O.items[0]), o.send("c", 1), o.send("c", 0), po(ea, 1)), j.dt = 0, j.buildIndex = e[n + 4], j.weaponIndex = e[n + 5], j.weaponVariant = e[n + 6], j.team = e[n + 7], j.isLeader = e[n + 8], j.skinIndex = e[n + 9], j.tailIndex = e[n + 10], j.iconIndex = e[n + 11], j.zIndex = e[n + 12], j.visible = !0, j == O || j.team && j.team == O.team ? ta(j) : _s.push(e.slice(n, n + 13))), n += 13;
            _s.length && (_s = _s.sort(((e, t) => Zs(ia(e[0]), O) - Zs(ia(t[0]), O))), As = _s[0]), Bs = As.length ? Math.atan2(As[2] - O.y2, As[1] - O.x2) : Ri, Ds = !0, _ || (Qn = 0, clearInterval(ln)), !1, dn = Us, fn = zs, oi = !1, bn = 0;
            for (let e = 0; e < K.length; e++) K[e].shootRate && na(K[e]), K[e].lShot >= 1 && Math.hypot(K[e].y - O.y2, K[e].x - O.x2) / xi < K[e].shootRange && K[e].owner.sid != O.sid && !isAlly(K[e].owner.sid) && (Cs(K[e]) || bn++, K[e].lShot = 0);
            let i = O.weapons[1],
                s = O.weapons[0];
            _s.length && ii && Zs(ia(As[0]), O) / xi <= (gn ? 4 == O.weapons[0] ? l.weapons[s].range : 118 : l.weapons[s].range) && 1 == li[O.sid] && 1 == ci[O.sid] && 11 != i && 8 != s && !H ? (Cn = ["primary", "secondary", "stop"], "autoInsta") : 3 != Cn.length || H || (Cn = []), js = !1;
            for (let e = 0; e < _s.length; e++) {
                let t = ia(_s[e][0]);
                ta(t), Zs(t, O) / 1.56 < l.weapons[O.weapons[0]].range && Zs(t, O) / xi < l.weapons[t.primary].range && 1 == ci[O.sid] && 1 == (ci[t.sid] || 1) && l.weapons[t.primary].dmg >= 40 && l.weapons[O.weapons[0]].dmg >= 40 && (js = !0)
            }
            ia(As[0]);
            As.length && Zs(ia(As[0]), O) < 300 && (Math.abs(e.preX - e.x2) > 120 && Math.abs(e.preX - e.x2) < 800 || Math.abs(e.preY - e.y2) > 120 && Math.abs(e.preY - e.y2) < 800) && ("antiBoost", j = Math.atan2(e.y2 - O.y2, e.x2 - O.x2), po(O.items[2]), o.send("c", 1, j + Math.PI / 3), o.send("c", 0, j + Math.PI / 3), po(ea, 1), po(O.items[2]), o.send("c", 1, j - Math.PI / 3), o.send("c", 0, j - Math.PI / 3), po(ea, 1)), wn.all = 0;
            for (let e = 0; e < K.length; e++)
                if (("spikes" == K[e].name || "Greater spikes" == K[e].name || "Poison spikes" == K[e].name || "Spinning spikes" == K[e].name) && K[e].owner.sid != As[0] && Math.hypot(K[e].y - As[2], K[e].x - As[1]) < 120)
                    if (wn.all) {
                        Math.hypot(K[e].y - As[2], K[e].x - As[1]) < Math.hypot(wn.y - As[2], wn.x - As[1]) && (wn.x = K[e].x, wn.y = K[e].y, wn.ang = Math.atan2(K[e].y - As[2], K[e].x - As[1]))
                    } else wn.all = 1, wn.x = K[e].x, wn.y = K[e].y, wn.ang = Math.atan2(K[e].y - As[2], K[e].x - As[1]);
            if (Sn && _s.length && wn.all && Zs(ia(As[0]), O) > 40 && oi) {
                let e = Bs - wn.ang + Bs;
                o.send("33", e), "autoPush"
            } else if (Sn && Zs(ia(As[0]), O) <= 40 && wn.all && _s.length && oi) {
                let e = Bs - wn.ang + Bs;
                o.send("33", e + Math.PI), Sn = "stopNextTick"
            } else "stopNextTick" == Sn && (Sn = !1, "stopPush", o.send("33", null));
            if (_ && (0 == ji ? po(ea = s, 1) : 2 == ji && (10 == O.weapons[1] ? po(ea = i, 1) : po(ea = s, 1))), "chatbox" !== document.activeElement.id.toLowerCase() && En && _s.length) {
                Ci("'" + ia(As[0]).name + "' Is Trash")
            }
            if (!q && "none" == tt.style.display && !bi)
                if (li[O.sid] < 1 && !_ && ea != O.weapons[1] && !ai && !In ? po(ea = i, 1) : 1 != li[O.sid] || _ || ea != O.weapons[1] || ai || In || po(ea = s, 1), In ? (clearInterval(nn), nn = void 0, 1 == ci[O.sid] && (Kt(40, 21), Qn = 1, nn = setInterval((() => {
                        o.send("c", 1), o.send("c", 0)
                    }), 0))) : nn && (Qn = 0, clearInterval(nn), nn = void 0), O.lastBull || Jt(7, 0), ki) ki = 0, Jt(22, 0);
                else if (O.clownCounter > 0 && (Rs - O.lastBull) % 9 == 0 || O.lastBull && Es > 1) bn || (Es++, Kt(7, 13));
            else if (As.length && Zs(ia(As[0]), O) < 300 && 0 == ai)
                if (js) Kt(11, 21);
                else if (_ && 0 == ji && ea == s)
                if (1 == hi[O.sid] && (7 == As[9] && (Rs - ia(As[0]).lastBull) % 9 == 0 || 45 == As[9])) Kt(53, 21), "autoTurret";
                else if (Ki) Kt(Ki, 21);
            else {
                let e = 1.5 * O.y2 - O.y / 2;
                Kt(e < 2400 ? 15 : e > 6850 && e < 7550 ? 31 : 12, 11)
            } else if (Ki) Kt(Ki, 11);
            else {
                let e = 1.5 * O.y2 - O.y / 2;
                Kt(e < 2400 ? 15 : e > 6850 && e < 7550 ? 31 : 12, 11)
            } else if (!ai)
                if (1 == hi[O.sid] && 45 == As[9] && Zs(ia(As[0]), O) < 700) Kt(53, 11), "autoTurret";
                else if (Ki) Kt(Ki, 11);
            else {
                let e = 1.5 * O.y2 - O.y / 2;
                Kt(e < 2400 ? 15 : e > 6850 && e < 7550 ? 31 : 12, 11)
            }
            if (Hn && (Ws = []), Ws.length || (Cn.length && (3 == Cn.length ? q || 1 != ci[O.sid] || 1 != li[O.sid] || 11 == As[5] && As[3] + Math.PI / 2 > Bs && As[3] - Math.PI / 2 < Bs || (o.send("6", 4), o.send("6", 15), "insta", Cn.shift(), q++, H++, o.send(2, Ri()), po(ea = O.weapons[0], 1), Jt(0, 1), o.send("7", 1), 6 == As[9] || 22 == As[9] || hi[O.sid] < 1 ? Kt(7, 21) : Kt(6, 0)) : 2 == Cn.length ? ("insta", Cn.shift(), Kt(53, 21), po(ea = O.weapons[1] || O.weapons[0], 1), setTimeout((() => {
                    o.send("7", 1), q--, H--, Kt(6, 21)
                }), 115)) : ("insta", Cn.shift(), Kt(6, 21))), $n && ($n -= 1, Jt(6, 0), 0 == $n && (clearInterval(rs), rs = void 0)), bi && bi--), ai = !1, Ws.length && _s.length)
                if (3 == Ws.length) {
                    let e = i;
                    if (5 != s || 10 != i && 15 != i) return void(Ws = []);
                    e = 15 == e ? 0 : 1, $s(s, e, 3), "otSetup"
                } else if (2 == Ws.length) {
                $s(s, 15 == i ? 0 : 1, 2), "otSetup"
            } else {
                $s(s, 15 == i ? 0 : 1, 1), "otSetup"
            }
            bn && Jt(22, 0)
        }
        setInterval((() => {
            pingTime > 100 && O && !(O.clownCounter > 0 && (Rs - O.lastBull) % 9 == 0 || O.lastBull && Es > 1) && (po(O.items[0]), o.send("c", 1), o.send("c", 0), po(ea, 1)), location.native_resolution = !0
        }), 50);
        var qs, Hs, Fs, Vs = 0,
            Ns = "tap";

        function Xs() {
            new Promise((function(e, t) {
                qs = e, Hs = t, setTimeout((() => {
                    t()
                }), 1e4)
            })).then((function(e) {
                let t = 10 == O.weapons[1] ? 1 : 0;
                $s(O.weapons[0], t, 3, 1), Ci("ticking..")
            })).catch((function(e) {
                Ws = [], Ci("Auto Cancel")
            }))
        }
        setInterval((() => {
            _s && _s.length && (Rs - ia(As[0]).lastBull) % 9 == 8 && Fs && (Fs(), Fs = void 0)
        }), 50);
        var Gs, Js = !1;

        function Ks(e) {
            e ? 3 == Ws.length && "tap" == Ns ? (Ws = [], Js = !0, setTimeout((() => {
                Js = !1
            }), 500), Ci("Cancelled")) : Ws.length || (Os++, Os = setInterval((() => {
                ++Vs >= 5 && (Ns = "hold", Ci("Hold Mode"), Ws = [1, 2, 3])
            }), 100)) : (!Ws.length && Vs < 5 && !Js ? (Ns = "tap", Ci("Tap Mode"), Ws = [1, 2, 3]) : Vs >= 5 && 3 == Ws.length && (Ci("Cancelled/Ticking"), Ws = [], qs && (Ws = [1, 2, 3], 4 == O.weapons[0] ? (! function t() {
                new Promise((function(e, t) {
                    Fs = e, setTimeout((() => {
                        t()
                    }), 5e3)
                })).then((function(e) {
                    1 != ci[O.sid] || 1 != hi[O.sid] || 6 == As[9] || 1 != li[O.sid] || ai || H || q || Qn || Hn || _ ? Ci("Tried OT But Fail") : (Ws = [1, 2, 3], $s(4, 0, 3, 1), Ci("Ticking..."))
                })).catch((function(e) {
                    Ci("smth went wrong")
                }))
            }(), Hs(), Hs = void 0) : (qs(), qs = void 0))), clearInterval(Os), Os = void 0, Vs = 0)
        }

        function $s(e, t, n, i) {
            if (ai) return;
            let s = Math.atan2(As[2] - O.y2, As[1] - O.x2),
                a = Math.hypot(As[2] - O.y2, As[1] - O.x2),
                r = e => {
                    Jt(e, 0)
                },
                c = e => {
                    Jt(e, 1)
                },
                l = () => {
                    "otStart";
                    let e = [0, As[1], As[2]];
                    Ki = 0, o.send("33", s), po(ea = O.weapons[1], 1), Kt(53, 11), Hn = !1, Gs = setInterval((() => {
                        ea > 8 && 10 != ea ? (se = O.x2 - e[1] + W / 2, ae = O.y2 - e[2] + Y / 2) : (se = e[1] - O.x2 + W / 2, ae = e[2] - O.y2 + Y / 2), Ms(), Ws.length || clearInterval(Gs)
                    }), 0), o.send("2", s + Math.PI), Ws.shift(), t || o.send("7", 1)
                };
            i ? l() : 3 == n ? t ? a > 235 && a < 240 ? (o.send("33", null), Qs(), "awaiting", 1 != ci[O.sid] || 1 != hi[O.sid] || 6 == As[9] || 1 != li[O.sid] || ai || H || q || Qn || Hn || _ || ("awaiting", "tap" == Ns ? l() : Xs())) : (a <= 235 ? o.send("33", s + Math.PI) : a >= 240 && o.send("33", s), a > 185 && a < 290 && c(0), a > 210 && a < 265 && r(a > 225 && a < 250 ? 40 : 22)) : 4 == e ? a > 235 && a < 250 ? (o.send("33", null), Qs(), "awaiting", 1 != ci[O.sid] || 1 != hi[O.sid] || 6 == As[9] || 1 != li[O.sid] || ai || H || q || Qn || Hn || _ || (Rs - ia(As[0]).lastBull) % 9 != 8 || "tap" == Ns && Xs(), "hold" == Ns && Xs()) : (a <= 240 ? o.send("33", s + Math.PI) : a >= 250 && o.send("33", s), a > 190 && a < 300 && c(0), a > 215 && a < 275 && r(a > 230 && a < 260 ? 40 : 22)) : a > 250 && a < 270 ? (o.send("33", null), Qs(), "awaiting", 1 != ci[O.sid] || 1 != hi[O.sid] || 6 == As[9] || 1 != li[O.sid] || ai || H || q || Qn || Hn || _ || ("tap" == Ns ? l() : Xs())) : (a <= 250 ? o.send("33", s + Math.PI) : a >= 270 && o.send("33", s), a > 200 && a < 320 && c(0), a > 225 && a < 295 && r(a > 240 && a < 280 ? 40 : 22)) : 2 == n ? ("oneTick", Ws.shift(), t && o.send("7", 1), ea = O.weapons[0], $t(19, 1), Jt(0, 1), Kt(7, 19), po(ea, 1)) : 1 == n && ("oneTick", Ws.shift(), o.send("7", 1), o.send("33", null), setTimeout((() => {
                o.send("33", null)
            }), 120))
        }

        function Qs() {
            let e = 1.5 * O.y2 - O.y / 2;
            Kt(e < 2400 ? 15 : e > 6850 && e < 7550 ? 31 : 12, 11)
        }

        function Zs(e, t) {
            return Math.sqrt(Math.pow((t.preY || t.y2) - (e.preY || e.y2), 2) + Math.pow((t.preX || t.x2) - (e.preX || e.x2), 2))
        }
        var ea = 0;

        function ta(e) {
            45 == e.skinIndex ? e.clownCounter = "-" : isNaN(e.clownCounter) && (e.clownCounter = 0), e.weaponIndex < 9 ? e.weaponIndex == e.primary ? -1 == e.buildIndex ? (e.pr = ci[e.sid], e.sr = li[e.sid], ci[e.sid] = Math.min(1, ci[e.sid] + 1e3 / 9 / l.weapons[e.primary].speed)) : e.pr = ci[e.sid] : (e.primary = e.weaponIndex, e.weapons[0] = e.weaponIndex, e.priVar = e.weaponVariant) : e.weaponIndex > 8 ? e.weaponIndex == e.secondary ? -1 == e.buildIndex ? (e.sr = li[e.sid], e.pr = ci[e.sid], li[e.sid] = Math.min(1, li[e.sid] + 1e3 / 9 / l.weapons[e.secondary].speed)) : e.sr = li[e.sid] : (e.secondary = e.weaponIndex, e.weapons[1] = e.weaponIndex, e.secVar = e.weaponVariant) : (e.sr = li[e.sid], e.pr = ci[e.sid]), e.tr = hi[e.sid], hi[e.sid] = Math.min(1, hi[e.sid] + 1e3 / 9 / 2500)
        }

        function na(e) {
            e.lShot = Math.min(1, e.lShot + 1e3 / 9 / e.shootRate)
        }

        function ia(e) {
            for (var t = 0; t < G.length; ++t)
                if (G[t].sid == e) return G[t];
            return null
        }

        function oa(e) {
            for (var t = 0; t < X.length; ++t)
                if (X[t].sid == e) return X[t];
            return null
        }

        function sa(e) {
            if (Date.now() - e.time > 3e4) {
                for (let t = 0; t < Tn.length; t++) Tn[t] == e && Tn.splice(t, 1);
                return !1
            }
            return !(Math.hypot(e.y - O.y2, e.x - O.x2) < 600) || (Tn.splice(i, 1), !1)
        }

        function aa(e) {
            for (var t = 0; t < K.length; ++t)
                if (K[t].sid == e) return K[t];
            return null
        }
        var ra = -1,
            ca = 0;

        function la() {
            var e = Date.now() - ra;
            1 == ++ca && (ca = 0), pingTime = e, 0 == ca && (Pe.innerText = "Ping: " + e + " ms")
        }

        function ha() {
            ra = Date.now(), o.send("pp")
        }

        function ua(e) {
            if (!(e < 0)) {
                var t = Math.floor(e / 60),
                    n = e % 60;
                n = ("0" + n).slice(-2), Se.innerText = "Server restarting in " + t + ":" + n, Se.hidden = !1
            }
        }

        function da(e) {
            open(e, "_blank")
        }
        requestAnimFrame = requestAnimationFrame || webkitRequestAnimationFrame || mozRequestAnimationFrame || function(e) {
                setTimeout(e, 1e3 / 60)
            },
            function() {
                var e = r.mapScale / 2;
                at.add(0, e, e + 200, 0, r.treeScales[3], 0), at.add(1, e, e - 480, 0, r.treeScales[3], 0), at.add(2, e + 300, e + 450, 0, r.treeScales[3], 0), at.add(3, e - 950, e - 130, 0, r.treeScales[2], 0), at.add(4, e - 750, e - 400, 0, r.treeScales[3], 0), at.add(5, e - 700, e + 400, 0, r.treeScales[2], 0), at.add(6, e + 800, e - 200, 0, r.treeScales[3], 0), at.add(7, e - 260, e + 340, 0, r.bushScales[3], 1), at.add(8, e + 760, e + 310, 0, r.bushScales[3], 1), at.add(9, e - 800, e + 100, 0, r.bushScales[3], 1), at.add(10, e - 800, e + 300, 0, l.list[4].scale, l.list[4].id, l.list[10]), at.add(11, e + 650, e - 390, 0, l.list[4].scale, l.list[4].id, l.list[10]), at.add(12, e - 400, e - 450, 0, r.rockScales[2], 2)
            }(),
            function e() {
                A = Date.now(), L = A - N, N = A,
                    function() {
                        if (O && (!B || A - B >= 1e3 / r.clientSendRate) && (B = A, H && o.send("2", Bs), Qn && H && o.send("2", 90 ** 100), Qn && !H && !ai && o.send("2", 90 ** 100), ni && !H && !ai && o.send("2", 90 ** 100)), ko < 120 && (ko += .1 * L, $e.style.fontSize = Math.min(Math.round(ko), 120) + "px"), O) {
                            var e = s.getDistance(D, U, O.x, O.y),
                                t = s.getDirection(O.x, O.y, D, U),
                                n = Math.min(.01 * e * L, e);
                            e > .05 ? (D += n * Math.cos(t), U += n * Math.sin(t)) : (D = O.x, U = O.y)
                        } else D = r.mapScale / 2, U = r.mapScale / 2;
                        for (var i = A - 1e3 / r.serverUpdateRate, a = 0; a < G.length + X.length; ++a)
                            if ((j = G[a] || X[a - G.length]) && j.visible)
                                if (j.forcePos) j.x = j.x2, j.y = j.y2, j.dir = j.d2;
                                else {
                                    var c = j.t2 - j.t1,
                                        l = (i - j.t1) / c;
                                    j.dt += L;
                                    var h = Math.min(1.7, j.dt / 170),
                                        u = j.x2 - j.x1;
                                    j.x = j.x1 + u * h, u = j.y2 - j.y1, j.y = j.y1 + u * h, j.dir = Math.lerpAngle(j.d2, j.d1, Math.min(1.2, l))
                                } var d = D - he / 2 + Jn,
                            f = U - ue / 2 + Kn;
                        r.snowBiomeTop - f <= 0 && r.mapScale - r.snowBiomeTop - f >= ue ? (Ie.fillStyle = "#b6db66", Ie.fillRect(0, 0, he, ue)) : r.mapScale - r.snowBiomeTop - f <= 0 ? (Ie.fillStyle = "#dbc666", Ie.fillRect(0, 0, he, ue)) : r.snowBiomeTop - f >= ue ? (Ie.fillStyle = "#fff", Ie.fillRect(0, 0, he, ue)) : r.snowBiomeTop - f >= 0 ? (Ie.fillStyle = "#fff", Ie.fillRect(0, 0, he, r.snowBiomeTop - f), Ie.fillStyle = "#b6db66", Ie.fillRect(0, r.snowBiomeTop - f, he, ue - (r.snowBiomeTop - f))) : (Ie.fillStyle = "#b6db66", Ie.fillRect(0, 0, he, r.mapScale - r.snowBiomeTop - f), Ie.fillStyle = "#dbc666", Ie.fillRect(0, r.mapScale - r.snowBiomeTop - f, he, ue - (r.mapScale - r.snowBiomeTop - f))), yo || ((ie += oe * r.waveSpeed * L) >= r.waveMax ? (ie = r.waveMax, oe = -1) : ie <= 1 && (ie = oe = 1), Ie.globalAlpha = 1, Ie.fillStyle = "#dbc666", jo(0, f, Ie, r.riverPadding), Ie.fillStyle = "#91b2db", jo(0, f, Ie, 250 * (ie - 1))), Ie.lineWidth = 4, Ie.strokeStyle = "#000", Ie.globalAlpha = .06, Ie.beginPath();
                        for (Ie.stroke(), Ie.globalAlpha = 1, Ie.strokeStyle = rt, Uo(-1, d, f), Ie.globalAlpha = 1, Ie.lineWidth = 5.5, _o(0, d, f), Yo(d, f, 0), Ie.globalAlpha = 1, a = 0; a < X.length; ++a)(j = X[a]).active && j.visible && (j.animate(L), Ie.save(), Ie.translate(j.x - d, j.y - f), Ie.rotate(j.dir + j.dirPlus - Math.PI / 2), ws(j, Ie), Ie.restore());
                        if (Uo(0, d, f), _o(1, d, f), Uo(1, d, f), Yo(d, f, 1), Uo(2, d, f), Uo(3, d, f), Ie.fillStyle = "#000", Ie.globalAlpha = .09, d <= 0 && Ie.fillRect(0, 0, -d, ue), r.mapScale - d <= he) {
                            var y = Math.max(0, -f);
                            Ie.fillRect(r.mapScale - d, y, he - (r.mapScale - d), ue - y)
                        }
                        if (f <= 0 && Ie.fillRect(-d, 0, he + d, -f), r.mapScale - f <= ue) {
                            var w = Math.max(0, -d),
                                v = 0;
                            r.mapScale - d <= he && (v = he - (r.mapScale - d)), Ie.fillRect(w, r.mapScale - f, he - w - v, ue - (r.mapScale - f))
                        }
                        for (Ie.globalAlpha = 1, Ie.fillStyle = "rgba(0, 0, 70, 0.35)", Ie.fillRect(0, 0, he, ue), Ie.strokeStyle = ct, a = 0; a < G.length + X.length; ++a)
                            if ((j = G[a] || X[a - G.length]).visible) {
                                var k = (j.team ? "[" + j.team + "] " : "") + (j.id ? " [" + j.health + "/100] " : "") + (j.id ? "{" + j.sid + "} " : "") + (j.name || "") + (j.id ? " <" + j.clownCounter + ">" : "");
                                if (Mn)
                                    for (let e = 0; e < K.length; e++) Math.hypot(K[e].y - O.y2, K[e].x - O.x2) < 350 && K[e].active && K[e].cHealth && K[e].name && K[e].scale && K[e].cHealth > 0 && (r.healthBarWidth, Ie.fillStyle = ct, Ie.roundRect(K[e].x - d - r.healthBarWidth - r.healthBarPad, K[e].y - f + K[e].scale + 5, 2 * r.healthBarWidth + 2 * r.healthBarPad, 17, 8), Ie.fill(), Ie.fillStyle = K[e].owner.sid == O.sid ? "rgba(0, 256, 0, .6)" : isAlly(K[e].owner.sid) ? "rgba(0, 0, 256, .6)" : "rgba(256, 0, 0, .6)", Ie.roundRect(K[e].x - d - r.healthBarWidth, K[e].y - f + K[e].scale + 5 + r.healthBarPad, 2 * r.healthBarWidth * (K[e].cHealth / K[e].health), 17 - 2 * r.healthBarPad, 7), Ie.fill());
                                if ("" != k) {
                                    if (Ie.font = (j.nameScale || 30) + "px Hammersmith One", Ie.fillStyle = "#fff", Ie.textBaseline = "middle", Ie.textAlign = "center", Ie.lineWidth = j.nameScale ? 11 : 8, Ie.lineJoin = "round", Ie.strokeText(k, j.x - d, j.y - f - j.scale - r.nameY), Ie.fillText(k, j.x - d, j.y - f - j.scale - r.nameY), j.isLeader && Mo.crown.isLoaded) {
                                        var b = r.crownIconScale;
                                        w = j.x - d - b / 2 - Ie.measureText(k).width / 2 - r.crownPad, Ie.drawImage(Mo.crown, w, j.y - f - j.scale - r.nameY - b / 2 - 5, b, b)
                                    }
                                    1 == j.iconIndex && Mo.skull.isLoaded && (b = r.crownIconScale, w = j.x - d - b / 2 + Ie.measureText(k).width / 2 + r.crownPad, Ie.drawImage(Mo.skull, w, j.y - f - j.scale - r.nameY - b / 2 - 5, b, b))
                                }
                                if (j.isPlayer && j != O && j.team && j.team == O.team && vn && (Ie.lineCap = "round", Ie.strokeStyle = "#0000FF", Ie.lineWidth = he / 640, Ie.beginPath(), Ie.moveTo(O.x - d, O.y - f), Ie.lineTo(j.x - d, j.y - f), Ie.stroke(), Ie.strokeStyle = at), !j.isPlayer || j == O || j.team == O.team && j.team || !vn || (Ie.lineCap = "round", Ie.strokeStyle = "#FF0000", Ie.lineWidth = he / 640, Ie.beginPath(), Ie.moveTo(O.x - d, O.y - f), Ie.lineTo(j.x - d, j.y - f), Ie.stroke(), Ie.strokeStyle = at), xn && Tn.length)
                                    for (let e = 0; e < Tn.length; e++) {
                                        sa(Tn[e]) && (Ie.lineCap = "round", Ie.strokeStyle = "rgba(0, 0, 0, 0.2)", Ie.lineWidth = he / 640, Ie.beginPath(), Ie.moveTo(O.x - d, O.y - f), Ie.lineTo(Tn[e].x - d, Tn[e].y - f), Ie.stroke(), Ie.strokeStyle = at)
                                    }!j.isPlayer || j == O || j.team == O.team && j.team || !kn || (Ie.lineCap = "round", Ie.strokeStyle = "rgba(256, 0, 0, .5)", Ie.lineWidth = he / 640, Ie.beginPath(), Ie.moveTo((O.preX || O.x) - d, (O.preY || O.y) - f), Ie.lineTo((j.preX || j.x) - d, (j.preY || j.y) - f), Ie.stroke(), Ie.strokeStyle = at), !j.isPlayer || j.team == O.team && j.team || !kn || (Ie.lineCap = "round", Ie.strokeStyle = "rgba(0, 0, 256, .5)", Ie.lineWidth = he / 640, Ie.beginPath(), Ie.moveTo(j.x - d, j.y - f), Ie.lineTo((j.preX || j.x) - d, (j.preY || j.y) - f), Ie.stroke(), Ie.strokeStyle = at), j != O && j.isPlayer && vn && (Ie.font = (j.nameScale || 25) + "px Hammersmith One", Ie.fillStyle = "#fff", Ie.textBaseline = "middle", Ie.textAlign = "center", Ie.lineWidth = j.nameScale ? 11 : 8, Ie.lineJoin = "round", Ie.strokeStyle = "black", Ie.strokeText(j.name, (O.x - d + j.x - d) / 2, (O.y - f + j.y - f) / 2), Ie.fillText(j.name, (O.x - d + j.x - d) / 2, (O.y - f + j.y - f) / 2));
                                var x = 1 == hi[j.sid] ? "true" : "false";
                                j.id && (Ie.textAlign = "center", Ie.fillStyle = "#fff", Ie.lineJoin = "round", Ie.font = "20px Hammersmith One", Ie.strokeStyle = "black", Ie.lineWidth = 6, Ie.strokeText(x, j.x - d, j.y - f + j.scale + r.nameY + 30), Ie.fillText(x, j.x - d, j.y - f + j.scale + r.nameY + 30)), j.id && (r.reloadBarWidth, Ie.fillStyle = ct, Ie.roundRect(j.x - d - 50 - r.healthBarPad, j.y - f + j.scale + r.nameY - 13, 47 + 2 * r.healthBarPad, 17, 10), Ie.fill(), Ie.fillStyle = 1 == ci[j.sid] ? "#cba24f" : "#f4d393", Ie.roundRect(j.x - d - 50, j.y - f + j.scale + r.nameY - 13 + r.healthBarPad, 47 * (j.pr < ci[j.sid] ? j.pr + (ci[j.sid] - j.pr) * Math.min(1, j.dt / (1e3 / 9)) : ci[j.sid]), 16 - 2 * r.healthBarPad, 10), Ie.fill()), j.id && (r.reloadBarWidth, Ie.fillStyle = ct, Ie.roundRect(j.x - d + 2 - r.healthBarPad, j.y - f + j.scale + r.nameY - 13, 47 + 2 * r.healthBarPad, 17, 10), Ie.fill(), Ie.fillStyle = 1 == li[j.sid] ? "#cba24f" : "#f4d393", Ie.roundRect(j.x - d + 2, j.y - f + j.scale + r.nameY - 13 + r.healthBarPad, 47 * (j.sr < li[j.sid] ? j.sr + (li[j.sid] - j.sr) * Math.min(1, j.dt / (1e3 / 9)) : li[j.sid]), 16 - 2 * r.healthBarPad, 10), Ie.fill()), j.health > 0 && (r.healthBarWidth, Ie.fillStyle = ct, Ie.roundRect(j.x - d - r.healthBarWidth - r.healthBarPad, j.y - f + j.scale + r.nameY, 2 * r.healthBarWidth + 2 * r.healthBarPad, 17, 8), Ie.fill(), Ie.fillStyle = j == O || j.team && j.team == O.team ? "#8ecc51" : "#cc5151", Ie.roundRect(j.x - d - r.healthBarWidth, j.y - f + j.scale + r.nameY + r.healthBarPad, 2 * r.healthBarWidth * (j.health / j.maxHealth), 17 - 2 * r.healthBarPad, 7), Ie.fill())
                            } for (g.update(L, Ie, d, f), a = 0; a < G.length; ++a)
                            if ((j = G[a]).visible && j.chatCountdown > 0) {
                                j.chatCountdown -= L, j.chatCountdown <= 0 && (j.chatCountdown = 0), Ie.font = "32px Hammersmith One";
                                var T = Ie.measureText(j.chatMessage);
                                Ie.textBaseline = "middle", Ie.textAlign = "center", w = j.x - d, y = j.y - j.scale - f - 90;
                                var I = T.width + 17;
                                Ie.fillStyle = "rgba(0,0,0,0.2)", Ie.roundRect(w - I / 2, y - 23.5, I, 47, 6), Ie.fill(), Ie.fillStyle = "#fff", Ie.fillText(j.chatMessage, w, y)
                            }!
                        function(e) {
                            if (O && O.alive) {
                                Ze.clearRect(0, 0, Ke.width, Ke.height), Ze.strokeStyle = "#fff", Ze.lineWidth = 4;
                                for (var t = 0; t < qt.length; ++t)(Yt = qt[t]).update(Ze, e);
                                if (Ze.globalAlpha = 1, Ze.fillStyle = "#fff", es(O.x / r.mapScale * Ke.width, O.y / r.mapScale * Ke.height, 7, Ze, !0), Ze.fillStyle = "rgba(255,255,255,0.35)", O.team && Et)
                                    for (t = 0; t < Et.length;) es(Et[t] / r.mapScale * Ke.width, Et[t + 1] / r.mapScale * Ke.height, 7, Ze, !0), t += 2;
                                It && (Ze.fillStyle = "#fc5553", Ze.font = "34px Hammersmith One", Ze.textBaseline = "middle", Ze.textAlign = "center", Ze.fillText("x", It.x / r.mapScale * Ke.width, It.y / r.mapScale * Ke.height)), Mt && (Ze.fillStyle = "#fff", Ze.font = "34px Hammersmith One", Ze.textBaseline = "middle", Ze.textAlign = "center", Ze.fillText("x", Mt.x / r.mapScale * Ke.width, Mt.y / r.mapScale * Ke.height))
                            }
                        }(L), -1 !== re.id && Bo(re.startX, re.startY, re.currentX, re.currentY), -1 !== ce.id && Bo(ce.startX, ce.startY, ce.currentX, ce.currentY)
                    }(), requestAnimFrame(e)
            }(), openLink = da, aJoinReq = jt, follmoo = function() {
                F || (F = !0, E("moofoll", 1))
            }, kickFromClan = Dt, sendJoin = Ut, leaveAlliance = Wt, createAlliance = zt, storeBuy = $t, storeEquip = Jt, showItemInfo = xt, selectSkinColor = function(e) {
                le = e, tn()
            }, changeStoreIndex = function(e) {
                Vt != e && (Vt = e, Xt())
            }, config = r
    }, function(e, t) {
        ! function(e, t, n) {
            function i(e, t) {
                return typeof e === t
            }
            var o = [],
                s = [],
                a = {
                    _version: "3.5.0",
                    _config: {
                        classPrefix: "",
                        enableClasses: !0,
                        enableJSClass: !0,
                        usePrefixes: !0
                    },
                    _q: [],
                    on: function(e, t) {
                        var n = this;
                        setTimeout((function() {
                            t(n[e])
                        }), 0)
                    },
                    addTest: function(e, t, n) {
                        s.push({
                            name: e,
                            fn: t,
                            options: n
                        })
                    },
                    addAsyncTest: function(e) {
                        s.push({
                            name: null,
                            fn: e
                        })
                    }
                },
                r = function() {};
            r.prototype = a, r = new r;
            var c = t.documentElement,
                l = "svg" === c.nodeName.toLowerCase();
            r.addTest("passiveeventlisteners", (function() {
                    var t = !1;
                    try {
                        var n = Object.defineProperty({}, "passive", {
                            get: function() {
                                t = !0
                            }
                        });
                        e.addEventListener("test", null, n)
                    } catch (e) {}
                    return t
                })),
                function() {
                    var e, t, n, a, c, l;
                    for (var h in s)
                        if (s.hasOwnProperty(h)) {
                            if (e = [], (t = s[h]).name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                                for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                            for (a = i(t.fn, "function") ? t.fn() : t.fn, c = 0; c < e.length; c++) 1 === (l = e[c].split(".")).length ? r[l[0]] = a : (!r[l[0]] || r[l[0]] instanceof Boolean || (r[l[0]] = new Boolean(r[l[0]])), r[l[0]][l[1]] = a), o.push((a ? "" : "no-") + l.join("-"))
                        }
                }(),
                function(e) {
                    var t = c.className,
                        n = r._config.classPrefix || "";
                    if (l && (t = t.baseVal), r._config.enableJSClass) {
                        var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                        t = t.replace(i, "$1" + n + "js$2")
                    }
                    r._config.enableClasses && (t += " " + n + e.join(" " + n), l ? c.className.baseVal = t : c.className = t)
                }(o), delete a.addTest, delete a.addAsyncTest;
            for (var h = 0; h < r._q.length; h++) r._q[h]();
            e.Modernizr = r
        }(window, document)
    }, function(e, t, n) {
        var i = n(24);
        n(19), e.exports = {
            socket: null,
            connected: !1,
            socketId: -1,
            connect: function(e, t, n) {
                if (!this.socket) {
                    var o = this;
                    try {
                        var s = !1,
                            a = e;
                        this.socket = new WebSocket(a), this.socket.binaryType = "arraybuffer", this.socket.onmessage = function(e) {
                            var t = new Uint8Array(e.data),
                                s = i.decode(t),
                                a = s[0];
                            t = s[1], "io-init" == a ? o.socketId = t[0] : n[a].apply(void 0, t)
                        }, this.socket.onopen = function() {
                            o.connected = !0, t()
                        }, this.socket.onclose = function(e) {
                            o.connected = !1, 4001 == e.code ? t("Invalid Connection") : s || t("disconnected")
                        }, this.socket.onerror = function(e) {
                            this.socket && this.socket.readyState != WebSocket.OPEN && (s = !0, t("Socket error"))
                        }
                    } catch (e) {
                        t(e)
                    }
                }
            },
            send: function(e) {
                var t = Array.prototype.slice.call(arguments, 1),
                    n = i.encode([e, t]);
                this.socket.send(n)
            },
            socketReady: function() {
                return this.socket && this.connected
            },
            close: function() {
                this.socket && this.socket.close()
            }
        }
    }, function(e, t, n) {
        t.encode = n(9).encode, t.decode = n(15).decode, t.Encoder = n(37).Encoder, t.Decoder = n(38).Decoder, t.createCodec = n(39).createCodec, t.codec = n(40).codec
    }, function(e, t, n) {
        (function(t) {
            function n(e) {
                return e && e.isBuffer && e
            }
            e.exports = n(void 0 !== t && t) || n(this.Buffer) || n("undefined" != typeof window && Buffer) || this.Buffer
        }).call(this, n(11).Buffer)
    }, function(e, t, n) {
        t.byteLength = function(e) {
            var t = l(e),
                n = t[0],
                i = t[1];
            return 3 * (n + i) / 4 - i
        }, t.toByteArray = function(e) {
            var t, n, i = l(e),
                a = i[0],
                r = i[1],
                c = new s(function(e, t, n) {
                    return 3 * (t + n) / 4 - n
                }(0, a, r)),
                h = 0,
                u = r > 0 ? a - 4 : a;
            for (n = 0; n < u; n += 4) t = o[e.charCodeAt(n)] << 18 | o[e.charCodeAt(n + 1)] << 12 | o[e.charCodeAt(n + 2)] << 6 | o[e.charCodeAt(n + 3)], c[h++] = t >> 16 & 255, c[h++] = t >> 8 & 255, c[h++] = 255 & t;
            return 2 === r && (t = o[e.charCodeAt(n)] << 2 | o[e.charCodeAt(n + 1)] >> 4, c[h++] = 255 & t), 1 === r && (t = o[e.charCodeAt(n)] << 10 | o[e.charCodeAt(n + 1)] << 4 | o[e.charCodeAt(n + 2)] >> 2, c[h++] = t >> 8 & 255, c[h++] = 255 & t), c
        }, t.fromByteArray = function(e) {
            for (var t, n = e.length, o = n % 3, s = [], a = 0, r = n - o; a < r; a += 16383) s.push(u(e, a, a + 16383 > r ? r : a + 16383));
            return 1 === o ? (t = e[n - 1], s.push(i[t >> 2] + i[t << 4 & 63] + "==")) : 2 === o && (t = (e[n - 2] << 8) + e[n - 1], s.push(i[t >> 10] + i[t >> 4 & 63] + i[t << 2 & 63] + "=")), s.join("")
        };
        for (var i = [], o = [], s = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = 0, c = a.length; r < c; ++r) i[r] = a[r], o[a.charCodeAt(r)] = r;

        function l(e) {
            var t = e.length;
            if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var n = e.indexOf("=");
            return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
        }

        function h(e) {
            return i[e >> 18 & 63] + i[e >> 12 & 63] + i[e >> 6 & 63] + i[63 & e]
        }

        function u(e, t, n) {
            for (var i, o = [], s = t; s < n; s += 3) i = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), o.push(h(i));
            return o.join("")
        }
        o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63
    }, function(e, t) {
        var n = {}.toString;
        e.exports = Array.isArray || function(e) {
            return "[object Array]" == n.call(e)
        }
    }, function(e, t, n) {
        var i = n(0);

        function o(e) {
            return new Array(e)
        }(t = e.exports = o(0)).alloc = o, t.concat = i.concat, t.from = function(e) {
            if (!i.isBuffer(e) && i.isView(e)) e = i.Uint8Array.from(e);
            else if (i.isArrayBuffer(e)) e = new Uint8Array(e);
            else {
                if ("string" == typeof e) return i.from.call(t, e);
                if ("number" == typeof e) throw new TypeError('"value" argument must not be a number')
            }
            return Array.prototype.slice.call(e)
        }
    }, function(e, t, n) {
        var i = n(0),
            o = i.global;

        function s(e) {
            return new o(e)
        }(t = e.exports = i.hasBuffer ? s(0) : []).alloc = i.hasBuffer && o.alloc || s, t.concat = i.concat, t.from = function(e) {
            if (!i.isBuffer(e) && i.isView(e)) e = i.Uint8Array.from(e);
            else if (i.isArrayBuffer(e)) e = new Uint8Array(e);
            else {
                if ("string" == typeof e) return i.from.call(t, e);
                if ("number" == typeof e) throw new TypeError('"value" argument must not be a number')
            }
            return o.from && 1 !== o.from.length ? o.from(e) : new o(e)
        }
    }, function(e, t, n) {
        var i = n(0);

        function o(e) {
            return new Uint8Array(e)
        }(t = e.exports = i.hasArrayBuffer ? o(0) : []).alloc = o, t.concat = i.concat, t.from = function(e) {
            if (i.isView(e)) {
                var n = e.byteOffset,
                    o = e.byteLength;
                (e = e.buffer).byteLength !== o && (e.slice ? e = e.slice(n, n + o) : (e = new Uint8Array(e)).byteLength !== o && (e = Array.prototype.slice.call(e, n, n + o)))
            } else {
                if ("string" == typeof e) return i.from.call(t, e);
                if ("number" == typeof e) throw new TypeError('"value" argument must not be a number')
            }
            return new Uint8Array(e)
        }
    }, function(e, t) {
        t.copy = function(e, t, n, i) {
            var o;
            n || (n = 0), i || 0 === i || (i = this.length), t || (t = 0);
            var s = i - n;
            if (e === this && n < t && t < i)
                for (o = s - 1; o >= 0; o--) e[o + t] = this[o + n];
            else
                for (o = 0; o < s; o++) e[o + t] = this[o + n];
            return s
        }, t.toString = function(e, t, n) {
            var i = 0 | t;
            n || (n = this.length);
            for (var o = "", s = 0; i < n;)(s = this[i++]) < 128 ? o += String.fromCharCode(s) : (192 == (224 & s) ? s = (31 & s) << 6 | 63 & this[i++] : 224 == (240 & s) ? s = (15 & s) << 12 | (63 & this[i++]) << 6 | 63 & this[i++] : 240 == (248 & s) && (s = (7 & s) << 18 | (63 & this[i++]) << 12 | (63 & this[i++]) << 6 | 63 & this[i++]), s >= 65536 ? (s -= 65536, o += String.fromCharCode(55296 + (s >>> 10), 56320 + (1023 & s))) : o += String.fromCharCode(s));
            return o
        }, t.write = function(e, t) {
            for (var n = t || (t |= 0), i = e.length, o = 0, s = 0; s < i;)(o = e.charCodeAt(s++)) < 128 ? this[n++] = o : o < 2048 ? (this[n++] = 192 | o >>> 6, this[n++] = 128 | 63 & o) : o < 55296 || o > 57343 ? (this[n++] = 224 | o >>> 12, this[n++] = 128 | o >>> 6 & 63, this[n++] = 128 | 63 & o) : (o = 65536 + (o - 55296 << 10 | e.charCodeAt(s++) - 56320), this[n++] = 240 | o >>> 18, this[n++] = 128 | o >>> 12 & 63, this[n++] = 128 | o >>> 6 & 63, this[n++] = 128 | 63 & o);
            return n - t
        }
    }, function(e, t, n) {
        t.setExtPackers = function(e) {
            e.addExtPacker(14, Error, [u, c]), e.addExtPacker(1, EvalError, [u, c]), e.addExtPacker(2, RangeError, [u, c]), e.addExtPacker(3, ReferenceError, [u, c]), e.addExtPacker(4, SyntaxError, [u, c]), e.addExtPacker(5, TypeError, [u, c]), e.addExtPacker(6, URIError, [u, c]), e.addExtPacker(10, RegExp, [h, c]), e.addExtPacker(11, Boolean, [l, c]), e.addExtPacker(12, String, [l, c]), e.addExtPacker(13, Date, [Number, c]), e.addExtPacker(15, Number, [l, c]), "undefined" != typeof Uint8Array && (e.addExtPacker(17, Int8Array, a), e.addExtPacker(18, Uint8Array, a), e.addExtPacker(19, Int16Array, a), e.addExtPacker(20, Uint16Array, a), e.addExtPacker(21, Int32Array, a), e.addExtPacker(22, Uint32Array, a), e.addExtPacker(23, Float32Array, a), "undefined" != typeof Float64Array && e.addExtPacker(24, Float64Array, a), "undefined" != typeof Uint8ClampedArray && e.addExtPacker(25, Uint8ClampedArray, a), e.addExtPacker(26, ArrayBuffer, a), e.addExtPacker(29, DataView, a)), o.hasBuffer && e.addExtPacker(27, s, o.from)
        };
        var i, o = n(0),
            s = o.global,
            a = o.Uint8Array.from,
            r = {
                name: 1,
                message: 1,
                stack: 1,
                columnNumber: 1,
                fileName: 1,
                lineNumber: 1
            };

        function c(e) {
            return i || (i = n(9).encode), i(e)
        }

        function l(e) {
            return e.valueOf()
        }

        function h(e) {
            (e = RegExp.prototype.toString.call(e).split("/")).shift();
            var t = [e.pop()];
            return t.unshift(e.join("/")), t
        }

        function u(e) {
            var t = {};
            for (var n in r) t[n] = e[n];
            return t
        }
    }, function(e, t, n) {
        var i = n(5),
            o = n(7),
            s = o.Uint64BE,
            a = o.Int64BE,
            r = n(0),
            c = n(6),
            l = n(34),
            h = n(13).uint8,
            u = n(3).ExtBuffer,
            d = "undefined" != typeof Uint8Array,
            f = "undefined" != typeof Map,
            m = [];
        m[1] = 212, m[2] = 213, m[4] = 214, m[8] = 215, m[16] = 216, t.getWriteType = function(e) {
            var t = l.getWriteToken(e),
                n = e && e.useraw,
                o = d && e && e.binarraybuffer,
                p = o ? r.isArrayBuffer : r.isBuffer,
                g = o ? function(e, t) {
                    k(e, new Uint8Array(t))
                } : k,
                y = f && e && e.usemap ? function(e, n) {
                    if (!(n instanceof Map)) return b(e, n);
                    var i = n.size;
                    t[i < 16 ? 128 + i : i <= 65535 ? 222 : 223](e, i);
                    var o = e.codec.encode;
                    n.forEach((function(t, n, i) {
                        o(e, n), o(e, t)
                    }))
                } : b;
            return {
                boolean: function(e, n) {
                    t[n ? 195 : 194](e, n)
                },
                function: v,
                number: function(e, n) {
                    var i = 0 | n;
                    n === i ? t[-32 <= i && i <= 127 ? 255 & i : 0 <= i ? i <= 255 ? 204 : i <= 65535 ? 205 : 206 : -128 <= i ? 208 : -32768 <= i ? 209 : 210](e, i) : t[203](e, n)
                },
                object: n ? function(e, n) {
                    if (p(n)) return function(e, n) {
                        var i = n.length;
                        t[i < 32 ? 160 + i : i <= 65535 ? 218 : 219](e, i), e.send(n)
                    }(e, n);
                    w(e, n)
                } : w,
                string: function(e) {
                    return function(n, i) {
                        var o = i.length,
                            s = 5 + 3 * o;
                        n.offset = n.reserve(s);
                        var a = n.buffer,
                            r = e(o),
                            l = n.offset + r;
                        o = c.write.call(a, i, l);
                        var h = e(o);
                        if (r !== h) {
                            var u = l + h - r,
                                d = l + o;
                            c.copy.call(a, a, u, l, d)
                        }
                        t[1 === h ? 160 + o : h <= 3 ? 215 + h : 219](n, o), n.offset += o
                    }
                }(n ? function(e) {
                    return e < 32 ? 1 : e <= 65535 ? 3 : 5
                } : function(e) {
                    return e < 32 ? 1 : e <= 255 ? 2 : e <= 65535 ? 3 : 5
                }),
                symbol: v,
                undefined: v
            };

            function w(e, n) {
                if (null === n) return v(e, n);
                if (p(n)) return g(e, n);
                if (i(n)) return function(e, n) {
                    var i = n.length;
                    t[i < 16 ? 144 + i : i <= 65535 ? 220 : 221](e, i);
                    for (var o = e.codec.encode, s = 0; s < i; s++) o(e, n[s])
                }(e, n);
                if (s.isUint64BE(n)) return function(e, n) {
                    t[207](e, n.toArray())
                }(e, n);
                if (a.isInt64BE(n)) return function(e, n) {
                    t[211](e, n.toArray())
                }(e, n);
                var o = e.codec.getExtPacker(n);
                if (o && (n = o(n)), n instanceof u) return function(e, n) {
                    var i = n.buffer,
                        o = i.length,
                        s = m[o] || (o < 255 ? 199 : o <= 65535 ? 200 : 201);
                    t[s](e, o), h[n.type](e), e.send(i)
                }(e, n);
                y(e, n)
            }

            function v(e, n) {
                t[192](e, n)
            }

            function k(e, n) {
                var i = n.length;
                t[i < 255 ? 196 : i <= 65535 ? 197 : 198](e, i), e.send(n)
            }

            function b(e, n) {
                var i = Object.keys(n),
                    o = i.length;
                t[o < 16 ? 128 + o : o <= 65535 ? 222 : 223](e, o);
                var s = e.codec.encode;
                i.forEach((function(t) {
                    s(e, t), s(e, n[t])
                }))
            }
        }
    }, function(e, t, n) {
        var i = n(4),
            o = n(7),
            s = o.Uint64BE,
            a = o.Int64BE,
            r = n(13).uint8,
            c = n(0),
            l = c.global,
            h = c.hasBuffer && "TYPED_ARRAY_SUPPORT" in l && !l.TYPED_ARRAY_SUPPORT,
            u = c.hasBuffer && l.prototype || {};

        function d() {
            var e = r.slice();
            return e[196] = f(196), e[197] = m(197), e[198] = p(198), e[199] = f(199), e[200] = m(200), e[201] = p(201), e[202] = g(202, 4, u.writeFloatBE || v, !0), e[203] = g(203, 8, u.writeDoubleBE || k, !0), e[204] = f(204), e[205] = m(205), e[206] = p(206), e[207] = g(207, 8, y), e[208] = f(208), e[209] = m(209), e[210] = p(210), e[211] = g(211, 8, w), e[217] = f(217), e[218] = m(218), e[219] = p(219), e[220] = m(220), e[221] = p(221), e[222] = m(222), e[223] = p(223), e
        }

        function f(e) {
            return function(t, n) {
                var i = t.reserve(2),
                    o = t.buffer;
                o[i++] = e, o[i] = n
            }
        }

        function m(e) {
            return function(t, n) {
                var i = t.reserve(3),
                    o = t.buffer;
                o[i++] = e, o[i++] = n >>> 8, o[i] = n
            }
        }

        function p(e) {
            return function(t, n) {
                var i = t.reserve(5),
                    o = t.buffer;
                o[i++] = e, o[i++] = n >>> 24, o[i++] = n >>> 16, o[i++] = n >>> 8, o[i] = n
            }
        }

        function g(e, t, n, i) {
            return function(o, s) {
                var a = o.reserve(t + 1);
                o.buffer[a++] = e, n.call(o.buffer, s, a, i)
            }
        }

        function y(e, t) {
            new s(this, t, e)
        }

        function w(e, t) {
            new a(this, t, e)
        }

        function v(e, t) {
            i.write(this, e, t, !1, 23, 4)
        }

        function k(e, t) {
            i.write(this, e, t, !1, 52, 8)
        }
        t.getWriteToken = function(e) {
            return e && e.uint8array ? function() {
                var e = d();
                return e[202] = g(202, 4, v), e[203] = g(203, 8, k), e
            }() : h || c.hasBuffer && e && e.safe ? function() {
                var e = r.slice();
                return e[196] = g(196, 1, l.prototype.writeUInt8), e[197] = g(197, 2, l.prototype.writeUInt16BE), e[198] = g(198, 4, l.prototype.writeUInt32BE), e[199] = g(199, 1, l.prototype.writeUInt8), e[200] = g(200, 2, l.prototype.writeUInt16BE), e[201] = g(201, 4, l.prototype.writeUInt32BE), e[202] = g(202, 4, l.prototype.writeFloatBE), e[203] = g(203, 8, l.prototype.writeDoubleBE), e[204] = g(204, 1, l.prototype.writeUInt8), e[205] = g(205, 2, l.prototype.writeUInt16BE), e[206] = g(206, 4, l.prototype.writeUInt32BE), e[207] = g(207, 8, y), e[208] = g(208, 1, l.prototype.writeInt8), e[209] = g(209, 2, l.prototype.writeInt16BE), e[210] = g(210, 4, l.prototype.writeInt32BE), e[211] = g(211, 8, w), e[217] = g(217, 1, l.prototype.writeUInt8), e[218] = g(218, 2, l.prototype.writeUInt16BE), e[219] = g(219, 4, l.prototype.writeUInt32BE), e[220] = g(220, 2, l.prototype.writeUInt16BE), e[221] = g(221, 4, l.prototype.writeUInt32BE), e[222] = g(222, 2, l.prototype.writeUInt16BE), e[223] = g(223, 4, l.prototype.writeUInt32BE), e
            }() : d()
        }
    }, function(e, t, n) {
        t.setExtUnpackers = function(e) {
            e.addExtUnpacker(14, [r, l(Error)]), e.addExtUnpacker(1, [r, l(EvalError)]), e.addExtUnpacker(2, [r, l(RangeError)]), e.addExtUnpacker(3, [r, l(ReferenceError)]), e.addExtUnpacker(4, [r, l(SyntaxError)]), e.addExtUnpacker(5, [r, l(TypeError)]), e.addExtUnpacker(6, [r, l(URIError)]), e.addExtUnpacker(10, [r, c]), e.addExtUnpacker(11, [r, h(Boolean)]), e.addExtUnpacker(12, [r, h(String)]), e.addExtUnpacker(13, [r, h(Date)]), e.addExtUnpacker(15, [r, h(Number)]), "undefined" != typeof Uint8Array && (e.addExtUnpacker(17, h(Int8Array)), e.addExtUnpacker(18, h(Uint8Array)), e.addExtUnpacker(19, [u, h(Int16Array)]), e.addExtUnpacker(20, [u, h(Uint16Array)]), e.addExtUnpacker(21, [u, h(Int32Array)]), e.addExtUnpacker(22, [u, h(Uint32Array)]), e.addExtUnpacker(23, [u, h(Float32Array)]), "undefined" != typeof Float64Array && e.addExtUnpacker(24, [u, h(Float64Array)]), "undefined" != typeof Uint8ClampedArray && e.addExtUnpacker(25, h(Uint8ClampedArray)), e.addExtUnpacker(26, u), e.addExtUnpacker(29, [u, h(DataView)])), o.hasBuffer && e.addExtUnpacker(27, h(s))
        };
        var i, o = n(0),
            s = o.global,
            a = {
                name: 1,
                message: 1,
                stack: 1,
                columnNumber: 1,
                fileName: 1,
                lineNumber: 1
            };

        function r(e) {
            return i || (i = n(15).decode), i(e)
        }

        function c(e) {
            return RegExp.apply(null, e)
        }

        function l(e) {
            return function(t) {
                var n = new e;
                for (var i in a) n[i] = t[i];
                return n
            }
        }

        function h(e) {
            return function(t) {
                return new e(t)
            }
        }

        function u(e) {
            return new Uint8Array(e).buffer
        }
    }, function(e, t, n) {
        var i = n(17);

        function o(e) {
            var t, n = new Array(256);
            for (t = 0; t <= 127; t++) n[t] = s(t);
            for (t = 128; t <= 143; t++) n[t] = r(t - 128, e.map);
            for (t = 144; t <= 159; t++) n[t] = r(t - 144, e.array);
            for (t = 160; t <= 191; t++) n[t] = r(t - 160, e.str);
            for (n[192] = s(null), n[193] = null, n[194] = s(!1), n[195] = s(!0), n[196] = a(e.uint8, e.bin), n[197] = a(e.uint16, e.bin), n[198] = a(e.uint32, e.bin), n[199] = a(e.uint8, e.ext), n[200] = a(e.uint16, e.ext), n[201] = a(e.uint32, e.ext), n[202] = e.float32, n[203] = e.float64, n[204] = e.uint8, n[205] = e.uint16, n[206] = e.uint32, n[207] = e.uint64, n[208] = e.int8, n[209] = e.int16, n[210] = e.int32, n[211] = e.int64, n[212] = r(1, e.ext), n[213] = r(2, e.ext), n[214] = r(4, e.ext), n[215] = r(8, e.ext), n[216] = r(16, e.ext), n[217] = a(e.uint8, e.str), n[218] = a(e.uint16, e.str), n[219] = a(e.uint32, e.str), n[220] = a(e.uint16, e.array), n[221] = a(e.uint32, e.array), n[222] = a(e.uint16, e.map), n[223] = a(e.uint32, e.map), t = 224; t <= 255; t++) n[t] = s(t - 256);
            return n
        }

        function s(e) {
            return function() {
                return e
            }
        }

        function a(e, t) {
            return function(n) {
                var i = e(n);
                return t(n, i)
            }
        }

        function r(e, t) {
            return function(n) {
                return t(n, e)
            }
        }
        t.getReadToken = function(e) {
            var t = i.getReadFormat(e);
            return e && e.useraw ? function(e) {
                var t, n = o(e).slice();
                for (n[217] = n[196], n[218] = n[197], n[219] = n[198], t = 160; t <= 191; t++) n[t] = r(t - 160, e.bin);
                return n
            }(t) : o(t)
        }
    }, function(e, t, n) {
        t.Encoder = s;
        var i = n(18),
            o = n(10).EncodeBuffer;

        function s(e) {
            if (!(this instanceof s)) return new s(e);
            o.call(this, e)
        }
        s.prototype = new o, i.mixin(s.prototype), s.prototype.encode = function(e) {
            this.write(e), this.emit("data", this.read())
        }, s.prototype.end = function(e) {
            arguments.length && this.encode(e), this.flush(), this.emit("end")
        }
    }, function(e, t, n) {
        t.Decoder = s;
        var i = n(18),
            o = n(16).DecodeBuffer;

        function s(e) {
            if (!(this instanceof s)) return new s(e);
            o.call(this, e)
        }
        s.prototype = new o, i.mixin(s.prototype), s.prototype.decode = function(e) {
            arguments.length && this.write(e), this.flush()
        }, s.prototype.push = function(e) {
            this.emit("data", e)
        }, s.prototype.end = function(e) {
            this.decode(e), this.emit("end")
        }
    }, function(e, t, n) {
        n(8), n(2), t.createCodec = n(1).createCodec
    }, function(e, t, n) {
        n(8), n(2), t.codec = {
            preset: n(1).preset
        }
    }, function(e, t) {
        var n, i, o = e.exports = {};

        function s() {
            throw new Error("setTimeout has not been defined")
        }

        function a() {
            throw new Error("clearTimeout has not been defined")
        }

        function r(e) {
            if (n === setTimeout) return setTimeout(e, 0);
            if ((n === s || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
            try {
                return n(e, 0)
            } catch (t) {
                try {
                    return n.call(null, e, 0)
                } catch (t) {
                    return n.call(this, e, 0)
                }
            }
        }! function() {
            try {
                n = "function" == typeof setTimeout ? setTimeout : s
            } catch (e) {
                n = s
            }
            try {
                i = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (e) {
                i = a
            }
        }();
        var c, l = [],
            h = !1,
            u = -1;

        function d() {
            h && c && (h = !1, c.length ? l = c.concat(l) : u = -1, l.length && f())
        }

        function f() {
            if (!h) {
                var e = r(d);
                h = !0;
                for (var t = l.length; t;) {
                    for (c = l, l = []; ++u < t;) c && c[u].run();
                    u = -1, t = l.length
                }
                c = null, h = !1,
                    function(e) {
                        if (i === clearTimeout) return clearTimeout(e);
                        if ((i === a || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
                        try {
                            i(e)
                        } catch (t) {
                            try {
                                return i.call(null, e)
                            } catch (t) {
                                return i.call(this, e)
                            }
                        }
                    }(e)
            }
        }

        function m(e, t) {
            this.fun = e, this.array = t
        }

        function p() {}
        o.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            l.push(new m(e, t)), 1 !== l.length || h || r(f)
        }, m.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = p, o.addListener = p, o.once = p, o.off = p, o.removeListener = p, o.removeAllListeners = p, o.emit = p, o.prependListener = p, o.prependOnceListener = p, o.listeners = function(e) {
            return []
        }, o.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, o.cwd = function() {
            return "/"
        }, o.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, o.umask = function() {
            return 0
        }
    }, function(e, t) {
        var n = Math.abs,
            i = (Math.cos, Math.sin, Math.pow, Math.sqrt),
            o = (n = Math.abs, Math.atan2),
            s = Math.PI;
        e.exports.randInt = function(e, t) {
            return Math.floor(Math.random() * (t - e + 1)) + e
        }, e.exports.randFloat = function(e, t) {
            return Math.random() * (t - e + 1) + e
        }, e.exports.lerp = function(e, t, n) {
            return e + (t - e) * n
        }, e.exports.decel = function(e, t) {
            return e > 0 ? e = Math.max(0, e - t) : e < 0 && (e = Math.min(0, e + t)), e
        }, e.exports.getDistance = function(e, t, n, o) {
            return i((n -= e) * n + (o -= t) * o)
        }, e.exports.getDirection = function(e, t, n, i) {
            return o(t - i, e - n)
        }, e.exports.getAngleDist = function(e, t) {
            var i = n(t - e) % (2 * s);
            return i > s ? 2 * s - i : i
        }, e.exports.isNumber = function(e) {
            return "number" == typeof e && !isNaN(e) && isFinite(e)
        }, e.exports.isString = function(e) {
            return e && "string" == typeof e
        }, e.exports.kFormat = function(e) {
            return e > 999 ? (e / 1e3).toFixed(1) + "k" : e
        }, e.exports.capitalizeFirst = function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }, e.exports.fixTo = function(e, t) {
            return parseFloat(e.toFixed(t))
        }, e.exports.sortByPoints = function(e, t) {
            return parseFloat(t.points) - parseFloat(e.points)
        }, e.exports.lineInRect = function(e, t, n, i, o, s, a, r) {
            var c = o,
                l = a;
            if (o > a && (c = a, l = o), l > n && (l = n), c < e && (c = e), c > l) return !1;
            var h = s,
                u = r,
                d = a - o;
            if (Math.abs(d) > 1e-7) {
                var f = (r - s) / d,
                    m = s - f * o;
                h = f * c + m, u = f * l + m
            }
            if (h > u) {
                var p = u;
                u = h, h = p
            }
            return u > i && (u = i), h < t && (h = t), !(h > u)
        }, e.exports.containsPoint = function(e, t, n) {
            var i = e.getBoundingClientRect(),
                o = i.left + scrollX,
                s = i.top + scrollY,
                a = i.width,
                r = i.height;
            return t > o && t < o + a && n > s && n < s + r
        }, e.exports.mousifyTouchEvent = function(e) {
            var t = e.changedTouches[0];
            e.screenX = t.screenX, e.screenY = t.screenY, e.clientX = t.clientX, e.clientY = t.clientY, e.pageX = t.pageX, e.pageY = t.pageY
        }, e.exports.hookTouchEvents = function(t, n) {
            var i = !n,
                o = !1;

            function s(n) {
                e.exports.mousifyTouchEvent(n), setUsingTouch(!0), i && (n.preventDefault(), n.stopPropagation()), o && (t.onclick && t.onclick(n), t.onmouseout && t.onmouseout(n), o = !1)
            }
            t.addEventListener("touchstart", e.exports.checkTrusted((function(n) {
                e.exports.mousifyTouchEvent(n), setUsingTouch(!0), i && (n.preventDefault(), n.stopPropagation()), t.onmouseover && t.onmouseover(n), o = !0
            })), !1), t.addEventListener("touchmove", e.exports.checkTrusted((function(n) {
                e.exports.mousifyTouchEvent(n), setUsingTouch(!0), i && (n.preventDefault(), n.stopPropagation()), e.exports.containsPoint(t, n.pageX, n.pageY) ? o || (t.onmouseover && t.onmouseover(n), o = !0) : o && (t.onmouseout && t.onmouseout(n), o = !1)
            })), !1), t.addEventListener("touchend", e.exports.checkTrusted(s), !1), t.addEventListener("touchcancel", e.exports.checkTrusted(s), !1), t.addEventListener("touchleave", e.exports.checkTrusted(s), !1)
        }, e.exports.removeAllChildren = function(e) {
            for (; e.hasChildNodes();) e.removeChild(e.lastChild)
        }, e.exports.generateElement = function(t) {
            var n = document.createElement(t.tag || "div");

            function i(e, i) {
                t[e] && (n[i] = t[e])
            }
            for (var o in i("text", "textContent"), i("html", "innerHTML"), i("class", "className"), t) {
                switch (o) {
                    case "tag":
                    case "text":
                    case "html":
                    case "class":
                    case "style":
                    case "hookTouch":
                    case "parent":
                    case "children":
                        continue
                }
                n[o] = t[o]
            }
            if (n.onclick && (n.onclick = e.exports.checkTrusted(n.onclick)), n.onmouseover && (n.onmouseover = e.exports.checkTrusted(n.onmouseover)), n.onmouseout && (n.onmouseout = e.exports.checkTrusted(n.onmouseout)), t.style && (n.style.cssText = t.style), t.hookTouch && e.exports.hookTouchEvents(n), t.parent && t.parent.appendChild(n), t.children)
                for (var s = 0; s < t.children.length; s++) n.appendChild(t.children[s]);
            return n
        }, e.exports.eventIsTrusted = function(e) {
            return !e || "boolean" != typeof e.isTrusted || e.isTrusted
        }, e.exports.checkTrusted = function(t) {
            return function(n) {
                n && n instanceof Event && e.exports.eventIsTrusted(n) && t(n)
            }
        }, e.exports.randomString = function(e) {
            for (var t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = 0; i < e; i++) t += n.charAt(Math.floor(Math.random() * n.length));
            return t
        }, e.exports.countInArray = function(e, t) {
            for (var n = 0, i = 0; i < e.length; i++) e[i] === t && n++;
            return n
        }
    }, function(e, t) {
        e.exports.AnimText = function() {
            this.init = function(e, t, n, i, o, s, a) {
                this.x = e, this.y = t, this.color = a, this.scale = n, this.startScale = this.scale, this.maxScale = 1.5 * n, this.scaleSpeed = .7, this.speed = i, this.life = o, this.text = s
            }, this.update = function(e) {
                this.life && (this.life -= e, this.y -= this.speed * e, this.scale += this.scaleSpeed * e, this.scale >= this.maxScale ? (this.scale = this.maxScale, this.scaleSpeed *= -1) : this.scale <= this.startScale && (this.scale = this.startScale, this.scaleSpeed = 0), this.life <= 0 && (this.life = 0))
            }, this.render = function(e, t, n) {
                e.fillStyle = this.color, e.font = this.scale + "px Hammersmith One", e.fillText(this.text, this.x - t, this.y - n)
            }
        }, e.exports.TextManager = function() {
            this.texts = [], this.update = function(e, t, n, i) {
                t.textBaseline = "middle", t.textAlign = "center";
                for (var o = 0; o < this.texts.length; ++o) this.texts[o].life && (this.texts[o].update(e), this.texts[o].render(t, n, i))
            }, this.showText = function(t, n, i, o, s, a, r) {
                for (var c, l = 0; l < this.texts.length; ++l)
                    if (!this.texts[l].life) {
                        c = this.texts[l];
                        break
                    } c || (c = new e.exports.AnimText, this.texts.push(c)), c.init(t, n, i, o, s, a, r)
            }
        }
    }, function(e, t) {
        e.exports = function(e) {
            this.sid = e, this.init = function(e, t, n, i, o, s, a) {
                s = s || {}, this.sentTo = {}, this.gridLocations = [], this.active = !0, this.doUpdate = s.doUpdate, this.x = e, this.y = t, this.dir = n, this.xWiggle = 0, this.yWiggle = 0, this.scale = i, this.type = o, this.id = s.id, this.owner = a, this.name = s.name, this.isItem = null != this.id, this.group = s.group, this.health = s.health, this.cHealth = this.health, this.layer = 2, null != this.group ? this.layer = this.group.layer : 0 == this.type ? this.layer = 3 : 2 == this.type ? this.layer = 0 : 4 == this.type && (this.layer = -1), this.colDiv = s.colDiv || 1, this.blocker = s.blocker, this.ignoreCollision = s.ignoreCollision, this.dontGather = s.dontGather, this.hideFromEnemy = s.hideFromEnemy, this.friction = s.friction, this.projDmg = s.projDmg, this.dmg = s.dmg, this.pDmg = s.pDmg, this.pps = s.pps, this.zIndex = s.zIndex || 0, this.turnSpeed = s.turnSpeed, this.req = s.req, this.trap = s.trap, this.healCol = s.healCol, this.teleport = s.teleport, this.boostSpeed = s.boostSpeed, this.projectile = s.projectile, this.shootRange = s.shootRange, this.shootRate = s.shootRate, this.shootCount = this.shootRate, this.spawnPoint = s.spawnPoint, this.lShot = 0
            }, this.changeHealth = function(e, t) {
                return this.health += e, this.health <= 0
            }, this.getScale = function(e, t) {
                return e = e || 1, this.scale * (this.isItem || 2 == this.type || 3 == this.type || 4 == this.type ? 1 : .6 * e) * (t ? 1 : this.colDiv)
            }, this.visibleToPlayer = function(e) {
                return !this.hideFromEnemy || this.owner && (this.owner == e || this.owner.team && e.team == this.owner.team)
            }, this.update = function(e) {
                this.active && (this.xWiggle && (this.xWiggle *= Math.pow(.99, e)), this.yWiggle && (this.yWiggle *= Math.pow(.99, e)), this.turnSpeed && (this.dir += this.turnSpeed * e))
            }
        }
    }, function(e, t) {
        e.exports.groups = [{
            id: 0,
            name: "food",
            layer: 0
        }, {
            id: 1,
            name: "walls",
            place: !0,
            limit: 30,
            layer: 0
        }, {
            id: 2,
            name: "spikes",
            place: !0,
            limit: 15,
            layer: 0
        }, {
            id: 3,
            name: "mill",
            place: !0,
            limit: 7,
            layer: 1
        }, {
            id: 4,
            name: "mine",
            place: !0,
            limit: 1,
            layer: 0
        }, {
            id: 5,
            name: "trap",
            place: !0,
            limit: 6,
            layer: -1
        }, {
            id: 6,
            name: "booster",
            place: !0,
            limit: 12,
            layer: -1
        }, {
            id: 7,
            name: "turret",
            place: !0,
            limit: 2,
            layer: 1
        }, {
            id: 8,
            name: "watchtower",
            place: !0,
            limit: 12,
            layer: 1
        }, {
            id: 9,
            name: "buff",
            place: !0,
            limit: 4,
            layer: -1
        }, {
            id: 10,
            name: "spawn",
            place: !0,
            limit: 1,
            layer: -1
        }, {
            id: 11,
            name: "sapling",
            place: !0,
            limit: 2,
            layer: 0
        }, {
            id: 12,
            name: "blocker",
            place: !0,
            limit: 3,
            layer: -1
        }, {
            id: 13,
            name: "teleporter",
            place: !0,
            limit: 2,
            layer: -1
        }], t.projectiles = [{
            indx: 0,
            layer: 0,
            src: "arrow_1",
            dmg: 25,
            speed: 1.6,
            scale: 103,
            range: 1e3
        }, {
            indx: 1,
            layer: 1,
            dmg: 25,
            scale: 20
        }, {
            indx: 0,
            layer: 0,
            src: "arrow_1",
            dmg: 35,
            speed: 2.5,
            scale: 103,
            range: 1200
        }, {
            indx: 0,
            layer: 0,
            src: "arrow_1",
            dmg: 30,
            speed: 2,
            scale: 103,
            range: 1200
        }, {
            indx: 1,
            layer: 1,
            dmg: 16,
            scale: 20
        }, {
            indx: 0,
            layer: 0,
            src: "bullet_1",
            dmg: 50,
            speed: 3.6,
            scale: 160,
            range: 1400
        }], t.weapons = [{
            id: 0,
            type: 0,
            name: "tool hammer",
            desc: "tool for gathering all resources",
            src: "hammer_1",
            length: 140,
            width: 140,
            xOff: -3,
            yOff: 18,
            dmg: 25,
            range: 65,
            gather: 1,
            speed: 300
        }, {
            id: 1,
            type: 0,
            age: 2,
            name: "hand axe",
            desc: "gathers resources at a higher rate",
            src: "axe_1",
            length: 140,
            width: 140,
            xOff: 3,
            yOff: 24,
            dmg: 30,
            spdMult: 1,
            range: 70,
            gather: 2,
            speed: 400
        }, {
            id: 2,
            type: 0,
            age: 8,
            name: "great axe",
            desc: "deal more damage and gather more resources",
            src: "great_axe_1",
            length: 140,
            width: 140,
            xOff: -8,
            yOff: 25,
            dmg: 35,
            spdMult: 1,
            range: 75,
            gather: 4,
            speed: 400
        }, {
            id: 3,
            type: 0,
            age: 2,
            name: "short sword",
            desc: "increased attack power but slower move speed",
            src: "sword_1",
            iPad: 1.3,
            length: 130,
            width: 210,
            xOff: -8,
            yOff: 46,
            dmg: 35,
            spdMult: .85,
            range: 110,
            gather: 1,
            speed: 300
        }, {
            id: 4,
            type: 0,
            age: 8,
            name: "katana",
            desc: "greater range and damage",
            src: "samurai_1",
            iPad: 1.3,
            length: 130,
            width: 210,
            xOff: -8,
            yOff: 59,
            dmg: 40,
            spdMult: .8,
            range: 118,
            gather: 1,
            speed: 300
        }, {
            id: 5,
            type: 0,
            age: 2,
            name: "polearm",
            desc: "long range melee weapon",
            src: "spear_1",
            iPad: 1.3,
            length: 130,
            width: 210,
            xOff: -8,
            yOff: 53,
            dmg: 45,
            knock: .2,
            spdMult: .82,
            range: 142,
            gather: 1,
            speed: 700
        }, {
            id: 6,
            type: 0,
            age: 2,
            name: "bat",
            desc: "fast long range melee weapon",
            src: "bat_1",
            iPad: 1.3,
            length: 110,
            width: 180,
            xOff: -8,
            yOff: 53,
            dmg: 20,
            knock: .7,
            range: 110,
            gather: 1,
            speed: 300
        }, {
            id: 7,
            type: 0,
            age: 2,
            name: "daggers",
            desc: "really fast short range weapon",
            src: "dagger_1",
            iPad: .8,
            length: 110,
            width: 110,
            xOff: 18,
            yOff: 0,
            dmg: 20,
            knock: .1,
            range: 65,
            gather: 1,
            hitSlow: .1,
            spdMult: 1.13,
            speed: 100
        }, {
            id: 8,
            type: 0,
            age: 2,
            name: "stick",
            desc: "great for gathering but very weak",
            src: "stick_1",
            length: 140,
            width: 140,
            xOff: 3,
            yOff: 24,
            dmg: 1,
            spdMult: 1,
            range: 70,
            gather: 7,
            speed: 400
        }, {
            id: 9,
            type: 1,
            age: 6,
            name: "hunting bow",
            desc: "bow used for ranged combat and hunting",
            src: "bow_1",
            req: ["wood", 4],
            length: 120,
            width: 120,
            xOff: -6,
            yOff: 0,
            projectile: 0,
            spdMult: .75,
            speed: 600,
            tPredict: 64
        }, {
            id: 10,
            type: 1,
            age: 6,
            name: "great hammer",
            desc: "hammer used for destroying structures",
            src: "great_hammer_1",
            length: 140,
            width: 140,
            xOff: -9,
            yOff: 25,
            dmg: 10,
            spdMult: .88,
            range: 75,
            sDmg: 7.5,
            gather: 1,
            speed: 400
        }, {
            id: 11,
            type: 1,
            age: 6,
            name: "wooden shield",
            desc: "blocks projectiles and reduces melee damage",
            src: "shield_1",
            length: 120,
            width: 120,
            shield: .2,
            xOff: 6,
            yOff: 0,
            spdMult: .7,
            speed: 1
        }, {
            id: 12,
            type: 1,
            age: 8,
            name: "crossbow",
            desc: "deals more damage and has greater range",
            src: "crossbow_1",
            req: ["wood", 5],
            aboveHand: !0,
            armS: .75,
            length: 120,
            width: 120,
            xOff: -4,
            yOff: 0,
            projectile: 2,
            spdMult: .7,
            speed: 700,
            tPredict: 100
        }, {
            id: 13,
            type: 1,
            age: 9,
            name: "repeater crossbow",
            desc: "high firerate crossbow with reduced damage",
            src: "crossbow_2",
            req: ["wood", 10],
            aboveHand: !0,
            armS: .75,
            length: 120,
            width: 120,
            xOff: -4,
            yOff: 0,
            projectile: 3,
            spdMult: .7,
            speed: 230,
            tPredict: 80
        }, {
            id: 14,
            type: 1,
            age: 6,
            name: "mc grabby",
            desc: "steals resources from enemies",
            src: "grab_1",
            length: 130,
            width: 210,
            xOff: -8,
            yOff: 53,
            dmg: 0,
            steal: 250,
            knock: .2,
            spdMult: 1.05,
            range: 125,
            gather: 0,
            speed: 700
        }, {
            id: 15,
            type: 1,
            age: 9,
            name: "musket",
            desc: "slow firerate but high damage and range",
            src: "musket_1",
            req: ["stone", 10],
            aboveHand: !0,
            rec: .35,
            armS: .6,
            hndS: .3,
            hndD: 1.6,
            length: 205,
            width: 205,
            xOff: 25,
            yOff: 0,
            projectile: 5,
            hideProjectile: !0,
            spdMult: .6,
            speed: 1500,
            tPredict: 144
        }], e.exports.list = [{
            group: e.exports.groups[0],
            name: "apple",
            desc: "restores 20 health when consumed",
            req: ["food", 10],
            consume: function(e) {
                return e.changeHealth(20, e)
            },
            scale: 22,
            holdOffset: 15
        }, {
            age: 3,
            group: e.exports.groups[0],
            name: "cookie",
            desc: "restores 40 health when consumed",
            req: ["food", 15],
            consume: function(e) {
                return e.changeHealth(40, e)
            },
            scale: 27,
            holdOffset: 15
        }, {
            age: 7,
            group: e.exports.groups[0],
            name: "cheese",
            desc: "restores 30 health and another 50 over 5 seconds",
            req: ["food", 25],
            consume: function(e) {
                return !!(e.changeHealth(30, e) || e.health < 100) && (e.dmgOverTime.dmg = -10, e.dmgOverTime.doer = e, e.dmgOverTime.time = 5, !0)
            },
            scale: 27,
            holdOffset: 15
        }, {
            group: e.exports.groups[1],
            name: "wood wall",
            desc: "provides protection for your village",
            req: ["wood", 10],
            projDmg: !0,
            health: 380,
            scale: 50,
            holdOffset: 20,
            placeOffset: -5
        }, {
            age: 3,
            group: e.exports.groups[1],
            name: "stone wall",
            desc: "provides improved protection for your village",
            req: ["stone", 25],
            health: 900,
            scale: 50,
            holdOffset: 20,
            placeOffset: -5
        }, {
            age: 7,
            group: e.exports.groups[1],
            name: "castle wall",
            desc: "provides powerful protection for your village",
            req: ["stone", 35],
            health: 1500,
            scale: 52,
            holdOffset: 20,
            placeOffset: -5
        }, {
            group: e.exports.groups[2],
            name: "spikes",
            desc: "damages enemies when they touch them",
            req: ["wood", 20, "stone", 5],
            health: 400,
            dmg: 20,
            scale: 49,
            spritePadding: -23,
            holdOffset: 8,
            placeOffset: -5
        }, {
            age: 5,
            group: e.exports.groups[2],
            name: "greater spikes",
            desc: "damages enemies when they touch them",
            req: ["wood", 30, "stone", 10],
            health: 500,
            dmg: 35,
            scale: 52,
            spritePadding: -23,
            holdOffset: 8,
            placeOffset: -5
        }, {
            age: 9,
            group: e.exports.groups[2],
            name: "poison spikes",
            desc: "poisons enemies when they touch them",
            req: ["wood", 35, "stone", 15],
            health: 600,
            dmg: 30,
            pDmg: 5,
            scale: 52,
            spritePadding: -23,
            holdOffset: 8,
            placeOffset: -5
        }, {
            age: 9,
            group: e.exports.groups[2],
            name: "spinning spikes",
            desc: "damages enemies when they touch them",
            req: ["wood", 30, "stone", 20],
            health: 500,
            dmg: 45,
            turnSpeed: .003,
            scale: 52,
            spritePadding: -23,
            holdOffset: 8,
            placeOffset: -5
        }, {
            group: e.exports.groups[3],
            name: "windmill",
            desc: "generates gold over time",
            req: ["wood", 50, "stone", 10],
            health: 400,
            pps: 1,
            turnSpeed: 0,
            spritePadding: 25,
            iconLineMult: 12,
            scale: 45,
            holdOffset: 20,
            placeOffset: 5
        }, {
            age: 5,
            group: e.exports.groups[3],
            name: "faster windmill",
            desc: "generates more gold over time",
            req: ["wood", 60, "stone", 20],
            health: 500,
            pps: 1.5,
            turnSpeed: 0,
            spritePadding: 25,
            iconLineMult: 12,
            scale: 47,
            holdOffset: 20,
            placeOffset: 5
        }, {
            age: 8,
            group: e.exports.groups[3],
            name: "power mill",
            desc: "generates more gold over time",
            req: ["wood", 100, "stone", 50],
            health: 800,
            pps: 2,
            turnSpeed: 0,
            spritePadding: 25,
            iconLineMult: 12,
            scale: 47,
            holdOffset: 20,
            placeOffset: 5
        }, {
            age: 5,
            group: e.exports.groups[4],
            type: 2,
            name: "mine",
            desc: "allows you to mine stone",
            req: ["wood", 20, "stone", 100],
            iconLineMult: 12,
            scale: 65,
            holdOffset: 20,
            placeOffset: 0
        }, {
            age: 5,
            group: e.exports.groups[11],
            type: 0,
            name: "sapling",
            desc: "allows you to farm wood",
            req: ["wood", 150],
            iconLineMult: 12,
            colDiv: .5,
            scale: 110,
            holdOffset: 50,
            placeOffset: -15
        }, {
            age: 4,
            group: e.exports.groups[5],
            name: "pit trap",
            desc: "pit that traps enemies if they walk over it",
            req: ["wood", 30, "stone", 30],
            trap: !0,
            ignoreCollision: !0,
            hideFromEnemy: !0,
            health: 500,
            colDiv: .2,
            scale: 50,
            holdOffset: 20,
            placeOffset: -5
        }, {
            age: 4,
            group: e.exports.groups[6],
            name: "boost pad",
            desc: "provides boost when stepped on",
            req: ["stone", 20, "wood", 5],
            ignoreCollision: !0,
            boostSpeed: 1.5,
            health: 150,
            colDiv: .7,
            scale: 45,
            holdOffset: 20,
            placeOffset: -5
        }, {
            age: 7,
            group: e.exports.groups[7],
            doUpdate: !0,
            name: "turret",
            desc: "defensive structure that shoots at enemies",
            req: ["wood", 200, "stone", 150],
            health: 800,
            projectile: 1,
            shootRange: 700,
            shootRate: 2200,
            scale: 43,
            holdOffset: 20,
            placeOffset: -5
        }, {
            age: 7,
            group: e.exports.groups[8],
            name: "platform",
            desc: "platform to shoot over walls and cross over water",
            req: ["wood", 20],
            ignoreCollision: !0,
            zIndex: 1,
            health: 300,
            scale: 43,
            holdOffset: 20,
            placeOffset: -5
        }, {
            age: 7,
            group: e.exports.groups[9],
            name: "healing pad",
            desc: "standing on it will slowly heal you",
            req: ["wood", 30, "food", 10],
            ignoreCollision: !0,
            healCol: 15,
            health: 400,
            colDiv: .7,
            scale: 45,
            holdOffset: 20,
            placeOffset: -5
        }, {
            age: 9,
            group: e.exports.groups[10],
            name: "spawn pad",
            desc: "you will spawn here when you die but it will dissapear",
            req: ["wood", 100, "stone", 100],
            health: 400,
            ignoreCollision: !0,
            spawnPoint: !0,
            scale: 45,
            holdOffset: 20,
            placeOffset: -5
        }, {
            age: 7,
            group: e.exports.groups[12],
            name: "blocker",
            desc: "blocks building in radius",
            req: ["wood", 30, "stone", 25],
            ignoreCollision: !0,
            blocker: 300,
            health: 400,
            colDiv: .7,
            scale: 45,
            holdOffset: 20,
            placeOffset: -5
        }, {
            age: 7,
            group: e.exports.groups[13],
            name: "teleporter",
            desc: "teleports you to a random point on the map",
            req: ["wood", 60, "stone", 60],
            ignoreCollision: !0,
            teleport: !0,
            health: 200,
            colDiv: .7,
            scale: 45,
            holdOffset: 20,
            placeOffset: -5
        }];
        for (var n = 0; n < e.exports.list.length; ++n) e.exports.list[n].id = n, e.exports.list[n].pre && (e.exports.list[n].pre = n - e.exports.list[n].pre)
    }, function(e, t) {
        e.exports = {}
    }, function(e, t) {
        var n = Math.floor,
            i = Math.abs,
            o = Math.cos,
            s = Math.sin,
            a = (Math.pow, Math.sqrt);
        e.exports = function(e, t, r, c, l, h) {
            var u, d;
            this.objects = t, this.grids = {}, this.updateObjects = [];
            var f = c.mapScale / c.colGrid;
            this.setObjectGrids = function(e) {
                for (var t = Math.min(c.mapScale, Math.max(0, e.x)), n = Math.min(c.mapScale, Math.max(0, e.y)), i = 0; i < c.colGrid; ++i) {
                    u = i * f;
                    for (var o = 0; o < c.colGrid; ++o) d = o * f, t + e.scale >= u && t - e.scale <= u + f && n + e.scale >= d && n - e.scale <= d + f && (this.grids[i + "_" + o] || (this.grids[i + "_" + o] = []), this.grids[i + "_" + o].push(e), e.gridLocations.push(i + "_" + o))
                }
            }, this.removeObjGrid = function(e) {
                for (var t, n = 0; n < e.gridLocations.length; ++n)(t = this.grids[e.gridLocations[n]].indexOf(e)) >= 0 && this.grids[e.gridLocations[n]].splice(t, 1)
            }, this.disableObj = function(e) {
                if (e.active = !1, h) {
                    e.owner && e.pps && (e.owner.pps -= e.pps), this.removeObjGrid(e);
                    var t = this.updateObjects.indexOf(e);
                    t >= 0 && this.updateObjects.splice(t, 1)
                }
            }, this.hitObj = function(e, t) {
                for (var n = 0; n < l.length; ++n) l[n].active && (e.sentTo[l[n].id] && (e.active ? l[n].canSee(e) && h.send(l[n].id, "8", r.fixTo(t, 1), e.sid) : h.send(l[n].id, "12", e.sid)), e.active || e.owner != l[n] || l[n].changeItemCount(e.group.id, -1))
            };
            var m, p, g = [];
            this.getGridArrays = function(e, t, i) {
                u = n(e / f), d = n(t / f), g.length = 0;
                try {
                    this.grids[u + "_" + d] && g.push(this.grids[u + "_" + d]), e + i >= (u + 1) * f && ((m = this.grids[u + 1 + "_" + d]) && g.push(m), d && t - i <= d * f ? (m = this.grids[u + 1 + "_" + (d - 1)]) && g.push(m) : t + i >= (d + 1) * f && (m = this.grids[u + 1 + "_" + (d + 1)]) && g.push(m)), u && e - i <= u * f && ((m = this.grids[u - 1 + "_" + d]) && g.push(m), d && t - i <= d * f ? (m = this.grids[u - 1 + "_" + (d - 1)]) && g.push(m) : t + i >= (d + 1) * f && (m = this.grids[u - 1 + "_" + (d + 1)]) && g.push(m)), t + i >= (d + 1) * f && (m = this.grids[u + "_" + (d + 1)]) && g.push(m), d && t - i <= d * f && (m = this.grids[u + "_" + (d - 1)]) && g.push(m)
                } catch (e) {}
                return g
            }, this.add = function(n, i, o, s, a, r, c, l, u) {
                p = null;
                for (var d = 0; d < t.length; ++d)
                    if (t[d].sid == n) {
                        p = t[d];
                        break
                    } if (!p)
                    for (d = 0; d < t.length; ++d)
                        if (!t[d].active) {
                            p = t[d];
                            break
                        } p || (p = new e(n), t.push(p)), l && (p.sid = n), p.init(i, o, s, a, r, c, u), h && (this.setObjectGrids(p), p.doUpdate && this.updateObjects.push(p))
            }, this.disableBySid = function(e) {
                for (var n = 0; n < t.length; ++n)
                    if (t[n].sid == e) {
                        this.disableObj(t[n]);
                        break
                    }
            }, this.removeAllItems = function(e, n) {
                for (var i = 0; i < t.length; ++i) t[i].active && t[i].owner && t[i].owner.sid == e && this.disableObj(t[i]);
                n && n.broadcast("13", e)
            }, this.fetchSpawnObj = function(e) {
                for (var n = null, i = 0; i < t.length; ++i)
                    if ((p = t[i]).active && p.owner && p.owner.sid == e && p.spawnPoint) {
                        n = [p.x, p.y], this.disableObj(p), h.broadcast("12", p.sid), p.owner && p.owner.changeItemCount(p.group.id, -1);
                        break
                    } return n
            }, this.checkItemLocation = function(e, n, i, o, s, a, l) {
                for (var h = 0; h < t.length; ++h) {
                    var u = t[h].blocker ? t[h].blocker : t[h].getScale(o, t[h].isItem);
                    if (t[h].active && r.getDistance(e, n, t[h].x, t[h].y) < i + u) return !1
                }
                return !(!a && 18 != s && n >= c.mapScale / 2 - c.riverWidth / 2 && n <= c.mapScale / 2 + c.riverWidth / 2)
            }, this.addProjectile = function(e, t, n, i, o) {
                for (var s, a = items.projectiles[o], c = 0; c < projectiles.length; ++c)
                    if (!projectiles[c].active) {
                        s = projectiles[c];
                        break
                    } s || (s = new Projectile(l, r), projectiles.push(s)), s.init(o, e, t, n, a.speed, i, a.scale)
            }, this.checkCollision = function(e, t, n) {
                n = n || 1;
                var l = e.x - t.x,
                    h = e.y - t.y,
                    u = e.scale + t.scale;
                if (i(l) <= u || i(h) <= u) {
                    u = e.scale + (t.getScale ? t.getScale() : t.scale);
                    var d = a(l * l + h * h) - u;
                    if (d <= 0) {
                        if (t.ignoreCollision) !t.trap || e.noTrap || t.owner == e || t.owner && t.owner.team && t.owner.team == e.team ? t.boostSpeed ? (e.xVel += n * t.boostSpeed * (t.weightM || 1) * o(t.dir), e.yVel += n * t.boostSpeed * (t.weightM || 1) * s(t.dir)) : t.healCol ? e.healCol = t.healCol : t.teleport && (e.x = r.randInt(0, c.mapScale), e.y = r.randInt(0, c.mapScale)) : (e.lockMove = !0, t.hideFromEnemy = !1);
                        else {
                            var f = r.getDirection(e.x, e.y, t.x, t.y);
                            if (r.getDistance(e.x, e.y, t.x, t.y), t.isPlayer ? (d = -1 * d / 2, e.x += d * o(f), e.y += d * s(f), t.x -= d * o(f), t.y -= d * s(f)) : (e.x = t.x + u * o(f), e.y = t.y + u * s(f), e.xVel *= .75, e.yVel *= .75), t.dmg && t.owner != e && (!t.owner || !t.owner.team || t.owner.team != e.team)) {
                                e.changeHealth(-t.dmg, t.owner, t);
                                var m = 1.5 * (t.weightM || 1);
                                e.xVel += m * o(f), e.yVel += m * s(f), !t.pDmg || e.skin && e.skin.poisonRes || (e.dmgOverTime.dmg = t.pDmg, e.dmgOverTime.time = 5, e.dmgOverTime.doer = t.owner), e.colDmg && t.health && (t.changeHealth(-e.colDmg) && this.disableObj(t), this.hitObj(t, r.getDirection(e.x, e.y, t.x, t.y)))
                            }
                        }
                        return t.zIndex > e.zIndex && (e.zIndex = t.zIndex), !0
                    }
                }
                return !1
            }
        }
    }, function(e, t, n) {
        var i = new(n(49));
        i.addWords("jew", "black", "baby", "child", "white", "porn", "pedo", "trump", "clinton", "hitler", "nazi", "gay", "pride", "sex", "pleasure", "touch", "poo", "kids", "rape", "white power", "nigga", "nig nog", "doggy", "rapist", "boner", "nigger", "nigg", "finger", "nogger", "nagger", "nig", "fag", "gai", "pole", "stripper", "penis", "vagina", "pussy", "nazi", "hitler", "stalin", "burn", "chamber", "cock", "peen", "dick", "spick", "nieger", "die", "satan", "n|ig", "nlg", "cunt", "c0ck", "fag", "lick", "condom", "anal", "shit", "phile", "little", "kids", "free KR", "tiny", "sidney", "ass", "kill", ".io", "(dot)", "[dot]", "mini", "whiore", "whore", "faggot", "github", "1337", "666", "satan", "senpa", "discord", "d1scord", "mistik", ".io", "senpa.io", "sidney", "sid", "senpaio", "vries", "asa");
        var o = Math.abs,
            s = Math.cos,
            a = Math.sin,
            r = Math.pow,
            c = Math.sqrt;
        e.exports = function(e, t, n, l, h, u, d, f, m, p, g, y, w, v) {
            this.id = e, this.sid = t, this.tmpScore = 0, this.team = null, this.skinIndex = 0, this.tailIndex = 0, this.hitTime = 0, this.tails = {};
            for (var k = 0; k < g.length; ++k) g[k].price <= 0 && (this.tails[g[k].id] = 1);
            for (this.skins = {}, k = 0; k < p.length; ++k) p[k].price <= 0 && (this.skins[p[k].id] = 1);
            this.points = 0, this.dt = 0, this.hidden = !1, this.itemCounts = {}, this.isPlayer = !0, this.pps = 0, this.moveDir = void 0, this.skinRot = 0, this.lastPing = 0, this.iconIndex = 0, this.skinColor = 0, this.spawn = function(e) {
                this.active = !0, this.alive = !0, this.lockMove = !1, this.lockDir = !1, this.minimapCounter = 0, this.chatCountdown = 0, this.shameCount = 0, this.shameTimer = 0, this.sentTo = {}, this.gathering = 0, this.autoGather = 0, this.animTime = 0, this.animSpeed = 0, this.mouseState = 0, this.buildIndex = -1, this.weaponIndex = 0, this.dmgOverTime = {}, this.noMovTimer = 0, this.maxXP = 300, this.XP = 0, this.age = 1, this.kills = 0, this.upgrAge = 2, this.upgradePoints = 0, this.x = 0, this.y = 0, this.zIndex = 0, this.xVel = 0, this.yVel = 0, this.slowMult = 1, this.dir = 0, this.dirPlus = 0, this.targetDir = 0, this.targetAngle = 0, this.maxHealth = 100, this.health = this.maxHealth, this.scale = n.playerScale, this.speed = n.playerSpeed, this.resetMoveDir(), this.resetResources(e), this.items = [0, 3, 6, 10], this.weapons = [0], this.shootCount = 0, this.weaponXP = [], this.reloads = {}
            }, this.resetMoveDir = function() {
                this.moveDir = void 0
            }, this.resetResources = function(e) {
                for (var t = 0; t < n.resourceTypes.length; ++t) this[n.resourceTypes[t]] = e ? 100 : 0
            }, this.addItem = function(e) {
                var t = m.list[e];
                if (t) {
                    for (var n = 0; n < this.items.length; ++n)
                        if (m.list[this.items[n]].group == t.group) return this.buildIndex == this.items[n] && (this.buildIndex = e), this.items[n] = e, !0;
                    return this.items.push(e), !0
                }
                return !1
            }, this.setUserData = function(e) {
                if (e) {
                    this.name = "unknown";
                    var t = e.name + "",
                        o = !1,
                        s = (t = (t = (t = (t = t.slice(0, n.maxNameLength)).replace(/[^\w:\(\)\/? -]+/gim, " ")).replace(/[^\x00-\x7F]/g, " ")).trim()).toLowerCase().replace(/\s/g, "").replace(/1/g, "i").replace(/0/g, "o").replace(/5/g, "s");
                    for (var a of i.list)
                        if (-1 != s.indexOf(a)) {
                            o = !0;
                            break
                        } t.length > 0 && !o && (this.name = t), this.skinColor = 0, n.skinColors[e.skin] && (this.skinColor = e.skin)
                }
            }, this.getData = function() {
                return [this.id, this.sid, this.name, l.fixTo(this.x, 2), l.fixTo(this.y, 2), l.fixTo(this.dir, 3), this.health, this.maxHealth, this.scale, this.skinColor]
            }, this.setData = function(e) {
                this.id = e[0], this.sid = e[1], this.name = e[2], this.x = e[3], this.y = e[4], this.dir = e[5], this.health = e[6], this.maxHealth = e[7], this.scale = e[8], this.skinColor = e[9]
            };
            var b = 0;
            this.update = function(e) {
                if (this.alive) {
                    if (this.shameTimer > 0 && (this.shameTimer -= e, this.shameTimer <= 0 && (this.shameTimer = 0, this.shameCount = 0)), (b -= e) <= 0) {
                        var t = (this.skin && this.skin.healthRegen ? this.skin.healthRegen : 0) + (this.tail && this.tail.healthRegen ? this.tail.healthRegen : 0);
                        t && this.changeHealth(t, this), this.dmgOverTime.dmg && (this.changeHealth(-this.dmgOverTime.dmg, this.dmgOverTime.doer), this.dmgOverTime.time -= 1, this.dmgOverTime.time <= 0 && (this.dmgOverTime.dmg = 0)), this.healCol && this.changeHealth(this.healCol, this), b = 1e3
                    }
                    if (this.alive) {
                        if (this.slowMult < 1 && (this.slowMult += 8e-4 * e, this.slowMult > 1 && (this.slowMult = 1)), this.noMovTimer += e, (this.xVel || this.yVel) && (this.noMovTimer = 0), this.lockMove) this.xVel = 0, this.yVel = 0;
                        else {
                            var i = (this.buildIndex >= 0 ? .5 : 1) * (m.weapons[this.weaponIndex].spdMult || 1) * (this.skin && this.skin.spdMult || 1) * (this.tail && this.tail.spdMult || 1) * (this.y <= n.snowBiomeTop ? this.skin && this.skin.coldM ? 1 : n.snowSpeed : 1) * this.slowMult;
                            !this.zIndex && this.y >= n.mapScale / 2 - n.riverWidth / 2 && this.y <= n.mapScale / 2 + n.riverWidth / 2 && (this.skin && this.skin.watrImm ? (i *= .75, this.xVel += .4 * n.waterCurrent * e) : (i *= .33, this.xVel += n.waterCurrent * e));
                            var o = null != this.moveDir ? s(this.moveDir) : 0,
                                f = null != this.moveDir ? a(this.moveDir) : 0,
                                p = c(o * o + f * f);
                            0 != p && (o /= p, f /= p), o && (this.xVel += o * this.speed * i * e), f && (this.yVel += f * this.speed * i * e)
                        }
                        var g;
                        this.zIndex = 0, this.lockMove = !1, this.healCol = 0;
                        for (var y = l.getDistance(0, 0, this.xVel * e, this.yVel * e), w = Math.min(4, Math.max(1, Math.round(y / 40))), v = 1 / w, k = 0; k < w; ++k) {
                            this.xVel && (this.x += this.xVel * e * v), this.yVel && (this.y += this.yVel * e * v), g = u.getGridArrays(this.x, this.y, this.scale);
                            for (var x = 0; x < g.length; ++x)
                                for (var T = 0; T < g[x].length; ++T) g[x][T].active && u.checkCollision(this, g[x][T], v)
                        }
                        for (k = (E = d.indexOf(this)) + 1; k < d.length; ++k) d[k] != this && d[k].alive && u.checkCollision(this, d[k]);
                        if (this.xVel && (this.xVel *= r(n.playerDecel, e), this.xVel <= .01 && this.xVel >= -.01 && (this.xVel = 0)), this.yVel && (this.yVel *= r(n.playerDecel, e), this.yVel <= .01 && this.yVel >= -.01 && (this.yVel = 0)), this.x - this.scale < 0 ? this.x = this.scale : this.x + this.scale > n.mapScale && (this.x = n.mapScale - this.scale), this.y - this.scale < 0 ? this.y = this.scale : this.y + this.scale > n.mapScale && (this.y = n.mapScale - this.scale), this.buildIndex < 0)
                            if (this.reloads[this.weaponIndex] > 0) this.reloads[this.weaponIndex] -= e, this.gathering = this.mouseState;
                            else if (this.gathering || this.autoGather) {
                            var I = !0;
                            if (null != m.weapons[this.weaponIndex].gather) this.gather(d);
                            else if (null != m.weapons[this.weaponIndex].projectile && this.hasRes(m.weapons[this.weaponIndex], this.skin ? this.skin.projCost : 0)) {
                                this.useRes(m.weapons[this.weaponIndex], this.skin ? this.skin.projCost : 0), this.noMovTimer = 0;
                                var E = m.weapons[this.weaponIndex].projectile,
                                    M = 2 * this.scale,
                                    C = this.skin && this.skin.aMlt ? this.skin.aMlt : 1;
                                m.weapons[this.weaponIndex].rec && (this.xVel -= m.weapons[this.weaponIndex].rec * s(this.dir), this.yVel -= m.weapons[this.weaponIndex].rec * a(this.dir)), h.addProjectile(this.x + M * s(this.dir), this.y + M * a(this.dir), this.dir, m.projectiles[E].range * C, m.projectiles[E].speed * C, E, this, null, this.zIndex)
                            } else I = !1;
                            this.gathering = this.mouseState, I && (this.reloads[this.weaponIndex] = m.weapons[this.weaponIndex].speed * (this.skin && this.skin.atkSpd || 1))
                        }
                    }
                }
            }, this.addWeaponXP = function(e) {
                this.weaponXP[this.weaponIndex] || (this.weaponXP[this.weaponIndex] = 0), this.weaponXP[this.weaponIndex] += e
            }, this.earnXP = function(e) {
                this.age < n.maxAge && (this.XP += e, this.XP >= this.maxXP ? (this.age < n.maxAge ? (this.age++, this.XP = 0, this.maxXP *= 1.2) : this.XP = this.maxXP, this.upgradePoints++, y.send(this.id, "16", this.upgradePoints, this.upgrAge), y.send(this.id, "15", this.XP, l.fixTo(this.maxXP, 1), this.age)) : y.send(this.id, "15", this.XP))
            }, this.changeHealth = function(e, t) {
                if (e > 0 && this.health >= this.maxHealth) return !1;
                e < 0 && this.skin && (e *= this.skin.dmgMult || 1), e < 0 && this.tail && (e *= this.tail.dmgMult || 1), e < 0 && (this.hitTime = Date.now()), this.health += e, this.health > this.maxHealth && (e -= this.health - this.maxHealth, this.health = this.maxHealth), this.health <= 0 && this.kill(t);
                for (var n = 0; n < d.length; ++n) this.sentTo[d[n].id] && y.send(d[n].id, "h", this.sid, Math.round(this.health));
                return !t || !t.canSee(this) || t == this && e < 0 || y.send(t.id, "t", Math.round(this.x), Math.round(this.y), Math.round(-e), 1), !0
            }, this.kill = function(e) {
                e && e.alive && (e.kills++, e.skin && e.skin.goldSteal ? w(e, Math.round(this.points / 2)) : w(e, Math.round(100 * this.age * (e.skin && e.skin.kScrM ? e.skin.kScrM : 1))), y.send(e.id, "9", "kills", e.kills, 1)), this.alive = !1, y.send(this.id, "11"), v()
            }, this.addResource = function(e, t, i) {
                !i && t > 0 && this.addWeaponXP(t), 3 == e ? w(this, t, !0) : (this[n.resourceTypes[e]] += t, y.send(this.id, "9", n.resourceTypes[e], this[n.resourceTypes[e]], 1))
            }, this.changeItemCount = function(e, t) {
                this.itemCounts[e] = this.itemCounts[e] || 0, this.itemCounts[e] += t, y.send(this.id, "14", e, this.itemCounts[e])
            }, this.buildItem = function(e) {
                var t = this.scale + e.scale + (e.placeOffset || 0),
                    n = this.x + t * s(this.dir),
                    i = this.y + t * a(this.dir);
                if (this.canBuild(e) && !(e.consume && this.skin && this.skin.noEat) && (e.consume || u.checkItemLocation(n, i, e.scale, .6, e.id, !1, this))) {
                    var o = !1;
                    if (e.consume) {
                        if (this.hitTime) {
                            var r = Date.now() - this.hitTime;
                            this.hitTime = 0, r <= 120 ? (this.shameCount++, this.shameCount >= 8 && (this.shameTimer = 3e4, this.shameCount = 0)) : (this.shameCount -= 2, this.shameCount <= 0 && (this.shameCount = 0))
                        }
                        this.shameTimer <= 0 && (o = e.consume(this))
                    } else o = !0, e.group.limit && this.changeItemCount(e.group.id, 1), e.pps && (this.pps += e.pps), u.add(u.objects.length, n, i, this.dir, e.scale, e.type, e, !1, this);
                    o && (this.useRes(e), this.buildIndex = -1)
                }
            }, this.hasRes = function(e, t) {
                for (var n = 0; n < e.req.length;) {
                    if (this[e.req[n]] < Math.round(e.req[n + 1] * (t || 1))) return !1;
                    n += 2
                }
                return !0
            }, this.useRes = function(e, t) {
                if (!n.inSandbox)
                    for (var i = 0; i < e.req.length;) this.addResource(n.resourceTypes.indexOf(e.req[i]), -Math.round(e.req[i + 1] * (t || 1))), i += 2
            }, this.canBuild = function(e) {
                return !!n.inSandbox || !(e.group.limit && this.itemCounts[e.group.id] >= e.group.limit) && this.hasRes(e)
            }, this.gather = function() {
                this.noMovTimer = 0, this.slowMult -= m.weapons[this.weaponIndex].hitSlow || .3, this.slowMult < 0 && (this.slowMult = 0);
                for (var e, t, i, o = n.fetchVariant(this), r = o.poison, c = o.val, h = {}, p = u.getGridArrays(this.x, this.y, m.weapons[this.weaponIndex].range), g = 0; g < p.length; ++g)
                    for (var y = 0; y < p[g].length; ++y)
                        if ((t = p[g][y]).active && !t.dontGather && !h[t.sid] && t.visibleToPlayer(this) && l.getDistance(this.x, this.y, t.x, t.y) - t.scale <= m.weapons[this.weaponIndex].range && (e = l.getDirection(t.x, t.y, this.x, this.y), l.getAngleDist(e, this.dir) <= n.gatherAngle)) {
                            if (h[t.sid] = 1, t.health) {
                                if (t.changeHealth(-m.weapons[this.weaponIndex].dmg * c * (m.weapons[this.weaponIndex].sDmg || 1) * (this.skin && this.skin.bDmg ? this.skin.bDmg : 1), this)) {
                                    for (var w = 0; w < t.req.length;) this.addResource(n.resourceTypes.indexOf(t.req[w]), t.req[w + 1]), w += 2;
                                    u.disableObj(t)
                                }
                            } else {
                                this.earnXP(4 * m.weapons[this.weaponIndex].gather);
                                var v = m.weapons[this.weaponIndex].gather + (3 == t.type ? 4 : 0);
                                this.skin && this.skin.extraGold && this.addResource(3, 1), this.addResource(t.type, v)
                            }
                            i = !0, u.hitObj(t, e)
                        } for (y = 0; y < d.length + f.length; ++y)
                    if ((t = d[y] || f[y - d.length]) != this && t.alive && (!t.team || t.team != this.team) && l.getDistance(this.x, this.y, t.x, t.y) - 1.8 * t.scale <= m.weapons[this.weaponIndex].range && (e = l.getDirection(t.x, t.y, this.x, this.y), l.getAngleDist(e, this.dir) <= n.gatherAngle)) {
                        var k = m.weapons[this.weaponIndex].steal;
                        k && t.addResource && (k = Math.min(t.points || 0, k), this.addResource(3, k), t.addResource(3, -k));
                        var b = c;
                        null != t.weaponIndex && m.weapons[t.weaponIndex].shield && l.getAngleDist(e + Math.PI, t.dir) <= n.shieldAngle && (b = m.weapons[t.weaponIndex].shield);
                        var x = m.weapons[this.weaponIndex].dmg * (this.skin && this.skin.dmgMultO ? this.skin.dmgMultO : 1) * (this.tail && this.tail.dmgMultO ? this.tail.dmgMultO : 1),
                            T = .3 * (t.weightM || 1) + (m.weapons[this.weaponIndex].knock || 0);
                        t.xVel += T * s(e), t.yVel += T * a(e), this.skin && this.skin.healD && this.changeHealth(x * b * this.skin.healD, this), this.tail && this.tail.healD && this.changeHealth(x * b * this.tail.healD, this), t.skin && t.skin.dmg && 1 == b && this.changeHealth(-x * t.skin.dmg, t), t.tail && t.tail.dmg && 1 == b && this.changeHealth(-x * t.tail.dmg, t), !(t.dmgOverTime && this.skin && this.skin.poisonDmg) || t.skin && t.skin.poisonRes || (t.dmgOverTime.dmg = this.skin.poisonDmg, t.dmgOverTime.time = this.skin.poisonTime || 1, t.dmgOverTime.doer = this), !t.dmgOverTime || !r || t.skin && t.skin.poisonRes || (t.dmgOverTime.dmg = 5, t.dmgOverTime.time = 5, t.dmgOverTime.doer = this), t.skin && t.skin.dmgK && (this.xVel -= t.skin.dmgK * s(e), this.yVel -= t.skin.dmgK * a(e)), t.changeHealth(-x * b, this, this)
                    } this.sendAnimation(i ? 1 : 0)
            }, this.sendAnimation = function(e) {
                for (var t = 0; t < d.length; ++t) this.sentTo[d[t].id] && this.canSee(d[t]) && y.send(d[t].id, "7", this.sid, e ? 1 : 0, this.weaponIndex)
            };
            var x = 0,
                T = 0;
            this.animate = function(e) {
                this.animTime > 0 && (this.animTime -= e, this.animTime <= 0 ? (this.animTime = 0, this.dirPlus = 0, x = 0, T = 0) : 0 == T ? (x += e / (this.animSpeed * n.hitReturnRatio), this.dirPlus = l.lerp(0, this.targetAngle, Math.min(1, x)), x >= 1 && (x = 1, T = 1)) : (x -= e / (this.animSpeed * (1 - n.hitReturnRatio)), this.dirPlus = l.lerp(0, this.targetAngle, Math.max(0, x))))
            }, this.startAnim = function(e, t) {
                this.animTime = this.animSpeed = m.weapons[t].speed, this.targetAngle = e ? -n.hitAngle : -Math.PI, x = 0, T = 0
            }, this.canSee = function(e) {
                if (!e) return !1;
                if (e.skin && e.skin.invisTimer && e.noMovTimer >= e.skin.invisTimer) return !1;
                var t = o(e.x - this.x) - e.scale,
                    i = o(e.y - this.y) - e.scale;
                return t <= n.maxScreenWidth / 2 * 1.3 && i <= n.maxScreenHeight / 2 * 1.3
            }
        }
    }, function(e, t, n) {
        const i = n(50).words,
            o = n(51).array;
        e.exports = class {
            constructor(e = {}) {
                Object.assign(this, {
                    list: e.emptyList && [] || Array.prototype.concat.apply(i, [o, e.list || []]),
                    exclude: e.exclude || [],
                    placeHolder: e.placeHolder || "*",
                    regex: e.regex || /[^a-zA-Z0-9|\$|\@]|\^/g,
                    replaceRegex: e.replaceRegex || /\w/g
                })
            }
            isProfane(e) {
                return this.list.filter((t => {
                    const n = new RegExp(`\\b${t.replace(/(\W)/g,"\\$1")}\\b`, "gi");
                    return !this.exclude.includes(t.toLowerCase()) && n.test(e)
                })).length > 0 || !1
            }
            replaceWord(e) {
                return e.replace(this.regex, "").replace(this.replaceRegex, this.placeHolder)
            }
            clean(e) {
                return e.split(/\b/).map((e => this.isProfane(e) ? this.replaceWord(e) : e)).join("")
            }
            addWords() {
                let e = Array.from(arguments);
                this.list.push(...e), e.map((e => e.toLowerCase())).forEach((e => {
                    this.exclude.includes(e) && this.exclude.splice(this.exclude.indexOf(e), 1)
                }))
            }
            removeWords() {
                this.exclude.push(...Array.from(arguments).map((e => e.toLowerCase())))
            }
        }
    }, function(e) {
        e.exports = {
            words: ["ahole", "anus", "ash0le", "ash0les", "asholes", "ass", "Ass Monkey", "Assface", "assh0le", "assh0lez", "asshole", "assholes", "assholz", "asswipe", "azzhole", "bassterds", "bastard", "bastards", "bastardz", "basterds", "basterdz", "Biatch", "bitch", "bitches", "Blow Job", "boffing", "butthole", "buttwipe", "c0ck", "c0cks", "c0k", "Carpet Muncher", "cawk", "cawks", "Clit", "cnts", "cntz", "cock", "cockhead", "cock-head", "cocks", "CockSucker", "cock-sucker", "crap", "cum", "cunt", "cunts", "cuntz", "dick", "dild0", "dild0s", "dildo", "dildos", "dilld0", "dilld0s", "dominatricks", "dominatrics", "dominatrix", "dyke", "enema", "f u c k", "f u c k e r", "fag", "fag1t", "faget", "fagg1t", "faggit", "faggot", "fagg0t", "fagit", "fags", "fagz", "faig", "faigs", "fart", "flipping the bird", "fuck", "fucker", "fuckin", "fucking", "fucks", "Fudge Packer", "fuk", "Fukah", "Fuken", "fuker", "Fukin", "Fukk", "Fukkah", "Fukken", "Fukker", "Fukkin", "g00k", "God-damned", "h00r", "h0ar", "h0re", "hells", "hoar", "hoor", "hoore", "jackoff", "jap", "japs", "jerk-off", "jisim", "jiss", "jizm", "jizz", "knob", "knobs", "knobz", "kunt", "kunts", "kuntz", "Lezzian", "Lipshits", "Lipshitz", "masochist", "masokist", "massterbait", "masstrbait", "masstrbate", "masterbaiter", "masterbate", "masterbates", "Motha Fucker", "Motha Fuker", "Motha Fukkah", "Motha Fukker", "Mother Fucker", "Mother Fukah", "Mother Fuker", "Mother Fukkah", "Mother Fukker", "mother-fucker", "Mutha Fucker", "Mutha Fukah", "Mutha Fuker", "Mutha Fukkah", "Mutha Fukker", "n1gr", "nastt", "nigger;", "nigur;", "niiger;", "niigr;", "orafis", "orgasim;", "orgasm", "orgasum", "oriface", "orifice", "orifiss", "packi", "packie", "packy", "paki", "pakie", "paky", "pecker", "peeenus", "peeenusss", "peenus", "peinus", "pen1s", "penas", "penis", "penis-breath", "penus", "penuus", "Phuc", "Phuck", "Phuk", "Phuker", "Phukker", "polac", "polack", "polak", "Poonani", "pr1c", "pr1ck", "pr1k", "pusse", "pussee", "pussy", "puuke", "puuker", "queer", "queers", "queerz", "qweers", "qweerz", "qweir", "recktum", "rectum", "retard", "sadist", "scank", "schlong", "screwing", "semen", "sex", "sexy", "Sh!t", "sh1t", "sh1ter", "sh1ts", "sh1tter", "sh1tz", "shit", "shits", "shitter", "Shitty", "Shity", "shitz", "Shyt", "Shyte", "Shytty", "Shyty", "skanck", "skank", "skankee", "skankey", "skanks", "Skanky", "slag", "slut", "sluts", "Slutty", "slutz", "son-of-a-bitch", "tit", "turd", "va1jina", "vag1na", "vagiina", "vagina", "vaj1na", "vajina", "vullva", "vulva", "w0p", "wh00r", "wh0re", "whore", "xrated", "xxx", "b!+ch", "bitch", "blowjob", "clit", "arschloch", "fuck", "shit", "ass", "asshole", "b!tch", "b17ch", "b1tch", "bastard", "bi+ch", "boiolas", "buceta", "c0ck", "cawk", "chink", "cipa", "clits", "cock", "cum", "cunt", "dildo", "dirsa", "ejakulate", "fatass", "fcuk", "fuk", "fux0r", "hoer", "hore", "jism", "kawk", "l3itch", "l3i+ch", "lesbian", "masturbate", "masterbat*", "masterbat3", "motherfucker", "s.o.b.", "mofo", "nazi", "nigga", "nigger", "nutsack", "phuck", "pimpis", "pusse", "pussy", "scrotum", "sh!t", "shemale", "shi+", "sh!+", "slut", "smut", "teets", "tits", "boobs", "b00bs", "teez", "testical", "testicle", "titt", "w00se", "jackoff", "wank", "whoar", "whore", "*damn", "*dyke", "*fuck*", "*shit*", "@$$", "amcik", "andskota", "arse*", "assrammer", "ayir", "bi7ch", "bitch*", "bollock*", "breasts", "butt-pirate", "cabron", "cazzo", "chraa", "chuj", "Cock*", "cunt*", "d4mn", "daygo", "dego", "dick*", "dike*", "dupa", "dziwka", "ejackulate", "Ekrem*", "Ekto", "enculer", "faen", "fag*", "fanculo", "fanny", "feces", "feg", "Felcher", "ficken", "fitt*", "Flikker", "foreskin", "Fotze", "Fu(*", "fuk*", "futkretzn", "gook", "guiena", "h0r", "h4x0r", "hell", "helvete", "hoer*", "honkey", "Huevon", "hui", "injun", "jizz", "kanker*", "kike", "klootzak", "kraut", "knulle", "kuk", "kuksuger", "Kurac", "kurwa", "kusi*", "kyrpa*", "lesbo", "mamhoon", "masturbat*", "merd*", "mibun", "monkleigh", "mouliewop", "muie", "mulkku", "muschi", "nazis", "nepesaurio", "nigger*", "orospu", "paska*", "perse", "picka", "pierdol*", "pillu*", "pimmel", "piss*", "pizda", "poontsee", "poop", "porn", "p0rn", "pr0n", "preteen", "pula", "pule", "puta", "puto", "qahbeh", "queef*", "rautenberg", "schaffer", "scheiss*", "schlampe", "schmuck", "screw", "sh!t*", "sharmuta", "sharmute", "shipal", "shiz", "skribz", "skurwysyn", "sphencter", "spic", "spierdalaj", "splooge", "suka", "b00b*", "testicle*", "titt*", "twat", "vittu", "wank*", "wetback*", "wichser", "wop*", "yed", "zabourah"]
        }
    }, function(e, t, n) {
        e.exports = {
            object: n(52),
            array: n(53),
            regex: n(54)
        }
    }, function(e, t) {
        e.exports = {
            "skid": 1
        }
    }, function(e, t) {
        e.exports = []
    }, function(e, t) {
        e.exports = ""
    }, function(e, t) {
        e.exports.hats = [{
            id: 45,
            name: "Shame!",
            dontSell: !0,
            price: 0,
            scale: 120,
            desc: "hacks are for losers"
        }, {
            id: 51,
            name: "Moo Cap",
            price: 0,
            scale: 120,
            desc: "coolest mooer around"
        }, {
            id: 50,
            name: "Apple Cap",
            price: 0,
            scale: 120,
            desc: "apple farms remembers"
        }, {
            id: 28,
            name: "Moo Head",
            price: 0,
            scale: 120,
            desc: "no effect"
        }, {
            id: 29,
            name: "Pig Head",
            price: 0,
            scale: 120,
            desc: "no effect"
        }, {
            id: 30,
            name: "Fluff Head",
            price: 0,
            scale: 120,
            desc: "no effect"
        }, {
            id: 36,
            name: "Pandou Head",
            price: 0,
            scale: 120,
            desc: "no effect"
        }, {
            id: 37,
            name: "Bear Head",
            price: 0,
            scale: 120,
            desc: "no effect"
        }, {
            id: 38,
            name: "Monkey Head",
            price: 0,
            scale: 120,
            desc: "no effect"
        }, {
            id: 44,
            name: "Polar Head",
            price: 0,
            scale: 120,
            desc: "no effect"
        }, {
            id: 35,
            name: "Fez Hat",
            price: 0,
            scale: 120,
            desc: "no effect"
        }, {
            id: 42,
            name: "Enigma Hat",
            price: 0,
            scale: 120,
            desc: "join the enigma army"
        }, {
            id: 43,
            name: "Blitz Hat",
            price: 0,
            scale: 120,
            desc: "hey everybody i'm blitz"
        }, {
            id: 49,
            name: "Bob XIII Hat",
            price: 0,
            scale: 120,
            desc: "like and subscribe"
        }, {
            id: 57,
            name: "Pumpkin",
            price: 50,
            scale: 120,
            desc: "Spooooky"
        }, {
            id: 8,
            name: "Bummle Hat",
            price: 100,
            scale: 120,
            desc: "no effect"
        }, {
            id: 2,
            name: "Straw Hat",
            price: 500,
            scale: 120,
            desc: "no effect"
        }, {
            id: 15,
            name: "Winter Cap",
            price: 600,
            scale: 120,
            desc: "allows you to move at normal speed in snow",
            coldM: 1
        }, {
            id: 5,
            name: "Cowboy Hat",
            price: 1e3,
            scale: 120,
            desc: "no effect"
        }, {
            id: 4,
            name: "Ranger Hat",
            price: 2e3,
            scale: 120,
            desc: "no effect"
        }, {
            id: 18,
            name: "Explorer Hat",
            price: 2e3,
            scale: 120,
            desc: "no effect"
        }, {
            id: 31,
            name: "Flipper Hat",
            price: 2500,
            scale: 120,
            desc: "have more control while in water",
            watrImm: !0
        }, {
            id: 1,
            name: "Marksman Cap",
            price: 3e3,
            scale: 120,
            desc: "increases arrow speed and range",
            aMlt: 1.3
        }, {
            id: 10,
            name: "Bush Gear",
            price: 3e3,
            scale: 160,
            desc: "allows you to disguise yourself as a bush"
        }, {
            id: 48,
            name: "Halo",
            price: 3e3,
            scale: 120,
            desc: "no effect"
        }, {
            id: 6,
            name: "Soldier Helmet",
            price: 4e3,
            scale: 120,
            desc: "reduces damage taken but slows movement",
            spdMult: .94,
            dmgMult: .75
        }, {
            id: 23,
            name: "Anti Venom Gear",
            price: 4e3,
            scale: 120,
            desc: "makes you immune to poison",
            poisonRes: 1
        }, {
            id: 13,
            name: "Medic Gear",
            price: 5e3,
            scale: 110,
            desc: "slowly regenerates health over time",
            healthRegen: 3
        }, {
            id: 9,
            name: "Miners Helmet",
            price: 5e3,
            scale: 120,
            desc: "earn 1 extra gold per resource",
            extraGold: 1
        }, {
            id: 32,
            name: "Musketeer Hat",
            price: 5e3,
            scale: 120,
            desc: "reduces cost of projectiles",
            projCost: .5
        }, {
            id: 7,
            name: "Bull Helmet",
            price: 6e3,
            scale: 120,
            desc: "increases damage done but drains health",
            healthRegen: -5,
            dmgMultO: 1.5,
            spdMult: .96
        }, {
            id: 22,
            name: "Emp Helmet",
            price: 6e3,
            scale: 120,
            desc: "turrets won't attack but you move slower",
            antiTurret: 1,
            spdMult: .7
        }, {
            id: 12,
            name: "Booster Hat",
            price: 6e3,
            scale: 120,
            desc: "increases your movement speed",
            spdMult: 1.16
        }, {
            id: 26,
            name: "Barbarian Armor",
            price: 8e3,
            scale: 120,
            desc: "knocks back enemies that attack you",
            dmgK: .6
        }, {
            id: 21,
            name: "Plague Mask",
            price: 1e4,
            scale: 120,
            desc: "melee attacks deal poison damage",
            poisonDmg: 5,
            poisonTime: 6
        }, {
            id: 46,
            name: "Bull Mask",
            price: 1e4,
            scale: 120,
            desc: "bulls won't target you unless you attack them",
            bullRepel: 1
        }, {
            id: 14,
            name: "Windmill Hat",
            topSprite: !0,
            price: 1e4,
            scale: 120,
            desc: "generates points while worn",
            pps: 1.5
        }, {
            id: 11,
            name: "Spike Gear",
            topSprite: !0,
            price: 1e4,
            scale: 120,
            desc: "deal damage to players that damage you",
            dmg: .45
        }, {
            id: 53,
            name: "Turret Gear",
            topSprite: !0,
            price: 1e4,
            scale: 120,
            desc: "you become a walking turret",
            turret: {
                proj: 1,
                range: 700,
                rate: 2500
            },
            spdMult: .7
        }, {
            id: 20,
            name: "Samurai Armor",
            price: 12e3,
            scale: 120,
            desc: "increased attack speed and fire rate",
            atkSpd: .78
        }, {
            id: 58,
            name: "Dark Knight",
            price: 12e3,
            scale: 120,
            desc: "restores health when you deal damage",
            healD: .4
        }, {
            id: 27,
            name: "Scavenger Gear",
            price: 15e3,
            scale: 120,
            desc: "earn double points for each kill",
            kScrM: 2
        }, {
            id: 40,
            name: "Tank Gear",
            price: 15e3,
            scale: 120,
            desc: "increased damage to buildings but slower movement",
            spdMult: .3,
            bDmg: 3.3
        }, {
            id: 52,
            name: "Thief Gear",
            price: 15e3,
            scale: 120,
            desc: "steal half of a players gold when you kill them",
            goldSteal: .5
        }, {
            id: 55,
            name: "Bloodthirster",
            price: 2e4,
            scale: 120,
            desc: "Restore Health when dealing damage. And increased damage",
            healD: .25,
            dmgMultO: 1.2
        }, {
            id: 56,
            name: "Assassin Gear",
            price: 2e4,
            scale: 120,
            desc: "Go invisible when not moving. Can't eat. Increased speed",
            noEat: !0,
            spdMult: 1.1,
            invisTimer: 1e3
        }], e.exports.accessories = [{
            id: 12,
            name: "Snowball",
            price: 1e3,
            scale: 105,
            xOff: 18,
            desc: "no effect"
        }, {
            id: 9,
            name: "Tree Cape",
            price: 1e3,
            scale: 90,
            desc: "no effect"
        }, {
            id: 10,
            name: "Stone Cape",
            price: 1e3,
            scale: 90,
            desc: "no effect"
        }, {
            id: 3,
            name: "Cookie Cape",
            price: 1500,
            scale: 90,
            desc: "no effect"
        }, {
            id: 8,
            name: "Cow Cape",
            price: 2e3,
            scale: 90,
            desc: "no effect"
        }, {
            id: 11,
            name: "Monkey Tail",
            price: 2e3,
            scale: 97,
            xOff: 25,
            desc: "I am speed",
            spdMult: 1.35,
            dmgMultO: .2
        }, {
            id: 17,
            name: "Apple Basket",
            price: 3e3,
            scale: 80,
            xOff: 12,
            desc: '"your dont come" -ApplePie',
            healthRegen: 1
        }, {
            id: 6,
            name: "Winter Cape",
            price: 3e3,
            scale: 90,
            desc: "no effect"
        }, {
            id: 4,
            name: "Skull Cape",
            price: 4e3,
            scale: 90,
            desc: "no effect"
        }, {
            id: 5,
            name: "Dash Cape",
            price: 5e3,
            scale: 90,
            desc: "no effect"
        }, {
            id: 2,
            name: "Dragon Cape",
            price: 6e3,
            scale: 90,
            desc: "no effect"
        }, {
            id: 1,
            name: "Super Cape",
            price: 8e3,
            scale: 90,
            desc: "I am super noob"
        }, {
            id: 7,
            name: "Troll Cape",
            price: 8e3,
            scale: 90,
            desc: "no effect"
        }, {
            id: 14,
            name: "Thorns",
            price: 1e4,
            scale: 115,
            xOff: 20,
            desc: "no effect"
        }, {
            id: 15,
            name: "Blockades",
            price: 1e4,
            scale: 95,
            xOff: 15,
            desc: "no effect"
        }, {
            id: 20,
            name: "Devils Tail",
            price: 1e4,
            scale: 95,
            xOff: 20,
            desc: "no effect"
        }, {
            id: 16,
            name: "Sawblade",
            price: 12e3,
            scale: 90,
            spin: !0,
            xOff: 0,
            desc: "right back at you",
            dmg: .15
        }, {
            id: 13,
            name: "Angel Wings",
            price: 15e3,
            scale: 138,
            xOff: 22,
            desc: "why is this here",
            healthRegen: 3
        }, {
            id: 19,
            name: "Shadow Wings",
            price: 15e3,
            scale: 138,
            xOff: 22,
            desc: "you're evil C:",
            spdMult: 1.1
        }, {
            id: 18,
            name: "Blood Wings",
            price: 2e4,
            scale: 178,
            xOff: 26,
            desc: "our health now",
            healD: .2
        }, {
            id: 21,
            name: "Corrupt X Wings",
            price: 2e4,
            scale: 178,
            xOff: 26,
            desc: '"rude" -Corrupt X',
            dmg: .25
        }]
    }, function(e, t) {
        e.exports = function(e, t, n, i, o, s, a) {
            this.init = function(e, t, n, i, o, s, r, c, l) {
                this.active = !0, this.indx = e, this.x = t, this.y = n, this.dir = i, this.skipMov = !0, this.speed = o, this.dmg = s, this.scale = c, this.range = r, this.owner = l, a && (this.sentTo = {})
            };
            var r, c = [];
            this.update = function(l) {
                if (this.active) {
                    var h, u = this.speed * l;
                    if (this.skipMov ? this.skipMov = !1 : (this.x += u * Math.cos(this.dir), this.y += u * Math.sin(this.dir), this.range -= u, this.range <= 0 && (this.x += this.range * Math.cos(this.dir), this.y += this.range * Math.sin(this.dir), u = 1, this.range = 0, this.active = !1)), a) {
                        for (var d = 0; d < e.length; ++d) !this.sentTo[e[d].id] && e[d].canSee(this) && (this.sentTo[e[d].id] = 1, a.send(e[d].id, "18", s.fixTo(this.x, 1), s.fixTo(this.y, 1), s.fixTo(this.dir, 2), s.fixTo(this.range, 1), this.speed, this.indx, this.layer, this.sid));
                        for (c.length = 0, d = 0; d < e.length + t.length; ++d) !(r = e[d] || t[d - e.length]).alive || r == this.owner || this.owner.team && r.team == this.owner.team || s.lineInRect(r.x - r.scale, r.y - r.scale, r.x + r.scale, r.y + r.scale, this.x, this.y, this.x + u * Math.cos(this.dir), this.y + u * Math.sin(this.dir)) && c.push(r);
                        for (var f = n.getGridArrays(this.x, this.y, this.scale), m = 0; m < f.length; ++m)
                            for (var p = 0; p < f[m].length; ++p) h = (r = f[m][p]).getScale(), r.active && this.ignoreObj != r.sid && this.layer <= r.layer && c.indexOf(r) < 0 && !r.ignoreCollision && s.lineInRect(r.x - h, r.y - h, r.x + h, r.y + h, this.x, this.y, this.x + u * Math.cos(this.dir), this.y + u * Math.sin(this.dir)) && c.push(r);
                        if (c.length > 0) {
                            var g = null,
                                y = null,
                                w = null;
                            for (d = 0; d < c.length; ++d) w = s.getDistance(this.x, this.y, c[d].x, c[d].y), (null == y || w < y) && (y = w, g = c[d]);
                            if (g.isPlayer || g.isAI) {
                                var v = .3 * (g.weightM || 1);
                                g.xVel += v * Math.cos(this.dir), g.yVel += v * Math.sin(this.dir), null != g.weaponIndex && i.weapons[g.weaponIndex].shield && s.getAngleDist(this.dir + Math.PI, g.dir) <= o.shieldAngle || g.changeHealth(-this.dmg, this.owner, this.owner)
                            } else
                                for (g.projDmg && g.health && g.changeHealth(-this.dmg) && n.disableObj(g), d = 0; d < e.length; ++d) e[d].active && (g.sentTo[e[d].id] && (g.active ? e[d].canSee(g) && a.send(e[d].id, "8", s.fixTo(this.dir, 2), g.sid) : a.send(e[d].id, "12", g.sid)), g.active || g.owner != e[d] || e[d].changeItemCount(g.group.id, -1));
                            for (this.active = !1, d = 0; d < e.length; ++d) this.sentTo[e[d].id] && a.send(e[d].id, "19", this.sid, s.fixTo(y, 1))
                        }
                    }
                }
            }
        }
    }, function(e, t) {
        e.exports = function(e, t, n, i, o, s, a, r, c) {
            this.addProjectile = function(l, h, u, d, f, m, p, g, y) {
                for (var w, v = s.projectiles[m], k = 0; k < t.length; ++k)
                    if (!t[k].active) {
                        w = t[k];
                        break
                    } return w || ((w = new e(n, i, o, s, a, r, c)).sid = t.length, t.push(w)), w.init(m, l, h, u, f, v.dmg, d, v.scale, p), w.ignoreObj = g, w.layer = y || v.layer, w.src = v.src, w
            }
        }
    }, function(e, t) {
        e.exports.obj = function(e, t) {
            var n;
            this.sounds = [], this.active = !0, this.play = function(t, i, o) {
                i && this.active && ((n = this.sounds[t]) || (n = new Howl({
                    src: ".././sound/" + t + ".mp3"
                }), this.sounds[t] = n), o && n.isPlaying || (n.isPlaying = !0, n.play(), n.volume((i || 1) * e.volumeMult), n.loop(o)))
            }, this.toggleMute = function(e, t) {
                (n = this.sounds[e]) && n.mute(t)
            }, this.stop = function(e) {
                (n = this.sounds[e]) && (n.stop(), n.isPlaying = !1)
            }
        }
    }, function(e, t, n) {
        var i = n(60),
            o = n(67);

        function s(e, t, n, i, o) {
            "localhost" == location.hostname && (location.hostname = "127.0.0.1"), this.debugLog = !1, this.baseUrl = e, this.lobbySize = n, this.devPort = t, this.lobbySpread = i, this.rawIPs = !!o, this.server = void 0, this.gameIndex = void 0, this.callback = void 0, this.errorCallback = void 0, this.processServers(vultr.servers)
        }
        s.prototype.regionInfo = {
            0: {
                name: "Local",
                latitude: 0,
                longitude: 0
            },
            "vultr:1": {
                name: "New Jersey",
                latitude: 40.1393329,
                longitude: -75.8521818
            },
            "vultr:2": {
                name: "Chicago",
                latitude: 41.8339037,
                longitude: -87.872238
            },
            "vultr:3": {
                name: "Dallas",
                latitude: 32.8208751,
                longitude: -96.8714229
            },
            "vultr:4": {
                name: "Seattle",
                latitude: 47.6149942,
                longitude: -122.4759879
            },
            "vultr:5": {
                name: "Los Angeles",
                latitude: 34.0207504,
                longitude: -118.691914
            },
            "vultr:6": {
                name: "Atlanta",
                latitude: 33.7676334,
                longitude: -84.5610332
            },
            "vultr:7": {
                name: "Amsterdam",
                latitude: 52.3745287,
                longitude: 4.7581878
            },
            "vultr:8": {
                name: "London",
                latitude: 51.5283063,
                longitude: -.382486
            },
            "vultr:9": {
                name: "Frankfurt",
                latitude: 50.1211273,
                longitude: 8.496137
            },
            "vultr:12": {
                name: "Silicon Valley",
                latitude: 37.4024714,
                longitude: -122.3219752
            },
            "vultr:19": {
                name: "Sydney",
                latitude: -33.8479715,
                longitude: 150.651084
            },
            "vultr:24": {
                name: "Paris",
                latitude: 48.8588376,
                longitude: 2.2773454
            },
            "vultr:25": {
                name: "Tokyo",
                latitude: 35.6732615,
                longitude: 139.569959
            },
            "vultr:39": {
                name: "Miami",
                latitude: 25.7823071,
                longitude: -80.3012156
            },
            "vultr:40": {
                name: "Singapore",
                latitude: 1.3147268,
                longitude: 103.7065876
            }
        }, s.prototype.start = function(e, t) {
            this.callback = e, this.errorCallback = t;
            var n = this.parseServerQuery();
            n ? (this.log("Found server in query."), this.password = n[3], this.connect(n[0], n[1], n[2])) : (this.log("Pinging servers..."), this.pingServers())
        }, s.prototype.parseServerQuery = function() {
            var e = i.parse(location.href, !0),
                t = e.query.server;
            if ("string" == typeof t) {
                var n = t.split(":");
                if (3 == n.length) {
                    var o = n[0],
                        s = parseInt(n[1]),
                        a = parseInt(n[2]);
                    return "0" == o || o.startsWith("vultr:") || (o = "vultr:" + o), [o, s, a, e.query.password]
                }
                this.errorCallback("Invalid number of server parameters in " + t)
            }
        }, s.prototype.findServer = function(e, t) {
            var n = this.servers[e];
            if (Array.isArray(n))
                for (var i = 0; i < n.length; i++) {
                    var o = n[i];
                    if (o.index == t) return o
                } else this.errorCallback("No server list for region " + e)
        }, s.prototype.pingServers = function() {
            var e = this,
                t = [];
            for (var n in this.servers)
                if (this.servers.hasOwnProperty(n)) {
                    var i = this.servers[n],
                        o = i[Math.floor(Math.random() * i.length)];
                    null != o && function(n, i) {
                        var o = new XMLHttpRequest;
                        o.onreadystatechange = function(n) {
                            var o = n.target;
                            if (4 == o.readyState && 200 == o.status) {
                                for (var s = 0; s < t.length; s++) t[s].abort();
                                e.log("Connecting to region", i.region);
                                var a = e.seekServer(i.region);
                                e.connect(a[0], a[1], a[2])
                            }
                        };
                        var s = "//" + e.serverAddress(i.ip, !0) + ":" + e.serverPort(i) + "/ping";
                        o.open("GET", s, !0), o.send(null), e.log("Pinging", s), t.push(o)
                    }(0, o)
                }
        }, s.prototype.seekServer = function(e, t, n) {
            null == n && (n = "random"), null == t && (t = !1);
            const i = ["random"];
            var o = this.lobbySize,
                s = this.lobbySpread,
                a = this.servers[e].flatMap((function(e) {
                    var t = 0;
                    return e.games.map((function(n) {
                        var i = t++;
                        return {
                            region: e.region,
                            index: e.index * e.games.length + i,
                            gameIndex: i,
                            gameCount: e.games.length,
                            playerCount: n.playerCount,
                            isPrivate: n.isPrivate
                        }
                    }))
                })).filter((function(e) {
                    return !e.isPrivate
                })).filter((function(e) {
                    return !t || 0 == e.playerCount && e.gameIndex >= e.gameCount / 2
                })).filter((function(e) {
                    return "random" == n || i[e.index % i.length].key == n
                })).sort((function(e, t) {
                    return t.playerCount - e.playerCount
                })).filter((function(e) {
                    return e.playerCount < o
                }));
            if (t && a.reverse(), 0 != a.length) {
                var r = Math.min(s, a.length),
                    c = Math.floor(Math.random() * r),
                    l = a[c = Math.min(c, a.length - 1)],
                    h = l.region,
                    u = (c = Math.floor(l.index / l.gameCount), l.index % l.gameCount);
                return this.log("Found server."), [h, c, u]
            }
            this.errorCallback("No open servers.")
        }, s.prototype.connect = function(e, t, n) {
            if (!this.connected) {
                var i = this.findServer(e, t);
                null != i ? (this.log("Connecting to server", i, "with game index", n), i.games[n].playerCount >= this.lobbySize ? this.errorCallback("Server is already full.") : (history.replaceState(document.title, document.title, this.generateHref(e, t, n, this.password)), this.server = i, this.gameIndex = n, this.log("Calling callback with address", this.serverAddress(i.ip), "on port", this.serverPort(i), "with game index", n), this.callback(this.serverAddress(i.ip), this.serverPort(i), n))) : this.errorCallback("Failed to find server for region " + e + " and index " + t)
            }
        }, s.prototype.switchServer = function(e, t, n, i) {
            this.switchingServers = !0, location.href = this.generateHref(e, t, n, i)
        }, s.prototype.generateHref = function(e, t, n, i) {
            var o = "/?server=" + (e = this.stripRegion(e)) + ":" + t + ":" + n;
            return i && (o += "&password=" + encodeURIComponent(i)), o
        }, s.prototype.serverAddress = function(e, t) {
            return "127.0.0.1" == e || "7f000001" == e || "903d62ef5d1c2fecdcaeb5e7dd485eff" == e ? location.hostname : this.rawIPs ? t ? "ip_" + this.hashIP(e) + "." + this.baseUrl : e : "ip_" + e + "." + this.baseUrl
        }, s.prototype.serverPort = function(e) {
            return 0 == e.region ? this.devPort : location.protocol.startsWith("https") ? 443 : 80
        }, s.prototype.processServers = function(e) {
            for (var t = {}, n = 0; n < e.length; n++) {
                var i = e[n],
                    o = t[i.region];
                null == o && (o = [], t[i.region] = o), o.push(i)
            }
            for (var s in t) t[s] = t[s].sort((function(e, t) {
                return e.index - t.index
            }));
            this.servers = t
        }, s.prototype.ipToHex = function(e) {
            return e.split(".").map((e => ("00" + parseInt(e).toString(16)).substr(-2))).join("").toLowerCase()
        }, s.prototype.hashIP = function(e) {
            return o(this.ipToHex(e))
        }, s.prototype.log = function() {
            return this.debugLog ? void 0 : void console.verbose
        }, s.prototype.stripRegion = function(e) {
            return e.startsWith("vultr:") ? e = e.slice(6) : e.startsWith("do:") && (e = e.slice(3)), e
        }, testVultrClient = function() {
            function e(e, t) {
                e = "" + e, t = "" + t
            }
            var t = new s("test.io", -1, 5, 1, !1);
            t.errorCallback = function(e) {}, t.processServers(function(e) {
                var t = [];
                for (var n in e)
                    for (var i = e[n], o = 0; o < i.length; o++) t.push({
                        ip: n + ":" + o,
                        scheme: "testing",
                        region: n,
                        index: o,
                        games: i[o].map((e => ({
                            playerCount: e,
                            isPrivate: !1
                        })))
                    });
                return t
            }({
                1: [
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                ],
                2: [
                    [5, 1, 0, 0],
                    [0, 0, 0, 0]
                ],
                3: [
                    [5, 0, 1, 5],
                    [0, 0, 0, 0]
                ],
                4: [
                    [5, 1, 1, 5],
                    [1, 0, 0, 0]
                ],
                5: [
                    [5, 1, 1, 5],
                    [1, 0, 4, 0]
                ],
                6: [
                    [5, 5, 5, 5],
                    [2, 3, 1, 4]
                ],
                7: [
                    [5, 5, 5, 5],
                    [5, 5, 5, 5]
                ]
            })), e(t.seekServer(1, !1), [1, 0, 0]), e(t.seekServer(1, !0), [1, 1, 3]), e(t.seekServer(2, !1), [2, 0, 1]), e(t.seekServer(2, !0), [2, 1, 3]), e(t.seekServer(3, !1), [3, 0, 2]), e(t.seekServer(3, !0), [3, 1, 3]), e(t.seekServer(4, !1), [4, 0, 1]), e(t.seekServer(4, !0), [4, 1, 3]), e(t.seekServer(5, !1), [5, 1, 2]), e(t.seekServer(5, !0), [5, 1, 3]), e(t.seekServer(6, !1), [6, 1, 3]), e(t.seekServer(6, !0), void 0), e(t.seekServer(7, !1), void 0), e(t.seekServer(7, !0), void 0)
        };
        var a = function(e, t) {
            return e.concat(t)
        };
        Array.prototype.flatMap = function(e) {
            return function(e, t) {
                return t.map(e).reduce(a, [])
            }(e, this)
        }, e.exports = s
    }, function(e, t, n) {
        var i = n(61),
            o = n(63);

        function s() {
            this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
        }
        t.parse = v, t.resolve = function(e, t) {
            return v(e, !1, !0).resolve(t)
        }, t.resolveObject = function(e, t) {
            return e ? v(e, !1, !0).resolveObject(t) : t
        }, t.format = function(e) {
            return o.isString(e) && (e = v(e)), e instanceof s ? e.format() : s.prototype.format.call(e)
        }, t.Url = s;
        var a = /^([a-z0-9.+-]+:)/i,
            r = /:[0-9]*$/,
            c = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
            l = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
            h = ["'"].concat(l),
            u = ["%", "/", "?", ";", "#"].concat(h),
            d = ["/", "?", "#"],
            f = /^[+a-z0-9A-Z_-]{0,63}$/,
            m = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
            p = {
                javascript: !0,
                "javascript:": !0
            },
            g = {
                javascript: !0,
                "javascript:": !0
            },
            y = {
                http: !0,
                https: !0,
                ftp: !0,
                gopher: !0,
                file: !0,
                "http:": !0,
                "https:": !0,
                "ftp:": !0,
                "gopher:": !0,
                "file:": !0
            },
            w = n(64);

        function v(e, t, n) {
            if (e && o.isObject(e) && e instanceof s) return e;
            var i = new s;
            return i.parse(e, t, n), i
        }
        s.prototype.parse = function(e, t, n) {
            if (!o.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
            var s = e.indexOf("?"),
                r = -1 !== s && s < e.indexOf("#") ? "?" : "#",
                l = e.split(r);
            l[0] = l[0].replace(/\\/g, "/");
            var v = e = l.join(r);
            if (v = v.trim(), !n && 1 === e.split("#").length) {
                var k = c.exec(v);
                if (k) return this.path = v, this.href = v, this.pathname = k[1], k[2] ? (this.search = k[2], this.query = t ? w.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
            }
            var b = a.exec(v);
            if (b) {
                var x = (b = b[0]).toLowerCase();
                this.protocol = x, v = v.substr(b.length)
            }
            if (n || b || v.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                var T = "//" === v.substr(0, 2);
                !T || b && g[b] || (v = v.substr(2), this.slashes = !0)
            }
            if (!g[b] && (T || b && !y[b])) {
                for (var I, E, M = -1, C = 0; C < d.length; C++) - 1 !== (P = v.indexOf(d[C])) && (-1 === M || P < M) && (M = P);
                for (-1 !== (E = -1 === M ? v.lastIndexOf("@") : v.lastIndexOf("@", M)) && (I = v.slice(0, E), v = v.slice(E + 1), this.auth = decodeURIComponent(I)), M = -1, C = 0; C < u.length; C++) {
                    var P; - 1 !== (P = v.indexOf(u[C])) && (-1 === M || P < M) && (M = P)
                } - 1 === M && (M = v.length), this.host = v.slice(0, M), v = v.slice(M), this.parseHost(), this.hostname = this.hostname || "";
                var S = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                if (!S)
                    for (var L = this.hostname.split(/\./), A = (C = 0, L.length); C < A; C++) {
                        var B = L[C];
                        if (B && !B.match(f)) {
                            for (var _ = "", O = 0, R = B.length; O < R; O++) B.charCodeAt(O) > 127 ? _ += "x" : _ += B[O];
                            if (!_.match(f)) {
                                var j = L.slice(0, C),
                                    D = L.slice(C + 1),
                                    U = B.match(m);
                                U && (j.push(U[1]), D.unshift(U[2])), D.length && (v = "/" + D.join(".") + v), this.hostname = j.join(".");
                                break
                            }
                        }
                    }
                this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), S || (this.hostname = i.toASCII(this.hostname));
                var z = this.port ? ":" + this.port : "",
                    W = this.hostname || "";
                this.host = W + z, this.href += this.host, S && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== v[0] && (v = "/" + v))
            }
            if (!p[x])
                for (C = 0, A = h.length; C < A; C++) {
                    var Y = h[C];
                    if (-1 !== v.indexOf(Y)) {
                        var q = encodeURIComponent(Y);
                        q === Y && (q = escape(Y)), v = v.split(Y).join(q)
                    }
                }
            var H = v.indexOf("#"); - 1 !== H && (this.hash = v.substr(H), v = v.slice(0, H));
            var F = v.indexOf("?");
            if (-1 !== F ? (this.search = v.substr(F), this.query = v.substr(F + 1), t && (this.query = w.parse(this.query)), v = v.slice(0, F)) : t && (this.search = "", this.query = {}), v && (this.pathname = v), y[x] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                z = this.pathname || "";
                var V = this.search || "";
                this.path = z + V
            }
            return this.href = this.format(), this
        }, s.prototype.format = function() {
            var e = this.auth || "";
            e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
            var t = this.protocol || "",
                n = this.pathname || "",
                i = this.hash || "",
                s = !1,
                a = "";
            this.host ? s = e + this.host : this.hostname && (s = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (s += ":" + this.port)), this.query && o.isObject(this.query) && Object.keys(this.query).length && (a = w.stringify(this.query));
            var r = this.search || a && "?" + a || "";
            return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || y[t]) && !1 !== s ? (s = "//" + (s || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : s || (s = ""), i && "#" !== i.charAt(0) && (i = "#" + i), r && "?" !== r.charAt(0) && (r = "?" + r), t + s + (n = n.replace(/[?#]/g, (function(e) {
                return encodeURIComponent(e)
            }))) + (r = r.replace("#", "%23")) + i
        }, s.prototype.resolve = function(e) {
            return this.resolveObject(v(e, !1, !0)).format()
        }, s.prototype.resolveObject = function(e) {
            if (o.isString(e)) {
                var t = new s;
                t.parse(e, !1, !0), e = t
            }
            for (var n = new s, i = Object.keys(this), a = 0; a < i.length; a++) {
                var r = i[a];
                n[r] = this[r]
            }
            if (n.hash = e.hash, "" === e.href) return n.href = n.format(), n;
            if (e.slashes && !e.protocol) {
                for (var c = Object.keys(e), l = 0; l < c.length; l++) {
                    var h = c[l];
                    "protocol" !== h && (n[h] = e[h])
                }
                return y[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n
            }
            if (e.protocol && e.protocol !== n.protocol) {
                if (!y[e.protocol]) {
                    for (var u = Object.keys(e), d = 0; d < u.length; d++) {
                        var f = u[d];
                        n[f] = e[f]
                    }
                    return n.href = n.format(), n
                }
                if (n.protocol = e.protocol, e.host || g[e.protocol]) n.pathname = e.pathname;
                else {
                    for (var m = (e.pathname || "").split("/"); m.length && !(e.host = m.shift()););
                    e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== m[0] && m.unshift(""), m.length < 2 && m.unshift(""), n.pathname = m.join("/")
                }
                if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
                    var p = n.pathname || "",
                        w = n.search || "";
                    n.path = p + w
                }
                return n.slashes = n.slashes || e.slashes, n.href = n.format(), n
            }
            var v = n.pathname && "/" === n.pathname.charAt(0),
                k = e.host || e.pathname && "/" === e.pathname.charAt(0),
                b = k || v || n.host && e.pathname,
                x = b,
                T = n.pathname && n.pathname.split("/") || [],
                I = (m = e.pathname && e.pathname.split("/") || [], n.protocol && !y[n.protocol]);
            if (I && (n.hostname = "", n.port = null, n.host && ("" === T[0] ? T[0] = n.host : T.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === m[0] ? m[0] = e.host : m.unshift(e.host)), e.host = null), b = b && ("" === m[0] || "" === T[0])), k) n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, T = m;
            else if (m.length) T || (T = []), T.pop(), T = T.concat(m), n.search = e.search, n.query = e.query;
            else if (!o.isNullOrUndefined(e.search)) return I && (n.hostname = n.host = T.shift(), (S = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = S.shift(), n.host = n.hostname = S.shift())), n.search = e.search, n.query = e.query, o.isNull(n.pathname) && o.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n;
            if (!T.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
            for (var E = T.slice(-1)[0], M = (n.host || e.host || T.length > 1) && ("." === E || ".." === E) || "" === E, C = 0, P = T.length; P >= 0; P--) "." === (E = T[P]) ? T.splice(P, 1) : ".." === E ? (T.splice(P, 1), C++) : C && (T.splice(P, 1), C--);
            if (!b && !x)
                for (; C--; C) T.unshift("..");
            !b || "" === T[0] || T[0] && "/" === T[0].charAt(0) || T.unshift(""), M && "/" !== T.join("/").substr(-1) && T.push("");
            var S, L = "" === T[0] || T[0] && "/" === T[0].charAt(0);
            return I && (n.hostname = n.host = L ? "" : T.length ? T.shift() : "", (S = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = S.shift(), n.host = n.hostname = S.shift())), (b = b || n.host && T.length) && !L && T.unshift(""), T.length ? n.pathname = T.join("/") : (n.pathname = null, n.path = null), o.isNull(n.pathname) && o.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n
        }, s.prototype.parseHost = function() {
            var e = this.host,
                t = r.exec(e);
            t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
        }
    }, function(e, t, n) {
        (function(e, i) {
            var o;
            ! function(s) {
                t && t.nodeType, e && e.nodeType;
                var a = "object" == typeof i && i;
                a.global !== a && a.window !== a && a.self;
                var r, c = 2147483647,
                    l = 36,
                    h = /^xn--/,
                    u = /[^\x20-\x7E]/,
                    d = /[\x2E\u3002\uFF0E\uFF61]/g,
                    f = {
                        overflow: "Overflow: input needs wider integers to process",
                        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                        "invalid-input": "Invalid input"
                    },
                    m = Math.floor,
                    p = String.fromCharCode;

                function g(e) {
                    throw new RangeError(f[e])
                }

                function y(e, t) {
                    for (var n = e.length, i = []; n--;) i[n] = t(e[n]);
                    return i
                }

                function w(e, t) {
                    var n = e.split("@"),
                        i = "";
                    return n.length > 1 && (i = n[0] + "@", e = n[1]), i + y((e = e.replace(d, ".")).split("."), t).join(".")
                }

                function v(e) {
                    for (var t, n, i = [], o = 0, s = e.length; o < s;)(t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < s ? 56320 == (64512 & (n = e.charCodeAt(o++))) ? i.push(((1023 & t) << 10) + (1023 & n) + 65536) : (i.push(t), o--) : i.push(t);
                    return i
                }

                function k(e) {
                    return y(e, (function(e) {
                        var t = "";
                        return e > 65535 && (t += p((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t + p(e)
                    })).join("")
                }

                function b(e) {
                    return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : l
                }

                function x(e, t) {
                    return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
                }

                function T(e, t, n) {
                    var i = 0;
                    for (e = n ? m(e / 700) : e >> 1, e += m(e / t); e > 455; i += l) e = m(e / 35);
                    return m(i + 36 * e / (e + 38))
                }

                function I(e) {
                    var t, n, i, o, s, a, r, h, u, d, f = [],
                        p = e.length,
                        y = 0,
                        w = 128,
                        v = 72;
                    for ((n = e.lastIndexOf("-")) < 0 && (n = 0), i = 0; i < n; ++i) e.charCodeAt(i) >= 128 && g("not-basic"), f.push(e.charCodeAt(i));
                    for (o = n > 0 ? n + 1 : 0; o < p;) {
                        for (s = y, a = 1, r = l; o >= p && g("invalid-input"), ((h = b(e.charCodeAt(o++))) >= l || h > m((c - y) / a)) && g("overflow"), y += h * a, !(h < (u = r <= v ? 1 : r >= v + 26 ? 26 : r - v)); r += l) a > m(c / (d = l - u)) && g("overflow"), a *= d;
                        v = T(y - s, t = f.length + 1, 0 == s), m(y / t) > c - w && g("overflow"), w += m(y / t), y %= t, f.splice(y++, 0, w)
                    }
                    return k(f)
                }

                function E(e) {
                    var t, n, i, o, s, a, r, h, u, d, f, y, w, k, b, I = [];
                    for (y = (e = v(e)).length, t = 128, n = 0, s = 72, a = 0; a < y; ++a)(f = e[a]) < 128 && I.push(p(f));
                    for (i = o = I.length, o && I.push("-"); i < y;) {
                        for (r = c, a = 0; a < y; ++a)(f = e[a]) >= t && f < r && (r = f);
                        for (r - t > m((c - n) / (w = i + 1)) && g("overflow"), n += (r - t) * w, t = r, a = 0; a < y; ++a)
                            if ((f = e[a]) < t && ++n > c && g("overflow"), f == t) {
                                for (h = n, u = l; !(h < (d = u <= s ? 1 : u >= s + 26 ? 26 : u - s)); u += l) b = h - d, k = l - d, I.push(p(x(d + b % k, 0))), h = m(b / k);
                                I.push(p(x(h, 0))), s = T(n, w, i == o), n = 0, ++i
                            }++ n, ++t
                    }
                    return I.join("")
                }
                r = {
                    version: "1.4.1",
                    ucs2: {
                        decode: v,
                        encode: k
                    },
                    decode: I,
                    encode: E,
                    toASCII: function(e) {
                        return w(e, (function(e) {
                            return u.test(e) ? "xn--" + E(e) : e
                        }))
                    },
                    toUnicode: function(e) {
                        return w(e, (function(e) {
                            return h.test(e) ? I(e.slice(4).toLowerCase()) : e
                        }))
                    }
                }, void 0 === (o = function() {
                    return r
                }.call(t, n, t, e)) || (e.exports = o)
            }()
        }).call(this, n(62)(e), n(12))
    }, function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }), e.webpackPolyfill = 1), e
        }
    }, function(e, t, n) {
        e.exports = {
            isString: function(e) {
                return "string" == typeof e
            },
            isObject: function(e) {
                return "object" == typeof e && null !== e
            },
            isNull: function(e) {
                return null === e
            },
            isNullOrUndefined: function(e) {
                return null == e
            }
        }
    }, function(e, t, n) {
        t.decode = t.parse = n(65), t.encode = t.stringify = n(66)
    }, function(e, t, n) {
        function i(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        e.exports = function(e, t, n, s) {
            t = t || "&", n = n || "=";
            var a = {};
            if ("string" != typeof e || 0 === e.length) return a;
            var r = /\+/g;
            e = e.split(t);
            var c = 1e3;
            s && "number" == typeof s.maxKeys && (c = s.maxKeys);
            var l = e.length;
            c > 0 && l > c && (l = c);
            for (var h = 0; h < l; ++h) {
                var u, d, f, m, p = e[h].replace(r, "%20"),
                    g = p.indexOf(n);
                g >= 0 ? (u = p.substr(0, g), d = p.substr(g + 1)) : (u = p, d = ""), f = decodeURIComponent(u), m = decodeURIComponent(d), i(a, f) ? o(a[f]) ? a[f].push(m) : a[f] = [a[f], m] : a[f] = m
            }
            return a
        };
        var o = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
    }, function(e, t, n) {
        var i = function(e) {
            switch (typeof e) {
                case "string":
                    return e;
                case "boolean":
                    return e ? "true" : "false";
                case "number":
                    return isFinite(e) ? e : "";
                default:
                    return ""
            }
        };
        e.exports = function(e, t, n, r) {
            return t = t || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e ? s(a(e), (function(a) {
                var r = encodeURIComponent(i(a)) + n;
                return o(e[a]) ? s(e[a], (function(e) {
                    return r + encodeURIComponent(i(e))
                })).join(t) : r + encodeURIComponent(i(e[a]))
            })).join(t) : r ? encodeURIComponent(i(r)) + n + encodeURIComponent(i(e)) : ""
        };
        var o = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        };

        function s(e, t) {
            if (e.map) return e.map(t);
            for (var n = [], i = 0; i < e.length; i++) n.push(t(e[i], i));
            return n
        }
        var a = Object.keys || function(e) {
            var t = [];
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
            return t
        }
    }, function(e, t, n) {
        ! function() {
            var t = n(68),
                i = n(20).utf8,
                o = n(69),
                s = n(20).bin,
                a = function(e, n) {
                    e.constructor == String ? e = n && "binary" === n.encoding ? s.stringToBytes(e) : i.stringToBytes(e) : o(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
                    for (var r = t.bytesToWords(e), c = 8 * e.length, l = 1732584193, h = -271733879, u = -1732584194, d = 271733878, f = 0; f < r.length; f++) r[f] = 16711935 & (r[f] << 8 | r[f] >>> 24) | 4278255360 & (r[f] << 24 | r[f] >>> 8);
                    r[c >>> 5] |= 128 << c % 32, r[14 + (c + 64 >>> 9 << 4)] = c;
                    var m = a._ff,
                        p = a._gg,
                        g = a._hh,
                        y = a._ii;
                    for (f = 0; f < r.length; f += 16) {
                        var w = l,
                            v = h,
                            k = u,
                            b = d;
                        h = y(h = y(h = y(h = y(h = g(h = g(h = g(h = g(h = p(h = p(h = p(h = p(h = m(h = m(h = m(h = m(h, u = m(u, d = m(d, l = m(l, h, u, d, r[f + 0], 7, -680876936), h, u, r[f + 1], 12, -389564586), l, h, r[f + 2], 17, 606105819), d, l, r[f + 3], 22, -1044525330), u = m(u, d = m(d, l = m(l, h, u, d, r[f + 4], 7, -176418897), h, u, r[f + 5], 12, 1200080426), l, h, r[f + 6], 17, -1473231341), d, l, r[f + 7], 22, -45705983), u = m(u, d = m(d, l = m(l, h, u, d, r[f + 8], 7, 1770035416), h, u, r[f + 9], 12, -1958414417), l, h, r[f + 10], 17, -42063), d, l, r[f + 11], 22, -1990404162), u = m(u, d = m(d, l = m(l, h, u, d, r[f + 12], 7, 1804603682), h, u, r[f + 13], 12, -40341101), l, h, r[f + 14], 17, -1502002290), d, l, r[f + 15], 22, 1236535329), u = p(u, d = p(d, l = p(l, h, u, d, r[f + 1], 5, -165796510), h, u, r[f + 6], 9, -1069501632), l, h, r[f + 11], 14, 643717713), d, l, r[f + 0], 20, -373897302), u = p(u, d = p(d, l = p(l, h, u, d, r[f + 5], 5, -701558691), h, u, r[f + 10], 9, 38016083), l, h, r[f + 15], 14, -660478335), d, l, r[f + 4], 20, -405537848), u = p(u, d = p(d, l = p(l, h, u, d, r[f + 9], 5, 568446438), h, u, r[f + 14], 9, -1019803690), l, h, r[f + 3], 14, -187363961), d, l, r[f + 8], 20, 1163531501), u = p(u, d = p(d, l = p(l, h, u, d, r[f + 13], 5, -1444681467), h, u, r[f + 2], 9, -51403784), l, h, r[f + 7], 14, 1735328473), d, l, r[f + 12], 20, -1926607734), u = g(u, d = g(d, l = g(l, h, u, d, r[f + 5], 4, -378558), h, u, r[f + 8], 11, -2022574463), l, h, r[f + 11], 16, 1839030562), d, l, r[f + 14], 23, -35309556), u = g(u, d = g(d, l = g(l, h, u, d, r[f + 1], 4, -1530992060), h, u, r[f + 4], 11, 1272893353), l, h, r[f + 7], 16, -155497632), d, l, r[f + 10], 23, -1094730640), u = g(u, d = g(d, l = g(l, h, u, d, r[f + 13], 4, 681279174), h, u, r[f + 0], 11, -358537222), l, h, r[f + 3], 16, -722521979), d, l, r[f + 6], 23, 76029189), u = g(u, d = g(d, l = g(l, h, u, d, r[f + 9], 4, -640364487), h, u, r[f + 12], 11, -421815835), l, h, r[f + 15], 16, 530742520), d, l, r[f + 2], 23, -995338651), u = y(u, d = y(d, l = y(l, h, u, d, r[f + 0], 6, -198630844), h, u, r[f + 7], 10, 1126891415), l, h, r[f + 14], 15, -1416354905), d, l, r[f + 5], 21, -57434055), u = y(u, d = y(d, l = y(l, h, u, d, r[f + 12], 6, 1700485571), h, u, r[f + 3], 10, -1894986606), l, h, r[f + 10], 15, -1051523), d, l, r[f + 1], 21, -2054922799), u = y(u, d = y(d, l = y(l, h, u, d, r[f + 8], 6, 1873313359), h, u, r[f + 15], 10, -30611744), l, h, r[f + 6], 15, -1560198380), d, l, r[f + 13], 21, 1309151649), u = y(u, d = y(d, l = y(l, h, u, d, r[f + 4], 6, -145523070), h, u, r[f + 11], 10, -1120210379), l, h, r[f + 2], 15, 718787259), d, l, r[f + 9], 21, -343485551), l = l + w >>> 0, h = h + v >>> 0, u = u + k >>> 0, d = d + b >>> 0
                    }
                    return t.endian([l, h, u, d])
                };
            a._ff = function(e, t, n, i, o, s, a) {
                var r = e + (t & n | ~t & i) + (o >>> 0) + a;
                return (r << s | r >>> 32 - s) + t
            }, a._gg = function(e, t, n, i, o, s, a) {
                var r = e + (t & i | n & ~i) + (o >>> 0) + a;
                return (r << s | r >>> 32 - s) + t
            }, a._hh = function(e, t, n, i, o, s, a) {
                var r = e + (t ^ n ^ i) + (o >>> 0) + a;
                return (r << s | r >>> 32 - s) + t
            }, a._ii = function(e, t, n, i, o, s, a) {
                var r = e + (n ^ (t | ~i)) + (o >>> 0) + a;
                return (r << s | r >>> 32 - s) + t
            }, a._blocksize = 16, a._digestsize = 16, e.exports = function(e, n) {
                if (null == e) throw new Error("Illegal argument " + e);
                var i = t.wordsToBytes(a(e, n));
                return n && n.asBytes ? i : n && n.asString ? s.bytesToString(i) : t.bytesToHex(i)
            }
        }()
    }, function(e, t) {
        ! function() {
            var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                n = {
                    rotl: function(e, t) {
                        return e << t | e >>> 32 - t
                    },
                    rotr: function(e, t) {
                        return e << 32 - t | e >>> t
                    },
                    endian: function(e) {
                        if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
                        for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
                        return e
                    },
                    randomBytes: function(e) {
                        for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
                        return t
                    },
                    bytesToWords: function(e) {
                        for (var t = [], n = 0, i = 0; n < e.length; n++, i += 8) t[i >>> 5] |= e[n] << 24 - i % 32;
                        return t
                    },
                    wordsToBytes: function(e) {
                        for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
                        return t
                    },
                    bytesToHex: function(e) {
                        for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
                        return t.join("")
                    },
                    hexToBytes: function(e) {
                        for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
                        return t
                    },
                    bytesToBase64: function(e) {
                        for (var n = [], i = 0; i < e.length; i += 3)
                            for (var o = e[i] << 16 | e[i + 1] << 8 | e[i + 2], s = 0; s < 4; s++) 8 * i + 6 * s <= 8 * e.length ? n.push(t.charAt(o >>> 6 * (3 - s) & 63)) : n.push("=");
                        return n.join("")
                    },
                    base64ToBytes: function(e) {
                        e = e.replace(/[^A-Z0-9+\/]/gi, "");
                        for (var n = [], i = 0, o = 0; i < e.length; o = ++i % 4) 0 != o && n.push((t.indexOf(e.charAt(i - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | t.indexOf(e.charAt(i)) >>> 6 - 2 * o);
                        return n
                    }
                };
            e.exports = n
        }()
    }, function(e, t) {
        function n(e) {
            return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }
        e.exports = function(e) {
            return null != e && (n(e) || function(e) {
                return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
            }(e) || !!e._isBuffer)
        }
    }, function(e, t) {
        e.exports = function(e, t, n, i, o, s, a, r, c) {
            this.aiTypes = [{
                id: 0,
                src: "cow_1",
                killScore: 150,
                health: 500,
                weightM: .8,
                speed: 95e-5,
                turnSpeed: .001,
                scale: 72,
                drop: ["food", 50]
            }, {
                id: 1,
                src: "pig_1",
                killScore: 200,
                health: 800,
                weightM: .6,
                speed: 85e-5,
                turnSpeed: .001,
                scale: 72,
                drop: ["food", 80]
            }, {
                id: 2,
                name: "Bull",
                src: "bull_2",
                hostile: !0,
                dmg: 20,
                killScore: 1e3,
                health: 1800,
                weightM: .5,
                speed: 94e-5,
                turnSpeed: 74e-5,
                scale: 78,
                viewRange: 800,
                chargePlayer: !0,
                drop: ["food", 100]
            }, {
                id: 3,
                name: "Bully",
                src: "bull_1",
                hostile: !0,
                dmg: 20,
                killScore: 2e3,
                health: 2800,
                weightM: .45,
                speed: .001,
                turnSpeed: 8e-4,
                scale: 90,
                viewRange: 900,
                chargePlayer: !0,
                drop: ["food", 400]
            }, {
                id: 4,
                name: "Wolf",
                src: "wolf_1",
                hostile: !0,
                dmg: 8,
                killScore: 500,
                health: 300,
                weightM: .45,
                speed: .001,
                turnSpeed: .002,
                scale: 84,
                viewRange: 800,
                chargePlayer: !0,
                drop: ["food", 200]
            }, {
                id: 5,
                name: "Quack",
                src: "chicken_1",
                dmg: 8,
                killScore: 2e3,
                noTrap: !0,
                health: 300,
                weightM: .2,
                speed: .0018,
                turnSpeed: .006,
                scale: 70,
                drop: ["food", 100]
            }, {
                id: 6,
                name: "MOOSTAFA",
                nameScale: 50,
                src: "enemy",
                hostile: !0,
                dontRun: !0,
                fixedSpawn: !0,
                spawnDelay: 6e4,
                noTrap: !0,
                colDmg: 100,
                dmg: 40,
                killScore: 8e3,
                health: 18e3,
                weightM: .4,
                speed: 7e-4,
                turnSpeed: .01,
                scale: 80,
                spriteMlt: 1.8,
                leapForce: .9,
                viewRange: 1e3,
                hitRange: 210,
                hitDelay: 1e3,
                chargePlayer: !0,
                drop: ["food", 100]
            }, {
                id: 7,
                name: "Treasure",
                hostile: !0,
                nameScale: 35,
                src: "crate_1",
                fixedSpawn: !0,
                spawnDelay: 12e4,
                colDmg: 200,
                killScore: 5e3,
                health: 2e4,
                weightM: .1,
                speed: 0,
                turnSpeed: 0,
                scale: 70,
                spriteMlt: 1
            }, {
                id: 8,
                name: "MOOFIE",
                src: "wolf_2",
                hostile: !0,
                fixedSpawn: !0,
                dontRun: !0,
                hitScare: 4,
                spawnDelay: 3e4,
                noTrap: !0,
                nameScale: 35,
                dmg: 10,
                colDmg: 100,
                killScore: 3e3,
                health: 7e3,
                weightM: .45,
                speed: .0015,
                turnSpeed: .002,
                scale: 90,
                viewRange: 800,
                chargePlayer: !0,
                drop: ["food", 1e3]
            }], this.spawn = function(l, h, u, d) {
                for (var f, m = 0; m < e.length; ++m)
                    if (!e[m].active) {
                        f = e[m];
                        break
                    } return f || (f = new t(e.length, o, n, i, a, s, r, c), e.push(f)), f.init(l, h, u, d, this.aiTypes[d]), f
            }
        }
    }, function(e, t) {
        var n = 2 * Math.PI;
        e.exports = function(e, t, i, o, s, a, r, c) {
            this.sid = e, this.isAI = !0, this.nameIndex = s.randInt(0, a.cowNames.length - 1), this.init = function(e, t, n, i, o) {
                this.x = e, this.y = t, this.startX = o.fixedSpawn ? e : null, this.startY = o.fixedSpawn ? t : null, this.xVel = 0, this.yVel = 0, this.zIndex = 0, this.dir = n, this.dirPlus = 0, this.index = i, this.src = o.src, o.name && (this.name = o.name), this.weightM = o.weightM, this.speed = o.speed, this.killScore = o.killScore, this.turnSpeed = o.turnSpeed, this.scale = o.scale, this.maxHealth = o.health, this.leapForce = o.leapForce, this.health = this.maxHealth, this.chargePlayer = o.chargePlayer, this.viewRange = o.viewRange, this.drop = o.drop, this.dmg = o.dmg, this.hostile = o.hostile, this.dontRun = o.dontRun, this.hitRange = o.hitRange, this.hitDelay = o.hitDelay, this.hitScare = o.hitScare, this.spriteMlt = o.spriteMlt, this.nameScale = o.nameScale, this.colDmg = o.colDmg, this.noTrap = o.noTrap, this.spawnDelay = o.spawnDelay, this.hitWait = 0, this.waitCount = 1e3, this.moveCount = 0, this.targetDir = 0, this.active = !0, this.alive = !0, this.runFrom = null, this.chargeTarget = null, this.dmgOverTime = {}
            };
            var l = 0;
            this.update = function(e) {
                if (this.active) {
                    if (this.spawnCounter) return this.spawnCounter -= e, void(this.spawnCounter <= 0 && (this.spawnCounter = 0, this.x = this.startX || s.randInt(0, a.mapScale), this.y = this.startY || s.randInt(0, a.mapScale)));
                    (l -= e) <= 0 && (this.dmgOverTime.dmg && (this.changeHealth(-this.dmgOverTime.dmg, this.dmgOverTime.doer), this.dmgOverTime.time -= 1, this.dmgOverTime.time <= 0 && (this.dmgOverTime.dmg = 0)), l = 1e3);
                    var o = !1,
                        r = 1;
                    if (!this.zIndex && !this.lockMove && this.y >= a.mapScale / 2 - a.riverWidth / 2 && this.y <= a.mapScale / 2 + a.riverWidth / 2 && (r = .33, this.xVel += a.waterCurrent * e), this.lockMove) this.xVel = 0, this.yVel = 0;
                    else if (this.waitCount > 0) {
                        if (this.waitCount -= e, this.waitCount <= 0)
                            if (this.chargePlayer) {
                                for (var h, u, d, f = 0; f < i.length; ++f) !i[f].alive || i[f].skin && i[f].skin.bullRepel || (d = s.getDistance(this.x, this.y, i[f].x, i[f].y)) <= this.viewRange && (!h || d < u) && (u = d, h = i[f]);
                                h ? (this.chargeTarget = h, this.moveCount = s.randInt(8e3, 12e3)) : (this.moveCount = s.randInt(1e3, 2e3), this.targetDir = s.randFloat(-Math.PI, Math.PI))
                            } else this.moveCount = s.randInt(4e3, 1e4), this.targetDir = s.randFloat(-Math.PI, Math.PI)
                    } else if (this.moveCount > 0) {
                        var m = this.speed * r;
                        if (this.runFrom && this.runFrom.active && (!this.runFrom.isPlayer || this.runFrom.alive) ? (this.targetDir = s.getDirection(this.x, this.y, this.runFrom.x, this.runFrom.y), m *= 1.42) : this.chargeTarget && this.chargeTarget.alive && (this.targetDir = s.getDirection(this.chargeTarget.x, this.chargeTarget.y, this.x, this.y), m *= 1.75, o = !0), this.hitWait && (m *= .3), this.dir != this.targetDir) {
                            this.dir %= n;
                            var p = (this.dir - this.targetDir + n) % n,
                                g = Math.min(Math.abs(p - n), p, this.turnSpeed * e),
                                y = p - Math.PI >= 0 ? 1 : -1;
                            this.dir += y * g + n
                        }
                        this.dir %= n, this.xVel += m * e * Math.cos(this.dir), this.yVel += m * e * Math.sin(this.dir), this.moveCount -= e, this.moveCount <= 0 && (this.runFrom = null, this.chargeTarget = null, this.waitCount = this.hostile ? 1500 : s.randInt(1500, 6e3))
                    }
                    this.zIndex = 0, this.lockMove = !1;
                    var w = s.getDistance(0, 0, this.xVel * e, this.yVel * e),
                        v = Math.min(4, Math.max(1, Math.round(w / 40))),
                        k = 1 / v;
                    for (f = 0; f < v; ++f) {
                        this.xVel && (this.x += this.xVel * e * k), this.yVel && (this.y += this.yVel * e * k), C = t.getGridArrays(this.x, this.y, this.scale);
                        for (var b = 0; b < C.length; ++b)
                            for (var x = 0; x < C[b].length; ++x) C[b][x].active && t.checkCollision(this, C[b][x], k)
                    }
                    var T, I, E, M = !1;
                    if (this.hitWait > 0 && (this.hitWait -= e, this.hitWait <= 0)) {
                        M = !0, this.hitWait = 0, this.leapForce && !s.randInt(0, 2) && (this.xVel += this.leapForce * Math.cos(this.dir), this.yVel += this.leapForce * Math.sin(this.dir));
                        for (var C = t.getGridArrays(this.x, this.y, this.hitRange), P = 0; P < C.length; ++P)
                            for (b = 0; b < C[P].length; ++b)(T = C[P][b]).health && (I = s.getDistance(this.x, this.y, T.x, T.y)) < T.scale + this.hitRange && (T.changeHealth(5 * -this.dmg) && t.disableObj(T), t.hitObj(T, s.getDirection(this.x, this.y, T.x, T.y)));
                        for (b = 0; b < i.length; ++b) i[b].canSee(this) && c.send(i[b].id, "aa", this.sid)
                    }
                    if (o || M)
                        for (f = 0; f < i.length; ++f)(T = i[f]) && T.alive && (I = s.getDistance(this.x, this.y, T.x, T.y), this.hitRange ? !this.hitWait && I <= this.hitRange + T.scale && (M ? (E = s.getDirection(T.x, T.y, this.x, this.y), T.changeHealth(-this.dmg), T.xVel += .6 * Math.cos(E), T.yVel += .6 * Math.sin(E), this.runFrom = null, this.chargeTarget = null, this.waitCount = 3e3, this.hitWait = s.randInt(0, 2) ? 0 : 600) : this.hitWait = this.hitDelay) : I <= this.scale + T.scale && (E = s.getDirection(T.x, T.y, this.x, this.y), T.changeHealth(-this.dmg), T.xVel += .55 * Math.cos(E), T.yVel += .55 * Math.sin(E)));
                    this.xVel && (this.xVel *= Math.pow(a.playerDecel, e)), this.yVel && (this.yVel *= Math.pow(a.playerDecel, e));
                    var S = this.scale;
                    this.x - S < 0 ? (this.x = S, this.xVel = 0) : this.x + S > a.mapScale && (this.x = a.mapScale - S, this.xVel = 0), this.y - S < 0 ? (this.y = S, this.yVel = 0) : this.y + S > a.mapScale && (this.y = a.mapScale - S, this.yVel = 0)
                }
            }, this.canSee = function(e) {
                if (!e) return !1;
                if (e.skin && e.skin.invisTimer && e.noMovTimer >= e.skin.invisTimer) return !1;
                var t = Math.abs(e.x - this.x) - e.scale,
                    n = Math.abs(e.y - this.y) - e.scale;
                return t <= a.maxScreenWidth / 2 * 1.3 && n <= a.maxScreenHeight / 2 * 1.3
            };
            var h = 0,
                u = 0;
            this.animate = function(e) {
                this.animTime > 0 && (this.animTime -= e, this.animTime <= 0 ? (this.animTime = 0, this.dirPlus = 0, h = 0, u = 0) : 0 == u ? (h += e / (this.animSpeed * a.hitReturnRatio), this.dirPlus = s.lerp(0, this.targetAngle, Math.min(1, h)), h >= 1 && (h = 1, u = 1)) : (h -= e / (this.animSpeed * (1 - a.hitReturnRatio)), this.dirPlus = s.lerp(0, this.targetAngle, Math.max(0, h))))
            }, this.startAnim = function() {
                this.animTime = this.animSpeed = 600, this.targetAngle = .8 * Math.PI, h = 0, u = 0
            }, this.changeHealth = function(e, t, n) {
                if (this.active && (this.health += e, n && (this.hitScare && !s.randInt(0, this.hitScare) ? (this.runFrom = n, this.waitCount = 0, this.moveCount = 2e3) : this.hostile && this.chargePlayer && n.isPlayer ? (this.chargeTarget = n, this.waitCount = 0, this.moveCount = 8e3) : this.dontRun || (this.runFrom = n, this.waitCount = 0, this.moveCount = 2e3)), e < 0 && this.hitRange && s.randInt(0, 1) && (this.hitWait = 500), t && t.canSee(this) && e < 0 && c.send(t.id, "t", Math.round(this.x), Math.round(this.y), Math.round(-e), 1), this.health <= 0 && (this.spawnDelay ? (this.spawnCounter = this.spawnDelay, this.x = -1e6, this.y = -1e6) : (this.x = this.startX || s.randInt(0, a.mapScale), this.y = this.startY || s.randInt(0, a.mapScale)), this.health = this.maxHealth, this.runFrom = null, t && (r(t, this.killScore), this.drop))))
                    for (var i = 0; i < this.drop.length;) t.addResource(a.resourceTypes.indexOf(this.drop[i]), this.drop[i + 1]), i += 2
            }
        }
    }]);
