<template>
    <!-- 企劃排名 -->
    <div class="m-3 m-lg-6">
        <div class="container bg-primary rounded-5 p-5 p-md-10" data-aos="fade-up">
            <div class="row">
                <div class="col">
                    <div class="d-flex flex-column justify-content-center align-items-center gap-5">
                    <h2 class="fs-1 text-white fw-bold mb-0">企劃排名</h2>
                    <h5 class="text-white responsive-lh-ls text-normal mb-0">
                        對喜歡的企劃按贊、留言，增加人氣，告訴我們你的想法，一起探索信仰的美好！
                    </h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 企劃排名 -->
    <div class="m-3 m-lg-6">
        <div class="container p-5 p-md-10" data-aos="fade-up">
            <div class="row row-cols-1 row-cols-xl-2">
                <!-- 企劃排名 -->
                <div class="col-xl-9">
                    <div class="row row-cols-1">
                        <div class="col px-0 px-md-3 mb-3 mb-lg-6">
                            <div class="d-flex align-items-baseline gap-2">
                                <h2 class="d-none d-sm-block fw-bold mb-0">Ranking</h2>
                                <h4 class="fw-bold mb-0">企劃排名</h4>
                            </div>
                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 gy-5 mb-5 mb-md-10 position-relative">
                        <div class="col mb-md-0 px-0 px-md-3">
                            <div class="card h-100 shadow-sm position-relative">
                                <a href="#" class="stretched-link">
                                </a>
                                <button type="button" class="btn position-absolute p-0 hvr-pulse">
                                    <i class="bi bi-heart-fill fs-5"></i>
                                </button>
                                <div class="position-relative">
                                    <img src="https://images.unsplash.com/photo-1585084293063-45ae031e7df4?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="boardGame1">
                                    <span class="badge rounded-pill bg-white text-primary position-absolute z-index-8" style="bottom: 16px;right: 16px;"># 讀經工具</span>
                                </div>
                                <div class="card-body d-flex flex-column justify-content-between">
                                    <h5 class="card-title fw-bold">《走入創世記》讀經進度結合地圖說故事</h5>
                                    <div class="row gx-0">
                                        <div class="col-4">
                                            <div class="h-100 pt-4">
                                                <small class="fst-italic text-gray-dark">累計</small>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="d-flex justify-content-end align-items-baseline gap-2">
                                                <count-to
                                                :startVal='0' :endVal='50' :duration='5000' :ref="refset" class="display-1 fst-italic fw-bold"></count-to>
                                                <div class="d-flex align-items-center gap-2">
                                                    <small class="fst-italic fw-bold">個</small>
                                                    <i class="bi bi-heart-fill text-primary"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-md-0 px-0 px-md-3">
                            <div class="card h-100 shadow-sm position-relative">
                                <a href="#" class="stretched-link">
                                </a>
                                <button type="button" class="btn position-absolute p-0 hvr-pulse">
                                    <i class="bi bi-heart-fill fs-5"></i>
                                </button>
                                <div class="position-relative">
                                    <img src="https://images.unsplash.com/photo-1585084293063-45ae031e7df4?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="boardGame1">
                                    <span class="badge rounded-pill bg-white text-primary position-absolute z-index-8" style="bottom: 16px;right: 16px;"># 讀經工具</span>
                                </div>
                                <div class="card-body d-flex flex-column justify-content-between">
                                    <h5 class="card-title fw-bold">《365萬用貼紙卡片》將美好經句貼在任何地方</h5>
                                    <div class="row gx-0">
                                        <div class="col-4">
                                            <div class="h-100 pt-4">
                                                <small class="fst-italic text-muted">累計</small>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="d-flex justify-content-end align-items-baseline gap-2">
                                                <count-to
                                                :startVal='0' :endVal='100' :duration='5000' :ref="refset" class="display-1 fst-italic fw-bold"></count-to>
                                                <div class="d-flex align-items-center gap-2">
                                                    <small class="fst-italic fw-bold">個</small>
                                                    <i class="bi bi-heart-fill text-primary"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-md-0 px-0 px-md-3">
                            <div class="card h-100 shadow-sm position-relative">
                                <a href="#" class="stretched-link">
                                </a>
                                <button type="button" class="btn position-absolute p-0 hvr-pulse">
                                    <i class="bi bi-heart-fill fs-5"></i>
                                </button>
                                <div class="position-relative">
                                    <img src="https://images.unsplash.com/photo-1585084293063-45ae031e7df4?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="boardGame1">
                                    <span class="badge rounded-pill bg-white text-primary position-absolute z-index-8" style="bottom: 16px;right: 16px;"># 讀經工具</span>
                                </div>
                                <div class="card-body d-flex flex-column justify-content-between">
                                    <h5 class="card-title fw-bold">《#followJesus追蹤刺繡貼》你生命中的 #是什麼？</h5>
                                    <div class="row gx-0">
                                        <div class="col-4">
                                            <div class="h-100 pt-4">
                                                <small class="fst-italic text-muted">累計</small>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="d-flex justify-content-end align-items-baseline gap-2">
                                                <count-to
                                                :startVal='0' :endVal='30' :duration='5000' :ref="refset" class="display-1 fst-italic fw-bold"></count-to>
                                                <div class="d-flex align-items-center gap-2">
                                                    <small class="fst-italic fw-bold">個</small>
                                                    <i class="bi bi-heart-fill text-primary"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col bg-secondary rounded-5 position-absolute z-index-n1 d-none d-md-block" style="width: 100%; height: 40px; bottom: -20px;"></div>
                    </div>
                </div>
                <!-- 熱門標籤 -->
                <div class="col-xl-3">
                    <div class="row row-cols-1">
                        <div class="col px-0 px-md-3 mb-3 mb-lg-6">
                            <div class="d-flex align-items-baseline gap-2">
                                <h2 class="d-none d-sm-block fw-bold mb-0">Category</h2>
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
                                            <div class="col-3 px-0  d-flex justify-content-end align-items-center gap-2 pe-1">
                                                <div class="bg-white border rounded-circle border-3 border-black position-relative" style="width: 35px; height: 35px;">
                                                    <span class="text-black position-absolute top-50 start-50 translate-middle z-index-10"  style="font-size: 18px;">1</span>
                                                </div>
                                                <span class="text-black"  style="font-size: 18px;">#</span>
                                            </div>
                                            <div class="col-9 px-0">
                                                <span class="text-black text-wrap" style="font-size: 18px;">總是讀不完創世記呀～</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="col-md-6 col-xl-12">
                                        <div class="row align-items-center">
                                            <div class="col-3 px-0  d-flex justify-content-end align-items-center gap-2 pe-1">
                                                <div class="bg-white border rounded-circle border-3 border-black position-relative" style="width: 35px; height: 35px;">
                                                    <span class="text-black position-absolute top-50 start-50 translate-middle z-index-10"  style="font-size: 18px;">1</span>
                                                </div>
                                                <span class="text-black"  style="font-size: 18px;">#</span>
                                            </div>
                                            <div class="col-9 px-0">
                                                <span class="text-black text-wrap" style="font-size: 18px;">總是讀不完創世記呀～</span>
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

    <main class="container">
        <h1 class="pt-5 text-center">商品列表</h1>
        <div class="row py-2">
        <product-list />
        <cart-list />
        </div>
    </main>
</template>

<script>
import { CountTo } from 'vue3-count-to';

import ProductList from '../components/week6/ProductList.vue';
import CartList from '../components/week6/CartList.vue'

export default {
  components: {
    ProductList,
    CartList,
    CountTo,
  },
};
</script>
