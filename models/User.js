const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  steamId: { type: String, unique: true },
  displayName: {type: String},
  profileURL: {type: String},
  avatar: {type: String},
  avatarMedium: {type: String},
  avatarFull: {type: String},
})


// Password hash middleware.
 
//  UserSchema.pre('save', function save(next) {
//   const user = this
//   if (!user.isModified('password')) { return next() }
//   bcrypt.genSalt(10, (err, salt) => {
//     if (err) { return next(err) }
//     bcrypt.hash(user.password, salt, (err, hash) => {
//       if (err) { return next(err) }
//       user.password = hash
//       next()
//     })
//   })
// })


// Helper method for validating user's password.

// UserSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
//   bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
//     cb(err, isMatch)
//   })
// }


module.exports = mongoose.model('User', UserSchema)
