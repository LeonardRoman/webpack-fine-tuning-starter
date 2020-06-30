// Core
import merge from 'webpack-merge'
import { DefinePlugin } from 'webpack'

// Constants
import { BUILD_DIRECTORY, SOURCE_DIRECTORY } from '../constants'

// Modules
import * as modules from '../modules'

export default () => {
  const { NODE_ENV } = process.env
  return merge({
      entry: [SOURCE_DIRECTORY],
      output: {
        path: BUILD_DIRECTORY,
        filename: 'bundle.js',
        publicPath: '/'
      },
      plugins: [
        new DefinePlugin({
          /*** Вычисляемые свойства ***
           * RELEASE: '2.0',
           * TWO: '1+1',
           * THREE: JSON.stringify(3),
           * FOUR: 4,
           * TRUE_SIMPLE: true,
           * TRUE_STRINGIFY: JSON.stringify(true)
           */
          __ENV__: JSON.stringify(NODE_ENV),
          __DEV__: NODE_ENV === 'development',
          __PROD__: NODE_ENV === 'production'
        })
      ]
    },
    modules.loadJavaScript(),
    modules.loadImages(),
    modules.loadSVG(),
    modules.loadFonts(),
    modules.setupHtml()
  )
}
