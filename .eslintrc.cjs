module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    // 'plugin:simple-import-sort',
  ],
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages `react` related packages come first.
              ['^react', '^@?\\w'],
              // Internal packages.
              ['^(@|components)(/.*|$)'],
              // Side effect imports.
              ['^\\u0000'],
              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports.
              ['^.+\\.?(css)$'],
            ],
          },
        ],
      },
    },
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json'],
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'simple-import-sort',
    'eslint-plugin-unused-imports',
    'sort-destructure-keys',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'react/no-array-index-key': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react/self-closing-comp': ['error', { component: true, html: true }],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
      },
    ],
    'no-console': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    // 'multiline-ternary': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': 'error',
    'no-magic-numbers': 'error',
    // 'sort-keys': ['error', 'asc', { caseSensitive: false, natural: true, minKeys: 2 }],
    'sort-vars': ['error', { ignoreCase: true }],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        multiline: 'last',
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: ['key'],
        locale: 'auto',
      },
    ],
    'sort-destructure-keys/sort-destructure-keys': ['error', { caseSensitive: false }],
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 0, maxEOF: 1 }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};