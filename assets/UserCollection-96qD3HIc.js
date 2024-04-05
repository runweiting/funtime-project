import{_ as g,m as a,a as x,r,o as e,c as o,b as s,F as l,x as h,f as d,d as m,t as p}from"./index-TFW6QGXf.js";import{C as k}from"./vue3-count-to.esm-Us2zUdii.js";import{u as w}from"./userProductsStore-5on-Fguo.js";import{u as _}from"./userLikesStore-scqvuXcd.js";import"./showErrorToast-H8uiVGa1.js";import"./showSuccessToast-TNVcc7d0.js";const L={components:{CountTo:k},data(){return{countStart:0,countEnd:50,product:{},tempIsLikedList:{}}},created(){this.tempIsLikedList={...this.isLikedList}},watch:{isLikedList:{deep:!0,handler(t){this.tempIsLikedList=t}}},computed:{...a(w,["isLikedList"]),...a(_,["tempCollection"])},methods:{...x(_,["addToCollection","removeCollection"]),handleAddToCollection(t){this.isLikedList[t.id].isLiked=!this.isLikedList[t.id].isLiked,this.isLikedList[t.id].isLiked===!0?this.addToCollection(t):this.isLikedList[t.id].isLiked===!1&&this.removeCollection(t.id)}}},y={key:0,class:"m-3 m-lg-6"},C=d('<div class="container bg-primary rounded-5 p-5 p-md-10" data-aos="fade-up"><div class="row"><div class="col"><div class="d-flex flex-column justify-content-center align-items-center gap-5"><h2 class="fs-1 text-white fw-bold mb-0">收藏清單</h2><h5 class="text-white responsive-lh-ls text-normal mb-0"> 目前沒有收藏的企劃喔，快去按愛心吧！ </h5></div></div></div></div>',1),S=[C],V={key:1,class:"m-3 m-lg-6"},j=d('<div class="container bg-primary rounded-5 p-5 p-md-10" data-aos="fade-up"><div class="row"><div class="col"><div class="d-flex flex-column justify-content-center align-items-center gap-5"><h2 class="fs-1 text-white fw-bold mb-0">收藏清單</h2><h5 class="text-white responsive-lh-ls text-normal mb-0"> 你收藏的企劃在這裡！ </h5></div></div></div></div>',1),T=[j],$={class:"m-3 m-lg-6"},A={class:"container p-5 p-md-10"},B={class:"row row-cols-1 row-cols-xl-2"},E={class:"col-xl-9"},I=d('<div class="row row-cols-1"><div class="col px-0 px-md-3 mb-3 mb-lg-6"><div class="d-flex align-items-baseline gap-2"><h2 class="d-none d-sm-block fw-bold mb-0">Collection</h2><h4 class="fw-bold mb-0">收藏清單</h4></div></div></div>',1),N={class:"row row-cols-1 row-cols-md-2 row-cols-xl-3 gy-5 mb-5 mb-md-10 position-relative"},F={class:"card h-100 shadow position-relative hvr-grow",style:{cursor:"pointer"}},R=["onClick"],U=s("i",{class:"bi fs-5 bi-heart-fill text-danger"},null,-1),z=[U],D=["src"],P={class:"card-body d-flex flex-column justify-content-between"},q={class:"card-title fw-bold"},G={class:"row gx-0 mb-2"},H=s("div",{class:"col-4"},[s("div",{class:"h-100 pt-4"},[s("small",{class:"fst-italic text-gray-dark"},"累計")])],-1),J={class:"col-8"},K={class:"d-flex justify-content-end align-items-baseline gap-2"},M=s("div",{class:"d-flex align-items-center gap-2"},[s("small",{class:"fst-italic fw-bold"},"個"),s("i",{class:"bi bi-heart-fill text-danger"})],-1),O={class:"d-flex justify-content-end gap-2"},Q={class:"badge rounded-pill bg-primary text-white",style:{right:"16px",bottom:"16px"}},W=s("div",{class:"col bg-secondary rounded-5 position-absolute z-index-n1 d-none d-md-block",style:{bottom:"-20px",width:"100%",height:"40px"}},null,-1);function X(t,Y,Z,ss,c,u){const v=r("RouterLink"),f=r("count-to");return e(),o(l,null,[t.tempCollection.length===0?(e(),o("div",y,S)):(e(),o("div",V,T)),s("div",$,[s("div",A,[s("div",B,[s("div",E,[I,s("div",N,[(e(!0),o(l,null,h(t.tempCollection,i=>(e(),o("div",{key:i.product.id,class:"col mb-md-0 px-0 px-md-3"},[s("div",F,[m(v,{to:`/product/${i.product.id}/content`,class:"stretched-link"},null,8,["to"]),s("button",{onClick:n=>u.handleAddToCollection(i.product),type:"button",class:"btn btn-white position-absolute p-0 btn-likes"},z,8,R),s("img",{src:i.product.imageUrl,alt:"product-image",class:"card-img-top object-fit-cover img-fluid",style:{"min-height":"200px"}},null,8,D),s("div",P,[s("h5",q,p(i.product.title),1),s("div",G,[H,s("div",J,[s("div",K,[m(f,{startVal:c.countStart,endVal:c.countEnd,duration:5e3,class:"display-1 fst-italic fw-bold"},null,8,["startVal","endVal"]),M])])]),s("div",O,[(e(!0),o(l,null,h(i.product.tags,(n,b)=>(e(),o("div",{key:b},[s("span",Q,p(`# ${n}`),1)]))),128))])])])]))),128)),W])])])])])],64)}const cs=g(L,[["render",X]]);export{cs as default};
