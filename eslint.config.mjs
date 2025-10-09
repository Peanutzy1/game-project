// ESLint Flat Config format (for ESLint v8.21.0+)
import eslint from '@eslint/js';
import globals from 'globals';

export default [
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {
      // Possible Errors
      'no-debugger': 'error',
      'no-dupe-args': 'error',
      'no-duplicate-case': 'error',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-extra-semi': 'error',
      'no-unreachable': 'error',

      // Best Practices
      'curly': ['error', 'all'],
      'eqeqeq': ['error', 'always'],
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-multi-spaces': 'error',
      'no-with': 'error',
      'yoda': ['error', 'never'],

      // Variables
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-undef': 'error',

      // Stylistic Issues
      'array-bracket-spacing': ['error', 'never'],
      'block-spacing': ['error', 'always'],
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'camelcase': ['warn', { properties: 'never' }],
      'comma-dangle': ['error', 'only-multiline'],
      'comma-spacing': ['error', { before: false, after: true }],
      'eol-last': ['error', 'always'],
      'indent': ['error', 2, { SwitchCase: 1 }],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'max-len': ['warn', { code: 100 }],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'object-curly-spacing': ['error', 'always'],
      'quotes': ['error', 'single', { avoidEscape: true }],
      'semi': ['error', 'always'],
      'space-before-blocks': ['error', 'always'],
      'space-before-function-paren': ['error', 'never'],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': 'error',
      'spaced-comment': ['error', 'always', { markers: ['/'] }],

      // ECMAScript 6
      'arrow-spacing': ['error', { before: true, after: true }],
      'no-var': 'error',
      'prefer-const': ['error', { destructuring: 'all' }],
      'prefer-template': 'warn',
      'template-curly-spacing': ['error', 'never'],
    },
  },
  eslint.configs.recommended,

  {
    files: ['main.js'],
    rules: {
      'no-unused-vars': 'off'
    }
  }
];
