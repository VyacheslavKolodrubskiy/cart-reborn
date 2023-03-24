module.exports = {
  extends: ['@antfu', 'plugin:prettier/recommended'],
  rules: {
    'no-console': 'off',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '(^_|props|emit)',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignore: ['component'],
      },
    ],
    'vue/padding-line-between-blocks': 'error',
    'vue/padding-line-between-tags': 'error',
    'vue/attributes-order': [
      'error',
      {
        alphabetical: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        endOfLine: 'auto',
        singleAttributePerLine: true,
      },
    ],
  },
}
