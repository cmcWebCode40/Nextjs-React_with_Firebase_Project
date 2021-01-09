import { NextApiRequest, NextApiResponse } from 'next'
import sendRegMail from '../../utils/email/sendMail'

export default async (req: NextApiRequest, res: NextApiResponse): Promise<unknown> => {
  res.statusCode = 200
  try {
    const { name, email } = req.body
    sendRegMail({ name, email })
    return res.json({ data: 'success' })
  } catch (error) {
    res.json({ error: 'Failed' })
  }
}
