import mongoose from 'mongoose'

const Email = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.models.Admin || mongoose.model('Admin', Email)
