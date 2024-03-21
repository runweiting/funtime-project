import{_ as p,s as _,o as d,c as i,a as t,e as u,t as e,x as m,y as h,F as l,u as v,z as f,d as g,A as b,B as y}from"./index-UvZFmlvX.js";import{c as x}from"./userCartStore-jGcpH34R.js";import"./showSuccessToast-bQTajdBV.js";import"./showErrorToast-1wWGzD5-.js";var T={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"runweiting",VITE_TEXT:"這是部屬完成的環境",BASE_URL:"/funtime-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:w,VITE_APP_PATH:P}=T,V={data(){return{product:{},qty:1}},mounted(){const{id:o}=this.$route.params,c=`${w}/api/${P}/product/${o}`;this.axios.get(c).then(n=>{this.product=n.data.product})},methods:{..._(x,["addToCart"])}},r=o=>(b("data-v-c7304054"),o=o(),y(),o),A=g('<div class="m-3 m-lg-6" data-v-c7304054><div class="container bg-primary rounded-5 p-5 p-md-10" data-aos="fade-up" data-v-c7304054><div class="row" data-v-c7304054><div class="col" data-v-c7304054><div class="d-flex flex-column justify-content-center align-items-center gap-5" data-v-c7304054><h2 class="fs-1 text-white fw-bold mb-0" data-v-c7304054>聖經趣聞</h2><h5 class="text-white responsive-lh-ls text-normal mb-0" data-v-c7304054> 對喜歡的企劃按贊、留言，增加人氣，告訴我們你的想法，一起探索信仰的美好！ </h5></div></div></div></div></div>',1),E={class:"container"},S=r(()=>t("h1",{class:"pt-5 text-start"},"單一商品介紹",-1)),I={class:"row py-2"},k={key:0},U={class:"container-fluid"},B={class:"row"},D={class:"col-sm-4"},R=["src"],q={class:"col-sm-8"},C={class:"badge bg-dark ms-2"},L=r(()=>t("small",{class:"mb-2 text-secondary"},"商品敘述：",-1)),N={class:"mb-3"},j=r(()=>t("small",{class:"mb-2 text-secondary"},"商品內容：",-1)),F={class:"mb-3"},H={class:"mb-3"},M={class:"fs-6 fw-bold text-secondary me-2"},O={class:"fs-5 fw-bold text-danger"},z={class:"input-group"},X=["value"];function G(o,c,n,J,s,K){return d(),i(l,null,[A,t("main",E,[S,t("div",I,[s.product?(d(),i("div",k,[t("div",U,[t("div",B,[t("div",D,[t("img",{src:s.product.imageUrl,class:"img-fluid product-img"},null,8,R)]),t("div",q,[t("h2",null,[u(e(s.product.title)+" ",1),t("span",C,e(s.product.category),1)]),L,t("p",N,e(s.product.description),1),j,t("p",F,e(s.product.content),1),t("div",H,[t("del",M," 原價"+e(s.product.origin_price)+"元 ",1),t("span",O," 現在只要"+e(s.product.price)+"元 ",1)]),t("div",z,[m(t("select",{class:"form-select","onUpdate:modelValue":c[0]||(c[0]=a=>this.qty=a)},[(d(),i(l,null,v(10,a=>t("option",{key:a,value:a},e(a),9,X)),64))],512),[[h,this.qty]]),t("button",{onClick:c[1]||(c[1]=a=>o.addToCart(s.product.id,this.qty)),type:"button",class:"btn btn-primary"}," 加入購物車 ")])])])])])):f("",!0)])])],64)}const $=p(V,[["render",G],["__scopeId","data-v-c7304054"]]);export{$ as default};
