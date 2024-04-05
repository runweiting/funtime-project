import{_ as v,m as f,a as b,r as l,o,c as e,b as s,F as i,x as d,f as m,d as a,t as n}from"./index-TFW6QGXf.js";import{u as r}from"./userProductsStore-5on-Fguo.js";import{C as x}from"./vue3-count-to.esm-Us2zUdii.js";import"./showErrorToast-H8uiVGa1.js";const w={components:{CountTo:x},data(){return{countStart:0,countEnd:50,product:{}}},mounted(){this.getProducts()},computed:{...f(r,["productList"])},methods:{...b(r,["getProducts"])}},y=m('<div class="m-3 m-lg-6"><div class="container bg-primary rounded-5 p-5 p-md-10" data-aos="fade-up"><div class="row"><div class="col"><div class="d-flex flex-column justify-content-center align-items-center gap-5"><h2 class="fs-1 text-white fw-bold mb-0">企劃排名</h2><h5 class="text-white responsive-lh-ls text-normal mb-0"> 對喜歡的企劃按贊、留言，增加人氣，告訴我們你的想法，一起探索信仰的美好！ </h5></div></div></div></div></div>',1),k={class:"m-3 m-lg-6"},V={class:"container p-5 p-md-10"},S={class:"row"},j={class:"col"},L=m('<div class="row row-cols-1"><div class="col px-0 px-md-3 mb-3 mb-lg-6"><div class="d-flex align-items-baseline gap-2"><h2 class="d-none d-sm-block fw-bold mb-0">Ranking</h2><h4 class="fw-bold mb-0">企劃排名</h4></div></div></div>',1),P={class:"row row-cols-md-2 row-cols-lg-3 g-5 g-lg-10 mb-5 mb-md-10 position-relative"},$={class:"card h-100 shadow hvr-grow",style:{cursor:"pointer"}},B=["src"],C={class:"card-body d-flex flex-column justify-content-between"},E={class:"card-title fw-bold"},N={class:"row gx-0 mb-2"},R=s("div",{class:"col-4"},[s("div",{class:"h-100 pt-4"},[s("small",{class:"fst-italic text-gray-dark"},"累計")])],-1),F={class:"col-8"},U={class:"d-flex justify-content-end align-items-baseline gap-2"},z=s("div",{class:"d-flex align-items-center gap-2"},[s("small",{class:"fst-italic fw-bold"},"個"),s("i",{class:"bi bi-heart-fill text-danger"})],-1),A={class:"d-flex justify-content-end gap-2"},D={class:"badge rounded-pill bg-primary text-white",style:{right:"16px",bottom:"16px"}},T=s("div",{class:"col bg-secondary rounded-5 position-absolute z-index-n1 d-none d-md-block",style:{bottom:"-20px",width:"100%",height:"40px"}},null,-1);function q(_,G,H,I,c,J){const p=l("RouterLink"),u=l("count-to");return o(),e(i,null,[y,s("div",k,[s("div",V,[s("div",S,[s("div",j,[L,s("div",P,[(o(!0),e(i,null,d(_.productList,t=>(o(),e("div",{key:t.id,class:"col"},[s("div",$,[a(p,{to:`/product/${t.id}/content`,class:"stretched-link"},null,8,["to"]),s("img",{src:t.imageUrl,alt:"product-image",class:"card-img-top object-fit-cover img-fluid",style:{"min-height":"200px"}},null,8,B),s("div",C,[s("h5",E,n(t.title),1),s("div",N,[R,s("div",F,[s("div",U,[a(u,{startVal:c.countStart,endVal:c.countEnd,duration:5e3,class:"display-1 fst-italic fw-bold"},null,8,["startVal","endVal"]),z])])]),s("div",A,[(o(!0),e(i,null,d(t.tags,(h,g)=>(o(),e("div",{key:g},[s("span",D,n(`# ${h}`),1)]))),128))])])])]))),128)),T])])])])])],64)}const W=v(w,[["render",q]]);export{W as default};
