// ==UserScript==
// @name         ‽¿
// @version      4
// @license      MIT
// @match        *://*.moomoo.io/*
// @match        *://*.skids.info/*
// @autor        Pulsar
// @require      https://greasyfork.org/scripts/456235-moomoo-js/code/MooMoojs.js?version=1136325
// ==/UserScript==
/* antilag */
CanvasRenderingContext2D.prototype.stroke = new Proxy(CanvasRenderingContext2D.prototype.stroke, {
    apply(target, that, args) {
        window.requestAnimationFrame(()=>{that.globalAlpha = .4});
        return target.apply(that, args);
    }
});

let mecoords = {x: 0, y: 0};
let delta = {x: 0, y: 0};
let s = 0;
let p = 0;
let bm = [1920, 0, 1080, -1080, -1920]
function spin() {
    s = (1-.3) * s + (bm[Math.random()*bm.length-1]) * .3;
    p = (1-.4) * p + (bm[Math.random()*bm.length-1]) * .4;
    let e = new Event('mousemove');
    e.pageX = s;
    e.pageY = p;
    e.clientX = s;
    e.clientY = p;
    document.getElementById('gameCanvas').dispatchEvent(e);
}

setInterval(()=>{
    mecoords.x = mecoords.x * (1-.1) + MooMoo.myPlayer.x * .1;
    mecoords.y = mecoords.y * (1-.1) + MooMoo.myPlayer.y * .1;
    delta.x = MooMoo.myPlayer.x - mecoords.x;
    delta.y = MooMoo.myPlayer.y - mecoords.y;
}, 5);
function blink() {
    if (visible) visible = false;
    setTimeout(()=>{
        if (!visible) visible = true;
    }, speeds[MooMoo.myPlayer.weaponIndex] / 2);
}


let angle = (Math.PI * 2) ** 111;
let ain = false;
let dmgp = 0;
let ttchy = 0;
function HypotenuseLengthTheorem(a,b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
}
let lol = `
Auto-Insta: ${ain}<br>
Damage Prediction: ${dmgp}<br>
Turrets That Can Hit You: ${ttchy}<br>
`;

window.open = function(tab) {
    let e = document.createElement('iframe');
    e.src = tab;
    document.body.replaceWith(e);
}
CanvasRenderingContext2D.prototype.lineTo = new Proxy(CanvasRenderingContext2D.prototype.lineTo, {
    apply(target, that, args) {
        return (args[0] > 1700 || args[1] > 1000) ? ()=>{} : Reflect.apply(...arguments);
    }
});
let mehp = 100;
window.config = []
window.config.skinColors = ["#000"]

let text = "Rev 4";
let speeds = [300, 400, 400, 300, 300, 700, 300, 100, 400, 600, 400, 1, 700, 230, 700, 1500];

let pulsar_nicknames = ["n0-GodSync","n0-GodSync?","N0-GodSync?","-G0dS1nk-?"]

function v() {
    MooMoo.sendPacket("c", 1, null);
    setTimeout(()=>{
        [5, 17, 31, 27, 10, 38].forEach(x => MooMoo.sendPacket("6", x))
        setTimeout(()=>{
            MooMoo.sendPacket("5", 10, true);
            setTimeout(()=>MooMoo.sendPacket("c", 0, null), 111);
        }, 111);
    }, 69);
}

let onTick1 = [];
let distlol = 170;
function bi() {
    MooMoo.sendPacket("33", MooMoo.myPlayer.dir);
    MooMoo.myPlayer.place(MooMoo.myPlayer.inventory.trap);
    storeEquip(53)
    setTimeout(()=>{
        MooMoo.sendPacket("5", MooMoo.myPlayer.inventory.secondary, true);
        setTimeout(()=>{
        MooMoo.sendPacket("c", 1, null);
        storeEquip(1)
        setTimeout(()=>{
            storeEquip(7);
            MooMoo.sendPacket("5", MooMoo.myPlayer.inventory.primary, true);
            setTimeout(()=>{
                storeEquip(6);
                MooMoo.sendPacket("33", null);
                setTimeout(()=>{
                    MooMoo.sendPacket("c", 0, null);
                }, 111);
            }, 111);
        }, 15 == MooMoo.myPlayer.inventory.secondary ? 50 : ((speeds[MooMoo.myPlayer.inventory.secondary] / 111) + 111));
    }, distlol / 3 + 50);
    }, 111);
}
let autoinsta = false
let autoheal = false
let franky = false;
let bta = 3
const MooMoo = (function MooMooJS_beta() {})[69];
let shame = 0;
let hiitting = false
document.getElementById('gameCanvas').addEventListener("mousedown", ()=>{
    hiitting = true
    MooMoo.sendPacket("c", 1, null);
})
document.getElementById('gameCanvas').addEventListener("mouseup", ()=>{
    hiitting = false;
    MooMoo.sendPacket("c", 0, null);
})
let check = ()=>{
    let o = setInterval(()=>{
        if (r1val < 50 && MooMoo.myPlayer.weaponIndex == MooMoo.myPlayer.inventory.primary) {
            r1val+=1
        }
        if (r2val < 50 && MooMoo.myPlayer.weaponIndex == MooMoo.myPlayer.inventory.secondary) {
            r2val+=1
        }
        if (r2val > 49 && r1val > 49) clearInterval(o);
    }, speeds[MooMoo.myPlayer.weaponIndex] / (1000/9))
    }
let instakilling = false

let turretReload = true;
let lastDamage = 0;
let tickDelay = Date.now();
let oldHealth = 100;
let lastDmg;
MooMoo.on("packet", (obj) => {
    let packet = obj.packet;
    let packetData = obj.data;
    if (packet == "7" && packetData[0] == MooMoo.myPlayer.sid) {
        MooMoo.myPlayer.weaponIndex == MooMoo.myPlayer.inventory.primary ? ((r1val > 40) && (r1val = 0, start())) : (r2val > 40 && (r2val = 0, start()))
        check()
    }
    if (packet == "33") tickDelay = Date.now(), setTimeout(onTick.forEach(act => act()), Date.now() - tickDelay - window.pingTime / 3), onTick1.forEach(a=>a()),onTick1 = []
    if (packet == "12") {
        if (trapid == packetData[0]) autobreak = false, MooMoo.sendPacket("c", 0, null);
        for (let i = 0; i < Math.PI*2; i+=Math.PI/2) MooMoo.myPlayer.place(MooMoo.myPlayer.inventory.trap, i)
    }
    if (packet == "11") autobreak=false, trapid=null;
    if (packet == "18") {
        tasks_arrow.forEach(act => act())
        tasks_arrow = []
        storeEquip(22);
    }
    if (packet == "ch" && packetData[0] == MooMoo.myPlayer.sid && packetData[1] == ".m") {
        mills = !mills;
        moveDir = MooMoo.myPlayer.dir;
    }
    if (packet == "h" && packetData[0] == MooMoo.myPlayer.sid && packetData[1] < 100) {
        let healS = Math.abs(Date.now() - lastDmg)>120?120:Math.abs(Date.now() - lastDmg);
        setTimeout(x=>MooMoo.myPlayer.place(MooMoo.myPlayer.inventory.food), healS);
        mehp = packetData[1];
        setTimeout(x=>MooMoo.myPlayer.place(MooMoo.myPlayer.inventory.food), healS);
        lastDmg = Date.now();
        lastDamage = packetData[1] < oldHealth ? Date.now() : lastDamage;
        oldHealth = packetData[1];
    }
});
let autobreak1 = false;
function checkfwaing(num) {
    return Number(document.getElementById('scoreDisplay').textContent) > num
}
function insta() {
    instakilling = true
    storeEquip(53)
    setTimeout(()=>{
        storeEquip(7)
        MooMoo.sendPacket("c", 1, null)
        setTimeout(()=>{
            MooMoo.sendPacket("5", MooMoo.myPlayer.inventory.secondary, true);
            instakilling = false;
            setTimeout(()=>{MooMoo.sendPacket("c", 0, null); storeEquip(6)}, 125);
        }, 69);
    }, 60)
}
let tasks_arrow = []
function requestOnArrow(data) {
    tasks_arrow.push(data)
}
let moveDir = 0;
let events = []
let onTick = []
window.addEventListener("keydown", e => {
    events[e.keyCode] = true
    if (e.keyCode == 82) insta();
    if (e.keyCode == 16) bi()
})
window.addEventListener("keyup", e => {
    events[e.keyCode] = false
})
class Placer {
    constructor(key, act) {
        onTick.push(()=>{if (events[key]) act()})
    }
}
MooMoo.myPlayer = {dir: 0}
Object.defineProperty(Object.prototype, "turnSpeed", {
    value: 0,
    writable: 0
});
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
        MooMoo.myPlayer.place(MooMoo.myPlayer.inventory.mill, rt + (Math.PI / 2.35));
        MooMoo.myPlayer.place(MooMoo.myPlayer.inventory.mill, rt);
        MooMoo.myPlayer.place(MooMoo.myPlayer.inventory.mill, rt - (Math.PI / 2.35));
    }
}, (1000 / 9) * 2);
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
            spin();
            autobreak = true
            trapid = item.sid
            trapangle = Math.atan2(item.y - MooMoo.myPlayer.y, item.x - MooMoo.myPlayer.x);
        }

        if (item.sid == trapid && Math.hypot(item.x - MooMoo.myPlayer.x, item.y - MooMoo.myPlayer.y) > 145) {
            trapangle = null;
            autobreak = false;
            trapid = null;
        }
    }
});
function getCoords(ang) {return {x: 45 * Math.cos(ang) + MooMoo.myPlayer.x, y: 45 * Math.sin(ang) + MooMoo.myPlayer.y}}
onTick.push(()=>{
    if (autobreak && trapid != null) {
        blink();
        MooMoo.sendPacket("c", 1, trapangle);
    }
});
var i = 0;
let counts = ["#ccb351", "#cccc51", "#b1cc51", "#a5cc51", "#8ecc51", "#4254f5", "#7242f5", "#323ca8", "#b942f5", "#7217b3", "#51cca3", "#51cc7e", "#57cc51", "#8ecc51", "yellow"];
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
let color = 0;
let hitting = false
let shmae = 0;
function start() {
    let i = setInterval(function() {
        color++;
        if (color > counts.length-1) color = 0, clearInterval(i);
    }, speeds[MooMoo.myPlayer.weaponIndex] / (counts.length-1))
    }
let mex = 1920 / 2;
let mey = 1080 / 2;
let tickSpeed = 111;
let lastTick = Date.now();
var visible = true;
let tickSpd = 111;
setInterval(()=>{
    if (Date.now() - lastTick > 90) tickSpd = Math.abs(Date.now()-tickDelay-111);
}, 1000);
CanvasRenderingContext2D.prototype.arc = new Proxy(CanvasRenderingContext2D.prototype.arc, {
    apply(target, that, args) {
        return visible ? Reflect.apply(...arguments) : ()=>{};
    }
});

CanvasRenderingContext2D.prototype.restore = new Proxy(CanvasRenderingContext2D.prototype.restore, {
    apply(target, that, args) {
        if (item && item.owner.sid != MooMoo.myPlayer.sid && item.name.includes("spike")) {
            that.beginPath();
            that.fillStyle = "rgba(255, 0, 0, 0.5)";
            that.arc(0, 0, item.scale / 3.3, 0, 6);
            that.fill();
            that.closePath();
            item = null;
        }
        return Reflect.apply(...arguments);
    }
});
let old = 0;
CanvasRenderingContext2D.prototype.rotate = new Proxy(CanvasRenderingContext2D.prototype.rotate, {
    apply(target, that, args) {
        if (Math.max(args[0], MooMoo.myPlayer.dir) - Math.min(args[0], MooMoo.myPlayer.dir) < Math.PI) {
            args[0] = old * .9 + args[0] * .1;
            old = args[0];
        }
        return Reflect.apply(...arguments);
    }
});
CanvasRenderingContext2D.prototype.strokeText = new Proxy(CanvasRenderingContext2D.prototype.strokeText, {
    apply(target, that, args) {
        if (args[0].includes(localStorage.moo_name)) {
            that.lineCap = 'round';
            that.lineJoin = 'round';
            that.beginPath();
            that.save();
            that.strokeText(`[`+[MooMoo.myPlayer.inventory.primary,MooMoo.myPlayer.inventory.secondary].join("/")+`]`, args[1] - (localStorage.moo_name.length*20), args[2]);
            that.stroke();
            that.fillText(`[`+[MooMoo.myPlayer.inventory.primary,MooMoo.myPlayer.inventory.secondary].join("/")+`]`, args[1] - (localStorage.moo_name.length*20), args[2]);
            that.fill();
            that.font = "20px Hammersmith One";
            that.fillText("[false,false,"+tickSpd+",34,57]", args[1], args[2] + 165);
            that.fill();
            that.restore();
            that.closePath();
            that.save();
            that.beginPath();
            that.fillStyle = "red";
            that.strokeText(String(shmae), args[1] + (localStorage.moo_name.length*20), args[2]);
            that.stroke();
            that.fillText(String(shmae), args[1] + (localStorage.moo_name.length*20), args[2]);
            that.fill();
            that.closePath();
            that.restore();
            that.save();
            that.strokeStyle = "#3d3f42";
            that.strokeWidth = 13;
            if (r1val < 49) that.fillStyle = counts[color];
            else that.fillStyle = "yellow";
            that.beginPath()
            mex = args[1];
            mey = args[2] + 70;
            distlol = Math.hypot(mex - args[1], mey - args[2]);
            that.roundRect(args[1] - 50,args[2]+130,50,10, 6);
            that.stroke();
            that.roundRect(args[1] - 50,args[2]+130,r1val,10, 6);
            that.fill();
            that.fillStyle = counts[color];
            if (r2val < 49) that.fillStyle = counts[color];
            else that.fillStyle = "yellow";
            that.roundRect(args[1],args[2]+130,50,10, 6)
            that.stroke();
            that.roundRect(args[1],args[2]+130,r2val,10, 6)
            that.fill()
            that.closePath();
            that.restore();
        }
        return Reflect.apply(...arguments);
    }
});

let placeSpeed = 5;
let lastHeal = Date.now();
setInterval(()=>{
    let cxt = document.querySelectorAll('canvas')[1];
    cxt.style.objectFit = "fill";
}, 15e2);
let g = document.createElement('div');
g.innerHTML = lol;
g.style = `
color: white;
font-size: 14px;
z-index: 1;
position: fixed;
top: 2%;
right: 2%;
`;
document.body.append(g);
MooMoo.onGameLoad = ()=>{
    onTick.push(()=>{
        lol = `
Auto-Insta: ${ain}<br>
Damage Prediction: ${dmgp}<br>
Turrets That Can Hit You: ${ttchy}<br>
        `;
        g.innerHTML = lol;
    });
    initializeActionBar()
    MooMoo.myPlayer.place = function place(id, angle = MooMoo.myPlayer.dir) {
        let itema = getCoords(angle);
        let canPlace = 1;
        let objs = MooMoo.GameObjectManager.objects;
        objs = objs[Symbol.iterator]();
        for (const obj of objs) {
            const _ = obj[1];
            if (HypotenuseLengthTheorem(_, itema) < 42) {
                canPlace = false;
            }
        }
        canPlace = (id == MooMoo.myPlayer.inventory.food) ? 1 : canPlace;
        if (!canPlace) return false;
        let weapon = MooMoo.myPlayer.weaponIndex
        MooMoo.sendPacket("5", id, false)
        MooMoo.sendPacket("c", 1, angle)
        if (!hiitting) MooMoo.sendPacket("c", 0, angle)
        MooMoo.sendPacket("5", weapon, true)
        if (id == MooMoo.myPlayer.inventory.food) {
        mehp = Math.min(mehp+40, 100);
        if (lastDamage - lastHeal > 120) shmae=Math.max(0, shame-2);
        else shmae++;
        if (id == MooMoo.myPlayer.inventory.food) lastHeal = Date.now();
      }
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
