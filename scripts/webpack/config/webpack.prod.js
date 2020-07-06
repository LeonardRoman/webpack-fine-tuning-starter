// Core
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import WebpackBar from 'webpackbar'
import merge from 'webpack-merge'

// Config
import getCommonConfig from './webpack.common'

// Modules
import * as modules from '../modules'

export default () => {
  return merge(getCommonConfig(), {
      mode: 'production', // перезаписывает NODE_ENV
      devtool: false,
      plugins: [
        new CleanWebpackPlugin({ verbose: true }),
        new WebpackBar()
      ]
    },
    modules.loadProdCss(),
    modules.optimizeImages(),
    modules.optimizeBuild(),
    modules.connectBundleAnalyzer()
  )
}
