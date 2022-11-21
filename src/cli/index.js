import yargs from 'yargs'
import getArgs from './getArgs'
import getCommands from './getCommands'
import packageJson from '../../package'
import printWelcomeMessage from './printWelcomeMessage'
import chalk from 'chalk'

export default function cli () {
  printWelcomeMessage()
  const yargsInstance = yargs
    .scriptName('ezmailer')
    .usage('$0 <cmd> [args]')
    .demandCommand(1, chalk.redBright('You need at least one command before moving on'))
    .version(packageJson.version)

  const yargsWithCommands = getCommands(yargsInstance)

  const yargsWithArgs = getArgs(yargsWithCommands)

  yargsWithArgs
    .help()
    .argv
}