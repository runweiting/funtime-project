<template>
  <!-- 單一方案 -->
  <div class="mx-3 mx-lg-10">
    <div class="container px-lg-12" data-aos="fade-up">
      <div class="row align-items-center px-xl-4">
        <div class="col">
          <nav class="d-flex gap-2 mb-2" aria-label="breadcrumb">
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
          <h1 class="fs-4 card-title fw-bold">
            《走入創世記》讀經進度結合聖經地圖，原來聖經可以這樣讀！
          </h1>
        </div>
      </div>
      <div class="row row-cols-1 py-2 p-xl-4 row-cols-xl-2">
        <div class="col-xl-7 px-xl-4">
          <div class="h-100 d-flex flex-column justify-content-between gap-4">
            <img src="https://images.unsplash.com/photo-1585084293063-45ae031e7df4?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top object-fit-cover img-fluid rounded" alt="boardGame1" style="max-height: 400px">
            <div class="d-flex flex-column flex-sm-row justify-content-sm-between gap-2 mb-2">
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
          <div class="h-100 d-flex flex-column justify-content-between gap-2">
            <div class="row row-cols-1 align-items-center align-items-md-end row-cols-xl-1 gy-2">
              <div class="col-md-5">
                <div class="d-flex gap-8 align-items-center">
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
              <div class="col-md-7">
                <div class="row align-items-center">
                  <div class="col-10">
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                  </div>
                  <div class="col-2 text-end">
                    <small class="fw-bold">75%</small>
                  </div>
                </div>
              </div>
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
        <div class="col-lg-5 d-none d-lg-block">
          <div class="d-flex gap-4">
            <button type="button" class="btn btn-primary flex-fill hvr-pop">報名試玩</button>
            <button type="button" class="btn btn-primary flex-fill hvr-pop">登記預購</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 報名試玩、登記預購導航 -->
  <div class="d-lg-none mx-3 mx-lg-10 fixed-bottom" style="bottom: 12px;">
    <div class="container bg-white rounded-5 border border-light border-5 py-3 px-12">
      <div class="row align-items-center">
        <div class="col">
          <div class="d-flex gap-4">
            <button type="button" class="btn btn-primary flex-fill hvr-pop">報名試玩</button>
            <button type="button" class="btn btn-primary flex-fill hvr-pop">登記預購</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 專案介紹 -->
  <div class="mx-3 mx-lg-10">
    <div class="container px-lg-12">
      <div class="row row-cols-1 py-2 p-xl-4 pt-xl-8 row-cols-md-2">
        <!-- 專案內容 -->
        <div class="col-md-7 px-xl-4">
          <div class="position-relative rounded-5 border border-5 border-secondary p-5 my-5">
            <h3 class="fs-5 fw-bold">
              立即預購，享優惠價！
            </h3>
            <h4 class="fs-6 fw-normal mb-0">
              須達成500組，才能啟動生產，您的支持讓有趣的聖經企劃發生！
            </h4>
            <span class="position-absolute top-50 end-0 translate-middle-y" style="left: 100%; border-width: 12px 0px 12px 20px; border-style: solid; border-color: transparent transparent transparent #54FA80; border-radius: 0px 20px 20px 0px;"></span>
          </div>
          <hr class="w-100 border-top my-8" style="border: 5px dotted #8C8C8E;">
          <div class="d-flex flex-column justify-content-between gap-4 mb-8">
            <h4 class="text-center mb-0">一開始讀經時，<br>你是不是也有以下的困擾？</h4>
            <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top object-fit-cover img-fluid rounded" alt="boardGame1" style="max-height: 300px">
          </div>
          <div class="d-flex flex-column justify-content-between gap-8">
            <h4 class="text-center mb-0">設計特點</h4>
            <ol class="list-unstyled d-flex justify-content-center mb-0 gap-4">
              <li class="d-flex g-xl-2 px-xl-5 text-center">
                <div class="d-flex flex-column align-items-center me-xl-6">
                  <div class="bg-info text-white rounded-circle position-relative mb-2 mb-md-3 icon-area">
                    <i class="bi bi-people-fill fs-3 position-absolute top-50 start-50 translate-middle icon"></i>
                  </div>
                  <h5 class="fs-6 fw-bold icon-title">互動性</h5>
                </div>
              </li>
              <li class="d-flex g-xl-2 px-xl-5 text-center">
                <div class="d-flex flex-column align-items-center me-xl-6">
                  <div class="bg-info text-white rounded-circle position-relative mb-2 mb-md-3 icon-area">
                    <i class="bi bi-bag-check-fill fs-3 position-absolute top-50 start-50 translate-middle icon"></i>
                  </div>
                  <h5 class="fs-6 fw-bold icon-title">趣味性</h5>
                </div>
              </li>
              <li class="d-flex g-xl-2 px-xl-5 text-center">
                <div class="d-flex flex-column align-items-center me-xl-6">
                  <div class="bg-info text-white rounded-circle position-relative mb-2 mb-md-3 icon-area">
                    <i class="bi bi-buildings-fill fs-3 position-absolute top-50 start-50 translate-middle icon"></i>
                  </div>
                  <h5 class="fs-6 fw-bold icon-title">知識性</h5>
                </div>
              </li>
            </ol>
            <div class="row row-cols-2">
              <div class="col-6 col-md-8">
                <img src="https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top object-fit-cover img-fluid rounded" alt="boardGame1" style="max-height: 300px">
              </div>
              <div class="col-6 col-md-4">
                <div class="d-flex flex-column gap-2 h-100">
                  <h5 class="fs-5 mb-0">趣味性</h5>
                  <span>將地圖、讀經進度和故事圖卡巧妙融合，幫助您沉浸於聖經世界。</span>
                </div>
              </div>
            </div>
            <div class="row row-cols-2">
              <div class="col-6 col-md-8">
                <img src="https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top object-fit-cover img-fluid rounded" alt="boardGame1" style="max-height: 300px">
              </div>
              <div class="col-6 col-md-4">
                <div class="d-flex flex-column gap-2 h-100">
                  <h5 class="fs-5 mb-0">互動性</h5>
                  <span>通過遊戲，您將逐步閱讀《創世記》1-50章，並深入探索其故事。</span>
                </div>
              </div>
            </div>
            <div class="row row-cols-1 row-cols-lg-2 gy-4">
              <div class="col">
                <div class="card h-100 rounded-5 border border-info-light border-10 p-5">
                  <div class="card-body d-flex flex-column justify-content-between gap-5">
                    <div class="d-flex gap-2">
                      <div class="rounded-circle overflow-hidden" style="width: 50px; height: 50px;">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar1" class="object-fit-cover img-fluid">
                      </div>
                      <div class="d-flex flex-column justify-content-between">
                        <span class="fw-bold">name</span>
                        <small class="fst-italic">2024/03/13</small>
                      </div>
                    </div>
                    <div class="d-flex gap-2">
                      <i class="bi bi-star-fill fs-6"></i>
                      <i class="bi bi-star-fill fs-6"></i>
                      <i class="bi bi-star-fill fs-6"></i>
                      <i class="bi bi-star-fill fs-6"></i>
                      <i class="bi bi-star-fill fs-6"></i>
                    </div>
                    <p class="card-text text-start">原來聖經可以這樣讀！跟著故事圖卡和地圖，一起走入創世記〈1-50章〉，讓讀聖經變真實又有趣！</p>
                    <div class="d-flex gap-2">
                      <span class="badge rounded-pill bg-secondary text-black"># 試玩</span>
                      <span class="badge rounded-pill bg-secondary text-black"># 讀經工具</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 rounded-5 border border-info-light border-10 p-5">
                  <div class="card-body d-flex flex-column justify-content-between gap-5">
                    <div class="d-flex gap-2">
                      <div class="rounded-circle overflow-hidden" style="width: 50px; height: 50px;">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar1" class="object-fit-cover img-fluid">
                      </div>
                      <div class="d-flex flex-column justify-content-between">
                        <span class="fw-bold">name</span>
                        <small class="fst-italic">2024/03/13</small>
                      </div>
                    </div>
                    <div class="d-flex gap-2">
                      <i class="bi bi-star-fill fs-6"></i>
                      <i class="bi bi-star-fill fs-6"></i>
                      <i class="bi bi-star-fill fs-6"></i>
                      <i class="bi bi-star-fill fs-6"></i>
                      <i class="bi bi-star-fill fs-6"></i>
                    </div>
                    <p class="card-text text-start">原來聖經可以這樣讀！跟著故事圖卡和地圖，一起走入創世記〈1-50章〉，讓讀聖經變真實又有趣！</p>
                    <div class="d-flex gap-2">
                      <span class="badge rounded-pill bg-secondary text-black"># 試玩</span>
                      <span class="badge rounded-pill bg-secondary text-black"># 讀經工具</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 方案種類 -->
        <div class="col-md-5 px-xl-4">
          <div class="d-flex flex-column justify-content-between rounded-5 border border-5 border-light p-5 my-5">
            <div class="d-flex gap-2">
              <div class="rounded-circle overflow-hidden" style="width: 50px; height: 50px;">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar1" class="object-fit-cover img-fluid">
              </div>
              <div class="d-flex flex-column justify-content-between">
                <small class="text-dark-gray">提案人</small>
                <span class="text-dark-gray">我們的主日學</span>
              </div>
            </div>
          </div>
          <!-- 預購方案介紹 -->
          <div class="d-flex flex-column justify-content-between rounded-5 border border-5 border-light p-5 gap-3 mb-4">
            <a href="#" class="stretched-link"></a>
            <img src="https://images.unsplash.com/photo-1585084293063-45ae031e7df4?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top object-fit-cover img-fluid rounded" alt="boardGame1" style="max-height: 100px">
            <h3 class="fs-6 text-dark-gray mb-0">雙入組</h3>
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex gap-2">
                <h5 class="fw-bold mb-0">NT$ 1,300</h5>
                <span class="badge bg-info-light text-black">65折</span>
              </div>
              <span class="fs-6 badge bg-danger">剩餘498份</span>
            </div>
            <small class="text-dark-gray">預定售價 NT$ 1,000，現省 NT$ 700</small>
            <ul class="list-unstyled mb-0">
              <li>✧ 中英雙語地圖 x 3 張</li>
              <li>✧ 聖經故事圖卡 x 62 個</li>
              <li>✔ 中英說明書 x 1 份</li>
              <li>✔ 圓形魔鬼氈 x 2 片</li>
            </ul>
            <hr class="w-100 border-top my-1" style="border: 3px dotted #8C8C8E;">
            <ul class="list-unstyled mb-0">
              <li>▶ 製作時程需 3 個月</li>
              <li>▶ 達成目標數量，即啟動生產</li>
              <li>▶ 依預購順序出貨，歡迎團購</li>
              <li>▶ 發票如需開立抬頭/統編，請於備註欄註明</li>
            </ul>
            <hr class="w-100 border-top my-1" style="border: 3px dotted #8C8C8E;">
            <div class="d-flex align-items-center gap-2">
              <i class="bi bi-check-circle-fill text-dark-secondary"></i>
              <small>臺灣本島免運、可寄離島</small>
            </div>
          </div>
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
            <ul class="list-unstyled mb-0">
              <li>✧ 中英雙語地圖 x 3 張</li>
              <li>✧ 聖經故事圖卡 x 62 個</li>
              <li>✔ 中英說明書 x 1 份</li>
              <li>✔ 圓形魔鬼氈 x 2 片</li>
            </ul>
            <hr class="w-100 border-top my-1" style="border: 3px dotted #8C8C8E;">
            <ul class="list-unstyled mb-0">
              <li>▶ 製作時程需 3 個月</li>
              <li>▶ 達成目標數量，即啟動生產</li>
              <li>▶ 依預購順序出貨，歡迎團購</li>
              <li>▶ 發票如需開立抬頭/統編，請於備註欄註明</li>
            </ul>
            <hr class="w-100 border-top my-1" style="border: 3px dotted #8C8C8E;">
            <div class="d-flex align-items-center gap-2">
              <i class="bi bi-check-circle-fill text-dark-secondary"></i>
              <small>臺灣本島免運、可寄離島</small>
            </div>
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

