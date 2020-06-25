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
import webpack from 'webpack'
import DevServer from 'webpack-dev-server'
import hot from 'webpack-hot-middleware'
import chalk from 'chalk'
// const openBrowser = require('react-dev-utils/openBrowser')

// Utils
import { choosePort } from './utils'

// Config
import getDevConfig from './config/webpack.dev'

const compiler = webpack(getDevConfig())

// Constant
import { HOST, PORT } from './constants'

(async () => {
  try {
    const selectedPort = await choosePort(PORT)
    if (!selectedPort) {
      console.log(chalk.yellowBright('It\'s impossible to run the app'))
      return null
    }

    const server = new DevServer(compiler, {
      host: HOST,
      port: selectedPort,
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
      selectedPort,
      HOST,
      () => {
        console.log(`${chalk.greenBright('Server listening on')} ${chalk.blueBright(`http://${HOST}:${selectedPort}`)}`)
        // openBrowser(`http://${HOST}:${selectedPort}`)
      })

  } catch (e) {
    console.log(chalk.redBright('Error!'))
    console.error(e.message || e)
  }

})()


