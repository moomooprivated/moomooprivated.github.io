// ==UserScript==
// @name         Revival 3
// @version      3
// @license      MIT
// @match        *://*.moomoo.io/*
// @autor        Pulsar,  etc.
// @require      https://greasyfork.org/scripts/456235-moomoo-js/code/MooMoojs.js?version=1136325
// @run-at       document-end
// ==/UserScript==
window.config = []
window.config.skinColors = ["#000"]
let fl = setInterval(() => {
    window.follmoo && (window.follmoo(), clearInterval(fl));
}, 10);
let text = "MOOMOO.io";
let speeds = [300, 400, 400, 300, 300, 700, 300, 100, 400, 600, 400, 1, 700, 230, 700, 1500];

let pulsar_nicknames = ["n0-GodSync","n0-GodSync?","N0-GodSync?","-G0dS1nk-?"]
requestAnimFrame = new Proxy(requestAnimFrame, {
    apply() {
        document.querySelectorAll('canvas')[1].getContext('2d').globalAlpha=.7
        return Reflect.apply(...arguments);
    }
});
function make(ez,fuck,anal) {
    var e = document.createElement('button')
    e.innerHTML = ez
    e.onclick = fuck
    e.style = "width: 50px; color:white; height: 50px; z-index:99999; background: black; position: fixed; top: " + anal + "%"
    document.body.append(e)
}
make("bs", bi, "0")
make("bw", v, "10")

function v() {
   MooMoo.sendPacket("c", 1, null)
   MooMoo.sendPacket("5", MooMoo.myPlayer.inventory.secondary)
   setTimeout(()=>{
       MooMoo.sendPacket("6", 12);
       setTimeout(()=>{
           MooMoo.sendPacket("6", 15);
           MooMoo.sendPacket("c", 0, null);
       }, 1000 / 9)
   }, 1000 / 9)
}

let onTick1 = [];
function bi() {
    MooMoo.sendPacket("33", MooMoo.myPlayer.dir);
    MooMoo.myPlayer.place(MooMoo.myPlayer.inventory.trap);
    storeBuy(53)
    storeEquip(53)
    setTimeout(()=>{
        MooMoo.sendPacket("5", MooMoo.myPlayer.inventory.secondary, true);
        MooMoo.sendPacket("c", 1, null);
        storeBuy(1)
        storeEquip(1)
        setTimeout(()=>{
            storeBuy(7);
            storeEquip(7);
            MooMoo.sendPacket("33", null);
            MooMoo.sendPacket("5", MooMoo.myPlayer.inventory.primary, true);
            MooMoo.sendPacket("c", 0, null);
            setTimeout(()=>{
                storeBuy(6);
                storeEquip(6);
            }, 75);
        }, 50);
    }, 156);
}
let autoinsta = false
let autoheal = false
let franky = false;
let bta = 3
const MooMoo = (function MooMooJS_beta() {})[69];
let shame = 0;

let check = ()=>{
    let o = setInterval(()=>{
        if (r1val < 50 && MooMoo.myPlayer.weaponIndex == MooMoo.myPlayer.inventory.primary) {
            r1val+=10
        }
        if (r2val < 50 && MooMoo.myPlayer.weaponIndex == MooMoo.myPlayer.inventory.secondary) {
            r2val+=10
        }
        if (r2val > 49 && r1val > 49) clearInterval(o);
    }, speeds[MooMoo.myPlayer.weaponIndex] / 5)
    }
let instakilling = false

let turretReload = true;
let lastDamage = 0;
let tickDelay = Date.now();
let oldHealth = 100;
MooMoo.on("packet", (obj) => {
    let packet = obj.packet;
    let packetData = obj.data;
    if (packet == "7" && packetData[0] == MooMoo.myPlayer.sid) {
        MooMoo.myPlayer.weaponIndex == MooMoo.myPlayer.inventory.primary ? ((r1val == 50) && (r1val = 0, start())) : (r2val == 50 && (r2val = 0, start()))
        check()
    }
    if (packet == "33") tickDelay = Date.now(), setTimeout(onTick.forEach(act => act()), Date.now() - tickDelay - window.pingTime / 3), onTick1.forEach(a=>a()),onTick1 = []
    if (packet == "12") {
        if (trapid == packetData[0]) autobreak = false, MooMoo.sendPacket("c", 0, null)
    }
    if (packet == "18") {
        tasks_arrow.forEach(act => act())
        tasks_arrow = []
    }
    if (packet == "h" && packetData[0] == MooMoo.myPlayer.sid) {
        if (packetData[1] < oldHealth) lastDamage = Date.now();
        oldHealth = packetData[1];
        if (shmae == 0) MooMoo.myPlayer.place(MooMoo.myPlayer.inventory.food)
        else setTimeout(()=>{for (let i = 0; i < (100 - packetData[1]) / 25; i++) {MooMoo.myPlayer.place(MooMoo.myPlayer.inventory.food)}},144);
    }
    if (packet == "h" && packetData[0] != MooMoo.myPlayer.sid && (100 - packetData[1] > 5 && 100 - packetData[1] < 30 || packetData[1] < 60)) {
        instaa()
    }
});
let autobreak1 = false
WebSocket.prototype.send = new Proxy(WebSocket.prototype.send, {
    apply(target, that, args) {
        let x = MooMoo.msgpack.decode(args[0]);
        if (x[0] == "14") return ()=>{}
        if (x[0] == "sp") x[1] = {name:"p_"+localStorage.moo_name,moofoll:1,skin:"__proto__"};
        if (franky) {

            if (Math.round( x[x.length - 1]) != x[x.length - 1]) x[x.length - 1] += moveDir / 1000 / 9;
            args[0] = MooMoo.msgpack.encode(x)
        }
        return Reflect.apply(...arguments);
    }
});
function checkfwaing(num) {
    return Number(document.getElementById('scoreDisplay').textContent) > num
}
function insta() {
    instakilling = true
    storeBuy(53)
    storeEquip(53)
    setTimeout(()=>{
        storeBuy(7)
        storeEquip(7)
        MooMoo.sendPacket("c", 1, null)
        setTimeout(()=>{
            MooMoo.sendPacket("5", MooMoo.myPlayer.inventory.secondary, true);
            instakilling = false
            setTimeout(()=>{MooMoo.sendPacket("c", 0, null); storeBuy(6); storeEquip(6)}, 125)
        }, 75);
    }, 60)
}
let tasks_arrow = []
function requestOnArrow(data) {
    tasks_arrow.push(data)
}
function instaa() {
    storeBuy(53)
    storeEquip(53)
    requestOnArrow(()=>{
        storeBuy(7)
        storeEquip(7)
        MooMoo.sendPacket("c", 1, null)
        MooMoo.sendPacket("c", 0, null)
        setTimeout(()=>{storeBuy(6),storeEquip(6)}, 60);
    })
}
let moveDir = 0;
let events = []
let onTick = []
window.addEventListener("keydown", e => {
    events[e.keyCode] = true
    if (e.keyCode == 82) insta();
    if (e.keyCode == 16) bi(), MooMoo.myPlayer.chat("pulsar power")
})
window.addEventListener("keyup", e => {
    events[e.keyCode] = false
})
class Placer {
    constructor(key, act) {
        onTick.push(()=>{if (events[key]) act()})
    }
}
Object.defineProperty(Object.prototype, "turnSpeed", {
    value: 0,
    writable: false
})
var mills = false
new Placer(66, ()=>{
    mills = !mills
});
new Placer(86, ()=>{MooMoo.myPlayer.place(MooMoo.myPlayer.inventory.spike)});
new Placer(70, ()=>{MooMoo.myPlayer.place(MooMoo.myPlayer.inventory.trap)});
new Placer(87, ()=>moveDir=0-(Math.PI/2));
new Placer(65, ()=>moveDir=0 - Math.PI);
new Placer(68, ()=>moveDir=0);
new Placer(83, ()=>moveDir=moveDir=(Math.PI/2));
new Placer(81, ()=>{MooMoo.myPlayer.place(MooMoo.myPlayer.inventory.food)});
new Placer(71, ()=>{MooMoo.myPlayer.place(36, MooMoo.myPlayer.dir)});

setInterval(()=>{
    if (mills) {
        let rt = moveDir - Math.PI;
        MooMoo.myPlayer.place(MooMoo.myPlayer.inventory.mill, rt + (Math.PI / 2));
        MooMoo.myPlayer.place(MooMoo.myPlayer.inventory.mill, rt);
        MooMoo.myPlayer.place(MooMoo.myPlayer.inventory.mill, rt - (Math.PI / 2));
    }
}, 222);
function createHook(target, prop, setter, getter) {
    const symbol = Symbol(prop);
    Object.defineProperty(target, prop, {
        get() {
            getter(this, this[symbol]);
            return this[symbol];
        },
        set(value) {
            setter(this, symbol, value);
        },
        configurable: true
    })
}
let item = null;
let trapid
let autobreak = false;
let trapangle = 0;
createHook(Object.prototype, "isItem", function(that, symbol, value) {
    that[symbol] = value;
}, function(that, value) {
    if (value === true) {
        item = that;
        if (item.name == "pit trap" && Math.hypot(item.x - MooMoo.myPlayer.x, item.y - MooMoo.myPlayer.y) < 90 && item.owner.sid !== MooMoo.myPlayer.sid) {
            autobreak = true
            trapid = item.sid
            trapangle = Math.atan2(item.y - MooMoo.myPlayer.y, item.x - MooMoo.myPlayer.x);
        }
    }
});
setInterval(()=>{
    if (autobreak) {
        MooMoo.sendPacket("c", 1, trapangle);
        onTick1.push(()=>{
            for (let angli = 0; angli < Math.PI*2; angli += Math.PI / 2) {MooMoo.myPlayer.place(MooMoo.myPlayer.inventory.spike, angli)};
            MooMoo.sendPacket("c", 1, trapangle);
        });
    }
},333);


document.getElementById("gameName").innerHTML = text;
document.getElementById('loadingText').innerHTML = '<br><div id="myProgress" style = "width: 100%;background-color: grey;"><div id="myBar" style = "width: 1%;height: 30px;background-color: green;"></div></div>';
var playButton = 'transition: 1s all;text-align: center;font-size: 23px;padding: 6px;color: #fff;background-color: #2c9506;box-shadow: 0px 0px 8px gray, 0px 0px 4px gray;width: 100%;border-radius: 15px;';
var menuCard = 'background: #e6e3df;text-align: center;box-shadow: inset 0px 0px 10px black;'
document.querySelector('.menuCard').style = menuCard;
document.getElementById("enterGame").style=playButton;

var i = 0;
function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}
move();
let r1val = 50
let r2val = 50
let color = 60
let hitting = false
let shmae = 0;
function start() {
    let i = setInterval(function() {
        color+=30;
        if (color > 420) color = 60, clearInterval(i);
    }, 25)
    }
let mex = 1920 / 2;
let mey = 1080 / 2;
let tickSpeed = 111;
let lastTick = Date.now();
let tickSpd = 111;
setInterval(()=>{
    if (Date.now() - lastTick > 90) tickSpd = Math.abs(Date.now()-tickDelay-111);
}, 1000);
CanvasRenderingContext2D.prototype.strokeText = new Proxy(CanvasRenderingContext2D.prototype.strokeText, {
    apply(target, that, args) {
        if (args[0].includes(localStorage.moo_name)) {
            that.lineCap = 'round';
            that.lineJoin = 'round';
            that.beginPath();
            that.save();
            that.strokeText(`[`+[MooMoo.myPlayer.inventory.primary,MooMoo.myPlayer.inventory.secondary].join("/")+`]`, args[1] - 150, args[2]);
            that.stroke();
            that.fillText(`[`+[MooMoo.myPlayer.inventory.primary,MooMoo.myPlayer.inventory.secondary].join("/")+`]`, args[1] - 150, args[2]);
            that.fill();
            that.font = "20px Hammersmith One";
            that.fillText("[false,false,"+tickSpd+",34,57]", args[1], args[2] + 165);
            that.fill();
            that.restore();
            that.closePath();
            that.save();
            that.beginPath();
            that.fillStyle = "red";
            that.strokeText(String(shmae), args[1] + 120, args[2]);
            that.stroke();
            that.fillText(String(shmae), args[1] + 120, args[2]);
            that.fill();
            that.closePath();
            that.restore();
            that.save();
            that.strokeStyle = "#3d3f42";
            that.strokeWidth = 5;
            if (r1val < 49) that.fillStyle = "hsl(" + color + ", 100%, 50%)";
            else that.fillStyle = "hsl(" + 60 + ", 100%, 50%)";
            that.beginPath()
            that.strokeRect(args[1] - 50,args[2]+130,50,10)
            mex = args[1];
            mey = args[2] + 70;
            that.stroke()
            that.fillRect(args[1] - 50,args[2]+130,r1val,10)
            that.fill();
            that.strokeRect(args[1],args[2]+130,50,10)
            that.stroke()
            that.fillStyle = "hsl(" + 60 + ", 100%, 50%)";
            if (r2val < 49) that.fillStyle = "hsl(" + color + ", 100%, 50%)";
            else that.fillStyle = "hsl(" + 60 + ", 100%, 50%)";
            that.fillRect(args[1],args[2]+130,r2val,10)
            that.fill()
            that.closePath();
            that.restore();
        }
        return Reflect.apply(...arguments);
    }
})
CanvasRenderingContext2D.prototype.fillText = new Proxy(CanvasRenderingContext2D.prototype.fillText, {
    apply(target, that, args) {
        /*that.save();
        that.beginPath();
        that.strokeStyle = "red";
        that.lineWidth = 2;
        that.moveTo(mex, mey);
        that.lineTo(args[1], args[2] + 120);
        that.stroke();
        that.strokeStyle = "#3d3f42";
        that.closePath();
        that.restore();*/
        return Reflect.apply(...arguments);
    }
})
let placeSpeed = 5;
let lastHeal = Date.now();
MooMoo.onGameLoad = ()=>{
    initializeActionBar()
    MooMoo.myPlayer.place = function place(id, angle) {
        let weapon = MooMoo.myPlayer.weaponIndex
        MooMoo.sendPacket("5", id, false)
        MooMoo.sendPacket("c", 1, angle)
        MooMoo.sendPacket("c", 0, angle)
        setTimeout(()=>{MooMoo.sendPacket("5", weapon, true)}, placeSpeed);
        if (lastDamage - lastHeal > 120) shmae=Math.max(0, shame-2);
        else shmae++;
        if (id == MooMoo.myPlayer.inventory.food) lastHeal = Date.now();
    }
}
const styles = {
    position: "absolute",
    top: "0",
    paddingLeft: "5px",
    fontSize: "2em",
    color: "#fff"
};
function initializeActionBar() {
    'use strict';
    const actionBarItems = document.getElementsByClassName("actionBarItem");

    for (let i = 0; i < actionBarItems.length; i++) {
        if (i >= 19 && i <= 38) {
            const divElement = createActionBarItem(i);
            appendActionBarItem(divElement, i);
        }
    }

    function createActionBarItem(index) {
        const divElement = document.createElement("div");
        divElement.setAttribute("id", `actionBarItemnum${index}`);
        applyStyles(divElement, styles);
        divElement.innerHTML = "0";
        return divElement;
    }

    function applyStyles(element, styles) {
        for (const style in styles) {
            element.style[style] = styles[style];
        }
    }

    function appendActionBarItem(divElement, index) {
        const parentElement = document.getElementById(`actionBarItem${index}`);
        parentElement.appendChild(divElement);
    }

    function getElementById(id) {
        return document.getElementById(id);
    }

    MooMoo.addEventListener("14", function (event) {
        const value = event[1];
        const indicesByEventType = {
            1: [19, 20, 21],
            2: [22, 23, 24, 25],
            3: [26, 27, 28],
            4: [29],
            5: [31],
            6: [32],
            7: [33],
            8: [34],
            9: [35],
            10: [36],
            11: [30],
            12: [37],
            13: [38]
        };
        const updateActionBarItem = index => {
            document.getElementById(`actionBarItemnum${index}`).innerHTML = value;
        };
        const indices = indicesByEventType[event[0]];
        indices.forEach(updateActionBarItem);
    });
}
document.getElementById("mainMenu").style.backgroundImage = "url('http://surviv.io/img/main_splash.png')";


