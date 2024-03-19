<template>
  <!-- editModal -->
  <div
    class="modal fade"
    id="editModal"
    tabindex="-1"
    aria-labelledby="editModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-dark opacity-75 text-white">
          <h5 class="modal-title" id="editModalLabel">
            <span v-if="isNew">新增專案</span>
            <span v-else>編輯專案 ID:{{ selectedProduct.id }}</span>
          </h5>
          <button @click="cancelUpdate"
            type="button"
            class="btn btn-outline-light"
            data-bs-dismiss="modal"
            aria-label="Close"
          ><i class="bi bi-x-lg"></i></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row mb-5">
              <div class="col-md-3">
                <h5>專案內容</h5>
              </div>
              <div class="col-md-9">
                <button @click="togglerEdit" type="button" class="btn btn-warning">編輯商品</button>
              </div>
            </div>
            <div class="row">
              <!-- 圖片 -->
              <div class="col-md-3">
                <div class="mb-4">
                  <label for="imgUrl" class="form-label">主要圖片</label>
                  <input
                    v-model="selectedProduct.imageUrl" :disabled="inputDisabled" 
                    type="url"
                    class="form-control mb-2"
                    id="imgUrl"
                    placeholder="請輸入網址"
                  />
                  <img :src="selectedProduct.imageUrl" class="img-fluid" />
                </div>
                <!-- 多圖新增 -->
                <h4 class="fw-bold">多圖新增</h4>
                <!-- // ? v-if 資料是否已有多圖，有則顯示，沒有不顯示 -->
                <div v-if="Array.isArray(selectedProduct.imagesUrl)" class="mb-4">
                  <div v-for="(imgUrl, index) in selectedProduct.imagesUrl" :key="`url${index}`">
                    <label :for="`url${index}`" class="form-label"
                      >圖片網址</label
                    >
                    <input
                      :id="`url${index}`"
                      v-model="selectedProduct.imagesUrl[index]" :disabled="inputDisabled" 
                      type="url"
                      class="form-control mb-2"
                      placeholder="請輸入網址"
                    />
                    <img
                      :src="selectedProduct.imagesUrl[index]"
                      class="img-fluid mb-2"
                    />
                  </div>
                  <div class="d-flex gap-2">
                    <!--
                      // ? 如沒有資料則可新增 or 最後一個有值顯示新增按鈕
                      // * 新增空字串到 imagesUrl，以觸發 v-if + v-for 渲染
                    -->
                    <button
                      v-if="
                        selectedProduct.imagesUrl.length === 0 ||
                        selectedProduct.imagesUrl[selectedProduct.imagesUrl.length - 1]
                      "
                      @click="selectedProduct.imagesUrl.push('')"
                      type="button"
                      class="btn btn-outline-primary w-100"
                    >
                      新增圖片
                    </button>
                    <button
                      @click="selectedProduct.imagesUrl.pop()"
                      type="button"
                      class="btn btn-outline-danger w-100"
                    >
                      刪除圖片
                    </button>
                  </div>
                </div>
                <!-- 上傳圖片 -->
                <h4 class="fw-bold">上傳圖片</h4>
                <div class="mb-4">
                  <input
                    @change="upload" :disabled="inputDisabled" 
                    class="form-control"
                    type="file"
                    id="formFile"
                    placeholder="請輸入圖片連結"
                  />
                </div>
              </div>
              <!-- 內容 -->
              <div class="col-md-9">
                <!-- 標題 -->
                <div class="row">
                  <div class="col-8">
                    <label for="title" class="form-label">完整標題</label>
                    <input
                      v-model="selectedProduct.title" :disabled="inputDisabled" 
                      type="text"
                      class="form-control mb-4"
                      name="full-title"
                      placeholder="請輸入完整標題"
                    />
                  </div>
                  <div class="col-4">
                    <label for="short-title" class="form-label">簡短標題</label>
                    <input
                      v-model="selectedProduct.short_title" :disabled="inputDisabled" 
                      type="text"
                      class="form-control mb-4"
                      name="short-title"
                      placeholder="請輸入簡單標題"
                    />
                  </div>
                </div>
                <!-- 描述 -->
                <div class="row mb-4">
                  <div class="col">
                    <label for="description" class="form-label">商品描述</label>
                    <textarea
                      v-model="selectedProduct.description" :disabled="inputDisabled" 
                      class="form-control"
                      placeholder="請輸入專案描述"
                      id="description"
                    ></textarea>
                  </div>
                </div>
                <!-- 提案人、#標籤、特色 -->
                <div class="row mb-4">
                  <div class="col">
                    <label for="proposer" class="form-label">提案人</label>
                    <input
                      v-model="selectedProduct.proposer" :disabled="inputDisabled" 
                      type="text"
                      class="form-control"
                      id="unit"
                      placeholder="請輸入名稱"
                    />
                  </div>
                  <div class="col">
                    <label for="tags" class="form-label">標籤</label>
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="請輸入標籤" v-model="newTag" @keyup.enter="addTag" :disabled="inputDisabled">
                      <button class="btn btn-outline-secondary" type="button" @click="addTag">新增</button>
                    </div>
                    <div class="d-flex flex-wrap gap-2">
                      <span class="badge bg-secondary d-flex align-items-center" v-for="(tag, index) in selectedProduct.tags" :key="index" style="opacity: 0.75;">
                        <span>{{ tag }}</span>
                        <button type="button" class="btn-close" aria-label="Close" @click="removeTag(index)" style="scale: 0.75;">
                        </button>
                      </span>
                    </div>
                  </div>
                  <div class="col">
                    <label for="features" class="form-label">特色</label>
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="請輸入特色" v-model="newFeature" @keyup.enter="addFeature" :disabled="inputDisabled">
                      <button class="btn btn-outline-secondary" type="button" @click="addFeature">新增</button>
                    </div>
                    <div class="d-flex flex-wrap gap-2">
                      <span class="badge bg-secondary d-flex align-items-center" v-for="(feature, index) in selectedProduct.features" :key="index" style="opacity: 0.75;">
                        <span>{{ feature }}</span>
                        <button type="button" class="btn-close" aria-label="Close" @click="removeFeature(index)" style="scale: 0.75;">
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
                <!-- 分類、目標組數、單位 -->
                <div class="row">
                  <div class="col">
                    <label for="category" class="form-label">分類</label>
                    <select v-model="selectedProduct.category" :disabled="inputDisabled" class="form-select" aria-label="category">
                      <option value="" selected disabled>請輸入分類</option>
                      <option value="地圖">地圖</option>
                      <option value="卡牌">卡牌</option>
                      <option value="棋盤">棋盤</option>
                      <option value="擲骰">擲骰</option>
                    </select>
                  </div>
                  <div class="col">
                    <label for="target_units" class="form-label">目標組數</label>
                    <input
                      v-model.number="selectedProduct.target_units" :disabled="inputDisabled" 
                      type="number"
                      min="0"
                      class="form-control"
                      id="target_units"
                      placeholder="請輸入目標組數"
                    />
                  </div>
                  <div class="col">
                    <label for="unit" class="form-label">單位</label>
                    <input
                      v-model="selectedProduct.unit" :disabled="inputDisabled" 
                      type="text"
                      class="form-control"
                      id="unit"
                      placeholder="請輸入單位"
                    />
                  </div>
                </div>
                <hr class="w-100 border-top my-8" style="border: 3px dotted #8C8C8E;">
                <!-- 困擾 -->
                <div class="row mb-4">
                  <div class="col">
                    <label for="content_question" class="form-label">困擾標題</label>
                    <input
                      v-model="selectedProduct.question" :disabled="inputDisabled" 
                      type="text"
                      class="form-control"
                      id="content_question"
                      placeholder="請輸入困擾標題"
                    />
                  </div>
                </div>
                <!-- 設計特點 -->
                <div class="row mb-4">
                  <div class="col-4">
                    <label for="point-title" class="form-label">設計特點</label>
                    <input type="text" class="form-control" placeholder="請輸入特點" v-model="newPoint.title" :disabled="inputDisabled">
                  </div>
                  <div class="col-8">
                    <label for="point-content" class="form-label">設計內容</label>
                      <textarea
                        v-model="newPoint.content" :disabled="inputDisabled" 
                        class="form-control"
                        placeholder="請輸入內容"
                        id="point-content"
                      ></textarea>
                  </div>
                </div>
                <!-- 情境圖片 -->
                <div class="row align-items-center">
                  <div class="col">
                    <label for="point-imgUrl" class="form-label">情境圖片</label>
                    <input 
                      v-model="newPoint.imageUrl" :disabled="inputDisabled" 
                      type="url"
                      class="form-control"
                      id="point-imgUrl"
                      placeholder="請輸入網址"
                    />
                  </div>
                  <div class="col">
                    <img :src="newPoint.imageUrl" class="img-fluid" />
                  </div>
                  <div class="col mt-auto">
                    <button class="btn btn-outline-secondary" type="button" @click="addPoint">新增</button>
                  </div>
                </div>
                <div class="row">
                  <div class="col d-flex flex-wrap gap-2">
                      <span class="badge bg-secondary d-flex align-items-center" v-for="(point, index) in selectedProduct.points" :key="index" style="opacity: 0.75;">
                        <span>{{ point }}</span>
                        <button type="button" class="btn-close" aria-label="Close" @click="removePoint(index)" style="scale: 0.75;">
                        </button>
                      </span>
                  </div>
                </div>
                <hr class="w-100 border-top my-8" style="border: 3px dotted #8C8C8E;">
                <!-- 售價、折扣 -->
                <div class="row mb-4">
                  <div class="col">
                    <label for="original-price" class="form-label">售價</label>
                    <input
                      v-model.number="selectedProduct.origin_price" :disabled="inputDisabled" 
                      type="number"
                      min="0"
                      class="form-control"
                      id="original-price"
                      placeholder="請輸入售價"
                    />
                  </div>
                  <div class="col">
                    <label for="discount" class="form-label">折扣</label>
                    <input @keyup="calculatePrice"
                      v-model.number="selectedProduct.discount" :disabled="inputDisabled" 
                      type="number"
                      min="0"
                      class="form-control"
                      id="discount"
                      placeholder="請輸入折扣"
                    />
                  </div>
                  <div class="col">
                    <label for="original-price" class="form-label">折扣價</label>
                    <input
                      v-model.number="selectedProduct.price" disabled 
                      type="number"
                      class="form-control"
                      id="original-price"
                    />
                  </div>
                </div>
                <!-- 優惠套裝 -->
                <div class="row">
                  <div class="col">
                    <label for="package-name" class="form-label">套裝名稱</label>
                    <input type="text" class="form-control" placeholder="請輸入名稱" v-model="newPackage.name" :disabled="inputDisabled">
                  </div>
                  <div class="col">
                    <label for="package-units" class="form-label">內含組數</label>
                    <input type="number" min="0" class="form-control" placeholder="請輸入組數" v-model.number="newPackage.units" :disabled="inputDisabled">
                  </div>
                  <div class="col mt-auto">
                    <button class="btn btn-outline-secondary" type="button" @click="addPackage">新增</button>
                  </div>
                </div>
                <div class="row">
                  <div class="col d-flex flex-wrap gap-2">
                      <span class="badge bg-secondary d-flex align-items-center" v-for="(item, index) in selectedProduct.packages" :key="item.name" style="opacity: 0.75;">
                        <span>{{ item }}</span>
                        <button type="button" class="btn-close" aria-label="Close" @click="removePoint(index)" style="scale: 0.75;">
                        </button>
                      </span>
                  </div>
                </div>
                <hr class="w-100 border-top my-8" style="border: 3px dotted #8C8C8E;">
                <!-- 商品評價 -->
                <div class="row">
                  <div class="col">
                    <label for="range" class="form-label">商品評價</label>
                    <span class="ms-2 text-primary fw-bold fs-5">
                      {{ selectedProduct.productRatings }} 分
                    </span>
                    <input
                      v-model="selectedProduct.productRatings" :disabled="inputDisabled" 
                      type="range"
                      class="form-range"
                      min="0"
                      max="5"
                      step="1"
                    />
                  </div>
                  <div class="col mt-auto">
                    <div class="form-check pb-2">
                      <label class="form-label m-0" for="product-active">啟用商品</label>
                      <label class="switch ms-2">
                        <!-- <input> 開關、<span> 滑動圓點 -->
                        <input v-model="selectedProduct.is_enabled" :disabled="inputDisabled" type="checkbox">
                        <span class="slider"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button @click="cancelUpdate" 
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button @click="updateProduct(this.isNew, this.selectedProduct)" type="button" class="btn btn-primary">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import adminProductsStore from '@/stores/dashboard/adminProductsStore';
import modalMixin from '@/mixins/modalMixin';

// const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  props: {
    tempProduct: Object,
    isNew: Boolean,
  },
  data() {
    return {
      editModal: null,
      selectedProduct: {
        productRatings: 0,
        points: [],
        imagesUrl: [],
        tags: [],
        features: [],
        packages: [],
      },
      inputDisabled: true,
      // price
      newPrice: 0,
      // tags
      newTag: '',
      // feature
      newFeature: '',
      // point
      newPoint: {
        title: '',
        content: '',
        imageUrl: ''
      },
      // package
      newPackage: {
        name: '',
        units: 0
      },
    };
  },
  emit: ['getData'],
  mixins: [modalMixin],
  created() {
    // 初始化 selectedProduct
    this.selectedProduct = {
      ...this.tempProduct,
    };
  },
  computed: {
    ...mapState(adminProductsStore, ['modalState']),
  },
  watch: {
    tempProduct: {
      deep: true,
      handler(updateTempProduct) {
        this.selectedProduct = updateTempProduct;
      }
    },
    modalState: {
      handler(newState) {
        // modalState 變為 false 時，隱藏 modal
        if (!newState) {
          this.hideModal();
        }
      },
    immediate: true // 立即執行一次
    },
  },
  methods: {
    ...mapActions(adminProductsStore, ['updateProduct', 'upload']),
    // calculatePrice
    calculatePrice() {
      this.newPrice = this.selectedProduct.origin_price * this.selectedProduct.discount;
      this.selectedProduct.price = this.newPrice;
    },
    // tag
    addTag() {
      if (this.newTag.trim() !== '') {
        this.selectedProduct.tags.push(this.newTag.trim());
        this.newTag = '';
      }
    },
    removeTag(index) {
      this.selectedProduct.tags.splice(index, 1);
    },
    // feature
    addFeature() {
      if (this.newFeature.trim() !== '') {
        this.selectedProduct.features.push(this.newFeature.trim());
        this.newFeature = '';
      }
    },
    removeFeature(index) {
      this.selectedProduct.features.splice(index, 1);
    },
    // point
    addPoint() {
      if (this.newPoint.title.trim() !== '' && this.newPoint.content.trim() !== '' && this.newPoint.imageUrl.trim() !== '') {
        this.selectedProduct.points.push(this.newPoint);
        this.newPoint = {};
      }
    },
    removePoint(index) {
      this.selectedProduct.points.splice(index, 1);
    },
    // package
    addPackage() {
      if (this.newPackage.name.trim() !== '' && this.newPackage.units !== 0) {
        this.selectedProduct.packages.push(this.newPackage);
        this.newPackage = {};
      }
    },
    removePackage(index) {
      this.selectedProduct.packages.splice(index, 1);
    },
    // 修改訂單
    togglerEdit() {
      this.inputDisabled = false;
    },
    // 取消編輯
    cancelUpdate() {
      this.inputDisabled = true;
      this.selectedProduct = {};
    },
    
    // // POST or PUT 新增商品
    // updateData() {
    //   // -> 新增商品
    //   let url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product`;
    //   let method = 'post';
    //   // -> 編輯商品
    //   if (!this.isNew) {
    //     url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product/${this.selectedProduct.id}`;
    //     method = 'put';
    //   }
    //   this.axios[method](url, {
    //     data: this.selectedProduct,
    //   })
    //     .then((res) => {
    //       showSuccessToast(res.data.message);
    //       this.modal.hide();
    //       this.$emit('getData');
    //     })
    //     .catch((err) => {
    //       showErrorToast(err.response.data.message);
    //     });
    // },
    // // 上傳圖片
    // upload() {
    //   const fileInput = document.querySelector('#formFile');
    //   // 取出 fileInput 內的 file 物件
    //   const file = fileInput.files[0];
    //   // 新增 formData 物件
    //   const formData = new FormData();
    //   // 在 formData 最後一個子節點插入 file 和 'file-to-upload'
    //   formData.append('file-to-upload', file);
    //   const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/upload`;
    //   this.axios.post(url, formData);
    // },
  },
};
</script>
<style scope>
::placeholder {
  color: #c5c5c5 !important;
}
</style>