import{g as l,a as u}from"./assets/api-CTkoU--0.js";import"./assets/vendor-BT7OT44q.js";async function v(){try{const e=await l();if(e){const t=e.quote,a=e.author,o=document.querySelector(".quote-text"),s=document.querySelector(".quote-author");o&&s&&(o.textContent=t,s.textContent=`${a}`)}else console.log("Failed to load quote of the day.")}catch(e){console.error("Error fetching quote of the day:",e)}}document.addEventListener("DOMContentLoaded",v);function n(){const e=localStorage.getItem("favoriteExercises");return e?JSON.parse(e):[]}async function c(){const e=document.querySelector(".favorites-list"),t=n();if(e.innerHTML="",t.length===0){e.innerHTML=`
      <li class="empty-favorites">
        It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.
      </li>
    `;return}const a=t.map(s=>u(s));(await Promise.all(a)).forEach(s=>{const d=g(s);e.insertAdjacentHTML("beforeend",d)})}function g(e){return`
    <li class="exercises_item" id="${e._id}">
      <div class="exercise-card-header">
        <div class="card-workout">
          <div class="card-workout-logo card-text-logo">Workout</div>
          <div class="workout-logo-addon text-usual">${y(!0,e._id,e.rating||0)}</div>
        </div>
        <div class="card-start">
          <div class="card-start-name usual-text">Start</div>
          <div class="card-start-arrow">${r.arrow}</div>
        </div>
      </div>

      <div class="card-body">
        <div class="card-body-logo">${r.runner}</div>
        <div class="card-body-name card-text-name">
          ${i(e.name)}
        </div>
      </div>

      <div class="card-footer">
        <div class="card-info card-text-info">
          <span class="info-item-name">Burned calories: </span>
          <span class="long-text">
            ${e.burnedCalories||0} / ${e.time||0} min
          </span>
        </div>
        <div class="card-info card-text-info">
          <span class="info-item-name">Category: </span>
          <span class="long-text">${i(e.categoryName||"")}</span>
        </div>
        <div class="card-info card-text-info">
          <span class="info-item-name">Target: </span>
          <span class="long-text">${i(e.target||"")}</span>
        </div>
      </div>
    </li>
  `}function f(){document.addEventListener("click",e=>{if(e.target.closest(".recycle-bin")){const t=e.target.closest(".recycle-bin").getAttribute("data-card");m(t),c()}})}function m(e){const a=n().filter(o=>o!==e);localStorage.setItem("favoriteExercises",JSON.stringify(a))}document.addEventListener("DOMContentLoaded",()=>{c(),f()});function i(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}function y(e,t){return e?r.recycleBin.replace("CARD_ID",t):r.rating}const r={recycleBin:`
    <svg class="card-icon recycle-bin" data-card="CARD_ID" width="16" height="16">
        <use href="./img/icons.svg#icon-remove" data-card="CARD_ID"></use>
    </svg>`,arrow:`
    <svg class="card-icon" width="16" height="16">
        <use href="./img/icons.svg#icon-arrow"></use>
    </svg>`,runner:`
    <svg class="card-icon" width="24" height="24">
        <use href="./img/icons.svg#icon-running-stick"></use>
    </svg>`};
//# sourceMappingURL=favorites.js.map
