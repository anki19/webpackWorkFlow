const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },
  mode: 'development',
  module: {
    rules: [
      {
         test: /\.(png|jpg)$/,
         use: [
           'file-loader'
         ]
      },
      {
         test: /\.css$/,
         use: [
           MiniCssExtractPlugin.loader, 'css-loader'
         ]
      },
      {
         test: /\.scss$/,
         use: [
           MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
         ]
      },
      {

        test:/\.js$/,
        exclude: /node_modules/,
         use: {
           loader: 'babel-loader',
           options: {
             presets:['@babel/env'],
            plugins: ['transform-class-properties']

           }
         }

      },
      {
        test: /\.hbs$/,
         use: [
          'handlebars-loader'
        ]
      }

    ]
  },
  plugins: [
    new UglifyJsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles.[hash].css'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.join(process.cwd(), 'src/trash')]
    }),
    new HtmlWebpackPlugin({
      title: 'Branding Pond',
      template: 'src/index.hbs',
      description: 'Some information'
    })



  ]
};
