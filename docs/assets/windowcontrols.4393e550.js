import{d as a,m as e,a as s}from"./index.a1d2ab88.js";import"./vendor.78f84693.js";const o="window-controls-overlay",n=()=>{e.classList.toggle(o,navigator.windowControlsOverlay.visible),s.classList.toggle(o,navigator.windowControlsOverlay.visible)};navigator.windowControlsOverlay.addEventListener("geometrychange",a(async()=>{n()},250));n();