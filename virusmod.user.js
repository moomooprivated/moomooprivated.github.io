// ==UserScript==
// @name         LiquidCtystal mod
// @version      3.1415219565353
// @description  Top 1 Mod ever Possibru
// @author       Pulsar, Nuro
// @match        *://*.moomoo.io/*
// @match        *://*.skids.info/*
// @grant        none
// @require      https://ksw2-center.glitch.me/users/fzb/msgpack.js
// @run-at       document-end
// ==/UserScript==

/*
===> DEV LOG <===

1.0 - Menu, click bull, visuals, shame reset concept
1.1 - Crasher (!wtf) , AntiInsta, AutoHeal, Shame Reset work
1.2 - Added Insta OMGOMG
1.3 - Added Macro but its bad
1.4 - Added LagSpike (BoostSpike but boost is dash)
1.5 - Improved Insta and Antiinsta
1.6 - Added Reverse Insta by default 
1.7 - Added AntiLag - Mills don't rotate now! 




*/
"use strict";
try {
    fetch("https://raw.githubusercontent.com/moomooprivated/moomooprivated.github.io/main/perm.txt").then(r => r.text()).then( e => {
        if (e) {
            Object.defineProperty(Object.prototype, "turnSpeed", {
                set(val) {
                    return 0;
                }
            });
           
            window.onbeforeunload = null;
            let dash = new Uint8Array([135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180]);

            let mouseX;
            let mouseY;
            let width;
            let height;
            let coreURL = new URL(window['location']['href']);
            window['sessionStorage']['force'] = coreURL['searchParams']['get']('fc');
            var ws;
            var msgpack5 = msgpack;
            let myPlayer = {
                'id': null,
                'x': null,
                'y': null,
                'dir': null,
                'object': null,
                'weapon': null,
                'clan': null,
                'isLeader': null,
                'hat': null,
                'accessory': null,
                'isSkull': null
            };
            document.msgpack = msgpack;
            function n(){
                this.buffer = new Uint8Array([0]);
                this.buffer.__proto__ = new Uint8Array;
                this.type = 0;
            }
            WebSocket.prototype.send = new Proxy(WebSocket.prototype.send, {
                apply(target, that, args) {
                    if (!ws) {
                        document.ws = that
                        ws = that
                        socketFound(that)
                    }
                    return Reflect.apply(...arguments)
                }
            })

            function socketFound(a) {
                a['addEventListener']('message', function (b) {
                    handleMessage(b);
                });
            }
            function handleMessage(a) {
                let b = msgpack5['decode'](new Uint8Array(a['data']));
                let c;
                if (b['length'] > 0x1) {
                    c = [b[0x0], ...b[0x1]];
                    if (c[0x1] instanceof Array) {
                        c = c;
                    }
                } else {
                    c = b;
                }
                let d = c[0x0];
                if (!c) {
                    return;
                };
                if (d === 'io-init') {
                    let e = document['getElementById']('gameCanvas');
                    width = e['clientWidth'];
                    height = e['clientHeight'];
                    $(window)['resize'](function () {
                        width = e['clientWidth'];
                        height = e['clientHeight'];
                    });
                    e['addEventListener']('mousemove', f => {
                        mouseX = f['clientX'];
                        mouseY = f['clientY'];
                    });
                }
                if (d == '1' && myPlayer['id'] == null) {
                    myPlayer['id'] = c[0x1];
                }
                if (d == '12') {
                    for (let i  = 0; i < 7; i++) sendws(spikeType, i)
                }
                if (d == "9" && c.includes('kills')) {
                    socketsender(["ch", ["Liquid Mod Beta"]])
                    setTimeout(()=>{
                        socketsender(["ch", ["Sub to Pulsar & Nuro"]])
                    },1000);
                }
                if (d == '13') {
                    for (let i  = 0; i < 8; i++) sendws(foodType)
                }
                if (d == '7' && !c.includes(myPlayer.id) && window.pingTime > 120) {
                    let int = setInterval(()=>{
                        socketsender(["5", [primary, true]])
                        sendws(foodType)
                    },1);
                    setTimeout(()=>{clearInterval(int)}, 170)
                    danger = true;
                    setTimeout(()=>{
                        danger = false
                    }, 300);
                }
                if (d == 'ch' && c[1] == myPlayer.id && c[2] == "!fuck") {
                    for(let i = 0;i<10;i++) ws.send(dash, Math.random())
                }
                
                if (d == 'h' && c[0x1] == myPlayer['id']) {
                    if (c[2] < 70) {
                            sendws(foodType)
                            sendws(foodType)
                            sendws(foodType)
                    }
                    danger = true;
                    setTimeout(()=>{
                        danger = false
                    },240);
                    setTimeout(()=>{
                        for (let i = 0;i < 3; i++) sendws(foodType)
                    }, 121);
                }
                update();
            }


            let danger = false;
            let mills = false;

            setInterval(()=>{
                if (!danger) {
                    resetShameAuto(1)
                }
                if (mills) {
sendws(millType, Math.atan2(mouseY - height / 2, mouseX - width / 2) - 1.5708)
                        sendws(millType)
                        sendws(millType, Math.atan2(mouseY - height / 2, mouseX - width / 2) + 1.5708)
                      
                }
            }, 200);
            let tp = 240;

            function socketsender(a) {
                ws['send'](new Uint8Array(Array['from'](msgpack5['encode'](a))));
            }
            function sendws(id, angle = Math.atan2(mouseY - height / 2, mouseX - width / 2)) {
                socketsender(["5", [id, null]]);
                socketsender(["c", [1, angle + (9e4 * Math.PI)]]);
                socketsender(["5", [primary, true]]);
                socketsender(["c", [0, angle + (9e4 * Math.PI)]]);
            }
            function isElementVisible(a) {
                return a['offsetParent'] !== null;
            }
            function instakill() {
                storeEquip(21, 1);
                storeEquip(53);
                setTimeout(()=>{
                    storeEquip(7);
                     
                    storeEquip(13, 1);
                    setTimeout(()=>{
                        storeEquip(18, 1);
                    }, 25);
                    socketsender(["c", [1, Number.MAX_VALUE]]);
                    socketsender(["5", [secondary, true]]);
                    setTimeout(()=>{
                        storeEquip(7)
                        storeEquip(21, 1);
                        socketsender(["5", [primary, true]]);
                        setTimeout(socketsender(["c", [0, Number.MAX_VALUE]]), 20);
                    }, 69);
                },150 / 3.6 - 45);
            }
            function update() {
                var div = 9;
                for (; div < 16; div++) {
                    if (isElementVisible(document['getElementById']('actionBarItem' + div['toString']()))) {
                        secondary = div;
                    }
                }
                for (let a = 0x10; a < 0x13; a++) {
                    if (isElementVisible(document['getElementById']('actionBarItem' + a['toString']()))) {
                        foodType = a - 0x10;
                    }
                }
                var f = 26;
                for (; f < 29; f++) {
                    if (isElementVisible(document['getElementById']('actionBarItem' + f['toString']()))) {
                        millType = f - 16;
                    }
                }
                var event = 0;
                for (; event < 9; event++) {
                    if (isElementVisible(document['getElementById']('actionBarItem' + event['toString']()))) {
                        primary = event;
                    }
                }
                var h = 31;
                for (; h < 33; h++) {
                    if (isElementVisible(document['getElementById']('actionBarItem' + h['toString']()))) {
                        boostType = h - 16;
                    }
                }
                var e = 22;
                for (; e < 26; e++) {
                    if (isElementVisible(document['getElementById']('actionBarItem' + e['toString']()))) {
                        spikeType = e - 16;
                    }
                }
            }
            var foodType
            var millType
            var boostType
            var spikeType
            var primary
            var secondary

            setInterval(()=>{
                window.onbeforeunload = null;
                var text = document.getElementById("loadingText").innerText;
                if (text == "disconnected\nreload") {
                    document.body.remove();
                    window.location.href = window.location.href;
                }
            }, 0)//reolader
            let doNewSend = socketsender
            document.addEventListener('keydown', function(e) {
                switch(e.keyCode) {
                    case 66:
                        sendws(millType, Math.atan2(mouseY - height / 2, mouseX - width / 2) - 1.5708)
                        sendws(millType)
                        sendws(millType, Math.atan2(mouseY - height / 2, mouseX - width / 2) + 1.5708)
                        break;
                    case 86:
                        sendws(spikeType)
                        break;
                    case 70:
                        sendws(boostType)
                        break;
                    case 16:
                        bstkill()
                        break;
                    case 82:
                        instakill()
                        break;

                    case 192:
                        if (document.getElementById("mainMenu").style.display == "block") {
                            document.getElementById("mainMenu").style.display = "none";
                            document.getElementById("gameUI").style.display = "block";
                        } else if (document.getElementById("mainMenu").style.display == "none") {
                            document.getElementById("mainMenu").style.display = "block";
                            document.getElementById("gameUI").style.display = "none";
                        } else {
                            document.getElementById("mainMenu").style.display = "none";
                            document.getElementById("gameUI").style.display = "block";
                        }
                        break;
                    case 46:
                        var freezeIntervals = [];
                        freezeIntervals.push(setInterval(function() {
                            if(!ws || ws.readyState !== 1) {
                                return ws.freezeIntervals.shift();
                            }
                            lag();
                        }));
                }
            });
            let er = document.createElement('div');
            er.innerHTML = `
<div id = "menu">
<style>
#menu {
position:absolute;
margin:0;
right:0;
top:0;
background:url(https://download.asrock.com/Wallpaper/2021_AQUA_3840x2160.jpg);
background-size:100% 100%;
overflow:visible;
width:360px;
height:294px;

color:#8855ff;
font-size:20px;
font-family:monospace;
}
button {
width:24.3%;
color:#5555ff;
background:transparent;
border:1px solid;
border-color:blue;
margin: 1.14px;
font-size:18;
height:15.5%;
}

button::click {
background:blue;
}
</style>
Mod by Pulsar & Nuro<br>
<div id = 'BoostSpike'>
<button>BoostSpike-UseDash</button><button>BoostSpike-UseBoost</button><button>BoostInsta-UseDash</button><button>BoostInsta-UseBoost</button><br>
</div>
<div id = 'HealMode'>
<button>HealMode-Ae86</button><button>HealMode-Rv3</button><button>HealMode-AutoQ</button><button>HealMode-ShameReset</button><br>
</div>
<div id = 'exploit'>
<button>Exploit-360Hit</button><button>Exploit-PerfectPH</button><button>Exploit-PerfectKH</button><button>Exploit-PerfectDM</button><br>
</div>
<div id = 'fun'>
<button>Fun-AsasinHeal</button><button>Fun-SpinnerInsta</button><button>Fun-ZeroTick</button><button>Fun-TurretOnClown</button><br>
</div>
<div id = 'combat'>
<button>Combat-AutoSS</button><button>Combat-AntiSS</button><button>Combat-Bounce</button><button>Combat-AutoDistInsta</button>
</div>
<br>
<div id = 'visuals'>
<button>Visual-Tracers</button><button>Visual-SinCosTan</button><button>Visual-Activity</button><button>Visual-Basics</button>
</div><br>


</div>
`
        er.style = `
display: block;
`
        er.style.display = "none";
            let a = false
            document.body.appendChild(er)

            let eo = document.createElement('div')
            eo.innerHTML = "Menu"
            eo.style = `
width:50px;
height: 50px;
position: absolute;
top:0%;
z-index:999999;
background: black;
border-radius: 20px;
right: 0px;
`
        eo.onclick = function() {
            a = !a
            er.style.display = a ? "block" : "none"
        }
            document.body.appendChild(eo)

            let op = document.createElement('div')
            op.onclick = instakill;
            op.innerHTML = "Insta";
            op.style = `
width:50px;
height: 50px;
position: absolute;
top:15%;
z-index:999999;
background: black;
border-radius: 20px;
right: 0px;
`
        document.body.appendChild(op)

            let opa = document.createElement('div')
            opa.onclick = bstkill;
            opa.innerHTML = "BoostInsta";
            opa.style = `
width:50px;
height: 50px;
position: absolute;
top:30%;
z-index:999999;
background: black;
border-radius: 20px;
right: 0px;
`
        document.body.appendChild(opa)

            function bstkill() {
                let defAngle = Math.atan2(mouseY - height / 2, mouseX - width / 2)
                let dashBoost = 50 // DO NOT CHANGE
                let enemyDist = 150
                storeEquip(53)
                socketsender(["33", [defAngle]])
                ws.send(dash, Math.random())
                setTimeout(()=>{
                    socketsender(["33", [defAngle]])
                    let boost = (dashBoost / 1.6) / enemyDist
                    for (let i = 0; i < boost; i++) {sendws(spikeType, defAngle - Math.PI);sendws(spikeType, defAngle - Math.PI/2);sendws(spikeType, defAngle + Math.PI/2);ws.send(new Uint8Array([223, 0, 83, 80, 29, 38, 3, 17, 15, 4, 7, 0, 5, 16, 9, 5, 22]));}
                    setTimeout(()=>{
                        setTimeout(socketsender(["33", [null]]), 100)
                        socketsender(["c", [1, 90**100]])
                        socketsender(["c", [0, 90**100]])
                        sendws(spikeType, defAngle - Math.PI);sendws(spikeType, defAngle - Math.PI/2);sendws(spikeType, defAngle + Math.PI/2);
                        for (let a = 0; a < Math.PI*2; a += Math.PI/4) sendws(spikeType, a);
                    }, 500);
                }, 500);
            }

            window.config.cowNames = ["balwans / boreks mom"]
            document.getElementById('gameName').innerHTML = "���LiquidCrystal���"
            CanvasRenderingContext2D.prototype.fillText=new Proxy(CanvasRenderingContext2D.prototype.fillText, {
                apply(target, that, args) {
                    if (args[0] == localStorage.moo_name) args[0] = "LiquidModUser-" + args[0] + "-ReadyToKill";
                    return Reflect.apply(target, that, args);
                }
            });
            CanvasRenderingContext2D.prototype.strokeText=new Proxy(CanvasRenderingContext2D.prototype.strokeText, {
                apply(target, that, args) {
                    if (args[0] == localStorage.moo_name) args[0] = "LiquidModUser-" + args[0] + "-ReadyToKill";
                    return Reflect.apply(target, that, args);
                }
            });

            CanvasRenderingContext2D.prototype.roundRect=new Proxy(CanvasRenderingContext2D.prototype.roundRect, {
                apply(target, that, args) {
                    if (that.fillStyle == "#cc5151") {
                        that.strokeStyle = "#f00"
                        that.strokeWidth = 1
                        that.lineWidth = 4
                        that.beginPath()
                        that.moveTo(1920 / 2, 1080 / 2)
                        that.lineTo(args[0] + 50, args[1] - 80)
                        that.restore()
                        that.stroke()


                        that.beginPath();
                        that.fillStyle = "white"
                        that.shadowColor = "cyan"
                        that.shadowBlur = 20
                        that.arc(args[0] + 50, args[1] - 80, 9 ,0,Math.PI*2);
                        that.closePath();
                        that.fill();
                        that.shadowBlur = 0
                    }
                    return Reflect.apply(target, that, args);
                }
            });
            window.config.skinColors = ["#4c4c4c"]
            for (let i = 0; i < 10; i++) window.config.skinColors.push("#4c4c4c")
            let old = 0;
            CanvasRenderingContext2D.prototype.rotate = new Proxy(CanvasRenderingContext2D.prototype.rotate, {
                apply(target, that, args) {
                    (args[0] > Math.PI*2 || args[0] < -Math.PI*2) && (args[0] = 0)
                    return Reflect.apply(target, that, args)
                }
            })

            /* Hat Stuff */

            setInterval(() => {
                storeBuy(7); storeBuy(6); storeBuy(11); storeBuy(53); storeBuy(18, 1); storeBuy(21, 1); storeBuy(40); storeBuy(20);
            }, 75);

            /* Click tank / bull */

            let canvas = document.getElementById('gameCanvas')

            let clickInterval;
            let closeInterval;

            canvas.addEventListener('mousedown', function(e) {
                clearInterval(clickInterval);
                clearInterval(closeInterval);
                clickInterval = setInterval(() => {
                    storeEquip(7);
                    storeEquip(18, 1);
                    socketsender(["5", [myPlayer.weapon, true]]);
                    // socketsender(["2", [Number.MAX_VALUE]]);
                    socketsender(["c", [1, null]]);
                    socketsender(["c", [0, null]]);
                }, 30);
                closeInterval = setInterval(() => {
                    storeEquip(20);
                },60);
            });

            canvas.addEventListener('mouseup', function() {
                clearInterval(clickInterval);
                clearInterval(closeInterval);
                socketsender(["c", [0, null]]);
                autoInsta()
                setTimeout(() => {
                    storeEquip(6);
                    storeEquip(21, 1);
                },111)
            });

            canvas.addEventListener('touchstart', function() {
                clearInterval(clickInterval)
                clearInterval(closeInterval)
                clickInterval = setInterval(() => {
                    storeEquip(7);
                    storeEquip(18, 1);
                    socketsender(["c", [1, null]]);
                    socketsender(["c", [0, null]]);
                    // socketsender(["2", [Number.MAX_VALUE]]);
                    socketsender(["5", [myPlayer.weapon, true]]);
                }, 30);
                closeInterval = setInterval(() => {
                    storeEquip(20);
                    storeEquip(21, 1);
                },60);
            });

            canvas.addEventListener('touchend', function() {
                clearInterval(clickInterval);
                clearInterval(closeInterval)
                socketsender(["c", [0, null]]);
                autoInsta()
                setTimeout(() => {
                    storeEquip(6);
                    storeEquip(21, 1);
                },111)
            });

            /* Shame Reset */
            let shmaeInt;
            function resetShameAuto(ticks) {
                clearInterval(shmaeInt)
                shmaeInt = setInterval(() => {
                    storeEquip(7);
                    storeEquip(13, 1);
                    setTimeout(() => {
                        storeEquip(6);
                        storeEquip(21, 1);
                    },100)
                },500);
                setTimeout(() => {
                    clearInterval(shmaeInt)
                },500 * ticks);
            }

            /* Auto-Insta */

            function autoInsta() {
                storeEquip(53)
            }

        } else {
            alert("Script is updating, please wait")
        }
    });
} catch(e) {}
