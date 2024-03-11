<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded-5 m-6">
            <div class="container p-5">
                <a class="navbar-brand mb-0 fs-2 fw-bold" href="index.html">funtime</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav gap-6">
                        <li class="nav-item">
                        <!-- RouterLink 生成路由連結，編譯後轉為 <a>，to 代表要進入的路由 -->
                            <RouterLink 
                            :to="{ name: 'home' }" class="nav-link text-decoration-none">{{ $t('menu.home') }}
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                        <!-- RouterLink 生成路由連結，編譯後轉為 <a>，to 代表要進入的路由 -->
                            <RouterLink 
                            :to="{ name: 'products' }" class="nav-link text-decoration-none">{{ $t('menu.products') }}</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink 
                            :to="{ name: 'articles' }" class="nav-link text-decoration-none">{{ $t('menu.articles') }}</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink 
                            :to="{ name: 'cart' }"
                            class="nav-link text-decoration-none"
                            >{{ $t('menu.cart') }}<span class="badge rounded-pill bg-danger ms-2">{{ cartList.length }}</span></RouterLink>
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
        <router-view></router-view>
    </main>
    <footer>
        <div class="bg-primary rounded-5 m-6 p-5">
            <div class="container">
                <nav class="navbar navbar-dark">
                    <div class="d-flex flex-column flex-md-row align-items-md-center">
                        <a class="navbar-brand mb-0 fs-2 fw-bold" href="index.html">funtime</a>
                        <span class="fs-4 text-white fw-bold">讓有趣的聖經企劃發生</span>
                    </div>
                    <ul class="navbar-nav flex-row gap-6">
                        <li class="nav-item">
                            <a class="nav-link text-decoration-none" href="#">聯繫我們
                            </a>
                        </li>
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
import { mapState } from "pinia";
import cartStore from "@/stores/cartStore";

export default {
  computed: {
    ...mapState(cartStore, ["cartList"]),
  },
  methods: {
    changeLanguage(event) {
        const selectLanguage = event.target.value;
        this.$i18n.locale = selectLanguage;
    },
  }
};
</script>

<style lang="scss">
.nav-link.active {
  color: white !important;
}
</style>