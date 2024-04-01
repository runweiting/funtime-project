import axios from "axios";
import { defineStore } from "pinia";
import { useLoading } from "vue-loading-overlay";
import showSuccessToast from "@/utils/showSuccessToast";
import showErrorToast from "@/utils/showErrorToast";

const $loading = useLoading({});
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default defineStore("userCartStore", {
  state: () => ({
    // 購物車列表
    cartList: [],
    // 購物車總計
    cartTotal: 0,
    tempCartId: "",
  }),
  actions: {
    // POST 加入購物車
    addToCart(targetId, qty) {
      // 使用 loadingStore
      // const loading = loadingStore();
      // loading.loadingStatus.updateQty = targetId;
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`;
      const cart = {
        product_id: targetId,
        qty,
      };
      axios
        .post(url, { data: cart })
        .then((res) => {
          this.getCart();
          showSuccessToast(res.data.message);
          // loading.loadingStatus.updateQty = "";
        })
        .catch((err) => {
          showErrorToast(err.response.data.message);
        });
    },
    // GET 購物車列表
    async getCart(productId) {
      const loader = $loading.show();
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`;
      try {
        const res = await axios.get(url);
        this.cartList = res.data.data.carts;
        this.cartTotal = res.data.data.total;
        const targetCart = this.cartList.find(
          (cart) => cart.product.id === productId,
        );
        if (targetCart) {
          this.tempCartId = targetCart.id;
        }
      } catch (err) {
        showErrorToast(err.response.data.message);
      } finally {
        loader.hide();
      }
    },
    // PUT 修改購物車
    async putCart(tempCartId, tempCartQty) {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${tempCartId}`;
      const cart = {
        product_id: tempCartId,
        qty: tempCartQty,
      };
      try {
        const res = await axios.put(url, { data: cart });
        showSuccessToast(res.data.message);
      } catch (err) {
        showErrorToast(err.response.data.message);
      } finally {
        this.getCart();
      }
    },
    // DELETE 刪除購物車指定商品
    deleteCart(targetId) {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${targetId}`;
      axios
        .delete(url)
        .then((res) => {
          showSuccessToast(res.data.message);
          this.getCart();
        })
        .catch((err) => {
          showErrorToast(err.response.data.message);
        });
    },
    // DELETE 刪除購物車
    deleteCarts() {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/carts`;
      axios
        .delete(url)
        .then((res) => {
          showSuccessToast(res.data.message);
          this.getCart();
        })
        .catch((err) => {
          showErrorToast(err.response.data.message);
        });
    },
  },
});
