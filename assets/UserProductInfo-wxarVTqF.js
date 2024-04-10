import{_ as M,m,a as g,r as k,o as e,c as o,b as t,d as u,w as _,t as i,F as d,x as c,f as T,g as n,A as p,z as $}from"./index-DW-YAaVl.js";import{u as w}from"./userProductsStore-ag1QJfWQ.js";import{u as C}from"./userCartStore-hjhkMM_y.js";import{u as S}from"./userOrderStore-dN18pYGR.js";import{u as j}from"./userLikesStore-8bfPxzVn.js";import{s as L}from"./showErrorToast-3Rr6__rM.js";import"./showSuccessToast-4Q0mJWPL.js";const N={mounted(){const{id:s}=this.$route.params;this.getProduct(s),this.getOrders(),this.calculateQty(),this.initPreferenceState()},computed:{...m(w,["product"]),...m(S,["productQtyMap"]),...m(C,["cartList"]),...m(j,["preferenceState"])},methods:{...g(w,["getProduct"]),...g(S,["getOrders","calculateQty"]),...g(C,["addToCart","getCart"]),...g(j,["initPreferenceState","addToCollection","removeCollection"]),async handleAddToCart(s,a){try{this.addToCart(s,a),await this.getCart(s),this.$router.push({name:"cart",params:{id:s,units:a}})}catch(y){L(y)}},handleCollection(s,a){this.preferenceState[a].isLiked===!1?this.addToCollection(s):this.preferenceState[a].isLiked===!0&&this.removeCollection(a)}}},V={class:"mx-3 mx-lg-10"},A={class:"container px-lg-12","data-aos":"fade-up"},B={class:"row align-items-center px-xl-4"},P={class:"col"},D={class:"d-flex gap-2 mb-2","aria-label":"breadcrumb"},F={class:"text-dark-gray"},R=t("small",{class:"text-dark-gray"},"/",-1),E={class:"text-dark-gray"},H={class:"fs-4 card-title fw-bold"},O={class:"row row-cols-1 py-2 p-xl-4 row-cols-xl-2"},U={class:"col-xl-7 px-xl-4"},q={class:"h-100 d-flex flex-column justify-content-between gap-4 position-relative"},z={key:0,class:"bi fs-5 bi-heart-fill text-white"},G={key:1,class:"bi fs-5 bi-heart-fill text-danger"},W=["src","alt"],Y={class:"d-flex flex-column flex-sm-row justify-content-sm-between gap-2 mb-2"},J={class:"d-flex gap-2"},K={class:"d-flex align-items-baseline gap-3"},X=t("small",{class:"text-dark-gray"},"提案人",-1),Z={class:"text-dark-gray"},I={class:"col-xl-5 px-xl-4"},tt={class:"h-100 d-flex flex-column justify-content-between gap-2"},st={class:"row row-cols-1 align-items-center align-items-md-end row-cols-xl-1 gy-2"},et={class:"col-md-5"},ot={class:"d-flex gap-8 align-items-center"},it={class:"fst-italic"},lt={class:"text-dark-gray"},rt={key:0,class:"fw-bold mt-2 mb-0"},at={class:"fst-italic"},dt=t("small",{class:"text-dark-gray text-start"},"預購人數",-1),ct={key:0,class:"fw-bold mt-2 mb-0"},nt={class:"col-md-7"},pt={key:0,class:"progress",style:{width:"85%"}},ut={key:1},ht={class:"fw-bold"},_t={class:"card-text mb-0 text-gray-dark"},ft={class:"d-flex flex-xl-row gap-4"},mt={key:0,class:"bi bi-lightning-fill text-primary"},gt={key:1,class:"bi bi-people-fill text-primary"},bt={key:2,class:"bi bi-flag-fill text-primary"},yt={class:"text-dark-gray"},vt=T('<div class="rounded-5 border border-5 border-light p-3"><div class="d-flex"><i class="bi bi-circle-fill text-primary" style="scale:40%;"></i><span class="fs-6 fw-bold fst-italic text-black text-center">登記享優惠資格，無需先付款。</span></div><div class="d-flex"><i class="bi bi-circle-fill text-primary" style="scale:40%;"></i><span class="fs-6 fw-bold fst-italic text-black text-center">歡迎試玩、分享，越早實現企劃。</span></div></div><div class="d-flex justify-content-end align-items-center gap-6"><button type="button" class="btn p-0 hvr-pop text-primary"><i class="bi bi-line fs-4"></i></button><button type="button" class="btn p-0 hvr-pop text-primary"><i class="bi bi-facebook fs-4"></i></button><button type="button" class="btn p-0 hvr-pop text-primary"><i class="bi bi-share-fill fs-4"></i></button></div>',2),xt={class:"mx-3 mx-lg-10"},kt={class:"container bg-light-gray rounded-5 px-6 py-3 px-lg-12 px-xl-15"},wt={class:"row row-cols-1 row-cols-lg-2 align-items-center"},Ct={class:"col-lg-7"},St={class:"list-unstyled d-flex gap-6 mb-0"},jt={class:"mx-3 mx-lg-10"},Qt={class:"container px-lg-12"},Mt={class:"row row-cols-1 py-2 p-xl-4 pt-xl-8 row-cols-md-2"},Tt={class:"col-md-5 px-xl-4"},$t={class:"d-flex flex-column justify-content-between rounded-5 border border-5 border-light p-5 my-5"},Lt={class:"d-flex gap-2"},Nt={class:"rounded-circle overflow-hidden",style:{width:"50px",height:"50px"}},Vt=["alt"],At={class:"d-flex flex-column justify-content-between"},Bt=t("small",{class:"text-dark-gray"},"提案人",-1),Pt={class:"text-dark-gray"},Dt={class:"position-lg-sticky",id:"targetSection"},Ft=["onClick"],Rt=["src","alt"],Et={class:"d-flex justify-content-between align-items-center"},Ht={class:"fs-6 text-dark-gray mb-0"},Ot={key:0,class:"d-none d-md-block fs-6 badge bg-danger"},Ut={class:"d-flex justify-content-between align-items-center"},qt={class:"d-flex gap-2"},zt={class:"fw-bold mb-0"},Gt={class:"badge bg-info-light text-black"},Wt={key:0,class:"d-md-none fs-6 badge bg-danger"},Yt={class:"text-dark-gray"},Jt=t("small",{class:"text-dark-gray"},"一組內含：",-1),Kt={class:"list-unstyled mb-0"},Xt=t("hr",{class:"w-100 border-top my-1",style:{border:"3px dotted #8C8C8E"}},null,-1),Zt={class:"list-unstyled mb-0"},It=t("hr",{class:"w-100 border-top my-1",style:{border:"3px dotted #8C8C8E"}},null,-1),ts=t("div",{class:"d-flex align-items-center gap-2"},[t("i",{class:"bi bi-check-circle-fill text-dark-secondary"}),t("small",null,"臺灣本島免運、可寄離島")],-1);function ss(s,a,y,es,os,v){var x;const h=k("RouterLink"),Q=k("RouterView");return e(),o(d,null,[t("div",V,[t("div",A,[t("div",B,[t("div",P,[t("nav",D,[t("small",F,[u(h,{to:{name:"home"},class:"nav-link text-decoration-none text-nowrap"},{default:_(()=>[n(i(s.$t("menu.home")),1)]),_:1})]),R,t("small",E,[u(h,{to:{name:"products"},class:"nav-link text-decoration-none text-nowrap"},{default:_(()=>[n(i(s.$t("menu.products")),1)]),_:1})])]),t("h2",H,i(s.product.title),1)])]),t("div",O,[t("div",U,[t("div",q,[t("button",{onClick:a[0]||(a[0]=r=>v.handleCollection(s.product,s.product.id)),type:"button",class:"btn btn-white position-absolute p-0 btn-likes hvr-pop"},[((x=s.preferenceState[s.product.id])==null?void 0:x.isLiked)===!1?(e(),o("i",z)):(e(),o("i",G))]),t("img",{src:s.product.imageUrl,class:"card-img-top object-fit-cover img-fluid rounded",alt:s.product.short_title+"商品主圖",style:{"max-height":"400px"}},null,8,W),t("div",Y,[t("div",J,[(e(!0),o(d,null,c(s.product.tags,(r,l)=>(e(),o("span",{key:l,class:"badge rounded-pill bg-primary text-white"},"# "+i(r),1))),128))]),t("div",K,[X,t("small",Z,i(s.product.proposer),1)])])])]),t("div",I,[t("div",tt,[t("div",st,[t("div",et,[t("div",ot,[t("div",it,[t("small",lt,"目標 "+i(s.product.target_units)+" 組",1),(e(!0),o(d,null,c(s.productQtyMap,(r,l)=>(e(),o("div",{key:l},[s.product.id===l?(e(),o("h3",rt,"累計 "+i(r.productQty)+" 組",1)):p("",!0)]))),128))]),t("div",at,[dt,(e(!0),o(d,null,c(s.productQtyMap,(r,l)=>(e(),o("div",{key:l},[s.product.id===l?(e(),o("h3",ct,i(r.orderQty)+" 人",1)):p("",!0)]))),128))])])]),t("div",nt,[(e(!0),o(d,null,c(s.productQtyMap,(r,l)=>(e(),o("div",{key:l,class:"d-flex justify-content-between align-items-center"},[s.product.id===l?(e(),o("div",pt,[s.product.id===l?(e(),o("div",{key:0,ref_for:!0,ref:"progressBar",class:"progress-bar progress-bar-striped progress-bar-animated bg-primary",role:"progressbar",style:$({width:(r.productQty/s.product.target_units*100).toFixed(2)+"%"})},null,4)):p("",!0)])):p("",!0),s.product.id===l?(e(),o("div",ut,[t("small",ht,i((r.productQty/s.product.target_units).toFixed(2)*100)+"%",1)])):p("",!0)]))),128))])]),t("p",_t,i(s.product.description),1),t("div",ft,[(e(!0),o(d,null,c(s.product.features,(r,l)=>(e(),o("div",{key:l,class:"d-flex justify-content-center gap-1"},[l===0?(e(),o("i",mt)):l===1?(e(),o("i",gt)):(e(),o("i",bt)),t("small",yt,i(r),1)]))),128))]),vt])])])])]),t("div",xt,[t("div",kt,[t("div",wt,[t("div",Ct,[t("ul",St,[t("li",null,[u(h,{to:{name:"product-content"},class:"text-gray text-decoration-none hvr-pop"},{default:_(()=>[n("專案內容")]),_:1})]),t("li",null,[u(h,{to:{name:"product-faq"},class:"text-gray text-decoration-none hvr-pop"},{default:_(()=>[n("常見問答")]),_:1})]),t("li",null,[u(h,{to:{name:"product-message"},class:"text-gray text-decoration-none hvr-pop"},{default:_(()=>[n("留言")]),_:1})])])])])])]),t("div",jt,[t("div",Qt,[t("div",Mt,[u(Q),t("div",Tt,[t("div",$t,[t("div",Lt,[t("div",Nt,[t("img",{src:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:s.product.proposer+"logo",class:"object-fit-cover img-fluid"},null,8,Vt)]),t("div",At,[Bt,t("span",Pt,i(s.product.proposer),1)])])]),t("div",Dt,[(e(!0),o(d,null,c(s.product.packages,(r,l)=>(e(),o("div",{key:l,class:"d-flex flex-column justify-content-between rounded-5 border border-5 border-light p-5 gap-3 mb-4 position-relative hvr-card shadow-sm",style:{cursor:"pointer"}},[t("a",{onClick:f=>v.handleAddToCart(s.product.id,r.units),class:"stretched-link"},null,8,Ft),t("img",{src:s.product.imageUrl,alt:s.product.short_title+"商品主圖",class:"card-img-top object-fit-cover img-fluid rounded",style:{"max-height":"100px"}},null,8,Rt),t("div",Et,[t("h3",Ht,i(r.name),1),s.productQtyMap[s.product.id]?(e(),o("span",Ot,"剩 "+i(s.product.target_units-s.productQtyMap[s.product.id].productQty)+" 組",1)):p("",!0)]),t("div",Ut,[t("div",qt,[t("h5",zt,"NT$ "+i(s.product.origin_price*s.product.discount*r.units),1),t("span",Gt,i(s.product.discount*100)+"折",1)]),s.productQtyMap[s.product.id]?(e(),o("span",Wt,"剩 "+i(s.product.target_units-s.productQtyMap[s.product.id].productQty)+" 組",1)):p("",!0)]),t("small",Yt,[n("預定售價 "),t("del",null,"NT$ "+i(s.product.origin_price),1),n("，現省 NT$ "+i((s.product.origin_price-s.product.origin_price*s.product.discount)*r.units),1)]),t("div",null,[Jt,t("ul",Kt,[(e(!0),o(d,null,c(s.product.contents,(f,b)=>(e(),o("li",{key:b},i(f),1))),128))])]),Xt,t("ul",Zt,[(e(!0),o(d,null,c(s.product.notes,(f,b)=>(e(),o("li",{key:b},i(f),1))),128))]),It,ts]))),128))])])])])])],64)}const ps=M(N,[["render",ss]]);export{ps as default};
