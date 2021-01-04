const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const webpack = require("webpack")
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDev = process.env.NODE_ENV === "development"

const sourceMap = isDev

const plugins = [
  // ホットリロード
  isDev && new ReactRefreshWebpackPlugin(),

  // typescriptの型チェックとeslintを高速化
  new ForkTsCheckerWebpackPlugin(),

  // CSSファイル外部化
  new MiniCssExtractPlugin({
    filename: "css/main.css",
  }),

  // 環境変数
  new webpack.EnvironmentPlugin(Object.keys(process.env)),

  // ファイルコピー
  !isDev && new CopyPlugin({ patterns: [{ from: "public", to: "." },] }),

  // distディレクトリの削除
  new CleanWebpackPlugin(),

].filter(Boolean)

module.exports = {
  mode: isDev ? "development" : "production",

  // ソースマップ
  devtool: isDev ? "inline-source-map" : false,

  entry: "./src/index.tsx",

  output: {
    path: `${__dirname}/dist`,
    filename: "js/[name].js",
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: `${__dirname}/src`,
        exclude: "/node_modules/",
        use: [
          isDev && {
            loader: "babel-loader",
            options: { plugins: ['react-refresh/babel'] },
          },
          {
            loader: "ts-loader",
            options: { transpileOnly: true, }
          }
        ].filter(Boolean)
      },
      {
        test: /\.scss$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap,
                import: false,
                modules: {
                  localIdentContext: `${__dirname}/src`,
                  localIdentName: "[path][name]__[local]--[hash:base64:5]"
                }
              }
            },
            "sass-loader"
        ]
      },
    ].filter(Boolean),
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    // TypeScriptのPathsを効くようにする
    plugins: [ new TsconfigPathsPlugin() ],
  },

  plugins,

  // IE11対応
  target: isDev ? "web" : ["web", "es5"],

  stats: {
    colors: true,
  },

  devServer: {
    contentBase: `${__dirname}/public`,
    host: "0.0.0.0",
    port: 9000,
    hot: true,
  },

}
