import { defineStore } from "pinia";
import showSuccessToast from "@/utils/showSuccessToast";
import userProductsStore from "./userProductsStore";

const productsStore = userProductsStore();
export default defineStore({
  id: "userLikesStore",
  state: () => ({
    likes: 0,
    tempCollection: [],
    // 是否已初始化收藏清單
    isInitialized: false,
    // 收藏清單
    isLikedList: {},
  }),
  actions: {
    async initIsLikedList() {
      // 如果已初始化過，則不執行
      if (this.isInitialized) return;
      // 如果未初始化過，則執行初始化邏輯
      productsStore.getProducts();
      const { productList } = productsStore;
      const list = productList.reduce((acc, product) => {
        acc[product.id] = { isLiked: false };
        return acc;
      }, {});
      this.isLikedList = list;
      // 設置為已初始化
      this.isInitialized = true;
    },
    addToCollection(product) {
      const like = this.likes + 1;
      this.tempCollection.push({
        likes: like,
        product,
      });
      showSuccessToast("已加入收藏清單");
    },
    removeCollection(productId) {
      const index = this.tempCollection.findIndex(
        (item) => item.product.id === productId,
      );
      if (index !== -1) {
        this.tempCollection.splice(index, 1);
        showSuccessToast("已移除收藏清單");
      }
    },
  },
});
