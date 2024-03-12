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
    <!-- proposal: why, how -->
    <!-- why -->
    <div class="container my-3 my-lg-6 pt-10 pt-lg-20" data-aos="fade-up">
        <div class="row mb-10 text-center">
            <div class="col">
                <h3 class="fw-bold">總覺得</h3>
                <h2 class="display-6 fw-bold">認識聖經可以更有趣？</h2>
            </div>
        </div>
        <div class="row row-cols-1 row-cols-xl-3 g-10 text-center">
            <div class="col">
                <div class="card h-100 rounded-5 border border-info-light border-10 p-5 p-md-10">
                    <div class="overflow-hidden" style="height: 182px;">
                        <img src="../../public/dazzle-man-with-light-bulb-generating-ideas.png" class="object-fit-cover img-fluid">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">想要發現聖經的智慧</h5>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100 rounded-5 border border-info-light border-10  p-5 p-md-10">
                    <div class="d-flex justify-content-center align-items-center" style="height: 182px">
                        <img src="../../public/dazzle-two-books-with-a-bookmark.gif" class="object-fit-cover w-50">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">更多認識歷史和地理</h5>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100 rounded-5 border border-info-light border-10  p-5 p-md-10">
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
    <!-- how -->
    <div class="container pt-10 px-5 pt-md-20" data-aos="fade-up">
        <div class="row row-cols-1 g-1 row-cols-md-2 my-3 my-lg-6">
            <div class="col d-flex flex-column justify-content-center text-center text-md-start">
                <h3 class="fw-bold">你的支持</h3>
                <h2 class="display-6 fw-bold">讓有價值的企劃得以實現</h2>
            </div>
            <div class="col">
                <div class="text-center">
                    <img src="../../public/dazzle-girl-sitting-on-a-box-and-choosing-products-in-online-shop.gif" class="object-fit-cover img-fluid" style="max-height: 290px;">
                </div>
            </div>
        </div>
        <div class="row d-none d-md-block">
            <div class="col rounded-5 border border-secondary border-10 pt-15">
                <ol class="list-unstyled d-flex justify-content-center mb-0">
                    <li class="d-flex g-xl-2 p-xl-5 text-center">
                        <div class="d-flex flex-column align-items-center me-xl-6">
                            <div class="bg-info text-white rounded-circle position-relative mb-5" style="width: 50px; height: 50px;">
                                <i class="bi bi-people-fill fs-3 position-absolute top-50 start-50 translate-middle"></i>
                            </div>
                            <h5 class="fw-bold">參與試玩</h5>
                            <h6>讓我們知道<br>你的想法</h6>
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="width: 50px; height: 50px;">
                            <i class="bi bi-arrow-right-short text-black fs-1"></i>
                        </div>
                    </li>
                    <li class="d-flex g-xl-2 p-xl-5 text-center">
                        <div class="d-flex flex-column align-items-center me-xl-6">
                            <div class="bg-info text-white rounded-circle position-relative mb-5" style="width: 50px; height: 50px;">
                                <i class="bi bi-bag-check-fill  fs-3 position-absolute top-50 start-50 translate-middle"></i>
                            </div>
                            <h5 class="fw-bold">加入預購</h5>
                            <h6>立即登記<br>享有優惠價</h6>
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="width: 50px; height: 50px;">
                            <i class="bi bi-arrow-right-short text-black fs-1"></i>
                        </div>
                    </li>
                    <li class="d-flex g-xl-2 p-xl-5 text-center">
                        <div class="d-flex flex-column align-items-center me-xl-6">
                            <div class="bg-info text-white rounded-circle position-relative mb-5" style="width: 50px; height: 50px;">
                                <i class="bi bi-buildings-fill  fs-3 position-absolute top-50 start-50 translate-middle"></i>
                            </div>
                            <h5 class="fw-bold">集資成功</h5>
                            <h6>即啟動生產<br>依約定完成</h6>
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="width: 50px; height: 50px;">
                            <i class="bi bi-arrow-right-short text-black fs-1"></i>
                        </div>
                    </li>
                    <li class="d-flex g-xl-2 p-xl-5 text-center">
                        <div class="d-flex flex-column align-items-center me-xl-6">
                            <div class="bg-info text-white rounded-circle position-relative mb-5" style="width: 50px; height: 50px;">
                                <i class="bi bi-alarm-fill fs-3 position-absolute top-50 start-50 translate-middle"></i>
                            </div>
                            <h5 class="fw-bold">通知付款</h5>
                            <h6>通知結帳<br>完成付款</h6>
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="width: 50px; height: 50px;">
                            <i class="bi bi-arrow-right-short text-black fs-1"></i>
                        </div>
                    </li>
                    <li class="d-flex g-xl-2 p-xl-5 text-center">
                        <div class="d-flex flex-column align-items-center me-xl-6">
                            <div class="bg-info text-white rounded-circle position-relative mb-5" style="width: 50px; height: 50px;">
                                <i class="bi bi-box-seam-fill fs-3 position-absolute top-50 start-50 translate-middle"></i>
                            </div>
                            <h5 class="fw-bold">出貨</h5>
                            <h6>確認款項<br>依序出貨</h6>
                        </div>
                    </li>
                </ol>
                <div class="p-15 text-center">
                    <RouterLink :to="{ name: 'activities' }" class="btn btn-primary btn-lg me-10 w-25">參與試玩</RouterLink>
                    <RouterLink :to="{ name: 'products' }" class="btn btn-primary btn-lg w-25">探索企劃</RouterLink>
                </div>
            </div>
        </div>
        <div class="row d-md-none">
            <div class="col rounded-5 border border-secondary border-10 p-10">
                <ol class="list-unstyled d-flex justify-content-center mb-5">
                    <li class="d-flex text-center">
                        <div class="d-flex flex-column align-items-center">
                            <div class="bg-info text-white rounded-circle position-relative mb-5" style="width: 50px; height: 50px;">
                                <i class="bi bi-people-fill fs-3 position-absolute top-50 start-50 translate-middle"></i>
                            </div>
                            <h5 class="fw-bold">參與<br class="d-sm-none">試玩</h5>
                            <h6 class="d-none d-sm-block">讓我們知道<br>你的想法</h6>
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="width: 40px; height: 50px;">
                            <i class="bi bi-arrow-right-short text-black fs-1"></i>
                        </div>
                    </li>
                    <li class="d-flex text-center">
                        <div class="d-flex flex-column align-items-center">
                            <div class="bg-info text-white rounded-circle position-relative mb-5" style="width: 50px; height: 50px;">
                                <i class="bi bi-bag-check-fill  fs-3 position-absolute top-50 start-50 translate-middle"></i>
                            </div>
                            <h5 class="fw-bold">加入<br class="d-sm-none">預購</h5>
                            <h6 class="d-none d-sm-block">立即登記<br>享有優惠價</h6>
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="width: 40px; height: 50px;">
                            <i class="bi bi-arrow-right-short text-black fs-1"></i>
                        </div>
                    </li>
                    <li class="d-flex text-center">
                        <div class="d-flex flex-column align-items-center">
                            <div class="bg-info text-white rounded-circle position-relative mb-5" style="width: 50px; height: 50px;">
                                <i class="bi bi-buildings-fill  fs-3 position-absolute top-50 start-50 translate-middle"></i>
                            </div>
                            <h5 class="fw-bold">集資<br class="d-sm-none">成功</h5>
                            <h6 class="d-none d-sm-block">即啟動生產<br>依約定完成</h6>
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="width: 40px; height: 50px;">
                            <i class="bi bi-arrow-right-short text-black fs-1"></i>
                        </div>
                    </li>
                </ol>
                <ol class="list-unstyled d-flex justify-content-center mb-5">
                    <li class="d-flex text-center">
                        <div class="d-flex flex-column align-items-center">
                            <div class="bg-info text-white rounded-circle position-relative mb-5" style="width: 50px; height: 50px;">
                                <i class="bi bi-alarm-fill fs-3 position-absolute top-50 start-50 translate-middle"></i>
                            </div>
                            <h5 class="fw-bold">通知<br class="d-sm-none">付款</h5>
                            <h6 class="d-none d-sm-block">通知結帳<br>完成付款</h6>
                        </div>
                        <div class="d-flex justify-content-center align-items-center" style="width: 40px; height: 50px;">
                            <i class="bi bi-arrow-right-short text-black fs-1"></i>
                        </div>
                    </li>
                    <li class="d-flex text-center">
                        <div class="d-flex flex-column align-items-center me-5">
                            <div class="bg-info text-white rounded-circle position-relative mb-5" style="width: 50px; height: 50px;">
                                <i class="bi bi-box-seam-fill fs-3 position-absolute top-50 start-50 translate-middle"></i>
                            </div>
                            <h5 class="fw-bold">出貨</h5>
                            <h6 class="d-none d-sm-block">確認款項<br>依序出貨</h6>
                        </div>
                    </li>
                </ol>
                <div class="d-flex justify-content-center">
                    <RouterLink :to="{ name: 'activities' }" class="btn btn-primary w-50 me-4">參與試玩</RouterLink>
                    <RouterLink :to="{ name: 'products' }" class="btn btn-primary w-50">探索企劃</RouterLink>
                </div>
            </div>
        </div>
    </div>
    <!-- 最新企劃 -->
    <div class="bg-light rounded-5 m-3 m-md-6">
        <div class="container px-5 p-10 p-md-20" data-aos="fade-up">
            <div class="row my-3 my-lg-6">
                <div class="col p-0 p-md-3">
                    <div class="d-flex flex-column flex-md-row align-items-baseline gap-2">
                        <h2 class="fw-bold mb-0">What's news?</h2>
                        <h3 class="fw-bold mb-0">最新企劃</h3>
                    </div>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3">
                <div class="col p-0 p-md-3">
                    <div class="card h-100 shadow-sm ">
                        <a href="#" class="stretched-link">
                            <img src="https://images.unsplash.com/photo-1585084293063-45ae031e7df4?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="boardGame1">
                        </a>
                        <div class="card-body">
                            <h5 class="card-title fw-bold">《走入創世記》A Walk Through Genesis</h5>
                            <p class="card-text mb-8">原來聖經可以這樣讀！跟著故事圖卡和地圖，一起走入創世記〈1-50章〉，讓讀聖經變真實又有趣！</p>
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <div class="progress" style="width: 85%;">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 85%;">
                                    </div>
                                </div>
                                <small class="text-primary">75%</small>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <small class="fst-italic fw-bold">目標 500 組 / 累計 50 組</small>
                                <small class="d-flex align-items-center gap-2 fst-italic fw-bold">
                                    <span>20 <i class="bi bi-heart-fill"></i>
                                    </span>
                                    <span>20 <i class="bi bi-chat-fill"></i>
                                    </span>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col p-0 p-md-3">
                    <div class="card h-100 shadow-sm ">
                        <a href="#" class="stretched-link">
                            <img src="https://images.unsplash.com/photo-1585084293063-45ae031e7df4?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="boardGame2">
                        </a>
                        <div class="card-body">
                            <h5 class="card-title fw-bold">《走入創世記》A Walk Through Genesis</h5>
                            <p class="card-text mb-8">原來聖經可以這樣讀！跟著故事圖卡和地圖，一起走入創世記〈1-50章〉，讓讀聖經變真實又有趣！</p>
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <div class="progress" style="width: 85%;">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 85%;">
                                    </div>
                                </div>
                                <small class="text-primary">75%</small>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <small class="fst-italic fw-bold">目標 500 組 / 累計 50 組</small>
                                <small class="d-flex align-items-center gap-2 fst-italic fw-bold">
                                    <span>20 <i class="bi bi-heart-fill"></i>
                                    </span>
                                    <span>20 <i class="bi bi-chat-fill"></i>
                                    </span>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col p-0 p-md-3">
                    <div class="card h-100 shadow-sm ">
                        <a href="#" class="stretched-link">
                            <img src="https://images.unsplash.com/photo-1585084293063-45ae031e7df4?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="boardGame3">
                        </a>
                        <div class="card-body">
                            <h5 class="card-title fw-bold">《走入創世記》A Walk Through Genesis</h5>
                            <p class="card-text mb-8">原來聖經可以這樣讀！跟著故事圖卡和地圖，一起走入創世記〈1-50章〉，讓讀聖經變真實又有趣！</p>
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <div class="progress" style="width: 85%;">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 85%;">
                                    </div>
                                </div>
                                <small class="text-primary">75%</small>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <small class="fst-italic fw-bold">目標 500 組 / 累計 50 組</small>
                                <small class="d-flex align-items-center gap-2 fst-italic fw-bold">
                                    <span>20 <i class="bi bi-heart-fill"></i>
                                    </span>
                                    <span>20 <i class="bi bi-chat-fill"></i>
                                    </span>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>






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