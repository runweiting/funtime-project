<template>
  <!-- 專案名稱 -->
  <order-header :currentFundraisingSteps="currentFundraisingSteps" />
  <!-- 預購進度 -->
  <order-steps :currentProgress="currentProgress" />
  <!-- 結帳明細 -->
  <div class="mx-3 mx-lg-10">
    <div class="container px-lg-12 py-3 py-lg-6">
      <div class="row row-cols-1 gy-3">
        <!-- 訂購結果 -->
        <div class="col-md-6 col-lg-5 px-xl-4">
          <div class="rounded-5 border border-5 border-light p-5">
            <div class="row row-cols-1 gy-5">
              <div class="col px-8 px-xl-10">
                <div class="row row-cols-md-1 row-cols-sm-2 align-items-center">
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
                    <div class="d-flex justify-content-start justify-content-sm-center justify-content-md-start align-items-center gap-2 gap-lg-4 pt-4 pt-sm-0 pt-md-4">
                      <i class="bi bi-alarm-fill text-info fs-4"></i>
                      <h4 class="mb-0">通知付款</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col px-xl-5">
                <div class="d-flex flex-column justify-content-between">
                  <div class="rounded-5 border border-light border-3 p-4">
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
                            <div class="d-flex gap-2">
                              <i class="bi bi-alarm-fill text-info"></i>
                              <span class="text-dark-gray">通知付款</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 付款方式 -->
        <div class="col-md-6 col-lg-7 px-xl-4">
          <VForm ref="formPayment" @submit="onSubmit">
            <!-- 會員資料 -->
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
            <!-- 發票類型 -->
            <div class="rounded-5 border border-5 border-light p-5 mb-3">
              <h3 class="fs-5">發票類型</h3>
              <div class="row row-cols-1 gy-2">
                <!-- 個人發票 -->
                <div class="col">
                  <div class="rounded-5 border border-light border-3 p-4">
                    <div class="row row-cols-1 row-cols-sm-2 gy-3">
                      <div class="col">
                        <div class="form-check ps-10">
                          <VField v-model="invoice_individual" class="form-check-input" style="margin-left: -2rem;" type="checkbox" name="invoice_individual" id="invoice_individual" value="true" />
                          <label class="form-check-label text-dark-gray" for="invoice_individual">
                            個人發票
                          </label>
                        </div>
                      </div>
                      <div class="col">
                        <label for="mobile_carrier" class="form-label text-dark-gray">手機載具</label>
                        <div class="input-group">
                          <VField v-model.trim="mobile_carrier" type="text" class="form-control placeholder-light" name="手機載具" placeholder="請填入手機載具" disabled />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 公司發票 -->
                <div class="col">
                  <div class="rounded-5 border border-light border-3 p-4">
                    <div class="row row-cols-1 row-cols-sm-2 gy-3">
                      <div class="col">
                        <div class="form-check ps-10">
                          <VField v-model="invoice_company" class="form-check-input" style="margin-left: -2rem;" type="checkbox" name="invoice_company" id="invoice_company" value="true" />
                          <label class="form-check-label text-dark-gray" for="invoice_company">
                            公司發票
                          </label>
                        </div>
                      </div>
                      <div class="col">
                        <label for="company_ubn" class="form-label text-dark-gray">統一編號</label>
                        <div class="input-group mb-2">
                          <VField v-model.trim="company_ubn" type="text" class="form-control placeholder-light" name="統一編號" placeholder="請填入統一編號" />
                        </div>
                        <label for="company_name" class="form-label text-dark-gray">公司抬頭</label>
                        <div class="input-group">
                          <input v-model.trim="company_name" type="text" class="form-control placeholder-light" name="公司抬頭" placeholder="請填入公司抬頭">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 付款方式 -->
            <div class="rounded-5 border border-5 border-light p-5">
              <h3 class="fs-5">付款方式</h3>
              <div class="row row-cols-1 gy-2 mb-3">
                <div class="col">
                  <div class="rounded-5 border border-light border-3 p-4">
                    <div class="row mb-3">
                      <div class="col">
                        <div class="form-check ps-10">
                          <VField v-model="creditCard" class="form-check-input" style="margin-left: -2rem;" type="checkbox" name="creditCard" id="creditCard" value="true" />
                          <label class="form-check-label text-dark-gray" for="creditCard">
                            線上刷卡
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="row row-cols-2">
                      <div class="col-4 pe-0">
                        <label for="cardholder" class="form-label text-dark-gray">持卡人</label>
                        <div class="input-group mb-2">
                          <VField v-model.trim="cardholder" type="text" class="form-control placeholder-light" name="持卡人" placeholder="請填入姓名" />
                        </div>
                      </div>
                      <div class="col-8 ps-2">
                        <label for="credit-card-number" class="form-label text-dark-gray">信用卡號碼</label>
                        <div class="input-group">
                          <VField v-model.trim="creditCard_number" type="text" class="form-control placeholder-light" name="信用卡號碼" placeholder="請填入卡號" />
                        </div>
                      </div>
                    </div>
                    <div class="row row-cols-3">
                      <div class="col pe-0">
                        <label for="expiryDate" class="form-label text-dark-gray">有效期限</label>
                        <div class="input-group mb-4">
                          <VField v-model.trim="expiryDate_month" type="text" class="form-control placeholder-light" name="有效月份" placeholder="MM" />
                        </div>
                      </div>
                      <div class="col px-2">
                        <div class="input-group">
                          <VField v-model.trim="expiryDate_year" type="text" class="form-control placeholder-light align-self-end" name="有效年份" placeholder="YY" style="margin-top: 32px;" />
                        </div>
                      </div>
                      <div class="col ps-0">
                        <label for="creditCard_cvv" class="form-label text-dark-gray">安全碼</label>
                        <div class="input-group mb-4">
                          <VField v-model.trim="creditCard_cvv" type="text" class="form-control placeholder-light" name="安全碼" placeholder="CVV" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="rounded-5 border border-light border-3 p-4">
                    <div class="row mb-4">
                      <div class="col">
                        <div class="form-check ps-10">
                          <VField v-model="bank_transfer" class="form-check-input" style="margin-left: -2rem;" type="checkbox" name="虛擬轉帳" id="bank_transfer" value="true" />
                          <label class="form-check-label text-dark-gray" for="bank_transfer">
                            ATM虛擬帳號轉帳
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="d-flex gap-2 mb-2 text-dark-gray">
                          <span>繳費銀行名稱：</span>
                          <span>六角銀行</span>
                        </div>
                        <div class="d-flex gap-2 mb-2 text-dark-gray">
                          <span>繳費銀行代碼：</span>
                          <span>xxx</span>
                        </div>
                        <div class="d-flex gap-2 mb-2 text-dark-gray">
                          <span>繳費虛擬帳號：</span>
                          <span>xxxx xxxx xxxx xxxx</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-end">
                <button type="submit" class="btn btn-primary text-white">確認付款</button>
              </div>
            </div>
          </VForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
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
      currentFundraisingSteps: 2,
      currentProgress: 3,
      // 付款資料
      invoice_individual: '',
      invoice_mobile: '',
      mobile_carrier: '',
      invoice_company: '',
      company_name: '',
      company_ubn: '',
      creditCard: '',
      bank_transfer: '',
      cardholder: '',
      creditCard_number: '',
      expiryDate_month: '',
      expiryDate_year: '',
      creditCard_cvv: ''
    }
  },
  computed: {
    ...mapState(userOrderStore, ['order']),
  },
  methods: {
    ...mapActions(userOrderStore, ['postPay']),
    // 轉換 timestamp
    formatDate(timestamp) {
      const { formattedDate, formattedTime } = timestampToDate(timestamp);
      return {
        formattedDate, formattedTime
      }
    },
    onSubmit() {
      this.postPay(this.order.id);
      this.$refs.formPayment.resetForm();
      this.$router.push({ name: "payment-result" })
    },
  }
}
</script>