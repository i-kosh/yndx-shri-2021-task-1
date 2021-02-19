const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NodemonPlugin = require("nodemon-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const client = {
  mode: "development",
  resolve: {
    extensions: [".ts", ".js"],
  },
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "stories.js",
    publicPath: "/",
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!server.js"],
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin({ filename: "stories.css" }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
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
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /favicons.*\.(png|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "favicon[hash][ext]",
        },
      },
      {
        test: /avatars.*\.jpg$/i,
        type: "asset/resource",
        generator: {
          filename: "img/[name][ext]",
        },
      },
    ],
  },
};

const server = {
  mode: "development",
  resolve: {
    extensions: [".ts", ".js"],
  },
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
        exclude: [/node_modules/],
      },
    ],
  },
};

module.exports = [client, server];
