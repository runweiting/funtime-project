<template>
  <OrderHeader :currentFundraisingSteps="currentFundraisingSteps" />
  <OrderSteps :currentOrderSteps="currentOrderSteps" />
  <div class="mx-3 mx-lg-10">
    <div class="container px-lg-12 py-3 py-lg-6">
      <div class="row row-cols-1">
        <div class="col-md-6 col-lg-5 px-xl-4">
          <div v-for="(product, index) in tempOrder.products" :key="index" class="d-flex flex-column justify-content-between rounded-5 border border-5 border-light p-5 gap-3 position-relative mb-3">
            <img :src="product.product.imageUrl" :alt="product.product.short_title + '商品主圖'" class="card-img-top object-fit-cover img-fluid rounded" style="max-height: 200px">
            <h6 class="text-dark-gray fw-normal mb-0">{{ product.product.short_title }}</h6>
            <div class="d-flex justify-content-between">
              <h5 class="mb-0">{{ product.qty }} 入組</h5>
              <div class="d-flex gap-2">
                <h6 class="fs-5 fw-bold mb-0">NT$ {{ tempOrder.total }}</h6>
                <span class="badge bg-info-light text-black">{{ product.product.discount * 100 }}折</span>
              </div>
            </div>
            <div>
              <small class="text-dark-gray d-block mb-1">預定售價 <del>NT$ {{ product.product.origin_price }}</del>，折扣後 NT$ {{ product.product.origin_price * product.product.discount }}</small>
              <div class="d-flex">
                <span v-if="productQtyMap[tempProductId]" class="badge text-dark-gray fw-normal me-2" style="background-color: #E9ECEF;">預購人數 {{ productQtyMap[tempProductId].orderQty }} 次</span>
                <span class="badge text-dark-gray fw-normal" style="background-color: #E9ECEF;">目標達成 3 個月內出貨</span>
              </div>
            </div>
            <hr class="w-100 border-top my-1" style="border: 3px dotted #8C8C8E;">
            <div>
              <small class="text-dark-gray">一組內含：</small>
              <ul class="list-unstyled mb-0">
                <li v-for="(content, index) in product.product.contents" :key="index">{{ content }}</li>
              </ul>
            </div>
            <div class="d-flex align-items-center gap-2">
              <i class="bi bi-check-circle-fill text-dark-secondary"></i>
              <small>臺灣本島免運、可寄離島</small>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-7 px-xl-4 gy-3 gy-md-0">
          <div class="rounded-5 border border-5 border-light p-5 h-100 position-sticky top-0">
            <div class="row row-cols-1 gy-5">
              <div class="col px-8">
                <div class="row row-cols-1 gy-6 row-cols-xxl-2 align-items-center mb-4">
                  <div class="col">
                    <div class="d-flex gap-1 text-dark-gray mb-2">
                      <span>時間</span>
                      <span v-if="tempOrder.create_at">
                        {{ formatDate(tempOrder.create_at).formattedDate }}
                        {{ formatDate(tempOrder.create_at).formattedTime }}
                      </span>
                    </div>
                    <div class="d-flex gap-1 text-dark-gray">
                      <span class="text-nowrap">編號</span>
                      <span>{{ tempOrder.id }}</span>
                    </div>
                  </div>
                  <div class="col">
                    <div v-if="tempOrder.id" class="d-flex justify-content-start align-items-center gap-2 gap-lg-4 pt-4 pt-sm-0">
                      <i class="bi bi-check-circle-fill text-dark-secondary fs-4"></i>
                      <h4 class="mb-0">預購成功</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col px-xl-5">
                <div class="d-flex flex-column justify-content-between">
                  <div class="rounded-5 border border-light border-3 p-4 mb-5">
                    <table v-for="(product, index) in tempOrder.products" :key="index" class="table table-border mb-0">
                      <thead>
                        <tr>
                          <th scope="col" colspan="3" class="fs-5">預購資訊</th>
                        </tr>
                      </thead>
                      <tbody class="align-middle">
                        <tr>
                          <th scope="row" style="width: 22%;">金額</th>
                          <td>
                            <span class="fs-5 fw-bold">NT$ {{ product.final_total }}元</span>
                            <div v-if="product.coupon" class="d-flex gap-2 mt-1">
                              <i class="bi bi-check-circle-fill text-dark-secondary"></i>
                              <span class="text-dark-gray">已使用優惠卷：{{ product.coupon.code }}</span>
                              <span class="text-dark-gray">{{ product.coupon.title }}</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" style="width: 22%;">明細</th>
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
                          <th scope="row" style="width: 22%;">狀態</th>
                          <td colspan="2">
                            <div class="d-flex align-items-center gap-2">
                              <!-- <i class="bi bi-pause-circle-fill text-gray"></i>
                              <span class="text-dark-gray">尚未開放付款</span> -->
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
import { mapActions, mapState } from 'pinia';
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
      tempProductId: '',
    }
  },
  mounted() {
    const { id } = this.$route.params;
    this.tempProductId = id;
    this.calculateQty();
  },
  computed: {
    ...mapState(userOrderStore, ['tempOrder','tempOrderId', 'productQtyMap']),
  },
  methods: {
    ...mapActions(userOrderStore, ['calculateQty']),
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
      this.$router.push({ name: 'payment', params:{ id: this.tempProductId }})
    },
  }
}
</script>