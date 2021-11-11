module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  plugins: [
    'react',
    'sonarjs'
  ],
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:sonarjs/recommended'
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    '@typescript-eslint/restrict-template-expressions': 0, // Turning this off for now.
    '@typescript-eslint/strict-boolean-expressions': 0, // Turning this off for now.
    'react/prop-types': 0, // will be generating proptypes from typescript
    '@typescript-eslint/no-var-requires': 0
  }
}
