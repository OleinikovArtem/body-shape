import{t as k,c as q,f as F,r as T,s as v,g as x,a as A,b as D,d as H,e as I,i as z,h as $,j,k as N}from"./assets/menu-BdnAZTHz.js";import{T as E}from"./assets/vendor-BcxMf0ji.js";class L{constructor({container:e,totalPages:a,onPageChange:n}){this.container=e,this._totalPages=a,this._currentPage=1,this.onPageChange=n,this.render()}get currentPage(){return this._currentPage}set currentPage(e){e<1||e>this._totalPages||e===this._currentPage||(this._currentPage=e,this.onPageChange(e),this.render())}render(){if(this.container.innerHTML="",this._totalPages<1)return;const e=({label:r,page:o,isActive:c=!1,isDisabled:d=!1,arrowButton:u=!1})=>`
      <button class="${c?"active ":""}${u?"arrow-button":""}" data-page="${o}" ${d?"disabled":""}>${r}</button>
    `;let a="";this._totalPages>3&&(a+=e({label:"<<",page:1,isDisabled:this._currentPage===1,arrowButton:!0}),a+=e({label:"<",page:this._currentPage-1,isDisabled:this._currentPage===1,arrowButton:!0}));let n,i;this._totalPages<=5?(n=1,i=this._totalPages):this._currentPage<=3?(n=1,i=4):this._currentPage>=this._totalPages-2?(n=this._totalPages-3,i=this._totalPages):(n=this._currentPage-1,i=this._currentPage+1),n>1&&(a+=e({label:1,page:1}),n>2&&(a+='<span class="ellipsis">...</span>'));for(let r=n;r<=i;r++)a+=e({label:r,page:r,isActive:r===this._currentPage});i<this._totalPages&&(i<this._totalPages-1&&(a+='<span class="ellipsis">...</span>'),a+=e({label:this._totalPages,page:this._totalPages})),this._totalPages>3&&(a+=e({label:">",page:this._currentPage+1,isDisabled:this._currentPage===this._totalPages,arrowButton:!0}),a+=e({label:">>",page:this._totalPages,isDisabled:this._currentPage===this._totalPages,arrowButton:!0})),this.container.insertAdjacentHTML("beforeend",a),this.container.querySelectorAll("button[data-page]").forEach(r=>{const o=parseInt(r.getAttribute("data-page"),10);r.addEventListener("click",()=>this.currentPage=o)})}setTotalPages(e){this._totalPages!==e&&(this._totalPages=e,this.render())}}const O=()=>{const l=document.querySelector(".categories-list"),e=document.querySelector(".filters-title"),a=document.querySelector("#filters"),n=document.querySelector(".pagination"),i=document.querySelector(".exercises-list"),r=document.querySelector(".search-form"),o=document.querySelector(".search-input"),c=document.querySelector(".clear-button");let d="Muscles",u,p,y="",_="";o.addEventListener("input",()=>k(o,c)),c.addEventListener("click",()=>q(o,c)),r.addEventListener("submit",t=>C(t));const C=t=>{t.preventDefault();const s=o.value.trim();f({category:y,filter:_,keyword:s||"",resetPagination:!0})},M=(t,s)=>{l.innerHTML="",l.style.display="grid",i.style.display="none",r.style.display="none",T(e,null),v(e),l.insertAdjacentHTML("beforeend",t&&t.length?D(t):"<p>No categories found for the selected filter.</p>")},w=(t,s)=>{i.innerHTML="",l.style.display="none",i.style.display="grid",r.style.display="flex",T(e,s),v(e),i.insertAdjacentHTML("beforeend",t&&t.length?x(t):"<p>No exercises found for the selected category and filter.</p>")},S=t=>{document.querySelectorAll(".filter-button").forEach(s=>{s.classList.toggle("active",s.dataset.filter===t)})},P=async({filter:t,page:s=1,resetPagination:h=!1})=>{d=t,S(t);const g=await A(t,s);M(g.results),!u||h?u=new L({container:n,totalPages:g.totalPages,onPageChange:m=>P({filter:d,page:m})}):u.setTotalPages(g.totalPages)},f=async({category:t,filter:s,keyword:h="",page:g=1,resetPagination:m=!1})=>{y=t,_=s;const b=await F({bodypart:s==="Body parts"?t:"",muscles:s==="Muscles"?t:"",equipment:s==="Equipment"?t:"",keyword:h,page:g,limit:10});w(b.results,t),m||!p?p=new L({container:n,totalPages:b.totalPages,onPageChange:B=>f({category:t,filter:s,keyword:h,page:B})}):p.setTotalPages(b.totalPages)};l.addEventListener("click",t=>{const s=t.target.closest(".categories-list-item");s&&f({category:s.dataset.name,filter:s.dataset.filter,resetPagination:!0})}),a.addEventListener("click",t=>{const s=t.target.closest(".filter-button");s&&P({filter:s.dataset.filter,resetPagination:!0})}),P({filter:"Muscles"})},Q=()=>{document.getElementById("subscription-form").addEventListener("submit",async e=>{var i,r;e.preventDefault();const a=e.target.elements.email,n=a.value;try{await H(n)&&(E({text:"Subscription successful!",duration:3e3,backgroundColor:"#4CAF50",close:!0}).showToast(),a.value="")}catch(o){const c=((r=(i=o.response)==null?void 0:i.data)==null?void 0:r.message)||o.message||"An error occurred. Please try again later.";E({text:c,duration:3e3,backgroundColor:"#FF5F6D",close:!0}).showToast()}})},G=()=>{const l=document.getElementById("scrollToTopBtn"),e=()=>{window.scrollTo({top:0,behavior:"smooth"})},a=()=>{document.body.scrollTop>100||document.documentElement.scrollTop>100?l.classList.add("active"):l.classList.remove("active")};window.addEventListener("scroll",I(a,200)),l.addEventListener("click",e)};document.addEventListener("DOMContentLoaded",()=>{z(),$(),O(),j(),N(),Q(),G()});
//# sourceMappingURL=index.js.map
