<template>
  <div class="col-md-7 px-xl-4">
    <div class="row row-cols-1 row-cols-lg-2 gy-4 p-5">
      <div class="col">
        <div class="card h-100 rounded-5 border border-info-light border-5 p-5">
          <div class="card-body d-flex flex-column justify-content-between gap-5">
            <div class="d-flex gap-2">
              <div class="rounded-circle overflow-hidden" style="width: 50px; height: 50px;">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="customer-feedback-avatar-man" class="object-fit-cover img-fluid">
              </div>
              <div class="d-flex flex-column justify-content-between text-start">
                <span class="fw-bold">王大衛</span>
                <small class="fst-italic">2024/03/13</small>
              </div>
            </div>
            <div class="d-flex gap-2">
              <i class="bi bi-star-fill fs-6"></i>
              <i class="bi bi-star-fill fs-6"></i>
              <i class="bi bi-star-fill fs-6"></i>
              <i class="bi bi-star-fill fs-6"></i>
              <i class="bi bi-star-fill fs-6"></i>
            </div>
            <p class="card-text text-start">原來聖經可以這樣讀！跟著故事圖卡和地圖，一起走入創世記〈1-50章〉，讓讀聖經變真實又有趣！</p>
            <div class="d-flex gap-2">
              <span class="badge rounded-pill bg-secondary text-black"># 試玩</span>
              <span class="badge rounded-pill bg-secondary text-black"># 讀經工具</span>
            </div>
          </div>
      </div>
      </div>
      <div class="col">
        <div class="card h-100 rounded-5 border border-info-light border-5 p-5">
          <div class="card-body d-flex flex-column justify-content-between gap-5">
            <div class="d-flex gap-2">
              <div class="rounded-circle overflow-hidden" style="width: 50px; height: 50px;">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="customer-feedback-avatar-woman" class="object-fit-cover img-fluid">
              </div>
              <div class="d-flex flex-column justify-content-between text-start">
                <span class="fw-bold">謝安娜</span>
                <small class="fst-italic">2024/01/11</small>
              </div>
            </div>
            <div class="d-flex gap-2">
              <i class="bi bi-star-fill fs-6"></i>
              <i class="bi bi-star-fill fs-6"></i>
              <i class="bi bi-star-fill fs-6"></i>
              <i class="bi bi-star-fill fs-6"></i>
              <i class="bi bi-star-fill fs-6"></i>
            </div>
            <p class="card-text text-start">全新聖經體驗，探索不一樣的聖經之旅！重新感受這段聖經故事的魅力，發現聖經的讀書體驗更加生動有趣！</p>
            <div class="d-flex gap-2">
              <span class="badge rounded-pill bg-secondary text-black"># 團契生活</span>
              <span class="badge rounded-pill bg-secondary text-black"># 試玩</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import userProductsStore from '@/stores/front/userProductsStore';

export default {
  computed: {
    ...mapState(userProductsStore, ['product']),
  },
}
</script>
