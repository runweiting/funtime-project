<template>
  <OrderHeader :currentFundraisingSteps="currentFundraisingSteps" />
  <div class="mx-3 mx-lg-10">
    <div class="container bg-light rounded-5 px-6 py-3 px-lg-12 px-xl-15 mb-3 mb-lg-6">
      <div class="row">
        <div class="col text-center">
          <small class="text-dark-gray" style="letter-spacing: 8px;">請確認預購方案</small>
        </div>
      </div>
    </div>
  </div>
  <div class="mx-3 mx-lg-10">
    <div class="container px-lg-12 py-3 py-lg-6">
      <div class="row row-cols-1">
        <div class="col-md-8 px-xl-4">
          <div class="d-flex flex-column justify-content-between rounded-5 border border-5 border-light p-5 gap-3">
            <div class="row">
              <div class="col-5">
                <img :src="product.imageUrl" alt="product-image" class="card-img-top object-fit-cover img-fluid rounded" style="max-height: 200px">
              </div>
              <div class="col-7">
                <div class="d-flex flex-column h-100">
                  <h6 class="text-dark-gray fw-normal mb-4">{{ product.short_title }}</h6>
                  <div class="d-flex justify-content-between">
                    <h5 class="mb-0">{{ tempCartQty }} 入組</h5>
                    <div class="d-flex gap-2">
                      <h6 class="fs-5 fw-bold mb-0">NT$ {{ product.origin_price * product.discount * tempCartQty }}</h6>
                      <span class="badge bg-info-light text-black">{{ product.discount * 100 }}折</span>
                    </div>
                  </div>
                  <div class="mt-auto">
                    <small class="text-dark-gray d-block mb-2">預定售價 <del>NT$ {{ product.origin_price }}</del>，折扣後 NT$ {{ product.origin_price * product.discount }}</small>
                    <div class="d-flex">
                      <span v-if="productQtyMap[product.id]" class="badge text-dark-gray fw-normal me-2" style="background-color: #E9ECEF;">預購人數 {{ productQtyMap[product.id].orderQty }} 次</span>
                      <span class="badge text-dark-gray fw-normal" style="background-color: #E9ECEF;">目標達成 3 個月內出貨</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="d-flex">
                <i class="bi bi-circle-fill text-primary" style="scale: 40%;"></i>
                <span class="fs-6 fst-italic text-black text-center">登記享優惠資格，無需先付款。</span>              
              </div>
              <div class="d-flex">
                <i class="bi bi-circle-fill text-primary" style="scale: 40%;"></i>
                <span class="fs-6 fst-italic text-black text-center">歡迎試玩、分享，越早實現企劃。</span>              
              </div>
            </div>
            <div class="d-flex gap-2 text-dark-gray">
              <small v-for="(tag, index) in product.tags" :key="index" class="badge bg-primary-light text-white fw-normal">#{{ tag }}</small>
            </div>
            <hr class="w-100 border-top my-1" style="border: 3px dotted #8C8C8E;">
            <div>
              <small class="text-dark-gray">一組內含：</small>
              <ul class="list-unstyled mb-0">
                <li v-for="(content, index) in product.contents" :key="index">{{ content }}</li>
              </ul>
            </div>
            <hr class="w-100 border-top my-1" style="border: 3px dotted #8C8C8E;">
            <ul class="list-unstyled mb-0">
              <li v-for="(note, index) in product.notes" :key="index">{{ note }}</li>
            </ul>
            <hr class="w-100 border-top my-1" style="border: 3px dotted #8C8C8E;">
            <div class="d-flex gap-2">
              <i class="bi bi-check-circle-fill text-dark-secondary"></i>
              <small>臺灣本島免運、可寄離島</small>
            </div>
          </div>
        </div>
        <div class="col-md-4 px-xl-4 gy-3 gy-md-0">
          <div class="rounded-5 border border-5 border-light p-5">
            <div class="d-flex flex-column gap-4">
              <div class="row align-items-center">
                <div class="col-4">
                  <h6 class="text-dark-gray mb-0">預購明細</h6>
                </div>
                <div class="col-8">
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-4">
                  <span class="text-dark-gray">預購數量</span>
                </div>
                <div class="col-8">
                  <div class="input-group">
                    <button :disabled="tempCartQty === 1" type="button" class="btn btn-outline-primary" @click="tempCartQty--">
                      <i class="bi bi-dash"></i>                       
                    </button>
                    <input v-model="tempCartQty" type="number" min="1" class="form-control" aria-label="cart-qty" aria-describedby="cart-qty">
                    <button type="button" class="btn btn-outline-primary" @click="tempCartQty++">
                      <i class="bi bi-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <span class="text-dark-gray">預購金額</span>
                <h5 class="fs-4 fw-bold mb-0 text-end">NT$ {{ product.origin_price * product.discount * tempCartQty }}</h5>
              </div>
            </div>
            <hr class="w-100 border-top my-4" style="border: 3px dotted #8C8C8E;">
            <div class="d-flex gap-2">
              <button @click="handlePutCart(tempProductId ,tempCartId, tempCartQty)" type="button" class="btn btn-primary w-100">確認預購</button>
              <button @click="handleDeleteCart(tempCartId)" type="button" class="btn btn-outline-danger w-100">刪除預購</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userProductsStore from '@/stores/front/userProductsStore';
import userCartStore from '@/stores/front/userCartStore';
import userOrderStore from '@/stores/front/userOrderStore';
import OrderHeader from '@/components/front/OrderHeader.vue';
import showErrorToast from '@/utils/showErrorToast'

export default {
  components: {
    OrderHeader
  },
  data() {
    return {
      currentFundraisingSteps: 1,
      tempProductId: '',
      tempCartQty: 0,
    }
  },
  mounted() {
    const { id, units } = this.$route.params;
    this.tempProductId = id;
    this.tempCartQty = units;
    this.getProduct(this.tempProductId);
    this.calculateQty();
  },
  computed: {
    ...mapState(userProductsStore, ['product']),
    ...mapState(userCartStore, ['tempCartId']),
    ...mapState(userOrderStore, ['productQtyMap'])
  },
  methods: {
    ...mapActions(userProductsStore, ['getProduct']),
    ...mapActions(userCartStore, ['getCart', 'putCart', 'deleteCart']),
    ...mapActions(userOrderStore, ['calculateQty']),
    handlePutCart(productId ,cartId, cartQty) {
      this.getCart(productId).then(() => {
        this.putCart(productId, this.tempCartId, cartQty);
        this.$router.push({ name: "order", params: { id: productId, units: cartQty } });
      }).catch((err) => {
        showErrorToast(err);
      });
    },
    handleDeleteCart(cartId) {
      this.deleteCart(cartId);
      this.$router.push({ name: "home" });
    },
  }
}
</script>