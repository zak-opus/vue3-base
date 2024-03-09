module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    './.eslintrc-auto-import.json'
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    // 禁止使用 var
    'no-var': 'error',
    // 禁止使用未定义的变量
    'no-undef': 'error',
    // 禁止未使用的变量
    // 禁止使用 with
    'no-with': 'error',
    // 禁止使用 eval
    'no-eval': 'error',
    // 禁止使用 __proto__
    'no-proto': 'error',
    // 禁用多单词组件命名规则
    'vue/multi-word-component-names': 'off',
  },
}
