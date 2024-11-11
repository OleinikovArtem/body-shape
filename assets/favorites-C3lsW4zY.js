import{a as n}from"./vendor-BT7OT44q.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();let B=class{constructor(){this.baseURL="https://your-energy.b.goit.study/api/",this.page=0}async getExercises(t,s,o){try{return(await n.get(`${this.baseURL}exercises?${t}=${s}&page=${o}&limit=10`)).data}catch(r){console.log(r)}}async getExercisesById(t){try{return(await n.get(`${this.baseURL}exercises/${t}`)).data}catch(s){console.log(s)}}async getFilter(t,s){try{return(await n.get(`${this.baseURL}filters?filter=${t}&page=${s}&limit=12`)).data}catch(o){console.log(o)}}async patchRating(t,s){try{return this.page+=1,(await n.patch(`${this.baseURL}exercises/${t}/rating`,s)).data}catch(o){console.log(o)}}};const D="https://your-energy.b.goit.study/api";class N{constructor(){this.baseURL=D,this.page=0}async getExercises(t,s,o=1){const r=`${this.baseURL}/exercises?${t}=${s}&page=${o}&limit=10`;return this.requestGET(r)}async getSearch(t,s,o){const r=`${this.baseURL}/exercises?${s}=${t}&keyword=${o}&page=1&limit=10`;return this.requestGET(r)}async getExercisesById(t){const s=`${this.baseURL}/exercises/${t}`;return this.requestGET(s)}async getFilter(t,s=1){const o=`${this.baseURL}/filters?filter=${t}&page=${s}&limit=12`;return this.requestGET(o)}async getQuote(){const t=`${this.baseURL}/quote`;return this.requestGET(t)}async postSubscriptions(t){const s=`${this.baseURL}/subscription`;return n.post(s,{email:t})}async requestGET(t){try{return(await n.get(t)).data}catch(s){console.error(s)}}}const l="/body-shape/assets/sprite-BEocIRHz.svg",k="/body-shape/assets/modal-exercise-image-m2kO5scW.jpg",U="/body-shape/assets/modal-exercise-image@2x-BIB40OGp.jpg";function H(e){if(!e.target.closest(".js-remove-btn"))return;const t=e.target.closest(".js-remove-btn").getAttribute("data-id"),o=JSON.parse(localStorage.getItem("exerciseData")).filter(r=>r._id!==t);localStorage.setItem("exerciseData",JSON.stringify(o)),E()}function E(){const e=JSON.parse(localStorage.getItem("exerciseData"));if(e.length===0)localFavorite.innerHTML="",localFavorite.insertAdjacentHTML("beforeend",`
     <li class="favorites__empty">
            It appears that you haven't added any exercises to your favorites
            yet. To get started, you can add exercises that you like to your
            favorites for easier access in the future.
          </li>
    `);else{localFavorite.innerHTML="";const t=e.map(({_id:s,name:o,burnedCalories:r,bodyPart:a,target:i})=>`
      <li class="fav-filters__item-card">
        <div class="fav-card__wrap">
          <div class="fav-card__block-btn">
            <div class="fav-card__trash-btn-wrap">
              <p class="fav-card__badge">Workout</p>
              <button class="fav-card__btn js-remove-btn" data-id="${s}" type="button">
                <svg class="fav-card__btn-trash-svg" width="16" height="16">
                <use href="${l}#icon-trash"></use>
                </svg>
              </button>
            </div>
            <button class="fav-card__btn-start card__btn" data-id="${s}" type="button">Start
              <svg class="fav-card__btn-start-svg" width="16" height="16">
                 <use href="${l}#icon-arrow"></use>
              </svg>
            </button>
          </div>

          <div class="fav-card__title-wrap">
            <svg class="fav-card__title-svg" width="24" height="24">
              <use href="${l}#icon-running-stick-figure"></use>
            </svg>
            <h2 class="fav-card__title">${o}</h2>
          </div>

          <div class="fav-card__block-info">
            <p class="fav-card__text-info"><span>Burned calories:</span>${r}</p>
            <p class="fav-card__text-info"><span>Body part:</span>${a}</p>
            <p class="fav-card__text-info"><span>Target:</span>${i}</p>
          </div>
        </div>
      </li>`).join("");localFavorite.insertAdjacentHTML("beforeend",t)}}function G(){document.querySelector(".js-list").addEventListener("click",H)}document.addEventListener("load",G);const j=new B;let g=!1,q;const f=document.querySelector(".modal-exercises"),d=document.querySelector(".overlay"),$=document.querySelector(".js-list");$==null||$.addEventListener("click",P);async function P(e){if(e.target.closest(".card__btn"))try{const t=e.target.closest(".card__btn").getAttribute("data-id"),s=await j.getExercisesById(t);q=t;const o=T(s);F(o),I(),document.querySelector(".modal-exercises__btn-favorites").addEventListener("click",()=>K(s)),document.querySelector(".modal-exercises__btn-close").addEventListener("click",h)}catch(t){console.log(t)}}function I(){const e=window.innerWidth-document.body.offsetWidth+"px";f.classList.remove("hidden"),d.classList.remove("hidden"),document.body.style.paddingRight=e,document.body.style.overflow="hidden"}function F(e){f.innerHTML=e;const t=f.querySelector(".modal-exercises__btn-close");t==null||t.addEventListener("click",h),W()}function J(e){const t="#EEA10C",s="#F4F4F4";let r="";for(let c=0;c<5;c++){const v=`starGradient${c}`,m=c+1<=e?100:c<e?e%1*100:0,y=[{offset:"0%",color:t,opacity:"1"},{offset:`${m}%`,color:t,opacity:"1"},{offset:`${m+1}%`,color:s,opacity:"0.20"}],_=`
        <linearGradient id="${v}" x1="0%" y1="0%" x2="100%" y2="0%">
          ${y.map(u=>`<stop offset="${u.offset}" style="stop-color:${u.color};stop-opacity:${u.opacity}" />`).join("")}
        </linearGradient>
      `,b=`url(#${v})`;r+=`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">${_}<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="${b}" fill-opacity="1"/></svg>`}return`${Number.isInteger(e)?`${e}.0`:e.toFixed(1)} ${r}`}function T({_id:e,bodyPart:t,equipment:s,gifUrl:o,name:r,target:a,description:i,rating:c,burnedCalories:v,time:m,popularity:y}){const _=b(o);function b(x){return x===null||!x?`srcset = '${k} 1x,${U} 2x'
      src = '${k}'`:`src="${x}"`}const u=J(c);return`
  <div class="modal-exercises__container" data-id="${e}">
    <button class="modal-exercises__btn-close">
      <svg width="24" height="24">
        <use href="${l}#icon-menu-mobile-close"></use>
      </svg>
    </button>

    <img
    class="modal-exercises__img"
    ${_}
    alt="Exercise image"
    loading="lazy"
    />

    <div class="modal-exercises__card">
      <h2 class="modal-exercises__name">${r}</h2>
      <div class="modal-exercises__rating">${u}</div>

        <div class="modal-exercises__block">
          <ul class="modal-exercises__list">
            <li class="modal-exercises__item">
              <h3 class="modal-exercises__subtitle">Target</h3>
              <p class="modal-exercises__text">${a}</p>
            </li>

            <li class="modal-exercises__item">
              <h3 class="modal-exercises__subtitle">Body Part</h3>
              <p class="modal-exercises__text">${t}</p>
            </li>

            <li class="modal-exercises__item">
              <h3 class="modal-exercises__subtitle">Equipment</h3>
              <p class="modal-exercises__text">${s}</p>
            </li>

            <li class="modal-exercises__item">
              <h3 class="modal-exercises__subtitle">Popular</h3>
              <p class="modal-exercises__text">${y}</p>
            </li>

            <li class="modal-exercises__item">
              <h3 class="modal-exercises__subtitle">Burned Calories</h3>
              <p class="modal-exercises__text">${v}/${m}</p>
            </li>
          </ul>
          <p class="modal-exercises__description">${i}</p>
        </div>
    </div>
  </div>
  <div class="modal-exercises__btn-container">
  <button class="modal-exercises__btn-favorites modal-exercises__btn" type="button" data-id="${e}">
      Add to favorites
      <svg class="btn-favorites__icon">
        <use href="${l}#icon-favorites"></use>
      </svg>
    </button>
  <button class="modal-exercises__btn-rating modal-exercises__btn" type="button" data-id="${e}">Give a rating</button>
</div>
`}function W(){const e=JSON.parse(localStorage.getItem("exerciseData")),t=document.querySelector(".modal-exercises__btn-favorites");e!=null&&e.some(s=>s._id===q)?(g=!0,t.innerHTML=M()):(g=!1,t.innerHTML=C())}const p="favoriteExercises";function z(e){const t=JSON.parse(localStorage.getItem(p))||[];t.push(e._id),localStorage.setItem(p,JSON.stringify(t))}function Q(e){const t=JSON.parse(localStorage.getItem(p))||[],s=t.filter(o=>o!==e._id);localStorage.setItem(p,JSON.stringify(t.push(s)))}function K(e){console.log("exerciseData",e),g=!g;const t=document.querySelector(".modal-exercises__btn-favorites"),s=document.querySelector(".favorites__list");g?(t.innerHTML=M(),s==null?z(e):setTimeout(()=>{E()},100)):(t.innerHTML=C(),s==null?Q(e):setTimeout(()=>{E()},100))}function C(){return`
  Add to favorites
    <svg class="btn-favorites__icon">
    <use href="${l}#icon-favorites"></use>
    </svg>`}function M(){return`
  Remove from favorites
  <svg class="btn-favorites__icon">
    <use href="${l}#icon-trash"></use>
  </svg>`}function h(){f.classList.add("hidden"),d.classList.add("hidden"),document.body.style.paddingRight="0px",document.body.style.overflow="auto"}d==null||d.addEventListener("click",function(e){e.target===d&&h()});document.addEventListener("keydown",function(e){e.key==="Escape"&&!f.classList.contains("hidden")&&h()});const V=()=>{const e=document.querySelector(".burger-menu"),t=document.querySelector(".menu"),s=document.querySelector(".menu-backdrop"),o=document.querySelector(".close-menu-button"),r=document.querySelector(".mobile-nav-list"),a=()=>{t.classList.toggle("active"),s.classList.toggle("active"),e.classList.toggle("active")};e.addEventListener("click",a),s.addEventListener("click",a),o.addEventListener("click",a),r.addEventListener("click",a)},Z=()=>{const e=document.querySelectorAll(".nav-link"),t=window.location.pathname.split("/").pop()||"index.html",s=o=>o===t;e.forEach(o=>{s(o.getAttribute("href"))&&o.classList.add("active")})},X=n.create({baseURL:"https://your-energy.b.goit.study/api",headers:{Accept:"application/json"}}),Y=async()=>{try{return(await X.get("/quote")).data}catch(e){console.error("Error fetching the quote:",e)}},ee=async()=>{const e=new Date().toISOString().split("T")[0],t=localStorage.getItem("quote");if(localStorage.getItem("quoteDate")===e&&t)return JSON.parse(t);const o=await Y();return o&&(localStorage.setItem("quote",JSON.stringify(o)),localStorage.setItem("quoteDate",e)),o},te=async()=>{const e=await ee();e&&(document.querySelector(".description").textContent=e.quote,document.querySelector(".quote-author").textContent=e.author||"")},O=new N;async function se(e){const t=e.target.closest(".card__btn");if(t)try{const s=t.getAttribute("data-id"),o=await O.getExercisesById(s),r=T(o);F(r),I()}catch(s){console.error("Error fetching exercise data:",s)}}function R(){return JSON.parse(localStorage.getItem("favoriteExercises"))||[]}function oe(e){const t=R().filter(s=>s!==e);localStorage.setItem("favoriteExercises",JSON.stringify(t)),A()}async function A(){const e=document.querySelector(".favorites-list");if(!e)return;const t=R();e.innerHTML=t.length?(await Promise.all(t.map(s=>O.getExercisesById(s)))).map(re).join(""):`<li class="empty-favorites">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</li>`}function re(e){return`
    <li class="exercises_item" id="${e._id}">
      <div class="exercise-card-header">
        <div class="card-workout">
          <div class="card-workout-logo card-text-logo">Workout</div>
          <div class="workout-logo-addon">${ae(e._id)}</div>
        </div>
        <button class="card__btn card-start" data-id="${e._id}" type="button">
          <span class="card-start-name usual-text">Start</span>
          <span class="card-start-arrow">${w.arrow}</span>
        </button>
      </div>
      <div class="card-body">
        <div class="card-body-logo">${w.runner}</div>
        <div class="card-body-name card-text-name">${S(e.name)}</div>
      </div>
      <div class="card-footer">
        ${L("Burned calories",`${e.burnedCalories||0} / ${e.time||0} min`)}
        ${L("Category",S(e.categoryName||""))}
        ${L("Target",S(e.target||""))}
      </div>
    </li>
  `}function L(e,t){return`
    <div class="card-info card-text-info">
      <span class="info-item-name">${e}: </span>
      <span class="long-text">${t}</span>
    </div>
  `}function ae(e){return w.recycleBin.replace("CARD_ID",e)}function S(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}const w={recycleBin:`
    <svg class="card-icon recycle-bin" data-id="CARD_ID" width="16" height="16">
        <use href="./img/icons.svg#icon-remove"></use>
    </svg>`,arrow:`
    <svg class="card-icon" width="16" height="16">
        <use href="./img/icons.svg#icon-arrow"></use>
    </svg>`,runner:`
    <svg class="card-icon" width="24" height="24">
        <use href="./img/icons.svg#icon-running-stick"></use>
    </svg>`};document.addEventListener("click",e=>{const t=e.target.closest(".recycle-bin");if(t){const s=t.getAttribute("data-id");oe(s)}});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".favorites-list");e&&e.addEventListener("click",se),te(),A(),V(),Z()});export{N as A,V as a,Z as b,te as d,l as i};
//# sourceMappingURL=favorites-C3lsW4zY.js.map
