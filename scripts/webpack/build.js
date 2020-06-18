// Core
const webpack = require('webpack')
const chalk = require('chalk')

//config
const getConfig = require('./webpack.config')
const compiler = webpack(getConfig())

compiler.run((err, stats) => {
  if (err) {
    // ошибка конфигурации
    console.error(err.stack || err)
    if (err.message) console.error(error.message)
    return null
  }
  const info = stats.toString({
    colors: true,
    env: true,
    hash: true,
    version: true,
    builtAt: false,
    entrypoints: false,
    modules: false,
  })

  console.log(chalk.greenBright('✔ Build completed'))
  console.error(info)

  if (stats.hasErrors()) {
    // ошибка компиляции (битый импорт, ошибка синтаксиса, etc)
    console.log(chalk.redBright('💀 Error!'))
    console.error(info)
  }
  if (stats.hasWarnings()) {
    // Предупреждения во время компиляции
    console.log(chalk.yellowBright('⚠ Warning'))
    console.error(info)
  }
})

