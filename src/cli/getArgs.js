const args = [
  {
    name: 'dir',
    alias: ['d'],
    description: 'Directory where the files are located. You can use the environment variable ATTACHMENTS_DIR'
  },
  {
    name: 'email',
    alias: ['e'],
    description: 'Email address from you send the files. Only supports Gmail address. You can use the environment variable GMAIL_SENDER'
  },
  {
    name: 'password',
    alias: ['p'],
    description: 'Password from your email address. If doesn\'t work, use an application password. You can use the environment variable GMAIL_PASSWORD'
  },
  {
    name: 'to',
    alias: ['t'],
    description: 'Email address that will receive the files. By default, the same as the sender'
  },
  {
    name: 'subject',
    alias: ['s'],
    description: 'Subject of the email'
  },
  {
    name: 'text',
    alias: ['x'],
    description: 'Text of the email'
  }
]

export default function getArgs (yargsInstance) {
  return args.reduce((yargs, arg) => {
    return yargs[arg.type || 'string'](arg.name)
      .alias(arg.name, arg.alias)
      .describe(arg.name, arg.description)
  }, yargsInstance)
}