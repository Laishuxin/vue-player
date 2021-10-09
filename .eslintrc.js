module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    'vue/no-unused-components': 'warn',
  },

  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
}
