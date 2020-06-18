/*** Dev server ***
 * 1. webpack
 * 2. webpack-dev-server
 * 3. webpack-hot-middleware
 * 4. config
 * 5. compiler
 * 6. run
 ***/
/*** Hot Reloading***
 * 1. Настроить на сервере
 * 2. Настроить на клиенте
 * 3. Настроить в кофиге webpack
 * 3. Настроить на исходном коде
 ***/
// Core
const webpack = require('webpack')
const DevServer = require('webpack-dev-server')
const hot = require('webpack-hot-middleware')
const chalk = require('chalk')

// Config
const getConfig = require('./webpack.config')
const compiler = webpack(getConfig())

// Constant
const { HOST, PORT } = require('./constants')

const server = new DevServer(compiler, {
  host: HOST,
  port: PORT,
  historyApiFallback: true,
  overlay: true,
  quiet: true,
  clientLogLevel: 'none',
  noInfo: true,
  after: (app) => {
    app.use(hot(
      compiler,
      {
        log: false,
      }))
  }
})

server.listen(
  PORT,
  HOST,
  () => {
    console.log(`${chalk.greenBright('Server listening on')} ${chalk.blueBright(`http://${HOST}:${PORT}`)}`)
  })
