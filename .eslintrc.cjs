module.exports = {
  root: true,
  extends: [
    // 依照以下順序檢查規範
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    // 支援 Airbnb 規範
    "airbnb-base",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  settings: {
    // 正常解析 @ 的路徑
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".js", ".vue"],
      },
      node: {
        extensions: [".js", ".jsx", ".json", ".vue"],
        paths: ["src"],
      },
    },
    // 可以安裝在 devDependencies 裡的，而不是 dependencies 裡
    "import/core-modules": ["vite", "@vitejs/plugin-vue"],
  },
  rules: {
    indent: ["error", 2],
  },
};
