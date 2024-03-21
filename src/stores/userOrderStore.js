import axios from "axios";
import { defineStore } from "pinia";

import showSuccessToast from "@/utils/showSuccessToast";
import showErrorToast from "@/utils/showErrorToast";

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default defineStore("userOrderStore", {
  state: () => ({
    // 訂單列表
    orderList: [],
    pagination: {},
  }),
  actions: {
    // GET 訂單列表
  },
});
