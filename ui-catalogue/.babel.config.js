module.exports = {
  "presets": [
    ["@babel/env", {
      "targets": "> 0.25%",
      "useBuiltIns": false
    }],
    "@babel/preset-react",
    ["@babel/preset-typescript", { "allExtensions": true, "isTSX": true }],

  ],
  "plugins": [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread"
  ]
}
