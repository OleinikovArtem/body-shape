import{g as n,a as d}from"./assets/main-CZKex1yv.js";import"./assets/vendor-BAN3Upnh.js";async function l(){try{const e=await n();e?(document.querySelector(".quote-text").textContent=e.quote||"",document.querySelector(".quote-author").textContent=e.author||""):console.log("Failed to load quote of the day.")}catch(e){console.error("Error fetching quote of the day:",e)}}function i(){return JSON.parse(localStorage.getItem("favoriteExercises"))||[]}function u(e){const t=i().filter(r=>r!==e);localStorage.setItem("favoriteExercises",JSON.stringify(t)),c()}async function c(){const e=document.querySelector(".favorites-list"),t=i();e.innerHTML=t.length?(await Promise.all(t.map(r=>d(r)))).map(v).join(""):`<li class="empty-favorites">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</li>`}function v(e){return`
    <li class="exercises_item" id="${e._id}">
      <div class="exercise-card-header">
        <div class="card-workout">
          <div class="card-workout-logo card-text-logo">Workout</div>
          <div class="workout-logo-addon">${g(e._id)}</div>
        </div>
        <div class="card-start">
          <div class="card-start-name usual-text">Start</div>
          <div class="card-start-arrow">${s.arrow}</div>
        </div>
      </div>
      <div class="card-body">
        <div class="card-body-logo">${s.runner}</div>
        <div class="card-body-name card-text-name">${o(e.name)}</div>
      </div>
      <div class="card-footer">
        ${a("Burned calories",`${e.burnedCalories||0} / ${e.time||0} min`)}
        ${a("Category",o(e.categoryName||""))}
        ${a("Target",o(e.target||""))}
      </div>
    </li>
  `}function a(e,t){return`
    <div class="card-info card-text-info">
      <span class="info-item-name">${e}: </span>
      <span class="long-text">${t}</span>
    </div>
  `}function g(e){return s.recycleBin.replace("CARD_ID",e)}function o(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}const s={recycleBin:`
    <svg class="card-icon recycle-bin" data-id="CARD_ID" width="16" height="16">
        <use href="./img/icons.svg#icon-remove"></use>
    </svg>`,arrow:`
    <svg class="card-icon" width="16" height="16">
        <use href="./img/icons.svg#icon-arrow"></use>
    </svg>`,runner:`
    <svg class="card-icon" width="24" height="24">
        <use href="./img/icons.svg#icon-running-stick"></use>
    </svg>`};document.addEventListener("click",e=>{const t=e.target.closest(".recycle-bin");if(t){const r=t.getAttribute("data-id");u(r)}});document.addEventListener("DOMContentLoaded",()=>{l(),c()});
//# sourceMappingURL=favorites.js.map
