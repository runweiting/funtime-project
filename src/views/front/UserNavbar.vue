<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded-5 m-3 m-md-6">
      <div class="container p-5">
        <h1 class="mb-0 overflow-hidden" style="white-space: nowrap;">
          <RouterLink 
            :to="{ name: 'home' }" class="navbar-brand mb-0 fs-2 fw-bold">funtime
          </RouterLink>
        </h1>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav gap-6">
            <li class="nav-item">
              <RouterLink @click="closeNavbar" :to="{ name: 'home' }" class="nav-link text-decoration-none">
                {{ $t('menu.home') }}
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink @click="closeNavbar" :to="{ name: 'products' }" class="nav-link text-decoration-none">
                {{ $t('menu.products') }}
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink @click="closeNavbar" :to="{ name: 'collection' }" class="nav-link text-decoration-none">
                {{ $t('menu.collection') }}
              </RouterLink>
            </li>
            <li class="nav-item">
              <div v-if="isInputEnabled" class="input-group">
                <input v-model="tempOrderId" type="text" class="form-control" placeholder="請輸入訂單編號" aria-label="order-search" aria-describedby="order-search">
                <button @click="goToOrder(this.tempOrderId)" class="btn btn-outline-secondary" type="button">確認</button>
              </div>
              <a v-else @click="toggleSearch" class="nav-link text-decoration-none">
                {{ $t('menu.search') }}
              </a>
            </li>
            <li class="nav-item">
              <select class="form-select" @change="changeLanguage">
                <option value="zh-TW">中文</option>
                <option value="en">英文</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <div class="sticky-footer bg-primary rounded-5 m-3 m-md-6">
      <div class="container p-5">
        <nav class="navbar navbar-dark">
            <div class="d-flex flex-column flex-md-row align-items-md-center">
                <a class="navbar-brand mb-0 fs-2 fw-bold" href="index.html">funtime</a>
                <span class="fs-4 text-white fw-bold">讓有趣的聖經企劃發生</span>
            </div>
            <ul class="navbar-nav flex-row gap-6">
                <li class="nav-item">
                    <RouterLink
                    :to="{ name: 'login' }"
                    class="nav-link text-decoration-none">{{ $t('menu.login') }}</RouterLink>
                </li>
            </ul>
        </nav>
        <hr class="border-bottom border-white border-opacity-25">
        <div class="d-flex flex-column gap-2 flex-sm-row justify-content-sm-between">
          <small class="d-flex flex-column gap-0 flex-md-row align-items-md-center gap-md-6 text-white">
            <span>Copyright ©2023 whatisfuntime</span>
            <span>All rights reserved.</span>
            <span>隱私權政策</span>
            <span>Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA" class="text-white">Icons 8</a> from <a href="https://icons8.com/illustrations" class="text-white">Ouch!</a></span>
            <span>Photo by <a href="https://unsplash.com/" class="text-white">Unsplash</a></span>
          </small>
          <div class="d-flex align-items-center gap-6 fs-5 text-white">
            <i class="bi bi-line"></i>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-envelope-fill"></i>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState, mapActions } from "pinia";
import userOrderStore from "@/stores/front/userOrderStore";
import showWarningToast from "@/utils/showWarningToast";

export default {
  data() {
    return {
      isInputEnabled: false,
      tempOrderId: ''
    }
  },
  mounted() {
    this.getOrders();
  },
  computed: {
    ...mapState(userOrderStore, ['orders'])
  },
  methods: {
    ...mapActions(userOrderStore, ['getOrders']),
    toggleSearch() {
      this.isInputEnabled = !this.isInputEnabled
    },
    changeLanguage(event) {
      const selectLanguage = event.target.value;
      this.$i18n.locale = selectLanguage;
    },
    closeNavbar() {
      const navbarToggle = document.querySelector('.navbar-toggler');
      const isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';
      if (isNavbarExpanded) {
        navbarToggle.click();
      }
    },
    // 查詢、核對訂單
    goToOrder(orderId) {
      if (orderId === '') {
        showWarningToast('請填入訂單編號');
        return
      };
      const targetOrder = this.orders.find(order => order.id === orderId);
      if (!targetOrder) {
        showWarningToast('查無此訂單編號');
        return
      };
      this.$router.push({ name: "order-search", params: { orderId } });
      this.tempOrderId = '';
      this.isInputEnabled = false;
      this.closeNavbar();
    }
  }
};
</script>

<style lang="scss">
.nav-link.active {
    color: white !important;
}

.sticky-footer {
  position: sticky;
  bottom: 0;
}
</style>