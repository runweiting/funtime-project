<template>
<!-- 方案頁面 -->
  <div class="mx-3 mx-lg-10">
    <div class="container px-lg-12">
      <div class="row px-md-2 px-lg-3 px-xl-4">
        <div class="col my-3 my-lg-6">
          <nav class="d-flex gap-2 mb-3" aria-label="breadcrumb">
            <small class="text-dark-gray">
              <RouterLink 
              :to="{ name: 'home' }" class="nav-link text-decoration-none text-nowrap">{{ $t('menu.home') }}
              </RouterLink>
            </small>
            <small class="text-dark-gray">/</small>
            <small class="text-dark-gray">
              <RouterLink 
              :to="{ name: 'products' }" class="nav-link text-decoration-none text-nowrap">{{ $t('menu.products') }}</RouterLink>
            </small>
          </nav>
          <h1 class="fs-4 card-title fw-bold mb-3">
            《走入創世記》讀經進度結合聖經地圖，原來聖經可以這樣讀！
          </h1>
          <div class="d-flex align-items-baseline gap-3">
            <small class="text-dark-gray">提案人</small>
            <small class="text-dark-gray">我們的主日學</small>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 企劃導航 -->
  <div class="mx-3 mx-lg-10">
    <div class="container bg-light-gray rounded-5 px-6 py-3 px-lg-12 px-xl-15">
      <div class="row row-cols-1 row-cols-lg-2 align-items-center">
        <div class="col-lg-7">
          <ul class="list-unstyled d-flex gap-6 mb-0">
            <li>
              <a class="text-black text-decoration-none" href="#">專案內容</a>
            </li>
            <li>
              <a class="text-black text-decoration-none" href="#">常見問答 2</a>
            </li>
            <li>
              <a class="text-black text-decoration-none" href="#">留言 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- 方案種類 -->
  <div class="mx-3 mx-lg-10">
    <div class="container px-lg-12">
      <div class="row">
        <div class="col px-xl-4 my-3 my-lg-6">
          <div class="d-flex flex-column justify-content-between rounded-5 border border-5 border-light p-5 gap-3">
            <a href="#" class="stretched-link"></a>
            <img src="https://images.unsplash.com/photo-1585084293063-45ae031e7df4?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top object-fit-cover img-fluid rounded" alt="boardGame1" style="max-height: 100px">
            <h3 class="fs-6 text-dark-gray mb-0">2 入組</h3>
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex gap-2">
                <h5 class="fw-bold mb-0">NT$ 1,300</h5>
                <span class="badge bg-info-light text-black">65折</span>
              </div>
              <span class="fs-6 badge bg-danger">剩餘498份</span>
            </div>
            <small class="text-dark-gray">預定售價 NT$ 1,000，現省 NT$ 700</small>
            <div>
                <span>本方案內含：</span><br>
                <span class="fs-5 fw-bold">《走入創世記》2 套</span>
            </div>
            <hr class="w-100 border-top my-1" style="border: 3px dotted #8C8C8E;">
            <div class="d-flex align-items-center gap-2">
              <i class="bi bi-check-circle-fill text-dark-secondary"></i>
              <small>臺灣本島免運、可寄離島</small>
            </div>
          </div>
        </div>
        <div class="col px-xl-4 my-3 my-lg-6">
            <div class="d-flex flex-column justify-content-between rounded-5 border border-5 border-light p-5 gap-3">
              <a href="#" class="stretched-link"></a>
              <img src="https://images.unsplash.com/photo-1585084293063-45ae031e7df4?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top object-fit-cover img-fluid rounded" alt="boardGame1" style="max-height: 100px">
              <h3 class="fs-6 text-dark-gray mb-0">10 入組</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex gap-2">
                  <h5 class="fw-bold mb-0">NT$ 6,500</h5>
                  <span class="badge bg-info-light text-black">65折</span>
                </div>
                <span class="fs-6 badge bg-danger">剩餘498份</span>
              </div>
              <small class="text-dark-gray">預定售價 NT$ 10,000，現省 NT$ 3,500</small>
              <div>
                <span>本方案內含：</span><br>
                <span class="fs-5 fw-bold">《走入創世記》10 套</span>
              </div>
              <hr class="w-100 border-top my-1" style="border: 3px dotted #8C8C8E;">
              <div class="d-flex gap-2">
                <i class="bi bi-check-circle-fill text-dark-secondary"></i>
                <small>臺灣本島免運、可寄離島</small>
              </div>
            </div>
        </div>
    </div>
    </div>
  </div>





    <div class="container">
        <h1 class="pt-5 text-center">我的購物車</h1>
        <div class="row">
            <div class="col">
                <cart-list class="w-100 py-3" />
            </div>
            <div class="col">
                <order-detail class="w-100 mt-4 p-3" @sendOrder="createOrder" ref="orderDetail" />
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
import { mapActions } from 'pinia';
import cartStore from '@/stores/cartStore';
import CartList from '@/components/week6/CartList.vue';
import OrderDetail from '@/components/week5/OrderDetail.vue';

export default {
    components: {
        CartList,
        OrderDetail
    },
    data() {
        return {
            apiUrl: import.meta.env.VITE_APP_URL,
            apiPath: import.meta.env.VITE_APP_PATH,
        }
    },
    methods: {
        ...mapActions(cartStore, ['getCart']),
        // POST 結帳
        createOrder(data) {
            const order = {
                data,
            };
            const url = `${this.apiUrl}/api/${this.apiPath}/order`;
            this.axios
            .post(url, order)
            .then((res) => {
                Swal.fire({
                    title: res.data.message,
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
                // OrderDetail重置表單
                this.$refs.orderDetail.resetForm();
                this.getCart();
            })
            .catch((err) => {
                Swal.fire({
                    title: err.data.message,
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            });
        },
    }
}
</script>