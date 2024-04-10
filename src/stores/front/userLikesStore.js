import { defineStore } from "pinia";
import showSuccessToast from "@/utils/showSuccessToast";
import userProductsStore from "./userProductsStore";

const productsStore = userProductsStore();
export default defineStore({
  id: "userLikesStore",
  state: () => ({
    // 商品收藏列表
    tempCollection: [],
    // 商品狀態列表
    preferenceState: {},
  }),
  actions: {
    async initPreferenceState() {
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
    },
    addToCollection(product) {
      this.tempCollection.push({
        product,
      });
      this.preferenceState[product.id].isLiked = true;
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
      const updateList = this.tempCollection.filter(
        (item) => item.product.id !== productId,
      );
      this.tempCollection = updateList;
      this.preferenceState[productId].isLiked = false;
      showSuccessToast("已移除收藏清單");
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
