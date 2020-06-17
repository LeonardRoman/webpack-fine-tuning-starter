// Core
const HTMLWebpackPlugin = require('html-webpack-plugin')
/**
 * Types configs webpack:
 * Object
 * Function
 * Promise
 **/

module.exports = () => {
  return {
    mode: 'none',
    devtool: false,
    plugins: [
      new HTMLWebpackPlugin({
        template: './static/template.html',
        title: 'Изучаем вебпак 💗'
      })
    ]
  }
}
