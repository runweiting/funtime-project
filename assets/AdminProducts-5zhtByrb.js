import{C as E,B as F,D as w,m as C,a as x,_ as M,o as i,c,b as t,t as u,e as r,v as a,F as b,x as g,A as N,J as T,K as A,L as O,f as S,g as R,r as y,d as k}from"./index-TFW6QGXf.js";import{s as L}from"./showSuccessToast-TNVcc7d0.js";import{s as U}from"./showErrorToast-H8uiVGa1.js";import{m as V,P as j}from"./PaginationGroup-Xu6fBIGp.js";var G={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"runweiting",BASE_URL:"/funtime-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const B=E.useLoading({}),{VITE_APP_URL:P,VITE_APP_PATH:v}=G,f=F("adminProductsStore",{mixins:[V],state:()=>({productList:[],pagination:{},isEditModalOpen:!0,isDelModalOpen:!0,currentPage:null}),actions:{async getProducts(l,e=1){const p=B.show(),_=`${P}/api/${v}/admin/products?page=${e}`;try{const o=await w.get(_),{products:n,pagination:s}=o.data;this.productList=n,this.pagination=s,this.currentPage=e}catch(o){U(o.response.data.message)}finally{p.hide()}},updateProduct(l,e){let p=`${P}/api/${v}/admin/product`,_="post";l||(p=`${P}/api/${v}/admin/product/${e.id}`,_="put"),w[_](p,{data:e}).then(o=>{L(o.data.message),this.isEditModalOpen=!1,this.getProducts()}).catch(o=>{U(o.response.data.message)})},upload(){const e=document.querySelector("#formFile").files[0],p=new FormData;p.append("file-to-upload",e);const _=`${P}/api/${v}/admin/upload`;w.post(_,p)},deleteProduct(l){const e=`${P}/api/${v}/admin/product/${l}`;w.delete(e).then(p=>{L(p.data.message),this.isDelModalOpen=!1,this.getProducts()}).catch(p=>{U(p.response.data.message)})}}}),I={props:{tempProduct:Object,isNew:Boolean},mixins:[V],data(){return{selectedProduct:{productRatings:0,points:[],imagesUrl:[],tags:[],features:[],packages:[],contents:[],notes:[]},newPrice:0,newTag:"",newFeature:"",newPoint:{title:"",content:"",imageUrl:""},newPackage:{name:"",units:0},newContent:"",newNote:""}},created(){this.selectedProduct={...this.tempProduct},this.selectedProduct.category=""},computed:{...C(f,["isEditModalOpen"])},watch:{tempProduct:{deep:!0,handler(l){this.selectedProduct=l}},isEditModalOpen:{handler(l){l||this.hideModal()}}},methods:{...x(f,["updateProduct","upload"]),calculatePrice(){this.newPrice=this.selectedProduct.origin_price*this.selectedProduct.discount,this.selectedProduct.price=this.newPrice},addTag(){this.newTag.trim()!==""&&(this.selectedProduct.tags.push(this.newTag.trim()),this.newTag="")},removeTag(l){this.selectedProduct.tags.splice(l,1)},addFeature(){this.newFeature.trim()!==""&&(this.selectedProduct.features.push(this.newFeature.trim()),this.newFeature="")},removeFeature(l){this.selectedProduct.features.splice(l,1)},addPoint(){this.newPoint.title.trim()!==""&&this.newPoint.content.trim()!==""&&this.newPoint.imageUrl.trim()!==""&&(this.selectedProduct.points.push(this.newPoint),this.newPoint={})},removePoint(l){this.selectedProduct.points.splice(l,1)},addPackage(){this.newPackage.name.trim()!==""&&this.newPackage.units!==0&&(this.selectedProduct.packages.push(this.newPackage),this.newPackage={})},removePackage(l){this.selectedProduct.packages.splice(l,1)},addContent(){this.newContent.trim()!==""&&(this.selectedProduct.contents.push(this.newContent.trim()),this.newContent="")},removeContent(l){this.selectedProduct.contents.splice(l,1)},addNote(){this.newNote.trim()!==""&&(this.selectedProduct.notes.push(this.newNote.trim()),this.newNote="")},removeNote(l){this.selectedProduct.notes.splice(l,1)},cancelUpdate(){this.selectedProduct={}}}},q={class:"modal fade",tabindex:"-1","aria-labelledby":"editModalLabel","aria-hidden":"true",ref:"modal"},K={class:"modal-dialog modal-xl modal-dialog-centered"},H={class:"modal-content"},J={class:"modal-header bg-dark opacity-75 text-white"},z={class:"modal-title",id:"editModalLabel"},Q={key:0},W={key:1},X=t("i",{class:"bi bi-x-lg"},null,-1),Y=[X],Z={class:"modal-body"},$={class:"container-fluid"},tt=t("div",{class:"row mb-5"},[t("div",{class:"col-md-3"},[t("h5",null,"專案內容")])],-1),et={class:"row"},st={class:"col-md-3"},ot={class:"mb-4"},lt=t("label",{for:"imgUrl",class:"form-label"},"主要圖片",-1),nt=["src"],dt=t("h4",{class:"fw-bold"},"多圖新增",-1),it={key:0,class:"mb-4"},ct=["for"],rt=["id","onUpdate:modelValue"],at=["src"],ut={class:"d-flex gap-2"},pt=t("h4",{class:"fw-bold"},"上傳圖片",-1),mt={class:"mb-4"},_t={class:"col-md-9"},ht={class:"row"},bt={class:"col-8"},gt=t("label",{for:"title",class:"form-label"},"完整標題",-1),ft={class:"col-4"},Pt=t("label",{for:"short-title",class:"form-label"},"簡短標題",-1),vt={class:"row mb-4"},wt={class:"col"},yt=t("label",{for:"description",class:"form-label"},"專案描述",-1),kt={class:"row mb-4"},Ut={class:"col"},Ct=t("label",{for:"proposer",class:"form-label"},"提案人",-1),xt={class:"col"},Mt=t("label",{for:"tags",class:"form-label"},"標籤",-1),Vt={class:"input-group mb-2"},Nt={class:"d-flex flex-wrap gap-2"},Tt=["onClick"],Lt={class:"col"},Dt=t("label",{for:"features",class:"form-label"},"特色",-1),Et={class:"input-group mb-2"},Ft={class:"d-flex flex-wrap gap-2"},At=["onClick"],Ot={class:"row"},St={class:"col"},Rt=t("label",{for:"category",class:"form-label"},"分類",-1),jt=S('<option value="" disabled selected hidden>請輸入分類</option><option value="地圖">地圖</option><option value="卡牌">卡牌</option><option value="棋盤">棋盤</option><option value="擲骰">擲骰</option>',5),Gt=[jt],Bt={class:"col"},It=t("label",{for:"target_units",class:"form-label"},"目標組數",-1),qt={class:"col"},Kt=t("label",{for:"unit",class:"form-label"},"單位",-1),Ht=t("hr",{class:"w-100 border-top my-8",style:{border:"3px dotted #8C8C8E"}},null,-1),Jt={class:"row mb-4"},zt={class:"col"},Qt=t("label",{for:"content_question",class:"form-label"},"困擾標題",-1),Wt={class:"row mb-4"},Xt={class:"col-4"},Yt=t("label",{for:"point-title",class:"form-label"},"設計特點",-1),Zt={class:"col-8"},$t=t("label",{for:"point-content",class:"form-label"},"設計內容",-1),te={class:"row align-items-center mb-4"},ee={class:"col"},se=t("label",{for:"point-imgUrl",class:"form-label"},"情境圖片",-1),oe={class:"col"},le=["src"],ne={class:"col mt-auto"},de={class:"row"},ie={class:"col"},ce={class:"row"},re={class:"col-md-10"},ae={class:"text-wrap mb-2",style:{"overflow-wrap":"break-word"}},ue={class:"text-wrap",style:{"overflow-wrap":"break-word"}},pe={class:"col-md-2 ms-auto"},me=["onClick"],_e=t("hr",{class:"w-100 border-top my-8",style:{border:"3px dotted #8C8C8E"}},null,-1),he={class:"row mb-4"},be={class:"col"},ge=t("label",{for:"original-price",class:"form-label"},"售價",-1),fe={class:"col"},Pe=t("label",{for:"discount",class:"form-label"},"折扣",-1),ve={class:"col"},we=t("label",{for:"original-price",class:"form-label"},"折扣價",-1),ye={class:"row mb-4"},ke={class:"col"},Ue=t("label",{for:"package-name",class:"form-label"},"套裝名稱",-1),Ce={class:"col"},xe=t("label",{for:"package-units",class:"form-label"},"內含組數",-1),Me={class:"col mt-auto"},Ve={class:"row mb-4"},Ne={class:"col"},Te={class:"border border-gray border-1 rounded-2 p-2"},Le={class:"mb-2"},De={class:"ms-auto"},Ee=["onClick"],Fe=t("div",{class:"col"},null,-1),Ae={class:"row mb-4"},Oe={class:"col"},Se=t("label",{for:"contents",class:"form-label"},"內容物",-1),Re={class:"input-group"},je={class:"col"},Ge=t("label",{for:"notes",class:"form-label"},"備註",-1),Be={class:"input-group"},Ie={class:"row"},qe={class:"col"},Ke={class:"border border-gray border-1 rounded-2 p-2"},He={class:"text-wrap",style:{"overflow-wrap":"break-word"}},Je={class:"ms-auto"},ze=["onClick"],Qe={class:"col"},We={class:"border border-gray border-1 rounded-2 p-2"},Xe={class:"text-wrap",style:{"overflow-wrap":"break-word"}},Ye={class:"ms-auto"},Ze=["onClick"],$e=t("hr",{class:"w-100 border-top my-8",style:{border:"3px dotted #8C8C8E"}},null,-1),ts={class:"row"},es={class:"col"},ss=t("label",{for:"range",class:"form-label"},"商品評價",-1),os={class:"ms-2 text-primary fw-bold fs-5"},ls={class:"col mt-auto"},ns={class:"form-check pb-2"},ds=t("label",{for:"product-active",class:"form-label m-0"},"啟用商品",-1),is={class:"switch ms-2"},cs=t("span",{class:"slider"},null,-1),rs={class:"modal-footer"};function as(l,e,p,_,o,n){return i(),c("div",q,[t("div",K,[t("div",H,[t("div",J,[t("h5",z,[p.isNew?(i(),c("span",Q,"新增商品")):(i(),c("span",W,"編輯商品編號："+u(o.selectedProduct.id),1))]),t("button",{onClick:e[0]||(e[0]=(...s)=>n.cancelUpdate&&n.cancelUpdate(...s)),type:"button",class:"btn btn-outline-light","data-bs-dismiss":"modal","aria-label":"Close"},Y)]),t("div",Z,[t("div",$,[tt,t("div",et,[t("div",st,[t("div",ot,[lt,r(t("input",{id:"imgUrl","onUpdate:modelValue":e[1]||(e[1]=s=>o.selectedProduct.imageUrl=s),type:"url",class:"form-control mb-2",placeholder:"請輸入網址"},null,512),[[a,o.selectedProduct.imageUrl]]),t("img",{src:o.selectedProduct.imageUrl,class:"img-fluid"},null,8,nt)]),dt,Array.isArray(o.selectedProduct.imagesUrl)?(i(),c("div",it,[(i(!0),c(b,null,g(o.selectedProduct.imagesUrl,(s,d)=>(i(),c("div",{key:`url${d}`},[t("label",{for:`url${d}`,class:"form-label"},"圖片網址",8,ct),r(t("input",{id:`url${d}`,"onUpdate:modelValue":h=>o.selectedProduct.imagesUrl[d]=h,type:"url",class:"form-control mb-2",placeholder:"請輸入網址"},null,8,rt),[[a,o.selectedProduct.imagesUrl[d]]]),t("img",{src:o.selectedProduct.imagesUrl[d],class:"img-fluid mb-2"},null,8,at)]))),128)),t("div",ut,[o.selectedProduct.imagesUrl.length===0||o.selectedProduct.imagesUrl[o.selectedProduct.imagesUrl.length-1]?(i(),c("button",{key:0,onClick:e[2]||(e[2]=s=>o.selectedProduct.imagesUrl.push("")),type:"button",class:"btn btn-primary w-100"}," 新增圖片 ")):N("",!0),t("button",{onClick:e[3]||(e[3]=s=>o.selectedProduct.imagesUrl.pop()),type:"button",class:"btn btn-danger text-white w-100"}," 刪除圖片 ")])])):N("",!0),pt,t("div",mt,[t("input",{onChange:e[4]||(e[4]=(...s)=>l.upload&&l.upload(...s)),class:"form-control",type:"file",id:"formFile",placeholder:"請輸入圖片連結"},null,32)])]),t("div",_t,[t("div",ht,[t("div",bt,[gt,r(t("input",{id:"title","onUpdate:modelValue":e[5]||(e[5]=s=>o.selectedProduct.title=s),type:"text",class:"form-control mb-4",name:"full-title",placeholder:"請輸入完整標題"},null,512),[[a,o.selectedProduct.title]])]),t("div",ft,[Pt,r(t("input",{id:"short-title","onUpdate:modelValue":e[6]||(e[6]=s=>o.selectedProduct.short_title=s),type:"text",class:"form-control mb-4",name:"short-title",placeholder:"請輸入簡單標題"},null,512),[[a,o.selectedProduct.short_title]])])]),t("div",vt,[t("div",wt,[yt,r(t("textarea",{id:"description","onUpdate:modelValue":e[7]||(e[7]=s=>o.selectedProduct.description=s),class:"form-control",placeholder:"請輸入專案描述",rows:"3"},null,512),[[a,o.selectedProduct.description]])])]),t("div",kt,[t("div",Ut,[Ct,r(t("input",{id:"proposer","onUpdate:modelValue":e[8]||(e[8]=s=>o.selectedProduct.proposer=s),type:"text",class:"form-control",placeholder:"請輸入名稱"},null,512),[[a,o.selectedProduct.proposer]])]),t("div",xt,[Mt,t("div",Vt,[r(t("input",{id:"tags",type:"text",class:"form-control",placeholder:"請輸入標籤","onUpdate:modelValue":e[9]||(e[9]=s=>o.newTag=s),onKeyup:e[10]||(e[10]=T((...s)=>n.addTag&&n.addTag(...s),["enter"]))},null,544),[[a,o.newTag]]),t("button",{class:"btn btn-gray text-white",type:"button",onClick:e[11]||(e[11]=(...s)=>n.addTag&&n.addTag(...s))},"新增")]),t("div",Nt,[(i(!0),c(b,null,g(o.selectedProduct.tags,(s,d)=>(i(),c("span",{class:"badge bg-primary d-flex align-items-center",key:d},[t("span",null,"# "+u(s),1),t("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:h=>n.removeTag(d),style:{scale:"0.75"}},null,8,Tt)]))),128))])]),t("div",Lt,[Dt,t("div",Et,[r(t("input",{id:"features",type:"text",class:"form-control",placeholder:"請輸入特色","onUpdate:modelValue":e[12]||(e[12]=s=>o.newFeature=s),onKeyup:e[13]||(e[13]=T((...s)=>n.addFeature&&n.addFeature(...s),["enter"]))},null,544),[[a,o.newFeature]]),t("button",{class:"btn btn-gray text-white",type:"button",onClick:e[14]||(e[14]=(...s)=>n.addFeature&&n.addFeature(...s))},"新增")]),t("div",Ft,[(i(!0),c(b,null,g(o.selectedProduct.features,(s,d)=>(i(),c("span",{class:"badge bg-info-light text-black d-flex align-items-center",key:d},[t("span",null,u(s),1),t("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:h=>n.removeFeature(d),style:{scale:"0.75"}},null,8,At)]))),128))])])]),t("div",Ot,[t("div",St,[Rt,r(t("select",{id:"category","onUpdate:modelValue":e[15]||(e[15]=s=>o.selectedProduct.category=s),class:"form-select","aria-label":"category",name:"category"},Gt,512),[[A,o.selectedProduct.category]])]),t("div",Bt,[It,r(t("input",{id:"target_units","onUpdate:modelValue":e[16]||(e[16]=s=>o.selectedProduct.target_units=s),type:"number",min:"0",class:"form-control",placeholder:"請輸入目標組數"},null,512),[[a,o.selectedProduct.target_units,void 0,{number:!0}]])]),t("div",qt,[Kt,r(t("input",{id:"unit","onUpdate:modelValue":e[17]||(e[17]=s=>o.selectedProduct.unit=s),type:"text",class:"form-control",placeholder:"請輸入單位"},null,512),[[a,o.selectedProduct.unit]])])]),Ht,t("div",Jt,[t("div",zt,[Qt,r(t("input",{id:"content_question","onUpdate:modelValue":e[18]||(e[18]=s=>o.selectedProduct.question=s),type:"text",class:"form-control",placeholder:"請輸入困擾標題"},null,512),[[a,o.selectedProduct.question]])])]),t("div",Wt,[t("div",Xt,[Yt,r(t("input",{id:"point-title",type:"text",class:"form-control",placeholder:"請輸入特點","onUpdate:modelValue":e[19]||(e[19]=s=>o.newPoint.title=s)},null,512),[[a,o.newPoint.title]])]),t("div",Zt,[$t,r(t("textarea",{id:"point-content","onUpdate:modelValue":e[20]||(e[20]=s=>o.newPoint.content=s),class:"form-control",placeholder:"請輸入內容",rows:"1"},null,512),[[a,o.newPoint.content]])])]),t("div",te,[t("div",ee,[se,r(t("input",{id:"point-imgUrl","onUpdate:modelValue":e[21]||(e[21]=s=>o.newPoint.imageUrl=s),type:"url",class:"form-control",placeholder:"請輸入網址"},null,512),[[a,o.newPoint.imageUrl]])]),t("div",oe,[t("img",{src:o.newPoint.imageUrl,class:"img-fluid"},null,8,le)]),t("div",ne,[t("button",{class:"btn btn-gray text-white",type:"button",onClick:e[22]||(e[22]=(...s)=>n.addPoint&&n.addPoint(...s))},"新增")])]),t("div",de,[t("div",ie,[(i(!0),c(b,null,g(o.selectedProduct.points,(s,d)=>(i(),c("div",{key:d,class:"d-flex justify-content-between border border-gray border-1 rounded-2 p-2 mb-4"},[t("div",ce,[t("div",re,[t("div",ae,u(s.title)+" : "+u(s.content),1),t("div",ue,u(s.imageUrl),1)]),t("div",pe,[t("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:h=>n.removePoint(d),style:{scale:"0.75"}},null,8,me)])])]))),128))])]),_e,t("div",he,[t("div",be,[ge,r(t("input",{id:"original-price","onUpdate:modelValue":e[23]||(e[23]=s=>o.selectedProduct.origin_price=s),type:"number",min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[a,o.selectedProduct.origin_price,void 0,{number:!0}]])]),t("div",fe,[Pe,r(t("input",{id:"discount",onKeyup:e[24]||(e[24]=(...s)=>n.calculatePrice&&n.calculatePrice(...s)),"onUpdate:modelValue":e[25]||(e[25]=s=>o.selectedProduct.discount=s),type:"number",min:"0",class:"form-control",placeholder:"請輸入折扣"},null,544),[[a,o.selectedProduct.discount,void 0,{number:!0}]])]),t("div",ve,[we,r(t("input",{id:"original-price","onUpdate:modelValue":e[26]||(e[26]=s=>o.selectedProduct.price=s),disabled:"",type:"number",class:"form-control"},null,512),[[a,o.selectedProduct.price,void 0,{number:!0}]])])]),t("div",ye,[t("div",ke,[Ue,r(t("input",{id:"package-name",type:"text",class:"form-control",placeholder:"請輸入名稱","onUpdate:modelValue":e[27]||(e[27]=s=>o.newPackage.name=s)},null,512),[[a,o.newPackage.name]])]),t("div",Ce,[xe,r(t("input",{id:"package-units",type:"number",min:"0",class:"form-control",placeholder:"請輸入組數","onUpdate:modelValue":e[28]||(e[28]=s=>o.newPackage.units=s)},null,512),[[a,o.newPackage.units,void 0,{number:!0}]])]),t("div",Me,[t("button",{class:"btn btn-gray text-white",type:"button",onClick:e[29]||(e[29]=(...s)=>n.addPackage&&n.addPackage(...s))},"新增")])]),t("div",Ve,[t("div",Ne,[t("div",Te,[(i(!0),c(b,null,g(o.selectedProduct.packages,(s,d)=>(i(),c("div",{key:s.name,class:"d-flex justify-content-between"},[t("div",Le,u(s.name)+"，內含 "+u(s.units)+" 個 ",1),t("div",De,[t("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:h=>n.removePoint(d),style:{scale:"0.75"}},null,8,Ee)])]))),128))])]),Fe]),t("div",Ae,[t("div",Oe,[Se,t("div",Re,[r(t("input",{id:"contents",type:"text",class:"form-control",placeholder:"請輸入內容物","onUpdate:modelValue":e[30]||(e[30]=s=>o.newContent=s)},null,512),[[a,o.newContent]]),t("button",{class:"btn btn-gray text-white",type:"button",onClick:e[31]||(e[31]=(...s)=>n.addContent&&n.addContent(...s))},"新增")])]),t("div",je,[Ge,t("div",Be,[r(t("input",{id:"notes",type:"text",class:"form-control",placeholder:"請輸入備註","onUpdate:modelValue":e[32]||(e[32]=s=>o.newNote=s)},null,512),[[a,o.newNote]]),t("button",{class:"btn btn-gray text-white",type:"button",onClick:e[33]||(e[33]=(...s)=>n.addNote&&n.addNote(...s))},"新增")])])]),t("div",Ie,[t("div",qe,[t("div",Ke,[(i(!0),c(b,null,g(o.selectedProduct.contents,(s,d)=>(i(),c("div",{key:d,class:"d-flex justify-content-between"},[t("div",He,u(s),1),t("div",Je,[t("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:h=>n.removeContent(d),style:{scale:"0.75"}},null,8,ze)])]))),128))])]),t("div",Qe,[t("div",We,[(i(!0),c(b,null,g(o.selectedProduct.notes,(s,d)=>(i(),c("div",{key:d,class:"d-flex justify-content-between"},[t("div",Xe,u(s),1),t("div",Ye,[t("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:h=>n.removeNote(d),style:{scale:"0.75"}},null,8,Ze)])]))),128))])])]),$e,t("div",ts,[t("div",es,[ss,t("span",os,u(o.selectedProduct.productRatings)+" 分 ",1),r(t("input",{id:"range","onUpdate:modelValue":e[34]||(e[34]=s=>o.selectedProduct.productRatings=s),type:"range",class:"form-range",min:"0",max:"5",step:"1"},null,512),[[a,o.selectedProduct.productRatings]])]),t("div",ls,[t("div",ns,[ds,t("label",is,[r(t("input",{id:"product-active","onUpdate:modelValue":e[35]||(e[35]=s=>o.selectedProduct.is_enabled=s),type:"checkbox"},null,512),[[O,o.selectedProduct.is_enabled]]),cs])])])])])])])]),t("div",rs,[t("button",{onClick:e[36]||(e[36]=(...s)=>n.cancelUpdate&&n.cancelUpdate(...s)),type:"button",class:"btn btn-danger text-white","data-bs-dismiss":"modal"},"取消"),t("button",{onClick:e[37]||(e[37]=s=>l.updateProduct(this.isNew,this.selectedProduct)),type:"button",class:"btn btn-primary"},"確認")])])])],512)}const us=M(I,[["render",as]]),ps={props:{tempProduct:Object},mixins:[V],data(){return{selectedProduct:{}}},created(){this.selectedProduct={...this.tempProduct}},computed:{...C(f,["isDelModalOpen"])},watch:{tempProduct:{deep:!0,handler(l){this.selectedProduct=l}},isDelModalOpen:{handler(l){l||this.hideModal()}}},methods:{...x(f,["deleteProduct"])}},ms={class:"modal fade modal-lg",tabindex:"-1","aria-labelledby":"delModalLabel","aria-hidden":"true",ref:"modal"},_s={class:"modal-dialog modal-dialog-centered"},hs={class:"modal-content"},bs=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"delModalLabel"},"刪除商品"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),gs={class:"modal-body"},fs={class:"container-fluid"},Ps={class:"row"},vs={class:"col-sm-8"},ws={class:"fw-bold text-danger"},ys={class:"badge bg-dark ms-2"},ks={class:"text-muted"},Us={class:"col-sm-4"},Cs=["src"],xs={class:"modal-footer"},Ms=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function Vs(l,e,p,_,o,n){return i(),c("div",ms,[t("div",_s,[t("div",hs,[bs,t("div",gs,[t("div",fs,[t("div",Ps,[t("div",vs,[t("h5",ws,[R(u(p.tempProduct.title)+" ",1),t("span",ys,u(p.tempProduct.category),1)]),t("p",null,u(p.tempProduct.description),1),t("p",null,[t("small",ks," 原價: "+u(p.tempProduct.origin_price)+" / 售價: "+u(p.tempProduct.price),1)])]),t("div",Us,[t("img",{src:p.tempProduct.imageUrl,class:"img-fluid"},null,8,Cs)])])])]),t("div",xs,[Ms,t("button",{onClick:e[0]||(e[0]=s=>l.deleteProduct(this.selectedProduct.id)),type:"button",class:"btn btn-danger"}," 確認刪除 ")])])])],512)}const Ns=M(ps,[["render",Vs]]),Ts={components:{EditModal:us,DelModal:Ns,PaginationGroup:j},data(){return{title:"這是商品頁面",isNew:!1,tempProductList:[],tempProduct:{productRatings:0,points:[],imagesUrl:[],tags:[],features:[],packages:[],contents:[],notes:[]}}},created(){this.tempProductList=[...this.productList]},watch:{productList:{deep:!0,handler(l){this.tempProductList=l}}},computed:{...C(f,["productList","pagination"])},mounted(){this.getProducts()},methods:{...x(f,["getProducts","postProduct"]),getPages(l){this.getProducts(l)},openModal(l,e){l==="new"?(this.tempProduct={productRatings:0,points:[],imagesUrl:[],tags:[],features:[],packages:[],contents:[],notes:[]},this.isNew=!0,this.$refs.editModal.openModal()):l==="edit"?(this.tempProduct={...e},Array.isArray(this.tempProduct.imagesUrl)||(this.tempProduct.imagesUrl=[]),this.isNew=!1,this.$refs.editModal.openModal()):l==="delete"&&(this.tempProduct={...e},this.$refs.delModal.openModal())}}},Ls={class:"container"},Ds={class:"row py-2"},Es={class:"col mt-4 mb-4"},Fs={class:"container py-2"},As={class:"d-flex justify-content-between gap-2 py-2"},Os={class:"p-2 mb-0"},Ss={class:"d-flex justify-content-end gap-2"},Rs={class:"container"},js={class:"table table-hover"},Gs=t("thead",{class:"table-dark fw-bold"},[t("tr",null,[t("th",{scope:"col"},"商品主圖"),t("th",{scope:"col"},"商品名稱"),t("th",{scope:"col"},"分類"),t("th",{scope:"col"},"原價"),t("th",{scope:"col"},"售價"),t("th",{scope:"col"},"是否啟用"),t("th",{scope:"col"},"編輯")])],-1),Bs=["src"],Is={key:0,class:"bi bi-check-circle-fill text-success",style:{scale:"150%"}},qs={key:1,class:"bi bi-x-circle-fill text-danger",style:{scale:"150%"}},Ks={class:"btn-group",role:"group"},Hs=["onClick"],Js=["onClick"];function zs(l,e,p,_,o,n){const s=y("EditModal"),d=y("DelModal"),h=y("PaginationGroup");return i(),c("main",Ls,[t("div",Ds,[t("div",Es,[t("div",Fs,[t("h2",null,u(o.title),1),t("div",As,[t("p",Os,u(`一頁顯示 ${Object.keys(this.tempProductList).length} 項商品`),1),t("div",Ss,[t("button",{onClick:e[0]||(e[0]=m=>n.openModal("new")),type:"button",class:"btn btn-primary",id:"modalBtn"},"建立新的商品")]),k(s,{ref:"editModal",tempProduct:o.tempProduct,"is-new":o.isNew,onGetData:l.getProducts},null,8,["tempProduct","is-new","onGetData"]),k(d,{ref:"delModal",tempProduct:o.tempProduct,onGetData:l.getProducts},null,8,["tempProduct","onGetData"])])]),t("div",Rs,[t("table",js,[Gs,t("tbody",null,[(i(!0),c(b,null,g(o.tempProductList,m=>(i(),c("tr",{key:m.title},[t("td",null,[t("img",{src:m.imageUrl,class:"rounded",style:{height:"48px"}},null,8,Bs)]),t("td",null,u(m.title),1),t("td",null,u(m.category),1),t("td",null,u(m.origin_price),1),t("td",null,u(m.price),1),t("td",null,[m.is_enabled?(i(),c("i",Is)):(i(),c("i",qs))]),t("td",null,[t("div",Ks,[t("button",{onClick:D=>n.openModal("edit",m),type:"button",class:"btn btn-outline-primary btn-sm"},"編輯",8,Hs),t("button",{onClick:D=>n.openModal("delete",m),type:"button",class:"btn btn-outline-danger btn-sm"},"刪除",8,Js)])])]))),128))])])]),k(h,{pagination:l.pagination,onGetPages:n.getPages},null,8,["pagination","onGetPages"])])])])}const Zs=M(Ts,[["render",zs]]);export{Zs as default};