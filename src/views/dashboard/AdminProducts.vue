<template>
  <main class="container">
    <div class="row py-2">
      <div class="col mt-4 mb-4">
        <div class="container py-2">
          <h2>{{ title }}</h2>
          <div class="d-flex justify-content-between gap-2 py-2">
            <p class="p-2 mb-0">
              {{ `一頁顯示 ${Object.keys(this.tempProductList).length} 項商品` }}
            </p>
            <div class="d-flex justify-content-end gap-2">
              <button
                @click="openModal('new')"
                type="button"
                class="btn btn-primary"
                id="modalBtn"
              >
                建立新的商品
              </button>
            </div>
            <!-- editModal -->
            <edit-modal
              ref="editModal"
              :tempProduct="tempProduct" 
              :is-new="isNew"
              @getData="getProducts"
            >
            </edit-modal>
            <!-- delModal -->
            <del-modal
              ref="delModal" 
              :tempProduct="tempProduct" @getData="getProducts">
            </del-modal>
          </div>
        </div>
        <div class="container">
          <table class="table table-hover">
            <thead class="table-dark fw-bold">
              <tr>
                <th scope="col">商品主圖</th>
                <th scope="col">商品名稱</th>
                <th scope="col">分類</th>
                <th scope="col">原價</th>
                <th scope="col">售價</th>
                <th scope="col">是否啟用</th>
                <th scope="col">編輯</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tempProductList" :key="item.title">
                <td>
                  <img :src="item.imageUrl" class="rounded" style="height: 48px;">
                </td>
                <td>{{ item.title }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.origin_price }}</td>
                <td>{{ item.price }}</td>
                <td>
                  <i v-if="item.is_enabled" class="bi bi-check-circle-fill text-success" style="scale: 150%;"></i>
                  <i v-else class="bi bi-x-circle-fill text-danger" style="scale: 150%;"></i>
                </td>
                <td>
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic outlined example"
                  >
                    <button
                      @click="openModal('edit', item)"
                      type="button"
                      class="btn btn-outline-primary btn-sm"
                    >
                      編輯
                    </button>
                    <button
                      @click="openModal('delete', item)"
                      type="button"
                      class="btn btn-outline-danger btn-sm"
                    >
                      刪除
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <pagination-group @page-selected="handlePageChange"></pagination-group>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import adminProductsStore from '@/stores/dashboard/adminProductsStore';
import PaginationGroup from '@/components/week5/PaginationGroup.vue';
import EditModal from '../../components/week7/ProductEditModal.vue';
import DelModal from '../../components/week7/ProductDelModal.vue';

export default {
  components: {
    EditModal,
    DelModal,
    PaginationGroup,
  },
  data() {
    return {
      title: '這是商品頁面',
      isNew: false,
      tempProductList: [],
      tempProduct: {
        productRatings: 0,
        points: [],
        imagesUrl: [],
        tags: [],
        features: [],
        packages: [],
        contents: [],
        notes: []
      },
    };
  },
  created() {
    this.tempProductList = [
      ...this.productList
    ];
  },
  watch: {
    productList: {
      deep: true,
      handler(updateProductList) {
        this.tempProductList = updateProductList
      }
    }
  },
  computed: {
    ...mapState(adminProductsStore, ['productList']),
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    ...mapActions(adminProductsStore, ['getProducts', 'postProduct']),
    // 更新選取頁面的商品列表
    handlePageChange(category, page) {
      this.getProducts(category,page)
    },
    openModal(state, item) {
      // 新增
      if (state === 'new') {
        this.tempProduct = { 
          productRatings: 0,
          points: [],
          imagesUrl: [],
          tags: [],
          features: [],
          packages: [],
          contents: [],
          notes: []
        };
        this.isNew = true;
        // 使用 modalMixin.js
        this.$refs.editModal.openModal();
        // 編輯
      } else if (state === 'edit') {
        this.tempProduct = { ...item };
        // * 如果沒有多圖的 item，要新增多圖
        if (!Array.isArray(this.tempProduct.imagesUrl)) {
          this.tempProduct.imagesUrl = [];
        }
        this.isNew = false;
        this.$refs.editModal.openModal();
        // 刪除 -> 淺拷貝、開啟 delModal
      } else if (state === 'delete') {
        this.tempProduct = { ...item };
        this.$refs.delModal.openModal();
      }
    },
  },
};
</script>

<style>
/* label 樣式 */
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}
/* input 樣式，隱藏 checkbox */
.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}
/* span 樣式，透過 -webkit-transition 和 transition 屬性，設定滑動效果 */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
}
/* span :before 偽元素樣式 */
.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 2px;
  top: 2px;
  background-color: white;
  /*  -webkit- 支援舊版瀏覽器 */
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}
/* 當 input:checked .slider 圓點背景顏色變成綠色 */
input:checked + .slider {
  background-color: green;
}
/* 當 input:checked .slider:before 圓點滑動至右側 */
input:checked + .slider:before {
  /*  -webkit- 、 -ms- 支援舊版瀏覽器 */
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
</style>
