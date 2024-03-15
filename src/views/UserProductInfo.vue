<template>
  <!-- 單一方案 -->
  <div class="mx-3 mx-lg-10">
    <div class="container py-3 px-lg-12 py-lg-10" data-aos="fade-up">
      <div class="row row-cols-1 align-items-center gy-2 px-xl-4">
        <div class="col">
          <nav class="d-flex gap-2" aria-label="breadcrumb">
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
        </div>
        <div class="col">
          <h1 class="fs-4 card-title fw-bold">
            《走入創世記》讀經進度結合聖經地圖，原來聖經可以這樣讀！
          </h1>
        </div>
      </div>
      <div class="row row-cols-1 py-2 p-xl-4 row-cols-xl-2">
        <div class="col-xl-7 px-xl-4">
          <div class="h-100 d-flex flex-column justify-content-between gap-4">
            <img src="https://images.unsplash.com/photo-1585084293063-45ae031e7df4?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top object-fit-cover img-fluid rounded" alt="boardGame1" style="max-height: 400px">
            <div class="d-flex justify-content-between gap-2">
              <div class="d-flex gap-2">
                <span class="badge rounded-pill bg-primary text-white"># 聖經歷史和地理</span>
                <span class="badge rounded-pill bg-primary text-white"># 讀經工具</span>
              </div>
              <div class="d-flex align-items-baseline gap-3">
                <small class="text-dark-gray">提案人</small>
                <small class="text-dark-gray">我們的主日學</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-5 px-xl-4">
          <div class="h-100 d-flex flex-column justify-content-between">
            <div class="d-flex flex-column gap-3">
              <div class="d-flex justify-content-between align-items-center">
                <div class="fst-italic">
                  <small class="text-dark-gray">目標 500 組</small>
                  <h3 class="fw-bold mt-2 mb-0">累計 50 組</h3>
                </div>
                <div class="fst-italic">
                  <small class="text-dark-gray text-start">預購人數</small>
                  <h3 class="fw-bold mt-2 mb-0 text-end">50 人</h3>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="progress" style="width: 85%;">
                  <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 85%;">
                  </div>
              </div>
              <small class="fw-bold">75%</small>
            </div>
            <p class="card-text mb-0 text-gray-dark">探索《創世記》的精彩旅程！將地圖、讀經進度和故事圖卡巧妙融合，幫助您沉浸於聖經世界。通過遊戲，您將逐步閱讀《創世記》1-50章，並深入探索其故事。無論您是新手還是聖經學者，這款遊戲都將為您提供一個獨特而豐富啟發的體驗。
            </p>
            <div class="d-flex flex-xl-row gap-4">
              <div class="d-flex justify-content-center gap-1">
                <i class="bi bi-lightning-fill text-primary"></i>
                <small class="text-dark-gray">原創商品</small>
              </div>
              <div class="d-flex justify-content-center gap-1">
                <i class="bi bi-people-fill text-primary"></i>
                <small class="text-dark-gray">臺灣設計</small>
              </div>
              <div class="d-flex justify-content-center gap-1">
                <i class="bi bi-flag-fill text-primary"></i>
                <small class="text-dark-gray">臺灣製造</small>
              </div>
            </div>
            <div class="rounded-5 border border-5 border-light p-3">
              <div class="d-flex">
                <i class="bi bi-circle-fill text-primary" style="scale: 40%;"></i>
                <span class="fs-6 fw-bold fst-italic text-black text-center">登記享優惠資格，無需先付款。</span>              
              </div>
              <div class="d-flex">
                <i class="bi bi-circle-fill text-primary" style="scale: 40%;"></i>
                <span class="fs-6 fw-bold fst-italic text-black text-center">歡迎試玩、分享，越早實現企劃。</span>              
              </div>
            </div>
            <div class="d-flex justify-content-end align-items-center gap-6">
              <button type="button" class="btn p-0 hvr-pop text-primary">
                <i class="bi bi-line fs-4"></i>
              </button>
              <button type="button" class="btn p-0 hvr-pop text-primary">
                <i class="bi bi-facebook fs-4"></i>
              </button>
              <button type="button" class="btn p-0 hvr-pop text-primary">
                <i class="bi bi-share-fill fs-4"></i>
              </button>
              <button type="button" class="btn p-0 hvr-pop text-primary">
                <i class="bi bi-heart-fill fs-4"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 企劃導航 -->
  <div class="mx-3 mx-lg-10">
    <div class="container bg-light-gray rounded-5 py-5 px-16">
      <div class="row row-cols-2 align-items-center">
        <div class="col-7">
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
        <div class="col-5">
          <div class="d-flex gap-4">
            <button type="button" class="btn btn-primary flex-fill hvr-pop">報名試玩</button>
            <button type="button" class="btn btn-primary flex-fill hvr-pop">登記預購</button>
          </div>
        </div>
      </div>
    </div>
  </div>




  <main class="container">
    <h1 class="pt-5 text-start">單一商品介紹</h1>
    <div class="row py-2">
      <div v-if="product">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-4">
              <img :src="product.imageUrl" class="img-fluid product-img" />
            </div>
            <div class="col-sm-8">
              <h2>
                {{ product.title }}
                <span class="badge bg-dark ms-2">{{ product.category }}</span>
              </h2>
              <small class="mb-2 text-secondary">商品敘述：</small>
              <p class="mb-3">{{ product.description }}</p>
              <small class="mb-2 text-secondary">商品內容：</small>
              <p class="mb-3">{{ product.content }}</p>
              <div class="mb-3">
                <del class="fs-6 fw-bold text-secondary me-2">
                  原價{{ product.origin_price }}元
                </del>
                <span class="fs-5 fw-bold text-danger">
                  現在只要{{ product.price }}元
                </span>
              </div>
              <div class="input-group">
                <select class="form-select" v-model="this.qty">
                  <option v-for="i in 10" :key="i" :value="i">{{ i }}</option>
                </select>
                <button
                  @click="addToCart(product.id, this.qty)"
                  type="button"
                  class="btn btn-primary"
                >
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions } from 'pinia';
import cartStore from '@/stores/cartStore';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      product: {},
      qty: 1,
    };
  },
  mounted() {
    const { id } = this.$route.params;
    const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/product/${id}`;
    this.axios
    .get(url).then((res) => {
      this.product = res.data.product;
    })
  },
  methods: {
    ...mapActions(cartStore, ['addToCart']),
  },
};
</script>

<style scoped>
.product-img {
  object-fit: cover;
}
</style>

