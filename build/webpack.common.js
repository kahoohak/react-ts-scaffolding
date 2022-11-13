const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "../src"),
        use: [
          // 将 JS 字符串生成为 style 节点
          "style-loader",
          // 将 CSS 转化成 CommonJS 模块
          "css-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: path.resolve(__dirname, "../src"),
        type: "asset/resource",
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/i,
        include: path.resolve(__dirname, "../src"),
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
