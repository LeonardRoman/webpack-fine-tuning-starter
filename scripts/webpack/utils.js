import chalk from 'chalk'
import detectPort from 'detect-port-alt'
import inquirer from 'inquirer'

exports.choosePort = async (defaultPort) => {
  try {
    const port = await detectPort(defaultPort)
    if (port === defaultPort) return defaultPort

    const message = `Port ${defaultPort} is already in use`

    if (process.stdout.isTTY) {
      const questionName = 'changePort'
      const question = {
        type: 'confirm',
        name: questionName,
        message: chalk.yellowBright(`${message} Don you want to run the app on another port?`),
        default: true
      }
      const result = await inquirer.prompt(question)
      return result[questionName] ? port : null
    }

    console.log(chalk.redBright(`${message}`))

  } catch (e) {
    console.log(chalk.redBright(`Error!`))
    console.error(e.message || e)
    throw e
  }

  return null

}
