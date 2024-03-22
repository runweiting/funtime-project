import axios from "axios";
import { defineStore } from "pinia";
import { useLoading } from "vue-loading-overlay";
import showSuccessToast from "@/utils/showSuccessToast";
import showErrorToast from "@/utils/showErrorToast";

const $loading = useLoading({});
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default defineStore("userOrderStore", {
  state: () => ({
    // 指定訂單
    order: {},
    orderId: "",
  }),
  actions: {
    // POST 訂單
    createOrder(data) {
      const loader = $loading.show();
      const order = {
        data,
      };
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/order`;
      axios
        .post(url, order)
        .then((res) => {
          const currentOrderId = res.data.orderId;
          this.orderId = currentOrderId;
          showSuccessToast(res.data.message);
          this.getOrder();
        })
        .catch((err) => {
          showErrorToast(err.data.message);
        })
        .finally(() => {
          loader.hide();
        });
    },
    // GET 指定訂單
    getOrder() {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/order/${this.orderId}`;
      axios
        .get(url)
        .then((res) => {
          this.order = res.data.order;
        })
        .catch((err) => {
          showErrorToast(err.data);
        });
    },
    postPay(id) {
      const loader = $loading.show();
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/pay/${id}`;
      axios
        .post(url)
        .then((res) => {
          showSuccessToast(res.data.message);
        })
        .catch((err) => {
          showErrorToast(err.data);
        })
        .finally(() => {
          loader.hide();
        });
    },
  },
});
