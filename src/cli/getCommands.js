import validateInput from "./validateInput"

const commands = [
  {
    name: 'send',
    description: 'Send files from a directory',
    handler: function (argv) {
      const data = validateInput(argv)
      sendEmail(data)
    }
  }
]

export default  function getCommands (yargsInstance) {
  return commands.reduce((yargs, command) => {
    return yargs.command(
      command.name,
      command.description,
      function ({ argv }) {
        command.handler(argv)
      }
    )
  }, yargsInstance)
}