<template>
  <!-- landing page -->
  <div class="m-3 m-lg-6">
      <div class="container py-3 px-lg-8 py-lg-10" data-aos="fade-up">
          <div class="row">
              <div class="col col-lg-6 col-xl-4">
                  <img src="/dazzle-woman-stands-with-her-back-with-a-magnifying-glass.png" alt="woman-stands-with-her-back-with-a-magnifying-glass" class="object-fit-cover img-fluid">
              </div>
              <div class="col col-lg-6 col-xl-4 d-flex flex-column justify-content-center align-items-center gap-2 text-center">
                  <h1 class="display-1 pt-5 fw-bold d-none d-sm-block">funtime</h1>
                  <h2 class="display-6 fw-bold">讓有趣的聖經企劃發生</h2>
                  <h5 class="d-none d-md-block">和你一起探索信仰的美好</h5>
                  <RouterLink :to="{ name: 'products' }" class="btn btn-primary btn-lg hvr-pop">探索企劃</RouterLink>
              </div>
              <div class="d-none col-xl-4 d-xl-block text-end">
                  <img src="/dazzle-man-getting-ready-for-arm-wrestling.png" alt="man-getting-ready-for-arm-wrestling" class="object-fit-cover img-fluid">
              </div>
          </div>
      </div>
  </div>
  <!-- funtime 是什麼？ -->
  <div class="m-3 m-lg-6">
      <div class="container bg-secondary rounded-5 p-10 p-md-30" data-aos="fade-up">
          <div class="row row-cols-1 g-1 row-cols-md-2 g-4">
              <div class="col d-flex flex-column justify-content-center text-sm-center text-md-start">
                  <h2 class="fw-bold mb-5">funtime 是什麼?</h2>
                  <h5 class="h5-lh-ls">
                      <strong>funtime</strong> 是一個預購集資平台，<br class="d-md-none d-xl-block d-414-none">發佈各種好玩有趣的創意企劃，<br class="d-md-none d-xl-block d-414-none">
                      歡迎每一位喜歡讀聖經的人們！
                  </h5>
              </div>
              <div class="col">
                  <div class="text-center">
                      <img src="/bouncy-open-book-glasses-and-stars.gif" alt="open-book-glasses-and-stars" class="object-fit-cover img-fluid" style="max-height: 290px;">
                  </div>
              </div>
          </div>
      </div>
  </div>
  <!-- 總覺得認識聖經可以更有趣？ -->
  <div class="m-3 m-lg-6">
      <div class="container pt-10 pt-lg-20" data-aos="fade-up">
          <div class="row mb-10 text-center">
              <div class="col">
                  <h3 class="fw-bold">總覺得</h3>
                  <h2 class="display-6 fw-bold">認識聖經可以更有趣？</h2>
              </div>
          </div>
          <div class="row row-cols-1 row-cols-lg-3 gy-5 g-xl-5 text-center">
              <div class="col">
                  <div class="card h-100 rounded-5 border border-info-light border-10 p-5 p-md-10">
                      <div class="overflow-hidden" style="height: 182px;">
                          <img src="/dazzle-man-with-light-bulb-generating-ideas.png" alt="man-with-light-bulb-generating-ideas" class="object-fit-cover img-fluid">
                      </div>
                      <div class="card-body">
                          <h5 class="card-title">想要發現聖經的智慧</h5>
                      </div>
                  </div>
              </div>
              <div class="col">
                  <div class="card h-100 rounded-5 border border-info-light border-10 p-5 p-md-10">
                      <div class="d-flex justify-content-center align-items-center" style="height: 182px">
                          <img src="/dazzle-two-books-with-a-bookmark.gif" alt="two-books-with-a-bookmark" class="object-fit-cover w-50">
                      </div>
                      <div class="card-body">
                          <h5 class="card-title">更多認識歷史和地理</h5>
                      </div>
                  </div>
              </div>
              <div class="col">
                  <div class="card h-100 rounded-5 border border-info-light border-10 p-5 p-md-10">
                      <div class="overflow-hidden" style="height: 182px;">
                          <img src="/dazzle-success.gif" alt="two-people-hi-five" class="object-fit-cover img-fluid">
                      </div>
                      <div class="card-body">
                          <h5 class="card-title">一起學習聖經的真理</h5>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <!-- 你的支持 -->
  <div class="m-3 m-lg-6">
      <div class="container px-5" data-aos="fade-up">
          <div class="row row-cols-1 g-4 row-cols-md-2 mt-3 mt-lg-6 pt-10 p-md-20 pb-md-10">
              <div class="col d-flex flex-column justify-content-center text-center text-md-start px-xl-6">
                  <h3 class="fw-bold">你的支持</h3>
                  <h2 class="display-6 fw-bold mb-4 mb-lg-8 mb-xl-12">讓有價值的企劃得以實現</h2>
                  <div class="d-none d-md-flex gap-md-4 gap-lg-8">
                      <RouterLink :to="{ name: 'activities' }" class="btn btn-primary btn-lg hvr-pop">參與試玩</RouterLink>
                      <RouterLink :to="{ name: 'products' }" class="btn btn-primary btn-lg hvr-pop">探索企劃</RouterLink>
                  </div>
              </div>
              <div class="col">
                  <div class="text-center">
                      <img src="/dazzle-girl-sitting-on-a-box-and-choosing-products-in-online-shop.gif" alt="girl-sitting-on-a-box-and-choosing-products-in-online-shop" class="object-fit-cover img-fluid" style="max-height: 290px;">
                  </div>
              </div>
          </div>
          <div class="row pb-10 pb-md-20">
              <div class="col">
                  <ol class="list-unstyled d-flex justify-content-center mb-sm-5 mb-md-0">
                      <li class="d-flex g-xl-2 px-xl-5 text-center">
                          <div class="d-flex flex-column align-items-center me-xl-6">
                              <div class="bg-info text-white rounded-circle position-relative mb-2 mb-md-3  icon-area">
                                  <i class="bi bi-people-fill fs-3 position-absolute top-50 start-50 translate-middle icon"></i>
                              </div>
                              <h5 class="fw-bold icon-title">參與<br class="d-sm-block d-md-none">試玩</h5>
                              <h6 class="d-none d-md-block fw-normal text-dark-gray">讓我們知道<br>你的想法</h6>
                          </div>
                          <div class="d-flex justify-content-center align-items-center icon-area">
                              <i class="bi bi-arrow-right-short text-black fs-1 icon"></i>
                          </div>
                      </li>
                      <li class="d-flex g-xl-2 px-xl-5 text-center">
                          <div class="d-flex flex-column align-items-center me-xl-6">
                              <div class="bg-info text-white rounded-circle position-relative mb-2 mb-md-3 icon-area">
                                  <i class="bi bi-bag-check-fill  fs-3 position-absolute top-50 start-50 translate-middle icon"></i>
                              </div>
                              <h5 class="fw-bold icon-title">加入<br class="d-sm-block d-md-none">預購</h5>
                              <h6 class="d-none d-md-block fw-normal text-dark-gray">立即登記<br>享有優惠價</h6>
                          </div>
                          <div class="d-flex justify-content-center align-items-center icon-area">
                              <i class="bi bi-arrow-right-short text-black fs-1 icon"></i>
                          </div>
                      </li>
                      <li class="d-flex g-xl-2 px-xl-5 text-center">
                          <div class="d-flex flex-column align-items-center me-xl-6">
                              <div class="bg-info text-white rounded-circle position-relative mb-2 mb-md-3 icon-area">
                                  <i class="bi bi-buildings-fill  fs-3 position-absolute top-50 start-50 translate-middle icon"></i>
                              </div>
                              <h5 class="fw-bold icon-title">集資<br class="d-sm-block d-md-none">成功</h5>
                              <h6 class="d-none d-md-block fw-normal text-dark-gray">即啟動生產<br>依約定完成</h6>
                          </div>
                          <div class="d-flex justify-content-center align-items-center icon-area">
                              <i class="bi bi-arrow-right-short text-black fs-1 icon"></i>
                          </div>
                      </li>
                      <li class="d-flex g-xl-2 px-xl-5 text-center">
                          <div class="d-flex flex-column align-items-center me-xl-6">
                              <div class="bg-info text-white rounded-circle position-relative mb-2 mb-md-3 icon-area">
                                  <i class="bi bi-alarm-fill fs-3 position-absolute top-50 start-50 translate-middle icon"></i>
                              </div>
                              <h5 class="fw-bold icon-title">通知<br class="d-sm-block d-md-none">付款</h5>
                              <h6 class="d-none d-md-block fw-normal text-dark-gray">通知結帳<br>完成付款</h6>
                          </div>
                          <div class="d-flex justify-content-center align-items-center icon-area">
                              <i class="bi bi-arrow-right-short text-black fs-1 icon"></i>
                          </div>
                      </li>
                      <li class="d-flex g-xl-2 px-xl-5 text-center">
                          <div class="d-flex flex-column align-items-center me-xl-6">
                              <div class="bg-info text-white rounded-circle position-relative mb-2 mb-md-3 icon-area">
                                  <i class="bi bi-box-seam-fill fs-3 position-absolute top-50 start-50 translate-middle icon"></i>
                              </div>
                              <h5 class="fw-bold icon-title">出貨</h5>
                              <h6 class="d-none d-md-block fw-normal text-dark-gray">確認款項<br>依序出貨</h6>
                          </div>
                      </li>
                  </ol>
                  <div class="d-md-none p-lg-10 text-center">
                      <RouterLink :to="{ name: 'activities' }" class="btn btn-primary btn-lg me-5 me-sm-10 hvr-pop">參與試玩</RouterLink>
                      <RouterLink :to="{ name: 'products' }" class="btn btn-primary btn-lg hvr-pop">探索企劃</RouterLink>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <!-- 最新企劃 -->
  <div class="m-3 m-lg-6">
    <div class="container rounded-5 border border-secondary border-10 p-10 p-md-20" data-aos="fade-up">
      <!-- 最新企劃 -->
      <div class="row my-3 my-lg-6">
        <div class="col px-0 px-md-3">
          <div class="d-flex justify-content-between">
            <div class="d-flex align-items-baseline gap-2">
              <h2 class="d-none d-sm-block fw-bold mb-0">What's news?</h2>
              <h3 class="fw-bold mb-0">最新企劃</h3>
            </div>
            <RouterLink :to="{ name: 'products' }" class="btn btn-primary hvr-pop">更多 <i class="bi bi-chevron-right text-white"></i>
            </RouterLink>
          </div>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 gy-6">
        <div v-for="product in productList" :key="product.id" class="col mb-5 mb-md-0 px-0 px-md-3">
          <div class="card h-100 shadow-sm position-relative" style="cursor: pointer;">
            <RouterLink :to="`/product/${product.id}/content`" class="stretched-link" />
            <button type="button" class="btn position-absolute p-0 hvr-pulse">
              <i class="bi bi-heart-fill fs-5"></i>
            </button>
            <div class="rounded-circle bg-black position-absolute d-flex flex-column justify-content-center align-items-center gap-0 z-index-9 shadow-sm hvr-pop" style="top: 16px;left: 16px;width: 65px; height: 65px; transform: rotate(-10deg);">
              <span class="text-white fw-bold fs-6" >試玩</span>
              <small class="text-white" >報名中</small>
            </div>
            <img :src="product.imageUrl" alt="product-image" class="card-img-top object-fit-cover img-fluid" style="height: 200px;">
            <div class="card-body d-flex flex-column justify-content-between">
              <div class="mb-4">
                <h5 class="card-title fw-bold">{{ product.title }}</h5>
                <p class="card-text text-dark-gray">{{ product.description }}</p>
              </div>
              <div class="mb-4">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <div v-if="productQtyMap[product.id]" class="progress" style="width: 85%;">
                    <div ref="progressBar" class="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" :style="{ width: ((productQtyMap[product.id].productQty / product.target_units) * 100).toFixed(1) + '%' }"></div>
                  </div>
                  <div v-else class="progress" style="width: 85%;">
                    <div ref="progressBar" class="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" :style="{ width: 0 + '%' }"></div>
                  </div>
                  <div v-if="productQtyMap[product.id]">
                    <small class="fw-bold">{{ ((productQtyMap[product.id].productQty / product.target_units) * 100).toFixed(1) }}%</small>
                  </div>
                  <div v-else>
                    <small class="fw-bold">{{ 0 }}%</small>
                  </div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center gap-2">
                    <small class="fst-italic">目標 {{ product.target_units }} 組</small>
                    <small class="text-dark-gray">/</small>
                    <small v-if="productQtyMap[product.id]" class="fst-italic"> 累計 {{ productQtyMap[product.id].orderQty }} 組</small>
                  </div>
                  <small class="d-flex align-items-center gap-2 fst-italic fw-bold">
                    <span>20 <i class="bi bi-heart-fill text-danger"></i>
                    </span>
                    <span>20 <i class="bi bi-chat-fill text-gray"></i>
                    </span>
                  </small>
                </div>
              </div>
              <div class="d-flex justify-content-end gap-2">
                <div v-for="(tag, index) in product.tags" :key="index">
                  <span class="badge rounded-pill bg-primary text-white" style="right: 16px;bottom: 16px;">{{ `# ${tag}` }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 其他人怎麼說 -->
  <FeedbackSwiper />
  <!-- 常見問題 -->
  <FaqAccordion />
</template>

<script>
import { mapState, mapActions } from 'pinia';
import FeedbackSwiper from '@/components/front/FeedbackSwiper.vue';
import FaqAccordion from '@/components/front/FaqAccordion.vue';
import userProductsStore from "@/stores/front/userProductsStore";
import userOrderStore from '@/stores/front/userOrderStore';

export default {
  components: {
    FeedbackSwiper,
    FaqAccordion,
  },
  mounted() {
    this.getProducts();
    this.calculateQty();
  },
  computed: {
    ...mapState(userProductsStore, ['productList']),
    ...mapState(userOrderStore, ['productQtyMap'])
  },
  methods: {
    ...mapActions(userProductsStore, ['getProducts']),
    ...mapActions(userOrderStore, ['calculateQty'])
  }
}
</script>