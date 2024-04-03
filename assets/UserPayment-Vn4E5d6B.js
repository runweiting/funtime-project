import{_ as V,m as w,a as O,r as m,o as c,c as n,d,b as e,t as r,A as b,F as u,x as f,w as C,f as D,g as i,e as M,v as U}from"./index-8_2dSobz.js";import{u as v}from"./userOrderStore-xe7S_CrE.js";import{O as S}from"./OrderHeader-gopG_fYJ.js";import{t as F}from"./timestampToDate-lwWXufjj.js";import"./showSuccessToast-NlkLUFHd.js";import"./showErrorToast-RmEj-76d.js";import"./userCartStore-_qhtbB7l.js";import"./userProductsStore-87MYB2Ca.js";import"./FundraisingSteps-apXtfXR6.js";const T={components:{OrderHeader:S},data(){return{currentFundraisingSteps:2,currentProgress:3,invoice_individual:"",invoice_mobile:"",mobile_carrier:"",invoice_company:"",company_name:"",company_ubn:"",creditCard:"",bank_transfer:"",cardholder:"",creditCard_number:"",expiryDate_month:"",expiryDate_year:"",creditCard_cvv:"",tempOrderId:""}},mounted(){const{id:l}=this.$route.params;this.tempProductId=l},computed:{...w(v,["tempOrder"])},methods:{...O(v,["getOrder","postPay"]),formatDate(l){const{formattedDate:o,formattedTime:h}=F(l);return{formattedDate:o,formattedTime:h}},onSubmit(){this.postPay(this.tempOrder.id),this.$refs.formPayment.resetForm(),this.$router.push({name:"payment-result",params:{id:this.tempProductId}})}}},N=D('<div class="mx-3 mx-lg-10"><div class="container bg-light rounded-5 px-6 py-3 px-lg-12 px-xl-15 mb-3 mb-lg-6"><div class="row"><div class="col text-center"><small class="text-dark-gray" style="letter-spacing:8px;">請填寫付款資料</small></div></div></div></div>',1),P={class:"mx-3 mx-lg-10"},E={class:"container px-lg-12 py-3 py-lg-6"},j={class:"row row-cols-1 gy-3"},A={class:"col-md-6 col-lg-5 px-xl-4"},B={class:"rounded-5 border border-5 border-light p-5"},H={class:"row row-cols-1 gy-5"},I={class:"col px-8 px-xl-10"},Y={class:"row row-cols-md-1 row-cols-sm-2 align-items-center"},q={class:"col-sm-7"},L={class:"d-flex gap-2 text-dark-gray mb-2"},z=e("span",null,"訂單時間",-1),G={key:0},J={class:"d-flex gap-2 text-dark-gray"},K=e("span",null,"訂單編號",-1),Q=e("div",{class:"col-sm-5"},[e("div",{class:"d-flex justify-content-start justify-content-sm-center justify-content-md-start align-items-center gap-2 gap-lg-4 pt-4 pt-sm-0 pt-md-4"},[e("i",{class:"bi bi-alarm-fill text-info fs-4"}),e("h4",{class:"mb-0"},"通知付款")])],-1),R={class:"col px-xl-5"},W={class:"d-flex flex-column justify-content-between"},X={class:"rounded-5 border border-light border-3 p-4"},Z=e("thead",null,[e("tr",null,[e("th",{scope:"col",colspan:"3",class:"fs-5"},"預購資訊")])],-1),$={class:"align-middle"},ee=e("th",{scope:"row"},[i("預購"),e("br",{class:"d-414-block"}),i("金額")],-1),se={class:"fs-5 fw-bold"},oe={key:0,class:"d-flex gap-2 mt-1"},te=e("i",{class:"bi bi-check-circle-fill text-dark-secondary"},null,-1),le={class:"text-dark-gray"},re={class:"text-dark-gray"},de=e("th",{scope:"row"},[i("預購"),e("br",{class:"d-414-block"}),i("內容")],-1),ae={class:"fs-5 fw-bold"},ie={class:"text-dark-gray mt-1"},ce=e("th",{scope:"row"},[i("收件"),e("br",{class:"d-414-block"}),i("訊息")],-1),ne={colspan:"2"},me={class:"list-unstyled mb-0 text-dark-gray"},_e=e("tr",null,[e("th",{scope:"row"},[i("付款"),e("br",{class:"d-414-block"}),i("狀態")]),e("td",{colspan:"2"},[e("div",{class:"d-flex gap-2"},[e("i",{class:"bi bi-alarm-fill text-info"}),e("span",{class:"text-dark-gray"},"通知付款")])])],-1),pe={class:"col-md-6 col-lg-7 px-xl-4"},ue={class:"d-none p-5"},he=e("h3",{class:"fs-5"},"會員資料",-1),be={ref:"form-member"},fe={class:"form-floating mb-3"},ve=e("input",{type:"email",class:"form-control",id:"floatingEmail",name:"email",placeholder:"請輸入email",disabled:""},null,-1),ge=e("label",{for:"floatingEmail",class:"form-label"},"Email",-1),ye={class:"row"},xe={class:"col"},ke={class:"form-floating mb-3"},Ve=e("input",{type:"text",class:"form-control",id:"floatingName",name:"姓名",placeholder:"請輸入姓名",disabled:""},null,-1),we=e("label",{for:"floatingName",class:"form-label"},"收件人姓名",-1),Oe={class:"col"},Ce={class:"form-floating mb-3"},De=e("input",{type:"tel",class:"form-control",id:"floatingTel",name:"手機",disabled:""},null,-1),Me=e("label",{for:"floatingTel",class:"form-label"},"手機",-1),Ue={class:"rounded-5 border border-5 border-light p-5 mb-3"},Se=e("h3",{class:"fs-5"},"發票類型",-1),Fe={class:"row row-cols-1 gy-2"},Te={class:"col"},Ne={class:"rounded-5 border border-light border-3 p-4"},Pe={class:"row row-cols-1 row-cols-sm-2 gy-3"},Ee={class:"col"},je={class:"form-check ps-10"},Ae=e("label",{class:"form-check-label text-dark-gray",for:"invoice_individual"}," 個人發票 ",-1),Be={class:"col"},He=e("label",{for:"mobile_carrier",class:"form-label text-dark-gray"},"手機載具",-1),Ie={class:"input-group"},Ye={class:"col"},qe={class:"rounded-5 border border-light border-3 p-4"},Le={class:"row row-cols-1 row-cols-sm-2 gy-3"},ze={class:"col"},Ge={class:"form-check ps-10"},Je=e("label",{class:"form-check-label text-dark-gray",for:"invoice_company"}," 公司發票 ",-1),Ke={class:"col"},Qe=e("label",{for:"company_ubn",class:"form-label text-dark-gray"},"統一編號",-1),Re={class:"input-group mb-2"},We=e("label",{for:"company_name",class:"form-label text-dark-gray"},"公司抬頭",-1),Xe={class:"input-group"},Ze={class:"rounded-5 border border-5 border-light p-5"},$e=e("h3",{class:"fs-5"},"付款方式",-1),es={class:"row row-cols-1 gy-2 mb-3"},ss={class:"col"},os={class:"rounded-5 border border-light border-3 p-4"},ts={class:"row mb-3"},ls={class:"col"},rs={class:"form-check ps-10"},ds=e("label",{class:"form-check-label text-dark-gray",for:"creditCard"}," 線上刷卡 ",-1),as={class:"row row-cols-2"},is={class:"col-4 pe-0"},cs=e("label",{for:"cardholder",class:"form-label text-dark-gray"},"持卡人",-1),ns={class:"input-group mb-2"},ms={class:"col-8 ps-2"},_s=e("label",{for:"credit-card-number",class:"form-label text-dark-gray"},"信用卡號碼",-1),ps={class:"input-group"},us={class:"row row-cols-3"},hs={class:"col pe-0"},bs=e("label",{for:"expiryDate",class:"form-label text-dark-gray"},"有效期限",-1),fs={class:"input-group mb-4"},vs={class:"col px-2"},gs={class:"input-group"},ys={class:"col ps-0"},xs=e("label",{for:"creditCard_cvv",class:"form-label text-dark-gray"},"安全碼",-1),ks={class:"input-group mb-4"},Vs={class:"col"},ws={class:"rounded-5 border border-light border-3 p-4"},Os={class:"row mb-4"},Cs={class:"col"},Ds={class:"form-check ps-10"},Ms=e("label",{class:"form-check-label text-dark-gray",for:"bank_transfer"}," ATM虛擬帳號轉帳 ",-1),Us=e("div",{class:"row"},[e("div",{class:"col"},[e("div",{class:"d-flex gap-2 mb-2 text-dark-gray"},[e("span",null,"繳費銀行名稱："),e("span",null,"六角銀行")]),e("div",{class:"d-flex gap-2 mb-2 text-dark-gray"},[e("span",null,"繳費銀行代碼："),e("span",null,"xxx")]),e("div",{class:"d-flex gap-2 mb-2 text-dark-gray"},[e("span",null,"繳費虛擬帳號："),e("span",null,"xxxx xxxx xxxx xxxx")])])],-1),Ss=e("div",{class:"text-end"},[e("button",{type:"submit",class:"btn btn-primary text-white"},"確認付款")],-1);function Fs(l,o,h,Ts,t,_){const g=m("OrderHeader"),p=m("ErrorMessage"),a=m("VField"),y=m("VForm");return c(),n(u,null,[d(g,{currentFundraisingSteps:t.currentFundraisingSteps},null,8,["currentFundraisingSteps"]),N,e("div",P,[e("div",E,[e("div",j,[e("div",A,[e("div",B,[e("div",H,[e("div",I,[e("div",Y,[e("div",q,[e("div",L,[z,l.tempOrder.create_at?(c(),n("span",G,r(_.formatDate(l.tempOrder.create_at).formattedDate)+" "+r(_.formatDate(l.tempOrder.create_at).formattedTime),1)):b("",!0)]),e("div",J,[K,e("span",null,r(l.tempOrder.id),1)])]),Q])]),e("div",R,[e("div",W,[e("div",X,[(c(!0),n(u,null,f(l.tempOrder.products,s=>(c(),n("table",{key:s.id,class:"table table-border mb-0"},[Z,e("tbody",$,[e("tr",null,[ee,e("td",null,[e("span",se,"NT$ "+r(s.total)+"元",1),s.coupon?(c(),n("div",oe,[te,e("span",le,"已使用優惠卷："+r(s.coupon.code),1),e("span",re,r(s.coupon.title),1)])):b("",!0)])]),e("tr",null,[de,e("td",null,[e("span",ae,r(s.product.short_title)+r(s.qty)+"套",1),e("div",ie,[i(" 完整 1 套內含： "),(c(!0),n(u,null,f(s.product.contents,(x,k)=>(c(),n("ul",{key:k,class:"list-unstyled mb-0"},[e("li",null,r(x),1)]))),128))])])]),e("tr",null,[ce,e("td",ne,[e("ul",me,[e("li",null,"姓名："+r(l.tempOrder.user.name),1),e("li",null,"手機："+r(l.tempOrder.user.tel),1),e("li",null,"Email："+r(l.tempOrder.user.email),1),e("li",null,"運送："+r(l.tempOrder.user.shipment),1),e("li",null,"地址："+r(l.tempOrder.user.postcode)+r(l.tempOrder.user.country)+r(l.tempOrder.user.city)+r(l.tempOrder.user.region)+r(l.tempOrder.user.address),1),e("li",null,"備註："+r(l.tempOrder.user.message),1)])])]),_e])]))),128))])])])])])]),e("div",pe,[d(y,{ref:"formPayment",onSubmit:_.onSubmit},{default:C(()=>[e("div",ue,[he,e("form",be,[e("div",fe,[ve,ge,d(p,{name:"email",class:"invalid-feedback"})]),e("div",ye,[e("div",xe,[e("div",ke,[Ve,we,d(p,{name:"姓名",class:"invalid-feedback"})])]),e("div",Oe,[e("div",Ce,[De,Me,d(p,{name:"手機",class:"invalid-feedback"})])])])],512)]),e("div",Ue,[Se,e("div",Fe,[e("div",Te,[e("div",Ne,[e("div",Pe,[e("div",Ee,[e("div",je,[d(a,{modelValue:t.invoice_individual,"onUpdate:modelValue":o[0]||(o[0]=s=>t.invoice_individual=s),class:"form-check-input",style:{"margin-left":"-2rem"},type:"checkbox",name:"invoice_individual",id:"invoice_individual",value:"true"},null,8,["modelValue"]),Ae])]),e("div",Be,[He,e("div",Ie,[d(a,{modelValue:t.mobile_carrier,"onUpdate:modelValue":o[1]||(o[1]=s=>t.mobile_carrier=s),modelModifiers:{trim:!0},type:"text",class:"form-control placeholder-light",name:"手機載具",placeholder:"請填入手機載具",disabled:""},null,8,["modelValue"])])])])])]),e("div",Ye,[e("div",qe,[e("div",Le,[e("div",ze,[e("div",Ge,[d(a,{modelValue:t.invoice_company,"onUpdate:modelValue":o[2]||(o[2]=s=>t.invoice_company=s),class:"form-check-input",style:{"margin-left":"-2rem"},type:"checkbox",name:"invoice_company",id:"invoice_company",value:"true"},null,8,["modelValue"]),Je])]),e("div",Ke,[Qe,e("div",Re,[d(a,{modelValue:t.company_ubn,"onUpdate:modelValue":o[3]||(o[3]=s=>t.company_ubn=s),modelModifiers:{trim:!0},type:"text",class:"form-control placeholder-light",name:"統一編號",placeholder:"請填入統一編號"},null,8,["modelValue"])]),We,e("div",Xe,[M(e("input",{"onUpdate:modelValue":o[4]||(o[4]=s=>t.company_name=s),type:"text",class:"form-control placeholder-light",name:"公司抬頭",placeholder:"請填入公司抬頭"},null,512),[[U,t.company_name,void 0,{trim:!0}]])])])])])])])]),e("div",Ze,[$e,e("div",es,[e("div",ss,[e("div",os,[e("div",ts,[e("div",ls,[e("div",rs,[d(a,{modelValue:t.creditCard,"onUpdate:modelValue":o[5]||(o[5]=s=>t.creditCard=s),class:"form-check-input",style:{"margin-left":"-2rem"},type:"checkbox",name:"creditCard",id:"creditCard",value:"true"},null,8,["modelValue"]),ds])])]),e("div",as,[e("div",is,[cs,e("div",ns,[d(a,{modelValue:t.cardholder,"onUpdate:modelValue":o[6]||(o[6]=s=>t.cardholder=s),modelModifiers:{trim:!0},type:"text",class:"form-control placeholder-light",name:"持卡人",placeholder:"請填入姓名"},null,8,["modelValue"])])]),e("div",ms,[_s,e("div",ps,[d(a,{modelValue:t.creditCard_number,"onUpdate:modelValue":o[7]||(o[7]=s=>t.creditCard_number=s),modelModifiers:{trim:!0},type:"text",class:"form-control placeholder-light",name:"信用卡號碼",placeholder:"請填入卡號"},null,8,["modelValue"])])])]),e("div",us,[e("div",hs,[bs,e("div",fs,[d(a,{modelValue:t.expiryDate_month,"onUpdate:modelValue":o[8]||(o[8]=s=>t.expiryDate_month=s),modelModifiers:{trim:!0},type:"text",class:"form-control placeholder-light",name:"有效月份",placeholder:"MM"},null,8,["modelValue"])])]),e("div",vs,[e("div",gs,[d(a,{modelValue:t.expiryDate_year,"onUpdate:modelValue":o[9]||(o[9]=s=>t.expiryDate_year=s),modelModifiers:{trim:!0},type:"text",class:"form-control placeholder-light align-self-end",name:"有效年份",placeholder:"YY",style:{"margin-top":"32px"}},null,8,["modelValue"])])]),e("div",ys,[xs,e("div",ks,[d(a,{modelValue:t.creditCard_cvv,"onUpdate:modelValue":o[10]||(o[10]=s=>t.creditCard_cvv=s),modelModifiers:{trim:!0},type:"text",class:"form-control placeholder-light",name:"安全碼",placeholder:"CVV"},null,8,["modelValue"])])])])])]),e("div",Vs,[e("div",ws,[e("div",Os,[e("div",Cs,[e("div",Ds,[d(a,{modelValue:t.bank_transfer,"onUpdate:modelValue":o[11]||(o[11]=s=>t.bank_transfer=s),class:"form-check-input",style:{"margin-left":"-2rem"},type:"checkbox",name:"虛擬轉帳",id:"bank_transfer",value:"true"},null,8,["modelValue"]),Ms])])]),Us])])]),Ss])]),_:1},8,["onSubmit"])])])])])],64)}const qs=V(T,[["render",Fs]]);export{qs as default};
