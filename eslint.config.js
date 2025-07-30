import vue from 'eslint-plugin-vue'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.ts', '**/*.vue'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
    plugins: {
      vue,
      '@typescript-eslint': tseslint,
      prettier,
    },
    rules: {
      ...vue.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      'prettier/prettier': 'error',
      'vue/multi-word-component-names': 'off',
    },
  },
]
