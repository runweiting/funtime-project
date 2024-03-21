import axios from "axios";
import { defineStore } from "pinia";
import showSuccessToast from "@/utils/showSuccessToast";
import showErrorToast from "@/utils/showErrorToast";

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default defineStore("userOrderStore", {
  state: () => ({
    currentProgress: 1,
  }),
  actions: {
    // 增加訂單步驟
    addStep() {
      this.currentProgress += 1;
    },
    // POST 訂單
    createOrder(data) {
      const order = {
        data,
      };
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/order`;
      axios
        .post(url, order)
        .then((res) => {
          showSuccessToast(res.data.message);
        })
        .catch((err) => {
          showErrorToast(err.data.message);
        });
    },
  },
});
