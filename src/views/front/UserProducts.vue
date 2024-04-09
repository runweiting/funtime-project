<template>
  <div class="m-3 m-lg-6">
    <div class="container bg-primary rounded-5 p-5 p-md-10" data-aos="fade-up">
      <div class="row">
        <div class="col">
          <div
            class="d-flex flex-column justify-content-center align-items-center gap-5"
          >
            <h2 class="fs-1 text-white fw-bold mb-0">企劃排名</h2>
            <h5 class="text-white responsive-lh-ls text-normal mb-0">
              對喜歡的企劃按贊、留言，增加人氣，告訴我們你的想法，一起探索信仰的美好！
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="m-3 m-lg-6">
    <div class="container p-5 p-md-10">
      <div class="row">
        <div class="col">
          <div class="row row-cols-1">
            <div class="col px-0 px-md-3 mb-3 mb-lg-6">
              <div class="d-flex align-items-baseline gap-2">
                <h2 class="d-none d-sm-block fw-bold mb-0">Ranking</h2>
                <h4 class="fw-bold mb-0">企劃排名</h4>
              </div>
            </div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 gy-5 position-relative">
            <div v-for="product in productList" :key="product.id" class="col">
              <div class="card h-100 shadow hvr-grow" style="cursor: pointer">
                <RouterLink :to="`/product/${product.id}/content`" class="stretched-link"/>
                <button @click="handleCollection(product)" type="button" class="btn btn-white position-absolute p-0 btn-likes hvr-pop">
                  <i v-if="preferenceState[product.id]?.isLiked === false" class="bi fs-5 bi-heart text-white"></i>
                  <i v-else class="bi fs-5 bi-heart-fill text-danger"></i>
                </button>
                <div class="d-flex justify-content-center align-items-center position-absolute" style="top: 16px;left: 16px;width: 50px; height: 50px;">
                  <div class="rounded-circle hvr-ranking" style="width: 100%; height: 100%; border: 2px dotted white;">
                  </div>
                  <i :class="getRankClass(product.id)" class="fs-1 text-white position-absolute bi"></i>
                </div>
                <img :src="product.imageUrl" :alt="product.title + '商品主圖'" class="card-img-top object-fit-cover img-fluid" style="min-height: 150px"/>
                <div class="card-body d-flex flex-column justify-content-between">
                  <h5 class="card-title fw-bold">{{ product.title }}</h5>
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
                          :endVal="product.likes"
                          :duration="5000"
                          class="display-3 fst-italic fw-bold"
                        ></count-to>
                        <div class="d-flex align-items-center gap-2">
                          <small class="fst-italic fw-bold">個</small>
                          <i class="bi bi-heart-fill text-danger"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-end gap-2">
                    <div v-for="(tag, index) in product.tags" :key="index">
                      <span class="badge rounded-pill bg-primary text-white" style="right: 16px; bottom: 16px">{{ `# ${tag}` }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col bg-secondary rounded-5 position-absolute z-index-n1 d-none d-md-block" style="bottom: -20px; width: 100%; height: 40px"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import userLikesStore from "@/stores/front/userLikesStore";
import { CountTo } from "vue3-count-to";

export default {
  components: {
    CountTo,
  },
  data() {
    return {
      // count-to
      countStart: 0,
      // tempPreferenceState: {},
      // 前三名模擬資料
      productList: [
        {
          "id": "-NtcB4bysPThWL4yjgxt",
          "imageUrl": "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?q=80&w=450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "title": "《舊約先知扮演卡牌》",
          "tags": ["小組團契", "讀經工具"],
          "likes": 100,
        },
        {
          "id": "-Ntc-QorK-mrPy8vzmso",
          "imageUrl": "https://images.unsplash.com/photo-1532565820562-c32d7f053221?q=80&w=450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "title": "《旅行筆記本套裝》",
          "tags": ["小組團契", "讀經工具"],
          "likes": 50,
        },
        {
          "id": "-Ntc81uuLPdzCGCLN5hL",
          "imageUrl": "https://images.unsplash.com/photo-1549737221-bef65e2604a6?q=80&w=450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "title": "《新約手繪插畫本》",
          "tags": ["兒童讀物", "聖經插畫"],
          "likes": 25,
        }
      ],
      productRank: []
    };
  },
  // created() {
  //   this.tempPreferenceState = { ...this.preferenceState };
  // },
  // watch: {
  //   preferenceState: {
  //     deep: true,
  //     handler(updatePreferenceState) {
  //       this.tempPreferenceState = updatePreferenceState
  //     }
  //   }
  // },
  mounted() {
    this.getProductRank();
    this.initPreferenceState();
  },
  computed: {
    ...mapState(userLikesStore, ['preferenceState'])
  },
  methods: {
    ...mapActions(userLikesStore, ['initPreferenceState', 'addToCollection', 'removeCollection']),
    getProductRank() {
      const likesList = this.productList.map((product) => ({
        id: product.id,
        likes: product.likes,
      }));
      const listOrder = likesList.sort((a, b) => b.likes - a.likes);
      const rank = listOrder.reduce((acc, product, index) => {
        acc[product.id] = { likes: product.likes, rank: index + 1 };
        return acc;
      }, {});
      this.productRank = rank;
    },
    getRankClass(productID) {
      const rank = this.productRank[productID]?.rank;
      return rank ? `bi-${rank}-circle-fill` : '';
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
};
</script>