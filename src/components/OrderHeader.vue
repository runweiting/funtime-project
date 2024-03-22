<template>
    <div class="mx-3 mx-lg-10">
        <div class="container px-lg-12 mb-3 mb-lg-6">
            <div class="row row-cols-1 gy-3 gy-lg-6 row-cols-md-2 px-md-2 px-lg-3 px-xl-4">
                <div class="col px-xl-4">
                    <div v-if="cartList.length === 0" class="h-100 d-flex flex-column gap-4">
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
                        <router-link :to="{ name: 'home' }" class="btn btn-primary w-25">回首頁</router-link>
                    </div>
                    <div v-else v-for="cart in cartList" :key="cart.id" class="h-100 d-flex flex-column justify-content-between">
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
                            {{ cart.product.title }}
                        </h2>
                        <div class="d-flex align-items-baseline gap-3">
                            <small class="text-dark-gray">提案人</small>
                            <small class="text-dark-gray">{{ cart.product.proposer }}</small>
                        </div>
                    </div>
                </div>
                <div class="col px-xl-4">
                    <!-- 集資進度 -->
                    <fundraising-steps :currentFundraisingSteps="currentFundraisingSteps" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userCartStore from '@/stores/userCartStore';
import userOrderStore from '@/stores/userOrderStore';
import FundraisingSteps from "./FundraisingSteps.vue";

export default {
    props: ['currentFundraisingSteps'],
    components: {
        FundraisingSteps,
    },
    computed: {
        ...mapState(userCartStore, ['cartList']),
        ...mapState(userOrderStore, ['order'])
    },
    methods: {
        ...mapActions(userOrderStore, ['getOrder'])
    },

}
</script>
