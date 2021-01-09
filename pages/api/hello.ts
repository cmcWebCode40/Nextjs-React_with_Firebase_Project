import { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from '../../utils/mongodb'

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  res.statusCode = 200
  await connectToDatabase()
  try {
    // const posts = await Pet.find();
    res.json('posts')
  } catch (error) {
    res.json({ message: error })
  }
}
