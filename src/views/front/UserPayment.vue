<template>
  <OrderHeader :currentFundraisingSteps="currentFundraisingSteps" />
  <div class="mx-3 mx-lg-10">
    <div class="container bg-light rounded-5 px-6 py-3 px-lg-12 px-xl-15 mb-3 mb-lg-6">
      <div class="row">
        <div class="col text-center">
          <small class="text-dark-gray" style="letter-spacing: 8px;">請填寫付款資料</small>
        </div>
      </div>
    </div>
  </div>
  <div class="mx-3 mx-lg-10">
    <div class="container px-lg-12 py-3 py-lg-6">
      <div class="row row-cols-1 gy-3">
        <div class="col-md-6 col-lg-5 px-xl-4">
          <div class="rounded-5 border border-5 border-light p-5">
            <div class="row row-cols-1 gy-5">
              <div class="col px-8">
                <div class="row row-cols-md-1 row-cols-sm-2 align-items-center">
                  <div class="col-sm-7">
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
                    <table v-for="item in tempOrder.products" :key="item.id" class="table table-border mb-0">
                      <thead>
                        <tr>
                          <th scope="col" colspan="3" class="fs-5">預購資訊</th>
                        </tr>
                      </thead>
                      <tbody class="align-middle">
                        <tr>
                          <th scope="row" style="width: 22%;">金額</th>
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
                          <th scope="row" style="width: 22%;">內容</th>
                          <td>
                            <span class="fs-6 fw-bold">{{ item.product.short_title }}{{ item.qty }}套</span>
                            <div class="text-dark-gray mt-1">
                              完整 1 套內含：
                              <ul v-for="(content, index) in item.product.contents" :key="index" class="list-unstyled mb-0">
                                <li>{{ content }}</li>
                              </ul>
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
        <div class="col-md-6 col-lg-7 px-xl-4">
          <VForm v-slot="{ errors }" ref="formPayment" @submit="onSubmit">
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
                          <VField @change="clearInput" v-model="selectedInvoiceType" rules="required" :class="{ 'is-invalid': errors['發票類型'] }" type="radio" value="individual"
                          class="form-check-input" style="margin-left: -2rem;" name="發票類型" id="invoice-individual" />
                          <label class="form-check-label text-dark-gray" for="invoice-individual">
                            個人發票
                          </label>
                          <ErrorMessage name="發票類型" class="invalid-feedback" />
                        </div>
                      </div>
                      <div class="col">
                        <label for="手機載具" class="form-label text-dark-gray">手機載具</label>
                        <div class="input-group">
                          <VField v-model.trim="mobile_carrier" :rules="selectedInvoiceType === 'individual' ? 'required' : ''" :disabled="selectedInvoiceType === 'company'" :class="{ 'is-invalid': errors['手機載具'] }" type="text" class="form-control placeholder-light" name="手機載具" placeholder="請填入手機載具" />
                          <ErrorMessage name="手機載具" class="invalid-feedback" />
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
                          <VField @change="clearInput" v-model="selectedInvoiceType" rules="required" :class="{ 'is-invalid': errors['發票類型'] }" type="radio" value="company" class="form-check-input" style="margin-left: -2rem;"  name="發票類型" id="invoice-company" />
                          <label class="form-check-label text-dark-gray" for="invoice-company">
                            公司發票
                          </label>
                          <ErrorMessage name="發票類型" class="invalid-feedback" />
                        </div>
                      </div>
                      <div class="col">
                        <label for="統一編號" class="form-label text-dark-gray">統一編號</label>
                        <div class="input-group mb-2">
                          <VField v-model.trim="company_ubn" :rules="selectedInvoiceType === 'company' ? 'required' : ''" :disabled="selectedInvoiceType === 'individual'" :class="{ 'is-invalid': errors['統一編號'] }" type="text" class="form-control placeholder-light" name="統一編號" placeholder="請填入統一編號" />
                          <ErrorMessage name="統一編號" class="invalid-feedback" />
                        </div>
                        <label for="公司抬頭" class="form-label text-dark-gray">公司抬頭</label>
                        <div class="input-group">
                          <VField v-model.trim="company_name" :rules="selectedInvoiceType === 'company' ? 'required' : ''" :disabled="selectedInvoiceType === 'individual'" :class="{ 'is-invalid': errors['公司抬頭'] }" type="text" class="form-control placeholder-light" name="公司抬頭" placeholder="請填入公司抬頭" />
                          <ErrorMessage name="公司抬頭" class="invalid-feedback" />
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
                          <VField @change="clearInput" v-model="selectedPaymentType" rules="required" :class="{ 'is-invalid': errors['付款方式'] }" type="radio" value="creditCard" class="form-check-input" style="margin-left: -2rem;" name="付款方式" id="credit-card"/>
                          <label class="form-check-label text-dark-gray" for="credit-card">
                            線上刷卡
                          </label>
                          <ErrorMessage name="付款方式" class="invalid-feedback" />
                        </div>
                      </div>
                    </div>
                    <div class="row row-cols-2">
                      <div class="col-4 pe-0">
                        <label for="持卡人" class="form-label text-dark-gray">持卡人</label>
                        <div class="input-group mb-2">
                          <VField v-model.trim="cardHolder" :rules="selectedPaymentType === 'creditCard' ? 'required' : ''" :disabled="selectedPaymentType === 'bankTransfer'" :class="{ 'is-invalid': errors['持卡人'] }" type="text" class="form-control placeholder-light" name="持卡人" placeholder="請填入姓名" />
                          <ErrorMessage name="持卡人" class="invalid-feedback" />
                        </div>
                      </div>
                      <div class="col-8 ps-2">
                        <label for="信用卡號碼" class="form-label text-dark-gray">信用卡號碼</label>
                        <div class="input-group">
                          <VField v-model.trim="creditCard_number" :rules="selectedPaymentType === 'creditCard' ? 'required' : ''" :disabled="selectedPaymentType === 'bankTransfer'" :class="{ 'is-invalid': errors['信用卡號碼'] }" type="text" class="form-control placeholder-light" name="信用卡號碼" placeholder="請填入卡號" />
                          <ErrorMessage name="信用卡號碼" class="invalid-feedback" />
                        </div>
                      </div>
                    </div>
                    <div class="row row-cols-3">
                      <div class="col pe-0">
                        <label for="有效期限" class="form-label text-dark-gray">有效期限</label>
                        <div class="input-group mb-4">
                          <VField v-model.trim="expiryDate_month" :rules="selectedPaymentType === 'creditCard' ? 'required' : ''" :disabled="selectedPaymentType === 'bankTransfer'" :class="{ 'is-invalid': errors['有效月份'] }" type="text" class="form-control placeholder-light" name="有效月份" placeholder="MM" />
                          <ErrorMessage name="有效月份" class="invalid-feedback" />
                        </div>
                      </div>
                      <div class="col px-2">
                        <div class="input-group">
                          <VField v-model.trim="expiryDate_year" :rules="selectedPaymentType === 'creditCard' ? 'required' : ''" :disabled="selectedPaymentType === 'bankTransfer'" :class="{ 'is-invalid': errors['有效年份'] }" type="text" class="form-control placeholder-light align-self-end" name="有效年份" placeholder="YY" style="margin-top: 32px;" />
                          <ErrorMessage name="有效年份" class="invalid-feedback" />
                        </div>
                      </div>
                      <div class="col ps-0">
                        <label for="安全碼" class="form-label text-dark-gray">安全碼</label>
                        <div class="input-group mb-4">
                          <VField v-model.trim="creditCard_cvv" :rules="selectedPaymentType === 'creditCard' ? 'required' : ''" :disabled="selectedPaymentType === 'bankTransfer'" :class="{ 'is-invalid': errors['安全碼'] }" type="text" class="form-control placeholder-light" name="安全碼" placeholder="CVV" />
                          <ErrorMessage name="安全碼" class="invalid-feedback" />
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
                          <VField @change="clearInput" v-model="selectedPaymentType" rules="required" :class="{ 'is-invalid': errors['付款方式'] }" type="radio" value="bankTransfer" class="form-check-input" style="margin-left: -2rem;" name="付款方式" id="bank-transfer" />
                          <label class="form-check-label text-dark-gray" for="bank-transfer">
                            ATM虛擬帳號轉帳
                          </label>
                          <ErrorMessage name="付款方式" class="invalid-feedback" />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="d-flex gap-2 mb-2 text-dark-gray">
                          <span>銀行名稱：</span>
                          <span>六角銀行</span>
                        </div>
                        <div class="d-flex gap-2 mb-2 text-dark-gray">
                          <span>銀行代碼：</span>
                          <span>xxx</span>
                        </div>
                        <div class="d-flex gap-2 mb-2 text-dark-gray">
                          <span>繳費帳號：</span>
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
import { ErrorMessage } from 'vee-validate';
import { mapActions, mapState } from 'pinia';
import userOrderStore from '@/stores/front/userOrderStore';
import OrderHeader from '@/components/front/OrderHeader.vue';
import timestampToDate from '@/utils/timestampToDate';

export default {
  components: {
    OrderHeader,
    ErrorMessage
  },
  data() {
    return {
      currentFundraisingSteps: 2,
      currentProgress: 3,
      // 發票類型
      selectedInvoiceType: '',
      mobile_carrier: '',
      company_ubn: '',
      company_name: '',
      // 付款方式
      selectedPaymentType: '',
      cardHolder: '',
      creditCard_number: '',
      expiryDate_month: '',
      expiryDate_year: '',
      creditCard_cvv: '',
      tempOrderId: '',
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
    ...mapActions(userOrderStore, ['getOrder', 'postPay']),
    formatDate(timestamp) {
      const { formattedDate, formattedTime } = timestampToDate(timestamp);
      return {
        formattedDate, formattedTime
      }
    },
    clearInput() {
      if (this.selectedInvoiceType === 'individual') {
        this.company_ubn = '';
        this.company_name = '';
      } else if (this.selectedInvoiceType === 'company') {
        this.mobile_carrier = ''
      };
      if (this.selectedPaymentType === 'bankTransfer') {
        this.cardHolder = '';
        this.creditCard_number = '';
        this.expiryDate_month = '';
        this.expiryDate_year = '';
        this.creditCard_cvv = '';
      }
    },
    onSubmit() {
      this.postPay(this.tempOrder.id);
      this.$refs.formPayment.resetForm();
      this.$router.push({ name: "payment-result", params: { id: this.tempProductId } })
    },
  }
}
</script>