import{S as e}from"./index-mrn3Z3o4.js";function n(o){return new Promise(r=>{e.mixin({toast:!0,position:"bottom-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!1,didOpen:t=>{t.addEventListener("mouseenter",e.stopTimer),t.addEventListener("mouseleave",e.resumeTimer)}}).fire({icon:"error",title:o}).then(()=>{r()})})}export{n as s};
