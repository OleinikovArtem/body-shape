import{a as u}from"./vendor-BT7OT44q.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const v="https://your-energy.b.goit.study/api";class m{constructor(){this.baseURL=v,this.page=0}async getExercises(t,r,i=1){const s=`${this.baseURL}/exercises?${t}=${r}&page=${i}&limit=10`;return this.requestGET(s)}async getSearch(t,r,i){const s=`${this.baseURL}/exercises?${t}=${r}&keyword=${i}&page=1&limit=10`;return this.requestGET(s)}async getExercisesById(t){const r=`${this.baseURL}/exercises/${t}`;return this.requestGET(r)}async getFilter(t,r=1){const i=`${this.baseURL}/filters?filter=${t}&page=${r}&limit=12`;return this.requestGET(i)}async getQuote(){const t=`${this.baseURL}/quote`;return this.requestGET(t)}async postSubscriptions(t){const r=`${this.baseURL}/subscription`;return u.post(r,{email:t})}async requestGET(t){try{return(await u.get(t)).data}catch(r){console.error(r)}}}const y=()=>{const e=document.querySelector(".burger-menu"),t=document.querySelector(".menu"),r=document.querySelector(".menu-backdrop"),i=document.querySelector(".close-menu-button"),s=document.querySelector(".mobile-nav-list"),o=()=>{t.classList.toggle("active"),r.classList.toggle("active"),e.classList.toggle("active")};e.addEventListener("click",o),r.addEventListener("click",o),i.addEventListener("click",o),s.addEventListener("click",o)},p=()=>{const e=document.querySelectorAll(".nav-link"),t=window.location.pathname.split("/").pop()||"index.html",r=i=>i===t;e.forEach(i=>{r(i.getAttribute("href"))&&i.classList.add("active")})},d=new m;async function h(){try{const e=await d.getQuote();e?(document.querySelector(".quote-text").textContent=e.quote||"",document.querySelector(".quote-author").textContent=e.author||""):console.log("Failed to load quote of the day.")}catch(e){console.error("Error fetching quote of the day:",e)}}function g(){return JSON.parse(localStorage.getItem("favoriteExercises"))||[]}function L(e){const t=g().filter(r=>r!==e);localStorage.setItem("favoriteExercises",JSON.stringify(t)),f()}async function f(){const e=document.querySelector(".favorites-list");if(!e)return;const t=g();e.innerHTML=t.length?(await Promise.all(t.map(r=>d.getExercisesById(r)))).map($).join(""):`<li class="empty-favorites">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</li>`}function $(e){return`
    <li class="exercises_item" id="${e._id}">
      <div class="exercise-card-header">
        <div class="card-workout">
          <div class="card-workout-logo card-text-logo">Workout</div>
          <div class="workout-logo-addon">${b(e._id)}</div>
        </div>
        <div class="card-start">
          <div class="card-start-name usual-text">Start</div>
          <div class="card-start-arrow">${l.arrow}</div>
        </div>
      </div>
      <div class="card-body">
        <div class="card-body-logo">${l.runner}</div>
        <div class="card-body-name card-text-name">${a(e.name)}</div>
      </div>
      <div class="card-footer">
        ${n("Burned calories",`${e.burnedCalories||0} / ${e.time||0} min`)}
        ${n("Category",a(e.categoryName||""))}
        ${n("Target",a(e.target||""))}
      </div>
    </li>
  `}function n(e,t){return`
    <div class="card-info card-text-info">
      <span class="info-item-name">${e}: </span>
      <span class="long-text">${t}</span>
    </div>
  `}function b(e){return l.recycleBin.replace("CARD_ID",e)}function a(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}const l={recycleBin:`
    <svg class="card-icon recycle-bin" data-id="CARD_ID" width="16" height="16">
        <use href="./img/icons.svg#icon-remove"></use>
    </svg>`,arrow:`
    <svg class="card-icon" width="16" height="16">
        <use href="./img/icons.svg#icon-arrow"></use>
    </svg>`,runner:`
    <svg class="card-icon" width="24" height="24">
        <use href="./img/icons.svg#icon-running-stick"></use>
    </svg>`};document.addEventListener("click",e=>{const t=e.target.closest(".recycle-bin");if(t){const r=t.getAttribute("data-id");L(r)}});document.addEventListener("DOMContentLoaded",()=>{h(),f(),y(),p()});export{m as A,p as a,y as i};
//# sourceMappingURL=favorites-BPdBERSP.js.map
