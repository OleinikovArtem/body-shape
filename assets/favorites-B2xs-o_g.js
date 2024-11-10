import{a as l}from"./vendor-BT7OT44q.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const f="https://your-energy.b.goit.study/api";class v{constructor(){this.baseURL=f,this.page=0}async getExercises(t,r,o=1){const s=`${this.baseURL}/exercises?${t}=${r}&page=${o}&limit=10`;return this.requestGET(s)}async getSearch(t,r,o){const s=`${this.baseURL}/exercises?${r}=${t}&keyword=${o}&page=1&limit=10`;return this.requestGET(s)}async getExercisesById(t){const r=`${this.baseURL}/exercises/${t}`;return this.requestGET(r)}async getFilter(t,r=1){const o=`${this.baseURL}/filters?filter=${t}&page=${r}&limit=12`;return this.requestGET(o)}async getQuote(){const t=`${this.baseURL}/quote`;return this.requestGET(t)}async postSubscriptions(t){const r=`${this.baseURL}/subscription`;return l.post(r,{email:t})}async requestGET(t){try{return(await l.get(t)).data}catch(r){console.error(r)}}}const m=()=>{const e=document.querySelector(".burger-menu"),t=document.querySelector(".menu"),r=document.querySelector(".menu-backdrop"),o=document.querySelector(".close-menu-button"),s=document.querySelector(".mobile-nav-list"),i=()=>{t.classList.toggle("active"),r.classList.toggle("active"),e.classList.toggle("active")};e.addEventListener("click",i),r.addEventListener("click",i),o.addEventListener("click",i),s.addEventListener("click",i)},y=()=>{const e=document.querySelectorAll(".nav-link"),t=window.location.pathname.split("/").pop()||"index.html",r=o=>o===t;e.forEach(o=>{r(o.getAttribute("href"))&&o.classList.add("active")})},p=l.create({baseURL:"https://your-energy.b.goit.study/api",headers:{Accept:"application/json"}}),h=async()=>{try{return(await p.get("/quote")).data}catch(e){console.error("Error fetching the quote:",e)}},L=async()=>{const e=new Date().toISOString().split("T")[0],t=localStorage.getItem("quote");if(localStorage.getItem("quoteDate")===e&&t)return JSON.parse(t);const o=await h();return o&&(localStorage.setItem("quote",JSON.stringify(o)),localStorage.setItem("quoteDate",e)),o},S=async()=>{const e=await L();e&&(document.querySelector(".description").textContent=e.quote,document.querySelector(".quote-author").textContent=e.author||"")},b=new v;function d(){return JSON.parse(localStorage.getItem("favoriteExercises"))||[]}function q(e){const t=d().filter(r=>r!==e);localStorage.setItem("favoriteExercises",JSON.stringify(t)),g()}async function g(){const e=document.querySelector(".favorites-list");if(!e)return;const t=d();e.innerHTML=t.length?(await Promise.all(t.map(r=>b.getExercisesById(r)))).map($).join(""):`<li class="empty-favorites">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</li>`}function $(e){return`
    <li class="exercises_item" id="${e._id}">
      <div class="exercise-card-header">
        <div class="card-workout">
          <div class="card-workout-logo card-text-logo">Workout</div>
          <div class="workout-logo-addon">${E(e._id)}</div>
        </div>
        <div class="card-start">
          <div class="card-start-name usual-text">Start</div>
          <div class="card-start-arrow">${u.arrow}</div>
        </div>
      </div>
      <div class="card-body">
        <div class="card-body-logo">${u.runner}</div>
        <div class="card-body-name card-text-name">${n(e.name)}</div>
      </div>
      <div class="card-footer">
        ${c("Burned calories",`${e.burnedCalories||0} / ${e.time||0} min`)}
        ${c("Category",n(e.categoryName||""))}
        ${c("Target",n(e.target||""))}
      </div>
    </li>
  `}function c(e,t){return`
    <div class="card-info card-text-info">
      <span class="info-item-name">${e}: </span>
      <span class="long-text">${t}</span>
    </div>
  `}function E(e){return u.recycleBin.replace("CARD_ID",e)}function n(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}const u={recycleBin:`
    <svg class="card-icon recycle-bin" data-id="CARD_ID" width="16" height="16">
        <use href="./img/icons.svg#icon-remove"></use>
    </svg>`,arrow:`
    <svg class="card-icon" width="16" height="16">
        <use href="./img/icons.svg#icon-arrow"></use>
    </svg>`,runner:`
    <svg class="card-icon" width="24" height="24">
        <use href="./img/icons.svg#icon-running-stick"></use>
    </svg>`};document.addEventListener("click",e=>{const t=e.target.closest(".recycle-bin");if(t){const r=t.getAttribute("data-id");q(r)}});document.addEventListener("DOMContentLoaded",()=>{S(),g(),m(),y()});export{v as A,y as a,S as d,m as i};
//# sourceMappingURL=favorites-B2xs-o_g.js.map
