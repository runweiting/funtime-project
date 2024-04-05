import{_ as C,m as p,a as u,r as k,o as l,c as i,d as w,b as t,t as d,g as b,A as Q,F as n,x as m,e as E,v as S,f as v}from"./index-TFW6QGXf.js";import{u as y}from"./userProductsStore-5on-Fguo.js";import{u as g}from"./userCartStore-PRqeQ4jA.js";import{u as f}from"./userOrderStore-K1Ff7jc_.js";import{O as N}from"./OrderHeader-T3wX1d7K.js";import{s as P}from"./showErrorToast-H8uiVGa1.js";import"./showSuccessToast-TNVcc7d0.js";import"./FundraisingSteps-kFJhwpbj.js";const F={components:{OrderHeader:N},data(){return{currentFundraisingSteps:1,tempProductId:"",tempCartQty:0}},mounted(){const{id:s,units:e}=this.$route.params;this.tempProductId=s,this.tempCartQty=e,this.getProduct(this.tempProductId),this.calculateQty()},computed:{...p(y,["product"]),...p(g,["tempCartId"]),...p(f,["productQtyMap"])},methods:{...u(y,["getProduct"]),...u(g,["getCart","putCart","deleteCart"]),...u(f,["calculateQty"]),handlePutCart(s,e,c){this.getCart(s).then(()=>{this.putCart(s,this.tempCartId,c),this.$router.push({name:"order",params:{id:s,units:c}})}).catch(h=>{P(h)})},handleDeleteCart(s){this.deleteCart(s),this.$router.push({name:"home"})}}},I=v('<div class="mx-3 mx-lg-10"><div class="container bg-light rounded-5 px-6 py-3 px-lg-12 px-xl-15 mb-3 mb-lg-6"><div class="row"><div class="col text-center"><small class="text-dark-gray" style="letter-spacing:8px;">請確認預購方案</small></div></div></div></div>',1),T={class:"mx-3 mx-lg-10"},V={class:"container px-lg-12 py-3 py-lg-6"},O={class:"row row-cols-1"},j={class:"col-md-8 px-xl-4"},D={class:"d-flex flex-column justify-content-between rounded-5 border border-5 border-light p-5 gap-3"},M={class:"row row-cols-1 gy-4"},B={class:"col-md-5"},H=["src"],U={class:"col-md-7"},q={class:"d-flex flex-column h-100"},A={class:"text-dark-gray fw-normal mb-4"},$={class:"d-flex justify-content-between"},L={class:"mb-0"},z={class:"d-flex gap-2"},G={class:"fs-5 fw-bold mb-0"},J={class:"badge bg-info-light text-black"},K={class:"mt-auto"},R={class:"text-dark-gray d-block mb-2"},W={class:"d-flex"},X={key:0,class:"badge text-dark-gray fw-normal me-2",style:{"background-color":"#E9ECEF"}},Y=t("span",{class:"badge text-dark-gray fw-normal",style:{"background-color":"#E9ECEF"}},"目標達成 3 個月內出貨",-1),Z=v('<div><div class="d-flex"><i class="bi bi-circle-fill text-primary" style="scale:40%;"></i><span class="fs-6 fst-italic text-black text-center">登記享優惠資格，無需先付款。</span></div><div class="d-flex"><i class="bi bi-circle-fill text-primary" style="scale:40%;"></i><span class="fs-6 fst-italic text-black text-center">歡迎試玩分享，越早實現企劃。</span></div></div>',1),tt={class:"d-flex gap-2 text-dark-gray"},st=t("hr",{class:"w-100 border-top my-1",style:{border:"3px dotted #8C8C8E"}},null,-1),et=t("small",{class:"text-dark-gray"},"一組內含：",-1),ot={class:"list-unstyled mb-0"},rt=t("hr",{class:"w-100 border-top my-1",style:{border:"3px dotted #8C8C8E"}},null,-1),dt={class:"list-unstyled mb-0"},lt=t("hr",{class:"w-100 border-top my-1",style:{border:"3px dotted #8C8C8E"}},null,-1),it=t("div",{class:"d-flex gap-2"},[t("i",{class:"bi bi-check-circle-fill text-dark-secondary"}),t("small",null,"臺灣本島免運、可寄離島")],-1),at={class:"col-md-4 px-xl-4 gy-3 gy-md-0"},nt={class:"rounded-5 border border-5 border-light p-5"},ct={class:"d-flex flex-column gap-4"},pt=t("div",{class:"row align-items-center"},[t("div",{class:"col"},[t("h6",{class:"text-dark-gray mb-0"},"預購明細")])],-1),ut={class:"row align-items-center"},mt=t("div",{class:"col-4"},[t("span",{class:"text-dark-gray"},"數量")],-1),ht={class:"col-8"},_t={class:"input-group"},bt=["disabled"],yt=t("i",{class:"bi bi-dash"},null,-1),gt=[yt],ft=t("i",{class:"bi bi-plus"},null,-1),vt=[ft],xt={class:"d-flex justify-content-between"},Ct=t("span",{class:"text-dark-gray"},"金額",-1),kt={class:"fs-4 fw-bold mb-0 text-end"},wt=t("hr",{class:"w-100 border-top my-4",style:{border:"3px dotted #8C8C8E"}},null,-1),Qt={class:"d-flex flex-md-column gap-2"};function Et(s,e,c,h,o,_){const x=k("OrderHeader");return l(),i(n,null,[w(x,{currentFundraisingSteps:o.currentFundraisingSteps},null,8,["currentFundraisingSteps"]),I,t("div",T,[t("div",V,[t("div",O,[t("div",j,[t("div",D,[t("div",M,[t("div",B,[t("img",{src:s.product.imageUrl,alt:"product-image",class:"card-img-top object-fit-cover img-fluid rounded",style:{"max-height":"200px"}},null,8,H)]),t("div",U,[t("div",q,[t("h6",A,d(s.product.short_title),1),t("div",$,[t("h5",L,d(o.tempCartQty)+" 入組",1),t("div",z,[t("h6",G,"NT$ "+d(s.product.origin_price*s.product.discount*o.tempCartQty),1),t("span",J,d(s.product.discount*100)+"折",1)])]),t("div",K,[t("small",R,[b("預定售價 "),t("del",null,"NT$ "+d(s.product.origin_price),1),b("，折扣後 NT$ "+d(s.product.origin_price*s.product.discount),1)]),t("div",W,[s.productQtyMap[s.product.id]?(l(),i("span",X,"預購人數 "+d(s.productQtyMap[s.product.id].orderQty)+" 次",1)):Q("",!0),Y])])])])]),Z,t("div",tt,[(l(!0),i(n,null,m(s.product.tags,(r,a)=>(l(),i("small",{key:a,class:"badge bg-primary-light text-white fw-normal"},"#"+d(r),1))),128))]),st,t("div",null,[et,t("ul",ot,[(l(!0),i(n,null,m(s.product.contents,(r,a)=>(l(),i("li",{key:a},d(r),1))),128))])]),rt,t("ul",dt,[(l(!0),i(n,null,m(s.product.notes,(r,a)=>(l(),i("li",{key:a},d(r),1))),128))]),lt,it])]),t("div",at,[t("div",nt,[t("div",ct,[pt,t("div",ut,[mt,t("div",ht,[t("div",_t,[t("button",{disabled:o.tempCartQty===1,type:"button",class:"btn btn-outline-primary d-md-none d-lg-block",onClick:e[0]||(e[0]=r=>o.tempCartQty--)},gt,8,bt),E(t("input",{"onUpdate:modelValue":e[1]||(e[1]=r=>o.tempCartQty=r),type:"number",min:"1",class:"form-control","aria-label":"cart-qty","aria-describedby":"cart-qty"},null,512),[[S,o.tempCartQty]]),t("button",{type:"button",class:"btn btn-outline-primary d-md-none d-lg-block",onClick:e[2]||(e[2]=r=>o.tempCartQty++)},vt)])])]),t("div",xt,[Ct,t("h5",kt,"NT$ "+d(s.product.origin_price*s.product.discount*o.tempCartQty),1)])]),wt,t("div",Qt,[t("button",{onClick:e[3]||(e[3]=r=>_.handlePutCart(o.tempProductId,s.tempCartId,o.tempCartQty)),type:"button",class:"btn btn-primary w-100"},"確認預購"),t("button",{onClick:e[4]||(e[4]=r=>_.handleDeleteCart(s.tempCartId)),type:"button",class:"btn btn-outline-danger w-100"},"刪除預購")])])])])])])],64)}const jt=C(F,[["render",Et]]);export{jt as default};