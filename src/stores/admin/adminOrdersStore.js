import axios from "axios";
import { defineStore } from "pinia";
import showSuccessToast from "@/utils/showSuccessToast";
import showErrorToast from "@/utils/showErrorToast";

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default defineStore({
  id: "adminOrdersStore",
  state: () => ({
    // 訂單列表
    orderList: [],
    pagination: {},
    // 當前頁面
    currentPage: null,
  }),
  actions: {
    // GET 訂單列表
    // 預設為第一頁，若 page 傳入值則取代 1
    getOrders(page = 1) {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/orders?page=${page}`;
      axios
        .get(url)
        .then((res) => {
          const { orders, pagination } = res.data;
          // 將重新計算的訂單金額加入 orderList
          // 在資料結構中帶入要使用的參數 (很像 template+v-for+方法(參數))
          const newOrderFormat = orders.map((order) => ({
            // order 是每筆訂單
            ...order,
            calculateTotal: this.updateTotal(order),
          }));
          this.orderList = newOrderFormat;
          this.pagination = pagination;
          this.currentPage = page;
        })
        .catch((err) => {
          showErrorToast(err.response);
        });
    },
    updateTotal(order) {
      if (!order || !order.products) {
        return 0;
      }
      let total = 0;
      // Object.values(order.products) 是每個品項
      Object.values(order.products).forEach((product) => {
        total += product.qty * product.product.price;
      });
      return total;
    },
    // DELETE 刪除指定訂單
    deleteOrder(orderId, page) {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/order/${orderId}`;
      axios.delete(url).then((res) => {
        showSuccessToast(res.data.message);
        this.getOrders(page);
      });
    },
    // DELETE 刪除全部訂單
    deleteOrders() {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/orders/all`;
      axios.delete(url).then((res) => {
        showSuccessToast(res.data.message);
        this.getOrders();
      });
    },
  },
});
