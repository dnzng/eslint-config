const basic = require('@dnzng/eslint-config-basic')

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

  overrides: basic.overrides.concat(),

  rules: {
    
  },
}
