module.exports = {
  root: true,

  env: {
    node: true,
  },

  parserOptions: {
    parser: "@babel/eslint-parser",
  },

  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "no-unused-vars": "off",
    "vue/multi-word-component-names": "off",
    // 'generator-star-spacing': 'warn'
  },

  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    // 不用prettier预设
    // "plugin:prettier/recommended",
  ],
}
