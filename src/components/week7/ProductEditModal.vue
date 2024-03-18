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
        <div class="modal-header">
          <h5 class="modal-title" id="editModalLabel">
            <span v-if="isNew">新增專案</span>
            <span v-else>編輯專案</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <!-- 圖片 -->
              <div class="col-md-3">
                <div class="mb-4">
                  <label for="imgUrl" class="form-label">主要圖片</label>
                  <input
                    v-model="tempProduct.imageUrl"
                    type="url"
                    class="form-control mb-2"
                    id="imgUrl"
                    placeholder="請輸入網址"
                  />
                  <img :src="tempProduct.imageUrl" class="img-fluid" />
                </div>
                <!-- 多圖新增 -->
                <h4 class="fw-bold">多圖新增</h4>
                <!-- // ? v-if 資料是否已有多圖，有則顯示，沒有不顯示 -->
                <div v-if="Array.isArray(tempProduct.imagesUrl)" class="mb-4">
                  <div v-for="(imgUrl, index) in tempProduct.imagesUrl" :key="`url${index}`">
                    <label :for="`url${index}`" class="form-label"
                      >圖片網址</label
                    >
                    <input
                      :id="`url${index}`"
                      v-model="tempProduct.imagesUrl[index]"
                      type="url"
                      class="form-control mb-2"
                      placeholder="請輸入網址"
                    />
                    <img
                      :src="tempProduct.imagesUrl[index]"
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
                        tempProduct.imagesUrl.length === 0 ||
                        tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]
                      "
                      @click="tempProduct.imagesUrl.push('')"
                      type="button"
                      class="btn btn-outline-primary w-100"
                    >
                      新增圖片
                    </button>
                    <button
                      @click="tempProduct.imagesUrl.pop()"
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
                    @change="upload"
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
                    <label for="full-title" class="form-label">完整標題</label>
                    <input
                      v-model="tempProduct.full_title"
                      type="text"
                      class="form-control mb-4"
                      name="full-title"
                      placeholder="請輸入完整標題"
                    />
                  </div>
                  <div class="col-4">
                    <label for="short-title" class="form-label">簡短標題</label>
                    <input
                      v-model="tempProduct.short_title"
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
                      v-model="tempProduct.description"
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
                      v-model="tempProduct.proposer"
                      type="text"
                      class="form-control"
                      id="unit"
                      placeholder="請輸入名稱"
                    />
                  </div>
                  <div class="col">
                    <label for="tag" class="form-label">標籤</label>
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="請輸入標籤" v-model="newTag" @keyup.enter="addTag">
                      <button class="btn btn-outline-secondary" type="button" @click="addTag">新增</button>
                    </div>
                    <div class="d-flex flex-wrap gap-2">
                      <span class="badge bg-secondary d-flex align-items-center" v-for="(tag, index) in tempProduct.tag" :key="index" style="opacity: 0.75;">
                        <span>{{ tag }}</span>
                        <button type="button" class="btn-close" aria-label="Close" @click="removeTag(index)" style="scale: 0.75;">
                        </button>
                      </span>
                    </div>
                  </div>
                  <div class="col">
                    <label for="feature" class="form-label">特色</label>
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="請輸入特色" v-model="newFeature" @keyup.enter="addFeature">
                      <button class="btn btn-outline-secondary" type="button" @click="addFeature">新增</button>
                    </div>
                    <div class="d-flex flex-wrap gap-2">
                      <span class="badge bg-secondary d-flex align-items-center" v-for="(tag, index) in tempProduct.features" :key="index" style="opacity: 0.75;">
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
                    <select v-model="tempProduct.category" class="form-select" aria-label="category">
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
                      v-model.number="tempProduct.target_units"
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
                      v-model="tempProduct.unit"
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
                      v-model="tempProduct.content"
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
                    <label for="points_title" class="form-label">設計特點</label>
                    <input type="text" class="form-control" placeholder="請輸入特點" v-model="newPoint.title">
                  </div>
                  <div class="col-8">
                    <label for="points_content" class="form-label">設計內容</label>
                      <textarea
                        v-model="newPoint.content"
                        class="form-control"
                        placeholder="請輸入內容"
                        id="points_content"
                      ></textarea>
                  </div>
                </div>
                <!-- 情境圖片 -->
                <div class="row align-items-center">
                  <div class="col">
                    <label for="point_imgUrl" class="form-label">情境圖片</label>
                    <input 
                      v-model="newPoint.imageUrl"
                      type="url"
                      class="form-control"
                      id="point_imgUrl"
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
                      <span class="badge bg-secondary d-flex align-items-center" v-for="(point, index) in tempProduct.points" :key="index" style="opacity: 0.75;">
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
                    <label for="original_price" class="form-label">售價</label>
                    <input
                      v-model.number="tempProduct.original_price"
                      type="number"
                      min="0"
                      class="form-control"
                      id="original_price"
                      placeholder="請輸入售價"
                    />
                  </div>
                  <div class="col">
                    <label for="discount" class="form-label">折扣</label>
                    <input
                      v-model.number="tempProduct.discount"
                      type="number"
                      min="0"
                      class="form-control"
                      id="discount"
                      placeholder="請輸入折扣"
                    />
                  </div>
                </div>
                <!-- 優惠套裝 -->
                <div class="row">
                  <div class="col">
                    <label for="package_name" class="form-label">套裝名稱</label>
                    <input type="text" class="form-control" placeholder="請輸入名稱" v-model="newPackage.name">
                  </div>
                  <div class="col">
                    <label for="package_units" class="form-label">內含組數</label>
                    <input type="number" min="0" class="form-control" placeholder="請輸入組數" v-model.number="newPackage.units">
                  </div>
                </div>
                <div class="row">
                  <div class="col d-flex flex-wrap gap-2">
                      <span class="badge bg-secondary d-flex align-items-center" v-for="(point, index) in tempProduct.points" :key="index" style="opacity: 0.75;">
                        <span>{{ point }}</span>
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
                      {{ tempProduct.productRatings }} 分
                    </span>
                    <input
                      v-model="tempProduct.productRatings"
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
                        <input v-model="tempProduct.is_enabled" type="checkbox">
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
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button @click="updateData" type="button" class="btn btn-primary">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';
import showSuccessToast from '@/utils/showSuccessToast';
import showErrorToast from '@/utils/showErrorToast'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  props: {
    tempData: Object,
    isNew: Boolean,
  },
  data() {
    return {
      editModal: null,
      tempProduct: {
        imagesUrl: [],
        productRatings: 0,
        tags: [],
        features: [],
        content: {
          question: '',
          points: []
        },
        packages: [],
      },
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
    // 將 tempData 的值複製到 tempProduct
    this.tempProduct = { ...this.tempData };
  },
  watch: {
    // ? 解決 imageUrl 和 id，顯示 undefined 問題
    // * 當元件被創建時，tempData 可能還未被傳入。為了確保 tempProduct 在 tempData 更新時同步更新，使用 watch 監聽 tempData 的變化，然後更新 tempProduct。
    tempData: {
      // 若要深度監聽，對象內部屬性的變化也觸發
      deep: true,
      handler(updateData) {
        this.tempProduct = updateData;
      },
    },
  },
  methods: {
    // tag
    addTag() {
      if (this.newTag.trim() !== '') {
        this.tempProduct.tags.push(this.newTag.trim());
        this.newTag = '';
      }
    },
    removeTag(index) {
      this.tempProduct.tags.splice(index, 1);
    },
    // feature
    addFeature() {
      if (this.newFeature.trim() !== '') {
        this.tempProduct.features.push(this.newFeature.trim());
        this.newFeature = '';
      }
    },
    removeFeature(index) {
      this.tempProduct.features.splice(index, 1);
    },
    // point
    addPoint() {
      if (this.newPoint.title.trim() !== '' && this.newPoint.content.trim() !== '' && this.newPoint.imageUrl) {
        this.tempProduct.points.push(this.newPoint);
        this.newPoint = {};
      }
    },
    removePoint(index) {
      this.tempProduct.points.splice(index, 1);
    },
    // package
    addPackage() {
      if (this.newPackage.name.trim() !== '' && this.newPackage.units !== 0) {
        this.tempProduct.packages.push(this.newPackage);
        this.newPackage = {};
      }
    },
    removePackage(index) {
      this.tempProduct.packages.splice(index, 1);
    },
     // POST or PUT 新增商品
    updateData() {
      // -> 新增商品
      let url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product`;
      let method = 'post';
      // -> 編輯商品
      if (!this.isNew) {
        url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`;
        method = 'put';
      }
      this.axios[method](url, {
        data: this.tempProduct,
      })
        .then((res) => {
          showSuccessToast(res.data.message);
          this.modal.hide();
          this.$emit('getData');
        })
        .catch((err) => {
          showErrorToast(err.response.data.message);
        });
    },
    // 上傳圖片
    upload() {
      const fileInput = document.querySelector('#formFile');
      // 取出 fileInput 內的 file 物件
      const file = fileInput.files[0];
      // 新增 formData 物件
      const formData = new FormData();
      // 在 formData 最後一個子節點插入 file 和 'file-to-upload'
      formData.append('file-to-upload', file);
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/upload`;
      this.axios.post(url, formData);
    },
  },
};
</script>