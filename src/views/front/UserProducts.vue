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
    <div class="container p-5 p-md-10" data-aos="fade-up">
      <div class="row row-cols-1 row-cols-xl-2">
        <div class="col-xl-9">
          <div class="row row-cols-1">
            <div class="col px-0 px-md-3 mb-3 mb-lg-6">
              <div class="d-flex align-items-baseline gap-2">
                <h2 class="d-none d-sm-block fw-bold mb-0">Ranking</h2>
                <h4 class="fw-bold mb-0">企劃排名</h4>
              </div>
            </div>
          </div>
          <div
            class="row row-cols-1 row-cols-md-2 row-cols-xl-3 gy-5 mb-5 mb-md-10 position-relative"
          >
            <div
              v-for="product in productList"
              :key="product.id"
              class="col mb-md-0 px-0 px-md-3"
            >
              <div
                class="card h-100 shadow-sm position-relative"
                style="cursor: pointer"
              >
                <RouterLink
                  :to="`/product/${product.id}`"
                  class="stretched-link"
                />
                <button
                  type="button"
                  class="btn position-absolute p-0 hvr-pulse"
                >
                  <i class="bi bi-heart-fill fs-5"></i>
                </button>
                <img
                  :src="product.imageUrl" alt="product-image"
                  class="card-img-top object-fit-cover img-fluid"
                />
                <div
                  class="card-body d-flex flex-column justify-content-between"
                >
                  <h5 class="card-title fw-bold">{{ product.title }}</h5>
                  <div class="row gx-0 mb-2">
                    <div class="col-4">
                      <div class="h-100 pt-4">
                        <small class="fst-italic text-gray-dark">累計</small>
                      </div>
                    </div>
                    <div class="col-8">
                      <div
                        class="d-flex justify-content-end align-items-baseline gap-2"
                      >
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
                    <div v-for="(tag, index) in product.tags" :key="index">
                      <span
                        class="badge rounded-pill bg-primary text-white"
                        style="right: 16px; bottom: 16px"
                        >{{ `# ${tag}` }}</span
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
        <div class="col-xl-3">
          <div class="row row-cols-1">
            <div class="col px-0 px-md-3 mb-3 mb-lg-6">
              <div class="d-flex align-items-baseline gap-2">
                <h2 class="d-none d-sm-block fw-bold mb-0">Tags</h2>
                <h4 class="fw-bold mb-0">熱門標籤</h4>
              </div>
            </div>
          </div>
          <div class="row row-cols-1">
            <div class="col px-0 px-md-3">
              <div class="bg-light rounded-5 p-5">
                <ol class="row row-cols-1 list-unstyled gy-2 mb-0">
                  <li class="col-md-6 col-xl-12">
                    <div class="row align-items-center">
                      <div
                        class="col-3 px-0 d-flex justify-content-end align-items-center gap-2 pe-1"
                      >
                        <div
                          class="bg-white border rounded-circle border-3 border-black position-relative"
                          style="width: 35px; height: 35px"
                        >
                          <span
                            class="text-black position-absolute top-50 start-50 translate-middle z-index-10"
                            style="font-size: 18px"
                            >1</span
                          >
                        </div>
                        <span class="text-black" style="font-size: 18px"
                          >#</span
                        >
                      </div>
                      <div class="col-9 px-0">
                        <span
                          class="text-black text-wrap"
                          style="font-size: 18px"
                          >總是讀不完創世記呀～</span
                        >
                      </div>
                    </div>
                  </li>
                  <li class="col-md-6 col-xl-12">
                    <div class="row align-items-center">
                      <div
                        class="col-3 px-0 d-flex justify-content-end align-items-center gap-2 pe-1"
                      >
                        <div
                          class="bg-white border rounded-circle border-3 border-black position-relative"
                          style="width: 35px; height: 35px"
                        >
                          <span
                            class="text-black position-absolute top-50 start-50 translate-middle z-index-10"
                            style="font-size: 18px"
                            >2</span
                          >
                        </div>
                        <span class="text-black" style="font-size: 18px"
                          >#</span
                        >
                      </div>
                      <div class="col-9 px-0">
                        <span
                          class="text-black text-wrap"
                          style="font-size: 18px"
                          >好多不同的故事和人物～</span
                        >
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import userProductsStore from "@/stores/front/userProductsStore";
import { CountTo } from "vue3-count-to";

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
    ...mapState(userProductsStore, ["productList"]),
  },
  methods: {
    ...mapActions(userProductsStore, ["getProducts"]),
  },
};
</script>