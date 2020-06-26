// Core
import { HotModuleReplacementPlugin } from 'webpack'
import merge from 'webpack-merge'

// Config
import getCommonConfig from './webpack.common'

// Modules
import * as modules from '../modules'

export default () => {
  return merge(getCommonConfig(), {
      mode: 'none',
      devtool: 'cheap-module-eval-source-map',
      entry: ['webpack-hot-middleware/client?reload=true&quiet=true'],
      plugins: [
        new HotModuleReplacementPlugin()
      ]
    },
    modules.loadDevCss(),
  )
}
