const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NodemonPlugin = require("nodemon-webpack-plugin");

/** @type {import('webpack').Configuration} */
const commonConf = {
  mode: "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

/** @type {import('webpack').Configuration} */
const client = {
  ...commonConf,

  target: "web",

  entry: ["./src/index.ts", "./src/scss/index.scss"],

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "stories.js",
    publicPath: "/",
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new MiniCssExtractPlugin({ filename: "stories.css" }),
  ],

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        include: [path.resolve(__dirname, "src")],
        exclude: [/node_modules/],
      },
      {
        test: /.(sa|sc|c)ss$/,

        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",

            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",

            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};

/** @type {import('webpack').Configuration} */
const server = {
  ...commonConf,

  target: "node",

  entry: ["./src/server.ts"],

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "server.js",
  },

  plugins: [new webpack.ProgressPlugin(), new NodemonPlugin()],

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        include: [path.resolve(__dirname, "src")],
        exclude: [/node_modules/],
      },
    ],
  },
};

module.exports = [client, server];
