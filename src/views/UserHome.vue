<template>
    <!-- landing page -->
    <div class="m-3 m-lg-6">
        <div class="container py-3 px-lg-8 py-lg-10" data-aos="fade-up">
            <div class="row">
                <div class="col col-lg-6 col-xl-4">
                    <img src="../../public/dazzle-woman-stands-with-her-back-with-a-magnifying-glass.png" alt="home-png-left" class="object-fit-cover img-fluid">
                </div>
                <div class="col col-lg-6 col-xl-4 d-flex flex-column justify-content-center align-items-center gap-2 text-center">
                    <h1 class="display-1 pt-5 fw-bold d-none d-sm-block">funtime</h1>
                    <h2 class="display-6 fw-bold">讓有趣的聖經企劃發生</h2>
                    <h5 class="d-none d-md-block">和你一起探索信仰的美好</h5>
                    <RouterLink :to="{ name: 'products' }" class="btn btn-primary btn-lg hvr-pop">探索企劃</RouterLink>
                </div>
                <div class="d-none col-xl-4 d-xl-block text-end">
                    <img src="../../public/dazzle-man-getting-ready-for-arm-wrestling.png" class="object-fit-cover img-fluid">
                </div>
            </div>
        </div>
    </div>
    <!-- introduction: what -->
    <div class="m-3 m-lg-6">
        <div class="container bg-secondary rounded-5 p-10 p-md-30" data-aos="fade-up">
            <div class="row row-cols-1 g-1 row-cols-md-2 g-4">
                <div class="col d-flex flex-column justify-content-center text-sm-center text-md-start">
                    <h2 class="fw-bold mb-5">funtime 是什麼?</h2>
                    <h5 class="h5-lh-ls">
                        <strong>funtime</strong> 是一個預購集資平台，<br class="d-md-none d-xl-block d-414-none">發佈各種好玩有趣的創意企劃，<br class="d-md-none d-xl-block d-414-none">
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
    <div class="m-3 m-lg-6">
        <div class="container pt-10 pt-lg-20" data-aos="fade-up">
            <div class="row mb-10 text-center">
                <div class="col">
                    <h3 class="fw-bold">總覺得</h3>
                    <h2 class="display-6 fw-bold">認識聖經可以更有趣？</h2>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-lg-3 gy-5 g-xl-5 text-center">
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
                    <div class="card h-100 rounded-5 border border-info-light border-10 p-5 p-md-10">
                        <div class="d-flex justify-content-center align-items-center" style="height: 182px">
                            <img src="../../public/dazzle-two-books-with-a-bookmark.gif" class="object-fit-cover w-50">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">更多認識歷史和地理</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 rounded-5 border border-info-light border-10 p-5 p-md-10">
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
    </div>
    <!-- how -->
    <div class="m-3 m-lg-6">
        <div class="container px-5" data-aos="fade-up">
            <div class="row row-cols-1 g-4 row-cols-md-2 mt-3 mt-lg-6 pt-10 p-md-20 pb-md-10">
                <div class="col d-flex flex-column justify-content-center text-center text-md-start px-xl-6">
                    <h3 class="fw-bold">你的支持</h3>
                    <h2 class="display-6 fw-bold mb-4 mb-lg-8 mb-xl-12">讓有價值的企劃得以實現</h2>
                    <div class="d-none d-md-flex gap-md-4 gap-lg-8">
                        <RouterLink :to="{ name: 'activities' }" class="btn btn-primary btn-lg hvr-pop">參與試玩</RouterLink>
                        <RouterLink :to="{ name: 'products' }" class="btn btn-primary btn-lg hvr-pop">探索企劃</RouterLink>
                    </div>
                </div>
                <div class="col">
                    <div class="text-center">
                        <img src="../../public/dazzle-girl-sitting-on-a-box-and-choosing-products-in-online-shop.gif" class="object-fit-cover img-fluid" style="max-height: 290px;">
                    </div>
                </div>
            </div>
            <div class="row pb-10 pb-md-20">
                <div class="col">
                    <ol class="list-unstyled d-flex justify-content-center mb-sm-5 mb-md-0">
                        <li class="d-flex g-xl-2 px-xl-5 text-center">
                            <div class="d-flex flex-column align-items-center me-xl-6">
                                <div class="bg-info text-white rounded-circle position-relative mb-2 mb-md-3  icon-area">
                                    <i class="bi bi-people-fill fs-3 position-absolute top-50 start-50 translate-middle icon"></i>
                                </div>
                                <h5 class="fw-bold icon-title">參與<br class="d-sm-block d-md-none">試玩</h5>
                                <h6 class="d-none d-md-block fw-normal text-dark-gray">讓我們知道<br>你的想法</h6>
                            </div>
                            <div class="d-flex justify-content-center align-items-center icon-area">
                                <i class="bi bi-arrow-right-short text-black fs-1 icon"></i>
                            </div>
                        </li>
                        <li class="d-flex g-xl-2 px-xl-5 text-center">
                            <div class="d-flex flex-column align-items-center me-xl-6">
                                <div class="bg-info text-white rounded-circle position-relative mb-2 mb-md-3 icon-area">
                                    <i class="bi bi-bag-check-fill  fs-3 position-absolute top-50 start-50 translate-middle icon"></i>
                                </div>
                                <h5 class="fw-bold icon-title">加入<br class="d-sm-block d-md-none">預購</h5>
                                <h6 class="d-none d-md-block fw-normal text-dark-gray">立即登記<br>享有優惠價</h6>
                            </div>
                            <div class="d-flex justify-content-center align-items-center icon-area">
                                <i class="bi bi-arrow-right-short text-black fs-1 icon"></i>
                            </div>
                        </li>
                        <li class="d-flex g-xl-2 px-xl-5 text-center">
                            <div class="d-flex flex-column align-items-center me-xl-6">
                                <div class="bg-info text-white rounded-circle position-relative mb-2 mb-md-3 icon-area">
                                    <i class="bi bi-buildings-fill  fs-3 position-absolute top-50 start-50 translate-middle icon"></i>
                                </div>
                                <h5 class="fw-bold icon-title">集資<br class="d-sm-block d-md-none">成功</h5>
                                <h6 class="d-none d-md-block fw-normal text-dark-gray">即啟動生產<br>依約定完成</h6>
                            </div>
                            <div class="d-flex justify-content-center align-items-center icon-area">
                                <i class="bi bi-arrow-right-short text-black fs-1 icon"></i>
                            </div>
                        </li>
                        <li class="d-flex g-xl-2 px-xl-5 text-center">
                            <div class="d-flex flex-column align-items-center me-xl-6">
                                <div class="bg-info text-white rounded-circle position-relative mb-2 mb-md-3 icon-area">
                                    <i class="bi bi-alarm-fill fs-3 position-absolute top-50 start-50 translate-middle icon"></i>
                                </div>
                                <h5 class="fw-bold icon-title">通知<br class="d-sm-block d-md-none">付款</h5>
                                <h6 class="d-none d-md-block fw-normal text-dark-gray">通知結帳<br>完成付款</h6>
                            </div>
                            <div class="d-flex justify-content-center align-items-center icon-area">
                                <i class="bi bi-arrow-right-short text-black fs-1 icon"></i>
                            </div>
                        </li>
                        <li class="d-flex g-xl-2 px-xl-5 text-center">
                            <div class="d-flex flex-column align-items-center me-xl-6">
                                <div class="bg-info text-white rounded-circle position-relative mb-2 mb-md-3 icon-area">
                                    <i class="bi bi-box-seam-fill fs-3 position-absolute top-50 start-50 translate-middle icon"></i>
                                </div>
                                <h5 class="fw-bold icon-title">出貨</h5>
                                <h6 class="d-none d-md-block fw-normal text-dark-gray">確認款項<br>依序出貨</h6>
                            </div>
                        </li>
                    </ol>
                    <div class="d-md-none p-lg-10 text-center">
                        <RouterLink :to="{ name: 'activities' }" class="btn btn-primary btn-lg me-5 me-sm-10 hvr-pop">參與試玩</RouterLink>
                        <RouterLink :to="{ name: 'products' }" class="btn btn-primary btn-lg hvr-pop">探索企劃</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 最新企劃 -->
    <div class="m-3 m-lg-6">
        <div class="container rounded-5 border border-secondary border-10 p-10 p-md-20" data-aos="fade-up">
            <div class="row my-3 my-lg-6">
                <div class="col px-0 px-md-3">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex align-items-baseline gap-2">
                            <h2 class="d-none d-sm-block fw-bold mb-0">What's news?</h2>
                            <h3 class="fw-bold mb-0">最新企劃</h3>
                        </div>
                        <button type="button" class="btn btn-primary">更多
                            <i class="bi bi-chevron-right text-white"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3">
                <div class="col mb-5 mb-md-0 px-0 px-md-3">
                    <div class="card h-100 shadow-sm position-relative">
                        <a href="#" class="stretched-link">
                        </a>
                        <button type="button" class="btn position-absolute p-0 hvr-pulse">
                            <i class="bi bi-heart-fill fs-5"></i>
                        </button>
                        <div class="rounded-circle bg-primary position-absolute d-flex flex-column justify-content-center align-items-center gap-0 z-index-9 shadow-sm" style="width: 65px; height: 65px;top: 16px;left: 16px; transform: rotate(-10deg);">
                            <span class="text-white fw-bold fs-6" >試玩</span>
                            <small class="text-white" >報名中</small>
                        </div>
                        <div class="position-relative">
                            <img src="https://images.unsplash.com/photo-1585084293063-45ae031e7df4?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="boardGame1">
                            <span class="badge rounded-pill bg-white text-primary position-absolute z-index-8" style="bottom: 16px;right: 16px;"># 讀經工具</span>
                        </div>
                        <div class="card-body d-flex flex-column justify-content-between">
                            <div>
                                <h5 class="card-title fw-bold">《走入創世記》A Walk Through Genesis</h5>
                                <p class="card-text">原來聖經可以這樣讀！跟著故事圖卡和地圖，一起走入創世記〈1-50章〉，讓讀聖經變真實又有趣！</p>
                            </div>
                            <div>
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <div class="progress" style="width: 85%;">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 85%;">
                                        </div>
                                    </div>
                                    <small class="fw-bold">75%</small>
                                </div>
                                <div class="d-flex justify-content-between align-items-center">
                                    <small class="fst-italic fw-bold">目標 500 組 / 累計 50 組</small>
                                    <small class="d-flex align-items-center gap-2 fst-italic fw-bold">
                                        <span>20 <i class="bi bi-heart-fill text-primary"></i>
                                        </span>
                                        <span>20 <i class="bi bi-chat-fill text-primary"></i>
                                        </span>
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col mb-5 mb-md-0 px-0 px-md-3">
                    <div class="card h-100 shadow-sm position-relative">
                        <a href="#" class="stretched-link">
                        </a>
                        <button type="button" class="btn position-absolute p-0 hvr-pulse">
                            <i class="bi bi-heart-fill fs-5"></i>
                        </button>
                        <div class="rounded-circle bg-primary position-absolute d-flex flex-column justify-content-center align-items-center gap-0 z-index-9 shadow-sm" style="width: 65px; height: 65px;top: 16px;left: 16px; transform: rotate(-10deg);">
                            <span class="text-white fw-bold fs-6" >試玩</span>
                            <small class="text-white" >報名中</small>
                        </div>
                        <img src="https://images.unsplash.com/photo-1585084293063-45ae031e7df4?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="boardGame1">
                        <div class="card-body d-flex flex-column justify-content-between">
                            <h5 class="card-title fw-bold">《走入創世記》新手讀經工具</h5>
                            <p class="card-text">原來聖經可以這樣讀！跟著故事圖卡和地圖，一起走入創世記！</p>
                            <nav class="d-flex gap-2 mb-2" aria-label="breadcrumb">
                                <small class="text-dark-gray">預購專案</small>
                                <small class="text-dark-gray" style="font-size: 12px;">|</small>
                                <small class="text-dark-gray">讀經</small>
                            </nav>
                            <div>
                                <div class="d-flex justify-content-between align-items-center mb-3">
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
    </div>
    <!-- 其他人怎麼說 -->
    <feedback-swiper />
    <!-- 常見問題 -->
    <faq-accordion />
</template>

<script>
import { mapState, mapActions } from 'pinia';
import productsStore from '@/stores/userProductsStore';
import FeedbackSwiper from '@/components/FeedbackSwiper.vue';
import FaqAccordion from '@/components/FaqAccordion.vue';

export default {
    components: {
        FeedbackSwiper,
        FaqAccordion
    },
    mounted() {
        this.getProducts();
    },
    computed: {
        ...mapState(productsStore, ['productList']),
    },
    methods: {
        ...mapActions(productsStore, ['getProducts']),
    }
}
</script>