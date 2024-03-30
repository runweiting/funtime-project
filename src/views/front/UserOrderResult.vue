<template>
  <!-- 專案名稱 -->
  <OrderHeader :currentFundraisingSteps="currentFundraisingSteps" />
  <!-- 訂單進度 -->
  <OrderSteps :currentOrderSteps="currentOrderSteps" />
  <!-- 結帳明細 -->
  <div class="mx-3 mx-lg-10">
    <div class="container px-lg-12 py-3 py-lg-6">
      <div class="row row-cols-1 gy-3">
        <!-- 方案內容 -->
        <div class="col-md-4 px-xl-4">
          <div class="position-md-sticky">
            <div v-for="item in order.products" :key="item.id" class="d-flex flex-column justify-content-between rounded-5 border border-5 border-light p-5 gap-3 position-relative">
              <img :src="item.product.imageUrl" class="card-img-top object-fit-cover img-fluid rounded" alt="boardGame1" style="max-height: 100px">
              <h3 class="fs-6 text-dark-gray mb-0">{{ item.qty }} 入組</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex gap-2">
                  <h5 class="fw-bold mb-0">NT$ {{ item.total }}</h5>
                  <span class="badge bg-info-light text-black">{{ item.product.discount * 100 }}折</span>
                </div>
                <span class="fs-6 badge bg-danger">剩餘{{ item.product.target_units - item.qty }}份</span>
              </div>
              <small class="text-dark-gray">預定售價 <del>NT$ {{ item.product.origin_price }}</del>，現省 NT$ {{ (item.product.origin_price * item.qty) - (item.product.origin_price * item.product.discount * item.qty) }}</small>
              <div>
                <span>本方案內含：</span><br>
                <span class="fs-5 fw-bold">{{ item.product.short_title }}{{ item.qty }} 套</span>
              </div>
              <hr class="w-100 border-top my-1" style="border: 3px dotted #8C8C8E;">
              <div class="d-flex align-items-center gap-2">
                <i class="bi bi-check-circle-fill text-dark-secondary"></i>
                <small>臺灣本島免運、可寄離島</small>
              </div>
            </div>
          </div>
        </div>
        <!-- 訂購結果 -->
        <div v-if="order.id" class="col-md-8 px-xl-4">
          <div class="rounded-5 border border-5 border-light p-5 h-100">
            <div class="row row-cols-1 gy-5">
              <div class="col px-8 px-xl-10">
                <div class="row row-cols-1 row-cols-sm-2 align-items-center">
                  <div class="col-sm-7">
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
                  <div class="col-sm-5">
                    <div v-if="order.id" class="d-flex justify-content-start justify-content-sm-center align-items-center gap-2 gap-lg-4 pt-4 pt-sm-0">
                      <i class="bi bi-check-circle-fill text-dark-secondary fs-4"></i>
                      <h4 class="mb-0">預購成功</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col px-xl-5">
                <div class="d-flex flex-column justify-content-between">
                  <div class="rounded-5 border border-light border-3 p-4 mb-5">
                    <table v-for="item in order.products" :key="item.id" class="table table-border mb-0">
                      <thead>
                        <tr>
                          <th scope="col" colspan="3" class="fs-5">預購資訊</th>
                        </tr>
                      </thead>
                      <tbody class="align-middle">
                        <tr>
                          <th scope="row">預購<br class="d-414-block">金額</th>
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
                          <th scope="row">預購<br class="d-414-block">內容</th>
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
                            <div class="d-flex align-items-center gap-2">
                              <i class="bi bi-pause-circle-fill text-gray"></i>
                              <span class="text-dark-gray">尚未開放付款</span>
                              <button @click="goToPayment" class="btn btn-primary-light text-white" type="button">前往付款</button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="text-end">
                    <button @click="goToHome" type="button" class="btn btn-primary text-white">前往首頁</button>
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
import userOrderStore from '@/stores/front/userOrderStore';
import OrderHeader from '@/components/front/OrderHeader.vue';
import OrderSteps from '@/components/front/OrderSteps.vue';
import timestampToDate from '@/utils/timestampToDate';

export default {
  components: {
    OrderHeader,
    OrderSteps
  },
  data() {
    return {
      currentOrderSteps: 3,
      currentFundraisingSteps: 1,
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
    goToHome() {
      this.$router.push({ name: 'home' })
    },
    goToPayment() {
      this.currentOrderSteps = 1;
      this.$router.push({ name: 'payment' })
    },
  }
}
</script>