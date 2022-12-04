// ==UserScript==
// @name         S M A C K M0D
// @namespace    http://tampermonkey.net/
// @version      228
// @description  Just a cool mod
// @author       Puslar
// @match        *://*.moomoo.io/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

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
    }, 30);
    closeInterval = setInterval(() => {
        storeEquip(20);
    },60);
});

canvas.addEventListener('mouseup', function() {
    clearInterval(clickInterval);
    clearInterval(closeInterval);
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
    }, 30);
    closeInterval = setInterval(() => {
        storeEquip(20);
        storeEquip(21, 1);
    },60);
});

canvas.addEventListener('touchend', function() {
    clearInterval(clickInterval);
    clearInterval(closeInterval)
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
Object.prototype.skinIndex = new Proxy(Object.prototype.skinIndex, {
    set(obj, prop, val) {
        if (val == 7 || val == "7") antiinsta()
        return Reflect.set(...arguments);
    }
});

/* Automatical antiinsta */

function antiinsta() {
    storeEquip(6);
    storeEquip(21, 1);
    setTimeout(()=>{
        storeEquip(22);
        storeEquip(13, 1)
        setTimeout(()=>{
             storeEquip(6);
             storeEquip(21, 1);
        },75);
    },45);
}








