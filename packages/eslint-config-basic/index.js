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

  ignorePatterns: [
    '*.min.*',
    '*.d.ts',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'out',
    'coverage',
    'public',
    'temp',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    // ignore for in lint-staged
    '*.css',
    '*.png',
    '*.ico',
    '*.txt',
    // force include
    '!.github',
    '!.vitepress',
    '!.vscode',
    // force exclude
    '.vitepress/cache',
  ],

  overrides: [
    {
      files: ['*.json', '*.jsonc'],
      rules: {
        "quotes": ['error', 'double'],
        "quote-props": ['error', 'always']
      }
    },

    {
      files: ['package.json'],
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
              'keywords',

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

    {
      files: ['**/*.md/*.*'],
      rules: {
        'no-unused-expressions': 'off'
      }
    },
  ],

  rules: {
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
  }
}
