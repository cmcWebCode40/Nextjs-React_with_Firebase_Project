import mongoose from 'mongoose'

const MONGODB_URI =
  'mongodb+srv://mike_123:chi2000@cluster0-ksjh1.mongodb.net/?retryWrites=true&w=majority'

async function dbConnect(): Promise<unknown> {
  // check if we have a connection to the database or if it's currently
  // connecting or disconnecting (readyState 1, 2 and 3)
  if (mongoose.connection.readyState >= 1) return

  return mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
}

export default dbConnect
