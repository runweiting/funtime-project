import { defineStore } from "pinia";
import showSuccessToast from "@/utils/showSuccessToast";
import userProductsStore from "./userProductsStore";

const productsStore = userProductsStore();
export default defineStore({
  id: "userLikesStore",
  state: () => ({
    // 商品收藏列表
    tempCollection: [],
    // 初始化商品狀態列表
    isInitialized: false,
    // 商品狀態列表
    preferenceState: {},
  }),
  actions: {
    async initPreferenceState() {
      // 如果已初始化過，則不執行
      if (this.isInitialized) return;
      // 如果未初始化過，則執行初始化邏輯
      productsStore.getProducts();
      const { productList } = productsStore;
      let list = localStorage.getItem("preferenceState");
      if (!list) {
        list = productList.reduce((acc, product) => {
          acc[product.id] = { isLiked: false };
          return acc;
        }, {});
      } else {
        list = JSON.parse(list);
      }
      this.preferenceState = list;
      this.isInitialized = true;
    },
    addToCollection(product) {
      this.tempCollection.push({
        product,
      });
      showSuccessToast("已加入收藏清單");
      localStorage.setItem(
        "preferenceState",
        JSON.stringify(this.preferenceState),
      );
      localStorage.setItem(
        "tempCollection",
        JSON.stringify(this.tempCollection),
      );
    },
    removeCollection(productId) {
      const index = this.tempCollection.findIndex(
        (item) => item.product.id === productId,
      );
      if (index !== -1) {
        this.tempCollection.splice(index, 1);
        showSuccessToast("已移除收藏清單");
      }
      localStorage.setItem(
        "preferenceState",
        JSON.stringify(this.preferenceState),
      );
      localStorage.setItem(
        "tempCollection",
        JSON.stringify(this.tempCollection),
      );
    },
  },
});
