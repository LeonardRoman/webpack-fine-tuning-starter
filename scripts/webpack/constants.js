// Core
const { resolve } = require('path')
const { path: PROJECT_ROOT } = require('app-root-path')

// the path(s) that should be cleaned
exports.PROJECT_ROOT = PROJECT_ROOT
exports.BUILD_DIRECTORY = resolve(PROJECT_ROOT, './build')
exports.SOURCE_DIRECTORY = resolve(PROJECT_ROOT, './src')
exports.PUBLIC_DIRECTORY = resolve(PROJECT_ROOT, './static')
exports.HOST = 'localhost'
exports.PORT = 3000
