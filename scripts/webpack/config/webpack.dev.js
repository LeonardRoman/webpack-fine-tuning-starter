// Core
import { HotModuleReplacementPlugin } from 'webpack'
import merge from 'webpack-merge'
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin'

// Config
import getCommonConfig from './webpack.common'

// Modules
import * as modules from '../modules'

export default () => {
  return merge(getCommonConfig(), {
      mode: 'none',
      output: {
        filename: 'js/[name].[hash].[id].js',
      },
      devtool: 'cheap-module-eval-source-map',
      entry: ['webpack-hot-middleware/client?reload=true&quiet=true'],
      plugins: [
        new HotModuleReplacementPlugin(),
        new FriendlyErrorsWebpackPlugin()
      ]
    },
    modules.loadDevCss(),
  )
}
