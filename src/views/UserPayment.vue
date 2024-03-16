<template>
    <!-- 結帳頁面 -->
    <div class="mx-3 mx-lg-10">
        <div class="container px-lg-12">
            <div class="row px-md-2 px-lg-3 px-xl-4">
                <div class="col my-3 my-lg-6">
                    <nav class="d-flex gap-2 mb-3" aria-label="breadcrumb">
                        <small class="text-dark-gray">
                        <RouterLink 
                        :to="{ name: 'home' }" class="nav-link text-decoration-none text-nowrap">{{ $t('menu.home') }}
                        </RouterLink>
                        </small>
                        <small class="text-dark-gray">/</small>
                        <small class="text-dark-gray">
                        <RouterLink 
                        :to="{ name: 'products' }" class="nav-link text-decoration-none text-nowrap">{{ $t('menu.products') }}</RouterLink>
                        </small>
                    </nav>
                    <h1 class="fs-4 card-title fw-bold mb-3">
                        《走入創世記》讀經進度結合聖經地圖，原來聖經可以這樣讀！
                    </h1>
                    <div class="d-flex align-items-baseline gap-3">
                        <small class="text-dark-gray">提案人</small>
                        <small class="text-dark-gray">我們的主日學</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 結帳進度 -->
    <div class="mx-3 mx-lg-10">
        <div class="container bg-light rounded-5 px-6 py-2 px-lg-12 px-xl-15">
            <div class="d-flex justify-content-center gap-1 gap-414-2 gap-md-6 gap-lg-12">
                <div class="d-flex align-items-center gap-2 gap-lg-4">
                    <i class="bi bi-check-circle-fill text-dark-secondary"></i>
                    <span class="span-lh-ls">確認品項</span>
                </div>
                <i class="bi bi-chevron-right"></i>
                <div class="d-flex align-items-center gap-2 gap-lg-4">
                    <i class="bi bi-check-circle-fill text-dark-secondary"></i>
                    <span class="span-lh-ls">填寫訂單</span>
                </div>
                <i class="bi bi-chevron-right"></i>
                <div class="d-flex align-items-center gap-2 gap-lg-4">
                    <i class="bi bi-check-circle-fill text-dark-secondary"></i>
                    <span class="span-lh-ls">預購結果</span>
                </div>
            </div>
        </div>
    </div>
    <!-- 結帳明細 -->
    <div class="mx-3 mx-lg-10">
        <div class="container px-lg-12">
            <div class="row row-cols-1">
                <!-- 方案明細 -->
                <div class="col-md-4 px-xl-4 my-3 my-lg-6">
                    <div class="position-sticky top-0">
                        <div class="d-flex flex-column justify-content-between rounded-5 border border-5 border-light p-5 gap-3 position-relative mb-3">
                            <a href="#" class="stretched-link"></a>
                            <img src="https://images.unsplash.com/photo-1585084293063-45ae031e7df4?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top object-fit-cover img-fluid rounded" alt="boardGame1" style="max-height: 100px">
                            <h3 class="fs-6 text-dark-gray mb-0">2 入組</h3>
                            <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex gap-2">
                                <h5 class="fw-bold mb-0">NT$ 1,300</h5>
                                <span class="badge bg-info-light text-black">65折</span>
                            </div>
                            <span class="fs-6 badge bg-danger">剩餘498份</span>
                            </div>
                            <small class="text-dark-gray">預定售價 NT$ 1,000，現省 NT$ 700</small>
                            <div>
                                <span>本方案內含：</span><br>
                                <span class="fs-5 fw-bold">《走入創世記》2 套</span>
                            </div>
                            <hr class="w-100 border-top my-1" style="border: 3px dotted #8C8C8E;">
                            <div class="d-flex align-items-center gap-2">
                            <i class="bi bi-check-circle-fill text-dark-secondary"></i>
                            <small>臺灣本島免運、可寄離島</small>
                            </div>
                        </div>
                        <div class="rounded-5 border border-5 border-light-gray p-5 gap-3">
                            <label for="coupon-code" class="form-label text-danger fw-medium">優惠卷</label>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control coupon-input" id="coupon-code" placeholder="請輸入優惠卷">
                                <button class="btn btn-danger text-white" type="button" id="coupon-code">確認</button>
                            </div>
                            <h6 class="mb-2">付款明細</h6>
                            <div class="d-flex flex-column gap-1 px-2">
                                <div class="d-flex justify-content-between text-dark-gray">
                                    <span>項目</span>
                                    <span>NT$ 1,300</span>
                                </div>
                                <div class="d-flex justify-content-between text-dark-gray">
                                    <span>運費</span>
                                    <span>NT$ 0</span>
                                </div>
                                <hr class="bg-light-gray my-2">
                                <div class="d-flex justify-content-between text-dark-gray fw-bold">
                                    <span>總計</span>
                                    <h5 class="fw-bold mb-0">NT$ 1,300</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 填寫訂購 -->
                <div class="col-md-8 px-xl-4 my-3 my-lg-6">
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
                    <!-- 專案進度 -->
                    <div class="rounded-5 border border-5 border-light-gray p-5 mb-5">
                        <h3 class="fs-5 mb-10">專案進度</h3>
                        <div class="w-100 px-8 pb-12">
                            <div class="position-relative">
                                <div class="progress" style="height: 5px;">
                                    <div class="progress-bar bg-info-light" role="progressbar" style="width: 33.33%;" aria-valuenow="33.33" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                                <div class="position-absolute translate-middle z-index-8" style="top: 16px; left: 0.99%">
                                    <div class="d-flex flex-column justify-content-center align-items-center gap-2">
                                        <div class="bg-info text-white rounded-circle position-relative"  style="width: 50px; height: 50px;">
                                            <i class="bi bi-bag-check-fill fs-3 position-absolute top-50 start-50 translate-middle"></i>
                                        </div>
                                        <small>加入預購</small>
                                    </div>
                                </div>
                                <div class="position-absolute translate-middle z-index-8" style="top: 16px; left: 33.33%;">
                                    <div class="d-flex flex-column justify-content-center align-items-center gap-2">
                                        <div class="bg-info text-white rounded-circle position-relative" style="width: 50px; height: 50px;">
                                            <i class="bi bi-buildings-fill fs-3 position-absolute top-50 start-50 translate-middle"></i>
                                        </div>
                                        <small>集資成功</small>
                                    </div>
                                </div>
                                <div class="position-absolute translate-middle z-index-8" style="top: 16px; left: 66.66%;">
                                    <div class="d-flex flex-column justify-content-center align-items-center gap-2">
                                        <div class="bg-info text-white rounded-circle position-relative" style="width: 50px; height: 50px;">
                                            <i class="bi bi-alarm-fill fs-3 position-absolute top-50 start-50 translate-middle"></i>
                                        </div>
                                        <small>通知付款</small>
                                    </div>
                                </div>
                                <div class="position-absolute translate-middle z-index-8" style="top: 16px; left: 98.99%;">
                                    <div class="d-flex flex-column justify-content-center align-items-center gap-2">
                                        <div class="bg-info text-white rounded-circle position-relative" style="width: 50px; height: 50px;">
                                            <i class="bi bi-box-seam-fill fs-3 position-absolute top-50 start-50 translate-middle"></i>
                                        </div>
                                        <small>出貨</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 收件資料 -->
                    <div class="rounded-5 border border-5 border-light p-5 mb-5">
                        <from ref="form">
                            <h3 class="fs-5 pt-3">收件人</h3>
                            <div class="row">
                                <div class="col">
                                    <div class="form-floating mb-3">
                                        <input
                                        type="text"
                                        class="form-control"
                                        id="floatingName"
                                        name="姓名"
                                        placeholder="請輸入姓名"
                                        />
                                        <label for="floatingName" class="form-label">真實姓名</label>
                                        <ErrorMessage name="姓名" class="invalid-feedback" />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-floating mb-3">
                                        <input
                                        type="tel"
                                        class="form-control"
                                        id="floatingTel"
                                        name="手機"
                                        />
                                        <label for="floatingTel" class="form-label">手機</label>
                                        <ErrorMessage name="手機" class="invalid-feedback" />
                                    </div>
                                </div>
                            </div>
                            <div class="form-floating mb-4">
                                <input
                                type="email"
                                class="form-control"
                                id="floatingEmail"
                                name="email"
                                placeholder="請輸入email"
                                />
                                <label for="floatingEmail" class="form-label">Email</label>
                                <ErrorMessage name="email" class="invalid-feedback" />
                            </div>
                            <h4 class="fs-6">請選擇運送方式</h4>
                            <select class="form-select bg-light text-center mb-4" aria-label="select-shipment" disabled>
                                <option value="home-delivery" selected>宅配到府</option>
                            </select>
                            <div class="row mb-3">
                                <div class="col">
                                    <label class="form-label">收件地點</label>
                                    <select class="form-select" aria-label="select-country">
                                        <option value="taiwan-mainland" selected>台灣本島</option>
                                        <option value="taiwan-outerIslands">台灣外島</option>
                                    </select>
                                </div>
                                <div class="col">
                                    <label class="form-label">縣市</label>
                                    <select class="form-select" aria-label="select-city">
                                        <option value="taipei" selected>台北</option>
                                        <option value="taichung">台中</option>
                                        <option value="kaohsiung">高雄</option>
                                    </select>
                                </div>
                                <div class="col">
                                    <label class="form-label">鄉鎮市區</label>
                                    <select class="form-select" aria-label="select-region">
                                        <option value="north" selected>北區</option>
                                        <option value="center">中區</option>
                                        <option value="south">南區</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col">
                                    <div class="form-floating">
                                        <input
                                        type="text"
                                        class="form-control"
                                        id="floatingPostcode"
                                        name="postcode"
                                        placeholder="請輸入郵遞區號"
                                        />
                                        <label for="floatingPostcode" class="form-label">郵遞區號</label>
                                        <ErrorMessage name="postcode" class="invalid-feedback" />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-floating">
                                        <VField
                                        type="text"
                                        class="form-control"
                                        id="floatingAddress"
                                        name="地址"
                                        placeholder="請輸入地址"
                                        />
                                        <label for="floatingAddress" class="form-label">地址</label>
                                        <ErrorMessage name="地址" class="invalid-feedback" />
                                    </div>
                                </div>
                            </div>
                            <div class="mb-6">
                                <label for="message" class="form-label">備註（選填）</label>
                                <textarea
                                id="message"
                                class="form-control"
                                ></textarea>
                            </div>
                            <div class="text-end">
                                <button type="submit" class="btn btn-secondary">送出訂單</button>
                            </div>

                        </from>
                    </div>
                    <!-- 付款方式 -->
                    <div class="rounded-5 border border-5 border-light p-5">
                        <h3 class="fs-5 pt-3">付款方式</h3>
                        <div class="row row-cols-1 gy-2 mb-6">
                            <div class="col">
                                <div class="rounded-5 border border-light border-3 p-4">
                                    <div class="form-check ps-10">
                                        <input class="form-check-input" style="margin-left: -2rem;" type="checkbox" value="個人發票" id="individual-invoice">
                                        <label class="form-check-label text-dark-gray" for="individual-invoice">
                                            個人發票（電子發票）
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="rounded-5 border border-light border-3 p-4">
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-check ps-10">
                                                <input class="form-check-input" style="margin-left: -2rem;" type="checkbox" value="個人發票" id="individual-invoice">
                                                <label class="form-check-label text-dark-gray" for="individual-invoice">
                                                    個人發票（手機載具）
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <label for="mobile-invoice" class="form-label">手機載具</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="mobile-invoice" aria-describedby="mobile-invoice" placeholder="請輸入手機載具">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="rounded-5 border border-light border-3 p-4">
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-check ps-10">
                                                <input class="form-check-input" style="margin-left: -2rem;" type="checkbox" value="公司發票" id="company-invoice">
                                                <label class="form-check-label text-dark-gray" for="company-invoice">
                                                    公司發票（電子發票）
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <label for="company-ubn" class="form-label">統一編號</label>
                                            <div class="input-group mb-4">
                                                <input type="text" class="form-control" id="company-ubn" aria-describedby="company-ubn" placeholder="請輸入統一編號">
                                            </div>
                                            <label for="company-name" class="form-label">公司抬頭</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="company-name" aria-describedby="company-name" placeholder="請輸入公司抬頭">
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="w-100 border-top mt-1 mb-6" style="border: 3px dotted #8C8C8E;">
                    </div>
                </div>
                
                
            </div>
            <div class="col px-xl-4 my-3 my-lg-6">
                <order-detail class="w-100 mt-4 p-3" @sendOrder="createOrder" ref="orderDetail" />
            </div>
        </div>
    </div>



    <div class="container">
        <h1 class="pt-5 text-center">結帳</h1>
        <div class="row">
            <div class="col">
                <cart-list class="w-100 py-3" />
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
import { mapActions } from 'pinia';
import cartStore from '@/stores/cartStore';
import CartList from '@/components/week6/CartList.vue';
import OrderDetail from '@/components/week5/OrderDetail.vue';

export default {
    components: {
        CartList,
        OrderDetail
    },
    data() {
        return {
            apiUrl: import.meta.env.VITE_APP_URL,
            apiPath: import.meta.env.VITE_APP_PATH,
        }
    },
    methods: {
        ...mapActions(cartStore, ['getCart']),
        // POST 結帳
        createOrder(data) {
            const order = {
                data,
            };
            const url = `${this.apiUrl}/api/${this.apiPath}/order`;
            this.axios
            .post(url, order)
            .then((res) => {
                Swal.fire({
                    title: res.data.message,
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
                // OrderDetail重置表單
                this.$refs.orderDetail.resetForm();
                this.getCart();
            })
            .catch((err) => {
                Swal.fire({
                    title: err.data.message,
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            });
        },
    }
}
</script>