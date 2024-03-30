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
          <h2 class="fs-4 card-title fw-bold">{{ product.title }}</h2>
        </div>
      </div>
      <div class="row row-cols-1 py-2 p-xl-4 row-cols-xl-2">
        <div class="col-xl-7 px-xl-4">
          <div class="h-100 d-flex flex-column justify-content-between gap-4">
            <img :src="product.imageUrl" class="card-img-top object-fit-cover img-fluid rounded" alt="boardGame1" style="max-height: 400px">
            <div class="d-flex flex-column flex-sm-row justify-content-sm-between gap-2 mb-2">
              <div class="d-flex gap-2">
                <span v-for="(tag, index) in product.tags" :key="index" class="badge rounded-pill bg-primary text-white"># {{ tag }}</span>
              </div>
              <div class="d-flex align-items-baseline gap-3">
                <small class="text-dark-gray">提案人</small>
                <small class="text-dark-gray">{{ product.proposer }}</small>
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
                    <small class="text-dark-gray">目標 {{ product.target_units }} 組</small>
                    <div v-for="(item, index) in productQtyMap" :key="index">
                      <h3 v-if="product.id === index" class="fw-bold mt-2 mb-0">累計 {{ item.productQty }} 組</h3>
                    </div>
                  </div>
                  <div class="fst-italic">
                    <small class="text-dark-gray text-start">預購人數</small>
                    <div v-for="(item, index) in productQtyMap" :key="index">
                      <h3 v-if="product.id === index" class="fw-bold mt-2 mb-0 text-end">{{ item.orderQty }} 人</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-7">
                <div v-for="(item, itemId) in productQtyMap" :key="itemId" class="d-flex justify-content-between align-items-center">
                  <div v-if="product.id === itemId" class="progress" style="width: 85%;">
                      <div v-if="product.id === itemId" ref="progressBar" class="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" :style="{ width: ((item.productQty / product.target_units) * 100).toFixed(2) + '%' }"></div>
                  </div>
                  <div v-if="product.id === itemId">
                    <small class="fw-bold">{{ (item.productQty / product.target_units).toFixed(2) * 100 }}%</small>
                  </div>
                </div>
              </div>
            </div>
            <p class="card-text mb-0 text-gray-dark">{{ product.description }}</p>
            <div class="d-flex flex-xl-row gap-4">
              <div v-for="(feature, index) in product.features" :key="index" class="d-flex justify-content-center gap-1">
                <i class="bi bi-lightning-fill text-primary" v-if="index === 0"></i>
                <i class="bi bi-people-fill text-primary" v-else-if="index === 1"></i>
                <i class="bi bi-flag-fill text-primary" v-else></i>
                <small class="text-dark-gray">{{ feature }}</small>
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
            <router-link :to="`/activities`" class="btn btn-primary flex-fill hvr-pop">報名試玩</router-link>
            <router-link :to="`/cart/${product.id}`" class="btn btn-primary flex-fill hvr-pop">登記預購</router-link>
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
            <router-link :to="`/activities`" class="btn btn-primary flex-fill hvr-pop">報名試玩</router-link>
            <router-link :to="`/cart/${product.id}`" class="btn btn-primary flex-fill hvr-pop">登記預購</router-link>
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
              須達成{{ product.target_units }}組，才能啟動生產，您的支持讓有趣的聖經企劃發生！
            </h4>
            <span class="position-absolute top-50 end-0 translate-middle-y" style="left: 100%; border-color: transparent transparent transparent #54FA80; border-style: solid; border-width: 12px 0 12px 20px; border-radius: 0 20px 20px 0;"></span>
          </div>
          <hr class="w-100 border-top my-8" style="border: 5px dotted #8C8C8E;">
          <div class="d-flex flex-column justify-content-between gap-4 mb-8">
            <h4 class="text-center mb-0">{{ product.question }}</h4>
            <img :src="product.imageUrl" class="card-img-top object-fit-cover img-fluid rounded" style="max-height: 300px">
          </div>
          <div class="d-flex flex-column justify-content-between gap-8">
            <h4 class="text-center mb-0">設計特點</h4>
            <ol class="list-unstyled d-flex justify-content-center mb-0 gap-4">
              <li v-for="(point, index) in product.points" :key="index" class="d-flex g-xl-2 px-xl-5 text-center">
                <div class="d-flex flex-column align-items-center me-xl-6">
                  <div class="bg-info text-white rounded-circle position-relative mb-2 mb-md-3 icon-area">
                    <i class="bi bi-people-fill fs-3 position-absolute top-50 start-50 translate-middle icon" v-if="index === 0"></i>
                    <i class="bi bi-bag-check-fill fs-3 position-absolute top-50 start-50 translate-middle icon" v-else-if="index === 1"></i>
                    <i class="bi bi-buildings-fill fs-3 position-absolute top-50 start-50 translate-middle icon" v-else></i>
                  </div>
                  <h5 class="fs-6 fw-bold icon-title">{{ point.title }}</h5>
                </div>
              </li>
            </ol>
            <div v-for="(point, index) in product.points" :key="index" class="row row-cols-2">
              <div class="col-6 col-md-8">
                <img :src="point.imageUrl" class="card-img-top object-fit-cover img-fluid rounded" style="max-height: 300px">
              </div>
              <div class="col-6 col-md-4">
                <div class="d-flex flex-column gap-2 h-100">
                  <h5 class="fs-5 mb-0">{{ point.title }}</h5>
                  <span>{{ point.content }}</span>
                </div>
              </div>
            </div>
            <!-- feedback -->
            <div class="row row-cols-1 row-cols-lg-2 gy-4">
              <div class="col">
                <div class="card h-100 rounded-5 border border-info-light border-10 p-5">
                  <div class="card-body d-flex flex-column justify-content-between gap-5">
                    <div class="d-flex gap-2">
                      <div class="rounded-circle overflow-hidden" style="width: 50px; height: 50px;">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar1" class="object-fit-cover img-fluid">
                      </div>
                      <div class="d-flex flex-column justify-content-between text-start">
                        <span class="fw-bold">王大衛</span>
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
                        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar1" class="object-fit-cover img-fluid">
                      </div>
                      <div class="d-flex flex-column justify-content-between text-start">
                        <span class="fw-bold">謝安娜</span>
                        <small class="fst-italic">2024/01/11</small>
                      </div>
                    </div>
                    <div class="d-flex gap-2">
                      <i class="bi bi-star-fill fs-6"></i>
                      <i class="bi bi-star-fill fs-6"></i>
                      <i class="bi bi-star-fill fs-6"></i>
                      <i class="bi bi-star-fill fs-6"></i>
                      <i class="bi bi-star-fill fs-6"></i>
                    </div>
                    <p class="card-text text-start">全新聖經體驗，探索不一樣的聖經之旅！重新感受這段聖經故事的魅力，發現聖經的讀書體驗更加生動有趣！</p>
                    <div class="d-flex gap-2">
                      <span class="badge rounded-pill bg-secondary text-black"># 團契生活</span>
                      <span class="badge rounded-pill bg-secondary text-black"># 試玩</span>
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
                <span class="text-dark-gray">{{ product.proposer }}</span>
              </div>
            </div>
          </div>
          <!-- 預購方案介紹 -->
          <div class="position-lg-sticky">
            <div v-for="(item, index) in product.packages" :key="index" class="d-flex flex-column justify-content-between rounded-5 border border-5 border-light p-5 gap-3 mb-4 position-relative" style="cursor: pointer;">
              <router-link :to="`/cart/${product.id}`" class="stretched-link"></router-link>
              <img :src="product.imageUrl" class="card-img-top object-fit-cover img-fluid rounded" alt="boardGame1" style="max-height: 100px">
              <h3 class="fs-6 text-dark-gray mb-0">{{ item.name }}</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex gap-2">
                  <h5 class="fw-bold mb-0">NT$ {{ product.origin_price * product.discount * item.units }}</h5>
                  <span class="badge bg-info-light text-black">{{ product.discount * 100 }}折</span>
                </div>
                <div v-for="(item, index) in productQtyMap" :key="index">
                  <span v-if="product.id === index" class="fs-6 badge bg-danger">剩餘{{ product.target_units - item.productQty }}份</span>
                </div>
              </div>
              <small class="text-dark-gray">預定售價 <del>NT$ {{ product.origin_price }}</del>，現省 NT$ {{ (product.origin_price - (product.origin_price * product.discount)) * item.units }}</small>
              <ul class="list-unstyled mb-0">
                <li v-for="(content, index) in product.contents" :key="index">{{ content }}</li>
              </ul>
              <hr class="w-100 border-top my-1" style="border: 3px dotted #8C8C8E;">
              <ul class="list-unstyled mb-0">
                <li v-for="(note, index) in product.notes" :key="index">{{ note }}</li>
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
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userProductsStore from '@/stores/front/userProductsStore';
import userOrderStore from '@/stores/front/userOrderStore';

export default {
  mounted() {
    const { id } = this.$route.params;
    this.getProduct(id);
    this.getOrders();
  },
  computed: {
    ...mapState(userProductsStore, ['product']),
    ...mapState(userOrderStore, ['productQtyMap'])
  },
  methods: {
    ...mapActions(userProductsStore, ['getProduct']),
    ...mapActions(userOrderStore, ['getOrders']),
  },
};
</script>