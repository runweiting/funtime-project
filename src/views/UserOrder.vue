<template>
    <!-- 專案名稱 -->
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
                    <fundraising-steps />
                </div>
            </div>
        </div>
    </div>
    <!-- 預購進度 -->
    <div class="mx-3 mx-lg-10">
        <order-steps />
    </div>
    <!-- 結帳明細 -->
    <div class="mx-3 mx-lg-10">
        <div class="container px-lg-12 py-3 py-lg-6">
            <div class="row row-cols-1">
                <!-- 方案明細 -->
                <div v-if="cartList.length === 0" class="col-md-6 col-lg-5 px-xl-4">
                    <div class="position-sticky top-0">
                        <div class="d-flex flex-column align-items-center rounded-5 border border-5 border-light p-5 gap-3">
                            <RouterLink :to="{ name: 'products' }" class="btn btn-primary hvr-pop">前往企劃</RouterLink>
                        </div>
                    </div>
                </div>
                <div v-else v-for="cart in cartList" :key="cart.id" class="col-md-6 col-lg-5 px-xl-4">
                    <div class="position-sticky top-0">
                        <div class="d-flex flex-column justify-content-between rounded-5 border border-5 border-light p-5 gap-3 position-relative mb-3">
                            <img :src="cart.product.imageUrl" class="card-img-top object-fit-cover img-fluid rounded" alt="boardGame1" style="max-height: 100px">
                            <h3 class="fs-6 text-dark-gray mb-0">{{ cart.qty }} 入組</h3>
                            <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex gap-2">
                                <h5 class="fw-bold mb-0">NT$ {{ cart.total }}</h5>
                                <span class="badge bg-info-light text-black">{{ cart.product.discount * 100 }}折</span>
                            </div>
                            <span class="fs-6 badge bg-danger">剩餘{{ cart.product.target_units - cart.qty }}份</span>
                            </div>
                            <small class="text-dark-gray">預定售價 <del>NT$ {{ cart.product.origin_price }}</del>，現省 NT$ {{ (cart.product.origin_price * cart.qty) - (cart.product.origin_price * cart.product.discount * cart.qty) }}</small>
                            <div>
                                <span>本方案內含：</span><br>
                                <span class="fs-5 fw-bold">{{ cart.product.short_title }}{{ cart.qty }} 套</span>
                            </div>
                            <hr class="w-100 border-top my-1" style="border: 3px dotted #8C8C8E;">
                            <div class="d-flex align-items-center gap-2">
                            <i class="bi bi-check-circle-fill text-dark-secondary"></i>
                            <small>臺灣本島免運、可寄離島</small>
                            </div>
                        </div>
                        <div class="rounded-5 border border-5 border-light-gray p-5 gap-3">
                            <label for="coupon-code" class="form-label text-danger fw-medium">優惠卷</label>
                            <div class="input-group mb-3">
                                <input :disabled="couponState.success" v-model="couponCode" type="text" class="form-control" :placeholder="couponState.success ? couponState.message : '請輸入優惠碼'" aria-label="coupon-code" aria-describedby="coupon-code" id="coupon-code">
                                <button @click="applyCoupon(couponCode)" class="btn btn-danger text-white" type="button" id="coupon-code">確認</button>
                            </div>
                            <h6 class="mb-2">付款明細</h6>
                            <div class="d-flex flex-column gap-1 px-2">
                                <div class="d-flex justify-content-between text-dark-gray">
                                    <span>項目</span>
                                    <span>NT$ {{ cart.total }}</span>
                                </div>
                                <div class="d-flex justify-content-between text-dark-gray">
                                    <span>運費</span>
                                    <span>NT$ 0</span>
                                </div>
                                <hr class="bg-light-gray my-2">
                                <div v-if="!couponState.success" class="d-flex justify-content-between text-dark-gray fw-bold">
                                    <span>總計</span>
                                    <h5 class="fw-bold mb-0">NT$ {{ cart.total }}</h5>
                                </div>
                                <div v-else class="d-flex justify-content-between text-dark-gray fw-bold">
                                    <span>折扣總計</span>
                                    <h5 class="fw-bold mb-0">NT$ {{ Math.round(couponState.data.final_total) }}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 填寫訂購 -->
                <div class="col-md-6 col-lg-7 px-xl-4 gy-3 gy-md-0">
                    <!-- 會員資料 -->
                    <div class="d-none p-5">
                        <h3 class="fs-5">會員資料</h3>
                        <form ref="form-member">
                            <div class="form-floating mb-3">
                                <input
                                type="email"
                                class="form-control"
                                id="floatingEmail"
                                name="email"
                                placeholder="請輸入email"
                                disabled                           />
                                <label for="floatingEmail" class="form-label">Email</label>
                                <ErrorMessage name="email" class="invalid-feedback" />
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="form-floating mb-3">
                                        <input
                                        type="text"
                                        class="form-control"
                                        id="floatingName"
                                        name="姓名"
                                        placeholder="請輸入姓名" disabled
                                        />
                                        <label for="floatingName" class="form-label">收件人姓名</label>
                                        <ErrorMessage name="姓名" class="invalid-feedback" />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-floating mb-3">
                                        <input
                                        type="tel"
                                        class="form-control"
                                        id="floatingTel"
                                        name="手機" disabled
                                        />
                                        <label for="floatingTel" class="form-label">手機</label>
                                        <ErrorMessage name="手機" class="invalid-feedback" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <!-- 收件資料 -->
                    <order-detail @updateCart="getCart" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import userCartStore from '@/stores/userCartStore';
import OrderDetail from '@/components/OrderDetail.vue';
import FundraisingSteps from '@/components/FundraisingSteps.vue';
import OrderSteps from '@/components/OrderSteps.vue';
import couponsStore from '@/stores/couponsStore';

export default {
    components: {
        FundraisingSteps,
        OrderSteps,
        OrderDetail
    },
    data() {
        return {
            // 優惠碼
            couponCode: null,
        }
    },
    mounted() {
        this.getCart();
    },
    computed: {
        ...mapState(userCartStore, ['cartList', 'cartTotal']),
        ...mapState(couponsStore, ['couponState'])
    },
    methods: {
        ...mapActions(userCartStore, ['getCart']),
        ...mapActions(couponsStore, ['postCoupon']),
        async applyCoupon() {
            await this.postCoupon(this.couponCode)
            .then(() => {
                this.couponCode = '';
            })
        },
    }
}
</script>