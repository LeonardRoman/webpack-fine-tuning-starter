// Core
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import merge from 'webpack-merge'

// Config
import getCommonConfig from './webpack.common'

export default () => {
  return merge(getCommonConfig(), {
    mode: 'none',
    devtool: false,
    plugins: [
      new CleanWebpackPlugin({ verbose: true }),
    ]
  })
}
