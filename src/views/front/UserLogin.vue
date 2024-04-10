<template>
  <main class="container">
    <h1 class="pt-5 text-center">登入後台</h1>
    <div class="row py-5 flex-column align-items-center">
      <div class="col-md-6 text-center mb-3">
        <h3>請先登入</h3>
      </div>
      <div class="col-md-6">
        <form>
          <div class="form-floating mb-3">
            <input
              v-model="user.username"
              type="email"
              class="form-control"
              id="floatingInput"
              autocomplete="email"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input
              v-model="user.password"
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              autocomplete="current-password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div class="d-flex gap-2">
            <RouterLink to="/" class="btn btn-primary w-50">回到首頁</RouterLink>
            <button @click="login" type="button" class="btn btn-primary w-50">
              登入
            </button>
          </div>
        </form>
        <p class="text-dark-gray text-center pt-5">&copy; funtime</p>
      </div>
    </div>
  </main>
</template>

<script>
import isUserLoggedIn from "@/utils/isUserLoggedIn";
import showSuccessToast from "@/utils/showSuccessToast";
import showErrorToast from "@/utils/showErrorToast"

const { VITE_APP_URL } = import.meta.env;
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      if (isUserLoggedIn()) {
        this.$router.push({ name: 'admin/products' });
        return
      };
      const { username, password } = this.user;
      if (!username || !password) {
        showErrorToast('請填入登入信箱和密碼');
        return;
      };
      const url = `${VITE_APP_URL}/admin/signin`;
      this.axios
        .post(url, this.user)
        .then((res) => {
          const { expired, token } = res.data;
          document.cookie = `myToken=${token}; expires=${new Date(expired)}`;
          showSuccessToast(res.data.message);
          this.$router.push({ name: 'admin/products' });
          this.user = {};
        })
        .catch((err) => {
          if (err.response && err.response.status === 400) {
            showErrorToast('請輸入正確的帳號和密碼');
          }
        })
    },
  },
};
</script>