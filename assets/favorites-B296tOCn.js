import{a as c}from"./vendor-BT7OT44q.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();const y="https://your-energy.b.goit.study/api";class m{constructor(){this.baseURL=y,this.page=0}resetPage(){this.page=0}async getExercises(e,t,s=1){const o=`${this.baseURL}/exercises?${e}=${t}&page=${s}&limit=10`;return this.requestGET(o)}async getSearch(e,t,s){const o=`${this.baseURL}/exercises?${e}=${t}&keyword=${s}&page=1&limit=10`;return this.requestGET(o)}async getExercisesById(e){const t=`${this.baseURL}/exercises/${e}`;return this.requestGET(t)}async getFilter(e,t=1){const s=`${this.baseURL}/filters?filter=${e}&page=${t}&limit=12`;return this.requestGET(s)}async getExercisesByCategory(e=1,t=12,s="Muscles"){const o={filter:s,page:e,limit:t},i=`${this.baseURL}/filters?${this.getParameters(o)}`;return this.requestGET(i)}async getExercisesByKeyword(e=1,t=12,s,o,i){const a={page:e,limit:t};a[s]=o,i&&(a.keyword=i);const h=`${this.baseURL}/exercises?${this.getParameters(a)}`;return this.requestGET(h)}async getQuote(){const e=`${this.baseURL}/quote`;return this.requestGET(e)}async patchRating(e,t){const s=`${this.baseURL}/exercises/${e}/rating`;return this.requestPATCH(s,t)}async postSubscriptions(e){const t=`${this.baseURL}/subscription`;return this.requestPOST(t,{email:e})}async rateExercise(e,t=0,s="",o=""){const i=`${this.baseURL}/exercises/${e}/rating`;return this.requestPATCH(i,{rate:t,email:s,review:o})}async requestGET(e){try{return(await c.get(e)).data}catch(t){console.error(t)}}async requestPOST(e,t){try{return(await c.post(e,t)).data}catch(s){console.error(s)}}async requestPATCH(e,t){try{return(await c.patch(e,t)).data}catch(s){console.error(s)}}getParameters(e){return new URLSearchParams(e).toString()}}const v=()=>{const r=document.querySelector(".burger-menu"),e=document.querySelector(".menu"),t=document.querySelector(".menu-backdrop"),s=document.querySelector(".close-menu-button"),o=document.querySelector(".mobile-nav-list"),i=()=>{e.classList.toggle("active"),t.classList.toggle("active"),r.classList.toggle("active")};r.addEventListener("click",i),t.addEventListener("click",i),s.addEventListener("click",i),o.addEventListener("click",i)},p=()=>{const r=document.querySelectorAll(".nav-link"),e=window.location.pathname.split("/").pop()||"index.html",t=s=>s===e;r.forEach(s=>{t(s.getAttribute("href"))&&s.classList.add("active")})},d=new m;async function $(){try{const r=await d.getQuote();r?(document.querySelector(".quote-text").textContent=r.quote||"",document.querySelector(".quote-author").textContent=r.author||""):console.log("Failed to load quote of the day.")}catch(r){console.error("Error fetching quote of the day:",r)}}function g(){return JSON.parse(localStorage.getItem("favoriteExercises"))||[]}function L(r){const e=g().filter(t=>t!==r);localStorage.setItem("favoriteExercises",JSON.stringify(e)),f()}async function f(){const r=document.querySelector(".favorites-list");if(!r)return;const e=g();r.innerHTML=e.length?(await Promise.all(e.map(t=>d.getExercisesById(t)))).map(E).join(""):`<li class="empty-favorites">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</li>`}function E(r){return`
    <li class="exercises_item" id="${r._id}">
      <div class="exercise-card-header">
        <div class="card-workout">
          <div class="card-workout-logo card-text-logo">Workout</div>
          <div class="workout-logo-addon">${b(r._id)}</div>
        </div>
        <div class="card-start">
          <div class="card-start-name usual-text">Start</div>
          <div class="card-start-arrow">${u.arrow}</div>
        </div>
      </div>
      <div class="card-body">
        <div class="card-body-logo">${u.runner}</div>
        <div class="card-body-name card-text-name">${l(r.name)}</div>
      </div>
      <div class="card-footer">
        ${n("Burned calories",`${r.burnedCalories||0} / ${r.time||0} min`)}
        ${n("Category",l(r.categoryName||""))}
        ${n("Target",l(r.target||""))}
      </div>
    </li>
  `}function n(r,e){return`
    <div class="card-info card-text-info">
      <span class="info-item-name">${r}: </span>
      <span class="long-text">${e}</span>
    </div>
  `}function b(r){return u.recycleBin.replace("CARD_ID",r)}function l(r){return r?r.charAt(0).toUpperCase()+r.slice(1):""}const u={recycleBin:`
    <svg class="card-icon recycle-bin" data-id="CARD_ID" width="16" height="16">
        <use href="./img/icons.svg#icon-remove"></use>
    </svg>`,arrow:`
    <svg class="card-icon" width="16" height="16">
        <use href="./img/icons.svg#icon-arrow"></use>
    </svg>`,runner:`
    <svg class="card-icon" width="24" height="24">
        <use href="./img/icons.svg#icon-running-stick"></use>
    </svg>`};document.addEventListener("click",r=>{const e=r.target.closest(".recycle-bin");if(e){const t=e.getAttribute("data-id");L(t)}});document.addEventListener("DOMContentLoaded",()=>{$(),f(),v(),p()});export{m as A,p as a,v as i};
//# sourceMappingURL=favorites-B296tOCn.js.map
