import{i as n,a as d,g as l,b as u}from"./assets/menu-BzWsvROQ.js";import"./assets/vendor-BAN3Upnh.js";async function v(){try{const e=await l();e?(document.querySelector(".quote-text").textContent=e.quote||"",document.querySelector(".quote-author").textContent=e.author||""):console.log("Failed to load quote of the day.")}catch(e){console.error("Error fetching quote of the day:",e)}}function s(){return JSON.parse(localStorage.getItem("favoriteExercises"))||[]}function g(e){const t=s().filter(a=>a!==e);localStorage.setItem("favoriteExercises",JSON.stringify(t)),c()}async function c(){const e=document.querySelector(".favorites-list"),t=s();e.innerHTML=t.length?(await Promise.all(t.map(a=>u(a)))).map(f).join(""):`<li class="empty-favorites">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</li>`}function f(e){return`
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
        <div class="card-body-name card-text-name">${i(e.name)}</div>
      </div>
      <div class="card-footer">
        ${r("Burned calories",`${e.burnedCalories||0} / ${e.time||0} min`)}
        ${r("Category",i(e.categoryName||""))}
        ${r("Target",i(e.target||""))}
      </div>
    </li>
  `}function r(e,t){return`
    <div class="card-info card-text-info">
      <span class="info-item-name">${e}: </span>
      <span class="long-text">${t}</span>
    </div>
  `}function m(e){return o.recycleBin.replace("CARD_ID",e)}function i(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}const o={recycleBin:`
    <svg class="card-icon recycle-bin" data-id="CARD_ID" width="16" height="16">
        <use href="./img/icons.svg#icon-remove"></use>
    </svg>`,arrow:`
    <svg class="card-icon" width="16" height="16">
        <use href="./img/icons.svg#icon-arrow"></use>
    </svg>`,runner:`
    <svg class="card-icon" width="24" height="24">
        <use href="./img/icons.svg#icon-running-stick"></use>
    </svg>`};document.addEventListener("click",e=>{const t=e.target.closest(".recycle-bin");if(t){const a=t.getAttribute("data-id");g(a)}});document.addEventListener("DOMContentLoaded",()=>{v(),c(),n(),d()});
//# sourceMappingURL=favorites.js.map
