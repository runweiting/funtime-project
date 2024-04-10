<template>
  <div v-if="tempCollection.length === 0" class="m-3 m-lg-6">
    <div class="container bg-primary rounded-5 p-5 p-md-10" data-aos="fade-up">
      <div class="row">
        <div class="col">
          <div class="d-flex flex-column justify-content-center align-items-center gap-5">
            <h2 class="fs-1 text-white fw-bold mb-0">收藏清單</h2>
            <h5 class="text-white responsive-lh-ls text-normal mb-0">
              目前沒有收藏的企劃喔，快去按愛心吧！
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="m-3 m-lg-6">
    <div class="container bg-primary rounded-5 p-5 p-md-10" data-aos="fade-up">
      <div class="row">
        <div class="col">
          <div
            class="d-flex flex-column justify-content-center align-items-center gap-5"
          >
            <h2 class="fs-1 text-white fw-bold mb-0">收藏清單</h2>
            <h5 class="text-white responsive-lh-ls text-normal mb-0">
              你收藏的企劃在這裡！
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="m-3 m-lg-6">
    <div class="container p-5 p-md-10">
      <div class="row row-cols-1">
        <div class="col px-0 px-md-3 mb-3 mb-lg-6">
          <div class="d-flex align-items-baseline gap-2">
            <h2 class="d-none d-sm-block fw-bold mb-0">Collection</h2>
            <h4 class="fw-bold mb-0">收藏清單</h4>
          </div>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gy-5 position-relative">
        <div v-for="(item, index) in tempCollection" :key="index" class="col mb-md-0 px-md-3">
          <div class="card h-100 shadow position-relative hvr-grow" style="cursor: pointer">
            <RouterLink :to="`/product/${item.product.id}/content`" class="stretched-link" />
            <button @click="handleCollection(item.product, item.product.id)" type="button" class="btn btn-white position-absolute p-0 btn-likes hvr-pop">
              <i v-if="preferenceState[item.product.id]?.isLiked === false" class="bi fs-5 bi-heart-fill text-white"></i>
              <i v-else class="bi fs-5 bi-heart-fill text-danger"></i>
            </button>
            <img :src="item.product.imageUrl" :alt="item.product.short_title + '商品主圖'" class="card-img-top object-fit-cover img-fluid" style="min-height: 200px;"/>
            <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="card-title fw-bold">{{ item.product.title }}</h5>
              <div class="row gx-0 mb-2">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center gap-2 ">
                    <small class="fst-italic">目標 {{ item.product.target_units }} 組</small>
                    <small class="text-dark-gray">/</small>
                    <small v-if="productQtyMap[item.product.id]" class="fst-italic"> 累計 {{ productQtyMap[item.product.id].orderQty }} 組</small>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-end gap-2">
                <div v-for="(tag, index) in item.product.tags" :key="index">
                  <span class="badge rounded-pill bg-primary text-white" style="right: 16px; bottom: 16px">{{ `# ${tag}` }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col bg-secondary rounded-5 position-absolute z-index-n1 d-none d-md-block" style="bottom: -20px; width: 100%; height: 40px"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import userOrderStore from "@/stores/front/userOrderStore";
import userLikesStore from "@/stores/front/userLikesStore";

export default {
  data() {
    return {
      tempCollection: []
    }
  },
  mounted() {
    this.calculateQty();
    this.initPreferenceState();
    this.getTempCollection();
  },
  computed: {
    ...mapState(userOrderStore, ['productQtyMap']),
    ...mapState(userLikesStore, ['preferenceState'])
  },
  methods: {
    ...mapActions(userOrderStore, ['calculateQty']),
    ...mapActions(userLikesStore, ['initPreferenceState', 'addToCollection', 'removeCollection']),
    getTempCollection() {
      const collection = JSON.parse(localStorage.getItem("tempCollection"));
      this.tempCollection = collection;
    },
    handleCollection(product, productId) {
      if (this.preferenceState[productId].isLiked === false) {
        this.addToCollection(product);
        this.getTempCollection();
      } else if (this.preferenceState[productId].isLiked === true) {
        this.removeCollection(productId);
        this.getTempCollection();
      };
    },
  },
};
</script>