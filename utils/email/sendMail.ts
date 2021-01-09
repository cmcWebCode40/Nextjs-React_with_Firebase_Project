import { COMPANY_NAME, SITE_HOST } from './../../constant/brands'
import { mailSender } from './config'
interface userName {
  name: string
  email: string
  password: string
}

interface AuthDetails {
  name: string
  email: string
  password: string
}
export const inner = ({ name, email, password }: userName): string => {
  return `
  Welcom: <b>${name}</b>,
  <br/>
  You Have New Login:   
  <br/>
  <br/>
  *************New User******************
  <br/>
  <br/>
  <br/>
  Site ${SITE_HOST}  
  <br/>
  <br/>
  email: ${email}  
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  `
}

const sendRegMail = async (authDetails: AuthDetails): Promise<unknown> => {
  const message = inner(authDetails)
  try {
    const msg = {
      from: `${COMPANY_NAME} <${process.env.NEXT_PUBLIC_EMAIL2}>`,
      to: `${authDetails.email}`,
      subject: 'Welcome To My Portal',
      html: message,
    }

    return await mailSender(msg)
  } catch (error) {
    console.log({ error: 'Failed' })
  }
}

export default sendRegMail
