<template>
  <div class="m-3 m-lg-6 pb-3 pb-lg-10">
    <div class="container rounded-5 bg-light-gray p-10 p-md-20" data-aos="fade-up">
      <div class="row my-3 my-lg-6">
        <div class="col px-0 px-md-3">
          <div class="d-flex justify-content-between">
            <div class="d-flex align-items-baseline gap-2">
              <h2 class="d-none d-sm-block fw-bold mb-0">FAQ</h2>
              <h3 class="fw-bold mb-0">常見問題</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col-md-3 px-0 px-md-3">
          <ul class="list-unstyled">
            <li>
              <button @click="toggleCollapse('collapse1')" class="btn text-black fs-6 fw-bold" type="button">如何報名試玩？</button>
            </li>
            <li>
              <button @click="toggleCollapse('collapse2')" class="btn text-black fs-6 fw-bold" type="button">如何預購？</button>
            </li>
            <li>
              <button @click="toggleCollapse('collapse3')" class="btn text-black fs-6 fw-bold" type="button">何時到貨？</button>
            </li>
          </ul>
        </div>
        <div class="col-md-9 px-0 px-md-3">
          <!-- 手風琴 -->
          <ul class="accordion list-unstyled" id="accordionFAQ">
            <!-- 手風琴項目 -->
            <li v-for="(faq, index) in faqs" :key="index" class="accordion-item bg-transparent">
              <!-- button 可以呼叫 collapse，呼叫的目標是 #collapse1 -->
              <button class="accordion-button collapsed d-block px-3 px-xl-5 py-6 py-xl-8 bg-transparent" type="button" @click="toggleCollapse(faq.id)" :aria-expanded="faq.expanded" :aria-controls="faq.id">
                <!-- 標題 -->
                <div class="accordion-header row fs-4 text-dark fw-medium align-items-center">
                  <span class="fs-5 col-10 px-0 px-xl-3">
                    {{ faq.title }}
                  </span>
                  <!-- 按鈕 -->
                  <span class="col-2 d-flex justify-content-end justify-content-xl-start px-0 px-xl-3">
                    <i v-if="!faq.expanded" class="bi bi-plus-circle fs-4"></i>
                    <i v-else class="bi bi-dash-circle fs-4"></i>
                  </span>
                </div>
                <!-- 隱藏內容 -->
                <div :id="faq.id" class="accordion-collapse collapse row" data-bs-parent="#accordionFAQ" :class="{ show: faq.expanded }">
                  <!-- 和標題一樣寬 -->
                  <div class="col px-0 col-xl-9 px-xl-3">
                    <p class="accordion-body text-dark mt-2 mb-0 p-0">
                      {{ faq.content }}
                    </p>
                  </div>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script scope>
export default {
  data() {
    return {
      faqs: [
        { 
          id: 'collapse1',
          title: '如何報名試玩？',
          content: '輕鬆參與試玩！瀏覽我們的官方網站或應用程式，填寫簡單的報名表格，即可立即獲得試玩權限。無需任何費用或註冊，即可開始您的聖經體驗之旅！',
          expanded: false
        },
        { 
          id: 'collapse2',
          title: '如何預購？',
          content: '預訂您的產品輕而易舉！在我們的官方網站或應用程式中選擇您感興趣的產品，點擊“預購”按鈕，然後跟隨簡單的指引完成訂單。預購讓您能夠優先獲得產品，以確保您不會錯過！',
          expanded: false 
        },
        { 
          id: 'collapse3',
          title: '何時到貨？',
          content: '我們將盡快為您安排發貨！一旦您完成預購，我們將立即處理您的訂單。到貨時間會根據您所在地區和運送方式而有所不同。您可以在完成訂單後收到確認郵件，其中包含預計到貨日期的詳細信息。感謝您的耐心等待！',
          expanded: false
        }
      ],
    }
  },
  methods: {
    toggleCollapse(id) {
      const faq = this.faqs.find(item => item.id === id);
      if(faq) {
        faq.expanded = !faq.expanded;
      }
    },
  }
}
</script>