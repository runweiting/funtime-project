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
            <div class="row row-cols-1 gy-4">
              <div class="col-md-5">
                <img :src="product.imageUrl" :alt="product.short_title + '商品主圖'" class="card-img-top object-fit-cover img-fluid rounded" style="max-height: 200px">
              </div>
              <div class="col-md-7">
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
                <span class="fs-6 fst-italic text-black text-center">歡迎試玩分享，越早實現企劃。</span>              
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
          <!-- 何时使用 @submit.prevent？
            1. 防止页面刷新: 表单提交时不要刷新页面，而是通过 JavaScript 处理表单数据，那么你需要在 @submit 事件中使用 .prevent 修饰符。
            2. 客户端验证: 在客户端验证表单时，在所有验证通过后再处理表单提交逻辑，这时也需要使用 .prevent 修饰符来阻止默认提交行为。 -->
          <VForm v-slot="{ errors }" ref="formCart" @submit="onSubmit" class="rounded-5 border border-5 border-light p-5">
            <div class="d-flex flex-column gap-4">
              <div class="row align-items-center">
                <div class="col">
                  <h6 class="text-dark-gray mb-0">預購明細</h6>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-4">
                  <span class="text-dark-gray">數量</span>
                </div>
                <div class="col-8">
                  <div class="input-group">
                    <button :disabled="tempCartQty === 1" type="button" class="btn btn-outline-primary d-md-none d-lg-block" @click="tempCartQty--">
                      <i class="bi bi-dash"></i>                       
                    </button>
                    <VField v-model="tempCartQty" :rules="{ required: true, min_value: 1 }" :class="{ 'is-invalid': errors['預購數量'] }" type="number" min="1" name="預購數量" class="form-control" aria-label="cart-qty" aria-describedby="cart-qty" />
                    <button type="button" class="btn btn-outline-primary d-md-none d-lg-block" @click="tempCartQty++">
                      <i class="bi bi-plus"></i>
                    </button>
                    <ErrorMessage name="預購數量" class="invalid-feedback" />
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <span class="text-dark-gray">金額</span>
                <h5 class="fs-4 fw-bold mb-0 text-end">NT$ {{ product.origin_price * product.discount * tempCartQty }}</h5>
              </div>
            </div>
            <hr class="w-100 border-top my-4" style="border: 3px dotted #8C8C8E;">
            <div class="d-flex flex-md-column gap-2">
              <button type="submit" class="btn btn-primary w-100">確認預購</button>
              <button @click="handleDeleteCart" type="button" class="btn btn-outline-danger w-100">刪除預購</button>
            </div>
          </VForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ErrorMessage } from 'vee-validate';
import { mapState, mapActions } from 'pinia';
import userProductsStore from '@/stores/front/userProductsStore';
import userCartStore from '@/stores/front/userCartStore';
import userOrderStore from '@/stores/front/userOrderStore';
import OrderHeader from '@/components/front/OrderHeader.vue';

export default {
  components: {
    ErrorMessage,
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
    this.getCart(this.tempProductId);
  },
  computed: {
    ...mapState(userProductsStore, ['product']),
    ...mapState(userCartStore, ['tempCartId']),
    ...mapState(userOrderStore, ['productQtyMap'])
  },
  methods: {
    ...mapActions(userProductsStore, ['getProduct']),
    ...mapActions(userCartStore, ['getCart', 'putCart', 'deleteCart', 'deleteCarts']),
    ...mapActions(userOrderStore, ['calculateQty']),
    onSubmit() {
      this.putCart(this.tempProductId, this.tempCartId, this.tempCartQty);
      this.$router.push({ name: "order", params: { id: this.tempProductId, units: this.tempCartQty } });
    },
    handleDeleteCart() {
      this.deleteCart(this.tempCartId);
      this.$router.push({ name: "products" });
    },
  },
  unmounted() {
    // 當使用者離開預購頁，且不是前往訂單頁時，執行 deleteCarts，以確保購物車為空
    if(!this.$route.path.startsWith("/order")){
      this.deleteCarts();
    }
  },
}
</script>
<style>
/* Chrome, Safari, Edge, Opera */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  margin: 0;
  appearance: none;
}

/* Firefox */
input[type="number"] {
  appearance: textfield;
}

</style>