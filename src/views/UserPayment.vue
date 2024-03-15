<template>
    <!-- 結帳頁面 -->
    <div class="m-3 m-lg-6">
        <div class="container bg-primary rounded-5 p-5 p-md-10" data-aos="fade-up">
            <div class="row">
                <div class="col">
                    <div class="d-flex flex-column justify-content-center align-items-center gap-5">
                    <h2 class="fs-1 text-white fw-bold mb-0">聖經趣聞</h2>
                    <h5 class="text-white responsive-lh-ls text-normal mb-0">
                        對喜歡的企劃按贊、留言，增加人氣，告訴我們你的想法，一起探索信仰的美好！
                    </h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <h1 class="pt-5 text-center">我的購物車</h1>
        <div class="row">
            <div class="col">
                <cart-list class="w-100 py-3" />
            </div>
            <div class="col">
                <order-detail class="w-100 mt-4 p-3" @sendOrder="createOrder" ref="orderDetail" />
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
import { mapActions } from 'pinia';
import cartStore from '@/stores/cartStore';
import CartList from '@/components/week6/CartList.vue';
import OrderDetail from '@/components/week5/OrderDetail.vue';

export default {
    components: {
        CartList,
        OrderDetail
    },
    data() {
        return {
            apiUrl: import.meta.env.VITE_APP_URL,
            apiPath: import.meta.env.VITE_APP_PATH,
        }
    },
    methods: {
        ...mapActions(cartStore, ['getCart']),
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