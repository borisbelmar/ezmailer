import nodemailer from "nodemailer"

export default function getTransport ({ email, password }) {
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: email,
      pass: password
    }
  })
  return transport
}