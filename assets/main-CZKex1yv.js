import{a as m}from"./vendor-BAN3Upnh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const L={BASE_URL:"https://your-energy.b.goit.study/api",EXERCISES:"/exercises",FILTERS:"/filters",QUOTE:"/quote",SUBSCRIPTION:"/subscription",RATING:"/rating"};function Ie(){return D(R(L.QUOTE))}function Fe(e){const t=R(L.EXERCISES)+`/${e}`;return D(t)}async function Ae(e){const t=R(L.SUBSCRIPTION);return re(t,{email:e})}async function D(e){return m.get(e).then(t=>t.data).catch(t=>t.response)}async function re(e,t){return m.post(e,t).then(s=>s).catch(s=>s.response)}function R(e,t){return L.BASE_URL+e+""}class H{constructor(){this.baseURL="https://your-energy.b.goit.study/api/",this.page=0}async getExercises(t,s,n){try{return(await m.get(`${this.baseURL}exercises?${t}=${s}&page=${n}&limit=10`)).data}catch(r){console.log(r)}}async getExercisesById(t){try{return(await m.get(`${this.baseURL}exercises/${t}`)).data}catch(s){console.log(s)}}async getFilter(t,s){try{return(await m.get(`${this.baseURL}filters?filter=${t}&page=${s}&limit=12`)).data}catch(n){console.log(n)}}async patchRating(t,s){try{return this.page+=1,(await m.patch(`${this.baseURL}exercises/${t}/rating`,s)).data}catch(n){console.log(n)}}}const ae=new H,C=document.querySelector(".js-list"),N=document.getElementById("pagination-numbers");let f=1;O("Muscles",f);async function O(e,t){try{const{results:s,totalPages:n}=await ae.getFilter(e,t);ie({results:s,totalPages:n}),oe(s)}catch(s){console.log(s)}}function oe(e){C.innerHTML="";const t=e.map(({filter:s,name:n,imgURL:r})=>`
  <li class="filters__item">
    <img class="filters__img-first" src="${r}"></img>
    <div class="filters__wrapper-first">
    <h2 class="filters__title-first">${s}</h2>
    <p class="filters__text-first">${n}</p>
    </div>
  </li>
    `).join("");C.insertAdjacentHTML("beforeend",t)}document.querySelectorAll(".btnFilters").forEach(e=>{e.addEventListener("click",()=>{const t=e.innerText;C.innerHTML="",f=1,O(t,f)})});function ie({results:e,totalPages:t}){if(N.innerHTML="",t<=1)return;const s=e[0].filter;for(let n=1;n<=t;n++){const r=document.createElement("button");r.className="pagination-button",r.textContent=n,N.appendChild(r),r.addEventListener("click",()=>{ce(s,n)})}G()}async function ce(e,t){f=t,await O(e,f),G(),le()}const G=()=>{document.querySelectorAll(".pagination-button").forEach((e,t)=>{e.classList.remove("active-btn"),t+1===f&&e.classList.add("active-btn")})};function le(){window.scrollTo({top:830,behavior:"auto"})}const d="/body-shape/assets/sprite-DRmPffTB.svg",U="/body-shape/assets/modal-exercise-image-m2kO5scW.jpg",de="/body-shape/assets/modal-exercise-image@2x-BIB40OGp.jpg",p=document.querySelector(".js-list");p.addEventListener("click",ue);function ue(e){if(!e.target.closest(".js-remove-btn"))return;const t=e.target.closest(".js-remove-btn").getAttribute("data-id"),n=JSON.parse(localStorage.getItem("exerciseData")).filter(r=>r._id!==t);localStorage.setItem("exerciseData",JSON.stringify(n)),I()}function I(){const e=JSON.parse(localStorage.getItem("exerciseData"));if(e.length===0)p.innerHTML="",p.insertAdjacentHTML("beforeend",`
     <li class="favorites__empty">
            It appears that you haven't added any exercises to your favorites
            yet. To get started, you can add exercises that you like to your
            favorites for easier access in the future.
          </li>
    `);else{p.innerHTML="";const t=e.map(({_id:s,name:n,burnedCalories:r,bodyPart:o,target:a})=>`
      <li class="fav-filters__item-card">
        <div class="fav-card__wrap">
          <div class="fav-card__block-btn">
            <div class="fav-card__trash-btn-wrap">
              <p class="fav-card__badge">Workout</p>
              <button class="fav-card__btn js-remove-btn" data-id="${s}" type="button">
                <svg class="fav-card__btn-trash-svg" width="16" height="16">
                <use href="${d}#icon-trash"></use>
                </svg>
              </button>
            </div>
            <button class="fav-card__btn-start card__btn" data-id="${s}" type="button">Start
              <svg class="fav-card__btn-start-svg" width="16" height="16">
                 <use href="${d}#icon-arrow"></use>
              </svg>
            </button>
          </div>

          <div class="fav-card__title-wrap">
            <svg class="fav-card__title-svg" width="24" height="24">
              <use href="${d}#icon-running-stick-figure"></use>
            </svg>
            <h2 class="fav-card__title">${n}</h2>
          </div>

          <div class="fav-card__block-info">
            <p class="fav-card__text-info"><span>Burned calories:</span>${r}</p>
            <p class="fav-card__text-info"><span>Body part:</span>${o}</p>
            <p class="fav-card__text-info"><span>Target:</span>${a}</p>
          </div>
        </div>
      </li>`).join("");p.insertAdjacentHTML("beforeend",t)}}const me=new H;let _=!1,W;const $=document.querySelector(".modal-exercises"),b=document.querySelector(".overlay"),fe=document.querySelector(".js-list");fe.addEventListener("click",ge);async function ge(e){if(e.target.closest(".card__btn"))try{const t=e.target.closest(".card__btn").getAttribute("data-id"),s=await me.getExercisesById(t);W=t;const n=he(s);ve(n),pe(),document.querySelector(".modal-exercises__btn-favorites").addEventListener("click",be),document.querySelector(".modal-exercises__btn-close").addEventListener("click",P)}catch(t){console.log(t)}}function pe(){const e=window.innerWidth-document.body.offsetWidth+"px";$.classList.remove("hidden"),b.classList.remove("hidden"),document.body.style.paddingRight=e,document.body.style.overflow="hidden"}function ve(e){$.innerHTML=e,ye()}function _e(e){const t="#EEA10C",s="#F4F4F4";let r="";for(let i=0;i<5;i++){const l=`starGradient${i}`,c=i+1<=e?100:i<e?e%1*100:0,u=[{offset:"0%",color:t,opacity:"1"},{offset:`${c}%`,color:t,opacity:"1"},{offset:`${c+1}%`,color:s,opacity:"0.20"}],k=`
        <linearGradient id="${l}" x1="0%" y1="0%" x2="100%" y2="0%">
          ${u.map(g=>`<stop offset="${g.offset}" style="stop-color:${g.color};stop-opacity:${g.opacity}" />`).join("")}
        </linearGradient>
      `,M=`url(#${l})`;r+=`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">${k}<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="${M}" fill-opacity="1"/></svg>`}return`${Number.isInteger(e)?`${e}.0`:e.toFixed(1)} ${r}`}function he({_id:e,bodyPart:t,equipment:s,gifUrl:n,name:r,target:o,description:a,rating:i,burnedCalories:l,time:c,popularity:u}){const k=M(n);function M(q){return q===null||!q?`srcset = '${U} 1x,${de} 2x'
      src = '${U}'`:`src="${q}"`}const g=_e(i);return`
  <div class="modal-exercises__container" data-id="${e}">
    <button class="modal-exercises__btn-close">
      <svg width="24" height="24">
        <use href="${d}#icon-menu-mobile-close"></use>
      </svg>
    </button>

    <img
    class="modal-exercises__img"
    ${k}
    alt="Exercise image"
    loading="lazy"
    />

    <div class="modal-exercises__card">
      <h2 class="modal-exercises__name">${r}</h2>
      <div class="modal-exercises__rating">${g}</div>

        <div class="modal-exercises__block">
          <ul class="modal-exercises__list">
            <li class="modal-exercises__item">
              <h3 class="modal-exercises__subtitle">Target</h3>
              <p class="modal-exercises__text">${o}</p>
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
              <p class="modal-exercises__text">${u}</p>
            </li>
            
            <li class="modal-exercises__item">
              <h3 class="modal-exercises__subtitle">Burned Calories</h3>
              <p class="modal-exercises__text">${l}/${c}</p>
            </li>
          </ul>
          <p class="modal-exercises__description">${a}</p>
        </div>
    </div>
  </div>
  <div class="modal-exercises__btn-container">
  <button class="modal-exercises__btn-favorites modal-exercises__btn" type="button" data-id="${e}">
      Add to favorites
      <svg class="btn-favorites__icon">
        <use href="${d}#icon-favorites"></use>
      </svg>
    </button>
  <button class="modal-exercises__btn-rating modal-exercises__btn" type="button" data-id="${e}">Give a rating</button>
</div>
`}function ye(){const e=JSON.parse(localStorage.getItem("exerciseData")),t=document.querySelector(".modal-exercises__btn-favorites");e!=null&&e.some(s=>s._id===W)?(_=!0,t.innerHTML=Q()):(_=!1,t.innerHTML=J())}function be(){_=!_;const e=document.querySelector(".modal-exercises__btn-favorites"),t=document.querySelector(".favorites__list");_?(e.innerHTML=Q(),t==null?console.log(""):setTimeout(()=>{I()},100)):(e.innerHTML=J(),t==null?console.log(""):setTimeout(()=>{I()},100))}function J(){return`
  Add to favorites
    <svg class="btn-favorites__icon">
    <use href="${d}#icon-favorites"></use>
    </svg>`}function Q(){return`
  Remove from favorites
  <svg class="btn-favorites__icon">
    <use href="${d}#icon-trash"></use>
  </svg>`}function P(){$.classList.add("hidden"),b.classList.add("hidden"),document.body.style.paddingRight="0px",document.body.style.overflow="auto"}b.addEventListener("click",function(e){e.target===b&&P()});document.addEventListener("keydown",function(e){e.key==="Escape"&&!$.classList.contains("hidden")&&P()});const j=document.querySelector(".modal-exercises"),E=document.querySelector(".modal-rating"),xe=document.querySelector(".rating-close-btn"),X=document.querySelector(".form__btn"),h=document.querySelector(".rating__value"),S=document.querySelector(".rating-email"),w=document.querySelector(".rating-comment");j.addEventListener("click",Le);xe.addEventListener("click",T);E.addEventListener("click",$e);document.addEventListener("keydown",Ee);function Le(e){e.target.closest(".modal-exercises__btn-rating")&&(E.classList.remove("is-hidden"),j.classList.add("hidden"))}function T(){E.classList.add("is-hidden"),j.classList.remove("hidden")}function $e(e){e.target===E&&T()}function Ee(e){e.key==="Escape"&&T()}const F=document.querySelectorAll(".rating");F.length>0&&Se();function v(e,t,s){const n=parseFloat(s)*20;e.style.width=`${n}%`,t.innerHTML=parseFloat(s).toFixed(1)}function Se(){let e,t,s;for(let a=0;a<F.length;a++){const i=F[a];n(i)}function n(a){r(a),v(e,t,s),a.classList.contains("rating_set")&&o(a)}function r(a){e=a.querySelector(".rating__active"),t=a.querySelector(".rating__value"),s=parseFloat(t.innerHTML)}function o(a){const i=a.querySelectorAll(".rating__item");for(let l=0;l<i.length;l++){const c=i[l];c.addEventListener("mouseenter",function(){r(a),v(e,t,(l+1).toFixed(1))}),c.addEventListener("mouseleave",function(){v(e,t,s)}),c.addEventListener("click",function(){r(a);const u=(l+1).toFixed(1);u!=="0.0"&&(s=u,a.dataset.ajax?setRatingValue(s,a):(t.innerHTML=s,v(e,t,s)),y())})}}}function z(){const e=S.value.trim(),t=w.value.trim(),s=h.innerHTML.trim();return e!==""&&t!==""&&s!=="0.0"}function y(){X.disabled=!z()}S.addEventListener("input",y);w.addEventListener("input",y);const we=new MutationObserver(y);we.observe(h,{childList:!0,subtree:!0});function Te(){S.value="",w.value="",h.innerHTML="0.0",setTimeout(()=>{const e=document.querySelector(".rating__active");v(e,h,"0.0"),y()},0)}X.addEventListener("click",e=>{if(e.preventDefault(),!z()){console.warn("Форма не валідна. Будь ласка, заповніть всі поля та оберіть оцінку.");return}const t=h.innerHTML,s=S.value,n=w.value;console.log("Поточне значення рейтингу:",t),console.log("Введений email:",s),console.log("Введений коментар:",n),T(),Te()});const K=new H,A=document.querySelector(".js-list"),V=document.getElementById("pagination-numbers"),Z=document.querySelector(".search__form"),Y=document.querySelector(".exersices__span"),B=document.querySelector(".exersices__text");let x=1;A.addEventListener("click",ke);async function ke(e){if(!e.target.closest(".filters__item"))return;Z.classList.remove("hidden");const t=e.target.closest(".filters__item");let s=t.lastElementChild.children[0].innerText.toLowerCase().replace(/\s/g,"");const n=t.lastElementChild.children[1].innerText.toLowerCase().replace(/\s/g,"%20");s==="bodyparts"&&(s="bodypart");const r={filter:s,name:n};localStorage.setItem("paramSearch",JSON.stringify(r));try{const{results:o,totalPages:a}=await K.getExercises(s,n,x);se({filter:s,name:n,totalPages:a}),te(o),ee(o)}catch(o){console.log(o)}}function ee(e){B.innerText=`${e[0].bodyPart}`,B.classList.remove("hidden"),Y.classList.remove("hidden")}function te(e){A.innerHTML="";const t=e.map(({_id:s,rating:n,name:r,burnedCalories:o,bodyPart:a,target:i})=>`
      <li class="filters__item-card">
        <div class="card__wrap">
          <div class="card__block-btn">
              <p class="card__badge">Workout</p>
              <span class="card__rating">
                <span>${n}</span>
                <svg class="card__rating-star" width="18" height="18">
                  <use href="${d}#icon-star"></use>
                </svg>
              </span>
              <button class="card__btn" data-id="${s}" type="button">Start
                <svg class="card__btn-arrow" width="16" height="16">
                  <use href="${d}#icon-arrow-menu-mobile"></use>
                </svg>
              </button>
            </div>
              <div class="card__wrap-title">
              <div class="card__title-svg-btn">
                <svg class="card__title-svg" width="24" height="24">
                  <use href="${d}#icon-running-stick-figure"></use>
                </svg>
                </div>
                <h2 class="card__title">${r}</h2>
              </div>
              <div class="card__block-info">
                <p class="card__text-info"><span>Burned calories:</span>${o}</p>
                <p class="card__text-info"><span>Body part:</span>${a}</p>
                <p class="card__text-info"><span>Target:</span>${i}</p>
              </div>
        </div>
      </li>`).join("");A.insertAdjacentHTML("beforeend",t)}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".exercises__btn");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(s=>s.classList.remove("active")),t.classList.add("active"),Z.classList.add("hidden"),B.classList.add("hidden"),Y.classList.add("hidden")})})});async function Me(e,t,s){x=s;try{const{results:n,totalPages:r}=await K.getExercises(e,t,x);se({filter:e,name:t,totalPages:r}),te(n),ee(n)}catch(n){console.log(n)}ne(),qe()}function se({filter:e,name:t,totalPages:s}){if(V.innerHTML="",!(s<=1)){for(let n=1;n<=s;n++){const r=document.createElement("button");r.className="pagination-button",r.textContent=n,V.appendChild(r),r.addEventListener("click",()=>{Me(e,t,n)})}ne()}}const ne=()=>{document.querySelectorAll(".pagination-button").forEach((e,t)=>{e.classList.remove("active-btn"),t+1===x&&e.classList.add("active-btn")})};function qe(){window.scrollTo({top:830,behavior:"auto"})}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".burger-menu"),t=document.querySelector(".menu"),s=document.querySelector(".menu-backdrop"),n=document.querySelector(".close-menu-button"),r=document.querySelector(".mobile-nav-list"),o=document.querySelectorAll(".nav-link"),a=()=>{t.classList.toggle("active"),s.classList.toggle("active"),e.classList.toggle("active")},i=window.location.pathname.split("/").pop(),l=c=>c===i||c==="index.html"&&!i;o.forEach(c=>{l(c.getAttribute("href"))&&c.classList.add("active")}),e.addEventListener("click",a),s.addEventListener("click",a),n.addEventListener("click",a),r.addEventListener("click",a)});export{Fe as a,Ie as g,Ae as s};
//# sourceMappingURL=main-CZKex1yv.js.map
