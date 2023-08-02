module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },

  // all of the following plugins have its own parser or processor,
  // so they can recongnize and lint the corresponding files.
  // you can find the track of the parsers in the exported file or
  // the dependencies property of package.json.

  // - @dnzng/standard: eslint's default parser for ES
  // - plugin:import/recommended: eslint's default parser for ES
  // - plugin:jsonc/recommended-with-jsonc: jsonc-eslint-parser for json、jsonc...
  // - plugin:yml/standard: yml-eslint-parser for yaml
  // - plugin:markdown/recommended: use its own defined processor for markdown
  extends: [
    '@dnzng/standard',
    'plugin:import/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:yml/standard',
    'plugin:markdown/recommended',
  ],

  overrides: [
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'name',
              'private',
              'type',
              'version',
              'description',
              'keywords',

              'packageManager',
              'engines',
              'sideEffects',

              'main',
              'module',
              'types',
              'exports',
              'files',
              'publishConfig',

              'author',
              'license',
              'homepage',
              'repository',
              'bugs',

              'scripts',
              'peerDependencies',
              'dependencies',
              'optionalDependencies',
              'devDependencies',

              'simple-git-hooks',
              'lint-staged',
            ]
          },
          {
            pathPattern: '^exports.*$',
            order: [
              'types',
              'import',
              'require',
              'default',
            ],
          },
        ]
      }
    },

    {
      files: ['scripts/**/*.*'],
      rules: {
        'no-console': 'off',
      },
    },
  ],

  rules: {

  }
}
