module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      project: './tsconfig.json',
      'jsx': true
    },
    "plugins": ["sonarjs"],
    extends: [
      'plugin:react/recommended',
      'standard-with-typescript'
    ],
    settings: {
      emitWarning: true,
      react: {
        createClass: 'createReactClass', // Regex for Component Factory to use,
                                           // default to 'createReactClass'
        pragma: 'React',  // Pragma to use, default to 'React'
        version: 'detect', // React version. 'detect' automatically picks the version you have installed.
                             // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                             // default to latest and warns if missing
                             // It will default to 'detect' in the future
        flowVersion: '0.53' // Flow version
      },
      propWrapperFunctions: [
          // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
          'forbidExtraProps',
          {'property': 'freeze', 'object': 'Object'},
          {'property': 'myFavoriteWrapper'}
      ],
      linkComponents: [
        // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
        'Hyperlink',
        {'name': 'Link', 'linkAttribute': 'to'}
      ]
    },
    rules: {
      // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
      // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-function-return-type': 2,
      '@typescript-eslint/triple-slash-reference': 'off',
      'no-console': 'error',
      'react/prop-types': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/restrict-plus-operands': 'off'
    }
  }
