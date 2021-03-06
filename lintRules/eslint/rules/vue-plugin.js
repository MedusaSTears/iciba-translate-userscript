module.exports = {
  'extends': [
    // 'plugin:vue/essential',
  ],

  'overrides': [
    {
      'files': ['*.vue'],

      'parser': 'vue-eslint-parser',
      'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module',
        'ecmaFeatures': {
          'jsx': true,
        },
      },

      'env': {
        'browser': true,
        'es6': true,
      },

      'plugins': [
        'vue',
      ],

      'rules': {
        // disable some rules due to vue-eslint-parset limitation
        // https://github.com/mysticatea/vue-eslint-parser#%EF%B8%8F-known-limitations
        'indent': 'off',
        'max-len': 'off',

        // base
        'vue/comment-directive': 'error',
        'vue/jsx-uses-vars': 'error',

        // essential
        'vue/no-async-in-computed-properties': 'error',
        'vue/no-dupe-keys': 'error',
        'vue/no-duplicate-attributes': 'error',
        'vue/no-parsing-error': 'error',
        'vue/no-reserved-keys': 'error',
        'vue/no-shared-component-data': 'error',
        'vue/no-side-effects-in-computed-properties': 'error',
        'vue/no-template-key': 'error',
        'vue/no-textarea-mustache': 'error',
        'vue/no-unused-components': 'error',
        'vue/no-unused-vars': 'error',
        'vue/no-use-v-if-with-v-for': 'error',
        'vue/require-component-is': 'error',
        'vue/require-prop-type-constructor': 'error',
        'vue/require-render-return': 'error',
        'vue/require-v-for-key': 'error',
        'vue/require-valid-default-prop': 'error',
        'vue/return-in-computed-property': 'error',
        'vue/use-v-on-exact': 'error',
        'vue/valid-template-root': 'error',
        'vue/valid-v-bind': 'error',
        'vue/valid-v-cloak': 'error',
        'vue/valid-v-else-if': 'error',
        'vue/valid-v-else': 'error',
        'vue/valid-v-for': 'error',
        'vue/valid-v-html': 'error',
        'vue/valid-v-if': 'error',
        'vue/valid-v-model': 'error',
        'vue/valid-v-on': 'error',
        'vue/valid-v-once': 'error',
        'vue/valid-v-pre': 'error',
        'vue/valid-v-show': 'error',
        'vue/valid-v-text': 'error',

        // strongly-recommended
        'vue/attribute-hyphenation': ['error', 'always'],
        'vue/html-closing-bracket-newline': ['error', {
          'singleline': 'never',
          'multiline': 'never',
        }],
        'vue/html-closing-bracket-spacing': ['error', {
          'startTag': 'never',
          'endTag': 'never',
          'selfClosingTag': 'always',
        }],
        'vue/html-end-tags': ['error'],
        'vue/html-indent': ['error', 2, {
          'attribute': 1,
          'closeBracket': 0,
          'alignAttributesVertically': false,
          'ignores': [],
        }],
        'vue/html-quotes': ['error', 'double'],
        'vue/html-self-closing': ['off'],
        'vue/max-attributes-per-line': ['off'],
        'vue/multiline-html-element-content-newline': 'error',
        'vue/mustache-interpolation-spacing': [2, 'always'],
        'vue/name-property-casing': ['error', 'PascalCase'],
        'vue/no-multi-spaces': 'error',
        'vue/no-spaces-around-equal-signs-in-attribute': 'error',
        'vue/no-template-shadow': 'error',
        'vue/prop-name-casing': ['error', 'camelCase'],
        'vue/require-default-prop': 'error',
        'vue/require-prop-types': 'error',
        'vue/singleline-html-element-content-newline': ['off'],
        'vue/v-bind-style': ['error', 'shorthand'],
        'vue/v-on-style': ['error', 'shorthand'],

        // recommended
        'vue/attributes-order': ['off'],
        'vue/no-v-html': ['off'],
        'vue/order-in-components': ['off'],
        'vue/this-in-template': ['error', 'never'],

        // Uncategorized
        'vue/array-bracket-spacing': ['error', 'never'],
        'vue/arrow-spacing': ['error', { 'before': true, 'after': true }],
        'vue/block-spacing': ['error', 'always'],
        'vue/brace-style': ['error', '1tbs'],
        'vue/camelcase': ['error'],
        'vue/comma-dangle': ['error', 'always-multiline'],
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],
        // 'vue/dot-location': ['error', 'property'],
        'vue/eqeqeq': ['error'],
        'vue/key-spacing': ['error'],
        // 'vue/keyword-spacing': ['error'],
        'vue/match-component-file-name': ['error'],
        'vue/no-boolean-default': ['error'],
        // 'vue/no-empty-pattern': ['error'],
        'vue/no-restricted-syntax': ['off'],

        'vue/object-curly-spacing': ['error', 'always'],
        'vue/require-direct-export': ['off'],
        'vue/script-indent': ['error', 2, {
          'baseIndent': 1,
          'switchCase': 1,
          'ignores': [],
        }],
        'vue/space-infix-ops': ['error'],
        'vue/space-unary-ops': ['error'],
        'vue/v-on-function-call': ['off'],
      },
    },
  ],
}
