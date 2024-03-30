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
            <EditModal
              ref="editModal"
              :tempProduct="tempProduct" 
              :is-new="isNew"
              @getData="getProducts"
            />
            <DelModal
              ref="delModal" 
              :tempProduct="tempProduct" @getData="getProducts" />
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
        <PaginationGroup :pagination="pagination" @getPages="getPages" />
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import adminProductsStore from '@/stores/admin/adminProductsStore';
import PaginationGroup from '@/components/admin/PaginationGroup.vue';
import EditModal from '@/components/admin/ProductEditModal.vue';
import DelModal from '@/components/admin/ProductDelModal.vue';

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
    ...mapState(adminProductsStore, ['productList', 'pagination']),
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    ...mapActions(adminProductsStore, ['getProducts', 'postProduct']),
    // pagination 換頁時更新當前頁面
    getPages(page) {
      this.getProducts(page)
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
  width: 0;
  height: 0;
  opacity: 0;
}

/* span 樣式，transition 設定滑動效果 */
.slider {
  position: absolute;
  inset: 0;
  background-color: #ccc;
  border-radius: 34px;
  cursor: pointer;
  transition: .4s;
}

/* span :before 偽元素樣式 */
.slider::before {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  transition: .4s;
  content: "";
}

/* 當 input:checked .slider 圓點背景顏色變成綠色 */
input:checked + .slider {
  background-color: green;
}

/* 當 input:checked .slider:before 圓點滑動至右側 */
input:checked + .slider::before {
  transform: translateX(26px);
}
</style>