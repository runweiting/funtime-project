import axios from "axios";
import { defineStore } from "pinia";
import { useLoading } from "vue-loading-overlay";
import showSuccessToast from "@/utils/showSuccessToast";
import showErrorToast from "@/utils/showErrorToast";

const $loading = useLoading({});
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default defineStore("userOrderStore", {
  state: () => ({
    // 訂單列表
    orders: [],
    tempOrderId: "",
    // for calculateQty
    productQtyMap: {},
    tempOrder: {},
  }),
  actions: {
    calculateQty() {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/orders`;
      axios
        .get(url)
        .then(async (res) => {
          const { pagination } = res.data;
          const totalPages = pagination.total_pages;
          // Array.from() 返回 1 到 totalPages 陣列，用於遍歷每頁訂單
          // 1. 第一個參數傳遞物件 { length: totalPages }，返回長度為 totalPages 個 undefined 的陣列
          // 2. 第二個參數是 mapping function，(_, index) => index + 1，傳入當前索引，_ 表示當前元素的值、index 為當前元素索引，index + 1 取得從 1 到 totalPages 的連續陣列
          const pageNumbers = Array.from(
            { length: totalPages },
            (_, index) => index + 1,
          );
          // 使用 Promise.all() 同時請求所有頁面的訂單資料
          const pageResponses = await Promise.all(
            pageNumbers.map(async (page) => {
              try {
                const pageUrl = `${url}?page=${page}`;
                const pageRes = await axios.get(pageUrl);
                return pageRes.data.orders;
              } catch (err) {
                // 返回空陣列以避免後續處理中出現錯誤
                return [];
              }
            }),
          );
          // 所有頁面的訂單數據
          Array.from({ length: totalPages }, (_, page) => page + 1).forEach(
            (page) => {
              // 當前頁面訂單資料
              const currentPageOrders = pageResponses[page - 1];
              // 遍歷當前頁的訂單數據
              currentPageOrders.forEach((order) => {
                // 是否有 products
                if (order.products && typeof order.products === "object") {
                  Object.values(order.products).forEach((product) => {
                    const productId = product.product_id;
                    const productQty = product.qty;
                    const productName = product.product.short_title;
                    // 初始化 productQt
                    if (!this.productQtyMap[productId]) {
                      this.productQtyMap[productId] = {
                        name: productName,
                        productQty: 0,
                        orderQty: 0,
                      };
                    }
                    // 計算總數和訂單數量
                    this.productQtyMap[productId].productQty += productQty;
                    this.productQtyMap[productId].orderQty += 1;
                  });
                }
              });
            },
          );
        })
        .catch((err) => {
          showErrorToast(err.response.data.message);
        });
    },
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
          this.tempOrderId = res.data.orderId;
          showSuccessToast(res.data.message);
          this.getOrder(this.tempOrderId);
        })
        .catch((err) => {
          showErrorToast(err.data.message);
        })
        .finally(() => {
          loader.hide();
        });
    },
    // GET 指定訂單
    getOrder(orderId) {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/order/${orderId}`;
      axios
        .get(url)
        .then((res) => {
          this.tempOrder = res.data.order;
        })
        .catch((err) => {
          showErrorToast(err.data);
        });
    },
    // GET 全部訂單
    async getOrders() {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/orders`;
      try {
        const res = await axios.get(url);
        this.orders = res.data.orders;
      } catch (err) {
        showErrorToast(err.data);
      }
    },
    // post 付款
    postPay(id) {
      const loader = $loading.show();
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/pay/${id}`;
      axios
        .post(url)
        .then((res) => {
          showSuccessToast(res.data.message);
        })
        .catch((err) => {
          showErrorToast(err.response.data.message);
        })
        .finally(() => {
          loader.hide();
        });
    },
  },
});
