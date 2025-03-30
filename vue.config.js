const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = defineConfig({
  devServer: {
    port: 3000,
  },
  transpileDependencies: true,
  css: {
    extract: true,
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: "true",

        __VUE_PROD_DEVTOOLS__: "false",

        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
      }),
      new BundleAnalyzerPlugin(),
    ],
  },
});
