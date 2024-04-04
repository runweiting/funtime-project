<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container px-4">
        <h1 class="mb-0 overflow-hidden" style="white-space: nowrap;">
          <RouterLink 
            :to="{ name: 'admin/products' }" class="navbar-brand mb-0 fs-2 fw-bold">funtime
          </RouterLink>
        </h1>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav gap-2">
            <li class="nav-item">
              <!-- RouterLink 生成路由連結，編譯後轉為 <a>，to 代表要進入的路由 -->
              <RouterLink @click="closeNavbar"
              :to="{ name: 'admin/products' }" class="nav-link text-decoration-none">編輯商品</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink @click="closeNavbar"
              :to="{ name: 'admin/orders' }" class="nav-link text-decoration-none">編輯訂單</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink @click="closeNavbar"
              :to="{ name: 'admin/coupons' }" class="nav-link text-decoration-none">編輯優惠卷</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink @click="closeNavbar"
              :to="{ name: 'admin/articles' }" class="nav-link text-decoration-none">編輯文章</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink @click="closeNavbar"
              :to="{ name: 'home' }" class="nav-link text-decoration-none">回到前台</RouterLink>
            </li>
            <li class="nav-item">
              <button @click="logout" type="button" class="btn btn-warning">
                登出
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <main>
    <RouterView v-if="checkSuccess"/>
  </main>
</template>

<script>
import adminLoginStore from '@/stores/admin/adminLoginStore';
import { mapActions, mapState } from 'pinia';

export default {
  created() {
    this.checkLogin();
  },
  computed: {
    ...mapState(adminLoginStore, ['checkSuccess'])
  },
  methods: {
    ...mapActions(adminLoginStore, ['checkLogin', 'logout']),
    closeNavbar() {
      const navbarToggle = document.querySelector('.navbar-toggler');
      navbarToggle.click();
    },
  }
}
</script>

<style lang="scss">
.nav-link.active {
  color: white !important;
}
</style>