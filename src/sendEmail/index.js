import getAttachmentsFromDir from './getAttachmentsFromDir'
import getTransport from './getTransport'

export default async function sendEmail ({
  email,
  password,
  dir,
  to,
  subject,
  text
}) {
  const transport = getTransport({
    email,
    password
  })
  let attachments = []

  if (dir) {
    attachments = await getAttachmentsFromDir(dir)
  }

  const mail = {
    from,
    to,
    subject,
    text,
    attachments
  };

  try {
    console.log('Sending attachments: ', attachments.map(a => a.filename).join(', '), 'to:', to)
    const data = await transport.sendMail(mail)
    console.log(`Email sent successfully: ${data.response}`);
  } catch (error) {
    console.error(error)
  }
}
