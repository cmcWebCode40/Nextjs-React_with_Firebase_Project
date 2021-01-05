
import { NextApiRequest, NextApiResponse  } from 'next';
import {connectToDatabase} from './middlewares/database'


export default async (req:NextApiRequest, res:NextApiResponse) => {
  const { db } = await connectToDatabase();
  const movies = await db.collection("email_address").find()
    console.log(movies);
  res.json(movies);
};