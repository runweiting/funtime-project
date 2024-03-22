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
    orders: [],
    productQtyMap: {},
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
          console.log(err);
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
          console.log(err);
          showErrorToast(err.data);
        });
    },
    // GET 全部訂單
    async getOrders() {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/orders`;
      try {
        const res = await axios.get(url);
        this.orders = res.data.orders;
        this.calculateQty();
      } catch (err) {
        console.log(err);
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
          console.log(err);
          showErrorToast(err.data);
        })
        .finally(() => {
          loader.hide();
        });
    },
    // 計算購買數量
    calculateQty() {
      this.orders.forEach((order) => {
        // 是否有 products
        if (order.products && typeof order.products === "object") {
          Object.values(order.products).forEach((product) => {
            const productId = product.product_id;
            const { qty } = product;
            const productName = product.product.short_title;
            // 初始化 qty 為 0
            if (!this.productQtyMap[productId]) {
              this.productQtyMap[productId] = {
                name: productName,
                productQty: 0,
                orderQty: 0,
              };
            }
            // 累加購買數量
            this.productQtyMap[productId].productQty += qty;
            // 累加訂單數量
            this.productQtyMap[productId].orderQty += 1;
          });
        }
      });
    },
  },
});
