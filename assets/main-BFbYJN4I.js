import{a as d,i as g}from"./vendor-BAN3Upnh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const i={BASE_URL:"https://your-energy.b.goit.study/api",EXERCISES:"/exercises",FILTERS:"/filters",QUOTE:"/quote",SUBSCRIPTION:"/subscription",RATING:"/rating"};function y(){return f(a(i.QUOTE))}function h(e){const t=a(i.EXERCISES)+`/${e}`;return f(t)}async function E(e){const t=a(i.SUBSCRIPTION);return p(t,{email:e})}async function f(e){return d.get(e).then(t=>t.data).catch(t=>t.response)}async function p(e,t){return d.post(e,t).then(r=>r).catch(r=>r.response)}function a(e,t){return i.BASE_URL+e+""}async function q(){const e=JSON.parse(localStorage.getItem("quoteData")),t=new Date().toISOString().split("T")[0];if(e&&e.date===t)return{author:e.author,quote:e.quote};try{const r=await y();return localStorage.setItem("quoteData",JSON.stringify({...r,date:t})),r}catch(r){throw new Error("Error fetching quote:",r)}}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".burger-menu"),t=document.querySelector(".menu"),r=document.querySelector(".menu-backdrop"),u=document.querySelector(".close-menu-button"),o=document.querySelector(".mobile-nav-list"),n=document.querySelectorAll(".nav-link"),c=()=>{t.classList.toggle("active"),r.classList.toggle("active"),e.classList.toggle("active")},l=window.location.pathname.split("/").pop(),m=s=>s===l||s==="index.html"&&!l;n.forEach(s=>{m(s.getAttribute("href"))&&s.classList.add("active")}),e.addEventListener("click",c),r.addEventListener("click",c),u.addEventListener("click",c),o.addEventListener("click",c)});document.addEventListener("DOMContentLoaded",async()=>{try{const e=await q();document.querySelector(".quote-content .quote-text").textContent=e.quote,document.querySelector(".quote-content .author").textContent=e.author}catch{g.error({title:"Error",message:"Failed to load quote"})}});export{h as a,y as g,E as s};
//# sourceMappingURL=main-BFbYJN4I.js.map
