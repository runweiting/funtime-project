<template>
  <div class="container">
    <div class="row py-2">
      <main class="col mt-4 mb-4">
        <div class="container py-2">
          <h2>這是文章頁面</h2>
          <div class="d-flex justify-content-between gap-2 py-2">
            <p class="p-2 mb-0">
            {{ `一頁顯示 ${Object.keys(this.tempArticleList).length} 篇文章` }}
            </p>
            <div class="d-flex justify-content-end gap-2">
              <button @click="openModal('new')" type="button" class="btn btn-danger">
                新增文章
              </button>
            </div>
            <ArticleModal ref="articleModal" :is-new="isNew" />
          </div>
        </div>
        <div class="container">
          <table class="table table-hover">
            <thead class="table-dark">
              <tr class="fw-bold">
                <th scope="col">發佈日期</th>
                <th scope="col">文章標題</th>
                <th scope="col">作者名稱</th>
                <th scope="col">是否公開</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="tempArticleList.length === 0">
                <td colspan="7">
                  <small class="text-muted">
                    目前沒有任何文章
                  </small>
                </td>
              </tr>
              <tr v-for="item in tempArticleList" :key="item.title">
                <td>{{ formatDate(item.create_at) }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.author }}</td>
                <td>
                  <i v-if="item.isPublic" class="bi bi-check-circle-fill text-success" style="scale: 150%;"></i>
                  <i v-else class="bi bi-x-circle-fill text-danger" style="scale: 150%;"></i>
                </td>
                <td>
                  <div class="btn-group" role="group">
                    <button @click="openModal('edit', item.id)" type="button" class="btn btn-outline-primary btn-sm">
                    編輯
                    </button>
                    <button @click="deleteArticle(item.id, currentPage)" type="button" class="btn btn-outline-danger btn-sm">
                    刪除
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <PaginationGroup :pagination="pagination" @getPages="getPages" />
      </main>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import adminArticlesStore from '@/stores/admin/adminArticlesStore';
import timestampToDate from '@/utils/timestampToDate';
import ArticleModal from '@/components/admin/ArticleModal.vue'
import PaginationGroup from '@/components/admin/PaginationGroup.vue';

export default {
  components: {
    ArticleModal,
    PaginationGroup
  },
  data() {
    return {
      title: '文章列表',
      isNew: false,
      tempArticleList: [],
    }
  },
  created() {
    this.tempArticleList = [
      ...this.articleList
    ];
  },
  watch: {
    articleList: {
      deep: true,
      handler(updateArticleList) {
        this.tempArticleList = updateArticleList
      }
    }
  },
  computed: {
    ...mapState(adminArticlesStore, ['articleList', 'pagination', 'currentPage']),
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    ...mapActions(adminArticlesStore, ['getArticles', 'getArticle', 'deleteArticle', 'postArticle']),
    // pagination 換頁時更新當前頁面
    getPages(page) {
      this.getArticles(page)
    },
    formatDate(timestamp) {
      const { formattedDate } = timestampToDate(timestamp);
      return formattedDate;
    },
    async openModal(state, id) {
      // 新增
      if (state === 'new') {
        this.postArticle();
        this.isNew = true;
        this.$refs.articleModal.openModal();
        // 編輯 
      } else if (state === 'edit') {
        await this.getArticle(id);
        this.isNew = false;
        this.$refs.articleModal.openModal();
      }
    }
  }
}
</script>