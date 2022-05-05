const commonConfig = require("./webpack-common.config");
const path = require("path");

module.exports = function (env) {
  const config = commonConfig(env);

  config.output = {
    filename: "index.js",
    assetModuleFilename: "static/media/[hash][ext][query]",
    path: path.resolve(__dirname, "dist"),
    publicPath: "auto",
    clean: true,
  };

  config.mode = "development";
  config.devtool = "inline-source-map";
  config.devServer = {
    historyApiFallback: true,
    static: "./dist",
    port: 3500,
  };
  config.watchOptions = {
    ignored: [path.resolve(__dirname, "src"), "./node_modules"],
  };

  return config;
};
