<template>
  <div class="rounded-5 border border-5 border-light p-5 h-100">
    <!-- 在 <VForm> 往 v-slot 傳入 errors 錯誤訊息，所以 <VField> 和 <ErrorMessage> 都可讀取 errors -->
    <VForm v-slot="{ errors }" ref="formOrder" class="d-flex flex-column gap-3 h-100" @submit="onSubmit">
      <div>
        <h3 class="fs-5">收件人</h3>
        <div class="row">
          <div class="col">
            <div class="form-floating mb-3">
              <VField
              v-model.trim="data.user.name"
              rules="required"
              :class="{ 'is-invalid': errors['姓名'] }"
              type="text"
              class="form-control"
              name="姓名"
              />
              <label for="姓名" class="form-label">真實姓名</label>
              <ErrorMessage name="姓名" class="invalid-feedback" />
            </div>
          </div>
          <div class="col">
            <div class="form-floating mb-3">
              <VField
              v-model.trim="data.user.tel"
              rules="required|min:8|max:10"
              :class="{ 'is-invalid': errors['手機'] }"
              type="tel"
              class="form-control"
              name="手機"
              />
              <label for="手機" class="form-label">手機</label>
              <ErrorMessage name="手機" class="invalid-feedback" />
            </div>
          </div>
        </div>
        <div class="form-floating">
          <VField
          v-model.trim="data.user.email"
          rules="required|email"
          :class="{ 'is-invalid': errors['email'] }"
          type="email"
          class="form-control"
          name="email"
          />
          <label for="email" class="form-label">Email</label>
          <ErrorMessage name="email" class="invalid-feedback" />
        </div>
      </div>
      <div>
        <h4 class="fs-6">請選擇運送方式</h4>
        <VField v-model="data.user.shipment"
        rules="required" :class="{ 'is-invalid': errors['運送方式'] }" as="select" name="運送方式" class="form-select bg-light text-center text-dark-gray" aria-label="shipment" disabled>
          <option value="宅配到府" selected>宅配到府</option>
        </VField>
        <ErrorMessage name="運送方式" class="invalid-feedback" />
      </div>
      <div>
        <div class="row mb-3">
          <div class="col">
            <label for="country" class="form-label text-dark-gray">收件地點</label>
            <VField v-model="data.user.country"
            rules="required" :class="{ 'is-invalid': errors['地點'] }" as="select" name="地點" class="form-select text-dark-gray" aria-label="country">
              <option value="" selected>請選擇</option>
              <option value="台灣">台灣</option>
              <option value="國際">國際</option>
            </VField>
            <ErrorMessage name="地點" class="invalid-feedback" />
          </div>
          <div class="col">
            <label for="city" class="form-label text-dark-gray">縣市</label>
            <VField v-model="data.user.city"
            rules="required" :class="{ 'is-invalid': errors['縣市'] }" as="select" name="縣市" class="form-select text-dark-gray" aria-label="city">
              <option value="" selected>請選擇</option>
              <option value="台北">台北</option>
              <option value="台中">台中</option>
              <option value="高雄">高雄</option>
            </VField>
            <ErrorMessage name="縣市" class="invalid-feedback" />
          </div>
          <div class="col">
            <label for="region" class="form-label text-dark-gray">鄉鎮市區</label>
            <VField v-model="data.user.region"
            rules="required" :class="{ 'is-invalid': errors['鄉鎮市區'] }" as="select" name="鄉鎮市區"  class="form-select text-dark-gray" aria-label="region">
              <option value="" selected>請選擇</option>
              <option value="北區">北區</option>
              <option value="中區">中區</option>
              <option value="南區">南區</option>
            </VField>
            <ErrorMessage name="鄉鎮市區" class="invalid-feedback" />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <div class="form-floating">
              <VField
              v-model.trim="data.user.postcode"
              rules="required"
              :class="{ 'is-invalid': errors['郵遞區號'] }"
              type="text"
              class="form-control"
              name="郵遞區號"
              />
              <label for="postcode" class="form-label">郵遞區號</label>
              <ErrorMessage name="郵遞區號" class="invalid-feedback" />
            </div>
          </div>
          <div class="col">
            <div class="form-floating">
              <VField
              v-model.trim="data.user.address"
              rules="required"
              :class="{ 'is-invalid': errors['地址'] }"
              type="text"
              class="form-control"
              name="地址"
              />
              <label for="address" class="form-label">地址</label>
              <ErrorMessage name="地址" class="invalid-feedback" />
            </div>
          </div>
        </div>
        <div>
          <label for="message" class="form-label text-dark-gray">備註(選填)</label>
          <textarea
          v-model.trim="data.message" id="message"
          class="form-control" rows="3"
          ></textarea>
        </div>
      </div>
      <div class="form-check">
        <VField v-model="data.agreement" rules="required"
        :class="{ 'is-invalid': errors['funtime 服務條款'] }" type="checkbox" name="funtime 服務條款" id="agreement" class="form-check-input" value="true" />
        <label class="form-check-label text-dark-gray" for="agreement">
          我已閱讀並同意 funtime 服務條款與隱私權政策。
        </label>
        <ErrorMessage name="funtime 服務條款" class="invalid-feedback" />
      </div>
      <div class="text-end mt-auto">
        <button type="submit" class="btn btn-primary text-white">送出訂單</button>
      </div>
    </VForm>
  </div>
</template>

<script>
import { ErrorMessage } from 'vee-validate';
import { mapActions } from 'pinia';
import adminCouponsStore from '@/stores/admin/adminCouponsStore';
import userOrderStore from '@/stores/front/userOrderStore';

export default {
  emits: ['updateCart'],
  components: { ErrorMessage },
  data() {
    return {
      // 訂單資料
      data: {
        user: {
          name: '',
          tel: '',
          email: '',
          shipment: '宅配到府',
          country: '',
          city: '',
          region: '',
          postcode: '',
          address: '',
        },
        message: '',
        agreement: false,
      },
    };
  },
  watch: {
    'data.agreement': {
      deep: true,
      handler(newValue) {
        if (newValue === 'true') {
          this.data.agreement = true;
        }
      },
    }
  },
  methods: {
    ...mapActions(adminCouponsStore, ['clearCoupon']),
    ...mapActions(userOrderStore, ['createOrder']),
    onSubmit() {
      this.createOrder(this.data);
      this.$refs.formOrder.resetForm();
      this.data.message = '';
      this.$emit('updateCart');
      this.clearCoupon();
      this.$router.push({ name: "order-result" })
    },
  },
};
</script>
