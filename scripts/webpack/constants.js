// Core
import { resolve } from 'path'
import { path } from 'app-root-path'

// the path(s) that should be cleaned
exports.PROJECT_ROOT = path
exports.BUILD_DIRECTORY = resolve(path, './build')
exports.SOURCE_DIRECTORY = resolve(path, './src')
exports.PUBLIC_DIRECTORY = resolve(path, './static')
exports.HOST = 'localhost'
exports.PORT = 3000
