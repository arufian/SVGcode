import{b as t}from"./index.9bcd17b0.js";import"./vendor.957f1d51.js";t.style.display="none";let e=null;window.addEventListener("beforeinstallprompt",n=>{e=n,t.style.display=""});t.addEventListener("click",async()=>{if(!e)return;e.prompt(),(await e.userChoice).outcome==="accepted"&&(e=null,t.style.display="none")});window.addEventListener("appinstalled",n=>{e=null});