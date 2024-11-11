import{a as y}from"./vendor-BcxMf0ji.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();const g=y.create({baseURL:"https://your-energy.b.goit.study/api",headers:{Accept:"application/json"}}),k=async(e="Muscles",t=1)=>{const s=window.innerWidth<768?9:12;try{return(await g.get("/filters",{params:{filter:e,page:t,limit:s}})).data}catch(r){console.error("Error fetching categories:",r)}},b=async()=>{try{return(await g.get("/quote")).data}catch(e){console.error("Error fetching the quote:",e)}},M=async({bodypart:e="",muscles:t="",equipment:o="",keyword:s="",page:r=1,limit:i=10})=>{try{return(await g.get("/exercises",{params:{bodypart:e,muscles:t,equipment:o,keyword:s,page:r,limit:i}})).data}catch(l){console.error("Error fetching exercises:",l)}},w=async e=>{try{return(await g.get(`/exercises/${e}`)).data}catch(t){console.error("Error fetching exercise by id:",t)}},T=async e=>{var o,s;const t=await g.post("/subscription",{email:e});if((o=t.data)!=null&&o.error)throw new Error(((s=t.data)==null?void 0:s.error)||"Subscription failed");return t.data},S=(e,t)=>{t.style.display=e.value?"flex":"none"},O=(e,t)=>{e.value="",S(e,t),e.focus()},I=e=>{window.scrollTo({top:e.offsetTop,behavior:"smooth"})},f=e=>parseFloat(Math.round(e)).toFixed(1),B=(e,t)=>{let o;return(...s)=>{o&&clearTimeout(o),o=setTimeout(()=>{e(...s)},t)}},F=(e,t)=>{e.innerHTML=t?`Exercises /<span>${t}</span>`:"Exercises"},N=e=>e.map(({filter:t,name:o,imgURL:s})=>`
    <li class="categories-list-item" data-filter="${t}" data-name="${o}"
      style="background-image: linear-gradient(0deg, rgba(17, 17, 17, 0.5), rgba(17, 17, 17, 0.5)), url(${s})">
      <p class="categories-list-item-title">${o}</p>
      <p class="categories-list-item-sub-title">${t}</p>
    </li>
  `).join(""),x=(e,t)=>e.map(({rating:o,name:s,bodyPart:r,target:i,burnedCalories:l,_id:u})=>`
    <li class="exercise-list-item" data-id="${u}">
      <div class="first-row">
        <div class="workout-element">WORKOUT</div>
        ${t?`
            <button type="button" data-id="${u}" class="favorites-delete-button">
              <svg width="20" height="20">
                <use href="./img/sprite.svg#icon-trash"></use>
              </svg>
            </button>
            `:`
            <div class="rating-holder">
              <span>${f(o)}</span>
              <svg width="18" height="18">
                <use href="./img/sprite.svg#icon-star"></use>
              </svg>
            </div>
        `}
        <button class="start-button">
          Start
          <svg width="16" height="16">
            <use href="./img/sprite.svg#icon-arrow-right"></use>
          </svg>
        </button>
      </div>
      <div class="second-row">
        <svg width="24" height="24">
          <use href="./img/sprite.svg#icon-running-black"></use>
        </svg>
        <p>${s}</p>
      </div>
      <ul class="exercise-description-list">
        <li><span>Burned calories:</span> ${l} / 3 min</li>
        <li><span>Body part:</span> ${r}</li>
        <li><span>Target:</span> ${i}</li>
      </ul>
    </li>
  `).join(""),L=(e,t)=>{const{name:o,rating:s,gifUrl:r,target:i,bodyPart:l,equipment:u,popularity:p,burnedCalories:a,description:n,time:c}=e,d=Array.from({length:5}).map((v,m)=>`
        <li>
          <svg width="18" height="18" class="rating-icon ${m<f(s)?"active":""}">
            <use href="./img/sprite.svg#icon-star"></use>
          </svg>
        </li>`).join("");return`
    <button class="close-modal">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none">
        <path
          stroke="#F4F4F4"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19.833 8.167 8.167 19.833m0-11.666 11.666 11.666"
        />
      </svg>
    </button>
    <img src="${r}" alt="${o}" class="exercise-gif" />
    <div>
      <div class="modal-content-holder">
        <h2 class="exercise-name">${o}</h2>
        <div class="exercise-rating">
          <span>${f(s)}</span>
          <ul class="rating-holder">${d}</ul>
        </div>
        <ul class="modal-exercise-description-list">
          <li>Target <span>${i}</span></li>
          <li>Body Part <span>${l}</span></li>
          <li>Equipment <span>${u}</span></li>
          <li>Popular <span>${p}</span></li>
          <li>Calories Burned <span>${a}/${c} min</span></li>
        </ul>
        <p class="exercise-description">${n}</p>
      </div>
      <button class="favorite-button ${t?"favorited":""}">
        ${t?"Remove from Favorites":"Add to Favorites"}
        <svg width="20" height="20">
          <use href="./img/sprite.svg#${t?"icon-trash":"icon-heart"}"></use>
        </svg>
      </button>
    </div>
  `},$=async()=>{const e=new Date().toISOString().split("T")[0],t=localStorage.getItem("quote");if(localStorage.getItem("quoteDate")===e&&t)return JSON.parse(t);const s=await b();return s&&(localStorage.setItem("quote",JSON.stringify(s)),localStorage.setItem("quoteDate",e)),s},A=async()=>{const e=await $();e&&(document.querySelector(".description").textContent=e.quote,document.querySelector(".quote-author").textContent=e.author||"")},h=()=>{const e=document.querySelector(".exercises-list"),t=document.querySelector(".exercises-container"),o=JSON.parse(localStorage.getItem("favorites"))||[];e.innerHTML="",o.length>0?e.insertAdjacentHTML("beforeend",x(o,!0)):t.insertAdjacentHTML("beforeend",`
      <p class="exercises-empty-text">
        It appears that you haven't added any exercises to your favorites yet. 
        To get started, you can add exercises that you like to your favorites 
        for easier access in the future.
      </p>
      `)},j=()=>{const e=document.querySelector(".modal-backdrop"),t=document.querySelector(".modal"),o=document.querySelector(".exercises-list"),s=a=>(JSON.parse(localStorage.getItem("favorites"))||[]).some(c=>c._id===a),r=a=>{a.key==="Escape"&&i()},i=()=>{e.classList.remove("active"),t.classList.remove("active"),document.body.classList.remove("modal-open"),t.innerHTML="",document.removeEventListener("keydown",r)},l=a=>{const n=t.querySelector(".favorite-button"),c=s(a);n&&(n.innerHTML=`
        ${c?"Remove from Favorites":"Add to Favorites"}
        <svg width="20" height="20">
          <use href="./img/sprite.svg#${c?"icon-trash":"icon-heart"}"></use>
        </svg>
      `)},u=a=>{const n=JSON.parse(localStorage.getItem("favorites"))||[],c=n.some(d=>d._id===a._id);localStorage.setItem("favorites",JSON.stringify(c?n.filter(d=>d._id!==a._id):[...n,a])),l(a._id),window.location.pathname.endsWith("favorites.html")&&h()},p=async a=>{try{const n=await w(a);t.innerHTML=L(n,s(a));const c=t.querySelector(".close-modal"),d=t.querySelector(".favorite-button");e.classList.add("active"),t.classList.add("active"),document.body.classList.add("modal-open"),document.addEventListener("keydown",r),c&&c.addEventListener("click",i),d&&d.addEventListener("click",()=>u(n))}catch(n){console.error("Failed to fetch exercise details:",n)}};o.addEventListener("click",a=>{const n=a.target.closest(".favorites-delete-button"),c=a.target.closest(".exercise-list-item");if(n){const d=n.dataset.id,v=JSON.parse(localStorage.getItem("favorites"))||[];localStorage.setItem("favorites",JSON.stringify(v.filter(m=>m._id!==d))),h()}c&&!n&&p(c.dataset.id)}),e.addEventListener("click",i)},C=()=>{const e=document.querySelector(".burger-menu"),t=document.querySelector(".menu"),o=document.querySelector(".menu-backdrop"),s=document.querySelector(".close-menu-button"),r=document.querySelector(".mobile-nav-list"),i=()=>{t.classList.toggle("active"),o.classList.toggle("active"),e.classList.toggle("active")};e.addEventListener("click",i),o.addEventListener("click",i),s.addEventListener("click",i),r.addEventListener("click",i)},J=()=>{const e=document.querySelectorAll(".nav-link"),t=window.location.pathname.split("/").pop()||"index.html",o=s=>s===t;e.forEach(s=>{o(s.getAttribute("href"))&&s.classList.add("active")})};export{k as a,N as b,O as c,T as d,B as e,M as f,x as g,J as h,C as i,A as j,j as k,h as l,F as r,I as s,S as t};
//# sourceMappingURL=menu-C5DEMRyk.js.map
