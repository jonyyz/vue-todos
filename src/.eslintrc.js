module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: ["eslint:recommended", "plugin:vue/recommended"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  }
};
