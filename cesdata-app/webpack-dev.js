// development config
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack-common");
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = merge(commonConfig, {
  mode: "development",
  entry: [
    "webpack-dev-server/client?http://localhost:8080", // bundle the client for webpack-dev-server and connect to the provided endpoint
    "./src/index.tsx", // the entry point of our app
  ],
  output: {
    publicPath: "/",
  },
  devServer: {
    open: true,
    historyApiFallback: true,
  },
  devtool: "cheap-module-eval-source-map",
  // REFACTOR: It is comment for the new architecture
  // plugins: [
  //   new Dotenv({
  //     path: path.resolve(__dirname, '.env.local')
  //   })
  // ]
});
