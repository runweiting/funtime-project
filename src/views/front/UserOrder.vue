<template>
  <OrderHeader :currentFundraisingSteps="currentFundraisingSteps" />
  <div class="mx-3 mx-lg-10">
      <OrderSteps :currentOrderSteps="currentOrderSteps" />
  </div>
  <div class="mx-3 mx-lg-10">
    <div class="container px-lg-12 py-3 py-lg-6">
      <div class="row row-cols-1">
        <div class="col-md-6 col-lg-5 px-xl-4">
          <div class="position-sticky top-0">
            <div class="d-flex flex-column justify-content-between rounded-5 border border-5 border-light p-5 gap-3 position-relative mb-3">
              <img :src="product.imageUrl" alt="product-image" class="card-img-top object-fit-cover img-fluid rounded" style="max-height: 200px">
              <h6 class="text-dark-gray fw-normal mb-0">{{ product.short_title }}</h6>
              <div class="d-flex justify-content-between">
                <h5 class="mb-0">{{ tempCartQty }} 入組</h5>
                <div class="d-flex gap-2">
                  <h6 class="fs-5 fw-bold mb-0">NT$ {{ product.origin_price * product.discount * tempCartQty }}</h6>
                  <span class="badge bg-info-light text-black">{{ product.discount * 100 }}折</span>
                </div>
              </div>
              <div>
                <small class="text-dark-gray d-block mb-1">預定售價 <del>NT$ {{ product.origin_price }}</del>，折扣後 NT$ {{ product.origin_price * product.discount }}</small>
                <div class="d-flex">
                  <span v-if="productQtyMap[product.id]" class="badge text-dark-gray fw-normal me-2" style="background-color: #E9ECEF;">預購人數 {{ productQtyMap[product.id].orderQty }} 次</span>
                  <span class="badge text-dark-gray fw-normal" style="background-color: #E9ECEF;">目標達成 3 個月內出貨</span>
                </div>
              </div>
              <hr class="w-100 border-top my-1" style="border: 3px dotted #8C8C8E;">
              <div class="d-flex align-items-center gap-2">
                <i class="bi bi-check-circle-fill text-dark-secondary"></i>
                <small>臺灣本島免運、可寄離島</small>
              </div>
            </div>
            <div class="rounded-5 border border-5 border-light-gray p-5 gap-3">
              <label for="coupon-code" class="form-label text-danger fw-medium">優惠卷</label>
              <div class="input-group mb-4">
                <input :disabled="couponState.success" v-model="couponCode" type="text" class="form-control" :placeholder="couponState.success ? couponState.message : '請輸入優惠碼'" aria-label="coupon-code" aria-describedby="coupon-code" id="coupon-code">
                <button @click="applyCoupon(couponCode)" class="btn btn-danger text-white" type="button" id="coupon-code">確認</button>
              </div>
              <h6 class="text-dark-gray mb-2">付款明細</h6>
              <div class="d-flex flex-column gap-1 px-2">
                <div class="d-flex justify-content-between text-dark-gray">
                  <span>項目</span>
                  <span>NT$ {{ product.origin_price * product.discount * tempCartQty }}</span>
                </div>
                <div class="d-flex justify-content-between text-dark-gray">
                  <span>運費</span>
                  <span>NT$ 0</span>
                </div>
                <hr class="bg-light-gray my-2">
                <div v-if="!couponState.success" class="d-flex justify-content-between text-dark-gray fw-bold">
                  <span>總計</span>
                  <h5 class="fw-bold mb-0">NT$ {{ product.origin_price * product.discount * tempCartQty }}</h5>
                </div>
                <div v-else class="d-flex justify-content-between text-dark-gray fw-bold">
                  <span>折扣總計</span>
                  <h5 class="fw-bold text-black mb-0">NT$ {{ Math.round(couponState.data.final_total) }}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="col-md-6 col-lg-5 px-xl-4">
          <div class="position-sticky top-0">
            <div class="d-flex flex-column align-items-center rounded-5 border border-5 border-light p-5 gap-3">
              <RouterLink :to="{ name: 'products' }" class="btn btn-primary hvr-pop">前往企劃</RouterLink>
            </div>
          </div>
        </div> -->
        <div class="col-md-6 col-lg-7 px-xl-4 gy-3 gy-md-0">
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
          <OrderDetail />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import userProductsStore from '@/stores/front/userProductsStore';
import userCartStore from '@/stores/front/userCartStore';
import userOrderStore from '@/stores/front/userOrderStore';
import OrderDetail from '@/components/front/OrderDetail.vue';
import OrderSteps from '@/components/front/OrderSteps.vue';
import OrderHeader from '@/components/front/OrderHeader.vue';
import adminCouponsStore from '@/stores/admin/adminCouponsStore';

export default {
  components: {
    OrderSteps,
    OrderDetail,
    OrderHeader,
  },
  data() {
    return {
      currentFundraisingSteps: 1,
      currentOrderSteps: 2,
      // 優惠碼
      couponCode: null,
      tempProductId: '',
      tempCartQty: 0,
    }
  },
  mounted() {
    const { id, units } = this.$route.params;
    this.tempProductId = id;
    this.tempCartQty = units;
    this.getCart(this.tempProductId);
    this.calculateQty();
  },
  computed: {
    ...mapState(userProductsStore, ['product']),
    ...mapState(userOrderStore, ['productQtyMap']),
    ...mapState(adminCouponsStore, ['couponState']),
  },
  methods: {
    ...mapActions(userProductsStore, ['getProduct']),
    ...mapActions(userCartStore, ['getCart']),
    ...mapActions(userOrderStore, ['calculateQty']),
    ...mapActions(adminCouponsStore, ['postCoupon']),
    async applyCoupon() {
      await this.postCoupon(this.couponCode)
        .then(() => {
          this.couponCode = '';
        })
    },
  }
}
</script>