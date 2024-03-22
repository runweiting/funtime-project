<template>
    <!-- 專案名稱 -->
    <order-header :currentFundraisingSteps="currentFundraisingSteps" />
    <!-- 預購進度 -->
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
        <div class="container px-lg-12 pb-12">
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
import { mapState, mapActions } from 'pinia';
import userProductsStore from '@/stores/userProductsStore';
import userCartStore from '@/stores/userCartStore';
import OrderHeader from '@/components/OrderHeader.vue';

export default {
    components: {
        OrderHeader
    },
    data() {
        return {
            currentFundraisingSteps: 1,
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
    }
}
</script>