<template>
    <!-- 專案名稱 -->
    <order-header :currentFundraisingSteps="currentFundraisingSteps" />
    <!-- 預購進度 -->
    <order-steps :currentProgress="currentProgress" />
    <!-- 結帳明細 -->
    <div class="mx-3 mx-lg-10">
        <div class="container px-lg-12 py-3 py-lg-6">
            <div class="row">
                <!-- 訂購結果 -->
                <div class="col px-xl-4">
                    <div class="rounded-5 border border-5 border-light p-5">
                        <div class="row mb-5">
                            <div class="col px-8 px-xl-10">
                                <div class="row row-cols-1 row-cols-md-2 align-items-center">
                                    <div class="col-md-7">
                                        <div class="d-flex gap-2 text-dark-gray mb-2">
                                            <span>訂單時間</span>
                                            <span v-if="order.create_at">
                                                {{ formatDate(order.create_at).formattedDate }}
                                                {{ formatDate(order.create_at).formattedTime }}
                                            </span>
                                        </div>
                                        <div class="d-flex gap-2 text-dark-gray">
                                            <span>訂單編號</span>
                                            <span>{{ order.id }}</span>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="d-flex justify-content-start justify-content-md-center justify-content-md-start align-items-center gap-2 gap-lg-4 pt-4">
                                            <i class="bi bi-check-circle-fill text-dark-secondary fs-4"></i>
                                            <h4 class="mb-0">付款成功</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row row-cols-1 row-cols-md-2 gy-5">
                            <!-- 訂單資訊 -->
                            <div class="col-md-7 px-xl-5">
                                <div class="d-flex flex-column justify-content-between">
                                    <div class="rounded-5 border border-light border-3 p-4">
                                        <table v-for="item in order.products" :key="item.id" class="table table-border mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col" colspan="3" class="fs-5">訂單資訊</th>
                                                </tr>
                                            </thead>
                                            <tbody class="align-middle">
                                                <tr>
                                                    <th scope="row">訂單<br class="d-414-block">金額</th>
                                                    <td>
                                                        <span class="fs-5 fw-bold">NT$ {{ item.total }}元</span>
                                                        <div v-if="item.coupon" class="d-flex gap-2 mt-1">
                                                            <i class="bi bi-check-circle-fill text-dark-secondary"></i>
                                                            <span class="text-dark-gray">已使用優惠卷：{{ item.coupon.code }}</span>
                                                            <span class="text-dark-gray">{{ item.coupon.title }}</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">訂單<br class="d-414-block">內容</th>
                                                    <td>
                                                        <span class="fs-5 fw-bold">{{ item.product.short_title }}{{ item.qty }}套</span>
                                                        <div class="text-dark-gray mt-1">
                                                            完整 1 套內含：
                                                            <ul v-for="(content, index) in item.product.contents" :key="index" class="list-unstyled mb-0">
                                                                <li>{{ content }}</li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">收件<br class="d-414-block">訊息</th>
                                                    <td colspan="2">
                                                        <ul class="list-unstyled mb-0 text-dark-gray">
                                                            <li>姓名：{{ order.user.name }}</li>
                                                            <li>手機：{{ order.user.tel }}</li>
                                                            <li>Email：{{ order.user.email }}</li>
                                                            <li>運送：{{ order.user.shipment }}</li>
                                                            <li>地址：{{ order.user.postcode }}{{ order.user.country }}{{ order.user.city }}{{ order.user.region }}{{ order.user.address }}</li>
                                                            <li>備註：{{ order.user.message }}</li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">付款<br class="d-414-block">狀態</th>
                                                    <td colspan="2">
                                                        <div class="d-flex gap-2 mt-1">
                                                            <i class="bi bi-check-circle-fill text-dark-secondary"></i>
                                                            <span class="text-dark-gray">已付款</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <!-- 訂單狀態 -->
                            <div class="col-md-5 px-xl-5">
                                <div class="d-flex flex-column justify-content-between h-100">
                                    <div class="rounded-5 border border-light border-3 p-4 mb-5">
                                        <table class="table table-border mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col" colspan="3" class="fs-5">訂單狀態</th>
                                                </tr>
                                            </thead>
                                            <tbody class="align-middle">
                                                <tr>
                                                    <th scope="row">訂單<br class="d-414-block">狀態</th>
                                                    <td colspan="2">
                                                        <span class="text-dark-gray">處理中</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">送貨<br class="d-414-block">狀態</th>
                                                    <td colspan="2">
                                                        <span class="text-dark-gray">備貨中</span>
                                                    </td>
                                                </tr>
                                                <tr class="d-none">
                                                    <th scope="row">發票<br class="d-414-block">類型</th>
                                                    <td colspan="2">
                                                        <span class="text-dark-gray">公司發票</span>
                                                        <ul class="list-unstyled mb-0 text-dark-gray">
                                                            <li>公司抬頭：</li>
                                                            <li>統一編號：</li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr class="d-none">
                                                    <th scope="row">付款<br class="d-414-block">方式</th>
                                                    <td colspan="2">
                                                        <span class="text-dark-gray">線上刷卡</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="text-end mt-auto">
                                        <button @click="goHome" type="submit" class="btn btn-primary text-white">完成訂單</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'pinia';
import userOrderStore from '@/stores/userOrderStore';
import OrderHeader from '@/components/OrderHeader.vue';
import OrderSteps from '@/components/OrderSteps.vue';
import timestampToDate from '@/utils/timestampToDate';

export default {
    components: {
        OrderHeader,
        OrderSteps
    },
    data() {
        return {
            currentFundraisingSteps: 3,
            currentProgress: 3,
        }
    },
    computed: {
        ...mapState(userOrderStore, ['order']),
    },
    methods: {
        // 轉換 timestamp
        formatDate(timestamp) {
            const { formattedDate, formattedTime } = timestampToDate(timestamp);
            return {
                formattedDate, formattedTime
            }
        },
        goHome() {
            this.$router.push({ name: 'home' });
        },
    }
}
</script>