import{g as c,a as d}from"./assets/api-CTkoU--0.js";import"./assets/vendor-BT7OT44q.js";async function u(){try{const e=await c();if(e){const t=e.quote,r=e.author,s=document.querySelector(".quote-text"),o=document.querySelector(".quote-author");s&&o&&(s.textContent=t,o.textContent=`${r}`)}else console.log("Failed to load quote of the day.")}catch(e){console.error("Error fetching quote of the day:",e)}}document.addEventListener("DOMContentLoaded",u);function i(){const e=localStorage.getItem("favoriteExercises");return e?JSON.parse(e):[]}async function n(){const e=document.querySelector(".favorites-list"),t=i();if(e.innerHTML="",t.length===0){e.innerHTML=`
      <li class="empty-favorites">
        It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.
      </li>
    `;return}const r=t.map(o=>d(o));(await Promise.all(r)).forEach(o=>{const a=l(o);e.insertAdjacentHTML("beforeend",a)})}function l(e){return`
    <li class="exercises_item" id="${e._id}">
      <div">Card-exercise
      </div>
    </li>
  `}function f(){document.addEventListener("click",e=>{if(e.target.classList.contains("remove-favorite-btn")){const t=e.target.getAttribute("data-id");v(t),n()}})}function v(e){const r=i().filter(s=>s!==e);localStorage.setItem("favoriteExercises",JSON.stringify(r))}document.addEventListener("DOMContentLoaded",()=>{n(),f()});
//# sourceMappingURL=favorites.js.map
