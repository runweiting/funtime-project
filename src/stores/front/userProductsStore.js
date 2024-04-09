import axios from "axios";
import { defineStore } from "pinia";
import { useLoading } from "vue-loading-overlay";
import showErrorToast from "@/utils/showErrorToast";

// useLoading({}) 建立 $loading，提供顯示和隱藏 loading 功能
const $loading = useLoading({});
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
const userProductsStore = defineStore("userProductsStore", {
  state: () => ({
    // 商品列表
    productList: [],
    pagination: {},
    // 指定商品
    product: {},
  }),
  actions: {
    // GET 商品列表
    async getProducts(category, page = 1) {
      // 如需指定渲染的 container
      // 可寫在 .show({ container: this.fullPage ? null : this.$refs.xxx })
      // 建立 loader 實體
      const loader = $loading.show();
      let url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/products?page=${page}`;
      if (category) {
        url += `&category=${category}`;
      }
      try {
        const res = await axios.get(url);
        const { products, pagination } = res.data;
        this.productList = products;
        this.pagination = pagination;
        // 異步操作完成後，調用排序邏輯
        this.sortProducts();
        // this.initIsLikedList();
      } catch (err) {
        showErrorToast(err.response);
      } finally {
        loader.hide();
      }
    },
    // sort 商品列表
    sortProducts() {
      this.productList = this.productList.sort((a, b) => a.price - b.price);
    },
    // GET 指定商品
    async getProduct(targetId) {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/product/${targetId}`;
      try {
        const res = await axios.get(url);
        this.product = res.data.product;
      } catch (err) {
        showErrorToast(err.response.data.message);
      }
    },
  },
});

export default userProductsStore;
