<template>
    <!-- landing page -->
    <div class="container my-3 my-lg-6 py-3 py-lg-10" data-aos="fade-up">
        <div class="row">
            <div class="col col-lg-6 col-xl-4">
                <img src="../../public/dazzle-woman-stands-with-her-back-with-a-magnifying-glass.png" alt="home-png-left" class="object-fit-cover img-fluid">
            </div>
            <div class="col col-lg-6 col-xl-4 d-flex flex-column justify-content-center align-items-center gap-2 text-center">
                <h1 class="display-1 pt-5 fw-bold">funtime</h1>
                <h2 class="display-6 fw-bold">讓有趣的聖經企劃發生</h2>
                <h5 class="d-none d-md-block">和你一起探索信仰的美好</h5>
                <RouterLink :to="{ name: 'products' }" class="btn btn-primary">探索企劃</RouterLink>
            </div>
            <div class="d-none col-xl-4 d-xl-block text-end">
                <img src="../../public/dazzle-man-getting-ready-for-arm-wrestling.png" class="object-fit-cover img-fluid">
            </div>
        </div>
    </div>
    <!-- introduction: what -->
    <div class="m-3 my-lg-6">
        <div class="container bg-secondary rounded-5 pt-10 px-5 p-md-20" data-aos="fade-up">
            <div class="row row-cols-1 g-1 row-cols-md-2 g-4">
                <div class="col d-flex flex-column justify-content-center text-center text-md-start">
                    <h2 class="fw-bold mb-5">funtime 是什麼?</h2>
                    <h5 class="responsive-lh-ls">
                        <strong>funtime</strong> 是一個預購集資平台，<br class="d-md-none d-xl-block">發佈各種好玩有趣的創意企劃，<br class="d-md-none d-xl-block">
                        歡迎每一位喜歡讀聖經的人們！
                    </h5>
                </div>
                <div class="col">
                    <div class="text-center">
                        <img src="../../public/bouncy-open-book-glasses-and-stars.gif" class="object-fit-cover img-fluid" style="max-height: 290px;">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- introduction: why -->
    <div class="container my-3 my-lg-6 p-10 p-lg-20" data-aos="fade-up">
        <div class="row mb-10 text-center">
            <div class="col">
                <h3 class="fw-bold">總覺得</h3>
                <h2 class="display-6 fw-bold">認識聖經可以更有趣？</h2>
            </div>
        </div>
        <div class="row row-cols-1 row-cols-xl-3 g-10 text-center">
            <div class="col">
                <div class="card h-100 rounded-5 border border-info border-10 p-5 p-md-10">
                    <div class="overflow-hidden" style="height: 182px;">
                        <img src="../../public/dazzle-man-with-light-bulb-generating-ideas.png" class="object-fit-cover img-fluid">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">想要發現聖經的智慧</h5>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100 rounded-5 border border-info border-10 p-10">
                    <div class="d-flex justify-content-center align-items-center" style="min-height: 182px">
                        <img src="../../public/dazzle-two-books-with-a-bookmark.gif" class="object-fit-cover w-50">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">更多認識當時歷史和地理</h5>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100 rounded-5 border border-info border-10  p-5 p-md-10">
                    <div class="overflow-hidden" style="height: 182px;">
                        <img src="../../public/dazzle-success.gif" class="object-fit-cover img-fluid">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">一起學習聖經的真理</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- introduction: how -->
    <div class="container position-relative" style="height: 100vh;">
        <div class="row">
            <div class="col">
                <!-- <swiper> 透過 props 接收配置參數來渲染 Swiper
                    :effect="'cards'" 使用卡片效果
                    :grabCursor="true" 滑鼠可抓取
                    :modules="swiperModules" 使用 swiperModules -->
                <swiper
                :effect="swiperEffects.cards.effect"
                :grabCursor="true"
                :modules="swiperEffects.cards.modules"
                :pagination="{ clickable: true }"
                :autoplay="{ delay: 3000, disableOnInteraction: true }"
                >
                    <swiper-slide v-for="item in mensWearCards" :key="item.id">
                        <router-link :to="`/products/${item.id}`">
                            <img :src="item.imageUrl" :alt="item.title">
                        </router-link>
                    </swiper-slide>
                </swiper>
            </div>
            <div class="col">
                <swiper
                :grabCursor="true"
                :effect="swiperEffects.creative.effect"
                :modules="swiperEffects.creative.modules"
                :creativeEffect="swiperEffects.creative.creativeEffect"
                :pagination="{ clickable: true }"
                :autoplay="{ delay: 4000 }"
                >
                    <swiper-slide v-for="item in womensWearCards" :key="item.id">
                        <router-link :to="`/products/${item.id}`">
                            <img :src="item.imageUrl" :alt="item.title">
                        </router-link>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
// 1. 匯入 Swiper、SwiperSlide
import { Swiper, SwiperSlide } from 'swiper/vue';
// 2. side effect Swiper css
import 'swiper/css';
// 3. side effect 所需 modules 的 css
import 'swiper/css/effect-cards';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
// 4. 匯入自定義 css
import '../assets/swiper/effectCards.css';
// 5. 依需求匯入所需 modules
import { EffectCards, EffectCreative, Pagination, Autoplay } from 'swiper/modules';

import { mapState, mapActions } from 'pinia';
import productsStore from '@/stores/userProductsStore';
import cartStore from '@/stores/cartStore';

export default {
    // 6. 註冊元件
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            // 7. 設置 swiperEffect 为卡片效果
            // 8. 將 EffectCards 加到 swiperModules 中
            swiperEffects: {
                cards: {
                    effect: 'cards',
                    modules: [EffectCards, Pagination, Autoplay],
                    loop: true,
                    config: null // cards 效果不需要配置
                },
                creative: {
                    effect: 'creative',
                    modules: [EffectCreative, Pagination, Autoplay],
                    loop: true,
                    creativeEffect: {
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ['100%', 0, 0],
                        },
                    },
                }
            },
            mensWearCards: [],
            womensWearCards: [],
        }
    },
    mounted() {
        this.loadingData();
    },
    computed: {
        ...mapState(productsStore, ['productList']),
    },
    methods: {
        ...mapActions(productsStore, ['getProducts']),
        ...mapActions(cartStore, ['getCart']),
        async loadingData() {
            await Promise.all([this.getProducts(), this.getCart()]);
            this.mensWearCards = this.productList.filter(item => item.category === "男裝");
            this.womensWearCards = this.productList.filter(item => item.category === "女裝");
        },
    }
}
</script>

<style scope>
.border-10 {
    border-width: 10px !important;
}
/* line-height */
.responsive-lh-ls {
        line-height: 1.6;
        letter-spacing: 1.5px;
    }
</style>