import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";
import { useLoading } from "vue-loading-overlay";

import showSuccessToast from "@/utils/showSuccessToast";
import showErrorToast from "@/utils/showErrorToast";

const $loading = useLoading();
const { VITE_APP_URL } = import.meta.env;
export default defineStore("loginStore", {
  actions: {
    // POST 驗證登入
    checkLogin() {
      // 開啟 loading
      const loader = $loading.show();
      const url = `${VITE_APP_URL}/api/user/check`;
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,
        "$1",
      );
      if (token) {
        axios.defaults.headers.common.Authorization = token;
      }
      axios
        .post(url)
        .then(() => {
          showSuccessToast("驗證成功");
        })
        .catch((err) => {
          showErrorToast(err.response.data.message).then(() => {
            router.push({ name: "login" });
          });
        })
        .finally(() => {
          // 關閉 loading
          loader.hide();
        });
    },
    // POST 登出
    logout() {
      const url = `${VITE_APP_URL}/logout`;
      axios.post(url).then((res) => {
        showSuccessToast(res.data.message).then(() => {
          document.cookie = "myToken=; expires=;";
          axios.defaults.headers.common.Authorization = null;
          router.push({ name: "home" });
        });
      });
    },
  },
});
