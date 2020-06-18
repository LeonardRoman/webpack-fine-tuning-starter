// Core
const { HotModuleReplacementPlugin } = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// Constants
const { BUILD_DIRECTORY, PROJECT_ROOT, PUBLIC_DIRECTORY, SOURCE_DIRECTORY } = require('./constants')
/**
 * Types configs webpack:
 * Object
 * Function
 * Promise
 **/

module.exports = () => {
  return {
    entry: [SOURCE_DIRECTORY, 'webpack-hot-middleware/client?reload=true&quiet=true'],
    output: {
      path: BUILD_DIRECTORY,
      filename: 'bundle.js'
    },
    mode: 'none',
    devtool: false,
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: PUBLIC_DIRECTORY + '/template.html',
        title: 'Изучаем вебпак 💗'
      }),
      new CleanWebpackPlugin({ verbose: true }),
      new HotModuleReplacementPlugin()
    ]
  }
}
