<template>
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
          <div class="h-100 d-flex flex-column justify-content-between gap-4 position-relative">
            <button @click="handleCollection(product)" type="button" class="btn btn-white position-absolute p-0 btn-likes hvr-pop">
              <i v-if="preferenceState[product.id]?.isLiked === false" class="bi fs-5 bi-heart-fill text-white"></i>
              <i v-else class="bi fs-5 bi-heart-fill text-danger"></i>
            </button>
            <img :src="product.imageUrl" class="card-img-top object-fit-cover img-fluid rounded" :alt="product.short_title + '商品主圖'" style="max-height: 400px">
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
                      <h3 v-if="product.id === index" class="fw-bold mt-2 mb-0">{{ item.orderQty }} 人</h3>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mx-3 mx-lg-10">
    <div class="container bg-light-gray rounded-5 px-6 py-3 px-lg-12 px-xl-15">
      <div class="row row-cols-1 row-cols-lg-2 align-items-center">
        <div class="col-lg-7">
          <ul class="list-unstyled d-flex gap-6 mb-0">
            <li>
              <RouterLink :to="{ name: 'product-content' }" class="text-gray text-decoration-none hvr-pop">專案內容</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'product-faq' }" class="text-gray text-decoration-none hvr-pop">常見問答</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'product-message' }" class="text-gray text-decoration-none hvr-pop">留言</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="mx-3 mx-lg-10">
    <div class="container px-lg-12">
      <div class="row row-cols-1 py-2 p-xl-4 pt-xl-8 row-cols-md-2">
        <RouterView />
        <div class="col-md-5 px-xl-4">
          <div class="d-flex flex-column justify-content-between rounded-5 border border-5 border-light p-5 my-5">
            <div class="d-flex gap-2">
              <div class="rounded-circle overflow-hidden" style="width: 50px; height: 50px;">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" :alt="product.proposer + 'logo'" class="object-fit-cover img-fluid">
              </div>
              <div class="d-flex flex-column justify-content-between">
                <small class="text-dark-gray">提案人</small>
                <span class="text-dark-gray">{{ product.proposer }}</span>
              </div>
            </div>
          </div>
          <div class="position-lg-sticky" id="targetSection">
            <div v-for="(item, index) in product.packages" :key="index" class="d-flex flex-column justify-content-between rounded-5 border border-5 border-light p-5 gap-3 mb-4 position-relative hvr-card shadow-sm" style="cursor: pointer;">
              <a @click="handleAddToCart(product.id, item.units)" class="stretched-link"></a>
              <img :src="product.imageUrl" :alt="product.short_title + 
              '商品主圖'" class="card-img-top object-fit-cover img-fluid rounded" style="max-height: 100px">
              <div class="d-flex justify-content-between align-items-center">
                <h3 class="fs-6 text-dark-gray mb-0">{{ item.name }}</h3>
                <span v-if="productQtyMap[product.id]" class="d-none d-md-block fs-6 badge bg-danger">剩 {{ product.target_units - (productQtyMap[product.id].productQty) }} 組</span>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex gap-2">
                  <h5 class="fw-bold mb-0">NT$ {{ product.origin_price * product.discount * item.units }}</h5>
                  <span class="badge bg-info-light text-black">{{ product.discount * 100 }}折</span>
                </div>
                <span v-if="productQtyMap[product.id]" class="d-md-none fs-6 badge bg-danger">剩 {{ product.target_units - (productQtyMap[product.id].productQty) }} 組</span>
              </div>
              <small class="text-dark-gray">預定售價 <del>NT$ {{ product.origin_price }}</del>，現省 NT$ {{ (product.origin_price - (product.origin_price * product.discount)) * item.units }}</small>
              <div>
                <small class="text-dark-gray">一組內含：</small>
                <ul class="list-unstyled mb-0">
                  <li v-for="(content, index) in product.contents" :key="index">{{ content }}</li>
                </ul>
              </div>
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
import userCartStore from '@/stores/front/userCartStore';
import userOrderStore from '@/stores/front/userOrderStore';
import userLikesStore from "@/stores/front/userLikesStore";
import showErrorToast from '@/utils/showErrorToast';

export default {
  mounted() {
    const { id } = this.$route.params;
    this.getProduct(id);
    this.getOrders();
    this.calculateQty();
    this.initPreferenceState();
  },
  computed: {
    ...mapState(userProductsStore, ['product']),
    ...mapState(userOrderStore, ['productQtyMap']),
    ...mapState(userCartStore, ['cartList']),
    ...mapState(userLikesStore, ['preferenceState'])
  },
  methods: {
    ...mapActions(userProductsStore, ['getProduct']),
    ...mapActions(userOrderStore, ['getOrders', 'calculateQty']),
    ...mapActions(userCartStore, ['addToCart', 'getCart']),
    ...mapActions(userLikesStore, ['initPreferenceState', 'addToCollection', 'removeCollection']),
    async handleAddToCart(productId, cartQty) {
      try {
        this.addToCart(productId, cartQty);
        await this.getCart(productId);
        this.$router.push({ name: "cart", params: { id: productId, units: cartQty } });
      } catch(err) {
        showErrorToast(err);
      };
    },
    handleCollection(product) {
      this.preferenceState[product.id].isLiked = !this.preferenceState[product.id].isLiked;
      if (this.preferenceState[product.id].isLiked === true) {
        this.addToCollection(product);
      } else if (this.preferenceState[product.id].isLiked === false) {
        this.removeCollection(product.id);
      }
    }
  },
}
</script>

<style lang="scss">
.text-gray.active {
  color: black !important;
}
</style>