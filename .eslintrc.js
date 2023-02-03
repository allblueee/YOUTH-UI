module.exports = {
  extends: [
    'eslint-config-ali/typescript/vue',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/vue',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
};
