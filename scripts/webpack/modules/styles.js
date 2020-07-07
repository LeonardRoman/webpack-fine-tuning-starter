import postCssPreset from 'postcss-preset-env'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import cssnano from 'cssnano'

// cssnano - минификация
const loadPostCss = ({ sourceMap = false, minify = false } = { sourceMap: false, minify: false }) => {
  const plugins = [
    // цепочка плагинов postcss
    postCssPreset({
      stage: 0, //default: stage 2
      // Пример использования кастомных настроек postcss
      // features: {
      //   'custom-media-queries': {
      //     importFrom: [
      //       {
      //         customMedia: {
      //           '--phonePortrait': '(width <= 414px)',
      //           '--phoneLandscape': '(width >= 415px) and (width <= 667px)',
      //           '--tabletPortrait': '(width >= 668px) and (width <= 768px)',
      //           '--tabletLandscape': '(width >= 769px) and (width <= 1024px)',
      //           '--desktopS': '(width >= 1025px) and (width <= 1366px)',
      //           '--desktopM': '(width >= 1367px) and (width <= 1680px)',
      //           '--desktopL': '(width >= 1681px) and (width <= 1920px)',
      //           '--desktopXL': '(width >= 1921px)'
      //         }
      //       }
      //     ]
      //   }
      // }
    })
  ]
  if (minify) {
    plugins.push(cssnano)
  }
  return {
    loader: 'postcss-loader',
    options: {
      sourceMap,
      plugins
    }
  }
}
const loadCss = ({ sourceMap = false } = { sourceMap: false }) => ({
  loader: 'css-loader',
  options: {
    modules: { localIdentName: '[path][name]__[local]--[hash:base64:5]' },
    sourceMap
  }
})

export const loadDevCss = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // style loader - добавление css в head
          'style-loader',
          // css loader   - sourcemaps
          loadCss({ sourceMap: true }),
          // postcss loader
          loadPostCss({ sourceMap: true, minify: false })]
      }
    ]
  }
})

export const loadProdCss = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          //mini-css-loader
          MiniCssExtractPlugin.loader,
          // css loader - minify
          loadCss({ sourceMap: false }),
          //postcss loader
          loadPostCss({ sourceMap: false, minify: true })
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:5].[id].css',
      chunkFilename: 'css/[name].[contenthash:5].[id].css'
    })
  ]
})
