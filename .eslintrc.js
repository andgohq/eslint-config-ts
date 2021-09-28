const path = require('path');

module.exports = {
  // disable finding a parent config file
  root: true,
  parser: '@typescript-eslint/parser',
  env: { node: true },
  extends: [
    'eslint:recommended',
    // fundamental pack which does not include type checking
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    // turn off all rules that are unnecessary or might conflict with Prettier
    'prettier',
  ],
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  parserOptions: {
    project: path.resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    createDefaultProgram: true,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'class',
        format: ['PascalCase'],
      },
      {
        selector: 'classMethod',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
      },
      {
        selector: 'property',
        format: null,
      },
      {
        selector: 'typeProperty',
        format: ['camelCase', 'UPPER_CASE'],
      },
      { selector: 'parameter', format: ['camelCase'], leadingUnderscore: 'allow', trailingUnderscore: 'allow' },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'variable',
        modifiers: ['const'],
        format: null,
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase', 'UPPER_CASE'],
      },
    ],
    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': [
      'warn',
      // Always require blank lines after directive (like 'use-strict'), except between directives
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
      // Always require blank lines after import, except between imports
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'any', prev: 'import', next: 'import' },
      // Always require blank lines before and after every sequence of variable declarations and export
      { blankLine: 'always', prev: '*', next: ['const', 'let', 'var', 'export'] },
      { blankLine: 'always', prev: ['const', 'let', 'var', 'export'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var', 'export'], next: ['const', 'let', 'var', 'export'] },
      // Always require blank lines before and after class declaration, if, do/while, switch, try
      { blankLine: 'always', prev: '*', next: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'] },
      { blankLine: 'always', prev: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'], next: '*' },
      // Always require blank lines before return statements
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'no-console': 'off',
    'no-empty': 'off',
    'object-shorthand': ['warn'],

    // vscode have the same rule
    '@typescript-eslint/no-unused-vars': 'off',
  },
};
