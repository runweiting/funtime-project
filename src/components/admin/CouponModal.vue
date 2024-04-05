<template>
  <div
  class="modal fade"
  id="couponModal"
  tabindex="-1"
  aria-labelledby="couponModalLabel"
  aria-hidden="true"
  ref="modal"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-dark opacity-75 text-white">
          <h5 class="modal-title" id="couponModalLabel">
            <span>優惠卷編號：{{ tempCoupon.id }}</span>
            <br>
          </h5>
          <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-lg"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row mb-5">
              <div class="border rounded p-2 bg-light">
                <div v-if="!isNaN(tempCoupon.start_date)" class="row mb-2">
                  <div class="col-md-6 d-flex align-items-center gap-3">
                    <label for="dateInput" class="col-form-label">啟用日期：</label>
                    <div class="col-sm-6">
                      <input id="dateInput" v-model="formatDate(tempCoupon.start_date).formattedDate" disabled class="form-control" type="text">
                    </div>
                  </div>
                </div>
                <div class="row mb-2">
                  <VForm ref="enabledForm" @submit="onSubmit" class="col-md-6 ">
                    <div class="d-flex align-items-center gap-3">
                      <label for="enabled" class="col-form-label">啟用狀態：</label>
                      <div class="col-sm-6">
                        <VField id="enabled" v-model="tempCoupon.is_enabled" rules="isEnabled" class="form-select w-100" name="啟用狀態" as="select">
                          <option value="true">已啟用</option>
                          <option value="false">未啟用</option>
                        </VField>
                      </div>
                      <i v-if="tempCoupon.is_enabled" class="bi bi-check-circle-fill text-success" style="scale: 150%;"></i>
                      <i v-else class="bi bi-x-circle-fill text-danger" style="scale: 150%;"></i>
                    </div>
                  </VForm>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <h5>優惠卷資訊</h5>
                <!-- 在 <VForm> 往 v-slot 傳入 errors 錯誤訊息，所以 <VField> 和 <ErrorMessage> 都可讀取 errors -->
                <VForm v-slot="{ errors }" ref="couponForm" @submit="onSubmit">
                  <div class="row mb-2">
                    <label for="title" class="col-sm-4 col-form-label">優惠卷標題：</label>
                    <div class="col-sm-8">
                      <VField id="title" v-model.lazy="tempCoupon.title" rules="required" :class="{ 'is-invalid': errors['標題'] }" type="text" class="form-control" name="標題"/>
                      <ErrorMessage name="標題" class="invalid-feedback" />
                    </div>
                  </div>
                  <div class="row mb-2">
                    <label for="code" class="col-sm-4 col-form-label">優惠卷碼：</label>
                    <div class="col-sm-8">
                      <VField id="code" v-model.lazy="tempCoupon.code" rules="required" :class="{ 'is-invalid': errors['優惠卷碼'] }" type="text" class="form-control" name="優惠卷碼" />
                      <ErrorMessage name="優惠卷碼" class="invalid-feedback" />
                    </div>
                  </div>
                  <div class="row mb-2">
                    <label for="percent" class="col-sm-4 col-form-label">折扣百分比：</label>
                    <div class="col-sm-8">
                      <VField id="percent" v-model.lazy="tempCoupon.percent" rules="required|nonNegativeDecimal" :class="{ 'is-invalid': errors['折扣']}" type="text" class="form-control" name="折扣" />
                      <ErrorMessage name="折扣" class="invalid-feedback" />
                    </div>
                  </div>
                </VForm>
              </div>
              <div class="col-md-6">
                <h5>修改期限</h5>
                <VForm v-slot="{ errors }" ref="form" @submit="onSubmit">
                  <div class="row mb-2">
                    <label for="dateInput" class="col-sm-4 col-form-label">啟用日期：</label>
                    <div class="col-sm-8">
                      <VField id="dateInput" @change="validateDateInput" v-model="tempCoupon.start_date" rules="required" :class="{ 'is-invalid': errors['啟用日']}" class="form-control" type="date" name="啟用日" />
                      <ErrorMessage name="啟用日" class="invalid-feedback" />
                    </div>
                  </div>
                  <div class="row mb-2">
                    <label for="dateInput" class="col-sm-4 col-form-label">截止日期：</label>
                    <div class="col-sm-8">
                      <VField id="dateInput" @change="validateDateInput" v-model="tempCoupon.due_date" rules="required" :class="{ 'is-invalid': errors['截止日'] }" class="form-control" type="date" name="截止日" />
                      <ErrorMessage name="截止日" class="invalid-feedback" />
                    </div>
                  </div>
                </VForm>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button @click="updateCoupon" type="button" class="btn btn-danger">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ErrorMessage, defineRule } from 'vee-validate';
import { mapActions } from 'pinia';

import modalMixin from '@/mixins/modalMixin';
import couponsStore from '@/stores/admin/adminCouponsStore';
import timestampToDate from '@/utils/timestampToDate';
import showSuccessToast from '@/utils/showSuccessToast';
import showErrorToast from '@/utils/showErrorToast';

// 自定驗證：啟用狀態
defineRule('isEnabled', (value) => {
  if (typeof value === 'boolean' && (value === false || value === true)) {
    return true;
  }
  return '啟用狀態為必填';
});
// 自定驗證：折扣百分比
defineRule('nonNegativeDecimal', (value) => {
  const floatValue = parseFloat(value);
  if (!Number.isNaN(floatValue) && floatValue >= 0 && /^\d+(\.\d{1,2})?$/.test(value)) {
    return true;
  }
  return '請填入非負數且小數點最多到第二位';
});
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  props: {
    currentCoupon: Object,
    isNew: Boolean,
  },
  data() {
    return {
      couponModal: null,
      tempCoupon: {},
      startDateTimestamp: null,
      dueDateTimestamp: null,
    }
  },
  components: { ErrorMessage },
  mixins: [modalMixin],
  created() {
    this.tempCoupon = {
      ...this.currentCoupon,
    };
  },
  watch: {
    // watch 監視 currentCoupon 屬性，當其值發生變化時，觸發 handler 方法
    currentCoupon: {
      // 表示要深度監視 currentCoupon，當其內部屬性發生變化時，觸發 handler 方法
      deep: true,
      // handler 方法接收一個參數 updateCoupon (代表 currentOrder 的新值)
      handler(updateCoupon) {
        // 將 currentCoupon 的新值賦值 tempCoupon，這樣可以保持 tempCoupon 與 currentOrder 同步更新
        this.tempCoupon = updateCoupon;
      },
    },
  },
  methods: {
    ...mapActions(couponsStore, ['getCoupons']),
    onSubmit() {
      this.updateCoupon();
      this.$refs.enabledForm.resetForm();
      this.$refs.couponForm.resetForm();
    },
    // timestamp to String
    formatDate(timestamp) {
      const { formattedDate } = timestampToDate(timestamp);
      return { formattedDate }
    },
    // validate dateInput
    validateDateInput() {
      // String to timestamp
      const startDate = Math.floor(Date.parse(this.tempCoupon.start_date) / 1000);
      const dueDate = Math.floor(Date.parse(this.tempCoupon.due_date) / 1000);
      // 啟用日不可大於截止日
      if (startDate > dueDate) {
        showErrorToast('啟用日不可大於截止日');
      }
      this.startDateTimestamp = startDate;
      this.dueDateTimestamp = dueDate;
    },
    // POST or PUT 新增優惠卷
    updateCoupon() {
      // -> 新增優惠卷
      let url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupon`;
      let method = 'post';
      // -> 編輯優惠卷
      if (!this.isNew) {
        url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
        method = 'put';
      };
      // 更新啟用日期和截止日期
      this.tempCoupon.start_date = this.startDateTimestamp;
      this.tempCoupon.due_date = this.dueDateTimestamp;
      // Boolean to Number
      const isEnabledValue = this.tempCoupon.is_enabled === 'true' ? 1 : 0;
      this.axios[method](url, {
        "data": {
          ...this.tempCoupon,
          is_enabled: isEnabledValue,
          percent: parseInt(this.tempCoupon.percent, 10),
        }
      })
        .then((res) => {
          showSuccessToast(res.data.message);
          this.getCoupons();
        })
        .then(() => {
          this.modal.hide();
        })
        .catch((err) => {
          showErrorToast(err.response.data.message);
        });
    },
  },
};
</script>