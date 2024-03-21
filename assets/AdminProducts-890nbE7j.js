import{K as F,H as S,I as w,m as y,_ as k,o as d,c as i,a as e,C,M as U,F as h,u as g,t as r,s as V,x as a,D as p,z as T,N,y as O,O as A,d as R,e as j,r as x,b as E}from"./index-UvZFmlvX.js";import{s as L}from"./showSuccessToast-bQTajdBV.js";import{s as I}from"./showErrorToast-1wWGzD5-.js";import{m as M}from"./modalMixin-kV2aY6mL.js";import{u as B}from"./userProductsStore-fka_KMza.js";var q={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"runweiting",VITE_TEXT:"這是部屬完成的環境",BASE_URL:"/funtime-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const G=F.useLoading({}),{VITE_APP_URL:P,VITE_APP_PATH:v}=q,f=S("adminProductsStore",{mixins:[M],state:()=>({productList:[],pagination:{},isEditModalOpen:!0,isDelModalOpen:!0}),actions:{async getProducts(l,o=1){const u=G.show(),_=`${P}/api/${v}/admin/products?page=${o}`;try{const t=await w.get(_),{products:n,pagination:s}=t.data;this.productList=n,this.pagination=s}catch(t){I(t.response.data.message)}finally{u.hide()}},updateProduct(l,o){let u=`${P}/api/${v}/admin/product`,_="post";l||(u=`${P}/api/${v}/admin/product/${o.id}`,_="put"),w[_](u,{data:o}).then(t=>{L(t.data.message),this.isEditModalOpen=!1,this.getProducts()}).catch(t=>{I(t.response.data.message)})},upload(){const o=document.querySelector("#formFile").files[0],u=new FormData;u.append("file-to-upload",o);const _=`${P}/api/${v}/admin/upload`;w.post(_,u)},deleteProduct(l){const o=`${P}/api/${v}/admin/product/${l}`;w.delete(o).then(u=>{L(u.data.message),this.isDelModalOpen=!1,this.getProducts()}).catch(u=>{I(u.response.data.message)})}}}),K={emits:["page-selected"],data(){return{currentCategory:null}},computed:{...y(B,["pagination"]),...y(f,["pagination"])},methods:{selectedPage(l){this.$emit("page-selected",this.currentCategory,l)}}},H={class:"px-2"},z={"aria-label":"page-navigation"},X={class:"pagination"},J=e("span",{"aria-hidden":"true"},"«",-1),Q=[J],W={key:0,class:"page-link"},Y=["onClick"],Z=e("span",{"aria-hidden":"true"},"»",-1),$=[Z];function ee(l,o,u,_,t,n){return d(),i("div",H,[e("nav",z,[e("ul",X,[e("li",{class:C([{disabled:l.pagination.current_page===1},"page-item"])},[e("a",{onClick:o[0]||(o[0]=U(s=>n.selectedPage(l.pagination.current_page-1),["prevent"])),class:"page-link",href:"#","aria-label":"Previous"},Q)],2),(d(!0),i(h,null,g(l.pagination.total_pages,(s,c)=>(d(),i("li",{key:c,class:C([{active:s===l.pagination.current_page},"page-item"])},[s===l.pagination.current_page?(d(),i("span",W,r(s),1)):(d(),i("a",{key:1,onClick:U(b=>n.selectedPage(s),["prevent"]),class:"page-link",href:"#"},r(s),9,Y))],2))),128)),e("li",{class:C([{disabled:l.pagination.current_page===l.pagination.total_pages},"page-item"])},[e("a",{onClick:o[1]||(o[1]=U(s=>n.selectedPage(l.pagination.current_page+1),["prevent"])),class:"page-link",href:"#","aria-label":"Next"},$)],2)])])])}const te=k(K,[["render",ee]]),se={props:{tempProduct:Object,isNew:Boolean},mixins:[M],data(){return{selectedProduct:{productRatings:0,points:[],imagesUrl:[],tags:[],features:[],packages:[],contents:[],notes:[]},newPrice:0,newTag:"",newFeature:"",newPoint:{title:"",content:"",imageUrl:""},newPackage:{name:"",units:0},newContent:"",newNote:"",isInputEnabled:!0}},created(){this.selectedProduct={...this.tempProduct},this.selectedProduct.category=""},computed:{...y(f,["isEditModalOpen"])},watch:{tempProduct:{deep:!0,handler(l){this.selectedProduct=l}},isEditModalOpen:{handler(l){l||this.hideModal()}}},methods:{...V(f,["updateProduct","upload"]),calculatePrice(){this.newPrice=this.selectedProduct.origin_price*this.selectedProduct.discount,this.selectedProduct.price=this.newPrice},addTag(){this.newTag.trim()!==""&&(this.selectedProduct.tags.push(this.newTag.trim()),this.newTag="")},removeTag(l){this.selectedProduct.tags.splice(l,1)},addFeature(){this.newFeature.trim()!==""&&(this.selectedProduct.features.push(this.newFeature.trim()),this.newFeature="")},removeFeature(l){this.selectedProduct.features.splice(l,1)},addPoint(){this.newPoint.title.trim()!==""&&this.newPoint.content.trim()!==""&&this.newPoint.imageUrl.trim()!==""&&(this.selectedProduct.points.push(this.newPoint),this.newPoint={})},removePoint(l){this.selectedProduct.points.splice(l,1)},addPackage(){this.newPackage.name.trim()!==""&&this.newPackage.units!==0&&(this.selectedProduct.packages.push(this.newPackage),this.newPackage={})},removePackage(l){this.selectedProduct.packages.splice(l,1)},addContent(){this.newContent.trim()!==""&&(this.selectedProduct.contents.push(this.newContent.trim()),this.newContent="")},removeContent(l){this.selectedProduct.contents.splice(l,1)},addNote(){this.newNote.trim()!==""&&(this.selectedProduct.notes.push(this.newNote.trim()),this.newNote="")},removeNote(l){this.selectedProduct.notes.splice(l,1)},togglerEdit(){this.isInputEnabled=!this.isInputEnabled},cancelUpdate(){this.isInputEnabled=!0,this.selectedProduct={}}}},oe={class:"modal fade",tabindex:"-1","aria-labelledby":"editModalLabel","aria-hidden":"true",ref:"modal"},le={class:"modal-dialog modal-xl modal-dialog-centered"},ne={class:"modal-content"},de={class:"modal-header bg-dark opacity-75 text-white"},ie={class:"modal-title",id:"editModalLabel"},ce={key:0},ae={key:1},re=e("i",{class:"bi bi-x-lg"},null,-1),ue=[re],pe={class:"modal-body"},_e={class:"container-fluid"},be={class:"row mb-5"},me=e("div",{class:"col-md-3"},[e("h5",null,"專案內容")],-1),he={class:"col-md-9"},ge={class:"row"},fe={class:"col-md-3"},Pe={class:"mb-4"},ve=e("label",{for:"imgUrl",class:"form-label"},"主要圖片",-1),ye=["disabled"],we=["src"],ke=e("h4",{class:"fw-bold"},"多圖新增",-1),Ce={key:0,class:"mb-4"},Ue=["for"],xe=["id","onUpdate:modelValue","disabled"],Ee=["src"],Ie={class:"d-flex gap-2"},Ve=e("h4",{class:"fw-bold"},"上傳圖片",-1),Me={class:"mb-4"},Te=["disabled"],Ne={class:"col-md-9"},Le={class:"row"},De={class:"col-8"},Fe=e("label",{for:"title",class:"form-label"},"完整標題",-1),Se=["disabled"],Oe={class:"col-4"},Ae=e("label",{for:"short-title",class:"form-label"},"簡短標題",-1),Re=["disabled"],je={class:"row mb-4"},Be={class:"col"},qe=e("label",{for:"description",class:"form-label"},"專案描述",-1),Ge=["disabled"],Ke={class:"row mb-4"},He={class:"col"},ze=e("label",{for:"proposer",class:"form-label"},"提案人",-1),Xe=["disabled"],Je={class:"col"},Qe=e("label",{for:"tags",class:"form-label"},"標籤",-1),We={class:"input-group mb-2"},Ye=["disabled"],Ze={class:"d-flex flex-wrap gap-2"},$e=["onClick"],et={class:"col"},tt=e("label",{for:"features",class:"form-label"},"特色",-1),st={class:"input-group mb-2"},ot=["disabled"],lt={class:"d-flex flex-wrap gap-2"},nt=["onClick"],dt={class:"row"},it={class:"col"},ct=e("label",{for:"category",class:"form-label"},"分類",-1),at=["disabled"],rt=R('<option value="" disabled selected hidden>請輸入分類</option><option value="地圖">地圖</option><option value="卡牌">卡牌</option><option value="棋盤">棋盤</option><option value="擲骰">擲骰</option>',5),ut=[rt],pt={class:"col"},_t=e("label",{for:"target_units",class:"form-label"},"目標組數",-1),bt=["disabled"],mt={class:"col"},ht=e("label",{for:"unit",class:"form-label"},"單位",-1),gt=["disabled"],ft=e("hr",{class:"w-100 border-top my-8",style:{border:"3px dotted #8C8C8E"}},null,-1),Pt={class:"row mb-4"},vt={class:"col"},yt=e("label",{for:"content_question",class:"form-label"},"困擾標題",-1),wt=["disabled"],kt={class:"row mb-4"},Ct={class:"col-4"},Ut=e("label",{for:"point-title",class:"form-label"},"設計特點",-1),xt=["disabled"],Et={class:"col-8"},It=e("label",{for:"point-content",class:"form-label"},"設計內容",-1),Vt=["disabled"],Mt={class:"row align-items-center mb-4"},Tt={class:"col"},Nt=e("label",{for:"point-imgUrl",class:"form-label"},"情境圖片",-1),Lt=["disabled"],Dt={class:"col"},Ft=["src"],St={class:"col mt-auto"},Ot={class:"row"},At={class:"col"},Rt={class:"row"},jt={class:"col-md-10"},Bt={class:"text-wrap mb-2",style:{"overflow-wrap":"break-word"}},qt={class:"text-wrap",style:{"overflow-wrap":"break-word"}},Gt={class:"col-md-2 ms-auto"},Kt=["onClick"],Ht=e("hr",{class:"w-100 border-top my-8",style:{border:"3px dotted #8C8C8E"}},null,-1),zt={class:"row mb-4"},Xt={class:"col"},Jt=e("label",{for:"original-price",class:"form-label"},"售價",-1),Qt=["disabled"],Wt={class:"col"},Yt=e("label",{for:"discount",class:"form-label"},"折扣",-1),Zt=["disabled"],$t={class:"col"},es=e("label",{for:"original-price",class:"form-label"},"折扣價",-1),ts={class:"row mb-4"},ss={class:"col"},os=e("label",{for:"package-name",class:"form-label"},"套裝名稱",-1),ls=["disabled"],ns={class:"col"},ds=e("label",{for:"package-units",class:"form-label"},"內含組數",-1),is=["disabled"],cs={class:"col mt-auto"},as={class:"row mb-4"},rs={class:"col"},us={class:"border border-gray border-1 rounded-2 p-2"},ps={class:"mb-2"},_s={class:"ms-auto"},bs=["onClick"],ms=e("div",{class:"col"},null,-1),hs={class:"row mb-4"},gs={class:"col"},fs=e("label",{for:"contents",class:"form-label"},"內容物",-1),Ps={class:"input-group"},vs=["disabled"],ys={class:"col"},ws=e("label",{for:"notes",class:"form-label"},"備註",-1),ks={class:"input-group"},Cs=["disabled"],Us={class:"row"},xs={class:"col"},Es={class:"border border-gray border-1 rounded-2 p-2"},Is={class:"text-wrap",style:{"overflow-wrap":"break-word"}},Vs={class:"ms-auto"},Ms=["onClick"],Ts={class:"col"},Ns={class:"border border-gray border-1 rounded-2 p-2"},Ls={class:"text-wrap",style:{"overflow-wrap":"break-word"}},Ds={class:"ms-auto"},Fs=["onClick"],Ss=e("hr",{class:"w-100 border-top my-8",style:{border:"3px dotted #8C8C8E"}},null,-1),Os={class:"row"},As={class:"col"},Rs=e("label",{for:"range",class:"form-label"},"商品評價",-1),js={class:"ms-2 text-primary fw-bold fs-5"},Bs=["disabled"],qs={class:"col mt-auto"},Gs={class:"form-check pb-2"},Ks=e("label",{class:"form-label m-0",for:"product-active"},"啟用商品",-1),Hs={class:"switch ms-2"},zs=["disabled"],Xs=e("span",{class:"slider"},null,-1),Js={class:"modal-footer"};function Qs(l,o,u,_,t,n){return d(),i("div",oe,[e("div",le,[e("div",ne,[e("div",de,[e("h5",ie,[u.isNew?(d(),i("span",ce,"新增專案")):(d(),i("span",ae,"編輯專案 ID:"+r(t.selectedProduct.id),1))]),e("button",{onClick:o[0]||(o[0]=(...s)=>n.cancelUpdate&&n.cancelUpdate(...s)),type:"button",class:"btn btn-outline-light","data-bs-dismiss":"modal","aria-label":"Close"},ue)]),e("div",pe,[e("div",_e,[e("div",be,[me,e("div",he,[e("button",{onClick:o[1]||(o[1]=(...s)=>n.togglerEdit&&n.togglerEdit(...s)),type:"button",class:"btn btn-warning"},"編輯商品")])]),e("div",ge,[e("div",fe,[e("div",Pe,[ve,a(e("input",{"onUpdate:modelValue":o[2]||(o[2]=s=>t.selectedProduct.imageUrl=s),disabled:t.isInputEnabled,type:"url",class:"form-control mb-2",id:"imgUrl",placeholder:"請輸入網址"},null,8,ye),[[p,t.selectedProduct.imageUrl]]),e("img",{src:t.selectedProduct.imageUrl,class:"img-fluid"},null,8,we)]),ke,Array.isArray(t.selectedProduct.imagesUrl)?(d(),i("div",Ce,[(d(!0),i(h,null,g(t.selectedProduct.imagesUrl,(s,c)=>(d(),i("div",{key:`url${c}`},[e("label",{for:`url${c}`,class:"form-label"},"圖片網址",8,Ue),a(e("input",{id:`url${c}`,"onUpdate:modelValue":b=>t.selectedProduct.imagesUrl[c]=b,disabled:t.isInputEnabled,type:"url",class:"form-control mb-2",placeholder:"請輸入網址"},null,8,xe),[[p,t.selectedProduct.imagesUrl[c]]]),e("img",{src:t.selectedProduct.imagesUrl[c],class:"img-fluid mb-2"},null,8,Ee)]))),128)),e("div",Ie,[t.selectedProduct.imagesUrl.length===0||t.selectedProduct.imagesUrl[t.selectedProduct.imagesUrl.length-1]?(d(),i("button",{key:0,onClick:o[3]||(o[3]=s=>t.selectedProduct.imagesUrl.push("")),type:"button",class:"btn btn-primary w-100"}," 新增圖片 ")):T("",!0),e("button",{onClick:o[4]||(o[4]=s=>t.selectedProduct.imagesUrl.pop()),type:"button",class:"btn btn-danger text-white w-100"}," 刪除圖片 ")])])):T("",!0),Ve,e("div",Me,[e("input",{onChange:o[5]||(o[5]=(...s)=>l.upload&&l.upload(...s)),disabled:t.isInputEnabled,class:"form-control",type:"file",id:"formFile",placeholder:"請輸入圖片連結"},null,40,Te)])]),e("div",Ne,[e("div",Le,[e("div",De,[Fe,a(e("input",{"onUpdate:modelValue":o[6]||(o[6]=s=>t.selectedProduct.title=s),disabled:t.isInputEnabled,type:"text",class:"form-control mb-4",name:"full-title",placeholder:"請輸入完整標題"},null,8,Se),[[p,t.selectedProduct.title]])]),e("div",Oe,[Ae,a(e("input",{"onUpdate:modelValue":o[7]||(o[7]=s=>t.selectedProduct.short_title=s),disabled:t.isInputEnabled,type:"text",class:"form-control mb-4",name:"short-title",placeholder:"請輸入簡單標題"},null,8,Re),[[p,t.selectedProduct.short_title]])])]),e("div",je,[e("div",Be,[qe,a(e("textarea",{"onUpdate:modelValue":o[8]||(o[8]=s=>t.selectedProduct.description=s),disabled:t.isInputEnabled,class:"form-control",placeholder:"請輸入專案描述",id:"description",rows:"3"},null,8,Ge),[[p,t.selectedProduct.description]])])]),e("div",Ke,[e("div",He,[ze,a(e("input",{"onUpdate:modelValue":o[9]||(o[9]=s=>t.selectedProduct.proposer=s),disabled:t.isInputEnabled,type:"text",class:"form-control",id:"unit",placeholder:"請輸入名稱"},null,8,Xe),[[p,t.selectedProduct.proposer]])]),e("div",Je,[Qe,e("div",We,[a(e("input",{type:"text",class:"form-control",placeholder:"請輸入標籤","onUpdate:modelValue":o[10]||(o[10]=s=>t.newTag=s),onKeyup:o[11]||(o[11]=N((...s)=>n.addTag&&n.addTag(...s),["enter"])),disabled:t.isInputEnabled},null,40,Ye),[[p,t.newTag]]),e("button",{class:"btn btn-gray text-white",type:"button",onClick:o[12]||(o[12]=(...s)=>n.addTag&&n.addTag(...s))},"新增")]),e("div",Ze,[(d(!0),i(h,null,g(t.selectedProduct.tags,(s,c)=>(d(),i("span",{class:"badge bg-primary d-flex align-items-center",key:c},[e("span",null,"# "+r(s),1),e("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:b=>n.removeTag(c),style:{scale:"0.75"}},null,8,$e)]))),128))])]),e("div",et,[tt,e("div",st,[a(e("input",{type:"text",class:"form-control",placeholder:"請輸入特色","onUpdate:modelValue":o[13]||(o[13]=s=>t.newFeature=s),onKeyup:o[14]||(o[14]=N((...s)=>n.addFeature&&n.addFeature(...s),["enter"])),disabled:t.isInputEnabled},null,40,ot),[[p,t.newFeature]]),e("button",{class:"btn btn-gray text-white",type:"button",onClick:o[15]||(o[15]=(...s)=>n.addFeature&&n.addFeature(...s))},"新增")]),e("div",lt,[(d(!0),i(h,null,g(t.selectedProduct.features,(s,c)=>(d(),i("span",{class:"badge bg-info-light text-black d-flex align-items-center",key:c},[e("span",null,r(s),1),e("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:b=>n.removeFeature(c),style:{scale:"0.75"}},null,8,nt)]))),128))])])]),e("div",dt,[e("div",it,[ct,a(e("select",{"onUpdate:modelValue":o[16]||(o[16]=s=>t.selectedProduct.category=s),disabled:t.isInputEnabled,class:"form-select","aria-label":"category",id:"category",name:"category"},ut,8,at),[[O,t.selectedProduct.category]])]),e("div",pt,[_t,a(e("input",{"onUpdate:modelValue":o[17]||(o[17]=s=>t.selectedProduct.target_units=s),disabled:t.isInputEnabled,type:"number",min:"0",class:"form-control",id:"target_units",placeholder:"請輸入目標組數"},null,8,bt),[[p,t.selectedProduct.target_units,void 0,{number:!0}]])]),e("div",mt,[ht,a(e("input",{"onUpdate:modelValue":o[18]||(o[18]=s=>t.selectedProduct.unit=s),disabled:t.isInputEnabled,type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位"},null,8,gt),[[p,t.selectedProduct.unit]])])]),ft,e("div",Pt,[e("div",vt,[yt,a(e("input",{"onUpdate:modelValue":o[19]||(o[19]=s=>t.selectedProduct.question=s),disabled:t.isInputEnabled,type:"text",class:"form-control",id:"content_question",placeholder:"請輸入困擾標題"},null,8,wt),[[p,t.selectedProduct.question]])])]),e("div",kt,[e("div",Ct,[Ut,a(e("input",{type:"text",class:"form-control",placeholder:"請輸入特點","onUpdate:modelValue":o[20]||(o[20]=s=>t.newPoint.title=s),disabled:t.isInputEnabled},null,8,xt),[[p,t.newPoint.title]])]),e("div",Et,[It,a(e("textarea",{"onUpdate:modelValue":o[21]||(o[21]=s=>t.newPoint.content=s),disabled:t.isInputEnabled,class:"form-control",placeholder:"請輸入內容",id:"point-content",rows:"1"},null,8,Vt),[[p,t.newPoint.content]])])]),e("div",Mt,[e("div",Tt,[Nt,a(e("input",{"onUpdate:modelValue":o[22]||(o[22]=s=>t.newPoint.imageUrl=s),disabled:t.isInputEnabled,type:"url",class:"form-control",id:"point-imgUrl",placeholder:"請輸入網址"},null,8,Lt),[[p,t.newPoint.imageUrl]])]),e("div",Dt,[e("img",{src:t.newPoint.imageUrl,class:"img-fluid"},null,8,Ft)]),e("div",St,[e("button",{class:"btn btn-gray text-white",type:"button",onClick:o[23]||(o[23]=(...s)=>n.addPoint&&n.addPoint(...s))},"新增")])]),e("div",Ot,[e("div",At,[(d(!0),i(h,null,g(t.selectedProduct.points,(s,c)=>(d(),i("div",{key:c,class:"d-flex justify-content-between border border-gray border-1 rounded-2 p-2 mb-4"},[e("div",Rt,[e("div",jt,[e("div",Bt,r(s.title)+" : "+r(s.content),1),e("div",qt,r(s.imageUrl),1)]),e("div",Gt,[e("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:b=>n.removePoint(c),style:{scale:"0.75"}},null,8,Kt)])])]))),128))])]),Ht,e("div",zt,[e("div",Xt,[Jt,a(e("input",{"onUpdate:modelValue":o[24]||(o[24]=s=>t.selectedProduct.origin_price=s),disabled:t.isInputEnabled,type:"number",min:"0",class:"form-control",id:"original-price",placeholder:"請輸入售價"},null,8,Qt),[[p,t.selectedProduct.origin_price,void 0,{number:!0}]])]),e("div",Wt,[Yt,a(e("input",{onKeyup:o[25]||(o[25]=(...s)=>n.calculatePrice&&n.calculatePrice(...s)),"onUpdate:modelValue":o[26]||(o[26]=s=>t.selectedProduct.discount=s),disabled:t.isInputEnabled,type:"number",min:"0",class:"form-control",id:"discount",placeholder:"請輸入折扣"},null,40,Zt),[[p,t.selectedProduct.discount,void 0,{number:!0}]])]),e("div",$t,[es,a(e("input",{"onUpdate:modelValue":o[27]||(o[27]=s=>t.selectedProduct.price=s),disabled:"",type:"number",class:"form-control",id:"original-price"},null,512),[[p,t.selectedProduct.price,void 0,{number:!0}]])])]),e("div",ts,[e("div",ss,[os,a(e("input",{type:"text",class:"form-control",placeholder:"請輸入名稱","onUpdate:modelValue":o[28]||(o[28]=s=>t.newPackage.name=s),disabled:t.isInputEnabled},null,8,ls),[[p,t.newPackage.name]])]),e("div",ns,[ds,a(e("input",{type:"number",min:"0",class:"form-control",placeholder:"請輸入組數","onUpdate:modelValue":o[29]||(o[29]=s=>t.newPackage.units=s),disabled:t.isInputEnabled},null,8,is),[[p,t.newPackage.units,void 0,{number:!0}]])]),e("div",cs,[e("button",{class:"btn btn-gray text-white",type:"button",onClick:o[30]||(o[30]=(...s)=>n.addPackage&&n.addPackage(...s))},"新增")])]),e("div",as,[e("div",rs,[e("div",us,[(d(!0),i(h,null,g(t.selectedProduct.packages,(s,c)=>(d(),i("div",{key:s.name,class:"d-flex justify-content-between"},[e("div",ps,r(s.name)+"，內含 "+r(s.units)+" 個 ",1),e("div",_s,[e("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:b=>n.removePoint(c),style:{scale:"0.75"}},null,8,bs)])]))),128))])]),ms]),e("div",hs,[e("div",gs,[fs,e("div",Ps,[a(e("input",{type:"text",class:"form-control",placeholder:"請輸入內容物","onUpdate:modelValue":o[31]||(o[31]=s=>t.newContent=s),disabled:t.isInputEnabled},null,8,vs),[[p,t.newContent]]),e("button",{class:"btn btn-gray text-white",type:"button",onClick:o[32]||(o[32]=(...s)=>n.addContent&&n.addContent(...s))},"新增")])]),e("div",ys,[ws,e("div",ks,[a(e("input",{type:"text",class:"form-control",placeholder:"請輸入備註","onUpdate:modelValue":o[33]||(o[33]=s=>t.newNote=s),disabled:t.isInputEnabled},null,8,Cs),[[p,t.newNote]]),e("button",{class:"btn btn-gray text-white",type:"button",onClick:o[34]||(o[34]=(...s)=>n.addNote&&n.addNote(...s))},"新增")])])]),e("div",Us,[e("div",xs,[e("div",Es,[(d(!0),i(h,null,g(t.selectedProduct.contents,(s,c)=>(d(),i("div",{key:c,class:"d-flex justify-content-between"},[e("div",Is,r(s),1),e("div",Vs,[e("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:b=>n.removeContent(c),style:{scale:"0.75"}},null,8,Ms)])]))),128))])]),e("div",Ts,[e("div",Ns,[(d(!0),i(h,null,g(t.selectedProduct.notes,(s,c)=>(d(),i("div",{key:c,class:"d-flex justify-content-between"},[e("div",Ls,r(s),1),e("div",Ds,[e("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:b=>n.removeNote(c),style:{scale:"0.75"}},null,8,Fs)])]))),128))])])]),Ss,e("div",Os,[e("div",As,[Rs,e("span",js,r(t.selectedProduct.productRatings)+" 分 ",1),a(e("input",{"onUpdate:modelValue":o[35]||(o[35]=s=>t.selectedProduct.productRatings=s),disabled:t.isInputEnabled,type:"range",class:"form-range",min:"0",max:"5",step:"1"},null,8,Bs),[[p,t.selectedProduct.productRatings]])]),e("div",qs,[e("div",Gs,[Ks,e("label",Hs,[a(e("input",{"onUpdate:modelValue":o[36]||(o[36]=s=>t.selectedProduct.is_enabled=s),disabled:t.isInputEnabled,type:"checkbox"},null,8,zs),[[A,t.selectedProduct.is_enabled]]),Xs])])])])])])])]),e("div",Js,[e("button",{onClick:o[37]||(o[37]=(...s)=>n.cancelUpdate&&n.cancelUpdate(...s)),type:"button",class:"btn btn-danger text-white","data-bs-dismiss":"modal"}," 取消 "),e("button",{onClick:o[38]||(o[38]=s=>l.updateProduct(this.isNew,this.selectedProduct)),type:"button",class:"btn btn-primary"}," 確認 ")])])])],512)}const Ws=k(se,[["render",Qs]]),Ys={props:{tempProduct:Object},mixins:[M],data(){return{selectedProduct:{}}},created(){this.selectedProduct={...this.tempProduct}},computed:{...y(f,["isDelModalOpen"])},watch:{tempProduct:{deep:!0,handler(l){this.selectedProduct=l}},isDelModalOpen:{handler(l){l||this.hideModal()}}},methods:{...V(f,["deleteProduct"])}},Zs={class:"modal fade modal-lg",tabindex:"-1","aria-labelledby":"delModalLabel","aria-hidden":"true",ref:"modal"},$s={class:"modal-dialog modal-dialog-centered"},eo={class:"modal-content"},to=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"delModalLabel"},"刪除商品"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),so={class:"modal-body"},oo={class:"container-fluid"},lo={class:"row"},no={class:"col-sm-8"},io={class:"fw-bold text-danger"},co={class:"badge bg-dark ms-2"},ao={class:"text-muted"},ro={class:"col-sm-4"},uo=["src"],po={class:"modal-footer"},_o=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function bo(l,o,u,_,t,n){return d(),i("div",Zs,[e("div",$s,[e("div",eo,[to,e("div",so,[e("div",oo,[e("div",lo,[e("div",no,[e("h5",io,[j(r(u.tempProduct.title)+" ",1),e("span",co,r(u.tempProduct.category),1)]),e("p",null,r(u.tempProduct.description),1),e("p",null,[e("small",ao," 原價: "+r(u.tempProduct.origin_price)+" / 售價: "+r(u.tempProduct.price),1)])]),e("div",ro,[e("img",{src:u.tempProduct.imageUrl,class:"img-fluid"},null,8,uo)])])])]),e("div",po,[_o,e("button",{onClick:o[0]||(o[0]=s=>l.deleteProduct(this.selectedProduct.id)),type:"button",class:"btn btn-danger"}," 確認刪除 ")])])])],512)}const mo=k(Ys,[["render",bo]]),ho={components:{EditModal:Ws,DelModal:mo,PaginationGroup:te},data(){return{title:"這是商品頁面",isNew:!1,tempProductList:[],tempProduct:{productRatings:0,points:[],imagesUrl:[],tags:[],features:[],packages:[],contents:[],notes:[]}}},created(){this.tempProductList=[...this.productList]},watch:{productList:{deep:!0,handler(l){this.tempProductList=l}}},computed:{...y(f,["productList"])},mounted(){this.getProducts()},methods:{...V(f,["getProducts","postProduct"]),handlePageChange(l,o){this.getProducts(l,o)},openModal(l,o){l==="new"?(this.tempProduct={productRatings:0,points:[],imagesUrl:[],tags:[],features:[],packages:[],contents:[],notes:[]},this.isNew=!0,this.$refs.editModal.openModal()):l==="edit"?(this.tempProduct={...o},Array.isArray(this.tempProduct.imagesUrl)||(this.tempProduct.imagesUrl=[]),this.isNew=!1,this.$refs.editModal.openModal()):l==="delete"&&(this.tempProduct={...o},this.$refs.delModal.openModal())}}},go={class:"container"},fo={class:"row py-2"},Po={class:"col mt-4 mb-4"},vo={class:"container py-2"},yo={class:"d-flex justify-content-between gap-2 py-2"},wo={class:"p-2 mb-0"},ko={class:"d-flex justify-content-end gap-2"},Co={class:"container"},Uo={class:"table table-hover"},xo=e("thead",{class:"table-dark fw-bold"},[e("tr",null,[e("th",{scope:"col"},"商品主圖"),e("th",{scope:"col"},"商品名稱"),e("th",{scope:"col"},"分類"),e("th",{scope:"col"},"原價"),e("th",{scope:"col"},"售價"),e("th",{scope:"col"},"是否啟用"),e("th",{scope:"col"},"編輯")])],-1),Eo=["src"],Io={key:0,class:"bi bi-check-circle-fill text-success",style:{scale:"150%"}},Vo={key:1,class:"bi bi-x-circle-fill text-danger",style:{scale:"150%"}},Mo={class:"btn-group",role:"group","aria-label":"Basic outlined example"},To=["onClick"],No=["onClick"];function Lo(l,o,u,_,t,n){const s=x("edit-modal"),c=x("del-modal"),b=x("pagination-group");return d(),i("main",go,[e("div",fo,[e("div",Po,[e("div",vo,[e("h2",null,r(t.title),1),e("div",yo,[e("p",wo,r(`一頁顯示 ${Object.keys(this.tempProductList).length} 項商品`),1),e("div",ko,[e("button",{onClick:o[0]||(o[0]=m=>n.openModal("new")),type:"button",class:"btn btn-primary",id:"modalBtn"}," 建立新的商品 ")]),E(s,{ref:"editModal",tempProduct:t.tempProduct,"is-new":t.isNew,onGetData:l.getProducts},null,8,["tempProduct","is-new","onGetData"]),E(c,{ref:"delModal",tempProduct:t.tempProduct,onGetData:l.getProducts},null,8,["tempProduct","onGetData"])])]),e("div",Co,[e("table",Uo,[xo,e("tbody",null,[(d(!0),i(h,null,g(t.tempProductList,m=>(d(),i("tr",{key:m.title},[e("td",null,[e("img",{src:m.imageUrl,class:"rounded",style:{height:"48px"}},null,8,Eo)]),e("td",null,r(m.title),1),e("td",null,r(m.category),1),e("td",null,r(m.origin_price),1),e("td",null,r(m.price),1),e("td",null,[m.is_enabled?(d(),i("i",Io)):(d(),i("i",Vo))]),e("td",null,[e("div",Mo,[e("button",{onClick:D=>n.openModal("edit",m),type:"button",class:"btn btn-outline-primary btn-sm"}," 編輯 ",8,To),e("button",{onClick:D=>n.openModal("delete",m),type:"button",class:"btn btn-outline-danger btn-sm"}," 刪除 ",8,No)])])]))),128))])])]),E(b,{onPageSelected:n.handlePageChange},null,8,["onPageSelected"])])])])}const Ro=k(ho,[["render",Lo]]);export{Ro as default};
