import{a as n}from"../assets/vendor-CNNbG8jS.js";const e={BASE_URL:"https://your-energy.b.goit.study/api",EXERCISES:"/exercises",FILTERS:"/filters",QUOTE:"/quote",SUBSCRIPTION:"/subscription",RATING:"/rating"};async function i(t){const s=u(e.SUBSCRIPTION);return o(s,{email:t})}async function o(t,s){return n.post(t,s).then(r=>r).catch(r=>r.response)}function u(t,s){return e.BASE_URL+t+""}export{i as s};
//# sourceMappingURL=api.js.map
