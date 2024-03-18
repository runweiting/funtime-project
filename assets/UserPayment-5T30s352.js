import{_ as f,s as g,S as n,r as i,o as u,c as y,a as s,b as l,w as p,F as _,d as c,e as m,t as v}from"./index-nIaOHvfA.js";import{c as k}from"./cartStore-3NqmFZXv.js";import{C as w}from"./CartList-AaZLgfzs.js";import{O as j}from"./OrderDetail-_8V9Aq-Z.js";import"./showSuccessToast-LuDJjneU.js";import"./showErrorToast-bJNqnV0F.js";import"./couponsStore-_PJ1sv1A.js";const E={components:{CartList:w,OrderDetail:j},data(){return{apiUrl:"https://vue3-course-api.hexschool.io/v2",apiPath:"runweiting"}},methods:{...g(k,["getCart"]),createOrder(e){const o={data:e},d=`${this.apiUrl}/api/${this.apiPath}/order`;this.axios.post(d,o).then(a=>{n.fire({title:a.data.message,icon:"success",confirmButtonText:"OK"}),this.$refs.orderDetail.resetForm(),this.getCart()}).catch(a=>{n.fire({title:a.data.message,icon:"error",confirmButtonText:"OK"})})}}},$={class:"mx-3 mx-lg-10"},O={class:"container px-lg-12 mb-3 mb-lg-6"},C={class:"row row-cols-1 gy-3 gy-lg-6 row-cols-md-2 px-md-2 px-lg-3 px-xl-4"},N={class:"col px-xl-4"},S={class:"h-100 d-flex flex-column justify-content-between"},T={class:"d-flex gap-2 mb-3","aria-label":"breadcrumb"},F={class:"text-dark-gray"},V=s("small",{class:"text-dark-gray"},"/",-1),B={class:"text-dark-gray"},M=s("h1",{class:"fs-4 card-title fw-bold mb-3"}," 《走入創世記》讀經進度結合聖經地圖，原來聖經可以這樣讀！ ",-1),z=s("div",{class:"d-flex align-items-baseline gap-3"},[s("small",{class:"text-dark-gray"},"提案人"),s("small",{class:"text-dark-gray"},"我們的主日學")],-1),D=s("div",{class:"col px-xl-4"},[s("div",{class:"rounded-5 p-5",style:{border:"5px dotted #E7EFFF"}},[s("h3",{class:"fs-5 mb-10"},"集資進度"),s("div",{class:"w-100 px-8 pb-12"},[s("div",{class:"position-relative"},[s("div",{class:"progress",style:{height:"5px"}},[s("div",{class:"progress-bar bg-info-light",role:"progressbar",style:{width:"0%"},"aria-valuenow":"33.33","aria-valuemin":"0","aria-valuemax":"100"})]),s("div",{class:"position-absolute translate-middle z-index-8",style:{top:"16px",left:"0.99%"}},[s("div",{class:"d-flex flex-column justify-content-center align-items-center gap-2"},[s("div",{class:"bg-info text-white rounded-circle position-relative",style:{width:"50px",height:"50px"}},[s("i",{class:"bi bi-bag-check-fill fs-3 position-absolute top-50 start-50 translate-middle"})]),s("small",null,"加入預購")])]),s("div",{class:"position-absolute translate-middle z-index-8",style:{top:"16px",left:"33.33%"}},[s("div",{class:"d-flex flex-column justify-content-center align-items-center gap-2"},[s("div",{class:"text-white rounded-circle position-relative",style:{width:"50px",height:"50px",background:"#e9ecef"}},[s("i",{class:"bi bi-buildings-fill fs-3 position-absolute top-50 start-50 translate-middle"})]),s("small",null,"集資成功")])]),s("div",{class:"position-absolute translate-middle z-index-8",style:{top:"16px",left:"66.66%"}},[s("div",{class:"d-flex flex-column justify-content-center align-items-center gap-2"},[s("div",{class:"text-white rounded-circle position-relative",style:{width:"50px",height:"50px",background:"#e9ecef"}},[s("i",{class:"bi bi-alarm-fill fs-3 position-absolute top-50 start-50 translate-middle"})]),s("small",null,"通知付款")])]),s("div",{class:"position-absolute translate-middle z-index-8",style:{top:"16px",left:"98.99%"}},[s("div",{class:"d-flex flex-column justify-content-center align-items-center gap-2"},[s("div",{class:"text-white rounded-circle position-relative",style:{width:"50px",height:"50px",background:"#e9ecef"}},[s("i",{class:"bi bi-box-seam-fill fs-3 position-absolute top-50 start-50 translate-middle"})]),s("small",null,"出貨")])])])])])],-1),L=c('<div class="mx-3 mx-lg-10"><div class="container bg-light rounded-5 px-6 py-3 px-lg-12 px-xl-15"><div class="d-flex justify-content-center gap-1 gap-414-2 gap-md-6 gap-lg-12"><div class="d-flex align-items-center gap-2 gap-lg-4"><span class="span-lh-ls">確認品項</span><i class="bi bi-check-circle-fill text-dark-secondary"></i></div><i class="bi bi-chevron-right"></i><div class="d-flex align-items-center gap-2 gap-lg-4"><span class="span-lh-ls text-gray">填寫訂單</span><i class="bi bi-check-circle-fill text-gray"></i></div><i class="bi bi-chevron-right"></i><div class="d-flex align-items-center gap-2 gap-lg-4"><span class="span-lh-ls text-gray">預購結果</span><i class="bi bi-check-circle-fill text-gray"></i></div></div></div></div>',1),P={class:"mx-3 mx-lg-10"},U={class:"container px-lg-12 py-3 py-lg-6"},A={class:"row row-cols-1 gy-3"},K=c('<div class="col-md-6 col-lg-5 px-xl-4"><div class="rounded-5 border border-5 border-light p-5"><div class="row row-cols-1 gy-5"><div class="col px-8 px-xl-10"><div class="row row-cols-md-1 row-cols-sm-2 align-items-center"><div class="col-sm-7"><div class="d-flex gap-2 text-dark-gray mb-2"><span>訂單時間</span><span>2024/03/17 14:45</span></div><div class="d-flex gap-2 text-dark-gray"><span>訂單編號</span><span>20240317144504</span></div></div><div class="col-sm-5"><div class="d-flex justify-content-start justify-content-sm-center justify-content-md-start align-items-center gap-2 gap-lg-4 pt-4 pt-sm-0 pt-md-4"><i class="bi bi-alarm-fill text-info fs-4"></i><h4 class="mb-0">通知付款</h4></div></div></div></div><div class="col px-xl-5"><div class="d-flex flex-column justify-content-between"><div class="rounded-5 border border-light border-3 p-4"><table class="table table-border mb-0"><thead><tr><th scope="col" colspan="3" class="fs-5">預購資訊</th></tr></thead><tbody class="align-middle"><tr><th scope="row">預購<br class="d-414-block">金額</th><td><span class="fs-5 fw-bold">NT$ 1,300元</span><div class="d-flex gap-2 mt-1"><i class="bi bi-check-circle-fill text-dark-secondary"></i><span class="text-dark-gray">已使用優惠卷</span></div></td></tr><tr><th scope="row">預購<br class="d-414-block">內容</th><td><span class="fs-5 fw-bold">《走入創世記》2套</span><div class="text-dark-gray mt-1"> 完整 1 套內含： <ul class="list-unstyled mb-0"><li><i class="bi bi-check"></i>中英地圖 x 3 張</li><li><i class="bi bi-check"></i>故事圖卡 x 62 個</li><li><i class="bi bi-check"></i>中英說明書 x 1 份</li><li><i class="bi bi-check"></i>圓形魔鬼氈 x 2 片</li></ul></div></td></tr><tr><th scope="row">收件<br class="d-414-block">訊息</th><td colspan="2"><ul class="list-unstyled mb-0 text-dark-gray"><li>姓名：</li><li>手機：</li><li>Email：</li><li>運送：</li><li>地址：</li><li>備註：</li></ul></td></tr><tr><th scope="row">付款<br class="d-414-block">狀態</th><td colspan="2"><div class="d-flex gap-2"><i class="bi bi-alarm-fill text-info"></i><span class="text-dark-gray">通知付款</span></div></td></tr></tbody></table></div></div></div></div></div></div>',1),R={class:"col-md-6 col-lg-7 px-xl-4"},Y={ref:"form-payment"},q={class:"d-none p-5"},G=s("h3",{class:"fs-5"},"會員資料",-1),H={ref:"form-member"},I={class:"form-floating mb-3"},J=s("input",{type:"email",class:"form-control",id:"floatingEmail",name:"email",placeholder:"請輸入email",disabled:""},null,-1),Q=s("label",{for:"floatingEmail",class:"form-label"},"Email",-1),W={class:"row"},X={class:"col"},Z={class:"form-floating mb-3"},ss=s("input",{type:"text",class:"form-control",id:"floatingName",name:"姓名",placeholder:"請輸入姓名",disabled:""},null,-1),ls=s("label",{for:"floatingName",class:"form-label"},"收件人姓名",-1),es={class:"col"},as={class:"form-floating mb-3"},is=s("input",{type:"tel",class:"form-control",id:"floatingTel",name:"手機",disabled:""},null,-1),ts=s("label",{for:"floatingTel",class:"form-label"},"手機",-1),cs=c('<div class="rounded-5 border border-5 border-light p-5 mb-3"><h3 class="fs-5">發票類型</h3><div class="row row-cols-1 gy-2"><div class="col"><div class="rounded-5 border border-light border-3 p-4"><div class="row row-cols-1 row-cols-sm-2 gy-3"><div class="col"><div class="form-check ps-10"><input class="form-check-input" style="margin-left:-2rem;" type="checkbox" value="個人發票-手機載具" id="individual-invoice"><label class="form-check-label text-dark-gray" for="individual-invoice"> 個人發票 </label></div></div><div class="col"><label for="mobile-invoice" class="form-label text-dark-gray">手機載具</label><div class="input-group"><input type="text" class="form-control placeholder-light" id="mobile-invoice" aria-describedby="mobile-invoice" placeholder="請填入手機載具" disabled></div></div></div></div></div><div class="col"><div class="rounded-5 border border-light border-3 p-4"><div class="row row-cols-1 row-cols-sm-2 gy-3"><div class="col"><div class="form-check ps-10"><input class="form-check-input" style="margin-left:-2rem;" type="checkbox" value="公司發票" id="company-invoice"><label class="form-check-label text-dark-gray" for="company-invoice"> 公司發票 </label></div></div><div class="col"><label for="company-ubn" class="form-label text-dark-gray">統一編號</label><div class="input-group mb-2"><input type="text" class="form-control placeholder-light" id="company-ubn" aria-describedby="company-ubn" placeholder="請填入統一編號"></div><label for="company-name" class="form-label text-dark-gray">公司抬頭</label><div class="input-group"><input type="text" class="form-control placeholder-light" id="company-name" aria-describedby="company-name" placeholder="請填入公司抬頭"></div></div></div></div></div></div></div><div class="rounded-5 border border-5 border-light p-5"><h3 class="fs-5">付款方式</h3><div class="row row-cols-1 gy-2 mb-3"><div class="col"><div class="rounded-5 border border-light border-3 p-4"><div class="row mb-3"><div class="col"><div class="form-check ps-10"><input class="form-check-input" style="margin-left:-2rem;" type="checkbox" value="credit-card" id="credit-card"><label class="form-check-label text-dark-gray" for="credit-card"> 線上刷卡 </label></div></div></div><div class="row row-cols-2"><div class="col-4 pe-0"><label for="name" class="form-label text-dark-gray">持卡人</label><div class="input-group mb-2"><input type="text" class="form-control placeholder-light" id="name" aria-describedby="name" placeholder="請填入姓名"></div></div><div class="col-8 ps-2"><label for="credit-card-number" class="form-label text-dark-gray">信用卡號碼</label><div class="input-group"><input type="text" class="form-control placeholder-light" id="credit-card-number" aria-describedby="credit-card-number" placeholder="請填入卡號"></div></div></div><div class="row row-cols-3"><div class="col pe-0"><label for="expiry-date-month" class="form-label text-dark-gray">有效期限</label><div class="input-group mb-4"><input type="number" class="form-control placeholder-light" id="expiry-date-month" aria-describedby="expiry-date-month" placeholder="MM"></div></div><div class="col px-2"><div class="input-group"><input type="text" class="form-control placeholder-light align-self-end" id="expiry-date-month" aria-describedby="expiry-date-month" placeholder="YY" style="margin-top:32px;"></div></div><div class="col ps-0"><label for="credit-card-cvv" class="form-label text-dark-gray">安全碼</label><div class="input-group mb-4"><input type="number" class="form-control placeholder-light" id="credit-card-cvv" aria-describedby="credit-card-cvv" placeholder="CVV"></div></div></div></div></div><div class="col"><div class="rounded-5 border border-light border-3 p-4"><div class="row mb-4"><div class="col"><div class="form-check ps-10"><input class="form-check-input" style="margin-left:-2rem;" type="checkbox" value="bank-transfer" id="bank-transfer"><label class="form-check-label text-dark-gray" for="bank-transfer"> ATM虛擬帳號轉帳 </label></div></div></div><div class="row"><div class="col"><div class="d-flex gap-2 mb-2 text-dark-gray"><span>繳費銀行名稱：</span><span>六角銀行</span></div><div class="d-flex gap-2 mb-2 text-dark-gray"><span>繳費銀行代碼：</span><span>xxx</span></div><div class="d-flex gap-2 mb-2 text-dark-gray"><span>繳費虛擬帳號：</span><span>xxxx xxxx xxxx xxxx</span></div></div></div></div></div></div><div class="text-end"><button type="submit" class="btn btn-primary text-white">確認付款</button></div></div>',2),os={class:"col px-xl-4 my-3 my-lg-6"},ds={class:"container"},rs=s("h1",{class:"pt-5 text-center"},"結帳",-1),ns={class:"row"},ps={class:"col"};function ms(e,o,d,a,vs,b){const r=i("RouterLink"),t=i("ErrorMessage"),h=i("order-detail"),x=i("cart-list");return u(),y(_,null,[s("div",$,[s("div",O,[s("div",C,[s("div",N,[s("div",S,[s("nav",T,[s("small",F,[l(r,{to:{name:"home"},class:"nav-link text-decoration-none text-nowrap"},{default:p(()=>[m(v(e.$t("menu.home")),1)]),_:1})]),V,s("small",B,[l(r,{to:{name:"products"},class:"nav-link text-decoration-none text-nowrap"},{default:p(()=>[m(v(e.$t("menu.products")),1)]),_:1})])]),M,z])]),D])])]),L,s("div",P,[s("div",U,[s("div",A,[K,s("div",R,[s("form",Y,[s("div",q,[G,s("form",H,[s("div",I,[J,Q,l(t,{name:"email",class:"invalid-feedback"})]),s("div",W,[s("div",X,[s("div",Z,[ss,ls,l(t,{name:"姓名",class:"invalid-feedback"})])]),s("div",es,[s("div",as,[is,ts,l(t,{name:"手機",class:"invalid-feedback"})])])])],512)]),cs],512)])]),s("div",os,[l(h,{class:"w-100 mt-4 p-3",onSendOrder:b.createOrder,ref:"orderDetail"},null,8,["onSendOrder"])])])]),s("div",ds,[rs,s("div",ns,[s("div",ps,[l(x,{class:"w-100 py-3"})])])])],64)}const _s=f(E,[["render",ms]]);export{_s as default};
