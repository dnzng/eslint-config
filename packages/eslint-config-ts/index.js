module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    // `@dnzng/general` already contains `plugin:import`
    '@dnzng/general',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] },
    },
  },

  rules: {
    
  },
}
