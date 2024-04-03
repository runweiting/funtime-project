<template>
  <div v-if="tempCollection.length === 0" class="m-3 m-lg-6">
    <div class="container bg-primary rounded-5 p-5 p-md-10" data-aos="fade-up">
      <div class="row">
        <div class="col">
          <div
            class="d-flex flex-column justify-content-center align-items-center gap-5"
          >
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
    <div class="container p-5 p-md-10" data-aos="fade-up">
      <div class="row row-cols-1 row-cols-xl-2">
        <div class="col-xl-9">
          <div class="row row-cols-1">
            <div class="col px-0 px-md-3 mb-3 mb-lg-6">
              <div class="d-flex align-items-baseline gap-2">
                <h2 class="d-none d-sm-block fw-bold mb-0">Collection</h2>
                <h4 class="fw-bold mb-0">收藏清單</h4>
              </div>
            </div>
          </div>
          <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 gy-5 mb-5 mb-md-10 position-relative">
            <div v-for="item in tempCollection" :key="item.product.id" class="col mb-md-0 px-0 px-md-3">
              <div class="card h-100 shadow-sm position-relative" style="cursor: pointer">
                <RouterLink :to="`/product/${item.product.id}/content`" class="stretched-link" />
                  <button @click="handleAddToCollection(item.product)" type="button" class="btn btn-white position-absolute p-0 btn-likes">
                    <i v-if="isLikedList[item.product.id].isLiked === true" class="bi fs-5 bi-heart-fill text-danger">
                    </i>
                    <i v-else class="bi fs-5 bi-heart-fill text-white">
                    </i>
                  </button>
                <img :src="item.product.imageUrl" alt="product-image" class="card-img-top object-fit-cover img-fluid" style="height: 200px;"/>
                <div class="card-body d-flex flex-column justify-content-between">
                  <h5 class="card-title fw-bold">{{ item.product.title }}</h5>
                  <div class="row gx-0 mb-2">
                    <div class="col-4">
                      <div class="h-100 pt-4">
                        <small class="fst-italic text-gray-dark">累計</small>
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="d-flex justify-content-end align-items-baseline gap-2">
                        <count-to
                          :startVal="countStart"
                          :endVal="countEnd"
                          :duration="5000"
                          class="display-1 fst-italic fw-bold"
                        ></count-to>
                        <div class="d-flex align-items-center gap-2">
                          <small class="fst-italic fw-bold">個</small>
                          <i class="bi bi-heart-fill text-danger"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-end gap-2">
                    <div v-for="(tag, index) in item.product.tags" :key="index">
                      <span class="badge rounded-pill bg-primary text-white" style="right: 16px; bottom: 16px">{{ `# ${tag}` }}</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col bg-secondary rounded-5 position-absolute z-index-n1 d-none d-md-block"
              style="bottom: -20px; width: 100%; height: 40px"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { CountTo } from "vue3-count-to";
import userProductsStore from "@/stores/front/userProductsStore";
import userLikesStore from "@/stores/front/userLikesStore";

export default {
  components: {
    CountTo,
  },
  data() {
    return {
      // count-to
      countStart: 0,
      countEnd: 50,
      // 指定商品
      product: {},
    };
  },
  mounted() {
    this.getProducts();
  },
  computed: {
    ...mapState(userProductsStore, ["productList", 'isLikedList']),
    ...mapState(userLikesStore, ['tempCollection'])
  },
  methods: {
    ...mapActions(userProductsStore, ["getProducts"]),
    ...mapActions(userLikesStore, ['addToCollection', 'removeCollection']),
    handleAddToCollection(product) {
      this.isLikedList[product.id].isLiked = !this.isLikedList[product.id].isLiked;
      if (this.isLikedList[product.id].isLiked === true) {
        this.addToCollection(product);
      } else if (this.isLikedList[product.id].isLiked === false) {
        this.removeCollection(product.id);
      }
    }
  },
};
</script>