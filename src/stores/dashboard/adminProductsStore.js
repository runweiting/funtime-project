import axios from "axios";
import { defineStore } from "pinia";
import { useLoading } from "vue-loading-overlay";

import showSuccessToast from "@/utils/showSuccessToast";
import showErrorToast from "@/utils/showErrorToast";
import modalMixin from "@/mixins/modalMixin";

const $loading = useLoading({});
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default defineStore("adminProductsStore", {
  mixins: [modalMixin],
  state: () => ({
    // 商品列表
    productList: [],
    pagination: {},
    // 控制 modal 開關
    isEditModalOpen: true,
    isDelModalOpen: true,
  }),
  actions: {
    // GET 商品列表
    // 預設為第一頁，若 page 傳入值則取代 1
    async getProducts(category, page = 1) {
      // 建立 loader 實體
      const loader = $loading.show();
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/products?page=${page}`;
      try {
        const res = await axios.get(url);
        const { products, pagination } = res.data;
        this.productList = products;
        this.pagination = pagination;
      } catch (err) {
        showErrorToast(err.response.data.message);
      } finally {
        loader.hide();
      }
    },
    // POST or PUT 新增商品
    updateProduct(isNew, product) {
      // -> 新增商品
      let url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product`;
      let method = "post";
      // -> 編輯商品
      if (!isNew) {
        url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product/${product.id}`;
        method = "put";
      }
      axios[method](url, {
        data: product,
      })
        .then((res) => {
          showSuccessToast(res.data.message);
          this.isEditModalOpen = false;
          this.getProducts();
        })
        .catch((err) => {
          showErrorToast(err.response.data.message);
        });
    },
    // 上傳圖片
    upload() {
      const fileInput = document.querySelector("#formFile");
      // 取出 fileInput 內的 file 物件
      const file = fileInput.files[0];
      // 新增 formData 物件
      const formData = new FormData();
      // 在 formData 最後一個子節點插入 file 和 'file-to-upload'
      formData.append("file-to-upload", file);
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/upload`;
      axios.post(url, formData);
    },
    // DELETE 刪除商品
    deleteProduct(id) {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product/${id}`;
      axios
        .delete(url)
        .then((res) => {
          showSuccessToast(res.data.message);
          this.isDelModalOpen = false;
          this.getProducts();
        })
        .catch((err) => {
          showErrorToast(err.response.data.message);
        });
    },
  },
});
