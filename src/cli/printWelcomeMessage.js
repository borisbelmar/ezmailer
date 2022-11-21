import chalk from 'chalk'

export default function printWelcomeMessage () {
  console.log(chalk.bold.green('Welcome to ezmailer!'))
  console.log(chalk.cyan('If need more info, run ezmailer --help \n'))
}