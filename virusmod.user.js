// ==UserScript==
// @name         VirusMod V2.7
// @version      2.7
// @description  Top 1 Quasar remake skid = gay
// @author       Pulsar, VirusterDev <= credits so viruster don't hurt me plspslsplsspslspslspslsplsp
// @match        *://*.moomoo.io/*
// @grant        none
// ==/UserScript==

let er = document.createElement('div');
er.innerHTML = `
Auto Trap: Off<br>
Auto Insta: Off <br>
Auto zeroframe: Off<br>
`
er.style = `
color: grey;
background: #131517;
width:30%;
height:20%;
position: absolute;
bottom: 50px;
right: 0;
z-index:9999999;
font-size: 40px;
`
document.body.appendChild(er)

window.config.cowNames = ["balwans / boreks mom"]
document.getElementById('gameName').innerHTML = "���Virus Mod���"
CanvasRenderingContext2D.prototype.fillText=new Proxy(CanvasRenderingContext2D.prototype.fillText, {
    apply(target, that, args) {
        if (args[0] == localStorage.moo_name) args[0] = "[100/100] {0} " + args[0] + " <1> ";
        return Reflect.apply(target, that, args);
    }
});
CanvasRenderingContext2D.prototype.strokeText=new Proxy(CanvasRenderingContext2D.prototype.strokeText, {
    apply(target, that, args) {
        if (args[0] == localStorage.moo_name) args[0] = "[100/100] {0} " + args[0] + " <1> ";
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
localStorage.moo_name = "VirusterDev"
let old = 0;
CanvasRenderingContext2D.prototype.rotate = new Proxy(CanvasRenderingContext2D.prototype.rotate, {
    apply(target, that, args) {
        (args[0] > Math.PI*2 || args[0] < -Math.PI*2) && (args[0] = 0)
        return Reflect.apply(target, that, args)
    }
})

/* Hat Stuff */

setInterval(() => {
    storeBuy(7); storeBuy(6); storeBuy(11); storeBuy(53); storeBuy(18, 1); storeBuy(21, 1); storeBuy(40);
}, 75);

/* Click tank / bull */

let canvas = document.getElementById('gameCanvas')

let clickInterval;

canvas.addEventListener('mousedown', function(e) {
    if (clickInterval) return
    if (e.button == 1) {
        clickInterval = setInterval(() => {
           storeEquip(7);
           storeEquip(18, 1);
        }, 30);
    } else {
        clearInterval(clickInterval)
        clickInterval = setInterval(() => {
            storeEquip(40);
            storeEquip(21, 1);
        }, 30);
    }
});

canvas.addEventListener('mouseup', function() {
    clearInterval(clickInterval);
    storeEquip(6);
    storeEquip(21, 1);
});

canvas.addEventListener('touchstart', function() {
    clearInterval(clickInterval)
        clickInterval = setInterval(() => {
            storeEquip(7);
            storeEquip(18, 1);
        }, 30);
});

canvas.addEventListener('touchend', function() {
    clearInterval(clickInterval);
    storeEquip(6);
    storeEquip(21, 1);
});

/* Shame Reset */


