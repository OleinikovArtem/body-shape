import{s as i}from"./assets/api-CTkoU--0.js";import{i as t}from"./assets/vendor-BT7OT44q.js";const n=document.getElementById("send-button"),r=document.getElementById("email");n.addEventListener("click",a);r.addEventListener("keydown",function(s){s.key==="Enter"&&a()});function a(){const s=r.value;if(!r.checkValidity()){t.error({title:"Error",message:"Please enter a valid email address."});return}i(s).then(e=>{e.status===201?(t.success({title:"Success",message:e.data.message}),r.value=""):t.error({title:"Error",message:e.data.message})}).catch(e=>{t.error({title:"Error",message:"Network error. Please try again later."})})}
//# sourceMappingURL=index.js.map
