// Core
const HTMLWebpackPlugin = require('html-webpack-plugin')

// Constants
const { BUILD_DIRECTORY, PUBLIC_DIRECTORY, SOURCE_DIRECTORY } = require('../constants')

module.exports = () => {
  return {
    entry: [SOURCE_DIRECTORY],
    output: {
      path: BUILD_DIRECTORY,
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          //TODO: Прокачать загрузку стилей
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
    ]
  }
}
