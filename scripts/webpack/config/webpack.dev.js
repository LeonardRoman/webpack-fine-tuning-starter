// Core
import { HotModuleReplacementPlugin } from 'webpack'
import merge from 'webpack-merge'

// Config
import getCommonConfig from './webpack.common'

module.exports = () => {
  return merge(getCommonConfig(), {
    mode: 'none',
    devtool: false, // TODO: настроить source map
    entry: ['webpack-hot-middleware/client?reload=true&quiet=true'],
    plugins: [
      new HotModuleReplacementPlugin()
    ]
  })
}
