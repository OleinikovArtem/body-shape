import{i as d,a as l,A as u}from"./assets/menu-D75N_qi-.js";import"./assets/vendor-BT7OT44q.js";const s=new u;async function v(){try{const e=await s.getQuote();e?(document.querySelector(".quote-text").textContent=e.quote||"",document.querySelector(".quote-author").textContent=e.author||""):console.log("Failed to load quote of the day.")}catch(e){console.error("Error fetching quote of the day:",e)}}function c(){return JSON.parse(localStorage.getItem("favoriteExercises"))||[]}function g(e){const t=c().filter(a=>a!==e);localStorage.setItem("favoriteExercises",JSON.stringify(t)),n()}async function n(){const e=document.querySelector(".favorites-list"),t=c();e.innerHTML=t.length?(await Promise.all(t.map(a=>s.getExercisesById(a)))).map(f).join(""):`<li class="empty-favorites">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</li>`}function f(e){return`
    <li class="exercises_item" id="${e._id}">
      <div class="exercise-card-header">
        <div class="card-workout">
          <div class="card-workout-logo card-text-logo">Workout</div>
          <div class="workout-logo-addon">${m(e._id)}</div>
        </div>
        <div class="card-start">
          <div class="card-start-name usual-text">Start</div>
          <div class="card-start-arrow">${o.arrow}</div>
        </div>
      </div>
      <div class="card-body">
        <div class="card-body-logo">${o.runner}</div>
        <div class="card-body-name card-text-name">${r(e.name)}</div>
      </div>
      <div class="card-footer">
        ${i("Burned calories",`${e.burnedCalories||0} / ${e.time||0} min`)}
        ${i("Category",r(e.categoryName||""))}
        ${i("Target",r(e.target||""))}
      </div>
    </li>
  `}function i(e,t){return`
    <div class="card-info card-text-info">
      <span class="info-item-name">${e}: </span>
      <span class="long-text">${t}</span>
    </div>
  `}function m(e){return o.recycleBin.replace("CARD_ID",e)}function r(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}const o={recycleBin:`
    <svg class="card-icon recycle-bin" data-id="CARD_ID" width="16" height="16">
        <use href="./img/icons.svg#icon-remove"></use>
    </svg>`,arrow:`
    <svg class="card-icon" width="16" height="16">
        <use href="./img/icons.svg#icon-arrow"></use>
    </svg>`,runner:`
    <svg class="card-icon" width="24" height="24">
        <use href="./img/icons.svg#icon-running-stick"></use>
    </svg>`};document.addEventListener("click",e=>{const t=e.target.closest(".recycle-bin");if(t){const a=t.getAttribute("data-id");g(a)}});document.addEventListener("DOMContentLoaded",()=>{v(),n(),d(),l()});
//# sourceMappingURL=favorites.js.map
