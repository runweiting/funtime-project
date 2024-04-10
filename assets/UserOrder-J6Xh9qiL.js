import{E as O,m as b,a as m,_ as V,r as u,o as f,c as h,d as l,w as _,b as e,y as n,e as C,v as $,t as c,g as x,A as E,F as M}from"./index-DW-YAaVl.js";import{u as v}from"./userProductsStore-ag1QJfWQ.js";import{u as U}from"./userCartStore-hjhkMM_y.js";import{u as y}from"./userOrderStore-dN18pYGR.js";import{c as k}from"./adminCouponsStore-jPObQNYd.js";import{O as F}from"./OrderSteps-r7ZB07e_.js";import{O as N}from"./OrderHeader-26bXFMTz.js";import"./showErrorToast-3Rr6__rM.js";import"./showSuccessToast-4Q0mJWPL.js";import"./FundraisingSteps-Ho4ZIUfU.js";const Q={components:{ErrorMessage:O},data(){return{data:{user:{name:"",tel:"",email:"",shipment:"宅配到府",country:"",city:"",region:"",postcode:"",address:""},message:"",agreement:!1}}},watch:{"data.agreement":{deep:!0,handler(o){o==="true"&&(this.data.agreement=!0)}}},computed:{...b(v,["product"])},methods:{...m(k,["clearCoupon"]),...m(y,["createOrder"]),onSubmit(){this.createOrder(this.data),this.$refs.formOrder.resetForm(),this.data.message="",this.clearCoupon(),this.$router.push({name:"order-result",params:{id:this.product.id}})}}},T={class:"rounded-5 border border-5 border-light p-5 h-100"},q=e("h3",{class:"fs-5"},"收件人",-1),j={class:"row"},D={class:"col"},P={class:"form-floating mb-3"},B=e("label",{for:"姓名",class:"form-label"},"真實姓名",-1),H={class:"col"},I={class:"form-floating mb-3"},A=e("label",{for:"手機",class:"form-label"},"手機",-1),W={class:"form-floating"},z=e("label",{for:"email",class:"form-label"},"Email",-1),G=e("h4",{class:"fs-6"},"請選擇運送方式",-1),J=e("option",{value:"宅配到府",selected:""},"宅配到府",-1),K={class:"row mb-3"},L={class:"col"},R=e("label",{for:"country",class:"form-label text-dark-gray"},"收件地點",-1),X=e("option",{value:"",selected:""},"請選擇",-1),Y=e("option",{value:"台灣"},"台灣",-1),Z=e("option",{value:"國際"},"國際",-1),ee={class:"col"},se=e("label",{for:"city",class:"form-label text-dark-gray"},"縣市",-1),te=e("option",{value:"",selected:""},"請選擇",-1),oe=e("option",{value:"台北"},"台北",-1),le=e("option",{value:"台中"},"台中",-1),ae=e("option",{value:"高雄"},"高雄",-1),de={class:"col"},re=e("label",{for:"region",class:"form-label text-dark-gray"},"鄉鎮市區",-1),ie=e("option",{value:"",selected:""},"請選擇",-1),ne=e("option",{value:"北區"},"北區",-1),ce=e("option",{value:"中區"},"中區",-1),ue=e("option",{value:"南區"},"南區",-1),me={class:"row mb-3"},pe={class:"col"},_e={class:"form-floating"},fe=e("label",{for:"postcode",class:"form-label"},"郵遞區號",-1),he={class:"col"},be={class:"form-floating"},ge=e("label",{for:"address",class:"form-label"},"地址",-1),ve=e("label",{for:"message",class:"form-label text-dark-gray"},"備註(選填)",-1),ye={class:"form-check"},ke=e("label",{class:"form-check-label text-dark-gray",for:"agreement"}," 我已閱讀並同意 funtime 服務條款與隱私權政策。 ",-1),xe=e("div",{class:"text-end mt-auto"},[e("button",{type:"submit",class:"btn btn-primary text-white"},"送出訂單")],-1);function Ve(o,t,w,S,s,g){const d=u("VField"),r=u("ErrorMessage"),p=u("VForm");return f(),h("div",T,[l(p,{ref:"formOrder",class:"d-flex flex-column gap-3 h-100",onSubmit:g.onSubmit},{default:_(({errors:i})=>[e("div",null,[q,e("div",j,[e("div",D,[e("div",P,[l(d,{modelValue:s.data.user.name,"onUpdate:modelValue":t[0]||(t[0]=a=>s.data.user.name=a),modelModifiers:{trim:!0},rules:"required",class:n([{"is-invalid":i.姓名},"form-control"]),type:"text",name:"姓名"},null,8,["modelValue","class"]),B,l(r,{name:"姓名",class:"invalid-feedback"})])]),e("div",H,[e("div",I,[l(d,{modelValue:s.data.user.tel,"onUpdate:modelValue":t[1]||(t[1]=a=>s.data.user.tel=a),modelModifiers:{trim:!0},rules:"required|min:8|max:10",class:n([{"is-invalid":i.手機},"form-control"]),type:"tel",name:"手機"},null,8,["modelValue","class"]),A,l(r,{name:"手機",class:"invalid-feedback"})])])]),e("div",W,[l(d,{modelValue:s.data.user.email,"onUpdate:modelValue":t[2]||(t[2]=a=>s.data.user.email=a),modelModifiers:{trim:!0},rules:"required|email",class:n([{"is-invalid":i.email},"form-control"]),type:"email",name:"email"},null,8,["modelValue","class"]),z,l(r,{name:"email",class:"invalid-feedback"})])]),e("div",null,[G,l(d,{modelValue:s.data.user.shipment,"onUpdate:modelValue":t[3]||(t[3]=a=>s.data.user.shipment=a),rules:"required",class:n([{"is-invalid":i.運送方式},"form-select bg-light text-center text-dark-gray"]),as:"select",name:"運送方式","aria-label":"shipment",disabled:""},{default:_(()=>[J]),_:2},1032,["modelValue","class"]),l(r,{name:"運送方式",class:"invalid-feedback"})]),e("div",null,[e("div",K,[e("div",L,[R,l(d,{modelValue:s.data.user.country,"onUpdate:modelValue":t[4]||(t[4]=a=>s.data.user.country=a),rules:"required",class:n([{"is-invalid":i.地點},"form-select text-dark-gray"]),as:"select",name:"地點","aria-label":"country"},{default:_(()=>[X,Y,Z]),_:2},1032,["modelValue","class"]),l(r,{name:"地點",class:"invalid-feedback"})]),e("div",ee,[se,l(d,{modelValue:s.data.user.city,"onUpdate:modelValue":t[5]||(t[5]=a=>s.data.user.city=a),rules:"required",class:n([{"is-invalid":i.縣市},"form-select text-dark-gray"]),as:"select",name:"縣市","aria-label":"city"},{default:_(()=>[te,oe,le,ae]),_:2},1032,["modelValue","class"]),l(r,{name:"縣市",class:"invalid-feedback"})]),e("div",de,[re,l(d,{modelValue:s.data.user.region,"onUpdate:modelValue":t[6]||(t[6]=a=>s.data.user.region=a),rules:"required",class:n([{"is-invalid":i.鄉鎮市區},"form-select text-dark-gray"]),as:"select",name:"鄉鎮市區","aria-label":"region"},{default:_(()=>[ie,ne,ce,ue]),_:2},1032,["modelValue","class"]),l(r,{name:"鄉鎮市區",class:"invalid-feedback"})])]),e("div",me,[e("div",pe,[e("div",_e,[l(d,{modelValue:s.data.user.postcode,"onUpdate:modelValue":t[7]||(t[7]=a=>s.data.user.postcode=a),modelModifiers:{trim:!0},rules:"required",class:n([{"is-invalid":i.郵遞區號},"form-control"]),type:"text",name:"郵遞區號"},null,8,["modelValue","class"]),fe,l(r,{name:"郵遞區號",class:"invalid-feedback"})])]),e("div",he,[e("div",be,[l(d,{modelValue:s.data.user.address,"onUpdate:modelValue":t[8]||(t[8]=a=>s.data.user.address=a),modelModifiers:{trim:!0},rules:"required",class:n([{"is-invalid":i.地址},"form-control"]),type:"text",name:"地址"},null,8,["modelValue","class"]),ge,l(r,{name:"地址",class:"invalid-feedback"})])])]),e("div",null,[ve,C(e("textarea",{"onUpdate:modelValue":t[9]||(t[9]=a=>s.data.message=a),id:"message",class:"form-control",rows:"3"},null,512),[[$,s.data.message,void 0,{trim:!0}]])])]),e("div",ye,[l(d,{modelValue:s.data.agreement,"onUpdate:modelValue":t[10]||(t[10]=a=>s.data.agreement=a),rules:"required",class:n([{"is-invalid":i["funtime 服務條款"]},"form-check-input"]),type:"checkbox",name:"funtime 服務條款",id:"agreement",value:"true"},null,8,["modelValue","class"]),ke,l(r,{name:"funtime 服務條款",class:"invalid-feedback"})]),xe]),_:1},8,["onSubmit"])])}const Ce=V(Q,[["render",Ve]]),$e={components:{OrderSteps:F,OrderDetail:Ce,OrderHeader:N},data(){return{currentFundraisingSteps:1,currentOrderSteps:2,couponCode:null,tempProductId:"",tempCartQty:0}},mounted(){const{id:o,units:t}=this.$route.params;this.tempProductId=o,this.tempCartQty=t,this.getCart(this.tempProductId),this.calculateQty()},computed:{...b(v,["product"]),...b(y,["productQtyMap"]),...b(k,["couponState"])},methods:{...m(v,["getProduct"]),...m(U,["getCart","deleteCarts"]),...m(y,["calculateQty"]),...m(k,["postCoupon"]),async applyCoupon(){await this.postCoupon(this.couponCode).then(()=>{this.couponCode=""})}},unmounted(){!this.$route.path.startsWith("/cart")&&!this.$route.path.startsWith("/order-result")&&this.deleteCarts()}},we={class:"mx-3 mx-lg-10"},Se={class:"mx-3 mx-lg-10"},Oe={class:"container px-lg-12 py-3 py-lg-6"},Ee={class:"row row-cols-1"},Me={class:"col-md-6 col-lg-5 px-xl-4"},Ue={class:"position-sticky top-0"},Fe={class:"d-flex flex-column justify-content-between rounded-5 border border-5 border-light p-5 gap-3 position-relative mb-3"},Ne=["src","alt"],Qe={class:"text-dark-gray fw-normal mb-0"},Te={class:"d-flex justify-content-between"},qe={class:"mb-0"},je={class:"d-flex gap-2"},De={class:"fs-5 fw-bold mb-0"},Pe={class:"badge bg-info-light text-black"},Be={class:"text-dark-gray d-block mb-1"},He={class:"d-flex"},Ie={key:0,class:"badge text-dark-gray fw-normal me-2",style:{"background-color":"#E9ECEF"}},Ae=e("span",{class:"badge text-dark-gray fw-normal",style:{"background-color":"#E9ECEF"}},"目標達成 3 個月內出貨",-1),We=e("hr",{class:"w-100 border-top my-1",style:{border:"3px dotted #8C8C8E"}},null,-1),ze=e("div",{class:"d-flex align-items-center gap-2"},[e("i",{class:"bi bi-check-circle-fill text-dark-secondary"}),e("small",null,"臺灣本島免運、可寄離島")],-1),Ge={class:"rounded-5 border border-5 border-light-gray p-5 gap-3"},Je=e("label",{for:"coupon-code",class:"form-label text-danger fw-medium"},"優惠卷",-1),Ke={class:"input-group mb-4"},Le=["disabled","placeholder"],Re=e("h6",{class:"text-dark-gray mb-2"},"付款明細",-1),Xe={class:"d-flex flex-column gap-1 px-2"},Ye={class:"d-flex justify-content-between text-dark-gray"},Ze=e("span",null,"項目",-1),es=e("div",{class:"d-flex justify-content-between text-dark-gray"},[e("span",null,"運費"),e("span",null,"NT$ 0")],-1),ss=e("hr",{class:"bg-light-gray my-2"},null,-1),ts={key:0,class:"d-flex justify-content-between text-dark-gray fw-bold"},os=e("span",null,"總計",-1),ls={class:"fw-bold mb-0"},as={key:1,class:"d-flex justify-content-between text-dark-gray fw-bold"},ds=e("span",null,"折扣總計",-1),rs={class:"fw-bold text-black mb-0"},is={class:"col-md-6 col-lg-7 px-xl-4 gy-3 gy-md-0"},ns={class:"d-none p-5"},cs=e("h3",{class:"fs-5"},"會員資料",-1),us={ref:"form-member"},ms={class:"form-floating mb-3"},ps=e("input",{type:"email",class:"form-control",id:"floatingEmail",name:"email",placeholder:"請輸入email",disabled:""},null,-1),_s=e("label",{for:"floatingEmail",class:"form-label"},"Email",-1),fs={class:"row"},hs={class:"col"},bs={class:"form-floating mb-3"},gs=e("input",{type:"text",class:"form-control",id:"floatingName",name:"姓名",placeholder:"請輸入姓名",disabled:""},null,-1),vs=e("label",{for:"floatingName",class:"form-label"},"收件人姓名",-1),ys={class:"col"},ks={class:"form-floating mb-3"},xs=e("input",{type:"tel",class:"form-control",id:"floatingTel",name:"手機",disabled:""},null,-1),Vs=e("label",{for:"floatingTel",class:"form-label"},"手機",-1);function Cs(o,t,w,S,s,g){const d=u("OrderHeader"),r=u("OrderSteps"),p=u("ErrorMessage"),i=u("OrderDetail");return f(),h(M,null,[l(d,{currentFundraisingSteps:s.currentFundraisingSteps},null,8,["currentFundraisingSteps"]),e("div",we,[l(r,{currentOrderSteps:s.currentOrderSteps},null,8,["currentOrderSteps"])]),e("div",Se,[e("div",Oe,[e("div",Ee,[e("div",Me,[e("div",Ue,[e("div",Fe,[e("img",{src:o.product.imageUrl,alt:o.product.short_title+"商品主圖",class:"card-img-top object-fit-cover img-fluid rounded",style:{"max-height":"200px"}},null,8,Ne),e("h6",Qe,c(o.product.short_title),1),e("div",Te,[e("h5",qe,c(s.tempCartQty)+" 入組",1),e("div",je,[e("h6",De,"NT$ "+c(o.product.origin_price*o.product.discount*s.tempCartQty),1),e("span",Pe,c(o.product.discount*100)+"折",1)])]),e("div",null,[e("small",Be,[x("預定售價 "),e("del",null,"NT$ "+c(o.product.origin_price),1),x("，折扣後 NT$ "+c(o.product.origin_price*o.product.discount),1)]),e("div",He,[o.productQtyMap[o.product.id]?(f(),h("span",Ie,"預購人數 "+c(o.productQtyMap[o.product.id].orderQty)+" 次",1)):E("",!0),Ae])]),We,ze]),e("div",Ge,[Je,e("div",Ke,[C(e("input",{disabled:o.couponState.success,"onUpdate:modelValue":t[0]||(t[0]=a=>s.couponCode=a),type:"text",class:"form-control",placeholder:o.couponState.success?o.couponState.message:"請輸入優惠碼","aria-label":"coupon-code","aria-describedby":"coupon-code",id:"coupon-code"},null,8,Le),[[$,s.couponCode]]),e("button",{onClick:t[1]||(t[1]=a=>g.applyCoupon(s.couponCode)),class:"btn btn-danger text-white",type:"button",id:"coupon-code"},"確認")]),Re,e("div",Xe,[e("div",Ye,[Ze,e("span",null,"NT$ "+c(o.product.origin_price*o.product.discount*s.tempCartQty),1)]),es,ss,o.couponState.success?(f(),h("div",as,[ds,e("h5",rs,"NT$ "+c(Math.round(o.couponState.data.final_total)),1)])):(f(),h("div",ts,[os,e("h5",ls,"NT$ "+c(o.product.origin_price*o.product.discount*s.tempCartQty),1)]))])])])]),e("div",is,[e("div",ns,[cs,e("form",us,[e("div",ms,[ps,_s,l(p,{name:"email",class:"invalid-feedback"})]),e("div",fs,[e("div",hs,[e("div",bs,[gs,vs,l(p,{name:"姓名",class:"invalid-feedback"})])]),e("div",ys,[e("div",ks,[xs,Vs,l(p,{name:"手機",class:"invalid-feedback"})])])])],512)]),l(i)])])])])],64)}const Ts=V($e,[["render",Cs]]);export{Ts as default};
