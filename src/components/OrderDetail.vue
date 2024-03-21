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
              v-model="data.user.name"
              rules="required"
              :class="{ 'is-invalid': errors['姓名'] }"
              type="text"
              class="form-control"
              id="name"
              name="name"
              />
              <label for="name" class="form-label">真實姓名</label>
              <ErrorMessage name="name" class="invalid-feedback" />
            </div>
          </div>
          <div class="col">
            <div class="form-floating mb-3">
              <VField
              v-model="data.user.tel"
              rules="required|min:8|max:10"
              :class="{ 'is-invalid': errors['手機'] }"
              type="tel"
              class="form-control"
              id="tel"
              name="tel"
              />
              <label for="tel" class="form-label">手機</label>
              <ErrorMessage name="tel" class="invalid-feedback" />
            </div>
          </div>
        </div>
        <div class="form-floating">
          <VField
          v-model="data.user.email"
          rules="required|email"
          :class="{ 'is-invalid': errors['email'] }"
          type="email"
          class="form-control"
          id="email"
          name="email"
          />
          <label for="email" class="form-label">Email</label>
          <ErrorMessage name="email" class="invalid-feedback" />
        </div>
      </div>
      <div>
        <h4 class="fs-6">請選擇運送方式</h4>
        <VField v-model="data.user.shipment"
        rules="required" :class="{ 'is-invalid': errors['運送'] }" as="select" id="shipment" name="shipment" class="form-select bg-light text-center text-dark-gray" aria-label="shipment" disabled>
          <option value="" selected>宅配到府</option>
        </VField>
        <ErrorMessage name="shipment" class="invalid-feedback" />
      </div>
      <div>
        <div class="row mb-3">
          <div class="col">
            <label for="country" class="form-label text-dark-gray">收件地點</label>
            <VField v-model="data.user.country"
            rules="required" :class="{ 'is-invalid': errors['地點'] }" as="select" id="country" name="country" class="form-select" aria-label="country">
              <option class="text-dark-gray" value="" selected>請選擇</option>
              <option value="taiwanMainland">台灣本島</option>
              <option value="taiwanOuterIslands">台灣外島</option>
            </VField>
            <ErrorMessage name="country" class="invalid-feedback" />
          </div>
          <div class="col">
            <label for="city" class="form-label text-dark-gray">縣市</label>
            <VField v-model="data.user.city"
            rules="required" :class="{ 'is-invalid': errors['縣市'] }" as="select" id="city" name="city" class="form-select" aria-label="city">
              <option value="taipei" selected>台北</option>
              <option value="taichung">台中</option>
              <option value="kaohsiung">高雄</option>
            </VField>
            <ErrorMessage name="city" class="invalid-feedback" />
          </div>
          <div class="col">
            <label for="region" class="form-label text-dark-gray">鄉鎮市區</label>
            <VField v-model="data.user.region"
            rules="required" :class="{ 'is-invalid': errors['鄉鎮市區'] }" as="select" id="region" name="region"  class="form-select" aria-label="region">
              <option value="north" selected>北區</option>
              <option value="center">中區</option>
              <option value="south">南區</option>
            </VField>
            <ErrorMessage name="region" class="invalid-feedback" />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <div class="form-floating">
              <VField
              v-model="data.user.postcode"
              rules="required"
              :class="{ 'is-invalid': errors['郵遞區號'] }"
              type="text"
              class="form-control"
              id="postcode"
              name="postcode"
              />
              <label for="postcode" class="form-label">郵遞區號</label>
              <ErrorMessage name="postcode" class="invalid-feedback" />
            </div>
          </div>
          <div class="col">
            <div class="form-floating">
              <VField
              v-model="data.user.address"
              rules="required"
              :class="{ 'is-invalid': errors['地址'] }"
              type="text"
              class="form-control"
              id="address"
              name="address"
              />
              <label for="address" class="form-label">地址</label>
              <ErrorMessage name="address" class="invalid-feedback" />
            </div>
          </div>
        </div>
        <div>
          <label for="message" class="form-label text-dark-gray">備註(選填)</label>
          <textarea
          v-model="data.message"
          id="message"
          class="form-control" rows="3"
          ></textarea>
        </div>
      </div>
      <div class="form-check">
        <input class="form-check-input" id="flexCheckChecked" type="checkbox" value="checked" name="check">
        <label class="form-check-label text-dark-gray" for="flexCheckChecked">
          我已閱讀並同意 funtime 服務條款與隱私權政策。
        </label>
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
import couponsStore from '@/stores/couponsStore';

export default {
  emits: ['sendOrder'],
  data() {
    return {
      title: '訂購訊息',
      // 結帳資料
      data: {
        user: {
          name: '',
          tel: '',
          email: '',
          shipment: '',
          country: '',
          city: '',
          region: '',
          postcode: '',
          address: '',
        },
        message: '',
      },
    };
  },
  components: { ErrorMessage },
  methods: {
    ...mapActions(couponsStore, ['clearCoupon']),
    onSubmit() {
      this.$emit('sendOrder', this.data);
      this.clearCoupon();
    },
    resetForm() {
      this.$refs.formOrder.resetForm();
      this.data.message = '';
    },
  },
};
</script>
