const { GMAIL_SENDER, GMAIL_PASSWORD, ATTACHMENTS_DIR } = process.env

export default function validateInput ({ email, password, dir, to }) {
  const validatedData = {
    email: email || GMAIL_SENDER,
    password: password || GMAIL_PASSWORD,
    dir: dir || ATTACHMENTS_DIR,
    to: to || email || GMAIL_SENDER,
    subject: subject || 'Sent using EZMailer',
    text: text || 'This is a mail from EZMailer'
  }

  if (!validatedData.email) {
    console.error('Email is required')
    process.exit(1)
  }
  if (!validatedData.password) {
    console.error('Password is required')
    process.exit(1)
  }
  return validatedData
}