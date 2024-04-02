<template>
    <OrderHeader :currentFundraisingSteps="currentFundraisingSteps" />
    <div class="mx-3 mx-lg-10">
    <div class="container bg-light rounded-5 px-6 py-3 px-lg-12 px-xl-15 mb-3 mb-lg-6">
      <div class="row">
        <div class="col text-center">
          <small class="text-dark-gray" style="letter-spacing: 8px;">感謝您的支持！</small>
        </div>
      </div>
    </div>
  </div>
    <div class="mx-3 mx-lg-10">
      <div class="container px-lg-12 py-3 py-lg-6">
        <div class="row">
          <div class="col px-xl-4">
            <div class="rounded-5 border border-5 border-light p-5">
              <div class="row mb-5">
                <div class="col px-8 px-xl-10">
                  <div class="row row-cols-1 row-cols-md-2 align-items-center">
                    <div class="col-md-7">
                      <div class="d-flex gap-2 text-dark-gray mb-2">
                        <span>訂單時間</span>
                        <span v-if="tempOrder.create_at">
                          {{ formatDate(tempOrder.create_at).formattedDate }}
                          {{ formatDate(tempOrder.create_at).formattedTime }}
                        </span>
                      </div>
                      <div class="d-flex gap-2 text-dark-gray">
                        <span>訂單編號</span>
                        <span>{{ tempOrder.id }}</span>
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
                <div class="col-md-7 px-xl-5">
                  <div class="d-flex flex-column justify-content-between">
                    <div class="rounded-5 border border-light border-3 p-4">
                      <table v-for="item in tempOrder.products" :key="item.id" class="table table-border mb-0">
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
                                <li>姓名：{{ tempOrder.user.name }}</li>
                                <li>手機：{{ tempOrder.user.tel }}</li>
                                <li>Email：{{ tempOrder.user.email }}</li>
                                <li>運送：{{ tempOrder.user.shipment }}</li>
                                <li>地址：{{ tempOrder.user.postcode }}{{ tempOrder.user.country }}{{ tempOrder.user.city }}{{ tempOrder.user.region }}{{ tempOrder.user.address }}</li>
                                <li>備註：{{ tempOrder.user.message }}</li>
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
import userOrderStore from '@/stores/front/userOrderStore';
import OrderHeader from '@/components/front/OrderHeader.vue';
import timestampToDate from '@/utils/timestampToDate';

export default {
  components: {
    OrderHeader
  },
  data() {
    return {
      currentFundraisingSteps: 3,
      currentProgress: 3,
    }
  },
  mounted() {
    const { id } = this.$route.params;
    this.tempProductId = id;
  },
  computed: {
    ...mapState(userOrderStore, ['tempOrder']),
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