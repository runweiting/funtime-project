<template>
  <div class="m-3 m-lg-6">
    <div class="container p-10 p-md-20 position-relative" data-aos="fade-up">
      <div class="row my-3 my-lg-6">
        <div class="col px-0 px-md-3">
          <div class="d-flex justify-content-between">
            <div class="d-flex align-items-baseline gap-2">
              <h2 class="d-none d-sm-block fw-bold mb-0">Feedback</h2>
              <h3 class="fw-bold mb-0">大家怎麼說</h3>
            </div>
            <div class="d-none d-lg-block d-lg-flex align-items-lg-end gap-2">
              <span>認識朋友</span>
              <i class="bi bi-dot text-primary"></i>
              <span>互動學習</span>
              <i class="bi bi-dot text-primary"></i>
              <span>一起成長</span>
            </div>
          </div>
        </div>
      </div>
      <div class="row ">
        <div class="col px-0 px-md-3" style="width: 100vw">
          <swiper 
          :grabCursor="true"
          :slides-per-view="1"
          :spaceBetween="24"
          :centeredSlides="true"
          :autoplay="{
              delay: 3000,
              disableOnInteraction: true,
          }"
          :modules="swiperEffects.feedBack.modules"
          :loop="true"
          :breakpoints="{
              992: {
                  slidesPerView: 3,
              },
          }"
          >
            <swiper-slide>
              <div class="card h-100 rounded-5 border border-info-light border-10 p-5">
                <div class="card-body d-flex flex-column justify-content-between gap-5">
                  <div class="d-flex gap-2">
                    <div class="rounded-circle overflow-hidden" style="width: 50px; height: 50px;">
                      <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar1" class="object-fit-cover img-fluid">
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
            </swiper-slide>
            <swiper-slide>
              <div class="card h-100 rounded-5 border border-info-light border-10 p-5">
                <div class="card-body d-flex flex-column justify-content-between gap-5">
                  <div class="d-flex gap-2">
                    <div class="rounded-circle overflow-hidden" style="width: 50px; height: 50px;">
                      <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar1" class="object-fit-cover img-fluid">
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
            </swiper-slide>
            <swiper-slide>
              <div class="card h-100 rounded-5 border border-info-light border-10 p-5">
                <div class="card-body d-flex flex-column justify-content-between gap-5">
                  <div class="d-flex gap-2">
                    <div class="rounded-circle overflow-hidden" style="width: 50px; height: 50px;">
                      <img src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar1" class="object-fit-cover img-fluid">
                    </div>
                    <div class="d-flex flex-column justify-content-between text-start">
                      <span class="fw-bold">張約翰</span>
                      <small class="fst-italic">2023/12/13</small>
                    </div>
                  </div>
                  <div class="d-flex gap-2">
                    <i class="bi bi-star-fill fs-6"></i>
                    <i class="bi bi-star-fill fs-6"></i>
                    <i class="bi bi-star-fill fs-6"></i>
                    <i class="bi bi-star-fill fs-6"></i>
                    <i class="bi bi-star-fill fs-6"></i>
                  </div>
                  <p class="card-text text-start">深入了解耶穌和早期基督教社群的教導。從登山寶訓到保羅的試煉，深入探索新約聖經中蘊含的深刻信息和歷史背景。
                  </p>
                  <div class="d-flex gap-2">
                    <span class="badge rounded-pill bg-secondary text-black"># 試玩</span>
                    <span class="badge rounded-pill bg-secondary text-black"># 耶穌基督</span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card h-100 rounded-5 border border-info-light border-10 p-5">
                <div class="card-body d-flex flex-column justify-content-between gap-5">
                  <div class="d-flex gap-2">
                    <div class="rounded-circle overflow-hidden" style="width: 50px; height: 50px;">
                      <img src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar1" class="object-fit-cover img-fluid">
                    </div>
                    <div class="d-flex flex-column justify-content-between text-start">
                      <span class="fw-bold">李莉亞</span>
                      <small class="fst-italic">2023/11/01</small>
                    </div>
                  </div>
                  <div class="d-flex gap-2">
                    <i class="bi bi-star-fill fs-6"></i>
                    <i class="bi bi-star-fill fs-6"></i>
                    <i class="bi bi-star-fill fs-6"></i>
                    <i class="bi bi-star-fill fs-6"></i>
                    <i class="bi bi-star-fill fs-6"></i>
                  </div>
                  <p class="card-text text-start">重新發現耶穌的比喻！透過生動的插圖和相應的反思，跟隨路加福音的旅程，發掘每個故事中蘊含的永恆智慧。
                  </p>
                  <div class="d-flex gap-2">
                    <span class="badge rounded-pill bg-secondary text-black"># 耶穌的比喻</span>
                    <span class="badge rounded-pill bg-secondary text-black"># 好玩有趣</span>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 1. 匯入 Swiper、SwiperSlide
import { Swiper, SwiperSlide } from 'swiper/vue';
// 2. side effect Swiper css
import 'swiper/css';
// 3. side effect 所需 modules 的 css
import 'swiper/css/autoplay'
// 4. 在 assets/scss/component 匯入自定義 scss
// 5. 依需求匯入所需 modules
import { Autoplay } from 'swiper/modules';

export default {
  // 6. 註冊元件
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      // 7. 設置 swiperEffect 为卡片效果
      // 8. 將 EffectCards 加到 swiperModules 中
      swiperEffects: {
        feedBack: {
          modules: [Autoplay],
        },
      },
    }
  }
}
</script>