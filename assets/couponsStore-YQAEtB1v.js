import{x as m,y as a}from"./index-mrn3Z3o4.js";import{s as i}from"./showSuccessToast-yeD6Bdgu.js";import{s as e}from"./showErrorToast-Ee6WUOWD.js";var _={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"runweiting",VITE_TEXT:"這是部屬完成的環境",BASE_URL:"/funtime-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:n,VITE_APP_PATH:p}=_,P=m("couponsStore",{state:()=>({couponList:[],pagination:{},couponState:{}}),actions:{getCoupons(t=1){const s=`${n}/api/${p}/admin/coupons?page=${t}`;a.get(s).then(o=>{const{coupons:r,pagination:u}=o.data,d=r.map(c=>({...c,is_enabled:!!c.is_enabled}));this.couponList=d,this.pagination=u}).catch(o=>{e(o.response.data.message)})},async postCoupon(t){const s=`${n}/api/${p}/coupon`;try{const o=await a.post(s,{data:{code:t}});this.couponState=o.data,i(o.data.message)}catch(o){e(o.response.data.message)}},clearCoupon(){this.couponState={}},deleteCoupon(t){const s=`${n}/api/${p}/admin/coupon/${t}`;a.delete(s).then(o=>{i(o.data.message),this.getCoupons()}).catch(o=>{e(o.response.data.message)})}}});export{P as c};
