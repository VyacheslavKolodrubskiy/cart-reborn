module.exports = {
  extends: ['@antfu', 'plugin:prettier/recommended'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
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
        ignores: ['component'],
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
  overrides: [
    {
      files: ['*.{vue,js}'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^vue', '^@?\\w'],
              ['^(@|components)(/.*|$)'],
              ['^\\u0000'],
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              ['^.+\\.?(css|scss)$'],
            ],
          },
        ],
      },
    },
  ],
}
