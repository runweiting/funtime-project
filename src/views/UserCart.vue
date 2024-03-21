<template>
    <!-- 專案名稱 -->
    <div class="mx-3 mx-lg-10">
        <div class="container px-lg-12 mb-3 mb-lg-6">
            <div class="row row-cols-1 gy-3 gy-lg-6 row-cols-md-2 px-md-2 px-lg-3 px-xl-4">
                <div class="col px-xl-4">
                    <div class="h-100 d-flex flex-column justify-content-between">
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
                        <h2 class="fs-4 card-title fw-bold mb-3">{{ product.title }}
                        </h2>
                        <div class="d-flex align-items-baseline gap-3">
                            <small class="text-dark-gray">提案人</small>
                            <small class="text-dark-gray">{{ product.proposer }}</small>
                        </div>
                    </div>
                </div>
                <div class="col px-xl-4">
                    <!-- 集資進度 -->
                    <div class="rounded-5 p-5" style="border: 5px dotted #E7EFFF;">
                        <h3 class="fs-5 mb-10">集資進度</h3>
                        <div class="w-100 px-8 pb-12">
                            <div class="position-relative">
                                <div class="progress" style="height: 5px;">
                                    <div class="progress-bar bg-info-light" role="progressbar" style="width: 0%;" aria-valuenow="33.33" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                                <div class="position-absolute translate-middle z-index-8" style="top: 16px; left: 0.99%">
                                    <div class="d-flex flex-column justify-content-center align-items-center gap-2">
                                        <div :class="{ 'bg-info': this.currentProgress === 1 }" class="text-white rounded-circle position-relative"  style="width: 50px; height: 50px;">
                                            <i class="bi bi-bag-check-fill fs-3 position-absolute top-50 start-50 translate-middle"></i>
                                        </div>
                                        <small class="text-dark-gray">加入預購</small>
                                    </div>
                                </div>
                                <div class="position-absolute translate-middle z-index-8" style="top: 16px; left: 33.33%;">
                                    <div class="d-flex flex-column justify-content-center align-items-center gap-2">
                                        <div :class="{ 'bg-info': this.currentProgress === 2 }" class="text-white rounded-circle position-relative" style="width: 50px; height: 50px; background: #e9ecef;">
                                            <i class="bi bi-buildings-fill fs-3 position-absolute top-50 start-50 translate-middle"></i>
                                        </div>
                                        <small class="text-dark-gray">集資成功</small>
                                    </div>
                                </div>
                                <div class="position-absolute translate-middle z-index-8" style="top: 16px; left: 66.66%;">
                                    <div class="d-flex flex-column justify-content-center align-items-center gap-2">
                                        <div :class="{ 'bg-info': this.currentProgress === 3 }" class="text-white rounded-circle position-relative" style="width: 50px; height: 50px; background: #e9ecef;">
                                            <i class="bi bi-alarm-fill fs-3 position-absolute top-50 start-50 translate-middle"></i>
                                        </div>
                                        <small class="text-dark-gray">通知付款</small>
                                    </div>
                                </div>
                                <div class="position-absolute translate-middle z-index-8" style="top: 16px; left: 98.99%;">
                                    <div class="d-flex flex-column justify-content-center align-items-center gap-2">
                                        <div :class="{ 'bg-info': this.currentProgress === 4 }" class="text-white rounded-circle position-relative" style="width: 50px; height: 50px; background: #e9ecef;">
                                            <i class="bi bi-box-seam-fill fs-3 position-absolute top-50 start-50 translate-middle"></i>
                                        </div>
                                        <small class="text-dark-gray">出貨</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 企劃導航 -->
    <div class="mx-3 mx-lg-10">
        <div class="container bg-light rounded-5 px-6 py-3 px-lg-12 px-xl-15 mb-3 mb-lg-6">
            <div class="row">
                <div class="col text-center">
                    <small class="text-dark-gray" style="letter-spacing: 8px;">請以下選擇方案</small>
                </div>
            </div>
        </div>
    </div>
    <!-- 方案種類 -->
    <div class="mx-3 mx-lg-10">
        <div class="container px-lg-12">
            <div class="row gy-3 gy-lg-6">
                <div v-for="(item, index) in product.packages" :key="index" class="col px-xl-4">
                    <div class="d-flex flex-column justify-content-between rounded-5 border border-5 border-light p-5 gap-3 position-relative" style="cursor: pointer;">
                        <a @click="handleAddToCart(product.id, item.units)" class="stretched-link"></a>
                        <img :src="product.imageUrl" class="card-img-top object-fit-cover img-fluid rounded" alt="boardGame1" style="max-height: 100px">
                        <h3 class="fs-6 text-dark-gray mb-0">{{ item.name }}</h3>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex gap-2">
                            <h5 class="fw-bold mb-0">NT$ {{ product.price * product.discount * item.units }}</h5>
                            <span class="badge bg-info-light text-black">{{ product.discount * 100 }}折</span>
                            </div>
                            <span class="badge bg-danger">剩餘{{ `待處理` }}份</span>
                        </div>
                        <small class="text-dark-gray">預定售價 <del>NT$ {{ product.price }}</del>，現省 NT$ {{ product.price - (product.price * product.discount) }}</small>
                        <div>
                            <span>本方案內含：</span><br>
                            <span class="fs-5 fw-bold">{{ product.short_title }}{{ item.units }} 套</span>
                        </div>
                        <hr class="w-100 border-top my-1" style="border: 3px dotted #8C8C8E;">
                        <div class="d-flex gap-2">
                            <i class="bi bi-check-circle-fill text-dark-secondary"></i>
                            <small>臺灣本島免運、可寄離島</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
import { mapState, mapActions } from 'pinia';
import userProductsStore from '@/stores/userProductsStore';
import userCartStore from '@/stores/userCartStore';
// import CartList from '@/components/week6/CartList.vue';
// import OrderDetail from '@/components/week5/OrderDetail.vue';

export default {
    data() {
        return {
            apiUrl: import.meta.env.VITE_APP_URL,
            apiPath: import.meta.env.VITE_APP_PATH,
            currentProgress: 1,
        }
    },
    mounted() {
        const { id } = this.$route.params;
        this.getProduct(id);
    },
    computed: {
        ...mapState(userProductsStore, ['product'])
    },
    methods: {
        ...mapActions(userProductsStore, ['getProduct']),
        ...mapActions(userCartStore, ['addToCart']),
        handleAddToCart(productId, units) {
            this.addToCart(productId, units);
            this.$router.push({ name: "order" });
        },
        // POST 結帳
        createOrder(data) {
            const order = {
                data,
            };
            const url = `${this.apiUrl}/api/${this.apiPath}/order`;
            this.axios
            .post(url, order)
            .then((res) => {
                Swal.fire({
                    title: res.data.message,
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
                // OrderDetail重置表單
                this.$refs.orderDetail.resetForm();
                this.getCart();
            })
            .catch((err) => {
                Swal.fire({
                    title: err.data.message,
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            });
        },
        
    }
}
</script>