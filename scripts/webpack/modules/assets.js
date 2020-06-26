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
      },
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

export const loadSVG = () => ({
  module: {
    rules: [
      {
        test: /\.(svg)$/,
        issuer: {
          test: /\.js$/
        },
        use: [
          '@svgr/webpack',
          {
            loader: 'file-loader',
            options: {
              name: `./images/[name]--[hash:base64:5].[ext]`
            }
          },
        ],
      },
      {
        test: /\.(svg)$/,
        issuer: {
          test: /\.css$/
        },
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `./images/[name]--[hash:base64:5].[ext]`
            }
          },
        ],
      },
    ]
  }
})

export const loadFonts = () => ({
  module: {
    rules: [
      {
        test: /\.(woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `./fonts/[name].[ext]`
            }
          },
        ],
      },
    ]
  }
})
