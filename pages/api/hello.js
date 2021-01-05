// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default (req, res) => {
  
//   res.statusCode = 200;
//   res.json({ name: 'John Doe ,scskdjksdjkj' });
// };



import {connectToDatabase} from './middlewares/database'


export default async (req, res) => {
    res.statusCode = 200;
  const { db } = await connectToDatabase();
  const movies = await db.collection("bagshowcases").find()
    console.log(movies);
  // res.json(movies);
    res.json({ name: 'John Doe ,scskdjksdjkj' });
};