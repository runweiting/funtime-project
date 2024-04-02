<template>
  <div class="mx-3 mx-lg-10">
    <div class="container px-lg-12 mb-3 mb-lg-6">
      <div class="row row-cols-1 gy-3 gy-lg-6 row-cols-md-2 px-md-2 px-lg-3 px-xl-4">
        <div class="col px-xl-4">
          <div v-if="!tempId" class="h-100 d-flex flex-column gap-4">
            <nav class="d-flex gap-2 mb-3" aria-label="breadcrumb">
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
            <h2 class="fs-4 card-title fw-bold mb-3">
              請先選擇預購方案
            </h2>
            <RouterLink :to="{ name: 'home' }" class="btn btn-primary w-25">回首頁</RouterLink>
          </div>
          <div v-else class="h-100 d-flex flex-column justify-content-between">
            <nav class="d-flex gap-2 mb-3" aria-label="breadcrumb">
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
            <h2 class="fs-4 card-title fw-bold mb-3">
              {{ product.title }}
            </h2>
            <div class="d-flex align-items-baseline gap-3">
              <small class="text-dark-gray">提案人</small>
              <small class="text-dark-gray">{{ product.proposer }}</small>
            </div>
          </div>
        </div>
        <div class="col px-xl-4">
          <!-- 集資進度 -->
          <FundraisingSteps :currentFundraisingSteps="currentFundraisingSteps" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userCartStore from '@/stores/front/userCartStore';
import userProductsStore from '@/stores/front/userProductsStore';
import FundraisingSteps from "@/components/front/FundraisingSteps.vue";

export default {
  props: ['currentFundraisingSteps'],
  components: {
    FundraisingSteps,
  },
  data() {
    return {
      tempId: ''
    }
  },
  mounted() {
    const { id } = this.$route.params;
    this.tempId = id;
    this.getProduct(this.tempId);
  },
  computed: {
    ...mapState(userCartStore, ['cartList']),
    ...mapState(userProductsStore, ['product'])
  },
  methods: {
    ...mapActions(userProductsStore, ['getProduct'])
  },
}
</script>