// Core
import { resolve } from 'path'
import { path as PROJECT_ROOT } from 'app-root-path'

// the path(s) that should be cleaned
export { PROJECT_ROOT }
export const BUILD_DIRECTORY = resolve(PROJECT_ROOT, './build')
export const SOURCE_DIRECTORY = resolve(PROJECT_ROOT, './src')
export const PUBLIC_DIRECTORY = resolve(PROJECT_ROOT, './static')
export const HOST = 'localhost'
export const PORT = 3000
