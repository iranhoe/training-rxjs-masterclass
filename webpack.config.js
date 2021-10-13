const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: {
    debugger: ['./src/scripts/debugger.js', './src/stylesheets/debugger.scss'],
    index: ['./src/scripts/index.js', './src/stylesheets/main.scss']
  },
  target: 'web',
  devtool: 'inline-source-map',
  optimization: {
    splitChunks: {
      chunks: "all",
    }
  },
  devServer: {
    client: {
      logging: 'none'
    },
    static: './dist',
    liveReload: true
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
        title: 'Javascript Playground',
        template: 'public/index.html'
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/'
  },
  module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(sass|scss|css)$/i,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource'
        }
      ]
  }
};