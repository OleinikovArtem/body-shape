import{A,i as ue,a as me}from"./assets/menu-BvXDV4dq.js";import{a as T,i as C}from"./assets/vendor-BT7OT44q.js";class fe{constructor(){this.baseURL="https://your-energy.b.goit.study/api/",this.page=0}async getExercises(t,s,n){try{return(await T.get(`${this.baseURL}exercises?${t}=${s}&page=${n}&limit=10`)).data}catch(a){console.log(a)}}async getExercisesById(t){try{return(await T.get(`${this.baseURL}exercises/${t}`)).data}catch(s){console.log(s)}}async getFilter(t,s){try{return(await T.get(`${this.baseURL}filters?filter=${t}&page=${s}&limit=12`)).data}catch(n){console.log(n)}}async patchRating(t,s){try{return this.page+=1,(await T.patch(`${this.baseURL}exercises/${t}/rating`,s)).data}catch(n){console.log(n)}}}const ve=new A,L=document.querySelector(".js-list"),R=document.getElementById("pagination-numbers");let v=1;P("Muscles",v);async function P(e,t){try{const{results:s,totalPages:n}=await ve.getFilter(e,t);_e({results:s,totalPages:n}),pe(s)}catch(s){console.log(s)}}function pe(e){if(!L)return;if(L.innerHTML="",e.length===0){L.insertAdjacentHTML("beforeend",'<p class="filters__empty">No exercises found</p>');return}const t=e.map(({filter:s,name:n,imgURL:a})=>`
  <li class="filters__item">
    <img class="filters__img-first" src="${a}"></img>
    <div class="filters__wrapper-first">
    <h2 class="filters__title-first">${s}</h2>
    <p class="filters__text-first">${n}</p>
    <h2 class="filters__title-first">${ge(n)}</h2>
    <p class="filters__text-first">${s}</p>
    </div>
  </li>
    `).join("");L.insertAdjacentHTML("beforeend",t)}document.querySelectorAll(".btnFilters").forEach(e=>{e.addEventListener("click",()=>{const t=e.innerText;L.innerHTML="",v=1,P(t,v)})});function ge(e){function t(a){return a.charAt(0).toUpperCase()+a.slice(1)}return e.split(" ").map(t).join(" ")}function _e({results:e,totalPages:t}){if(!R||(R.innerHTML="",t<=1))return;const s=e[0].filter;for(let n=1;n<=t;n++){const a=document.createElement("button");a.className="pagination-button",a.textContent=n,R.appendChild(a),a.addEventListener("click",()=>{he(s,n)})}Q(v)}async function he(e,t){v=t,await P(e,v),Q(v),K()}const Q=e=>{document.querySelectorAll(".pagination-button").forEach((t,s)=>{t.classList.remove("active-btn"),s+1===e&&t.classList.add("active-btn"),K()})};function K(){window.scrollTo({top:830,behavior:"auto"})}const m="/body-shape/assets/sprite-TGb3VMBB.svg",U="/body-shape/assets/modal-exercise-image-m2kO5scW.jpg",be="/body-shape/assets/modal-exercise-image@2x-BIB40OGp.jpg";function ye(e){if(!e.target.closest(".js-remove-btn"))return;const t=e.target.closest(".js-remove-btn").getAttribute("data-id"),n=JSON.parse(localStorage.getItem("exerciseData")).filter(a=>a._id!==t);localStorage.setItem("exerciseData",JSON.stringify(n)),W()}function W(){const e=JSON.parse(localStorage.getItem("exerciseData"));if(e.length===0)localFavorite.innerHTML="",localFavorite.insertAdjacentHTML("beforeend",`
     <li class="favorites__empty">
            It appears that you haven't added any exercises to your favorites
            yet. To get started, you can add exercises that you like to your
            favorites for easier access in the future.
          </li>
    `);else{localFavorite.innerHTML="";const t=e.map(({_id:s,name:n,burnedCalories:a,bodyPart:c,target:i})=>`
      <li class="fav-filters__item-card">
        <div class="fav-card__wrap">
          <div class="fav-card__block-btn">
            <div class="fav-card__trash-btn-wrap">
              <p class="fav-card__badge">Workout</p>
              <button class="fav-card__btn js-remove-btn" data-id="${s}" type="button">
                <svg class="fav-card__btn-trash-svg" width="16" height="16">
                <use href="${m}#icon-trash"></use>
                </svg>
              </button>
            </div>
            <button class="fav-card__btn-start card__btn" data-id="${s}" type="button">Start
              <svg class="fav-card__btn-start-svg" width="16" height="16">
                 <use href="${m}#icon-arrow"></use>
              </svg>
            </button>
          </div>

          <div class="fav-card__title-wrap">
            <svg class="fav-card__title-svg" width="24" height="24">
              <use href="${m}#icon-running-stick-figure"></use>
            </svg>
            <h2 class="fav-card__title">${n}</h2>
          </div>

          <div class="fav-card__block-info">
            <p class="fav-card__text-info"><span>Burned calories:</span>${a}</p>
            <p class="fav-card__text-info"><span>Body part:</span>${c}</p>
            <p class="fav-card__text-info"><span>Target:</span>${i}</p>
          </div>
        </div>
      </li>`).join("");localFavorite.insertAdjacentHTML("beforeend",t)}}function xe(){document.querySelector(".js-list").addEventListener("click",ye)}document.addEventListener("load",xe);const Le=new fe;let E=!1,X;const N=document.querySelector(".modal-exercises"),g=document.querySelector(".overlay"),O=document.querySelector(".js-list");O==null||O.addEventListener("click",$e);async function $e(e){if(e.target.closest(".card__btn"))try{const t=e.target.closest(".card__btn").getAttribute("data-id"),s=await Le.getExercisesById(t);X=t;const n=ke(s);Se(n),Ee(),document.querySelector(".modal-exercises__btn-favorites").addEventListener("click",()=>Fe(s)),document.querySelector(".modal-exercises__btn-close").addEventListener("click",G)}catch(t){console.log(t)}}function Ee(){const e=window.innerWidth-document.body.offsetWidth+"px";N.classList.remove("hidden"),g.classList.remove("hidden"),document.body.style.paddingRight=e,document.body.style.overflow="hidden"}function Se(e){N.innerHTML=e,Te()}function we(e){const t="#EEA10C",s="#F4F4F4";let a="";for(let r=0;r<5;r++){const o=`starGradient${r}`,d=r+1<=e?100:r<e?e%1*100:0,p=[{offset:"0%",color:t,opacity:"1"},{offset:`${d}%`,color:t,opacity:"1"},{offset:`${d+1}%`,color:s,opacity:"0.20"}],j=`
        <linearGradient id="${o}" x1="0%" y1="0%" x2="100%" y2="0%">
          ${p.map(x=>`<stop offset="${x.offset}" style="stop-color:${x.color};stop-opacity:${x.opacity}" />`).join("")}
        </linearGradient>
      `,B=`url(#${o})`;a+=`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">${j}<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="${B}" fill-opacity="1"/></svg>`}return`${Number.isInteger(e)?`${e}.0`:e.toFixed(1)} ${a}`}function ke({_id:e,bodyPart:t,equipment:s,gifUrl:n,name:a,target:c,description:i,rating:r,burnedCalories:o,time:d,popularity:p}){const j=B(n);function B(I){return I===null||!I?`srcset = '${U} 1x,${be} 2x'
      src = '${U}'`:`src="${I}"`}const x=we(r);return`
  <div class="modal-exercises__container" data-id="${e}">
    <button class="modal-exercises__btn-close">
      <svg width="24" height="24">
        <use href="${m}#icon-menu-mobile-close"></use>
      </svg>
    </button>

    <img
    class="modal-exercises__img"
    ${j}
    alt="Exercise image"
    loading="lazy"
    />

    <div class="modal-exercises__card">
      <h2 class="modal-exercises__name">${a}</h2>
      <div class="modal-exercises__rating">${x}</div>

        <div class="modal-exercises__block">
          <ul class="modal-exercises__list">
            <li class="modal-exercises__item">
              <h3 class="modal-exercises__subtitle">Target</h3>
              <p class="modal-exercises__text">${c}</p>
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
              <p class="modal-exercises__text">${p}</p>
            </li>

            <li class="modal-exercises__item">
              <h3 class="modal-exercises__subtitle">Burned Calories</h3>
              <p class="modal-exercises__text">${o}/${d}</p>
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
        <use href="${m}#icon-favorites"></use>
      </svg>
    </button>
  <button class="modal-exercises__btn-rating modal-exercises__btn" type="button" data-id="${e}">Give a rating</button>
</div>
`}function Te(){const e=JSON.parse(localStorage.getItem("exerciseData")),t=document.querySelector(".modal-exercises__btn-favorites");e!=null&&e.some(s=>s._id===X)?(E=!0,t.innerHTML=ee()):(E=!1,t.innerHTML=Y())}const q="favoriteExercises";function Ce(e){const t=JSON.parse(localStorage.getItem(q))||[];t.push(e._id),localStorage.setItem(q,JSON.stringify(t))}function Me(e){const t=JSON.parse(localStorage.getItem(q))||[],s=t.filter(n=>n!==e._id);localStorage.setItem(q,JSON.stringify(t.push(s)))}function Fe(e){console.log("exerciseData",e),E=!E;const t=document.querySelector(".modal-exercises__btn-favorites"),s=document.querySelector(".favorites__list");E?(t.innerHTML=ee(),s==null?Ce(e):setTimeout(()=>{W()},100)):(t.innerHTML=Y(),s==null?Me(e):setTimeout(()=>{W()},100))}function Y(){return`
  Add to favorites
    <svg class="btn-favorites__icon">
    <use href="${m}#icon-favorites"></use>
    </svg>`}function ee(){return`
  Remove from favorites
  <svg class="btn-favorites__icon">
    <use href="${m}#icon-trash"></use>
  </svg>`}function G(){N.classList.add("hidden"),g.classList.add("hidden"),document.body.style.paddingRight="0px",document.body.style.overflow="auto"}g==null||g.addEventListener("click",function(e){e.target===g&&G()});document.addEventListener("keydown",function(e){e.key==="Escape"&&!N.classList.contains("hidden")&&G()});const S=document.querySelector(".modal-exercises"),_=document.querySelector(".modal-rating"),V=document.querySelector(".rating-close-btn"),M=document.querySelector(".form__btn"),y=document.querySelector(".rating__value"),h=document.querySelector(".rating-email"),b=document.querySelector(".rating-comment");S==null||S.addEventListener("click",qe);V==null||V.addEventListener("click",H);_==null||_.addEventListener("click",Ae);document.addEventListener("keydown",Ne);function qe(e){e.target.closest(".modal-exercises__btn-rating")&&(_.classList.remove("is-hidden"),S.classList.add("hidden"))}function H(){_.classList.add("is-hidden"),S.classList.remove("hidden")}function Ae(e){e.target===_&&H()}function Ne(e){e.key==="Escape"&&H()}const D=document.querySelectorAll(".rating");D.length>0&&He();function $(e,t,s){const n=parseFloat(s)*20;e.style.width=`${n}%`,t.innerHTML=parseFloat(s).toFixed(1)}function He(){let e,t,s;for(let i=0;i<D.length;i++){const r=D[i];n(r)}function n(i){a(i),$(e,t,s),i.classList.contains("rating_set")&&c(i)}function a(i){e=i.querySelector(".rating__active"),t=i.querySelector(".rating__value"),s=parseFloat(t.innerHTML)}function c(i){const r=i.querySelectorAll(".rating__item");for(let o=0;o<r.length;o++){const d=r[o];d.addEventListener("mouseenter",function(){a(i),$(e,t,(o+1).toFixed(1))}),d.addEventListener("mouseleave",function(){$(e,t,s)}),d.addEventListener("click",function(){a(i);const p=(o+1).toFixed(1);p!=="0.0"&&(s=p,i.dataset.ajax?setRatingValue(s,i):(t.innerHTML=s,$(e,t,s)),k())})}}}function te(){const e=h.value.trim(),t=b.value.trim(),s=y.innerHTML.trim();return e!==""&&t!==""&&s!=="0.0"}function k(){M.disabled=!te()}h==null||h.addEventListener("input",k);b==null||b.addEventListener("input",k);const je=new MutationObserver(k);y&&je.observe(y,{childList:!0,subtree:!0});function Be(){h.value="",b.value="",y.innerHTML="0.0",setTimeout(()=>{const e=document.querySelector(".rating__active");$(e,y,"0.0"),k()},0)}M==null||M.addEventListener("click",e=>{if(e.preventDefault(),!te()){console.warn("Форма не валідна. Будь ласка, заповніть всі поля та оберіть оцінку.");return}const t=y.innerHTML,s=h.value,n=b.value;console.log("Поточне значення рейтингу:",t),console.log("Введений email:",s),console.log("Введений коментар:",n),H(),Be()});const Z="/body-shape/assets/paging-icons-OZN1c3n6.svg",se=new A,w=document.querySelector(".js-list"),u=document.getElementById("pagination-numbers"),ne=document.querySelector(".search__form"),ae=document.querySelector(".exercises__span"),J=document.querySelector(".exercises__text");let l=1;w==null||w.addEventListener("click",Ie);async function Ie(e){if(!e.target.closest(".filters__item"))return;ne.classList.remove("hidden");const t=e.target.closest(".filters__item");let s=t.lastElementChild.children[0].innerText.toLowerCase().replace(/\s/g,"");const n=t.lastElementChild.children[1].innerText.toLowerCase().replace(/\s/g,"%20");s==="bodyparts"&&(s="bodypart");const a={filter:s,name:n};localStorage.setItem("paramSearch",JSON.stringify(a));try{const{results:c,totalPages:i}=await se.getExercises(s,n,l);re({filter:s,name:n,totalPages:i}),z(c),ie(c)}catch(c){console.log(c)}}function ie(e){J.innerText=`${e[0].bodyPart}`,J.classList.remove("hidden"),ae.classList.remove("hidden")}function z(e){w.innerHTML="";const t=e.map(({_id:s,rating:n,name:a,burnedCalories:c,bodyPart:i,target:r})=>`
      <li class="filters__item-card">
        <div class="card__wrap">
          <div class="card__block-btn">
              <p class="card__badge">Workout</p>
              <span class="card__rating">
                <span>${n}</span>
                <svg class="card__rating-star" width="18" height="18">
                  <use href="${m}#icon-star"></use>
                </svg>
              </span>
              <button class="card__btn" data-id="${s}" type="button">Start
                <svg class="card__btn-arrow" width="16" height="16">
                  <use href="${m}#icon-arrow-menu-mobile"></use>
                </svg>
              </button>
            </div>
              <div class="card__wrap-title">
              <div class="card__title-svg-btn">
                <svg class="card__title-svg" width="24" height="24">
                  <use href="${m}#icon-running-man"></use>
                </svg>
                </div>
                <h2 class="card__title">${a}</h2>
              </div>
              <div class="card__block-info">
                <p class="card__text-info"><span>Burned calories:</span>${c}</p>
                <p class="card__text-info"><span>Body part:</span>${i}</p>
                <p class="card__text-info"><span>Target:</span>${r}</p>
              </div>
        </div>
      </li>`).join("");w.insertAdjacentHTML("beforeend",t)}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".exercises__btn");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(s=>s.classList.remove("active")),t.classList.add("active"),ne.classList.add("hidden"),J.classList.add("hidden"),ae.classList.add("hidden")})})});async function f(e,t,s){l=s;try{const{results:n,totalPages:a}=await se.getExercises(e,t,l);re({filter:e,name:t,totalPages:a}),z(n),ie(n)}catch(n){console.log(n)}oe(),Re()}function re({filter:e,name:t,totalPages:s}){if(u.innerHTML="",!(s<=1)){if(s>5){["first","prev"].forEach(i=>{const r=document.createElement("button");l!==1&&(r.classList.add("active-btn"),r.addEventListener("click",()=>{i==="first"?f(e,t,1):i==="prev"&&f(e,t,l-1)})),r.insertAdjacentHTML("beforeend",`<svg class="pagination-icon" width="24" height="24">
                  <use href="${Z}#icon-page-${i}"></use>
                </svg>`),u.appendChild(r)});const a=document.createElement("button");if(a.className="pagination-button-dots",a.insertAdjacentHTML("beforeend","<p>...</p>"),l===1){for(let i=1;i<=3;i++){const r=document.createElement("button");r.className="pagination-button",r.textContent=i,u.appendChild(r),r.addEventListener("click",()=>{f(e,t,i)})}u.appendChild(a)}else if(l===s){u.appendChild(a);for(let i=s-2;i<=s;i++){const r=document.createElement("button");r.className="pagination-button",r.textContent=i,u.appendChild(r),r.addEventListener("click",()=>{f(e,t,i)})}}else{u.appendChild(a);const i=l>3?l-2:1,r=l<s-2?l+2:s;for(let o=i;o<=r;o++){const d=document.createElement("button");d.className="pagination-button",d.textContent=o,u.appendChild(d),d.addEventListener("click",()=>{f(e,t,o)})}u.appendChild(a.cloneNode(!0))}["next","last"].forEach(i=>{const r=document.createElement("button");l!==s&&(r.classList.add("active-btn"),r.addEventListener("click",()=>{i==="last"?f(e,t,s):i==="next"&&f(e,t,l+1)})),r.insertAdjacentHTML("beforeend",`<svg class="pagination-icon" width="24" height="24">
                  <use href="${Z}#icon-page-${i}"></use>
                </svg>`),u.appendChild(r)})}else for(let n=1;n<=s;n++){const a=document.createElement("button");a.className="pagination-button",a.textContent=n,u.appendChild(a),a.addEventListener("click",()=>{f(e,t,n)})}oe()}}const oe=()=>{document.querySelectorAll(".pagination-button").forEach(e=>{e.classList.remove("active-btn"),Number(e.textContent)===l&&e.classList.add("active-btn")})};function Re(){window.scrollTo({top:830,behavior:"auto"})}document.addEventListener("DOMContentLoaded",()=>{ue(),me()});const Oe=new A,Ve=document.getElementById("send-button"),F=document.getElementById("email");Ve.addEventListener("click",ce);F.addEventListener("keydown",function(e){e.key==="Enter"&&ce()});function ce(){const e=F.value;if(!F.checkValidity()){C.error({title:"Error",message:"Please enter a valid email address."});return}Oe.subscribe(e).then(t=>{t.status===201?(C.success({title:"Success",message:t.data.message}),F.value=""):C.error({title:"Error",message:t.data.message})}).catch(t=>{C.error({title:"Error",message:"Network error. Please try again later."})})}const We=new A,De=document.querySelector(".search__button"),le=document.querySelector(".search__input");De.addEventListener("click",function(e){e.preventDefault(),de()});le.addEventListener("keydown",function(e){e.key==="Enter"&&(e.preventDefault(),de())});async function de(e){const{filter:t,name:s}=JSON.parse(localStorage.getItem("paramSearch")),n=le.value.trim();if(n!=="")try{const a=await We.getSearch(t,s,n);z(a)}catch(a){console.log(a)}}
//# sourceMappingURL=index.js.map
