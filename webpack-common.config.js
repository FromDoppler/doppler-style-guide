const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DotenvFlow = require("dotenv-flow-webpack");
const Dotenv = require("dotenv");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");

const rulesStyles = {
  test: /\.(sa|sc|c)ss$/,
  use: [
    MiniCssExtractPlugin.loader,
    "css-loader",
    {
      loader: "sass-loader",
      options: {
        sassOptions: {
          includePaths: [path.resolve(__dirname, "./src/assets/scss")],
        },
      },
    },
  ],
};

const mapFileManifest = (file) => {
  file.path = `${process.env.PUBLIC_URL}/${file.path}`;
  return file;
};

const serializeManifest = (seed, files, entries) => {
  files = files.map(mapFileManifest);
  const filesSerialized = {};
  for (const file of files) {
    filesSerialized[file.name] = file.path;
  }

  return {
    files: filesSerialized,
    entrypoints: entries.main,
  };
};

const generateHtmlPlugins = (templateDir) => {
  const directory = fs.readdirSync(path.resolve(__dirname, templateDir));
  return directory
    .filter((item) => /.html$/.test(item))
    .map((item) => {
      const parts = item.split(".");
      const [name, extension] = parts;
      return new HtmlWebpackPlugin({
        inject: false,
        filename: `documentation/${name}.html`,
        template: path.resolve(
          __dirname,
          `${templateDir}/${name}.${extension}`,
        ),
      });
    });
};

module.exports = function (env) {
  Dotenv.config({
    path: path.resolve(
      __dirname,
      `./.env.${env.NODE_ENV ? env.NODE_ENV : "development"}`,
    ),
  });
  return {
    entry: {
      main: "./src/index.js",
    },
    plugins: [
      ...generateHtmlPlugins("./src/documentation/templates"),
      new MiniCssExtractPlugin({
        filename: "static/[name].[contenthash].css",
      }),
      new DotenvFlow({
        node_env: env.NODE_ENV ? env.NODE_ENV : "development",
      }),
      new WebpackManifestPlugin({
        fileName: "asset-manifest.json",
        generate: serializeManifest,
      }),
    ],
    module: {
      rules: [
        rulesStyles,
        {
          test: /_head.html$/,
          loader: "string-replace-loader",
          options: {
            search: "%PUBLIC_URL%",
            replace: process.env.PUBLIC_URL,
          },
        },
      ],
    },
  };
};
