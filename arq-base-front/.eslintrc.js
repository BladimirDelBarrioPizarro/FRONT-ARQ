module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      project: './tsconfig.json'
    },
    "plugins": ["sonarjs"],
    extends: [
      'standard-with-typescript',
      'plugin:sonarjs/recommended'
    ],
    rules: {
      // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
      // e.g. "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-function-return-type": 2,
      "@typescript-eslint/strict-boolean-expressions": 2,
      "no-console": "error",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/promise-function-async": "off"
    }
  }
