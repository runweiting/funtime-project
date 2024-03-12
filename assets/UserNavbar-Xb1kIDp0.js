import{_,m as v,r,o as h,c as u,a,b as t,w as o,F as p,d as f,e as i,t as s}from"./index-wyfjGevA.js";import{c as b}from"./cartStore-YwmMN7QF.js";import"./showSuccessToast-XKJZ93UQ.js";import"./showErrorToast-j4eTeWa1.js";const g={computed:{...v(b,["cartList"])},methods:{changeLanguage(e){const l=e.target.value;this.$i18n.locale=l}}},x={class:"navbar navbar-expand-lg navbar-dark bg-dark rounded-5 m-3 m-md-6"},w={class:"container p-5"},k=a("a",{class:"navbar-brand mb-0 fs-2 fw-bold",href:"index.html"},"funtime",-1),L=a("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[a("span",{class:"navbar-toggler-icon"})],-1),$={class:"collapse navbar-collapse justify-content-end",id:"navbarNav"},y={class:"navbar-nav gap-6"},N={class:"nav-item"},B={class:"nav-item"},C={class:"nav-item"},S={class:"nav-item"},V={class:"nav-item"},T={class:"badge rounded-pill bg-danger ms-2"},j={class:"nav-item"},z=a("option",{value:"zh-TW"},"中文",-1),A=a("option",{value:"en"},"英文",-1),D=[z,A],F={class:"bg-primary rounded-5 m-3 p-5"},I={class:"container"},R={class:"navbar navbar-dark"},q=a("div",{class:"d-flex flex-column flex-md-row align-items-md-center"},[a("a",{class:"navbar-brand mb-0 fs-2 fw-bold",href:"index.html"},"funtime"),a("span",{class:"fs-4 text-white fw-bold"},"讓有趣的聖經企劃發生")],-1),E={class:"navbar-nav flex-row gap-6"},O=a("li",{class:"nav-item"},[a("a",{class:"nav-link text-decoration-none",href:"#"},"聯繫我們 ")],-1),U={class:"nav-item"},W=f('<hr class="border-bottom border-white border-opacity-25"><div class="d-flex flex-column gap-2 flex-sm-row justify-content-sm-between"><small class="d-flex flex-column gap-0 flex-md-row align-items-md-center gap-md-6 text-white"><span>Copyright ©2023 whatisfuntime</span><span>All rights reserved.</span><span>隱私權政策</span><span>Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA" class="text-white">Icons 8</a> from <a href="https://icons8.com/illustrations" class="text-white">Ouch!</a></span></small><div class="d-flex align-items-center gap-6 fs-5 text-white"><i class="bi bi-line"></i><i class="bi bi-facebook"></i><i class="bi bi-envelope-fill"></i></div></div>',2);function G(e,l,H,J,K,c){const n=r("RouterLink"),d=r("router-view");return h(),u(p,null,[a("header",null,[a("nav",x,[a("div",w,[k,L,a("div",$,[a("ul",y,[a("li",N,[t(n,{to:{name:"home"},class:"nav-link text-decoration-none"},{default:o(()=>[i(s(e.$t("menu.home")),1)]),_:1})]),a("li",B,[t(n,{to:{name:"products"},class:"nav-link text-decoration-none"},{default:o(()=>[i(s(e.$t("menu.products")),1)]),_:1})]),a("li",C,[t(n,{to:{name:"activities"},class:"nav-link text-decoration-none"},{default:o(()=>[i(s(e.$t("menu.activities")),1)]),_:1})]),a("li",S,[t(n,{to:{name:"articles"},class:"nav-link text-decoration-none"},{default:o(()=>[i(s(e.$t("menu.articles")),1)]),_:1})]),a("li",V,[t(n,{to:{name:"cart"},class:"nav-link text-decoration-none"},{default:o(()=>[i(s(e.$t("menu.cart")),1),a("span",T,s(e.cartList.length),1)]),_:1})]),a("li",j,[a("select",{class:"form-select",onChange:l[0]||(l[0]=(...m)=>c.changeLanguage&&c.changeLanguage(...m))},D,32)])])])])])]),a("main",null,[t(d)]),a("footer",null,[a("div",F,[a("div",I,[a("nav",R,[q,a("ul",E,[O,a("li",U,[t(n,{to:{name:"login"},class:"nav-link text-decoration-none"},{default:o(()=>[i(s(e.$t("menu.login")),1)]),_:1})])])]),W])])])],64)}const Y=_(g,[["render",G]]);export{Y as default};