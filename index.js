import{i as ne,a as ie,s as re}from"./assets/menu-BzWsvROQ.js";import{a as b,i as y}from"./assets/vendor-BAN3Upnh.js";class R{constructor(){this.baseURL="https://your-energy.b.goit.study/api/",this.page=0}async getExercises(t,s,a){try{return(await b.get(`${this.baseURL}exercises?${t}=${s}&page=${a}&limit=10`)).data}catch(n){console.log(n)}}async getExercisesById(t){try{return(await b.get(`${this.baseURL}exercises/${t}`)).data}catch(s){console.log(s)}}async getFilter(t,s){try{return(await b.get(`${this.baseURL}filters?filter=${t}&page=${s}&limit=12`)).data}catch(a){console.log(a)}}async patchRating(t,s){try{return this.page+=1,(await b.patch(`${this.baseURL}exercises/${t}/rating`,s)).data}catch(a){console.log(a)}}}const oe=new R,F=document.querySelector(".js-list"),V=document.getElementById("pagination-numbers");let m=1;j("Muscles",m);async function j(e,t){try{const{results:s,totalPages:a}=await oe.getFilter(e,t);le({results:s,totalPages:a}),ce(s)}catch(s){console.log(s)}}function ce(e){F.innerHTML="";const t=e.map(({filter:s,name:a,imgURL:n})=>`
  <li class="filters__item">
    <img class="filters__img-first" src="${n}"></img>
    <div class="filters__wrapper-first">
    <h2 class="filters__title-first">${s}</h2>
    <p class="filters__text-first">${a}</p>
    </div>
  </li>
    `).join("");F.insertAdjacentHTML("beforeend",t)}document.querySelectorAll(".btnFilters").forEach(e=>{e.addEventListener("click",()=>{const t=e.innerText;F.innerHTML="",m=1,j(t,m)})});function le({results:e,totalPages:t}){if(V.innerHTML="",t<=1)return;const s=e[0].filter;for(let a=1;a<=t;a++){const n=document.createElement("button");n.className="pagination-button",n.textContent=a,V.appendChild(n),n.addEventListener("click",()=>{de(s,a)})}W()}async function de(e,t){m=t,await j(e,m),W(),ue()}const W=()=>{document.querySelectorAll(".pagination-button").forEach((e,t)=>{e.classList.remove("active-btn"),t+1===m&&e.classList.add("active-btn")})};function ue(){window.scrollTo({top:830,behavior:"auto"})}const l="/body-shape/assets/sprite-DRmPffTB.svg",O="/body-shape/assets/modal-exercise-image-m2kO5scW.jpg",me="/body-shape/assets/modal-exercise-image@2x-BIB40OGp.jpg",v=document.querySelector(".js-list");v.addEventListener("click",ge);function ge(e){if(!e.target.closest(".js-remove-btn"))return;const t=e.target.closest(".js-remove-btn").getAttribute("data-id"),a=JSON.parse(localStorage.getItem("exerciseData")).filter(n=>n._id!==t);localStorage.setItem("exerciseData",JSON.stringify(a)),I()}function I(){const e=JSON.parse(localStorage.getItem("exerciseData"));if(e.length===0)v.innerHTML="",v.insertAdjacentHTML("beforeend",`
     <li class="favorites__empty">
            It appears that you haven't added any exercises to your favorites
            yet. To get started, you can add exercises that you like to your
            favorites for easier access in the future.
          </li>
    `);else{v.innerHTML="";const t=e.map(({_id:s,name:a,burnedCalories:n,bodyPart:r,target:i})=>`
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
            <h2 class="fav-card__title">${a}</h2>
          </div>

          <div class="fav-card__block-info">
            <p class="fav-card__text-info"><span>Burned calories:</span>${n}</p>
            <p class="fav-card__text-info"><span>Body part:</span>${r}</p>
            <p class="fav-card__text-info"><span>Target:</span>${i}</p>
          </div>
        </div>
      </li>`).join("");v.insertAdjacentHTML("beforeend",t)}}const ve=new R;let _=!1,G;const E=document.querySelector(".modal-exercises"),L=document.querySelector(".overlay"),fe=document.querySelector(".js-list");fe.addEventListener("click",_e);async function _e(e){if(e.target.closest(".card__btn"))try{const t=e.target.closest(".card__btn").getAttribute("data-id"),s=await ve.getExercisesById(t);G=t;const a=ye(s);he(a),pe(),document.querySelector(".modal-exercises__btn-favorites").addEventListener("click",Le),document.querySelector(".modal-exercises__btn-close").addEventListener("click",P)}catch(t){console.log(t)}}function pe(){const e=window.innerWidth-document.body.offsetWidth+"px";E.classList.remove("hidden"),L.classList.remove("hidden"),document.body.style.paddingRight=e,document.body.style.overflow="hidden"}function he(e){E.innerHTML=e,xe()}function be(e){const t="#EEA10C",s="#F4F4F4";let n="";for(let o=0;o<5;o++){const c=`starGradient${o}`,d=o+1<=e?100:o<e?e%1*100:0,u=[{offset:"0%",color:t,opacity:"1"},{offset:`${d}%`,color:t,opacity:"1"},{offset:`${d+1}%`,color:s,opacity:"0.20"}],M=`
        <linearGradient id="${c}" x1="0%" y1="0%" x2="100%" y2="0%">
          ${u.map(g=>`<stop offset="${g.offset}" style="stop-color:${g.color};stop-opacity:${g.opacity}" />`).join("")}
        </linearGradient>
      `,C=`url(#${c})`;n+=`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">${M}<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="${C}" fill-opacity="1"/></svg>`}return`${Number.isInteger(e)?`${e}.0`:e.toFixed(1)} ${n}`}function ye({_id:e,bodyPart:t,equipment:s,gifUrl:a,name:n,target:r,description:i,rating:o,burnedCalories:c,time:d,popularity:u}){const M=C(a);function C(q){return q===null||!q?`srcset = '${O} 1x,${me} 2x'
      src = '${O}'`:`src="${q}"`}const g=be(o);return`
  <div class="modal-exercises__container" data-id="${e}">
    <button class="modal-exercises__btn-close">
      <svg width="24" height="24">
        <use href="${l}#icon-menu-mobile-close"></use>
      </svg>
    </button>

    <img
    class="modal-exercises__img"
    ${M}
    alt="Exercise image"
    loading="lazy"
    />

    <div class="modal-exercises__card">
      <h2 class="modal-exercises__name">${n}</h2>
      <div class="modal-exercises__rating">${g}</div>

        <div class="modal-exercises__block">
          <ul class="modal-exercises__list">
            <li class="modal-exercises__item">
              <h3 class="modal-exercises__subtitle">Target</h3>
              <p class="modal-exercises__text">${r}</p>
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
              <p class="modal-exercises__text">${c}/${d}</p>
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
`}function xe(){const e=JSON.parse(localStorage.getItem("exerciseData")),t=document.querySelector(".modal-exercises__btn-favorites");e!=null&&e.some(s=>s._id===G)?(_=!0,t.innerHTML=z()):(_=!1,t.innerHTML=J())}function Le(){_=!_;const e=document.querySelector(".modal-exercises__btn-favorites"),t=document.querySelector(".favorites__list");_?(e.innerHTML=z(),t==null?console.log(""):setTimeout(()=>{I()},100)):(e.innerHTML=J(),t==null?console.log(""):setTimeout(()=>{I()},100))}function J(){return`
  Add to favorites
    <svg class="btn-favorites__icon">
    <use href="${l}#icon-favorites"></use>
    </svg>`}function z(){return`
  Remove from favorites
  <svg class="btn-favorites__icon">
    <use href="${l}#icon-trash"></use>
  </svg>`}function P(){E.classList.add("hidden"),L.classList.add("hidden"),document.body.style.paddingRight="0px",document.body.style.overflow="auto"}L.addEventListener("click",function(e){e.target===L&&P()});document.addEventListener("keydown",function(e){e.key==="Escape"&&!E.classList.contains("hidden")&&P()});const N=document.querySelector(".modal-exercises"),S=document.querySelector(".modal-rating"),$e=document.querySelector(".rating-close-btn"),U=document.querySelector(".form__btn"),p=document.querySelector(".rating__value"),w=document.querySelector(".rating-email"),k=document.querySelector(".rating-comment");N.addEventListener("click",Ee);$e.addEventListener("click",T);S.addEventListener("click",Se);document.addEventListener("keydown",we);function Ee(e){e.target.closest(".modal-exercises__btn-rating")&&(S.classList.remove("is-hidden"),N.classList.add("hidden"))}function T(){S.classList.add("is-hidden"),N.classList.remove("hidden")}function Se(e){e.target===S&&T()}function we(e){e.key==="Escape"&&T()}const H=document.querySelectorAll(".rating");H.length>0&&ke();function f(e,t,s){const a=parseFloat(s)*20;e.style.width=`${a}%`,t.innerHTML=parseFloat(s).toFixed(1)}function ke(){let e,t,s;for(let i=0;i<H.length;i++){const o=H[i];a(o)}function a(i){n(i),f(e,t,s),i.classList.contains("rating_set")&&r(i)}function n(i){e=i.querySelector(".rating__active"),t=i.querySelector(".rating__value"),s=parseFloat(t.innerHTML)}function r(i){const o=i.querySelectorAll(".rating__item");for(let c=0;c<o.length;c++){const d=o[c];d.addEventListener("mouseenter",function(){n(i),f(e,t,(c+1).toFixed(1))}),d.addEventListener("mouseleave",function(){f(e,t,s)}),d.addEventListener("click",function(){n(i);const u=(c+1).toFixed(1);u!=="0.0"&&(s=u,i.dataset.ajax?setRatingValue(s,i):(t.innerHTML=s,f(e,t,s)),h())})}}}function Z(){const e=w.value.trim(),t=k.value.trim(),s=p.innerHTML.trim();return e!==""&&t!==""&&s!=="0.0"}function h(){U.disabled=!Z()}w.addEventListener("input",h);k.addEventListener("input",h);const Te=new MutationObserver(h);Te.observe(p,{childList:!0,subtree:!0});function Me(){w.value="",k.value="",p.innerHTML="0.0",setTimeout(()=>{const e=document.querySelector(".rating__active");f(e,p,"0.0"),h()},0)}U.addEventListener("click",e=>{if(e.preventDefault(),!Z()){console.warn("Форма не валідна. Будь ласка, заповніть всі поля та оберіть оцінку.");return}const t=p.innerHTML,s=w.value,a=k.value;console.log("Поточне значення рейтингу:",t),console.log("Введений email:",s),console.log("Введений коментар:",a),T(),Me()});const K=new R,A=document.querySelector(".js-list"),D=document.getElementById("pagination-numbers"),Q=document.querySelector(".search__form"),X=document.querySelector(".exersices__span"),B=document.querySelector(".exersices__text");let $=1;A.addEventListener("click",Ce);async function Ce(e){if(!e.target.closest(".filters__item"))return;Q.classList.remove("hidden");const t=e.target.closest(".filters__item");let s=t.lastElementChild.children[0].innerText.toLowerCase().replace(/\s/g,"");const a=t.lastElementChild.children[1].innerText.toLowerCase().replace(/\s/g,"%20");s==="bodyparts"&&(s="bodypart");const n={filter:s,name:a};localStorage.setItem("paramSearch",JSON.stringify(n));try{const{results:r,totalPages:i}=await K.getExercises(s,a,$);te({filter:s,name:a,totalPages:i}),ee(r),Y(r)}catch(r){console.log(r)}}function Y(e){B.innerText=`${e[0].bodyPart}`,B.classList.remove("hidden"),X.classList.remove("hidden")}function ee(e){A.innerHTML="";const t=e.map(({_id:s,rating:a,name:n,burnedCalories:r,bodyPart:i,target:o})=>`
      <li class="filters__item-card">
        <div class="card__wrap">
          <div class="card__block-btn">
              <p class="card__badge">Workout</p>
              <span class="card__rating">
                <span>${a}</span>
                <svg class="card__rating-star" width="18" height="18">
                  <use href="${l}#icon-star"></use>
                </svg>
              </span>
              <button class="card__btn" data-id="${s}" type="button">Start
                <svg class="card__btn-arrow" width="16" height="16">
                  <use href="${l}#icon-arrow-menu-mobile"></use>
                </svg>
              </button>
            </div>
              <div class="card__wrap-title">
              <div class="card__title-svg-btn">
                <svg class="card__title-svg" width="24" height="24">
                  <use href="${l}#icon-running-stick-figure"></use>
                </svg>
                </div>
                <h2 class="card__title">${n}</h2>
              </div>
              <div class="card__block-info">
                <p class="card__text-info"><span>Burned calories:</span>${r}</p>
                <p class="card__text-info"><span>Body part:</span>${i}</p>
                <p class="card__text-info"><span>Target:</span>${o}</p>
              </div>
        </div>
      </li>`).join("");A.insertAdjacentHTML("beforeend",t)}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".exercises__btn");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(s=>s.classList.remove("active")),t.classList.add("active"),Q.classList.add("hidden"),B.classList.add("hidden"),X.classList.add("hidden")})})});async function qe(e,t,s){$=s;try{const{results:a,totalPages:n}=await K.getExercises(e,t,$);te({filter:e,name:t,totalPages:n}),ee(a),Y(a)}catch(a){console.log(a)}se(),Fe()}function te({filter:e,name:t,totalPages:s}){if(D.innerHTML="",!(s<=1)){for(let a=1;a<=s;a++){const n=document.createElement("button");n.className="pagination-button",n.textContent=a,D.appendChild(n),n.addEventListener("click",()=>{qe(e,t,a)})}se()}}const se=()=>{document.querySelectorAll(".pagination-button").forEach((e,t)=>{e.classList.remove("active-btn"),t+1===$&&e.classList.add("active-btn")})};function Fe(){window.scrollTo({top:830,behavior:"auto"})}document.addEventListener("DOMContentLoaded",()=>{ne(),ie()});const Ie=document.getElementById("send-button"),x=document.getElementById("email");Ie.addEventListener("click",ae);x.addEventListener("keydown",function(e){e.key==="Enter"&&ae()});function ae(){const e=x.value;if(!x.checkValidity()){y.error({title:"Error",message:"Please enter a valid email address."});return}re(e).then(t=>{t.status===201?(y.success({title:"Success",message:t.data.message}),x.value=""):y.error({title:"Error",message:t.data.message})}).catch(t=>{y.error({title:"Error",message:"Network error. Please try again later."})})}
//# sourceMappingURL=index.js.map
