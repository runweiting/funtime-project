import{B as u,C as l,D as r}from"./index-5yd5wy7v.js";import{s as i}from"./showSuccessToast-B7hSi17v.js";import{s as o}from"./showErrorToast-4Ldzj76j.js";const p=u({id:"loadingStore",state:()=>({loadingStatus:{getProduct:"",updateQty:""}})});var g={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"runweiting",VITE_TEXT:"這是部屬完成的環境",BASE_URL:"/funtime-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const h=l.useLoading({}),{VITE_APP_URL:c,VITE_APP_PATH:d}=g,$=u("userCartStore",{state:()=>({cartList:[],cartTotal:0}),actions:{addToCart(t,a){const s=`${c}/api/${d}/cart`,n={product_id:t,qty:a};r.post(s,{data:n}).then(e=>{i(e.data.message)}).catch(e=>{o(e)})},async getCart(){const t=h.show(),a=`${c}/api/${d}/cart`;try{const s=await r.get(a);this.cartList=s.data.data.carts,this.cartTotal=s.data.data.total}catch(s){o(s.response.data.message)}finally{t.hide()}},async putCart(t){const a=p();a.loadingStatus.updateQty=t.id;const s=`${c}/api/${d}/cart/${t.id}`,n={product_id:t.product_id,qty:t.qty};try{const e=await r.put(s,{data:n});i(e.data.message),a.loadingStatus.updateQty=""}catch(e){o(e.response.data.message)}finally{this.getCart()}},deleteCart(t){const a=`${c}/api/${d}/cart/${t}`;r.delete(a).then(s=>{i(s.data.message),this.getCart()}).catch(s=>{o(s.response.data.message)})},deleteCarts(){const t=`${c}/api/${d}/carts`;r.delete(t).then(a=>{i(a.data.message),this.getCart()}).catch(a=>{o(a.response.data.message)})}}});export{$ as u};
