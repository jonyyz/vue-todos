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
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        mocha: true
      }
    }
  ]
};
