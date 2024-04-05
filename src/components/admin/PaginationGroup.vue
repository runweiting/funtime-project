<template>
  <div class="px-4">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <!-- 前一頁 -->
        <li :class="{ disabled: pagination.current_page === 1 }" class="page-item">
          <a
            @click.prevent="getPages(pagination.current_page - 1)"
            class="page-link"
            href="#"
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <!-- 頁碼 -->
        <li
          v-for="num in getPagesTotalNum()"
          :key="num"
          :class="{ active: num === pagination.current_page }"
          class="page-item"
        >
          <!-- 如為當前頁面 -->
          <span v-if="num === pagination.current_page" class="page-link">{{
            num
          }}</span>
          <!-- 不是當前頁面，可點擊 item 頁 -->
          <a
            v-else
            @click.prevent="getPages(num)"
            class="page-link"
            href="#"
            >{{ num }}</a
          >
        </li>
        <!-- 下一頁 -->
        <li
          :class="{ disabled: pagination.current_page === pagination.total_pages }"
          class="page-item"
        >
          <a
            @click.prevent="getPages(pagination.current_page + 1)"
            class="page-link"
            href="#"
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    pagination: {
      type: Object,
    }
  },
  emits: ['getPages'],
  methods: {
    getPages(page) {
      this.$emit('getPages', page)
    },
    getPagesTotalNum() {
      return Array.from({ length: this.pagination.total_pages }, (_, index) => index + 1);
    },
  }
};
</script>
