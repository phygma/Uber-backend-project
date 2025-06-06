const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
      name: String,
      email : { type: String, unique: true},
      password : String,
      role: {type: String, enum: ['driver', 'passenger']},
      location : {
            type: String,
            enum: ['Point'],
            default: 'Point'
      },
      coordinates : {
            type : [Number], 
            default: [0,0]
      }

})
// this is a pre saved middleware that runs before a document is saved to the database. 
userSchema.pre('save', async function (next) {
      if(!this.isModified('password')) {
            return next()
      }
      this.password = await bcrypt.hash(this.password, 10)
      next()
})

userSchema.methods.comparePassword = async function (password) {
      return await bcrypt.compare(password, this.password)
}

const User = mongoose.model('User', userSchema)
module.exports = User