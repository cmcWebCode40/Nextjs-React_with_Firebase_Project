import nodemailer from 'nodemailer'

const transport = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
}

interface Msg {
  from: string
  to: string
  subject: string
  html: string
}

export const mailSender = async (msg: Msg): Promise<void> => {
  const transporter = await nodemailer.createTransport(transport)

  transporter.verify((error: unknown) => {
    if (error) {
      console.error(error)
    } else {
      console.log('users ready to mail myself')
    }
  })

  await transporter.sendMail(msg)
}
