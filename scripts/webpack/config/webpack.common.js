// Core
import merge from 'webpack-merge'

// Constants
import { BUILD_DIRECTORY, SOURCE_DIRECTORY } from '../constants'

// Modules
import * as modules from '../modules'

export default () => {
  return merge({
      entry: [SOURCE_DIRECTORY],
      output: {
        path: BUILD_DIRECTORY,
        filename: 'bundle.js'
      },
    },
    modules.loadJavaScript(),
    modules.loadImages(),
    modules.loadSVG(),
    modules.loadFonts(),
    modules.setupHtml()
  )
}
