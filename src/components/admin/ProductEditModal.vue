<template>
  <div class="modal fade" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-dark opacity-75 text-white">
          <h5 class="modal-title" id="editModalLabel">
            <span v-if="isNew">新增商品</span>
            <span v-else>編輯商品編號：{{ selectedProduct.id }}</span>
          </h5>
          <button @click="cancelUpdate" type="button" class="btn btn-outline-light" data-bs-dismiss="modal" aria-label="Close">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row mb-5">
              <div class="col-md-3">
                <h5>專案內容</h5>
              </div>
            </div>
            <div class="row">
              <!-- 圖片 -->
              <div class="col-md-3">
                <div class="mb-4">
                  <label for="imgUrl" class="form-label">主要圖片</label>
                  <input id="imgUrl" v-model="selectedProduct.imageUrl" type="url" class="form-control mb-2" placeholder="請輸入網址"/>
                  <img :src="selectedProduct.imageUrl" alt="商品主圖" class="img-fluid" />
                </div>
                <!-- 多圖新增 -->
                <h4 class="fw-bold">多圖新增</h4>
                <!-- // ? v-if 資料是否已有多圖，有則顯示，沒有不顯示 -->
                <div v-if="Array.isArray(selectedProduct.imagesUrl)" class="mb-4">
                  <div v-for="(imgUrl, index) in selectedProduct.imagesUrl" :key="`url${index}`">
                    <label :for="`url${index}`" class="form-label">圖片網址</label>
                    <input :id="`url${index}`" v-model="selectedProduct.imagesUrl[index]"  type="url" class="form-control mb-2" placeholder="請輸入網址"/>
                    <img :src="selectedProduct.imagesUrl[index]" alt="商品圖片" class="img-fluid mb-2" />
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
                      class="btn btn-primary w-100"
                    >
                      新增圖片
                    </button>
                    <button @click="selectedProduct.imagesUrl.pop()" type="button" class="btn btn-danger text-white w-100">
                      刪除圖片
                    </button>
                  </div>
                </div>
                <!-- 上傳圖片 -->
                <h4 class="fw-bold">上傳圖片</h4>
                <div class="mb-4">
                  <input @change="upload" class="form-control" type="file" id="formFile" placeholder="請輸入圖片連結"/>
                </div>
              </div>
              <!-- 內容 -->
              <div class="col-md-9">
                <!-- 標題 -->
                <div class="row">
                  <div class="col-8">
                    <label for="title" class="form-label">完整標題</label>
                    <input id="title" v-model="selectedProduct.title" type="text" class="form-control mb-4" name="full-title" placeholder="請輸入完整標題"/>
                  </div>
                  <div class="col-4">
                    <label for="short-title" class="form-label">簡短標題</label>
                    <input id="short-title" v-model="selectedProduct.short_title" type="text" class="form-control mb-4" name="short-title" placeholder="請輸入簡單標題"/>
                  </div>
                </div>
                <!-- 描述 -->
                <div class="row mb-4">
                  <div class="col">
                    <label for="description" class="form-label">專案描述</label>
                    <textarea id="description" v-model="selectedProduct.description" class="form-control" placeholder="請輸入專案描述" rows="3"></textarea>
                  </div>
                </div>
                <!-- 提案人、#標籤、特色 -->
                <div class="row mb-4">
                  <div class="col">
                    <label for="proposer" class="form-label">提案人</label>
                    <input id="proposer" v-model="selectedProduct.proposer" type="text" class="form-control" placeholder="請輸入名稱"/>
                  </div>
                  <div class="col">
                    <label for="tags" class="form-label">標籤</label>
                    <div class="input-group mb-2">
                      <input id="tags" type="text" class="form-control" placeholder="請輸入標籤" v-model="newTag" @keyup.enter="addTag">
                      <button class="btn btn-gray text-white" type="button" @click="addTag">新增</button>
                    </div>
                    <div class="d-flex flex-wrap gap-2">
                      <span class="badge bg-primary d-flex align-items-center" v-for="(tag, index) in selectedProduct.tags" :key="index">
                        <span># {{ tag }}</span>
                        <button type="button" class="btn-close" aria-label="Close" @click="removeTag(index)" style="scale: 0.75;">
                        </button>
                      </span>
                    </div>
                  </div>
                  <div class="col">
                    <label for="features" class="form-label">特色</label>
                    <div class="input-group mb-2">
                      <input id="features" type="text" class="form-control" placeholder="請輸入特色" v-model="newFeature" @keyup.enter="addFeature">
                      <button class="btn btn-gray text-white" type="button" @click="addFeature">新增</button>
                    </div>
                    <div class="d-flex flex-wrap gap-2">
                      <span class="badge bg-info-light text-black d-flex align-items-center" v-for="(feature, index) in selectedProduct.features" :key="index">
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
                    <select v-model="selectedProduct.category" class="form-select" aria-label="category" name="category">
                      <option value="">請選擇</option>
                      <option value="地圖">地圖</option>
                      <option value="卡牌">卡牌</option>
                      <option value="棋盤">棋盤</option>
                      <option value="擲骰">擲骰</option>
                    </select>
                  </div>
                  <div class="col">
                    <label for="target_units" class="form-label">目標組數</label>
                    <input id="target_units" v-model.number="selectedProduct.target_units" type="number" min="0" class="form-control" placeholder="請輸入目標組數"
                    />
                  </div>
                  <div class="col">
                    <label for="unit" class="form-label">單位</label>
                    <input id="unit" v-model="selectedProduct.unit" type="text" class="form-control" placeholder="請輸入單位"/>
                  </div>
                </div>
                <hr class="w-100 border-top my-8" style="border: 3px dotted #8C8C8E;">
                <!-- 困擾 -->
                <div class="row mb-4">
                  <div class="col">
                    <label for="content_question" class="form-label">困擾標題</label>
                    <input id="content_question" v-model="selectedProduct.question" type="text" class="form-control" placeholder="請輸入困擾標題"/>
                  </div>
                </div>
                <!-- 設計特點 -->
                <div class="row mb-4">
                  <div class="col-4">
                    <label for="point-title" class="form-label">設計特點</label>
                    <input id="point-title" type="text" class="form-control" placeholder="請輸入特點" v-model="newPoint.title">
                  </div>
                  <div class="col-8">
                    <label for="point-content" class="form-label">設計內容</label>
                      <textarea id="point-content" v-model="newPoint.content" class="form-control" placeholder="請輸入內容" rows="1"></textarea>
                  </div>
                </div>
                <!-- 情境圖片 -->
                <div class="row align-items-center mb-4">
                  <div class="col">
                    <label for="point-imgUrl" class="form-label">情境圖片</label>
                    <input id="point-imgUrl" v-model="newPoint.imageUrl" type="url" class="form-control" placeholder="請輸入網址"/>
                  </div>
                  <div class="col">
                    <img :src="newPoint.imageUrl" alt="示意圖" class="img-fluid" />
                  </div>
                  <div class="col mt-auto">
                    <button class="btn btn-gray text-white" type="button" @click="addPoint">新增</button>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div v-for="(point, index) in selectedProduct.points" :key="index" class="d-flex justify-content-between border border-gray border-1 rounded-2 p-2 mb-4">
                      <div class="row">
                        <div class="col-md-10">
                          <div class="text-wrap mb-2" style="overflow-wrap: break-word;">{{ point.title }} : {{ point.content }}</div>
                          <div class="text-wrap" style="overflow-wrap: break-word;">{{ point.imageUrl }}</div>
                        </div>
                        <div class="col-md-2 ms-auto">
                          <button type="button" class="btn-close" aria-label="Close" @click="removePoint(index)" style="scale: 0.75;">
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="w-100 border-top my-8" style="border: 3px dotted #8C8C8E;">
                <!-- 售價、折扣 -->
                <div class="row mb-4">
                  <div class="col">
                    <label for="original-price" class="form-label">售價</label>
                    <input id="original-price" v-model.number="selectedProduct.origin_price" type="number" min="0" class="form-control" placeholder="請輸入售價"/>
                  </div>
                  <div class="col">
                    <label for="discount" class="form-label">折扣</label>
                    <input id="discount" @keyup="calculatePrice" v-model.number="selectedProduct.discount" type="number" min="0" class="form-control" placeholder="請輸入折扣"/>
                  </div>
                  <div class="col">
                    <label for="original-price" class="form-label">折扣價</label>
                    <input id="original-price" v-model.number="selectedProduct.price" disabled  type="number" class="form-control"/>
                  </div>
                </div>
                <!-- 優惠套裝 -->
                <div class="row mb-4">
                  <div class="col">
                    <label for="package-name" class="form-label">套裝名稱</label>
                    <input id="package-name" type="text" class="form-control" placeholder="請輸入名稱" v-model="newPackage.name">
                  </div>
                  <div class="col">
                    <label for="package-units" class="form-label">內含組數</label>
                    <input id="package-units" type="number" min="0" class="form-control" placeholder="請輸入組數" v-model.number="newPackage.units">
                  </div>
                  <div class="col mt-auto">
                    <button class="btn btn-gray text-white" type="button" @click="addPackage">新增</button>
                  </div>
                </div>
                <div class="row mb-4">
                  <div class="col">
                    <div class="border border-gray border-1 rounded-2 p-2">
                      <div v-for="(item, index) in selectedProduct.packages" :key="item.name" class="d-flex justify-content-between">
                        <div class="mb-2">
                          {{ item.name }}，內含 {{ item.units }} 個
                        </div>
                        <div class="ms-auto">
                          <button type="button" class="btn-close" aria-label="Close" @click="removePoint(index)" style="scale: 0.75;">
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col"></div>
                </div>
                <div class="row mb-4">
                  <div class="col">
                    <label for="contents" class="form-label">內容物</label>
                    <div class="input-group">
                      <input id="contents" type="text" class="form-control" placeholder="請輸入內容物" v-model="newContent">
                      <button class="btn btn-gray text-white" type="button" @click="addContent">新增</button>
                    </div>
                  </div>
                  <div class="col">
                    <label for="notes" class="form-label">備註</label>
                    <div class="input-group">
                      <input id="notes" type="text" class="form-control" placeholder="請輸入備註" v-model="newNote">
                      <button class="btn btn-gray text-white" type="button" @click="addNote">新增</button>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="border border-gray border-1 rounded-2 p-2">
                      <div v-for="(content, index) in selectedProduct.contents" :key="index" class="d-flex justify-content-between">
                        <div class="text-wrap" style="overflow-wrap: break-word;">{{ content }}</div>
                        <div class="ms-auto">
                          <button type="button" class="btn-close" aria-label="Close" @click="removeContent(index)" style="scale: 0.75;">
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="border border-gray border-1 rounded-2 p-2">
                      <div v-for="(note, index) in selectedProduct.notes" :key="index" class="d-flex justify-content-between">
                        <div class="text-wrap" style="overflow-wrap: break-word;">{{ note }}</div>
                        <div class="ms-auto">
                          <button type="button" class="btn-close" aria-label="Close" @click="removeNote(index)" style="scale: 0.75;">
                          </button>
                        </div>
                      </div>
                    </div>
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
                    <input id="range" v-model="selectedProduct.productRatings"  type="range" class="form-range" min="0" max="5" step="1"/>
                  </div>
                  <div class="col mt-auto">
                    <div class="form-check pb-2">
                      <label for="product-active" class="form-label m-0">啟用商品</label>
                      <label class="switch ms-2">
                        <!-- <input> 開關、<span> 滑動圓點 -->
                        <input id="product-active" v-model="selectedProduct.is_enabled" type="checkbox">
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
          <button @click="cancelUpdate" type="button" class="btn btn-danger text-white" data-bs-dismiss="modal">取消</button>
          <button @click="updateProduct(this.isNew, this.selectedProduct)" type="button" class="btn btn-primary">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import adminProductsStore from '@/stores/admin/adminProductsStore';
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    tempProduct: Object,
    isNew: Boolean,
  },
  mixins: [modalMixin],
  data() {
    return {
      selectedProduct: {
        productRatings: 0,
        points: [],
        imagesUrl: [],
        tags: [],
        features: [],
        category: "",
        packages: [],
        contents: [],
        notes: [],
      },
      newPrice: 0,
      newTag: '',
      newFeature: '',
      newPoint: {
        title: '',
        content: '',
        imageUrl: ''
      },
      newPackage: {
        name: '',
        units: 0
      },
      newContent: '',
      newNote: '',
    };
  },
  created() {
    // 初始化 selectedProduct
    this.selectedProduct = {
      ...this.tempProduct,
    };
    // 以顯示 "請輸入"
    if (!this.selectedProduct.category) {
      this.selectedProduct.category = '';
    }
  },
  computed: {
    ...mapState(adminProductsStore, ['isEditModalOpen']),
  },
  watch: {
    tempProduct: {
      deep: true,
      handler(updateTempProduct) {
        this.selectedProduct = updateTempProduct;
        // 確保 category 為空字符串，以顯示 "請選擇"
        if (!this.selectedProduct.category) {
          this.selectedProduct.category = '';
        }
      },
    },
    isEditModalOpen: {
      // 傳進來 true，更新成功後 false
      handler(newState) {
        if (!newState) {
          this.hideModal();
        }
      },
    },
  },
  methods: {
    ...mapActions(adminProductsStore, ['updateProduct', 'upload']),
    // calculatePrice
    calculatePrice() {
      this.newPrice = this.selectedProduct.origin_price * this.selectedProduct.discount;
      this.selectedProduct.price = this.newPrice;
    },
    addTag() {
      if (this.newTag.trim() !== '') {
        this.selectedProduct.tags.push(this.newTag.trim());
        this.newTag = '';
      }
    },
    removeTag(index) {
      this.selectedProduct.tags.splice(index, 1);
    },
    addFeature() {
      if (this.newFeature.trim() !== '') {
        this.selectedProduct.features.push(this.newFeature.trim());
        this.newFeature = '';
      }
    },
    removeFeature(index) {
      this.selectedProduct.features.splice(index, 1);
    },
    addPoint() {
      if (this.newPoint.title.trim() !== '' && this.newPoint.content.trim() !== '' && this.newPoint.imageUrl.trim() !== '') {
        this.selectedProduct.points.push(this.newPoint);
        this.newPoint = {};
      }
    },
    removePoint(index) {
      this.selectedProduct.points.splice(index, 1);
    },
    addPackage() {
      if (this.newPackage.name.trim() !== '' && this.newPackage.units !== 0) {
        this.selectedProduct.packages.push(this.newPackage);
        this.newPackage = {};
      }
    },
    removePackage(index) {
      this.selectedProduct.packages.splice(index, 1);
    },
    addContent() {
      if (this.newContent.trim() !== '') {
        this.selectedProduct.contents.push(this.newContent.trim());
        this.newContent = '';
      }
    },
    removeContent(index) {
      this.selectedProduct.contents.splice(index, 1);
    },
    addNote() {
      if (this.newNote.trim() !== '') {
        this.selectedProduct.notes.push(this.newNote.trim());
        this.newNote = '';
      }
    },
    removeNote(index) {
      this.selectedProduct.notes.splice(index, 1);
    },
    cancelUpdate() {
      this.selectedProduct = {};
    },
  },
};
</script>

<style scope>
::placeholder {
  color: #c5c5c5 !important;
}
</style>