import { defineStore } from "pinia";
import showSuccessToast from "@/utils/showSuccessToast";

export default defineStore({
  id: "userLikesStore",
  state: () => ({
    likes: 0,
    tempCollection: [],
  }),
  actions: {
    addToCollection(product) {
      const like = this.likes + 1;
      this.tempCollection.push({
        likes: like,
        product,
      });
      showSuccessToast("已加入收藏清單");
      console.log(this.tempCollection);
    },
    removeCollection(productId) {
      const index = this.tempCollection.findIndex(
        (item) => item.product.id === productId,
      );
      if (index !== -1) {
        this.tempCollection.splice(index, 1);
        showSuccessToast("已移除收藏清單");
      }
      console.log(this.tempCollection);
    },
  },
});
