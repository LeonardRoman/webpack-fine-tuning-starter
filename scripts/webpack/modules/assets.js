import HTMLWebpackPlugin from 'html-webpack-plugin'
import { PUBLIC_DIRECTORY } from '../constants'

export const loadImages = () => ({
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `./images/[name]--[hash:base64:5].[ext]`
            }
          },
        ],
      }
    ]
  }
})

export const setupHtml = () => ({
  plugins: [
    new HTMLWebpackPlugin({
      template: PUBLIC_DIRECTORY + '/template.html',
      title: 'Изучаем вебпак 💗'
    }),
  ]
})
