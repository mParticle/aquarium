module.exports = {
  env: {
    browser: true,
    es2024: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['standard-with-typescript', 'eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    extraFileExtensions: ['.md', '.css'],
  },
  plugins: ['react', 'react-hooks'],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { allowNamedExports: true }],
    'react/react-in-jsx-scope': 'off',
    'import/no-duplicates': 'off'
  },
  globals: {
    React: true,
    expect: true,
  },
}
