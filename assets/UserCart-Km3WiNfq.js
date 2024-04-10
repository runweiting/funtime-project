import{_ as C,m as u,a as m,r as x,o as l,c as i,d as k,b as t,t as d,g as _,A as w,F as n,x as h,e as Q,v as E,f}from"./index-DW-YAaVl.js";import{u as b}from"./userProductsStore-ag1QJfWQ.js";import{u as y}from"./userCartStore-hjhkMM_y.js";import{u as g}from"./userOrderStore-dN18pYGR.js";import{O as P}from"./OrderHeader-26bXFMTz.js";import"./showErrorToast-3Rr6__rM.js";import"./showSuccessToast-4Q0mJWPL.js";import"./FundraisingSteps-Ho4ZIUfU.js";const S={components:{OrderHeader:P},data(){return{currentFundraisingSteps:1,tempProductId:"",tempCartQty:0}},mounted(){const{id:s,units:e}=this.$route.params;this.tempProductId=s,this.tempCartQty=e,this.getProduct(this.tempProductId),this.calculateQty(),this.getCart(this.tempProductId)},computed:{...u(b,["product"]),...u(y,["tempCartId"]),...u(g,["productQtyMap"])},methods:{...m(b,["getProduct"]),...m(y,["getCart","putCart","deleteCart","deleteCarts"]),...m(g,["calculateQty"]),handlePutCart(s,e,c){this.putCart(s,this.tempCartId,c),this.$router.push({name:"order",params:{id:s,units:c}})},handleDeleteCart(){this.deleteCart(this.tempCartId),this.$router.push({name:"home"})}},unmounted(){this.$route.path.startsWith("/order")||this.deleteCarts()}},I=f('<div class="mx-3 mx-lg-10"><div class="container bg-light rounded-5 px-6 py-3 px-lg-12 px-xl-15 mb-3 mb-lg-6"><div class="row"><div class="col text-center"><small class="text-dark-gray" style="letter-spacing:8px;">請確認預購方案</small></div></div></div></div>',1),N={class:"mx-3 mx-lg-10"},F={class:"container px-lg-12 py-3 py-lg-6"},T={class:"row row-cols-1"},V={class:"col-md-8 px-xl-4"},D={class:"d-flex flex-column justify-content-between rounded-5 border border-5 border-light p-5 gap-3"},O={class:"row row-cols-1 gy-4"},j={class:"col-md-5"},M=["src","alt"],B={class:"col-md-7"},H={class:"d-flex flex-column h-100"},U={class:"text-dark-gray fw-normal mb-4"},q={class:"d-flex justify-content-between"},A={class:"mb-0"},L={class:"d-flex gap-2"},W={class:"fs-5 fw-bold mb-0"},$={class:"badge bg-info-light text-black"},z={class:"mt-auto"},G={class:"text-dark-gray d-block mb-2"},J={class:"d-flex"},K={key:0,class:"badge text-dark-gray fw-normal me-2",style:{"background-color":"#E9ECEF"}},R=t("span",{class:"badge text-dark-gray fw-normal",style:{"background-color":"#E9ECEF"}},"目標達成 3 個月內出貨",-1),X=f('<div><div class="d-flex"><i class="bi bi-circle-fill text-primary" style="scale:40%;"></i><span class="fs-6 fst-italic text-black text-center">登記享優惠資格，無需先付款。</span></div><div class="d-flex"><i class="bi bi-circle-fill text-primary" style="scale:40%;"></i><span class="fs-6 fst-italic text-black text-center">歡迎試玩分享，越早實現企劃。</span></div></div>',1),Y={class:"d-flex gap-2 text-dark-gray"},Z=t("hr",{class:"w-100 border-top my-1",style:{border:"3px dotted #8C8C8E"}},null,-1),tt=t("small",{class:"text-dark-gray"},"一組內含：",-1),st={class:"list-unstyled mb-0"},et=t("hr",{class:"w-100 border-top my-1",style:{border:"3px dotted #8C8C8E"}},null,-1),ot={class:"list-unstyled mb-0"},rt=t("hr",{class:"w-100 border-top my-1",style:{border:"3px dotted #8C8C8E"}},null,-1),dt=t("div",{class:"d-flex gap-2"},[t("i",{class:"bi bi-check-circle-fill text-dark-secondary"}),t("small",null,"臺灣本島免運、可寄離島")],-1),lt={class:"col-md-4 px-xl-4 gy-3 gy-md-0"},it={class:"rounded-5 border border-5 border-light p-5"},at={class:"d-flex flex-column gap-4"},nt=t("div",{class:"row align-items-center"},[t("div",{class:"col"},[t("h6",{class:"text-dark-gray mb-0"},"預購明細")])],-1),ct={class:"row align-items-center"},pt=t("div",{class:"col-4"},[t("span",{class:"text-dark-gray"},"數量")],-1),ut={class:"col-8"},mt={class:"input-group"},ht=["disabled"],_t=t("i",{class:"bi bi-dash"},null,-1),bt=[_t],yt=t("i",{class:"bi bi-plus"},null,-1),gt=[yt],ft={class:"d-flex justify-content-between"},vt=t("span",{class:"text-dark-gray"},"金額",-1),Ct={class:"fs-4 fw-bold mb-0 text-end"},xt=t("hr",{class:"w-100 border-top my-4",style:{border:"3px dotted #8C8C8E"}},null,-1),kt={class:"d-flex flex-md-column gap-2"};function wt(s,e,c,Qt,r,p){const v=x("OrderHeader");return l(),i(n,null,[k(v,{currentFundraisingSteps:r.currentFundraisingSteps},null,8,["currentFundraisingSteps"]),I,t("div",N,[t("div",F,[t("div",T,[t("div",V,[t("div",D,[t("div",O,[t("div",j,[t("img",{src:s.product.imageUrl,alt:s.product.short_title+"商品主圖",class:"card-img-top object-fit-cover img-fluid rounded",style:{"max-height":"200px"}},null,8,M)]),t("div",B,[t("div",H,[t("h6",U,d(s.product.short_title),1),t("div",q,[t("h5",A,d(r.tempCartQty)+" 入組",1),t("div",L,[t("h6",W,"NT$ "+d(s.product.origin_price*s.product.discount*r.tempCartQty),1),t("span",$,d(s.product.discount*100)+"折",1)])]),t("div",z,[t("small",G,[_("預定售價 "),t("del",null,"NT$ "+d(s.product.origin_price),1),_("，折扣後 NT$ "+d(s.product.origin_price*s.product.discount),1)]),t("div",J,[s.productQtyMap[s.product.id]?(l(),i("span",K,"預購人數 "+d(s.productQtyMap[s.product.id].orderQty)+" 次",1)):w("",!0),R])])])])]),X,t("div",Y,[(l(!0),i(n,null,h(s.product.tags,(o,a)=>(l(),i("small",{key:a,class:"badge bg-primary-light text-white fw-normal"},"#"+d(o),1))),128))]),Z,t("div",null,[tt,t("ul",st,[(l(!0),i(n,null,h(s.product.contents,(o,a)=>(l(),i("li",{key:a},d(o),1))),128))])]),et,t("ul",ot,[(l(!0),i(n,null,h(s.product.notes,(o,a)=>(l(),i("li",{key:a},d(o),1))),128))]),rt,dt])]),t("div",lt,[t("div",it,[t("div",at,[nt,t("div",ct,[pt,t("div",ut,[t("div",mt,[t("button",{disabled:r.tempCartQty===1,type:"button",class:"btn btn-outline-primary d-md-none d-lg-block",onClick:e[0]||(e[0]=o=>r.tempCartQty--)},bt,8,ht),Q(t("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>r.tempCartQty=o),type:"number",min:"1",class:"form-control","aria-label":"cart-qty","aria-describedby":"cart-qty"},null,512),[[E,r.tempCartQty]]),t("button",{type:"button",class:"btn btn-outline-primary d-md-none d-lg-block",onClick:e[2]||(e[2]=o=>r.tempCartQty++)},gt)])])]),t("div",ft,[vt,t("h5",Ct,"NT$ "+d(s.product.origin_price*s.product.discount*r.tempCartQty),1)])]),xt,t("div",kt,[t("button",{onClick:e[3]||(e[3]=o=>p.handlePutCart(r.tempProductId,s.tempCartId,r.tempCartQty)),type:"button",class:"btn btn-primary w-100"},"確認預購"),t("button",{onClick:e[4]||(e[4]=(...o)=>p.handleDeleteCart&&p.handleDeleteCart(...o)),type:"button",class:"btn btn-outline-danger w-100"},"刪除預購")])])])])])])],64)}const Dt=C(S,[["render",wt]]);export{Dt as default};
