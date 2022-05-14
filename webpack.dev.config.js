const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "build"),
    clean: true,
    publicPath: "",
  },
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.ejs$/,
        use: ["ejs-compiled-loader"],
      },
      {
        test: /\.(jpg|png)$/,
        use: ["file-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/template.ejs",
      title: "Development",
    }),
  ],
};
