import { defineStore } from "pinia";

export default defineStore({
  id: "loadingStore",
  state: () => ({
    // Bootstrap Spinner
    loadingStatus: {
      getProduct: "",
      updateQty: "",
    },
  }),
});
