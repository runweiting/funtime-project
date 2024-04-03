<template>
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
      <img :src="product.imageUrl" alt="product-image" class="card-img-top object-fit-cover img-fluid rounded" style="max-height: 300px">
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
          <img :src="point.imageUrl" alt="product-key-points" class="card-img-top object-fit-cover img-fluid rounded" style="max-height: 300px">
        </div>
        <div class="col-6 col-md-4">
          <div class="d-flex flex-column gap-2 h-100">
            <h5 class="fs-5 mb-0">{{ point.title }}</h5>
            <span>{{ point.content }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import userProductsStore from '@/stores/front/userProductsStore';

export default {
  computed: {
    ...mapState(userProductsStore, ['product']),
  },
}
</script>
