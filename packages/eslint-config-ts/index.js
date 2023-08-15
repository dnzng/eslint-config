const fs = require('fs')
const process = require('process')
const { join } = require('path')
const basic = require('@dnzng/eslint-config-basic')
const tsconfig = process.env.ESLINT_TSCONFIG || 'tsconfig.eslint.json'

module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    '@dnzng/eslint-config-basic',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],

  settings: {
    // `@dnzng/basic already contains `plugin:import`
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] },
    },
  },

  // the overrides key has a higher priority than the rules key.
  overrides: basic.overrides.concat(
    !fs.existsSync(join(process.cwd(), tsconfig))
      ? []
      : [{
          parserOptions: {
            tsconfigRootDir: process.cwd(),
            project: [tsconfig],
          },
          parser: '@typescript-eslint/parser',
          excludedFiles: ['**/*.md/*.*'],
          files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
          // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended-requiring-type-checking.ts
          rules: {

          }
        }]
  ),

  rules: {
    
  },
}
