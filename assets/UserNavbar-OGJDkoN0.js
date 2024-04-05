import{_ as f,m as _,a as x,r as p,o as m,c as u,b as e,d as o,w as r,e as k,v as w,t as i,F as y,f as N,g as c}from"./index-TFW6QGXf.js";import{u as b}from"./userOrderStore-K1Ff7jc_.js";import{s as v}from"./showWarningToast-lsUjyO5G.js";import"./showSuccessToast-TNVcc7d0.js";import"./showErrorToast-H8uiVGa1.js";const C={data(){return{isInputEnabled:!1,tempOrderId:""}},mounted(){this.getOrders()},computed:{..._(b,["orders"])},methods:{...x(b,["getOrders"]),toggleSearch(){this.isInputEnabled=!this.isInputEnabled},changeLanguage(a){const t=a.target.value;this.$i18n.locale=t},closeNavbar(){const a=document.querySelector(".navbar-toggler");a.getAttribute("aria-expanded")==="true"&&a.click()},goToOrder(a){if(a===""){v("請填入訂單編號");return}if(!this.orders.find(h=>h.id===a)){v("查無此訂單編號");return}this.$router.push({name:"order-search",params:{orderId:a}}),this.tempOrderId="",this.isInputEnabled=!1,this.closeNavbar()}}},O={class:"navbar navbar-expand-lg navbar-dark bg-dark rounded-5 m-3 m-md-6"},I={class:"container p-5"},E={class:"mb-0 overflow-hidden",style:{"white-space":"nowrap"}},S=e("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[e("span",{class:"navbar-toggler-icon"})],-1),T={class:"collapse navbar-collapse justify-content-end",id:"navbarNav"},L={class:"navbar-nav gap-6"},V={class:"nav-item"},B={class:"nav-item"},A={class:"nav-item"},R={class:"nav-item"},D={key:0,class:"input-group"},U={class:"nav-item"},j=e("option",{value:"zh-TW"},"中文",-1),q=e("option",{value:"en"},"英文",-1),z=[j,q],F={class:"sticky-footer bg-primary rounded-5 m-3 m-md-6"},W={class:"container p-5"},M={class:"navbar navbar-dark"},P=e("div",{class:"d-flex flex-column flex-md-row align-items-md-center"},[e("a",{class:"navbar-brand mb-0 fs-2 fw-bold",href:"index.html"},"funtime"),e("span",{class:"fs-4 text-white fw-bold"},"讓有趣的聖經企劃發生")],-1),$={class:"navbar-nav flex-row gap-6"},G={class:"nav-item"},H=N('<hr class="border-bottom border-white border-opacity-25"><div class="d-flex flex-column gap-2 flex-sm-row justify-content-sm-between"><small class="d-flex flex-column gap-0 flex-md-row align-items-md-center gap-md-6 text-white"><span>Copyright ©2023 whatisfuntime</span><span>All rights reserved.</span><span>隱私權政策</span><span>Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA" class="text-white">Icons 8</a> from <a href="https://icons8.com/illustrations" class="text-white">Ouch!</a></span><span>Photo by <a href="https://unsplash.com/" class="text-white">Unsplash</a></span></small><div class="d-flex align-items-center gap-6 fs-5 text-white"><i class="bi bi-line"></i><i class="bi bi-facebook"></i><i class="bi bi-envelope-fill"></i></div></div>',2);function J(a,t,h,K,d,s){const l=p("RouterLink"),g=p("RouterView");return m(),u(y,null,[e("header",null,[e("nav",O,[e("div",I,[e("h1",E,[o(l,{to:{name:"home"},class:"navbar-brand mb-0 fs-2 fw-bold"},{default:r(()=>[c("funtime ")]),_:1})]),S,e("div",T,[e("ul",L,[e("li",V,[o(l,{onClick:s.closeNavbar,to:{name:"home"},class:"nav-link text-decoration-none"},{default:r(()=>[c(i(a.$t("menu.home")),1)]),_:1},8,["onClick"])]),e("li",B,[o(l,{onClick:s.closeNavbar,to:{name:"products"},class:"nav-link text-decoration-none"},{default:r(()=>[c(i(a.$t("menu.products")),1)]),_:1},8,["onClick"])]),e("li",A,[o(l,{onClick:s.closeNavbar,to:{name:"collection"},class:"nav-link text-decoration-none"},{default:r(()=>[c(i(a.$t("menu.collection")),1)]),_:1},8,["onClick"])]),e("li",R,[d.isInputEnabled?(m(),u("div",D,[k(e("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>d.tempOrderId=n),type:"text",class:"form-control",placeholder:"請輸入訂單編號","aria-label":"order-search","aria-describedby":"order-search"},null,512),[[w,d.tempOrderId]]),e("button",{onClick:t[1]||(t[1]=n=>s.goToOrder(this.tempOrderId)),class:"btn btn-outline-secondary",type:"button"},"確認")])):(m(),u("a",{key:1,onClick:t[2]||(t[2]=(...n)=>s.toggleSearch&&s.toggleSearch(...n)),class:"nav-link text-decoration-none"},i(a.$t("menu.search")),1))]),e("li",U,[e("select",{class:"form-select",onChange:t[3]||(t[3]=(...n)=>s.changeLanguage&&s.changeLanguage(...n))},z,32)])])])])])]),e("main",null,[o(g)]),e("footer",null,[e("div",F,[e("div",W,[e("nav",M,[P,e("ul",$,[e("li",G,[o(l,{to:{name:"login"},class:"nav-link text-decoration-none"},{default:r(()=>[c(i(a.$t("menu.login")),1)]),_:1})])])]),H])])])],64)}const ae=f(C,[["render",J]]);export{ae as default};
